import { Redis } from '@upstash/redis'
import { upsertCustomerFromOrder } from '@/lib/customers/customerStore'
import type { StoredOrder, OrderFulfillmentStatus } from './types'

const KEY_ORDER = (id: string) => `bs:ord:${id}`
const KEY_BY_SESSION = (sid: string) => `bs:ord:sess:${sid}`
const KEY_INDEX = 'bs:ord:index'

let redis: Redis | null = null
const memoryOrders = new Map<string, StoredOrder>()
const memorySessionToId = new Map<string, string>()
let memoryIndex: string[] = []

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  if (!redis) redis = new Redis({ url, token })
  return redis
}

function sortMemoryIndex() {
  memoryIndex.sort((a, b) => {
    const ta = memoryOrders.get(a)?.createdAt ?? ''
    const tb = memoryOrders.get(b)?.createdAt ?? ''
    return tb.localeCompare(ta)
  })
}

export async function saveOrder(order: StoredOrder): Promise<void> {
  const r = getRedis()
  if (r) {
    await r.set(KEY_ORDER(order.id), JSON.stringify(order))
    await r.set(KEY_BY_SESSION(order.stripeSessionId), order.id)
    await r.zadd(KEY_INDEX, { score: new Date(order.createdAt).getTime(), member: order.id })
  } else {
    memoryOrders.set(order.id, order)
    memorySessionToId.set(order.stripeSessionId, order.id)
    if (!memoryIndex.includes(order.id)) memoryIndex.push(order.id)
    sortMemoryIndex()
  }
  await upsertCustomerFromOrder(order)
}

export async function findOrderIdBySession(sessionId: string): Promise<string | null> {
  const r = getRedis()
  if (r) {
    const id = await r.get<string>(KEY_BY_SESSION(sessionId))
    return id ?? null
  }
  return memorySessionToId.get(sessionId) ?? null
}

export async function getOrderById(id: string): Promise<StoredOrder | null> {
  const r = getRedis()
  if (r) {
    const raw = await r.get<string>(KEY_ORDER(id))
    if (!raw) return null
    try {
      return typeof raw === 'string' ? (JSON.parse(raw) as StoredOrder) : (raw as unknown as StoredOrder)
    } catch {
      return null
    }
  }
  return memoryOrders.get(id) ?? null
}

export async function listOrders(options?: {
  status?: OrderFulfillmentStatus
  limit?: number
}): Promise<StoredOrder[]> {
  const limit = options?.limit ?? 200
  const r = getRedis()
  if (r) {
    const ids = await r.zrange(KEY_INDEX, 0, limit - 1, { rev: true })
    const out: StoredOrder[] = []
    for (const id of ids) {
      const o = await getOrderById(id as string)
      if (!o) continue
      if (options?.status && o.fulfillmentStatus !== options.status) continue
      out.push(o)
    }
    return out
  }
  const ids = memoryIndex.slice(0, limit)
  const out: StoredOrder[] = []
  for (const id of ids) {
    const o = memoryOrders.get(id)
    if (!o) continue
    if (options?.status && o.fulfillmentStatus !== options.status) continue
    out.push(o)
  }
  return out
}

export async function updateOrderFulfillment(
  id: string,
  patch: { fulfillmentStatus?: OrderFulfillmentStatus; internalNotes?: string }
): Promise<StoredOrder | null> {
  const o = await getOrderById(id)
  if (!o) return null
  const next: StoredOrder = {
    ...o,
    updatedAt: new Date().toISOString(),
    ...(patch.fulfillmentStatus ? { fulfillmentStatus: patch.fulfillmentStatus } : {}),
    ...(patch.internalNotes !== undefined ? { internalNotes: patch.internalNotes } : {}),
  }
  await saveOrder(next)
  return next
}

export function usingRedisForOrders(): boolean {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
}
