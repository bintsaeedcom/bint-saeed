import type { AppLocale } from '@/lib/i18n/routing'
import { localizedPath } from '@/lib/i18n/routing'
import { getLocalizedHeritageHubFashionKeywords } from '@/lib/seo/heritageHubDiscoveryKeywordsI18n'

export const HERITAGE_HUB_PATH = '/heritage'

const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

export function heritageHubPageUrl(locale: AppLocale = 'en'): string {
  return `${SITE}${localizedPath(locale, HERITAGE_HUB_PATH)}`
}

export function heritageHubPrimaryImageUrl(): string {
  return `${SITE}/heritage/bint-saeed-abu-dhabi-heritage-al-talli-gold-trim-abaya-fabric.webp`
}

/** Head + long-tail pool for UAE heritage hub (informational / geo / craft). */
export const HERITAGE_HUB_DISCOVERY_KEYWORDS_EN = [
  'UAE heritage',
  'UAE cultural heritage',
  'cultural heritage of UAE',
  'cultural heritage United Arab Emirates',
  'Emirati heritage',
  'Emirati cultural heritage',
  'United Arab Emirates heritage',
  'Abu Dhabi heritage',
  'Abu Dhabi cultural heritage',
  'Abu Dhabi culture',
  'visit Abu Dhabi culture',
  'things to do in Abu Dhabi heritage',
  'Middle Eastern heritage',
  'Middle Eastern crafts',
  'Gulf heritage crafts',
  'Arabian Peninsula crafts',
  'traditional crafts UAE',
  'Emirati traditional crafts',
  'Al Talli',
  'Al Talli embroidery',
  'Al Talli UAE',
  'التلي',
  'UNESCO Al Talli',
  'Al Khous',
  'Al Khous weaving',
  'Khous weaving',
  'khous palm frond',
  'الخوص',
  'palm frond weaving UAE',
  'Sadu',
  'Sadu weaving',
  'Al Sadu',
  'السدو',
  'UNESCO Sadu',
  'Bedouin weaving',
  'battoulah',
  'batula',
  'burqa gold mask',
  'gold burqa mask',
  'Emirati gold mask',
  'Gulf gold mask',
  'UAE burqa mask',
  'البرقع الذهبي',
  'قناع الذهب',
  'Emirati women’s heritage dress',
  'Bint Saeed heritage',
  'Bint Saeed Abu Dhabi',
  'heritage fashion Abu Dhabi',
  'luxury abaya Emirati heritage',
  'Abu Dhabi fashion house',
  'Abu Dhabi fashion',
  'Abu Dhabi culture',
  'Abu Dhabi tradition',
  'Abu Dhabi traditions',
  'UAE culture',
  'UAE traditions',
  'UAE fashion brands',
  'Emirati fashion',
  'heritage fashion Abu Dhabi',
  'Gulf cultural heritage',
  'Gulf fashion heritage',
  'Dubai fashion',
  'Dubai tradition',
  'Dubai traditions',
  'modest fashion UAE',
  'visit Abu Dhabi culture',
] as const

/** Compact locale overlays — entity names stay stable; intent phrases localise. */
const LOCAL_INTENT: Partial<Record<AppLocale, string[]>> = {
  ar: [
    'تراث الإمارات',
    'التراث الثقافي الإماراتي',
    'تراث أبوظبي',
    'حرف إماراتية تقليدية',
    'التلي',
    'الخوص',
    'السدو',
    'البرقع الذهبي',
    'قناع الذهب',
    'تراث بنت سعيد',
  ],
  fr: [
    'patrimoine des EAU',
    'patrimoine émirati',
    'patrimoine d’Abu Dhabi',
    'artisanat émirati',
    'Al Talli',
    'Al Khous',
    'Sadu',
    'battoulah',
    'masque d’or du Golfe',
  ],
  it: [
    'patrimonio Emirati',
    'patrimonio Abu Dhabi',
    'artigianato emiratino',
    'Al Talli',
    'Al Khous',
    'Sadu',
    'battoulah',
    'maschera d’oro del Golfo',
  ],
  es: [
    'patrimonio EAU',
    'patrimonio emiratí',
    'patrimonio Abu Dabi',
    'artesanía emiratí',
    'Al Talli',
    'Al Khous',
    'Sadu',
    'battoulah',
    'máscara de oro del Golfo',
  ],
  de: [
    'Erbe der VAE',
    'emiratisches Erbe',
    'Abu-Dhabi-Erbe',
    'emiratisches Handwerk',
    'Al Talli',
    'Al Khous',
    'Sadu',
    'Battoulah',
    'goldene Burqa-Maske',
  ],
  zh: [
    '阿联酋遗产',
    '阿联酋文化遗产',
    '阿布扎比遗产',
    '阿布扎比文化',
    '阿联酋传统工艺',
    '阿联酋传承工艺',
    'Al Talli',
    'Al Khous',
    'Sadu',
    '金面罩',
    '海湾金面具',
    '贝都因织造',
    '教科文组织遗产',
    '阿布扎比时装品牌',
    'Bint Saeed 传承',
  ],
  ru: [
    'наследие ОАЭ',
    'культурное наследие ОАЭ',
    'эмиратское наследие',
    'наследие Абу-Даби',
    'культура Абу-Даби',
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
    'ближневосточное наследие',
    'модный дом Абу-Даби',
    'Bint Saeed наследие',
    'Bint Saeed Абу-Даби',
  ],
  nl: [
    'erfgoed VAE',
    'Emiratisch erfgoed',
    'Abu Dhabi erfgoed',
    'Emiratisch ambacht',
    'Al Talli',
    'Al Khous',
    'Sadu',
    'battoulah',
    'gouden burqa-masker',
  ],
  pt: [
    'património EAU',
    'património emirati',
    'património Abu Dhabi',
    'artesanato emirati',
    'Al Talli',
    'Al Khous',
    'Sadu',
    'battoulah',
    'máscara de ouro do Golfo',
  ],
  id: [
    'warisan UEA',
    'warisan budaya UEA',
    'budaya Abu Dhabi',
    'tradisi Abu Dhabi',
    'fashion Abu Dhabi',
    'rumah mode Abu Dhabi',
    'merek fashion UEA',
    'fashion Emirati',
    'Al Talli',
    'Al Khous',
    'Sadu',
    'battoulah',
    'Bint Saeed Abu Dhabi',
  ],
  ms: [
    'warisan UAE',
    'warisan budaya UAE',
    'budaya Abu Dhabi',
    'tradisi Abu Dhabi',
    'fesyen Abu Dhabi',
    'rumah fesyen Abu Dhabi',
    'jenama fesyen UAE',
    'fesyen Emirati',
    'Al Talli',
    'Al Khous',
    'Sadu',
    'battoulah',
    'Bint Saeed Abu Dhabi',
  ],
}

export function getHeritageHubDiscoveryKeywords(locale: AppLocale): string[] {
  const fashion = getLocalizedHeritageHubFashionKeywords(locale)
  if (locale === 'en') {
    return [...new Set([...HERITAGE_HUB_DISCOVERY_KEYWORDS_EN, ...fashion])]
  }
  const local = LOCAL_INTENT[locale] ?? []
  const merged = [...local, ...fashion, ...HERITAGE_HUB_DISCOVERY_KEYWORDS_EN]
  return [...new Set(merged)]
}

const SADU_CHAPTER_INTENT: Partial<Record<AppLocale, string[]>> = {
  ru: [
    'Sadu',
    'Al Sadu',
    'Саду',
    'бедуинское ткачество',
    'ткачество Sadu ОАЭ',
    'ЮНЕСКО Sadu',
    'наследие ОАЭ',
    'геометрия пустыни',
    'Bint Saeed Sadu',
  ],
  zh: [
    'Sadu',
    'Al Sadu',
    '贝都因织造',
    '阿联酋 Sadu',
    '教科文组织 Sadu',
    '沙漠几何纹样',
    '阿联酋传承',
    'Bint Saeed Sadu',
  ],
}

const KHOUS_CHAPTER_INTENT: Partial<Record<AppLocale, string[]>> = {
  ru: [
    'Al Khous',
    'Khous weaving',
    'плетение Al Khous',
    'плетение из пальмы ОАЭ',
    'эмиратское плетение',
    'ремесло финиковой пальмы',
    'наследие ОАЭ',
    'Bint Saeed Khous',
  ],
  zh: [
    'Al Khous',
    'Khous weaving',
    '棕榈编织',
    '椰枣棕榈叶编织',
    '阿联酋传统工艺',
    '阿联酋传承',
    'Bint Saeed Khous',
  ],
}

/** Meta keywords for /heritage/sadu — locale overlay without changing page copy. */
export function getSaduChapterDiscoveryKeywords(locale: AppLocale): string[] {
  const base = [
    'Sadu',
    'Al Sadu',
    'السدو',
    'Sadu weaving',
    'Bedouin weaving UAE',
    'UNESCO Sadu',
    'UNESCO Al Sadu',
    'Emirati Sadu',
    'Abu Dhabi heritage',
    'UAE cultural heritage',
    'desert weaving',
    'Bint Saeed heritage',
  ]
  const local = SADU_CHAPTER_INTENT[locale] ?? []
  return [...new Set([...local, ...base])]
}

/** Meta keywords for /heritage/khous — locale overlay without changing page copy. */
export function getKhousChapterDiscoveryKeywords(locale: AppLocale): string[] {
  const base = [
    'Al Khous',
    'Khous weaving',
    'الخوص',
    'palm frond weaving UAE',
    'palm frond weaving Abu Dhabi',
    'Emirati palm weaving',
    'date palm craft UAE',
    'UAE heritage crafts',
    'Abu Dhabi heritage',
    'Emirati traditional crafts',
    'Bint Saeed heritage',
  ]
  const local = KHOUS_CHAPTER_INTENT[locale] ?? []
  return [...new Set([...local, ...base])]
}
