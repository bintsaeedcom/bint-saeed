import type { Product } from '@/data/products'
import { getProductSlug } from '@/lib/products/links'
import { getPdpSizeOptions, categoryNeedsLengthCmDropdown } from '@/lib/shopProductOptions'

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

/** Split first fabric clause vs rest for composition placeholders (you will refine later). */
function fabricOuterInner(product: Product): { outer: string; innerHint: string } {
  const raw = (product.fabric ?? '').trim()
  const parts = raw.split(',').map((s) => s.trim()).filter(Boolean)
  if (parts.length <= 1) {
    return { outer: raw || '[Composition — outer / main — replace]', innerHint: '[Composition — lining / inner — replace]' }
  }
  return {
    outer: `${parts[0]} (extend with full fibre breakdown when confirmed).`,
    innerHint: parts.slice(1).join(', ') + ' — refine lining / secondary composition as needed.',
  }
}

/** Ready-to-wear & sets: same topic order as Royal V-Neck Kaftan PDP (15 + 4 bullets). */
function apparelPlaceholderContent(product: Product): ProductPdpContent {
  const { outer, innerHint } = fabricOuterInner(product)
  const colors = colorList(product)
  const sizeOptions = getPdpSizeOptions(product.category, product.sizes)
  const needsLength = categoryNeedsLengthCmDropdown(product.category)

  const descSeed = product.description.replace(/\s+/g, ' ').trim().slice(0, 200)
  return {
    productDetails: [
      `[Overview — replace] ${descSeed || product.name}`,
      `[Neckline / upper body — replace] Describe neckline, collar, or upper opening.`,
      `[Outer layer — replace] Hand-feel, weight, and how the outer behaves in motion.`,
      `[Signature detail — replace] Scarf, trim, embroidery zone, or defining feature.`,
      `[Sleeves — replace] Sleeve shape, length, and openings.`,
      `[Adjustment / styling 1 — replace] Ties, belts, closure, or styling option.`,
      `[Adjustment / styling 2 — replace] Secondary adjustment or alternative drape.`,
      `[Construction / layering — replace] Inner dress, lining strategy, or structure.`,
      `[Length — edit in catalog “Measurements” too] ${product.measurements}`,
      `[Colours offered — replace] Available: ${colors}.`,
      `[Composition — outer / main — replace] ${outer}`,
      `[Composition — lining / inner — replace] ${innerHint}`,
      `[Care — replace] Professional dry clean unless the atelier specifies otherwise.`,
      `[House detail — replace] Signature emblem, hardware, or finishing note.`,
      'Origin: Made in Abu Dhabi, United Arab Emirates.',
    ],
    fitAndSizeDetails: [
      `[Model reference — replace] Add model height and unit when campaign imagery is ready.`,
      `[Model wears — replace] Tie to sizes offered: ${sizeOptions.join(', ')}.`,
      `[Fit intent — replace] Describe intended ease (fluid, tailored, oversized, etc.).`,
      needsLength
        ? `[Lengths — replace] Chapter sizing and optional custom length note after checkout.`
        : `[Between sizes — replace] Guidance for choosing between sizes.`,
    ],
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
      `The Nothing Hill Kaftan speaks in a softer register — luminous ${adj} crepe chiffon shaped by a graceful bateau neckline that skims the shoulders and lets the fabric fall in an unhurried line from collarbone to hem. Layered over an attached inner dress, this ${adj} chiffon kaftan offers the ease of one garment with the quiet depth of considered Emirati luxury design.`,
      'From the left shoulder, an attached scarf detail falls in a gentle cascade. Worn diagonally with the signature Bint Saeed gold-tone emblem pin, or left open for a softer profile, it invites understated reinvention. Concealed internal ties let the silhouette shift between fluid movement and a gently defined shape — without ever feeling fixed to a single way of wearing.',
      'Designed to outlast seasons, the Nothing Hill Kaftan moves between daylight and evening with equal composure. Worn for a gathering at home, a terrace abroad, or a moment that asks for something beautiful without announcement, it settles into a woman’s rhythm rather than demanding attention. It is not tied to one city, one occasion, or one version of herself.',
      'It is chosen for the confidence of ease — the feeling that arrives when fabric, neckline, and craft ask nothing of her but to move naturally.',
    ],
    productDetails: [
      `${label} crepe chiffon kaftan`,
      'Fluid silhouette with layered construction',
      'Attached inner dress for ease of wear',
      'Graceful bateau neckline creating a refined silhouette while allowing the fabric to drape effortlessly across the shoulders',
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
      'One size',
      'Designed for a fluid and relaxed fit',
      'Hidden internal ties allow the silhouette to be adjusted',
      'Model height: 155 cm / 61 inches',
      'Maximum garment length: 125 cm',
    ],
    careDetails: [
      'Professional dry clean recommended',
      'If needed, gently hand wash separately in cold water',
      'Do not soak',
      'Do not bleach',
      'Do not tumble dry',
      'Lay flat or hang to dry away from direct sunlight',
      'Steam or iron on a low setting if required',
      'Store hanging to preserve the garment’s shape and drape',
    ],
    brandStory:
      'Designed and made to order in Abu Dhabi, UAE, the Nothing Hill Kaftan reflects Bint Saeed’s belief that luxury should feel personal, not performative. Rather than chasing seasonal novelty, each piece is created to remain in a woman’s wardrobe — carried across destinations, occasions, and the years she chooses to keep it close.',
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

  return apparelPlaceholderContent(product)
}
