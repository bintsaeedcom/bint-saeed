import type { Product } from '@/data/products'

const FRONT_PLACEHOLDER = '/placeholders/product-front-F.svg'

export function isWebshopPicturePath(src: string): boolean {
  return src.startsWith('/Webshop pictures/') || src.startsWith('/Webshop%20pictures/')
}

export function productPrimaryImage(product: Pick<Product, 'images'>): string {
  return product.images[0] ?? FRONT_PLACEHOLDER
}

export function productImageSrc(src: string): string {
  return isWebshopPicturePath(src) ? encodeURI(src) : src
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
