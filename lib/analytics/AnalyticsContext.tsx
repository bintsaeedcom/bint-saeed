'use client'

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react'

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
    countryCode: string
    ip: string
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
  const [pageStartTime, setPageStartTime] = useState(Date.now())
  const [currentPath, setCurrentPath] = useState('')

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

      // Get location
      let location = null
      try {
        const res = await fetch('https://ipapi.co/json/')
        const data = await res.json()
        location = {
          country: data.country_name || 'Unknown',
          city: data.city || 'Unknown',
          countryCode: data.country_code || 'XX',
          ip: data.ip || 'Unknown',
        }
      } catch (e) {
        console.log('Could not get location')
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

      // Send new visitor notification to Slack
      if (isNewVisitor || visitCount === 1) {
        await sendSlackNotification('new_visitor', visitorData)
      } else {
        await sendSlackNotification('returning_visitor', visitorData)
      }
    }

    initVisitor()
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

  // Track page view
  const trackPageView = useCallback((path: string, title: string) => {
    const now = Date.now()
    
    // Calculate time on previous page
    if (currentPath && visitor) {
      const timeOnPage = Math.round((now - pageStartTime) / 1000)
      
      setVisitor(prev => {
        if (!prev) return prev
        const updatedPageViews = prev.pageViews.map((pv, i) => {
          if (i === prev.pageViews.length - 1) {
            return { ...pv, timeOnPage }
          }
          return pv
        })
        return { ...prev, pageViews: updatedPageViews }
      })
    }

    setPageStartTime(now)
    setCurrentPath(path)

    setVisitor(prev => {
      if (!prev) return prev
      const newPageView = {
        path,
        title,
        timestamp: new Date().toISOString(),
        timeOnPage: 0,
      }
      return {
        ...prev,
        pageViews: [...prev.pageViews, newPageView],
      }
    })

    // Page views are tracked locally only - no Slack spam
  }, [currentPath, pageStartTime, visitor])

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
  }, [visitor])

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
