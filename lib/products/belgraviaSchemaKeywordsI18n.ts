import type { AppLocale } from '@/lib/i18n/routing'
import { BRAND_NAME } from '@/lib/i18n/brandProperNouns'
import { indonesiaKeywordFromEn } from '@/lib/i18n/indonesiaKeywordFromEn'
import { malaysiaKeywordFromEn } from '@/lib/i18n/malaysiaKeywordFromEn'

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
  id?: string,
  ms?: string,
): Record<AppLocale, string> {
  return { en, ar, fr, it, es, ru, zh, de, nl, pt, id: id ?? indonesiaKeywordFromEn(en), ms: ms ?? malaysiaKeywordFromEn(en) }
}

type KwRow = [string, string, string, string, string, string, string, string, string, string, string?]

function rowsToKw(rows: KwRow[]): Record<AppLocale, string>[] {
  return rows.map(([en, ar, fr, it, es, ru, zh, de, nl, pt, id]) =>
    kw(en, ar, fr, it, es, ru, zh, de, nl, pt, id),
  )
}

const ABAYA_TYPE = kw('abaya', 'عباية', 'abaya', 'abaya', 'abaya', 'абайя', '阿巴亚', 'Abaya', 'abaya', 'abaya', 'abaya')

const BELGRAVIA_EXCLUSIVE_ROWS: KwRow[] = [
  ['Belgravia Abaya', 'عباية Belgravia', 'Abaya Belgravia', 'Abaya Belgravia', 'Abaya Belgravia', 'Абайя Belgravia', 'Belgravia 阿巴亚', 'Belgravia Abaya', 'Belgravia abaya', 'Abaya Belgravia', 'Abaya Belgravia'],
  ['Bint Saeed Belgravia Abaya', 'عباية Belgravia من Bint Saeed', 'Abaya Belgravia Bint Saeed', 'Abaya Belgravia Bint Saeed', 'Abaya Belgravia Bint Saeed', 'Абайя Belgravia Bint Saeed', 'Bint Saeed Belgravia 阿巴亚', 'Bint Saeed Belgravia Abaya', 'Bint Saeed Belgravia abaya', 'Abaya Belgravia Bint Saeed', 'Abaya Belgravia Bint Saeed'],
  ['Deep Black abaya', 'عباية أسود عميق', 'Abaya noir profond', 'Abaya nero profondo', 'Abaya negro profundo', 'Абайя глубокий чёрный', '深黑阿巴亚', 'Tiefschwarze Abaya', 'Diepzwarte abaya', 'Abaya preto profundo', 'abaya hitam pekat'],
  ['navy blue abaya', 'عباية كحلية', 'abaya bleu marine', 'abaya blu navy', 'abaya azul marino', 'тёмно-синяя абайя', '藏青色阿巴亚', 'marineblaue Abaya', 'marineblauwe abaya', 'abaya azul-marinho', 'abaya biru navy'],
  ['BS-AB-005', 'BS-AB-005', 'BS-AB-005', 'BS-AB-005', 'BS-AB-005', 'BS-AB-005', 'BS-AB-005', 'BS-AB-005', 'BS-AB-005', 'BS-AB-005', 'BS-AB-005'],
]
const BELGRAVIA_EXCLUSIVE_I18N = rowsToKw(BELGRAVIA_EXCLUSIVE_ROWS)

/** Belgravia-only schema keywords, plus optional colour variants. */
export function getLocalizedBelgraviaExclusiveKeywords(
  locale: AppLocale,
  colorName?: string,
): string[] {
  const terms = new Set<string>()
  for (const row of BELGRAVIA_EXCLUSIVE_I18N) {
    terms.add(row[locale])
  }
  const color = colorName?.trim()
  if (color) {
    terms.add(color)
    terms.add(`${color} ${ABAYA_TYPE[locale]}`)
  }
  return [...terms]
}
