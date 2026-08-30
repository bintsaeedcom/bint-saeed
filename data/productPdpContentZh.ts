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
  'deep-maroon': { label: 'Deep Maroon', adj: '深酒红色' },
  black: { label: 'Black', adj: '黑色' },
  peach: { label: 'Peach', adj: '桃色' },
}

function normalizeMayfairColor(color?: string): MayfairColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('black')) return 'black'
  if (c.includes('peach')) return 'peach'
  return 'deep-maroon'
}

const NOTHING_HILL_STYLE_SKU = 'BS-KF-002'

const KAFTAN_COMPOSITION_DETAILS = [
  '外层：绉纱雪纺（100% 聚酯纤维）',
  '内搭连衣裙：100% 聚酯纤维',
] as const

const NOTHING_HILL_COMPOSITION_DETAILS = [
  '外层：雪纺（100% 聚酯纤维）',
  '内搭连衣裙：100% 聚酯纤维',
] as const

const KAFTAN_CARE_DETAILS = [
  '建议专业干洗',
  '如有需要，请用冷水轻柔手洗',
  '不可漂白',
  '不可滚筒烘干',
] as const

const ABAYA_CARE_DETAILS = ['仅限专业干洗'] as const

const BELGRAVIA_COMPOSITION_DETAILS = [
  '外层：轻质绉纱混纺（80% 聚酯纤维，20% 粘胶纤维）',
  '里料成分：（70% 聚酯纤维，30% 粘胶纤维）',
] as const

function cmToInches(cm: number): number {
  return Math.round(cm / 2.54)
}

function kaftanFitAndSizeDetails(maxLengthCm: number, opts?: { includeAdjustableTies?: boolean }): string[] {
  const lines = [
    '均码',
    `服装最大长度：${maxLengthCm} 厘米 / ${cmToInches(maxLengthCm)} 英寸`,
  ]
  if (opts?.includeAdjustableTies !== false) {
    lines.push('可通过隐藏式内侧系带调节廓形')
  }
  lines.push('模特身高 155 厘米 / 61 英寸')
  return lines
}

export function buildMayfairKaftanContentZh(color?: string): ProductPdpContent {
  const { label, adj } = MAYFAIR_COLOR_COPY[normalizeMayfairColor(color)]

  return {
    introParagraphs: [
      `Mayfair Kaftan 为懂得优雅从不静止的女性而设计。以 ${adj} 绉纱雪纺裁制，并搭配一体式内搭连衣裙，这款长袍自肩部至下摆自然垂坠，呈现流动廓形。`,
      '左肩垂落的柔和围巾细节，可借助 BINT SAEED 承悦 标志性金色徽章别针斜向搭配于身前。隐藏式内侧系带可实现多种廓形变化——既可呈现披风般的流动感，亦可形成更清晰的线条。由此，这件单品随穿着者而变化，自然适配不同场合与时刻。',
      '轻盈、多场景适配，且为多年穿着而非单季而生，Mayfair Kaftan 能从容切换于不同场景。无论是婚礼、庆典、海外晚宴，还是值得被特别对待的普通一天，它都能自然融入穿着者的生活。它不被目的地、城市或某一时刻所定义，而会成为她故事的一部分，并陪伴她走向每一段旅程。',
      '这是一件不仅因外观而被选择，更因上身瞬间赋予女性的感受而被珍视的作品。',
    ],
    productDetails: [
      `${adj}绉纱雪纺长袍`,
      '流动廓形与分层结构',
      '一体式内搭连衣裙，穿着更便捷',
      'V 领设计',
      '左肩垂落式一体围巾细节',
      '附 BINT SAEED 承悦 标志性金色徽章别针',
      '围巾可斜向搭配于身前',
      '隐藏式内侧系带结构，支持多种造型方式',
      '可呈现自然流动廓形，亦可塑造柔和明确轮廓',
      '开放式袖型带来优雅动态',
      '轻量结构兼顾舒适与优雅',
      `颜色：${label}`,
      '阿联酋阿布扎比制造',
    ],
    compositionDetails: [...KAFTAN_COMPOSITION_DETAILS],
    fitAndSizeDetails: kaftanFitAndSizeDetails(165),
    careDetails: [...KAFTAN_CARE_DETAILS],
  }
}

type NothingHillColorKey = 'peach-pink' | 'black' | 'peach'

const NOTHING_HILL_COLOR_COPY: Record<NothingHillColorKey, { label: string; adj: string }> = {
  'peach-pink': { label: 'Peach Pink', adj: '蜜桃粉色' },
  peach: { label: 'Peach', adj: '桃色' },
  black: { label: 'Black', adj: '黑色' },
}

function normalizeNothingHillColor(color?: string): NothingHillColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('black')) return 'black'
  if (c.includes('peach pink') || c.includes('peach-pink')) return 'peach-pink'
  if (c.includes('peach')) return 'peach'
  return 'peach-pink'
}

export function buildNothingHillKaftanContentZh(color?: string): ProductPdpContent {
  const { label, adj } = NOTHING_HILL_COLOR_COPY[normalizeNothingHillColor(color)]

  return {
    introParagraphs: [
      `Nothing Hill Kaftan 为欣赏极致从容优雅的女性而设计。以层叠 ${adj} 软雪纺打造，并以精致船领收尾，形成随步伐优雅流动的廓形。`,
      '轻盈且灵动的雪纺自肩线自然垂落至下摆，在保持均衡轮廓的同时带来动态感。BINT SAEED 承悦 标志性金色徽章低调点缀于前身，传递品牌识别。',
      `柔和的 ${adj} 色调为设计注入温暖与女性气质，适用于庆典、私密聚会、目的地活动以及需要含蓄优雅的场合。轻盈结构让廓形在身体周围自然漂浮，呈现兼具精致与从容的气场。`,
      'Nothing Hill Kaftan 为跨季穿着而生，不受潮流或单一场景限制。之所以被选择，在于它让精致着装更轻松 —— 无论是特别活动、晚间聚会，还是值得纪念的时刻。',
      '轻盈、优雅且经典恒久，它会成为女性故事的一部分，并陪伴她走向人生的每一程。',
    ],
    productDetails: [
      `${adj}软雪纺长袍`,
      '流动分层廓形，步态优雅',
      '一体式内搭连衣裙，穿着更便捷',
      '优雅船领设计',
      '附 BINT SAEED 承悦 标志性金色徽章',
      '柔和垂坠雪纺拼片营造流动感',
      '轻量结构兼顾舒适与优雅',
      '设计随穿着者自然律动',
      '适合庆典、聚会、目的地活动及特别场合',
      '空气感廓形与柔美垂感',
      `颜色：${label}`,
      '阿联酋阿布扎比制造',
      `款号：${buildVariantSku(NOTHING_HILL_STYLE_SKU, label)}`,
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

export function buildBelgraviaAbayaContentZh(color?: string): ProductPdpContent {
  const { label } = BELGRAVIA_COLOR_COPY[normalizeBelgraviaColor(color)]

  return {
    introParagraphs: [
      'Belgravia Abaya 的灵感源自 Bisht——阿拉伯半岛最具代表性的服饰之一，并以适配现代生活的当代廓形重新演绎。',
      '提供 Deep Black 与 Navy Blue 两种配色。这款阿巴亚的标志性细节是手工编织饰边，灵感来自 Al Khous——代代相传的阿联酋传统棕榈叶编织工艺。其纹样呼应棕榈叶编织几何，为克制优雅的廓形注入纹理与文化工艺感。',
      'Belgravia Abaya 于阿布扎比打造，体现 BINT SAEED 承悦 以当代设计延续传统工艺的承诺。宽松的 Bisht 风格剪裁带来优雅动态并保持精致结构，隐藏口袋与全里衬结构进一步提升舒适与穿着便利。',
      'Belgravia Abaya 为跨场景、跨地域与跨生活方式而设计。可用于利雅得婚礼、伦敦晚宴、巴黎活动，也可融入海湾地区日常生活。它追求恒久而非潮流，面向重视优雅、工艺与长期价值的女性。',
      '与所有 BINT SAEED 承悦 阿巴亚一样，Belgravia Abaya 为按单制作，并可在隐藏口袋内定制姓名、日期或有意义的信息。',
    ],
    productDetails: [
      'Bisht 灵感阿巴亚廓形',
      '提供 Deep Black 与 Navy Blue 配色',
      '手工编织饰边，灵感源自传统 Al Khous 棕榈叶编织',
      '前身开放式结构',
      '可按需提供隐藏式按扣闭合',
      '全里衬设计，兼顾舒适与精致完成度',
      '隐藏式侧袋',
      '隐藏口袋内可提供个性化定制',
      '宽松流动廓形，便于活动',
      '外层轻质绉纱混纺面料',
      '当代设计融合阿联酋与 GCC 传统工艺灵感',
      '适用于日常优雅、聚会、婚礼与特别场合',
      '模特身高：155 厘米 / 61 英寸',
      '衣长：138 厘米 / 54.5 英寸',
      `颜色：${label}`,
      '阿联酋阿布扎比制造',
    ],
    compositionDetails: [...BELGRAVIA_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      '可选尺码：XS, S, M, L, XL, XXL',
      '衣长：138 厘米 / 54.5 英寸',
      '模特身高：155 厘米 / 61 英寸',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    faq: getBelgraviaPdpFaq('zh'),
  }
}

const KENSINGTON_COMPOSITION_DETAILS = [
  '外层：80% 聚酯纤维，20% 粘胶纤维',
  '里料：70% 聚酯纤维，30% 粘胶纤维',
] as const

export function buildKensingtonAbayaContentZh(): ProductPdpContent {
  return {
    introParagraphs: [
      'Kensington Abaya 为欣赏以简洁表达自信的女性而设计。深黑色调与利落修长廓形，凭借结构、动态与比例塑造存在感，而非依赖装饰。',
      '灵感来自剪裁外套的自信与结构，Kensington Abaya 将传统着装的从容，与剪裁精良西装外套般的利落气质相结合。肩部与身形线条干净，呈现沉稳、优雅且易于穿着的廓形。',
      '胸前与袖口的纹理饰边灵感源于 Al Khous——代代相传的阿联酋传统棕榈叶编织工艺。通过细腻的黑色闪光欧根纱织法加以诠释，在保持克制的同时增添层次与质感。',
      '可轻松叠穿于连衣裙、剪裁造型、礼服或日常穿搭之外，自然切换于日常生活、商务会面、晚宴、聚会、旅行与特别场合。其经典审美使其可跨越国家、季节与人生阶段，同时始终与启发其诞生的工艺与优雅相连。',
      '全里衬采用柔软绉料，并配有两个隐藏侧袋，Kensington Abaya 在保持干净优雅廓形的同时兼顾实用与精致。与所有 BINT SAEED 承悦 阿巴亚一样，可通过隐藏式内侧标签进行个性化定制，加入姓名、日期或有意义的信息，尤其适合作为礼赠。',
      '优雅、百搭且为多年穿着而生，Kensington Abaya 旨在陪伴穿着者走过人生每一段旅程。',
    ],
    productDetails: [
      '深黑色',
      '圆领',
      '轻薄肩垫',
      '前中按扣闭合',
      'BINT SAEED 承悦 标志性织饰，灵感源自传统 Al Khous 棕榈叶编织',
      '两个隐藏侧袋',
      '柔软绉料里衬',
      '可选隐藏式内侧个性化标签',
      '衣长：138 厘米 / 54.5 英寸',
      '模特身高：155 厘米 / 61 英寸',
      '模特穿着 XS 码',
      '阿联酋阿布扎比制造',
    ],
    compositionDetails: [...KENSINGTON_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      '可选尺码：XS, S, M, L, XL',
      '设计为结构感与流动感兼具的版型',
      '衣长：138 厘米 / 54.5 英寸',
      '模特身高：155 厘米 / 61 英寸',
      '模特穿着 XS 码',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    faq: getKensingtonPdpFaq('zh'),
  }
}

function isKnightsbridgeNavyColor(color?: string): boolean {
  return (color ?? '').toLowerCase().includes('navy')
}

export function buildKnightsbridgeAbayaJacketContentZh(color?: string): ProductPdpContent {
  const catalogColor = isKnightsbridgeNavyColor(color) ? 'Navy Grey' : 'Dark Brown'
  const colorLabel = knightsbridgePdpColorLabel(catalogColor, 'zh')

  return {
    introParagraphs: [
      '那些风格看似毫不费力的女性，往往最不执着于追随趋势。她们敢于做自己，也常常成为趋势的制定者。',
      'Khous Jacket Abaya 为自信行走于人生、坚持自我节奏的女性而生。它介于阿巴亚与夹克之间，将传统着装的从容与当代外套的力量感结合。',
      '采用宽松廓形剪裁，提供 Dark Brown 与 Navy Grey 配色，可轻松叠穿于连衣裙、剪裁单品、针织与日常基础款之上。无论搭配运动鞋或高跟鞋，都能自然适应旅行、日常与城市之间的切换。',
      '胸袋与袖口的纹理细节灵感源于 Al Khous——代代相传的阿联酋传统棕榈叶编织工艺。通过当代设计语言重新演绎，在保持精致外观的同时增添层次、结构与个性。',
      '标志性肩部细节为廓形注入微妙的军装气质，塑造自信存在感，同时兼顾舒适与行动自由。四个功能性口袋（含两个胸袋与两个隐藏侧袋）进一步强化日常实用性。',
      '以 BINT SAEED 承悦 标志性金色 Knotted Lines of Lineage 纽扣收尾，承载品牌长期延续的核心设计语言之一。它灵感源于连接代际的纽带，提醒我们：最有意义的事物，往往是那些被我们持续传承的部分。',
      'Khous Jacket Abaya 于阿布扎比打造，体现 BINT SAEED 承悦 将阿联酋文化遗产元素带入当代衣橱的承诺。无论是伦敦咖啡时刻、旅行日程、迪拜会面，还是海湾地区日常生活，它都为理解“风格不止属于特别场合”的女性提供鲜明轮廓。',
      '舒适、百搭且为高频穿着而设计，Khous Jacket Abaya 诠释了真正优雅不仅在重要时刻显现，更体现在女性每天如何选择呈现自己。',
    ],
    productDetails: [
      `${colorLabel} 色夹克式阿巴亚，宽松廓形`,
      '尖领设计',
      '隐藏式前门襟纽扣闭合',
      '两个胸前口袋',
      '两个隐藏侧袋',
      '肩部袢带细节',
      '长袖配纽扣袖口',
      '胸袋与袖口处饰有 BINT SAEED 承悦 标志性 Khous 灵感织饰',
      'BINT SAEED 承悦 标志性金色 Knotted Lines of Lineage 纽扣',
      '一体式内搭连衣裙',
      '可选隐藏式内侧个性化标签，可定制姓名、日期或有意义的信息',
      `颜色：${colorLabel}，搭配自然 Khous 对比细节`,
      '衣长：143 厘米 / 56.3 英寸',
      '阿联酋阿布扎比制造',
    ],
    compositionDetails: [
      '外层：60% 聚酯纤维，40% 棉',
      '内搭连衣裙：100% 聚酯纤维',
    ],
    fitAndSizeDetails: [
      '模特身高：160 厘米 / 63 英寸',
      '模特穿着 XS 码',
      '设计为宽松版型',
      '可选尺码：XS, S, M, L, XL, XXL',
    ],
    careDetails: ['仅限专业干洗'],
    faq: getKnightsbridgePdpFaq('zh'),
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

/** Chinese PDP copy for hero products; returns null for other slugs. */
export function getProductPdpContentZh(product: Product, color?: string): ProductPdpContent | null {
  if (isMayfairKaftan(product)) return buildMayfairKaftanContentZh(color)
  if (isNothingHillKaftan(product)) return buildNothingHillKaftanContentZh(color)
  if (isBelgraviaAbaya(product)) return buildBelgraviaAbayaContentZh(color)
  if (isKensingtonAbaya(product)) return buildKensingtonAbayaContentZh()
  if (isKnightsbridgeAbayaJacket(product)) return buildKnightsbridgeAbayaJacketContentZh(color)
  if (isKnightsbridgeDress(product)) return buildKnightsbridgeDressPdpContent(color, 'zh')
  return null
}
