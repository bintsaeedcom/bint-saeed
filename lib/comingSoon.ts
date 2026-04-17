/**
 * When `NEXT_PUBLIC_COMING_SOON_ONLY=true`, middleware sends almost all HTML
 * navigation to `/` so only the coming-soon shell is reachable for the public.
 * APIs, static assets, `_next`, and `/admin` stay available.
 */
export const COMING_SOON_ONLY = process.env.NEXT_PUBLIC_COMING_SOON_ONLY === 'true'

const ALLOWED_PREFIXES = ['/_next', '/api', '/admin'] as const

export function isPathAllowedDuringComingSoonOnly(pathname: string): boolean {
  if (pathname === '/' || pathname === '') return true
  for (const prefix of ALLOWED_PREFIXES) {
    if (pathname.startsWith(prefix)) return true
  }
  return false
}
