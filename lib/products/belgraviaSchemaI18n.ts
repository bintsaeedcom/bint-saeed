import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'
import { getLocalizedAbayaSchemaKeywordTerms } from '@/lib/products/abayaSchemaKeywordsI18n'
import {
  buildAbayaSchemaAudience,
  resolveAbayaFaq,
  resolveAbayaSchemaPack,
} from '@/lib/products/abayaSchemaPackResolve'
import {
  BELGRAVIA_AUDIENCE_EXTENSION,
  BELGRAVIA_SCHEMA_PACKS,
} from '@/lib/products/belgraviaSchemaLocalePacks'
import { getLocalizedBelgraviaExclusiveKeywords } from '@/lib/products/belgraviaSchemaKeywordsI18n'

export const BELGRAVIA_SLUG = 'belgravia-abaya'

export const BELGRAVIA_MATERIAL =
  'Outer: Light crepe blend (80% polyester, 20% viscose); lining (70% polyester, 30% viscose)'

export function isBelgraviaSlug(slug: string): boolean {
  return slug.toLowerCase() === BELGRAVIA_SLUG
}

export function getBelgraviaSchemaAudience(locale: AppLocale = 'en'): string {
  return buildAbayaSchemaAudience(locale, BELGRAVIA_AUDIENCE_EXTENSION)
}

export function getBelgraviaSchemaKeywords(
  locale: AppLocale = 'en',
  colorName?: string,
): string {
  const terms = new Set<string>([
    ...getLocalizedBelgraviaExclusiveKeywords(locale, colorName),
    ...getLocalizedAbayaSchemaKeywordTerms(locale),
  ])
  return [...terms].join(', ')
}

export { getLocalizedBelgraviaExclusiveKeywords } from '@/lib/products/belgraviaSchemaKeywordsI18n'
export { getLocalizedAbayaSchemaKeywordTerms } from '@/lib/products/abayaSchemaKeywordsI18n'

export function getLocalizedBelgraviaSchemaFacts(
  slug: string,
  locale: AppLocale = 'en',
): ProductSchemaFacts | null {
  if (!isBelgraviaSlug(slug)) return null
  return resolveAbayaSchemaPack(BELGRAVIA_SCHEMA_PACKS, locale)
}

export function getLocalizedBelgraviaFaq(slug: string, locale: AppLocale = 'en'): ProductFaqItem[] {
  if (!isBelgraviaSlug(slug)) return []
  return resolveAbayaFaq(BELGRAVIA_SCHEMA_PACKS, locale)
}

/** Shared PDP + schema FAQ source of truth. */
export function getBelgraviaPdpFaq(locale: AppLocale = 'en'): ProductFaqItem[] {
  return resolveAbayaFaq(BELGRAVIA_SCHEMA_PACKS, locale)
}
