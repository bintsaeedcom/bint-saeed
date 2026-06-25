import type { AppLocale } from '@/lib/i18n/routing'
import { patchAlKhousHeritageFaq } from '@/lib/products/alKhousHeritageFaqI18n'
import type { AbayaSchemaLocalePack } from '@/lib/products/abayaSchemaPackResolve'

const BELGRAVIA_MATERIAL =
  'Outer: Light crepe blend (80% polyester, 20% viscose); lining (70% polyester, 30% viscose)'

export const BELGRAVIA_AUDIENCE_EXTENSION: Record<AppLocale, string> = {
  en: ', Bisht-inspired abayas, elegant occasion wear, cultural craftsmanship, international occasion wear, and destination dressing across the Gulf, Europe, and beyond',
  ar: ', عبايات مستوحاة من البشت، وأزياء مناسبات أنيقة، وحرفية ثقافية، وأزياء مناسبات عالمية، وإطلالات وجهات عبر الخليج وأوروبا وما بعدهما',
  fr: ', abayas inspirees du Bisht, tenues elegantes pour les occasions, artisanat culturel, tenues de ceremonie internationales, et dressing de destination a travers le Golfe, l Europe et au-dela',
  it: ', abaya ispirate al Bisht, abbigliamento elegante da occasione, artigianalita culturale, abbigliamento internazionale da occasione e destination dressing in tutto il Golfo, l Europa e oltre',
  es: ', abayas inspiradas en el Bisht, vestimenta elegante para ocasiones, artesania cultural, vestimenta internacional para ocasiones y destination dressing en todo el Golfo, Europa y mas alla',
  ru: ', абайи в стиле Bisht, элегантная одежда для особых случаев, культурное ремесленное мастерство, международная одежда для мероприятий и destination dressing по всему GCC, Европе и за их пределами',
  zh: ', 受 Bisht 启发的 abaya、优雅场合着装、文化工艺、国际场合着装，以及覆盖海湾、欧洲及更广地区的目的地着装',
  de: ', vom Bisht inspirierte Abayas, elegante Anlassmode, kulturelle Handwerkskunst, internationale Anlassmode und Destination Dressing im gesamten Golf, in Europa und daruber hinaus',
  nl: ', op de Bisht geinspireerde abaya s, elegante gelegenheidskleding, cultureel vakmanschap, internationale gelegenheidskleding en destination dressing in de hele Golf, Europa en daarbuiten',
  pt: ', abayas inspiradas no Bisht, vestuario elegante para ocasioes, artesanato cultural, vestuario internacional para ocasioes e destination dressing por todo o Golfo, Europa e alem',
  id: ', abaya terinspirasi Bisht, busana acara yang elegan, kerajinan budaya, busana acara internasional, dan penampilan destinasi di seluruh Teluk, Eropa, dan seterusnya',
  ms: ', abaya terinspirasi Bisht, pakaian majlis yang anggun, kraftangan budaya, pakaian majlis antarabangsa, dan pemakaian destinasi di seluruh Teluk, Eropah, dan seterusnya',
}

const BELGRAVIA_FACTS_EN = {
  productType: 'Bisht-inspired abaya',
  productCategory: 'Abaya, Outerwear, Cape, Vest, Jacket',
  neckline: 'Open-front Bisht-inspired abaya',
  fit: 'Relaxed Bisht-inspired silhouette with a flowing fit, designed for graceful movement, elegant layering, and everyday comfort.',
  maximumGarmentLength: '138 cm / 54.5 inches',
  modelHeight: '155 cm / 61 inches',
  closure: 'Open-front construction. Optional concealed snap-button closure available upon request.',
  pockets: 'Hidden side pockets',
  lining: 'Fully lined for comfort and a refined finish.',
  personalisation: 'Personalisation available inside the hidden pocket with a name, date, or meaningful message.',
  trim: 'Handwoven trim inspired by Al Khous / Khous, the traditional Emirati art of palm frond weaving.',
  stylingDetail:
    'Bisht-inspired abaya silhouette with handwoven Khous-inspired trim, clean finishing, hidden pockets, full lining, and optional concealed snap-button closure.',
  care: 'Professional dry clean only.',
  material: BELGRAVIA_MATERIAL,
  suitableFor:
    'Luxury travel, everyday elegance, gatherings, dinners, weddings, engagement celebrations, Eid gatherings, cultural occasions, destination events, international occasion wear, and contemporary daily dressing across the Gulf, Europe, and beyond.',
} satisfies AbayaSchemaLocalePack['facts']

const BELGRAVIA_FACTS_AR = {
  productType: 'عباية مستوحاة من البشت',
  productCategory: 'عباية، ملابس خارجية، كاب، جيليه، جاكيت',
  neckline: 'عباية مفتوحة من الامام مستوحاة من البشت',
  fit: 'قصة واسعة مستوحاة من البشت بانسيابية ناعمة، مصممة لحركة رشيقة وتنسيق انيق وراحة يومية.',
  maximumGarmentLength: '138 سم / 54.5 بوصة',
  modelHeight: '155 سم / 61 بوصة',
  closure: 'تصميم مفتوح من الامام. يتوفر خيار اغلاق بزر كبس مخفي عند الطلب.',
  pockets: 'جيوب جانبية مخفية',
  lining: 'مبطنة بالكامل للراحة ولمظهر نهائي راق.',
  personalisation: 'يتوفر التخصيص داخل الجيب المخفي بالاسم او التاريخ او رسالة ذات معنى.',
  trim: 'حافة منسوجة يدويا مستوحاة من Al Khous / Khous، فن اماراتي تقليدي في نسج سعف النخيل.',
  stylingDetail:
    'قصة عباية مستوحاة من البشت مع حافة منسوجة يدويا مستوحاة من Khous وتشطيب نظيف وجيوب مخفية وبطانة كاملة وخيار اغلاق بزر كبس مخفي.',
  care: 'تنظيف جاف احترافي فقط.',
  material: BELGRAVIA_MATERIAL,
  suitableFor:
    'السفر الفاخر، والاناقة اليومية، والتجمعات، والعشاءات، وحفلات الزفاف، واحتفالات الخطوبة، وتجمعات Eid، والمناسبات الثقافية، وفعاليات الوجهات، وازياء المناسبات العالمية، والاطلالات اليومية المعاصرة عبر الخليج واوروبا وما بعدهما.',
} satisfies AbayaSchemaLocalePack['facts']

const BELGRAVIA_FACTS_FR = {
  productType: 'Abaya inspiree du Bisht',
  productCategory: 'Abaya, vetement d exterieur, cape, gilet, veste',
  neckline: 'Abaya ouverte sur le devant inspiree du Bisht',
  fit: 'Silhouette decontractee inspiree du Bisht avec un tombe fluide, concue pour un mouvement gracieux, des superpositions elegantes et un confort quotidien.',
  maximumGarmentLength: '138 cm / 54.5 pouces',
  modelHeight: '155 cm / 61 pouces',
  closure: 'Construction ouverte sur le devant. Fermeture optionnelle par bouton-pression dissimule disponible sur demande.',
  pockets: 'Poches laterales dissimulees',
  lining: 'Entierement doublee pour le confort et une finition raffinee.',
  personalisation: 'Personnalisation disponible a l interieur de la poche dissimulee avec un nom, une date ou un message significatif.',
  trim: 'Finition tissee a la main inspiree de Al Khous / Khous, l art emirati traditionnel du tressage de palmes.',
  stylingDetail:
    'Silhouette d abaya inspiree du Bisht avec finition tissee a la main inspiree du Khous, finitions nettes, poches dissimulees, doublure complete et fermeture optionnelle par bouton-pression dissimule.',
  care: 'Nettoyage a sec professionnel uniquement.',
  material: BELGRAVIA_MATERIAL,
  suitableFor:
    'Voyages de luxe, elegance quotidienne, reunions, diners, mariages, celebrations de fiancailles, rassemblements de Eid, occasions culturelles, evenements de destination, tenues de ceremonie internationales et dressing quotidien contemporain a travers le Golfe, l Europe et au-dela.',
} satisfies AbayaSchemaLocalePack['facts']

const BELGRAVIA_FACTS_IT = {
  productType: 'Abaya ispirata al Bisht',
  productCategory: 'Abaya, capospalla, cappa, gilet, giacca',
  neckline: 'Abaya aperta sul davanti ispirata al Bisht',
  fit: 'Silhouette rilassata ispirata al Bisht con linea fluida, progettata per movimento armonioso, sovrapposizioni eleganti e comfort quotidiano.',
  maximumGarmentLength: '138 cm / 54.5 pollici',
  modelHeight: '155 cm / 61 pollici',
  closure: 'Costruzione aperta sul davanti. Chiusura opzionale con bottone automatico nascosto disponibile su richiesta.',
  pockets: 'Tasche laterali nascoste',
  lining: 'Completamente foderata per comfort e finitura raffinata.',
  personalisation: 'Personalizzazione disponibile all interno della tasca nascosta con nome, data o messaggio significativo.',
  trim: 'Profilo intrecciato a mano ispirato ad Al Khous / Khous, la tradizionale arte emiratina dell intreccio delle foglie di palma.',
  stylingDetail:
    'Silhouette di abaya ispirata al Bisht con profilo intrecciato a mano ispirato al Khous, finiture pulite, tasche nascoste, fodera completa e chiusura opzionale con bottone automatico nascosto.',
  care: 'Solo lavaggio a secco professionale.',
  material: BELGRAVIA_MATERIAL,
  suitableFor:
    'Viaggi di lusso, eleganza quotidiana, incontri, cene, matrimoni, celebrazioni di fidanzamento, incontri di Eid, occasioni culturali, eventi in destinazione, abbigliamento internazionale da occasione e vestire contemporaneo quotidiano in tutto il Golfo, l Europa e oltre.',
} satisfies AbayaSchemaLocalePack['facts']

const BELGRAVIA_FACTS_ES = {
  productType: 'Abaya inspirada en el Bisht',
  productCategory: 'Abaya, prenda exterior, capa, chaleco, chaqueta',
  neckline: 'Abaya abierta al frente inspirada en el Bisht',
  fit: 'Silueta relajada inspirada en el Bisht con caida fluida, disenada para movimiento elegante, superposicion refinada y comodidad diaria.',
  maximumGarmentLength: '138 cm / 54.5 pulgadas',
  modelHeight: '155 cm / 61 pulgadas',
  closure: 'Construccion abierta al frente. Cierre opcional con broche de presion oculto disponible bajo solicitud.',
  pockets: 'Bolsillos laterales ocultos',
  lining: 'Totalmente forrada para comodidad y un acabado refinado.',
  personalisation: 'Personalizacion disponible dentro del bolsillo oculto con un nombre, fecha o mensaje significativo.',
  trim: 'Adorno tejido a mano inspirado en Al Khous / Khous, el arte tradicional emirati de tejido de hojas de palma.',
  stylingDetail:
    'Silueta de abaya inspirada en el Bisht con adorno tejido a mano inspirado en Khous, acabado limpio, bolsillos ocultos, forro completo y cierre opcional con broche de presion oculto.',
  care: 'Solo limpieza en seco profesional.',
  material: BELGRAVIA_MATERIAL,
  suitableFor:
    'Viajes de lujo, elegancia diaria, reuniones, cenas, bodas, celebraciones de compromiso, encuentros de Eid, ocasiones culturales, eventos de destino, vestimenta internacional para ocasiones y vestimenta diaria contemporanea en todo el Golfo, Europa y mas alla.',
} satisfies AbayaSchemaLocalePack['facts']

const BELGRAVIA_FACTS_RU = {
  productType: 'Абая в стиле Bisht',
  productCategory: 'Абая, верхняя одежда, кейп, жилет, жакет',
  neckline: 'Абая с открытым передом в стиле Bisht',
  fit: 'Свободный силуэт в стиле Bisht с плавной посадкой, созданный для грациозного движения, элегантной многослойности и ежедневного комфорта.',
  maximumGarmentLength: '138 см / 54.5 дюйма',
  modelHeight: '155 см / 61 дюйм',
  closure: 'Конструкция с открытым передом. По запросу доступна скрытая застежка на кнопку.',
  pockets: 'Скрытые боковые карманы',
  lining: 'Полная подкладка для комфорта и изысканной отделки.',
  personalisation:
    'Доступна персонализация внутри скрытого кармана: имя, дата или значимое сообщение.',
  trim: 'Отделка ручного плетения, вдохновленная Al Khous / Khous, традиционным эмиратским искусством плетения из пальмовых листьев.',
  stylingDetail:
    'Силуэт абаи в стиле Bisht с отделкой ручного плетения в духе Khous, чистой обработкой, скрытыми карманами, полной подкладкой и опциональной скрытой застежкой на кнопку.',
  care: 'Только профессиональная сухая чистка.',
  material: BELGRAVIA_MATERIAL,
  suitableFor:
    'Путешествий класса люкс, повседневной элегантности, встреч, ужинов, свадеб, помолвок, встреч на Eid, культурных мероприятий, событий в поездках, международных торжественных выходов и современного повседневного гардероба в GCC, Европе и за их пределами.',
} satisfies AbayaSchemaLocalePack['facts']

const BELGRAVIA_FACTS_ZH = {
  productType: '受 Bisht 启发的 abaya',
  productCategory: 'abaya、外套、披肩、马甲、夹克',
  neckline: '前开式受 Bisht 启发的 abaya',
  fit: '宽松的 Bisht 风格廓形与流动感剪裁，兼顾优雅行动、层次穿搭与日常舒适。',
  maximumGarmentLength: '138 厘米 / 54.5 英寸',
  modelHeight: '155 厘米 / 61 英寸',
  closure: '前开式结构。可按需提供隐藏式按扣闭合。',
  pockets: '隐藏侧袋',
  lining: '全里衬设计，提升舒适度并呈现精致质感。',
  personalisation: '可在隐藏口袋内进行个性化定制，加入姓名、日期或有意义的信息。',
  trim: '手工织边灵感源自 Al Khous / Khous，即阿联酋传统棕榈叶编织工艺。',
  stylingDetail:
    '受 Bisht 启发的 abaya 廓形，配以受 Khous 启发的手工织边、利落收边、隐藏口袋、全里衬以及可选隐藏式按扣闭合。',
  care: '仅限专业干洗。',
  material: BELGRAVIA_MATERIAL,
  suitableFor:
    '适合奢华旅行、日常优雅穿着、聚会、晚宴、婚礼、订婚庆典、Eid 聚会、文化场合、目的地活动、国际场合着装，以及覆盖海湾、欧洲及更广地区的当代日常着装。',
} satisfies AbayaSchemaLocalePack['facts']

const BELGRAVIA_FACTS_DE = {
  productType: 'Vom Bisht inspirierte Abaya',
  productCategory: 'Abaya, Oberbekleidung, Cape, Weste, Jacke',
  neckline: 'Vorne offene, vom Bisht inspirierte Abaya',
  fit: 'Entspannte, vom Bisht inspirierte Silhouette mit fliessendem Fall, entworfen fur anmutige Bewegung, elegante Layering-Looks und alltaglichen Komfort.',
  maximumGarmentLength: '138 cm / 54.5 Zoll',
  modelHeight: '155 cm / 61 Zoll',
  closure: 'Vorne offene Konstruktion. Optionale verdeckte Druckknopf-Schliessung auf Anfrage verfugbar.',
  pockets: 'Versteckte Seitentaschen',
  lining: 'Vollstandig gefuttert fur Komfort und ein raffiniertes Finish.',
  personalisation:
    'Personalisierung in der versteckten Tasche mit Name, Datum oder einer bedeutungsvollen Nachricht verfugbar.',
  trim: 'Handgewebte Besatzkante, inspiriert von Al Khous / Khous, der traditionellen emiratischen Kunst des Palmblattflechtens.',
  stylingDetail:
    'Vom Bisht inspirierte Abaya-Silhouette mit handgewebter, von Khous inspirierter Besatzkante, sauberer Verarbeitung, versteckten Taschen, Vollfutter und optionaler verdeckter Druckknopf-Schliessung.',
  care: 'Nur professionelle Trockenreinigung.',
  material: BELGRAVIA_MATERIAL,
  suitableFor:
    'Luxusreisen, alltagliche Eleganz, Zusammenkunfte, Dinner, Hochzeiten, Verlobungsfeiern, Eid-Zusammenkunfte, kulturelle Anlasse, Destination-Events, internationale Anlassmode und zeitgenossisches alltagliches Styling im gesamten Golf, in Europa und daruber hinaus.',
} satisfies AbayaSchemaLocalePack['facts']

const BELGRAVIA_FACTS_NL = {
  productType: 'Op de Bisht geinspireerde abaya',
  productCategory: 'Abaya, bovenkleding, cape, gilet, jas',
  neckline: 'Openvallende op de Bisht geinspireerde abaya',
  fit: 'Ontspannen op de Bisht geinspireerd silhouet met vloeiende pasvorm, ontworpen voor sierlijke beweging, elegante layering en dagelijks comfort.',
  maximumGarmentLength: '138 cm / 54.5 inch',
  modelHeight: '155 cm / 61 inch',
  closure: 'Openvallende constructie. Optionele verborgen drukknoopsluiting beschikbaar op aanvraag.',
  pockets: 'Verborgen zijzakken',
  lining: 'Volledig gevoerd voor comfort en een verfijnde afwerking.',
  personalisation: 'Personalisatie beschikbaar in de verborgen zak met een naam, datum of betekenisvolle boodschap.',
  trim: 'Handgeweven afwerking geinspireerd op Al Khous / Khous, de traditionele Emirati kunst van het vlechten van palmbladeren.',
  stylingDetail:
    'Op de Bisht geinspireerd abaya-silhouet met handgeweven op Khous geinspireerde afwerking, zuivere afwerking, verborgen zakken, volledige voering en optionele verborgen drukknoopsluiting.',
  care: 'Alleen professioneel chemisch reinigen.',
  material: BELGRAVIA_MATERIAL,
  suitableFor:
    'Luxe reizen, dagelijkse elegantie, bijeenkomsten, diners, bruiloften, verlovingsvieringen, Eid-bijeenkomsten, culturele gelegenheden, destination events, internationale gelegenheidskleding en eigentijdse dagelijkse dressing in de hele Golf, Europa en daarbuiten.',
} satisfies AbayaSchemaLocalePack['facts']

const BELGRAVIA_FACTS_PT = {
  productType: 'Abaya inspirada no Bisht',
  productCategory: 'Abaya, roupa exterior, capa, colete, casaco',
  neckline: 'Abaya aberta na frente inspirada no Bisht',
  fit: 'Silhueta descontraida inspirada no Bisht com caimento fluido, concebida para movimento gracioso, sobreposicao elegante e conforto diario.',
  maximumGarmentLength: '138 cm / 54.5 polegadas',
  modelHeight: '155 cm / 61 polegadas',
  closure: 'Construcao aberta na frente. Fecho opcional com botao de pressao oculto disponivel sob pedido.',
  pockets: 'Bolsos laterais ocultos',
  lining: 'Totalmente forrada para conforto e acabamento refinado.',
  personalisation: 'Personalizacao disponivel dentro do bolso oculto com nome, data ou mensagem significativa.',
  trim: 'Acabamento tecido a mao inspirado em Al Khous / Khous, a arte tradicional Emirati de tecer folhas de palmeira.',
  stylingDetail:
    'Silhueta de abaya inspirada no Bisht com acabamento tecido a mao inspirado em Khous, acabamento limpo, bolsos ocultos, forro completo e fecho opcional com botao de pressao oculto.',
  care: 'Apenas limpeza profissional a seco.',
  material: BELGRAVIA_MATERIAL,
  suitableFor:
    'Viagens de luxo, elegancia diaria, encontros, jantares, casamentos, celebracoes de noivado, encontros de Eid, ocasioes culturais, eventos de destino, vestuario internacional para ocasioes e vestir diario contemporaneo em todo o Golfo, Europa e alem.',
} satisfies AbayaSchemaLocalePack['facts']

const BELGRAVIA_FACTS_ID = {
  productType: 'Abaya terinspirasi Bisht',
  productCategory: 'Abaya, Pakaian Luar, Jubah, Rompi, Jaket',
  neckline: 'Abaya depan terbuka terinspirasi Bisht',
  fit: 'Siluet santai terinspirasi Bisht dengan potongan mengalir, dirancang untuk gerakan yang anggun, lapisan yang elegan, dan kenyamanan sehari-hari.',
  maximumGarmentLength: '138 cm / 54,5 inci',
  modelHeight: '155 cm / 61 inci',
  closure: 'Konstruksi depan terbuka. Pilihan penutup kancing snap tersembunyi tersedia atas permintaan.',
  pockets: 'Saku samping tersembunyi',
  lining: 'Berlapis penuh untuk kenyamanan dan tampilan yang rapi.',
  personalisation: 'Personalisasi tersedia di dalam saku tersembunyi dengan nama, tanggal, atau pesan bermakna.',
  trim: 'Trim tenun tangan terinspirasi Al Khous / Khous, seni tradisional Emirati dalam menganyam pelepah palem.',
  stylingDetail:
    'Siluet abaya terinspirasi Bisht dengan trim tenun tangan terinspirasi Khous, penyelesaian bersih, saku tersembunyi, lapisan penuh, dan pilihan penutup kancing snap tersembunyi.',
  care: 'Hanya cuci kering profesional.',
  material: BELGRAVIA_MATERIAL,
  suitableFor:
    'Perjalanan mewah, keanggunan sehari-hari, pertemuan, makan malam, pernikahan, perayaan pertunangan, pertemuan Idulfitri, acara budaya, acara destinasi, busana acara internasional, dan penampilan harian kontemporer di seluruh Teluk, Eropa, dan seterusnya.',
} satisfies AbayaSchemaLocalePack['facts']

const BELGRAVIA_FACTS_MS = {
  productType: 'Abaya terinspirasi Bisht',
  productCategory: 'Abaya, Pakaian Luar, Jubah, Vest, Jaket',
  neckline: 'Abaya depan terbuka terinspirasi Bisht',
  fit: 'Siluet santai terinspirasi Bisht dengan potongan mengalir, direka untuk pergerakan yang anggun, lapisan yang elegan, dan keselesaan harian.',
  maximumGarmentLength: '138 cm / 54.5 inci',
  modelHeight: '155 cm / 61 inci',
  closure: 'Rekaan depan terbuka. Pilihan penutup butang snap tersembunyi tersedia atas permintaan.',
  pockets: 'Poket sisi tersembunyi',
  lining: 'Berlapis penuh untuk keselesaan dan kemasan yang halus.',
  personalisation: 'Personalisasi tersedia di dalam poket tersembunyi dengan nama, tarikh, atau mesej bermakna.',
  trim: 'Trim tenunan tangan terinspirasi Al Khous / Khous, seni tradisional Emirati dalam menenun pelepah palem.',
  stylingDetail:
    'Siluet abaya terinspirasi Bisht dengan trim tenunan tangan terinspirasi Khous, kemasan bersih, poket tersembunyi, lapisan penuh, dan pilihan penutup butang snap tersembunyi.',
  care: 'Basuh kering profesional sahaja.',
  material: BELGRAVIA_MATERIAL,
  suitableFor:
    'Perjalanan mewah, keanggunan harian, pertemuan, majlis makan malam, perkahwinan, perayaan pertunangan, perhimpunan Aidilfitri, acara budaya, acara destinasi, pakaian majlis antarabangsa, dan pemakaian harian kontemporari di seluruh Teluk, Eropah, dan seterusnya.',
} satisfies AbayaSchemaLocalePack['facts']

const BELGRAVIA_FAQ_EN = [
  {
    question: 'Can the Belgravia Abaya be worn outside the Middle East?',
    answer:
      'Absolutely. While rooted in Emirati craftsmanship, the Belgravia Abaya was created for women who move between cultures, cities, and occasions. Its timeless Bisht-inspired silhouette allows it to be worn for a dinner in London, an event in Paris, a summer gathering in Cannes, a celebration in Riyadh, or everyday life in the Gulf.',
  },
  {
    question: 'Can the Belgravia Abaya be personalised?',
    answer:
      'Yes. Like all Bint Saeed abayas, the Belgravia Abaya can be personalised with a name, date, or meaningful message placed discreetly inside the hidden pocket, creating a private detail that remains close to the wearer.',
  },
  {
    question: 'What is Al Khous and how is it reflected in the Belgravia Abaya?',
    answer:
      'Al Khous is a traditional Emirati craft based on weaving palm fronds into decorative and functional forms. The handwoven trim of the Belgravia Abaya draws inspiration from this heritage, translating elements of palm frond weaving into a contemporary luxury abaya while celebrating a tradition passed down through generations.',
  },
  {
    question: 'What makes the Belgravia Abaya different from other abayas?',
    answer:
      'The Belgravia Abaya is distinguished by its handwoven trim inspired by Al Khous palm frond weaving, its relaxed Bisht-inspired silhouette, hidden pockets, full lining, and optional concealed snap-button closure. Designed and made in Abu Dhabi, United Arab Emirates, it combines cultural craftsmanship with timeless elegance, creating a piece that feels relevant in the Gulf, Europe, and beyond.',
  },
  {
    question: 'Why is the Belgravia Abaya inspired by the Bisht?',
    answer:
      'The Bisht is one of the most recognisable garments of the Arabian Peninsula and has long been associated with dignity, occasion, and craftsmanship. The Belgravia Abaya reinterprets elements of this silhouette through a contemporary lens, creating an open-front abaya that honours its inspiration while remaining relevant to the way women dress today.',
  },
  {
    question:
      'Is the Belgravia Abaya suitable for daily wear, dinners, weddings, and special occasions?',
    answer:
      'Yes. The Belgravia Abaya is designed for everyday elegance, dinners, gatherings, weddings, engagement celebrations, Eid gatherings, cultural occasions, destination events, and special occasions. Its flowing Bisht-inspired silhouette and handwoven trim allow it to move naturally between daily GCC life, international travel, and elevated events.',
  },
] satisfies AbayaSchemaLocalePack['faq']

const BELGRAVIA_FAQ_AR = [
  {
    question: 'هل يمكن ارتداء عباية Belgravia خارج الشرق الاوسط؟',
    answer:
      'بالتاكيد. رغم تجذرها في الحرفية الاماراتية، صممت عباية Belgravia للنساء اللواتي ينتقلن بين الثقافات والمدن والمناسبات. يتيح لها تصميمها الخالد المستوحى من Bisht ان ترتدى لعشاء في London او لفعالية في Paris او لتجمع صيفي في Cannes او لاحتفال في Riyadh او للحياة اليومية في الخليج.',
  },
  {
    question: 'هل يمكن تخصيص عباية Belgravia؟',
    answer:
      'نعم. مثل جميع عبايات Bint Saeed، يمكن تخصيص عباية Belgravia باسم او تاريخ او رسالة ذات معنى توضع بشكل خفي داخل الجيب المخفي، لتشكل تفصيلا خاصا يبقى قريبا من مرتديتها.',
  },
  {
    question: 'ما هو Al Khous وكيف ينعكس في عباية Belgravia؟',
    answer:
      'Al Khous هو حرفة اماراتية تقليدية تقوم على نسج سعف النخيل الى اشكال زخرفية ووظيفية. تستلهم الحافة المنسوجة يدويا في عباية Belgravia هذا الارث، فتترجم عناصر نسج السعف الى عباية فاخرة معاصرة مع الاحتفاء بتقليد توارثته الاجيال.',
  },
  {
    question: 'ما الذي يميز عباية Belgravia عن غيرها من العبايات؟',
    answer:
      'تتميز عباية Belgravia بحافة منسوجة يدويا مستوحاة من نسج سعف Al Khous، وبقصة مريحة مستوحاة من Bisht، وجيوب مخفية، وبطانة كاملة، وخيار اغلاق بزر كبس مخفي. صممت وصنعت في Abu Dhabi، United Arab Emirates، لتجمع بين الحرفية الثقافية والاناقة الخالدة في قطعة مناسبة للخليج واوروبا وما بعدهما.',
  },
  {
    question: 'لماذا استوحي تصميم عباية Belgravia من Bisht؟',
    answer:
      'يعد Bisht من اكثر الازياء شهرة في شبه الجزيرة العربية، وارتبط طويلا بالوقار والمناسبات والحرفية. تعيد عباية Belgravia تفسير عناصر هذا الشكل من منظور معاصر، مقدمة عباية مفتوحة من الامام تكرم مصدر الالهام مع بقائها مناسبة لاسلوب لباس المرأة اليوم.',
  },
  {
    question: 'هل عباية Belgravia مناسبة للارتداء اليومي وللعشاءات وحفلات الزفاف والمناسبات الخاصة؟',
    answer:
      'نعم. صممت عباية Belgravia للاناقة اليومية والعشاءات والتجمعات وحفلات الزفاف واحتفالات الخطوبة وتجمعات Eid والمناسبات الثقافية وفعاليات الوجهات والمناسبات الخاصة. كما يتيح شكلها الانسيابي المستوحى من Bisht وحافتها المنسوجة يدويا الانتقال بسلاسة بين حياة GCC اليومية والسفر الدولي والفعاليات الراقية.',
  },
] satisfies AbayaSchemaLocalePack['faq']

const BELGRAVIA_FAQ_FR = [
  {
    question: 'L Abaya Belgravia peut-elle etre portee en dehors du Moyen-Orient ?',
    answer:
      'Absolument. Bien qu ancree dans l artisanat emirati, l Abaya Belgravia a ete creee pour les femmes qui evoluent entre cultures, villes et occasions. Sa silhouette intemporelle inspiree du Bisht permet de la porter pour un diner a London, un evenement a Paris, un rassemblement estival a Cannes, une celebration a Riyadh, ou au quotidien dans le Golfe.',
  },
  {
    question: 'L Abaya Belgravia peut-elle etre personnalisee ?',
    answer:
      'Oui. Comme toutes les abayas Bint Saeed, l Abaya Belgravia peut etre personnalisee avec un nom, une date ou un message significatif place discretement dans la poche cachee, creant un detail prive qui reste proche de la personne qui la porte.',
  },
  {
    question: 'Qu est-ce que Al Khous et comment est-il refle te dans l Abaya Belgravia ?',
    answer:
      'Al Khous est un artisanat emirati traditionnel fonde sur le tressage des palmes en formes decoratives et fonctionnelles. La finition tissee a la main de l Abaya Belgravia s inspire de cet heritage et traduit des elements de tressage des palmes dans une abaya de luxe contemporaine, tout en celebrant une tradition transmise de generation en generation.',
  },
  {
    question: 'Qu est-ce qui distingue l Abaya Belgravia des autres abayas ?',
    answer:
      'L Abaya Belgravia se distingue par sa finition tissee a la main inspiree du tressage de palmes Al Khous, sa silhouette decontractee inspiree du Bisht, ses poches cachees, sa doublure complete et sa fermeture optionnelle par bouton-pression dissimule. Concue et fabriquee a Abu Dhabi, United Arab Emirates, elle associe artisanat culturel et elegance intemporelle dans une piece pertinente pour le Golfe, l Europe et au-dela.',
  },
  {
    question: 'Pourquoi l Abaya Belgravia est-elle inspiree du Bisht ?',
    answer:
      'Le Bisht est l un des vetements les plus reconnaissables de la peninsule Arabique et il est depuis longtemps associe a la dignite, aux occasions et au savoir-faire artisanal. L Abaya Belgravia reinterprete les elements de cette silhouette dans une perspective contemporaine, creant une abaya ouverte sur le devant qui honore son inspiration tout en restant pertinente pour la facon dont les femmes s habillent aujourd hui.',
  },
  {
    question:
      'L Abaya Belgravia convient-elle au port quotidien, aux diners, aux mariages et aux occasions speciales ?',
    answer:
      'Oui. L Abaya Belgravia est concue pour l elegance quotidienne, les diners, les reunions, les mariages, les celebrations de fiancailles, les rassemblements de Eid, les occasions culturelles, les evenements de destination et les occasions speciales. Sa silhouette fluide inspiree du Bisht et sa finition tissee a la main lui permettent de passer naturellement entre la vie quotidienne dans le GCC, les voyages internationaux et les evenements d exception.',
  },
] satisfies AbayaSchemaLocalePack['faq']

const BELGRAVIA_FAQ_IT = [
  {
    question: "L Abaya Belgravia puo essere indossata fuori dal Medio Oriente?",
    answer:
      'Assolutamente. Pur affondando le sue radici nell artigianato Emirati, l Abaya Belgravia e stata creata per donne che si muovono tra culture, citta e occasioni. La sua silhouette senza tempo ispirata al Bisht consente di indossarla per una cena a London, un evento a Paris, un incontro estivo a Cannes, una celebrazione a Riyadh o nella vita quotidiana nel Golfo.',
  },
  {
    question: "L Abaya Belgravia puo essere personalizzata?",
    answer:
      'Si. Come tutte le abaya Bint Saeed, l Abaya Belgravia puo essere personalizzata con un nome, una data o un messaggio significativo inserito discretamente all interno della tasca nascosta, creando un dettaglio privato che rimane vicino a chi la indossa.',
  },
  {
    question: "Che cos e Al Khous e come si riflette nell Abaya Belgravia?",
    answer:
      'Al Khous e un artigianato tradizionale Emirati basato sull intreccio delle foglie di palma in forme decorative e funzionali. Il profilo intrecciato a mano dell Abaya Belgravia trae ispirazione da questa eredita, traducendo elementi dell intreccio delle foglie di palma in una abaya di lusso contemporanea e celebrando una tradizione tramandata di generazione in generazione.',
  },
  {
    question: "Cosa rende l Abaya Belgravia diversa dalle altre abaya?",
    answer:
      'L Abaya Belgravia si distingue per il suo profilo intrecciato a mano ispirato all intreccio di foglie di palma Al Khous, per la sua silhouette rilassata ispirata al Bisht, per le tasche nascoste, la fodera completa e la chiusura opzionale con bottone automatico nascosto. Progettata e realizzata ad Abu Dhabi, United Arab Emirates, unisce artigianalita culturale ed eleganza senza tempo in un capo attuale nel Golfo, in Europa e oltre.',
  },
  {
    question: "Perche l Abaya Belgravia e ispirata al Bisht?",
    answer:
      'Il Bisht e uno dei capi piu riconoscibili della Penisola Arabica ed e da tempo associato a dignita, occasioni e artigianato. L Abaya Belgravia reinterpreta elementi di questa silhouette attraverso una lente contemporanea, creando un abaya aperta sul davanti che onora la sua ispirazione rimanendo attuale rispetto al modo in cui le donne si vestono oggi.',
  },
  {
    question:
      "L Abaya Belgravia e adatta all uso quotidiano, a cene, matrimoni e occasioni speciali?",
    answer:
      'Si. L Abaya Belgravia e progettata per l eleganza quotidiana, cene, incontri, matrimoni, celebrazioni di fidanzamento, incontri di Eid, occasioni culturali, eventi in destinazione e occasioni speciali. La sua silhouette fluida ispirata al Bisht e il profilo intrecciato a mano le permettono di passare naturalmente tra la vita quotidiana nel GCC, i viaggi internazionali e gli eventi elevati.',
  },
] satisfies AbayaSchemaLocalePack['faq']

const BELGRAVIA_FAQ_ES = [
  {
    question: 'Puede llevarse la Abaya Belgravia fuera de Oriente Medio?',
    answer:
      'Absolutamente. Aunque esta arraigada en la artesania Emirati, la Abaya Belgravia fue creada para mujeres que se mueven entre culturas, ciudades y ocasiones. Su silueta atemporal inspirada en el Bisht permite llevarla para una cena en London, un evento en Paris, una reunion veraniega en Cannes, una celebracion en Riyadh o en la vida diaria del Golfo.',
  },
  {
    question: 'Se puede personalizar la Abaya Belgravia?',
    answer:
      'Si. Como todas las abayas Bint Saeed, la Abaya Belgravia puede personalizarse con un nombre, una fecha o un mensaje significativo colocado discretamente dentro del bolsillo oculto, creando un detalle privado que permanece cerca de quien la lleva.',
  },
  {
    question: 'Que es Al Khous y como se refleja en la Abaya Belgravia?',
    answer:
      'Al Khous es una artesania tradicional Emirati basada en tejer hojas de palma en formas decorativas y funcionales. El adorno tejido a mano de la Abaya Belgravia se inspira en este legado, traduciendo elementos del tejido de hojas de palma en una abaya de lujo contemporanea mientras celebra una tradicion transmitida de generacion en generacion.',
  },
  {
    question: 'Que hace diferente a la Abaya Belgravia de otras abayas?',
    answer:
      'La Abaya Belgravia se distingue por su adorno tejido a mano inspirado en el tejido de hojas de palma Al Khous, su silueta relajada inspirada en el Bisht, bolsillos ocultos, forro completo y cierre opcional con broche de presion oculto. Disenada y confeccionada en Abu Dhabi, United Arab Emirates, combina artesania cultural con elegancia atemporal en una pieza relevante en el Golfo, Europa y mas alla.',
  },
  {
    question: 'Por que la Abaya Belgravia esta inspirada en el Bisht?',
    answer:
      'El Bisht es una de las prendas mas reconocibles de la Peninsula Arabiga y durante mucho tiempo se ha asociado con dignidad, ocasion y artesania. La Abaya Belgravia reinterpreta elementos de esta silueta con una mirada contemporanea, creando una abaya abierta al frente que honra su inspiracion y sigue siendo relevante para la forma en que visten las mujeres hoy.',
  },
  {
    question:
      'Es la Abaya Belgravia adecuada para uso diario, cenas, bodas y ocasiones especiales?',
    answer:
      'Si. La Abaya Belgravia esta disenada para elegancia diaria, cenas, reuniones, bodas, celebraciones de compromiso, encuentros de Eid, ocasiones culturales, eventos de destino y ocasiones especiales. Su silueta fluida inspirada en el Bisht y su adorno tejido a mano le permiten pasar con naturalidad entre la vida diaria del GCC, los viajes internacionales y los eventos de alto nivel.',
  },
] satisfies AbayaSchemaLocalePack['faq']

const BELGRAVIA_FAQ_RU = [
  {
    question: 'Можно ли носить Belgravia Abaya за пределами Ближнего Востока?',
    answer:
      'Безусловно. Несмотря на глубокие корни в ремесленной культуре Emirati, Belgravia Abaya создана для женщин, которые живут между культурами, городами и форматами мероприятий. Ее вневременной силуэт в стиле Bisht позволяет надевать ее на ужин в London, событие в Paris, летнюю встречу в Cannes, празднование в Riyadh или в повседневной жизни в регионе Gulf.',
  },
  {
    question: 'Можно ли персонализировать Belgravia Abaya?',
    answer:
      'Да. Как и все абаи Bint Saeed, Belgravia Abaya можно персонализировать: добавить имя, дату или значимое сообщение, деликатно размещенное внутри скрытого кармана. Так создается личная деталь, которая остается близкой обладательнице.',
  },
  {
    question: 'Что такое Al Khous и как это отражено в Belgravia Abaya?',
    answer:
      'Al Khous - это традиционное ремесло Emirati, основанное на плетении пальмовых листьев в декоративные и функциональные формы. Отделка ручного плетения Belgravia Abaya вдохновлена этим наследием и переводит элементы пальмового плетения в современную люксовую абаю, одновременно прославляя традицию, передающуюся из поколения в поколение.',
  },
  {
    question: 'Чем Belgravia Abaya отличается от других абай?',
    answer:
      'Belgravia Abaya выделяется отделкой ручного плетения, вдохновленной пальмовым плетением Al Khous, свободным силуэтом в стиле Bisht, скрытыми карманами, полной подкладкой и опциональной скрытой застежкой на кнопку. Модель спроектирована и произведена в Abu Dhabi, United Arab Emirates, объединяя культурное ремесло и вневременную элегантность в вещи, актуальной для GCC, Европы и других регионов.',
  },
  {
    question: 'Почему Belgravia Abaya вдохновлена Bisht?',
    answer:
      'Bisht - один из самых узнаваемых предметов одежды Аравийского полуострова, исторически связанный с достоинством, торжественными случаями и мастерством. Belgravia Abaya переосмысляет элементы этого силуэта в современном ключе, создавая абаю с открытым передом, которая уважает источник вдохновения и остается актуальной для того, как женщины одеваются сегодня.',
  },
  {
    question: 'Подходит ли Belgravia Abaya для повседневной носки, ужинов, свадеб и особых случаев?',
    answer:
      'Да. Belgravia Abaya создана для повседневной элегантности, ужинов, встреч, свадеб, помолвок, встреч на Eid, культурных мероприятий, destination events и особых случаев. Ее струящийся силуэт в стиле Bisht и отделка ручного плетения позволяют естественно переходить между повседневной жизнью в GCC, международными поездками и событиями повышенного формата.',
  },
] satisfies AbayaSchemaLocalePack['faq']

const BELGRAVIA_FAQ_ZH = [
  {
    question: 'Belgravia Abaya 可以在中东以外穿着吗？',
    answer:
      '当然可以。Belgravia Abaya 植根于 Emirati 工艺传统，同时为穿梭于不同文化、城市与场合的女性而设计。其经典的 Bisht 灵感廓形可用于 London 晚宴、Paris 活动、Cannes 夏日聚会、Riyadh 庆典，亦适合海湾地区的日常穿着。',
  },
  {
    question: 'Belgravia Abaya 可以个性化定制吗？',
    answer:
      '可以。与所有 Bint Saeed abaya 一样，Belgravia Abaya 可在隐藏口袋内低调加入姓名、日期或有意义的信息，形成仅属于穿着者的私密细节。',
  },
  {
    question: '什么是 Al Khous？它如何体现在 Belgravia Abaya 中？',
    answer:
      'Al Khous 是一种传统 Emirati 工艺，以棕榈叶编织成装饰性与功能性形态。Belgravia Abaya 的手工织边灵感源自这一传承，将棕榈叶编织元素转化为当代奢华 abaya 设计，同时礼赞代代相传的传统。',
  },
  {
    question: 'Belgravia Abaya 与其他 abaya 有何不同？',
    answer:
      'Belgravia Abaya 的独特之处在于其受 Al Khous 棕榈叶编织启发的手工织边、宽松的 Bisht 灵感廓形、隐藏口袋、全里衬以及可选隐藏式按扣闭合。该款于 Abu Dhabi, United Arab Emirates 设计并制作，融合文化工艺与永恒优雅，适用于海湾、欧洲及更广地区。',
  },
  {
    question: '为什么 Belgravia Abaya 以 Bisht 为灵感？',
    answer:
      'Bisht 是阿拉伯半岛最具辨识度的服饰之一，长期与庄重、礼仪和工艺精神相联系。Belgravia Abaya 以当代视角重释这一轮廓，打造出前开式 abaya，在致敬灵感来源的同时，契合当代女性的穿衣方式。',
  },
  {
    question: 'Belgravia Abaya 适合日常穿着、晚宴、婚礼和特殊场合吗？',
    answer:
      '是的。Belgravia Abaya 适用于日常优雅穿搭、晚宴、聚会、婚礼、订婚庆典、Eid 聚会、文化场合、目的地活动与特殊场合。其流动感 Bisht 灵感廓形与手工织边使其可自然切换于 GCC 日常生活、国际旅行及高规格活动之间。',
  },
] satisfies AbayaSchemaLocalePack['faq']

const BELGRAVIA_FAQ_DE = [
  {
    question: 'Kann die Belgravia Abaya auch ausserhalb des Nahen Ostens getragen werden?',
    answer:
      'Absolut. Obwohl sie in emiratischer Handwerkskunst verwurzelt ist, wurde die Belgravia Abaya fur Frauen geschaffen, die sich zwischen Kulturen, Stadten und Anlassen bewegen. Ihre zeitlose, vom Bisht inspirierte Silhouette erlaubt das Tragen bei einem Dinner in London, einem Event in Paris, einem Sommer-Treffen in Cannes, einer Feier in Riyadh oder im Alltag im Golfraum.',
  },
  {
    question: 'Kann die Belgravia Abaya personalisiert werden?',
    answer:
      'Ja. Wie alle Bint Saeed Abayas kann die Belgravia Abaya mit einem Namen, Datum oder einer bedeutungsvollen Nachricht personalisiert werden, die diskret in der versteckten Tasche platziert wird und so ein privates Detail schafft, das der Tragerin nah bleibt.',
  },
  {
    question: 'Was ist Al Khous und wie spiegelt es sich in der Belgravia Abaya wider?',
    answer:
      'Al Khous ist ein traditionelles emiratisches Handwerk, das auf dem Flechten von Palmblattern zu dekorativen und funktionalen Formen basiert. Die handgewebte Besatzkante der Belgravia Abaya ist von diesem Erbe inspiriert und ubertragt Elemente des Palmblattflechtens in eine zeitgenossische Luxus-Abaya, wahrend eine uber Generationen weitergegebene Tradition gefeiert wird.',
  },
  {
    question: 'Was unterscheidet die Belgravia Abaya von anderen Abayas?',
    answer:
      'Die Belgravia Abaya zeichnet sich durch ihre handgewebte, von Al Khous-Palmblattflechtung inspirierte Besatzkante, ihre entspannte, vom Bisht inspirierte Silhouette, versteckte Taschen, Vollfutter und optionale verdeckte Druckknopf-Schliessung aus. Entworfen und gefertigt in Abu Dhabi, United Arab Emirates, verbindet sie kulturelle Handwerkskunst mit zeitloser Eleganz und wirkt im Golfraum, in Europa und daruber hinaus gleichermassen relevant.',
  },
  {
    question: 'Warum ist die Belgravia Abaya vom Bisht inspiriert?',
    answer:
      'Der Bisht ist eines der bekanntesten Kleidungsstucke der Arabischen Halbinsel und wird seit Langem mit Wurde, Anlass und Handwerkskunst verbunden. Die Belgravia Abaya interpretiert Elemente dieser Silhouette aus zeitgenossischer Perspektive neu und schafft eine vorne offene Abaya, die ihre Inspiration ehrt und zugleich fur die heutige Art des Kleidens relevant bleibt.',
  },
  {
    question:
      'Ist die Belgravia Abaya fur den Alltag, Dinner, Hochzeiten und besondere Anlasse geeignet?',
    answer:
      'Ja. Die Belgravia Abaya ist fur alltagliche Eleganz, Dinner, Zusammenkunfte, Hochzeiten, Verlobungsfeiern, Eid-Zusammenkunfte, kulturelle Anlasse, Destination-Events und besondere Gelegenheiten konzipiert. Ihre fliessende, vom Bisht inspirierte Silhouette und die handgewebte Besatzkante ermoglichen einen naturlichen Wechsel zwischen dem GCC-Alltag, internationalen Reisen und gehobenen Veranstaltungen.',
  },
] satisfies AbayaSchemaLocalePack['faq']

const BELGRAVIA_FAQ_NL = [
  {
    question: 'Kan de Belgravia Abaya buiten het Midden-Oosten worden gedragen?',
    answer:
      'Absoluut. Hoewel geworteld in Emirati vakmanschap, is de Belgravia Abaya ontworpen voor vrouwen die bewegen tussen culturen, steden en gelegenheden. Het tijdloze op de Bisht geinspireerde silhouet maakt haar geschikt voor een diner in London, een event in Paris, een zomerse bijeenkomst in Cannes, een viering in Riyadh of het dagelijks leven in de Golfregio.',
  },
  {
    question: 'Kan de Belgravia Abaya worden gepersonaliseerd?',
    answer:
      'Ja. Zoals alle Bint Saeed abaya s kan de Belgravia Abaya worden gepersonaliseerd met een naam, datum of betekenisvolle boodschap, discreet geplaatst in de verborgen zak als een prive detail dat dicht bij de draagster blijft.',
  },
  {
    question: 'Wat is Al Khous en hoe komt dat terug in de Belgravia Abaya?',
    answer:
      'Al Khous is een traditioneel Emirati ambacht gebaseerd op het vlechten van palmbladeren tot decoratieve en functionele vormen. De handgeweven afwerking van de Belgravia Abaya is geinspireerd op dit erfgoed en vertaalt elementen van palmbladweefwerk naar een eigentijdse luxe abaya, terwijl een traditie wordt gevierd die van generatie op generatie is doorgegeven.',
  },
  {
    question: 'Wat maakt de Belgravia Abaya anders dan andere abaya s?',
    answer:
      'De Belgravia Abaya onderscheidt zich door handgeweven afwerking geinspireerd op Al Khous-palmbladweefwerk, een ontspannen op de Bisht geinspireerd silhouet, verborgen zakken, volledige voering en een optionele verborgen drukknoopsluiting. Ontworpen en gemaakt in Abu Dhabi, United Arab Emirates, verbindt zij cultureel vakmanschap met tijdloze elegantie in een stuk dat relevant is in de Golf, Europa en daarbuiten.',
  },
  {
    question: 'Waarom is de Belgravia Abaya geinspireerd op de Bisht?',
    answer:
      'De Bisht is een van de meest herkenbare kledingstukken van het Arabisch Schiereiland en wordt al lang geassocieerd met waardigheid, gelegenheden en vakmanschap. De Belgravia Abaya herinterpreteert elementen van dit silhouet door een eigentijdse lens en creert een openvallende abaya die haar inspiratie eert en tegelijk relevant blijft voor hoe vrouwen zich vandaag kleden.',
  },
  {
    question:
      'Is de Belgravia Abaya geschikt voor dagelijks gebruik, diners, bruiloften en speciale gelegenheden?',
    answer:
      'Ja. De Belgravia Abaya is ontworpen voor dagelijkse elegantie, diners, bijeenkomsten, bruiloften, verlovingsvieringen, Eid-bijeenkomsten, culturele gelegenheden, destination events en speciale momenten. Het vloeiende op de Bisht geinspireerde silhouet en de handgeweven afwerking laten haar natuurlijk bewegen tussen het dagelijks leven in de GCC, internationale reizen en elevated events.',
  },
] satisfies AbayaSchemaLocalePack['faq']

const BELGRAVIA_FAQ_PT = [
  {
    question: 'A Belgravia Abaya pode ser usada fora do Medio Oriente?',
    answer:
      'Absolutamente. Embora enraizada no artesanato Emirati, a Belgravia Abaya foi criada para mulheres que transitam entre culturas, cidades e ocasioes. A sua silhueta intemporal inspirada no Bisht permite usá-la para um jantar em London, um evento em Paris, um encontro de verao em Cannes, uma celebracao em Riyadh ou para a vida quotidiana no Golfo.',
  },
  {
    question: 'A Belgravia Abaya pode ser personalizada?',
    answer:
      'Sim. Como todas as abayas Bint Saeed, a Belgravia Abaya pode ser personalizada com um nome, data ou mensagem significativa colocada discretamente dentro do bolso oculto, criando um detalhe privado que permanece proximo da utilizadora.',
  },
  {
    question: 'O que e Al Khous e como se reflete na Belgravia Abaya?',
    answer:
      'Al Khous e um artesanato tradicional Emirati baseado em tecer folhas de palmeira em formas decorativas e funcionais. O acabamento tecido a mao da Belgravia Abaya inspira-se neste legado, traduzindo elementos da tecelagem de folhas de palmeira para uma abaya de luxo contemporanea, ao mesmo tempo que celebra uma tradicao transmitida entre geracoes.',
  },
  {
    question: 'O que torna a Belgravia Abaya diferente de outras abayas?',
    answer:
      'A Belgravia Abaya distingue-se pelo acabamento tecido a mao inspirado na tecelagem de folhas de palmeira Al Khous, pela sua silhueta descontraida inspirada no Bisht, bolsos ocultos, forro completo e fecho opcional com botao de pressao oculto. Desenhada e produzida em Abu Dhabi, United Arab Emirates, combina artesanato cultural com elegancia intemporal numa peca relevante no Golfo, na Europa e alem.',
  },
  {
    question: 'Porque e que a Belgravia Abaya e inspirada no Bisht?',
    answer:
      'O Bisht e uma das pecas de vestuario mais reconheciveis da Peninsula Arabica e esta ha muito associado a dignidade, ocasiao e artesanato. A Belgravia Abaya reinterpreta elementos desta silhueta atraves de uma lente contemporanea, criando uma abaya aberta na frente que honra a sua inspiracao e permanece relevante para a forma como as mulheres se vestem hoje.',
  },
  {
    question:
      'A Belgravia Abaya e adequada para uso diario, jantares, casamentos e ocasioes especiais?',
    answer:
      'Sim. A Belgravia Abaya foi concebida para elegancia quotidiana, jantares, encontros, casamentos, celebracoes de noivado, encontros de Eid, ocasioes culturais, eventos de destino e ocasioes especiais. A sua silhueta fluida inspirada no Bisht e o acabamento tecido a mao permitem uma transicao natural entre a vida diaria no GCC, viagens internacionais e eventos elevados.',
  },
] satisfies AbayaSchemaLocalePack['faq']

const BELGRAVIA_FAQ_MS = [
  {
    question: 'Bolehkah Abaya Belgravia dipakai di luar Timur Tengah?',
    answer:
      'Sudah tentu. Berpunca daripada kraftangan Emirati, Abaya Belgravia direka untuk wanita yang bergerak antara budaya, bandar, dan majlis. Siluet terinspirasi Bisht yang abadi membolehkannya dipakai untuk majlis malam di London, acara di Paris, sambutan di Riyadh, atau kehidupan harian di Teluk.',
  },
  {
    question: 'Bolehkah Abaya Belgravia diperibadikan?',
    answer:
      'Ya. Seperti semua abaya Bint Saeed, Abaya Belgravia boleh diperibadikan dengan nama, tarikh, atau mesej bermakna di dalam poket tersembunyi — butiran peribadi yang kekal dekat dengan pemakainya.',
  },
  {
    question: 'Apakah Al Khous dan bagaimana ia tercermin pada Abaya Belgravia?',
    answer:
      'Al Khous ialah kraftangan tradisional Emirati berdasarkan tenunan pelepah palem. Hiasan tenunan tangan Abaya Belgravia terinspirasi warisan ini, menterjemahkan elemen tenunan pelepah palem ke dalam abaya mewah kontemporari sambil meraikan tradisi yang diwarisi merentasi generasi.',
  },
  {
    question: 'Apakah yang membezakan Abaya Belgravia daripada abaya lain?',
    answer:
      'Abaya Belgravia dibezakan oleh hiasan tenunan tangan terinspirasi tenunan Al Khous, siluet terinspirasi Bisht yang santai, poket tersembunyi, lapisan penuh, dan pilihan penutup butang snap tersembunyi. Direka dan dihasilkan di Abu Dhabi, Emiriah Arab Bersatu, menggabungkan kraftangan budaya dengan keanggunan abadi.',
  },
  {
    question: 'Mengapakah Abaya Belgravia terinspirasi Bisht?',
    answer:
      'Bisht ialah salah satu pakaian paling dikenali di Semenanjung Arab, lama dikaitkan dengan maruah, majlis, dan kraftangan. Abaya Belgravia mentafsirkan semula elemen siluet ini melalui lensa kontemporari — abaya depan terbuka yang menghormati inspirasinya sambil kekal relevan bagi cara berpakaian wanita hari ini.',
  },
  {
    question:
      'Adakah Abaya Belgravia sesuai untuk pemakaian harian, majlis makan malam, perkahwinan, dan acara khas?',
    answer:
      'Ya. Abaya Belgravia direka untuk keanggunan harian, majlis makan malam, pertemuan, perkahwinan, sambutan pertunangan, perhimpunan Aidilfitri, acara budaya, acara destinasi, dan majlis istimewa. Siluet mengalir terinspirasi Bisht dan hiasan tenunan tangan membolehkannya bergerak antara kehidupan GCC, perjalanan antarabangsa, dan acara formal.',
  },
] satisfies AbayaSchemaLocalePack['faq']

const BELGRAVIA_FAQ_ID = [
  {
    question: 'Apakah Abaya Belgravia bisa dikenakan di luar Timur Tengah?',
    answer:
      'Tentu. Berakar pada kerajinan Emirati, Abaya Belgravia dirancang untuk wanita yang bergerak antar budaya, kota, dan acara. Siluet terinspirasi Bisht yang abadi memungkinkannya dikenakan untuk makan malam di London, acara di Paris, perayaan di Riyadh, atau kehidupan sehari-hari di Teluk.',
  },
  {
    question: 'Apakah Abaya Belgravia bisa dipersonalisasi?',
    answer:
      'Ya. Seperti semua abaya Bint Saeed, Abaya Belgravia dapat dipersonalisasi dengan nama, tanggal, atau pesan bermakna di dalam saku tersembunyi — detail privat yang tetap dekat dengan pemakainya.',
  },
  {
    question: 'Apa itu Al Khous dan bagaimana tercermin pada Abaya Belgravia?',
    answer:
      'Al Khous adalah kerajinan tradisional Emirati berbasis tenun pelepah palem. Trim tenun tangan Abaya Belgravia terinspirasi warisan ini, menerjemahkan elemen tenun pelepah palem ke abaya mewah kontemporer sambil merayakan tradisi yang diwariskan lintas generasi.',
  },
  {
    question: 'Apa yang membedakan Abaya Belgravia dari abaya lainnya?',
    answer:
      'Abaya Belgravia dibedakan oleh trim tenun tangan terinspirasi tenun Al Khous, siluet terinspirasi Bisht yang santai, saku tersembunyi, lining penuh, dan opsi kancing snap tersembunyi. Dirancang dan dibuat di Abu Dhabi, Uni Emirat Arab, menggabungkan kerajinan budaya dengan keanggunan abadi.',
  },
  {
    question: 'Mengapa Abaya Belgravia terinspirasi Bisht?',
    answer:
      'Bisht adalah salah satu garment paling dikenal di Semenanjung Arabia, lama dikaitkan dengan martabat, acara, dan kerajinan. Abaya Belgravia menafsirkan ulang elemen siluet ini melalui lensa kontemporer — abaya depan terbuka yang menghormati inspirasinya sambil relevan bagi cara berpakaian wanita hari ini.',
  },
  {
    question:
      'Apakah Abaya Belgravia cocok untuk pemakaian harian, makan malam, pernikahan, dan acara khusus?',
    answer:
      'Ya. Abaya Belgravia dirancang untuk keanggunan sehari-hari, makan malam, pertemuan, pernikahan, perayaan tunangan, pertemuan Idulfitri, acara budaya, acara destinasi, dan acara khusus. Siluet mengalir terinspirasi Bisht dan trim tenun tangan memungkinkannya bergerak antara kehidupan GCC, perjalanan internasional, dan acara formal.',
  },
] satisfies AbayaSchemaLocalePack['faq']

function belgraviaPack(
  locale: AppLocale,
  facts: AbayaSchemaLocalePack['facts'],
  faq: AbayaSchemaLocalePack['faq'],
): AbayaSchemaLocalePack {
  return { facts, faq: patchAlKhousHeritageFaq(faq, 'belgravia', locale) }
}

export const BELGRAVIA_SCHEMA_PACKS: Record<AppLocale, AbayaSchemaLocalePack> = {
  en: belgraviaPack('en', BELGRAVIA_FACTS_EN, BELGRAVIA_FAQ_EN),
  ar: belgraviaPack('ar', BELGRAVIA_FACTS_AR, BELGRAVIA_FAQ_AR),
  fr: belgraviaPack('fr', BELGRAVIA_FACTS_FR, BELGRAVIA_FAQ_FR),
  it: belgraviaPack('it', BELGRAVIA_FACTS_IT, BELGRAVIA_FAQ_IT),
  es: belgraviaPack('es', BELGRAVIA_FACTS_ES, BELGRAVIA_FAQ_ES),
  ru: belgraviaPack('ru', BELGRAVIA_FACTS_RU, BELGRAVIA_FAQ_RU),
  zh: belgraviaPack('zh', BELGRAVIA_FACTS_ZH, BELGRAVIA_FAQ_ZH),
  de: belgraviaPack('de', BELGRAVIA_FACTS_DE, BELGRAVIA_FAQ_DE),
  nl: belgraviaPack('nl', BELGRAVIA_FACTS_NL, BELGRAVIA_FAQ_NL),
  pt: belgraviaPack('pt', BELGRAVIA_FACTS_PT, BELGRAVIA_FAQ_PT),
  id: belgraviaPack('id', BELGRAVIA_FACTS_ID, BELGRAVIA_FAQ_ID),
  ms: belgraviaPack('ms', BELGRAVIA_FACTS_MS, BELGRAVIA_FAQ_MS),
}
