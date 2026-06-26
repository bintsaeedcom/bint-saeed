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
  'deep-maroon': { label: 'Deep Maroon', adj: 'темно-бордовый' },
  black: { label: 'Black', adj: 'черный' },
  peach: { label: 'Peach', adj: 'персиковый' },
}

function normalizeMayfairColor(color?: string): MayfairColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('black')) return 'black'
  if (c.includes('peach')) return 'peach'
  return 'deep-maroon'
}

const NOTHING_HILL_STYLE_SKU = 'BS-KF-002'

const KAFTAN_COMPOSITION_DETAILS = [
  'Внешний слой: креп-шифон (100% полиэстер)',
  'Внутреннее платье: 100% полиэстер',
] as const

const NOTHING_HILL_COMPOSITION_DETAILS = [
  'Внешний слой: шифон (100% полиэстер)',
  'Внутреннее платье: 100% полиэстер',
] as const

const KAFTAN_CARE_DETAILS = [
  'Рекомендуется профессиональная сухая чистка',
  'При необходимости деликатная ручная стирка в холодной воде',
  'Не отбеливать',
  'Не сушить в барабане',
] as const

const ABAYA_CARE_DETAILS = ['Только профессиональная сухая чистка'] as const

const BELGRAVIA_COMPOSITION_DETAILS = [
  'Внешний слой: легкая креповая смесь (80% полиэстер, 20% вискоза)',
  'Подкладка: (70% полиэстер, 30% вискоза)',
] as const

function cmToInches(cm: number): number {
  return Math.round(cm / 2.54)
}

function kaftanFitAndSizeDetails(maxLengthCm: number, opts?: { includeAdjustableTies?: boolean }): string[] {
  const lines = [
    'One Size',
    `Максимальная длина изделия: ${maxLengthCm} см / ${cmToInches(maxLengthCm)} дюймов`,
  ]
  if (opts?.includeAdjustableTies !== false) {
    lines.push('Силуэт регулируется скрытыми внутренними завязками')
  }
  lines.push('Рост модели: 155 см / 61 дюйм')
  return lines
}

export function buildMayfairKaftanContentRu(color?: string): ProductPdpContent {
  const { label, adj } = MAYFAIR_COLOR_COPY[normalizeMayfairColor(color)]

  return {
    introParagraphs: [
      `Kaftan Mayfair создан для женщин, которые понимают, что элегантность никогда не бывает статичной. Выполненный из ${adj} креп-шифона и дополненный вшитым внутренним платьем, этот шифоновый кафтан формирует текучий силуэт, который мягко ниспадает от плеча до подола.`,
      'Мягко ниспадающая деталь-шарф спускается с левого плеча и может укладываться по диагонали через корпус с помощью фирменной золотистой эмблемы Bint Saeed. Скрытые внутренние завязки позволяют менять силуэт разными способами, создавая либо свободную накидочную форму, либо более очерченный профиль. В результате получается вещь, которая меняется вместе с женщиной, естественно адаптируясь к разным событиям и моментам.',
      'Легкий, универсальный и созданный для долгих лет, а не для одного сезона, Kaftan Mayfair легко переходит из одного повода в другой. Свадьба, праздник, ужин за границей или обычный день, который достоин особенного образа, — он естественно подстраивается под жизнь женщины, которая его носит. Его не определяет город, направление или конкретный момент. Он становится частью ее истории и сопровождает ее везде.',
      'Это вещь, которую выбирают не только за внешний вид, но и за ощущение, которое она дарит женщине в тот самый момент, когда она ее надевает.',
    ],
    productDetails: [
      `Кафтан из ${adj} креп-шифона`,
      'Текучий силуэт с многослойной конструкцией',
      'Вшитое внутреннее платье для удобства',
      'V-образный вырез',
      'Вшитая деталь-шарф, ниспадающая с левого плеча',
      'В комплекте фирменная золотистая эмблема Bint Saeed',
      'Шарф можно укладывать по диагонали через корпус',
      'Скрытые внутренние завязки для нескольких вариантов стилизации',
      'Можно носить в свободном текучем силуэте или с мягко очерченной формой',
      'Открытый крой рукава создает изящное движение',
      'Легкая конструкция для комфорта и элегантности',
      `Цвет: ${label}`,
      'Сделано в Абу-Даби, ОАЭ',
    ],
    compositionDetails: [...KAFTAN_COMPOSITION_DETAILS],
    fitAndSizeDetails: kaftanFitAndSizeDetails(165),
    careDetails: [...KAFTAN_CARE_DETAILS],
  }
}

type NothingHillColorKey = 'peach-pink' | 'black' | 'peach'

const NOTHING_HILL_COLOR_COPY: Record<NothingHillColorKey, { label: string; adj: string }> = {
  'peach-pink': { label: 'Peach Pink', adj: 'персиково-розовый' },
  peach: { label: 'Peach', adj: 'персиковый' },
  black: { label: 'Black', adj: 'черный' },
}

function normalizeNothingHillColor(color?: string): NothingHillColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('black')) return 'black'
  if (c.includes('peach pink') || c.includes('peach-pink')) return 'peach-pink'
  if (c.includes('peach')) return 'peach'
  return 'peach-pink'
}

export function buildNothingHillKaftanContentRu(color?: string): ProductPdpContent {
  const { label, adj } = NOTHING_HILL_COLOR_COPY[normalizeNothingHillColor(color)]

  return {
    introParagraphs: [
      `Kaftan Nothing Hill создан для женщин, которые ценят элегантность в ее самой непринужденной форме. Выполненный из слоев мягкого ${adj} шифона и завершенный утонченным вырезом bateau, он формирует струящийся силуэт, изящно движущийся с каждым шагом.`,
      'Легкий и пластичный шифон естественно ниспадает от плеча к подолу, создавая ощущение движения при сохранении гармоничной формы. Фирменная золотистая эмблема Bint Saeed деликатно расположена спереди, подчеркивая идентичность дома.',
      `Мягкий ${adj} оттенок привносит в дизайн тепло и женственность, делая модель уместной для торжеств, камерных встреч, мероприятий в путешествии и случаев, когда нужна сдержанная элегантность. Воздушная конструкция позволяет силуэту мягко парить вокруг тела, создавая присутствие, которое одновременно утонченно и непринужденно.`,
      'Созданный для ношения сезон за сезоном, Kaftan Nothing Hill не ограничен трендами или отдельными случаями. Эту вещь выбирают за легкость, с которой она помогает выглядеть красиво — на особом событии, вечерней встрече или в моменте, который хочется запомнить.',
      'Легкий, изящный и вневременной, он становится частью истории женщины и сопровождает ее везде, куда ведет жизнь.',
    ],
    productDetails: [
      `Мягкий кафтан из ${adj} шифона`,
      'Струящийся многослойный силуэт с изящным движением',
      'Вшитое внутреннее платье для удобства',
      'Элегантный вырез bateau',
      'Фирменная золотистая эмблема Bint Saeed в комплекте',
      'Мягкие драпированные панели из шифона создают текучее движение',
      'Легкая конструкция для комфорта и элегантности',
      'Силуэт создан для естественного движения вместе с женщиной',
      'Подходит для торжеств, встреч, мероприятий в путешествии и особых случаев',
      'Воздушный силуэт с мягкой женственной драпировкой',
      `Цвет: ${label}`,
      'Сделано в Абу-Даби, ОАЭ',
      `Код изделия: ${buildVariantSku(NOTHING_HILL_STYLE_SKU, label)}`,
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

export function buildBelgraviaAbayaContentRu(color?: string): ProductPdpContent {
  const { label } = BELGRAVIA_COLOR_COPY[normalizeBelgraviaColor(color)]

  return {
    introParagraphs: [
      'Abaya Belgravia вдохновлена биштом — одним из самых узнаваемых одеяний Аравийского полуострова, переосмысленным через современный силуэт для ритма сегодняшней жизни.',
      'Доступная в оттенках Deep Black и Navy Blue, эта абая выделяется отделкой ручного плетения, вдохновленной Al Khous — традиционным эмиратским искусством плетения пальмовых листьев, передаваемым из поколения в поколение. Узор отсылает к геометрии плетеных пальмовых волокон, добавляя текстуру и культурное ремесленное наследие в сдержанный элегантный силуэт.',
      'Созданная в Абу-Даби, Abaya Belgravia отражает стремление Bint Saeed сохранять традиционное мастерство в современной форме. Свободный крой в духе бишта дает изящное движение при сохранении аккуратной структуры, а скрытые карманы и полностью подкладочная конструкция обеспечивают комфорт и удобство в носке.',
      'Разработанная для естественного перехода между событиями, странами и образом жизни, Abaya Belgravia уместна на свадьбе в Эр-Рияде, ужине в Лондоне, мероприятии в Париже или в повседневной жизни Персидского залива. Вневременная, а не трендовая, она создана для женщин, которые ценят элегантность, мастерство и вещи, сохраняющие актуальность в любой точке мира.',
      'Как и все абаи Bint Saeed, Abaya Belgravia изготавливается на заказ и может быть персонализирована именем, датой или значимым посланием внутри скрытого кармана.',
    ],
    productDetails: [
      'Силуэт абаи, вдохновленный биштом',
      'Доступна в цветах Deep Black и Navy Blue',
      'Отделка ручного плетения, вдохновленная традиционным Al Khous',
      'Конструкция с открытой передней частью',
      'По запросу возможна скрытая застежка на кнопки',
      'Полностью на подкладке для комфорта и аккуратной отделки',
      'Скрытые боковые карманы',
      'Персонализация доступна внутри скрытого кармана',
      'Свободный струящийся силуэт для легкости движения',
      'Легкая креповая смесовая ткань верха',
      'Современный дизайн, вдохновленный традициями и ремеслами Эмиратов и GCC',
      'Подходит для повседневной элегантности, встреч, свадеб и особых случаев',
      'Рост модели: 155 см / 61 дюйм',
      'Длина: 138 см / 54,5 дюйма',
      `Цвет: ${label}`,
      'Сделано в Абу-Даби, Объединенные Арабские Эмираты',
    ],
    compositionDetails: [...BELGRAVIA_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      'Доступные размеры: XS, S, M, L, XL, XXL',
      'Длина: 138 см / 54,5 дюйма',
      'Рост модели: 155 см / 61 дюйм',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    faq: getBelgraviaPdpFaq('ru'),
  }
}

const KENSINGTON_COMPOSITION_DETAILS = [
  'Внешний слой: 80% полиэстер, 20% вискоза',
  'Подкладка: 70% полиэстер, 30% вискоза',
] as const

export function buildKensingtonAbayaContentRu(): ProductPdpContent {
  return {
    introParagraphs: [
      'Abaya Kensington создана для женщин, которые ценят уверенность, выраженную через простоту. Выполненная в глубоком черном цвете с чистым вытянутым силуэтом, она формирует присутствие за счет структуры, движения и пропорций, а не декора.',
      'Вдохновленная уверенностью и структурой классической верхней одежды, Abaya Kensington сочетает легкость традиционного одеяния с собранным видом хорошо скроенного жакета. Чистые линии в плечах и корпусе создают силуэт, который выглядит спокойно, элегантно и легко носится.',
      'Текстурная отделка на груди и манжетах вдохновлена Al Khous — традиционным эмиратским искусством плетения пальмовых листьев, передаваемым поколениями. Переосмысленная через тонкое черное переплетение из глиттер-органзы, эта деталь добавляет глубину и текстуру, оставаясь сдержанной.',
      'Модель создана для легкого наслаивания поверх платьев, костюмных образов, нарядов для событий и повседневной одежды, естественно переходя между ежедневным ритмом, деловыми встречами, ужинами, собраниями, поездками и особыми случаями. Ее вневременная эстетика позволяет ей уместно звучать в разных странах, сезонах и этапах жизни, сохраняя связь с ремеслом и элегантностью, которые легли в основу дизайна.',
      'Полностью на мягкой креповой подкладке и завершенная двумя скрытыми боковыми карманами, Abaya Kensington объединяет практичность и утонченность, сохраняя чистый элегантный силуэт. Как и все абаи Bint Saeed, она может быть персонализирована скрытой внутренней меткой с именем, датой или значимым посланием, что делает изделие особенно ценным для подарка.',
      'Элегантная, универсальная и созданная для долгих лет носки, Abaya Kensington задумана сопровождать женщину везде, куда ее ведет жизнь.',
    ],
    productDetails: [
      'Глубокий черный',
      'Круглый вырез',
      'Легкие плечевые подплечники',
      'Передняя застежка на кнопки',
      'Фирменная тканая отделка Bint Saeed, вдохновленная традиционным плетением Al Khous',
      'Два скрытых боковых кармана',
      'Мягкая креповая подкладка',
      'Опциональная скрытая внутренняя метка для персонализации',
      'Длина: 138 см / 54,5 дюйма',
      'Рост модели: 155 см / 61 дюйм',
      'На модели размер XS',
      'Сделано в Абу-Даби, Объединенные Арабские Эмираты',
    ],
    compositionDetails: [...KENSINGTON_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      'Доступные размеры: XS, S, M, L, XL',
      'Разработана для структурной, но текучей посадки',
      'Длина: 138 см / 54,5 дюйма',
      'Рост модели: 155 см / 61 дюйм',
      'На модели размер XS',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    faq: getKensingtonPdpFaq('ru'),
  }
}

function isKnightsbridgeNavyColor(color?: string): boolean {
  return (color ?? '').toLowerCase().includes('navy')
}

export function buildKnightsbridgeAbayaJacketContentRu(color?: string): ProductPdpContent {
  const catalogColor = isKnightsbridgeNavyColor(color) ? 'Navy Grey' : 'Dark Brown'
  const colorLabel = knightsbridgePdpColorLabel(catalogColor, 'ru')

  return {
    introParagraphs: [
      'Женщины, чей стиль выглядит непринужденно, чаще всего меньше всего интересуются погоней за трендами. Не боясь быть собой, именно они обычно и задают эти тренды.',
      'Khous Jacket Abaya создана для женщин, которые уверенно идут по жизни на своих условиях. Находясь между абаей и жакетом, она объединяет легкость традиционного одеяния и уверенность современной верхней одежды.',
      'Скроенная в расслабленном силуэте и доступная в цветах Dark Brown и Navy Grey, модель легко наслаивается поверх платьев, костюмных вещей, трикотажа и повседневных образов. С кедами или каблуками она естественно адаптируется к поездкам, повседневной жизни и ритму между городами.',
      'Текстурная отделка на нагрудных карманах и манжетах вдохновлена Al Khous — традиционным эмиратским искусством плетения пальмовых листьев, передаваемым из поколения в поколение. В современном прочтении эти детали добавляют глубину, структуру и характер, сохраняя утонченный вид.',
      'Выразительные детали плеч придают силуэту тонкое военное влияние, создавая уверенное присутствие, уравновешенное комфортом и свободой движения. Четыре функциональных кармана, включая два нагрудных и два скрытых боковых, усиливают практичность на каждый день.',
      'Завершенная фирменными золотистыми пуговицами Bint Saeed Knotted Lines of Lineage, эта модель несет один из устойчивых кодов дома. Вдохновленные связями, объединяющими поколения, эти детали напоминают: самое значимое в жизни часто то, что мы сохраняем и передаем дальше.',
      'Созданная в Абу-Даби, Khous Jacket Abaya отражает стремление Bint Saeed переносить элементы эмиратского наследия в современный гардероб. Будь то кофе в Лондоне, день в пути, встреча в Дубае или повседневная жизнь в Заливе, она формирует узнаваемый силуэт для женщин, которые понимают, что стиль не предназначен только для особых случаев.',
      'Комфортная, универсальная и созданная для частой носки, Khous Jacket Abaya воплощает идею, что истинная элегантность раскрывается не только в важных моментах, но и в том, как женщина выбирает представлять себя каждый день.',
    ],
    productDetails: [
      `Жакет-абая ${colorLabel} в расслабленном силуэте`,
      'Заостренный воротник',
      'Скрытая передняя застежка на пуговицы',
      'Два нагрудных кармана',
      'Два скрытых боковых кармана',
      'Детали с плечевыми хлястиками',
      'Длинные рукава с манжетами на пуговицах',
      'Фирменная тканая отделка Bint Saeed в стиле Khous на нагрудных карманах и манжетах',
      'Фирменные золотистые пуговицы Bint Saeed Knotted Lines of Lineage',
      'Вшитое внутреннее платье',
      'Опциональная скрытая внутренняя метка для персонализации именем, датой или значимым сообщением',
      `Цвет: ${colorLabel} с естественной контрастной отделкой Khous`,
      'Длина: 143 см / 56,3 дюйма',
      'Сделано в Абу-Даби, Объединенные Арабские Эмираты',
    ],
    compositionDetails: [
      'Внешний слой: 60% полиэстер, 40% хлопок',
      'Внутреннее платье: 100% полиэстер',
    ],
    fitAndSizeDetails: [
      'Рост модели: 160 см / 63 дюйма',
      'На модели размер XS',
      'Разработана для свободной посадки',
      'Доступные размеры: XS, S, M, L, XL, XXL',
    ],
    careDetails: ['Только профессиональная сухая чистка'],
    faq: getKnightsbridgePdpFaq('ru'),
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

/** Russian PDP copy for hero products; returns null for other slugs. */
export function getProductPdpContentRu(product: Product, color?: string): ProductPdpContent | null {
  if (isMayfairKaftan(product)) return buildMayfairKaftanContentRu(color)
  if (isNothingHillKaftan(product)) return buildNothingHillKaftanContentRu(color)
  if (isBelgraviaAbaya(product)) return buildBelgraviaAbayaContentRu(color)
  if (isKensingtonAbaya(product)) return buildKensingtonAbayaContentRu()
  if (isKnightsbridgeAbayaJacket(product)) return buildKnightsbridgeAbayaJacketContentRu(color)
  if (isKnightsbridgeDress(product)) return buildKnightsbridgeDressPdpContent(color, 'ru')
  return null
}
