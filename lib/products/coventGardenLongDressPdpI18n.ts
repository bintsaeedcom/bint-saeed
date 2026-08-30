import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductPdpContent } from '@/data/productPdpContent'
import { COVENT_GARDEN_LONG_DRESS_INTRO_EN } from '@/data/coventGardenLongDressPdpIntro'
import type { PdpIntroParagraph } from '@/lib/products/pdpIntroRich'
import { pdpIntroParagraphsToPlainText } from '@/lib/products/pdpIntroRich'
import { getCoventGardenLongDressFaq } from '@/lib/products/coventGardenLongDressFaqI18n'

export const COVENT_GARDEN_LONG_DRESS_SLUG = 'covent-garden-long-dress'

function pairingParagraph(before: string, andWord: string, after: string): PdpIntroParagraph {
  return [
    { type: 'text', value: before },
    { type: 'codeLink', label: 'Covent Garden Abaya', href: '/shop/covent-garden-abaya', bold: true },
    { type: 'text', value: `, ` },
    { type: 'codeLink', label: 'Kensington Abaya', href: '/shop/kensington-abaya', bold: true },
    { type: 'text', value: ` ${andWord} ` },
    { type: 'codeLink', label: 'Marylebone Abaya', href: '/shop/marylebone-abaya', bold: true },
    { type: 'text', value: after },
  ]
}

const INTRO_BY_LOCALE: Record<AppLocale, PdpIntroParagraph[]> = {
  en: COVENT_GARDEN_LONG_DRESS_INTRO_EN,
  ar: [
    [
      {
        type: 'text',
        value: 'بعض الفساتين تُشترى لمناسبة محددة. الأفضل منها يصبح جزءاً من لحظات لا تُحصى في حياتك.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'صُمم فستان Covent Garden Dress للنساء اللواتي يقدّرن القصص الخالدة التي تنتقل بسلاسة بين العمل والغداء الأنيق وشاي بعد الظهر والعشاء وافتتاحات المعارض والفعاليات الثقافية. معاصر وراقٍ، يقدّم قصة متوازنة بأناقة دون مبالغة.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'يتوفر بالألوان العنابي والأسود العميق والأزرق الكحلي، ويتميز بقصة ناعمة ورقبة دائرية نظيفة وجيوب جانبية مخفية. مبطّن ببطانة كريب ناعمة لراحة استثنائية، يمنح حركة رشيقة مع إمكانية تعديل الطول عند الطلب.',
      },
    ],
    pairingParagraph(
      'جميل بمفرده، يُعد أيضاً من فساتين Bint Saeed المميزة تحت العباءة. صُنع للنساء اللواتي يدركن أن الأناقة الحقيقية تُعرَّف بالقصة والملاءمة والنسبة لا بالزخرفة الزائدة، ويتناغم بجمال مع ',
      'و',
      '، لتكوين إطلالة راقية حيث وُضعت كل طبقة بعناية — لأن الأناقة الحقيقية تبدأ قبل الطبقة الخارجية.',
    ),
  ],
  fr: [
    [
      {
        type: 'text',
        value:
          'Certaines robes s’achètent pour une occasion précise. Les meilleures deviennent partie de d’innombrables moments de votre vie.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'La robe Covent Garden a été créée pour les femmes qui apprécient des silhouettes intemporelles passant sans effort du travail aux déjeuners élégants, au thé de l’après-midi, aux dîners, vernissages et événements culturels. Contemporaine et raffinée, elle offre une silhouette magnifiquement équilibrée, soignée sans jamais paraître trop habillée.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Disponible en Bourgogne, Noir profond et Bleu marine, la robe présente une silhouette doucement ajustée, un col rond épuré et des poches latérales dissimulées. Entièrement doublée d’un crêpe doux pour un confort exceptionnel, elle offre un mouvement gracieux et permet d’ajuster la longueur sur demande.',
      },
    ],
    pairingParagraph(
      'Belle seule, la robe Covent Garden fait aussi partie des robes signature sous abaya de Bint Saeed. Créée pour les femmes qui comprennent que la vraie élégance se définit par la coupe, l’ajustement et les proportions plutôt que par des embellissements superflus, elle s’associe magnifiquement à l’',
      'et l’',
      ', créant une silhouette raffinée où chaque couche a été pensée avec soin — car la vraie élégance commence bien avant la couche extérieure.',
    ),
  ],
  it: [
    [
      {
        type: 'text',
        value:
          'Alcuni abiti si acquistano per un’occasione specifica. I migliori diventano parte di innumerevoli momenti della vita.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Il Covent Garden Dress è stato creato per donne che apprezzano silhouette senza tempo che passano senza sforzo dal lavoro ai pranzi eleganti, al tè pomeridiano, alle cene, inaugurazioni e eventi culturali. Contemporaneo e raffinato, offre una silhouette splendidamente equilibrata, curata senza mai sembrare eccessiva.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Disponibile in Borgogna, Nero profondo e Blu navy, presenta una silhouette morbidamente aderente, scollo rotondo pulito e tasche laterali nascoste. Completamente foderato in crepe morbido per comfort eccezionale, offre movimento aggraziato e permette di regolare la lunghezza su richiesta.',
      },
    ],
    pairingParagraph(
      'Bellissimo da solo, il Covent Garden Dress fa anche parte degli abiti signature sotto abaya di Bint Saeed. Creato per donne che capiscono che la vera eleganza si definisce con taglio, vestibilità e proporzioni piuttosto che con ornamenti superflui, si abbina magnificamente all’',
      'e all’',
      ', creando una silhouette raffinata in cui ogni strato è stato pensato con cura — perché la vera eleganza inizia molto prima dello strato esterno.',
    ),
  ],
  es: [
    [
      {
        type: 'text',
        value:
          'Algunos vestidos se compran para una ocasión específica. Los mejores se convierten en parte de innumerables momentos a lo largo de la vida.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'El Covent Garden Dress fue creado para mujeres que aprecian siluetas atemporales que transitan sin esfuerzo entre el trabajo, almuerzos elegantes, té de la tarde, cenas, inauguraciones y eventos culturales. Contemporáneo y refinado, ofrece una silueta bellamente equilibrada, pulida sin parecer nunca demasiado vestida.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Disponible en Burdeos, Negro profundo y Azul marino, presenta una silueta suavemente ajustada, escote redondo limpio y bolsillos laterales ocultos. Completamente forrado con crepé suave para confort excepcional, ofrece movimiento gracioso y permite ajustar la longitud bajo pedido.',
      },
    ],
    pairingParagraph(
      'Hermoso por sí solo, el Covent Garden Dress también forma parte de los vestidos signature bajo abaya de Bint Saeed. Creado para mujeres que entienden que la verdadera elegancia se define por el corte, el ajuste y las proporciones más que por adornos innecesarios, combina maravillosamente con la ',
      'y la ',
      ', creando una silueta refinada donde cada capa ha sido considerada con cuidado — porque la verdadera elegancia comienza mucho antes de la capa exterior.',
    ),
  ],
  ru: [
    [
      {
        type: 'text',
        value:
          'Некоторые платья покупают для конкретного случая. Лучшие становятся частью бесчисленных моментов жизни.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Платье Covent Garden создано для женщин, ценящих вневременные силуэты, которые легко переходят от работы к изысканным обедам, послеобеденному чаю, ужинам, открытиям галерей и культурным событиям. Современное и утончённое, оно предлагает прекрасно сбалансированный силуэт — собранный, но никогда чрезмерный.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Доступно в цветах Burgundy, Deep Black и Navy Blue, с мягко приталенным силуэтом, чистым круглым вырезом и скрытыми боковыми карманами. Полностью на подкладке из мягкого крепа для исключительного комфорта, обеспечивает грациозное движение и позволяет скорректировать длину по запросу.',
      },
    ],
    pairingParagraph(
      'Прекрасное само по себе, платье Covent Garden также входит в signature under-abaya платья Bint Saeed. Создано для женщин, понимающих, что истинная элегантность определяется кроем, посадкой и пропорциями, а не лишним украшением. Оно прекрасно сочетается с ',
      'и ',
      ', создавая утончённый силуэт, где каждый слой продуман с заботой — ведь истинная элегантность начинается задолго до внешнего слоя.',
    ),
  ],
  zh: [
    [
      {
        type: 'text',
        value: '有些连衣裙为特定场合而买。最好的那些，会成为生命中无数时刻的一部分。',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Covent Garden Dress 为欣赏永恒廓形的女性而创作——从容穿梭于工作、雅宴午餐、下午茶、晚宴、画廊开幕与文化场合。当代而精致，呈现平衡得体的廓形，利落而不显过度隆重。',
      },
    ],
    [
      {
        type: 'text',
        value:
          '提供酒红、深黑与海军蓝三色，以柔和修身廓形、干净圆领与隐藏侧缝口袋为特点。全里衬柔软绉绸，舒适出众，步履轻盈，并可按需调整长度。',
      },
    ],
    pairingParagraph(
      '单穿已足够动人，Covent Garden Dress 亦是 BINT SAEED 承悦 标志性内穿阿巴亚连衣裙之一。为深知真正优雅源于剪裁、合身与比例而非多余装饰的女性而设计，与 ',
      '及 ',
      ' 搭配相得益彰，打造每一层皆经深思的精致造型——因为真正的优雅，始于外层之前。',
    ),
  ],
  de: [
    [
      {
        type: 'text',
        value:
          'Manche Kleider werden für einen bestimmten Anlass gekauft. Die besten werden Teil unzähliger Momente im Leben.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Das Covent Garden Dress wurde für Frauen geschaffen, die zeitlose Silhouetten schätzen, die mühelos zwischen Arbeit, eleganten Mittagessen, Nachmittagstee, Abendessen, Galerieeröffnungen und Kulturveranstaltungen wechseln. Zeitgenössisch und raffiniert bietet es eine wunderbar ausgewogene Silhouette — gepflegt, ohne jemals overdressed zu wirken.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Erhältlich in Burgund, Tief Schwarz und Marineblau, mit sanft taillierter Silhouette, cleanem Rundhalsausschnitt und versteckten Seitentaschen. Vollständig mit weichem Krepe gefüttert für außergewöhnlichen Komfort, bewegt es sich anmutig und erlaubt eine Längenanpassung auf Anfrage.',
      },
    ],
    pairingParagraph(
      'Schön für sich allein ist das Covent Garden Dress auch eines der charakteristischen Under-Abaya-Kleider von Bint Saeed. Für Frauen, die verstehen, dass wahre Eleganz durch Schnitt, Passform und Proportion definiert wird — nicht durch überflüssige Verzierung. Es harmoniert wunderbar mit der ',
      'und der ',
      ', und schafft eine raffinierte Silhouette, in der jede Schicht durchdacht ist — denn wahre Eleganz beginnt lange vor der äußeren Schicht.',
    ),
  ],
  nl: [
    [
      {
        type: 'text',
        value:
          'Sommige jurken worden gekocht voor een specifieke gelegenheid. De beste worden onderdeel van ontelbare momenten in uw leven.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'De Covent Garden Dress is gecreëerd voor vrouwen die tijdloze silhouetten waarderen die moeiteloos bewegen tussen werk, elegante lunches, afternoon tea, diners, galerieopeningen en culturele evenementen. Eigentijds en verfijnd biedt zij een prachtig gebalanceerd silhouet — gepolijst zonder ooit overdressed te lijken.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Verkrijgbaar in Bourgondisch, Diep Zwart en Marineblauw, met een zacht getailleerd silhouet, schone ronde halslijn en verborgen zijzakken. Volledig gevoerd met zacht crêpe voor uitzonderlijk comfort, biedt zij sierlijke beweging en kan de lengte op aanvraag worden aangepast.',
      },
    ],
    pairingParagraph(
      'Prachtig op zichzelf is de Covent Garden Dress ook een van de signature under-abaya jurken van Bint Saeed. Gecreëerd voor vrouwen die begrijpen dat ware elegantie wordt gedefinieerd door uitzonderlijke snit, pasvorm en verhoudingen — niet door overbodige versiering. Zij combineert prachtig met de ',
      'en de ',
      ', en creëert een verfijnd silhouet waarin elke laag zorgvuldig is overwogen — want ware elegantie begint lang vóór de buitenste laag.',
    ),
  ],
  pt: [
    [
      {
        type: 'text',
        value:
          'Alguns vestidos são comprados para uma ocasião específica. Os melhores tornam-se parte de inúmeros momentos ao longo da vida.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'O Covent Garden Dress foi criado para mulheres que apreciam silhuetas intemporais que transitam sem esforço entre trabalho, almoços elegantes, chá da tarde, jantares, inaugurações e eventos culturais. Contemporâneo e refinado, oferece uma silhueta lindamente equilibrada — polida sem nunca parecer excessivamente formal.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Disponível em Borgonha, Preto Profundo e Azul-Marinho, apresenta silhueta suavemente ajustada, decote redondo limpo e bolsos laterais ocultos. Totalmente forrado com crepe macio para conforto excecional, oferece movimento gracioso e permite ajustar o comprimento sob pedido.',
      },
    ],
    pairingParagraph(
      'Belo por si só, o Covent Garden Dress também faz parte dos vestidos signature sob abaya da Bint Saeed. Criado para mulheres que compreendem que a verdadeira elegância se define pelo corte, ajuste e proporções — não por adornos desnecessários. Combina lindamente com a ',
      'e a ',
      ', criando uma silhueta refinada onde cada camada foi pensada com cuidado — porque a verdadeira elegância começa muito antes da camada exterior.',
    ),
  ],
  id: [
    [
      {
        type: 'text',
        value:
          'Beberapa gaun dibeli untuk satu kesempatan. Yang terbaik menjadi bagian dari tak terhitung momen sepanjang hidup.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Covent Garden Dress diciptakan untuk wanita yang menghargai siluet abadi yang berpindah dengan mudah antara kerja, makan siang elegan, afternoon tea, makan malam, pembukaan galeri, dan acara budaya. Kontemporer namun halus, menawarkan siluet yang seimbang indah — rapi tanpa pernah terasa berlebihan.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Tersedia dalam Burgundy, Deep Black, dan Navy Blue, dengan siluet fitted lembut, leher bulat bersih, dan saku samping tersembunyi. Berlapis krepe lembut sepenuhnya untuk kenyamanan luar biasa, menawarkan gerakan anggun dan memungkinkan penyesuaian panjang atas permintaan.',
      },
    ],
    pairingParagraph(
      'Indah sendiri, Covent Garden Dress juga termasuk gaun signature under-abaya Bint Saeed. Diciptakan untuk wanita yang memahami bahwa elegansi sejati ditentukan oleh potongan, fit, dan proporsi — bukan hiasan berlebihan. Berpasangan indah dengan ',
      'dan ',
      ', menciptakan siluet halus di mana setiap lapisan dipertimbangkan dengan saksama — karena elegansi sejati dimulai jauh sebelum lapisan luar.',
    ),
  ],
  ms: [
    [
      {
        type: 'text',
        value:
          'Sesetengah gaun dibeli untuk satu majlis tertentu. Yang terbaik menjadi sebahagian daripada detik-detik yang tidak terkira dalam hidup.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Covent Garden Dress dicipta untuk wanita yang menghargai siluet abadi yang bergerak dengan mudah antara kerja, makan tengah hari elegan, teh petang, makan malam, pembukaan galeri, dan acara budaya. Kontemporari namun halus, menawarkan siluet yang seimbang dengan indah — kemas tanpa kelihatan terlalu berpakaian.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Tersedia dalam Burgundy, Deep Black, dan Navy Blue, dengan siluet fitted lembut, leher bulat bersih, dan poket sisi tersembunyi. Berlapis krepe lembut sepenuhnya untuk keselesaan luar biasa, menawarkan pergerakan anggun dan membolehkan penyesuaian panjang atas permintaan.',
      },
    ],
    pairingParagraph(
      'Cantik sendiri, Covent Garden Dress juga merupakan salah satu gaun signature under-abaya Bint Saeed. Dicipta untuk wanita yang memahami bahawa keanggunan sebenar ditentukan oleh potongan, fit, dan perkadaran — bukan hiasan berlebihan. Dipadu dengan indah bersama ',
      'dan ',
      ', mencipta siluet halus di mana setiap lapisan dipertimbangkan dengan teliti — kerana keanggunan sebenar bermula jauh sebelum lapisan luar.',
    ),
  ],
}

const PRODUCT_DETAILS: Record<AppLocale, readonly string[]> = {
  en: [
    'Tailored fitted maxi dress with a refined contemporary silhouette',
    'Clean round neckline',
    'Concealed back zip closure',
    'Two hidden side seam pockets',
    'Fully lined with a soft crepe lining for exceptional comfort and a smooth feel',
    'Dress length can be adjusted upon request',
    'Designed to be worn beautifully on its own or as one of Bint Saeed’s signature under-abaya dresses',
    'Pairs beautifully with the Covent Garden Abaya, Kensington Abaya, and Marylebone Abaya',
    'Colour: Burgundy, Deep Black, or Navy Blue',
  ],
  ar: [
    'فستان بقصة ناعمة ورقبة دائرية نظيفة',
    'جيوب جانبية مخفية',
    'مبطّن ببطانة كريب ناعمة',
    'طول قابل للتعديل عند الطلب',
    'متوفر بالألوان: عنابي، أسود عميق، أزرق كحلي',
  ],
  fr: [
    'Robe maxi ajustée au tailoring raffiné et silhouette contemporaine',
    'Col rond épuré',
    'Fermeture éclair dissimulée au dos',
    'Deux poches latérales cachées',
    'Entièrement doublée d’un crêpe doux pour un confort exceptionnel',
    'Longueur ajustable sur demande',
    'Conçue pour être portée seule ou comme robe signature sous abaya Bint Saeed',
    'S’associe à l’abaya Covent Garden, Kensington et Marylebone',
    'Couleur : Bourgogne, Noir profond ou Bleu marine',
  ],
  it: [
    'Abito maxi fitted con silhouette contemporanea raffinata',
    'Scollo rotondo pulito',
    'Chiusura lampo posteriore nascosta',
    'Due tasche laterali nascoste',
    'Completamente foderato in crepe morbido per comfort eccezionale',
    'Lunghezza regolabile su richiesta',
    'Progettato per essere indossato da solo o come abito signature sotto abaya Bint Saeed',
    'Si abbina all’abaya Covent Garden, Kensington e Marylebone',
    'Colore: Borgogna, Nero profondo o Blu navy',
  ],
  es: [
    'Vestido maxi fitted con silueta contemporánea refinada',
    'Escote redondo limpio',
    'Cierre de cremallera oculto en la espalda',
    'Dos bolsillos laterales ocultos',
    'Completamente forrado con crepé suave para confort excepcional',
    'Largo ajustable bajo pedido',
    'Diseñado para llevarse solo o como vestido signature bajo abaya Bint Saeed',
    'Combina con la abaya Covent Garden, Kensington y Marylebone',
    'Color: Burdeos, Negro profundo o Azul marino',
  ],
  ru: [
    'Приталенное макси-платье с утончённым современным силуэтом',
    'Чистый круглый вырез',
    'Скрытая застёжка-молния сзади',
    'Два скрытых боковых кармана',
    'Полная подкладка из мягкого крепа для исключительного комфорта',
    'Длина регулируется по запросу',
    'Создано для самостоятельного ношения или как signature under-abaya платье Bint Saeed',
    'Сочетается с абайя Covent Garden, Kensington и Marylebone',
    'Цвет: Burgundy, Deep Black или Navy Blue',
  ],
  zh: [
    '修身长款连衣裙，精致当代廓形',
    '干净圆领',
    '背部隐藏拉链',
    '两个隐藏侧缝口袋',
    '全里衬柔软绉绸，舒适顺滑',
    '可按需调整裙长',
    '可单穿，亦可作为 BINT SAEED 承悦 标志性内穿阿巴亚连衣裙',
    '与 Covent Garden Abaya、Kensington Abaya 及 Marylebone Abaya 搭配相得益彰',
    '颜色：酒红、深黑或海军蓝',
  ],
  de: [
    'Tailliertes Maxikleid mit raffinierter zeitgenössischer Silhouette',
    'Sauberer Rundhalsausschnitt',
    'Verdeckter Reißverschluss im Rücken',
    'Zwei versteckte Seitentaschen',
    'Vollständig mit weichem Krepe gefüttert für außergewöhnlichen Komfort',
    'Länge auf Anfrage anpassbar',
    'Für das alleinige Tragen oder als charakteristisches Under-Abaya-Kleid von Bint Saeed',
    'Harmoniert mit Covent Garden Abaya, Kensington Abaya und Marylebone Abaya',
    'Farbe: Burgund, Tief Schwarz oder Marineblau',
  ],
  nl: [
    'Getailleerde maxi-jurk met verfijnd eigentijds silhouet',
    'Schone ronde halslijn',
    'Verborgen ritssluiting achteraan',
    'Twee verborgen zijzakken',
    'Volledig gevoerd met zacht crêpe voor uitzonderlijk comfort',
    'Lengte aanpasbaar op aanvraag',
    'Ontworpen om prachtig solo te dragen of als signature under-abaya jurk van Bint Saeed',
    'Combineert met de Covent Garden Abaya, Kensington Abaya en Marylebone Abaya',
    'Kleur: Bourgondisch, Diep Zwart of Marineblauw',
  ],
  pt: [
    'Vestido maxi fitted com silhueta contemporânea refinada',
    'Decote redondo limpo',
    'Fecho de correr oculto nas costas',
    'Dois bolsos laterais ocultos',
    'Totalmente forrado com crepe macio para conforto excecional',
    'Comprimento ajustável sob pedido',
    'Concebido para usar sozinho ou como vestido signature sob abaya Bint Saeed',
    'Combina com a abaya Covent Garden, Kensington e Marylebone',
    'Cor: Borgonha, Preto Profundo ou Azul-Marinho',
  ],
  id: [
    'Gaun maxi tailored fitted dengan siluet kontemporer halus',
    'Leher bulat bersih',
    'Ritsleting tersembunyi di belakang',
    'Dua saku samping tersembunyi',
    'Berlapis krepe lembut sepenuhnya untuk kenyamanan luar biasa',
    'Panjang gaun dapat disesuaikan atas permintaan',
    'Dirancang untuk dikenakan sendiri atau sebagai gaun signature under-abaya Bint Saeed',
    'Berpasangan dengan abaya Covent Garden, Kensington, dan Marylebone',
    'Warna: Burgundy, Deep Black, atau Navy Blue',
  ],
  ms: [
    'Gaun maxi tailored fitted dengan siluet kontemporari halus',
    'Leher bulat bersih',
    'Zip tersembunyi di belakang',
    'Dua poket sisi tersembunyi',
    'Berlapis krepe lembut sepenuhnya untuk keselesaan luar biasa',
    'Panjang gaun boleh disesuaikan atas permintaan',
    'Direka untuk dipakai sendiri atau sebagai gaun signature under-abaya Bint Saeed',
    'Dipadu dengan abaya Covent Garden, Kensington, dan Marylebone',
    'Warna: Burgundy, Deep Black, atau Navy Blue',
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
  en: 'Gentle 30°C machine cycle.',
  ar: 'دورة غسيل لطيفة عند 30°م.',
  fr: 'Cycle machine délicat à 30 °C.',
  it: 'Ciclo lavatrice delicato a 30 °C.',
  es: 'Ciclo de lavado suave a 30 °C.',
  ru: 'Деликатная машинная стирка при 30 °C.',
  zh: '30°C 轻柔机洗。',
  de: 'Schonwaschgang bei 30 °C.',
  nl: 'Zachte machinewas op 30 °C.',
  pt: 'Ciclo de lavagem suave a 30 °C.',
  id: 'Siklus mesin lembut pada 30°C.',
  ms: 'Kitaran mesin lembut pada 30°C.',
}

const FIT_AND_SIZE: Record<AppLocale, readonly string[]> = {
  en: [
    'Dress length: 138 cm / 54.5 inches',
    'Model height: 155 cm / 61 inches',
    'Model wears size XS',
    'Dress length can be adjusted upon request',
  ],
  ar: [
    'قصة ناعمة متوازنة',
    'الطول: 148 سم / 58.3 بوصة (مقاس M)',
    'طول العارضة: 155 سم / 61 بوصة',
    'العارضة ترتدي مقاس M',
    'طول مخصص متاح عند الطلب',
  ],
  fr: [
    'Longueur de la robe : 138 cm / 54,5 pouces',
    'Taille du mannequin : 155 cm / 61 pouces',
    'Le mannequin porte la taille XS',
    'Longueur ajustable sur demande',
  ],
  it: [
    'Lunghezza abito: 138 cm / 54,5 pollici',
    'Altezza modella: 155 cm / 61 pollici',
    'La modella indossa taglia XS',
    'Lunghezza regolabile su richiesta',
  ],
  es: [
    'Largo del vestido: 138 cm / 54,5 pulgadas',
    'Altura de la modelo: 155 cm / 61 pulgadas',
    'La modelo lleva talla XS',
    'Largo ajustable bajo pedido',
  ],
  ru: [
    'Длина платья: 138 см / 54,5 дюйма',
    'Рост модели: 155 см / 61 дюйм',
    'На модели размер XS',
    'Длина регулируется по запросу',
  ],
  zh: [
    '裙长：138 厘米 / 54.5 英寸',
    '模特身高：155 厘米 / 61 英寸',
    '模特穿着 XS 码',
    '可按需调整裙长',
  ],
  de: [
    'Kleiderlänge: 138 cm / 54,5 Zoll',
    'Modellgröße: 155 cm / 61 Zoll',
    'Das Model trägt Größe XS',
    'Länge auf Anfrage anpassbar',
  ],
  nl: [
    'Jurklengte: 138 cm / 54,5 inch',
    'Model lengte: 155 cm / 61 inch',
    'Model draagt maat XS',
    'Lengte aanpasbaar op aanvraag',
  ],
  pt: [
    'Comprimento do vestido: 138 cm / 54,5 polegadas',
    'Altura da modelo: 155 cm / 61 polegadas',
    'A modelo usa tamanho XS',
    'Comprimento ajustável sob pedido',
  ],
  id: [
    'Panjang gaun: 138 cm / 54,5 inci',
    'Tinggi model: 155 cm / 61 inci',
    'Model memakai ukuran XS',
    'Panjang dapat disesuaikan atas permintaan',
  ],
  ms: [
    'Panjang gaun: 138 cm / 54.5 inci',
    'Tinggi model: 155 cm / 61 inci',
    'Model memakai saiz XS',
    'Panjang boleh disesuaikan atas permintaan',
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

export function buildCoventGardenLongDressPdpContent(locale: AppLocale): ProductPdpContent {
  const introParagraphParts = INTRO_BY_LOCALE[locale]
  return {
    introParagraphParts,
    introParagraphs: pdpIntroParagraphsToPlainText(introParagraphParts),
    productDetails: [...PRODUCT_DETAILS[locale]],
    compositionDetails: [COMPOSITION_OUTER[locale], COMPOSITION_LINING[locale]],
    careDetails: [CARE[locale]],
    fitAndSizeDetails: [...FIT_AND_SIZE[locale]],
    originDetails: [ORIGIN[locale]],
    faq: getCoventGardenLongDressFaq(locale),
  }
}
