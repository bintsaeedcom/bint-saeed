import type { AppLocale } from '@/lib/i18n/routing'
import type { Product } from '@/data/products'
import { getProductSlug } from '@/lib/products/links'
import { getHeritageCraft, getHeritageSchemaKeywords } from '@/lib/products/heritageSeo'
import { getCatalogExclusiveSchemaKeywords } from '@/lib/products/catalogSchemaKeywordsI18n'
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
  getLocalizedKnightsbridgeDressFaq,
  getLocalizedKnightsbridgeDressSchemaFacts,
  isKnightsbridgeDressSlug,
} from '@/lib/products/knightsbridgeDressSchemaLocalePacks'
import { getLocalizedKnightsbridgeDressExclusiveKeywords } from '@/lib/products/knightsbridgeDressSchemaKeywordsI18n'
import {
  getLocalizedCoventGardenSignatureSetFaq,
  getLocalizedCoventGardenSignatureSetSchemaFacts,
  isCoventGardenSignatureSetSlug,
} from '@/lib/products/coventGardenSignatureSetSchemaLocalePacks'
import { getLocalizedCoventGardenSignatureSetExclusiveKeywords } from '@/lib/products/coventGardenSignatureSetSchemaKeywordsI18n'
import {
  getLocalizedKnightsbridgeFaq,
  getLocalizedKnightsbridgeSchemaFacts,
} from '@/lib/products/knightsbridgeSchemaI18n'
import {
  buildAbayaProductKeywordVariants,
  getLocalizedAbayaSchemaKeywordTerms,
} from '@/lib/products/abayaSchemaKeywordsI18n'
import { SCHEMA_MANUFACTURER } from '@/lib/products/abayaSchemaShared'
import { getLocalizedBelgraviaExclusiveKeywords } from '@/lib/products/belgraviaSchemaKeywordsI18n'
import { getLocalizedKensingtonExclusiveKeywords } from '@/lib/products/kensingtonSchemaKeywordsI18n'
import { getLocalizedKnightsbridgeExclusiveKeywords } from '@/lib/products/knightsbridgeSchemaKeywordsI18n'
import { isKnightsbridgeAbayaSlug } from '@/lib/products/knightsbridgeSchemaI18n'

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
  styling?: string
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
  'covent-garden-abaya': {
    productType: 'Luxury linen abaya with traditional Al Talli trim',
    productCategory: 'Abaya, Linen Abaya, Occasion Abaya, Luxury Modest Fashion',
    closure: 'Concealed placket',
    stylingDetail: 'Traditional Al Talli trim',
    trim: 'Traditional Al Talli trim',
    lining: 'Cotton lining',
    material: 'European linen blend, cotton lining',
    suitableFor: DEFAULT_SUITABLE_FOR,
    madeIn: DEFAULT_MADE_IN,
  },
  'marylebone-abaya': {
    productType: 'Open-front layering abaya',
    productCategory: 'Abaya, Layering Abaya, Contemporary Outerwear, Luxury Modest Fashion',
    closure: 'Open front',
    stylingDetail: 'Wide sleeves for layering over dresses or sets',
    material: 'Wool-silk blend, matte satin binding',
    suitableFor: DEFAULT_SUITABLE_FOR,
    madeIn: DEFAULT_MADE_IN,
  },
  'park-lane-abaya': {
    productType: 'Everyday city abaya with fluid drape',
    productCategory: 'Abaya, Everyday Abaya, Contemporary Womenswear, Luxury Modest Fashion',
    fit: 'Clean line with fluid drape',
    suitableFor: DEFAULT_SUITABLE_FOR,
    madeIn: DEFAULT_MADE_IN,
  },
  'knightsbridge-dress': {
    productType: 'Contemporary designer cotton-blend maxi dress inspired by Emirati heritage.',
    productCategory:
      'Maxi Dress, Halter Dress, Designer Dress, Luxury Dress, Premium Dress, Elegant Dress, Day Dress, Evening Dress, Summer Dress, Travel Dress, Cotton Blend Dress, Princess Silhouette Dress, Resort Wear, Contemporary Womenswear, Luxury Modest Fashion, Premium Modest Fashion',
    fit: 'Fitted through the bodice with a full box-pleated skirt.',
    neckline:
      'Halter neckline with Bint Saeed signature woven detailing inspired by Al Khous, the traditional Emirati art of weaving date palm fronds.',
    maximumGarmentLength: '143 cm / 56.3 inches',
    modelHeight: '160 cm / 63 inches',
    modelWears: 'XS',
    closure: 'Concealed back zip closure with crossover neck fastening.',
    styling:
      'Designed to be worn on its own or paired seamlessly with the Knightsbridge Abaya for a coordinated Bint Saeed look.',
    stylingDetail:
      'Maxi dress with flowing silhouette, soft box pleats, signature Khous-inspired woven halter neckline, concealed back zip closure, crossover neck fastening, and hidden side seam pockets.',
    pockets: 'Hidden side seam pockets.',
    trim: 'Signature Khous-inspired woven detailing at the halter neckline.',
    material: 'Outer: 60% Cotton, 40% Polyester',
    care: 'Professional dry clean only.',
    suitableFor:
      'Summer holidays, elegant lunches, afternoon tea, resort destinations, travel, city weekends, gallery visits, everyday dressing, evening gatherings, luxury vacations, premium vacations, destination dressing, pairing with the Knightsbridge Abaya, and international wardrobes.',
    madeIn: DEFAULT_MADE_IN,
  },
  'covent-garden-long-dress': {
    productType: 'Slim column evening dress in stretch crepe',
    productCategory: 'Dress, Column Dress, Evening Dress, Designer Dress, Luxury Modest Fashion, Premium Modest Fashion',
    fit: 'Slim column silhouette',
    stylingDetail: 'High back vent for ease of movement',
    lining: 'Power mesh lining',
    material: 'Stretch crepe, power mesh lining',
    suitableFor: DEFAULT_SUITABLE_FOR,
    madeIn: DEFAULT_MADE_IN,
  },
  'hampstead-dress': {
    productType: 'Structured dress with traditional Al Talli trim',
    productCategory: 'Dress, Evening Dress, Designer Dress, Luxury Modest Fashion',
    fit: 'Structured shoulders',
    stylingDetail: 'Traditional Al Talli trim',
    trim: 'Traditional Al Talli trim',
    lining: 'Silk lining',
    material: 'Virgin Wool blend, Silk lining, Mother-of-pearl buttons',
    suitableFor: DEFAULT_SUITABLE_FOR,
    madeIn: DEFAULT_MADE_IN,
  },
  'covent-garden-signature-set': {
    productType: 'Covent Garden dress and short-sleeve tailored jacket set',
    productCategory: 'Set, Two-Piece Set, Coordinate Set, Luxury Modest Fashion, Premium Modest Fashion, Contemporary Womenswear',
    stylingDetail:
      'Two-piece set — coordinating fitted maxi dress and short-sleeve tailored jacket with Al Khous-inspired woven pocket flaps and Knotted Line buttons',
    trim: 'Handwoven trim inspired by the Emirati tradition of Khous weaving',
    lining: 'Soft crepe lining',
    material: 'Outer: 80% Polyester, 20% Viscose; Lining: 70% Polyester, 30% Viscose',
    suitableFor: DEFAULT_SUITABLE_FOR,
    madeIn: DEFAULT_MADE_IN,
  },
  'soho-set': {
    productType: 'Coordinate top and skirt set with Al Talli trim',
    productCategory: 'Set, Two-Piece Set, Coordinate Set, Luxury Modest Fashion, Premium Modest Fashion, Contemporary Womenswear',
    stylingDetail: 'Coordinate top and skirt set with traditional Al Talli trim',
    trim: 'Traditional Al Talli trim',
    suitableFor: DEFAULT_SUITABLE_FOR,
    madeIn: DEFAULT_MADE_IN,
  },
  'hyde-park-set': {
    productType: 'Contemporary designer coordinate set',
    productCategory: 'Set, Two-Piece Set, Contemporary Womenswear',
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

  const dressFacts = getLocalizedKnightsbridgeDressSchemaFacts(slug, locale)
  if (dressFacts) return dressFacts

  const coventGardenSetFacts = getLocalizedCoventGardenSignatureSetSchemaFacts(slug, locale)
  if (coventGardenSetFacts) return coventGardenSetFacts

  const knightsbridgeFacts = getLocalizedKnightsbridgeSchemaFacts(slug, locale)
  if (knightsbridgeFacts) return knightsbridgeFacts

  const base = SLUG_FACTS[slug] ?? {}
  const fromMeasurements = extractMaxLength(product.measurements)

  return {
    madeIn: DEFAULT_MADE_IN,
    suitableFor: DEFAULT_SUITABLE_FOR,
    material: base.material ?? product.fabric,
    care: base.care ?? 'Professional dry clean only.',
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

  if (isKnightsbridgeAbayaSlug(slug)) {
    for (const t of getLocalizedKnightsbridgeExclusiveKeywords(locale, colorName)) terms.add(t)
  }

  if (isKnightsbridgeDressSlug(slug)) {
    for (const t of getLocalizedKnightsbridgeDressExclusiveKeywords(locale, colorName)) terms.add(t)
  }

  if (isCoventGardenSignatureSetSlug(slug)) {
    for (const t of getLocalizedCoventGardenSignatureSetExclusiveKeywords(locale, colorName)) {
      terms.add(t)
    }
  }

  const heritageKeywords = getHeritageSchemaKeywords(slug, locale)
  if (heritageKeywords) {
    for (const t of heritageKeywords.split(', ').filter(Boolean)) terms.add(t)
  }

  for (const t of getCatalogExclusiveSchemaKeywords(slug, locale, colorName)) terms.add(t)

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
    ['Styling', facts.styling],
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
  const slug = getProductSlug(product).toLowerCase()
  if (craft === 'khous') {
    props.push({
      '@type': 'PropertyValue',
      name: localizePropertyLabel('Heritage craft', locale),
      value:
        slug === 'knightsbridge-dress'
          ? 'Al Khous-inspired woven detailing inspired by the traditional Emirati art of weaving date palm fronds'
          : slug === 'covent-garden-signature-set'
            ? 'Al Khous-inspired woven pocket flaps inspired by the traditional Emirati art of weaving date palm fronds'
            : 'Handwoven trim inspired by the Emirati tradition of Khous weaving',
    })
    props.push({
      '@type': 'PropertyValue',
      name: localizePropertyLabel('Emirati heritage', locale),
      value: 'Khous palm weaving',
    })
  }
  if (craft === 'al-talli') {
    props.push({
      '@type': 'PropertyValue',
      name: localizePropertyLabel('Heritage craft', locale),
      value: 'Traditional Al Talli trim',
    })
    props.push({
      '@type': 'PropertyValue',
      name: localizePropertyLabel('Emirati heritage', locale),
      value: 'Al Talli embroidery',
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

  const coventGardenSetFaq = getLocalizedCoventGardenSignatureSetFaq(slug, locale)
  if (coventGardenSetFaq.length > 0) {
    return coventGardenSetFaq
  }

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

  const dressFaq = getLocalizedKnightsbridgeDressFaq(slug, locale)
  if (dressFaq.length > 0) {
    const merged = [...dressFaq]
    const seen = new Set(dressFaq.map((item) => item.question.toLowerCase()))
    for (const item of customFaq ?? []) {
      if (!seen.has(item.question.toLowerCase())) {
        merged.push(item)
        seen.add(item.question.toLowerCase())
      }
    }
    return merged
  }

  const knightsbridgeFaq = getLocalizedKnightsbridgeFaq(slug, locale)
  if (knightsbridgeFaq.length > 0) {
    const merged = [...knightsbridgeFaq]
    const seen = new Set(knightsbridgeFaq.map((item) => item.question.toLowerCase()))
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
