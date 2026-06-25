import type { AppLocale } from '@/lib/i18n/routing'
import {
  getLocalizedCoventGardenLongDressExclusiveKeywords,
} from '@/lib/products/coventGardenLongDressSchemaKeywordsI18n'
import {
  COVENT_GARDEN_LONG_DRESS_SLUG,
  getLocalizedCoventGardenLongDressFaq,
  getLocalizedCoventGardenLongDressSchemaFacts,
} from '@/lib/products/coventGardenLongDressSchemaLocalePacks'

export { COVENT_GARDEN_LONG_DRESS_SLUG } from '@/lib/products/coventGardenLongDressSchemaLocalePacks'

export const COVENT_GARDEN_LONG_DRESS_SCHEMA_AUDIENCE: Record<AppLocale, string> = {
  en: 'Women seeking elegant long dresses, tailored maxi dresses, premium designer dresses, contemporary dresses, under-abaya dresses, signature under-abaya dresses, sleeveless dresses for Gulf climates, modest fashion, premium modest fashion, work dresses, office dresses, afternoon tea dresses, dinner dresses, wedding guest dresses, special occasion dresses, versatile wardrobe dresses, and thoughtfully curated international wardrobes. Women in the GCC, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman; Emirati women; expatriates in the Gulf; European, British, American, Canadian, and Asian women; business women, entrepreneurs, executives, and creative professionals; premium and contemporary fashion buyers; women pairing dresses with the Covent Garden Abaya, Kensington Abaya, and Marylebone Abaya; and women who value exceptional fit, refined tailoring, and timeless elegance. Men seeking meaningful premium or luxury gifts for their wife, daughter, mother, fiancée, girlfriend, or sister.',
  ar: 'النساء الباحثات عن فساتين طويلة أنيقة، فساتين ماكسي مفصّلة، فساتين مصمّمة راقية، فساتين معاصرة، فساتين تحت العباية، فساتين مميزة تحت العباية، فساتين بدون أكمام لمناخ الخليج، أزياء محتشمة راقية، فساتين للعمل والمكتب وشاي بعد الظهر والعشاء وضيافة الأعراس والمناسبات، خزائن مدروسة دولية، نساء دول مجلس التعاون والإمارات والسعودية وقطر والكويت والبحرين وعُمان، المغتربات، سيدات الأعمال، مشتريات الأزياء المعاصرة والراقية، من يُنسّقون مع عبايات Covent Garden وKensington وMarylebone، ومن يقدّرن القصة الاستثنائية والتفصيل الراقي. الرجال الباحثون عن هدايا راقية أو فاخرة للزوجة أو الابنة أو الأم.',
  fr: 'Femmes en quête de robes longues élégantes, robes maxi structurées, robes de créateur premium, robes contemporaines, robes sous abaya, robes signature sous abaya, robes sans manches pour le climat du Golfe, mode modeste premium, robes de travail, bureau, afternoon tea, dîner, invitée de mariage, garde-robes internationales réfléchies ; femmes du Golfe, des EAU, d’Europe, d’Asie, expatriées, femmes d’affaires ; acheteuses de mode contemporaine et premium ; femmes associant la robe aux abayas Covent Garden, Kensington et Marylebone. Hommes en quête de cadeaux premium ou de luxe.',
  it: 'Donne in cerca di abiti lunghi eleganti, abiti maxi sartoriali, abiti designer premium, abiti contemporanei, abiti sotto abaya, abiti signature sotto abaya, abiti senza maniche per il clima del Golfo, moda modesta premium, abiti da lavoro, ufficio, afternoon tea, cena, invitata matrimonio, guardaroba internazionale curato; donne del Golfo, EAU, Europa, Asia, expat, donne d’affari; acquirenti di moda contemporanea e premium; donne che abbinano l’abito alle abaya Covent Garden, Kensington e Marylebone. Uomini in cerca di regali premium o di lusso.',
  es: 'Mujeres que buscan vestidos largos elegantes, vestidos maxi sastreados, vestidos de diseñador premium, vestidos contemporáneos, vestidos bajo abaya, vestidos signature bajo abaya, vestidos sin mangas para el clima del Golfo, moda modesta premium, vestidos de trabajo, oficina, té de la tarde, cena, invitada de boda, armarios internacionales curados; mujeres del Golfo, EAU, Europa, Asia, expatriadas, mujeres de negocios; compradoras de moda contemporánea y premium; mujeres que combinan el vestido con abayas Covent Garden, Kensington y Marylebone. Hombres en busca de regalos premium o de lujo.',
  ru: 'Женщины, ищущие элегантные длинные платья, приталенные макси-платья, премиальные дизайнерские платья, современные платья, платья под абайю, фирменные under-abaya платья, безрукавные платья для климата Залива, скромную премиальную моду, платья для работы, офиса, послеобеденного чая, ужинов, свадеб-гостей, продуманного международного гардероба; женщины стран Залива и ОАЭ, Европы, Азии, экспаты, деловые женщины; покупательницы contemporary и premium моды; сочетание с абайями Covent Garden, Kensington и Marylebone. Мужчины, ищущие премиальные или роскошные подарки.',
  zh: '寻求优雅长款连衣裙、修身长款裙、高端设计师连衣裙、当代连衣裙、内穿长袍裙、海湾气候无袖裙、端庄高端时尚、职场与场合连衣裙、国际精心衣橱的女性；海湾、阿联酋、欧洲、亚洲女性、外籍人士、职业女性；搭配 Covent Garden、Kensington、Marylebone 长袍；重视版型与隽永优雅者。寻找高端或奢华礼品的男性。',
  de: 'Frauen, die elegante lange Kleider, taillierte Maxikleider, Premium-Designer-Kleider, zeitgenössische Kleider, Under-Abaya-Kleider, ärmellose Kleider für das Golfklima, bescheidene Premiummode, Business- und Anlasskleider und internationale Garderoben suchen — Frauen im Golf, in den VAE, Europa, Asien, Expats, Geschäftsfrauen; Käuferinnen zeitgenössischer und Premium-Mode; Kombination mit Covent Garden-, Kensington- und Marylebone-Abaya. Männer, die Premium- oder Luxusgeschenke suchen.',
  nl: 'Vrouwen die elegante lange jurken, getailleerde maxi-jurken, premium designer jurken, eigentijdse jurken, under-abaya jurken, mouwloze jurken voor het Golfklimaat, premium bescheiden mode, werk- en gelegenheidsjurken en internationale garderobes zoeken — vrouwen in de Golf, VAE, Europa, Azië, expats, zakenvrouwen; kopers eigentijdse en premium mode; combineren met Covent Garden-, Kensington- en Marylebone-abaya. Mannen die premium of luxe cadeaus zoeken.',
  pt: 'Mulheres que procuram vestidos compridos elegantes, vestidos maxi estruturados, vestidos de designer premium, vestidos contemporâneos, vestidos sob abaya, vestidos signature sob abaya, vestidos sem mangas para o clima do Golfo, moda modesta premium, vestidos de trabalho, escritório, chá da tarde, jantar, convidada de casamento, guarda-roupas internacionais curados; mulheres do Golfo, EAU, Europa, Ásia, expatriadas, mulheres de negócios; compradoras de moda contemporânea e premium; combinar com abayas Covent Garden, Kensington e Marylebone. Homens à procura de presentes premium ou de luxo.',
  id: 'Wanita yang mencari gaun panjang elegan, gaun maxi tailored, gaun desainer premium, gaun kontemporer, gaun under-abaya, gaun signature under-abaya, gaun tanpa lengan untuk iklim Teluk, busana modest premium, gaun kerja, kantor, afternoon tea, makan malam, tamu pernikahan, lemari internasional; wanita GCC, UEA, Eropa, Asia, ekspatriat, wanita karier; pembeli fashion kontemporer dan premium; padukan dengan abaya Covent Garden, Kensington, Marylebone. Pria mencari hadiah premium atau mewah.',
  ms: 'Wanita yang mencari gaun panjang elegan, gaun maxi tailored, gaun pereka premium, gaun kontemporari, gaun under-abaya, gaun signature under-abaya, gaun tanpa lengan untuk iklim Teluk, fesyen sopan premium, gaun kerja, pejabat, afternoon tea, majlis perkahwinan; wanita GCC, UAE, Eropah, Asia, ekspatriat, wanita profesional; pembeli fesyen kontemporari dan premium; gabung dengan abaya Covent Garden, Kensington, Marylebone. Lelaki mencari hadiah premium atau mewah.',
}

export function isCoventGardenLongDressSlug(slug: string): boolean {
  return slug.toLowerCase() === COVENT_GARDEN_LONG_DRESS_SLUG
}

export function getCoventGardenLongDressSchemaAudience(locale: AppLocale = 'en'): string {
  return COVENT_GARDEN_LONG_DRESS_SCHEMA_AUDIENCE[locale] ?? COVENT_GARDEN_LONG_DRESS_SCHEMA_AUDIENCE.en
}

export function getCoventGardenLongDressSchemaKeywords(
  locale: AppLocale = 'en',
  colorName?: string,
): string {
  return getLocalizedCoventGardenLongDressExclusiveKeywords(locale, colorName).join(', ')
}

export {
  getLocalizedCoventGardenLongDressSchemaFacts,
  getLocalizedCoventGardenLongDressFaq,
} from '@/lib/products/coventGardenLongDressSchemaLocalePacks'

export type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'
