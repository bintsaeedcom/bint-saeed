import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { listOpportunities } from '@/lib/search-intelligence/store'
import { actionLabel } from '@/lib/search-intelligence/clusters'
import type { KeywordRecord } from '@/lib/search-intelligence/types'

export const dynamic = 'force-dynamic'

function escapeCsv(v: string | number | null | undefined): string {
  const s = v == null ? '' : String(v)
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}

function row(r: KeywordRecord): string {
  return [
    r.keyword,
    r.topicCluster,
    r.provenance ?? r.dataCategory ?? 'generated',
    r.sources.map((s) => s.sourceLabel).join('; '),
    r.country,
    r.searchIntent,
    r.searchVolume ?? 'unavailable',
    r.cpc ?? 'unavailable',
    r.difficulty ?? 'unavailable',
    r.trend ?? 'unavailable',
    r.ranking ?? 'unavailable',
    r.impressions ?? 'unavailable',
    r.clicks ?? 'unavailable',
    r.existingPage ?? '',
    r.opportunityScore,
    actionLabel(r.recommendedAction),
    r.status,
  ]
    .map(escapeCsv)
    .join(',')
}

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const opportunities = await listOpportunities(1000)
  const header = [
    'Keyword',
    'Topic Cluster',
    'Provenance',
    'Sources',
    'Country',
    'Search Intent',
    'Search Volume',
    'CPC',
    'Difficulty',
    'Trend',
    'Ranking',
    'Impressions',
    'Clicks',
    'Existing Page',
    'Opportunity Score',
    'Recommended Action',
    'Status',
  ].join(',')

  const csv = [header, ...opportunities.map(row)].join('\n')
  return new NextResponse(csv, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="bint-saeed-search-intelligence-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  })
}
