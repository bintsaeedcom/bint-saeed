import type { AppLocale, LocalePrefix } from '@/lib/i18n/routing'

/**
 * Locales listed in `/sitemap.xml` (plus English unprefixed).
 * Priority markets: Arabic + FR/DE/IT. Remaining locales stay on-site via hreflang
 * without flooding the XML sitemap back to a full 12-locale matrix.
 */
export const SITEMAP_PREFIX_LOCALES: LocalePrefix[] = ['ar', 'fr', 'de', 'it']

export const SITEMAP_PDP_LOCALES: AppLocale[] = ['en', ...SITEMAP_PREFIX_LOCALES]
