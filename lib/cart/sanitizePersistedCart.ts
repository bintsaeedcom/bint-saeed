import { accessories, isAccessoryShopVisible } from '@/data/accessories'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'
import { products } from '@/data/products'
import { productPrimaryImage } from '@/lib/products/shopImage'
import type { CartItem } from '@/store/cartStore'

type CatalogLine = {
  id: string
  name: string
  price: number
  image: string
}

const CATALOG_BY_ID = new Map<string, CatalogLine>(
  [
    ...products,
    ...accessories.filter(isAccessoryShopVisible),
  ].map((item) => [
    item.id,
    {
      id: item.id,
      name: item.name,
      price: item.price,
      image: productPrimaryImage(item),
    },
  ]),
)

function resolveCatalogLine(id: string): CatalogLine | undefined {
  return CATALOG_BY_ID.get(resolveAccessoryId(id))
}

function migrateAccessoryProductUrl(productUrl: string | undefined): string | undefined {
  if (!productUrl?.includes('/accessories/')) return productUrl
  const legacyMatch = productUrl.match(/\/accessories\/([^/?#]+)/)
  if (!legacyMatch) return productUrl
  const resolved = resolveAccessoryId(decodeURIComponent(legacyMatch[1]!))
  return resolved === legacyMatch[1] ? productUrl : productUrl.replace(legacyMatch[1]!, resolved)
}

/** Drop stale test-cart lines and refresh name/image/price from the live catalog. */
export function sanitizePersistedCart(items: CartItem[]): CartItem[] {
  return items
    .map((item) => {
      const catalog = resolveCatalogLine(item.id)
      if (!catalog) return null
      const canonicalId = resolveAccessoryId(item.id)

      const migratedUrl = migrateAccessoryProductUrl(item.productUrl)

      return {
        ...item,
        id: canonicalId,
        name: catalog.name,
        price: catalog.price,
        image: item.image?.trim() ? item.image : catalog.image,
        ...(migratedUrl !== item.productUrl ? { productUrl: migratedUrl } : {}),
      }
    })
    .filter((item): item is CartItem => item !== null)
}
