import { loadUnifiedGscQueries, filterGscRowsBySeed } from '@/lib/search-intelligence/gsc/loadGscData'
import { isGscApiConfigured } from '@/lib/search-intelligence/gsc/client'
import { classifySearchIntent } from '@/lib/search-intelligence/intent'
import { normalizeKeyword } from '@/lib/search-intelligence/normalize'
import { matchGscPageToSitePath } from '@/lib/search-intelligence/contentGap'
import type { SearchConsoleProvider, ProviderContext } from '@/lib/search-intelligence/providers/types'
import type { GscOpportunity, KeywordRecord, ProviderConnectionStatus } from '@/lib/search-intelligence/types'
import { isBrandQuery } from '@/lib/search-intelligence/intent'

function gscCategory(
  row: { query: string; impressions: number; clicks: number; ctr: number; position: number },
  existingPage: string | null,
): GscOpportunity['category'] {
  if (row.impressions >= 100 && row.ctr < 2 && row.position <= 15) return 'high_impressions_low_ctr'
  if (row.position >= 4 && row.position <= 10) return 'position_4_20'
  if (row.position >= 11 && row.position <= 20) return 'position_4_20'
  if (!existingPage && row.impressions >= 20) return 'ranking_without_page'
  if (!isBrandQuery(row.query) && row.impressions >= 30) return 'non_brand'
  if (row.impressions >= 50 && row.position <= 20) return 'quick_win'
  return 'position_4_20'
}

export const gscCsvProvider: SearchConsoleProvider = {
  id: 'google_search_console',
  label: 'Google Search Console',
  connectionStatus(): ProviderConnectionStatus {
    const api = isGscApiConfigured()
    return {
      id: 'google_search_console',
      label: 'Google Search Console',
      connected: true,
      mode: api ? 'live' : 'csv_import',
      message: api
        ? 'Live API configured. Use Sync Search Console to pull data; CSV remains fallback.'
        : 'CSV import active (ops/content/inbox/_gsc/). Configure GOOGLE_SEARCH_CONSOLE_* for API sync.',
    }
  },
  async fetchKeywords(ctx: ProviderContext): Promise<Partial<KeywordRecord>[]> {
    const { queries, source, syncedAt } = await loadUnifiedGscQueries(2000)
    const filtered = filterGscRowsBySeed(queries, ctx.seedTopic)

    return filtered.map((q) => {
      const existingPage = q.page ? matchGscPageToSitePath(q.page) : null
      return {
        keyword: q.query,
        normalizedKeyword: normalizeKeyword(q.query),
        topicCluster: ctx.seedTopic || q.query,
        clusterGroup: 'gsc_owned' as const,
        provenance: 'observed' as const,
        sources: [
          {
            sourceId: 'google_search_console' as const,
            sourceLabel: source === 'api' ? 'GSC API' : 'GSC CSV',
            observedAt: syncedAt ?? ctx.now,
          },
        ],
        country: ctx.country,
        language: ctx.language,
        searchIntent: classifySearchIntent(q.query),
        searchVolume: null,
        cpc: null,
        difficulty: null,
        trend: null,
        ranking: q.position,
        impressions: q.impressions,
        clicks: q.clicks,
        existingPage,
        hasGscEvidence: true,
        seedTopic: ctx.seedTopic,
        lastCheckedAt: syncedAt ?? ctx.now,
      }
    })
  },
  async fetchGscOpportunities(ctx: ProviderContext): Promise<GscOpportunity[]> {
    const { queries } = await loadUnifiedGscQueries(2000)
    const filtered = filterGscRowsBySeed(queries, ctx.seedTopic)

    return filtered.map((q, i) => {
      const existingPage = q.page ? matchGscPageToSitePath(q.page) : null
      const category = gscCategory(q, existingPage)
      let opportunityScore = 0
      if (q.impressions > 0) opportunityScore += Math.min(40, Math.log10(q.impressions + 1) * 12)
      if (q.position >= 4 && q.position <= 20) opportunityScore += 25
      if (q.ctr < 2 && q.impressions > 50) opportunityScore += 15
      if (!isBrandQuery(q.query)) opportunityScore += 10

      return {
        id: `gsc-${i}-${normalizeKeyword(q.query).slice(0, 40)}`,
        query: q.query,
        impressions: q.impressions,
        clicks: q.clicks,
        ctr: q.ctr,
        position: q.position,
        category,
        existingPage,
        opportunityScore: Math.min(100, Math.round(opportunityScore)),
      }
    })
  },
}
