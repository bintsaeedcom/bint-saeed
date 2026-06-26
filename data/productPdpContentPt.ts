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
  'deep-maroon': { label: 'Deep Maroon', adj: 'bordo profundo' },
  black: { label: 'Black', adj: 'preto' },
  peach: { label: 'Peach', adj: 'pessego' },
}

function normalizeMayfairColor(color?: string): MayfairColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('black')) return 'black'
  if (c.includes('peach')) return 'peach'
  return 'deep-maroon'
}

const NOTHING_HILL_STYLE_SKU = 'BS-KF-002'

const KAFTAN_COMPOSITION_DETAILS = [
  'Exterior: Crepe Chiffon (100% Polyester)',
  'Vestido interno: 100% Polyester',
] as const

const NOTHING_HILL_COMPOSITION_DETAILS = [
  'Exterior: Chiffon (100% Polyester)',
  'Vestido interno: 100% Polyester',
] as const

const KAFTAN_CARE_DETAILS = [
  'Lavagem a seco profissional recomendada',
  'Lavagem a mao suave em agua fria se necessario',
  'Nao usar lixivia',
  'Nao usar secadora',
] as const

const ABAYA_CARE_DETAILS = ['Apenas limpeza a seco profissional'] as const

const BELGRAVIA_COMPOSITION_DETAILS = [
  'Exterior: Mistura leve de crepe (80% polyester, 20% viscose)',
  'Composicao do forro: (70% polyester, 30% viscose)',
] as const

function cmToInches(cm: number): number {
  return Math.round(cm / 2.54)
}

function kaftanFitAndSizeDetails(maxLengthCm: number, opts?: { includeAdjustableTies?: boolean }): string[] {
  const lines = [
    'Tamanho unico',
    `Comprimento maximo da peca: ${maxLengthCm} cm / ${cmToInches(maxLengthCm)} polegadas`,
  ]
  if (opts?.includeAdjustableTies !== false) {
    lines.push('Silhueta ajustavel atraves de amarracoes internas escondidas')
  }
  lines.push('A modelo mede 155 cm / 61 polegadas')
  return lines
}

export function buildMayfairKaftanContentPt(color?: string): ProductPdpContent {
  const { label, adj } = MAYFAIR_COLOR_COPY[normalizeMayfairColor(color)]

  return {
    introParagraphs: [
      `O Kaftan Mayfair foi criado para mulheres que entendem que a elegancia nunca e estatica. Confeccionado em crepe chiffon ${adj} e sobreposto a um vestido interno preso, este kaftan de chiffon ${adj} cria uma silhueta fluida que cai naturalmente dos ombros ate a barra.`,
      'Um detalhe de echarpe cai suavemente do ombro esquerdo e pode ser estilizado na diagonal sobre o corpo com o alfinete de emblema dourado assinatura da Bint Saeed. Amarracoes internas escondidas permitem ajustar a silhueta de varias formas, criando uma forma fluida semelhante a capa ou um perfil mais definido. O resultado e uma peca que se transforma com a mulher que a veste, adaptando-se naturalmente a diferentes ocasioes e momentos.',
      'Leve, versatil e criada para ser usada por anos e nao apenas por uma estacao, o Kaftan Mayfair transita com facilidade entre ocasioes. Usado num casamento, numa celebracao, num jantar no exterior ou num dia comum que merece algo extraordinario, adapta-se naturalmente a vida da mulher que o veste. Nao e definido por um destino, uma cidade ou um momento. Torna-se parte da historia dela e acompanha-a para onde quer que va.',
      'E uma peca escolhida nao so pela aparencia, mas pela sensacao que oferece a mulher no instante em que a veste.',
    ],
    productDetails: [
      `Kaftan de crepe chiffon ${adj}`,
      'Silhueta fluida com construcao em camadas',
      'Vestido interno preso para facilitar o uso',
      'Decote em V',
      'Detalhe de echarpe presa e drapeada a partir do ombro esquerdo',
      'Alfinete de emblema dourado assinatura da Bint Saeed incluido',
      'A echarpe pode ser estilizada na diagonal sobre o corpo',
      'Construcao com amarracao interna escondida permitindo varias formas de styling',
      'Pode ser usado com silhueta fluida ou forma suavemente definida',
      'Mangas de corte aberto que criam movimento gracioso',
      'Construcao leve desenhada para conforto e elegancia',
      `Cor: ${label}`,
      'Feito em Abu Dhabi, EAU',
    ],
    compositionDetails: [...KAFTAN_COMPOSITION_DETAILS],
    fitAndSizeDetails: kaftanFitAndSizeDetails(165),
    careDetails: [...KAFTAN_CARE_DETAILS],
  }
}

type NothingHillColorKey = 'peach-pink' | 'black' | 'peach'

const NOTHING_HILL_COLOR_COPY: Record<NothingHillColorKey, { label: string; adj: string }> = {
  'peach-pink': { label: 'Peach Pink', adj: 'rosa pessego' },
  peach: { label: 'Peach', adj: 'pessego' },
  black: { label: 'Black', adj: 'preto' },
}

function normalizeNothingHillColor(color?: string): NothingHillColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('black')) return 'black'
  if (c.includes('peach pink') || c.includes('peach-pink')) return 'peach-pink'
  if (c.includes('peach')) return 'peach'
  return 'peach-pink'
}

export function buildNothingHillKaftanContentPt(color?: string): ProductPdpContent {
  const { label, adj } = NOTHING_HILL_COLOR_COPY[normalizeNothingHillColor(color)]

  return {
    introParagraphs: [
      `O Kaftan Nothing Hill foi criado para mulheres que apreciam a elegancia na sua forma mais natural. Confeccionado com camadas de chiffon ${adj} suave e finalizado com um refinado decote bateau, cria uma silhueta fluida que se move com graca a cada passo.`,
      'Leve e fluido, o chiffon cai naturalmente dos ombros ate a barra, criando uma sensacao de movimento enquanto mantem uma forma lindamente equilibrada. Um emblema dourado assinatura da Bint Saeed aparece discretamente na frente, oferecendo uma expressao subtil da identidade da marca.',
      `O tom suave ${adj} traz calor e feminilidade ao design, tornando-o igualmente adequado para celebracoes, encontros intimos, eventos de destino e ocasioes que pedem elegancia discreta. A construcao arejada permite que a silhueta flutue em torno do corpo, criando uma presenca que parece ao mesmo tempo refinada e natural.`,
      'Desenhado para ser usado estacao apos estacao, o Kaftan Nothing Hill nao e definido apenas por tendencias ou ocasioes. E uma peca escolhida pela facilidade que traz ao vestir-se com beleza, seja para um evento especial, um encontro noturno ou um momento que merece ser lembrado.',
      'Leve, gracioso e intemporal, torna-se parte da historia da mulher, acompanhando-a para onde quer que a vida a leve.',
    ],
    productDetails: [
      `Kaftan de chiffon ${adj} suave`,
      'Silhueta fluida em camadas com movimento gracioso',
      'Vestido interno preso para facilitar o uso',
      'Elegante decote bateau',
      'Emblema dourado assinatura da Bint Saeed incluido',
      'Paineis de chiffon drapeados e suaves criando movimento fluido',
      'Construcao leve desenhada para conforto e elegancia',
      'Desenhado para se mover naturalmente com quem veste',
      'Adequado para celebracoes, encontros, eventos de destino e ocasioes especiais',
      'Silhueta arejada com drapeado feminino suave',
      `Cor: ${label}`,
      'Feito em Abu Dhabi, EAU',
      `Codigo do produto: ${buildVariantSku(NOTHING_HILL_STYLE_SKU, label)}`,
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

export function buildBelgraviaAbayaContentPt(color?: string): ProductPdpContent {
  const { label } = BELGRAVIA_COLOR_COPY[normalizeBelgraviaColor(color)]

  return {
    introParagraphs: [
      'A Belgravia Abaya inspira-se no Bisht, uma das pecas mais reconheciveis da Peninsula Arabica, reinterpretada atraves de uma silhueta contemporanea desenhada para a vida moderna.',
      'Disponivel em Deep Black e Navy Blue, esta abaya distingue-se por um acabamento tecido a mao inspirado no Al Khous, a arte tradicional emirati de tecer folhas de palmeira passada entre geracoes. O padrao faz referencia a geometria das folhas tecidas, introduzindo textura e artesanato cultural numa silhueta elegante e discreta.',
      'Criada em Abu Dhabi, a Belgravia Abaya reflete o compromisso da Bint Saeed em levar o artesanato tradicional para o presente atraves do design contemporaneo. O corte descontraido inspirado no Bisht cria movimento gracioso mantendo estrutura refinada, enquanto bolsos escondidos e construcao totalmente forrada garantem conforto e facilidade ao vestir.',
      'Desenhada para transitar naturalmente entre ocasioes, paises e estilos de vida, a Belgravia Abaya pode ser usada num casamento em Riyadh, num jantar em Londres, num evento em Paris ou no dia a dia no Golfo. Intemporal em vez de guiada por tendencias, e criada para mulheres que valorizam elegancia, artesanato e pecas que permanecem relevantes onde quer que sejam usadas.',
      'Como todas as abayas da Bint Saeed, a Belgravia Abaya e feita por encomenda e pode ser personalizada com nome, data ou mensagem significativa no bolso escondido.',
    ],
    productDetails: [
      'Silhueta de abaya inspirada no Bisht',
      'Disponivel em Deep Black e Navy Blue',
      'Acabamento tecido a mao inspirado na tradicional tecelagem Al Khous de folhas de palmeira',
      'Construcao frontal aberta',
      'Fecho opcional com botoes de pressao escondidos disponivel sob pedido',
      'Totalmente forrada para conforto e acabamento refinado',
      'Bolsos laterais escondidos',
      'Personalizacao disponivel no bolso escondido',
      'Silhueta fluida descontraida desenhada para liberdade de movimento',
      'Tecido exterior leve em mistura de crepe',
      'Design contemporaneo inspirado nas tradicoes e artesanato Emirati e GCC',
      'Adequada para elegancia diaria, encontros, casamentos e ocasioes especiais',
      'Altura da modelo: 155 cm / 61 polegadas',
      'Comprimento: 138 cm / 54.5 polegadas',
      `Cor: ${label}`,
      'Feito em Abu Dhabi, Emirados Arabes Unidos',
    ],
    compositionDetails: [...BELGRAVIA_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      'Tamanhos disponiveis: XS, S, M, L, XL, XXL',
      'Comprimento: 138 cm / 54.5 polegadas',
      'Altura da modelo: 155 cm / 61 polegadas',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    faq: getBelgraviaPdpFaq('pt'),
  }
}

const KENSINGTON_COMPOSITION_DETAILS = [
  'Exterior: 80% Polyester, 20% Viscose',
  'Forro: 70% Polyester, 30% Viscose',
] as const

export function buildKensingtonAbayaContentPt(): ProductPdpContent {
  return {
    introParagraphs: [
      'A Kensington Abaya foi desenhada para mulheres que apreciam confianca expressa atraves da simplicidade. Criada em preto profundo com uma silhueta limpa e alongada, cria presenca por meio de estrutura, movimento e proporcao em vez de ornamentacao.',
      'Inspirada na confianca e estrutura da alfaiataria de outerwear, a Kensington Abaya combina a facilidade do vestir tradicional com a aparencia polida de um blazer bem cortado. Linhas limpas nos ombros e no corpo criam uma silhueta que transmite composicao, elegancia e uso sem esforco.',
      'Acabamentos texturizados no peito e nos punhos inspiram-se no Al Khous, a arte tradicional emirati de tecer folhas de palmeira transmitida entre geracoes. Interpretado atraves de uma subtil tecelagem de organza preta com brilho, este detalhe adiciona profundidade e textura mantendo discricao.',
      'Desenhada para sobrepor com facilidade sobre vestidos, alfaiataria, roupa de ocasiao ou vestuario diario, transita naturalmente entre rotina, reunioes de negocio, jantares, encontros, viagens e ocasioes especiais. A sua estetica intemporal permite atravessar paises, estacoes e fases da vida mantendo ligacao ao artesanato e elegancia que inspiraram a sua criacao.',
      'Totalmente forrada com forro suave em crepe e finalizada com dois bolsos laterais escondidos, a Kensington Abaya equilibra praticidade e refinamento mantendo uma silhueta limpa e elegante. Como todas as abayas da Bint Saeed, pode ser personalizada com etiqueta interior escondida com nome, data ou mensagem significativa, tornando-a especialmente especial para oferta.',
      'Elegante, versatil e criada para ser usada por anos em vez de estacoes, a Kensington Abaya foi desenhada para acompanhar a mulher onde quer que a vida a leve.',
    ],
    productDetails: [
      'Deep Black',
      'Decote redondo',
      'Almofada de ombro leve',
      'Fecho frontal com botoes de pressao',
      'Acabamento tecido assinatura da Bint Saeed inspirado na tradicional tecelagem Al Khous de folhas de palmeira',
      'Dois bolsos laterais escondidos',
      'Forro suave em crepe',
      'Etiqueta opcional de personalizacao interior escondida',
      'Comprimento: 138 cm / 54.5 polegadas',
      'Altura da modelo: 155 cm / 61 polegadas',
      'Modelo veste tamanho XS',
      'Feito em Abu Dhabi, Emirados Arabes Unidos',
    ],
    compositionDetails: [...KENSINGTON_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      'Tamanhos disponiveis: XS, S, M, L, XL',
      'Desenhada para um caimento estruturado mas fluido',
      'Comprimento: 138 cm / 54.5 polegadas',
      'Altura da modelo: 155 cm / 61 polegadas',
      'Modelo veste tamanho XS',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    faq: getKensingtonPdpFaq('pt'),
  }
}

function isKnightsbridgeNavyColor(color?: string): boolean {
  return (color ?? '').toLowerCase().includes('navy')
}

export function buildKnightsbridgeAbayaJacketContentPt(color?: string): ProductPdpContent {
  const catalogColor = isKnightsbridgeNavyColor(color) ? 'Navy Grey' : 'Dark Brown'
  const colorLabel = knightsbridgePdpColorLabel(catalogColor, 'pt')

  return {
    introParagraphs: [
      'As mulheres cujo estilo parece natural sao muitas vezes as menos interessadas em seguir tendencias. Sem medo de serem elas mesmas, costumam ser as mulheres que as definem.',
      'A Khous Jacket Abaya foi criada para mulheres que se movem com confianca pela vida nos seus proprios termos. Entre uma abaya e um casaco, combina a facilidade do vestir tradicional com a confianca da outerwear contemporanea.',
      'Cortada numa silhueta descontraida e disponivel em Castanho Escuro e Cinzento Navy, sobrepoe-se com facilidade sobre vestidos, alfaiataria, malhas e pecas do dia a dia. Usada com sneakers ou saltos, adapta-se naturalmente a diferentes ambientes, tornando-se companheira ideal para viagens, uso diario e vida entre cidades.',
      'Detalhes texturizados nos bolsos do peito e nos punhos inspiram-se no Al Khous, a arte tradicional emirati de tecer folhas de palmeira passada entre geracoes. Reinterpretados atraves do design contemporaneo, estes detalhes introduzem profundidade, estrutura e carater mantendo uma aparencia refinada.',
      'Detalhes marcantes nos ombros conferem uma subtil influencia militar a silhueta, criando uma presenca confiante equilibrada por conforto e liberdade de movimento. Quatro bolsos funcionais, incluindo dois bolsos no peito e dois bolsos laterais escondidos, reforcam a praticidade para o dia a dia.',
      'Finalizada com os botoes dourados assinatura Knotted Lines of Lineage da Bint Saeed, o design carrega um dos codigos duradouros da casa. Inspirados nas ligacoes que unem geracoes, estes detalhes lembram que as coisas mais significativas da vida sao muitas vezes aquelas que escolhemos levar adiante.',
      'Criada em Abu Dhabi, a Khous Jacket Abaya reflete o compromisso da Bint Saeed em transportar elementos do patrimonio emirati para um guarda-roupa contemporaneo. Seja para um cafe em Londres, um dia de viagem, uma reuniao no Dubai ou a vida diaria no Golfo, oferece uma silhueta distinta para mulheres que entendem que estilo nao e reservado a ocasioes especiais.',
      'Confortavel, versatil e desenhada para ser usada com frequencia, a Khous Jacket Abaya celebra a ideia de que a verdadeira elegancia se revela nao apenas em momentos importantes, mas na forma como uma mulher escolhe apresentar-se todos os dias.',
    ],
    productDetails: [
      `${colorLabel} jacket abaya com silhueta descontraida`,
      'Gola pontiaguda',
      'Fecho frontal escondido com botoes',
      'Dois bolsos no peito',
      'Dois bolsos laterais escondidos',
      'Detalhe de aba no ombro',
      'Mangas compridas com punhos abotoados',
      'Detalhes tecidos assinatura da Bint Saeed inspirados em Khous nos bolsos do peito e punhos',
      'Botoes dourados assinatura Bint Saeed Knotted Lines of Lineage',
      'Vestido interno preso',
      'Etiqueta opcional de personalizacao interior escondida com nome, data ou mensagem significativa',
      `Cor: ${colorLabel} com detalhe de contraste natural Khous`,
      'Comprimento: 143 cm / 56.3 polegadas',
      'Feito em Abu Dhabi, Emirados Arabes Unidos',
    ],
    compositionDetails: [
      'Exterior: 60% Polyester, 40% Algodao',
      'Vestido interno: 100% Polyester',
    ],
    fitAndSizeDetails: [
      'Altura da modelo: 160 cm / 63 polegadas',
      'Modelo veste tamanho XS',
      'Desenhada para um caimento descontraido',
      'Tamanhos disponiveis: XS, S, M, L, XL, XXL',
    ],
    careDetails: ['Apenas limpeza a seco profissional'],
    faq: getKnightsbridgePdpFaq('pt'),
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

/** Portuguese PDP copy for hero products; returns null for other slugs. */
export function getProductPdpContentPt(product: Product, color?: string): ProductPdpContent | null {
  if (isMayfairKaftan(product)) return buildMayfairKaftanContentPt(color)
  if (isNothingHillKaftan(product)) return buildNothingHillKaftanContentPt(color)
  if (isBelgraviaAbaya(product)) return buildBelgraviaAbayaContentPt(color)
  if (isKensingtonAbaya(product)) return buildKensingtonAbayaContentPt()
  if (isKnightsbridgeAbayaJacket(product)) return buildKnightsbridgeAbayaJacketContentPt(color)
  if (isKnightsbridgeDress(product)) return buildKnightsbridgeDressPdpContent(color, 'pt')
  return null
}
