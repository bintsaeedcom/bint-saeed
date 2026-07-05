import type { AlQuaaPhoneCharmId } from '@/lib/accessories/phoneCharmPdpContent'
import type { PhoneCharmPdpContentPack } from '@/lib/accessories/phoneCharmPdpContent'

const SHARED_FAQ_FR = [
  {
    question: 'Les pierres sont-elles naturelles ?',
    answer:
      'Oui. Chaque téléphone charm en pierres naturelles Bint Saeed est façonné à la main à partir de véritables gemmes naturelles. Chaque pierre étant unique, de légères variations de couleur, de motif et d’inclusions font partie de sa beauté naturelle.',
  },
  {
    question: 'Qu’est-ce que la rosette d’Al Ain ?',
    answer:
      'La rosette d’Al Ain est l’un des codes de la Maison Bint Saeed. Sculptée à la main dans du cornaline naturelle, elle s’inspire du paysage désertique chaleureux et des tons terreux d’Al Ain, l’oasis historique des Émirats arabes unis.',
  },
  {
    question: 'Comment entretenir mon téléphone charm en pierres naturelles ?',
    answer:
      'Évitez le contact avec l’eau, les parfums et les produits chimiques agressifs. Les pierres naturelles doivent être manipulées avec précaution, car elles peuvent s’ébrécher en cas de chute sur une surface dure. Essuyez délicatement avec un chiffon doux et sec si nécessaire.',
  },
] as const

const SHARED_DESIGN_FR = [
  'Téléphone charm assemblé à la main',
  'Accessoire élégant du quotidien',
  'Composition signature Bint Saeed en pierres naturelles',
]

const SHARED_HOUSE_FR = [
  'Rosette d’Al Ain signature',
  'Façonné à Abou Dabi, Émirats arabes unis',
]

const SHARED_CARE_FR = [
  'Évitez le contact avec l’eau, les parfums et les produits chimiques agressifs.',
  'Manipulez avec précaution. Les pierres naturelles peuvent s’ébrécher en cas de chute ou de choc.',
  'Essuyez délicatement avec un chiffon doux et sec si nécessaire.',
]

const SHARED_COMPATIBILITY_FR = [
  'Conçu pour les coques de téléphone compatibles avec points d’attache.',
  'Coque de téléphone non incluse.',
]

type StonePackInput = {
  stoneLabel: string
  productTitleStone: string
  gemstonePhrase: string
  introAccent: string
  variationNote: string
  naturalStoneBullets: string[]
}

function buildPhoneCharmPackFr({
  stoneLabel,
  productTitleStone,
  gemstonePhrase,
  introAccent,
  variationNote,
  naturalStoneBullets,
}: StonePackInput): PhoneCharmPdpContentPack {
  return {
    headline: `Téléphone charm Al Quaa — ${stoneLabel}`,
    introParagraphs: [
      'L’artisanat des pierres naturelles pour le quotidien.',
      `Le téléphone charm Bint Saeed en ${productTitleStone} est assemblé à la main à Abou Dabi avec ${gemstonePhrase}, des rosettes d’Al Ain en cornaline sculptées à la main et des perles d’hématite plaquées or à facettes qui captent la lumière à chaque mouvement. Inspiré du même langage de design signature que l’ensemble de la collection Bint Saeed, il transforme un essentiel du quotidien en une expression raffinée de savoir-faire.`,
      `Conçu pour se fixer aux coques compatibles, il apporte une touche distinctive d’artisanat en pierres naturelles à un accessoire essentiel. Associé à votre garde-robe Bint Saeed ou porté seul, il introduit ${introAccent} dans votre routine quotidienne.`,
      `Chaque pierre est unique, avec des variations naturelles de ${variationNote} qui rendent chaque téléphone charm singulier. Façonné pour vous accompagner partout où la journée vous mène, c’est un petit détail qui reflète la beauté d’un design réfléchi.`,
    ],
    design: [...SHARED_DESIGN_FR],
    naturalStones: naturalStoneBullets,
    houseSignatures: [...SHARED_HOUSE_FR],
    care: [...SHARED_CARE_FR],
    compatibility: [...SHARED_COMPATIBILITY_FR],
    colour: stoneLabel,
    faq: SHARED_FAQ_FR.map((item) => ({ ...item })),
  }
}

export const FR_PHONE_CHARM_PACKS: Record<AlQuaaPhoneCharmId, PhoneCharmPdpContentPack> = {
  'al-quaa-phone-charm-fuchsia-jade': buildPhoneCharmPackFr({
    stoneLabel: 'Jade fuchsia',
    productTitleStone: 'jade fuchsia',
    gemstonePhrase: 'des pierres de jade fuchsia éclatantes',
    introAccent: 'couleur, individualité et élégance intemporelle',
    variationNote: 'couleur et motif',
    naturalStoneBullets: [
      'Pierres de jade fuchsia naturelles authentiques',
      'Cornaline naturelle sculptée à la main',
      'Perles d’hématite plaquées or à facettes qui captent la lumière',
      'Les variations naturelles de couleur, de motif et d’inclusions rendent chaque pièce unique',
    ],
  }),
  'al-quaa-phone-charm-orange-jade': buildPhoneCharmPackFr({
    stoneLabel: 'Jade orange',
    productTitleStone: 'jade orange',
    gemstonePhrase: 'des pierres de jade orange lumineuses',
    introAccent: 'couleur chaude et vibrante, individualité et élégance intemporelle',
    variationNote: 'couleur et motif',
    naturalStoneBullets: [
      'Pierres de jade orange naturelles authentiques',
      'Cornaline naturelle sculptée à la main',
      'Perles d’hématite plaquées or à facettes qui captent la lumière',
      'Les variations naturelles de couleur, de motif et d’inclusions rendent chaque pièce unique',
    ],
  }),
  'al-quaa-phone-charm-onyx': buildPhoneCharmPackFr({
    stoneLabel: 'Onyx',
    productTitleStone: 'onyx',
    gemstonePhrase: 'des pierres d’onyx naturelles authentiques',
    introAccent: 'profondeur, individualité et élégance intemporelle',
    variationNote: 'couleur et motif',
    naturalStoneBullets: [
      'Pierres d’onyx naturelles authentiques',
      'Cornaline naturelle sculptée à la main',
      'Perles d’hématite plaquées or à facettes qui captent la lumière',
      'Les variations naturelles de couleur, de motif et d’inclusions rendent chaque pièce unique',
    ],
  }),
  'al-quaa-phone-charm-tiger-eye': buildPhoneCharmPackFr({
    stoneLabel: 'Œil de tigre',
    productTitleStone: 'œil de tigre',
    gemstonePhrase: 'des pierres d’œil de tigre naturelles authentiques',
    introAccent: 'tons dorés chauds, individualité et élégance intemporelle',
    variationNote: 'couleur, chatoyance et motif',
    naturalStoneBullets: [
      'Pierres d’œil de tigre naturelles authentiques',
      'Cornaline naturelle sculptée à la main',
      'Perles d’hématite plaquées or à facettes qui captent la lumière',
      'Les variations naturelles de couleur, de motif et de chatoyance rendent chaque pièce unique',
    ],
  }),
  'al-quaa-phone-charm-malachite': buildPhoneCharmPackFr({
    stoneLabel: 'Malachite',
    productTitleStone: 'malachite',
    gemstonePhrase: 'des pierres de malachite naturelles authentiques',
    introAccent: 'tons verts profonds, individualité et élégance intemporelle',
    variationNote: 'couleur, bandes et motif',
    naturalStoneBullets: [
      'Pierres de malachite naturelles authentiques',
      'Cornaline naturelle sculptée à la main',
      'Perles d’hématite plaquées or à facettes qui captent la lumière',
      'Les variations naturelles de couleur, de bandes et de motif rendent chaque pièce unique',
    ],
  }),
  'al-quaa-phone-charm-lapis-lazuli': buildPhoneCharmPackFr({
    stoneLabel: 'Lapis lazuli',
    productTitleStone: 'lapis lazuli',
    gemstonePhrase: 'des pierres de lapis lazuli naturelles authentiques',
    introAccent: 'tons bleu royal profond, individualité et élégance intemporelle',
    variationNote: 'couleur, inclusions naturelles de pyrite et motif',
    naturalStoneBullets: [
      'Pierres de lapis lazuli naturelles authentiques',
      'Cornaline naturelle sculptée à la main',
      'Perles d’hématite plaquées or à facettes qui captent la lumière',
      'Les variations naturelles de couleur, d’inclusions de pyrite et de motif rendent chaque pièce unique',
    ],
  }),
  'al-quaa-phone-charm-rose-quartz': buildPhoneCharmPackFr({
    stoneLabel: 'Quartz rose',
    productTitleStone: 'quartz rose',
    gemstonePhrase: 'des pierres de quartz rose naturelles authentiques',
    introAccent: 'tons blush doux, individualité et élégance intemporelle',
    variationNote: 'couleur, translucidité et motif',
    naturalStoneBullets: [
      'Pierres de quartz rose naturelles authentiques',
      'Cornaline naturelle sculptée à la main',
      'Perles d’hématite plaquées or à facettes qui captent la lumière',
      'Les variations naturelles de couleur, de translucidité et de motif rendent chaque pièce unique',
    ],
  }),
}
