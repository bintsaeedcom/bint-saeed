import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem } from '@/lib/products/productSchemaMeta'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'
import { FR_PHONE_CHARM_PACKS } from '@/lib/accessories/phoneCharmPdpContentFr'

export const AL_QUAA_PHONE_CHARM_IDS = [
  'al-quaa-phone-charm-fuchsia-jade',
  'al-quaa-phone-charm-orange-jade',
  'al-quaa-phone-charm-onyx',
  'al-quaa-phone-charm-tiger-eye',
  'al-quaa-phone-charm-malachite',
  'al-quaa-phone-charm-lapis-lazuli',
  'al-quaa-phone-charm-rose-quartz',
] as const

export type AlQuaaPhoneCharmId = (typeof AL_QUAA_PHONE_CHARM_IDS)[number]

const PHONE_CHARM_ID_SET = new Set<string>(AL_QUAA_PHONE_CHARM_IDS)

export function isAlQuaaPhoneCharmId(id: string): id is AlQuaaPhoneCharmId {
  return PHONE_CHARM_ID_SET.has(id)
}

export type PhoneCharmFaqItem = {
  question: string
  answer: string | string[]
}

export type PhoneCharmPdpContentPack = {
  headline: string
  introParagraphs: string[]
  design: string[]
  naturalStones: string[]
  houseSignatures: string[]
  care: string[]
  compatibility: string[]
  colour: string
  faq: PhoneCharmFaqItem[]
}

export function faqAnswerParagraphs(answer: string | string[]): string[] {
  return Array.isArray(answer) ? answer : [answer]
}

const SHARED_FAQ: PhoneCharmFaqItem[] = [
  {
    question: 'Are the gemstones natural?',
    answer:
      'Yes. Every Bint Saeed Natural Stone Phone Charm is handcrafted using genuine natural gemstones. As each stone is unique, slight variations in colour, pattern and inclusions are part of its natural beauty.',
  },
  {
    question: 'What is the Al Ain Rosette?',
    answer:
      'The Al Ain Rosette is one of Bint Saeed’s signature House Codes. Hand-carved from natural Carnelian, it draws inspiration from the warm desert landscape and rich earth tones of Al Ain, the historic oasis city of the United Arab Emirates.',
  },
  {
    question: 'How should I care for my Natural Stone Phone Charm?',
    answer:
      'Avoid contact with water, perfumes and harsh chemicals. Natural gemstones should be handled with care, as they may chip or break if dropped onto hard surfaces. Wipe gently with a soft, dry cloth when needed.',
  },
]

const SHARED_DESIGN = [
  'Hand-assembled phone charm',
  'Elegant everyday accessory',
  'Signature Bint Saeed natural stone composition',
]

const SHARED_HOUSE = [
  'Signature Al Ain Rosette',
  'Crafted in Abu Dhabi, United Arab Emirates',
]

const SHARED_CARE = [
  'Avoid contact with water, perfumes and harsh chemicals.',
  'Handle with care. Natural gemstones may chip or break if dropped onto hard surfaces or subjected to impact.',
  'Wipe gently with a soft, dry cloth when needed.',
]

const SHARED_COMPATIBILITY = [
  'Designed for compatible phone cases with attachment points.',
  'Phone case not included.',
]

type StonePackInput = {
  stoneLabel: string
  productTitleStone: string
  gemstonePhrase: string
  introAccent: string
  variationNote: string
  naturalStoneBullets: string[]
}

function buildPhoneCharmPack({
  stoneLabel,
  productTitleStone,
  gemstonePhrase,
  introAccent,
  variationNote,
  naturalStoneBullets,
}: StonePackInput): PhoneCharmPdpContentPack {
  const headline = `Al Quaa Phone Charm - ${stoneLabel}`

  return {
    headline,
    introParagraphs: [
      'Natural stone craftsmanship for the everyday.',
      `The Bint Saeed ${productTitleStone} Natural Stone Phone Charm is hand-assembled in Abu Dhabi using ${gemstonePhrase}, hand-carved Carnelian Al Ain Rosettes and faceted gold-plated hematite beads that reflect the light with every movement. Inspired by the same signature design language found throughout the Bint Saeed collection, it transforms an everyday essential into a refined expression of craftsmanship.`,
      `Designed to attach to compatible phone cases, it adds a distinctive touch of natural stone craftsmanship to an everyday essential. Whether paired with your Bint Saeed wardrobe or carried on its own, it introduces ${introAccent} into your daily routine.`,
      `Every gemstone is unique, with natural variations in ${variationNote} that make each phone charm one of a kind. Crafted to accompany you wherever the day leads, it is a small detail that reflects the beauty of thoughtful design.`,
    ],
    design: [...SHARED_DESIGN],
    naturalStones: naturalStoneBullets,
    houseSignatures: [...SHARED_HOUSE],
    care: [...SHARED_CARE],
    compatibility: [...SHARED_COMPATIBILITY],
    colour: stoneLabel,
    faq: SHARED_FAQ.map((item) => ({
      ...item,
      question: item.question,
      answer: item.answer,
    })),
  }
}

const EN_PACKS: Record<AlQuaaPhoneCharmId, PhoneCharmPdpContentPack> = {
  'al-quaa-phone-charm-fuchsia-jade': buildPhoneCharmPack({
    stoneLabel: 'Fuchsia Coloured Jade',
    productTitleStone: 'Fuchsia Jade',
    gemstonePhrase: 'vibrant Fuchsia Jade gemstones',
    introAccent: 'colour, individuality and timeless elegance',
    variationNote: 'colour and pattern',
    naturalStoneBullets: [
      'Genuine Fuchsia Coloured Jade gemstones',
      'Hand-carved Carnelian natural gemstone',
      'Faceted gold-plated hematite beads that reflect the light',
      'Natural variations in colour, pattern and inclusions make every piece unique',
    ],
  }),
  'al-quaa-phone-charm-orange-jade': buildPhoneCharmPack({
    stoneLabel: 'Orange Coloured Jade',
    productTitleStone: 'Orange Coloured Jade',
    gemstonePhrase: 'vibrant Orange Coloured Jade gemstones',
    introAccent: 'warm, vibrant colour, individuality and timeless elegance',
    variationNote: 'colour and pattern',
    naturalStoneBullets: [
      'Genuine Orange Coloured Jade gemstones',
      'Hand-carved Carnelian natural gemstone',
      'Faceted gold-plated hematite beads that reflect the light',
      'Natural variations in colour, pattern and inclusions make every piece unique',
    ],
  }),
  'al-quaa-phone-charm-onyx': buildPhoneCharmPack({
    stoneLabel: 'Onyx',
    productTitleStone: 'Onyx',
    gemstonePhrase: 'genuine Onyx gemstones',
    introAccent: 'depth, individuality and timeless elegance',
    variationNote: 'colour and pattern',
    naturalStoneBullets: [
      'Genuine Onyx gemstones',
      'Hand-carved Carnelian natural gemstone',
      'Faceted gold-plated hematite beads that reflect the light',
      'Natural variations in colour, pattern and inclusions make every piece unique',
    ],
  }),
  'al-quaa-phone-charm-tiger-eye': buildPhoneCharmPack({
    stoneLabel: 'Tiger Eye',
    productTitleStone: 'Tiger Eye',
    gemstonePhrase: 'genuine Tiger Eye gemstones',
    introAccent: 'rich golden-brown tones, individuality and timeless elegance',
    variationNote: 'colour, chatoyancy and pattern',
    naturalStoneBullets: [
      'Genuine Tiger Eye gemstones',
      'Hand-carved Carnelian natural gemstone',
      'Faceted gold-plated hematite beads that reflect the light',
      'Natural variations in colour, pattern and chatoyancy make every piece unique',
    ],
  }),
  'al-quaa-phone-charm-malachite': buildPhoneCharmPack({
    stoneLabel: 'Malachite',
    productTitleStone: 'Malachite',
    gemstonePhrase: 'genuine Malachite gemstones',
    introAccent: 'rich green tones, individuality and timeless elegance',
    variationNote: 'colour, banding and pattern',
    naturalStoneBullets: [
      'Genuine Malachite gemstones',
      'Hand-carved Carnelian natural gemstone',
      'Faceted gold-plated hematite beads that reflect the light',
      'Natural variations in colour, banding and pattern make every piece unique',
    ],
  }),
  'al-quaa-phone-charm-lapis-lazuli': buildPhoneCharmPack({
    stoneLabel: 'Lapis Lazuli',
    productTitleStone: 'Lapis Lazuli',
    gemstonePhrase: 'genuine Lapis Lazuli gemstones',
    introAccent: 'deep royal blue tones, individuality and timeless elegance',
    variationNote: 'colour, natural pyrite inclusions and pattern',
    naturalStoneBullets: [
      'Genuine Lapis Lazuli gemstones',
      'Hand-carved Carnelian natural gemstone',
      'Faceted gold-plated hematite beads that reflect the light',
      'Natural variations in colour, natural pyrite inclusions and pattern make every piece unique',
    ],
  }),
  'al-quaa-phone-charm-rose-quartz': buildPhoneCharmPack({
    stoneLabel: 'Rose Quartz',
    productTitleStone: 'Rose Quartz',
    gemstonePhrase: 'genuine Rose Quartz gemstones',
    introAccent: 'soft blush tones, individuality and timeless elegance',
    variationNote: 'colour, translucency and pattern',
    naturalStoneBullets: [
      'Genuine Rose Quartz gemstones',
      'Hand-carved Carnelian natural gemstone',
      'Faceted gold-plated hematite beads that reflect the light',
      'Natural variations in colour, translucency and pattern make every piece unique',
    ],
  }),
}

export function getPhoneCharmPdpContent(
  id: string,
  locale: AppLocale = 'en',
): PhoneCharmPdpContentPack | undefined {
  const canonicalId = resolveAccessoryId(id)
  if (!isAlQuaaPhoneCharmId(canonicalId)) return undefined
  if (locale === 'fr') return FR_PHONE_CHARM_PACKS[canonicalId]
  return EN_PACKS[canonicalId]
}

export function getPhoneCharmFaqForSchema(id: string, locale: AppLocale = 'en'): ProductFaqItem[] {
  const content = getPhoneCharmPdpContent(id, locale)
  if (!content?.faq.length) return []
  return content.faq.map((item) => ({
    question: item.question,
    answer: faqAnswerParagraphs(item.answer).join(' '),
  }))
}
