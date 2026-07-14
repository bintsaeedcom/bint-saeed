import { saveOrder, findOrderIdBySession } from '@/lib/orders/orderStore'
import type { StoredOrder } from '@/lib/orders/types'
import { createTrelloCardForOrder, notifySlackNewPaidOrder } from '@/lib/ops/notifications'
import { dispatchOrderEmails } from '@/lib/orders/dispatchOrderEmails'
import {
  deletePendingTabbyCheckout,
  getPendingTabbyCheckout,
} from '@/lib/tabby/pendingCheckoutStore'
import { captureTabbyPayment, getTabbyPayment } from '@/lib/tabby/api'
import { lineUnitForCurrency } from '@/lib/shopProductOptions'
import type { SupportedCurrency } from '@/lib/pricing/types'

const PAID_STATUSES = new Set(['AUTHORIZED', 'authorized', 'CLOSED', 'closed', 'CAPTURED', 'captured'])

/**
 * Persist a paid Tabby order. Idempotent via stripeSessionId key = Tabby payment id.
 */
export async function fulfillTabbyPaidOrder(args: {
  paymentId: string
  statusHint?: string
}): Promise<{ fulfilled: boolean; orderId?: string; reason?: string }> {
  const existingId = await findOrderIdBySession(args.paymentId)
  if (existingId) {
    return { fulfilled: true, orderId: existingId, reason: 'already_saved' }
  }

  const pending = await getPendingTabbyCheckout(args.paymentId)
  if (!pending) {
    return { fulfilled: false, reason: 'missing_pending' }
  }

  const remote = await getTabbyPayment(args.paymentId, pending.countryCode)
  // Always prefer retrieve-payment status (upper-case AUTHORIZED) over webhook hint (authorized).
  const status = String(remote.data.status || args.statusHint || '').trim()
  const statusUpper = status.toUpperCase()

  if (status && !PAID_STATUSES.has(status) && !PAID_STATUSES.has(statusUpper)) {
    // Still created / rejected / expired — do not fulfill
    if (['REJECTED', 'EXPIRED', 'CREATED'].includes(statusUpper)) {
      return { fulfilled: false, reason: `status:${statusUpper}` }
    }
  }

  // Capture full amount when authorized (checklist: getPayment → capture AUTHORIZED).
  if (statusUpper === 'AUTHORIZED') {
    const captureAmount =
      Number(remote.data.amount) > 0 ? Number(remote.data.amount) : pending.orderTotal
    try {
      await captureTabbyPayment(
        args.paymentId,
        captureAmount,
        pending.currency,
        pending.countryCode,
      )
    } catch {
      /* may already be captured */
    }
  }

  const currency = pending.currency as SupportedCurrency
  const now = new Date().toISOString()
  const order: StoredOrder = {
    id: pending.orderRef,
    stripeSessionId: args.paymentId,
    paymentProvider: 'tabby',
    paymentIntentId: args.paymentId,
    tabbyPaymentId: args.paymentId,
    customerEmail: pending.buyer.email || pending.customerEmail || '',
    customerName: pending.buyer.name,
    customerPhone: pending.buyer.phone,
    shippingAddress: {
      line1: pending.shippingAddress.address,
      city: pending.shippingAddress.city,
      postal_code: pending.shippingAddress.zip,
      country: pending.countryCode,
      phone: pending.buyer.phone,
    },
    lines: pending.items.map((item) => ({
      productId: item.id,
      name: item.name,
      description: [item.size, item.color, item.customisationMessage].filter(Boolean).join(' · '),
      quantity: item.quantity,
      unitPrice: lineUnitForCurrency(item, currency),
      currency: pending.currency,
    })),
    amountSubtotal: pending.cartSubtotal,
    amountShipping: pending.shippingFee,
    amountTotal: pending.orderTotal,
    currency: pending.currency,
    fulfillmentStatus: 'paid',
    deliveryNotes: pending.checkoutNotes,
    discountCode: pending.discountCode,
    createdAt: now,
    updatedAt: now,
  }

  await saveOrder(order)
  await deletePendingTabbyCheckout(args.paymentId)

  try {
    await notifySlackNewPaidOrder(order)
  } catch {
    /* non-blocking */
  }
  try {
    await createTrelloCardForOrder(order)
  } catch {
    /* non-blocking */
  }
  try {
    await dispatchOrderEmails(order)
  } catch {
    /* non-blocking */
  }

  return { fulfilled: true, orderId: order.id }
}
