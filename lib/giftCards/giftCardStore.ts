import { Redis } from '@upstash/redis'
import type { StoredGiftCard } from './types'

const KEY_CARD = (id: string) => `bs:gc:${id}`
const KEY_BY_CODE = (code: string) => `bs:gc:code:${normalizeGiftCardCode(code)}`
const KEY_INDEX = 'bs:gc:index'
const KEY_BY_ORDER = (orderId: string) => `bs:gc:order:${orderId}`

let redis: Redis | null = null
const memoryCards = new Map<string, StoredGiftCard>()
const memoryCodeToId = new Map<string, string>()
const memoryOrderToIds = new Map<string, string[]>()
let memoryIndex: string[] = []

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  if (!redis) redis = new Redis({ url, token })
  return redis
}

export function normalizeGiftCardCode(code: string): string {
  return code.trim().toUpperCase().replace(/\s+/g, '')
}

function sortMemoryIndex() {
  memoryIndex.sort((a, b) => {
    const ta = memoryCards.get(a)?.createdAt ?? ''
    const tb = memoryCards.get(b)?.createdAt ?? ''
    return tb.localeCompare(ta)
  })
}

async function indexCardAgainstOrder(card: StoredGiftCard): Promise<void> {
  const orderId = card.purchaseOrderId?.trim()
  if (!orderId) return
  const r = getRedis()
  if (r) {
    await r.sadd(KEY_BY_ORDER(orderId), card.id)
  } else {
    const list = memoryOrderToIds.get(orderId) ?? []
    if (!list.includes(card.id)) list.push(card.id)
    memoryOrderToIds.set(orderId, list)
  }
}

export function usingRedisForGiftCards(): boolean {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
}

export async function saveGiftCard(card: StoredGiftCard): Promise<void> {
  const r = getRedis()
  const norm = normalizeGiftCardCode(card.code)
  if (r) {
    await r.set(KEY_CARD(card.id), JSON.stringify(card))
    await r.set(KEY_BY_CODE(norm), card.id)
    await r.zadd(KEY_INDEX, { score: new Date(card.createdAt).getTime(), member: card.id })
  } else {
    memoryCards.set(card.id, card)
    memoryCodeToId.set(norm, card.id)
    if (!memoryIndex.includes(card.id)) memoryIndex.push(card.id)
    sortMemoryIndex()
  }
  await indexCardAgainstOrder(card)
}

export async function getGiftCardById(id: string): Promise<StoredGiftCard | null> {
  const r = getRedis()
  if (r) {
    const raw = await r.get<string>(KEY_CARD(id))
    if (!raw) return null
    try {
      return typeof raw === 'string' ? (JSON.parse(raw) as StoredGiftCard) : (raw as unknown as StoredGiftCard)
    } catch {
      return null
    }
  }
  return memoryCards.get(id) ?? null
}

export async function getGiftCardByCode(code: string): Promise<StoredGiftCard | null> {
  const norm = normalizeGiftCardCode(code)
  if (!norm) return null
  const r = getRedis()
  if (r) {
    const id = await r.get<string>(KEY_BY_CODE(norm))
    if (!id) return null
    return getGiftCardById(id)
  }
  const id = memoryCodeToId.get(norm)
  if (!id) return null
  return memoryCards.get(id) ?? null
}

export async function listGiftCards(options?: { limit?: number }): Promise<StoredGiftCard[]> {
  const limit = options?.limit ?? 200
  const r = getRedis()
  if (r) {
    const ids = await r.zrange(KEY_INDEX, 0, limit - 1, { rev: true })
    const out: StoredGiftCard[] = []
    for (const id of ids) {
      const card = await getGiftCardById(id as string)
      if (card) out.push(card)
    }
    return out
  }
  return memoryIndex.slice(0, limit).map((id) => memoryCards.get(id)!).filter(Boolean)
}

export async function listGiftCardsByPurchaseOrderId(orderId: string): Promise<StoredGiftCard[]> {
  const key = orderId.trim()
  if (!key) return []
  const r = getRedis()
  if (r) {
    const ids = (await r.smembers(KEY_BY_ORDER(key))) as string[]
    const out: StoredGiftCard[] = []
    for (const id of ids) {
      const card = await getGiftCardById(id)
      if (card) out.push(card)
    }
    // Fallback for cards issued before the order index existed.
    if (out.length === 0) {
      const recent = await listGiftCards({ limit: 400 })
      return recent.filter((card) => card.purchaseOrderId === key)
    }
    return out.sort((a, b) => a.createdAt.localeCompare(b.createdAt))
  }
  const ids = memoryOrderToIds.get(key)
  if (ids?.length) {
    return ids.map((id) => memoryCards.get(id)!).filter(Boolean)
  }
  return Array.from(memoryCards.values()).filter((card) => card.purchaseOrderId === key)
}
