import { NextResponse } from 'next/server'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

/** Visitor country/city from Vercel edge headers — same-origin, no third-party rate limits. */
export function GET(request: Request) {
  const countryCode = (request.headers.get('x-vercel-ip-country') || '').toUpperCase()
  const cityRaw = request.headers.get('x-vercel-ip-city') || ''
  let city = cityRaw
  try {
    city = decodeURIComponent(cityRaw)
  } catch {
    city = cityRaw
  }

  return NextResponse.json(
    {
      countryCode: countryCode && countryCode !== 'XX' ? countryCode : null,
      city: city.trim() || null,
    },
    { headers: { 'Cache-Control': 'private, no-store' } },
  )
}
