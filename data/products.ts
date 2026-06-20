import { slugifyProductName } from '@/lib/products/links'

export interface Product {
  id: string
  /** Canonical URL segment for `/shop/[slug]` (unique, lowercase kebab-case). */
  slug: string
  name: string
  price: number
  description: string
  fabric: string
  measurements: string
  images: string[]
  colorImages?: Record<string, string[]>
  colors: { name: string; hex: string }[]
  sizes: string[]
  category: string
}

/** Shop filter order (excluding All). Counts in the UI match `products` per category. */
export const categories = ['All', 'Abayas', 'Kaftans', 'Dresses', 'Sets'] as const

export type ShopCategory = (typeof categories)[number]

const abayaPalette = [
  { name: 'Midnight Black', hex: '#1a1a1a' },
  { name: 'Desert Sand', hex: '#e8ddd4' },
  { name: 'Deep Burgundy', hex: '#1a0210' },
] as const

const Q = 'w=1200&q=85'

/**
 * Unsplash IDs are rotated when photos are retired — these URLs were verified HTTP 200.
 * Replace with your own assets when ready.
 */
const CAMPAIGN_SHOTS = [
  `https://images.unsplash.com/photo-1490481651871-ab68de25d43d?${Q}`,
  `https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?${Q}`,
  `https://images.unsplash.com/photo-1483985988355-763728e1935b?${Q}`,
  `https://images.unsplash.com/photo-1518611012118-696072aa579a?${Q}`,
  `https://images.unsplash.com/photo-1595777457583-95e059d581b8?${Q}`,
  `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?${Q}`,
  `https://images.unsplash.com/photo-1509631179647-0177331693ae?${Q}`,
  `https://images.unsplash.com/photo-1496747611176-843222e1e57c?${Q}`,
  `https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?${Q}`,
  `https://images.unsplash.com/photo-1434389677669-e08b4cac3105?${Q}`,
  `https://images.unsplash.com/photo-1562157873-818bc0726f68?${Q}`,
  `https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?${Q}`,
  `https://images.unsplash.com/photo-1441986300917-64674bd600d8?${Q}`,
  `https://images.unsplash.com/photo-1558769132-cb1aea458c5e?${Q}`,
] as const

/** Detail / texture placeholders (same verified pool until you add macros). */
const CLOSEUP_SHOTS = [
  `https://images.unsplash.com/photo-1483985988355-763728e1935b?${Q}`,
  `https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?${Q}`,
  `https://images.unsplash.com/photo-1558769132-cb1aea458c5e?${Q}`,
  `https://images.unsplash.com/photo-1434389677669-e08b4cac3105?${Q}`,
  `https://images.unsplash.com/photo-1562157873-818bc0726f68?${Q}`,
  `https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?${Q}`,
  `https://images.unsplash.com/photo-1441986300917-64674bd600d8?${Q}`,
  `https://images.unsplash.com/photo-1490481651871-ab68de25d43d?${Q}`,
  `https://images.unsplash.com/photo-1518611012118-696072aa579a?${Q}`,
  `https://images.unsplash.com/photo-1595777457583-95e059d581b8?${Q}`,
  `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?${Q}`,
  `https://images.unsplash.com/photo-1509631179647-0177331693ae?${Q}`,
] as const

/** Clean packshot-style placeholders. */
const CLEAN_PRODUCT_SHOTS = [
  `https://images.unsplash.com/photo-1434389677669-e08b4cac3105?${Q}`,
  `https://images.unsplash.com/photo-1562157873-818bc0726f68?${Q}`,
  `https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?${Q}`,
  `https://images.unsplash.com/photo-1441986300917-64674bd600d8?${Q}`,
  `https://images.unsplash.com/photo-1558769132-cb1aea458c5e?${Q}`,
  `https://images.unsplash.com/photo-1490481651871-ab68de25d43d?${Q}`,
  `https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?${Q}`,
  `https://images.unsplash.com/photo-1483985988355-763728e1935b?${Q}`,
  `https://images.unsplash.com/photo-1518611012118-696072aa579a?${Q}`,
  `https://images.unsplash.com/photo-1496747611176-843222e1e57c?${Q}`,
  `https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?${Q}`,
] as const

const ACC_CAMPAIGN = [
  `https://images.unsplash.com/photo-1611591437281-460bfbe1220a?${Q}`,
  `https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?${Q}`,
  `https://images.unsplash.com/photo-1605100804763-247f67b3557e?${Q}`,
  `https://images.unsplash.com/photo-1590874103328-eac38a683ce7?${Q}`,
  `https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?${Q}`,
  `https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?${Q}`,
] as const

const ACC_CLOSEUP = [
  `https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?${Q}`,
  `https://images.unsplash.com/photo-1611591437281-460bfbe1220a?${Q}`,
  `https://images.unsplash.com/photo-1605100804763-247f67b3557e?${Q}`,
  `https://images.unsplash.com/photo-1590874103328-eac38a683ce7?${Q}`,
  `https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?${Q}`,
] as const

const ACC_CLEAN = [
  `https://images.unsplash.com/photo-1611591437281-460bfbe1220a?${Q}`,
  `https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?${Q}`,
  `https://images.unsplash.com/photo-1605100804763-247f67b3557e?${Q}`,
  `https://images.unsplash.com/photo-1590874103328-eac38a683ce7?${Q}`,
  `https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?${Q}`,
  `https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?${Q}`,
] as const

/** Order: [0] campaign, [1] close-up, [2–4] three clean product angles. */
export function fiveApparelGalleryImages(seed: number): string[] {
  const s = ((seed % 4096) + 4096) % 4096
  const nc = CAMPAIGN_SHOTS.length
  const nu = CLOSEUP_SHOTS.length
  const np = CLEAN_PRODUCT_SHOTS.length
  return [
    CAMPAIGN_SHOTS[s % nc]!,
    CLOSEUP_SHOTS[s % nu]!,
    CLEAN_PRODUCT_SHOTS[s % np]!,
    CLEAN_PRODUCT_SHOTS[(s + 3) % np]!,
    CLEAN_PRODUCT_SHOTS[(s + 7) % np]!,
  ]
}

export function fiveAccessoryGalleryImages(seed: number): string[] {
  const s = ((seed % 4096) + 4096) % 4096
  const nc = ACC_CAMPAIGN.length
  const nu = ACC_CLOSEUP.length
  const np = ACC_CLEAN.length
  return [
    ACC_CAMPAIGN[s % nc]!,
    ACC_CLOSEUP[s % nu]!,
    ACC_CLEAN[s % np]!,
    ACC_CLEAN[(s + 2) % np]!,
    ACC_CLEAN[(s + 5) % np]!,
  ]
}

const DETAIL_PLACEHOLDER = '/placeholders/product-detail-D.svg'
const EXTRA_PLACEHOLDER = '/placeholders/product-extra-E.svg'
const VIDEO_PLACEHOLDER = '/placeholders/product-video-V.svg'
const FRONT_PLACEHOLDER = '/placeholders/product-front-F.svg'
const SIDE_PLACEHOLDER = '/placeholders/product-side-S.svg'
const BACK_PLACEHOLDER = '/placeholders/product-back-B.svg'

type OrderedViews = {
  front?: string
  side?: string
  back?: string
  detail?: string
  extra?: string
  video?: string
}

const ORDERED_APPAREL_VIEWS: Record<string, OrderedViews> = {
  'knightsbridge-abaya-jacket': {
    front:
      '/Webshop pictures/Abayas/Knightsbridge Abaya Jacket/bint-saeed-knightsbridge-abaya-jacket-dark-brown-front.webp',
    side:
      '/Webshop pictures/Abayas/Knightsbridge Abaya Jacket/bint-saeed-knightsbridge-abaya-jacket-dark-brown-side.webp',
    back:
      '/Webshop pictures/Abayas/Knightsbridge Abaya Jacket/bint-saeed-knightsbridge-abaya-jacket-dark-brown-back.webp',
  },
  'covent-garden-abaya': {
    front: '/Webshop pictures/Abayas/Covent Garden Abaya /bint-saeed-covent-garden-abaya-burgundy-front.webp',
    side: '/Webshop pictures/Abayas/Covent Garden Abaya /bint-saeed-covent-garden-abaya-burgundy-side.webp',
    back: '/Webshop pictures/Abayas/Covent Garden Abaya /bint-saeed-covent-garden-abaya-burgundy-back.webp',
  },
  'kensington-abaya': {
    front: '/Webshop pictures/Abayas/Kensington Abaya/bint-saeed-kensington-abaya-black-front.webp',
    side: '/Webshop pictures/Abayas/Kensington Abaya/bint-saeed-kensington-abaya-black-side.webp',
    back: '/Webshop pictures/Abayas/Kensington Abaya/bint-saeed-kensington-abaya-black-back.webp',
    detail:
      '/Webshop pictures/Abayas/Kensington Abaya/bint-saeed-kensington-abaya-black-close-up.webp',
  },
  'marylebone-abaya': {
    front: '/Webshop pictures/Abayas/Marylebone Abaya/bint-saeed-marylebone-abaya-black-front.webp',
    side: '/Webshop pictures/Abayas/Marylebone Abaya/bint-saeed-marylebone-abaya-black-side.webp',
    back: '/Webshop pictures/Abayas/Marylebone Abaya/bint-saeed-marylebone-abaya-black-back.webp',
  },
  'belgravia-abaya': {
    front: '/Webshop pictures/Abayas/Belgravia Abaya/bint-saeed-belgravia-abaya-black-front.webp',
    side: '/Webshop pictures/Abayas/Belgravia Abaya/bint-saeed-belgravia-abaya-black-side.webp',
    back: '/Webshop pictures/Abayas/Belgravia Abaya/bint-saeed-belgravia-abaya-black-back.webp',
    detail: '/Webshop pictures/Abayas/Belgravia Abaya/bint-saeed-belgravia-abaya-black-detail.webp',
    extra: '/Webshop pictures/Abayas/Belgravia Abaya/bint-saeed-belgravia-abaya-black-extra.webp',
  },
  'park-lane-abaya': {
    front: '/Webshop pictures/Abayas/Park Lane Abaya/bint-saeed-parklane-abaya-black-front.webp',
    side: '/Webshop pictures/Abayas/Park Lane Abaya/bint-saeed-parklane-abaya-black-side.webp',
    back: '/Webshop pictures/Abayas/Park Lane Abaya/bint-saeed-parklane-abaya-black-back.webp',
    extra: '/Webshop pictures/Abayas/Park Lane Abaya/bint-saeed-parklane-abaya-black-extra.webp',
  },
  'mayfair-kaftan': {
    front: '/Webshop pictures/Kaftans/Mayfair Kaftan/bint-saeed-mayfair-kaftan-marroon-front.webp',
    side: '/Webshop pictures/Kaftans/Mayfair Kaftan/bint-saeed-mayfair-kaftan-marroon-side.webp',
    back: '/Webshop pictures/Kaftans/Mayfair Kaftan/bint-saeed-mayfair-kaftan-marroon-back.webp',
  },
  'nothing-hill-kaftan': {
    front:
      '/Webshop pictures/Kaftans/Nothing Hill Kaftan/bint-saeed-nothing-hill-kaftan-peach-pink-front.webp',
    side:
      '/Webshop pictures/Kaftans/Nothing Hill Kaftan/bint-saeed-nothing-hill-kaftan-peach-pink-side.webp',
    back:
      '/Webshop pictures/Kaftans/Nothing Hill Kaftan/bint-saeed-nothing-hill-kaftan-peach-pink-back.webp',
  },
  'knightsbridge-dress': {
    front:
      '/Webshop pictures/Dresses/Knightsbridge Dress/bint-saeed-knightsbridge-dress-dark-brown-front.webp',
    side:
      '/Webshop pictures/Dresses/Knightsbridge Dress/bint-saeed-knightsbridge-dress-dark-brown-side.webp',
    back:
      '/Webshop pictures/Dresses/Knightsbridge Dress/bint-saeed-knightsbridge-dress-dark-brown-back.webp',
    detail:
      '/Webshop pictures/Dresses/Knightsbridge Dress/bint-saeed-knightsbridge-dress-dark-brown-close-up.webp',
  },
  'hampstead-dress': {
    front:
      '/Webshop pictures/Dresses/Hampstead Dress/bint-saeed-hampstead-dress-black-front.webp',
    side:
      '/Webshop pictures/Dresses/Hampstead Dress/bint-saeed-hampstead-dress-black-side.webp',
    back:
      '/Webshop pictures/Dresses/Hampstead Dress/bint-saeed-hampstead-dress-black-back.webp',
  },
  'covent-garden-long-dress': {
    front:
      '/Webshop pictures/Dresses/Covent Garden Dress/bint-saeed-covent-garden-long-dress-burgundy-front.webp',
    side:
      '/Webshop pictures/Dresses/Covent Garden Dress/bint-saeed-covent-garden-long-dress-burgundy-side.webp',
    back:
      '/Webshop pictures/Dresses/Covent Garden Dress/bint-saeed-covent-garden-long-dress-burgundy-back.webp',
  },
  'covent-garden-signature-set': {
    front: '/Webshop pictures/Sets/Covent Garden Set/bint-saeed-covent-garden-set-burgundy-front.webp',
    side: '/Webshop pictures/Sets/Covent Garden Set/bint-saeed-covent-garden-set-burgundy-side.webp',
    back: '/Webshop pictures/Sets/Covent Garden Set/bint-saeed-covent-garden-set-burgundy-back.webp',
  },
  'soho-set': {
    front: '/Webshop pictures/Sets/Soho Set/bint-saeed-soho-set-black-front.webp',
    side: '/Webshop pictures/Sets/Soho Set/bint-saeed-soho-set-black-side.webp',
    back: '/Webshop pictures/Sets/Soho Set/bint-saeed-soho-set-black-back.webp',
    detail: '/Webshop pictures/Sets/Soho Set/bint-saeed-soho-set-black-detail.webp',
    extra: '/Webshop pictures/Sets/Soho Set/bint-saeed-soho-set-black-extra.webp',
  },
  'hyde-park-set': {
    front: '/Webshop pictures/Sets/Hyde Park Set/bint-saeed-hyde-park-set-black-front.webp',
    side: '/Webshop pictures/Sets/Hyde Park Set/bint-saeed-hyde-park-set-black-side.webp',
    back: '/Webshop pictures/Sets/Hyde Park Set/bint-saeed-hyde-park-set-black-back.webp',
  },
}

function orderedProductGallery(slug: string): string[] {
  const views = ORDERED_APPAREL_VIEWS[slug] ?? {}
  const list = [views.front, views.side, views.back, views.detail, views.extra, views.video].filter(
    (src): src is string => typeof src === 'string' && src.length > 0,
  )
  return list.length > 0 ? list : [FRONT_PLACEHOLDER]
}

const KNIGHTSBRIDGE_ABAYA_JACKET_DIR = '/Webshop pictures/Abayas/Knightsbridge Abaya Jacket'

function knightsbridgeAbayaJacketGallery(color: 'dark-brown' | 'navy-grey'): string[] {
  return [
    `${KNIGHTSBRIDGE_ABAYA_JACKET_DIR}/bint-saeed-knightsbridge-abaya-jacket-${color}-front.webp`,
    `${KNIGHTSBRIDGE_ABAYA_JACKET_DIR}/bint-saeed-knightsbridge-abaya-jacket-${color}-side.webp`,
    `${KNIGHTSBRIDGE_ABAYA_JACKET_DIR}/bint-saeed-knightsbridge-abaya-jacket-${color}-back.webp`,
  ]
}

const KNIGHTSBRIDGE_DRESS_DIR = '/Webshop pictures/Dresses/Knightsbridge Dress'

function knightsbridgeDressGallery(color: 'dark-brown' | 'navy-grey'): string[] {
  const base = `${KNIGHTSBRIDGE_DRESS_DIR}/bint-saeed-knightsbridge-dress-${color}`
  const images = [
    `${base}-front.webp`,
    `${base}-side.webp`,
    `${base}-back.webp`,
  ]
  if (color === 'dark-brown') {
    images.push(`${base}-close-up.webp`)
  }
  if (color === 'navy-grey') {
    images.push(`${base}-extra.webp`)
  }
  return images
}

const MARYLEBONE_ABAYA_DIR = '/Webshop pictures/Abayas/Marylebone Abaya'

function maryleboneAbayaGallery(color: 'black' | 'navy-blue'): string[] {
  const base = `${MARYLEBONE_ABAYA_DIR}/bint-saeed-marylebone-abaya-${color}`
  return [`${base}-front.webp`, `${base}-side.webp`, `${base}-back.webp`]
}

const PARK_LANE_ABAYA_DIR = '/Webshop pictures/Abayas/Park Lane Abaya'

function parkLaneAbayaGallery(color: 'black' | 'dark-marroon' | 'navy-blue'): string[] {
  const base = `${PARK_LANE_ABAYA_DIR}/bint-saeed-parklane-abaya-${color}`
  const images = [`${base}-front.webp`, `${base}-side.webp`, `${base}-back.webp`]
  if (color === 'black') {
    images.push(`${base}-extra.webp`)
  }
  return images
}

const COVENT_GARDEN_LONG_DRESS_DIR = '/Webshop pictures/Dresses/Covent Garden Dress'

function coventGardenLongDressGallery(color: 'burgundy' | 'navy-grey'): string[] {
  const base = `${COVENT_GARDEN_LONG_DRESS_DIR}/bint-saeed-covent-garden-long-dress-${color}`
  if (color === 'burgundy') {
    return [`${base}-front.webp`, `${base}-side.webp`, `${base}-back.webp`]
  }
  return [`${base}-front.webp`]
}

const MAYFAIR_KAFTAN_DIR = '/Webshop pictures/Kaftans/Mayfair Kaftan'

function mayfairKaftanGallery(): string[] {
  const base = `${MAYFAIR_KAFTAN_DIR}/bint-saeed-mayfair-kaftan-marroon`
  return [`${base}-front.webp`, `${base}-side.webp`, `${base}-back.webp`]
}

const NOTHING_HILL_KAFTAN_DIR = '/Webshop pictures/Kaftans/Nothing Hill Kaftan'

function nothingHillKaftanGallery(): string[] {
  const base = `${NOTHING_HILL_KAFTAN_DIR}/bint-saeed-nothing-hill-kaftan-peach-pink`
  return [`${base}-front.webp`, `${base}-side.webp`, `${base}-back.webp`]
}

const HAMPSTEAD_DRESS_DIR = '/Webshop pictures/Dresses/Hampstead Dress'

function hampsteadDressGallery(color: 'black' | 'navy-blue' | 'magenta'): string[] {
  const base = `${HAMPSTEAD_DRESS_DIR}/bint-saeed-hampstead-dress-${color}`
  return [`${base}-front.webp`, `${base}-side.webp`, `${base}-back.webp`]
}

const SOHO_SET_DIR = '/Webshop pictures/Sets/Soho Set'

function sohoSetGallery(color: 'black' | 'navy-blue'): string[] {
  const base = `${SOHO_SET_DIR}/bint-saeed-soho-set-${color}`
  return [
    `${base}-front.webp`,
    `${base}-side.webp`,
    `${base}-back.webp`,
    `${base}-detail.webp`,
    `${base}-extra.webp`,
  ]
}

const HYDE_PARK_SET_DIR = '/Webshop pictures/Sets/Hyde Park Set'

function hydeParkSetGallery(): string[] {
  const base = `${HYDE_PARK_SET_DIR}/bint-saeed-hyde-park-set-black`
  return [`${base}-front.webp`, `${base}-side.webp`, `${base}-back.webp`]
}

/** Hidden from `/shop` grid when no gallery images are wired. */
export function isVisibleOnShopGrid(product: Pick<Product, 'slug' | 'images'>): boolean {
  return product.images.length > 0
}

export const products: Product[] = [
  {
    id: 'bs-001',
    slug: 'knightsbridge-abaya-jacket',
    name: 'Knightsbridge Abaya Jacket',
    price: 3299,
    description:
      'Jacket-style abaya with refined drape and trim inspired by traditional Khous weaving — Emirati heritage craftsmanship from Abu Dhabi.',
    fabric: 'Premium Japanese Crepe, Silk lining, Hand-embroidered details',
    measurements: 'Model wears size M. Length: 140cm (size M). Available in custom lengths upon request.',
    images: knightsbridgeAbayaJacketGallery('dark-brown'),
    colorImages: {
      'Dark Brown': knightsbridgeAbayaJacketGallery('dark-brown'),
      'Navy Grey': knightsbridgeAbayaJacketGallery('navy-grey'),
    },
    colors: [
      { name: 'Dark Brown', hex: '#3D2817' },
      { name: 'Navy Grey', hex: '#3A4450' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Abayas',
  },
  {
    id: 'ab-002',
    slug: 'covent-garden-abaya',
    name: 'Covent Garden Abaya',
    price: 2799,
    description:
      'Light linen abaya with traditional Al Talli trim, a clean concealed placket, and Emirati heritage detailing.',
    fabric: 'European linen blend, cotton lining',
    measurements: 'Length: 138cm (size M). Relaxed fit through the body.',
    images: orderedProductGallery('covent-garden-abaya'),
    colors: [{ name: 'Burgundy', hex: '#6f1524' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Abayas',
  },
  {
    id: 'ab-004',
    slug: 'kensington-abaya',
    name: 'Kensington Abaya',
    price: 2899,
    description:
      'Structured blazer abaya with a tailored shoulder and trim inspired by traditional Khous weaving and Emirati heritage.',
    fabric: 'Japanese crepe, tonal embroidery thread',
    measurements: 'Length: 140cm (size M).',
    images: orderedProductGallery('kensington-abaya'),
    colors: [{ name: 'Black', hex: '#1a1a1a' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Abayas',
  },
  {
    id: 'ab-005',
    slug: 'marylebone-abaya',
    name: 'Marylebone Abaya',
    price: 2499,
    description: 'Open-front signature abaya with wide sleeves to layer over dresses or sets.',
    fabric: 'Wool-silk blend, matte satin binding',
    measurements: 'Length: 135cm (size M).',
    images: maryleboneAbayaGallery('black'),
    colorImages: {
      'Black': maryleboneAbayaGallery('black'),
      'Navy Blue': maryleboneAbayaGallery('navy-blue'),
    },
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Navy Blue', hex: '#1f3a5f' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Abayas',
  },
  {
    id: 'ab-006',
    slug: 'belgravia-abaya',
    name: 'Belgravia Abaya',
    price: 3199,
    description:
      'Signature abaya with tonal embroidery and trim inspired by traditional Khous weaving — a refined expression of Emirati heritage.',
    fabric: 'Japanese crepe, tonal embroidery thread',
    measurements: 'Length: 140cm (size M). Available in custom lengths upon request.',
    images: orderedProductGallery('belgravia-abaya'),
    colors: [{ name: 'Black', hex: '#1a1a1a' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Abayas',
  },
  {
    id: 'ab-007',
    slug: 'park-lane-abaya',
    name: 'Park Lane Abaya',
    price: 2199,
    description: 'Refined everyday abaya with a clean line and fluid drape designed for city movement.',
    fabric: 'Fabric composition — to be finalized with production.',
    measurements: 'Length: 138cm (size M). Available in custom lengths upon request.',
    images: parkLaneAbayaGallery('black'),
    colorImages: {
      'Black': parkLaneAbayaGallery('black'),
      'Dark Maroon': parkLaneAbayaGallery('dark-marroon'),
      'Navy Blue': parkLaneAbayaGallery('navy-blue'),
    },
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Dark Maroon', hex: '#5c1a2a' },
      { name: 'Navy Blue', hex: '#1f3a5f' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Abayas',
  },
  {
    id: 'ab-008',
    slug: 'hyde-park-set',
    name: 'Hyde Park Set',
    price: 1399,
    description: 'Placeholder style pending full product details and imagery.',
    fabric: 'Fabric composition — to be finalized with production.',
    measurements: 'Measurements — to be confirmed.',
    images: hydeParkSetGallery(),
    colors: [{ name: 'Black', hex: '#1a1a1a' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Sets',
  },
  {
    id: 'bs-002',
    slug: 'mayfair-kaftan',
    name: 'Mayfair Kaftan',
    price: 975,
    description:
      'Crepe-chiffon V-neck kaftan with fluid drape, inner dress, scarf detail, and signature gold emblem.',
    fabric: 'Italian Silk, Crystal embellishments, Pearl buttons',
    measurements: 'Oversized fit. One size fits most. Length: 145cm.',
    images: mayfairKaftanGallery(),
    colors: [{ name: 'Dark Maroon', hex: '#5c1a2a' }],
    sizes: ['One Size'],
    category: 'Kaftans',
  },
  {
    id: 'cf-002',
    slug: 'nothing-hill-kaftan',
    name: 'Nothing Hill Kaftan',
    price: 975,
    description: 'Shorter kaftan silhouette with bracelet sleeves and a jewel neckline.',
    fabric: 'Sand-washed silk, bound inner seams',
    measurements: 'Length: 125cm. Relaxed fit.',
    images: nothingHillKaftanGallery(),
    colors: [{ name: 'Peach Pink', hex: '#f4c2c2' }],
    sizes: ['One Size', 'M', 'L'],
    category: 'Kaftans',
  },
  {
    id: 'bs-003',
    slug: 'knightsbridge-dress',
    name: 'Knightsbridge Dress',
    price: 2199,
    description:
      'Midi-length dress with layered skirt and trim inspired by traditional Khous weaving — evening-ready Emirati heritage design.',
    fabric: 'French Tulle, Swarovski crystals, Duchess satin lining',
    measurements: 'Fitted bodice, flowing skirt. Length: 160cm (size M). Train: 30cm.',
    images: knightsbridgeDressGallery('dark-brown'),
    colorImages: {
      'Dark Brown': knightsbridgeDressGallery('dark-brown'),
      'Navy Grey': knightsbridgeDressGallery('navy-grey'),
    },
    colors: [
      { name: 'Dark Brown', hex: '#3D2817' },
      { name: 'Navy Grey', hex: '#3A4450' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Dresses',
  },
  {
    id: 'dr-009',
    slug: 'covent-garden-long-dress',
    name: 'Covent Garden Long Dress',
    price: 1699,
    description: 'Slim column in stretch crepe with a high back vent for ease of movement.',
    fabric: 'Stretch crepe, power mesh lining',
    measurements: 'Floor length 148cm (size M).',
    images: coventGardenLongDressGallery('burgundy'),
    colors: [{ name: 'Burgundy', hex: '#6f1524' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Dresses',
  },
  {
    id: 'bs-004',
    slug: 'hampstead-dress',
    name: 'Hampstead Dress',
    price: 1799,
    description:
      'Dress with structured shoulders and traditional Al Talli trim — evening or city wear rooted in Emirati heritage.',
    fabric: 'Virgin Wool blend, Silk lining, Mother-of-pearl buttons',
    measurements: 'Structured fit. Length: 118cm (size M). Shoulder width: 42cm.',
    images: hampsteadDressGallery('black'),
    colorImages: {
      Black: hampsteadDressGallery('black'),
    },
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Navy Blue', hex: '#1f3a5f' },
      { name: 'Magenta', hex: '#9B1F5C' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Dresses',
  },
  {
    id: 'bs-005',
    slug: 'covent-garden-signature-set',
    name: 'Covent Garden Signature Set',
    price: 3199,
    description: 'Khous signature classic two-piece set — top and skirt for full looks or separated styling.',
    fabric: 'Organic Cotton blend, Linen accents, Natural dyes',
    measurements: 'Top length: 70cm, Skirt length: 95cm (size M). Relaxed fit.',
    images: orderedProductGallery('covent-garden-signature-set'),
    colors: [{ name: 'Burgundy', hex: '#6f1524' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Sets',
  },
  {
    id: 'st-003',
    slug: 'soho-set',
    name: 'Soho Set',
    price: 1499,
    description:
      'Coordinate top and skirt set with traditional Al Talli trim — polished day-to-evening looks celebrating Emirati heritage.',
    fabric: 'Fabric composition — to be finalized with production.',
    measurements: 'Chapter fit; top and skirt lengths confirmed against size chart.',
    images: sohoSetGallery('black'),
    colorImages: {
      'Black': sohoSetGallery('black'),
      'Navy Blue': sohoSetGallery('navy-blue'),
    },
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Navy Blue', hex: '#1f3a5f' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Sets',
  },
]

/** Catalog slug ↔ display name (slug = kebab-case of name). */
export function getProductCatalogSlugs(): Array<{
  id: string
  name: string
  slug: string
  category: string
  url: string
}> {
  return products.map((p) => ({
    id: p.id,
    name: p.name,
    slug: p.slug,
    category: p.category,
    url: `/shop/${p.slug}`,
  }))
}

if (process.env.NODE_ENV !== 'production') {
  for (const p of products) {
    const expected = slugifyProductName(p.name)
    if (p.slug !== expected) {
      console.warn(`[products] slug mismatch for "${p.name}": got "${p.slug}", expected "${expected}"`)
    }
  }
}
