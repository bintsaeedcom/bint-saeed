import type { Accessory } from '@/data/accessories'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'
import {
  ACCESSORY_IMAGE_EARRINGS_HERO,
  ACCESSORY_IMAGE_NECKLACE,
  ACCESSORY_IMAGE_NECKLACE_MALACHITE,
  ACCESSORY_IMAGE_NECKLACE_ROSE_QUARTZ,
} from '@/data/accessories'
import type { AppLocale } from '@/lib/i18n/routing'
import { getAccessorySku } from '@/lib/accessories/accessorySku'
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
  'Signature Strands',
  'abaya jewellery',
  'garment jewellery',
  'garment adornment',
  'detachable garment jewellery',
  'interchangeable abaya jewellery',
  'natural stone garment jewellery',
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
  'Bint Saeed Signature Strands',
  'Emirati luxury abaya jewellery',
  'stone bead abaya draping',
  'designer jewellery Abu Dhabi',
  'GCC luxury stone jewellery',
  'worldwide shipping abaya jewellery',
  'buy garment jewellery online',
] as const

function kw(...stone: string[]): string[] {
  return [...BASE_KEYWORDS, ...stone]
}

const OASIS_EARRINGS_MALACHITE_ID = 'al-ain-oasis-earrings-malachite'
const OASIS_EARRINGS_ROSE_QUARTZ_ID = 'al-ain-oasis-earrings-rose-quartz'
const QUAA_EARRINGS_ONYX_ID = 'al-quaa-earrings-onyx'
const QUAA_EARRINGS_LAPIS_ID = 'al-quaa-earrings-lapis-lazuli'
const OASIS_EARRINGS_MALACHITE_LABEL = 'Al Ain Oasis Earrings - Malachite'
const OASIS_EARRINGS_ROSE_QUARTZ_LABEL = 'Al Ain Oasis Earrings - Rose Quartz'
const QUAA_EARRINGS_ONYX_LABEL = 'Al Quaa Earrings - Onyx'
const QUAA_EARRINGS_LAPIS_LABEL = 'Al Quaa Earrings - Lapis Lazuli'

/** Conversion-focused alt, pairing jewellery, and discovery keywords per strand PDP. */
export const STRAND_PDP_BY_ID: Record<string, StrandPdpSeoPack> = {
  'signature-strand-onyx': {
    pairing: {
      necklaceId: 'al-ain-rosette-necklace-onyx',
      necklaceImage: '', // same asset as strand — gallery shows earrings only
      necklaceLabel: 'Al Ain Oasis Necklace - Onyx',
      earringsId: QUAA_EARRINGS_ONYX_ID,
      earringsImage: ACCESSORY_IMAGE_EARRINGS_HERO,
      earringsLabel: QUAA_EARRINGS_ONYX_LABEL,
    },
    carouselAlt:
      'Black onyx natural stone bead abaya strand with 18K gold clip — pairs with Al Ain Oasis Necklace - Onyx and Al Quaa Earrings - Onyx for Marylebone Abaya',
    strandAlt:
      'Onyx natural stone bead abaya strand, hand-strung black onyx beads with 18K gold-plated clip — interchange for Bint Saeed Marylebone Abaya, pairs with Al Ain Oasis Necklace - Onyx',
    necklaceAlt:
      'Al Ain Oasis Necklace - Onyx with hand-strung natural black onyx beads — pairs with onyx abaya strand and Al Quaa Earrings - Onyx',
    earringsAlt:
      'Al Quaa Earrings - Onyx with natural onyx and Carnelian Al Ain Rosette details — pairs with onyx abaya strand and Al Ain Oasis Necklace - Onyx',
    keywords: kw(
      'black onyx abaya strand',
      'onyx bead strand',
      'onyx abaya charm',
      'natural onyx beads',
      'onyx jewellery set UAE',
      'pairs with onyx necklace',
    ),
  },
  'signature-strand-tiger-eye': {
    pairing: {
      necklaceId: 'al-ain-rosette-necklace-tiger-eye',
      necklaceImage: '',
      necklaceLabel: 'Al Ain Oasis Necklace - Tiger Eye',
      earringsId: QUAA_EARRINGS_ONYX_ID,
      earringsImage: ACCESSORY_IMAGE_EARRINGS_HERO,
      earringsLabel: QUAA_EARRINGS_ONYX_LABEL,
    },
    carouselAlt:
      'Tiger eye natural stone bead abaya strand with warm chatoyant beads — pairs with Al Ain Oasis Necklace - Tiger Eye and Al Quaa Earrings - Onyx',
    strandAlt:
      'Tiger eye natural stone bead abaya strand, warm golden-brown chatoyant beads with 18K gold clip — designed for Marylebone Abaya draping, pairs with Al Ain Oasis Necklace - Tiger Eye',
    necklaceAlt:
      'Al Ain Oasis Necklace - Tiger Eye with natural tiger eye beads and signature clasp — pairs with tiger eye abaya strand and Al Quaa Earrings - Onyx',
    earringsAlt:
      'Al Quaa Earrings - Onyx — pairs with tiger eye abaya strand and Al Ain Oasis Necklace - Tiger Eye',
    keywords: kw(
      'tiger eye abaya strand',
      'tiger eye bead strand',
      'chatoyant stone beads',
      'brown stone abaya accessory',
      'tiger eye jewellery UAE',
      'pairs with tiger eye necklace',
    ),
  },
  'signature-strand-sunstone': {
    pairing: {
      necklaceId: 'al-ain-rosette-necklace-sunstone',
      necklaceImage: ACCESSORY_IMAGE_NECKLACE,
      necklaceLabel: 'Al Ain Oasis Necklace - Sunstone',
      earringsId: OASIS_EARRINGS_ROSE_QUARTZ_ID,
      earringsImage: ACCESSORY_IMAGE_EARRINGS_HERO,
      earringsLabel: OASIS_EARRINGS_ROSE_QUARTZ_LABEL,
    },
    carouselAlt:
      'Sunstone natural stone bead abaya strand — warm peach-orange sunstone beads pair with Al Ain Oasis Necklace - Sunstone and Al Ain Oasis Earrings - Rose Quartz',
    strandAlt:
      'Sunstone natural stone bead abaya strand, warm peach-orange sunstone beads with 18K gold clip — accent for Marylebone Abaya, pairs with Al Ain Oasis Necklace - Sunstone and pearl earrings',
    necklaceAlt:
      'Al Ain Oasis Necklace - Sunstone with luminous warm natural stone beads — pairs with sunstone abaya strand and Al Ain Oasis Earrings - Rose Quartz for evening abaya styling',
    earringsAlt:
      'Al Ain Oasis Earrings - Rose Quartz with natural rose quartz and Carnelian Al Ain Rosette details — pairs with sunstone abaya strand and Al Ain Oasis Necklace - Sunstone',
    keywords: kw(
      'sunstone abaya strand',
      'sunstone bead strand',
      'peach sunstone abaya charm',
      'natural sunstone beads',
      'sunstone abaya accessory UAE',
      'pairs with gold necklace',
    ),
  },
  'signature-strand-fuchsia-jade': {
    pairing: {
      necklaceId: 'al-ain-rosette-necklace-sunstone',
      necklaceImage: ACCESSORY_IMAGE_NECKLACE,
      necklaceLabel: 'Al Ain Oasis Necklace - Sunstone',
      earringsId: OASIS_EARRINGS_ROSE_QUARTZ_ID,
      earringsImage: ACCESSORY_IMAGE_EARRINGS_HERO,
      earringsLabel: OASIS_EARRINGS_ROSE_QUARTZ_LABEL,
    },
    carouselAlt:
      'Fuchsia jade natural stone bead abaya strand — saturated rose jade beads pair with Al Ain Oasis Necklace - Sunstone and Al Ain Oasis Earrings - Rose Quartz',
    strandAlt:
      'Fuchsia jade natural stone bead abaya strand, deep rose jade beads with 18K gold clip — bold jewel tone for neutral abayas, pairs with Al Ain Oasis Necklace - Sunstone',
    necklaceAlt:
      'Al Ain Oasis Necklace - Sunstone — pairs with fuchsia jade abaya strand and Al Ain Oasis Earrings - Rose Quartz for a layered luxury look',
    earringsAlt:
      'Al Ain Oasis Earrings - Rose Quartz — pairs with fuchsia jade abaya strand and Al Ain Oasis Necklace - Sunstone',
    keywords: kw(
      'fuchsia jade abaya strand',
      'pink jade bead strand',
      'rose jade abaya charm',
      'natural jade beads luxury',
      'jade heart abaya accessory',
      'pairs with gold necklace and earrings',
    ),
  },
  'signature-strand-orange-jade': {
    pairing: {
      necklaceId: 'al-ain-rosette-necklace-sunstone',
      necklaceImage: ACCESSORY_IMAGE_NECKLACE,
      necklaceLabel: 'Al Ain Oasis Necklace - Sunstone',
      earringsId: OASIS_EARRINGS_ROSE_QUARTZ_ID,
      earringsImage: ACCESSORY_IMAGE_EARRINGS_HERO,
      earringsLabel: OASIS_EARRINGS_ROSE_QUARTZ_LABEL,
    },
    carouselAlt:
      'Orange jade natural stone bead abaya strand — warm amber jade beads pair with Al Ain Oasis Necklace - Sunstone and Al Ain Oasis Earrings - Rose Quartz',
    strandAlt:
      'Orange jade natural stone bead abaya strand, warm amber-orange jade beads with 18K gold clip — luminous highlight for neutral abayas, pairs with Al Ain Oasis Necklace - Sunstone',
    necklaceAlt:
      'Al Ain Oasis Necklace - Sunstone — pairs with orange jade abaya strand and Al Ain Oasis Earrings - Rose Quartz for a warm layered look',
    earringsAlt:
      'Al Ain Oasis Earrings - Rose Quartz — pairs with orange jade abaya strand and Al Ain Oasis Necklace - Sunstone',
    keywords: kw(
      'orange jade abaya strand',
      'amber jade bead strand',
      'warm jade abaya charm',
      'natural orange jade beads',
      'orange jade jewellery UAE',
      'pairs with gold necklace and earrings',
    ),
  },
  'signature-strand-blue-aventurine': {
    pairing: {
      necklaceId: 'al-ain-rosette-necklace-lapis-lazuli',
      necklaceImage: ACCESSORY_IMAGE_NECKLACE,
      necklaceLabel: 'Al Ain Oasis Necklace - Lapis Lazuli',
      earringsId: QUAA_EARRINGS_LAPIS_ID,
      earringsImage: ACCESSORY_IMAGE_EARRINGS_HERO,
      earringsLabel: QUAA_EARRINGS_LAPIS_LABEL,
    },
    carouselAlt:
      'Blue aventurine natural stone bead abaya strand — cool dusty blue beads pair with Al Ain Oasis Necklace - Lapis Lazuli and Al Quaa Earrings - Lapis Lazuli',
    strandAlt:
      'Blue aventurine natural stone bead abaya strand, cool blue aventurine with subtle shimmer and 18K gold clip — pairs with Al Ain Oasis Necklace - Lapis Lazuli',
    necklaceAlt:
      'Al Ain Oasis Necklace - Lapis Lazuli — pairs with blue aventurine abaya strand and Al Quaa Earrings - Lapis Lazuli',
    earringsAlt:
      'Al Quaa Earrings - Lapis Lazuli — pairs with blue aventurine abaya strand and Al Ain Oasis Necklace - Lapis Lazuli',
    keywords: kw(
      'blue aventurine abaya strand',
      'aventurine bead strand',
      'blue stone abaya charm',
      'natural aventurine beads',
      'cool tone abaya accessory UAE',
      'pairs with heritage necklace',
    ),
  },
  'signature-strand-rose-quartz': {
    pairing: {
      necklaceId: 'al-ain-rosette-necklace-rose-quartz',
      necklaceImage: ACCESSORY_IMAGE_NECKLACE_ROSE_QUARTZ,
      necklaceLabel: 'Al Ain Oasis Necklace - Rose Quartz',
      earringsId: OASIS_EARRINGS_ROSE_QUARTZ_ID,
      earringsImage: ACCESSORY_IMAGE_EARRINGS_HERO,
      earringsLabel: OASIS_EARRINGS_ROSE_QUARTZ_LABEL,
    },
    carouselAlt:
      'Rose quartz natural stone bead abaya strand — soft blush beads pair with Al Ain Oasis Necklace - Rose Quartz and Al Ain Oasis Earrings - Rose Quartz',
    strandAlt:
      'Rose quartz natural stone bead abaya strand, luminous blush rose quartz with carnelian accents and 18K gold clip — romantic line for Marylebone Abaya, pairs with Al Ain Oasis Necklace - Rose Quartz',
    necklaceAlt:
      'Al Ain Oasis Necklace - Rose Quartz, hand-knotted natural rose quartz beads — pairs with rose quartz abaya strand and Al Ain Oasis Earrings - Rose Quartz',
    earringsAlt:
      'Al Ain Oasis Earrings - Rose Quartz — pairs with rose quartz abaya strand and Al Ain Oasis Necklace - Rose Quartz for a soft romantic jewellery set',
    keywords: kw(
      'rose quartz abaya strand',
      'pink quartz bead strand',
      'blush stone abaya charm',
      'natural rose quartz beads',
      'romantic abaya jewellery UAE',
      'pairs with rose quartz necklace',
    ),
  },
  'signature-strand-malachite': {
    pairing: {
      necklaceId: 'al-ain-rosette-necklace-malachite',
      necklaceImage: ACCESSORY_IMAGE_NECKLACE_MALACHITE,
      necklaceLabel: 'Al Ain Oasis Necklace - Malachite',
      earringsId: OASIS_EARRINGS_MALACHITE_ID,
      earringsImage: ACCESSORY_IMAGE_EARRINGS_HERO,
      earringsLabel: OASIS_EARRINGS_MALACHITE_LABEL,
    },
    carouselAlt:
      'Malachite natural stone bead abaya strand — deep green banded malachite beads pair with Al Ain Oasis Necklace - Malachite and Al Ain Oasis Earrings - Malachite',
    strandAlt:
      'Malachite natural stone bead abaya strand, deep green banded malachite and carnelian beads with 18K gold clip — signature accent for Marylebone Abaya, pairs with Al Ain Oasis Necklace - Malachite',
    necklaceAlt:
      'Al Ain Oasis Necklace - Malachite with hand-strung natural malachite beads — pairs with malachite abaya strand and Al Ain Oasis Earrings - Malachite',
    earringsAlt:
      'Al Ain Oasis Earrings - Malachite — pairs with malachite abaya strand and Al Ain Oasis Necklace - Malachite for a coordinated green stone look',
    keywords: kw(
      'malachite abaya strand',
      'malachite bead strand',
      'green stone abaya charm',
      'natural malachite beads',
      'malachite jewellery set UAE',
      'pairs with malachite necklace and earrings',
    ),
  },
  'signature-strand-lapis-lazuli': {
    pairing: {
      necklaceId: 'al-ain-rosette-necklace-lapis-lazuli',
      necklaceImage: ACCESSORY_IMAGE_NECKLACE,
      necklaceLabel: 'Al Ain Oasis Necklace - Lapis Lazuli',
      earringsId: QUAA_EARRINGS_LAPIS_ID,
      earringsImage: ACCESSORY_IMAGE_EARRINGS_HERO,
      earringsLabel: QUAA_EARRINGS_LAPIS_LABEL,
    },
    carouselAlt:
      'Lapis lazuli natural stone bead abaya strand — deep blue with gold pyrite flecks, pairs with Al Ain Oasis Necklace - Lapis Lazuli and Al Quaa Earrings - Lapis Lazuli',
    strandAlt:
      'Lapis lazuli natural stone bead abaya strand, rich blue lapis with carnelian and 18K gold clip — evening jewel tone for abaya draping, pairs with Al Ain Oasis Necklace - Lapis Lazuli',
    necklaceAlt:
      'Al Ain Oasis Necklace - Lapis Lazuli — pairs with lapis lazuli abaya strand and Al Quaa Earrings - Lapis Lazuli',
    earringsAlt:
      'Al Quaa Earrings - Lapis Lazuli — pairs with lapis lazuli abaya strand and Al Ain Oasis Necklace - Lapis Lazuli for evening wear',
    keywords: kw(
      'lapis lazuli abaya strand',
      'lapis bead strand',
      'blue stone abaya charm',
      'natural lapis lazuli beads',
      'evening abaya jewellery UAE',
      'pairs with heritage necklace and hoops',
    ),
  },
  'signature-strand-amethyst-hearts': {
    pairing: {
      necklaceId: 'al-ain-rosette-necklace-lapis-lazuli',
      necklaceImage: ACCESSORY_IMAGE_NECKLACE,
      necklaceLabel: 'Al Ain Oasis Necklace - Lapis Lazuli',
      earringsId: QUAA_EARRINGS_LAPIS_ID,
      earringsImage: ACCESSORY_IMAGE_EARRINGS_HERO,
      earringsLabel: QUAA_EARRINGS_LAPIS_LABEL,
    },
    carouselAlt:
      'Amethyst hearts natural stone bead abaya strand — limited edition violet heart-cut beads pair with Al Ain Oasis Necklace - Lapis Lazuli and Al Quaa Earrings - Lapis Lazuli',
    strandAlt:
      'Amethyst hearts natural stone bead abaya strand, heart-cut violet amethyst beads with 18K gold clip — limited edition Marylebone accent, pairs with heritage Al Ain necklace and stud earrings',
    necklaceAlt:
      'Al Ain Oasis Necklace - Lapis Lazuli — pairs with amethyst hearts abaya strand and Al Quaa Earrings - Lapis Lazuli',
    earringsAlt:
      'Al Quaa Earrings - Lapis Lazuli — pairs with amethyst hearts abaya strand and Al Ain Oasis Necklace - Lapis Lazuli for a complete amethyst jewellery look',
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
  'signature-strand-jade-hearts': {
    pairing: {
      necklaceId: 'al-ain-rosette-necklace-sunstone',
      necklaceImage: ACCESSORY_IMAGE_NECKLACE,
      necklaceLabel: 'Al Ain Oasis Necklace - Sunstone',
      earringsId: OASIS_EARRINGS_ROSE_QUARTZ_ID,
      earringsImage: ACCESSORY_IMAGE_EARRINGS_HERO,
      earringsLabel: OASIS_EARRINGS_ROSE_QUARTZ_LABEL,
    },
    carouselAlt:
      'Jade hearts natural stone bead abaya strand — limited edition green heart-shaped jade beads pair with Al Ain Oasis Necklace - Sunstone and Al Ain Oasis Earrings - Rose Quartz',
    strandAlt:
      'Jade hearts natural stone bead abaya strand, heart-shaped green jade beads with 18K gold clip — limited edition serene accent for Marylebone Abaya, pairs with Al Ain Oasis Necklace - Sunstone',
    necklaceAlt:
      'Al Ain Oasis Necklace - Sunstone — pairs with jade hearts abaya strand and Al Ain Oasis Earrings - Rose Quartz for layered jade and gold styling',
    earringsAlt:
      'Al Ain Oasis Earrings - Rose Quartz — pairs with jade hearts abaya strand and Al Ain Oasis Necklace - Sunstone for a refined jade jewellery set',
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
  return accessory.category === 'signature-strands' && accessory.id in STRAND_PDP_BY_ID
}

export function getStrandPdpPack(accessoryId: string): StrandPdpSeoPack | undefined {
  return STRAND_PDP_BY_ID[resolveAccessoryId(accessoryId)]
}

/** PDP gallery: strand hero + distinct pairing shots (skips necklace when same file as strand). */
export function getAccessoryPdpImages(accessory: Accessory): string[] {
  if (accessory.category === 'phone-strands') {
    const primary = accessory.images[0]
    if (!primary) return [...accessory.images]
    const gallery = [primary]
    for (const src of accessory.detailAngles ?? []) {
      if (!gallery.includes(src)) gallery.push(src)
    }
    return gallery
  }

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
  const sku = getAccessorySku(accessory) ?? accessory.id

  const base: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: displayName,
    description,
    url: pageUrl,
    sku,
    category: 'Signature Strands',
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
