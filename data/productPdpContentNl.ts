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
  'deep-maroon': { label: 'Deep Maroon', adj: 'diep kastanjebruin' },
  black: { label: 'Black', adj: 'zwart' },
  peach: { label: 'Peach', adj: 'perzik' },
}

function normalizeMayfairColor(color?: string): MayfairColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('black')) return 'black'
  if (c.includes('peach')) return 'peach'
  return 'deep-maroon'
}

const NOTHING_HILL_STYLE_SKU = 'BS-KF-002'

const KAFTAN_COMPOSITION_DETAILS = [
  'Buitenkant: Crepe Chiffon (100% Polyester)',
  'Binnenjurk: 100% Polyester',
] as const

const NOTHING_HILL_COMPOSITION_DETAILS = [
  'Buitenkant: Chiffon (100% Polyester)',
  'Binnenjurk: 100% Polyester',
] as const

const KAFTAN_CARE_DETAILS = [
  'Professionele stomerij aanbevolen',
  'Zachte handwas in koud water indien nodig',
  'Niet bleken',
  'Niet in de droogtrommel',
] as const

const ABAYA_CARE_DETAILS = ['Alleen professionele stomerij'] as const

const BELGRAVIA_COMPOSITION_DETAILS = [
  'Buitenkant: Lichte crepe blend (80% polyester, 20% viscose)',
  'Voering samenstelling: (70% polyester, 30% viscose)',
] as const

function cmToInches(cm: number): number {
  return Math.round(cm / 2.54)
}

function kaftanFitAndSizeDetails(maxLengthCm: number, opts?: { includeAdjustableTies?: boolean }): string[] {
  const lines = [
    'One Size',
    `Maximale kledinglengte: ${maxLengthCm} cm / ${cmToInches(maxLengthCm)} inch`,
  ]
  if (opts?.includeAdjustableTies !== false) {
    lines.push('Verstelbaar silhouet via verborgen interne strikken')
  }
  lines.push('Model is 155 cm / 61 inch lang')
  return lines
}

export function buildMayfairKaftanContentNl(color?: string): ProductPdpContent {
  const { label, adj } = MAYFAIR_COLOR_COPY[normalizeMayfairColor(color)]

  return {
    introParagraphs: [
      `De Mayfair Kaftan is ontworpen voor vrouwen die begrijpen dat elegantie nooit statisch is. Gemaakt van ${adj} crepe chiffon en gelaagd over een vaste binnenjurk, creeert deze ${adj} chiffon kaftan een vloeiend silhouet dat moeiteloos van schouder tot zoom valt.`,
      'Een zacht vallend sjaaldetail loopt vanaf de linkerschouder en kan diagonaal over het lichaam worden gestyled met de kenmerkende goudkleurige Bint Saeed embleemspeld. Verborgen interne strikken maken meerdere stylingopties mogelijk, van een vloeiende capevorm tot een meer gedefinieerd profiel. Het resultaat is een stuk dat meebeweegt met de vrouw die het draagt en zich natuurlijk aanpast aan verschillende momenten en gelegenheden.',
      'Licht, veelzijdig en ontworpen om jarenlang te dragen in plaats van slechts een seizoen, beweegt de Mayfair Kaftan moeiteloos tussen gelegenheden. Gedragen naar een bruiloft, een viering, een diner in het buitenland of een gewone dag die iets bijzonders verdient, past hij zich natuurlijk aan aan het leven van de vrouw die hem draagt. Hij wordt niet bepaald door een bestemming, een stad of een moment. Hij wordt onderdeel van haar verhaal en reist overal met haar mee.',
      'Het is een stuk dat niet alleen wordt gekozen om hoe het eruitziet, maar om hoe het een vrouw laat voelen zodra ze het aantrekt.',
    ],
    productDetails: [
      `${label} crepe chiffon kaftan`,
      'Vloeiend silhouet met gelaagde constructie',
      'Vaste binnenjurk voor draaggemak',
      'V-hals',
      'Aangehecht sjaaldetail gedrapeerd vanaf de linkerschouder',
      'Kenmerkende goudkleurige Bint Saeed embleemspeld inbegrepen',
      'Sjaal kan diagonaal over het lichaam worden gestyled',
      'Verborgen interne strikconstructie met meerdere stylingopties',
      'Kan worden gedragen met een vloeiend silhouet of een zacht gedefinieerde vorm',
      'Open gesneden mouwen voor gracieuze beweging',
      'Lichte constructie ontworpen voor comfort en elegantie',
      `Kleur: ${label}`,
      'Gemaakt in Abu Dhabi, VAE',
    ],
    compositionDetails: [...KAFTAN_COMPOSITION_DETAILS],
    fitAndSizeDetails: kaftanFitAndSizeDetails(165),
    careDetails: [...KAFTAN_CARE_DETAILS],
  }
}

type NothingHillColorKey = 'peach-pink' | 'black' | 'peach'

const NOTHING_HILL_COLOR_COPY: Record<NothingHillColorKey, { label: string; adj: string }> = {
  'peach-pink': { label: 'Peach Pink', adj: 'perzikroze' },
  peach: { label: 'Peach', adj: 'perzik' },
  black: { label: 'Black', adj: 'zwart' },
}

function normalizeNothingHillColor(color?: string): NothingHillColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('black')) return 'black'
  if (c.includes('peach pink') || c.includes('peach-pink')) return 'peach-pink'
  if (c.includes('peach')) return 'peach'
  return 'peach-pink'
}

export function buildNothingHillKaftanContentNl(color?: string): ProductPdpContent {
  const { label, adj } = NOTHING_HILL_COLOR_COPY[normalizeNothingHillColor(color)]

  return {
    introParagraphs: [
      `De Nothing Hill Kaftan is ontworpen voor vrouwen die elegantie waarderen in haar meest moeiteloze vorm. Gemaakt van lagen zachte ${adj} chiffon en afgewerkt met een verfijnde bateau-hals, creeert hij een vloeiend silhouet dat bij elke stap gracieus meebeweegt.`,
      'Licht en soepel valt de chiffon natuurlijk van schouder tot zoom, waardoor een gevoel van beweging ontstaat terwijl de vorm prachtig in balans blijft. Een kenmerkend goudkleurig Bint Saeed embleem staat subtiel aan de voorkant als verfijnde uitdrukking van de huisidentiteit.',
      `De zachte ${adj} tint brengt warmte en vrouwelijkheid in het ontwerp, waardoor het even geschikt is voor vieringen, intieme bijeenkomsten, bestemmingsevenementen en momenten die om ingetogen elegantie vragen. De luchtige constructie laat het silhouet rond het lichaam zweven en creeert een aanwezigheid die zowel verfijnd als moeiteloos aanvoelt.`,
      'Ontworpen om seizoen na seizoen te dragen, wordt de Nothing Hill Kaftan niet bepaald door trends of gelegenheden alleen. Het is een stuk dat gekozen wordt om het gemak waarmee je je mooi kunt kleden, of het nu voor een speciaal evenement, een avondbijeenkomst of een moment om te onthouden is.',
      'Licht, gracieus en tijdloos wordt het onderdeel van het verhaal van de vrouw en vergezelt het haar overal waar het leven haar brengt.',
    ],
    productDetails: [
      `Zachte ${adj} chiffon kaftan`,
      'Vloeiend gelaagd silhouet met gracieuze beweging',
      'Vaste binnenjurk voor draaggemak',
      'Elegante bateau-hals',
      'Kenmerkend goudkleurig Bint Saeed embleem inbegrepen',
      'Zacht gedrapeerde chiffonpanelen voor vloeiende beweging',
      'Lichte constructie ontworpen voor comfort en elegantie',
      'Ontworpen om natuurlijk mee te bewegen met de draagster',
      'Geschikt voor vieringen, bijeenkomsten, bestemmingsevenementen en speciale gelegenheden',
      'Luchtig silhouet met zachte vrouwelijke valling',
      `Kleur: ${label}`,
      'Gemaakt in Abu Dhabi, VAE',
      `Productcode: ${buildVariantSku(NOTHING_HILL_STYLE_SKU, label)}`,
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

export function buildBelgraviaAbayaContentNl(color?: string): ProductPdpContent {
  const { label } = BELGRAVIA_COLOR_COPY[normalizeBelgraviaColor(color)]

  return {
    introParagraphs: [
      'De Belgravia Abaya is geinspireerd op de Bisht, een van de meest herkenbare kledingstukken van het Arabisch Schiereiland, opnieuw vertaald naar een eigentijds silhouet voor het moderne leven.',
      'Beschikbaar in Deep Black en Navy Blue, onderscheidt deze abaya zich door een handgeweven afwerking geinspireerd op Al Khous, de traditionele Emirati kunst van het vlechten van palmbladeren die van generatie op generatie wordt doorgegeven. Het patroon verwijst naar de geometrie van geweven palmbladeren en brengt textuur en cultureel vakmanschap in een elegant, ingetogen silhouet.',
      'Gemaakt in Abu Dhabi weerspiegelt de Belgravia Abaya Bint Saeeds toewijding om traditioneel vakmanschap voort te dragen via hedendaags ontwerp. De ontspannen Bisht-geinspireerde snit zorgt voor gracieuze beweging met behoud van verfijnde structuur, terwijl verborgen zakken en een volledig gevoerde constructie comfort en draaggemak bieden.',
      'Ontworpen om moeiteloos te bewegen tussen gelegenheden, landen en levensstijlen, kan de Belgravia Abaya worden gedragen naar een bruiloft in Riyad, een diner in Londen, een evenement in Parijs of het dagelijks leven in de Golfregio. Tijdloos in plaats van trendgedreven is dit stuk gemaakt voor vrouwen die elegantie, vakmanschap en kleding waarderen die overal relevant blijft.',
      'Zoals alle Bint Saeed abaya\'s wordt de Belgravia Abaya op bestelling gemaakt en kan deze worden gepersonaliseerd met een naam, datum of betekenisvolle boodschap in de verborgen zak.',
    ],
    productDetails: [
      'Bisht-geinspireerd abaya silhouet',
      'Beschikbaar in Deep Black en Navy Blue',
      'Handgeweven afwerking geinspireerd op traditionele Al Khous palmbladweving',
      'Open voorkant constructie',
      'Optionele verborgen drukknoopsluiting beschikbaar op aanvraag',
      'Volledig gevoerd voor comfort en een verfijnde afwerking',
      'Verborgen zijzakken',
      'Personalisatie beschikbaar in de verborgen zak',
      'Ontspannen vloeiend silhouet ontworpen voor bewegingsvrijheid',
      'Lichte crepe blend buitenstof',
      'Eigentijds ontwerp geinspireerd op Emirati en GCC tradities en ambachten',
      'Geschikt voor dagelijkse elegantie, bijeenkomsten, bruiloften en speciale gelegenheden',
      'Modelhoogte: 155 cm / 61 inch',
      'Lengte: 138 cm / 54.5 inch',
      `Kleur: ${label}`,
      'Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten',
    ],
    compositionDetails: [...BELGRAVIA_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      'Beschikbare maten: XS, S, M, L, XL, XXL',
      'Lengte: 138 cm / 54.5 inch',
      'Modelhoogte: 155 cm / 61 inch',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    faq: getBelgraviaPdpFaq('nl'),
  }
}

const KENSINGTON_COMPOSITION_DETAILS = [
  'Buitenkant: 80% Polyester, 20% Viscose',
  'Voering: 70% Polyester, 30% Viscose',
] as const

export function buildKensingtonAbayaContentNl(): ProductPdpContent {
  return {
    introParagraphs: [
      'De Kensington Abaya is ontworpen voor vrouwen die zelfvertrouwen waarderen dat wordt uitgedrukt door eenvoud. Gemaakt in diepzwart met een strak verlengd silhouet, creeert hij aanwezigheid door structuur, beweging en proportie in plaats van versiering.',
      'Geinspireerd door het zelfvertrouwen en de structuur van maatwerk outerwear combineert de Kensington Abaya het gemak van traditionele kleding met de verzorgde uitstraling van een goed gesneden blazer. Strakke lijnen over schouders en lichaam zorgen voor een silhouet dat rustig, elegant en moeiteloos draagbaar aanvoelt.',
      'Getextureerde afwerkingen op borst en manchetten zijn geinspireerd op Al Khous, de traditionele Emirati kunst van palmbladweving die generaties lang is doorgegeven. Geinterpreteerd via een subtiele zwarte glitter organza-weving voegt dit detail diepte en textuur toe terwijl het ingetogen blijft.',
      'Ontworpen om moeiteloos te combineren over jurken, tailoring, gelegenheidskleding of dagelijkse outfits, schakelt hij natuurlijk tussen dagelijks leven, zakelijke meetings, diners, bijeenkomsten, reizen en speciale gelegenheden. De tijdloze esthetiek laat hem bewegen door landen, seizoenen en levensfasen terwijl hij verbonden blijft met het vakmanschap en de elegantie die hem inspireerden.',
      'Volledig gevoerd met zachte crepe voering en afgewerkt met twee verborgen zijzakken, brengt de Kensington Abaya functionaliteit en verfijning samen met behoud van een strak, elegant silhouet. Zoals alle Bint Saeed abaya\'s kan hij worden gepersonaliseerd met een verborgen binnenlabel met naam, datum of betekenisvolle boodschap, bijzonder waardevol als geschenk.',
      'Elegant, veelzijdig en gemaakt om jarenlang te dragen in plaats van seizoensgebonden, is de Kensington Abaya ontworpen om de vrouw overal te vergezellen waar het leven haar brengt.',
    ],
    productDetails: [
      'Deep Black',
      'Ronde halslijn',
      'Lichte schoudervulling',
      'Drukknoopsluiting aan de voorkant',
      'Kenmerkende Bint Saeed geweven afwerking geinspireerd op traditionele Al Khous palmbladweving',
      'Twee verborgen zijzakken',
      'Zachte crepe voering',
      'Optioneel verborgen binnenlabel voor personalisatie',
      'Lengte: 138 cm / 54.5 inch',
      'Modelhoogte: 155 cm / 61 inch',
      'Model draagt maat XS',
      'Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten',
    ],
    compositionDetails: [...KENSINGTON_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      'Beschikbare maten: XS, S, M, L, XL',
      'Ontworpen voor een gestructureerde maar vloeiende pasvorm',
      'Lengte: 138 cm / 54.5 inch',
      'Modelhoogte: 155 cm / 61 inch',
      'Model draagt maat XS',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    faq: getKensingtonPdpFaq('nl'),
  }
}

function isKnightsbridgeNavyColor(color?: string): boolean {
  return (color ?? '').toLowerCase().includes('navy')
}

export function buildKnightsbridgeAbayaJacketContentNl(color?: string): ProductPdpContent {
  const catalogColor = isKnightsbridgeNavyColor(color) ? 'Navy Grey' : 'Dark Brown'
  const colorLabel = knightsbridgePdpColorLabel(catalogColor, 'nl')

  return {
    introParagraphs: [
      'Vrouwen met een moeiteloze stijl zijn vaak degenen die het minst geinteresseerd zijn in trends volgen. Omdat ze niet bang zijn zichzelf te zijn, zijn zij meestal juist degenen die trends zetten.',
      'De Khous Jacket Abaya is gemaakt voor vrouwen die zelfverzekerd door het leven bewegen op hun eigen voorwaarden. Tussen een abaya en een jas in combineert hij het gemak van traditionele kleding met het zelfvertrouwen van eigentijdse outerwear.',
      'Gesneden in een ontspannen silhouet en beschikbaar in Donkerbruin en Marinegrijs, wordt hij moeiteloos gelaagd over jurken, tailoring, knitwear en dagelijkse essentials. Gedragen met sneakers of hakken past hij zich natuurlijk aan veranderende omgevingen aan en is hij een ideale metgezel voor reizen, dagelijks dragen en leven tussen steden.',
      'Getextureerde details op de borstzakken en manchetten zijn geinspireerd op Al Khous, de traditionele Emirati kunst van palmbladweving die van generatie op generatie wordt doorgegeven. Herinterpreteerd in eigentijds ontwerp brengen deze details diepte, structuur en karakter met behoud van een verfijnde uitstraling.',
      'Kenmerkende schouderdetails geven het silhouet een subtiele militaire invloed en creeren een zelfverzekerde aanwezigheid in balans met comfort en bewegingsvrijheid. Vier functionele zakken, waaronder twee borstzakken en twee verborgen zijzakken, versterken de praktische inzetbaarheid voor dagelijks leven.',
      'Afgewerkt met Bint Saeeds kenmerkende goudkleurige Knotted Lines of Lineage knopen draagt het ontwerp een van de blijvende codes van het huis. Geinspireerd door verbindingen die generaties samenbrengen, herinneren deze details eraan dat de meest betekenisvolle dingen vaak die zijn die we doorgeven.',
      'Gemaakt in Abu Dhabi weerspiegelt de Khous Jacket Abaya Bint Saeeds toewijding om elementen van Emirati erfgoed in een eigentijdse garderobe te brengen. Of hij nu wordt gedragen voor koffie in Londen, een reisdag, een meeting in Dubai of dagelijks leven in de Golf, hij biedt een onderscheidend silhouet voor vrouwen die begrijpen dat stijl niet alleen voor speciale gelegenheden is.',
      'Comfortabel, veelzijdig en ontworpen om vaak te dragen, viert de Khous Jacket Abaya het idee dat ware elegantie niet alleen zichtbaar is in grote momenten, maar in de manier waarop een vrouw zich elke dag presenteert.',
    ],
    productDetails: [
      `${colorLabel} jacket abaya met ontspannen silhouet`,
      'Puntkraag',
      'Verborgen knoopsluiting aan de voorkant',
      'Twee borstzakken',
      'Twee verborgen zijzakken',
      'Schoudertab detail',
      'Lange mouwen met manchetten met knoop',
      'Kenmerkende Bint Saeed Khous-geinspireerde geweven details op borstzakken en manchetten',
      'Kenmerkende goudkleurige Bint Saeed Knotted Lines of Lineage knopen',
      'Vaste binnenjurk',
      'Optioneel verborgen binnenlabel voor personalisatie met naam, datum of betekenisvolle boodschap',
      `Kleur: ${colorLabel} met natuurlijk Khous-contrastdetail`,
      'Lengte: 143 cm / 56.3 inch',
      'Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten',
    ],
    compositionDetails: [
      'Buitenkant: 60% Polyester, 40% Katoen',
      'Binnenjurk: 100% Polyester',
    ],
    fitAndSizeDetails: [
      'Modelhoogte: 160 cm / 63 inch',
      'Model draagt maat XS',
      'Ontworpen voor een ontspannen pasvorm',
      'Beschikbare maten: XS, S, M, L, XL, XXL',
    ],
    careDetails: ['Alleen professionele stomerij'],
    faq: getKnightsbridgePdpFaq('nl'),
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

/** Dutch PDP copy for hero products; returns null for other slugs. */
export function getProductPdpContentNl(product: Product, color?: string): ProductPdpContent | null {
  if (isMayfairKaftan(product)) return buildMayfairKaftanContentNl(color)
  if (isNothingHillKaftan(product)) return buildNothingHillKaftanContentNl(color)
  if (isBelgraviaAbaya(product)) return buildBelgraviaAbayaContentNl(color)
  if (isKensingtonAbaya(product)) return buildKensingtonAbayaContentNl()
  if (isKnightsbridgeAbayaJacket(product)) return buildKnightsbridgeAbayaJacketContentNl(color)
  if (isKnightsbridgeDress(product)) return buildKnightsbridgeDressPdpContent(color, 'nl')
  return null
}
