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
  'deep-maroon': { label: 'Deep Maroon', adj: 'granate intenso' },
  black: { label: 'Black', adj: 'negro' },
  peach: { label: 'Peach', adj: 'melocoton' },
}

function normalizeMayfairColor(color?: string): MayfairColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('black')) return 'black'
  if (c.includes('peach')) return 'peach'
  return 'deep-maroon'
}

const NOTHING_HILL_STYLE_SKU = 'BS-KF-002'

const KAFTAN_COMPOSITION_DETAILS = [
  'Exterior: Crepe Chiffon (100% Poliester)',
  'Vestido interior: 100% Poliester',
] as const

const NOTHING_HILL_COMPOSITION_DETAILS = [
  'Exterior: Chiffon (100% Poliester)',
  'Vestido interior: 100% Poliester',
] as const

const KAFTAN_CARE_DETAILS = [
  'Se recomienda limpieza en seco profesional',
  'Lavado a mano suave con agua fria si es necesario',
  'No usar lejia',
  'No secar en secadora',
] as const

const ABAYA_CARE_DETAILS = ['Solo limpieza en seco profesional'] as const

const BELGRAVIA_COMPOSITION_DETAILS = [
  'Exterior: Mezcla ligera de crepe (80% poliester, 20% viscosa)',
  'Composicion del forro: (70% poliester, 30% viscosa)',
] as const

function cmToInches(cm: number): number {
  return Math.round(cm / 2.54)
}

function kaftanFitAndSizeDetails(maxLengthCm: number, opts?: { includeAdjustableTies?: boolean }): string[] {
  const lines = [
    'Talla unica',
    `Largo maximo de la prenda: ${maxLengthCm} cm / ${cmToInches(maxLengthCm)} pulgadas`,
  ]
  if (opts?.includeAdjustableTies !== false) {
    lines.push('Silueta ajustable mediante lazos internos ocultos')
  }
  lines.push('La modelo mide 155 cm / 61 pulgadas')
  return lines
}

export function buildMayfairKaftanContentEs(color?: string): ProductPdpContent {
  const { label, adj } = MAYFAIR_COLOR_COPY[normalizeMayfairColor(color)]

  return {
    introParagraphs: [
      `El Kaftan Mayfair esta disenado para mujeres que entienden que la elegancia nunca es estatica. Confeccionado en crepe chiffon ${adj} y superpuesto sobre un vestido interior incorporado, este kaftan de chiffon ${adj} crea una silueta fluida que cae con naturalidad del hombro al bajo.`,
      'Un detalle de panuelo de caida suave desciende desde el hombro izquierdo y puede estilizarse en diagonal sobre el cuerpo con el alfiler emblema dorado signature de Bint Saeed. Los lazos internos ocultos permiten ajustar la silueta de varias maneras, creando una forma tipo capa fluida o un perfil mas definido. El resultado es una prenda que se transforma con la mujer que la lleva, adaptandose naturalmente a distintas ocasiones y momentos.',
      'Ligero, versatil y disenado para usarse durante anos en lugar de temporadas, el Kaftan Mayfair se mueve con facilidad entre ocasiones. Usado para una boda, una celebracion, una cena en el extranjero o un dia ordinario que merece algo extraordinario, se adapta de forma natural a la vida de quien lo lleva. No esta definido por un destino, una ciudad o un momento. Se vuelve parte de su historia y viaja con ella donde vaya.',
      'Es una pieza elegida no solo por como se ve, sino por como hace sentir a una mujer en el momento en que se la pone.',
    ],
    productDetails: [
      `Kaftan de crepe chiffon ${adj}`,
      'Silueta fluida con construccion en capas',
      'Vestido interior incorporado para facilidad de uso',
      'Escote en V',
      'Detalle de panuelo incorporado drapeado desde el hombro izquierdo',
      'Incluye alfiler emblema dorado signature de Bint Saeed',
      'El panuelo puede estilizarse en diagonal sobre el cuerpo',
      'Construccion con lazos internos ocultos que permite multiples estilos',
      'Puede usarse con una silueta fluida o una forma suavemente definida',
      'Mangas de corte abierto que crean movimiento elegante',
      'Construccion ligera disenada para comodidad y elegancia',
      `Color: ${label}`,
      'Hecho en Abu Dhabi, UAE',
    ],
    compositionDetails: [...KAFTAN_COMPOSITION_DETAILS],
    fitAndSizeDetails: kaftanFitAndSizeDetails(165),
    careDetails: [...KAFTAN_CARE_DETAILS],
  }
}

type NothingHillColorKey = 'peach-pink' | 'black' | 'peach'

const NOTHING_HILL_COLOR_COPY: Record<NothingHillColorKey, { label: string; adj: string }> = {
  'peach-pink': { label: 'Peach Pink', adj: 'rosa melocoton' },
  peach: { label: 'Peach', adj: 'melocoton' },
  black: { label: 'Black', adj: 'negro' },
}

function normalizeNothingHillColor(color?: string): NothingHillColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('black')) return 'black'
  if (c.includes('peach pink') || c.includes('peach-pink')) return 'peach-pink'
  if (c.includes('peach')) return 'peach'
  return 'peach-pink'
}

export function buildNothingHillKaftanContentEs(color?: string): ProductPdpContent {
  const { label, adj } = NOTHING_HILL_COLOR_COPY[normalizeNothingHillColor(color)]

  return {
    introParagraphs: [
      `El Kaftan Nothing Hill esta disenado para mujeres que valoran la elegancia en su forma mas natural. Confeccionado con capas de suave chiffon ${adj} y terminado con un refinado escote bateau, crea una silueta fluida que se mueve con gracia en cada paso.`,
      'Ligero y fluido, el chiffon cae de manera natural desde el hombro hasta el bajo, creando sensacion de movimiento mientras mantiene una forma equilibrada. Un emblema dorado signature de Bint Saeed se ubica discretamente al frente, ofreciendo una expresion sutil de la identidad de la casa.',
      `El tono suave ${adj} aporta calidez y feminidad al diseno, haciendolo igual de adecuado para celebraciones, reuniones intimas, eventos de destino y ocasiones que requieren una elegancia discreta. La construccion aireada permite que la silueta flote alrededor del cuerpo, creando una presencia refinada y natural al mismo tiempo.`,
      'Disenado para usarse temporada tras temporada, el Kaftan Nothing Hill no se define solo por tendencias u ocasiones. Es una pieza elegida por la facilidad que aporta para vestir con elegancia, ya sea para un evento especial, una reunion nocturna o un momento que merece recordarse.',
      'Ligero, elegante y atemporal, se vuelve parte de la historia de la mujer que lo lleva, acompanandola donde la vida la lleve.',
    ],
    productDetails: [
      `Kaftan de suave chiffon ${adj}`,
      'Silueta fluida en capas con movimiento elegante',
      'Vestido interior incorporado para facilidad de uso',
      'Elegante escote bateau',
      'Incluye emblema dorado signature de Bint Saeed',
      'Paneles de chiffon drapeado suave que crean movimiento fluido',
      'Construccion ligera disenada para comodidad y elegancia',
      'Disenado para moverse naturalmente con quien lo lleva',
      'Adecuado para celebraciones, reuniones, eventos de destino y ocasiones especiales',
      'Silueta aireada con drapeado femenino suave',
      `Color: ${label}`,
      'Hecho en Abu Dhabi, UAE',
      `Codigo de producto: ${buildVariantSku(NOTHING_HILL_STYLE_SKU, label)}`,
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

export function buildBelgraviaAbayaContentEs(color?: string): ProductPdpContent {
  const { label } = BELGRAVIA_COLOR_COPY[normalizeBelgraviaColor(color)]

  return {
    introParagraphs: [
      'La Abaya Belgravia se inspira en el Bisht, una de las prendas mas reconocibles de la Peninsula Arabiga, reinterpretada mediante una silueta contemporanea disenada para la vida moderna.',
      'Disponible en Deep Black y Navy Blue, esta abaya se distingue por un ribete tejido a mano inspirado en Al Khous, el arte tradicional emirati de tejido de hojas de palma transmitido de generacion en generacion. El patron hace referencia a la geometria de las hojas entrelazadas, introduciendo textura y artesania cultural en una silueta elegante y discreta.',
      'Creada en Abu Dhabi, la Abaya Belgravia refleja el compromiso de Bint Saeed de llevar la artesania tradicional hacia adelante mediante diseno contemporaneo. Su corte relajado inspirado en el Bisht crea un movimiento elegante mientras mantiene una estructura refinada, y los bolsillos ocultos junto con la construccion totalmente forrada aseguran comodidad y facilidad de uso.',
      'Disenada para pasar con naturalidad entre ocasiones, paises y estilos de vida, la Abaya Belgravia puede usarse para una boda en Riyadh, una cena en Londres, un evento en Paris o la vida diaria en el Golfo. Atemporal en lugar de guiada por tendencias, esta creada para mujeres que valoran la elegancia, la artesania y piezas que siguen siendo relevantes donde sea que se usen.',
      'Como todas las abayas de Bint Saeed, la Abaya Belgravia se confecciona bajo pedido y puede personalizarse con un nombre, una fecha o un mensaje significativo dentro del bolsillo oculto.',
    ],
    productDetails: [
      'Silueta de abaya inspirada en el Bisht',
      'Disponible en Deep Black y Navy Blue',
      'Ribete tejido a mano inspirado en Al Khous, tejido tradicional de hojas de palma',
      'Construccion frontal abierta',
      'Cierre opcional oculto de botones a presion disponible bajo solicitud',
      'Totalmente forrada para comodidad y acabado refinado',
      'Bolsillos laterales ocultos',
      'Personalizacion disponible dentro del bolsillo oculto',
      'Silueta relajada y fluida disenada para facilidad de movimiento',
      'Tejido exterior de mezcla ligera de crepe',
      'Diseno contemporaneo inspirado en tradiciones y artesania emirati y GCC',
      'Adecuada para elegancia diaria, reuniones, bodas y ocasiones especiales',
      'Altura de la modelo: 155 cm / 61 pulgadas',
      'Largo: 138 cm / 54.5 pulgadas',
      `Color: ${label}`,
      'Hecha en Abu Dhabi, Emiratos Arabes Unidos',
    ],
    compositionDetails: [...BELGRAVIA_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      'Tallas disponibles: XS, S, M, L, XL, XXL',
      'Largo: 138 cm / 54.5 pulgadas',
      'Altura de la modelo: 155 cm / 61 pulgadas',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    faq: getBelgraviaPdpFaq('es'),
  }
}

const KENSINGTON_COMPOSITION_DETAILS = [
  'Exterior: 80% Poliester, 20% Viscosa',
  'Forro: 70% Poliester, 30% Viscosa',
] as const

export function buildKensingtonAbayaContentEs(): ProductPdpContent {
  return {
    introParagraphs: [
      'La Abaya Kensington fue disenada para mujeres que aprecian la confianza expresada a traves de la simplicidad. Confeccionada en negro intenso con una silueta limpia y alargada, crea presencia mediante estructura, movimiento y proporcion en lugar de ornamento.',
      'Inspirada en la confianza y la estructura de la sastreria exterior, la Abaya Kensington combina la facilidad de la vestimenta tradicional con la apariencia pulida de un blazer bien cortado. Las lineas limpias en hombros y cuerpo crean una silueta serena, elegante y facil de llevar.',
      'Los ribetes texturizados en pecho y punos se inspiran en Al Khous, el arte tradicional emirati de tejido de hojas de palma transmitido entre generaciones. Interpretados mediante un sutil tejido de organza negra con brillo, estos detalles introducen profundidad y textura sin perder discrecion.',
      'Disenada para superponerse con facilidad sobre vestidos, sastreria, ropa de ocasion o atuendos diarios, transita naturalmente entre vida cotidiana, reuniones de negocio, cenas, encuentros, viajes y ocasiones especiales. Su estetica atemporal le permite moverse entre paises, estaciones y etapas de la vida manteniendo la conexion con la artesania y la elegancia que inspiraron su creacion.',
      'Totalmente forrada con un suave forro de crepe y terminada con dos bolsillos laterales ocultos, la Abaya Kensington equilibra practicidad y refinamiento mientras mantiene una silueta limpia y elegante. Como todas las abayas de Bint Saeed, puede personalizarse con una etiqueta interior oculta con nombre, fecha o mensaje significativo, haciendo la pieza aun mas especial para regalar.',
      'Elegante, versatil y creada para usarse durante anos y no solo temporadas, la Abaya Kensington esta disenada para acompanar a la mujer que la lleva donde la vida la lleve.',
    ],
    productDetails: [
      'Deep Black',
      'Escote redondo',
      'Ligero relleno en hombros',
      'Cierre frontal con botones a presion',
      'Ribete tejido signature de Bint Saeed inspirado en el tradicional tejido Al Khous de hojas de palma',
      'Dos bolsillos laterales ocultos',
      'Suave forro de crepe',
      'Etiqueta interior oculta opcional para personalizacion',
      'Largo: 138 cm / 54.5 pulgadas',
      'Altura de la modelo: 155 cm / 61 pulgadas',
      'La modelo usa talla XS',
      'Hecha en Abu Dhabi, Emiratos Arabes Unidos',
    ],
    compositionDetails: [...KENSINGTON_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      'Tallas disponibles: XS, S, M, L, XL',
      'Disenada para un ajuste estructurado pero fluido',
      'Largo: 138 cm / 54.5 pulgadas',
      'Altura de la modelo: 155 cm / 61 pulgadas',
      'La modelo usa talla XS',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    faq: getKensingtonPdpFaq('es'),
  }
}

function isKnightsbridgeNavyColor(color?: string): boolean {
  return (color ?? '').toLowerCase().includes('navy')
}

export function buildKnightsbridgeAbayaJacketContentEs(color?: string): ProductPdpContent {
  const catalogColor = isKnightsbridgeNavyColor(color) ? 'Navy Grey' : 'Dark Brown'
  const colorLabel = knightsbridgePdpColorLabel(catalogColor, 'es')

  return {
    introParagraphs: [
      'Las mujeres cuyo estilo se ve natural suelen ser las menos interesadas en seguir tendencias. Sin miedo a ser ellas mismas, normalmente son quienes las marcan.',
      'La Khous Jacket Abaya fue creada para mujeres que avanzan por la vida con confianza en sus propios terminos. Situada entre una abaya y una chaqueta, combina la facilidad de la vestimenta tradicional con la seguridad de la ropa exterior contemporanea.',
      'Cortada en una silueta relajada y disponible en Dark Brown y Navy Grey, se superpone con facilidad sobre vestidos, sastreria, prendas de punto y esenciales diarios. Con sneakers o tacones, se adapta naturalmente a entornos cambiantes, siendo una companera ideal para viajes, uso diario y vida entre ciudades.',
      'Los detalles texturizados en bolsillos del pecho y punos se inspiran en Al Khous, el arte tradicional emirati de tejido de hojas de palma transmitido entre generaciones. Reinterpretados mediante diseno contemporaneo, estos detalles aportan profundidad, estructura y caracter mientras mantienen una apariencia refinada.',
      'El distintivo detalle en los hombros aporta a la silueta una sutil influencia militar, creando una presencia segura equilibrada con comodidad y libertad de movimiento. Cuatro bolsillos funcionales, incluidos dos bolsillos en el pecho y dos bolsillos laterales ocultos, refuerzan su practicidad para la vida diaria.',
      'Terminada con los botones dorados signature Knotted Lines of Lineage de Bint Saeed, el diseno incorpora uno de los codigos duraderos de la casa. Inspirados en los vinculos que unen generaciones, estos detalles recuerdan que las cosas mas significativas de la vida suelen ser las que llevamos hacia adelante.',
      'Creada en Abu Dhabi, la Khous Jacket Abaya refleja el compromiso de Bint Saeed de llevar elementos de la herencia emirati a un armario contemporaneo. Ya sea para un cafe en Londres, un dia de viaje, una reunion en Dubai o la vida diaria en el Golfo, ofrece una silueta distintiva para mujeres que entienden que el estilo no se reserva para ocasiones especiales.',
      'Comoda, versatil y disenada para usarse con frecuencia, la Khous Jacket Abaya celebra la idea de que la verdadera elegancia se revela no solo en momentos importantes, sino en la forma en que una mujer elige presentarse cada dia.',
    ],
    productDetails: [
      `Abaya tipo chaqueta ${colorLabel} con silueta relajada`,
      'Cuello en punta',
      'Cierre frontal oculto con botones',
      'Dos bolsillos en el pecho',
      'Dos bolsillos laterales ocultos',
      'Detalle de trabilla en hombro',
      'Mangas largas con punos abotonados',
      'Detalle tejido signature de Bint Saeed inspirado en Khous en bolsillos del pecho y punos',
      'Botones dorados signature Bint Saeed Knotted Lines of Lineage',
      'Vestido interior incorporado',
      'Etiqueta interior oculta opcional para personalizacion con nombre, fecha o mensaje significativo',
      `Color: ${colorLabel} con detalles de contraste Khous natural`,
      'Largo: 143 cm / 56.3 pulgadas',
      'Hecha en Abu Dhabi, Emiratos Arabes Unidos',
    ],
    compositionDetails: [
      'Exterior: 60% Poliester, 40% Algodon',
      'Vestido interior: 100% Poliester',
    ],
    fitAndSizeDetails: [
      'Altura de la modelo: 160 cm / 63 pulgadas',
      'La modelo usa talla XS',
      'Disenada para un ajuste relajado',
      'Tallas disponibles: XS, S, M, L, XL, XXL',
    ],
    careDetails: ['Solo limpieza en seco profesional'],
    faq: getKnightsbridgePdpFaq('es'),
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

/** Spanish PDP copy for hero products; returns null for other slugs. */
export function getProductPdpContentEs(product: Product, color?: string): ProductPdpContent | null {
  if (isMayfairKaftan(product)) return buildMayfairKaftanContentEs(color)
  if (isNothingHillKaftan(product)) return buildNothingHillKaftanContentEs(color)
  if (isBelgraviaAbaya(product)) return buildBelgraviaAbayaContentEs(color)
  if (isKensingtonAbaya(product)) return buildKensingtonAbayaContentEs()
  if (isKnightsbridgeAbayaJacket(product)) return buildKnightsbridgeAbayaJacketContentEs(color)
  if (isKnightsbridgeDress(product)) return buildKnightsbridgeDressPdpContent(color, 'es')
  return null
}
