import type { Accessory } from '@/data/accessories'
import { accessories } from '@/data/accessories'
import type { AppLocale } from '@/lib/i18n/routing'
import { withBrandAlt } from '@/lib/products/imageAlt'
import {
  getGlobalJewelleryDiscoveryKeywords,
  getJewelleryCategoryDiscoveryKeywords,
  mergeAccessorySchemaKeywords,
} from '@/lib/accessories/jewelleryDiscoveryI18n'
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

const CATEGORY_SCHEMA_LABEL: Record<Accessory['category'], string> = {
  necklaces: 'Necklaces',
  earrings: 'Earrings',
  'abaya-charms': 'Abaya Strands',
  bracelets: 'Bracelets',
  'bag-charms': 'Bag Strands',
  'phone-charms': 'Phone Strands',
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
): Record<string, unknown>[] {
  const strandPack = getStrandPdpPack(accessory.id)
  if (strandPack) {
    return [
      { '@type': 'PropertyValue', name: 'Stone type', value: displayName },
      {
        '@type': 'PropertyValue',
        name: 'Bead construction',
        value: 'Hand-strung natural stone beads with 18K gold-plated clip',
      },
      {
        '@type': 'PropertyValue',
        name: 'Pairs well with',
        value: `${strandPack.pairing.necklaceLabel} and ${strandPack.pairing.earringsLabel}`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Designed for',
        value: 'Bint Saeed Marylebone Abaya interchangeable strand styling',
      },
    ]
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

/** Rich Product JSON-LD for all accessory PDPs — global jewellery discovery + cross-sell graph. */
export function buildAccessoryProductJsonLd({
  accessory,
  displayName,
  description,
  pageUrl,
  locale = 'en',
}: JsonLdInput): Record<string, unknown> {
  const strandOnly = buildStrandOnlyJsonLd({ accessory, displayName, description, pageUrl })
  const gallery = getAccessoryPdpImages(accessory)
  const categoryLabel = CATEGORY_SCHEMA_LABEL[accessory.category] ?? 'Accessories'

  const isJewelleryCategory =
    accessory.category === 'necklaces' ||
    accessory.category === 'earrings' ||
    accessory.category === 'abaya-charms'

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
  const additionalProperty = additionalPropertiesForAccessory(accessory, displayName)

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
    (a) => a.category === 'necklaces' || a.category === 'earrings' || a.category === 'abaya-charms',
  )

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Bint Saeed Accessories — Al Ain Jewellery & Natural Stone Abaya Strands',
    description:
      'Luxury natural stone bead necklaces, designer earrings, and interchangeable abaya strands handcrafted in Abu Dhabi. Malachite, onyx, rose quartz, tiger eye, jade, amethyst, lapis lazuli and more.',
    url: 'https://www.bintsaeed.com/accessories',
    keywords: mergeAccessorySchemaKeywords(
      getGlobalJewelleryDiscoveryKeywords(locale),
      getJewelleryCategoryDiscoveryKeywords('necklaces', locale),
      getJewelleryCategoryDiscoveryKeywords('earrings', locale),
      getJewelleryCategoryDiscoveryKeywords('abaya-charms', locale),
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
            a.category === 'abaya-charms'
              ? 'Abaya Strands'
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
