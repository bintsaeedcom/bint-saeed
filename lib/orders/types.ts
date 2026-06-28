export type OrderFulfillmentStatus =
  | 'paid'
  | 'processing'
  | 'ready_to_ship'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded'

export type PaymentProviderName = 'stripe' | 'mollie'

export interface OrderLine {
  productId?: string
  name: string
  description?: string
  quantity: number
  unitPrice: number
  currency: string
}

export interface StoredOrder {
  id: string
  /** Stripe Checkout session id, or Mollie payment id (tr_…). */
  stripeSessionId: string
  paymentProvider?: PaymentProviderName
  paymentIntentId?: string
  molliePaymentId?: string
  customerEmail: string
  customerName?: string
  customerPhone?: string
  shippingAddress?: Record<string, unknown>
  billingAddress?: Record<string, unknown>
  lines: OrderLine[]
  amountSubtotal: number
  amountShipping: number
  amountTotal: number
  currency: string
  fulfillmentStatus: OrderFulfillmentStatus
  /** From Stripe Checkout custom field or Mollie checkout notes */
  deliveryNotes?: string
  /** Owner notes (packing, VIP, etc.) */
  internalNotes?: string
  discountCode?: string
  createdAt: string
  updatedAt: string
}
