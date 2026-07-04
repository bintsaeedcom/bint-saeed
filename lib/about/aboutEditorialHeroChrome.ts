import type { AppLocale } from '@/lib/i18n/routing'
import { getAboutPageCopy } from '@/lib/content/aboutPageCopyI18n'

/** Matches Our Story (`/about`) — shared across all About topic banners */
export const ABOUT_EDITORIAL_HERO_IMAGE_OPACITY = 55

export function getAboutEditorialHeroEyebrow(locale: AppLocale | string): string {
  return getAboutPageCopy(locale).heroEyebrow
}
