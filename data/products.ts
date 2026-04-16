export interface Product {
  id: string
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
export const categories = ['All', 'Abayas', 'Kaftans', 'Dresses', 'Sets', 'Accessories'] as const

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
    name: 'Abaya 1 — Desert Rose Abaya',
    price: 2475,
    description:
      'A masterpiece of elegance, this flowing abaya captures the essence of desert twilight. The intricate embroidery along the sleeves and hem creates a symphony of sophistication.',
    fabric: 'Premium Japanese Crepe, Silk lining, Hand-embroidered details',
    measurements: 'Model wears size M. Length: 140cm (size M). Available in custom lengths upon request.',
    images: fiveApparelGalleryImages(0),
    colors: [...abayaPalette],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Abayas',
  },
  {
    id: 'ab-002',
    name: 'Abaya 2 — Noor Linen Abaya',
    price: 980,
    description: 'Lightweight linen with a clean silhouette and concealed placket — made for warm days and evening strolls.',
    fabric: 'European linen blend, cotton lining',
    measurements: 'Length: 138cm (size M). Relaxed fit through the body.',
    images: fiveApparelGalleryImages(1),
    colors: [
      { name: 'Stone', hex: '#c4bbb0' },
      { name: 'Graphite', hex: '#3d3d3d' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Abayas',
  },
  {
    id: 'ab-003',
    name: 'Abaya 3 — Alba Silk Abaya',
    price: 1200,
    description: 'Fluid silk crepe with subtle side slits and hand-finished hems.',
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
    name: 'Abaya 4 — Rimal Embroidered Abaya',
    price: 1100,
    description: 'Tone-on-tone embroidery inspired by wind patterns on desert dunes.',
    fabric: 'Japanese crepe, tonal embroidery thread',
    measurements: 'Length: 140cm (size M).',
    images: fiveApparelGalleryImages(3),
    colors: [...abayaPalette],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Abayas',
  },
  {
    id: 'ab-005',
    name: 'Abaya 5 — Zahra Open Abaya',
    price: 1050,
    description: 'An open-front layer with wide sleeves — ideal over dresses or sets.',
    fabric: 'Wool-silk blend, matte satin binding',
    measurements: 'Length: 135cm (size M).',
    images: fiveApparelGalleryImages(4),
    colors: [
      { name: 'Camel', hex: '#b8956a' },
      { name: 'Black', hex: '#1a1a1a' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Abayas',
  },
  {
    id: 'ab-006',
    name: 'Abaya 6 — Layla Pleated Abaya',
    price: 1150,
    description: 'Vertical pleats from the shoulder for a lengthening, architectural line.',
    fabric: 'Italian triacetate, anti-static lining',
    measurements: 'Length: 141cm (size M).',
    images: fiveApparelGalleryImages(5),
    colors: [
      { name: 'Moss', hex: '#5c6b54' },
      { name: 'Ink', hex: '#1e1e24' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Abayas',
  },
  {
    id: 'bs-002',
    name: 'V-Neck Caftan',
    price: 2475,
    description: `There are pieces you don't overthink.
You put them on and you already know.

The Bint Saeed Flow Kaftan is made from crepe chiffon, chosen for how it moves with you. Light, fluid, and effortless on the body, it creates a natural flow with every step without feeling heavy or fixed.

Finished with the Bint Saeed signature gold emblem, a subtle detail that marks the piece without interrupting its movement.

Designed for the way women live today, moving between cities, occasions, and moments without changing who they are.`,
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
    name: 'Boatneck Caftan',
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
    name: 'Oasis Evening Gown',
    price: 1000,
    description:
      'Inspired by the serene beauty of hidden desert oases, this evening gown features cascading layers that move like water in moonlight.',
    fabric: 'French Tulle, Swarovski crystals, Duchess satin lining',
    measurements: 'Fitted bodice, flowing skirt. Length: 160cm (size M). Train: 30cm.',
    images: fiveApparelGalleryImages(8),
    colors: [
      { name: 'Dusty Blue', hex: '#92aac1' },
      { name: 'Blush Pink', hex: '#e8c4c4' },
      { name: 'Sage Green', hex: '#9caf88' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Dresses',
  },
  {
    id: 'bs-004',
    name: 'Sultan Structured Dress',
    price: 1000,
    description:
      'A statement silhouette with architectural shoulders and a clean skirt — refined structure for evening and city events.',
    fabric: 'Virgin Wool blend, Silk lining, Mother-of-pearl buttons',
    measurements: 'Structured fit. Length: 118cm (size M). Shoulder width: 42cm.',
    images: fiveApparelGalleryImages(9),
    colors: [
      { name: 'Royal Purple', hex: '#6620a2' },
      { name: 'Classic Black', hex: '#1a1a1a' },
      { name: 'Clay Red', hex: '#8e4233' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Dresses',
  },
  {
    id: 'bs-006',
    name: 'Dune Draped Dress',
    price: 1000,
    description:
      'Fluid and feminine, this draped dress moves with grace and intention. The asymmetric hem creates a dynamic silhouette.',
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
    id: 'dr-007',
    name: 'Crescent Slip Dress',
    price: 890,
    description: 'Bias-cut slip in matte satin with adjustable straps.',
    fabric: 'Viscose satin, silk lining',
    measurements: 'Midi length 115cm (size M).',
    images: fiveApparelGalleryImages(11),
    colors: [
      { name: 'Champagne', hex: '#e8dcc8' },
      { name: 'Noir', hex: '#1a1a1a' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Dresses',
  },
  {
    id: 'dr-008',
    name: 'Sahara Shirt Dress',
    price: 920,
    description: 'Belted shirt dress with concealed pockets and a sharp collar.',
    fabric: 'Cotton poplin, horn buttons',
    measurements: 'Length: 112cm (size M).',
    images: fiveApparelGalleryImages(12),
    colors: [
      { name: 'Bone', hex: '#e5e0d8' },
      { name: 'Olive', hex: '#5c6648' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Dresses',
  },
  {
    id: 'dr-009',
    name: 'Mirage Column Dress',
    price: 980,
    description: 'Slim column in stretch crepe with a high back vent for ease of movement.',
    fabric: 'Stretch crepe, power mesh lining',
    measurements: 'Floor length 148cm (size M).',
    images: fiveApparelGalleryImages(13),
    colors: [
      { name: 'Plum', hex: '#4a2c3a' },
      { name: 'Steel', hex: '#6b7280' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Dresses',
  },
  {
    id: 'bs-005',
    name: 'Mirage Two-Piece Set',
    price: 1000,
    description:
      'Modern elegance meets traditional craftsmanship. This versatile set can be worn together or as separate statement pieces.',
    fabric: 'Organic Cotton blend, Linen accents, Natural dyes',
    measurements: 'Top length: 70cm, Skirt length: 95cm (size M). Relaxed fit.',
    images: fiveApparelGalleryImages(14),
    colors: [
      { name: 'Natural Stone', hex: '#d4bdac' },
      { name: 'Terracotta', hex: '#c67c4e' },
      { name: 'Ocean Blue', hex: '#4a7c8a' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Sets',
  },
  {
    id: 'st-002',
    name: 'Atlas Knit Set',
    price: 870,
    description: 'Ribbed knit top and matching wide-leg trouser for travel and home.',
    fabric: 'Merino blend, elastane',
    measurements: 'Top 58cm, inseam 78cm (size M).',
    images: fiveApparelGalleryImages(15),
    colors: [
      { name: 'Oat', hex: '#d8cfc4' },
      { name: 'Charcoal', hex: '#2d2d2d' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Sets',
  },
  {
    id: 'acc-001',
    name: 'Heritage Gold Necklace',
    price: 420,
    description: 'Fine-link necklace with a brushed pendant — pairs with abayas and kaftans.',
    fabric: '18k gold-plated sterling, hypoallergenic clasp',
    measurements: 'Length: 45cm adjustable to 50cm.',
    images: fiveAccessoryGalleryImages(0),
    colors: [{ name: 'Gold', hex: '#c9a227' }],
    sizes: ['One Size'],
    category: 'Accessories',
  },
  {
    id: 'acc-002',
    name: 'Pearl Drop Earrings',
    price: 280,
    description: 'Freshwater pearls on slim hooks for understated evening light.',
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
    name: 'Suede Evening Clutch',
    price: 360,
    description: 'Structured clutch in Italian suede with a magnetic frame.',
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
