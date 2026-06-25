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
