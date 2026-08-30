import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductPdpContent } from '@/data/productPdpContent'
import { COVENT_GARDEN_SIGNATURE_SET_INTRO_EN } from '@/data/coventGardenSignatureSetPdpIntro'
import type { PdpDetailGroup, PdpIntroParagraph } from '@/lib/products/pdpIntroRich'
import {
  THE_CODES_KHOUS_HREF,
  THE_CODES_KNOTTED_LINES_HREF,
  pdpIntroParagraphsToPlainText,
} from '@/lib/products/pdpIntroRich'
import { getCoventGardenSignatureSetFaq } from '@/lib/products/coventGardenSignatureSetFaqI18n'
import { getHouseCodesDetailGroup } from '@/lib/products/pdpHouseCodesGroupsI18n'
import { localizedColorName } from '@/lib/products/imageAltI18n'

export const COVENT_GARDEN_SIGNATURE_SET_SLUG = 'covent-garden-signature-set'

const COLOURS = ['Burgundy', 'Deep Black', 'Navy Blue'] as const

function alKhousParagraph(before: string, after: string): PdpIntroParagraph {
  return [
    { type: 'text', value: before },
    { type: 'codeLink', label: 'Al Khous', href: THE_CODES_KHOUS_HREF, bold: true },
    { type: 'text', value: after },
  ]
}

function knottedLinesParagraph(before: string, after: string): PdpIntroParagraph {
  return [
    { type: 'text', value: before },
    { type: 'codeLink', label: 'Knotted Lines', href: THE_CODES_KNOTTED_LINES_HREF, bold: true },
    { type: 'text', value: after },
  ]
}

const INTRO_BY_LOCALE: Record<AppLocale, PdpIntroParagraph[]> = {
  en: COVENT_GARDEN_SIGNATURE_SET_INTRO_EN,
  ar: [
    [
      {
        type: 'text',
        value: 'أفضل الخزائن لا تُبنى بشراء المزيد، بل باختيار قطع تخلق إمكانيات أكثر في كل مرة تفتحين فيها خزانتك.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'طقم Covent Garden Signature Set طقم معاصر من قطعتين يضم فستان Covent Garden Dress وجاكيت مفصّل بأكمام قصيرة. صُمم للحظات الحياة اليومية من العمل والغداء الأنيق وشاي بعد الظهر والعشاء والفعاليات الثقافية، ويقدّم قصة راقية دون مبالغة.',
      },
    ],
    alKhousParagraph(
      'يتوفر بالألوان العنابي والأسود العميق والأزرق الكحلي، ويتميز الجاكيت بجيبين أماميين بتفاصيل نسيج مميزة مستوحاة من ',
      '، إحدى أقدم الحرف التقليدية في دولة الإمارات. لأجيال، نسج الإماراتيون أوراق النخيل في أشياء وظيفية وزخرفية، فكان Al Khous تعبيراً دائماً عن التراث الثقافي. أُعيد تفسيره عبر التفصيل المعاصر ليضيف ملمساً وحرفية مع الحفاظ على خطوط أنيقة نظيفة.',
    ),
    knottedLinesParagraph(
      'ينتهي بأزرار ',
      ' الذهبية المميزة لـ Bint Saeed، فيحمل أحد رموز الدار الدائمة. مستوحاة من الروابط التي توحّد الأجيال، تمثل كل زر القصص والقيم والتقاليد التي تُحمل إلى الأمام.',
    ),
    [
      {
        type: 'text',
        value:
          'يمكن ارتداء الطقم معاً أو كل قطعة على حدة، ما يمنح مرونة في التنسيق. مثل كل قطعة Bint Saeed، يتضمن تخصيصاً عبر الملصق الداخلي المخفي المميز للدار.',
      },
    ],
  ],
  fr: [
    [
      {
        type: 'text',
        value:
          'Les meilleures garde-robes ne se construisent pas en achetant plus, mais en choisissant des pièces qui créent davantage de possibilités chaque fois que vous ouvrez votre garde-robe.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'L’ensemble Covent Garden Signature est un set contemporain deux pièces comprenant la robe Covent Garden et une veste courte ajustée. Conçu pour les moments du quotidien — travail, déjeuners élégants, thé de l’après-midi, dîners et événements culturels — il offre une silhouette raffinée sans jamais paraître trop habillé.',
      },
    ],
    alKhousParagraph(
      'Disponible en Bourgogne, Noir profond et Bleu marine, la veste se distingue par deux poches avant avec le tissage signature de Bint Saeed inspiré de ',
      ", l’un des plus anciens savoir-faire traditionnels des Émirats arabes unis. Pendant des générations, les Émiratis ont tressé les feuilles de palmier dattier en objets fonctionnels et décoratifs, faisant d’Al Khous une expression durable du patrimoine culturel. Réinterprété par une coupe contemporaine, ce détail apporte texture et artisanat tout en conservant des lignes épurées.",
    ),
    knottedLinesParagraph(
      'Finitions avec les boutons dorés signature ',
      ' de Bint Saeed, la veste porte l’un des codes de design durables de la maison. Inspirés des liens qui unissent les générations, chaque bouton représente les histoires, valeurs et traditions transmises.',
    ),
    [
      {
        type: 'text',
        value:
          'La robe Covent Garden coordonnée complète la silhouette avec des proportions gracieuses et une élégance discrète. Entièrement doublée pour un toucher doux et un confort durable, elle présente des poches latérales dissimulées et permet d’ajuster la longueur. Conçue pour un look coordonné avec la veste, la robe peut aussi être portée seule, offrant encore plus de possibilités de style.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Créé à Abu Dhabi, l’ensemble Covent Garden Signature reflète la vision de Bint Saeed de porter des éléments du patrimoine émirati dans la mode féminine contemporaine pour des femmes du monde entier. Il est créé pour celles qui apprécient la coupe raffinée, l’artisanat porteur de sens et des vêtements qui passent sans effort d’une occasion à l’autre.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Conçu pour rester pertinent au-delà des saisons, l’ensemble Covent Garden Signature est une expression contemporaine de l’habillement coordonné pour les femmes qui comprennent que les meilleures garde-robes ne se construisent pas en possédant plus, mais en choisissant mieux.',
      },
    ],
  ],
  it: [
    [
      {
        type: 'text',
        value:
          'I migliori guardaroba non si costruiscono comprando di più, ma scegliendo pezzi che creano più possibilità ogni volta che apri il guardaroba.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Il Covent Garden Signature Set è un set contemporaneo due pezzi con il Covent Garden Dress e una giacca tailored a maniche corte. Progettato per i momenti della vita quotidiana — lavoro, pranzi eleganti, tè pomeridiano, cene ed eventi culturali — offre una silhouette raffinata senza mai sembrare eccessiva.',
      },
    ],
    alKhousParagraph(
      'Disponibile in Borgogna, Nero profondo e Blu navy, la giacca si distingue per due tasche frontali con la lavorazione signature Bint Saeed ispirata a ',
      ", uno dei più antichi mestieri tradizionali degli Emirati Arabi Uniti. Per generazioni gli emiratini hanno intrecciato le foglie di palma da dattero in oggetti funzionali e decorativi, rendendo Al Khous un’espressione duratura del patrimonio culturale. Reinterpretato attraverso il tailoring contemporaneo, questo dettaglio introduce texture e artigianato mantenendo linee pulite ed eleganti.",
    ),
    knottedLinesParagraph(
      'Finita con i bottoni dorati signature ',
      ' di Bint Saeed, la giacca porta uno dei codici di design duraturi della maison. Ispirati ai legami che uniscono le generazioni, ogni bottone rappresenta storie, valori e tradizioni portate avanti.',
    ),
    [
      {
        type: 'text',
        value:
          'Il Covent Garden Dress coordinato completa la silhouette con proporzioni aggraziate ed eleganza sobria. Completamente foderato per un tocco morbido e comfort duraturo, presenta tasche laterali nascoste e permette di regolare la lunghezza. Progettato per un look coordinato con la giacca, il vestito può essere indossato anche da solo, offrendo ancora più possibilità di styling.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Creato ad Abu Dhabi, il Covent Garden Signature Set riflette la visione di Bint Saeed di portare elementi del patrimonio emiratino nella moda femminile contemporanea per donne in tutto il mondo. È creato per chi apprezza il tailoring raffinato, l’artigianato significativo e abiti che si muovono senza sforzo tra le occasioni.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Progettato per restare rilevante oltre le stagioni, il Covent Garden Signature Set è un’espressione contemporanea dell’abbigliamento coordinato per donne che capiscono che i migliori guardaroba non si costruiscono possedendo di più, ma scegliendo meglio.',
      },
    ],
  ],
  es: [
    [
      {
        type: 'text',
        value:
          'Los mejores armarios no se construyen comprando más, sino eligiendo piezas que crean más posibilidades cada vez que abres tu armario.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'El Covent Garden Signature Set es un conjunto contemporáneo de dos piezas con el Covent Garden Dress y una chaqueta tailored de manga corta. Diseñado para los momentos del día a día — trabajo, almuerzos elegantes, té de la tarde, cenas y eventos culturales — ofrece una silueta refinada sin parecer nunca demasiado vestida.',
      },
    ],
    alKhousParagraph(
      'Disponible en Burdeos, Negro profundo y Azul marino, la chaqueta se distingue por dos bolsillos frontales con el tejido signature de Bint Saeed inspirado en ',
      ', uno de los oficios tradicionales más antiguos de los Emiratos Árabes Unidos. Durante generaciones, los emiratíes tejieron hojas de palmera datilera en objetos funcionales y decorativos, haciendo de Al Khous una expresión duradera del patrimonio cultural. Reinterpretado mediante sastrería contemporánea, este detalle aporta textura y artesanía manteniendo líneas limpias y elegantes.',
    ),
    knottedLinesParagraph(
      'Acabada con los botones dorados signature ',
      ' de Bint Saeed, la chaqueta lleva uno de los códigos de diseño perdurables de la casa. Inspirados en los vínculos que unen generaciones, cada botón representa historias, valores y tradiciones que se transmiten.',
    ),
    [
      {
        type: 'text',
        value:
          'El Covent Garden Dress coordinado completa la silueta con proporciones graciosas y elegancia discreta. Completamente forrado para un tacto suave y confort duradero, presenta bolsillos laterales ocultos y permite ajustar la longitud. Diseñado para un look coordinado con la chaqueta, el vestido puede llevarse también solo, ofreciendo aún más posibilidades de estilo.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Creado en Abu Dabi, el Covent Garden Signature Set refleja la visión de Bint Saeed de llevar elementos del patrimonio emiratí a la moda femenina contemporánea para mujeres de todo el mundo. Está creado para quienes aprecian la sastrería refinada, la artesanía con significado y prendas que transitan sin esfuerzo entre ocasiones.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Diseñado para permanecer relevante más allá de las temporadas, el Covent Garden Signature Set es una expresión contemporánea del vestir coordinado para mujeres que entienden que los mejores armarios no se construyen poseyendo más, sino eligiendo mejor.',
      },
    ],
  ],
  ru: [
    [
      {
        type: 'text',
        value:
          'Лучшие гардеробы строятся не покупкой большего количества вещей, а выбором тех, что открывают больше возможностей каждый раз, когда вы открываете шкаф.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Covent Garden Signature Set — современный комплект из двух изделий: платья Covent Garden и укороченного tailored-жакета. Создан для повседневных моментов — работы, изысканных обедов, послеобеденного чая, ужинов и культурных событий — и предлагает утончённый силуэт без излишней торжественности.',
      },
    ],
    alKhousParagraph(
      'Доступен в цветах Burgundy, Deep Black и Navy Blue. Жакет отличается двумя передними карманами с фирменным плетением Bint Saeed, вдохновлённым ',
      ' — одним из древнейших традиционных ремёсел ОАЭ. Поколениями эмиратцы плели листья финиковой пальмы в функциональные и декоративные предметы, делая Al Khous устойчивым выражением культурного наследия. Переосмысленный через современный крой, этот элемент добавляет текстуру и мастерство, сохраняя чистые элегантные линии.',
    ),
    knottedLinesParagraph(
      'Отделанный фирменными золотистыми пуговицами ',
      ' Bint Saeed, жакет несёт один из постоянных кодов дома. Вдохновлённые связями, объединяющими поколения, каждая пуговица символизирует истории, ценности и традиции, передаваемые дальше.',
    ),
    [
      {
        type: 'text',
        value:
          'Координирующее платье Covent Garden завершает силуэт грациозными пропорциями и сдержанной элегантностью. Полностью на подкладке для мягкости и долговечного комфорта, с скрытыми боковыми карманами и возможностью корректировки длины. Создано для согласованного образа с жакетом, платье может носиться и отдельно, расширяя стилевые возможности.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Созданный в Абу-Даби, Covent Garden Signature Set отражает видение Bint Saeed — нести элементы эмиратского наследия в современную женскую моду для женщин по всему миру. Для тех, кто ценит утончённый крой, осмысленное мастерство и одежду, легко переходящую между случаями.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Созданный, чтобы оставаться актуальным вне сезонов, Covent Garden Signature Set — современное выражение согласованного гардероба для женщин, понимающих, что лучшие гардеробы строятся не количеством, а качеством выбора.',
      },
    ],
  ],
  zh: [
    [
      {
        type: 'text',
        value: '最好的衣橱不是靠买得更多，而是靠选择那些每次打开衣橱都能创造更多可能的单品。',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Covent Garden Signature Set 是当代两件套，包含 Covent Garden Dress 与短款修身夹克。为工作、雅宴午餐、下午茶、晚宴与文化场合等日常时刻而设计，呈现精致而不显过度的廓形。',
      },
    ],
    alKhousParagraph(
      '提供酒红、深黑与海军蓝三色。夹克以两枚前袋为亮点，饰有 BINT SAEED 承悦 标志性编织细节，灵感源自 ',
      '——阿联酋最古老的传统工艺之一。世代以来，阿联酋人将椰枣树叶编织成功能与装饰物件，使 Al Khous 成为文化传承的持久表达。经当代剪裁重新诠释，这一细节增添质感与工艺，同时保持干净优雅的线条。',
    ),
    knottedLinesParagraph(
      '以 BINT SAEED 承悦 标志性金色 ',
      ' 纽扣收尾，夹克承载品牌经典设计符号之一。灵感来自联结世代的纽带，每一枚纽扣代表被传承的故事、价值与传统。',
    ),
    [
      {
        type: 'text',
        value:
          '配套 Covent Garden Dress 以优雅比例与低调精致完成廓形。全里衬柔软舒适，配有隐藏侧缝口袋，并可调整长度。可与夹克打造协调造型，亦可单独穿着，为本就多元的衣橱增添更多搭配可能。',
      },
    ],
    [
      {
        type: 'text',
        value:
          '于阿布扎比创作，Covent Garden Signature Set 体现 BINT SAEED 承悦 将阿联酋传承元素带入当代女装、献给世界各地女性的愿景。为欣赏精致剪裁、有意义工艺，以及能在场合间从容转换的服饰的女性而设计。',
      },
    ],
    [
      {
        type: 'text',
        value:
          '超越季节而设计，Covent Garden Signature Set 是当代协调着装的表达——献给深知最好衣橱不在于拥有更多，而在于选择更好的女性。',
      },
    ],
  ],
  de: [
    [
      {
        type: 'text',
        value:
          'Die besten Garderoben entstehen nicht durch mehr Kaufen, sondern durch die Wahl von Stücken, die bei jedem Öffnen des Schranks mehr Möglichkeiten schaffen.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Das Covent Garden Signature Set ist ein zeitgenössisches Zweiteiler-Set mit dem Covent Garden Dress und einer kurzärmeligen tailored Jacke. Für die Momente des Alltags — Arbeit, elegante Mittagessen, Nachmittagstee, Abendessen und Kulturveranstaltungen — bietet es eine raffinierte Silhouette, die nie overdressed wirkt.',
      },
    ],
    alKhousParagraph(
      'Erhältlich in Burgund, Tief Schwarz und Marineblau zeichnet sich die Jacke durch zwei Fronttaschen mit dem charakteristischen Webdetail von Bint Saeed aus, inspiriert von ',
      ' — einem der ältesten traditionellen Handwerke der VAE. Generationen lang webten Emiratis Dattelpalmenblätter zu funktionalen und dekorativen Objekten; Al Khous ist ein dauerhafter Ausdruck des Kulturerbes. Durch zeitgenössisches Schneiderhandwerk neu interpretiert, bringt dieses Detail Textur und Handwerk bei klaren, eleganten Linien.',
    ),
    knottedLinesParagraph(
      'Mit den charakteristischen goldfarbenen ',
      '-Knöpfen von Bint Saeed veredelt, trägt die Jacke einen der dauerhaften Design-Codes des Hauses. Inspiriert von den Verbindungen zwischen Generationen steht jeder Knopf für Geschichten, Werte und Traditionen, die weitergetragen werden.',
    ),
    [
      {
        type: 'text',
        value:
          'Das passende Covent Garden Dress vervollständigt die Silhouette mit anmutigen Proportionen und zurückhaltender Eleganz. Vollständig gefüttert für weichen Tragekomfort, mit versteckten Seitentaschen und anpassbarer Länge. Für einen koordinierten Look mit der Jacke konzipiert, kann das Kleid auch solo getragen werden.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'In Abu Dhabi geschaffen, spiegelt das Covent Garden Signature Set die Vision von Bint Saeed wider, Elemente des emiratischen Erbes in zeitgenössische Damenmode für Frauen weltweit zu tragen — für Frauen, die raffiniertes Schneiderhandwerk, bedeutungsvolles Handwerk und Kleidung schätzen, die mühelos zwischen Anlässen wechselt.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Über Saisons hinaus relevant, ist das Covent Garden Signature Set ein zeitgenössischer Ausdruck koordinierter Garderobe — für Frauen, die verstehen, dass die besten Garderoben nicht durch mehr Besitz, sondern durch bessere Wahl entstehen.',
      },
    ],
  ],
  nl: [
    [
      {
        type: 'text',
        value:
          'De beste garderobes worden niet gebouwd door meer te kopen, maar door stukken te kiezen die bij elke keer dat u uw kast opent meer mogelijkheden creëren.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Het Covent Garden Signature Set is een eigentijds tweedelig set met de Covent Garden Dress en een kort tailored jasje. Ontworpen voor de momenten van het dagelijks leven — werk, elegante lunches, afternoon tea, diners en culturele evenementen — biedt het een verfijnd silhouet zonder ooit overdressed te lijken.',
      },
    ],
    alKhousParagraph(
      'Verkrijgbaar in Bourgondisch, Diep Zwart en Marineblauw, onderscheidt het jasje zich door twee voorzakken met het kenmerkende geweven detail van Bint Saeed, geïnspireerd door ',
      ' — een van de oudste traditionele ambachten van de VAE. Generaties lang weefden Emirati’s dadelpalmbladeren tot functionele en decoratieve objecten; Al Khous is een blijvende uitdrukking van cultureel erfgoed. Herinterpreteerd door eigentijdse kleermakerskunst brengt dit detail textuur en vakmanschap met schone, elegante lijnen.',
    ),
    knottedLinesParagraph(
      'Afgewerkt met de kenmerkende gouden ',
      '-knopen van Bint Saeed, draagt het jasje een van de blijvende designcodes van het huis. Geïnspireerd door de banden die generaties verbinden, vertegenwoordigt elke knoop verhalen, waarden en tradities die worden doorgegeven.',
    ),
    [
      {
        type: 'text',
        value:
          'De bijpassende Covent Garden Dress voltooit het silhouet met sierlijke verhoudingen en ingetogen elegantie. Volledig gevoerd voor zacht comfort, met verborgen zijzakken en aanpasbare lengte. Ontworpen voor een gecoördineerde look met het jasje, kan de jurk ook solo worden gedragen.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Gecreëerd in Abu Dhabi weerspiegelt het Covent Garden Signature Set de visie van Bint Saeed om elementen van Emirati erfgoed naar eigentijdse damesmode voor vrouwen wereldwijd te dragen — voor wie verfijnde kleermakerskunst, betekenisvol vakmanschap en kleding waardeert die moeiteloos tussen gelegenheden beweegt.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Ontworpen om relevant te blijven voorbij seizoenen, is het Covent Garden Signature Set een eigentijdse uitdrukking van gecoördineerd aankleden — voor vrouwen die begrijpen dat de beste garderobes niet door meer bezit, maar door betere keuze worden gebouwd.',
      },
    ],
  ],
  pt: [
    [
      {
        type: 'text',
        value:
          'Os melhores armários não se constroem comprando mais, mas escolhendo peças que criam mais possibilidades cada vez que abre o armário.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'O Covent Garden Signature Set é um conjunto contemporâneo de duas peças com o Covent Garden Dress e um casaco tailored de manga curta. Concebido para os momentos do dia a dia — trabalho, almoços elegantes, chá da tarde, jantares e eventos culturais — oferece uma silhueta refinada sem nunca parecer excessivamente formal.',
      },
    ],
    alKhousParagraph(
      'Disponível em Borgonha, Preto Profundo e Azul-Marinho, o casaco distingue-se por dois bolsos frontais com o detalhe tecido signature da Bint Saeed inspirado em ',
      ', um dos ofícios tradicionais mais antigos dos Emirados Árabes Unidos. Durante gerações, os emiratis teceram folhas de palmeira em objetos funcionais e decorativos, fazendo do Al Khous uma expressão duradoura do património cultural. Reinterpretado através de alfaiataria contemporânea, este detalhe introduz textura e artesanato mantendo linhas limpas e elegantes.',
    ),
    knottedLinesParagraph(
      'Acabado com os botões dourados signature ',
      ' da Bint Saeed, o casaco carrega um dos códigos de design duradouros da casa. Inspirados nas ligações que unem gerações, cada botão representa histórias, valores e tradições transmitidas.',
    ),
    [
      {
        type: 'text',
        value:
          'O Covent Garden Dress coordenado completa a silhueta com proporções graciosas e elegância discreta. Totalmente forrado para toque macio e conforto duradouro, apresenta bolsos laterais ocultos e permite ajustar o comprimento. Concebido para um look coordenado com o casaco, o vestido pode ser usado também sozinho.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Criado em Abu Dhabi, o Covent Garden Signature Set reflete a visão da Bint Saeed de levar elementos do património emirati à moda feminina contemporânea para mulheres em todo o mundo — para quem aprecia alfaiataria refinada, artesanato com significado e roupa que transita sem esforço entre ocasiões.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Concebido para permanecer relevante para além das estações, o Covent Garden Signature Set é uma expressão contemporânea de vestir coordenado — para mulheres que compreendem que os melhores armários não se constroem possuindo mais, mas escolhendo melhor.',
      },
    ],
  ],
  id: [
    [
      {
        type: 'text',
        value:
          'Garderobe terbaik tidak dibangun dengan membeli lebih banyak, melainkan memilih potongan yang menciptakan lebih banyak kemungkinan setiap kali Anda membuka lemari.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Covent Garden Signature Set adalah set kontemporer dua potong dengan Covent Garden Dress dan jaket tailored lengan pendek. Dirancang untuk momen kehidupan sehari-hari — kerja, makan siang elegan, afternoon tea, makan malam, dan acara budaya — menawarkan siluet halus tanpa pernah terasa berlebihan.',
      },
    ],
    alKhousParagraph(
      'Tersedia dalam Burgundy, Deep Black, dan Navy Blue, jaket dibedakan oleh dua saku depan dengan detail tenun signature Bint Saeed yang terinspirasi ',
      ', salah satu kerajinan tradisional tertua UEA. Selama generasi, orang Emirati menenun daun pohon kurma menjadi benda fungsional dan dekoratif, menjadikan Al Khous ekspresi abadi warisan budaya. Ditafsirkan ulang melalui tailoring kontemporer, detail ini memperkenalkan tekstur dan kerajinan sambil mempertahankan garis bersih dan elegan.',
    ),
    knottedLinesParagraph(
      'Dihiasi kancing emas signature ',
      ' Bint Saeed, jaket membawa salah satu kode desain abadi rumah. Terinspirasi oleh ikatan yang menyatukan generasi, setiap kancing mewakili cerita, nilai, dan tradisi yang terus dibawa.',
    ),
    [
      {
        type: 'text',
        value:
          'Covent Garden Dress yang selaras melengkapi siluet dengan proporsi anggun dan elegansi understated. Berlapis sepenuhnya untuk sentuhan lembut dan kenyamanan tahan lama, dengan saku samping tersembunyi dan panjang yang dapat disesuaikan. Dirancang untuk tampilan terkoordinasi dengan jaket, gaun juga dapat dikenakan sendiri.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Diciptakan di Abu Dhabi, Covent Garden Signature Set mencerminkan visi Bint Saeed membawa elemen warisan Emirati ke busana wanita kontemporer untuk wanita di seluruh dunia — bagi mereka yang menghargai tailoring halus, kerajinan bermakna, dan pakaian yang berpindah dengan mudah antar kesempatan.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Dirancang untuk tetap relevan melampaui musim, Covent Garden Signature Set adalah ekspresi kontemporer berpakaian terkoordinasi — bagi wanita yang memahami bahwa garderobe terbaik tidak dibangun dengan memiliki lebih banyak, melainkan memilih lebih baik.',
      },
    ],
  ],
  ms: [
    [
      {
        type: 'text',
        value:
          'Almari pakaian terbaik tidak dibina dengan membeli lebih banyak, tetapi memilih kepingan yang mencipta lebih banyak kemungkinan setiap kali anda membuka almari.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Covent Garden Signature Set ialah set kontemporari dua keping dengan Covent Garden Dress dan jaket tailored lengan pendek. Direka untuk detik kehidupan harian — kerja, makan tengah hari elegan, teh petang, makan malam, dan acara budaya — menawarkan siluet halus tanpa kelihatan terlalu berpakaian.',
      },
    ],
    alKhousParagraph(
      'Tersedia dalam Burgundy, Deep Black, dan Navy Blue, jaket dibezakan dengan dua poket hadapan dengan butiran tenunan signature Bint Saeed yang diilhamkan ',
      ', salah satu kraf tradisional tertua UAE. Selama generasi, orang Emirati menenun daun pokok kurma menjadi objek fungsian dan hiasan, menjadikan Al Khous ungkapan abadi warisan budaya. Ditafsir semula melalui jahitan kontemporari, butiran ini memperkenalkan tekstur dan kraf sambil mengekalkan garisan bersih dan elegan.',
    ),
    knottedLinesParagraph(
      'Disiapkan dengan butang emas signature ',
      ' Bint Saeed, jaket membawa salah satu kod reka bentuk kekal rumah. Diilhamkan oleh ikatan yang menyatukan generasi, setiap butang mewakili cerita, nilai, dan tradisi yang dibawa ke hadapan.',
    ),
    [
      {
        type: 'text',
        value:
          'Covent Garden Dress yang sepadan melengkapkan siluet dengan perkadaran anggun dan keanggunan understated. Berlapis sepenuhnya untuk sentuhan lembut dan keselesaan tahan lama, dengan poket sisi tersembunyi dan panjang boleh disesuaikan. Direka untuk penampilan terkoordinasi dengan jaket, gaun juga boleh dipakai sendiri.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Dicipta di Abu Dhabi, Covent Garden Signature Set mencerminkan visi Bint Saeed membawa elemen warisan Emirati ke fesyen wanita kontemporari untuk wanita di seluruh dunia — bagi mereka yang menghargai jahitan halus, kraf bermakna, dan pakaian yang bergerak dengan mudah antara majlis.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Direka untuk kekal relevan melampaui musim, Covent Garden Signature Set ialah ungkapan kontemporari berpakaian terkoordinasi — bagi wanita yang memahami bahawa almari pakaian terbaik tidak dibina dengan memiliki lebih banyak, tetapi memilih dengan lebih baik.',
      },
    ],
  ],
}

const JACKET_TITLE: Record<AppLocale, string> = {
  en: 'Jacket',
  ar: 'الجاكيت',
  fr: 'Veste',
  it: 'Giacca',
  es: 'Chaqueta',
  ru: 'Жакет',
  zh: '夹克',
  de: 'Jacke',
  nl: 'Jasje',
  pt: 'Casaco',
  id: 'Jaket',
  ms: 'Jaket',
}

const DRESS_TITLE: Record<AppLocale, string> = {
  en: 'Dress',
  ar: 'الفستان',
  fr: 'Robe',
  it: 'Abito',
  es: 'Vestido',
  ru: 'Платье',
  zh: '连衣裙',
  de: 'Kleid',
  nl: 'Jurk',
  pt: 'Vestido',
  id: 'Gaun',
  ms: 'Gaun',
}

const COLOUR_LINE: Record<AppLocale, (colorName?: string) => string> = {
  en: (color) =>
    color
      ? color.toLowerCase().includes('black')
        ? 'Colour: Deep Black'
        : `Colour: ${color}`
      : 'Colour: Burgundy, Deep Black, or Navy Blue',
  ar: (color) =>
    color
      ? `اللون: ${localizedColorName(color, 'ar')}`
      : `الألوان: ${COLOURS.map((c) => localizedColorName(c, 'ar')).join('، ')}`,
  fr: (color) =>
    color
      ? `Couleur : ${localizedColorName(color, 'fr')}`
      : 'Couleur : Bourgogne, Noir profond ou Bleu marine',
  it: (color) =>
    color
      ? `Colore: ${localizedColorName(color, 'it')}`
      : 'Colore: Borgogna, Nero profondo o Blu navy',
  es: (color) =>
    color
      ? `Color: ${localizedColorName(color, 'es')}`
      : 'Color: Burdeos, Negro profundo o Azul marino',
  ru: (color) =>
    color
      ? `Цвет: ${localizedColorName(color, 'ru')}`
      : 'Цвет: Burgundy, Deep Black или Navy Blue',
  zh: (color) =>
    color
      ? `颜色：${localizedColorName(color, 'zh')}`
      : '颜色：酒红、深黑或海军蓝',
  de: (color) =>
    color
      ? `Farbe: ${localizedColorName(color, 'de')}`
      : 'Farbe: Burgund, Tief Schwarz oder Marineblau',
  nl: (color) =>
    color
      ? `Kleur: ${localizedColorName(color, 'nl')}`
      : 'Kleur: Bourgondisch, Diep Zwart of Marineblauw',
  pt: (color) =>
    color
      ? `Cor: ${localizedColorName(color, 'pt')}`
      : 'Cor: Borgonha, Preto Profundo ou Azul-Marinho',
  id: (color) =>
    color
      ? `Warna: ${localizedColorName(color, 'id')}`
      : 'Warna: Burgundy, Deep Black, atau Navy Blue',
  ms: (color) =>
    color
      ? `Warna: ${localizedColorName(color, 'ms')}`
      : 'Warna: Burgundy, Deep Black, atau Navy Blue',
}

const JACKET_ITEMS: Record<AppLocale, (colourLine: string) => string[]> = {
  en: (colour) => [
    'Tailored short-sleeve jacket with a refined contemporary silhouette',
    'Round neckline',
    'Front closure with Bint Saeed signature gold-tone Knotted Line buttons',
    'Two front pockets with Bint Saeed signature Al Khous-inspired woven pocket flaps',
    'Light shoulder padding for subtle structure',
    'Fully lined with a soft crepe lining for exceptional comfort and a smooth feel',
    colour,
  ],
  ar: () => [
    'جاكيت مفصّل بأكمام قصيرة',
    'جيبان أماميان بتفاصيل نسيج مستوحاة من Al Khous',
    'أزرار Knotted Lines الذهبية المميزة',
    'مبطّن بالكامل',
  ],
  fr: (colour) => [
    'Veste courte ajustée à silhouette contemporaine raffinée',
    'Col rond',
    'Fermeture avant avec boutons dorés signature Knotted Line de Bint Saeed',
    'Deux poches avant avec rabats tissés inspirés d’Al Khous',
    'Légèrement structurée aux épaules',
    'Entièrement doublée d’un crêpe doux',
    colour,
  ],
  it: (colour) => [
    'Giacca corta tailored con silhouette contemporanea raffinata',
    'Scollo rotondo',
    'Chiusura frontale con bottoni dorati signature Knotted Line di Bint Saeed',
    'Due tasche frontali con pattine tessute ispirate ad Al Khous',
    'Leggera struttura alle spalle',
    'Completamente foderata in crepe morbido',
    colour,
  ],
  es: (colour) => [
    'Chaqueta de manga corta tailored con silueta contemporánea refinada',
    'Escote redondo',
    'Cierre frontal con botones dorados signature Knotted Line de Bint Saeed',
    'Dos bolsillos frontales con solapas tejidas inspiradas en Al Khous',
    'Ligero acolchado en hombros',
    'Completamente forrada con crepé suave',
    colour,
  ],
  ru: (colour) => [
    'Укороченный tailored-жакет с утончённым современным силуэтом',
    'Круглый вырез',
    'Фронтальная застёжка с фирменными золотистыми пуговицами Knotted Line Bint Saeed',
    'Два передних кармана с ткаными клапанами в духе Al Khous',
    'Лёгкая структура на плечах',
    'Полная подкладка из мягкого крепа',
    colour,
  ],
  zh: (colour) => [
    '短款修身夹克，精致当代廓形',
    '圆领',
    '前襟配 BINT SAEED 承悦 标志性金色 Knotted Line 纽扣',
    '两枚前袋，饰 Al Khous 灵感编织袋盖',
    '轻微肩垫塑造结构',
    '全里衬柔软绉绸',
    colour,
  ],
  de: (colour) => [
    'Kurzärmelige tailored Jacke mit raffinierter zeitgenössischer Silhouette',
    'Rundhalsausschnitt',
    'Frontverschluss mit charakteristischen goldfarbenen Knotted-Line-Knöpfen von Bint Saeed',
    'Zwei Fronttaschen mit Webklappen inspiriert von Al Khous',
    'Leichte Schulterpolsterung für subtile Struktur',
    'Vollständig mit weichem Krepe gefüttert',
    colour,
  ],
  nl: (colour) => [
    'Kort tailored jasje met verfijnd eigentijds silhouet',
    'Ronde halslijn',
    'Voorsluiting met kenmerkende gouden Knotted Line-knopen van Bint Saeed',
    'Twee voorzakken met geweven flappen geïnspireerd op Al Khous',
    'Lichte schouderstructuur',
    'Volledig gevoerd met zacht crêpe',
    colour,
  ],
  pt: (colour) => [
    'Casaco tailored de manga curta com silhueta contemporânea refinada',
    'Decote redondo',
    'Fecho frontal com botões dourados signature Knotted Line da Bint Saeed',
    'Dois bolsos frontais com abas tecidas inspiradas em Al Khous',
    'Leve estrutura nos ombros',
    'Totalmente forrado com crepe macio',
    colour,
  ],
  id: (colour) => [
    'Jaket tailored lengan pendek dengan siluet kontemporer halus',
    'Leher bulat',
    'Penutup depan dengan kancing Knotted Line emas signature Bint Saeed',
    'Dua saku depan dengan flap tenun terinspirasi Al Khous',
    'Struktur bahu ringan',
    'Berlapis krepe lembut sepenuhnya',
    colour,
  ],
  ms: (colour) => [
    'Jaket tailored lengan pendek dengan siluet kontemporari halus',
    'Leher bulat',
    'Penutup hadapan dengan butang Knotted Line emas signature Bint Saeed',
    'Dua poket hadapan dengan flap tenunan diilhamkan Al Khous',
    'Struktur bahu ringan',
    'Berlapis krepe lembut sepenuhnya',
    colour,
  ],
}

const DRESS_ITEMS: Record<AppLocale, (colourLine: string) => string[]> = {
  en: (colour) => [
    'Coordinating fitted maxi dress',
    'Round neckline',
    'Concealed back zip closure',
    'Two hidden side seam pockets',
    'Fully lined with a soft crepe lining for exceptional comfort and a smooth feel',
    colour,
  ],
  ar: () => [
    'فستان Covent Garden Dress بقصة ناعمة',
    'رقبة دائرية نظيفة وجيوب جانبية مخفية',
    'مبطّن ببطانة كريب ناعمة',
  ],
  fr: (colour) => [
    'Robe maxi coordonnée fitted',
    'Col rond',
    'Fermeture éclair dissimulée au dos',
    'Deux poches latérales cachées',
    'Entièrement doublée d’un crêpe doux',
    colour,
  ],
  it: (colour) => [
    'Abito maxi coordinato fitted',
    'Scollo rotondo',
    'Chiusura lampo posteriore nascosta',
    'Due tasche laterali nascoste',
    'Completamente foderato in crepe morbido',
    colour,
  ],
  es: (colour) => [
    'Vestido maxi coordinado fitted',
    'Escote redondo',
    'Cierre de cremallera oculto en la espalda',
    'Dos bolsillos laterales ocultos',
    'Completamente forrado con crepé suave',
    colour,
  ],
  ru: (colour) => [
    'Координирующее приталенное макси-платье',
    'Круглый вырез',
    'Скрытая застёжка-молния сзади',
    'Два скрытых боковых кармана',
    'Полная подкладка из мягкого крепа',
    colour,
  ],
  zh: (colour) => [
    '配套修身长款连衣裙',
    '圆领',
    '背部隐藏拉链',
    '两个隐藏侧缝口袋',
    '全里衬柔软绉绸',
    colour,
  ],
  de: (colour) => [
    'Passendes tailliertes Maxikleid',
    'Rundhalsausschnitt',
    'Verdeckter Reißverschluss im Rücken',
    'Zwei versteckte Seitentaschen',
    'Vollständig mit weichem Krepe gefüttert',
    colour,
  ],
  nl: (colour) => [
    'Bijpassende getailleerde maxi-jurk',
    'Ronde halslijn',
    'Verborgen ritssluiting achteraan',
    'Twee verborgen zijzakken',
    'Volledig gevoerd met zacht crêpe',
    colour,
  ],
  pt: (colour) => [
    'Vestido maxi coordenado fitted',
    'Decote redondo',
    'Fecho de correr oculto nas costas',
    'Dois bolsos laterais ocultos',
    'Totalmente forrado com crepe macio',
    colour,
  ],
  id: (colour) => [
    'Gaun maxi koordinasi fitted',
    'Leher bulat',
    'Ritsleting tersembunyi di belakang',
    'Dua saku samping tersembunyi',
    'Berlapis krepe lembut sepenuhnya',
    colour,
  ],
  ms: (colour) => [
    'Gaun maxi sepadan fitted',
    'Leher bulat',
    'Zip tersembunyi di belakang',
    'Dua poket sisi tersembunyi',
    'Berlapis krepe lembut sepenuhnya',
    colour,
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
    'Available sizes: XS, S, M, L, XL',
    'Jacket length: 69 cm / 27.2 inches',
    'Dress length: 138 cm / 54.5 inches',
    'Model height: 155 cm / 61 inches',
    'Model wears size XS',
    'Dress length can be adjusted upon request',
  ],
  ar: [
    'طول الجاكيت: 70 سم (مقاس M)',
    'طول الفستان: 148 سم (مقاس M)',
    'قصة مريحة',
    'طول مخصص متاح عند الطلب',
  ],
  fr: [
    'Tailles disponibles : XS, S, M, L, XL',
    'Longueur veste : 69 cm / 27,2 pouces',
    'Longueur robe : 138 cm / 54,5 pouces',
    'Taille du mannequin : 155 cm / 61 pouces',
    'Le mannequin porte la taille XS',
    'Longueur de la robe ajustable sur demande',
  ],
  it: [
    'Taglie disponibili: XS, S, M, L, XL',
    'Lunghezza giacca: 69 cm / 27,2 pollici',
    'Lunghezza abito: 138 cm / 54,5 pollici',
    'Altezza modella: 155 cm / 61 pollici',
    'La modella indossa taglia XS',
    'Lunghezza abito regolabile su richiesta',
  ],
  es: [
    'Tallas disponibles: XS, S, M, L, XL',
    'Largo chaqueta: 69 cm / 27,2 pulgadas',
    'Largo vestido: 138 cm / 54,5 pulgadas',
    'Altura de la modelo: 155 cm / 61 pulgadas',
    'La modelo lleva talla XS',
    'Largo del vestido ajustable bajo pedido',
  ],
  ru: [
    'Доступные размеры: XS, S, M, L, XL',
    'Длина жакета: 69 см / 27,2 дюйма',
    'Длина платья: 138 см / 54,5 дюйма',
    'Рост модели: 155 см / 61 дюйм',
    'На модели размер XS',
    'Длина платья регулируется по запросу',
  ],
  zh: [
    '可选尺码：XS、S、M、L、XL',
    '夹克长度：69 厘米 / 27.2 英寸',
    '裙长：138 厘米 / 54.5 英寸',
    '模特身高：155 厘米 / 61 英寸',
    '模特穿着 XS 码',
    '可按需调整裙长',
  ],
  de: [
    'Verfügbare Größen: XS, S, M, L, XL',
    'Jackenlänge: 69 cm / 27,2 Zoll',
    'Kleiderlänge: 138 cm / 54,5 Zoll',
    'Modellgröße: 155 cm / 61 Zoll',
    'Das Model trägt Größe XS',
    'Kleiderlänge auf Anfrage anpassbar',
  ],
  nl: [
    'Beschikbare maten: XS, S, M, L, XL',
    'Jasje lengte: 69 cm / 27,2 inch',
    'Jurklengte: 138 cm / 54,5 inch',
    'Model lengte: 155 cm / 61 inch',
    'Model draagt maat XS',
    'Jurklengte aanpasbaar op aanvraag',
  ],
  pt: [
    'Tamanhos disponíveis: XS, S, M, L, XL',
    'Comprimento do casaco: 69 cm / 27,2 polegadas',
    'Comprimento do vestido: 138 cm / 54,5 polegadas',
    'Altura da modelo: 155 cm / 61 polegadas',
    'A modelo usa tamanho XS',
    'Comprimento do vestido ajustável sob pedido',
  ],
  id: [
    'Ukuran tersedia: XS, S, M, L, XL',
    'Panjang jaket: 69 cm / 27,2 inci',
    'Panjang gaun: 138 cm / 54,5 inci',
    'Tinggi model: 155 cm / 61 inci',
    'Model memakai ukuran XS',
    'Panjang gaun dapat disesuaikan atas permintaan',
  ],
  ms: [
    'Saiz tersedia: XS, S, M, L, XL',
    'Panjang jaket: 69 cm / 27.2 inci',
    'Panjang gaun: 138 cm / 54.5 inci',
    'Tinggi model: 155 cm / 61 inci',
    'Model memakai saiz XS',
    'Panjang gaun boleh disesuaikan atas permintaan',
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

function jacketGroupTitle(locale: AppLocale, colorName?: string): string {
  const base = JACKET_TITLE[locale]
  if (!colorName) return base
  const resolved = localizedColorName(colorName, locale)
  if (locale === 'ar') return `${base} — ${resolved}`
  if (locale === 'zh') return `${base} — ${resolved}`
  return `${base} — ${resolved}`
}

export function buildCoventGardenSignatureSetDetailGroups(
  locale: AppLocale,
  colorName?: string,
): PdpDetailGroup[] {
  const colourLine = COLOUR_LINE[locale](colorName)
  return [
    {
      title: jacketGroupTitle(locale, colorName),
      items: JACKET_ITEMS[locale](colourLine),
    },
    {
      title: DRESS_TITLE[locale],
      items: DRESS_ITEMS[locale](colourLine),
    },
    getHouseCodesDetailGroup('knotted-line-only', locale),
  ]
}

export function buildCoventGardenSignatureSetPdpContent(
  locale: AppLocale,
  colorName?: string,
): ProductPdpContent {
  const introParagraphParts = INTRO_BY_LOCALE[locale]
  return {
    introParagraphParts,
    introParagraphs: pdpIntroParagraphsToPlainText(introParagraphParts),
    productDetails: [],
    productDetailGroups: buildCoventGardenSignatureSetDetailGroups(locale, colorName),
    compositionGroups: [
      {
        title: JACKET_TITLE[locale],
        items: [COMPOSITION_OUTER[locale], COMPOSITION_LINING[locale]],
      },
      {
        title: DRESS_TITLE[locale],
        items: [COMPOSITION_OUTER[locale], COMPOSITION_LINING[locale]],
      },
    ],
    careDetails: [CARE[locale]],
    fitAndSizeDetails: [...FIT_AND_SIZE[locale]],
    originDetails: [ORIGIN[locale]],
    faq: getCoventGardenSignatureSetFaq(locale),
  }
}
