import { saveOrder, findOrderIdBySession, getOrderById } from '@/lib/orders/orderStore'
import type { StoredOrder } from '@/lib/orders/types'
import { createTrelloCardForOrder, notifySlackNewPaidOrder } from '@/lib/ops/notifications'
import { dispatchOrderEmails } from '@/lib/orders/dispatchOrderEmails'
import {
  deletePendingTamaraCheckout,
  getPendingTamaraCheckout,
} from '@/lib/tamara/pendingCheckoutStore'
import { authoriseTamaraOrder, captureTamaraOrder } from '@/lib/tamara/api'
import { lineUnitForCurrency } from '@/lib/shopProductOptions'
import type { SupportedCurrency } from '@/lib/pricing/types'

/**
 * Persist a paid Tamara order, Slack (with Tamara label), Trello, emails.
 * Idempotent via stripeSessionId key = tamara order id.
 */
export async function fulfillTamaraPaidOrder(args: {
  tamaraOrderId: string
  statusHint?: string
}): Promise<{ fulfilled: boolean; orderId?: string; reason?: string }> {
  const existingId = await findOrderIdBySession(args.tamaraOrderId)
  if (existingId) {
    return { fulfilled: true, orderId: existingId, reason: 'already_saved' }
  }

  const pending = await getPendingTamaraCheckout(args.tamaraOrderId)
  if (!pending) {
    return { fulfilled: false, reason: 'missing_pending' }
  }

  // Auto-authorise when Approved; capture when possible (best-effort).
  const status = (args.statusHint || '').toLowerCase()
  if (status === 'approved' || status === 'new') {
    await authoriseTamaraOrder(args.tamaraOrderId)
  }
  if (status === 'authorised' || status === 'approved') {
    try {
      await captureTamaraOrder(args.tamaraOrderId, pending.orderTotal, pending.currency)
    } catch {
      /* auto-capture may already have run */
    }
  }

  const currency = pending.currency as SupportedCurrency
  const now = new Date().toISOString()
  const order: StoredOrder = {
    id: pending.orderRef,
    stripeSessionId: args.tamaraOrderId,
    paymentProvider: 'tamara',
    paymentIntentId: args.tamaraOrderId,
    tamaraOrderId: args.tamaraOrderId,
    customerEmail: pending.consumer.email || pending.customerEmail || '',
    customerName: `${pending.consumer.first_name} ${pending.consumer.last_name}`.trim(),
    customerPhone: pending.consumer.phone_number,
    shippingAddress: {
      line1: pending.shippingAddress.line1,
      city: pending.shippingAddress.city,
      country: pending.shippingAddress.country_code,
      phone: pending.shippingAddress.phone_number,
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
  await deletePendingTamaraCheckout(args.tamaraOrderId)

  await notifySlackNewPaidOrder(order, {
    clientIp: pending.clientIp,
    clientDeviceType: pending.clientContext?.deviceType,
    clientLocalTime: pending.clientContext?.localTime,
    clientTimezone: pending.clientContext?.timezone,
    paymentRef: args.tamaraOrderId,
    paymentMethod: 'Tamara · Pay in 4',
    attribution: {
      deviceLabel: pending.clientContext?.deviceLabel,
      deviceType: pending.clientContext?.deviceType,
      visitorCity: pending.clientContext?.city,
      visitorCountry: pending.clientContext?.country,
      trafficSource: pending.clientContext?.trafficSource,
      sessionSeconds: pending.clientContext?.sessionSeconds,
    },
  })

  await createTrelloCardForOrder(order)
  await dispatchOrderEmails(order)

  return { fulfilled: true, orderId: order.id }
}

export async function getTamaraOrderIfPaid(tamaraOrderId: string): Promise<StoredOrder | null> {
  const id = await findOrderIdBySession(tamaraOrderId)
  if (!id) return null
  return getOrderById(id)
}
