import { normalizeKeyword } from '@/lib/search-intelligence/normalize'
import { fetchGoogleAutocomplete, DataForSeoError } from '@/lib/search-intelligence/dataforseo/client'
import {
  confirmationThreshold,
  dailyRequestLimit,
  isDataForSeoConfigured,
  maxRequestsPerRun,
  microTestMaxLiveCalls,
} from '@/lib/search-intelligence/dataforseo/config'
import { getAutocompleteCache, setAutocompleteCache } from '@/lib/search-intelligence/dataforseo/cache'
import { resolveDataForSeoLocation } from '@/lib/search-intelligence/dataforseo/locations'
import {
  checkDailyLimit,
  recordDataForSeoCacheHit,
  recordDataForSeoLiveCall,
} from '@/lib/search-intelligence/dataforseo/usage'
import { estimateRequestCount } from '@/lib/search-intelligence/discovery/expansionPatterns'
import type {
  DiscoveryEstimate,
  DiscoveryProvider,
  DiscoveryResult,
  DiscoveryRunOptions,
  DiscoveryRunResult,
  MicroTestDiagnostic,
} from '@/lib/search-intelligence/discovery/types'

const SOURCE_LABEL = 'Google via DataForSEO'

type Deduped = {
  keyword: string
  seed: string
  expansionPatterns: Set<string>
  surfacingSeeds: Set<string>
  observedAt: string
  rawCostUsd: number
}

function locationKey(country: string, cityId?: string | null): string {
  return cityId ? `${country}:${cityId}` : country
}

export const dataForSeoDiscoveryProvider: DiscoveryProvider = {
  id: 'dataforseo',
  label: 'DataForSEO Autocomplete',

  status() {
    const configured = isDataForSeoConfigured()
    return {
      id: 'dataforseo',
      label: 'DataForSEO Autocomplete',
      connected: configured,
      message: configured
        ? 'Connected. Google Autocomplete via DataForSEO SERP API (live/advanced).'
        : 'Not connected. Set DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD (server-side only).',
    }
  },

  async estimate(params) {
    const totalPatterns = estimateRequestCount(params.seeds, params.country, params.depth)
    let cachedPatterns = 0

    if (!params.refreshLive) {
      for (const seed of params.seeds) {
        const patterns = estimateRequestCount([seed], params.country, params.depth)
        const loc = resolveDataForSeoLocation(params.country, params.cityId)
        const locKey = locationKey(params.country, params.cityId)
        // rough cache check sample — full check in discover()
        void patterns
        void loc
        void locKey
      }
    }

    const estimatedLiveRequests = params.refreshLive ? totalPatterns : totalPatterns - cachedPatterns
    return {
      depth: params.depth,
      seedCount: params.seeds.length,
      totalPatterns,
      estimatedLiveRequests: Math.max(0, estimatedLiveRequests),
      cachedPatterns,
      requiresConfirmation:
        params.depth !== 'quick' &&
        params.depth !== 'micro_test' &&
        estimatedLiveRequests > confirmationThreshold(),
    }
  },

  async discover(params: DiscoveryRunOptions): Promise<DiscoveryRunResult> {
    if (!isDataForSeoConfigured()) {
      return {
        results: [],
        errors: [{ seed: params.seed, message: 'DataForSEO not configured', code: 'not_configured' }],
        stats: {
          patternsRequested: 0,
          cacheHits: 0,
          liveApiCalls: 0,
          successfulCalls: 0,
          failedCalls: 0,
          suggestionsFound: 0,
          dedupedKeywords: 0,
          providerCostUsd: null,
        },
      }
    }

    const location = resolveDataForSeoLocation(params.country, params.cityId)
    const locKey = locationKey(params.country, params.cityId)
    const deduped = new Map<string, Deduped>()
    const errors: DiscoveryRunResult['errors'] = []
    let cacheHits = 0
    let liveApiCalls = 0
    let successfulCalls = 0
    let failedCalls = 0
    let providerCostUsd = 0
    let suggestionsFound = 0
    let patternsProcessed = 0

    const maxRun =
      params.depth === 'micro_test' ? microTestMaxLiveCalls() : maxRequestsPerRun()
    const dailyLimit = dailyRequestLimit()

    for (const pattern of params.patterns) {
      if (liveApiCalls >= maxRun) {
        errors.push({
          seed: params.seed,
          pattern,
          message: `Run limit reached (${maxRun} live requests per run)`,
          code: 'run_limit',
        })
        break
      }

      const canProceed = await checkDailyLimit(params.sessionId, dailyLimit)
      if (!canProceed) {
        errors.push({
          seed: params.seed,
          pattern,
          message: `Daily limit reached (${dailyLimit} requests)`,
          code: 'daily_limit',
        })
        break
      }

      patternsProcessed++

      let suggestions: string[] = []
      let costUsd: number | null = null
      let fromCache = false

      if (!params.refreshLive) {
        const cached = await getAutocompleteCache(
          params.seed,
          params.country,
          params.language,
          pattern,
          locKey,
        )
        if (cached) {
          suggestions = cached.suggestions
          costUsd = cached.costUsd
          fromCache = true
          cacheHits++
          await recordDataForSeoCacheHit(params.sessionId)
        }
      }

      let patternSucceeded = false

      if (!fromCache) {
        try {
          const api = await fetchGoogleAutocomplete({
            keyword: pattern,
            languageCode: params.language,
            location,
          })
          suggestions = api.suggestions
          costUsd = api.costUsd
          liveApiCalls++
          if (costUsd != null) providerCostUsd += costUsd
          await recordDataForSeoLiveCall(params.sessionId, costUsd)
          patternSucceeded = true

          await setAutocompleteCache(params.seed, params.country, params.language, pattern, locKey, {
            suggestions,
            fetchedAt: new Date().toISOString(),
            costUsd,
            locationKey: locKey,
          })
        } catch (e) {
          const err = e instanceof DataForSeoError ? e : new DataForSeoError(String(e), 'unknown')
          await recordDataForSeoLiveCall(params.sessionId, null, err.message)
          failedCalls++
          errors.push({
            seed: params.seed,
            pattern,
            message: err.message,
            code: err.code,
          })
          continue
        }
      } else {
        patternSucceeded = true
      }

      if (patternSucceeded) successfulCalls++

      suggestionsFound += suggestions.length
      const now = new Date().toISOString()

      for (const suggestion of suggestions) {
        const nk = normalizeKeyword(suggestion)
        const existing = deduped.get(nk)
        if (existing) {
          existing.expansionPatterns.add(pattern)
          existing.surfacingSeeds.add(params.seed)
          existing.rawCostUsd += costUsd ?? 0
          continue
        }
        deduped.set(nk, {
          keyword: suggestion,
          seed: params.seed,
          expansionPatterns: new Set([pattern]),
          surfacingSeeds: new Set([params.seed]),
          observedAt: now,
          rawCostUsd: costUsd ?? 0,
        })
      }
    }

    const results: DiscoveryResult[] = [...deduped.values()].map((d) => ({
      keyword: d.keyword,
      source: SOURCE_LABEL,
      sourceId: 'dataforseo',
      country: params.country,
      language: params.language,
      provenance: 'observed',
      observedAt: d.observedAt,
      seed: d.seed,
      expansionPattern: [...d.expansionPatterns][0] ?? params.seed,
      surfacingSeeds: [...d.surfacingSeeds],
      expansionPatterns: [...d.expansionPatterns],
      searchVolume: null,
      cpc: null,
      competition: null,
      rawCostUsd: d.rawCostUsd > 0 ? d.rawCostUsd : null,
    }))

    const stats = {
      patternsRequested: patternsProcessed,
      cacheHits,
      liveApiCalls,
      successfulCalls,
      failedCalls,
      suggestionsFound,
      dedupedKeywords: results.length,
      providerCostUsd: providerCostUsd > 0 ? providerCostUsd : null,
    }

    let diagnostic: MicroTestDiagnostic | undefined
    if (params.depth === 'micro_test') {
      diagnostic = {
        maxLiveCalls: microTestMaxLiveCalls(),
        liveApiCalls: stats.liveApiCalls,
        cacheHits: stats.cacheHits,
        successfulCalls: stats.successfulCalls,
        failedCalls: stats.failedCalls,
        suggestionsReceived: stats.suggestionsFound,
        uniqueSuggestions: stats.dedupedKeywords,
        providerCostUsd: stats.providerCostUsd,
        locationLabel: location.label,
        locationCode: location.locationCode ?? null,
        language: params.language,
        patternsUsed: params.patterns,
        sampleSuggestions: results.slice(0, 20).map((r) => r.keyword),
      }
    }

    return {
      results,
      errors,
      stats,
      diagnostic,
    }
  },
}

export async function estimateDiscoveryWithCache(params: {
  seeds: string[]
  country: import('@/lib/search-intelligence/types').SiCountry
  language: string
  depth: import('@/lib/search-intelligence/discovery/types').DiscoveryDepth
  refreshLive?: boolean
  cityId?: string | null
}): Promise<DiscoveryEstimate> {
  const { buildDiscoveryPatternsByDepth } = await import('@/lib/search-intelligence/discovery/expansionPatterns')
  let totalPatterns = 0
  let cachedPatterns = 0
  const locKey = locationKey(params.country, params.cityId)

  for (const seed of params.seeds) {
    const patterns = buildDiscoveryPatternsByDepth(seed.trim(), params.country, params.depth)
    totalPatterns += patterns.length
    if (!params.refreshLive) {
      for (const pattern of patterns) {
        const cached = await getAutocompleteCache(seed, params.country, params.language, pattern, locKey)
        if (cached) cachedPatterns++
      }
    }
  }

  const estimatedLiveRequests = params.refreshLive ? totalPatterns : totalPatterns - cachedPatterns

  return {
    depth: params.depth,
    seedCount: params.seeds.length,
    totalPatterns,
    estimatedLiveRequests: Math.max(0, estimatedLiveRequests),
    cachedPatterns,
    requiresConfirmation:
      params.depth !== 'quick' &&
      params.depth !== 'micro_test' &&
      estimatedLiveRequests > confirmationThreshold(),
  }
}
