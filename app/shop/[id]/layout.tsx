import type { Metadata } from 'next'
import { products as staticProducts } from '@/data/products'
import { getProductSlug, resolveProductIdentifier } from '@/lib/products/links'
import { getServerLocale } from '@/lib/i18n/serverLocale'
import {
  buildProductMetaDescription,
  buildProductPageTitle,
  getProductPageAiOther,
  getProductPageMetaKeywords,
  productCanonicalUrl,
  productHreflangLanguages,
  productNotFoundMetadata,
} from '@/lib/seo/productPageMeta'
import { getProductImageAlt } from '@/lib/products/imageAlt'
import { getLocalizedProductCatalogFields } from '@/lib/products/productCatalogCopyI18n'
import { getLocalizedProductDisplayName } from '@/lib/products/productDisplayNameI18n'
import { absoluteCatalogImageUrl } from '@/lib/products/productJsonLd'

type ProductLayoutProps = {
  children: React.ReactNode
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProductLayoutProps): Promise<Metadata> {
  const [{ id }, locale] = await Promise.all([params, getServerLocale()])
  const product = resolveProductIdentifier(staticProducts, decodeURIComponent(id))

  if (!product) {
    return productNotFoundMetadata(locale)
  }

  const slug = getProductSlug(product)
  const catalogFields = getLocalizedProductCatalogFields(product, locale)
  const canonicalUrl = productCanonicalUrl(locale, slug)
  const displayName = getLocalizedProductDisplayName(product, locale)
  const pageTitle = buildProductPageTitle(locale, { name: displayName, slug })
  const description = buildProductMetaDescription(locale, {
    name: displayName,
    description: catalogFields.description,
    fabric: catalogFields.fabric,
    slug,
  })
  const image = product.images[0] ?? '/og-image.png'
  const imageUrl = image.startsWith('http') ? image : absoluteCatalogImageUrl(image)
  const imageAlt = getProductImageAlt(product, image, {
    color: product.colors[0]?.name,
    index: 0,
    locale,
  })
  const keywords = getProductPageMetaKeywords(locale, product, product.colors[0]?.name)
  const aiOther = getProductPageAiOther(product, locale)

  return {
    title: { absolute: pageTitle },
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: canonicalUrl,
      languages: productHreflangLanguages(slug),
    },
    openGraph: {
      title: pageTitle,
      description,
      url: canonicalUrl,
      type: 'website',
      siteName: 'Bint Saeed',
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [imageUrl],
      creator: '@bintsaeed_brand',
      site: '@bintsaeed_brand',
    },
    other: aiOther,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  }
}

export default function ProductLayout({ children }: ProductLayoutProps) {
  return children
}
