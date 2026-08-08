import type { AppLocale, LocalePrefix } from '@/lib/i18n/routing'

/**
 * Locales listed in `/sitemap.xml`. Other AppLocales remain available on-site and via
 * hreflang on money pages — excluding them from the XML feed reduces GSC
 * “Discovered – currently not indexed” flood from a full 12-locale matrix.
 */
export const SITEMAP_PREFIX_LOCALES: LocalePrefix[] = ['ar']

export const SITEMAP_PDP_LOCALES: AppLocale[] = ['en', ...SITEMAP_PREFIX_LOCALES]
