import { fetchSearchVolumeBatch } from '@/lib/search-intelligence/dataforseo/client'
import { isDataForSeoConfigured } from '@/lib/search-intelligence/dataforseo/config'
import { resolveDataForSeoLocation } from '@/lib/search-intelligence/dataforseo/locations'
import { recordDataForSeoLiveCall } from '@/lib/search-intelligence/dataforseo/usage'
import { normalizeKeyword } from '@/lib/search-intelligence/normalize'
import type { KeywordRecord, SiCountry, SiLanguage } from '@/lib/search-intelligence/types'

export type EnrichMetricsResult = {
  updated: KeywordRecord[]
  costUsd: number | null
  errors: string[]
}

export async function enrichKeywordMetrics(params: {
  records: KeywordRecord[]
  country: SiCountry
  language: SiLanguage
  sessionId: string
  cityId?: string | null
}): Promise<EnrichMetricsResult> {
  if (!isDataForSeoConfigured()) {
    return { updated: params.records, costUsd: null, errors: ['DataForSEO not configured'] }
  }

  const keywords = [...new Set(params.records.map((r) => r.keyword.trim()).filter(Boolean))]
  if (!keywords.length) {
    return { updated: params.records, costUsd: null, errors: [] }
  }

  const location = resolveDataForSeoLocation(params.country, params.cityId)
  const errors: string[] = []

  try {
    const { results, costUsd } = await fetchSearchVolumeBatch({
      keywords,
      languageCode: params.language,
      location,
    })
    await recordDataForSeoLiveCall(params.sessionId, costUsd)

    const byKey = new Map(results.map((r) => [normalizeKeyword(r.keyword), r]))
    const now = new Date().toISOString()

    const updated = params.records.map((rec) => {
      const m = byKey.get(normalizeKeyword(rec.keyword))
      if (!m) return rec
      return {
        ...rec,
        searchVolume: m.searchVolume,
        cpc: m.cpc,
        difficulty: m.competition,
        trend: m.monthlySearches?.length
          ? m.monthlySearches
              .slice(-3)
              .map((x) => `${x.year}-${String(x.month).padStart(2, '0')}:${x.search_volume}`)
              .join(', ')
          : rec.trend,
        metricsEnrichedAt: now,
        updatedAt: now,
      }
    })

    return { updated, costUsd, errors }
  } catch (e) {
    errors.push(e instanceof Error ? e.message : 'Metrics enrichment failed')
    return { updated: params.records, costUsd: null, errors }
  }
}
