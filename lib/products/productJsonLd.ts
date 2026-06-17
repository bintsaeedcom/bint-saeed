import type { Product } from '@/data/products'
import { getProductImageAlt } from '@/lib/products/imageAlt'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

export function absoluteCatalogImageUrl(src: string): string {
  const path = src.startsWith('/') ? src : `/${src}`
  return `${SITE_URL}${encodeURI(path)}`
}

function buildImageObjects(
  product: Product,
  images: string[],
  color?: string,
): Array<Record<string, string>> {
  return images.map((src, index) => {
    const caption = getProductImageAlt(product, src, { color, index })
    const url = absoluteCatalogImageUrl(src)
    return {
      '@type': 'ImageObject',
      url,
      contentUrl: url,
      name: caption,
      caption,
    }
  })
}

function buildOffer(product: Product, pageUrl: string) {
  return {
    '@type': 'Offer' as const,
    priceCurrency: 'AED',
    price: String(product.price),
    availability: 'https://schema.org/InStock',
    url: pageUrl,
    itemCondition: 'https://schema.org/NewCondition',
    seller: {
      '@type': 'Organization',
      name: 'Bint Saeed',
    },
    areaServed: [
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'Qatar' },
      { '@type': 'Country', name: 'Kuwait' },
      { '@type': 'Country', name: 'Bahrain' },
      { '@type': 'Country', name: 'Oman' },
    ],
  }
}

/** PDP Product / ProductGroup JSON-LD tuned for Google Shopping, image search, and AI crawlers. */
export function buildShopProductJsonLd(input: {
  product: Product
  activeImages: string[]
  selectedColor?: string
  productPagePath: string
}) {
  const { product, activeImages, selectedColor, productPagePath } = input
  const pageUrl = `${SITE_URL}${productPagePath}`
  const brand = { '@type': 'Brand' as const, name: 'Bint Saeed' }
  const offer = buildOffer(product, pageUrl)

  if (product.colorImages && Object.keys(product.colorImages).length > 0) {
    return {
      '@context': 'https://schema.org',
      '@type': 'ProductGroup',
      '@id': `${pageUrl}#product`,
      name: product.name,
      description: product.description,
      brand,
      productGroupID: product.id,
      variesBy: 'https://schema.org/color',
      category: product.category,
      material: product.fabric,
      image: buildImageObjects(product, activeImages, selectedColor),
      hasVariant: product.colors.map((color) => {
        const variantImages = product.colorImages?.[color.name] ?? product.images
        const colorSlug = color.name.toLowerCase().replace(/\s+/g, '-')
        return {
          '@type': 'Product',
          '@id': `${pageUrl}#variant-${colorSlug}`,
          name: `${product.name} — ${color.name}`,
          color: color.name,
          sku: `${product.id}-${colorSlug}`,
          description: product.description,
          brand,
          category: product.category,
          material: product.fabric,
          image: buildImageObjects(product, variantImages, color.name),
          offers: offer,
        }
      }),
    }
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${pageUrl}#product`,
    name: product.name,
    description: product.description,
    sku: product.id,
    brand,
    category: product.category,
    material: product.fabric,
    color: selectedColor || product.colors[0]?.name,
    image: buildImageObjects(product, activeImages, selectedColor),
    offers: offer,
  }
}
