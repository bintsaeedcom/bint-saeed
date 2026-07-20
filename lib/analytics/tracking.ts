'use client'

import { ConsentState } from '@/lib/analytics/consent'
import { mirrorDashboardEngagement } from '@/lib/analytics/dashboardEngagement'
import { isAdminBrowserPath, isStaffOpticsActive } from '@/lib/analytics/staffOptics'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    clarity?: (...args: unknown[]) => void
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

type AnalyticsParamValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | Array<Record<string, string | number | boolean | null | undefined>>

type AnalyticsParams = Record<string, AnalyticsParamValue>

const state = {
  gaReady: false,
  clarityReady: false,
  posthogReady: false,
  trackerInitComplete: false,
  trackerInitScheduled: false,
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

function initGa4() {
  if (typeof window === 'undefined' || state.gaReady) return
  const id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim()
  if (!id) return

  loadScript('bs-ga4-script', `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`)
  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag(...args: unknown[]) { window.dataLayer?.push(args) }
  window.gtag('js', new Date())
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
  window.gtag('config', id, { anonymize_ip: true, send_page_view: false })
  state.gaReady = true
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

function applyConsentToTrackers() {
  if (typeof window === 'undefined') return
  const granted = state.consent.analytics

  if (state.gaReady && window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    })
  }

  if (state.clarityReady && window.clarity) {
    applyClarityConsent(granted)
  }

  if (state.posthogReady && window.posthog) {
    if (granted) {
      window.posthog.opt_in_capturing()
      window.posthog.set_config?.({ disable_session_recording: false })
    } else {
      window.posthog.set_config?.({ disable_session_recording: true })
      window.posthog.opt_out_capturing()
    }
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
  if (consent.analytics) scheduleTrackerInit()
  else applyConsentToTrackers()
}

export function updateAnalyticsConsent(consent: ConsentState) {
  state.consent = consent
  applyConsentToTrackers()
  if (consent.analytics) {
    if (!state.pendingPagePath && typeof window !== 'undefined') {
      state.pendingPagePath = window.location.pathname
    }
    scheduleTrackerInit()
  }
}

export function trackEvent(name: string, params?: AnalyticsParams) {
  const scalarParams = params
    ? (Object.fromEntries(
        Object.entries(params).filter(([, v]) => v === null || typeof v !== 'object'),
      ) as Record<string, string | number | boolean | null | undefined>)
    : undefined
  mirrorDashboardEngagement(name, scalarParams)
  if (!state.consent.analytics || typeof window === 'undefined') return
  const cleanParams = toCleanParams(params)

  if (state.gaReady && window.gtag) {
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
