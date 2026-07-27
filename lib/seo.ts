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
 * During prelaunch, nested segment layouts attach noindex.
 * @deprecated Prefer `sectionRobotsMetadata` — empty `{}` when live can confuse metadata merges.
 */
export const noIndexMetadata: Metadata = isPrelaunch
  ? { robots: { index: false, follow: false } }
  : {}

/**
 * Editorial / catalog section layouts: explicit robots for live vs prelaunch.
 * Live pages always declare index,follow (fixes GSC “Excluded by noindex” on money pages
 * when INDEX_MODE was stuck or metadata merge dropped root robots).
 */
export const sectionRobotsMetadata: Metadata = isPrelaunch
  ? {
      robots: {
        index: false,
        follow: false,
        googleBot: { index: false, follow: false },
      },
    }
  : {
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
          'max-video-preview': -1,
        },
      },
    }

/** Always keep transactional / account chrome out of Google — independent of INDEX_MODE. */
export const utilityNoIndexMetadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
}
