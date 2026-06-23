import type { AppLocale } from '@/lib/i18n/routing'
import { withBrandAlt } from '@/lib/products/imageAlt'
import { THE_CODES_SECTIONS_ID } from '@/lib/the-codes/codesPageContentId'

export const CODES_PAGE_DIR = 'The Codes Page'

export function codesPageImagePath(fileName: string): string {
  return `/${encodeURIComponent(CODES_PAGE_DIR)}/${encodeURIComponent(fileName)}`
}

const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

export function absoluteCodesPageImageUrl(fileName: string): string {
  return `${SITE}${codesPageImagePath(fileName)}`
}

/** SEO WebP assets in `public/The Codes Page/`. */
export const CODES_IMAGE_FILES = {
  monogram: 'bint-saeed-abu-dhabi-monogram-luxury-house.webp',
  alTalli: 'bint-saeed-abu-dhabi-al-talli-emirati-heritage.webp',
  khous: 'bint-saeed-abu-dhabi-khous-emirati-heritage.webp',
  alAinRosette: 'bint-saeed-abu-dhabi-al-ain-rosette-emirati-heritage.webp',
  knottedLines: 'bint-saeed-abu-dhabi-knotted-lines-of-lineage.webp',
  naturalStoneBeads: 'bint-saeed-abu-dhabi-natural-stone-beads-emirati-heritage.webp',
} as const

export const CODES_HERO = {
  file: CODES_IMAGE_FILES.khous,
  alt: withBrandAlt('Khous palm-frond weaving texture — The Codes editorial hero'),
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
    title: 'Khous',
    paragraphs: [
      'Khous weaving is rooted in the use of palm fronds, shaped through structure and repetition, and recognised as part of the traditional crafts of the region. It reflects a way of making that is both functional and refined. Its logic is carried into the lines and construction of each piece.',
    ],
    imageFile: CODES_IMAGE_FILES.khous,
    imageAlt: withBrandAlt(
      'Khous palm-frond weaving Emirati heritage craft texture — Bint Saeed house code',
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
]

export function getTheCodesSections(locale: AppLocale): CodesSectionContent[] {
  if (locale === 'id') return THE_CODES_SECTIONS_ID
  return THE_CODES_SECTIONS
}
