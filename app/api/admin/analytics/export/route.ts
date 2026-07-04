import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { getContentPopularity, getGeoTrend } from '@/lib/analytics/analyticsStore'
import { buildMarketingExportCsv } from '@/lib/analytics/marketingExport'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const daysRaw = Number(searchParams.get('days') || 7)
  const days = Number.isFinite(daysRaw) ? Math.min(30, Math.max(1, Math.floor(daysRaw))) : 7

  const [geoTrend, popularity] = await Promise.all([getGeoTrend(days), getContentPopularity(25)])

  const csv = buildMarketingExportCsv({
    days,
    geoTrend,
    totals7d: geoTrend.totals,
    popularity,
    generatedAt: new Date().toISOString(),
  })

  const stamp = new Date().toISOString().slice(0, 10)
  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="bint-saeed-marketing-signals-${days}d-${stamp}.csv"`,
      'Cache-Control': 'no-store',
    },
  })
}
