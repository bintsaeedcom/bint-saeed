import { getGscSyncStatus, getLatestGscSnapshot } from '@/lib/search-intelligence/gsc/store'
import { isGscApiConfigured } from '@/lib/search-intelligence/gsc/client'
import { loadGscAuditSnapshot } from '@/lib/content/gscCsv'
import type { GscSyncInfo } from '@/lib/search-intelligence/types'

export async function buildGscSyncInfo(): Promise<GscSyncInfo> {
  const status = await getGscSyncStatus()
  const snapshot = await getLatestGscSnapshot()

  if (snapshot?.status === 'success' && snapshot.source === 'api') {
    return {
      lastSynced: snapshot.syncedAt,
      rowsImported: snapshot.rowCount,
      dateRange: `${snapshot.startDate} → ${snapshot.endDate}`,
      status: snapshot.status,
      source: 'api',
    }
  }

  if (status?.status === 'error') {
    return {
      lastSynced: status.syncedAt,
      rowsImported: status.rowCount,
      dateRange: status.startDate && status.endDate ? `${status.startDate} → ${status.endDate}` : null,
      status: `error: ${status.errorMessage ?? 'sync failed'}`,
      source: isGscApiConfigured() ? 'api' : 'none',
    }
  }

  const csv = await loadGscAuditSnapshot(10, 10)
  if (csv.topQueries.length) {
    return {
      lastSynced: csv.exportedAtHint,
      rowsImported: csv.topQueries.length,
      dateRange: 'CSV import',
      status: 'csv_fallback',
      source: 'csv',
    }
  }

  return {
    lastSynced: null,
    rowsImported: 0,
    dateRange: null,
    status: isGscApiConfigured() ? 'not_synced' : 'csv_not_found',
    source: 'none',
  }
}
