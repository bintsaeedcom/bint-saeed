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

export const products: Product[] = [
  {
    id: 'bs-001',
    name: 'Desert Rose Abaya',
    price: 1000,
    description: 'A masterpiece of elegance, this flowing abaya captures the essence of desert twilight. The intricate embroidery along the sleeves and hem creates a symphony of sophistication.',
    fabric: 'Premium Japanese Crepe, Silk lining, Hand-embroidered details',
    measurements: 'Model wears size M. Length: 140cm (size M). Available in custom lengths upon request.',
    images: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800',
    ],
    colors: [
      { name: 'Midnight Black', hex: '#1a1a1a' },
      { name: 'Desert Sand', hex: '#d4bdac' },
      { name: 'Deep Burgundy', hex: '#3b0014' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Abayas',
  },
  {
    id: 'bs-002',
    name: 'Moonlight Kaftan',
    price: 1000,
    description: 'Ethereal and timeless, this kaftan embodies luxury in its purest form. Perfect for special occasions when you want to make an unforgettable impression.',
    fabric: 'Italian Silk, Crystal embellishments, Pearl buttons',
    measurements: 'Oversized fit. One size fits most. Length: 145cm.',
    images: [
      'https://images.unsplash.com/photo-1445205170230-053b73816037?w=800',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
    ],
    colors: [
      { name: 'Pearl White', hex: '#f5f5f0' },
      { name: 'Champagne', hex: '#f7e7ce' },
      { name: 'Rose Gold', hex: '#c19086' },
    ],
    sizes: ['One Size'],
    category: 'Kaftans',
  },
  {
    id: 'bs-003',
    name: 'Oasis Evening Gown',
    price: 1000,
    description: 'Inspired by the serene beauty of hidden desert oases, this evening gown features cascading layers that move like water in moonlight.',
    fabric: 'French Tulle, Swarovski crystals, Duchess satin lining',
    measurements: 'Fitted bodice, flowing skirt. Length: 160cm (size M). Train: 30cm.',
    images: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800',
      'https://images.unsplash.com/photo-1445205170230-053b73816037?w=800',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800',
    ],
    colors: [
      { name: 'Dusty Blue', hex: '#92aac1' },
      { name: 'Blush Pink', hex: '#e8c4c4' },
      { name: 'Sage Green', hex: '#9caf88' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Evening Wear',
  },
  {
    id: 'bs-004',
    name: 'Sultan Signature Coat',
    price: 1000,
    description: 'A statement piece that commands attention. This structured coat features our signature geometric patterns inspired by traditional Islamic art.',
    fabric: 'Virgin Wool blend, Silk lining, Mother-of-pearl buttons',
    measurements: 'Structured fit. Length: 110cm (size M). Shoulder width: 42cm.',
    images: [
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
    ],
    colors: [
      { name: 'Royal Purple', hex: '#6620a2' },
      { name: 'Classic Black', hex: '#1a1a1a' },
      { name: 'Clay Red', hex: '#8e4233' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Coats',
  },
  {
    id: 'bs-005',
    name: 'Mirage Two-Piece Set',
    price: 1000,
    description: 'Modern elegance meets traditional craftsmanship. This versatile set can be worn together or as separate statement pieces.',
    fabric: 'Organic Cotton blend, Linen accents, Natural dyes',
    measurements: 'Top length: 70cm, Skirt length: 95cm (size M). Relaxed fit.',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800',
      'https://images.unsplash.com/photo-1445205170230-053b73816037?w=800',
    ],
    colors: [
      { name: 'Natural Stone', hex: '#d4bdac' },
      { name: 'Terracotta', hex: '#c67c4e' },
      { name: 'Ocean Blue', hex: '#4a7c8a' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Sets',
  },
  {
    id: 'bs-006',
    name: 'Dune Draped Dress',
    price: 1000,
    description: 'Fluid and feminine, this draped dress moves with grace and intention. The asymmetric hem creates a dynamic silhouette.',
    fabric: 'Modal Jersey, Stretch lining, Invisible zipper',
    measurements: 'Length varies from 120cm to 140cm due to draping. True to size.',
    images: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800',
    ],
    colors: [
      { name: 'Wine', hex: '#722f37' },
      { name: 'Forest', hex: '#228b22' },
      { name: 'Midnight', hex: '#191970' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'Dresses',
  },
]

export const categories = ['All', 'Abayas', 'Kaftans', 'Evening Wear', 'Coats', 'Sets', 'Dresses']
