import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'
import { getKnightsbridgeDressFaq } from '@/lib/products/knightsbridgeDressFaqI18n'

export const KNIGHTSBRIDGE_DRESS_SLUG = 'knightsbridge-dress'

export const KNIGHTSBRIDGE_DRESS_MATERIAL = 'Outer: 60% Cotton, 40% Polyester'

const MADE_IN = 'Abu Dhabi, United Arab Emirates'

const FACTS_EN: ProductSchemaFacts = {
  productType: 'Contemporary designer cotton-blend maxi dress inspired by Emirati heritage.',
  productCategory:
    'Maxi Dress, Halter Dress, Designer Dress, Luxury Dress, Premium Dress, Elegant Dress, Day Dress, Evening Dress, Summer Dress, Travel Dress, Cotton Blend Dress, Princess Silhouette Dress, Resort Wear, Contemporary Womenswear, Luxury Modest Fashion, Premium Modest Fashion',
  neckline:
    'Halter neckline with Bint Saeed signature woven detailing inspired by Al Khous, the traditional Emirati art of weaving date palm fronds.',
  fit: 'Fitted through the bodice with a full box-pleated skirt.',
  maximumGarmentLength: '143 cm / 56.3 inches',
  modelHeight: '160 cm / 63 inches',
  modelWears: 'XS',
  closure: 'Concealed back zip closure with crossover neck fastening.',
  styling:
    'Designed to be worn on its own or paired seamlessly with the Knightsbridge Abaya for a coordinated Bint Saeed look.',
  stylingDetail:
    'Maxi dress with flowing silhouette, soft box pleats, signature Khous-inspired woven halter neckline, concealed back zip closure, crossover neck fastening, and hidden side seam pockets.',
  pockets: 'Hidden side seam pockets.',
  trim: 'Signature Khous-inspired woven detailing at the halter neckline.',
  care: 'Professional dry clean only.',
  material: KNIGHTSBRIDGE_DRESS_MATERIAL,
  suitableFor:
    'Summer holidays, elegant lunches, afternoon tea, resort destinations, travel, city weekends, gallery visits, everyday dressing, evening gatherings, luxury vacations, premium vacations, destination dressing, pairing with the Knightsbridge Abaya, and international wardrobes.',
  madeIn: MADE_IN,
}

type LocalePack = { facts: ProductSchemaFacts; faq: ProductFaqItem[] }

function localizedFacts(locale: AppLocale): ProductSchemaFacts {
  if (locale === 'en') return FACTS_EN
  const typeLabels: Partial<Record<AppLocale, Partial<ProductSchemaFacts>>> = {
    ar: {
      productType: 'فستان ماكسي أنثوي',
      neckline: 'ياقة halter مميزة بتفاصيل منسوجة مستوحاة من الخوص',
      fit: 'صدر محدد مع طيات صندوقية ناعمة المنحى تنسدل في سيلويت ماكسي أنيق.',
      pockets: 'جيوب جانبية مخفية مدمجة في درزات الجوانب',
      trim: 'تفاصيل منسوجة مستوحاة من الخوص عند ياقة halter',
      material: 'الخارجي: 60% قطن، 40% بوليستر',
      care: 'تنظيف جاف احترافي فقط.',
    },
    fr: {
      productType: 'Robe maxi feminine',
      material: 'Exterieur : 60 % coton, 40 % polyester',
      care: 'Nettoyage à sec professionnel uniquement.',
    },
    de: {
      productType: 'Feminines Maxikleid',
      material: 'Aussenmaterial: 60 % Baumwolle, 40 % Polyester',
      care: 'Nur professionelle chemische Reinigung.',
    },
    it: { productType: 'Abito maxi femminile', material: 'Esterno: 60% cotone, 40% poliestere', care: 'Solo lavaggio a secco professionale.' },
    es: { productType: 'Vestido maxi femenino', material: 'Exterior: 60% algodon, 40% poliester', care: 'Solo limpieza en seco profesional.' },
    ru: { productType: 'Женское платье макси', material: 'Верх: 60% хлопок, 40% полиэстер', care: 'Только профессиональная химчистка.' },
    zh: { productType: '女性长款连衣裙', material: '外层：60% 棉，40% 聚酯纤维', care: '仅限专业干洗。' },
    nl: { productType: 'Feminine maxi-jurk', material: 'Buitenkant: 60% katoen, 40% polyester', care: 'Alleen professionele stomerij.' },
    pt: { productType: 'Vestido maxi feminino', material: 'Exterior: 60% algodao, 40% poliester', care: 'Apenas limpeza a seco profissional.' },
    id: { productType: 'Gaun maxi feminin', material: 'Luar: 60% Katun, 40% Polyester', care: 'Hanya dry clean profesional.' },
    ms: { productType: 'Gaun maxi feminin', material: 'Luar: 60% Kapas, 40% Poliester', care: 'Pembersihan kering profesional sahaja.' },
  }
  return { ...FACTS_EN, ...typeLabels[locale] }
}

export const KNIGHTSBRIDGE_DRESS_SCHEMA_PACKS: Record<AppLocale, LocalePack> = {
  en: { facts: localizedFacts('en'), faq: getKnightsbridgeDressFaq('en') },
  ar: { facts: localizedFacts('ar'), faq: getKnightsbridgeDressFaq('ar') },
  fr: { facts: localizedFacts('fr'), faq: getKnightsbridgeDressFaq('fr') },
  it: { facts: localizedFacts('it'), faq: getKnightsbridgeDressFaq('it') },
  es: { facts: localizedFacts('es'), faq: getKnightsbridgeDressFaq('es') },
  ru: { facts: localizedFacts('ru'), faq: getKnightsbridgeDressFaq('ru') },
  zh: { facts: localizedFacts('zh'), faq: getKnightsbridgeDressFaq('zh') },
  de: { facts: localizedFacts('de'), faq: getKnightsbridgeDressFaq('de') },
  nl: { facts: localizedFacts('nl'), faq: getKnightsbridgeDressFaq('nl') },
  pt: { facts: localizedFacts('pt'), faq: getKnightsbridgeDressFaq('pt') },
  id: { facts: localizedFacts('id'), faq: getKnightsbridgeDressFaq('id') },
  ms: { facts: localizedFacts('ms'), faq: getKnightsbridgeDressFaq('ms') },
}

export function isKnightsbridgeDressSlug(slug: string): boolean {
  return slug.toLowerCase() === KNIGHTSBRIDGE_DRESS_SLUG
}

export function getLocalizedKnightsbridgeDressSchemaFacts(
  slug: string,
  locale: AppLocale = 'en',
): ProductSchemaFacts | null {
  if (!isKnightsbridgeDressSlug(slug)) return null
  return KNIGHTSBRIDGE_DRESS_SCHEMA_PACKS[locale].facts
}

export function getLocalizedKnightsbridgeDressFaq(
  slug: string,
  locale: AppLocale = 'en',
): ProductFaqItem[] {
  if (!isKnightsbridgeDressSlug(slug)) return []
  return KNIGHTSBRIDGE_DRESS_SCHEMA_PACKS[locale].faq
}

export function getKnightsbridgeDressPdpFaq(locale: AppLocale = 'en'): ProductFaqItem[] {
  return getKnightsbridgeDressFaq(locale)
}
