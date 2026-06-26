import type { AppLocale } from '@/lib/i18n/routing'
import { getSohoSetMetaKeywordTerms } from '@/lib/products/sohoSetPageSeoI18n'

/** Schema + meta keyword union for Soho Set — all 12 locales. */
export function getLocalizedSohoSetExclusiveKeywords(
  locale: AppLocale,
  colorName?: string,
): string[] {
  return getSohoSetMetaKeywordTerms(locale, colorName)
}
