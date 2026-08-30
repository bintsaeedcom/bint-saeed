import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductPdpContent } from '@/data/productPdpContent'
import { GROSVENOR_SET_INTRO_EN, GROSVENOR_SET_INTRO_ZH } from '@/data/grosvenorSetPdpIntro'
import {
  buildGrosvenorSetDetailGroups,
  grosvenorSetCare,
  grosvenorSetComposition,
  grosvenorSetFitAndSize,
  grosvenorSetOrigin,
} from '@/data/grosvenorSetPdpDetails'
import type { PdpIntroParagraph } from '@/lib/products/pdpIntroRich'
import { pdpIntroParagraphsToPlainText } from '@/lib/products/pdpIntroRich'
import type { ProductFaqItem } from '@/lib/products/productSchemaMeta'
import { getGrosvenorSetPdpFaq as getGrosvenorSetFaq } from '@/lib/products/grosvenorSetFaqI18n'
import { GROSVENOR_SET_SLUG } from '@/lib/products/grosvenorSetSchemaI18n'

export { GROSVENOR_SET_SLUG }

const INTRO_BY_LOCALE: Partial<Record<AppLocale, PdpIntroParagraph[]>> = {
  en: GROSVENOR_SET_INTRO_EN,
  zh: GROSVENOR_SET_INTRO_ZH,
}

export function isGrosvenorSetSlug(slug: string): boolean {
  return slug.toLowerCase() === GROSVENOR_SET_SLUG
}

export function getGrosvenorSetIntro(locale: AppLocale = 'en'): PdpIntroParagraph[] {
  return INTRO_BY_LOCALE[locale] ?? GROSVENOR_SET_INTRO_EN
}

export function getGrosvenorSetPdpFaq(locale: AppLocale = 'en'): ProductFaqItem[] {
  return getGrosvenorSetFaq(locale)
}

export function buildGrosvenorSetPdpContent(locale: AppLocale = 'en'): ProductPdpContent {
  const intro = buildGrosvenorSetPdpIntro(locale)
  return {
    ...intro,
    productDetails: [],
    productDetailGroups: buildGrosvenorSetDetailGroups(locale),
    compositionDetails: grosvenorSetComposition(locale),
    fitAndSizeDetails: grosvenorSetFitAndSize(locale),
    careDetails: grosvenorSetCare(locale),
    originDetails: grosvenorSetOrigin(locale),
  }
}

export function buildGrosvenorSetPdpIntro(locale: AppLocale = 'en'): Pick<
  ProductPdpContent,
  'introParagraphParts' | 'introParagraphs' | 'faq'
> {
  const introParagraphParts = getGrosvenorSetIntro(locale)
  return {
    introParagraphParts,
    introParagraphs: pdpIntroParagraphsToPlainText(introParagraphParts),
    faq: getGrosvenorSetPdpFaq(locale),
  }
}
