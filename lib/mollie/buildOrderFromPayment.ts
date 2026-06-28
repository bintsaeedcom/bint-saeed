import { cartSubtotalInCurrency, lineUnitInCurrency } from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'
import { products as staticProducts } from '@/data/products'
import { resolveSkuByProductId } from '@/lib/products/sku'
import { toMollieAmountValue } from '@/lib/mollie/amount'
import type { CheckoutCartItem } from '@/lib/checkout/types'
import type { OrderLine } from '@/lib/orders/types'
import type { PendingMollieCheckout } from '@/lib/mollie/pendingCheckoutStore'

type MolliePaymentLike = {
  id: string
  amount?: { value?: string; currency?: string }
  description?: string | null
  metadata?: Record<string, string | undefined | null> | unknown | null
  billingAddress?: {
    givenName?: string | null
    familyName?: string | null
    email?: string | null
    streetAndNumber?: string | null
    streetAdditional?: string | null
    postalCode?: string | null
    city?: string | null
    region?: string | null
    country?: string | null
  } | null
  shippingAddress?: {
    givenName?: string | null
    familyName?: string | null
    email?: string | null
    streetAndNumber?: string | null
    streetAdditional?: string | null
    postalCode?: string | null
    city?: string | null
    region?: string | null
    country?: string | null
  } | null
}

function formatAddress(
  address: NonNullable<MolliePaymentLike['billingAddress']>,
  name?: string,
): Record<string, unknown> {
  return {
    name,
    line1: address.streetAndNumber ?? undefined,
    line2: address.streetAdditional ?? undefined,
    city: address.city ?? undefined,
    state: address.region ?? undefined,
    postal_code: address.postalCode ?? undefined,
    country: address.country ?? undefined,
  }
}

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

export function buildMolliePaymentLines(items: CheckoutCartItem[], currency: SupportedCurrency) {
  return items.map((item) => {
    const unitAmount = lineUnitInCurrency(
      {
        id: item.id,
        price: item.price,
        customisationMessage: item.customisationMessage,
        customisationSurcharge: item.customisationSurcharge,
      },
      currency,
    )
    const quantity = item.quantity
    const totalAmount = unitAmount * quantity
    const sku =
      item.sku || resolveSkuByProductId(item.id, staticProducts, item.color ?? '') || undefined

    return {
      type: 'physical' as const,
      name: item.name.slice(0, 120),
      description: buildLineDescription(item) || item.name.slice(0, 120),
      quantity,
      unitPrice: {
        currency,
        value: toMollieAmountValue(unitAmount, currency),
      },
      totalAmount: {
        currency,
        value: toMollieAmountValue(totalAmount, currency),
      },
      ...(sku ? { sku: sku.slice(0, 50) } : {}),
      metadata: {
        productId: item.id,
        size: item.size ?? '',
        color: item.color ?? '',
      },
    }
  })
}

export function buildOrderLinesFromPendingCheckout(
  pending: PendingMollieCheckout,
  currency: SupportedCurrency,
): OrderLine[] {
  return pending.items.map((item) => {
    const unitPrice = lineUnitInCurrency(
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
      description: buildLineDescription(item) || undefined,
      quantity: item.quantity,
      unitPrice,
      currency,
    }
  })
}

export function buildOrderFromMolliePayment(
  payment: MolliePaymentLike,
  pending: PendingMollieCheckout,
): import('@/lib/orders/types').StoredOrder {
  const now = new Date().toISOString()
  const currency = (payment.amount?.currency || pending.currency || 'AED').toUpperCase() as SupportedCurrency
  const amountTotal = Number(payment.amount?.value ?? '0') || cartSubtotalInCurrency(pending.items, currency)
  const lines = buildOrderLinesFromPendingCheckout(pending, currency)
  const amountSubtotal = cartSubtotalInCurrency(pending.items, currency)

  const billing = payment.billingAddress
  const shipping = payment.shippingAddress
  const customerName = [billing?.givenName, billing?.familyName].filter(Boolean).join(' ').trim() || undefined
  const metadata =
    payment.metadata && typeof payment.metadata === 'object'
      ? (payment.metadata as Record<string, string | undefined | null>)
      : undefined
  const customerEmail =
    billing?.email?.trim() ||
    shipping?.email?.trim() ||
    pending.customerEmail?.trim() ||
    metadata?.customerEmail?.trim() ||
    ''

  return {
    id: `ORD-${payment.id.replace(/^tr_/, '').slice(0, 18)}`,
    paymentProvider: 'mollie',
    stripeSessionId: payment.id,
    molliePaymentId: payment.id,
    customerEmail,
    customerName,
    shippingAddress: shipping ? formatAddress(shipping, customerName) : undefined,
    billingAddress: billing ? formatAddress(billing, customerName) : undefined,
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

export function serializeMollieOrderItems(items: CheckoutCartItem[]) {
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
        item.sku || resolveSkuByProductId(item.id, staticProducts, item.color ?? '') || undefined,
    })),
  )
}
