import type { CheckoutClientContext, CheckoutCartItem } from '@/lib/checkout/types'
import {
  funnelMetadataFromTelemetry,
  funnelTelemetryFromClientContext,
} from '@/lib/analytics/funnel/checkoutTelemetry'

export function buildCheckoutAttributionMetadata(
  ctx: CheckoutClientContext,
  items?: CheckoutCartItem[],
): Record<string, string> {
  const metadata: Record<string, string> = {}

  if (ctx.city) metadata.clientCity = ctx.city.slice(0, 120)
  if (ctx.country) metadata.clientCountry = ctx.country.slice(0, 64)
  if (ctx.trafficSource) metadata.clientTrafficSource = ctx.trafficSource.slice(0, 500)
  if (typeof ctx.sessionSeconds === 'number' && ctx.sessionSeconds > 0) {
    metadata.clientSessionSeconds = String(Math.min(Math.round(ctx.sessionSeconds), 999_999))
  }
  if (ctx.deviceLabel) metadata.clientDeviceLabel = ctx.deviceLabel.slice(0, 120)
  if (ctx.deviceType) metadata.clientDeviceType = ctx.deviceType.slice(0, 24)

  if (items?.length) {
    Object.assign(metadata, funnelMetadataFromTelemetry(funnelTelemetryFromClientContext(ctx, items)))
  } else if (ctx.cartId || ctx.visitorId || ctx.cartFingerprint || ctx.internalTest) {
    Object.assign(
      metadata,
      funnelMetadataFromTelemetry({
        cartId: ctx.cartId,
        visitorId: ctx.visitorId,
        cartFingerprint: ctx.cartFingerprint,
        internalTest: ctx.internalTest,
        referrer: ctx.trafficSource,
        deviceLabel: ctx.deviceLabel,
        deviceType: ctx.deviceType,
        visitorCity: ctx.city,
        visitorCountry: ctx.country,
      }),
    )
  }

  return metadata
}

export type OrderAttributionContext = {
  deviceLabel?: string
  deviceType?: string
  visitorCity?: string
  visitorCountry?: string
  trafficSource?: string
  sessionSeconds?: number
}

export function orderAttributionFromMetadata(
  metadata?: Record<string, string | null | undefined> | null,
  fallback?: Partial<OrderAttributionContext>,
): OrderAttributionContext {
  const sessionRaw = metadata?.clientSessionSeconds
  const sessionSeconds = sessionRaw ? Number(sessionRaw) : undefined

  return {
    deviceLabel: metadata?.clientDeviceLabel || fallback?.deviceLabel,
    deviceType: metadata?.clientDeviceType || fallback?.deviceType,
    visitorCity: metadata?.clientCity || fallback?.visitorCity,
    visitorCountry: metadata?.clientCountry || fallback?.visitorCountry,
    trafficSource: metadata?.clientTrafficSource || fallback?.trafficSource,
    sessionSeconds:
      typeof sessionSeconds === 'number' && Number.isFinite(sessionSeconds) && sessionSeconds > 0
        ? sessionSeconds
        : fallback?.sessionSeconds,
  }
}
