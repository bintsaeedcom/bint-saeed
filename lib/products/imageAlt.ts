import type { Product } from '@/data/products'
import { getProductSlug } from '@/lib/products/links'
import {
  BRAND_GEO_PHRASE,
  getHeritageAltPhrase,
  getHeritageCraft,
} from '@/lib/products/heritageSeo'

export { BRAND_GEO_PHRASE }

/** @deprecated Use BRAND_GEO_PHRASE */
export const BRAND_ALT_PHRASE = BRAND_GEO_PHRASE

const FALLBACK_ANGLES = ['front', 'side', 'back', 'three-quarter'] as const
const VIEW_SUFFIXES = ['three-quarter', 'cuff-close-up', 'close-up', 'lifestyle-2', 'lifestyle-1', 'lifestyle', 'front', 'back', 'side', 'detail', 'extra'] as const

/** Per-file alt overrides for catalogue shots where filename inference is too generic. */
const PRODUCT_IMAGE_ALT_OVERRIDES: Record<string, string> = {
  'bint-saeed-mayfair-kaftan-marroon-front.webp':
    "Mayfair Kaftan in Deep Maroon crepe chiffon, front view. Luxury women's occasion kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, featuring a V-neckline, flowing silhouette, attached scarf detail and signature gold-tone emblem.",
  'bint-saeed-mayfair-kaftan-marroon-side.webp':
    'Mayfair Kaftan in Deep Maroon crepe chiffon, side view. Designer chiffon kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, showcasing fluid draping, layered construction and elegant occasionwear styling.',
  'bint-saeed-mayfair-kaftan-marroon-back.webp':
    'Mayfair Kaftan in Deep Maroon crepe chiffon, back view. Contemporary luxury kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, highlighting graceful movement, lightweight layered chiffon and refined eveningwear design.',
  'bint-saeed-nothing-hill-kaftan-peach-pink-front.webp':
    "Nothing Hill Kaftan in Peach Pink chiffon, front view. Luxury women's occasion kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, featuring a bateau neckline, flowing silhouette and signature gold-tone emblem.",
  'bint-saeed-nothing-hill-kaftan-peach-pink-side.webp':
    'Nothing Hill Kaftan in Peach Pink chiffon, side view. Designer chiffon kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, showcasing fluid draping, layered construction and graceful movement.',
  'bint-saeed-nothing-hill-kaftan-peach-pink-back.webp':
    'Nothing Hill Kaftan in Peach Pink chiffon, back view. Contemporary luxury kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, highlighting its flowing silhouette, lightweight layered chiffon and refined occasionwear design.',
  'bint-saeed-nothing-hill-kaftan-gold-tone-signature-emblem-close-up.webp':
    'Nothing Hill Kaftan in Peach Pink chiffon, close-up view. Designer chiffon kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, showcasing soft peach pink chiffon fabric, delicate layered texture and the signature gold-tone Bint Saeed emblem pin.',
}

/** Pixel dimensions for schema ImageObject enrichment (keyed by filename). */
export const PRODUCT_IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  'bint-saeed-nothing-hill-kaftan-gold-tone-signature-emblem-close-up.webp': {
    width: 2160,
    height: 2700,
  },
}

const KNOWN_COLOR_SLUGS = [
  'dark-marroon',
  'marroon',
  'peach-pink',
  'navy-grey',
  'navy-blue',
  'dark-brown',
  'light-pink',
  'burgundy',
  'magenta',
  'black',
] as const

const COLOR_SLUG_LABELS: Record<string, string> = {
  'navy-grey': 'Navy Grey',
  'navy-blue': 'Navy Blue',
  'dark-brown': 'Dark Brown',
  'dark-marroon': 'Dark Maroon',
  marroon: 'Dark Maroon',
  'peach-pink': 'Peach Pink',
  'light-pink': 'Light Pink',
  burgundy: 'Burgundy',
  magenta: 'Magenta',
  black: 'Black',
}

function colorNameFromSlug(slug: string): string {
  return COLOR_SLUG_LABELS[slug] ?? slugToColorName(slug)
}

function slugToColorName(slug: string): string {
  return slug.split('-').map(titleCaseToken).join(' ')
}

function titleCaseToken(token: string): string {
  return token.charAt(0).toUpperCase() + token.slice(1)
}

function productTypeFromCategory(category: string): string {
  if (category === 'Abayas') return 'abaya'
  if (category === 'Kaftans') return 'kaftan'
  if (category === 'Dresses') return 'dress'
  if (category === 'Sets') return 'set'
  return 'piece'
}

function inferAngleFromSrc(src: string, index = 0): string {
  const p = src.toLowerCase()
  if (p.includes('three-quarter') || p.includes('threequarter') || p.includes('3q')) return 'three-quarter'
  if (p.includes('lifestyle-2')) return 'lifestyle 2'
  if (p.includes('lifestyle-1') || p.includes('lifestyle')) return 'lifestyle'
  if (p.includes('cuff-close-up')) return 'cuff close-up'
  if (p.includes('close-up') || p.includes('closeup')) return 'close-up'
  if (p.includes('front') || /[-_\s]f\./.test(p)) return 'front'
  if (p.includes('back') || /[-_\s]b\./.test(p)) return 'back'
  if (p.includes('side') || /[-_\s]s\./.test(p)) return 'side'
  if (p.includes('detail') || /[-_\s]e\./.test(p)) return 'detail'
  if (p.includes('extra') || /[-_\s]v\./.test(p)) return 'extra'
  return FALLBACK_ANGLES[index % FALLBACK_ANGLES.length] ?? 'front'
}

/** Reads colour token from `bint-saeed-...-{colour}-{angle}.webp` filenames. */
function inferColorFromSrc(src: string): string | null {
  const base = src.split('/').pop()?.toLowerCase() ?? ''
  const stem = base.replace(/\.[^.]+$/, '').replace(/\.+$/, '')
  const withoutBrand = stem.replace(/^bint-saeed-/, '')

  for (const colorSlug of KNOWN_COLOR_SLUGS) {
    if (withoutBrand.includes(`-${colorSlug}-`) || withoutBrand.endsWith(`-${colorSlug}`)) {
      return colorNameFromSlug(colorSlug)
    }
  }

  for (const angle of VIEW_SUFFIXES) {
    const suffix = `-${angle}`
    if (!stem.endsWith(suffix)) continue
    const beforeAngle = stem.slice(0, -suffix.length).replace(/^bint-saeed-/, '')
    const tail = beforeAngle.split('-').pop()
    return tail ? titleCaseToken(tail) : null
  }

  return null
}

/** Ensures every alt string ends with the brand + geo phrase exactly once. */
export function withBrandAlt(alt: string): string {
  const trimmed = alt.trim()
  if (!trimmed) return BRAND_GEO_PHRASE
  if (trimmed.toLowerCase().includes(BRAND_GEO_PHRASE.toLowerCase())) return trimmed
  const base = trimmed.replace(/\.+$/, '')
  return `${base}. ${BRAND_GEO_PHRASE}.`
}

export function getProductImageAlt(
  product: Pick<Product, 'name' | 'category' | 'colors' | 'slug'>,
  imageSrc: string,
  opts?: { color?: string; index?: number },
): string {
  const filename = imageSrc.split('/').pop() ?? ''
  const override = PRODUCT_IMAGE_ALT_OVERRIDES[filename]
  if (override) return withBrandAlt(override)

  const color =
    opts?.color?.trim() ||
    inferColorFromSrc(imageSrc) ||
    product.colors[0]?.name ||
    'Black'
  const type = productTypeFromCategory(product.category)
  const angle = inferAngleFromSrc(imageSrc, opts?.index ?? 0)
  const slug = getProductSlug(product)
  const craft = getHeritageCraft(slug)

  const subject = `${product.name} luxury ${type} in ${color}, ${angle} view`
  const heritage = craft
    ? `, ${getHeritageAltPhrase(craft, angle)}`
    : product.category === 'Kaftans'
      ? ', crepe chiffon with scarf detail, made in Abu Dhabi'
      : ', made in Abu Dhabi'

  return withBrandAlt(`${subject}${heritage}`)
}

/** Cart / checkout thumbnails — full product alt when catalog match exists. */
export function getCartLineImageAlt(
  item: { id: string; name: string; image: string; color: string },
  catalogProduct: Pick<Product, 'name' | 'category' | 'colors' | 'slug'> | null | undefined,
): string {
  if (catalogProduct) {
    return getProductImageAlt(catalogProduct, item.image, { color: item.color, index: 0 })
  }
  return withBrandAlt(`${item.name} in ${item.color}`)
}
