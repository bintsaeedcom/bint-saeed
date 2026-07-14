import type { AppLocale } from '@/lib/i18n/routing'
import { getAboutPageCopy } from '@/lib/content/aboutPageCopyI18n'

/** Matches Our Story (`/about`) — shared across all About topic banners */
export const ABOUT_EDITORIAL_HERO_IMAGE_OPACITY = 68

/** Softer veil so banner photography reads; still anchors white title type. */
export const ABOUT_EDITORIAL_HERO_GRADIENT =
  'bg-gradient-to-t from-brand-darkRed/70 via-brand-darkRed/28 to-brand-darkRed/8'

export function getAboutEditorialHeroEyebrow(locale: AppLocale | string): string {
  return getAboutPageCopy(locale).heroEyebrow
}
