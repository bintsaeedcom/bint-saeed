import type { Product } from '@/data/products'

type GarmentCategory = 'Abayas' | 'Dresses' | 'Kaftans' | 'Sets'

/**
 * Parent style SKU by category (BS-AB / BS-DR / BS-KF / BS-ST + ###).
 * Colour variants append a 3-letter suffix: BS-DR-001-BUR
 */
const STYLE_SKU_BY_SLUG: Record<string, string> = {
  // Abayas — BS-AB-###
  'knightsbridge-abaya-jacket': 'BS-AB-001',
  'covent-garden-abaya': 'BS-AB-002',
  'kensington-abaya': 'BS-AB-003',
  'marylebone-abaya': 'BS-AB-004',
  'belgravia-abaya': 'BS-AB-005',
  'park-lane-abaya': 'BS-AB-006',
  // Dresses — BS-DR-###
  'knightsbridge-dress': 'BS-DR-001',
  'covent-garden-long-dress': 'BS-DR-002',
  'hampstead-dress': 'BS-DR-003',
  // Kaftans — BS-KF-###
  'mayfair-kaftan': 'BS-KF-001',
  'nothing-hill-kaftan': 'BS-KF-002',
  // Sets — BS-ST-###
  'hyde-park-set': 'BS-ST-001',
  'covent-garden-signature-set': 'BS-ST-002',
  'soho-set': 'BS-ST-003',
}

const STYLE_SKU_CATEGORIES = new Set<GarmentCategory>(['Abayas', 'Dresses', 'Kaftans', 'Sets'])

/** @deprecated Use STYLE_SKU_BY_SLUG — kept for docs/scripts. */
export const ABAYA_STYLE_SKU_BY_SLUG = Object.fromEntries(
  Object.entries(STYLE_SKU_BY_SLUG).filter(([slug]) => slug.includes('abaya')),
) as Record<string, string>

export const DRESS_STYLE_SKU_BY_SLUG = Object.fromEntries(
  Object.entries(STYLE_SKU_BY_SLUG).filter(([slug]) => slug.includes('dress')),
) as Record<string, string>

export const KAFTAN_STYLE_SKU_BY_SLUG = Object.fromEntries(
  Object.entries(STYLE_SKU_BY_SLUG).filter(([slug]) => slug.includes('kaftan')),
) as Record<string, string>

export const SET_STYLE_SKU_BY_SLUG = Object.fromEntries(
  Object.entries(STYLE_SKU_BY_SLUG).filter(([slug]) => slug.includes('set')),
) as Record<string, string>

/** Canonical 3-letter colour codes for variant SKUs. */
const COLOR_SKU_SUFFIX: Record<string, string> = {
  Black: 'BLK',
  Burgundy: 'BUR',
  'Navy Blue': 'NVY',
  'Navy Grey': 'NVG',
  'Dark Brown': 'DBR',
  'Dark Maroon': 'DMN',
  'Midnight Black': 'BLK',
  'Deep Burgundy': 'BUR',
  'Desert Sand': 'SND',
  'Peach Pink': 'PPK',
  Magenta: 'MAG',
}

/** Derive a stable 3-letter code from any colour name not in the table. */
export function colorSkuSuffix(colorName: string): string {
  const trimmed = colorName.trim()
  if (!trimmed) return ''
  const known = COLOR_SKU_SUFFIX[trimmed]
  if (known) return known

  const words = trimmed.split(/\s+/).filter(Boolean)
  if (words.length === 1) {
    return words[0]!.replace(/[^a-zA-Z]/g, '').toUpperCase().slice(0, 3).padEnd(3, 'X')
  }
  return words
    .map((word) => word.replace(/[^a-zA-Z]/g, '')[0] ?? '')
    .join('')
    .toUpperCase()
    .slice(0, 3)
    .padEnd(3, 'X')
}

export function getStyleSkuBySlug(slug: string): string | undefined {
  return STYLE_SKU_BY_SLUG[slug]
}

/** @deprecated Use getStyleSkuBySlug */
export function getAbayaStyleSku(slug: string): string | undefined {
  return getStyleSkuBySlug(slug)
}

/** Parent style SKU for abayas, dresses, kaftans, and sets. */
export function getStyleSku(product: Pick<Product, 'slug' | 'category'>): string | undefined {
  if (!STYLE_SKU_CATEGORIES.has(product.category as GarmentCategory)) return undefined
  return getStyleSkuBySlug(product.slug)
}

/**
 * Full line SKU: style code + colour suffix when a colour is selected.
 * Examples: BS-AB-001-DBR · BS-DR-002-BUR · BS-ST-003-NVY
 */
export function buildVariantSku(styleSku: string, colorName?: string): string {
  const suffix = colorName?.trim() ? colorSkuSuffix(colorName) : ''
  return suffix ? `${styleSku}-${suffix}` : styleSku
}

export function resolveProductSku(
  product: Pick<Product, 'slug' | 'category'>,
  colorName?: string,
): string | undefined {
  const styleSku = getStyleSku(product)
  if (!styleSku) return undefined
  return buildVariantSku(styleSku, colorName)
}

export function resolveSkuByProductId(
  productId: string,
  products: readonly Product[],
  colorName?: string,
): string | undefined {
  const product = products.find((p) => p.id === productId)
  if (!product) return undefined
  return resolveProductSku(product, colorName)
}

/** All style SKUs grouped for reference exports. */
export function listStyleSkusByCategory(): Record<GarmentCategory, Record<string, string>> {
  const byCategory: Record<GarmentCategory, Record<string, string>> = {
    Abayas: {},
    Dresses: {},
    Kaftans: {},
    Sets: {},
  }
  for (const [slug, sku] of Object.entries(STYLE_SKU_BY_SLUG)) {
    if (slug.includes('abaya')) byCategory.Abayas[slug] = sku
    else if (slug.includes('dress')) byCategory.Dresses[slug] = sku
    else if (slug.includes('kaftan')) byCategory.Kaftans[slug] = sku
    else if (slug.includes('set')) byCategory.Sets[slug] = sku
  }
  return byCategory
}
