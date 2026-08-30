import type { AppLocale, LocalePrefix } from '@/lib/i18n/routing'
import { localizedPath } from '@/lib/i18n/routing'
import { hreflangKeyForLocale } from '@/lib/i18n/bcp47'

/** Locales with URL prefixes (English is unprefixed). */
export const HREFLANG_LOCALE_PREFIXES: readonly LocalePrefix[] = [
  'ar',
  'fr',
  'it',
  'es',
  'ru',
  'zh',
  'de',
  'nl',
  'pt',
  'id',
  'ms',
]

const DEFAULT_SITE = 'https://www.bintsaeed.com'

function normalizeInnerPath(innerPath: string): string {
  const path = innerPath.startsWith('/') ? innerPath : `/${innerPath}`
  const trimmed = path.replace(/\/+$/, '') || '/'
  if (trimmed === '/') return '/home'
  return trimmed
}

/**
 * Build hreflang `alternates.languages` for an inner path (no locale prefix).
 * Chinese uses `zh-CN` as the hreflang key; URLs remain `/zh/...`.
 */
export function buildHreflangLanguages(
  innerPath: string,
  baseUrl: string = DEFAULT_SITE,
): Record<string, string> {
  const base = baseUrl.replace(/\/$/, '')
  const path = normalizeInnerPath(innerPath)
  const map: Record<string, string> = {
    'x-default': `${base}${path}`,
    en: `${base}${path}`,
  }
  for (const locale of HREFLANG_LOCALE_PREFIXES) {
    map[hreflangKeyForLocale(locale)] = `${base}${localizedPath(locale, path)}`
  }
  return map
}

/** hreflang key for a page already resolved to an AppLocale (includes `en`). */
export function hreflangKeyForAppLocale(locale: AppLocale): string {
  return hreflangKeyForLocale(locale)
}
