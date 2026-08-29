import type { CartItem } from '@/store/cartStore'
import { lineTotalAed } from '@/lib/shopProductOptions'
import { parseClientDevice, formatClientDeviceLabel } from '@/lib/analytics/parseClientDevice'
import { readFirstTouchAttribution } from '@/lib/analytics/attributionStorage'
import { isInternalTestModeActive } from '@/lib/analytics/internalTestMode'
import {
  computeCartFingerprint,
  getOrCreateCartId,
  readCartFirstSeen,
  readCartLastActivity,
  resetCartIdentity,
  touchCartActivity,
} from '@/lib/analytics/funnel/cartIdentity'
import {
  clearFunnelAfterPurchase,
  hasPaymentSession,
  isPurchaseCompleted,
  markBagActive,
  markCheckoutPageReached,
  markPaymentAttemptFailed,
  markPaymentSessionCreated,
  markPurchaseCompleted,
  readFunnelState,
  resetFunnelState,
  type StoredFunnelState,
} from '@/lib/analytics/funnel/clientState'
import type { FunnelSlackEvent, PaymentProvider } from '@/lib/analytics/funnel/types'
import {
  FUNNEL_HIDDEN_ABANDON_MS,
  FUNNEL_MIN_BAG_IDLE_MS,
  FUNNEL_MIN_CHECKOUT_PAGE_MS,
} from '@/lib/analytics/funnel/types'

const CART_STORAGE_KEY = 'bint-saeed-cart'

let hiddenTimer: ReturnType<typeof setTimeout> | null = null
let watchersBound = false

function readPersistedCartItems(): CartItem[] {
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

function devicePayload() {
  if (typeof window === 'undefined') {
    return { type: 'desktop' as const, browser: 'Unknown', os: 'Unknown', label: 'Unknown' }
  }
  const info = parseClientDevice(navigator.userAgent)
  return { ...info, label: formatClientDeviceLabel(info), userAgent: navigator.userAgent }
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
  const firstTouch = readFirstTouchAttribution()
  const funnel = readFunnelState()
  return {
    visitorId: localStorage.getItem('bs_visitor_id') || undefined,
    cartId: getOrCreateCartId(),
    cartFingerprint: computeCartFingerprint(readPersistedCartItems()),
    cartFirstSeen: readCartFirstSeen() || undefined,
    cartLastActivity: readCartLastActivity() || undefined,
    funnelStage: funnel.stage,
    paymentSessionCreated: hasPaymentSession(),
    paymentProvider: funnel.paymentProvider,
    paymentSessionRef: funnel.paymentSessionRef,
    internalTest: isInternalTestModeActive(),
    referrer: firstTouch?.referrer || document.referrer || 'Direct',
    firstTouch: firstTouch || undefined,
    device: devicePayload(),
    browser: {
      url: window.location.href,
      path: window.location.pathname + window.location.search,
      title: document.title,
      referrer: document.referrer || 'Direct',
      userAgent: navigator.userAgent,
    },
    location,
  }
}

async function postFunnel(type: string, data: Record<string, unknown>, beacon = false) {
  const body = JSON.stringify({ type, data })
  try {
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
  } catch {
    /* non-blocking */
  }
}

function msSince(iso: string | null | undefined): number {
  if (!iso) return Number.POSITIVE_INFINITY
  const t = Date.parse(iso)
  if (Number.isNaN(t)) return Number.POSITIVE_INFINITY
  return Date.now() - t
}

function resolveAbandonEvent(): FunnelSlackEvent | null {
  if (isPurchaseCompleted()) return null
  // After a real PSP session exists, payment outcomes are server/provider authoritative only.
  if (hasPaymentSession()) return null

  const items = readPersistedCartItems()
  if (items.length === 0) return null

  const path = window.location.pathname
  if (path.startsWith('/checkout/success')) return null

  const funnel = readFunnelState()
  const onCheckout = path.includes('/checkout')

  if (funnel.stage === 'checkout_page_reached' || funnel.checkoutPageReachedAt || onCheckout) {
    const sinceCheckout = msSince(funnel.checkoutPageReachedAt)
    if (sinceCheckout < FUNNEL_MIN_CHECKOUT_PAGE_MS) return null
    return 'funnel_checkout_page_left'
  }

  if (msSince(readCartLastActivity()) < FUNNEL_MIN_BAG_IDLE_MS) return null
  return 'funnel_bag_left'
}

function buildFunnelItems(items: CartItem[]) {
  return items.map((item) => ({
    name: item.name,
    quantity: item.quantity,
    size: item.size,
    color: item.color,
    price: item.price,
    sku: item.sku,
    productUrl: item.productUrl,
  }))
}

export function evaluateAndSendFunnelAbandonment(): void {
  if (typeof window === 'undefined') return
  if (isPurchaseCompleted() || hasPaymentSession()) return

  const event = resolveAbandonEvent()
  if (!event) return

  const items = readPersistedCartItems()
  if (items.length === 0) return

  const { itemCount, cartValueAed } = cartSummary(items)
  void postFunnel(
    event,
    {
      ...visitorPayload(),
      cartItems: itemCount,
      cartValueAed,
      items: buildFunnelItems(items),
    },
    true,
  )
}

function clearHiddenTimer(): void {
  if (hiddenTimer) {
    clearTimeout(hiddenTimer)
    hiddenTimer = null
  }
}

function scheduleHiddenAbandonCheck(): void {
  if (hasPaymentSession() || isPurchaseCompleted()) return
  clearHiddenTimer()
  hiddenTimer = setTimeout(() => {
    hiddenTimer = null
    if (typeof document !== 'undefined' && document.hidden) {
      evaluateAndSendFunnelAbandonment()
    }
  }, FUNNEL_HIDDEN_ABANDON_MS)
}

/** Call once from AnalyticsProvider — no abandonment on quick tab switches. */
export function initFunnelAbandonWatchers(): void {
  if (typeof window === 'undefined' || watchersBound) return
  watchersBound = true

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      scheduleHiddenAbandonCheck()
    } else {
      clearHiddenTimer()
    }
  })

  const onLeave = () => evaluateAndSendFunnelAbandonment()
  window.addEventListener('pagehide', onLeave)
  window.addEventListener('beforeunload', onLeave)
}

export function onCartMutation(): void {
  getOrCreateCartId()
  touchCartActivity()
  markBagActive()
}

export async function notifyCartAddSlack(item: CartItem, quantityAdded: number): Promise<void> {
  if (typeof window === 'undefined') return
  onCartMutation()
  const { itemCount, cartValueAed } = cartSummary(readPersistedCartItems())
  await postFunnel('cart_add', {
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
  await postFunnel('wishlist_add', {
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

export function markCheckoutPageReachedTelemetry(): void {
  markCheckoutPageReached()
}

/** @deprecated Use markCheckoutPageReachedTelemetry */
export function markCheckoutStarted(): void {
  markCheckoutPageReachedTelemetry()
}

export function markPaymentSession(provider: PaymentProvider, sessionRef: string): void {
  markPaymentSessionCreated(provider, sessionRef)
}

export function reportPaymentAttemptFailed(provider: PaymentProvider): void {
  markPaymentAttemptFailed(provider)
  const { itemCount, cartValueAed } = cartSummary(readPersistedCartItems())
  void postFunnel('funnel_payment_attempt_failed', {
    ...visitorPayload(),
    cartItems: itemCount,
    cartValueAed,
    items: buildFunnelItems(readPersistedCartItems()),
  })
}

export function completePurchaseFunnel(): void {
  clearFunnelAfterPurchase()
  resetCartIdentity()
  resetFunnelState()
  clearHiddenTimer()
}

/** @deprecated */
export function clearCheckoutStarted(): void {
  /* purchase flow calls completePurchaseFunnel */
}

/** @deprecated — use initFunnelAbandonWatchers; no-op for legacy imports */
export function notifyAbandonedCartSlack(_opts?: { reason?: 'hidden' | 'pagehide' }): void {
  /* removed: abandonment handled by initFunnelAbandonWatchers */
}

export type { PaymentProvider, StoredFunnelState }
