import type { PdpDetailGroup } from '@/lib/products/pdpIntroRich'

const COVENT_GARDEN_SET_COMPOSITION: PdpDetailGroup[] = [
  {
    title: 'Jacket',
    items: [
      'Outer: 80% Polyester, 20% Viscose',
      'Lining: 70% Polyester, 30% Viscose',
    ],
  },
  {
    title: 'Dress',
    items: [
      'Outer: 80% Polyester, 20% Viscose',
      'Lining: 70% Polyester, 30% Viscose',
    ],
  },
]

function coventGardenColourLine(colorName?: string): string {
  if (!colorName) return 'Colour: Burgundy, Deep Black, or Navy Blue'
  if (colorName.toLowerCase().includes('black')) return 'Colour: Deep Black'
  return `Colour: ${colorName}`
}

export function buildCoventGardenSignatureSetDetailGroups(colorName?: string): PdpDetailGroup[] {
  const colourLine = coventGardenColourLine(colorName)

  return [
    {
      title: 'Jacket',
      items: [
        'Tailored short-sleeve jacket with a refined contemporary silhouette',
        'Round neckline',
        'Front closure with Bint Saeed signature gold-tone Knotted Line buttons',
        'Two front pockets with Bint Saeed signature Al Khous-inspired woven pocket flaps',
        'Light shoulder padding for subtle structure',
        'Fully lined with a soft crepe lining for exceptional comfort and a smooth feel',
        colourLine,
      ],
    },
    {
      title: 'Dress',
      items: [
        'Coordinating fitted maxi dress',
        'Round neckline',
        'Concealed back zip closure',
        'Two hidden side seam pockets',
        'Fully lined with a soft crepe lining for exceptional comfort and a smooth feel',
        colourLine,
      ],
    },
  ]
}

export const COVENT_GARDEN_SIGNATURE_SET_COMPOSITION_GROUPS = COVENT_GARDEN_SET_COMPOSITION

export const COVENT_GARDEN_SIGNATURE_SET_CARE = [
  'Professional dry clean recommended. Gentle machine wash at 30°C if needed.',
] as const

export const COVENT_GARDEN_SIGNATURE_SET_FIT_AND_SIZE = [
  'Available sizes: XS, S, M, L, XL',
  'Jacket length: 69 cm / 27.2 inches',
  'Dress length: 138 cm / 54.5 inches',
  'Model height: 155 cm / 61 inches',
  'Model wears size XS',
  'Dress length can be adjusted upon request',
] as const

export const COVENT_GARDEN_SIGNATURE_SET_ORIGIN = [
  'Made in Abu Dhabi, United Arab Emirates',
] as const
