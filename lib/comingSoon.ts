/**
 * When `NEXT_PUBLIC_COMING_SOON_ONLY=true`, middleware sends almost all HTML
 * navigation to `/` so only the coming-soon shell is reachable for the public.
 * APIs, static assets, `_next`, and `/admin` stay available.
 *
 * Pre-launch: additional inner paths are allowlisted (locale-normalized) for
 * internal QA — see `isInnerPathAllowlistedDuringComingSoon`.
 */
import { stripLocaleFromPathname } from '@/lib/i18n/routing'

export const COMING_SOON_ONLY = process.env.NEXT_PUBLIC_COMING_SOON_ONLY === 'true'

const ALLOWED_PREFIXES = ['/_next', '/api', '/admin'] as const

/** Strip trailing slashes except root; pathname is already inner (after locale strip). */
function normalizeInnerPath(inner: string): string {
  if (!inner || inner === '/') return '/'
  return inner.replace(/\/+$/, '') || '/'
}

function isInnerPathAllowlistedDuringComingSoon(normalizedInner: string): boolean {
  if (normalizedInner === '/') return true
  if (normalizedInner === '/coming-soon') return true

  if (normalizedInner === '/home') return true
  if (normalizedInner === '/home/gate' || normalizedInner.startsWith('/home/gate/')) return true
  if (normalizedInner === '/home/blocked' || normalizedInner.startsWith('/home/blocked/')) return true

  if (normalizedInner === '/shop' || normalizedInner.startsWith('/shop/')) return true

  if (normalizedInner === '/about') return true
  if (normalizedInner === '/contact') return true
  if (normalizedInner === '/the-codes') return true

  if (normalizedInner === '/craftsmanship') return true

  if (normalizedInner === '/strands') return true

  if (normalizedInner === '/accessories' || normalizedInner.startsWith('/accessories/')) return true

  if (
    normalizedInner === '/gift-cards' ||
    normalizedInner.startsWith('/gift-cards/')
  ) {
    return true
  }

  if (normalizedInner === '/account' || normalizedInner.startsWith('/account/')) return true

  if (normalizedInner === '/cart' || normalizedInner.startsWith('/cart/')) return true
  if (normalizedInner === '/checkout' || normalizedInner.startsWith('/checkout/')) return true

  if (normalizedInner === '/faq' || normalizedInner.startsWith('/faq/')) return true
  if (normalizedInner === '/terms' || normalizedInner.startsWith('/terms/')) return true
  if (
    normalizedInner === '/shipment-return-policy' ||
    normalizedInner.startsWith('/shipment-return-policy/')
  ) {
    return true
  }
  if (normalizedInner === '/privacy' || normalizedInner.startsWith('/privacy/')) return true
  if (normalizedInner === '/cookie-policy' || normalizedInner.startsWith('/cookie-policy/')) return true

  if (normalizedInner === '/sign-in' || normalizedInner.startsWith('/sign-in/')) return true
  if (normalizedInner === '/register' || normalizedInner.startsWith('/register/')) return true
  if (normalizedInner === '/forgot-password' || normalizedInner.startsWith('/forgot-password/')) {
    return true
  }

  if (normalizedInner === '/dev/error-preview' || normalizedInner.startsWith('/dev/error-preview/')) {
    return true
  }

  if (
    normalizedInner === '/dev/gift-card-emails' ||
    normalizedInner.startsWith('/dev/gift-card-emails/')
  ) {
    return true
  }

  return false
}

export function isPathAllowedDuringComingSoonOnly(pathname: string): boolean {
  if (pathname === '/' || pathname === '') return true
  for (const prefix of ALLOWED_PREFIXES) {
    if (pathname.startsWith(prefix)) return true
  }

  const { pathname: inner } = stripLocaleFromPathname(pathname)
  const normalizedInner = normalizeInnerPath(inner)

  return isInnerPathAllowlistedDuringComingSoon(normalizedInner)
}
