import type { AppLocale } from '@/lib/i18n/routing'
import { getLocalizedAlTalliDiscoveryKeywords } from '@/lib/products/alTalliDiscoveryKeywordsI18n'

/** Required closing phrase on every commerce image alt. */
export const BRAND_GEO_PHRASE = 'Bint Saeed Abu Dhabi, United Arab Emirates'

export type HeritageCraft = 'khous' | 'al-talli'

const KHOUS_WEAVING_SLUGS = new Set([
  'knightsbridge-abaya-jacket',
  'knightsbridge-dress',
  'belgravia-abaya',
  'kensington-abaya',
  'covent-garden-signature-set',
])

const AL_TALLI_SLUGS = new Set(['covent-garden-abaya', 'hampstead-dress', 'soho-set'])

const DETAIL_ANGLES = new Set(['detail', 'extra', 'close-up', 'cuff close-up'])

export function normalizeProductSlug(slug: string): string {
  return slug.trim().toLowerCase()
}

export function getHeritageCraft(slug: string): HeritageCraft | null {
  const s = normalizeProductSlug(slug)
  if (KHOUS_WEAVING_SLUGS.has(s)) return 'khous'
  if (AL_TALLI_SLUGS.has(s)) return 'al-talli'
  return null
}

/** Heritage phrase for image alt — varies by craft and whether the shot highlights trim. */
export function getHeritageAltPhrase(craft: HeritageCraft, angle: string): string {
  const isDetail = DETAIL_ANGLES.has(angle.toLowerCase())

  if (craft === 'khous') {
    return isDetail
      ? 'handwoven trim detail inspired by the Emirati tradition of Khous weaving, made in Abu Dhabi'
      : 'handwoven trim inspired by the Emirati tradition of Khous weaving, made in Abu Dhabi'
  }

  return isDetail
    ? 'detail of traditional Al Talli trim, Emirati heritage embroidery, made in Abu Dhabi'
    : 'traditional Al Talli trim celebrating Emirati heritage, made in Abu Dhabi'
}

const HERITAGE_META_EN: Record<HeritageCraft, string> = {
  khous:
    'Handwoven trim inspired by the Emirati tradition of Khous weaving. Made in Abu Dhabi — luxury fashion by an Emirati brand celebrating UAE culture.',
  'al-talli':
    'Traditional Al Talli trim and Emirati heritage craftsmanship. Abu Dhabi luxury fashion by an Emirati brand.',
}

const HERITAGE_META_AR: Record<HeritageCraft, string> = {
  khous:
    'زخرفة مستوحاة من الحياكة التراثية الخوص وإرث إماراتي. أزياء فاخرة من أبوظبي من علامة إماراتية.',
  'al-talli':
    'زخرفة التلي التراثية وإرث إماراتي. أزياء فاخرة من أبوظبي من علامة إماراتية تحتفي بثقافة الإمارات.',
}

const HERITAGE_META_ID: Record<HeritageCraft, string> = {
  khous:
    'Trim tenun tangan terinspirasi tradisi tenun Khous Emirati. Dibuat di Abu Dhabi — fashion mewah dari merek Emirati yang merayakan budaya UEA.',
  'al-talli':
    'Trim Al Talli tradisional dan kerajinan warisan Emirati. Fashion mewah Abu Dhabi dari merek Emirati.',
}

const HERITAGE_META_MS: Record<HeritageCraft, string> = {
  khous:
    'Hiasan tenunan tangan terinspirasi tradisi tenunan Khous Emirati. Dihasilkan di Abu Dhabi — fesyen mewah daripada jenama Emirati yang meraikan budaya UAE.',
  'al-talli':
    'Hiasan Al Talli tradisional dan kraftangan warisan Emirati. Fesyen mewah Abu Dhabi daripada jenama Emirati.',
}

const HERITAGE_SCHEMA_KEYWORDS_EN = {
  default:
    'Bint Saeed, Emirati brand, Abu Dhabi culture, luxury abaya, UAE fashion',
  khous: [
    'Emirati heritage',
    'Handwoven trim',
    'Made in Abu Dhabi',
    'Emirati culture',
    'Abu Dhabi culture',
    'Emirati brand',
    'Bint Saeed',
    'luxury abaya',
    'luxury set',
    'UAE fashion',
  ].join(', '),
  'al-talli': [
    'Bint Saeed',
    'luxury abaya',
    'designer abaya',
    'UAE fashion',
  ].join(', '),
} as const

const HERITAGE_SCHEMA_KEYWORDS_ID = {
  default:
    'Bint Saeed, merek Emirati, budaya Abu Dhabi, abaya mewah, fashion UEA',
  khous: [
    'warisan Emirati',
    'trim tenun tangan',
    'dibuat di Abu Dhabi',
    'budaya Emirati',
    'budaya Abu Dhabi',
    'merek Emirati',
    'Bint Saeed',
    'abaya mewah',
    'set mewah',
    'fashion UEA',
  ].join(', '),
  'al-talli': [
    'Bint Saeed',
    'abaya mewah',
    'fashion UEA',
  ].join(', '),
} as const

const HERITAGE_SCHEMA_KEYWORDS_MS = {
  default:
    'Bint Saeed, jenama Emirati, budaya Abu Dhabi, abaya mewah, fesyen UAE',
  khous: [
    'warisan Emirati',
    'hiasan tenunan tangan',
    'dihasilkan di Abu Dhabi',
    'budaya Emirati',
    'budaya Abu Dhabi',
    'jenama Emirati',
    'Bint Saeed',
    'abaya mewah',
    'set mewah',
    'fesyen UAE',
  ].join(', '),
  'al-talli': [
    'Bint Saeed',
    'abaya mewah',
    'fesyen UAE',
  ].join(', '),
} as const

function heritageMetaForLocale(locale: AppLocale, craft: HeritageCraft): string {
  if (locale === 'ar') return HERITAGE_META_AR[craft]
  if (locale === 'id') return HERITAGE_META_ID[craft]
  if (locale === 'ms') return HERITAGE_META_MS[craft]
  return HERITAGE_META_EN[craft]
}

/** Extra meta-description clause for heritage PDPs (locale-aware). */
export function getHeritageMetaSnippet(locale: AppLocale, slug: string): string {
  const craft = getHeritageCraft(slug)
  if (!craft) return ''
  return heritageMetaForLocale(locale, craft)
}

/** Schema keywords — heritage discovery terms for search and AI crawlers. */
export function getHeritageSchemaKeywords(
  slug: string,
  locale: AppLocale = 'en',
): string | undefined {
  const craft = getHeritageCraft(slug)
  const keywords =
    locale === 'id'
      ? HERITAGE_SCHEMA_KEYWORDS_ID
      : locale === 'ms'
        ? HERITAGE_SCHEMA_KEYWORDS_MS
        : HERITAGE_SCHEMA_KEYWORDS_EN

  if (!craft) return keywords.default

  if (craft === 'al-talli') {
    const alTalliTerms = getLocalizedAlTalliDiscoveryKeywords(locale)
    const suffix = keywords['al-talli'].split(', ').filter(Boolean)
    return [...new Set([...alTalliTerms, ...suffix])].join(', ')
  }

  return keywords[craft]
}

export function getHeritageSchemaProperties(slug: string): Array<Record<string, string>> {
  const craft = getHeritageCraft(slug)
  const base = [
    {
      '@type': 'PropertyValue',
      name: 'Brand origin',
      value: 'Abu Dhabi, United Arab Emirates',
    },
    {
      '@type': 'PropertyValue',
      name: 'Emirati brand',
      value: 'Bint Saeed',
    },
  ]

  if (craft === 'khous') {
    return [
      ...base,
      {
        '@type': 'PropertyValue',
        name: 'Heritage craft',
        value: 'Handwoven trim inspired by the Emirati tradition of Khous weaving',
      },
      {
        '@type': 'PropertyValue',
        name: 'Made in',
        value: 'Abu Dhabi, United Arab Emirates',
      },
      {
        '@type': 'PropertyValue',
        name: 'Emirati heritage',
        value: 'Khous palm weaving',
      },
    ]
  }

  if (craft === 'al-talli') {
    return [
      ...base,
      {
        '@type': 'PropertyValue',
        name: 'Heritage craft',
        value: 'Traditional Al Talli trim',
      },
      {
        '@type': 'PropertyValue',
        name: 'Emirati heritage',
        value: 'Al Talli embroidery',
      },
    ]
  }

  return base
}

/** Richer schema / discovery description layered on catalog copy. */
export function buildHeritageRichDescription(
  slug: string,
  baseDescription: string,
  locale: AppLocale = 'en',
): string {
  const craft = getHeritageCraft(slug)
  const trimmed = baseDescription.trim()
  if (!craft) {
    if (locale === 'id') {
      return `${trimmed} Bint Saeed — merek mewah Emirati dari Abu Dhabi, UEA.`
        .replace(/\s+/g, ' ')
        .trim()
    }
    if (locale === 'ms') {
      return `${trimmed} Bint Saeed — jenama mewah Emirati dari Abu Dhabi, UAE.`
        .replace(/\s+/g, ' ')
        .trim()
    }
    return `${trimmed} Bint Saeed — Emirati luxury brand from Abu Dhabi, UAE.`.replace(/\s+/g, ' ').trim()
  }
  return `${trimmed} ${heritageMetaForLocale(locale, craft)}`.replace(/\s+/g, ' ').trim()
}
