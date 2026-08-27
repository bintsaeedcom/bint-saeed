import type { Metadata } from 'next'
import { sectionRobotsMetadata } from '@/lib/seo'
import { getResolvedRoutePageMeta } from '@/lib/seo/routePageMeta'
import { getServerLocale } from '@/lib/i18n/serverLocale'
import { absoluteCanonicalForLocaleRoute } from '@/lib/i18n/buildRootMetadata'
import { brandDocumentTitle } from '@/lib/seo/brandDocumentTitle'
import { clipMetaDescription } from '@/lib/i18n/homePageCopy'
import { HERITAGE_SADU_IMAGES } from '@/lib/content/heritagePageMedia'
import { getSaduPageCopy } from '@/lib/content/heritageSaduCopyI18n'

const PATH = '/heritage/sadu'
const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')
const LLMS_BRIEF = `${SITE}/llms/heritage.txt`
const ogImage = `${SITE}${HERITAGE_SADU_IMAGES.hero}`
const SADU_UNESCO =
  'https://ich.unesco.org/en/RL/al-sadu-traditional-weaving-skills-in-the-united-arab-emirates-02223'

const KEYWORDS_EN = [
  'Sadu',
  'Al Sadu',
  'السدو',
  'Sadu weaving',
  'Bedouin weaving UAE',
  'UNESCO Sadu',
  'UNESCO Al Sadu',
  'Emirati Sadu',
  'Abu Dhabi heritage',
  'UAE cultural heritage',
  'desert weaving',
  'Bint Saeed heritage',
].join(', ')

/**
 * Indexable Sadu heritage chapter, soft discovery (not primary nav).
 */
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const meta = getResolvedRoutePageMeta(locale, PATH)
  const title = brandDocumentTitle(meta.title)
  const description = clipMetaDescription(meta.description, 200)
  const canonical = absoluteCanonicalForLocaleRoute(locale, PATH)
  const copy = getSaduPageCopy(locale)

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
      tags: ['Sadu', 'Al Sadu', 'UNESCO', 'Emirati heritage', 'Abu Dhabi', 'UAE'],
      images: [{ url: ogImage, alt: `${copy.heroTitle}, Emirati Bedouin weaving` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: brandDocumentTitle(meta.ogTitle),
      description,
      images: [ogImage],
    },
    other: {
      'ai:topic': 'Sadu / Al Sadu, Bedouin weaving, UAE UNESCO heritage, Abu Dhabi',
      'ai:entity': 'Sadu; Al Sadu; السدو; Bedouin weaving; UNESCO; Emirati craft; Abu Dhabi; UAE; Bint Saeed',
      'ai:place': 'Abu Dhabi, United Arab Emirates',
      'ai:sameAs': SADU_UNESCO,
      'ai:citation': LLMS_BRIEF,
    },
  }
}

export default function SaduLayout({ children }: { children: React.ReactNode }) {
  return children
}
