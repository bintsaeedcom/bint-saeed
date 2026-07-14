import { Redis } from '@upstash/redis'
import type { PendingTabbyCheckout } from '@/lib/tabby/config'

const KEY_PENDING = (paymentId: string) => `bs:tabby:pending:${paymentId}`
const KEY_BY_REF = (orderRef: string) => `bs:tabby:ref:${orderRef}`
const PENDING_TTL_SECONDS = 60 * 60 * 24 * 7

let redis: Redis | null = null
const memoryPending = new Map<string, PendingTabbyCheckout>()
const memoryRefToPayment = new Map<string, string>()

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  if (!redis) redis = new Redis({ url, token })
  return redis
}

export async function savePendingTabbyCheckout(
  paymentId: string,
  payload: PendingTabbyCheckout,
): Promise<void> {
  const r = getRedis()
  if (r) {
    await r.set(KEY_PENDING(paymentId), JSON.stringify(payload), { ex: PENDING_TTL_SECONDS })
    await r.set(KEY_BY_REF(payload.orderRef), paymentId, { ex: PENDING_TTL_SECONDS })
    return
  }
  memoryPending.set(paymentId, payload)
  memoryRefToPayment.set(payload.orderRef, paymentId)
}

export async function getPendingTabbyCheckout(
  paymentId: string,
): Promise<PendingTabbyCheckout | null> {
  const r = getRedis()
  if (r) {
    const raw = await r.get<string>(KEY_PENDING(paymentId))
    if (!raw) return null
    try {
      return typeof raw === 'string'
        ? (JSON.parse(raw) as PendingTabbyCheckout)
        : (raw as PendingTabbyCheckout)
    } catch {
      return null
    }
  }
  return memoryPending.get(paymentId) ?? null
}

export async function getTabbyPaymentIdByOrderRef(orderRef: string): Promise<string | null> {
  const key = orderRef.trim()
  if (!key) return null
  const r = getRedis()
  if (r) {
    const id = await r.get<string>(KEY_BY_REF(key))
    return typeof id === 'string' && id ? id : null
  }
  return memoryRefToPayment.get(key) ?? null
}

export async function getPendingTabbyCheckoutByOrderRef(
  orderRef: string,
): Promise<PendingTabbyCheckout | null> {
  const paymentId = await getTabbyPaymentIdByOrderRef(orderRef)
  if (!paymentId) return null
  return getPendingTabbyCheckout(paymentId)
}

export async function deletePendingTabbyCheckout(paymentId: string): Promise<void> {
  const pending = await getPendingTabbyCheckout(paymentId)
  const r = getRedis()
  if (r) {
    await r.del(KEY_PENDING(paymentId))
    if (pending?.orderRef) await r.del(KEY_BY_REF(pending.orderRef))
    return
  }
  memoryPending.delete(paymentId)
  if (pending?.orderRef) memoryRefToPayment.delete(pending.orderRef)
}
