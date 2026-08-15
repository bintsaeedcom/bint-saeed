'use client'

/**
 * Shared PDP analytics helpers — consent-gated via `trackEvent` only.
 * Do not initialize GA4/GTM here (see lib/analytics/tracking.ts + gtm.ts).
 *
 * Env note: if GA4 already fires from GTM, leave NEXT_PUBLIC_GA4_MEASUREMENT_ID
 * empty to avoid double counting (.env.example).
 */

import {
  getSessionSeconds,
  readFirstTouchAttribution,
} from '@/lib/analytics/attributionStorage'
import { formatTrafficSource } from '@/lib/analytics/checkoutAttribution'
import { trackEvent, type AnalyticsParams } from '@/lib/analytics/tracking'

export type PdpAnalyticsSurface = 'shop' | 'accessories'

export type PdpEventContextInput = {
  productId: string
  productName: string
  category: string
  /** Display currency code (e.g. AED, USD) after conversion. */
  currency: string
  /** Unit price in display currency. */
  price: number
  color?: string
  size?: string
  quantity?: number
  /** Exact sellable IDs from the Meta catalogue feed. */
  metaContentIds?: string[]
  surface: PdpAnalyticsSurface
  pagePath?: string
}

export type PdpAtcErrorCode =
  | 'size_required'
  | 'colour_required'
  | 'personalisation_required'
  | 'unknown'

const VIEW_ITEM_KEYS = new Set<string>()
let activePdpContext: AnalyticsParams | null = null

export function setActivePdpAnalyticsContext(params: AnalyticsParams | null) {
  activePdpContext = params
}

export function getActivePdpAnalyticsContext(): AnalyticsParams | null {
  return activePdpContext
}

function detectDeviceType(): 'mobile' | 'tablet' | 'desktop' | 'unknown' {
  if (typeof navigator === 'undefined') return 'unknown'
  const ua = navigator.userAgent
  if (/iPad|Tablet/i.test(ua)) return 'tablet'
  if (/Mobi|Android/i.test(ua)) return 'mobile'
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return 'mobile'
  }
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 1024px)').matches) {
    return 'tablet'
  }
  return 'desktop'
}

function currentPagePath(fallback?: string): string {
  if (typeof window !== 'undefined') return window.location.pathname
  return fallback || '/'
}

/** Stable scalar context for every PDP event — no PII. */
export function buildPdpEventContext(input: PdpEventContextInput): AnalyticsParams {
  const firstTouch = readFirstTouchAttribution()
  const pagePath = currentPagePath(input.pagePath)
  const variant =
    input.size && input.color
      ? `${input.size}-${input.color}`
      : input.size || input.color || undefined

  return {
    product_id: input.productId,
    product_name: input.productName,
    item_id: input.productId,
    item_name: input.productName,
    category: input.category,
    item_category: input.category,
    variant: variant || undefined,
    item_variant: variant || undefined,
    color: input.color || undefined,
    selected_size: input.size || undefined,
    price: input.price,
    currency: input.currency,
    quantity: input.quantity ?? 1,
    meta_content_ids: input.metaContentIds?.length ? input.metaContentIds : undefined,
    page_path: pagePath,
    pdp_surface: input.surface,
    device_type: detectDeviceType(),
    traffic_source: formatTrafficSource(firstTouch),
    utm_source: firstTouch?.utmSource,
    utm_medium: firstTouch?.utmMedium,
    utm_campaign: firstTouch?.utmCampaign,
    session_seconds: getSessionSeconds() || undefined,
  }
}

export function buildGa4Item(input: {
  productId: string
  productName: string
  category: string
  price: number
  quantity?: number
  variant?: string
}): Record<string, string | number | boolean | null | undefined> {
  return {
    item_id: input.productId,
    item_name: input.productName,
    item_category: input.category,
    price: input.price,
    quantity: input.quantity ?? 1,
    item_variant: input.variant,
  }
}

export function trackPdpEvent(name: string, base: AnalyticsParams, extra?: AnalyticsParams) {
  trackEvent(name, { ...base, ...extra })
}

/** Official ecommerce view_item — once per product+path per browser session tab. */
export function trackPdpViewItem(base: AnalyticsParams) {
  const productId = String(base.product_id || base.item_id || '')
  const pagePath = String(base.page_path || '')
  if (!productId) return
  const key = `${productId}:${pagePath}`
  if (VIEW_ITEM_KEYS.has(key)) return
  VIEW_ITEM_KEYS.add(key)

  const price = typeof base.price === 'number' ? base.price : 0
  const quantity = typeof base.quantity === 'number' ? base.quantity : 1
  const currency = typeof base.currency === 'string' ? base.currency : 'AED'

  trackEvent('view_item', {
    ...base,
    currency,
    value: price * quantity,
    items: [
      buildGa4Item({
        productId,
        productName: String(base.product_name || base.item_name || ''),
        category: String(base.category || base.item_category || ''),
        price,
        quantity,
        variant: typeof base.variant === 'string' ? base.variant : undefined,
      }),
    ],
  })
}

export function trackPdpAddToCartEcommerce(
  base: AnalyticsParams,
  opts: { quantity: number; source: 'primary' | 'sticky' },
) {
  const productId = String(base.product_id || base.item_id || '')
  const price = typeof base.price === 'number' ? base.price : 0
  const currency = typeof base.currency === 'string' ? base.currency : 'AED'
  const quantity = opts.quantity

  trackEvent('add_to_cart', {
    ...base,
    currency,
    value: price * quantity,
    quantity,
    atc_source: opts.source,
    items: [
      buildGa4Item({
        productId,
        productName: String(base.product_name || base.item_name || ''),
        category: String(base.category || base.item_category || ''),
        price,
        quantity,
        variant: typeof base.variant === 'string' ? base.variant : undefined,
      }),
    ],
  })
}

export function engagementBucket(ms: number): 'short' | 'medium' | 'deep' {
  if (ms < 15_000) return 'short'
  if (ms < 60_000) return 'medium'
  return 'deep'
}

export const PDP_SCROLL_MILESTONES = [25, 50, 75, 90] as const
export type PdpScrollMilestone = (typeof PDP_SCROLL_MILESTONES)[number]

export function scrollEventName(milestone: PdpScrollMilestone): string {
  return `pdp_scroll_${milestone}`
}

/** Map accordion section ids → requested PDP open events (no UI split). */
export function trackPdpAccordionOpen(base: AnalyticsParams, sectionId: string) {
  const id = sectionId.toLowerCase()

  if (id === 'size' || id === 'size-guide' || id === 'size_guide') {
    trackPdpEvent('size_guide_open', base, { section_id: sectionId })
    return
  }

  if (
    id === 'description' ||
    id === 'product-details' ||
    id === 'product_details' ||
    id === 'materials' ||
    id === 'care' ||
    id === 'faq'
  ) {
    trackPdpEvent('product_details_open', base, { section_id: sectionId })
    return
  }

  if (
    id === 'intro' ||
    id === 'brandstory' ||
    id === 'brand-story' ||
    id === 'stone-origin' ||
    id === 'natural-stone' ||
    id === 'heritage'
  ) {
    trackPdpEvent('heritage_section_open', base, { section_id: sectionId })
    return
  }

  if (id === 'shipping' || id === 'shipping-returns' || id === 'returns') {
    // Combined shipping & returns accordion — emit both without splitting UI.
    trackPdpEvent('shipping_info_open', base, { section_id: sectionId })
    trackPdpEvent('returns_info_open', base, { section_id: sectionId })
  }
}
