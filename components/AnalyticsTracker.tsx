'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useAnalytics } from '@/lib/analytics/AnalyticsContext'

export default function AnalyticsTracker() {
  const pathname = usePathname()
  const { trackPageView } = useAnalytics()

  useEffect(() => {
    const path = pathname ?? '/'
    const title = document.title || path
    trackPageView(path, title)
  }, [pathname, trackPageView])

  return null
}
