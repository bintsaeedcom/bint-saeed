import type { Product } from '@/data/products'
import { products } from '@/data/products'
import { findAccessoryById } from '@/lib/accessories/accessoryRouteAliases'

/**
 * Manual garment availability. Garments are made to order, so stock is curated
 * by hand rather than counted. Colour and size names must match `data/products.ts`.
 */
interface GarmentStockRule {
  /** Every colour and size is unavailable. */
  soldOut?: boolean
  soldOutColors?: readonly string[]
  /** Applies across all colours. */
  soldOutSizes?: readonly string[]
  /** Applies across all colours. */
  lowStockSizes?: readonly string[]
}

const GARMENT_STOCK_BY_SLUG: Record<string, GarmentStockRule> = {
  'mayfair-kaftan': { soldOut: true },
  'nothing-hill-kaftan': { soldOut: true },
  'knightsbridge-abaya-jacket': { soldOutColors: ['Dark Brown'] },
  'marylebone-abaya': { soldOut: true },
  'kensington-abaya': { soldOut: true },
  'soho-set': { soldOutSizes: ['XL', 'XXL'], lowStockSizes: ['S', 'M'] },
}

type StockProduct = Pick<Product, 'slug'>

function ruleFor(product: StockProduct): GarmentStockRule | undefined {
  return GARMENT_STOCK_BY_SLUG[product.slug]
}

function includesName(list: readonly string[] | undefined, value: string | undefined): boolean {
  const trimmed = value?.trim()
  if (!list || !trimmed) return false
  return list.some((entry) => entry.toLowerCase() === trimmed.toLowerCase())
}

export function isProductSoldOut(product: StockProduct): boolean {
  return Boolean(ruleFor(product)?.soldOut)
}

export function isColorSoldOut(product: StockProduct, color: string | undefined): boolean {
  const rule = ruleFor(product)
  if (!rule) return false
  return Boolean(rule.soldOut) || includesName(rule.soldOutColors, color)
}

export function isSizeSoldOut(product: StockProduct, size: string | undefined): boolean {
  const rule = ruleFor(product)
  if (!rule) return false
  return Boolean(rule.soldOut) || includesName(rule.soldOutSizes, size)
}

export function isVariantSoldOut(
  product: StockProduct,
  variant: { color?: string; size?: string },
): boolean {
  return isColorSoldOut(product, variant.color) || isSizeSoldOut(product, variant.size)
}

export function isVariantLowStock(
  product: StockProduct,
  variant: { color?: string; size?: string },
): boolean {
  if (isVariantSoldOut(product, variant)) return false
  return includesName(ruleFor(product)?.lowStockSizes, variant.size)
}

/** Every colour the product offers is sold out (product-level or colour-level). */
export function areAllColorsSoldOut(
  product: StockProduct,
  colors: readonly { name: string }[],
): boolean {
  if (isProductSoldOut(product)) return true
  return colors.length > 0 && colors.every((color) => isColorSoldOut(product, color.name))
}

export function firstAvailableColor(
  product: StockProduct,
  colors: readonly { name: string }[],
): string | undefined {
  return colors.find((color) => !isColorSoldOut(product, color.name))?.name ?? colors[0]?.name
}

export function firstAvailableSize(product: StockProduct, sizes: readonly string[]): string | undefined {
  return sizes.find((size) => !isSizeSoldOut(product, size)) ?? sizes[0]
}

/** Server-side guard for cart lines keyed by catalogue product or accessory id. */
export function isCatalogLineSoldOut(line: { id: string; color?: string; size?: string }): boolean {
  const product = products.find((p) => p.id === line.id)
  if (product) return isVariantSoldOut(product, { color: line.color, size: line.size })
  const accessory = findAccessoryById(line.id)
  return accessory ? !accessory.inStock : false
}
