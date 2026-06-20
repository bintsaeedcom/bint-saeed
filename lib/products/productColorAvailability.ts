import type { Product } from '@/data/products'

/** Gallery for a colour variant, or the product default when no variant gallery exists. */
export function getProductImagesForColor(
  product: Pick<Product, 'images' | 'colorImages'>,
  colorName?: string,
): string[] {
  const trimmed = colorName?.trim()
  if (trimmed) {
    const variantImages = product.colorImages?.[trimmed]
    if (Array.isArray(variantImages) && variantImages.length > 0) {
      return variantImages
    }
  }
  return product.images
}

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
