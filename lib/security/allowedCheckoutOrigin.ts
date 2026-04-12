import type { NextRequest } from 'next/server'

export function parseAllowedOrigins(): string[] {
  const raw = process.env.ALLOWED_ORIGINS?.trim()
  if (raw) {
    return raw
      .split(',')
      .map((s) => s.trim().replace(/\/$/, ''))
      .filter(Boolean)
  }
  return ['https://bintsaeed.com', 'https://www.bintsaeed.com']
}

/**
 * Reject checkout/session creation from random websites (CSRF-style abuse).
 * In development, localhost origins are allowed.
 */
export function isAllowedCheckoutOrigin(request: NextRequest): boolean {
  if (process.env.NODE_ENV !== 'production') {
    const origin = request.headers.get('origin')
    if (!origin) return true
    try {
      const u = new URL(origin)
      return u.hostname === 'localhost' || u.hostname === '127.0.0.1'
    } catch {
      return false
    }
  }

  const allowed = parseAllowedOrigins()
  const origin = request.headers.get('origin')
  if (origin) {
    const norm = origin.replace(/\/$/, '')
    return allowed.some((a) => norm === a)
  }

  const referer = request.headers.get('referer')
  if (referer) {
    try {
      const refOrigin = new URL(referer).origin.replace(/\/$/, '')
      return allowed.some((a) => refOrigin === a)
    } catch {
      return false
    }
  }

  return false
}

/** Stripe success/cancel URLs — prefer verified Origin, else configured site URL. */
export function resolvePublicSiteBaseUrl(request: NextRequest): string | null {
  if (process.env.NODE_ENV !== 'production') {
    const origin = request.headers.get('origin')?.replace(/\/$/, '')
    if (origin) {
      try {
        const u = new URL(origin)
        if (u.hostname === 'localhost' || u.hostname === '127.0.0.1') return origin
      } catch {
        /* ignore */
      }
    }
    return 'http://localhost:3000'
  }

  const origin = request.headers.get('origin')?.replace(/\/$/, '')
  const allowed = parseAllowedOrigins()
  if (origin && allowed.some((a) => origin === a)) return origin

  const site = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, '')
  if (site) return site

  return allowed[0] ?? null
}
