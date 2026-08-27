import type { Metadata } from 'next'
import { sectionRobotsMetadata } from '@/lib/seo'
import { getResolvedRoutePageMeta } from '@/lib/seo/routePageMeta'
import { getServerLocale } from '@/lib/i18n/serverLocale'
import { absoluteCanonicalForLocaleRoute } from '@/lib/i18n/buildRootMetadata'
import { brandDocumentTitle } from '@/lib/seo/brandDocumentTitle'
import { clipMetaDescription } from '@/lib/i18n/homePageCopy'
import { HERITAGE_KHOUS_IMAGES } from '@/lib/content/heritagePageMedia'
import { getKhousPageCopy } from '@/lib/content/heritageKhousCopyI18n'

const PATH = '/heritage/khous'
const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')
const LLMS_BRIEF = `${SITE}/llms/heritage.txt`
const ogImage = `${SITE}${HERITAGE_KHOUS_IMAGES.hero}`

const KEYWORDS_EN = [
  'Al Khous',
  'Khous weaving',
  'الخوص',
  'palm frond weaving UAE',
  'palm frond weaving Abu Dhabi',
  'Emirati palm weaving',
  'date palm craft UAE',
  'UAE heritage crafts',
  'Abu Dhabi heritage',
  'Emirati traditional crafts',
  'Bint Saeed heritage',
].join(', ')

/**
 * Indexable Al Khous heritage chapter, soft discovery (not primary nav).
 */
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const meta = getResolvedRoutePageMeta(locale, PATH)
  const title = brandDocumentTitle(meta.title)
  const description = clipMetaDescription(meta.description, 200)
  const canonical = absoluteCanonicalForLocaleRoute(locale, PATH)
  const copy = getKhousPageCopy(locale)

  return {
...sectionRobotsMetadata,
    title: { absolute: title },
    description,
    keywords: KEYWORDS_EN,
    category: 'heritage',
    alternates: {
      canonical,
      types: { 'text/plain': LLMS_BRIEF },
    },
    openGraph: {
      title: brandDocumentTitle(meta.ogTitle),
      description,
      url: canonical,
      type: 'article',
      authors: ['Bint Saeed'],
      section: 'Heritage',
      tags: ['Al Khous', 'Khous', 'Emirati heritage', 'Abu Dhabi', 'UAE'],
      images: [{ url: ogImage, alt: `${copy.heroTitle}, Emirati palm-frond weaving` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: brandDocumentTitle(meta.ogTitle),
      description,
      images: [ogImage],
    },
    other: {
      'ai:topic': 'Al Khous, Emirati palm-frond weaving, UAE heritage crafts, Abu Dhabi',
      'ai:entity': 'Al Khous; Khous; الخوص; palm frond weaving; Emirati craft; Abu Dhabi; UAE; Bint Saeed',
      'ai:place': 'Abu Dhabi, United Arab Emirates',
      'ai:citation': LLMS_BRIEF,
    },
  }
}

export default function KhousLayout({ children }: { children: React.ReactNode }) {
  return children
}
