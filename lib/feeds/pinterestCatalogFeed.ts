/**
 * Pinterest retail catalog feed (CSV).
 * Spec: https://help.pinterest.com/en/business/article/before-you-get-started-with-catalogs
 *
 * Primary data source is locked to United States in Pinterest Business — prices in the
 * primary feed MUST be USD or Pinterest hides prices. UAE/GCC/GBP localisation is handled
 * by the country supplemental feed (`/feeds/pinterest-countries.csv`).
 */

import { accessories, type Accessory } from '@/data/accessories'
import type { Product } from '@/data/products'
import { getAccessorySku } from '@/lib/accessories/accessorySku'
import { accessoryCanonicalUrl } from '@/lib/accessories/accessoryPageUrl'
import { getMergedProducts } from '@/lib/products/mergeCatalog'
import { getProductSlug } from '@/lib/products/links'
import {
  getProductColorOptions,
  getProductImagesForColor,
} from '@/lib/products/productColorAvailability'
import { resolveProductSku } from '@/lib/products/sku'
import { getListedPrice } from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

/** Primary feed currency — must match Pinterest data-source country (United States). */
export const PINTEREST_PRIMARY_CURRENCY: SupportedCurrency = 'USD'

/** Country override → retail currency for supplemental feed. */
export const PINTEREST_COUNTRY_CURRENCY: Record<string, SupportedCurrency> = {
  AE: 'AED',
  SA: 'SAR',
  QA: 'QAR',
  KW: 'KWD',
  BH: 'BHD',
  OM: 'OMR',
  GB: 'GBP',
  US: 'USD',
}

/** Absolute HTTPS image URL — normalizes paths that already contain %20. */
function absoluteFeedImageUrl(src: string): string {
  if (!src) return `${SITE_URL}/og-image.png`
  if (src.startsWith('http://') || src.startsWith('https://')) return src
  const path = src.startsWith('/') ? src : `/${src}`
  try {
    return `${SITE_URL}${encodeURI(decodeURI(path))}`
  } catch {
    return `${SITE_URL}${encodeURI(path)}`
  }
}

const FEED_COLUMNS = [
  'id',
  'item_group_id',
  'title',
  'description',
  'link',
  'image_link',
  'additional_image_link',
  'price',
  'availability',
  'condition',
  'brand',
  'mpn',
  'product_type',
  'google_product_category',
  'color',
] as const

type FeedColumn = (typeof FEED_COLUMNS)[number]
type FeedRow = Record<FeedColumn, string>

/** Internal row before currency formatting. */
type CatalogItem = {
  id: string
  item_group_id: string
  title: string
  description: string
  link: string
  image_link: string
  additional_image_link: string
  availability: string
  condition: string
  brand: string
  mpn: string
  product_type: string
  google_product_category: string
  color: string
  productId: string
  aedMaster: number
}

function csvEscape(value: string): string {
  const normalized = value.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim()
  return `"${normalized.replace(/"/g, '""')}"`
}

function sanitizeText(value: string, maxLen: number): string {
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLen)
}

function formatFeedPrice(aedMaster: number, currency: SupportedCurrency, productId: string): string {
  const amount = getListedPrice(aedMaster, currency, undefined, productId)
  const threeDecimal = currency === 'BHD' || currency === 'KWD' || currency === 'OMR'
  return `${amount.toFixed(threeDecimal ? 3 : 2)} ${currency}`
}

function toFeedRow(item: CatalogItem, currency: SupportedCurrency): FeedRow {
  return {
    id: item.id,
    item_group_id: item.item_group_id,
    title: item.title,
    description: item.description,
    link: item.link,
    image_link: item.image_link,
    additional_image_link: item.additional_image_link,
    price: formatFeedPrice(item.aedMaster, currency, item.productId),
    availability: item.availability,
    condition: item.condition,
    brand: item.brand,
    mpn: item.mpn,
    product_type: item.product_type,
    google_product_category: item.google_product_category,
    color: item.color,
  }
}

/** Prefer 3+ taxonomy levels so Pinterest Alert 126 stays clear. */
function googleProductCategory(category: string): string {
  switch (category) {
    case 'Abayas':
      return 'Apparel & Accessories > Clothing > Traditional & Ceremonial Clothing'
    case 'Kaftans':
      return 'Apparel & Accessories > Clothing > Traditional & Ceremonial Clothing'
    case 'Dresses':
      return 'Apparel & Accessories > Clothing > Dresses'
    case 'Sets':
      return 'Apparel & Accessories > Clothing > Outfit Sets'
    case 'necklaces':
      return 'Jewellery > Necklaces'
    case 'earrings':
      return 'Jewellery > Earrings'
    case 'signature-strands':
      return 'Jewellery > Signature Strands'
    case 'bag-strands':
      return 'Jewellery > Bag Charms'
    case 'phone-strands':
      return 'Jewellery > Phone Charms'
    case 'bracelets':
      return 'Jewellery > Bracelets'
    default:
      return 'Jewellery > Accessories'
  }
}

function accessoryProductType(item: Accessory): string {
  switch (item.category) {
    case 'necklaces':
      return 'Jewellery > Necklaces'
    case 'earrings':
      return 'Jewellery > Earrings'
    case 'signature-strands':
      return 'Jewellery > Signature Strands'
    case 'bag-strands':
      return 'Jewellery > Bag Charms'
    case 'phone-strands':
      return 'Jewellery > Phone Charms'
    case 'bracelets':
      return 'Jewellery > Bracelets'
    default:
      return 'Jewellery > Accessories'
  }
}

function shopProductType(category: string): string {
  return `Ready to Wear > ${category}`
}

function additionalImageLinks(images: string[], toAbsolute: (src: string) => string): string {
  return images
    .slice(1, 11)
    .map((src) => toAbsolute(src))
    .filter(Boolean)
    .join(',')
}

function buildShopItems(products: Product[]): CatalogItem[] {
  const rows: CatalogItem[] = []

  for (const product of products) {
    const slug = getProductSlug(product)
    const link = `${SITE_URL}/shop/${slug}`
    const colorOptions = getProductColorOptions(product)
    const hasVariants = colorOptions.length > 1
    const groupId = product.id

    const colorsToEmit =
      colorOptions.length > 0 ? colorOptions : [{ name: '', hex: '' }]

    for (const color of colorsToEmit) {
      const colorName = color.name || undefined
      const images = getProductImagesForColor(product, colorName)
      const primary = images[0]
      if (!primary) continue

      const sku = resolveProductSku(product, colorName) ?? product.id
      const title = colorName ? `${product.name} — ${colorName}` : product.name

      rows.push({
        id: sku.slice(0, 127),
        item_group_id: hasVariants ? groupId.slice(0, 127) : '',
        title: sanitizeText(title, 500),
        description: sanitizeText(product.description || product.name, 10000),
        link,
        image_link: absoluteFeedImageUrl(primary),
        additional_image_link: additionalImageLinks(images, absoluteFeedImageUrl),
        availability: 'in stock',
        condition: 'new',
        brand: 'Bint Saeed',
        mpn: sku.slice(0, 70),
        product_type: shopProductType(product.category),
        google_product_category: googleProductCategory(product.category),
        color: colorName ?? '',
        productId: product.id,
        aedMaster: product.price,
      })
    }
  }

  return rows
}

function buildAccessoryItems(items: readonly Accessory[]): CatalogItem[] {
  return items
    .filter((item) => item.images[0])
    .map((item) => {
      const sku = (getAccessorySku(item) ?? item.id).slice(0, 127)
      const images = item.images
      return {
        id: sku,
        item_group_id: '',
        title: sanitizeText(item.name, 500),
        description: sanitizeText(item.description || item.name, 10000),
        link: accessoryCanonicalUrl('en', item.id),
        image_link: absoluteFeedImageUrl(images[0]),
        additional_image_link: additionalImageLinks(images, absoluteFeedImageUrl),
        availability: item.inStock ? 'in stock' : 'out of stock',
        condition: 'new',
        brand: 'Bint Saeed',
        mpn: sku.slice(0, 70),
        product_type: accessoryProductType(item),
        google_product_category: googleProductCategory(item.category),
        color: item.colors[0]?.name ?? '',
        productId: item.id,
        aedMaster: item.price,
      } satisfies CatalogItem
    })
}

export function rowsToPinterestCsv(rows: FeedRow[]): string {
  const header = FEED_COLUMNS.join(',')
  const body = rows.map((row) => FEED_COLUMNS.map((col) => csvEscape(row[col] ?? '')).join(','))
  return `${header}\n${body.join('\n')}\n`
}

async function buildAllCatalogItems(): Promise<CatalogItem[]> {
  const products = await getMergedProducts()
  return [...buildShopItems(products), ...buildAccessoryItems(accessories)]
}

/** Full shop + accessories catalog for Pinterest daily URL ingestion (USD — US primary). */
export async function buildPinterestCatalogCsv(): Promise<string> {
  const items = await buildAllCatalogItems()
  return rowsToPinterestCsv(items.map((item) => toFeedRow(item, PINTEREST_PRIMARY_CURRENCY)))
}

/**
 * Country supplemental feed (Countries and languages).
 * Overrides price/availability/link per ISO country while reusing primary `id`s.
 * Headers must match Pinterest's template: id,override,price,sale_price,availability,link
 */
const COUNTRY_SUPPLEMENTAL_COLUMNS = [
  'id',
  'override',
  'price',
  'sale_price',
  'availability',
  'link',
] as const

const DEFAULT_SUPPLEMENTAL_COUNTRIES = ['AE', 'SA', 'QA', 'KW', 'BH', 'OM', 'GB'] as const

export async function buildPinterestCountrySupplementalCsv(
  countries: readonly string[] = DEFAULT_SUPPLEMENTAL_COUNTRIES,
): Promise<string> {
  const items = await buildAllCatalogItems()
  const header = COUNTRY_SUPPLEMENTAL_COLUMNS.join(',')
  const body: string[] = []

  for (const country of countries) {
    const code = country.trim().toUpperCase()
    if (!/^[A-Z]{2}$/.test(code)) continue
    const currency = PINTEREST_COUNTRY_CURRENCY[code]
    if (!currency) continue

    for (const item of items) {
      body.push(
        [
          csvEscape(item.id),
          csvEscape(code),
          csvEscape(formatFeedPrice(item.aedMaster, currency, item.productId)),
          '', // sale_price — leave empty when not on sale
          csvEscape(item.availability),
          csvEscape(item.link),
        ].join(','),
      )
    }
  }

  return `${header}\n${body.join('\n')}\n`
}
