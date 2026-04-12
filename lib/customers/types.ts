/**
 * Single source of truth for checkout customers (Stripe / manual orders).
 * Keyed by normalized email; links to order IDs you store in orderStore.
 */
export interface CustomerRecord {
  /** Normalized lowercase email */
  email: string
  displayName?: string
  phone?: string
  /** Our order ids (e.g. ORD-xxx), newest last */
  orderIds: string[]
  orderCount: number
  /** Sum of order totals in major currency units */
  lifetimeValue: number
  currency: string
  lastOrderId?: string
  lastOrderAt?: string
  firstSeenAt: string
  updatedAt: string
  /** Snapshot from the most recent order with a shipping address */
  lastShippingAddress?: Record<string, unknown>
}
