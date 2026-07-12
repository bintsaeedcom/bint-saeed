import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductPdpContent } from '@/data/productPdpContent'
import { COVENT_GARDEN_ABAYA_INTRO_EN } from '@/data/coventGardenAbayaPdpIntro'
import type { PdpDetailGroup, PdpIntroParagraph } from '@/lib/products/pdpIntroRich'
import {
  THE_CODES_AL_TALLI_HREF,
  THE_CODES_KNOTTED_LINES_HREF,
  pdpIntroParagraphsToPlainText,
} from '@/lib/products/pdpIntroRich'
import { getCoventGardenAbayaPdpFaq } from '@/lib/products/coventGardenAbayaFaqI18n'
import { getHouseCodesDetailGroup } from '@/lib/products/pdpHouseCodesGroupsI18n'
import { PDP_COLOUR_TITLE, PDP_SILHOUETTE_TITLE } from '@/lib/products/pdpFeatureSectionTitles'
import { localizedColorName } from '@/lib/products/imageAltI18n'

export const COVENT_GARDEN_ABAYA_SLUG = 'covent-garden-abaya'

const COLOURS = ['Burgundy', 'Deep Black', 'Navy Blue'] as const

function knottedLineAlTalliParagraph(
  before: string,
  midKnotted: string,
  midAlTalli: string,
  after: string,
): PdpIntroParagraph {
  return [
    { type: 'text', value: before },
    { type: 'codeLink', label: 'Knotted Line', href: THE_CODES_KNOTTED_LINES_HREF, bold: true },
    { type: 'text', value: midKnotted },
    { type: 'codeLink', label: 'Al Talli', href: THE_CODES_AL_TALLI_HREF, bold: true },
    { type: 'text', value: after },
  ]
}

function pairingParagraph(before: string, orWord: string, after: string): PdpIntroParagraph {
  return [
    { type: 'text', value: before },
    { type: 'codeLink', label: 'Covent Garden Dress', href: '/shop/covent-garden-long-dress', bold: true },
    { type: 'text', value: ` ${orWord} ` },
    { type: 'codeLink', label: 'Hampstead Dress', href: '/shop/hampstead-dress', bold: true },
    { type: 'text', value: after },
  ]
}

const INTRO_BY_LOCALE: Record<AppLocale, PdpIntroParagraph[]> = {
  en: COVENT_GARDEN_ABAYA_INTRO_EN,
  ar: [
    [
      {
        type: 'text',
        value: 'لكل دار أزياء القطعة التي تُعرّفها. بالنسبة إلى Bint Saeed، عباية Covent Garden إحدى تلك الإبداعات.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'تجمع بين التفصيل المعاصر والفن وإحدى أعز الحرف التقليدية في دولة الإمارات العربية المتحدة، وصُنعت عباية Covent Garden للنساء اللواتي يقدّرن الأناقة الخالدة المعبّرة عبر تصميم استثنائي. مبطّنة بالكامل ببطانة كريب ناعمة، تتحرك قصتها الأنيقة A-line بجمال مع كل خطوة، لتمنح حضوراً راقياً للأعراس والمناسبات الرسمية والتجمعات الأنيقة واللحظات التي يهم فيها ترك انطباع دائم.',
      },
    ],
    knottedLineAlTalliParagraph(
      'تتوفر بالألوان العنابي والأسود العميق والأزرق الكحلي، وقد وُضعت كل تفصيلة بعناية. تُنهى كتفا العباءة بأزرار ',
      ' الذهبية المميزة لـ Bint Saeed، بينما تزيّن الأساور الواسعة تفاصيل ',
      ' المنسوجة. يُعترف بـ Al Talli من قِبل اليونسكو كتراث ثقافي غير مادي، وهو من أعز الحرف الإماراتية التقليدية. في Bint Saeed، نُعيد تخييل استخدام Al Talli عبر التصميم المعاصر، ليُرتدى ويُقدَّر من نساء حول العالم.',
      '',
    ),
    [
      {
        type: 'text',
        value:
          'يكمل التصميم وشاحاً قابلاً للفصل، منتهياً بتفاصيل Al Talli ودبوس الشعار الذهبي المميز لـ Bint Saeed. يُرتدى منسدلاً من الكتف أو بشكل قطري عبر الجسم، فيحوّل القصة بحضور وتميّز وأناقة خالدة.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'مثل كل عباءة Bint Saeed، يمكن تخصيص عباية Covent Garden عبر الملصق الداخلي المخفي المميز للدار، لإضافة اسم أو تاريخ أو رسالة ذات معنى تبقى قريبة منكِ في كل مرة ترتدينها.',
      },
    ],
    pairingParagraph(
      'تنسجم عباية Covent Garden بجمال مع ',
      'أو',
      '، لتكوين إطلالات طبقات راقية حيث وُضع كل تفصيل بعناية من الداخل إلى الخارج.',
    ),
  ],
  fr: [
    [
      {
        type: 'text',
        value:
          'Chaque maison de mode a la pièce qui la définit. Pour Bint Saeed, l’abaya Covent Garden en est une.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Réunissant tailleur contemporain, art et l’un des savoir-faire traditionnels les plus précieux des Émirats arabes unis, l’abaya Covent Garden a été créée pour les femmes qui apprécient une élégance intemporelle exprimée par un design exceptionnel. Entièrement doublée d’un crêpe doux, sa silhouette A-line élégante accompagne chaque pas avec grâce, créant une présence raffinée pour les mariages, occasions officielles, réceptions élégantes et moments où l’on souhaite marquer les esprits durablement.',
      },
    ],
    knottedLineAlTalliParagraph(
      'Disponible en Bourgogne, Noir profond et Bleu marine, chaque détail a été soigneusement pensé. Les épaulettes sont finies avec les boutons dorés signature ',
      ' de Bint Saeed, tandis que les poignets larges présentent la ',
      ' tissée. Reconnue par l’UNESCO comme patrimoine culturel immatériel, l’Al Talli est l’un des plus précieux artisanats traditionnels émiratis. Chez Bint Saeed, nous réinventons l’usage de l’Al Talli par un design contemporain, pour que cet élément remarquable du patrimoine culturel émirati soit porté et apprécié par des femmes du monde entier.',
      '',
    ),
    [
      {
        type: 'text',
        value:
          'La pièce se complète par une écharpe statement amovible, finie avec une bordure Al Talli et l’épingle emblème dorée signature de Bint Saeed. Portée drapée naturellement depuis l’épaule ou en diagonale sur le corps, elle transforme la silhouette avec cérémonie, distinction et élégance intemporelle.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Comme chaque abaya Bint Saeed, l’abaya Covent Garden peut être personnalisée avec l’étiquette intérieure cachée signature de la maison, pour y ajouter un nom, une date ou un message personnel qui vous reste proche à chaque port.',
      },
    ],
    pairingParagraph(
      'L’abaya Covent Garden s’associe magnifiquement à la ',
      'ou à la ',
      ', créant des silhouettes superposées raffinées où chaque détail a été pensé de l’intérieur vers l’extérieur.',
    ),
  ],
  it: [
    [
      {
        type: 'text',
        value:
          'Ogni maison di moda ha il capo che la definisce. Per Bint Saeed, l’abaya Covent Garden è una di quelle creazioni.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Unendo sartoria contemporanea, arte e uno dei mestieri tradizionali più preziosi degli Emirati Arabi Uniti, l’abaya Covent Garden è stata creata per donne che apprezzano un’eleganza senza tempo espressa attraverso un design eccezionale. Completamente foderata in crepe morbido, la sua elegante silhouette A-line si muove con grazia a ogni passo, creando una presenza raffinata per matrimoni, occasioni ufficiali, ricevimenti eleganti e momenti in cui conta lasciare un’impressione duratura.',
      },
    ],
    knottedLineAlTalliParagraph(
      'Disponibile in Borgogna, Nero profondo e Blu navy, ogni dettaglio è stato considerato con cura. Le spalline sono finite con i bottoni dorati signature ',
      ' di Bint Saeed, mentre i polsini ampi presentano il bordo ',
      ' tessuto. Riconosciuto dall’UNESCO come patrimonio culturale immateriale, l’Al Talli è uno dei mestieri artigianali tradizionali emiratini più preziosi. In Bint Saeed reinventiamo l’uso dell’Al Talli attraverso il design contemporaneo, affinché questo straordinario elemento del patrimonio culturale emiratino possa essere indossato e apprezzato da donne in tutto il mondo.',
      '',
    ),
    [
      {
        type: 'text',
        value:
          'A completare il design una fascia statement removibile, finita con bordo Al Talli e la spilla Monogram dorata signature di Bint Saeed. Indossata drappeggiata naturalmente dalla spalla o in diagonale sul corpo, trasforma la silhouette con cerimonia, distinzione ed eleganza senza tempo.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Come ogni abaya Bint Saeed, l’abaya Covent Garden può essere personalizzata con l’etichetta interna nascosta signature della maison, per aggiungere un nome, una data o un messaggio personale che resta vicino a voi ogni volta che la indossate.',
      },
    ],
    pairingParagraph(
      'L’abaya Covent Garden si abbina magnificamente al ',
      'o al ',
      ', creando silhouette stratificate raffinate in cui ogni dettaglio è stato pensato dall’interno verso l’esterno.',
    ),
  ],
  es: [
    [
      {
        type: 'text',
        value:
          'Toda casa de moda tiene la pieza que la define. Para Bint Saeed, la abaya Covent Garden es una de esas creaciones.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Reuniendo sastrería contemporánea, arte y uno de los oficios tradicionales más preciados de los Emiratos Árabes Unidos, la abaya Covent Garden fue creada para mujeres que aprecian la elegancia atemporal expresada a través de un diseño excepcional. Completamente forrada con un forro de crepé suave, su elegante silueta A-line se mueve con gracia en cada paso, creando una presencia refinada para bodas, ocasiones oficiales, reuniones elegantes y momentos en los que importa dejar una impresión duradera.',
      },
    ],
    knottedLineAlTalliParagraph(
      'Disponible en Burdeos, Negro profundo y Azul marino, cada detalle ha sido cuidadosamente considerado. Las hombreras están acabadas con los botones dorados signature ',
      ' de Bint Saeed, mientras que los puños amplios presentan el ribete ',
      ' tejido. Reconocido por la UNESCO como Patrimonio Cultural Inmaterial, el Al Talli es uno de los oficios artesanales tradicionales emiratíes más preciados. En Bint Saeed reimaginamos el uso del Al Talli a través del diseño contemporáneo, para que este notable elemento del patrimonio cultural emiratí sea llevado y apreciado por mujeres de todo el mundo.',
      '',
    ),
    [
      {
        type: 'text',
        value:
          'Completando el diseño, una faja statement desmontable acabada con ribete Al Talli y el pin Monogram dorado signature de Bint Saeed. Llevada drapeada naturalmente desde el hombro o en diagonal sobre el cuerpo, transforma la silueta con ceremonia, distinción y elegancia atemporal.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Como toda abaya Bint Saeed, la abaya Covent Garden puede personalizarse con la etiqueta interior oculta signature de la casa, permitiendo añadir un nombre, una fecha o un mensaje personal que permanece cerca cada vez que la llevas.',
      },
    ],
    pairingParagraph(
      'La abaya Covent Garden combina maravillosamente con el ',
      'o el ',
      ', creando siluetas en capas refinadas donde cada detalle ha sido considerado desde el interior hacia el exterior.',
    ),
  ],
  ru: [
    [
      {
        type: 'text',
        value:
          'У каждого модного дома есть изделие, которое его определяет. Для Bint Saeed абайя Covent Garden — одно из таких творений.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Объединяя современный крой, искусство и одно из самых ценных традиционных ремёсел Объединённых Арабских Эмиратов, абайя Covent Garden создана для женщин, ценящих вневременную элегантность, выраженную через исключительный дизайн. Полностью на подкладке из мягкого крепа, её элегантный силуэт A-line красиво движется с каждым шагом, создавая утончённое присутствие для свадеб, официальных мероприятий, изысканных приёмов и моментов, когда важно произвести неизгладимое впечатление.',
      },
    ],
    knottedLineAlTalliParagraph(
      'Доступна в цветах Burgundy, Deep Black и Navy Blue — каждая деталь продумана с заботой. Погоны на плечах отделаны фирменными золотистыми пуговицами ',
      ' Bint Saeed, а широкие манжеты украшены тканым бордюром ',
      '. Признанный ЮНЕСКО нематериальным культурным наследием, Al Talli — одно из самых ценных традиционных эмиратских ремёсел. В Bint Saeed мы переосмысливаем использование Al Talli через современный дизайн, чтобы этот замечательный элемент эмиратского культурного наследия носили и ценили женщины по всему миру.',
      '',
    ),
    [
      {
        type: 'text',
        value:
          'Завершает образ съёмная statement-палантин, отделанная бордюром Al Talli и фирменной золотистой эмблемой Bint Saeed. Носимый естественно с плеча или по диагонали через тело, он преображает силуэт, придавая торжественность, отличие и вневременную элегантность.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Как и каждая абайя Bint Saeed, абайя Covent Garden может быть персонализирована с помощью фирменной скрытой внутренней этикетки, куда можно добавить имя, дату или личное послание, которое остаётся близким при каждом ношении.',
      },
    ],
    pairingParagraph(
      'Абайя Covent Garden прекрасно сочетается с ',
      'или ',
      ', создавая изысканные многослойные силуэты, где каждая деталь продумана изнутри наружу.',
    ),
  ],
  zh: [
    [
      {
        type: 'text',
        value: '每个时装屋都有定义品牌的标志性作品。对 Bint Saeed 而言，Covent Garden Abaya 正是其中之一。',
      },
    ],
    [
      {
        type: 'text',
        value:
          '融合当代剪裁、艺术与阿联酋最珍贵的传统工艺之一，Covent Garden Abaya 为欣赏以卓越设计表达永恒优雅的女性而创作。全里衬柔软绉绸，优雅的 A 字廓形随每一步轻盈流动，为婚礼、正式场合、雅集聚会与需要留下持久印象的时刻，呈现精致气场。',
      },
    ],
    knottedLineAlTalliParagraph(
      '提供酒红、深黑与海军蓝三色，每一处细节皆经悉心考量。肩章以 Bint Saeed 标志性金色 ',
      ' 纽扣收束，宽袖口饰以 ',
      ' 编织镶边。Al Talli 被联合国教科文组织认定为非物质文化遗产，是阿联酋最珍贵的传统手工艺之一。在 Bint Saeed，我们以当代设计重新诠释 Al Talli 的运用，让这一阿联酋文化遗产的重要元素被世界各地的女性穿着与欣赏。',
      '',
    ),
    [
      {
        type: 'text',
        value:
          '可拆卸 statement 披肩以 Al Talli 镶边与 Bint Saeed 标志性金色徽章胸针收尾。自然披于肩头或斜跨身前，为廓形注入仪式感、辨识度与永恒优雅。',
      },
    ],
    [
      {
        type: 'text',
        value:
          '与每件 Bint Saeed 长袍一样，Covent Garden Abaya 可通过品牌标志性隐藏内标个性化，添加姓名、日期或意义深远的寄语，在每次穿着时与你相伴。',
      },
    ],
    pairingParagraph(
      'Covent Garden Abaya 与 ',
      '或 ',
      ' 搭配相得益彰，打造由内而外每一处细节皆经深思的精致叠穿廓形。',
    ),
  ],
  de: [
    [
      {
        type: 'text',
        value:
          'Jedes Modehaus hat das Stück, das es definiert. Für Bint Saeed ist die Covent Garden Abaya eine dieser Kreationen.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Die Covent Garden Abaya vereint zeitgenössisches Schneiderhandwerk, Kunst und eines der wertvollsten traditionellen Handwerke der Vereinigten Arabischen Emirate — geschaffen für Frauen, die zeitlose Eleganz durch außergewöhnliches Design schätzen. Vollständig mit weichem Krepe gefüttert, bewegt sich ihre elegante A-Linien-Silhouette mit jedem Schritt anmutig und schafft eine raffinierte Präsenz für Hochzeiten, offizielle Anlässe, elegante Empfänge und Momente, in denen ein bleibender Eindruck zählt.',
      },
    ],
    knottedLineAlTalliParagraph(
      'Erhältlich in Burgund, Tief Schwarz und Marineblau — jedes Detail wurde sorgfältig bedacht. Die Schulterklappen sind mit den charakteristischen goldfarbenen ',
      '-Knöpfen von Bint Saeed veredelt, während die weiten Manschetten die gewebte ',
      '-Verzierung tragen. Als immaterielles Kulturerbe von der UNESCO anerkannt, ist Al Talli eines der wertvollsten traditionellen emiratischen Handwerke. Bei Bint Saeed stellen wir die Verwendung von Al Talli durch zeitgenössisches Design neu vor, damit dieses bemerkenswerte Element des emiratischen Kulturerbes von Frauen weltweit getragen und geschätzt wird.',
      '',
    ),
    [
      {
        type: 'text',
        value:
          'Den Abschluss bildet ein abnehmbarer Statement-Schal mit Al-Talli-Verzierung und der charakteristischen goldfarbenen Emblem-Nadel von Bint Saeed. Natürlich von der Schulter drapiert oder diagonal über den Körper getragen, verwandelt er die Silhouette mit Feierlichkeit, Distinktion und zeitloser Eleganz.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Wie jede Bint-Saeed-Abaya kann die Covent Garden Abaya mit dem charakteristischen versteckten Innenetikett personalisiert werden — für einen Namen, ein Datum oder eine persönliche Botschaft, die Ihnen bei jedem Tragen nahe bleibt.',
      },
    ],
    pairingParagraph(
      'Die Covent Garden Abaya harmoniert wunderbar mit dem ',
      'oder dem ',
      ' und schafft raffinierte Layering-Silhouetten, in denen jedes Detail von innen nach außen durchdacht ist.',
    ),
  ],
  nl: [
    [
      {
        type: 'text',
        value:
          'Elk modehuis heeft het stuk dat het definieert. Voor Bint Saeed is de Covent Garden Abaya een van die creaties.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'De Covent Garden Abaya brengt eigentijdse kleermakerskunst, kunst en een van de meest gekoesterde traditionele ambachten van de Verenigde Arabische Emiraten samen — gecreëerd voor vrouwen die tijdloze elegantie waarderen, uitgedrukt door uitzonderlijk design. Volledig gevoerd met zacht crêpe, beweegt de elegante A-line silhouet sierlijk bij elke stap en creëert een verfijnde aanwezigheid voor bruiloften, officiële gelegenheden, elegante bijeenkomsten en momenten waarop een blijvende indruk telt.',
      },
    ],
    knottedLineAlTalliParagraph(
      'Verkrijgbaar in Bourgondisch, Diep Zwart en Marineblauw — elk detail is zorgvuldig overwogen. De schouderflappen zijn afgewerkt met de kenmerkende gouden ',
      '-knopen van Bint Saeed, terwijl de brede manchetten de geweven ',
      '-afwerking dragen. Erkend door UNESCO als immaterieel cultureel erfgoed is Al Talli een van de meest gekoesterde traditionele Emirati ambachten. Bij Bint Saeed herontwerpen we het gebruik van Al Talli door eigentijds design, zodat dit opmerkelijke element van Emirati cultureel erfgoed door vrouwen over de hele wereld gedragen en gewaardeerd wordt.',
      '',
    ),
    [
      {
        type: 'text',
        value:
          'Het ontwerp wordt voltooid met een afneembare statement-sjaal, afgewerkt met Al Talli-trim en de kenmerkende gouden embleemspeld van Bint Saeed. Gedragen natuurlijk vanaf de schouder of diagonaal over het lichaam, transformeert zij de silhouet met ceremonie, onderscheid en tijdloze elegantie.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Zoals elke Bint Saeed abaya kan de Covent Garden Abaya gepersonaliseerd worden met het kenmerkende verborgen binnenlabel, waar u een naam, datum of persoonlijke boodschap kunt toevoegen die dicht bij u blijft bij elk dragen.',
      },
    ],
    pairingParagraph(
      'De Covent Garden Abaya combineert prachtig met de ',
      'of de ',
      ', en creëert verfijnde gelaagde silhouetten waarin elk detail van binnen naar buiten is doordacht.',
    ),
  ],
  pt: [
    [
      {
        type: 'text',
        value:
          'Toda casa de moda tem a peça que a define. Para a Bint Saeed, a abaya Covent Garden é uma dessas criações.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Reunindo alfaiataria contemporânea, arte e um dos ofícios tradicionais mais preciosos dos Emirados Árabes Unidos, a abaya Covent Garden foi criada para mulheres que apreciam elegância intemporal expressa através de design excecional. Totalmente forrada com crepe macio, a sua elegante silhueta A-line move-se com graça a cada passo, criando uma presença refinada para casamentos, ocasiões oficiais, encontros elegantes e momentos em que importa deixar uma impressão duradoura.',
      },
    ],
    knottedLineAlTalliParagraph(
      'Disponível em Borgonha, Preto Profundo e Azul-Marinho — cada detalhe foi cuidadosamente considerado. As almofadas de ombro são acabadas com os botões dourados signature ',
      ' da Bint Saeed, enquanto as punhos largas apresentam o acabamento ',
      ' tecido. Reconhecido pela UNESCO como Património Cultural Imaterial, o Al Talli é um dos ofícios artesanais tradicionais emiratis mais preciosos. Na Bint Saeed, reimaginamos o uso do Al Talli através de design contemporâneo, para que este notável elemento do património cultural emirati seja usado e apreciado por mulheres em todo o mundo.',
      '',
    ),
    [
      {
        type: 'text',
        value:
          'Completando o design, uma echarpe statement destacável acabada com acabamento Al Talli e o alfinete Monogram dourado signature da Bint Saeed. Usada drapeada naturalmente do ombro ou em diagonal pelo corpo, transforma a silhueta com cerimónia, distinção e elegância intemporal.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Como cada abaya Bint Saeed, a abaya Covent Garden pode ser personalizada com a etiqueta interior oculta signature da casa, permitindo adicionar um nome, data ou mensagem pessoal que permanece próxima sempre que a usa.',
      },
    ],
    pairingParagraph(
      'A abaya Covent Garden combina lindamente com o ',
      'ou o ',
      ', criando silhuetas em camadas refinadas onde cada detalhe foi pensado de dentro para fora.',
    ),
  ],
  id: [
    [
      {
        type: 'text',
        value:
          'Setiap rumah mode memiliki potongan yang mendefinisikannya. Bagi Bint Saeed, abaya Covent Garden adalah salah satu kreasi tersebut.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Menggabungkan tailoring kontemporer, seni, dan salah satu kerajinan tradisional paling berharga di Uni Emirat Arab, abaya Covent Garden diciptakan untuk wanita yang menghargai elegansi abadi yang diungkapkan melalui desain luar biasa. Sepenuhnya berlapis krepe lembut, siluet A-line elegannya bergerak indah di setiap langkah, menciptakan kehadiran halus untuk pernikahan, acara resmi, pertemuan elegan, dan momen ketika kesan abadi penting.',
      },
    ],
    knottedLineAlTalliParagraph(
      'Tersedia dalam Burgundy, Deep Black, dan Navy Blue — setiap detail dipertimbangkan dengan saksama. Bahu epaulet dihiasi kancing emas signature ',
      ' Bint Saeed, sementara manset lebar menampilkan trim ',
      ' tenun. Diakui UNESCO sebagai Warisan Budaya Takbenda, Al Talli adalah salah satu kerajinan tradisional Emirati paling berharga. Di Bint Saeed, kami membayangkan kembali penggunaan Al Talli melalui desain kontemporer, agar elemen warisan budaya Emirati yang luar biasa ini dikenakan dan dihargai wanita di seluruh dunia.',
      '',
    ),
    [
      {
        type: 'text',
        value:
          'Melengkapi desain, selempang statement yang dapat dilepas dihiasi trim Al Talli dan pin Monogram emas signature Bint Saeed. Dikenakan terurai alami dari bahu atau secara diagonal di tubuh, ia mengubah siluet dengan upacara, keistimewaan, dan elegansi abadi.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Seperti setiap abaya Bint Saeed, abaya Covent Garden dapat dipersonalisasi dengan label dalam tersembunyi signature rumah, memungkinkan Anda menambahkan nama, tanggal, atau pesan bermakna yang tetap dekat setiap kali dikenakan.',
      },
    ],
    pairingParagraph(
      'Abaya Covent Garden berpasangan indah dengan ',
      'atau ',
      ', menciptakan siluet berlapis halus di mana setiap detail dipertimbangkan dari dalam ke luar.',
    ),
  ],
  ms: [
    [
      {
        type: 'text',
        value:
          'Setiap rumah fesyen mempunyai kepingan yang mentakrifkannya. Bagi Bint Saeed, abaya Covent Garden ialah salah satu ciptaan tersebut.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Menggabungkan jahitan kontemporari, seni, dan salah satu kraf tradisional paling berharga di Emiriah Arab Bersatu, abaya Covent Garden dicipta untuk wanita yang menghargai keanggunan abadi yang diungkapkan melalui reka bentuk luar biasa. Berlapis krepe lembut sepenuhnya, siluet A-line elegannya bergerak dengan anggun pada setiap langkah, mencipta kehadiran halus untuk perkahwinan, majlis rasmi, perhimpunan elegan, dan detik ketika kesan kekal penting.',
      },
    ],
    knottedLineAlTalliParagraph(
      'Tersedia dalam Burgundy, Deep Black, dan Navy Blue — setiap butiran dipertimbangkan dengan teliti. Bahu epaulet disiapkan dengan butang emas signature ',
      ' Bint Saeed, manakala manset lebar menampilkan hiasan ',
      ' tenunan. Diiktiraf UNESCO sebagai Warisan Budaya Tidak Ketara, Al Talli ialah salah satu kraf tradisional Emirati paling berharga. Di Bint Saeed, kami membayangkan semula penggunaan Al Talli melalui reka bentuk kontemporari, agar elemen warisan budaya Emirati yang luar biasa ini dipakai dan dihargai wanita di seluruh dunia.',
      '',
    ),
    [
      {
        type: 'text',
        value:
          'Melengkapi reka bentuk, selendang statement boleh tanggal disiapkan dengan hiasan Al Talli dan pin lambang emas signature Bint Saeed. Dipakai terurai secara semula jadi dari bahu atau secara pepenjuru merentasi badan, ia mengubah siluet dengan upacara, keistimewaan, dan keanggunan abadi.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Seperti setiap abaya Bint Saeed, abaya Covent Garden boleh diperibadikan dengan label dalaman tersembunyi signature rumah, membolehkan anda menambah nama, tarikh, atau mesej bermakna yang kekal dekat setiap kali dipakai.',
      },
    ],
    pairingParagraph(
      'Abaya Covent Garden dipadankan dengan indah bersama ',
      'atau ',
      ', mencipta siluet berlapis halus di mana setiap butiran dipertimbangkan dari dalam ke luar.',
    ),
  ],
}

const SILHOUETTE_ITEMS: Record<AppLocale, readonly string[]> = {
  en: [
    'Elegant A-line abaya',
    'Open-front design with optional concealed snap-button closure available upon request',
    'Detachable statement sash finished with Bint Saeed signature gold-tone Monogram pin for multiple styling options',
    'Shoulder epaulettes with signature button detailing',
    'Wide cuffs with heritage woven trim',
    'Fully lined with a soft crepe lining for exceptional comfort and a refined finish',
    'Hidden side seam pockets',
    'Complimentary personalisation available on Bint Saeed’s signature hidden inner label',
  ],
  ar: [
    'عباية معاصرة بقصة A-line وانسيابية أنيقة',
    'تصميم مفتوح من الأمام مع إمكانية إغلاق مخفي بأزرار عند الطلب',
    'وشاح قابل للفصل مع دبوس الشعار الذهبي المميز لـ Bint Saeed',
    'كتفان بتفاصيل أزرار مميزة',
    'أساور واسعة بتفاصيل نسيج تراثية',
    'مبطّنة بالكامل ببطانة كريب ناعمة',
    'جيوب جانبية مخفية',
    'تخصيص مجاني على الملصق الداخلي المخفي المميز للدار',
  ],
  fr: [
    'Abaya A-line élégante',
    'Design ouvert à l’avant avec fermeture pressionnée dissimulée en option sur demande',
    'Écharpe statement amovible finie avec l’épingle emblème dorée signature de Bint Saeed',
    'Épaulettes avec boutons signature',
    'Poignets larges avec bordure tissée patrimoniale',
    'Entièrement doublée d’un crêpe doux pour un confort exceptionnel',
    'Poches latérales dissimulées',
    'Personnalisation offerte sur l’étiquette intérieure cachée signature',
  ],
  it: [
    'Abaya A-line elegante',
    'Design aperto sul davanti con chiusura a pressione nascosta opzionale su richiesta',
    'Fascia statement removibile con spilla Monogram dorata signature di Bint Saeed',
    'Spalline con bottoni signature',
    'Polsini ampi con bordo tessuto patrimoniale',
    'Completamente foderata in crepe morbido per comfort eccezionale',
    'Tasche laterali nascoste',
    'Personalizzazione omaggio sull’etichetta interna nascosta signature',
  ],
  es: [
    'Abaya A-line elegante',
    'Diseño abierto frontal con cierre a presión oculto opcional bajo pedido',
    'Faja statement desmontable con pin Monogram dorado signature de Bint Saeed',
    'Hombreras con botones signature',
    'Puños amplios con ribete tejido patrimonial',
    'Completamente forrada con crepé suave para confort excepcional',
    'Bolsillos laterales ocultos',
    'Personalización gratuita en la etiqueta interior oculta signature',
  ],
  ru: [
    'Изящная абайя A-line',
    'Открытый перед с опциональной скрытой застёжкой на кнопки по запросу',
    'Съёмная statement-палантин с фирменной золотистой эмблемой Bint Saeed',
    'Погоны с фирменными пуговицами',
    'Широкие манжеты с традиционным тканым бордюром',
    'Полная подкладка из мягкого крепа для исключительного комфорта',
    'Скрытые боковые карманы',
    'Бесплатная персонализация на скрытой внутренней этикетке',
  ],
  zh: [
    '优雅 A 字长袍',
    '前开襟设计，可按需选配隐藏按扣闭合',
    '可拆卸 statement 披肩，饰 Bint Saeed 标志性金色徽章胸针',
    '肩章配标志性纽扣细节',
    '宽袖口配传承编织镶边',
    '全里衬柔软绉绸，舒适精致',
    '隐藏侧缝口袋',
    '标志性隐藏内标可免费个性化',
  ],
  de: [
    'Elegante A-Linien-Abaya',
    'Offenes Frontdesign mit optionaler verdeckter Druckknopf-Schließung auf Anfrage',
    'Abnehmbarer Statement-Schal mit charakteristischer goldfarbener Emblem-Nadel von Bint Saeed',
    'Schulterklappen mit charakteristischen Knöpfen',
    'Weite Manschetten mit traditioneller Webverzierung',
    'Vollständig mit weichem Krepe gefüttert für außergewöhnlichen Komfort',
    'Versteckte Seitentaschen',
    'Kostenlose Personalisierung auf dem charakteristischen versteckten Innenetikett',
  ],
  nl: [
    'Elegante A-line abaya',
    'Open voorkant met optionele verborgen drukknoopsluiting op aanvraag',
    'Afneembare statement-sjaal met kenmerkende gouden embleemspeld van Bint Saeed',
    'Schouderflappen met kenmerkende knopen',
    'Brede manchetten met erfgoed geweven afwerking',
    'Volledig gevoerd met zacht crêpe voor uitzonderlijk comfort',
    'Verborgen zijzakken',
    'Gratis personalisatie op het kenmerkende verborgen binnenlabel',
  ],
  pt: [
    'Abaya A-line elegante',
    'Design aberto à frente com fecho de mola oculto opcional sob pedido',
    'Echarpe statement destacável com alfinete Monogram dourado signature da Bint Saeed',
    'Almofadas de ombro com botões signature',
    'Punhos largos com acabamento tecido patrimonial',
    'Totalmente forrada com crepe macio para conforto excecional',
    'Bolsos laterais ocultos',
    'Personalização gratuita na etiqueta interior oculta signature',
  ],
  id: [
    'Abaya A-line elegan',
    'Desain depan terbuka dengan penutup kancing tersembunyi opsional atas permintaan',
    'Selempang statement dapat dilepas dengan pin Monogram emas signature Bint Saeed',
    'Epaulet bahu dengan detail kancing signature',
    'Manset lebar dengan trim tenun warisan',
    'Berlapis krepe lembut sepenuhnya untuk kenyamanan luar biasa',
    'Saku samping tersembunyi',
    'Personalisasi gratis pada label dalam tersembunyi signature',
  ],
  ms: [
    'Abaya A-line elegan',
    'Reka bentuk hadapan terbuka dengan penutup butang tersembunyi pilihan atas permintaan',
    'Selendang statement boleh tanggal dengan pin lambang emas signature Bint Saeed',
    'Epaulet bahu dengan butiran butang signature',
    'Manset lebar dengan hiasan tenunan warisan',
    'Berlapis krepe lembut sepenuhnya untuk keselesaan luar biasa',
    'Poket sisi tersembunyi',
    'Pemperibadian percuma pada label dalaman tersembunyi signature',
  ],
}

const COMPOSITION_OUTER: Record<AppLocale, string> = {
  en: 'Outer: 80% Polyester, 20% Viscose',
  ar: 'الخارجي: 80% بوليستر، 20% فيسكوز',
  fr: 'Extérieur : 80 % polyester, 20 % viscose',
  it: 'Esterno: 80% poliestere, 20% viscosa',
  es: 'Exterior: 80% poliéster, 20% viscosa',
  ru: 'Верх: 80% полиэстер, 20% вискоза',
  zh: '面料：80% 聚酯纤维，20% 粘胶纤维',
  de: 'Außenmaterial: 80 % Polyester, 20 % Viskose',
  nl: 'Buitenstof: 80% polyester, 20% viscose',
  pt: 'Exterior: 80% poliéster, 20% viscose',
  id: 'Luar: 80% Polyester, 20% Viscose',
  ms: 'Luaran: 80% Polyester, 20% Viscose',
}

const COMPOSITION_LINING: Record<AppLocale, string> = {
  en: 'Lining: 70% Polyester, 30% Viscose',
  ar: 'البطانة: 70% بوليستر، 30% فيسكوز',
  fr: 'Doublure : 70 % polyester, 30 % viscose',
  it: 'Fodera: 70% poliestere, 30% viscosa',
  es: 'Forro: 70% poliéster, 30% viscosa',
  ru: 'Подкладка: 70% полиэстер, 30% вискоза',
  zh: '里料：70% 聚酯纤维，30% 粘胶纤维',
  de: 'Futter: 70 % Polyester, 30 % Viskose',
  nl: 'Voering: 70% polyester, 30% viscose',
  pt: 'Forro: 70% poliéster, 30% viscose',
  id: 'Lapisan: 70% Polyester, 30% Viscose',
  ms: 'Lapisan: 70% Polyester, 30% Viscose',
}

const CARE: Record<AppLocale, string> = {
  en: 'Professional dry clean recommended. Gentle machine wash at 30°C if needed.',
  ar: 'يُنصح بالتنظيف الجاف الاحترافي. غسل لطيف عند 30°م عند الحاجة.',
  fr: 'Nettoyage à sec professionnel recommandé. Lavage en machine délicat à 30 °C si nécessaire.',
  it: 'Lavaggio a secco professionale consigliato. Lavaggio in lavatrice delicato a 30 °C se necessario.',
  es: 'Se recomienda limpieza en seco profesional. Lavado a máquina suave a 30 °C si es necesario.',
  ru: 'Рекомендуется профессиональная химчистка. При необходимости — деликатная машинная стирка при 30 °C.',
  zh: '建议专业干洗。如需机洗，请使用 30°C 轻柔模式。',
  de: 'Professionelle Reinigung empfohlen. Bei Bedarf Schonwaschgang bei 30 °C.',
  nl: 'Professionele stomerij aanbevolen. Indien nodig zachte machinewas op 30 °C.',
  pt: 'Limpeza a seco profissional recomendada. Lavagem na máquina suave a 30 °C se necessário.',
  id: 'Dry clean profesional disarankan. Cuci mesin lembut pada 30°C jika diperlukan.',
  ms: 'Dry clean profesional disyorkan. Basuhan mesin lembut pada 30°C jika perlu.',
}

const FIT_AND_SIZE: Record<AppLocale, readonly string[]> = {
  en: [
    'Elegant A-line abaya',
    'Length: 138 cm / 54.5 inches',
    'Model height: 155 cm / 61 inches',
    'Model wears size XS',
    'Custom length available upon request',
  ],
  ar: [
    'قصة A-line أنيقة',
    'الطول: 138 سم / 54.5 بوصة',
    'طول العارضة: 155 سم / 61 بوصة',
    'العارضة ترتدي مقاس XS',
    'طول مخصص متاح عند الطلب',
  ],
  fr: [
    'Abaya A-line élégante',
    'Longueur : 138 cm / 54,5 pouces',
    'Taille du mannequin : 155 cm / 61 pouces',
    'Le mannequin porte la taille XS',
    'Longueur sur mesure disponible sur demande',
  ],
  it: [
    'Abaya A-line elegante',
    'Lunghezza: 138 cm / 54,5 pollici',
    'Altezza modella: 155 cm / 61 pollici',
    'La modella indossa taglia XS',
    'Lunghezza personalizzata disponibile su richiesta',
  ],
  es: [
    'Abaya A-line elegante',
    'Largo: 138 cm / 54,5 pulgadas',
    'Altura de la modelo: 155 cm / 61 pulgadas',
    'La modelo lleva talla XS',
    'Largo personalizado disponible bajo pedido',
  ],
  ru: [
    'Изящная абайя A-line',
    'Длина: 138 см / 54,5 дюйма',
    'Рост модели: 155 см / 61 дюйм',
    'На модели размер XS',
    'Индивидуальная длина по запросу',
  ],
  zh: [
    '优雅 A 字长袍',
    '长度：138 厘米 / 54.5 英寸',
    '模特身高：155 厘米 / 61 英寸',
    '模特穿着 XS 码',
    '可按需定制长度',
  ],
  de: [
    'Elegante A-Linien-Abaya',
    'Länge: 138 cm / 54,5 Zoll',
    'Modellgröße: 155 cm / 61 Zoll',
    'Das Model trägt Größe XS',
    'Individuelle Länge auf Anfrage',
  ],
  nl: [
    'Elegante A-line abaya',
    'Lengte: 138 cm / 54,5 inch',
    'Model lengte: 155 cm / 61 inch',
    'Model draagt maat XS',
    'Aangepaste lengte op aanvraag',
  ],
  pt: [
    'Abaya A-line elegante',
    'Comprimento: 138 cm / 54,5 polegadas',
    'Altura da modelo: 155 cm / 61 polegadas',
    'A modelo usa tamanho XS',
    'Comprimento personalizado disponível sob pedido',
  ],
  id: [
    'Abaya A-line elegan',
    'Panjang: 138 cm / 54,5 inci',
    'Tinggi model: 155 cm / 61 inci',
    'Model memakai ukuran XS',
    'Panjang kustom tersedia atas permintaan',
  ],
  ms: [
    'Abaya A-line elegan',
    'Panjang: 138 cm / 54.5 inci',
    'Tinggi model: 155 cm / 61 inci',
    'Model memakai saiz XS',
    'Panjang khas tersedia atas permintaan',
  ],
}

const ORIGIN: Record<AppLocale, string> = {
  en: 'Made in Abu Dhabi, United Arab Emirates',
  ar: 'صُنع في أبوظبي، الإمارات العربية المتحدة',
  fr: 'Fabriqué à Abou Dabi, Émirats arabes unis',
  it: 'Realizzato ad Abu Dhabi, Emirati Arabi Uniti',
  es: 'Hecho en Abu Dabi, Emiratos Árabes Unidos',
  ru: 'Сделано в Абу-Даби, ОАЭ',
  zh: '阿联酋阿布扎比制造',
  de: 'Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate',
  nl: 'Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten',
  pt: 'Feito em Abu Dhabi, Emirados Árabes Unidos',
  id: 'Dibuat di Abu Dhabi, Uni Emirat Arab',
  ms: 'Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu',
}

function colourItems(locale: AppLocale): string[] {
  return COLOURS.map((c) => localizedColorName(c, locale))
}

export function buildCoventGardenAbayaDetailGroups(locale: AppLocale): PdpDetailGroup[] {
  return [
    {
      title: PDP_SILHOUETTE_TITLE[locale],
      items: [...SILHOUETTE_ITEMS[locale]],
    },
    getHouseCodesDetailGroup('knotted-line-al-talli', locale),
    {
      title: PDP_COLOUR_TITLE[locale],
      items: colourItems(locale),
    },
  ]
}

export function buildCoventGardenAbayaPdpContent(locale: AppLocale): ProductPdpContent {
  const introParagraphParts = INTRO_BY_LOCALE[locale]
  return {
    introParagraphParts,
    introParagraphs: pdpIntroParagraphsToPlainText(introParagraphParts),
    productDetails: [],
    productDetailGroups: buildCoventGardenAbayaDetailGroups(locale),
    compositionDetails: [COMPOSITION_OUTER[locale], COMPOSITION_LINING[locale]],
    careDetails: [CARE[locale]],
    fitAndSizeDetails: [...FIT_AND_SIZE[locale]],
    originDetails: [ORIGIN[locale]],
    faq: getCoventGardenAbayaPdpFaq(locale),
  }
}
