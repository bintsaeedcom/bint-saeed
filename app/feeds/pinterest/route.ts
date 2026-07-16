import { NextResponse } from 'next/server'
import { buildPinterestCatalogCsv } from '@/lib/feeds/pinterestCatalogFeed'

export const dynamic = 'force-dynamic'
export const revalidate = 3600

/**
 * Hosted Pinterest retail catalog data source.
 * Prefer the `.csv` URL in Pinterest Business → Catalogs → Provide a URL link:
 *   https://www.bintsaeed.com/feeds/pinterest.csv
 * ( `/feeds/pinterest` also works after rewrite. )
 */
export async function GET() {
  try {
    const csv = await buildPinterestCatalogCsv()
    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="pinterest.csv"',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch (error) {
    console.error('[feeds/pinterest]', error)
    return NextResponse.json({ error: 'Pinterest catalog unavailable' }, { status: 500 })
  }
}
