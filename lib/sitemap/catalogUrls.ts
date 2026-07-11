import { accessories, isAccessoryShopVisible } from '@/data/accessories'
import { isVisibleOnShopGrid, products } from '@/data/products'
import { getProductSlug } from '@/lib/products/links'
import { LOCALE_PREFIXES, localizedPath, type AppLocale } from '@/lib/i18n/routing'
import type { SitemapUrlEntry } from '@/lib/sitemapUrlList'

const PDP_LOCALES: AppLocale[] = ['en', ...LOCALE_PREFIXES]

function catalogEntry(loc: string, priority: string): SitemapUrlEntry {
  return {
    loc,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority,
  }
}

/**
 * Shop + accessory PDP URLs for the sitemap (live mode).
 * Reads slugs/ids from catalog data only — no product copy or schema.
 * New products in `data/products.ts` / `data/accessories.ts` appear automatically.
 */
export function buildCatalogSitemapEntries(baseUrl: string): SitemapUrlEntry[] {
  const origin = baseUrl.replace(/\/$/, '')
  const entries: SitemapUrlEntry[] = []

  for (const product of products) {
    if (!isVisibleOnShopGrid(product)) continue
    const slug = getProductSlug(product)
    for (const locale of PDP_LOCALES) {
      const path = localizedPath(locale, `/shop/${slug}`)
      entries.push(catalogEntry(`${origin}${path}`, '0.85'))
    }
  }

  for (const accessory of accessories) {
    if (!isAccessoryShopVisible(accessory)) continue
    if (!accessory.images.length) continue
    for (const locale of PDP_LOCALES) {
      const path = localizedPath(locale, `/accessories/${accessory.id}`)
      entries.push(catalogEntry(`${origin}${path}`, '0.75'))
    }
  }

  return entries
}
