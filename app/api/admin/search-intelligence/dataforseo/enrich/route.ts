import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { enrichKeywordMetrics } from '@/lib/search-intelligence/dataforseo/enrichMetrics'
import { checkRateLimit } from '@/lib/search-intelligence/rateLimit'
import { enrichRecordScores } from '@/lib/search-intelligence/scoring'
import type { KeywordRecord, SiCountry, SiLanguage } from '@/lib/search-intelligence/types'
import { SI_COUNTRIES, SI_LANGUAGES } from '@/lib/search-intelligence/types'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rl = checkRateLimit('si-enrich-metrics')
  if (!rl.ok) {
    return NextResponse.json({ error: 'Rate limit exceeded', retryAfterSec: rl.retryAfterSec }, { status: 429 })
  }

  let body: {
    records?: KeywordRecord[]
    keywords?: string[]
    mode?: 'selected' | 'top20'
    country?: SiCountry
    language?: SiLanguage
    sessionId?: string
    cityId?: string | null
  } = {}

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const country = SI_COUNTRIES.includes(body.country as SiCountry) ? (body.country as SiCountry) : 'UAE'
  const language = SI_LANGUAGES.includes(body.language as SiLanguage) ? (body.language as SiLanguage) : 'en'
  const sessionId = body.sessionId?.trim() || 'si-enrich-default'

  let records: KeywordRecord[] = body.records ?? []
  if (!records.length && body.keywords?.length) {
    records = body.keywords.map((keyword) => ({
      id: keyword,
      keyword,
      normalizedKeyword: keyword.toLowerCase(),
      topicCluster: keyword,
      clusterGroup: 'other',
      provenance: 'observed',
      sources: [],
      country,
      language,
      searchIntent: 'informational',
      searchVolume: null,
      cpc: null,
      difficulty: null,
      trend: null,
      ranking: null,
      impressions: null,
      clicks: null,
      existingPage: null,
      contentGapStatus: null,
      opportunityScore: 0,
      scoreFactors: [],
      recommendedAction: 'no_action',
      status: 'new',
      seedTopic: keyword,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastCheckedAt: new Date().toISOString(),
    }))
  }

  if (body.mode === 'top20') {
    records = [...records].sort((a, b) => b.opportunityScore - a.opportunityScore).slice(0, 20)
  }

  if (!records.length) {
    return NextResponse.json({ error: 'records or keywords required' }, { status: 400 })
  }

  const { updated, costUsd, errors } = await enrichKeywordMetrics({
    records,
    country,
    language,
    sessionId,
    cityId: body.cityId,
  })

  const scored = updated.map((r) => enrichRecordScores(r))

  return NextResponse.json({
    records: scored,
    costUsd,
    errors,
  })
}
