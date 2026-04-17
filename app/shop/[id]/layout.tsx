import type { Metadata } from 'next'
import { products as staticProducts } from '@/data/products'
import { getProductSlug, resolveProductIdentifier } from '@/lib/products/links'

const SITE_URL = 'https://bintsaeed.com'

type ProductLayoutProps = {
  children: React.ReactNode
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProductLayoutProps): Promise<Metadata> {
  const { id } = await params
  const product = resolveProductIdentifier(staticProducts, decodeURIComponent(id))

  if (!product) {
    return {
      title: 'Product Not Found | Bint Saeed',
      description: 'The requested product could not be found in our current collection.',
      robots: { index: false, follow: false },
    }
  }

  const slug = getProductSlug(product)
  const canonicalPath = `/shop/${slug}`
  const canonicalUrl = `${SITE_URL}${canonicalPath}`
  const description = `${product.description} ${product.fabric}`.slice(0, 200)
  const image = product.images[0] ?? '/og-image.png'

  return {
    title: `${product.name} | Bint Saeed`,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${product.name} | Bint Saeed`,
      description,
      url: canonicalUrl,
      type: 'website',
      siteName: 'Bint Saeed',
      images: [
        {
          url: image.startsWith('http') ? image : `${SITE_URL}${image}`,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Bint Saeed`,
      description,
      images: [image.startsWith('http') ? image : `${SITE_URL}${image}`],
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
