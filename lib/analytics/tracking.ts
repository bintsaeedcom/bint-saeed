'use client'

import { ConsentState } from '@/lib/analytics/consent'
import { mirrorDashboardEngagement } from '@/lib/analytics/dashboardEngagement'
import { isGtmConfigured } from '@/lib/analytics/gtm'
import { isAdminBrowserPath, isStaffOpticsActive } from '@/lib/analytics/staffOptics'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    clarity?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    _fbq?: (...args: unknown[]) => void
    snaptr?: (...args: unknown[]) => void
    posthog?: {
      init: (key: string, config?: Record<string, unknown>) => void
      capture: (event: string, properties?: Record<string, unknown>) => void
      opt_out_capturing: () => void
      opt_in_capturing: () => void
      set_config?: (config: Record<string, unknown>) => void
      __loaded?: boolean
    }
  }
}

export type AnalyticsParamValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | string[]
  | Array<Record<string, string | number | boolean | null | undefined>>

export type AnalyticsParams = Record<string, AnalyticsParamValue>

const state = {
  gaReady: false,
  clarityReady: false,
  posthogReady: false,
  metaPixelReady: false,
  snapPixelReady: false,
  trackerInitComplete: false,
  trackerInitScheduled: false,
  marketingInitScheduled: false,
  consent: { analytics: false, marketing: false } as ConsentState,
  scrollMilestonesByPath: new Map<string, Set<number>>(),
  /** Last page path seen before analytics consent — flushed on Accept. */
  pendingPagePath: null as string | null,
}

function loadScript(id: string, src: string) {
  if (typeof document === 'undefined') return
  if (document.getElementById(id)) return
  const script = document.createElement('script')
  script.id = id
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

function toCleanParams(params?: AnalyticsParams) {
  if (!params) return undefined
  return Object.fromEntries(Object.entries(params).filter(([, v]) => v !== undefined))
}

function ensureGtagStub() {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  if (window.gtag) return
  // Official stub pushes `arguments` (not a rest-array). Array pushes break Consent Mode.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments as unknown as never)
  }
}

function pushGtagConsentUpdate() {
  if (typeof window === 'undefined') return
  ensureGtagStub()
  if (!window.gtag) return
  window.gtag('consent', 'update', {
    analytics_storage: state.consent.analytics ? 'granted' : 'denied',
    ad_storage: state.consent.marketing ? 'granted' : 'denied',
    ad_user_data: state.consent.marketing ? 'granted' : 'denied',
    ad_personalization: state.consent.marketing ? 'granted' : 'denied',
  })
}

function initGa4() {
  if (typeof window === 'undefined' || state.gaReady) return
  const id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim()
  if (!id) return

  ensureGtagStub()

  // When GTM boots in <head>, Consent Mode default is already set there.
  // Only set default here when GA4 loads without GTM.
  if (!isGtmConfigured()) {
    window.gtag!('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      wait_for_update: 500,
    })
  }

  loadScript('bs-ga4-script', `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`)
  window.gtag!('js', new Date())
  window.gtag!('config', id, {
    anonymize_ip: true,
    send_page_view: false,
  })

  // We only init after analytics opt-in — grant storage immediately so Realtime hits fire.
  if (state.consent.analytics) {
    pushGtagConsentUpdate()
  }

  state.gaReady = true
}

function sendGa4PageView(path: string, params?: AnalyticsParams) {
  if (!state.gaReady || !window.gtag) return
  const id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim()
  if (!id) return
  const pagePath = path.startsWith('/') ? path : `/${path}`
  const pageLocation =
    typeof window !== 'undefined' ? `${window.location.origin}${pagePath}` : pagePath
  const pageTitle = typeof document !== 'undefined' ? document.title : undefined
  const cleanParams = toCleanParams(params)

  // SPA page views: update config path, then send the standard page_view event.
  window.gtag('config', id, {
    page_path: pagePath,
    page_location: pageLocation,
    page_title: pageTitle,
    send_page_view: false,
  })
  window.gtag('event', 'page_view', {
    page_path: pagePath,
    page_location: pageLocation,
    page_title: pageTitle,
    ...cleanParams,
  })
}

function applyClarityConsent(granted: boolean) {
  if (typeof window === 'undefined' || !window.clarity) return
  const storage = granted ? 'granted' : 'denied'
  // Consent V2 is required when Clarity Consent Mode is on (and for EEA/UK/CH).
  window.clarity('consentv2', {
    ad_Storage: storage,
    analytics_Storage: storage,
  })
  // Legacy fallback while older projects still accept the boolean API.
  window.clarity('consent', granted)
}

function initClarity() {
  if (typeof window === 'undefined' || state.clarityReady) return
  if (isStaffOpticsActive() || isAdminBrowserPath()) return
  const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim()
  if (!projectId) return
  ;(function init(c: Window, l: Document, a: string, r: string, i: string, t?: HTMLScriptElement) {
    if ((c as any)[a]) return
    ;(c as any)[a] = function (...args: unknown[]) { ((c as any)[a].q = (c as any)[a].q || []).push(args) }
    t = l.createElement(r) as HTMLScriptElement
    t.async = true
    t.id = 'bs-clarity-script'
    t.src = `https://www.clarity.ms/tag/${i}`
    const firstScript = l.getElementsByTagName(r)[0] as HTMLScriptElement | undefined
    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(t, firstScript)
    } else {
      l.head.appendChild(t)
    }
  })(window, document, 'clarity', 'script', projectId)
  state.clarityReady = true
}

function initPosthog() {
  if (typeof window === 'undefined' || state.posthogReady) return
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY?.trim()
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST?.trim()
  if (!key || !host) return

  if (!window.posthog?.__loaded) {
    ;((d, p) => {
      const script = d.createElement('script')
      script.async = true
      script.id = 'bs-posthog-script'
      script.src = `${p.replace(/\/$/, '')}/static/array.js`
      const first = d.getElementsByTagName('script')[0]
      first.parentNode?.insertBefore(script, first)
    })(document, host)
    ;(window as any).posthog = (window as any).posthog || []
    ;(window as any).posthog.__loaded = true
  }

  const tryInit = () => {
    if (!window.posthog?.init) return false
    window.posthog.init(key, {
      api_host: host,
      autocapture: true,
      capture_pageview: false,
      mask_all_text: true,
      mask_all_element_attributes: true,
      disable_session_recording: true,
      persistence: 'localStorage+cookie',
    })
    return true
  }

  if (!tryInit()) {
    window.setTimeout(() => {
      tryInit()
    }, 800)
  }
  state.posthogReady = true
}

/** Meta Pixel — loads only after marketing consent (catalog ads / Instagram Shopping). */
function initMetaPixel() {
  if (typeof window === 'undefined' || state.metaPixelReady) return
  if (isStaffOpticsActive() || isAdminBrowserPath()) return
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim()
  if (!pixelId) return
  if (!state.consent.marketing) return

  if (!window.fbq) {
    const n: any = function (...args: unknown[]) {
      // eslint-disable-next-line prefer-rest-params
      ;(n.callMethod ? n.callMethod(...args) : n.queue.push(args))
    }
    n.queue = []
    n.loaded = true
    n.version = '2.0'
    n.push = n
    window.fbq = n
    window._fbq = n
    loadScript('bs-meta-pixel', 'https://connect.facebook.net/en_US/fbevents.js')
  }

  window.fbq!('init', pixelId)
  state.metaPixelReady = true
  // Initial PageView (SPA navigations use trackEvent('page_view') with the same dedupe pattern).
  metaPixelFromSiteEvent('page_view')
}

/** Snap Pixel — loads only after marketing consent. No placeholder email in init. */
function initSnapPixel() {
  if (typeof window === 'undefined' || state.snapPixelReady) return
  if (isStaffOpticsActive() || isAdminBrowserPath()) return
  const pixelId = process.env.NEXT_PUBLIC_SNAP_PIXEL_ID?.trim()
  if (!pixelId) return
  if (!state.consent.marketing) return

  captureSnapClickIdFromUrl()

  if (!window.snaptr) {
    const a: any = function (...args: unknown[]) {
      // eslint-disable-next-line prefer-rest-params
      ;(a.handleRequest ? a.handleRequest(...args) : a.queue.push(args))
    }
    a.queue = []
    window.snaptr = a
    loadScript('bs-snap-pixel', 'https://sc-static.net/scevent.min.js')
  }

  window.snaptr!('init', pixelId)
  state.snapPixelReady = true
  snapPixelFromSiteEvent('page_view')
}

function marketingPixelsConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() || process.env.NEXT_PUBLIC_SNAP_PIXEL_ID?.trim(),
  )
}

function marketingPixelsReady() {
  const metaId = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim()
  const snapId = process.env.NEXT_PUBLIC_SNAP_PIXEL_ID?.trim()
  const metaOk = !metaId || state.metaPixelReady
  const snapOk = !snapId || state.snapPixelReady
  return metaOk && snapOk
}

function scheduleMarketingInit() {
  if (typeof window === 'undefined' || !state.consent.marketing) return
  if (!marketingPixelsConfigured() || marketingPixelsReady() || state.marketingInitScheduled) return
  if (isStaffOpticsActive() || isAdminBrowserPath()) return

  state.marketingInitScheduled = true
  const run = () => {
    state.marketingInitScheduled = false
    if (!state.consent.marketing || marketingPixelsReady()) return
    initMetaPixel()
    initSnapPixel()
  }

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(run, { timeout: 2_000 })
  } else {
    globalThis.setTimeout(run, 800)
  }
}

function extractCommerceFields(params?: AnalyticsParams) {
  const value =
    typeof params?.value === 'number'
      ? params.value
      : typeof params?.value === 'string'
        ? Number(params.value)
        : typeof params?.price === 'number'
          ? params.price
          : undefined
  const currency = typeof params?.currency === 'string' ? params.currency : undefined
  const itemCategory =
    typeof params?.item_category === 'string' ? params.item_category : undefined
  const orderId =
    typeof params?.transaction_id === 'string' ? params.transaction_id : undefined

  let itemIds: string[] | undefined
  if (typeof params?.item_id === 'string') {
    itemIds = [params.item_id]
  } else if (Array.isArray(params?.items)) {
    const ids = params.items
      .map((row) => {
        if (!row || typeof row !== 'object') return null
        const id = row.item_id ?? row.id
        return typeof id === 'string' ? id : null
      })
      .filter((id): id is string => Boolean(id))
    if (ids.length) itemIds = ids
  }

  const numberItems =
    typeof params?.quantity === 'number'
      ? params.quantity
      : typeof params?.number_items === 'number'
        ? params.number_items
        : itemIds?.length

  return {
    value: Number.isFinite(value) ? value : undefined,
    currency,
    itemIds,
    itemCategory,
    orderId,
    numberItems: typeof numberItems === 'number' && Number.isFinite(numberItems) ? numberItems : undefined,
  }
}

function captureSnapClickIdFromUrl() {
  if (typeof window === 'undefined') return
  try {
    const params = new URLSearchParams(window.location.search)
    const scCid = params.get('ScCid') || params.get('sccid') || params.get('sc_cid')
    if (scCid?.trim()) {
      window.sessionStorage.setItem('bs_snap_sccid', scCid.trim().slice(0, 200))
    }
  } catch {
    /* ignore */
  }
}

function readSnapClickId(): string | undefined {
  if (typeof window === 'undefined') return undefined
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('ScCid')
    if (fromUrl?.trim()) return fromUrl.trim().slice(0, 200)
    return window.sessionStorage.getItem('bs_snap_sccid')?.trim().slice(0, 200) || undefined
  } catch {
    return undefined
  }
}

function readSnapCookie1(): string | undefined {
  if (typeof document === 'undefined') return undefined
  for (const part of document.cookie.split(';')) {
    const [rawKey, ...rest] = part.trim().split('=')
    if (rawKey?.trim() === '_scid') {
      const value = rest.join('=').trim()
      return value ? decodeURIComponent(value).slice(0, 200) : undefined
    }
  }
  return undefined
}

function newSnapEventId(prefix: string, orderId?: string): string {
  if (orderId && prefix === 'PURCHASE') return `purchase_${orderId}`
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return `${prefix}_${crypto.randomUUID()}`
  }
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
}

function sendSnapCapiBeacon(input: {
  eventName: string
  eventId: string
  value?: number
  currency?: string
  contentIds?: string[]
  contentCategory?: string
  contentName?: string
  orderId?: string
  numItems?: number
}) {
  if (typeof window === 'undefined' || !state.consent.marketing) return
  const body = JSON.stringify({
    eventName: input.eventName,
    eventId: input.eventId,
    eventSourceUrl: window.location.href,
    value: input.value,
    currency: input.currency,
    contentIds: input.contentIds,
    contentCategory: input.contentCategory,
    contentName: input.contentName,
    orderId: input.orderId,
    numItems: input.numItems,
    scClickId: readSnapClickId(),
    scCookie1: readSnapCookie1(),
    marketingConsent: true,
  })
  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/analytics/snap-capi', new Blob([body], { type: 'application/json' }))
      return
    }
  } catch {
    /* fall through */
  }
  void fetch('/api/analytics/snap-capi', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true,
  }).catch(() => {})
}

function snapPixelFromSiteEvent(name: string, params?: AnalyticsParams) {
  if (!state.consent.marketing) return

  const map: Record<string, string> = {
    page_view: 'PAGE_VIEW',
    view_item: 'VIEW_CONTENT',
    add_to_cart: 'ADD_CART',
    begin_checkout: 'START_CHECKOUT',
    click_checkout: 'START_CHECKOUT',
    purchase: 'PURCHASE',
    sign_up: 'SIGN_UP',
    subscribe: 'SUBSCRIBE',
  }
  const snapName = map[name]
  if (!snapName) return

  const { value, currency, itemIds, itemCategory, orderId, numberItems } = extractCommerceFields(params)
  const eventId = newSnapEventId(snapName, orderId)

  if (state.snapPixelReady && window.snaptr) {
    if (snapName === 'PAGE_VIEW') {
      window.snaptr('track', 'PAGE_VIEW', { client_dedup_id: eventId })
    } else {
      const payload: Record<string, unknown> = { client_dedup_id: eventId }
      if (value !== undefined) payload.price = value
      if (currency) payload.currency = currency
      if (itemIds?.length) payload.item_ids = itemIds
      if (itemCategory) payload.item_category = itemCategory
      if (numberItems !== undefined) payload.number_items = numberItems
      if (orderId) payload.transaction_id = orderId
      window.snaptr('track', snapName, payload)
    }
  }

  sendSnapCapiBeacon({
    eventName: snapName,
    eventId,
    value,
    currency,
    contentIds: itemIds,
    contentCategory: itemCategory,
    orderId,
    numItems: numberItems,
  })
}

function readMetaBrowserCookies(): { fbp?: string; fbc?: string } {
  if (typeof document === 'undefined') return {}
  const out: { fbp?: string; fbc?: string } = {}
  for (const part of document.cookie.split(';')) {
    const [rawKey, ...rest] = part.trim().split('=')
    const key = rawKey?.trim()
    const value = rest.join('=').trim()
    if (!key || !value) continue
    if (key === '_fbp') out.fbp = decodeURIComponent(value).slice(0, 200)
    if (key === '_fbc') out.fbc = decodeURIComponent(value).slice(0, 500)
  }
  return out
}

function newMetaEventId(prefix: string): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return `${prefix}_${crypto.randomUUID()}`
  }
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
}

function sendMetaCapiBeacon(input: {
  eventName: string
  eventId: string
  value?: number
  currency?: string
  contentIds?: string[]
  contents?: Array<{ id: string; quantity: number; item_price?: number }>
  contentName?: string
  orderId?: string
  numItems?: number
}) {
  if (typeof window === 'undefined' || !state.consent.marketing) return
  const cookies = readMetaBrowserCookies()
  const body = JSON.stringify({
    eventName: input.eventName,
    eventId: input.eventId,
    eventSourceUrl: window.location.href,
    value: input.value,
    currency: input.currency,
    contentIds: input.contentIds,
    contents: input.contents,
    contentName: input.contentName,
    orderId: input.orderId,
    numItems: input.numItems,
    fbp: cookies.fbp,
    fbc: cookies.fbc,
    marketingConsent: true,
  })
  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/analytics/meta-capi', new Blob([body], { type: 'application/json' }))
      return
    }
  } catch {
    /* fall through */
  }
  void fetch('/api/analytics/meta-capi', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true,
  }).catch(() => {})
}

function extractMetaCatalogPayload(params?: AnalyticsParams): {
  contentIds?: string[]
  contents?: Array<{ id: string; quantity: number; item_price?: number }>
  numItems?: number
} {
  const topLevelIds = Array.isArray(params?.meta_content_ids)
    ? params.meta_content_ids.filter(
        (id): id is string => typeof id === 'string' && id.trim().length > 0,
      )
    : []

  const itemRows = Array.isArray(params?.items) ? params.items : []
  const fromItems: Array<{ id: string; quantity: number; item_price?: number }> = []
  for (const row of itemRows) {
    if (!row || typeof row !== 'object' || Array.isArray(row)) continue
    const record = row as Record<string, unknown>
    const id =
      typeof record.meta_content_id === 'string' && record.meta_content_id.trim()
        ? record.meta_content_id.trim()
        : undefined
    if (!id) continue
    const quantityRaw = record.quantity
    const quantity =
      typeof quantityRaw === 'number' && Number.isFinite(quantityRaw)
        ? Math.max(1, Math.floor(quantityRaw))
        : 1
    const priceRaw = record.meta_item_price ?? record.price
    const item_price =
      typeof priceRaw === 'number' && Number.isFinite(priceRaw) ? priceRaw : undefined
    fromItems.push(item_price != null ? { id, quantity, item_price } : { id, quantity })
  }

  const contentIds = Array.from(
    new Set([...topLevelIds.map((id) => id.trim()), ...fromItems.map((item) => item.id)]),
  ).slice(0, 20)

  const contents = fromItems.length
    ? fromItems.slice(0, 20)
    : contentIds.map((id) => ({
        id,
        quantity:
          typeof params?.quantity === 'number' && Number.isFinite(params.quantity)
            ? Math.max(1, Math.floor(params.quantity))
            : 1,
      }))

  const numItemsFromParams =
    typeof params?.num_items === 'number' && Number.isFinite(params.num_items)
      ? Math.max(1, Math.floor(params.num_items))
      : undefined
  const numItems =
    numItemsFromParams ??
    (contents.length
      ? contents.reduce((sum, item) => sum + item.quantity, 0)
      : undefined)

  return {
    contentIds: contentIds.length ? contentIds : undefined,
    contents: contents.length ? contents : undefined,
    numItems,
  }
}

function metaPixelFromSiteEvent(name: string, params?: AnalyticsParams) {
  if (!state.consent.marketing) return

  const value =
    typeof params?.value === 'number'
      ? params.value
      : typeof params?.value === 'string'
        ? Number(params.value)
        : undefined
  const currency = typeof params?.currency === 'string' ? params.currency : 'AED'
  const { contentIds, contents, numItems } = extractMetaCatalogPayload(params)
  const contentName = typeof params?.item_name === 'string' ? params.item_name : undefined
  const orderId =
    typeof params?.transaction_id === 'string' ? params.transaction_id : undefined

  const payload: Record<string, unknown> = { content_type: 'product' }
  if (Number.isFinite(value)) payload.value = value
  if (currency) payload.currency = currency
  if (contentIds) payload.content_ids = contentIds
  if (contents) payload.contents = contents
  if (typeof numItems === 'number') payload.num_items = numItems
  if (contentName) payload.content_name = contentName
  if (orderId) payload.order_id = orderId

  // begin_checkout already maps to InitiateCheckout — do not also map click_checkout
  // or Meta receives duplicate InitiateCheckout with different event_ids.
  const map: Record<string, string> = {
    page_view: 'PageView',
    view_item: 'ViewContent',
    add_to_cart: 'AddToCart',
    begin_checkout: 'InitiateCheckout',
    purchase: 'Purchase',
  }
  const metaName = map[name]
  if (!metaName) return

  const eventId =
    orderId && metaName === 'Purchase' ? `purchase_${orderId}` : newMetaEventId(metaName)

  if (state.metaPixelReady && window.fbq) {
    if (metaName === 'PageView') {
      window.fbq('track', 'PageView', undefined, { eventID: eventId })
    } else {
      window.fbq('track', metaName, payload, { eventID: eventId })
    }
  }

  sendMetaCapiBeacon({
    eventName: metaName,
    eventId,
    value: Number.isFinite(value) ? value : undefined,
    currency,
    contentIds,
    contents,
    contentName,
    orderId,
    numItems,
  })
}

/** Meta-only commerce event for surfaces that did not previously emit shared analytics. */
export function trackMetaEvent(name: string, params?: AnalyticsParams) {
  if (typeof window === 'undefined') return
  metaPixelFromSiteEvent(name, params)
}

function applyConsentToTrackers() {
  if (typeof window === 'undefined') return
  const analyticsGranted = state.consent.analytics
  const marketingGranted = state.consent.marketing

  // Always push Consent Mode updates so GTM (and GA4) pick up cookie choices.
  if (state.gaReady || isGtmConfigured()) {
    pushGtagConsentUpdate()
  }

  if (state.clarityReady && window.clarity) {
    applyClarityConsent(analyticsGranted)
  }

  if (state.posthogReady && window.posthog) {
    if (analyticsGranted) {
      window.posthog.opt_in_capturing()
      window.posthog.set_config?.({ disable_session_recording: false })
    } else {
      window.posthog.set_config?.({ disable_session_recording: true })
      window.posthog.opt_out_capturing()
    }
  }

  if (marketingGranted) {
    scheduleMarketingInit()
  }
}

/** Call after owner login so Clarity / PostHog stop recording house sessions. */
export function suppressExternalTrackersForStaff() {
  if (typeof window === 'undefined') return
  if (state.clarityReady && window.clarity) {
    applyClarityConsent(false)
  }
  if (state.posthogReady && window.posthog) {
    window.posthog.set_config?.({ disable_session_recording: true })
    window.posthog.opt_out_capturing()
  }
}

/** After owner logout, allow Clarity again if analytics consent is already granted. */
export function resumeExternalTrackersAfterStaff() {
  if (typeof window === 'undefined' || !state.consent.analytics) return
  if (isStaffOpticsActive() || isAdminBrowserPath()) return
  initClarity()
  initPosthog()
  applyConsentToTrackers()
}

function flushPendingPageView() {
  const path = state.pendingPagePath
  if (!path || !state.consent.analytics || !state.trackerInitComplete) return
  state.pendingPagePath = null
  trackPageView(path)
}

function scheduleTrackerInit() {
  if (typeof window === 'undefined' || !state.consent.analytics) return
  if (state.trackerInitComplete) {
    applyConsentToTrackers()
    flushPendingPageView()
    return
  }
  if (state.trackerInitScheduled) return

  state.trackerInitScheduled = true
  const run = () => {
    state.trackerInitScheduled = false
    if (!state.consent.analytics || state.trackerInitComplete) return
    initGa4()
    if (!isStaffOpticsActive() && !isAdminBrowserPath()) {
      initClarity()
      initPosthog()
    }
    state.trackerInitComplete = true
    applyConsentToTrackers()
    flushPendingPageView()
  }

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(run, { timeout: 2_000 })
  } else {
    globalThis.setTimeout(run, 1_000)
  }
}

export function initializeAnalytics(consent: ConsentState) {
  state.consent = consent
  captureSnapClickIdFromUrl()
  if (consent.analytics) scheduleTrackerInit()
  else applyConsentToTrackers()
  if (consent.marketing) scheduleMarketingInit()
}

export function updateAnalyticsConsent(consent: ConsentState) {
  state.consent = consent
  captureSnapClickIdFromUrl()
  applyConsentToTrackers()
  if (consent.analytics) {
    if (!state.pendingPagePath && typeof window !== 'undefined') {
      state.pendingPagePath = window.location.pathname
    }
    scheduleTrackerInit()
  }
  if (consent.marketing) scheduleMarketingInit()
}

export function trackEvent(name: string, params?: AnalyticsParams) {
  const scalarParams = params
    ? (Object.fromEntries(
        Object.entries(params).filter(([, v]) => v === null || typeof v !== 'object'),
      ) as Record<string, string | number | boolean | null | undefined>)
    : undefined
  mirrorDashboardEngagement(name, scalarParams)
  if (typeof window === 'undefined') return

  metaPixelFromSiteEvent(name, params)
  snapPixelFromSiteEvent(name, params)

  if (!state.consent.analytics) return
  const cleanParams = toCleanParams(params)

  if (name === 'page_view') {
    const path =
      (typeof cleanParams?.page_path === 'string' && cleanParams.page_path) ||
      window.location.pathname
    const { page_path: _pagePath, ...rest } = cleanParams || {}
    sendGa4PageView(path, rest)
  } else if (state.gaReady && window.gtag) {
    window.gtag('event', name, cleanParams || {})
  }
  if (state.clarityReady && window.clarity) {
    window.clarity('event', name)
  }
  if (state.posthogReady && window.posthog) {
    window.posthog.capture(name, cleanParams)
  }
}

export function trackPageView(path: string, params?: AnalyticsParams) {
  if (!state.consent.analytics || !state.trackerInitComplete) {
    state.pendingPagePath = path
    // Keep internal dashboard mirror even before opt-in.
    const cleanParams = toCleanParams(params)
    const scalarParams = cleanParams
      ? (Object.fromEntries(
          Object.entries({ page_path: path, ...cleanParams }).filter(
            ([, v]) => v === null || typeof v !== 'object',
          ),
        ) as Record<string, string | number | boolean | null | undefined>)
      : { page_path: path }
    mirrorDashboardEngagement('page_view', scalarParams)
    return
  }
  state.pendingPagePath = null
  const cleanParams = toCleanParams(params)
  trackEvent('page_view', { page_path: path, ...cleanParams })
}

export function trackScrollMilestone(path: string, milestone: 25 | 50 | 75 | 100) {
  const set = state.scrollMilestonesByPath.get(path) || new Set<number>()
  if (set.has(milestone)) return
  set.add(milestone)
  state.scrollMilestonesByPath.set(path, set)
  trackEvent('scroll', { scroll_depth: milestone, page_path: path })
}
