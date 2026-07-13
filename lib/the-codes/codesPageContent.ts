import type { AppLocale } from '@/lib/i18n/routing'
import { withBrandAlt } from '@/lib/products/imageAlt'
import {
  absoluteCodesPageImageUrl,
  CODES_IMAGE_FILES,
  CODES_PAGE_DIR,
  codesPageImagePath,
} from '@/lib/the-codes/codesPageAssets'
import { CODES_HERO_AR, THE_CODES_SECTIONS_AR } from '@/lib/the-codes/codesPageContentAr'
import { THE_CODES_SECTIONS_ID } from '@/lib/the-codes/codesPageContentId'
import { THE_CODES_SECTIONS_MS } from '@/lib/the-codes/codesPageContentMs'

export { absoluteCodesPageImageUrl, CODES_IMAGE_FILES, CODES_PAGE_DIR, codesPageImagePath }

export const CODES_HERO = {
  file: CODES_IMAGE_FILES.khous,
  alt: withBrandAlt('Al Khous palm-frond weaving texture — The Codes editorial hero'),
}

export type CodesSectionContent = {
  id: string
  eyebrow: string
  title: string
  paragraphs: string[]
  imageFile: string
  imageAlt: string
}

export const THE_CODES_SECTIONS: CodesSectionContent[] = [
  {
    id: 'the-monogram',
    eyebrow: 'Mark of the house',
    title: 'The monogram',
    paragraphs: [
      'The Bint Saeed monogram is more than a mark, it is a structure of identity. Its interwoven form reflects continuity, where lines return into themselves rather than break. It appears with intention across pieces, sometimes subtle, sometimes present, always part of the whole.',
    ],
    imageFile: CODES_IMAGE_FILES.monogram,
    imageAlt: withBrandAlt(
      'Bint Saeed luxury house monogram — interwoven mark of identity and Abu Dhabi design code',
    ),
  },
  {
    id: 'al-talli',
    eyebrow: 'Heritage thread',
    title: 'Al Talli',
    paragraphs: [
      'Al Talli is a traditional Emirati craft, woven with fine metallic threads and recognised as part of the cultural heritage of the United Arab Emirates. It reflects precision, patience, and a deep-rooted tradition of adornment. Within Bint Saeed, it is translated into forms that move naturally across borders.',
    ],
    imageFile: CODES_IMAGE_FILES.alTalli,
    imageAlt: withBrandAlt(
      'Traditional Al Talli gold-thread Emirati heritage embroidery — Bint Saeed house code',
    ),
  },
  {
    id: 'khous',
    eyebrow: 'Weave & structure',
    title: 'Al Khous',
    paragraphs: [
      'Al Khous weaving is rooted in the use of palm fronds, shaped through structure and repetition, and recognised as part of the traditional crafts of the region. It reflects a way of making that is both functional and refined. Its logic is carried into the lines and construction of each piece.',
    ],
    imageFile: CODES_IMAGE_FILES.khous,
    imageAlt: withBrandAlt(
      'Al Khous palm-frond weaving Emirati heritage craft texture — Bint Saeed house code',
    ),
  },
  {
    id: 'al-ain-rosette',
    eyebrow: 'Motif',
    title: 'Al Ain Rosette',
    paragraphs: [
      'The Al Ain Rosette appears as a carved carnelian stone within the house. Its warm tone reflects the desert landscape of Al Ain in the United Arab Emirates, while its form recalls the rounded shapes of the desert hyacinth and the yellow bloom of Tribulus omanense. For now, it appears in jewellery and small objects as a distinct point of recognition.',
    ],
    imageFile: CODES_IMAGE_FILES.alAinRosette,
    imageAlt: withBrandAlt(
      'Al Ain Rosette carnelian stone motif — Emirati heritage house code from Abu Dhabi',
    ),
  },
  {
    id: 'knotted-lines-of-lineage',
    eyebrow: 'Line & continuity',
    title: 'Knotted Lines',
    paragraphs: [
      'Knotted lines appear within the house as a recurring element, formed as buttons and strands across garments. Each knot reflects connection across time, linking what is inherited with what is lived. Placed close to the wearer, they serve as a subtle reminder of a story that continues.',
    ],
    imageFile: CODES_IMAGE_FILES.knottedLines,
    imageAlt: withBrandAlt(
      'Knotted Lines of Lineage gold motif on fabric — continuity house code, Bint Saeed',
    ),
  },
  {
    id: 'the-strands',
    eyebrow: 'Stone & thread',
    title: 'The Strands',
    paragraphs: [
      'The Strands are composed of natural stones, set in sequence along the shoulder and across the garment. Within the house, they extend the knotted line into a continuous thread — measured in placement, deliberate in weight, and held close to the wearer. Neither ornament nor afterthought, they balance the silhouette while carrying connection between origin and presence as a defining house code.',
    ],
    imageFile: CODES_IMAGE_FILES.strands,
    imageAlt: withBrandAlt(
      'Natural stone abaya strands — wearable house code of thread and balance, Bint Saeed Abu Dhabi',
    ),
  },
]

export function getTheCodesHero(locale: AppLocale) {
  if (locale === 'ar') return CODES_HERO_AR
  return CODES_HERO
}

export function getTheCodesSections(locale: AppLocale): CodesSectionContent[] {
  if (locale === 'ar') return THE_CODES_SECTIONS_AR
  if (locale === 'id') return THE_CODES_SECTIONS_ID
  if (locale === 'ms') return THE_CODES_SECTIONS_MS
  return THE_CODES_SECTIONS
}
