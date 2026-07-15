import { isPrelaunch } from '@/lib/seo'
import { buildCatalogSitemapEntries } from '@/lib/sitemap/catalogUrls'

/** Canonical origin for sitemap `<loc>` values (align with `NEXT_PUBLIC_SITE_URL` in production). */
export const SITEMAP_BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

export type SitemapUrlEntry = {
  loc: string
  lastmod: string
  changefreq: string
  priority: string
}

const homePageUrl: SitemapUrlEntry = {
  loc: `${SITEMAP_BASE_URL}/home`,
  lastmod: new Date().toISOString(),
  changefreq: 'weekly',
  priority: '1.0',
}

const allUrls: SitemapUrlEntry[] = [
  { loc: SITEMAP_BASE_URL, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: '1.0' },
  {
    loc: `${SITEMAP_BASE_URL}/llms.txt`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    loc: `${SITEMAP_BASE_URL}/openapi.json`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: '0.5',
  },
  homePageUrl,
  { loc: `${SITEMAP_BASE_URL}/shop`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: '0.9' },
  { loc: `${SITEMAP_BASE_URL}/accessories`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: '0.9' },
  {
    loc: `${SITEMAP_BASE_URL}/accessories?type=signature-strands`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: '0.88',
  },
  { loc: `${SITEMAP_BASE_URL}/strands`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: '0.9' },
  { loc: `${SITEMAP_BASE_URL}/personalisation`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: '0.9' },
  { loc: `${SITEMAP_BASE_URL}/about`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.7' },
  { loc: `${SITEMAP_BASE_URL}/the-codes`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.7' },
  { loc: `${SITEMAP_BASE_URL}/heritage`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.8' },
  { loc: `${SITEMAP_BASE_URL}/heritage/al-talli`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: '0.95' },
  { loc: `${SITEMAP_BASE_URL}/heritage/khous`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.7' },
  { loc: `${SITEMAP_BASE_URL}/craftsmanship`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.7' },
  { loc: `${SITEMAP_BASE_URL}/contact`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.5' },
  { loc: `${SITEMAP_BASE_URL}/faq`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.5' },
  { loc: `${SITEMAP_BASE_URL}/size-guide`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.5' },
  { loc: `${SITEMAP_BASE_URL}/shipment-return-policy`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.5' },
  { loc: `${SITEMAP_BASE_URL}/careers`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.5' },
  { loc: `${SITEMAP_BASE_URL}/privacy-policy`, lastmod: new Date().toISOString(), changefreq: 'yearly', priority: '0.3' },
  { loc: `${SITEMAP_BASE_URL}/cookie-policy`, lastmod: new Date().toISOString(), changefreq: 'yearly', priority: '0.3' },
  { loc: `${SITEMAP_BASE_URL}/terms`, lastmod: new Date().toISOString(), changefreq: 'yearly', priority: '0.3' },
]

/** Prelaunch tease only — do not feed unfinished shop URLs to crawlers. */
const prelaunchUrls: SitemapUrlEntry[] = [
  { loc: SITEMAP_BASE_URL, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: '1.0' },
  homePageUrl,
]

/** URLs included in `/sitemap` / `/sitemap.xml` for the current index mode. */
export function getSitemapUrlEntries(): SitemapUrlEntry[] {
  if (isPrelaunch) {
    return prelaunchUrls
  }
  const catalogUrls = buildCatalogSitemapEntries(SITEMAP_BASE_URL)
  return [...allUrls, ...catalogUrls]
}

/** Absolute URLs only — for IndexNow and similar tooling. */
export function getSitemapAbsoluteUrls(): string[] {
  return getSitemapUrlEntries()
    .map((e) => e.loc)
    .filter(Boolean)
}
