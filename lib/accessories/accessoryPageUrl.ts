import type { AppLocale } from '@/lib/i18n/routing'
import { localizedPath } from '@/lib/i18n/routing'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

export function accessoryCanonicalUrl(locale: AppLocale, accessoryId: string): string {
  const canonicalId = resolveAccessoryId(accessoryId)
  const path = localizedPath(locale, `/accessories/${canonicalId}`)
  return `${SITE_URL}${path}`
}

export function accessoryHreflangLanguages(accessoryId: string): Record<string, string> {
  const canonicalId = resolveAccessoryId(accessoryId)
  const pathname = `/accessories/${canonicalId}`
  const languages: Record<string, string> = {
    'x-default': `${SITE_URL}${pathname}`,
    en: `${SITE_URL}${pathname}`,
  }
  for (const locale of ['ar', 'fr', 'it', 'es', 'ru', 'zh', 'de', 'nl', 'pt', 'id', 'ms'] as const) {
    languages[locale] = accessoryCanonicalUrl(locale, canonicalId)
  }
  return languages
}

export function absoluteAccessoryImageUrl(src: string): string {
  const path = src.startsWith('/') ? src : `/${src}`
  return `${SITE_URL}${encodeURI(path)}`
}
