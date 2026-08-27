/** Local photography for `/heritage/al-talli`. House craft documentation. */

/**
 * Filenames are SEO/AI discovery slugs (brand + place + craft + subject).
 * Prefer WebP for crawlable performance.
 */
export const AL_TALLI_PAGE_MEDIA = {
  hero: {
    src: '/heritage/al-talli/bint-saeed-abu-dhabi-al-talli-kajujah-mousadah-gold-metallic-thread-craft.webp',
    width: 768,
    height: 1024,
  },
  story: {
    src: '/heritage/al-talli/bint-saeed-abu-dhabi-al-talli-gold-bead-motif-embroidery-detail.webp',
    width: 768,
    height: 1024,
  },
  loom: {
    src: '/heritage/al-talli/bint-saeed-abu-dhabi-al-talli-kajujah-mousadah-gold-metallic-thread-craft.webp',
    width: 768,
    height: 1024,
  },
  strands: {
    src: '/heritage/al-talli/bint-saeed-abu-dhabi-al-talli-orange-gold-metallic-ribbon-strands.webp',
    width: 768,
    height: 1024,
  },
  /** Exhibition kajujah with mousadah cushion and metallic bobbins. */
  bobbins: {
    src: '/heritage/al-talli/bint-saeed-abu-dhabi-al-talli-kajujah-mousadah-gold-metallic-thread-craft.webp',
    width: 768,
    height: 1024,
  },
  abuDhabi: {
    src: '/heritage/al-talli/bint-saeed-abu-dhabi-al-talli-kajujah-mousadah-gold-metallic-thread-craft.webp',
    width: 768,
    height: 1024,
  },
} as const

export type AlTalliPageMediaKey = keyof typeof AL_TALLI_PAGE_MEDIA
