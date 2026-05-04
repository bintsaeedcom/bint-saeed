import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import ComingSoonPage from '@/app/page'

/**
 * Keep `/coming-soon` permanently available.
 * Later, when the full site is live, set `COMING_SOON_REDIRECT_TO_ROOT=true`
 * to redirect this route to `/` without removing the URL.
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

export default function ComingSoonAliasPage() {
  if (process.env.COMING_SOON_REDIRECT_TO_ROOT === 'true') {
    redirect('/')
  }

  return <ComingSoonPage />
}
