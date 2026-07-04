'use client'

import { createContext, useContext, useEffect, useState, useCallback, useRef, ReactNode } from 'react'
import {
  REQUEST_PRECISE_LOCATION_EVENT,
  ensureGpsHandledFromCache,
  isGpsPromptAlreadyHandled,
  markGpsPromptHandled,
} from '@/lib/geo/locationEvents'
import { isLikelySearchBotUserAgent } from '@/lib/bots/isLikelySearchBot'
import { languageLabels } from '@/lib/geo/geoDetection'
import { stripLocaleFromPathname } from '@/lib/i18n/routing'
import {
  persistFirstTouchAttribution,
  persistSessionStart,
} from '@/lib/analytics/attributionStorage'

interface VisitorData {
  visitorId: string
  sessionId: string
  isNewVisitor: boolean
  visitCount: number
  firstVisit: string
  currentVisit: string
  location: {
    country: string
    city: string
    region: string
    countryCode: string
    ip: string
    latitude: number | null
    longitude: number | null
    timezone: string
    accuracyLevel: 'ip' | 'gps' | 'unknown'
    accuracyMeters?: number | null
    address?: string
    postalCode?: string
    locationCapturedAt?: string
  } | null
  device: {
    type: 'mobile' | 'tablet' | 'desktop'
    browser: string
    os: string
  }
  pageViews: {
    path: string
    title: string
    timestamp: string
    timeOnPage: number
    language?: string
    currency?: string
  }[]
  totalTimeOnSite: number
  referrer: string
  utmParams: {
    source?: string
    medium?: string
    campaign?: string
  }
  contactInfo?: {
    email?: string
    phone?: string
    name?: string
  }
  cartEvents: {
    action: 'add' | 'remove' | 'checkout'
    productId: string
    productName: string
    timestamp: string
  }[]
  /** ISO timestamps for each site open (session start), newest last; capped in storage */
  visitTimestamps: string[]
}

interface BrowserContext {
  title: string
  url: string
  path: string
  hostname: string
  referrer: string
  language: string
  screen: string
  userAgent: string
}

interface AnalyticsContextType {
  visitor: VisitorData | null
  trackPageView: (path: string, title: string) => void
  trackCartEvent: (action: 'add' | 'remove' | 'checkout', productId: string, productName: string) => void
  setContactInfo: (info: { email?: string; phone?: string; name?: string }) => void
  isLive: boolean
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)

/** Avoid overlapping `getCurrentPosition` calls (e.g. double event / double-click). */
let preciseGpsRequestInFlight = false

function generateId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

function getDeviceInfo() {
  if (typeof window === 'undefined') {
    return { type: 'desktop' as const, browser: 'Unknown', os: 'Unknown' }
  }

  const ua = navigator.userAgent
  let type: 'mobile' | 'tablet' | 'desktop' = 'desktop'
  
  if (/Mobi|Android/i.test(ua)) type = 'mobile'
  else if (/Tablet|iPad/i.test(ua)) type = 'tablet'

  let browser = 'Unknown'
  if (ua.includes('Chrome')) browser = 'Chrome'
  else if (ua.includes('Safari')) browser = 'Safari'
  else if (ua.includes('Firefox')) browser = 'Firefox'
  else if (ua.includes('Edge')) browser = 'Edge'

  let os = 'Unknown'
  if (ua.includes('Windows')) os = 'Windows'
  else if (ua.includes('Mac')) os = 'macOS'
  else if (ua.includes('Linux')) os = 'Linux'
  else if (ua.includes('Android')) os = 'Android'
  else if (ua.includes('iOS') || ua.includes('iPhone')) os = 'iOS'

  return { type, browser, os }
}

function getBrowserContext(): BrowserContext | null {
  if (typeof window === 'undefined') return null
  return {
    title: document.title || '',
    url: window.location.href,
    path: window.location.pathname + window.location.search,
    hostname: window.location.hostname,
    referrer: document.referrer || 'Direct',
    language: navigator.language || '',
    screen: `${window.screen?.width || 0}x${window.screen?.height || 0}`,
    userAgent: navigator.userAgent,
  }
}

async function reverseGeocodeLocation(latitude: number, longitude: number): Promise<Partial<NonNullable<VisitorData['location']>>> {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${encodeURIComponent(latitude)}&lon=${encodeURIComponent(longitude)}&zoom=18&addressdetails=1`,
      { signal: AbortSignal.timeout(7000) },
    )
    const data = await res.json()
    const address = data?.address || {}
    return {
      address: data?.display_name || '',
      city: address.city || address.town || address.village || address.municipality || address.suburb || '',
      region: address.state || address.region || address.county || '',
      country: address.country || '',
      countryCode: address.country_code ? String(address.country_code).toUpperCase() : undefined,
      postalCode: address.postcode || '',
    }
  } catch {
    try {
      const res = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${encodeURIComponent(latitude)}&longitude=${encodeURIComponent(longitude)}&localityLanguage=en`,
        { signal: AbortSignal.timeout(7000) },
      )
      const data = await res.json()
      const addressParts = [data.locality, data.principalSubdivision, data.postcode, data.countryName].filter(Boolean)
      return {
        address: addressParts.join(', '),
        city: data.city || data.locality || '',
        region: data.principalSubdivision || '',
        country: data.countryName || '',
        countryCode: data.countryCode || undefined,
        postalCode: data.postcode || '',
      }
    } catch {
      return {}
    }
  }
}

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  const [visitor, setVisitor] = useState<VisitorData | null>(null)
  const [isLive, setIsLive] = useState(true)
  /** Refs avoid trackPageView ↔ visitor feedback loops (stable callback identity). */
  const pageStartTimeRef = useRef(Date.now())
  const currentPathRef = useRef('')
  const visitorRef = useRef<VisitorData | null>(null)
  const lastSessionSummarySentAtRef = useRef(0)
  const lastSlackPageRef = useRef('')

  // Initialize visitor on mount
  useEffect(() => {
    const initVisitor = async () => {
      // Get or create visitor ID
      let visitorId = localStorage.getItem('bs_visitor_id')
      let visitCount = parseInt(localStorage.getItem('bs_visit_count') || '0')
      let firstVisit = localStorage.getItem('bs_first_visit')
      const isNewVisitor = !visitorId

      if (!visitorId) {
        visitorId = generateId()
        localStorage.setItem('bs_visitor_id', visitorId)
      }

      if (!firstVisit) {
        firstVisit = new Date().toISOString()
        localStorage.setItem('bs_first_visit', firstVisit)
      }

      visitCount++
      localStorage.setItem('bs_visit_count', visitCount.toString())

      const nowIso = new Date().toISOString()
      let visitTimestamps: string[] = []
      try {
        const rawTs = localStorage.getItem('bs_visit_timestamps')
        if (rawTs) {
          const parsed = JSON.parse(rawTs)
          if (Array.isArray(parsed)) visitTimestamps = parsed.filter((x) => typeof x === 'string')
        }
      } catch {
        visitTimestamps = []
      }
      visitTimestamps.push(nowIso)
      if (visitTimestamps.length > 200) visitTimestamps = visitTimestamps.slice(-200)
      localStorage.setItem('bs_visit_timestamps', JSON.stringify(visitTimestamps))

      const skipGeoFetch =
        typeof navigator !== 'undefined' && isLikelySearchBotUserAgent(navigator.userAgent)

      // Get location - with caching and multiple providers for reliability
      type LocationType = VisitorData['location']
      let location: LocationType = null
      const cachedLocation = localStorage.getItem('bs_location')
      const cachedLocationTime = localStorage.getItem('bs_location_time')
      const locationCacheValid = cachedLocationTime && (Date.now() - parseInt(cachedLocationTime)) < 24 * 60 * 60 * 1000 // 24 hours
      
      if (cachedLocation && locationCacheValid) {
        try {
          location = JSON.parse(cachedLocation) as LocationType
        } catch {
          try {
            localStorage.removeItem('bs_location')
            localStorage.removeItem('bs_location_time')
          } catch {
            /* ignore */
          }
          location = null
        }
      }

      if (!location && !skipGeoFetch) {
        // Try multiple IP geolocation providers for reliability
        try {
          // Primary: ipapi.co
          const res = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(5000) })
          const data = await res.json()
          if (data.city && data.country_name) {
            location = {
              country: data.country_name,
              city: data.city,
              region: data.region || '',
              countryCode: data.country_code || 'XX',
              ip: data.ip || 'Unknown',
              latitude: data.latitude || null,
              longitude: data.longitude || null,
              timezone: data.timezone || '',
              accuracyLevel: 'ip' as const,
              postalCode: data.postal || '',
            }
          }
        } catch (e) {
          console.log('Primary IP provider failed, trying backup...')
        }

        // Backup provider if primary fails
        if (!location || location.city === 'Unknown') {
          try {
            const res2 = await fetch('https://ip-api.com/json/?fields=status,country,countryCode,regionName,city,lat,lon,timezone,query', { signal: AbortSignal.timeout(5000) })
            const data2 = await res2.json()
            if (data2.status === 'success') {
              location = {
                country: data2.country,
                city: data2.city,
                region: data2.regionName || '',
                countryCode: data2.countryCode || 'XX',
                ip: data2.query || 'Unknown',
                latitude: data2.lat || null,
                longitude: data2.lon || null,
                timezone: data2.timezone || '',
                accuracyLevel: 'ip' as const,
              postalCode: data2.zip || '',
              }
            }
          } catch (e) {
            console.log('Backup IP provider also failed')
          }
        }

        // Cache the location for reliability
        if (location && location.city !== 'Unknown') {
          localStorage.setItem('bs_location', JSON.stringify(location))
          localStorage.setItem('bs_location_time', Date.now().toString())
        }
      }

      // IP-based location only — no browser GPS prompt from the regional popup.

      // Fallback if everything fails
      if (!location) {
        location = {
          country: 'Unknown',
          city: 'Unknown',
          region: '',
          countryCode: 'XX',
          ip: 'Unknown',
          latitude: null,
          longitude: null,
          timezone: '',
          accuracyLevel: 'unknown' as const,
        }
      }

      // Get UTM params
      const urlParams = new URLSearchParams(window.location.search)
      const utmParams = {
        source: urlParams.get('utm_source') || undefined,
        medium: urlParams.get('utm_medium') || undefined,
        campaign: urlParams.get('utm_campaign') || undefined,
      }

      persistSessionStart()
      persistFirstTouchAttribution({
        referrer: document.referrer || 'Direct',
        utmSource: utmParams.source,
        utmMedium: utmParams.medium,
        utmCampaign: utmParams.campaign,
        landingPath: window.location.pathname + window.location.search,
      })

      const visitorData: VisitorData = {
        visitorId,
        sessionId: generateId(),
        isNewVisitor,
        visitCount,
        firstVisit,
        currentVisit: new Date().toISOString(),
        location,
        device: getDeviceInfo(),
        pageViews: [],
        totalTimeOnSite: 0,
        referrer: document.referrer || 'Direct',
        utmParams,
        cartEvents: [],
        visitTimestamps,
      }

      setVisitor(visitorData)

      // Send visitor notifications to Slack (admin-only; user never sees these)
      if (isNewVisitor || visitCount === 1) {
        await sendSlackNotification('new_visitor', visitorData)
      } else {
        await sendSlackNotification('returning_visitor', visitorData)
      }
    }

    void initVisitor().catch((e) => {
      console.error('Analytics visitor init failed', e)
      try {
        const vid = typeof localStorage !== 'undefined' ? localStorage.getItem('bs_visitor_id') : null
        const visitorId = vid || generateId()
        setVisitor({
          visitorId,
          sessionId: generateId(),
          isNewVisitor: !vid,
          visitCount: 1,
          firstVisit: new Date().toISOString(),
          currentVisit: new Date().toISOString(),
          location: {
            country: 'Unknown',
            city: 'Unknown',
            region: '',
            countryCode: 'XX',
            ip: 'Unknown',
            latitude: null,
            longitude: null,
            timezone: '',
            accuracyLevel: 'unknown' as const,
          },
          device: getDeviceInfo(),
          pageViews: [],
          totalTimeOnSite: 0,
          referrer: typeof document !== 'undefined' ? document.referrer || 'Direct' : 'Direct',
          utmParams: {},
          cartEvents: [],
          visitTimestamps: [],
        })
      } catch {
        /* ignore — avoid secondary crashes */
      }
    })
  }, [])

  // GPS is never requested from the regional popup; this listener only runs if another flow dispatches the event.
  useEffect(() => {
    const runGps = () => {
      if (typeof window === 'undefined' || !navigator.geolocation) return
      ensureGpsHandledFromCache()
      if (isGpsPromptAlreadyHandled()) return
      if (preciseGpsRequestInFlight) return
      preciseGpsRequestInFlight = true

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          preciseGpsRequestInFlight = false
          const { latitude, longitude, accuracy } = position.coords
          type Loc = NonNullable<VisitorData['location']>
          let base: Loc | null = null
          try {
            const raw = localStorage.getItem('bs_location')
            if (raw) base = JSON.parse(raw) as Loc
          } catch {
            /* keep null */
          }
          const geocoded = await reverseGeocodeLocation(latitude, longitude)
          const gpsLocation: Loc = {
            country: geocoded.country || base?.country || 'Unknown',
            city: geocoded.city || base?.city || 'Unknown',
            region: geocoded.region || base?.region || '',
            countryCode: geocoded.countryCode || base?.countryCode || 'XX',
            ip: base?.ip ?? 'Unknown',
            latitude,
            longitude,
            timezone: base?.timezone ?? '',
            accuracyLevel: 'gps',
            accuracyMeters: Number.isFinite(accuracy) ? accuracy : null,
            address: geocoded.address || base?.address || '',
            postalCode: geocoded.postalCode || base?.postalCode || '',
            locationCapturedAt: new Date().toISOString(),
          }
          localStorage.setItem('bs_location', JSON.stringify(gpsLocation))
          localStorage.setItem('bs_location_time', Date.now().toString())
          markGpsPromptHandled('granted')
          setVisitor((prev) => (prev ? { ...prev, location: gpsLocation } : prev))
          const visitorId = localStorage.getItem('bs_visitor_id')
          void sendSlackNotification('location_update', {
            visitorId,
            location: gpsLocation,
            device: getDeviceInfo(),
            browser: getBrowserContext(),
            message: 'GPS location acquired',
          })
        },
        () => {
          preciseGpsRequestInFlight = false
          /* One denial / timeout — do not call geolocation again (repeated calls re-trigger Safari’s sheet). */
          markGpsPromptHandled('denied')
        },
        { enableHighAccuracy: false, timeout: 12000, maximumAge: 600_000 },
      )
    }
    window.addEventListener(REQUEST_PRECISE_LOCATION_EVENT, runGps)
    return () => window.removeEventListener(REQUEST_PRECISE_LOCATION_EVENT, runGps)
  }, [])

  // Track time on site
  useEffect(() => {
    if (!visitor) return

    const interval = setInterval(() => {
      setVisitor(prev => {
        if (!prev) return prev
        return {
          ...prev,
          totalTimeOnSite: prev.totalTimeOnSite + 1,
        }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [visitor])

  useEffect(() => {
    visitorRef.current = visitor
  }, [visitor])

  const sendSessionSummary = useCallback((reason: 'hidden' | 'pagehide') => {
    const current = visitorRef.current
    if (!current) return
    const now = Date.now()
    if (current.totalTimeOnSite < 5) return
    if (now - lastSessionSummarySentAtRef.current < 30_000) return
    lastSessionSummarySentAtRef.current = now

    const latestPageView = current.pageViews[current.pageViews.length - 1]
    sendSlackNotificationBeacon('session_summary', {
      ...current,
      browser: getBrowserContext(),
      currentPage: latestPageView
        ? {
            path: latestPageView.path,
            title: latestPageView.title,
          }
        : undefined,
      sessionEndReason: reason,
    })

    void import('@/lib/analytics/cartSlack').then((m) => m.notifyAbandonedCartSlack())
  }, [])

  // Handle visibility change (tab switch)
  useEffect(() => {
    const handleVisibility = () => {
      setIsLive(!document.hidden)
      if (document.hidden) {
        sendSessionSummary('hidden')
      }
    }

    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [sendSessionSummary])

  useEffect(() => {
    const handlePageHide = () => {
      sendSessionSummary('pagehide')
    }

    window.addEventListener('pagehide', handlePageHide)
    window.addEventListener('beforeunload', handlePageHide)
    return () => {
      window.removeEventListener('pagehide', handlePageHide)
      window.removeEventListener('beforeunload', handlePageHide)
    }
  }, [sendSessionSummary])

  // Track page view — empty deps: logic uses refs + functional updates only (no visitor in deps).
  const trackPageView = useCallback((path: string, title: string) => {
    const now = Date.now()
    const prevPath = currentPathRef.current
    const { locale } = stripLocaleFromPathname(path)
    const languageCode = locale === 'en' ? 'en' : locale
    const languageLabel = languageLabels[languageCode] || languageCode
    const currencyCode =
      typeof window !== 'undefined'
        ? localStorage.getItem('bint-saeed-currency') || 'AED'
        : 'AED'

    setVisitor((prev) => {
      if (!prev) return prev

      let pageViews = prev.pageViews

      if (prevPath && pageViews.length > 0) {
        const timeOnPage = Math.round((now - pageStartTimeRef.current) / 1000)
        pageViews = pageViews.map((pv, i) => {
          if (i === pageViews.length - 1) {
            return { ...pv, timeOnPage }
          }
          return pv
        })
      }

      const newPageView = {
        path,
        title,
        timestamp: new Date().toISOString(),
        timeOnPage: 0,
        language: languageCode,
        currency: currencyCode,
      }

      return {
        ...prev,
        pageViews: [...pageViews, newPageView],
      }
    })

    pageStartTimeRef.current = now
    currentPathRef.current = path

    const notifySlack = (attempt = 0) => {
      const snapshot = visitorRef.current
      if (!snapshot) {
        if (attempt < 24) window.setTimeout(() => notifySlack(attempt + 1), 200)
        return
      }
      if (lastSlackPageRef.current === path) return
      lastSlackPageRef.current = path

      const sessionSeconds = snapshot.pageViews.reduce((sum, pv) => sum + (pv.timeOnPage || 0), 0)

      void sendSlackNotification('page_view', {
        ...snapshot,
        currentPage: { path, title },
        language: languageCode,
        languageLabel,
        currency: currencyCode,
        browser: getBrowserContext(),
        totalTimeOnSite: sessionSeconds,
      })
    }
    notifySlack()
  }, [])

  // Track cart events
  const trackCartEvent = useCallback((action: 'add' | 'remove' | 'checkout', productId: string, productName: string) => {
    const event = {
      action,
      productId,
      productName,
      timestamp: new Date().toISOString(),
    }

    setVisitor(prev => {
      if (!prev) return prev
      return {
        ...prev,
        cartEvents: [...prev.cartEvents, event],
      }
    })

    // Cart events are tracked locally only - no Slack spam
  }, [])

  // Set contact info
  const setContactInfo = useCallback((info: { email?: string; phone?: string; name?: string }) => {
    setVisitor(prev => {
      if (!prev) return prev
      const updated = {
        ...prev,
        contactInfo: { ...prev.contactInfo, ...info },
      }
      
      // Send contact info update to Slack
      sendSlackNotification('contact_captured', updated)
      
      return updated
    })
  }, [])

  return (
    <AnalyticsContext.Provider value={{ visitor, trackPageView, trackCartEvent, setContactInfo, isLive }}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext)
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')
  }
  return context
}

// Send notification to Slack
async function sendSlackNotification(type: string, data: any) {
  try {
    await fetch('/api/analytics/slack', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, data }),
    })
  } catch (e) {
    console.log('Failed to send Slack notification')
  }
}

function sendSlackNotificationBeacon(type: string, data: any) {
  try {
    const body = JSON.stringify({ type, data })
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      const blob = new Blob([body], { type: 'application/json' })
      navigator.sendBeacon('/api/analytics/slack', blob)
      return
    }
    void fetch('/api/analytics/slack', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    })
  } catch {
    console.log('Failed to send Slack session summary')
  }
}
