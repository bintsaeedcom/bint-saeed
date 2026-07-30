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

function resolveCatalogLineFromUrl(productUrl: string | undefined): CatalogLine | undefined {
  if (!productUrl || typeof productUrl !== 'string') return undefined
  const slug = productUrl.match(/\/(?:shop|accessories)\/([^/?#]+)/)?.[1]
  if (!slug) return undefined
  let decoded = slug
  try {
    decoded = decodeURIComponent(slug)
  } catch {
    return undefined
  }
  const item =
    products.find((item) => item.slug === decoded) ??
    accessories.find((item) => item.id === resolveAccessoryId(decoded))
  if (!item) return undefined
  return {
    id: item.id,
    name: item.name,
    price: item.price,
    image: productPrimaryImage(item),
  }
}

function migrateAccessoryProductUrl(productUrl: string | undefined): string | undefined {
  if (!productUrl?.includes('/accessories/')) return productUrl
  const legacyMatch = productUrl.match(/\/accessories\/([^/?#]+)/)
  if (!legacyMatch) return productUrl
  let decoded = legacyMatch[1]!
  try {
    decoded = decodeURIComponent(legacyMatch[1]!)
  } catch {
    return productUrl
  }
  const resolved = resolveAccessoryId(decoded)
  return resolved === legacyMatch[1] ? productUrl : productUrl.replace(legacyMatch[1]!, resolved)
}

export type SanitizePersistedCartResult = {
  items: CartItem[]
  removedCount: number
}

/** Drop stale test-cart lines and refresh name/image/price from the live catalog. */
export function sanitizePersistedCartWithMeta(items: CartItem[]): SanitizePersistedCartResult {
  const next: CartItem[] = []
  let removedCount = 0
  if (!Array.isArray(items)) {
    return { items: next, removedCount: 0 }
  }

  for (const item of items) {
    if (!item || typeof item !== 'object') {
      removedCount += 1
      continue
    }
    const rawId = typeof item.id === 'string' ? item.id : ''
    if (!rawId) {
      removedCount += 1
      continue
    }

    if (rawId.startsWith('gift-card-')) {
      next.push(item)
      continue
    }

    let catalog: CatalogLine | undefined
    try {
      catalog = resolveCatalogLine(rawId) ?? resolveCatalogLineFromUrl(item.productUrl)
    } catch {
      removedCount += 1
      continue
    }
    if (!catalog) {
      removedCount += 1
      continue
    }

    let canonicalId = rawId
    let migratedUrl = item.productUrl
    try {
      canonicalId = resolveAccessoryId(rawId)
      migratedUrl = migrateAccessoryProductUrl(item.productUrl)
    } catch {
      /* keep raw id / url */
    }

    next.push({
      ...item,
      id: canonicalId,
      name: catalog.name,
      price: catalog.price,
      image: item.image?.trim() ? item.image : catalog.image,
      ...(migratedUrl !== item.productUrl ? { productUrl: migratedUrl } : {}),
    })
  }
  return { items: next, removedCount }
}

export function sanitizePersistedCart(items: CartItem[]): CartItem[] {
  return sanitizePersistedCartWithMeta(items).items
}
