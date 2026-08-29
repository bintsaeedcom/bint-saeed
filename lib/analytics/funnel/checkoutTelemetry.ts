import { cartSubtotalInCurrency } from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'
import type { CheckoutCartItem, CheckoutClientContext, ParsedCheckoutRequest } from '@/lib/checkout/types'
import type { PaymentProvider } from '@/lib/analytics/funnel/types'

export type FunnelCheckoutTelemetry = {
  cartId?: string
  visitorId?: string
  cartFingerprint?: string
  internalTest?: boolean
  referrer?: string
  deviceLabel?: string
  deviceType?: string
  visitorCity?: string
  visitorCountry?: string
  cartValueAed?: number
  cartItems?: number
  items?: Array<{
    name?: string
    quantity?: number
    color?: string
    size?: string
    price?: number
    sku?: string
    productUrl?: string
  }>
}

export function funnelTelemetryFromParsedCheckout(parsed: ParsedCheckoutRequest): FunnelCheckoutTelemetry {
  const ctx = parsed.clientContext
  const itemCount = parsed.items.reduce((sum, item) => sum + item.quantity, 0)
  const cartValueAed = cartSubtotalInCurrency(parsed.items, 'AED' as SupportedCurrency)
  return {
    cartId: ctx.cartId,
    visitorId: ctx.visitorId,
    cartFingerprint: ctx.cartFingerprint,
    internalTest: ctx.internalTest,
    referrer: ctx.trafficSource,
    deviceLabel: ctx.deviceLabel,
    deviceType: ctx.deviceType,
    visitorCity: ctx.city,
    visitorCountry: ctx.country,
    cartValueAed,
    cartItems: itemCount,
    items: parsed.items.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      color: item.color,
      size: item.size,
      price: item.price,
      sku: item.sku,
      productUrl: item.productUrl,
    })),
  }
}

export function funnelMetadataFromTelemetry(
  telemetry: FunnelCheckoutTelemetry,
): Record<string, string> {
  const metadata: Record<string, string> = {}
  if (telemetry.cartId) metadata.funnelCartId = telemetry.cartId.slice(0, 80)
  if (telemetry.visitorId) metadata.funnelVisitorId = telemetry.visitorId.slice(0, 80)
  if (telemetry.cartFingerprint) metadata.funnelCartFingerprint = telemetry.cartFingerprint.slice(0, 200)
  if (telemetry.internalTest) metadata.funnelInternalTest = '1'
  if (telemetry.referrer) metadata.funnelReferrer = telemetry.referrer.slice(0, 500)
  if (telemetry.deviceLabel) metadata.funnelDeviceLabel = telemetry.deviceLabel.slice(0, 120)
  return metadata
}

export function funnelTelemetryFromMetadata(
  metadata?: Record<string, string | null | undefined> | null,
  items?: CheckoutCartItem[],
): FunnelCheckoutTelemetry {
  const cartId = metadata?.funnelCartId?.trim()
  const visitorId = metadata?.funnelVisitorId?.trim()
  const cartFingerprint = metadata?.funnelCartFingerprint?.trim()
  const internalTest = metadata?.funnelInternalTest === '1'
  const referrer = metadata?.funnelReferrer?.trim() || metadata?.clientTrafficSource?.trim()
  const deviceLabel = metadata?.funnelDeviceLabel?.trim() || metadata?.clientDeviceLabel?.trim()
  const deviceType = metadata?.clientDeviceType?.trim()
  const visitorCity = metadata?.clientCity?.trim()
  const visitorCountry = metadata?.clientCountry?.trim()

  let cartValueAed: number | undefined
  let cartItems: number | undefined
  let mappedItems: FunnelCheckoutTelemetry['items']
  if (items?.length) {
    cartItems = items.reduce((sum, item) => sum + item.quantity, 0)
    cartValueAed = cartSubtotalInCurrency(items, 'AED')
    mappedItems = items.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      color: item.color,
      size: item.size,
      price: item.price,
      sku: item.sku,
      productUrl: item.productUrl,
    }))
  }

  return {
    cartId: cartId || undefined,
    visitorId: visitorId || undefined,
    cartFingerprint: cartFingerprint || undefined,
    internalTest,
    referrer: referrer || undefined,
    deviceLabel: deviceLabel || undefined,
    deviceType: deviceType || undefined,
    visitorCity: visitorCity || undefined,
    visitorCountry: visitorCountry || undefined,
    cartValueAed,
    cartItems,
    items: mappedItems,
  }
}

export function funnelTelemetryFromClientContext(
  ctx: CheckoutClientContext | undefined,
  items: CheckoutCartItem[],
): FunnelCheckoutTelemetry {
  return funnelTelemetryFromParsedCheckout({
    items,
    currency: 'AED',
    discountCode: '',
    customerEmail: '',
    checkoutNotes: '',
    clientContext: ctx || {},
    clientIp: '',
  })
}

export type StoredFunnelPaymentContext = FunnelCheckoutTelemetry & {
  paymentProvider: PaymentProvider
  paymentSessionRef: string
  savedAt: string
}
