import type { Metadata } from 'next'
import { findShopAccessoryById } from '@/lib/accessories/accessoryRouteAliases'
import {
  absoluteAccessoryImageUrl,
  accessoryCanonicalUrl,
  accessoryHreflangLanguages,
} from '@/lib/accessories/accessoryPageUrl'
import { getAccessoryImageAlt } from '@/lib/accessories/accessoryJsonLd'
import {
  buildAccessoryMetaDescription,
  buildAccessoryPageTitle,
  accessoryNotFoundMetadata,
} from '@/lib/seo/accessoryPageMeta'
import { getServerLocale } from '@/lib/i18n/serverLocale'

type AccessoryLayoutProps = {
  children: React.ReactNode
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: AccessoryLayoutProps): Promise<Metadata> {
  const [{ id }, locale] = await Promise.all([params, getServerLocale()])
  const accessory = findShopAccessoryById(decodeURIComponent(id))

  if (!accessory) {
    return accessoryNotFoundMetadata(locale)
  }

  const canonicalUrl = accessoryCanonicalUrl(locale, accessory.id)
  const pageTitle = buildAccessoryPageTitle(accessory, locale)
  const description = buildAccessoryMetaDescription(accessory, locale)
  const image = accessory.images[0] ?? '/og-image.png'
  const imageUrl = image.startsWith('http') ? image : absoluteAccessoryImageUrl(image)
  const imageAlt = getAccessoryImageAlt(accessory, image, 0, locale)

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: accessoryHreflangLanguages(accessory.id),
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

export default function AccessoryLayout({ children }: AccessoryLayoutProps) {
  return children
}
