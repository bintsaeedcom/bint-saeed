import type { AppLocale } from '@/lib/i18n/routing'
import {
  HAMPSTEAD_SLUG,
  MARYLEBONE_SLUG,
  PARK_LANE_SLUG,
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

const MARYLEBONE_ROWS: KwRow[] = [
  ['Marylebone Abaya', 'عباية Marylebone', 'Abaya Marylebone', 'Marylebone Abaya', 'Abaya Marylebone', 'Абайя Marylebone', 'Marylebone 长袍', 'Marylebone Abaya', 'Marylebone abaya', 'Abaya Marylebone'],
  ['open front abaya', 'عباية مفتوحة الأمام', 'abaya ouvert devant', 'abaya frontale aperta', 'abaya frontal abierta', 'абайя с открытым передом', '开襟长袍', 'Offene-Front-Abaya', 'open front abaya', 'abaya frente aberta'],
  ['layering abaya', 'عباية للطبقات', 'abaya à superposer', 'abaya layering', 'abaya para capas', 'абайя для наслоения', '叠穿长袍', 'Layering-Abaya', 'layering abaya', 'abaya para camadas'],
  ['wide sleeve abaya', 'عباية أكمام واسعة', 'abaya manches larges', 'abaya maniche ampie', 'abaya mangas amplias', 'абайя с широкими рукавами', '宽袖长袍', 'Abaya mit weiten Ärmeln', 'wijde mouw abaya', 'abaya mangas largas'],
  ['outerwear abaya', 'عباية خارجية', 'abaya outerwear', 'abaya outerwear', 'abaya outerwear', 'верхняя абайя', '外搭长袍', 'Abaya-Outerwear', 'outerwear abaya', 'abaya outerwear'],
  ['Covent Garden Dress layering', 'طبقة فوق فستان Covent Garden', 'superposition robe Covent Garden', 'layering Covent Garden Dress', 'capas Covent Garden Dress', 'слой с платьем Covent Garden', '搭配Covent Garden连衣裙', 'Layering Covent Garden Dress', 'layering Covent Garden Dress', 'camadas Covent Garden Dress'],
  ['BS-AB-004', 'BS-AB-004', 'BS-AB-004', 'BS-AB-004', 'BS-AB-004', 'BS-AB-004', 'BS-AB-004', 'BS-AB-004', 'BS-AB-004', 'BS-AB-004'],
]

const PARK_LANE_ROWS: KwRow[] = [
  ['Park Lane Abaya', 'عباية Park Lane', 'Abaya Park Lane', 'Park Lane Abaya', 'Abaya Park Lane', 'Абайя Park Lane', 'Park Lane 长袍', 'Park Lane Abaya', 'Park Lane abaya', 'Abaya Park Lane'],
  ['everyday abaya', 'عباية يومية', 'abaya quotidienne', 'abaya quotidiana', 'abaya diaria', 'повседневная абайя', '日常长袍', 'Alltags-Abaya', 'everyday abaya', 'abaya quotidiana'],
  ['city abaya', 'عباية المدينة', 'abaya urbaine', 'abaya città', 'abaya ciudad', 'городская абайя', '都市长袍', 'City-Abaya', 'city abaya', 'abaya cidade'],
  ['work abaya', 'عباية للعمل', 'abaya bureau', 'abaya lavoro', 'abaya trabajo', 'рабочая абайя', '职场长袍', 'Büro-Abaya', 'werk abaya', 'abaya trabalho'],
  ['fluid drape abaya', 'عباية بانسيابية', 'abaya tombé fluide', 'abaya drappeggio fluido', 'abaya caída fluida', 'абайя с плавной драпировкой', '飘逸长袍', 'Abaya mit fließendem Fall', 'vloeiende drape abaya', 'abaya drapeado fluido'],
  ['BS-AB-006', 'BS-AB-006', 'BS-AB-006', 'BS-AB-006', 'BS-AB-006', 'BS-AB-006', 'BS-AB-006', 'BS-AB-006', 'BS-AB-006', 'BS-AB-006'],
]

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
  [MARYLEBONE_SLUG]: rowsToKw(MARYLEBONE_ROWS),
  [PARK_LANE_SLUG]: rowsToKw(PARK_LANE_ROWS),
  [HAMPSTEAD_SLUG]: rowsToKw(HAMPSTEAD_ROWS),
  [SOHO_SLUG]: rowsToKw(SOHO_ROWS),
}

const EN_EXTRA: Record<string, readonly string[]> = {
  [MARYLEBONE_SLUG]: [
    'Bint Saeed Marylebone Abaya',
    'layer over dress',
    'travel abaya',
    'wedding layering abaya',
    'international wardrobe abaya',
  ],
  [PARK_LANE_SLUG]: [
    'Bint Saeed Park Lane Abaya',
    'daily abaya',
    'commuter abaya',
    'modest workwear abaya',
    'buy everyday abaya online',
  ],
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
