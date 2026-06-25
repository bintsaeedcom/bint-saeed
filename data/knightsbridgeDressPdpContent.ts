import type { ProductPdpContent } from '@/data/productPdpContent'
import type { AppLocale } from '@/lib/i18n/routing'
import { getKnightsbridgeDressPdpFaq } from '@/lib/products/knightsbridgeDressSchemaLocalePacks'
import {
  getKnightsbridgeStylePairingNote,
  knightsbridgePdpColorLabel,
  normalizeKnightsbridgeCatalogColor,
  type KnightsbridgeCatalogColor,
} from '@/lib/products/knightsbridgePairing'

const CARE = ['Professional dry clean only'] as const

type DressBody = {
  introParagraphs: string[]
  featureLines: string[]
  madeInLine: string
  compositionDetails: string[]
  fitAndSizeDetails: string[]
}

const BODIES: Record<AppLocale, DressBody> = {
  en: {
    introParagraphs: [
      'Some dresses are chosen for a season. Others become part of the life lived beyond it.',
      'The Knightsbridge Dress was designed for women who appreciate elegance that feels effortless. Whether worn on its own or styled with the Knightsbridge Abaya, it offers a refined silhouette that moves naturally between destinations, occasions, and the many moments that shape everyday life.',
      'Crafted from a cotton blend and available in Dark Brown and Navy Grey, the dress follows the body before falling into graceful volume through softly structured box pleats. The result is a feminine maxi silhouette that feels light, elegant, and beautifully balanced in motion.',
      'The signature halter neckline is finished with Bint Saeed’s Khous-inspired woven detailing, drawing inspiration from one of the United Arab Emirates’ oldest traditional crafts. Hidden side pockets are seamlessly integrated into the side seams, adding comfort without interrupting the clean silhouette.',
      'Whether worn for a summer evening in Cannes, a dinner in Paris, a holiday in Lake Como, or everyday life in Abu Dhabi, the Knightsbridge Dress adapts effortlessly to its surroundings. Styled with elegant sandals or heels, it transitions naturally between relaxed daytime moments and refined evenings.',
      'For women who choose to pair it with the Knightsbridge Abaya, the dress creates a beautifully coordinated ensemble for those who believe every layer deserves the same level of attention, creating a complete expression of personal style.',
      'Created in Abu Dhabi, the Knightsbridge Dress reflects Bint Saeed’s vision of contemporary elegance inspired by elements of Emirati heritage and designed for women whose wardrobes extend far beyond a single destination.',
      'Timeless, feminine, and designed to be worn for years rather than seasons, it is a dress created for women who understand that the most memorable wardrobes are built around pieces they never tire of wearing.',
    ],
    featureLines: [
      'Maxi dress in a cotton blend',
      'Halter neckline with Bint Saeed signature Khous-inspired woven detailing',
      'Concealed back zip closure with crossover neck fastening',
      'Hidden side seam pockets',
      'Soft box pleats',
      'Designed to pair with the Knightsbridge Abaya',
      'Length: 143 cm / 56.3 inches',
    ],
    madeInLine: 'Made in Abu Dhabi, United Arab Emirates',
    compositionDetails: ['Outer: 60% Cotton, 40% Polyester'],
    fitAndSizeDetails: [
      'Model height: 160 cm / 63 inches',
      'Model wears size XS',
      'Fitted through the bodice with a full box-pleated skirt',
    ],
  },
  ar: {
    introParagraphs: [
      'بعض الفساتين تُختار لموسم. وأخرى تصبح جزءاً من الحياة التي تُعاش بعده.',
      'صُمم فستان Knightsbridge للنساء اللواتي يقدّرن الأناقة التي تبدو بلا جهد. سواء اُرتدي وحده أو تُنسّق مع عباية Knightsbridge، يقدّم سيلويتاً راقياً ينتقل بسلاسة بين الوجهات والمناسبات ولحظات الحياة اليومية.',
      'مصنوع من مزيج قطن ومتاح بالبني الداكن والرمادي الكحلي، يلتف الفستان حول الجسم قبل أن ينسدل في حجم أنيق عبر طيات صندوقية ناعمة المنحى. والنتيجة سيلويت ماكسي أنثوي خفيف وأنيق ومتوازن بشكل جميل في الحركة.',
      'تُنهى ياقة halter المميزة بتفاصيل منسوجة مستوحاة من الخوص من Bint Saeed، مستلهمة من أقدم الحرف التقليدية في دولة الإمارات العربية المتحدة. وتُدمج جيوب جانبية مخفية بسلاسة في درزات الجوانب، مضيفة راحة دون مقاطعة السيلويت النظيف.',
      'سواء لأمسية صيفية في Cannes أو عشاء في Paris أو عطلة في Lake Como أو للحياة اليومية في Abu Dhabi، يتكيف الفستان بسهولة مع محيطه. ومع صنادل أنيقة أو كعب عالٍ، ينتقل بسلاسة بين لحظات النهار المريحة والأمسيات الراقية.',
      'للنساء اللواتي يخترن إقرانه بعباية Knightsbridge، يشكّل الفستان إطلالة منسقة بشكل جميل لمن تؤمن بأن كل طبقة تستحق نفس مستوى الاهتمام، مقدّماً تعبيراً كاملاً عن الأسلوب الشخصي.',
      'صُنع في Abu Dhabi، يعكس فستان Knightsbridge رؤية Bint Saeed للأناقة المعاصرة المستوحاة من عناصر التراث الإماراتي، ومصمماً لنساء تمتد خزائن ملابسهن إلى ما هو أبعد من وجهة واحدة.',
      'خالد وأنثوي ومصمم ليُرتدى لسنوات لا لمواسم فقط، هو فستان صُنع للنساء اللواتي يدركن أن أجمل الخزائن تُبنى حول قطع لا يملّن من ارتدائها.',
    ],
    featureLines: [
      'فستان ماكسي من مزيج قطن',
      'ياقة halter بتفاصيل منسوجة مميزة من Bint Saeed مستوحاة من الخوص',
      'إغلاق سحاب خلفي مخفي مع تثبيت رقبة متقاطعة',
      'جيوب جانبية مخفية في درزات الجوانب',
      'طيات صندوقية ناعمة',
      'مصمم للتنسيق مع عباية Knightsbridge',
      'الطول: 143 سم / 56.3 بوصة',
    ],
    madeInLine: 'صُنع في أبوظبي، الإمارات العربية المتحدة',
    compositionDetails: [
      'الخارجي: 60% قطن، 40% بوليستر',
    ],
    fitAndSizeDetails: [
      'طول العارضة: 160 سم / 63 بوصة',
      'العارضة ترتدي مقاس XS',
      'قصة محددة عند الصدر مع تنورة بطيات صندوقية كاملة',
    ],
  },
  fr: {
    introParagraphs: [
      'Certaines robes sont choisies pour une saison. D’autres deviennent partie intégrante de la vie qui se poursuit au-delà.',
      'La robe Knightsbridge a été conçue pour les femmes qui apprécient une élégance qui paraît naturelle. Portée seule ou avec l’abaya Knightsbridge, elle offre une silhouette raffinée qui se déplace naturellement entre destinations, occasions et instants du quotidien.',
      'Réalisée en mélange de coton et disponible en brun foncé et gris marine, la robe épouse le corps avant de s’épanouir en volume gracieux grâce à des plis coffre délicatement structurés. Le résultat est une silhouette maxi féminine, légère, élégante et magnifiquement équilibrée en mouvement.',
      'L’encolure halter signature est finie par des détails tissés inspirés du Khous de Bint Saeed, s’inspirant de l’un des plus anciens savoir-faire traditionnels des Émirats arabes unis. Des poches latérales dissimulées sont intégrées dans les coutures latérales, ajoutant du confort sans interrompre la silhouette épurée.',
      'Qu’il s’agisse d’une soirée d’été à Cannes, d’un dîner à Paris, de vacances au lac de Côme ou de la vie quotidienne à Abu Dhabi, la robe Knightsbridge s’adapte naturellement à son environnement. Avec des sandales élégantes ou des talons, elle passe avec aisance des moments décontractés du jour aux soirées raffinées.',
      'Pour les femmes qui choisissent de l’associer à l’abaya Knightsbridge, la robe crée un ensemble harmonieux pour celles qui croient que chaque couche mérite le même niveau d’attention, offrant une expression complète du style personnel.',
      'Créée à Abu Dhabi, la robe Knightsbridge reflète la vision de Bint Saeed d’une élégance contemporaine inspirée d’éléments du patrimoine emirati, conçue pour des femmes dont la garde-robe dépasse une seule destination.',
      'Intemporelle, féminine et conçue pour être portée des années plutôt que des saisons, c’est une robe créée pour les femmes qui comprennent que les garde-robes les plus mémorables s’appuient sur des pièces qu’elles ne se lassent jamais de porter.',
    ],
    featureLines: [
      'Robe maxi en melange de coton',
      'Encolure halter avec finitions tissees signature Bint Saeed inspirees du Khous',
      'Fermeture eclair dissimulee dans le dos avec attache croisee au cou',
      'Poches laterales dissimulees dans les coutures laterales',
      'Plis coffre souples',
      'Concue pour s\'associer a l\'abaya Knightsbridge',
      'Longueur : 143 cm / 56,3 pouces',
    ],
    madeInLine: 'Creee a Abu Dhabi, Emirats arabes unis',
    compositionDetails: [
      'Exterieur : 60 % coton, 40 % polyester',
    ],
    fitAndSizeDetails: [
      'Taille du mannequin : 160 cm / 63 pouces',
      'Le mannequin porte la taille XS',
      'Ajustee au buste avec une jupe a plis coffre amples',
    ],
  },
  de: {
    introParagraphs: [
      'Manche Kleider werden für eine Saison gewählt. Andere werden Teil des Lebens, das darüber hinausgeht.',
      'Das Knightsbridge Dress wurde für Frauen entworfen, die Eleganz schätzen, die mühelos wirkt. Ob allein getragen oder mit der Knightsbridge Abaya gestylt, bietet es eine raffinierte Silhouette, die sich natürlich zwischen Reisezielen, Anlässen und den Momenten des Alltags bewegt.',
      'Aus einer Baumwollmischung gefertigt und in Dark Brown und Navy Grey erhältlich, folgt das Kleid dem Körper, bevor es durch sanft strukturierte Boxfalten in anmutiges Volumen übergeht. Das Ergebnis ist eine feminine Maxi-Silhouette, die leicht, elegant und in Bewegung wunderbar ausbalanciert wirkt.',
      'Der charakteristische Halter-Ausschnitt ist mit Khous-inspirierten Webdetails von Bint Saeed veredelt und greift eines der ältesten traditionellen Handwerke der Vereinigten Arabischen Emirate auf. Versteckte Seitentaschen sind nahtlos in die Seitennähte integriert und bringen Komfort, ohne die klare Silhouette zu stören.',
      'Ob für einen Sommerabend in Cannes, ein Dinner in Paris, einen Urlaub am Comer See oder den Alltag in Abu Dhabi – das Knightsbridge Dress passt sich mühelos seiner Umgebung an. Mit eleganten Sandalen oder Heels bewegt es sich natürlich zwischen entspannten Tagesmomenten und raffinierten Abenden.',
      'Für Frauen, die es mit der Knightsbridge Abaya kombinieren, schafft das Kleid ein wunderbar abgestimmtes Ensemble für alle, die glauben, dass jede Schicht denselben Grad an Aufmerksamkeit verdient – ein vollständiger Ausdruck persönlichen Stils.',
      'In Abu Dhabi geschaffen, spiegelt das Knightsbridge Dress die Vision von Bint Saeed wider: zeitgenössische Eleganz, inspiriert von Elementen des emiratischen Erbes, für Frauen, deren Garderoben weit über ein einziges Reiseziel hinausreichen.',
      'Zeitlos, feminin und für Jahre statt nur für Saisons konzipiert – ein Kleid für Frauen, die wissen, dass die unvergesslichsten Garderoben um Stücke gebaut sind, die sie nie müde werden zu tragen.',
    ],
    featureLines: [
      'Maxikleid aus Baumwollmischung',
      'Halter-Ausschnitt mit Bint Saeed Signatur-Webdetails inspiriert von Khous',
      'Verdeckter Rueckverschluss mit Kreuzverschluss am Hals',
      'Versteckte Seitentaschen in den Seitennaehten',
      'Weiche Boxfalten',
      'Entworfen zur Kombination mit der Knightsbridge Abaya',
      'Laenge: 143 cm / 56,3 Zoll',
    ],
    madeInLine: 'Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate',
    compositionDetails: [
      'Aussenmaterial: 60 % Baumwolle, 40 % Polyester',
    ],
    fitAndSizeDetails: [
      'Modelgroesse: 160 cm / 63 Zoll',
      'Das Model traegt Groesse XS',
      'Tailliert am Oberteil mit einem Rock mit vollen Boxfalten',
    ],
  },
  it: {
    introParagraphs: [
      'Alcuni abiti sono scelti per una stagione. Altri diventano parte della vita che continua oltre.',
      'L’abito Knightsbridge è stato progettato per donne che apprezzano un’eleganza che appare naturale. Indossato da solo o con l’abaya Knightsbridge, offre una silhouette raffinata che si muove con naturalezza tra destinazioni, occasioni e i momenti della vita quotidiana.',
      'Realizzato in misto cotone e disponibile in marrone scuro e grigio navy, l’abito segue il corpo prima di aprirsi in un volume aggraziato attraverso pieghe a scatola delicatamente strutturate. Il risultato è una silhouette maxi femminile leggera, elegante e splendidamente equilibrata nel movimento.',
      'Lo scollo halter distintivo è rifinito con dettagli tessuti ispirati al Khous di Bint Saeed, traendo ispirazione da una delle arti tradizionali più antiche degli Emirati Arabi Uniti. Tasche laterali nascoste sono integrate nelle cuciture laterali, aggiungendo comfort senza interrompere la silhouette pulita.',
      'Che sia per una serata estiva a Cannes, una cena a Parigi, una vacanza sul Lago di Como o la vita quotidiana ad Abu Dhabi, l’abito Knightsbridge si adatta con naturalezza al contesto. Con sandali eleganti o tacchi, passa con facilità dai momenti rilassati del giorno alle serate raffinate.',
      'Per le donne che scelgono di abbinarlo all’abaya Knightsbridge, l’abito crea un ensemble armonioso per chi crede che ogni strato meriti lo stesso livello di attenzione, offrendo un’espressione completa dello stile personale.',
      'Creato ad Abu Dhabi, l’abito Knightsbridge riflette la visione di Bint Saeed di un’eleganza contemporanea ispirata a elementi del patrimonio emiratino, pensata per donne i cui guardaroba si estendono ben oltre una singola destinazione.',
      'Senza tempo, femminile e progettato per essere indossato per anni piuttosto che per stagioni, è un abito creato per donne che sanno che i guardaroba più memorabili si costruiscono intorno a capi di cui non ci si stanca mai.',
    ],
    featureLines: [
      'Abito maxi in misto cotone',
      'Scollo halter con dettagli tessuti signature Bint Saeed ispirati al Khous',
      'Chiusura lampo posteriore nascosta con allacciatura incrociata al collo',
      'Tasche laterali nascoste nelle cuciture laterali',
      'Piega a scatola morbida',
      'Progettato per abbinarsi all\'abaya Knightsbridge',
      'Lunghezza: 143 cm / 56,3 pollici',
    ],
    madeInLine: 'Creato ad Abu Dhabi, Emirati Arabi Uniti',
    compositionDetails: [
      'Esterno: 60% cotone, 40% poliestere',
    ],
    fitAndSizeDetails: [
      'Altezza modella: 160 cm / 63 pollici',
      'La modella indossa taglia XS',
      'Aderente sul corpetto con gonna a pieghe a scatola ampia',
    ],
  },
  es: {
    introParagraphs: [
      'Algunos vestidos se eligen para una temporada. Otros pasan a formar parte de la vida que continúa más allá.',
      'El vestido Knightsbridge fue diseñado para mujeres que aprecian una elegancia que se siente natural. Llevado solo o con la abaya Knightsbridge, ofrece una silueta refinada que se mueve con naturalidad entre destinos, ocasiones y los momentos del día a día.',
      'Confeccionado en mezcla de algodón y disponible en marrón oscuro y gris marino, el vestido sigue el cuerpo antes de abrirse en un volumen elegante mediante pliegues de caja suavemente estructurados. El resultado es una silueta maxi femenina ligera, elegante y bellamente equilibrada en movimiento.',
      'El escote halter distintivo está acabado con detalles tejidos inspirados en Khous de Bint Saeed, inspirándose en una de las artesanías tradicionales más antiguas de los Emiratos Árabes Unidos. Bolsillos laterales ocultos integrados en las costuras laterales aportan comodidad sin interrumpir la silueta limpia.',
      'Ya sea para una velada de verano en Cannes, una cena en París, unas vacaciones en el lago de Como o la vida cotidiana en Abu Dabi, el vestido Knightsbridge se adapta con naturalidad a su entorno. Con sandalias elegantes o tacones, transita con facilidad entre momentos relajados del día y veladas refinadas.',
      'Para las mujeres que eligen combinarlo con la abaya Knightsbridge, el vestido crea un conjunto armonioso para quienes creen que cada capa merece el mismo nivel de atención, ofreciendo una expresión completa del estilo personal.',
      'Creado en Abu Dabi, el vestido Knightsbridge refleja la visión de Bint Saeed de una elegancia contemporánea inspirada en elementos del patrimonio emiratí, diseñada para mujeres cuyos armarios se extienden mucho más allá de un solo destino.',
      'Atemporal, femenino y diseñado para llevarse durante años y no solo temporadas, es un vestido creado para mujeres que entienden que los armarios más memorables se construyen en torno a piezas de las que nunca se cansan.',
    ],
    featureLines: [
      'Vestido maxi en mezcla de algodon',
      'Escote halter con detalles tejidos signature de Bint Saeed inspirados en Khous',
      'Cierre de cremallera trasero oculto con cierre cruzado en el cuello',
      'Bolsillos laterales ocultos en las costuras laterales',
      'Pliegues de caja suaves',
      'Disenado para combinar con la abaya Knightsbridge',
      'Largo: 143 cm / 56,3 pulgadas',
    ],
    madeInLine: 'Creado en Abu Dhabi, Emiratos Arabes Unidos',
    compositionDetails: [
      'Exterior: 60% algodon, 40% poliester',
    ],
    fitAndSizeDetails: [
      'Altura de la modelo: 160 cm / 63 pulgadas',
      'La modelo lleva talla XS',
      'Ajustado en el corpiño con falda de pliegues de caja completos',
    ],
  },
  ru: {
    introParagraphs: [
      'Некоторые платья выбирают на сезон. Другие становятся частью жизни, которая продолжается дальше.',
      'Платье Knightsbridge создано для женщин, ценящих элегантность, которая ощущается естественно. Носимое самостоятельно или с абайей Knightsbridge, оно предлагает утончённый силуэт, который естественно перемещается между направлениями, событиями и моментами повседневной жизни.',
      'Изготовленное из хлопковой смеси и доступное в тёмно-коричневом и сине-сером оттенках, платье следует линии тела, прежде чем раскрыться в грациозный объём благодаря мягко структурированным складкам «коробочкой». Результат — женственный макси-силуэт, лёгкий, элегантный и прекрасно сбалансированный в движении.',
      'Фирменный вырез halter завершён деталями плетения, вдохновлёнными Khous от Bint Saeed, с отсылкой к одному из старейших традиционных ремёсел ОАЭ. Скрытые боковые карманы аккуратно встроены в боковые швы, добавляя комфорт без нарушения чистого силуэта.',
      'Будь то летний вечер в Каннах, ужин в Париже, отдых на озере Комо или повседневная жизнь в Абу-Даби, платье Knightsbridge естественно адаптируется к окружению. С элегантными сандалиями или каблуками оно легко переходит от расслабленных дневных моментов к изысканным вечерам.',
      'Для женщин, которые сочетают его с абайей Knightsbridge, платье создаёт гармоничный ансамбль для тех, кто верит, что каждый слой заслуживает одинакового внимания — полное выражение личного стиля.',
      'Созданное в Абу-Даби, платье Knightsbridge отражает видение Bint Saeed современной элегантности, вдохновлённой элементами эмиратского наследия, для женщин, чьи гардеробы выходят далеко за пределы одного направления.',
      'Вневременное, женственное и созданное носиться годами, а не сезонами — платье для женщин, которые понимают: самые запоминающиеся гардеробы строятся вокруг вещей, от которых никогда не устаёшь.',
    ],
    featureLines: [
      'Платье макси из хлопковой смеси',
      'Вырез halter с фирменной тканой отделкой Bint Saeed, вдохновлённой Khous',
      'Скрытая застёжка-молния сзади с перекрёстной фиксацией на шее',
      'Скрытые боковые карманы в боковых швах',
      'Мягкие складки «коробочкой»',
      'Создано для сочетания с абайей Knightsbridge',
      'Длина: 143 см / 56,3 дюйма',
    ],
    madeInLine: 'Создано в Абу-Даби, Объединённые Арабские Эмираты',
    compositionDetails: [
      'Верх: 60% хлопок, 40% полиэстер',
    ],
    fitAndSizeDetails: [
      'Рост модели: 160 см / 63 дюйма',
      'Модель носит размер XS',
      'Приталенный лиф с юбкой с полными складками «коробочкой»',
    ],
  },
  zh: {
    introParagraphs: [
      '有些连衣裙为一个季节而选。另一些则成为超越季节的生活的一部分。',
      'Knightsbridge 连衣裙为欣赏毫不费力优雅的女性而设计。可单独穿着，也可与 Knightsbridge 长袍搭配，呈现精致廓形，在目的地、场合与日常时刻之间自然流转。',
      '采用棉混纺面料，提供深棕色与海军灰两种配色。连衣裙贴合身形，再通过柔和结构的箱褶展开优雅体量，呈现轻盈、优雅、动感平衡的女性长款廓形。',
      '标志性 halter 领口以 Bint Saeed Khous 灵感编织细节点缀，汲取阿联酋最古老传统工艺之一的灵感。隐藏侧袋无缝融入侧缝，增添舒适而不破坏利落廓形。',
      '无论是戛纳夏夜、巴黎晚宴、科莫湖度假，还是阿布扎比日常生活，Knightsbridge 连衣裙都能自然融入环境。搭配优雅凉鞋或高跟鞋，可在轻松日间与精致夜晚之间自如转换。',
      '选择与 Knightsbridge 长袍搭配时，这款连衣裙为相信每一层都值得同等精致度的女性打造协调造型，完整表达个人风格。',
      '于阿布扎比打造，Knightsbridge 连衣裙体现 Bint Saeed 以阿联酋传统元素为灵感的当代优雅愿景，为衣橱超越单一目的地的女性而设计。',
      '隽永、柔美、为多年穿着而非一季而设计——献给懂得最令人难忘的衣橱，往往建立在百穿不厌的单品之上。',
    ],
    featureLines: [
      '棉混纺长款连衣裙',
      'halter 领口，配 Bint Saeed 标志性 Khous 灵感编织细节',
      '隐藏式背部拉链，交叉领口扣合',
      '侧缝隐藏式侧袋',
      '柔和箱褶',
      '可与 Knightsbridge 长袍搭配穿着',
      '衣长：143 厘米 / 56.3 英寸',
    ],
    madeInLine: '于阿布扎比、阿拉伯联合酋长国制作',
    compositionDetails: [
      '外层：60% 棉，40% 聚酯纤维',
    ],
    fitAndSizeDetails: [
      '模特身高：160 厘米 / 63 英寸',
      '模特穿着 XS 码',
      '上身合身，配完整箱褶半身裙',
    ],
  },
  nl: {
    introParagraphs: [
      'Sommige jurken worden voor een seizoen gekozen. Andere worden onderdeel van het leven dat daarna doorgaat.',
      'De Knightsbridge dress is ontworpen voor vrouwen die elegantie waarderen die moeiteloos aanvoelt. Gedragen op zichzelf of gestyled met de Knightsbridge abaya, biedt ze een verfijnd silhouet dat natuurlijk beweegt tussen bestemmingen, gelegenheden en de momenten van het dagelijks leven.',
      'Gemaakt van een katoenmix en verkrijgbaar in donkerbruin en marinegrijs, volgt de jurk het lichaam voordat ze via zacht gestructureerde boxplooien uitmondt in sierlijk volume. Het resultaat is een vrouwelijk maxi-silhouet dat licht, elegant en prachtig in balans is in beweging.',
      'De kenmerkende halter-halslijn is afgewerkt met Khous-geïnspireerde weefdetails van Bint Saeed, geïnspireerd op een van de oudste traditionele ambachten van de Verenigde Arabische Emiraten. Verborgen zijzakken zijn naadloos in de zijnaad verwerkt voor comfort zonder het strakke silhouet te verstoren.',
      'Of het nu gaat om een zomeravond in Cannes, een diner in Parijs, een vakantie aan het Comomeer of het dagelijks leven in Abu Dhabi – de Knightsbridge dress past zich moeiteloos aan. Met elegante sandalen of hakken beweegt ze natuurlijk tussen ontspannen dagmomenten en verfijnde avonden.',
      'Voor vrouwen die haar combineren met de Knightsbridge abaya creëert de jurk een prachtig gecoördineerd ensemble voor wie gelooft dat elke laag hetzelfde niveau van aandacht verdient – een volledige uitdrukking van persoonlijke stijl.',
      'Gemaakt in Abu Dhabi weerspiegelt de Knightsbridge dress de visie van Bint Saeed op eigentijdse elegantie, geïnspireerd door elementen van Emiratisch erfgoed, voor vrouwen wiens garderobe ver reikt voorbij één bestemming.',
      'Tijdloos, vrouwelijk en ontworpen om jarenlang gedragen te worden in plaats van seizoenen – een jurk voor vrouwen die begrijpen dat de meest memorabele garderobes zijn opgebouwd rond stukken waar ze nooit op uitgekeken raken.',
    ],
    featureLines: [
      'Maxi-jurk in katoenmix',
      'Halter-halslijn met kenmerkende Bint Saeed geweven Khous-geinspireerde details',
      'Verborgen ritssluiting aan de achterkant met kruisvastmaking bij de hals',
      'Verborgen zijzakken in de zijnaad',
      'Zachte boxplooien',
      'Ontworpen om te combineren met de Knightsbridge abaya',
      'Lengte: 143 cm / 56,3 inch',
    ],
    madeInLine: 'Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten',
    compositionDetails: [
      'Buitenkant: 60% katoen, 40% polyester',
    ],
    fitAndSizeDetails: [
      'Model lengte: 160 cm / 63 inch',
      'Model draagt maat XS',
      'Aangesloten bij het lijfje met een rok met volle boxplooien',
    ],
  },
  pt: {
    introParagraphs: [
      'Alguns vestidos são escolhidos para uma estação. Outros passam a fazer parte da vida que continua depois.',
      'O vestido Knightsbridge foi concebido para mulheres que apreciam uma elegância que parece natural. Usado sozinho ou com a abaya Knightsbridge, oferece uma silhueta refinada que se move naturalmente entre destinos, ocasiões e os momentos do quotidiano.',
      'Confeccionado em mistura de algodão e disponível em castanho escuro e cinza-marinho, o vestido acompanha o corpo antes de abrir em volume gracioso através de pregas caixa suavemente estruturadas. O resultado é uma silhueta maxi feminina leve, elegante e belamente equilibrada em movimento.',
      'O decote halter distintivo é finalizado com detalhes tecidos inspirados no Khous da Bint Saeed, inspirando-se numa das artes tradicionais mais antigas dos Emirados Árabes Unidos. Bolsos laterais ocultos estão integrados nas costuras laterais, acrescentando conforto sem interromper a silhueta limpa.',
      'Quer seja para uma noite de verão em Cannes, um jantar em Paris, férias no Lago de Como ou a vida quotidiana em Abu Dhabi, o vestido Knightsbridge adapta-se naturalmente ao contexto. Com sandálias elegantes ou saltos, transita com facilidade entre momentos descontraídos do dia e noites refinadas.',
      'Para mulheres que o combinam com a abaya Knightsbridge, o vestido cria um conjunto harmonioso para quem acredita que cada camada merece o mesmo nível de atenção — uma expressão completa de estilo pessoal.',
      'Criado em Abu Dhabi, o vestido Knightsbridge reflete a visão da Bint Saeed de elegância contemporânea inspirada em elementos do património emirati, para mulheres cujos roupeiros se estendem muito além de um único destino.',
      'Intemporal, feminino e concebido para ser usado durante anos e não apenas estações, é um vestido criado para mulheres que compreendem que os roupeiros mais memoráveis se constroem em torno de peças de que nunca se cansam.',
    ],
    featureLines: [
      'Vestido maxi em mistura de algodao',
      'Decote halter com detalhes tecidos signature Bint Saeed inspirados no Khous',
      'Fecho de correr oculto nas costas com fecho cruzado no pescoco',
      'Bolsos laterais ocultos nas costuras laterais',
      'Pregas caixa suaves',
      'Concebido para combinar com a abaya Knightsbridge',
      'Comprimento: 143 cm / 56,3 polegadas',
    ],
    madeInLine: 'Criado em Abu Dhabi, Emirados Arabes Unidos',
    compositionDetails: [
      'Exterior: 60% algodao, 40% poliester',
    ],
    fitAndSizeDetails: [
      'Altura da modelo: 160 cm / 63 polegadas',
      'A modelo usa tamanho XS',
      'Ajustado no corpete com saia de pregas caixa completas',
    ],
  },
  id: {
    introParagraphs: [
      'Beberapa gaun dipilih untuk satu musim. Yang lain menjadi bagian dari kehidupan yang berlanjut setelahnya.',
      'Gaun Knightsbridge dirancang untuk wanita yang menghargai keanggunan yang terasa effortless. Dipakai sendiri atau distyling dengan Abaya Knightsbridge, gaun ini menawarkan siluet halus yang bergerak secara alami antara destinasi, acara, dan momen kehidupan sehari-hari.',
      'Dibuat dari campuran katun dan tersedia dalam Dark Brown dan Navy Grey, gaun ini mengikuti bentuk tubuh sebelum membuka volume anggun melalui lipatan kotak yang lembut terstruktur. Hasilnya adalah siluet maxi feminin yang terasa ringan, elegan, dan seimbang indah saat bergerak.',
      'Leher halter khas diselesaikan dengan detail anyaman terinspirasi Khous dari Bint Saeed, mengambil inspirasi dari salah satu kerajinan tradisional tertua Uni Emirat Arab. Saku samping tersembunyi terintegrasi mulus ke dalam jahitan samping, menambah kenyamanan tanpa mengganggu siluet yang bersih.',
      'Baik untuk malam musim panas di Cannes, makan malam di Paris, liburan di Danau Como, atau kehidupan sehari-hari di Abu Dhabi, Gaun Knightsbridge beradaptasi dengan mudah pada lingkungannya. Dengan sandal elegan atau heels, ia bertransisi secara alami antara momen santai siang hari dan malam yang halus.',
      'Bagi wanita yang memadukannya dengan Abaya Knightsbridge, gaun ini menciptakan ensemble yang selaras bagi mereka yang percaya setiap lapisan layak mendapat perhatian yang sama — ekspresi lengkap gaya pribadi.',
      'Dibuat di Abu Dhabi, Gaun Knightsbridge mencerminkan visi Bint Saeed akan keanggunan kontemporer yang terinspirasi elemen warisan Emirati, untuk wanita yang garderobnya melampaui satu destinasi.',
      'Abadi, feminin, dan dirancang untuk dipakai bertahun-tahun bukan hanya satu musim — gaun untuk wanita yang memahami bahwa garderobe paling berkesan dibangun dari potongan yang tidak pernah bosan dikenakan.',
    ],
    featureLines: [
      'Gaun maxi dari campuran katun',
      'Leher halter dengan detail anyaman signature Bint Saeed terinspirasi Khous',
      'Ritsleting belakang tersembunyi dengan pengait leher silang',
      'Saku samping tersembunyi di jahitan sisi',
      'Lipatan kotak lembut',
      'Dirancang untuk dipadukan dengan Abaya Knightsbridge',
      'Panjang: 143 cm / 56,3 inci',
    ],
    madeInLine: 'Dibuat di Abu Dhabi, Uni Emirat Arab',
    compositionDetails: [
      'Luar: 60% Katun, 40% Polyester',
    ],
    fitAndSizeDetails: [
      'Tinggi model: 160 cm / 63 inci',
      'Model mengenakan ukuran XS',
      'Pas di bodice dengan rok lipatan kotak penuh',
    ],
  },
  ms: {
    introParagraphs: [
      'Sesetengah gaun dipilih untuk satu musim. Yang lain menjadi sebahagian daripada kehidupan yang berterusan selepasnya.',
      'Gaun Knightsbridge direka untuk wanita yang menghargai keanggunan yang terasa effortless. Dipakai sendiri atau digayakan dengan Abaya Knightsbridge, gaun ini menawarkan siluet halus yang bergerak secara semula jadi antara destinasi, majlis, dan detik kehidupan harian.',
      'Dihasilkan daripada campuran kapas dan tersedia dalam Dark Brown dan Navy Grey, gaun ini mengikut bentuk badan sebelum membuka isipadu anggun melalui lipatan kotak yang lembut berstruktur. Hasilnya ialah siluet maxi feminin yang terasa ringan, anggun, dan seimbang dengan indah dalam pergerakan.',
      'Leher halter khas disiapkan dengan perincian tenunan terinspirasi Khous daripada Bint Saeed, mengambil inspirasi daripada salah satu kraf tradisional tertua Emiriah Arab Bersatu. Poket sisi tersembunyi disepadukan dengan lancar ke dalam jahitan sisi, menambah keselesaan tanpa mengganggu siluet yang kemas.',
      'Sama ada untuk malam musim panas di Cannes, makan malam di Paris, percutian di Tasik Como, atau kehidupan harian di Abu Dhabi, Gaun Knightsbridge menyesuaikan diri dengan mudah pada persekitarannya. Dengan sandal elegan atau heels, ia bergerak secara semula jadi antara detik santai siang hari dan malam yang halus.',
      'Bagi wanita yang memadankannya dengan Abaya Knightsbridge, gaun ini mewujudkan ensemble yang selaras bagi mereka yang percaya setiap lapisan layak mendapat perhatian yang sama — ungkapan lengkap gaya peribadi.',
      'Dihasilkan di Abu Dhabi, Gaun Knightsbridge mencerminkan visi Bint Saeed tentang keanggunan kontemporari yang berinspirasikan elemen warisan Emirati, untuk wanita yang almari pakaiannya melangkaui satu destinasi.',
      'Abadi, feminin, dan direka untuk dipakai bertahun-tahun bukan hanya satu musim — gaun untuk wanita yang memahami bahawa almari pakaian paling bermakna dibina daripada kepingan yang tidak pernah bosan dipakai.',
    ],
    featureLines: [
      'Gaun maxi daripada campuran kapas',
      'Leher halter dengan perincian tenunan signature Bint Saeed terinspirasi Khous',
      'Zip belakang tersembunyi dengan pengikat leher bersilang',
      'Poket sisi tersembunyi di jahitan sisi',
      'Lipatan kotak lembut',
      'Direka untuk digayakan dengan Abaya Knightsbridge',
      'Panjang: 143 cm / 56.3 inci',
    ],
    madeInLine: 'Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu',
    compositionDetails: [
      'Luar: 60% Kapas, 40% Poliester',
    ],
    fitAndSizeDetails: [
      'Tinggi model: 160 cm / 63 inci',
      'Model memakai saiz XS',
      'Ketat di bodice dengan skirt lipatan kotak penuh',
    ],
  },
}

const COLOUR_LABEL: Record<AppLocale, string> = {
  en: 'Colour',
  ar: 'اللون',
  fr: 'Couleur',
  it: 'Colore',
  es: 'Color',
  ru: 'Цвет',
  zh: '颜色',
  de: 'Farbe',
  nl: 'Kleur',
  pt: 'Cor',
  id: 'Warna',
  ms: 'Warna',
}

export function buildKnightsbridgeDressPdpContent(
  color: KnightsbridgeCatalogColor | string | undefined,
  locale: AppLocale = 'en',
): ProductPdpContent {
  const catalogColor = normalizeKnightsbridgeCatalogColor(
    typeof color === 'string' ? color : color,
  )
  const colorLabel = knightsbridgePdpColorLabel(catalogColor, locale)
  const body = BODIES[locale]
  const colourLine = `${COLOUR_LABEL[locale]}: ${colorLabel}`

  return {
    introParagraphs: body.introParagraphs,
    productDetails: [...body.featureLines, colourLine, body.madeInLine],
    compositionDetails: [...body.compositionDetails],
    fitAndSizeDetails: body.fitAndSizeDetails,
    careDetails: [...CARE],
    stylePairingNote: getKnightsbridgeStylePairingNote('knightsbridge-dress', catalogColor, locale),
    faq: getKnightsbridgeDressPdpFaq(locale),
  }
}
