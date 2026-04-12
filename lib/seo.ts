import { Metadata } from 'next'

/** Prelaunch: only homepage indexable. Live: all public pages indexable. */
export const INDEX_MODE = process.env.NEXT_PUBLIC_INDEX_MODE || 'prelaunch'

export const isPrelaunch = INDEX_MODE === 'prelaunch'

/**
 * During prelaunch, HTML uses noindex so traditional search snippets stay limited.
 * `app/robots.ts` still allows major AI crawlers (GPTBot, ClaudeBot, etc.) to fetch public URLs
 * per their User-agent block. For maximum discovery in Google + AI, set INDEX_MODE=live.
 */
export const noIndexMetadata: Metadata = isPrelaunch
  ? { robots: { index: false, follow: false } }
  : {}
