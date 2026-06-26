import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'
import { patchAlTalliHeritageFaq } from '@/lib/products/alTalliHeritageFaqI18n'
import { appendAlTalliCareFaq } from '@/lib/products/alTalliCareFaqI18n'
import { getHampsteadDressPdpFaq } from '@/lib/products/hampsteadDressPdpI18n'
import { getSohoSetPdpFaq } from '@/lib/products/sohoSetFaqI18n'

const MADE_IN = 'Abu Dhabi, United Arab Emirates'

export const MARYLEBONE_SLUG = 'marylebone-abaya'
export const PARK_LANE_SLUG = 'park-lane-abaya'
export const HAMPSTEAD_SLUG = 'hampstead-dress'
export const SOHO_SLUG = 'soho-set'

const SECONDARY_SLUGS = new Set([
  MARYLEBONE_SLUG,
  PARK_LANE_SLUG,
  HAMPSTEAD_SLUG,
  SOHO_SLUG,
])

export function isSecondaryCatalogSchemaSlug(slug: string): boolean {
  return SECONDARY_SLUGS.has(slug.toLowerCase())
}

function facts(
  slug: string,
  locale: AppLocale,
  en: ProductSchemaFacts,
  overrides?: Partial<Record<AppLocale, Partial<ProductSchemaFacts>>>,
): ProductSchemaFacts | null {
  if (!SECONDARY_SLUGS.has(slug.toLowerCase())) return null
  const patch = locale === 'en' ? en : { ...en, ...(overrides?.[locale] ?? {}) }
  return { ...patch, madeIn: MADE_IN }
}

const MARYLEBONE_EN: ProductSchemaFacts = {
  productType: 'Open-front layering abaya designed for contemporary wardrobes — wide sleeves to layer over dresses and sets with refined Abu Dhabi tailoring.',
  productCategory:
    'Abaya, Layering Abaya, Open-Front Abaya, Designer Abaya, Luxury Abaya, Contemporary Outerwear, Modest Fashion, Premium Modest Fashion, Gulf Wardrobe Abaya, International Occasion Abaya',
  fit: 'Relaxed open-front silhouette with wide sleeves for elegant layering.',
  closure: 'Open front',
  styling:
    'Designed to layer over the Covent Garden Long Dress, Soho Set, or evening looks — a signature Bint Saeed outerwear piece for GCC and international wardrobes.',
  stylingDetail: 'Open-front abaya with wide sleeves, matte satin binding, and fluid wool-silk drape for city and occasion layering.',
  material: 'Wool-silk blend, matte satin binding',
  suitableFor:
    'Layering over dresses and sets, weddings, Eid, dinners, travel, city weekends, gallery visits, embassy receptions, Gulf wardrobes, and international occasionwear in London, Paris, Toronto, Riyadh, Doha, and destinations worldwide.',
}

const PARK_LANE_EN: ProductSchemaFacts = {
  productType: 'Refined everyday city abaya with a clean line and fluid drape — contemporary modest dressing made in Abu Dhabi.',
  productCategory:
    'Abaya, Everyday Abaya, City Abaya, Designer Abaya, Luxury Abaya, Contemporary Abaya, Modest Fashion, Premium Modest Fashion, Gulf Wardrobe Abaya',
  fit: 'Clean line with fluid drape designed for city movement.',
  stylingDetail: 'Everyday abaya with refined silhouette and graceful movement for work, travel, and daily elegance.',
  suitableFor:
    'Everyday dressing, city movement, work, travel, lunches, gatherings, Eid, Gulf wardrobes, and international modest fashion in Abu Dhabi, Dubai, London, Paris, and worldwide.',
}

const HAMPSTEAD_EN: ProductSchemaFacts = {
  productType:
    'Tailored fitted maxi dress with an elegant draped neckline — fully lined with signature Al Talli waist trim, made in Abu Dhabi for global wardrobes.',
  productCategory:
    'Dress, Designer Dress, Luxury Dress, Evening Dress, Maxi Dress, Layering Dress, Al Talli Dress, Heritage Dress, Emirati Dress, Modest Fashion, Premium Modest Fashion, Contemporary Womenswear',
  fit: 'Tailored fitted silhouette with softly flared hem.',
  trim: 'Bint Saeed signature Al Talli woven trim at the waist — UNESCO-recognised Intangible Cultural Heritage.',
  lining: 'Fully lined (70% Polyester, 30% Viscose)',
  styling:
    'Designed to be worn on its own or layered beneath an abaya — pairs with the Covent Garden Abaya, Marylebone Abaya, Kensington Abaya and Belgravia Abaya.',
  stylingDetail:
    'Tailored maxi dress with draped neckline, hidden side seam pockets, softly flared hem, and signature Al Talli waist trim — made in Abu Dhabi.',
  material: 'Outer: 80% Polyester, 20% Viscose; Lining: 70% Polyester, 30% Viscose',
  suitableFor:
    'Evening wear, city dressing, weddings, formal dinners, cultural events, layering beneath abayas, Gulf wardrobes, and international occasionwear in Abu Dhabi, Dubai, Riyadh, Doha, Kuwait City, Muscat, London, Paris, Milan, Toronto, and destinations worldwide.',
}

const SOHO_EN: ProductSchemaFacts = {
  productType:
    'Oversized shirt and wide-leg palazzo trouser set in fluid premium crepe with Al Talli side-seam trim and Knotted Line buttons — luxury travelwear with contemporary tailoring from Abu Dhabi.',
  productCategory:
    'Set, Two-Piece Set, Coordinate Set, Shirt and Trouser Set, Al Talli Set, Heritage Set, Designer Set, Luxury Set, Travel Set, Modest Fashion, Premium Modest Fashion, Contemporary Womenswear',
  trim: 'Bint Saeed signature Al Talli trim along trouser side seams — UNESCO-recognised Emirati heritage craftsmanship.',
  stylingDetail:
    'Oversized crepe shirt with wide-leg palazzo trousers, chest pockets, hidden side seam pockets, gold-tone Knotted Line buttons, and Al Talli heritage trim.',
  suitableFor:
    'Luxury travelwear, city dressing, lunches, dinners, cultural events, journeys between cities, Gulf wardrobes, and international modest fashion in Abu Dhabi, Dubai, London, Paris, Milan, Toronto, Singapore, and worldwide.',
}

const FAQ_BY_SLUG: Record<string, ProductSchemaFacts['faq']> = {
  [MARYLEBONE_SLUG]: [
    {
      question: 'Can I layer the Marylebone Abaya over dresses?',
      answer:
        'Yes. The Marylebone Abaya is designed as an open-front layering piece with wide sleeves, ideal over the Covent Garden Long Dress, Soho Set, or evening looks.',
    },
    {
      question: 'Is the Marylebone Abaya suitable for travel and occasionwear?',
      answer:
        'Yes. Its fluid wool-silk drape and open-front silhouette transition from city weekends to weddings, Eid gatherings, and international travel wardrobes.',
    },
  ],
  [PARK_LANE_SLUG]: [
    {
      question: 'Is the Park Lane Abaya suitable for everyday wear?',
      answer:
        'Yes. The Park Lane Abaya is designed for refined everyday city dressing with a clean line and fluid drape — made in Abu Dhabi for GCC and international wardrobes.',
    },
  ],
}

export function getLocalizedSecondaryCatalogSchemaFacts(
  slug: string,
  locale: AppLocale = 'en',
): ProductSchemaFacts | null {
  const s = slug.toLowerCase()
  let base: ProductSchemaFacts | null = null

  if (s === MARYLEBONE_SLUG) {
    base = facts(s, locale, MARYLEBONE_EN, {
      ar: { productType: 'عباية مفتوحة للطبقات بأكمام واسعة — للتنسيق فوق الفساتين والأطقم بتفصيل أبوظبي الراقي' },
      fr: { productType: 'Abaya ouverte à superposer aux manches amples — tailleur contemporain Abu Dhabi' },
    })
  } else if (s === PARK_LANE_SLUG) {
    base = facts(s, locale, PARK_LANE_EN, {
      ar: { productType: 'عباية يومية راقية بخط نظيف وانسيابية — أزياء محتشمة معاصرة من أبوظبي' },
      fr: { productType: 'Abaya urbaine raffinée à la ligne épurée — mode modeste contemporaine Abu Dhabi' },
    })
  } else if (s === HAMPSTEAD_SLUG) {
    base = facts(s, locale, HAMPSTEAD_EN, {
      ar: { productType: 'فستان مصمّم مبطّن من كريب فاخر بخط عنق منسدل — تفاصيل تلي على الخصر من أبوظبي للعالم' },
      fr: { productType: 'Robe doublée en crêpe premium au col drapé — garniture Al Talli à la taille, Abu Dhabi' },
    })
  } else if (s === SOHO_SLUG) {
    base = facts(s, locale, SOHO_EN, {
      ar: { productType: 'طقم منسّق بتفاصيل التلي التراثية — من النهار إلى المساء' },
      fr: { productType: 'Set coordonné avec détails Al Talli — du jour au soir' },
    })
  }

  if (!base) return null

  const faq =
    s === HAMPSTEAD_SLUG
      ? getHampsteadDressPdpFaq(locale)
      : s === SOHO_SLUG
        ? getSohoSetPdpFaq(locale)
        : FAQ_BY_SLUG[s]
  if (!faq) return base

  const localizedFaq =
    locale === 'en'
      ? faq
      : faq.map((item) => ({
          ...item,
          question: item.question,
          answer: item.answer,
        }))

  const withAlTalli =
    s === HAMPSTEAD_SLUG ? patchAlTalliHeritageFaq(localizedFaq, locale) : localizedFaq

  return { ...base, faq: appendAlTalliCareFaq(withAlTalli, s, locale) }
}

export function getLocalizedSecondaryCatalogSchemaFaq(
  slug: string,
  locale: AppLocale = 'en',
): ProductFaqItem[] {
  return getLocalizedSecondaryCatalogSchemaFacts(slug, locale)?.faq ?? []
}
