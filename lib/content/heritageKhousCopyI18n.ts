import type { AppLocale } from '@/lib/i18n/routing'
import { getHeritageSharedChrome, type HeritageSharedChrome, type HeritageCraftNamed, type HeritageCraftProduct } from '@/lib/content/heritageAlTalliCopyI18n'

export type KhousPageCopy = HeritageSharedChrome & {
  heroTag: string
  heroTitle: string
  heroSubtitle: string
  storyEyebrow: string
  storyTitle: string
  storyP1: string
  storyP2: string
  processEyebrow: string
  processTitle: string
  steps: HeritageCraftNamed[]
  productsEyebrow: string
  productsTitle: string
  products: HeritageCraftProduct[]
  brandEyebrow: string
  brandTitle: string
  brandP1: string
  brandP2: string
}

const KHOUS: Record<AppLocale, Omit<KhousPageCopy, keyof HeritageSharedChrome>> = {
  en: {
    heroTag: 'Traditional Craft',
    heroTitle: 'Khous Weaving',
    heroSubtitle: 'The Art of Palm Frond Weaving',
    storyEyebrow: 'Tree of Life',
    storyTitle: 'Gift of the Palm',
    storyP1: 'In Emirati culture, the palm tree is not just a tree - it\'s the tree of life. For centuries, Emiratis relied on the palm for everything: from dates for food, to trunks for building, and palm fronds for handicrafts.',
    storyP2: 'Khous, also known as "Al Safeefah", is the art of weaving dried and treated palm fronds to create baskets, mats, fans, and other everyday items that were essential for desert life.',
    processEyebrow: 'The Process',
    processTitle: 'From Frond to Art',
    steps: [
      {
        title: 'Harvesting',
        description: 'Fresh palm fronds are carefully selected and cut from the tree, choosing the young, flexible leaves ideal for weaving.'
      },
      {
        title: 'Preparation',
        description: 'The fronds are dried in the sun, then soaked in water to make them pliable. Some are dyed with natural colors from saffron or pomegranate.'
      },
      {
        title: 'Weaving',
        description: 'Using ancient patterns passed through generations, artisans interlace the fronds to create functional and beautiful items.'
      }
    ],
    productsEyebrow: 'Products',
    productsTitle: 'What Khous Creates',
    products: [
      {
        name: 'Baskets',
        use: 'Storage & decoration'
      },
      {
        name: 'Mats',
        use: 'Floor coverings'
      },
      {
        name: 'Fans',
        use: 'Cooling in the heat'
      },
      {
        name: 'Food Covers',
        use: 'Protecting food'
      }
    ],
    brandEyebrow: 'Bint Saeed × Khous',
    brandTitle: 'Palm Patterns in Our Designs',
    brandP1: 'We draw inspiration from the geometric patterns of Khous in our embroidery and design details. The interlaced weaving that characterizes Khous appears in our abaya linings and accessories.',
    brandP2: 'We also collaborate with local artisans to produce handcrafted accessories made from palm fronds, complementing our collections and carrying the spirit of Emirati heritage.'
  },
  ar: {
    heroTag: 'حرفة تقليدية',
    heroTitle: 'الخوص',
    heroSubtitle: 'فن نسج سعف النخيل',
    storyEyebrow: 'شجرة الحياة',
    storyTitle: 'هدية النخلة',
    storyP1: 'النخلة في الثقافة الإماراتية ليست مجرد شجرة - إنها شجرة الحياة. لقرون، اعتمد أهل الإمارات على النخلة في كل شيء: من التمر للغذاء، إلى الجذع للبناء، وسعف النخيل للحرف اليدوية.',
    storyP2: 'الخوص، أو "السفيفة" كما يُسمى أيضاً، هو فن نسج سعف النخيل المجففة والمعالجة لصنع السلال والحصير والمراوح وغيرها من المنتجات اليومية التي كانت ضرورية لحياة الصحراء.',
    processEyebrow: 'العملية',
    processTitle: 'من السعف إلى الفن',
    steps: [
      {
        title: 'الحصاد',
        description: 'تُختار سعف النخيل الطازجة بعناية وتُقطع من الشجرة، مع اختيار الأوراق الصغيرة المرنة المثالية للنسج.'
      },
      {
        title: 'التحضير',
        description: 'تُجفف السعف في الشمس، ثم تُنقع في الماء لجعلها مرنة. يُصبغ بعضها بألوان طبيعية من الزعفران أو الرمان.'
      },
      {
        title: 'النسج',
        description: 'باستخدام أنماط قديمة توارثتها الأجيال، تنسج الحرفيات السعف لإنشاء منتجات وظيفية وجميلة.'
      }
    ],
    productsEyebrow: 'المنتجات',
    productsTitle: 'ما يُصنع من الخوص',
    products: [
      {
        name: 'السلال',
        use: 'للتخزين والديكور'
      },
      {
        name: 'الحصير',
        use: 'لتغطية الأرضيات'
      },
      {
        name: 'المهفات',
        use: 'للتبريد في الحر'
      },
      {
        name: 'أغطية الطعام',
        use: 'لحماية الطعام'
      }
    ],
    brandEyebrow: 'بنت سعيد × الخوص',
    brandTitle: 'أنماط النخيل في تصاميمنا',
    brandP1: 'نستلهم من أنماط الخوص الهندسية في تطريزاتنا وتفاصيل تصاميمنا. النسيج المتشابك الذي يميز الخوص يظهر في بطانات عباءاتنا وإكسسواراتنا.',
    brandP2: 'كما نتعاون مع حرفيات محليات لإنتاج إكسسوارات مصنوعة يدوياً من سعف النخيل، تُكمل مجموعاتنا وتحمل روح التراث الإماراتي.'
  },
  fr: {
    heroTag: 'Métier traditionnel',
    heroTitle: 'Khous',
    heroSubtitle: 'L’art du tissage des frondes de palmier',
    storyEyebrow: 'Arbre de vie',
    storyTitle: 'Don du palmier',
    storyP1: 'Dans la culture émiratie, le palmier n’est pas un arbre parmi d’autres — c’est l’arbre de vie. Pendant des siècles, les Émiratis en ont tiré tout : dattes pour se nourrir, troncs pour bâtir, frondes pour l’artisanat.',
    storyP2: 'Le Khous, aussi appelé « Al Safeefah », est l’art de tisser des frondes séchées et préparées pour créer paniers, nattes, éventails et autres objets du quotidien, indispensables à la vie du désert.',
    processEyebrow: 'Le processus',
    processTitle: 'De la fronde à l’art',
    steps: [
      {
        title: 'La récolte',
        description: 'Les frondes fraîches sont soigneusement choisies et coupées, privilégiant les jeunes feuilles souples idéales pour le tissage.'
      },
      {
        title: 'La préparation',
        description: 'Les frondes sèchent au soleil, puis trempent dans l’eau pour gagner en souplesse. Certaines sont teintes de couleurs naturelles au safran ou à la grenade.'
      },
      {
        title: 'Le tissage',
        description: 'Selon des motifs ancestraux transmis de génération en génération, les artisanes entrelacent les frondes pour créer des pièces utiles et belles.'
      }
    ],
    productsEyebrow: 'Les objets',
    productsTitle: 'Ce que crée le Khous',
    products: [
      {
        name: 'Paniers',
        use: 'Rangement et décor'
      },
      {
        name: 'Nattes',
        use: 'Revêtements de sol'
      },
      {
        name: 'Éventails',
        use: 'Rafraîchir dans la chaleur'
      },
      {
        name: 'Couvercles alimentaires',
        use: 'Protéger les aliments'
      }
    ],
    brandEyebrow: 'Bint Saeed × Khous',
    brandTitle: 'Motifs du palmier dans nos créations',
    brandP1: 'Nous puisons dans les motifs géométriques du Khous pour nos broderies et détails de design, apportant l’esprit du palmier aux silhouettes contemporaines.',
    brandP2: 'Nous collaborons aussi avec des artisanes locales pour des accessoires faits main en authentique tissage Khous.'
  },
  it: {
    heroTag: 'Mestiere tradizionale',
    heroTitle: 'Khous',
    heroSubtitle: 'L’arte della tessitura delle foglie di palma',
    storyEyebrow: 'Albero della vita',
    storyTitle: 'Dono della palma',
    storyP1: 'Nella cultura emiratina la palma non è solo un albero — è l’albero della vita. Per secoli gli Emiratini ne hanno tratto tutto: datteri per nutrirsi, tronchi per costruire, foglie per l’artigianato.',
    storyP2: 'Il Khous, anche detto « Al Safeefah », è l’arte di tessere foglie di palma essiccate e trattate per creare cesti, stuoie, ventagli e altri oggetti quotidiani essenziali alla vita del deserto.',
    processEyebrow: 'Il processo',
    processTitle: 'Dalla foglia all’arte',
    steps: [
      {
        title: 'La raccolta',
        description: 'Le foglie fresche vengono scelte e tagliate con cura, privilegiando le foglie giovani e flessibili ideali per la tessitura.'
      },
      {
        title: 'La preparazione',
        description: 'Le foglie si asciugano al sole, poi si immergono in acqua per renderle pieghevoli. Alcune sono tinte con colori naturali di zafferano o melograno.'
      },
      {
        title: 'La tessitura',
        description: 'Con motivi antichi tramandati di generazione in generazione, le artigiane intrecciano le foglie per creare pezzi funzionali e belli.'
      }
    ],
    productsEyebrow: 'I prodotti',
    productsTitle: 'Ciò che crea il Khous',
    products: [
      {
        name: 'Cesti',
        use: 'Conservazione e decorazione'
      },
      {
        name: 'Stuoie',
        use: 'Rivestimenti per pavimenti'
      },
      {
        name: 'Ventagli',
        use: 'Rinfrescare nel caldo'
      },
      {
        name: 'Coprivivande',
        use: 'Proteggere il cibo'
      }
    ],
    brandEyebrow: 'Bint Saeed × Khous',
    brandTitle: 'Motivi della palma nei nostri disegni',
    brandP1: 'Attingiamo ai motivi geometrici del Khous per ricami e dettagli di design, portando lo spirito della palma nelle silhouette contemporanee.',
    brandP2: 'Collaboriamo anche con artigiane locali per accessori fatti a mano con autentica tessitura Khous.'
  },
  es: {
    heroTag: 'Oficio tradicional',
    heroTitle: 'Khous',
    heroSubtitle: 'El arte de tejer la hoja de palma',
    storyEyebrow: 'Árbol de la vida',
    storyTitle: 'Don de la palmera',
    storyP1: 'En la cultura emiratí, la palmera no es solo un árbol: es el árbol de la vida. Durante siglos, los emiratíes dependieron de ella en todo: dátiles para alimentarse, troncos para construir y hojas para la artesanía.',
    storyP2: 'El Khous, también llamado « Al Safeefah », es el arte de tejer hojas de palma secadas y tratadas para crear cestas, esteras, abanicos y otros objetos cotidianos esenciales para la vida en el desierto.',
    processEyebrow: 'El proceso',
    processTitle: 'De la hoja al arte',
    steps: [
      {
        title: 'La cosecha',
        description: 'Se seleccionan y cortan con cuidado las hojas frescas, eligiendo las jóvenes y flexibles ideales para tejer.'
      },
      {
        title: 'La preparación',
        description: 'Las hojas se secan al sol y luego se remojan en agua para hacerlas maleables. Algunas se tiñen con colores naturales de azafrán o granada.'
      },
      {
        title: 'El tejido',
        description: 'Con patrones ancestrales transmitidos de generación en generación, las artesanas entrelazan las hojas para crear piezas útiles y bellas.'
      }
    ],
    productsEyebrow: 'Los productos',
    productsTitle: 'Lo que crea el Khous',
    products: [
      {
        name: 'Cestas',
        use: 'Almacenaje y decoración'
      },
      {
        name: 'Esteras',
        use: 'Cubiertas de suelo'
      },
      {
        name: 'Abanicos',
        use: 'Refrescar en el calor'
      },
      {
        name: 'Cubiertas de comida',
        use: 'Proteger los alimentos'
      }
    ],
    brandEyebrow: 'Bint Saeed × Khous',
    brandTitle: 'Motivos de palma en nuestros diseños',
    brandP1: 'Nos inspiramos en los patrones geométricos del Khous para bordados y detalles de diseño, llevando el espíritu de la palma a las siluetas contemporáneas.',
    brandP2: 'También colaboramos con artesanas locales para accesorios hechos a mano con auténtico tejido Khous.'
  },
  ru: {
    heroTag: 'Традиционное ремесло',
    heroTitle: 'Khous',
    heroSubtitle: 'Искусство плетения пальмового листа',
    storyEyebrow: 'Древо жизни',
    storyTitle: 'Дар пальмы',
    storyP1: 'В эмиратской культуре пальма — не просто дерево, а древо жизни. Веками эмиратцы опирались на неё во всём: финики в пищу, стволы для строительства, листья для ремёсел.',
    storyP2: 'Khous, также известный как « Al Safeefah », — искусство плетения высушенных и обработанных пальмовых листьев: корзины, циновки, веера и другие предметы быта, необходимые в пустыне.',
    processEyebrow: 'Процесс',
    processTitle: 'От листа к искусству',
    steps: [
      {
        title: 'Сбор',
        description: 'Свежие пальмовые листья тщательно отбирают и срезают — молодые, гибкие, идеальные для плетения.'
      },
      {
        title: 'Подготовка',
        description: 'Листья сушат на солнце, затем замачивают в воде. Некоторые окрашивают натуральными красителями из шафрана или граната.'
      },
      {
        title: 'Плетение',
        description: 'По древним узорам, передаваемым поколениями, мастерицы сплетают листья в функциональные и прекрасные вещи.'
      }
    ],
    productsEyebrow: 'Изделия',
    productsTitle: 'Что создаёт Khous',
    products: [
      {
        name: 'Корзины',
        use: 'Хранение и декор'
      },
      {
        name: 'Циновки',
        use: 'Покрытия пола'
      },
      {
        name: 'Веера',
        use: 'Прохлада в жару'
      },
      {
        name: 'Покрывала для еды',
        use: 'Защита пищи'
      }
    ],
    brandEyebrow: 'Bint Saeed × Khous',
    brandTitle: 'Узоры пальмы в наших моделях',
    brandP1: 'Мы черпаем вдохновение в геометрических узорах Khous для вышивки и деталей дизайна, перенося дух пальмы в современные силуэты.',
    brandP2: 'Мы также сотрудничаем с местными мастерицами над аксессуарами ручной работы из подлинного плетения Khous.'
  },
  zh: {
    heroTag: '传统工艺',
    heroTitle: 'Khous',
    heroSubtitle: '棕榈叶编织艺术',
    storyEyebrow: '生命之树',
    storyTitle: '棕榈的馈赠',
    storyP1: '在阿联酋文化中，棕榈不只是一棵树——它是生命之树。数世纪以来，阿联酋人仰赖棕榈的一切：枣果为食、树干为材、叶片为手工艺。',
    storyP2: 'Khous，亦称「Al Safeefah」，是将干燥并处理过的棕榈叶编织成篮、席、扇及其他日常用品的艺术——沙漠生活的必需。',
    processEyebrow: '工序',
    processTitle: '从叶片到艺术',
    steps: [
      {
        title: '采收',
        description: '精心挑选并剪切新鲜棕榈叶，选用柔韧的嫩叶，最宜编织。'
      },
      {
        title: '准备',
        description: '叶片在阳光下晒干，再浸水使其柔韧。有些用藏红花或石榴的天然色料染色。'
      },
      {
        title: '编织',
        description: '以代代相传的古老纹样，工匠交织叶片，制成既实用又美丽的作品。'
      }
    ],
    productsEyebrow: '制品',
    productsTitle: 'Khous 所造',
    products: [
      {
        name: '篮筐',
        use: '收纳与装饰'
      },
      {
        name: '席垫',
        use: '地面铺设'
      },
      {
        name: '扇子',
        use: '炎热时纳凉'
      },
      {
        name: '食物罩',
        use: '保护食物'
      }
    ],
    brandEyebrow: 'Bint Saeed × Khous',
    brandTitle: '设计中的棕榈纹样',
    brandP1: '我们从 Khous 的几何纹样汲取灵感，用于刺绣与设计细节，将棕榈之魂带入当代轮廓。',
    brandP2: '我们也与当地工匠合作，以正统 Khous 编织制作手工配饰。'
  },
  de: {
    heroTag: 'Traditionelles Handwerk',
    heroTitle: 'Khous',
    heroSubtitle: 'Die Kunst des Palmblattflechtens',
    storyEyebrow: 'Baum des Lebens',
    storyTitle: 'Geschenk der Palme',
    storyP1: 'In der emiratischen Kultur ist die Palme nicht nur ein Baum — sie ist der Baum des Lebens. Jahrhunderte lang stützten sich Emiratis auf sie: Datteln als Nahrung, Stämme zum Bauen, Wedel für Handwerk.',
    storyP2: 'Khous, auch « Al Safeefah » genannt, ist die Kunst, getrocknete und behandelte Palmwedel zu flechten — zu Körben, Matten, Fächern und anderen Alltagsgegenständen, die für das Wüstenleben unerlässlich waren.',
    processEyebrow: 'Der Prozess',
    processTitle: 'Vom Wedel zur Kunst',
    steps: [
      {
        title: 'Ernte',
        description: 'Frische Palmwedel werden sorgfältig ausgewählt und geschnitten — junge, flexible Blätter, ideal zum Flechten.'
      },
      {
        title: 'Vorbereitung',
        description: 'Die Wedel trocknen in der Sonne und werden dann in Wasser eingeweicht. Einige werden mit natürlichen Farben aus Safran oder Granatapfel gefärbt.'
      },
      {
        title: 'Flechten',
        description: 'Mit uralten, über Generationen weitergegebenen Mustern verflechten Handwerkerinnen die Wedel zu funktionalen und schönen Stücken.'
      }
    ],
    productsEyebrow: 'Produkte',
    productsTitle: 'Was Khous schafft',
    products: [
      {
        name: 'Körbe',
        use: 'Aufbewahrung & Dekor'
      },
      {
        name: 'Matten',
        use: 'Bodenbeläge'
      },
      {
        name: 'Fächer',
        use: 'Kühlung in der Hitze'
      },
      {
        name: 'Speiseabdeckungen',
        use: 'Schutz von Speisen'
      }
    ],
    brandEyebrow: 'Bint Saeed × Khous',
    brandTitle: 'Palmmuster in unseren Entwürfen',
    brandP1: 'Wir schöpfen Inspiration aus den geometrischen Mustern des Khous für Stickerei und Designdetails und bringen den Geist der Palme in zeitgenössische Silhouetten.',
    brandP2: 'Wir arbeiten auch mit lokalen Handwerkerinnen an handgefertigten Accessoires aus authentischem Khous-Flechten.'
  },
  nl: {
    heroTag: 'Traditioneel ambacht',
    heroTitle: 'Khous',
    heroSubtitle: 'De kunst van palmbladweven',
    storyEyebrow: 'Levensboom',
    storyTitle: 'Geschenk van de palm',
    storyP1: 'In de Emiratische cultuur is de palm niet zomaar een boom — het is de levensboom. Eeuwenlang steunden Emiratis op de palm voor alles: dadels als voedsel, stammen om te bouwen, bladeren voor handwerk.',
    storyP2: 'Khous, ook « Al Safeefah » genoemd, is de kunst om gedroogde en behandelde palmbladeren te weven tot manden, matten, waaiers en andere alledaagse voorwerpen die essentieel waren voor het woestijnleven.',
    processEyebrow: 'Het proces',
    processTitle: 'Van blad tot kunst',
    steps: [
      {
        title: 'Oogsten',
        description: 'Verse palmbladeren worden zorgvuldig gekozen en gesneden — jonge, flexibele bladeren, ideaal om te weven.'
      },
      {
        title: 'Voorbereiding',
        description: 'De bladeren drogen in de zon en worden daarna in water geweekt. Sommige worden geverfd met natuurlijke kleuren van saffraan of granaatappel.'
      },
      {
        title: 'Weven',
        description: 'Met eeuwenoude patronen die generaties zijn doorgegeven, verweven ambachtsvrouwen de bladeren tot functionele en mooie stukken.'
      }
    ],
    productsEyebrow: 'Producten',
    productsTitle: 'Wat Khous maakt',
    products: [
      {
        name: 'Manden',
        use: 'Opslag & decoratie'
      },
      {
        name: 'Matten',
        use: 'Vloerbedekking'
      },
      {
        name: 'Waaiers',
        use: 'Koeling in de hitte'
      },
      {
        name: 'Voedselhoezen',
        use: 'Voedsel beschermen'
      }
    ],
    brandEyebrow: 'Bint Saeed × Khous',
    brandTitle: 'Palmpatronen in onze ontwerpen',
    brandP1: 'We putten inspiratie uit de geometrische patronen van Khous voor borduurwerk en design details, en brengen de geest van de palm in hedendaagse silhouetten.',
    brandP2: 'We werken ook samen met lokale ambachtsvrouwen aan handgemaakte accessoires van authentiek Khous-weven.'
  },
  pt: {
    heroTag: 'Ofício tradicional',
    heroTitle: 'Khous',
    heroSubtitle: 'A arte de tecer a folha de palmeira',
    storyEyebrow: 'Árvore da vida',
    storyTitle: 'Dádiva da palmeira',
    storyP1: 'Na cultura emiradense, a palmeira não é apenas uma árvore — é a árvore da vida. Durante séculos, os emiradenses dependeram dela em tudo: tâmaras para se alimentar, troncos para construir e folhas para o artesanato.',
    storyP2: 'O Khous, também chamado « Al Safeefah », é a arte de tecer folhas de palmeira secas e tratadas para criar cestos, esteiras, leques e outros objetos quotidianos essenciais à vida no deserto.',
    processEyebrow: 'O processo',
    processTitle: 'Da folha à arte',
    steps: [
      {
        title: 'A colheita',
        description: 'As folhas frescas são cuidadosamente selecionadas e cortadas, privilegiando as jovens e flexíveis, ideais para tecer.'
      },
      {
        title: 'A preparação',
        description: 'As folhas secam ao sol e depois são mergulhadas em água para as tornar maleáveis. Algumas são tingidas com cores naturais de açafrão ou romã.'
      },
      {
        title: 'O tecido',
        description: 'Com padrões ancestrais transmitidos de geração em geração, as artesãs entrelaçam as folhas para criar peças úteis e belas.'
      }
    ],
    productsEyebrow: 'Os produtos',
    productsTitle: 'O que o Khous cria',
    products: [
      {
        name: 'Cestos',
        use: 'Arrumação e decoração'
      },
      {
        name: 'Esteiras',
        use: 'Revestimentos de chão'
      },
      {
        name: 'Leques',
        use: 'Refrescar no calor'
      },
      {
        name: 'Coberturas de comida',
        use: 'Proteger os alimentos'
      }
    ],
    brandEyebrow: 'Bint Saeed × Khous',
    brandTitle: 'Motivos de palmeira nos nossos desenhos',
    brandP1: 'Inspiramo-nos nos padrões geométricos do Khous para bordados e detalhes de design, trazendo o espírito da palmeira às silhuetas contemporâneas.',
    brandP2: 'Colaboramos também com artesãs locais em acessórios feitos à mão com autêntico tecido Khous.'
  },
  id: {
    heroTag: 'Kerajinan tradisional',
    heroTitle: 'Khous',
    heroSubtitle: 'Seni menganyam daun palem',
    storyEyebrow: 'Pohon kehidupan',
    storyTitle: 'Karunia palem',
    storyP1: 'Dalam budaya Emirat, pohon palem bukan sekadar pohon — itu pohon kehidupan. Selama berabad-abad, masyarakat Emirat mengandalkan palem untuk segalanya: kurma untuk pangan, batang untuk bangunan, dan daun untuk kerajinan.',
    storyP2: 'Khous, juga dikenal sebagai « Al Safeefah », adalah seni menganyam daun palem yang dikeringkan dan diolah menjadi keranjang, tikar, kipas, dan barang sehari-hari yang penting bagi kehidupan gurun.',
    processEyebrow: 'Proses',
    processTitle: 'Dari daun menjadi seni',
    steps: [
      {
        title: 'Panen',
        description: 'Daun palem segar dipilih dan dipotong dengan teliti — daun muda yang lentur, ideal untuk dianyam.'
      },
      {
        title: 'Persiapan',
        description: 'Daun dikeringkan di matahari, lalu direndam agar lentur. Beberapa diwarnai dengan pewarna alami dari saffron atau delima.'
      },
      {
        title: 'Anyaman',
        description: 'Dengan pola kuno yang diwariskan lintas generasi, pengrajin menjalin daun menjadi karya yang berguna dan indah.'
      }
    ],
    productsEyebrow: 'Produk',
    productsTitle: 'Yang dibuat Khous',
    products: [
      {
        name: 'Keranjang',
        use: 'Penyimpanan & dekorasi'
      },
      {
        name: 'Tikar',
        use: 'Penutup lantai'
      },
      {
        name: 'Kipas',
        use: 'Pendingin di panas'
      },
      {
        name: 'Tudung makanan',
        use: 'Melindungi makanan'
      }
    ],
    brandEyebrow: 'Bint Saeed × Khous',
    brandTitle: 'Pola palem dalam desain kami',
    brandP1: 'Kami mengambil inspirasi dari pola geometris Khous untuk sulaman dan detail desain, membawa semangat palem ke siluet kontemporer.',
    brandP2: 'Kami juga berkolaborasi dengan pengrajin lokal untuk aksesoris buatan tangan dari anyaman Khous otentik.'
  },
  ms: {
    heroTag: 'Kraf tradisional',
    heroTitle: 'Khous',
    heroSubtitle: 'Seni menganyam daun palma',
    storyEyebrow: 'Pokok kehidupan',
    storyTitle: 'Hadiah palma',
    storyP1: 'Dalam budaya Emiriah, pokok palma bukan sekadar pokok — ia pokok kehidupan. Selama berabad-abad, orang Emiriah bergantung padanya untuk segala-galanya: kurma untuk makanan, batang untuk bangunan, dan daun untuk kraf.',
    storyP2: 'Khous, juga dikenali sebagai « Al Safeefah », ialah seni menganyam daun palma yang dikeringkan dan dirawat untuk mencipta bakul, tikar, kipas dan barangan harian yang penting bagi kehidupan gurun.',
    processEyebrow: 'Proses',
    processTitle: 'Dari daun kepada seni',
    steps: [
      {
        title: 'Tuai',
        description: 'Daun palma segar dipilih dan dipotong dengan teliti — daun muda yang lentur, ideal untuk dianyam.'
      },
      {
        title: 'Penyediaan',
        description: 'Daun dikeringkan di bawah matahari, kemudian direndam agar lentur. Sesetengah diwarnakan dengan warna semula jadi daripada saffron atau delima.'
      },
      {
        title: 'Anyaman',
        description: 'Dengan corak kuno yang diwarisi merentas generasi, pengrajin menjalin daun menjadi karya yang berguna dan indah.'
      }
    ],
    productsEyebrow: 'Produk',
    productsTitle: 'Apa yang Khous cipta',
    products: [
      {
        name: 'Bakul',
        use: 'Simpanan & hiasan'
      },
      {
        name: 'Tikar',
        use: 'Penutup lantai'
      },
      {
        name: 'Kipas',
        use: 'Menyejukkan dalam panas'
      },
      {
        name: 'Tudung makanan',
        use: 'Melindungi makanan'
      }
    ],
    brandEyebrow: 'Bint Saeed × Khous',
    brandTitle: 'Corak palma dalam reka bentuk kami',
    brandP1: 'Kami mengambil inspirasi daripada corak geometri Khous untuk sulaman dan butiran reka bentuk, membawa semangat palma ke siluet kontemporari.',
    brandP2: 'Kami juga bekerjasama dengan pengrajin tempatan untuk aksesori buatan tangan daripada anyaman Khous tulen.'
  },
}

export function getKhousPageCopy(locale: AppLocale | string): KhousPageCopy {
  const key = (locale in KHOUS ? locale : 'en') as AppLocale
  return { ...getHeritageSharedChrome(key), ...KHOUS[key] }
}
