import type { AppLocale } from '@/lib/i18n/routing'

export type StoneVariantLocaleContent = {
  headline: string
  introP1: string
  introP4: string
  stoneOrigin: string
  beadDetail: string
  materialStone: string
  strandLabel: string
  stoneLabel: string
  variationNote: string
  introP2Style: 'evening' | 'mood'
  limitedEdition: boolean
}

export type StoneVariantId =
  | 'signature-strand-tiger-eye'
  | 'signature-strand-onyx'
  | 'signature-strand-sunstone'
  | 'signature-strand-fuchsia-jade'
  | 'signature-strand-orange-jade'
  | 'signature-strand-jade'
  | 'signature-strand-blue-aventurine'
  | 'signature-strand-rose-quartz'
  | 'signature-strand-malachite'
  | 'signature-strand-lapis-lazuli'
  | 'signature-strand-amethyst-hearts'
  | 'signature-strand-jade-hearts'

type VariantPack = Record<AppLocale, StoneVariantLocaleContent>

const TIGER_EYE: VariantPack = {
  en: {
    headline: 'Tiger Eye Signature Strands',
    introP1:
      'The Tiger Eye Signature Strands introduce warmth, depth and subtle movement to selected Bint Saeed creations. Hand-assembled in Abu Dhabi from natural Tiger Eye gemstones and finished with Bint Saeed’s signature gold-tone Knotted Line elements, they allow a familiar silhouette to be reimagined through one thoughtful detail.',
    introP4:
      'Tiger Eye is admired for its remarkable natural chatoyancy, an optical effect that allows the stone to catch and reflect light as it moves. Between every gemstone, faceted gold-plated Hematite accents introduce delicate brilliance, creating a beautiful interplay of light throughout the strand. Because every gemstone is naturally formed, each Signature Strand is entirely unique in its colour, markings and character.',
    stoneOrigin:
      'Tiger Eye is primarily sourced from South Africa and is admired for its rich golden-brown tones and naturally occurring chatoyancy, often referred to as the “cat’s eye” effect. Every gemstone displays its own distinctive markings, colour variations and natural patterns, making every Signature Strand unique.',
    beadDetail: 'Natural Tiger Eye gemstone beads (approximately 7 mm)',
    materialStone: 'Natural Tiger Eye gemstones',
    strandLabel: 'Tiger Eye Signature Strands',
    stoneLabel: 'Tiger Eye',
    variationNote:
      'Variations in colour, markings and chatoyancy are part of what makes every Signature Strand unique.',
    introP2Style: 'mood',
    limitedEdition: false,
  },
  ar: {
    headline: 'ستراندات عين النمر Signature Strands',
    introP1:
      'تقدّم ستراندات عين النمر Signature Strands دفئاً وعمقاً وحركة رقيقة إلى مختارات من إبداعات Bint Saeed. تُجمَّع يدوياً في أبوظبي من أحجار عين النمر الطبيعية وتُنهى بعناصر Knotted Line الذهبية الحصرية من Bint Saeed، لتُعيد تخيّل صورة مألوفة من خلال تفصيلة واحدة مدروسة.',
    introP4:
      'يُعجَب بعين النمر لخاصية الشاتويانسي الطبيعية المذهلة، وهي تأثير بصري يجعل الحجر يلتقط الضوء ويعكسه مع الحركة. بين كل حجر كريم، تضيف لمسات الهيماتيت المطلية ذهباً والمقطّعة بريقاً رقيقاً، مما يخلق تفاعلاً جميلاً للضوء على طول الستراند. ولأن كل حجر يتشكّل طبيعياً، يكون كل Signature Strand فريداً تماماً في لونه وعلاماته وطابعه.',
    stoneOrigin:
      'يُستخرج عين النمر أساساً من جنوب أفريقيا ويُقدَّر لدرجاته الذهبية البنية الغنية والشاتويانسي الطبيعي، المعروف أحياناً بتأثير «عين القط». يحمل كل حجر علاماته المميزة وتباينات لونه وأنماطه الطبيعية، ما يجعل كل Signature Strand فريداً.',
    beadDetail: 'خرز أحجار عين النمر الطبيعية (قطرها تقريباً 7 مم)',
    materialStone: 'أحجار عين النمر الطبيعية',
    strandLabel: 'ستراندات عين النمر Signature Strands',
    stoneLabel: 'عين النمر',
    variationNote: 'تباينات اللون والعلامات والشاتويانسي جزء مما يجعل كل Signature Strand فريداً.',
    introP2Style: 'mood',
    limitedEdition: false,
  },
  fr: {
    headline: 'Signature Strands Œil de Tigre',
    introP1:
      'Les Signature Strands Œil de Tigre apportent chaleur, profondeur et mouvement subtil aux créations Bint Saeed sélectionnées. Assemblés à la main à Abu Dhabi à partir de pierres naturelles Œil de Tigre et finis avec les éléments Knotted Line dorés signature de Bint Saeed, ils permettent de réinventer une silhouette familière par un seul détail réfléchi.',
    introP4:
      'L’Œil de Tigre est admiré pour son chatoyance naturelle remarquable, un effet optique qui permet à la pierre de capter et de refléter la lumière au mouvement. Entre chaque gemme, des accents d’Hématite plaquée or facettés introduisent une brillance délicate, créant un jeu de lumière tout au long du fil. Chaque pierre étant formée naturellement, chaque Signature Strand est entièrement unique par sa couleur, ses marques et son caractère.',
    stoneOrigin:
      'L’Œil de Tigre provient principalement d’Afrique du Sud et est apprécié pour ses tons doré-brun riches et sa chatoyance naturelle, souvent appelée effet « œil de chat ». Chaque gemme affiche ses marques distinctives, variations de couleur et motifs naturels, rendant chaque Signature Strand unique.',
    beadDetail: 'Perles en pierre naturelle Œil de Tigre (environ 7 mm)',
    materialStone: 'Pierres naturelles Œil de Tigre',
    strandLabel: 'Signature Strands Œil de Tigre',
    stoneLabel: 'Œil de Tigre',
    variationNote:
      'Les variations de couleur, de marques et de chatoyance font partie de ce qui rend chaque Signature Strand unique.',
    introP2Style: 'mood',
    limitedEdition: false,
  },
  it: {
    headline: 'Signature Strands Occhio di Tigre',
    introP1:
      'I Signature Strands Occhio di Tigre introducono calore, profondità e movimento sottile nelle creazioni Bint Saeed selezionate. Assemblati a mano ad Abu Dhabi con gemme naturali Occhio di Tigre e rifiniti con gli elementi Knotted Line dorati signature di Bint Saeed, permettono di reinterpretare una silhouette familiare attraverso un solo dettaglio ponderato.',
    introP4:
      'L’Occhio di Tigre è ammirato per la sua notevole chatoyance naturale, un effetto ottico che consente alla pietra di catturare e riflettere la luce nel movimento. Tra ogni gemma, accenti di Ematite placcata oro sfaccettati introducono una brillantezza delicata, creando un bel gioco di luce lungo il filo. Poiché ogni gemma è formata naturalmente, ogni Signature Strand è interamente unico nel colore, nelle venature e nel carattere.',
    stoneOrigin:
      'L’Occhio di Tigre proviene principalmente dal Sudafrica ed è apprezzato per i suoi ricchi toni dorato-marrone e la chatoyance naturale, spesso definita effetto «occhio di gatto». Ogni gemma mostra le proprie marcature distintive, variazioni di colore e motivi naturali, rendendo ogni Signature Strand unico.',
    beadDetail: 'Perle in pietra naturale Occhio di Tigre (circa 7 mm)',
    materialStone: 'Gemme naturali Occhio di Tigre',
    strandLabel: 'Signature Strands Occhio di Tigre',
    stoneLabel: 'Occhio di Tigre',
    variationNote:
      'Le variazioni di colore, marcature e chatoyance fanno parte di ciò che rende ogni Signature Strand unico.',
    introP2Style: 'mood',
    limitedEdition: false,
  },
  es: {
    headline: 'Signature Strands Ojo de Tigre',
    introP1:
      'Los Signature Strands Ojo de Tigre aportan calidez, profundidad y movimiento sutil a creaciones seleccionadas de Bint Saeed. Ensamblados a mano en Abu Dhabi con gemas naturales de Ojo de Tigre y acabados con los elementos Knotted Line dorados característicos de Bint Saeed, permiten reimaginar una silueta familiar mediante un solo detalle cuidado.',
    introP4:
      'El Ojo de Tigre es admirado por su notable chatoyancia natural, un efecto óptico que permite a la piedra captar y reflejar la luz al moverse. Entre cada gema, acentos de Hematita chapada en oro facetados introducen un brillo delicado, creando un hermoso juego de luz a lo largo del hilo. Como cada gema se forma de manera natural, cada Signature Strand es enteramente único en color, marcas y carácter.',
    stoneOrigin:
      'El Ojo de Tigre procede principalmente de Sudáfrica y es apreciado por sus ricos tonos dorado-marrón y su chatoyancia natural, a menudo llamada efecto «ojo de gato». Cada gema muestra sus marcas distintivas, variaciones de color y patrones naturales, haciendo único cada Signature Strand.',
    beadDetail: 'Cuentas de piedra natural Ojo de Tigre (aproximadamente 7 mm)',
    materialStone: 'Gemas naturales Ojo de Tigre',
    strandLabel: 'Signature Strands Ojo de Tigre',
    stoneLabel: 'Ojo de Tigre',
    variationNote:
      'Las variaciones de color, marcas y chatoyancia forman parte de lo que hace único cada Signature Strand.',
    introP2Style: 'mood',
    limitedEdition: false,
  },
  ru: {
    headline: 'Signature Strands «Тигровый глаз»',
    introP1:
      'Signature Strands «Тигровый глаз» привносят тепло, глубину и тонкое движение в избранные творения Bint Saeed. Собраны вручную в Абу-Даби из натуральных камней тигрового глаза и завершены фирменными золотистыми элементами Knotted Line от Bint Saeed — они позволяют по-новому увидеть привычный силуэт через одну продуманную деталь.',
    introP4:
      'Тигровый глаз ценят за выраженный натуральный эффект шатояжа — оптическое свойство, благодаря которому камень ловит и отражает свет при движении. Между каждой самоцветной бусиной фасетированные акценты из позолоченного гематита добавляют тонкое сияние, создавая красивую игру света вдоль нити. Поскольку каждый камень сформирован природой, каждый Signature Strand уникален по цвету, рисунку и характеру.',
    stoneOrigin:
      'Тигровый глаз добывают преимущественно в Южной Африке; его ценят за насыщенные золотисто-коричневые тона и естественный шатояж, известный как эффект «кошачьего глаза». Каждый камень имеет собственные узоры, оттенки и природные рисунки — поэтому каждый Signature Strand неповторим.',
    beadDetail: 'Бусины из натурального тигрового глаза (примерно 7 мм)',
    materialStone: 'Натуральные камни тигрового глаза',
    strandLabel: 'Signature Strands «Тигровый глаз»',
    stoneLabel: 'Тигровый глаз',
    variationNote:
      'Различия в цвете, рисунке и шатояже — часть того, что делает каждый Signature Strand уникальным.',
    introP2Style: 'mood',
    limitedEdition: false,
  },
  zh: {
    headline: '虎眼石 Signature Strands',
    introP1:
      '虎眼石 Signature Strands 为精选 Bint Saeed 作品注入温暖、层次与细腻动感。于阿布扎比以天然虎眼石手工组装，并以 Bint Saeed 标志性金色 Knotted Line 元素收尾，让熟悉的轮廓借由一处精心细节焕然一新。',
    introP4:
      '虎眼石以其卓越天然猫眼效应（chatoyancy）备受推崇——光线随动而流转反射。每颗宝石之间，镶嵌切面镀金赤铁矿点缀，为整条链饰带来精致光泽。因每颗宝石皆天然形成，每条 Signature Strand 在色泽、纹理与个性上皆独一无二。',
    stoneOrigin:
      '虎眼石主要产自南非，以浓郁金棕色调与自然猫眼效应著称。每颗宝石皆有独特纹理、色泽变化与自然纹样，使每条 Signature Strand 皆不相同。',
    beadDetail: '天然虎眼石珠（约 7 毫米）',
    materialStone: '天然虎眼石',
    strandLabel: '虎眼石 Signature Strands',
    stoneLabel: '虎眼石',
    variationNote: '色泽、纹理与猫眼效应的自然差异，正是每条 Signature Strand 独特之处。',
    introP2Style: 'mood',
    limitedEdition: false,
  },
  de: {
    headline: 'Tigerauge Signature Strands',
    introP1:
      'Die Tigerauge Signature Strands bringen Wärme, Tiefe und subtile Bewegung in ausgewählte Bint Saeed-Kreationen. Handmontiert in Abu Dhabi aus natürlichen Tigerauge-Edelsteinen und veredelt mit Bint Saeeds charakteristischen goldfarbenen Knotted Line-Elementen ermöglichen sie, eine vertraute Silhouette durch ein einziges durchdachtes Detail neu zu interpretieren.',
    introP4:
      'Tigerauge wird für seine bemerkenswerte natürliche Chatoyance bewundert – einen optischen Effekt, der das Licht beim Bewegen einfängt und reflektiert. Zwischen jedem Edelstein setzen facettierte, vergoldete Hämatit-Akzente zarte Brillanz und schaffen ein schönes Lichtspiel entlang des Strangs. Da jeder Stein natürlich entstanden ist, ist jeder Signature Strand in Farbe, Maserung und Charakter völlig einzigartig.',
    stoneOrigin:
      'Tigerauge stammt vor allem aus Südafrika und wird für seine reichen goldbraunen Töne und natürliche Chatoyance geschätzt, oft als „Katzenauge“-Effekt bezeichnet. Jeder Edelstein zeigt eigene Muster, Farbvariationen und natürliche Zeichnungen – jeder Signature Strand ist damit ein Unikat.',
    beadDetail: 'Natürliche Tigerauge-Edelsteinperlen (ca. 7 mm)',
    materialStone: 'Natürliche Tigerauge-Edelsteine',
    strandLabel: 'Tigerauge Signature Strands',
    stoneLabel: 'Tigerauge',
    variationNote:
      'Variationen in Farbe, Maserung und Chatoyance gehören zu dem, was jeden Signature Strand einzigartig macht.',
    introP2Style: 'mood',
    limitedEdition: false,
  },
  nl: {
    headline: 'Tijgeroog Signature Strands',
    introP1:
      'De Tijgeroog Signature Strands brengen warmte, diepte en subtiele beweging in geselecteerde Bint Saeed-creaties. Handmatig geassembleerd in Abu Dhabi van natuurlijke Tijgeroog-edelstenen en afgewerkt met Bint Saeeds kenmerkende goudkleurige Knotted Line-elementen, laten ze een vertrouwde silhouet opnieuw verbeelden via één doordacht detail.',
    introP4:
      'Tijgeroog wordt bewonderd om zijn opmerkelijke natuurlijke chatoyantie – een optisch effect waardoor de steen licht vangt en weerkaatst bij beweging. Tussen elke edelsteen brengen gefacetteerde, vergulde Hematiet-accenten delicate glans, wat een mooi lichtspel langs de streng creëert. Omdat elke edelsteen natuurlijk gevormd is, is elke Signature Strand volledig uniek in kleur, tekening en karakter.',
    stoneOrigin:
      'Tijgeroog wordt voornamelijk gewonnen in Zuid-Afrika en wordt gewaardeerd om rijke goudbruine tonen en natuurlijke chatoyantie, vaak het «kattenoog»-effect genoemd. Elke edelsteen toont eigen tekeningen, kleurvariaties en natuurlijke patronen, waardoor elke Signature Strand uniek is.',
    beadDetail: 'Natuurlijke Tijgeroog-edelstenen kralen (ongeveer 7 mm)',
    materialStone: 'Natuurlijke Tijgeroog-edelstenen',
    strandLabel: 'Tijgeroog Signature Strands',
    stoneLabel: 'Tijgeroog',
    variationNote:
      'Variaties in kleur, tekening en chatoyantie maken deel uit van wat elke Signature Strand uniek maakt.',
    introP2Style: 'mood',
    limitedEdition: false,
  },
  pt: {
    headline: 'Signature Strands Olho de Tigre',
    introP1:
      'Os Signature Strands Olho de Tigre introduzem calor, profundidade e movimento subtil nas criações Bint Saeed selecionadas. Montados à mão em Abu Dhabi com gemas naturais de Olho de Tigre e finalizados com os elementos Knotted Line dourados assinatura da Bint Saeed, permitem reimaginar uma silhueta familiar através de um único detalhe cuidado.',
    introP4:
      'O Olho de Tigre é admirado pela sua notável chatoyância natural, um efeito óptico que permite à pedra captar e reflectir a luz em movimento. Entre cada gema, acentos de Hematite folheada a ouro facetados introduzem brilho delicado, criando um belo jogo de luz ao longo do fio. Como cada gema se forma naturalmente, cada Signature Strand é inteiramente único em cor, marcas e carácter.',
    stoneOrigin:
      'O Olho de Tigre provém principalmente da África do Sul e é apreciado pelos seus ricos tons dourado-acastanhados e chatoyância natural, muitas vezes designada efeito «olho de gato». Cada gema exibe as suas marcas distintivas, variações de cor e padrões naturais, tornando cada Signature Strand único.',
    beadDetail: 'Contas de pedra natural Olho de Tigre (aproximadamente 7 mm)',
    materialStone: 'Gemas naturais Olho de Tigre',
    strandLabel: 'Signature Strands Olho de Tigre',
    stoneLabel: 'Olho de Tigre',
    variationNote:
      'Variações de cor, marcas e chatoyância fazem parte do que torna cada Signature Strand único.',
    introP2Style: 'mood',
    limitedEdition: false,
  },
  id: {
    headline: 'Signature Strands Tiger Eye',
    introP1:
      'Signature Strands Tiger Eye menghadirkan kehangatan, kedalaman, dan gerakan halus pada kreasi Bint Saeed terpilih. Dirakit tangan di Abu Dhabi dari batu permata Tiger Eye alami dan diselesaikan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, mereka memungkinkan siluet yang sudah dikenal dibayangkan kembali melalui satu detail yang penuh pertimbangan.',
    introP4:
      'Tiger Eye dikagumi karena chatoyancy alaminya yang luar biasa — efek optik yang memungkinkan batu menangkap dan memantulkan cahaya saat bergerak. Di antara setiap batu permata, aksen Hematite berlapis emas berfaset menambahkan kilau halus, menciptakan permainan cahaya yang indah sepanjang strand. Karena setiap batu terbentuk secara alami, setiap Signature Strand sepenuhnya unik dalam warna, corak, dan karakternya.',
    stoneOrigin:
      'Tiger Eye terutama bersumber dari Afrika Selatan dan dihargai karena nada keemasan-cokelatnya yang kaya serta chatoyancy alami, sering disebut efek «mata kucing». Setiap batu permata menampilkan corak, variasi warna, dan pola alami yang khas, menjadikan setiap Signature Strand unik.',
    beadDetail: 'Manik batu permata Tiger Eye alami (sekitar 7 mm)',
    materialStone: 'Batu permata Tiger Eye alami',
    strandLabel: 'Signature Strands Tiger Eye',
    stoneLabel: 'Tiger Eye',
    variationNote:
      'Variasi warna, corak, dan chatoyancy merupakan bagian dari apa yang membuat setiap Signature Strand unik.',
    introP2Style: 'mood',
    limitedEdition: false,
  },
  ms: {
    headline: 'Signature Strands Tiger Eye',
    introP1:
      'Signature Strands Tiger Eye memperkenalkan kehangatan, kedalaman dan pergerakan halus kepada ciptaan Bint Saeed terpilih. Dipasang tangan di Abu Dhabi daripada batu permata Tiger Eye semula jadi dan disiapkan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, ia membolehkan siluet yang biasa dibayangkan semula melalui satu butiran yang dipikirkan dengan teliti.',
    introP4:
      'Tiger Eye dikagumi kerana chatoyancy semula jadinya yang luar biasa — kesan optik yang membolehkan batu menangkap dan memantulkan cahaya apabila bergerak. Di antara setiap batu permata, aksen Hematite bersalut emas berfaset memperkenalkan kilauan halus, mewujudkan permainan cahaya yang indah sepanjang strand. Memandangkan setiap batu terbentuk secara semula jadi, setiap Signature Strand benar-benar unik dalam warna, corak dan karakternya.',
    stoneOrigin:
      'Tiger Eye terutamanya bersumber dari Afrika Selatan dan dihargai kerana nada keemasan-perangnya yang kaya serta chatoyancy semula jadi, sering dirujuk sebagai kesan «mata kucing». Setiap batu permata mempamerkan corak, variasi warna dan corak semula jadi yang tersendiri, menjadikan setiap Signature Strand unik.',
    beadDetail: 'Manik batu permata Tiger Eye semula jadi (kira-kira 7 mm)',
    materialStone: 'Batu permata Tiger Eye semula jadi',
    strandLabel: 'Signature Strands Tiger Eye',
    stoneLabel: 'Tiger Eye',
    variationNote:
      'Variasi warna, corak dan chatoyancy merupakan sebahagian daripada apa yang menjadikan setiap Signature Strand unik.',
    introP2Style: 'mood',
    limitedEdition: false,
  },
}

const ONYX: VariantPack = {
  en: {
    headline: 'Onyx Signature Strands',
    introP1:
      'The Onyx Signature Strands introduce depth, contrast and understated elegance to selected Bint Saeed creations. Hand-assembled in Abu Dhabi from natural Black Onyx gemstones and finished with Bint Saeed’s signature gold-tone Knotted Line elements, they offer a refined way to transform a familiar silhouette through a single thoughtful detail.',
    introP4:
      'The rich black tones of natural Onyx create striking contrast against the gold-tone Knotted Line elements, while faceted gold-plated Hematite accents positioned between every gemstone capture and reflect light with subtle brilliance. Because every gemstone is naturally formed, each Signature Strand is entirely unique in its colour, markings and natural character.',
    stoneOrigin:
      'Black Onyx is sourced from regions including Brazil, India, Uruguay and Madagascar. Appreciated for its deep black colour and elegant polish, it has remained one of the world’s most enduring decorative gemstones for centuries. Every gemstone displays its own natural variations, ensuring every Signature Strand is one of a kind.',
    beadDetail: 'Natural Black Onyx gemstone beads (approximately 7 mm)',
    materialStone: 'Natural Black Onyx gemstones',
    strandLabel: 'Onyx Signature Strands',
    stoneLabel: 'Onyx',
    variationNote: 'Natural variations are part of what makes every Signature Strand unique.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ar: {
    headline: 'ستراندات الأونيكس Signature Strands',
    introP1:
      'تقدّم ستراندات الأونيكس Signature Strands عمقاً وتبايناً وأناقة رصينة إلى مختارات من إبداعات Bint Saeed. تُجمَّع يدوياً في أبوظبي من أحجار الأونيكس الأسود الطبيعية وتُنهى بعناصر Knotted Line الذهبية الحصرية من Bint Saeed، لتقدّم طريقة راقية لتحويل صورة مألوفة من خلال تفصيلة واحدة مدروسة.',
    introP4:
      'تخلق درجات الأونيكس الأسود الغنية تبايناً لافتاً مع عناصر Knotted Line الذهبية، بينما تلتقط لمسات الهيماتيت المطلية ذهباً والمقطّعة الموضوعة بين كل حجر الضوء وتعكسه ببريق رقيق. ولأن كل حجر يتشكّل طبيعياً، يكون كل Signature Strand فريداً تماماً في لونه وعلاماته وطابعه الطبيعي.',
    stoneOrigin:
      'يُستخرج الأونيكس الأسود من مناطق تشمل البرازيل والهند وأوروغواي ومدغشقر. يُقدَّر لونه الأسود العميق ولمعانه الأنيق، وقد بقي من أبرز الأحجار الزينة عبر القرون. يحمل كل حجر تبايناته الطبيعية، ما يضمن أن كل Signature Strand فريد من نوعه.',
    beadDetail: 'خرز أحجار الأونيكس الأسود الطبيعية (قطرها تقريباً 7 مم)',
    materialStone: 'أحجار الأونيكس الأسود الطبيعية',
    strandLabel: 'ستراندات الأونيكس Signature Strands',
    stoneLabel: 'الأونيكس',
    variationNote: 'التباينات الطبيعية جزء مما يجعل كل Signature Strand فريداً.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  fr: {
    headline: 'Signature Strands Onyx',
    introP1:
      'Les Signature Strands Onyx apportent profondeur, contraste et élégance discrète aux créations Bint Saeed sélectionnées. Assemblés à la main à Abu Dhabi à partir d’onyx noir naturel et finis avec les éléments Knotted Line dorés signature de Bint Saeed, ils offrent une manière raffinée de transformer une silhouette familière par un seul détail réfléchi.',
    introP4:
      'Les tons noirs profonds de l’onyx naturel créent un contraste saisissant avec les éléments Knotted Line dorés, tandis que des accents d’Hématite plaquée or facettés, positionnés entre chaque gemme, captent et reflètent la lumière avec une brillance subtile. Chaque pierre étant formée naturellement, chaque Signature Strand est entièrement unique par sa couleur, ses marques et son caractère naturel.',
    stoneOrigin:
      'L’onyx noir provient notamment du Brésil, de l’Inde, de l’Uruguay et de Madagascar. Apprécié pour sa couleur noire profonde et son poli élégant, il demeure l’un des pierres ornementales les plus durables au monde. Chaque gemme affiche ses propres variations naturelles, garantissant l’unicité de chaque Signature Strand.',
    beadDetail: 'Perles en onyx noir naturel (environ 7 mm)',
    materialStone: 'Pierres naturelles onyx noir',
    strandLabel: 'Signature Strands Onyx',
    stoneLabel: 'Onyx',
    variationNote: 'Les variations naturelles font partie de ce qui rend chaque Signature Strand unique.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  it: {
    headline: 'Signature Strands Onice',
    introP1:
      'I Signature Strands Onice introducono profondità, contrasto ed eleganza sobria nelle creazioni Bint Saeed selezionate. Assemblati a mano ad Abu Dhabi con onice nero naturale e rifiniti con gli elementi Knotted Line dorati signature di Bint Saeed, offrono un modo raffinato di trasformare una silhouette familiare attraverso un solo dettaglio ponderato.',
    introP4:
      'I ricchi toni neri dell’onice naturale creano un contrasto sorprendente con gli elementi Knotted Line dorati, mentre accenti di Ematite placcata oro sfaccettati, posizionati tra ogni gemma, catturano e riflettono la luce con brillantezza sottile. Poiché ogni gemma è formata naturalmente, ogni Signature Strand è interamente unico nel colore, nelle venature e nel carattere naturale.',
    stoneOrigin:
      'L’onice nero proviene da regioni tra cui Brasile, India, Uruguay e Madagascar. Apprezzato per il colore nero profondo e la lucidatura elegante, è rimasto una delle pietre decorative più durature al mondo. Ogni gemma mostra le proprie variazioni naturali, garantendo l’unicità di ogni Signature Strand.',
    beadDetail: 'Perle in onice nero naturale (circa 7 mm)',
    materialStone: 'Gemme naturali onice nero',
    strandLabel: 'Signature Strands Onice',
    stoneLabel: 'Onice',
    variationNote: 'Le variazioni naturali fanno parte di ciò che rende ogni Signature Strand unico.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  es: {
    headline: 'Signature Strands Ónix',
    introP1:
      'Los Signature Strands Ónix aportan profundidad, contraste y elegancia discreta a creaciones seleccionadas de Bint Saeed. Ensamblados a mano en Abu Dhabi con ónix negro natural y acabados con los elementos Knotted Line dorados característicos de Bint Saeed, ofrecen una forma refinada de transformar una silueta familiar mediante un solo detalle cuidado.',
    introP4:
      'Los ricos tonos negros del ónix natural crean un contraste llamativo con los elementos Knotted Line dorados, mientras que acentos de Hematita chapada en oro facetados, situados entre cada gema, captan y reflejan la luz con brillo sutil. Como cada gema se forma de manera natural, cada Signature Strand es enteramente único en color, marcas y carácter natural.',
    stoneOrigin:
      'El ónix negro procede de regiones como Brasil, India, Uruguay y Madagascar. Apreciado por su color negro profundo y pulido elegante, ha sido una de las piedras decorativas más perdurables del mundo. Cada gema muestra sus propias variaciones naturales, garantizando que cada Signature Strand sea único.',
    beadDetail: 'Cuentas de ónix negro natural (aproximadamente 7 mm)',
    materialStone: 'Gemas naturales de ónix negro',
    strandLabel: 'Signature Strands Ónix',
    stoneLabel: 'Ónix',
    variationNote: 'Las variaciones naturales forman parte de lo que hace único cada Signature Strand.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ru: {
    headline: 'Signature Strands «Оникс»',
    introP1:
      'Signature Strands «Оникс» привносят глубину, контраст и сдержанную элегантность в избранные творения Bint Saeed. Собраны вручную в Абу-Даби из натурального чёрного оникса и завершены фирменными золотистыми элементами Knotted Line от Bint Saeed — они предлагают утончённый способ преобразить привычный силуэт через одну продуманную деталь.',
    introP4:
      'Насыщенные чёрные тона натурального оникса создают выразительный контраст с золотистыми элементами Knotted Line, а фасетированные акценты из позолоченного гематита между каждой самоцветной бусиной мягко ловят и отражают свет. Поскольку каждый камень сформирован природой, каждый Signature Strand уникален по цвету, рисунку и природному характеру.',
    stoneOrigin:
      'Чёрный оникс добывают в Бразилии, Индии, Уругвае, Мадагаскаре и других регионах. Его ценят за глубокий чёрный цвет и элегантную полировку — один из самых востребованных декоративных камней на протяжении веков. Каждый камень имеет собственные природные вариации, поэтому каждый Signature Strand неповторим.',
    beadDetail: 'Бусины из натурального чёрного оникса (примерно 7 мм)',
    materialStone: 'Натуральный чёрный оникс',
    strandLabel: 'Signature Strands «Оникс»',
    stoneLabel: 'Оникс',
    variationNote: 'Природные вариации — часть того, что делает каждый Signature Strand уникальным.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  zh: {
    headline: '缟玛瑙 Signature Strands',
    introP1:
      '缟玛瑙 Signature Strands 为精选 Bint Saeed 作品注入层次、对比与内敛优雅。于阿布扎比以天然黑缟玛瑙手工组装，并以 Bint Saeed 标志性金色 Knotted Line 元素收尾，借由一处精心细节，以精致方式转变熟悉轮廓。',
    introP4:
      '天然缟玛瑙的浓郁黑色与金色 Knotted Line 元素形成鲜明对照；每颗宝石之间的切面镀金赤铁矿点缀以细腻光泽捕捉并反射光线。因每颗宝石皆天然形成，每条 Signature Strand 在色泽、纹理与自然个性上皆独一无二。',
    stoneOrigin:
      '黑缟玛瑙产自巴西、印度、乌拉圭、马达加斯加等地区。其深邃黑色与优雅抛光使其成为数百年来最受推崇的装饰宝石之一。每颗宝石皆有独特天然差异，确保每条 Signature Strand 皆不相同。',
    beadDetail: '天然黑缟玛瑙珠（约 7 毫米）',
    materialStone: '天然黑缟玛瑙',
    strandLabel: '缟玛瑙 Signature Strands',
    stoneLabel: '缟玛瑙',
    variationNote: '天然差异正是每条 Signature Strand 独特之处。',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  de: {
    headline: 'Onyx Signature Strands',
    introP1:
      'Die Onyx Signature Strands bringen Tiefe, Kontrast und zurückhaltende Eleganz in ausgewählte Bint Saeed-Kreationen. Handmontiert in Abu Dhabi aus natürlichem schwarzem Onyx und veredelt mit Bint Saeeds charakteristischen goldfarbenen Knotted Line-Elementen bieten sie eine raffinierte Art, eine vertraute Silhouette durch ein einziges durchdachtes Detail zu verwandeln.',
    introP4:
      'Die satten schwarzen Töne des natürlichen Onyx schaffen einen markanten Kontrast zu den goldfarbenen Knotted Line-Elementen, während facettierte, vergoldete Hämatit-Akzente zwischen jedem Edelstein das Licht mit subtiler Brillanz einfangen und reflektieren. Da jeder Stein natürlich entstanden ist, ist jeder Signature Strand in Farbe, Maserung und natürlichem Charakter völlig einzigartig.',
    stoneOrigin:
      'Schwarzer Onyx stammt aus Regionen wie Brasilien, Indien, Uruguay und Madagaskar. Wegen seiner tiefen schwarzen Farbe und eleganten Politur gilt er seit Jahrhunderten als einer der beständigsten Ziersteine der Welt. Jeder Edelstein zeigt eigene natürliche Variationen – jeder Signature Strand ist ein Unikat.',
    beadDetail: 'Natürliche schwarze Onyx-Edelsteinperlen (ca. 7 mm)',
    materialStone: 'Natürliche schwarze Onyx-Edelsteine',
    strandLabel: 'Onyx Signature Strands',
    stoneLabel: 'Onyx',
    variationNote: 'Natürliche Variationen gehören zu dem, was jeden Signature Strand einzigartig macht.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  nl: {
    headline: 'Onyx Signature Strands',
    introP1:
      'De Onyx Signature Strands brengen diepte, contrast en ingetogen elegantie in geselecteerde Bint Saeed-creaties. Handmatig geassembleerd in Abu Dhabi van natuurlijke zwarte Onyx-edelstenen en afgewerkt met Bint Saeeds kenmerkende goudkleurige Knotted Line-elementen, bieden ze een verfijnde manier om een vertrouwde silhouet te transformeren via één doordacht detail.',
    introP4:
      'De rijke zwarte tonen van natuurlijke Onyx creëren een opvallend contrast met de goudkleurige Knotted Line-elementen, terwijl gefacetteerde, vergulde Hematiet-accenten tussen elke edelsteen licht met subtiele glans vangen en weerkaatsen. Omdat elke edelsteen natuurlijk gevormd is, is elke Signature Strand volledig uniek in kleur, tekening en natuurlijk karakter.',
    stoneOrigin:
      'Zwarte Onyx wordt gewonnen in regio’s waaronder Brazilië, India, Uruguay en Madagaskar. Gewaardeerd om zijn diepe zwarte kleur en elegante polijsting, blijft het een van de meest duurzame sierstenen ter wereld. Elke edelsteen toont eigen natuurlijke variaties, waardoor elke Signature Strand uniek is.',
    beadDetail: 'Natuurlijke zwarte Onyx-edelstenen kralen (ongeveer 7 mm)',
    materialStone: 'Natuurlijke zwarte Onyx-edelstenen',
    strandLabel: 'Onyx Signature Strands',
    stoneLabel: 'Onyx',
    variationNote: 'Natuurlijke variaties maken deel uit van wat elke Signature Strand uniek maakt.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  pt: {
    headline: 'Signature Strands Ónix',
    introP1:
      'Os Signature Strands Ónix introduzem profundidade, contraste e elegância discreta nas criações Bint Saeed selecionadas. Montados à mão em Abu Dhabi com ónix negro natural e finalizados com os elementos Knotted Line dourados assinatura da Bint Saeed, oferecem uma forma refinada de transformar uma silhueta familiar através de um único detalhe cuidado.',
    introP4:
      'Os ricos tons negros do ónix natural criam um contraste marcante com os elementos Knotted Line dourados, enquanto acentos de Hematite folheada a ouro facetados, posicionados entre cada gema, captam e reflectem a luz com brilho subtil. Como cada gema se forma naturalmente, cada Signature Strand é inteiramente único em cor, marcas e carácter natural.',
    stoneOrigin:
      'O ónix negro provém de regiões como Brasil, Índia, Uruguai e Madagáscar. Apreciado pela cor negra profunda e polimento elegante, permanece uma das pedras decorativas mais duradouras do mundo. Cada gema exibe as suas próprias variações naturais, garantindo que cada Signature Strand seja único.',
    beadDetail: 'Contas de ónix negro natural (aproximadamente 7 mm)',
    materialStone: 'Gemas naturais de ónix negro',
    strandLabel: 'Signature Strands Ónix',
    stoneLabel: 'Ónix',
    variationNote: 'As variações naturais fazem parte do que torna cada Signature Strand único.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  id: {
    headline: 'Signature Strands Onyx',
    introP1:
      'Signature Strands Onyx menghadirkan kedalaman, kontras, dan keanggunan yang tenang pada kreasi Bint Saeed terpilih. Dirakit tangan di Abu Dhabi dari batu permata Black Onyx alami dan diselesaikan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, mereka menawarkan cara yang halus untuk mengubah siluet yang sudah dikenal melalui satu detail yang penuh pertimbangan.',
    introP4:
      'Nada hitam kaya Onyx alami menciptakan kontras mencolok dengan elemen Knotted Line bernuansa emas, sementara aksen Hematite berlapis emas berfaset di antara setiap batu permata menangkap dan memantulkan cahaya dengan kilau halus. Karena setiap batu terbentuk secara alami, setiap Signature Strand sepenuhnya unik dalam warna, corak, dan karakter alaminya.',
    stoneOrigin:
      'Black Onyx bersumber dari wilayah termasuk Brasil, India, Uruguay, dan Madagaskar. Dihargai karena warna hitamnya yang dalam dan polesan elegan, batu ini telah menjadi salah satu batu hias paling abadi selama berabad-abad. Setiap batu permata menampilkan variasi alaminya sendiri, memastikan setiap Signature Strand benar-benar unik.',
    beadDetail: 'Manik batu permata Black Onyx alami (sekitar 7 mm)',
    materialStone: 'Batu permata Black Onyx alami',
    strandLabel: 'Signature Strands Onyx',
    stoneLabel: 'Onyx',
    variationNote: 'Variasi alami merupakan bagian dari apa yang membuat setiap Signature Strand unik.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ms: {
    headline: 'Signature Strands Onyx',
    introP1:
      'Signature Strands Onyx memperkenalkan kedalaman, kontras dan keanggunan yang halus kepada ciptaan Bint Saeed terpilih. Dipasang tangan di Abu Dhabi daripada batu permata Black Onyx semula jadi dan disiapkan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, ia menawarkan cara yang halus untuk mengubah siluet yang biasa melalui satu butiran yang dipikirkan dengan teliti.',
    introP4:
      'Nada hitam kaya Onyx semula jadi mewujudkan kontras yang menonjol dengan elemen Knotted Line bernuansa emas, manakala aksen Hematite bersalut emas berfaset di antara setiap batu permata menangkap dan memantulkan cahaya dengan kilauan halus. Memandangkan setiap batu terbentuk secara semula jadi, setiap Signature Strand benar-benar unik dalam warna, corak dan karakter semula jadinya.',
    stoneOrigin:
      'Black Onyx bersumber dari wilayah termasuk Brazil, India, Uruguay dan Madagascar. Dihargai kerana warna hitamnya yang mendalam dan penggilapan elegan, ia kekal sebagai salah satu batu hiasan paling kekal selama berabad-abad. Setiap batu permata mempamerkan variasi semula jadinya sendiri, memastikan setiap Signature Strand benar-benar unik.',
    beadDetail: 'Manik batu permata Black Onyx semula jadi (kira-kira 7 mm)',
    materialStone: 'Batu permata Black Onyx semula jadi',
    strandLabel: 'Signature Strands Onyx',
    stoneLabel: 'Onyx',
    variationNote: 'Variasi semula jadi merupakan sebahagian daripada apa yang menjadikan setiap Signature Strand unik.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
}

const SUNSTONE: VariantPack = {
  en: {
    headline: 'Sunstone Signature Strands',
    introP1:
      'The Sunstone Signature Strands introduce warm radiance, soft luminosity and refined contrast to selected Bint Saeed creations. Hand-assembled in Abu Dhabi from natural Sunstone gemstones and finished with Bint Saeed’s signature gold-tone Knotted Line elements, they offer a refined way to transform a familiar silhouette through a single thoughtful detail.',
    introP4:
      'Natural Sunstone is admired for its peach-to-orange glow and delicate aventurescence, which gives the surface a subtle lit-from-within shimmer. Faceted gold-plated Hematite accents between every gemstone enhance this warmth with controlled brilliance. Because every gemstone is naturally formed, each Signature Strand is entirely unique in its colour, markings and natural character.',
    stoneOrigin:
      'Sunstone is sourced from regions including India, Norway, Madagascar and the United States. Appreciated for its warm peach-orange palette and gentle internal sparkle, it brings a luminous accent to evening styling. Every gemstone displays its own natural variations, ensuring every Signature Strand is one of a kind.',
    beadDetail: 'Natural Sunstone gemstone beads (approximately 7 mm)',
    materialStone: 'Natural Sunstone gemstones',
    strandLabel: 'Sunstone Signature Strands',
    stoneLabel: 'Sunstone',
    variationNote: 'Natural variations in glow, tone and inclusions are part of what makes every Signature Strand unique.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ar: {
    headline: 'ستراندات Sunstone Signature Strands',
    introP1:
      'تقدّم ستراندات Sunstone Signature Strands توهجاً دافئاً ولمعاناً ناعماً وتبايناً راقياً إلى مختارات من إبداعات Bint Saeed. تُجمَّع يدوياً في Abu Dhabi من أحجار Sunstone الطبيعية وتُنهى بعناصر Knotted Line الذهبية الحصرية من Bint Saeed، لتقدّم طريقة أنيقة لتحويل صورة مألوفة من خلال تفصيلة واحدة مدروسة.',
    introP4:
      'يُعرف حجر Sunstone الطبيعي بتدرجاته الخوخية البرتقالية وتلألئه الرقيق الذي يمنحه إشراقة داخلية هادئة. وتضيف لمسات Hematite المطلية ذهباً والمقطّعة بين كل حجر بريقاً متوازناً يعزّز هذا الدفء. ولأن كل حجر يتشكّل طبيعياً، يكون كل Signature Strand فريداً تماماً في لونه وعلاماته وطابعه الطبيعي.',
    stoneOrigin:
      'يُستخرج Sunstone من مناطق تشمل India وNorway وMadagascar والولايات المتحدة. ويُقدَّر لألوانه الدافئة بين الخوخي والبرتقالي ولمعانه الداخلي الرقيق، ما يمنح إطلالات المساء لمسة مضيئة. يحمل كل حجر تبايناته الطبيعية الخاصة، ما يضمن أن كل Signature Strand فريد من نوعه.',
    beadDetail: 'خرز أحجار Sunstone الطبيعية (قطرها تقريباً 7 مم)',
    materialStone: 'أحجار Sunstone الطبيعية',
    strandLabel: 'ستراندات Sunstone Signature Strands',
    stoneLabel: 'Sunstone',
    variationNote: 'التباينات الطبيعية في التوهج والدرجة والشوائب جزء مما يجعل كل Signature Strand فريداً.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  fr: {
    headline: 'Signature Strands Sunstone',
    introP1:
      'Les Signature Strands Sunstone apportent chaleur lumineuse, éclat doux et contraste raffiné aux créations Bint Saeed sélectionnées. Assemblés à la main à Abu Dhabi à partir de pierres naturelles Sunstone et finis avec les éléments Knotted Line dorés signature de Bint Saeed, ils offrent une manière raffinée de transformer une silhouette familière par un seul détail réfléchi.',
    introP4:
      'La Sunstone naturelle est appréciée pour sa lueur pêche-orangé et sa délicate aventurescence qui crée un scintillement discret de l’intérieur. Des accents d’Hematite plaquée or facettés entre chaque gemme renforcent cette chaleur avec une brillance maîtrisée. Chaque pierre étant formée naturellement, chaque Signature Strand est entièrement unique par sa couleur, ses marques et son caractère naturel.',
    stoneOrigin:
      'La Sunstone provient notamment d’India, de Norway, de Madagascar et des États-Unis. Appréciée pour sa palette pêche-orangée et son scintillement interne subtil, elle apporte une touche lumineuse au vestiaire du soir. Chaque gemme présente ses propres variations naturelles, garantissant l’unicité de chaque Signature Strand.',
    beadDetail: 'Perles en pierre naturelle Sunstone (environ 7 mm)',
    materialStone: 'Pierres naturelles Sunstone',
    strandLabel: 'Signature Strands Sunstone',
    stoneLabel: 'Sunstone',
    variationNote:
      'Les variations naturelles de l’éclat, de la teinte et des inclusions font partie de ce qui rend chaque Signature Strand unique.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  it: {
    headline: 'Signature Strands Sunstone',
    introP1:
      'I Signature Strands Sunstone introducono calore luminoso, brillantezza delicata e contrasto raffinato nelle creazioni Bint Saeed selezionate. Assemblati a mano ad Abu Dhabi con gemme naturali Sunstone e rifiniti con gli elementi Knotted Line dorati signature di Bint Saeed, offrono un modo raffinato di trasformare una silhouette familiare attraverso un solo dettaglio ponderato.',
    introP4:
      'La Sunstone naturale è apprezzata per il suo bagliore pesca-aranciato e la delicata aventurescenza che dona una luce interna discreta. Tra ogni gemma, accenti di Hematite placcata oro sfaccettati amplificano questo calore con brillantezza controllata. Poiché ogni gemma è formata naturalmente, ogni Signature Strand è interamente unico nel colore, nelle venature e nel carattere naturale.',
    stoneOrigin:
      'La Sunstone proviene da regioni tra cui India, Norway, Madagascar e Stati Uniti. Stimata per la sua tavolozza pesca-aranciata e il suo scintillio interno sottile, dona un accento luminoso allo styling serale. Ogni gemma mostra le proprie variazioni naturali, garantendo l’unicità di ogni Signature Strand.',
    beadDetail: 'Perle in pietra naturale Sunstone (circa 7 mm)',
    materialStone: 'Gemme naturali Sunstone',
    strandLabel: 'Signature Strands Sunstone',
    stoneLabel: 'Sunstone',
    variationNote:
      'Le variazioni naturali di luce, tonalità e inclusioni fanno parte di ciò che rende ogni Signature Strand unico.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  es: {
    headline: 'Signature Strands Sunstone',
    introP1:
      'Los Signature Strands Sunstone aportan calidez luminosa, brillo suave y contraste refinado a creaciones seleccionadas de Bint Saeed. Ensamblados a mano en Abu Dhabi con gemas naturales Sunstone y acabados con los elementos Knotted Line dorados característicos de Bint Saeed, ofrecen una forma refinada de transformar una silueta familiar mediante un solo detalle cuidado.',
    introP4:
      'La Sunstone natural es admirada por su resplandor melocotón-anaranjado y su delicada aventurescencia, que aporta un brillo interno sutil. Los acentos de Hematite chapada en oro facetados entre cada gema realzan esa calidez con brillo controlado. Como cada gema se forma de manera natural, cada Signature Strand es enteramente único en color, marcas y carácter natural.',
    stoneOrigin:
      'La Sunstone procede de regiones como India, Norway, Madagascar y Estados Unidos. Apreciada por su paleta cálida entre melocotón y naranja y su suave destello interno, aporta un acento luminoso al estilo de noche. Cada gema muestra sus propias variaciones naturales, garantizando que cada Signature Strand sea único.',
    beadDetail: 'Cuentas de piedra natural Sunstone (aproximadamente 7 mm)',
    materialStone: 'Gemas naturales Sunstone',
    strandLabel: 'Signature Strands Sunstone',
    stoneLabel: 'Sunstone',
    variationNote:
      'Las variaciones naturales de brillo, tono e inclusiones forman parte de lo que hace único cada Signature Strand.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ru: {
    headline: 'Signature Strands «Sunstone»',
    introP1:
      'Signature Strands «Sunstone» привносят тёплое сияние, мягкую светимость и утончённый контраст в избранные творения Bint Saeed. Собраны вручную в Abu Dhabi из натуральных камней Sunstone и завершены фирменными золотистыми элементами Knotted Line от Bint Saeed — они предлагают изысканный способ преобразить знакомый силуэт через одну продуманную деталь.',
    introP4:
      'Натуральный Sunstone ценят за персиково-оранжевое свечение и деликатную авантюресценцию, создающую мягкий внутренний блеск. Фасетированные акценты из позолоченного Hematite между каждой бусиной усиливают это тепло с контролируемой яркостью. Поскольку каждый камень сформирован природой, каждый Signature Strand уникален по цвету, рисунку и природному характеру.',
    stoneOrigin:
      'Sunstone добывают в регионах, включая India, Norway, Madagascar и США. Его ценят за тёплую персиково-оранжевую гамму и тонкое внутреннее мерцание — выразительный акцент для вечерних образов. Каждый камень имеет собственные природные вариации, поэтому каждый Signature Strand неповторим.',
    beadDetail: 'Бусины из натурального Sunstone (примерно 7 мм)',
    materialStone: 'Натуральные камни Sunstone',
    strandLabel: 'Signature Strands «Sunstone»',
    stoneLabel: 'Sunstone',
    variationNote: 'Природные различия в свечении, оттенке и включениях делают каждый Signature Strand уникальным.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  zh: {
    headline: 'Sunstone Signature Strands',
    introP1:
      'Sunstone Signature Strands 为精选 Bint Saeed 作品注入温暖光泽、柔和亮感与精致对比。于 Abu Dhabi 以天然 Sunstone 手工组装，并以 Bint Saeed 标志性金色 Knotted Line 元素收尾，以一处用心细节优雅地改变熟悉轮廓。',
    introP4:
      '天然 Sunstone 以桃橙色暖光与细腻砂金效应闻名，呈现由内而外的低调闪耀。每颗宝石之间加入切面镀金 Hematite 点缀，进一步提升温润光感。因每颗宝石皆天然形成，每条 Signature Strand 在色泽、纹理与自然个性上皆独一无二。',
    stoneOrigin:
      'Sunstone 产自 India、Norway、Madagascar 与美国等地区。其桃橙色调与柔和内在闪光广受喜爱，为晚间造型带来明亮却克制的点缀。每颗宝石都具天然差异，确保每条 Signature Strand 都独一无二。',
    beadDetail: '天然 Sunstone 珠（约 7 毫米）',
    materialStone: '天然 Sunstone',
    strandLabel: 'Sunstone Signature Strands',
    stoneLabel: 'Sunstone',
    variationNote: '光泽、色调与内含物的天然差异，正是每条 Signature Strand 的独特之处。',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  de: {
    headline: 'Sunstone Signature Strands',
    introP1:
      'Die Sunstone Signature Strands bringen warme Leuchtkraft, sanfte Helligkeit und raffinierten Kontrast in ausgewählte Bint Saeed-Kreationen. Handmontiert in Abu Dhabi aus natürlichen Sunstone-Edelsteinen und veredelt mit Bint Saeeds charakteristischen goldfarbenen Knotted Line-Elementen bieten sie eine elegante Möglichkeit, eine vertraute Silhouette durch ein einziges durchdachtes Detail zu verwandeln.',
    introP4:
      'Natürlicher Sunstone wird für seinen pfirsich-orangefarbenen Schimmer und seine feine Aventureszenz geschätzt, die wie ein dezentes Innenleuchten wirkt. Facettierte, vergoldete Hematite-Akzente zwischen jedem Edelstein verstärken diese Wärme mit kontrollierter Brillanz. Da jeder Stein natürlich entstanden ist, ist jeder Signature Strand in Farbe, Maserung und natürlichem Charakter völlig einzigartig.',
    stoneOrigin:
      'Sunstone stammt aus Regionen wie India, Norway, Madagascar und den USA. Geschätzt für seine warme Pfirsich-Orange-Palette und sein sanftes inneres Funkeln, setzt er einen leuchtenden Akzent für Abendlooks. Jeder Edelstein zeigt eigene natürliche Variationen – jeder Signature Strand ist damit ein Unikat.',
    beadDetail: 'Natürliche Sunstone-Edelsteinperlen (ca. 7 mm)',
    materialStone: 'Natürliche Sunstone-Edelsteine',
    strandLabel: 'Sunstone Signature Strands',
    stoneLabel: 'Sunstone',
    variationNote:
      'Natürliche Unterschiede in Schimmer, Ton und Einschlüssen gehören zu dem, was jeden Signature Strand einzigartig macht.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  nl: {
    headline: 'Sunstone Signature Strands',
    introP1:
      'De Sunstone Signature Strands brengen warme gloed, zachte lichtkracht en verfijnd contrast in geselecteerde Bint Saeed-creaties. Handmatig geassembleerd in Abu Dhabi van natuurlijke Sunstone-edelstenen en afgewerkt met Bint Saeeds kenmerkende goudkleurige Knotted Line-elementen, bieden ze een verfijnde manier om een vertrouwde silhouet te transformeren via één doordacht detail.',
    introP4:
      'Natuurlijke Sunstone wordt gewaardeerd om zijn perzik-oranje gloed en subtiele aventurescentie, die een zacht innerlijk fonkelen geeft. Gefacetteerde, vergulde Hematite-accenten tussen elke edelsteen versterken die warmte met beheerste glans. Omdat elke edelsteen natuurlijk gevormd is, is elke Signature Strand volledig uniek in kleur, tekening en natuurlijk karakter.',
    stoneOrigin:
      'Sunstone wordt gewonnen in regio’s waaronder India, Norway, Madagascar en de Verenigde Staten. Gewaardeerd om zijn warme perzik-oranje palet en zachte interne schittering, geeft hij een licht accent aan avondstyling. Elke edelsteen toont eigen natuurlijke variaties, waardoor elke Signature Strand uniek is.',
    beadDetail: 'Natuurlijke Sunstone-edelstenen kralen (ongeveer 7 mm)',
    materialStone: 'Natuurlijke Sunstone-edelstenen',
    strandLabel: 'Sunstone Signature Strands',
    stoneLabel: 'Sunstone',
    variationNote:
      'Natuurlijke variaties in gloed, toon en insluitsels maken deel uit van wat elke Signature Strand uniek maakt.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  pt: {
    headline: 'Signature Strands Sunstone',
    introP1:
      'Os Signature Strands Sunstone introduzem luminosidade quente, brilho suave e contraste refinado nas criações Bint Saeed selecionadas. Montados à mão em Abu Dhabi com gemas naturais Sunstone e finalizados com os elementos Knotted Line dourados assinatura da Bint Saeed, oferecem uma forma refinada de transformar uma silhueta familiar através de um único detalhe cuidado.',
    introP4:
      'A Sunstone natural é admirada pelo seu brilho pêssego-alaranjado e pela aventurescência delicada que cria um fulgor interno subtil. Acentos de Hematite folheada a ouro facetados entre cada gema reforçam este calor com brilho controlado. Como cada gema se forma naturalmente, cada Signature Strand é inteiramente único em cor, marcas e carácter natural.',
    stoneOrigin:
      'A Sunstone provém de regiões como India, Norway, Madagascar e Estados Unidos. Apreciada pela paleta quente pêssego-alaranjada e pelo brilho interno suave, oferece um acento luminoso para produções de noite. Cada gema exibe as suas próprias variações naturais, garantindo que cada Signature Strand seja único.',
    beadDetail: 'Contas de pedra natural Sunstone (aproximadamente 7 mm)',
    materialStone: 'Gemas naturais Sunstone',
    strandLabel: 'Signature Strands Sunstone',
    stoneLabel: 'Sunstone',
    variationNote:
      'As variações naturais de brilho, tonalidade e inclusões fazem parte do que torna cada Signature Strand único.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  id: {
    headline: 'Signature Strands Sunstone',
    introP1:
      'Signature Strands Sunstone menghadirkan pancaran hangat, kilau lembut, dan kontras anggun pada kreasi Bint Saeed terpilih. Dirakit tangan di Abu Dhabi dari batu permata Sunstone alami dan diselesaikan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, mereka menawarkan cara berkelas untuk mengubah siluet yang sudah dikenal melalui satu detail yang penuh pertimbangan.',
    introP4:
      'Sunstone alami dikagumi karena cahaya peach-oranye dan aventurescence halus yang memberi efek berkilau dari dalam. Aksen Hematite berlapis emas berfaset di antara setiap batu memperkuat kehangatan ini dengan kilau yang terukur. Karena setiap batu terbentuk secara alami, setiap Signature Strand sepenuhnya unik dalam warna, corak, dan karakter alaminya.',
    stoneOrigin:
      'Sunstone bersumber dari wilayah termasuk India, Norway, Madagascar, dan Amerika Serikat. Dihargai karena palet peach-oranye yang hangat serta kilau internalnya yang lembut, batu ini memberi aksen bercahaya untuk gaya malam. Setiap batu permata menampilkan variasi alaminya sendiri, memastikan setiap Signature Strand benar-benar unik.',
    beadDetail: 'Manik batu permata Sunstone alami (sekitar 7 mm)',
    materialStone: 'Batu permata Sunstone alami',
    strandLabel: 'Signature Strands Sunstone',
    stoneLabel: 'Sunstone',
    variationNote:
      'Variasi alami pada cahaya, rona, dan inklusi merupakan bagian dari apa yang membuat setiap Signature Strand unik.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ms: {
    headline: 'Signature Strands Sunstone',
    introP1:
      'Signature Strands Sunstone memperkenalkan sinaran hangat, kilauan lembut dan kontras yang halus kepada ciptaan Bint Saeed terpilih. Dipasang tangan di Abu Dhabi daripada batu permata Sunstone semula jadi dan disiapkan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, ia menawarkan cara yang anggun untuk mengubah siluet yang biasa melalui satu butiran yang dipikirkan dengan teliti.',
    introP4:
      'Sunstone semula jadi dikagumi kerana cahaya pic-oren dan aventurescence lembut yang memberi kilauan dari dalam. Aksen Hematite bersalut emas berfaset di antara setiap batu menguatkan kehangatan ini dengan kilauan yang terkawal. Memandangkan setiap batu terbentuk secara semula jadi, setiap Signature Strand benar-benar unik dalam warna, corak dan karakter semula jadinya.',
    stoneOrigin:
      'Sunstone bersumber dari wilayah termasuk India, Norway, Madagascar dan Amerika Syarikat. Dihargai kerana palet pic-oren yang hangat serta kilauan dalaman yang lembut, batu ini memberi aksen bercahaya untuk gaya malam. Setiap batu permata mempamerkan variasi semula jadinya sendiri, memastikan setiap Signature Strand benar-benar unik.',
    beadDetail: 'Manik batu permata Sunstone semula jadi (kira-kira 7 mm)',
    materialStone: 'Batu permata Sunstone semula jadi',
    strandLabel: 'Signature Strands Sunstone',
    stoneLabel: 'Sunstone',
    variationNote:
      'Variasi semula jadi pada cahaya, tona dan inklusi merupakan sebahagian daripada apa yang menjadikan setiap Signature Strand unik.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
}

const BLUE_AVENTURINE: VariantPack = {
  en: {
    headline: 'Blue Aventurine Signature Strands',
    introP1:
      'The Blue Aventurine Signature Strands introduce cool luminosity, elegant contrast and quiet depth to selected Bint Saeed creations. Hand-assembled in Abu Dhabi from natural Blue Aventurine gemstones and finished with Bint Saeed’s signature gold-tone Knotted Line elements, they offer a refined way to transform a familiar silhouette through a single thoughtful detail.',
    introP4:
      'The dusty blue tones of natural Aventurine carry a gentle shimmer that catches the light as you move, while faceted gold-plated Hematite accents positioned between every gemstone add subtle brilliance. Against deep or black fabric, the cool blue creates a striking yet understated contrast. Because every gemstone is naturally formed, each Signature Strand is entirely unique in its colour, markings and natural character.',
    stoneOrigin:
      'Blue Aventurine is sourced from regions including India, Brazil, Russia and Tanzania. Appreciated for its cool blue colour and subtle aventurescence — a gentle sparkle within the stone — it offers a serene yet distinctive accent. Every gemstone displays its own natural variations, ensuring every Signature Strand is one of a kind.',
    beadDetail: 'Natural Blue Aventurine gemstone beads (approximately 7 mm)',
    materialStone: 'Natural Blue Aventurine gemstones',
    strandLabel: 'Blue Aventurine Signature Strands',
    stoneLabel: 'Blue Aventurine',
    variationNote: 'Natural variations in colour and shimmer are part of what makes every Signature Strand unique.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ar: {
    headline: 'ستراندات Blue Aventurine Signature Strands',
    introP1:
      'تقدّم ستراندات Blue Aventurine Signature Strands إضاءة باردة وتبايناً أنيقاً وعمقاً هادئاً إلى مختارات من إبداعات Bint Saeed. تُجمَّع يدوياً في Abu Dhabi من أحجار Blue Aventurine الطبيعية وتُنهى بعناصر Knotted Line الذهبية الحصرية من Bint Saeed، لتقدّم طريقة راقية لتحويل صورة مألوفة من خلال تفصيلة واحدة مدروسة.',
    introP4:
      'تحمل درجات الأزرق الغباري في Aventurine الطبيعي بريقاً رقيقاً يلتقط الضوء مع الحركة، بينما تضيف لمسات Hematite المطلية ذهباً والمقطّعة بين كل حجر لمعاناً خفيفاً. ومع الأقمشة الداكنة أو السوداء، يصنع الأزرق البارد تبايناً لافتاً لكن متزناً. ولأن كل حجر يتشكّل طبيعياً، يكون كل Signature Strand فريداً تماماً في لونه وعلاماته وطابعه الطبيعي.',
    stoneOrigin:
      'يُستخرج Blue Aventurine من مناطق تشمل India وBrazil وRussia وTanzania. ويُقدَّر للونه الأزرق البارد وتلألئه الداخلي الخفيف، ما يمنحه حضوراً هادئاً ومميزاً. يحمل كل حجر تبايناته الطبيعية الخاصة، ما يضمن أن كل Signature Strand فريد من نوعه.',
    beadDetail: 'خرز أحجار Blue Aventurine الطبيعية (قطرها تقريباً 7 مم)',
    materialStone: 'أحجار Blue Aventurine الطبيعية',
    strandLabel: 'ستراندات Blue Aventurine Signature Strands',
    stoneLabel: 'Blue Aventurine',
    variationNote: 'التباينات الطبيعية في اللون والبريق جزء مما يجعل كل Signature Strand فريداً.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  fr: {
    headline: 'Signature Strands Blue Aventurine',
    introP1:
      'Les Signature Strands Blue Aventurine apportent luminosité fraîche, contraste élégant et profondeur discrète aux créations Bint Saeed sélectionnées. Assemblés à la main à Abu Dhabi à partir de pierres naturelles Blue Aventurine et finis avec les éléments Knotted Line dorés signature de Bint Saeed, ils offrent une manière raffinée de transformer une silhouette familière par un seul détail réfléchi.',
    introP4:
      'Les tons bleu poudré de l’Aventurine naturelle portent un scintillement délicat qui capte la lumière au mouvement, tandis que des accents d’Hematite plaquée or facettés entre chaque gemme ajoutent une brillance subtile. Sur des tissus sombres ou noirs, ce bleu frais crée un contraste remarquable mais discret. Chaque pierre étant formée naturellement, chaque Signature Strand est entièrement unique par sa couleur, ses marques et son caractère naturel.',
    stoneOrigin:
      'La Blue Aventurine provient notamment d’India, du Brazil, de Russia et de Tanzania. Appréciée pour son bleu frais et sa subtile aventurescence — un scintillement doux dans la pierre — elle apporte un accent serein mais distinctif. Chaque gemme présente ses propres variations naturelles, garantissant l’unicité de chaque Signature Strand.',
    beadDetail: 'Perles en pierre naturelle Blue Aventurine (environ 7 mm)',
    materialStone: 'Pierres naturelles Blue Aventurine',
    strandLabel: 'Signature Strands Blue Aventurine',
    stoneLabel: 'Blue Aventurine',
    variationNote:
      'Les variations naturelles de couleur et de scintillement font partie de ce qui rend chaque Signature Strand unique.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  it: {
    headline: 'Signature Strands Blue Aventurine',
    introP1:
      'I Signature Strands Blue Aventurine introducono luminosità fresca, contrasto elegante e profondità discreta nelle creazioni Bint Saeed selezionate. Assemblati a mano ad Abu Dhabi con gemme naturali Blue Aventurine e rifiniti con gli elementi Knotted Line dorati signature di Bint Saeed, offrono un modo raffinato di trasformare una silhouette familiare attraverso un solo dettaglio ponderato.',
    introP4:
      'I toni blu polverosi dell’Aventurine naturale presentano una lieve brillantezza che cattura la luce nel movimento, mentre accenti di Hematite placcata oro sfaccettati tra ogni gemma aggiungono luminosità sottile. Su tessuti scuri o neri, questo blu freddo crea un contrasto deciso ma misurato. Poiché ogni gemma è formata naturalmente, ogni Signature Strand è interamente unico nel colore, nelle venature e nel carattere naturale.',
    stoneOrigin:
      'La Blue Aventurine proviene da regioni tra cui India, Brazil, Russia e Tanzania. Apprezzata per il suo colore blu freddo e la sottile aventurescenza, offre un accento sereno ma distintivo. Ogni gemma mostra le proprie variazioni naturali, garantendo l’unicità di ogni Signature Strand.',
    beadDetail: 'Perle in pietra naturale Blue Aventurine (circa 7 mm)',
    materialStone: 'Gemme naturali Blue Aventurine',
    strandLabel: 'Signature Strands Blue Aventurine',
    stoneLabel: 'Blue Aventurine',
    variationNote:
      'Le variazioni naturali di colore e brillantezza fanno parte di ciò che rende ogni Signature Strand unico.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  es: {
    headline: 'Signature Strands Blue Aventurine',
    introP1:
      'Los Signature Strands Blue Aventurine aportan luminosidad fría, contraste elegante y profundidad discreta a creaciones seleccionadas de Bint Saeed. Ensamblados a mano en Abu Dhabi con gemas naturales Blue Aventurine y acabados con los elementos Knotted Line dorados característicos de Bint Saeed, ofrecen una forma refinada de transformar una silueta familiar mediante un solo detalle cuidado.',
    introP4:
      'Los tonos azul empolvado de la Aventurine natural tienen un brillo suave que capta la luz al moverse, mientras los acentos de Hematite chapada en oro facetados entre cada gema añaden brillantez sutil. Sobre tejidos oscuros o negros, ese azul frío crea un contraste llamativo pero sobrio. Como cada gema se forma de manera natural, cada Signature Strand es enteramente único en color, marcas y carácter natural.',
    stoneOrigin:
      'La Blue Aventurine procede de regiones como India, Brazil, Russia y Tanzania. Apreciada por su color azul frío y su sutil aventurescencia, aporta un acento sereno y distintivo. Cada gema muestra sus propias variaciones naturales, garantizando que cada Signature Strand sea único.',
    beadDetail: 'Cuentas de piedra natural Blue Aventurine (aproximadamente 7 mm)',
    materialStone: 'Gemas naturales Blue Aventurine',
    strandLabel: 'Signature Strands Blue Aventurine',
    stoneLabel: 'Blue Aventurine',
    variationNote:
      'Las variaciones naturales de color y brillo forman parte de lo que hace único cada Signature Strand.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ru: {
    headline: 'Signature Strands «Blue Aventurine»',
    introP1:
      'Signature Strands «Blue Aventurine» добавляют прохладную светимость, элегантный контраст и спокойную глубину в избранные творения Bint Saeed. Собраны вручную в Abu Dhabi из натуральных камней Blue Aventurine и завершены фирменными золотистыми элементами Knotted Line от Bint Saeed — они предлагают утончённый способ преобразить знакомый силуэт через одну продуманную деталь.',
    introP4:
      'Пыльно-голубые тона натурального Aventurine дают мягкое мерцание, которое ловит свет при движении, а фасетированные акценты из позолоченного Hematite между камнями добавляют деликатный блеск. На тёмных и чёрных тканях этот прохладный оттенок создаёт выразительный, но сдержанный контраст. Поскольку каждый камень сформирован природой, каждый Signature Strand уникален по цвету, рисунку и природному характеру.',
    stoneOrigin:
      'Blue Aventurine добывают в регионах, включая India, Brazil, Russia и Tanzania. Камень ценят за прохладный синий цвет и тонкую авантюресценцию — мягкое внутреннее сияние. Каждый камень имеет собственные природные вариации, поэтому каждый Signature Strand неповторим.',
    beadDetail: 'Бусины из натурального Blue Aventurine (примерно 7 мм)',
    materialStone: 'Натуральные камни Blue Aventurine',
    strandLabel: 'Signature Strands «Blue Aventurine»',
    stoneLabel: 'Blue Aventurine',
    variationNote: 'Природные различия в цвете и мерцании делают каждый Signature Strand уникальным.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  zh: {
    headline: 'Blue Aventurine Signature Strands',
    introP1:
      'Blue Aventurine Signature Strands 为精选 Bint Saeed 作品带来冷调亮泽、优雅对比与沉静层次。于 Abu Dhabi 以天然 Blue Aventurine 手工组装，并以 Bint Saeed 标志性金色 Knotted Line 元素收尾，以一处精致细节优雅转变熟悉轮廓。',
    introP4:
      '天然 Aventurine 的雾蓝色调带有轻柔微闪，随动作捕捉光线；每颗宝石之间的切面镀金 Hematite 点缀进一步增添含蓄光泽。与深色或黑色面料搭配时，冷蓝对比鲜明却不张扬。因每颗宝石皆天然形成，每条 Signature Strand 在色泽、纹理与自然个性上皆独一无二。',
    stoneOrigin:
      'Blue Aventurine 产自 India、Brazil、Russia 与 Tanzania 等地区。其冷调蓝色与细腻砂金效应带来平静而鲜明的点缀。每颗宝石都有天然差异，确保每条 Signature Strand 都独一无二。',
    beadDetail: '天然 Blue Aventurine 珠（约 7 毫米）',
    materialStone: '天然 Blue Aventurine',
    strandLabel: 'Blue Aventurine Signature Strands',
    stoneLabel: 'Blue Aventurine',
    variationNote: '色泽与微闪的天然差异，正是每条 Signature Strand 的独特之处。',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  de: {
    headline: 'Blue Aventurine Signature Strands',
    introP1:
      'Die Blue Aventurine Signature Strands bringen kühle Leuchtkraft, eleganten Kontrast und ruhige Tiefe in ausgewählte Bint Saeed-Kreationen. Handmontiert in Abu Dhabi aus natürlichen Blue Aventurine-Edelsteinen und veredelt mit Bint Saeeds charakteristischen goldfarbenen Knotted Line-Elementen bieten sie eine raffinierte Möglichkeit, eine vertraute Silhouette durch ein einziges durchdachtes Detail zu verwandeln.',
    introP4:
      'Die staubig-blauen Töne natürlicher Aventurine tragen ein sanftes Schimmern, das Licht bei Bewegung einfängt, während facettierte, vergoldete Hematite-Akzente zwischen jedem Edelstein subtile Brillanz hinzufügen. Auf dunklen oder schwarzen Stoffen entsteht so ein markanter, aber zurückhaltender Kontrast. Da jeder Stein natürlich entstanden ist, ist jeder Signature Strand in Farbe, Maserung und natürlichem Charakter völlig einzigartig.',
    stoneOrigin:
      'Blue Aventurine stammt aus Regionen wie India, Brazil, Russia und Tanzania. Geschätzt für seine kühle blaue Farbe und feine Aventureszenz bietet er einen ruhigen, aber charakterstarken Akzent. Jeder Edelstein zeigt eigene natürliche Variationen – jeder Signature Strand ist damit ein Unikat.',
    beadDetail: 'Natürliche Blue Aventurine-Edelsteinperlen (ca. 7 mm)',
    materialStone: 'Natürliche Blue Aventurine-Edelsteine',
    strandLabel: 'Blue Aventurine Signature Strands',
    stoneLabel: 'Blue Aventurine',
    variationNote:
      'Natürliche Variationen in Farbe und Schimmer gehören zu dem, was jeden Signature Strand einzigartig macht.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  nl: {
    headline: 'Blue Aventurine Signature Strands',
    introP1:
      'De Blue Aventurine Signature Strands brengen koele lichtkracht, elegant contrast en rustige diepte in geselecteerde Bint Saeed-creaties. Handmatig geassembleerd in Abu Dhabi van natuurlijke Blue Aventurine-edelstenen en afgewerkt met Bint Saeeds kenmerkende goudkleurige Knotted Line-elementen, bieden ze een verfijnde manier om een vertrouwde silhouet te transformeren via één doordacht detail.',
    introP4:
      'De stoffigblauwe tonen van natuurlijke Aventurine dragen een zachte glans die licht vangt tijdens beweging, terwijl gefacetteerde, vergulde Hematite-accenten tussen elke edelsteen subtiele schittering toevoegen. Tegen donkere of zwarte stoffen creëert dit koele blauw een opvallend maar ingetogen contrast. Omdat elke edelsteen natuurlijk gevormd is, is elke Signature Strand volledig uniek in kleur, tekening en natuurlijk karakter.',
    stoneOrigin:
      'Blue Aventurine wordt gewonnen in regio’s waaronder India, Brazil, Russia en Tanzania. Gewaardeerd om zijn koele blauwe kleur en subtiele aventurescentie biedt hij een sereen maar onderscheidend accent. Elke edelsteen toont eigen natuurlijke variaties, waardoor elke Signature Strand uniek is.',
    beadDetail: 'Natuurlijke Blue Aventurine-edelstenen kralen (ongeveer 7 mm)',
    materialStone: 'Natuurlijke Blue Aventurine-edelstenen',
    strandLabel: 'Blue Aventurine Signature Strands',
    stoneLabel: 'Blue Aventurine',
    variationNote:
      'Natuurlijke variaties in kleur en glans maken deel uit van wat elke Signature Strand uniek maakt.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  pt: {
    headline: 'Signature Strands Blue Aventurine',
    introP1:
      'Os Signature Strands Blue Aventurine introduzem luminosidade fria, contraste elegante e profundidade discreta nas criações Bint Saeed selecionadas. Montados à mão em Abu Dhabi com gemas naturais Blue Aventurine e finalizados com os elementos Knotted Line dourados assinatura da Bint Saeed, oferecem uma forma refinada de transformar uma silhueta familiar através de um único detalhe cuidado.',
    introP4:
      'Os tons azul-empoeirado da Aventurine natural têm um brilho suave que capta a luz em movimento, enquanto acentos de Hematite folheada a ouro facetados entre cada gema acrescentam brilho subtil. Sobre tecidos escuros ou pretos, este azul frio cria um contraste marcante, porém discreto. Como cada gema se forma naturalmente, cada Signature Strand é inteiramente único em cor, marcas e carácter natural.',
    stoneOrigin:
      'A Blue Aventurine provém de regiões como India, Brazil, Russia e Tanzania. Apreciada pela sua cor azul fria e aventurescência subtil, oferece um acento sereno e distintivo. Cada gema exibe as suas próprias variações naturais, garantindo que cada Signature Strand seja único.',
    beadDetail: 'Contas de pedra natural Blue Aventurine (aproximadamente 7 mm)',
    materialStone: 'Gemas naturais Blue Aventurine',
    strandLabel: 'Signature Strands Blue Aventurine',
    stoneLabel: 'Blue Aventurine',
    variationNote:
      'As variações naturais de cor e brilho fazem parte do que torna cada Signature Strand único.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  id: {
    headline: 'Signature Strands Blue Aventurine',
    introP1:
      'Signature Strands Blue Aventurine menghadirkan luminositas sejuk, kontras elegan, dan kedalaman tenang pada kreasi Bint Saeed terpilih. Dirakit tangan di Abu Dhabi dari batu permata Blue Aventurine alami dan diselesaikan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, mereka menawarkan cara berkelas untuk mengubah siluet yang sudah dikenal melalui satu detail yang penuh pertimbangan.',
    introP4:
      'Rona biru berdebu dari Aventurine alami membawa kilau lembut yang menangkap cahaya saat bergerak, sementara aksen Hematite berlapis emas berfaset di antara setiap batu menambah gemerlap halus. Pada kain gelap atau hitam, biru sejuk ini menciptakan kontras yang menonjol namun tetap anggun. Karena setiap batu terbentuk secara alami, setiap Signature Strand sepenuhnya unik dalam warna, corak, dan karakter alaminya.',
    stoneOrigin:
      'Blue Aventurine bersumber dari wilayah termasuk India, Brazil, Russia, dan Tanzania. Dihargai karena warna birunya yang sejuk dan aventurescence halus, batu ini memberi aksen yang tenang sekaligus khas. Setiap batu permata menampilkan variasi alaminya sendiri, memastikan setiap Signature Strand benar-benar unik.',
    beadDetail: 'Manik batu permata Blue Aventurine alami (sekitar 7 mm)',
    materialStone: 'Batu permata Blue Aventurine alami',
    strandLabel: 'Signature Strands Blue Aventurine',
    stoneLabel: 'Blue Aventurine',
    variationNote: 'Variasi alami pada warna dan kilau merupakan bagian dari apa yang membuat setiap Signature Strand unik.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ms: {
    headline: 'Signature Strands Blue Aventurine',
    introP1:
      'Signature Strands Blue Aventurine memperkenalkan luminositi sejuk, kontras elegan dan kedalaman yang tenang kepada ciptaan Bint Saeed terpilih. Dipasang tangan di Abu Dhabi daripada batu permata Blue Aventurine semula jadi dan disiapkan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, ia menawarkan cara yang anggun untuk mengubah siluet yang biasa melalui satu butiran yang dipikirkan dengan teliti.',
    introP4:
      'Nada biru berdebu pada Aventurine semula jadi membawa kilauan lembut yang menangkap cahaya ketika bergerak, manakala aksen Hematite bersalut emas berfaset di antara setiap batu menambah kilau halus. Pada fabrik gelap atau hitam, biru sejuk ini mewujudkan kontras yang menonjol namun tetap sopan. Memandangkan setiap batu terbentuk secara semula jadi, setiap Signature Strand benar-benar unik dalam warna, corak dan karakter semula jadinya.',
    stoneOrigin:
      'Blue Aventurine bersumber dari wilayah termasuk India, Brazil, Russia dan Tanzania. Dihargai kerana warna biru sejuk serta aventurescence halus, batu ini memberi aksen yang tenang tetapi tersendiri. Setiap batu permata mempamerkan variasi semula jadinya sendiri, memastikan setiap Signature Strand benar-benar unik.',
    beadDetail: 'Manik batu permata Blue Aventurine semula jadi (kira-kira 7 mm)',
    materialStone: 'Batu permata Blue Aventurine semula jadi',
    strandLabel: 'Signature Strands Blue Aventurine',
    stoneLabel: 'Blue Aventurine',
    variationNote:
      'Variasi semula jadi pada warna dan kilauan merupakan sebahagian daripada apa yang menjadikan setiap Signature Strand unik.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
}

const FUCHSIA_JADE: VariantPack = {
  en: {
    headline: 'Fuchsia Jade Signature Strands',
    introP1:
      'The Fuchsia Jade Signature Strands introduce bold jewel tones, vivid contrast and expressive elegance to selected Bint Saeed creations. Hand-assembled in Abu Dhabi from natural Fuchsia Jade gemstones and finished with Bint Saeed’s signature gold-tone Knotted Line elements, they offer a refined way to transform a familiar silhouette through a single thoughtful detail.',
    introP4:
      'The saturated rose-fuchsia tones of natural Jade create a vivid highlight against neutral abayas, while faceted gold-plated Hematite accents positioned between every gemstone capture and reflect light with subtle brilliance. Because every gemstone is naturally formed, each Signature Strand is entirely unique in its colour, markings and natural character.',
    stoneOrigin:
      'Jade has been treasured for millennia across East and Central Asia, with notable sources including Myanmar, Guatemala and China. Fuchsia Jade is valued for its saturated rose tones and smooth polish. Every gemstone displays its own natural variations, ensuring every Signature Strand is one of a kind.',
    beadDetail: 'Natural Fuchsia Jade gemstone beads (approximately 7 mm)',
    materialStone: 'Natural Fuchsia Jade gemstones',
    strandLabel: 'Fuchsia Jade Signature Strands',
    stoneLabel: 'Fuchsia Jade',
    variationNote: 'Natural variations in colour and tone are part of what makes every Signature Strand unique.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ar: {
    headline: 'ستراندات Fuchsia Jade Signature Strands',
    introP1:
      'تقدّم ستراندات Fuchsia Jade Signature Strands درجات جوهرية جريئة وتبايناً حيوياً وأناقة معبّرة إلى مختارات من إبداعات Bint Saeed. تُجمَّع يدوياً في Abu Dhabi من أحجار Fuchsia Jade الطبيعية وتُنهى بعناصر Knotted Line الذهبية الحصرية من Bint Saeed، لتقدّم طريقة راقية لتحويل صورة مألوفة من خلال تفصيلة واحدة مدروسة.',
    introP4:
      'تمنح درجات الوردي الفوشيا المشبعة في Jade الطبيعي لمسة لونية لافتة فوق العبايات الهادئة، بينما تلتقط لمسات Hematite المطلية ذهباً والمقطّعة بين كل حجر الضوء وتعكسه ببريق رقيق. ولأن كل حجر يتشكّل طبيعياً، يكون كل Signature Strand فريداً تماماً في لونه وعلاماته وطابعه الطبيعي.',
    stoneOrigin:
      'حجر Jade مُقدَّر منذ آلاف السنين في شرق ووسط آسيا، ومن أبرز مصادره Myanmar وGuatemala وChina. ويُعرف Fuchsia Jade بتدرجاته الوردية المشبعة وصقله الناعم. يحمل كل حجر تبايناته الطبيعية الخاصة، ما يضمن أن كل Signature Strand فريد من نوعه.',
    beadDetail: 'خرز أحجار Fuchsia Jade الطبيعية (قطرها تقريباً 7 مم)',
    materialStone: 'أحجار Fuchsia Jade الطبيعية',
    strandLabel: 'ستراندات Fuchsia Jade Signature Strands',
    stoneLabel: 'Fuchsia Jade',
    variationNote: 'التباينات الطبيعية في اللون والدرجة جزء مما يجعل كل Signature Strand فريداً.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  fr: {
    headline: 'Signature Strands Fuchsia Jade',
    introP1:
      'Les Signature Strands Fuchsia Jade apportent des tonalités joaillières audacieuses, un contraste vif et une élégance expressive aux créations Bint Saeed sélectionnées. Assemblés à la main à Abu Dhabi à partir de pierres naturelles Fuchsia Jade et finis avec les éléments Knotted Line dorés signature de Bint Saeed, ils offrent une manière raffinée de transformer une silhouette familière par un seul détail réfléchi.',
    introP4:
      'Les tons rose-fuchsia saturés de la Jade naturelle créent un accent éclatant sur les abayas neutres, tandis que des accents d’Hematite plaquée or facettés entre chaque gemme captent et reflètent la lumière avec une brillance subtile. Chaque pierre étant formée naturellement, chaque Signature Strand est entièrement unique par sa couleur, ses marques et son caractère naturel.',
    stoneOrigin:
      'La Jade est prisée depuis des millénaires en Asie de l’Est et d’Asie centrale, avec des sources notables comme Myanmar, Guatemala et China. La Fuchsia Jade est appréciée pour ses tons rose saturés et son poli lisse. Chaque gemme présente ses propres variations naturelles, garantissant l’unicité de chaque Signature Strand.',
    beadDetail: 'Perles en pierre naturelle Fuchsia Jade (environ 7 mm)',
    materialStone: 'Pierres naturelles Fuchsia Jade',
    strandLabel: 'Signature Strands Fuchsia Jade',
    stoneLabel: 'Fuchsia Jade',
    variationNote:
      'Les variations naturelles de couleur et de tonalité font partie de ce qui rend chaque Signature Strand unique.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  it: {
    headline: 'Signature Strands Fuchsia Jade',
    introP1:
      'I Signature Strands Fuchsia Jade introducono tonalità gioiello audaci, contrasto vivido ed eleganza espressiva nelle creazioni Bint Saeed selezionate. Assemblati a mano ad Abu Dhabi con gemme naturali Fuchsia Jade e rifiniti con gli elementi Knotted Line dorati signature di Bint Saeed, offrono un modo raffinato di trasformare una silhouette familiare attraverso un solo dettaglio ponderato.',
    introP4:
      'I toni rosa-fucsia saturi della Jade naturale creano un accento vivido sulle abaya neutre, mentre accenti di Hematite placcata oro sfaccettati tra ogni gemma catturano e riflettono la luce con brillantezza sottile. Poiché ogni gemma è formata naturalmente, ogni Signature Strand è interamente unico nel colore, nelle venature e nel carattere naturale.',
    stoneOrigin:
      'La Jade è apprezzata da millenni in Asia orientale e centrale, con fonti notevoli tra cui Myanmar, Guatemala e China. La Fuchsia Jade è valorizzata per i suoi toni rosa saturi e la lucidatura uniforme. Ogni gemma mostra le proprie variazioni naturali, garantendo l’unicità di ogni Signature Strand.',
    beadDetail: 'Perle in pietra naturale Fuchsia Jade (circa 7 mm)',
    materialStone: 'Gemme naturali Fuchsia Jade',
    strandLabel: 'Signature Strands Fuchsia Jade',
    stoneLabel: 'Fuchsia Jade',
    variationNote:
      'Le variazioni naturali di colore e tonalità fanno parte di ciò che rende ogni Signature Strand unico.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  es: {
    headline: 'Signature Strands Fuchsia Jade',
    introP1:
      'Los Signature Strands Fuchsia Jade aportan tonos joya intensos, contraste vivo y elegancia expresiva a creaciones seleccionadas de Bint Saeed. Ensamblados a mano en Abu Dhabi con gemas naturales Fuchsia Jade y acabados con los elementos Knotted Line dorados característicos de Bint Saeed, ofrecen una forma refinada de transformar una silueta familiar mediante un solo detalle cuidado.',
    introP4:
      'Los tonos rosa-fucsia saturados de la Jade natural crean un punto de color vibrante sobre abayas neutras, mientras los acentos de Hematite chapada en oro facetados entre cada gema captan y reflejan la luz con brillo sutil. Como cada gema se forma de manera natural, cada Signature Strand es enteramente único en color, marcas y carácter natural.',
    stoneOrigin:
      'La Jade ha sido apreciada durante milenios en Asia oriental y central, con fuentes destacadas como Myanmar, Guatemala y China. La Fuchsia Jade se valora por sus tonos rosa saturados y su pulido suave. Cada gema muestra sus propias variaciones naturales, garantizando que cada Signature Strand sea único.',
    beadDetail: 'Cuentas de piedra natural Fuchsia Jade (aproximadamente 7 mm)',
    materialStone: 'Gemas naturales Fuchsia Jade',
    strandLabel: 'Signature Strands Fuchsia Jade',
    stoneLabel: 'Fuchsia Jade',
    variationNote:
      'Las variaciones naturales de color y tono forman parte de lo que hace único cada Signature Strand.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ru: {
    headline: 'Signature Strands «Fuchsia Jade»',
    introP1:
      'Signature Strands «Fuchsia Jade» добавляют насыщенные ювелирные оттенки, яркий контраст и выразительную элегантность в избранные творения Bint Saeed. Собраны вручную в Abu Dhabi из натуральных камней Fuchsia Jade и завершены фирменными золотистыми элементами Knotted Line от Bint Saeed — они предлагают утончённый способ преобразить знакомый силуэт через одну продуманную деталь.',
    introP4:
      'Насыщенные розово-фуксиевые тона натурального Jade создают выразительный акцент на нейтральных абаях, а фасетированные акценты из позолоченного Hematite между камнями мягко улавливают и отражают свет. Поскольку каждый камень сформирован природой, каждый Signature Strand уникален по цвету, рисунку и природному характеру.',
    stoneOrigin:
      'Jade ценится на протяжении тысячелетий в Восточной и Центральной Азии; среди значимых источников — Myanmar, Guatemala и China. Fuchsia Jade известен насыщенными розовыми оттенками и гладкой полировкой. Каждый камень имеет собственные природные вариации, поэтому каждый Signature Strand неповторим.',
    beadDetail: 'Бусины из натурального Fuchsia Jade (примерно 7 мм)',
    materialStone: 'Натуральные камни Fuchsia Jade',
    strandLabel: 'Signature Strands «Fuchsia Jade»',
    stoneLabel: 'Fuchsia Jade',
    variationNote: 'Природные различия в цвете и тоне делают каждый Signature Strand уникальным.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  zh: {
    headline: 'Fuchsia Jade Signature Strands',
    introP1:
      'Fuchsia Jade Signature Strands 为精选 Bint Saeed 作品注入饱和宝石色调、鲜明对比与富有表现力的优雅感。于 Abu Dhabi 以天然 Fuchsia Jade 手工组装，并以 Bint Saeed 标志性金色 Knotted Line 元素收尾，以一处精心细节优雅改变熟悉轮廓。',
    introP4:
      '天然 Jade 的玫粉至紫红色调在中性色 Abaya 上形成明亮点缀；每颗宝石之间加入切面镀金 Hematite 点缀，随动作捕捉并反射细腻光泽。因每颗宝石皆天然形成，每条 Signature Strand 在色泽、纹理与自然个性上皆独一无二。',
    stoneOrigin:
      'Jade 在东亚与中亚地区已被珍视数千年，主要来源包括 Myanmar、Guatemala 与 China。Fuchsia Jade 以高饱和玫色与顺滑抛光而备受喜爱。每颗宝石都具天然差异，确保每条 Signature Strand 都独一无二。',
    beadDetail: '天然 Fuchsia Jade 珠（约 7 毫米）',
    materialStone: '天然 Fuchsia Jade',
    strandLabel: 'Fuchsia Jade Signature Strands',
    stoneLabel: 'Fuchsia Jade',
    variationNote: '色泽与色调的天然差异，正是每条 Signature Strand 的独特之处。',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  de: {
    headline: 'Fuchsia Jade Signature Strands',
    introP1:
      'Die Fuchsia Jade Signature Strands bringen kräftige Juweltöne, lebendigen Kontrast und ausdrucksstarke Eleganz in ausgewählte Bint Saeed-Kreationen. Handmontiert in Abu Dhabi aus natürlichen Fuchsia Jade-Edelsteinen und veredelt mit Bint Saeeds charakteristischen goldfarbenen Knotted Line-Elementen bieten sie eine raffinierte Möglichkeit, eine vertraute Silhouette durch ein einziges durchdachtes Detail zu verwandeln.',
    introP4:
      'Die gesättigten Rosé-Fuchsia-Töne natürlicher Jade setzen ein lebendiges Highlight auf neutralen Abayas, während facettierte, vergoldete Hematite-Akzente zwischen jedem Edelstein Licht mit subtiler Brillanz einfangen und reflektieren. Da jeder Stein natürlich entstanden ist, ist jeder Signature Strand in Farbe, Maserung und natürlichem Charakter völlig einzigartig.',
    stoneOrigin:
      'Jade wird seit Jahrtausenden in Ost- und Zentralasien geschätzt; bedeutende Quellen sind Myanmar, Guatemala und China. Fuchsia Jade ist für seine satten Rosétöne und die glatte Politur bekannt. Jeder Edelstein zeigt eigene natürliche Variationen – jeder Signature Strand ist damit ein Unikat.',
    beadDetail: 'Natürliche Fuchsia Jade-Edelsteinperlen (ca. 7 mm)',
    materialStone: 'Natürliche Fuchsia Jade-Edelsteine',
    strandLabel: 'Fuchsia Jade Signature Strands',
    stoneLabel: 'Fuchsia Jade',
    variationNote:
      'Natürliche Variationen in Farbe und Ton gehören zu dem, was jeden Signature Strand einzigartig macht.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  nl: {
    headline: 'Fuchsia Jade Signature Strands',
    introP1:
      'De Fuchsia Jade Signature Strands brengen krachtige juweeltinten, levendig contrast en expressieve elegantie in geselecteerde Bint Saeed-creaties. Handmatig geassembleerd in Abu Dhabi van natuurlijke Fuchsia Jade-edelstenen en afgewerkt met Bint Saeeds kenmerkende goudkleurige Knotted Line-elementen, bieden ze een verfijnde manier om een vertrouwde silhouet te transformeren via één doordacht detail.',
    introP4:
      'De verzadigde roos-fuchsiatinten van natuurlijke Jade vormen een levendig accent op neutrale abaya’s, terwijl gefacetteerde, vergulde Hematite-accenten tussen elke edelsteen licht met subtiele glans vangen en weerkaatsen. Omdat elke edelsteen natuurlijk gevormd is, is elke Signature Strand volledig uniek in kleur, tekening en natuurlijk karakter.',
    stoneOrigin:
      'Jade wordt al millennia gewaardeerd in Oost- en Centraal-Azië, met belangrijke bronnen in Myanmar, Guatemala en China. Fuchsia Jade staat bekend om zijn verzadigde rozetinten en gladde polijsting. Elke edelsteen toont eigen natuurlijke variaties, waardoor elke Signature Strand uniek is.',
    beadDetail: 'Natuurlijke Fuchsia Jade-edelstenen kralen (ongeveer 7 mm)',
    materialStone: 'Natuurlijke Fuchsia Jade-edelstenen',
    strandLabel: 'Fuchsia Jade Signature Strands',
    stoneLabel: 'Fuchsia Jade',
    variationNote:
      'Natuurlijke variaties in kleur en toon maken deel uit van wat elke Signature Strand uniek maakt.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  pt: {
    headline: 'Signature Strands Fuchsia Jade',
    introP1:
      'Os Signature Strands Fuchsia Jade introduzem tons de joia intensos, contraste vibrante e elegância expressiva nas criações Bint Saeed selecionadas. Montados à mão em Abu Dhabi com gemas naturais Fuchsia Jade e finalizados com os elementos Knotted Line dourados assinatura da Bint Saeed, oferecem uma forma refinada de transformar uma silhueta familiar através de um único detalhe cuidado.',
    introP4:
      'Os tons rosa-fúcsia saturados da Jade natural criam um destaque vibrante sobre abayas neutras, enquanto acentos de Hematite folheada a ouro facetados entre cada gema captam e reflectem a luz com brilho subtil. Como cada gema se forma naturalmente, cada Signature Strand é inteiramente único em cor, marcas e carácter natural.',
    stoneOrigin:
      'A Jade é valorizada há milénios no Leste e Centro da Ásia, com fontes de destaque em Myanmar, Guatemala e China. A Fuchsia Jade é apreciada pelos seus tons rosa saturados e polimento suave. Cada gema exibe as suas próprias variações naturais, garantindo que cada Signature Strand seja único.',
    beadDetail: 'Contas de pedra natural Fuchsia Jade (aproximadamente 7 mm)',
    materialStone: 'Gemas naturais Fuchsia Jade',
    strandLabel: 'Signature Strands Fuchsia Jade',
    stoneLabel: 'Fuchsia Jade',
    variationNote:
      'As variações naturais de cor e tonalidade fazem parte do que torna cada Signature Strand único.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  id: {
    headline: 'Signature Strands Fuchsia Jade',
    introP1:
      'Signature Strands Fuchsia Jade menghadirkan rona permata berani, kontras hidup, dan keanggunan ekspresif pada kreasi Bint Saeed terpilih. Dirakit tangan di Abu Dhabi dari batu permata Fuchsia Jade alami dan diselesaikan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, mereka menawarkan cara berkelas untuk mengubah siluet yang sudah dikenal melalui satu detail yang penuh pertimbangan.',
    introP4:
      'Rona mawar-fuchsia yang jenuh dari Jade alami menciptakan aksen mencolok pada abaya netral, sementara aksen Hematite berlapis emas berfaset di antara setiap batu menangkap dan memantulkan cahaya dengan kilau halus. Karena setiap batu terbentuk secara alami, setiap Signature Strand sepenuhnya unik dalam warna, corak, dan karakter alaminya.',
    stoneOrigin:
      'Jade telah dihargai selama ribuan tahun di Asia Timur dan Asia Tengah, dengan sumber penting termasuk Myanmar, Guatemala, dan China. Fuchsia Jade dinilai karena rona mawar jenuh dan polesan halusnya. Setiap batu permata menampilkan variasi alaminya sendiri, memastikan setiap Signature Strand benar-benar unik.',
    beadDetail: 'Manik batu permata Fuchsia Jade alami (sekitar 7 mm)',
    materialStone: 'Batu permata Fuchsia Jade alami',
    strandLabel: 'Signature Strands Fuchsia Jade',
    stoneLabel: 'Fuchsia Jade',
    variationNote: 'Variasi alami pada warna dan rona merupakan bagian dari apa yang membuat setiap Signature Strand unik.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ms: {
    headline: 'Signature Strands Fuchsia Jade',
    introP1:
      'Signature Strands Fuchsia Jade memperkenalkan tona permata berani, kontras bertenaga dan keanggunan yang ekspresif kepada ciptaan Bint Saeed terpilih. Dipasang tangan di Abu Dhabi daripada batu permata Fuchsia Jade semula jadi dan disiapkan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, ia menawarkan cara yang anggun untuk mengubah siluet yang biasa melalui satu butiran yang dipikirkan dengan teliti.',
    introP4:
      'Tona mawar-fuchsia tepu pada Jade semula jadi mencipta aksen menonjol pada abaya neutral, manakala aksen Hematite bersalut emas berfaset di antara setiap batu menangkap dan memantulkan cahaya dengan kilauan halus. Memandangkan setiap batu terbentuk secara semula jadi, setiap Signature Strand benar-benar unik dalam warna, corak dan karakter semula jadinya.',
    stoneOrigin:
      'Jade telah dihargai selama ribuan tahun di Asia Timur dan Asia Tengah, dengan sumber penting termasuk Myanmar, Guatemala dan China. Fuchsia Jade dinilai kerana tona mawar tepu dan penggilapan licinnya. Setiap batu permata mempamerkan variasi semula jadinya sendiri, memastikan setiap Signature Strand benar-benar unik.',
    beadDetail: 'Manik batu permata Fuchsia Jade semula jadi (kira-kira 7 mm)',
    materialStone: 'Batu permata Fuchsia Jade semula jadi',
    strandLabel: 'Signature Strands Fuchsia Jade',
    stoneLabel: 'Fuchsia Jade',
    variationNote:
      'Variasi semula jadi pada warna dan tona merupakan sebahagian daripada apa yang menjadikan setiap Signature Strand unik.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
}

const ORANGE_JADE: VariantPack = {
  en: {
    headline: 'Orange Jade Signature Strands',
    introP1:
      'The Orange Jade Signature Strands introduce warm jewel tones, radiant contrast and expressive elegance to selected Bint Saeed creations. Hand-assembled in Abu Dhabi from natural Orange Jade gemstones and finished with Bint Saeed’s signature gold-tone Knotted Line elements, they offer a refined way to transform a familiar silhouette through a single thoughtful detail.',
    introP4:
      'The warm amber-orange tones of natural Jade create a radiant highlight against neutral abayas, while faceted gold-plated Hematite accents positioned between every gemstone capture and reflect light with subtle brilliance. Because every gemstone is naturally formed, each Signature Strand is entirely unique in its colour, markings and natural character.',
    stoneOrigin:
      'Jade has been treasured for millennia across East and Central Asia, with notable sources including Myanmar, Guatemala and China. Orange Jade is valued for its warm amber tones and smooth polish. Every gemstone displays its own natural variations, ensuring every Signature Strand is one of a kind.',
    beadDetail: 'Natural Orange Jade gemstone beads (approximately 7 mm)',
    materialStone: 'Natural Orange Jade gemstones',
    strandLabel: 'Orange Jade Signature Strands',
    stoneLabel: 'Orange Jade',
    variationNote: 'Natural variations in colour and tone are part of what makes every Signature Strand unique.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ar: {
    headline: 'ستراندات Orange Jade Signature Strands',
    introP1:
      'تقدّم ستراندات Orange Jade Signature Strands درجات جوهرية دافئة وتبايناً مشرقاً وأناقة معبّرة إلى مختارات من إبداعات Bint Saeed. تُجمَّع يدوياً في Abu Dhabi من أحجار Orange Jade الطبيعية وتُنهى بعناصر Knotted Line الذهبية الحصرية من Bint Saeed، لتقدّم طريقة راقية لتحويل صورة مألوفة من خلال تفصيلة واحدة مدروسة.',
    introP4:
      'تمنح درجات الكهرماني البرتقالي الدافئة في Jade الطبيعي لمسة لونية مشرقة فوق العبايات الهادئة، بينما تلتقط لمسات Hematite المطلية ذهباً والمقطّعة بين كل حجر الضوء وتعكسه ببريق رقيق. ولأن كل حجر يتشكّل طبيعياً، يكون كل Signature Strand فريداً تماماً في لونه وعلاماته وطابعه الطبيعي.',
    stoneOrigin:
      'حجر Jade مُقدَّر منذ آلاف السنين في شرق ووسط آسيا، ومن أبرز مصادره Myanmar وGuatemala وChina. ويُعرف Orange Jade بتدرجاته الكهرمانية الدافئة وصقله الناعم. يحمل كل حجر تبايناته الطبيعية الخاصة، ما يضمن أن كل Signature Strand فريد من نوعه.',
    beadDetail: 'خرز أحجار Orange Jade الطبيعية (قطرها تقريباً 7 مم)',
    materialStone: 'أحجار Orange Jade الطبيعية',
    strandLabel: 'ستراندات Orange Jade Signature Strands',
    stoneLabel: 'Orange Jade',
    variationNote: 'التباينات الطبيعية في اللون والدرجة جزء مما يجعل كل Signature Strand فريداً.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  fr: {
    headline: 'Signature Strands Orange Jade',
    introP1:
      'Les Signature Strands Orange Jade apportent des tonalités joaillières chaleureuses, un contraste rayonnant et une élégance expressive aux créations Bint Saeed sélectionnées. Assemblés à la main à Abu Dhabi à partir de pierres naturelles Orange Jade et finis avec les éléments Knotted Line dorés signature de Bint Saeed, ils offrent une manière raffinée de transformer une silhouette familière par un seul détail réfléchi.',
    introP4:
      'Les tons ambre-orangé chaleureux de la Jade naturelle créent un accent rayonnant sur les abayas neutres, tandis que des accents d’Hematite plaquée or facettés entre chaque gemme captent et reflètent la lumière avec une brillance subtile. Chaque pierre étant formée naturellement, chaque Signature Strand est entièrement unique par sa couleur, ses marques et son caractère naturel.',
    stoneOrigin:
      'La Jade est prisée depuis des millénaires en Asie de l’Est et d’Asie centrale, avec des sources notables comme Myanmar, Guatemala et China. L’Orange Jade est appréciée pour ses tons ambrés chaleureux et son poli lisse. Chaque gemme présente ses propres variations naturelles, garantissant l’unicité de chaque Signature Strand.',
    beadDetail: 'Perles en pierre naturelle Orange Jade (environ 7 mm)',
    materialStone: 'Pierres naturelles Orange Jade',
    strandLabel: 'Signature Strands Orange Jade',
    stoneLabel: 'Orange Jade',
    variationNote:
      'Les variations naturelles de couleur et de tonalité font partie de ce qui rend chaque Signature Strand unique.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  it: {
    headline: 'Signature Strands Orange Jade',
    introP1:
      'I Signature Strands Orange Jade introducono tonalità gioiello calde, contrasto radioso ed eleganza espressiva nelle creazioni Bint Saeed selezionate. Assemblati a mano ad Abu Dhabi con gemme naturali Orange Jade e rifiniti con gli elementi Knotted Line dorati signature di Bint Saeed, offrono un modo raffinato di trasformare una silhouette familiare attraverso un solo dettaglio ponderato.',
    introP4:
      'I toni ambra-arancio caldi della Jade naturale creano un accento radioso sulle abaya neutre, mentre accenti di Hematite placcata oro sfaccettati tra ogni gemma catturano e riflettono la luce con brillantezza sottile. Poiché ogni gemma è formata naturalmente, ogni Signature Strand è interamente unico nel colore, nelle venature e nel carattere naturale.',
    stoneOrigin:
      'La Jade è apprezzata da millenni in Asia orientale e centrale, con fonti notevoli tra cui Myanmar, Guatemala e China. L’Orange Jade è valorizzata per i suoi toni ambrati caldi e la lucidatura uniforme. Ogni gemma mostra le proprie variazioni naturali, garantendo l’unicità di ogni Signature Strand.',
    beadDetail: 'Perle in pietra naturale Orange Jade (circa 7 mm)',
    materialStone: 'Gemme naturali Orange Jade',
    strandLabel: 'Signature Strands Orange Jade',
    stoneLabel: 'Orange Jade',
    variationNote:
      'Le variazioni naturali di colore e tonalità fanno parte di ciò che rende ogni Signature Strand unico.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  es: {
    headline: 'Signature Strands Orange Jade',
    introP1:
      'Los Signature Strands Orange Jade aportan tonos joya cálidos, contraste radiante y elegancia expresiva a creaciones seleccionadas de Bint Saeed. Ensamblados a mano en Abu Dhabi con gemas naturales Orange Jade y acabados con los elementos Knotted Line dorados característicos de Bint Saeed, ofrecen una forma refinada de transformar una silueta familiar mediante un solo detalle cuidado.',
    introP4:
      'Los tonos ámbar-naranja cálidos de la Jade natural crean un punto de color radiante sobre abayas neutras, mientras los acentos de Hematite chapada en oro facetados entre cada gema captan y reflejan la luz con brillo sutil. Como cada gema se forma de manera natural, cada Signature Strand es enteramente único en color, marcas y carácter natural.',
    stoneOrigin:
      'La Jade ha sido apreciada durante milenios en Asia oriental y central, con fuentes destacadas como Myanmar, Guatemala y China. La Orange Jade se valora por sus tonos ámbar cálidos y su pulido suave. Cada gema muestra sus propias variaciones naturales, garantizando que cada Signature Strand sea único.',
    beadDetail: 'Cuentas de piedra natural Orange Jade (aproximadamente 7 mm)',
    materialStone: 'Gemas naturales Orange Jade',
    strandLabel: 'Signature Strands Orange Jade',
    stoneLabel: 'Orange Jade',
    variationNote:
      'Las variaciones naturales de color y tono forman parte de lo que hace único cada Signature Strand.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ru: {
    headline: 'Signature Strands «Orange Jade»',
    introP1:
      'Signature Strands «Orange Jade» добавляют тёплые ювелирные оттенки, сияющий контраст и выразительную элегантность в избранные творения Bint Saeed. Собраны вручную в Abu Dhabi из натуральных камней Orange Jade и завершены фирменными золотистыми элементами Knotted Line от Bint Saeed — они предлагают утончённый способ преобразить знакомый силуэт через одну продуманную деталь.',
    introP4:
      'Тёплые янтарно-оранжевые тона натурального Jade создают сияющий акцент на нейтральных абаях, а фасетированные акценты из позолоченного Hematite между камнями мягко улавливают и отражают свет. Поскольку каждый камень сформирован природой, каждый Signature Strand уникален по цвету, рисунку и природному характеру.',
    stoneOrigin:
      'Jade ценится на протяжении тысячелетий в Восточной и Центральной Азии; среди значимых источников — Myanmar, Guatemala и China. Orange Jade известен тёплыми янтарными оттенками и гладкой полировкой. Каждый камень имеет собственные природные вариации, поэтому каждый Signature Strand неповторим.',
    beadDetail: 'Бусины из натурального Orange Jade (примерно 7 мм)',
    materialStone: 'Натуральные камни Orange Jade',
    strandLabel: 'Signature Strands «Orange Jade»',
    stoneLabel: 'Orange Jade',
    variationNote: 'Природные различия в цвете и тоне делают каждый Signature Strand уникальным.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  zh: {
    headline: 'Orange Jade Signature Strands',
    introP1:
      'Orange Jade Signature Strands 为精选 Bint Saeed 作品注入温暖宝石色调、明亮对比与富有表现力的优雅感。于 Abu Dhabi 以天然 Orange Jade 手工组装，并以 Bint Saeed 标志性金色 Knotted Line 元素收尾，以一处精心细节优雅改变熟悉轮廓。',
    introP4:
      '天然 Jade 的温暖琥珀橙色调在中性色 Abaya 上形成明亮点缀；每颗宝石之间加入切面镀金 Hematite 点缀，随动作捕捉并反射细腻光泽。因每颗宝石皆天然形成，每条 Signature Strand 在色泽、纹理与自然个性上皆独一无二。',
    stoneOrigin:
      'Jade 在东亚与中亚地区已被珍视数千年，主要来源包括 Myanmar、Guatemala 与 China。Orange Jade 以温暖琥珀色与顺滑抛光而备受喜爱。每颗宝石都具天然差异，确保每条 Signature Strand 都独一无二。',
    beadDetail: '天然 Orange Jade 珠（约 7 毫米）',
    materialStone: '天然 Orange Jade',
    strandLabel: 'Orange Jade Signature Strands',
    stoneLabel: 'Orange Jade',
    variationNote: '色泽与色调的天然差异，正是每条 Signature Strand 的独特之处。',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  de: {
    headline: 'Orange Jade Signature Strands',
    introP1:
      'Die Orange Jade Signature Strands bringen warme Juweltöne, strahlenden Kontrast und ausdrucksstarke Eleganz in ausgewählte Bint Saeed-Kreationen. Handmontiert in Abu Dhabi aus natürlichen Orange Jade-Edelsteinen und veredelt mit Bint Saeeds charakteristischen goldfarbenen Knotted Line-Elementen bieten sie eine raffinierte Möglichkeit, eine vertraute Silhouette durch ein einziges durchdachtes Detail zu verwandeln.',
    introP4:
      'Die warmen Bernstein-Orange-Töne natürlicher Jade setzen ein strahlendes Highlight auf neutralen Abayas, während facettierte, vergoldete Hematite-Akzente zwischen jedem Edelstein Licht mit subtiler Brillanz einfangen und reflektieren. Da jeder Stein natürlich entstanden ist, ist jeder Signature Strand in Farbe, Maserung und natürlichem Charakter völlig einzigartig.',
    stoneOrigin:
      'Jade wird seit Jahrtausenden in Ost- und Zentralasien geschätzt; bedeutende Quellen sind Myanmar, Guatemala und China. Orange Jade ist für seine warmen Bernsteintöne und die glatte Politur bekannt. Jeder Edelstein zeigt eigene natürliche Variationen – jeder Signature Strand ist damit ein Unikat.',
    beadDetail: 'Natürliche Orange Jade-Edelsteinperlen (ca. 7 mm)',
    materialStone: 'Natürliche Orange Jade-Edelsteine',
    strandLabel: 'Orange Jade Signature Strands',
    stoneLabel: 'Orange Jade',
    variationNote:
      'Natürliche Variationen in Farbe und Ton gehören zu dem, was jeden Signature Strand einzigartig macht.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  nl: {
    headline: 'Orange Jade Signature Strands',
    introP1:
      'De Orange Jade Signature Strands brengen warme juweeltinten, stralend contrast en expressieve elegantie in geselecteerde Bint Saeed-creaties. Handmatig geassembleerd in Abu Dhabi van natuurlijke Orange Jade-edelstenen en afgewerkt met Bint Saeeds kenmerkende goudkleurige Knotted Line-elementen, bieden ze een verfijnde manier om een vertrouwde silhouet te transformeren via één doordacht detail.',
    introP4:
      'De warme amber-oranje tinten van natuurlijke Jade vormen een stralend accent op neutrale abaya’s, terwijl gefacetteerde, vergulde Hematite-accenten tussen elke edelsteen licht met subtiele glans vangen en weerkaatsen. Omdat elke edelsteen natuurlijk gevormd is, is elke Signature Strand volledig uniek in kleur, tekening en natuurlijk karakter.',
    stoneOrigin:
      'Jade wordt al millennia gewaardeerd in Oost- en Centraal-Azië, met belangrijke bronnen in Myanmar, Guatemala en China. Orange Jade staat bekend om zijn warme ambertinten en gladde polijsting. Elke edelsteen toont eigen natuurlijke variaties, waardoor elke Signature Strand uniek is.',
    beadDetail: 'Natuurlijke Orange Jade-edelstenen kralen (ongeveer 7 mm)',
    materialStone: 'Natuurlijke Orange Jade-edelstenen',
    strandLabel: 'Orange Jade Signature Strands',
    stoneLabel: 'Orange Jade',
    variationNote:
      'Natuurlijke variaties in kleur en toon maken deel uit van wat elke Signature Strand uniek maakt.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  pt: {
    headline: 'Signature Strands Orange Jade',
    introP1:
      'Os Signature Strands Orange Jade introduzem tons de joia quentes, contraste radiante e elegância expressiva nas criações Bint Saeed selecionadas. Montados à mão em Abu Dhabi com gemas naturais Orange Jade e finalizados com os elementos Knotted Line dourados assinatura da Bint Saeed, oferecem uma forma refinada de transformar uma silhueta familiar através de um único detalhe cuidado.',
    introP4:
      'Os tons âmbar-laranja quentes da Jade natural criam um destaque radiante sobre abayas neutras, enquanto acentos de Hematite folheada a ouro facetados entre cada gema captam e reflectem a luz com brilho subtil. Como cada gema se forma naturalmente, cada Signature Strand é inteiramente único em cor, marcas e carácter natural.',
    stoneOrigin:
      'A Jade é valorizada há milénios no Leste e Centro da Ásia, com fontes de destaque em Myanmar, Guatemala e China. A Orange Jade é apreciada pelos seus tons âmbar quentes e polimento suave. Cada gema exibe as suas próprias variações naturais, garantindo que cada Signature Strand seja único.',
    beadDetail: 'Contas de pedra natural Orange Jade (aproximadamente 7 mm)',
    materialStone: 'Gemas naturais Orange Jade',
    strandLabel: 'Signature Strands Orange Jade',
    stoneLabel: 'Orange Jade',
    variationNote:
      'As variações naturais de cor e tonalidade fazem parte do que torna cada Signature Strand único.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  id: {
    headline: 'Signature Strands Orange Jade',
    introP1:
      'Signature Strands Orange Jade menghadirkan rona permata hangat, kontras berseri, dan keanggunan ekspresif pada kreasi Bint Saeed terpilih. Dirakit tangan di Abu Dhabi dari batu permata Orange Jade alami dan diselesaikan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, mereka menawarkan cara berkelas untuk mengubah siluet yang sudah dikenal melalui satu detail yang penuh pertimbangan.',
    introP4:
      'Rona amber-oranye hangat dari Jade alami menciptakan aksen berseri pada abaya netral, sementara aksen Hematite berlapis emas berfaset di antara setiap batu menangkap dan memantulkan cahaya dengan kilau halus. Karena setiap batu terbentuk secara alami, setiap Signature Strand sepenuhnya unik dalam warna, corak, dan karakter alaminya.',
    stoneOrigin:
      'Jade telah dihargai selama ribuan tahun di Asia Timur dan Asia Tengah, dengan sumber penting termasuk Myanmar, Guatemala, dan China. Orange Jade dinilai karena rona amber hangat dan polesan halusnya. Setiap batu permata menampilkan variasi alaminya sendiri, memastikan setiap Signature Strand benar-benar unik.',
    beadDetail: 'Manik batu permata Orange Jade alami (sekitar 7 mm)',
    materialStone: 'Batu permata Orange Jade alami',
    strandLabel: 'Signature Strands Orange Jade',
    stoneLabel: 'Orange Jade',
    variationNote: 'Variasi alami pada warna dan rona merupakan bagian dari apa yang membuat setiap Signature Strand unik.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ms: {
    headline: 'Signature Strands Orange Jade',
    introP1:
      'Signature Strands Orange Jade memperkenalkan tona permata hangat, kontras berseri dan keanggunan yang ekspresif kepada ciptaan Bint Saeed terpilih. Dipasang tangan di Abu Dhabi daripada batu permata Orange Jade semula jadi dan disiapkan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, ia menawarkan cara yang anggun untuk mengubah siluet yang biasa melalui satu butiran yang dipikirkan dengan teliti.',
    introP4:
      'Tona amber-oren hangat pada Jade semula jadi mencipta aksen berseri pada abaya neutral, manakala aksen Hematite bersalut emas berfaset di antara setiap batu menangkap dan memantulkan cahaya dengan kilauan halus. Memandangkan setiap batu terbentuk secara semula jadi, setiap Signature Strand benar-benar unik dalam warna, corak dan karakter semula jadinya.',
    stoneOrigin:
      'Jade telah dihargai selama ribuan tahun di Asia Timur dan Asia Tengah, dengan sumber penting termasuk Myanmar, Guatemala dan China. Orange Jade dinilai kerana tona amber hangat dan penggilapan licinnya. Setiap batu permata mempamerkan variasi semula jadinya sendiri, memastikan setiap Signature Strand benar-benar unik.',
    beadDetail: 'Manik batu permata Orange Jade semula jadi (kira-kira 7 mm)',
    materialStone: 'Batu permata Orange Jade semula jadi',
    strandLabel: 'Signature Strands Orange Jade',
    stoneLabel: 'Orange Jade',
    variationNote:
      'Variasi semula jadi pada warna dan tona merupakan sebahagian daripada apa yang menjadikan setiap Signature Strand unik.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
}

const NATURAL_JADE: VariantPack = {
  en: {
    headline: 'Natural Jade Signature Strands',
    introP1:
      'The Natural Jade Signature Strands introduce quiet depth, muted green-teal calm and refined presence to selected Bint Saeed creations. Hand-assembled in Abu Dhabi from natural jade gemstones — never coloured jade — and finished with Bint Saeed’s signature gold-tone Knotted Line elements, they allow a familiar silhouette to be reimagined through one thoughtful detail.',
    introP4:
      'Natural jade is valued for its soft muted green-to-teal tones and polished surface. Between every gemstone, faceted gold-plated Hematite accents introduce delicate brilliance, creating a beautiful interplay of light throughout the strand. Because every gemstone is naturally formed, each Signature Strand is entirely unique in its colour, markings and character.',
    stoneOrigin:
      'Jade has been treasured for millennia across East and Central Asia, with notable sources including Myanmar, Guatemala and China. Natural Jade is valued for soft muted green-to-teal tones and its genuine, undyed colour — never coloured or dyed jade. Every gemstone displays its own natural variations, ensuring every Signature Strand is one of a kind.',
    beadDetail: 'Natural Jade gemstone beads (approximately 7 mm)',
    materialStone: 'Natural Jade gemstones',
    strandLabel: 'Natural Jade Signature Strands',
    stoneLabel: 'Natural Jade',
    variationNote:
      'Variations in colour, tone and markings are natural — a hallmark of genuine jade, not coloured jade.',
    introP2Style: 'mood',
    limitedEdition: false,
  },
  ar: {
    headline: 'ستراندات اليشم الطبيعي Signature Strands',
    introP1:
      'تقدّم ستراندات اليشم الطبيعي Signature Strands عمقاً هادئاً وهدوءاً مخضراً مائلًا إلى التركواز وأناقة رصينة إلى مختارات من إبداعات Bint Saeed. تُجمَّع يدوياً في أبوظبي من أحجار اليشم الطبيعية — وليس اليشم الملوَّن — وتُنهى بعناصر Knotted Line الذهبية الحصرية من Bint Saeed، لتُعيد تخيّل صورة مألوفة من خلال تفصيلة واحدة مدروسة.',
    introP4:
      'يُقدَّر اليشم الطبيعي لدرجاته الخضراء التركوازية الهادئة المخفّفة وسطحه المصقول. بين كل حجر كريم، تضيف لمسات الهيماتيت المطلية ذهباً والمقطّعة بريقاً رقيقاً، مما يخلق تفاعلاً جميلاً للضوء على طول الستراند. ولأن كل حجر يتشكّل طبيعياً، يكون كل Signature Strand فريداً تماماً في لونه وعلاماته وطابعه.',
    stoneOrigin:
      'حجر اليشم مُقدَّر منذ آلاف السنين في شرق ووسط آسيا، ومن أبرز مصادره ميانمار وغواتيمالا والصين. ويُعرف اليشم الطبيعي بدرجاته الخضراء التركوازية الهادئة ولونه الأصيل غير المصبوغ — وليس اليشم الملوَّن أو المصبوغ. يحمل كل حجر تبايناته الطبيعية الخاصة، ما يضمن أن كل Signature Strand فريد من نوعه.',
    beadDetail: 'خرز أحجار اليشم الطبيعي (قطرها تقريباً 7 مم)',
    materialStone: 'أحجار اليشم الطبيعي',
    strandLabel: 'ستراندات اليشم الطبيعي Signature Strands',
    stoneLabel: 'يشم طبيعي',
    variationNote:
      'تباينات اللون والدرجة والعلامات طبيعية — وهي سمة اليشم الأصيل، وليس اليشم الملوَّن.',
    introP2Style: 'mood',
    limitedEdition: false,
  },
  fr: {
    headline: 'Signature Strands Jade naturelle',
    introP1:
      'Les Signature Strands Jade naturelle apportent une profondeur discrète, un calme vert-sarcelle atténué et une présence raffinée aux créations Bint Saeed sélectionnées. Assemblés à la main à Abu Dhabi à partir de pierres de jade naturelles — jamais de jade coloré — et finis avec les éléments Knotted Line dorés signature de Bint Saeed, ils permettent de réinventer une silhouette familière par un seul détail réfléchi.',
    introP4:
      'La jade naturelle est prisée pour ses tons verts-sarcelle doux et atténués et sa surface polie. Entre chaque gemme, des accents d’Hématite plaquée or facettés introduisent une brillance délicate, créant un jeu de lumière tout au long du fil. Chaque pierre étant formée naturellement, chaque Signature Strand est entièrement unique par sa couleur, ses marques et son caractère.',
    stoneOrigin:
      'La jade est prisée depuis des millénaires en Asie de l’Est et d’Asie centrale, avec des sources notables comme Myanmar, Guatemala et China. La Jade naturelle est appréciée pour ses tons verts-sarcelle doux et atténués et sa couleur authentique, non teintée — jamais de jade coloré ou teinté. Chaque gemme présente ses propres variations naturelles, garantissant l’unicité de chaque Signature Strand.',
    beadDetail: 'Perles en pierre naturelle Jade (environ 7 mm)',
    materialStone: 'Pierres de Jade naturelles',
    strandLabel: 'Signature Strands Jade naturelle',
    stoneLabel: 'Jade naturelle',
    variationNote:
      'Les variations de couleur, de tonalité et de marques sont naturelles — signature de la jade authentique, non colorée.',
    introP2Style: 'mood',
    limitedEdition: false,
  },
  it: {
    headline: 'Signature Strands Giada naturale',
    introP1:
      'I Signature Strands Giada naturale introducono profondità quieta, un calmo verde-teal attenuato e presenza raffinata nelle creazioni Bint Saeed selezionate. Assemblati a mano ad Abu Dhabi con gemme di giada naturale — mai giada colorata — e rifiniti con gli elementi Knotted Line dorati signature di Bint Saeed, permettono di reinterpretare una silhouette familiare attraverso un solo dettaglio ponderato.',
    introP4:
      'La giada naturale è apprezzata per i suoi toni verde-teal soffusi e attenuati e la superficie lucidata. Tra ogni gemma, accenti di Ematite placcata oro sfaccettati introducono una brillantezza delicata, creando un bel gioco di luce lungo il filo. Poiché ogni gemma è formata naturalmente, ogni Signature Strand è interamente unico nel colore, nelle venature e nel carattere.',
    stoneOrigin:
      'La giada è apprezzata da millenni in Asia orientale e centrale, con fonti notevoli tra cui Myanmar, Guatemala e China. La Giada naturale è valorizzata per i toni verde-teal soffusi e attenuati e il colore autentico, non tinto — mai giada colorata o tinta. Ogni gemma mostra le proprie variazioni naturali, garantendo l’unicità di ogni Signature Strand.',
    beadDetail: 'Perle in pietra naturale Giada (circa 7 mm)',
    materialStone: 'Gemme di Giada naturale',
    strandLabel: 'Signature Strands Giada naturale',
    stoneLabel: 'Giada naturale',
    variationNote:
      'Le variazioni di colore, tonalità e marcature sono naturali — tratto distintivo della giada autentica, non colorata.',
    introP2Style: 'mood',
    limitedEdition: false,
  },
  es: {
    headline: 'Signature Strands Jade natural',
    introP1:
      'Los Signature Strands Jade natural aportan profundidad serena, una calma verde-teal atenuada y presencia refinada a creaciones seleccionadas de Bint Saeed. Ensamblados a mano en Abu Dhabi con gemas de jade natural — nunca jade coloreado — y acabados con los elementos Knotted Line dorados característicos de Bint Saeed, permiten reimaginar una silueta familiar mediante un solo detalle cuidado.',
    introP4:
      'El jade natural se valora por sus tonos verde-teal suaves y atenuados y su superficie pulida. Entre cada gema, acentos de Hematita chapada en oro facetados introducen un brillo delicado, creando un hermoso juego de luz a lo largo del hilo. Como cada gema se forma de manera natural, cada Signature Strand es enteramente único en color, marcas y carácter.',
    stoneOrigin:
      'El jade ha sido apreciado durante milenios en Asia oriental y central, con fuentes destacadas como Myanmar, Guatemala y China. El Jade natural se valora por sus tonos verde-teal suaves y atenuados y su color auténtico, sin teñir — nunca jade coloreado o teñido. Cada gema muestra sus propias variaciones naturales, garantizando que cada Signature Strand sea único.',
    beadDetail: 'Cuentas de piedra natural Jade (aproximadamente 7 mm)',
    materialStone: 'Gemas de Jade natural',
    strandLabel: 'Signature Strands Jade natural',
    stoneLabel: 'Jade natural',
    variationNote:
      'Las variaciones de color, tono y marcas son naturales — sello del jade genuino, no coloreado.',
    introP2Style: 'mood',
    limitedEdition: false,
  },
  ru: {
    headline: 'Signature Strands «Натуральный нефрит»',
    introP1:
      'Signature Strands «Натуральный нефрит» привносят тихую глубину, приглушённый зелёно-бирюзовый покой и утончённое присутствие в избранные творения Bint Saeed. Собраны вручную в Абу-Даби из натурального нефрита — никогда не окрашенного — и завершены фирменными золотистыми элементами Knotted Line от Bint Saeed — они позволяют по-новому увидеть привычный силуэт через одну продуманную деталь.',
    introP4:
      'Натуральный нефрит ценят за мягкие приглушённые зелёно-бирюзовые тона и полированную поверхность. Между каждой самоцветной бусиной фасетированные акценты из позолоченного гематита добавляют тонкое сияние, создавая красивую игру света вдоль нити. Поскольку каждый камень сформирован природой, каждый Signature Strand уникален по цвету, рисунку и характеру.',
    stoneOrigin:
      'Нефрит ценится на протяжении тысячелетий в Восточной и Центральной Азии; среди значимых источников — Myanmar, Guatemala и China. Натуральный нефрит известен мягкими приглушёнными зелёно-бирюзовыми тонами и подлинным, неокрашенным цветом — никогда не окрашенный и не тонированный нефрит. Каждый камень имеет собственные природные вариации, поэтому каждый Signature Strand неповторим.',
    beadDetail: 'Бусины из натурального нефрита (примерно 7 мм)',
    materialStone: 'Натуральный нефрит',
    strandLabel: 'Signature Strands «Натуральный нефрит»',
    stoneLabel: 'Натуральный нефрит',
    variationNote:
      'Различия в цвете, тоне и рисунке естественны — признак подлинного нефрита, а не окрашенного.',
    introP2Style: 'mood',
    limitedEdition: false,
  },
  zh: {
    headline: '天然翡翠 Signature Strands',
    introP1:
      '天然翡翠 Signature Strands 为精选 Bint Saeed 作品注入沉静层次、柔和青绿至灰绿的静谧感与内敛气韵。于阿布扎比以天然翡翠手工组装——绝非染色翡翠——并以 Bint Saeed 标志性金色 Knotted Line 元素收尾，让熟悉的轮廓借由一处精心细节焕然一新。',
    introP4:
      '天然翡翠以柔和、低饱和的青绿至灰绿色调与抛光表面见长。每颗宝石之间，镶嵌切面镀金赤铁矿点缀，为整条链饰带来精致光泽。因每颗宝石皆天然形成，每条 Signature Strand 在色泽、纹理与个性上皆独一无二。',
    stoneOrigin:
      '翡翠在东亚与中亚地区已被珍视数千年，主要来源包括 Myanmar、Guatemala 与 China。天然翡翠以柔和青绿至灰绿色调与真实、未经染色的本色而备受喜爱——绝非染色或着色翡翠。每颗宝石都具天然差异，确保每条 Signature Strand 都独一无二。',
    beadDetail: '天然翡翠珠（约 7 毫米）',
    materialStone: '天然翡翠',
    strandLabel: '天然翡翠 Signature Strands',
    stoneLabel: '天然翡翠',
    variationNote: '色泽、色调与纹理的自然差异，正是真翡翠的标志——而非染色翡翠。',
    introP2Style: 'mood',
    limitedEdition: false,
  },
  de: {
    headline: 'Natürliche Jade Signature Strands',
    introP1:
      'Die Natürliche Jade Signature Strands bringen ruhige Tiefe, gedämpfte Grün-Teal-Ruhe und raffinierte Präsenz in ausgewählte Bint Saeed-Kreationen. Handmontiert in Abu Dhabi aus natürlichen Jade-Edelsteinen — niemals gefärbte Jade — und veredelt mit Bint Saeeds charakteristischen goldfarbenen Knotted Line-Elementen erlauben sie, eine vertraute Silhouette durch ein einziges durchdachtes Detail neu zu denken.',
    introP4:
      'Natürliche Jade wird für ihre weichen, gedämpften Grün-bis-Teal-Töne und die polierte Oberfläche geschätzt. Zwischen jedem Edelstein führen facettierte, vergoldete Hämatit-Akzente eine zarte Brillanz ein und schaffen ein schönes Lichtspiel entlang des Strangs. Da jeder Stein natürlich entstanden ist, ist jeder Signature Strand in Farbe, Maserung und Charakter völlig einzigartig.',
    stoneOrigin:
      'Jade wird seit Jahrtausenden in Ost- und Zentralasien geschätzt; bedeutende Quellen sind Myanmar, Guatemala und China. Natürliche Jade ist für weiche, gedämpfte Grün-bis-Teal-Töne und ihre echte, ungefärbte Farbe bekannt — niemals gefärbte oder kolorierte Jade. Jeder Edelstein zeigt eigene natürliche Variationen – jeder Signature Strand ist damit ein Unikat.',
    beadDetail: 'Natürliche Jade-Edelsteinperlen (ca. 7 mm)',
    materialStone: 'Natürliche Jade-Edelsteine',
    strandLabel: 'Natürliche Jade Signature Strands',
    stoneLabel: 'Natürliche Jade',
    variationNote:
      'Variationen in Farbe, Ton und Maserung sind natürlich — Kennzeichen echter Jade, nicht gefärbter Jade.',
    introP2Style: 'mood',
    limitedEdition: false,
  },
  nl: {
    headline: 'Natuurlijke Jade Signature Strands',
    introP1:
      'De Natuurlijke Jade Signature Strands brengen stille diepte, gedempt groen-teal kalmte en verfijnde aanwezigheid in geselecteerde Bint Saeed-creaties. Handmatig geassembleerd in Abu Dhabi van natuurlijke jade-edelstenen — nooit gekleurde jade — en afgewerkt met Bint Saeeds kenmerkende goudkleurige Knotted Line-elementen, laten ze een vertrouwd silhouet opnieuw beleven via één doordacht detail.',
    introP4:
      'Natuurlijke jade wordt gewaardeerd om zachte, gedempte groen-tot-teal tinten en een gepolijst oppervlak. Tussen elke edelsteen brengen gefacetteerde, vergulde Hematite-accenten een delicate glans, wat een mooi lichtspel langs de streng creëert. Omdat elke edelsteen natuurlijk gevormd is, is elke Signature Strand volledig uniek in kleur, tekening en karakter.',
    stoneOrigin:
      'Jade wordt al millennia gewaardeerd in Oost- en Centraal-Azië, met belangrijke bronnen in Myanmar, Guatemala en China. Natuurlijke Jade staat bekend om zachte, gedempte groen-tot-teal tinten en haar echte, ongekleurde kleur — nooit gekleurde of geverfde jade. Elke edelsteen toont eigen natuurlijke variaties, waardoor elke Signature Strand uniek is.',
    beadDetail: 'Natuurlijke Jade-edelstenen kralen (ongeveer 7 mm)',
    materialStone: 'Natuurlijke Jade-edelstenen',
    strandLabel: 'Natuurlijke Jade Signature Strands',
    stoneLabel: 'Natuurlijke Jade',
    variationNote:
      'Variaties in kleur, toon en tekening zijn natuurlijk — kenmerk van echte jade, niet van gekleurde jade.',
    introP2Style: 'mood',
    limitedEdition: false,
  },
  pt: {
    headline: 'Signature Strands Jade natural',
    introP1:
      'Os Signature Strands Jade natural introduzem profundidade serena, calma verde-teal atenuada e presença refinada nas criações Bint Saeed selecionadas. Montados à mão em Abu Dhabi com gemas de jade natural — nunca jade colorida — e finalizados com os elementos Knotted Line dourados assinatura da Bint Saeed, permitem reimaginar uma silhueta familiar através de um único detalhe cuidado.',
    introP4:
      'A jade natural é valorizada pelos tons verde-teal suaves e atenuados e pela superfície polida. Entre cada gema, acentos de Hematite folheada a ouro facetados introduzem um brilho subtil, criando um belo jogo de luz ao longo do fio. Como cada gema se forma naturalmente, cada Signature Strand é inteiramente único em cor, marcas e carácter.',
    stoneOrigin:
      'A jade é valorizada há milénios no Leste e Centro da Ásia, com fontes de destaque em Myanmar, Guatemala e China. A Jade natural é apreciada pelos tons verde-teal suaves e atenuados e pela cor autêntica, sem tingimento — nunca jade colorida ou tingida. Cada gema exibe as suas próprias variações naturais, garantindo que cada Signature Strand seja único.',
    beadDetail: 'Contas de pedra natural Jade (aproximadamente 7 mm)',
    materialStone: 'Gemas de Jade natural',
    strandLabel: 'Signature Strands Jade natural',
    stoneLabel: 'Jade natural',
    variationNote:
      'As variações de cor, tonalidade e marcas são naturais — marca da jade genuína, não colorida.',
    introP2Style: 'mood',
    limitedEdition: false,
  },
  id: {
    headline: 'Signature Strands Jade Alami',
    introP1:
      'Signature Strands Jade Alami menghadirkan kedalaman tenang, ketenangan hijau-teal redup, dan kehadiran yang halus pada kreasi Bint Saeed terpilih. Dirakit tangan di Abu Dhabi dari batu permata jade alami — bukan jade berwarna — dan diselesaikan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, mereka memungkinkan siluet yang sudah dikenal dibayangkan ulang melalui satu detail yang penuh pertimbangan.',
    introP4:
      'Jade alami dihargai karena rona hijau-ke-teal yang lembut dan redup serta permukaan polesannya. Di antara setiap batu, aksen Hematite berlapis emas berfaset menambahkan kilau halus, menciptakan permainan cahaya yang indah sepanjang untaian. Karena setiap batu terbentuk secara alami, setiap Signature Strand sepenuhnya unik dalam warna, corak, dan karakternya.',
    stoneOrigin:
      'Jade telah dihargai selama ribuan tahun di Asia Timur dan Asia Tengah, dengan sumber penting termasuk Myanmar, Guatemala, dan China. Jade Alami dinilai karena rona hijau-ke-teal yang lembut dan redup serta warna aslinya yang tidak diwarnai — bukan jade berwarna atau dicelup. Setiap batu permata menampilkan variasi alaminya sendiri, memastikan setiap Signature Strand benar-benar unik.',
    beadDetail: 'Manik batu permata Jade alami (sekitar 7 mm)',
    materialStone: 'Batu permata Jade alami',
    strandLabel: 'Signature Strands Jade Alami',
    stoneLabel: 'Jade Alami',
    variationNote:
      'Variasi pada warna, rona, dan corak bersifat alami — ciri jade sejati, bukan jade berwarna.',
    introP2Style: 'mood',
    limitedEdition: false,
  },
  ms: {
    headline: 'Signature Strands Jade Semula Jadi',
    introP1:
      'Signature Strands Jade Semula Jadi memperkenalkan kedalaman tenang, ketenangan hijau-teal redup dan kehadiran yang halus kepada ciptaan Bint Saeed terpilih. Dipasang tangan di Abu Dhabi daripada batu permata jade semula jadi — bukan jade berwarna — dan disiapkan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, ia membolehkan siluet yang biasa dibayangkan semula melalui satu butiran yang dipikirkan dengan teliti.',
    introP4:
      'Jade semula jadi dihargai kerana tona hijau-ke-teal yang lembut dan redup serta permukaan digilapnya. Di antara setiap batu, aksen Hematite bersalut emas berfaset menambahkan kilauan halus, mencipta permainan cahaya yang indah sepanjang untaian. Memandangkan setiap batu terbentuk secara semula jadi, setiap Signature Strand benar-benar unik dalam warna, corak dan karakternya.',
    stoneOrigin:
      'Jade telah dihargai selama ribuan tahun di Asia Timur dan Asia Tengah, dengan sumber penting termasuk Myanmar, Guatemala dan China. Jade Semula Jadi dinilai kerana tona hijau-ke-teal yang lembut dan redup serta warna aslinya yang tidak diwarnai — bukan jade berwarna atau dicelup. Setiap batu permata mempamerkan variasi semula jadinya sendiri, memastikan setiap Signature Strand benar-benar unik.',
    beadDetail: 'Manik batu permata Jade semula jadi (kira-kira 7 mm)',
    materialStone: 'Batu permata Jade semula jadi',
    strandLabel: 'Signature Strands Jade Semula Jadi',
    stoneLabel: 'Jade Semula Jadi',
    variationNote:
      'Variasi pada warna, tona dan corak adalah semula jadi — ciri jade tulen, bukan jade berwarna.',
    introP2Style: 'mood',
    limitedEdition: false,
  },
}

const ROSE_QUARTZ: VariantPack = {
  en: {
    headline: 'Rose Quartz Signature Strands',
    introP1:
      'The Rose Quartz Signature Strands introduce soft romance, luminous blush and understated elegance to selected Bint Saeed creations. Hand-assembled in Abu Dhabi from natural Rose Quartz gemstones and finished with Bint Saeed’s signature gold-tone Knotted Line elements, they offer a refined way to transform a familiar silhouette through a single thoughtful detail.',
    introP4:
      'The gentle blush tones of natural Rose Quartz create a refined, romantic accent, while faceted gold-plated Hematite accents positioned between every gemstone catch and reflect light with delicate brilliance. The result is a balanced interplay of softness and structure suited to evening dressing. Because every gemstone is naturally formed, each Signature Strand is entirely unique in its colour, markings and natural character.',
    stoneOrigin:
      'Rose Quartz is sourced from regions including Brazil, Madagascar, India and South Africa. Celebrated for its soft pink palette and translucent glow, it remains one of the most recognisable decorative gemstones in the world. Every gemstone displays its own natural variations, ensuring every Signature Strand is one of a kind.',
    beadDetail: 'Natural Rose Quartz gemstone beads (approximately 7 mm)',
    materialStone: 'Natural Rose Quartz gemstones',
    strandLabel: 'Rose Quartz Signature Strands',
    stoneLabel: 'Rose Quartz',
    variationNote:
      'Natural variations in blush tone, translucency and markings are part of what makes every Signature Strand unique.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ar: {
    headline: 'ستراندات Rose Quartz Signature Strands',
    introP1:
      'تقدّم ستراندات Rose Quartz Signature Strands رومانسية ناعمة وتورّداً مضيئاً وأناقة هادئة إلى مختارات من إبداعات Bint Saeed. تُجمَّع يدوياً في Abu Dhabi من أحجار Rose Quartz الطبيعية وتُنهى بعناصر Knotted Line الذهبية الحصرية من Bint Saeed، لتقدّم طريقة راقية لتحويل صورة مألوفة من خلال تفصيلة واحدة مدروسة.',
    introP4:
      'تخلق درجات الوردي الخفيف في Rose Quartz الطبيعي لمسة أنثوية راقية، بينما تلتقط لمسات Hematite المطلية ذهباً والمقطّعة بين كل حجر الضوء وتعكسه ببريق دقيق. والنتيجة توازن جميل بين النعومة والبنية يناسب إطلالات المساء. ولأن كل حجر يتشكّل طبيعياً، يكون كل Signature Strand فريداً تماماً في لونه وعلاماته وطابعه الطبيعي.',
    stoneOrigin:
      'يُستخرج Rose Quartz من مناطق تشمل Brazil وMadagascar وIndia وSouth Africa. ويُعرف بتدرجاته الوردية الناعمة ولمعانه الشفاف، ما يجعله من أشهر أحجار الزينة عالمياً. يحمل كل حجر تبايناته الطبيعية الخاصة، ما يضمن أن كل Signature Strand فريد من نوعه.',
    beadDetail: 'خرز أحجار Rose Quartz الطبيعية (قطرها تقريباً 7 مم)',
    materialStone: 'أحجار Rose Quartz الطبيعية',
    strandLabel: 'ستراندات Rose Quartz Signature Strands',
    stoneLabel: 'Rose Quartz',
    variationNote: 'التباينات الطبيعية في الدرجة الوردية والشفافية والعلامات جزء مما يجعل كل Signature Strand فريداً.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  fr: {
    headline: 'Signature Strands Rose Quartz',
    introP1:
      'Les Signature Strands Rose Quartz apportent romantisme doux, éclat rosé lumineux et élégance discrète aux créations Bint Saeed sélectionnées. Assemblés à la main à Abu Dhabi à partir de pierres naturelles Rose Quartz et finis avec les éléments Knotted Line dorés signature de Bint Saeed, ils offrent une manière raffinée de transformer une silhouette familière par un seul détail réfléchi.',
    introP4:
      'Les tonalités blush délicates du Rose Quartz naturel créent un accent romantique et raffiné, tandis que des accents d’Hematite plaquée or facettés entre chaque gemme captent et reflètent la lumière avec une brillance délicate. Le résultat équilibre douceur et structure, idéal pour le soir. Chaque pierre étant formée naturellement, chaque Signature Strand est entièrement unique par sa couleur, ses marques et son caractère naturel.',
    stoneOrigin:
      'Le Rose Quartz provient notamment du Brazil, de Madagascar, d’India et d’Afrique du Sud. Célébré pour sa palette rose tendre et sa lueur translucide, il reste l’une des pierres ornementales les plus reconnaissables. Chaque gemme présente ses propres variations naturelles, garantissant l’unicité de chaque Signature Strand.',
    beadDetail: 'Perles en pierre naturelle Rose Quartz (environ 7 mm)',
    materialStone: 'Pierres naturelles Rose Quartz',
    strandLabel: 'Signature Strands Rose Quartz',
    stoneLabel: 'Rose Quartz',
    variationNote:
      'Les variations naturelles de ton rosé, de translucidité et de marques font partie de ce qui rend chaque Signature Strand unique.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  it: {
    headline: 'Signature Strands Rose Quartz',
    introP1:
      'I Signature Strands Rose Quartz introducono romanticismo delicato, luminosità rosata ed eleganza sobria nelle creazioni Bint Saeed selezionate. Assemblati a mano ad Abu Dhabi con gemme naturali Rose Quartz e rifiniti con gli elementi Knotted Line dorati signature di Bint Saeed, offrono un modo raffinato di trasformare una silhouette familiare attraverso un solo dettaglio ponderato.',
    introP4:
      'Le delicate tonalità blush del Rose Quartz naturale creano un accento romantico e raffinato, mentre accenti di Hematite placcata oro sfaccettati tra ogni gemma catturano e riflettono la luce con brillantezza leggera. Il risultato bilancia morbidezza e struttura, ideale per look serali. Poiché ogni gemma è formata naturalmente, ogni Signature Strand è interamente unico nel colore, nelle venature e nel carattere naturale.',
    stoneOrigin:
      'Il Rose Quartz proviene da regioni tra cui Brazil, Madagascar, India e Sudafrica. Celebre per la sua tavolozza rosa tenue e il bagliore traslucido, resta una delle pietre decorative più riconoscibili. Ogni gemma mostra le proprie variazioni naturali, garantendo l’unicità di ogni Signature Strand.',
    beadDetail: 'Perle in pietra naturale Rose Quartz (circa 7 mm)',
    materialStone: 'Gemme naturali Rose Quartz',
    strandLabel: 'Signature Strands Rose Quartz',
    stoneLabel: 'Rose Quartz',
    variationNote:
      'Le variazioni naturali di tonalità rosata, traslucenza e venature fanno parte di ciò che rende ogni Signature Strand unico.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  es: {
    headline: 'Signature Strands Rose Quartz',
    introP1:
      'Los Signature Strands Rose Quartz aportan romanticismo suave, rubor luminoso y elegancia discreta a creaciones seleccionadas de Bint Saeed. Ensamblados a mano en Abu Dhabi con gemas naturales Rose Quartz y acabados con los elementos Knotted Line dorados característicos de Bint Saeed, ofrecen una forma refinada de transformar una silueta familiar mediante un solo detalle cuidado.',
    introP4:
      'Los delicados tonos blush del Rose Quartz natural crean un acento romántico y refinado, mientras los acentos de Hematite chapada en oro facetados entre cada gema captan y reflejan la luz con brillo sutil. El resultado equilibra suavidad y estructura, ideal para estilismos de noche. Como cada gema se forma de manera natural, cada Signature Strand es enteramente único en color, marcas y carácter natural.',
    stoneOrigin:
      'El Rose Quartz procede de regiones como Brazil, Madagascar, India y South Africa. Reconocido por su paleta rosa suave y su brillo translúcido, sigue siendo una de las piedras decorativas más apreciadas. Cada gema muestra sus propias variaciones naturales, garantizando que cada Signature Strand sea único.',
    beadDetail: 'Cuentas de piedra natural Rose Quartz (aproximadamente 7 mm)',
    materialStone: 'Gemas naturales Rose Quartz',
    strandLabel: 'Signature Strands Rose Quartz',
    stoneLabel: 'Rose Quartz',
    variationNote:
      'Las variaciones naturales de tono rosado, translucidez y vetas forman parte de lo que hace único cada Signature Strand.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ru: {
    headline: 'Signature Strands «Rose Quartz»',
    introP1:
      'Signature Strands «Rose Quartz» привносят мягкую романтику, деликатный розовый свет и сдержанную элегантность в избранные творения Bint Saeed. Собраны вручную в Abu Dhabi из натуральных камней Rose Quartz и завершены фирменными золотистыми элементами Knotted Line от Bint Saeed — они предлагают утончённый способ преобразить знакомый силуэт через одну продуманную деталь.',
    introP4:
      'Нежные blush-оттенки натурального Rose Quartz создают изысканный романтичный акцент, а фасетированные акценты из позолоченного Hematite между каждой бусиной мягко улавливают и отражают свет. Так формируется баланс мягкости и структуры, подходящий для вечерних образов. Поскольку каждый камень сформирован природой, каждый Signature Strand уникален по цвету, рисунку и природному характеру.',
    stoneOrigin:
      'Rose Quartz добывают в регионах, включая Brazil, Madagascar, India и South Africa. Камень известен нежной розовой палитрой и полупрозрачным свечением и остаётся одним из самых узнаваемых декоративных минералов. Каждый камень имеет собственные природные вариации, поэтому каждый Signature Strand неповторим.',
    beadDetail: 'Бусины из натурального Rose Quartz (примерно 7 мм)',
    materialStone: 'Натуральные камни Rose Quartz',
    strandLabel: 'Signature Strands «Rose Quartz»',
    stoneLabel: 'Rose Quartz',
    variationNote:
      'Природные различия в розовом тоне, прозрачности и рисунке делают каждый Signature Strand уникальным.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  zh: {
    headline: 'Rose Quartz Signature Strands',
    introP1:
      'Rose Quartz Signature Strands 为精选 Bint Saeed 作品注入柔和浪漫、轻盈粉调与含蓄优雅。于 Abu Dhabi 以天然 Rose Quartz 手工组装，并以 Bint Saeed 标志性金色 Knotted Line 元素收尾，以一处精心细节优雅转变熟悉轮廓。',
    introP4:
      '天然 Rose Quartz 的柔雾粉调带来细腻浪漫气质；每颗宝石之间的切面镀金 Hematite 点缀可随动作捕捉并反射光线，形成温柔而有结构的层次，适合晚间造型。因每颗宝石皆天然形成，每条 Signature Strand 在色泽、纹理与自然个性上皆独一无二。',
    stoneOrigin:
      'Rose Quartz 产自 Brazil、Madagascar、India 与 South Africa 等地区。其柔粉色调与半透明光感使其成为最具辨识度的装饰宝石之一。每颗宝石都具天然差异，确保每条 Signature Strand 都独一无二。',
    beadDetail: '天然 Rose Quartz 珠（约 7 毫米）',
    materialStone: '天然 Rose Quartz',
    strandLabel: 'Rose Quartz Signature Strands',
    stoneLabel: 'Rose Quartz',
    variationNote: '粉调、通透度与纹理的天然差异，正是每条 Signature Strand 的独特之处。',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  de: {
    headline: 'Rose Quartz Signature Strands',
    introP1:
      'Die Rose Quartz Signature Strands bringen sanfte Romantik, zartes Rosé-Leuchten und zurückhaltende Eleganz in ausgewählte Bint Saeed-Kreationen. Handmontiert in Abu Dhabi aus natürlichen Rose Quartz-Edelsteinen und veredelt mit Bint Saeeds charakteristischen goldfarbenen Knotted Line-Elementen bieten sie eine raffinierte Möglichkeit, eine vertraute Silhouette durch ein einziges durchdachtes Detail zu verwandeln.',
    introP4:
      'Die weichen Blush-Töne natürlicher Rose Quartz setzen einen romantischen, eleganten Akzent, während facettierte, vergoldete Hematite-Akzente zwischen jedem Edelstein Licht mit feiner Brillanz einfangen und reflektieren. Das Ergebnis ist ein ausbalanciertes Zusammenspiel aus Weichheit und Struktur – ideal für den Abend. Da jeder Stein natürlich entstanden ist, ist jeder Signature Strand in Farbe, Maserung und natürlichem Charakter völlig einzigartig.',
    stoneOrigin:
      'Rose Quartz stammt aus Regionen wie Brazil, Madagascar, India und South Africa. Geschätzt für seine zarte Rosé-Palette und transluzente Leuchtkraft zählt er zu den bekanntesten Ziersteinen weltweit. Jeder Edelstein zeigt eigene natürliche Variationen – jeder Signature Strand ist damit ein Unikat.',
    beadDetail: 'Natürliche Rose Quartz-Edelsteinperlen (ca. 7 mm)',
    materialStone: 'Natürliche Rose Quartz-Edelsteine',
    strandLabel: 'Rose Quartz Signature Strands',
    stoneLabel: 'Rose Quartz',
    variationNote:
      'Natürliche Variationen in Roséton, Transparenz und Maserung gehören zu dem, was jeden Signature Strand einzigartig macht.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  nl: {
    headline: 'Rose Quartz Signature Strands',
    introP1:
      'De Rose Quartz Signature Strands brengen zachte romantiek, lichte blos en ingetogen elegantie in geselecteerde Bint Saeed-creaties. Handmatig geassembleerd in Abu Dhabi van natuurlijke Rose Quartz-edelstenen en afgewerkt met Bint Saeeds kenmerkende goudkleurige Knotted Line-elementen, bieden ze een verfijnde manier om een vertrouwde silhouet te transformeren via één doordacht detail.',
    introP4:
      'De zachte blush-tonen van natuurlijke Rose Quartz geven een romantisch en verfijnd accent, terwijl gefacetteerde, vergulde Hematite-accenten tussen elke edelsteen licht met subtiele glans vangen en weerkaatsen. Het resultaat is een uitgebalanceerd samenspel van zachtheid en structuur, geschikt voor avondlooks. Omdat elke edelsteen natuurlijk gevormd is, is elke Signature Strand volledig uniek in kleur, tekening en natuurlijk karakter.',
    stoneOrigin:
      'Rose Quartz wordt gewonnen in regio’s waaronder Brazil, Madagascar, India en South Africa. Gewaardeerd om zijn zachte roze palet en translucente gloed blijft het een van de meest herkenbare sierstenen ter wereld. Elke edelsteen toont eigen natuurlijke variaties, waardoor elke Signature Strand uniek is.',
    beadDetail: 'Natuurlijke Rose Quartz-edelstenen kralen (ongeveer 7 mm)',
    materialStone: 'Natuurlijke Rose Quartz-edelstenen',
    strandLabel: 'Rose Quartz Signature Strands',
    stoneLabel: 'Rose Quartz',
    variationNote:
      'Natuurlijke variaties in bloskleur, doorschijnendheid en tekening maken deel uit van wat elke Signature Strand uniek maakt.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  pt: {
    headline: 'Signature Strands Rose Quartz',
    introP1:
      'Os Signature Strands Rose Quartz introduzem romantismo suave, brilho rosado e elegância discreta nas criações Bint Saeed selecionadas. Montados à mão em Abu Dhabi com gemas naturais Rose Quartz e finalizados com os elementos Knotted Line dourados assinatura da Bint Saeed, oferecem uma forma refinada de transformar uma silhueta familiar através de um único detalhe cuidado.',
    introP4:
      'Os delicados tons blush do Rose Quartz natural criam um acento romântico e refinado, enquanto acentos de Hematite folheada a ouro facetados entre cada gema captam e reflectem a luz com brilho subtil. O resultado equilibra suavidade e estrutura, ideal para looks de noite. Como cada gema se forma naturalmente, cada Signature Strand é inteiramente único em cor, marcas e carácter natural.',
    stoneOrigin:
      'O Rose Quartz provém de regiões como Brazil, Madagascar, India e South Africa. Celebrado pela sua paleta rosa suave e brilho translúcido, permanece uma das pedras decorativas mais reconhecidas no mundo. Cada gema exibe as suas próprias variações naturais, garantindo que cada Signature Strand seja único.',
    beadDetail: 'Contas de pedra natural Rose Quartz (aproximadamente 7 mm)',
    materialStone: 'Gemas naturais Rose Quartz',
    strandLabel: 'Signature Strands Rose Quartz',
    stoneLabel: 'Rose Quartz',
    variationNote:
      'As variações naturais de tom rosado, translucidez e marcas fazem parte do que torna cada Signature Strand único.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  id: {
    headline: 'Signature Strands Rose Quartz',
    introP1:
      'Signature Strands Rose Quartz menghadirkan romantisme lembut, rona blush bercahaya, dan keanggunan tenang pada kreasi Bint Saeed terpilih. Dirakit tangan di Abu Dhabi dari batu permata Rose Quartz alami dan diselesaikan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, mereka menawarkan cara berkelas untuk mengubah siluet yang sudah dikenal melalui satu detail yang penuh pertimbangan.',
    introP4:
      'Rona blush lembut dari Rose Quartz alami memberi aksen romantis yang halus, sementara aksen Hematite berlapis emas berfaset di antara setiap batu menangkap dan memantulkan cahaya dengan kilau lembut. Hasilnya menghadirkan keseimbangan antara kelembutan dan struktur yang cocok untuk gaya malam. Karena setiap batu terbentuk secara alami, setiap Signature Strand sepenuhnya unik dalam warna, corak, dan karakter alaminya.',
    stoneOrigin:
      'Rose Quartz bersumber dari wilayah termasuk Brazil, Madagascar, India, dan South Africa. Dikenal karena palet merah muda lembut dan cahaya translusennya, batu ini menjadi salah satu batu dekoratif paling mudah dikenali di dunia. Setiap batu permata menampilkan variasi alaminya sendiri, memastikan setiap Signature Strand benar-benar unik.',
    beadDetail: 'Manik batu permata Rose Quartz alami (sekitar 7 mm)',
    materialStone: 'Batu permata Rose Quartz alami',
    strandLabel: 'Signature Strands Rose Quartz',
    stoneLabel: 'Rose Quartz',
    variationNote:
      'Variasi alami pada rona blush, kejernihan translusen, dan corak merupakan bagian dari apa yang membuat setiap Signature Strand unik.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ms: {
    headline: 'Signature Strands Rose Quartz',
    introP1:
      'Signature Strands Rose Quartz memperkenalkan romantik lembut, rona blush bercahaya dan keanggunan yang sopan kepada ciptaan Bint Saeed terpilih. Dipasang tangan di Abu Dhabi daripada batu permata Rose Quartz semula jadi dan disiapkan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, ia menawarkan cara yang anggun untuk mengubah siluet yang biasa melalui satu butiran yang dipikirkan dengan teliti.',
    introP4:
      'Tona blush lembut pada Rose Quartz semula jadi memberikan aksen romantik yang halus, manakala aksen Hematite bersalut emas berfaset di antara setiap batu menangkap dan memantulkan cahaya dengan kilauan lembut. Hasilnya mewujudkan keseimbangan antara kelembutan dan struktur yang sesuai untuk gaya malam. Memandangkan setiap batu terbentuk secara semula jadi, setiap Signature Strand benar-benar unik dalam warna, corak dan karakter semula jadinya.',
    stoneOrigin:
      'Rose Quartz bersumber dari wilayah termasuk Brazil, Madagascar, India dan South Africa. Dikenali kerana palet merah jambu lembut serta cahaya translusen, batu ini kekal sebagai antara batu hiasan paling dikenali di dunia. Setiap batu permata mempamerkan variasi semula jadinya sendiri, memastikan setiap Signature Strand benar-benar unik.',
    beadDetail: 'Manik batu permata Rose Quartz semula jadi (kira-kira 7 mm)',
    materialStone: 'Batu permata Rose Quartz semula jadi',
    strandLabel: 'Signature Strands Rose Quartz',
    stoneLabel: 'Rose Quartz',
    variationNote:
      'Variasi semula jadi pada tona blush, ketelusan translusen dan corak merupakan sebahagian daripada apa yang menjadikan setiap Signature Strand unik.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
}

const MALACHITE: VariantPack = {
  en: {
    headline: 'Malachite Signature Strands',
    introP1:
      'The Malachite Signature Strands introduce deep green richness, sculptural contrast and elevated drama to selected Bint Saeed creations. Hand-assembled in Abu Dhabi from natural Malachite gemstones and finished with Bint Saeed’s signature gold-tone Knotted Line elements, they offer a refined way to transform a familiar silhouette through a single thoughtful detail.',
    introP4:
      'Natural Malachite is prized for its vivid green depth and organic banded patterns, creating visual movement across every bead. Faceted gold-plated Hematite accents positioned between every gemstone add refined light play and sharpen the contrast. Because every gemstone is naturally formed, each Signature Strand is entirely unique in its colour, markings and natural character.',
    stoneOrigin:
      'Malachite is sourced from regions including the Democratic Republic of the Congo, Zambia, Russia and Australia. Celebrated for saturated green tones and naturally layered banding, it remains one of the most recognisable ornamental stones. Every gemstone displays its own natural variations, ensuring every Signature Strand is one of a kind.',
    beadDetail: 'Natural Malachite gemstone beads (approximately 7 mm)',
    materialStone: 'Natural Malachite gemstones',
    strandLabel: 'Malachite Signature Strands',
    stoneLabel: 'Malachite',
    variationNote:
      'Natural variations in banding, depth and green tone are part of what makes every Signature Strand unique.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ar: {
    headline: 'ستراندات Malachite Signature Strands',
    introP1:
      'تقدّم ستراندات Malachite Signature Strands عمقاً أخضر غنياً وتبايناً نحتياً وحضوراً أنيقاً إلى مختارات من إبداعات Bint Saeed. تُجمَّع يدوياً في Abu Dhabi من أحجار Malachite الطبيعية وتُنهى بعناصر Knotted Line الذهبية الحصرية من Bint Saeed، لتقدّم طريقة راقية لتحويل صورة مألوفة من خلال تفصيلة واحدة مدروسة.',
    introP4:
      'يتميّز Malachite الطبيعي بدرجاته الخضراء العميقة وتعرّجاته الشريطية العضوية التي تمنح كل خرزة حركة بصرية واضحة. وتضيف لمسات Hematite المطلية ذهباً والمقطّعة بين كل حجر انعكاساً ضوئياً متزناً يعزّز التباين. ولأن كل حجر يتشكّل طبيعياً، يكون كل Signature Strand فريداً تماماً في لونه وعلاماته وطابعه الطبيعي.',
    stoneOrigin:
      'يُستخرج Malachite من مناطق تشمل جمهورية الكونغو الديمقراطية وZambia وRussia وAustralia. ويُعرف بدرجاته الخضراء المشبعة وتعرّجاته الطبيعية الطبقية، ما يجعله من أشهر أحجار الزينة. يحمل كل حجر تبايناته الطبيعية الخاصة، ما يضمن أن كل Signature Strand فريد من نوعه.',
    beadDetail: 'خرز أحجار Malachite الطبيعية (قطرها تقريباً 7 مم)',
    materialStone: 'أحجار Malachite الطبيعية',
    strandLabel: 'ستراندات Malachite Signature Strands',
    stoneLabel: 'Malachite',
    variationNote: 'التباينات الطبيعية في التعرّج والعمق ودرجة الأخضر جزء مما يجعل كل Signature Strand فريداً.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  fr: {
    headline: 'Signature Strands Malachite',
    introP1:
      'Les Signature Strands Malachite apportent profondeur verte intense, contraste sculptural et présence raffinée aux créations Bint Saeed sélectionnées. Assemblés à la main à Abu Dhabi à partir de pierres naturelles Malachite et finis avec les éléments Knotted Line dorés signature de Bint Saeed, ils offrent une manière raffinée de transformer une silhouette familière par un seul détail réfléchi.',
    introP4:
      'La Malachite naturelle est recherchée pour sa profondeur verte et ses bandes organiques qui créent un mouvement visuel sur chaque perle. Des accents d’Hematite plaquée or facettés entre chaque gemme ajoutent un jeu de lumière délicat et renforcent le contraste. Chaque pierre étant formée naturellement, chaque Signature Strand est entièrement unique par sa couleur, ses marques et son caractère naturel.',
    stoneOrigin:
      'La Malachite provient notamment de la République démocratique du Congo, de Zambia, de Russia et d’Australia. Célébrée pour ses tons verts saturés et ses bandes naturelles stratifiées, elle reste l’une des pierres ornementales les plus reconnaissables. Chaque gemme présente ses propres variations naturelles, garantissant l’unicité de chaque Signature Strand.',
    beadDetail: 'Perles en pierre naturelle Malachite (environ 7 mm)',
    materialStone: 'Pierres naturelles Malachite',
    strandLabel: 'Signature Strands Malachite',
    stoneLabel: 'Malachite',
    variationNote:
      'Les variations naturelles de banding, de profondeur et de ton vert font partie de ce qui rend chaque Signature Strand unique.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  it: {
    headline: 'Signature Strands Malachite',
    introP1:
      'I Signature Strands Malachite introducono ricchezza verde profonda, contrasto scultoreo e presenza raffinata nelle creazioni Bint Saeed selezionate. Assemblati a mano ad Abu Dhabi con gemme naturali Malachite e rifiniti con gli elementi Knotted Line dorati signature di Bint Saeed, offrono un modo raffinato di trasformare una silhouette familiare attraverso un solo dettaglio ponderato.',
    introP4:
      'La Malachite naturale è apprezzata per la profondità verde intensa e le sue bande organiche che creano movimento visivo su ogni perla. Accenti di Hematite placcata oro sfaccettati tra ogni gemma aggiungono un gioco di luce delicato e definiscono il contrasto. Poiché ogni gemma è formata naturalmente, ogni Signature Strand è interamente unico nel colore, nelle venature e nel carattere naturale.',
    stoneOrigin:
      'La Malachite proviene da regioni tra cui Repubblica Democratica del Congo, Zambia, Russia e Australia. Celebrata per i toni verdi saturi e la bandatura naturale stratificata, resta una delle pietre ornamentali più riconoscibili. Ogni gemma mostra le proprie variazioni naturali, garantendo l’unicità di ogni Signature Strand.',
    beadDetail: 'Perle in pietra naturale Malachite (circa 7 mm)',
    materialStone: 'Gemme naturali Malachite',
    strandLabel: 'Signature Strands Malachite',
    stoneLabel: 'Malachite',
    variationNote:
      'Le variazioni naturali di bandatura, profondità e tonalità verde fanno parte di ciò che rende ogni Signature Strand unico.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  es: {
    headline: 'Signature Strands Malachite',
    introP1:
      'Los Signature Strands Malachite aportan riqueza verde profunda, contraste escultórico y presencia refinada a creaciones seleccionadas de Bint Saeed. Ensamblados a mano en Abu Dhabi con gemas naturales Malachite y acabados con los elementos Knotted Line dorados característicos de Bint Saeed, ofrecen una forma refinada de transformar una silueta familiar mediante un solo detalle cuidado.',
    introP4:
      'La Malachite natural se aprecia por su profundidad verde y sus bandas orgánicas, que crean movimiento visual en cada cuenta. Los acentos de Hematite chapada en oro facetados entre cada gema añaden un juego de luz sutil y refuerzan el contraste. Como cada gema se forma de manera natural, cada Signature Strand es enteramente único en color, marcas y carácter natural.',
    stoneOrigin:
      'La Malachite procede de regiones como la República Democrática del Congo, Zambia, Russia y Australia. Celebrada por sus tonos verdes saturados y su bandeado natural en capas, sigue siendo una de las piedras ornamentales más reconocibles. Cada gema muestra sus propias variaciones naturales, garantizando que cada Signature Strand sea único.',
    beadDetail: 'Cuentas de piedra natural Malachite (aproximadamente 7 mm)',
    materialStone: 'Gemas naturales Malachite',
    strandLabel: 'Signature Strands Malachite',
    stoneLabel: 'Malachite',
    variationNote:
      'Las variaciones naturales de bandas, profundidad y tono verde forman parte de lo que hace único cada Signature Strand.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ru: {
    headline: 'Signature Strands «Malachite»',
    introP1:
      'Signature Strands «Malachite» привносят насыщенную зелёную глубину, скульптурный контраст и выразительную элегантность в избранные творения Bint Saeed. Собраны вручную в Abu Dhabi из натуральных камней Malachite и завершены фирменными золотистыми элементами Knotted Line от Bint Saeed — они предлагают утончённый способ преобразить знакомый силуэт через одну продуманную деталь.',
    introP4:
      'Натуральный Malachite ценится за глубокий зелёный цвет и природную полосчатость, создающую визуальное движение на каждой бусине. Фасетированные акценты из позолоченного Hematite между камнями добавляют деликатную игру света и усиливают контраст. Поскольку каждый камень сформирован природой, каждый Signature Strand уникален по цвету, рисунку и природному характеру.',
    stoneOrigin:
      'Malachite добывают в регионах, включая Демократическую Республику Конго, Zambia, Russia и Australia. Камень известен насыщенной зеленью и природной слоистой полосчатостью и остаётся одним из самых узнаваемых декоративных минералов. Каждый камень имеет собственные природные вариации, поэтому каждый Signature Strand неповторим.',
    beadDetail: 'Бусины из натурального Malachite (примерно 7 мм)',
    materialStone: 'Натуральные камни Malachite',
    strandLabel: 'Signature Strands «Malachite»',
    stoneLabel: 'Malachite',
    variationNote:
      'Природные различия в полосах, глубине и зелёном тоне делают каждый Signature Strand уникальным.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  zh: {
    headline: 'Malachite Signature Strands',
    introP1:
      'Malachite Signature Strands 为精选 Bint Saeed 作品带来深邃绿色层次、雕塑感对比与更具存在感的优雅气质。于 Abu Dhabi 以天然 Malachite 手工组装，并以 Bint Saeed 标志性金色 Knotted Line 元素收尾，以一处精心细节优雅转变熟悉轮廓。',
    introP4:
      '天然 Malachite 以浓郁绿色与自然带状纹理闻名，每颗珠体都呈现鲜明流动感。每颗宝石之间加入切面镀金 Hematite 点缀，带来细腻光线层次并强化对比。因每颗宝石皆天然形成，每条 Signature Strand 在色泽、纹理与自然个性上皆独一无二。',
    stoneOrigin:
      'Malachite 产自刚果民主共和国、Zambia、Russia 与 Australia 等地区。其饱和绿色与层状天然纹带使其成为最具辨识度的装饰宝石之一。每颗宝石都具天然差异，确保每条 Signature Strand 都独一无二。',
    beadDetail: '天然 Malachite 珠（约 7 毫米）',
    materialStone: '天然 Malachite',
    strandLabel: 'Malachite Signature Strands',
    stoneLabel: 'Malachite',
    variationNote: '纹带、深浅与绿色调的天然差异，正是每条 Signature Strand 的独特之处。',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  de: {
    headline: 'Malachite Signature Strands',
    introP1:
      'Die Malachite Signature Strands bringen tiefe grüne Fülle, skulpturalen Kontrast und gehobene Präsenz in ausgewählte Bint Saeed-Kreationen. Handmontiert in Abu Dhabi aus natürlichen Malachite-Edelsteinen und veredelt mit Bint Saeeds charakteristischen goldfarbenen Knotted Line-Elementen bieten sie eine raffinierte Möglichkeit, eine vertraute Silhouette durch ein einziges durchdachtes Detail zu verwandeln.',
    introP4:
      'Natürlicher Malachite wird für seine satte grüne Tiefe und organische Bänderung geschätzt, die auf jeder Perle visuelle Bewegung erzeugt. Facettierte, vergoldete Hematite-Akzente zwischen jedem Edelstein fügen ein feines Lichtspiel hinzu und schärfen den Kontrast. Da jeder Stein natürlich entstanden ist, ist jeder Signature Strand in Farbe, Maserung und natürlichem Charakter völlig einzigartig.',
    stoneOrigin:
      'Malachite stammt aus Regionen wie der Demokratischen Republik Kongo, Zambia, Russia und Australia. Berühmt für gesättigte Grüntöne und natürliche Schichtbänderung zählt er zu den bekanntesten Ziersteinen. Jeder Edelstein zeigt eigene natürliche Variationen – jeder Signature Strand ist damit ein Unikat.',
    beadDetail: 'Natürliche Malachite-Edelsteinperlen (ca. 7 mm)',
    materialStone: 'Natürliche Malachite-Edelsteine',
    strandLabel: 'Malachite Signature Strands',
    stoneLabel: 'Malachite',
    variationNote:
      'Natürliche Variationen in Bänderung, Tiefe und Grünton gehören zu dem, was jeden Signature Strand einzigartig macht.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  nl: {
    headline: 'Malachite Signature Strands',
    introP1:
      'De Malachite Signature Strands brengen diepe groene rijkdom, sculpturaal contrast en verfijnde aanwezigheid in geselecteerde Bint Saeed-creaties. Handmatig geassembleerd in Abu Dhabi van natuurlijke Malachite-edelstenen en afgewerkt met Bint Saeeds kenmerkende goudkleurige Knotted Line-elementen, bieden ze een verfijnde manier om een vertrouwde silhouet te transformeren via één doordacht detail.',
    introP4:
      'Natuurlijke Malachite wordt gewaardeerd om zijn intense groene diepte en organische banding, die visuele beweging over elke kraal creëert. Gefacetteerde, vergulde Hematite-accenten tussen elke edelsteen voegen subtiel lichtspel toe en verscherpen het contrast. Omdat elke edelsteen natuurlijk gevormd is, is elke Signature Strand volledig uniek in kleur, tekening en natuurlijk karakter.',
    stoneOrigin:
      'Malachite wordt gewonnen in regio’s waaronder de Democratische Republiek Congo, Zambia, Russia en Australia. Gevierd om verzadigde groentonen en natuurlijke gelaagde banding blijft het een van de meest herkenbare sierstenen. Elke edelsteen toont eigen natuurlijke variaties, waardoor elke Signature Strand uniek is.',
    beadDetail: 'Natuurlijke Malachite-edelstenen kralen (ongeveer 7 mm)',
    materialStone: 'Natuurlijke Malachite-edelstenen',
    strandLabel: 'Malachite Signature Strands',
    stoneLabel: 'Malachite',
    variationNote:
      'Natuurlijke variaties in banding, diepte en groentoon maken deel uit van wat elke Signature Strand uniek maakt.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  pt: {
    headline: 'Signature Strands Malachite',
    introP1:
      'Os Signature Strands Malachite introduzem profundidade verde intensa, contraste escultural e presença refinada nas criações Bint Saeed selecionadas. Montados à mão em Abu Dhabi com gemas naturais Malachite e finalizados com os elementos Knotted Line dourados assinatura da Bint Saeed, oferecem uma forma refinada de transformar uma silhueta familiar através de um único detalhe cuidado.',
    introP4:
      'A Malachite natural é valorizada pela profundidade verde viva e pelas bandas orgânicas que criam movimento visual em cada conta. Acentos de Hematite folheada a ouro facetados entre cada gema acrescentam um jogo de luz subtil e reforçam o contraste. Como cada gema se forma naturalmente, cada Signature Strand é inteiramente único em cor, marcas e carácter natural.',
    stoneOrigin:
      'A Malachite provém de regiões como República Democrática do Congo, Zambia, Russia e Australia. Celebrada pelos tons verdes saturados e pelo bandeamento natural em camadas, permanece uma das pedras ornamentais mais reconhecíveis. Cada gema exibe as suas próprias variações naturais, garantindo que cada Signature Strand seja único.',
    beadDetail: 'Contas de pedra natural Malachite (aproximadamente 7 mm)',
    materialStone: 'Gemas naturais Malachite',
    strandLabel: 'Signature Strands Malachite',
    stoneLabel: 'Malachite',
    variationNote:
      'As variações naturais de bandas, profundidade e tom verde fazem parte do que torna cada Signature Strand único.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  id: {
    headline: 'Signature Strands Malachite',
    introP1:
      'Signature Strands Malachite menghadirkan kekayaan hijau pekat, kontras berstruktur, dan kehadiran elegan pada kreasi Bint Saeed terpilih. Dirakit tangan di Abu Dhabi dari batu permata Malachite alami dan diselesaikan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, mereka menawarkan cara berkelas untuk mengubah siluet yang sudah dikenal melalui satu detail yang penuh pertimbangan.',
    introP4:
      'Malachite alami dihargai karena kedalaman hijau yang kuat dan pola pita organik yang menciptakan gerak visual pada setiap manik. Aksen Hematite berlapis emas berfaset di antara setiap batu menambahkan permainan cahaya halus dan mempertegas kontras. Karena setiap batu terbentuk secara alami, setiap Signature Strand sepenuhnya unik dalam warna, corak, dan karakter alaminya.',
    stoneOrigin:
      'Malachite bersumber dari wilayah termasuk Republik Demokratik Kongo, Zambia, Russia, dan Australia. Dikenal karena warna hijau jenuh serta pita berlapis alaminya, batu ini tetap menjadi salah satu batu hias paling mudah dikenali. Setiap batu permata menampilkan variasi alaminya sendiri, memastikan setiap Signature Strand benar-benar unik.',
    beadDetail: 'Manik batu permata Malachite alami (sekitar 7 mm)',
    materialStone: 'Batu permata Malachite alami',
    strandLabel: 'Signature Strands Malachite',
    stoneLabel: 'Malachite',
    variationNote:
      'Variasi alami pada pita, kedalaman, dan rona hijau merupakan bagian dari apa yang membuat setiap Signature Strand unik.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ms: {
    headline: 'Signature Strands Malachite',
    introP1:
      'Signature Strands Malachite memperkenalkan kekayaan hijau mendalam, kontras berstruktur dan kehadiran anggun kepada ciptaan Bint Saeed terpilih. Dipasang tangan di Abu Dhabi daripada batu permata Malachite semula jadi dan disiapkan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, ia menawarkan cara yang anggun untuk mengubah siluet yang biasa melalui satu butiran yang dipikirkan dengan teliti.',
    introP4:
      'Malachite semula jadi dihargai kerana kedalaman hijau yang pekat dan corak jalur organik yang mewujudkan gerakan visual pada setiap manik. Aksen Hematite bersalut emas berfaset di antara setiap batu menambah permainan cahaya halus dan menegaskan kontras. Memandangkan setiap batu terbentuk secara semula jadi, setiap Signature Strand benar-benar unik dalam warna, corak dan karakter semula jadinya.',
    stoneOrigin:
      'Malachite bersumber dari wilayah termasuk Republik Demokratik Congo, Zambia, Russia dan Australia. Dikenali kerana rona hijau tepu serta jalur berlapis semula jadi, batu ini kekal sebagai antara batu hiasan paling mudah dikenali. Setiap batu permata mempamerkan variasi semula jadinya sendiri, memastikan setiap Signature Strand benar-benar unik.',
    beadDetail: 'Manik batu permata Malachite semula jadi (kira-kira 7 mm)',
    materialStone: 'Batu permata Malachite semula jadi',
    strandLabel: 'Signature Strands Malachite',
    stoneLabel: 'Malachite',
    variationNote:
      'Variasi semula jadi pada jalur, kedalaman dan tona hijau merupakan sebahagian daripada apa yang menjadikan setiap Signature Strand unik.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
}

const LAPIS_LAZULI: VariantPack = {
  en: {
    headline: 'Lapis Lazuli Signature Strands',
    introP1:
      'The Lapis Lazuli Signature Strands introduce regal blue depth, refined contrast and evening jewel character to selected Bint Saeed creations. Hand-assembled in Abu Dhabi from natural Lapis Lazuli gemstones and finished with Bint Saeed’s signature gold-tone Knotted Line elements, they offer a refined way to transform a familiar silhouette through a single thoughtful detail.',
    introP4:
      'Natural Lapis Lazuli is admired for its saturated royal-blue tone and delicate pyrite flecks that sparkle like fine points of light. Faceted gold-plated Hematite accents between every gemstone heighten this jewel-like effect and create elegant rhythm along the strand. Because every gemstone is naturally formed, each Signature Strand is entirely unique in its colour, markings and natural character.',
    stoneOrigin:
      'Lapis Lazuli is sourced from regions including Afghanistan, Chile, Russia and Pakistan. Treasured since antiquity for its rich blue body colour and natural pyrite inclusions, it remains one of the world’s most iconic ornamental stones. Every gemstone displays its own natural variations, ensuring every Signature Strand is one of a kind.',
    beadDetail: 'Natural Lapis Lazuli gemstone beads (approximately 7 mm)',
    materialStone: 'Natural Lapis Lazuli gemstones',
    strandLabel: 'Lapis Lazuli Signature Strands',
    stoneLabel: 'Lapis Lazuli',
    variationNote:
      'Natural variations in blue tone, pyrite flecks and matrix pattern are part of what makes every Signature Strand unique.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ar: {
    headline: 'ستراندات Lapis Lazuli Signature Strands',
    introP1:
      'تقدّم ستراندات Lapis Lazuli Signature Strands عمقاً أزرق ملكياً وتبايناً راقياً وطابع حجر جوهري مسائي إلى مختارات من إبداعات Bint Saeed. تُجمَّع يدوياً في Abu Dhabi من أحجار Lapis Lazuli الطبيعية وتُنهى بعناصر Knotted Line الذهبية الحصرية من Bint Saeed، لتقدّم طريقة أنيقة لتحويل صورة مألوفة من خلال تفصيلة واحدة مدروسة.',
    introP4:
      'يُعجَب بـ Lapis Lazuli الطبيعي لدرجته الزرقاء المشبعة ونقاط pyrite الدقيقة التي تلمع كأنها نقاط ضوء. وتزيد لمسات Hematite المطلية ذهباً والمقطّعة بين كل حجر من هذا التأثير الجوهري وتمنح الستراند إيقاعاً بصرياً أنيقاً. ولأن كل حجر يتشكّل طبيعياً، يكون كل Signature Strand فريداً تماماً في لونه وعلاماته وطابعه الطبيعي.',
    stoneOrigin:
      'يُستخرج Lapis Lazuli من مناطق تشمل Afghanistan وChile وRussia وPakistan. وقد حظي بتقدير كبير منذ العصور القديمة لدرجته الزرقاء الغنية وشوائب pyrite الطبيعية فيه. يحمل كل حجر تبايناته الطبيعية الخاصة، ما يضمن أن كل Signature Strand فريد من نوعه.',
    beadDetail: 'خرز أحجار Lapis Lazuli الطبيعية (قطرها تقريباً 7 مم)',
    materialStone: 'أحجار Lapis Lazuli الطبيعية',
    strandLabel: 'ستراندات Lapis Lazuli Signature Strands',
    stoneLabel: 'Lapis Lazuli',
    variationNote: 'التباينات الطبيعية في الدرجة الزرقاء ونقاط pyrite والنقوش جزء مما يجعل كل Signature Strand فريداً.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  fr: {
    headline: 'Signature Strands Lapis Lazuli',
    introP1:
      'Les Signature Strands Lapis Lazuli apportent profondeur bleue royale, contraste raffiné et caractère de pierre précieuse du soir aux créations Bint Saeed sélectionnées. Assemblés à la main à Abu Dhabi à partir de pierres naturelles Lapis Lazuli et finis avec les éléments Knotted Line dorés signature de Bint Saeed, ils offrent une manière raffinée de transformer une silhouette familière par un seul détail réfléchi.',
    introP4:
      'Le Lapis Lazuli naturel est admiré pour son bleu intense et ses fines paillettes de pyrite qui scintillent comme des points de lumière. Des accents d’Hematite plaquée or facettés entre chaque gemme renforcent cet effet joaillier et créent un rythme élégant le long du fil. Chaque pierre étant formée naturellement, chaque Signature Strand est entièrement unique par sa couleur, ses marques et son caractère naturel.',
    stoneOrigin:
      'Le Lapis Lazuli provient notamment d’Afghanistan, du Chile, de Russia et du Pakistan. Apprécié depuis l’Antiquité pour son bleu profond et ses inclusions naturelles de pyrite, il demeure l’une des pierres ornementales les plus emblématiques. Chaque gemme présente ses propres variations naturelles, garantissant l’unicité de chaque Signature Strand.',
    beadDetail: 'Perles en pierre naturelle Lapis Lazuli (environ 7 mm)',
    materialStone: 'Pierres naturelles Lapis Lazuli',
    strandLabel: 'Signature Strands Lapis Lazuli',
    stoneLabel: 'Lapis Lazuli',
    variationNote:
      'Les variations naturelles de bleu, de paillettes de pyrite et de matrice font partie de ce qui rend chaque Signature Strand unique.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  it: {
    headline: 'Signature Strands Lapis Lazuli',
    introP1:
      'I Signature Strands Lapis Lazuli introducono profondità blu regale, contrasto raffinato e carattere da gioiello serale nelle creazioni Bint Saeed selezionate. Assemblati a mano ad Abu Dhabi con gemme naturali Lapis Lazuli e rifiniti con gli elementi Knotted Line dorati signature di Bint Saeed, offrono un modo raffinato di trasformare una silhouette familiare attraverso un solo dettaglio ponderato.',
    introP4:
      'Il Lapis Lazuli naturale è apprezzato per il blu intenso e i delicati punti di pyrite che brillano come piccole luci. Accenti di Hematite placcata oro sfaccettati tra ogni gemma amplificano questo effetto gioiello e creano un ritmo elegante lungo il filo. Poiché ogni gemma è formata naturalmente, ogni Signature Strand è interamente unico nel colore, nelle venature e nel carattere naturale.',
    stoneOrigin:
      'Il Lapis Lazuli proviene da regioni tra cui Afghanistan, Chile, Russia e Pakistan. Apprezzato fin dall’antichità per il suo blu profondo e le inclusioni naturali di pyrite, resta una delle pietre ornamentali più iconiche. Ogni gemma mostra le proprie variazioni naturali, garantendo l’unicità di ogni Signature Strand.',
    beadDetail: 'Perle in pietra naturale Lapis Lazuli (circa 7 mm)',
    materialStone: 'Gemme naturali Lapis Lazuli',
    strandLabel: 'Signature Strands Lapis Lazuli',
    stoneLabel: 'Lapis Lazuli',
    variationNote:
      'Le variazioni naturali di blu, punti di pyrite e trama fanno parte di ciò che rende ogni Signature Strand unico.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  es: {
    headline: 'Signature Strands Lapis Lazuli',
    introP1:
      'Los Signature Strands Lapis Lazuli aportan profundidad azul real, contraste refinado y carácter de joya nocturna a creaciones seleccionadas de Bint Saeed. Ensamblados a mano en Abu Dhabi con gemas naturales Lapis Lazuli y acabados con los elementos Knotted Line dorados característicos de Bint Saeed, ofrecen una forma refinada de transformar una silueta familiar mediante un solo detalle cuidado.',
    introP4:
      'El Lapis Lazuli natural es admirado por su azul saturado y sus delicadas motas de pyrite, que brillan como puntos de luz. Los acentos de Hematite chapada en oro facetados entre cada gema realzan este efecto joya y crean un ritmo elegante a lo largo del strand. Como cada gema se forma de manera natural, cada Signature Strand es enteramente único en color, marcas y carácter natural.',
    stoneOrigin:
      'El Lapis Lazuli procede de regiones como Afghanistan, Chile, Russia y Pakistan. Apreciado desde la antigüedad por su intenso color azul y sus inclusiones naturales de pyrite, sigue siendo una de las piedras ornamentales más emblemáticas. Cada gema muestra sus propias variaciones naturales, garantizando que cada Signature Strand sea único.',
    beadDetail: 'Cuentas de piedra natural Lapis Lazuli (aproximadamente 7 mm)',
    materialStone: 'Gemas naturales Lapis Lazuli',
    strandLabel: 'Signature Strands Lapis Lazuli',
    stoneLabel: 'Lapis Lazuli',
    variationNote:
      'Las variaciones naturales de azul, motas de pyrite y dibujo de matriz forman parte de lo que hace único cada Signature Strand.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ru: {
    headline: 'Signature Strands «Lapis Lazuli»',
    introP1:
      'Signature Strands «Lapis Lazuli» привносят королевскую синюю глубину, утончённый контраст и вечерний ювелирный характер в избранные творения Bint Saeed. Собраны вручную в Abu Dhabi из натуральных камней Lapis Lazuli и завершены фирменными золотистыми элементами Knotted Line от Bint Saeed — они предлагают утончённый способ преобразить знакомый силуэт через одну продуманную деталь.',
    introP4:
      'Натуральный Lapis Lazuli ценят за насыщенный синий цвет и деликатные вкрапления pyrite, сверкающие как крошечные точки света. Фасетированные акценты из позолоченного Hematite между камнями усиливают этот ювелирный эффект и задают элегантный ритм по всей нити. Поскольку каждый камень сформирован природой, каждый Signature Strand уникален по цвету, рисунку и природному характеру.',
    stoneOrigin:
      'Lapis Lazuli добывают в регионах, включая Afghanistan, Chile, Russia и Pakistan. С древности он ценится за глубокий синий цвет и природные включения pyrite и остаётся одним из самых знаковых декоративных камней. Каждый камень имеет собственные природные вариации, поэтому каждый Signature Strand неповторим.',
    beadDetail: 'Бусины из натурального Lapis Lazuli (примерно 7 мм)',
    materialStone: 'Натуральные камни Lapis Lazuli',
    strandLabel: 'Signature Strands «Lapis Lazuli»',
    stoneLabel: 'Lapis Lazuli',
    variationNote:
      'Природные различия в синем тоне, вкраплениях pyrite и рисунке матрицы делают каждый Signature Strand уникальным.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  zh: {
    headline: 'Lapis Lazuli Signature Strands',
    introP1:
      'Lapis Lazuli Signature Strands 为精选 Bint Saeed 作品注入皇家蓝层次、精致对比与晚间珠宝般质感。于 Abu Dhabi 以天然 Lapis Lazuli 手工组装，并以 Bint Saeed 标志性金色 Knotted Line 元素收尾，以一处精心细节优雅改变熟悉轮廓。',
    introP4:
      '天然 Lapis Lazuli 以浓郁蓝色与细小 pyrite 闪点著称，宛如细碎星光。每颗宝石之间加入切面镀金 Hematite 点缀，可进一步强化珠宝感并形成优雅节奏。因每颗宝石皆天然形成，每条 Signature Strand 在色泽、纹理与自然个性上皆独一无二。',
    stoneOrigin:
      'Lapis Lazuli 产自 Afghanistan、Chile、Russia 与 Pakistan 等地区。自古以来即因深蓝底色与天然 pyrite 包裹体而备受珍视，至今仍是极具标志性的装饰宝石。每颗宝石都具天然差异，确保每条 Signature Strand 都独一无二。',
    beadDetail: '天然 Lapis Lazuli 珠（约 7 毫米）',
    materialStone: '天然 Lapis Lazuli',
    strandLabel: 'Lapis Lazuli Signature Strands',
    stoneLabel: 'Lapis Lazuli',
    variationNote: '蓝色深浅、pyrite 闪点与基质纹理的天然差异，正是每条 Signature Strand 的独特之处。',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  de: {
    headline: 'Lapis Lazuli Signature Strands',
    introP1:
      'Die Lapis Lazuli Signature Strands bringen königsblaue Tiefe, raffinierten Kontrast und juwelenhaften Abendcharakter in ausgewählte Bint Saeed-Kreationen. Handmontiert in Abu Dhabi aus natürlichen Lapis Lazuli-Edelsteinen und veredelt mit Bint Saeeds charakteristischen goldfarbenen Knotted Line-Elementen bieten sie eine raffinierte Möglichkeit, eine vertraute Silhouette durch ein einziges durchdachtes Detail zu verwandeln.',
    introP4:
      'Natürlicher Lapis Lazuli wird für seinen satten Königsblauton und feine Pyrite-Sprenkel geschätzt, die wie Lichtpunkte funkeln. Facettierte, vergoldete Hematite-Akzente zwischen jedem Edelstein verstärken diesen juwelenhaften Effekt und schaffen einen eleganten Rhythmus entlang des Strangs. Da jeder Stein natürlich entstanden ist, ist jeder Signature Strand in Farbe, Maserung und natürlichem Charakter völlig einzigartig.',
    stoneOrigin:
      'Lapis Lazuli stammt aus Regionen wie Afghanistan, Chile, Russia und Pakistan. Seit der Antike wird er für seine tiefe blaue Körperfarbe und natürliche Pyrite-Einschlüsse geschätzt und zählt bis heute zu den ikonischsten Ziersteinen. Jeder Edelstein zeigt eigene natürliche Variationen – jeder Signature Strand ist damit ein Unikat.',
    beadDetail: 'Natürliche Lapis Lazuli-Edelsteinperlen (ca. 7 mm)',
    materialStone: 'Natürliche Lapis Lazuli-Edelsteine',
    strandLabel: 'Lapis Lazuli Signature Strands',
    stoneLabel: 'Lapis Lazuli',
    variationNote:
      'Natürliche Variationen in Blauton, Pyrite-Sprenkel und Matrixzeichnung gehören zu dem, was jeden Signature Strand einzigartig macht.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  nl: {
    headline: 'Lapis Lazuli Signature Strands',
    introP1:
      'De Lapis Lazuli Signature Strands brengen koninklijke blauwe diepte, verfijnd contrast en avondlijk juweelkarakter in geselecteerde Bint Saeed-creaties. Handmatig geassembleerd in Abu Dhabi van natuurlijke Lapis Lazuli-edelstenen en afgewerkt met Bint Saeeds kenmerkende goudkleurige Knotted Line-elementen, bieden ze een verfijnde manier om een vertrouwde silhouet te transformeren via één doordacht detail.',
    introP4:
      'Natuurlijke Lapis Lazuli wordt gewaardeerd om zijn verzadigde koningsblauwe toon en fijne pyrite-spikkels die fonkelen als lichtpuntjes. Gefacetteerde, vergulde Hematite-accenten tussen elke edelsteen versterken dit juweelachtige effect en creëren een elegante ritmiek langs de streng. Omdat elke edelsteen natuurlijk gevormd is, is elke Signature Strand volledig uniek in kleur, tekening en natuurlijk karakter.',
    stoneOrigin:
      'Lapis Lazuli wordt gewonnen in regio’s waaronder Afghanistan, Chile, Russia en Pakistan. Al sinds de oudheid gewaardeerd om de diepe blauwe kleur en natuurlijke pyrite-insluitsels, blijft het een van de meest iconische sierstenen. Elke edelsteen toont eigen natuurlijke variaties, waardoor elke Signature Strand uniek is.',
    beadDetail: 'Natuurlijke Lapis Lazuli-edelstenen kralen (ongeveer 7 mm)',
    materialStone: 'Natuurlijke Lapis Lazuli-edelstenen',
    strandLabel: 'Lapis Lazuli Signature Strands',
    stoneLabel: 'Lapis Lazuli',
    variationNote:
      'Natuurlijke variaties in blauwtint, pyrite-spikkels en matrixpatroon maken deel uit van wat elke Signature Strand uniek maakt.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  pt: {
    headline: 'Signature Strands Lapis Lazuli',
    introP1:
      'Os Signature Strands Lapis Lazuli introduzem profundidade azul régia, contraste refinado e carácter de joia de noite nas criações Bint Saeed selecionadas. Montados à mão em Abu Dhabi com gemas naturais Lapis Lazuli e finalizados com os elementos Knotted Line dourados assinatura da Bint Saeed, oferecem uma forma refinada de transformar uma silhueta familiar através de um único detalhe cuidado.',
    introP4:
      'O Lapis Lazuli natural é admirado pelo tom azul saturado e pelas delicadas partículas de pyrite que cintilam como pontos de luz. Acentos de Hematite folheada a ouro facetados entre cada gema reforçam este efeito joia e criam um ritmo elegante ao longo do fio. Como cada gema se forma naturalmente, cada Signature Strand é inteiramente único em cor, marcas e carácter natural.',
    stoneOrigin:
      'O Lapis Lazuli provém de regiões como Afghanistan, Chile, Russia e Pakistan. Valorizado desde a Antiguidade pela sua cor azul profunda e inclusões naturais de pyrite, continua a ser uma das pedras ornamentais mais icónicas do mundo. Cada gema exibe as suas próprias variações naturais, garantindo que cada Signature Strand seja único.',
    beadDetail: 'Contas de pedra natural Lapis Lazuli (aproximadamente 7 mm)',
    materialStone: 'Gemas naturais Lapis Lazuli',
    strandLabel: 'Signature Strands Lapis Lazuli',
    stoneLabel: 'Lapis Lazuli',
    variationNote:
      'As variações naturais de tom azul, partículas de pyrite e padrão de matriz fazem parte do que torna cada Signature Strand único.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  id: {
    headline: 'Signature Strands Lapis Lazuli',
    introP1:
      'Signature Strands Lapis Lazuli menghadirkan kedalaman biru regal, kontras elegan, dan karakter batu permata malam pada kreasi Bint Saeed terpilih. Dirakit tangan di Abu Dhabi dari batu permata Lapis Lazuli alami dan diselesaikan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, mereka menawarkan cara berkelas untuk mengubah siluet yang sudah dikenal melalui satu detail yang penuh pertimbangan.',
    introP4:
      'Lapis Lazuli alami dikagumi karena rona biru pekat dan bintik pyrite halus yang berkilau seperti titik cahaya. Aksen Hematite berlapis emas berfaset di antara setiap batu memperkuat efek seperti permata dan menciptakan ritme elegan sepanjang strand. Karena setiap batu terbentuk secara alami, setiap Signature Strand sepenuhnya unik dalam warna, corak, dan karakter alaminya.',
    stoneOrigin:
      'Lapis Lazuli bersumber dari wilayah termasuk Afghanistan, Chile, Russia, dan Pakistan. Dihargai sejak masa kuno karena warna birunya yang dalam dan inklusi pyrite alaminya, batu ini tetap menjadi salah satu batu hias paling ikonik. Setiap batu permata menampilkan variasi alaminya sendiri, memastikan setiap Signature Strand benar-benar unik.',
    beadDetail: 'Manik batu permata Lapis Lazuli alami (sekitar 7 mm)',
    materialStone: 'Batu permata Lapis Lazuli alami',
    strandLabel: 'Signature Strands Lapis Lazuli',
    stoneLabel: 'Lapis Lazuli',
    variationNote:
      'Variasi alami pada rona biru, bintik pyrite, dan pola matriks merupakan bagian dari apa yang membuat setiap Signature Strand unik.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
  ms: {
    headline: 'Signature Strands Lapis Lazuli',
    introP1:
      'Signature Strands Lapis Lazuli memperkenalkan kedalaman biru diraja, kontras elegan dan karakter batu permata malam kepada ciptaan Bint Saeed terpilih. Dipasang tangan di Abu Dhabi daripada batu permata Lapis Lazuli semula jadi dan disiapkan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, ia menawarkan cara yang anggun untuk mengubah siluet yang biasa melalui satu butiran yang dipikirkan dengan teliti.',
    introP4:
      'Lapis Lazuli semula jadi dikagumi kerana tona biru tepu dan bintik pyrite halus yang berkilau seperti titik cahaya. Aksen Hematite bersalut emas berfaset di antara setiap batu menguatkan kesan seperti permata dan mewujudkan ritma elegan sepanjang strand. Memandangkan setiap batu terbentuk secara semula jadi, setiap Signature Strand benar-benar unik dalam warna, corak dan karakter semula jadinya.',
    stoneOrigin:
      'Lapis Lazuli bersumber dari wilayah termasuk Afghanistan, Chile, Russia dan Pakistan. Dihargai sejak zaman purba kerana warna biru mendalam dan inklusi pyrite semula jadi, batu ini kekal sebagai antara batu hiasan paling ikonik. Setiap batu permata mempamerkan variasi semula jadinya sendiri, memastikan setiap Signature Strand benar-benar unik.',
    beadDetail: 'Manik batu permata Lapis Lazuli semula jadi (kira-kira 7 mm)',
    materialStone: 'Batu permata Lapis Lazuli semula jadi',
    strandLabel: 'Signature Strands Lapis Lazuli',
    stoneLabel: 'Lapis Lazuli',
    variationNote:
      'Variasi semula jadi pada tona biru, bintik pyrite dan corak matriks merupakan sebahagian daripada apa yang menjadikan setiap Signature Strand unik.',
    introP2Style: 'evening',
    limitedEdition: false,
  },
}

const AMETHYST_HEARTS: VariantPack = {
  en: {
    headline: 'Amethyst Hearts Signature Strands',
    introP1:
      'The Amethyst Hearts Signature Strands introduce limited-edition violet romance, sculptural movement and refined evening character to selected Bint Saeed creations. Hand-assembled in Abu Dhabi from natural heart-cut Amethyst gemstones and finished with Bint Saeed’s signature gold-tone Knotted Line elements, they offer a refined way to transform a familiar silhouette through a single thoughtful detail.',
    introP4:
      'The heart-cut violet Amethyst beads bring a romantic, sculptural quality to the strand, while faceted gold-plated Hematite accents positioned between every gemstone capture and reflect light with subtle brilliance. Because every gemstone is naturally formed, each limited-edition Signature Strand is entirely unique in its colour, markings and natural character.',
    stoneOrigin:
      'Amethyst is sourced from regions including Brazil, Uruguay, Zambia and Madagascar. Heart-cut beads are shaped to reveal the stone’s natural violet tones from every angle. Appreciated for centuries as a decorative gemstone, Amethyst remains one of the most sought-after coloured stones in fine adornment. Every gemstone displays its own natural variations, ensuring every limited-edition Signature Strand is one of a kind.',
    beadDetail: 'Natural heart-cut Amethyst gemstone beads',
    materialStone: 'Natural heart-cut Amethyst gemstones',
    strandLabel: 'Amethyst Hearts Signature Strands',
    stoneLabel: 'Amethyst',
    variationNote:
      'Natural variations in colour, clarity and heart-cut character are part of what makes every Signature Strand unique.',
    introP2Style: 'evening',
    limitedEdition: true,
  },
  ar: {
    headline: 'ستراندات Amethyst Hearts Signature Strands',
    introP1:
      'تقدّم ستراندات Amethyst Hearts Signature Strands رومانسية بنفسجية بإصدار محدود وحركة نحتية وطابعاً مسائياً راقياً إلى مختارات من إبداعات Bint Saeed. تُجمَّع يدوياً في Abu Dhabi من أحجار Amethyst الطبيعية بقَطْع القلوب وتُنهى بعناصر Knotted Line الذهبية الحصرية من Bint Saeed، لتقدّم طريقة أنيقة لتحويل صورة مألوفة من خلال تفصيلة واحدة مدروسة.',
    introP4:
      'تمنح خرزات Amethyst البنفسجية بقَطْع القلوب الستراند حضوراً رومانسياً منحوتاً، بينما تلتقط لمسات Hematite المطلية ذهباً والمقطّعة بين كل حجر الضوء وتعكسه ببريق رقيق. ولأن كل حجر يتشكّل طبيعياً، يكون كل Signature Strand بإصداره المحدود فريداً تماماً في لونه وعلاماته وطابعه الطبيعي.',
    stoneOrigin:
      'يُستخرج Amethyst من مناطق تشمل Brazil وUruguay وZambia وMadagascar. وتُشكَّل خرزات القلوب لإظهار درجات الحجر البنفسجية الطبيعية من كل زاوية. وقد حظي Amethyst بتقدير كبير عبر القرون كحجر زينة، وما يزال من أكثر الأحجار الملونة طلباً. يحمل كل حجر تبايناته الطبيعية الخاصة، ما يضمن أن كل Signature Strand بإصدار محدود فريد من نوعه.',
    beadDetail: 'خرز أحجار Amethyst الطبيعية بقَطْع القلوب',
    materialStone: 'أحجار Amethyst الطبيعية بقَطْع القلوب',
    strandLabel: 'ستراندات Amethyst Hearts Signature Strands',
    stoneLabel: 'Amethyst',
    variationNote: 'التباينات الطبيعية في اللون والشفافية وطابع قَطْع القلوب جزء مما يجعل كل Signature Strand فريداً.',
    introP2Style: 'evening',
    limitedEdition: true,
  },
  fr: {
    headline: 'Signature Strands Amethyst Hearts',
    introP1:
      'Les Signature Strands Amethyst Hearts apportent un romantisme violet en édition limitée, un mouvement sculptural et une élégance du soir aux créations Bint Saeed sélectionnées. Assemblés à la main à Abu Dhabi à partir de gemmes naturelles Amethyst taillées en cœur et finis avec les éléments Knotted Line dorés signature de Bint Saeed, ils offrent une manière raffinée de transformer une silhouette familière par un seul détail réfléchi.',
    introP4:
      'Les perles violettes d’Amethyst taillées en cœur donnent au strand une présence romantique et sculpturale, tandis que des accents d’Hematite plaquée or facettés entre chaque gemme captent et reflètent la lumière avec une brillance subtile. Chaque pierre étant formée naturellement, chaque Signature Strand en édition limitée est entièrement unique par sa couleur, ses marques et son caractère naturel.',
    stoneOrigin:
      'L’Amethyst provient notamment du Brazil, d’Uruguay, de Zambia et de Madagascar. Les perles taillées en cœur sont façonnées pour révéler les tons violets naturels de la pierre sous tous les angles. Appréciée depuis des siècles comme pierre ornementale, l’Amethyst reste l’une des pierres colorées les plus recherchées. Chaque gemme présente ses propres variations naturelles, garantissant l’unicité de chaque Signature Strand en édition limitée.',
    beadDetail: 'Perles en gemme naturelle Amethyst taillée en cœur',
    materialStone: 'Gemmes naturelles Amethyst taillées en cœur',
    strandLabel: 'Signature Strands Amethyst Hearts',
    stoneLabel: 'Amethyst',
    variationNote:
      'Les variations naturelles de couleur, de clarté et de taille cœur font partie de ce qui rend chaque Signature Strand unique.',
    introP2Style: 'evening',
    limitedEdition: true,
  },
  it: {
    headline: 'Signature Strands Amethyst Hearts',
    introP1:
      'I Signature Strands Amethyst Hearts introducono romanticismo viola in edizione limitata, movimento scultoreo e carattere serale raffinato nelle creazioni Bint Saeed selezionate. Assemblati a mano ad Abu Dhabi con gemme naturali Amethyst a taglio cuore e rifiniti con gli elementi Knotted Line dorati signature di Bint Saeed, offrono un modo raffinato di trasformare una silhouette familiare attraverso un solo dettaglio ponderato.',
    introP4:
      'Le perle violette di Amethyst a cuore donano allo strand una qualità romantica e scultorea, mentre accenti di Hematite placcata oro sfaccettati tra ogni gemma catturano e riflettono la luce con brillantezza sottile. Poiché ogni gemma è formata naturalmente, ogni Signature Strand in edizione limitata è interamente unico nel colore, nelle venature e nel carattere naturale.',
    stoneOrigin:
      'L’Amethyst proviene da regioni tra cui Brazil, Uruguay, Zambia e Madagascar. Le perle a cuore sono lavorate per mostrare i toni viola naturali della pietra da ogni angolazione. Apprezzata da secoli come pietra decorativa, l’Amethyst resta una delle gemme colorate più ricercate. Ogni gemma mostra le proprie variazioni naturali, garantendo l’unicità di ogni Signature Strand in edizione limitata.',
    beadDetail: 'Perle in gemma naturale Amethyst a taglio cuore',
    materialStone: 'Gemme naturali Amethyst a taglio cuore',
    strandLabel: 'Signature Strands Amethyst Hearts',
    stoneLabel: 'Amethyst',
    variationNote:
      'Le variazioni naturali di colore, purezza e carattere del taglio a cuore fanno parte di ciò che rende ogni Signature Strand unico.',
    introP2Style: 'evening',
    limitedEdition: true,
  },
  es: {
    headline: 'Signature Strands Amethyst Hearts',
    introP1:
      'Los Signature Strands Amethyst Hearts aportan romanticismo violeta de edición limitada, movimiento escultórico y carácter nocturno refinado a creaciones seleccionadas de Bint Saeed. Ensamblados a mano en Abu Dhabi con gemas naturales Amethyst de corte corazón y acabados con los elementos Knotted Line dorados característicos de Bint Saeed, ofrecen una forma refinada de transformar una silueta familiar mediante un solo detalle cuidado.',
    introP4:
      'Las cuentas violetas de Amethyst en corte corazón aportan al strand una cualidad romántica y escultórica, mientras los acentos de Hematite chapada en oro facetados entre cada gema captan y reflejan la luz con brillo sutil. Como cada gema se forma de manera natural, cada Signature Strand de edición limitada es enteramente único en color, marcas y carácter natural.',
    stoneOrigin:
      'La Amethyst procede de regiones como Brazil, Uruguay, Zambia y Madagascar. Las cuentas en forma de corazón se tallan para revelar los tonos violetas naturales de la piedra desde todos los ángulos. Apreciada durante siglos como piedra decorativa, la Amethyst sigue siendo una de las gemas de color más solicitadas. Cada gema muestra sus propias variaciones naturales, garantizando que cada Signature Strand de edición limitada sea único.',
    beadDetail: 'Cuentas de gema natural Amethyst con corte corazón',
    materialStone: 'Gemas naturales Amethyst con corte corazón',
    strandLabel: 'Signature Strands Amethyst Hearts',
    stoneLabel: 'Amethyst',
    variationNote:
      'Las variaciones naturales de color, claridad y carácter del corte corazón forman parte de lo que hace único cada Signature Strand.',
    introP2Style: 'evening',
    limitedEdition: true,
  },
  ru: {
    headline: 'Signature Strands «Amethyst Hearts»',
    introP1:
      'Signature Strands «Amethyst Hearts» привносят ограниченную фиолетовую романтику, скульптурную динамику и утончённый вечерний характер в избранные творения Bint Saeed. Собраны вручную в Abu Dhabi из натуральных камней Amethyst огранки «сердце» и завершены фирменными золотистыми элементами Knotted Line от Bint Saeed — они предлагают изысканный способ преобразить знакомый силуэт через одну продуманную деталь.',
    introP4:
      'Фиолетовые бусины Amethyst огранки «сердце» придают нити романтичный скульптурный характер, а фасетированные акценты из позолоченного Hematite между камнями мягко улавливают и отражают свет. Поскольку каждый камень сформирован природой, каждый Signature Strand ограниченного выпуска уникален по цвету, рисунку и природному характеру.',
    stoneOrigin:
      'Amethyst добывают в регионах, включая Brazil, Uruguay, Zambia и Madagascar. Бусины огранки «сердце» выполнены так, чтобы раскрывать природные фиолетовые оттенки камня с любого ракурса. На протяжении веков Amethyst ценится как декоративный минерал и остаётся одним из самых востребованных цветных камней. Каждый камень имеет собственные природные вариации, поэтому каждый Signature Strand ограниченного выпуска неповторим.',
    beadDetail: 'Бусины из натурального Amethyst огранки «сердце»',
    materialStone: 'Натуральные камни Amethyst огранки «сердце»',
    strandLabel: 'Signature Strands «Amethyst Hearts»',
    stoneLabel: 'Amethyst',
    variationNote:
      'Природные различия в цвете, чистоте и характере огранки «сердце» делают каждый Signature Strand уникальным.',
    introP2Style: 'evening',
    limitedEdition: true,
  },
  zh: {
    headline: 'Amethyst Hearts Signature Strands',
    introP1:
      'Amethyst Hearts Signature Strands 为精选 Bint Saeed 作品注入限量紫调浪漫、雕塑感律动与精致晚间气质。于 Abu Dhabi 以天然心形切割 Amethyst 手工组装，并以 Bint Saeed 标志性金色 Knotted Line 元素收尾，以一处精心细节优雅改变熟悉轮廓。',
    introP4:
      '心形切割的紫色 Amethyst 珠体为整条 strand 带来浪漫且立体的视觉效果；每颗宝石之间的切面镀金 Hematite 点缀可捕捉并反射细腻光线。因每颗宝石皆天然形成，每条限量 Signature Strand 在色泽、纹理与自然个性上皆独一无二。',
    stoneOrigin:
      'Amethyst 产自 Brazil、Uruguay、Zambia 与 Madagascar 等地区。心形切割珠体可从各角度呈现天然紫色层次。作为装饰宝石，Amethyst 数百年来一直备受青睐，至今仍是最受欢迎的彩色宝石之一。每颗宝石都具天然差异，确保每条限量 Signature Strand 都独一无二。',
    beadDetail: '天然心形切割 Amethyst 珠',
    materialStone: '天然心形切割 Amethyst',
    strandLabel: 'Amethyst Hearts Signature Strands',
    stoneLabel: 'Amethyst',
    variationNote: '色泽、净度与心形切割个性的天然差异，正是每条 Signature Strand 的独特之处。',
    introP2Style: 'evening',
    limitedEdition: true,
  },
  de: {
    headline: 'Amethyst Hearts Signature Strands',
    introP1:
      'Die Amethyst Hearts Signature Strands bringen limitierte violette Romantik, skulpturale Bewegung und raffinierten Abendcharakter in ausgewählte Bint Saeed-Kreationen. Handmontiert in Abu Dhabi aus natürlichen Amethyst-Edelsteinen im Herzschliff und veredelt mit Bint Saeeds charakteristischen goldfarbenen Knotted Line-Elementen bieten sie eine raffinierte Möglichkeit, eine vertraute Silhouette durch ein einziges durchdachtes Detail zu verwandeln.',
    introP4:
      'Die violetten Amethyst-Perlen im Herzschliff verleihen dem Strang eine romantische, skulpturale Wirkung, während facettierte, vergoldete Hematite-Akzente zwischen jedem Edelstein Licht mit subtiler Brillanz einfangen und reflektieren. Da jeder Stein natürlich entstanden ist, ist jeder limitierte Signature Strand in Farbe, Maserung und natürlichem Charakter völlig einzigartig.',
    stoneOrigin:
      'Amethyst stammt aus Regionen wie Brazil, Uruguay, Zambia und Madagascar. Herzgeschliffene Perlen werden so gearbeitet, dass sie die natürlichen Violetttöne des Steins aus jedem Blickwinkel zeigen. Seit Jahrhunderten als Zierstein geschätzt, zählt Amethyst weiterhin zu den gefragtesten Farbsteinen. Jeder Edelstein zeigt eigene natürliche Variationen – jeder limitierte Signature Strand ist damit ein Unikat.',
    beadDetail: 'Natürliche Amethyst-Edelsteinperlen im Herzschliff',
    materialStone: 'Natürliche Amethyst-Edelsteine im Herzschliff',
    strandLabel: 'Amethyst Hearts Signature Strands',
    stoneLabel: 'Amethyst',
    variationNote:
      'Natürliche Variationen in Farbe, Klarheit und Herzschliff-Charakter gehören zu dem, was jeden Signature Strand einzigartig macht.',
    introP2Style: 'evening',
    limitedEdition: true,
  },
  nl: {
    headline: 'Amethyst Hearts Signature Strands',
    introP1:
      'De Amethyst Hearts Signature Strands brengen gelimiteerde violette romantiek, sculpturale beweging en verfijnd avondkarakter in geselecteerde Bint Saeed-creaties. Handmatig geassembleerd in Abu Dhabi van natuurlijke Amethyst-edelstenen met hartslijping en afgewerkt met Bint Saeeds kenmerkende goudkleurige Knotted Line-elementen, bieden ze een verfijnde manier om een vertrouwde silhouet te transformeren via één doordacht detail.',
    introP4:
      'De violette Amethyst-kralen in hartslijping geven de streng een romantische, sculpturale kwaliteit, terwijl gefacetteerde, vergulde Hematite-accenten tussen elke edelsteen licht met subtiele glans vangen en weerkaatsen. Omdat elke edelsteen natuurlijk gevormd is, is elke gelimiteerde Signature Strand volledig uniek in kleur, tekening en natuurlijk karakter.',
    stoneOrigin:
      'Amethyst wordt gewonnen in regio’s waaronder Brazil, Uruguay, Zambia en Madagascar. Kralen met hartslijping worden gevormd om de natuurlijke violette tonen vanuit elke hoek te tonen. Al eeuwenlang gewaardeerd als siersteen blijft Amethyst een van de meest gezochte gekleurde stenen. Elke edelsteen toont eigen natuurlijke variaties, waardoor elke gelimiteerde Signature Strand uniek is.',
    beadDetail: 'Natuurlijke Amethyst-edelstenen kralen met hartslijping',
    materialStone: 'Natuurlijke Amethyst-edelstenen met hartslijping',
    strandLabel: 'Amethyst Hearts Signature Strands',
    stoneLabel: 'Amethyst',
    variationNote:
      'Natuurlijke variaties in kleur, helderheid en hartslijpkarakter maken deel uit van wat elke Signature Strand uniek maakt.',
    introP2Style: 'evening',
    limitedEdition: true,
  },
  pt: {
    headline: 'Signature Strands Amethyst Hearts',
    introP1:
      'Os Signature Strands Amethyst Hearts introduzem romantismo violeta de edição limitada, movimento escultural e carácter refinado de noite nas criações Bint Saeed selecionadas. Montados à mão em Abu Dhabi com gemas naturais Amethyst de corte coração e finalizados com os elementos Knotted Line dourados assinatura da Bint Saeed, oferecem uma forma refinada de transformar uma silhueta familiar através de um único detalhe cuidado.',
    introP4:
      'As contas violetas de Amethyst com corte coração dão ao strand uma qualidade romântica e escultural, enquanto acentos de Hematite folheada a ouro facetados entre cada gema captam e reflectem a luz com brilho subtil. Como cada gema se forma naturalmente, cada Signature Strand de edição limitada é inteiramente único em cor, marcas e carácter natural.',
    stoneOrigin:
      'A Amethyst provém de regiões como Brazil, Uruguay, Zambia e Madagascar. As contas de corte coração são moldadas para revelar os tons violetas naturais da pedra em todos os ângulos. Apreciada há séculos como pedra ornamental, a Amethyst continua entre as gemas coloridas mais procuradas. Cada gema exibe as suas próprias variações naturais, garantindo que cada Signature Strand de edição limitada seja único.',
    beadDetail: 'Contas de gema natural Amethyst com corte coração',
    materialStone: 'Gemas naturais Amethyst com corte coração',
    strandLabel: 'Signature Strands Amethyst Hearts',
    stoneLabel: 'Amethyst',
    variationNote:
      'As variações naturais de cor, clareza e carácter do corte coração fazem parte do que torna cada Signature Strand único.',
    introP2Style: 'evening',
    limitedEdition: true,
  },
  id: {
    headline: 'Signature Strands Amethyst Hearts',
    introP1:
      'Signature Strands Amethyst Hearts menghadirkan romansa violet edisi terbatas, gerak berstruktur, dan karakter malam yang anggun pada kreasi Bint Saeed terpilih. Dirakit tangan di Abu Dhabi dari batu permata Amethyst alami berpotongan hati dan diselesaikan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, mereka menawarkan cara berkelas untuk mengubah siluet yang sudah dikenal melalui satu detail yang penuh pertimbangan.',
    introP4:
      'Manik Amethyst ungu berpotongan hati memberi kualitas romantis dan pahatan pada strand, sementara aksen Hematite berlapis emas berfaset di antara setiap batu menangkap dan memantulkan cahaya dengan kilau halus. Karena setiap batu terbentuk secara alami, setiap Signature Strand edisi terbatas sepenuhnya unik dalam warna, corak, dan karakter alaminya.',
    stoneOrigin:
      'Amethyst bersumber dari wilayah termasuk Brazil, Uruguay, Zambia, dan Madagascar. Manik berpotongan hati dibentuk untuk menonjolkan rona violet alami batu dari setiap sudut. Dihargai selama berabad-abad sebagai batu dekoratif, Amethyst tetap menjadi salah satu batu berwarna yang paling diminati. Setiap batu permata menampilkan variasi alaminya sendiri, memastikan setiap Signature Strand edisi terbatas benar-benar unik.',
    beadDetail: 'Manik batu permata Amethyst alami berpotongan hati',
    materialStone: 'Batu permata Amethyst alami berpotongan hati',
    strandLabel: 'Signature Strands Amethyst Hearts',
    stoneLabel: 'Amethyst',
    variationNote:
      'Variasi alami pada warna, kejernihan, dan karakter potongan hati merupakan bagian dari apa yang membuat setiap Signature Strand unik.',
    introP2Style: 'evening',
    limitedEdition: true,
  },
  ms: {
    headline: 'Signature Strands Amethyst Hearts',
    introP1:
      'Signature Strands Amethyst Hearts memperkenalkan romantik ungu edisi terhad, gerakan berstruktur dan karakter malam yang anggun kepada ciptaan Bint Saeed terpilih. Dipasang tangan di Abu Dhabi daripada batu permata Amethyst semula jadi berpotongan hati dan disiapkan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, ia menawarkan cara yang anggun untuk mengubah siluet yang biasa melalui satu butiran yang dipikirkan dengan teliti.',
    introP4:
      'Manik Amethyst ungu berpotongan hati memberi kualiti romantik dan berukir pada strand, manakala aksen Hematite bersalut emas berfaset di antara setiap batu menangkap dan memantulkan cahaya dengan kilauan halus. Memandangkan setiap batu terbentuk secara semula jadi, setiap Signature Strand edisi terhad benar-benar unik dalam warna, corak dan karakter semula jadinya.',
    stoneOrigin:
      'Amethyst bersumber dari wilayah termasuk Brazil, Uruguay, Zambia dan Madagascar. Manik berpotongan hati dibentuk untuk menonjolkan tona ungu semula jadi batu dari setiap sudut. Dihargai selama berabad-abad sebagai batu hiasan, Amethyst kekal sebagai antara batu berwarna yang paling dicari. Setiap batu permata mempamerkan variasi semula jadinya sendiri, memastikan setiap Signature Strand edisi terhad benar-benar unik.',
    beadDetail: 'Manik batu permata Amethyst semula jadi berpotongan hati',
    materialStone: 'Batu permata Amethyst semula jadi berpotongan hati',
    strandLabel: 'Signature Strands Amethyst Hearts',
    stoneLabel: 'Amethyst',
    variationNote:
      'Variasi semula jadi pada warna, kejernihan dan karakter potongan hati merupakan sebahagian daripada apa yang menjadikan setiap Signature Strand unik.',
    introP2Style: 'evening',
    limitedEdition: true,
  },
}

const JADE_HEARTS: VariantPack = {
  en: {
    headline: 'Jade Hearts Signature Strands',
    introP1:
      'The Jade Hearts Signature Strands introduce limited-edition serene green tone, sculptural softness and refined evening elegance to selected Bint Saeed creations. Hand-assembled in Abu Dhabi from natural heart-shaped Jade gemstones and finished with Bint Saeed’s signature gold-tone Knotted Line elements, they offer a refined way to transform a familiar silhouette through a single thoughtful detail.',
    introP4:
      'The heart-shaped green Jade beads bring a calm, sculptural movement to the abaya line, while faceted gold-plated Hematite accents positioned between every gemstone capture and reflect light with subtle brilliance. Because every gemstone is naturally formed, each limited-edition Signature Strand is entirely unique in its colour, markings and natural character.',
    stoneOrigin:
      'Jade has been treasured for millennia across East and Central Asia, with notable sources including Myanmar, Guatemala and China. Heart-shaped beads are cut to reveal the stone’s natural green tones and smooth polish from every angle. Every gemstone displays its own natural variations, ensuring every limited-edition Signature Strand is one of a kind.',
    beadDetail: 'Natural heart-shaped Jade gemstone beads',
    materialStone: 'Natural heart-shaped Jade gemstones',
    strandLabel: 'Jade Hearts Signature Strands',
    stoneLabel: 'Jade',
    variationNote:
      'Natural variations in colour, tone and heart-shaped character are part of what makes every Signature Strand unique.',
    introP2Style: 'evening',
    limitedEdition: true,
  },
  ar: {
    headline: 'ستراندات Jade Hearts Signature Strands',
    introP1:
      'تقدّم ستراندات Jade Hearts Signature Strands درجة خضراء هادئة بإصدار محدود ونعومة نحتية وأناقة مسائية راقية إلى مختارات من إبداعات Bint Saeed. تُجمَّع يدوياً في Abu Dhabi من أحجار Jade الطبيعية بشكل القلب وتُنهى بعناصر Knotted Line الذهبية الحصرية من Bint Saeed، لتقدّم طريقة أنيقة لتحويل صورة مألوفة من خلال تفصيلة واحدة مدروسة.',
    introP4:
      'تمنح خرزات Jade الخضراء بشكل القلب خط العباية حركة هادئة بطابع منحوت، بينما تلتقط لمسات Hematite المطلية ذهباً والمقطّعة بين كل حجر الضوء وتعكسه ببريق رقيق. ولأن كل حجر يتشكّل طبيعياً، يكون كل Signature Strand بإصدار محدود فريداً تماماً في لونه وعلاماته وطابعه الطبيعي.',
    stoneOrigin:
      'حجر Jade مُقدَّر منذ آلاف السنين في شرق ووسط آسيا، ومن أبرز مصادره Myanmar وGuatemala وChina. وتُقطع خرزات القلب لإبراز الدرجات الخضراء الطبيعية والصقل الناعم من كل زاوية. يحمل كل حجر تبايناته الطبيعية الخاصة، ما يضمن أن كل Signature Strand بإصدار محدود فريد من نوعه.',
    beadDetail: 'خرز أحجار Jade الطبيعية بشكل القلب',
    materialStone: 'أحجار Jade الطبيعية بشكل القلب',
    strandLabel: 'ستراندات Jade Hearts Signature Strands',
    stoneLabel: 'Jade',
    variationNote: 'التباينات الطبيعية في اللون والدرجة وطابع الشكل القلبي جزء مما يجعل كل Signature Strand فريداً.',
    introP2Style: 'evening',
    limitedEdition: true,
  },
  fr: {
    headline: 'Signature Strands Jade Hearts',
    introP1:
      'Les Signature Strands Jade Hearts apportent une tonalité verte sereine en édition limitée, une douceur sculpturale et une élégance du soir aux créations Bint Saeed sélectionnées. Assemblés à la main à Abu Dhabi à partir de gemmes naturelles Jade en forme de cœur et finis avec les éléments Knotted Line dorés signature de Bint Saeed, ils offrent une manière raffinée de transformer une silhouette familière par un seul détail réfléchi.',
    introP4:
      'Les perles vertes de Jade en forme de cœur apportent au tracé de l’abaya un mouvement calme et sculptural, tandis que des accents d’Hematite plaquée or facettés entre chaque gemme captent et reflètent la lumière avec une brillance subtile. Chaque pierre étant formée naturellement, chaque Signature Strand en édition limitée est entièrement unique par sa couleur, ses marques et son caractère naturel.',
    stoneOrigin:
      'La Jade est prisée depuis des millénaires en Asie de l’Est et d’Asie centrale, avec des sources notables comme Myanmar, Guatemala et China. Les perles en forme de cœur sont taillées pour révéler les tons verts naturels et le poli soyeux de la pierre sous tous les angles. Chaque gemme présente ses propres variations naturelles, garantissant l’unicité de chaque Signature Strand en édition limitée.',
    beadDetail: 'Perles en gemme naturelle Jade en forme de cœur',
    materialStone: 'Gemmes naturelles Jade en forme de cœur',
    strandLabel: 'Signature Strands Jade Hearts',
    stoneLabel: 'Jade',
    variationNote:
      'Les variations naturelles de couleur, de tonalité et de caractère en forme de cœur font partie de ce qui rend chaque Signature Strand unique.',
    introP2Style: 'evening',
    limitedEdition: true,
  },
  it: {
    headline: 'Signature Strands Jade Hearts',
    introP1:
      'I Signature Strands Jade Hearts introducono una tonalità verde serena in edizione limitata, morbidezza scultorea ed eleganza serale raffinata nelle creazioni Bint Saeed selezionate. Assemblati a mano ad Abu Dhabi con gemme naturali Jade a forma di cuore e rifiniti con gli elementi Knotted Line dorati signature di Bint Saeed, offrono un modo raffinato di trasformare una silhouette familiare attraverso un solo dettaglio ponderato.',
    introP4:
      'Le perle verdi di Jade a forma di cuore donano alla linea dell’abaya un movimento calmo e scultoreo, mentre accenti di Hematite placcata oro sfaccettati tra ogni gemma catturano e riflettono la luce con brillantezza sottile. Poiché ogni gemma è formata naturalmente, ogni Signature Strand in edizione limitata è interamente unico nel colore, nelle venature e nel carattere naturale.',
    stoneOrigin:
      'La Jade è apprezzata da millenni in Asia orientale e centrale, con fonti notevoli tra cui Myanmar, Guatemala e China. Le perle a forma di cuore sono tagliate per rivelare i toni verdi naturali e la lucidatura morbida della pietra da ogni angolazione. Ogni gemma mostra le proprie variazioni naturali, garantendo l’unicità di ogni Signature Strand in edizione limitata.',
    beadDetail: 'Perle in gemma naturale Jade a forma di cuore',
    materialStone: 'Gemme naturali Jade a forma di cuore',
    strandLabel: 'Signature Strands Jade Hearts',
    stoneLabel: 'Jade',
    variationNote:
      'Le variazioni naturali di colore, tonalità e carattere a forma di cuore fanno parte di ciò che rende ogni Signature Strand unico.',
    introP2Style: 'evening',
    limitedEdition: true,
  },
  es: {
    headline: 'Signature Strands Jade Hearts',
    introP1:
      'Los Signature Strands Jade Hearts aportan tono verde sereno de edición limitada, suavidad escultórica y elegancia nocturna refinada a creaciones seleccionadas de Bint Saeed. Ensamblados a mano en Abu Dhabi con gemas naturales Jade en forma de corazón y acabados con los elementos Knotted Line dorados característicos de Bint Saeed, ofrecen una forma refinada de transformar una silueta familiar mediante un solo detalle cuidado.',
    introP4:
      'Las cuentas verdes de Jade con forma de corazón aportan una caída calmada y escultórica a la línea de la abaya, mientras los acentos de Hematite chapada en oro facetados entre cada gema captan y reflejan la luz con brillo sutil. Como cada gema se forma de manera natural, cada Signature Strand de edición limitada es enteramente único en color, marcas y carácter natural.',
    stoneOrigin:
      'La Jade ha sido apreciada durante milenios en Asia oriental y central, con fuentes destacadas como Myanmar, Guatemala y China. Las cuentas con forma de corazón se tallan para revelar los tonos verdes naturales y el pulido suave de la piedra desde todos los ángulos. Cada gema muestra sus propias variaciones naturales, garantizando que cada Signature Strand de edición limitada sea único.',
    beadDetail: 'Cuentas de gema natural Jade en forma de corazón',
    materialStone: 'Gemas naturales Jade en forma de corazón',
    strandLabel: 'Signature Strands Jade Hearts',
    stoneLabel: 'Jade',
    variationNote:
      'Las variaciones naturales de color, tono y carácter en forma de corazón forman parte de lo que hace único cada Signature Strand.',
    introP2Style: 'evening',
    limitedEdition: true,
  },
  ru: {
    headline: 'Signature Strands «Jade Hearts»',
    introP1:
      'Signature Strands «Jade Hearts» привносят ограниченный спокойный зелёный тон, скульптурную мягкость и утончённую вечернюю элегантность в избранные творения Bint Saeed. Собраны вручную в Abu Dhabi из натуральных камней Jade в форме сердца и завершены фирменными золотистыми элементами Knotted Line от Bint Saeed — они предлагают изысканный способ преобразить знакомый силуэт через одну продуманную деталь.',
    introP4:
      'Зелёные бусины Jade в форме сердца придают линии абаи спокойную скульптурную динамику, а фасетированные акценты из позолоченного Hematite между камнями мягко улавливают и отражают свет. Поскольку каждый камень сформирован природой, каждый Signature Strand ограниченного выпуска уникален по цвету, рисунку и природному характеру.',
    stoneOrigin:
      'Jade ценится на протяжении тысячелетий в Восточной и Центральной Азии; среди значимых источников — Myanmar, Guatemala и China. Бусины в форме сердца огранены так, чтобы раскрывать природные зелёные тона и мягкую полировку камня с любого ракурса. Каждый камень имеет собственные природные вариации, поэтому каждый Signature Strand ограниченного выпуска неповторим.',
    beadDetail: 'Бусины из натурального Jade в форме сердца',
    materialStone: 'Натуральные камни Jade в форме сердца',
    strandLabel: 'Signature Strands «Jade Hearts»',
    stoneLabel: 'Jade',
    variationNote:
      'Природные различия в цвете, тоне и характере формы сердца делают каждый Signature Strand уникальным.',
    introP2Style: 'evening',
    limitedEdition: true,
  },
  zh: {
    headline: 'Jade Hearts Signature Strands',
    introP1:
      'Jade Hearts Signature Strands 为精选 Bint Saeed 作品注入限量宁静绿调、雕塑感柔和线条与精致晚间优雅。于 Abu Dhabi 以天然心形 Jade 手工组装，并以 Bint Saeed 标志性金色 Knotted Line 元素收尾，以一处精心细节优雅改变熟悉轮廓。',
    introP4:
      '心形绿色 Jade 珠体为 Abaya 线条带来沉静而立体的节奏；每颗宝石之间的切面镀金 Hematite 点缀可捕捉并反射细腻光线。因每颗宝石皆天然形成，每条限量 Signature Strand 在色泽、纹理与自然个性上皆独一无二。',
    stoneOrigin:
      'Jade 在东亚与中亚地区已被珍视数千年，主要来源包括 Myanmar、Guatemala 与 China。心形珠体切割可从各角度呈现天然绿色层次与细腻抛光。每颗宝石都具天然差异，确保每条限量 Signature Strand 都独一无二。',
    beadDetail: '天然心形 Jade 珠',
    materialStone: '天然心形 Jade',
    strandLabel: 'Jade Hearts Signature Strands',
    stoneLabel: 'Jade',
    variationNote: '色泽、深浅与心形个性的天然差异，正是每条 Signature Strand 的独特之处。',
    introP2Style: 'evening',
    limitedEdition: true,
  },
  de: {
    headline: 'Jade Hearts Signature Strands',
    introP1:
      'Die Jade Hearts Signature Strands bringen limitierte, ruhige Grüntöne, skulpturale Weichheit und raffinierte Abendeleganz in ausgewählte Bint Saeed-Kreationen. Handmontiert in Abu Dhabi aus natürlichen herzförmigen Jade-Edelsteinen und veredelt mit Bint Saeeds charakteristischen goldfarbenen Knotted Line-Elementen bieten sie eine raffinierte Möglichkeit, eine vertraute Silhouette durch ein einziges durchdachtes Detail zu verwandeln.',
    introP4:
      'Die herzförmigen grünen Jade-Perlen verleihen der Abaya-Linie eine ruhige, skulpturale Bewegung, während facettierte, vergoldete Hematite-Akzente zwischen jedem Edelstein Licht mit subtiler Brillanz einfangen und reflektieren. Da jeder Stein natürlich entstanden ist, ist jeder limitierte Signature Strand in Farbe, Maserung und natürlichem Charakter völlig einzigartig.',
    stoneOrigin:
      'Jade wird seit Jahrtausenden in Ost- und Zentralasien geschätzt; bedeutende Quellen sind Myanmar, Guatemala und China. Herzförmige Perlen werden so geschliffen, dass die natürlichen Grüntöne und die glatte Politur aus jedem Blickwinkel sichtbar werden. Jeder Edelstein zeigt eigene natürliche Variationen – jeder limitierte Signature Strand ist damit ein Unikat.',
    beadDetail: 'Natürliche herzförmige Jade-Edelsteinperlen',
    materialStone: 'Natürliche herzförmige Jade-Edelsteine',
    strandLabel: 'Jade Hearts Signature Strands',
    stoneLabel: 'Jade',
    variationNote:
      'Natürliche Variationen in Farbe, Ton und herzförmigem Charakter gehören zu dem, was jeden Signature Strand einzigartig macht.',
    introP2Style: 'evening',
    limitedEdition: true,
  },
  nl: {
    headline: 'Jade Hearts Signature Strands',
    introP1:
      'De Jade Hearts Signature Strands brengen gelimiteerde serene groentonen, sculpturale zachtheid en verfijnde avondelegantie in geselecteerde Bint Saeed-creaties. Handmatig geassembleerd in Abu Dhabi van natuurlijke hartvormige Jade-edelstenen en afgewerkt met Bint Saeeds kenmerkende goudkleurige Knotted Line-elementen, bieden ze een verfijnde manier om een vertrouwde silhouet te transformeren via één doordacht detail.',
    introP4:
      'De hartvormige groene Jade-kralen brengen een rustige, sculpturale beweging in de abaya-lijn, terwijl gefacetteerde, vergulde Hematite-accenten tussen elke edelsteen licht met subtiele glans vangen en weerkaatsen. Omdat elke edelsteen natuurlijk gevormd is, is elke gelimiteerde Signature Strand volledig uniek in kleur, tekening en natuurlijk karakter.',
    stoneOrigin:
      'Jade wordt al millennia gewaardeerd in Oost- en Centraal-Azië, met belangrijke bronnen in Myanmar, Guatemala en China. Hartvormige kralen worden geslepen om de natuurlijke groentonen en zachte polijsting vanuit elke hoek te tonen. Elke edelsteen toont eigen natuurlijke variaties, waardoor elke gelimiteerde Signature Strand uniek is.',
    beadDetail: 'Natuurlijke hartvormige Jade-edelstenen kralen',
    materialStone: 'Natuurlijke hartvormige Jade-edelstenen',
    strandLabel: 'Jade Hearts Signature Strands',
    stoneLabel: 'Jade',
    variationNote:
      'Natuurlijke variaties in kleur, toon en hartvormig karakter maken deel uit van wat elke Signature Strand uniek maakt.',
    introP2Style: 'evening',
    limitedEdition: true,
  },
  pt: {
    headline: 'Signature Strands Jade Hearts',
    introP1:
      'Os Signature Strands Jade Hearts introduzem tonalidade verde serena de edição limitada, suavidade escultural e elegância refinada de noite nas criações Bint Saeed selecionadas. Montados à mão em Abu Dhabi com gemas naturais Jade em formato de coração e finalizados com os elementos Knotted Line dourados assinatura da Bint Saeed, oferecem uma forma refinada de transformar uma silhueta familiar através de um único detalhe cuidado.',
    introP4:
      'As contas verdes de Jade em formato de coração trazem um movimento calmo e escultural à linha da abaya, enquanto acentos de Hematite folheada a ouro facetados entre cada gema captam e reflectem a luz com brilho subtil. Como cada gema se forma naturalmente, cada Signature Strand de edição limitada é inteiramente único em cor, marcas e carácter natural.',
    stoneOrigin:
      'A Jade é valorizada há milénios no Leste e Centro da Ásia, com fontes de destaque em Myanmar, Guatemala e China. As contas em formato de coração são talhadas para revelar os tons verdes naturais e o polimento suave da pedra em todos os ângulos. Cada gema exibe as suas próprias variações naturais, garantindo que cada Signature Strand de edição limitada seja único.',
    beadDetail: 'Contas de gema natural Jade em formato de coração',
    materialStone: 'Gemas naturais Jade em formato de coração',
    strandLabel: 'Signature Strands Jade Hearts',
    stoneLabel: 'Jade',
    variationNote:
      'As variações naturais de cor, tonalidade e carácter em formato de coração fazem parte do que torna cada Signature Strand único.',
    introP2Style: 'evening',
    limitedEdition: true,
  },
  id: {
    headline: 'Signature Strands Jade Hearts',
    introP1:
      'Signature Strands Jade Hearts menghadirkan rona hijau tenang edisi terbatas, kelembutan berstruktur, dan keanggunan malam yang halus pada kreasi Bint Saeed terpilih. Dirakit tangan di Abu Dhabi dari batu permata Jade alami berbentuk hati dan diselesaikan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, mereka menawarkan cara berkelas untuk mengubah siluet yang sudah dikenal melalui satu detail yang penuh pertimbangan.',
    introP4:
      'Manik Jade hijau berbentuk hati memberi gerak tenang dan berkesan pahatan pada garis abaya, sementara aksen Hematite berlapis emas berfaset di antara setiap batu menangkap dan memantulkan cahaya dengan kilau halus. Karena setiap batu terbentuk secara alami, setiap Signature Strand edisi terbatas sepenuhnya unik dalam warna, corak, dan karakter alaminya.',
    stoneOrigin:
      'Jade telah dihargai selama ribuan tahun di Asia Timur dan Asia Tengah, dengan sumber penting termasuk Myanmar, Guatemala, dan China. Manik berbentuk hati dipotong untuk menampilkan rona hijau alami dan polesan lembut batu dari setiap sudut. Setiap batu permata menampilkan variasi alaminya sendiri, memastikan setiap Signature Strand edisi terbatas benar-benar unik.',
    beadDetail: 'Manik batu permata Jade alami berbentuk hati',
    materialStone: 'Batu permata Jade alami berbentuk hati',
    strandLabel: 'Signature Strands Jade Hearts',
    stoneLabel: 'Jade',
    variationNote:
      'Variasi alami pada warna, rona, dan karakter bentuk hati merupakan bagian dari apa yang membuat setiap Signature Strand unik.',
    introP2Style: 'evening',
    limitedEdition: true,
  },
  ms: {
    headline: 'Signature Strands Jade Hearts',
    introP1:
      'Signature Strands Jade Hearts memperkenalkan tona hijau tenang edisi terhad, kelembutan berstruktur dan keanggunan malam yang halus kepada ciptaan Bint Saeed terpilih. Dipasang tangan di Abu Dhabi daripada batu permata Jade semula jadi berbentuk hati dan disiapkan dengan elemen Knotted Line bernuansa emas khas Bint Saeed, ia menawarkan cara yang anggun untuk mengubah siluet yang biasa melalui satu butiran yang dipikirkan dengan teliti.',
    introP4:
      'Manik Jade hijau berbentuk hati memberi gerakan tenang dan berukir pada garis abaya, manakala aksen Hematite bersalut emas berfaset di antara setiap batu menangkap dan memantulkan cahaya dengan kilauan halus. Memandangkan setiap batu terbentuk secara semula jadi, setiap Signature Strand edisi terhad benar-benar unik dalam warna, corak dan karakter semula jadinya.',
    stoneOrigin:
      'Jade telah dihargai selama ribuan tahun di Asia Timur dan Asia Tengah, dengan sumber penting termasuk Myanmar, Guatemala dan China. Manik berbentuk hati dipotong untuk menonjolkan tona hijau semula jadi dan penggilapan lembut batu dari setiap sudut. Setiap batu permata mempamerkan variasi semula jadinya sendiri, memastikan setiap Signature Strand edisi terhad benar-benar unik.',
    beadDetail: 'Manik batu permata Jade semula jadi berbentuk hati',
    materialStone: 'Batu permata Jade semula jadi berbentuk hati',
    strandLabel: 'Signature Strands Jade Hearts',
    stoneLabel: 'Jade',
    variationNote:
      'Variasi semula jadi pada warna, tona dan karakter bentuk hati merupakan sebahagian daripada apa yang menjadikan setiap Signature Strand unik.',
    introP2Style: 'evening',
    limitedEdition: true,
  },
}

export const STONE_VARIANTS_I18N: Record<StoneVariantId, Record<AppLocale, StoneVariantLocaleContent>> = {
  'signature-strand-tiger-eye': TIGER_EYE,
  'signature-strand-onyx': ONYX,
  'signature-strand-sunstone': SUNSTONE,
  'signature-strand-fuchsia-jade': FUCHSIA_JADE,
  'signature-strand-orange-jade': ORANGE_JADE,
  'signature-strand-jade': NATURAL_JADE,
  'signature-strand-blue-aventurine': BLUE_AVENTURINE,
  'signature-strand-rose-quartz': ROSE_QUARTZ,
  'signature-strand-malachite': MALACHITE,
  'signature-strand-lapis-lazuli': LAPIS_LAZULI,
  'signature-strand-amethyst-hearts': AMETHYST_HEARTS,
  'signature-strand-jade-hearts': JADE_HEARTS,
}

