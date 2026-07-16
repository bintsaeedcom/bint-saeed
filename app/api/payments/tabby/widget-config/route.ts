import { NextRequest, NextResponse } from 'next/server'
import { getTabbyWidgetConfig } from '@/lib/tabby/widgetConfig'

export const runtime = 'nodejs'
export const revalidate = 60

/** Public Tabby snippet config — safe for client widgets (pk + merchant code only). */
export async function GET(request: NextRequest) {
  const currency = request.nextUrl.searchParams.get('currency')
  return NextResponse.json(getTabbyWidgetConfig(currency), {
    headers: {
      'Cache-Control': 'public, max-age=60, s-maxage=300, stale-while-revalidate=600',
    },
  })
}
