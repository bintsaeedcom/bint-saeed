import {
  absoluteCodesPageImageUrl,
  CODES_HERO,
  THE_CODES_SECTIONS,
} from '@/lib/the-codes/codesPageContent'
import type { AppLocale } from '@/lib/i18n/routing'
import { localizedPath } from '@/lib/i18n/routing'
import { schemaInLanguageForLocale } from '@/lib/i18n/bcp47'

const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')
function buildImageObject(fileName: string, alt: string, name: string) {
  const url = absoluteCodesPageImageUrl(fileName)
  return {
    '@type': 'ImageObject' as const,
    '@id': `${url}#image`,
    url,
    contentUrl: url,
    name,
    caption: alt,
    description: alt,
    representativeOfPage: false,
  }
}

/** WebPage + ImageObject schema for `/the-codes` heritage editorial. */
export function buildTheCodesJsonLd(locale: AppLocale = 'en') {
  const pagePath = localizedPath(locale, '/the-codes')
  const pageUrl = `${SITE}${pagePath}`
  const lang = schemaInLanguageForLocale(locale)
  const heroImage = buildImageObject(CODES_HERO.file, CODES_HERO.alt, 'The Codes — hero')

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: 'The Codes | Bint Saeed',
    description:
      'The house codes — Al Talli, Al Khous, Al Ain Rosette, Knotted Lines, and the monogram — told in one continuous story from Abu Dhabi, UAE.',
    inLanguage: lang,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      name: 'Bint Saeed',
      url: SITE,
    },
    about: {
      '@type': 'Thing',
      name: 'Emirati heritage design codes',
      description:
        'Al Talli embroidery, Al Khous weaving, Al Ain Rosette, Knotted Lines of Lineage, and the Bint Saeed monogram.',
    },
    primaryImageOfPage: heroImage,
    image: [
      heroImage,
      ...THE_CODES_SECTIONS.map((section) =>
        buildImageObject(section.imageFile, section.imageAlt, section.title),
      ),
    ],
    hasPart: THE_CODES_SECTIONS.map((section) => ({
      '@type': 'Article',
      '@id': `${pageUrl}#${section.id}`,
      headline: section.title,
      description: section.paragraphs.join(' '),
      url: `${pageUrl}#${section.id}`,
      image: buildImageObject(section.imageFile, section.imageAlt, section.title),
      inLanguage: lang,
      isPartOf: { '@id': `${pageUrl}#webpage` },
      author: {
        '@type': 'Organization',
        name: 'Bint Saeed',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Bint Saeed',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Abu Dhabi',
          addressCountry: 'AE',
        },
      },
    })),
  }
}
