import { cartSubtotalInCurrency, lineUnitInCurrency } from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'
import { resolveLineItemSku } from '@/lib/checkout/resolveLineItemSku'
import type { CheckoutCartItem } from '@/lib/checkout/types'
import type { OrderLine, StoredOrder } from '@/lib/orders/types'
import type { PendingPayPalCheckout } from '@/lib/paypal/pendingCheckoutStore'
import type { PayPalCaptureResult } from '@/lib/paypal/client'

function buildLineDescription(item: CheckoutCartItem): string {
  const bits: string[] = []
  if (item.size) bits.push(`Size: ${item.size}`)
  if (item.color) bits.push(`Color: ${item.color}`)
  if (item.lengthCm != null && String(item.lengthCm).length > 0) bits.push(`Length: ${item.lengthCm} cm`)
  else if (item.customLength) bits.push(`Length: ${item.customLength}`)
  if (item.customisationMessage) bits.push(`Personalisation: ${item.customisationMessage}`)
  if (item.notes) bits.push(`Notes: ${item.notes}`)
  return bits.join(', ')
}

function buildOrderLinesFromPendingCheckout(
  pending: PendingPayPalCheckout,
  currency: SupportedCurrency,
): OrderLine[] {
  return pending.items.map((item) => {
    const unitAmount = lineUnitInCurrency(
      {
        id: item.id,
        price: item.price,
        customisationMessage: item.customisationMessage,
        customisationSurcharge: item.customisationSurcharge,
      },
      currency,
    )
    return {
      productId: item.id,
      name: item.name,
      description: buildLineDescription(item),
      quantity: item.quantity,
      unitPrice: unitAmount,
      currency,
    }
  })
}

export function buildOrderFromPayPalCapture(
  capture: PayPalCaptureResult,
  pending: PendingPayPalCheckout,
): StoredOrder {
  const now = new Date().toISOString()
  const currency = (capture.currency || pending.currency || 'AED').toUpperCase() as SupportedCurrency
  const amountTotal = Number(capture.amountValue) || cartSubtotalInCurrency(pending.items, currency)
  const amountSubtotal = cartSubtotalInCurrency(pending.items, currency)
  const lines = buildOrderLinesFromPendingCheckout(pending, currency)
  const customerEmail = capture.payerEmail?.trim() || pending.customerEmail?.trim() || ''

  return {
    id: `ORD-${capture.captureId.replace(/^[^A-Za-z0-9]+/, '').slice(0, 18)}`,
    paymentProvider: 'paypal',
    stripeSessionId: capture.orderId,
    paypalOrderId: capture.orderId,
    paypalCaptureId: capture.captureId,
    customerEmail,
    customerName: capture.payerName,
    lines,
    amountSubtotal,
    amountShipping: Math.max(0, amountTotal - amountSubtotal),
    amountTotal,
    currency,
    fulfillmentStatus: 'paid',
    deliveryNotes: pending.checkoutNotes || undefined,
    discountCode: pending.discountCode || undefined,
    createdAt: now,
    updatedAt: now,
  }
}

export function serializePayPalOrderItems(items: CheckoutCartItem[]) {
  return JSON.stringify(
    items.map((item) => ({
      id: item.id,
      productUrl: item.productUrl,
      name: item.name,
      size: item.size,
      color: item.color,
      quantity: item.quantity,
      priceAed: item.price,
      customLength: item.customLength,
      lengthCm: item.lengthCm,
      notes: item.notes,
      customisationMessage: item.customisationMessage,
      customisationSurcharge: item.customisationSurcharge,
      sku:
        item.sku ||
        resolveLineItemSku(item.id, item.color ?? '') ||
        undefined,
    })),
  )
}
