/** Clickable sizes for ready-to-wear (shop) — excludes accessories, which use product.sizes (e.g. One Size). */
export const STANDARD_APPAREL_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'] as const

const ONE_SIZE_ONLY_SLUGS = new Set(['mayfair-kaftan', 'nothing-hill-kaftan'])

export function productIsOneSizeOnly(product: {
  slug?: string
  sizes?: readonly string[]
}): boolean {
  const slug = (product.slug ?? '').trim().toLowerCase()
  if (slug && ONE_SIZE_ONLY_SLUGS.has(slug)) return true
  const sizes = product.sizes ?? []
  return sizes.length === 1 && /one\s*size/i.test(sizes[0] ?? '')
}

export function productShowsSizeSelector(
  category: string,
  productSizes: readonly string[],
  slug?: string,
): boolean {
  return !productIsOneSizeOnly({ slug, sizes: productSizes })
}

export const LENGTH_CM_MIN = 52
export const LENGTH_CM_MAX = 65

import { lineTotalInCurrency, lineUnitInCurrency } from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'

export function lengthCmSelectOptions(): string[] {
  const out: string[] = []
  for (let n = LENGTH_CM_MIN; n <= LENGTH_CM_MAX; n += 1) out.push(String(n))
  return out
}

export const CUSTOMISATION_MAX_CHARS = 35

/** Hidden-pocket personalisation is complimentary on abaya PDPs only. */
export function productOffersPersonalisation(category: string): boolean {
  return category === 'Abayas'
}

export function categoryNeedsLengthCmDropdown(category: string): boolean {
  return category === 'Abayas' || category === 'Kaftans' || category === 'Dresses'
}

export function getPdpSizeOptions(
  category: string,
  productSizes: readonly string[],
  slug?: string,
): string[] {
  if (productIsOneSizeOnly({ slug, sizes: productSizes })) return ['One Size']
  if (category === 'Accessories') return [...productSizes]
  return [...STANDARD_APPAREL_SIZES]
}

export function lineUnitAed(item: {
  price: number
  customisationSurcharge?: number
}): number {
  return item.price + (item.customisationSurcharge ?? 0)
}

export function lineTotalAed(item: {
  price: number
  customisationSurcharge?: number
  quantity: number
}): number {
  return lineUnitAed(item) * item.quantity
}

export function lineUnitForCurrency(
  item: Parameters<typeof lineUnitInCurrency>[0],
  currency: SupportedCurrency,
): number {
  return lineUnitInCurrency(item, currency)
}

export function lineTotalForCurrency(
  item: Parameters<typeof lineTotalInCurrency>[0],
  currency: SupportedCurrency,
): number {
  return lineTotalInCurrency(item, currency)
}
