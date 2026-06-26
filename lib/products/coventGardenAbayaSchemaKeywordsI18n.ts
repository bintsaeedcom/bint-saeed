import type { AppLocale } from '@/lib/i18n/routing'
import { getCoventGardenAbayaMetaKeywordTerms } from '@/lib/products/coventGardenAbayaPageSeoI18n'

/** Schema + meta keyword union for Covent Garden Abaya — all 12 locales, no English fallback. */
export function getLocalizedCoventGardenAbayaExclusiveKeywords(
  locale: AppLocale,
  colorName?: string,
): string[] {
  return getCoventGardenAbayaMetaKeywordTerms(locale, colorName)
}
