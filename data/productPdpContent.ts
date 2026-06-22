import type { Product } from '@/data/products'
import { getProductSlug } from '@/lib/products/links'
import { getProductSchemaFacts } from '@/lib/products/productSchemaMeta'
import { getPdpSizeOptions, productIsOneSizeOnly } from '@/lib/shopProductOptions'

export type ProductPdpContent = {
  /** Rich intro above accordions; first paragraph stays visible, rest behind Read more. */
  introParagraphs?: string[]
  productDetails: string[]
  compositionDetails?: string[]
  careDetails?: string[]
  /** Closing brand story paragraph inside Product Details. */
  brandStory?: string
  fitAndSizeDetails: string[]
  /** Visible PDP FAQ and FAQPage schema source. */
  faq?: Array<{ question: string; answer: string }>
}

type MayfairColorKey = 'deep-maroon' | 'black' | 'peach'

const MAYFAIR_COLOR_COPY: Record<MayfairColorKey, { label: string; adj: string }> = {
  'deep-maroon': { label: 'Deep Maroon', adj: 'deep maroon' },
  black: { label: 'Black', adj: 'black' },
  peach: { label: 'Peach', adj: 'peach' },
}

function normalizeMayfairColor(color?: string): MayfairColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('black')) return 'black'
  if (c.includes('peach')) return 'peach'
  return 'deep-maroon'
}

function buildMayfairKaftanContent(color?: string): ProductPdpContent {
  const { label, adj } = MAYFAIR_COLOR_COPY[normalizeMayfairColor(color)]

  return {
    introParagraphs: [
      `The Mayfair Kaftan is designed for women who understand that elegance is never static. Cut from ${adj} crepe chiffon and layered over an attached inner dress, this ${adj} chiffon kaftan creates a fluid silhouette that drapes effortlessly from shoulder to hem.`,
      'A softly cascading scarf detail falls from the left shoulder and can be styled diagonally across the body using the signature Bint Saeed gold-tone emblem pin. Hidden internal ties allow the silhouette to be adjusted in multiple ways, creating either a flowing cape-like shape or a more defined profile. The result is a piece that transforms with the woman who wears it, adapting naturally to different occasions and moments.',
      'Lightweight, versatile, and designed to be worn for years rather than seasons, the Mayfair Kaftan moves effortlessly between occasions. Worn for a wedding, a celebration, a dinner abroad, or an ordinary day that deserves something extraordinary, it adapts naturally to the life of the woman who wears it. It is not defined by a destination, a city, or a moment. It becomes part of her story and travels wherever she does.',
      'It is a piece chosen not only for how it looks, but for how it makes a woman feel the moment she puts it on.',
    ],
    productDetails: [
      `${label} crepe chiffon kaftan`,
      'Fluid silhouette with layered construction',
      'Attached inner dress for ease of wear',
      'V-neckline',
      'Attached scarf detail draped from the left shoulder',
      'Signature Bint Saeed gold-tone emblem pin included',
      'Scarf can be styled diagonally across the body',
      'Hidden internal tie construction allowing multiple styling options',
      'Can be worn with a fluid silhouette or a softly defined shape',
      'Open-cut sleeves creating graceful movement',
      'Lightweight construction designed for comfort and elegance',
      `Colour: ${label}`,
      'Made in Abu Dhabi, UAE',
    ],
    compositionDetails: [
      'Outer: Crepe Chiffon (100% Polyester)',
      'Inner Dress: 100% Polyester',
    ],
    fitAndSizeDetails: [
      'One Size',
      'Maximum garment length: 165 cm / 65 inches',
      'Adjustable silhouette through hidden internal ties',
      'Model is 155 cm / 61 inches tall',
    ],
    careDetails: [
      'Professional dry clean recommended',
      'Gentle hand wash in cold water if required',
      'Do not bleach',
      'Do not tumble dry',
    ],
  }
}

function colorList(product: Product): string {
  return product.colors.map((c) => c.name).join(', ')
}

const STANDARD_CARE_DETAILS = [
  'Professional dry clean recommended',
  'Gentle hand wash in cold water if required',
  'Do not bleach',
  'Do not tumble dry',
] as const

function cmToInches(cm: number): number {
  return Math.round(cm / 2.54)
}

function parseMaxLength(measurements: string): { cm: number; inches: number } | null {
  const match =
    measurements.match(/maximum garment length[:\s]*(\d+)\s*cm/i) ??
    measurements.match(/length[:\s]*(\d+)\s*cm/i)
  if (!match) return null
  const cm = Number.parseInt(match[1]!, 10)
  return { cm, inches: cmToInches(cm) }
}

function fabricCompositionDetails(product: Product): string[] {
  const raw = (product.fabric ?? '').trim()
  if (!raw || /to be finalized|to be confirmed/i.test(raw)) return []
  const parts = raw.split(',').map((s) => s.trim()).filter(Boolean)
  if (parts.length === 1) return [parts[0]!]
  if (parts.length === 2) return [`Outer: ${parts[0]}`, parts[1]!.toLowerCase().includes('lining') ? parts[1]! : `Lining: ${parts[1]}`]
  return parts.map((part, index) => (index === 0 ? `Outer: ${part}` : part))
}

/** Split first fabric clause vs rest for accessory placeholders. */
function fabricOuterInner(product: Product): { outer: string; innerHint: string } {
  const raw = (product.fabric ?? '').trim()
  const parts = raw.split(',').map((s) => s.trim()).filter(Boolean)
  if (parts.length <= 1) {
    return { outer: raw || '[Composition — primary — replace]', innerHint: '[Composition — secondary — replace]' }
  }
  return {
    outer: parts[0]!,
    innerHint: parts.slice(1).join(', '),
  }
}

function resolveSelectedColorName(product: Product, color?: string): string {
  const trimmed = color?.trim()
  if (trimmed) {
    const match = product.colors.find((c) => c.name.toLowerCase() === trimmed.toLowerCase())
    if (match) return match.name
    return trimmed
  }
  return product.colors[0]?.name ?? ''
}

function buildProductDetailBullets(product: Product, colorName: string): string[] {
  const facts = getProductSchemaFacts(product)
  const bullets: string[] = []

  if (facts.fit) bullets.push(facts.fit)
  if (facts.neckline) {
    const shortNeckline = facts.neckline.split('—')[0]?.trim() ?? facts.neckline
    bullets.push(shortNeckline)
  }
  if (facts.stylingDetail) bullets.push(facts.stylingDetail)
  if (facts.closure) bullets.push(facts.closure)
  if (facts.lining) bullets.push(facts.lining)
  if (facts.innerDress) bullets.push(facts.innerDress)
  if (facts.pockets) bullets.push(facts.pockets)

  if (colorName) bullets.push(`Colour: ${colorName}`)
  else if (product.colors.length) bullets.push(`Available colours: ${colorList(product)}`)

  bullets.push('Made in Abu Dhabi, UAE')
  return bullets
}

function buildStructuredApparelIntro(product: Product, facts: ReturnType<typeof getProductSchemaFacts>): string[] {
  const desc = product.description.replace(/\s+/g, ' ').trim()
  const stylingLine = facts.stylingDetail
    ? `${facts.stylingDetail}. Hidden construction and finishing are considered throughout, so the piece reads as effortless from every angle.`
    : 'Refined construction and finishing are considered throughout, so the piece reads as effortless from every angle.'

  return [
    `${product.name} is designed for women who understand that elegance is never static. ${desc}`,
    stylingLine,
    `Lightweight, versatile, and designed to be worn for years rather than seasons, ${product.name} moves effortlessly between occasions. Worn for a wedding, a celebration, a dinner abroad, or an ordinary day that deserves something extraordinary, it adapts naturally to the life of the woman who wears it. It is not defined by a destination, a city, or a moment. It becomes part of her story and travels wherever she does.`,
    'It is a piece chosen not only for how it looks, but for how it makes a woman feel the moment she puts it on.',
  ]
}

function buildStructuredFitAndSizeDetails(product: Product): string[] {
  const sizeOptions = getPdpSizeOptions(product.category, product.sizes, getProductSlug(product))
  const maxLength = parseMaxLength(product.measurements)

  if (productIsOneSizeOnly(product)) {
    const lines = ['One Size']
    if (maxLength) lines.push(`Maximum garment length: ${maxLength.cm} cm / ${maxLength.inches} inches`)
    if (getProductSchemaFacts(product).fit?.toLowerCase().includes('internal ties')) {
      lines.push('Adjustable silhouette through hidden internal ties')
    }
    lines.push('Model is 155 cm / 61 inches tall')
    return lines
  }

  return [
    `Available sizes: ${sizeOptions.join(', ')}`,
    product.measurements.replace(/\s+/g, ' ').trim(),
    'Model is 155 cm / 61 inches tall',
  ]
}

/** Ready-to-wear & sets: same accordion structure as Mayfair Kaftan PDP. */
function buildStructuredApparelContent(product: Product, color?: string): ProductPdpContent {
  const facts = getProductSchemaFacts(product)
  const colorName = resolveSelectedColorName(product, color)
  const compositionDetails = fabricCompositionDetails(product)

  return {
    introParagraphs: buildStructuredApparelIntro(product, facts),
    productDetails: buildProductDetailBullets(product, colorName),
    ...(compositionDetails.length ? { compositionDetails } : {}),
    careDetails: [...STANDARD_CARE_DETAILS],
    fitAndSizeDetails: buildStructuredFitAndSizeDetails(product),
  }
}

/** Accessories on /shop/[id]: same accordion structure and bullet count as apparel PDPs. */
function accessoryPlaceholderContent(product: Product): ProductPdpContent {
  const colors = colorList(product)
  const { outer, innerHint } = fabricOuterInner(product)

  return {
    productDetails: [
      `[Overview — replace] ${product.description}`,
      `[Scale & presence — replace] How the piece sits on the body or in the hand.`,
      `[Finish & surface — replace] Polish, texture, brushing, or stone treatment.`,
      `[Wear context — replace] Day / evening / layering recommendation.`,
      `[Comfort & weight — replace] Wearability and balance.`,
      `[Closure / fastening — replace] Clasp, hook, magnet, or slip-on behaviour.`,
      `[Adjustability — replace] Extension chain, sizing, or fixed dimension.`,
      `[Pairing — replace] Styling note with abayas, kaftans, or evening pieces.`,
      `[Dimensions — also in catalog “Measurements”] ${product.measurements}`,
      `[Colours / tones offered — replace] ${colors}.`,
      `[Composition — primary — replace] ${outer}`,
      `[Composition — secondary / findings — replace] ${innerHint}`,
      `[Care — replace] Storage, polishing, and professional service when needed.`,
      `[House detail — replace] Marking, hallmark, or packaging note.`,
      'Origin: Made in Abu Dhabi, United Arab Emirates.',
    ],
    fitAndSizeDetails: [
      `[Display / try-on — replace] How to judge scale when ordering remotely.`,
      `[Size / scale — replace] One size or sizing notes: ${(product.sizes ?? []).join(', ')}.`,
      `[Fit / wear — replace] Intended contact points (lobe, wrist, etc.).`,
      `[Care when wearing — replace] Perfume, stacking, or removal notes.`,
    ],
  }
}

function isMayfairKaftan(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'mayfair-kaftan' || product.id === 'bs-002'
}

function isNothingHillKaftan(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'nothing-hill-kaftan' || product.id === 'cf-002'
}

type NothingHillColorKey = 'peach-pink' | 'black' | 'peach'

const NOTHING_HILL_COLOR_COPY: Record<NothingHillColorKey, { label: string; adj: string }> = {
  'peach-pink': { label: 'Peach Pink', adj: 'peach pink' },
  peach: { label: 'Peach', adj: 'peach' },
  black: { label: 'Black', adj: 'black' },
}

function normalizeNothingHillColor(color?: string): NothingHillColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('black')) return 'black'
  if (c.includes('peach pink') || c.includes('peach-pink')) return 'peach-pink'
  if (c.includes('peach')) return 'peach'
  return 'peach-pink'
}

function buildNothingHillKaftanContent(color?: string): ProductPdpContent {
  const { label, adj } = NOTHING_HILL_COLOR_COPY[normalizeNothingHillColor(color)]

  return {
    introParagraphs: [
      `The Nothing Hill Kaftan is designed for women who understand that elegance is never static. Cut from ${adj} crepe chiffon and layered over an attached inner dress, this ${adj} chiffon kaftan creates a fluid silhouette that drapes effortlessly from shoulder to hem.`,
      'A softly cascading scarf detail falls from the left shoulder and can be styled diagonally across the body using the signature Bint Saeed gold-tone emblem pin. Hidden internal ties allow the silhouette to be adjusted in multiple ways, creating either a flowing cape-like shape or a more defined profile. The result is a piece that transforms with the woman who wears it, adapting naturally to different occasions and moments.',
      'Lightweight, versatile, and designed to be worn for years rather than seasons, the Nothing Hill Kaftan moves effortlessly between occasions. Worn for a wedding, a celebration, a dinner abroad, or an ordinary day that deserves something extraordinary, it adapts naturally to the life of the woman who wears it. It is not defined by a destination, a city, or a moment. It becomes part of her story and travels wherever she does.',
      'It is a piece chosen not only for how it looks, but for how it makes a woman feel the moment she puts it on.',
    ],
    productDetails: [
      `${label} crepe chiffon kaftan`,
      'Fluid silhouette with layered construction',
      'Attached inner dress for ease of wear',
      'Graceful bateau neckline',
      'Attached scarf detail draped from the left shoulder',
      'Signature Bint Saeed gold-tone emblem pin included',
      'Scarf can be styled diagonally across the body',
      'Hidden internal tie construction allowing multiple styling options',
      'Can be worn with a fluid silhouette or a softly defined shape',
      'Open-cut sleeves creating graceful movement',
      'Lightweight construction designed for comfort and elegance',
      `Colour: ${label}`,
      'Made in Abu Dhabi, UAE',
    ],
    compositionDetails: [
      'Outer: Crepe Chiffon (100% Polyester)',
      'Inner Dress: 100% Polyester',
    ],
    fitAndSizeDetails: [
      'One Size',
      'Maximum garment length: 125 cm / 49 inches',
      'Adjustable silhouette through hidden internal ties',
      'Model is 155 cm / 61 inches tall',
    ],
    careDetails: [...STANDARD_CARE_DETAILS],
  }
}

/**
 * PDP copy source of truth.
 * — Mayfair & Nothing Hill Kaftans use finalized reference copy (colour-aware).
 * — All other products use the same topic layout as that page; replace bracketed lines when ready.
 */
export function getProductPdpContent(product: Product, opts?: { color?: string }): ProductPdpContent {
  const color = opts?.color?.trim() || product.colors[0]?.name

  if (isMayfairKaftan(product)) {
    return buildMayfairKaftanContent(color)
  }

  if (isNothingHillKaftan(product)) {
    return buildNothingHillKaftanContent(color)
  }

  if (product.category === 'Accessories') {
    return accessoryPlaceholderContent(product)
  }

  return buildStructuredApparelContent(product, color)
}
