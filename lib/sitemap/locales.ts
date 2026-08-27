import type { AppLocale, LocalePrefix } from '@/lib/i18n/routing'

/**
 * Locales listed in `/sitemap.xml` (plus English unprefixed).
 * Priority markets: Arabic + FR/DE/IT + Chinese + Russian (Yandex / CIS).
 * Remaining locales stay on-site via hreflang without flooding the XML matrix.
 */
export const SITEMAP_PREFIX_LOCALES: LocalePrefix[] = ['ar', 'fr', 'de', 'it', 'zh', 'ru']

export const SITEMAP_PDP_LOCALES: AppLocale[] = ['en', ...SITEMAP_PREFIX_LOCALES]
