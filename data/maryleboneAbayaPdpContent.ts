import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductPdpContent } from '@/data/productPdpContent'
import {
  buildMaryleboneAbayaPdpContent as buildMaryleboneAbayaPdpContentI18n,
  getMaryleboneAbayaPdpFaq,
} from '@/lib/products/maryleboneAbayaPdpI18n'

export const MARYLEBONE_ABAYA_INTRO_EN = [
  'The abaya with natural stone jewellery for your wardrobe.',
  'For centuries, jewellery has been worn by women. At Bint Saeed, we imagined something different.',
  'What if your wardrobe could wear jewellery too?',
  'Available in Deep Black and Navy Blue, every Marylebone Abaya is accompanied by two removable Onyx Strands, one for each cuff, handcrafted from genuine natural Onyx gemstones. Between every stone sits a faceted gold-plated hematite bead that catches the light with every movement, while each strand is finished with Bint Saeed’s signature gold-tone Knotted Line details.',
  'Designed with the same graceful A-line silhouette and refined tailoring as the Park Lane Abaya, the Marylebone Abaya transforms through a simple exchange of its strands. While every abaya arrives with its signature Onyx Strands, you can later expand your collection with additional Bint Saeed Strands crafted from other natural gemstones, allowing your abaya to evolve effortlessly alongside your shoes, handbag, jewellery or the occasion itself. It becomes a wardrobe that feels more personal, more expressive and uniquely your own, bringing the richness of natural gemstones into every look without ever replacing the elegance of the abaya.',
  'Each strand is crafted from genuine natural gemstones, making every pair beautifully unique. As the Bint Saeed collection grows, your strands can also be worn across selected garments designed with the house’s signature attachment loops, allowing one collection of natural stone strands to accompany multiple pieces throughout your wardrobe.',
  'Like every Bint Saeed abaya, the Marylebone Abaya can be personalised with a hidden inner label featuring a name, a meaningful date or a personal message, creating a piece that becomes even more special over time.',
  'The Marylebone Abaya belongs as naturally in London’s business districts and Parisian cafés as it does in Abu Dhabi, Riyadh and Doha. It can be worn as a refined contemporary outer layer or embraced as a timeless abaya, adapting beautifully to every setting.',
] as const

export { getMaryleboneAbayaPdpFaq }

export function buildMaryleboneAbayaPdpContent(
  color?: string,
  locale: AppLocale = 'en',
): ProductPdpContent {
  return buildMaryleboneAbayaPdpContentI18n(color, locale)
}
