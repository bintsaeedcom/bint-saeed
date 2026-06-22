import type { Product } from '@/data/products'
import { getProductSlug } from '@/lib/products/links'
import { getHeritageCraft } from '@/lib/products/heritageSeo'
import { productIsOneSizeOnly } from '@/lib/shopProductOptions'

export type ProductFaqItem = {
  question: string
  answer: string
}

export type ProductSchemaFacts = {
  neckline?: string
  fit?: string
  maximumGarmentLength?: string
  lining?: string
  innerDress?: string
  closure?: string
  pockets?: string
  stylingDetail?: string
  suitableFor?: string
  care?: string
  madeIn?: string
  faq?: ProductFaqItem[]
}

const DEFAULT_SUITABLE_FOR =
  'Weddings, Eid, celebrations, dinners, travel, gatherings and everyday elegance'

const DEFAULT_MADE_IN = 'Abu Dhabi, United Arab Emirates'

const SLUG_FACTS: Partial<Record<string, ProductSchemaFacts>> = {
  'mayfair-kaftan': {
    neckline: 'V-neckline',
    fit: 'One size; fluid and relaxed fit with hidden internal ties',
    maximumGarmentLength: '165 cm',
    innerDress: 'Attached inner dress',
    stylingDetail:
      'Attached scarf detail with signature Bint Saeed gold-tone emblem pin; hidden internal tie construction',
    suitableFor: DEFAULT_SUITABLE_FOR,
    care: 'Professional dry clean recommended',
    madeIn: DEFAULT_MADE_IN,
    faq: [
      {
        question: 'Is the Mayfair Kaftan suitable for weddings?',
        answer:
          'Yes. The Mayfair Kaftan is designed for weddings, celebrations, Eid gatherings, dinners and special occasions.',
      },
      {
        question: 'Is the Mayfair Kaftan one size?',
        answer:
          'Yes. The Mayfair Kaftan is designed as a one-size silhouette with hidden internal ties that allow the shape to be adjusted.',
      },
      {
        question: 'Can the scarf be styled in different ways?',
        answer:
          'Yes. The attached scarf detail can be styled diagonally across the body using the signature Bint Saeed gold-tone emblem pin.',
      },
    ],
  },
  'nothing-hill-kaftan': {
    neckline:
      'Bateau neckline — refined silhouette with fabric draping effortlessly across the shoulders',
    fit: 'One size; fluid and relaxed fit with hidden internal ties',
    maximumGarmentLength: '125 cm',
    innerDress: 'Attached inner dress',
    stylingDetail:
      'Attached scarf detail with signature Bint Saeed gold-tone emblem pin; hidden internal tie construction',
    suitableFor: DEFAULT_SUITABLE_FOR,
    care: 'Professional dry clean recommended',
    madeIn: DEFAULT_MADE_IN,
    faq: [
      {
        question: 'Is the Nothing Hill Kaftan suitable for weddings?',
        answer:
          'Yes. The Nothing Hill Kaftan is designed for weddings, celebrations, Eid gatherings, dinners and special occasions.',
      },
      {
        question: 'Is the Nothing Hill Kaftan one size?',
        answer:
          'Yes. The Nothing Hill Kaftan is designed as a one-size silhouette with hidden internal ties that allow the shape to be adjusted.',
      },
      {
        question: 'Can the scarf be styled in different ways?',
        answer:
          'Yes. The attached scarf detail can be styled diagonally across the body using the signature Bint Saeed gold-tone emblem pin.',
      },
    ],
  },
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
  'kensington-abaya': {
    fit: 'Structured blazer abaya with tailored shoulder',
    stylingDetail: 'Handwoven trim inspired by the Emirati tradition of Khous weaving',
    suitableFor: DEFAULT_SUITABLE_FOR,
    madeIn: DEFAULT_MADE_IN,
  },
  'marylebone-abaya': {
    closure: 'Open front',
    stylingDetail: 'Wide sleeves for layering over dresses or sets',
    suitableFor: DEFAULT_SUITABLE_FOR,
    madeIn: DEFAULT_MADE_IN,
  },
  'belgravia-abaya': {
    stylingDetail:
      'Tonal embroidery and handwoven trim inspired by the Emirati tradition of Khous weaving',
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

export function getProductSchemaFacts(product: Product): ProductSchemaFacts {
  const slug = getProductSlug(product).toLowerCase()
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
): string {
  const slug = getProductSlug(product).toLowerCase()
  const craft = getHeritageCraft(slug)
  const type = productTypeLabel(product.category)
  const typeTitle = productTypeTitle(product.category)
  const color = colorName?.trim() || product.colors[0]?.name || ''
  const fabric = primaryFabricLabel(product.fabric)

  const terms = new Set<string>([
    product.name,
    'Bint Saeed',
    'Emirati brand',
    'Made in UAE',
    'Made in Abu Dhabi',
    `Luxury ${typeTitle}`,
    `Designer ${typeTitle}`,
    `Abu Dhabi ${typeTitle}`,
    `UAE ${typeTitle}`,
    `Wedding ${typeTitle}`,
    `Eid ${typeTitle}`,
    `Evening ${typeTitle}`,
    `Travel ${typeTitle}`,
    `Luxury ${type}`,
    `Designer ${type}`,
    `Abu Dhabi ${type}`,
    `UAE ${type}`,
    `Wedding ${type}`,
    `Eid ${type}`,
    `Evening ${type}`,
    `Travel ${type}`,
  ])

  if (color) {
    terms.add(`${color} ${typeTitle}`)
    terms.add(`${color} ${type}`)
    terms.add(`${color} Bint Saeed ${type}`)
  }

  if (fabric) {
    terms.add(`${fabric} ${typeTitle}`)
    terms.add(`${fabric} ${type}`)
  }

  if (productIsOneSizeOnly(product)) {
    terms.add(`One Size ${typeTitle}`)
    terms.add(`One Size ${type}`)
  }

  if (craft === 'khous') {
    terms.add('Khous weaving')
    terms.add('Handwoven trim')
    terms.add('Emirati heritage abaya')
  }
  if (craft === 'al-talli') {
    terms.add('Al Talli')
    terms.add('Emirati heritage embroidery')
  }
  if (product.category === 'Kaftans') {
    terms.add('Luxury kaftan Abu Dhabi')
    terms.add('Modest evening wear')
  }

  return [...terms].join(', ')
}

export function buildProductAdditionalProperties(
  product: Product,
  facts: ProductSchemaFacts,
): Array<Record<string, string>> {
  const props: Array<Record<string, string>> = [
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
    {
      '@type': 'PropertyValue',
      name: 'Made in',
      value: facts.madeIn ?? DEFAULT_MADE_IN,
    },
    {
      '@type': 'PropertyValue',
      name: 'Suitable For',
      value: facts.suitableFor ?? DEFAULT_SUITABLE_FOR,
    },
  ]

  const optional: Array<[string, string | undefined]> = [
    ['Neckline', facts.neckline],
    ['Fit', facts.fit],
    ['Maximum garment length', facts.maximumGarmentLength],
    ['Lining', facts.lining],
    ['Inner dress', facts.innerDress],
    ['Closure', facts.closure],
    ['Pockets', facts.pockets],
    ['Styling detail', facts.stylingDetail],
    ['Care', facts.care],
  ]

  for (const [name, value] of optional) {
    if (value?.trim()) {
      props.push({ '@type': 'PropertyValue', name, value: value.trim() })
    }
  }

  const craft = getHeritageCraft(getProductSlug(product))
  if (craft === 'khous') {
    props.push({
      '@type': 'PropertyValue',
      name: 'Heritage craft',
      value: 'Handwoven trim inspired by the Emirati tradition of Khous weaving',
    })
  }
  if (craft === 'al-talli') {
    props.push({
      '@type': 'PropertyValue',
      name: 'Heritage craft',
      value: 'Traditional Al Talli trim',
    })
  }

  return props
}

function buildDefaultFaq(product: Product): ProductFaqItem[] {
  const name = product.name
  const craft = getHeritageCraft(getProductSlug(product))
  const items: ProductFaqItem[] = [
    {
      question: `Where is the ${name} made?`,
      answer: `The ${name} is made in Abu Dhabi, United Arab Emirates by Bint Saeed.`,
    },
    {
      question: `Is the ${name} suitable for weddings and special occasions?`,
      answer: `Yes. The ${name} is designed for weddings, Eid, celebrations, dinners, travel, gatherings and everyday elegance.`,
    },
  ]

  if (productIsOneSizeOnly(product)) {
    items.push({
      question: `Is the ${name} one size?`,
      answer: `Yes. The ${name} is designed as a one-size silhouette.`,
    })
  }

  if (craft === 'khous') {
    items.push({
      question: `Does the ${name} feature Khous-inspired detailing?`,
      answer: `Yes. The ${name} features handwoven trim inspired by the Emirati tradition of Khous weaving, made in Abu Dhabi.`,
    })
  }

  if (craft === 'al-talli') {
    items.push({
      question: `Does the ${name} feature Al Talli trim?`,
      answer: `Yes. The ${name} features traditional Al Talli trim celebrating Emirati heritage craftsmanship.`,
    })
  }

  return items
}

export function getProductFaq(product: Product, customFaq?: ProductFaqItem[]): ProductFaqItem[] {
  const facts = getProductSchemaFacts(product)
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
  return buildDefaultFaq(product)
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
