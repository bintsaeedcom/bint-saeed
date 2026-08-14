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

const WAHAT_AL_KARAMA_DESCRIPTION: Record<AppLocale, string> = {
  en: 'A monumental memorial and architectural landmark in Abu Dhabi whose interdependent forms inspired the intersecting cuff geometry of the Covent Garden Abaya.',
  ar: 'صرح تذكاري ومعلم معماري بارز في أبوظبي، ألهمت أشكاله المتساندة الهندسة المتقاطعة في أساور عباية Covent Garden.',
  fr: 'Mémorial monumental et repère architectural d’Abou Dabi dont les formes interdépendantes ont inspiré la géométrie entrecroisée des poignets de l’abaya Covent Garden.',
  it: 'Memoriale monumentale e riferimento architettonico di Abu Dhabi, le cui forme interdipendenti hanno ispirato la geometria incrociata dei polsini dell’abaya Covent Garden.',
  es: 'Monumento conmemorativo y referente arquitectónico de Abu Dabi cuyas formas interdependientes inspiraron la geometría entrecruzada de los puños de la abaya Covent Garden.',
  ru: 'Монументальный мемориал и архитектурная достопримечательность Абу-Даби, чьи взаимосвязанные формы вдохновили геометрию манжет абайи Covent Garden.',
  zh: '阿布扎比纪念性建筑地标，其彼此支撑的形态启发了 Covent Garden Abaya 袖口的交错几何。',
  de: 'Monumentale Gedenkstätte und architektonisches Wahrzeichen Abu Dhabis, dessen sich stützende Formen die Geometrie der Manschetten der Covent Garden Abaya inspirierten.',
  nl: 'Monumentaal gedenkteken en architectonisch herkenningspunt van Abu Dhabi, waarvan de onderling steunende vormen de geometrie van de manchetten van de Covent Garden Abaya inspireerden.',
  pt: 'Memorial monumental e referência arquitetónica de Abu Dhabi, cujas formas interdependentes inspiraram a geometria cruzada dos punhos da abaya Covent Garden.',
  id: 'Monumen memorial dan landmark arsitektur Abu Dhabi, dengan bentuk-bentuk saling menopang yang menginspirasi geometri manset abaya Covent Garden.',
  ms: 'Tugu peringatan monumental dan mercu tanda seni bina Abu Dhabi, dengan bentuk saling menyokong yang mengilhamkan geometri manset abaya Covent Garden.',
}

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
  'park-lane-abaya': [
    productRef('Covent Garden Abaya', '/shop/covent-garden-abaya'),
    productRef('Kensington Abaya', '/shop/kensington-abaya'),
    productRef('Marylebone Abaya', '/shop/marylebone-abaya'),
  ],
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
    const abuDhabi = {
      '@type': 'City',
      name: 'Abu Dhabi',
      containedInPlace: {
        '@type': 'Country',
        name: 'United Arab Emirates',
      },
    }
    const wahatAlKarama = {
      '@type': 'LandmarksOrHistoricalBuildings',
      name: 'Wahat Al Karama',
      alternateName: locale === 'ar' ? 'واحة الكرامة' : 'Wahat Al Karama Memorial',
      description: WAHAT_AL_KARAMA_DESCRIPTION[locale],
      containedInPlace: abuDhabi,
    }
    about.push(wahatAlKarama, abuDhabi)
    fields.mentions = fields.mentions
      ? [fields.mentions, wahatAlKarama]
      : wahatAlKarama
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
