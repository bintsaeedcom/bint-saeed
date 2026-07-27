/**
 * Shared catalog rows for Google Merchant / Meta product feeds.
 * Primary image is always gallery index 0 (carousel-first / front).
 * No GTIN — identifier_exists=false; MPN = house SKU.
 */

import fs from 'fs'
import path from 'path'
import { accessories, isAccessoryShopVisible, type Accessory } from '@/data/accessories'
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
import { getPdpSizeOptions } from '@/lib/shopProductOptions'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

/** Skip feed rows whose primary asset is missing from `/public` (prevents GMC image 404s). */
function publicAssetExists(src: string): boolean {
  if (!src || src.startsWith('http://') || src.startsWith('https://')) return Boolean(src)
  const rel = (src.startsWith('/') ? src.slice(1) : src).replace(/^\/+/, '')
  let decoded = rel
  try {
    decoded = decodeURIComponent(rel)
  } catch {
    /* keep rel */
  }
  return fs.existsSync(path.join(process.cwd(), 'public', decoded))
}

export type MerchantCatalogItem = {
  id: string
  item_group_id: string
  title: string
  description: string
  link: string
  image_link: string
  additional_image_link: string
  availability: 'in_stock' | 'out_of_stock'
  condition: 'new'
  brand: 'Bint Saeed'
  identifier_exists: 'false'
  mpn: string
  product_type: string
  google_product_category: string
  color: string
  size: string
  gender: 'female'
  age_group: 'adult'
  size_system: string
  size_type: 'regular'
  /** Internal MC / Meta label — garments are made to order after purchase. */
  custom_label_0: string
  productId: string
  aedMaster: number
}

/** Absolute HTTPS image URL — normalizes paths that already contain %20. */
export function absoluteFeedImageUrl(src: string): string {
  if (!src) return `${SITE_URL}/og-image.png`
  if (src.startsWith('http://') || src.startsWith('https://')) return src
  const path = src.startsWith('/') ? src : `/${src}`
  try {
    return `${SITE_URL}${encodeURI(decodeURI(path))}`
  } catch {
    return `${SITE_URL}${encodeURI(path)}`
  }
}

export function sanitizeFeedText(value: string, maxLen: number): string {
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLen)
}

function additionalImageLinks(images: string[]): string {
  return images
    .slice(1, 11)
    .map((src) => absoluteFeedImageUrl(src))
    .filter(Boolean)
    .join(',')
}

/** Official Google product taxonomy (US spelling). */
function googleProductCategory(category: string): string {
  switch (category) {
    case 'Abayas':
    case 'Kaftans':
      return 'Apparel & Accessories > Clothing > Traditional & Ceremonial Clothing'
    case 'Dresses':
      return 'Apparel & Accessories > Clothing > Dresses'
    case 'Sets':
      return 'Apparel & Accessories > Clothing > Outfit Sets'
    case 'necklaces':
      return 'Apparel & Accessories > Jewelry > Necklaces'
    case 'earrings':
      return 'Apparel & Accessories > Jewelry > Earrings'
    case 'bracelets':
      return 'Apparel & Accessories > Jewelry > Bracelets'
    case 'signature-strands':
    case 'bag-strands':
    case 'phone-strands':
      return 'Apparel & Accessories > Jewelry > Charms & Pendants'
    default:
      return 'Apparel & Accessories > Jewelry'
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

function sizeIdSuffix(size: string): string {
  return size
    .trim()
    .toUpperCase()
    .replace(/\s+/g, '-')
    .replace(/[^A-Z0-9-]/g, '')
    .slice(0, 12)
}

function buildShopItems(products: Product[]): MerchantCatalogItem[] {
  const rows: MerchantCatalogItem[] = []

  for (const product of products) {
    const slug = getProductSlug(product)
    const link = `${SITE_URL}/shop/${slug}`
    const colorOptions = getProductColorOptions(product)
    const groupId = product.id.slice(0, 50)
    const sizes = getPdpSizeOptions(product.category, product.sizes ?? [], slug)
    const colorsToEmit = colorOptions.length > 0 ? colorOptions : [{ name: '', hex: '' }]

    for (const color of colorsToEmit) {
      const colorName = color.name || undefined
      const images = getProductImagesForColor(product, colorName).filter((src) => publicAssetExists(src))
      const primary = images[0]
      if (!primary) continue

      const sku = resolveProductSku(product, colorName) ?? product.id
      const baseTitle = colorName ? `${product.name} — ${colorName}` : product.name
      const description = sanitizeFeedText(product.description || product.name, 5000)
      const image_link = absoluteFeedImageUrl(primary)
      const additional_image_link = additionalImageLinks(images)
      const colorLabel = colorName ?? ''

      for (const size of sizes) {
        const sizeSuffix = sizeIdSuffix(size)
        const id = `${sku}-${sizeSuffix}`.slice(0, 50)
        const title =
          sizes.length === 1 && /one\s*size/i.test(size)
            ? sanitizeFeedText(baseTitle, 150)
            : sanitizeFeedText(`${baseTitle} — ${size}`, 150)

        rows.push({
          id,
          item_group_id: groupId,
          title,
          description,
          link,
          image_link,
          additional_image_link,
          availability: 'in_stock',
          condition: 'new',
          brand: 'Bint Saeed',
          identifier_exists: 'false',
          mpn: sku.slice(0, 70),
          product_type: shopProductType(product.category),
          google_product_category: googleProductCategory(product.category),
          color: colorLabel,
          size,
          gender: 'female',
          age_group: 'adult',
          size_system: 'INT',
          size_type: 'regular',
          custom_label_0: 'made_to_order',
          productId: product.id,
          aedMaster: product.price,
        })
      }
    }
  }

  return rows
}

function buildAccessoryItems(items: readonly Accessory[]): MerchantCatalogItem[] {
  return items
    .filter((item) => isAccessoryShopVisible(item) && item.images[0] && publicAssetExists(item.images[0]))
    .map((item) => {
      const sku = (getAccessorySku(item) ?? item.id).slice(0, 50)
      const images = item.images.filter((src) => publicAssetExists(src))
      return {
        id: sku,
        item_group_id: sku,
        title: sanitizeFeedText(item.name, 150),
        description: sanitizeFeedText(item.description || item.name, 5000),
        link: accessoryCanonicalUrl('en', item.id),
        image_link: absoluteFeedImageUrl(images[0]),
        additional_image_link: additionalImageLinks(images),
        availability: item.inStock ? 'in_stock' : 'out_of_stock',
        condition: 'new',
        brand: 'Bint Saeed',
        identifier_exists: 'false',
        mpn: sku.slice(0, 70),
        product_type: accessoryProductType(item),
        google_product_category: googleProductCategory(item.category),
        color: item.colors[0]?.name ?? '',
        size: 'One Size',
        gender: 'female',
        age_group: 'adult',
        size_system: 'INT',
        size_type: 'regular',
        custom_label_0: 'jewellery',
        productId: item.id,
        aedMaster: item.price,
      } satisfies MerchantCatalogItem
    })
}

/** Full shop + visible accessories for Merchant / Meta ingestion. */
export async function buildMerchantCatalogItems(): Promise<MerchantCatalogItem[]> {
  const products = await getMergedProducts()
  return [...buildShopItems(products), ...buildAccessoryItems(accessories)]
}
