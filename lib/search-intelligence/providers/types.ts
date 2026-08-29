import type {
  KeywordRecord,
  ProviderConnectionStatus,
  SearchIntelligenceRequest,
  SiCountry,
  SiLanguage,
  SiSourceId,
} from '@/lib/search-intelligence/types'

export type ProviderContext = {
  seedTopic: string
  country: SiCountry
  language: SiLanguage
  now: string
  discoveryDepth?: import('@/lib/search-intelligence/discovery/types').DiscoveryDepth
  refreshLiveData?: boolean
  sessionId?: string
  cityId?: string | null
}

export interface SearchProvider {
  id: SiSourceId
  label: string
  connectionStatus(): ProviderConnectionStatus
  fetchKeywords(ctx: ProviderContext): Promise<Partial<KeywordRecord>[]>
}

export interface SearchConsoleProvider extends SearchProvider {
  id: 'google_search_console'
  fetchGscOpportunities?(ctx: ProviderContext): Promise<import('@/lib/search-intelligence/types').GscOpportunity[]>
}

export interface TrendProvider extends SearchProvider {
  id: 'google_trends'
}

export interface KeywordMetricProvider extends SearchProvider {
  /** Volume/CPC/difficulty when a paid API is connected. */
  supportsMetrics: boolean
}

export function stubStatus(
  id: SiSourceId,
  label: string,
  envKey: string,
): ProviderConnectionStatus {
  const configured = Boolean(process.env[envKey]?.trim())
  return {
    id,
    label,
    connected: configured,
    mode: configured ? 'stub' : 'disabled',
    message: configured
      ? `${label} credentials detected — adapter ready; live pull not yet enabled in v1.`
      : `Not connected. Add ${envKey} to enable when adapter is implemented.`,
  }
}

export type ProviderRegistry = {
  search: SearchProvider[]
  searchConsole: SearchConsoleProvider | null
  trends: TrendProvider | null
}

export async function runSelectedProviders(
  providers: SearchProvider[],
  ctx: ProviderContext,
  selected: SiSourceId[],
): Promise<Partial<KeywordRecord>[]> {
  const active = providers.filter((p) => selected.includes(p.id))
  const results = await Promise.allSettled(active.map((p) => p.fetchKeywords(ctx)))

  const merged: Partial<KeywordRecord>[] = []
  for (const r of results) {
    if (r.status === 'fulfilled') merged.push(...r.value)
    else console.error('[search-intelligence] provider failed', r.reason)
  }
  return merged
}
