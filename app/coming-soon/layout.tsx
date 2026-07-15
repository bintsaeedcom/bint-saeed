import type { Metadata } from 'next'
import type { ReactNode } from 'react'

/**
 * Legacy `/coming-soon` consolidates on the live storefront.
 * Canonical + noindex so SERP equity moves to www.bintsaeed.com/home (middleware 308 when public).
 */
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.bintsaeed.com/home',
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function ComingSoonLayout({ children }: { children: ReactNode }) {
  return children
}
