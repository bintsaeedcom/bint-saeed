import type { Accessory } from '@/data/accessories'
import { accessories } from '@/data/accessories'
import type { AppLocale } from '@/lib/i18n/routing'
import { getAccessorySku } from '@/lib/accessories/accessorySku'
import {
  getGlobalJewelleryDiscoveryKeywords,
  getJewelleryCategoryDiscoveryKeywords,
  mergeAccessorySchemaKeywords,
} from '@/lib/accessories/jewelleryDiscoveryI18n'
import { getNecklaceEarringPdpPack } from '@/lib/accessories/necklaceEarringPdpSeo'
import { getNecklaceGemstoneLabel } from '@/lib/accessories/necklaceEarringSchemaI18n'
import {
  buildNecklaceEarringProductSchemaKeywords,
  getNecklaceEarringSharedSchemaKeywords,
} from '@/lib/accessories/necklaceEarringSchemaKeywordsI18n'
import { getGlobalPdpSchemaDiscoveryKeywords } from '@/lib/products/globalPdpSchemaDiscoveryI18n'

const NECKLACE_PRODUCT_TYPE =
  'Hand-strung natural gemstone necklace with Al Ain Rosette House Code, gold-plated hematite accents and convertible long or doubled wear — handcrafted in Abu Dhabi.'

const EARRING_PRODUCT_TYPE =
  'Designer earrings handcrafted in Abu Dhabi to pair with Bint Saeed Al Ain Rosette natural stone necklaces and Signature Strands.'

const NECKLACE_SUITABLE_FOR =
  'Women who collect and wear natural stone jewellery, gemstone necklace enthusiasts, coordinated Al Ain jewellery set buyers, modest fashion clients, UAE and GCC shoppers, and international gift buyers.'

const EARRING_SUITABLE_FOR =
  'Women who collect natural stone jewellery, designer earring enthusiasts, coordinated Al Ain set buyers, modest fashion clients, and international gift buyers styling with Bint Saeed necklaces and Signature Strands.'

const GEMSTONE_COLOR: Record<string, string> = {
  malachite: 'Green',
  'rose-quartz': 'Pink',
  'lapis-lazuli': 'Blue',
  sunstone: 'Peach',
  'tiger-eye': 'Golden Brown',
  onyx: 'Black',
}

function necklaceVariantKey(accessoryId: string): string | undefined {
  if (!accessoryId.startsWith('al-ain-rosette-necklace-')) return undefined
  return accessoryId.slice('al-ain-rosette-necklace-'.length)
}

function matchingStrandIdForNecklace(necklaceId: string): string | undefined {
  const variant = necklaceVariantKey(necklaceId)
  if (!variant) return undefined
  return `signature-strand-${variant}`
}

/** Full merged keyword string for Al Ain necklace and earring Product JSON-LD. */
export function buildNecklaceEarringSchemaKeywords(
  accessory: Accessory,
  displayName: string,
  locale: AppLocale = 'en',
): string {
  const pack = getNecklaceEarringPdpPack(accessory.id)
  return mergeAccessorySchemaKeywords(
    getGlobalPdpSchemaDiscoveryKeywords(locale),
    getGlobalJewelleryDiscoveryKeywords(locale),
    getJewelleryCategoryDiscoveryKeywords(accessory.category, locale),
    getNecklaceEarringSharedSchemaKeywords(locale),
    pack?.keywords,
    buildNecklaceEarringProductSchemaKeywords(accessory.id, displayName),
  )
}

export function buildNecklaceEarringAdditionalProperties(
  accessory: Accessory,
  displayName: string,
  _locale: AppLocale = 'en',
): Record<string, unknown>[] {
  const pack = getNecklaceEarringPdpPack(accessory.id)
  const sku = getAccessorySku(accessory)
  const gemstone = getNecklaceGemstoneLabel(accessory.id)
  const variant = necklaceVariantKey(accessory.id)
  const strandId = matchingStrandIdForNecklace(accessory.id)

  const relatedNames = pack?.relatedAccessoryIds
    .map((id) => accessories.find((a) => a.id === id)?.name)
    .filter(Boolean)
    .slice(0, 4)
    .join(', ')

  const props: Record<string, unknown>[] = [
    {
      '@type': 'PropertyValue',
      name: 'Product type',
      value: accessory.category === 'earrings' ? EARRING_PRODUCT_TYPE : NECKLACE_PRODUCT_TYPE,
    },
    {
      '@type': 'PropertyValue',
      name: 'House Code',
      value: 'Al Ain Rosette',
    },
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
    {
      '@type': 'PropertyValue',
      name: 'Made in',
      value: 'Abu Dhabi, United Arab Emirates',
    },
    {
      '@type': 'PropertyValue',
      name: 'Suitable for',
      value: accessory.category === 'earrings' ? EARRING_SUITABLE_FOR : NECKLACE_SUITABLE_FOR,
    },
  ]

  if (gemstone) {
    props.push(
      { '@type': 'PropertyValue', name: 'Natural gemstone', value: gemstone },
      { '@type': 'PropertyValue', name: 'Stone type', value: displayName },
    )
    const color = variant ? GEMSTONE_COLOR[variant] : undefined
    if (color) {
      props.push({ '@type': 'PropertyValue', name: 'Colour', value: color })
    }
  }

  if (accessory.category === 'necklaces') {
    props.push(
      {
        '@type': 'PropertyValue',
        name: 'Necklace style',
        value: displayName,
      },
      {
        '@type': 'PropertyValue',
        name: 'Wear style',
        value: 'Convertible — single long necklace or doubled around the neck',
      },
      {
        '@type': 'PropertyValue',
        name: 'Clasp',
        value: 'Gold-tone signature clasp with adjustable extension chain',
      },
    )
  }

  if (accessory.category === 'earrings') {
    props.push({
      '@type': 'PropertyValue',
      name: 'Earring style',
      value: displayName,
    })
  }

  if (strandId) {
    props.push({
      '@type': 'PropertyValue',
      name: 'Matching Signature Strand',
      value: strandId,
    })
  }

  if (relatedNames) {
    props.push({
      '@type': 'PropertyValue',
      name: 'Pairs well with',
      value: relatedNames,
    })
  }

  if (sku) {
    props.push({
      '@type': 'PropertyValue',
      name: 'Reference',
      value: sku,
    })
  }

  return props
}

export function getNecklaceGemstoneColor(accessoryId: string): string | undefined {
  const variant = necklaceVariantKey(accessoryId)
  return variant ? GEMSTONE_COLOR[variant] : undefined
}

export { matchingStrandIdForNecklace }
