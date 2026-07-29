import type { Language } from '@/lib/i18n/translations'

/**
 * Product-line proper noun — never translate, transliterate, or localize.
 * In NL/DE especially, dictionary words (strand/Strand = beach) cause browser MT
 * and human translators to turn "Strands" into "stranden" / "Stränge".
 * Keep Latin "Strands" in every locale (including AR UI chrome).
 */
export const PRODUCT_LINE_STRANDS = 'Strands' as const
export const PRODUCT_LINE_SIGNATURE_STRANDS = 'Signature Strands' as const

/** Shop / discover verb only — always followed by `PRODUCT_LINE_STRANDS`. */
const SHOP_STRANDS_VERB: Record<Language, string> = {
  en: 'Shop',
  ar: 'تسوّقي',
  fr: 'Découvrir',
  it: 'Scopri',
  es: 'Ver',
  ru: 'Смотреть',
  zh: '选购',
  de: 'Entdecken',
  nl: 'Bekijk',
  pt: 'Ver',
  id: 'Belanja',
  ms: 'Beli',
}

const SEE_ALL_STRANDS_VERB: Record<Language, string> = {
  en: 'Shop all',
  ar: 'تسوّقي كل',
  fr: 'Voir tous les',
  it: 'Vedi tutti i',
  es: 'Ver todos los',
  ru: 'Смотреть все',
  zh: '选购全部',
  de: 'Alle',
  nl: 'Bekijk alle',
  pt: 'Ver todos os',
  id: 'Belanja semua',
  ms: 'Beli semua',
}

function asLanguage(locale: Language | string): Language {
  return (locale in SHOP_STRANDS_VERB ? locale : 'en') as Language
}

/** e.g. "Shop Strands" / "Bekijk Strands" — noun never localized. */
export function shopStrandsCta(locale: Language | string, form: 'title' | 'upper' = 'title'): string {
  const lang = asLanguage(locale)
  // German reads more naturally with the brand noun first.
  if (lang === 'de') {
    return form === 'upper' ? 'STRANDS ENTDECKEN' : 'Strands entdecken'
  }
  const verb = SHOP_STRANDS_VERB[lang]
  if (form === 'upper') {
    // Keep brand noun Latin; uppercasing Latin is safe across locales.
    return `${verb.toLocaleUpperCase(lang === 'zh' ? 'en' : lang)} ${PRODUCT_LINE_STRANDS.toUpperCase()}`
  }
  return `${verb} ${PRODUCT_LINE_STRANDS}`
}

/** e.g. "Shop Signature Strands" — full product-line name, never localized. */
export function shopSignatureStrandsCta(
  locale: Language | string,
  form: 'title' | 'upper' = 'title',
): string {
  const lang = asLanguage(locale)
  if (lang === 'de') {
    return form === 'upper' ? 'SIGNATURE STRANDS ENTDECKEN' : 'Signature Strands entdecken'
  }
  const verb = SHOP_STRANDS_VERB[lang]
  if (form === 'upper') {
    return `${verb.toLocaleUpperCase(lang === 'zh' ? 'en' : lang)} ${PRODUCT_LINE_SIGNATURE_STRANDS.toUpperCase()}`
  }
  return `${verb} ${PRODUCT_LINE_SIGNATURE_STRANDS}`
}

/** e.g. "Shop all Strands" / "Bekijk alle Strands". */
export function shopAllStrandsCta(locale: Language | string, form: 'title' | 'upper' = 'title'): string {
  const lang = asLanguage(locale)
  const verb = SEE_ALL_STRANDS_VERB[lang]
  if (form === 'upper') {
    return `${verb.toLocaleUpperCase(lang === 'zh' ? 'en' : lang)} ${PRODUCT_LINE_STRANDS.toUpperCase()}`
  }
  return `${verb} ${PRODUCT_LINE_STRANDS}`
}

/** Nav / breadcrumb label — always the Latin brand term. */
export function strandsNavLabel(_locale?: Language | string): string {
  return PRODUCT_LINE_STRANDS
}
