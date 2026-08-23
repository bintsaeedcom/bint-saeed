/** Local photography for `/heritage/al-talli` — House of Artisans / craft documentation. */

/**
 * Filenames are SEO/AI discovery slugs (brand + place + craft + subject).
 * Prefer WebP for crawlable performance.
 */
export const AL_TALLI_PAGE_MEDIA = {
  hero: {
    src: '/heritage/al-talli/bint-saeed-abu-dhabi-al-talli-embroidery-abaya-detail-emirati-heritage.webp',
    width: 819,
    height: 1024,
  },
  story: {
    src: '/heritage/al-talli/bint-saeed-abu-dhabi-al-talli-metallic-thread-embroidery-middle-eastern-craft.webp',
    width: 768,
    height: 1024,
  },
  loom: {
    src: '/heritage/al-talli/bint-saeed-abu-dhabi-al-talli-kajujah-loom-emirati-heritage-craft.webp',
    width: 768,
    height: 1024,
  },
  strands: {
    src: '/heritage/al-talli/bint-saeed-abu-dhabi-al-talli-gold-metallic-strands-unesco-heritage.webp',
    width: 768,
    height: 1024,
  },
  bobbins: {
    src: '/heritage/al-talli/bint-saeed-abu-dhabi-al-talli-metallic-bobbins-traditional-embroidery.webp',
    width: 1024,
    height: 768,
  },
  abuDhabi: {
    src: '/heritage/al-talli/bint-saeed-abu-dhabi-al-talli-artisan-house-of-artisans-qasr-al-hosn.webp',
    width: 658,
    height: 1024,
  },
} as const

export type AlTalliPageMediaKey = keyof typeof AL_TALLI_PAGE_MEDIA
