/**
 * Hidden meta / schema keywords for Russia & CIS discovery (Yandex, Mail.ru).
 * Does not alter on-page editorial copy.
 */

/** Curated Russian discovery terms — meta keywords + schema only. */
export const RUSSIA_DISCOVERY_KEYWORDS_RU: readonly string[] = [
  'Bint Saeed',
  'Bint Saeed Абу-Даби',
  'абайя Абу-Даби',
  'абайя ОАЭ',
  'абайя Дубай',
  'люксовая абайя',
  'дизайнерская абайя',
  'скромная мода',
  'скромная мода ОАЭ',
  'модный дом Абу-Даби',
  'мода Абу-Даби',
  'мода Дубая',
  'эмиратская мода',
  'бренд абайя Ближний Восток',
  'абайя ручной работы',
  'абайя на заказ',
  'доставка абайя',
  'наследие ОАЭ',
  'культурное наследие ОАЭ',
  'эмиратское наследие',
  'наследие Абу-Даби',
  'культура Абу-Даби',
  'традиции Абу-Даби',
  'эмиратские ремёсла',
  'традиционные ремёсла ОАЭ',
  'Al Talli',
  'Al Khous',
  'Sadu',
  'Al Sadu',
  'баттула',
  'золотая маска бурки',
  'бедуинское ткачество',
  'плетение из пальмы',
  'ЮНЕСКО Al Talli',
  'ЮНЕСКО Sadu',
  'мода наследия Абу-Даби',
  'ближневосточная мода',
  'ближневосточное наследие',
  'модное наследие Залива',
  'культурное наследие Залива',
  'абайя для путешествий',
  'что надеть в Абу-Даби',
  'что надеть в Дубае',
  'что надеть в ОАЭ',
  'натуральный камень украшения',
  'украшения для абайи',
  'украшения для телефона',
  'украшения для сумки',
  'кафтан роскошный',
  'GCC абайя',
  'доставка по всему миру',
  'Яндекс',
  'Yandex',
]

export function russiaDiscoveryKeywordsForLocale(locale: string): string[] {
  if (locale === 'ru') return [...RUSSIA_DISCOVERY_KEYWORDS_RU]
  return [
    'Russian modest fashion',
    'abaya Russia',
    'Bint Saeed Russia',
    'Yandex abaya',
    'UAE heritage Russian',
    'Abu Dhabi abaya Russia',
  ]
}
