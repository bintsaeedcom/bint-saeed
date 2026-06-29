import type { AppLocale } from '@/lib/i18n/routing'
import { getDressSchemaAudience } from '@/lib/products/categorySchemaAudience'
import {
  getLocalizedMaryleboneAbayaExclusiveKeywords,
} from '@/lib/products/maryleboneAbayaSchemaKeywordsI18n'
import { getLocalizedParkLaneAbayaExclusiveKeywords } from '@/lib/products/parkLaneAbayaSchemaKeywordsI18n'
import {
  HAMPSTEAD_SLUG,
  MARYLEBONE_SLUG,
  PARK_LANE_SLUG,
} from '@/lib/products/secondaryCatalogSchemaLocalePacks'

export {
  HAMPSTEAD_SLUG,
  MARYLEBONE_SLUG,
  PARK_LANE_SLUG,
  SOHO_SLUG,
} from '@/lib/products/secondaryCatalogSchemaLocalePacks'

export {
  HYDE_PARK_SET_SLUG as HYDE_PARK_SLUG,
  getHydeParkSetSchemaAudience,
  isHydeParkSetSlug,
} from '@/lib/products/hydeParkSetSchemaI18n'

const MARYLEBONE_SCHEMA_AUDIENCE: Record<AppLocale, string> = {
  en: 'Women who love fashion, fashion enthusiasts, fashion editors, style editors, fashion curators, museum and gallery curators, cultural heritage professionals connected to fashion, textile heritage audiences, collectors of modest luxury, and women seeking graceful A-line abayas with interchangeable natural stone strands. Women interested in abaya jewellery, garment jewellery, Signature Strands, Onyx Strands, removable cuff strands, contemporary designer abayas, luxury abayas, diplomat abayas, embassy abayas, gallery openings, cultural engagements, and modest fashion that bridges Gulf craftsmanship with international style — with signature gold-tone Knotted Line details, handcrafted in Abu Dhabi for GCC, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and international wardrobes across London, Paris, Milan, New York, Riyadh, Doha, and beyond. Diplomats, embassy staff, cultural attachés, editorial stylists, heritage fashion advocates, fashion week buyers, and women building a wardrobe of interchangeable Bint Saeed Strands across selected garments. Men seeking meaningful luxury gifts for their wife, daughter, mother, fiancée, girlfriend, or sister.',
  ar: 'النساء اللواتي يعشقن الأزياء، عشاق الموضة، محررات الأزياء، منسقات الأزياء، أمناء المتاحف والمعارض، متخصصات التراث الثقافي المرتبطات بالأزياء، جامعات الأزياء المحتشمة الفاخرة، والباحثات عن عبايات A-line أنيقة بخيوط أحجار طبيعية قابلة للتبديل. مهتمات بمجوهرات العباية، خيوط التوقيع، خيوط العقيق، العبايات المصمّمة المعاصرة والفاخرة والدبلوماسية، واستقبالات السفارات والفعاليات الثقافية — بتفاصيل Knotted Line الذهبية، مصنوعة يدوياً في أبوظبي للخليج والعالم. دبلوماسيات، موظفات سفارات، منسقات تحريرية، داعمات أزياء التراث، ومشتركات خزائن خيوط Bint Saeed القابلة للتبديل. رجال يبحثون عن هدايا فاخرة.',
  fr: 'Femmes passionnées de mode, enthousiastes de la fashion, rédactrices et éditrices mode, conservatrices et curatrices, professionnelles du patrimoine culturel liées à la mode, collectionneuses de luxe modeste, et femmes en quête d’abayas A-line gracieuses avec fils de pierres naturelles interchangeables. Intéressées par la bijouterie d’abaya, les Signature Strands, les fils Onyx, abayas de créateur contemporaines, de luxe, diplomatiques et d’ambassade — détails Knotted Line dorés, fabriquées à Abou Dabi pour le Golfe et le monde. Diplomates, personnel d’ambassade, attachés culturels, stylistes éditoriaux, acheteuses fashion week. Hommes en quête de cadeaux de luxe.',
  it: 'Donne che amano la moda, appassionate di fashion, editor di moda, curatrici, curatori di musei e gallerie, professioniste del patrimonio culturale legate alla moda, collezioniste di lusso modesto, e donne in cerca di abaya A-line aggraziate con fili di pietre naturali intercambiabili. Interessate a gioielli abaya, Signature Strands, fili Onyx, abaya designer contemporanee, di lusso, diplomatiche e ambasciata — dettagli Knotted Line dorati, create ad Abu Dhabi per il Golfo e il mondo. Diplomatiche, staff ambasciata, stylist editoriali, acquirenti fashion week. Uomini in cerca di regali di lusso.',
  es: 'Mujeres que aman la moda, entusiastas de la fashion, editoras de moda, curatoras, conservadoras de museos y galerías, profesionales del patrimonio cultural vinculadas a la moda, coleccionistas de lujo modesto, y mujeres que buscan abayas A-line elegantes con hebras de piedras naturales intercambiables. Interesadas en joyería de abaya, Signature Strands, hebras Onyx, abayas de diseñador contemporáneas, de lujo, diplomáticas y de embajada — detalles Knotted Line dorados, hechas en Abu Dabi para el Golfo y el mundo. Diplomáticas, personal de embajada, estilistas editoriales, compradoras de fashion week. Hombres en busca de regalos de lujo.',
  ru: 'Женщины, любящие моду, энтузиастки моды, редакторы моды, кураторы, кураторы музеев и галерей, специалистки культурного наследия, связанные с модой, коллекционерки скромной роскоши, и те, кто ищет изящные абайи A-line со сменяемыми нитями из натурального камня. Интерес к украшениям для абайи, Signature Strands, нитям оникса, современным дизайнерским, люксовым, дипломатическим абайям — детали Knotted Line, ручная работа в Абу-Даби для Залива и мира. Дипломатки, сотрудницы посольств, редакторские стилисты, покупательницы fashion week. Мужчины, ищущие роскошные подарки.',
  zh: '热爱时尚的女性、时尚爱好者、时尚编辑、策展人、博物馆与画廊策展人、与时尚相关的文化遗产专业人士、端庄奢华收藏者，以及寻求优雅A字长袍与可互换天然宝石串的女性；关注长袍珠宝、Signature Strands、玛瑙串、当代设计师长袍、奢华长袍、外交与使馆场合——Knotted Line金饰细节，阿布扎比手工制作，面向海湾与世界。外交官、使馆人员、文化参赞、编辑造型师、时尚周买家。寻找奢华礼品的男性。',
  de: 'Frauen, die Mode lieben, Mode-Enthusiastinnen, Mode-Redakteurinnen, Kuratorinnen, Museum- und Galerie-Kuratorinnen, Kulturerbe-Fachkräfte mit Modebezug, Sammlerinnen bescheidener Luxusmode, und Frauen, die anmutige A-Linien-Abayas mit austauschbaren Naturstein-Strängen suchen. Interesse an Abaya-Schmuck, Signature Strands, Onyx-Strängen, zeitgenössischen Designer-, Luxus-, Diplomaten- und Botschafts-Abayas — goldene Knotted-Line-Details, handgefertigt in Abu Dhabi für den Golf und die Welt. Diplomatinnen, Botschaftspersonal, Editorial-Stylistinnen, Fashion-Week-Käuferinnen. Männer, die Luxusgeschenke suchen.',
  nl: 'Vrouwen die van mode houden, modeliefhebbers, moderedacteuren, curatoren, museum- en galeriecuratoren, cultureel-erfgoedprofessionals verbonden met mode, verzamelaars van bescheiden luxe, en vrouwen die sierlijke A-line abaya’s met verwisselbare natuursteen strands zoeken. Geïnteresseerd in abaya-sieraden, Signature Strands, Onyx Strands, eigentijdse designer-, luxe-, diplomaten- en ambassade-abaya’s — gouden Knotted Line-details, handgemaakt in Abu Dhabi voor de Golf en de wereld. Diplomaten, ambassadepersoneel, redactionele stylisten, fashionweek-kopers. Mannen die luxe cadeaus zoeken.',
  pt: 'Mulheres que amam moda, entusiastas de fashion, editoras de moda, curadoras, curadoras de museus e galerias, profissionais de património cultural ligadas à moda, colecionadoras de luxo modesto, e mulheres que procuram abayas A-line graciosas com fios de pedras naturais intercambiáveis. Interessadas em joias de abaya, Signature Strands, fios Onyx, abayas de designer contemporâneas, de luxo, diplomáticas e de embaixada — detalhes Knotted Line dourados, feitas à mão em Abu Dhabi para o Golfo e o mundo. Diplomatas, staff de embaixada, stylists editoriais, compradoras de fashion week. Homens à procura de presentes de luxo.',
  id: 'Wanita yang mencintai fashion, penggemar fashion, editor fashion, kurator, kurator museum dan galeri, profesional warisan budaya terkait fashion, kolektor modest luxury, dan wanita yang mencari abaya A-line anggun dengan strand batu alam yang dapat dipertukarkan. Tertarik pada perhiasan abaya, Signature Strands, Onyx Strands, abaya desainer kontemporer, mewah, diplomatik, dan kedutaan — detail Knotted Line emas, buatan tangan di Abu Dhabi untuk GCC dan dunia. Diplomat, staf kedutaan, stylist editorial, pembeli fashion week. Pria mencari hadiah mewah.',
  ms: 'Wanita yang mencintai fesyen, peminat fesyen, editor fesyen, kurator, kurator muzium dan galeri, profesional warisan budaya berkaitan fesyen, pengumpul luxe sopan, dan wanita yang mencari abaya A-line anggun dengan strands batu semula jadi boleh ditukar. Berminat pada barang kemas abaya, Signature Strands, Onyx Strands, abaya pereka kontemporari, mewah, diplomatik, dan kedutaan — butiran Knotted Line emas, buatan tangan di Abu Dhabi untuk GCC dan dunia. Diplomat, kakitangan kedutaan, stylist editorial, pembeli fashion week. Lelaki mencari hadiah mewah.',
}

const PARK_LANE_SCHEMA_AUDIENCE: Record<AppLocale, string> = {
  en: 'Women seeking designer abayas, luxury abayas, premium abayas, A-line abayas, tailored abayas, contemporary abayas, city abayas, business abayas, executive abayas, diplomat abayas, embassy abayas, official occasion abayas, and modest fashion that moves effortlessly between cultures. Women who value exceptional tailoring over embellishment, integrated shoulder scarves, signature Knotted Line shoulder buttons, removable Bint Saeed emblem cufflinks, hidden side seam pockets, and optional hidden inner label personalisation — created in Abu Dhabi for GCC, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and international wardrobes across London, Paris, Riyadh, Doha, New York, and beyond. Diplomats, executives, embassy staff, women working with Arab clients, royal families travelling abroad, VIP guests, high-net-worth family members, business women, expatriates in the Gulf, and occasionwear buyers choosing refined contemporary layers or timeless abayas. Men seeking meaningful luxury gifts for their wife, daughter, mother, fiancée, girlfriend, or sister.',
  ar: 'النساء الباحثات عن عبايات مصمّمة، فاخرة، راقية، بقصة A-line، مفصّلة، معاصرة، للمدينة والأعمال والتنفيذيات والدبلوماسيات واستقبالات السفارات والمناسبات الرسمية. من يقدّرن التفصيل الاستثنائي، ووشاح الكتف المدمج، وأزرار Knotted Line، وأزرار الشعار القابلة للإزالة، والجيوب المخفية، والتخصيص الداخلي — من أبوظبي للخليج والإمارات والعالم. دبلوماسيات، تنفيذيات، موظفات سفارات، نساء يعملن مع عملاء عرب، عائلات ملكية مسافرة، ضيوف كبار، ونساء يختارن طبقة معاصرة أو عباية خالدة. رجال يبحثون عن هدايا فاخرة.',
  fr: 'Femmes en quête d’abayas de créateur, de luxe, premium, A-line, taillées, contemporaines, urbaines, business, executive, diplomatiques, d’ambassade et d’occasions officielles. Celles qui valorisent la tailleur exceptionnelle, l’écharpe d’épaule intégrée, les boutons Knotted Line, les boutons de manchette emblème amovibles, les poches cachées et la personnalisation intérieure — créées à Abou Dabi pour le Golfe et le monde. Diplomates, dirigeantes, personnel d’ambassade, familles royales en voyage, clientes VIP. Hommes en quête de cadeaux de luxe.',
  it: 'Donne in cerca di abaya designer, di lusso, premium, A-line, sartoriali, contemporanee, città, business, executive, diplomatiche, ambasciata e occasioni ufficiali. Chi valorizza la sartoria eccezionale, la sciarpa spalla integrata, i bottoni Knotted Line, i gemelli emblema rimovibili, le tasche nascoste e la personalizzazione interna — create ad Abu Dhabi per il Golfo e il mondo. Diplomatiche, executive, staff ambasciata, famiglie reali in viaggio, ospiti VIP. Uomini in cerca di regali di lusso.',
  es: 'Mujeres que buscan abayas de diseñador, de lujo, premium, A-line, de sastrería, contemporáneas, ciudad, negocios, ejecutivas, diplomáticas, de embajada y de ocasiones oficiales. Quienes valoran la sastrería excepcional, el bufanda de hombro integrado, los botones Knotted Line, los gemelos emblema extraíbles, los bolsillos ocultos y la personalización interior — creadas en Abu Dabi para el Golfo y el mundo. Diplomáticas, ejecutivas, personal de embajada, familias reales en viaje, invitadas VIP. Hombres en busca de regalos de lujo.',
  ru: 'Женщины, ищущие дизайнерские, люксовые, премиальные абайи A-line, с кроем, современные, городские, деловые, для дипломатов, посольств и официальных мероприятий. Те, кто ценит исключительный крой, встроенный шарф на плече, пуговицы Knotted Line, съёмные запонки-эмблемы, скрытые карманы и персонализацию — из Абу-Даби для Залива и мира. Дипломатки, руководительницы, сотрудницы посольств, королевские семьи в поездках, VIP-гости. Мужчины, ищущие роскошные подарки.',
  zh: '寻求设计师、奢华、高端、A字、剪裁、当代、都市、商务、外交、使馆与正式场合长袍的女性；重视卓越剪裁、一体式肩巾、Knotted Line肩钮、可拆卸徽标袖扣、隐藏口袋与内标定制——阿布扎比创作，面向海湾与世界。外交官、高管、使馆人员、与阿拉伯客户共事的女性、出国王室、VIP宾客。寻找奢华礼品的男性。',
  de: 'Frauen, die Designer-, Luxus-, Premium-, A-Linien-, taillierte, zeitgenössische, City-, Business-, Executive-, Diplomaten- und Botschafts-Abayas suchen. Frauen, die außergewöhnliche Schneiderkunst, integrierten Schulterschal, Knotted-Line-Knöpfe, abnehmbare Emblem-Manschettenknöpfe, versteckte Taschen und Personalisierung schätzen — aus Abu Dhabi für den Golf und die Welt. Diplomatinnen, Führungskräfte, Botschaftspersonal, reisende Königshäuser, VIP-Gäste. Männer, die Luxusgeschenke suchen.',
  nl: 'Vrouwen die designer-, luxe-, premium-, A-line-, getailleerde, eigentijdse, city-, business-, executive-, diplomaten- en ambassade-abaya’s zoeken. Vrouwen die uitzonderlijk vakmanschap, geïntegreerde schoudersjaal, Knotted Line knopen, verwijderbare embleem manchetknopen, verborgen zakken en personalisatie waarderen — gemaakt in Abu Dhabi voor de Golf en de wereld. Diplomaten, executives, ambassadepersoneel, reizende koninklijke families, VIP-gasten. Mannen die luxe cadeaus zoeken.',
  pt: 'Mulheres que procuram abayas de designer, luxo, premium, A-line, de alfaiataria, contemporâneas, cidade, negócios, executivas, diplomáticas, de embaixada e ocasiões oficiais. Quem valoriza alfaiataria excecional, lenço de ombro integrado, botões Knotted Line, abotoaduras emblema removíveis, bolsos ocultos e personalização interior — criadas em Abu Dhabi para o Golfo e o mundo. Diplomatas, executivas, staff de embaixada, famílias reais em viagem, convidadas VIP. Homens à procura de presentes de luxo.',
  id: 'Wanita yang mencari abaya desainer, mewah, premium, A-line, tailored, kontemporer, kota, bisnis, eksekutif, diplomatik, kedutaan, dan acara resmi. Yang menghargai tailoring luar biasa, scarf bahu terintegrasi, kancing Knotted Line, kancing manset emblem lepas, saku tersembunyi, dan personalisasi label dalam — dari Abu Dhabi untuk GCC dan dunia. Diplomat, eksekutif, staf kedutaan, keluarga kerajaan bepergian, tamu VIP. Pria mencari hadiah mewah.',
  ms: 'Wanita yang mencari abaya pereka, mewah, premium, A-line, terjahit, kontemporari, bandar, perniagaan, eksekutif, diplomatik, kedutaan, dan majlis rasmi. Yang menghargai jahitan luar biasa, skarf bahu bersepadu, butang Knotted Line, kancing manset emblem boleh tanggal, poket tersembunyi, dan pemeribadian label dalaman — dari Abu Dhabi untuk GCC dan dunia. Diplomat, eksekutif, kakitangan kedutaan, keluarga diraja melancong, tetamu VIP. Lelaki mencari hadiah mewah.',
}

const HAMPSTEAD_AUDIENCE_EXT: Record<AppLocale, string> = {
  en: ', Al Talli dresses, structured evening dresses, heritage dresses, women pairing with the Covent Garden Abaya, and buyers searching Al Talli fashion worldwide',
  ar: ', فساتين التلي، فساتين مسائية مُهيكَلة، فساتين تراثية، والتنسيق مع عباية Covent Garden',
  fr: ', robes Al Talli, robes de soirée structurées, robes patrimoniales, et association avec l’abaya Covent Garden',
  it: ', abiti Al Talli, abiti serali strutturati, abiti heritage, e abbinamento con Covent Garden Abaya',
  es: ', vestidos Al Talli, vestidos de noche estructurados, vestidos patrimoniales, y combinación con Covent Garden Abaya',
  ru: ', платья Al Talli, структурированные вечерние платья, платья наследия, и сочетание с Covent Garden Abaya',
  zh: ', Al Talli 连衣裙、结构感晚宴裙、传承连衣裙，以及搭配 Covent Garden 长袍',
  de: ', Al-Talli-Kleider, strukturierte Abendkleider, Heritage-Kleider, und Kombination mit Covent Garden Abaya',
  nl: ', Al Talli-jurken, gestructureerde avondjurken, erfgoedjurken, en combineren met Covent Garden abaya',
  pt: ', vestidos Al Talli, vestidos de noite estruturados, vestidos património, e combinar com Covent Garden Abaya',
  id: ', gaun Al Talli, gaun malam terstruktur, gaun warisan, dan padukan dengan Covent Garden Abaya',
  ms: ', gaun Al Talli, gaun malam berstruktur, gaun warisan, dan gabung dengan Covent Garden Abaya',
}

export function isMaryleboneAbayaSlug(slug: string): boolean {
  return slug.toLowerCase() === MARYLEBONE_SLUG
}

export function isParkLaneAbayaSlug(slug: string): boolean {
  return slug.toLowerCase() === PARK_LANE_SLUG
}

export function isHampsteadDressSlug(slug: string): boolean {
  return slug.toLowerCase() === HAMPSTEAD_SLUG
}

export function getMaryleboneAbayaSchemaAudience(locale: AppLocale = 'en'): string {
  return MARYLEBONE_SCHEMA_AUDIENCE[locale] ?? MARYLEBONE_SCHEMA_AUDIENCE.en
}

export function getMaryleboneAbayaSchemaKeywords(
  locale: AppLocale = 'en',
  colorName?: string,
): string {
  return getLocalizedMaryleboneAbayaExclusiveKeywords(locale, colorName).join(', ')
}

export function getParkLaneAbayaSchemaAudience(locale: AppLocale = 'en'): string {
  return PARK_LANE_SCHEMA_AUDIENCE[locale] ?? PARK_LANE_SCHEMA_AUDIENCE.en
}

export function getParkLaneAbayaSchemaKeywords(
  locale: AppLocale = 'en',
  colorName?: string,
): string {
  return getLocalizedParkLaneAbayaExclusiveKeywords(locale, colorName).join(', ')
}

export function getHampsteadDressSchemaAudience(locale: AppLocale = 'en'): string {
  return `${getDressSchemaAudience(locale).slice(0, -1)}${HAMPSTEAD_AUDIENCE_EXT[locale] ?? HAMPSTEAD_AUDIENCE_EXT.en}.`
}

export {
  getSohoSetSchemaAudience,
  isSohoSetSlug,
} from '@/lib/products/sohoSetSchemaI18n'

export {
  getLocalizedSecondaryCatalogSchemaFacts,
  getLocalizedSecondaryCatalogSchemaFaq,
} from '@/lib/products/secondaryCatalogSchemaLocalePacks'

export {
  getLocalizedSecondaryCatalogExclusiveKeywords,
} from '@/lib/products/secondaryCatalogSchemaKeywordsI18n'
