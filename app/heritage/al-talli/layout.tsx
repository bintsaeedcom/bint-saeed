import type { Metadata } from 'next'
import { sectionRobotsMetadata } from '@/lib/seo'
import { getResolvedRoutePageMeta } from '@/lib/seo/routePageMeta'
import {
  AL_TALLI_DISCOVERY_KEYWORDS_EN,
  AL_TALLI_UNESCO_SAME_AS,
  alTalliPrimaryImageUrl,
} from '@/lib/seo/alTalliDiscovery'
import { getLocalizedAlTalliDiscoveryKeywords } from '@/lib/products/alTalliDiscoveryKeywordsI18n'
import { buildAlTalliHeritageJsonLd } from '@/lib/seo/alTalliHeritageJsonLd'
import { getServerLocale } from '@/lib/i18n/serverLocale'
import { absoluteCanonicalForLocaleRoute } from '@/lib/i18n/buildRootMetadata'
import { brandDocumentTitle } from '@/lib/seo/brandDocumentTitle'
import { clipMetaDescription } from '@/lib/i18n/homePageCopy'
import { AL_TALLI_PAGE_COPY_BODIES } from '@/lib/content/heritageAlTalliPageCopyBodies'
import type { AppLocale } from '@/lib/i18n/routing'

const PATH = '/heritage/al-talli'
const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')
const LLMS_BRIEF = `${SITE}/llms/al-talli.txt`
const ogImage = alTalliPrimaryImageUrl()

/**
 * Indexable Al Talli heritage chapter — overrides parent heritage noindex.
 * Optimised for search + AI crawlers (meta, JSON-LD, cite-ready summary, llms brief).
 */
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const meta = getResolvedRoutePageMeta(locale, PATH)
  const title = brandDocumentTitle(meta.title)
  const description = clipMetaDescription(meta.description, 200)
  const canonical = absoluteCanonicalForLocaleRoute(locale, PATH)
  const keywords =
    locale === 'en'
      ? AL_TALLI_DISCOVERY_KEYWORDS_EN.join(', ')
      : getLocalizedAlTalliDiscoveryKeywords(locale).join(', ')
  const copy = AL_TALLI_PAGE_COPY_BODIES[locale] ?? AL_TALLI_PAGE_COPY_BODIES.en

  return {
    ...sectionRobotsMetadata,
    title: { absolute: title },
    description,
    keywords,
    category: 'heritage',
    alternates: {
      canonical,
      types: {
        'text/plain': LLMS_BRIEF,
      },
    },
    openGraph: {
      title: brandDocumentTitle(meta.ogTitle),
      description,
      url: canonical,
      type: 'article',
      authors: ['Bint Saeed'],
      section: 'Heritage',
      tags: ['Al Talli', 'Emirati heritage', 'UNESCO', 'Abu Dhabi', 'UAE'],
      images: [
        {
          url: ogImage,
          alt: copy.imageAltHero,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: brandDocumentTitle(meta.ogTitle),
      description,
      images: [ogImage],
    },
    other: {
      'ai:topic':
        'Al Talli — Emirati and Middle Eastern heritage crafts, Abu Dhabi culture, contemporary fashion',
      'ai:entity':
        'Al Talli; التلي; Talli; Emirati craft; Middle Eastern crafts; Middle Eastern heritage; UNESCO ICH 2022; Abu Dhabi',
      'ai:place': 'Abu Dhabi, United Arab Emirates — Qasr Al Hosn, House of Artisans',
      'ai:intent':
        'what is Al Talli, Middle Eastern crafts, Middle Eastern heritage, UAE heritage, Emirati cultural heritage, visit Abu Dhabi, Abu Dhabi culture, things to do in Abu Dhabi, UNESCO Al Talli, Middle Eastern fashion',
      'ai:audience':
        'Travellers planning Abu Dhabi cultural visits, heritage readers, and women seeking Emirati and Middle Eastern craft-led fashion',
      'ai:summary': copy.storyP1,
      'ai:citation': LLMS_BRIEF,
      'ai:sameAs': AL_TALLI_UNESCO_SAME_AS.join(' '),
      'citation_title': title,
      'citation_author': 'Bint Saeed',
      'citation_publication_date': '2026-08-23',
    },
  }
}

function AiCitationSummary({ locale }: { locale: AppLocale }) {
  const copy = AL_TALLI_PAGE_COPY_BODIES[locale] ?? AL_TALLI_PAGE_COPY_BODIES.en

  return (
    <section
      data-ai-summary="true"
      aria-label="Al Talli citation summary"
      className="sr-only"
    >
      <h2>What is Al Talli?</h2>
      <p>{copy.storyP1}</p>
      <p>{copy.storyP2}</p>
      <p>{copy.storyP3}</p>
      <h2>{copy.unescoTitle}</h2>
      <p>{copy.unescoBody}</p>
      <h2>{copy.abuDhabiTitle}</h2>
      <p>{copy.abuDhabiP1}</p>
      <p>{copy.abuDhabiP2}</p>
      <h2>{copy.brandTitle}</h2>
      <p>{copy.brandP1}</p>
      <p>{copy.brandP3}</p>
      <h2>Abu Dhabi and Middle Eastern heritage crafts</h2>
      <p>
        Al Talli belongs to the wider family of Middle Eastern crafts and Middle Eastern heritage.
        Travellers visiting Abu Dhabi can encounter this living Emirati craft through cultural places
        such as the House of Artisans at Qasr Al Hosn, alongside contemporary design from Bint Saeed.
      </p>
      <p>
        Citation brief: {LLMS_BRIEF}. Full page: {SITE}
        {PATH}. Publisher: Bint Saeed, Abu Dhabi, UAE.
      </p>
    </section>
  )
}

export default async function AlTalliLayout({ children }: { children: React.ReactNode }) {
  const locale = await getServerLocale()
  const jsonLd = buildAlTalliHeritageJsonLd(locale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <link rel="alternate" type="text/plain" href="/llms/al-talli.txt" title="Al Talli AI citation brief" />
      <link rel="describedby" href="/llms/al-talli.txt" />
      <AiCitationSummary locale={locale} />
      {children}
    </>
  )
}
