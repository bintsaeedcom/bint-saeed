import type { AppLocale } from '@/lib/i18n/routing'
import {
  KNIGHTSBRIDGE_EXCLUSIVE_KEYWORDS_ID,
} from '@/lib/products/abayaSchemaKeywordsId'
import {
  KNIGHTSBRIDGE_EXCLUSIVE_KEYWORDS_MS,
} from '@/lib/products/abayaSchemaKeywordsMs'

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
  zh: '阿巴亚',
  de: 'Abaya',
  nl: 'abaya',
  pt: 'abaya',
  id: 'abaya',
  ms: 'abaya',
}

const KNIGHTSBRIDGE_EXCLUSIVE_ROWS: KwRow[] = [
  ['Khous Jacket Abaya', 'عباية جاكيت الخوص', 'Abaya veste Khous', 'Abaya giacca Khous', 'Abaya chaqueta Khous', 'Абайя-пиджак Khous', 'Khous 夹克阿巴亚', 'Khous-Jacket-Abaya', 'Khous jacket abaya', 'Abaya casaco Khous'],
  ['Bint Saeed Khous Jacket Abaya', 'عباية جاكيت الخوص من Bint Saeed', 'Abaya veste Khous Bint Saeed', 'Abaya giacca Khous Bint Saeed', 'Abaya chaqueta Khous Bint Saeed', 'Абайя-пиджак Khous Bint Saeed', 'Bint Saeed Khous 夹克阿巴亚', 'Bint Saeed Khous-Jacket-Abaya', 'Bint Saeed Khous jacket abaya', 'Abaya casaco Khous Bint Saeed'],
  ['luxury jacket abaya', 'عباية جاكيت فاخرة', 'abaya veste de luxe', 'abaya giacca di lusso', 'abaya chaqueta de lujo', 'роскошная абайя-пиджак', '奢华夹克阿巴亚', 'Luxus-Jacket-Abaya', 'luxe jacket abaya', 'abaya casaco de luxo'],
  ['jacket abaya', 'عباية جاكيت', 'abaya veste', 'abaya giacca', 'abaya chaqueta', 'абайя-пиджак', '夹克阿巴亚', 'Jacket-Abaya', 'jacket abaya', 'abaya casaco'],
  ['abaya jacket', 'جاكيت عباية', 'veste abaya', 'giacca abaya', 'chaqueta abaya', 'жакет-абайя', '阿巴亚夹克', 'Abaya-Jacke', 'abaya jas', 'casaco abaya'],
  ['relaxed abaya', 'عباية مريحة', 'abaya décontractée', 'abaya rilassata', 'abaya relajada', 'расслабленная абайя', '宽松阿巴亚', 'entspannte Abaya', 'relaxed abaya', 'abaya descontraída'],
  ['relaxed fit abaya', 'عباية بقصة مريحة', 'abaya coupe décontractée', 'abaya vestibilità rilassata', 'abaya corte relajada', 'абайя свободного кроя', '宽松版型阿巴亚', 'Abaya mit relaxed fit', 'relaxed fit abaya', 'abaya corte relaxed'],
  ['long jacket abaya', 'عباية جاكيت طويلة', 'abaya veste longue', 'abaya giacca lunga', 'abaya chaqueta larga', 'длинная абайя-пиджак', '长款夹克阿巴亚', 'lange Jacket-Abaya', 'lange jacket abaya', 'abaya casaco comprida'],
  ['modest outerwear', 'ملابس خارجية محتشمة', 'vêtements d\'extérieur modestes', 'capospalla modesti', 'ropa exterior modesta', 'скромная верхняя одежда', '端庄外套', 'bescheidene Oberbekleidung', 'bescheiden outerwear', 'roupa exterior modesta'],
  ["women's luxury outerwear", 'ملابس خارجية نسائية فاخرة', 'vêtements d\'extérieur féminins de luxe', 'capospalla femminili di lusso', 'ropa exterior femenina de lujo', 'роскошная женская верхняя одежда', '奢华女士外套', 'luxuriöse Damen-Oberbekleidung', 'luxe dames outerwear', 'roupa exterior feminina de luxo'],
  ['everyday abaya', 'عباية يومية', 'abaya quotidienne', 'abaya quotidiana', 'abaya diaria', 'повседневная абайя', '日常阿巴亚', 'Alltags-Abaya', 'dagelijkse abaya', 'abaya diária'],
  ['coffee outfit abaya', 'عباية للقهوة', 'abaya sortie café', 'abaya per il caffè', 'abaya para café', 'абайя для кофе', '咖啡穿搭阿巴亚', 'Abaya für Kaffee-Outings', 'coffee outfit abaya', 'abaya para café'],
  ['work abaya', 'عباية للعمل', 'abaya travail', 'abaya da lavoro', 'abaya de trabajo', 'рабочая абайя', '通勤阿巴亚', 'Arbeits-Abaya', 'werk abaya', 'abaya de trabalho'],
  ['meeting abaya', 'عباية للاجتماعات', 'abaya réunion', 'abaya per riunioni', 'abaya para reuniones', 'абайя для встреч', '会议阿巴亚', 'Meeting-Abaya', 'meeting abaya', 'abaya para reuniões'],
  ['business casual abaya', 'عباية كاجوال للعمل', 'abaya business casual', 'abaya business casual', 'abaya business casual', 'деловая casual абайя', '商务休闲阿巴亚', 'Business-Casual-Abaya', 'business casual abaya', 'abaya business casual'],
  ['Chocolate Brown abaya', 'عباية بني شوكولاتة', 'abaya chocolat', 'abaya marrone cioccolato', 'abaya marrón chocolate', 'шоколадно-коричневая абайя', '巧克力棕阿巴亚', 'schokoladenbraune Abaya', 'chocoladebruine abaya', 'abaya castanho chocolate'],
  ['Navy Grey abaya', 'عباية رمادية كحلية', 'abaya gris marine', 'abaya grigio navy', 'abaya gris marino', 'тёмно-серая абайя', '海军灰阿巴亚', 'marinegraue Abaya', 'marinegrijze abaya', 'abaya cinza-marinho'],
  ['Dark Brown abaya', 'عباية بني داكن', 'abaya brun foncé', 'abaya marrone scuro', 'abaya marrón oscuro', 'тёмно-коричневая абайя', '深棕色阿巴亚', 'dunkelbraune Abaya', 'donkerbruine abaya', 'abaya castanho escuro'],
  ['Khous-inspired trim', 'زخرفة مستوحاة من الخوص', 'garniture inspirée Khous', 'finitura ispirata Khous', 'ribete inspirado en Khous', 'отделка в стиле Khous', 'Khous 灵感饰边', 'Khous-inspirierte Verzierung', 'Khous-geïnspireerde afwerking', 'acabamento inspirado em Khous'],
  ['woven trim abaya', 'عباية بحافة منسوجة', 'abaya à galon tissé', 'abaya con bordo tessuto', 'abaya con borde tejido', 'абайя с тканым декором', '编织饰边阿巴亚', 'Abaya mit Webbesatz', 'geweven afwerking abaya', 'abaya com acabamento tecido'],
  ['gold-tone buttons abaya', 'عباية بأزرار ذهبية', 'abaya boutons dorés', 'abaya bottoni dorati', 'abaya botones dorados', 'абайя с золотистыми пуговицами', '金色调纽扣阿巴亚', 'Abaya mit goldfarbenen Knöpfen', 'goudkleurige knopen abaya', 'abaya com botões dourados'],
  ['Knotted Lines of Lineage buttons', 'أزرار الخطوط المعقودة للنسب', 'boutons Knotted Lines of Lineage', 'bottoni Knotted Lines of Lineage', 'botones Knotted Lines of Lineage', 'пуговицы Knotted Lines of Lineage', 'Knotted Lines of Lineage 纽扣', 'Knotted Lines of Lineage Knöpfe', 'Knotted Lines of Lineage knopen', 'botões Knotted Lines of Lineage'],
  ['gift abaya', 'عباية هدية', 'abaya cadeau', 'abaya regalo', 'abaya regalo', 'абайя в подарок', '礼品阿巴亚', 'Geschenk-Abaya', 'cadeau abaya', 'abaya presente'],
  ['luxury gift for wife', 'هدية فاخرة للزوجة', 'cadeau de luxe pour épouse', 'regalo di lusso per moglie', 'regalo de lujo para esposa', 'роскошный подарок жене', '奢华赠礼妻子', 'Luxusgeschenk für die Ehefrau', 'luxe cadeau voor echtgenote', 'presente de luxo para esposa'],
  ['luxury gift for mother', 'هدية فاخرة للأم', 'cadeau de luxe pour mère', 'regalo di lusso per madre', 'regalo de lujo para madre', 'роскошный подарок матери', '奢华赠礼母亲', 'Luxusgeschenk für die Mutter', 'luxe cadeau voor moeder', 'presente de luxo para mãe'],
  ['luxury gift for daughter', 'هدية فاخرة للابنة', 'cadeau de luxe pour fille', 'regalo di lusso per figlia', 'regalo de lujo para hija', 'роскошный подарок дочери', '奢华赠礼女儿', 'Luxusgeschenk für die Tochter', 'luxe cadeau voor dochter', 'presente de luxo para filha'],
  ['Eid gift abaya', 'عباية هدية العيد', 'abaya cadeau Aïd', 'abaya regalo Eid', 'abaya regalo Eid', 'абайя в подарок на Ид', '开斋节礼品阿巴亚', 'Eid-Geschenk-Abaya', 'Eid cadeau abaya', 'abaya presente Eid'],
  ['anniversary gift abaya', 'عباية هدية الذكرى السنوية', 'abaya cadeau anniversaire', 'abaya regalo anniversario', 'abaya regalo aniversario', 'абайя в подарок на годовщину', '周年纪念礼品阿巴亚', 'Jubiläums-Geschenk-Abaya', 'jubileum cadeau abaya', 'abaya presente aniversário'],
  ['BS-AB-003-KHOUS', 'BS-AB-003-KHOUS', 'BS-AB-003-KHOUS', 'BS-AB-003-KHOUS', 'BS-AB-003-KHOUS', 'BS-AB-003-KHOUS', 'BS-AB-003-KHOUS', 'BS-AB-003-KHOUS', 'BS-AB-003-KHOUS', 'BS-AB-003-KHOUS'],
  ['Knightsbridge Abaya Jacket', 'عباية جاكيت Knightsbridge', 'Abaya veste Knightsbridge', 'Abaya giacca Knightsbridge', 'Abaya chaqueta Knightsbridge', 'Абайя-пиджак Knightsbridge', 'Knightsbridge 夹克阿巴亚', 'Knightsbridge Abaya Jacket', 'Knightsbridge abaya jacket', 'Abaya casaco Knightsbridge'],
]

const KNIGHTSBRIDGE_EXCLUSIVE_I18N = rowsToKw(KNIGHTSBRIDGE_EXCLUSIVE_ROWS)

/** Knightsbridge-only schema keywords merged with shared abaya terms in productSchemaMeta. */
export function getLocalizedKnightsbridgeExclusiveKeywords(
  locale: AppLocale,
  colorName?: string,
): string[] {
  const terms = new Set<string>(
    locale === 'id'
      ? KNIGHTSBRIDGE_EXCLUSIVE_KEYWORDS_ID
      : locale === 'ms'
        ? KNIGHTSBRIDGE_EXCLUSIVE_KEYWORDS_MS
        : KNIGHTSBRIDGE_EXCLUSIVE_I18N.map((row) => row[locale]),
  )
  const color = colorName?.trim()
  if (color) {
    terms.add(color)
    terms.add(`${color} ${ABAYA_TYPE[locale]}`)
  }
  return [...terms]
}
