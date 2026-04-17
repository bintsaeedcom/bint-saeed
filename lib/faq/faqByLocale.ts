import type { AppLocale } from '@/lib/i18n/routing'
import type { FaqBundle } from '@/lib/faq/types'
import { faqEn } from '@/lib/faq/locales/en'
import { faqAr } from '@/lib/faq/locales/ar'
import { faqFr } from '@/lib/faq/locales/fr'
import { faqDe } from '@/lib/faq/locales/de'
import { faqIt } from '@/lib/faq/locales/it'
import { faqEs } from '@/lib/faq/locales/es'
import { faqRu } from '@/lib/faq/locales/ru'
import { faqZh } from '@/lib/faq/locales/zh'
import { faqNl } from '@/lib/faq/locales/nl'
import { faqPt } from '@/lib/faq/locales/pt'

/** FAQ page + FAQ JSON-LD source of truth per locale. */
export const FAQ_BY_LOCALE: Record<AppLocale, FaqBundle> = {
  en: faqEn,
  ar: faqAr,
  fr: faqFr,
  de: faqDe,
  it: faqIt,
  es: faqEs,
  ru: faqRu,
  zh: faqZh,
  nl: faqNl,
  pt: faqPt,
}

export type { FaqBundle } from '@/lib/faq/types'
