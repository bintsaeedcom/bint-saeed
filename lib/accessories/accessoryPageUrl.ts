import type { AppLocale } from '@/lib/i18n/routing'
import { localizedPath } from '@/lib/i18n/routing'
import { buildHreflangLanguages } from '@/lib/i18n/hreflang'
import { BRAND_NAME_ZH_DISPLAY } from '@/lib/i18n/brandProperNouns'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

export function accessoryCanonicalUrl(locale: AppLocale, accessoryId: string): string {
  const canonicalId = resolveAccessoryId(accessoryId)
  const path = localizedPath(locale, `/accessories/${canonicalId}`)
  return `${SITE_URL}${path}`
}

export function accessoryHreflangLanguages(accessoryId: string): Record<string, string> {
  const canonicalId = resolveAccessoryId(accessoryId)
  return buildHreflangLanguages(`/accessories/${canonicalId}`, SITE_URL)
}

export function absoluteAccessoryImageUrl(src: string): string {
  const path = src.startsWith('/') ? src : `/${src}`
  return `${SITE_URL}${encodeURI(path)}`
}
