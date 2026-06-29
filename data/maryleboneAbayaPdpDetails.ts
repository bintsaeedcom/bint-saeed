import type { AppLocale } from '@/lib/i18n/routing'
import { PDP_COLOUR_TITLE, PDP_SILHOUETTE_TITLE } from '@/lib/products/pdpFeatureSectionTitles'
import type { PdpDetailGroup } from '@/lib/products/pdpIntroRich'

/** Parent style SKU — colour variants append a suffix (e.g. BS-AB-004-BLK). */
export const MARYLEBONE_ABAYA_STYLE_SKU = 'BS-AB-004' as const

const HOUSE_SIGNATURES_TITLE: Record<AppLocale, string> = {
  en: 'House Signatures',
  ar: 'House Signatures',
  fr: 'House Signatures',
  it: 'House Signatures',
  es: 'House Signatures',
  ru: 'House Signatures',
  zh: 'House Signatures',
  de: 'House Signatures',
  nl: 'House Signatures',
  pt: 'House Signatures',
  id: 'House Signatures',
  ms: 'House Signatures',
}

export const MARYLEBONE_SILHOUETTE_ITEMS = [
  'Graceful A-line abaya',
  'Softly textured crepe with a refined grain',
  'Hidden side seam pockets',
  'Wide cuffs designed for interchangeable Bint Saeed Strands',
  'Includes two removable genuine natural Onyx Strands, one for each cuff',
  'Optional snap button closure',
  'Optional hidden inner label personalisation',
] as const

export const MARYLEBONE_HOUSE_SIGNATURES_ITEMS = [
  'Signature gold-tone Knotted Line details',
  'Signature interchangeable natural stone strands',
  'Crafted in Abu Dhabi, United Arab Emirates',
] as const

export const MARYLEBONE_COMPOSITION_GROUPS: PdpDetailGroup[] = [
  {
    title: 'Abaya',
    items: ['80% Polyester, 20% Viscose'],
  },
  {
    title: 'Strands',
    items: [
      'Genuine natural Onyx gemstones',
      'Faceted gold-plated hematite spacer beads',
      'Signature gold-tone Knotted Line end pieces',
    ],
  },
]

export const MARYLEBONE_CARE = [
  'Remove the Onyx Strands before washing or professional dry cleaning.',
  'Gentle machine wash at 30°C.',
] as const

export const MARYLEBONE_FIT_AND_SIZE = [
  'Graceful A-line silhouette',
  'Designed to be worn open or closed',
  'Model height: 155 cm / 5\'1"',
  'Model wears size XS',
  'Custom length available upon request',
] as const

export const MARYLEBONE_COLOUR_ITEMS = ['Deep Black', 'Navy Blue'] as const

export function buildMaryleboneAbayaDetailGroups(locale: AppLocale = 'en'): PdpDetailGroup[] {
  return [
    {
      title: PDP_SILHOUETTE_TITLE[locale] ?? PDP_SILHOUETTE_TITLE.en,
      items: [...MARYLEBONE_SILHOUETTE_ITEMS],
    },
    {
      title: HOUSE_SIGNATURES_TITLE[locale] ?? HOUSE_SIGNATURES_TITLE.en,
      items: [...MARYLEBONE_HOUSE_SIGNATURES_ITEMS],
    },
    {
      title: PDP_COLOUR_TITLE[locale] ?? PDP_COLOUR_TITLE.en,
      items: [...MARYLEBONE_COLOUR_ITEMS],
    },
  ]
}
