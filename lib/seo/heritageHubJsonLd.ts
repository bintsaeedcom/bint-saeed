import type { AppLocale } from '@/lib/i18n/routing'
import {
  heritageHubPageUrl,
  heritageHubPrimaryImageUrl,
  getHeritageHubDiscoveryKeywords,
} from '@/lib/seo/heritageHubDiscovery'
import { schemaInLanguageForLocale } from '@/lib/i18n/bcp47'
import { getHeritageHubEditorial } from '@/lib/content/heritageHubEditorialI18n'
import { getHeritagePageCopy } from '@/lib/content/heritagePageCopyI18n'
import { clipMetaDescription } from '@/lib/i18n/homePageCopy'

const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

export function buildHeritageHubJsonLd(locale: AppLocale) {
  const editorial = getHeritageHubEditorial(locale)
  const copy = getHeritagePageCopy(locale)
  const url = heritageHubPageUrl(locale)
  const image = heritageHubPrimaryImageUrl()
  const description = clipMetaDescription(
    `${copy.heroLead} ${editorial.introP1}`.replace(/\s+/g, ' ').trim(),
    320,
  )
  const keywords = getHeritageHubDiscoveryKeywords(locale).slice(0, 40)

  const definedTerms = [
    {
      '@type': 'DefinedTerm',
      name: 'Al Talli',
      alternateName: ['التلي', 'Talli', 'Al-Talli'],
      description: editorial.termAlTalli,
      url: `${SITE}/heritage/al-talli`,
      inDefinedTermSet: 'Emirati heritage crafts',
    },
    {
      '@type': 'DefinedTerm',
      name: 'Al Khous',
      alternateName: ['الخوص', 'Khous', 'Khous weaving'],
      description: editorial.termAlKhous,
      url: `${SITE}/heritage/khous`,
      inDefinedTermSet: 'Emirati heritage crafts',
    },
    {
      '@type': 'DefinedTerm',
      name: 'Sadu',
      alternateName: ['السدو', 'Al Sadu', 'Sadu weaving'],
      description: editorial.termSadu,
      url: `${SITE}/heritage/sadu`,
      inDefinedTermSet: 'Emirati heritage crafts',
    },
    {
      '@type': 'DefinedTerm',
      name: 'Battoulah',
      alternateName: ['Batula', 'البرقع الذهبي', 'gold burqa mask', 'Emirati gold mask'],
      description: editorial.termBattoulah,
      inDefinedTermSet: 'Gulf women’s heritage dress',
    },
  ]

  const faqEntities = editorial.faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  }))

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: `${copy.heroTitle} ${copy.heroTitleAccent}`.trim(),
        description,
        inLanguage: schemaInLanguageForLocale(locale),
        isPartOf: { '@id': `${SITE}/#website` },
        about: { '@id': `${url}#uae-heritage` },
        primaryImageOfPage: { '@id': `${url}#primaryimage` },
        keywords: keywords.join(', '),
        publisher: {
          '@type': 'Organization',
          name: 'Bint Saeed',
          url: SITE,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Abu Dhabi',
            addressCountry: 'AE',
          },
        },
      },
      {
        '@type': 'ImageObject',
        '@id': `${url}#primaryimage`,
        url: image,
        contentUrl: image,
        caption: editorial.heroImageAlt,
      },
      {
        '@type': 'Thing',
        '@id': `${url}#uae-heritage`,
        name: 'United Arab Emirates cultural heritage',
        alternateName: ['UAE heritage', 'Emirati heritage', 'تراث الإمارات'],
        description: editorial.introP1,
        sameAs: [
          'https://ich.unesco.org/en/RL/al-talli-embroidery-tradition-01985',
          'https://ich.unesco.org/en/RL/al-sadu-traditional-weaving-skills-in-the-united-arab-emirates-02223',
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${url}#crafts`,
        name: editorial.craftsHeading,
        itemListElement: definedTerms.map((term, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: term,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: faqEntities,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE}/home`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: copy.navLabel,
            item: url,
          },
        ],
      },
    ],
  }
}
