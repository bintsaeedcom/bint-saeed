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
  'deep-maroon': { label: 'Deep Maroon', adj: 'bordeaux intenso' },
  black: { label: 'Black', adj: 'nero' },
  peach: { label: 'Peach', adj: 'pesca' },
}

function normalizeMayfairColor(color?: string): MayfairColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('black')) return 'black'
  if (c.includes('peach')) return 'peach'
  return 'deep-maroon'
}

const NOTHING_HILL_STYLE_SKU = 'BS-KF-002'

const KAFTAN_COMPOSITION_DETAILS = [
  'Esterno: Crepe Chiffon (100% Poliestere)',
  'Abito interno: 100% Poliestere',
] as const

const NOTHING_HILL_COMPOSITION_DETAILS = [
  'Esterno: Chiffon (100% Poliestere)',
  'Abito interno: 100% Poliestere',
] as const

const KAFTAN_CARE_DETAILS = [
  'Lavaggio a secco professionale consigliato',
  'Lavaggio a mano delicato in acqua fredda se necessario',
  'Non candeggiare',
  'Non asciugare in asciugatrice',
] as const

const ABAYA_CARE_DETAILS = ['Solo lavaggio a secco professionale'] as const

const BELGRAVIA_COMPOSITION_DETAILS = [
  'Esterno: Misto crepe leggero (80% poliestere, 20% viscosa)',
  'Composizione fodera: (70% poliestere, 30% viscosa)',
] as const

function cmToInches(cm: number): number {
  return Math.round(cm / 2.54)
}

function kaftanFitAndSizeDetails(maxLengthCm: number, opts?: { includeAdjustableTies?: boolean }): string[] {
  const lines = [
    'Taglia unica',
    `Lunghezza massima del capo: ${maxLengthCm} cm / ${cmToInches(maxLengthCm)} pollici`,
  ]
  if (opts?.includeAdjustableTies !== false) {
    lines.push('Silhouette regolabile tramite laccetti interni nascosti')
  }
  lines.push('La modella e alta 155 cm / 61 pollici')
  return lines
}

export function buildMayfairKaftanContentIt(color?: string): ProductPdpContent {
  const { label, adj } = MAYFAIR_COLOR_COPY[normalizeMayfairColor(color)]

  return {
    introParagraphs: [
      `Il Kaftan Mayfair e pensato per donne che sanno che l'eleganza non e mai statica. Realizzato in crepe chiffon ${adj} e sovrapposto a un abito interno applicato, questo kaftan in chiffon ${adj} crea una silhouette fluida che cade con naturalezza dalla spalla all'orlo.`,
      'Un dettaglio foulard morbido scende dalla spalla sinistra e puo essere indossato in diagonale sul corpo usando la spilla emblema dorata signature di Bint Saeed. I laccetti interni nascosti permettono di regolare la silhouette in diversi modi, creando una forma tipo mantella fluida o un profilo piu definito. Il risultato e un capo che si trasforma insieme alla donna che lo indossa, adattandosi naturalmente a occasioni e momenti diversi.',
      'Leggero, versatile e pensato per essere indossato per anni, non solo per una stagione, il Kaftan Mayfair passa con facilita da un occasione all altra. Indossato per un matrimonio, una celebrazione, una cena all estero o un giorno ordinario che merita qualcosa di straordinario, si adatta con naturalezza alla vita di chi lo indossa. Non e definito da una destinazione, una citta o un momento. Diventa parte della sua storia e viaggia ovunque vada lei.',
      'E un capo scelto non solo per come appare, ma per come fa sentire una donna nel momento in cui lo indossa.',
    ],
    productDetails: [
      `Kaftan in crepe chiffon ${adj}`,
      'Silhouette fluida con costruzione a strati',
      'Abito interno applicato per facilitare l indosso',
      'Scollo a V',
      'Dettaglio foulard applicato drappeggiato dalla spalla sinistra',
      'Spilla emblema dorata signature Bint Saeed inclusa',
      'Il foulard puo essere indossato in diagonale sul corpo',
      'Costruzione con laccetti interni nascosti per piu opzioni di styling',
      'Puo essere indossato con silhouette fluida o forma morbidamente definita',
      'Maniche aperte per un movimento elegante',
      'Costruzione leggera pensata per comfort ed eleganza',
      `Colore: ${label}`,
      'Realizzato ad Abu Dhabi, UAE',
    ],
    compositionDetails: [...KAFTAN_COMPOSITION_DETAILS],
    fitAndSizeDetails: kaftanFitAndSizeDetails(165),
    careDetails: [...KAFTAN_CARE_DETAILS],
  }
}

type NothingHillColorKey = 'peach-pink' | 'black' | 'peach'

const NOTHING_HILL_COLOR_COPY: Record<NothingHillColorKey, { label: string; adj: string }> = {
  'peach-pink': { label: 'Peach Pink', adj: 'rosa pesca' },
  peach: { label: 'Peach', adj: 'pesca' },
  black: { label: 'Black', adj: 'nero' },
}

function normalizeNothingHillColor(color?: string): NothingHillColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('black')) return 'black'
  if (c.includes('peach pink') || c.includes('peach-pink')) return 'peach-pink'
  if (c.includes('peach')) return 'peach'
  return 'peach-pink'
}

export function buildNothingHillKaftanContentIt(color?: string): ProductPdpContent {
  const { label, adj } = NOTHING_HILL_COLOR_COPY[normalizeNothingHillColor(color)]

  return {
    introParagraphs: [
      `Il Kaftan Nothing Hill e pensato per donne che apprezzano l eleganza nella sua forma piu naturale. Realizzato con strati di morbido chiffon ${adj} e rifinito con un raffinato scollo bateau, crea una silhouette fluida che si muove con grazia a ogni passo.`,
      'Leggero e fluido, lo chiffon cade naturalmente dalla spalla all orlo, creando un senso di movimento mantenendo una forma ben equilibrata. Un emblema dorato signature Bint Saeed e posizionato con discrezione sul davanti, offrendo una sottile espressione dell identita della maison.',
      `La tonalita morbida ${adj} porta calore e femminilita al design, rendendolo adatto a celebrazioni, incontri intimi, eventi di destinazione e occasioni che richiedono un eleganza discreta. La costruzione ariosa permette alla silhouette di fluttuare intorno al corpo, creando una presenza raffinata e naturale allo stesso tempo.`,
      'Pensato per essere indossato stagione dopo stagione, il Kaftan Nothing Hill non e definito solo da tendenze o occasioni. E un capo scelto per la facilita che offre nel vestirsi con eleganza, sia per un evento speciale, una serata o un momento da ricordare.',
      'Leggero, aggraziato e senza tempo, diventa parte della storia della donna che lo indossa, accompagnandola ovunque la vita la porti.',
    ],
    productDetails: [
      `Kaftan in morbido chiffon ${adj}`,
      'Silhouette fluida a strati con movimento elegante',
      'Abito interno applicato per facilitare l indosso',
      'Elegante scollo bateau',
      'Emblema dorato signature Bint Saeed incluso',
      'Pannelli in chiffon drappeggiato per un movimento fluido',
      'Costruzione leggera pensata per comfort ed eleganza',
      'Pensato per muoversi naturalmente con chi lo indossa',
      'Adatto a celebrazioni, incontri, eventi di destinazione e occasioni speciali',
      'Silhouette ariosa con drappeggio femminile morbido',
      `Colore: ${label}`,
      'Realizzato ad Abu Dhabi, UAE',
      `Riferimento: ${buildVariantSku(NOTHING_HILL_STYLE_SKU, label)}`,
    ],
    compositionDetails: [...NOTHING_HILL_COMPOSITION_DETAILS],
    fitAndSizeDetails: kaftanFitAndSizeDetails(165, { includeAdjustableTies: false }),
    careDetails: [...KAFTAN_CARE_DETAILS],
  }
}

type BelgraviaColorKey = 'deep-black' | 'navy-blue'

const BELGRAVIA_COLOR_COPY: Record<BelgraviaColorKey, { label: string }> = {
  'deep-black': { label: 'Deep Black' },
  'navy-blue': { label: 'Navy Blue' },
}

function normalizeBelgraviaColor(color?: string): BelgraviaColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('navy')) return 'navy-blue'
  if (c.includes('black')) return 'deep-black'
  return 'deep-black'
}

export function buildBelgraviaAbayaContentIt(color?: string): ProductPdpContent {
  const { label } = BELGRAVIA_COLOR_COPY[normalizeBelgraviaColor(color)]

  return {
    introParagraphs: [
      'L Abaya Belgravia trae ispirazione dal Bisht, uno dei capi piu riconoscibili della Penisola Arabica, reinterpretato attraverso una silhouette contemporanea pensata per la vita moderna.',
      'Disponibile in Deep Black e Navy Blue, questa abaya si distingue per una rifinitura intrecciata a mano ispirata ad Al Khous, l arte tradizionale emiratina dell intreccio delle foglie di palma tramandata di generazione in generazione. Il motivo richiama la geometria delle foglie intrecciate, introducendo texture e artigianalita culturale in una silhouette elegante e discreta.',
      'Creata ad Abu Dhabi, l Abaya Belgravia riflette l impegno di Bint Saeed nel portare avanti l artigianato tradizionale attraverso il design contemporaneo. Il taglio rilassato ispirato al Bisht crea un movimento aggraziato mantenendo una struttura raffinata, mentre le tasche nascoste e la costruzione completamente foderata assicurano comfort e facilita d uso.',
      'Pensata per muoversi con naturalezza tra occasioni, paesi e stili di vita, l Abaya Belgravia puo essere indossata per un matrimonio a Riyadh, una cena a Londra, un evento a Parigi o la vita quotidiana nel Golfo. Senza tempo, non guidata dalle tendenze, e creata per donne che apprezzano eleganza, artigianalita e capi che restano rilevanti ovunque vengano indossati.',
      'Come tutte le abaya Bint Saeed, l Abaya Belgravia e realizzata su ordinazione e puo essere personalizzata con un nome, una data o un messaggio significativo all interno della tasca nascosta.',
    ],
    productDetails: [
      'Silhouette abaya ispirata al Bisht',
      'Disponibile in Deep Black e Navy Blue',
      'Rifinitura intrecciata a mano ispirata ad Al Khous, intreccio tradizionale di foglie di palma',
      'Costruzione frontale aperta',
      'Chiusura opzionale con bottoni a pressione nascosti disponibile su richiesta',
      'Completamente foderata per comfort e finitura raffinata',
      'Tasche laterali nascoste',
      'Personalizzazione disponibile nella tasca nascosta',
      'Silhouette rilassata e fluida pensata per facilita di movimento',
      'Tessuto esterno in misto crepe leggero',
      'Design contemporaneo ispirato a tradizioni e artigianato emiratino e GCC',
      'Adatta a eleganza quotidiana, incontri, matrimoni e occasioni speciali',
      'Altezza modella: 155 cm / 61 pollici',
      'Lunghezza: 138 cm / 54.5 pollici',
      `Colore: ${label}`,
      'Realizzata ad Abu Dhabi, Emirati Arabi Uniti',
    ],
    compositionDetails: [...BELGRAVIA_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      'Taglie disponibili: XS, S, M, L, XL, XXL',
      'Lunghezza: 138 cm / 54.5 pollici',
      'Altezza modella: 155 cm / 61 pollici',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    faq: getBelgraviaPdpFaq('it'),
  }
}

const KENSINGTON_COMPOSITION_DETAILS = [
  'Esterno: 80% Poliestere, 20% Viscosa',
  'Fodera: 70% Poliestere, 30% Viscosa',
] as const

export function buildKensingtonAbayaContentIt(): ProductPdpContent {
  return {
    introParagraphs: [
      'L Abaya Kensington e stata progettata per donne che apprezzano la sicurezza espressa attraverso la semplicita. Realizzata in nero intenso con una silhouette pulita e allungata, crea presenza attraverso struttura, movimento e proporzione invece che ornamento.',
      'Ispirata alla sicurezza e alla struttura del capospalla sartoriale, l Abaya Kensington unisce la facilita dell abbigliamento tradizionale all aspetto curato di un blazer ben tagliato. Le linee pulite su spalle e corpo creano una silhouette composta, elegante e facile da indossare.',
      'Le rifiniture testurizzate su petto e polsini traggono ispirazione da Al Khous, l arte tradizionale emiratina dell intreccio delle foglie di palma tramandata di generazione in generazione. Interpretate attraverso una sottile trama in organza nera glitterata, introducono profondita e texture rimanendo discrete.',
      'Pensata per essere sovrapposta con naturalezza su abiti, tailoring, occasionwear o look quotidiani, passa con facilita tra vita di tutti i giorni, riunioni di lavoro, cene, incontri, viaggi e occasioni speciali. La sua estetica senza tempo le permette di attraversare paesi, stagioni e fasi della vita restando legata all artigianalita e all eleganza che ne hanno ispirato la creazione.',
      'Completamente foderata con una morbida fodera in crepe e rifinita con due tasche laterali nascoste, l Abaya Kensington bilancia praticita e raffinatezza mantenendo una silhouette pulita ed elegante. Come tutte le abaya Bint Saeed, puo essere personalizzata con un etichetta interna nascosta con nome, data o messaggio significativo, rendendola ancora piu speciale anche per i regali.',
      'Elegante, versatile e creata per essere indossata per anni, non per stagioni, l Abaya Kensington e pensata per accompagnare la donna che la indossa ovunque la vita la porti.',
    ],
    productDetails: [
      'Deep Black',
      'Scollo rotondo',
      'Leggera imbottitura sulle spalle',
      'Chiusura frontale con bottoni a pressione',
      'Rifinitura intrecciata signature Bint Saeed ispirata al tradizionale intreccio Al Khous in foglie di palma',
      'Due tasche laterali nascoste',
      'Morbida fodera in crepe',
      'Etichetta interna nascosta per personalizzazione opzionale',
      'Lunghezza: 138 cm / 54.5 pollici',
      'Altezza modella: 155 cm / 61 pollici',
      'La modella indossa la taglia XS',
      'Realizzata ad Abu Dhabi, Emirati Arabi Uniti',
    ],
    compositionDetails: [...KENSINGTON_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      'Taglie disponibili: XS, S, M, L, XL',
      'Pensata per una vestibilita strutturata ma fluida',
      'Lunghezza: 138 cm / 54.5 pollici',
      'Altezza modella: 155 cm / 61 pollici',
      'La modella indossa la taglia XS',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    faq: getKensingtonPdpFaq('it'),
  }
}

function isKnightsbridgeNavyColor(color?: string): boolean {
  return (color ?? '').toLowerCase().includes('navy')
}

export function buildKnightsbridgeAbayaJacketContentIt(color?: string): ProductPdpContent {
  const catalogColor = isKnightsbridgeNavyColor(color) ? 'Navy Grey' : 'Dark Brown'
  const colorLabel = knightsbridgePdpColorLabel(catalogColor, 'it')

  return {
    introParagraphs: [
      'Le donne il cui stile appare naturale sono spesso quelle meno interessate a seguire le tendenze. Non hanno paura di essere se stesse e spesso sono proprio loro a crearle.',
      'La Khous Jacket Abaya e stata creata per donne che si muovono nella vita con sicurezza alle proprie condizioni. A meta tra abaya e giacca, unisce la facilita dell abbigliamento tradizionale alla sicurezza del capospalla contemporaneo.',
      'Tagliata con una silhouette rilassata e disponibile in Dark Brown e Navy Grey, si sovrappone con facilita su abiti, tailoring, maglieria ed elementi quotidiani. Indossata con sneakers o tacchi, si adatta naturalmente ad ambienti in cambiamento, diventando una compagna ideale per viaggi, vita quotidiana e spostamenti tra citta.',
      'I dettagli testurizzati su tasche sul petto e polsini traggono ispirazione da Al Khous, l arte tradizionale emiratina dell intreccio delle foglie di palma tramandata di generazione in generazione. Reinterpretati in chiave contemporanea, questi dettagli introducono profondita, struttura e carattere mantenendo un aspetto raffinato.',
      'Il caratteristico dettaglio sulle spalle dona alla silhouette una sottile influenza militare, creando una presenza sicura bilanciata da comfort e facilita di movimento. Quattro tasche funzionali, incluse due tasche sul petto e due tasche laterali nascoste, ne rafforzano la praticita per la vita quotidiana.',
      'Rifinita con i bottoni dorati signature Knotted Lines of Lineage di Bint Saeed, il design porta con se uno dei codici duraturi della maison. Ispirati ai legami che uniscono le generazioni, questi dettagli ricordano che le cose piu significative nella vita sono spesso quelle che portiamo avanti.',
      'Creata ad Abu Dhabi, la Khous Jacket Abaya riflette l impegno di Bint Saeed nel portare elementi dell eredita emiratina in un guardaroba contemporaneo. Che sia per un caffe a Londra, una giornata di viaggio, un incontro a Dubai o la vita quotidiana nel Golfo, offre una silhouette distintiva per donne che capiscono che lo stile non e riservato alle occasioni speciali.',
      'Comoda, versatile e pensata per essere indossata spesso, la Khous Jacket Abaya celebra l idea che la vera eleganza si rivela non solo nei momenti importanti, ma nel modo in cui una donna sceglie di presentarsi ogni giorno.',
    ],
    productDetails: [
      `Abaya giacca ${colorLabel} con silhouette rilassata`,
      'Colletto a punta',
      'Chiusura frontale con bottoni nascosti',
      'Due tasche sul petto',
      'Due tasche laterali nascoste',
      'Dettaglio linguetta sulle spalle',
      'Maniche lunghe con polsini abbottonati',
      'Dettaglio intrecciato signature Bint Saeed ispirato a Khous su tasche sul petto e polsini',
      'Bottoni dorati signature Bint Saeed Knotted Lines of Lineage',
      'Abito interno applicato',
      'Etichetta interna nascosta opzionale per personalizzazione con nome, data o messaggio significativo',
      `Colore: ${colorLabel} con dettagli a contrasto Khous naturali`,
      'Lunghezza: 143 cm / 56.3 pollici',
      'Realizzata ad Abu Dhabi, Emirati Arabi Uniti',
    ],
    compositionDetails: [
      'Esterno: 60% Poliestere, 40% Cotone',
      'Abito interno: 100% Poliestere',
    ],
    fitAndSizeDetails: [
      'Altezza modella: 160 cm / 63 pollici',
      'La modella indossa la taglia XS',
      'Pensata per una vestibilita rilassata',
      'Taglie disponibili: XS, S, M, L, XL, XXL',
    ],
    careDetails: ['Solo lavaggio a secco professionale'],
    faq: getKnightsbridgePdpFaq('it'),
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

/** Italian PDP copy for hero products; returns null for other slugs. */
export function getProductPdpContentIt(product: Product, color?: string): ProductPdpContent | null {
  if (isMayfairKaftan(product)) return buildMayfairKaftanContentIt(color)
  if (isNothingHillKaftan(product)) return buildNothingHillKaftanContentIt(color)
  if (isBelgraviaAbaya(product)) return buildBelgraviaAbayaContentIt(color)
  if (isKensingtonAbaya(product)) return buildKensingtonAbayaContentIt()
  if (isKnightsbridgeAbayaJacket(product)) return buildKnightsbridgeAbayaJacketContentIt(color)
  if (isKnightsbridgeDress(product)) return buildKnightsbridgeDressPdpContent(color, 'it')
  return null
}
