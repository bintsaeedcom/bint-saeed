import type { AppLocale } from '@/lib/i18n/routing'

export type NecklaceEarringSeoPack = {
  carouselAlt: string
  pdpAlt: string
  keywords: string[]
  relatedAccessoryIds: string[]
}

const NECKLACE_BASE = [
  'Al Ain necklace Bint Saeed',
  'natural stone bead necklace',
  'hand-strung luxury necklace UAE',
  '18K gold-plated clasp necklace',
  'Abu Dhabi designer necklace',
  'pairs with abaya strand and earrings',
] as const

const EARRING_BASE = [
  'Bint Saeed designer earrings',
  'luxury earrings UAE',
  'Abu Dhabi handcrafted earrings',
  'pairs with Al Ain necklace and abaya strand',
  'modest fashion earrings',
] as const

function nkw(...extra: string[]): string[] {
  return [...NECKLACE_BASE, ...extra]
}

function ekw(...extra: string[]): string[] {
  return [...EARRING_BASE, ...extra]
}

export const NECKLACE_EARRING_PDP_BY_ID: Record<string, NecklaceEarringSeoPack> = {
  'al-ain-rosette-necklace-malachite': {
    carouselAlt:
      'Al Ain Malachite necklace — hand-strung natural malachite beads with signature clasp, pairs with malachite abaya strand and geometric stud earrings',
    pdpAlt:
      'Al Ain Malachite necklace with deep green natural malachite beads, 18K gold-plated signature clasp and extension chain — luxury stone bead necklace by Bint Saeed Abu Dhabi',
    keywords: nkw(
      'malachite necklace',
      'malachite bead necklace UAE',
      'green stone necklace',
      'malachite jewellery gift',
      'buy malachite necklace online',
      'malachite abaya jewellery set',
    ),
    relatedAccessoryIds: [
      'signature-strand-malachite',
      'earrings-geometric',
      'signature-strand-rose-quartz',
    ],
  },
  'al-ain-rosette-necklace-tiger-eye': {
    carouselAlt:
      'Al Ain Tiger Eye necklace — warm chatoyant tiger eye beads with signature closure, pairs with tiger eye abaya strand and gold hoop earrings',
    pdpAlt:
      'Al Ain Tiger Eye necklace with natural tiger eye stone beads and subtle chatoyancy, 18K gold-plated signature clasp — handcrafted bead necklace Abu Dhabi',
    keywords: nkw(
      'tiger eye necklace',
      'tiger eye bead necklace',
      'brown stone necklace UAE',
      'chatoyant gemstone necklace',
      'tiger eye jewellery online',
    ),
    relatedAccessoryIds: [
      'signature-strand-tiger-eye',
      'earrings-hoops',
      'al-ain-rosette-necklace-onyx',
    ],
  },
  'al-ain-rosette-necklace-onyx': {
    carouselAlt:
      'Al Ain Onyx necklace — polished black onyx beads with warm undertones and signature clasp, pairs with onyx abaya strand and stud earrings',
    pdpAlt:
      'Al Ain Onyx necklace with hand-strung natural black onyx beads, warm brown undertones and refined 18K gold-plated signature clasp — luxury onyx bead necklace UAE',
    keywords: nkw(
      'onyx necklace',
      'black onyx bead necklace',
      'onyx jewellery UAE',
      'evening stone necklace',
      'buy onyx necklace online',
    ),
    relatedAccessoryIds: [
      'signature-strand-onyx',
      'earrings-geometric',
      'al-ain-rosette-necklace-tiger-eye',
    ],
  },
  'al-ain-rosette-necklace-rose-quartz': {
    carouselAlt:
      'Al Ain Rose Quartz necklace — soft pink hand-knotted rose quartz beads, pairs with rose quartz abaya strand and pearl drop earrings',
    pdpAlt:
      'Al Ain Rose Quartz necklace with hand-knotted natural rose quartz beads, luminous romantic line and 18K gold-plated signature hardware — blush stone necklace Abu Dhabi',
    keywords: nkw(
      'rose quartz necklace',
      'pink quartz bead necklace',
      'romantic stone necklace UAE',
      'hand-knotted rose quartz jewellery',
      'rose quartz gift necklace',
    ),
    relatedAccessoryIds: [
      'signature-strand-rose-quartz',
      'earrings-pearl-drop',
      'al-ain-rosette-necklace-malachite',
    ],
  },
  'al-ain-rosette-necklace-sunstone': {
    carouselAlt:
      'Al Ain Rosette Sunstone necklace — warm peach-orange sunstone beads with signature clasp, pairs with sunstone and jade abaya strands and pearl drop earrings',
    pdpAlt:
      'Al Ain Rosette Sunstone necklace with luminous natural sunstone beads and 18K gold-plated signature clasp — handcrafted stone bead necklace by Bint Saeed Abu Dhabi',
    keywords: nkw(
      'sunstone necklace',
      'sunstone bead necklace UAE',
      'peach-orange stone necklace',
      'buy sunstone necklace online',
      'sunstone abaya jewellery set',
    ),
    relatedAccessoryIds: [
      'signature-strand-sunstone',
      'signature-strand-fuchsia-jade',
      'signature-strand-jade-hearts',
      'earrings-pearl-drop',
    ],
  },
  'al-ain-rosette-necklace-lapis-lazuli': {
    carouselAlt:
      'Al Ain Rosette Lapis Lazuli necklace — deep royal blue lapis beads with signature clasp, pairs with lapis and amethyst abaya strands',
    pdpAlt:
      'Al Ain Rosette Lapis Lazuli necklace with rich natural lapis lazuli beads and 18K gold-plated signature clasp — luxury blue stone necklace by Bint Saeed UAE',
    keywords: nkw(
      'lapis lazuli necklace',
      'lapis bead necklace UAE',
      'royal blue stone necklace',
      'buy lapis necklace online',
      'lapis abaya jewellery set',
    ),
    relatedAccessoryIds: [
      'signature-strand-lapis-lazuli',
      'signature-strand-amethyst-hearts',
      'signature-strand-blue-aventurine',
      'earrings-geometric',
    ],
  },
  'earrings-pearl-drop': {
    carouselAlt:
      'Pearl drop earrings with gold-plated hooks — classic freshwater pearl drops pair with rose quartz and jade abaya strands and Al Ain necklaces',
    pdpAlt:
      'Pearl drop earrings with 18K gold-plated hooks and freshwater pearls — elegant modest fashion earrings by Bint Saeed, pairs with Al Ain stone bead necklaces',
    keywords: ekw(
      'pearl drop earrings',
      'freshwater pearl earrings UAE',
      'gold hook pearl earrings',
      'classic pearl earrings modest fashion',
      'pearl earrings gift UAE',
    ),
    relatedAccessoryIds: [
      'al-ain-rosette-necklace-rose-quartz',
      'signature-strand-rose-quartz',
      'signature-strand-jade-hearts',
      'al-ain-rosette-necklace-sunstone',
    ],
  },
  'earrings-geometric': {
    carouselAlt:
      'Geometric stud earrings inspired by Islamic art — sterling silver studs pair with malachite, onyx and amethyst abaya strands and Al Ain necklaces',
    pdpAlt:
      'Geometric stud earrings in sterling silver inspired by Islamic art — modern designer stud earrings UAE, pairs with natural stone bead necklaces and abaya strands',
    keywords: ekw(
      'geometric stud earrings',
      'Islamic art earrings',
      'sterling silver stud earrings UAE',
      'modern modest earrings',
      'designer stud earrings Abu Dhabi',
    ),
    relatedAccessoryIds: [
      'al-ain-rosette-necklace-malachite',
      'signature-strand-malachite',
      'signature-strand-onyx',
      'signature-strand-amethyst-hearts',
    ],
  },
  'earrings-hoops': {
    carouselAlt:
      'Textured gold hoop earrings with hammered finish — medium hoops pair with tiger eye and lapis abaya strands and Al Ain stone necklaces',
    pdpAlt:
      'Textured gold hoop earrings, medium size with hammered finish and 18K gold-plated brass — luxury hoop earrings UAE for evening abaya and stone jewellery styling',
    keywords: ekw(
      'gold hoop earrings',
      'textured hoop earrings UAE',
      'hammered gold earrings',
      'evening hoop earrings modest fashion',
      'designer hoop earrings Abu Dhabi',
    ),
    relatedAccessoryIds: [
      'al-ain-rosette-necklace-tiger-eye',
      'signature-strand-tiger-eye',
      'signature-strand-lapis-lazuli',
      'al-ain-rosette-necklace-lapis-lazuli',
    ],
  },
}

export function getNecklaceEarringPdpPack(id: string): NecklaceEarringSeoPack | undefined {
  return NECKLACE_EARRING_PDP_BY_ID[id]
}

export function getNecklaceEarringCarouselAlt(id: string, _locale: AppLocale = 'en'): string | undefined {
  return getNecklaceEarringPdpPack(id)?.carouselAlt
}

export function getNecklaceEarringPdpAlt(id: string, _imageIndex: number, _locale: AppLocale = 'en'): string | undefined {
  return getNecklaceEarringPdpPack(id)?.pdpAlt
}
