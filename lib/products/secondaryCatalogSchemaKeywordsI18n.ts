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
  id?: string,
  ms?: string,
): Record<AppLocale, string> {
  return { en, ar, fr, it, es, ru, zh, de, nl, pt, id: id ?? en, ms: ms ?? en }
}

/** en + 11 locales (id/ms optional — fall back to EN when omitted). */
type KwRow = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string?,
  string?,
]

function rowsToKw(rows: KwRow[]): Record<AppLocale, string>[] {
  return rows.map(([en, ar, fr, it, es, ru, zh, de, nl, pt, id, ms]) =>
    kw(en, ar, fr, it, es, ru, zh, de, nl, pt, id, ms),
  )
}

const MARYLEBONE_ROWS: KwRow[] = [
  ['Marylebone Abaya', 'عباية Marylebone', 'Abaya Marylebone', 'Abaya Marylebone', 'Abaya Marylebone', 'Абайя Marylebone', 'Marylebone 长袍', 'Marylebone Abaya', 'Marylebone abaya', 'Abaya Marylebone', 'Abaya Marylebone', 'Abaya Marylebone'],
  ['Onyx strand abaya', 'عباية بخيوط العقيق', 'abaya fil onyx', 'abaya filo onice', 'abaya hilo ónice', 'абайя с нитью оникса', '玛瑙链饰长袍', 'Onyx-Strang-Abaya', 'onyx streng abaya', 'abaya fio ónix', 'abaya strand onyx', 'abaya strand onyx'],
  ['interchangeable abaya strands', 'خيوط عباءة قابلة للتبديل', 'fils abaya interchangeables', 'fili abaya intercambiabili', 'hilos abaya intercambiables', 'сменные нити для абайи', '可更换长袍链饰', 'austauschbare Abaya-Stränge', 'verwisselbare abaya strengen', 'fios abaya intercambiáveis', 'strand abaya dapat ditukar', 'strand abaya boleh ditukar'],
  ['natural stone abaya Abu Dhabi', 'عباية أحجار طبيعية أبوظبي', 'abaya pierres naturelles Abou Dabi', 'abaya pietre naturali Abu Dhabi', 'abaya piedra natural Abu Dabi', 'абайя с натуральным камнем Абу-Даби', '阿布扎比天然石长袍', 'Naturstein-Abaya Abu Dhabi', 'natuursteen abaya Abu Dhabi', 'abaya pedra natural Abu Dhabi', 'abaya batu alami Abu Dhabi', 'abaya batu semula jadi Abu Dhabi'],
  ['Knotted Line abaya', 'عباية Knotted Line', 'abaya Knotted Line', 'abaya Knotted Line', 'abaya Knotted Line', 'абайя Knotted Line', 'Knotted Line 长袍', 'Knotted-Line-Abaya', 'Knotted Line abaya', 'abaya Knotted Line'],
  ['designer abaya GCC', 'عباية مصمّم الخليج', 'abaya designer Golfe', 'abaya designer Golfo', 'abaya diseñador Golfo', 'дизайнерская абайя GCC', '海湾设计师长袍', 'Designer-Abaya GCC', 'designer abaya GCC', 'abaya designer GCC', 'abaya desainer GCC', 'abaya pereka GCC'],
  ['BS-AB-004', 'BS-AB-004', 'BS-AB-004', 'BS-AB-004', 'BS-AB-004', 'BS-AB-004', 'BS-AB-004', 'BS-AB-004', 'BS-AB-004', 'BS-AB-004'],
]

const PARK_LANE_ROWS: KwRow[] = [
  ['Park Lane Abaya', 'عباية Park Lane', 'Abaya Park Lane', 'Abaya Park Lane', 'Abaya Park Lane', 'Абайя Park Lane', 'Park Lane 长袍', 'Park Lane Abaya', 'Park Lane abaya', 'Abaya Park Lane'],
  ['executive abaya', 'عباية تنفيذية', 'abaya executive', 'abaya executive', 'abaya ejecutiva', 'деловая абайя', '商务长袍', 'Executive-Abaya', 'executive abaya', 'abaya executiva', 'abaya eksekutif', 'abaya eksekutif'],
  ['diplomatic abaya', 'عباية دبلوماسية', 'abaya diplomatique', 'abaya diplomatica', 'abaya diplomática', 'дипломатическая абайя', '外交长袍', 'diplomatische Abaya', 'diplomatieke abaya', 'abaya diplomática', 'abaya diplomatik', 'abaya diplomatik'],
  ['city abaya Abu Dhabi', 'عباية المدينة أبوظبي', 'abaya urbaine Abou Dabi', 'abaya city Abu Dhabi', 'abaya city Abu Dabi', 'городская абайя Абу-Даби', '阿布扎比城市长袍', 'City-Abaya Abu Dhabi', 'city abaya Abu Dhabi', 'abaya city Abu Dhabi'],
  ['Monogram cufflink abaya', 'عباية بأزرار كُم Monogram', 'abaya boutons de manchette Monogram', 'abaya gemelli Monogram', 'abaya gemelos Monogram', 'абайя с запонами Monogram', 'Monogram 袖扣长袍', 'Monogram-Manschettenknopf-Abaya', 'Monogram manchetknopen abaya', 'abaya gemelos Monogram'],
  ['shoulder scarf abaya', 'عباية بوشاح كتف', 'abaya écharpe d’épaule', 'abaya sciarpa a spalla', 'abaya pañuelo de hombro', 'абайя с плечевым шарфом', '肩巾长袍', 'Schultertuch-Abaya', 'schoudersjaal abaya', 'abaya echarpe de ombro', 'abaya syal bahu', 'abaya selendang bahu'],
  ['BS-AB-006', 'BS-AB-006', 'BS-AB-006', 'BS-AB-006', 'BS-AB-006', 'BS-AB-006', 'BS-AB-006', 'BS-AB-006', 'BS-AB-006', 'BS-AB-006'],
]

const HAMPSTEAD_ROWS: KwRow[] = [
  ['Hampstead Dress', 'فستان Hampstead', 'Robe Hampstead', 'Hampstead Dress', 'Vestido Hampstead', 'Платье Hampstead', 'Hampstead 连衣裙', 'Hampstead Dress', 'Hampstead Dress', 'Vestido Hampstead', 'Gaun Hampstead', 'Gaun Hampstead'],
  ['Al Talli dress', 'فستان التلي', 'robe Al Talli', 'abito Al Talli', 'vestido Al Talli', 'платье Al Talli', 'Al Talli 连衣裙', 'Al-Talli-Kleid', 'Al Talli jurk', 'vestido Al Talli', 'gaun Al Talli', 'gaun Al Talli'],
  ['structured dress', 'فستان مُهيكَل', 'robe structurée', 'abito strutturato', 'vestido estructurado', 'структурированное платье', '结构感连衣裙', 'strukturiertes Kleid', 'gestructureerde jurk', 'vestido estruturado', 'gaun terstruktur', 'gaun berstruktur'],
  ['evening dress Abu Dhabi', 'فستان مسائي أبوظبي', 'robe de soirée Abou Dabi', 'abito serale Abu Dhabi', 'vestido de noche Abu Dabi', 'вечернее платье Абу-Даби', '阿布扎比晚宴裙', 'Abendkleid Abu Dhabi', 'avondjurk Abu Dhabi', 'vestido de noite Abu Dhabi', 'gaun malam Abu Dhabi', 'gaun malam Abu Dhabi'],
  ['Covent Garden Abaya pairing dress', 'فستان يُنسّق مع عباية Covent Garden', 'robe à associer abaya Covent Garden', 'abito abbinato Covent Garden Abaya', 'vestido para abaya Covent Garden', 'платье к абайе Covent Garden', '搭配Covent Garden长袍裙', 'Kleid zu Covent Garden Abaya', 'jurk bij Covent Garden abaya', 'vestido com abaya Covent Garden', 'gaun pasangan Covent Garden Abaya', 'gaun pasangan Covent Garden Abaya'],
  ['BS-DR-003', 'BS-DR-003', 'BS-DR-003', 'BS-DR-003', 'BS-DR-003', 'BS-DR-003', 'BS-DR-003', 'BS-DR-003', 'BS-DR-003', 'BS-DR-003'],
]

const SOHO_ROWS: KwRow[] = [
  ['Soho Set', 'مجموعة Soho', 'Set Soho', 'Soho Set', 'Set Soho', 'Комплект Soho', 'Soho 套装', 'Soho Set', 'Soho Set', 'Set Soho'],
  ['Al Talli set', 'طقم التلي', 'set Al Talli', 'set Al Talli', 'set Al Talli', 'комплект Al Talli', 'Al Talli 套装', 'Al-Talli-Set', 'Al Talli set', 'set Al Talli', 'set Al Talli', 'set Al Talli'],
  ['coordinate set', 'طقم منسّق', 'set coordonné', 'set coordinato', 'set coordinado', 'координированный комплект', '套装', 'Koordinaten-Set', 'coördinatieset', 'set coordenado', 'set terkoordinasi', 'set berkoordinasi'],
  ['two-piece modest set', 'طقم محتشم ثنائي', 'set modeste deux pièces', 'set modesto due pezzi', 'set modesto dos piezas', 'скромный комплект из двух частей', '两件套端庄套装', 'zweiteiliges bescheidenes Set', 'tweedelige bescheiden set', 'set modesto duas peças', 'set modest dua potong', 'set modest dua keping'],
  ['day to evening set', 'طقم من النهار للمساء', 'set jour-soir', 'set giorno-sera', 'set día-noche', 'комплект день-вечер', '日夜套装', 'Tag-zu-Abend-Set', 'dag-tot-avond set', 'set dia-noite', 'set siang ke malam', 'set siang ke malam'],
  ['BS-ST-003', 'BS-ST-003', 'BS-ST-003', 'BS-ST-003', 'BS-ST-003', 'BS-ST-003', 'BS-ST-003', 'BS-ST-003', 'BS-ST-003', 'BS-ST-003'],
]

const PACKS: Record<string, Record<AppLocale, string>[]> = {
  [MARYLEBONE_SLUG]: rowsToKw(MARYLEBONE_ROWS),
  [PARK_LANE_SLUG]: rowsToKw(PARK_LANE_ROWS),
  [HAMPSTEAD_SLUG]: rowsToKw(HAMPSTEAD_ROWS),
  [SOHO_SLUG]: rowsToKw(SOHO_ROWS),
}

/** English discovery extras — always merged (never removed) for every locale. */
const EN_EXTRA: Record<string, readonly string[]> = {
  [MARYLEBONE_SLUG]: [
    'Bint Saeed Marylebone Abaya',
    'buy Onyx strand abaya',
    'interchangeable abaya jewellery UAE',
    'natural stone abaya Dubai',
    'luxury abaya Riyadh Doha',
    'GCC designer abaya',
  ],
  [PARK_LANE_SLUG]: [
    'Bint Saeed Park Lane Abaya',
    'buy executive abaya online',
    'diplomatic abaya UAE',
    'city abaya Dubai Abu Dhabi',
    'luxury abaya Saudi Qatar',
    'Monogram cufflink abaya',
  ],
  [HAMPSTEAD_SLUG]: [
    'Bint Saeed Hampstead Dress',
    'buy Al Talli dress',
    'heritage evening dress',
    'Emirati designer dress',
    'luxury gift for wife dress',
    'under abaya dress Abu Dhabi',
  ],
  [SOHO_SLUG]: [
    'Bint Saeed Soho Set',
    'shop Al Talli set',
    'heritage coordinate set',
    'modest occasion set',
    'luxury gift for mother set',
    'travel set abaya wardrobe',
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

  // Merge EN + locale terms so existing English discovery tags are never dropped.
  const terms = new Set<string>([
    ...rows.map((r) => r.en),
    ...(EN_EXTRA[key] ?? []),
    ...(locale === 'en' ? [] : rows.map((r) => r[locale])),
  ])
  const color = colorName?.trim()
  if (color) terms.add(color)

  return [...terms]
}
