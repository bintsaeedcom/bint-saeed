import type { Product } from '@/data/products'
import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductPdpContent } from '@/data/productPdpContent'
import { getProductPdpContentAr } from '@/data/productPdpContentAr'
import { getProductPdpContentDe } from '@/data/productPdpContentDe'
import { getProductPdpContentEs } from '@/data/productPdpContentEs'
import { getProductPdpContentFr } from '@/data/productPdpContentFr'
import { getProductPdpContentId } from '@/data/productPdpContentId'
import { getProductPdpContentIt } from '@/data/productPdpContentIt'
import { getProductPdpContentMs } from '@/data/productPdpContentMs'
import { getProductPdpContentNl } from '@/data/productPdpContentNl'
import { getProductPdpContentPt } from '@/data/productPdpContentPt'
import { getProductPdpContentRu } from '@/data/productPdpContentRu'
import { getProductPdpContentZh } from '@/data/productPdpContentZh'

export type ProductPdpLocaleGetter = (
  product: Product,
  color?: string,
) => ProductPdpContent | null

/** Non-English PDP resolvers — hero products return full native copy; others return null (structured locale builder handles them). */
const LOCALE_GETTERS: Partial<Record<AppLocale, ProductPdpLocaleGetter>> = {
  ar: getProductPdpContentAr,
  zh: getProductPdpContentZh,
  de: getProductPdpContentDe,
  fr: getProductPdpContentFr,
  it: getProductPdpContentIt,
  es: getProductPdpContentEs,
  ru: getProductPdpContentRu,
  nl: getProductPdpContentNl,
  pt: getProductPdpContentPt,
  id: getProductPdpContentId,
  ms: getProductPdpContentMs,
}

export function getProductPdpContentLocale(
  product: Product,
  color: string | undefined,
  locale: AppLocale,
): ProductPdpContent | null {
  if (locale === 'en') return null
  const getter = LOCALE_GETTERS[locale]
  if (!getter) return null
  return getter(product, color)
}

export const PRODUCT_PDP_LOCALIZED_LOCALES = Object.keys(LOCALE_GETTERS) as AppLocale[]
