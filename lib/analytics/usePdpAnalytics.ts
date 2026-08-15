'use client'

import { useCallback, useEffect, useMemo, useRef } from 'react'
import {
  buildPdpEventContext,
  engagementBucket,
  PDP_SCROLL_MILESTONES,
  scrollEventName,
  setActivePdpAnalyticsContext,
  trackPdpAccordionOpen,
  trackPdpAddToCartEcommerce,
  trackPdpEvent,
  trackPdpViewItem,
  type PdpAnalyticsSurface,
  type PdpAtcErrorCode,
  type PdpScrollMilestone,
} from '@/lib/analytics/pdpAnalytics'
import type { AnalyticsParams } from '@/lib/analytics/tracking'

export type UsePdpAnalyticsArgs = {
  productId: string
  productName: string
  category: string
  currency: string
  /** Unit price in display currency. */
  price: number
  color?: string
  size?: string
  quantity?: number
  surface: PdpAnalyticsSurface
  /** When false, skip view_item / scroll / engagement (e.g. product not found). */
  enabled?: boolean
}

export type PdpAnalyticsApi = {
  context: AnalyticsParams
  trackGalleryChange: (imageIndex: number, interactionType?: string) => void
  trackImageClick: (imageIndex: number) => void
  trackImageZoom: (zoomed: boolean, imageIndex?: number) => void
  trackSizeSelectorOpen: () => void
  trackSizeSelected: (size: string) => void
  trackSizeGuideOpen: (source?: string) => void
  trackAccordionOpen: (sectionId: string) => void
  trackPersonalizationClick: (action?: string) => void
  trackInstallmentClick: (provider: 'tabby' | 'tamara' | string) => void
  trackWhatsAppClick: (source?: string) => void
  trackRelatedProductClick: (relatedId: string, relatedName?: string) => void
  trackAtcAttempt: (source: 'primary' | 'sticky') => void
  trackAtcSuccess: (source: 'primary' | 'sticky', quantity: number) => void
  trackAtcError: (source: 'primary' | 'sticky', errorCode: PdpAtcErrorCode) => void
}

function readScrollPercent(): number {
  if (typeof window === 'undefined') return 0
  const doc = document.documentElement
  const scrollTop = window.scrollY || doc.scrollTop || 0
  const height = doc.scrollHeight - window.innerHeight
  if (height <= 0) return 100
  return Math.min(100, Math.round((scrollTop / height) * 100))
}

/**
 * SPA-safe PDP analytics: once-per-visit scroll milestones, engagement duration,
 * and interaction helpers. Resets when productId / path identity changes.
 */
export function usePdpAnalytics(args: UsePdpAnalyticsArgs): PdpAnalyticsApi {
  const enabled = args.enabled !== false
  const productKey = `${args.surface}:${args.productId}`

  const context = useMemo(
    () =>
      buildPdpEventContext({
        productId: args.productId,
        productName: args.productName,
        category: args.category,
        currency: args.currency,
        price: args.price,
        color: args.color,
        size: args.size,
        quantity: args.quantity,
        surface: args.surface,
      }),
    [
      args.productId,
      args.productName,
      args.category,
      args.currency,
      args.price,
      args.color,
      args.size,
      args.quantity,
      args.surface,
    ],
  )

  const contextRef = useRef(context)
  contextRef.current = context

  const scrollFiredRef = useRef<Set<PdpScrollMilestone>>(new Set())
  const sizeSelectorOpenedRef = useRef(false)
  const engagementEmittedRef = useRef(false)
  const startedAtRef = useRef(0)
  const visitKeyRef = useRef('')

  const emitEngagement = useCallback(() => {
    if (!enabled || engagementEmittedRef.current) return
    if (!startedAtRef.current) return
    engagementEmittedRef.current = true
    const ms = Math.max(0, Date.now() - startedAtRef.current)
    trackPdpEvent('pdp_engagement', contextRef.current, {
      engagement_ms: ms,
      engagement_bucket: engagementBucket(ms),
    })
  }, [enabled])

  // Reset + view_item + scroll + engagement lifecycle per product visit.
  useEffect(() => {
    if (!enabled || !args.productId) return

    const visitKey = `${productKey}:${typeof window !== 'undefined' ? window.location.pathname : ''}`
    if (visitKeyRef.current && visitKeyRef.current !== visitKey) {
      emitEngagement()
    }
    visitKeyRef.current = visitKey

    scrollFiredRef.current = new Set()
    sizeSelectorOpenedRef.current = false
    engagementEmittedRef.current = false
    startedAtRef.current = Date.now()

    setActivePdpAnalyticsContext(contextRef.current)
    trackPdpViewItem(contextRef.current)

    const onScroll = () => {
      const percent = readScrollPercent()
      for (const milestone of PDP_SCROLL_MILESTONES) {
        if (percent < milestone) continue
        if (scrollFiredRef.current.has(milestone)) continue
        scrollFiredRef.current.add(milestone)
        trackPdpEvent(scrollEventName(milestone), contextRef.current, {
          scroll_depth: milestone,
        })
      }
    }

    const onPageHide = () => emitEngagement()

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pagehide', onPageHide)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pagehide', onPageHide)
      emitEngagement()
      setActivePdpAnalyticsContext(null)
    }
    // Keyed on product identity so SPA product switches reset scroll/engagement.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, productKey, emitEngagement])

  // Keep active context in sync when color/size changes mid-visit (no new view_item).
  useEffect(() => {
    if (!enabled) return
    setActivePdpAnalyticsContext(context)
  }, [enabled, context])

  const trackGalleryChange = useCallback((imageIndex: number, interactionType = 'slide_change') => {
    trackPdpEvent('product_gallery_change', contextRef.current, {
      image_index: imageIndex,
      interaction_type: interactionType,
    })
  }, [])

  const trackImageClick = useCallback((imageIndex: number) => {
    trackPdpEvent('product_image_click', contextRef.current, {
      image_index: imageIndex,
    })
  }, [])

  const trackImageZoom = useCallback((zoomed: boolean, imageIndex?: number) => {
    trackPdpEvent('product_image_zoom', contextRef.current, {
      zoomed,
      image_index: imageIndex,
    })
  }, [])

  const trackSizeSelectorOpen = useCallback(() => {
    if (sizeSelectorOpenedRef.current) return
    sizeSelectorOpenedRef.current = true
    trackPdpEvent('size_selector_open', contextRef.current)
  }, [])

  const trackSizeSelected = useCallback((size: string) => {
    trackPdpEvent('size_selected', contextRef.current, {
      selected_size: size,
    })
  }, [])

  const trackSizeGuideOpen = useCallback((source = 'button') => {
    trackPdpEvent('size_guide_open', contextRef.current, { source })
  }, [])

  const trackAccordionOpen = useCallback((sectionId: string) => {
    trackPdpAccordionOpen(contextRef.current, sectionId)
  }, [])

  const trackPersonalizationClick = useCallback((action = 'enable') => {
    trackPdpEvent('personalization_click', contextRef.current, { action })
  }, [])

  const trackInstallmentClick = useCallback((provider: string) => {
    trackPdpEvent('installment_info_click', contextRef.current, { provider })
  }, [])

  const trackWhatsAppClick = useCallback((source = 'pdp') => {
    trackPdpEvent('whatsapp_click', contextRef.current, { source })
  }, [])

  const trackRelatedProductClick = useCallback((relatedId: string, relatedName?: string) => {
    trackPdpEvent('related_product_click', contextRef.current, {
      related_product_id: relatedId,
      related_product_name: relatedName,
    })
  }, [])

  const trackAtcAttempt = useCallback((source: 'primary' | 'sticky') => {
    trackPdpEvent('add_to_cart_attempt', contextRef.current, { atc_source: source })
  }, [])

  const trackAtcSuccess = useCallback((source: 'primary' | 'sticky', quantity: number) => {
    trackPdpEvent('add_to_cart_success', contextRef.current, {
      atc_source: source,
      quantity,
    })
    trackPdpAddToCartEcommerce(contextRef.current, { quantity, source })
  }, [])

  const trackAtcError = useCallback((source: 'primary' | 'sticky', errorCode: PdpAtcErrorCode) => {
    trackPdpEvent('add_to_cart_error', contextRef.current, {
      atc_source: source,
      error_code: errorCode,
    })
  }, [])

  return {
    context,
    trackGalleryChange,
    trackImageClick,
    trackImageZoom,
    trackSizeSelectorOpen,
    trackSizeSelected,
    trackSizeGuideOpen,
    trackAccordionOpen,
    trackPersonalizationClick,
    trackInstallmentClick,
    trackWhatsAppClick,
    trackRelatedProductClick,
    trackAtcAttempt,
    trackAtcSuccess,
    trackAtcError,
  }
}
