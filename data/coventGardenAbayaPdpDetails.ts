import type { AppLocale } from '@/lib/i18n/routing'
import {
  A_LINE_ABAYA_SILHOUETTE_LINE,
  PDP_COLOUR_TITLE,
  PDP_SILHOUETTE_TITLE,
} from '@/lib/products/pdpFeatureSectionTitles'
import { getHouseCodesDetailGroup } from '@/lib/products/pdpHouseCodesGroupsI18n'
import type { PdpDetailGroup } from '@/lib/products/pdpIntroRich'

export const COVENT_GARDEN_ABAYA_SILHOUETTE_ITEMS = [
  A_LINE_ABAYA_SILHOUETTE_LINE,
  'Open-front design with optional concealed snap-button closure available upon request',
  'Detachable statement sash finished with Bint Saeed’s signature gold-tone emblem pin for multiple styling options',
  'Shoulder epaulettes with signature button detailing',
  'Wide cuffs with heritage woven trim',
  'Fully lined with a soft crepe lining for exceptional comfort and a refined finish',
  'Hidden side seam pockets',
  'Complimentary personalisation available on Bint Saeed’s signature hidden inner label',
] as const

export const COVENT_GARDEN_ABAYA_COLOUR_ITEMS = [
  'Burgundy',
  'Deep Black',
  'Navy Blue',
] as const

/** @deprecated Use grouped silhouette items via buildCoventGardenAbayaDetailGroups */
export const COVENT_GARDEN_ABAYA_PRODUCT_DETAILS = [
  ...COVENT_GARDEN_ABAYA_SILHOUETTE_ITEMS,
  'Available in Burgundy, Deep Black, and Navy Blue',
] as const

export const COVENT_GARDEN_ABAYA_COMPOSITION = [
  'Outer: 80% Polyester, 20% Viscose',
  'Lining: 70% Polyester, 30% Viscose',
] as const

export const COVENT_GARDEN_ABAYA_CARE = [
  'Professional dry clean recommended. Gentle machine wash at 30°C if needed.',
] as const

export const COVENT_GARDEN_ABAYA_FIT_AND_SIZE = [
  A_LINE_ABAYA_SILHOUETTE_LINE,
  'Length: 138 cm / 54.5 inches',
  'Model height: 155 cm / 61 inches',
  'Model wears size XS',
  'Custom length available upon request',
] as const

export const COVENT_GARDEN_ABAYA_ORIGIN = [
  'Made in Abu Dhabi, United Arab Emirates',
] as const

export function buildCoventGardenAbayaDetailGroups(locale: AppLocale = 'en'): PdpDetailGroup[] {
  return [
    {
      title: PDP_SILHOUETTE_TITLE[locale] ?? PDP_SILHOUETTE_TITLE.en,
      items: [...COVENT_GARDEN_ABAYA_SILHOUETTE_ITEMS],
    },
    getHouseCodesDetailGroup('knotted-line-al-talli', locale),
    {
      title: PDP_COLOUR_TITLE[locale] ?? PDP_COLOUR_TITLE.en,
      items: [...COVENT_GARDEN_ABAYA_COLOUR_ITEMS],
    },
  ]
}
