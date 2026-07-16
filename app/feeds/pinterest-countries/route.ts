import { buildPinterestCountrySupplementalCsv } from '@/lib/feeds/pinterestCatalogFeed'

export const dynamic = 'force-dynamic'
export const revalidate = 0

/**
 * Pinterest country supplemental feed (Countries and languages).
 * Prefer https://www.bintsaeed.com/feeds/pinterest-countries.csv
 */
export async function GET() {
  const csv = await buildPinterestCountrySupplementalCsv(['AE'])

  return new Response(csv, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="pinterest-countries.csv"',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
