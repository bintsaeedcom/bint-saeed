import type { AppLocale } from '@/lib/i18n/routing'

/** Brand name — never translated or explained literally. */
export const BRAND_NAME = 'Bint Saeed'

export type LocaleGeo = {
  city: string
  country: string
  countryShort: string
  madeIn: string
}

/** City and country as commonly written in each locale. */
export const LOCALE_GEO: Record<AppLocale, LocaleGeo> = {
  en: {
    city: 'Abu Dhabi',
    country: 'United Arab Emirates',
    countryShort: 'UAE',
    madeIn: 'Abu Dhabi, United Arab Emirates',
  },
  ar: {
    city: 'أبوظبي',
    country: 'الإمارات العربية المتحدة',
    countryShort: 'الإمارات',
    madeIn: 'أبوظبي، الإمارات العربية المتحدة',
  },
  fr: {
    city: 'Abou Dabi',
    country: 'Émirats arabes unis',
    countryShort: 'EAU',
    madeIn: 'Abou Dabi, Émirats arabes unis',
  },
  it: {
    city: 'Abu Dhabi',
    country: 'Emirati Arabi Uniti',
    countryShort: 'EAU',
    madeIn: 'Abu Dhabi, Emirati Arabi Uniti',
  },
  es: {
    city: 'Abu Dabi',
    country: 'Emiratos Árabes Unidos',
    countryShort: 'EAU',
    madeIn: 'Abu Dabi, Emiratos Árabes Unidos',
  },
  ru: {
    city: 'Абу-Даби',
    country: 'Объединённые Арабские Эмираты',
    countryShort: 'ОАЭ',
    madeIn: 'Абу-Даби, Объединённые Арабские Эмираты',
  },
  zh: {
    city: '阿布扎比',
    country: '阿拉伯联合酋长国',
    countryShort: '阿联酋',
    madeIn: '阿布扎比，阿拉伯联合酋长国',
  },
  de: {
    city: 'Abu Dhabi',
    country: 'Vereinigte Arabische Emirate',
    countryShort: 'VAE',
    madeIn: 'Abu Dhabi, Vereinigte Arabische Emirate',
  },
  nl: {
    city: 'Abu Dhabi',
    country: 'Verenigde Arabische Emiraten',
    countryShort: 'VAE',
    madeIn: 'Abu Dhabi, Verenigde Arabische Emiraten',
  },
  pt: {
    city: 'Abu Dhabi',
    country: 'Emirados Árabes Unidos',
    countryShort: 'EAU',
    madeIn: 'Abu Dhabi, Emirados Árabes Unidos',
  },
  id: {
    city: 'Abu Dhabi',
    country: 'Uni Emirat Arab',
    countryShort: 'UEA',
    madeIn: 'Abu Dhabi, Uni Emirat Arab',
  },
}

/** Heritage craft names — Arabic script in AR; Latin elsewhere. */
export const CRAFT_NAMES: Record<AppLocale, { khous: string; alTalli: string }> = {
  en: { khous: 'Khous', alTalli: 'Al Talli' },
  ar: { khous: 'الخوص', alTalli: 'التلي' },
  fr: { khous: 'Khous', alTalli: 'Al Talli' },
  it: { khous: 'Khous', alTalli: 'Al Talli' },
  es: { khous: 'Khous', alTalli: 'Al Talli' },
  ru: { khous: 'Khous', alTalli: 'Al Talli' },
  zh: { khous: 'Khous', alTalli: 'Al Talli' },
  de: { khous: 'Khous', alTalli: 'Al Talli' },
  nl: { khous: 'Khous', alTalli: 'Al Talli' },
  pt: { khous: 'Khous', alTalli: 'Al Talli' },
  id: { khous: 'Khous', alTalli: 'Al Talli' },
}

/** @deprecated Use `geoForLocale(locale).city` */
export const CITY_NAME = LOCALE_GEO.en.city

/** @deprecated Use `geoForLocale(locale).country` */
export const COUNTRY_NAME = LOCALE_GEO.en.country

/** @deprecated Use `geoForLocale(locale).madeIn` */
export const MADE_IN_PHRASE = LOCALE_GEO.en.madeIn

export function geoForLocale(locale: AppLocale): LocaleGeo {
  return LOCALE_GEO[locale]
}

export function craftsForLocale(locale: AppLocale): { khous: string; alTalli: string } {
  return CRAFT_NAMES[locale]
}

export function madeInForLocale(locale: AppLocale): string {
  return LOCALE_GEO[locale].madeIn
}

export function cityForLocale(locale: AppLocale): string {
  return LOCALE_GEO[locale].city
}
