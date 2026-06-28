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

const DRESS_TYPE: Record<AppLocale, string> = {
  en: 'dress',
  ar: 'فستان',
  fr: 'robe',
  it: 'abito',
  es: 'vestido',
  ru: 'платье',
  zh: '连衣裙',
  de: 'Kleid',
  nl: 'jurk',
  pt: 'vestido',
  id: 'dress',
  ms: 'dress',
}

const COVENT_GARDEN_DRESS_EXCLUSIVE_ROWS: KwRow[] = [
  ['Covent Garden Dress', 'فستان Covent Garden', 'Robe Covent Garden', 'Covent Garden Dress', 'Covent Garden Dress', 'Платье Covent Garden', 'Covent Garden Dress', 'Covent Garden Dress', 'Covent Garden Dress', 'Covent Garden Dress'],
  ['Covent Garden Long Dress', 'فستان Covent Garden الطويل', 'Robe longue Covent Garden', 'Covent Garden Long Dress', 'Vestido largo Covent Garden', 'Длинное платье Covent Garden', 'Covent Garden Long Dress', 'Covent Garden Long Dress', 'Covent Garden Long Dress', 'Vestido comprido Covent Garden'],
  ['Bint Saeed Covent Garden Dress', 'فستان Covent Garden من Bint Saeed', 'Robe Covent Garden Bint Saeed', 'Covent Garden Dress Bint Saeed', 'Vestido Covent Garden Bint Saeed', 'Платье Covent Garden Bint Saeed', 'Bint Saeed Covent Garden Dress', 'Bint Saeed Covent Garden Dress', 'Bint Saeed Covent Garden Dress', 'Vestido Covent Garden Bint Saeed'],
  ['elegant long dress', 'فستان طويل أنيق', 'robe longue élégante', 'abito lungo elegante', 'vestido largo elegante', 'элегантное длинное платье', '优雅长款连衣裙', 'elegantes langes Kleid', 'elegante lange jurk', 'vestido comprido elegante'],
  ['tailored maxi dress', 'فستان ماكسي مفصّل', 'robe maxi structurée', 'abito maxi sartoriale', 'vestido maxi sastreado', 'приталенное макси-платье', '剪裁长款连衣裙', 'tailliertes Maxikleid', 'getailleerde maxi-jurk', 'vestido maxi estruturado'],
  ['fitted maxi dress', 'فستان ماكسي مفصّل', 'robe maxi ajustée', 'abito maxi fitted', 'vestido maxi entallado', 'облегающее макси-платье', '修身长款连衣裙', 'fitted Maxikleid', 'fitted maxi-jurk', 'vestido maxi fitted'],
  ['under abaya dress', 'فستان تحت العباية', 'robe sous abaya', 'abito sotto abaya', 'vestido bajo abaya', 'платье под абайю', '内穿长袍连衣裙', 'Under-Abaya-Kleid', 'under-abaya jurk', 'vestido sob abaya'],
  ['under-abaya dress', 'فستان تحت العباية', 'robe sous-abaya', 'abito under-abaya', 'vestido under-abaya', 'платье under-abaya', '内穿长袍裙', 'Under-Abaya-Kleid', 'under-abaya jurk', 'vestido under-abaya'],
  ['signature under-abaya dress', 'فستان مميز تحت العباية', 'robe signature sous abaya', 'abito signature sotto abaya', 'vestido signature bajo abaya', 'фирменное платье под абайю', '标志性内穿长袍裙', 'Signature-Under-Abaya-Kleid', 'signature under-abaya jurk', 'vestido signature sob abaya'],
  ['sleeveless under abaya dress', 'فستان بدون أكمام تحت العباية', 'robe sans manches sous abaya', 'abito senza maniche sotto abaya', 'vestido sin mangas bajo abaya', 'платье без рукавов под абайю', '无袖内穿长袍裙', 'ärmelloses Under-Abaya-Kleid', 'mouwloze under-abaya jurk', 'vestido sem mangas sob abaya'],
  ['Gulf wardrobe dress', 'فستان خزانة الخليج', 'robe garde-robe Golfe', 'abito guardaroba Golfo', 'vestido armario Golfo', 'платье для гардероба Залива', '海湾衣橱连衣裙', 'Golf-Garderoben-Kleid', 'Golf-garderobe jurk', 'vestido guarda-roupa Golfo'],
  ['premium long dress', 'فستان طويل راقٍ', 'robe longue premium', 'abito lungo premium', 'vestido largo premium', 'премиальное длинное платье', '高端长款连衣裙', 'Premium-Langkleid', 'premium lange jurk', 'vestido comprido premium'],
  ['designer long dress', 'فستان طويل مصمّم', 'robe longue de créateur', 'abito lungo designer', 'vestido largo de diseñador', 'дизайнерское длинное платье', '设计师长款连衣裙', 'Designer-Langkleid', 'designer lange jurk', 'vestido comprido de designer'],
  ['contemporary long dress', 'فستان طويل معاصر', 'robe longue contemporaine', 'abito lungo contemporaneo', 'vestido largo contemporáneo', 'современное длинное платье', '当代长款连衣裙', 'zeitgenössisches Langkleid', 'eigentijdse lange jurk', 'vestido comprido contemporâneo'],
  ['work dress', 'فستان للعمل', 'robe de travail', 'abito da lavoro', 'vestido de trabajo', 'платье для работы', '职场连衣裙', 'Arbeitskleid', 'werkjurk', 'vestido de trabalho'],
  ['office dress', 'فستان مكتبي', 'robe de bureau', 'abito da ufficio', 'vestido de oficina', 'офисное платье', '办公室连衣裙', 'Bürokleid', 'kantoorjurk', 'vestido de escritório'],
  ['afternoon tea dress', 'فستان شاي بعد الظهر', 'robe afternoon tea', 'abito afternoon tea', 'vestido té de la tarde', 'платье для послеобеденного чая', '下午茶连衣裙', 'Afternoon-Tea-Kleid', 'afternoon tea jurk', 'vestido chá da tarde'],
  ['wedding guest dress', 'فستان ضيفة زفاف', 'robe invitée mariage', 'abito invitata matrimonio', 'vestido invitada boda', 'платье для гостьи свадьбы', '婚礼宾客连衣裙', 'Hochzeitsgast-Kleid', 'bruiloftsgast jurk', 'vestido convidada casamento'],
  ['modest long dress', 'فستان طويل محتشم', 'robe longue modeste', 'abito lungo modesto', 'vestido largo modesto', 'скромное длинное платье', '端庄长款连衣裙', 'bescheidenes Langkleid', 'bescheiden lange jurk', 'vestido comprido modesto'],
  ['premium modest fashion dress', 'فستان أزياء محتشمة راقية', 'robe mode modeste premium', 'abito moda modesta premium', 'vestido moda modesta premium', 'премиальное скромное платье', '高端端庄时尚连衣裙', 'premium bescheidenes Mode-Kleid', 'premium bescheiden mode jurk', 'vestido moda modesta premium'],
  ['Abu Dhabi designer dress', 'فستان مصمّم أبوظبي', 'robe designer Abou Dabi', 'abito designer Abu Dhabi', 'vestido diseñador Abu Dabi', 'дизайнерское платье Абу-Даби', '阿布扎比设计师连衣裙', 'Designer-Kleid Abu Dhabi', 'designer jurk Abu Dhabi', 'vestido designer Abu Dhabi'],
  ['Emirati brand dress', 'فستان علامة إماراتية', 'robe marque émiratie', 'abito marchio emiratino', 'vestido marca emiratí', 'платье эмиратского бренда', '阿联酋品牌连衣裙', 'emiratische Markenkleid', 'Emiratisch merk jurk', 'vestido marca emirati'],
  ['Created in Abu Dhabi dress', 'فستان صُنع في أبوظبي', 'robe créée à Abou Dabi', 'abito creato ad Abu Dhabi', 'vestido creado en Abu Dabi', 'платье, созданное в Абу-Даби', '阿布扎比创作连衣裙', 'In Abu Dhabi geschaffenes Kleid', 'in Abu Dhabi gemaakte jurk', 'vestido criado em Abu Dhabi'],
  ['Covent Garden Abaya pairing dress', 'فستان يُنسّق مع عباية Covent Garden', 'robe à associer abaya Covent Garden', 'abito abbinato abaya Covent Garden', 'vestido para combinar abaya Covent Garden', 'платье в паре с абайей Covent Garden', '搭配Covent Garden长袍连衣裙', 'Kleid zur Kombination Covent Garden Abaya', 'jurk te combineren met Covent Garden abaya', 'vestido para combinar abaya Covent Garden'],
  ['Kensington Abaya pairing dress', 'فستان يُنسّق مع عباية Kensington', 'robe à associer abaya Kensington', 'abito abbinato abaya Kensington', 'vestido para combinar abaya Kensington', 'платье в паре с абайей Kensington', '搭配Kensington长袍连衣裙', 'Kleid zur Kombination Kensington Abaya', 'jurk te combineren met Kensington abaya', 'vestido para combinar abaya Kensington'],
  ['Marylebone Abaya pairing dress', 'فستان يُنسّق مع عباية Marylebone', 'robe à associer abaya Marylebone', 'abito abbinato abaya Marylebone', 'vestido para combinar abaya Marylebone', 'платье в паре с абайей Marylebone', '搭配Marylebone长袍连衣裙', 'Kleid zur Kombination Marylebone Abaya', 'jurk te combineren met Marylebone abaya', 'vestido para combinar abaya Marylebone'],
  ['Burgundy long dress', 'فستان طويل عنابي', 'robe longue bordeaux', 'abito lungo bordeaux', 'vestido largo burdeos', 'длинное платье Burgundy', '酒红色长款连衣裙', 'burgunderfarbenes Langkleid', 'bordeaux lange jurk', 'vestido comprido bordô'],
  ['Black long dress', 'فستان طويل أسود', 'robe longue noire', 'abito lungo nero', 'vestido largo negro', 'чёрное длинное платье', '黑色长款连衣裙', 'schwarzes Langkleid', 'zwarte lange jurk', 'vestido comprido preto'],
  ['Deep Black long dress', 'فستان طويل أسود عميق', 'robe longue noir profond', 'abito lungo nero profondo', 'vestido largo negro profundo', 'длинное платье Deep Black', '深黑长款连衣裙', 'tiefschwarzes Langkleid', 'diepzwarte lange jurk', 'vestido comprido preto profundo'],
  ['Navy Blue long dress', 'فستان طويل كحلي', 'robe longue bleu marine', 'abito lungo blu navy', 'vestido largo azul marino', 'длинное платье Navy Blue', '海军蓝长款连衣裙', 'marineblaues Langkleid', 'marineblauwe lange jurk', 'vestido comprido azul-marinho'],
  ['formal long dress', 'فستان طويل رسمي', 'robe longue formelle', 'abito lungo formale', 'vestido largo formal', 'формальное длинное платье', '正式长款连衣裙', 'formelles Langkleid', 'formele lange jurk', 'vestido comprido formal'],
  ['classy long dress', 'فستان طويل راقٍ', 'robe longue chic', 'abito lungo di classe', 'vestido largo con clase', 'изысканное длинное платье', '精致长款连衣裙', 'stilvolles Langkleid', 'stijlvolle lange jurk', 'vestido comprido elegante'],
  ['simple long dress', 'فستان طويل بسيط', 'robe longue simple', 'abito lungo semplice', 'vestido largo sencillo', 'простое длинное платье', '简约长款连衣裙', 'schlichtes Langkleid', 'eenvoudige lange jurk', 'vestido comprido simples'],
  ['dress colour variants', 'ألوان متعددة للفستان', 'variantes de couleur robe', 'varianti colore abito', 'variantes de color vestido', 'цветовые варианты платья', '连衣裙颜色变体', 'Kleid-Farbvarianten', 'kleurvarianten jurk', 'variantes de cor vestido'],
  ['dress color variants', 'متغيرات ألوان الفستان', 'variantes couleur robe', 'varianti colore abito', 'variantes color vestido', 'варианты цвета платья', '连衣裙颜色款式', 'Farbvarianten Kleid', 'kleurvarianten jurk', 'variantes de cor vestido'],
  ['luxury gift for wife dress', 'فستان هدية فاخرة للزوجة', 'robe cadeau luxe épouse', 'abito regalo lusso moglie', 'vestido regalo lujo esposa', 'платье — роскошный подарок жене', '赠妻奢华礼裙', 'Luxusgeschenk Ehefrau Kleid', 'luxe cadeau echtgenote jurk', 'vestido presente luxo esposa'],
  ['premium gift for mother dress', 'فستان هدية راقية للأم', 'robe cadeau premium mère', 'abito regalo premium madre', 'vestido regalo premium madre', 'платье — премиальный подарок матери', '赠母高端礼裙', 'Premiumgeschenk Mutter Kleid', 'premium cadeau moeder jurk', 'vestido presente premium mãe'],
  ['BS-DR-002', 'BS-DR-002', 'BS-DR-002', 'BS-DR-002', 'BS-DR-002', 'BS-DR-002', 'BS-DR-002', 'BS-DR-002', 'BS-DR-002', 'BS-DR-002'],
]

const COVENT_GARDEN_DRESS_EXCLUSIVE_I18N = rowsToKw(COVENT_GARDEN_DRESS_EXCLUSIVE_ROWS)

/** Approved EN discovery terms — broad target audience. */
const COVENT_GARDEN_LONG_DRESS_KEYWORDS_EN = [
  'Covent Garden Dress',
  'Covent Garden Long Dress',
  'Bint Saeed Covent Garden Dress',
  'Bint Saeed Abu Dhabi',
  'Bint Saeed UAE',
  'elegant long dress',
  'formal dress',
  'formal long dress',
  'classy dress',
  'classy long dress',
  'simple dress',
  'simple long dress',
  'dress variants',
  'dress colour variants',
  'dress color variants',
  'long dress',
  'maxi dress',
  'tailored maxi dress',
  'fitted maxi dress',
  'tailored long dress',
  'contemporary long dress',
  'designer long dress',
  'premium long dress',
  'designer dress',
  'premium dress',
  'contemporary dress',
  'under abaya dress',
  'under-abaya dress',
  'signature under-abaya dress',
  'sleeveless dress',
  'sleeveless under abaya dress',
  'round neckline dress',
  'concealed zip dress',
  'hidden pocket dress',
  'work dress',
  'office dress',
  'business meeting dress',
  'elegant lunch dress',
  'afternoon tea dress',
  'dinner dress',
  'gallery opening dress',
  'cultural event dress',
  'wedding guest dress',
  'special occasion dress',
  'formal day dress',
  'versatile wardrobe dress',
  'timeless dress',
  'modest fashion',
  'premium modest fashion',
  'designer modest fashion',
  'contemporary womenswear',
  'premium womenswear',
  'Gulf wardrobe',
  'GCC fashion',
  'UAE fashion',
  'Emirati fashion',
  'Emirati brand',
  'Emirati designer',
  'Abu Dhabi fashion',
  'Abu Dhabi designer',
  'Abu Dhabi contemporary fashion',
  'made in Abu Dhabi',
  'created in Abu Dhabi',
  'United Arab Emirates fashion',
  'women in the UAE',
  'women in the GCC',
  'expatriates in the GCC',
  'international wardrobe',
  'London style dress',
  'Paris style dress',
  'European wardrobe dress',
  'Covent Garden Abaya pairing',
  'Kensington Abaya pairing',
  'Marylebone Abaya pairing',
  'layering dress',
  'abaya layering dress',
  'Burgundy dress',
  'Burgundy long dress',
  'Deep Black dress',
  'Deep Black long dress',
  'Black long dress',
  'Navy Blue dress',
  'Navy Blue long dress',
  'adjustable length dress',
  'custom length dress',
  'luxury gift for wife',
  'luxury gift for mother',
  'luxury gift for daughter',
  'premium gift for wife',
  'premium gift for mother',
  'premium gift for daughter',
  'BS-DR-002',
] as const

export function getLocalizedCoventGardenLongDressExclusiveKeywords(
  locale: AppLocale,
  colorName?: string,
): string[] {
  const terms = new Set<string>(
    locale === 'en'
      ? [...COVENT_GARDEN_LONG_DRESS_KEYWORDS_EN, ...COVENT_GARDEN_DRESS_EXCLUSIVE_I18N.map((row) => row.en)]
      : COVENT_GARDEN_DRESS_EXCLUSIVE_I18N.map((row) => row[locale]),
  )
  const color = colorName?.trim()
  if (color) {
    terms.add(color)
    terms.add(`${color} ${DRESS_TYPE[locale]}`)
    terms.add(`${color} long dress`)
  }
  return [...terms]
}
