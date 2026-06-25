import type { Metadata } from 'next'
import { isPrelaunch } from '@/lib/seo'
import { getResolvedRoutePageMeta } from '@/lib/seo/routePageMeta'
import { AL_TALLI_DISCOVERY_KEYWORDS_EN, alTalliPrimaryImageUrl } from '@/lib/seo/alTalliDiscovery'

const meta = getResolvedRoutePageMeta('en', '/heritage/al-talli')
const ogImage = alTalliPrimaryImageUrl()

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: AL_TALLI_DISCOVERY_KEYWORDS_EN.join(', '),
  openGraph: {
    title: meta.ogTitle,
    description: meta.description,
    type: 'article',
    images: [{ url: ogImage, alt: 'Al Talli — Emirati UNESCO heritage embroidery by Bint Saeed Abu Dhabi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.ogTitle,
    description: meta.description,
    images: [ogImage],
  },
  alternates: {
    canonical: '/heritage/al-talli',
  },
  robots: isPrelaunch ? { index: false, follow: true } : { index: true, follow: true },
}

export default function AlTalliLayout({ children }: { children: React.ReactNode }) {
  return children
}
