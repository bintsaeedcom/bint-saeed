import type { AppLocale } from '@/lib/i18n/routing'

export type NecklaceEarringSeoPack = {
  carouselAlt: string
  pdpAlt: string
  lifestyleAlt?: string
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
      'Al Ain Malachite necklace with hand-strung natural malachite beads, 18K gold-plated signature clasp and extension chain on display — deep green luxury stone bead necklace by Bint Saeed Abu Dhabi, pairs with malachite abaya strand',
    lifestyleAlt:
      'Model wearing the Al Ain Malachite necklace — natural malachite beads with 18K gold-plated signature hardware styled on black, showing length and drape — handcrafted stone necklace Abu Dhabi',
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
      'al-ain-oasis-earrings-malachite',
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
      'al-ain-oasis-earrings-orange-jade',
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
      'al-ain-oasis-earrings-orange-jade',
      'al-ain-rosette-necklace-tiger-eye',
    ],
  },
  'al-ain-rosette-necklace-rose-quartz': {
    carouselAlt:
      'Al Ain Rose Quartz necklace — soft pink hand-knotted rose quartz beads, pairs with rose quartz abaya strand and pearl drop earrings',
    pdpAlt:
      'Al Ain Rose Quartz necklace with hand-knotted natural rose quartz beads, luminous blush line and 18K gold-plated signature clasp on display — romantic stone bead necklace by Bint Saeed Abu Dhabi',
    lifestyleAlt:
      'Model wearing the Al Ain Rose Quartz necklace — soft pink hand-knotted rose quartz beads with signature clasp styled on black, showing convertible length — pairs with rose quartz abaya strand',
    keywords: nkw(
      'rose quartz necklace',
      'pink quartz bead necklace',
      'romantic stone necklace UAE',
      'hand-knotted rose quartz jewellery',
      'rose quartz gift necklace',
    ),
    relatedAccessoryIds: [
      'signature-strand-rose-quartz',
      'al-ain-oasis-earrings-rose-quartz',
      'al-ain-rosette-necklace-malachite',
    ],
  },
  'al-ain-rosette-necklace-sunstone': {
    carouselAlt:
      'Al Ain Oasis Sunstone necklace — warm peach-orange sunstone beads with signature clasp, pairs with sunstone and jade abaya strands and pearl drop earrings',
    pdpAlt:
      'Al Ain Oasis Sunstone necklace with luminous natural sunstone beads and 18K gold-plated signature clasp — handcrafted stone bead necklace by Bint Saeed Abu Dhabi',
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
      'al-ain-oasis-earrings-rose-quartz',
    ],
  },
  'al-ain-rosette-necklace-lapis-lazuli': {
    carouselAlt:
      'Al Ain Oasis Lapis Lazuli necklace — deep royal blue lapis beads with signature clasp, pairs with lapis and amethyst abaya strands',
    pdpAlt:
      'Al Ain Oasis Lapis Lazuli necklace with rich natural lapis lazuli beads and 18K gold-plated signature clasp — luxury blue stone necklace by Bint Saeed UAE',
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
      'al-quaa-earrings-lapis-lazuli',
    ],
  },
  'al-ain-oasis-earrings-malachite': {
    carouselAlt:
      'Al Ain Oasis Earrings - Malachite with natural malachite and Carnelian Al Ain Rosette details — pair with malachite abaya strand and Al Ain Oasis Necklace - Malachite',
    pdpAlt:
      'Al Ain Oasis Earrings - Malachite, hand-assembled with natural malachite gemstones and signature Carnelian Al Ain Rosette motifs — luxury stone earrings by Bint Saeed Abu Dhabi',
    keywords: ekw(
      'malachite earrings',
      'Al Ain Oasis earrings UAE',
      'natural malachite earrings',
      'designer stone earrings Abu Dhabi',
      'pairs with malachite necklace',
    ),
    relatedAccessoryIds: [
      'al-ain-rosette-necklace-malachite',
      'signature-strand-malachite',
      'signature-strand-rose-quartz',
      'al-ain-oasis-earrings-rose-quartz',
    ],
  },
  'al-ain-oasis-earrings-rose-quartz': {
    carouselAlt:
      'Al Ain Oasis Earrings - Rose Quartz with soft blush natural rose quartz — pair with rose quartz abaya strand and Al Ain Oasis Necklace - Rose Quartz',
    pdpAlt:
      'Al Ain Oasis Earrings - Rose Quartz, hand-assembled with natural rose quartz and signature Carnelian Al Ain Rosette motifs — romantic stone earrings by Bint Saeed UAE',
    keywords: ekw(
      'rose quartz earrings',
      'Al Ain Oasis earrings UAE',
      'blush stone earrings',
      'natural rose quartz earrings gift',
      'pairs with rose quartz necklace',
    ),
    relatedAccessoryIds: [
      'al-ain-rosette-necklace-rose-quartz',
      'signature-strand-rose-quartz',
      'signature-strand-jade-hearts',
      'al-ain-rosette-necklace-sunstone',
    ],
  },
  'al-ain-oasis-earrings-orange-jade': {
    carouselAlt:
      'Al Ain Oasis Earrings - Orange Jade with warm orange jade and Carnelian Al Ain Rosette details — pair with sunstone and orange jade abaya strands',
    pdpAlt:
      'Al Ain Oasis Earrings - Orange Jade, hand-assembled with natural orange jade and signature Carnelian Al Ain Rosette motifs — warm stone earrings by Bint Saeed Abu Dhabi',
    keywords: ekw(
      'orange jade earrings',
      'Al Ain Oasis earrings UAE',
      'orange stone earrings',
      'natural stone stud earrings',
      'pairs with sunstone necklace',
    ),
    relatedAccessoryIds: [
      'al-ain-rosette-necklace-sunstone',
      'signature-strand-orange-jade',
      'signature-strand-sunstone',
      'signature-strand-fuchsia-jade',
    ],
  },
  'al-quaa-earrings-lapis-lazuli': {
    carouselAlt:
      'Al Quaa Earrings - Lapis Lazuli with deep royal blue natural lapis — pair with lapis and amethyst abaya strands and Al Ain Oasis Necklace - Lapis Lazuli',
    pdpAlt:
      'Al Quaa Earrings - Lapis Lazuli, hand-assembled with natural lapis lazuli and signature Carnelian Al Ain Rosette motifs — luxury blue stone earrings by Bint Saeed UAE',
    keywords: ekw(
      'lapis lazuli earrings',
      'Al Ain Oasis earrings UAE',
      'blue stone earrings',
      'natural lapis earrings gift',
      'pairs with lapis lazuli necklace',
    ),
    relatedAccessoryIds: [
      'al-ain-rosette-necklace-lapis-lazuli',
      'signature-strand-lapis-lazuli',
      'signature-strand-amethyst-hearts',
      'signature-strand-blue-aventurine',
    ],
  },
}

export function getNecklaceEarringPdpPack(id: string): NecklaceEarringSeoPack | undefined {
  return NECKLACE_EARRING_PDP_BY_ID[id]
}

export function getNecklaceEarringCarouselAlt(id: string, _locale: AppLocale = 'en'): string | undefined {
  return getNecklaceEarringPdpPack(id)?.carouselAlt
}

export function getNecklaceEarringPdpAlt(id: string, imageIndex: number, _locale: AppLocale = 'en'): string | undefined {
  const pack = getNecklaceEarringPdpPack(id)
  if (!pack) return undefined
  if (imageIndex > 0 && pack.lifestyleAlt) return pack.lifestyleAlt
  return pack.pdpAlt
}
