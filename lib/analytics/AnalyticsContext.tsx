'use client'

import { createContext, useContext, useEffect, useState, useCallback, useRef, ReactNode } from 'react'
import {
  REQUEST_PRECISE_LOCATION_EVENT,
  ensureGpsHandledFromCache,
  isGpsPromptAlreadyHandled,
  markGpsPromptHandled,
} from '@/lib/geo/locationEvents'

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

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  const [visitor, setVisitor] = useState<VisitorData | null>(null)
  const [isLive, setIsLive] = useState(true)
  /** Refs avoid trackPageView ↔ visitor feedback loops (stable callback identity). */
  const pageStartTimeRef = useRef(Date.now())
  const currentPathRef = useRef('')

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

      // Get location - with caching and multiple providers for reliability
      type LocationType = VisitorData['location']
      let location: LocationType = null
      const cachedLocation = localStorage.getItem('bs_location')
      const cachedLocationTime = localStorage.getItem('bs_location_time')
      const locationCacheValid = cachedLocationTime && (Date.now() - parseInt(cachedLocationTime)) < 24 * 60 * 60 * 1000 // 24 hours
      
      if (cachedLocation && locationCacheValid) {
        // Use cached location
        location = JSON.parse(cachedLocation) as LocationType
      } else {
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

      // Precise (GPS) location is never requested automatically — see LocationConsent soft prompt.

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
      }

      setVisitor(visitorData)

      // Send visitor notifications to Slack (admin-only; user never sees these)
      if (isNewVisitor || visitCount === 1) {
        await sendSlackNotification('new_visitor', visitorData)
      } else {
        await sendSlackNotification('returning_visitor', visitorData)
      }
    }

    initVisitor()
  }, [])

  // Optional GPS only after the user accepts the in-app tailor experience (avoids a cold system dialog).
  useEffect(() => {
    const runGps = () => {
      if (typeof window === 'undefined' || !navigator.geolocation) return
      ensureGpsHandledFromCache()
      if (isGpsPromptAlreadyHandled()) return
      if (preciseGpsRequestInFlight) return
      preciseGpsRequestInFlight = true

      navigator.geolocation.getCurrentPosition(
        (position) => {
          preciseGpsRequestInFlight = false
          const { latitude, longitude } = position.coords
          type Loc = NonNullable<VisitorData['location']>
          let base: Loc | null = null
          try {
            const raw = localStorage.getItem('bs_location')
            if (raw) base = JSON.parse(raw) as Loc
          } catch {
            /* keep null */
          }
          const gpsLocation: Loc = {
            country: base?.country ?? 'Unknown',
            city: base?.city ?? 'Unknown',
            region: base?.region ?? '',
            countryCode: base?.countryCode ?? 'XX',
            ip: base?.ip ?? 'Unknown',
            latitude,
            longitude,
            timezone: base?.timezone ?? '',
            accuracyLevel: 'gps',
          }
          localStorage.setItem('bs_location', JSON.stringify(gpsLocation))
          localStorage.setItem('bs_location_time', Date.now().toString())
          markGpsPromptHandled('granted')
          setVisitor((prev) => (prev ? { ...prev, location: gpsLocation } : prev))
          const visitorId = localStorage.getItem('bs_visitor_id')
          void sendSlackNotification('location_update', {
            visitorId,
            location: gpsLocation,
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

  // Handle visibility change (tab switch)
  useEffect(() => {
    const handleVisibility = () => {
      setIsLive(!document.hidden)
    }

    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [])

  // Track page view — empty deps: logic uses refs + functional updates only (no visitor in deps).
  const trackPageView = useCallback((path: string, title: string) => {
    const now = Date.now()
    const prevPath = currentPathRef.current

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
      }

      return {
        ...prev,
        pageViews: [...pageViews, newPageView],
      }
    })

    pageStartTimeRef.current = now
    currentPathRef.current = path
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
