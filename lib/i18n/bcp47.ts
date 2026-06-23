import type { AppLocale } from '@/lib/i18n/routing'

/**
 * Single BCP 47 tag per page for Schema.org `inLanguage` (no mixing locales in one graph).
 * Chinese uses `zh-CN` to match HTML `lang` / Open Graph locale for simplified Chinese.
 */
export function schemaInLanguageForLocale(locale: AppLocale): string {
  switch (locale) {
    case 'en':
      return 'en'
    case 'ar':
      return 'ar'
    case 'fr':
      return 'fr'
    case 'it':
      return 'it'
    case 'es':
      return 'es'
    case 'ru':
      return 'ru'
    case 'zh':
      return 'zh-CN'
    case 'de':
      return 'de'
    case 'nl':
      return 'nl'
    case 'pt':
      return 'pt'
    case 'id':
      return 'id'
    case 'ms':
      return 'ms'
    default:
      return 'en'
  }
}
