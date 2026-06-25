import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'
import { getLocalizedAbayaSchemaKeywordTerms } from '@/lib/products/abayaSchemaKeywordsI18n'
import {
  buildAbayaSchemaAudience,
  resolveAbayaFaq,
  resolveAbayaSchemaPack,
} from '@/lib/products/abayaSchemaPackResolve'
import {
  KENSINGTON_AUDIENCE_EXTENSION,
  KENSINGTON_SCHEMA_PACKS,
} from '@/lib/products/kensingtonSchemaLocalePacks'
import { getLocalizedKensingtonExclusiveKeywords } from '@/lib/products/kensingtonSchemaKeywordsI18n'

export const KENSINGTON_SLUG = 'kensington-abaya'

export const KENSINGTON_MATERIAL =
  'Outer: 80% Polyester, 20% Viscose; lining: 70% Polyester, 30% Viscose'

export function isKensingtonSlug(slug: string): boolean {
  return slug.toLowerCase() === KENSINGTON_SLUG
}

export function getKensingtonSchemaAudience(locale: AppLocale = 'en'): string {
  return buildAbayaSchemaAudience(locale, KENSINGTON_AUDIENCE_EXTENSION)
}

export function getKensingtonSchemaKeywords(
  locale: AppLocale = 'en',
  colorName?: string,
): string {
  const terms = new Set<string>([
    ...getLocalizedKensingtonExclusiveKeywords(locale, colorName),
    ...getLocalizedAbayaSchemaKeywordTerms(locale),
  ])
  return [...terms].join(', ')
}

export function getLocalizedKensingtonSchemaFacts(
  slug: string,
  locale: AppLocale = 'en',
): ProductSchemaFacts | null {
  if (!isKensingtonSlug(slug)) return null
  return resolveAbayaSchemaPack(KENSINGTON_SCHEMA_PACKS, locale)
}

export function getLocalizedKensingtonFaq(slug: string, locale: AppLocale = 'en'): ProductFaqItem[] {
  if (!isKensingtonSlug(slug)) return []
  return resolveAbayaFaq(KENSINGTON_SCHEMA_PACKS, locale)
}

/** Shared PDP + schema FAQ source of truth. */
export function getKensingtonPdpFaq(locale: AppLocale = 'en'): ProductFaqItem[] {
  return resolveAbayaFaq(KENSINGTON_SCHEMA_PACKS, locale)
}
