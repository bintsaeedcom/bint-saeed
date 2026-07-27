import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const ALLOWED_PREFIXES = [
  '/Webshop pictures/',
  '/Webshop%20pictures/',
  '/accessories/',
  '/images/',
  '/og-image',
]

function isAllowedImagePath(pathname: string): boolean {
  if (!pathname.startsWith('/') || pathname.includes('..') || pathname.includes('\0')) {
    return false
  }
  const decoded = (() => {
    try {
      return decodeURIComponent(pathname)
    } catch {
      return pathname
    }
  })()
  if (!/\.(webp|png|jpe?g|gif)$/i.test(decoded)) return false
  return ALLOWED_PREFIXES.some(
    (prefix) => decoded.startsWith(prefix) || pathname.startsWith(prefix),
  )
}

/**
 * Serves JPEG for Google Merchant (WebP is not an accepted image_link format).
 * Example: /api/feeds/merchant-image?src=%2FWebshop%20pictures%2F...%2Ffile.webp
 */
export async function GET(request: NextRequest) {
  const src = request.nextUrl.searchParams.get('src')?.trim()
  if (!src) {
    return NextResponse.json({ error: 'Missing src' }, { status: 400 })
  }

  let pathname = src
  try {
    if (src.startsWith('http://') || src.startsWith('https://')) {
      pathname = new URL(src).pathname
    }
  } catch {
    return NextResponse.json({ error: 'Invalid src' }, { status: 400 })
  }

  if (!pathname.startsWith('/')) pathname = `/${pathname}`
  if (!isAllowedImagePath(pathname)) {
    return NextResponse.json({ error: 'Path not allowed' }, { status: 403 })
  }

  const host = request.headers.get('x-forwarded-host') || request.headers.get('host')
  const proto = request.headers.get('x-forwarded-proto') || 'https'
  const origin =
    host != null
      ? `${proto}://${host}`
      : (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

  try {
    const upstream = await fetch(`${origin}${pathname}`, {
      headers: { Accept: 'image/*,*/*' },
      // Prefer fresh CDN edge of the static asset.
      cache: 'force-cache',
    })
    if (!upstream.ok) {
      return NextResponse.json({ error: 'Upstream image not found' }, { status: 404 })
    }

    const input = Buffer.from(await upstream.arrayBuffer())
    const jpeg = await sharp(input)
      .rotate()
      .jpeg({ quality: 88, mozjpeg: true })
      .toBuffer()

    return new NextResponse(new Uint8Array(jpeg), {
      status: 200,
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch (error) {
    console.error('[feeds/merchant-image]', error)
    return NextResponse.json({ error: 'Image conversion failed' }, { status: 500 })
  }
}
