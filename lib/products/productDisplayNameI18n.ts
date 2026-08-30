import type { Product } from '@/data/products'
import type { AppLocale } from '@/lib/i18n/routing'
import { getProductSlug } from '@/lib/products/links'

/** Localized H1 / grid titles — district names kept as brand identifiers. */
const PRODUCT_DISPLAY_NAME_BY_LOCALE: Partial<Record<AppLocale, Record<string, string>>> = {
  zh: {
    'knightsbridge-abaya-jacket': 'Knightsbridge 夹克长袍',
    'covent-garden-abaya': 'Covent Garden 长袍',
    'kensington-abaya': 'Kensington 长袍',
    'marylebone-abaya': 'Marylebone 长袍',
    'belgravia-abaya': 'Belgravia 长袍',
    'park-lane-abaya': 'Park Lane 长袍',
    'hyde-park-set': 'Hyde Park 套装',
    'mayfair-kaftan': 'Mayfair 长袍',
    'nothing-hill-kaftan': 'Nothing Hill 长袍',
    'knightsbridge-dress': 'Knightsbridge 连衣裙',
    'covent-garden-long-dress': 'Covent Garden 长连衣裙',
    'hampstead-dress': 'Hampstead 连衣裙',
    'covent-garden-signature-set': 'Covent Garden 签名套装',
    'soho-set': 'Soho 套装',
    'grosvenor-set': 'Grosvenor 两件套',
  },
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
