import type { Product } from '@/data/products'

export function slugifyProductName(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function getProductSlug(product: { name: string; slug?: string }): string {
  const s = product.slug?.trim()
  if (s) return s.toLowerCase()
  return slugifyProductName(product.name)
}

export function getProductHref(product: { id: string; name: string; slug?: string }): string {
  return `/shop/${getProductSlug(product)}`
}

export function resolveProductIdentifier<T extends Pick<Product, 'id' | 'name' | 'slug'>>(
  products: T[],
  identifier: string
): T | null {
  const normalized = decodeURIComponent(identifier).trim().toLowerCase()
  if (!normalized) return null

  return (
    products.find((product) => product.id.toLowerCase() === normalized) ??
    products.find((product) => getProductSlug(product) === normalized) ??
    null
  )
}
