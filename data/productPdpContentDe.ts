import type { Product } from '@/data/products'
import { buildKnightsbridgeDressPdpContent } from '@/data/knightsbridgeDressPdpContent'
import type { ProductPdpContent } from '@/data/productPdpContent'
import { getProductSlug } from '@/lib/products/links'
import { getBelgraviaPdpFaq } from '@/lib/products/belgraviaSchemaI18n'
import { getKensingtonPdpFaq } from '@/lib/products/kensingtonSchemaI18n'
import { getKnightsbridgePdpFaq } from '@/lib/products/knightsbridgeSchemaI18n'
import {
  getKnightsbridgeStylePairingNote,
  knightsbridgePdpColorLabel,
} from '@/lib/products/knightsbridgePairing'
import { buildVariantSku } from '@/lib/products/sku'

type MayfairColorKey = 'deep-maroon' | 'black' | 'peach'

const MAYFAIR_COLOR_COPY: Record<MayfairColorKey, { label: string; adj: string }> = {
  'deep-maroon': { label: 'Deep Maroon', adj: 'tiefem Bordeaux' },
  black: { label: 'Black', adj: 'schwarzem' },
  peach: { label: 'Peach', adj: 'pfirsichfarbenem' },
}

function normalizeMayfairColor(color?: string): MayfairColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('black')) return 'black'
  if (c.includes('peach')) return 'peach'
  return 'deep-maroon'
}

const NOTHING_HILL_STYLE_SKU = 'BS-KF-002'

const KAFTAN_COMPOSITION_DETAILS = [
  'Aussenstoff: Crepe-Chiffon (100% Polyester)',
  'Innenkleid: 100% Polyester',
] as const

const NOTHING_HILL_COMPOSITION_DETAILS = [
  'Aussenstoff: Chiffon (100% Polyester)',
  'Innenkleid: 100% Polyester',
] as const

const KAFTAN_CARE_DETAILS = [
  'Professionelle chemische Reinigung empfohlen',
  'Bei Bedarf schonende Handwaesche in kaltem Wasser',
  'Nicht bleichen',
  'Nicht im Trockner trocknen',
] as const

const ABAYA_CARE_DETAILS = ['Nur professionelle chemische Reinigung'] as const

const BELGRAVIA_COMPOSITION_DETAILS = [
  'Aussenstoff: Leichter Crepe-Mix (80% Polyester, 20% Viskose)',
  'Futterzusammensetzung: (70% Polyester, 30% Viskose)',
] as const

function cmToInches(cm: number): number {
  return Math.round(cm / 2.54)
}

function kaftanFitAndSizeDetails(maxLengthCm: number, opts?: { includeAdjustableTies?: boolean }): string[] {
  const lines = [
    'Einheitsgroesse',
    `Maximale Laenge des Kleidungsstuecks: ${maxLengthCm} cm / ${cmToInches(maxLengthCm)} Zoll`,
  ]
  if (opts?.includeAdjustableTies !== false) {
    lines.push('Anpassbare Silhouette durch versteckte innere Bindebaender')
  }
  lines.push('Model ist 155 cm / 61 Zoll gross')
  return lines
}

export function buildMayfairKaftanContentDe(color?: string): ProductPdpContent {
  const { label, adj } = MAYFAIR_COLOR_COPY[normalizeMayfairColor(color)]

  return {
    introParagraphs: [
      `Der Mayfair Kaftan wurde fuer Frauen entworfen, die verstehen, dass Eleganz niemals statisch ist. Gefertigt aus ${adj} Crepe-Chiffon und ueber einem integrierten Innenkleid gearbeitet, schafft dieser Kaftan eine fliessende Silhouette, die muhelos von der Schulter bis zum Saum faellt.`,
      'Ein weich fallendes Schal-Detail verlaeuft von der linken Schulter und kann mit der charakteristischen goldfarbenen Bint Saeed Emblem-Nadel diagonal ueber den Koerper gestylt werden. Versteckte innere Bindebaender ermoeglichen mehrere Styling-Varianten - von einer cape-aehnlich fliessenden Form bis zu einem sanft definierteren Profil. So entsteht ein Piece, das sich mit der Frau, die es traegt, veraendert und sich natuerlich an unterschiedliche Anlaesse und Momente anpasst.',
      'Leicht, vielseitig und fuer jahrelanges Tragen statt nur fuer eine Saison konzipiert, wechselt der Mayfair Kaftan muhelos zwischen verschiedenen Anlaessen. Ob fuer eine Hochzeit, eine Feier, ein Dinner im Ausland oder einen gewoehnlichen Tag, der etwas Besonderes verdient - er passt sich dem Leben der Frau, die ihn traegt, ganz natuerlich an. Er wird nicht durch eine Destination, eine Stadt oder einen einzelnen Moment definiert. Er wird Teil ihrer Geschichte und begleitet sie ueberall hin.',
      'Er ist ein Piece, das nicht nur wegen seiner Optik gewaehlt wird, sondern wegen des Gefuehls, das er in dem Moment vermittelt, in dem eine Frau ihn anlegt.',
    ],
    productDetails: [
      `${label} Crepe-Chiffon-Kaftan`,
      'Fliessende Silhouette mit Lagenkonstruktion',
      'Integriertes Innenkleid fuer hohen Tragekomfort',
      'V-Ausschnitt',
      'Integriertes Schal-Detail von der linken Schulter',
      'Signatur Bint Saeed Emblem-Nadel in Goldoptik enthalten',
      'Schal kann diagonal ueber den Koerper gestylt werden',
      'Versteckte innere Bindekonstruktion mit mehreren Styling-Moeglichkeiten',
      'Kann mit fliessender Silhouette oder sanft definierter Form getragen werden',
      'Offen geschnittene Aermel fuer elegante Bewegung',
      'Leichte Konstruktion fuer Komfort und Eleganz',
      `Farbe: ${label}`,
      'Hergestellt in Abu Dhabi, VAE',
    ],
    compositionDetails: [...KAFTAN_COMPOSITION_DETAILS],
    fitAndSizeDetails: kaftanFitAndSizeDetails(165),
    careDetails: [...KAFTAN_CARE_DETAILS],
  }
}

type NothingHillColorKey = 'peach-pink' | 'black' | 'peach'

const NOTHING_HILL_COLOR_COPY: Record<NothingHillColorKey, { label: string; adj: string }> = {
  'peach-pink': { label: 'Peach Pink', adj: 'pfirsichrosa' },
  peach: { label: 'Peach', adj: 'pfirsichfarben' },
  black: { label: 'Black', adj: 'schwarz' },
}

function normalizeNothingHillColor(color?: string): NothingHillColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('black')) return 'black'
  if (c.includes('peach pink') || c.includes('peach-pink')) return 'peach-pink'
  if (c.includes('peach')) return 'peach'
  return 'peach-pink'
}

export function buildNothingHillKaftanContentDe(color?: string): ProductPdpContent {
  const { label, adj } = NOTHING_HILL_COLOR_COPY[normalizeNothingHillColor(color)]

  return {
    introParagraphs: [
      `Der Nothing Hill Kaftan wurde fuer Frauen entworfen, die Eleganz in ihrer muhelosesten Form schaetzen. Aus Lagen von weichem ${adj} Chiffon gefertigt und mit einem eleganten Bateau-Ausschnitt vollendet, entsteht eine fliessende Silhouette, die sich mit jedem Schritt anmutig bewegt.`,
      'Leicht und fliessend faellt der Chiffon natuerlich von der Schulter bis zum Saum und vermittelt Bewegung bei gleichzeitig ausgewogener Form. Das charakteristische goldfarbene Bint Saeed Emblem sitzt dezent auf der Vorderseite und bringt die Identitaet des Hauses subtil zum Ausdruck.',
      `Der sanfte ${adj} Ton verleiht dem Design Waerme und Femininitaet und macht es gleichermassen passend fuer Feiern, intime Zusammenkuenfte, Destination-Events und Anlaesse, die nach zurueckhaltender Eleganz verlangen. Die luftige Konstruktion laesst die Silhouette weich um den Koerper schweben und schafft eine Praesenz, die zugleich raffiniert und muehelos wirkt.`,
      'Fuer das Tragen ueber viele Saisons hinweg konzipiert, wird der Nothing Hill Kaftan nicht allein durch Trends oder einzelne Anlaesse definiert. Er ist ein Piece, das aufgrund der Leichtigkeit gewaehlt wird, die es in schoenes Anziehen bringt - ob fuer einen besonderen Anlass, ein Abendtreffen oder einen erinnerungswuerdigen Moment.',
      'Leicht, anmutig und zeitlos wird er Teil der Geschichte der Frau, die ihn traegt, und begleitet sie ueberallhin.',
    ],
    productDetails: [
      `Weicher ${adj} Chiffon-Kaftan`,
      'Fliessende Lagensilhouette mit eleganter Bewegung',
      'Integriertes Innenkleid fuer hohen Tragekomfort',
      'Eleganter Bateau-Ausschnitt',
      'Signatur Bint Saeed Emblem in Goldoptik enthalten',
      'Weiche drapierte Chiffon-Panels fuer fliessende Bewegung',
      'Leichte Konstruktion fuer Komfort und Eleganz',
      'Entwickelt, um sich natuerlich mit der Traegerin zu bewegen',
      'Geeignet fuer Feiern, Zusammenkuenfte, Destination-Events und besondere Anlaesse',
      'Luftige Silhouette mit sanft femininem Fall',
      `Farbe: ${label}`,
      'Hergestellt in Abu Dhabi, VAE',
      `Produktcode: ${buildVariantSku(NOTHING_HILL_STYLE_SKU, label)}`,
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

export function buildBelgraviaAbayaContentDe(color?: string): ProductPdpContent {
  const { label } = BELGRAVIA_COLOR_COPY[normalizeBelgraviaColor(color)]

  return {
    introParagraphs: [
      'Die Belgravia Abaya ist vom Bisht inspiriert, einem der bekanntesten Kleidungsstuecke der Arabischen Halbinsel, neu interpretiert in einer zeitgenoessischen Silhouette fuer das moderne Leben.',
      'Erhaeltlich in Deep Black und Navy Blue, zeichnet sich die Abaya durch eine handgewebte Borte aus, inspiriert von Al Khous, der traditionellen emiratischen Kunst des Palmblattflechtens, die ueber Generationen weitergegeben wurde. Das Muster greift die Geometrie gewebter Palmwedel auf und bringt Textur sowie kulturelle Handwerkskunst in eine elegante, zurueckhaltende Silhouette.',
      'In Abu Dhabi geschaffen, spiegelt die Belgravia Abaya das Bekenntnis von Bint Saeed wider, traditionelle Handwerkskunst durch zeitgenoessisches Design in die Gegenwart zu tragen. Der entspannte, vom Bisht inspirierte Schnitt sorgt fuer anmutige Bewegung und bewahrt zugleich eine raffinierte Struktur, waehrend versteckte Taschen und vollstaendig gefuetterte Verarbeitung Komfort und Trageleichtigkeit sichern.',
      'Die Belgravia Abaya wurde entworfen, um muhelos zwischen Anlaessen, Laendern und Lebensstilen zu wechseln - tragbar bei einer Hochzeit in Riad, einem Dinner in London, einem Event in Paris oder im Alltag im Golf. Zeitlos statt trendgetrieben ist sie fuer Frauen gemacht, die Eleganz, Handwerk und Pieces schaetzen, die ueberall relevant bleiben.',
      'Wie alle Bint Saeed Abayas wird auch die Belgravia Abaya auf Bestellung gefertigt und kann in der versteckten Tasche mit einem Namen, Datum oder einer bedeutungsvollen Botschaft personalisiert werden.',
    ],
    productDetails: [
      'Vom Bisht inspirierte Abaya-Silhouette',
      'Erhaeltlich in Deep Black und Navy Blue',
      'Handgewebte Borte, inspiriert von traditionellem Al Khous Palmblattflechten',
      'Offene Vorderkonstruktion',
      'Optionaler verdeckter Druckknopfverschluss auf Anfrage verfuegbar',
      'Vollstaendig gefuettert fuer Komfort und ein raffiniertes Finish',
      'Versteckte Seitentaschen',
      'Personalisierung in der versteckten Tasche verfuegbar',
      'Entspannte fliessende Silhouette fuer Bewegungsfreiheit',
      'Leichter Crepe-Mix als Aussenstoff',
      'Zeitgenoessisches Design, inspiriert von emiratischen und GCC-Traditionen und Handwerk',
      'Geeignet fuer alltaegliche Eleganz, Zusammenkuenfte, Hochzeiten und besondere Anlaesse',
      'Modelgroesse: 155 cm / 61 Zoll',
      'Laenge: 138 cm / 54,5 Zoll',
      `Farbe: ${label}`,
      'Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate',
    ],
    compositionDetails: [...BELGRAVIA_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      'Verfuegbare Groessen: XS, S, M, L, XL, XXL',
      'Laenge: 138 cm / 54,5 Zoll',
      'Modelgroesse: 155 cm / 61 Zoll',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    faq: getBelgraviaPdpFaq('de'),
  }
}

const KENSINGTON_COMPOSITION_DETAILS = [
  'Aussenstoff: 80% Polyester, 20% Viskose',
  'Futter: 70% Polyester, 30% Viskose',
] as const

export function buildKensingtonAbayaContentDe(): ProductPdpContent {
  return {
    introParagraphs: [
      'Die Kensington Abaya wurde fuer Frauen entworfen, die Selbstsicherheit schaetzen, die sich durch Schlichtheit ausdrueckt. In tiefem Schwarz gefertigt und mit klarer, verlaengerter Silhouette schafft sie Praesenz durch Struktur, Bewegung und Proportion statt durch Ornament.',
      'Inspiriert von der Souveraenitaet und Struktur massgeschneiderter Outerwear verbindet die Kensington Abaya die Leichtigkeit traditioneller Kleidung mit der gepflegten Erscheinung eines gut geschnittenen Blazers. Klare Linien an Schultern und Koerper erzeugen eine Silhouette, die ruhig, elegant und muhelos zu tragen ist.',
      'Texturierte Besatzdetails an Brust und Buendchen sind von Al Khous inspiriert, der traditionellen emiratischen Kunst des Palmblattflechtens, die ueber Generationen weitergegeben wurde. Durch eine subtile schwarze Glitter-Organza-Webung interpretiert, bringen diese Details Tiefe und Textur ein und bleiben zugleich zurueckhaltend.',
      'Konzipiert fuer muheloses Layering ueber Kleider, Tailoring, Anlassmode oder Alltagslooks, wechselt sie natuerlich zwischen Alltag, Business-Meetings, Dinnern, Zusammenkuenften, Reisen und besonderen Anlaessen. Ihre zeitlose Aesthetik erlaubt es ihr, sich durch Laender, Jahreszeiten und Lebensphasen zu bewegen und zugleich mit dem Handwerk und der Eleganz verbunden zu bleiben, die ihre Entstehung inspiriert haben.',
      'Vollstaendig gefuettert mit weichem Crepe-Futter und mit zwei versteckten Seitentaschen vollendet, balanciert die Kensington Abaya Funktionalitaet und Raffinesse bei einer klaren eleganten Silhouette. Wie alle Bint Saeed Abayas kann sie mit einem versteckten Innenlabel personalisiert werden - mit Name, Datum oder einer bedeutungsvollen Botschaft.',
      'Elegant, vielseitig und fuer jahrelanges Tragen statt fuer Saisons geschaffen, begleitet die Kensington Abaya die Frau, die sie traegt, wohin auch immer das Leben sie fuehrt.',
    ],
    productDetails: [
      'Deep Black',
      'Runder Ausschnitt',
      'Leichte Schulterpolster',
      'Vorderer Druckknopfverschluss',
      'Bint Saeed Signaturbesatz, inspiriert von traditionellem Al Khous Palmblattflechten',
      'Zwei versteckte Seitentaschen',
      'Weiches Crepe-Futter',
      'Optionales verstecktes Innenlabel zur Personalisierung',
      'Laenge: 138 cm / 54,5 Zoll',
      'Modelgroesse: 155 cm / 61 Zoll',
      'Model traegt Groesse XS',
      'Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate',
    ],
    compositionDetails: [...KENSINGTON_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      'Verfuegbare Groessen: XS, S, M, L, XL',
      'Entworfen fuer eine strukturierte und zugleich fliessende Passform',
      'Laenge: 138 cm / 54,5 Zoll',
      'Modelgroesse: 155 cm / 61 Zoll',
      'Model traegt Groesse XS',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    faq: getKensingtonPdpFaq('de'),
  }
}

function isKnightsbridgeNavyColor(color?: string): boolean {
  return (color ?? '').toLowerCase().includes('navy')
}

export function buildKnightsbridgeAbayaJacketContentDe(color?: string): ProductPdpContent {
  const catalogColor = isKnightsbridgeNavyColor(color) ? 'Navy Grey' : 'Dark Brown'
  const colorLabel = knightsbridgePdpColorLabel(catalogColor, 'de')

  return {
    introParagraphs: [
      'Frauen, deren Stil muhelos wirkt, sind oft diejenigen, die am wenigsten daran interessiert sind, Trends zu folgen. Unerschrocken sie selbst, sind sie meist die Frauen, die Trends setzen.',
      'Die Khous Jacket Abaya wurde fuer Frauen geschaffen, die selbstbewusst zu ihren eigenen Bedingungen durchs Leben gehen. Zwischen Abaya und Jacke positioniert, verbindet sie die Leichtigkeit traditioneller Kleidung mit der Souveraenitaet zeitgenoessischer Outerwear.',
      'In entspannter Silhouette geschnitten und in Dark Brown sowie Navy Grey erhaeltlich, laesst sie sich muhelos ueber Kleider, Tailoring, Knitwear und Alltags-Essentials layern. Ob mit Sneakern oder Heels getragen - sie passt sich veraendernden Umgebungen natuerlich an und ist damit ideal fuer Reisen, den Alltag und das Leben zwischen Staedten.',
      'Texturierte Details an Brusttaschen und Manschetten sind von Al Khous inspiriert, der traditionellen emiratischen Kunst des Palmblattflechtens, die ueber Generationen weitergegeben wurde. Zeitgenoessisch neu interpretiert, bringen diese Details Tiefe, Struktur und Charakter in die Silhouette und bewahren zugleich ein raffiniertes Erscheinungsbild.',
      'Markante Schulterdetails verleihen der Silhouette einen subtilen militaerischen Einfluss und schaffen eine praesente Ausstrahlung, ausbalanciert durch Komfort und Bewegungsfreiheit. Vier funktionale Taschen - darunter zwei Brusttaschen und zwei versteckte Seitentaschen - unterstreichen ihre Alltagstauglichkeit.',
      'Abgerundet mit den charakteristischen goldfarbenen Knotted Lines of Lineage Knoepfen von Bint Saeed traegt das Design einen der bleibenden Codes des Hauses. Inspiriert von Verbindungen zwischen Generationen erinnern diese Details daran, dass die bedeutungsvollsten Dinge oft jene sind, die wir weitertragen.',
      'In Abu Dhabi geschaffen, spiegelt die Khous Jacket Abaya Bint Saeeds Engagement wider, Elemente emiratischen Erbes in eine zeitgenoessische Garderobe zu tragen. Ob fuer einen Kaffee in London, einen Reisetag, ein Meeting in Dubai oder den Alltag im Golf - sie bietet eine unverwechselbare Silhouette fuer Frauen, die wissen, dass Stil nicht nur fuer besondere Anlaesse gedacht ist.',
      'Komfortabel, vielseitig und fuer haeufiges Tragen entworfen, feiert die Khous Jacket Abaya die Idee, dass wahre Eleganz nicht nur in grossen Momenten sichtbar wird, sondern darin, wie eine Frau sich jeden Tag praesentiert.',
    ],
    productDetails: [
      `${colorLabel} Jacket-Abaya mit entspannter Silhouette`,
      'Spitzer Kragen',
      'Verdeckter vorderer Knopfverschluss',
      'Zwei Brusttaschen',
      'Zwei versteckte Seitentaschen',
      'Schulterriegel-Detail',
      'Lange Aermel mit geknoepften Manschetten',
      'Bint Saeed Signatur-Khous-inspiriertes Webdetail an Brusttaschen und Manschetten',
      'Bint Saeed Signatur-Knoepfe in Goldoptik Knotted Lines of Lineage',
      'Integriertes Innenkleid',
      'Optionales verstecktes Innenlabel zur Personalisierung mit Name, Datum oder bedeutungsvoller Botschaft',
      `Farbe: ${colorLabel} mit natuerlichem Khous-Kontrastdetail`,
      'Laenge: 143 cm / 56,3 Zoll',
      'Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate',
    ],
    compositionDetails: [
      'Aussenstoff: 60% Polyester, 40% Baumwolle',
      'Innenkleid: 100% Polyester',
    ],
    fitAndSizeDetails: [
      'Modelgroesse: 160 cm / 63 Zoll',
      'Model traegt Groesse XS',
      'Entworfen fuer eine entspannte Passform',
      'Verfuegbare Groessen: XS, S, M, L, XL, XXL',
    ],
    careDetails: ['Nur professionelle chemische Reinigung'],
    stylePairingNote: getKnightsbridgeStylePairingNote('knightsbridge-abaya-jacket', catalogColor, 'de'),
    faq: getKnightsbridgePdpFaq('de'),
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

/** German PDP copy for hero products; returns null for other slugs. */
export function getProductPdpContentDe(product: Product, color?: string): ProductPdpContent | null {
  if (isMayfairKaftan(product)) return buildMayfairKaftanContentDe(color)
  if (isNothingHillKaftan(product)) return buildNothingHillKaftanContentDe(color)
  if (isBelgraviaAbaya(product)) return buildBelgraviaAbayaContentDe(color)
  if (isKensingtonAbaya(product)) return buildKensingtonAbayaContentDe()
  if (isKnightsbridgeAbayaJacket(product)) return buildKnightsbridgeAbayaJacketContentDe(color)
  if (isKnightsbridgeDress(product)) return buildKnightsbridgeDressPdpContent(color, 'de')
  return null
}
