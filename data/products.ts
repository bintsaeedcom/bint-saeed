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
export const categories = ['All', 'Abayas', 'Kaftans', 'Dresses', 'Sets', 'Belts'] as const

export type ShopCategory = (typeof categories)[number]

/** Uniform shop price for collection apparel (Abayas, Kaftans, Dresses, Sets). Belts excluded. */
export const COLLECTION_APPAREL_PRICE_AED = 500

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
    front: '/Webshop pictures/Abayas/Knightsbridge Abaya Jacket/Knightsbridge Abaya Jacket- F.png',
    side: '/Webshop pictures/Abayas/Knightsbridge Abaya Jacket/Knightsbridge Abaya Jacket- S.png',
    back: '/Webshop pictures/Abayas/Knightsbridge Abaya Jacket/Knightsbridge Abaya Jacket- B.png',
    detail: '/Webshop pictures/Abayas/Knightsbridge Abaya Jacket/Knightsbridge Abaya Jacket- D.JPG',
    extra: '/Webshop pictures/Abayas/Knightsbridge Abaya Jacket/Knightsbridge Abaya Jacket - E.png',
  },
  'covent-garden-abaya': {
    front: '/Webshop pictures/Abayas/Covent Garden Abaya /Covent Garden- F.png',
    side: '/Webshop pictures/Abayas/Covent Garden Abaya /Covent Garden- S.png',
    back: '/Webshop pictures/Abayas/Covent Garden Abaya /Covent Garden- B.png',
  },
  'kensington-abaya': {
    front: '/Webshop pictures/Abayas/Kensington Abaya/Kensington Abaya- F.png',
    side: '/Webshop pictures/Abayas/Kensington Abaya/Kensington Abaya- S.png',
    back: '/Webshop pictures/Abayas/Kensington Abaya/Kensington Abaya- B.png',
  },
  'marylebone-abaya': {
    front: '/Webshop pictures/Abayas/Marylebone Abaya/Marylebone Abaya- F.PNG',
    side: '/Webshop pictures/Abayas/Marylebone Abaya/Marylebone Abaya- S.PNG',
    back: '/Webshop pictures/Abayas/Marylebone Abaya/Marylebone Abaya- B.PNG',
  },
  'belgravia-abaya': {
    front: '/Webshop pictures/Abayas/Belgravia Abaya/Belgravia Abaya-F.png',
    side: '/Webshop pictures/Abayas/Belgravia Abaya/Belgravia Abaya-S.png',
    back: '/Webshop pictures/Abayas/Belgravia Abaya/Belgravia Abaya-B.png',
    detail: '/Webshop pictures/Abayas/Belgravia Abaya/Belgravia Abaya-E.jpg',
    video: '/Webshop pictures/Abayas/Belgravia Abaya/Belgravia Abaya-V.jpg',
  },
  'park-lane-abaya': {
    front: '/Webshop pictures/Abayas/Park Lane Abaya/Parklane Abaya- F.JPG',
    side: '/Webshop pictures/Abayas/Park Lane Abaya/Park Lane Abaya- S.JPG',
    back: '/Webshop pictures/Abayas/Park Lane Abaya/Park Lane Abaya- B.JPG',
    detail: '/Webshop pictures/Abayas/Park Lane Abaya/Park Lane Abaya - D.PNG',
  },
  'mayfair-kaftan': {
    front: '/Webshop pictures/Caftans/Mayfair Kaftan/Mayfair Kaftan- F.PNG',
    back: '/Webshop pictures/Caftans/Mayfair Kaftan/Mayfair Kaftan- B.PNG',
  },
  'nothing-hill-kaftan': {
    front: '/Webshop pictures/Caftans/Nothing Hill Kaftan/Nothing Hill Kaftan- F.PNG',
    side: '/Webshop pictures/Caftans/Nothing Hill Kaftan/Nothing Hill Kaftan- S.PNG',
    back: '/Webshop pictures/Caftans/Nothing Hill Kaftan/Nothing Hill Kaftan- B.PNG',
    extra: '/Webshop pictures/Caftans/Nothing Hill Kaftan/Nothing Hill Kaftan- E.jpg',
  },
  'knightsbridge-dress': {
    front: '/Webshop pictures/Dresses/Knightsbridge Dress/Knightsbridge Dress- F.png',
    side: '/Webshop pictures/Dresses/Knightsbridge Dress/Knightsbridge Dress- S.png',
    back: '/Webshop pictures/Dresses/Knightsbridge Dress/Knightsbridge Dress- B.png',
    detail: '/Webshop pictures/Dresses/Knightsbridge Dress/Knightsbridge Dress- D.PNG',
    extra: '/Webshop pictures/Dresses/Knightsbridge Dress/Knightsbridge Dress- E.PNG',
    video: '/Webshop pictures/Dresses/Knightsbridge Dress/Knightsbridge Dress- V.png',
  },
  'hampstead-dress': {
    front: '/Webshop pictures/Dresses/Hampstead Dress/Hampstead Dress -F.jpg',
    side: '/Webshop pictures/Dresses/Hampstead Dress/Hampstead Dress- S.jpg',
    back: '/Webshop pictures/Dresses/Hampstead Dress/Hampstead Dress- B.jpg',
    extra: '/Webshop pictures/Dresses/Hampstead Dress/Hampstead Dress- E.jpg',
  },
  'covent-garden-signature-set': {
    front: '/Webshop pictures/Sets/Covent Garden Set/Covent Garden Set- F.png',
    side: '/Webshop pictures/Sets/Covent Garden Set/Covent Garden Set- S.png',
    back: '/Webshop pictures/Sets/Covent Garden Set/Covent Garden Set- B.png',
  },
  'soho-set': {
    side: '/Webshop pictures/Sets/Soho Set/Soho Set - S.jpg',
    back: '/Webshop pictures/Sets/Soho Set/Soho Set- B.jpg',
    detail: '/Webshop pictures/Sets/Soho Set/Soho Set- D.jpg',
    extra: '/Webshop pictures/Sets/Soho Set/Soho Set- E.jpg',
  },
  'hyde-park-set': {
    front: '/Webshop%20pictures/Sets/Hyde%20Park%20Set/Hyde%20Park%20Set-%20F.JPG',
    side: '/Webshop%20pictures/Sets/Hyde%20Park%20Set/Hyde%20Park%20Set-%20S.JPG',
    back: '/Webshop%20pictures/Sets/Hyde%20Park%20Set/Hyde%20Park%20Set-%20B.JPG',
  },
  'signature-belt-i': {
    front: '/Webshop%20pictures/Belt.jpg',
  },
  'signature-belt-ii': {
    front: '/Webshop%20pictures/Belt.jpg',
  },
}

function orderedProductGallery(slug: string): string[] {
  const views = ORDERED_APPAREL_VIEWS[slug] ?? {}
  const list = [views.front, views.side, views.back, views.detail, views.extra, views.video].filter(
    (src): src is string => typeof src === 'string' && src.length > 0,
  )
  return list.length > 0 ? list : [FRONT_PLACEHOLDER]
}

/** Hidden from `/shop` grid until webshop photography is wired in ORDERED_APPAREL_VIEWS. */
export const SHOP_GRID_HIDDEN_SLUGS = new Set(['signature-long-dress', 'chelsea-dress'])

export function isVisibleOnShopGrid(product: Pick<Product, 'slug' | 'images'>): boolean {
  if (SHOP_GRID_HIDDEN_SLUGS.has(product.slug)) return false
  return product.images.length > 0
}

export const products: Product[] = [
  {
    id: 'bs-001',
    slug: 'knightsbridge-abaya-jacket',
    name: 'Knightsbridge Abaya Jacket',
    price: COLLECTION_APPAREL_PRICE_AED,
    description: 'Khous jacket-style abaya with refined drape and embroidery-led detailing.',
    fabric: 'Premium Japanese Crepe, Silk lining, Hand-embroidered details',
    measurements: 'Model wears size M. Length: 140cm (size M). Available in custom lengths upon request.',
    images: orderedProductGallery('knightsbridge-abaya-jacket'),
    colorImages: {
      'Dark Brown': orderedProductGallery('knightsbridge-abaya-jacket'),
      'Navy Grey': orderedProductGallery('knightsbridge-abaya-jacket'),
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
    price: COLLECTION_APPAREL_PRICE_AED,
    description: 'Light linen abaya with Talli-led presence and a clean, concealed placket.',
    fabric: 'European linen blend, cotton lining',
    measurements: 'Length: 138cm (size M). Relaxed fit through the body.',
    images: orderedProductGallery('covent-garden-abaya'),
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Magenta', hex: '#9B1F5C' },
      { name: 'Navy Blue', hex: '#1f3a5f' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Abayas',
  },
  {
    id: 'ab-004',
    slug: 'kensington-abaya',
    name: 'Kensington Abaya',
    price: COLLECTION_APPAREL_PRICE_AED,
    description: 'Structured blazer abaya with tonal embroidery and a tailored shoulder.',
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
    price: COLLECTION_APPAREL_PRICE_AED,
    description: 'Open-front signature abaya with wide sleeves to layer over dresses or sets.',
    fabric: 'Wool-silk blend, matte satin binding',
    measurements: 'Length: 135cm (size M).',
    images: orderedProductGallery('marylebone-abaya'),
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Magenta', hex: '#9B1F5C' },
      { name: 'Navy Blue', hex: '#1f3a5f' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Abayas',
  },
  {
    id: 'ab-006',
    slug: 'belgravia-abaya',
    name: 'Belgravia Abaya',
    price: COLLECTION_APPAREL_PRICE_AED,
    description: 'Signature Khous abaya with tonal embroidery and a deliberate, refined drape.',
    fabric: 'Japanese crepe, tonal embroidery thread',
    measurements: 'Length: 140cm (size M). Available in custom lengths upon request.',
    images: orderedProductGallery('belgravia-abaya'),
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Navy Blue', hex: '#1f3a5f' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Abayas',
  },
  {
    id: 'ab-007',
    slug: 'park-lane-abaya',
    name: 'Park Lane Abaya',
    price: COLLECTION_APPAREL_PRICE_AED,
    description: 'Refined everyday abaya with a clean line and fluid drape designed for city movement.',
    fabric: 'Fabric composition — to be finalized with production.',
    measurements: 'Length: 138cm (size M). Available in custom lengths upon request.',
    images: orderedProductGallery('park-lane-abaya'),
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Navy Blue', hex: '#1f3a5f' },
      { name: 'Burgundy', hex: '#5c1a2a' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Abayas',
  },
  {
    id: 'ab-008',
    slug: 'hyde-park-set',
    name: 'Hyde Park Set',
    price: COLLECTION_APPAREL_PRICE_AED,
    description: 'Placeholder style pending full product details and imagery.',
    fabric: 'Fabric composition — to be finalized with production.',
    measurements: 'Measurements — to be confirmed.',
    images: orderedProductGallery('hyde-park-set'),
    colors: [{ name: 'Black', hex: '#1a1a1a' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Sets',
  },
  {
    id: 'bs-002',
    slug: 'mayfair-kaftan',
    name: 'Mayfair Kaftan',
    price: COLLECTION_APPAREL_PRICE_AED,
    description:
      'Crepe-chiffon V-neck kaftan with fluid drape, inner dress, scarf detail, and signature gold emblem.',
    fabric: 'Italian Silk, Crystal embellishments, Pearl buttons',
    measurements: 'Oversized fit. One size fits most. Length: 145cm.',
    images: orderedProductGallery('mayfair-kaftan'),
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Navy Blue', hex: '#1f3a5f' },
      { name: 'Burgundy', hex: '#5c1a2a' },
      { name: 'Light Pink', hex: '#f4c2c2' },
    ],
    sizes: ['One Size'],
    category: 'Kaftans',
  },
  {
    id: 'cf-002',
    slug: 'nothing-hill-kaftan',
    name: 'Nothing Hill Kaftan',
    price: COLLECTION_APPAREL_PRICE_AED,
    description: 'Shorter kaftan silhouette with bracelet sleeves and a jewel neckline.',
    fabric: 'Sand-washed silk, bound inner seams',
    measurements: 'Length: 125cm. Relaxed fit.',
    images: orderedProductGallery('nothing-hill-kaftan'),
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Navy Blue', hex: '#1f3a5f' },
      { name: 'Burgundy', hex: '#5c1a2a' },
      { name: 'Light Pink', hex: '#f4c2c2' },
    ],
    sizes: ['One Size', 'M', 'L'],
    category: 'Kaftans',
  },
  {
    id: 'bs-003',
    slug: 'knightsbridge-dress',
    name: 'Knightsbridge Dress',
    price: COLLECTION_APPAREL_PRICE_AED,
    description: 'Midi-length Khous signature dress with layered skirt and evening-ready presence.',
    fabric: 'French Tulle, Swarovski crystals, Duchess satin lining',
    measurements: 'Fitted bodice, flowing skirt. Length: 160cm (size M). Train: 30cm.',
    images: orderedProductGallery('knightsbridge-dress'),
    colorImages: {
      'Dark Brown': orderedProductGallery('knightsbridge-dress'),
      'Navy Grey': orderedProductGallery('knightsbridge-dress'),
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
    slug: 'signature-long-dress',
    name: 'Signature Long Dress',
    price: COLLECTION_APPAREL_PRICE_AED,
    description: 'Slim column in stretch crepe with a high back vent for ease of movement.',
    fabric: 'Stretch crepe, power mesh lining',
    measurements: 'Floor length 148cm (size M).',
    images: orderedProductGallery('signature-long-dress'),
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Navy Blue', hex: '#1f3a5f' },
      { name: 'Magenta', hex: '#9B1F5C' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Dresses',
  },
  {
    id: 'bs-006',
    slug: 'chelsea-dress',
    name: 'Chelsea Dress',
    price: COLLECTION_APPAREL_PRICE_AED,
    description: 'Draped jersey dress with asymmetric hem for fluid movement.',
    fabric: 'Modal Jersey, Stretch lining, Invisible zipper',
    measurements: 'Length varies from 120cm to 140cm due to draping. True to size.',
    images: orderedProductGallery('chelsea-dress'),
    colors: [
      { name: 'Wine', hex: '#722f37' },
      { name: 'Forest', hex: '#228b22' },
      { name: 'Midnight', hex: '#191970' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Dresses',
  },
  {
    id: 'bs-004',
    slug: 'hampstead-dress',
    name: 'Hampstead Dress',
    price: COLLECTION_APPAREL_PRICE_AED,
    description: 'Talli-inspired dress with structured shoulders and a clean skirt for evening or city.',
    fabric: 'Virgin Wool blend, Silk lining, Mother-of-pearl buttons',
    measurements: 'Structured fit. Length: 118cm (size M). Shoulder width: 42cm.',
    images: orderedProductGallery('hampstead-dress'),
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
    price: COLLECTION_APPAREL_PRICE_AED,
    description: 'Khous signature classic two-piece set — top and skirt for full looks or separated styling.',
    fabric: 'Organic Cotton blend, Linen accents, Natural dyes',
    measurements: 'Top length: 70cm, Skirt length: 95cm (size M). Relaxed fit.',
    images: orderedProductGallery('covent-garden-signature-set'),
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Magenta', hex: '#9B1F5C' },
      { name: 'Navy Blue', hex: '#1f3a5f' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Sets',
  },
  {
    id: 'st-003',
    slug: 'soho-set',
    name: 'Soho Set',
    price: COLLECTION_APPAREL_PRICE_AED,
    description: 'Talli-inspired coordinate set — top and skirt pairing for polished day-to-evening looks.',
    fabric: 'Fabric composition — to be finalized with production.',
    measurements: 'Chapter fit; top and skirt lengths confirmed against size chart.',
    images: orderedProductGallery('soho-set'),
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Navy Blue', hex: '#1f3a5f' },
      { name: 'Magenta', hex: '#9B1F5C' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Sets',
  },
  {
    id: 'belt-001',
    slug: 'signature-belt-i',
    name: 'Signature Belt I',
    price: 395,
    description: 'Placeholder belt style pending final imagery and specifications.',
    fabric: 'Material details — to be confirmed.',
    measurements: 'One size (adjustable).',
    images: orderedProductGallery('signature-belt-i'),
    colors: [{ name: 'Black', hex: '#1a1a1a' }],
    sizes: ['One Size'],
    category: 'Belts',
  },
  {
    id: 'belt-002',
    slug: 'signature-belt-ii',
    name: 'Signature Belt II',
    price: 395,
    description: 'Placeholder belt style pending final imagery and specifications.',
    fabric: 'Material details — to be confirmed.',
    measurements: 'One size (adjustable).',
    images: orderedProductGallery('signature-belt-ii'),
    colors: [{ name: 'Black', hex: '#1a1a1a' }],
    sizes: ['One Size'],
    category: 'Belts',
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
