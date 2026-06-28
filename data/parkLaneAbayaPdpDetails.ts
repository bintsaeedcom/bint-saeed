import type { AppLocale } from '@/lib/i18n/routing'
import { getHouseCodesDetailGroup } from '@/lib/products/pdpHouseCodesGroupsI18n'
import type { PdpDetailGroup } from '@/lib/products/pdpIntroRich'

const SILHOUETTE_TITLE: Record<AppLocale, string> = {
  en: 'Silhouette',
  ar: 'القصة',
  fr: 'Silhouette',
  it: 'Silhouette',
  es: 'Silueta',
  ru: 'Силуэт',
  zh: '廓形',
  de: 'Silhouette',
  nl: 'Silhouet',
  pt: 'Silhueta',
  id: 'Siluet',
  ms: 'Siluet',
}

const COLOUR_TITLE: Record<AppLocale, string> = {
  en: 'Colour',
  ar: 'اللون',
  fr: 'Couleur',
  it: 'Colore',
  es: 'Color',
  ru: 'Цвет',
  zh: '颜色',
  de: 'Farbe',
  nl: 'Kleur',
  pt: 'Cor',
  id: 'Warna',
  ms: 'Warna',
}

export const PARK_LANE_SILHOUETTE_ITEMS = [
  'Graceful A-line silhouette',
  'Tailored construction for an elegant drape',
  'Integrated shoulder scarf designed to flow naturally with movement',
  'Hidden side seam pockets',
  'Wide cuffs with removable signature Bint Saeed emblem gold-tone cufflinks',
  'Optional snap button closure',
  'Optional hidden inner label personalisation',
] as const

export const PARK_LANE_COLOUR_ITEMS = [
  'Deep Black',
  'Dark Maroon',
  'Navy Blue',
] as const

export const PARK_LANE_COMPOSITION = ['Outer: 75% Polyester, 25% Viscose'] as const

export const PARK_LANE_CARE = [
  'Remove the signature cufflinks before washing.',
  'Gentle machine wash at 30°C.',
] as const

export const PARK_LANE_FIT_AND_SIZE = [
  'Relaxed A-line silhouette',
  'Designed to be worn open or closed',
  'Model height: 155 cm / 5\'1"',
  'Model wears size XS',
  'Custom length available upon request',
] as const

export const PARK_LANE_ORIGIN = ['Made in Abu Dhabi, United Arab Emirates'] as const

export function buildParkLaneAbayaDetailGroups(locale: AppLocale = 'en'): PdpDetailGroup[] {
  return [
    {
      title: SILHOUETTE_TITLE[locale] ?? SILHOUETTE_TITLE.en,
      items: [...PARK_LANE_SILHOUETTE_ITEMS],
    },
    getHouseCodesDetailGroup('knotted-line-emblem', locale),
    {
      title: COLOUR_TITLE[locale] ?? COLOUR_TITLE.en,
      items: [...PARK_LANE_COLOUR_ITEMS],
    },
  ]
}
