import { buildKnightsbridgeDressPdpContent } from '@/data/knightsbridgeDressPdpContent'
import type { Product } from '@/data/products'
import { getProductPdpContentLocale } from '@/data/productPdpLocaleRegistry'
import type { AppLocale } from '@/lib/i18n/routing'
import { getLocalizedProductCatalogFields } from '@/lib/products/productCatalogCopyI18n'
import { pdpStructuredStrings } from '@/lib/products/productPdpStructuredI18n'
import { getProductSlug } from '@/lib/products/links'
import { getProductSchemaFacts } from '@/lib/products/productSchemaMeta'
import { buildVariantSku } from '@/lib/products/sku'
import { getBelgraviaPdpFaq } from '@/lib/products/belgraviaSchemaI18n'
import { getKensingtonPdpFaq } from '@/lib/products/kensingtonSchemaI18n'
import { getKnightsbridgePdpFaq } from '@/lib/products/knightsbridgeSchemaI18n'
import {
  knightsbridgePdpColorLabel,
  normalizeKnightsbridgeCatalogColor,
} from '@/lib/products/knightsbridgePairing'
import { applyAbayaPdpStandards } from '@/lib/products/abayaPdpStandards'
import { getPdpSizeOptions, productIsOneSizeOnly } from '@/lib/shopProductOptions'
import { COVENT_GARDEN_SIGNATURE_SET_FAQ_EN } from '@/data/coventGardenSignatureSetPdpFaq'
import {
  buildCoventGardenSignatureSetDetailGroups,
  COVENT_GARDEN_SIGNATURE_SET_CARE,
  COVENT_GARDEN_SIGNATURE_SET_COMPOSITION_GROUPS,
  COVENT_GARDEN_SIGNATURE_SET_FIT_AND_SIZE,
  COVENT_GARDEN_SIGNATURE_SET_ORIGIN,
} from '@/data/coventGardenSignatureSetPdpDetails'
import type { PdpDetailGroup, PdpIntroParagraph } from '@/lib/products/pdpIntroRich'
import { pdpIntroParagraphsToPlainText } from '@/lib/products/pdpIntroRich'
import { COVENT_GARDEN_SIGNATURE_SET_INTRO_EN } from '@/data/coventGardenSignatureSetPdpIntro'
import { COVENT_GARDEN_LONG_DRESS_INTRO_EN } from '@/data/coventGardenLongDressPdpIntro'
import { COVENT_GARDEN_ABAYA_INTRO_EN } from '@/data/coventGardenAbayaPdpIntro'
import {
  COVENT_GARDEN_ABAYA_CARE,
  COVENT_GARDEN_ABAYA_COMPOSITION,
  COVENT_GARDEN_ABAYA_FIT_AND_SIZE,
  COVENT_GARDEN_ABAYA_ORIGIN,
  COVENT_GARDEN_ABAYA_PRODUCT_DETAILS,
} from '@/data/coventGardenAbayaPdpDetails'
import {
  COVENT_GARDEN_LONG_DRESS_CARE,
  COVENT_GARDEN_LONG_DRESS_COMPOSITION,
  COVENT_GARDEN_LONG_DRESS_FIT_AND_SIZE,
  COVENT_GARDEN_LONG_DRESS_ORIGIN,
  COVENT_GARDEN_LONG_DRESS_PRODUCT_DETAILS,
} from '@/data/coventGardenLongDressPdpDetails'
import { getCoventGardenAbayaPdpFaq } from '@/lib/products/coventGardenAbayaFaqI18n'
import { getHouseCodesDetailGroup } from '@/lib/products/pdpHouseCodesGroupsI18n'
import { COVENT_GARDEN_LONG_DRESS_FAQ_EN } from '@/data/coventGardenLongDressPdpFaq'
import { buildHampsteadDressPdpContent } from '@/lib/products/hampsteadDressPdpI18n'
import { buildSohoSetPdpContent } from '@/lib/products/sohoSetPdpI18n'
import { buildHydeParkSetPdpContent } from '@/lib/products/hydeParkSetPdpI18n'

export type { PdpDetailGroup } from '@/lib/products/pdpIntroRich'

export type ProductPdpContent = {
  /** Rich intro above accordions; first paragraph stays visible, rest behind Read more. */
  introParagraphs?: string[]
  /** Optional structured intro with house-code links (rendered when present). */
  introParagraphParts?: PdpIntroParagraph[]
  /** Optional grouped product-detail bullets (e.g. jacket + dress on sets). */
  productDetailGroups?: PdpDetailGroup[]
  /** Optional grouped composition bullets. */
  compositionGroups?: PdpDetailGroup[]
  /** Optional origin line(s) shown under an Origin subtitle in Product Details. */
  originDetails?: string[]
  productDetails: string[]
  compositionDetails?: string[]
  careDetails?: string[]
  /** Closing brand story paragraph inside Product Details. */
  brandStory?: string
  fitAndSizeDetails: string[]
  /** Optional note above related / paired styles (e.g. Knightsbridge set). */
  stylePairingNote?: string
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

const NOTHING_HILL_STYLE_SKU = 'BS-KF-002'

const KAFTAN_COMPOSITION_DETAILS = [
  'Outer: Crepe Chiffon (100% Polyester)',
  'Inner Dress: 100% Polyester',
] as const

const NOTHING_HILL_COMPOSITION_DETAILS = [
  'Outer: Chiffon (100% Polyester)',
  'Inner Dress: 100% Polyester',
] as const

const KAFTAN_CARE_DETAILS = [
  'Professional dry clean recommended',
  'Gentle hand wash in cold water if required',
  'Do not bleach',
  'Do not tumble dry',
] as const

function kaftanFitAndSizeDetails(maxLengthCm: number, opts?: { includeAdjustableTies?: boolean }): string[] {
  const lines = [
    'One Size',
    `Maximum garment length: ${maxLengthCm} cm / ${cmToInches(maxLengthCm)} inches`,
  ]
  if (opts?.includeAdjustableTies !== false) {
    lines.push('Adjustable silhouette through hidden internal ties')
  }
  lines.push('Model is 155 cm / 61 inches tall')
  return lines
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
    compositionDetails: [...KAFTAN_COMPOSITION_DETAILS],
    fitAndSizeDetails: kaftanFitAndSizeDetails(165),
    careDetails: [...KAFTAN_CARE_DETAILS],
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

const ABAYA_CARE_DETAILS = ['Professional dry clean only'] as const

function careDetailsForProduct(product: Product): string[] {
  if (product.category === 'Abayas') return [...ABAYA_CARE_DETAILS]
  return [...STANDARD_CARE_DETAILS]
}

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

/** Ready-to-wear & sets: localized accordion structure when no hero locale pack exists. */
function buildStructuredApparelContentForLocale(
  product: Product,
  color: string | undefined,
  locale: AppLocale,
): ProductPdpContent {
  const strings = pdpStructuredStrings(locale)
  const facts = getProductSchemaFacts(product, locale)
  const catalog = getLocalizedProductCatalogFields(product, locale)
  const colorName = resolveSelectedColorName(product, color)
  const compositionDetails = fabricCompositionDetails({
    ...product,
    fabric: catalog.fabric || product.fabric,
  })

  const stylingLine = facts.stylingDetail
    ? `${facts.stylingDetail}. ${strings.stylingSuffix}`
    : strings.stylingSuffix

  const introParagraphs = [
    strings.introLead(product.name, catalog.description.replace(/\s+/g, ' ').trim()),
    stylingLine,
    strings.introOccasions(product.name),
    strings.introClosing,
  ]

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
  if (colorName) bullets.push(`${strings.colour}: ${colorName}`)
  else if (product.colors.length) bullets.push(`${strings.availableColours}: ${colorList(product)}`)
  bullets.push(strings.madeIn)

  const sizeOptions = getPdpSizeOptions(product.category, product.sizes, getProductSlug(product))
  const maxLength = parseMaxLength(catalog.measurements || product.measurements)
  let fitAndSizeDetails: string[]
  if (productIsOneSizeOnly(product)) {
    fitAndSizeDetails = [strings.oneSize]
    if (maxLength) fitAndSizeDetails.push(strings.maxLength(maxLength.cm, maxLength.inches))
    if (facts.fit?.toLowerCase().includes('internal ties') || facts.fit?.toLowerCase().includes('tali')) {
      fitAndSizeDetails.push(strings.adjustableTies)
    }
    fitAndSizeDetails.push(strings.modelHeight)
  } else {
    fitAndSizeDetails = [
      `${strings.availableSizes}: ${sizeOptions.join(', ')}`,
      (catalog.measurements || product.measurements).replace(/\s+/g, ' ').trim(),
      strings.modelHeight,
    ]
  }

  return {
    introParagraphs,
    productDetails: bullets,
    ...(compositionDetails.length ? { compositionDetails } : {}),
    careDetails: careDetailsForProduct(product),
    fitAndSizeDetails,
  }
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
    careDetails: careDetailsForProduct(product),
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

function isKensingtonAbaya(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'kensington-abaya' || product.id === 'ab-004'
}

function isBelgraviaAbaya(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'belgravia-abaya' || product.id === 'ab-006'
}

function isKnightsbridgeAbayaJacket(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'knightsbridge-abaya-jacket' || product.id === 'bs-001'
}

function isKnightsbridgeDress(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'knightsbridge-dress' || product.id === 'bs-003'
}

function isCoventGardenSignatureSet(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'covent-garden-signature-set' || product.id === 'bs-005'
}

function isCoventGardenAbaya(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'covent-garden-abaya' || product.id === 'ab-002'
}

function isCoventGardenLongDress(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'covent-garden-long-dress' || product.id === 'dr-009'
}

function isHampsteadDress(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'hampstead-dress' || product.id === 'bs-004'
}

function isSohoSet(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'soho-set' || product.id === 'st-003'
}

function isHydeParkSet(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'hyde-park-set' || product.id === 'ab-008'
}

function buildSohoSetContent(
  product: Product,
  color: string | undefined,
  locale: AppLocale,
): ProductPdpContent {
  return buildSohoSetPdpContent(locale)
}

function buildHydeParkSetContent(
  _product: Product,
  _color: string | undefined,
  locale: AppLocale,
): ProductPdpContent {
  return buildHydeParkSetPdpContent(locale)
}

function buildCoventGardenAbayaContent(product: Product): ProductPdpContent {
  const introParagraphParts = COVENT_GARDEN_ABAYA_INTRO_EN

  return {
    introParagraphParts,
    introParagraphs: pdpIntroParagraphsToPlainText(introParagraphParts),
    productDetails: [...COVENT_GARDEN_ABAYA_PRODUCT_DETAILS],
    productDetailGroups: [getHouseCodesDetailGroup('knotted-line-al-talli', 'en')],
    compositionDetails: [...COVENT_GARDEN_ABAYA_COMPOSITION],
    careDetails: [...COVENT_GARDEN_ABAYA_CARE],
    fitAndSizeDetails: [...COVENT_GARDEN_ABAYA_FIT_AND_SIZE],
    originDetails: [...COVENT_GARDEN_ABAYA_ORIGIN],
    faq: getCoventGardenAbayaPdpFaq('en'),
  }
}

function buildCoventGardenLongDressContent(product: Product): ProductPdpContent {
  const introParagraphParts = COVENT_GARDEN_LONG_DRESS_INTRO_EN

  return {
    introParagraphParts,
    introParagraphs: pdpIntroParagraphsToPlainText(introParagraphParts),
    productDetails: [...COVENT_GARDEN_LONG_DRESS_PRODUCT_DETAILS],
    compositionDetails: [...COVENT_GARDEN_LONG_DRESS_COMPOSITION],
    careDetails: [...COVENT_GARDEN_LONG_DRESS_CARE],
    fitAndSizeDetails: [...COVENT_GARDEN_LONG_DRESS_FIT_AND_SIZE],
    originDetails: [...COVENT_GARDEN_LONG_DRESS_ORIGIN],
    faq: COVENT_GARDEN_LONG_DRESS_FAQ_EN,
  }
}

function buildCoventGardenSignatureSetContent(product: Product, color?: string): ProductPdpContent {
  const colorName = resolveSelectedColorName(product, color)
  const introParagraphParts = COVENT_GARDEN_SIGNATURE_SET_INTRO_EN

  return {
    introParagraphParts,
    introParagraphs: pdpIntroParagraphsToPlainText(introParagraphParts),
    productDetails: [],
    productDetailGroups: [
      ...buildCoventGardenSignatureSetDetailGroups(colorName),
      getHouseCodesDetailGroup('knotted-line-only', 'en'),
    ],
    compositionGroups: COVENT_GARDEN_SIGNATURE_SET_COMPOSITION_GROUPS.map((group) => ({
      title: group.title,
      items: [...group.items],
    })),
    careDetails: [...COVENT_GARDEN_SIGNATURE_SET_CARE],
    fitAndSizeDetails: [...COVENT_GARDEN_SIGNATURE_SET_FIT_AND_SIZE],
    originDetails: [...COVENT_GARDEN_SIGNATURE_SET_ORIGIN],
    faq: COVENT_GARDEN_SIGNATURE_SET_FAQ_EN,
  }
}

type BelgraviaColorKey = 'deep-black' | 'navy-blue'

const BELGRAVIA_COLOR_COPY: Record<BelgraviaColorKey, { label: string }> = {
  'deep-black': { label: 'Deep Black' },
  'navy-blue': { label: 'Navy Blue' },
}

function normalizeBelgraviaColor(color?: string): BelgraviaColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('navy')) return 'navy-blue'
  if (c.includes('black')) return 'deep-black'
  return 'deep-black'
}

const KENSINGTON_COMPOSITION_DETAILS = [
  'Outer: 80% Polyester, 20% Viscose',
  'Lining: 70% Polyester, 30% Viscose',
] as const

function buildKensingtonAbayaContent(locale: AppLocale = 'en'): ProductPdpContent {
  return {
    introParagraphs: [
      'The Kensington Abaya was designed for women who appreciate confidence expressed through simplicity. Crafted in deep black with a clean, elongated silhouette, it creates presence through structure, movement, and proportion rather than ornamentation.',
      'Inspired by the confidence and structure of tailored outerwear, the Kensington Abaya combines the ease of traditional dressing with the polished appearance of a well-cut blazer. Clean lines through the shoulders and body create a silhouette that feels composed, elegant, and effortless to wear.',
      'Textured trims across the chest and cuffs draw inspiration from Al Khous, the traditional Emirati art of palm frond weaving passed down through generations. Interpreted through a subtle black glitter organza weave, the detailing introduces depth and texture while remaining understated.',
      'Designed to layer effortlessly over dresses, tailoring, occasionwear, or everyday attire, it transitions naturally between daily life, business meetings, dinners, gatherings, travel, and special occasions. Its timeless aesthetic allows it to move across countries, seasons, and chapters of life while remaining connected to the craftsmanship and elegance that inspired its creation.',
      'Fully lined with a soft crepe lining and finished with two hidden side pockets, the Kensington Abaya balances practicality with refinement while maintaining a clean, elegant silhouette. Like all Bint Saeed abayas, it can be personalised with a hidden interior label featuring a name, date, or meaningful message, creating a more personal connection to the piece and making it especially meaningful for gifting.',
      'Elegant, versatile, and created to be worn for years rather than seasons, the Kensington Abaya is designed to accompany the woman who wears it wherever life takes her.',
    ],
    productDetails: [
      'Deep Black',
      'Round neckline',
      'Light shoulder padding',
      'Front snap-button closure',
      'Two hidden side pockets',
      'Soft crepe lining',
      'Optional hidden interior personalisation label',
      'Length: 138 cm / 54.5 inches',
      'Model height: 155 cm / 61 inches',
      'Model wears size XS',
      'Made in Abu Dhabi, United Arab Emirates',
    ],
    compositionDetails: [...KENSINGTON_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      'Available sizes: XS, S, M, L, XL',
      'Designed for a structured yet fluid fit',
      'Length: 138 cm / 54.5 inches',
      'Model height: 155 cm / 61 inches',
      'Model wears size XS',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    productDetailGroups: [getHouseCodesDetailGroup('al-khous', locale)],
    faq: getKensingtonPdpFaq(locale),
  }
}

const KNIGHTSBRIDGE_ABAYA_CARE = ['Professional dry clean only'] as const

function isKnightsbridgeNavyColor(color?: string): boolean {
  return (color ?? '').toLowerCase().includes('navy')
}

function buildKnightsbridgeAbayaJacketContent(color?: string, locale: AppLocale = 'en'): ProductPdpContent {
  const isNavy = isKnightsbridgeNavyColor(color)
  const catalogColor = isNavy ? 'Navy Grey' : 'Dark Brown'
  const colorLabel = knightsbridgePdpColorLabel(catalogColor, locale)

  return {
    introParagraphs: [
      'The women whose style feels effortless are often the ones least interested in following trends. Unafraid to be themselves, they are usually the women setting them.',
      'The Khous Jacket Abaya was created for women who move confidently through life on their own terms. Sitting somewhere between an abaya and a jacket, it combines the ease of traditional dressing with the confidence of contemporary outerwear.',
      'Cut in a relaxed silhouette and available in Dark Brown and Navy Gray, it layers effortlessly over dresses, tailoring, knitwear, and everyday essentials. Worn with sneakers or heels, it adapts naturally to changing environments, making it an ideal companion for travel, daily wear, and life between cities.',
      'Textured detailing across the chest pockets and cuffs draws inspiration from Al Khous, the traditional Emirati art of palm frond weaving passed down through generations. Reinterpreted through contemporary design, these details introduce depth, structure, and character while maintaining a refined appearance.',
      'Distinctive shoulder detailing lends the silhouette a subtle military influence, creating a confident presence balanced by comfort and ease of movement. Four functional pockets, including two chest pockets and two hidden side pockets, reinforce its practicality for everyday life.',
      'Finished with Bint Saeed’s signature gold-tone Knotted Lines of Lineage buttons, the design carries one of the house’s enduring codes. Inspired by the connections that tie generations together, these details serve as a reminder that the most meaningful things in life are often the ones we carry forward.',
      'Created in Abu Dhabi, the Khous Jacket Abaya reflects Bint Saeed’s commitment to carrying elements of Emirati heritage into a contemporary wardrobe. Whether worn for a coffee in London, a day of travel, a meeting in Dubai, or everyday life in the Gulf, it offers a distinctive silhouette for women who understand that style is not reserved for special occasions.',
      'Comfortable, versatile, and designed to be worn often, the Khous Jacket Abaya celebrates the idea that true elegance is revealed not only in important moments, but in the way a woman chooses to present herself every day.',
    ],
    productDetails: [
      `${colorLabel} jacket abaya with a relaxed silhouette`,
      'Pointed collar',
      'Concealed front button closure',
      'Two chest pockets',
      'Two hidden side pockets',
      'Shoulder tab detailing',
      'Long sleeves with buttoned cuffs',
      'Attached inner dress',
      'Optional hidden interior personalisation label with a name, date, or meaningful message',
      `Colour: ${colorLabel} with natural Khous contrast detailing`,
      'Length: 143 cm / 56.3 inches',
      'Made in Abu Dhabi, United Arab Emirates',
    ],
    compositionDetails: [
      'Outer: 60% Polyester, 40% Cotton',
      'Inner Dress: 100% Polyester',
    ],
    fitAndSizeDetails: [
      'Model height: 160 cm / 63 inches',
      'Model wears size XS',
      'Designed for a relaxed fit',
      'Available sizes: XS, S, M, L, XL, XXL',
    ],
    careDetails: [...KNIGHTSBRIDGE_ABAYA_CARE],
    productDetailGroups: [getHouseCodesDetailGroup('knotted-line-al-khous', locale)],
    faq: getKnightsbridgePdpFaq(locale),
  }
}

function buildKnightsbridgeDressContent(
  product: Product,
  color?: string,
  locale: AppLocale = 'en',
): ProductPdpContent {
  return buildKnightsbridgeDressPdpContent(color, locale)
}

const BELGRAVIA_COMPOSITION_DETAILS = [
  'Outer: Light crepe blend (80% polyester, 20% viscose)',
  'Lining composition: (70% polyester, 30% viscose)',
] as const

function buildBelgraviaAbayaContent(color?: string, locale: AppLocale = 'en'): ProductPdpContent {
  const { label } = BELGRAVIA_COLOR_COPY[normalizeBelgraviaColor(color)]

  return {
    introParagraphs: [
      'The Belgravia Abaya draws inspiration from the Bisht, one of the most recognisable garments of the Arabian Peninsula, reinterpreted through a contemporary silhouette designed for modern life.',
      'Available in Deep Black and Navy Blue, the abaya is distinguished by a handwoven trim inspired by Al Khous, the traditional Emirati art of palm frond weaving passed down through generations. The pattern references the geometry of woven palm fronds, introducing texture and cultural craftsmanship to an elegant, understated silhouette.',
      'Created in Abu Dhabi, the Belgravia Abaya reflects Bint Saeed’s commitment to carrying traditional craftsmanship forward through contemporary design. Its relaxed Bisht-inspired cut creates graceful movement while maintaining a refined structure, while hidden pockets and a fully lined construction ensure comfort and ease of wear.',
      'Designed to move effortlessly between occasions, countries, and lifestyles, the Belgravia Abaya can be worn for a wedding in Riyadh, a dinner in London, an event in Paris, or everyday life in the Gulf. Timeless rather than trend-driven, it is created for women who value elegance, craftsmanship, and pieces that remain relevant wherever they are worn.',
      'Like all Bint Saeed abayas, the Belgravia Abaya is made to order and can be personalised with a name, date, or meaningful message inside the hidden pocket.',
    ],
    productDetails: [
      'Bisht-inspired abaya silhouette',
      'Available in Deep Black and Navy Blue',
      'Open-front construction',
      'Optional concealed snap-button closure available upon request',
      'Fully lined for comfort and a refined finish',
      'Hidden side pockets',
      'Personalisation available inside the hidden pocket',
      'Relaxed flowing silhouette designed for ease of movement',
      'Lightweight crepe blend outer fabric',
      'Contemporary design inspired by Emirati and GCC traditions and crafts',
      'Suitable for everyday elegance, gatherings, weddings, and special occasions',
      'Model height: 155 cm / 61 inches',
      'Length: 138 cm / 54.5 inches',
      `Colour: ${label}`,
      'Made in Abu Dhabi, United Arab Emirates',
    ],
    compositionDetails: [...BELGRAVIA_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      'Available sizes: XS, S, M, L, XL, XXL',
      'Length: 138 cm / 54.5 inches',
      'Model height: 155 cm / 61 inches',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    productDetailGroups: [getHouseCodesDetailGroup('al-khous', locale)],
    faq: getBelgraviaPdpFaq(locale),
  }
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
      `The Nothing Hill Kaftan is designed for women who appreciate elegance in its most effortless form. Crafted from layers of soft ${adj} chiffon and finished with a refined bateau neckline, it creates a flowing silhouette that moves gracefully with every step.`,
      'Lightweight and fluid, the chiffon drapes naturally from shoulder to hem, creating a sense of movement while maintaining a beautifully balanced shape. A signature Bint Saeed gold-tone emblem sits discreetly at the front, offering a subtle expression of the house identity.',
      `The soft ${adj} tone brings warmth and femininity to the design, making it equally suited to celebrations, intimate gatherings, destination events, and occasions that call for understated elegance. The airy construction allows the silhouette to float around the body, creating a presence that feels both refined and effortless.`,
      'Designed to be worn season after season, the Nothing Hill Kaftan is not defined by trends or occasions alone. It is a piece chosen for the ease it brings to dressing beautifully, whether worn for a special event, an evening gathering, or a moment worth remembering.',
      'Light, graceful, and timeless, it becomes part of the woman’s story, accompanying her wherever life takes her.',
    ],
    productDetails: [
      `Soft ${adj} chiffon kaftan`,
      'Flowing layered silhouette with graceful movement',
      'Attached inner dress for ease of wear',
      'Elegant bateau neckline',
      'Signature Bint Saeed gold-tone emblem included',
      'Soft draped chiffon panels creating fluid movement',
      'Lightweight construction designed for comfort and elegance',
      'Designed to move naturally with the wearer',
      'Suitable for celebrations, gatherings, destination events, and special occasions',
      'Airy silhouette with a soft feminine drape',
      `Colour: ${label}`,
      'Made in Abu Dhabi, UAE',
      `Product code: ${buildVariantSku(NOTHING_HILL_STYLE_SKU, label)}`,
    ],
    compositionDetails: [...NOTHING_HILL_COMPOSITION_DETAILS],
    fitAndSizeDetails: kaftanFitAndSizeDetails(165, { includeAdjustableTies: false }),
    careDetails: [...KAFTAN_CARE_DETAILS],
  }
}

/**
 * PDP copy source of truth.
 * — Mayfair & Nothing Hill Kaftans use finalized reference copy (colour-aware).
 * — Belgravia Abaya uses finalized reference copy (colour-aware).
 * — Hero abayas (Belgravia, Kensington, Knightsbridge Abaya Jacket): add your feature bullets in the builders below;
 *   `applyAbayaPdpStandards` always appends “Custom length available upon request” — do not remove.
 * — All other products use the same topic layout as that page; replace bracketed lines when ready.
 */
export function getProductPdpContent(
  product: Product,
  opts?: { color?: string; locale?: AppLocale },
): ProductPdpContent {
  const color = opts?.color?.trim() || product.colors[0]?.name
  const locale = opts?.locale ?? 'en'

  if (locale !== 'en') {
    if (isHampsteadDress(product)) {
      return applyAbayaPdpStandards(product, buildHampsteadDressPdpContent(locale), locale)
    }
    if (isSohoSet(product)) {
      return applyAbayaPdpStandards(product, buildSohoSetContent(product, color, locale), locale)
    }
    if (isHydeParkSet(product)) {
      return applyAbayaPdpStandards(product, buildHydeParkSetContent(product, color, locale), locale)
    }
    const localized = getProductPdpContentLocale(product, color, locale)
    const content =
      localized ??
      (product.category === 'Accessories'
        ? accessoryPlaceholderContent(product)
        : buildStructuredApparelContentForLocale(product, color, locale))
    return applyAbayaPdpStandards(product, content, locale)
  }

  let content: ProductPdpContent

  if (isMayfairKaftan(product)) {
    content = buildMayfairKaftanContent(color)
  } else if (isNothingHillKaftan(product)) {
    content = buildNothingHillKaftanContent(color)
  } else if (isBelgraviaAbaya(product)) {
    content = buildBelgraviaAbayaContent(color, locale)
  } else if (isKensingtonAbaya(product)) {
    content = buildKensingtonAbayaContent(locale)
  } else if (isKnightsbridgeAbayaJacket(product)) {
    content = buildKnightsbridgeAbayaJacketContent(color, locale)
  } else if (isKnightsbridgeDress(product)) {
    content = buildKnightsbridgeDressContent(product, color, locale)
  } else if (isCoventGardenAbaya(product)) {
    content = buildCoventGardenAbayaContent(product)
  } else if (isCoventGardenLongDress(product)) {
    content = buildCoventGardenLongDressContent(product)
  } else if (isHampsteadDress(product)) {
    content = buildHampsteadDressPdpContent('en')
  } else if (isSohoSet(product)) {
    content = buildSohoSetContent(product, color, locale)
  } else if (isHydeParkSet(product)) {
    content = buildHydeParkSetContent(product, color, locale)
  } else if (isCoventGardenSignatureSet(product)) {
    content = buildCoventGardenSignatureSetContent(product, color)
  } else if (product.category === 'Accessories') {
    content = accessoryPlaceholderContent(product)
  } else {
    content = buildStructuredApparelContent(product, color)
  }

  return applyAbayaPdpStandards(product, content, locale)
}
