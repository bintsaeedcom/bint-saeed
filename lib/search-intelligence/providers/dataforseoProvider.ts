import { defaultDiscoveryDepth, isDataForSeoConfigured } from '@/lib/search-intelligence/dataforseo/config'
import { discoverSingleSeed } from '@/lib/search-intelligence/discover'
import type { SearchProvider, ProviderContext } from '@/lib/search-intelligence/providers/types'
import type { KeywordRecord, ProviderConnectionStatus } from '@/lib/search-intelligence/types'
import type { DiscoveryDepth } from '@/lib/search-intelligence/discovery/types'

export type ExtendedProviderContext = ProviderContext & {
  discoveryDepth?: DiscoveryDepth
  refreshLiveData?: boolean
  sessionId?: string
  cityId?: string | null
}

export const dataforseoSearchProvider: SearchProvider = {
  id: 'dataforseo',
  label: 'DataForSEO (Google Autocomplete)',

  connectionStatus(): ProviderConnectionStatus {
    const configured = isDataForSeoConfigured()
    return {
      id: 'dataforseo',
      label: 'DataForSEO',
      connected: configured,
      mode: configured ? 'live' : 'disabled',
      message: configured
        ? 'Google Autocomplete via DataForSEO — observed external suggestions only.'
        : 'Not connected. Set DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD.',
    }
  },

  async fetchKeywords(ctx: ProviderContext): Promise<Partial<KeywordRecord>[]> {
    const ext = ctx as ExtendedProviderContext
    if (!isDataForSeoConfigured()) return []

    const sessionId = ext.sessionId ?? 'si-default'
    const depth = ext.discoveryDepth ?? defaultDiscoveryDepth()

    const { partials } = await discoverSingleSeed({
      seed: ctx.seedTopic,
      country: ctx.country,
      language: ctx.language,
      depth,
      refreshLive: ext.refreshLiveData,
      sessionId,
      cityId: ext.cityId,
    })

    return partials
  },
}
