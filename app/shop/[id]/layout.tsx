import type { Metadata } from 'next'
import { products as staticProducts } from '@/data/products'
import { getProductSlug, resolveProductIdentifier } from '@/lib/products/links'
import { getServerLocale } from '@/lib/i18n/serverLocale'
import {
  buildProductMetaDescription,
  productCanonicalUrl,
  productHreflangLanguages,
  productNotFoundMetadata,
} from '@/lib/seo/productPageMeta'
import { getProductImageAlt } from '@/lib/products/imageAlt'

const SITE_URL = 'https://www.bintsaeed.com'

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
  const canonicalUrl = productCanonicalUrl(locale, slug)
  const description = buildProductMetaDescription(locale, {
    name: product.name,
    description: product.description,
    fabric: product.fabric,
    slug,
  })
  const image = product.images[0] ?? '/og-image.png'
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`
  const imageAlt = getProductImageAlt(product, image, {
    color: product.colors[0]?.name,
    index: 0,
  })

  return {
    title: `${product.name} | Bint Saeed`,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: productHreflangLanguages(slug),
    },
    openGraph: {
      title: `${product.name} | Bint Saeed`,
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
      title: `${product.name} | Bint Saeed`,
      description,
      images: [imageUrl],
      creator: '@bintsaeed_brand',
      site: '@bintsaeed_brand',
    },
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
