import type { AppLocale } from '@/lib/i18n/routing'
import { localizedPath } from '@/lib/i18n/routing'
import { getHeritageCraft } from '@/lib/products/heritageSeo'
import { isKnightsbridgeAbayaSlug } from '@/lib/products/knightsbridgeSchemaI18n'
import { isKnightsbridgeDressSlug } from '@/lib/products/knightsbridgeDressSchemaI18n'
import { isCoventGardenSignatureSetSlug } from '@/lib/products/coventGardenSignatureSetSchemaI18n'
import { isCoventGardenAbayaSlug } from '@/lib/products/coventGardenAbayaSchemaI18n'
import { isCoventGardenLongDressSlug } from '@/lib/products/coventGardenLongDressSchemaI18n'
import { isBelgraviaSlug } from '@/lib/products/belgraviaSchemaI18n'
import { isKensingtonSlug } from '@/lib/products/kensingtonSchemaI18n'
import { AL_TALLI_HERITAGE_PATH, buildAlTalliDefinedTermNode, alTalliHeritagePageUrl } from '@/lib/seo/alTalliDiscovery'

const KHOUS_HERITAGE_PATH = '/heritage/khous'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

type SemanticProductRef = {
  name: string
  path: string
}

function productRef(name: string, path: string): SemanticProductRef {
  return { name, path }
}

/** Pairing graph for cross-discovery between catalogue PDPs. */
const SEMANTIC_RELATIONS: Record<string, SemanticProductRef[]> = {
  'belgravia-abaya': [productRef('Kensington Abaya', '/shop/kensington-abaya')],
  'kensington-abaya': [productRef('Belgravia Abaya', '/shop/belgravia-abaya')],
  'marylebone-abaya': [
    productRef('Covent Garden Long Dress', '/shop/covent-garden-long-dress'),
    productRef('Soho Set', '/shop/soho-set'),
  ],
  'park-lane-abaya': [productRef('Covent Garden Abaya', '/shop/covent-garden-abaya')],
  'covent-garden-long-dress': [
    productRef('Covent Garden Abaya', '/shop/covent-garden-abaya'),
    productRef('Marylebone Abaya', '/shop/marylebone-abaya'),
    productRef('Kensington Abaya', '/shop/kensington-abaya'),
  ],
  'hampstead-dress': [
    productRef('Covent Garden Abaya', '/shop/covent-garden-abaya'),
    productRef('Marylebone Abaya', '/shop/marylebone-abaya'),
  ],
  'soho-set': [
    productRef('Marylebone Abaya', '/shop/marylebone-abaya'),
    productRef('Hampstead Dress', '/shop/hampstead-dress'),
  ],
  'covent-garden-signature-set': [
    productRef('Covent Garden Long Dress', '/shop/covent-garden-long-dress'),
    productRef('Covent Garden Abaya', '/shop/covent-garden-abaya'),
  ],
  'mayfair-kaftan': [productRef('Nothing Hill Kaftan', '/shop/nothing-hill-kaftan')],
  'nothing-hill-kaftan': [productRef('Mayfair Kaftan', '/shop/mayfair-kaftan')],
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
  const fields: Record<string, unknown> = {}

  if (craft === 'khous') {
    about.push({
      '@type': 'Thing',
      name: 'Al Khous',
      description:
        'Traditional Emirati craft of weaving date palm fronds into functional and decorative objects.',
      sameAs: heritagePageUrl(locale, 'khous'),
    })
    related.push(
      relatedProductNode(productRef('Khous Heritage', KHOUS_HERITAGE_PATH), locale),
    )
  }

  if (craft === 'al-talli') {
    const definedTerm = buildAlTalliDefinedTermNode(locale)
    about.push(definedTerm)
    related.push(
      relatedProductNode(
        productRef('Al Talli Heritage', AL_TALLI_HERITAGE_PATH),
        locale,
      ),
    )
    fields.mentions = definedTerm
    fields.subjectOf = {
      '@type': 'WebPage',
      '@id': `${alTalliHeritagePageUrl(locale)}#webpage`,
      name: 'Al Talli — UNESCO Emirati Heritage | Bint Saeed',
      url: alTalliHeritagePageUrl(locale),
    }
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

  if (isCoventGardenSignatureSetSlug(normalized)) {
    related.push(
      relatedProductNode(
        productRef('Covent Garden Long Dress', '/shop/covent-garden-long-dress'),
        locale,
      ),
    )
  }

  if (isCoventGardenAbayaSlug(normalized)) {
    related.push(
      relatedProductNode(
        productRef('Covent Garden Long Dress', '/shop/covent-garden-long-dress'),
        locale,
      ),
      relatedProductNode(productRef('Hampstead Dress', '/shop/hampstead-dress'), locale),
    )
  }

  if (isCoventGardenLongDressSlug(normalized)) {
    related.push(
      relatedProductNode(productRef('Covent Garden Abaya', '/shop/covent-garden-abaya'), locale),
    )
  }

  if (isBelgraviaSlug(normalized) || isKensingtonSlug(normalized)) {
    related.push(
      relatedProductNode(productRef('Knightsbridge Abaya Jacket', '/shop/knightsbridge-abaya-jacket'), locale),
    )
  }

  for (const ref of SEMANTIC_RELATIONS[normalized] ?? []) {
    related.push(relatedProductNode(ref, locale))
  }

  fields.isPartOf = {
    '@type': 'Brand',
    name: 'Bint Saeed',
    url: SITE_URL,
  }

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
