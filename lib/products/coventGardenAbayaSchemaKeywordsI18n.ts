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

const ABAYA_TYPE: Record<AppLocale, string> = {
  en: 'abaya',
  ar: 'عباية',
  fr: 'abaya',
  it: 'abaya',
  es: 'abaya',
  ru: 'абайя',
  zh: '长袍',
  de: 'Abaya',
  nl: 'abaya',
  pt: 'abaya',
  id: 'abaya',
  ms: 'abaya',
}

const COVENT_GARDEN_ABAYA_EXCLUSIVE_ROWS: KwRow[] = [
  ['Covent Garden Abaya', 'عباية Covent Garden', 'Abaya Covent Garden', 'Covent Garden Abaya', 'Abaya Covent Garden', 'Абайя Covent Garden', 'Covent Garden 长袍', 'Covent Garden Abaya', 'Covent Garden abaya', 'Abaya Covent Garden'],
  ['Bint Saeed Covent Garden Abaya', 'عباية Covent Garden من Bint Saeed', 'Abaya Covent Garden Bint Saeed', 'Covent Garden Abaya Bint Saeed', 'Abaya Covent Garden Bint Saeed', 'Абайя Covent Garden Bint Saeed', 'Bint Saeed Covent Garden 长袍', 'Bint Saeed Covent Garden Abaya', 'Bint Saeed Covent Garden abaya', 'Abaya Covent Garden Bint Saeed'],
  ['A-line abaya', 'عباية A-line', 'abaya A-line', 'abaya A-line', 'abaya A-line', 'абайя A-line', 'A字长袍', 'A-Linien-Abaya', 'A-line abaya', 'abaya A-line'],
  ['elegant A-line abaya', 'عباية A-line أنيقة', 'abaya A-line élégante', 'abaya A-line elegante', 'abaya A-line elegante', 'элегантная абайя A-line', '优雅A字长袍', 'elegante A-Linien-Abaya', 'elegante A-line abaya', 'abaya A-line elegante'],
  ['designer abaya', 'عباية مصمّمة', 'abaya de créateur', 'abaya designer', 'abaya de diseñador', 'дизайнерская абайя', '设计师长袍', 'Designer-Abaya', 'designer abaya', 'abaya de designer'],
  ['luxury abaya', 'عباية فاخرة', 'abaya de luxe', 'abaya di lusso', 'abaya de lujo', 'роскошная абайя', '奢华长袍', 'Luxus-Abaya', 'luxe abaya', 'abaya de luxo'],
  ['premium abaya', 'عباية راقية', 'abaya premium', 'abaya premium', 'abaya premium', 'премиальная абайя', '高端长袍', 'Premium-Abaya', 'premium abaya', 'abaya premium'],
  ['Al Talli abaya', 'عباية التلي', 'abaya Al Talli', 'abaya Al Talli', 'abaya Al Talli', 'абайя Al Talli', 'Al Talli 长袍', 'Al-Talli-Abaya', 'Al Talli abaya', 'abaya Al Talli'],
  ['Al Talli trim abaya', 'عباية بتفاصيل التلي', 'abaya garniture Al Talli', 'abaya finitura Al Talli', 'abaya ribete Al Talli', 'абайя с отделкой Al Talli', 'Al Talli饰边长袍', 'Abaya mit Al-Talli-Verzierung', 'Al Talli-afwerking abaya', 'abaya acabamento Al Talli'],
  ['UNESCO heritage abaya', 'عباية تراث اليونسكو', 'abaya patrimoine UNESCO', 'abaya patrimonio UNESCO', 'abaya patrimonio UNESCO', 'абайя наследие ЮНЕСКО', '联合国教科文组织遗产长袍', 'UNESCO-Erbe-Abaya', 'UNESCO-erfgoed abaya', 'abaya património UNESCO'],
  ['Emirati heritage abaya', 'عباية تراث إماراتي', 'abaya patrimoine émirati', 'abaya patrimonio emiratino', 'abaya patrimonio emiratí', 'абайя эмиратского наследия', '阿联酋传承长袍', 'emiratisches Erbe-Abaya', 'Emiratisch erfgoed abaya', 'abaya património emirati'],
  ['Emirati designer abaya', 'عباية مصمّم إماراتي', 'abaya créateur émirati', 'abaya designer emiratino', 'abaya diseñador emiratí', 'абайя эмиратского дизайнера', '阿联酋设计师长袍', 'emiratische Designer-Abaya', 'Emiratische designer abaya', 'abaya designer emirati'],
  ['open-front abaya', 'عباية أمامية مفتوحة', 'abaya ouvert devant', 'abaya frontale aperta', 'abaya frontal abierta', 'абайя с открытым передом', '开襟长袍', 'Offene-Front-Abaya', 'open-front abaya', 'abaya frente aberta'],
  ['detachable sash abaya', 'عباية بوشاح قابل للفصل', 'abaya écharpe amovible', 'abaya fascia removibile', 'abaya fajín desmontable', 'абайя со съёмной лентой', '可拆卸饰带长袍', 'Abaya mit abnehmbarem Schal', 'abaya met afneembare sjerp', 'abaya com faixa destacável'],
  ['Knotted Line abaya', 'عباية Knotted Line', 'abaya Knotted Line', 'abaya Knotted Line', 'abaya Knotted Line', 'абайя Knotted Line', 'Knotted Line 长袍', 'Knotted-Line-Abaya', 'Knotted Line abaya', 'abaya Knotted Line'],
  ['wedding abaya', 'عباية زفاف', 'abaya de mariage', 'abaya da matrimonio', 'abaya de boda', 'свадебная абайя', '婚礼长袍', 'Hochzeits-Abaya', 'bruiloftsabaya', 'abaya de casamento'],
  ['formal abaya', 'عباية رسمية', 'abaya formelle', 'abaya formale', 'abaya formal', 'формальная абайя', '正式长袍', 'formelle Abaya', 'formele abaya', 'abaya formal'],
  ['occasion abaya', 'عباية مناسبات', 'abaya de cérémonie', 'abaya da cerimonia', 'abaya de ocasión', 'абайя для особых случаев', '场合长袍', 'Anlass-Abaya', 'gelegenheidsabaya', 'abaya de ocasião'],
  ['Abu Dhabi abaya', 'عباية أبوظبي', 'abaya Abou Dabi', 'abaya Abu Dhabi', 'abaya Abu Dabi', 'абайя Абу-Даби', '阿布扎比长袍', 'Abaya Abu Dhabi', 'Abu Dhabi abaya', 'abaya Abu Dhabi'],
  ['Bint Saeed Abu Dhabi', 'Bint Saeed أبوظبي', 'Bint Saeed Abou Dabi', 'Bint Saeed Abu Dhabi', 'Bint Saeed Abu Dabi', 'Bint Saeed Абу-Даби', 'Bint Saeed阿布扎比', 'Bint Saeed Abu Dhabi', 'Bint Saeed Abu Dhabi', 'Bint Saeed Abu Dhabi'],
  ['designed in Abu Dhabi', 'صُممت في أبوظبي', 'conçue à Abou Dabi', 'progettata ad Abu Dhabi', 'diseñada en Abu Dabi', 'создана в Абу-Даби', '阿布扎比设计', 'designed in Abu Dhabi', 'ontworpen in Abu Dhabi', 'desenhada em Abu Dhabi'],
  ['United Arab Emirates abaya', 'عباية الإمارات العربية المتحدة', 'abaya Émirats arabes unis', 'abaya Emirati Arabi Uniti', 'abaya Emiratos Árabes Unidos', 'абайя ОАЭ', '阿联酋长袍', 'Abaya Vereinigte Arabische Emirate', 'Verenigde Arabische Emiraten abaya', 'abaya Emirados Árabes Unidos'],
  ['GCC abaya', 'عباية دول الخليج', 'abaya Golfe', 'abaya Golfo', 'abaya Golfo', 'абайя стран Залива', '海湾长袍', 'GCC-Abaya', 'GCC-abaya', 'abaya Golfo'],
  ['international modest fashion abaya', 'عباية أزياء محتشمة دولية', 'abaya mode modeste internationale', 'abaya moda modesta internazionale', 'abaya moda modesta internacional', 'международная скромная абайя', '国际端庄时尚长袍', 'internationale bescheidene Mode-Abaya', 'internationale bescheiden mode abaya', 'abaya moda modesta internacional'],
  ['Covent Garden Dress pairing abaya', 'عباية تُنسّق مع فستان Covent Garden', 'abaya à associer robe Covent Garden', 'abaya abbinata Covent Garden Dress', 'abaya para combinar Covent Garden Dress', 'абайя в паре с платьем Covent Garden', '搭配Covent Garden连衣裙长袍', 'Abaya zur Kombination Covent Garden Dress', 'abaya te combineren met Covent Garden Dress', 'abaya para combinar Covent Garden Dress'],
  ['Hampstead Dress pairing abaya', 'عباية تُنسّق مع فستان Hampstead', 'abaya à associer robe Hampstead', 'abaya abbinata Hampstead Dress', 'abaya para combinar Hampstead Dress', 'абайя в паре с платьем Hampstead', '搭配Hampstead连衣裙长袍', 'Abaya zur Kombination Hampstead Dress', 'abaya te combineren met Hampstead Dress', 'abaya para combinar Hampstead Dress'],
  ['Burgundy abaya', 'عباية عنابية', 'abaya bordeaux', 'abaya bordeaux', 'abaya burdeos', 'бордовая абайя', '酒红色长袍', 'burgunderfarbene Abaya', 'bordeaux abaya', 'abaya bordô'],
  ['Deep Black abaya', 'عباية أسود عميق', 'abaya noir profond', 'abaya nero profondo', 'abaya negro profundo', 'глубоко чёрная абайя', '深黑色长袍', 'tiefschwarze Abaya', 'diepzwarte abaya', 'abaya preto profundo'],
  ['Navy Blue abaya', 'عباية كحلية', 'abaya bleu marine', 'abaya blu navy', 'abaya azul marino', 'тёмно-синяя абайя', '海军蓝长袍', 'marineblaue Abaya', 'marineblauwe abaya', 'abaya azul-marinho'],
  ['BS-AB-002', 'BS-AB-002', 'BS-AB-002', 'BS-AB-002', 'BS-AB-002', 'BS-AB-002', 'BS-AB-002', 'BS-AB-002', 'BS-AB-002', 'BS-AB-002'],
]

const COVENT_GARDEN_ABAYA_EXCLUSIVE_I18N = rowsToKw(COVENT_GARDEN_ABAYA_EXCLUSIVE_ROWS)

/** Approved EN discovery terms — global reach, Emirati heritage, designer abayas. */
const COVENT_GARDEN_ABAYA_KEYWORDS_EN = [
  'Al Talli',
  'what is Al Talli',
  'Al Talli embroidery',
  'Al Talli abaya',
  'buy Al Talli abaya',
  'UNESCO Al Talli',
  'Covent Garden Abaya',
  'Bint Saeed Covent Garden Abaya',
  'Bint Saeed Abu Dhabi',
  'Bint Saeed UAE',
  'designed by Bint Saeed Abu Dhabi',
  'made in Abu Dhabi',
  'created in Abu Dhabi',
  'United Arab Emirates abaya',
  'UAE abaya',
  'Abu Dhabi abaya',
  'Abu Dhabi designer abaya',
  'Emirati abaya',
  'Emirati brand abaya',
  'Emirati designer abaya',
  'Emirati heritage abaya',
  'contemporary Emirati design',
  'heritage abaya',
  'Al Talli',
  'Al Talli abaya',
  'Al Talli trim',
  'Al Talli woven trim',
  'UNESCO Intangible Cultural Heritage',
  'traditional Emirati craft',
  'Emirati artisanal craft',
  'A-line abaya',
  'elegant A-line abaya',
  'flowing abaya',
  'designer abaya',
  'luxury abaya',
  'premium abaya',
  'contemporary abaya',
  'formal abaya',
  'wedding abaya',
  'occasion abaya',
  'statement abaya',
  'open-front abaya',
  'detachable sash abaya',
  'Knotted Line buttons',
  'gold-tone emblem pin',
  'hidden inner label',
  'personalised abaya',
  'custom length abaya',
  'modest fashion',
  'premium modest fashion',
  'designer modest fashion',
  'luxury modest fashion',
  'international modest fashion',
  'GCC fashion',
  'GCC abaya',
  'Gulf wardrobe abaya',
  'women in the UAE',
  'women in the GCC',
  'expatriates in the GCC',
  'international wardrobe',
  'London abaya',
  'Paris abaya',
  'Toronto abaya',
  'Brunei abaya',
  'European occasion abaya',
  'embassy reception abaya',
  'cultural event abaya',
  'official occasion abaya',
  'Covent Garden Dress pairing',
  'Hampstead Dress pairing',
  'layering abaya',
  'crepe lined abaya',
  'hidden pocket abaya',
  'Burgundy abaya',
  'Deep Black abaya',
  'Navy Blue abaya',
  'luxury gift for wife',
  'luxury gift for mother',
  'premium gift for wife',
  'premium gift for mother',
  'showcase Emirati heritage',
  'abayas to the world',
  'BS-AB-002',
] as const

export function getLocalizedCoventGardenAbayaExclusiveKeywords(
  locale: AppLocale,
  colorName?: string,
): string[] {
  const terms = new Set<string>(
    locale === 'en'
      ? [...COVENT_GARDEN_ABAYA_KEYWORDS_EN, ...COVENT_GARDEN_ABAYA_EXCLUSIVE_I18N.map((row) => row.en)]
      : COVENT_GARDEN_ABAYA_EXCLUSIVE_I18N.map((row) => row[locale]),
  )
  const color = colorName?.trim()
  if (color) {
    terms.add(color)
    terms.add(`${color} ${ABAYA_TYPE[locale]}`)
  }
  return [...terms]
}
