import { Redis } from '@upstash/redis'
import type { CheckoutCartItem, CheckoutClientContext } from '@/lib/checkout/types'
import type { AppliedGiftCardCredit } from '@/lib/giftCards/applyAtCheckout'

export type PendingMollieCheckout = {
  items: CheckoutCartItem[]
  currency: string
  cartSubtotal: number
  shippingFee?: number
  discountCode?: string
  customerEmail?: string
  checkoutNotes?: string
  clientContext?: CheckoutClientContext
  clientIp?: string
  appliedGiftCard?: AppliedGiftCardCredit
  createdAt: string
}

const KEY_PENDING = (paymentId: string) => `bs:mollie:pending:${paymentId}`
const PENDING_TTL_SECONDS = 60 * 60 * 24 * 7

let redis: Redis | null = null
const memoryPending = new Map<string, PendingMollieCheckout>()

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  if (!redis) redis = new Redis({ url, token })
  return redis
}

export async function savePendingMollieCheckout(
  paymentId: string,
  payload: PendingMollieCheckout,
): Promise<void> {
  const r = getRedis()
  if (r) {
    await r.set(KEY_PENDING(paymentId), JSON.stringify(payload), { ex: PENDING_TTL_SECONDS })
    return
  }
  memoryPending.set(paymentId, payload)
}

export async function getPendingMollieCheckout(paymentId: string): Promise<PendingMollieCheckout | null> {
  const r = getRedis()
  if (r) {
    const raw = await r.get<string>(KEY_PENDING(paymentId))
    if (!raw) return null
    try {
      return typeof raw === 'string' ? (JSON.parse(raw) as PendingMollieCheckout) : (raw as PendingMollieCheckout)
    } catch {
      return null
    }
  }
  return memoryPending.get(paymentId) ?? null
}

export async function deletePendingMollieCheckout(paymentId: string): Promise<void> {
  const r = getRedis()
  if (r) {
    await r.del(KEY_PENDING(paymentId))
    return
  }
  memoryPending.delete(paymentId)
}
