import type { Product } from '@/data/products'

const FRONT_PLACEHOLDER = '/placeholders/product-front-F.svg'

export function isWebshopPicturePath(src: string): boolean {
  return src.startsWith('/Webshop pictures/') || src.startsWith('/Webshop%20pictures/')
}

export function productPrimaryImage(product: Pick<Product, 'images'>): string {
  return product.images[0] ?? FRONT_PLACEHOLDER
}

export function productImageSrc(src: string): string {
  const trimmed = src.trim()
  if (!trimmed || trimmed.startsWith('http')) return trimmed
  if (!isWebshopPicturePath(trimmed)) return trimmed
  // Accessories catalogue paths are already percent-encoded (`%20`); encodeURI would break them.
  if (/%[0-9A-Fa-f]{2}/.test(trimmed)) return trimmed
  return encodeURI(trimmed)
}

/** Absolute HTTPS URL for Stripe Checkout line-item images (spaces must be encoded). */
export function absoluteProductImageUrl(siteOrigin: string, src: string): string | undefined {
  const trimmed = src.trim().slice(0, 500)
  if (!trimmed) return undefined
  if (trimmed.startsWith('http')) return trimmed
  const origin = siteOrigin.replace(/\/$/, '')
  const path = trimmed.startsWith('/') ? trimmed : `/${trimmed}`
  return `${origin}${productImageSrc(path)}`
}
