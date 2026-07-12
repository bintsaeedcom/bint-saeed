import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'
import { getCoventGardenAbayaFaq } from '@/lib/products/coventGardenAbayaFaqI18n'

export const COVENT_GARDEN_ABAYA_SLUG = 'covent-garden-abaya'

export const COVENT_GARDEN_ABAYA_MATERIAL =
  'Outer: 80% Polyester, 20% Viscose; Lining: 70% Polyester, 30% Viscose'

const MADE_IN = 'Abu Dhabi, United Arab Emirates'

const FACTS_EN: ProductSchemaFacts = {
  productType:
    'Contemporary A-line designer abaya — one of Bint Saeed’s defining creations, uniting contemporary tailoring, Al Talli heritage craftsmanship, and signature house design codes for women who appreciate timeless elegance and meaningful design.',
  productCategory:
    'Abaya, A-Line Abaya, Designer Abaya, Luxury Abaya, Premium Abaya, Contemporary Abaya, Formal Abaya, Wedding Abaya, Occasion Abaya, Open-Front Abaya, Al Talli Abaya, Heritage Abaya, Emirati Abaya, UNESCO Heritage Craft Abaya, Modest Fashion, Premium Modest Fashion, Designer Modest Fashion, Contemporary Womenswear, Gulf Wardrobe Abaya, International Occasion Abaya, Statement Abaya',
  fit: 'Elegant A-line silhouette with flowing drape and refined contemporary structure.',
  maximumGarmentLength: '138 cm / 54.5 inches',
  modelHeight: '155 cm / 61 inches',
  modelWears: 'XS',
  closure: 'Open-front design with optional concealed snap-button closure available upon request.',
  pockets: 'Hidden side seam pockets.',
  personalisation:
    'Complimentary personalisation available on Bint Saeed’s signature hidden inner label with a name, date, or meaningful message.',
  lining: 'Fully lined with a soft crepe lining for exceptional comfort and a refined finish.',
  trim:
    'Wide cuffs finished with Al Talli woven trim recognised by UNESCO as Intangible Cultural Heritage; shoulder epaulettes with signature gold-tone Knotted Line buttons; detachable statement sash with Al Talli trim and gold-tone Monogram pin.',
  styling:
    'Pairs beautifully with the Covent Garden Dress and Hampstead Dress. Created for women in the GCC, UAE, and international wardrobes who value Emirati heritage reimagined through contemporary design.',
  stylingDetail:
    'Contemporary A-line abaya with open front, detachable statement sash, Knotted Line shoulder epaulettes, Al Talli woven cuffs, hidden side seam pockets, soft crepe lining, and optional concealed snap-button closure.',
  care: 'Professional dry clean recommended. Gentle machine wash at 30°C if needed.',
  material: COVENT_GARDEN_ABAYA_MATERIAL,
  madeIn: MADE_IN,
  availableColours: 'Burgundy, Deep Black, Navy Blue',
  suitableFor:
    'Weddings, official occasions, elegant gatherings, formal dinners, cultural events, embassy receptions, celebrations, Eid gatherings, Gulf wardrobes, and international occasionwear in Abu Dhabi, London, Paris, Toronto, Brunei, and destinations worldwide where timeless elegance, exceptional craftsmanship, and Emirati heritage design matter.',
}

type LocalePack = { facts: ProductSchemaFacts; faq: ProductFaqItem[] }

function localizedFacts(locale: AppLocale): ProductSchemaFacts {
  if (locale === 'en') return FACTS_EN
  const typeLabels: Partial<Record<AppLocale, Partial<ProductSchemaFacts>>> = {
    ar: {
      productType:
        'عباية مصمّمة معاصرة بقصة A-line — من إبداعات Bint Saeed المُعرِّفة، تجمع التفصيل المعاصر وحرفية التلي التراثية ورموز الدار المميزة',
      material: 'الخارجي: 80% بوليستر، 20% فيسكوز؛ البطانة: 70% بوليستر، 30% فيسكوز',
      care: 'يُنصح بالتنظيف الجاف الاحترافي. غسل لطيف عند 30°م عند الحاجة.',
      trim: 'أساور بتفاصيل التلي المنسوج المعترف بها من اليونسكو؛ كتفان بأزرار Knotted Line الذهبية؛ وشاح قابل للفصل بتفاصيل التلي ودبوس الشعار الذهبي.',
    },
    fr: {
      productType:
        'Abaya de créateur contemporaine A-line — l’une des créations définissantes de Bint Saeed, alliant tailleur contemporain, artisanat patrimonial Al Talli et codes signature de la maison',
      material: 'Extérieur : 80 % polyester, 20 % viscose ; Doublure : 70 % polyester, 30 % viscose',
      care: 'Nettoyage à sec professionnel recommandé. Lavage délicat à 30 °C si nécessaire.',
    },
    de: {
      productType:
        'Zeitgenössische Designer-Abaya mit A-Linien-Silhouette — eine der prägenden Kreationen von Bint Saeed mit Al-Talli-Erbe und Signature-Designcodes',
      material: 'Außenmaterial: 80 % Polyester, 20 % Viskose; Futter: 70 % Polyester, 30 % Viskose',
      care: 'Professionelle chemische Reinigung empfohlen. Schonwaschgang 30 °C bei Bedarf.',
    },
    it: {
      productType:
        'Abaya designer contemporanea A-line — una delle creazioni definitorie di Bint Saeed che unisce sartoria contemporanea, artigianato Al Talli e codici signature',
      material: 'Esterno: 80% poliestere, 20% viscosa; Fodera: 70% poliestere, 30% viscosa',
      care: 'Lavaggio a secco professionale consigliato. Lavaggio delicato a 30 °C se necessario.',
    },
    es: {
      productType:
        'Abaya de diseñador contemporánea A-line — una de las creaciones definitorias de Bint Saeed que une sastrería contemporánea, artesanía Al Talli y códigos signature',
      material: 'Exterior: 80% poliéster, 20% viscosa; Forro: 70% poliéster, 30% viscosa',
      care: 'Limpieza en seco profesional recomendada. Lavado suave a 30 °C si es necesario.',
    },
    ru: {
      productType:
        'Современная дизайнерская абайя A-line — одно из определяющих творений Bint Saeed с наследием Al Talli и фирменными кодами дома',
      material: 'Верх: 80% полиэстер, 20% вискоза; Подкладка: 70% полиэстер, 30% вискоза',
      care: 'Рекомендуется профессиональная химчистка. Деликатная стирка при 30 °C при необходимости.',
    },
    zh: {
      productType: '当代A字设计师长袍 — Bint Saeed标志性创作之一，融合当代剪裁、Al Talli传承工艺与品牌设计代码',
      material: '外层：80% 聚酯纤维，20% 粘胶纤维；里料：70% 聚酯纤维，30% 粘胶纤维',
      care: '建议专业干洗。必要时可温和 30°C 机洗。',
    },
    nl: {
      productType:
        'Eigentijdse designer abaya met A-line silhouet — een van de bepalende creaties van Bint Saeed met Al Talli-erfenis en signature huis codes',
      material: 'Buitenkant: 80% polyester, 20% viscose; Voering: 70% polyester, 30% viscose',
      care: 'Professionele stomerij aanbevolen. Zachte was 30 °C indien nodig.',
    },
    pt: {
      productType:
        'Abaya de designer contemporânea A-line — uma das criações definidoras da Bint Saeed com património Al Talli e códigos signature',
      material: 'Exterior: 80% poliéster, 20% viscose; Forro: 70% poliéster, 30% viscose',
      care: 'Limpeza a seco profissional recomendada. Lavagem suave a 30 °C se necessário.',
    },
    id: {
      productType:
        'Abaya desainer kontemporer A-line — salah satu kreasi penentu Bint Saeed yang menyatukan tailoring kontemporer, kerajinan warisan Al Talli, dan kode signature rumah',
      material: 'Luar: 80% Polyester, 20% Viscose; Lining: 70% Polyester, 30% Viscose',
      care: 'Dry clean profesional direkomendasikan. Cuci lembut 30°C jika diperlukan.',
    },
    ms: {
      productType:
        'Abaya pereka kontemporari A-line — salah satu ciptaan penentu Bint Saeed yang menyatukan jahitan kontemporari, kraf warisan Al Talli, dan kod signature rumah',
      material: 'Luar: 80% Polyester, 20% Viscose; Pelapik: 70% Polyester, 30% Viscose',
      care: 'Dry clean profesional disyorkan. Basuhan lembut 30°C jika perlu.',
    },
  }
  return { ...FACTS_EN, ...typeLabels[locale] }
}

export const COVENT_GARDEN_ABAYA_SCHEMA_PACKS: Record<AppLocale, LocalePack> = {
  en: { facts: localizedFacts('en'), faq: getCoventGardenAbayaFaq('en') },
  ar: { facts: localizedFacts('ar'), faq: getCoventGardenAbayaFaq('ar') },
  fr: { facts: localizedFacts('fr'), faq: getCoventGardenAbayaFaq('fr') },
  it: { facts: localizedFacts('it'), faq: getCoventGardenAbayaFaq('it') },
  es: { facts: localizedFacts('es'), faq: getCoventGardenAbayaFaq('es') },
  ru: { facts: localizedFacts('ru'), faq: getCoventGardenAbayaFaq('ru') },
  zh: { facts: localizedFacts('zh'), faq: getCoventGardenAbayaFaq('zh') },
  de: { facts: localizedFacts('de'), faq: getCoventGardenAbayaFaq('de') },
  nl: { facts: localizedFacts('nl'), faq: getCoventGardenAbayaFaq('nl') },
  pt: { facts: localizedFacts('pt'), faq: getCoventGardenAbayaFaq('pt') },
  id: { facts: localizedFacts('id'), faq: getCoventGardenAbayaFaq('id') },
  ms: { facts: localizedFacts('ms'), faq: getCoventGardenAbayaFaq('ms') },
}

export function isCoventGardenAbayaSchemaSlug(slug: string): boolean {
  return slug.toLowerCase() === COVENT_GARDEN_ABAYA_SLUG
}

export function getLocalizedCoventGardenAbayaSchemaFacts(
  slug: string,
  locale: AppLocale = 'en',
): ProductSchemaFacts | null {
  if (!isCoventGardenAbayaSchemaSlug(slug)) return null
  return COVENT_GARDEN_ABAYA_SCHEMA_PACKS[locale].facts
}

export function getLocalizedCoventGardenAbayaSchemaFaq(
  slug: string,
  locale: AppLocale = 'en',
): ProductFaqItem[] {
  if (!isCoventGardenAbayaSchemaSlug(slug)) return []
  return COVENT_GARDEN_ABAYA_SCHEMA_PACKS[locale].faq
}
