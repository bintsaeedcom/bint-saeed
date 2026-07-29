import type { Metadata } from 'next'
import { utilityNoIndexMetadata } from '@/lib/seo'
import { getResolvedRoutePageMeta } from '@/lib/seo/routePageMeta'
import { AL_TALLI_DISCOVERY_KEYWORDS_EN, alTalliPrimaryImageUrl } from '@/lib/seo/alTalliDiscovery'
import { getServerLocale } from '@/lib/i18n/serverLocale'
import { absoluteCanonicalForLocaleRoute } from '@/lib/i18n/buildRootMetadata'
import { brandDocumentTitle } from '@/lib/seo/brandDocumentTitle'
import { clipMetaDescription } from '@/lib/i18n/homePageCopy'

const PATH = '/heritage/al-talli'
const ogImage = alTalliPrimaryImageUrl()

/**
 * Al Talli editorial is unfinished — noindex until the heritage chapter ships.
 * Keep locale-aware title/description for preview/share; do not solicit crawl.
 */
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const meta = getResolvedRoutePageMeta(locale, PATH)
  const title = brandDocumentTitle(meta.title)
  const description = clipMetaDescription(meta.description, 200)
  const canonical = absoluteCanonicalForLocaleRoute(locale, PATH)

  return {
    ...utilityNoIndexMetadata,
    title: { absolute: title },
    description,
    ...(locale === 'en' ? { keywords: AL_TALLI_DISCOVERY_KEYWORDS_EN.join(', ') } : {}),
    alternates: {
      canonical,
    },
    openGraph: {
      title: brandDocumentTitle(meta.ogTitle),
      description,
      url: canonical,
      type: 'article',
      images: [
        {
          url: ogImage,
          alt: 'Al Talli — Emirati UNESCO heritage embroidery by Bint Saeed Abu Dhabi',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: brandDocumentTitle(meta.ogTitle),
      description,
      images: [ogImage],
    },
  }
}

export default function AlTalliLayout({ children }: { children: React.ReactNode }) {
  return children
}
