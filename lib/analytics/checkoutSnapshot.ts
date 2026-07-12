import type { CartItem } from '@/store/cartStore'

const STORAGE_KEY = 'bs_checkout_snapshot'

export type CheckoutSnapshot = {
  currency: string
  value: number
  items: Array<{
    item_id: string
    item_name: string
    item_category?: string
    price: number
    quantity: number
  }>
  createdAt: number
}

export function persistCheckoutSnapshot(params: {
  currency: string
  value: number
  items: CartItem[]
}): void {
  if (typeof window === 'undefined') return
  const snapshot: CheckoutSnapshot = {
    currency: params.currency,
    value: Number(params.value.toFixed(2)),
    items: params.items.map((item) => ({
      item_id: item.id,
      item_name: item.name,
      price: Number(item.price),
      quantity: item.quantity,
    })),
    createdAt: Date.now(),
  }
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot))
  } catch {
    /* ignore quota / private mode */
  }
}

export function consumeCheckoutSnapshot(maxAgeMs = 1000 * 60 * 60 * 6): CheckoutSnapshot | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    sessionStorage.removeItem(STORAGE_KEY)
    const parsed = JSON.parse(raw) as CheckoutSnapshot
    if (!parsed?.currency || !Array.isArray(parsed.items)) return null
    if (Date.now() - (parsed.createdAt || 0) > maxAgeMs) return null
    return parsed
  } catch {
    return null
  }
}
