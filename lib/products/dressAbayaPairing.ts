import type { Product } from '@/data/products'

export const COVENT_GARDEN_LONG_DRESS_SLUG = 'covent-garden-long-dress'
export const HAMPSTEAD_DRESS_SLUG = 'hampstead-dress'
export const COVENT_GARDEN_ABAYA_SLUG = 'covent-garden-abaya'
export const MARYLEBONE_ABAYA_SLUG = 'marylebone-abaya'
export const KENSINGTON_ABAYA_SLUG = 'kensington-abaya'

const DRESS_PAIRING_SLUGS = new Set([COVENT_GARDEN_LONG_DRESS_SLUG])
const ABAYA_PAIRING_SLUGS = new Set([
  COVENT_GARDEN_ABAYA_SLUG,
  MARYLEBONE_ABAYA_SLUG,
  KENSINGTON_ABAYA_SLUG,
])

/** Pairs well with — shown on Covent Garden Long Dress PDP (order preserved). */
const FROM_COVENT_GARDEN_DRESS = [
  COVENT_GARDEN_ABAYA_SLUG,
  MARYLEBONE_ABAYA_SLUG,
  KENSINGTON_ABAYA_SLUG,
] as const

/** Pairs well with — shown on Covent Garden / Marylebone / Kensington abaya PDPs. */
const FROM_ABAYA = [COVENT_GARDEN_LONG_DRESS_SLUG, HAMPSTEAD_DRESS_SLUG] as const

type ColorKey = 'burgundy' | 'black' | 'navy' | 'deep-black'

function normalizeColorKey(color?: string): ColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('burgundy') || c.includes('maroon')) return 'burgundy'
  if (c.includes('deep black')) return 'deep-black'
  if (c.includes('navy')) return 'navy'
  if (c.includes('black')) return 'black'
  return 'black'
}

function findColorByKey(product: Pick<Product, 'colors'>, key: ColorKey): string | undefined {
  for (const c of product.colors) {
    if (normalizeColorKey(c.name) === key) return c.name
  }
  if (key === 'deep-black') {
    return product.colors.find((c) => normalizeColorKey(c.name) === 'black')?.name
  }
  if (key === 'black') {
    return product.colors.find((c) => normalizeColorKey(c.name) === 'deep-black')?.name
  }
  return undefined
}

export function isDressAbayaPairingSlug(slug: string): boolean {
  const s = slug.toLowerCase()
  return DRESS_PAIRING_SLUGS.has(s) || ABAYA_PAIRING_SLUGS.has(s)
}

/** Related product slugs for manual “Pairs well with”, or null when not in this program. */
export function getDressAbayaPairingRelatedSlugs(slug: string): readonly string[] | null {
  const s = slug.toLowerCase()
  if (s === COVENT_GARDEN_LONG_DRESS_SLUG) return FROM_COVENT_GARDEN_DRESS
  if (ABAYA_PAIRING_SLUGS.has(s)) return FROM_ABAYA
  return null
}

/**
 * Resolve the colour query param for a paired PDP link.
 * Covent Garden Long Dress is Burgundy-only; abaya colours map to the closest dress colour available.
 */
export function resolveDressAbayaPairedColor(
  sourceSlug: string,
  target: Pick<Product, 'slug' | 'colors'>,
  sourceColor?: string,
): string {
  const source = sourceSlug.toLowerCase()
  const targetSlug = (target.slug ?? '').toLowerCase()
  const sourceKey = normalizeColorKey(sourceColor)

  if (targetSlug === COVENT_GARDEN_LONG_DRESS_SLUG) {
    const dressKey: ColorKey =
      sourceKey === 'burgundy'
        ? 'burgundy'
        : sourceKey === 'navy'
          ? 'navy'
          : sourceKey === 'deep-black' || sourceKey === 'black'
            ? 'black'
            : 'burgundy'
    return findColorByKey(target, dressKey) ?? target.colors[0]?.name ?? ''
  }

  if (source === COVENT_GARDEN_LONG_DRESS_SLUG) {
    if (targetSlug === COVENT_GARDEN_ABAYA_SLUG) {
      const abayaKey: ColorKey =
        sourceKey === 'burgundy' ? 'burgundy' : sourceKey === 'navy' ? 'navy' : 'black'
      return findColorByKey(target, abayaKey) ?? target.colors[0]?.name ?? ''
    }
    if (targetSlug === KENSINGTON_ABAYA_SLUG) {
      return findColorByKey(target, 'deep-black') ?? target.colors[0]?.name ?? ''
    }
    if (targetSlug === MARYLEBONE_ABAYA_SLUG) {
      if (sourceKey === 'navy') {
        return findColorByKey(target, 'navy') ?? target.colors[0]?.name ?? ''
      }
      return findColorByKey(target, 'black') ?? target.colors[0]?.name ?? ''
    }
  }

  const direct = findColorByKey(target, sourceKey)
  if (direct) return direct

  if (sourceKey === 'burgundy' && targetSlug === HAMPSTEAD_DRESS_SLUG) {
    return findColorByKey(target, 'burgundy') ?? target.colors[0]?.name ?? ''
  }

  return target.colors[0]?.name ?? ''
}

export { getProductHrefWithColor } from '@/lib/products/knightsbridgePairing'
