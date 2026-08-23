import type { Metadata } from 'next'
import Link from 'next/link'
import { sectionRobotsMetadata } from '@/lib/seo'
import { getServerLocale } from '@/lib/i18n/serverLocale'
import { getResolvedRoutePageMeta } from '@/lib/seo/routePageMeta'
import { brandDocumentTitle } from '@/lib/seo/brandDocumentTitle'
import { clipMetaDescription } from '@/lib/i18n/homePageCopy'
import {
  EDITORIAL_PAGE_CONTAINER,
  EDITORIAL_PAGE_SHELL,
  SITE_CONTENT_TOP_PAD,
} from '@/lib/ui/editorialPageChrome'
import {
  REGIONAL_DRESSING_CONTENT,
  REGIONAL_DRESSING_META_KEYWORDS,
  REGIONAL_DRESSING_PATH,
} from '@/lib/content/regionalDressingContent'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const meta = getResolvedRoutePageMeta(locale, REGIONAL_DRESSING_PATH)
  const title = brandDocumentTitle(meta.title)
  const description = clipMetaDescription(meta.description, 200)

  return {
    ...sectionRobotsMetadata,
    title: { absolute: title },
    description,
    keywords: [...REGIONAL_DRESSING_META_KEYWORDS],
    alternates: { canonical: REGIONAL_DRESSING_PATH },
    openGraph: {
      title,
      description,
      url: REGIONAL_DRESSING_PATH,
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    other: {
      'ai:topic': 'Dressing for the Middle East — modest travel and regional style notes',
      'ai:intent':
        'what to wear in the Middle East, Middle Eastern styles, UAE dress guidance, contemporary abaya',
      'ai:audience': 'Women travelling to or dressing for the Gulf and Middle East',
    },
  }
}

function buildFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: REGIONAL_DRESSING_CONTENT.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

function buildWebPageJsonLd(description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: REGIONAL_DRESSING_CONTENT.title,
    description,
    url: `https://www.bintsaeed.com${REGIONAL_DRESSING_PATH}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Bint Saeed',
      url: 'https://www.bintsaeed.com',
    },
    about: [
      'Middle Eastern styles',
      'what to wear in the Middle East',
      'modest fashion',
      'UAE dress etiquette',
    ],
  }
}

export default async function DressingForTheMiddleEastPage() {
  const locale = await getServerLocale()
  const meta = getResolvedRoutePageMeta(locale, REGIONAL_DRESSING_PATH)
  const description = clipMetaDescription(meta.description, 200)
  const copy = REGIONAL_DRESSING_CONTENT

  return (
    <main className={`${EDITORIAL_PAGE_SHELL} bg-brand-pageCanvas text-neutral-900`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebPageJsonLd(description)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd()) }}
      />

      <div className={`${EDITORIAL_PAGE_CONTAINER} ${SITE_CONTENT_TOP_PAD} pb-20 md:pb-28`}>
        <p className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.28em] text-brand-dustyBlue">
          {copy.eyebrow}
        </p>
        <h1
          data-document-h1="true"
          className="max-w-3xl font-rozha text-[clamp(2.25rem,6vw,4.25rem)] font-normal leading-[1.05] tracking-[0.01em] text-brand-darkRed"
        >
          {copy.title}
        </h1>
        <p className="mt-6 max-w-2xl font-montserrat text-sm leading-relaxed tracking-wide text-neutral-600 md:text-base">
          {copy.lead}
        </p>

        <div className="mt-14 space-y-12 md:mt-16 md:space-y-16">
          {copy.sections.map((section) => (
            <section key={section.heading} className="max-w-2xl">
              <h2 className="font-rozha text-2xl text-brand-darkRed md:text-3xl">{section.heading}</h2>
              <div className="mt-4 space-y-4 font-montserrat text-sm leading-relaxed text-neutral-700 md:text-[15px]">
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-16 max-w-2xl border-t border-black/10 pt-12 md:mt-20">
          <h2 className="font-rozha text-2xl text-brand-darkRed md:text-3xl">Questions often asked</h2>
          <dl className="mt-8 space-y-8">
            {copy.faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-montserrat text-sm font-medium tracking-wide text-brand-darkRed">
                  {faq.question}
                </dt>
                <dd className="mt-2 font-montserrat text-sm leading-relaxed text-neutral-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <p className="mt-14">
          <Link
            href={copy.shopHref}
            className="inline-flex font-montserrat text-[11px] uppercase tracking-[0.22em] text-brand-darkRed underline decoration-brand-darkRed/25 underline-offset-8 transition-colors hover:decoration-brand-darkRed"
          >
            {copy.shopCta}
          </Link>
        </p>

        <nav aria-label="Related" className="sr-only">
          <Link href="/shop">Shop luxury abayas</Link>
          <Link href="/the-codes">The Codes</Link>
          <Link href="/about">About Bint Saeed</Link>
          <Link href="/craftsmanship">Craftsmanship</Link>
        </nav>
      </div>
    </main>
  )
}
