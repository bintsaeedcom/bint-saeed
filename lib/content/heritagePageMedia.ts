/** Local photography for `/heritage` hub, House assets only (no stock). */

export const HERITAGE_HUB_HERO = {
  src: '/heritage/bint-saeed-abu-dhabi-heritage-al-talli-gold-trim-abaya-fabric.webp',
  width: 819,
  height: 1024,
} as const

/** Al Khous chapter photography, House assets. */
export const HERITAGE_KHOUS_IMAGES = {
  hero: '/heritage/khous/bint-saeed-abu-dhabi-al-khous-palm-fans-sadu-textile-emirati-heritage.webp',
  detail: '/heritage/khous/bint-saeed-abu-dhabi-al-khous-palm-frond-weaving-in-progress-emirati-craft.webp',
  width: 768,
  height: 1024,
} as const

/** Sadu chapter photography, House assets. */
export const HERITAGE_SADU_IMAGES = {
  hero: '/heritage/sadu/bint-saeed-abu-dhabi-al-sadu-weaving-green-triangles-emirati-bedouin-heritage.webp',
  detail: '/heritage/sadu/bint-saeed-abu-dhabi-al-sadu-woven-band-fringe-emirati-heritage-craft.webp',
  width: 768,
  height: 1024,
} as const

/** Battoulah (Gulf gold burqa mask), heritage display photography. */
export const HERITAGE_BATTOULAH_IMAGE = {
  src: '/heritage/battoulah/bint-saeed-abu-dhabi-emirati-battoulah-gold-burqa-mask-heritage-display.webp',
  width: 768,
  height: 1024,
} as const

/** Craft chapter cards. */
export const HERITAGE_CRAFT_IMAGES: Record<string, string> = {
  'al-talli':
    '/heritage/al-talli/bint-saeed-abu-dhabi-al-talli-kajujah-mousadah-gold-metallic-thread-craft.webp',
  khous: HERITAGE_KHOUS_IMAGES.hero,
  sadu: HERITAGE_SADU_IMAGES.hero,
}

export const HERITAGE_PHILOSOPHY_IMAGES = {
  primary:
    '/heritage/al-talli/bint-saeed-abu-dhabi-al-talli-gold-bead-motif-embroidery-detail.webp',
  secondary:
    '/heritage/al-talli/bint-saeed-abu-dhabi-al-talli-orange-gold-metallic-ribbon-strands.webp',
} as const
