import type { AppLocale } from '@/lib/i18n/routing'

/** Required closing phrase on every commerce image alt. */
export const BRAND_GEO_PHRASE = 'Bint Saeed Abu Dhabi, UAE'

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
    ? 'detail of traditional Al Talli trim, Emirati heritage embroidery and Abu Dhabi culture'
    : 'traditional Al Talli trim celebrating Emirati heritage and Abu Dhabi culture'
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

/** Extra meta-description clause for heritage PDPs (locale-aware). */
export function getHeritageMetaSnippet(locale: AppLocale, slug: string): string {
  const craft = getHeritageCraft(slug)
  if (!craft) return ''
  if (locale === 'ar') return HERITAGE_META_AR[craft]
  return HERITAGE_META_EN[craft]
}

/** Schema keywords — heritage discovery terms for search and AI crawlers. */
export function getHeritageSchemaKeywords(slug: string): string | undefined {
  const craft = getHeritageCraft(slug)
  if (!craft) {
    return 'Bint Saeed, Emirati brand, Abu Dhabi culture, luxury abaya, UAE fashion'
  }
  if (craft === 'khous') {
    return [
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
    ].join(', ')
  }
  return [
    'Emirati heritage',
    'Al Talli',
    'Talli embroidery',
    'Emirati culture',
    'Abu Dhabi culture',
    'Emirati brand',
    'Bint Saeed',
    'UAE fashion',
  ].join(', ')
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
export function buildHeritageRichDescription(slug: string, baseDescription: string): string {
  const craft = getHeritageCraft(slug)
  const trimmed = baseDescription.trim()
  if (!craft) {
    return `${trimmed} Bint Saeed — Emirati luxury brand from Abu Dhabi, UAE.`.replace(/\s+/g, ' ').trim()
  }
  if (craft === 'khous') {
    return `${trimmed} ${HERITAGE_META_EN.khous}`.replace(/\s+/g, ' ').trim()
  }
  return `${trimmed} ${HERITAGE_META_EN['al-talli']}`.replace(/\s+/g, ' ').trim()
}
