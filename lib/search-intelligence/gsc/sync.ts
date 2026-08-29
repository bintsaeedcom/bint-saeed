import { randomUUID } from 'crypto'
import { fetchGscFullSnapshot, isGscApiConfigured } from '@/lib/search-intelligence/gsc/client'
import {
  comparisonRange,
  resolveGscPeriod,
  type GscComparisonMode,
  type GscPeriodId,
} from '@/lib/search-intelligence/gsc/dateRanges'
import { saveGscSnapshot, setGscSyncStatus } from '@/lib/search-intelligence/gsc/store'
import type { GscSnapshot } from '@/lib/search-intelligence/gsc/store'

export async function syncGscFromApi(params: {
  periodId?: GscPeriodId
  comparison?: GscComparisonMode
}): Promise<GscSnapshot> {
  const periodId = params.periodId ?? '28d'
  const comparison = params.comparison ?? 'none'

  if (!isGscApiConfigured()) {
    throw new Error(
      'GSC API not configured. Set GOOGLE_SEARCH_CONSOLE_CLIENT_EMAIL and GOOGLE_SEARCH_CONSOLE_PRIVATE_KEY.',
    )
  }

  const primary = resolveGscPeriod(periodId)
  const compare = comparisonRange(primary, comparison)
  const syncId = randomUUID()
  const syncingMeta = {
    id: syncId,
    syncedAt: new Date().toISOString(),
    periodId,
    startDate: primary.startDate,
    endDate: primary.endDate,
    comparison,
    compareStartDate: compare?.startDate,
    compareEndDate: compare?.endDate,
    rowCount: 0,
    source: 'api' as const,
    status: 'syncing' as const,
  }
  await setGscSyncStatus(syncingMeta)

  try {
    const rows = await fetchGscFullSnapshot(primary.startDate, primary.endDate)
    let compareRows: GscSnapshot['compareRows']
    if (compare) {
      compareRows = await fetchGscFullSnapshot(compare.startDate, compare.endDate)
    }

    const snapshot: GscSnapshot = {
      ...syncingMeta,
      status: 'success',
      rowCount: rows.length,
      rows,
      compareRows,
    }
    await saveGscSnapshot(snapshot)
    return snapshot
  } catch (e) {
    const message = e instanceof Error ? e.message : 'GSC sync failed'
    const failed: GscSnapshot = {
      ...syncingMeta,
      status: 'error',
      rowCount: 0,
      rows: [],
      errorMessage: message,
    }
    await saveGscSnapshot(failed)
    throw e
  }
}
