import { NextRequest, NextResponse } from 'next/server'
import {
  buildGoogleMerchantTsv,
  listGoogleMerchantFeedUrls,
  resolveGoogleFeedTarget,
} from '@/lib/feeds/googleMerchantFeed'

export const dynamic = 'force-dynamic'
export const revalidate = 3600

/**
 * Hosted Google Merchant Center product feed (TSV).
 *
 * Primary (UAE):
 *   https://www.bintsaeed.com/feeds/google.txt
 *   https://www.bintsaeed.com/feeds/google.txt?country=AE
 *
 * Other markets (register each as its own data source + feed label):
 *   https://www.bintsaeed.com/feeds/google.txt?country=FR  → EUR + FR shipping
 *   https://www.bintsaeed.com/feeds/google.txt?country=SA  → SAR + SA shipping
 *   …see ?meta=1 for the full list
 *
 * image_link is carousel-first JPEG via /api/feeds/merchant-image (Google rejects WebP).
 */
export async function GET(request: NextRequest) {
  try {
    if (request.nextUrl.searchParams.get('meta') === '1') {
      return NextResponse.json(
        {
          feeds: listGoogleMerchantFeedUrls(),
          hint: 'In Merchant Center, add one scheduled fetch per country. Feed label = country code. Target country = that country. Add matching shipping in MC (or rely on the feed shipping column).',
        },
        {
          headers: {
            'Cache-Control': 'public, max-age=300',
          },
        },
      )
    }

    const target = resolveGoogleFeedTarget({
      country: request.nextUrl.searchParams.get('country'),
      currency: request.nextUrl.searchParams.get('currency'),
    })
    const tsv = await buildGoogleMerchantTsv(target)
    const suffix = target.countries.length === 1 ? target.countries[0] : target.currency

    return new NextResponse(tsv, {
      status: 200,
      headers: {
        'Content-Type': 'text/tab-separated-values; charset=utf-8',
        'Content-Disposition': `attachment; filename="google-merchant-${suffix}.txt"`,
        'Cache-Control': 'public, max-age=0, s-maxage=300, stale-while-revalidate=3600',
        'X-Content-Type-Options': 'nosniff',
        'X-Google-Feed-Currency': target.currency,
        'X-Google-Feed-Countries': target.countries.join(','),
      },
    })
  } catch (error) {
    console.error('[feeds/google]', error)
    return NextResponse.json({ error: 'Google Merchant catalog unavailable' }, { status: 500 })
  }
}
