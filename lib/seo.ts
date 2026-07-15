import { Metadata } from 'next'

/**
 * Prelaunch: thin sitemap + section layouts noindex (coming-soon shell era).
 * Live: full sitemap + money pages indexable.
 *
 * Default: live whenever the public storefront is open (`COMING_SOON_ONLY` not true).
 * Override with NEXT_PUBLIC_INDEX_MODE=prelaunch | live.
 */
function resolveIndexMode(): 'prelaunch' | 'live' {
  const explicit = process.env.NEXT_PUBLIC_INDEX_MODE
  if (explicit === 'prelaunch' || explicit === 'live') return explicit
  return process.env.NEXT_PUBLIC_COMING_SOON_ONLY === 'true' ? 'prelaunch' : 'live'
}

export const INDEX_MODE = resolveIndexMode()

export const isPrelaunch = INDEX_MODE === 'prelaunch'

/**
 * During prelaunch, **nested segment layouts** (shop, about, etc.) attach noindex via this helper.
 * Root `/` redirects to `/home` when the storefront is public; `/coming-soon` consolidates there too.
 * Set NEXT_PUBLIC_INDEX_MODE=live (or omit COMING_SOON_ONLY) for full sitemap + relax section noindex.
 */
export const noIndexMetadata: Metadata = isPrelaunch
  ? { robots: { index: false, follow: false } }
  : {}

/** Always keep transactional / account chrome out of Google — independent of INDEX_MODE. */
export const utilityNoIndexMetadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
}
