import type { AppLocale } from '@/lib/i18n/routing'
import { localizedPath } from '@/lib/i18n/routing'

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
    '阿联酋传统工艺',
    'Al Talli',
    'Al Khous',
    'Sadu',
    '金面罩',
    '海湾金面具',
  ],
  ru: [
    'наследие ОАЭ',
    'эмиратское наследие',
    'наследие Абу-Даби',
    'эмиратские ремёсла',
    'Al Talli',
    'Al Khous',
    'Sadu',
    'баттула',
    'золотая маска бурки',
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
}

export function getHeritageHubDiscoveryKeywords(locale: AppLocale): string[] {
  const local = LOCAL_INTENT[locale] ?? []
  if (locale === 'en') return [...HERITAGE_HUB_DISCOVERY_KEYWORDS_EN]
  const merged = [...local, ...HERITAGE_HUB_DISCOVERY_KEYWORDS_EN]
  return [...new Set(merged)]
}
