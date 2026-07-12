import type { AppLocale } from '@/lib/i18n/routing'
import { accessories } from '@/data/accessories'
import { products } from '@/data/products'
import { getLocalizedAccessoryDisplayName } from '@/lib/accessories/accessoryCatalogCopyI18n'
import type { SearchableItem } from '@/lib/i18n/searchableContentI18n'
import { getLocalizedProductDisplayName } from '@/lib/products/productDisplayNameI18n'
import { getProductHref } from '@/lib/products/links'

function asAppLocale(locale: AppLocale | string): AppLocale {
  return (locale || 'en') as AppLocale
}

/** Product + accessory rows for header search (merged with editorial searchable content). */
export function getSearchableCatalogItems(locale: AppLocale | string): SearchableItem[] {
  const appLocale = asAppLocale(locale)
  const productRows: SearchableItem[] = products.map((product) => ({
    title: getLocalizedProductDisplayName(product, appLocale),
    href: getProductHref(product),
    category: product.category,
  }))

  const accessoryRows: SearchableItem[] = accessories.map((accessory) => ({
    title: getLocalizedAccessoryDisplayName(accessory, appLocale),
    href: `/accessories/${accessory.id}`,
    category: accessory.category,
  }))

  return [...productRows, ...accessoryRows]
}
