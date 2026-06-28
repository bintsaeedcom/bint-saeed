import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'
import { getCoventGardenLongDressFaq } from '@/lib/products/coventGardenLongDressFaqI18n'

export const COVENT_GARDEN_LONG_DRESS_SLUG = 'covent-garden-long-dress'

export const COVENT_GARDEN_LONG_DRESS_MATERIAL =
  'Outer: 80% Polyester, 20% Viscose; Lining: 70% Polyester, 30% Viscose'

const MADE_IN = 'Abu Dhabi, United Arab Emirates'

const FACTS_EN: ProductSchemaFacts = {
  productType:
    'Contemporary tailored fitted maxi dress — an elegant long dress designed as a signature under-abaya dress and beautiful worn on its own.',
  productCategory:
    'Long Dress, Maxi Dress, Elegant Long Dress, Formal Dress, Classy Dress, Simple Dress, Fitted Dress, Tailored Dress, Designer Dress, Premium Dress, Contemporary Dress, Under-Abaya Dress, Sleeveless Dress, Modest Fashion, Premium Modest Fashion, Contemporary Womenswear, Work Dress, Day Dress, Evening Dress, Occasion Dress, Wedding Guest Dress, Gulf Wardrobe Dress, Dress Colour Variants',
  fit: 'Softly fitted maxi dress silhouette with graceful movement.',
  neckline: 'Clean round neckline.',
  dressLength: '138 cm / 54.5 inches',
  modelHeight: '155 cm / 61 inches',
  modelWears: 'XS',
  closure: 'Concealed back zip closure.',
  pockets: 'Two hidden side seam pockets.',
  lining: 'Fully lined with a soft crepe lining for exceptional comfort and a smooth feel.',
  styling:
    'Designed to be worn beautifully on its own or as one of Bint Saeed’s signature under-abaya dresses. Pairs beautifully with the Covent Garden Abaya, Kensington Abaya, and Marylebone Abaya.',
  stylingDetail:
    'Tailored fitted maxi dress with concealed back zip closure, hidden side seam pockets, and adjustable length upon request.',
  care: 'Gentle 30°C machine cycle. Professional dry cleaning recommended to preserve the tailored finish.',
  material: COVENT_GARDEN_LONG_DRESS_MATERIAL,
  madeIn: MADE_IN,
  availableColours: 'Burgundy, Deep Black, Navy Blue',
  suitableFor:
    'Work, business meetings, elegant lunches, afternoon tea, dinners, gallery openings, cultural events, weddings, special occasions, refined everyday dressing, under-abaya dressing, Gulf climate wardrobes, pairing with the Covent Garden Abaya, Kensington Abaya, and Marylebone Abaya, and thoughtfully curated international wardrobes.',
}

type LocalePack = { facts: ProductSchemaFacts; faq: ProductFaqItem[] }

function localizedFacts(locale: AppLocale): ProductSchemaFacts {
  if (locale === 'en') return FACTS_EN
  const typeLabels: Partial<Record<AppLocale, Partial<ProductSchemaFacts>>> = {
    ar: {
      productType: 'فستان ماكسي مفصّل معاصر — فستان طويل أنيق كفستان مميز تحت العباية',
      material: 'الخارجي: 80% بوليستر، 20% فيسكوز؛ البطانة: 70% بوليستر، 30% فيسكوز',
      care: 'دورة آلة لطيفة عند 30°م. يُنصح بالتنظيف الجاف الاحترافي للحفاظ على التفصيل.',
    },
    fr: {
      productType: 'Robe maxi ajustée contemporaine — robe longue élégante sous abaya signature',
      material: 'Extérieur : 80 % polyester, 20 % viscose ; Doublure : 70 % polyester, 30 % viscose',
      care: 'Cycle machine délicat 30 °C. Nettoyage à sec professionnel recommandé.',
    },
    de: {
      productType: 'Zeitgenössisches tailliertes Maxikleid — elegantes langes Under-Abaya-Kleid',
      material: 'Außenmaterial: 80 % Polyester, 20 % Viskose; Futter: 70 % Polyester, 30 % Viskose',
      care: 'Schonwaschgang 30 °C. Professionelle chemische Reinigung empfohlen.',
    },
    it: {
      productType: 'Abito maxi fitted contemporaneo — elegante abito lungo sotto abaya signature',
      material: 'Esterno: 80% poliestere, 20% viscosa; Fodera: 70% poliestere, 30% viscosa',
      care: 'Ciclo delicato 30 °C. Lavaggio a secco professionale consigliato.',
    },
    es: {
      productType: 'Vestido maxi entallado contemporáneo — elegante vestido largo bajo abaya signature',
      material: 'Exterior: 80% poliéster, 20% viscosa; Forro: 70% poliéster, 30% viscosa',
      care: 'Ciclo suave 30 °C. Limpieza en seco profesional recomendada.',
    },
    ru: {
      productType: 'Современное приталенное макси-платье — элегантное длинное платье под абайю',
      material: 'Верх: 80% полиэстер, 20% вискоза; Подкладка: 70% полиэстер, 30% вискоза',
      care: 'Деликатная стирка при 30 °C. Рекомендуется профессиональная химчистка.',
    },
    zh: {
      productType: '当代修身长款连衣裙 — 优雅内穿长袍signature长裙',
      material: '外层：80% 聚酯纤维，20% 粘胶纤维；里料：70% 聚酯纤维，30% 粘胶纤维',
      care: '温和 30°C 机洗。建议专业干洗以保持剪裁。',
    },
    nl: {
      productType: 'Eigentijds getailleerd maxi-jurk — elegante lange under-abaya jurk',
      material: 'Buitenkant: 80% polyester, 20% viscose; Voering: 70% polyester, 30% viscose',
      care: 'Zachte wascyclus 30 °C. Professionele stomerij aanbevolen.',
    },
    pt: {
      productType: 'Vestido maxi fitted contemporâneo — elegante vestido comprido sob abaya signature',
      material: 'Exterior: 80% poliéster, 20% viscose; Forro: 70% poliéster, 30% viscose',
      care: 'Ciclo suave 30 °C. Limpeza a seco profissional recomendada.',
    },
    id: {
      productType: 'Gaun maxi tailored kontemporer — gaun panjang elegan under-abaya signature',
      material: 'Luar: 80% Polyester, 20% Viscose; Lining: 70% Polyester, 30% Viscose',
      care: 'Siklus mesin lembut 30°C. Dry clean profesional direkomendasikan.',
    },
    ms: {
      productType: 'Gaun maxi tailored kontemporari — gaun panjang elegan under-abaya signature',
      material: 'Luar: 80% Polyester, 20% Viscose; Pelapik: 70% Polyester, 30% Viscose',
      care: 'Kitaran mesin lembut 30°C. Dry clean profesional disyorkan.',
    },
  }
  return { ...FACTS_EN, ...typeLabels[locale] }
}

export const COVENT_GARDEN_LONG_DRESS_SCHEMA_PACKS: Record<AppLocale, LocalePack> = {
  en: { facts: localizedFacts('en'), faq: getCoventGardenLongDressFaq('en') },
  ar: { facts: localizedFacts('ar'), faq: getCoventGardenLongDressFaq('ar') },
  fr: { facts: localizedFacts('fr'), faq: getCoventGardenLongDressFaq('fr') },
  it: { facts: localizedFacts('it'), faq: getCoventGardenLongDressFaq('it') },
  es: { facts: localizedFacts('es'), faq: getCoventGardenLongDressFaq('es') },
  ru: { facts: localizedFacts('ru'), faq: getCoventGardenLongDressFaq('ru') },
  zh: { facts: localizedFacts('zh'), faq: getCoventGardenLongDressFaq('zh') },
  de: { facts: localizedFacts('de'), faq: getCoventGardenLongDressFaq('de') },
  nl: { facts: localizedFacts('nl'), faq: getCoventGardenLongDressFaq('nl') },
  pt: { facts: localizedFacts('pt'), faq: getCoventGardenLongDressFaq('pt') },
  id: { facts: localizedFacts('id'), faq: getCoventGardenLongDressFaq('id') },
  ms: { facts: localizedFacts('ms'), faq: getCoventGardenLongDressFaq('ms') },
}

export function isCoventGardenLongDressSlug(slug: string): boolean {
  return slug.toLowerCase() === COVENT_GARDEN_LONG_DRESS_SLUG
}

export function getLocalizedCoventGardenLongDressSchemaFacts(
  slug: string,
  locale: AppLocale = 'en',
): ProductSchemaFacts | null {
  if (!isCoventGardenLongDressSlug(slug)) return null
  return COVENT_GARDEN_LONG_DRESS_SCHEMA_PACKS[locale].facts
}

export function getLocalizedCoventGardenLongDressFaq(
  slug: string,
  locale: AppLocale = 'en',
): ProductFaqItem[] {
  if (!isCoventGardenLongDressSlug(slug)) return []
  return COVENT_GARDEN_LONG_DRESS_SCHEMA_PACKS[locale].faq
}
