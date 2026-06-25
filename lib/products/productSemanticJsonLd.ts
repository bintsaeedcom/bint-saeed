import type { AppLocale } from '@/lib/i18n/routing'
import { localizedPath } from '@/lib/i18n/routing'
import { getHeritageCraft } from '@/lib/products/heritageSeo'
import { isKnightsbridgeAbayaSlug } from '@/lib/products/knightsbridgeSchemaI18n'
import { isKnightsbridgeDressSlug } from '@/lib/products/knightsbridgeDressSchemaI18n'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

type SemanticProductRef = {
  name: string
  path: string
}

function productRef(name: string, path: string): SemanticProductRef {
  return { name, path }
}

function productUrl(locale: AppLocale, path: string): string {
  return `${SITE_URL}${localizedPath(locale, path)}`
}

function heritagePageUrl(locale: AppLocale, craft: 'khous' | 'al-talli'): string {
  return productUrl(locale, craft === 'khous' ? '/heritage/khous' : '/heritage/al-talli')
}

function relatedProductNode(ref: SemanticProductRef, locale: AppLocale) {
  return {
    '@type': 'Product' as const,
    name: ref.name,
    url: productUrl(locale, ref.path),
  }
}

/** Cross-links and heritage `about` nodes for Knowledge Graph / semantic discovery. */
export function buildProductSemanticJsonLdFields(
  slug: string,
  locale: AppLocale = 'en',
): Record<string, unknown> {
  const normalized = slug.toLowerCase()
  const craft = getHeritageCraft(normalized)
  const about: Array<Record<string, unknown>> = []
  const related: Array<Record<string, unknown>> = []

  if (craft === 'khous') {
    about.push({
      '@type': 'Thing',
      name: 'Al Khous',
      description:
        'Traditional Emirati craft of weaving date palm fronds into functional and decorative objects.',
      sameAs: heritagePageUrl(locale, 'khous'),
    })
  }

  if (craft === 'al-talli') {
    about.push({
      '@type': 'Thing',
      name: 'Al Talli',
      description:
        'Traditional Emirati hand embroidery using metallic threads, passed down through generations.',
      sameAs: heritagePageUrl(locale, 'al-talli'),
    })
  }

  if (isKnightsbridgeDressSlug(normalized)) {
    related.push(
      relatedProductNode(
        productRef('Knightsbridge Abaya Jacket', '/shop/knightsbridge-abaya-jacket'),
        locale,
      ),
    )
  }

  if (isKnightsbridgeAbayaSlug(normalized)) {
    related.push(
      relatedProductNode(productRef('Knightsbridge Dress', '/shop/knightsbridge-dress'), locale),
    )
  }

  const fields: Record<string, unknown> = {}

  if (about.length === 1) {
    fields.about = about[0]
  } else if (about.length > 1) {
    fields.about = about
  }

  if (related.length === 1) {
    fields.isRelatedTo = related[0]
  } else if (related.length > 1) {
    fields.isRelatedTo = related
  }

  return fields
}
