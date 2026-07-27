export type TrackerKey = 'ga4' | 'clarity' | 'posthog' | 'meta_pixel'

export type TrackerCookieInfo = {
  name: string
  purpose: string
  retention: string
}

export type TrackerInfo = {
  key: TrackerKey
  title: string
  category: 'analytics' | 'behavioral' | 'marketing'
  envVar: string
  description: string
  cookies: TrackerCookieInfo[]
}

export const TRACKER_CATALOG: TrackerInfo[] = [
  {
    key: 'ga4',
    title: 'Google Analytics 4',
    category: 'analytics',
    envVar: 'NEXT_PUBLIC_GA4_MEASUREMENT_ID',
    description:
      'Measures traffic, page views, user journeys, CTA interactions, and ecommerce funnel progression in aggregate.',
    cookies: [
      { name: '_ga', purpose: 'Distinguishes users for analytics', retention: 'up to 2 years' },
      { name: '_ga_*', purpose: 'Stores session and engagement state', retention: 'up to 2 years' },
    ],
  },
  {
    key: 'clarity',
    title: 'Microsoft Clarity',
    category: 'behavioral',
    envVar: 'NEXT_PUBLIC_CLARITY_PROJECT_ID',
    description:
      'Provides heatmaps and session behavior analytics to understand navigation, click patterns, and scroll behavior.',
    cookies: [
      { name: '_clck', purpose: 'Persists Clarity user identifier', retention: 'up to 1 year' },
      { name: '_clsk', purpose: 'Combines multiple page views into one session', retention: 'up to 1 day' },
      { name: 'CLID', purpose: 'Identifies first-time Clarity visits', retention: 'up to 1 year' },
      { name: 'MR', purpose: 'Improves Clarity insights quality', retention: 'up to 7 days' },
    ],
  },
  {
    key: 'posthog',
    title: 'PostHog',
    category: 'behavioral',
    envVar: 'NEXT_PUBLIC_POSTHOG_KEY + NEXT_PUBLIC_POSTHOG_HOST',
    description:
      'Optional product analytics and autocapture pipeline for page/event analysis and privacy-safe behavioral trends.',
    cookies: [
      { name: 'ph_*', purpose: 'Stores pseudonymous analytics identifiers and session state', retention: 'up to 1 year' },
    ],
  },
  {
    key: 'meta_pixel',
    title: 'Meta Pixel',
    category: 'marketing',
    envVar: 'NEXT_PUBLIC_META_PIXEL_ID',
    description:
      'Measures catalog ads and Instagram Shopping (browser Pixel + server Conversions API with shared event IDs) when marketing cookies are accepted.',
    cookies: [
      { name: '_fbp', purpose: 'Browser identifier for Meta advertising', retention: 'up to 3 months' },
      { name: '_fbc', purpose: 'Click identifier when arriving from Meta ads', retention: 'up to 3 months' },
    ],
  },
]

export function getEnabledTrackersFromEnv() {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim()
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim()
  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY?.trim()
  const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST?.trim()
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim()

  return TRACKER_CATALOG.filter((tracker) => {
    if (tracker.key === 'ga4') return Boolean(ga4Id)
    if (tracker.key === 'clarity') return Boolean(clarityId)
    if (tracker.key === 'posthog') return Boolean(posthogKey && posthogHost)
    if (tracker.key === 'meta_pixel') return Boolean(metaPixelId)
    return false
  })
}
