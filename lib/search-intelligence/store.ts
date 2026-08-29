import { randomUUID } from 'crypto'
import { Redis } from '@upstash/redis'
import type { ContentBrief, KeywordRecord, MetricHistoryPoint, SiStatus } from '@/lib/search-intelligence/types'
import { dedupeKey } from '@/lib/search-intelligence/normalize'

const KEY_OPP = (id: string) => `bs:si:opp:${id}`
const KEY_OPP_INDEX = 'bs:si:opp:index'
const KEY_OPP_DEDUPE = (k: string) => `bs:si:opp:dedupe:${k}`
const KEY_BRIEF = (id: string) => `bs:si:brief:${id}`
const KEY_BRIEF_INDEX = 'bs:si:brief:index'
const KEY_HISTORY = (oppId: string) => `bs:si:history:${oppId}`

let redis: Redis | null = null
const memoryOpps = new Map<string, KeywordRecord>()
const memoryOppIndex: string[] = []
const memoryDedupe = new Map<string, string>()
const memoryBriefs = new Map<string, ContentBrief>()
const memoryBriefIndex: string[] = []
const memoryHistory = new Map<string, MetricHistoryPoint[]>()

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  if (!redis) redis = new Redis({ url, token })
  return redis
}

export async function saveOpportunity(record: KeywordRecord): Promise<KeywordRecord> {
  const r = getRedis()
  const dk = dedupeKey(record.keyword, record.country, record.language)
  if (r) {
    const existingId = await r.get<string>(KEY_OPP_DEDUPE(dk))
    const id = existingId || record.id
    const toSave = { ...record, id, updatedAt: new Date().toISOString() }
    await r.set(KEY_OPP(id), JSON.stringify(toSave))
    await r.set(KEY_OPP_DEDUPE(dk), id)
    await r.zadd(KEY_OPP_INDEX, { score: toSave.opportunityScore, member: id })
    await appendHistory(id, toSave)
    return toSave
  }
  const existingId = memoryDedupe.get(dk)
  const id = existingId || record.id
  const toSave = { ...record, id, updatedAt: new Date().toISOString() }
  memoryOpps.set(id, toSave)
  memoryDedupe.set(dk, id)
  if (!memoryOppIndex.includes(id)) memoryOppIndex.push(id)
  await appendHistory(id, toSave)
  return toSave
}

export async function saveOpportunitiesBatch(records: KeywordRecord[]): Promise<KeywordRecord[]> {
  const out: KeywordRecord[] = []
  for (const rec of records) {
    out.push(await saveOpportunity(rec))
  }
  return out
}

export async function listOpportunities(limit = 500): Promise<KeywordRecord[]> {
  const r = getRedis()
  if (r) {
    const ids = await r.zrange(KEY_OPP_INDEX, 0, limit - 1, { rev: true })
    const rows: KeywordRecord[] = []
    for (const id of ids) {
      const raw = await r.get<string>(KEY_OPP(String(id)))
      if (raw) rows.push(typeof raw === 'string' ? JSON.parse(raw) : (raw as KeywordRecord))
    }
    return rows
  }
  return memoryOppIndex
    .map((id) => memoryOpps.get(id))
    .filter((x): x is KeywordRecord => !!x)
    .sort((a, b) => b.opportunityScore - a.opportunityScore)
    .slice(0, limit)
}

export async function updateOpportunityStatus(id: string, status: SiStatus): Promise<KeywordRecord | null> {
  const r = getRedis()
  if (r) {
    const raw = await r.get<string>(KEY_OPP(id))
    if (!raw) return null
    const rec = typeof raw === 'string' ? (JSON.parse(raw) as KeywordRecord) : (raw as KeywordRecord)
    const updated = { ...rec, status, updatedAt: new Date().toISOString() }
    await r.set(KEY_OPP(id), JSON.stringify(updated))
    return updated
  }
  const rec = memoryOpps.get(id)
  if (!rec) return null
  const updated = { ...rec, status, updatedAt: new Date().toISOString() }
  memoryOpps.set(id, updated)
  return updated
}

async function appendHistory(oppId: string, rec: KeywordRecord): Promise<void> {
  const point: MetricHistoryPoint = {
    at: new Date().toISOString(),
    impressions: rec.impressions,
    clicks: rec.clicks,
    ranking: rec.ranking,
    opportunityScore: rec.opportunityScore,
  }
  const r = getRedis()
  if (r) {
    const key = KEY_HISTORY(oppId)
    await r.lpush(key, JSON.stringify(point))
    await r.ltrim(key, 0, 49)
    return
  }
  const list = memoryHistory.get(oppId) ?? []
  list.unshift(point)
  memoryHistory.set(oppId, list.slice(0, 50))
}

export async function getOpportunityHistory(oppId: string): Promise<MetricHistoryPoint[]> {
  const r = getRedis()
  if (r) {
    const raw = await r.lrange(KEY_HISTORY(oppId), 0, 49)
    return raw.map((x) => (typeof x === 'string' ? JSON.parse(x) : x) as MetricHistoryPoint)
  }
  return memoryHistory.get(oppId) ?? []
}

export async function saveBrief(brief: ContentBrief): Promise<ContentBrief> {
  const r = getRedis()
  const id = brief.id || randomUUID()
  const toSave = { ...brief, id, updatedAt: new Date().toISOString() }
  if (r) {
    await r.set(KEY_BRIEF(id), JSON.stringify(toSave))
    await r.zadd(KEY_BRIEF_INDEX, { score: Date.now(), member: id })
    return toSave
  }
  memoryBriefs.set(id, toSave)
  if (!memoryBriefIndex.includes(id)) memoryBriefIndex.push(id)
  return toSave
}

export async function listBriefs(limit = 100): Promise<ContentBrief[]> {
  const r = getRedis()
  if (r) {
    const ids = await r.zrange(KEY_BRIEF_INDEX, 0, limit - 1, { rev: true })
    const rows: ContentBrief[] = []
    for (const id of ids) {
      const raw = await r.get<string>(KEY_BRIEF(String(id)))
      if (raw) rows.push(typeof raw === 'string' ? JSON.parse(raw) : (raw as ContentBrief))
    }
    return rows
  }
  return memoryBriefIndex
    .map((id) => memoryBriefs.get(id))
    .filter((x): x is ContentBrief => !!x)
    .slice(0, limit)
}

export function newOpportunityId(): string {
  return randomUUID()
}

const KEY_SEEDS = 'bs:si:seeds'
const KEY_DISCOVERED_FIRST = (k: string) => `bs:si:discovered:first:${k}`
const KEY_DISCOVERED_LAST = (k: string) => `bs:si:discovered:last:${k}`
const KEY_DISCOVERED_INDEX = 'bs:si:discovered:index'

let memorySeeds: import('@/lib/search-intelligence/types').SeedCollection[] = []
const memoryDiscoveredFirst = new Map<string, string>()
const memoryDiscoveredLast = new Map<string, string>()

export async function listSeedCollections(): Promise<import('@/lib/search-intelligence/types').SeedCollection[]> {
  const r = getRedis()
  if (r) {
    const raw = await r.get<string>(KEY_SEEDS)
    if (!raw) return []
    return typeof raw === 'string' ? JSON.parse(raw) : (raw as import('@/lib/search-intelligence/types').SeedCollection[])
  }
  return memorySeeds
}

export async function saveSeedCollections(collections: import('@/lib/search-intelligence/types').SeedCollection[]): Promise<void> {
  const r = getRedis()
  if (r) {
    await r.set(KEY_SEEDS, JSON.stringify(collections))
  } else {
    memorySeeds = collections
  }
}

export async function touchDiscoveredKeyword(normalizedKey: string): Promise<{ firstSeen: string; lastSeen: string; isNew: boolean }> {
  const now = new Date().toISOString()
  const r = getRedis()
  if (r) {
    const existing = await r.get<string>(KEY_DISCOVERED_FIRST(normalizedKey))
    if (!existing) {
      await r.set(KEY_DISCOVERED_FIRST(normalizedKey), now)
      await r.zadd(KEY_DISCOVERED_INDEX, { score: Date.now(), member: normalizedKey })
      await r.set(KEY_DISCOVERED_LAST(normalizedKey), now)
      return { firstSeen: now, lastSeen: now, isNew: true }
    }
    await r.set(KEY_DISCOVERED_LAST(normalizedKey), now)
    return { firstSeen: existing, lastSeen: now, isNew: false }
  }
  const isNew = !memoryDiscoveredFirst.has(normalizedKey)
  if (isNew) memoryDiscoveredFirst.set(normalizedKey, now)
  memoryDiscoveredLast.set(normalizedKey, now)
  return {
    firstSeen: memoryDiscoveredFirst.get(normalizedKey) ?? now,
    lastSeen: now,
    isNew,
  }
}

