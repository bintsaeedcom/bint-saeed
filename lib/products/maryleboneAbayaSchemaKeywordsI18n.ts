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
): Record<AppLocale, string> {
  return { en, ar, fr, it, es, ru, zh, de, nl, pt, id: en, ms: en }
}

type KwRow = [string, string, string, string, string, string, string, string, string, string]

function rowsToKw(rows: KwRow[]): Record<AppLocale, string>[] {
  return rows.map(([en, ar, fr, it, es, ru, zh, de, nl, pt]) =>
    kw(en, ar, fr, it, es, ru, zh, de, nl, pt),
  )
}

const MARYLEBONE_EXCLUSIVE_ROWS: KwRow[] = [
  ['Marylebone Abaya', 'عباية Marylebone', 'Abaya Marylebone', 'Marylebone Abaya', 'Abaya Marylebone', 'Абайя Marylebone', 'Marylebone 长袍', 'Marylebone Abaya', 'Marylebone abaya', 'Abaya Marylebone'],
  ['Bint Saeed Marylebone Abaya', 'عباية Marylebone من Bint Saeed', 'Abaya Marylebone Bint Saeed', 'Marylebone Abaya Bint Saeed', 'Abaya Marylebone Bint Saeed', 'Абайя Marylebone Bint Saeed', 'Bint Saeed Marylebone 长袍', 'Bint Saeed Marylebone Abaya', 'Bint Saeed Marylebone abaya', 'Abaya Marylebone Bint Saeed'],
  ['graceful A-line abaya', 'عباية A-line أنيقة', 'abaya A-line gracieuse', 'abaya A-line aggraziata', 'abaya A-line elegante', 'изящная абайя A-line', '优雅A字长袍', 'anmutige A-Linien-Abaya', 'sierlijke A-line abaya', 'abaya A-line graciosa'],
  ['abaya with natural stone jewellery', 'عباية بمجوهرات أحجار طبيعية', 'abaya bijoux pierres naturelles', 'abaya gioielli pietre naturali', 'abaya joyería piedras naturales', 'абайя с украшениями из натурального камня', '天然宝石珠宝长袍', 'Abaya mit Naturstein-Schmuck', 'abaya met natuursteen sieraden', 'abaya joias pedras naturais'],
  ['Onyx Strands abaya', 'عباية بخيوط العقيق', 'abaya fils Onyx', 'abaya fili Onyx', 'abaya hebras Onyx', 'абайя с нитями оникса', '玛瑙串珠长袍', 'Onyx-Stränge-Abaya', 'Onyx Strands abaya', 'abaya fios Onyx'],
  ['removable Onyx Strands', 'خيوط عقيق قابلة للإزالة', 'fils Onyx amovibles', 'fili Onyx rimovibili', 'hebras Onyx extraíbles', 'съёмные нити оникса', '可拆卸玛瑙串', 'abnehmbare Onyx-Stränge', 'verwijderbare Onyx Strands', 'fios Onyx removíveis'],
  ['interchangeable Bint Saeed Strands', 'خيوط Bint Saeed قابلة للتبديل', 'fils Bint Saeed interchangeables', 'fili Bint Saeed intercambiabili', 'hebras Bint Saeed intercambiables', 'сменные нити Bint Saeed', '可互换Bint Saeed串珠', 'austauschbare Bint Saeed Strands', 'wisselbare Bint Saeed Strands', 'fios Bint Saeed intercambiáveis'],
  ['abaya jewellery', 'مجوهرات العباية', 'bijoux abaya', 'gioielli abaya', 'joyería abaya', 'украшения для абайи', '长袍珠宝', 'Abaya-Schmuck', 'abaya sieraden', 'joias abaya'],
  ['garment jewellery abaya', 'عباية مجوهرات الملابس', 'abaya bijoux vêtement', 'abaya gioielli capo', 'abaya joyería prenda', 'абайя с украшениями одежды', '服饰珠宝长袍', 'Kleidungs-Schmuck-Abaya', 'kleding sieraden abaya', 'abaya joias de peça'],
  ['Knotted Line abaya', 'عباية Knotted Line', 'abaya Knotted Line', 'abaya Knotted Line', 'abaya Knotted Line', 'абайя Knotted Line', 'Knotted Line 长袍', 'Knotted-Line-Abaya', 'Knotted Line abaya', 'abaya Knotted Line'],
  ['fashion editor abaya', 'عباية لمحررات الأزياء', 'abaya rédactrice mode', 'abaya editor moda', 'abaya editora moda', 'абайя для редакторов моды', '时尚编辑长袍', 'Mode-Redakteurin-Abaya', 'mode redacteur abaya', 'abaya editora moda'],
  ['fashion curator abaya', 'عباية لمنسقات الأزياء', 'abaya conservatrice mode', 'abaya curatrice moda', 'abaya curadora moda', 'абайя для кураторов моды', '时尚策展长袍', 'Mode-Kuratorin-Abaya', 'mode curator abaya', 'abaya curadora moda'],
  ['cultural heritage fashion abaya', 'عباية أزياء تراثية', 'abaya mode patrimoine culturel', 'abaya moda patrimonio culturale', 'abaya moda patrimonio cultural', 'абайя моды культурного наследия', '文化遗产时尚长袍', 'Kulturerbe-Mode-Abaya', 'cultureel erfgoed mode abaya', 'abaya moda património cultural'],
  ['fashion enthusiast abaya', 'عباية لعشاق الأزياء', 'abaya passionnée mode', 'abaya appassionata moda', 'abaya entusiasta moda', 'абайя для энтузиастов моды', '时尚爱好者长袍', 'Mode-Enthusiastin-Abaya', 'mode liefhebber abaya', 'abaya entusiasta moda'],
  ['diplomat abaya', 'عباية دبلوماسية', 'abaya diplomate', 'abaya diplomatica', 'abaya diplomática', 'дипломатическая абайя', '外交官长袍', 'Diplomaten-Abaya', 'diplomaat abaya', 'abaya diplomática'],
  ['embassy abaya', 'عباية سفارة', 'abaya ambassade', 'abaya ambasciata', 'abaya embajada', 'абайя для посольства', '使馆长袍', 'Botschafts-Abaya', 'ambassade abaya', 'abaya embaixada'],
  ['luxury abaya Abu Dhabi', 'عباية فاخرة أبوظبي', 'abaya de luxe Abou Dabi', 'abaya di lusso Abu Dhabi', 'abaya de lujo Abu Dabi', 'люксовая абайя Абу-Даби', '阿布扎比奢华长袍', 'Luxus-Abaya Abu Dhabi', 'luxe abaya Abu Dhabi', 'abaya de luxo Abu Dhabi'],
  ['contemporary designer abaya', 'عباية مصمّمة معاصرة', 'abaya de créateur contemporaine', 'abaya designer contemporanea', 'abaya diseñador contemporánea', 'современная дизайнерская абайя', '当代设计师长袍', 'zeitgenössische Designer-Abaya', 'eigentijdse designer abaya', 'abaya designer contemporânea'],
  ['modest fashion abaya', 'عباية أزياء محتشمة', 'abaya mode modeste', 'abaya moda modesta', 'abaya moda modesta', 'скромная мода абайя', '端庄时尚长袍', 'bescheidene Mode-Abaya', 'bescheiden mode abaya', 'abaya moda modesta'],
  ['gallery opening abaya', 'عباية افتتاح معرض', 'abaya vernissage galerie', 'abaya inaugurazione galleria', 'abaya inauguración galería', 'абайя для открытия галереи', '画廊开幕长袍', 'Galerie-Eröffnungs-Abaya', 'galerie opening abaya', 'abaya inauguração galeria'],
  ['Deep Black abaya', 'عباية أسود عميق', 'abaya noir profond', 'abaya nero profondo', 'abaya negro profundo', 'абайя Deep Black', '深黑色长袍', 'tiefschwarze Abaya', 'diepzwarte abaya', 'abaya preto profundo'],
  ['Navy Blue abaya', 'عباية كحلي', 'abaya bleu marine', 'abaya blu navy', 'abaya azul marino', 'абайя Navy Blue', '海军蓝长袍', 'marineblaue Abaya', 'marineblauwe abaya', 'abaya azul-marinho'],
  ['BS-AB-004', 'BS-AB-004', 'BS-AB-004', 'BS-AB-004', 'BS-AB-004', 'BS-AB-004', 'BS-AB-004', 'BS-AB-004', 'BS-AB-004', 'BS-AB-004'],
]

const MARYLEBONE_EXCLUSIVE_I18N = rowsToKw(MARYLEBONE_EXCLUSIVE_ROWS)

const MARYLEBONE_KEYWORDS_EN = [
  'Marylebone Abaya',
  'Bint Saeed Marylebone Abaya',
  'the abaya with natural stone jewellery for your wardrobe',
  'graceful A-line abaya',
  'abaya jewellery',
  'garment jewellery',
  'Signature Strands abaya',
  'Onyx Strands',
  'removable Onyx Strands',
  'interchangeable natural stone strands',
  'genuine natural Onyx gemstones',
  'gold-plated hematite beads',
  'Knotted Line strand details',
  'wide cuffs for interchangeable strands',
  'hidden side seam pockets',
  'optional snap button closure',
  'optional hidden inner label personalisation',
  'fashion editor abaya',
  'fashion curator abaya',
  'style editor modest fashion',
  'cultural heritage fashion',
  'heritage fashion audience',
  'fashion enthusiast abaya',
  'people who love fashion',
  'luxury fashion collector',
  'museum and gallery wardrobe',
  'diplomat abaya',
  'embassy reception abaya',
  'cultural engagement abaya',
  'contemporary abaya',
  'luxury abaya',
  'designer abaya Abu Dhabi',
  'made in Abu Dhabi abaya',
  'international modest fashion',
  'buy Marylebone Abaya online',
] as const

export function getLocalizedMaryleboneAbayaExclusiveKeywords(
  locale: AppLocale = 'en',
  colorName?: string,
): string[] {
  const terms = new Set<string>(
    locale === 'en'
      ? [...MARYLEBONE_KEYWORDS_EN, ...MARYLEBONE_EXCLUSIVE_ROWS.map((row) => row[0])]
      : MARYLEBONE_EXCLUSIVE_I18N.map((row) => row[locale]),
  )
  const color = colorName?.trim()
  if (color) {
    terms.add(color)
    terms.add(`${color} abaya`)
    terms.add(`Marylebone Abaya ${color}`)
  }
  return [...terms]
}

export function getMaryleboneAbayaSchemaKeywords(
  locale: AppLocale = 'en',
  colorName?: string,
): string {
  return getLocalizedMaryleboneAbayaExclusiveKeywords(locale, colorName).join(', ')
}
