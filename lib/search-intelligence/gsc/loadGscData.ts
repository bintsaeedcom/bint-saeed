import { loadGscAuditSnapshot } from '@/lib/content/gscCsv'
import { getLatestGscSnapshot } from '@/lib/search-intelligence/gsc/store'
import { topQueriesByImpressions } from '@/lib/search-intelligence/gsc/trends'
import type { GscAnalyticsRow } from '@/lib/search-intelligence/gsc/client'
import { isGscApiConfigured } from '@/lib/search-intelligence/gsc/client'

export type GscDataSource = 'api' | 'csv' | 'none'

export type UnifiedGscQuery = {
  query: string
  clicks: number
  impressions: number
  ctr: number
  position: number
  page?: string
  country?: string
  device?: string
  source: GscDataSource
  observedAt: string
}

export async function loadUnifiedGscQueries(limit = 500): Promise<{
  source: GscDataSource
  queries: UnifiedGscQuery[]
  syncedAt: string | null
}> {
  const apiSnap = await getLatestGscSnapshot()
  if (apiSnap?.rows?.length && apiSnap.status === 'success') {
    const top = topQueriesByImpressions(apiSnap.rows, limit)
    return {
      source: 'api',
      syncedAt: apiSnap.syncedAt,
      queries: top
        .filter((r) => r.query)
        .map((r) => ({
          query: r.query!,
          clicks: r.clicks,
          impressions: r.impressions,
          ctr: r.ctr,
          position: r.position,
          page: r.page,
          country: r.country,
          device: r.device,
          source: 'api' as const,
          observedAt: apiSnap.syncedAt,
        })),
    }
  }

  const csv = await loadGscAuditSnapshot(limit, 100)
  if (csv.topQueries.length) {
    return {
      source: 'csv',
      syncedAt: csv.exportedAtHint,
      queries: csv.topQueries.map((q) => ({
        query: q.query,
        clicks: q.clicks,
        impressions: q.impressions,
        ctr: q.ctr,
        position: q.position,
        source: 'csv' as const,
        observedAt: new Date().toISOString(),
      })),
    }
  }

  return { source: 'none', queries: [], syncedAt: null }
}

export function gscConnectionInfo(): {
  apiConfigured: boolean
  csvAvailable: boolean
  preferredSource: GscDataSource
} {
  return {
    apiConfigured: isGscApiConfigured(),
    csvAvailable: true,
    preferredSource: isGscApiConfigured() ? 'api' : 'csv',
  }
}

export function filterGscRowsBySeed(rows: UnifiedGscQuery[], seed: string): UnifiedGscQuery[] {
  const s = seed.trim().toLowerCase()
  if (!s) return rows
  const tokens = s.split(/\s+/).filter(Boolean)
  return rows.filter((r) => {
    const q = r.query.toLowerCase()
    return tokens.every((t) => q.includes(t))
  })
}

export function aggregateGscPageRows(rows: GscAnalyticsRow[]): { page: string; impressions: number; clicks: number; position: number }[] {
  const map = new Map<string, { impressions: number; clicks: number; position: number; weight: number }>()
  for (const r of rows) {
    if (!r.page) continue
    const prev = map.get(r.page)
    const imp = r.impressions ?? 0
    if (!prev) {
      map.set(r.page, { impressions: imp, clicks: r.clicks ?? 0, position: r.position ?? 0, weight: imp })
      continue
    }
    const totalImp = prev.impressions + imp
    const pos = (prev.position * prev.weight + (r.position ?? 0) * imp) / (totalImp || 1)
    map.set(r.page, {
      impressions: totalImp,
      clicks: prev.clicks + (r.clicks ?? 0),
      position: pos,
      weight: totalImp,
    })
  }
  return [...map.entries()]
    .map(([page, v]) => ({ page, impressions: v.impressions, clicks: v.clicks, position: v.position }))
    .sort((a, b) => b.impressions - a.impressions)
}
