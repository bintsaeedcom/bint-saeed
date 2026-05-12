import { Metadata } from 'next'

/** Prelaunch: only homepage indexable. Live: all public pages indexable. */
export const INDEX_MODE = process.env.NEXT_PUBLIC_INDEX_MODE || 'prelaunch'

export const isPrelaunch = INDEX_MODE === 'prelaunch'

/**
 * During prelaunch, **nested segment layouts** (shop, about, etc.) attach noindex via this helper.
 * Root `/`, `/coming-soon`, and routes without this layout stay indexable from `buildRootMetadata`.
 * `app/robots.ts` still allows major crawlers. Set INDEX_MODE=live for full sitemap + relax segment noindex.
 */
export const noIndexMetadata: Metadata = isPrelaunch
  ? { robots: { index: false, follow: false } }
  : {}
