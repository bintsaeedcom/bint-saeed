import type { Metadata } from 'next'
import { sectionRobotsMetadata } from '@/lib/seo'
import { getResolvedRoutePageMeta } from '@/lib/seo/routePageMeta'
import { getHeritageHubDiscoveryKeywords, heritageHubPageUrl, heritageHubPrimaryImageUrl, HERITAGE_HUB_PATH } from '@/lib/seo/heritageHubDiscovery'
import { getLocalizedHeritageHubFashionKeywords } from '@/lib/seo/heritageHubDiscoveryKeywordsI18n'
import { buildHeritageHubJsonLd } from '@/lib/seo/heritageHubJsonLd'
import { getHeritageHubEditorial } from '@/lib/content/heritageHubEditorialI18n'
import { getHeritagePageCopy } from '@/lib/content/heritagePageCopyI18n'
import { getHeritageHubDiscoveryNav } from '@/lib/content/heritageHubDiscoveryNavI18n'
import { getServerLocale } from '@/lib/i18n/serverLocale'
import { absoluteCanonicalForLocaleRoute } from '@/lib/i18n/buildRootMetadata'
import { brandDocumentTitle } from '@/lib/seo/brandDocumentTitle'
import { clipMetaDescription } from '@/lib/i18n/homePageCopy'
import type { AppLocale } from '@/lib/i18n/routing'

const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')
const LLMS_BRIEF = `${SITE}/llms/heritage.txt`
const ogImage = heritageHubPrimaryImageUrl()

/**
 * Indexable heritage hub, soft discovery (not primary nav), optimised for Google + AI crawlers.
 * Child chapters `/heritage/khous` and `/heritage/sadu` keep noindex until approved.
 * `/heritage/al-talli` has its own indexable layout.
 */
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const meta = getResolvedRoutePageMeta(locale, HERITAGE_HUB_PATH)
  const title = brandDocumentTitle(meta.title)
  const description = clipMetaDescription(meta.description, 200)
  const canonical = absoluteCanonicalForLocaleRoute(locale, HERITAGE_HUB_PATH)
  const keywords = getHeritageHubDiscoveryKeywords(locale).join(', ')
  const fashionKeywords = getLocalizedHeritageHubFashionKeywords(locale).join(', ')
  const editorial = getHeritageHubEditorial(locale)

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
      tags: [
        'UAE heritage',
        'UAE cultural heritage',
        'Emirati heritage',
        'Abu Dhabi culture',
        'Abu Dhabi fashion',
        'Al Talli',
        'Al Khous',
        'Sadu',
        'Battoulah',
        'Abu Dhabi',
        'United Arab Emirates',
      ],
      images: [
        {
          url: ogImage,
          alt: editorial.heroImageAlt,
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
        'UAE cultural heritage, Abu Dhabi culture, Emirati crafts Al Talli, Al Khous, Sadu, battoulah gold mask, Abu Dhabi fashion house',
      'ai:entity':
        'UAE heritage; UAE cultural heritage; Emirati heritage; Abu Dhabi culture; Abu Dhabi fashion; UAE fashion brands; Al Talli; التلي; Al Khous; الخوص; Sadu; السدو; Battoulah; Batula; البرقع الذهبي; gold burqa mask; Abu Dhabi; United Arab Emirates; Bint Saeed',
      'ai:place': 'Abu Dhabi, United Arab Emirates; Gulf region; Dubai (UAE fashion context)',
      'ai:intent':
        'UAE heritage, UAE cultural heritage, Abu Dhabi culture, Abu Dhabi fashion house, Abu Dhabi fashion, UAE traditions, UAE culture, Emirati fashion, heritage fashion Abu Dhabi, Al Talli, Al Khous, Sadu weaving, battoulah, visit Abu Dhabi culture',
      'ai:discovery': fashionKeywords,
      'ai:audience':
        'Travellers seeking Abu Dhabi and UAE cultural context, heritage readers, and women interested in Emirati craft-led fashion',
      'ai:summary': editorial.aiCitationLead,
      'ai:citation': LLMS_BRIEF,
      'citation_title': title,
      'citation_author': 'Bint Saeed',
      'citation_publication_date': '2026-08-27',
    },
  }
}

function AiCitationSummary({ locale }: { locale: AppLocale }) {
  const copy = getHeritagePageCopy(locale)
  const editorial = getHeritageHubEditorial(locale)
  const url = heritageHubPageUrl(locale)
  const discovery = getHeritageHubDiscoveryNav(locale)

  return (
    <section
      data-ai-summary="true"
      aria-label="UAE heritage citation summary"
      className="sr-only"
    >
      <h2>{copy.heroTitle} {copy.heroTitleAccent}</h2>
      <p>{editorial.aiCitationLead}</p>
      <p>{editorial.introP1}</p>
      <p>{editorial.introP2}</p>
      <p>{editorial.introP3}</p>
      <h2>Al Talli</h2>
      <p>{editorial.termAlTalli}</p>
      <h2>Al Khous</h2>
      <p>{editorial.termAlKhous}</p>
      <h2>Sadu</h2>
      <p>{editorial.termSadu}</p>
      <h2>Battoulah: gold burqa mask</h2>
      <p>{editorial.termBattoulah}</p>
      <p>{editorial.battoulahP1}</p>
      <nav aria-hidden="true" aria-label="Heritage discovery">
        {discovery.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <p>
        Citation brief: {LLMS_BRIEF}. Full page: {url}. Publisher: Bint Saeed, Abu Dhabi, UAE.
      </p>
    </section>
  )
}

export default async function HeritageLayout({ children }: { children: React.ReactNode }) {
  const locale = await getServerLocale()
  const jsonLd = buildHeritageHubJsonLd(locale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <link rel="alternate" type="text/plain" href="/llms/heritage.txt" title="UAE Heritage AI citation brief" />
      <link rel="describedby" href="/llms/heritage.txt" />
      <AiCitationSummary locale={locale} />
      {children}
    </>
  )
}
