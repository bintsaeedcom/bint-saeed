import type { AppLocale } from '@/lib/i18n/routing'
import type { Product } from '@/data/products'
import { getProductSlug } from '@/lib/products/links'
import { getHeritageCraft } from '@/lib/products/heritageSeo'
import { productIsOneSizeOnly } from '@/lib/shopProductOptions'
import {
  buildLocalizedProductKeywords,
  getLocalizedProductFaq,
  localizePropertyLabel,
  SCHEMA_MADE_IN,
  SCHEMA_SUITABLE_FOR,
} from '@/lib/products/productSchemaI18n'
import {
  getLocalizedKaftanFaq,
  getLocalizedKaftanSchemaFacts,
} from '@/lib/products/kaftanSchemaI18n'
import {
  getLocalizedBelgraviaFaq,
  getLocalizedBelgraviaSchemaFacts,
  isBelgraviaSlug,
} from '@/lib/products/belgraviaSchemaI18n'
import {
  getLocalizedKensingtonFaq,
  getLocalizedKensingtonSchemaFacts,
  isKensingtonSlug,
} from '@/lib/products/kensingtonSchemaI18n'
import {
  buildAbayaProductKeywordVariants,
  getLocalizedAbayaSchemaKeywordTerms,
} from '@/lib/products/abayaSchemaKeywordsI18n'
import { SCHEMA_MANUFACTURER } from '@/lib/products/abayaSchemaShared'
import { getLocalizedBelgraviaExclusiveKeywords } from '@/lib/products/belgraviaSchemaKeywordsI18n'
import { getLocalizedKensingtonExclusiveKeywords } from '@/lib/products/kensingtonSchemaKeywordsI18n'

export type ProductFaqItem = {
  question: string
  answer: string
}

export type ProductSchemaFacts = {
  productType?: string
  productCategory?: string
  neckline?: string
  fit?: string
  maximumGarmentLength?: string
  modelHeight?: string
  modelWears?: string
  lining?: string
  innerDress?: string
  closure?: string
  pockets?: string
  trim?: string
  personalisation?: string
  stylingDetail?: string
  suitableFor?: string
  care?: string
  material?: string
  madeIn?: string
  faq?: ProductFaqItem[]
}

const DEFAULT_SUITABLE_FOR =
  'Weddings, Eid, celebrations, dinners, travel, gatherings and everyday elegance'

const DEFAULT_MADE_IN = 'Abu Dhabi, United Arab Emirates'

const SLUG_FACTS: Partial<Record<string, ProductSchemaFacts>> = {
  'knightsbridge-abaya-jacket': {
    fit: 'Jacket-style abaya with refined drape',
    stylingDetail: 'Handwoven trim inspired by the Emirati tradition of Khous weaving',
    suitableFor: DEFAULT_SUITABLE_FOR,
    lining: 'Silk lining',
    madeIn: DEFAULT_MADE_IN,
  },
  'covent-garden-abaya': {
    closure: 'Concealed placket',
    stylingDetail: 'Traditional Al Talli trim',
    lining: 'Cotton lining',
    suitableFor: DEFAULT_SUITABLE_FOR,
    madeIn: DEFAULT_MADE_IN,
  },
  'marylebone-abaya': {
    closure: 'Open front',
    stylingDetail: 'Wide sleeves for layering over dresses or sets',
    suitableFor: DEFAULT_SUITABLE_FOR,
    madeIn: DEFAULT_MADE_IN,
  },
  'park-lane-abaya': {
    fit: 'Clean line with fluid drape',
    suitableFor: DEFAULT_SUITABLE_FOR,
    madeIn: DEFAULT_MADE_IN,
  },
  'knightsbridge-dress': {
    fit: 'Fitted bodice with flowing layered skirt',
    stylingDetail: 'Handwoven trim inspired by the Emirati tradition of Khous weaving',
    lining: 'Duchess satin lining',
    suitableFor: DEFAULT_SUITABLE_FOR,
    madeIn: DEFAULT_MADE_IN,
  },
  'covent-garden-long-dress': {
    fit: 'Slim column silhouette',
    stylingDetail: 'High back vent for ease of movement',
    lining: 'Power mesh lining',
    suitableFor: DEFAULT_SUITABLE_FOR,
    madeIn: DEFAULT_MADE_IN,
  },
  'hampstead-dress': {
    fit: 'Structured shoulders',
    stylingDetail: 'Traditional Al Talli trim',
    lining: 'Silk lining',
    suitableFor: DEFAULT_SUITABLE_FOR,
    madeIn: DEFAULT_MADE_IN,
  },
  'covent-garden-signature-set': {
    stylingDetail:
      'Two-piece set — top and skirt; handwoven trim inspired by the Emirati tradition of Khous weaving',
    suitableFor: DEFAULT_SUITABLE_FOR,
    madeIn: DEFAULT_MADE_IN,
  },
  'soho-set': {
    stylingDetail: 'Coordinate top and skirt set with traditional Al Talli trim',
    suitableFor: DEFAULT_SUITABLE_FOR,
    madeIn: DEFAULT_MADE_IN,
  },
  'hyde-park-set': {
    suitableFor: DEFAULT_SUITABLE_FOR,
    madeIn: DEFAULT_MADE_IN,
  },
}

function productTypeLabel(category: string): string {
  if (category === 'Abayas') return 'abaya'
  if (category === 'Kaftans') return 'kaftan'
  if (category === 'Dresses') return 'dress'
  if (category === 'Sets') return 'set'
  return 'piece'
}

function productTypeTitle(category: string): string {
  const label = productTypeLabel(category)
  return label.charAt(0).toUpperCase() + label.slice(1)
}

function extractMaxLength(measurements: string): string | undefined {
  const maxMatch = measurements.match(/maximum garment length[:\s]*(\d+)\s*cm/i)
  if (maxMatch) return `${maxMatch[1]} cm`
  const lengthMatch = measurements.match(/length[:\s]*(\d+)\s*cm/i)
  if (lengthMatch) return `${lengthMatch[1]} cm`
  return undefined
}

function primaryFabricLabel(fabric: string): string | undefined {
  const raw = fabric.trim()
  if (!raw || /to be finalized|to be confirmed/i.test(raw)) return undefined
  const first = raw.split(',')[0]?.trim()
  return first || undefined
}

export function getProductSchemaFacts(product: Product, locale: AppLocale = 'en'): ProductSchemaFacts {
  const slug = getProductSlug(product).toLowerCase()
  const kaftanFacts = getLocalizedKaftanSchemaFacts(slug, locale)
  if (kaftanFacts) return kaftanFacts

  const belgraviaFacts = getLocalizedBelgraviaSchemaFacts(slug, locale)
  if (belgraviaFacts) return belgraviaFacts

  const kensingtonFacts = getLocalizedKensingtonSchemaFacts(slug, locale)
  if (kensingtonFacts) return kensingtonFacts

  const base = SLUG_FACTS[slug] ?? {}
  const fromMeasurements = extractMaxLength(product.measurements)

  return {
    madeIn: DEFAULT_MADE_IN,
    suitableFor: DEFAULT_SUITABLE_FOR,
    ...base,
    maximumGarmentLength: base.maximumGarmentLength ?? fromMeasurements,
    fit:
      base.fit ??
      (productIsOneSizeOnly(product) ? 'One size; fluid and relaxed fit' : undefined),
  }
}

export function buildProductSchemaKeywords(
  product: Product,
  colorName?: string,
  locale: AppLocale = 'en',
): string {
  const slug = getProductSlug(product).toLowerCase()
  const terms = new Set(
    buildLocalizedProductKeywords(product, locale, colorName)
      .split(', ')
      .filter(Boolean),
  )

  if (product.category === 'Abayas') {
    for (const t of getLocalizedAbayaSchemaKeywordTerms(locale)) terms.add(t)
    for (const t of buildAbayaProductKeywordVariants(product, colorName, locale)) terms.add(t)
  }

  if (isBelgraviaSlug(slug)) {
    for (const t of getLocalizedBelgraviaExclusiveKeywords(locale, colorName)) terms.add(t)
  }

  if (isKensingtonSlug(slug)) {
    for (const t of getLocalizedKensingtonExclusiveKeywords(locale, colorName)) terms.add(t)
  }

  return [...terms].join(', ')
}

export function buildProductAdditionalProperties(
  product: Product,
  facts: ProductSchemaFacts,
  locale: AppLocale = 'en',
): Array<Record<string, string>> {
  const madeIn = SCHEMA_MADE_IN[locale]
  const suitableFor = SCHEMA_SUITABLE_FOR[locale]

  const props: Array<Record<string, string>> = [
    {
      '@type': 'PropertyValue',
      name: localizePropertyLabel('Brand origin', locale),
      value: madeIn,
    },
    {
      '@type': 'PropertyValue',
      name: localizePropertyLabel('Emirati brand', locale),
      value: 'Bint Saeed',
    },
    {
      '@type': 'PropertyValue',
      name: localizePropertyLabel('Made in', locale),
      value: facts.madeIn ?? madeIn,
    },
    {
      '@type': 'PropertyValue',
      name: localizePropertyLabel('Manufacturer', locale),
      value: SCHEMA_MANUFACTURER,
    },
    {
      '@type': 'PropertyValue',
      name: localizePropertyLabel('Suitable For', locale),
      value: facts.suitableFor ?? suitableFor,
    },
  ]

  const optional: Array<[string, string | undefined]> = [
    ['Product type', facts.productType],
    ['Product category', facts.productCategory],
    ['Neckline', facts.neckline],
    ['Fit', facts.fit],
    ['Maximum garment length', facts.maximumGarmentLength],
    ['Model height', facts.modelHeight],
    ['Model wears', facts.modelWears],
    ['Lining', facts.lining],
    ['Inner dress', facts.innerDress],
    ['Closure', facts.closure],
    ['Pockets', facts.pockets],
    ['Trim', facts.trim],
    ['Personalisation', facts.personalisation],
    ['Styling detail', facts.stylingDetail],
    ['Material', facts.material],
    ['Care', facts.care],
  ]

  for (const [name, value] of optional) {
    if (value?.trim()) {
      props.push({
        '@type': 'PropertyValue',
        name: localizePropertyLabel(name, locale),
        value: value.trim(),
      })
    }
  }

  const craft = getHeritageCraft(getProductSlug(product))
  if (craft === 'khous') {
    props.push({
      '@type': 'PropertyValue',
      name: localizePropertyLabel('Heritage craft', locale),
      value: 'Handwoven trim inspired by the Emirati tradition of Khous weaving',
    })
  }
  if (craft === 'al-talli') {
    props.push({
      '@type': 'PropertyValue',
      name: localizePropertyLabel('Heritage craft', locale),
      value: 'Traditional Al Talli trim',
    })
  }

  return props
}

function buildDefaultEnglishGarmentFaq(product: Product, facts: ProductSchemaFacts): ProductFaqItem[] {
  const name = product.name
  const craft = getHeritageCraft(getProductSlug(product))
  const oneSize = productIsOneSizeOnly(product)

  const occasionLead = `Yes. The ${name} is designed for weddings, engagement celebrations, Eid gatherings, formal dinners, and special occasions.`
  const occasionAnswer = facts.stylingDetail
    ? `${occasionLead} ${facts.stylingDetail}. Its silhouette transitions effortlessly from daytime events to evening occasions.`
    : `${occasionLead} It transitions effortlessly from daytime events to evening occasions.`

  const items: ProductFaqItem[] = [
    {
      question: `Is the ${name} suitable for weddings, Eid, and special occasions?`,
      answer: occasionAnswer,
    },
  ]

  if (oneSize) {
    items.push({
      question: `Is the ${name} one size?`,
      answer: `Yes. The ${name} is designed as a one-size silhouette with a fluid and relaxed fit.`,
    })
  } else {
    items.push({
      question: `What sizes does the ${name} come in?`,
      answer: `The ${name} is available in sizes ${product.sizes.join(', ')}. Refer to the Size & Fit section for measurements and model reference.`,
    })
  }

  const distinctiveAnswer =
    craft === 'khous'
      ? `The ${name} features handwoven trim inspired by the Emirati tradition of Khous weaving. Designed in Abu Dhabi, UAE, it is created for women who value heritage craftsmanship, elegance, and pieces that endure beyond seasons.`
      : craft === 'al-talli'
        ? `The ${name} features traditional Al Talli trim. Designed in Abu Dhabi, UAE, it is created for women who value heritage craftsmanship, elegance, and pieces that endure beyond seasons.`
        : `The ${name} reflects Bint Saeed's contemporary Emirati design language. Designed in Abu Dhabi, UAE, it is created for women who value elegance, versatility, and pieces that can be worn across occasions and seasons.`

  items.push({
    question: `What makes the ${name} distinctive?`,
    answer: distinctiveAnswer,
  })

  return items
}

export function getProductFaq(
  product: Product,
  customFaq?: ProductFaqItem[],
  locale: AppLocale = 'en',
): ProductFaqItem[] {
  const slug = getProductSlug(product).toLowerCase()
  const kaftanFaq = getLocalizedKaftanFaq(slug, locale)
  if (kaftanFaq.length > 0) {
    const merged = [...kaftanFaq]
    const seen = new Set(kaftanFaq.map((item) => item.question.toLowerCase()))
    for (const item of customFaq ?? []) {
      if (!seen.has(item.question.toLowerCase())) {
        merged.push(item)
        seen.add(item.question.toLowerCase())
      }
    }
    return merged
  }

  const belgraviaFaq = getLocalizedBelgraviaFaq(slug, locale)
  if (belgraviaFaq.length > 0) {
    const merged = [...belgraviaFaq]
    const seen = new Set(belgraviaFaq.map((item) => item.question.toLowerCase()))
    for (const item of customFaq ?? []) {
      if (!seen.has(item.question.toLowerCase())) {
        merged.push(item)
        seen.add(item.question.toLowerCase())
      }
    }
    return merged
  }

  const kensingtonFaq = getLocalizedKensingtonFaq(slug, locale)
  if (kensingtonFaq.length > 0) {
    const merged = [...kensingtonFaq]
    const seen = new Set(kensingtonFaq.map((item) => item.question.toLowerCase()))
    for (const item of customFaq ?? []) {
      if (!seen.has(item.question.toLowerCase())) {
        merged.push(item)
        seen.add(item.question.toLowerCase())
      }
    }
    return merged
  }

  if (locale === 'en') {
    const facts = getProductSchemaFacts(product, locale)
    const slugFaq = facts.faq ?? []
    const merged = [...slugFaq]
    const seen = new Set(slugFaq.map((item) => item.question.toLowerCase()))

    for (const item of customFaq ?? []) {
      if (!seen.has(item.question.toLowerCase())) {
        merged.push(item)
        seen.add(item.question.toLowerCase())
      }
    }

    if (merged.length > 0) return merged
    return buildDefaultEnglishGarmentFaq(product, facts)
  }

  return getLocalizedProductFaq(product, locale, customFaq)
}

export function buildFaqPageJsonLd(
  pageUrl: string,
  items: ProductFaqItem[],
  lang?: string,
): Record<string, unknown> | null {
  if (!items.length) return null
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    ...(lang ? { inLanguage: lang } : {}),
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
