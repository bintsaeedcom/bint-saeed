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
  'signature-malachite-necklace': {
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
      'abaya-charm-malachite-natural-stone',
      'earrings-geometric',
      'abaya-charm-rose-quartz-natural-stone',
    ],
  },
  'signature-tiger-eye-necklace': {
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
      'abaya-charm-tiger-eye-natural-stone',
      'earrings-hoops',
      'signature-onyx-necklace',
    ],
  },
  'signature-onyx-necklace': {
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
      'abaya-charm-onyx-natural-stone',
      'earrings-geometric',
      'signature-tiger-eye-necklace',
    ],
  },
  'signature-rose-quartz-necklace': {
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
      'abaya-charm-rose-quartz-natural-stone',
      'earrings-pearl-drop',
      'signature-malachite-necklace',
    ],
  },
  'necklace-layered-gold': {
    carouselAlt:
      'Al Ain layered gold necklace — multi-layer gold chain with delicate pendants, pairs with jade and orange stone abaya strands and pearl earrings',
    pdpAlt:
      'Al Ain layered gold necklace with multi-layer 18K gold-plated chain and delicate pendants — luxury modest fashion necklace for abaya styling, Bint Saeed UAE',
    keywords: nkw(
      'layered gold necklace',
      'gold chain necklace UAE',
      'modest fashion gold necklace',
      'multi-layer necklace abaya',
      'designer gold necklace Abu Dhabi',
    ),
    relatedAccessoryIds: [
      'abaya-charm-orange-jade-natural-stone',
      'abaya-charm-fuchsia-jade-natural-stone',
      'abaya-charm-jade-hearts-natural-stone',
      'earrings-pearl-drop',
    ],
  },
  'necklace-statement-pendant': {
    carouselAlt:
      'Al Ain heritage pendant necklace — bold Emirati pattern pendant on sterling silver and gold vermeil, pairs with lapis and amethyst abaya strands',
    pdpAlt:
      'Al Ain heritage pendant necklace with traditional Emirati patterns on sterling silver and 18K gold vermeil — statement designer necklace for modest evening wear',
    keywords: nkw(
      'heritage pendant necklace',
      'Emirati pattern necklace',
      'statement necklace UAE',
      'sterling silver gold vermeil necklace',
      'traditional Gulf jewellery',
    ),
    relatedAccessoryIds: [
      'abaya-charm-lapis-lazuli-natural-stone',
      'abaya-charm-amethyst-hearts-natural-stone',
      'abaya-charm-blue-aventurine-natural-stone',
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
      'signature-rose-quartz-necklace',
      'abaya-charm-rose-quartz-natural-stone',
      'abaya-charm-jade-hearts-natural-stone',
      'necklace-layered-gold',
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
      'signature-malachite-necklace',
      'abaya-charm-malachite-natural-stone',
      'abaya-charm-onyx-natural-stone',
      'abaya-charm-amethyst-hearts-natural-stone',
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
      'signature-tiger-eye-necklace',
      'abaya-charm-tiger-eye-natural-stone',
      'abaya-charm-lapis-lazuli-natural-stone',
      'necklace-statement-pendant',
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
