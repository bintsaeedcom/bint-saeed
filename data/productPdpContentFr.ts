import type { Product } from '@/data/products'
import { buildKnightsbridgeDressPdpContent } from '@/data/knightsbridgeDressPdpContent'
import type { ProductPdpContent } from '@/data/productPdpContent'
import { getProductSlug } from '@/lib/products/links'
import { getBelgraviaPdpFaq } from '@/lib/products/belgraviaSchemaI18n'
import { getKensingtonPdpFaq } from '@/lib/products/kensingtonSchemaI18n'
import { getKnightsbridgePdpFaq } from '@/lib/products/knightsbridgeSchemaI18n'
import {
  knightsbridgePdpColorLabel,
} from '@/lib/products/knightsbridgePairing'
import { buildVariantSku } from '@/lib/products/sku'

type MayfairColorKey = 'deep-maroon' | 'black' | 'peach'

const MAYFAIR_COLOR_COPY: Record<MayfairColorKey, { label: string; adj: string }> = {
  'deep-maroon': { label: 'Bordeaux profond', adj: 'bordeaux profond' },
  black: { label: 'Noir', adj: 'noir' },
  peach: { label: 'Peche', adj: 'peche' },
}

function normalizeMayfairColor(color?: string): MayfairColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('black')) return 'black'
  if (c.includes('peach')) return 'peach'
  return 'deep-maroon'
}

const NOTHING_HILL_STYLE_SKU = 'BS-KF-002'

const KAFTAN_COMPOSITION_DETAILS = [
  'Exterieur : crepe chiffon (100% polyester)',
  'Robe interieure : 100% polyester',
] as const

const NOTHING_HILL_COMPOSITION_DETAILS = [
  'Exterieur : chiffon (100% polyester)',
  'Robe interieure : 100% polyester',
] as const

const KAFTAN_CARE_DETAILS = [
  'Nettoyage a sec professionnel recommande',
  'Lavage a la main delicat a l eau froide si necessaire',
  'Ne pas utiliser d eau de Javel',
  'Ne pas secher en machine',
] as const

const ABAYA_CARE_DETAILS = ['Nettoyage a sec professionnel uniquement'] as const

const BELGRAVIA_COMPOSITION_DETAILS = [
  'Exterieur : melange de crepe leger (80% polyester, 20% viscose)',
  'Composition de la doublure : (70% polyester, 30% viscose)',
] as const

function cmToInches(cm: number): number {
  return Math.round(cm / 2.54)
}

function kaftanFitAndSizeDetails(maxLengthCm: number, opts?: { includeAdjustableTies?: boolean }): string[] {
  const lines = [
    'Taille unique',
    `Longueur maximale du vetement : ${maxLengthCm} cm / ${cmToInches(maxLengthCm)} pouces`,
  ]
  if (opts?.includeAdjustableTies !== false) {
    lines.push('Silhouette ajustable grace a des liens internes dissimules')
  }
  lines.push('Le mannequin mesure 155 cm / 61 pouces')
  return lines
}

export function buildMayfairKaftanContentFr(color?: string): ProductPdpContent {
  const { label, adj } = MAYFAIR_COLOR_COPY[normalizeMayfairColor(color)]

  return {
    introParagraphs: [
      `Le Kaftan Mayfair est concu pour les femmes qui savent que l elegance n est jamais statique. Coupe dans un crepe chiffon ${adj} et superpose sur une robe interieure integree, ce kaftan en chiffon ${adj} cree une silhouette fluide qui tombe naturellement de l epaule a l ourlet.`,
      'Un detail d echarpe au drape souple tombe depuis l epaule gauche et peut etre style en diagonale sur le corps avec l epingle embleme doree signature de Bint Saeed. Des liens internes dissimules permettent d ajuster la silhouette de plusieurs manieres, creant soit une forme cape fluide, soit un profil plus defini. Le resultat est une piece qui se transforme avec la femme qui la porte et s adapte naturellement aux differents moments de sa vie.',
      'Leger, polyvalent et concu pour etre porte pendant des annees plutot qu une seule saison, le Kaftan Mayfair passe avec aisance d une occasion a l autre. Porte pour un mariage, une celebration, un diner a l etranger ou un jour ordinaire qui merite quelque chose d extraordinaire, il s adapte naturellement a la vie de la femme qui le porte. Il n est pas defini par une destination, une ville ou un instant. Il devient une partie de son histoire et voyage partout avec elle.',
      'C est une piece choisie non seulement pour son allure, mais pour la sensation qu elle procure des le premier instant.',
    ],
    productDetails: [
      `Kaftan en crepe chiffon ${adj}`,
      'Silhouette fluide avec construction a couches',
      'Robe interieure integree pour un port facile',
      'Encolure en V',
      'Detail d echarpe integre drape depuis l epaule gauche',
      'Epingle embleme doree signature de Bint Saeed incluse',
      'L echarpe peut etre stylee en diagonale sur le corps',
      'Construction a liens internes dissimules permettant plusieurs options de styling',
      'Peut etre porte avec une silhouette fluide ou une forme doucement definie',
      'Manches a coupe ouverte pour un mouvement gracieux',
      'Construction legere concue pour le confort et l elegance',
      `Couleur : ${label}`,
      'Fabrique a Abu Dhabi, EAU',
    ],
    compositionDetails: [...KAFTAN_COMPOSITION_DETAILS],
    fitAndSizeDetails: kaftanFitAndSizeDetails(165),
    careDetails: [...KAFTAN_CARE_DETAILS],
  }
}

type NothingHillColorKey = 'peach-pink' | 'black' | 'peach'

const NOTHING_HILL_COLOR_COPY: Record<NothingHillColorKey, { label: string; adj: string }> = {
  'peach-pink': { label: 'Peche rose', adj: 'peche rose' },
  peach: { label: 'Peche', adj: 'peche' },
  black: { label: 'Noir', adj: 'noir' },
}

function normalizeNothingHillColor(color?: string): NothingHillColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('black')) return 'black'
  if (c.includes('peach pink') || c.includes('peach-pink')) return 'peach-pink'
  if (c.includes('peach')) return 'peach'
  return 'peach-pink'
}

export function buildNothingHillKaftanContentFr(color?: string): ProductPdpContent {
  const { label, adj } = NOTHING_HILL_COLOR_COPY[normalizeNothingHillColor(color)]

  return {
    introParagraphs: [
      `Le Kaftan Nothing Hill est concu pour les femmes qui apprecient l elegance dans sa forme la plus naturelle. Realise a partir de couches de chiffon ${adj} doux et termine par une encolure bateau raffinee, il cree une silhouette fluide qui accompagne chaque pas avec grace.`,
      'Leger et aerien, le chiffon se drape naturellement de l epaule a l ourlet, creant un mouvement harmonieux tout en conservant une forme equilibree. Un embleme dore signature de Bint Saeed se place discretement a l avant, exprimant subtilement l identite de la maison.',
      `La tonalite ${adj} douce apporte chaleur et feminite au design, le rendant aussi adapte aux celebrations, reunions intimes, evenements destination et occasions qui appellent une elegance discrete. La construction aerienne permet a la silhouette de flotter autour du corps, pour une presence a la fois raffinee et effortless.`,
      'Concu pour etre porte saison apres saison, le Kaftan Nothing Hill ne se definit pas uniquement par les tendances ou les occasions. C est une piece choisie pour la facilite qu elle apporte a l art de bien s habiller, que ce soit pour un evenement special, une soiree ou un moment a retenir.',
      'Lumineux, gracieux et intemporel, il devient une partie de l histoire de la femme qui le porte et l accompagne partout ou la vie la mene.',
    ],
    productDetails: [
      `Kaftan en chiffon ${adj} doux`,
      'Silhouette fluide a couches avec mouvement gracieux',
      'Robe interieure integree pour un port facile',
      'Encolure bateau elegante',
      'Embleme dore signature de Bint Saeed inclus',
      'Panneaux de chiffon drapes pour un mouvement fluide',
      'Construction legere concue pour le confort et l elegance',
      'Concu pour bouger naturellement avec celle qui le porte',
      'Adapte aux celebrations, reunions, evenements destination et occasions speciales',
      'Silhouette aerienne avec un drape feminin doux',
      `Couleur : ${label}`,
      'Fabrique a Abu Dhabi, EAU',
      `Référence : ${buildVariantSku(NOTHING_HILL_STYLE_SKU, label)}`,
    ],
    compositionDetails: [...NOTHING_HILL_COMPOSITION_DETAILS],
    fitAndSizeDetails: kaftanFitAndSizeDetails(165, { includeAdjustableTies: false }),
    careDetails: [...KAFTAN_CARE_DETAILS],
  }
}

type BelgraviaColorKey = 'deep-black' | 'navy-blue'

const BELGRAVIA_COLOR_COPY: Record<BelgraviaColorKey, { label: string }> = {
  'deep-black': { label: 'Noir profond' },
  'navy-blue': { label: 'Bleu marine' },
}

function normalizeBelgraviaColor(color?: string): BelgraviaColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('navy')) return 'navy-blue'
  if (c.includes('black')) return 'deep-black'
  return 'deep-black'
}

export function buildBelgraviaAbayaContentFr(color?: string): ProductPdpContent {
  const { label } = BELGRAVIA_COLOR_COPY[normalizeBelgraviaColor(color)]

  return {
    introParagraphs: [
      'L Abaya Belgravia s inspire du Bisht, l un des vetements les plus recognisables de la peninsule Arabique, reinterprete a travers une silhouette contemporaine pensee pour la vie moderne.',
      'Disponible en Noir profond et Bleu marine, cette abaya se distingue par une bordure tissee a la main inspiree d Al Khous, l art traditionnel emirati du tressage des feuilles de palmier transmis de generation en generation. Son motif evoque la geometrie du palmier tisse et introduit texture et savoir-faire culturel dans une silhouette elegante et discrete.',
      'Creee a Abu Dhabi, l Abaya Belgravia reflete l engagement de Bint Saeed a faire evoluer l artisanat traditionnel a travers le design contemporain. Sa coupe relax inspiree du Bisht offre un mouvement gracieux tout en gardant une structure raffinee, tandis que les poches dissimulees et la construction entierement doublee assurent confort et aisance au porter.',
      'Concue pour passer naturellement d une occasion, d un pays et d un style de vie a l autre, l Abaya Belgravia peut se porter pour un mariage a Riyad, un diner a Londres, un evenement a Paris ou la vie quotidienne dans le Golfe. Intemporelle plutot que guidee par les tendances, elle est creee pour les femmes qui valorisent l elegance, l artisanat et les pieces qui restent pertinentes partout ou elles sont portees.',
      'Comme toutes les abayas Bint Saeed, l Abaya Belgravia est fabriquee a la commande et peut etre personnalisee avec un nom, une date ou un message significatif a l interieur de la poche dissimulee.',
    ],
    productDetails: [
      'Silhouette d abaya inspiree du Bisht',
      'Disponible en Noir profond et Bleu marine',
      'Bordure tissee a la main inspiree d Al Khous, tressage traditionnel des feuilles de palmier',
      'Construction ouverte sur le devant',
      'Fermeture a boutons-pression dissimules disponible sur demande',
      'Entierement doublee pour le confort et une finition raffinee',
      'Poches laterales dissimulees',
      'Personnalisation disponible dans la poche dissimulee',
      'Silhouette fluide et decontractee concue pour la liberte de mouvement',
      'Tissu exterieur leger en melange de crepe',
      'Design contemporain inspire des traditions et de l artisanat emiratis et du GCC',
      'Adaptee a l elegance quotidienne, aux reunions, mariages et occasions speciales',
      'Taille du mannequin : 155 cm / 61 pouces',
      'Longueur : 138 cm / 54,5 pouces',
      `Couleur : ${label}`,
      'Fabrique a Abu Dhabi, Emirats arabes unis',
    ],
    compositionDetails: [...BELGRAVIA_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      'Tailles disponibles : XS, S, M, L, XL, XXL',
      'Longueur : 138 cm / 54,5 pouces',
      'Taille du mannequin : 155 cm / 61 pouces',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    faq: getBelgraviaPdpFaq('fr'),
  }
}

const KENSINGTON_COMPOSITION_DETAILS = [
  'Exterieur : 80% polyester, 20% viscose',
  'Doublure : 70% polyester, 30% viscose',
] as const

export function buildKensingtonAbayaContentFr(): ProductPdpContent {
  return {
    introParagraphs: [
      'L Abaya Kensington est concue pour les femmes qui apprecient une confiance exprimee par la simplicite. Realisee en noir profond avec une silhouette epuree et allongee, elle affirme sa presence par la structure, le mouvement et les proportions plutot que par l ornement.',
      'Inspiree par l assurance et la structure du tailoring outerwear, l Abaya Kensington associe l aisance du vestiaire traditionnel a l allure soignee d un blazer bien coupe. Les lignes nettes aux epaules et sur le corps creent une silhouette composee, elegante et facile a porter.',
      'Les finitions texturees sur la poitrine et les poignets s inspirent d Al Khous, l art traditionnel emirati du tressage de feuilles de palmier transmis de generation en generation. Reinterprete a travers un tissage subtil d organza noir paillete, ce detail apporte profondeur et texture tout en restant discret.',
      'Concue pour se superposer naturellement sur des robes, des pieces de tailoring, des tenues de soiree ou un vestiaire quotidien, elle accompagne facilement les journees de travail, reunions, diners, voyages et occasions speciales. Son esthetique intemporelle lui permet de traverser les pays, les saisons et les chapitres de vie tout en restant liee au savoir-faire et a l elegance qui l inspirent.',
      'Entierement doublee d un crepe doux et terminee avec deux poches laterales dissimulees, l Abaya Kensington equilibre praticite et raffinement tout en conservant une silhouette nette et elegante. Comme toutes les abayas Bint Saeed, elle peut etre personnalisee avec une etiquette interieure cachee portant un nom, une date ou un message significatif, particulierement precieuse pour les cadeaux.',
      'Elegante, polyvalente et creee pour etre portee pendant des annees plutot qu une saison, l Abaya Kensington est pensee pour accompagner la femme qui la porte partout ou la vie la mene.',
    ],
    productDetails: [
      'Noir profond',
      'Encolure ronde',
      'Leger rembourrage d epaule',
      'Fermeture frontale a boutons-pression',
      'Bordure tissee signature Bint Saeed inspiree du tressage traditionnel Al Khous',
      'Deux poches laterales dissimulees',
      'Doublure en crepe doux',
      'Etiquette interieure de personnalisation dissimulee en option',
      'Longueur : 138 cm / 54,5 pouces',
      'Taille du mannequin : 155 cm / 61 pouces',
      'Le mannequin porte la taille XS',
      'Fabrique a Abu Dhabi, Emirats arabes unis',
    ],
    compositionDetails: [...KENSINGTON_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      'Tailles disponibles : XS, S, M, L, XL',
      'Concue pour une coupe structuree et fluide',
      'Longueur : 138 cm / 54,5 pouces',
      'Taille du mannequin : 155 cm / 61 pouces',
      'Le mannequin porte la taille XS',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    faq: getKensingtonPdpFaq('fr'),
  }
}

function isKnightsbridgeNavyColor(color?: string): boolean {
  return (color ?? '').toLowerCase().includes('navy')
}

export function buildKnightsbridgeAbayaJacketContentFr(color?: string): ProductPdpContent {
  const catalogColor = isKnightsbridgeNavyColor(color) ? 'Navy Grey' : 'Dark Brown'
  const colorLabel = knightsbridgePdpColorLabel(catalogColor, 'fr')

  return {
    introParagraphs: [
      'Les femmes dont le style parait effortless sont souvent celles qui s interessent le moins aux tendances. Sans crainte d etre elles-memes, ce sont souvent elles qui les creent.',
      'La Khous Jacket Abaya a ete creee pour les femmes qui avancent avec confiance selon leurs propres regles. A mi-chemin entre une abaya et une veste, elle associe l aisance du vestiaire traditionnel a l assurance de l outerwear contemporain.',
      'Coupee dans une silhouette decontractee et disponible en brun fonce et gris marine, elle se superpose facilement sur des robes, du tailoring, des mailles et des essentiels du quotidien. Portee avec des sneakers ou des talons, elle s adapte naturellement aux differents contextes, ce qui en fait une compagne ideale pour les voyages et la vie entre les villes.',
      'Les details textures sur les poches poitrine et les poignets s inspirent d Al Khous, l art traditionnel emirati du tressage des feuilles de palmier transmis de generation en generation. Reinterpretes dans un langage contemporain, ils apportent profondeur, structure et caractere tout en conservant une allure raffinee.',
      'Le detail d epaule distinctif confere a la silhouette une influence militaire subtile, creant une presence confiante equilibree par le confort et la liberte de mouvement. Quatre poches fonctionnelles, dont deux poches poitrine et deux poches laterales dissimulees, renforcent sa praticite au quotidien.',
      'Terminee avec les boutons dores signature Bint Saeed Knotted Lines of Lineage, la piece porte l un des codes durables de la maison. Inspires par les liens qui unissent les generations, ces details rappellent que les choses les plus significatives sont souvent celles que l on transmet.',
      'Creee a Abu Dhabi, la Khous Jacket Abaya reflete l engagement de Bint Saeed a faire vivre des elements du patrimoine emirati dans une garde-robe contemporaine. Qu elle soit portee pour un cafe a Londres, une journee de voyage, une reunion a Dubai ou la vie quotidienne dans le Golfe, elle offre une silhouette distinctive a celles qui savent que le style n est pas reserve aux occasions speciales.',
      'Confortable, polyvalente et concue pour etre portee souvent, la Khous Jacket Abaya celebre l idee que la veritable elegance se revele non seulement dans les moments importants, mais aussi dans la maniere dont une femme choisit de se presenter chaque jour.',
    ],
    productDetails: [
      `Abaya veste ${colorLabel} avec silhouette decontractee`,
      'Col pointe',
      'Fermeture frontale dissimulee a boutons',
      'Deux poches poitrine',
      'Deux poches laterales dissimulees',
      'Detail de pattes d epaule',
      'Manches longues avec poignets boutones',
      'Details tisses signature Bint Saeed inspires de Khous sur les poches poitrine et poignets',
      'Boutons dores signature Bint Saeed Knotted Lines of Lineage',
      'Robe interieure integree',
      'Etiquette interieure dissimulee de personnalisation en option avec nom, date ou message significatif',
      `Couleur : ${colorLabel} avec details de contraste Khous naturels`,
      'Longueur : 143 cm / 56,3 pouces',
      'Fabrique a Abu Dhabi, Emirats arabes unis',
    ],
    compositionDetails: [
      'Exterieur : 60% polyester, 40% coton',
      'Robe interieure : 100% polyester',
    ],
    fitAndSizeDetails: [
      'Taille du mannequin : 160 cm / 63 pouces',
      'Le mannequin porte la taille XS',
      'Concue pour une coupe decontractee',
      'Tailles disponibles : XS, S, M, L, XL, XXL',
    ],
    careDetails: ['Nettoyage a sec professionnel uniquement'],
    faq: getKnightsbridgePdpFaq('fr'),
  }
}

function isMayfairKaftan(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'mayfair-kaftan' || product.id === 'bs-002'
}

function isNothingHillKaftan(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'nothing-hill-kaftan' || product.id === 'cf-002'
}

function isBelgraviaAbaya(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'belgravia-abaya' || product.id === 'ab-006'
}

function isKensingtonAbaya(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'kensington-abaya' || product.id === 'ab-004'
}

function isKnightsbridgeAbayaJacket(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'knightsbridge-abaya-jacket' || product.id === 'bs-001'
}

function isKnightsbridgeDress(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'knightsbridge-dress' || product.id === 'bs-003'
}

/** French PDP copy for hero products; returns null for other slugs. */
export function getProductPdpContentFr(product: Product, color?: string): ProductPdpContent | null {
  if (isMayfairKaftan(product)) return buildMayfairKaftanContentFr(color)
  if (isNothingHillKaftan(product)) return buildNothingHillKaftanContentFr(color)
  if (isBelgraviaAbaya(product)) return buildBelgraviaAbayaContentFr(color)
  if (isKensingtonAbaya(product)) return buildKensingtonAbayaContentFr()
  if (isKnightsbridgeAbayaJacket(product)) return buildKnightsbridgeAbayaJacketContentFr(color)
  if (isKnightsbridgeDress(product)) return buildKnightsbridgeDressPdpContent(color, 'fr')
  return null
}
