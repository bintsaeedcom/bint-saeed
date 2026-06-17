import type { Product } from '@/data/products'

/** Swatches that have a non-empty gallery in `colorImages`. */
export function getProductColorOptions(product: Pick<Product, 'colors' | 'colorImages'>): Product['colors'] {
  if (product.colorImages && Object.keys(product.colorImages).length > 0) {
    return product.colors.filter((color) => {
      const images = product.colorImages?.[color.name]
      return Array.isArray(images) && images.length > 0
    })
  }
  return product.colors
}
