/**
 * Geo detection for language & currency.
 * Used by LanguageContext, CurrencyContext, and LocaleConfirmPopup.
 */

import { isLikelySearchBotUserAgent } from '@/lib/bots/isLikelySearchBot'

export interface GeoData {
  countryCode: string
  countryName: string
  city?: string
  suggestedLanguage: string
  suggestedCurrency: string
}

const countryToLanguage: Record<string, string> = {
  // Arabic
  AE: 'ar', SA: 'ar', KW: 'ar', QA: 'ar', BH: 'ar', OM: 'ar', EG: 'ar', JO: 'ar', LB: 'ar', SY: 'ar', IQ: 'ar', YE: 'ar',
  // Mandarin
  CN: 'zh', TW: 'zh', HK: 'zh', SG: 'zh',
  // Russian
  RU: 'ru', KZ: 'ru', BY: 'ru', KG: 'ru', TJ: 'ru', TM: 'ru', UZ: 'ru',
  // Italian
  IT: 'it', SM: 'it',
  // German (Germany, Austria, Switzerland)
  DE: 'de', AT: 'de', CH: 'de',
  // French
  FR: 'fr', BE: 'fr', LU: 'fr', MC: 'fr',
  // Dutch
  NL: 'nl',
  // Portuguese
  PT: 'pt', BR: 'pt',
  // Spanish
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', PE: 'es', VE: 'es', CL: 'es', EC: 'es', GT: 'es', CU: 'es', BO: 'es', DO: 'es', HN: 'es', PY: 'es', SV: 'es', NI: 'es', CR: 'es', PA: 'es', UY: 'es', PR: 'es',
  // Indonesian
  ID: 'id',
  // Malay
  MY: 'ms',
  // English
  GB: 'en', US: 'en', AU: 'en', CA: 'en', IE: 'en', NZ: 'en', IN: 'en', ZA: 'en', PH: 'en', NG: 'en', PK: 'en', BD: 'en',
}

const countryToCurrency: Record<string, string> = {
  AE: 'AED', SA: 'SAR', KW: 'KWD', QA: 'QAR', BH: 'BHD', OM: 'OMR',
  US: 'USD', GB: 'GBP', CH: 'CHF',
  CA: 'CAD', SG: 'SGD', BN: 'BND', MY: 'MYR', MA: 'MAD', NG: 'NGN', ID: 'IDR',
  KZ: 'KZT', AZ: 'AZN', UZ: 'UZS', HK: 'HKD',
  DE: 'EUR', AT: 'EUR', FR: 'EUR', IT: 'EUR', ES: 'EUR', NL: 'EUR', BE: 'EUR', LU: 'EUR', MC: 'EUR',
}

const SUPPORTED_LANGUAGES = ['en', 'ar', 'zh', 'ru', 'it', 'de', 'fr', 'es', 'nl', 'pt', 'id', 'ms']
const LANGUAGES_FOR_CONFIRM_POPUP = ['ar', 'zh', 'ru', 'it', 'de', 'fr', 'es', 'nl', 'pt', 'id', 'ms']

export async function fetchGeoData(): Promise<GeoData | null> {
  if (typeof navigator !== 'undefined' && isLikelySearchBotUserAgent(navigator.userAgent)) {
    return null
  }
  try {
    const res = await fetch('https://ipapi.co/json/')
    const data = await res.json()
    const countryCode = (data.country_code || '').toUpperCase()
    if (!countryCode) return null

    const suggestedLanguage = countryToLanguage[countryCode] || 'en'
    const suggestedCurrency = countryToCurrency[countryCode] || 'AED'

    return {
      countryCode,
      countryName: data.country_name || '',
      city: data.city,
      suggestedLanguage: SUPPORTED_LANGUAGES.includes(suggestedLanguage) ? suggestedLanguage : 'en',
      suggestedCurrency,
    }
  } catch {
    return null
  }
}

export const REGIONAL_EXPERIENCE_KEY = 'bint-saeed-regional-experience'

export function hasRegionalExperienceChoice(): boolean {
  if (typeof window === 'undefined') return true
  if (localStorage.getItem(REGIONAL_EXPERIENCE_KEY)) return true
  if (localStorage.getItem('bint-saeed-locale-confirm-dismissed')) return true
  if (localStorage.getItem('bint-saeed-tailor-experience')) return true
  if (localStorage.getItem('bint-saeed-location-consent')) return true
  if (localStorage.getItem('bint-saeed-location-dismissed')) return true
  return false
}

export function persistRegionalExperienceChoice(choice: 'confirmed' | 'changed' | 'dismissed') {
  localStorage.setItem(REGIONAL_EXPERIENCE_KEY, choice)
  localStorage.setItem('bint-saeed-locale-confirm-dismissed', 'true')
  if (choice === 'dismissed') {
    localStorage.setItem('bint-saeed-location-dismissed', 'true')
  } else {
    localStorage.setItem('bint-saeed-tailor-experience', 'accepted')
    localStorage.setItem('bint-saeed-location-consent', 'true')
  }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('regional-experience-closed'))
  }
}

/** English display names for the regional popup (copy is always English). */
export const languageLabelsEnglish: Record<string, string> = {
  en: 'English',
  ar: 'Arabic',
  zh: 'Chinese',
  ru: 'Russian',
  it: 'Italian',
  de: 'German',
  fr: 'French',
  es: 'Spanish',
  nl: 'Dutch',
  pt: 'Portuguese',
  id: 'Indonesian',
  ms: 'Malay',
}

/** Local language offered as the secondary button (geo region or current URL locale). */
export function resolveRegionalLocalLanguage(geo: GeoData, currentLocale: string): string | null {
  if (geo.suggestedLanguage !== 'en') return geo.suggestedLanguage
  if (currentLocale !== 'en' && LANGUAGES_FOR_CONFIRM_POPUP.includes(currentLocale)) {
    return currentLocale
  }
  return null
}

/** Show regional popup once when geo or URL suggests a non-English experience. */
export function shouldShowRegionalExperiencePopup(geo: GeoData, currentLocale: string): boolean {
  if (hasRegionalExperienceChoice()) return false
  if (geo.suggestedLanguage !== 'en') return true
  return currentLocale !== 'en'
}

export function shouldShowLocaleConfirmPopup(detectedLang: string): boolean {
  return LANGUAGES_FOR_CONFIRM_POPUP.includes(detectedLang)
}

export const languageLabels: Record<string, string> = {
  en: 'English',
  ar: 'العربية',
  zh: '中文',
  ru: 'Русский',
  it: 'Italiano',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  nl: 'Nederlands',
  pt: 'Português',
  id: 'Bahasa Indonesia',
  ms: 'Bahasa Melayu',
}

// SEO keyword translations per language (for hidden schema)
export const seoKeywordTranslations: Record<string, Record<string, string>> = {
  ar: {
    luxuryAbayaUAE: 'عباية فاخرة الإمارات',
    abayaAbuDhabi: 'عباية أبوظبي',
    elegantAbayas: 'عبايات أنيقة',
    designerAbaya: 'عباية مصمم',
    luxuryModestFashion: 'أزياء محتشمة فاخرة',
    blackAbayaDubai: 'عباية سوداء دبي',
    modernAbayaUAE: 'عباية عصرية الإمارات',
    abaya: 'عباية',
    dubaiAbaya: 'عباية دبي',
    abayaStyle: 'ستايل عباية',
    abayaBrand: 'ماركة عباية',
    silkAbaya: 'عباية حرير',
    bestAbaya: 'أفضل عباية',
    abayaDesign: 'تصميم عباية',
    laceAbaya: 'عباية دانتيل',
    purpleAbaya: 'عباية بنفسجية',
    greenAbaya: 'عباية خضراء',
    beigeAbaya: 'عباية بيج',
    nudeAbaya: 'عباية نود',
    pinkAbaya: 'عباية وردية',
    navyBlueAbaya: 'عباية زرقاء',
  },
  fr: {
    luxuryAbayaUAE: 'abaya de luxe EAU',
    abayaAbuDhabi: 'abaya Abou Dhabi',
    elegantAbayas: 'abayas élégantes',
    designerAbaya: 'abaya designer',
    luxuryModestFashion: 'mode modeste de luxe',
    blackAbayaDubai: 'abaya noire Dubaï',
    modernAbayaUAE: 'abaya moderne EAU',
    abaya: 'abaya',
    dubaiAbaya: 'abaya Dubaï',
    abayaStyle: 'style abaya',
    abayaBrand: 'marque abaya',
    silkAbaya: 'abaya soie',
    bestAbaya: 'meilleure abaya',
    abayaDesign: 'design abaya',
    laceAbaya: 'abaya dentelle',
    purpleAbaya: 'abaya violette',
    greenAbaya: 'abaya verte',
    beigeAbaya: 'abaya beige',
    nudeAbaya: 'abaya nude',
    pinkAbaya: 'abaya rose',
    navyBlueAbaya: 'abaya bleu marine',
  },
  it: {
    luxuryAbayaUAE: 'abaya lusso EAU',
    abayaAbuDhabi: 'abaya Abu Dhabi',
    elegantAbayas: 'abaya eleganti',
    designerAbaya: 'abaya designer',
    luxuryModestFashion: 'moda modesta lusso',
    blackAbayaDubai: 'abaya nera Dubai',
    modernAbayaUAE: 'abaya moderna EAU',
    abaya: 'abaya',
    dubaiAbaya: 'abaya Dubai',
    abayaStyle: 'stile abaya',
    abayaBrand: 'marca abaya',
    silkAbaya: 'abaya seta',
    bestAbaya: 'migliore abaya',
    abayaDesign: 'design abaya',
    laceAbaya: 'abaya pizzo',
    purpleAbaya: 'abaya viola',
    greenAbaya: 'abaya verde',
    beigeAbaya: 'abaya beige',
    nudeAbaya: 'abaya nude',
    pinkAbaya: 'abaya rosa',
    navyBlueAbaya: 'abaya blu navy',
  },
  es: {
    luxuryAbayaUAE: 'abaya de lujo EAU',
    abayaAbuDhabi: 'abaya Abu Dhabi',
    elegantAbayas: 'abayas elegantes',
    designerAbaya: 'abaya de diseñador',
    luxuryModestFashion: 'moda modesta de lujo',
    blackAbayaDubai: 'abaya negra Dubái',
    modernAbayaUAE: 'abaya moderna EAU',
    abaya: 'abaya',
    dubaiAbaya: 'abaya Dubái',
    abayaStyle: 'estilo abaya',
    abayaBrand: 'marca abaya',
    silkAbaya: 'abaya seda',
    bestAbaya: 'mejor abaya',
    abayaDesign: 'diseño abaya',
    laceAbaya: 'abaya encaje',
    purpleAbaya: 'abaya púrpura',
    greenAbaya: 'abaya verde',
    beigeAbaya: 'abaya beige',
    nudeAbaya: 'abaya nude',
    pinkAbaya: 'abaya rosa',
    navyBlueAbaya: 'abaya azul marino',
  },
  ru: {
    luxuryAbayaUAE: 'люкс абайя ОАЭ',
    abayaAbuDhabi: 'абайя Абу-Даби',
    elegantAbayas: 'элегантные абайи',
    designerAbaya: 'дизайнерская абайя',
    luxuryModestFashion: 'люкс скромная мода',
    blackAbayaDubai: 'черная абайя Дубай',
    modernAbayaUAE: 'современная абайя ОАЭ',
    abaya: 'абайя',
    dubaiAbaya: 'абайя Дубай',
    abayaStyle: 'стиль абайя',
    abayaBrand: 'бренд абайя',
    silkAbaya: 'шелковая абайя',
    bestAbaya: 'лучшая абайя',
    abayaDesign: 'дизайн абайя',
    laceAbaya: 'кружевная абайя',
    purpleAbaya: 'фиолетовая абайя',
    greenAbaya: 'зеленая абайя',
    beigeAbaya: 'бежевая абайя',
    nudeAbaya: 'телесная абайя',
    pinkAbaya: 'розовая абайя',
    navyBlueAbaya: 'темно-синяя абайя',
  },
  zh: {
    luxuryAbayaUAE: '奢华阿巴亚阿联酋',
    abayaAbuDhabi: '阿巴亚阿布扎比',
    elegantAbayas: '优雅阿巴亚',
    designerAbaya: '设计师阿巴亚',
    luxuryModestFashion: '奢华端庄时尚',
    blackAbayaDubai: '迪拜黑色阿巴亚',
    modernAbayaUAE: '现代阿巴亚阿联酋',
    abaya: '阿巴亚',
    dubaiAbaya: '迪拜阿巴亚',
    abayaStyle: '阿巴亚风格',
    abayaBrand: '阿巴亚品牌',
    silkAbaya: '丝绸阿巴亚',
    bestAbaya: '最佳阿巴亚',
    abayaDesign: '阿巴亚设计',
    laceAbaya: '蕾丝阿巴亚',
    purpleAbaya: '紫色阿巴亚',
    greenAbaya: '绿色阿巴亚',
    beigeAbaya: '米色阿巴亚',
    nudeAbaya: '裸色阿巴亚',
    pinkAbaya: '粉色阿巴亚',
    navyBlueAbaya: '藏青色阿巴亚',
  },
  de: {
    luxuryAbayaUAE: 'Luxus-Abaya VAE',
    abayaAbuDhabi: 'Abaya Abu Dhabi',
    elegantAbayas: 'elegante Abayas',
    designerAbaya: 'Designer-Abaya',
    luxuryModestFashion: 'Luxus bescheidene Mode',
    blackAbayaDubai: 'schwarze Abaya Dubai',
    modernAbayaUAE: 'moderne Abaya VAE',
    abaya: 'Abaya',
    dubaiAbaya: 'Abaya Dubai',
    abayaStyle: 'Abaya-Stil',
    abayaBrand: 'Abaya-Marke',
    silkAbaya: 'Seiden-Abaya',
    bestAbaya: 'beste Abaya',
    abayaDesign: 'Abaya-Design',
    laceAbaya: 'Spitzen-Abaya',
    purpleAbaya: 'lila Abaya',
    greenAbaya: 'grüne Abaya',
    beigeAbaya: 'beige Abaya',
    nudeAbaya: 'nude Abaya',
    pinkAbaya: 'rosa Abaya',
    navyBlueAbaya: 'dunkelblaue Abaya',
  },
  id: {
    luxuryAbayaUAE: 'abaya mewah UEA',
    abayaAbuDhabi: 'abaya Abu Dhabi',
    elegantAbayas: 'abaya elegan',
    designerAbaya: 'abaya desainer',
    luxuryModestFashion: 'fashion modest mewah',
    blackAbayaDubai: 'abaya hitam Dubai',
    modernAbayaUAE: 'abaya modern UEA',
    abaya: 'abaya',
    dubaiAbaya: 'abaya Dubai',
    abayaStyle: 'gaya abaya',
    abayaBrand: 'merek abaya',
    silkAbaya: 'abaya sutra',
    bestAbaya: 'abaya terbaik',
    abayaDesign: 'desain abaya',
    laceAbaya: 'abaya renda',
    purpleAbaya: 'abaya ungu',
    greenAbaya: 'abaya hijau',
    beigeAbaya: 'abaya beige',
    nudeAbaya: 'abaya nude',
    pinkAbaya: 'abaya merah muda',
    navyBlueAbaya: 'abaya biru navy',
  },
  ms: {
    luxuryAbayaUAE: 'abaya mewah UAE',
    abayaAbuDhabi: 'abaya Abu Dhabi',
    elegantAbayas: 'abaya elegan',
    designerAbaya: 'abaya desainer',
    luxuryModestFashion: 'fesyen sopan mewah',
    blackAbayaDubai: 'abaya hitam Dubai',
    modernAbayaUAE: 'abaya modern UEA',
    abaya: 'abaya',
    dubaiAbaya: 'abaya Dubai',
    abayaStyle: 'gaya abaya',
    abayaBrand: 'merek abaya',
    silkAbaya: 'abaya sutra',
    bestAbaya: 'abaya terbaik',
    abayaDesign: 'desain abaya',
    laceAbaya: 'abaya renda',
    purpleAbaya: 'abaya ungu',
    greenAbaya: 'abaya hijau',
    beigeAbaya: 'abaya beige',
    nudeAbaya: 'abaya nude',
    pinkAbaya: 'abaya merah muda',
    navyBlueAbaya: 'abaya biru navy',
  },
}
