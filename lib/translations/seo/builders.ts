import type { FaqPair, SeoSupplementalBundle } from './types'
import { GCC_STORE_ADDRESS_BY_ID } from './gccStoreAddresses'

const BRAND_NAME = 'Bint Saeed'

export function faqPairsToQuestionNodes(pairs: FaqPair[]): Record<string, unknown>[] {
  return pairs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  }))
}

export function buildGccClothingStoresJsonLd(siteUrl: string, bundle: SeoSupplementalBundle): Record<string, unknown>[] {
  return bundle.gccStores.map((store) => {
    const geo = GCC_STORE_ADDRESS_BY_ID[store.id]
    return {
      '@context': 'https://schema.org',
      '@type': 'ClothingStore',
      '@id': `${siteUrl}#local-business-${store.id}`,
      name: store.name,
      alternateName: store.alternateNames,
      description: store.description,
      url: siteUrl,
      image: `${siteUrl}/og-image.png`,
      logo: `${siteUrl}/logo.png`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: geo.addressLocality,
        addressRegion: geo.addressRegion,
        addressCountry: geo.addressCountry,
      },
      areaServed: {
        '@type': 'City',
        name: geo.areaServedCity,
        containedIn: {
          '@type': 'Country',
          name: geo.areaServedCountry,
        },
      },
      priceRange: '$$$$',
    }
  })
}

export function buildGccGovernmentBrandJsonLd(siteUrl: string, bundle: SeoSupplementalBundle): Record<string, unknown> {
  const b = bundle.gccGovBrand
  return {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    '@id': `${siteUrl}#brand-gcc-media-seo`,
    name: BRAND_NAME,
    alternateName: b.alternateNames,
    slogan: b.slogan,
    description: b.description,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
  }
}

export function buildPressBrandJsonLd(siteUrl: string, bundle: SeoSupplementalBundle): Record<string, unknown> {
  const b = bundle.pressBrand
  return {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    '@id': `${siteUrl}#brand-press-seo`,
    name: BRAND_NAME,
    alternateName: b.alternateNames,
    description: b.description,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    slogan: b.slogan,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: b.contactType,
      email: 'info@bintsaeed.com',
      availableLanguage: b.availableLanguages,
      areaServed: 'Worldwide',
    },
  }
}

export function buildMediaKitJsonLd(siteUrl: string, bundle: SeoSupplementalBundle): Record<string, unknown> {
  const m = bundle.mediaKit
  return {
    '@context': 'https://schema.org',
    '@type': 'MediaObject',
    '@id': `${siteUrl}#media-kit-press`,
    name: m.name,
    description: m.description,
    contentUrl: `${siteUrl}/press/media-kit`,
    encodingFormat: 'application/pdf',
    publisher: {
      '@type': 'Organization',
      name: BRAND_NAME,
      url: siteUrl,
    },
  }
}
