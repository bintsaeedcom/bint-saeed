import type { FunnelStage, PaymentProvider } from '@/lib/analytics/funnel/types'

const FUNNEL_STATE_KEY = 'bs_cart_funnel_state'
const PURCHASE_COMPLETED_KEY = 'bs_cart_purchase_completed'

export type StoredFunnelState = {
  stage: FunnelStage
  checkoutPageReachedAt?: string
  paymentProvider?: PaymentProvider
  /** Safe provider reference only (session id, order id, payment id). */
  paymentSessionRef?: string
  paymentSessionCreatedAt?: string
  updatedAt: string
}

const DEFAULT_STATE: StoredFunnelState = {
  stage: 'bag_active',
  updatedAt: new Date().toISOString(),
}

function readRaw(): StoredFunnelState {
  if (typeof window === 'undefined') return { ...DEFAULT_STATE }
  try {
    const raw = localStorage.getItem(FUNNEL_STATE_KEY)
    if (!raw) return { ...DEFAULT_STATE }
    const parsed = JSON.parse(raw) as Partial<StoredFunnelState>
    return {
      stage: parsed.stage || 'bag_active',
      checkoutPageReachedAt: parsed.checkoutPageReachedAt,
      paymentProvider: parsed.paymentProvider,
      paymentSessionRef: parsed.paymentSessionRef,
      paymentSessionCreatedAt: parsed.paymentSessionCreatedAt,
      updatedAt: parsed.updatedAt || new Date().toISOString(),
    }
  } catch {
    return { ...DEFAULT_STATE }
  }
}

function write(state: StoredFunnelState): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(FUNNEL_STATE_KEY, JSON.stringify(state))
  } catch {
    /* ignore */
  }
}

export function readFunnelState(): StoredFunnelState {
  return readRaw()
}

export function hasPaymentSession(): boolean {
  const s = readRaw()
  return Boolean(s.paymentSessionRef && s.paymentProvider)
}

export function isPurchaseCompleted(): boolean {
  if (typeof window === 'undefined') return false
  try {
    return sessionStorage.getItem(PURCHASE_COMPLETED_KEY) === '1' || readRaw().stage === 'purchase_completed'
  } catch {
    return readRaw().stage === 'purchase_completed'
  }
}

function setStage(stage: FunnelStage, patch: Partial<StoredFunnelState> = {}): void {
  if (isPurchaseCompleted() && stage !== 'purchase_completed') return
  const current = readRaw()
  write({
    ...current,
    ...patch,
    stage,
    updatedAt: new Date().toISOString(),
  })
}

export function markBagActive(): void {
  if (isPurchaseCompleted()) return
  const current = readRaw()
  if (current.stage === 'bag_active') return
  if (
    current.stage === 'checkout_page_reached' ||
    current.stage === 'payment_session_created' ||
    current.stage === 'payment_session_left'
  ) {
    return
  }
  setStage('bag_active')
}

export function markCheckoutPageReached(): void {
  if (isPurchaseCompleted()) return
  const current = readRaw()
  setStage('checkout_page_reached', {
    checkoutPageReachedAt: current.checkoutPageReachedAt || new Date().toISOString(),
  })
}

export function markPaymentSessionCreated(provider: PaymentProvider, sessionRef: string): void {
  if (isPurchaseCompleted()) return
  const ref = sessionRef.trim().slice(0, 120)
  if (!ref) return
  setStage('payment_session_created', {
    paymentProvider: provider,
    paymentSessionRef: ref,
    paymentSessionCreatedAt: new Date().toISOString(),
  })
}

export function markPaymentAttemptFailed(provider: PaymentProvider): void {
  if (isPurchaseCompleted()) return
  setStage('payment_attempt_failed', { paymentProvider: provider })
}

export function markPurchaseCompleted(): void {
  if (typeof window !== 'undefined') {
    try {
      sessionStorage.setItem(PURCHASE_COMPLETED_KEY, '1')
    } catch {
      /* ignore */
    }
  }
  setStage('purchase_completed')
}

export function clearFunnelAfterPurchase(): void {
  markPurchaseCompleted()
}

export function resetFunnelState(): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.removeItem(FUNNEL_STATE_KEY)
    sessionStorage.removeItem(PURCHASE_COMPLETED_KEY)
  } catch {
    /* ignore */
  }
}
