import type { Accessory } from '@/data/accessories'
import { accessories } from '@/data/accessories'
import { getAccessorySku } from '@/lib/accessories/accessorySku'
import type { AppLocale } from '@/lib/i18n/routing'
import { schemaInLanguageForLocale } from '@/lib/i18n/bcp47'
import { withBrandAlt } from '@/lib/products/imageAlt'
import { buildFaqPageJsonLd } from '@/lib/products/productSchemaMeta'
import { SCHEMA_MANUFACTURER } from '@/lib/products/abayaSchemaShared'
import {
  getNecklaceEarringSchemaAudience,
} from '@/lib/accessories/necklaceEarringSchemaI18n'
import { getGlobalPdpSchemaDiscoveryKeywords } from '@/lib/products/globalPdpSchemaDiscoveryI18n'
import { appendGlobalPdpSchemaAudienceExtension } from '@/lib/products/globalPdpSchemaAudienceI18n'
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
  getPhoneCharmCarouselAlt,
  getPhoneCharmPdpAlt,
} from '@/lib/accessories/phoneCharmPdpSeo'
import {
  buildPhoneCharmAllCurrencyPriceLine,
  getPhoneCharmMetaKeywords,
  getPhoneCharmSchemaAudience,
} from '@/lib/accessories/phoneCharmPdpMetaI18n'
import {
  getPhoneCharmFaqForSchema,
  getPhoneCharmPdpContent,
  isAlQuaaPhoneCharmId,
} from '@/lib/accessories/phoneCharmPdpContent'
import {
  ACCESSORY_CATALOG_PRICES,
  getAccessoryCatalogPriceMap,
} from '@/lib/pricing/accessoryCatalogPrices'
import { SUPPORTED_CURRENCIES } from '@/lib/pricing/types'
import { getNecklaceEarringFaqForSchema } from '@/lib/accessories/necklaceEarringPdpContent'
import {
  buildNecklaceEarringAdditionalProperties,
  buildNecklaceEarringSchemaKeywords,
  getNecklaceGemstoneColor,
  matchingStrandIdForNecklace,
} from '@/lib/accessories/necklaceEarringSchemaMeta'
import { getNecklaceEarringSharedSchemaKeywords } from '@/lib/accessories/necklaceEarringSchemaKeywordsI18n'
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
  'phone-strands': 'Phone Charms',
}

export function getAccessoryCarouselAlt(
  accessory: Pick<Accessory, 'id' | 'category' | 'name' | 'nameAr'>,
  locale: AppLocale = 'en',
  isRTL = false,
): string {
  if (isStrandAccessory(accessory)) {
    return getStrandCarouselAlt(accessory.id, locale)
  }
  if (accessory.category === 'phone-strands') {
    const phoneAlt = getPhoneCharmCarouselAlt(accessory.id, locale)
    if (phoneAlt) return withBrandAlt(phoneAlt, locale)
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
  if (accessory.category === 'phone-strands') {
    const phoneAlt = getPhoneCharmPdpAlt(accessory.id, imageIndex, locale)
    if (phoneAlt) return withBrandAlt(phoneAlt, locale)
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
    return buildNecklaceEarringAdditionalProperties(accessory, displayName, locale)
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

/** One Offer per listed currency for AI crawlers + international SEO. */
function buildMultiCurrencyOffers(accessory: Accessory, pageUrl: string): Record<string, unknown>[] {
  const priceMap = getAccessoryCatalogPriceMap(accessory.id)
  const availability = accessory.inStock
    ? 'https://schema.org/InStock'
    : 'https://schema.org/OutOfStock'
  const areaServed = [
    ...OFFER_AREA_SERVED_COUNTRIES.map((name) => ({ '@type': 'Country' as const, name })),
    { '@type': 'Place' as const, name: 'Worldwide' },
  ]
  const seller = {
    '@type': 'Organization' as const,
    name: 'Bint Saeed',
  }

  if (!priceMap) return [buildOffer(accessory, pageUrl)]

  return SUPPORTED_CURRENCIES.map((currency) => ({
    '@type': 'Offer' as const,
    priceCurrency: currency,
    price: String(priceMap[currency]),
    availability,
    url: pageUrl,
    itemCondition: 'https://schema.org/NewCondition',
    seller,
    areaServed,
  }))
}

function buildPhoneCharmPriceAdditionalProperties(accessoryId: string): Record<string, unknown>[] {
  const priceMap = getAccessoryCatalogPriceMap(accessoryId)
  if (!priceMap) return []
  return [
    {
      '@type': 'PropertyValue',
      name: 'Listed prices (all currencies)',
      value: buildPhoneCharmAllCurrencyPriceLine(accessoryId),
    },
    ...SUPPORTED_CURRENCIES.map((currency) => ({
      '@type': 'PropertyValue' as const,
      name: `Listed price ${currency}`,
      value: String(priceMap[currency]),
      unitCode: currency,
    })),
  ]
}

function phoneCharmSemanticLinks(
  accessory: Accessory,
  displayName: string,
  pageUrl: string,
  locale: AppLocale,
): Record<string, unknown> {
  const peerCharms = accessories
    .filter((a) => a.category === 'phone-strands' && a.id !== accessory.id)
    .slice(0, 6)
    .map((a) => ({
      '@type': 'Product',
      name: a.name,
      url: `${SITE_URL}/accessories/${a.id}`,
    }))

  return {
    about: {
      '@type': 'Thing',
      name: 'Natural stone phone charms & luxury accessories',
      description:
        'Hand-assembled natural gemstone phone charms with Carnelian Al Ain Rosette motifs — for lovers of natural stones, luxury phone charms and refined accessories. Handcrafted in Abu Dhabi, United Arab Emirates.',
      sameAs: `${SITE_URL}/accessories`,
    },
    isPartOf: {
      '@type': 'Collection',
      name: 'Al Quaa Phone Charms — Bint Saeed',
      url: `${SITE_URL}/accessories`,
    },
    isRelatedTo: [
      {
        '@type': 'CollectionPage',
        name: 'Bint Saeed Accessories',
        url: `${SITE_URL}/accessories`,
      },
      {
        '@type': 'CollectionPage',
        name: 'Al Ain Natural Stone Jewellery',
        url: `${SITE_URL}/accessories`,
      },
      ...peerCharms,
    ],
    subjectOf: {
      '@type': 'WebPage',
      name: displayName,
      url: pageUrl,
      inLanguage: schemaInLanguageForLocale(locale),
    },
  }
}

function buildPhoneCharmJsonLdGraph(input: JsonLdInput): Record<string, unknown> {
  const { accessory, displayName, description, pageUrl, locale = 'en' } = input
  const lang = schemaInLanguageForLocale(locale)
  const gallery = getAccessoryPdpImages(accessory)
  const sku = getAccessorySku(accessory) ?? accessory.id
  const faqItems = getPhoneCharmFaqForSchema(accessory.id, locale)
  const faqNode = buildFaqPageJsonLd(pageUrl, faqItems, lang)
  const pdp = getPhoneCharmPdpContent(accessory.id, locale)
  const localizedMaterials = pdp
    ? `${pdp.colour}; Carnelian Al Ain Rosette; gold-plated hematite`
    : accessory.materials
  const keywords = mergeAccessorySchemaKeywords(
    getPhoneCharmMetaKeywords(accessory.id, locale),
    getJewelleryCategoryDiscoveryKeywords('phone-strands', locale),
    getGlobalJewelleryDiscoveryKeywords(locale),
  )
  const multiOffers = buildMultiCurrencyOffers(accessory, pageUrl)
  const aedPrice = ACCESSORY_CATALOG_PRICES[accessory.id]?.AED ?? accessory.price

  const productNode: Record<string, unknown> = {
    '@type': 'Product',
    '@id': `${pageUrl}#product`,
    name: displayName,
    description,
    url: pageUrl,
    sku,
    mpn: sku,
    category: 'Phone Charms',
    material: localizedMaterials,
    color: pdp?.colour,
    inLanguage: lang,
    keywords,
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
      audienceType: appendGlobalPdpSchemaAudienceExtension(
        getPhoneCharmSchemaAudience(locale),
        locale,
      ),
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Collection',
        value: 'Al Quaa Phone Charms',
      },
      {
        '@type': 'PropertyValue',
        name: 'Motif',
        value: 'Al Ain Rosette (Carnelian)',
      },
      {
        '@type': 'PropertyValue',
        name: 'Product type',
        value: 'Natural stone luxury phone charm',
      },
      ...buildPhoneCharmPriceAdditionalProperties(accessory.id),
    ],
    image: gallery.map((src, index) => ({
      '@type': 'ImageObject',
      contentUrl: src.startsWith('http') ? src : `${SITE_URL}${src}`,
      name: getAccessoryImageAlt(accessory, src, index, locale),
      ...(lang ? { inLanguage: lang } : {}),
      representativeOfPage: index === 0,
    })),
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'AED',
      lowPrice: String(aedPrice),
      highPrice: String(aedPrice),
      offerCount: String(multiOffers.length),
      availability: accessory.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      url: pageUrl,
      offers: multiOffers,
    },
    ...phoneCharmSemanticLinks(accessory, displayName, pageUrl, locale),
  }

  const graph: Record<string, unknown>[] = [productNode]
  if (faqNode) graph.push(faqNode)

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
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
  const sku = getAccessorySku(accessory) ?? accessory.id

  const productNode: Record<string, unknown> = {
    '@type': 'Product',
    '@id': `${pageUrl}#product`,
    name: displayName,
    description,
    url: pageUrl,
    sku,
    mpn: sku,
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
      audienceType: appendGlobalPdpSchemaAudienceExtension(
        getSignatureStrandSchemaAudience(locale),
        locale,
      ),
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

function necklaceEarringSemanticLinks(
  accessory: Accessory,
  displayName: string,
  pageUrl: string,
  locale: AppLocale,
): Record<string, unknown> {
  const related = relatedProductsForAccessory(accessory)
  const strandId = matchingStrandIdForNecklace(accessory.id)
  const strand = strandId ? accessories.find((a) => a.id === strandId) : undefined
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
      name: 'Bint Saeed Al Ain Natural Stone Jewellery',
      url: `${SITE_URL}/accessories`,
    },
  ]

  if (strand) {
    semanticRelated.push({
      '@type': 'Product',
      name: strand.name,
      url: `${SITE_URL}/accessories/${strand.id}`,
    })
  }

  semanticRelated.push(...related)

  return {
    about: {
      '@type': 'Thing',
      name: 'Natural stone jewellery',
      description:
        'Hand-strung natural gemstone necklaces, designer earrings and Signature Strands handcrafted in Abu Dhabi, United Arab Emirates.',
      sameAs: `${SITE_URL}/accessories`,
    },
    isPartOf: {
      '@type': 'Collection',
      name: 'Bint Saeed Al Ain Natural Stone Jewellery',
      url: `${SITE_URL}/accessories`,
    },
    isRelatedTo: semanticRelated,
    subjectOf: {
      '@type': 'WebPage',
      name: displayName,
      url: pageUrl,
      inLanguage: schemaInLanguageForLocale(locale),
    },
  }
}

function buildNecklaceEarringJsonLdGraph(input: JsonLdInput): Record<string, unknown> {
  const { accessory, displayName, description, pageUrl, locale = 'en' } = input
  const lang = schemaInLanguageForLocale(locale)
  const gallery = getAccessoryPdpImages(accessory)
  const categoryLabel = CATEGORY_SCHEMA_LABEL[accessory.category] ?? 'Accessories'
  const sku = getAccessorySku(accessory) ?? accessory.id
  const faqItems = getNecklaceEarringFaqForSchema(accessory.id, locale)
  const faqNode = buildFaqPageJsonLd(pageUrl, faqItems, lang)
  const localizedMaterials = accessory.materials
  const keywords = buildNecklaceEarringSchemaKeywords(accessory, displayName, locale)
  const additionalProperty = buildNecklaceEarringAdditionalProperties(accessory, displayName, locale)
  const audienceCategory =
    accessory.category === 'earrings' ? 'earrings' : 'necklaces'
  const gemstoneColor = getNecklaceGemstoneColor(accessory.id)

  const productNode: Record<string, unknown> = {
    '@type': 'Product',
    '@id': `${pageUrl}#product`,
    name: displayName,
    description,
    url: pageUrl,
    sku,
    mpn: sku,
    category: categoryLabel,
    material: localizedMaterials,
    inLanguage: lang,
    keywords,
    ...(gemstoneColor ? { color: gemstoneColor } : {}),
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
      audienceType: appendGlobalPdpSchemaAudienceExtension(
        getNecklaceEarringSchemaAudience(audienceCategory, locale),
        locale,
      ),
    },
    additionalProperty,
    image: gallery.map((src, index) => ({
      '@type': 'ImageObject',
      contentUrl: src.startsWith('http') ? src : `${SITE_URL}${src}`,
      name: getAccessoryImageAlt(accessory, src, index, locale),
      ...(lang ? { inLanguage: lang } : {}),
      representativeOfPage: index === 0,
    })),
    offers: buildOffer(accessory, pageUrl),
    ...necklaceEarringSemanticLinks(accessory, displayName, pageUrl, locale),
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

  if (isAlQuaaPhoneCharmId(accessory.id) || accessory.category === 'phone-strands') {
    return buildPhoneCharmJsonLdGraph({ accessory, displayName, description, pageUrl, locale })
  }

  const isNecklaceOrEarring =
    accessory.category === 'necklaces' || accessory.category === 'earrings'
  if (isNecklaceOrEarring && getNecklaceEarringPdpPack(accessory.id)) {
    return buildNecklaceEarringJsonLdGraph({ accessory, displayName, description, pageUrl, locale })
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
    accessory.category === 'earrings' || accessory.category === 'necklaces'
      ? {
          '@type': 'PeopleAudience',
          suggestedGender: 'female',
          audienceType: appendGlobalPdpSchemaAudienceExtension(
            getNecklaceEarringSchemaAudience(accessory.category, locale),
            locale,
          ),
        }
      : {
          '@type': 'PeopleAudience',
          suggestedGender: 'female',
          audienceType: appendGlobalPdpSchemaAudienceExtension(
            'Women styling Marylebone Abaya with interchangeable natural stone bead strands and matching jewellery',
            locale,
          ),
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
      getGlobalPdpSchemaDiscoveryKeywords(locale),
      getGlobalJewelleryDiscoveryKeywords(locale),
      getJewelleryCategoryDiscoveryKeywords('necklaces', locale),
      getJewelleryCategoryDiscoveryKeywords('earrings', locale),
      getJewelleryCategoryDiscoveryKeywords('signature-strands', locale),
      getNecklaceEarringSharedSchemaKeywords(locale),
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
