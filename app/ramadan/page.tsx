import type { Metadata } from 'next'
import LocaleLink from '@/components/LocaleLink'
import RamadanEditGrid from '@/components/ramadan/RamadanEditGrid'
import { products as staticProducts } from '@/data/products'
import { sectionRobotsMetadata } from '@/lib/seo'
import { brandDocumentTitle } from '@/lib/seo/brandDocumentTitle'
import { getServerLocale } from '@/lib/i18n/serverLocale'
import { localizedPath, type AppLocale } from '@/lib/i18n/routing'
import { hreflangKeyForLocale, schemaInLanguageForLocale } from '@/lib/i18n/bcp47'
import { getLocalizedProductDisplayName } from '@/lib/products/productDisplayNameI18n'
import { getProductHref } from '@/lib/products/links'
import { areAllColorsSoldOut } from '@/lib/products/garmentStock'
import { getProductColorOptions } from '@/lib/products/productColorAvailability'
import {
  EDITORIAL_PAGE_CONTAINER,
  EDITORIAL_PAGE_SHELL,
  SITE_CONTENT_TOP_PAD,
} from '@/lib/ui/editorialPageChrome'
import {
  RAMADAN_EDIT_SLUGS,
  RAMADAN_LOCALES,
  RAMADAN_PATH,
  getRamadanEditCopy,
  isRamadanLocale,
} from '@/lib/content/ramadanEdit'

const SITE = 'https://www.bintsaeed.com'

const OG_LOCALE: Record<string, string> = {
  en: 'en_AE',
  ar: 'ar_AE',
  fr: 'fr_FR',
  it: 'it_IT',
  nl: 'nl_NL',
}

/** Locales without a Ramadan pack render English and canonicalise to the English page. */
function contentLocale(locale: AppLocale): AppLocale {
  return isRamadanLocale(locale) ? locale : 'en'
}

function pageUrl(locale: AppLocale): string {
  return `${SITE}${localizedPath(locale, RAMADAN_PATH)}`
}

function hreflangLanguages(): Record<string, string> {
  const languages: Record<string, string> = { 'x-default': pageUrl('en') }
  for (const locale of RAMADAN_LOCALES) languages[hreflangKeyForLocale(locale)] = pageUrl(locale)
  return languages
}

function availableEditSlugs(): string[] {
  return RAMADAN_EDIT_SLUGS.filter((slug) => {
    const product = staticProducts.find((p) => p.slug === slug)
    return product ? !areAllColorsSoldOut(product, getProductColorOptions(product)) : false
  })
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = contentLocale(await getServerLocale())
  const copy = getRamadanEditCopy(locale)
  const title = brandDocumentTitle(copy.metaTitle)
  const url = pageUrl(locale)

  return {
    ...sectionRobotsMetadata,
    title: { absolute: title },
    description: copy.metaDescription,
    keywords: [...copy.keywords],
    alternates: { canonical: url, languages: hreflangLanguages() },
    openGraph: {
      title,
      description: copy.metaDescription,
      url,
      type: 'website',
      siteName: 'Bint Saeed',
      locale: OG_LOCALE[locale] ?? 'en_AE',
      images: [{ url: `${SITE}/og-share.jpg`, width: 1200, height: 675, alt: copy.metaTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: copy.metaDescription,
      images: [`${SITE}/og-share.jpg`],
    },
    other: {
      'ai:topic': 'Ramadan collection — luxury abayas, kaftans, dresses and sets for Ramadan and Eid',
      'ai:intent':
        'Ramadan abaya, Ramadan kaftan, Ramadan outfits, iftar outfit, Eid abaya, luxury modest fashion, designer abaya brand',
      'ai:audience': 'Women dressing for Ramadan evenings, iftar, suhoor gatherings and Eid in the GCC, Europe and worldwide',
      'ai:brand': 'Bint Saeed',
      'ai:location': 'Abu Dhabi, United Arab Emirates',
    },
  }
}

export default async function RamadanEditPage() {
  const locale = contentLocale(await getServerLocale())
  const copy = getRamadanEditCopy(locale)
  const url = pageUrl(locale)
  const slugs = availableEditSlugs()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${url}#webpage`,
        url,
        name: copy.metaTitle,
        description: copy.metaDescription,
        inLanguage: schemaInLanguageForLocale(locale),
        isPartOf: { '@id': `${SITE}/#website` },
        publisher: { '@id': `${SITE}/#organization` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
        keywords: copy.keywords.join(', '),
        about: ['Ramadan', 'Eid', 'abaya', 'kaftan', 'modest fashion'],
        mainEntity: {
          '@type': 'ItemList',
          name: copy.gridHeading,
          numberOfItems: slugs.length,
          itemListElement: slugs.map((slug, index) => {
            const product = staticProducts.find((p) => p.slug === slug)!
            return {
              '@type': 'ListItem',
              position: index + 1,
              name: getLocalizedProductDisplayName(product, locale),
              url: `${SITE}${localizedPath(locale, getProductHref(product))}`,
            }
          }),
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: copy.breadcrumbHome,
            item: `${SITE}${localizedPath(locale, '/home')}`,
          },
          { '@type': 'ListItem', position: 2, name: copy.eyebrow, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        inLanguage: schemaInLanguageForLocale(locale),
        mainEntity: copy.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  }

  return (
    <main className={`${EDITORIAL_PAGE_SHELL} bg-brand-pageCanvas text-neutral-900`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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

        {slugs.length > 0 ? (
          <section className="mt-16 border-t border-black/10 pt-12 md:mt-20">
            <h2 className="mb-8 font-rozha text-2xl text-brand-darkRed md:mb-10 md:text-3xl">{copy.gridHeading}</h2>
            <RamadanEditGrid slugs={slugs} />
          </section>
        ) : null}

        <section className="mt-16 max-w-2xl border-t border-black/10 pt-12 md:mt-20">
          <h2 className="font-rozha text-2xl text-brand-darkRed md:text-3xl">{copy.faqHeading}</h2>
          <dl className="mt-8 space-y-8">
            {copy.faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-montserrat text-sm font-medium tracking-wide text-brand-darkRed">
                  {faq.question}
                </dt>
                <dd className="mt-2 font-montserrat text-sm leading-relaxed text-neutral-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <p className="mt-14">
          <LocaleLink
            href="/shop"
            className="inline-flex font-montserrat text-[11px] uppercase tracking-[0.22em] text-brand-darkRed underline decoration-brand-darkRed/25 underline-offset-8 transition-colors hover:decoration-brand-darkRed"
          >
            {copy.shopCta}
          </LocaleLink>
        </p>
      </div>
    </main>
  )
}
