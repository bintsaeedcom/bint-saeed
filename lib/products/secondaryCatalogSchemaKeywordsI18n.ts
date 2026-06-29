import type { AppLocale } from '@/lib/i18n/routing'
import {
  HAMPSTEAD_SLUG,
  SOHO_SLUG,
} from '@/lib/products/secondaryCatalogSchemaLocalePacks'

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

const HAMPSTEAD_ROWS: KwRow[] = [
  ['Hampstead Dress', 'فستان Hampstead', 'Robe Hampstead', 'Hampstead Dress', 'Vestido Hampstead', 'Платье Hampstead', 'Hampstead 连衣裙', 'Hampstead Dress', 'Hampstead Dress', 'Vestido Hampstead'],
  ['Al Talli dress', 'فستان التلي', 'robe Al Talli', 'abito Al Talli', 'vestido Al Talli', 'платье Al Talli', 'Al Talli 连衣裙', 'Al-Talli-Kleid', 'Al Talli jurk', 'vestido Al Talli'],
  ['structured dress', 'فستان مُهيكَل', 'robe structurée', 'abito strutturato', 'vestido estructurado', 'структурированное платье', '结构感连衣裙', 'strukturiertes Kleid', 'gestructureerde jurk', 'vestido estruturado'],
  ['evening dress Abu Dhabi', 'فستان مسائي أبوظبي', 'robe de soirée Abou Dabi', 'abito serale Abu Dhabi', 'vestido de noche Abu Dabi', 'вечернее платье Абу-Даби', '阿布扎比晚宴裙', 'Abendkleid Abu Dhabi', 'avondjurk Abu Dhabi', 'vestido de noite Abu Dhabi'],
  ['Covent Garden Abaya pairing dress', 'فستان يُنسّق مع عباية Covent Garden', 'robe à associer abaya Covent Garden', 'abito abbinato Covent Garden Abaya', 'vestido para abaya Covent Garden', 'платье к абайе Covent Garden', '搭配Covent Garden长袍裙', 'Kleid zu Covent Garden Abaya', 'jurk bij Covent Garden abaya', 'vestido com abaya Covent Garden'],
  ['BS-DR-003', 'BS-DR-003', 'BS-DR-003', 'BS-DR-003', 'BS-DR-003', 'BS-DR-003', 'BS-DR-003', 'BS-DR-003', 'BS-DR-003', 'BS-DR-003'],
]

const SOHO_ROWS: KwRow[] = [
  ['Soho Set', 'مجموعة Soho', 'Set Soho', 'Soho Set', 'Set Soho', 'Комплект Soho', 'Soho 套装', 'Soho Set', 'Soho Set', 'Set Soho'],
  ['Al Talli set', 'طقم التلي', 'set Al Talli', 'set Al Talli', 'set Al Talli', 'комплект Al Talli', 'Al Talli 套装', 'Al-Talli-Set', 'Al Talli set', 'set Al Talli'],
  ['coordinate set', 'طقم منسّق', 'set coordonné', 'set coordinato', 'set coordinado', 'координированный комплект', '套装', 'Koordinaten-Set', 'coördinatieset', 'set coordenado'],
  ['two-piece modest set', 'طقم محتشم ثنائي', 'set modeste deux pièces', 'set modesto due pezzi', 'set modesto dos piezas', 'скромный комплект из двух частей', '两件套端庄套装', 'zweiteiliges bescheidenes Set', 'tweedelige bescheiden set', 'set modesto duas peças'],
  ['day to evening set', 'طقم من النهار للمساء', 'set jour-soir', 'set giorno-sera', 'set día-noche', 'комплект день-вечер', '日夜套装', 'Tag-zu-Abend-Set', 'dag-tot-avond set', 'set dia-noite'],
  ['BS-ST-003', 'BS-ST-003', 'BS-ST-003', 'BS-ST-003', 'BS-ST-003', 'BS-ST-003', 'BS-ST-003', 'BS-ST-003', 'BS-ST-003', 'BS-ST-003'],
]

const PACKS: Record<string, Record<AppLocale, string>[]> = {
  [HAMPSTEAD_SLUG]: rowsToKw(HAMPSTEAD_ROWS),
  [SOHO_SLUG]: rowsToKw(SOHO_ROWS),
}

const EN_EXTRA: Record<string, readonly string[]> = {
  [HAMPSTEAD_SLUG]: [
    'Bint Saeed Hampstead Dress',
    'buy Al Talli dress',
    'heritage evening dress',
    'Emirati designer dress',
    'luxury gift for wife dress',
  ],
  [SOHO_SLUG]: [
    'Bint Saeed Soho Set',
    'shop Al Talli set',
    'heritage coordinate set',
    'modest occasion set',
    'luxury gift for mother set',
  ],
}

export function getLocalizedSecondaryCatalogExclusiveKeywords(
  slug: string,
  locale: AppLocale = 'en',
  colorName?: string,
): string[] {
  const key = slug.toLowerCase()
  const rows = PACKS[key]
  if (!rows) return []

  const terms = new Set<string>(
    locale === 'en'
      ? [...rows.map((r) => r.en), ...(EN_EXTRA[key] ?? [])]
      : rows.map((r) => r[locale]),
  )
  const color = colorName?.trim()
  if (color) terms.add(color)

  return [...terms]
}
