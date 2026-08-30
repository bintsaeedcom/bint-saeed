import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductPdpContent } from '@/data/productPdpContent'
import { HYDE_PARK_SET_INTRO_EN } from '@/data/hydeParkSetPdpIntro'
import {
  buildHydeParkSetDetailGroups,
  hydeParkSetCare,
  hydeParkSetComposition,
  hydeParkSetFitAndSize,
  hydeParkSetOrigin,
} from '@/data/hydeParkSetPdpDetails'
import type { PdpIntroParagraph } from '@/lib/products/pdpIntroRich'
import { THE_CODES_KNOTTED_LINES_HREF, pdpIntroParagraphsToPlainText } from '@/lib/products/pdpIntroRich'
import type { ProductFaqItem } from '@/lib/products/productSchemaMeta'
import { getHydeParkSetPdpFaq as getHydeParkSetFaq } from '@/lib/products/hydeParkSetFaqI18n'
import { HYDE_PARK_SET_SLUG } from '@/lib/products/hydeParkSetSchemaI18n'

export { HYDE_PARK_SET_SLUG }

function knottedLineParagraph(before: string, after: string): PdpIntroParagraph {
  return [
    { type: 'text', value: before },
    {
      type: 'codeLink',
      label: 'Knotted Line',
      href: THE_CODES_KNOTTED_LINES_HREF,
      bold: true,
    },
    { type: 'text', value: after },
  ]
}

const INTRO_BY_LOCALE: Record<AppLocale, PdpIntroParagraph[]> = {
  en: HYDE_PARK_SET_INTRO_EN,
  ar: [
    [{ type: 'text', value: 'الطقم الذي ستعودين إليه أكثر من أي قطعة أخرى.' }],
    [
      {
        type: 'text',
        value:
          'بعض القطع تُشترى لموسم واحد. وأخرى تصبح جزءاً من طريقة ارتدائك. مجموعة Hyde Park تنتمي إلى الفئة الثانية.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'صُنعت لنساء ذوات أسلوب حياة متطوّر، تجمع بين الراحة بلا جهد والتفصيل المعاصر في سيلويت يبدو مناسباً للسفر كما للحياة اليومية. مريحة بما يكفي لأيام طويلة على الطريق، وراقية بما يكفي للغداء أو العشاء أو اجتماع غير متوقع — إنه الطقم الذي يتكيف طبيعياً مع أينما يأخذك يومك.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'يتدلّى القميص الواسع بسهولة على الجسم، بينما تخلق بنطال بالازو الانسيابي حركة أنيقة مع كل خطوة. ارتدِ القميص فضفاضاً لإطلالة بلا جهد، أو أدخله في الخصر لسيلويت أكثر تحديداً، أو اربطه عند الخصر لتعبير مختلف تماماً. طقم واحد. طرق لا حصر لها لارتدائه.',
      },
    ],
    knottedLineParagraph(
      'متوفر حصرياً بالأسود العميق — كل تفصيلة وُضعت بعناية. جيوب صدرية وظيفية وجيوب جانبية مخفية على طول اللحام الجانبي تجمع العملية مع تصميم راقٍ، لتبقي هاتفك وأحمر الشفاه أو ضرورياتك اليومية معك دون استخدام يديك. منتهٍ بأزرار ',
      ' الذهبية المميزة من Bint Saeed، تحتفي مجموعة Hyde Park بجمال الأناقة الرصينة.',
    ),
    [
      {
        type: 'text',
        value:
          'من كورنيش أبوظبي إلى شواطئ بورتوفينو، من لندن إلى حدائق الرباط، من شوارع سنغافورة إلى سواحل ميامي، ومن شوارع لوس أنجلوس إلى أناقة بروناي — تتحرك مجموعة Hyde Park بسهولة معك. صُنعت لتسافر بأناقة وتبقى راقية عبر الوجهات، وهي من القطع التي ستعودين إليها بغريزة، مراراً وتكراراً.',
      },
    ],
  ],
  fr: [
    [{ type: 'text', value: 'Le set que vous choisirez plus que tout autre.' }],
    [
      {
        type: 'text',
        value:
          'Certaines pièces s’achètent pour une saison. D’autres deviennent partie intégrante de votre façon de vous habiller. Le Hyde Park Set appartient à cette seconde catégorie.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Créé pour les femmes au mode de vie évolutif, il réunit confort sans effort et tailoring contemporain dans une silhouette aussi à l’aise en voyage qu’au quotidien. Assez décontracté pour de longues journées en mouvement, assez raffiné pour le déjeuner, le dîner ou une réunion imprévue — c’est le genre de set qui s’adapte naturellement à la direction que prend votre journée.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'La chemise oversize tombe sans effort sur le corps, tandis que le pantalon palazzo fluide crée un mouvement élégant à chaque pas. Portez la chemise loose pour un look effortless, rentrez-la dans le waistband pour une silhouette plus définie, ou nouez-la à la taille pour une expression entièrement différente. Un set. D’innombrables façons de le porter.',
      },
    ],
    knottedLineParagraph(
      'Disponible exclusivement en Noir profond, chaque détail a été soigneusement considéré. Des poches poitrine fonctionnelles et des poches latérales dissimulées sur la couture latérale allient praticité et design raffiné, pour garder téléphone, rouge à lèvres ou autres essentiels du quotidien tout en gardant les mains libres. Finitions avec les boutons dorés signature ',
      ' de Bint Saeed — le Hyde Park Set célèbre la beauté d’une élégance discrète.',
    ),
    [
      {
        type: 'text',
        value:
          'De la Corniche à Abou Dabi aux rivages de Portofino, de Londres aux jardins de Rabat, des rues de Singapour au littoral de Miami, des boulevards de Los Angeles à l’élégance du Brunei — le Hyde Park Set vous accompagne sans effort. Conçu pour voyager avec élégance et rester raffiné d’une destination à l’autre, c’est la pièce que vous choisirez instinctivement, encore et encore.',
      },
    ],
  ],
  it: [
    [{ type: 'text', value: 'Il set a cui tornerai più di qualsiasi altro.' }],
    [
      {
        type: 'text',
        value:
          'Alcuni capi si acquistano per una stagione. Altri diventano parte del modo in cui ti vesti. L’Hyde Park Set appartiene a quest’ultima categoria.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Creato per donne con uno stile di vita in evoluzione, unisce comfort senza sforzo e tailoring contemporaneo in una silhouette che si sente a casa tanto in viaggio quanto nella vita quotidiana. Abbastanza rilassato per lunghe giornate in movimento, abbastanza raffinato per pranzo, cena o un incontro improvviso — è il tipo di set che si adatta naturalmente a dove ti porta la giornata.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'La camicia oversize cade senza sforzo sul corpo, mentre i pantaloni palazzo fluidi creano movimento elegante a ogni passo. Indossa la camicia loose per un look effortless, infilala nel waistband per una silhouette più definita, o annodala in vita per un’espressione completamente diversa. Un set. Innumerevoli modi per indossarlo.',
      },
    ],
    knottedLineParagraph(
      'Disponibile esclusivamente in Nero profondo, ogni dettaglio è stato considerato con cura. Tasche petto funzionali e tasche laterali nascoste sulla cucitura laterale uniscono praticità e design raffinato, per portare telefono, rossetto o altri essenziali quotidiani tenendo le mani libere. Finito con i bottoni dorati signature ',
      ' di Bint Saeed — l’Hyde Park Set celebra la bellezza di un’eleganza sobria.',
    ),
    [
      {
        type: 'text',
        value:
          'Dalla Corniche di Abu Dhabi alle rive di Portofino, da Londra ai giardini di Rabat, dalle strade di Singapore alla costa di Miami, dai boulevard di Los Angeles all’eleganza del Brunei — l’Hyde Park Set si muove con te senza sforzo. Creato per viaggiare con eleganza e restare raffinato tra le destinazioni, è il capo che sceglierai istintivamente, ancora e ancora.',
      },
    ],
  ],
  es: [
    [{ type: 'text', value: 'El set al que volverás más que a ningún otro.' }],
    [
      {
        type: 'text',
        value:
          'Algunas piezas se compran para una temporada. Otras se convierten en parte de tu forma de vestir. El Hyde Park Set pertenece a esta segunda categoría.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Creado para mujeres con un estilo de vida en evolución, reúne comodidad sin esfuerzo y sastrería contemporánea en una silueta que se siente igual de a casa en viaje que en la vida cotidiana. Lo bastante relajado para largos días en movimiento, lo bastante refinado para almuerzo, cena o una reunión inesperada — es el tipo de set que se adapta naturalmente a donde te lleve el día.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'La camisa oversize cae sin esfuerzo sobre el cuerpo, mientras los pantalones palazzo fluidos crean movimiento elegante con cada paso. Lleva la camisa suelta para un look effortless, métela en la cintura para una silueta más definida, o átala en la cintura para una expresión completamente distinta. Un set. Innumerables formas de llevarlo.',
      },
    ],
    knottedLineParagraph(
      'Disponible exclusivamente en Negro profundo, cada detalle ha sido cuidadosamente considerado. Bolsillos de pecho funcionales y bolsillos laterales ocultos en la costura lateral combinan practicidad con diseño refinado, para llevar teléfono, lápiz labial u otros esenciales diarios con las manos libres. Acabado con los botones dorados signature ',
      ' de Bint Saeed — el Hyde Park Set celebra la belleza de una elegancia discreta.',
    ),
    [
      {
        type: 'text',
        value:
          'Desde la Corniche de Abu Dabi hasta las orillas de Portofino, de Londres a los jardines de Rabat, de las calles de Singapur a la costa de Miami, los bulevares de Los Ángeles y la elegancia de Brunéi — el Hyde Park Set se mueve contigo sin esfuerzo. Creado para viajar con elegancia y permanecer refinado entre destinos, es la pieza a la que volverás instintivamente, una y otra vez.',
      },
    ],
  ],
  ru: [
    [{ type: 'text', value: 'Комплект, к которому вы будете возвращаться чаще всего.' }],
    [
      {
        type: 'text',
        value:
          'Некоторые вещи покупают на один сезон. Другие становятся частью того, как вы одеваетесь. Hyde Park Set относится ко вторым.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Созданный для женщин с меняющимся образом жизни, он объединяет лёгкий комфорт и современный крой в силуэте, который одинаково уместен в путешествии и в повседневной жизни. Достаточно расслабленный для долгих дней в движении и достаточно утончённый для обеда, ужина или неожиданной встречи — это комплект, который естественно адаптируется к тому, куда ведёт вас день.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Оверсайз рубашка легко ниспадает по фигуре, а струящиеся брюки palazzo создают элегантное движение с каждым шагом. Носите рубашку свободно для effortless-образа, заправьте в пояс для более чёткого силуэта или завяжите на талии для совершенно другого выражения. Один комплект. Бесчисленные способы носить его.',
      },
    ],
    knottedLineParagraph(
      'Доступен исключительно в глубоком чёрном — каждая деталь тщательно продумана. Функциональные нагрудные карманы и скрытые боковые карманы на боковом шве сочетают практичность с утончённым дизайном, позволяя носить телефон, помаду или другие ежедневные мелочи, оставляя руки свободными. Завершён фирменными золотистыми пуговицами ',
      ' от Bint Saeed — Hyde Park Set прославляет красоту сдержанной элегантности.',
    ),
    [
      {
        type: 'text',
        value:
          'От набережной Корниш в Абу-Даби до берегов Портофино, от Лондона до садов Рабата, от улиц Сингапура до побережья Майами, бульваров Лос-Анджелеса и элегантности Брунея — Hyde Park Set движется с вами без усилий. Создан для красивых путешествий и элегантности в любой точке мира — вещь, к которой вы будете инстинктивно возвращаться снова и снова.',
      },
    ],
  ],
  zh: [
    [{ type: 'text', value: '你会一再伸手去拿的那套搭配。' }],
    [
      {
        type: 'text',
        value:
          '有些单品为一季而买。另一些则融入你的穿着方式。Hyde Park Set 属于后者。',
      },
    ],
    [
      {
        type: 'text',
        value:
          '为生活方式不断演变的女性而创，它将轻松舒适与当代剪裁融为一体，廓形在旅途与日常生活中同样自在。既足够放松，适合长途奔波；又足够精致，适合午餐、晚餐或意外会议——这套单品会自然适应你一天的走向。',
      },
    ],
    [
      {
        type: 'text',
        value:
          '宽松衬衫轻松垂落于身，流畅阔腿 palazzo 长裤步步生姿。衬衫敞开穿着轻松随性，塞入腰头更显利落轮廓，或在腰间打结呈现全然不同的表达。一套单品。无数种穿法。',
      },
    ],
    knottedLineParagraph(
      '仅提供深黑色——每一处细节都经过仔细考量。功能性胸袋与侧缝隐藏口袋兼顾实用与精致设计，可随身携带手机、口红或其他日常必需品，双手依然自由。以 BINT SAEED 承悦 标志性金色调 ',
      ' 纽扣收尾——Hyde Park Set 致敬含蓄优雅之美。',
    ),
    [
      {
        type: 'text',
        value:
          '从阿布扎比滨海大道到波托菲诺海岸，从伦敦到拉巴特花园，从新加坡街头到迈阿密海岸线，洛杉矶林荫大道与文莱的典雅——Hyde Park Set 都能轻松随行。为优雅旅行与跨目的地保持精致而创，是你会本能地一再选择的单品。',
      },
    ],
  ],
  de: [
    [{ type: 'text', value: 'Das Set, nach dem Sie öfter greifen werden als nach jedem anderen.' }],
    [
      {
        type: 'text',
        value:
          'Manche Stücke kauft man für eine Saison. Andere werden Teil der Art, wie Sie sich kleiden. Das Hyde Park Set gehört zu Letzterem.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Für Frauen mit einem sich wandelnden Lebensstil vereint es mühelosen Komfort und zeitgenössisches Tailoring in einer Silhouette, die auf Reisen ebenso zu Hause ist wie im Alltag. Entspannt genug für lange Tage unterwegs, raffiniert genug für Mittagessen, Abendessen oder ein unerwartetes Meeting — ein Set, das sich natürlich anpasst, wohin der Tag Sie führt.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Das Oversize-Hemd fällt mühelos über den Körper, während die fließenden Palazzo-Hosen bei jedem Schritt elegante Bewegung schaffen. Tragen Sie das Hemd locker für einen effortless Look, stecken Sie es in den Bund für eine definiertere Silhouette oder binden Sie es an der Taille für einen völlig anderen Ausdruck. Ein Set. Unzählige Tragearten.',
      },
    ],
    knottedLineParagraph(
      'Exklusiv in Tiefschwarz erhältlich — jedes Detail wurde sorgfältig bedacht. Funktionale Brusttaschen und versteckte Seitennaht-Taschen verbinden Praktikabilität mit raffiniertem Design, damit Sie Telefon, Lippenstift oder andere tägliche Essentials tragen können, während die Hände frei bleiben. Abgeschlossen mit den charakteristischen goldfarbenen ',
      ' Knöpfen von Bint Saeed — das Hyde Park Set feiert die Schönheit zurückhaltender Eleganz.',
    ),
    [
      {
        type: 'text',
        value:
          'Von der Corniche in Abu Dhabi bis zu den Ufern von Portofino, von London zu den Gärten von Rabat, von den Straßen Singapurs bis zur Küste von Miami, den Boulevards von Los Angeles und der Eleganz Bruneis — das Hyde Park Set bewegt sich mühelos mit Ihnen. Geschaffen, um schön zu reisen und über Destinationen hinweg elegant zu bleiben — ein Stück, zu dem Sie instinktiv immer wieder greifen werden.',
      },
    ],
  ],
  nl: [
    [{ type: 'text', value: 'Het set dat u vaker zult kiezen dan welk ander ook.' }],
    [
      {
        type: 'text',
        value:
          'Sommige stukken koopt u voor één seizoen. Anderen worden onderdeel van de manier waarop u zich kleedt. De Hyde Park Set hoort bij dat laatste.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Gemaakt voor vrouwen met een evoluerende levensstijl, brengt het moeiteloos comfort en eigentijds tailoring samen in een silhouet dat zich even thuis voelt op reis als in het dagelijks leven. Ontspannen genoeg voor lange dagen onderweg, verfijnd genoeg voor lunch, diner of een onverwachte vergadering — het soort set dat zich natuurlijk aanpast aan waar de dag u brengt.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Het oversized overhemd valt moeiteloos over het lichaam, terwijl de vloeiende palazzo-broek elegante beweging creëert bij elke stap. Draag het overhemd los voor een effortless look, stop het in de tailleband voor een meer gedefinieerde silhouet, of knoop het om de taille voor een geheel andere expressie. Eén set. Ontelbare manieren om het te dragen.',
      },
    ],
    knottedLineParagraph(
      'Exclusief verkrijgbaar in Diepzwart — elk detail is zorgvuldig overwogen. Functionele borstzakken en verborgen zijnaadzakken combineren praktijk met verfijnd design, zodat u telefoon, lippenstift of andere dagelijkse essentials kunt meenemen terwijl uw handen vrij blijven. Afgewerkt met de kenmerkende goudkleurige ',
      ' knopen van Bint Saeed — de Hyde Park Set viert de schoonheid van ingetogen elegantie.',
    ),
    [
      {
        type: 'text',
        value:
          'Van de Corniche in Abu Dhabi tot de oevers van Portofino, van Londen tot de tuinen van Rabat, van de straten van Singapore tot de kustlijn van Miami, de boulevards van Los Angeles en de elegantie van Brunei — de Hyde Park Set beweegt moeiteloos met u mee. Gemaakt om mooi te reizen en elegant te blijven over bestemmingen heen — het stuk waar u instinctief steeds weer naar grijpt.',
      },
    ],
  ],
  pt: [
    [{ type: 'text', value: 'O set a que voltará mais do que a qualquer outro.' }],
    [
      {
        type: 'text',
        value:
          'Algumas peças compram-se para uma estação. Outras tornam-se parte da forma como se veste. O Hyde Park Set pertence a esta segunda categoria.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Criado para mulheres com um estilo de vida em evolução, reúne conforto sem esforço e tailoring contemporâneo numa silhueta que se sente em casa tanto em viagem como no dia a dia. Relaxado o suficiente para longos dias em movimento, refinado o suficiente para almoço, jantar ou uma reunião inesperada — é o tipo de set que se adapta naturalmente a onde o dia a leva.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'A camisa oversize cai sem esforço sobre o corpo, enquanto as calças palazzo fluidas criam movimento elegante a cada passo. Use a camisa solta para um look effortless, metida na cintura para uma silhueta mais definida, ou amarrada na cintura para uma expressão completamente diferente. Um set. Inúmeras formas de o usar.',
      },
    ],
    knottedLineParagraph(
      'Disponível exclusivamente em Preto profundo, cada detalhe foi cuidadosamente considerado. Bolsos de peito funcionais e bolsos laterais ocultos na costura lateral combinam praticidade com design refinado, permitindo levar telemóvel, batom ou outros essenciais diários com as mãos livres. Acabado com os botões dourados signature ',
      ' da Bint Saeed — o Hyde Park Set celebra a beleza de uma elegância discreta.',
    ),
    [
      {
        type: 'text',
        value:
          'Da Corniche em Abu Dhabi às margens de Portofino, de Londres aos jardins de Rabat, das ruas de Singapura à costa de Miami, aos boulevards de Los Angeles e à elegância do Brunei — o Hyde Park Set move-se consigo sem esforço. Criado para viajar com elegância e permanecer refinado entre destinos, é a peça a que voltará instintivamente, vez após vez.',
      },
    ],
  ],
  id: [
    [{ type: 'text', value: 'Set yang akan Anda pilih lebih sering daripada yang lain.' }],
    [
      {
        type: 'text',
        value:
          'Beberapa potong dibeli untuk satu musim. Yang lain menjadi bagian dari cara Anda berpakaian. Hyde Park Set termasuk yang terakhir.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Diciptakan untuk wanita dengan gaya hidup yang berkembang, ia menyatukan kenyamanan tanpa usaha dan tailoring kontemporer dalam siluet yang terasa sama nyamannya saat bepergian maupun dalam kehidupan sehari-hari. Cukup santai untuk hari-hari panjang dalam perjalanan, cukup halus untuk makan siang, makan malam, atau pertemuan tak terduga — set yang secara alami beradaptasi ke mana pun hari membawa Anda.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Kemeja oversized jatuh dengan mudah di tubuh, sementara celana palazzo mengalir menciptakan gerakan elegan di setiap langkah. Kenakan kemeja longgar untuk tampilan effortless, tuck ke pinggang untuk siluet yang lebih terdefinisi, atau ikat di pinggang untuk ekspresi yang sama sekali berbeda. Satu set. Tak terhitung cara memakainya.',
      },
    ],
    knottedLineParagraph(
      'Tersedia eksklusif dalam Hitam Pekat — setiap detail dipertimbangkan dengan saksama. Saku dada fungsional dan saku sisi tersembunyi pada jahitan samping menggabungkan kepraktisan dengan desain halus, memungkinkan Anda membawa ponsel, lipstik, atau kebutuhan harian lainnya sambil tetap bebas menggunakan tangan. Diselesaikan dengan kancing emas signature ',
      ' Bint Saeed — Hyde Park Set merayakan keindahan elegansi yang understated.',
    ),
    [
      {
        type: 'text',
        value:
          'Dari Corniche di Abu Dhabi hingga pantai Portofino, dari London ke taman Rabat, dari jalan-jalan Singapura ke garis pantai Miami, boulevard Los Angeles dan keanggunan Brunei — Hyde Park Set bergerak dengan mudah bersama Anda. Diciptakan untuk bepergian dengan indah dan tetap elegan lintas destinasi — potongan yang akan Anda pilih secara insting, lagi dan lagi.',
      },
    ],
  ],
  ms: [
    [{ type: 'text', value: 'Set yang akan anda pilih lebih kerap daripada mana-mana yang lain.' }],
    [
      {
        type: 'text',
        value:
          'Sesetengah potong dibeli untuk satu musim. Yang lain menjadi sebahagian daripada cara anda berpakaian. Hyde Park Set tergolong dalam yang kedua.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Dicipta untuk wanita dengan gaya hidup yang berkembang, ia menyatukan keselesaan tanpa usaha dan jahitan kontemporari dalam siluet yang terasa sama selesa dalam perjalanan mahupun kehidupan harian. Cukup santai untuk hari panjang dalam perjalanan, cukup halus untuk makan tengah hari, makan malam atau mesyuarat tidak dijangka — set yang secara semula jadi menyesuaikan diri ke mana sahaja hari membawa anda.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Kemeja oversized jatuh dengan mudah pada badan, manakala seluar palazzo mengalir mencipta pergerakan anggun pada setiap langkah. Pakai kemeja longgar untuk gaya effortless, tuck ke pinggang untuk siluet yang lebih terdefinisi, atau ikat di pinggang untuk ekspresi yang berbeza sepenuhnya. Satu set. Pelbagai cara untuk memakainya.',
      },
    ],
    knottedLineParagraph(
      'Tersedia secara eksklusif dalam Hitam Pekat — setiap butiran dipertimbangkan dengan teliti. Poket dada fungsian dan poket sisi tersembunyi pada jahitan sisi menggabungkan kepraktisan dengan reka bentuk halus, membolehkan anda membawa telefon, gincu atau keperluan harian lain sambil tangan kekal bebas. Disiapkan dengan butang emas signature ',
      ' Bint Saeed — Hyde Park Set meraikan keindahan keanggunan yang understated.',
    ),
    [
      {
        type: 'text',
        value:
          'Dari Corniche di Abu Dhabi ke pantai Portofino, dari London ke taman Rabat, dari jalan-jalan Singapura ke garis pantai Miami, boulevard Los Angeles dan keanggunan Brunei — Hyde Park Set bergerak dengan mudah bersama anda. Dicipta untuk melancong dengan anggun dan kekal elegan merentasi destinasi — potongan yang akan anda pilih secara naluri, berulang kali.',
      },
    ],
  ],
}

export function isHydeParkSetSlug(slug: string): boolean {
  return slug.toLowerCase() === HYDE_PARK_SET_SLUG
}

export function getHydeParkSetIntro(locale: AppLocale = 'en'): PdpIntroParagraph[] {
  return INTRO_BY_LOCALE[locale] ?? INTRO_BY_LOCALE.en
}

export function getHydeParkSetPdpFaq(locale: AppLocale = 'en'): ProductFaqItem[] {
  return getHydeParkSetFaq(locale)
}

export function buildHydeParkSetPdpContent(locale: AppLocale = 'en'): ProductPdpContent {
  const intro = buildHydeParkSetPdpIntro(locale)
  return {
    ...intro,
    productDetails: [],
    productDetailGroups: buildHydeParkSetDetailGroups(locale),
    compositionDetails: hydeParkSetComposition(locale),
    fitAndSizeDetails: hydeParkSetFitAndSize(locale),
    careDetails: hydeParkSetCare(locale),
    originDetails: hydeParkSetOrigin(locale),
  }
}

export function buildHydeParkSetPdpIntro(locale: AppLocale = 'en'): Pick<
  ProductPdpContent,
  'introParagraphParts' | 'introParagraphs' | 'faq'
> {
  const introParagraphParts = getHydeParkSetIntro(locale)
  return {
    introParagraphParts,
    introParagraphs: pdpIntroParagraphsToPlainText(introParagraphParts),
    faq: getHydeParkSetPdpFaq(locale),
  }
}
