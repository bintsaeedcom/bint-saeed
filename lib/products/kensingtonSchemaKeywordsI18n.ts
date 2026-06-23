import type { AppLocale } from '@/lib/i18n/routing'
import {
  KENSINGTON_EXCLUSIVE_KEYWORDS_ID,
} from '@/lib/products/abayaSchemaKeywordsId'
import {
  KENSINGTON_EXCLUSIVE_KEYWORDS_MS,
} from '@/lib/products/abayaSchemaKeywordsMs'

function kw(
  en: string,
  ar: string,
  fr: string,
  it: string,
  es: string,
  ru: string,
  zh: string,
  de: string,
  nl: string,
  pt: string,
): Record<AppLocale, string> {
  return { en, ar, fr, it, es, ru, zh, de, nl, pt, id: en, ms: en }
}

type KwRow = [string, string, string, string, string, string, string, string, string, string]

function rowsToKw(rows: KwRow[]): Record<AppLocale, string>[] {
  return rows.map(([en, ar, fr, it, es, ru, zh, de, nl, pt]) =>
    kw(en, ar, fr, it, es, ru, zh, de, nl, pt),
  )
}

const ABAYA_TYPE: Record<AppLocale, string> = {
  en: 'abaya',
  ar: 'عباية',
  fr: 'abaya',
  it: 'abaya',
  es: 'abaya',
  ru: 'абайя',
  zh: '阿巴亚',
  de: 'Abaya',
  nl: 'abaya',
  pt: 'abaya',
  id: 'abaya',
  ms: 'abaya',
}

const KENSINGTON_EXCLUSIVE_ROWS: KwRow[] = [
  ['Kensington Abaya', 'عباية Kensington', 'Abaya Kensington', 'Abaya Kensington', 'Abaya Kensington', 'Абайя Kensington', 'Kensington 阿巴亚', 'Kensington Abaya', 'Kensington abaya', 'Abaya Kensington'],
  ['Bint Saeed Kensington Abaya', 'عباية Kensington من Bint Saeed', 'Abaya Kensington Bint Saeed', 'Abaya Kensington Bint Saeed', 'Abaya Kensington Bint Saeed', 'Абайя Kensington Bint Saeed', 'Bint Saeed Kensington 阿巴亚', 'Bint Saeed Kensington Abaya', 'Bint Saeed Kensington abaya', 'Abaya Kensington Bint Saeed'],
  ['Deep Black abaya', 'عباية أسود عميق', 'Abaya noir profond', 'Abaya nero profondo', 'Abaya negro profundo', 'Абайя глубокий чёрный', '深黑阿巴亚', 'Tiefschwarze Abaya', 'Diepzwarte abaya', 'Abaya preto profundo'],
  ['BS-AB-003', 'BS-AB-003', 'BS-AB-003', 'BS-AB-003', 'BS-AB-003', 'BS-AB-003', 'BS-AB-003', 'BS-AB-003', 'BS-AB-003', 'BS-AB-003'],
  ['structured abaya', 'عباية منظمة', 'abaya structurée', 'abaya strutturata', 'abaya estructurada', 'структурированная абайя', '结构化阿巴亚', 'strukturierte Abaya', 'gestructureerde abaya', 'abaya estruturada'],
  ['tailored abaya', 'عباية مفصّلة', 'abaya sur mesure', 'abaya sartoriale', 'abaya a medida', 'пошитая абайя', '定制剪裁阿巴亚', 'maßgeschneiderte Abaya', 'getailleerde abaya', 'abaya sob medida'],
  ['blazer abaya', 'عباية بليزر', 'abaya blazer', 'abaya blazer', 'abaya blazer', 'абайя-блейзер', '西装阿巴亚', 'Blazer-Abaya', 'blazer abaya', 'abaya blazer'],
  ['blazer-inspired abaya', 'عباية مستوحاة من البليزر', 'abaya inspirée du blazer', 'abaya ispirata al blazer', 'abaya inspirada en el blazer', 'абайя в стиле блейзера', '西装灵感阿巴亚', 'blazer-inspirierte Abaya', 'blazer-geïnspireerde abaya', 'abaya inspirada no blazer'],
  ['black blazer abaya', 'عباية بليزر سوداء', 'abaya blazer noire', 'abaya blazer nera', 'abaya blazer negra', 'чёрная абайя-блейзер', '黑色西装阿巴亚', 'schwarze Blazer-Abaya', 'zwarte blazer abaya', 'abaya blazer preta'],
  ['long blazer abaya', 'عباية بليزر طويلة', 'abaya blazer longue', 'abaya blazer lunga', 'abaya blazer larga', 'длинная абайя-блейзер', '长款西装阿巴亚', 'lange Blazer-Abaya', 'lange blazer abaya', 'abaya blazer comprida'],
  ['premium black abaya', 'عباية سوداء راقية', 'abaya noire premium', 'abaya nera premium', 'abaya negra premium', 'премиальная чёрная абайя', '高端黑色阿巴亚', 'Premium-Schwarz-Abaya', 'premium zwarte abaya', 'abaya preta premium'],
  ['black abaya with pockets', 'عباية سوداء بجيوب', 'abaya noire avec poches', 'abaya nera con tasche', 'abaya negra con bolsillos', 'чёрная абайя с карманами', '带口袋黑色阿巴亚', 'schwarze Abaya mit Taschen', 'zwarte abaya met zakken', 'abaya preta com bolsos'],
  ['business abaya', 'عباية للعمل', 'abaya business', 'abaya business', 'abaya de negocios', 'деловая абайя', '商务阿巴亚', 'Business-Abaya', 'business abaya', 'abaya business'],
  ['business women abaya', 'عباية للسيدات العاملات', 'abaya femmes d’affaires', 'abaya donne in carriera', 'abaya mujeres de negocios', 'абайя для деловых женщин', '职业女性阿巴亚', 'Abaya für Businessfrauen', 'business women abaya', 'abaya mulheres de negócios'],
  ['woven trim abaya', 'عباية بحافة منسوجة', 'abaya à galon tissé', 'abaya con bordo tessuto', 'abaya con borde tejido', 'абайя с тканым декором', '编织饰边阿巴亚', 'Abaya mit Webbesatz', 'geweven afwerking abaya', 'abaya com acabamento tecido'],
]
const KENSINGTON_EXCLUSIVE_I18N = rowsToKw(KENSINGTON_EXCLUSIVE_ROWS)

/** Kensington-only schema keywords, plus optional colour variants. */
export function getLocalizedKensingtonExclusiveKeywords(
  locale: AppLocale,
  colorName?: string,
): string[] {
  const terms = new Set<string>(
    locale === 'id'
      ? KENSINGTON_EXCLUSIVE_KEYWORDS_ID
      : locale === 'ms'
        ? KENSINGTON_EXCLUSIVE_KEYWORDS_MS
        : KENSINGTON_EXCLUSIVE_I18N.map((row) => row[locale]),
  )
  const color = colorName?.trim()
  if (color) {
    terms.add(color)
    terms.add(`${color} ${ABAYA_TYPE[locale]}`)
  }
  return [...terms]
}
