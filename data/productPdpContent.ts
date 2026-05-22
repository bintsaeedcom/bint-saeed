import type { Product } from '@/data/products'
import { getProductSlug } from '@/lib/products/links'
import { getPdpSizeOptions, categoryNeedsLengthCmDropdown } from '@/lib/shopProductOptions'

export type ProductPdpContent = {
  productDetails: string[]
  fitAndSizeDetails: string[]
}

/** Royal V-Neck Kaftan — finalized reference PDP (same structure all other products now mirror with placeholders). */
const V_NECK_CAFTAN_CONTENT: ProductPdpContent = {
  productDetails: [
    'Deep Maroon crepe chiffon kaftan with fluid, draped silhouette.',
    'V-neckline for a clean and elongated shape.',
    'Lightweight outer layer designed to move and flow with the body.',
    'Attached scarf detail draped from the left shoulder.',
    'Open-cut sleeves allowing subtle visibility of the arms.',
    'Can be adjusted using hidden internal ties to create a defined, cape-like shape.',
    'Internal ties can also be wrapped toward the back to softly define the waist.',
    'Layered construction with an attached inner dress for coverage.',
    'Length: 136 cm / 53.5 inches.',
    'Colour: Deep Maroon.',
    'Composition — Outer: Crepe Chiffon (100% Polyester).',
    'Composition — Inner: 100% Polyester.',
    'Care: Professional dry clean.',
    'Detail: Signature Bint Saeed gold emblem.',
    'Origin: Made in Abu Dhabi, United Arab Emirates.',
  ],
  fitAndSizeDetails: [
    'Model height: 155 cm / 61 inches.',
    'Model wears size XS.',
    'Designed for a fluid, relaxed fit.',
    'Adjustable silhouette through internal tie construction.',
  ],
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

/**
 * PDP copy source of truth.
 * — bs-002 / mayfair-kaftan slug keeps finalized reference copy.
 * — All other products use the same topic layout as that page; replace bracketed lines when ready.
 */
export const productPdpContentById: Partial<Record<string, ProductPdpContent>> = {
  'bs-002': V_NECK_CAFTAN_CONTENT,
}

/** Slug fallback when id differs (merged catalog, deep links, or API shape). */
export const productPdpContentBySlug: Partial<Record<string, ProductPdpContent>> = {
  'mayfair-kaftan': V_NECK_CAFTAN_CONTENT,
}

export function getProductPdpContent(product: Product): ProductPdpContent {
  const byId = productPdpContentById[product.id]
  if (byId) return byId

  const slug = getProductSlug(product).toLowerCase()
  const bySlug = productPdpContentBySlug[slug]
  if (bySlug) return bySlug

  if (product.category === 'Accessories') {
    return accessoryPlaceholderContent(product)
  }

  return apparelPlaceholderContent(product)
}
