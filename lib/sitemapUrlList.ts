import { isPrelaunch } from '@/lib/seo'
import { buildCatalogSitemapEntries } from '@/lib/sitemap/catalogUrls'
import { LOCALE_PREFIXES, localizedPath, type LocalePrefix } from '@/lib/i18n/routing'

/** Canonical origin for sitemap `<loc>` values (align with `NEXT_PUBLIC_SITE_URL` in production). */
export const SITEMAP_BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

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
 * Human-facing hubs / editorial for EN + every prefixed locale.
 * No query-string URLs (Google treats them as weak / duplicate).
 * No `/` — public launch 308-redirects `/` → `/home` (would show as "Page with redirect").
 * Machine files (llms.txt, openapi) stay off the HTML sitemap.
 */
const INDEXABLE_HUBS: { path: string; changefreq: string; priority: string }[] = [
  { path: '/home', changefreq: 'weekly', priority: '1.0' },
  { path: '/shop', changefreq: 'weekly', priority: '0.9' },
  { path: '/accessories', changefreq: 'weekly', priority: '0.9' },
  { path: '/strands', changefreq: 'weekly', priority: '0.9' },
  { path: '/personalisation', changefreq: 'weekly', priority: '0.9' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/the-codes', changefreq: 'monthly', priority: '0.7' },
  // /heritage* unfinished — omitted until the chapter is approved for index.
  { path: '/craftsmanship', changefreq: 'monthly', priority: '0.7' },
  { path: '/giving-forward', changefreq: 'monthly', priority: '0.6' },
  { path: '/contact', changefreq: 'monthly', priority: '0.5' },
  { path: '/faq', changefreq: 'monthly', priority: '0.5' },
  { path: '/size-guide', changefreq: 'monthly', priority: '0.5' },
  { path: '/shipment-return-policy', changefreq: 'monthly', priority: '0.5' },
  { path: '/careers', changefreq: 'monthly', priority: '0.5' },
  { path: '/gift-cards', changefreq: 'monthly', priority: '0.6' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/cookie-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
]

function buildEnglishSiteUrls(): SitemapUrlEntry[] {
  return INDEXABLE_HUBS.map((h) => entry(h.path, h.changefreq, h.priority))
}

function hubPathForLocale(locale: LocalePrefix, hubPath: string): string {
  return localizedPath(locale, hubPath)
}

/** Prefixed-locale hubs (ar/fr/it/…) — pairs with EN hubs + multilang PDPs from catalogUrls. */
function buildLocalizedHubUrls(): SitemapUrlEntry[] {
  const out: SitemapUrlEntry[] = []
  for (const locale of LOCALE_PREFIXES) {
    for (const h of INDEXABLE_HUBS) {
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
