import { accessories } from '@/data/accessories'
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
  [...products, ...accessories].map((item) => [
    item.id,
    {
      id: item.id,
      name: item.name,
      price: item.price,
      image: productPrimaryImage(item),
    },
  ]),
)

/** Drop stale test-cart lines and refresh name/image/price from the live catalog. */
export function sanitizePersistedCart(items: CartItem[]): CartItem[] {
  return items
    .map((item) => {
      const catalog = CATALOG_BY_ID.get(item.id)
      if (!catalog) return null

      return {
        ...item,
        name: catalog.name,
        price: catalog.price,
        image: item.image?.trim() ? item.image : catalog.image,
      }
    })
    .filter((item): item is CartItem => item !== null)
}
