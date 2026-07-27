import type { Product } from '@/data/products'
import { getLocalizedProductDisplayName } from '@/lib/products/productDisplayNameI18n'
import { getProductSlug } from '@/lib/products/links'
import {
  getProductImageAlt,
  getProductImageTitle,
  PRODUCT_IMAGE_DIMENSIONS,
} from '@/lib/products/imageAlt'
import type { AppLocale } from '@/lib/i18n/routing'
import { schemaInLanguageForLocale } from '@/lib/i18n/bcp47'
import { resolveProductSku } from '@/lib/products/sku'
import { getProductColorOptions } from '@/lib/products/productColorAvailability'
import { getPdpSizeOptions } from '@/lib/shopProductOptions'
import { getProductPdpContent } from '@/data/productPdpContent'
import { getLocalizedProductCatalogFields } from '@/lib/products/productCatalogCopyI18n'
import { buildLocalizedSchemaDescription } from '@/lib/products/productSchemaI18n'
import {
  buildFaqPageJsonLd,
  buildProductAdditionalProperties,
  buildProductSchemaKeywords,
  getProductFaq,
  getProductSchemaFacts,
} from '@/lib/products/productSchemaMeta'
import { getKaftanPageSeo, getKaftanSchemaAudience, isKaftanSlug } from '@/lib/products/kaftanSchemaI18n'
import { getCoventGardenAbayaPageSeo } from '@/lib/products/coventGardenAbayaPageSeoI18n'
import { getSohoSetPageSeo } from '@/lib/products/sohoSetPageSeoI18n'
import { getBelgraviaSchemaAudience, isBelgraviaSlug } from '@/lib/products/belgraviaSchemaI18n'
import { getKensingtonSchemaAudience, isKensingtonSlug } from '@/lib/products/kensingtonSchemaI18n'
import {
  getKnightsbridgeSchemaAudience,
  isKnightsbridgeAbayaSlug,
} from '@/lib/products/knightsbridgeSchemaI18n'
import {
  getKnightsbridgeDressSchemaAudience,
  isKnightsbridgeDressSlug,
} from '@/lib/products/knightsbridgeDressSchemaI18n'
import {
  getCoventGardenSignatureSetSchemaAudience,
  isCoventGardenSignatureSetSlug,
} from '@/lib/products/coventGardenSignatureSetSchemaI18n'
import {
  getCoventGardenLongDressSchemaAudience,
  isCoventGardenLongDressSlug,
} from '@/lib/products/coventGardenLongDressSchemaI18n'
import {
  getCoventGardenAbayaSchemaAudience,
  isCoventGardenAbayaSlug,
} from '@/lib/products/coventGardenAbayaSchemaI18n'
import {
  getSohoSetSchemaAudience,
  isSohoSetSlug,
} from '@/lib/products/sohoSetSchemaI18n'
import {
  getHampsteadDressSchemaAudience,
  getHydeParkSetSchemaAudience,
  getMaryleboneAbayaSchemaAudience,
  getParkLaneAbayaSchemaAudience,
  isHampsteadDressSlug,
  isHydeParkSetSlug,
  isMaryleboneAbayaSlug,
  isParkLaneAbayaSlug,
} from '@/lib/products/secondaryCatalogSchemaI18n'
import { getFallbackSchemaAudience } from '@/lib/products/categorySchemaAudience'
import { appendGlobalPdpSchemaAudienceExtension } from '@/lib/products/globalPdpSchemaAudienceI18n'
import { buildProductSemanticJsonLdFields } from '@/lib/products/productSemanticJsonLd'
import { getSharedAbayaSchemaAudience, SCHEMA_MANUFACTURER } from '@/lib/products/abayaSchemaShared'
import { withMerchantListingOfferFields } from '@/lib/seo/merchantOfferSchema'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

const OFFER_AREA_SERVED_COUNTRIES = [
  'United Arab Emirates',
  'Saudi Arabia',
  'Qatar',
  'Kuwait',
  'Bahrain',
  'Oman',
  'United Kingdom',
  'France',
  'Italy',
  'Germany',
  'Netherlands',
  'Switzerland',
  'Belgium',
  'Spain',
  'Portugal',
] as const

export function absoluteCatalogImageUrl(src: string): string {
  const path = src.startsWith('/') ? src : `/${src}`
  return `${SITE_URL}${encodeURI(path)}`
}

function buildImageObjects(
  product: Product,
  images: string[],
  color?: string,
  lang?: string,
  locale: AppLocale = 'en',
): Array<Record<string, unknown>> {
  return images.map((src, index) => {
    const caption = getProductImageAlt(product, src, { color, index, locale })
    const title = getProductImageTitle(src, { locale })
    const url = absoluteCatalogImageUrl(src)
    const isWebp = src.toLowerCase().endsWith('.webp')
    const filename = src.split('/').pop() ?? ''
    const dimensions = PRODUCT_IMAGE_DIMENSIONS[filename]
    return {
      '@type': 'ImageObject',
      '@id': `${url}#image`,
      url,
      contentUrl: url,
      name: title ?? caption,
      caption,
      description: caption,
      ...(isWebp ? { encodingFormat: 'image/webp' } : {}),
      ...(dimensions
        ? {
            width: { '@type': 'QuantitativeValue', value: dimensions.width, unitCode: 'E37' },
            height: { '@type': 'QuantitativeValue', value: dimensions.height, unitCode: 'E37' },
          }
        : {}),
      ...(lang ? { inLanguage: lang } : {}),
      representativeOfPage: index === 0,
    }
  })
}

function buildSchemaDescription(
  product: Product,
  slug: string,
  locale: AppLocale,
  color?: string,
): string {
  const coventGardenSeo = getCoventGardenAbayaPageSeo(slug, locale)
  if (coventGardenSeo) return coventGardenSeo.description

  const sohoSeo = getSohoSetPageSeo(slug, locale)
  if (sohoSeo) return sohoSeo.description

  const kaftanSeo = getKaftanPageSeo(slug, locale)
  if (kaftanSeo) return kaftanSeo.description

  const pdp = getProductPdpContent(product, { color, locale })
  const catalog = getLocalizedProductCatalogFields(product, locale)
  const base = pdp.introParagraphs?.[0]?.trim() || catalog.description.trim()
  return buildLocalizedSchemaDescription(product, locale, base)
}

function schemaManufacturer() {
  return {
    '@type': 'Organization' as const,
    name: SCHEMA_MANUFACTURER,
    address: {
      '@type': 'PostalAddress' as const,
      addressLocality: 'Abu Dhabi',
      addressCountry: 'AE',
    },
  }
}

function schemaAudience(locale: AppLocale, slug: string, product: Product) {
  const audienceType = isKaftanSlug(slug)
    ? getKaftanSchemaAudience(locale)
    : isBelgraviaSlug(slug)
      ? getBelgraviaSchemaAudience(locale)
      : isKensingtonSlug(slug)
        ? getKensingtonSchemaAudience(locale)
        : isKnightsbridgeAbayaSlug(slug)
          ? getKnightsbridgeSchemaAudience(locale)
          : isKnightsbridgeDressSlug(slug)
            ? getKnightsbridgeDressSchemaAudience(locale)
            : isCoventGardenSignatureSetSlug(slug)
              ? getCoventGardenSignatureSetSchemaAudience(locale)
              : isCoventGardenLongDressSlug(slug)
                ? getCoventGardenLongDressSchemaAudience(locale)
                : isCoventGardenAbayaSlug(slug)
                  ? getCoventGardenAbayaSchemaAudience(locale)
                  : isMaryleboneAbayaSlug(slug)
                    ? getMaryleboneAbayaSchemaAudience(locale)
                    : isParkLaneAbayaSlug(slug)
                      ? getParkLaneAbayaSchemaAudience(locale)
                      : isHampsteadDressSlug(slug)
                        ? getHampsteadDressSchemaAudience(locale)
                        : isSohoSetSlug(slug)
                          ? getSohoSetSchemaAudience(locale)
                          : isHydeParkSetSlug(slug)
                            ? getHydeParkSetSchemaAudience(locale)
                            : product.category === 'Abayas'
              ? getSharedAbayaSchemaAudience(locale)
              : getFallbackSchemaAudience(product.category, locale)

  return {
    '@type': 'PeopleAudience' as const,
    suggestedGender: 'female' as const,
    suggestedMinAge: 13,
    audienceType: appendGlobalPdpSchemaAudienceExtension(audienceType, locale),
  }
}

function schemaSharedFields(
  product: Product,
  slug: string,
  locale: AppLocale,
  color?: string,
  lang?: string,
) {
  const facts = getProductSchemaFacts(product, locale)

  return {
    description: buildSchemaDescription(product, slug, locale, color),
    keywords: buildProductSchemaKeywords(product, color, locale),
    material: product.fabric,
    countryOfOrigin: {
      '@type': 'Country' as const,
      name: 'United Arab Emirates',
    },
    additionalProperty: buildProductAdditionalProperties(product, facts, locale),
    manufacturer: schemaManufacturer(),
    audience: schemaAudience(locale, slug, product),
    ...buildProductSemanticJsonLdFields(slug, locale),
    ...(lang ? { inLanguage: lang } : {}),
  }
}

function buildOffer(product: Product, pageUrl: string) {
  return withMerchantListingOfferFields(
    {
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
        ...OFFER_AREA_SERVED_COUNTRIES.map((name) => ({ '@type': 'Country' as const, name })),
        { '@type': 'Place' as const, name: 'Worldwide' },
      ],
    },
    { price: product.price, currency: 'AED' },
  )
}

function buildProductNode(
  product: Product,
  input: {
    pageUrl: string
    locale: AppLocale
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
  const sizes = getPdpSizeOptions(product.category, product.sizes ?? [], slug)

  return {
    '@type': 'Product' as const,
    '@id': input.nodeId,
    name: input.displayName,
    sku,
    mpn: sku,
    brand: { '@type': 'Brand' as const, name: 'Bint Saeed' },
    category: product.category,
    color: color || product.colors[0]?.name,
    size: sizes.join('/'),
    image: buildImageObjects(product, images, color, input.lang, input.locale),
    offers: buildOffer(product, input.pageUrl),
    ...schemaSharedFields(product, slug, input.locale, color, input.lang),
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
  const displayName = getLocalizedProductDisplayName(product, locale)
  const pageUrl = `${SITE_URL}${productPagePath}`
  const lang = schemaInLanguageForLocale(locale)
  const variantColors = getProductColorOptions(product)
  const pdp = getProductPdpContent(product, { color: selectedColor, locale })
  const faqItems = getProductFaq(product, pdp.faq, locale)
  const faqNode = buildFaqPageJsonLd(pageUrl, faqItems, lang)

  let productNode: Record<string, unknown>

  if (product.colorImages && Object.keys(product.colorImages).length > 0) {
    const groupSizes = getPdpSizeOptions(product.category, product.sizes ?? [], slug)
    productNode = {
      '@type': 'ProductGroup',
      '@id': `${pageUrl}#product`,
      name: displayName,
      productGroupID: product.id,
      variesBy: 'https://schema.org/color',
      category: product.category,
      size: groupSizes.join('/'),
      brand: { '@type': 'Brand', name: 'Bint Saeed' },
      image: buildImageObjects(product, activeImages, selectedColor, lang, locale),
      ...schemaSharedFields(product, slug, locale, selectedColor, lang),
      hasVariant: variantColors.map((color) => {
        const variantImages = product.colorImages?.[color.name] ?? product.images
        const colorSlug = color.name.toLowerCase().replace(/\s+/g, '-')
        return buildProductNode(product, {
          pageUrl,
          locale,
          lang,
          activeImages,
          selectedColor,
          variantColor: color.name,
          variantImages,
          nodeId: `${pageUrl}#variant-${colorSlug}`,
          displayName: `${displayName} — ${color.name}`,
        })
      }),
    }
  } else {
    productNode = buildProductNode(product, {
      pageUrl,
      locale,
      lang,
      activeImages,
      selectedColor,
      nodeId: `${pageUrl}#product`,
      displayName,
    })
  }

  const graph: Record<string, unknown>[] = [productNode]
  if (faqNode) graph.push(faqNode)

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
