import type { AppLocale } from '@/lib/i18n/routing'
import type { PriceRangeId, StoneFilterId } from '@/lib/accessories/filterAccessories'

const PRICE: Record<AppLocale, Record<PriceRangeId, string>> = {
  en: {
    all: 'All prices',
    'under-200': 'Under 200 AED',
    '200-400': '200 – 400 AED',
    '400-600': '400 – 600 AED',
    '600-plus': '600 AED & above',
  },
  ar: {
    all: 'جميع الأسعار',
    'under-200': 'أقل من ٢٠٠ د.إ',
    '200-400': '٢٠٠ – ٤٠٠ د.إ',
    '400-600': '٤٠٠ – ٦٠٠ د.إ',
    '600-plus': '٦٠٠ د.إ فما فوق',
  },
  fr: {
    all: 'Tous les prix',
    'under-200': 'Moins de 200 AED',
    '200-400': '200 – 400 AED',
    '400-600': '400 – 600 AED',
    '600-plus': '600 AED et plus',
  },
  it: {
    all: 'Tutti i prezzi',
    'under-200': 'Sotto 200 AED',
    '200-400': '200 – 400 AED',
    '400-600': '400 – 600 AED',
    '600-plus': '600 AED e oltre',
  },
  es: {
    all: 'Todos los precios',
    'under-200': 'Menos de 200 AED',
    '200-400': '200 – 400 AED',
    '400-600': '400 – 600 AED',
    '600-plus': '600 AED o más',
  },
  ru: {
    all: 'Все цены',
    'under-200': 'До 200 AED',
    '200-400': '200 – 400 AED',
    '400-600': '400 – 600 AED',
    '600-plus': '600 AED и выше',
  },
  zh: {
    all: '全部价格',
    'under-200': '200 AED 以下',
    '200-400': '200 – 400 AED',
    '400-600': '400 – 600 AED',
    '600-plus': '600 AED 及以上',
  },
  de: {
    all: 'Alle Preise',
    'under-200': 'Unter 200 AED',
    '200-400': '200 – 400 AED',
    '400-600': '400 – 600 AED',
    '600-plus': '600 AED und mehr',
  },
  nl: {
    all: 'Alle prijzen',
    'under-200': 'Onder 200 AED',
    '200-400': '200 – 400 AED',
    '400-600': '400 – 600 AED',
    '600-plus': '600 AED en hoger',
  },
  pt: {
    all: 'Todos os preços',
    'under-200': 'Abaixo de 200 AED',
    '200-400': '200 – 400 AED',
    '400-600': '400 – 600 AED',
    '600-plus': '600 AED ou mais',
  },
  id: {
    all: 'Semua harga',
    'under-200': 'Di bawah 200 AED',
    '200-400': '200 – 400 AED',
    '400-600': '400 – 600 AED',
    '600-plus': '600 AED ke atas',
  },
  ms: {
    all: 'Semua harga',
    'under-200': 'Bawah 200 AED',
    '200-400': '200 – 400 AED',
    '400-600': '400 – 600 AED',
    '600-plus': '600 AED ke atas',
  },
}

const STONE: Record<AppLocale, Record<StoneFilterId, string>> = {
  en: {
    malachite: 'Malachite',
    onyx: 'Onyx',
    'tiger-eye': 'Tiger Eye',
    'rose-quartz': 'Rose Quartz',
    jade: 'Jade',
    aventurine: 'Aventurine',
    amethyst: 'Amethyst',
    lapis: 'Lapis Lazuli',
    pearl: 'Pearl',
  },
  ar: {
    malachite: 'الملاكيت',
    onyx: 'الأونكس',
    'tiger-eye': 'عين النمر',
    'rose-quartz': 'الكوارتز الوردي',
    jade: 'اليشم',
    aventurine: 'الأفنتورين',
    amethyst: 'الجمشت',
    lapis: 'اللازورد',
    pearl: 'اللؤلؤ',
  },
  fr: {
    malachite: 'Malachite',
    onyx: 'Onyx',
    'tiger-eye': 'Œil de tigre',
    'rose-quartz': 'Quartz rose',
    jade: 'Jade',
    aventurine: 'Aventurine',
    amethyst: 'Améthyste',
    lapis: 'Lapis-lazuli',
    pearl: 'Perle',
  },
  it: {
    malachite: 'Malachite',
    onyx: 'Onice',
    'tiger-eye': 'Occhio di tigre',
    'rose-quartz': 'Quarzo rosa',
    jade: 'Giada',
    aventurine: 'Avventurina',
    amethyst: 'Ametista',
    lapis: 'Lapislazzuli',
    pearl: 'Perla',
  },
  es: {
    malachite: 'Malaquita',
    onyx: 'Ónix',
    'tiger-eye': 'Ojo de tigre',
    'rose-quartz': 'Cuarzo rosa',
    jade: 'Jade',
    aventurine: 'Aventurina',
    amethyst: 'Amatista',
    lapis: 'Lapislázuli',
    pearl: 'Perla',
  },
  ru: {
    malachite: 'Малахит',
    onyx: 'Оникс',
    'tiger-eye': 'Тигровый глаз',
    'rose-quartz': 'Розовый кварц',
    jade: 'Нефрит',
    aventurine: 'Авантюрин',
    amethyst: 'Аметист',
    lapis: 'Лазурит',
    pearl: 'Жемчуг',
  },
  zh: {
    malachite: '孔雀石',
    onyx: '缟玛瑙',
    'tiger-eye': '虎眼石',
    'rose-quartz': '粉水晶',
    jade: '玉',
    aventurine: '东陵石',
    amethyst: '紫水晶',
    lapis: '青金石',
    pearl: '珍珠',
  },
  de: {
    malachite: 'Malachit',
    onyx: 'Onyx',
    'tiger-eye': 'Tigerauge',
    'rose-quartz': 'Rosenquarz',
    jade: 'Jade',
    aventurine: 'Aventurin',
    amethyst: 'Amethyst',
    lapis: 'Lapislazuli',
    pearl: 'Perle',
  },
  nl: {
    malachite: 'Malachiet',
    onyx: 'Onyx',
    'tiger-eye': 'Tijgeroog',
    'rose-quartz': 'Rozenkwarts',
    jade: 'Jade',
    aventurine: 'Aventurijn',
    amethyst: 'Amethist',
    lapis: 'Lapis lazuli',
    pearl: 'Parel',
  },
  pt: {
    malachite: 'Malaquite',
    onyx: 'Ónix',
    'tiger-eye': 'Olho de tigre',
    'rose-quartz': 'Quartzo rosa',
    jade: 'Jade',
    aventurine: 'Aventurina',
    amethyst: 'Ametista',
    lapis: 'Lápis-lazúli',
    pearl: 'Pérola',
  },
  id: {
    malachite: 'Malakit',
    onyx: 'Oniks',
    'tiger-eye': 'Mata harimau',
    'rose-quartz': 'Kuarsa merah muda',
    jade: 'Giok',
    aventurine: 'Aventurin',
    amethyst: 'Ametis',
    lapis: 'Lapis lazuli',
    pearl: 'Mutiara',
  },
  ms: {
    malachite: 'Malakit',
    onyx: 'Oniks',
    'tiger-eye': 'Mata harimau',
    'rose-quartz': 'Kuarsa merah jambu',
    jade: 'Giok',
    aventurine: 'Aventurin',
    amethyst: 'Ametis',
    lapis: 'Lapis lazuli',
    pearl: 'Mutiara',
  },
}

function localeKey(locale: AppLocale | string): AppLocale {
  return locale in PRICE ? (locale as AppLocale) : 'en'
}

export function getAccessoryPriceRangeLabel(
  locale: AppLocale | string,
  id: PriceRangeId,
): string {
  const key = localeKey(locale)
  return PRICE[key][id] ?? PRICE.en[id]
}

export function getAccessoryStoneFilterLabel(
  locale: AppLocale | string,
  id: StoneFilterId,
): string {
  const key = localeKey(locale)
  return STONE[key][id] ?? STONE.en[id]
}
