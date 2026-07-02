import { accessories } from '@/data/accessories'
import { products } from '@/data/products'
import { resolveSkuByAccessoryId, resolveAccessorySkuFromSelection } from '@/lib/accessories/accessorySku'
import { resolveSkuByProductId } from '@/lib/products/sku'

/** Resolve garment or accessory reference code for cart lines and payment rails. */
export function resolveLineItemSku(productId: string, colorName?: string): string | undefined {
  return (
    resolveSkuByProductId(productId, products, colorName) ??
    resolveSkuByAccessoryId(productId, accessories, colorName)
  )
}