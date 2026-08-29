import { getDataForSeoProvider } from '@/lib/search-intelligence/discovery/registry'
import { buildMicroTestPatterns, MICRO_TEST_MAX_LIVE_CALLS } from '@/lib/search-intelligence/discovery/microTestPatterns'
import type { MicroTestDiagnostic } from '@/lib/search-intelligence/discovery/types'
import { resolveDataForSeoLocation } from '@/lib/search-intelligence/dataforseo/locations'
import type { SiCountry, SiLanguage } from '@/lib/search-intelligence/types'

export type MicroTestRequest = {
  seed: string
  country: SiCountry
  language: SiLanguage
  sessionId: string
  refreshLive?: boolean
  cityId?: string | null
}

export type MicroTestResponse = {
  seed: string
  patternsUsed: string[]
  maxLiveCalls: number
  diagnostic: MicroTestDiagnostic
  results: { keyword: string; expansionPatterns: string[] }[]
  errors: { pattern?: string; message: string; code: string }[]
  searchedAt: string
}

export async function runDataForSeoMicroTest(req: MicroTestRequest): Promise<MicroTestResponse> {
  const seed = req.seed.trim()
  const patterns = buildMicroTestPatterns(seed, req.country)
  const location = resolveDataForSeoLocation(req.country, req.cityId)
  const provider = getDataForSeoProvider()

  const run = await provider.discover({
    seed,
    country: req.country,
    language: req.language,
    patterns,
    depth: 'micro_test',
    refreshLive: req.refreshLive,
    sessionId: req.sessionId,
    cityId: req.cityId,
  })

  let providerCostUsd = run.stats.providerCostUsd
  if (providerCostUsd == null && run.results.length) {
    const sum = run.results.reduce((acc, r) => acc + (r.rawCostUsd ?? 0), 0)
    providerCostUsd = sum > 0 ? sum : null
  }

  const diagnostic: MicroTestDiagnostic = run.diagnostic ?? {
    maxLiveCalls: MICRO_TEST_MAX_LIVE_CALLS,
    liveApiCalls: run.stats.liveApiCalls,
    cacheHits: run.stats.cacheHits,
    successfulCalls: run.stats.successfulCalls,
    failedCalls: run.stats.failedCalls,
    suggestionsReceived: run.stats.suggestionsFound,
    uniqueSuggestions: run.stats.dedupedKeywords,
    providerCostUsd,
    locationLabel: location.label,
    locationCode: location.locationCode ?? null,
    language: req.language,
    patternsUsed: patterns,
    sampleSuggestions: run.results.slice(0, 20).map((r) => r.keyword),
  }

  return {
    seed,
    patternsUsed: patterns,
    maxLiveCalls: MICRO_TEST_MAX_LIVE_CALLS,
    diagnostic,
    results: run.results.map((r) => ({
      keyword: r.keyword,
      expansionPatterns: r.expansionPatterns,
    })),
    errors: run.errors.map((e) => ({
      pattern: e.pattern,
      message: e.message,
      code: e.code,
    })),
    searchedAt: new Date().toISOString(),
  }
}
