import { withBrandAlt } from '@/lib/products/imageAlt'
import type { CodesSectionContent } from '@/lib/the-codes/codesPageContent'
import { CODES_IMAGE_FILES } from '@/lib/the-codes/codesPageAssets'

const IMG = CODES_IMAGE_FILES

function hero(alt: string) {
  return { file: IMG.khous, alt: withBrandAlt(alt) }
}

export const CODES_HERO_ES = hero(
  'Textura de tejido Al Khous en frondas de palmera — héroe editorial de The Codes',
)
export const CODES_HERO_RU = hero(
  'Текстура плетения Al Khous из пальмовых листьев — редакционный герой The Codes',
)
export const CODES_HERO_ZH = hero('Al Khous 棕榈叶编织肌理 — The Codes 编辑主视觉')
export const CODES_HERO_FR = hero(
  'Texture de tissage Al Khous en frondes de palmier — héros éditorial The Codes',
)
export const CODES_HERO_IT = hero(
  'Texture di tessitura Al Khous in foglie di palma — hero editoriale The Codes',
)
export const CODES_HERO_DE = hero(
  'Al-Khous-Webtextur aus Palmwedeln — editorielles Hero von The Codes',
)
export const CODES_HERO_NL = hero(
  'Al Khous-weeftextuur van palmbladeren — editoriaal hero van The Codes',
)
export const CODES_HERO_PT = hero(
  'Textura de tecelagem Al Khous em folhas de palmeira — herói editorial de The Codes',
)
export const CODES_HERO_ID = hero(
  'Tekstur tenun Al Khous dari pelepah palem — hero editorial The Codes',
)
export const CODES_HERO_MS = hero(
  'Tekstur tenunan Al Khous daripada pelepah palma — hero editorial The Codes',
)

export const THE_CODES_SECTIONS_ES: CodesSectionContent[] = [
  {
    id: 'the-monogram',
    eyebrow: 'Marca de la maison',
    title: 'The monogram',
    paragraphs: [
      'El monograma Bint Saeed es más que una marca: es una estructura de identidad. Su forma entrelazada refleja continuidad, donde las líneas regresan a sí mismas en lugar de romperse. Aparece con intención a través de las piezas — a veces sutil, a veces presente, siempre parte del todo.',
    ],
    imageFile: IMG.monogram,
    imageAlt: withBrandAlt(
      'Monograma de la maison de lujo Bint Saeed — marca entrelazada de identidad y código de diseño de Abu Dhabi',
    ),
  },
  {
    id: 'al-talli',
    eyebrow: 'Hilo de herencia',
    title: 'Al Talli',
    paragraphs: [
      'Al Talli es una artesanía tradicional emiratí, tejida con finos hilos metálicos y reconocida como parte del patrimonio cultural de los United Arab Emirates. Refleja precisión, paciencia y una tradición arraigada del adorno. En Bint Saeed se traduce en formas que se mueven con naturalidad a través de fronteras.',
    ],
    imageFile: IMG.alTalli,
    imageAlt: withBrandAlt(
      'Bordado tradicional emiratí Al Talli en hilo de oro — código de la maison Bint Saeed',
    ),
  },
  {
    id: 'khous',
    eyebrow: 'Tejido y estructura',
    title: 'Al Khous',
    paragraphs: [
      'El tejido Al Khous se arraiga en el uso de frondas de palmera, formado por estructura y repetición, y reconocido como parte de las artesanías tradicionales de la región. Refleja una manera de hacer a la vez funcional y refinada. Su lógica se lleva a las líneas y la construcción de cada pieza.',
    ],
    imageFile: IMG.khous,
    imageAlt: withBrandAlt(
      'Tejido Al Khous en frondas de palmera — artesanía patrimonial emiratí, código Bint Saeed',
    ),
  },
  {
    id: 'al-ain-rosette',
    eyebrow: 'Motivo',
    title: 'Al Ain Rosette',
    paragraphs: [
      'La Al Ain Rosette aparece como una piedra de cornalina tallada dentro de la maison. Su tono cálido refleja el paisaje desértico de Al Ain en los United Arab Emirates, mientras su forma evoca las siluetas redondeadas del jacinto del desierto y la flor amarilla de Tribulus omanense. Por ahora, aparece en joyería y objetos pequeños como un punto distinto de reconocimiento.',
    ],
    imageFile: IMG.alAinRosette,
    imageAlt: withBrandAlt(
      'Motivo Al Ain Rosette en cornalina — código patrimonial emiratí de Abu Dhabi',
    ),
  },
  {
    id: 'knotted-lines-of-lineage',
    eyebrow: 'Línea y continuidad',
    title: 'Knotted Lines',
    paragraphs: [
      'Las líneas anudadas aparecen en la maison como un elemento recurrente, en forma de botones y strands a través de las prendas. Cada nudo refleja conexión a través del tiempo, uniendo lo heredado con lo vivido. Colocadas cerca de quien las lleva, sirven como un recordatorio sutil de una historia que continúa.',
    ],
    imageFile: IMG.knottedLines,
    imageAlt: withBrandAlt(
      'Motivo dorado Knotted Lines of Lineage sobre tela — código de continuidad, Bint Saeed',
    ),
  },
  {
    id: 'the-strands',
    eyebrow: 'Piedra e hilo',
    title: 'The Strands',
    paragraphs: [
      'The Strands se componen de piedras naturales, dispuestas en secuencia a lo largo del hombro y a través de la prenda. En la maison, prolongan la línea anudada en un hilo continuo — medido en la colocación, deliberado en el peso y sostenido cerca de quien lo lleva. Ni ornamento ni ocurrencia tardía: equilibran la silueta mientras llevan la conexión entre origen y presencia como un código definitorio de la maison.',
    ],
    imageFile: IMG.strands,
    imageAlt: withBrandAlt(
      'Strands de piedras naturales para abaya — código portable de hilo y equilibrio, Bint Saeed Abu Dhabi',
    ),
  },
]

export const THE_CODES_SECTIONS_RU: CodesSectionContent[] = [
  {
    id: 'the-monogram',
    eyebrow: 'Знак дома',
    title: 'The monogram',
    paragraphs: [
      'Монограмма Bint Saeed — больше чем знак: это структура идентичности. Её переплетённая форма отражает преемственность, где линии возвращаются к себе, а не обрываются. Она появляется намеренно на вещах — иногда тонко, иногда явно, всегда частью целого.',
    ],
    imageFile: IMG.monogram,
    imageAlt: withBrandAlt(
      'Монограмма дома роскоши Bint Saeed — переплетённый знак идентичности и код дизайна Abu Dhabi',
    ),
  },
  {
    id: 'al-talli',
    eyebrow: 'Нить наследия',
    title: 'Al Talli',
    paragraphs: [
      'Al Talli — традиционное эмиратское ремесло, плетённое тонкими металлическими нитями и признанное частью культурного наследия United Arab Emirates. Оно отражает точность, терпение и глубокую традицию украшения. В Bint Saeed оно переводится в формы, которые естественно движутся через границы.',
    ],
    imageFile: IMG.alTalli,
    imageAlt: withBrandAlt(
      'Традиционная эмиратская вышивка Al Talli золотой нитью — код дома Bint Saeed',
    ),
  },
  {
    id: 'khous',
    eyebrow: 'Плетение и структура',
    title: 'Al Khous',
    paragraphs: [
      'Плетение Al Khous укоренено в использовании пальмовых листьев, формируется структурой и повторением и признано частью традиционных ремёсел региона. Оно отражает способ делания — и функциональный, и утончённый. Его логика переносится в линии и конструкцию каждой вещи.',
    ],
    imageFile: IMG.khous,
    imageAlt: withBrandAlt(
      'Плетение Al Khous из пальмовых листьев — эмиратское ремесленное наследие, код Bint Saeed',
    ),
  },
  {
    id: 'al-ain-rosette',
    eyebrow: 'Мотив',
    title: 'Al Ain Rosette',
    paragraphs: [
      'Al Ain Rosette появляется в доме как резной сердолик. Его тёплый тон отражает пустынный ландшафт Al Ain в United Arab Emirates, а форма напоминает округлые очертания пустынного гиацинта и жёлтый цветок Tribulus omanense. Пока он появляется в ювелирных изделиях и малых объектах как особая точка узнавания.',
    ],
    imageFile: IMG.alAinRosette,
    imageAlt: withBrandAlt(
      'Мотив Al Ain Rosette из сердолика — эмиратский код наследия из Abu Dhabi',
    ),
  },
  {
    id: 'knotted-lines-of-lineage',
    eyebrow: 'Линия и преемственность',
    title: 'Knotted Lines',
    paragraphs: [
      'Узловые линии появляются в доме как повторяющийся элемент — в виде пуговиц и strands на одежде. Каждый узел отражает связь через время, соединяя унаследованное с прожитым. Расположенные близко к носящей, они служат тонким напоминанием о продолжающейся истории.',
    ],
    imageFile: IMG.knottedLines,
    imageAlt: withBrandAlt(
      'Золотой мотив Knotted Lines of Lineage на ткани — код преемственности, Bint Saeed',
    ),
  },
  {
    id: 'the-strands',
    eyebrow: 'Камень и нить',
    title: 'The Strands',
    paragraphs: [
      'The Strands составлены из натуральных камней, выстроенных по плечу и по изделию. В доме они продолжают узловую линию в непрерывную нить — выверенную в размещении, намеренную в весе и удержанную близко к носящей. Не украшение и не запоздалая мысль: они балансируют силуэт, неся связь между происхождением и присутствием как определяющий код дома.',
    ],
    imageFile: IMG.strands,
    imageAlt: withBrandAlt(
      'Абайя Strands из натурального камня — носимый код нити и баланса, Bint Saeed Abu Dhabi',
    ),
  },
]

export const THE_CODES_SECTIONS_ZH: CodesSectionContent[] = [
  {
    id: 'the-monogram',
    eyebrow: '品牌印记',
    title: 'The monogram',
    paragraphs: [
      'Bint Saeed 的交织字母标不止是一个符号，更是身份的结构。其交织形态映现延续：线条回向自身，而非断裂。它有意出现在单品之中——或隐或显，始终属于整体。',
    ],
    imageFile: IMG.monogram,
    imageAlt: withBrandAlt('Bint Saeed 奢华品牌交织字母标 — 身份结构与阿布扎比设计代码'),
  },
  {
    id: 'al-talli',
    eyebrow: '传承之线',
    title: 'Al Talli',
    paragraphs: [
      'Al Talli 是传统阿联酋工艺，以细金属线编织，被认可为阿拉伯联合酋长国文化遗产的一部分。它映现精准、耐心与深厚的装饰传统。在 Bint Saeed，它被转化为自然跨越边界的形式。',
    ],
    imageFile: IMG.alTalli,
    imageAlt: withBrandAlt('传统 Al Talli 金线阿联酋刺绣 — Bint Saeed 品牌代码'),
  },
  {
    id: 'khous',
    eyebrow: '编织与结构',
    title: 'Al Khous',
    paragraphs: [
      'Al Khous 编织植根于棕榈叶的使用，经由结构与重复成形，并被认可为地区传统工艺的一部分。它映现既实用又精炼的制作方式。其逻辑被带入每件单品的线条与结构。',
    ],
    imageFile: IMG.khous,
    imageAlt: withBrandAlt('Al Khous 棕榈叶编织 — 阿联酋传承工艺，Bint Saeed 品牌代码'),
  },
  {
    id: 'al-ain-rosette',
    eyebrow: '纹样',
    title: 'Al Ain Rosette',
    paragraphs: [
      'Al Ain Rosette 以雕琢的红玉髓出现在品牌之中。其暖色映现阿拉伯联合酋长国 Al Ain 的沙漠地貌，形态则唤起沙漠风信子的圆润轮廓与 Tribulus omanense 的黄花。眼下，它出现在珠宝与小物件中，作为清晰的辨识点。',
    ],
    imageFile: IMG.alAinRosette,
    imageAlt: withBrandAlt('Al Ain Rosette 红玉髓纹样 — 来自阿布扎比的阿联酋传承代码'),
  },
  {
    id: 'knotted-lines-of-lineage',
    eyebrow: '线与延续',
    title: 'Knotted Lines',
    paragraphs: [
      '结线在品牌中作为反复出现的元素，以纽扣与 Strands 的形式贯穿成衣。每一结映现跨越时间的连接，将所继承者与所生活者相连。贴近穿着者，它们成为故事仍在继续的细微提醒。',
    ],
    imageFile: IMG.knottedLines,
    imageAlt: withBrandAlt('面料上的 Knotted Lines of Lineage 金饰 — 延续代码，Bint Saeed'),
  },
  {
    id: 'the-strands',
    eyebrow: '石与线',
    title: 'The Strands',
    paragraphs: [
      'The Strands 由天然石组成，沿肩与成衣依次排列。在品牌之中，它们将结线延展为连续之线——位置克制，重量有意，贴近穿着者。既非点缀，亦非事后添加：它们平衡廓形，同时承载起源与在场之间的连接，作为界定品牌的代码。',
    ],
    imageFile: IMG.strands,
    imageAlt: withBrandAlt(
      '天然石长袍 Strands — 可佩戴的线与平衡代码，Bint Saeed 阿布扎比',
    ),
  },
]
