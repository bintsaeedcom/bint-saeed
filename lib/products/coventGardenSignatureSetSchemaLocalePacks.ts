import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'
import { getCoventGardenSignatureSetFaq } from '@/lib/products/coventGardenSignatureSetFaqI18n'

export const COVENT_GARDEN_SIGNATURE_SET_SLUG = 'covent-garden-signature-set'

export const COVENT_GARDEN_SIGNATURE_SET_MATERIAL =
  'Outer: 80% Polyester, 20% Viscose; Lining: 70% Polyester, 30% Viscose'

const MADE_IN = 'Abu Dhabi, United Arab Emirates'

const FACTS_EN: ProductSchemaFacts = {
  productType:
    'Contemporary premium two-piece set comprising a fitted dress and matching short-sleeve tailored jacket inspired by Emirati heritage.',
  productCategory:
    'Contemporary Two-Piece Set, Designer Set, Premium Two-Piece Set, Dress and Jacket Set, Matching Set, Co-Ord Set, Tailored Set, Short-Sleeve Jacket, Fitted Dress, Contemporary Womenswear, Premium Womenswear, Formal Set, Workwear Set, Occasion Set, Modest Fashion',
  fit: 'Tailored short-sleeve jacket with a coordinating fitted dress.',
  jacket:
    'Round-neck tailored short-sleeve jacket with front closure, Bint Saeed signature gold-tone Knotted Line buttons, two front pockets, and Al Khous-inspired woven pocket flaps.',
  innerDress:
    'Coordinating fitted dress with round neckline, concealed back zip closure, hidden side seam pockets, and adjustable length upon request.',
  neckline: 'Round neckline on the dress and tailored jacket.',
  jacketLength: '69 cm / 27.2 inches',
  dressLength: '138 cm / 54.5 inches',
  modelHeight: '155 cm / 61 inches',
  modelWears: 'XS',
  closure:
    'Jacket: Front closure with Bint Saeed signature gold-tone Knotted Line buttons. Dress: Concealed back zip closure.',
  pockets:
    'Jacket: Two front pockets with Al Khous-inspired woven pocket flaps. Dress: Hidden side seam pockets.',
  lining: 'Jacket and dress fully lined with soft crepe lining for comfort and a smooth feel.',
  buttons: 'Bint Saeed signature gold-tone Knotted Line buttons.',
  trim:
    'Al Khous-inspired woven pocket flaps, reinterpreting a traditional Emirati artisanal craft through contemporary tailoring.',
  styling:
    'Designed to be worn together as a coordinated two-piece set or styled separately. The dress can be worn on its own, while the short-sleeve tailored jacket can be styled with trousers, denim, skirts, dresses, and other wardrobe pieces.',
  material: COVENT_GARDEN_SIGNATURE_SET_MATERIAL,
  care: 'Professional dry clean recommended. Gentle machine wash at 30°C if needed.',
  madeIn: MADE_IN,
  suitableFor:
    'Work, business meetings, formal occasions, elegant lunches, afternoon tea, dinners, gallery openings, cultural events, refined everyday dressing, contemporary professional wardrobes, and polished day-to-evening dressing.',
  availableColours: 'Burgundy, Deep Black, Navy Blue',
}

type LocalePack = { facts: ProductSchemaFacts; faq: ProductFaqItem[] }

function localizedFacts(locale: AppLocale): ProductSchemaFacts {
  if (locale === 'en') return FACTS_EN
  const typeLabels: Partial<Record<AppLocale, Partial<ProductSchemaFacts>>> = {
    ar: {
      productType: 'طقم ثنائي راقٍ معاصر من فستان مفصّل وجاكيت قصير الأكمام',
      material: 'الخارجي: 80% بوليستر، 20% فيسكوز؛ البطانة: 70% بوليستر، 30% فيسكوز',
      care: 'يُنصح بالتنظيف الجاف الاحترافي. غسيل آلي لطيف عند 30°م عند الحاجة.',
    },
    fr: {
      productType: 'Ensemble premium contemporain robe ajustée et veste courte assortie',
      material: 'Extérieur : 80 % polyester, 20 % viscose ; Doublure : 70 % polyester, 30 % viscose',
      care: 'Nettoyage à sec professionnel recommandé. Lavage en machine délicat à 30 °C si nécessaire.',
    },
    de: {
      productType: 'Zeitgenössisches Premium-Zweiteiler-Set aus Kleid und kurzärmliger Jacke',
      material:
        'Außenmaterial: 80 % Polyester, 20 % Viskose; Futter: 70 % Polyester, 30 % Viskose',
      care: 'Professionelle chemische Reinigung empfohlen. Bei Bedarf Schonwaschgang bei 30 °C.',
    },
    it: {
      productType: 'Set premium contemporaneo abito fitted e giacca corta abbinata',
      material: 'Esterno: 80% poliestere, 20% viscosa; Fodera: 70% poliestere, 30% viscosa',
      care: 'Lavaggio a secco professionale consigliato. Lavaggio delicato a 30 °C se necessario.',
    },
    es: {
      productType: 'Conjunto premium contemporáneo de vestido entallado y chaqueta corta a juego',
      material: 'Exterior: 80% poliéster, 20% viscosa; Forro: 70% poliéster, 30% viscosa',
      care: 'Limpieza en seco profesional recomendada. Lavado a máquina suave a 30 °C si es necesario.',
    },
    ru: {
      productType: 'Современный премиальный комплект: приталенное платье и укороченный жакет',
      material: 'Верх: 80% полиэстер, 20% вискоза; Подкладка: 70% полиэстер, 30% вискоза',
      care: 'Рекомендуется профессиональная химчистка. При необходимости деликатная стирка при 30 °C.',
    },
    zh: {
      productType: '当代高端两件套：修身连衣裙与配套短袖剪裁夹克',
      material: '外层：80% 聚酯纤维，20% 粘胶纤维；里衬：70% 聚酯纤维，30% 粘胶纤维',
      care: '建议专业干洗。如需机洗，请使用 30°C 轻柔模式。',
    },
    nl: {
      productType: 'Eigentijds premium set met fitted jurk en korte bijpassende jas',
      material: 'Buitenkant: 80% polyester, 20% viscose; Voering: 70% polyester, 30% viscose',
      care: 'Professionele stomerij aanbevolen. Indien nodig voorzichtig wassen op 30 °C.',
    },
    pt: {
      productType: 'Conjunto premium contemporâneo de vestido fitted e casaco curto a combinar',
      material: 'Exterior: 80% poliéster, 20% viscose; Forro: 70% poliéster, 30% viscose',
      care: 'Limpeza a seco profissional recomendada. Lavagem delicada a 30 °C se necessário.',
    },
    id: {
      productType: 'Set premium kontemporer gaun fitted dan jaket pendek serasi',
      material: 'Luar: 80% Polyester, 20% Viscose; Lapisan: 70% Polyester, 30% Viscose',
      care: 'Dry clean profesional disarankan. Cuci mesin lembut 30°C jika diperlukan.',
    },
    ms: {
      productType: 'Set premium kontemporari gaun fitted dan jaket pendek sepadan',
      material: 'Luar: 80% Poliester, 20% Viskos; Pelapik: 70% Poliester, 30% Viskos',
      care: 'Pembersihan kering profesional disyorkan. Basuh mesin lembut 30°C jika perlu.',
    },
  }
  return { ...FACTS_EN, ...typeLabels[locale] }
}

export const COVENT_GARDEN_SIGNATURE_SET_SCHEMA_PACKS: Record<AppLocale, LocalePack> = {
  en: { facts: localizedFacts('en'), faq: getCoventGardenSignatureSetFaq('en') },
  ar: { facts: localizedFacts('ar'), faq: getCoventGardenSignatureSetFaq('ar') },
  fr: { facts: localizedFacts('fr'), faq: getCoventGardenSignatureSetFaq('fr') },
  it: { facts: localizedFacts('it'), faq: getCoventGardenSignatureSetFaq('it') },
  es: { facts: localizedFacts('es'), faq: getCoventGardenSignatureSetFaq('es') },
  ru: { facts: localizedFacts('ru'), faq: getCoventGardenSignatureSetFaq('ru') },
  zh: { facts: localizedFacts('zh'), faq: getCoventGardenSignatureSetFaq('zh') },
  de: { facts: localizedFacts('de'), faq: getCoventGardenSignatureSetFaq('de') },
  nl: { facts: localizedFacts('nl'), faq: getCoventGardenSignatureSetFaq('nl') },
  pt: { facts: localizedFacts('pt'), faq: getCoventGardenSignatureSetFaq('pt') },
  id: { facts: localizedFacts('id'), faq: getCoventGardenSignatureSetFaq('id') },
  ms: { facts: localizedFacts('ms'), faq: getCoventGardenSignatureSetFaq('ms') },
}

export function isCoventGardenSignatureSetSlug(slug: string): boolean {
  return slug.toLowerCase() === COVENT_GARDEN_SIGNATURE_SET_SLUG
}

export function getLocalizedCoventGardenSignatureSetSchemaFacts(
  slug: string,
  locale: AppLocale = 'en',
): ProductSchemaFacts | null {
  if (!isCoventGardenSignatureSetSlug(slug)) return null
  return COVENT_GARDEN_SIGNATURE_SET_SCHEMA_PACKS[locale].facts
}

export function getLocalizedCoventGardenSignatureSetFaq(
  slug: string,
  locale: AppLocale = 'en',
): ProductFaqItem[] {
  if (!isCoventGardenSignatureSetSlug(slug)) return []
  return COVENT_GARDEN_SIGNATURE_SET_SCHEMA_PACKS[locale].faq
}
