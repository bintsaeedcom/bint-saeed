import { Redis } from '@upstash/redis'
import type { PendingTamaraCheckout } from '@/lib/tamara/config'

const KEY_PENDING = (orderId: string) => `bs:tamara:pending:${orderId}`
const KEY_BY_REF = (orderRef: string) => `bs:tamara:ref:${orderRef}`
const PENDING_TTL_SECONDS = 60 * 60 * 24 * 7

let redis: Redis | null = null
const memoryPending = new Map<string, PendingTamaraCheckout>()
const memoryRefToOrder = new Map<string, string>()

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  if (!redis) redis = new Redis({ url, token })
  return redis
}

export async function savePendingTamaraCheckout(
  tamaraOrderId: string,
  payload: PendingTamaraCheckout,
): Promise<void> {
  const r = getRedis()
  if (r) {
    await r.set(KEY_PENDING(tamaraOrderId), JSON.stringify(payload), { ex: PENDING_TTL_SECONDS })
    await r.set(KEY_BY_REF(payload.orderRef), tamaraOrderId, { ex: PENDING_TTL_SECONDS })
    return
  }
  memoryPending.set(tamaraOrderId, payload)
  memoryRefToOrder.set(payload.orderRef, tamaraOrderId)
}

export async function getPendingTamaraCheckout(
  tamaraOrderId: string,
): Promise<PendingTamaraCheckout | null> {
  const r = getRedis()
  if (r) {
    const raw = await r.get<string>(KEY_PENDING(tamaraOrderId))
    if (!raw) return null
    try {
      return typeof raw === 'string'
        ? (JSON.parse(raw) as PendingTamaraCheckout)
        : (raw as PendingTamaraCheckout)
    } catch {
      return null
    }
  }
  return memoryPending.get(tamaraOrderId) ?? null
}

export async function getTamaraOrderIdByRef(orderRef: string): Promise<string | null> {
  const r = getRedis()
  if (r) {
    const id = await r.get<string>(KEY_BY_REF(orderRef))
    return id ?? null
  }
  return memoryRefToOrder.get(orderRef) ?? null
}

export async function deletePendingTamaraCheckout(tamaraOrderId: string): Promise<void> {
  const pending = await getPendingTamaraCheckout(tamaraOrderId)
  const r = getRedis()
  if (r) {
    await r.del(KEY_PENDING(tamaraOrderId))
    if (pending?.orderRef) await r.del(KEY_BY_REF(pending.orderRef))
    return
  }
  memoryPending.delete(tamaraOrderId)
  if (pending?.orderRef) memoryRefToOrder.delete(pending.orderRef)
}
