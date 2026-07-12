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

const PARK_LANE_EXCLUSIVE_ROWS: KwRow[] = [
  ['Park Lane Abaya', 'عباية Park Lane', 'Abaya Park Lane', 'Park Lane Abaya', 'Abaya Park Lane', 'Абайя Park Lane', 'Park Lane 长袍', 'Park Lane Abaya', 'Park Lane abaya', 'Abaya Park Lane'],
  ['Bint Saeed Park Lane Abaya', 'عباية Park Lane من Bint Saeed', 'Abaya Park Lane Bint Saeed', 'Park Lane Abaya Bint Saeed', 'Abaya Park Lane Bint Saeed', 'Абайя Park Lane Bint Saeed', 'Bint Saeed Park Lane 长袍', 'Bint Saeed Park Lane Abaya', 'Bint Saeed Park Lane abaya', 'Abaya Park Lane Bint Saeed'],
  ['A-line abaya', 'عباية A-line', 'abaya A-line', 'abaya A-line', 'abaya A-line', 'абайя A-line', 'A字长袍', 'A-Linien-Abaya', 'A-line abaya', 'abaya A-line'],
  ['graceful A-line abaya', 'عباية A-line أنيقة', 'abaya A-line gracieuse', 'abaya A-line aggraziata', 'abaya A-line elegante', 'изящная абайя A-line', '优雅A字长袍', 'anmutige A-Linien-Abaya', 'sierlijke A-line abaya', 'abaya A-line graciosa'],
  ['integrated shoulder scarf abaya', 'عباية بوشاح كتف مدمج', 'abaya écharpe d’épaule intégrée', 'abaya sciarpa spalla integrata', 'abaya bufanda hombro integrada', 'абайя со встроенным шарфом на плече', '一体式肩巾长袍', 'Abaya mit integriertem Schulterschal', 'abaya met geïntegreerde schoudersjaal', 'abaya lenço ombro integrado'],
  ['Knotted Line abaya', 'عباية Knotted Line', 'abaya Knotted Line', 'abaya Knotted Line', 'abaya Knotted Line', 'абайя Knotted Line', 'Knotted Line 长袍', 'Knotted-Line-Abaya', 'Knotted Line abaya', 'abaya Knotted Line'],
  ['emblem cufflink abaya', 'عباية بأزرار أكمام الشعار', 'abaya boutons de manchette emblème', 'abaya gemelli emblema', 'abaya gemelos emblema', 'абайя с запонками-эмблемой', '徽标袖扣长袍', 'Abaya mit Emblem-Manschettenknöpfen', 'abaya embleem manchetknopen', 'abaya abotoaduras emblema'],
  ['tailored designer abaya', 'عباية مصمّمة مفصّلة', 'abaya de créateur sur mesure', 'abaya designer sartoriale', 'abaya diseñador a medida', 'дизайнерская абайя с кроем', '剪裁设计师长袍', 'maßgeschneiderte Designer-Abaya', 'getailleerde designer abaya', 'abaya designer alfaiataria'],
  ['contemporary designer abaya', 'عباية مصمّمة معاصرة', 'abaya de créateur contemporaine', 'abaya designer contemporanea', 'abaya diseñador contemporánea', 'современная дизайнерская абайя', '当代设计师长袍', 'zeitgenössische Designer-Abaya', 'eigentijdse designer abaya', 'abaya designer contemporânea'],
  ['luxury abaya Abu Dhabi', 'عباية فاخرة أبوظبي', 'abaya de luxe Abou Dabi', 'abaya di lusso Abu Dhabi', 'abaya de lujo Abu Dabi', 'люксовая абайя Абу-Даби', '阿布扎比奢华长袍', 'Luxus-Abaya Abu Dhabi', 'luxe abaya Abu Dhabi', 'abaya de luxo Abu Dhabi'],
  ['Emirati designer abaya', 'عباية مصمّم إماراتية', 'abaya designer émiratie', 'abaya designer emiratina', 'abaya diseñador emiratí', 'дизайнерская абайя ОАЭ', '阿联酋设计师长袍', 'emiratische Designer-Abaya', 'Emiratische designer abaya', 'abaya designer emirati'],
  ['diplomat abaya', 'عباية دبلوماسية', 'abaya diplomate', 'abaya diplomatica', 'abaya diplomática', 'дипломатическая абайя', '外交官长袍', 'Diplomaten-Abaya', 'diplomaat abaya', 'abaya diplomática'],
  ['embassy abaya', 'عباية سفارة', 'abaya ambassade', 'abaya ambasciata', 'abaya embajada', 'абайя для посольства', '使馆长袍', 'Botschafts-Abaya', 'ambassade abaya', 'abaya embaixada'],
  ['executive abaya', 'عباية تنفيذية', 'abaya executive', 'abaya executive', 'abaya ejecutiva', 'абайя для руководителей', '高管长袍', 'Executive-Abaya', 'executive abaya', 'abaya executiva'],
  ['official occasion abaya', 'عباية مناسبات رسمية', 'abaya occasion officielle', 'abaya occasione ufficiale', 'abaya ocasión oficial', 'абайя для официальных мероприятий', '正式场合长袍', 'Abaya für offizielle Anlässe', 'abaya officiële gelegenheid', 'abaya ocasião oficial'],
  ['business abaya', 'عباية للأعمال', 'abaya business', 'abaya business', 'abaya de negocios', 'деловая абайя', '商务长袍', 'Business-Abaya', 'zakelijke abaya', 'abaya de negócios'],
  ['city abaya', 'عباية المدينة', 'abaya urbaine', 'abaya città', 'abaya ciudad', 'городская абайя', '都市长袍', 'City-Abaya', 'city abaya', 'abaya cidade'],
  ['everyday luxury abaya', 'عباية فاخرة يومية', 'abaya de luxe quotidienne', 'abaya lusso quotidiana', 'abaya de lujo diaria', 'повседневная люксовая абайя', '日常奢华长袍', 'Alltags-Luxus-Abaya', 'alledaagse luxe abaya', 'abaya de luxo quotidiana'],
  ['formal dinner abaya', 'عباية عشاء رسمي', 'abaya dîner formel', 'abaya cena formale', 'abaya cena formal', 'абайя для формального ужина', '正式晚宴长袍', 'Abaya für formelles Dinner', 'abaya formeel diner', 'abaya jantar formal'],
  ['wedding guest abaya', 'عباية ضيفة زفاف', 'abaya invitée mariage', 'abaya invitata matrimonio', 'abaya invitada boda', 'абайя для гостьи свадьбы', '婚礼宾客长袍', 'Hochzeitsgast-Abaya', 'bruiloftsgast abaya', 'abaya convidada casamento'],
  ['travel abaya', 'عباية سفر', 'abaya voyage', 'abaya viaggio', 'abaya viaje', 'абайя для путешествий', '旅行长袍', 'Reise-Abaya', 'reis abaya', 'abaya viagem'],
  ['London business abaya', 'عباية أعمال لندن', 'abaya business Londres', 'abaya business Londra', 'abaya negocios Londres', 'деловая абайя Лондон', '伦敦商务长袍', 'London-Business-Abaya', 'Londen zakelijke abaya', 'abaya negócios Londres'],
  ['Paris modest fashion abaya', 'عباية أزياء محتشمة باريس', 'abaya mode modeste Paris', 'abaya moda modesta Parigi', 'abaya moda modesta París', 'скромная мода Париж абайя', '巴黎端庄时尚长袍', 'Paris Modest-Fashion-Abaya', 'Parijs bescheiden mode abaya', 'abaya moda modesta Paris'],
  ['Gulf wardrobe abaya', 'عباية خزانة الخليج', 'abaya garde-robe Golfe', 'abaya guardaroba Golfo', 'abaya armario Golfo', 'абайя для гардероба Залива', '海湾衣橱长袍', 'Golf-Garderoben-Abaya', 'Golf-garderobe abaya', 'abaya guarda-roupa Golfo'],
  ['international modest fashion abaya', 'عباية أزياء محتشمة دولية', 'abaya mode modeste internationale', 'abaya moda modesta internazionale', 'abaya moda modesta internacional', 'международная скромная мода абайя', '国际端庄时尚长袍', 'internationale Modest-Fashion-Abaya', 'internationale bescheiden mode abaya', 'abaya moda modesta internacional'],
  ['hidden pocket abaya', 'عباية جيوب مخفية', 'abaya poches cachées', 'abaya tasche nascoste', 'abaya bolsillos ocultos', 'абайя со скрытыми карманами', '隐藏口袋长袍', 'Abaya mit versteckten Taschen', 'abaya verborgen zakken', 'abaya bolsos ocultos'],
  ['optional snap closure abaya', 'عباية بإغلاق كبس اختياري', 'abaya fermeture pression optionnelle', 'abaya chiusura a pressione opzionale', 'abaya cierre a presión opcional', 'абайя с опциональной кнопочной застёжкой', '可选按扣长袍', 'Abaya mit optionalem Druckknopf', 'abaya optionele drukknoopsluiting', 'abaya fecho de pressão opcional'],
  ['personalised abaya gift', 'عباية مخصّصة هدية', 'abaya personnalisée cadeau', 'abaya personalizzata regalo', 'abaya personalizada regalo', 'персонализированная абайя в подарок', '定制礼品长袍', 'personalisierte Abaya Geschenk', 'gepersonaliseerde abaya cadeau', 'abaya personalizada presente'],
  ['luxury gift for wife abaya', 'عباية هدية فاخرة للزوجة', 'abaya cadeau luxe épouse', 'abaya regalo lusso moglie', 'abaya regalo lujo esposa', 'роскошная абайя подарок жене', '赠妻奢华长袍', 'Luxusgeschenk Ehefrau Abaya', 'luxe cadeau echtgenote abaya', 'abaya presente luxo esposa'],
  ['buy designer abaya online', 'شراء عباية مصمّمة أونلاين', 'acheter abaya designer en ligne', 'comprare abaya designer online', 'comprar abaya diseñador online', 'купить дизайнерскую абайю онлайн', '在线购买设计师长袍', 'Designer-Abaya online kaufen', 'designer abaya online kopen', 'comprar abaya designer online'],
  ['Deep Black abaya', 'عباية أسود عميق', 'abaya noir profond', 'abaya nero profondo', 'abaya negro profundo', 'абайя Deep Black', '深黑色长袍', 'tiefschwarze Abaya', 'diepzwarte abaya', 'abaya preto profundo'],
  ['Dark Maroon abaya', 'عباية عنابي غامق', 'abaya bordeaux foncé', 'abaya bordeaux scuro', 'abaya burdeos oscuro', 'абайя Dark Maroon', '深酒红色长袍', 'dunkelbordeaux Abaya', 'donker bordeaux abaya', 'abaya bordô escuro'],
  ['Navy Blue abaya', 'عباية كحلي', 'abaya bleu marine', 'abaya blu navy', 'abaya azul marino', 'абайя Navy Blue', '海军蓝长袍', 'marineblaue Abaya', 'marineblauwe abaya', 'abaya azul-marinho'],
  ['abaya colour variants', 'ألوان متعددة للعباية', 'variantes couleur abaya', 'varianti colore abaya', 'variantes color abaya', 'цветовые варианты абайи', '长袍颜色变体', 'Abaya-Farbvarianten', 'kleurvarianten abaya', 'variantes de cor abaya'],
  ['BS-AB-006', 'BS-AB-006', 'BS-AB-006', 'BS-AB-006', 'BS-AB-006', 'BS-AB-006', 'BS-AB-006', 'BS-AB-006', 'BS-AB-006', 'BS-AB-006'],
]

const PARK_LANE_EXCLUSIVE_I18N = rowsToKw(PARK_LANE_EXCLUSIVE_ROWS)

const PARK_LANE_KEYWORDS_EN = [
  'Park Lane Abaya',
  'Bint Saeed Park Lane Abaya',
  'Bint Saeed Abu Dhabi',
  'Bint Saeed UAE',
  'the abaya that speaks before you do',
  'exceptional tailoring abaya',
  'A-line silhouette abaya',
  'integrated shoulder scarf',
  'signature Knotted Line buttons',
  'Bint Saeed signature gold-tone Monogram cufflinks',
  'removable cufflinks abaya',
  'wide cuff abaya',
  'hidden side seam pockets',
  'optional snap button closure',
  'optional hidden inner label personalisation',
  'contemporary outer layer abaya',
  'timeless abaya',
  'diplomat abaya',
  'embassy reception abaya',
  'executive abaya',
  'leadership meeting abaya',
  'cultural engagement abaya',
  'business meeting abaya',
  'modest workwear abaya',
  'premium modest fashion abaya',
  'luxury modest fashion abaya',
  'Abu Dhabi designer abaya',
  'made in Abu Dhabi abaya',
  'worldwide shipping abaya',
  'buy Park Lane Abaya online',
] as const

export function getLocalizedParkLaneAbayaExclusiveKeywords(
  locale: AppLocale = 'en',
  colorName?: string,
): string[] {
  const terms = new Set<string>(
    locale === 'en'
      ? [...PARK_LANE_KEYWORDS_EN, ...PARK_LANE_EXCLUSIVE_ROWS.map((row) => row[0])]
      : PARK_LANE_EXCLUSIVE_I18N.map((row) => row[locale]),
  )
  const color = colorName?.trim()
  if (color) {
    terms.add(color)
    terms.add(`${color} abaya`)
    terms.add(`Park Lane Abaya ${color}`)
  }
  return [...terms]
}
