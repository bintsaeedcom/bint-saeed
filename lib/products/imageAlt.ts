import type { Product } from '@/data/products'

const FALLBACK_ANGLES = ['front', 'side', 'back', 'three-quarter'] as const
const VIEW_SUFFIXES = ['three-quarter', 'close-up', 'front', 'back', 'side', 'detail', 'extra'] as const

const KNOWN_COLOR_SLUGS = ['dark-marroon', 'marroon', 'peach-pink', 'navy-grey', 'navy-blue', 'dark-brown', 'light-pink', 'burgundy', 'black'] as const

const COLOR_SLUG_LABELS: Record<string, string> = {
  'navy-grey': 'Navy Grey',
  'navy-blue': 'Navy Blue',
  'dark-brown': 'Dark Brown',
  'dark-marroon': 'Dark Maroon',
  marroon: 'Dark Maroon',
  'peach-pink': 'Peach Pink',
  'light-pink': 'Light Pink',
  burgundy: 'Burgundy',
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
  if (category === 'Abayas') return 'Abaya'
  if (category === 'Kaftans') return 'Kaftan'
  if (category === 'Dresses') return 'Dress'
  if (category === 'Sets') return 'Set'
  if (category === 'Belts') return 'Belt'
  return 'Product'
}

function inferAngleFromSrc(src: string, index = 0): string {
  const p = src.toLowerCase()
  if (p.includes('three-quarter') || p.includes('threequarter') || p.includes('3q')) return 'three-quarter'
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

export function getProductImageAlt(
  product: Pick<Product, 'name' | 'category' | 'colors'>,
  imageSrc: string,
  opts?: { color?: string; index?: number }
): string {
  const color =
    opts?.color?.trim() ||
    inferColorFromSrc(imageSrc) ||
    product.colors[0]?.name ||
    'Black'
  const type = productTypeFromCategory(product.category)
  const angle = inferAngleFromSrc(imageSrc, opts?.index ?? 0)
  const nameIncludesType = product.name.toLowerCase().includes(type.toLowerCase())

  if (nameIncludesType) {
    return `${product.name} in ${color}, ${angle} view.`
  }

  return `${product.name} ${color} ${type}, ${angle} view.`
}
