import type { AppLocale } from '@/lib/i18n/routing'
import { patchAlKhousHeritageFaq } from '@/lib/products/alKhousHeritageFaqI18n'
import type { AbayaSchemaLocalePack } from '@/lib/products/abayaSchemaPackResolve'

const KENSINGTON_MATERIAL =
  'Outer: 80% Polyester, 20% Viscose; lining: 70% Polyester, 30% Viscose'

const KENSINGTON_FACTS_EN: AbayaSchemaLocalePack['facts'] = {
  productType: 'Structured black abaya inspired by tailored outerwear',
  productCategory: 'Abaya, Outerwear, Jacket, Blazer, Long Blazer, Blazer Abaya',
  neckline: 'Round neckline',
  fit: 'Structured yet fluid fit with a clean elongated silhouette, light shoulder padding, and blazer-inspired proportions.',
  maximumGarmentLength: '138 cm / 54.5 inches',
  modelHeight: '155 cm / 61 inches',
  modelWears: 'XS',
  closure: 'Front snap-button closure',
  pockets: 'Two hidden side pockets',
  personalisation:
    'Optional personalisation on a hidden interior label with a name, date, or meaningful message.',
  lining: 'Fully lined with soft crepe lining for comfort and ease of wear.',
  trim: 'Bint Saeed signature woven braid inspired by traditional Al Khous palm frond weaving, interpreted through subtle black glitter organza weave detailing.',
  stylingDetail:
    'Structured Deep Black abaya with round neckline, light shoulder padding, front snap-button closure, Al Khous-inspired woven trim across the chest and sleeves, two hidden side pockets, soft crepe lining, and optional hidden interior personalisation label.',
  care: 'Professional dry clean only.',
  material: KENSINGTON_MATERIAL,
  suitableFor:
    'Everyday elegance, business settings, dinners, gatherings, travel, cultural events, weddings, Eid gatherings, celebrations, special occasions, and international occasionwear.',
}

const KENSINGTON_FACTS_ID: AbayaSchemaLocalePack['facts'] = {
  productType: 'Abaya hitam terstruktur terinspirasi pakaian luar yang dijahit dengan sempurna',
  productCategory: 'Abaya, Pakaian Luar, Jaket, Blazer, Blazer Panjang, Abaya Blazer',
  neckline: 'Leher bulat',
  fit: 'Potongan terstruktur namun mengalir dengan siluet memanjang yang bersih, bantalan bahu ringan, dan proporsi terinspirasi blazer.',
  maximumGarmentLength: '138 cm / 54,5 inci',
  modelHeight: '155 cm / 61 inci',
  modelWears: 'XS',
  closure: 'Penutup kancing snap depan',
  pockets: 'Dua saku samping tersembunyi',
  personalisation:
    'Personalisasi opsional pada label interior tersembunyi dengan nama, tanggal, atau pesan bermakna.',
  lining: 'Berlapis penuh dengan lapisan kain krep lembut untuk kenyamanan dan kemudahan pemakaian.',
  trim: 'Kepang tenun khas Bint Saeed terinspirasi anyaman pelepah palem Al Khous tradisional, diinterpretasikan melalui detail tenun organza glitter hitam yang halus.',
  stylingDetail:
    'Abaya Hitam Dalam yang terstruktur dengan leher bulat, bantalan bahu ringan, penutup kancing snap depan, trim tenun terinspirasi Al Khous di dada dan lengan, dua saku samping tersembunyi, lapisan kain krep lembut, dan label personalisasi interior tersembunyi opsional.',
  care: 'Hanya cuci kering profesional.',
  material: KENSINGTON_MATERIAL,
  suitableFor:
    'Keanggunan sehari-hari, suasana bisnis, makan malam, pertemuan, perjalanan, acara budaya, pernikahan, pertemuan Idulfitri, perayaan, acara khusus, dan busana acara internasional.',
}

const KENSINGTON_FACTS_MS: AbayaSchemaLocalePack['facts'] = {
  productType: 'Abaya hitam berstruktur terinspirasi pakaian luar yang dijahit dengan teliti',
  productCategory: 'Abaya, Pakaian Luar, Jaket, Blazer, Blazer Panjang, Abaya Blazer',
  neckline: 'Leher bulat',
  fit: 'Potongan berstruktur namun mengalir dengan siluet memanjang yang bersih, padding bahu ringan, dan perkadaran terinspirasi blazer.',
  maximumGarmentLength: '138 cm / 54.5 inci',
  modelHeight: '155 cm / 61 inci',
  modelWears: 'XS',
  closure: 'Penutup butang snap depan',
  pockets: 'Dua poket sisi tersembunyi',
  personalisation:
    'Personalisasi pilihan pada label dalaman tersembunyi dengan nama, tarikh, atau mesej bermakna.',
  lining: 'Berlapis penuh dengan lapisan kain krep lembut untuk keselesaan dan kemudahan pemakaian.',
  trim: 'Kepang tenunan khas Bint Saeed terinspirasi tenunan pelepah palem Al Khous tradisional, ditafsirkan melalui perincian tenunan organza glitter hitam yang halus.',
  stylingDetail:
    'Abaya Hitam Dalam yang berstruktur dengan leher bulat, padding bahu ringan, penutup butang snap depan, trim tenunan terinspirasi Al Khous di dada dan lengan, dua poket sisi tersembunyi, lapisan kain krep lembut, dan label personalisasi dalaman tersembunyi pilihan.',
  care: 'Basuh kering profesional sahaja.',
  material: KENSINGTON_MATERIAL,
  suitableFor:
    'Keanggunan harian, suasana perniagaan, majlis makan malam, pertemuan, perjalanan, acara budaya, perkahwinan, perhimpunan Aidilfitri, perayaan, majlis istimewa, dan busana acara antarabangsa.',
}

const KENSINGTON_FACTS_AR: AbayaSchemaLocalePack['facts'] = {
  productType: 'عباية سوداء مُهيكلة مستوحاة من الملابس الخارجية المفصلة بإتقان',
  productCategory: 'عباية، ملابس خارجية، جاكيت، بليزر، بليزر طويل، عباية بليزر',
  neckline: 'ياقة دائرية',
  fit: 'قَصّة مُهيكلة لكنها انسيابية مع هيئة طويلة ونظيفة، وحشوات كتف خفيفة، وتناسبات مستوحاة من البليزر.',
  maximumGarmentLength: '138 سم / 54.5 بوصة',
  modelHeight: '155 سم / 61 بوصة',
  modelWears: 'XS',
  closure: 'إغلاق أمامي بأزرار كبس',
  pockets: 'جيبان جانبيان مخفيان',
  personalisation: 'إمكانية تخصيص اختيارية على بطاقة داخلية مخفية تتضمن اسمًا أو تاريخًا أو رسالة ذات معنى.',
  lining: 'مبطنة بالكامل ببطانة كريب ناعمة لراحة وسهولة في الارتداء.',
  trim: 'ضفيرة منسوجة مميزة من Bint Saeed مستوحاة من فن نسج سعف النخيل التقليدي في Al Khous، ومُعاد تقديمها عبر تفاصيل نسج أورجانزا سوداء لامعة بشكل ناعم.',
  stylingDetail:
    'عباية Deep Black مُهيكلة بياقة دائرية، وحشوات كتف خفيفة، وإغلاق أمامي بأزرار كبس، وتطريز/حياكة منسوجة مستوحاة من Al Khous عبر الصدر والأكمام، وجيبين جانبيين مخفيين، وبطانة كريب ناعمة، وبطاقة تخصيص داخلية مخفية اختيارية.',
  care: 'تنظيف جاف احترافي فقط.',
  material: KENSINGTON_MATERIAL,
  suitableFor:
    'الأناقة اليومية، بيئات العمل، حفلات العشاء، التجمعات، السفر، الفعاليات الثقافية، حفلات الزفاف، تجمعات العيد، الاحتفالات، المناسبات الخاصة، وإطلالات المناسبات الدولية.',
}

const KENSINGTON_FACTS_FR: AbayaSchemaLocalePack['facts'] = {
  productType: "Abaya noire structurée inspirée des pièces d'extérieur tailleur",
  productCategory: 'Abaya, Vêtement d’extérieur, Veste, Blazer, Blazer Long, Abaya Blazer',
  neckline: 'Encolure ronde',
  fit: 'Coupe structurée mais fluide avec une silhouette allongée et épurée, de légères épaulettes et des proportions inspirées du blazer.',
  maximumGarmentLength: '138 cm / 54.5 pouces',
  modelHeight: '155 cm / 61 pouces',
  modelWears: 'XS',
  closure: 'Fermeture frontale à boutons-pression',
  pockets: 'Deux poches latérales dissimulées',
  personalisation:
    'Personnalisation en option sur une étiquette intérieure cachée avec un nom, une date ou un message significatif.',
  lining: 'Entièrement doublée d’une douce doublure crêpe pour le confort et la facilité de port.',
  trim: 'Galon tissé signature Bint Saeed inspiré de l’art traditionnel Al Khous de tressage des palmes, interprété par de subtils détails de tissage en organza noir pailleté.',
  stylingDetail:
    'Abaya Deep Black structurée avec encolure ronde, légères épaulettes, fermeture frontale à boutons-pression, finitions tissées inspirées d’Al Khous sur la poitrine et les manches, deux poches latérales dissimulées, doublure crêpe douce et étiquette intérieure cachée de personnalisation en option.',
  care: 'Nettoyage à sec professionnel uniquement.',
  material: KENSINGTON_MATERIAL,
  suitableFor:
    'Élégance au quotidien, environnements professionnels, dîners, rassemblements, voyages, événements culturels, mariages, rassemblements de l’Aïd, célébrations, occasions spéciales et tenues d’occasion internationales.',
}

const KENSINGTON_FACTS_IT: AbayaSchemaLocalePack['facts'] = {
  productType: "Abaya nera strutturata ispirata all'outerwear sartoriale",
  productCategory: 'Abaya, Capospalla, Giacca, Blazer, Blazer Lungo, Abaya Blazer',
  neckline: 'Scollo rotondo',
  fit: 'Vestibilità strutturata ma fluida con una silhouette lunga e pulita, leggera imbottitura sulle spalle e proporzioni ispirate al blazer.',
  maximumGarmentLength: '138 cm / 54.5 pollici',
  modelHeight: '155 cm / 61 pollici',
  modelWears: 'XS',
  closure: 'Chiusura frontale con bottoni a pressione',
  pockets: 'Due tasche laterali nascoste',
  personalisation:
    'Personalizzazione opzionale su un’etichetta interna nascosta con nome, data o messaggio significativo.',
  lining: 'Interamente foderata con morbida fodera in crêpe per comfort e praticità.',
  trim: 'Treccia intrecciata signature Bint Saeed ispirata alla tradizionale arte Al Khous dell’intreccio di foglie di palma, reinterpretata con sottili dettagli in organza nera glitterata.',
  stylingDetail:
    'Abaya Deep Black strutturata con scollo rotondo, leggera imbottitura sulle spalle, chiusura frontale con bottoni a pressione, profili intrecciati ispirati ad Al Khous su petto e maniche, due tasche laterali nascoste, morbida fodera in crêpe ed etichetta interna nascosta per personalizzazione opzionale.',
  care: 'Solo lavaggio a secco professionale.',
  material: KENSINGTON_MATERIAL,
  suitableFor:
    'Eleganza quotidiana, ambienti business, cene, incontri, viaggi, eventi culturali, matrimoni, incontri Eid, celebrazioni, occasioni speciali e occasionwear internazionale.',
}

const KENSINGTON_FACTS_ES: AbayaSchemaLocalePack['facts'] = {
  productType: 'Abaya negra estructurada inspirada en prendas exteriores de sastrería',
  productCategory: 'Abaya, Prenda Exterior, Chaqueta, Blazer, Blazer Largo, Abaya Blazer',
  neckline: 'Escote redondo',
  fit: 'Corte estructurado pero fluido con una silueta alargada y limpia, ligero relleno en hombros y proporciones inspiradas en el blazer.',
  maximumGarmentLength: '138 cm / 54.5 pulgadas',
  modelHeight: '155 cm / 61 pulgadas',
  modelWears: 'XS',
  closure: 'Cierre frontal con botones a presión',
  pockets: 'Dos bolsillos laterales ocultos',
  personalisation:
    'Personalización opcional en una etiqueta interior oculta con nombre, fecha o mensaje significativo.',
  lining: 'Completamente forrada con suave forro de crepé para comodidad y facilidad de uso.',
  trim: 'Trenza tejida distintiva de Bint Saeed inspirada en el arte tradicional Al Khous de tejer hojas de palma, reinterpretada mediante sutiles detalles de organza negra con brillo.',
  stylingDetail:
    'Abaya Deep Black estructurada con escote redondo, ligero relleno en hombros, cierre frontal con botones a presión, ribete tejido inspirado en Al Khous en pecho y mangas, dos bolsillos laterales ocultos, suave forro de crepé y etiqueta interior oculta opcional para personalización.',
  care: 'Solo limpieza en seco profesional.',
  material: KENSINGTON_MATERIAL,
  suitableFor:
    'Elegancia diaria, entornos de negocios, cenas, reuniones, viajes, eventos culturales, bodas, reuniones de Eid, celebraciones, ocasiones especiales y moda internacional para ocasiones.',
}

const KENSINGTON_FACTS_RU: AbayaSchemaLocalePack['facts'] = {
  productType: 'Структурная черная абайя, вдохновленная кроем верхней одежды',
  productCategory: 'Абайя, Верхняя одежда, Жакет, Блейзер, Длинный Блейзер, Абайя-Блейзер',
  neckline: 'Круглый вырез',
  fit: 'Структурный, но пластичный крой с чистым вытянутым силуэтом, легкими подплечниками и пропорциями в стиле блейзера.',
  maximumGarmentLength: '138 см / 54.5 дюйма',
  modelHeight: '155 см / 61 дюйм',
  modelWears: 'XS',
  closure: 'Передняя застежка на кнопки',
  pockets: 'Два скрытых боковых кармана',
  personalisation:
    'Опциональная персонализация на скрытой внутренней бирке с именем, датой или значимым сообщением.',
  lining: 'Полностью на подкладке из мягкого крепа для комфорта и удобства в носке.',
  trim: 'Фирменная плетеная тесьма Bint Saeed, вдохновленная традиционным искусством Al Khous по плетению пальмовых листьев, интерпретированная через деликатные детали из черной блестящей органзы.',
  stylingDetail:
    'Структурная абайя Deep Black с круглым вырезом, легкими подплечниками, передней застежкой на кнопки, плетеной отделкой в стиле Al Khous на груди и рукавах, двумя скрытыми боковыми карманами, мягкой креповой подкладкой и опциональной скрытой внутренней биркой для персонализации.',
  care: 'Только профессиональная сухая чистка.',
  material: KENSINGTON_MATERIAL,
  suitableFor:
    'Повседневная элегантность, деловая среда, ужины, встречи, путешествия, культурные мероприятия, свадьбы, встречи Eid, празднования, особые случаи и международная одежда для мероприятий.',
}

const KENSINGTON_FACTS_ZH: AbayaSchemaLocalePack['facts'] = {
  productType: '受精裁外套启发的结构感黑色阿巴亚',
  productCategory: '阿巴亚, 外套, 夹克, 西装外套, 长款西装外套, 西装外套风阿巴亚',
  neckline: '圆领',
  fit: '结构感与流动感并存的版型，线条修长利落，配有轻薄肩垫与西装外套风比例。',
  maximumGarmentLength: '138 厘米 / 54.5 英寸',
  modelHeight: '155 厘米 / 61 英寸',
  modelWears: 'XS',
  closure: '前襟按扣闭合',
  pockets: '两侧隐藏口袋',
  personalisation: '可选隐藏内侧标签个性化服务，可加入姓名、日期或有意义的信息。',
  lining: '全里衬设计，采用柔软绉纱里料，穿着舒适轻松。',
  trim: 'Bint Saeed 标志性编织饰带灵感源自 Al Khous 传统棕榈叶编织工艺，并以细腻的黑色闪光欧根纱编织细节呈现。',
  stylingDetail:
    '结构感 Deep Black 阿巴亚，圆领设计，轻薄肩垫，前襟按扣闭合，胸部与袖部采用 Al Khous 灵感编织饰边，配有两侧隐藏口袋、柔软绉纱里衬，以及可选隐藏内侧个性化标签。',
  care: '仅限专业干洗。',
  material: KENSINGTON_MATERIAL,
  suitableFor:
    '日常优雅、商务场合、晚宴、聚会、旅行、文化活动、婚礼、Eid 聚会、庆典、特别场合以及国际场合着装。',
}

const KENSINGTON_FACTS_DE: AbayaSchemaLocalePack['facts'] = {
  productType: 'Strukturierte schwarze Abaya, inspiriert von maßgeschneiderter Outerwear',
  productCategory: 'Abaya, Outerwear, Jacke, Blazer, Langer Blazer, Blazer-Abaya',
  neckline: 'Runder Ausschnitt',
  fit: 'Strukturierte und zugleich fließende Passform mit klarer, verlängerter Silhouette, leichter Schulterpolsterung und blazerinspirierten Proportionen.',
  maximumGarmentLength: '138 cm / 54.5 Zoll',
  modelHeight: '155 cm / 61 Zoll',
  modelWears: 'XS',
  closure: 'Vordere Druckknopf-Schließung',
  pockets: 'Zwei versteckte Seitentaschen',
  personalisation:
    'Optionale Personalisierung auf einem versteckten Innenetikett mit Name, Datum oder bedeutungsvoller Botschaft.',
  lining: 'Vollständig gefüttert mit weichem Kreppfutter für Komfort und angenehmes Tragen.',
  trim: 'Charakteristische gewebte Borte von Bint Saeed, inspiriert von der traditionellen Al Khous-Kunst des Palmblattflechtens, interpretiert durch subtile schwarze Glitzer-Organza-Webdetails.',
  stylingDetail:
    'Strukturierte Deep Black Abaya mit rundem Ausschnitt, leichter Schulterpolsterung, vorderer Druckknopf-Schließung, Al Khous-inspirierter gewebter Borte an Brust und Ärmeln, zwei versteckten Seitentaschen, weichem Kreppfutter und optionalem verstecktem Innenetikett zur Personalisierung.',
  care: 'Nur professionelle chemische Reinigung.',
  material: KENSINGTON_MATERIAL,
  suitableFor:
    'Alltagseleganz, Business-Umfelder, Dinner, Zusammenkünfte, Reisen, kulturelle Veranstaltungen, Hochzeiten, Eid-Zusammenkünfte, Feiern, besondere Anlässe und internationale Anlassmode.',
}

const KENSINGTON_FACTS_NL: AbayaSchemaLocalePack['facts'] = {
  productType: 'Gestructureerde zwarte abaya, geinspireerd op getailleerde outerwear',
  productCategory: 'Abaya, Outerwear, Jas, Blazer, Lange Blazer, Blazer-Abaya',
  neckline: 'Ronde halslijn',
  fit: 'Gestructureerde maar vloeiende pasvorm met een strakke verlengde silhouette, lichte schoudervulling en op blazer geinspireerde proporties.',
  maximumGarmentLength: '138 cm / 54.5 inch',
  modelHeight: '155 cm / 61 inch',
  modelWears: 'XS',
  closure: 'Frontsluiting met drukknoop',
  pockets: 'Twee verborgen zijzakken',
  personalisation:
    'Optionele personalisatie op een verborgen binnenlabel met een naam, datum of betekenisvolle boodschap.',
  lining: 'Volledig gevoerd met zachte crêpevoering voor comfort en draaggemak.',
  trim: 'Kenmerkende geweven bies van Bint Saeed, geinspireerd op de traditionele Al Khous-kunst van palmbladweven, vertaald naar subtiele zwarte glitter-organza weefdetails.',
  stylingDetail:
    'Gestructureerde Deep Black abaya met ronde halslijn, lichte schoudervulling, frontsluiting met drukknoop, Al Khous-geinspireerde geweven afwerking over borst en mouwen, twee verborgen zijzakken, zachte crêpevoering en optioneel verborgen binnenlabel voor personalisatie.',
  care: 'Uitsluitend professioneel chemisch reinigen.',
  material: KENSINGTON_MATERIAL,
  suitableFor:
    'Dagelijkse elegantie, zakelijke omgevingen, diners, bijeenkomsten, reizen, culturele evenementen, bruiloften, Eid-bijeenkomsten, vieringen, speciale gelegenheden en internationale gelegenheidskleding.',
}

const KENSINGTON_FACTS_PT: AbayaSchemaLocalePack['facts'] = {
  productType: 'Abaya preta estruturada inspirada em outerwear de alfaiataria',
  productCategory: 'Abaya, Outerwear, Casaco, Blazer, Blazer Longo, Abaya Blazer',
  neckline: 'Decote redondo',
  fit: 'Caimento estruturado, mas fluido, com silhueta alongada e limpa, ombreiras leves e proporcoes inspiradas em blazer.',
  maximumGarmentLength: '138 cm / 54.5 polegadas',
  modelHeight: '155 cm / 61 polegadas',
  modelWears: 'XS',
  closure: 'Fecho frontal com botao de pressao',
  pockets: 'Dois bolsos laterais ocultos',
  personalisation:
    'Personalizacao opcional numa etiqueta interior oculta com nome, data ou mensagem significativa.',
  lining: 'Totalmente forrada com forro macio de crepe para conforto e facilidade de uso.',
  trim: 'Tranca tecida assinatura da Bint Saeed inspirada na arte tradicional Al Khous de tecelagem de folhas de palmeira, reinterpretada com subtis detalhes em organza preta com brilho.',
  stylingDetail:
    'Abaya Deep Black estruturada com decote redondo, ombreiras leves, fecho frontal com botao de pressao, acabamento tecido inspirado em Al Khous no peito e nas mangas, dois bolsos laterais ocultos, forro macio de crepe e etiqueta interior oculta opcional para personalizacao.',
  care: 'Apenas limpeza a seco profissional.',
  material: KENSINGTON_MATERIAL,
  suitableFor:
    'Elegancia quotidiana, ambientes de negocios, jantares, encontros, viagens, eventos culturais, casamentos, encontros de Eid, celebracoes, ocasioes especiais e vestuario internacional para ocasioes.',
}

const KENSINGTON_FAQ_EN: AbayaSchemaLocalePack['faq'] = [
  {
    question: 'What makes the Kensington Abaya different from other black abayas?',
    answer:
      'Rather than relying on embellishment, the Kensington Abaya creates distinction through structure, proportion, and thoughtful detailing. Inspired by tailored outerwear and finished with Al Khous-inspired woven trims, hidden pockets, and a soft crepe lining, it is designed for women seeking elegance that feels confident, versatile, and enduring.',
  },
  {
    question: 'Why was the Kensington Abaya inspired by the structure of a blazer?',
    answer:
      'The woman of today moves between responsibilities, professions, travel, family life, and occasions with greater fluidity than ever before. Inspired by the confidence and structure of a well-cut blazer, the Kensington Abaya was designed to offer a silhouette that feels composed, polished, and adaptable while preserving the ease and elegance of traditional dressing.',
  },
  {
    question: 'Why can the Kensington Abaya be worn internationally?',
    answer:
      'The Kensington Abaya was designed for women whose lives move between different cities, cultures, and occasions. Its clean silhouette and understated detailing allow it to transition naturally between everyday wear, business settings, dinners, travel, and special occasions while maintaining the same sense of elegance and confidence.',
  },
  {
    question: 'Can the Kensington Abaya be personalised?',
    answer:
      'Yes. Like all Bint Saeed abayas, the Kensington Abaya can be personalised with a hidden interior label featuring a name, date, or meaningful message. Discreetly placed inside the garment, it creates a more personal connection to the piece and makes it especially meaningful for gifting, celebrations, and personal milestones.',
  },
  {
    question: 'What is Al Khous and how is it reflected in the Kensington Abaya?',
    answer:
      'Al Khous is the traditional Emirati art of weaving palm fronds, a craft passed down through generations. The Kensington Abaya draws inspiration from this heritage through signature woven detailing across the chest and cuffs, interpreted through a contemporary black glitter organza weave.',
  },
]

const KENSINGTON_FAQ_ID: AbayaSchemaLocalePack['faq'] = [
  {
    question: 'Apa yang membedakan Abaya Kensington dari abaya hitam lainnya?',
    answer:
      'Alih-alih mengandalkan hiasan, Abaya Kensington menciptakan perbedaan melalui struktur, proporsi, dan detail yang cermat. Terinspirasi pakaian luar yang dijahit rapi dan diselesaikan dengan trim tenun terinspirasi Al Khous, saku tersembunyi, dan lapisan kain krep lembut, abaya ini dirancang untuk wanita yang mencari keanggunan yang terasa percaya diri, serba guna, dan abadi.',
  },
  {
    question: 'Mengapa Abaya Kensington terinspirasi dari struktur blazer?',
    answer:
      'Wanita masa kini bergerak antara tanggung jawab, profesi, perjalanan, kehidupan keluarga, dan acara dengan lebih luwes dari sebelumnya. Terinspirasi dari kepercayaan diri dan struktur blazer yang terpotong sempurna, Abaya Kensington dirancang untuk menawarkan siluet yang terasa tenang, rapi, dan mudah beradaptasi, sekaligus mempertahankan kemudahan dan keanggunan berpakaian tradisional.',
  },
  {
    question: 'Mengapa Abaya Kensington bisa dikenakan secara internasional?',
    answer:
      'Abaya Kensington dirancang untuk wanita yang kehidupannya bergerak antar kota, budaya, dan acara yang berbeda. Siluet bersihnya dan detail yang tidak berlebihan memungkinkannya beralih secara alami antara pemakaian sehari-hari, suasana bisnis, makan malam, perjalanan, dan acara khusus, sambil tetap mempertahankan rasa keanggunan dan kepercayaan diri yang sama.',
  },
  {
    question: 'Apakah Abaya Kensington bisa dipersonalisasi?',
    answer:
      'Ya. Seperti semua abaya Bint Saeed, Abaya Kensington dapat dipersonalisasi dengan label interior tersembunyi yang menampilkan nama, tanggal, atau pesan bermakna. Ditempatkan secara diam-diam di dalam pakaian, label ini menciptakan koneksi yang lebih personal dengan busana tersebut dan membuatnya sangat berarti sebagai hadiah, untuk perayaan, dan pencapaian pribadi.',
  },
  {
    question: 'Apa itu Al Khous dan bagaimana tercermin pada Abaya Kensington?',
    answer:
      'Al Khous adalah seni tradisional Emirati dalam menganyam pelepah palem, sebuah kerajinan yang diwariskan turun-temurun. Abaya Kensington mengambil inspirasi dari warisan ini melalui detail tenun khas di dada dan manset, diinterpretasikan melalui tenun organza glitter hitam kontemporer.',
  },
]

const KENSINGTON_FAQ_MS: AbayaSchemaLocalePack['faq'] = [
  {
    question: 'Apakah yang membezakan Abaya Kensington daripada abaya hitam yang lain?',
    answer:
      'Berbeza daripada mengandalkan hiasan, Abaya Kensington mencipta perbezaan melalui struktur, perkadaran, dan perincian yang teliti. Terinspirasi pakaian luar yang dijahit rapi dan diselesaikan dengan trim tenunan terinspirasi Al Khous, poket tersembunyi, dan lapisan kain krep lembut, ia direka untuk wanita yang mencari keanggunan yang terasa yakin, serba guna, dan abadi.',
  },
  {
    question: 'Mengapakah Abaya Kensington terinspirasi daripada struktur blazer?',
    answer:
      'Wanita masa kini bergerak antara tanggungjawab, profesion, perjalanan, kehidupan keluarga, dan majlis dengan lebih mudah daripada sebelumnya. Terinspirasi daripada keyakinan dan struktur blazer yang dijahit dengan baik, Abaya Kensington direka untuk menawarkan siluet yang terasa tenang, kemas, dan mudah disesuaikan sambil mengekalkan kemudahan dan keanggunan pemakaian tradisional.',
  },
  {
    question: 'Mengapakah Abaya Kensington boleh dipakai secara antarabangsa?',
    answer:
      'Abaya Kensington direka untuk wanita yang kehidupannya bergerak antara bandar, budaya, dan majlis yang berbeza. Siluet bersihnya dan perincian yang sederhana membolehkannya beralih secara semula jadi antara pemakaian harian, suasana perniagaan, majlis makan malam, perjalanan, dan majlis istimewa sambil mengekalkan rasa keanggunan dan keyakinan yang sama.',
  },
  {
    question: 'Bolehkah Abaya Kensington diperibadikan?',
    answer:
      'Ya. Seperti semua abaya Bint Saeed, Abaya Kensington boleh diperibadikan dengan label dalaman tersembunyi yang menampilkan nama, tarikh, atau mesej bermakna. Ditempatkan secara diskrit di dalam pakaian, ia mewujudkan hubungan yang lebih peribadi dengan busana tersebut dan menjadikannya sangat bermakna untuk hadiah, perayaan, dan pencapaian peribadi.',
  },
  {
    question: 'Apakah Al Khous dan bagaimana ia tercermin pada Abaya Kensington?',
    answer:
      'Al Khous ialah seni tradisional Emirati dalam menenun pelepah palem, sebuah kraftangan yang diwarisi turun-temurun. Abaya Kensington mengambil inspirasi daripada warisan ini melalui perincian tenunan khas di dada dan manset, ditafsirkan melalui tenunan organza glitter hitam kontemporari.',
  },
]

const KENSINGTON_FAQ_AR: AbayaSchemaLocalePack['faq'] = [
  {
    question: 'ما الذي يميز عباية Kensington عن غيرها من العبايات السوداء؟',
    answer:
      'بدلاً من الاعتماد على الزخارف، تبرز عباية Kensington من خلال البنية المحكمة، والتناسب، والتفاصيل المدروسة. فهي مستوحاة من الملابس الخارجية المفصلة ومزودة بتشطيبات منسوجة مستوحاة من Al Khous، وجيوب مخفية، وبطانة كريب ناعمة، وقد صُممت للمرأة التي تبحث عن أناقة واثقة ومتعددة الاستخدامات وتدوم مع الزمن.',
  },
  {
    question: 'لماذا استُلهمت عباية Kensington من بنية البليزر؟',
    answer:
      'امرأة اليوم تنتقل بين المسؤوليات، والعمل، والسفر، والحياة العائلية، والمناسبات بسلاسة أكبر من أي وقت مضى. ومن وحي الثقة والبنية التي يمنحها البليزر المتقن القصّة، صُممت عباية Kensington لتقدم هيئة متزنة وراقية وقابلة للتكيف مع الحفاظ على سهولة وأناقة اللباس التقليدي.',
  },
  {
    question: 'لماذا يمكن ارتداء عباية Kensington دوليًا؟',
    answer:
      'صُممت عباية Kensington للنساء اللواتي تتنقل حياتهن بين مدن وثقافات ومناسبات مختلفة. فخطّها النظيف وتفاصيلها الهادئة يسمحان لها بالانتقال بسلاسة بين الإطلالة اليومية وبيئات العمل وحفلات العشاء والسفر والمناسبات الخاصة، مع الحفاظ على الإحساس نفسه بالأناقة والثقة.',
  },
  {
    question: 'هل يمكن تخصيص عباية Kensington؟',
    answer:
      'نعم. مثل جميع عبايات Bint Saeed، يمكن تخصيص عباية Kensington ببطاقة داخلية مخفية تتضمن اسمًا أو تاريخًا أو رسالة ذات معنى. وبفضل موضعها الداخلي الهادئ، تضيف ارتباطًا شخصيًا بالقطعة وتجعلها ذات قيمة خاصة للهدايا والاحتفالات والمحطات الشخصية المهمة.',
  },
  {
    question: 'ما هو Al Khous وكيف ينعكس في عباية Kensington؟',
    answer:
      'Al Khous هو الفن الإماراتي التقليدي لنسج سعف النخيل، وهو حِرفة متوارثة عبر الأجيال. وتستلهم عباية Kensington هذا الإرث من خلال تفاصيل منسوجة مميزة عبر الصدر والأساور، مُعاد تقديمها عبر نسج أورجانزا سوداء لامعة بطابع معاصر.',
  },
]

const KENSINGTON_FAQ_FR: AbayaSchemaLocalePack['faq'] = [
  {
    question: "Qu'est-ce qui distingue l'Abaya Kensington des autres abayas noires ?",
    answer:
      "Plutôt que de s'appuyer sur l'ornement, l'Abaya Kensington se distingue par sa structure, ses proportions et ses détails réfléchis. Inspirée des pièces d'extérieur tailleur et finie avec des bordures tissées inspirées d'Al Khous, des poches dissimulées et une douce doublure crêpe, elle est conçue pour les femmes qui recherchent une élégance confiante, polyvalente et durable.",
  },
  {
    question: "Pourquoi l'Abaya Kensington est-elle inspirée de la structure d'un blazer ?",
    answer:
      "La femme d'aujourd'hui passe avec fluidité entre responsabilités, activité professionnelle, voyages, vie familiale et occasions. Inspirée de la confiance et de la structure d'un blazer bien coupé, l'Abaya Kensington a été conçue pour offrir une silhouette posée, soignée et adaptable, tout en préservant la facilité et l'élégance du vestiaire traditionnel.",
  },
  {
    question: "Pourquoi l'Abaya Kensington peut-elle être portée à l'international ?",
    answer:
      "L'Abaya Kensington a été pensée pour les femmes dont la vie se déploie entre différentes villes, cultures et occasions. Sa silhouette épurée et ses détails discrets lui permettent de passer naturellement du quotidien aux environnements professionnels, aux dîners, aux voyages et aux occasions spéciales, tout en conservant la même élégance assurée.",
  },
  {
    question: "L'Abaya Kensington peut-elle etre personnalisee ?",
    answer:
      "Oui. Comme toutes les abayas Bint Saeed, l'Abaya Kensington peut etre personnalisee avec une etiquette interieure dissimulee portant un nom, une date ou un message significatif. Placee discretement a l'interieur du vetement, elle cree un lien plus personnel avec la piece et la rend particulierement precieuse pour les cadeaux, les celebrations et les etapes personnelles importantes.",
  },
  {
    question: "Qu'est-ce que Al Khous et comment se reflète-t-il dans l'Abaya Kensington ?",
    answer:
      "Al Khous est l'art traditionnel emirati du tressage des feuilles de palmier, un savoir-faire transmis de generation en generation. L'Abaya Kensington s'inspire de cet heritage a travers des details tisses signatures sur la poitrine et les poignets, reinterpretes dans un tissage d'organza noir paillete contemporain.",
  },
]

const KENSINGTON_FAQ_IT: AbayaSchemaLocalePack['faq'] = [
  {
    question: "Cosa rende l'Abaya Kensington diversa dalle altre abaya nere?",
    answer:
      "Invece di affidarsi alle decorazioni, l'Abaya Kensington si distingue per struttura, proporzioni e dettagli studiati. Ispirata ai capispalla sartoriali e rifinita con profili intrecciati ispirati ad Al Khous, tasche nascoste e morbida fodera in crêpe, è pensata per donne che cercano un'eleganza sicura, versatile e duratura.",
  },
  {
    question: "Perché l'Abaya Kensington si ispira alla struttura di un blazer?",
    answer:
      "La donna di oggi passa con grande fluidità tra responsabilità, professione, viaggi, vita familiare e occasioni. Ispirata alla sicurezza e alla struttura di un blazer ben tagliato, l'Abaya Kensington è stata creata per offrire una silhouette composta, curata e adattabile, preservando al tempo stesso la facilità e l'eleganza dell'abbigliamento tradizionale.",
  },
  {
    question: "Perché l'Abaya Kensington può essere indossata a livello internazionale?",
    answer:
      "L'Abaya Kensington è stata progettata per donne la cui vita si muove tra città, culture e occasioni diverse. La sua silhouette pulita e i dettagli sobri le consentono di passare naturalmente dall'uso quotidiano ai contesti business, alle cene, ai viaggi e alle occasioni speciali, mantenendo sempre la stessa eleganza sicura.",
  },
  {
    question: "L'Abaya Kensington può essere personalizzata?",
    answer:
      "Sì. Come tutte le abaya Bint Saeed, l'Abaya Kensington può essere personalizzata con un'etichetta interna nascosta che riporta nome, data o un messaggio significativo. Posizionata discretamente all'interno del capo, crea un legame più personale con il pezzo e lo rende particolarmente prezioso per regali, celebrazioni e traguardi personali.",
  },
  {
    question: "Che cos'è Al Khous e come si riflette nell'Abaya Kensington?",
    answer:
      "Al Khous è la tradizionale arte emiratina dell'intreccio delle foglie di palma, un mestiere tramandato di generazione in generazione. L'Abaya Kensington trae ispirazione da questo patrimonio attraverso dettagli intrecciati signature su petto e polsini, reinterpretati con un contemporaneo intreccio in organza nera glitterata.",
  },
]

const KENSINGTON_FAQ_ES: AbayaSchemaLocalePack['faq'] = [
  {
    question: 'Que hace diferente a la Abaya Kensington de otras abayas negras?',
    answer:
      'En lugar de depender de adornos, la Abaya Kensington se distingue por su estructura, proporciones y detalles cuidadosamente pensados. Inspirada en prendas exteriores de sastrería y terminada con ribetes tejidos inspirados en Al Khous, bolsillos ocultos y un suave forro de crepé, está diseñada para mujeres que buscan una elegancia segura, versátil y duradera.',
  },
  {
    question: 'Por que la Abaya Kensington se inspiro en la estructura de un blazer?',
    answer:
      'La mujer de hoy se mueve entre responsabilidades, profesión, viajes, vida familiar y ocasiones con más fluidez que nunca. Inspirada en la confianza y la estructura de un blazer bien cortado, la Abaya Kensington fue diseñada para ofrecer una silueta equilibrada, pulida y adaptable, preservando al mismo tiempo la comodidad y la elegancia del vestir tradicional.',
  },
  {
    question: 'Por que la Abaya Kensington puede usarse internacionalmente?',
    answer:
      'La Abaya Kensington fue diseñada para mujeres cuyas vidas se mueven entre distintas ciudades, culturas y ocasiones. Su silueta limpia y sus detalles discretos le permiten pasar naturalmente del uso diario a entornos de negocios, cenas, viajes y ocasiones especiales, manteniendo siempre la misma elegancia y confianza.',
  },
  {
    question: 'Se puede personalizar la Abaya Kensington?',
    answer:
      'Sí. Como todas las abayas de Bint Saeed, la Abaya Kensington puede personalizarse con una etiqueta interior oculta que incluye un nombre, una fecha o un mensaje significativo. Colocada discretamente dentro de la prenda, crea una conexión más personal con la pieza y la hace especialmente significativa para regalos, celebraciones e hitos personales.',
  },
  {
    question: 'Que es Al Khous y como se refleja en la Abaya Kensington?',
    answer:
      'Al Khous es el arte tradicional emiratí de tejer hojas de palma, una artesanía transmitida de generación en generación. La Abaya Kensington se inspira en este legado mediante detalles tejidos distintivos en el pecho y los puños, reinterpretados con un tejido contemporáneo de organza negra con brillo.',
  },
]

const KENSINGTON_FAQ_RU: AbayaSchemaLocalePack['faq'] = [
  {
    question: 'Что отличает абайю Kensington от других черных абай?',
    answer:
      'Вместо акцента на декор абайя Kensington выделяется за счет структуры, пропорций и продуманных деталей. Вдохновленная кроем верхней одежды и дополненная плетеной отделкой в стиле Al Khous, скрытыми карманами и мягкой креповой подкладкой, она создана для женщин, которым нужна элегантность, сочетающая уверенность, универсальность и актуальность вне времени.',
  },
  {
    question: 'Почему абайя Kensington вдохновлена структурой блейзера?',
    answer:
      'Современная женщина с большей свободой, чем когда-либо, совмещает ответственность, профессию, поездки, семейную жизнь и мероприятия. Вдохновленная уверенностью и структурой хорошо скроенного блейзера, абайя Kensington создана, чтобы предлагать собранный, polished и адаптивный силуэт, сохраняя легкость и элегантность традиционной одежды.',
  },
  {
    question: 'Почему абайю Kensington можно носить в международном контексте?',
    answer:
      'Абайя Kensington разработана для женщин, чья жизнь проходит между разными городами, культурами и случаями. Чистый силуэт и сдержанные детали позволяют ей естественно переходить от повседневной носки к деловой среде, ужинам, путешествиям и особым случаям, сохраняя то же ощущение элегантности и уверенности.',
  },
  {
    question: 'Можно ли персонализировать абайю Kensington?',
    answer:
      'Да. Как и все абайи Bint Saeed, абайю Kensington можно персонализировать скрытой внутренней биркой с именем, датой или значимым сообщением. Деликатно размещенная внутри изделия, она создает более личную связь с вещью и делает ее особенно ценной для подарков, празднований и личных вех.',
  },
  {
    question: 'Что такое Al Khous и как это отражено в абайе Kensington?',
    answer:
      'Al Khous - это традиционное эмиратское искусство плетения пальмовых листьев, ремесло, передаваемое из поколения в поколение. Абайя Kensington отражает это наследие через фирменные плетеные детали на груди и манжетах, переосмысленные в современном черном блестящем органза-плетении.',
  },
]

const KENSINGTON_FAQ_ZH: AbayaSchemaLocalePack['faq'] = [
  {
    question: 'Kensington 阿巴亚与其他黑色阿巴亚有何不同？',
    answer:
      'Kensington 阿巴亚并不依赖繁复装饰，而是通过结构、比例与考究细节建立辨识度。其灵感来自精裁外套，并配有 Al Khous 灵感编织饰边、隐藏口袋与柔软绉纱里衬，专为追求自信、百搭且历久弥新的优雅女性而设计。',
  },
  {
    question: '为什么 Kensington 阿巴亚会借鉴西装外套结构？',
    answer:
      '当代女性比以往更流畅地切换于责任、职业、旅行、家庭生活与各类场合之间。Kensington 阿巴亚从合体西装外套所传达的自信与结构中汲取灵感，打造沉稳精致且易于适配的轮廓，同时保留传统着装的从容与优雅。',
  },
  {
    question: '为什么 Kensington 阿巴亚适合国际场景穿着？',
    answer:
      'Kensington 阿巴亚为生活往返于不同城市、文化与场合的女性而设计。其利落轮廓与克制细节，让它可自然切换于日常穿着、商务场景、晚宴、旅行与特别场合之间，同时始终保持同样的优雅与自信气质。',
  },
  {
    question: 'Kensington 阿巴亚可以个性化定制吗？',
    answer:
      '可以。与所有 Bint Saeed 阿巴亚一样，Kensington 阿巴亚支持隐藏内侧标签个性化定制，可加入姓名、日期或有意义的信息。该标签低调置于衣内，能建立更个人化的情感连接，也让其更适合作为礼赠、庆典与人生里程碑之选。',
  },
  {
    question: '什么是 Al Khous？它如何体现在 Kensington 阿巴亚中？',
    answer:
      'Al Khous 是阿联酋传统的棕榈叶编织工艺，代代相传。Kensington 阿巴亚从这一文化传承中汲取灵感，在胸部与袖口融入标志性编织细节，并以当代黑色闪光欧根纱编织手法重新诠释。',
  },
]

const KENSINGTON_FAQ_DE: AbayaSchemaLocalePack['faq'] = [
  {
    question: 'Was unterscheidet die Kensington Abaya von anderen schwarzen Abayas?',
    answer:
      'Statt auf Verzierungen zu setzen, schafft die Kensington Abaya ihre Besonderheit durch Struktur, Proportion und durchdachte Details. Inspiriert von maßgeschneiderter Outerwear und vollendet mit Al Khous-inspirierten gewebten Abschlüssen, versteckten Taschen und einem weichen Kreppfutter, ist sie für Frauen konzipiert, die eine Eleganz suchen, die selbstbewusst, vielseitig und zeitlos wirkt.',
  },
  {
    question: 'Warum wurde die Kensington Abaya von der Struktur eines Blazers inspiriert?',
    answer:
      'Die Frau von heute bewegt sich fließender denn je zwischen Verantwortung, Beruf, Reisen, Familienleben und Anlässen. Inspiriert von der Ausstrahlung und Struktur eines gut geschnittenen Blazers wurde die Kensington Abaya so entworfen, dass sie eine gefasste, gepflegte und anpassungsfähige Silhouette bietet und zugleich die Leichtigkeit und Eleganz traditioneller Kleidung bewahrt.',
  },
  {
    question: 'Warum kann die Kensington Abaya international getragen werden?',
    answer:
      'Die Kensington Abaya wurde für Frauen entworfen, deren Leben zwischen verschiedenen Städten, Kulturen und Anlässen stattfindet. Ihre klare Silhouette und ihre zurückhaltenden Details ermöglichen einen natürlichen Übergang zwischen Alltag, Business-Umfeld, Dinnern, Reisen und besonderen Anlässen - bei gleichbleibendem Gefühl von Eleganz und Selbstsicherheit.',
  },
  {
    question: 'Kann die Kensington Abaya personalisiert werden?',
    answer:
      'Ja. Wie alle Abayas von Bint Saeed kann die Kensington Abaya mit einem versteckten Innenetikett personalisiert werden, das einen Namen, ein Datum oder eine bedeutungsvolle Botschaft trägt. Diskret im Inneren des Kleidungsstücks platziert, schafft es eine persönlichere Verbindung zum Piece und macht es besonders bedeutungsvoll für Geschenke, Feiern und persönliche Meilensteine.',
  },
  {
    question: 'Was ist Al Khous und wie spiegelt es sich in der Kensington Abaya wider?',
    answer:
      'Al Khous ist die traditionelle emiratische Kunst des Flechtens von Palmblättern - ein Handwerk, das über Generationen weitergegeben wird. Die Kensington Abaya greift dieses Erbe durch charakteristische gewebte Details an Brust und Manschetten auf, neu interpretiert in einem zeitgenössischen schwarzen Glitzer-Organza-Gewebe.',
  },
]

const KENSINGTON_FAQ_NL: AbayaSchemaLocalePack['faq'] = [
  {
    question: 'Wat maakt de Kensington Abaya anders dan andere zwarte abaya’s?',
    answer:
      'In plaats van te leunen op versiering onderscheidt de Kensington Abaya zich door structuur, proportie en doordachte details. Geinspireerd op getailleerde outerwear en afgewerkt met Al Khous-geinspireerde geweven afwerkingen, verborgen zakken en een zachte crêpevoering, is dit ontwerp gemaakt voor vrouwen die elegantie zoeken die zelfverzekerd, veelzijdig en blijvend aanvoelt.',
  },
  {
    question: 'Waarom is de Kensington Abaya geinspireerd op de structuur van een blazer?',
    answer:
      'De vrouw van vandaag beweegt vloeiender dan ooit tussen verantwoordelijkheden, beroep, reizen, gezinsleven en gelegenheden. Geinspireerd op het zelfvertrouwen en de structuur van een goed gesneden blazer is de Kensington Abaya ontworpen om een beheerste, verzorgde en aanpasbare silhouette te bieden, met behoud van het gemak en de elegantie van traditionele kleding.',
  },
  {
    question: 'Waarom kan de Kensington Abaya internationaal worden gedragen?',
    answer:
      'De Kensington Abaya is ontworpen voor vrouwen wier leven zich afspeelt tussen verschillende steden, culturen en gelegenheden. De strakke silhouette en ingetogen details zorgen ervoor dat zij moeiteloos overgaat van dagelijkse draagmomenten naar zakelijke settings, diners, reizen en speciale gelegenheden, met dezelfde uitstraling van elegantie en zelfvertrouwen.',
  },
  {
    question: 'Kan de Kensington Abaya gepersonaliseerd worden?',
    answer:
      'Ja. Zoals alle abaya’s van Bint Saeed kan de Kensington Abaya worden gepersonaliseerd met een verborgen binnenlabel met een naam, datum of betekenisvolle boodschap. Discreet geplaatst aan de binnenzijde van het kledingstuk zorgt dit voor een persoonlijkere band met het piece en maakt het de abaya extra betekenisvol voor cadeaus, vieringen en persoonlijke mijlpalen.',
  },
  {
    question: 'Wat is Al Khous en hoe komt dit terug in de Kensington Abaya?',
    answer:
      'Al Khous is de traditionele Emiratische kunst van het vlechten van palmbladeren, een ambacht dat van generatie op generatie is doorgegeven. De Kensington Abaya haalt inspiratie uit dit erfgoed via kenmerkende geweven details over de borst en manchetten, opnieuw geinterpreteerd in een eigentijdse zwarte glitter-organza weving.',
  },
]

const KENSINGTON_FAQ_PT: AbayaSchemaLocalePack['faq'] = [
  {
    question: 'O que diferencia a Abaya Kensington de outras abayas pretas?',
    answer:
      'Em vez de depender de ornamentacao, a Abaya Kensington cria distincao atraves de estrutura, proporcao e detalhes cuidadosamente pensados. Inspirada em outerwear de alfaiataria e finalizada com acabamentos tecidos inspirados em Al Khous, bolsos ocultos e forro macio de crepe, foi concebida para mulheres que procuram uma elegancia confiante, versatil e duradoura.',
  },
  {
    question: 'Porque a Abaya Kensington foi inspirada na estrutura de um blazer?',
    answer:
      'A mulher de hoje transita entre responsabilidades, profissao, viagens, vida familiar e ocasioes com maior fluidez do que nunca. Inspirada pela confianca e pela estrutura de um blazer bem cortado, a Abaya Kensington foi desenhada para oferecer uma silhueta composta, polida e adaptavel, preservando ao mesmo tempo a facilidade e a elegancia do vestir tradicional.',
  },
  {
    question: 'Porque a Abaya Kensington pode ser usada internacionalmente?',
    answer:
      'A Abaya Kensington foi desenhada para mulheres cujas vidas circulam entre diferentes cidades, culturas e ocasioes. A sua silhueta limpa e os seus detalhes discretos permitem uma transicao natural entre uso diario, ambientes de negocios, jantares, viagens e ocasioes especiais, mantendo a mesma sensacao de elegancia e confianca.',
  },
  {
    question: 'A Abaya Kensington pode ser personalizada?',
    answer:
      'Sim. Tal como todas as abayas da Bint Saeed, a Abaya Kensington pode ser personalizada com uma etiqueta interior oculta com nome, data ou mensagem significativa. Colocada de forma discreta no interior da peca, cria uma ligacao mais pessoal com o modelo e torna-o especialmente significativo para presentes, celebracoes e marcos pessoais.',
  },
  {
    question: 'O que e Al Khous e como se reflete na Abaya Kensington?',
    answer:
      'Al Khous e a arte tradicional emirati de tecer folhas de palmeira, um oficio transmitido de geracao em geracao. A Abaya Kensington inspira-se nesse patrimonio por meio de detalhes tecidos assinatura no peito e nos punhos, reinterpretados atraves de uma tecelagem contemporanea de organza preta com brilho.',
  },
]

export const KENSINGTON_AUDIENCE_EXTENSION: Record<AppLocale, string> = {
  en: ', long blazer silhouettes, and blazer-inspired abayas',
  ar: '، الصور الظلية الطويلة للبليزر، والعبايات المستوحاة من البليزر',
  fr: ', silhouettes longues de blazer et abayas inspirees du blazer',
  it: ', silhouette blazer lunghe e abaya ispirate al blazer',
  es: ', siluetas largas de blazer y abayas inspiradas en el blazer',
  ru: ', удлиненные силуэты в стиле блейзера и абайи, вдохновленные блейзером',
  zh: '、长款西装外套轮廓与西装外套灵感阿巴亚',
  de: ', lange Blazer-Silhouetten und vom Blazer inspirierte Abayas',
  nl: ', lange blazer-silhouetten en op blazer geinspireerde abaya’s',
  pt: ', silhuetas longas de blazer e abayas inspiradas em blazer',
  id: ', siluet blazer panjang, dan abaya terinspirasi blazer',
  ms: ', siluet blazer panjang, dan abaya terinspirasi blazer',
}

function kensingtonPack(
  locale: AppLocale,
  facts: AbayaSchemaLocalePack['facts'],
  faq: AbayaSchemaLocalePack['faq'],
): AbayaSchemaLocalePack {
  return { facts, faq: patchAlKhousHeritageFaq(faq, 'kensington', locale) }
}

export const KENSINGTON_SCHEMA_PACKS: Record<AppLocale, AbayaSchemaLocalePack> = {
  en: kensingtonPack('en', KENSINGTON_FACTS_EN, KENSINGTON_FAQ_EN),
  ar: kensingtonPack('ar', KENSINGTON_FACTS_AR, KENSINGTON_FAQ_AR),
  fr: kensingtonPack('fr', KENSINGTON_FACTS_FR, KENSINGTON_FAQ_FR),
  it: kensingtonPack('it', KENSINGTON_FACTS_IT, KENSINGTON_FAQ_IT),
  es: kensingtonPack('es', KENSINGTON_FACTS_ES, KENSINGTON_FAQ_ES),
  ru: kensingtonPack('ru', KENSINGTON_FACTS_RU, KENSINGTON_FAQ_RU),
  zh: kensingtonPack('zh', KENSINGTON_FACTS_ZH, KENSINGTON_FAQ_ZH),
  de: kensingtonPack('de', KENSINGTON_FACTS_DE, KENSINGTON_FAQ_DE),
  nl: kensingtonPack('nl', KENSINGTON_FACTS_NL, KENSINGTON_FAQ_NL),
  pt: kensingtonPack('pt', KENSINGTON_FACTS_PT, KENSINGTON_FAQ_PT),
  id: kensingtonPack('id', KENSINGTON_FACTS_ID, KENSINGTON_FAQ_ID),
  ms: kensingtonPack('ms', KENSINGTON_FACTS_MS, KENSINGTON_FAQ_MS),
}
