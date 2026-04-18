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

  if (normalizedInner === '/home') return true
  if (normalizedInner === '/home/gate' || normalizedInner.startsWith('/home/gate/')) return true
  if (normalizedInner === '/home/blocked' || normalizedInner.startsWith('/home/blocked/')) return true

  if (normalizedInner === '/shop' || normalizedInner.startsWith('/shop/')) return true

  if (normalizedInner === '/about') return true
  if (normalizedInner === '/contact') return true
  if (normalizedInner === '/the-codes') return true

  if (normalizedInner === '/accessories' || normalizedInner.startsWith('/accessories/')) return true

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
