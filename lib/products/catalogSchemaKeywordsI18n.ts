import type { AppLocale } from '@/lib/i18n/routing'
import { getStyleSkuBySlug } from '@/lib/products/sku'

/** Exclusive schema keywords for catalogue items without hero-specific keyword packs. */
const CATALOG_EXCLUSIVE_EN: Record<string, readonly string[]> = {
  'covent-garden-abaya': [
    'Covent Garden Abaya',
    'Bint Saeed Covent Garden Abaya',
    'Al Talli abaya',
    'linen abaya',
    'luxury linen abaya',
    'BS-AB-002',
  ],
  'marylebone-abaya': [
    'Marylebone Abaya',
    'Bint Saeed Marylebone Abaya',
    'open front abaya',
    'layering abaya',
    'BS-AB-004',
  ],
  'park-lane-abaya': [
    'Park Lane Abaya',
    'Bint Saeed Park Lane Abaya',
    'everyday abaya',
    'city abaya',
    'BS-AB-006',
  ],
  'covent-garden-long-dress': [
    'Covent Garden Long Dress',
    'Bint Saeed Covent Garden Long Dress',
    'column dress',
    'stretch crepe dress',
    'BS-DR-002',
  ],
  'hampstead-dress': [
    'Hampstead Dress',
    'Bint Saeed Hampstead Dress',
    'Al Talli dress',
    'structured dress',
    'BS-DR-003',
  ],
  'covent-garden-signature-set': [
    'Covent Garden Signature Set',
    'Bint Saeed Covent Garden Set',
    'premium two-piece set',
    'dress and jacket set',
    'BS-ST-002',
  ],
  'soho-set': [
    'Soho Set',
    'Bint Saeed Soho Set',
    'Al Talli set',
    'coordinate set',
    'BS-ST-003',
  ],
  'hyde-park-set': [
    'Hyde Park Set',
    'Bint Saeed Hyde Park Set',
    'designer set',
    'BS-ST-001',
  ],
}

/** Returns slug-specific discovery terms for secondary catalogue items (EN-led; id/ms use EN). */
export function getCatalogExclusiveSchemaKeywords(
  slug: string,
  locale: AppLocale = 'en',
  colorName?: string,
): string[] {
  const key = slug.toLowerCase()
  const base = CATALOG_EXCLUSIVE_EN[key]
  if (!base) return []

  const terms = new Set<string>(locale === 'en' ? base : base)
  const sku = getStyleSkuBySlug(key)
  if (sku) terms.add(sku)

  const color = colorName?.trim()
  if (color) terms.add(color)

  return [...terms]
}
