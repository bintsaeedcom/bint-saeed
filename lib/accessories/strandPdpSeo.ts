import type { Accessory } from '@/data/accessories'
import {
  ACCESSORY_IMAGE_EARRINGS_HERO,
  ACCESSORY_IMAGE_NECKLACE,
  ACCESSORY_IMAGE_NECKLACE_MALACHITE,
  ACCESSORY_IMAGE_NECKLACE_ROSE_QUARTZ,
} from '@/data/accessories'
import type { AppLocale } from '@/lib/i18n/routing'
import { withBrandAlt } from '@/lib/products/imageAlt'

type StrandPairing = {
  necklaceId: string
  necklaceImage: string
  necklaceLabel: string
  earringsId: string
  earringsImage: string
  earringsLabel: string
}

export type StrandPdpSeoPack = {
  pairing: StrandPairing
  strandAlt: string
  necklaceAlt: string
  earringsAlt: string
  carouselAlt: string
  keywords: string[]
}

const BASE_KEYWORDS = [
  'natural stone beads abaya strand',
  'natural stone bead necklace',
  'natural stone earrings UAE',
  'interchangeable abaya strand',
  'Marylebone Abaya strand',
  'luxury abaya accessory UAE',
  'Abu Dhabi handcrafted jewellery',
  'Al Ain rosette strand',
  'Al Ain necklace Bint Saeed',
  'gold-plated clip abaya strand',
  'hand-strung stone beads',
  'pairs well with necklace and earrings',
  'Bint Saeed abaya strands',
  'Emirati luxury abaya jewellery',
  'stone bead abaya draping',
  'designer jewellery Abu Dhabi',
  'GCC luxury stone jewellery',
  'buy malachite onyx jade necklace online',
] as const

function kw(...stone: string[]): string[] {
  return [...BASE_KEYWORDS, ...stone]
}

/** Conversion-focused alt, pairing jewellery, and discovery keywords per strand PDP. */
export const STRAND_PDP_BY_ID: Record<string, StrandPdpSeoPack> = {
  'abaya-charm-onyx-natural-stone': {
    pairing: {
      necklaceId: 'signature-onyx-necklace',
      necklaceImage: '', // same asset as strand — gallery shows earrings only
      necklaceLabel: 'Al Ain Necklace — Onyx',
      earringsId: 'earrings-geometric',
      earringsImage: ACCESSORY_IMAGE_EARRINGS_HERO,
      earringsLabel: 'Geometric Stud Earrings',
    },
    carouselAlt:
      'Black onyx natural stone bead abaya strand with 18K gold clip — pairs with Al Ain Onyx necklace and geometric stud earrings for Marylebone Abaya',
    strandAlt:
      'Onyx natural stone bead abaya strand, hand-strung black onyx beads with 18K gold-plated clip — interchange for Bint Saeed Marylebone Abaya, pairs with Al Ain Onyx necklace',
    necklaceAlt:
      'Al Ain Onyx necklace with hand-strung natural black onyx beads — pairs with onyx abaya strand and geometric stud earrings',
    earringsAlt:
      'Geometric stud earrings in sterling silver — pairs with onyx abaya strand and Al Ain Onyx necklace for a complete stone jewellery look',
    keywords: kw(
      'black onyx abaya strand',
      'onyx bead strand',
      'onyx abaya charm',
      'natural onyx beads',
      'onyx jewellery set UAE',
      'pairs with onyx necklace',
    ),
  },
  'abaya-charm-tiger-eye-natural-stone': {
    pairing: {
      necklaceId: 'signature-tiger-eye-necklace',
      necklaceImage: '',
      necklaceLabel: 'Al Ain Necklace — Tiger Eye',
      earringsId: 'earrings-hoops',
      earringsImage: ACCESSORY_IMAGE_EARRINGS_HERO,
      earringsLabel: 'Textured Gold Hoops',
    },
    carouselAlt:
      'Tiger eye natural stone bead abaya strand with warm chatoyant beads — pairs with Al Ain Tiger Eye necklace and gold hoop earrings',
    strandAlt:
      'Tiger eye natural stone bead abaya strand, warm golden-brown chatoyant beads with 18K gold clip — designed for Marylebone Abaya draping, pairs with Al Ain Tiger Eye necklace',
    necklaceAlt:
      'Al Ain Tiger Eye necklace with natural tiger eye beads and signature clasp — pairs with tiger eye abaya strand and textured gold hoops',
    earringsAlt:
      'Textured gold hoop earrings with hammered finish — pairs with tiger eye abaya strand and Al Ain Tiger Eye necklace',
    keywords: kw(
      'tiger eye abaya strand',
      'tiger eye bead strand',
      'chatoyant stone beads',
      'brown stone abaya accessory',
      'tiger eye jewellery UAE',
      'pairs with tiger eye necklace',
    ),
  },
  'abaya-charm-orange-jade-natural-stone': {
    pairing: {
      necklaceId: 'necklace-layered-gold',
      necklaceImage: ACCESSORY_IMAGE_NECKLACE,
      necklaceLabel: 'Al Ain Necklace — Layered Gold',
      earringsId: 'earrings-pearl-drop',
      earringsImage: ACCESSORY_IMAGE_EARRINGS_HERO,
      earringsLabel: 'Pearl Drop Earrings',
    },
    carouselAlt:
      'Orange jade natural stone bead abaya strand — vivid coral jade beads pair with layered gold Al Ain necklace and pearl drop earrings',
    strandAlt:
      'Orange jade natural stone bead abaya strand, vivid coral-toned jade beads with 18K gold clip — accent for Marylebone Abaya, pairs with layered gold necklace and pearl earrings',
    necklaceAlt:
      'Al Ain layered gold necklace with delicate pendants — pairs with orange jade abaya strand and pearl drop earrings for evening abaya styling',
    earringsAlt:
      'Pearl drop earrings with gold-plated hooks — pairs with orange jade abaya strand and layered gold Al Ain necklace',
    keywords: kw(
      'orange jade abaya strand',
      'jade bead strand',
      'coral jade abaya charm',
      'natural jade beads',
      'jade abaya accessory UAE',
      'pairs with gold necklace',
    ),
  },
  'abaya-charm-fuchsia-jade-natural-stone': {
    pairing: {
      necklaceId: 'necklace-layered-gold',
      necklaceImage: ACCESSORY_IMAGE_NECKLACE,
      necklaceLabel: 'Al Ain Necklace — Layered Gold',
      earringsId: 'earrings-pearl-drop',
      earringsImage: ACCESSORY_IMAGE_EARRINGS_HERO,
      earringsLabel: 'Pearl Drop Earrings',
    },
    carouselAlt:
      'Fuchsia jade natural stone bead abaya strand — saturated rose jade beads pair with layered gold necklace and pearl drop earrings',
    strandAlt:
      'Fuchsia jade natural stone bead abaya strand, deep rose jade beads with 18K gold clip — bold jewel tone for neutral abayas, pairs with layered gold necklace',
    necklaceAlt:
      'Al Ain layered gold necklace — pairs with fuchsia jade abaya strand and pearl drop earrings for a layered luxury look',
    earringsAlt:
      'Pearl drop earrings — pairs with fuchsia jade abaya strand and layered gold Al Ain necklace',
    keywords: kw(
      'fuchsia jade abaya strand',
      'pink jade bead strand',
      'rose jade abaya charm',
      'natural jade beads luxury',
      'jade heart abaya accessory',
      'pairs with gold necklace and earrings',
    ),
  },
  'abaya-charm-blue-aventurine-natural-stone': {
    pairing: {
      necklaceId: 'necklace-statement-pendant',
      necklaceImage: ACCESSORY_IMAGE_NECKLACE,
      necklaceLabel: 'Al Ain Necklace — Heritage Pendant',
      earringsId: 'earrings-geometric',
      earringsImage: ACCESSORY_IMAGE_EARRINGS_HERO,
      earringsLabel: 'Geometric Stud Earrings',
    },
    carouselAlt:
      'Blue aventurine natural stone bead abaya strand — cool dusty blue beads pair with heritage pendant necklace and geometric stud earrings',
    strandAlt:
      'Blue aventurine natural stone bead abaya strand, cool blue aventurine with subtle shimmer and 18K gold clip — pairs with heritage pendant Al Ain necklace',
    necklaceAlt:
      'Al Ain heritage pendant necklace with Emirati patterns — pairs with blue aventurine abaya strand and geometric stud earrings',
    earringsAlt:
      'Geometric stud earrings inspired by Islamic art — pairs with blue aventurine abaya strand and heritage pendant necklace',
    keywords: kw(
      'blue aventurine abaya strand',
      'aventurine bead strand',
      'blue stone abaya charm',
      'natural aventurine beads',
      'cool tone abaya accessory UAE',
      'pairs with heritage necklace',
    ),
  },
  'abaya-charm-rose-quartz-natural-stone': {
    pairing: {
      necklaceId: 'signature-rose-quartz-necklace',
      necklaceImage: ACCESSORY_IMAGE_NECKLACE_ROSE_QUARTZ,
      necklaceLabel: 'Al Ain Necklace — Rose Quartz',
      earringsId: 'earrings-pearl-drop',
      earringsImage: ACCESSORY_IMAGE_EARRINGS_HERO,
      earringsLabel: 'Pearl Drop Earrings',
    },
    carouselAlt:
      'Rose quartz natural stone bead abaya strand — soft blush beads pair with Al Ain Rose Quartz necklace and pearl drop earrings',
    strandAlt:
      'Rose quartz natural stone bead abaya strand, luminous blush rose quartz with carnelian accents and 18K gold clip — romantic line for Marylebone Abaya, pairs with Al Ain Rose Quartz necklace',
    necklaceAlt:
      'Al Ain Rose Quartz necklace, hand-knotted natural rose quartz beads — pairs with rose quartz abaya strand and pearl drop earrings',
    earringsAlt:
      'Pearl drop earrings — pairs with rose quartz abaya strand and Al Ain Rose Quartz necklace for a soft romantic jewellery set',
    keywords: kw(
      'rose quartz abaya strand',
      'pink quartz bead strand',
      'blush stone abaya charm',
      'natural rose quartz beads',
      'romantic abaya jewellery UAE',
      'pairs with rose quartz necklace',
    ),
  },
  'abaya-charm-malachite-natural-stone': {
    pairing: {
      necklaceId: 'signature-malachite-necklace',
      necklaceImage: ACCESSORY_IMAGE_NECKLACE_MALACHITE,
      necklaceLabel: 'Al Ain Necklace — Malachite',
      earringsId: 'earrings-geometric',
      earringsImage: ACCESSORY_IMAGE_EARRINGS_HERO,
      earringsLabel: 'Geometric Stud Earrings',
    },
    carouselAlt:
      'Malachite natural stone bead abaya strand — deep green banded malachite beads pair with Al Ain Malachite necklace and geometric stud earrings',
    strandAlt:
      'Malachite natural stone bead abaya strand, deep green banded malachite and carnelian beads with 18K gold clip — signature accent for Marylebone Abaya, pairs with Al Ain Malachite necklace',
    necklaceAlt:
      'Al Ain Malachite necklace with hand-strung natural malachite beads — pairs with malachite abaya strand and geometric stud earrings',
    earringsAlt:
      'Geometric stud earrings — pairs with malachite abaya strand and Al Ain Malachite necklace for a coordinated green stone look',
    keywords: kw(
      'malachite abaya strand',
      'malachite bead strand',
      'green stone abaya charm',
      'natural malachite beads',
      'malachite jewellery set UAE',
      'pairs with malachite necklace and earrings',
    ),
  },
  'abaya-charm-lapis-lazuli-natural-stone': {
    pairing: {
      necklaceId: 'necklace-statement-pendant',
      necklaceImage: ACCESSORY_IMAGE_NECKLACE,
      necklaceLabel: 'Al Ain Necklace — Heritage Pendant',
      earringsId: 'earrings-hoops',
      earringsImage: ACCESSORY_IMAGE_EARRINGS_HERO,
      earringsLabel: 'Textured Gold Hoops',
    },
    carouselAlt:
      'Lapis lazuli natural stone bead abaya strand — deep blue with gold pyrite flecks, pairs with heritage pendant necklace and gold hoop earrings',
    strandAlt:
      'Lapis lazuli natural stone bead abaya strand, rich blue lapis with carnelian and 18K gold clip — evening jewel tone for abaya draping, pairs with heritage Al Ain necklace',
    necklaceAlt:
      'Al Ain heritage pendant necklace — pairs with lapis lazuli abaya strand and textured gold hoop earrings',
    earringsAlt:
      'Textured gold hoop earrings — pairs with lapis lazuli abaya strand and heritage pendant necklace for evening wear',
    keywords: kw(
      'lapis lazuli abaya strand',
      'lapis bead strand',
      'blue stone abaya charm',
      'natural lapis lazuli beads',
      'evening abaya jewellery UAE',
      'pairs with heritage necklace and hoops',
    ),
  },
  'abaya-charm-amethyst-hearts-natural-stone': {
    pairing: {
      necklaceId: 'necklace-statement-pendant',
      necklaceImage: ACCESSORY_IMAGE_NECKLACE,
      necklaceLabel: 'Al Ain Necklace — Heritage Pendant',
      earringsId: 'earrings-geometric',
      earringsImage: ACCESSORY_IMAGE_EARRINGS_HERO,
      earringsLabel: 'Geometric Stud Earrings',
    },
    carouselAlt:
      'Amethyst hearts natural stone bead abaya strand — limited edition violet heart-cut beads pair with heritage pendant necklace and geometric stud earrings',
    strandAlt:
      'Amethyst hearts natural stone bead abaya strand, heart-cut violet amethyst beads with 18K gold clip — limited edition Marylebone accent, pairs with heritage Al Ain necklace and stud earrings',
    necklaceAlt:
      'Al Ain heritage pendant necklace with traditional Emirati patterns — pairs with amethyst hearts abaya strand and geometric stud earrings',
    earringsAlt:
      'Geometric stud earrings — pairs with amethyst hearts abaya strand and heritage pendant necklace for a complete amethyst jewellery look',
    keywords: kw(
      'amethyst abaya strand',
      'amethyst heart beads',
      'violet stone abaya charm',
      'natural amethyst beads',
      'limited edition abaya strand UAE',
      'pairs with amethyst necklace and earrings',
      'heart-cut amethyst jewellery',
    ),
  },
  'abaya-charm-jade-hearts-natural-stone': {
    pairing: {
      necklaceId: 'necklace-layered-gold',
      necklaceImage: ACCESSORY_IMAGE_NECKLACE,
      necklaceLabel: 'Al Ain Necklace — Layered Gold',
      earringsId: 'earrings-pearl-drop',
      earringsImage: ACCESSORY_IMAGE_EARRINGS_HERO,
      earringsLabel: 'Pearl Drop Earrings',
    },
    carouselAlt:
      'Jade hearts natural stone bead abaya strand — limited edition green heart-shaped jade beads pair with layered gold necklace and pearl drop earrings',
    strandAlt:
      'Jade hearts natural stone bead abaya strand, heart-shaped green jade beads with 18K gold clip — limited edition serene accent for Marylebone Abaya, pairs with layered gold Al Ain necklace',
    necklaceAlt:
      'Al Ain layered gold necklace — pairs with jade hearts abaya strand and pearl drop earrings for layered jade and gold styling',
    earringsAlt:
      'Pearl drop earrings — pairs with jade hearts abaya strand and layered gold necklace for a refined jade jewellery set',
    keywords: kw(
      'jade abaya strand',
      'jade heart beads',
      'green jade abaya charm',
      'natural jade beads',
      'limited edition jade strand UAE',
      'pairs with jade necklace and earrings',
      'heart-shaped jade jewellery',
    ),
  },
}

export function isStrandAccessory(accessory: Pick<Accessory, 'category' | 'id'>): boolean {
  return accessory.category === 'abaya-charms' && accessory.id in STRAND_PDP_BY_ID
}

export function getStrandPdpPack(accessoryId: string): StrandPdpSeoPack | undefined {
  return STRAND_PDP_BY_ID[accessoryId]
}

/** PDP gallery: strand hero + distinct pairing shots (skips necklace when same file as strand). */
export function getAccessoryPdpImages(accessory: Accessory): string[] {
  const pack = getStrandPdpPack(accessory.id)
  if (!pack) return [...accessory.images]

  const primary = accessory.images[0]
  if (!primary) return [...accessory.images]

  const images: string[] = [primary]
  const { necklaceImage, earringsImage } = pack.pairing
  if (necklaceImage && necklaceImage !== primary) images.push(necklaceImage)
  images.push(earringsImage)
  return images
}

export function getAccessoryImageAlt(
  accessory: Accessory,
  imageSrc: string,
  imageIndex: number,
  locale: AppLocale = 'en',
): string {
  const pack = getStrandPdpPack(accessory.id)
  if (!pack) {
    return withBrandAlt(`${accessory.name} — product image ${imageIndex + 1}`, locale)
  }

  const gallery = getAccessoryPdpImages(accessory)
  const primary = accessory.images[0]

  if (imageSrc === primary || imageIndex === 0) {
    return withBrandAlt(pack.strandAlt, locale)
  }
  if (imageSrc === pack.pairing.necklaceImage) {
    return withBrandAlt(pack.necklaceAlt, locale)
  }
  if (imageSrc === pack.pairing.earringsImage) {
    return withBrandAlt(pack.earringsAlt, locale)
  }

  const role =
    gallery[imageIndex] === pack.pairing.earringsImage
      ? pack.earringsAlt
      : gallery[imageIndex] === pack.pairing.necklaceImage
        ? pack.necklaceAlt
        : pack.strandAlt

  return withBrandAlt(role, locale)
}

export function getStrandCarouselAlt(accessoryId: string, locale: AppLocale = 'en'): string {
  const pack = getStrandPdpPack(accessoryId)
  if (!pack) return withBrandAlt('Natural stone abaya strand — Emirati heritage house code', locale)
  return withBrandAlt(pack.carouselAlt, locale)
}

type JsonLdInput = {
  accessory: Accessory
  displayName: string
  description: string
  locale?: AppLocale
  pageUrl: string
}

export function buildAccessoryProductJsonLd({
  accessory,
  displayName,
  description,
  pageUrl,
}: JsonLdInput): Record<string, unknown> {
  const pack = getStrandPdpPack(accessory.id)
  const gallery = getAccessoryPdpImages(accessory)

  const base: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: displayName,
    description,
    url: pageUrl,
    sku: accessory.id,
    category: 'Abaya Strands',
    brand: {
      '@type': 'Brand',
      name: 'Bint Saeed',
    },
    material: accessory.materials,
    image: gallery.map((src, index) => ({
      '@type': 'ImageObject',
      contentUrl: src.startsWith('http') ? src : `https://www.bintsaeed.com${src}`,
      name: getAccessoryImageAlt(accessory, src, index, 'en'),
    })),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AED',
      price: String(accessory.price),
      availability: accessory.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'Bint Saeed',
      },
      url: pageUrl,
    },
  }

  if (!pack) return base

  return {
    ...base,
    keywords: pack.keywords.join(', '),
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Stone type',
        value: displayName,
      },
      {
        '@type': 'PropertyValue',
        name: 'Bead construction',
        value: 'Hand-strung natural stone beads with 18K gold-plated clip',
      },
      {
        '@type': 'PropertyValue',
        name: 'Pairs well with',
        value: `${pack.pairing.necklaceLabel} and ${pack.pairing.earringsLabel}`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Designed for',
        value: 'Bint Saeed Marylebone Abaya interchangeable strand styling',
      },
    ],
    isRelatedTo: [
      {
        '@type': 'Product',
        name: pack.pairing.necklaceLabel,
        url: `https://www.bintsaeed.com/accessories/${pack.pairing.necklaceId}`,
      },
      {
        '@type': 'Product',
        name: pack.pairing.earringsLabel,
        url: `https://www.bintsaeed.com/accessories/${pack.pairing.earringsId}`,
      },
    ],
  }
}
