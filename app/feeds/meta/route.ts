import { NextRequest, NextResponse } from 'next/server'
import { buildMetaCatalogCsv, parseMetaFeedCurrency } from '@/lib/feeds/metaCatalogFeed'

export const dynamic = 'force-dynamic'
export const revalidate = 3600

/**
 * Hosted Meta Commerce Manager catalog data source.
 * Prefer the `.csv` URL:
 *   https://www.bintsaeed.com/feeds/meta.csv
 * Optional: ?currency=AED (default).
 */
export async function GET(request: NextRequest) {
  try {
    const currency = parseMetaFeedCurrency(request.nextUrl.searchParams.get('currency'))
    const csv = await buildMetaCatalogCsv(currency)
    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="meta-catalog.csv"',
        'Cache-Control': 'public, max-age=0, s-maxage=300, stale-while-revalidate=3600',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch (error) {
    console.error('[feeds/meta]', error)
    return NextResponse.json({ error: 'Meta catalog unavailable' }, { status: 500 })
  }
}
