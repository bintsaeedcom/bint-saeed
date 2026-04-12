import type { NextRequest } from 'next/server'

/** Public site origin for links in emails (no trailing slash). */
export function getSiteOrigin(request: NextRequest): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (explicit) {
    return explicit.replace(/\/$/, '')
  }
  const vercel = process.env.VERCEL_URL?.trim()
  if (vercel) {
    return `https://${vercel.replace(/\/$/, '')}`
  }
  const origin = request.headers.get('origin') || request.headers.get('host')
  if (origin?.startsWith('http')) {
    return origin.replace(/\/$/, '')
  }
  if (origin) {
    return `https://${origin.replace(/\/$/, '')}`
  }
  return 'http://localhost:3000'
}
