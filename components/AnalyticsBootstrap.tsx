'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { CONSENT_EVENT_NAME, getConsentState } from '@/lib/analytics/consent'
import {
  initializeAnalytics,
  trackEvent,
  trackPageView,
  trackScrollMilestone,
  updateAnalyticsConsent,
} from '@/lib/analytics/tracking'

export default function AnalyticsBootstrap() {
  const pathname = usePathname()

  useEffect(() => {
    const initialConsent = getConsentState()
    initializeAnalytics(initialConsent)

    const onConsentChanged = (event: Event) => {
      const detail = (event as CustomEvent).detail
      const consent = detail ?? getConsentState()
      updateAnalyticsConsent(consent)
    }

    const onStorage = (event: StorageEvent) => {
      if (!event.key || ['analyticsConsent', 'marketingConsent', 'cookieConsent'].includes(event.key)) {
        updateAnalyticsConsent(getConsentState())
      }
    }

    window.addEventListener(CONSENT_EVENT_NAME, onConsentChanged as EventListener)
    window.addEventListener('storage', onStorage)
    return () => {
      window.removeEventListener(CONSENT_EVENT_NAME, onConsentChanged as EventListener)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  useEffect(() => {
    if (!pathname) return
    trackPageView(pathname)
  }, [pathname])

  useEffect(() => {
    if (!pathname) return
    const shouldTrackMilestones = pathname === '/home' || pathname === '/personalisation'
    if (!shouldTrackMilestones) return

    const milestones = [25, 50, 75, 100] as const
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      if (max <= 0) return
      const pct = Math.round((window.scrollY / max) * 100)
      milestones.forEach((m) => {
        if (pct >= m) trackScrollMilestone(pathname, m)
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  useEffect(() => {
    const clickHandler = (event: Event) => {
      const target = event.target as HTMLElement | null
      const node = target?.closest?.('[data-analytics-event]') as HTMLElement | null
      if (!node) return
      const eventName = node.dataset.analyticsEvent
      if (!eventName) return
      const eventLabel = node.dataset.analyticsLabel
      const section = node.dataset.analyticsSection
      trackEvent(eventName, { event_label: eventLabel, section })
      if (eventName === 'click_personalisation_teaser') {
        trackEvent('click_cta_home_to_personalisation', { section })
        trackEvent('click_request_piece', { section })
      }
      if (eventName === 'click_collection_from_personalisation') {
        trackEvent('click_personalisation_cta', { section })
      }
    }

    document.addEventListener('click', clickHandler, { capture: true })
    return () => document.removeEventListener('click', clickHandler, true)
  }, [])

  return null
}
