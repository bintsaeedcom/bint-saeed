import { getFunnelMetricsReliableSince } from '@/lib/analytics/funnel/reliableSince'

/** Reliable funnel metrics only from this deployment forward (UTC ISO). */
export { getFunnelMetricsReliableSince }

export type FunnelStage =
  | 'bag_active'
  | 'bag_left'
  | 'checkout_page_reached'
  | 'payment_session_created'
  | 'payment_attempt_failed'
  | 'payment_session_left'
  | 'payment_cancelled'
  | 'payment_expired'
  | 'purchase_completed'

export type PaymentProvider = 'stripe' | 'tabby' | 'tamara' | 'paypal' | 'mollie' | 'gift_card'

export type FunnelSlackEvent =
  | 'funnel_bag_left'
  | 'funnel_checkout_page_left'
  | 'funnel_payment_session_left'
  | 'funnel_payment_attempt_failed'

export type VisitorClassification = 'Likely human' | 'Likely automated' | 'Internal/Test' | 'Unknown'

export const FUNNEL_SLACK_EVENT_STAGE: Record<FunnelSlackEvent, FunnelStage> = {
  funnel_bag_left: 'bag_left',
  funnel_checkout_page_left: 'checkout_page_reached',
  funnel_payment_session_left: 'payment_session_left',
  funnel_payment_attempt_failed: 'payment_attempt_failed',
}

export const FUNNEL_STAGE_RANK: Record<FunnelStage, number> = {
  bag_active: 1,
  bag_left: 2,
  checkout_page_reached: 3,
  payment_session_created: 4,
  payment_attempt_failed: 4,
  payment_cancelled: 4,
  payment_expired: 4,
  payment_session_left: 5,
  purchase_completed: 6,
}

export const FUNNEL_SLACK_LABELS: Record<FunnelSlackEvent, string> = {
  funnel_bag_left: 'Bag left',
  funnel_checkout_page_left: 'Checkout page left',
  funnel_payment_session_left: 'Payment checkout left unpaid',
  funnel_payment_attempt_failed: 'Payment attempt failed',
}

/** Hidden tab must stay hidden this long before an idle abandonment fires. */
export const FUNNEL_HIDDEN_ABANDON_MS = 3 * 60 * 1000

/** Minimum time since last bag mutation before bag-left on unload. */
export const FUNNEL_MIN_BAG_IDLE_MS = 2 * 60 * 1000

/** Minimum time on checkout page before checkout-page-left (no PSP session). */
export const FUNNEL_MIN_CHECKOUT_PAGE_MS = 45 * 1000
