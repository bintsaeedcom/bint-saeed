import type { CartItem } from '@/store/cartStore'

const APPAREL_SKU = /^BS-(?:AB|DR|KF|ST)-\d{3}(?:-[A-Z0-9]{3})?$/

/** Must stay identical to the size suffix used by the Meta catalogue feed. */
export function metaCatalogSizeSuffix(size: string): string {
  return size
    .trim()
    .toUpperCase()
    .replace(/\s+/g, '-')
    .replace(/[^A-Z0-9-]/g, '')
    .slice(0, 12)
}

/** Exact Meta feed `id` for one apparel colour/size variant. */
export function buildMetaApparelCatalogId(sku: string, size: string): string | undefined {
  const normalizedSku = sku.trim().toUpperCase()
  const sizeSuffix = metaCatalogSizeSuffix(size)
  if (!APPAREL_SKU.test(normalizedSku) || !sizeSuffix) return undefined
  return `${normalizedSku}-${sizeSuffix}`.slice(0, 50)
}

/**
 * Accessories are emitted to the Meta feed under the style SKU only
 * (bag-charm colour suffixes like BS-BG-001-FJX must collapse to BS-BG-001).
 */
export function buildMetaAccessoryCatalogId(sku: string): string | undefined {
  const normalizedSku = sku.trim().toUpperCase()
  if (!normalizedSku || APPAREL_SKU.test(normalizedSku)) return undefined
  // Gift-card house codes are not in the Meta catalogue feed.
  if (normalizedSku.startsWith('BS-GC-')) return undefined
  const bagCharmParent = normalizedSku.match(/^(BS-BG-\d{3})(?:-[A-Z0-9]{3})?$/)
  if (bagCharmParent) return bagCharmParent[1].slice(0, 50)
  return normalizedSku.slice(0, 50)
}

export function metaCatalogIdForCartLine(
  line: Pick<CartItem, 'sku' | 'size' | 'giftCard'>,
): string | undefined {
  if (line.giftCard || !line.sku) return undefined
  return (
    buildMetaApparelCatalogId(line.sku, line.size || '') ||
    buildMetaAccessoryCatalogId(line.sku)
  )
}

export type MetaCatalogContent = {
  id: string
  quantity: number
  item_price?: number
}

export function metaCatalogContentsForCart(
  items: Array<Pick<CartItem, 'sku' | 'size' | 'quantity' | 'price' | 'giftCard'>>,
): MetaCatalogContent[] {
  return items.flatMap((item) => {
    const id = metaCatalogIdForCartLine(item)
    if (!id) return []
    return [
      {
        id,
        quantity: Math.max(1, Math.floor(item.quantity)),
        ...(Number.isFinite(item.price) ? { item_price: item.price } : {}),
      },
    ]
  })
}

/** Resolve exact Meta feed ids from checkout/order metadata lines (sku + size). */
export function metaCatalogContentsFromOrderMeta(
  items: Array<{
    sku?: string
    size?: string
    quantity?: number
    price?: number
    priceAed?: number
    giftCard?: unknown
  }>,
): MetaCatalogContent[] {
  return items.flatMap((item) => {
    if (item.giftCard || !item.sku) return []
    const id =
      (item.size ? buildMetaApparelCatalogId(item.sku, item.size) : undefined) ||
      buildMetaAccessoryCatalogId(item.sku)
    if (!id) return []
    const price = item.priceAed ?? item.price
    return [
      {
        id,
        quantity: Math.max(1, Math.floor(item.quantity ?? 1)),
        ...(typeof price === 'number' && Number.isFinite(price) ? { item_price: price } : {}),
      },
    ]
  })
}
