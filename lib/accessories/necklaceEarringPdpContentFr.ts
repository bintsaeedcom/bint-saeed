import type { NecklaceEarringPdpContentPack } from '@/lib/accessories/necklaceEarringPdpContent'

const CARE_LEAD_FR =
  'Chaque création Bint Saeed est façonnée à la main à partir de pierres naturelles soigneusement sélectionnées. Chaque pierre étant unique, les variations de couleur, de veinure et de caractère naturel font partie de l’individualité de chaque pièce.'

const CARE_FR = [
  'Évitez le contact avec les parfums, les produits cosmétiques, l’eau et les produits chimiques domestiques.',
  'Après le port, essuyez délicatement avec un chiffon doux pour bijoux.',
  'Rangez séparément dans la pochette ou l’écrin Bint Saeed pour préserver la beauté de la pièce.',
] as const

const ROSETTE_FAQ_FR =
  'La rosette d’Al Ain est l’un des codes de la Maison Bint Saeed. Sculptée à la main dans du cornaline naturelle, elle s’inspire des tons chauds du désert entourant Al Ain, l’oasis historique d’Abou Dabi aux Émirats arabes unis. Entourée de palmeraies, de paysages montagneux et de siècles de patrimoine émirati, Al Ain est célébrée comme l’un des paysages culturels les plus précieux du pays. La rosette d’Al Ain porte cette inspiration à travers les collections joaillières et prêt-à-porter de la Maison.'

type NecklaceFrPackInput = {
  fullNameFr: string
  introParagraphs: string[]
  beadFeature: string
  uniquenessFeature: string
  strandNameFr: string
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
    madeFromAnswer,
    wearWaysAnswer = 'Oui. Le collier peut être porté en longueur simple ou doublé autour du cou pour une silhouette plus courte et superposée.',
  } = input

  return {
    introParagraphs,
    featuresTitle: 'Caractéristiques',
    features: [
      'Code de la Maison : rosette d’Al Ain',
      'Façonné à la main à Abou Dabi, Émirats arabes unis',
      beadFeature,
      'Perles d’hématite plaquées or intégrées dans le design',
      'Rosette d’Al Ain signature sculptée à la main dans du cornaline naturelle (environ 15 mm)',
      'Design convertible : port long ou doublé autour du cou',
      'Fermoir signature doré avec chaîne d’extension ajustable',
      uniquenessFeature,
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
        answer: ROSETTE_FAQ_FR,
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
          'Pour préserver sa beauté, évitez le contact avec les parfums, les produits cosmétiques, l’eau et les produits chimiques domestiques. Après le port, essuyez délicatement le collier avec un chiffon doux pour bijoux et rangez-le séparément dans sa pochette ou son écrin Bint Saeed.',
      },
    ],
  }
}

export const FR_NECKLACE_PDP_BY_ID: Record<string, NecklaceEarringPdpContentPack> = {
  'al-ain-rosette-necklace-malachite': buildNecklacePackFr({
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
  'al-ain-rosette-necklace-rose-quartz': buildNecklacePackFr({
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
  'al-ain-rosette-necklace-lapis-lazuli': buildNecklacePackFr({
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
  'al-ain-rosette-necklace-sunstone': buildNecklacePackFr({
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
  'al-ain-rosette-necklace-tiger-eye': buildNecklacePackFr({
    fullNameFr: 'Collier Al Ain Oasis — Œil de tigre',
    introParagraphs: [
      'Distinctif par sa couleur et son caractère, le Collier Al Ain Oasis — Œil de tigre est enfilé à la main avec des pierres d’œil de tigre naturelles, rehaussé de perles d’hématite plaquées or et terminé par la rosette d’Al Ain signature de la Maison, sculptée à la main dans du cornaline naturelle. Conçu pour la polyvalence, il peut être porté en longueur simple ou doublé autour du cou pour une silhouette plus courte.',
      'Les pierres naturelles sont admirées depuis des générations pour leur individualité. Les tons dorés et bruns riches de l’œil de tigre, avec son lustre soyeux distinctif, composent une harmonie à la fois intemporelle et expressive. Chaque pierre étant formée par la nature, chaque collier possède sa couleur, sa chatoyance et son caractère naturel uniques.',
      'Façonné à la main à Abou Dabi, le collier reflète l’attention de Bint Saeed pour les matériaux naturels et un savoir-faire durable. Complétez l’ensemble avec les boucles d’oreilles rosette d’Al Ain assorties et le Signature Strand œil de tigre rosette d’Al Ain, conçu pour accompagner des abayas, robes et pièces de tailleur Bint Saeed sélectionnées.',
    ],
    beadFeature: 'Perles d’œil de tigre naturel (environ 5 mm)',
    uniquenessFeature:
      'Chaque pierre naturelle affiche sa propre couleur, son lustre soyeux et son caractère naturel',
    strandNameFr: 'Signature Strand œil de tigre rosette d’Al Ain',
    madeFromAnswer: [
      'Le collier est façonné à la main avec des perles d’œil de tigre naturel, des perles d’hématite plaquées or et la rosette d’Al Ain signature de la Maison, sculptée à la main dans du cornaline naturelle. Il est terminé par un fermoir doré et une chaîne d’extension ajustable.',
      'L’œil de tigre est une pierre naturelle admirée pour ses tons dorés et bruns riches et son effet optique soyeux distinctif, appelé chatoyance, qui crée une bande de lumière mouvante à la surface. Chaque pierre est unique, conférant à chaque collier Bint Saeed son propre caractère.',
    ],
  }),
  'al-ain-rosette-necklace-onyx': buildNecklacePackFr({
    fullNameFr: 'Collier Al Ain Oasis — Onyx',
    introParagraphs: [
      'Raffiné dans sa simplicité, le Collier Al Ain Oasis — Onyx est enfilé à la main avec des pierres d’onyx noir naturel, rehaussé de perles d’hématite plaquées or et terminé par la rosette d’Al Ain signature de la Maison, sculptée à la main dans du cornaline naturelle. Conçu pour la polyvalence, il peut être porté en longueur simple ou doublé autour du cou pour une silhouette plus courte.',
      'Les pierres naturelles sont admirées depuis des générations pour leur individualité. Les tons noirs profonds de l’onyx créent un contraste saisissant avec la chaleur de la cornaline et les accents dorés lumineux, pour une composition à la fois intemporelle et distinctive. Chaque pierre étant formée par la nature, chaque collier possède son caractère subtil et sa beauté naturelle propres.',
      'Façonné à la main à Abou Dabi, le collier reflète l’attention de Bint Saeed pour les matériaux naturels et un savoir-faire durable. Complétez l’ensemble avec les boucles d’oreilles rosette d’Al Ain assorties et le Signature Strand onyx rosette d’Al Ain, conçu pour accompagner des abayas, robes et pièces de tailleur Bint Saeed sélectionnées.',
    ],
    beadFeature: 'Perles d’onyx noir naturel (environ 5 mm)',
    uniquenessFeature:
      'Chaque pierre naturelle est unique par sa tonalité et son caractère naturel',
    strandNameFr: 'Signature Strand onyx rosette d’Al Ain',
    madeFromAnswer: [
      'Le collier est façonné à la main avec des perles d’onyx noir naturel, des perles d’hématite plaquées or et la rosette d’Al Ain signature de la Maison, sculptée à la main dans du cornaline naturelle. Il est terminé par un fermoir doré et une chaîne d’extension ajustable.',
      'L’onyx est une variété naturelle de calcédoine, admirée pour sa couleur noire profonde et sa finition polie lisse. Chaque pierre est unique, conférant à chaque collier Bint Saeed son propre caractère.',
    ],
  }),
}

type EarringFrPackInput = {
  fullNameFr: string
  introParagraphs: string[]
  stoneFeature: string
  necklaceNameFr: string
  madeFromAnswer: [string, string]
  strandNameFr?: string
}

function buildEarringPackFr(input: EarringFrPackInput): NecklaceEarringPdpContentPack {
  const {
    fullNameFr,
    introParagraphs,
    stoneFeature,
    necklaceNameFr,
    madeFromAnswer,
    strandNameFr,
  } = input

  const strandAnswer = strandNameFr
    ? `Oui. Le ${strandNameFr} a été conçu pour compléter les boucles d’oreilles et peut être fixé à des abayas, robes et pièces de tailleur Bint Saeed sélectionnées.`
    : 'Oui. Un Signature Strand assorti peut compléter les boucles d’oreilles et s’attacher à des abayas, robes et pièces de tailleur Bint Saeed sélectionnées.'

  return {
    introParagraphs,
    featuresTitle: 'Caractéristiques',
    features: [
      'Code de la Maison : rosette d’Al Ain',
      'Façonné à la main à Abou Dabi, Émirats arabes unis',
      stoneFeature,
      'Rosette d’Al Ain signature sculptée à la main dans du cornaline naturelle (environ 15 mm)',
      'Perles d’hématite plaquées or intégrées dans le design',
      'Fermoir et tige dorés pour un port confortable',
      'Chaque pierre naturelle est unique par sa couleur, ses veines et son caractère naturel',
      `Conçu pour s’accorder avec le ${necklaceNameFr}`,
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
        answer: ROSETTE_FAQ_FR,
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
        answer:
          'Non. Chaque création Bint Saeed met en valeur des pierres naturelles. Les variations de couleur, de veinure et de caractère naturel font partie de l’individualité de chaque pièce et doivent être célébrées comme la marque des matériaux naturels.',
      },
      {
        question: 'Où sont fabriquées les boucles d’oreilles ?',
        answer:
          'Chaque paire est façonnée à la main à Abou Dabi, aux Émirats arabes unis, selon les standards de savoir-faire et de qualité de Bint Saeed.',
      },
      {
        question: 'Les boucles d’oreilles sont-elles livrées dans un écrin cadeau ?',
        answer: `Oui. Les ${fullNameFr} sont présentées dans un écrin cadeau signature Bint Saeed, idéal pour offrir ou conserver précieusement.`,
      },
      {
        question: 'Comment entretenir mes boucles d’oreilles ?',
        answer:
          'Pour préserver leur beauté, évitez le contact avec les parfums, les produits cosmétiques, l’eau et les produits chimiques domestiques. Après le port, essuyez délicatement avec un chiffon doux pour bijoux et rangez-les séparément dans leur pochette ou écrin Bint Saeed.',
      },
    ],
  }
}

export const FR_EARRING_PDP_BY_ID: Record<string, NecklaceEarringPdpContentPack> = {
  'al-ain-oasis-earrings-malachite': buildEarringPackFr({
    fullNameFr: 'Boucles d’oreilles Al Ain Oasis — Malachite',
    introParagraphs: [
      'Les Boucles d’oreilles Al Ain Oasis — Malachite sont assemblées à la main avec des pierres de malachite naturelles, la rosette d’Al Ain signature de la Maison sculptée dans du cornaline naturelle et des accents d’hématite plaqués or qui captent la lumière à chaque mouvement.',
      'Les pierres naturelles sont admirées pour leur individualité. La profondeur de leur couleur, leurs veines distinctives et leur caractère organique apportent une richesse que seule la nature peut créer, rendant chaque paire aussi unique que la femme qui la porte.',
      'Façonnées à la main à Abou Dabi, ces boucles d’oreilles associent des matériaux naturels à l’un des codes de la Maison Bint Saeed. Complétez l’ensemble avec le Collier Al Ain Oasis — Malachite assorti et le Signature Strand malachite rosette d’Al Ain.',
    ],
    stoneFeature: 'Pierres de malachite naturelle sélectionnées à la main',
    necklaceNameFr: 'Collier Al Ain Oasis — Malachite',
    strandNameFr: 'Signature Strand malachite rosette d’Al Ain',
    madeFromAnswer: [
      'Les boucles d’oreilles sont façonnées à la main avec des pierres de malachite naturelle, des accents d’hématite plaqués or et la rosette d’Al Ain signature de la Maison, sculptée à la main dans du cornaline naturelle.',
      'La malachite est une pierre naturelle formée sur des milliers d’années dans des régions riches en cuivre. Célébrée pour ses bandes vertes distinctives, chaque pierre est unique.',
    ],
  }),
  'al-ain-oasis-earrings-rose-quartz': buildEarringPackFr({
    fullNameFr: 'Boucles d’oreilles Al Ain Oasis — Quartz rose',
    introParagraphs: [
      'Les Boucles d’oreilles Al Ain Oasis — Quartz rose associent la douceur du quartz rose naturel à la rosette d’Al Ain signature sculptée dans du cornaline naturelle, rehaussée d’accents d’hématite plaqués or.',
      'Prisées depuis des siècles, les pierres naturelles sont admirées pour leur individualité. Les tons blush du quartz rose, la chaleur de la cornaline et les accents dorés composent une harmonie à la fois intemporelle et distinctive.',
      'Façonnées à la main à Abou Dabi, ces boucles d’oreilles reflètent l’attention de Bint Saeed pour les matériaux naturels. Complétez l’ensemble avec le Collier Al Ain Oasis — Quartz rose assorti et le Signature Strand quartz rose rosette d’Al Ain.',
    ],
    stoneFeature: 'Pierres de quartz rose naturel sélectionnées à la main',
    necklaceNameFr: 'Collier Al Ain Oasis — Quartz rose',
    strandNameFr: 'Signature Strand quartz rose rosette d’Al Ain',
    madeFromAnswer: [
      'Les boucles d’oreilles sont façonnées à la main avec des pierres de quartz rose naturel, des accents d’hématite plaqués or et la rosette d’Al Ain signature de la Maison, sculptée à la main dans du cornaline naturelle.',
      'Le quartz rose est une variété naturelle de quartz, admirée pour ses tons rose délicats et sa translucidité subtile. Chaque pierre est unique.',
    ],
  }),
  'al-ain-oasis-earrings-orange-jade': buildEarringPackFr({
    fullNameFr: 'Boucles d’oreilles Al Ain Oasis — Jade orange',
    introParagraphs: [
      'Les Boucles d’oreilles Al Ain Oasis — Jade orange sont assemblées à la main avec des pierres de jade orange naturel, la rosette d’Al Ain signature sculptée dans du cornaline naturelle et des accents d’hématite plaqués or pour un contraste lumineux.',
      'Les pierres naturelles sont admirées pour leur individualité. Les tons orange chauds du jade créent un équilibre élégant avec la chaleur de la cornaline et les accents dorés lumineux.',
      'Façonnées à la main à Abou Dabi, ces boucles d’oreilles expriment le langage de design signature de Bint Saeed. Complétez l’ensemble avec le Collier Al Ain Oasis — Pierre de soleil assorti.',
    ],
    stoneFeature: 'Pierres de jade orange naturel sélectionnées à la main',
    necklaceNameFr: 'Collier Al Ain Oasis — Pierre de soleil',
    strandNameFr: 'Signature Strand pierre de soleil rosette d’Al Ain',
    madeFromAnswer: [
      'Les boucles d’oreilles sont façonnées à la main avec des pierres de jade orange naturel, des accents d’hématite plaqués or et la rosette d’Al Ain signature de la Maison, sculptée à la main dans du cornaline naturelle.',
      'Le jade orange est une pierre naturelle appréciée pour ses nuances chaudes et sa profondeur de couleur. Chaque pierre est unique.',
    ],
  }),
  'al-quaa-earrings-lapis-lazuli': buildEarringPackFr({
    fullNameFr: 'Boucles d’oreilles Al Quaa — Lapis lazuli',
    introParagraphs: [
      'Les Boucles d’oreilles Al Quaa — Lapis lazuli sont assemblées à la main avec des pierres de lapis lazuli naturelles, la rosette d’Al Ain signature sculptée dans du cornaline naturelle et des accents d’hématite plaqués or.',
      'Précieux depuis l’Antiquité, le lapis lazuli est admiré pour son bleu royal profond et ses inclusions naturelles de pyrite dorée. Chaque pierre étant unique, chaque paire possède son propre caractère.',
      'Façonnées à la main à Abou Dabi, ces boucles d’oreilles reflètent l’attention de Bint Saeed pour les matériaux naturels. Complétez l’ensemble avec le Collier Al Ain Oasis — Lapis lazuli assorti et le Signature Strand lapis lazuli rosette d’Al Ain.',
    ],
    stoneFeature: 'Pierres de lapis lazuli naturel sélectionnées à la main',
    necklaceNameFr: 'Collier Al Ain Oasis — Lapis lazuli',
    strandNameFr: 'Signature Strand lapis lazuli rosette d’Al Ain',
    madeFromAnswer: [
      'Les boucles d’oreilles sont façonnées à la main avec des pierres de lapis lazuli naturel, des accents d’hématite plaqués or et la rosette d’Al Ain signature de la Maison, sculptée à la main dans du cornaline naturelle.',
      'Le lapis lazuli est une pierre naturelle prisée pour son bleu royal intense et ses inclusions distinctives de pyrite dorée. Chaque pierre est unique.',
    ],
  }),
}
