import type { Metadata } from 'next'
import type { ReactNode } from 'react'

/**
 * Explicit crawl directives for `/coming-soon` so merged metadata never surfaces noindex
 * (root layout already sends index,follow; this segment reinforces for crawlers / GSC).
 */
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.bintsaeed.com/coming-soon',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
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
