import type { AppLocale } from '@/lib/i18n/routing'
import { altLoc } from '@/lib/products/imageAltOverridesI18n'

type AltEntry = {
  filename: string
  alts: Record<AppLocale, string>
  titles?: Record<AppLocale, string>
}

type ColorSlug = 'black' | 'navy-blue'

const COLOR_LABEL: Record<ColorSlug, Record<AppLocale, string>> = {
  black: altLoc(
    'Deep Black',
    'أسود عميق',
    'Noir profond',
    'Nero profondo',
    'Negro profundo',
    'глубокий чёрный',
    '深黑色',
    'Tiefschwarz',
    'Diepzwart',
    'Preto profundo',
    'Hitam pekat',
    'Hitam pekat',
  ),
  'navy-blue': altLoc(
    'Navy Blue',
    'كحلي',
    'Bleu marine',
    'Blu navy',
    'Azul marino',
    'тёмно-синий',
    '海军蓝',
    'Marineblau',
    'Marineblauw',
    'Azul-marinho',
    'Biru navy',
    'Biru laut',
  ),
}

function frontAlts(color: ColorSlug): Record<AppLocale, string> {
  const c = COLOR_LABEL[color]
  return altLoc(
    `Bint Saeed Soho Set in ${c.en}, front view. Luxury designer travel set featuring an oversized premium crepe shirt and wide-leg palazzo trousers with UNESCO-recognised traditional Emirati Al Talli trim along both trouser side seams and signature gold-tone Knotted Line buttons. Buy elegant travel outfit UAE — modest khaleeji fashion and contemporary Emirati ready-to-wear from Abu Dhabi and Dubai to Doha, GCC, London, Paris, Milan, and worldwide. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.`,
    `طقم Bint Saeed Soho باللون ${c.ar}، منظر أمامي. طقم سفر مصمّم فاخر يتضمن قميص كريب فاخر واسع وبنطال بالازو بساق واسعة مع تفاصيل التلي الإماراتي التقليدي المعترف به من اليونسكو على اللحامات الجانبية للبنطال وأزرار Knotted Line الذهبية المميزة. شراء إطلالة سفر أنيقة الإمارات — أزياء خليجية محتشمة وجاهزة للارتداء إماراتية معاصرة من أبوظبي ودبي إلى الدوحة والخليج ولندن وباريس وميلانو والعالم. صُنع في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.`,
    `Set Bint Saeed Soho en ${c.fr}, vue de face. Set voyage de créateur de luxe avec chemise oversize en crêpe premium et pantalon palazzo à jambe large, garniture Al Talli émiratie traditionnelle reconnue par l’UNESCO le long des coutures latérales du pantalon et boutons signature dorés Knotted Line. Acheter tenue voyage élégante EAU — mode modeste khaleeji et prêt-à-porter émirati contemporain d’Abou Dabi et Dubaï vers Doha, Golfe, Londres, Paris, Milan et le monde. Fabriqué à Abou Dabi, Émirats arabes unis. Livraison mondiale.`,
    `Bint Saeed Soho Set in ${c.it}, vista frontale. Set viaggio designer di lusso con camicia oversize in crepe premium e pantaloni palazzo a gamba larga, finitura Al Talli tradizionale emiratina riconosciuta dall’UNESCO lungo le cuciture laterali dei pantaloni e bottoni dorati signature Knotted Line. Comprare outfit viaggio elegante EAU — modest fashion khaleeji e prêt-à-porter emiratino contemporaneo da Abu Dhabi e Dubai a Doha, Golfo, Londra, Parigi, Milano e mondo. Realizzato ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.`,
    `Set Bint Saeed Soho en ${c.es}, vista frontal. Set de viaje de diseñador de lujo con camisa oversize en crepe premium y pantalones palazzo de pierna ancha, ribete Al Talli tradicional emiratí reconocido por la UNESCO a lo largo de las costuras laterales del pantalón y botones dorados signature Knotted Line. Comprar outfit viaje elegante EAU — moda modesta khaleeji y prêt-à-porter emiratí contemporáneo de Abu Dabi y Dubái a Doha, Golfo, Londres, París, Milán y el mundo. Hecho en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.`,
    `Комплект Bint Saeed Soho цвета ${c.ru}, вид спереди. Люксовый дизайнерский travel set: оверсайз рубашка из премиального крепа и брюки-palazzo с широкой штаниной, отделка традиционного эмиратского Al Talli (ЮНЕСКО) вдоль боковых швов брюк и фирменные золотистые пуговицы Knotted Line. Купить элегантный travel outfit ОАЭ — скромная khaleeji мода и современный эмиратский ready-to-wear из Абу-Даби и Дубая в Доху, страны Залива, Лондон, Париж, Милан и мир. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.`,
    `Bint Saeed Soho Set${c.zh}正面视图。奢华设计师旅行套装：宽松高级绉绸衬衫与阔腿palazzo长裤，裤侧缝联合国教科文组织认可的传统阿联酋Al Talli饰边与标志性金色调Knotted Line纽扣。购买阿联酋优雅旅行穿搭——端庄海湾时尚与阿布扎比、迪拜至多哈、海湾、伦敦、巴黎、米兰及全球的当代阿联酋成衣。阿联酋阿布扎比制造。全球配送。`,
    `Bint Saeed Soho Set in ${c.de}, Frontansicht. Luxus-Designer-Reise-Set mit Oversize-Premium-Krepp-Hemd und weitem Palazzo-Hosenbein, UNESCO-anerkanntem traditionellem emiratischem Al-Talli-Besatz entlang der Hosen-Seitennähte und charakteristischen goldfarbenen Knotted-Line-Knöpfen. Elegantes Reise-Outfit VAE kaufen — bescheidene Khaleeji-Mode und zeitgenössisches emiratisches Ready-to-wear aus Abu Dhabi und Dubai nach Doha, Golf, London, Paris, Mailand und weltweit. Hergestellt in Abu Dhabi, VAE. Weltweiter Versand.`,
    `Bint Saeed Soho Set in ${c.nl}, vooraanzicht. Luxe designer reisset met oversized premium crêpe overhemd en wide-leg palazzo-broek, door UNESCO erkende traditionele Emiratische Al Talli-afwerking langs beide broekzijnaadnaden en kenmerkende goudkleurige Knotted Line knopen. Elegant reis-outfit VAE kopen — bescheiden khaleeji mode en eigentijds Emiratisch ready-to-wear van Abu Dhabi en Dubai naar Doha, Golf, Londen, Parijs, Milaan en wereldwijd. Gemaakt in Abu Dhabi, VAE. Wereldwijde verzending.`,
    `Set Bint Saeed Soho em ${c.pt}, vista frontal. Set viagem de designer de luxo com camisa oversize em crepe premium e calças palazzo de perna larga, acabamento Al Talli tradicional emirati reconhecido pela UNESCO ao longo das costuras laterais das calças e botões dourados signature Knotted Line. Comprar outfit viagem elegante EAU — moda modesta khaleeji e prêt-à-porter emirati contemporâneo de Abu Dhabi e Dubai para Doha, Golfo, Londres, Paris, Milão e mundo. Feito em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.`,
    `Bint Saeed Soho Set ${c.id}, tampak depan. Set perjalanan desainer mewah dengan kemeja oversize krepe premium dan celana palazzo kaki lebar, trim Al Talli tradisional Emirati diakui UNESCO di sisi celana dan kancing Knotted Line emas signature. Beli outfit perjalanan elegan UEA — busana modest khaleeji dan ready-to-wear Emirati kontemporer dari Abu Dhabi dan Dubai ke Doha, GCC, London, Paris, Milan, dan dunia. Dibuat di Abu Dhabi, UEA. Pengiriman dunia.`,
    `Bint Saeed Soho Set ${c.ms}, pandangan hadapan. Set perjalanan pereka mewah dengan kemeja oversize krepe premium dan seluar palazzo kaki lebar, hiasan Al Talli tradisional Emirati diiktiraf UNESCO di sisi seluar dan butang Knotted Line emas signature. Beli outfit perjalanan anggun UAE — fesyen sopan khaleeji dan ready-to-wear Emirati kontemporari dari Abu Dhabi dan Dubai ke Doha, GCC, London, Paris, Milan, dan seluruh dunia. Dihasilkan di Abu Dhabi, UAE. Penghantaran seluruh dunia.`,
  )
}

function sideAlts(color: ColorSlug): Record<AppLocale, string> {
  const c = COLOR_LABEL[color]
  return altLoc(
    `Three-quarter view of the Bint Saeed Soho Set in ${c.en} showcasing fluid premium crepe drape, oversized shirt silhouette, wide-leg palazzo movement, and delicate UNESCO heritage Al Talli trim along trouser side seams. Luxury Emirati coordinate travel set — best-selling pants and oversized shirt pairing for women in Abu Dhabi, Dubai, Doha, GCC, London, Paris, and international wardrobes. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.`,
    `منظر ثلاثة أرباع لطقم Bint Saeed Soho باللون ${c.ar} يبرز انسيابية الكريب الفاخر، وسيلويت القميص الواسع، وحركة البالازو بساق واسعة، وتفاصيل التلي التراثية الدقيقة المعترف بها من اليونسكو على لحامات البنطال الجانبية. طقم سفر إماراتي منسّق فاخر — أفضل بنطال مبيعاً مع قميص واسع لنساء أبوظبي ودبي والدوحة والخليج ولندن وباريس والخزائن الدولية. صُنع في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.`,
    `Vue trois-quarts du set Bint Saeed Soho en ${c.fr} mettant en valeur la tombée fluide du crêpe premium, la silhouette chemise oversize, le mouvement palazzo à jambe large et la délicate garniture Al Talli patrimoine UNESCO le long des coutures latérales du pantalon. Ensemble voyage coordonné émirati de luxe — pantalon best-seller et chemise oversize pour les femmes d’Abou Dabi, Dubaï, Doha, Golfe, Londres, Paris et garde-robes internationales. Fabriqué à Abou Dabi, Émirats arabes unis. Livraison mondiale.`,
    `Vista tre quarti del Bint Saeed Soho Set in ${c.it} con drappeggio fluido in crepe premium, silhouette camicia oversize, movimento palazzo a gamba larga e delicata finitura Al Talli patrimonio UNESCO lungo le cuciture laterali dei pantaloni. Set viaggio coordinato emiratino di lusso — pantaloni best seller e camicia oversize per donne ad Abu Dhabi, Dubai, Doha, Golfo, Londra, Parigi e guardaroba internazionali. Realizzato ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.`,
    `Vista tres cuartos del set Bint Saeed Soho en ${c.es} con caída fluida de crepe premium, silueta de camisa oversize, movimiento palazzo de pierna ancha y delicado ribete Al Talli patrimonio UNESCO a lo largo de las costuras laterales del pantalón. Set de viaje coordinado emiratí de lujo — pantalones más vendidos y camisa oversize para mujeres en Abu Dabi, Dubái, Doha, Golfo, Londres, París y armarios internacionales. Hecho en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.`,
    `Вид три четверти комплекта Bint Saeed Soho цвета ${c.ru} с плавной драпировкой премиального крепа, оверсайз силуэтом рубашки, движением palazzo с широкой штаниной и тонкой отделкой Al Talli наследия ЮНЕСКО вдоль боковых швов брюк. Люксовый координированный travel set из ОАЭ — бестселлер брюки и оверсайз рубашка для женщин в Абу-Даби, Дубае, Дохе, странах Залива, Лондоне, Париже и международных гардеробах. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.`,
    `Bint Saeed Soho Set${c.zh}四分之三视图，展现高级绉绸流畅垂坠、宽松衬衫廓形、阔腿palazzo动感与裤侧缝联合国教科文组织Al Talli传承细饰边。奢华阿联酋协调旅行套装——畅销阔腿裤与宽松衬衫搭配，面向阿布扎比、迪拜、多哈、海湾、伦敦、巴黎及国际衣橱女性。阿布扎比制造。全球配送。`,
    `Dreiviertelansicht des Bint Saeed Soho Set in ${c.de} mit fließendem Premium-Krepp-Fall, Oversize-Hemd-Silhouette, weitem Palazzo-Bewegung und zartem UNESCO-Erbe-Al-Talli-Besatz entlang der Hosen-Seitennähte. Luxus-emiratisches Koordinaten-Reise-Set — Bestseller-Hose und Oversize-Hemd für Frauen in Abu Dhabi, Dubai, Doha, Golf, London, Paris und internationalen Garderoben. Hergestellt in Abu Dhabi, VAE. Weltweiter Versand.`,
    `Driekwartweergave van de Bint Saeed Soho Set in ${c.nl} met vloeiende premium crêpe drape, oversized overhemd silhouet, wide-leg palazzo beweging en delicate UNESCO-erfenis Al Talli-afwerking langs broekzijnaadnaden. Luxe Emiratisch coördinatie reisset — best verkopende broek en oversized overhemd voor vrouwen in Abu Dhabi, Dubai, Doha, Golf, Londen, Parijs en internationale garderobes. Gemaakt in Abu Dhabi, VAE. Wereldwijde verzending.`,
    `Vista de três quartos do set Bint Saeed Soho em ${c.pt} com caimento fluido em crepe premium, silhueta de camisa oversize, movimento palazzo de perna larga e delicado acabamento Al Talli património UNESCO ao longo das costuras laterais das calças. Set viagem coordenado emirati de luxo — calças best seller e camisa oversize para mulheres em Abu Dhabi, Dubai, Doha, Golfo, Londres, Paris e guarda-roupa internacionais. Feito em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.`,
    `Pandangan tiga perempat Bint Saeed Soho Set ${c.id} menampilkan drape krepe premium mengalir, siluet kemeja oversized, gerakan palazzo kaki lebar, dan trim Al Talli warisan UNESCO halus di sisi celana. Set perjalanan koordinat Emirati mewah — celana terlaris dan kemeja oversized untuk wanita di Abu Dhabi, Dubai, Doha, GCC, London, Paris, dan garderobe internasional. Dibuat di Abu Dhabi, UEA. Pengiriman dunia.`,
    `Pandangan tiga suku Bint Saeed Soho Set ${c.ms} mempamerkan jatuhan krepe premium mengalir, siluet kemeja oversized, pergerakan palazzo kaki lebar, dan hiasan Al Talli warisan UNESCO halus di sisi seluar. Set perjalanan koordinat Emirati mewah — seluar terlaris dan kemeja oversized untuk wanita di Abu Dhabi, Dubai, Doha, GCC, London, Paris, dan almari antarabangsa. Dihasilkan di Abu Dhabi, UAE. Penghantaran seluruh dunia.`,
  )
}

function backAlts(color: ColorSlug): Record<AppLocale, string> {
  const c = COLOR_LABEL[color]
  return altLoc(
    `Back view of the Bint Saeed Soho Set in ${c.en} highlighting relaxed oversized shirt tailoring, full-length wide-leg palazzo trousers, and contemporary designer travelwear that celebrates UNESCO-listed Emirati Al Talli heritage craftsmanship. Premium luxury coordinate set designed in Abu Dhabi for UAE, GCC, modest fashion, and global ready-to-wear wardrobes. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.`,
    `منظر خلفي لطقم Bint Saeed Soho باللون ${c.ar} يبرز تفصيل القميص الواسع المريح، وبنطال البالازو بساق واسعة بطول كامل، وملابس السفر المصمّمة المعاصرة التي تحتفي بحرفية التلي الإماراتية التراثية المدرجة في اليونسكو. طقم منسّق فاخر راقٍ صُمم في أبوظبي للإمارات والخليج والأزياء المحتشمة وجاهزية الارتداء العالمية. صُنع في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.`,
    `Vue de dos du set Bint Saeed Soho en ${c.fr} soulignant la coupe chemise oversize décontractée, le pantalon palazzo pleine longueur à jambe large et le travelwear de créateur contemporain célébrant l’artisanat patrimonial Al Talli émirati inscrit à l’UNESCO. Ensemble coordonné de luxe premium conçu à Abou Dabi pour les EAU, le Golfe, la mode modeste et les garde-robes prêt-à-porter mondiales. Fabriqué à Abou Dabi, Émirats arabes unis. Livraison mondiale.`,
    `Vista posteriore del Bint Saeed Soho Set in ${c.it} con sartoria camicia oversize rilassata, pantaloni palazzo a gamba larga a tutta lunghezza e travelwear designer contemporaneo che celebra l’artigianato patrimoniale Al Talli emiratino UNESCO. Set coordinato di lusso premium progettato ad Abu Dhabi per EAU, Golfo, modest fashion e guardaroba ready-to-wear globali. Realizzato ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.`,
    `Vista trasera del set Bint Saeed Soho en ${c.es} con sastrería de camisa oversize relajada, pantalones palazzo de pierna ancha de largo completo y travelwear de diseñador contemporáneo que celebra la artesanía patrimonial Al Talli emiratí de la UNESCO. Set coordinado de lujo premium diseñado en Abu Dabi para EAU, Golfo, moda modesta y armarios ready-to-wear globales. Hecho en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.`,
    `Вид сзади комплекта Bint Saeed Soho цвета ${c.ru} с расслабленным оверсайз кроем рубашки, брюками palazzo с широкой штаниной во всю длину и современным дизайнерским travelwear, прославляющим эмиратское наследие Al Talli из списка ЮНЕСКО. Премиальный люксовый координированный комплект, созданный в Абу-Даби для ОАЭ, стран Залива, скромной моды и мировых гардеробов ready-to-wear. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.`,
    `Bint Saeed Soho Set${c.zh}背面视图，凸显宽松衬衫剪裁、全长阔腿palazzo长裤与致敬联合国教科文组织阿联酋Al Talli传承工艺的当代设计师旅行装。阿布扎比设计的高端奢华协调套装，面向阿联酋、海湾、端庄时尚及全球成衣衣橱。阿布扎比制造。全球配送。`,
    `Rückansicht des Bint Saeed Soho Set in ${c.de} mit entspannter Oversize-Hemd-Schneiderei, ganzlangen weiten Palazzo-Hosen und zeitgenössischem Designer-Travelwear, das UNESCO-gelistetes emiratisches Al-Talli-Erbe feiert. Premium-Luxus-Koordinaten-Set aus Abu Dhabi für VAE, Golf, bescheidene Mode und globale Ready-to-wear-Garderoben. Hergestellt in Abu Dhabi, VAE. Weltweiter Versand.`,
    `Achteraanzicht van de Bint Saeed Soho Set in ${c.nl} met ontspannen oversized overhemd tailoring, full-length wide-leg palazzo-broek en eigentijds designer travelwear dat UNESCO-Emiratisch Al Talli-erfgoed viert. Premium luxe coördinatieset ontworpen in Abu Dhabi voor VAE, Golf, bescheiden mode en wereldwijde ready-to-wear garderobes. Gemaakt in Abu Dhabi, VAE. Wereldwijde verzending.`,
    `Vista traseira do set Bint Saeed Soho em ${c.pt} com alfaiataria de camisa oversize descontraída, calças palazzo de perna larga de comprimento total e travelwear de designer contemporâneo que celebra o artesanato patrimonial Al Talli emirati da UNESCO. Set coordenado de luxo premium desenhado em Abu Dhabi para EAU, Golfo, moda modesta e guarda-roupa ready-to-wear global. Feito em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.`,
    `Tampak belakang Bint Saeed Soho Set ${c.id} menonjolkan tailoring kemeja oversized santai, celana palazzo kaki lebar penuh, dan travelwear desainer kontemporer yang merayakan kerajinan warisan Al Talli Emirati UNESCO. Set koordinat mewah premium dirancang di Abu Dhabi untuk UEA, GCC, busana modest, dan garderobe ready-to-wear global. Dibuat di Abu Dhabi, UEA. Pengiriman dunia.`,
    `Pandangan belakang Bint Saeed Soho Set ${c.ms} menyerlahkan jahitan kemeja oversized santai, seluar palazzo kaki lebar penuh, dan travelwear pereka kontemporari yang meraikan kraf warisan Al Talli Emirati UNESCO. Set koordinat mewah premium direka di Abu Dhabi untuk UAE, GCC, fesyen sopan, dan almari ready-to-wear global. Dihasilkan di Abu Dhabi, UAE. Penghantaran seluruh dunia.`,
  )
}

function lifestyle1Alts(color: ColorSlug): Record<AppLocale, string> {
  const c = COLOR_LABEL[color]
  return altLoc(
    `Bint Saeed Soho Set in ${c.en}, lifestyle view styled for luxury travel, morning coffee in Dubai, and effortless city days in Abu Dhabi or Doha. Oversized crepe shirt and wide-leg palazzo trousers with Al Talli side-seam trim and Knotted Line buttons — elegant summer outfit and best-selling coordinate set for GCC, Europe, and worldwide wardrobes. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.`,
    `طقم Bint Saeed Soho باللون ${c.ar}، إطلالة حياتية مناسبة للسفر الفاخر وقهوة الصباح في دبي وأيام المدينة بسهولة في أبوظبي أو الدوحة. قميص كريب واسع وبنطال بالازو بساق واسعة مع تفاصيل التلي على اللحامات الجانبية وأزرار Knotted Line — إطلالة صيفية أنيقة وطقم منسّق الأكثر مبيعاً لخزائن الخليج وأوروبا والعالم. صُنع في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.`,
    `Set Bint Saeed Soho en ${c.fr}, vue lifestyle pour voyage de luxe, café du matin à Dubaï et journées citadines sans effort à Abou Dabi ou Doha. Chemise crêpe oversize et pantalon palazzo à jambe large avec garniture Al Talli sur coutures latérales et boutons Knotted Line — tenue d’été élégante et ensemble coordonné best-seller pour garde-robes Golfe, Europe et monde. Fabriqué à Abou Dabi, Émirats arabes unis. Livraison mondiale.`,
    `Bint Saeed Soho Set in ${c.it}, vista lifestyle per viaggi di lusso, caffè mattutino a Dubai e giornate in città senza sforzo ad Abu Dhabi o Doha. Camicia crepe oversize e pantaloni palazzo a gamba larga con finitura Al Talli su cuciture laterali e bottoni Knotted Line — outfit estivo elegante e set coordinato best seller per guardaroba Golfo, Europa e mondo. Realizzato ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.`,
    `Set Bint Saeed Soho en ${c.es}, vista lifestyle para viaje de lujo, café matutino en Dubái y días urbanos sin esfuerzo en Abu Dabi o Doha. Camisa crepe oversize y pantalones palazzo de pierna ancha con ribete Al Talli en costuras laterales y botones Knotted Line — outfit veraniego elegante y set coordinado más vendido para armarios del Golfo, Europa y el mundo. Hecho en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.`,
    `Комплект Bint Saeed Soho цвета ${c.ru}, lifestyle-образ для люксовых путешествий, утреннего кофе в Дубае и лёгких городских дней в Абу-Даби или Дохе. Оверсайз креповая рубашка и брюки palazzo с отделкой Al Talli на боковых швах и пуговицами Knotted Line — элегантный летний outfit и бестселлер координированный комплект для гардеробов Залива, Европы и мира. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.`,
    `Bint Saeed Soho Set${c.zh}生活方式造型，适合奢华旅行、迪拜晨间咖啡及阿布扎比或多哈轻松都市日常。宽松绉绸衬衫与阔腿palazzo长裤，侧缝Al Talli饰边与Knotted Line纽扣——优雅夏季穿搭与畅销协调套装，面向海湾、欧洲及全球衣橱。阿布扎比制造。全球配送。`,
    `Bint Saeed Soho Set in ${c.de}, Lifestyle-Ansicht für Luxusreisen, Morgenkaffee in Dubai und mühelose Stadttage in Abu Dhabi oder Doha. Oversize-Krepp-Hemd und weite Palazzo-Hose mit Al-Talli-Seitennahtbesatz und Knotted-Line-Knöpfen — elegantes Sommer-Outfit und Bestseller-Koordinaten-Set für Golf-, Europa- und weltweite Garderoben. Hergestellt in Abu Dhabi, VAE. Weltweiter Versand.`,
    `Bint Saeed Soho Set in ${c.nl}, lifestyle-beeld voor luxe reizen, ochtendkoffie in Dubai en moeiteloze stadsdagen in Abu Dhabi of Doha. Oversized crêpe overhemd en wide-leg palazzo-broek met Al Talli zijnaadtrim en Knotted Line knopen — elegant zomer-outfit en best verkopende coördinatieset voor Golf-, Europa- en wereldwijde garderobes. Gemaakt in Abu Dhabi, VAE. Wereldwijde verzending.`,
    `Set Bint Saeed Soho em ${c.pt}, vista lifestyle para viagem de luxo, café da manhã no Dubai e dias urbanos sem esforço em Abu Dhabi ou Doha. Camisa crepe oversize e calças palazzo de perna larga com acabamento Al Talli nas costuras laterais e botões Knotted Line — outfit de verão elegante e set coordenado best seller para guarda-roupa do Golfo, Europa e mundo. Feito em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.`,
    `Bint Saeed Soho Set ${c.id}, tampak gaya hidup untuk perjalanan mewah, kopi pagi di Dubai, dan hari kota santai di Abu Dhabi atau Doha. Kemeja krepe oversized dan celana palazzo kaki lebar dengan trim Al Talli di sisi dan kancing Knotted Line — outfit musim panas elegan dan set koordinat terlaris untuk garderobe GCC, Eropa, dan dunia. Dibuat di Abu Dhabi, UEA. Pengiriman dunia.`,
    `Bint Saeed Soho Set ${c.ms}, pandangan gaya hidup untuk perjalanan mewah, kopi pagi di Dubai, dan hari bandar santai di Abu Dhabi atau Doha. Kemeja krepe oversized dan seluar palazzo kaki lebar dengan hiasan Al Talli di sisi dan butang Knotted Line — outfit musim panas anggun dan set koordinat terlaris untuk almari GCC, Eropah, dan dunia. Dihasilkan di Abu Dhabi, UAE. Penghantaran seluruh dunia.`,
  )
}

function lifestyle2Alts(color: ColorSlug): Record<AppLocale, string> {
  const c = COLOR_LABEL[color]
  return altLoc(
    `Bint Saeed Soho Set in ${c.en}, lifestyle view styled for elegant lunches, evening dinners, and Europe outfit moments in London, Paris, or Milan. Coordinate oversized shirt and palazzo trousers with UNESCO Al Talli heritage detailing — black outfit or navy travel set reimagined as refined khaleeji fashion and cultural modest wear from an Emirati designer house. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.`,
    `طقم Bint Saeed Soho باللون ${c.ar}، إطلالة حياتية مناسبة للغداءات الأنيقة والعشاءات المسائية وإطلالات أوروبا في لندن أو باريس أو ميلانو. قميص واسع وبنطال بالازو منسّقان بتفاصيل التلي التراثية المعترف بها من اليونسكو — إطلالة سوداء أو طقم سفر كحلي بصياغة أزياء خليجية راقية وملابس محتشمة ثقافية من دار مصمّمة إماراتية. صُنع في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.`,
    `Set Bint Saeed Soho en ${c.fr}, vue lifestyle pour déjeuners élégants, dîners du soir et tenues Europe à Londres, Paris ou Milan. Chemise oversize et pantalon palazzo coordonnés avec détails patrimoniaux Al Talli UNESCO — tenue noire ou set voyage marine réinventé en mode khaleeji raffinée et tenue modeste culturelle d’une maison de créateur émiratie. Fabriqué à Abou Dabi, Émirats arabes unis. Livraison mondiale.`,
    `Bint Saeed Soho Set in ${c.it}, vista lifestyle per pranzi eleganti, cene serali e outfit Europa a Londra, Parigi o Milano. Camicia oversize e pantaloni palazzo coordinati con dettagli patrimonio Al Talli UNESCO — outfit nero o set viaggio navy reinterpretato come raffinata moda khaleeji e abbigliamento modesto culturale da casa designer emiratina. Realizzato ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.`,
    `Set Bint Saeed Soho en ${c.es}, vista lifestyle para almuerzos elegantes, cenas nocturnas y outfits Europa en Londres, París o Milán. Camisa oversize y pantalones palazzo coordinados con detalles patrimonio Al Talli UNESCO — outfit negro o set viaje navy reinventado como refinada moda khaleeji y vestir modesto cultural de casa de diseño emiratí. Hecho en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.`,
    `Комплект Bint Saeed Soho цвета ${c.ru}, lifestyle-образ для элегантных обедов, вечерних ужинов и европейских образов в Лондоне, Париже или Милане. Согласованные оверсайз рубашка и брюки palazzo с деталями наследия Al Talli ЮНЕСКО — чёрный outfit или navy travel set в изысканной khaleeji моде и культурной скромной одежде от эмиратского дизайнерского дома. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.`,
    `Bint Saeed Soho Set${c.zh}生活方式造型，适合优雅午餐、晚间晚宴及伦敦、巴黎或米兰欧洲穿搭。协调宽松衬衫与阔腿palazzo长裤，联合国教科文组织Al Talli传承细节——黑色穿搭或海军蓝旅行套装，以精致海湾时尚与文化端庄着装由阿联酋设计师品牌重新诠释。阿布扎比制造。全球配送。`,
    `Bint Saeed Soho Set in ${c.de}, Lifestyle-Ansicht für elegante Mittagessen, Abendessen und Europa-Outfits in London, Paris oder Mailand. Koordiniertes Oversize-Hemd und Palazzo-Hose mit UNESCO-Al-Talli-Erbedetails — schwarzes Outfit oder Navy-Reise-Set als raffinierte Khaleeji-Mode und kulturelle bescheidene Kleidung eines emiratischen Designerhauses neu gedacht. Hergestellt in Abu Dhabi, VAE. Weltweiter Versand.`,
    `Bint Saeed Soho Set in ${c.nl}, lifestyle-beeld voor elegante lunches, avonddiners en Europa-outfits in Londen, Parijs of Milaan. Gecoördineerd oversized overhemd en palazzo-broek met UNESCO Al Talli erfgoeddetails — zwart outfit of navy reisset heruitgevonden als verfijnde khaleeji mode en culturele bescheiden kleding van een Emiratisch designerhuis. Gemaakt in Abu Dhabi, VAE. Wereldwijde verzending.`,
    `Set Bint Saeed Soho em ${c.pt}, vista lifestyle para almoços elegantes, jantares noturnos e outfits Europa em Londres, Paris ou Milão. Camisa oversize e calças palazzo coordenadas com detalhes património Al Talli UNESCO — outfit preto ou set viagem navy reinventado como refinada moda khaleeji e vestir modesto cultural de casa de designer emirati. Feito em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.`,
    `Bint Saeed Soho Set ${c.id}, tampak gaya hidup untuk makan siang elegan, makan malam malam, dan outfit Eropa di London, Paris, atau Milan. Kemeja oversized dan celana palazzo koordinat dengan detail warisan Al Talli UNESCO — outfit hitam atau set perjalanan navy sebagai busana khaleeji halus dan pakaian modest budaya dari rumah desainer Emirati. Dibuat di Abu Dhabi, UEA. Pengiriman dunia.`,
    `Bint Saeed Soho Set ${c.ms}, pandangan gaya hidup untuk makan tengah hari anggun, makan malam, dan outfit Eropah di London, Paris, atau Milan. Kemeja oversized dan seluar palazzo koordinat dengan detail warisan Al Talli UNESCO — outfit hitam atau set perjalanan navy sebagai fesyen khaleeji halus dan pakaian sopan budaya dari rumah pereka Emirati. Dihasilkan di Abu Dhabi, UAE. Penghantaran seluruh dunia.`,
  )
}

function entry(
  color: ColorSlug,
  view: 'front' | 'side' | 'back' | 'lifestyle-1' | 'lifestyle-2',
): AltEntry {
  const alts =
    view === 'front'
      ? frontAlts(color)
      : view === 'side'
        ? sideAlts(color)
        : view === 'back'
          ? backAlts(color)
          : view === 'lifestyle-1'
            ? lifestyle1Alts(color)
            : lifestyle2Alts(color)
  return {
    filename: `bint-saeed-soho-set-${color}-${view}.webp`,
    alts,
  }
}

const NAVY_BLUE_LIFESTYLE_3_ALTS = altLoc(
  `Detail of the Bint Saeed Soho Set in Navy Blue — close-up of UNESCO-recognised traditional Emirati Al Talli trim in gold along premium crepe, with Bint Saeed Abu Dhabi house mark. Luxury designer travel coordinate set for UAE, GCC, London, Paris, and worldwide wardrobes. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.`,
  `تفاصيل طقم Bint Saeed Soho بالكحلي — لقطة مقرّبة لتفاصيل التلي الإماراتي التقليدي المعترف به من اليونسكو باللون الذهبي على كريب فاخر، مع علامة دار Bint Saeed أبوظبي. طقم سفر مصمّم فاخر منسّق للإمارات والخليج ولندن وباريس والخزائن العالمية. صُنع في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.`,
  `Détail du set Bint Saeed Soho en Bleu marine — gros plan de la garniture Al Talli émiratie traditionnelle reconnue par l’UNESCO en or sur crêpe premium, avec la marque de la maison Bint Saeed Abou Dabi. Ensemble voyage coordonné de créateur de luxe pour les EAU, le Golfe, Londres, Paris et garde-robes mondiales. Fabriqué à Abou Dabi, Émirats arabes unis. Livraison mondiale.`,
  `Dettaglio del Bint Saeed Soho Set in Blu navy — primo piano della finitura Al Talli tradizionale emiratina riconosciuta dall’UNESCO in oro su crepe premium, con marchio della casa Bint Saeed Abu Dhabi. Set viaggio coordinato designer di lusso per EAU, Golfo, Londra, Parigi e guardaroba mondiali. Realizzato ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.`,
  `Detalle del set Bint Saeed Soho en Azul marino — primer plano del ribete Al Talli tradicional emiratí reconocido por la UNESCO en oro sobre crepe premium, con la marca de la casa Bint Saeed Abu Dabi. Set de viaje coordinado de diseñador de lujo para EAU, Golfo, Londres, París y armarios mundiales. Hecho en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.`,
  `Деталь комплекта Bint Saeed Soho цвета тёмно-синий — крупный план традиционной эмиратской отделки Al Talli (ЮНЕСКО) золотого тона на премиальном крепе с знаком дома Bint Saeed Абу-Даби. Люксовый дизайнерский travel set для ОАЭ, стран Залива, Лондона, Парижа и мировых гардеробов. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.`,
  `Bint Saeed Soho Set海军蓝细节——联合国教科文组织认可的传统阿联酋Al Talli金色饰边高级绉绸特写，附Bint Saeed阿布扎比品牌标识。面向阿联酋、海湾、伦敦、巴黎及全球衣橱的奢华设计师旅行协调套装。阿布扎比制造。全球配送。`,
  `Detail des Bint Saeed Soho Set in Marineblau — Nahaufnahme des UNESCO-anerkannten traditionellen emiratischen Al-Talli-Besatzes in Gold auf Premium-Krepp mit Hausmarke Bint Saeed Abu Dhabi. Luxus-Designer-Reise-Koordinaten-Set für VAE, Golf, London, Paris und weltweite Garderoben. Hergestellt in Abu Dhabi, VAE. Weltweiter Versand.`,
  `Detail van de Bint Saeed Soho Set in Marineblauw — close-up van door UNESCO erkende traditionele Emiratische Al Talli-afwerking in goud op premium crêpe, met huismerk Bint Saeed Abu Dhabi. Luxe designer reis-coördinatieset voor VAE, Golf, Londen, Parijs en wereldwijde garderobes. Gemaakt in Abu Dhabi, VAE. Wereldwijde verzending.`,
  `Detalhe do set Bint Saeed Soho em Azul-marinho — close-up do acabamento Al Talli tradicional emirati reconhecido pela UNESCO em dourado sobre crepe premium, com marca da casa Bint Saeed Abu Dhabi. Set viagem coordenado de designer de luxo para EAU, Golfo, Londres, Paris e guarda-roupa mundiais. Feito em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.`,
  `Detail Bint Saeed Soho Set Navy Blue — close-up trim Al Talli tradisional Emirati diakui UNESCO berwarna emas pada krepe premium, dengan tanda rumah Bint Saeed Abu Dhabi. Set perjalanan koordinat desainer mewah untuk UEA, GCC, London, Paris, dan garderobe dunia. Dibuat di Abu Dhabi, UEA. Pengiriman dunia.`,
  `Perincian Bint Saeed Soho Set Navy Blue — close-up hiasan Al Talli tradisional Emirati diiktiraf UNESCO berwarna emas pada krepe premium, dengan tanda rumah Bint Saeed Abu Dhabi. Set perjalanan koordinat pereka mewah untuk UAE, GCC, London, Paris, dan almari dunia. Dihasilkan di Abu Dhabi, UAE. Penghantaran seluruh dunia.`,
)

const NAVY_BLUE_GOLD_TRIM_DETAIL_ALTS = altLoc(
  'Lifestyle detail of the Bint Saeed Soho Set in Navy Blue — draped crepe with gold-tone Al Talli chain trim along the edge. UNESCO-recognised Emirati heritage craftsmanship on a contemporary luxury travel coordinate set from Abu Dhabi, United Arab Emirates. Made in Abu Dhabi. Worldwide shipping.',
  'تفصيل lifestyle لطقم Bint Saeed Soho بالكحلي — كريب متدلّ مع شريط تلي ذهبي بطول الحافة. حرفية تراثية إماراتية معترف بها من اليونسكو على طقم سفر منسّق فاخر معاصر من أبوظبي، الإمارات العربية المتحدة. صُنع في أبوظبي. شحن عالمي.',
  'Détail lifestyle du set Bint Saeed Soho en Bleu marine — crêpe drapé avec bordure chaîne Al Talli dorée. Artisanat patrimonial émirati reconnu par l’UNESCO sur un ensemble voyage coordonné de luxe contemporain d’Abou Dabi, Émirats arabes unis. Fabriqué à Abou Dabi. Livraison mondiale.',
  'Dettaglio lifestyle del Bint Saeed Soho Set in Blu navy — crepe drappeggiato con bordo a catena Al Talli dorata. Artigianato patrimoniale emiratino riconosciuto dall’UNESCO su un set viaggio coordinato di lusso contemporaneo da Abu Dhabi, Emirati Arabi Uniti. Realizzato ad Abu Dhabi. Spedizione mondiale.',
  'Detalle lifestyle del set Bint Saeed Soho en Azul marino — crepé drapeado con ribete de cadena Al Talli dorada. Artesanía patrimonial emiratí reconocida por la UNESCO en un set de viaje coordinado de lujo contemporáneo de Abu Dabi, EAU. Hecho en Abu Dabi. Envío mundial.',
  'Lifestyle-деталь комплекта Bint Saeed Soho цвета тёмно-синий — драпированный креп с золотистой цепочной отделкой Al Talli по краю. Эмиратское наследие ЮНЕСКО на современном люксовом travel set из Абу-Даби, ОАЭ. Сделано в Абу-Даби. Доставка по всему миру.',
  'Bint Saeed Soho Set海军蓝生活方式细节——垂坠绉绸边缘金色Al Talli链饰。阿布扎比当代奢华旅行协调套装上的联合国教科文组织阿联酋传承工艺。阿布扎比制造。全球配送。',
  'Lifestyle-Detail des Bint Saeed Soho Set in Marineblau — drapierter Krepp mit goldfarbenem Al-Talli-Kettenbesatz am Saum. UNESCO-emiratisches Erbehandwerk an einem zeitgenössischen Luxus-Reise-Koordinaten-Set aus Abu Dhabi, VAE. Hergestellt in Abu Dhabi. Weltweiter Versand.',
  'Lifestyle-detail van de Bint Saeed Soho Set in Marineblauw — gedrapeerd crêpe met goudkleurige Al Talli-kettingafwerking langs de rand. UNESCO Emiratisch erfgoedvakmanschap op een eigentijdse luxe reis-coördinatieset uit Abu Dhabi, VAE. Gemaakt in Abu Dhabi. Wereldwijde verzending.',
  'Detalhe lifestyle do set Bint Saeed Soho em Azul-marinho — crepe drapado com acabamento em corrente Al Talli dourada na orla. Artesanato patrimonial emirati UNESCO num set viagem coordenado de luxo contemporâneo de Abu Dhabi, EAU. Feito em Abu Dhabi. Envio mundial.',
  'Detail lifestyle Bint Saeed Soho Set Navy Blue — crepe terjatuh dengan trim rantai Al Talli emas di tepi. Kerajinan warisan Emirati UNESCO pada set perjalanan koordinat mewah kontemporer dari Abu Dhabi, UEA. Dibuat di Abu Dhabi. Pengiriman dunia.',
  'Butiran gaya hidup Bint Saeed Soho Set Navy Blue — crepe terjatuh dengan hiasan rantai Al Talli emas di tepi. Kraf warisan Emirati UNESCO pada set perjalanan koordinat mewah kontemporari dari Abu Dhabi, UAE. Dihasilkan di Abu Dhabi. Penghantaran seluruh dunia.',
)

const NAVY_BLUE_GOLD_TRIM_DETAIL_TITLES = altLoc(
  'Soho Set Navy Blue Gold Trim Detail | Al Talli | Bint Saeed Abu Dhabi',
  'طقم Soho كحلي | تفصيل التلي الذهبي | Bint Saeed أبوظبي',
  'Set Soho Bleu marine — détail bordure dorée | Al Talli | Bint Saeed Abou Dabi',
  'Soho Set Blu navy — dettaglio bordo dorato | Al Talli | Bint Saeed Abu Dhabi',
  'Set Soho Azul marino — detalle ribete dorado | Al Talli | Bint Saeed Abu Dabi',
  'Комплект Soho тёмно-синий — золотая отделка | Al Talli | Bint Saeed Абу-Даби',
  'Soho Set海军蓝金饰细节 | Al Talli | Bint Saeed 阿布扎比',
  'Soho Set Marineblau — Goldbesatz-Detail | Al Talli | Bint Saeed Abu Dhabi',
  'Soho Set Marineblauw — gouden trimdetail | Al Talli | Bint Saeed Abu Dhabi',
  'Set Soho Azul-marinho — detalhe de acabamento dourado | Al Talli | Bint Saeed Abu Dhabi',
  'Soho Set Navy Blue — detail trim emas | Al Talli | Bint Saeed Abu Dhabi',
  'Soho Set Navy Blue — butiran hiasan emas | Al Talli | Bint Saeed Abu Dhabi',
)

/** Curated PDP image alts — Soho Set (Deep Black & Navy Blue). Travel set + Al Talli discovery optimised. */
export const SOHO_SET_IMAGE_ALT_ENTRIES: AltEntry[] = [
  entry('black', 'front'),
  entry('black', 'side'),
  entry('black', 'back'),
  entry('black', 'lifestyle-1'),
  entry('black', 'lifestyle-2'),
  entry('navy-blue', 'front'),
  entry('navy-blue', 'side'),
  entry('navy-blue', 'back'),
  entry('navy-blue', 'lifestyle-1'),
  entry('navy-blue', 'lifestyle-2'),
  {
    filename: 'bint-saeed-soho-set-navy-blue-lifestyle-3.webp',
    alts: NAVY_BLUE_LIFESTYLE_3_ALTS,
  },
  {
    filename: 'bint-saeed-soho-set-navy-blue-lifestyle-gold-trim-detail.webp',
    alts: NAVY_BLUE_GOLD_TRIM_DETAIL_ALTS,
    titles: NAVY_BLUE_GOLD_TRIM_DETAIL_TITLES,
  },
]
