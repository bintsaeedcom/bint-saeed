/**
 * Official House of Artisans listings — tourism and government cultural authority.
 * @see https://visitabudhabi.ae/en/things-to-do/culture/heritage/house-of-artisans
 * @see https://abudhabiculture.ae/en/cultural-sites/culture-centers/house-of-artisans
 */
export const HOUSE_OF_ARTISANS_VISIT_ABU_DHABI_URL =
  'https://visitabudhabi.ae/en/things-to-do/culture/heritage/house-of-artisans' as const

export const HOUSE_OF_ARTISANS_ABU_DHABI_CULTURE_URL =
  'https://abudhabiculture.ae/en/cultural-sites/culture-centers/house-of-artisans' as const

/** @deprecated Use HOUSE_OF_ARTISANS_VISIT_ABU_DHABI_URL */
export const HOUSE_OF_ARTISANS_URL = HOUSE_OF_ARTISANS_VISIT_ABU_DHABI_URL

/** Analytics event for outbound House of Artisans clicks; distinguish destinations via event_label. */
export const HOUSE_OF_ARTISANS_ANALYTICS_EVENT = 'click_house_of_artisans' as const

export const HOUSE_OF_ARTISANS_ANALYTICS_LABELS = {
  visitAbuDhabi: 'visitabudhabi_house_of_artisans',
  abuDhabiCulture: 'abudhabi_culture_house_of_artisans',
} as const
