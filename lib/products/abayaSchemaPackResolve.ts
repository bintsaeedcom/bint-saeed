import type { AppLocale } from '@/lib/i18n/routing'
import { LOCALE_GEO } from '@/lib/i18n/brandProperNouns'
import type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'
import { getSharedAbayaSchemaAudience } from '@/lib/products/abayaSchemaShared'

export type AbayaSchemaLocalePack = {
  facts: Omit<ProductSchemaFacts, 'faq' | 'madeIn'>
  faq: ProductFaqItem[]
}

export function resolveAbayaSchemaPack(
  packs: Record<AppLocale, AbayaSchemaLocalePack>,
  locale: AppLocale,
): ProductSchemaFacts {
  const pack = packs[locale] ?? packs.en
  return {
    madeIn: LOCALE_GEO[locale]?.madeIn ?? LOCALE_GEO.en.madeIn,
    ...pack.facts,
    faq: pack.faq,
  }
}

export function resolveAbayaFaq(
  packs: Record<AppLocale, AbayaSchemaLocalePack>,
  locale: AppLocale,
): ProductFaqItem[] {
  return (packs[locale] ?? packs.en).faq
}

/** Shared audience + per-product extension (extension should start with `, `). */
export function buildAbayaSchemaAudience(
  locale: AppLocale,
  extension: Record<AppLocale, string>,
): string {
  const base = getSharedAbayaSchemaAudience(locale)
  const ext = extension[locale] ?? extension.en
  return `${base.slice(0, -1)}${ext}.`
}
