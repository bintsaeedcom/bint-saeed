import type { AppLocale } from '@/lib/i18n/routing'
import { localizedPath } from '@/lib/i18n/routing'
import { schemaInLanguageForLocale } from '@/lib/i18n/bcp47'
import { getHomeDefaultTitle, getHomeMetaDescription } from '@/lib/i18n/homePageCopy'
import { mergedMetaKeywordsForLocale } from '@/lib/seo/keywordMerge'
import { getResolvedRoutePageMeta } from '@/lib/seo/routePageMeta'

/** Canonical site origin (must match live host / Search Console property). */
const BASE = 'https://www.bintsaeed.com'

function absoluteUrl(locale: AppLocale, path: string): string {
  return new URL(localizedPath(locale, path), BASE).toString()
}

const PRODUCT_DESCRIPTION: Record<AppLocale, string> = {
  en:
    'Heritage-inspired abayas and modest ready-to-wear by Bint Saeed (UAE), often referencing Al Talli embroidery and Khous palm-frond weaving. Materials and silhouettes vary by collection—see individual products for details.',
  ar:
    'عبايات مستوحاة من التراث وملابس محتشمة جاهزة من بِنت سعيد (الإمارات)، تشير غالباً إلى تطريز التلي ونسج الخوص. تختلف المواد والقصّات حسب المجموعة، واطّلعي على كل منتج للتفاصيل.',
  fr:
    'Abayas et prêt-à-porter modeste inspirés du patrimoine par Bint Saeed (Émirats), souvent en référence à la broderie Al Talli et au tissage Khous. Matières et silhouettes selon les collections—voir chaque produit.',
  it:
    'Abaya e prêt-à-porter modesto ispirati al patrimonio di Bint Saeed (Emirati), spesso con riferimento a ricamo Al Talli e tessitura Khous. Materiali e silhouette variano per collezione—vedi i singoli prodotti.',
  es:
    'Abayas y prêt-à-porter modesto con inspiración heritage de Bint Saeed (EAU), a menudo con bordado Al Talli y tejido Khous. Los materiales y siluetas varían por colección—consulta cada producto.',
  ru:
    'Вдохновлённые наследием абайи и скромный готовый товар от Bint Saeed (ОАЭ), часто с отсылкой к вышивке Аль-Талли и плетению Хаус. Материалы и силуэты зависят от коллекции — см. карточки товаров.',
  zh:
    'Bint Saeed（阿联酋）出品的传承灵感阿巴亚与端庄成衣，常融入阿勒塔利刺绣与赫乌斯编织。面料与廓形因系列而异——请以单品页为准。',
  de:
    'Erbe-inspirierte Abayas und bescheidene Konfektion von Bint Saeed (VAE), oft mit Bezug zu Al-Talli-Stickerei und Khous-Geflecht. Materialien und Silhouetten je Kollektion—Details auf den Produktseiten.',
  nl:
    'Erfgoed-geïnspireerde abaya’s en bescheiden ready-to-wear van Bint Saeed (VAE), vaak met Al Talli-borduur en Khous-vlechtwerk. Materialen en silhouetten verschillen per collectie—zie productpagina’s.',
  pt:
    'Abayas e pronto-a-vestir modesto inspirados no património pela Bint Saeed (EAU), muitas vezes com bordado Al Talli e trançado Khous. Materiais e silhuetas variam por coleção—veja cada produto.',
}

const ITEM_LIST_NAME: Record<AppLocale, string> = {
  en: 'Luxury Abayas UAE | Designer Abayas Abu Dhabi | Bint Saeed',
  ar: 'عبايات فاخرة الإمارات | عبايات مصممة أبوظبي | بِنت سعيد',
  fr: 'Abayas de luxe EAU | Abayas designer Abou Dabi | Bint Saeed',
  it: 'Abaya di lusso EAU | Abaya designer Abu Dhabi | Bint Saeed',
  es: 'Abayas de lujo EAU | Abayas de diseño Abu Dabi | Bint Saeed',
  ru: 'Роскошные абайи ОАЭ | Дизайнерские абайи Абу-Даби | Bint Saeed',
  zh: '阿联酋奢华阿巴亚 | 阿布扎比设计师阿巴亚 | Bint Saeed',
  de: 'Luxus-Abayas VAE | Designer-Abayas Abu Dhabi | Bint Saeed',
  nl: 'Luxe abaya’s VAE | Designer-abaya’s Abu Dhabi | Bint Saeed',
  pt: 'Abayas de luxo EAU | Abayas de designer Abu Dhabi | Bint Saeed',
}

const ITEM_LIST_DESC: Record<AppLocale, string> = {
  en:
    'Luxury abayas UAE. Designer abayas Abu Dhabi. Silk abayas, lace abayas, heritage Al Talli embroidery. Bint Saeed luxury modest fashion collection.',
  ar:
    'عبايات فاخرة في الإمارات. عبايات مصممة في أبوظبي. عبايات حرير ودانتيل وتطريز التلي التراثي. مجموعة بِنت سعيد للأزياء المحتشمة الفاخرة.',
  fr:
    'Abayas de luxe EAU. Abayas designer Abou Dabi. Abayas soie et dentelle, broderie Al Talli. Collection mode modeste Bint Saeed.',
  it:
    'Abaya di lusso EAU. Abaya designer Abu Dhabi. Seta, pizzo, ricamo Al Talli. Collezione modest fashion Bint Saeed.',
  es:
    'Abayas de lujo EAU. Abayas de diseño Abu Dabi. Seda, encaje, bordado Al Talli. Colección de moda modesta Bint Saeed.',
  ru:
    'Роскошные абайи ОАЭ. Дизайнерские абайи Абу-Даби. Шёлк, кружево, вышивка Аль-Талли. Коллекция Bint Saeed.',
  zh:
    '阿联酋奢华阿巴亚，阿布扎比设计师阿巴亚；丝绸、蕾丝与阿勒塔利刺绣。Bint Saeed 高端端庄服饰系列。',
  de:
    'Luxus-Abayas VAE. Designer-Abayas Abu Dhabi. Seide, Spitze, Al-Talli-Stickerei. Bint Saeed bescheidene Luxusmode.',
  nl:
    'Luxe abaya’s VAE. Designer-abaya’s Abu Dhabi. Zijde, kant, Al Talli-borduur. Bint Saeed luxe modeste mode.',
  pt:
    'Abayas de luxo EAU. Abayas de designer Abu Dhabi. Seda, renda, bordado Al Talli. Coleção de moda modesta Bint Saeed.',
}

const ITEM_LIST_ENTRIES: Record<AppLocale, { pos: number; name: string }[]> = {
  en: [
    { pos: 1, name: 'Luxury Abayas UAE' },
    { pos: 2, name: 'Designer Abayas Abu Dhabi' },
    { pos: 3, name: 'Luxury Abayas Dubai' },
    { pos: 4, name: 'Silk Abayas' },
    { pos: 5, name: 'Black Abaya Dubai' },
  ],
  ar: [
    { pos: 1, name: 'عبايات فاخرة الإمارات' },
    { pos: 2, name: 'عبايات مصممة أبوظبي' },
    { pos: 3, name: 'عبايات فاخرة دبي' },
    { pos: 4, name: 'عبايات حرير' },
    { pos: 5, name: 'عباءة سوداء دبي' },
  ],
  fr: [
    { pos: 1, name: 'Abayas de luxe EAU' },
    { pos: 2, name: 'Abayas designer Abou Dabi' },
    { pos: 3, name: 'Abayas de luxe Dubaï' },
    { pos: 4, name: 'Abayas en soie' },
    { pos: 5, name: 'Abaya noire Dubaï' },
  ],
  it: [
    { pos: 1, name: 'Abaya di lusso EAU' },
    { pos: 2, name: 'Abaya designer Abu Dhabi' },
    { pos: 3, name: 'Abaya di lusso Dubai' },
    { pos: 4, name: 'Abaya in seta' },
    { pos: 5, name: 'Abaya nera Dubai' },
  ],
  es: [
    { pos: 1, name: 'Abayas de lujo EAU' },
    { pos: 2, name: 'Abayas de diseño Abu Dabi' },
    { pos: 3, name: 'Abayas de lujo Dubái' },
    { pos: 4, name: 'Abayas de seda' },
    { pos: 5, name: 'Abaya negra Dubái' },
  ],
  ru: [
    { pos: 1, name: 'Роскошные абайи ОАЭ' },
    { pos: 2, name: 'Дизайнерские абайи Абу-Даби' },
    { pos: 3, name: 'Роскошные абайи Дубай' },
    { pos: 4, name: 'Шёлковые абайи' },
    { pos: 5, name: 'Чёрная абайя Дубай' },
  ],
  zh: [
    { pos: 1, name: '阿联酋奢华阿巴亚' },
    { pos: 2, name: '阿布扎比设计师阿巴亚' },
    { pos: 3, name: '迪拜奢华阿巴亚' },
    { pos: 4, name: '丝绸阿巴亚' },
    { pos: 5, name: '迪拜黑色阿巴亚' },
  ],
  de: [
    { pos: 1, name: 'Luxus-Abayas VAE' },
    { pos: 2, name: 'Designer-Abayas Abu Dhabi' },
    { pos: 3, name: 'Luxus-Abayas Dubai' },
    { pos: 4, name: 'Seiden-Abayas' },
    { pos: 5, name: 'Schwarze Abaya Dubai' },
  ],
  nl: [
    { pos: 1, name: 'Luxe abaya’s VAE' },
    { pos: 2, name: 'Designer-abaya’s Abu Dhabi' },
    { pos: 3, name: 'Luxe abaya’s Dubai' },
    { pos: 4, name: 'Zijden abaya’s' },
    { pos: 5, name: 'Zwarte abaya Dubai' },
  ],
  pt: [
    { pos: 1, name: 'Abayas de luxo EAU' },
    { pos: 2, name: 'Abayas de designer Abu Dhabi' },
    { pos: 3, name: 'Abayas de luxo Dubai' },
    { pos: 4, name: 'Abayas de seda' },
    { pos: 5, name: 'Abaya preta Dubai' },
  ],
}

/** Places served — names only (no mixed-language marketing blurbs per entry). */
const AREA_SERVED_MINIMAL = [
  { '@type': 'Country', name: 'United Arab Emirates' },
  {
    '@type': 'City',
    name: 'Al Ain',
    '@id': `${BASE}/#area-alain`,
    containedInPlace: { '@type': 'Country', name: 'United Arab Emirates' },
  },
  {
    '@type': 'City',
    name: 'Dubai',
    containedInPlace: { '@type': 'Country', name: 'United Arab Emirates' },
  },
  {
    '@type': 'City',
    name: 'Abu Dhabi',
    containedInPlace: { '@type': 'Country', name: 'United Arab Emirates' },
  },
  {
    '@type': 'City',
    name: 'Sharjah',
    containedInPlace: { '@type': 'Country', name: 'United Arab Emirates' },
  },
  {
    '@type': 'City',
    name: 'Ras Al Khaimah',
    containedInPlace: { '@type': 'Country', name: 'United Arab Emirates' },
  },
  {
    '@type': 'City',
    name: 'Fujairah',
    containedInPlace: { '@type': 'Country', name: 'United Arab Emirates' },
  },
  {
    '@type': 'City',
    name: 'Ajman',
    containedInPlace: { '@type': 'Country', name: 'United Arab Emirates' },
  },
  {
    '@type': 'City',
    name: 'Umm Al Quwain',
    containedInPlace: { '@type': 'Country', name: 'United Arab Emirates' },
  },
  { '@type': 'Country', name: 'Saudi Arabia' },
  {
    '@type': 'City',
    name: 'Riyadh',
    containedInPlace: { '@type': 'Country', name: 'Saudi Arabia' },
  },
  {
    '@type': 'City',
    name: 'Jeddah',
    containedInPlace: { '@type': 'Country', name: 'Saudi Arabia' },
  },
  { '@type': 'City', name: 'Dammam', containedInPlace: { '@type': 'Country', name: 'Saudi Arabia' } },
  { '@type': 'City', name: 'Mecca', containedInPlace: { '@type': 'Country', name: 'Saudi Arabia' } },
  { '@type': 'City', name: 'Medina', containedInPlace: { '@type': 'Country', name: 'Saudi Arabia' } },
  { '@type': 'Country', name: 'Qatar' },
  {
    '@type': 'City',
    name: 'Doha',
    containedInPlace: { '@type': 'Country', name: 'Qatar' },
  },
  { '@type': 'Country', name: 'Kuwait' },
  {
    '@type': 'City',
    name: 'Kuwait City',
    containedInPlace: { '@type': 'Country', name: 'Kuwait' },
  },
  { '@type': 'Country', name: 'Bahrain' },
  {
    '@type': 'City',
    name: 'Manama',
    containedInPlace: { '@type': 'Country', name: 'Bahrain' },
  },
  { '@type': 'Country', name: 'Oman' },
  {
    '@type': 'City',
    name: 'Muscat',
    containedInPlace: { '@type': 'Country', name: 'Oman' },
  },
] as const

const CATALOG_NAME: Record<AppLocale, string> = {
  en: 'Bint Saeed Luxury Abaya Collection 2026',
  ar: 'مجموعة بِنت سعيد الفاخرة للعباءات 2026',
  fr: 'Collection abayas de luxe Bint Saeed 2026',
  it: 'Collezione abaya di lusso Bint Saeed 2026',
  es: 'Colección de abayas de lujo Bint Saeed 2026',
  ru: 'Коллекция роскошных абай Bint Saeed 2026',
  zh: 'Bint Saeed 2026 奢华阿巴亚系列',
  de: 'Bint Saeed Luxus-Abaya-Kollektion 2026',
  nl: 'Bint Saeed luxe abaya-collectie 2026',
  pt: 'Coleção de abayas de luxo Bint Saeed 2026',
}

const CATALOG_OFFER_TITLES: Record<AppLocale, [string, string, string, string, string, string]> = {
  en: [
    'Luxury Black Abayas',
    'Designer Bisht Abayas',
    'Embroidered Abayas Al Talli',
    'Colored Luxury Abayas',
    'Summer Abaya Collection 2026',
    'Winter Abaya Collection 2026',
  ],
  ar: [
    'عباءات سوداء فاخرة',
    'عباءات بشت بتصميم عصري',
    'عباءات مطرّزة بالتلي',
    'عباءات ملوّنة فاخرة',
    'مجموعة العباءات الصيفية 2026',
    'مجموعة العباءات الشتوية 2026',
  ],
  fr: [
    'Abayas noires de luxe',
    'Abayas bisht designer',
    'Abayas brodées Al Talli',
    'Abayas colorées de luxe',
    'Collection abayas été 2026',
    'Collection abayas hiver 2026',
  ],
  it: [
    'Abaya nere di lusso',
    'Abaya bisht designer',
    'Abaya ricamate Al Talli',
    'Abaya colorate di lusso',
    'Collezione abaya estiva 2026',
    'Collezione abaya invernale 2026',
  ],
  es: [
    'Abayas negras de lujo',
    'Abayas bisht de diseño',
    'Abayas bordadas Al Talli',
    'Abayas de color de lujo',
    'Colección abayas verano 2026',
    'Colección abayas invierno 2026',
  ],
  ru: [
    'Чёрные роскошные абайи',
    'Дизайнерские абайи-бишт',
    'Вышитые абайи Аль-Талли',
    'Цветные роскошные абайи',
    'Летняя коллекция абай 2026',
    'Зимняя коллекция абай 2026',
  ],
  zh: [
    '奢华黑色阿巴亚',
    '设计师比什特阿巴亚',
    '阿勒塔利刺绣阿巴亚',
    '彩色奢华阿巴亚',
    '2026 夏季阿巴亚系列',
    '2026 冬季阿巴亚系列',
  ],
  de: [
    'Luxuriöse schwarze Abayas',
    'Designer-Bisht-Abayas',
    'Bestickte Al-Talli-Abayas',
    'Farbige Luxus-Abayas',
    'Sommer-Abaya-Kollektion 2026',
    'Winter-Abaya-Kollektion 2026',
  ],
  nl: [
    'Luxe zwarte abaya’s',
    'Designer bisht-abaya’s',
    'Geborduurde Al Talli-abaya’s',
    'Gekleurde luxe abaya’s',
    'Zomer abaya-collectie 2026',
    'Winter abaya-collectie 2026',
  ],
  pt: [
    'Abayas pretas de luxo',
    'Abayas bisht de designer',
    'Abayas bordadas Al Talli',
    'Abayas coloridas de luxo',
    'Coleção abayas verão 2026',
    'Coleção abayas inverno 2026',
  ],
}

const BRAND_KNOWS_ABOUT: Record<AppLocale, string[]> = {
  en: [
    'Luxury abayas',
    'Emirati heritage',
    'Khous weaving',
    'Al Talli craftsmanship',
    'Natural stone jewellery',
    'Modest fashion UAE',
  ],
  ar: [
    'عبايات فاخرة',
    'التراث الإماراتي',
    'نسيج الخوص',
    'حرفية التلي',
    'مجوهرات أحجار طبيعية',
    'أزياء محتشمة الإمارات',
  ],
  fr: [
    'Abayas de luxe',
    'Patrimoine émirati',
    'Tissage Khous',
    'Artisanat Al Talli',
    'Bijoux pierres naturelles',
    'Mode modeste EAU',
  ],
  it: [
    'Abaya di lusso',
    'Patrimonio emiratino',
    'Tessitura Khous',
    'Artigianato Al Talli',
    'Gioielli in pietre naturali',
    'Moda modesta EAU',
  ],
  es: [
    'Abayas de lujo',
    'Patrimonio emiratí',
    'Tejido Khous',
    'Artesanía Al Talli',
    'Joyería piedras naturales',
    'Moda modesta EAU',
  ],
  ru: [
    'Роскошные абайи',
    'Эмиратское наследие',
    'Плетение Хаус',
    'Ремесло Аль-Талли',
    'Украшения из натурального камня',
    'Скромная мода ОАЭ',
  ],
  zh: [
    '奢华阿巴亚',
    '阿联酋传承',
    '赫乌斯编织',
    '阿勒塔利工艺',
    '天然宝石珠宝',
    '阿联酋端庄时尚',
  ],
  de: [
    'Luxus-Abayas',
    'Emiratisches Erbe',
    'Khous-Weberei',
    'Al-Talli-Handwerk',
    'Naturschmuck',
    'Bescheidene Mode VAE',
  ],
  nl: [
    'Luxe abaya’s',
    'Emiratisch erfgoed',
    'Khous-weven',
    'Al Talli-vakmanschap',
    'Natuursteen sieraden',
    'Bescheiden mode VAE',
  ],
  pt: [
    'Abayas de luxo',
    'Património emiradense',
    'Tecelagem Khous',
    'Ofício Al Talli',
    'Joalharia em pedra natural',
    'Moda modesta EAU',
  ],
}

const FOUNDING_PLACE_NAME: Record<AppLocale, string> = {
  en: 'Abu Dhabi, United Arab Emirates',
  ar: 'أبوظبي، الإمارات العربية المتحدة',
  fr: 'Abu Dhabi, Émirats arabes unis',
  it: 'Abu Dhabi, Emirati Arabi Uniti',
  es: 'Abu Dabi, Emiratos Árabes Unidos',
  ru: 'Абу-Даби, Объединённые Арабские Эмираты',
  zh: '阿联酋阿布扎比',
  de: 'Abu Dhabi, Vereinigte Arabische Emirate',
  nl: 'Abu Dhabi, Verenigde Arabische Emiraten',
  pt: 'Abu Dhabi, Emirados Árabes Unidos',
}

const AREA_SERVED_WORLDWIDE: Record<AppLocale, string> = {
  en: 'Worldwide',
  ar: 'عالمياً',
  fr: 'Dans le monde entier',
  it: 'In tutto il mondo',
  es: 'En todo el mundo',
  ru: 'По всему миру',
  zh: '全球',
  de: 'Weltweit',
  nl: 'Wereldwijd',
  pt: 'Em todo o mundo',
}

function offerCatalog(locale: AppLocale) {
  const titles = CATALOG_OFFER_TITLES[locale]
  const shopUrl = `${BASE}${localizedPath(locale, '/shop')}`
  // Each catalog line remains Product; Google requires Product to include at least one of
  // offers / review / aggregateRating — we attach the same published AED range as the main shop offer.
  const collectionOffer = {
    '@type': 'AggregateOffer',
    url: shopUrl,
    priceCurrency: 'AED',
    lowPrice: '800',
    highPrice: '5000',
    availability: 'https://schema.org/InStock',
  }
  return {
    '@type': 'OfferCatalog',
    name: CATALOG_NAME[locale],
    itemListElement: titles.map((name) => ({
      '@type': 'Offer',
      url: shopUrl,
      itemOffered: {
        '@type': 'Product',
        name,
        image: [`${BASE}/og-image.png`],
        brand: { '@type': 'Brand', name: 'Bint Saeed' },
        offers: collectionOffer,
      },
    })),
  }
}

export function buildBrandJsonLd(locale: AppLocale) {
  const lang = schemaInLanguageForLocale(locale)
  const desc = getHomeMetaDescription(locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    '@id': `${BASE}/#brand`,
    name: 'Bint Saeed',
    inLanguage: lang,
    description: desc,
    url: BASE,
    logo: `${BASE}/og-image.png`,
    foundingLocation: {
      '@type': 'Place',
      name: FOUNDING_PLACE_NAME[locale],
    },
    areaServed: AREA_SERVED_WORLDWIDE[locale],
    knowsAbout: BRAND_KNOWS_ABOUT[locale],
  }
}

export function buildWebsiteJsonLd(locale: AppLocale) {
  const lang = schemaInLanguageForLocale(locale)
  const desc = getHomeMetaDescription(locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE}/#website`,
    url: BASE,
    name: 'Bint Saeed',
    inLanguage: lang,
    description: desc,
    publisher: {
      '@id': `${BASE}/#organization`,
    },
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${BASE}${localizedPath(locale, '/shop')}?category={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    ],
  }
}

const LOCAL_BUSINESS_ALTERNATE: Record<AppLocale, string[]> = {
  en: [
    'Bint Saeed Luxury Abayas UAE',
    'Bint Saeed Designer Abayas Abu Dhabi',
    'Bint Saeed Abayas',
    'luxury abayas UAE',
    'designer abayas Abu Dhabi',
    'luxury abaya UAE',
    'abaya Abu Dhabi',
    'designer abaya',
    'black abaya Dubai',
    'modern abaya UAE',
    'dubai abaya',
    'abaya brand',
    'silk abaya',
  ],
  ar: [
    'بنت سعيد',
    'عبايات فاخرة الإمارات',
    'عبايات مصممة أبوظبي',
    'دار عبايات فاخرة',
    'عباية أبوظبي',
    'عباية دبي',
    'أزياء محتشمة فاخرة',
    'عباية حرير',
    'عبايات سوداء دبي',
    'علامة عبايات',
    'عبايات فاخرة أبوظبي',
  ],
  fr: [
    'Bint Saeed',
    'Abayas de luxe EAU',
    'Abayas designer Abou Dabi',
    'Maison abayas de luxe',
    'Abaya Abou Dabi',
    'Abaya Dubaï',
    'Mode modeste de luxe',
    'Abaya soie',
    'Abayas élégantes EAU',
  ],
  it: [
    'Bint Saeed',
    'Abaya di lusso EAU',
    'Abaya designer Abu Dhabi',
    'Casa di abaya di lusso',
    'Abaya Abu Dhabi',
    'Abaya Dubai',
    'Moda modesta di lusso',
    'Abaya seta',
  ],
  es: [
    'Bint Saeed',
    'Abayas de lujo EAU',
    'Abayas de diseño Abu Dabi',
    'Casa de abayas de lujo',
    'Abaya Abu Dabi',
    'Abaya Dubái',
    'Moda modesta de lujo',
    'Abaya seda',
  ],
  ru: [
    'Bint Saeed',
    'Роскошные абайи ОАЭ',
    'Дизайнерские абайи Абу-Даби',
    'Дом роскошных абай',
    'Абайя Абу-Даби',
    'Абайя Дубай',
    'Люкс скромная мода',
    'Шёлковая абайя',
  ],
  zh: [
    'Bint Saeed',
    '奢华阿巴亚阿联酋',
    '设计师阿巴亚阿布扎比',
    '奢华阿巴亚品牌',
    '阿布扎比阿巴亚',
    '迪拜阿巴亚',
    '高端端庄时尚',
    '丝绸阿巴亚',
  ],
  de: [
    'Bint Saeed',
    'Luxus-Abayas VAE',
    'Designer-Abayas Abu Dhabi',
    'Luxus-Abaya-Haus',
    'Abaya Abu Dhabi',
    'Abaya Dubai',
    'Bescheidene Luxusmode',
    'Seiden-Abaya',
  ],
  nl: [
    'Bint Saeed',
    'Luxe abaya’s VAE',
    'Designer-abaya’s Abu Dhabi',
    'Luxe abayahuis',
    'Abaya Abu Dhabi',
    'Abaya Dubai',
    'Luxe bescheiden mode',
    'Zijden abaya',
  ],
  pt: [
    'Bint Saeed',
    'Abayas de luxo EAU',
    'Abayas de designer Abu Dhabi',
    'Casa de abayas de luxo',
    'Abaya Abu Dhabi',
    'Abaya Dubai',
    'Moda modesta de luxo',
    'Abaya seda',
  ],
}

export function buildLocalBusinessJsonLd(
  locale: AppLocale,
  options?: { omitOfferCatalog?: boolean },
) {
  const kw = mergedMetaKeywordsForLocale(locale).join(', ')
  const lang = schemaInLanguageForLocale(locale)
  const desc = getHomeMetaDescription(locale)

  const base = {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    '@id': `${BASE}/#business`,
    name: 'Bint Saeed',
    inLanguage: lang,
    alternateName: LOCAL_BUSINESS_ALTERNATE[locale],
    image: `${BASE}/og-image.png`,
    url: BASE,
    email: 'info@bintsaeed.com',
    description: desc,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Abu Dhabi',
      addressLocality: 'Abu Dhabi',
      addressRegion: 'Abu Dhabi',
      postalCode: '00000',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 24.4539,
      longitude: 54.3773,
    },
    priceRange: '$$$$',
    currenciesAccepted: 'AED, USD, EUR, GBP, CHF, SAR, KWD, QAR, BHD, OMR',
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    areaServed: [...AREA_SERVED_MINIMAL],
    keywords: kw,
  }

  if (options?.omitOfferCatalog) {
    return base
  }

  return {
    ...base,
    hasOfferCatalog: offerCatalog(locale),
  }
}

const PRODUCT_SCHEMA_NAME: Record<AppLocale, string> = {
  en: 'Bint Saeed Luxury Abayas',
  ar: 'عبايات بِنت سعيد الفاخرة',
  fr: 'Abayas de luxe Bint Saeed',
  it: 'Abaya di lusso Bint Saeed',
  es: 'Abayas de lujo Bint Saeed',
  ru: 'Роскошные абайи Bint Saeed',
  zh: 'Bint Saeed 奢华阿巴亚',
  de: 'Bint Saeed Luxus-Abayas',
  nl: 'Bint Saeed luxe abaya’s',
  pt: 'Abayas de luxo Bint Saeed',
}

const PRODUCT_CATEGORY: Record<AppLocale, string> = {
  en: 'Luxury Abayas',
  ar: 'عبايات فاخرة',
  fr: 'Abayas de luxe',
  it: 'Abaya di lusso',
  es: 'Abayas de lujo',
  ru: 'Роскошные абайи',
  zh: '奢华阿巴亚',
  de: 'Luxus-Abayas',
  nl: 'Luxe abaya’s',
  pt: 'Abayas de luxo',
}

export function buildProductJsonLd(locale: AppLocale) {
  const kw = mergedMetaKeywordsForLocale(locale).join(', ')
  const shopUrl = `${BASE}${localizedPath(locale, '/shop')}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${BASE}/#product`,
    name: PRODUCT_SCHEMA_NAME[locale],
    inLanguage: schemaInLanguageForLocale(locale),
    description: PRODUCT_DESCRIPTION[locale],
    image: [`${BASE}/og-image.png`],
    url: shopUrl,
    brand: {
      '@type': 'Brand',
      name: 'Bint Saeed',
    },
    category: PRODUCT_CATEGORY[locale],
    keywords: kw,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'AED',
      lowPrice: '800',
      highPrice: '5000',
      offerCount: 50,
      availability: 'https://schema.org/InStock',
    },
  }
}

/** `innerPath` = pathname without locale prefix (e.g. `/coming-soon`, `/shop`). */
export function buildWebPageJsonLd(locale: AppLocale, innerPath: string) {
  const clean = (innerPath.split('?')[0] || '/').replace(/\/+$/, '') || '/'
  const pathForUrl = clean === '' ? '/' : clean
  const url = absoluteUrl(locale, pathForUrl)
  const pageMeta = getResolvedRoutePageMeta(locale, pathForUrl === '' ? '/' : pathForUrl)
  const kw = mergedMetaKeywordsForLocale(locale).join(', ')
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#seo`,
    url,
    inLanguage: schemaInLanguageForLocale(locale),
    name: pageMeta.title,
    description: pageMeta.description,
    mainEntity: {
      '@id': `${BASE}/#organization`,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${BASE}/og-image.png`,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.font-rozha', 'h1', 'h2'],
    },
    keywords: kw,
  }
}

export function buildBreadcrumbJsonLd(locale: AppLocale) {
  const homeUrl = absoluteUrl(locale, '/home')
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: schemaInLanguageForLocale(locale),
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Bint Saeed',
        item: homeUrl,
      },
    ],
  }
}

export function buildItemListJsonLd(locale: AppLocale) {
  const shopUrl = absoluteUrl(locale, '/shop')
  const entries = ITEM_LIST_ENTRIES[locale]
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${shopUrl}#collection`,
    inLanguage: schemaInLanguageForLocale(locale),
    name: ITEM_LIST_NAME[locale],
    description: ITEM_LIST_DESC[locale],
    url: shopUrl,
    numberOfItems: 50,
    itemListElement: entries.map((e) => ({
      '@type': 'ListItem',
      position: e.pos,
      name: e.name,
      url: shopUrl,
    })),
  }
}
