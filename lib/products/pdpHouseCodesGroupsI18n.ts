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
  | 'grosvenor-set'

/** Clearer than “House Codes” alone — used on every PDP that shows this block. */
export const PDP_HOUSE_CODES_TITLE: Record<AppLocale, string> = {
  en: 'Bint Saeed Signature House Codes',
  ar: 'رموز الدار التوقيعية من Bint Saeed',
  fr: 'Bint Saeed Signature House Codes',
  it: 'Bint Saeed Signature House Codes',
  es: 'Bint Saeed Signature House Codes',
  ru: 'Bint Saeed Signature House Codes',
  zh: 'Bint Saeed Signature House Codes',
  de: 'Bint Saeed Signature House Codes',
  nl: 'Bint Saeed Signature House Codes',
  pt: 'Bint Saeed Signature House Codes',
  id: 'Bint Saeed Signature House Codes',
  ms: 'Bint Saeed Signature House Codes',
}

/** Locked EN phrasing for Monogram hardware (pin vs cufflinks). */
export const MONOGRAM_PIN_EN = 'Bint Saeed signature gold-tone Monogram pin'
export const MONOGRAM_CUFFLINKS_EN = 'Bint Saeed signature gold-tone Monogram cufflinks'
export const KNOTTED_LINE_BUTTONS_EN = 'Bint Saeed signature gold-tone Knotted Line buttons'
export const AL_TALLI_TRIM_EN = 'Al Talli woven trim'
export const AL_KHOUS_TRIM_EN = 'Al Khous woven trim'

type ItemSet = Record<HouseCodesVariant, Record<AppLocale, string[]>>

const ITEMS: ItemSet = {
  'knotted-line-al-talli': {
    en: [KNOTTED_LINE_BUTTONS_EN, AL_TALLI_TRIM_EN, MONOGRAM_PIN_EN],
    ar: [
      'أزرار Knotted Line الذهبية المميزة من Bint Saeed',
      'تفاصيل التلي المنسوجة Al Talli',
      'دبوس Monogram الذهبي المميز من Bint Saeed',
    ],
    fr: [
      'Boutons dorés signature Knotted Line de Bint Saeed',
      'Garniture tissée Al Talli',
      'Épingle Monogram dorée signature Bint Saeed',
    ],
    it: [
      'Bottoni dorati signature Knotted Line di Bint Saeed',
      'Finitura in Al Talli tessuto',
      'Spilla Monogram dorata signature Bint Saeed',
    ],
    es: [
      'Botones dorados signature Knotted Line de Bint Saeed',
      'Ribete tejido Al Talli',
      'Alfiler Monogram dorado signature Bint Saeed',
    ],
    ru: [
      'Фирменные золотистые пуговицы Knotted Line от Bint Saeed',
      'Тканая отделка Al Talli',
      'Фирменная золотистая булавка Monogram Bint Saeed',
    ],
    zh: [
      'Bint Saeed 标志性金色调 Knotted Line 纽扣',
      'Al Talli 编织饰边',
      'Bint Saeed 标志性金色调 Monogram 别针',
    ],
    de: [
      'Bint Saeed Signatur-Knotted-Line-Knöpfe in Goldoptik',
      'Al-Talli-Webbesatz',
      'Bint Saeed Signatur-Monogram-Nadel in Goldoptik',
    ],
    nl: [
      'Bint Saeed signature goudkleurige Knotted Line-knopen',
      'Al Talli-weefwerk',
      'Bint Saeed signature goudkleurige Monogram-speld',
    ],
    pt: [
      'Botões dourados signature Knotted Line da Bint Saeed',
      'Acabamento em Al Talli tecido',
      'Alfinete Monogram dourado signature da Bint Saeed',
    ],
    id: [
      'Kancing emas signature Knotted Line Bint Saeed',
      'Trim tenun Al Talli',
      'Pin Monogram emas signature Bint Saeed',
    ],
    ms: [
      'Butang emas signature Knotted Line Bint Saeed',
      'Hiasan tenunan Al Talli',
      'Pin Monogram emas signature Bint Saeed',
    ],
  },
  'al-talli': {
    en: [AL_TALLI_TRIM_EN],
    ar: ['تفاصيل التلي المنسوجة Al Talli'],
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
    en: [AL_KHOUS_TRIM_EN],
    ar: ['تفاصيل الخوص المنسوجة Al Khous'],
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
    en: [KNOTTED_LINE_BUTTONS_EN, AL_KHOUS_TRIM_EN],
    ar: [
      'أزرار Knotted Line الذهبية المميزة من Bint Saeed',
      'تفاصيل الخوص المنسوجة Al Khous',
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
    zh: [
      'Bint Saeed 标志性金色调 Knotted Line 纽扣',
      'Al Khous 编织饰边',
    ],
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
    en: [KNOTTED_LINE_BUTTONS_EN],
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
      'Bint Saeed signature gold-tone Knotted Line buttons at the shoulders',
      MONOGRAM_CUFFLINKS_EN,
    ],
    ar: [
      'أزرار Knotted Line الذهبية على الأكتاف من Bint Saeed',
      'أزرار كم Monogram الذهبية المميزة من Bint Saeed',
    ],
    fr: [
      'Boutons dorés signature Knotted Line aux épaules de Bint Saeed',
      'Boutons de manchette Monogram dorés signature Bint Saeed',
    ],
    it: [
      'Bottoni dorati signature Knotted Line sulle spalle di Bint Saeed',
      'Gemelli Monogram dorati signature Bint Saeed',
    ],
    es: [
      'Botones dorados signature Knotted Line en los hombros de Bint Saeed',
      'Gemelos Monogram dorados signature Bint Saeed',
    ],
    ru: [
      'Фирменные золотистые пуговицы Knotted Line на плечах от Bint Saeed',
      'Фирменные золотистые запонки Monogram Bint Saeed',
    ],
    zh: [
      'Bint Saeed 肩部标志性金色调 Knotted Line 纽扣',
      'Bint Saeed 标志性金色调 Monogram 袖扣',
    ],
    de: [
      'Bint Saeed Signatur-Knotted-Line-Knöpfe an den Schultern in Goldoptik',
      'Bint Saeed Signatur-Monogram-Manschettenknöpfe in Goldoptik',
    ],
    nl: [
      'Bint Saeed signature goudkleurige Knotted Line-knopen op de schouders',
      'Bint Saeed signature goudkleurige Monogram-manchetknopen',
    ],
    pt: [
      'Botões dourados signature Knotted Line nos ombros da Bint Saeed',
      'Abotoaduras Monogram douradas signature da Bint Saeed',
    ],
    id: [
      'Kancing emas signature Knotted Line di bahu Bint Saeed',
      'Manset Monogram emas signature Bint Saeed',
    ],
    ms: [
      'Butang emas signature Knotted Line di bahu Bint Saeed',
      'Butang manset Monogram emas signature Bint Saeed',
    ],
  },
  'soho-set': {
    en: [
      KNOTTED_LINE_BUTTONS_EN,
      'Signature Al Talli woven trim along both outer side seams',
    ],
    ar: [
      'أزرار Knotted Line الذهبية المميزة من Bint Saeed',
      'تفاصيل التلي المنسوجة Al Talli على كلا الدرزين الجانبيين الخارجيين',
    ],
    fr: [
      'Boutons dorés signature Knotted Line de Bint Saeed',
      'Garniture tissée Al Talli signature le long des deux coutures latérales extérieures',
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
      '沿两侧外缝的标志性 Al Talli 编织饰边',
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
  'grosvenor-set': {
    en: [
      KNOTTED_LINE_BUTTONS_EN,
      'Signature Al Talli-inspired detailing through the skirt',
    ],
    ar: [
      'أزرار Knotted Line الذهبية المميزة من Bint Saeed',
      'تشطيب التلي Al Talli التوقيعي على التنورة الماكسي',
    ],
    fr: [
      'Boutons dorés signature Knotted Line de Bint Saeed',
      'Finition Al Talli signature sur la jupe maxi',
    ],
    it: [
      'Bottoni dorati signature Knotted Line di Bint Saeed',
      'Finitura Al Talli signature sulla gonna maxi',
    ],
    es: [
      'Botones dorados signature Knotted Line de Bint Saeed',
      'Acabado Al Talli signature en la falda maxi',
    ],
    ru: [
      'Фирменные золотистые пуговицы Knotted Line от Bint Saeed',
      'Фирменная отделка Al Talli на юбке макси',
    ],
    zh: [
      'BINT SAEED 承悦标志性金色调 Knotted Line 袖扣',
      '贯穿半裙的标志性 Al Talli 灵感细节',
    ],
    de: [
      'Bint Saeed Signatur-Knotted-Line-Knöpfe in Goldoptik',
      'Signatur-Al-Talli-Finish am Maxirock',
    ],
    nl: [
      'Bint Saeed signature goudkleurige Knotted Line-knopen',
      'Signature Al Talli-afwerking op de maxirok',
    ],
    pt: [
      'Botões dourados signature Knotted Line da Bint Saeed',
      'Acabamento Al Talli signature na saia maxi',
    ],
    id: [
      'Kancing emas signature Knotted Line Bint Saeed',
      'Finishing Al Talli signature pada rok maxi',
    ],
    ms: [
      'Butang emas signature Knotted Line Bint Saeed',
      'Kemasan Al Talli signature pada skirt maxi',
    ],
  },
}

export function getHouseCodesDetailGroup(
  variant: HouseCodesVariant,
  locale: AppLocale = 'en',
): PdpDetailGroup {
  const items = ITEMS[variant][locale] ?? ITEMS[variant].en
  return {
    title: PDP_HOUSE_CODES_TITLE[locale] ?? PDP_HOUSE_CODES_TITLE.en,
    items: [...items],
  }
}
