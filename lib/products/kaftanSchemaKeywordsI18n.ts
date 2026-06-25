import type { AppLocale } from '@/lib/i18n/routing'
import { isKaftanSlug, type KaftanSlug } from '@/lib/products/kaftanSchemaI18n'

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

const MAYFAIR_ROWS: KwRow[] = [
  ['Mayfair Kaftan', 'قفطان Mayfair', 'Caftan Mayfair', 'Mayfair Kaftan', 'Caftán Mayfair', 'Кафтан Mayfair', 'Mayfair 长袍', 'Mayfair Kaftan', 'Mayfair kaftan', 'Kaftan Mayfair'],
  ['chiffon kaftan', 'قفطان شيفون', 'caftan chiffon', 'kaftan chiffon', 'caftán chiffon', 'шифоновый кафтан', '雪纺长袍', 'Chiffon-Kaftan', 'chiffon kaftan', 'kaftan chiffon'],
  ['occasion kaftan', 'قفطان مناسبات', 'caftan de cérémonie', 'kaftan da cerimonia', 'caftán de ocasión', 'кафтан для особых случаев', '场合长袍', 'Anlass-Kaftan', 'gelegenheidskaftan', 'kaftan de ocasião'],
  ['wedding guest kaftan', 'قفطان ضيفة زفاف', 'caftan invitée mariage', 'kaftan invitata matrimonio', 'caftán invitada boda', 'кафтан для гостьи свадьбы', '婚礼宾客长袍', 'Hochzeitsgast-Kaftan', 'bruiloftsgast kaftan', 'kaftan convidada casamento'],
  ['Eid kaftan', 'قفطان العيد', 'caftan Aïd', 'kaftan Eid', 'caftán Eid', 'кафтан на Ид', '开斋节长袍', 'Eid-Kaftan', 'Eid kaftan', 'kaftan Eid'],
  ['one size kaftan', 'قفطان مقاس واحد', 'caftan taille unique', 'kaftan taglia unica', 'caftán talla única', 'кафтан one size', '均码长袍', 'One-Size-Kaftan', 'one size kaftan', 'kaftan tamanho único'],
  ['BS-KF-001', 'BS-KF-001', 'BS-KF-001', 'BS-KF-001', 'BS-KF-001', 'BS-KF-001', 'BS-KF-001', 'BS-KF-001', 'BS-KF-001', 'BS-KF-001'],
]

const NOTHING_HILL_ROWS: KwRow[] = [
  ['Nothing Hill Kaftan', 'قفطان Nothing Hill', 'Caftan Nothing Hill', 'Nothing Hill Kaftan', 'Caftán Nothing Hill', 'Кафтан Nothing Hill', 'Nothing Hill 长袍', 'Nothing Hill Kaftan', 'Nothing Hill kaftan', 'Kaftan Nothing Hill'],
  ['peach pink kaftan', 'قفطان وردي خوخي', 'caftan rose pêche', 'kaftan pesca', 'caftán rosa melocotón', 'персиково-розовый кафтан', '蜜桃粉长袍', 'pfirsichrosa Kaftan', 'perzikroze kaftan', 'kaftan rosa pêssego'],
  ['bateau neckline kaftan', 'قفطان ياقة باتو', 'caftan col bateau', 'kaftan scollo a barca', 'caftán escote barco', 'кафтан с вырезом лодочкой', '船领长袍', 'Kaftan mit Bateau-Ausschnitt', 'bateau hals kaftan', 'kaftan decote barco'],
  ['resort kaftan', 'قفطان منتجع', 'caftan resort', 'kaftan resort', 'caftán resort', 'курортный кафтан', '度假长袍', 'Resort-Kaftan', 'resort kaftan', 'kaftan resort'],
  ['BS-KF-002', 'BS-KF-002', 'BS-KF-002', 'BS-KF-002', 'BS-KF-002', 'BS-KF-002', 'BS-KF-002', 'BS-KF-002', 'BS-KF-002', 'BS-KF-002'],
]

const MAYFAIR_I18N = MAYFAIR_ROWS.map(([en, ar, fr, it, es, ru, zh, de, nl, pt]) =>
  kw(en, ar, fr, it, es, ru, zh, de, nl, pt),
)
const NOTHING_HILL_I18N = NOTHING_HILL_ROWS.map(([en, ar, fr, it, es, ru, zh, de, nl, pt]) =>
  kw(en, ar, fr, it, es, ru, zh, de, nl, pt),
)

const KAFTAN_EN_EXTRA: Record<KaftanSlug, readonly string[]> = {
  'mayfair-kaftan': [
    'Bint Saeed Mayfair Kaftan',
    'luxury kaftan UAE',
    'designer kaftan Abu Dhabi',
    'Deep Maroon kaftan',
    'destination wedding kaftan',
    'luxury travel kaftan',
    'buy kaftan online UAE',
  ],
  'nothing-hill-kaftan': [
    'Bint Saeed Nothing Hill Kaftan',
    'luxury chiffon kaftan',
    'designer kaftan Abu Dhabi',
    'Peach Pink kaftan',
    'holiday kaftan',
    'elegant kaftan worldwide',
  ],
}

export function getLocalizedKaftanExclusiveKeywords(
  slug: string,
  locale: AppLocale = 'en',
  colorName?: string,
): string[] {
  if (!isKaftanSlug(slug)) return []

  const rows = slug === 'mayfair-kaftan' ? MAYFAIR_I18N : NOTHING_HILL_I18N
  const extra = KAFTAN_EN_EXTRA[slug as KaftanSlug] ?? []

  const terms = new Set<string>(
    locale === 'en' ? [...rows.map((r) => r.en), ...extra] : rows.map((r) => r[locale]),
  )
  const color = colorName?.trim()
  if (color) terms.add(color)

  return [...terms]
}
