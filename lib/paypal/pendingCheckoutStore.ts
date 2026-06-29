import { Redis } from '@upstash/redis'
import type { CheckoutCartItem, CheckoutClientContext } from '@/lib/checkout/types'

export type PendingPayPalCheckout = {
  items: CheckoutCartItem[]
  currency: string
  cartSubtotal: number
  discountCode?: string
  customerEmail?: string
  checkoutNotes?: string
  clientContext?: CheckoutClientContext
  clientIp?: string
  orderRef: string
  createdAt: string
}

const KEY_PENDING = (orderId: string) => `bs:paypal:pending:${orderId}`
const PENDING_TTL_SECONDS = 60 * 60 * 24 * 7

let redis: Redis | null = null
const memoryPending = new Map<string, PendingPayPalCheckout>()

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  if (!redis) redis = new Redis({ url, token })
  return redis
}

export async function savePendingPayPalCheckout(
  orderId: string,
  payload: PendingPayPalCheckout,
): Promise<void> {
  const r = getRedis()
  if (r) {
    await r.set(KEY_PENDING(orderId), JSON.stringify(payload), { ex: PENDING_TTL_SECONDS })
    return
  }
  memoryPending.set(orderId, payload)
}

export async function getPendingPayPalCheckout(orderId: string): Promise<PendingPayPalCheckout | null> {
  const r = getRedis()
  if (r) {
    const raw = await r.get<string>(KEY_PENDING(orderId))
    if (!raw) return null
    try {
      return typeof raw === 'string' ? (JSON.parse(raw) as PendingPayPalCheckout) : (raw as PendingPayPalCheckout)
    } catch {
      return null
    }
  }
  return memoryPending.get(orderId) ?? null
}

export async function deletePendingPayPalCheckout(orderId: string): Promise<void> {
  const r = getRedis()
  if (r) {
    await r.del(KEY_PENDING(orderId))
    return
  }
  memoryPending.delete(orderId)
}
