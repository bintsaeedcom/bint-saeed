import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductSchemaFacts } from '@/lib/products/productSchemaMeta'

/** Full schema-field localization for secondary catalog PDPs — never drops EN keys. */
export type SecondarySchemaLocaleFields = Partial<
  Pick<
    ProductSchemaFacts,
    | 'productType'
    | 'productCategory'
    | 'fit'
    | 'closure'
    | 'pockets'
    | 'stylingDetail'
    | 'material'
    | 'suitableFor'
    | 'neckline'
    | 'trim'
    | 'lining'
    | 'styling'
  >
>

const GCC_WORLD_EN =
  'Abu Dhabi, Dubai, Sharjah, Riyadh, Jeddah, Doha, Kuwait City, Manama, Muscat, London, Paris, Milan, New York, Toronto, Singapore, Kuala Lumpur, Jakarta, Sydney, and destinations worldwide'

export const MARYLEBONE_SCHEMA_I18N: Record<AppLocale, SecondarySchemaLocaleFields> = {
  en: {},
  ar: {
    productType:
      'عباية A-line أنيقة بخيوط عقيق طبيعية قابلة للإزالة على كل كُم، وتفاصيل Knotted Line الذهبية، وخيوط Bint Saeed قابلة للتبديل — من أبوظبي',
    productCategory:
      'عباية، عباية A-Line، عباية مصمّم، عباية فاخرة، مجوهرات العباءة، عباية Signature Strands، عباية أحجار طبيعية، عباية معاصرة، أزياء محتشمة، أزياء محتشمة فاخرة، عباية خزانة الخليج، عباية مناسبات دولية',
    fit: 'عباية A-line أنيقة تُرتدى مفتوحة أو مغلقة بانسياب كريب ناعم.',
    closure: 'إغلاق اختياري بزر كبس',
    pockets: 'جيوب جانبية مخفية عند خطّ الخياطة',
    stylingDetail:
      'عباية A-line أنيقة بأكمام واسعة لخيوط Bint Saeed القابلة للتبديل، وخيطي عقيق قابلين للإزالة مع خرز هيماتيت مطلي ذهباً، وتشطيب Knotted Line المميّز.',
    material:
      'العباءة: 80% بوليستر، 20% فيسكوز؛ الخيوط: أحجار عقيق طبيعية أصلية مع فواصل هيماتيت مطلية ذهباً',
    suitableFor: `عشّاق الموضة، محرّرو الموضة، القيّمون، جمهور التراث الثقافي، الدبلوماسيون، استقبالات السفارات، افتتاحات المعارض، السفر الفاخر، إطلالات المدينة، حفلات الزفاف، العشاءات الرسمية، والأزياء المحتشمة الدولية في ${GCC_WORLD_EN}.`,
  },
  fr: {
    productType:
      'Abaya A-line gracieuse avec fils Onyx naturels amovibles sur chaque manchette, détails Knotted Line dorés et fils Bint Saeed interchangeables — Abu Dhabi',
    productCategory:
      'Abaya, Abaya A-Line, Abaya de créateur, Abaya de luxe, Bijoux abaya, Abaya Signature Strands, Abaya pierres naturelles, Abaya contemporaine, Mode modeste, Mode modeste premium, Abaya garde-robe du Golfe, Abaya occasions internationales',
    fit: 'Abaya A-line gracieuse conçue pour être portée ouverte ou fermée avec un tombé crêpe souple.',
    closure: 'Fermeture optionnelle par bouton-pression',
    pockets: 'Poches latérales dissimulées dans la couture',
    stylingDetail:
      'Abaya A-line gracieuse avec manchettes larges pour fils Bint Saeed interchangeables, deux fils Onyx amovibles avec perles d’hématite plaquées or, et finition signature Knotted Line.',
    material:
      'Abaya : 80 % polyester, 20 % viscose ; Fils : gemmes Onyx naturelles authentiques avec entretoises d’hématite plaquées or',
    suitableFor: `Passionnés de mode, rédacteurs mode, commissaires, publics du patrimoine culturel, diplomates, réceptions d’ambassade, vernissages, voyages de luxe, dressing urbain, mariages, dîners formels et mode modeste internationale à ${GCC_WORLD_EN}.`,
  },
  it: {
    productType:
      'Abaya A-line graziosa con fili Onyx naturali removibili su ogni polsino, dettagli dorati Knotted Line e fili Bint Saeed intercambiabili — Abu Dhabi',
    productCategory:
      'Abaya, Abaya A-Line, Abaya designer, Abaya di lusso, Gioielli abaya, Abaya Signature Strands, Abaya pietre naturali, Abaya contemporanea, Moda modesta, Moda modesta premium, Abaya guardaroba del Golfo, Abaya occasioni internazionali',
    fit: 'Abaya A-line graziosa pensata per essere indossata aperta o chiusa con morbido drappeggio in crêpe.',
    closure: 'Chiusura opzionale a bottone automatico',
    pockets: 'Tasche laterali nascoste nella cucitura',
    stylingDetail:
      'Abaya A-line graziosa con polsini ampi per fili Bint Saeed intercambiabili, due fili Onyx removibili con perle di ematite placcate oro e finitura signature Knotted Line.',
    material:
      'Abaya: 80% poliestere, 20% viscosa; Fili: gemme Onyx naturali autentiche con distanziatori in ematite placcata oro',
    suitableFor: `Appassionati di moda, editor di moda, curatori, pubblici del patrimonio culturale, diplomatici, ricevimenti di ambasciata, aperture di gallerie, viaggi di lusso, city dressing, matrimoni, cene formali e moda modesta internazionale a ${GCC_WORLD_EN}.`,
  },
  es: {
    productType:
      'Abaya A-line graciosa con hilos de Ónice natural removibles en cada puño, detalles dorados Knotted Line e hilos Bint Saeed intercambiables — Abu Dabi',
    productCategory:
      'Abaya, Abaya A-Line, Abaya de diseñador, Abaya de lujo, Joyería abaya, Abaya Signature Strands, Abaya piedra natural, Abaya contemporánea, Moda modesta, Moda modesta premium, Abaya guardarropa del Golfo, Abaya ocasiones internacionales',
    fit: 'Abaya A-line graciosa diseñada para llevarse abierta o cerrada con caída suave de crepé.',
    closure: 'Cierre opcional de botón a presión',
    pockets: 'Bolsillos laterales ocultos en la costura',
    stylingDetail:
      'Abaya A-line graciosa con puños anchos para hilos Bint Saeed intercambiables, dos hilos de Ónice removibles con cuentas de hematita bañadas en oro y acabado signature Knotted Line.',
    material:
      'Abaya: 80% poliéster, 20% viscosa; Hilos: gemas de Ónice natural auténticas con separadores de hematita bañada en oro',
    suitableFor: `Entusiastas de la moda, editores de moda, comisarios, públicos del patrimonio cultural, diplomáticos, recepciones de embajada, inauguraciones de galerías, viajes de lujo, city dressing, bodas, cenas formales y moda modesta internacional en ${GCC_WORLD_EN}.`,
  },
  ru: {
    productType:
      'Изящная абайя A-line со съёмными нитями из натурального оникса на каждом манжете, золотистыми деталями Knotted Line и сменными нитями Bint Saeed — Абу-Даби',
    productCategory:
      'Абайя, Абайя A-Line, Дизайнерская абайя, Люксовая абайя, Украшения для абайи, Абайя Signature Strands, Абайя с натуральным камнем, Современная абайя, Скромная мода, Премиальная скромная мода, Абайя для гардероба Персидского залива, Абайя для международных мероприятий',
    fit: 'Изящная абайя A-line, которую можно носить открытой или закрытой с мягким креповым драпированием.',
    closure: 'Опциональная застёжка на кнопки',
    pockets: 'Скрытые боковые карманы в шве',
    stylingDetail:
      'Изящная абайя A-line с широкими манжетами для сменных нитей Bint Saeed, двумя съёмными нитями из оникса с позолоченными бусинами гематита и фирменной отделкой Knotted Line.',
    material:
      'Абайя: 80% полиэстер, 20% вискоза; Нити: подлинный натуральный оникс с позолоченными разделителями из гематита',
    suitableFor: `Любители моды, модные редакторы, кураторы, аудитории культурного наследия, дипломаты, приёмы в посольствах, открытия галерей, люксовые путешествия, городской гардероб, свадьбы, официальные ужины и международная скромная мода в ${GCC_WORLD_EN}.`,
  },
  zh: {
    productType:
      '优雅 A-line 长袍，每侧袖口配可拆卸天然玛瑙链饰、金色 Knotted Line 细节与可更换 Bint Saeed 链饰——阿布扎比制造',
    productCategory:
      '长袍, A-Line长袍, 设计师长袍, 奢华长袍, 长袍珠宝, Signature Strands长袍, 天然石长袍, 当代长袍, 端庄时尚, 高端端庄时尚, 海湾衣橱长袍, 国际场合长袍',
    fit: '优雅 A-line 长袍，可开可合，搭配柔软绉纱垂感。',
    closure: '可选按扣闭合',
    pockets: '侧缝隐藏口袋',
    stylingDetail:
      '优雅 A-line 长袍，宽袖口可更换 Bint Saeed 链饰，两条可拆卸玛瑙链饰配镀金赤铁矿珠，以及标志性 Knotted Line 收尾。',
    material: '长袍：80%聚酯纤维，20%粘胶；链饰：天然玛瑙宝石与镀金赤铁矿隔珠',
    suitableFor: `时尚爱好者、时尚编辑、策展人、文化遗产受众、外交官、使馆接待、画廊开幕、奢华旅行、城市着装、婚礼、正式晚宴，以及${GCC_WORLD_EN}的国际端庄时尚。`,
  },
  de: {
    productType:
      'Anmutige A-line-Abaya mit abnehmbaren echten natürlichen Onyx-Strängen an jedem Manschettenabschluss, goldfarbenen Knotted-Line-Details und austauschbaren Bint-Saeed-Strängen — Abu Dhabi',
    productCategory:
      'Abaya, A-Line-Abaya, Designer-Abaya, Luxus-Abaya, Abaya-Schmuck, Signature-Strands-Abaya, Naturstein-Abaya, zeitgenössische Abaya, bescheidene Mode, Premium-bescheidene Mode, Golf-Garderobe-Abaya, internationale Anlass-Abaya',
    fit: 'Anmutige A-line-Abaya zum offenen oder geschlossenen Tragen mit weichem Crêpe-Fall.',
    closure: 'Optionale Druckknopfverschluss',
    pockets: 'Versteckte Seitentaschen in der Naht',
    stylingDetail:
      'Anmutige A-line-Abaya mit weiten Manschetten für austauschbare Bint-Saeed-Stränge, zwei abnehmbaren Onyx-Strängen mit goldplattierten Hämatit-Perlen und signature Knotted-Line-Finish.',
    material:
      'Abaya: 80 % Polyester, 20 % Viskose; Stränge: echte natürliche Onyx-Edelsteine mit goldplattierten Hämatit-Distanzperlen',
    suitableFor: `Modebegeisterte, Mode-Redakteure, Kuratoren, Kultur-Erbe-Publikum, Diplomaten, Botschaftsempfänge, Galerieeröffnungen, Luxusreisen, City Dressing, Hochzeiten, formelle Abendessen und internationale bescheidene Mode in ${GCC_WORLD_EN}.`,
  },
  nl: {
    productType:
      'Gracevolle A-line abaya met verwijderbare echte natuurlijke Onyx-strengen op elke manchet, goudkleurige Knotted Line-details en verwisselbare Bint Saeed-strengen — Abu Dhabi',
    productCategory:
      'Abaya, A-Line abaya, Designer abaya, Luxe abaya, Abaya sieraden, Signature Strands abaya, Natuursteen abaya, Eigentijdse abaya, Bescheiden mode, Premium bescheiden mode, Golf-garderobe abaya, Internationale gelegenheidsabaya',
    fit: 'Gracevolle A-line abaya om open of gesloten te dragen met zachte crêpe drape.',
    closure: 'Optionele drukknopsluiting',
    pockets: 'Verborgen zijzakken in de naad',
    stylingDetail:
      'Gracevolle A-line abaya met brede manchetten voor verwisselbare Bint Saeed-strengen, twee verwijderbare Onyx-strengen met verguld hematietkralen en signature Knotted Line-afwerking.',
    material:
      'Abaya: 80% polyester, 20% viscose; Strengen: echte natuurlijke Onyx-edelstenen met verguld hematiet-afstandskralen',
    suitableFor: `Mode-enthousiastelingen, mode-redacteuren, curatoren, cultureel erfgoedpubliek, diplomaten, ambassade-ontvangsten, galerieopeningen, luxe reizen, city dressing, bruiloften, formele diners en internationale bescheiden mode in ${GCC_WORLD_EN}.`,
  },
  pt: {
    productType:
      'Abaya A-line graciosa com fios de Ónix natural removíveis em cada punho, detalhes dourados Knotted Line e fios Bint Saeed intercambiáveis — Abu Dhabi',
    productCategory:
      'Abaya, Abaya A-Line, Abaya de designer, Abaya de luxo, Joias abaya, Abaya Signature Strands, Abaya pedra natural, Abaya contemporânea, Moda modesta, Moda modesta premium, Abaya guarda-roupa do Golfo, Abaya ocasiões internacionais',
    fit: 'Abaya A-line graciosa concebida para ser usada aberta ou fechada com caimento suave em crepe.',
    closure: 'Fecho opcional de botão de pressão',
    pockets: 'Bolsos laterais ocultos na costura',
    stylingDetail:
      'Abaya A-line graciosa com punhos largos para fios Bint Saeed intercambiáveis, dois fios de Ónix removíveis com contas de hematite banhadas a ouro e acabamento signature Knotted Line.',
    material:
      'Abaya: 80% poliéster, 20% viscose; Fios: gemas de Ónix natural genuínas com espaçadores de hematite banhados a ouro',
    suitableFor: `Entusiastas de moda, editores de moda, curadores, públicos do património cultural, diplomatas, receções de embaixada, inaugurações de galerias, viagens de luxo, city dressing, casamentos, jantares formais e moda modesta internacional em ${GCC_WORLD_EN}.`,
  },
  id: {
    productType:
      'Abaya A-line anggun dengan strand Onyx alami asli yang dapat dilepas di setiap manset, detail Knotted Line berwarna emas, dan strand Bint Saeed yang dapat ditukar — Abu Dhabi',
    productCategory:
      'Abaya, Abaya A-Line, Abaya desainer, Abaya mewah, Perhiasan abaya, Abaya Signature Strands, Abaya batu alami, Abaya kontemporer, Fashion modest, Fashion modest premium, Abaya lemari Teluk, Abaya acara internasional',
    fit: 'Abaya A-line anggun dirancang untuk dikenakan terbuka atau tertutup dengan draperi crepe lembut.',
    closure: 'Penutup snap opsional',
    pockets: 'Saku samping tersembunyi di jahitan',
    stylingDetail:
      'Abaya A-line anggun dengan manset lebar untuk strand Bint Saeed yang dapat ditukar, dua strand Onyx yang dapat dilepas dengan manik hematite berlapis emas, dan finishing signature Knotted Line.',
    material:
      'Abaya: 80% poliester, 20% viskosa; Strand: batu Onyx alami asli dengan spacer hematite berlapis emas',
    suitableFor: `Penggemar fashion, editor fashion, kurator, audiens warisan budaya, diplomat, resepsi kedutaan, pembukaan galeri, perjalanan mewah, city dressing, pernikahan, makan malam formal, dan fashion modest internasional di ${GCC_WORLD_EN}.`,
  },
  ms: {
    productType:
      'Abaya A-line anggun dengan strand Onyx semula jadi tulen yang boleh ditanggalkan pada setiap manset, butiran Knotted Line berwarna emas, dan strand Bint Saeed yang boleh ditukar — Abu Dhabi',
    productCategory:
      'Abaya, Abaya A-Line, Abaya pereka, Abaya mewah, Barang kemas abaya, Abaya Signature Strands, Abaya batu semula jadi, Abaya kontemporari, Fesyen modest, Fesyen modest premium, Abaya almari Teluk, Abaya majlis antarabangsa',
    fit: 'Abaya A-line anggun direka untuk dipakai terbuka atau tertutup dengan draperi crepe lembut.',
    closure: 'Penutup snap pilihan',
    pockets: 'Poket sisi tersembunyi pada jahitan',
    stylingDetail:
      'Abaya A-line anggun dengan manset lebar untuk strand Bint Saeed yang boleh ditukar, dua strand Onyx yang boleh ditanggalkan dengan manik hematite bersalut emas, dan kemasan signature Knotted Line.',
    material:
      'Abaya: 80% poliester, 20% viscose; Strand: batu Onyx semula jadi tulen dengan spacer hematite bersalut emas',
    suitableFor: `Peminat fesyen, editor fesyen, kurator, audiens warisan budaya, diplomat, resepsi kedutaan, pembukaan galeri, perjalanan mewah, city dressing, perkahwinan, makan malam formal, dan fesyen modest antarabangsa di ${GCC_WORLD_EN}.`,
  },
}

export const PARK_LANE_SCHEMA_I18N: Record<AppLocale, SecondarySchemaLocaleFields> = {
  en: {},
  ar: {
    productType:
      'عباية مصمّم معاصرة بقصّة A-line أنيقة، ووشاح كتف مدمج، وأزرار كتف Knotted Line الذهبية، وأزرار كُم Monogram الذهبية القابلة للإزالة من Bint Saeed — من أبوظبي',
    productCategory:
      'عباية، عباية A-Line، عباية مصمّم، عباية فاخرة، عباية معاصرة، عباية المدينة، عباية تنفيذية، عباية دبلوماسية، أزياء محتشمة، أزياء محتشمة فاخرة، عباية خزانة الخليج، عباية مناسبات دولية',
    fit: 'قصّة A-line مريحة تُرتدى مفتوحة أو مغلقة بانسياب سلس.',
    neckline: 'وشاح كتف مدمج ينساب من الكتف الأيسر',
    closure: 'إغلاق اختياري بزر كبس',
    pockets: 'جيوب جانبية مخفية عند خطّ الخياطة',
    stylingDetail:
      'عباية A-line أنيقة بوشاح كتف مدمج، وأزرار كتف Knotted Line الذهبية، وأكمام واسعة بأزرار كُم Monogram الذهبية القابلة للإزالة، وجيوب جانبية مخفية.',
    material: 'الخارج: 75% بوليستر، 25% فيسكوز',
    suitableFor: `اجتماعات العمل، استقبالات السفارات، الفعاليات الدبلوماسية، الوفود الرسمية، اجتماعات القيادة، الانخراط الثقافي، العشاءات الرسمية، حفلات الزفاف، حركة المدينة، العمل، السفر، الإطلالة اليومية، خزائن الخليج، والأزياء المحتشمة الدولية في ${GCC_WORLD_EN}.`,
  },
  fr: {
    productType:
      'Abaya de créateur contemporaine à silhouette A-line gracieuse, écharpe d’épaule intégrée, boutons d’épaule Knotted Line dorés et boutons de manchette Monogram dorés amovibles Bint Saeed — Abu Dhabi',
    productCategory:
      'Abaya, Abaya A-Line, Abaya de créateur, Abaya de luxe, Abaya contemporaine, Abaya urbaine, Abaya exécutive, Abaya diplomatique, Mode modeste, Mode modeste premium, Abaya garde-robe du Golfe, Abaya occasions internationales',
    fit: 'Silhouette A-line décontractée conçue pour être portée ouverte ou fermée avec un tombé fluide.',
    neckline: 'Écharpe d’épaule intégrée descendant de l’épaule gauche',
    closure: 'Fermeture optionnelle par bouton-pression',
    pockets: 'Poches latérales dissimulées dans la couture',
    stylingDetail:
      'Abaya A-line gracieuse avec écharpe d’épaule intégrée, boutons d’épaule Knotted Line dorés, manchettes larges avec boutons de manchette Monogram dorés amovibles Bint Saeed, et poches latérales dissimulées.',
    material: 'Extérieur : 75 % polyester, 25 % viscose',
    suitableFor: `Réunions d’affaires, réceptions d’ambassade, événements diplomatiques, délégations officielles, réunions de leadership, engagements culturels, dîners formels, mariages, mobilité urbaine, travail, voyage, dressing quotidien, garde-robes du Golfe et mode modeste internationale à ${GCC_WORLD_EN}.`,
  },
  it: {
    productType:
      'Abaya designer contemporanea con silhouette A-line graziosa, sciarpa a spalla integrata, bottoni spalla Knotted Line dorati e gemelli Monogram dorati removibili Bint Saeed — Abu Dhabi',
    productCategory:
      'Abaya, Abaya A-Line, Abaya designer, Abaya di lusso, Abaya contemporanea, Abaya city, Abaya executive, Abaya diplomatica, Moda modesta, Moda modesta premium, Abaya guardaroba del Golfo, Abaya occasioni internazionali',
    fit: 'Silhouette A-line rilassata pensata per essere indossata aperta o chiusa con drappeggio fluido.',
    neckline: 'Sciarpa a spalla integrata che scende dalla spalla sinistra',
    closure: 'Chiusura opzionale a bottone automatico',
    pockets: 'Tasche laterali nascoste nella cucitura',
    stylingDetail:
      'Abaya A-line graziosa con sciarpa a spalla integrata, bottoni spalla Knotted Line dorati, polsini ampi con gemelli Monogram dorati removibili Bint Saeed e tasche laterali nascoste.',
    material: 'Esterno: 75% poliestere, 25% viscosa',
    suitableFor: `Riunioni di lavoro, ricevimenti di ambasciata, eventi diplomatici, delegazioni ufficiali, meeting di leadership, impegni culturali, cene formali, matrimoni, movimento in città, lavoro, viaggi, dressing quotidiano, guardaroba del Golfo e moda modesta internazionale a ${GCC_WORLD_EN}.`,
  },
  es: {
    productType:
      'Abaya de diseñador contemporánea con silueta A-line graciosa, pañuelo de hombro integrado, botones de hombro Knotted Line dorados y gemelos Monogram dorados removibles Bint Saeed — Abu Dabi',
    productCategory:
      'Abaya, Abaya A-Line, Abaya de diseñador, Abaya de lujo, Abaya contemporánea, Abaya city, Abaya ejecutiva, Abaya diplomática, Moda modesta, Moda modesta premium, Abaya guardarropa del Golfo, Abaya ocasiones internacionales',
    fit: 'Silueta A-line relajada diseñada para llevarse abierta o cerrada con caída fluida.',
    neckline: 'Pañuelo de hombro integrado que cae desde el hombro izquierdo',
    closure: 'Cierre opcional de botón a presión',
    pockets: 'Bolsillos laterales ocultos en la costura',
    stylingDetail:
      'Abaya A-line graciosa con pañuelo de hombro integrado, botones de hombro Knotted Line dorados, puños anchos con gemelos Monogram dorados removibles Bint Saeed y bolsillos laterales ocultos.',
    material: 'Exterior: 75% poliéster, 25% viscosa',
    suitableFor: `Reuniones de negocios, recepciones de embajada, eventos diplomáticos, delegaciones oficiales, reuniones de liderazgo, compromisos culturales, cenas formales, bodas, movimiento urbano, trabajo, viajes, vestir cotidiano, guardarropas del Golfo y moda modesta internacional en ${GCC_WORLD_EN}.`,
  },
  ru: {
    productType:
      'Современная дизайнерская абайя с изящным силуэтом A-line, встроенным плечевым шарфом, золотистыми плечевыми пуговицами Knotted Line и съёмными золотистыми запонами Monogram Bint Saeed — Абу-Даби',
    productCategory:
      'Абайя, Абайя A-Line, Дизайнерская абайя, Люксовая абайя, Современная абайя, Городская абайя, Деловая абайя, Дипломатическая абайя, Скромная мода, Премиальная скромная мода, Абайя для гардероба Персидского залива, Абайя для международных мероприятий',
    fit: 'Свободный силуэт A-line для ношения открытой или закрытой с текучим драпированием.',
    neckline: 'Встроенный плечевой шарф, спадающий с левого плеча',
    closure: 'Опциональная застёжка на кнопки',
    pockets: 'Скрытые боковые карманы в шве',
    stylingDetail:
      'Изящная абайя A-line со встроенным плечевым шарфом, золотистыми плечевыми пуговицами Knotted Line, широкими манжетами со съёмными золотистыми запонами Monogram Bint Saeed и скрытыми боковыми карманами.',
    material: 'Верх: 75% полиэстер, 25% вискоза',
    suitableFor: `Деловые встречи, приёмы в посольствах, дипломатические мероприятия, официальные делегации, лидерские встречи, культурные события, официальные ужины, свадьбы, городское движение, работа, путешествия, повседневный гардероб, гардеробы Персидского залива и международная скромная мода в ${GCC_WORLD_EN}.`,
  },
  zh: {
    productType:
      '当代设计师长袍，优雅 A-line 廓形、一体肩巾、金色 Knotted Line 肩扣与可拆卸 Bint Saeed 金色 Monogram 袖扣——阿布扎比制造',
    productCategory:
      '长袍, A-Line长袍, 设计师长袍, 奢华长袍, 当代长袍, 城市长袍, 商务长袍, 外交长袍, 端庄时尚, 高端端庄时尚, 海湾衣橱长袍, 国际场合长袍',
    fit: '宽松 A-line 廓形，可开可合，垂感流畅。',
    neckline: '一体肩巾自左肩垂落',
    closure: '可选按扣闭合',
    pockets: '侧缝隐藏口袋',
    stylingDetail:
      '优雅 A-line 长袍，一体肩巾、金色 Knotted Line 肩扣、宽袖口配可拆卸 Bint Saeed 金色 Monogram 袖扣，以及隐藏侧缝口袋。',
    material: '外层：75%聚酯纤维，25%粘胶',
    suitableFor: `商务会议、使馆接待、外交活动、官方代表团、领导会议、文化活动、正式晚宴、婚礼、城市出行、工作、旅行、日常着装、海湾衣橱，以及${GCC_WORLD_EN}的国际端庄时尚。`,
  },
  de: {
    productType:
      'Zeitgenössische Designer-Abaya mit anmutiger A-line-Silhouette, integriertem Schultertuch, goldfarbenen Knotted-Line-Schulterknöpfen und abnehmbaren goldfarbenen Monogram-Manschettenknöpfen von Bint Saeed — Abu Dhabi',
    productCategory:
      'Abaya, A-Line-Abaya, Designer-Abaya, Luxus-Abaya, zeitgenössische Abaya, City-Abaya, Executive-Abaya, diplomatische Abaya, bescheidene Mode, Premium-bescheidene Mode, Golf-Garderobe-Abaya, internationale Anlass-Abaya',
    fit: 'Entspannte A-line-Silhouette zum offenen oder geschlossenen Tragen mit fließendem Fall.',
    neckline: 'Integriertes Schultertuch, das von der linken Schulter fließt',
    closure: 'Optionale Druckknopfverschluss',
    pockets: 'Versteckte Seitentaschen in der Naht',
    stylingDetail:
      'Anmutige A-line-Abaya mit integriertem Schultertuch, goldfarbenen Knotted-Line-Schulterknöpfen, weiten Manschetten mit abnehmbaren goldfarbenen Monogram-Manschettenknöpfen von Bint Saeed und versteckten Seitentaschen.',
    material: 'Außen: 75 % Polyester, 25 % Viskose',
    suitableFor: `Geschäftstreffen, Botschaftsempfänge, diplomatische Events, offizielle Delegationen, Leadership-Meetings, kulturelle Engagements, formelle Abendessen, Hochzeiten, Stadtbewegung, Arbeit, Reisen, Alltagsdressing, Golf-Garderoben und internationale bescheidene Mode in ${GCC_WORLD_EN}.`,
  },
  nl: {
    productType:
      'Eigentijdse designer abaya met gracevolle A-line silhouet, geïntegreerde schoudersjaal, goudkleurige Knotted Line-schouderknopen en verwijderbare goudkleurige Monogram-manchetknopen van Bint Saeed — Abu Dhabi',
    productCategory:
      'Abaya, A-Line abaya, Designer abaya, Luxe abaya, Eigentijdse abaya, City abaya, Executive abaya, Diplomatieke abaya, Bescheiden mode, Premium bescheiden mode, Golf-garderobe abaya, Internationale gelegenheidsabaya',
    fit: 'Relaxed A-line silhouet om open of gesloten te dragen met vloeiende drape.',
    neckline: 'Geïntegreerde schoudersjaal die vanaf de linkerschouder valt',
    closure: 'Optionele drukknopsluiting',
    pockets: 'Verborgen zijzakken in de naad',
    stylingDetail:
      'Gracevolle A-line abaya met geïntegreerde schoudersjaal, goudkleurige Knotted Line-schouderknopen, brede manchetten met verwijderbare goudkleurige Monogram-manchetknopen van Bint Saeed en verborgen zijzakken.',
    material: 'Buiten: 75% polyester, 25% viscose',
    suitableFor: `Zakelijke meetings, ambassade-ontvangsten, diplomatieke events, officiële delegaties, leadership meetings, culturele engagementen, formele diners, bruiloften, stadsbeweging, werk, reizen, dagelijks dressing, Golf-garderobes en internationale bescheiden mode in ${GCC_WORLD_EN}.`,
  },
  pt: {
    productType:
      'Abaya de designer contemporânea com silhueta A-line graciosa, echarpe de ombro integrada, botões de ombro Knotted Line dourados e gemelos Monogram dourados removíveis Bint Saeed — Abu Dhabi',
    productCategory:
      'Abaya, Abaya A-Line, Abaya de designer, Abaya de luxo, Abaya contemporânea, Abaya city, Abaya executiva, Abaya diplomática, Moda modesta, Moda modesta premium, Abaya guarda-roupa do Golfo, Abaya ocasiões internacionais',
    fit: 'Silhueta A-line relaxada concebida para ser usada aberta ou fechada com caimento fluido.',
    neckline: 'Echarpe de ombro integrada a fluir do ombro esquerdo',
    closure: 'Fecho opcional de botão de pressão',
    pockets: 'Bolsos laterais ocultos na costura',
    stylingDetail:
      'Abaya A-line graciosa com echarpe de ombro integrada, botões de ombro Knotted Line dourados, punhos largos com gemelos Monogram dourados removíveis Bint Saeed e bolsos laterais ocultos.',
    material: 'Exterior: 75% poliéster, 25% viscose',
    suitableFor: `Reuniões de negócios, receções de embaixada, eventos diplomáticos, delegações oficiais, reuniões de liderança, engajamentos culturais, jantares formais, casamentos, movimento urbano, trabalho, viagens, vestir quotidiano, guarda-roupas do Golfo e moda modesta internacional em ${GCC_WORLD_EN}.`,
  },
  id: {
    productType:
      'Abaya desainer kontemporer dengan siluet A-line anggun, syal bahu terintegrasi, kancing bahu Knotted Line berwarna emas, dan cufflink Monogram emas Bint Saeed yang dapat dilepas — Abu Dhabi',
    productCategory:
      'Abaya, Abaya A-Line, Abaya desainer, Abaya mewah, Abaya kontemporer, Abaya kota, Abaya eksekutif, Abaya diplomatik, Fashion modest, Fashion modest premium, Abaya lemari Teluk, Abaya acara internasional',
    fit: 'Siluet A-line relaxed untuk dikenakan terbuka atau tertutup dengan draperi fluida.',
    neckline: 'Syal bahu terintegrasi yang mengalir dari bahu kiri',
    closure: 'Penutup snap opsional',
    pockets: 'Saku samping tersembunyi di jahitan',
    stylingDetail:
      'Abaya A-line anggun dengan syal bahu terintegrasi, kancing bahu Knotted Line berwarna emas, manset lebar dengan cufflink Monogram emas Bint Saeed yang dapat dilepas, dan saku samping tersembunyi.',
    material: 'Luar: 75% poliester, 25% viskosa',
    suitableFor: `Rapat bisnis, resepsi kedutaan, acara diplomatik, delegasi resmi, pertemuan kepemimpinan, keterlibatan budaya, makan malam formal, pernikahan, mobilitas kota, kerja, perjalanan, berpakaian sehari-hari, lemari Teluk, dan fashion modest internasional di ${GCC_WORLD_EN}.`,
  },
  ms: {
    productType:
      'Abaya pereka kontemporari dengan siluet A-line anggun, selendang bahu bersepadu, butang bahu Knotted Line berwarna emas, dan cufflink Monogram emas Bint Saeed yang boleh ditanggalkan — Abu Dhabi',
    productCategory:
      'Abaya, Abaya A-Line, Abaya pereka, Abaya mewah, Abaya kontemporari, Abaya bandar, Abaya eksekutif, Abaya diplomatik, Fesyen modest, Fesyen modest premium, Abaya almari Teluk, Abaya majlis antarabangsa',
    fit: 'Siluet A-line santai untuk dipakai terbuka atau tertutup dengan draperi lancar.',
    neckline: 'Selendang bahu bersepadu yang mengalir dari bahu kiri',
    closure: 'Penutup snap pilihan',
    pockets: 'Poket sisi tersembunyi pada jahitan',
    stylingDetail:
      'Abaya A-line anggun dengan selendang bahu bersepadu, butang bahu Knotted Line berwarna emas, manset lebar dengan cufflink Monogram emas Bint Saeed yang boleh ditanggalkan, dan poket sisi tersembunyi.',
    material: 'Luar: 75% poliester, 25% viscose',
    suitableFor: `Mesyuarat perniagaan, resepsi kedutaan, acara diplomatik, delegasi rasmi, mesyuarat kepimpinan, penglibatan budaya, makan malam formal, perkahwinan, pergerakan bandar, kerja, perjalanan, pemakaian harian, almari Teluk, dan fesyen modest antarabangsa di ${GCC_WORLD_EN}.`,
  },
}

export const HAMPSTEAD_SCHEMA_I18N: Record<AppLocale, SecondarySchemaLocaleFields> = {
  en: {},
  ar: {
    productType:
      'فستان ماكسي مفصّل بياقة منسدلة أنيقة — مبطّن بالكامل مع حافة خصر Al Talli المميّزة، صُنع في أبوظبي للخزائن العالمية',
    productCategory:
      'فستان، فستان مصمّم، فستان فاخر، فستان مسائي، فستان ماكسي، فستان للطبقات، فستان التلي، فستان تراثي، فستان إماراتي، أزياء محتشمة، أزياء محتشمة فاخرة، أزياء نسائية معاصرة',
    fit: 'قصّة مفصّلة مع ذيل يتّسع بنعومة.',
    trim: 'حافة خصر منسوجة Al Talli المميّزة من Bint Saeed — تراث ثقافي غير مادي معترف به من اليونسكو.',
    lining: 'مبطّن بالكامل (70% بوليستر، 30% فيسكوز)',
    styling:
      'صُمّم ليُرتدى وحده أو تحت العباءة — يتناسق مع عباية Covent Garden وMarylebone وKensington وBelgravia.',
    stylingDetail:
      'فستان ماكسي مفصّل بياقة منسدلة، وجيوب جانبية مخفية، وذيل يتّسع بنعومة، وحافة خصر Al Talli المميّزة — صُنع في أبوظبي.',
    material: 'الخارج: 80% بوليستر، 20% فيسكوز؛ البطانة: 70% بوليستر، 30% فيسكوز',
    suitableFor: `الإطلالات المسائية، إطلالات المدينة، حفلات الزفاف، العشاءات الرسمية، الفعاليات الثقافية، الطبقات تحت العباءات، خزائن الخليج، وأزياء المناسبات الدولية في ${GCC_WORLD_EN}.`,
  },
  fr: {
    productType:
      'Robe maxi structurée à encolure drapée élégante — entièrement doublée avec garniture de taille signature Al Talli, créée à Abu Dhabi pour les garde-robes mondiales',
    productCategory:
      'Robe, Robe de créateur, Robe de luxe, Robe de soirée, Robe maxi, Robe de superposition, Robe Al Talli, Robe patrimoine, Robe émiratie, Mode modeste, Mode modeste premium, Prêt-à-porter féminin contemporain',
    fit: 'Silhouette structurée avec ourlet légèrement évasé.',
    trim: 'Garniture de taille tissée signature Al Talli Bint Saeed — patrimoine culturel immatériel reconnu par l’UNESCO.',
    lining: 'Entièrement doublée (70 % polyester, 30 % viscose)',
    styling:
      'Conçue pour être portée seule ou sous une abaya — s’associe aux abayas Covent Garden, Marylebone, Kensington et Belgravia.',
    stylingDetail:
      'Robe maxi structurée à encolure drapée, poches latérales dissimulées, ourlet légèrement évasé et garniture de taille signature Al Talli — créée à Abu Dhabi.',
    material: 'Extérieur : 80 % polyester, 20 % viscose ; Doublure : 70 % polyester, 30 % viscose',
    suitableFor: `Soirées, dressing urbain, mariages, dîners formels, événements culturels, superposition sous abayas, garde-robes du Golfe et tenues d’occasion internationales à ${GCC_WORLD_EN}.`,
  },
  it: {
    productType:
      'Maxi dress sartoriale con scollo drappeggiato elegante — completamente foderato con trim in vita signature Al Talli, creato ad Abu Dhabi per guardaroba globali',
    productCategory:
      'Abito, Abito designer, Abito di lusso, Abito da sera, Maxi dress, Abito da sovrapposizione, Abito Al Talli, Abito heritage, Abito emiratino, Moda modesta, Moda modesta premium, Womenswear contemporaneo',
    fit: 'Silhouette sartoriale con orlo leggermente svasato.',
    trim: 'Trim in vita intrecciato signature Al Talli Bint Saeed — patrimonio culturale immateriale riconosciuto dall’UNESCO.',
    lining: 'Completamente foderato (70% poliestere, 30% viscosa)',
    styling:
      'Pensato per essere indossato da solo o sotto un’abaya — si abbina alle abaya Covent Garden, Marylebone, Kensington e Belgravia.',
    stylingDetail:
      'Maxi dress sartoriale con scollo drappeggiato, tasche laterali nascoste, orlo leggermente svasato e trim in vita signature Al Talli — creato ad Abu Dhabi.',
    material: 'Esterno: 80% poliestere, 20% viscosa; Fodera: 70% poliestere, 30% viscosa',
    suitableFor: `Serate, city dressing, matrimoni, cene formali, eventi culturali, layering sotto abaya, guardaroba del Golfo e occasionwear internazionale a ${GCC_WORLD_EN}.`,
  },
  es: {
    productType:
      'Vestido maxi sastre con escote drapeado elegante — completamente forrado con ribete de cintura signature Al Talli, creado en Abu Dabi para armarios globales',
    productCategory:
      'Vestido, Vestido de diseñador, Vestido de lujo, Vestido de noche, Vestido maxi, Vestido de capas, Vestido Al Talli, Vestido patrimonio, Vestido emiratí, Moda modesta, Moda modesta premium, Womenswear contemporáneo',
    fit: 'Silueta sastre con bajo ligeramente acampanado.',
    trim: 'Ribete de cintura tejido signature Al Talli Bint Saeed — patrimonio cultural inmaterial reconocido por la UNESCO.',
    lining: 'Completamente forrado (70% poliéster, 30% viscosa)',
    styling:
      'Diseñado para llevarse solo o bajo una abaya — combina con las abayas Covent Garden, Marylebone, Kensington y Belgravia.',
    stylingDetail:
      'Vestido maxi sastre con escote drapeado, bolsillos laterales ocultos, bajo ligeramente acampanado y ribete de cintura signature Al Talli — creado en Abu Dabi.',
    material: 'Exterior: 80% poliéster, 20% viscosa; Forro: 70% poliéster, 30% viscosa',
    suitableFor: `Vestimenta de noche, city dressing, bodas, cenas formales, eventos culturales, capas bajo abayas, guardarropas del Golfo y occasionwear internacional en ${GCC_WORLD_EN}.`,
  },
  ru: {
    productType:
      'Приталенное макси-платье с элегантным драпированным вырезом — полностью на подкладке с фирменной отделкой Al Talli на талии, создано в Абу-Даби для мировых гардеробов',
    productCategory:
      'Платье, Дизайнерское платье, Люксовое платье, Вечернее платье, Макси-платье, Платье для многослойности, Платье Al Talli, Heritage-платье, Эмиратское платье, Скромная мода, Премиальная скромная мода, Современная женская одежда',
    fit: 'Приталенный силуэт с мягко расширяющимся низом.',
    trim: 'Фирменная тканая отделка Al Talli Bint Saeed на талии — нематериальное культурное наследие, признанное ЮНЕСКО.',
    lining: 'Полностью на подкладке (70% полиэстер, 30% вискоза)',
    styling:
      'Создано для ношения самостоятельно или под абайю — сочетается с абайями Covent Garden, Marylebone, Kensington и Belgravia.',
    stylingDetail:
      'Приталенное макси-платье с драпированным вырезом, скрытыми боковыми карманами, мягко расширяющимся низом и фирменной отделкой Al Talli на талии — создано в Абу-Даби.',
    material: 'Верх: 80% полиэстер, 20% вискоза; Подкладка: 70% полиэстер, 30% вискоза',
    suitableFor: `Вечерний гардероб, городской стиль, свадьбы, официальные ужины, культурные события, многослойность под абайи, гардеробы Персидского залива и международный occasionwear в ${GCC_WORLD_EN}.`,
  },
  zh: {
    productType:
      '剪裁合身长款连衣裙，优雅垂坠领——全衬，腰部饰以标志性 Al Talli 滚边，阿布扎比制造，面向全球衣橱',
    productCategory:
      '连衣裙, 设计师连衣裙, 奢华连衣裙, 晚宴裙, 长款连衣裙, 叠穿裙, Al Talli连衣裙, 传承连衣裙, 阿联酋连衣裙, 端庄时尚, 高端端庄时尚, 当代女装',
    fit: '合身剪裁，下摆柔和展开。',
    trim: 'Bint Saeed 标志性 Al Talli 腰部织带——联合国教科文组织认定的非物质文化遗产。',
    lining: '全衬（70%聚酯纤维，30%粘胶）',
    styling:
      '可单独穿着或叠穿于长袍下——可与 Covent Garden、Marylebone、Kensington、Belgravia 长袍搭配。',
    stylingDetail:
      '合身长款连衣裙，垂坠领、侧缝隐藏口袋、柔和展开下摆与标志性 Al Talli 腰部滚边——阿布扎比制造。',
    material: '外层：80%聚酯纤维，20%粘胶；内衬：70%聚酯纤维，30%粘胶',
    suitableFor: `晚装、城市着装、婚礼、正式晚宴、文化活动、长袍内叠穿、海湾衣橱，以及${GCC_WORLD_EN}的国际场合着装。`,
  },
  de: {
    productType:
      'Maßgeschneidertes Maxikleid mit elegantem drapiertem Ausschnitt — voll gefüttert mit signature Al-Talli-Taillenbiese, hergestellt in Abu Dhabi für globale Garderoben',
    productCategory:
      'Kleid, Designer-Kleid, Luxus-Kleid, Abendkleid, Maxikleid, Layering-Kleid, Al-Talli-Kleid, Heritage-Kleid, emiratisches Kleid, bescheidene Mode, Premium-bescheidene Mode, zeitgenössische Damenmode',
    fit: 'Maßgeschneiderte Silhouette mit weich ausgestelltem Saum.',
    trim: 'Bint Saeed signature gewebte Al-Talli-Taillenbiese — von der UNESCO anerkanntes immaterielles Kulturerbe.',
    lining: 'Voll gefüttert (70 % Polyester, 30 % Viskose)',
    styling:
      'Zum Alleintragen oder unter einer Abaya — passt zu Covent-Garden-, Marylebone-, Kensington- und Belgravia-Abayas.',
    stylingDetail:
      'Maßgeschneidertes Maxikleid mit drapiertem Ausschnitt, versteckten Seitentaschen, weich ausgestelltem Saum und signature Al-Talli-Taillenbiese — hergestellt in Abu Dhabi.',
    material: 'Außen: 80 % Polyester, 20 % Viskose; Futter: 70 % Polyester, 30 % Viskose',
    suitableFor: `Abendgarderobe, City Dressing, Hochzeiten, formelle Abendessen, Kulturveranstaltungen, Layering unter Abayas, Golf-Garderoben und internationale Occasionwear in ${GCC_WORLD_EN}.`,
  },
  nl: {
    productType:
      'Getailleerde maxi jurk met elegante gedrapeerde halslijn — volledig gevoerd met signature Al Talli taillerand, gemaakt in Abu Dhabi voor mondiale garderobes',
    productCategory:
      'Jurk, Designer jurk, Luxe jurk, Avondjurk, Maxi jurk, Layering jurk, Al Talli jurk, Heritage jurk, Emiratische jurk, Bescheiden mode, Premium bescheiden mode, Eigentijdse damesmode',
    fit: 'Getailleerd silhouet met zacht uitlopende zoom.',
    trim: 'Bint Saeed signature geweven Al Talli taillerand — door UNESCO erkend immaterieel cultureel erfgoed.',
    lining: 'Volledig gevoerd (70% polyester, 30% viscose)',
    styling:
      'Ontworpen om alleen of onder een abaya te dragen — combineert met Covent Garden-, Marylebone-, Kensington- en Belgravia-abaya’s.',
    stylingDetail:
      'Getailleerde maxi jurk met gedrapeerde halslijn, verborgen zijzakken, zacht uitlopende zoom en signature Al Talli taillerand — gemaakt in Abu Dhabi.',
    material: 'Buiten: 80% polyester, 20% viscose; Voering: 70% polyester, 30% viscose',
    suitableFor: `Avondkleding, city dressing, bruiloften, formele diners, culturele events, layering onder abaya’s, Golf-garderobes en internationale occasionwear in ${GCC_WORLD_EN}.`,
  },
  pt: {
    productType:
      'Vestido maxi alfaiatado com decote drapeado elegante — totalmente forrado com acabamento de cintura signature Al Talli, criado em Abu Dhabi para guarda-roupas globais',
    productCategory:
      'Vestido, Vestido de designer, Vestido de luxo, Vestido de noite, Vestido maxi, Vestido de sobreposição, Vestido Al Talli, Vestido património, Vestido emirati, Moda modesta, Moda modesta premium, Womenswear contemporâneo',
    fit: 'Silhueta alfaiatada com bainha ligeiramente alargada.',
    trim: 'Acabamento de cintura tecido signature Al Talli Bint Saeed — património cultural imaterial reconhecido pela UNESCO.',
    lining: 'Totalmente forrado (70% poliéster, 30% viscose)',
    styling:
      'Concebido para ser usado sozinho ou sob uma abaya — combina com as abayas Covent Garden, Marylebone, Kensington e Belgravia.',
    stylingDetail:
      'Vestido maxi alfaiatado com decote drapeado, bolsos laterais ocultos, bainha ligeiramente alargada e acabamento de cintura signature Al Talli — criado em Abu Dhabi.',
    material: 'Exterior: 80% poliéster, 20% viscose; Forro: 70% poliéster, 30% viscose',
    suitableFor: `Vestuário de noite, city dressing, casamentos, jantares formais, eventos culturais, sobreposição sob abayas, guarda-roupas do Golfo e occasionwear internacional em ${GCC_WORLD_EN}.`,
  },
  id: {
    productType:
      'Gaun maxi terstruktur dengan garis leher draperi elegan — fully lined dengan trim pinggang signature Al Talli, dibuat di Abu Dhabi untuk lemari global',
    productCategory:
      'Gaun, Gaun desainer, Gaun mewah, Gaun malam, Gaun maxi, Gaun layering, Gaun Al Talli, Gaun warisan, Gaun Emirati, Fashion modest, Fashion modest premium, Womenswear kontemporer',
    fit: 'Siluet terstruktur dengan hem yang melebar lembut.',
    trim: 'Trim pinggang tenun signature Al Talli Bint Saeed — warisan budaya takbenda yang diakui UNESCO.',
    lining: 'Fully lined (70% poliester, 30% viskosa)',
    styling:
      'Dirancang untuk dikenakan sendiri atau di bawah abaya — dipadukan dengan abaya Covent Garden, Marylebone, Kensington, dan Belgravia.',
    stylingDetail:
      'Gaun maxi terstruktur dengan garis leher draperi, saku samping tersembunyi, hem yang melebar lembut, dan trim pinggang signature Al Talli — dibuat di Abu Dhabi.',
    material: 'Luar: 80% poliester, 20% viskosa; Lapisan: 70% poliester, 30% viskosa',
    suitableFor: `Busana malam, city dressing, pernikahan, makan malam formal, acara budaya, layering di bawah abaya, lemari Teluk, dan occasionwear internasional di ${GCC_WORLD_EN}.`,
  },
  ms: {
    productType:
      'Gaun maxi berstruktur dengan garis leher draperi anggun — fully lined dengan trim pinggang signature Al Talli, dibuat di Abu Dhabi untuk almari global',
    productCategory:
      'Gaun, Gaun pereka, Gaun mewah, Gaun malam, Gaun maxi, Gaun layering, Gaun Al Talli, Gaun warisan, Gaun Emirati, Fesyen modest, Fesyen modest premium, Womenswear kontemporari',
    fit: 'Siluet berstruktur dengan hem yang melebar lembut.',
    trim: 'Trim pinggang tenunan signature Al Talli Bint Saeed — warisan budaya tidak ketara yang diiktiraf UNESCO.',
    lining: 'Fully lined (70% poliester, 30% viscose)',
    styling:
      'Direka untuk dipakai sendiri atau di bawah abaya — dipadankan dengan abaya Covent Garden, Marylebone, Kensington dan Belgravia.',
    stylingDetail:
      'Gaun maxi berstruktur dengan garis leher draperi, poket sisi tersembunyi, hem yang melebar lembut, dan trim pinggang signature Al Talli — dibuat di Abu Dhabi.',
    material: 'Luar: 80% poliester, 20% viscose; Lapisan: 70% poliester, 30% viscose',
    suitableFor: `Pakaian malam, city dressing, perkahwinan, makan malam formal, acara budaya, layering di bawah abaya, almari Teluk, dan occasionwear antarabangsa di ${GCC_WORLD_EN}.`,
  },
}

export const SOHO_SCHEMA_I18N: Record<AppLocale, SecondarySchemaLocaleFields> = {
  en: {},
  ar: {
    productType:
      'طقم قميص واسع وبنطلون بالازو واسع من كريب فاخر انسيابي مع حافة Al Talli على خطّ الجانب وأزرار Knotted Line — أزياء سفر فاخرة بتفصيل معاصر من أبوظبي',
    productCategory:
      'طقم، طقم ثنائي، طقم منسّق، طقم قميص وبنطلون، طقم التلي، طقم تراثي، طقم مصمّم، طقم فاخر، طقم سفر، أزياء محتشمة، أزياء محتشمة فاخرة، أزياء نسائية معاصرة',
    trim: 'حافة Al Talli المميّزة من Bint Saeed على خطّ جانب البنطلون — حرفية تراث إماراتي معترف بها من اليونسكو.',
    stylingDetail:
      'قميص كريب واسع مع بنطلون بالازو واسع، وجيوب صدر، وجيوب جانبية مخفية، وأزرار Knotted Line الذهبية، وحافة تراث Al Talli.',
    suitableFor: `أزياء السفر الفاخرة، إطلالات المدينة، الغداءات، العشاءات، الفعاليات الثقافية، التنقّل بين المدن، خزائن الخليج، والأزياء المحتشمة الدولية في ${GCC_WORLD_EN}.`,
  },
  fr: {
    productType:
      'Ensemble chemise oversize et pantalon palazzo large en crêpe premium fluide avec garniture Al Talli sur la couture latérale et boutons Knotted Line — travelwear de luxe au tailleur contemporain d’Abu Dhabi',
    productCategory:
      'Ensemble, Ensemble deux pièces, Ensemble coordonné, Ensemble chemise et pantalon, Ensemble Al Talli, Ensemble patrimoine, Ensemble de créateur, Ensemble de luxe, Ensemble voyage, Mode modeste, Mode modeste premium, Prêt-à-porter féminin contemporain',
    trim: 'Garniture signature Al Talli Bint Saeed le long des coutures latérales du pantalon — artisanat patrimonial émirati reconnu par l’UNESCO.',
    stylingDetail:
      'Chemise crêpe oversize avec pantalon palazzo large, poches poitrine, poches latérales dissimulées, boutons Knotted Line dorés et garniture patrimoine Al Talli.',
    suitableFor: `Travelwear de luxe, dressing urbain, déjeuners, dîners, événements culturels, trajets entre villes, garde-robes du Golfe et mode modeste internationale à ${GCC_WORLD_EN}.`,
  },
  it: {
    productType:
      'Set camicia oversize e pantaloni palazzo ampi in crêpe premium fluido con trim Al Talli sulla cucitura laterale e bottoni Knotted Line — travelwear di lusso con sartoria contemporanea da Abu Dhabi',
    productCategory:
      'Set, Set due pezzi, Set coordinato, Set camicia e pantaloni, Set Al Talli, Set heritage, Set designer, Set di lusso, Set travel, Moda modesta, Moda modesta premium, Womenswear contemporaneo',
    trim: 'Trim signature Al Talli Bint Saeed lungo le cuciture laterali dei pantaloni — artigianato patrimoniale emiratino riconosciuto dall’UNESCO.',
    stylingDetail:
      'Camicia crêpe oversize con pantaloni palazzo ampi, tasche petto, tasche laterali nascoste, bottoni Knotted Line dorati e trim heritage Al Talli.',
    suitableFor: `Travelwear di lusso, city dressing, pranzi, cene, eventi culturali, spostamenti tra città, guardaroba del Golfo e moda modesta internazionale a ${GCC_WORLD_EN}.`,
  },
  es: {
    productType:
      'Set de camisa oversize y pantalón palazzo amplio en crepé premium fluido con ribete Al Talli en la costura lateral y botones Knotted Line — travelwear de lujo con sastrería contemporánea de Abu Dabi',
    productCategory:
      'Set, Set de dos piezas, Set coordinado, Set camisa y pantalón, Set Al Talli, Set patrimonio, Set de diseñador, Set de lujo, Set viaje, Moda modesta, Moda modesta premium, Womenswear contemporáneo',
    trim: 'Ribete signature Al Talli Bint Saeed a lo largo de las costuras laterales del pantalón — artesanía patrimonial emiratí reconocida por la UNESCO.',
    stylingDetail:
      'Camisa crepé oversize con pantalón palazzo amplio, bolsillos de pecho, bolsillos laterales ocultos, botones Knotted Line dorados y ribete patrimonio Al Talli.',
    suitableFor: `Travelwear de lujo, city dressing, almuerzos, cenas, eventos culturales, trayectos entre ciudades, guardarropas del Golfo y moda modesta internacional en ${GCC_WORLD_EN}.`,
  },
  ru: {
    productType:
      'Комплект из oversize-рубашки и широких брюк палаццо из текущего премиального крепа с отделкой Al Talli по боковому шву и пуговицами Knotted Line — люксовый travelwear с современной посадкой из Абу-Даби',
    productCategory:
      'Комплект, Двухкомпонентный комплект, Координированный комплект, Комплект рубашка и брюки, Комплект Al Talli, Heritage-комплект, Дизайнерский комплект, Люксовый комплект, Тревел-комплект, Скромная мода, Премиальная скромная мода, Современная женская одежда',
    trim: 'Фирменная отделка Al Talli Bint Saeed вдоль боковых швов брюк — эмиратское наследие ремесла, признанное ЮНЕСКО.',
    stylingDetail:
      'Oversize-рубашка из крепа с широкими брюками палаццо, нагрудными карманами, скрытыми боковыми карманами, золотистыми пуговицами Knotted Line и heritage-отделкой Al Talli.',
    suitableFor: `Люксовый travelwear, городской стиль, обеды, ужины, культурные события, переезды между городами, гардеробы Персидского залива и международная скромная мода в ${GCC_WORLD_EN}.`,
  },
  zh: {
    productType:
      '宽松衬衫与阔腿裤azzo 裤装，流畅高级绉纱，侧缝饰 Al Talli 滚边与 Knotted Line 纽扣——阿布扎比当代剪裁奢华旅行装',
    productCategory:
      '套装, 两件套, 协调套装, 衬衫裤装, Al Talli套装, 传承套装, 设计师套装, 奢华套装, 旅行套装, 端庄时尚, 高端端庄时尚, 当代女装',
    trim: 'Bint Saeed 标志性 Al Talli 裤侧缝滚边——联合国教科文组织认定的阿联酋传承工艺。',
    stylingDetail:
      '宽松绉纱衬衫配阔腿 palazzo 裤、胸袋、侧缝隐藏口袋、金色 Knotted Line 纽扣与 Al Talli 传承滚边。',
    suitableFor: `奢华旅行装、城市着装、午餐、晚宴、文化活动、城市间出行、海湾衣橱，以及${GCC_WORLD_EN}的国际端庄时尚。`,
  },
  de: {
    productType:
      'Oversize-Hemd und weite Palazzo-Hose aus fließendem Premium-Crêpe mit Al-Talli-Seitennahtbesatz und Knotted-Line-Knöpfen — Luxus-Travelwear mit zeitgenössischer Schneiderkunst aus Abu Dhabi',
    productCategory:
      'Set, Zweiteiler, Koordinaten-Set, Hemd-und-Hosen-Set, Al-Talli-Set, Heritage-Set, Designer-Set, Luxus-Set, Travel-Set, bescheidene Mode, Premium-bescheidene Mode, zeitgenössische Damenmode',
    trim: 'Bint Saeed signature Al-Talli-Besatz entlang der Hosen-Seitennähte — von der UNESCO anerkanntes emiratisches Heritage-Handwerk.',
    stylingDetail:
      'Oversize-Crêpe-Hemd mit weiten Palazzo-Hosen, Brusttaschen, versteckten Seitentaschen, goldfarbenen Knotted-Line-Knöpfen und Al-Talli-Heritage-Besatz.',
    suitableFor: `Luxus-Travelwear, City Dressing, Lunches, Abendessen, Kulturveranstaltungen, Reisen zwischen Städten, Golf-Garderoben und internationale bescheidene Mode in ${GCC_WORLD_EN}.`,
  },
  nl: {
    productType:
      'Oversize blouse en wijde palazzo broek in vloeiende premium crêpe met Al Talli zijnaadtrim en Knotted Line-knopen — luxe travelwear met eigentijdse tailoring uit Abu Dhabi',
    productCategory:
      'Set, Tweedelige set, Coördinatieset, Blouse-en-broekset, Al Talli set, Heritage set, Designer set, Luxe set, Travel set, Bescheiden mode, Premium bescheiden mode, Eigentijdse damesmode',
    trim: 'Bint Saeed signature Al Talli-trim langs de zijnaden van de broek — door UNESCO erkend Emiratisch heritage-vakmanschap.',
    stylingDetail:
      'Oversize crêpe blouse met wijde palazzo broek, borstzakken, verborgen zijzakken, goudkleurige Knotted Line-knopen en Al Talli heritage-trim.',
    suitableFor: `Luxe travelwear, city dressing, lunches, diners, culturele events, reizen tussen steden, Golf-garderobes en internationale bescheiden mode in ${GCC_WORLD_EN}.`,
  },
  pt: {
    productType:
      'Conjunto de camisa oversized e calça palazzo ampla em crepe premium fluido com acabamento Al Talli na costura lateral e botões Knotted Line — travelwear de luxo com alfaiataria contemporânea de Abu Dhabi',
    productCategory:
      'Set, Set de duas peças, Set coordenado, Set camisa e calça, Set Al Talli, Set património, Set de designer, Set de luxo, Set viagem, Moda modesta, Moda modesta premium, Womenswear contemporâneo',
    trim: 'Acabamento signature Al Talli Bint Saeed ao longo das costuras laterais da calça — artesanato patrimonial emirati reconhecido pela UNESCO.',
    stylingDetail:
      'Camisa crepe oversized com calça palazzo ampla, bolsos no peito, bolsos laterais ocultos, botões Knotted Line dourados e acabamento património Al Talli.',
    suitableFor: `Travelwear de luxo, city dressing, almoços, jantares, eventos culturais, deslocações entre cidades, guarda-roupas do Golfo e moda modesta internacional em ${GCC_WORLD_EN}.`,
  },
  id: {
    productType:
      'Set kemeja oversized dan celana palazzo lebar dari crepe premium yang mengalir dengan trim Al Talli pada jahitan samping dan kancing Knotted Line — travelwear mewah dengan penjahitan kontemporer dari Abu Dhabi',
    productCategory:
      'Set, Set dua potong, Set terkoordinasi, Set kemeja dan celana, Set Al Talli, Set warisan, Set desainer, Set mewah, Set travel, Fashion modest, Fashion modest premium, Womenswear kontemporer',
    trim: 'Trim signature Al Talli Bint Saeed di sepanjang jahitan samping celana — kerajinan warisan Emirati yang diakui UNESCO.',
    stylingDetail:
      'Kemeja crepe oversized dengan celana palazzo lebar, saku dada, saku samping tersembunyi, kancing Knotted Line berwarna emas, dan trim warisan Al Talli.',
    suitableFor: `Travelwear mewah, city dressing, makan siang, makan malam, acara budaya, perjalanan antar kota, lemari Teluk, dan fashion modest internasional di ${GCC_WORLD_EN}.`,
  },
  ms: {
    productType:
      'Set baju oversized dan seluar palazzo lebar daripada crepe premium yang mengalir dengan trim Al Talli pada jahitan sisi dan butang Knotted Line — travelwear mewah dengan jahitan kontemporari dari Abu Dhabi',
    productCategory:
      'Set, Set dua keping, Set berkoordinasi, Set baju dan seluar, Set Al Talli, Set warisan, Set pereka, Set mewah, Set travel, Fesyen modest, Fesyen modest premium, Womenswear kontemporari',
    trim: 'Trim signature Al Talli Bint Saeed di sepanjang jahitan sisi seluar — kraftangan warisan Emirati yang diiktiraf UNESCO.',
    stylingDetail:
      'Baju crepe oversized dengan seluar palazzo lebar, poket dada, poket sisi tersembunyi, butang Knotted Line berwarna emas, dan trim warisan Al Talli.',
    suitableFor: `Travelwear mewah, city dressing, makan tengah hari, makan malam, acara budaya, perjalanan antara bandar, almari Teluk, dan fesyen modest antarabangsa di ${GCC_WORLD_EN}.`,
  },
}
