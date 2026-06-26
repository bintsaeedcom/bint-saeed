import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'
import { getSohoSetPdpFaq } from '@/lib/products/sohoSetFaqI18n'

export const SOHO_SET_SLUG = 'soho-set'

export const SOHO_SET_MATERIAL = '80% Polyester, 20% Viscose'

const MADE_IN = 'Abu Dhabi, United Arab Emirates'

const FACTS_EN: ProductSchemaFacts = {
  productType:
    'Oversized crepe shirt and wide-leg palazzo trouser set — luxury travelwear with signature Knotted Line buttons and Al Talli side-seam trim, designed in Abu Dhabi for women whose wardrobes move between cities, occasions, and continents.',
  productCategory:
    'Set, Two-Piece Set, Coordinate Set, Shirt and Trouser Set, Oversized Shirt Set, Palazzo Trouser Set, Al Talli Set, Heritage Set, Knotted Line Set, Designer Set, Luxury Set, Travel Set, Luxury Travelwear, Day-to-Evening Set, Modest Fashion, Premium Modest Fashion, Contemporary Womenswear, Emirati Designer Set, UNESCO Heritage Craft Set',
  fit: 'Relaxed oversized shirt fit with full-length wide-leg palazzo trousers; shirt designed to be worn loose, tucked into the waistband or tied at the waist.',
  closure: 'Front button closure on shirt; elasticated waistband with adjustable drawcord on trousers.',
  pockets:
    'Two chest patch pockets on shirt; two hidden side seam pockets on palazzo trousers.',
  trim:
    'Bint Saeed signature gold-tone Knotted Line buttons; signature Al Talli woven trim along both outer side seams of the palazzo trousers — UNESCO-recognised Intangible Cultural Heritage.',
  styling:
    'Designed as a coordinated set that transitions from morning coffee to travel, city days, lunches, dinners, and evening gatherings. Each piece can be worn separately — the oversized shirt with tailored trousers, denim or skirts; the palazzo trousers with knitwear, blouses or lightweight tops.',
  stylingDetail:
    'Oversized pointed-collar crepe shirt with short sleeves, button tab detailing, chest patch pockets, and Knotted Line buttons; wide-leg palazzo trousers with elasticated drawcord waist, hidden side pockets, and Al Talli heritage trim.',
  care: 'Professional dry clean only to preserve the premium crepe, Knotted Line buttons, and delicate Al Talli detailing.',
  material: SOHO_SET_MATERIAL,
  madeIn: MADE_IN,
  availableColours: 'Deep Black, Navy Blue',
  suitableFor:
    'Luxury travelwear, city dressing, airport-to-lunch transitions, business travel, weekend escapes, lunches, dinners, cultural events, journeys between Abu Dhabi, Dubai, Riyadh, Doha, London, Paris, Milan, New York, Toronto, Singapore, and destinations worldwide where versatile modest dressing and Emirati heritage craftsmanship matter.',
}

type LocalePack = { facts: ProductSchemaFacts; faq: ProductFaqItem[] }

function localizedFacts(locale: AppLocale): ProductSchemaFacts {
  if (locale === 'en') return FACTS_EN
  const patches: Partial<Record<AppLocale, Partial<ProductSchemaFacts>>> = {
    ar: {
      productType:
        'طقم قميص كريب واسع وبنطال بالازو واسع الساق — أزياء سفر فاخرة بأزرار Knotted Line وتفاصيل التلي على جانبي البنطال، صُمم في أبوظبي للنساء اللواتي تتحرك خزاناتهن بين المدن والمناسبات',
      material: '80% بوليستر، 20% فيسكوز',
      care: 'تنظيف جاف احترافي فقط للحفاظ على الكريب الفاخر وأزرار Knotted Line وتفاصيل التلي الرقيقة.',
      trim: 'أزرار Knotted Line الذهبية المميزة من Bint Saeed؛ تفاصيل التلي المنسوجة على جانبي البنطال الخارجيين — تراث ثقافي غير مادي معترف به من اليونسكو.',
    },
    fr: {
      productType:
        'Set chemise oversize en crêpe et pantalon palazzo — travelwear de luxe avec boutons Knotted Line et garniture Al Talli, conçu à Abou Dabi',
      material: '80 % polyester, 20 % viscose',
      care: 'Nettoyage à sec professionnel uniquement pour préserver le crêpe premium, les boutons Knotted Line et les détails Al Talli.',
    },
    de: {
      productType:
        'Oversize-Krepp-Hemd und Palazzo-Hosen-Set — Luxus-Reisemode mit Knotted-Line-Knöpfen und Al-Talli-Besatz aus Abu Dhabi',
      material: '80 % Polyester, 20 % Viskose',
      care: 'Ausschließlich professionelle chemische Reinigung.',
    },
    it: {
      productType:
        'Set camicia oversize in crepe e pantaloni palazzo — luxury travelwear con bottoni Knotted Line e finitura Al Talli da Abu Dhabi',
      material: '80% poliestere, 20% viscosa',
      care: 'Solo lavaggio a secco professionale.',
    },
    es: {
      productType:
        'Set de camisa oversize en crepe y pantalones palazzo — travelwear de lujo con botones Knotted Line y ribete Al Talli de Abu Dabi',
      material: '80% poliéster, 20% viscosa',
      care: 'Solo limpieza en seco profesional.',
    },
    ru: {
      productType:
        'Комплект: оверсайз рубашка из крепа и брюки-палazzo — люксовая travelwear с пуговицами Knotted Line и отделкой Al Talli из Абу-Даби',
      material: '80% полиэстер, 20% вискоза',
      care: 'Только профессиональная химчистка.',
    },
    zh: {
      productType: '宽松绉绸衬衫与阔腿长裤套装 — 奢华旅行装，配 Knotted Line 纽扣与 Al Talli 侧缝饰边，阿布扎比设计',
      material: '80% 聚酯纤维，20% 粘胶纤维',
      care: '仅限专业干洗。',
    },
    nl: {
      productType:
        'Oversize crêpe overhemd en palazzo-broek set — luxe travelwear met Knotted Line-knopen en Al Talli-besatz uit Abu Dhabi',
      material: '80% polyester, 20% viscose',
      care: 'Alleen professionele stomerij.',
    },
    pt: {
      productType:
        'Set de camisa oversize em crepe e calças palazzo — travelwear de luxo com botões Knotted Line e acabamento Al Talli de Abu Dhabi',
      material: '80% poliéster, 20% viscose',
      care: 'Apenas limpeza a seco profissional.',
    },
    id: {
      productType:
        'Set kemeja oversize krepe dan celana palazzo — luxury travelwear dengan kancing Knotted Line dan trim Al Talli dari Abu Dhabi',
      material: '80% Polyester, 20% Viscose',
      care: 'Dry clean profesional saja.',
    },
    ms: {
      productType:
        'Set kemeja oversize krepe dan seluar palazzo — luxury travelwear dengan butang Knotted Line dan hiasan Al Talli dari Abu Dhabi',
      material: '80% Polyester, 20% Viscose',
      care: 'Dry clean profesional sahaja.',
    },
  }
  return { ...FACTS_EN, ...patches[locale] }
}

export const SOHO_SET_SCHEMA_PACKS: Record<AppLocale, LocalePack> = {
  en: { facts: localizedFacts('en'), faq: getSohoSetPdpFaq('en') },
  ar: { facts: localizedFacts('ar'), faq: getSohoSetPdpFaq('ar') },
  fr: { facts: localizedFacts('fr'), faq: getSohoSetPdpFaq('fr') },
  it: { facts: localizedFacts('it'), faq: getSohoSetPdpFaq('it') },
  es: { facts: localizedFacts('es'), faq: getSohoSetPdpFaq('es') },
  ru: { facts: localizedFacts('ru'), faq: getSohoSetPdpFaq('ru') },
  zh: { facts: localizedFacts('zh'), faq: getSohoSetPdpFaq('zh') },
  de: { facts: localizedFacts('de'), faq: getSohoSetPdpFaq('de') },
  nl: { facts: localizedFacts('nl'), faq: getSohoSetPdpFaq('nl') },
  pt: { facts: localizedFacts('pt'), faq: getSohoSetPdpFaq('pt') },
  id: { facts: localizedFacts('id'), faq: getSohoSetPdpFaq('id') },
  ms: { facts: localizedFacts('ms'), faq: getSohoSetPdpFaq('ms') },
}

export function isSohoSetSchemaSlug(slug: string): boolean {
  return slug.toLowerCase() === SOHO_SET_SLUG
}

export function getLocalizedSohoSetSchemaFacts(
  slug: string,
  locale: AppLocale = 'en',
): ProductSchemaFacts | null {
  if (!isSohoSetSchemaSlug(slug)) return null
  return SOHO_SET_SCHEMA_PACKS[locale].facts
}

export function getLocalizedSohoSetSchemaFaq(
  slug: string,
  locale: AppLocale = 'en',
): ProductFaqItem[] {
  if (!isSohoSetSchemaSlug(slug)) return []
  return SOHO_SET_SCHEMA_PACKS[locale].faq
}
