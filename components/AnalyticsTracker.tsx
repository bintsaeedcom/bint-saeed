'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useAnalytics } from '@/lib/analytics/AnalyticsContext'

export default function AnalyticsTracker() {
  const pathname = usePathname()
  const { trackPageView } = useAnalytics()

  useEffect(() => {
    // Get page title
    const title = document.title || pathname

    // Track page view
    trackPageView(pathname, title)
  }, [pathname, trackPageView])

  return null
}
