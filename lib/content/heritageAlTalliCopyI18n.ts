import type { AppLocale } from '@/lib/i18n/routing'

export type HeritageCraftNamed = { title: string; description: string }
export type HeritageCraftProduct = { name: string; use: string }
export type HeritageCraftPattern = { name: string; meaning: string }
export type HeritageCraftColor = { name: string; hex: string; meaning: string }

export type HeritageSharedChrome = {
  heritage: string
  exploreMore: string
  exploreMoreLead: string
  shopCollection: string
  shop: string
  alTalli: string
  khous: string
  khousFull: string
  sadu: string
}

export type AlTalliPageCopy = HeritageSharedChrome & {
  heroTag: string
  heroTitle: string
  heroSubtitle: string
  storyEyebrow: string
  storyTitle: string
  storyP1: string
  storyP2: string
  craftEyebrow: string
  craftTitle: string
  techniques: HeritageCraftNamed[]
  unescoEyebrow: string
  unescoTitle: string
  unescoBody: string
  unescoBadge1: string
  unescoBadge2: string
  brandEyebrow: string
  brandTitle: string
  brandP1: string
  brandP2: string
  shopCta: string
}

const SHARED: Record<AppLocale, HeritageSharedChrome> = {
  en: {
    heritage: 'Heritage',
    exploreMore: 'Explore More of Our Heritage',
    exploreMoreLead: 'Learn about other traditional Emirati crafts',
    shopCollection: 'Shop the Collection',
    shop: 'Shop',
    alTalli: 'Al Talli',
    khous: 'Khous',
    khousFull: 'Khous Weaving',
    sadu: 'Sadu Weaving',
  },
  ar: {
    heritage: 'التراث',
    exploreMore: 'اكتشفي المزيد من تراثنا',
    exploreMoreLead: 'تعرفي على حرف إماراتية تقليدية أخرى',
    shopCollection: 'تسوقي المجموعة',
    shop: 'تسوقي',
    alTalli: 'التلي',
    khous: 'الخوص',
    khousFull: 'الخوص',
    sadu: 'السدو',
  },
  fr: {
    heritage: 'Héritage',
    exploreMore: 'Explorer davantage notre héritage',
    exploreMoreLead: 'Découvrir d’autres savoir-faire émiratis traditionnels',
    shopCollection: 'Découvrir la collection',
    shop: 'Acheter',
    alTalli: 'Al Talli',
    khous: 'Khous',
    khousFull: 'Khous',
    sadu: 'Sadu',
  },
  it: {
    heritage: 'Heritage',
    exploreMore: 'Esplora altro del nostro heritage',
    exploreMoreLead: 'Scopri altri mestieri tradizionali emiratini',
    shopCollection: 'Scopri la collezione',
    shop: 'Acquista',
    alTalli: 'Al Talli',
    khous: 'Khous',
    khousFull: 'Khous',
    sadu: 'Sadu',
  },
  es: {
    heritage: 'Heritage',
    exploreMore: 'Explora más de nuestro heritage',
    exploreMoreLead: 'Conoce otros oficios tradicionales emiratíes',
    shopCollection: 'Ver la colección',
    shop: 'Comprar',
    alTalli: 'Al Talli',
    khous: 'Khous',
    khousFull: 'Khous',
    sadu: 'Sadu',
  },
  ru: {
    heritage: 'Наследие',
    exploreMore: 'Ещё о нашем наследии',
    exploreMoreLead: 'Узнайте о других традиционных эмиратских ремёслах',
    shopCollection: 'Смотреть коллекцию',
    shop: 'Купить',
    alTalli: 'Al Talli',
    khous: 'Khous',
    khousFull: 'Khous',
    sadu: 'Sadu',
  },
  zh: {
    heritage: '传承',
    exploreMore: '探索更多传承',
    exploreMoreLead: '了解更多阿联酋传统工艺',
    shopCollection: '选购系列',
    shop: '选购',
    alTalli: 'Al Talli',
    khous: 'Khous',
    khousFull: 'Khous',
    sadu: 'Sadu',
  },
  de: {
    heritage: 'Heritage',
    exploreMore: 'Mehr von unserem Heritage entdecken',
    exploreMoreLead: 'Weitere traditionelle emiratische Handwerke kennenlernen',
    shopCollection: 'Kollektion entdecken',
    shop: 'Shoppen',
    alTalli: 'Al Talli',
    khous: 'Khous',
    khousFull: 'Khous',
    sadu: 'Sadu',
  },
  nl: {
    heritage: 'Heritage',
    exploreMore: 'Ontdek meer van ons heritage',
    exploreMoreLead: 'Leer andere traditionele Emiratische ambachten kennen',
    shopCollection: 'Bekijk de collectie',
    shop: 'Shop',
    alTalli: 'Al Talli',
    khous: 'Khous',
    khousFull: 'Khous',
    sadu: 'Sadu',
  },
  pt: {
    heritage: 'Heritage',
    exploreMore: 'Explorar mais do nosso heritage',
    exploreMoreLead: 'Conhecer outros ofícios tradicionais emiradenses',
    shopCollection: 'Ver a coleção',
    shop: 'Comprar',
    alTalli: 'Al Talli',
    khous: 'Khous',
    khousFull: 'Khous',
    sadu: 'Sadu',
  },
  id: {
    heritage: 'Warisan',
    exploreMore: 'Jelajahi lebih banyak warisan kami',
    exploreMoreLead: 'Pelajari kerajinan tradisional Emirat lainnya',
    shopCollection: 'Belanja koleksi',
    shop: 'Belanja',
    alTalli: 'Al Talli',
    khous: 'Khous',
    khousFull: 'Khous',
    sadu: 'Sadu',
  },
  ms: {
    heritage: 'Warisan',
    exploreMore: 'Terokai lebih banyak warisan kami',
    exploreMoreLead: 'Ketahui kraf tradisional Emiriah yang lain',
    shopCollection: 'Beli koleksi',
    shop: 'Beli',
    alTalli: 'Al Talli',
    khous: 'Khous',
    khousFull: 'Khous',
    sadu: 'Sadu',
  },
}

const AL_TALLI: Record<AppLocale, Omit<AlTalliPageCopy, keyof HeritageSharedChrome>> = {
  en: {
    heroTag: 'UNESCO Heritage',
    heroTitle: 'Al Talli',
    heroSubtitle: 'The Traditional Emirati Embroidery Art',
    storyEyebrow: 'The Story',
    storyTitle: 'Legacy of Grandmothers',
    storyP1: 'Al Talli is an ancient Emirati embroidery art dating back centuries. Emirati women would gather in majlis to weave silver and gold threads on a small cushion, transforming simple threads into timeless works of art.',
    storyP2: 'Al Talli is used to adorn the edges of traditional garments, from men\'s kandura to women\'s luxurious attire. Each pattern holds meaning, and each stitch tells a story from the desert.',
    craftEyebrow: 'The Craft',
    craftTitle: 'Al Talli Technique',
    techniques: [
      {
        title: 'The Cushion',
        description: 'Artisans use a small stuffed cushion called "kajooja" as their base, where bobbins of thread are arranged in intricate patterns.'
      },
      {
        title: 'The Threads',
        description: 'Silver and gold metallic threads are woven alongside cotton threads, creating patterns that shimmer in the light.'
      },
      {
        title: 'The Patterns',
        description: 'Geometric patterns like triangles, diamonds, and zigzags each carry symbolic meanings, from protection to prosperity.'
      }
    ],
    unescoEyebrow: 'Global Recognition',
    unescoTitle: 'UNESCO Intangible Cultural Heritage',
    unescoBody: 'In 2022, Al Talli was inscribed on UNESCO\'s Representative List of the Intangible Cultural Heritage of Humanity, recognizing its significance as a symbol of Emirati cultural identity and ancestral heritage worth preserving for future generations.',
    unescoBadge1: 'Inscribed 2022',
    unescoBadge2: 'United Arab Emirates',
    brandEyebrow: 'Bint Saeed × Al Talli',
    brandTitle: 'Heritage in Our Designs',
    brandP1: 'At Bint Saeed, we revive the art of Al Talli by incorporating its exquisite embroidery into our contemporary designs. We collaborate with skilled Emirati artisans to preserve the authenticity of the craft.',
    brandP2: 'You\'ll find Al Talli details on the edges of our abayas, the sleeves of our kaftans, and the details of our dresses - a touch of heritage in every piece.',
    shopCta: 'Shop Covent Garden Abaya'
  },
  ar: {
    heroTag: 'تراث اليونسكو',
    heroTitle: 'التلي',
    heroSubtitle: 'فن التطريز الإماراتي التقليدي',
    storyEyebrow: 'القصة',
    storyTitle: 'إرث الجدات',
    storyP1: 'التلي هو فن تطريز إماراتي عريق يعود إلى قرون من الزمن. كانت النساء الإماراتيات يجتمعن في المجالس لنسج خيوط الفضة والذهب على وسادة صغيرة، محولات الخيوط البسيطة إلى أعمال فنية خالدة.',
    storyP2: 'يُستخدم التلي لتزيين أطراف الثياب التقليدية، من الكندورة الرجالية إلى ملابس النساء الفاخرة. كل نمط يحمل معنى، وكل غرزة تروي قصة من قصص الصحراء.',
    craftEyebrow: 'الحرفة',
    craftTitle: 'تقنية التلي',
    techniques: [
      {
        title: 'الوسادة',
        description: 'تستخدم الحرفيات وسادة صغيرة محشوة تسمى "الكجوجة" كقاعدة، حيث تُرتب بكرات الخيوط في أنماط معقدة.'
      },
      {
        title: 'الخيوط',
        description: 'تُنسج الخيوط الفضية والذهبية المعدنية جنباً إلى جنب مع خيوط القطن، مما يخلق أنماطاً تتلألأ في الضوء.'
      },
      {
        title: 'الأنماط',
        description: 'الأنماط الهندسية كالمثلثات والمعينات والتعرجات تحمل معانٍ رمزية، من الحماية إلى الازدهار.'
      }
    ],
    unescoEyebrow: 'اعتراف عالمي',
    unescoTitle: 'تراث اليونسكو الثقافي غير المادي',
    unescoBody: 'في عام 2022، أُدرج التلي على قائمة اليونسكو للتراث الثقافي غير المادي، اعترافاً بأهميته كرمز للهوية الثقافية الإماراتية وإرث الأجداد الذي يستحق الحفاظ عليه للأجيال القادمة.',
    unescoBadge1: 'مُدرج 2022',
    unescoBadge2: 'الإمارات العربية المتحدة',
    brandEyebrow: 'بنت سعيد × التلي',
    brandTitle: 'التراث في تصاميمنا',
    brandP1: 'في بنت سعيد، نحيي فن التلي من خلال دمج تطريزاته الرائعة في تصاميمنا المعاصرة. نتعاون مع حرفيات إماراتيات ماهرات للحفاظ على أصالة الحرفة.',
    brandP2: 'تجدين تفاصيل التلي في أطراف عباءاتنا، وأكمام قفاطيننا، وتفاصيل فساتيننا - لمسة من التراث في كل قطعة.',
    shopCta: 'تسوقي عباية Covent Garden'
  },
  fr: {
    heroTag: 'Patrimoine UNESCO',
    heroTitle: 'Al Talli',
    heroSubtitle: 'L’art traditionnel de la broderie émiratie',
    storyEyebrow: 'L’histoire',
    storyTitle: 'L’héritage des grand-mères',
    storyP1: 'Al Talli est un art de broderie émirati ancestral, vieux de plusieurs siècles. Les femmes se réunissaient en majlis pour tisser des fils d’argent et d’or sur un petit coussin, transformant de simples fils en œuvres intemporelles.',
    storyP2: 'Al Talli orne les bords des vêtements traditionnels, de la kandura masculine aux tenues féminines d’apparat. Chaque motif porte un sens; chaque point raconte une histoire du désert.',
    craftEyebrow: 'Le savoir-faire',
    craftTitle: 'La technique Al Talli',
    techniques: [
      {
        title: 'Le coussin',
        description: 'Les artisanes utilisent un petit coussin rembourré appelé « kajooja » comme support, où les bobines de fil se disposent en motifs complexes.'
      },
      {
        title: 'Les fils',
        description: 'Des fils métalliques d’argent et d’or se tissent aux fils de coton, créant des motifs qui scintillent à la lumière.'
      },
      {
        title: 'Les motifs',
        description: 'Triangles, losanges et zigzags géométriques portent chacun une symbolique, de la protection à la prospérité.'
      }
    ],
    unescoEyebrow: 'Reconnaissance mondiale',
    unescoTitle: 'Patrimoine culturel immatériel de l’UNESCO',
    unescoBody: 'En 2022, Al Talli a été inscrit sur la Liste représentative du patrimoine culturel immatériel de l’humanité de l’UNESCO, reconnaissant son rôle de symbole de l’identité culturelle émiratie et d’héritage ancestral à préserver.',
    unescoBadge1: 'Inscrit 2022',
    unescoBadge2: 'Émirats arabes unis',
    brandEyebrow: 'Bint Saeed × Al Talli',
    brandTitle: 'L’héritage dans nos créations',
    brandP1: 'Chez Bint Saeed, nous faisons revivre l’art d’Al Talli en intégrant sa broderie raffinée à nos créations contemporaines.',
    brandP2: 'Vous retrouverez des détails Al Talli sur les bords de nos abayas, les manches de nos caftans, et en accents délicats à travers la collection.',
    shopCta: 'Acheter l’abaya Covent Garden'
  },
  it: {
    heroTag: 'Heritage UNESCO',
    heroTitle: 'Al Talli',
    heroSubtitle: 'L’arte tradizionale del ricamo emiratino',
    storyEyebrow: 'La storia',
    storyTitle: 'L’eredità delle nonne',
    storyP1: 'Al Talli è un’antica arte del ricamo emiratino che risale a secoli fa. Le donne si riunivano in majlis per tessere fili d’argento e d’oro su un piccolo cuscino, trasformando fili semplici in opere senza tempo.',
    storyP2: 'Al Talli adorna i bordi degli abiti tradizionali, dalla kandura maschile agli abiti femminili di prestigio. Ogni motivo ha un significato; ogni punto racconta una storia del deserto.',
    craftEyebrow: 'Il mestiere',
    craftTitle: 'La tecnica Al Talli',
    techniques: [
      {
        title: 'Il cuscino',
        description: 'Le artigiane usano un piccolo cuscino imbottito chiamato « kajooja » come base, dove le spole di filo si dispongono in motivi intricati.'
      },
      {
        title: 'I fili',
        description: 'Fili metallici d’argento e d’oro si intrecciano ai fili di cotone, creando motivi che luccicano alla luce.'
      },
      {
        title: 'I motivi',
        description: 'Triangoli, rombi e zigzag geometrici portano ciascuno significati simbolici, dalla protezione alla prosperità.'
      }
    ],
    unescoEyebrow: 'Riconoscimento globale',
    unescoTitle: 'Patrimonio culturale immateriale UNESCO',
    unescoBody: 'Nel 2022 Al Talli è stato iscritto nella Lista rappresentativa del patrimonio culturale immateriale dell’umanità dell’UNESCO, riconoscendone il valore come simbolo dell’identità culturale emiratina e heritage ancestrale da preservare.',
    unescoBadge1: 'Iscritto 2022',
    unescoBadge2: 'Emirati Arabi Uniti',
    brandEyebrow: 'Bint Saeed × Al Talli',
    brandTitle: 'L’heritage nei nostri disegni',
    brandP1: 'Da Bint Saeed facciamo rivivere l’arte di Al Talli integrando il suo ricamo raffinato nei nostri disegni contemporanei.',
    brandP2: 'Troverete dettagli Al Talli sui bordi delle nostre abaya, sulle maniche dei caftani e come accenti delicati in tutta la collezione.',
    shopCta: 'Acquista l’abaya Covent Garden'
  },
  es: {
    heroTag: 'Patrimonio UNESCO',
    heroTitle: 'Al Talli',
    heroSubtitle: 'El arte tradicional del bordado emiratí',
    storyEyebrow: 'La historia',
    storyTitle: 'El legado de las abuelas',
    storyP1: 'Al Talli es un antiguo arte de bordado emiratí con siglos de historia. Las mujeres se reunían en el majlis para tejer hilos de plata y oro sobre un pequeño cojín, transformando hilos sencillos en obras atemporales.',
    storyP2: 'Al Talli adorna los bordes de las prendas tradicionales, desde la kandura masculina hasta la indumentaria femenina de gala. Cada motivo guarda un sentido; cada puntada cuenta una historia del desierto.',
    craftEyebrow: 'El oficio',
    craftTitle: 'La técnica Al Talli',
    techniques: [
      {
        title: 'El cojín',
        description: 'Las artesanas usan un pequeño cojín relleno llamado « kajooja » como base, donde las bobinas de hilo se disponen en patrones intricados.'
      },
      {
        title: 'Los hilos',
        description: 'Hilos metálicos de plata y oro se tejen junto a hilos de algodón, creando motivos que brillan a la luz.'
      },
      {
        title: 'Los motivos',
        description: 'Triángulos, rombos y zigzag geométricos llevan cada uno significados simbólicos, de la protección a la prosperidad.'
      }
    ],
    unescoEyebrow: 'Reconocimiento mundial',
    unescoTitle: 'Patrimonio cultural inmaterial de la UNESCO',
    unescoBody: 'En 2022, Al Talli fue inscrito en la Lista representativa del patrimonio cultural inmaterial de la humanidad de la UNESCO, reconociendo su valor como símbolo de la identidad cultural emiratí y herencia ancestral a preservar.',
    unescoBadge1: 'Inscrito 2022',
    unescoBadge2: 'Emiratos Árabes Unidos',
    brandEyebrow: 'Bint Saeed × Al Talli',
    brandTitle: 'El heritage en nuestros diseños',
    brandP1: 'En Bint Saeed revivimos el arte de Al Talli integrando su exquisito bordado en nuestros diseños contemporáneos.',
    brandP2: 'Encontrará detalles Al Talli en los bordes de nuestras abayas, las mangas de nuestros caftanes y como acentos delicados en toda la colección.',
    shopCta: 'Comprar la abaya Covent Garden'
  },
  ru: {
    heroTag: 'Наследие ЮНЕСКО',
    heroTitle: 'Al Talli',
    heroSubtitle: 'Традиционное эмиратское искусство вышивки',
    storyEyebrow: 'История',
    storyTitle: 'Наследие бабушек',
    storyP1: 'Al Talli, древнее эмиратское искусство вышивки, уходящее корнями в века. Женщины собирались в маджлисе, чтобы ткать серебряные и золотые нити на маленькой подушке, превращая простые нити в вневременные произведения.',
    storyP2: 'Al Talli украшает края традиционной одежды, от мужской кандуры до роскошного женского наряда. Каждый узор несёт смысл; каждый стежок рассказывает историю пустыни.',
    craftEyebrow: 'Ремесло',
    craftTitle: 'Техника Al Talli',
    techniques: [
      {
        title: 'Подушка',
        description: 'Мастерицы используют маленькую набитую подушку «каджуджа» как основу, где шпули нитей выстраиваются в сложные узоры.'
      },
      {
        title: 'Нити',
        description: 'Серебряные и золотые металлические нити плетутся вместе с хлопковыми, создавая узоры, мерцающие на свету.'
      },
      {
        title: 'Узоры',
        description: 'Геометрические формы, треугольники, ромбы, зигзаги, несут символические значения: от защиты до процветания.'
      }
    ],
    unescoEyebrow: 'Мировое признание',
    unescoTitle: 'Нематериальное культурное наследие ЮНЕСКО',
    unescoBody: 'В 2022 году Al Talli был внесён в Репрезентативный список нематериального культурного наследия человечества ЮНЕСКО, как символ эмиратской культурной идентичности и наследие предков, достойное сохранения.',
    unescoBadge1: 'Внесён 2022',
    unescoBadge2: 'Объединённые Арабские Эмираты',
    brandEyebrow: 'Bint Saeed × Al Talli',
    brandTitle: 'Наследие в наших моделях',
    brandP1: 'В Bint Saeed мы возрождаем искусство Al Talli, вплетая его изысканную вышивку в современные силуэты.',
    brandP2: 'Детали Al Talli вы найдёте на краях наших абай, рукавах кафтанов и как тонкие акценты по всей коллекции.',
    shopCta: 'Купить абаю Covent Garden'
  },
  zh: {
    heroTag: '教科文组织遗产',
    heroTitle: 'Al Talli',
    heroSubtitle: '传统阿联酋刺绣艺术',
    storyEyebrow: '故事',
    storyTitle: '祖母的传承',
    storyP1: 'Al Talli 是一项可追溯数百年的古老阿联酋刺绣艺术。女性在 majlis 聚会，在小垫上编织金银线，将简单的线缕化为永恒之作。',
    storyP2: 'Al Talli 用于装饰传统服饰的边缘：从男士 kandura 到华美女装。每一纹样皆有深意；每一针都讲述沙漠的故事。',
    craftEyebrow: '工艺',
    craftTitle: 'Al Talli 技法',
    techniques: [
      {
        title: '垫子',
        description: '工匠以称为「kajooja」的小填充垫为底座，将线轴排布成精妙纹样。'
      },
      {
        title: '线缕',
        description: '金银金属线与棉线交织，形成在光中闪烁的纹样。'
      },
      {
        title: '纹样',
        description: '三角、菱形与锯齿等几何纹样各具象征：从守护到繁盛。'
      }
    ],
    unescoEyebrow: '全球认可',
    unescoTitle: '联合国教科文组织非物质文化遗产',
    unescoBody: '2022 年，Al Talli 被列入联合国教科文组织人类非物质文化遗产代表作名录，确认其作为阿联酋文化身份象征与值得为后世保存的先祖传承之价值。',
    unescoBadge1: '列入 2022',
    unescoBadge2: '阿拉伯联合酋长国',
    brandEyebrow: 'Bint Saeed × Al Talli',
    brandTitle: '设计中的传承',
    brandP1: '在 Bint Saeed，我们通过将精湛的 Al Talli 刺绣融入当代设计，使这一艺术重生。',
    brandP2: '您会在阿巴雅边缘、卡夫坦袖口以及系列各处的细腻点缀中，看见 Al Talli 的细节。',
    shopCta: '选购 Covent Garden 阿巴雅'
  },
  de: {
    heroTag: 'UNESCO-Erbe',
    heroTitle: 'Al Talli',
    heroSubtitle: 'Die traditionelle emiratische Stickkunst',
    storyEyebrow: 'Die Geschichte',
    storyTitle: 'Vermächtnis der Großmütter',
    storyP1: 'Al Talli ist eine jahrhundertealte emiratische Stickkunst. Frauen versammelten sich im Majlis, um Silber- und Goldfäden auf einem kleinen Kissen zu weben und schlichte Fäden in zeitlose Kunstwerke zu verwandeln.',
    storyP2: 'Al Talli schmückt die Ränder traditioneller Gewänder, von der männlichen Kandura bis zur luxuriösen Frauenkleidung. Jedes Muster trägt Sinn; jeder Stich erzählt eine Geschichte der Wüste.',
    craftEyebrow: 'Das Handwerk',
    craftTitle: 'Die Al-Talli-Technik',
    techniques: [
      {
        title: 'Das Kissen',
        description: 'Handwerkerinnen nutzen ein kleines gestopftes Kissen namens „Kajooja“ als Unterlage, auf der Garnspulen zu komplexen Mustern angeordnet werden.'
      },
      {
        title: 'Die Fäden',
        description: 'Silberne und goldene Metallfäden werden neben Baumwollfäden verwoben und erzeugen Muster, die im Licht schimmern.'
      },
      {
        title: 'Die Muster',
        description: 'Geometrische Formen wie Dreiecke, Rauten und Zickzack tragen jeweils symbolische Bedeutungen, von Schutz bis Wohlstand.'
      }
    ],
    unescoEyebrow: 'Weltweite Anerkennung',
    unescoTitle: 'UNESCO-Immaterielles Kulturerbe',
    unescoBody: '2022 wurde Al Talli in die Repräsentative Liste des immateriellen Kulturerbes der Menschheit der UNESCO aufgenommen, als Symbol emiratischer kultureller Identität und ancestrales Erbe, das für kommende Generationen bewahrt werden soll.',
    unescoBadge1: 'Eingetragen 2022',
    unescoBadge2: 'Vereinigte Arabische Emirate',
    brandEyebrow: 'Bint Saeed × Al Talli',
    brandTitle: 'Heritage in unseren Entwürfen',
    brandP1: 'Bei Bint Saeed lassen wir die Kunst von Al Talli wiederaufleben, indem wir ihre exquisite Stickerei in unsere zeitgenössischen Entwürfe integrieren.',
    brandP2: 'Sie finden Al-Talli-Details an den Rändern unserer Abayas, an den Ärmeln unserer Kaftane und als feine Akzente in der gesamten Kollektion.',
    shopCta: 'Covent-Garden-Abaya shoppen'
  },
  nl: {
    heroTag: 'UNESCO-erfgoed',
    heroTitle: 'Al Talli',
    heroSubtitle: 'De traditionele Emiratische borduurkunst',
    storyEyebrow: 'Het verhaal',
    storyTitle: 'Erfenis van grootmoeders',
    storyP1: 'Al Talli is een eeuwenoude Emiratische borduurkunst. Vrouwen verzamelden zich in de majlis om zilveren en gouden draden op een klein kussen te weven, en eenvoudige draden om te zetten in tijdloze kunstwerken.',
    storyP2: 'Al Talli siert de randen van traditionele kleding, van de mannenkandura tot luxueuze vrouwenkleding. Elk patroon draagt betekenis; elke steek vertelt een verhaal van de woestijn.',
    craftEyebrow: 'Het ambacht',
    craftTitle: 'De Al Talli-techniek',
    techniques: [
      {
        title: 'Het kussen',
        description: 'Ambachtelijke vrouwen gebruiken een klein opgevuld kussen, « kajooja », als basis, waarop klosjes garen in complexe patronen worden geplaatst.'
      },
      {
        title: 'De draden',
        description: 'Zilveren en gouden metalen draden worden naast katoenen draden geweven, met patronen die in het licht schitteren.'
      },
      {
        title: 'De patronen',
        description: 'Geometrische vormen zoals driehoeken, ruiten en zigzag dragen elk symbolische betekenissen, van bescherming tot voorspoed.'
      }
    ],
    unescoEyebrow: 'Wereldwijde erkenning',
    unescoTitle: 'UNESCO immaterieel cultureel erfgoed',
    unescoBody: 'In 2022 werd Al Talli opgenomen op de Representatieve lijst van het immaterieel cultureel erfgoed van de mensheid van UNESCO, als symbool van Emiratische culturele identiteit en voorouderlijk erfgoed dat bewaard moet blijven.',
    unescoBadge1: 'Ingeschreven 2022',
    unescoBadge2: 'Verenigde Arabische Emiraten',
    brandEyebrow: 'Bint Saeed × Al Talli',
    brandTitle: 'Heritage in onze ontwerpen',
    brandP1: 'Bij Bint Saeed laten we de kunst van Al Talli herleven door haar verfijnde borduurwerk in onze hedendaagse ontwerpen te brengen.',
    brandP2: 'U vindt Al Talli-details op de randen van onze abayas, de mouwen van onze kaftans en als delicate accenten doorheen de collectie.',
    shopCta: 'Shop Covent Garden-abaya'
  },
  pt: {
    heroTag: 'Património UNESCO',
    heroTitle: 'Al Talli',
    heroSubtitle: 'A arte tradicional do bordado emiradense',
    storyEyebrow: 'A história',
    storyTitle: 'O legado das avós',
    storyP1: 'Al Talli é uma antiga arte de bordado emiradense com séculos de história. As mulheres reuniam-se no majlis para tecer fios de prata e ouro num pequeno almofadão, transformando fios simples em obras atemporais.',
    storyP2: 'Al Talli adorna as orlas das vestes tradicionais, da kandura masculina ao traje feminino de gala. Cada motivo guarda um sentido; cada ponto conta uma história do deserto.',
    craftEyebrow: 'O ofício',
    craftTitle: 'A técnica Al Talli',
    techniques: [
      {
        title: 'O almofadão',
        description: 'As artesãs usam um pequeno almofadão recheado chamado « kajooja » como base, onde as bobinas de fio se dispõem em padrões intricados.'
      },
      {
        title: 'Os fios',
        description: 'Fios metálicos de prata e ouro tecem-se junto a fios de algodão, criando motivos que cintilam à luz.'
      },
      {
        title: 'Os motivos',
        description: 'Triângulos, losangos e ziguezagues geométricos carregam cada um significados simbólicos, da proteção à prosperidade.'
      }
    ],
    unescoEyebrow: 'Reconhecimento mundial',
    unescoTitle: 'Património cultural imaterial da UNESCO',
    unescoBody: 'Em 2022, Al Talli foi inscrito na Lista representativa do património cultural imaterial da humanidade da UNESCO, reconhecendo o seu valor como símbolo da identidade cultural emiradense e herança ancestral a preservar.',
    unescoBadge1: 'Inscrito 2022',
    unescoBadge2: 'Emirados Árabes Unidos',
    brandEyebrow: 'Bint Saeed × Al Talli',
    brandTitle: 'O heritage nos nossos desenhos',
    brandP1: 'Na Bint Saeed, fazemos renascer a arte de Al Talli ao incorporar o seu bordado requintado nos nossos desenhos contemporâneos.',
    brandP2: 'Encontrará detalhes Al Talli nas orlas das nossas abayas, nas mangas dos caftans e como acentos delicados em toda a coleção.',
    shopCta: 'Comprar a abaya Covent Garden'
  },
  id: {
    heroTag: 'Warisan UNESCO',
    heroTitle: 'Al Talli',
    heroSubtitle: 'Seni sulaman tradisional Emirat',
    storyEyebrow: 'Kisah',
    storyTitle: 'Warisan nenek',
    storyP1: 'Al Talli adalah seni sulaman Emirat kuno yang berusia berabad-abad. Perempuan berkumpul di majlis untuk menenun benang perak dan emas pada bantal kecil, mengubah benang sederhana menjadi karya abadi.',
    storyP2: 'Al Talli menghiasi tepi pakaian tradisional, dari kandura pria hingga busana wanita yang mewah. Setiap pola punya makna; setiap jahitan menceritakan kisah gurun.',
    craftEyebrow: 'Kerajinan',
    craftTitle: 'Teknik Al Talli',
    techniques: [
      {
        title: 'Bantal',
        description: 'Pengrajin memakai bantal kecil berisi yang disebut « kajooja » sebagai alas, tempat gulungan benang disusun dalam pola rumit.'
      },
      {
        title: 'Benang',
        description: 'Benang logam perak dan emas ditenun bersama benang katun, menciptakan pola yang berkilau di cahaya.'
      },
      {
        title: 'Pola',
        description: 'Pola geometris seperti segitiga, belah ketupat, dan zigzag masing-masing membawa makna simbolis, dari perlindungan hingga kemakmuran.'
      }
    ],
    unescoEyebrow: 'Pengakuan global',
    unescoTitle: 'Warisan Budaya Takbenda UNESCO',
    unescoBody: 'Pada 2022, Al Talli dicatat dalam Daftar Representatif Warisan Budaya Takbenda Kemanusiaan UNESCO, mengakui perannya sebagai simbol identitas budaya Emirat dan warisan leluhur yang layak dilestarikan.',
    unescoBadge1: 'Dicatat 2022',
    unescoBadge2: 'Uni Emirat Arab',
    brandEyebrow: 'Bint Saeed × Al Talli',
    brandTitle: 'Warisan dalam desain kami',
    brandP1: 'Di Bint Saeed, kami menghidupkan kembali seni Al Talli dengan memasukkan sulamannya yang halus ke dalam desain kontemporer kami.',
    brandP2: 'Anda akan menemukan detail Al Talli di tepi abaya kami, lengan kaftan, dan sebagai aksen lembut di seluruh koleksi.',
    shopCta: 'Belanja abaya Covent Garden'
  },
  ms: {
    heroTag: 'Warisan UNESCO',
    heroTitle: 'Al Talli',
    heroSubtitle: 'Seni sulaman tradisional Emiriah',
    storyEyebrow: 'Kisah',
    storyTitle: 'Warisan nenek',
    storyP1: 'Al Talli ialah seni sulaman Emiriah kuno yang berusia berabad-abad. Wanita berkumpul di majlis untuk menenun benang perak dan emas pada bantal kecil, mengubah benang mudah menjadi karya abadi.',
    storyP2: 'Al Talli menghiasi tepi pakaian tradisional, dari kandura lelaki hingga pakaian wanita yang mewah. Setiap corak punya makna; setiap jahitan menceritakan kisah gurun.',
    craftEyebrow: 'Kraf',
    craftTitle: 'Teknik Al Talli',
    techniques: [
      {
        title: 'Bantal',
        description: 'Pengrajin menggunakan bantal kecil berisi yang dipanggil « kajooja » sebagai asas, tempat gelendong benang disusun dalam corak rumit.'
      },
      {
        title: 'Benang',
        description: 'Benang logam perak dan emas ditenun bersama benang kapas, mencipta corak yang berkilau dalam cahaya.'
      },
      {
        title: 'Corak',
        description: 'Corak geometri seperti segitiga, berlian dan zigzag masing-masing membawa makna simbolik, dari perlindungan hingga kemakmuran.'
      }
    ],
    unescoEyebrow: 'Pengiktirafan global',
    unescoTitle: 'Warisan Budaya Tidak Ketara UNESCO',
    unescoBody: 'Pada 2022, Al Talli disenaraikan dalam Senarai Representatif Warisan Budaya Tidak Ketara Kemanusiaan UNESCO, mengiktiraf kepentingannya sebagai simbol identiti budaya Emiriah dan warisan nenek moyang yang perlu dipelihara.',
    unescoBadge1: 'Disenaraikan 2022',
    unescoBadge2: 'Emiriah Arab Bersatu',
    brandEyebrow: 'Bint Saeed × Al Talli',
    brandTitle: 'Warisan dalam reka bentuk kami',
    brandP1: 'Di Bint Saeed, kami menghidupkan semula seni Al Talli dengan memasukkan sulamannya yang halus ke dalam reka bentuk kontemporari kami.',
    brandP2: 'Anda akan menemui butiran Al Talli di tepi abaya kami, lengan kaftan, dan sebagai aksen lembut di seluruh koleksi.',
    shopCta: 'Beli abaya Covent Garden'
  },
}

export function getHeritageSharedChrome(locale: AppLocale | string): HeritageSharedChrome {
  const key = (locale in SHARED ? locale: 'en') as AppLocale
  return SHARED[key]
}

export function getAlTalliPageCopy(locale: AppLocale | string): AlTalliPageCopy {
  const key = (locale in AL_TALLI ? locale: 'en') as AppLocale
  return { ...SHARED[key], ...AL_TALLI[key] }
}
