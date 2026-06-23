/** URL prefix locales — `/` alone is always English. */
export const LOCALE_PREFIXES = ['ar', 'fr', 'it', 'es', 'ru', 'zh', 'de', 'nl', 'pt', 'id'] as const

export type LocalePrefix = (typeof LOCALE_PREFIXES)[number]

export type AppLocale = 'en' | LocalePrefix

const SET = new Set<string>(LOCALE_PREFIXES)

export function isLocalePrefix(s: string): s is LocalePrefix {
  return SET.has(s)
}

export function stripLocaleFromPathname(pathname: string): { locale: AppLocale; pathname: string } {
  const pathOnly = (pathname.split(/[?#]/)[0] || '/').replace(/\/+$/, '') || '/'
  const m = pathOnly.match(/^\/(ar|fr|it|es|ru|zh|de|nl|pt|id)(\/.*)?$/)
  if (!m) return { locale: 'en', pathname: pathOnly === '' ? '/' : pathOnly }
  const rest = m[2] && m[2].length > 0 ? m[2] : '/'
  return { locale: m[1] as LocalePrefix, pathname: rest }
}

export function prefixForLocale(locale: AppLocale): string {
  return locale === 'en' ? '' : `/${locale}`
}

/** Public URL path (e.g. `/ar`, `/ar/shop`) for canonical / hreflang. */
export function localizedPath(locale: AppLocale, pathname: string): string {
  const p = pathname.startsWith('/') ? pathname : `/${pathname}`
  if (locale === 'en') return p
  if (p === '/') return `/${locale}`
  return `/${locale}${p}`
}
