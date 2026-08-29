import { Redis } from '@upstash/redis'
import type { GscAnalyticsRow } from '@/lib/search-intelligence/gsc/client'
import type { GscComparisonMode, GscPeriodId } from '@/lib/search-intelligence/gsc/dateRanges'

export type GscSyncStatus = 'idle' | 'syncing' | 'success' | 'error' | 'partial'

export type GscSnapshotMeta = {
  id: string
  syncedAt: string
  periodId: GscPeriodId
  startDate: string
  endDate: string
  comparison: GscComparisonMode
  compareStartDate?: string
  compareEndDate?: string
  rowCount: number
  source: 'api' | 'csv'
  status: GscSyncStatus
  errorMessage?: string
}

export type GscSnapshot = GscSnapshotMeta & {
  rows: GscAnalyticsRow[]
  compareRows?: GscAnalyticsRow[]
}

const KEY_SNAPSHOT = (id: string) => `bs:si:gsc:snapshot:${id}`
const KEY_LATEST = 'bs:si:gsc:latest'
const KEY_SYNC_STATUS = 'bs:si:gsc:sync-status'
const KEY_SNAPSHOT_INDEX = 'bs:si:gsc:snapshot:index'

let redis: Redis | null = null
const memorySnapshots = new Map<string, GscSnapshot>()
let memoryLatest: string | null = null
let memorySyncStatus: GscSnapshotMeta | null = null

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  if (!redis) redis = new Redis({ url, token })
  return redis
}

export async function getGscSyncStatus(): Promise<GscSnapshotMeta | null> {
  const r = getRedis()
  if (r) {
    const raw = await r.get<string>(KEY_SYNC_STATUS)
    if (!raw) return null
    return typeof raw === 'string' ? JSON.parse(raw) : (raw as GscSnapshotMeta)
  }
  return memorySyncStatus
}

export async function setGscSyncStatus(meta: GscSnapshotMeta): Promise<void> {
  const r = getRedis()
  if (r) {
    await r.set(KEY_SYNC_STATUS, JSON.stringify(meta))
  } else {
    memorySyncStatus = meta
  }
}

export async function saveGscSnapshot(snapshot: GscSnapshot): Promise<void> {
  const r = getRedis()
  const meta: GscSnapshotMeta = {
    id: snapshot.id,
    syncedAt: snapshot.syncedAt,
    periodId: snapshot.periodId,
    startDate: snapshot.startDate,
    endDate: snapshot.endDate,
    comparison: snapshot.comparison,
    compareStartDate: snapshot.compareStartDate,
    compareEndDate: snapshot.compareEndDate,
    rowCount: snapshot.rowCount,
    source: snapshot.source,
    status: snapshot.status,
    errorMessage: snapshot.errorMessage,
  }

  if (r) {
    await r.set(KEY_SNAPSHOT(snapshot.id), JSON.stringify(snapshot))
    await r.set(KEY_LATEST, snapshot.id)
    await r.set(KEY_SYNC_STATUS, JSON.stringify(meta))
    await r.zadd(KEY_SNAPSHOT_INDEX, { score: Date.parse(snapshot.syncedAt), member: snapshot.id })
    return
  }

  memorySnapshots.set(snapshot.id, snapshot)
  memoryLatest = snapshot.id
  memorySyncStatus = meta
}

export async function getLatestGscSnapshot(): Promise<GscSnapshot | null> {
  const r = getRedis()
  if (r) {
    const id = await r.get<string>(KEY_LATEST)
    if (!id) return null
    const raw = await r.get<string>(KEY_SNAPSHOT(String(id)))
    if (!raw) return null
    return typeof raw === 'string' ? JSON.parse(raw) : (raw as GscSnapshot)
  }
  if (!memoryLatest) return null
  return memorySnapshots.get(memoryLatest) ?? null
}

export async function listGscSnapshotMetas(limit = 20): Promise<GscSnapshotMeta[]> {
  const r = getRedis()
  if (r) {
    const ids = await r.zrange(KEY_SNAPSHOT_INDEX, 0, limit - 1, { rev: true })
    const metas: GscSnapshotMeta[] = []
    for (const id of ids) {
      const snap = await getGscSnapshotById(String(id))
      if (snap) {
        const { rows: _r, compareRows: _c, ...meta } = snap
        metas.push(meta)
      }
    }
    return metas
  }
  return [...memorySnapshots.values()]
    .map(({ rows: _r, compareRows: _c, ...meta }) => meta)
    .sort((a, b) => b.syncedAt.localeCompare(a.syncedAt))
    .slice(0, limit)
}

export async function getGscSnapshotById(id: string): Promise<GscSnapshot | null> {
  const r = getRedis()
  if (r) {
    const raw = await r.get<string>(KEY_SNAPSHOT(id))
    if (!raw) return null
    return typeof raw === 'string' ? JSON.parse(raw) : (raw as GscSnapshot)
  }
  return memorySnapshots.get(id) ?? null
}
