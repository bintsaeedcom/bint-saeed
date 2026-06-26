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
  ['Hyde Park Set', 'مجموعة Hyde Park', 'Set Hyde Park', 'Hyde Park Set', 'Set Hyde Park', 'Комплект Hyde Park', 'Hyde Park 套装', 'Hyde Park Set', 'Hyde Park Set', 'Set Hyde Park'],
  ['Bint Saeed Hyde Park Set', 'طقم Bint Saeed Hyde Park', 'Set Bint Saeed Hyde Park', 'Bint Saeed Hyde Park Set', 'Set Bint Saeed Hyde Park', 'Комплект Bint Saeed Hyde Park', 'Bint Saeed Hyde Park 套装', 'Bint Saeed Hyde Park Set', 'Bint Saeed Hyde Park Set', 'Set Bint Saeed Hyde Park'],
  ['Knotted Line set', 'طقم Knotted Line', 'set Knotted Line', 'set Knotted Line', 'set Knotted Line', 'комплект Knotted Line', 'Knotted Line 套装', 'Knotted-Line-Set', 'Knotted Line set', 'set Knotted Line'],
  ['oversized shirt palazzo set', 'طقم قميص واسع وبالازو', 'set chemise oversize palazzo', 'set camicia oversize palazzo', 'set camisa oversize palazzo', 'комплект оверсайз рубашка palazzo', '宽松衬衫阔腿裤套装', 'Oversize-Hemd-Palazzo-Set', 'oversized overhemd palazzo set', 'set camisa oversize palazzo'],
  ['premium travel set', 'طقم سفر فاخر', 'set voyage premium', 'set viaggio premium', 'set viaje premium', 'премиальный travel set', '高端旅行套装', 'Premium-Reise-Set', 'premium reisset', 'set viagem premium'],
  ['Deep Black coordinate set', 'طقم منسّق أسود عميق', 'set coordonné Noir profond', 'set coordinato Nero profondo', 'set coordinado Negro profundo', 'координированный комплект глубокий чёрный', '深黑色协调套装', 'Koordinaten-Set Tiefschwarz', 'coördinatieset Diepzwart', 'set coordenado Preto profundo'],
  ['Navy Blue coordinate set', 'طقم منسّق كحلي', 'set coordonné Bleu marine', 'set coordinato Blu navy', 'set coordinado Azul marino', 'координированный комплект тёмно-синий', '海军蓝协调套装', 'Koordinaten-Set Marineblau', 'coördinatieset Marineblauw', 'set coordenado Azul-marinho'],
  ['shirt and trouser set', 'طقم قميص وبنطال', 'set chemise et pantalon', 'set camicia e pantaloni', 'set camisa y pantalón', 'комплект рубашка и брюки', '衬衫长裤套装', 'Hemd-Hosen-Set', 'overhemd broek set', 'set camisa e calças'],
  ['modest two-piece set', 'طقم محتشم ثنائي', 'set modeste deux pièces', 'set modesto due pezzi', 'set modesto dos piezas', 'скромный комплект из двух частей', '端庄两件套', 'bescheidenes Zweiteiler-Set', 'bescheiden tweedelig set', 'set modesto duas peças'],
  ['BS-ST-001', 'BS-ST-001', 'BS-ST-001', 'BS-ST-001', 'BS-ST-001', 'BS-ST-001', 'BS-ST-001', 'BS-ST-001', 'BS-ST-001', 'BS-ST-001'],
  ['BS-ST-001-BLK', 'BS-ST-001-BLK', 'BS-ST-001-BLK', 'BS-ST-001-BLK', 'BS-ST-001-BLK', 'BS-ST-001-BLK', 'BS-ST-001-BLK', 'BS-ST-001-BLK', 'BS-ST-001-BLK', 'BS-ST-001-BLK'],
  ['BS-ST-001-NVY', 'BS-ST-001-NVY', 'BS-ST-001-NVY', 'BS-ST-001-NVY', 'BS-ST-001-NVY', 'BS-ST-001-NVY', 'BS-ST-001-NVY', 'BS-ST-001-NVY', 'BS-ST-001-NVY', 'BS-ST-001-NVY'],
]

const EN_EXTRA = [
  'luxury coordinate set Abu Dhabi',
  'understated elegance travel outfit',
  'palazzo trouser coordinate set',
  'buy Hyde Park Set online',
  'Emirati designer two-piece set',
  'London modest fashion set',
  'Singapore travel set',
  'Miami resort wear set',
  'Los Angeles city set',
  'machine washable luxury set',
] as const

const PACK = rowsToKw(CORE_ROWS)

export function getLocalizedHydeParkSetExclusiveKeywords(
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
  if (!color || color.toLowerCase().includes('black')) {
    terms.add(locale === 'en' ? 'Deep Black' : PACK[5][locale])
  }
  if (!color || color.toLowerCase().includes('navy')) {
    terms.add(locale === 'en' ? 'Navy Blue' : PACK[6][locale])
  }
  return [...terms]
}
