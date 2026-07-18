import type { AppLocale } from '@/lib/i18n/routing'

export type CraftsmanshipMediaCopy = {
  heroBannerAlt: string
  videoProcessAria: string
  videoCuttingAria: string
  videoStitchingAria: string
  altCad: string
  altPattern: string
  altTextile: string
  altShears: string
  altGoldKnotFinishing: string
  altWovenLabel: string
  altGoldKnottedChain: string
  closingSectionAria: string
  closingBgAlt: string
  detailGoldEmbroideryAlt: string
  detailWovenLabelAlt: string
  detailAlTalliAlt: string
}

const BY_LOCALE: Record<AppLocale, CraftsmanshipMediaCopy> = {
  en: {
    heroBannerAlt: 'Craftsmanship editorial banner',
    videoProcessAria:
      'Video: Bint Saeed luxury abaya craftsmanship—Italian pattern development, prototyping in Abu Dhabi, and controlled atelier production in the UAE',
    videoCuttingAria:
      'Video: Bint Saeed—precision fabric cutting and atelier work for bespoke luxury abayas in Abu Dhabi, United Arab Emirates',
    videoStitchingAria:
      'Video: hand stitching and garment finishing by experienced craftspeople—tailored construction for Bint Saeed luxury abayas in Abu Dhabi',
    altCad:
      'CAD abaya pattern on screen during Phase I development — technical construction resolved before cutting',
    altPattern: 'Hands drafting an abaya pattern with pencil and ruler during Phase I development',
    altTextile: 'Hands guiding thread at the atelier machine during Phase III direction and finishing',
    altShears: 'Atelier shears and measuring tape cutting fabric during Phase III direction',
    altGoldKnotFinishing: 'Atelier finishing of a gold knot charm on a black beaded strand with gloved hands',
    altWovenLabel: 'Hand sewing a Bint Saeed Abu Dhabi woven label into a luxury garment',
    altGoldKnottedChain: 'Polished gold knotted chain links — atelier jewellery craftsmanship detail',
    closingSectionAria: 'Bint Saeed garment finishing details',
    closingBgAlt:
      'Explore the Bint Saeed collection — editorial fabric texture background for luxury abayas',
    detailGoldEmbroideryAlt: 'Luxury abaya gold embroidery and jewel cuff detail on black fabric',
    detailWovenLabelAlt: 'Bint Saeed woven brand label Abu Dhabi on black Hampstead dress interior',
    detailAlTalliAlt: 'Gold Al Talli stitch detail on black Hampstead dress fabric',
  },
  ar: {
    heroBannerAlt: 'لافتة تحريرية للحرفية',
    videoProcessAria:
      'فيديو: حرفية عباءات Bint Saeed الفاخرة — تطوير الباترون في إيطاليا، والنماذج الأولية في أبوظبي، وإنتاج محكوم في الإمارات',
    videoCuttingAria:
      'فيديو: قص قماش دقيق وعمل الأتيليه لعباءات فاخرة مخصّصة في أبوظبي، الإمارات العربية المتحدة',
    videoStitchingAria:
      'فيديو: خياطة يدوية وتشطيب الثياب على يد حرفيين ذوي خبرة — بناء مفصّل لعباءات Bint Saeed الفاخرة في أبوظبي',
    altCad: 'باترون عباءة على شاشة CAD خلال مرحلة التطوير الأولى — حسم البناء التقني قبل القص',
    altPattern: 'يدان ترسمان باترون عباءة بقلم ومسطرة خلال مرحلة التطوير الأولى',
    altTextile: 'يدان توجّهان الخيط على آلة الأتيليه خلال مرحلة التوجيه والتشطيب الثالثة',
    altShears: 'مقص أتيليه وشريط قياس يقصّان القماش خلال مرحلة التوجيه الثالثة',
    altGoldKnotFinishing: 'تشطيب عقدة ذهبية على ستراند خرز أسود بأيدٍ بقفازات في الأتيليه',
    altWovenLabel: 'خياطة يدوية لملصق Bint Saeed المنسوج — أبوظبي داخل ثوب فاخر',
    altGoldKnottedChain: 'حلقات سلسلة ذهبية معقودة مصقولة — تفصيل حرفية مجوهرات الأتيليه',
    closingSectionAria: 'تفاصيل إنهاء قطع Bint Saeed',
    closingBgAlt: 'استكشفي مجموعة Bint Saeed — خلفية تحريرية بقوام قماش للعباءات الفاخرة',
    detailGoldEmbroideryAlt: 'تطريز ذهبي وتفصيل كم مرصّع على قماش عباءة فاخرة سوداء',
    detailWovenLabelAlt: 'ملصق Bint Saeed المنسوج — أبوظبي داخل فستان Hampstead الأسود',
    detailAlTalliAlt: 'تفصيل تطريز Al Talli الذهبي على قماش فستان Hampstead الأسود',
  },
  fr: {
    heroBannerAlt: 'Bannière éditoriale du savoir-faire',
    videoProcessAria:
      'Vidéo : savoir-faire des abayas de luxe Bint Saeed — développement des patrons en Italie, prototypage à Abou Dhabi et production d’atelier contrôlée aux Émirats',
    videoCuttingAria:
      'Vidéo : coupe précise du tissu et travail d’atelier pour abayas de luxe sur mesure à Abou Dhabi, Émirats arabes unis',
    videoStitchingAria:
      'Vidéo : couture à la main et finition par des artisans expérimentés — construction sur mesure des abayas Bint Saeed à Abou Dhabi',
    altCad:
      'Patron d’abaya CAO à l’écran pendant la Phase I — construction technique résolue avant la coupe',
    altPattern: 'Mains traçant un patron d’abaya au crayon et à la règle pendant la Phase I',
    altTextile: 'Mains guidant le fil à la machine d’atelier pendant la Phase III',
    altShears: 'Ciseaux d’atelier et mètre coupant le tissu pendant la Phase III',
    altGoldKnotFinishing: 'Finition d’atelier d’un nœud doré sur un strand de perles noires, mains gantées',
    altWovenLabel: 'Couture à la main d’une étiquette tissée Bint Saeed Abu Dhabi dans un vêtement de luxe',
    altGoldKnottedChain: 'Maillons de chaîne dorée nouée — détail de joaillerie d’atelier',
    closingSectionAria: 'Détails de finition des pièces Bint Saeed',
    closingBgAlt:
      'Explorer la collection Bint Saeed — fond éditorial de texture textile pour abayas de luxe',
    detailGoldEmbroideryAlt: 'Broderie dorée et détail de manchette sertie sur abaya noire de luxe',
    detailWovenLabelAlt: 'Étiquette tissée Bint Saeed Abu Dhabi à l’intérieur de la robe Hampstead noire',
    detailAlTalliAlt: 'Détail de point Al Talli doré sur tissu de robe Hampstead noire',
  },
  it: {
    heroBannerAlt: 'Banner editoriale dell’artigianalità',
    videoProcessAria:
      'Video: artigianalità delle abaya di lusso Bint Saeed — sviluppo dei cartamodelli in Italia, prototipazione ad Abu Dhabi e produzione d’atelier controllata negli EAU',
    videoCuttingAria:
      'Video: taglio preciso del tessuto e lavoro d’atelier per abaya di lusso su misura ad Abu Dhabi, Emirati Arabi Uniti',
    videoStitchingAria:
      'Video: cucitura a mano e finitura da artigiani esperti — costruzione su misura delle abaya Bint Saeed ad Abu Dhabi',
    altCad:
      'Cartamodello abaya CAD sullo schermo nella Fase I — costruzione tecnica risolta prima del taglio',
    altPattern: 'Mani che tracciano un cartamodello abaya con matita e riga nella Fase I',
    altTextile: 'Mani che guidano il filo alla macchina d’atelier nella Fase III',
    altShears: 'Forbici d’atelier e metro che tagliano il tessuto nella Fase III',
    altGoldKnotFinishing: 'Finitura d’atelier di un nodo dorato su uno strand di perle nere, mani guantate',
    altWovenLabel: 'Cucitura a mano di un’etichetta tessuta Bint Saeed Abu Dhabi in un capo di lusso',
    altGoldKnottedChain: 'Maglie di catena dorata annodata — dettaglio di gioielleria d’atelier',
    closingSectionAria: 'Dettagli di finitura dei pezzi Bint Saeed',
    closingBgAlt:
      'Esplora la collezione Bint Saeed — sfondo editoriale di texture tessuto per abaya di lusso',
    detailGoldEmbroideryAlt: 'Ricamo dorato e dettaglio polsino gioiello su abaya nera di lusso',
    detailWovenLabelAlt: 'Etichetta tessuta Bint Saeed Abu Dhabi all’interno dell’abito Hampstead nero',
    detailAlTalliAlt: 'Dettaglio punto Al Talli dorato sul tessuto dell’abito Hampstead nero',
  },
  es: {
    heroBannerAlt: 'Banner editorial de artesanía',
    videoProcessAria:
      'Vídeo: artesanía de abayas de lujo Bint Saeed — desarrollo de patrones en Italia, prototipos en Abu Dhabi y producción de atelier controlada en los EAU',
    videoCuttingAria:
      'Vídeo: corte preciso de tela y trabajo de atelier para abayas de lujo a medida en Abu Dhabi, Emiratos Árabes Unidos',
    videoStitchingAria:
      'Vídeo: costura a mano y acabado por artesanos experimentados — construcción a medida de abayas Bint Saeed en Abu Dhabi',
    altCad:
      'Patrón de abaya CAD en pantalla durante la Fase I — construcción técnica resuelta antes del corte',
    altPattern: 'Manos trazando un patrón de abaya con lápiz y regla durante la Fase I',
    altTextile: 'Manos guiando el hilo en la máquina de atelier durante la Fase III',
    altShears: 'Tijeras de atelier y cinta métrica cortando tela durante la Fase III',
    altGoldKnotFinishing: 'Acabado de atelier de un nudo dorado en un strand de cuentas negras, manos con guantes',
    altWovenLabel: 'Costura a mano de una etiqueta tejida Bint Saeed Abu Dhabi en una prenda de lujo',
    altGoldKnottedChain: 'Eslabones de cadena dorada anudada — detalle de joyería de atelier',
    closingSectionAria: 'Detalles de acabado de las piezas Bint Saeed',
    closingBgAlt:
      'Explorar la colección Bint Saeed — fondo editorial de textura de tela para abayas de lujo',
    detailGoldEmbroideryAlt: 'Bordado dorado y detalle de puño enjoyado en abaya negra de lujo',
    detailWovenLabelAlt: 'Etiqueta tejida Bint Saeed Abu Dhabi en el interior del vestido Hampstead negro',
    detailAlTalliAlt: 'Detalle de puntada Al Talli dorada en tejido del vestido Hampstead negro',
  },
  de: {
    heroBannerAlt: 'Editoriales Banner der Handwerkskunst',
    videoProcessAria:
      'Video: Handwerkskunst der Bint Saeed Luxus-Abayas — Schnittentwicklung in Italien, Prototypen in Abu Dhabi und kontrollierte Atelierproduktion in den VAE',
    videoCuttingAria:
      'Video: präziser Stoffzuschnitt und Atelierarbeit für maßgefertigte Luxus-Abayas in Abu Dhabi, Vereinigte Arabische Emirate',
    videoStitchingAria:
      'Video: Handnaht und Finishing durch erfahrene Handwerker — maßgeschneiderte Konstruktion für Bint Saeed Luxus-Abayas in Abu Dhabi',
    altCad:
      'CAD-Abaya-Schnitt auf dem Bildschirm in Phase I — technische Konstruktion vor dem Zuschnitt gelöst',
    altPattern: 'Hände zeichnen einen Abaya-Schnitt mit Stift und Lineal in Phase I',
    altTextile: 'Hände führen den Faden an der Atelier-Maschine in Phase III',
    altShears: 'Atelierschere und Maßband schneiden Stoff in Phase III',
    altGoldKnotFinishing: 'Atelier-Finishing eines goldenen Knotens an einem schwarzen Perlen-Strand, behandschuhte Hände',
    altWovenLabel: 'Handnaht eines gewebten Bint Saeed Abu Dhabi Etiketts in ein Luxusgewand',
    altGoldKnottedChain: 'Polierte goldene Knotenketten-Glieder — Atelier-Schmuckdetail',
    closingSectionAria: 'Finishing-Details der Bint Saeed Stücke',
    closingBgAlt:
      'Die Bint Saeed Kollektion entdecken — editorischer Stofftextur-Hintergrund für Luxus-Abayas',
    detailGoldEmbroideryAlt: 'Goldstickerei und Juwel-Manschetten-Detail auf schwarzer Luxus-Abaya',
    detailWovenLabelAlt: 'Gewebtes Bint Saeed Abu Dhabi Markenetikett im Inneren des schwarzen Hampstead-Kleids',
    detailAlTalliAlt: 'Goldenes Al Talli Stich-Detail auf schwarzem Hampstead-Kleidstoff',
  },
  nl: {
    heroBannerAlt: 'Redactionele vakmanschap-banner',
    videoProcessAria:
      'Video: vakmanschap van Bint Saeed luxe abayas — patroonontwikkeling in Italië, prototypen in Abu Dhabi en gecontroleerde atelierproductie in de VAE',
    videoCuttingAria:
      'Video: precieze stofknip en atelierwerk voor op maat gemaakte luxe abayas in Abu Dhabi, Verenigde Arabische Emiraten',
    videoStitchingAria:
      'Video: handnaaiwerk en finishing door ervaren ambachtslieden — op maat gemaakte constructie voor Bint Saeed luxe abayas in Abu Dhabi',
    altCad:
      'CAD-abaya-patroon op scherm in Fase I — technische constructie opgelost vóór het knippen',
    altPattern: 'Handen tekenen een abaya-patroon met potlood en liniaal in Fase I',
    altTextile: 'Handen geleiden draad aan de ateliermachine in Fase III',
    altShears: 'Atelierschaar en meetlint knippen stof in Fase III',
    altGoldKnotFinishing: 'Atelierfinishing van een gouden knoop op een zwart kralenstrand, handschoenen',
    altWovenLabel: 'Handnaaien van een geweven Bint Saeed Abu Dhabi label in een luxe kledingstuk',
    altGoldKnottedChain: 'Gepolijste gouden geknoopte kettingschakels — atelier juweeldetail',
    closingSectionAria: 'Finishingdetails van Bint Saeed stukken',
    closingBgAlt:
      'Ontdek de Bint Saeed-collectie — redactionele stoftextuurachtergrond voor luxe abayas',
    detailGoldEmbroideryAlt: 'Gouden borduurwerk en juweel manchet detail op zwarte luxe abaya',
    detailWovenLabelAlt: 'Geweven Bint Saeed Abu Dhabi merklabel in zwarte Hampstead-jurk',
    detailAlTalliAlt: 'Gouden Al Talli steekdetail op zwarte Hampstead-jurkstof',
  },
  pt: {
    heroBannerAlt: 'Banner editorial do saber-fazer',
    videoProcessAria:
      'Vídeo: saber-fazer das abayas de luxo Bint Saeed — desenvolvimento de padrões em Itália, prototipagem em Abu Dhabi e produção de atelier controlada nos EAU',
    videoCuttingAria:
      'Vídeo: corte preciso de tecido e trabalho de atelier para abayas de luxo sob medida em Abu Dhabi, Emirados Árabes Unidos',
    videoStitchingAria:
      'Vídeo: costura à mão e acabamento por artesãos experientes — construção sob medida das abayas Bint Saeed em Abu Dhabi',
    altCad:
      'Padrão de abaya CAD no ecrã durante a Fase I — construção técnica resolvida antes do corte',
    altPattern: 'Mãos a traçar um padrão de abaya com lápis e régua durante a Fase I',
    altTextile: 'Mãos a guiar o fio na máquina de atelier durante a Fase III',
    altShears: 'Tesoura de atelier e fita métrica a cortar tecido durante a Fase III',
    altGoldKnotFinishing: 'Acabamento de atelier de um nó dourado num strand de contas pretas, mãos com luvas',
    altWovenLabel: 'Costura à mão de uma etiqueta tecida Bint Saeed Abu Dhabi numa peça de luxo',
    altGoldKnottedChain: 'Elos de corrente dourada com nós — detalhe de joalharia de atelier',
    closingSectionAria: 'Detalhes de acabamento das peças Bint Saeed',
    closingBgAlt:
      'Explorar a coleção Bint Saeed — fundo editorial de textura de tecido para abayas de luxo',
    detailGoldEmbroideryAlt: 'Bordado dourado e detalhe de punho com joia em abaya preta de luxo',
    detailWovenLabelAlt: 'Etiqueta tecida Bint Saeed Abu Dhabi no interior do vestido Hampstead preto',
    detailAlTalliAlt: 'Detalhe de ponto Al Talli dourado no tecido do vestido Hampstead preto',
  },
  ru: {
    heroBannerAlt: 'Редакционный баннер мастерства',
    videoProcessAria:
      'Видео: мастерство люксовых абай Bint Saeed — разработка лекал в Италии, прототипы в Abu Dhabi и контролируемое ателье-производство в ОАЭ',
    videoCuttingAria:
      'Видео: точный раскрой ткани и работа ателье для люксовых абай на заказ в Abu Dhabi, Объединённые Арабские Эмираты',
    videoStitchingAria:
      'Видео: ручная строчка и отделка опытными мастерами — индивидуальный крой абай Bint Saeed в Abu Dhabi',
    altCad:
      'Лекало абаи на экране CAD на этапе I — техническая конструкция решена до раскроя',
    altPattern: 'Руки чертят лекало абаи карандашом и линейкой на этапе I',
    altTextile: 'Руки ведут нить на машине ателье на этапе III',
    altShears: 'Ножницы ателье и сантиметр режут ткань на этапе III',
    altGoldKnotFinishing: 'Отделка золотого узла на чёрном бусинном стренде в перчатках в ателье',
    altWovenLabel: 'Ручная пришивка тканой этикетки Bint Saeed Abu Dhabi в люксовое изделие',
    altGoldKnottedChain: 'Полированные звенья золотой узловой цепи — деталь ювелирного мастерства ателье',
    closingSectionAria: 'Детали отделки изделий Bint Saeed',
    closingBgAlt:
      'Исследуйте коллекцию Bint Saeed — редакционный фон с текстурой ткани для люксовых абай',
    detailGoldEmbroideryAlt: 'Золотая вышивка и деталь манжеты с камнем на чёрной люксовой абае',
    detailWovenLabelAlt: 'Тканая этикетка Bint Saeed Abu Dhabi внутри чёрного платья Hampstead',
    detailAlTalliAlt: 'Деталь золотого стежка Al Talli на ткани чёрного платья Hampstead',
  },
  zh: {
    heroBannerAlt: '工艺编辑横幅',
    videoProcessAria:
      '视频：Bint Saeed 奢华阿巴雅工艺——意大利纸样开发、阿布扎比打样，以及阿联酋受控工坊制作',
    videoCuttingAria:
      '视频：精密裁布与工坊作业——阿布扎比定制奢华阿巴雅，阿拉伯联合酋长国',
    videoStitchingAria:
      '视频：资深工匠手工缝制与收尾——Bint Saeed 阿布扎比奢华阿巴雅的定制结构',
    altCad: '第一阶段开发中屏幕上的 CAD 阿巴雅纸样——裁剪前完成技术结构',
    altPattern: '第一阶段开发中双手用铅笔与直尺绘制阿巴雅纸样',
    altTextile: '第三阶段指导与收尾中双手在工坊机器上引导线迹',
    altShears: '第三阶段指导中工坊剪刀与卷尺裁剪面料',
    altGoldKnotFinishing: '工坊中戴手套双手完成黑色串珠挂链上的金色结饰收尾',
    altWovenLabel: '手工将 Bint Saeed Abu Dhabi 织唛缝入奢华衣裳',
    altGoldKnottedChain: '抛光金色结链环节——工坊珠宝工艺细节',
    closingSectionAria: 'Bint Saeed 衣裳收尾细节',
    closingBgAlt: '探索 Bint Saeed 系列——奢华阿巴雅编辑面料质感背景',
    detailGoldEmbroideryAlt: '黑色奢华阿巴雅上的金色刺绣与镶珠宝袖口细节',
    detailWovenLabelAlt: '黑色 Hampstead 连衣裙内的 Bint Saeed Abu Dhabi 织唛',
    detailAlTalliAlt: '黑色 Hampstead 连衣裙面料上的金色 Al Talli 针迹细节',
  },
  id: {
    heroBannerAlt: 'Banner editorial kerajinan',
    videoProcessAria:
      'Video: kerajinan abaya mewah Bint Saeed — pengembangan pola di Italia, prototipe di Abu Dhabi, dan produksi atelier terkendali di UEA',
    videoCuttingAria:
      'Video: pemotongan kain presisi dan kerja atelier untuk abaya mewah dibuat khusus di Abu Dhabi, Uni Emirat Arab',
    videoStitchingAria:
      'Video: jahitan tangan dan finishing oleh pengrajin berpengalaman — konstruksi dibuat khusus untuk abaya mewah Bint Saeed di Abu Dhabi',
    altCad:
      'Pola abaya CAD di layar selama Fase I — konstruksi teknis diselesaikan sebelum pemotongan',
    altPattern: 'Tangan menggambar pola abaya dengan pensil dan penggaris selama Fase I',
    altTextile: 'Tangan memandu benang di mesin atelier selama Fase III',
    altShears: 'Gunting atelier dan pita ukur memotong kain selama Fase III',
    altGoldKnotFinishing: 'Finishing atelier simpul emas pada strand manik hitam dengan tangan bersarung',
    altWovenLabel: 'Jahitan tangan label tenun Bint Saeed Abu Dhabi ke dalam garment mewah',
    altGoldKnottedChain: 'Rantai simpul emas yang dipoles — detail kerajinan perhiasan atelier',
    closingSectionAria: 'Detail finishing karya Bint Saeed',
    closingBgAlt:
      'Jelajahi koleksi Bint Saeed — latar tekstur kain editorial untuk abaya mewah',
    detailGoldEmbroideryAlt: 'Sulaman emas dan detail manset berlian pada abaya hitam mewah',
    detailWovenLabelAlt: 'Label merek tenun Bint Saeed Abu Dhabi di dalam gaun Hampstead hitam',
    detailAlTalliAlt: 'Detail jahitan Al Talli emas pada kain gaun Hampstead hitam',
  },
  ms: {
    heroBannerAlt: 'Sepanduk editorial kraftangan',
    videoProcessAria:
      'Video: kraftangan abaya mewah Bint Saeed — pembangunan corak di Itali, prototaip di Abu Dhabi, dan pengeluaran atelier terkawal di UAE',
    videoCuttingAria:
      'Video: potongan kain tepat dan kerja atelier untuk abaya mewah dibuat khas di Abu Dhabi, Emiriah Arab Bersatu',
    videoStitchingAria:
      'Video: jahitan tangan dan finishing oleh tukang mahir — pembinaan dibuat khas untuk abaya mewah Bint Saeed di Abu Dhabi',
    altCad:
      'Corak abaya CAD pada skrin semasa Fasa I — pembinaan teknikal diselesaikan sebelum potongan',
    altPattern: 'Tangan melukis corak abaya dengan pensel dan pembaris semasa Fasa I',
    altTextile: 'Tangan memandu benang di mesin atelier semasa Fasa III',
    altShears: 'Gunting atelier dan pita ukur memotong kain semasa Fasa III',
    altGoldKnotFinishing: 'Finishing atelier simpul emas pada strand manik hitam dengan tangan bersarung',
    altWovenLabel: 'Jahitan tangan label tenunan Bint Saeed Abu Dhabi ke dalam pakaian mewah',
    altGoldKnottedChain: 'Rantai simpul emas digilap — butiran kraftangan barang kemas atelier',
    closingSectionAria: 'Butiran finishing karya Bint Saeed',
    closingBgAlt:
      'Terokai koleksi Bint Saeed — latar tekstur kain editorial untuk abaya mewah',
    detailGoldEmbroideryAlt: 'Sulaman emas dan butiran manset permata pada abaya hitam mewah',
    detailWovenLabelAlt: 'Label jenama tenunan Bint Saeed Abu Dhabi di dalam gaun Hampstead hitam',
    detailAlTalliAlt: 'Butiran jahitan Al Talli emas pada kain gaun Hampstead hitam',
  },
}

export function getCraftsmanshipMediaCopy(locale: AppLocale | string): CraftsmanshipMediaCopy {
  const key = (locale in BY_LOCALE ? locale : 'en') as AppLocale
  return BY_LOCALE[key]
}
