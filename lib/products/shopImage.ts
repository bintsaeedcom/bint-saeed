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
