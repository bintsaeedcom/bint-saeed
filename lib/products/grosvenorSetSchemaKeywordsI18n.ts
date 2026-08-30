import type { AppLocale } from '@/lib/i18n/routing'

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
  return { en, ar, fr, it, es, ru, zh, de, nl, pt, id: id ?? en, ms: ms ?? en }
}

type KwRow = [string, string, string, string, string, string, string, string, string, string]

function rowsToKw(rows: KwRow[]): Record<AppLocale, string>[] {
  return rows.map(([en, ar, fr, it, es, ru, zh, de, nl, pt]) =>
    kw(en, ar, fr, it, es, ru, zh, de, nl, pt),
  )
}

const CORE_ROWS: KwRow[] = [
  ['Grosvenor Set', 'مجموعة Grosvenor', 'Set Grosvenor', 'Grosvenor Set', 'Set Grosvenor', 'Комплект Grosvenor', 'Grosvenor 套装', 'Grosvenor Set', 'Grosvenor Set', 'Set Grosvenor'],
  ['Bint Saeed Grosvenor Set', 'طقم Bint Saeed Grosvenor', 'Set Bint Saeed Grosvenor', 'Bint Saeed Grosvenor Set', 'Set Bint Saeed Grosvenor', 'Комплект Bint Saeed Grosvenor', 'Bint Saeed Grosvenor 套装', 'Bint Saeed Grosvenor Set', 'Bint Saeed Grosvenor Set', 'Set Bint Saeed Grosvenor'],
  ['Knotted Line set', 'طقم Knotted Line', 'set Knotted Line', 'set Knotted Line', 'set Knotted Line', 'комплект Knotted Line', 'Knotted Line 套装', 'Knotted-Line-Set', 'Knotted Line set', 'set Knotted Line'],
  ['satin blouse skirt set', 'طقم بلوزة ساتان وتنورة', 'set blouse satin jupe', 'set blusa satin gonna', 'set blusa satén falda', 'комплект атласная блуза и юбка', '缎面衬衫半裙套装', 'Satin-Bluse-Rock-Set', 'satijnen blouse rok set', 'set blusa cetim saia'],
  ['evening coordinate set', 'طقم مسائي منسّق', 'set coordonné du soir', 'set coordinato serale', 'set coordinado de noche', 'вечерний координированный комплект', '晚宴协调套装', 'Abend-Koordinaten-Set', 'avond coördinatieset', 'set coordenado noturno'],
  ['Champagne Cream satin set', 'طقم ساتان Champagne Cream', 'set satin Champagne Cream', 'set satin Champagne Cream', 'set satén Champagne Cream', 'атласный комплект Champagne Cream', 'Champagne Cream 缎面套装', 'Satin-Set Champagne Cream', 'satijnen set Champagne Cream', 'set cetim Champagne Cream'],
  ['blouse and maxi skirt set', 'طقم بلوزة وتنورة ماكسي', 'set blouse et jupe maxi', 'set blusa e gonna maxi', 'set blusa y falda maxi', 'комплект блуза и юбка макси', '衬衫及地长裙套装', 'Bluse-Maxirock-Set', 'blouse maxirok set', 'set blusa e saia maxi'],
  ['modest two-piece set', 'طقم محتشم ثنائي', 'set modeste deux pièces', 'set modesto due pezzi', 'set modesto dos piezas', 'скромный комплект из двух частей', '端庄两件套', 'bescheidenes Zweiteiler-Set', 'bescheiden tweedelig set', 'set modesto duas peças'],
  ['BS-ST-004', 'BS-ST-004', 'BS-ST-004', 'BS-ST-004', 'BS-ST-004', 'BS-ST-004', 'BS-ST-004', 'BS-ST-004', 'BS-ST-004', 'BS-ST-004'],
  ['BS-ST-004-CHC', 'BS-ST-004-CHC', 'BS-ST-004-CHC', 'BS-ST-004-CHC', 'BS-ST-004-CHC', 'BS-ST-004-CHC', 'BS-ST-004-CHC', 'BS-ST-004-CHC', 'BS-ST-004-CHC', 'BS-ST-004-CHC'],
]

const EN_EXTRA = [
  'luxury evening set Abu Dhabi',
  'satin formal coordinate set',
  'high-waisted maxi skirt set',
  'buy Grosvenor Set online',
  'Emirati designer evening set',
  'London modest evening set',
  'Paris formal set',
  'Riyadh occasion set',
  'gold waist trim satin set',
  'Knotted Line cuff buttons set',
] as const

const PACK = rowsToKw(CORE_ROWS)

export function getLocalizedGrosvenorSetExclusiveKeywords(
  locale: AppLocale = 'en',
  colorName?: string,
): string[] {
  const terms = new Set<string>(
    locale === 'en'
      ? [...PACK.map((r) => r.en), ...EN_EXTRA]
      : PACK.map((r) => r[locale]),
  )
  const color = colorName?.trim()
  if (color) terms.add(color)
  if (!color || color.toLowerCase().includes('champagne') || color.toLowerCase().includes('cream')) {
    terms.add(locale === 'en' ? 'Champagne Cream' : PACK[5][locale])
  }
  return [...terms]
}
