/**
 * Non-translatable brand and place names — use in all locales (Latin script).
 * Never render as "daughter of Saeed", "father of gazelles", etc.
 */
export const BRAND_NAME = 'Bint Saeed'
export const CITY_NAME = 'Abu Dhabi'
export const COUNTRY_NAME = 'United Arab Emirates'
export const MADE_IN_PHRASE = `${CITY_NAME}, ${COUNTRY_NAME}`

/** Normalise legacy spellings to the official place name. */
export function normalizePlaceNames(text: string): string {
  return text
    .replace(/\bAbu Dhabi\b/g, CITY_NAME)
    .replace(/\bAbu Dhabi\b/g, CITY_NAME)
    .replace(/\bAbu Dhabí\b/g, CITY_NAME)
}
