import { expandSeedTopic } from '@/lib/search-intelligence/expansion'
import { classifySearchIntent } from '@/lib/search-intelligence/intent'
import { normalizeKeyword } from '@/lib/search-intelligence/normalize'
import { dataforseoSearchProvider } from '@/lib/search-intelligence/providers/dataforseoProvider'
import { gscCsvProvider } from '@/lib/search-intelligence/providers/gscCsvProvider'
import type { SearchProvider, ProviderContext } from '@/lib/search-intelligence/providers/types'
import type { KeywordRecord, ProviderConnectionStatus } from '@/lib/search-intelligence/types'

export const generatedOpportunityProvider: SearchProvider = {
  id: 'generated',
  label: 'Generated opportunities',
  connectionStatus(): ProviderConnectionStatus {
    return {
      id: 'generated',
      label: 'Generated opportunities',
      connected: true,
      mode: 'live',
      message: 'Topic expansion from seed + Bint Saeed strategic templates. Not observed search volume.',
    }
  },
  async fetchKeywords(ctx: ProviderContext): Promise<Partial<KeywordRecord>[]> {
    const expanded = expandSeedTopic(ctx.seedTopic)
    return expanded.map(({ keyword, clusterGroup }) => ({
      keyword,
      normalizedKeyword: normalizeKeyword(keyword),
      topicCluster: ctx.seedTopic,
      clusterGroup,
      provenance: 'generated' as const,
      sources: [
        {
          sourceId: 'generated' as const,
          sourceLabel: 'Generated',
          observedAt: ctx.now,
        },
      ],
      country: ctx.country,
      language: ctx.language,
      searchIntent: classifySearchIntent(keyword),
      searchVolume: null,
      cpc: null,
      difficulty: null,
      trend: null,
      ranking: null,
      impressions: null,
      clicks: null,
      existingPage: null,
      seedTopic: ctx.seedTopic,
      lastCheckedAt: ctx.now,
    }))
  },
}

function makeStubProvider(
  id: Extract<
    KeywordRecord['sources'][number]['sourceId'],
    'google' | 'bing' | 'youtube' | 'tiktok' | 'pinterest' | 'instagram' | 'google_trends'
  >,
  label: string,
  envKey: string,
): SearchProvider {
  return {
    id,
    label,
    connectionStatus() {
      const configured = Boolean(process.env[envKey]?.trim())
      return {
        id,
        label,
        connected: false,
        mode: configured ? 'stub' : 'disabled',
        message: configured
          ? `${label} API key present — provider adapter pending implementation.`
          : `Not connected. Set ${envKey} when ready.`,
      }
    },
    async fetchKeywords(): Promise<Partial<KeywordRecord>[]> {
      return []
    },
  }
}

export const googleProvider = makeStubProvider('google', 'Google', 'SEARCH_INTEL_GOOGLE_API_KEY')
export const bingProvider = makeStubProvider('bing', 'Bing', 'SEARCH_INTEL_BING_API_KEY')
export const youtubeProvider = makeStubProvider('youtube', 'YouTube', 'SEARCH_INTEL_YOUTUBE_API_KEY')
export const tiktokProvider = makeStubProvider('tiktok', 'TikTok', 'SEARCH_INTEL_TIKTOK_API_KEY')
export const pinterestProvider = makeStubProvider(
  'pinterest',
  'Pinterest',
  'SEARCH_INTEL_PINTEREST_API_KEY',
)
export const instagramProvider = makeStubProvider(
  'instagram',
  'Instagram',
  'SEARCH_INTEL_INSTAGRAM_API_KEY',
)
export const googleTrendsProvider = makeStubProvider(
  'google_trends',
  'Google Trends',
  'SEARCH_INTEL_GOOGLE_TRENDS_API_KEY',
)

export function getProviderRegistry() {
  const search: SearchProvider[] = [
    googleProvider,
    bingProvider,
    youtubeProvider,
    tiktokProvider,
    pinterestProvider,
    instagramProvider,
    googleTrendsProvider,
    dataforseoSearchProvider,
    generatedOpportunityProvider,
    gscCsvProvider,
  ]
  return {
    search,
    searchConsole: gscCsvProvider,
    trends: googleTrendsProvider,
  }
}

export function getAllProviderStatuses() {
  return getProviderRegistry().search.map((p) => p.connectionStatus())
}
