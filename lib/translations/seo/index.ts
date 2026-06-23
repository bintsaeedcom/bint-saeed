import type { AppLocale } from '@/lib/i18n/routing'
import type { SeoSupplementalBundle } from './types'
import { seoSupplementalEn } from './en'
import { seoSupplementalAr } from './ar'
import { seoSupplementalFr } from './fr'
import { seoSupplementalIt } from './it'
import { seoSupplementalEs } from './es'
import { seoSupplementalRu } from './ru'
import { seoSupplementalZh } from './zh'
import { seoSupplementalDe } from './de'
import { seoSupplementalNl } from './nl'
import { seoSupplementalPt } from './pt'
import { seoSupplementalId } from './id'
import { seoSupplementalMs } from './ms'

const BUNDLES: Record<AppLocale, SeoSupplementalBundle> = {
  en: seoSupplementalEn,
  ar: seoSupplementalAr,
  fr: seoSupplementalFr,
  it: seoSupplementalIt,
  es: seoSupplementalEs,
  ru: seoSupplementalRu,
  zh: seoSupplementalZh,
  de: seoSupplementalDe,
  nl: seoSupplementalNl,
  pt: seoSupplementalPt,
  id: seoSupplementalId,
  ms: seoSupplementalMs,
}

/** Supplemental SEO JSON-LD strings for the active UI locale (`AppLocale`). */
export function getSeoSupplementalBundle(locale: AppLocale): SeoSupplementalBundle {
  return BUNDLES[locale] ?? seoSupplementalEn
}

export type { FaqPair, GccStoreCopy, GccStoreId, SeoSupplementalBundle } from './types'
