import type { Accessory } from '@/data/accessories'
import { accessories } from '@/data/accessories'
import type { AppLocale } from '@/lib/i18n/routing'
import { schemaInLanguageForLocale } from '@/lib/i18n/bcp47'
import { withBrandAlt } from '@/lib/products/imageAlt'
import { buildFaqPageJsonLd } from '@/lib/products/productSchemaMeta'
import { SCHEMA_MANUFACTURER } from '@/lib/products/abayaSchemaShared'
import {
  getGlobalJewelleryDiscoveryKeywords,
  getJewelleryCategoryDiscoveryKeywords,
  mergeAccessorySchemaKeywords,
} from '@/lib/accessories/jewelleryDiscoveryI18n'
import {
  buildSignatureStrandAdditionalProperties,
  buildSignatureStrandSchemaKeywords,
  getSignatureStrandFaq,
  getSignatureStrandSchemaAudience,
  getSignatureStrandSchemaFacts,
} from '@/lib/accessories/signatureStrandSchemaMeta'
import { getStrandSchemaSemanticLabels } from '@/lib/accessories/signatureStrandSchemaSemanticI18n'
import { getStrandPdpContent } from '@/lib/accessories/strandPdp/resolveStrandPdpContent'
import { getSignatureStrandSharedKeywords } from '@/lib/accessories/signatureStrandSchemaKeywordsI18n'
import {
  getNecklaceEarringCarouselAlt,
  getNecklaceEarringPdpAlt,
  getNecklaceEarringPdpPack,
} from '@/lib/accessories/necklaceEarringPdpSeo'
import {
  buildAccessoryProductJsonLd as buildStrandOnlyJsonLd,
  getAccessoryImageAlt as getStrandImageAlt,
  getAccessoryPdpImages,
  getStrandCarouselAlt,
  getStrandPdpPack,
  isStrandAccessory,
} from '@/lib/accessories/strandPdpSeo'

export {
  getAccessoryPdpImages,
  getStrandCarouselAlt,
  isStrandAccessory,
} from '@/lib/accessories/strandPdpSeo'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

const OFFER_AREA_SERVED_COUNTRIES = [
  'United Arab Emirates',
  'Saudi Arabia',
  'Qatar',
  'Kuwait',
  'Bahrain',
  'Oman',
  'United Kingdom',
  'France',
  'Germany',
  'Italy',
  'Spain',
  'Netherlands',
  'Switzerland',
  'Belgium',
  'Portugal',
  'United States',
  'Canada',
  'Australia',
  'Singapore',
  'Malaysia',
  'Indonesia',
  'Brunei',
] as const

const CATEGORY_SCHEMA_LABEL: Record<Accessory['category'], string> = {
  necklaces: 'Necklaces',
  earrings: 'Earrings',
  'signature-strands': 'Signature Strands',
  bracelets: 'Bracelets',
  'bag-strands': 'Bag Strands',
  'phone-strands': 'Phone Strands',
}

export function getAccessoryCarouselAlt(
  accessory: Pick<Accessory, 'id' | 'category' | 'name' | 'nameAr'>,
  locale: AppLocale = 'en',
  isRTL = false,
): string {
  if (isStrandAccessory(accessory)) {
    return getStrandCarouselAlt(accessory.id, locale)
  }
  const packAlt = getNecklaceEarringCarouselAlt(accessory.id, locale)
  if (packAlt) return withBrandAlt(packAlt, locale)
  return withBrandAlt(isRTL ? accessory.nameAr : accessory.name, locale)
}

export function getAccessoryImageAlt(
  accessory: Accessory,
  imageSrc: string,
  imageIndex: number,
  locale: AppLocale = 'en',
): string {
  if (isStrandAccessory(accessory)) {
    return getStrandImageAlt(accessory, imageSrc, imageIndex, locale)
  }
  const packAlt = getNecklaceEarringPdpAlt(accessory.id, imageIndex, locale)
  if (packAlt) return withBrandAlt(packAlt, locale)
  return withBrandAlt(`${accessory.name} — product image ${imageIndex + 1}`, locale)
}

type JsonLdInput = {
  accessory: Accessory
  displayName: string
  description: string
  locale?: AppLocale
  pageUrl: string
}

function relatedProductsForAccessory(accessory: Accessory): Record<string, unknown>[] {
  const strandPack = getStrandPdpPack(accessory.id)
  if (strandPack) {
    return [
      {
        '@type': 'Product',
        name: strandPack.pairing.necklaceLabel,
        url: `https://www.bintsaeed.com/accessories/${strandPack.pairing.necklaceId}`,
      },
      {
        '@type': 'Product',
        name: strandPack.pairing.earringsLabel,
        url: `https://www.bintsaeed.com/accessories/${strandPack.pairing.earringsId}`,
      },
    ]
  }

  const pack = getNecklaceEarringPdpPack(accessory.id)
  if (!pack) return []

  return pack.relatedAccessoryIds
    .map((id) => accessories.find((a) => a.id === id))
    .filter((a): a is Accessory => Boolean(a))
    .map((a) => ({
      '@type': 'Product',
      name: a.name,
      url: `https://www.bintsaeed.com/accessories/${a.id}`,
    }))
}

function productSpecificKeywords(accessory: Accessory, locale: AppLocale): string[] {
  const strandPack = getStrandPdpPack(accessory.id)
  if (strandPack) return strandPack.keywords

  const pack = getNecklaceEarringPdpPack(accessory.id)
  if (pack) return pack.keywords

  return []
}

function additionalPropertiesForAccessory(
  accessory: Accessory,
  displayName: string,
  locale: AppLocale = 'en',
): Record<string, unknown>[] {
  if (isStrandAccessory(accessory)) {
    return buildSignatureStrandAdditionalProperties(accessory, displayName, locale)
  }

  const pack = getNecklaceEarringPdpPack(accessory.id)
  if (pack) {
    const relatedNames = pack.relatedAccessoryIds
      .map((id) => accessories.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .slice(0, 4)
      .join(', ')

    const props: Record<string, unknown>[] = [
      {
        '@type': 'PropertyValue',
        name: 'Collection',
        value: 'Al Ain — Bint Saeed natural stone jewellery',
      },
      {
        '@type': 'PropertyValue',
        name: 'Craft',
        value: 'Handcrafted in Abu Dhabi, United Arab Emirates',
      },
    ]

    if (accessory.category === 'necklaces') {
      props.push({
        '@type': 'PropertyValue',
        name: 'Necklace style',
        value: displayName,
      })
    }
    if (accessory.category === 'earrings') {
      props.push({
        '@type': 'PropertyValue',
        name: 'Earring style',
        value: displayName,
      })
    }
    if (relatedNames) {
      props.push({
        '@type': 'PropertyValue',
        name: 'Pairs well with',
        value: relatedNames,
      })
    }
    return props
  }

  return []
}

function buildOffer(accessory: Accessory, pageUrl: string) {
  return {
    '@type': 'Offer' as const,
    priceCurrency: 'AED',
    price: String(accessory.price),
    availability: accessory.inStock
      ? 'https://schema.org/InStock'
      : 'https://schema.org/OutOfStock',
    url: pageUrl,
    itemCondition: 'https://schema.org/NewCondition',
    seller: {
      '@type': 'Organization' as const,
      name: 'Bint Saeed',
    },
    areaServed: [
      ...OFFER_AREA_SERVED_COUNTRIES.map((name) => ({ '@type': 'Country' as const, name })),
      { '@type': 'Place' as const, name: 'Worldwide' },
    ],
  }
}

function signatureStrandSemanticLinks(
  accessory: Accessory,
  locale: AppLocale,
): Record<string, unknown> {
  const related = relatedProductsForAccessory(accessory)
  const labels = getStrandSchemaSemanticLabels(locale)
  const semanticRelated: Record<string, unknown>[] = [
    {
      '@type': 'Product',
      name: 'Marylebone Abaya',
      url: `${SITE_URL}/shop/marylebone-abaya`,
    },
    {
      '@type': 'CollectionPage',
      name: labels.strandsCollectionName,
      url: `${SITE_URL}/strands`,
    },
    {
      '@type': 'CollectionPage',
      name: labels.alAinCollectionName,
      url: `${SITE_URL}/accessories`,
    },
    ...related,
  ]

  return {
    about: {
      '@type': 'Thing',
      name: labels.aboutName,
      description: labels.aboutDescription,
      sameAs: `${SITE_URL}/strands`,
    },
    isPartOf: {
      '@type': 'Collection',
      name: labels.collectionName,
      url: `${SITE_URL}/strands`,
    },
    isRelatedTo: semanticRelated,
    subjectOf: {
      '@type': 'WebPage',
      name: labels.subjectOfPageName,
      url: `${SITE_URL}/strands`,
      inLanguage: schemaInLanguageForLocale(locale),
    },
  }
}

function buildSignatureStrandJsonLdGraph(input: JsonLdInput): Record<string, unknown> {
  const { accessory, displayName, description, pageUrl, locale = 'en' } = input
  const lang = schemaInLanguageForLocale(locale)
  const gallery = getAccessoryPdpImages(accessory)
  const facts = getSignatureStrandSchemaFacts(accessory, locale)
  const faqItems = getSignatureStrandFaq(accessory.id, locale)
  const faqNode = buildFaqPageJsonLd(pageUrl, faqItems, lang)
  const localizedMaterials =
    getStrandPdpContent(accessory.id, locale)?.materials.join('; ') ?? accessory.materials

  const productNode: Record<string, unknown> = {
    '@type': 'Product',
    '@id': `${pageUrl}#product`,
    name: displayName,
    description,
    url: pageUrl,
    sku: accessory.id,
    mpn: accessory.id,
    category: facts.productCategory,
    material: localizedMaterials,
    inLanguage: lang,
    keywords: buildSignatureStrandSchemaKeywords(accessory, displayName, locale),
    countryOfOrigin: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
    brand: {
      '@type': 'Brand',
      name: 'Bint Saeed',
      url: SITE_URL,
    },
    manufacturer: {
      '@type': 'Organization',
      name: SCHEMA_MANUFACTURER,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Abu Dhabi',
        addressCountry: 'AE',
      },
    },
    audience: {
      '@type': 'PeopleAudience',
      suggestedGender: 'female',
      audienceType: getSignatureStrandSchemaAudience(locale),
    },
    additionalProperty: buildSignatureStrandAdditionalProperties(accessory, displayName, locale),
    image: gallery.map((src, index) => ({
      '@type': 'ImageObject',
      contentUrl: src.startsWith('http') ? src : `${SITE_URL}${src}`,
      name: getAccessoryImageAlt(accessory, src, index, locale),
      ...(lang ? { inLanguage: lang } : {}),
      representativeOfPage: index === 0,
    })),
    offers: buildOffer(accessory, pageUrl),
    ...signatureStrandSemanticLinks(accessory, locale),
  }

  const graph: Record<string, unknown>[] = [productNode]
  if (faqNode) graph.push(faqNode)

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

/** Rich Product JSON-LD for all accessory PDPs — global jewellery discovery + cross-sell graph. */
export function buildAccessoryProductJsonLd({
  accessory,
  displayName,
  description,
  pageUrl,
  locale = 'en',
}: JsonLdInput): Record<string, unknown> {
  if (isStrandAccessory(accessory)) {
    return buildSignatureStrandJsonLdGraph({ accessory, displayName, description, pageUrl, locale })
  }

  const strandOnly = buildStrandOnlyJsonLd({ accessory, displayName, description, pageUrl })
  const gallery = getAccessoryPdpImages(accessory)
  const categoryLabel = CATEGORY_SCHEMA_LABEL[accessory.category] ?? 'Accessories'

  const isJewelleryCategory =
    accessory.category === 'necklaces' ||
    accessory.category === 'earrings' ||
    accessory.category === 'signature-strands'

  if (!isJewelleryCategory) {
    return {
      ...strandOnly,
      category: categoryLabel,
      keywords: mergeAccessorySchemaKeywords(getGlobalJewelleryDiscoveryKeywords(locale)),
    }
  }

  const keywords = mergeAccessorySchemaKeywords(
    getJewelleryCategoryDiscoveryKeywords(accessory.category, locale),
    productSpecificKeywords(accessory, locale),
    getStrandPdpPack(accessory.id)?.keywords,
  )

  const related = relatedProductsForAccessory(accessory)
  const additionalProperty = additionalPropertiesForAccessory(accessory, displayName, locale)

  const audience =
    accessory.category === 'earrings'
      ? {
          '@type': 'PeopleAudience',
          audienceType: 'Women seeking luxury natural stone and designer earrings in the UAE and GCC',
        }
      : accessory.category === 'necklaces'
        ? {
            '@type': 'PeopleAudience',
            audienceType:
              'Women seeking hand-strung natural stone bead necklaces and Al Ain designer jewellery',
          }
        : {
            '@type': 'PeopleAudience',
            audienceType:
              'Women styling Marylebone Abaya with interchangeable natural stone bead strands and matching jewellery',
          }

  return {
    ...strandOnly,
    category: categoryLabel,
    keywords,
    audience,
    additionalProperty: additionalProperty.length > 0 ? additionalProperty : undefined,
    isRelatedTo: related.length > 0 ? related : undefined,
    isPartOf: {
      '@type': 'Collection',
      name: 'Bint Saeed Al Ain Jewellery & Abaya Strands',
      url: 'https://www.bintsaeed.com/accessories',
    },
    brand: {
      '@type': 'Brand',
      name: 'Bint Saeed',
      url: 'https://www.bintsaeed.com',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Bint Saeed',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Abu Dhabi',
        addressCountry: 'AE',
      },
    },
    image: gallery.map((src, index) => ({
      '@type': 'ImageObject',
      contentUrl: src.startsWith('http') ? src : `https://www.bintsaeed.com${src}`,
      name: getAccessoryImageAlt(accessory, src, index, locale),
    })),
  }
}

export function buildAccessoriesCollectionJsonLd(
  items: readonly Accessory[],
  locale: AppLocale = 'en',
): Record<string, unknown> {
  const jewellery = items.filter(
    (a) => a.category === 'necklaces' || a.category === 'earrings' || a.category === 'signature-strands',
  )

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Bint Saeed Accessories — Al Ain Jewellery & Signature Strands (Abaya Jewellery)',
    description:
      'Luxury natural stone bead necklaces, designer earrings, and Signature Strands — interchangeable abaya jewellery and garment jewellery handcrafted in Abu Dhabi. Malachite, onyx, rose quartz, tiger eye, sunstone, jade, amethyst, lapis lazuli and more. Ships worldwide.',
    url: 'https://www.bintsaeed.com/accessories',
    keywords: mergeAccessorySchemaKeywords(
      getGlobalJewelleryDiscoveryKeywords(locale),
      getJewelleryCategoryDiscoveryKeywords('necklaces', locale),
      getJewelleryCategoryDiscoveryKeywords('earrings', locale),
      getJewelleryCategoryDiscoveryKeywords('signature-strands', locale),
      getSignatureStrandSharedKeywords(locale),
    ),
    brand: {
      '@type': 'Brand',
      name: 'Bint Saeed',
      url: 'https://www.bintsaeed.com',
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: jewellery.length,
      itemListElement: jewellery.map((a, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: a.name,
          url: `https://www.bintsaeed.com/accessories/${a.id}`,
          category:
            a.category === 'signature-strands'
              ? 'Signature Strands'
              : a.category === 'necklaces'
                ? 'Necklaces'
                : 'Earrings',
          offers: {
            '@type': 'Offer',
            priceCurrency: 'AED',
            price: String(a.price),
            availability: a.inStock
              ? 'https://schema.org/InStock'
              : 'https://schema.org/OutOfStock',
          },
        },
      })),
    },
  }
}
