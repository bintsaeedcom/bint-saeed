import { NextRequest, NextResponse } from 'next/server'
import {
  buildGoogleMerchantTsv,
  parseGoogleFeedCurrency,
} from '@/lib/feeds/googleMerchantFeed'

export const dynamic = 'force-dynamic'
export const revalidate = 3600

/**
 * Hosted Google Merchant Center product feed (TSV).
 * Prefer the `.txt` URL in Merchant Center → Products → Feeds → Scheduled fetch:
 *   https://www.bintsaeed.com/feeds/google.txt
 * Optional currency: ?currency=SAR (default AED for UAE Free Listings).
 * Set Merchant Center shipping to made-to-order lead times (fashion ~10–14 days;
 * jewellery ~4–7 days) — do not rely on crawl-guessed images; image_link is carousel-first.
 */
export async function GET(request: NextRequest) {
  try {
    const currency = parseGoogleFeedCurrency(request.nextUrl.searchParams.get('currency'))
    const tsv = await buildGoogleMerchantTsv(currency)
    return new NextResponse(tsv, {
      status: 200,
      headers: {
        'Content-Type': 'text/tab-separated-values; charset=utf-8',
        'Content-Disposition': 'attachment; filename="google-merchant.txt"',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch (error) {
    console.error('[feeds/google]', error)
    return NextResponse.json({ error: 'Google Merchant catalog unavailable' }, { status: 500 })
  }
}
