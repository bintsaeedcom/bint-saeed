import type { AppLocale } from '@/lib/i18n/routing'
import {
  KNIGHTSBRIDGE_DRESS_EXCLUSIVE_KEYWORDS_ID,
} from '@/lib/products/abayaSchemaKeywordsId'
import {
  KNIGHTSBRIDGE_DRESS_EXCLUSIVE_KEYWORDS_MS,
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

const KNIGHTSBRIDGE_DRESS_EXCLUSIVE_ROWS: KwRow[] = [
  ['Knightsbridge Maxi Dress', 'فستان ماكسي Knightsbridge', 'Robe maxi Knightsbridge', 'Maxi dress Knightsbridge', 'Vestido maxi Knightsbridge', 'Макси-платье Knightsbridge', 'Knightsbridge 长款连衣裙', 'Knightsbridge Maxikleid', 'Knightsbridge maxi dress', 'Vestido maxi Knightsbridge'],
  ['Knightsbridge Dress', 'فستان Knightsbridge', 'Robe Knightsbridge', 'Abito Knightsbridge', 'Vestido Knightsbridge', 'Платье Knightsbridge', 'Knightsbridge 连衣裙', 'Knightsbridge Dress', 'Knightsbridge dress', 'Vestido Knightsbridge'],
  ['premium maxi dress', 'فستان ماكسي راقٍ', 'robe maxi premium', 'abito maxi premium', 'vestido maxi premium', 'премиальное платье макси', '高端长款连衣裙', 'Premium-Maxikleid', 'premium maxi-jurk', 'vestido maxi premium'],
  ['luxury maxi dress', 'فستان ماكسي فاخر', 'robe maxi de luxe', 'abito maxi di lusso', 'vestido maxi de lujo', 'роскошное платье макси', '奢华长款连衣裙', 'Luxus-Maxikleid', 'luxe maxi-jurk', 'vestido maxi de luxo'],
  ['designer maxi dress', 'فستان ماكسي مصمّم', 'robe maxi de créateur', 'maxi dress di designer', 'vestido maxi de diseñador', 'дизайнерское платье макси', '设计师长款连衣裙', 'Designer-Maxikleid', 'designer maxi-jurk', 'vestido maxi de designer'],
  ['cotton blend maxi dress', 'فستان ماكسي قطن مخلوط', 'robe maxi mélange coton', 'maxi dress misto cotone', 'vestido maxi mezcla algodón', 'макси-платье из хлопковой смеси', '棉混纺长款连衣裙', 'Baumwollmischungs-Maxikleid', 'katoenmix maxi-jurk', 'vestido maxi mistura algodão'],
  ['halter dress', 'فستان هالتر', 'robe halter', 'abito halter', 'vestido halter', 'платье с воротником halter', '挂脖连衣裙', 'Halter-Kleid', 'halterjurk', 'vestido halter'],
  ['halter neckline dress', 'فستان بياقة هالتر', 'robe encolure halter', 'abito scollo halter', 'vestido escote halter', 'платье с вырезом halter', '挂脖领连衣裙', 'Kleid mit Halterneckline', 'jurk met halter-halslijn', 'vestido decote halter'],
  ['flowing maxi dress', 'فستان ماكسي انسيابي', 'robe maxi fluide', 'maxi dress fluido', 'vestido maxi fluido', 'струящееся платье макси', '流畅长款连衣裙', 'fließendes Maxikleid', 'vloeiende maxi-jurk', 'vestido maxi fluido'],
  ['box pleated dress', 'فستان بطيات صندوقية', 'robe à plis coffre', 'abito con pieghe a scatola', 'vestido pliegues de caja', 'платье со складками «коробочкой»', '箱褶连衣裙', 'Kleid mit Boxfalten', 'jurk met boxplooien', 'vestido com pregas em caixa'],
  ['princess silhouette dress', 'فستان بقصة أميرة', 'robe silhouette princesse', 'abito silhouette principessa', 'vestido silueta princesa', 'платье с силуэтом принцессы', '公主廓形连衣裙', 'Kleid mit Prinzessinnen-Silhouette', 'jurk met prinsessensilhouet', 'vestido silhueta princesa'],
  ['travel dress', 'فستان سفر', 'robe de voyage', 'abito da viaggio', 'vestido de viaje', 'платье для путешествий', '旅行连衣裙', 'Reisekleid', 'reisjurk', 'vestido de viagem'],
  ['holiday dress', 'فستان عطلات', 'robe de vacances', 'abito vacanza', 'vestido festivo', 'праздничное платье', '假日连衣裙', 'Urlaubskleid', 'vakantiejurk', 'vestido de férias'],
  ['summer dress', 'فستان صيفي', 'robe d\'été', 'abito estivo', 'vestido de verano', 'летнее платье', '夏日连衣裙', 'Sommerkleid', 'zomerjurk', 'vestido de verão'],
  ['summer 2026 dress', 'فستان صيف 2026', 'robe été 2026', 'abito estate 2026', 'vestido verano 2026', 'летнее платье 2026', '2026夏日连衣裙', 'Sommerkleid 2026', 'zomerjurk 2026', 'vestido verão 2026'],
  ['resort wear dress', 'فستان منتجعات', 'robe resort', 'abito resort', 'vestido resort', 'курортное платье', '度假装连衣裙', 'Resort-Kleid', 'resort jurk', 'vestido resort'],
  ['European summer dress', 'فستان صيف أوروبي', 'robe d\'été européenne', 'abito estivo europeo', 'vestido verano europeo', 'европейское летнее платье', '欧洲夏日连衣裙', 'europäisches Sommerkleid', 'Europese zomerjurk', 'vestido verão europeu'],
  ['afternoon tea dress', 'فستان شاي بعد الظهر', 'robe pour le thé', 'abito per afternoon tea', 'vestido té de tarde', 'платье для послеобеденного чая', '下午茶连衣裙', 'Afternoon-Tea-Kleid', 'afternoon tea jurk', 'vestido chá da tarde'],
  ['destination dressing dress', 'فستان إطلالة وجهات', 'robe destination dressing', 'abito destination dressing', 'vestido destination dressing', 'платье destination dressing', '目的地着装连衣裙', 'Destination-Dressing-Kleid', 'destination dressing jurk', 'vestido destination dressing'],
  ['vacation wardrobe dress', 'فستان خزانة عطلات', 'robe garde-robe vacances', 'abito guardaroba vacanza', 'vestido armario vacacional', 'платье для праздничного гардероба', '度假衣橱连衣裙', 'Urlaubsgarderoben-Kleid', 'vakantiegarderobe jurk', 'vestido guarda-roupa férias'],
  ['travel wardrobe dress', 'فستان خزانة سفر', 'robe garde-robe voyage', 'abito guardaroba viaggio', 'vestido armario de viaje', 'платье для дорожного гардероба', '旅行衣橱连衣裙', 'Reisegarderoben-Kleid', 'reisgarderobe jurk', 'vestido guarda-roupa viagem'],
  ['outfit of the day dress', 'فستان OOTD', 'robe outfit of the day', 'abito outfit of the day', 'vestido outfit of the day', 'платье outfit of the day', 'OOTD连衣裙', 'Outfit-of-the-Day-Kleid', 'outfit of the day jurk', 'vestido outfit of the day'],
  ['OOTD dress', 'فستان OOTD', 'robe OOTD', 'abito OOTD', 'vestido OOTD', 'платье OOTD', 'OOTD连衣裙', 'OOTD-Kleid', 'OOTD jurk', 'vestido OOTD'],
  ['London dress', 'فستان لندن', 'robe Londres', 'abito Londra', 'vestido Londres', 'платье London', '伦敦连衣裙', 'London-Kleid', 'Londen jurk', 'vestido Londres'],
  ['Paris dress', 'فستان باريس', 'robe Paris', 'abito Parigi', 'vestido París', 'платье Paris', '巴黎连衣裙', 'Paris-Kleid', 'Parijs jurk', 'vestido Paris'],
  ['Cannes dress', 'فستان كان', 'robe Cannes', 'abito Cannes', 'vestido Cannes', 'платье Cannes', '戛纳连衣裙', 'Cannes-Kleid', 'Cannes jurk', 'vestido Cannes'],
  ['Lake Como dress', 'فستان بحيرة كومو', 'robe Lac de Côme', 'abito Lago di Como', 'vestido Lago de Como', 'платье Lake Como', '科莫湖连衣裙', 'Comer See Kleid', 'Comomeer jurk', 'vestido Lago de Como'],
  ['Monaco style dress', 'فستان بأسلوب موناكو', 'robe style Monaco', 'abito stile Monaco', 'vestido estilo Mónaco', 'платье в стиле Monaco', '摩纳哥风格连衣裙', 'Monaco-Stil-Kleid', 'Monaco-stijl jurk', 'vestido estilo Mónaco'],
  ['Dark Brown dress', 'فستان بني داكن', 'robe brun foncé', 'abito marrone scuro', 'vestido marrón oscuro', 'платье Dark Brown', '深棕色连衣裙', 'Dark-Brown-Kleid', 'donkerbruine jurk', 'vestido castanho escuro'],
  ['Navy Grey dress', 'فستان رمادي كحلي', 'robe gris marine', 'abito grigio navy', 'vestido gris marino', 'платье Navy Grey', '海军灰连衣裙', 'Navy-Grey-Kleid', 'marinegrijze jurk', 'vestido cinza-marinho'],
  ['Abu Dhabi designer dress', 'فستان مصمّم أبوظبي', 'robe designer Abou Dabi', 'abito designer Abu Dhabi', 'vestido diseñador Abu Dabi', 'дизайнерское платье Абу-Даби', '阿布扎比设计师连衣裙', 'Designer-Kleid Abu Dhabi', 'designer jurk Abu Dhabi', 'vestido designer Abu Dhabi'],
  ['Abu Dhabi premium fashion dress', 'فستان أزياء راقية أبوظبي', 'robe mode premium Abou Dabi', 'abito moda premium Abu Dhabi', 'vestido moda premium Abu Dabi', 'премиальное платье Абу-Даби', '阿布扎比高端时尚连衣裙', 'Premiummode-Kleid Abu Dhabi', 'premiummode jurk Abu Dhabi', 'vestido moda premium Abu Dhabi'],
  ['Abu Dhabi luxury fashion dress', 'فستان أزياء فاخرة أبوظبي', 'robe mode luxe Abou Dabi', 'abito moda lusso Abu Dhabi', 'vestido moda lujo Abu Dabi', 'роскошное платье Абу-Даби', '阿布扎比奢华时尚连衣裙', 'Luxusmode-Kleid Abu Dhabi', 'luxemode jurk Abu Dhabi', 'vestido moda luxo Abu Dhabi'],
  ['Created in Abu Dhabi dress', 'فستان صُنع في أبوظبي', 'robe créée à Abou Dabi', 'abito creato ad Abu Dhabi', 'vestido creado en Abu Dabi', 'платье, созданное в Абу-Даби', '阿布扎比创作连衣裙', 'In Abu Dhabi geschaffenes Kleid', 'in Abu Dhabi gemaakte jurk', 'vestido criado em Abu Dhabi'],
  ['Emirati heritage dress', 'فستان تراث إماراتي', 'robe patrimoine émirati', 'abito patrimonio emiratino', 'vestido patrimonio emiratí', 'платье эмиратского наследия', '阿联酋传承连衣裙', 'emiratisches Erbe Kleid', 'Emiratisch erfgoed jurk', 'vestido património emirati'],
  ['heritage fashion dress', 'فستان أزياء تراثية', 'robe mode patrimoine', 'abito moda heritage', 'vestido moda patrimonio', 'платье heritage fashion', '传承时尚连衣裙', 'Heritage-Fashion-Kleid', 'erfgoed mode jurk', 'vestido moda património'],
  ['cultural fashion dress', 'فستان أزياء ثقافية', 'robe mode culturelle', 'abito moda culturale', 'vestido moda cultural', 'культурное модное платье', '文化时尚连衣裙', 'Kulturmode-Kleid', 'culturele mode jurk', 'vestido moda cultural'],
  ['Al Khous dress', 'فستان Al Khous', 'robe Al Khous', 'abito Al Khous', 'vestido Al Khous', 'платье Al Khous', 'Al Khous 连衣裙', 'Al-Khous-Kleid', 'Al Khous jurk', 'vestido Al Khous'],
  ['Al Khous weaving dress', 'فستان نسيج Al Khous', 'robe tissage Al Khous', 'abito tessitura Al Khous', 'vestido tejido Al Khous', 'платье с плетением Al Khous', 'Al Khous编织连衣裙', 'Al-Khous-Webkleid', 'Al Khous weefjurk', 'vestido tecelagem Al Khous'],
  ['date palm weaving dress', 'فستان نسيج سعف النخيل', 'robe tissage palmier dattier', 'abito tessitura palma da dattero', 'vestido tejido palmera datilera', 'платье с плетением финиковой пальмы', '椰枣叶编织连衣裙', 'Dattelpalmen-Webkleid', 'dadelpalm weefjurk', 'vestido tecelagem palmeira-dáctilo'],
  ['date palm frond weaving', 'نسيج سعف النخيل', 'tissage feuilles de palmier dattier', 'tessitura fronde palma da dattero', 'tejido hojas palmera datilera', 'плетение листьев финиковой пальмы', '椰枣叶编织', 'Dattelpalmenblatt-Weben', 'dadelpalmblad weven', 'tecelagem folhas palmeira-dáctilo'],
  ['Emirati craftsmanship dress', 'فستان حرفية إماراتية', 'robe artisanat émirati', 'abito artigianalità emiratina', 'vestido artesanía emiratí', 'платье эмиратского мастерства', '阿联酋工艺连衣裙', 'emiratisches Handwerks-Kleid', 'Emiratisch vakmanschap jurk', 'vestido artesanato emirati'],
  ['luxury modest fashion dress', 'فستان أزياء محتشمة فاخرة', 'robe mode modeste de luxe', 'abito moda modesta di lusso', 'vestido moda modesta de lujo', 'роскошное скромное платье', '奢华端庄时尚连衣裙', 'luxuriöses bescheidenes Mode-Kleid', 'luxe bescheiden mode jurk', 'vestido moda modesta de luxo'],
  ['premium modest fashion dress', 'فستان أزياء محتشمة راقية', 'robe mode modeste premium', 'abito moda modesta premium', 'vestido moda modesta premium', 'премиальное скромное платье', '高端端庄时尚连衣裙', 'premium bescheidenes Mode-Kleid', 'premium bescheiden mode jurk', 'vestido moda modesta premium'],
  ['designer modest fashion dress', 'فستان أزياء محتشمة مصمّمة', 'robe mode modeste designer', 'abito moda modesta designer', 'vestido moda modesta diseñador', 'дизайнерское скромное платье', '设计师端庄时尚连衣裙', 'Designer-bescheidene-Mode-Kleid', 'designer bescheiden mode jurk', 'vestido moda modesta designer'],
  ['luxury gift for wife dress', 'فستان هدية فاخرة للزوجة', 'robe cadeau luxe épouse', 'abito regalo lusso moglie', 'vestido regalo lujo esposa', 'платье — роскошный подарок жене', '赠妻奢华礼裙', 'Luxusgeschenk Ehefrau Kleid', 'luxe cadeau echtgenote jurk', 'vestido presente luxo esposa'],
  ['luxury gift for mother dress', 'فستان هدية فاخرة للأم', 'robe cadeau luxe mère', 'abito regalo lusso madre', 'vestido regalo lujo madre', 'платье — роскошный подарок матери', '赠母奢华礼裙', 'Luxusgeschenk Mutter Kleid', 'luxe cadeau moeder jurk', 'vestido presente luxo mãe'],
  ['luxury gift for daughter dress', 'فستان هدية فاخرة للابنة', 'robe cadeau luxe fille', 'abito regalo lusso figlia', 'vestido regalo lujo hija', 'платье — роскошный подарок дочери', '赠女奢华礼裙', 'Luxusgeschenk Tochter Kleid', 'luxe cadeau dochter jurk', 'vestido presente luxo filha'],
  ['premium gift for wife dress', 'فستان هدية راقية للزوجة', 'robe cadeau premium épouse', 'abito regalo premium moglie', 'vestido regalo premium esposa', 'платье — премиальный подарок жене', '赠妻高端礼裙', 'Premiumgeschenk Ehefrau Kleid', 'premium cadeau echtgenote jurk', 'vestido presente premium esposa'],
  ['premium gift for mother dress', 'فستان هدية راقية للأم', 'robe cadeau premium mère', 'abito regalo premium madre', 'vestido regalo premium madre', 'платье — премиальный подарок матери', '赠母高端礼裙', 'Premiumgeschenk Mutter Kleid', 'premium cadeau moeder jurk', 'vestido presente premium mãe'],
  ['premium gift for daughter dress', 'فستان هدية راقية للابنة', 'robe cadeau premium fille', 'abito regalo premium figlia', 'vestido regalo premium hija', 'платье — премиальный подарок дочери', '赠女高端礼裙', 'Premiumgeschenk Tochter Kleid', 'premium cadeau dochter jurk', 'vestido presente premium filha'],
  ['BS-DR-001', 'BS-DR-001', 'BS-DR-001', 'BS-DR-001', 'BS-DR-001', 'BS-DR-001', 'BS-DR-001', 'BS-DR-001', 'BS-DR-001', 'BS-DR-001'],
  ['Knightsbridge Abaya pairing dress', 'فستان يُنسّق مع عباية Knightsbridge', 'robe à associer abaya Knightsbridge', 'abito abbinato abaya Knightsbridge', 'vestido para combinar abaya Knightsbridge', 'платье в паре с абайей Knightsbridge', '搭配Knightsbridge长袍连衣裙', 'Kleid zur Kombination Knightsbridge Abaya', 'jurk te combineren met Knightsbridge abaya', 'vestido para combinar abaya Knightsbridge'],
]

const KNIGHTSBRIDGE_DRESS_EXCLUSIVE_I18N = rowsToKw(KNIGHTSBRIDGE_DRESS_EXCLUSIVE_ROWS)

/** Knightsbridge Dress-only schema keywords merged with shared pools in productSchemaMeta. */
export function getLocalizedKnightsbridgeDressExclusiveKeywords(
  locale: AppLocale,
  colorName?: string,
): string[] {
  const terms = new Set<string>(
    locale === 'id'
      ? KNIGHTSBRIDGE_DRESS_EXCLUSIVE_KEYWORDS_ID
      : locale === 'ms'
        ? KNIGHTSBRIDGE_DRESS_EXCLUSIVE_KEYWORDS_MS
        : KNIGHTSBRIDGE_DRESS_EXCLUSIVE_I18N.map((row) => row[locale]),
  )
  const color = colorName?.trim()
  if (color) {
    terms.add(color)
    terms.add(`${color} ${DRESS_TYPE[locale]}`)
  }
  return [...terms]
}
