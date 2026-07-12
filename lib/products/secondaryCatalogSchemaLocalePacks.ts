import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'
import { patchAlTalliHeritageFaq } from '@/lib/products/alTalliHeritageFaqI18n'
import { appendAlTalliCareFaq } from '@/lib/products/alTalliCareFaqI18n'
import { getHampsteadDressPdpFaq } from '@/lib/products/hampsteadDressPdpI18n'
import { getSohoSetPdpFaq } from '@/lib/products/sohoSetFaqI18n'
import { getMaryleboneAbayaPdpFaq } from '@/lib/products/maryleboneAbayaPdpI18n'
import { getParkLaneAbayaPdpFaq } from '@/lib/products/parkLaneAbayaPdpI18n'
import {
  HAMPSTEAD_SCHEMA_I18N,
  MARYLEBONE_SCHEMA_I18N,
  PARK_LANE_SCHEMA_I18N,
  SOHO_SCHEMA_I18N,
} from '@/lib/products/secondaryCatalogSchemaFactsI18n'

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
  localePack: Partial<Record<AppLocale, Partial<ProductSchemaFacts>>>,
): ProductSchemaFacts | null {
  if (!SECONDARY_SLUGS.has(slug.toLowerCase())) return null
  // Always keep English base fields; overlay localized fields without removing EN keys.
  const patch = locale === 'en' ? en : { ...en, ...(localePack[locale] ?? {}) }
  return { ...patch, madeIn: MADE_IN }
}

const GCC_WORLD =
  'Abu Dhabi, Dubai, Sharjah, Riyadh, Jeddah, Doha, Kuwait City, Manama, Muscat, London, Paris, Milan, New York, Toronto, Singapore, Kuala Lumpur, Jakarta, Sydney, and destinations worldwide'

const MARYLEBONE_EN: ProductSchemaFacts = {
  productType:
    'Graceful A-line abaya with removable genuine natural Onyx Strands on each cuff, signature gold-tone Knotted Line strand details, and interchangeable Bint Saeed Strands — made in Abu Dhabi.',
  productCategory:
    'Abaya, A-Line Abaya, Designer Abaya, Luxury Abaya, Abaya Jewellery, Signature Strands Abaya, Natural Stone Abaya, Contemporary Abaya, Modest Fashion, Premium Modest Fashion, Gulf Wardrobe Abaya, International Occasion Abaya',
  fit: 'Graceful A-line abaya designed to be worn open or closed with soft crepe drape.',
  closure: 'Optional snap button closure',
  pockets: 'Hidden side seam pockets',
  stylingDetail:
    'Graceful A-line abaya with wide cuffs for interchangeable Bint Saeed Strands, two removable Onyx Strands with gold-plated hematite beads, and signature Knotted Line finishing.',
  material:
    'Abaya: 80% Polyester, 20% Viscose; Strands: genuine natural Onyx gemstones with gold-plated hematite spacer beads',
  suitableFor: `Fashion enthusiasts, fashion editors, curators, cultural heritage audiences, diplomats, embassy receptions, gallery openings, luxury travel, city dressing, weddings, formal dinners, and international modest fashion in ${GCC_WORLD}.`,
}

const PARK_LANE_EN: ProductSchemaFacts = {
  productType:
    'Contemporary designer abaya with a graceful A-line silhouette, integrated shoulder scarf, signature gold-tone Knotted Line shoulder buttons, and removable Bint Saeed signature gold-tone Monogram cufflinks — made in Abu Dhabi.',
  productCategory:
    'Abaya, A-Line Abaya, Designer Abaya, Luxury Abaya, Contemporary Abaya, City Abaya, Executive Abaya, Diplomatic Abaya, Modest Fashion, Premium Modest Fashion, Gulf Wardrobe Abaya, International Occasion Abaya',
  fit: 'Relaxed A-line silhouette designed to be worn open or closed with fluid drape.',
  neckline: 'Integrated shoulder scarf flowing from the left shoulder',
  closure: 'Optional snap button closure',
  pockets: 'Hidden side seam pockets',
  stylingDetail:
    'Graceful A-line abaya with integrated shoulder scarf, signature gold-tone Knotted Line shoulder buttons, wide cuffs with removable Bint Saeed signature gold-tone Monogram cufflinks, and hidden side seam pockets.',
  material: 'Outer: 75% Polyester, 25% Viscose',
  suitableFor: `Business meetings, embassy receptions, diplomatic events, official delegations, leadership meetings, cultural engagements, formal dinners, weddings, city movement, work, travel, everyday dressing, Gulf wardrobes, and international modest fashion in ${GCC_WORLD}.`,
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
  suitableFor: `Evening wear, city dressing, weddings, formal dinners, cultural events, layering beneath abayas, Gulf wardrobes, and international occasionwear in ${GCC_WORLD}.`,
}

const SOHO_EN: ProductSchemaFacts = {
  productType:
    'Oversized shirt and wide-leg palazzo trouser set in fluid premium crepe with Al Talli side-seam trim and Knotted Line buttons — luxury travelwear with contemporary tailoring from Abu Dhabi.',
  productCategory:
    'Set, Two-Piece Set, Coordinate Set, Shirt and Trouser Set, Al Talli Set, Heritage Set, Designer Set, Luxury Set, Travel Set, Modest Fashion, Premium Modest Fashion, Contemporary Womenswear',
  trim: 'Bint Saeed signature Al Talli trim along trouser side seams — UNESCO-recognised Emirati heritage craftsmanship.',
  stylingDetail:
    'Oversized crepe shirt with wide-leg palazzo trousers, chest pockets, hidden side seam pockets, gold-tone Knotted Line buttons, and Al Talli heritage trim.',
  suitableFor: `Luxury travelwear, city dressing, lunches, dinners, cultural events, journeys between cities, Gulf wardrobes, and international modest fashion in ${GCC_WORLD}.`,
}

export function getLocalizedSecondaryCatalogSchemaFacts(
  slug: string,
  locale: AppLocale = 'en',
): ProductSchemaFacts | null {
  const s = slug.toLowerCase()
  let base: ProductSchemaFacts | null = null

  if (s === MARYLEBONE_SLUG) {
    base = facts(s, locale, MARYLEBONE_EN, MARYLEBONE_SCHEMA_I18N)
  } else if (s === PARK_LANE_SLUG) {
    base = facts(s, locale, PARK_LANE_EN, PARK_LANE_SCHEMA_I18N)
  } else if (s === HAMPSTEAD_SLUG) {
    base = facts(s, locale, HAMPSTEAD_EN, HAMPSTEAD_SCHEMA_I18N)
  } else if (s === SOHO_SLUG) {
    base = facts(s, locale, SOHO_EN, SOHO_SCHEMA_I18N)
  }

  if (!base) return null

  const faq =
    s === MARYLEBONE_SLUG
      ? getMaryleboneAbayaPdpFaq(locale)
      : s === PARK_LANE_SLUG
        ? getParkLaneAbayaPdpFaq(locale)
        : s === HAMPSTEAD_SLUG
          ? getHampsteadDressPdpFaq(locale)
          : s === SOHO_SLUG
            ? getSohoSetPdpFaq(locale)
            : undefined
  if (!faq) return base

  const withAlTalli =
    s === HAMPSTEAD_SLUG ? patchAlTalliHeritageFaq(faq, locale) : faq

  return { ...base, faq: appendAlTalliCareFaq(withAlTalli, s, locale) }
}

export function getLocalizedSecondaryCatalogSchemaFaq(
  slug: string,
  locale: AppLocale = 'en',
): ProductFaqItem[] {
  return getLocalizedSecondaryCatalogSchemaFacts(slug, locale)?.faq ?? []
}
