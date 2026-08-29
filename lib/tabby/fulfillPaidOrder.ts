import { saveOrder, findOrderIdBySession, getOrderById } from '@/lib/orders/orderStore'
import type { StoredOrder } from '@/lib/orders/types'
import { notifySlackNewPaidOrder } from '@/lib/ops/notifications'
import { dispatchOrderEmails } from '@/lib/orders/dispatchOrderEmails'
import { fulfillPaidGiftCards } from '@/lib/giftCards/fulfillPaidGiftCards'
import { commitRedeemForPaidOrder } from '@/lib/giftCards/applyAtCheckout'
import {
  deletePendingTabbyCheckout,
  getPendingTabbyCheckout,
} from '@/lib/tabby/pendingCheckoutStore'
import { getTabbyPayment } from '@/lib/tabby/api'
import { ensureTabbyPaymentCaptured } from '@/lib/tabby/ensureCapture'
import { lineUnitForCurrency } from '@/lib/shopProductOptions'
import type { SupportedCurrency } from '@/lib/pricing/types'

const PAID_STATUSES = new Set(['AUTHORIZED', 'authorized', 'CLOSED', 'closed', 'CAPTURED', 'captured'])

/**
 * Capture (when needed) + persist a Tabby order.
 * Must succeed from the Tabby webhook even if the shopper never hits /checkout/success.
 * Idempotent via stripeSessionId key = Tabby payment id.
 */
export async function fulfillTabbyPaidOrder(args: {
  paymentId: string
  statusHint?: string
  orderRefHint?: string
}): Promise<{ fulfilled: boolean; orderId?: string; reason?: string; captured?: boolean }> {
  const pending = await getPendingTabbyCheckout(args.paymentId)
  const existingId = await findOrderIdBySession(args.paymentId)

  // Always retrieve remote status (webhook / frontend) before deciding.
  const remote = await getTabbyPayment(args.paymentId, pending?.countryCode)
  const status = String(remote.data.status || args.statusHint || '').trim()
  const statusUpper = status.toUpperCase()

  if (status && !PAID_STATUSES.has(status) && !PAID_STATUSES.has(statusUpper)) {
    if (['REJECTED', 'EXPIRED', 'CREATED'].includes(statusUpper)) {
      return { fulfilled: false, reason: `status:${statusUpper}` }
    }
  }

  // Capture AUTHORIZED payments even when OMS save failed or pending is gone (repair path).
  const amount =
    Number(remote.data.amount) > 0
      ? Number(remote.data.amount)
      : pending?.orderTotal || 0
  const captureCurrency = pending?.currency || String(remote.data.currency || 'AED')
  const referenceId =
    pending?.orderRef ||
    args.orderRefHint ||
    remote.data.order?.reference_id ||
    `capture-${args.paymentId}`

  if (amount > 0) {
    const capture = await ensureTabbyPaymentCaptured({
      paymentId: args.paymentId,
      amount,
      currency: captureCurrency,
      referenceId,
      countryCode: pending?.countryCode,
      shippingAmount: pending?.shippingFee,
      discountAmount: pending?.appliedGiftCard?.appliedInCurrency,
    })
    if (!capture.ok && statusUpper === 'AUTHORIZED') {
      return {
        fulfilled: false,
        orderId: existingId || undefined,
        reason: capture.reason || 'capture_failed',
        captured: false,
      }
    }
  }

  if (existingId) {
    const existing = await getOrderById(existingId)
    if (existing) {
      await fulfillPaidGiftCards({ order: existing, items: pending?.items })
      await commitRedeemForPaidOrder({
        orderId: existing.id,
        applied: pending?.appliedGiftCard,
      })
    }
    if (pending) {
      await deletePendingTabbyCheckout(args.paymentId)
    }
    return {
      fulfilled: true,
      orderId: existingId,
      reason: 'already_saved',
      captured: true,
    }
  }

  if (!pending) {
    return { fulfilled: false, reason: 'missing_pending' }
  }

  // Refuse to mark paid in OMS until capture is confirmed for AUTHORIZED payments.
  if (statusUpper === 'AUTHORIZED') {
    const post = await getTabbyPayment(args.paymentId, pending.countryCode)
    const postStatus = String(post.data.status || '').toUpperCase()
    const hasCaptures = Array.isArray(post.data.captures) && post.data.captures.length > 0
    if (postStatus !== 'CLOSED' && postStatus !== 'CAPTURED' && !hasCaptures) {
      return { fulfilled: false, reason: 'capture_unconfirmed', captured: false }
    }
  }

  const orderCurrency = pending.currency as SupportedCurrency
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
      unitPrice: lineUnitForCurrency(item, orderCurrency),
      currency: pending.currency,
    })),
    amountSubtotal: pending.cartSubtotal,
    amountShipping: pending.shippingFee,
    amountTotal: pending.orderTotal,
    currency: pending.currency,
    fulfillmentStatus: 'paid',
    deliveryNotes: pending.checkoutNotes,
    discountCode: pending.discountCode,
    giftCardCode: pending.appliedGiftCard?.code,
    giftCardAppliedInCurrency: pending.appliedGiftCard?.appliedInCurrency,
    giftCardAppliedAed: pending.appliedGiftCard?.appliedAed,
    createdAt: now,
    updatedAt: now,
  }

  await saveOrder(order)

  try {
    await notifySlackNewPaidOrder(order, {
      paymentRef: args.paymentId,
      paymentMethod: 'Tabby · Pay in 4',
    })
  } catch {
    /* non-blocking */
  }
  try {
    await dispatchOrderEmails(order)
  } catch {
    /* non-blocking */
  }
  try {
    await fulfillPaidGiftCards({ order, items: pending.items })
  } catch {
    /* non-blocking */
  }
  try {
    await commitRedeemForPaidOrder({
      orderId: order.id,
      applied: pending.appliedGiftCard,
    })
  } catch {
    /* non-blocking */
  }

  await deletePendingTabbyCheckout(args.paymentId)

  return { fulfilled: true, orderId: order.id, captured: true }
}
