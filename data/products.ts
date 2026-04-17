import { ACCESSORY_IMAGE_NECKLACE } from '@/data/accessories'

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
  colors: { name: string; hex: string }[]
  sizes: string[]
  category: string
}

/** Shop filter order (excluding All). Counts in the UI match `products` per category. */
export const categories = ['All', 'Abayas', 'Kaftans', 'Dresses', 'Jacket', 'Sets', 'Accessories'] as const

export type ShopCategory = (typeof categories)[number]

const abayaPalette = [
  { name: 'Midnight Black', hex: '#1a1a1a' },
  { name: 'Desert Sand', hex: '#d4bdac' },
  { name: 'Deep Burgundy', hex: '#3b0014' },
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

export const products: Product[] = [
  {
    id: 'bs-001',
    slug: 'khous-jacket-abaya',
    name: 'Khous Jacket Abaya',
    price: 3475,
    description: 'Khous jacket-style abaya with refined drape and embroidery-led detailing.',
    fabric: 'Premium Japanese Crepe, Silk lining, Hand-embroidered details',
    measurements: 'Model wears size M. Length: 140cm (size M). Available in custom lengths upon request.',
    images: fiveApparelGalleryImages(0),
    colors: [
      { name: 'Dark Brown', hex: '#3D2817' },
      { name: 'Navy Grey', hex: '#3A4450' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Abayas',
  },
  {
    id: 'ab-002',
    slug: 'royal-talli-abaya',
    name: 'Royal Talli Abaya',
    price: 2800,
    description: 'Light linen abaya with Talli-led presence and a clean, concealed placket.',
    fabric: 'European linen blend, cotton lining',
    measurements: 'Length: 138cm (size M). Relaxed fit through the body.',
    images: fiveApparelGalleryImages(1),
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Magenta', hex: '#9B1F5C' },
      { name: 'Navy Blue', hex: '#1f3a5f' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Abayas',
  },
  {
    id: 'ab-003',
    slug: 'khous-classic-abaya',
    name: 'Khous Classic Abaya',
    price: 1200,
    description: 'Classic Khous-line abaya in silk crepe with side slits and hand-finished hems.',
    fabric: 'Silk crepe, silk habotai lining',
    measurements: 'Length: 142cm (size M).',
    images: fiveApparelGalleryImages(2),
    colors: [
      { name: 'Ivory', hex: '#f4f0e8' },
      { name: 'Espresso', hex: '#3c2f2f' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Abayas',
  },
  {
    id: 'ab-004',
    slug: 'khous-structured-blazer-abaya',
    name: 'Khous Structured Blazer Abaya',
    price: 2775,
    description: 'Structured blazer abaya with tonal embroidery and a tailored shoulder.',
    fabric: 'Japanese crepe, tonal embroidery thread',
    measurements: 'Length: 140cm (size M).',
    images: fiveApparelGalleryImages(3),
    colors: [{ name: 'Black', hex: '#1a1a1a' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Abayas',
  },
  {
    id: 'ab-005',
    slug: 'natural-stone-signature-abaya',
    name: 'Natural Stone Signature Abaya',
    price: 2675,
    description: 'Open-front signature abaya with wide sleeves to layer over dresses or sets.',
    fabric: 'Wool-silk blend, matte satin binding',
    measurements: 'Length: 135cm (size M).',
    images: fiveApparelGalleryImages(4),
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
    slug: 'khous-signature-abaya',
    name: 'Khous Signature Abaya',
    price: 3375,
    description: 'Signature Khous abaya with tonal embroidery and a deliberate, refined drape.',
    fabric: 'Japanese crepe, tonal embroidery thread',
    measurements: 'Length: 140cm (size M). Available in custom lengths upon request.',
    images: fiveApparelGalleryImages(5),
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Navy Blue', hex: '#1f3a5f' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Abayas',
  },
  {
    id: 'bs-002',
    slug: 'royal-v-neck-kaftan',
    name: 'Royal V-Neck Kaftan',
    price: 2475,
    description:
      'Crepe-chiffon V-neck kaftan with fluid drape, inner dress, scarf detail, and signature gold emblem.',
    fabric: 'Italian Silk, Crystal embellishments, Pearl buttons',
    measurements: 'Oversized fit. One size fits most. Length: 145cm.',
    images: [
      '/Webshop%20pictures/Caftans/IMG_2385.HEIC',
      '/Webshop%20pictures/Caftans/IMG_2394.HEIC',
      '/Webshop%20pictures/Caftans/IMG_2471.HEIC',
      '/Webshop%20pictures/Caftans/IMG_2519.HEIC',
      '/Webshop%20pictures/Caftans/IMG_2578.HEIC',
      '/Webshop%20pictures/Caftans/IMG_2522.MOV',
    ],
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
    slug: 'royal-boatneck-kaftan',
    name: 'Royal Boatneck Kaftan',
    price: 2475,
    description: 'Shorter kaftan silhouette with bracelet sleeves and a jewel neckline.',
    fabric: 'Sand-washed silk, bound inner seams',
    measurements: 'Length: 125cm. Relaxed fit.',
    images: fiveApparelGalleryImages(7),
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
    slug: 'khous-signature-midi-dress',
    name: 'Khous Signature Midi Dress',
    price: 2975,
    description: 'Midi-length Khous signature dress with layered skirt and evening-ready presence.',
    fabric: 'French Tulle, Swarovski crystals, Duchess satin lining',
    measurements: 'Fitted bodice, flowing skirt. Length: 160cm (size M). Train: 30cm.',
    images: fiveApparelGalleryImages(8),
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
    price: 1775,
    description: 'Slim column in stretch crepe with a high back vent for ease of movement.',
    fabric: 'Stretch crepe, power mesh lining',
    measurements: 'Floor length 148cm (size M).',
    images: fiveApparelGalleryImages(13),
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
    slug: 'inner-flow-dress',
    name: 'Inner Flow Dress',
    price: 1000,
    description: 'Draped jersey dress with asymmetric hem for fluid movement.',
    fabric: 'Modal Jersey, Stretch lining, Invisible zipper',
    measurements: 'Length varies from 120cm to 140cm due to draping. True to size.',
    images: fiveApparelGalleryImages(10),
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
    slug: 'talli-signature-dress',
    name: 'Talli Signature Dress',
    price: 1700,
    description: 'Talli-inspired dress with structured shoulders and a clean skirt for evening or city.',
    fabric: 'Virgin Wool blend, Silk lining, Mother-of-pearl buttons',
    measurements: 'Structured fit. Length: 118cm (size M). Shoulder width: 42cm.',
    images: fiveApparelGalleryImages(9),
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Navy Blue', hex: '#1f3a5f' },
      { name: 'Magenta', hex: '#9B1F5C' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Dresses',
  },
  {
    id: 'jk-001',
    slug: 'khous-signature-classic-jacket',
    name: 'Khous Signature Classic Set',
    price: 4350,
    description: 'Khous signature classic set — jacket piece designed to pair with the matching skirt.',
    fabric: 'Organic Cotton blend, Linen accents, Natural dyes',
    measurements: 'Top length: 70cm, Skirt length: 95cm (size M). Relaxed fit.',
    images: fiveApparelGalleryImages(15),
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Magenta', hex: '#9B1F5C' },
      { name: 'Navy Blue', hex: '#1f3a5f' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Jacket',
  },
  {
    id: 'bs-005',
    slug: 'khous-signature-classic-set',
    name: 'Khous Signature Classic Set',
    price: 4350,
    description: 'Khous signature classic two-piece set — top and skirt for full looks or separated styling.',
    fabric: 'Organic Cotton blend, Linen accents, Natural dyes',
    measurements: 'Top length: 70cm, Skirt length: 95cm (size M). Relaxed fit.',
    images: fiveApparelGalleryImages(14),
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
    slug: 'talli-signature-set',
    name: 'Talli Signature Set',
    price: 1875,
    description: 'Talli-inspired coordinate set — top and skirt pairing for polished day-to-evening looks.',
    fabric: 'Fabric composition — to be finalized with production.',
    measurements: 'Chapter fit; top and skirt lengths confirmed against size chart.',
    images: fiveApparelGalleryImages(16),
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Navy Blue', hex: '#1f3a5f' },
      { name: 'Magenta', hex: '#9B1F5C' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Sets',
  },
  {
    id: 'acc-001',
    slug: 'heritage-gold-necklace',
    name: 'Heritage Gold Necklace',
    price: 420,
    description: 'Fine-link necklace with brushed pendant for layering over abayas and kaftans.',
    fabric: '18k gold-plated sterling, hypoallergenic clasp',
    measurements: 'Length: 45cm adjustable to 50cm.',
    images: [
      ACCESSORY_IMAGE_NECKLACE,
      ...fiveAccessoryGalleryImages(0).slice(0, 4),
    ],
    colors: [{ name: 'Gold', hex: '#c9a227' }],
    sizes: ['One Size'],
    category: 'Accessories',
  },
  {
    id: 'acc-002',
    slug: 'pearl-drop-earrings',
    name: 'Pearl Drop Earrings',
    price: 280,
    description: 'Freshwater pearl drops on slim gold hooks for evening.',
    fabric: 'Freshwater pearl, 14k gold posts',
    measurements: 'Drop: 2.5cm.',
    images: fiveAccessoryGalleryImages(1),
    colors: [
      { name: 'Pearl', hex: '#f5f0e6' },
      { name: 'Gold', hex: '#c9a227' },
    ],
    sizes: ['One Size'],
    category: 'Accessories',
  },
  {
    id: 'acc-003',
    slug: 'suede-evening-clutch',
    name: 'Suede Evening Clutch',
    price: 360,
    description: 'Structured Italian suede clutch with magnetic frame.',
    fabric: 'Italian suede, satin lining',
    measurements: 'W 24cm × H 14cm × D 4cm.',
    images: fiveAccessoryGalleryImages(2),
    colors: [
      { name: 'Burgundy', hex: '#5c1a2a' },
      { name: 'Black', hex: '#1a1a1a' },
    ],
    sizes: ['One Size'],
    category: 'Accessories',
  },
]
