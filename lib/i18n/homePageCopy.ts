import type { AppLocale } from '@/lib/i18n/routing'
import { HOME_META_DESCRIPTION, HOME_META_TITLE } from '@/lib/brand/brandPositioning'

/**
 * Homepage hero/meta raw lines (before clipping): brand, Abu Dhabi, offering per market.
 * Arabic: formal MSA, GCC‑appropriate; no slang. Other locales: natural search phrasing, not literal keyword translation.
 */
const HOME_HERO_RAW: Record<AppLocale, string> = {
  en: HOME_META_DESCRIPTION.en,
  ar: HOME_META_DESCRIPTION.ar,
  fr: HOME_META_DESCRIPTION.fr,
  it: HOME_META_DESCRIPTION.it,
  es: HOME_META_DESCRIPTION.es,
  ru: HOME_META_DESCRIPTION.ru,
  zh: HOME_META_DESCRIPTION.zh,
  de: HOME_META_DESCRIPTION.de,
  nl: HOME_META_DESCRIPTION.nl,
  pt: HOME_META_DESCRIPTION.pt,
  id: HOME_META_DESCRIPTION.id,
  ms: HOME_META_DESCRIPTION.ms,
}

/** Raw hero line used for meta + JSON-LD short descriptions (before clipping). */
export function getHomeHeroDescriptionRaw(locale: AppLocale): string {
  return HOME_HERO_RAW[locale]
}

export function clipMetaDescription(s: string, max = 168): string {
  if (s.length <= max) return s
  return `${s.slice(0, max - 1).trimEnd()}…`
}

export function getHomeMetaDescription(locale: AppLocale): string {
  return clipMetaDescription(getHomeHeroDescriptionRaw(locale))
}

const HOME_DEFAULT_TITLE: Record<AppLocale, string> = {
  en: HOME_META_TITLE.en,
  ar: HOME_META_TITLE.ar,
  fr: HOME_META_TITLE.fr,
  it: HOME_META_TITLE.it,
  es: HOME_META_TITLE.es,
  ru: HOME_META_TITLE.ru,
  zh: HOME_META_TITLE.zh,
  de: HOME_META_TITLE.de,
  nl: HOME_META_TITLE.nl,
  pt: HOME_META_TITLE.pt,
  id: HOME_META_TITLE.id,
  ms: HOME_META_TITLE.ms,
}

export function getHomeDefaultTitle(locale: AppLocale): string {
  return HOME_DEFAULT_TITLE[locale]
}

const HOME_OG_TITLE: Record<AppLocale, string> = {
  en: HOME_META_TITLE.en,
  ar: HOME_META_TITLE.ar,
  fr: HOME_META_TITLE.fr,
  it: HOME_META_TITLE.it,
  es: HOME_META_TITLE.es,
  ru: HOME_META_TITLE.ru,
  zh: HOME_META_TITLE.zh,
  de: HOME_META_TITLE.de,
  nl: HOME_META_TITLE.nl,
  pt: HOME_META_TITLE.pt,
  id: HOME_META_TITLE.id,
  ms: HOME_META_TITLE.ms,
}

export function getHomeOgTitle(locale: AppLocale): string {
  return HOME_OG_TITLE[locale]
}
