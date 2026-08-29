import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { checkRateLimit } from '@/lib/search-intelligence/rateLimit'
import { syncGscFromApi } from '@/lib/search-intelligence/gsc/sync'
import { buildGscSyncInfo } from '@/lib/search-intelligence/gsc/syncInfo'
import { isGscApiConfigured } from '@/lib/search-intelligence/gsc/client'
import type { GscComparisonMode, GscPeriodId } from '@/lib/search-intelligence/gsc/dateRanges'

export const dynamic = 'force-dynamic'

const PERIODS: GscPeriodId[] = ['7d', '28d', '3m', '6m', '12m', '16m']
const COMPARISONS: GscComparisonMode[] = ['none', 'previous_period', 'previous_year']

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const info = await buildGscSyncInfo()
  return NextResponse.json({
    configured: isGscApiConfigured(),
    sync: info,
    periods: PERIODS,
    comparisons: COMPARISONS,
  })
}

export async function POST(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rl = checkRateLimit('si-gsc-sync')
  if (!rl.ok) {
    return NextResponse.json({ error: 'Rate limit exceeded', retryAfterSec: rl.retryAfterSec }, { status: 429 })
  }

  let body: { periodId?: GscPeriodId; comparison?: GscComparisonMode } = {}
  try {
    const raw = await request.json()
    if (raw && typeof raw === 'object') body = raw
  } catch {
    // default period
  }

  const periodId = PERIODS.includes(body.periodId as GscPeriodId) ? body.periodId! : '28d'
  const comparison = COMPARISONS.includes(body.comparison as GscComparisonMode)
    ? body.comparison!
    : 'previous_period'

  try {
    const snapshot = await syncGscFromApi({ periodId, comparison })
    const sync = await buildGscSyncInfo()
    return NextResponse.json({
      ok: true,
      snapshot: {
        id: snapshot.id,
        syncedAt: snapshot.syncedAt,
        rowCount: snapshot.rowCount,
        periodId: snapshot.periodId,
        startDate: snapshot.startDate,
        endDate: snapshot.endDate,
        comparison: snapshot.comparison,
        status: snapshot.status,
      },
      sync,
    })
  } catch (e) {
    const message = e instanceof Error ? e.message : 'GSC sync failed'
    const sync = await buildGscSyncInfo()
    return NextResponse.json({ error: message, sync }, { status: 500 })
  }
}
