import type { Product } from '@/data/products'
import type { AppLocale } from '@/lib/i18n/routing'
import { getProductSlug } from '@/lib/products/links'

/** Localized H1 / grid titles — district names kept as brand identifiers. */
const PRODUCT_DISPLAY_NAME_BY_LOCALE: Partial<Record<AppLocale, Record<string, string>>> = {
  fr: {
    'knightsbridge-abaya-jacket': 'Abaya veste Knightsbridge',
    'covent-garden-abaya': 'Abaya Covent Garden',
    'kensington-abaya': 'Abaya Kensington',
    'marylebone-abaya': 'Abaya Marylebone',
    'belgravia-abaya': 'Abaya Belgravia',
    'park-lane-abaya': 'Abaya Park Lane',
    'hyde-park-set': 'Ensemble Hyde Park',
    'mayfair-kaftan': 'Kaftan Mayfair',
    'nothing-hill-kaftan': 'Kaftan Nothing Hill',
    'knightsbridge-dress': 'Robe Knightsbridge',
    'covent-garden-long-dress': 'Robe longue Covent Garden',
    'hampstead-dress': 'Robe Hampstead',
    'covent-garden-signature-set': 'Ensemble signature Covent Garden',
    'soho-set': 'Ensemble Soho',
    'grosvenor-set': 'Ensemble deux pièces Grosvenor',
  },
}

export function getLocalizedProductDisplayName(
  product: Pick<Product, 'name' | 'slug'>,
  locale: AppLocale = 'en',
): string {
  if (locale === 'en') return product.name
  const slug = getProductSlug(product)
  return PRODUCT_DISPLAY_NAME_BY_LOCALE[locale]?.[slug] ?? product.name
}
