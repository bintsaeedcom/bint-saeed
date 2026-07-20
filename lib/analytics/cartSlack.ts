import type { CartItem } from '@/store/cartStore'
import { lineTotalAed } from '@/lib/shopProductOptions'

const CART_STORAGE_KEY = 'bint-saeed-cart'
const CHECKOUT_STARTED_KEY = 'bs_checkout_started'
const ABANDON_NOTIFIED_KEY = 'bs_abandon_cart_notified'

export function markCheckoutStarted(): void {
  if (typeof window === 'undefined') return
  sessionStorage.setItem(CHECKOUT_STARTED_KEY, '1')
}

export function readPersistedCartItems(): CartItem[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as { state?: { items?: CartItem[] } }
    return Array.isArray(parsed.state?.items) ? parsed.state.items : []
  } catch {
    return []
  }
}

function cartSummary(items: CartItem[]) {
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const cartValueAed = items.reduce((sum, item) => sum + lineTotalAed(item), 0)
  return { itemCount, cartValueAed }
}

function visitorPayload() {
  if (typeof window === 'undefined') return {}
  let location: Record<string, unknown> | null = null
  try {
    const raw = localStorage.getItem('bs_location')
    if (raw) location = JSON.parse(raw)
  } catch {
    location = null
  }
  return {
    visitorId: localStorage.getItem('bs_visitor_id') || undefined,
    referrer: document.referrer || 'Direct',
    browser: {
      url: window.location.href,
      path: window.location.pathname + window.location.search,
      title: document.title,
    },
    location,
  }
}

async function postSlack(type: string, data: Record<string, unknown>, beacon = false) {
  const body = JSON.stringify({ type, data })
  if (beacon && typeof navigator !== 'undefined' && navigator.sendBeacon) {
    navigator.sendBeacon('/api/analytics/slack', new Blob([body], { type: 'application/json' }))
    return
  }
  await fetch('/api/analytics/slack', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: beacon,
  })
}

export async function notifyCartAddSlack(item: CartItem, quantityAdded: number): Promise<void> {
  if (typeof window === 'undefined') return
  const { itemCount, cartValueAed } = cartSummary(readPersistedCartItems())
  await postSlack('cart_add', {
    ...visitorPayload(),
    cartEvent: {
      action: 'add',
      productId: item.id,
      productName: item.name,
      size: item.size,
      color: item.color,
      quantity: quantityAdded,
      linePriceAed: item.price,
      sku: item.sku,
      productUrl: item.productUrl,
    },
    cartItems: itemCount,
    cartValueAed,
  })
}

export async function notifyWishlistAddSlack(item: {
  id: string
  name: string
  price: number
  category?: string
  href?: string
}): Promise<void> {
  if (typeof window === 'undefined') return
  await postSlack('wishlist_add', {
    ...visitorPayload(),
    wishlistEvent: {
      action: 'add',
      productId: item.id,
      productName: item.name,
      linePriceAed: item.price,
      category: item.category,
      productUrl: item.href,
    },
  })
}

export function notifyAbandonedCartSlack(): void {
  if (typeof window === 'undefined') return
  if (sessionStorage.getItem(CHECKOUT_STARTED_KEY) === '1') return
  if (sessionStorage.getItem(ABANDON_NOTIFIED_KEY) === '1') return

  const items = readPersistedCartItems()
  if (items.length === 0) return

  sessionStorage.setItem(ABANDON_NOTIFIED_KEY, '1')
  const { itemCount, cartValueAed } = cartSummary(items)

  void postSlack(
    'abandoned_cart',
    {
      ...visitorPayload(),
      cartItems: itemCount,
      cartValueAed,
      items: items.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        size: item.size,
        color: item.color,
        price: item.price,
        sku: item.sku,
        productUrl: item.productUrl,
      })),
    },
    true,
  )
}
