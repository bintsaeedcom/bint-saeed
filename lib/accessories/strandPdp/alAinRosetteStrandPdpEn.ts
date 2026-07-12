import type { StrandPdpContent } from '@/lib/accessories/strandPdp/types'
import type { AlAinRosetteStrandId } from '@/lib/accessories/strandPdp/alAinRosetteStrandIds'
import {
  buildStrandFaqFromTemplates,
  resolveStrandCare,
  STRAND_PDP_LOCALE_TEMPLATES,
} from '@/lib/accessories/strandPdp/localeTemplatesI18n'

const SHARED_ROSETTE_INTRO_P2 =
  'Created to personalise compatible Bint Saeed designs, including the Marylebone Abaya and future compatible creations, these detachable strands allow a single garment to evolve effortlessly. Whether styled to complement your handbag, shoes or jewellery, they create a fresh expression without changing the garment itself.'

const SHARED_ROSETTE_INTRO_ROSETTE =
  'The hand-carved Carnelian Al Ain Rosette is one of Bint Saeed’s signature House Codes. Inspired by the warm sand tones and natural landscape surrounding the oasis city of Al Ain in the United Arab Emirates, it reinterprets a simple natural form into a contemporary design detail that can be worn by women around the world.'

const SHARED_ROSETTE_INTRO_UNIQUE =
  'Because every gemstone is naturally formed, each Signature Strand is entirely unique in its colour, markings and character.'

const SHARED_ROSETTE_CLOSING =
  'This is more than an accessory. It is a personal expression of one of Bint Saeed’s signature House Codes.'

const SHARED_ROSETTE_CARNELIAN_ORIGIN =
  'The Carnelian used for the Al Ain Rosettes is sourced from India and carefully carved into one of Bint Saeed’s signature House Codes.'

const DETAIL_ROSETTES = 'Hand-carved Carnelian Al Ain Rosettes (approximately 15 mm)'
const MATERIAL_ROSETTES = 'Hand-carved Carnelian Al Ain Rosettes'

function buildRosettePdp(
  headline: string,
  introP1: string,
  introStone: string,
  introRosetteBalance: string,
  stoneOriginLead: string,
  stoneBeadDetail: string,
  materialStone: string,
  strandLabel: string,
  stoneLabel: string,
  variationNote: string,
): StrandPdpContent {
  const templates = STRAND_PDP_LOCALE_TEMPLATES.en

  return {
    headline,
    introParagraphs: [
      introP1,
      SHARED_ROSETTE_INTRO_P2,
      introStone,
      `${SHARED_ROSETTE_INTRO_ROSETTE} ${introRosetteBalance}`,
      SHARED_ROSETTE_INTRO_UNIQUE,
      SHARED_ROSETTE_CLOSING,
    ],
    productDetails: [
      `Pair of detachable ${headline}`,
      templates.detailDesignedFor,
      templates.detailHandAssembled,
      stoneBeadDetail,
      DETAIL_ROSETTES,
      templates.detailHematite,
      templates.detailKnottedLine,
      templates.detailLength,
      templates.detailAttach,
      templates.detailPersonalise,
      templates.detailNotJewellery,
      templates.detailGiftBox,
    ],
    materials: [
      materialStone,
      MATERIAL_ROSETTES,
      templates.materialHematite,
      templates.materialKnottedLine,
    ],
    stoneOrigin: `${stoneOriginLead} ${SHARED_ROSETTE_CARNELIAN_ORIGIN} Every natural gemstone displays its own unique colour, inclusions and markings, making every Signature Strand one of a kind.`,
    naturalStone: templates.naturalStoneBody,
    care: [...resolveStrandCare('en')],
    faq: buildStrandFaqFromTemplates(templates, strandLabel, stoneLabel, variationNote, 'en'),
  }
}

export const AL_AIN_ROSETTE_STRAND_PDP_EN: Record<AlAinRosetteStrandId, StrandPdpContent> = {
  'signature-strand-lapis-lazuli': buildRosettePdp(
    'Lapis Lazuli Al Ain Rosette Signature Strands',
    'The Lapis Lazuli Al Ain Rosette Signature Strands bring together natural gemstones, Emirati inspiration and contemporary design in one of Bint Saeed’s signature House Codes. Hand-assembled in Abu Dhabi from natural Lapis Lazuli and hand-carved Carnelian Al Ain Rosettes, they offer a refined way to transform selected Bint Saeed garments through one thoughtful detail.',
    'Admired for thousands of years, Lapis Lazuli is recognised for its rich royal blue tones and naturally occurring golden pyrite inclusions, making every strand beautifully unique. Between every gemstone, faceted gold-plated Hematite accents catch and reflect light with every movement, adding subtle brilliance throughout the composition.',
    'Together with the deep blue Lapis Lazuli, it creates a striking balance between colour, craftsmanship and cultural inspiration.',
    'Lapis Lazuli has been prized for centuries for its intense blue colour and is primarily sourced from Afghanistan.',
    'Natural Lapis Lazuli gemstone beads (approximately 5 mm)',
    'Natural Lapis Lazuli gemstones',
    'Lapis Lazuli Al Ain Rosette Signature Strands',
    'Lapis Lazuli',
    'Natural variations in blue tone, pyrite inclusions and markings are part of what makes every Signature Strand unique.',
  ),
  'signature-strand-sunstone': buildRosettePdp(
    'Sunstone Al Ain Rosette Signature Strands',
    'The Sunstone Al Ain Rosette Signature Strands bring together natural gemstones, Emirati inspiration and contemporary design in one of Bint Saeed’s signature House Codes. Hand-assembled in Abu Dhabi from natural Sunstone and hand-carved Carnelian Al Ain Rosettes, they offer a refined way to transform selected Bint Saeed garments through one thoughtful detail.',
    'Sunstone is admired for its warm peach-orange glow and delicate aventurescence, which lends a soft lit-from-within shimmer to every strand. Between every gemstone, faceted gold-plated Hematite accents catch and reflect light with every movement, adding subtle brilliance throughout the composition.',
    'Together with the warm radiance of Sunstone, it creates a striking balance between colour, craftsmanship and cultural inspiration.',
    'Sunstone is sourced from regions including India, Norway and the United States, and is appreciated for its warm peach-orange palette and gentle internal sparkle.',
    'Natural Sunstone gemstone beads (approximately 5 mm)',
    'Natural Sunstone gemstones',
    'Sunstone Al Ain Rosette Signature Strands',
    'Sunstone',
    'Natural variations in glow, tone and inclusions are part of what makes every Signature Strand unique.',
  ),
  'signature-strand-rose-quartz': buildRosettePdp(
    'Rose Quartz Al Ain Rosette Signature Strands',
    'The Rose Quartz Al Ain Rosette Signature Strands bring together natural gemstones, Emirati inspiration and contemporary design in one of Bint Saeed’s signature House Codes. Hand-assembled in Abu Dhabi from natural Rose Quartz and hand-carved Carnelian Al Ain Rosettes, they offer a refined way to transform selected Bint Saeed garments through one thoughtful detail.',
    'Rose Quartz is admired for its soft blush tones and luminous, romantic character, bringing a gentle warmth to every strand. Between every gemstone, faceted gold-plated Hematite accents catch and reflect light with every movement, adding subtle brilliance throughout the composition.',
    'Together with the blush tones of Rose Quartz, it creates a striking balance between colour, craftsmanship and cultural inspiration.',
    'Rose Quartz is sourced from regions including Brazil, Madagascar and South Africa, and is treasured for its delicate pink hues and natural translucence.',
    'Natural Rose Quartz gemstone beads (approximately 5 mm)',
    'Natural Rose Quartz gemstones',
    'Rose Quartz Al Ain Rosette Signature Strands',
    'Rose Quartz',
    'Natural variations in blush tone, clarity and markings are part of what makes every Signature Strand unique.',
  ),
  'signature-strand-malachite': buildRosettePdp(
    'Malachite Al Ain Rosette Signature Strands',
    'The Malachite Al Ain Rosette Signature Strands bring together natural gemstones, Emirati inspiration and contemporary design in one of Bint Saeed’s signature House Codes. Hand-assembled in Abu Dhabi from natural Malachite and hand-carved Carnelian Al Ain Rosettes, they offer a refined way to transform selected Bint Saeed garments through one thoughtful detail.',
    'Malachite is admired for its deep green tones and distinctive natural banding, giving every strand a bold yet refined presence. Between every gemstone, faceted gold-plated Hematite accents catch and reflect light with every movement, adding subtle brilliance throughout the composition.',
    'Together with the rich green of Malachite, it creates a striking balance between colour, craftsmanship and cultural inspiration.',
    'Malachite is sourced from regions including the Democratic Republic of the Congo, Zambia and Australia, and is valued for its saturated green colour and natural banded patterns.',
    'Natural Malachite gemstone beads (approximately 5 mm)',
    'Natural Malachite gemstones',
    'Malachite Al Ain Rosette Signature Strands',
    'Malachite',
    'Natural variations in green tone, banding and markings are part of what makes every Signature Strand unique.',
  ),
}
