import type { NecklaceEarringPdpContentPack } from '@/lib/accessories/necklaceEarringPdpContent'
import {
  JEWELLERY_CARE_FAQ_EARRING_FR,
  JEWELLERY_CARE_FAQ_NECKLACE_FR,
  JEWELLERY_CARE_FR,
  JEWELLERY_CARE_LEAD_FR,
} from '@/lib/accessories/jewelleryCareCopyI18n'

const CARE_LEAD_FR = JEWELLERY_CARE_LEAD_FR
const CARE_FR = JEWELLERY_CARE_FR

type NecklaceFrPackInput = {
  fullNameFr: string
  introParagraphs: string[]
  beadFeature: string
  uniquenessFeature: string
  strandNameFr: string
  /** Overrides default “boucles d’oreilles rosette d’Al Ain + strand” feature line. */
  coordinateFeature?: string
  madeFromAnswer: [string, string]
  wearWaysAnswer?: string
}

function buildNecklacePackFr(input: NecklaceFrPackInput): NecklaceEarringPdpContentPack {
  const {
    fullNameFr,
    introParagraphs,
    beadFeature,
    uniquenessFeature,
    strandNameFr,
    coordinateFeature,
    madeFromAnswer,
    wearWaysAnswer = 'Oui. Le collier peut être porté en longueur simple ou doublé autour du cou pour une silhouette plus courte et superposée.',
  } = input

  return {
    introParagraphs,
    featuresTitle: 'Caractéristiques',
    features: [
      'Bint Saeed Signature House Codes: Al Ain Rosette',
      'Façonné à la main à Abou Dabi, Émirats arabes unis',
      beadFeature,
      'Perles d’hématite plaquées or intégrées dans le design',
      'Rosette d’Al Ain signature sculptée à la main dans du cornaline naturelle (environ 15 mm)',
      'Design convertible : port long ou doublé autour du cou',
      'Fermoir signature doré avec chaîne d’extension ajustable',
      uniquenessFeature,
      coordinateFeature ??
        `Conçu pour s’accorder avec les boucles d’oreilles rosette d’Al Ain et le ${strandNameFr}`,
      'Présenté dans un écrin cadeau signature Bint Saeed',
    ],
    careLead: CARE_LEAD_FR,
    care: [...CARE_FR],
    faq: [
      {
        question: `De quoi est composé le ${fullNameFr} ?`,
        answer: madeFromAnswer,
      },
      {
        question: 'Qu’est-ce que la rosette d’Al Ain ?',
        answer: '', // overwritten via /the-codes in getNecklaceEarringPdpContent
      },
      {
        question: 'Existe-t-il un Signature Strand assorti ?',
        answer: `Oui. Le ${strandNameFr} a été conçu pour compléter le collier et peut être fixé à des abayas, robes et pièces de tailleur Bint Saeed sélectionnées, permettant à vos bijoux et vêtements de partager les mêmes détails en pierres naturelles. Associé aux boucles d’oreilles rosette d’Al Ain assorties, il compose une expression complète de la collection pierres naturelles de la Maison.`,
      },
      {
        question: 'Le collier peut-il être porté de différentes manières ?',
        answer: wearWaysAnswer,
      },
      {
        question: 'Chaque collier est-il identique ?',
        answer:
          'Non. Chaque création Bint Saeed met en valeur des pierres naturelles. Les variations de couleur, de veinure et de caractère naturel font partie de l’individualité de chaque pièce et constituent la marque des matériaux naturels.',
      },
      {
        question: 'Où le collier est-il fabriqué ?',
        answer: `Chaque ${fullNameFr} est façonné à la main à Abou Dabi, Émirats arabes unis.`,
      },
      {
        question: 'Le collier est-il livré dans un écrin cadeau ?',
        answer: `Oui. Chaque ${fullNameFr} est présenté dans un écrin cadeau signature Bint Saeed, idéal pour offrir ou conserver précieusement.`,
      },
      {
        question: 'Comment entretenir mon collier ?',
        answer:
          JEWELLERY_CARE_FAQ_NECKLACE_FR,
      },
    ],
  }
}

export const FR_NECKLACE_PDP_BY_ID: Record<string, NecklaceEarringPdpContentPack> = {
  'al-ain-oasis-necklace-malachite': buildNecklacePackFr({
    fullNameFr: 'Collier Al Ain Oasis — Malachite',
    introParagraphs: [
      'Certaines pièces deviennent partie de la façon dont l’on vous reconnaît. Le Collier Al Ain Oasis — Malachite est enfilé à la main avec des pierres de malachite naturelles, rehaussé de perles d’hématite plaquées or et terminé par la rosette d’Al Ain signature de la Maison, sculptée à la main dans du cornaline naturelle. Conçu pour s’adapter à chaque occasion, il peut être porté en longueur simple ou doublé autour du cou pour une silhouette plus courte et superposée.',
      'Les pierres naturelles sont depuis longtemps précieuses pour leur individualité. La profondeur de leur couleur, leurs veines distinctives et leur caractère organique apportent une richesse que seule la nature peut créer, rendant chaque collier aussi unique que la femme qui le porte.',
      'Façonné à la main à Abou Dabi, le collier associe des pierres naturelles à l’un des codes de la Maison Bint Saeed. Inspirée des tons chauds du désert entourant Al Ain, la rosette d’Al Ain apparaît dans les collections joaillières et prêt-à-porter de la Maison comme expression signature du langage de design Bint Saeed.',
      'Complétez l’ensemble en associant le collier aux boucles d’oreilles rosette d’Al Ain assorties et aux Signature Strands Bint Saeed de la Maison.',
    ],
    beadFeature: 'Perles de malachite naturelle enfilées à la main (environ 5 mm)',
    uniquenessFeature:
      'Chaque pierre naturelle est unique par sa couleur, ses veines et son caractère naturel',
    strandNameFr: 'Signature Strand malachite rosette d’Al Ain',
    madeFromAnswer: [
      'Le collier est façonné à la main avec des perles de malachite naturelle, des perles d’hématite plaquées or et la rosette d’Al Ain signature de la Maison, sculptée à la main dans du cornaline naturelle. Il est terminé par un fermoir doré et une chaîne d’extension ajustable.',
      'La malachite est une pierre naturelle formée sur des milliers d’années dans des régions riches en cuivre. Célébrée pour ses bandes vertes distinctives et la profondeur de sa couleur, chaque perle de malachite est unique, garantissant qu’aucune création Bint Saeed n’est jamais exactement identique à une autre.',
    ],
    wearWaysAnswer:
      'Oui. Le Collier Al Ain Oasis — Malachite est conçu pour être porté en longueur simple ou doublé autour du cou pour une silhouette plus courte et superposée.',
  }),
  'al-ain-oasis-necklace-rose-quartz': buildNecklacePackFr({
    fullNameFr: 'Collier Al Ain Oasis — Quartz rose',
    introParagraphs: [
      'Élégant dans sa simplicité, le Collier Al Ain Oasis — Quartz rose réunit la beauté douce du quartz rose naturel avec la rosette d’Al Ain signature de la Maison, sculptée à la main dans du cornaline naturelle. Délicatement rehaussé de perles d’hématite plaquées or, le collier peut être porté en longueur simple ou doublé autour du cou pour une silhouette plus superposée.',
      'Prisées depuis des siècles, les pierres naturelles sont admirées pour leur individualité. Les tons blush doux du quartz rose, associés à la chaleur de la cornaline et aux accents dorés lumineux, composent une harmonie à la fois intemporelle et distinctive. Chaque pierre étant formée par la nature, chaque collier possède sa propre couleur, ses veines et son caractère uniques.',
      'Façonné à la main à Abou Dabi, le collier reflète l’attention de Bint Saeed pour les matériaux naturels et un savoir-faire durable. Complétez l’ensemble avec les boucles d’oreilles rosette d’Al Ain assorties et le Signature Strand quartz rose rosette d’Al Ain, conçu pour accompagner des abayas, robes et pièces de tailleur Bint Saeed sélectionnées.',
    ],
    beadFeature: 'Perles de quartz rose naturel (environ 5 mm)',
    uniquenessFeature:
      'Chaque pierre naturelle est unique par sa couleur, ses veines et son caractère naturel',
    strandNameFr: 'Signature Strand quartz rose rosette d’Al Ain',
    madeFromAnswer: [
      'Le collier est façonné à la main avec des perles de quartz rose naturel, des perles d’hématite plaquées or et la rosette d’Al Ain signature de la Maison, sculptée à la main dans du cornaline naturelle. Il est terminé par un fermoir doré et une chaîne d’extension ajustable.',
      'Le quartz rose est une variété naturelle de quartz, admirée pour ses tons rose délicats et sa translucidité subtile. Chaque pierre est unique, faisant de chaque collier Bint Saeed une pièce singulière.',
    ],
  }),
  'al-ain-oasis-necklace-lapis-lazuli': buildNecklacePackFr({
    fullNameFr: 'Collier Al Ain Oasis — Lapis lazuli',
    introParagraphs: [
      'Riche en couleur et en caractère naturel, le Collier Al Ain Oasis — Lapis lazuli est enfilé à la main avec des pierres de lapis lazuli naturelles, rehaussé de perles d’hématite plaquées or et terminé par la rosette d’Al Ain signature de la Maison, sculptée à la main dans du cornaline naturelle. Conçu pour la polyvalence, il peut être porté en longueur simple ou doublé autour du cou pour une silhouette plus superposée.',
      'Précieux depuis l’Antiquité, le lapis lazuli est admiré pour son bleu royal profond et ses inclusions naturelles de pyrite dorée. Associé à la chaleur de la cornaline et aux accents dorés lumineux, chaque collier reflète l’individualité que seules les pierres naturelles peuvent offrir. Aucune création n’est jamais exactement identique.',
      'Façonné à la main à Abou Dabi, le collier reflète l’attention de Bint Saeed pour les matériaux naturels et un savoir-faire durable. Complétez l’ensemble avec les boucles d’oreilles rosette d’Al Ain assorties et le Signature Strand lapis lazuli rosette d’Al Ain, conçu pour accompagner des abayas, robes et pièces de tailleur Bint Saeed sélectionnées.',
    ],
    beadFeature: 'Perles de lapis lazuli naturel (environ 5 mm)',
    uniquenessFeature:
      'Chaque pierre naturelle affiche sa propre couleur, ses veines et ses inclusions de pyrite',
    strandNameFr: 'Signature Strand lapis lazuli rosette d’Al Ain',
    madeFromAnswer: [
      'Le collier est façonné à la main avec des perles de lapis lazuli naturel, des perles d’hématite plaquées or et la rosette d’Al Ain signature de la Maison, sculptée à la main dans du cornaline naturelle. Il est terminé par un fermoir doré et une chaîne d’extension ajustable.',
      'Le lapis lazuli est une pierre naturelle prisée pour son bleu royal intense et ses inclusions distinctives de pyrite dorée. Chaque pierre est unique, conférant à chaque collier Bint Saeed son propre caractère.',
    ],
  }),
  'al-ain-oasis-necklace-sunstone': buildNecklacePackFr({
    fullNameFr: 'Collier Al Ain Oasis — Pierre de soleil',
    introParagraphs: [
      'Radieux par nature, le Collier Al Ain Oasis — Pierre de soleil est enfilé à la main avec des pierres de soleil naturelles, rehaussé de perles d’hématite plaquées or et terminé par la rosette d’Al Ain signature de la Maison, sculptée à la main dans du cornaline naturelle. Conçu pour la polyvalence, il peut être porté en longueur simple ou doublé autour du cou pour une silhouette plus courte.',
      'Les pierres naturelles sont admirées depuis des générations pour l’individualité qu’elles apportent à chaque création. Les tons pêche et dorés chauds de la pierre de soleil, rehaussés par son éclat naturel, s’accordent aux accents dorés lumineux et à la chaleur de la cornaline. Chaque pierre étant formée par la nature, chaque collier possède sa couleur, ses inclusions et son caractère distinctifs.',
      'Façonné à la main à Abou Dabi, le collier reflète l’attention de Bint Saeed pour les matériaux naturels et un savoir-faire durable. Complétez l’ensemble avec les boucles d’oreilles rosette d’Al Ain assorties et le Signature Strand pierre de soleil rosette d’Al Ain, conçu pour accompagner des abayas, robes et pièces de tailleur Bint Saeed sélectionnées.',
    ],
    beadFeature: 'Perles de pierre de soleil naturelle (environ 5 mm)',
    uniquenessFeature:
      'Chaque pierre naturelle affiche sa propre couleur, son éclat et son caractère naturel',
    strandNameFr: 'Signature Strand pierre de soleil rosette d’Al Ain',
    madeFromAnswer: [
      'Le collier est façonné à la main avec des perles de pierre de soleil naturelle, des perles d’hématite plaquées or et la rosette d’Al Ain signature de la Maison, sculptée à la main dans du cornaline naturelle. Il est terminé par un fermoir doré et une chaîne d’extension ajustable.',
      'La pierre de soleil est un feldspath naturel, admiré pour ses tons pêche, dorés et cuivrés, ainsi que pour son éclat naturel caractéristique appelé aventurescence. Chaque pierre est unique, conférant à chaque collier Bint Saeed son propre caractère.',
    ],
  }),
  'al-ain-oasis-necklace-tiger-eye': buildNecklacePackFr({
    fullNameFr: 'Collier Al Ain Oasis — Œil de tigre',
    introParagraphs: [
      'Distinctif par sa couleur et son caractère, le Collier Al Ain Oasis — Œil de tigre est enfilé à la main avec des pierres d’œil de tigre naturelles, rehaussé de perles d’hématite plaquées or et terminé par la rosette d’Al Ain signature de la Maison, sculptée à la main dans du cornaline naturelle. Conçu pour la polyvalence, il peut être porté en longueur simple ou doublé autour du cou pour une silhouette plus courte.',
      'Les pierres naturelles sont admirées depuis des générations pour leur individualité. Les tons dorés et bruns riches de l’œil de tigre, avec son lustre soyeux distinctif, composent une harmonie à la fois intemporelle et expressive. Chaque pierre étant formée par la nature, chaque collier possède sa couleur, sa chatoyance et son caractère naturel uniques.',
      'Façonné à la main à Abou Dabi, le collier reflète l’attention de Bint Saeed pour les matériaux naturels et un savoir-faire durable. Complétez l’ensemble avec les boucles d’oreilles signature et le Signature Strand œil de tigre, conçu pour accompagner des abayas, robes et pièces de tailleur Bint Saeed sélectionnées.',
    ],
    beadFeature: 'Perles d’œil de tigre naturel (environ 5 mm)',
    uniquenessFeature:
      'Chaque pierre naturelle affiche sa propre couleur, son lustre soyeux et son caractère naturel',
    strandNameFr: 'Signature Strand œil de tigre',
    coordinateFeature:
      'Conçu pour s’accorder avec les boucles d’oreilles signature et le Signature Strand œil de tigre',
    madeFromAnswer: [
      'Le collier est façonné à la main avec des perles d’œil de tigre naturel, des perles d’hématite plaquées or et la rosette d’Al Ain signature de la Maison, sculptée à la main dans du cornaline naturelle. Il est terminé par un fermoir doré et une chaîne d’extension ajustable.',
      'L’œil de tigre est une pierre naturelle admirée pour ses tons dorés et bruns riches et son effet optique soyeux distinctif, appelé chatoyance, qui crée une bande de lumière mouvante à la surface. Chaque pierre est unique, conférant à chaque collier Bint Saeed son propre caractère.',
    ],
  }),
  'al-ain-oasis-necklace-onyx': buildNecklacePackFr({
    fullNameFr: 'Collier Al Ain Oasis — Onyx',
    introParagraphs: [
      'Raffiné dans sa simplicité, le Collier Al Ain Oasis — Onyx est enfilé à la main avec des pierres d’onyx noir naturel, rehaussé de perles d’hématite plaquées or et terminé par la rosette d’Al Ain signature de la Maison, sculptée à la main dans du cornaline naturelle. Conçu pour la polyvalence, il peut être porté en longueur simple ou doublé autour du cou pour une silhouette plus courte.',
      'Les pierres naturelles sont admirées depuis des générations pour leur individualité. Les tons noirs profonds de l’onyx créent un contraste saisissant avec la chaleur de la cornaline et les accents dorés lumineux, pour une composition à la fois intemporelle et distinctive. Chaque pierre étant formée par la nature, chaque collier possède son caractère subtil et sa beauté naturelle propres.',
      'Façonné à la main à Abou Dabi, le collier reflète l’attention de Bint Saeed pour les matériaux naturels et un savoir-faire durable. Complétez l’ensemble avec les boucles d’oreilles signature et le Signature Strand onyx, conçu pour accompagner des abayas, robes et pièces de tailleur Bint Saeed sélectionnées.',
    ],
    beadFeature: 'Perles d’onyx noir naturel (environ 5 mm)',
    uniquenessFeature:
      'Chaque pierre naturelle est unique par sa tonalité et son caractère naturel',
    strandNameFr: 'Signature Strand onyx',
    coordinateFeature:
      'Conçu pour s’accorder avec les boucles d’oreilles signature et le Signature Strand onyx',
    madeFromAnswer: [
      'Le collier est façonné à la main avec des perles d’onyx noir naturel, des perles d’hématite plaquées or et la rosette d’Al Ain signature de la Maison, sculptée à la main dans du cornaline naturelle. Il est terminé par un fermoir doré et une chaîne d’extension ajustable.',
      'L’onyx est une variété naturelle de calcédoine, admirée pour sa couleur noire profonde et sa finition polie lisse. Chaque pierre est unique, conférant à chaque collier Bint Saeed son propre caractère.',
    ],
  }),
}

type EarringFrPackInput = {
  fullNameFr: string
  introParagraphs: string[]
  stoneFeature: string | string[]
  necklaceNameFr: string
  madeFromAnswer: [string, string]
  strandNameFr?: string
  handcraftedFeature?: string
  extraFeatures?: string[]
  claspFeature?: string
  uniquenessFeature?: string
  identicalAnswer?: string
}

function asFeatureListFr(value: string | string[]): string[] {
  return Array.isArray(value) ? value : [value]
}

function buildEarringPackFr(input: EarringFrPackInput): NecklaceEarringPdpContentPack {
  const {
    fullNameFr,
    introParagraphs,
    stoneFeature,
    necklaceNameFr,
    madeFromAnswer,
    strandNameFr,
    handcraftedFeature = 'Assemblé à la main à Abou Dabi, Émirats arabes unis',
    extraFeatures = [],
    claspFeature = 'Fermoir et tige dorés pour un port confortable',
    uniquenessFeature =
      'Chaque pierre naturelle est unique par sa couleur, son motif et ses inclusions',
    identicalAnswer =
      'Non. Chaque création Bint Saeed met en valeur des pierres naturelles. Les variations de couleur, de motif et d’inclusions font partie de l’individualité de chaque pièce et doivent être célébrées comme la marque des matériaux naturels.',
  } = input

  const strandAnswer = strandNameFr
    ? strandNameFr.toLowerCase().includes('strands')
      ? `Oui. Les ${strandNameFr} ont été conçus pour compléter les boucles d’oreilles et peuvent être fixés à des abayas, robes et pièces de tailleur Bint Saeed sélectionnées.`
      : `Oui. Le ${strandNameFr} a été conçu pour compléter les boucles d’oreilles et peut être fixé à des abayas, robes et pièces de tailleur Bint Saeed sélectionnées.`
    : 'Oui. Un Signature Strand assorti peut compléter les boucles d’oreilles et s’attacher à des abayas, robes et pièces de tailleur Bint Saeed sélectionnées.'

  const coordinateFeature = strandNameFr
    ? strandNameFr.toLowerCase().includes('strands')
      ? `Conçu pour s’accorder avec le ${necklaceNameFr} et les Signature Strands Bint Saeed`
      : `Conçu pour s’accorder avec le ${necklaceNameFr} et le ${strandNameFr}`
    : `Conçu pour s’accorder avec le ${necklaceNameFr}`

  return {
    introParagraphs,
    featuresTitle: 'Caractéristiques',
    features: [
      'Bint Saeed Signature House Codes: Al Ain Rosette',
      handcraftedFeature,
      ...asFeatureListFr(stoneFeature),
      'Perles d’hématite plaquées or facettées qui captent la lumière',
      'Rosette d’Al Ain signature sculptée à la main dans du cornaline naturelle (environ 15 mm)',
      ...extraFeatures,
      claspFeature,
      uniquenessFeature,
      coordinateFeature,
      'Présenté dans un écrin cadeau signature Bint Saeed',
    ],
    careLead: CARE_LEAD_FR,
    care: [...CARE_FR],
    faq: [
      {
        question: `De quoi sont composées les ${fullNameFr} ?`,
        answer: madeFromAnswer,
      },
      {
        question: 'Qu’est-ce que la rosette d’Al Ain ?',
        answer: '', // overwritten via /the-codes in getNecklaceEarringPdpContent
      },
      {
        question: 'Existe-t-il un collier assorti ?',
        answer: `Oui. Le ${necklaceNameFr} a été conçu pour compléter les boucles d’oreilles et créer un ensemble harmonieux.`,
      },
      {
        question: 'Existe-t-il un Signature Strand assorti ?',
        answer: strandAnswer,
      },
      {
        question: 'Chaque paire est-elle identique ?',
        answer: identicalAnswer,
      },
      {
        question: 'Où sont fabriquées les boucles d’oreilles ?',
        answer:
          'Chaque paire est assemblée à la main à Abou Dabi, aux Émirats arabes unis, selon les standards de savoir-faire et de qualité de Bint Saeed.',
      },
      {
        question: 'Les boucles d’oreilles sont-elles livrées dans un écrin cadeau ?',
        answer: `Oui. Les ${fullNameFr} sont présentées dans un écrin cadeau signature Bint Saeed, idéal pour offrir ou conserver précieusement.`,
      },
      {
        question: 'Comment entretenir mes boucles d’oreilles ?',
        answer: JEWELLERY_CARE_FAQ_EARRING_FR,
      },
    ],
  }
}

export const FR_EARRING_PDP_BY_ID: Record<string, NecklaceEarringPdpContentPack> = {
  'al-ain-oasis-earrings-malachite': buildEarringPackFr({
    fullNameFr: 'Boucles d’oreilles Al Ain Oasis — Malachite',
    introParagraphs: [
      'La touche finale qui rassemble le tout.',
      'Certaines pièces complètent une tenue. D’autres deviennent partie de la façon dont l’on se souvient de vous.',
      'Les Boucles d’oreilles Al Ain Oasis — Malachite sont assemblées à la main à Abou Dabi, Émirats arabes unis, associant de véritables pierres de malachite et de pierre de soleil à une rosette d’Al Ain sculptée à la main dans du cornaline, de l’hématite plaquée or facettée qui captive la lumière, et une zirconia brillante sertie dans du cuivre sans nickel plaqué or 14 carats.',
      'Créées pour accompagner le Collier Al Ain Oasis — Malachite et les Signature Strands Bint Saeed, chaque pièce appartient à une collection conçue pour être portée ensemble ou chérie seule. Le résultat est une joaillerie réfléchie, polyvalente et indéniablement Bint Saeed.',
      'Associées à une abaya fluide, à une tenue du soir raffinée ou à vos pièces du quotidien préférées, les Boucles d’oreilles Al Ain Oasis apportent chaleur, couleur et savoir-faire à chaque allure. Leurs proportions équilibrées mettent en valeur les pierres naturelles tout en restant assez légères pour être portées du matin au soir.',
      'Chaque pierre est naturellement unique, portant ses propres variations de couleur, de motif et d’inclusions. Assemblées avec soin à Abou Dabi, ces boucles d’oreilles constituent un cadeau significatif pour un anniversaire, l’Aïd, une remise de diplôme, un anniversaire de mariage, ou simplement pour célébrer une personne chère.',
      'Assez élégantes pour les grandes occasions. Assez polyvalentes pour chaque jour. Assez distinctives pour devenir partie de votre style signature.',
    ],
    stoneFeature: ['Véritable malachite', 'Véritable pierre de soleil'],
    handcraftedFeature:
      'Boucles d’oreilles pendantes en pierres naturelles assemblées à la main à Abou Dabi, Émirats arabes unis',
    extraFeatures: [
      'Cuivre sans nickel plaqué or 14 carats',
      'Silhouette légère conçue pour un port confortable toute la journée',
      'Longueur de chute : 5,5 cm (2,17 in)',
    ],
    claspFeature: 'Fermoir leverback pavé de zirconia',
    necklaceNameFr: 'Collier Al Ain Oasis — Malachite',
    strandNameFr: 'Signature Strands Bint Saeed',
    madeFromAnswer: [
      'Chaque paire associe de véritables pierres de malachite et de pierre de soleil, une rosette d’Al Ain sculptée à la main dans du cornaline, de l’hématite plaquée or facettée, et une zirconia brillante sertie dans du cuivre sans nickel plaqué or 14 carats, terminée par un fermoir leverback pavé de zirconia.',
      'Chaque pierre est naturellement unique, portant ses propres variations de couleur, de motif et d’inclusions, rendant chaque paire unique en son genre.',
    ],
  }),
  'al-quaa-earrings-rose-quartz': buildEarringPackFr({
    fullNameFr: 'Boucles d’oreilles Al Quaa — Quartz rose',
    introParagraphs: [
      'La touche finale qui rassemble le tout.',
      'Les Boucles d’oreilles Al Quaa — Quartz rose sont conçues pour les femmes qui savent que les plus petits détails laissent souvent la plus forte impression. Assemblées à la main à Abou Dabi, Émirats arabes unis, chaque paire associe de véritables pierres de quartz rose, une rosette d’Al Ain sculptée à la main dans du cornaline, des perles d’hématite plaquées or facettées qui captent la lumière, et une zirconia rose délicate sertie dans du laiton plaqué or 18 carats.',
      'Conçues pour s’accorder naturellement avec le Collier Al Ain Oasis — Quartz rose et les Signature Strands Bint Saeed, chaque pièce est créée pour compléter la suivante, facilitant la constitution d’une collection joaillière harmonieuse au fil du temps. Associées à une abaya Bint Saeed ou à vos pièces du quotidien préférées, ces boucles d’oreilles en pierres naturelles apportent chaleur, savoir-faire et élégance intemporelle à chaque allure.',
      'Chaque pierre naturelle est unique, avec sa propre couleur, son motif et ses inclusions, rendant chaque paire unique en son genre. Assemblées avec soin à Abou Dabi, elles constituent un cadeau significatif pour un anniversaire, l’Aïd, une remise de diplôme, un anniversaire de mariage, ou simplement pour célébrer une personne chère.',
      'Assez élégantes pour les grandes occasions. Assez polyvalentes pour le quotidien. Assez distinctives pour rester en mémoire.',
    ],
    stoneFeature: 'Véritables pierres de quartz rose',
    handcraftedFeature:
      'Boucles d’oreilles pendantes en pierres naturelles assemblées à la main à Abou Dabi, Émirats arabes unis',
    extraFeatures: [
      'Laiton plaqué or 18 carats',
      'Silhouette élégante et légère conçue pour un port confortable toute la journée',
      'Longueur de chute : 4 cm (1,57 in)',
    ],
    claspFeature: 'Clou en zirconia rose taille poire',
    necklaceNameFr: 'Collier Al Ain Oasis — Quartz rose',
    strandNameFr: 'Signature Strands Bint Saeed',
    madeFromAnswer: [
      'Chaque paire associe de véritables pierres de quartz rose, une rosette d’Al Ain sculptée à la main dans du cornaline, des perles d’hématite plaquées or facettées, et un clou en zirconia rose taille poire serti dans du laiton plaqué or 18 carats.',
      'Chaque pierre naturelle est unique, avec sa propre couleur, son motif et ses inclusions, rendant chaque paire unique en son genre.',
    ],
  }),
  'al-ain-oasis-earrings-orange-jade': buildEarringPackFr({
    fullNameFr: 'Boucles d’oreilles Al Ain Oasis — Jade orange',
    introParagraphs: [
      'La touche finale qui rassemble le tout.',
      'Certaines pièces complètent une tenue. D’autres deviennent partie de la façon dont l’on se souvient de vous.',
      'Les Boucles d’oreilles Al Ain Oasis — Jade orange sont assemblées à la main à Abou Dabi, Émirats arabes unis, associant de véritables pierres de jade orange et de pierre de soleil à une rosette d’Al Ain sculptée à la main dans du cornaline, de l’hématite plaquée or facettée qui captive la lumière, et une zirconia brillante sertie dans du cuivre sans nickel plaqué or 14 carats.',
      'Créées pour accompagner le Collier Al Ain Oasis — Jade orange et les Signature Strands Bint Saeed, chaque pièce appartient à une collection conçue pour être portée ensemble ou chérie seule. Le résultat est une joaillerie réfléchie, polyvalente et indéniablement Bint Saeed.',
      'Associées à une abaya fluide, à une tenue du soir raffinée ou à vos pièces du quotidien préférées, les Boucles d’oreilles Al Ain Oasis apportent chaleur, couleur et savoir-faire à chaque allure. Les riches tons orange du jade sont complétés par l’éclat naturel de la pierre de soleil, créant une composition inspirée du paysage désertique chaud entourant la ville oasis historique d’Al Ain.',
      'Chaque pierre est naturellement unique, portant ses propres variations de couleur, de motif et d’inclusions. Assemblées avec soin à Abou Dabi, ces boucles d’oreilles constituent un cadeau significatif pour un anniversaire, l’Aïd, une remise de diplôme, un anniversaire de mariage, ou simplement pour célébrer une personne chère.',
      'Assez élégantes pour les grandes occasions. Assez polyvalentes pour chaque jour. Assez distinctives pour devenir partie de votre style signature.',
    ],
    stoneFeature: ['Véritable jade orange', 'Véritable pierre de soleil'],
    handcraftedFeature:
      'Boucles d’oreilles pendantes en pierres naturelles assemblées à la main à Abou Dabi, Émirats arabes unis',
    extraFeatures: [
      'Cuivre sans nickel plaqué or 14 carats',
      'Silhouette légère conçue pour un port confortable toute la journée',
      'Longueur de chute : 5,5 cm (2,17 in)',
    ],
    claspFeature: 'Fermoir leverback pavé de zirconia',
    necklaceNameFr: 'Collier Al Ain Oasis — Jade orange',
    strandNameFr: 'Signature Strands Bint Saeed',
    madeFromAnswer: [
      'Chaque paire associe de véritables pierres de jade orange et de pierre de soleil, une rosette d’Al Ain sculptée à la main dans du cornaline, de l’hématite plaquée or facettée, et une zirconia brillante sertie dans du cuivre sans nickel plaqué or 14 carats, terminée par un fermoir leverback pavé de zirconia.',
      'Chaque pierre est naturellement unique, portant ses propres variations de couleur, de motif et d’inclusions, rendant chaque paire unique en son genre.',
    ],
  }),
  'al-quaa-earrings-lapis-lazuli': buildEarringPackFr({
    fullNameFr: 'Boucles d’oreilles Al Quaa — Lapis lazuli',
    introParagraphs: [
      'La touche finale qui rassemble le tout.',
      'Les Boucles d’oreilles Al Quaa — Lapis lazuli sont conçues pour les femmes qui savent que les plus petits détails laissent souvent la plus forte impression. Assemblées à la main à Abou Dabi, Émirats arabes unis, chaque paire associe de véritables pierres de lapis lazuli, une rosette d’Al Ain sculptée à la main dans du cornaline, des perles d’hématite plaquées or facettées qui captent la lumière, et une zirconia transparente brillante sertie dans du laiton plaqué or 18 carats.',
      'Conçues pour s’accorder naturellement avec le Collier Al Ain Oasis — Lapis lazuli et les Signature Strands Bint Saeed, chaque pièce est créée pour compléter la suivante, facilitant la constitution d’une collection joaillière harmonieuse au fil du temps. Associées à une abaya Bint Saeed ou à vos pièces du quotidien préférées, ces boucles d’oreilles en pierres naturelles apportent profondeur, savoir-faire et élégance intemporelle à chaque allure.',
      'Chaque pierre naturelle est unique, avec sa propre couleur, son motif et ses inclusions naturelles de pyrite, rendant chaque paire unique en son genre. Assemblées avec soin à Abou Dabi, elles constituent un cadeau significatif pour un anniversaire, l’Aïd, une remise de diplôme, un anniversaire de mariage, ou simplement pour célébrer une personne chère.',
      'Assez élégantes pour les grandes occasions. Assez polyvalentes pour le quotidien. Assez distinctives pour rester en mémoire.',
    ],
    stoneFeature: 'Véritables pierres de lapis lazuli',
    handcraftedFeature:
      'Boucles d’oreilles pendantes en pierres naturelles assemblées à la main à Abou Dabi, Émirats arabes unis',
    extraFeatures: [
      'Laiton plaqué or 18 carats',
      'Silhouette élégante et légère conçue pour un port confortable toute la journée',
      'Longueur de chute : 4 cm (1,57 in)',
    ],
    claspFeature: 'Clou en zirconia transparente taille poire',
    uniquenessFeature:
      'Chaque pierre naturelle est unique par sa couleur, son motif et ses inclusions naturelles de pyrite',
    identicalAnswer:
      'Non. Chaque création Bint Saeed met en valeur des pierres naturelles. Les variations de couleur, de motif et d’inclusions naturelles de pyrite font partie de l’individualité de chaque pièce et doivent être célébrées comme la marque des matériaux naturels.',
    necklaceNameFr: 'Collier Al Ain Oasis — Lapis lazuli',
    strandNameFr: 'Signature Strands Bint Saeed',
    madeFromAnswer: [
      'Chaque paire associe de véritables pierres de lapis lazuli, une rosette d’Al Ain sculptée à la main dans du cornaline, des perles d’hématite plaquées or facettées, et un clou en zirconia transparente taille poire serti dans du laiton plaqué or 18 carats.',
      'Chaque pierre naturelle est unique, avec sa propre couleur, son motif et ses inclusions naturelles de pyrite, rendant chaque paire unique en son genre.',
    ],
  }),
}
