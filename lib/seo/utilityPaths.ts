import { stripLocaleFromPathname } from '@/lib/i18n/routing'

/**
 * Transactional / auth / unfinished routes that must stay out of the index.
 * Root metadata still runs on these pages — never emit hreflang language maps for them
 * (GSC was discovering cart×12 locales as “Excluded by noindex”).
 */
const UTILITY_EXACT = new Set([
  '/cart',
  '/checkout',
  '/wishlist',
  '/account',
  '/sign-in',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/verify-email',
  '/login',
  '/dashboard',
  '/coming-soon',
  '/heritage',
])

const UTILITY_PREFIXES = [
  '/checkout/',
  '/account/',
  '/heritage/',
  '/admin',
  '/home/gate',
  '/home/blocked',
  '/dev/',
  '/api/',
]

/** Inner path (locale stripped), e.g. `/cart` or `/ar/cart` → `/cart`. */
export function isUtilitySeoPath(pathname: string): boolean {
  const pathOnly = (pathname || '/').split(/[?#]/)[0] || '/'
  const { pathname: inner } = stripLocaleFromPathname(pathOnly)
  const p = inner.replace(/\/+$/, '') || '/'
  if (UTILITY_EXACT.has(p)) return true
  return UTILITY_PREFIXES.some((prefix) => p === prefix.replace(/\/$/, '') || p.startsWith(prefix))
}

/** robots.txt disallow entries — Google supports `*` as a wildcard. */
export const ROBOTS_UTILITY_DISALLOWS: string[] = [
  '/admin',
  '/admin/',
  '/api/',
  '/home/gate',
  '/home/blocked',
  '/cart',
  '/*/cart',
  '/checkout',
  '/*/checkout',
  '/wishlist',
  '/*/wishlist',
  '/account',
  '/*/account',
  '/sign-in',
  '/*/sign-in',
  '/register',
  '/*/register',
  '/forgot-password',
  '/*/forgot-password',
  '/reset-password',
  '/*/reset-password',
  '/verify-email',
  '/*/verify-email',
  '/heritage',
  '/*/heritage',
  '/coming-soon',
  '/*/coming-soon',
  '/dev/',
  '/*/dev/',
]
