import { Metadata } from 'next'

/** Prelaunch: only homepage indexable. Live: all public pages indexable. */
export const INDEX_MODE = process.env.NEXT_PUBLIC_INDEX_MODE || 'prelaunch'

export const isPrelaunch = INDEX_MODE === 'prelaunch'

/** Use in layout.tsx for routes that should be NOINDEX during prelaunch */
export const noIndexMetadata: Metadata = isPrelaunch
  ? { robots: { index: false, follow: false } }
  : {}
