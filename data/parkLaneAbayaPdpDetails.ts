import type { AppLocale } from '@/lib/i18n/routing'
import {
  A_LINE_ABAYA_SILHOUETTE_LINE,
  PDP_COLOUR_TITLE,
  PDP_SILHOUETTE_TITLE,
} from '@/lib/products/pdpFeatureSectionTitles'
import { getHouseCodesDetailGroup } from '@/lib/products/pdpHouseCodesGroupsI18n'
import type { PdpDetailGroup } from '@/lib/products/pdpIntroRich'

export const PARK_LANE_SILHOUETTE_ITEMS = [
  A_LINE_ABAYA_SILHOUETTE_LINE,
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
  A_LINE_ABAYA_SILHOUETTE_LINE,
  'Designed to be worn open or closed',
  'Model height: 155 cm / 5\'1"',
  'Model wears size XS',
  'Custom length available upon request',
] as const

export const PARK_LANE_ORIGIN = ['Made in Abu Dhabi, United Arab Emirates'] as const

export function buildParkLaneAbayaDetailGroups(locale: AppLocale = 'en'): PdpDetailGroup[] {
  return [
    {
      title: PDP_SILHOUETTE_TITLE[locale] ?? PDP_SILHOUETTE_TITLE.en,
      items: [...PARK_LANE_SILHOUETTE_ITEMS],
    },
    getHouseCodesDetailGroup('knotted-line-emblem', locale),
    {
      title: PDP_COLOUR_TITLE[locale] ?? PDP_COLOUR_TITLE.en,
      items: [...PARK_LANE_COLOUR_ITEMS],
    },
  ]
}
