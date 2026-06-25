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

const SET_TYPE: Record<AppLocale, string> = {
  en: 'set',
  ar: 'طقم',
  fr: 'ensemble',
  it: 'set',
  es: 'conjunto',
  ru: 'комплект',
  zh: '套装',
  de: 'Set',
  nl: 'set',
  pt: 'conjunto',
  id: 'set',
  ms: 'set',
}

const COVENT_GARDEN_SET_EXCLUSIVE_ROWS: KwRow[] = [
  ['Covent Garden Signature Set', 'طقم Covent Garden Signature', 'Ensemble Covent Garden Signature', 'Covent Garden Signature Set', 'Covent Garden Signature Set', 'Комплект Covent Garden Signature', 'Covent Garden Signature 套装', 'Covent Garden Signature Set', 'Covent Garden Signature Set', 'Covent Garden Signature Set'],
  ['Covent Garden Set', 'طقم Covent Garden', 'Ensemble Covent Garden', 'Set Covent Garden', 'Conjunto Covent Garden', 'Комплект Covent Garden', 'Covent Garden 套装', 'Covent Garden Set', 'Covent Garden set', 'Conjunto Covent Garden'],
  ['Bint Saeed Covent Garden Set', 'طقم Covent Garden من Bint Saeed', 'Ensemble Covent Garden Bint Saeed', 'Set Covent Garden Bint Saeed', 'Conjunto Covent Garden Bint Saeed', 'Комплект Covent Garden Bint Saeed', 'Bint Saeed Covent Garden 套装', 'Bint Saeed Covent Garden Set', 'Bint Saeed Covent Garden set', 'Conjunto Covent Garden Bint Saeed'],
  ['luxury two-piece set', 'طقم ثنائي فاخر', 'ensemble deux pièces de luxe', 'set due pezzi di lusso', 'conjunto de dos piezas de lujo', 'роскошный двухчастный комплект', '奢华两件套', 'Luxus-Zweiteiler', 'luxe tweedelige set', 'conjunto de duas peças de luxo'],
  ['premium two-piece set', 'طقم ثنائي راقٍ', 'ensemble deux pièces premium', 'set due pezzi premium', 'conjunto de dos piezas premium', 'премиальный двухчастный комплект', '高端两件套', 'Premium-Zweiteiler', 'premium tweedelige set', 'conjunto de duas peças premium'],
  ['designer two-piece set', 'طقم ثنائي مصمّم', 'ensemble deux pièces de créateur', 'set due pezzi di designer', 'conjunto de dos piezas de diseñador', 'дизайнерский двухчастный комплект', '设计师两件套', 'Designer-Zweiteiler', 'designer tweedelige set', 'conjunto de duas peças de designer'],
  ['dress and jacket set', 'طقم فستان وجاكيت', 'ensemble robe et veste', 'set abito e giacca', 'conjunto vestido y chaqueta', 'комплект платье и жакет', '连衣裙夹克套装', 'Kleid-und-Jacke-Set', 'jurk-en-jas set', 'conjunto vestido e casaco'],
  ['tailored jacket set', 'طقم جاكيت مفصّل', 'ensemble veste structurée', 'set giacca sartoriale', 'conjunto chaqueta sastreada', 'комплект с укороченным жакетом', '剪裁夹克套装', 'tailliertes Jacket-Set', 'getailleerde jas set', 'conjunto casaco estruturado'],
  ['coordinate set', 'طقم منسّق', 'ensemble coordonné', 'set coordinato', 'conjunto coordinado', 'координированный комплект', '协调套装', 'Koordinaten-Set', 'gecoördineerde set', 'conjunto coordenado'],
  ['luxury coordinate set', 'طقم منسّق فاخر', 'ensemble coordonné de luxe', 'set coordinato di lusso', 'conjunto coordinado de lujo', 'роскошный координированный комплект', '奢华协调套装', 'Luxus-Koordinaten-Set', 'luxe coördinatieset', 'conjunto coordenado de luxo'],
  ['premium coordinate set', 'طقم منسّق راقٍ', 'ensemble coordonné premium', 'set coordinato premium', 'conjunto coordinado premium', 'премиальный координированный комплект', '高端协调套装', 'Premium-Koordinaten-Set', 'premium coördinatieset', 'conjunto coordenado premium'],
  ['workwear set', 'طقم للعمل', 'ensemble pour le travail', 'set da lavoro', 'conjunto para el trabajo', 'комплект для работы', '职场套装', 'Business-Set', 'werkset', 'conjunto para trabalho'],
  ['office wear set', 'طقم للمكتب', 'ensemble bureau', 'set da ufficio', 'conjunto oficina', 'офисный комплект', '办公室套装', 'Büro-Set', 'kantoorset', 'conjunto escritório'],
  ['business meeting set', 'طقم اجتماعات عمل', 'ensemble réunion professionnelle', 'set riunione di lavoro', 'conjunto reunión de negocios', 'комплект для деловых встреч', '商务会议套装', 'Business-Meeting-Set', 'zakelijke vergadering set', 'conjunto reunião de negócios'],
  ['afternoon tea set', 'طقم شاي بعد الظهر', 'ensemble afternoon tea', 'set afternoon tea', 'conjunto té de la tarde', 'комплект для послеобеденного чая', '下午茶套装', 'Afternoon-Tea-Set', 'afternoon tea set', 'conjunto chá da tarde'],
  ['gallery opening set', 'طقم افتتاح معرض', 'ensemble vernissage', 'set inaugurazione galleria', 'conjunto inauguración galería', 'комплект для открытия галереи', '画廊开幕套装', 'Galerieeröffnungs-Set', 'galerieopening set', 'conjunto inauguração galeria'],
  ['Al Khous set', 'طقم Al Khous', 'ensemble Al Khous', 'set Al Khous', 'conjunto Al Khous', 'комплект Al Khous', 'Al Khous 套装', 'Al-Khous-Set', 'Al Khous set', 'conjunto Al Khous'],
  ['Khous weaving set', 'طقم نسيج الخوص', 'ensemble tissage Khous', 'set tessitura Khous', 'conjunto tejido Khous', 'комплект с плетением Khous', 'Khous编织套装', 'Khous-Web-Set', 'Khous weefset', 'conjunto tecelagem Khous'],
  ['date palm weaving set', 'طقم نسيج سعف النخيل', 'ensemble tissage palmier dattier', 'set tessitura palma da dattero', 'conjunto tejido palmera datilera', 'комплект с плетением финиковой пальмы', '椰枣叶编织套装', 'Dattelpalmen-Web-Set', 'dadelpalm weefset', 'conjunto tecelagem palmeira-dáctilo'],
  ['Knotted Line buttons set', 'طقم أزرار Knotted Line', 'ensemble boutons Knotted Line', 'set bottoni Knotted Line', 'conjunto botones Knotted Line', 'комплект с пуговицами Knotted Line', 'Knotted Line 纽扣套装', 'Knotted-Line-Knopf-Set', 'Knotted Line knopen set', 'conjunto botões Knotted Line'],
  ['Emirati heritage set', 'طقم تراث إماراتي', 'ensemble patrimoine émirati', 'set patrimonio emiratino', 'conjunto patrimonio emiratí', 'комплект эмиратского наследия', '阿联酋传承套装', 'emiratisches Erbe Set', 'Emiratisch erfgoed set', 'conjunto património emirati'],
  ['Abu Dhabi designer set', 'طقم مصمّم أبوظبي', 'ensemble designer Abou Dabi', 'set designer Abu Dhabi', 'conjunto diseñador Abu Dabi', 'дизайнерский комплект Абу-Даби', '阿布扎比设计师套装', 'Designer-Set Abu Dhabi', 'designer set Abu Dhabi', 'conjunto designer Abu Dhabi'],
  ['Created in Abu Dhabi set', 'طقم صُنع في أبوظبي', 'ensemble créé à Abou Dabi', 'set creato ad Abu Dhabi', 'conjunto creado en Abu Dabi', 'комплект, созданный в Абу-Даби', '阿布扎比创作套装', 'In Abu Dhabi geschaffenes Set', 'in Abu Dhabi gemaakte set', 'conjunto criado em Abu Dhabi'],
  ['luxury modest fashion set', 'طقم أزياء محتشمة فاخرة', 'ensemble mode modeste de luxe', 'set moda modesta di lusso', 'conjunto moda modesta de lujo', 'роскошный скромный комплект', '奢华端庄时尚套装', 'luxuriöses bescheidenes Mode-Set', 'luxe bescheiden mode set', 'conjunto moda modesta de luxo'],
  ['premium modest fashion set', 'طقم أزياء محتشمة راقية', 'ensemble mode modeste premium', 'set moda modesta premium', 'conjunto moda modesta premium', 'премиальный скромный комплект', '高端端庄时尚套装', 'premium bescheidenes Mode-Set', 'premium bescheiden mode set', 'conjunto moda modesta premium'],
  ['separable two-piece set', 'طقم ثنائي قابل للفصل', 'ensemble deux pièces séparable', 'set due pezzi separabile', 'conjunto dos piezas separable', 'раздельный двухчастный комплект', '可拆分两件套', 'trennbares Zweiteiler-Set', 'scheidbare tweedelige set', 'conjunto duas peças separável'],
  ['versatile wardrobe set', 'طقم خزانة متعدد الاستخدام', 'ensemble garde-robe polyvalent', 'set guardaroba versatile', 'conjunto armario versátil', 'универсальный гардеробный комплект', '百搭衣橱套装', 'vielseitiges Garderoben-Set', 'veelzijdige garderobe set', 'conjunto guarda-roupa versátil'],
  ['contemporary premium set', 'طقم راقٍ معاصر', 'ensemble premium contemporain', 'set premium contemporaneo', 'conjunto premium contemporáneo', 'современный премиальный комплект', '当代高端套装', 'zeitgenössisches Premium-Set', 'eigentijdse premium set', 'conjunto premium contemporâneo'],
  ['Burgundy set', 'طقم عنابي', 'ensemble bordeaux', 'set bordeaux', 'conjunto burdeos', 'комплект Burgundy', '酒红色套装', 'Burgunder-Set', 'bordeaux set', 'conjunto bordô'],
  ['Deep Black set', 'طقم أسود عميق', 'ensemble noir profond', 'set nero profondo', 'conjunto negro profundo', 'комплект Deep Black', '深黑套装', 'Tiefschwarzes Set', 'diepzwarte set', 'conjunto preto profundo'],
  ['Navy Blue set', 'طقم كحلي', 'ensemble bleu marine', 'set blu navy', 'conjunto azul marino', 'комплект Navy Blue', '海军蓝套装', 'Marineblaues Set', 'marineblauwe set', 'conjunto azul-marinho'],
  ['BS-ST-002', 'BS-ST-002', 'BS-ST-002', 'BS-ST-002', 'BS-ST-002', 'BS-ST-002', 'BS-ST-002', 'BS-ST-002', 'BS-ST-002', 'BS-ST-002'],
  ['Covent Garden Long Dress pairing set', 'طقم يُنسّق مع فستان Covent Garden Long', 'ensemble à associer robe Covent Garden Long', 'set abbinato abito Covent Garden Long', 'conjunto para combinar vestido Covent Garden Long', 'комплект в паре с платьем Covent Garden Long', '搭配Covent Garden Long Dress套装', 'Set zur Kombination Covent Garden Long Dress', 'set te combineren met Covent Garden Long jurk', 'conjunto para combinar vestido Covent Garden Long'],
  ['luxury gift for wife set', 'طقم هدية فاخرة للزوجة', 'ensemble cadeau luxe épouse', 'set regalo lusso moglie', 'conjunto regalo lujo esposa', 'комплект — роскошный подарок жене', '赠妻奢华礼装套装', 'Luxusgeschenk Ehefrau Set', 'luxe cadeau echtgenote set', 'conjunto presente luxo esposa'],
  ['premium gift for wife set', 'طقم هدية راقية للزوجة', 'ensemble cadeau premium épouse', 'set regalo premium moglie', 'conjunto regalo premium esposa', 'комплект — премиальный подарок жене', '赠妻高端礼装套装', 'Premiumgeschenk Ehefrau Set', 'premium cadeau echtgenote set', 'conjunto presente premium esposa'],
]

const COVENT_GARDEN_SET_EXCLUSIVE_I18N = rowsToKw(COVENT_GARDEN_SET_EXCLUSIVE_ROWS)

/** Covent Garden Signature Set-only schema keywords merged with shared pools in productSchemaMeta. */
export function getLocalizedCoventGardenSignatureSetExclusiveKeywords(
  locale: AppLocale,
  colorName?: string,
): string[] {
  const terms = new Set<string>(COVENT_GARDEN_SET_EXCLUSIVE_I18N.map((row) => row[locale]))
  const color = colorName?.trim()
  if (color) {
    terms.add(color)
    terms.add(`${color} ${SET_TYPE[locale]}`)
  }
  return [...terms]
}
