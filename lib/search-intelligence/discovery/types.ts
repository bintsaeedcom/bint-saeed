import type { SiCountry } from '@/lib/search-intelligence/types'

export type DiscoveryDepth = 'quick' | 'standard' | 'deep' | 'micro_test'

export type DiscoveryResult = {
  keyword: string
  source: string
  sourceId: 'dataforseo'
  country: SiCountry
  language: string
  provenance: 'observed'
  observedAt: string
  seed: string
  expansionPattern: string
  surfacingSeeds: string[]
  expansionPatterns: string[]
  searchVolume: number | null
  cpc: number | null
  competition: number | null
  rawCostUsd?: number | null
}

export type DiscoveryProviderStatus = {
  id: string
  label: string
  connected: boolean
  message: string
}

export type DiscoveryRunOptions = {
  seed: string
  country: SiCountry
  language: string
  patterns: string[]
  depth: DiscoveryDepth
  refreshLive?: boolean
  sessionId: string
  cityId?: string | null
}

export type DiscoveryRunResult = {
  results: DiscoveryResult[]
  errors: { seed: string; pattern?: string; message: string; code: string }[]
  stats: {
    patternsRequested: number
    cacheHits: number
    liveApiCalls: number
    successfulCalls: number
    failedCalls: number
    suggestionsFound: number
    dedupedKeywords: number
    providerCostUsd: number | null
  }
  diagnostic?: MicroTestDiagnostic
}

export type MicroTestDiagnostic = {
  maxLiveCalls: number
  liveApiCalls: number
  cacheHits: number
  successfulCalls: number
  failedCalls: number
  suggestionsReceived: number
  uniqueSuggestions: number
  providerCostUsd: number | null
  locationLabel: string
  locationCode: number | null
  language: string
  patternsUsed: string[]
  sampleSuggestions: string[]
}

export type DiscoveryEstimate = {
  depth: DiscoveryDepth
  seedCount: number
  totalPatterns: number
  estimatedLiveRequests: number
  cachedPatterns: number
  requiresConfirmation: boolean
}

/** Provider contract for external search suggestion discovery. */
export interface DiscoveryProvider {
  id: string
  label: string
  status(): DiscoveryProviderStatus
  estimate(params: {
    seeds: string[]
    country: SiCountry
    language: string
    depth: DiscoveryDepth
    refreshLive?: boolean
    cityId?: string | null
  }): Promise<DiscoveryEstimate>
  discover(params: DiscoveryRunOptions): Promise<DiscoveryRunResult>
}
