import type { AppLocale } from '@/lib/i18n/routing'
import type { PdpDetailGroup } from '@/lib/products/pdpIntroRich'

export type HouseCodesVariant =
  | 'knotted-line-al-talli'
  | 'al-talli'
  | 'al-khous'
  | 'knotted-line-al-khous'
  | 'knotted-line-only'
  | 'knotted-line-emblem'
  | 'soho-set'

const GROUP_TITLE: Record<AppLocale, string> = {
  en: 'House Codes',
  ar: 'رموز الدار',
  fr: 'House Codes',
  it: 'House Codes',
  es: 'House Codes',
  ru: 'House Codes',
  zh: 'House Codes',
  de: 'House Codes',
  nl: 'House Codes',
  pt: 'House Codes',
  id: 'House Codes',
  ms: 'House Codes',
}

type ItemSet = Record<HouseCodesVariant, Record<AppLocale, string[]>>

const ITEMS: ItemSet = {
  'knotted-line-al-talli': {
    en: [
      'Bint Saeed signature gold-tone Knotted Line buttons',
      'Al Talli woven trim',
      'Bint Saeed signature gold-tone emblem',
    ],
    ar: [
      'أزرار Knotted Line الذهبية المميزة من Bint Saeed',
      'تفاصيل التلي المنسوجة',
      'شعار Bint Saeed الذهبي المميز',
    ],
    fr: [
      'Boutons dorés signature Knotted Line de Bint Saeed',
      'Garniture tissée Al Talli',
      'Emblème doré signature Bint Saeed',
    ],
    it: [
      'Bottoni dorati signature Knotted Line di Bint Saeed',
      'Finitura in Al Talli tessuto',
      'Emblema dorato signature Bint Saeed',
    ],
    es: [
      'Botones dorados signature Knotted Line de Bint Saeed',
      'Ribete tejido Al Talli',
      'Emblema dorado signature Bint Saeed',
    ],
    ru: [
      'Фирменные золотистые пуговицы Knotted Line от Bint Saeed',
      'Тканая отделка Al Talli',
      'Фирменная золотистая эмблема Bint Saeed',
    ],
    zh: [
      'Bint Saeed 标志性金色调 Knotted Line 纽扣',
      'Al Talli 编织饰边',
      'Bint Saeed 标志性金色调徽标',
    ],
    de: [
      'Bint Saeed Signatur-Knotted-Line-Knöpfe in Goldoptik',
      'Al-Talli-Webbesatz',
      'Bint Saeed Signatur-Emblem in Goldoptik',
    ],
    nl: [
      'Bint Saeed signature goudkleurige Knotted Line-knopen',
      'Al Talli-weefwerk',
      'Bint Saeed signature goudkleurig embleem',
    ],
    pt: [
      'Botões dourados signature Knotted Line da Bint Saeed',
      'Acabamento em Al Talli tecido',
      'Emblema dourado signature Bint Saeed',
    ],
    id: [
      'Kancing emas signature Knotted Line Bint Saeed',
      'Trim tenun Al Talli',
      'Emblem emas signature Bint Saeed',
    ],
    ms: [
      'Butang emas signature Knotted Line Bint Saeed',
      'Hiasan tenunan Al Talli',
      'Emblem emas signature Bint Saeed',
    ],
  },
  'al-talli': {
    en: ['Al Talli woven trim'],
    ar: ['تفاصيل التلي المنسوجة'],
    fr: ['Garniture tissée Al Talli'],
    it: ['Finitura in Al Talli tessuto'],
    es: ['Ribete tejido Al Talli'],
    ru: ['Тканая отделка Al Talli'],
    zh: ['Al Talli 编织饰边'],
    de: ['Al-Talli-Webbesatz'],
    nl: ['Al Talli-weefwerk'],
    pt: ['Acabamento em Al Talli tecido'],
    id: ['Trim tenun Al Talli'],
    ms: ['Hiasan tenunan Al Talli'],
  },
  'al-khous': {
    en: ['Al Khous woven trim'],
    ar: ['تفاصيل الخوص المنسوجة'],
    fr: ['Garniture tissée Al Khous'],
    it: ['Finitura in Al Khous tessuto'],
    es: ['Ribete tejido Al Khous'],
    ru: ['Тканая отделка Al Khous'],
    zh: ['Al Khous 编织饰边'],
    de: ['Al-Khous-Webbesatz'],
    nl: ['Al Khous-weefwerk'],
    pt: ['Acabamento em Al Khous tecido'],
    id: ['Trim tenun Al Khous'],
    ms: ['Hiasan tenunan Al Khous'],
  },
  'knotted-line-al-khous': {
    en: [
      'Bint Saeed signature gold-tone Knotted Line buttons',
      'Al Khous woven trim',
    ],
    ar: [
      'أزرار Knotted Line الذهبية المميزة من Bint Saeed',
      'تفاصيل الخوص المنسوجة',
    ],
    fr: [
      'Boutons dorés signature Knotted Line de Bint Saeed',
      'Garniture tissée Al Khous',
    ],
    it: [
      'Bottoni dorati signature Knotted Line di Bint Saeed',
      'Finitura in Al Khous tessuto',
    ],
    es: [
      'Botones dorados signature Knotted Line de Bint Saeed',
      'Ribete tejido Al Khous',
    ],
    ru: [
      'Фирменные золотистые пуговицы Knotted Line от Bint Saeed',
      'Тканая отделка Al Khous',
    ],
    zh: ['Bint Saeed 标志性金色调 Knotted Line 纽扣', 'Al Khous 编织饰边'],
    de: [
      'Bint Saeed Signatur-Knotted-Line-Knöpfe in Goldoptik',
      'Al-Khous-Webbesatz',
    ],
    nl: [
      'Bint Saeed signature goudkleurige Knotted Line-knopen',
      'Al Khous-weefwerk',
    ],
    pt: [
      'Botões dourados signature Knotted Line da Bint Saeed',
      'Acabamento em Al Khous tecido',
    ],
    id: [
      'Kancing emas signature Knotted Line Bint Saeed',
      'Trim tenun Al Khous',
    ],
    ms: [
      'Butang emas signature Knotted Line Bint Saeed',
      'Hiasan tenunan Al Khous',
    ],
  },
  'knotted-line-only': {
    en: ['Bint Saeed signature gold-tone Knotted Line buttons'],
    ar: ['أزرار Knotted Line الذهبية المميزة من Bint Saeed'],
    fr: ['Boutons dorés signature Knotted Line de Bint Saeed'],
    it: ['Bottoni dorati signature Knotted Line di Bint Saeed'],
    es: ['Botones dorados signature Knotted Line de Bint Saeed'],
    ru: ['Фирменные золотистые пуговицы Knotted Line от Bint Saeed'],
    zh: ['Bint Saeed 标志性金色调 Knotted Line 纽扣'],
    de: ['Bint Saeed Signatur-Knotted-Line-Knöpfe in Goldoptik'],
    nl: ['Bint Saeed signature goudkleurige Knotted Line-knopen'],
    pt: ['Botões dourados signature Knotted Line da Bint Saeed'],
    id: ['Kancing emas signature Knotted Line Bint Saeed'],
    ms: ['Butang emas signature Knotted Line Bint Saeed'],
  },
  'knotted-line-emblem': {
    en: [
      'Signature gold-tone Knotted Line buttons at the shoulders',
      'Signature Bint Saeed emblem cufflinks',
    ],
    ar: [
      'أزرار Knotted Line الذهبية المميزة عند الكتفين',
      'أزرار أكمام شعار Bint Saeed المميزة',
    ],
    fr: [
      'Boutons dorés signature Knotted Line aux épaules',
      'Boutons de manchette emblème signature Bint Saeed',
    ],
    it: [
      'Bottoni dorati signature Knotted Line alle spalle',
      'Gemelli emblema signature Bint Saeed',
    ],
    es: [
      'Botones dorados signature Knotted Line en los hombros',
      'Gemelos emblema signature Bint Saeed',
    ],
    ru: [
      'Фирменные золотистые пуговицы Knotted Line на плечах',
      'Запонки с эмблемой Bint Saeed',
    ],
    zh: [
      '肩部标志性金色调 Knotted Line 纽扣',
      'Bint Saeed 标志性徽标袖扣',
    ],
    de: [
      'Signatur-Knotted-Line-Knöpfe in Goldoptik an den Schultern',
      'Bint Saeed Signatur-Emblem-Manschettenknöpfe',
    ],
    nl: [
      'Signature goudkleurige Knotted Line-knopen bij de schouders',
      'Bint Saeed signature embleem manchetknopen',
    ],
    pt: [
      'Botões dourados signature Knotted Line nos ombros',
      'Abotoaduras emblema signature Bint Saeed',
    ],
    id: [
      'Kancing emas signature Knotted Line di bahu',
      'Kancing manset emblem signature Bint Saeed',
    ],
    ms: [
      'Butang emas signature Knotted Line di bahu',
      'Kancing manset emblem signature Bint Saeed',
    ],
  },
  'soho-set': {
    en: [
      'Bint Saeed signature gold-tone Knotted Line buttons',
      'Signature Al Talli woven trim along both outer side seams',
    ],
    ar: [
      'أزرار Knotted Line الذهبية المميزة من Bint Saeed',
      'تفاصيل التلي المنسوجة المميزة على جانبي البنطال الخارجيين',
    ],
    fr: [
      'Boutons dorés signature Knotted Line de Bint Saeed',
      'Garniture tissée Al Talli signature le long des coutures latérales extérieures',
    ],
    it: [
      'Bottoni dorati signature Knotted Line di Bint Saeed',
      'Finitura in Al Talli tessuto signature lungo entrambe le cuciture laterali esterne',
    ],
    es: [
      'Botones dorados signature Knotted Line de Bint Saeed',
      'Ribete tejido Al Talli signature a lo largo de ambas costuras laterales exteriores',
    ],
    ru: [
      'Фирменные золотистые пуговицы Knotted Line от Bint Saeed',
      'Фирменная тканая отделка Al Talli вдоль обоих внешних боковых швов',
    ],
    zh: [
      'Bint Saeed 标志性金色调 Knotted Line 纽扣',
      '沿裤外侧缝的标志性 Al Talli 编织饰边',
    ],
    de: [
      'Bint Saeed Signatur-Knotted-Line-Knöpfe in Goldoptik',
      'Signatur-Al-Talli-Webbesatz entlang beider äußerer Seitennähte',
    ],
    nl: [
      'Bint Saeed signature goudkleurige Knotted Line-knopen',
      'Signature Al Talli-weefwerk langs beide buitenste zijnaadden',
    ],
    pt: [
      'Botões dourados signature Knotted Line da Bint Saeed',
      'Acabamento em Al Talli tecido signature ao longo de ambas as costuras laterais exteriores',
    ],
    id: [
      'Kancing emas signature Knotted Line Bint Saeed',
      'Trim tenun Al Talli signature di sepanjang jahitan sisi luar',
    ],
    ms: [
      'Butang emas signature Knotted Line Bint Saeed',
      'Hiasan tenunan Al Talli signature di sepanjang jahitan sisi luar',
    ],
  },
}

export function getHouseCodesDetailGroup(
  variant: HouseCodesVariant,
  locale: AppLocale = 'en',
): PdpDetailGroup {
  const items = ITEMS[variant][locale] ?? ITEMS[variant].en
  return {
    title: GROUP_TITLE[locale] ?? GROUP_TITLE.en,
    items: [...items],
  }
}
