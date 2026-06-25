import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'
import { getAlTalliHeritageFaqItem } from '@/lib/products/alTalliHeritageFaqI18n'
import { patchAlTalliHeritageFaq } from '@/lib/products/alTalliHeritageFaqI18n'

const MADE_IN = 'Abu Dhabi, United Arab Emirates'

export const MARYLEBONE_SLUG = 'marylebone-abaya'
export const PARK_LANE_SLUG = 'park-lane-abaya'
export const HAMPSTEAD_SLUG = 'hampstead-dress'
export const SOHO_SLUG = 'soho-set'
export const HYDE_PARK_SLUG = 'hyde-park-set'

const SECONDARY_SLUGS = new Set([
  MARYLEBONE_SLUG,
  PARK_LANE_SLUG,
  HAMPSTEAD_SLUG,
  SOHO_SLUG,
  HYDE_PARK_SLUG,
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
    'Structured designer dress with traditional Al Talli trim — evening and city wear rooted in Emirati heritage, reimagined for contemporary global wardrobes.',
  productCategory:
    'Dress, Designer Dress, Luxury Dress, Evening Dress, Structured Dress, Al Talli Dress, Heritage Dress, Emirati Dress, Modest Fashion, Premium Modest Fashion, Contemporary Womenswear',
  fit: 'Structured shoulders with a refined silhouette.',
  trim: 'Traditional Al Talli trim recognised by UNESCO as Intangible Cultural Heritage.',
  lining: 'Silk lining',
  styling:
    'Pairs beautifully with the Covent Garden Abaya and Marylebone Abaya — created for women who value Emirati heritage craftsmanship worldwide.',
  stylingDetail:
    'Structured dress with Al Talli heritage trim, silk lining, and mother-of-pearl buttons — made in Abu Dhabi.',
  material: 'Virgin Wool blend, Silk lining, Mother-of-pearl buttons',
  suitableFor:
    'Evening wear, city dressing, weddings, formal dinners, cultural events, embassy receptions, Gulf wardrobes, and international occasionwear in London, Paris, Toronto, Brunei, and destinations worldwide.',
}

const SOHO_EN: ProductSchemaFacts = {
  productType:
    'Coordinate top and skirt set with traditional Al Talli trim — polished day-to-evening dressing celebrating Emirati heritage.',
  productCategory:
    'Set, Two-Piece Set, Coordinate Set, Al Talli Set, Heritage Set, Designer Set, Luxury Set, Modest Fashion, Premium Modest Fashion, Contemporary Womenswear',
  trim: 'Traditional Al Talli trim — UNESCO-recognised Emirati heritage craftsmanship.',
  stylingDetail: 'Coordinate top and skirt set with Al Talli detailing for day-to-evening versatility.',
  suitableFor:
    'Day-to-evening dressing, lunches, dinners, cultural events, weddings, Gulf wardrobes, and international modest fashion worldwide.',
}

const HYDE_PARK_EN: ProductSchemaFacts = {
  productType: 'Contemporary designer coordinate set — polished two-piece dressing from Bint Saeed Abu Dhabi.',
  productCategory:
    'Set, Two-Piece Set, Coordinate Set, Designer Set, Contemporary Womenswear, Modest Fashion, Premium Modest Fashion',
  stylingDetail: 'Coordinate set designed for versatile day and occasion dressing.',
  suitableFor:
    'Contemporary dressing, gatherings, travel, Gulf wardrobes, and international modest fashion.',
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
  [HAMPSTEAD_SLUG]: [
    getAlTalliHeritageFaqItem('en'),
    {
      question: 'What makes the Hampstead Dress distinctive?',
      answer:
        'The Hampstead Dress combines structured shoulders with traditional Al Talli trim, silk lining, and mother-of-pearl buttons — Emirati heritage craftsmanship designed in Abu Dhabi for women worldwide.',
    },
  ],
  [SOHO_SLUG]: [
    getAlTalliHeritageFaqItem('en'),
    {
      question: 'Is the Soho Set suitable for day-to-evening dressing?',
      answer:
        'Yes. The Soho Set is a coordinate top and skirt with Al Talli heritage detailing — polished for lunches, dinners, cultural events, and occasion dressing.',
    },
  ],
  [HYDE_PARK_SLUG]: [
    {
      question: 'What is the Hyde Park Set?',
      answer:
        'The Hyde Park Set is a contemporary coordinate set from Bint Saeed Abu Dhabi — designed for versatile modest dressing in GCC and international wardrobes.',
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
      ar: { productType: 'فستان مصمّم بكتفين مُهيكَلين وتفاصيل التلي التراثية — من أبوظبي للعالم' },
      fr: { productType: 'Robe structurée avec garniture Al Talli patrimoniale — Abu Dhabi' },
    })
  } else if (s === SOHO_SLUG) {
    base = facts(s, locale, SOHO_EN, {
      ar: { productType: 'طقم منسّق بتفاصيل التلي التراثية — من النهار إلى المساء' },
      fr: { productType: 'Set coordonné avec détails Al Talli — du jour au soir' },
    })
  } else if (s === HYDE_PARK_SLUG) {
    base = facts(s, locale, HYDE_PARK_EN)
  }

  if (!base) return null

  const faq = FAQ_BY_SLUG[s]
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
    s === HAMPSTEAD_SLUG || s === SOHO_SLUG
      ? patchAlTalliHeritageFaq(localizedFaq, locale)
      : localizedFaq

  return { ...base, faq: withAlTalli }
}

export function getLocalizedSecondaryCatalogSchemaFaq(
  slug: string,
  locale: AppLocale = 'en',
): ProductFaqItem[] {
  return getLocalizedSecondaryCatalogSchemaFacts(slug, locale)?.faq ?? []
}
