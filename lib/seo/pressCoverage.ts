/**
 * Verified third-party press / editorial coverage — hidden SEO entity links only.
 * Do not invent publications; add URLs only when a live article exists.
 */

export const PRESS_COVERAGE_NLR = {
  url: 'https://natlawreview.com/press-releases/bint-saeed-introduces-contemporary-fashion-house-inspired-emirati-heritage',
  headline:
    'Bint Saeed Introduces a Contemporary Fashion House Inspired by Emirati Heritage and Modern Design',
  datePublished: '2026-07-29',
  publisherName: 'National Law Review',
  publisherUrl: 'https://www.natlawreview.com',
  /** EIN Presswire syndication mentioned on the NLR page. */
  distribution: 'EIN Presswire',
} as const

/** Absolute URLs safe for Organization / Brand `sameAs` (profiles + verified coverage). */
export const ORGANIZATION_SAME_AS = [
  'https://www.instagram.com/bintsaeed_brand/',
  'https://www.facebook.com/people/Bint-Saeed-Brand/61591994098533/',
  'https://www.youtube.com/@BintSaeed_Brand',
  'https://www.tiktok.com/@bintsaeed_brand',
  'https://www.snapchat.com/add/bintsaeed_brand',
  'https://x.com/bintsaeed_brand',
  'https://www.pinterest.com/bintsaeed_brand/',
  PRESS_COVERAGE_NLR.url,
] as const

const SITE = 'https://www.bintsaeed.com'

/**
 * NewsArticle for the verified NLR / EIN Presswire release — linked to the house Organization.
 * Emitted in the supplemental @graph (not visible UI).
 */
export function buildPressCoverageNewsArticleJsonLd(): Record<string, unknown> {
  const c = PRESS_COVERAGE_NLR
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `${SITE}/#press-nlr-2026-07-29`,
    url: c.url,
    mainEntityOfPage: c.url,
    headline: c.headline,
    datePublished: c.datePublished,
    dateModified: c.datePublished,
    inLanguage: 'en',
    isAccessibleForFree: true,
    about: { '@id': `${SITE}/#organization` },
    mentions: [
      { '@type': 'Brand', name: 'Bint Saeed', url: SITE },
      { '@type': 'Thing', name: 'Al Talli' },
      { '@type': 'Thing', name: 'Al Khous' },
      { '@type': 'Thing', name: 'Al Ain Rosette' },
      { '@type': 'Thing', name: 'Signature Strands' },
    ],
    publisher: {
      '@type': 'Organization',
      name: c.publisherName,
      url: c.publisherUrl,
    },
    description:
      'Press coverage of Bint Saeed, the Abu Dhabi contemporary fashion house: Emirati heritage codes (Al Talli, Al Khous, Al Ain Rosette), Signature Strands modular garment jewellery, personalisation, and Giving Forward — published via National Law Review / EIN Presswire.',
  }
}
