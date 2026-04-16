import type { Product } from '@/data/products'

export function slugifyProductName(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function getProductSlug(product: Pick<Product, 'name'>): string {
  return slugifyProductName(product.name)
}

export function getProductHref(product: Pick<Product, 'id' | 'name'>): string {
  return `/shop/${getProductSlug(product)}`
}

export function resolveProductIdentifier<T extends Pick<Product, 'id' | 'name'>>(
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
