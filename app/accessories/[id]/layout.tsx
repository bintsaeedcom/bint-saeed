import type { Metadata } from 'next'
import { findShopAccessoryById } from '@/lib/accessories/accessoryRouteAliases'
import {
  absoluteAccessoryImageUrl,
  accessoryCanonicalUrl,
  accessoryHreflangLanguages,
} from '@/lib/accessories/accessoryPageUrl'
import { getAccessoryImageAlt } from '@/lib/accessories/accessoryJsonLd'
import {
  getPhoneCharmAiOther,
  getPhoneCharmMetaKeywords,
} from '@/lib/accessories/phoneCharmPdpMetaI18n'
import {
  getBagCharmAiOther,
  getBagCharmMetaKeywords,
} from '@/lib/accessories/bagCharmPdpMetaI18n'
import { isAlQuaaPhoneCharmId } from '@/lib/accessories/phoneCharmPdpContent'
import { isAlAinOasisBagCharmId } from '@/lib/accessories/bagCharmPdpContent'
import { getListedPriceForAccessory } from '@/lib/pricing/accessoryCatalogPrices'
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

  const isPhoneCharm = isAlQuaaPhoneCharmId(accessory.id)
  const isBagCharm = isAlAinOasisBagCharmId(accessory.id)
  const keywords = isPhoneCharm
    ? getPhoneCharmMetaKeywords(accessory.id, locale)
    : isBagCharm
      ? getBagCharmMetaKeywords(accessory.id, locale)
      : undefined
  const aiOther = isPhoneCharm
    ? getPhoneCharmAiOther(accessory.id, locale)
    : isBagCharm
      ? getBagCharmAiOther(accessory.id, locale)
      : undefined
  const aedPrice =
    isPhoneCharm || isBagCharm ? getListedPriceForAccessory(accessory.id, 'AED') : null

  return {
    title: pageTitle,
    description,
    ...(keywords?.length ? { keywords } : {}),
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
    ...(aiOther || aedPrice != null
      ? {
          other: {
            ...(aiOther ?? {}),
            ...(aedPrice != null
              ? {
                  'product:price:amount': String(aedPrice),
                  'product:price:currency': 'AED',
                  'product:availability': accessory.inStock ? 'in stock' : 'out of stock',
                  'product:condition': 'new',
                  'product:brand': 'Bint Saeed',
                  'product:retailer_item_id': accessory.id,
                }
              : {}),
          },
        }
      : {}),
  }
}

export default function AccessoryLayout({ children }: AccessoryLayoutProps) {
  return children
}
