import { isPrelaunch } from '@/lib/seo'
import { buildCatalogSitemapEntries } from '@/lib/sitemap/catalogUrls'
import { SITEMAP_PREFIX_LOCALES } from '@/lib/sitemap/locales'
import { localizedPath, type LocalePrefix } from '@/lib/i18n/routing'

/** Canonical origin for sitemap `<loc>` values (align with `NEXT_PUBLIC_SITE_URL` in production). */
export const SITEMAP_BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

/**
 * Locales listed in the XML sitemap. Remaining AppLocales stay reachable via on-page hreflang
 * once Google crawls the EN/AR hubs — avoids flooding GSC with ~750 “Discovered – not indexed” URLs.
 * Source of truth: `lib/sitemap/locales.ts`.
 */
export { SITEMAP_PREFIX_LOCALES } from '@/lib/sitemap/locales'

export type SitemapUrlEntry = {
  loc: string
  lastmod: string
  changefreq: string
  priority: string
}

function entry(path: string, changefreq: string, priority: string): SitemapUrlEntry {
  const normalized = path.startsWith('http')
    ? path
    : `${SITEMAP_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`
  return {
    loc: normalized,
    lastmod: new Date().toISOString(),
    changefreq,
    priority,
  }
}

/**
 * Primary money / brand hubs — EN + SITEMAP_PREFIX_LOCALES.
 * No query-string URLs. No `/` (308 → `/home`). Heritage omitted until approved.
 */
const PRIMARY_HUBS: { path: string; changefreq: string; priority: string }[] = [
  { path: '/home', changefreq: 'weekly', priority: '1.0' },
  { path: '/shop', changefreq: 'weekly', priority: '0.9' },
  { path: '/accessories', changefreq: 'weekly', priority: '0.9' },
  { path: '/strands', changefreq: 'weekly', priority: '0.9' },
  { path: '/personalisation', changefreq: 'weekly', priority: '0.9' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/the-codes', changefreq: 'monthly', priority: '0.7' },
  { path: '/craftsmanship', changefreq: 'monthly', priority: '0.7' },
  { path: '/giving-forward', changefreq: 'monthly', priority: '0.6' },
  { path: '/contact', changefreq: 'monthly', priority: '0.5' },
  { path: '/faq', changefreq: 'monthly', priority: '0.5' },
  { path: '/size-guide', changefreq: 'monthly', priority: '0.5' },
  { path: '/gift-cards', changefreq: 'monthly', priority: '0.6' },
]

/** Legal / thin hubs — English only in the sitemap (still available in all locales on-site). */
const EN_ONLY_HUBS: { path: string; changefreq: string; priority: string }[] = [
  { path: '/shipment-return-policy', changefreq: 'monthly', priority: '0.5' },
  { path: '/careers', changefreq: 'monthly', priority: '0.5' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/cookie-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
]

function buildEnglishSiteUrls(): SitemapUrlEntry[] {
  return [...PRIMARY_HUBS, ...EN_ONLY_HUBS].map((h) => entry(h.path, h.changefreq, h.priority))
}

function hubPathForLocale(locale: LocalePrefix, hubPath: string): string {
  return localizedPath(locale, hubPath)
}

/** Prefixed-locale primary hubs only (currently AR) — pairs with EN hubs + EN/AR PDPs. */
function buildLocalizedHubUrls(): SitemapUrlEntry[] {
  const out: SitemapUrlEntry[] = []
  for (const locale of SITEMAP_PREFIX_LOCALES) {
    for (const h of PRIMARY_HUBS) {
      out.push(entry(hubPathForLocale(locale, h.path), h.changefreq, h.priority))
    }
  }
  return out
}

/** Prelaunch tease only — do not feed unfinished shop URLs to crawlers. */
const prelaunchUrls: SitemapUrlEntry[] = [
  entry('/home', 'weekly', '1.0'),
]

/** URLs included in `/sitemap` / `/sitemap.xml` for the current index mode. */
export function getSitemapUrlEntries(): SitemapUrlEntry[] {
  if (isPrelaunch) {
    return prelaunchUrls
  }
  const catalogUrls = buildCatalogSitemapEntries(SITEMAP_BASE_URL)
  return [...buildEnglishSiteUrls(), ...buildLocalizedHubUrls(), ...catalogUrls]
}

/** Absolute URLs only — for IndexNow and similar tooling. */
export function getSitemapAbsoluteUrls(): string[] {
  return getSitemapUrlEntries()
    .map((e) => e.loc)
    .filter(Boolean)
}
