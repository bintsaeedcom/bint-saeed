/** Clickable sizes for ready-to-wear (shop) — excludes accessories, which use product.sizes (e.g. One Size). */
export const STANDARD_APPAREL_SIZES = ['XS', 'S', 'M', 'L', 'XL'] as const

export const LENGTH_CM_MIN = 52
export const LENGTH_CM_MAX = 65

export function lengthCmSelectOptions(): string[] {
  const out: string[] = []
  for (let n = LENGTH_CM_MIN; n <= LENGTH_CM_MAX; n += 1) out.push(String(n))
  return out
}

export const CUSTOMISATION_SURCHARGE_AED = 40
export const CUSTOMISATION_MAX_CHARS = 25

export function categoryNeedsLengthCmDropdown(category: string): boolean {
  return category === 'Abayas' || category === 'Caftans' || category === 'Dresses'
}

export function getPdpSizeOptions(category: string, productSizes: readonly string[]): string[] {
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
