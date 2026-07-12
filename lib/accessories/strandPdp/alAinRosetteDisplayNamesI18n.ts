import type { AppLocale } from '@/lib/i18n/routing'
import type { AlAinRosetteStrandId } from '@/lib/accessories/strandPdp/alAinRosetteStrandIds'

/** Localized title / FAQ labels for Al Ain Rosette Signature Strands (House Codes stay English). */
export type AlAinRosetteDisplayNames = {
  headline: string
  strandLabel: string
  stoneLabel: string
}

type StoneKey = 'lapis-lazuli' | 'sunstone' | 'rose-quartz' | 'malachite'

const ID_TO_STONE: Record<AlAinRosetteStrandId, StoneKey> = {
  'signature-strand-lapis-lazuli': 'lapis-lazuli',
  'signature-strand-sunstone': 'sunstone',
  'signature-strand-rose-quartz': 'rose-quartz',
  'signature-strand-malachite': 'malachite',
}

const STONE_LABEL: Record<AppLocale, Record<StoneKey, string>> = {
  en: {
    'lapis-lazuli': 'Lapis Lazuli',
    sunstone: 'Sunstone',
    'rose-quartz': 'Rose Quartz',
    malachite: 'Malachite',
  },
  ar: {
    'lapis-lazuli': 'لازورد',
    sunstone: 'حجر الشمس',
    'rose-quartz': 'كوارتز وردي',
    malachite: 'ملاكيت',
  },
  fr: {
    'lapis-lazuli': 'Lapis-lazuli',
    sunstone: 'Pierre de soleil',
    'rose-quartz': 'Quartz rose',
    malachite: 'Malachite',
  },
  it: {
    'lapis-lazuli': 'Lapislazzuli',
    sunstone: 'Pietra di sole',
    'rose-quartz': 'Quarzo rosa',
    malachite: 'Malachite',
  },
  es: {
    'lapis-lazuli': 'Lapislázuli',
    sunstone: 'Piedra de sol',
    'rose-quartz': 'Cuarzo rosa',
    malachite: 'Malaquita',
  },
  ru: {
    'lapis-lazuli': 'Лазурит',
    sunstone: 'Солнечный камень',
    'rose-quartz': 'Розовый кварц',
    malachite: 'Малахит',
  },
  zh: {
    'lapis-lazuli': '青金石',
    sunstone: '日光石',
    'rose-quartz': '粉晶',
    malachite: '孔雀石',
  },
  de: {
    'lapis-lazuli': 'Lapislazuli',
    sunstone: 'Sonnenstein',
    'rose-quartz': 'Rosenquarz',
    malachite: 'Malachit',
  },
  nl: {
    'lapis-lazuli': 'Lapis lazuli',
    sunstone: 'Zonsteen',
    'rose-quartz': 'Rozenkwarts',
    malachite: 'Malachiet',
  },
  pt: {
    'lapis-lazuli': 'Lápis-lazúli',
    sunstone: 'Pedra do sol',
    'rose-quartz': 'Quartzo rosa',
    malachite: 'Malaquite',
  },
  id: {
    'lapis-lazuli': 'Lapis lazuli',
    sunstone: 'Batu matahari',
    'rose-quartz': 'Kuarsa mawar',
    malachite: 'Malakit',
  },
  ms: {
    'lapis-lazuli': 'Lapis lazuli',
    sunstone: 'Batu matahari',
    'rose-quartz': 'Kuarsa mawar',
    malachite: 'Malakit',
  },
}

function buildHeadline(locale: AppLocale, stone: string): string {
  switch (locale) {
    case 'ar':
      return `ستراندات التوقيع Al Ain Rosette — ${stone}`
    case 'zh':
      return `Al Ain Rosette ${stone} Signature Strands`
    case 'de':
    case 'nl':
      return `Al Ain Rosette Signature Strands — ${stone}`
    case 'fr':
    case 'it':
    case 'es':
    case 'ru':
    case 'pt':
    case 'id':
    case 'ms':
      return `Signature Strands Al Ain Rosette — ${stone}`
    default:
      return `${stone} Al Ain Rosette Signature Strands`
  }
}

/** Localized display names for Al Ain Rosette strand titles, FAQ labels, and schema name. */
export function getAlAinRosetteDisplayNames(
  id: AlAinRosetteStrandId,
  locale: AppLocale,
): AlAinRosetteDisplayNames {
  const stoneKey = ID_TO_STONE[id]
  const stoneLabel = STONE_LABEL[locale][stoneKey]
  const headline = buildHeadline(locale, stoneLabel)
  return {
    headline,
    strandLabel: headline,
    stoneLabel,
  }
}
