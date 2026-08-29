import { randomUUID } from 'crypto'
import { assessContentGap } from '@/lib/search-intelligence/contentGap'
import { buildDiscoveryPatternsByDepth } from '@/lib/search-intelligence/discovery/expansionPatterns'
import { getDataForSeoProvider } from '@/lib/search-intelligence/discovery/registry'
import type { DiscoveryDepth } from '@/lib/search-intelligence/discovery/types'
import { classifySearchIntent } from '@/lib/search-intelligence/intent'
import { filterGscRowsBySeed, loadUnifiedGscQueries } from '@/lib/search-intelligence/gsc/loadGscData'
import { dedupeKey, normalizeKeyword } from '@/lib/search-intelligence/normalize'
import { enrichRecordScores } from '@/lib/search-intelligence/scoring'
import { ensureDefaultSeedCollections } from '@/lib/search-intelligence/seeds/collections'
import { saveOpportunitiesBatch, touchDiscoveredKeyword } from '@/lib/search-intelligence/store'
import type { KeywordRecord, SiCountry, SiLanguage } from '@/lib/search-intelligence/types'

export type DiscoverRequest = {
  country: SiCountry
  language: SiLanguage
  depth?: DiscoveryDepth
  refreshLive?: boolean
  confirmed?: boolean
  sessionId: string
  collectionIds?: string[]
  seeds?: string[]
  cityId?: string | null
}

export type DiscoverResponse = {
  discovered: KeywordRecord[]
  newCount: number
  seedsProcessed: number
  providersUsed: string[]
  errors: { seed: string; pattern?: string; message: string; code: string }[]
  stats: {
    patternsRequested: number
    cacheHits: number
    liveApiCalls: number
    successfulCalls?: number
    failedCalls?: number
    dedupedKeywords: number
    providerCostUsd?: number | null
  }
  estimate?: {
    totalPatterns: number
    estimatedLiveRequests: number
    cachedPatterns: number
    requiresConfirmation: boolean
  }
  searchedAt: string
}

function gscLookupMap(queries: Awaited<ReturnType<typeof loadUnifiedGscQueries>>['queries']) {
  const map = new Map<string, (typeof queries)[number]>()
  for (const q of queries) {
    map.set(normalizeKeyword(q.query), q)
  }
  return map
}

function mergeGscSource(existing: KeywordRecord['sources'], gscLabel: string, observedAt: string) {
  if (existing.some((s) => s.sourceId === 'google_search_console')) return existing
  return [
    ...existing,
    {
      sourceId: 'google_search_console' as const,
      sourceLabel: gscLabel,
      observedAt,
    },
  ]
}

function buildRecord(
  partial: Partial<KeywordRecord> & { keyword: string },
  now: string,
): KeywordRecord {
  const gap = assessContentGap(partial.keyword)
  return enrichRecordScores({
    id: partial.id ?? randomUUID(),
    keyword: partial.keyword,
    normalizedKeyword: partial.normalizedKeyword ?? normalizeKeyword(partial.keyword),
    topicCluster: partial.topicCluster ?? partial.keyword,
    clusterGroup: partial.clusterGroup ?? 'other',
    provenance: partial.provenance ?? 'observed',
    sources: partial.sources ?? [],
    firstSeenAt: partial.firstSeenAt,
    lastSeenAt: partial.lastSeenAt,
    isNewDiscovery: partial.isNewDiscovery,
    hasGscEvidence: partial.hasGscEvidence ?? false,
    hasExternalDiscovery: partial.hasExternalDiscovery ?? false,
    expansionPatterns: partial.expansionPatterns,
    surfacingSeeds: partial.surfacingSeeds,
    metricsEnrichedAt: partial.metricsEnrichedAt,
    country: partial.country!,
    language: partial.language!,
    searchIntent: partial.searchIntent ?? classifySearchIntent(partial.keyword),
    searchVolume: partial.searchVolume ?? null,
    cpc: partial.cpc ?? null,
    difficulty: partial.difficulty ?? null,
    trend: partial.trend ?? null,
    ranking: partial.ranking ?? null,
    impressions: partial.impressions ?? null,
    clicks: partial.clicks ?? null,
    existingPage: partial.existingPage ?? gap.bestPage,
    contentGapStatus: gap.status,
    opportunityScore: 0,
    scoreFactors: [],
    recommendedAction: 'no_action',
    status: partial.status ?? 'new',
    seedTopic: partial.seedTopic ?? partial.keyword,
    createdAt: partial.createdAt ?? now,
    updatedAt: now,
    lastCheckedAt: partial.lastCheckedAt ?? now,
  })
}

export async function discoverOpportunities(req: DiscoverRequest): Promise<DiscoverResponse> {
  const now = new Date().toISOString()
  const depth = req.depth ?? 'quick'
  const provider = getDataForSeoProvider()
  const { estimateDiscoveryWithCache } = await import('@/lib/search-intelligence/dataforseo/provider')

  const collections = await ensureDefaultSeedCollections()
  const activeCollections = collections.filter((c) => {
    if (!c.active) return false
    if (req.collectionIds?.length) return req.collectionIds.includes(c.id)
    return true
  })

  const seedSet = new Set<string>()
  for (const c of activeCollections) {
    for (const s of c.seeds) seedSet.add(s.trim())
  }
  if (req.seeds?.length) {
    for (const s of req.seeds) seedSet.add(s.trim())
  }

  const seeds = [...seedSet].filter(Boolean)
  const estimate = await estimateDiscoveryWithCache({
    seeds,
    country: req.country,
    language: req.language,
    depth,
    refreshLive: req.refreshLive,
    cityId: req.cityId,
  })

  if (estimate.requiresConfirmation && !req.confirmed) {
    return {
      discovered: [],
      newCount: 0,
      seedsProcessed: seeds.length,
      providersUsed: [],
      errors: [],
      stats: {
        patternsRequested: 0,
        cacheHits: 0,
        liveApiCalls: 0,
        successfulCalls: 0,
        failedCalls: 0,
        dedupedKeywords: 0,
        providerCostUsd: null,
      },
      estimate,
      searchedAt: now,
    }
  }

  const { queries: gscQueries } = await loadUnifiedGscQueries(3000)
  const gscMap = gscLookupMap(gscQueries)

  const globalDedup = new Map<string, KeywordRecord>()
  const allErrors: DiscoverResponse['errors'] = []
  const providersUsed: string[] = []
  let totalPatterns = 0
  let totalCacheHits = 0
  let totalLiveCalls = 0
  let totalSuccessful = 0
  let totalFailed = 0
  let totalCost = 0
  let newCount = 0

  const st = provider.status()
  if (st.connected) providersUsed.push(provider.id)

  for (const seed of seeds) {
    const patterns = buildDiscoveryPatternsByDepth(seed, req.country, depth)

    if (st.connected) {
      const run = await provider.discover({
        seed,
        country: req.country,
        language: req.language,
        patterns,
        depth,
        refreshLive: req.refreshLive,
        sessionId: req.sessionId,
        cityId: req.cityId,
      })
      allErrors.push(...run.errors)
      totalPatterns += run.stats.patternsRequested
      totalCacheHits += run.stats.cacheHits
      totalLiveCalls += run.stats.liveApiCalls
      totalSuccessful += run.stats.successfulCalls
      totalFailed += run.stats.failedCalls
      if (run.stats.providerCostUsd) totalCost += run.stats.providerCostUsd

      for (const r of run.results) {
        const dk = dedupeKey(r.keyword, req.country, req.language)
        const touch = await touchDiscoveredKeyword(normalizeKeyword(r.keyword))
        if (touch.isNew) newCount++
        const gsc = gscMap.get(normalizeKeyword(r.keyword))
        const existing = globalDedup.get(dk)

        if (existing) {
          const mergedPatterns = [...new Set([...(existing.expansionPatterns ?? []), ...r.expansionPatterns])]
          const mergedSeeds = [...new Set([...(existing.surfacingSeeds ?? []), ...r.surfacingSeeds])]
          const sources = existing.sources.some((s) => s.sourceId === 'dataforseo')
            ? existing.sources
            : [
                ...existing.sources,
                {
                  sourceId: 'dataforseo' as const,
                  sourceLabel: r.source,
                  observedAt: r.observedAt,
                  expansionPattern: r.expansionPattern,
                },
              ]
          globalDedup.set(dk, {
            ...existing,
            expansionPatterns: mergedPatterns,
            surfacingSeeds: mergedSeeds,
            sources: gsc
              ? mergeGscSource(sources, gsc.source === 'api' ? 'GSC API' : 'GSC CSV', gsc.observedAt)
              : sources,
            hasGscEvidence: existing.hasGscEvidence || Boolean(gsc),
            hasExternalDiscovery: true,
            ranking: gsc?.position ?? existing.ranking,
            impressions: gsc?.impressions ?? existing.impressions,
            clicks: gsc?.clicks ?? existing.clicks,
            isNewDiscovery: existing.isNewDiscovery || touch.isNew,
            lastSeenAt: touch.lastSeen,
          })
          continue
        }

        let record = buildRecord(
          {
            keyword: r.keyword,
            topicCluster: seed,
            clusterGroup: 'other',
            provenance: 'observed',
            sources: [
              {
                sourceId: 'dataforseo',
                sourceLabel: r.source,
                observedAt: r.observedAt,
                expansionPattern: r.expansionPattern,
              },
            ],
            country: req.country,
            language: req.language as SiLanguage,
            hasExternalDiscovery: true,
            hasGscEvidence: Boolean(gsc),
            expansionPatterns: r.expansionPatterns,
            surfacingSeeds: r.surfacingSeeds,
            ranking: gsc?.position ?? null,
            impressions: gsc?.impressions ?? null,
            clicks: gsc?.clicks ?? null,
            isNewDiscovery: touch.isNew,
            firstSeenAt: touch.firstSeen,
            lastSeenAt: touch.lastSeen,
            seedTopic: seed,
            status: touch.isNew ? 'new' : 'reviewing',
          },
          now,
        )

        if (gsc) {
          record = {
            ...record,
            sources: mergeGscSource(
              record.sources,
              gsc.source === 'api' ? 'GSC API' : 'GSC CSV',
              gsc.observedAt,
            ),
          }
        }

        globalDedup.set(dk, record)
      }
    }

    const gscForSeed = filterGscRowsBySeed(gscQueries, seed)
    for (const q of gscForSeed) {
      const dk = dedupeKey(q.query, req.country, req.language as SiLanguage)
      if (globalDedup.has(dk)) continue
      const touch = await touchDiscoveredKeyword(normalizeKeyword(q.query))
      globalDedup.set(
        dk,
        buildRecord(
          {
            keyword: q.query,
            topicCluster: seed,
            clusterGroup: 'gsc_owned',
            provenance: 'observed',
            sources: [
              {
                sourceId: 'google_search_console',
                sourceLabel: q.source === 'api' ? 'GSC API' : 'GSC CSV',
                observedAt: q.observedAt,
              },
            ],
            country: req.country,
            language: req.language as SiLanguage,
            hasGscEvidence: true,
            ranking: q.position,
            impressions: q.impressions,
            clicks: q.clicks,
            isNewDiscovery: touch.isNew,
            firstSeenAt: touch.firstSeen,
            lastSeenAt: touch.lastSeen,
            seedTopic: seed,
          },
          now,
        ),
      )
    }
  }

  const sorted = [...globalDedup.values()].sort((a, b) => b.opportunityScore - a.opportunityScore)
  if (sorted.length) {
    await saveOpportunitiesBatch(sorted.slice(0, 300))
  }

  return {
    discovered: sorted,
    newCount,
    seedsProcessed: seeds.length,
    providersUsed: [...new Set(providersUsed)],
    errors: allErrors,
    stats: {
      patternsRequested: totalPatterns,
      cacheHits: totalCacheHits,
      liveApiCalls: totalLiveCalls,
      successfulCalls: totalSuccessful,
      failedCalls: totalFailed,
      dedupedKeywords: sorted.length,
      providerCostUsd: totalCost > 0 ? totalCost : null,
    },
    estimate,
    searchedAt: now,
  }
}

export async function discoverSingleSeed(params: {
  seed: string
  country: SiCountry
  language: SiLanguage
  depth: DiscoveryDepth
  refreshLive?: boolean
  sessionId: string
  cityId?: string | null
}): Promise<{
  partials: Partial<KeywordRecord>[]
  errors: DiscoverResponse['errors']
  stats: DiscoverResponse['stats']
}> {
  const provider = getDataForSeoProvider()
  const patterns = buildDiscoveryPatternsByDepth(params.seed, params.country, params.depth)
  const st = provider.status()

  if (!st.connected) {
    return {
      partials: [],
      errors: [{ seed: params.seed, message: 'DataForSEO not connected', code: 'not_configured' }],
      stats: {
        patternsRequested: 0,
        cacheHits: 0,
        liveApiCalls: 0,
        successfulCalls: 0,
        failedCalls: 0,
        dedupedKeywords: 0,
        providerCostUsd: null,
      },
    }
  }

  const run = await provider.discover({
    seed: params.seed,
    country: params.country,
    language: params.language,
    patterns,
    depth: params.depth,
    refreshLive: params.refreshLive,
    sessionId: params.sessionId,
    cityId: params.cityId,
  })

  const { queries: gscQueries } = await loadUnifiedGscQueries(3000)
  const gscMap = gscLookupMap(gscQueries)

  const partials: Partial<KeywordRecord>[] = run.results.map((r) => {
    const gsc = gscMap.get(normalizeKeyword(r.keyword))
    return {
      keyword: r.keyword,
      normalizedKeyword: normalizeKeyword(r.keyword),
      topicCluster: params.seed,
      clusterGroup: 'other' as const,
      provenance: 'observed' as const,
      sources: [
        {
          sourceId: 'dataforseo' as const,
          sourceLabel: r.source,
          observedAt: r.observedAt,
          expansionPattern: r.expansionPattern,
        },
        ...(gsc
          ? [
              {
                sourceId: 'google_search_console' as const,
                sourceLabel: gsc.source === 'api' ? 'GSC API' : 'GSC CSV',
                observedAt: gsc.observedAt,
              },
            ]
          : []),
      ],
      country: params.country,
      language: params.language,
      hasExternalDiscovery: true,
      hasGscEvidence: Boolean(gsc),
      expansionPatterns: r.expansionPatterns,
      surfacingSeeds: r.surfacingSeeds,
      ranking: gsc?.position ?? null,
      impressions: gsc?.impressions ?? null,
      clicks: gsc?.clicks ?? null,
      searchVolume: null,
      cpc: null,
      difficulty: null,
      seedTopic: params.seed,
      lastCheckedAt: new Date().toISOString(),
    }
  })

  return {
    partials,
    errors: run.errors,
    stats: {
      patternsRequested: run.stats.patternsRequested,
      cacheHits: run.stats.cacheHits,
      liveApiCalls: run.stats.liveApiCalls,
      successfulCalls: run.stats.successfulCalls,
      failedCalls: run.stats.failedCalls,
      dedupedKeywords: run.stats.dedupedKeywords,
      providerCostUsd: run.stats.providerCostUsd,
    },
  }
}
