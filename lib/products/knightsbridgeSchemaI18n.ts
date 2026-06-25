import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'
import {
  buildAbayaSchemaAudience,
  resolveAbayaFaq,
  resolveAbayaSchemaPack,
} from '@/lib/products/abayaSchemaPackResolve'
import {
  KNIGHTSBRIDGE_AUDIENCE_EXTENSION,
  KNIGHTSBRIDGE_SCHEMA_PACKS,
} from '@/lib/products/knightsbridgeSchemaLocalePacks'

export const KNIGHTSBRIDGE_ABAYA_SLUG = 'knightsbridge-abaya-jacket'

export const KNIGHTSBRIDGE_MATERIAL =
  'Outer: 60% Polyester, 40% Cotton. Inner dress: 100% Polyester.'

export function isKnightsbridgeAbayaSlug(slug: string): boolean {
  return slug.toLowerCase() === KNIGHTSBRIDGE_ABAYA_SLUG
}

export function getKnightsbridgeSchemaAudience(locale: AppLocale = 'en'): string {
  return buildAbayaSchemaAudience(locale, KNIGHTSBRIDGE_AUDIENCE_EXTENSION)
}

export function getLocalizedKnightsbridgeSchemaFacts(
  slug: string,
  locale: AppLocale = 'en',
): ProductSchemaFacts | null {
  if (!isKnightsbridgeAbayaSlug(slug)) return null
  return resolveAbayaSchemaPack(KNIGHTSBRIDGE_SCHEMA_PACKS, locale)
}

export function getLocalizedKnightsbridgeFaq(slug: string, locale: AppLocale = 'en'): ProductFaqItem[] {
  if (!isKnightsbridgeAbayaSlug(slug)) return []
  return resolveAbayaFaq(KNIGHTSBRIDGE_SCHEMA_PACKS, locale)
}

/** Shared PDP + schema FAQ source of truth. */
export function getKnightsbridgePdpFaq(locale: AppLocale = 'en'): ProductFaqItem[] {
  return resolveAbayaFaq(KNIGHTSBRIDGE_SCHEMA_PACKS, locale)
}
