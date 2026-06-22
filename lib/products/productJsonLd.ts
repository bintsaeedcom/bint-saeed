import type { Product } from '@/data/products'
import { getProductSlug } from '@/lib/products/links'
import { getProductImageAlt } from '@/lib/products/imageAlt'
import type { AppLocale } from '@/lib/i18n/routing'
import { schemaInLanguageForLocale } from '@/lib/i18n/bcp47'
import { buildHeritageRichDescription } from '@/lib/products/heritageSeo'
import { resolveProductSku } from '@/lib/products/sku'
import { getProductColorOptions } from '@/lib/products/productColorAvailability'
import { getProductPdpContent } from '@/data/productPdpContent'
import {
  buildFaqPageJsonLd,
  buildProductAdditionalProperties,
  buildProductSchemaKeywords,
  getProductFaq,
  getProductSchemaFacts,
} from '@/lib/products/productSchemaMeta'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

export function absoluteCatalogImageUrl(src: string): string {
  const path = src.startsWith('/') ? src : `/${src}`
  return `${SITE_URL}${encodeURI(path)}`
}

function buildImageObjects(
  product: Product,
  images: string[],
  color?: string,
  lang?: string,
): Array<Record<string, string | boolean>> {
  return images.map((src, index) => {
    const caption = getProductImageAlt(product, src, { color, index })
    const url = absoluteCatalogImageUrl(src)
    const isWebp = src.toLowerCase().endsWith('.webp')
    return {
      '@type': 'ImageObject',
      '@id': `${url}#image`,
      url,
      contentUrl: url,
      name: caption,
      caption,
      description: caption,
      ...(isWebp ? { encodingFormat: 'image/webp' } : {}),
      ...(lang ? { inLanguage: lang } : {}),
      representativeOfPage: index === 0,
    }
  })
}

function buildSchemaDescription(
  product: Product,
  slug: string,
  color?: string,
): string {
  const pdp = getProductPdpContent(product, { color })
  if (pdp.introParagraphs?.[0]) return pdp.introParagraphs[0].trim()
  return buildHeritageRichDescription(slug, product.description)
}

function schemaManufacturer() {
  return {
    '@type': 'Organization' as const,
    name: 'Bint Saeed, Abu Dhabi, UAE',
    address: {
      '@type': 'PostalAddress' as const,
      addressLocality: 'Abu Dhabi',
      addressCountry: 'AE',
    },
  }
}

function schemaAudience() {
  return {
    '@type': 'PeopleAudience' as const,
    suggestedGender: 'female' as const,
    audienceType:
      'Women seeking luxury modest fashion, abayas, kaftans and evening wear from Abu Dhabi, UAE',
  }
}

function schemaSharedFields(
  product: Product,
  slug: string,
  color?: string,
  lang?: string,
) {
  const facts = getProductSchemaFacts(product)

  return {
    description: buildSchemaDescription(product, slug, color),
    keywords: buildProductSchemaKeywords(product, color),
    material: product.fabric,
    countryOfOrigin: {
      '@type': 'Country' as const,
      name: 'United Arab Emirates',
    },
    additionalProperty: buildProductAdditionalProperties(product, facts),
    manufacturer: schemaManufacturer(),
    audience: schemaAudience(),
    ...(lang ? { inLanguage: lang } : {}),
  }
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

function buildProductNode(
  product: Product,
  input: {
    pageUrl: string
    lang: string
    activeImages: string[]
    selectedColor?: string
    variantColor?: string
    variantImages?: string[]
    nodeId: string
    displayName: string
  },
) {
  const slug = getProductSlug(product)
  const color = input.variantColor ?? input.selectedColor
  const images = input.variantImages ?? input.activeImages
  const sku = resolveProductSku(product, color) ?? product.id

  return {
    '@type': 'Product' as const,
    '@id': input.nodeId,
    name: input.displayName,
    sku,
    mpn: sku,
    brand: { '@type': 'Brand' as const, name: 'Bint Saeed' },
    category: product.category,
    color: color || product.colors[0]?.name,
    image: buildImageObjects(product, images, color, input.lang),
    offers: buildOffer(product, input.pageUrl),
    ...schemaSharedFields(product, slug, color, input.lang),
  }
}

/** PDP Product / ProductGroup JSON-LD tuned for Google Shopping, image search, and AI crawlers. */
export function buildShopProductJsonLd(input: {
  product: Product
  activeImages: string[]
  selectedColor?: string
  productPagePath: string
  locale?: AppLocale
}) {
  const { product, activeImages, selectedColor, productPagePath, locale = 'en' } = input
  const slug = getProductSlug(product)
  const pageUrl = `${SITE_URL}${productPagePath}`
  const lang = schemaInLanguageForLocale(locale)
  const variantColors = getProductColorOptions(product)
  const pdp = getProductPdpContent(product, { color: selectedColor })
  const faqItems = getProductFaq(product, pdp.faq)
  const faqNode = buildFaqPageJsonLd(pageUrl, faqItems, lang)

  let productNode: Record<string, unknown>

  if (product.colorImages && Object.keys(product.colorImages).length > 0) {
    productNode = {
      '@type': 'ProductGroup',
      '@id': `${pageUrl}#product`,
      name: product.name,
      productGroupID: product.id,
      variesBy: 'https://schema.org/color',
      category: product.category,
      brand: { '@type': 'Brand', name: 'Bint Saeed' },
      image: buildImageObjects(product, activeImages, selectedColor, lang),
      ...schemaSharedFields(product, slug, selectedColor, lang),
      hasVariant: variantColors.map((color) => {
        const variantImages = product.colorImages?.[color.name] ?? product.images
        const colorSlug = color.name.toLowerCase().replace(/\s+/g, '-')
        return buildProductNode(product, {
          pageUrl,
          lang,
          activeImages,
          selectedColor,
          variantColor: color.name,
          variantImages,
          nodeId: `${pageUrl}#variant-${colorSlug}`,
          displayName: `${product.name} — ${color.name}`,
        })
      }),
    }
  } else {
    productNode = buildProductNode(product, {
      pageUrl,
      lang,
      activeImages,
      selectedColor,
      nodeId: `${pageUrl}#product`,
      displayName: product.name,
    })
  }

  const graph: Record<string, unknown>[] = [productNode]
  if (faqNode) graph.push(faqNode)

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
