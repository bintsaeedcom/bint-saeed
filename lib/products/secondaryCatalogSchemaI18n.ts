import type { AppLocale } from '@/lib/i18n/routing'
import { buildAbayaSchemaAudience } from '@/lib/products/abayaSchemaPackResolve'
import { getDressSchemaAudience } from '@/lib/products/categorySchemaAudience'
import {
  getLocalizedSecondaryCatalogSchemaFacts,
  getLocalizedSecondaryCatalogSchemaFaq,
  HAMPSTEAD_SLUG,
  MARYLEBONE_SLUG,
  PARK_LANE_SLUG,
  SOHO_SLUG,
} from '@/lib/products/secondaryCatalogSchemaLocalePacks'
import { getLocalizedSecondaryCatalogExclusiveKeywords } from '@/lib/products/secondaryCatalogSchemaKeywordsI18n'
import { getLocalizedParkLaneAbayaExclusiveKeywords } from '@/lib/products/parkLaneAbayaSchemaKeywordsI18n'

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

const MARYLEBONE_AUDIENCE_EXT: Record<AppLocale, string> = {
  en: ', open-front abayas, layering abayas, wide-sleeve abayas, outerwear abayas, abayas to layer over dresses, travel wardrobes, and women pairing with the Covent Garden Long Dress',
  ar: ', عبايات مفتوحة، عبايات للطبقات، عبايات أكمام واسعة، عبايات خارجية، والتنسيق فوق الفساتين',
  fr: ', abayas ouvertes, abayas à superposer, abayas manches larges, outerwear, et superposition sur robes',
  it: ', abaya aperte, abaya layering, abaya maniche ampie, outerwear, e layering su abiti',
  es: ', abayas abiertas, abayas para capas, abayas de mangas amplias, outerwear, y capas sobre vestidos',
  ru: ', абайи с открытым передом, абайи для наслоения, абайи с широкими рукавами, верхняя одежда, и слои над платьями',
  zh: ', 开襟长袍、叠穿长袍、宽袖长袍、外搭长袍，以及搭配连衣裙',
  de: ', offene Abayas, Layering-Abayas, Abayas mit weiten Ärmeln, Outerwear, und Layering über Kleidern',
  nl: ', open-front abaya’s, layering abaya’s, wijde mouw abaya’s, outerwear, en layering over jurken',
  pt: ', abayas abertas, abayas para camadas, abayas de mangas largas, outerwear, e camadas sobre vestidos',
  id: ', abaya terbuka, abaya layering, abaya lengan lebar, outerwear, dan layering di atas gaun',
  ms: ', abaya terbuka, abaya layering, abaya lengan lebar, outerwear, dan layering atas gaun',
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
  return buildAbayaSchemaAudience(locale, MARYLEBONE_AUDIENCE_EXT)
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
  getLocalizedSecondaryCatalogExclusiveKeywords,
}
