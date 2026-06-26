import type { AppLocale } from '@/lib/i18n/routing'
import { altLoc } from '@/lib/products/imageAltOverridesI18n'

type AltEntry = { filename: string; alts: Record<AppLocale, string> }

type ColorSlug = 'burgundy' | 'black' | 'navy-blue'

const COLOR_LABEL: Record<ColorSlug, Record<AppLocale, string>> = {
  burgundy: altLoc('Burgundy', 'Burgundy', 'Burgundy', 'Burgundy', 'Burgundy', 'Burgundy', '酒红色', 'Burgundy', 'Burgundy', 'Burgundy', 'Burgundy', 'Burgundy'),
  black: altLoc('Deep Black', 'أسود عميق', 'Noir profond', 'Nero profondo', 'Negro profundo', 'глубокий чёрный', '深黑色', 'Tiefschwarz', 'Diepzwart', 'Preto profundo', 'Hitam pekat', 'Hitam pekat'),
  'navy-blue': altLoc('Navy Blue', 'كحلي', 'Bleu marine', 'Blu navy', 'Azul marino', 'тёмно-синий', '海军蓝', 'Marineblau', 'Marineblauw', 'Azul-marinho', 'Biru navy', 'Biru laut'),
}

function frontAlts(color: ColorSlug): Record<AppLocale, string> {
  const c = COLOR_LABEL[color]
  return altLoc(
    `Bint Saeed Covent Garden Al Talli Abaya in ${c.en}, front view. Luxury designer A-line abaya featuring UNESCO-recognised traditional Emirati Al Talli woven cuff trim, signature Knotted Line gold-tone shoulder epaulettes, and an elegant open-front silhouette. Buy Al Talli abaya UAE — heritage modest fashion and contemporary Emirati craftsmanship from Dubai and Abu Dhabi to the GCC and worldwide. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.`,
    `عباية Bint Saeed Covent Garden بتفاصيل التلي في ${c.ar}، منظر أمامي. عباية مصمّمة فاخرة بقصة A-line تتضمن أساور التلي المنسوج التراثي الإماراتي المعترف به من اليونسكو، وكتفان Knotted Line الذهبية، وقصّة أمامية مفتوحة أنيقة. شراء عباية التلي الإمارات — أزياء محتشمة تراثية وحرفية إماراتية معاصرة من دبي وأبوظبي إلى الخليج والعالم. صُنعت في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.`,
    `Abaya Bint Saeed Covent Garden Al Talli en ${c.fr}, vue de face. Abaya de créateur de luxe A-line avec garniture tissée Al Talli émiratie traditionnelle reconnue par l’UNESCO, épaulettes dorées Knotted Line signature et silhouette ouverte élégante. Acheter abaya Al Talli EAU — mode modeste patrimoniale et artisanat émirati contemporain de Dubaï et Abou Dabi vers le Golfe et le monde. Fabriquée à Abou Dabi, Émirats arabes unis. Livraison mondiale.`,
    `Bint Saeed Covent Garden Abaya Al Talli in ${c.it}, vista frontale. Abaya designer di lusso A-line con finitura in Al Talli tessuto tradizionale emiratino riconosciuto dall’UNESCO, spalline Knotted Line dorate signature e silhouette frontale aperta elegante. Comprare abaya Al Talli EAU — modest fashion patrimoniale e artigianato emiratino contemporaneo da Dubai e Abu Dhabi al Golfo e al mondo. Realizzata ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.`,
    `Abaya Bint Saeed Covent Garden Al Talli en ${c.es}, vista frontal. Abaya de diseñador de lujo A-line con ribete tejido Al Talli tradicional emiratí reconocido por la UNESCO, hombreras Knotted Line doradas signature y silueta frontal abierta elegante. Comprar abaya Al Talli EAU — moda modesta patrimonial y artesanía emiratí contemporánea de Dubái y Abu Dabi al Golfo y al mundo. Hecha en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.`,
    `Абайя Bint Saeed Covent Garden Al Talli цвета ${c.ru}, вид спереди. Люксовая дизайнерская абайя A-line с отделкой из тканого традиционного эмиратского Al Talli (наследие ЮНЕСКО), фирменными золотистыми погонами Knotted Line и элегантным открытым силуэтом. Купить абайю Al Talli ОАЭ — скромная мода наследия и современное эмиратское мастерство из Дубая и Абу-Даби в страны Залива и мир. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.`,
    `Bint Saeed Covent Garden Al Talli 长袍${c.zh}正面视图。奢华设计师A字长袍，联合国教科文组织认可的传统阿联酋Al Talli编织袖口饰边、标志性Knotted Line金色肩章与优雅开襟廓形。购买阿联酋Al Talli长袍——从迪拜与阿布扎比至海湾与全球的传承端庄时尚与当代阿联酋工艺。阿联酋阿布扎比制造。全球配送。`,
    `Bint Saeed Covent Garden Al-Talli-Abaya in ${c.de}, Frontansicht. Luxus-Designer-A-Linien-Abaya mit UNESCO-anerkanntem traditionellem emiratischem Al-Talli-Webmanschettenbesatz, charakteristischen goldfarbenen Knotted-Line-Schulterklappen und eleganter offener Frontsilhouette. Al-Talli-Abaya VAE kaufen — Erbe-bescheidene Mode und zeitgenössisches emiratisches Handwerk von Dubai und Abu Dhabi in den Golf und die Welt. Hergestellt in Abu Dhabi, VAE. Weltweiter Versand.`,
    `Bint Saeed Covent Garden Al Talli abaya in ${c.nl}, vooraanzicht. Luxe designer A-line abaya met door UNESCO erkende traditionele Emiratische Al Talli geweven manchetafwerking, kenmerkende goudkleurige Knotted Line epauletten en elegante open-front silhouet. Al Talli abaya VAE kopen — erfgoed bescheiden mode en eigentijds Emiratisch vakmanschap van Dubai en Abu Dhabi naar de Golf en wereldwijd. Gemaakt in Abu Dhabi, VAE. Wereldwijde verzending.`,
    `Abaya Bint Saeed Covent Garden Al Talli em ${c.pt}, vista frontal. Abaya de designer de luxo A-line com acabamento em Al Talli tecido tradicional emirati reconhecido pela UNESCO, ombreiras Knotted Line douradas signature e silhueta frontal aberta elegante. Comprar abaya Al Talli EAU — moda modesta patrimonial e artesanato emirati contemporâneo de Dubai e Abu Dhabi para o Golfo e o mundo. Feita em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.`,
    `Bint Saeed Covent Garden Al Talli Abaya ${c.id}, tampak depan. Abaya desainer mewah A-line dengan trim Al Talli tenun tradisional Emirati yang diakui UNESCO, epaulet Knotted Line emas signature, dan siluet depan terbuka elegan. Beli abaya Al Talli UEA — busana modest warisan dan kerajinan Emirati kontemporer dari Dubai dan Abu Dhabi ke GCC dan dunia. Dibuat di Abu Dhabi, UEA. Pengiriman dunia.`,
    `Bint Saeed Covent Garden Al Talli Abaya ${c.ms}, pandangan hadapan. Abaya pereka mewah A-line dengan hiasan Al Talli tenunan tradisional Emirati diiktiraf UNESCO, epaulet Knotted Line emas signature, dan siluet hadapan terbuka anggun. Beli abaya Al Talli UAE — fesyen sopan warisan dan kraf Emirati kontemporari dari Dubai dan Abu Dhabi ke GCC dan seluruh dunia. Dihasilkan di Abu Dhabi, UAE. Penghantaran seluruh dunia.`,
  )
}

function sideAlts(color: ColorSlug): Record<AppLocale, string> {
  const c = COLOR_LABEL[color]
  return altLoc(
    `Three-quarter view of the Bint Saeed Covent Garden Al Talli Abaya in ${c.en} showcasing flowing A-line drape, UNESCO heritage Al Talli woven trim along the cuffs, and signature Knotted Line shoulder detailing. Luxury Emirati designer abaya — traditional Talli embroidery reimagined for women in the UAE, GCC, London, Paris, and international wardrobes. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.`,
    `منظر ثلاثة أرباع لعباية Bint Saeed Covent Garden بتفاصيل التلي في ${c.ar} يبرز انسيابية A-line، وتفاصيل التلي المنسوج التراثية المعترف بها من اليونسكو على الأساور، وتفاصيل كتف Knotted Line المميزة. عباية مصمّم إماراتية فاخرة — تطريز التلي التقليدي بصياغة معاصرة لنساء الإمارات والخليج ولندن وباريس والخزائن الدولية. صُنعت في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.`,
    `Vue trois-quarts de l’abaya Bint Saeed Covent Garden Al Talli en ${c.fr} mettant en valeur la tombée A-line fluide, la garniture tissée Al Talli patrimoine UNESCO sur les poignets et le détail d’épaule Knotted Line signature. Abaya de créateur émiratie de luxe — broderie Talli traditionnelle réinventée pour les femmes des EAU, du Golfe, de Londres, de Paris et des garde-robes internationales. Fabriquée à Abou Dabi, Émirats arabes unis. Livraison mondiale.`,
    `Vista tre quarti della Bint Saeed Covent Garden Abaya Al Talli in ${c.it} con drappeggio A-line fluido, finitura in Al Talli tessuto patrimonio UNESCO sui polsini e dettaglio spalla Knotted Line signature. Abaya designer emiratina di lusso — ricamo Talli tradizionale reinterpretato per donne negli EAU, nel Golfo, a Londra, Parigi e guardaroba internazionali. Realizzata ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.`,
    `Vista tres cuartos de la abaya Bint Saeed Covent Garden Al Talli en ${c.es} con caída A-line fluida, ribete tejido Al Talli patrimonio UNESCO en los puños y detalle de hombro Knotted Line signature. Abaya de diseñador emiratí de lujo — bordado Talli tradicional reimaginado para mujeres en EAU, Golfo, Londres, París y armarios internacionales. Hecha en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.`,
    `Вид три четверти абайи Bint Saeed Covent Garden Al Talli цвета ${c.ru} с плавной драпировкой A-line, отделкой из тканого Al Talli наследия ЮНЕСКО на манжетах и фирменной деталью плеч Knotted Line. Люксовая абайя эмиратского дизайнера — традиционная вышивка Talli в современном прочтении для женщин ОАЭ, стран Залива, Лондона, Парижа и международных гардеробов. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.`,
    `Bint Saeed Covent Garden Al Talli 长袍${c.zh}四分之三视图，展现流畅A字垂坠、袖口联合国教科文组织Al Talli传承编织饰边与标志性Knotted Line肩部细节。奢华阿联酋设计师长袍——传统Talli刺绣为阿联酋、海湾、伦敦、巴黎及国际衣橱女性重新诠释。阿布扎比制造。全球配送。`,
    `Dreiviertelansicht der Bint Saeed Covent Garden Al-Talli-Abaya in ${c.de} mit fließendem A-Linien-Fall, UNESCO-Erbe-Al-Talli-Webverzierung an den Manschetten und charakteristischem Knotted-Line-Schulterdetail. Luxus-Abaya emiratischer Designer — traditionelle Talli-Stickerei neu gedacht für Frauen in den VAE, im Golf, in London, Paris und internationalen Garderoben. Hergestellt in Abu Dhabi, VAE. Weltweiter Versand.`,
    `Driekwartweergave van de Bint Saeed Covent Garden Al Talli abaya in ${c.nl} met vloeiende A-line drape, UNESCO-erfenis Al Talli geweven afwerking op de manchetten en kenmerkend Knotted Line schouderdetail. Luxe Emiratische designer abaya — traditioneel Talli borduurwerk heruitgevonden voor vrouwen in de VAE, Golf, Londen, Parijs en internationale garderobes. Gemaakt in Abu Dhabi, VAE. Wereldwijde verzending.`,
    `Vista de três quartos da abaya Bint Saeed Covent Garden Al Talli em ${c.pt} com caimento A-line fluido, acabamento em Al Talli tecido património UNESCO nas mangas e detalhe de ombro Knotted Line signature. Abaya de designer emirati de luxo — bordado Talli tradicional reimaginado para mulheres nos EAU, Golfo, Londres, Paris e guarda-roupa internacionais. Feita em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.`,
    `Pandangan tiga perempat Bint Saeed Covent Garden Al Talli Abaya ${c.id} menampilkan drape A-line mengalir, trim Al Talli tenun warisan UNESCO di manset, dan detail bahu Knotted Line signature. Abaya desainer Emirati mewah — sulaman Talli tradisional yang ditafsirkan ulang untuk wanita di UEA, GCC, London, Paris, dan garderobe internasional. Dibuat di Abu Dhabi, UEA. Pengiriman dunia.`,
    `Pandangan tiga suku Bint Saeed Covent Garden Al Talli Abaya ${c.ms} mempamerkan jatuhan A-line mengalir, hiasan Al Talli tenunan warisan UNESCO di cuff, dan detail bahu Knotted Line signature. Abaya pereka Emirati mewah — sulaman Talli tradisional ditafsir semula untuk wanita di UAE, GCC, London, Paris, dan almari antarabangsa. Dihasilkan di Abu Dhabi, UAE. Penghantaran seluruh dunia.`,
  )
}

function backAlts(color: ColorSlug): Record<AppLocale, string> {
  const c = COLOR_LABEL[color]
  return altLoc(
    `Back view of the Bint Saeed Covent Garden Al Talli Abaya in ${c.en} highlighting elegant A-line silhouette, full-length flowing drape, and contemporary designer tailoring that celebrates UNESCO-listed Emirati Al Talli heritage craftsmanship. Premium luxury abaya designed in Abu Dhabi for UAE, GCC, and global modest fashion. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.`,
    `منظر خلفي لعباية Bint Saeed Covent Garden بتفاصيل التلي في ${c.ar} يبرز سيلويت A-line الأنيق، والانسياب الكامل، والتفصيل المصمّم المعاصر الذي يحتفي بحرفية التلي الإماراتية التراثية المدرجة في اليونسكو. عباية فاخرة راقية صُممت في أبوظبي للإمارات والخليج وأزياء المحتشمة العالمية. صُنعت في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.`,
    `Vue de dos de l’abaya Bint Saeed Covent Garden Al Talli en ${c.fr} soulignant la silhouette A-line élégante, la tombée fluide pleine longueur et la tailleur de créateur contemporaine célébrant l’artisanat patrimonial Al Talli émirati inscrit à l’UNESCO. Abaya de luxe premium conçue à Abou Dabi pour les EAU, le Golfe et la mode modeste mondiale. Fabriquée à Abou Dabi, Émirats arabes unis. Livraison mondiale.`,
    `Vista posteriore della Bint Saeed Covent Garden Abaya Al Talli in ${c.it} con elegante silhouette A-line, caduta fluida a tutta lunghezza e sartoria designer contemporanea che celebra l’artigianato patrimoniale Al Talli emiratino UNESCO. Abaya di lusso premium progettata ad Abu Dhabi per EAU, Golfo e modest fashion globale. Realizzata ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.`,
    `Vista trasera de la abaya Bint Saeed Covent Garden Al Talli en ${c.es} con silueta A-line elegante, caída fluida de largo completo y sastrería de diseñador contemporánea que celebra la artesanía patrimonial Al Talli emiratí de la UNESCO. Abaya de lujo premium diseñada en Abu Dabi para EAU, Golfo y moda modesta global. Hecha en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.`,
    `Вид сзади абайи Bint Saeed Covent Garden Al Talli цвета ${c.ru} с элегантным A-line силуэтом, плавной драпировкой во всю длину и современным дизайнерским кроем, прославляющим эмиратское наследие Al Talli из списка ЮНЕСКО. Премиальная люксовая абайя, созданная в Абу-Даби для ОАЭ, стран Залива и мировой скромной моды. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.`,
    `Bint Saeed Covent Garden Al Talli 长袍${c.zh}背面视图，凸显优雅A字廓形、全长流畅垂坠与致敬联合国教科文组织阿联酋Al Talli传承工艺的当代设计师剪裁。阿布扎比设计的高端奢华长袍，面向阿联酋、海湾及全球端庄时尚。阿布扎比制造。全球配送。`,
    `Rückansicht der Bint Saeed Covent Garden Al-Talli-Abaya in ${c.de} mit eleganter A-Linien-Silhouette, fließendem Ganzkörperfall und zeitgenössischer Designer-Schneiderkunst, die UNESCO-gelistetes emiratisches Al-Talli-Erbe feiert. Premium-Luxusabaya aus Abu Dhabi für VAE, Golf und globale bescheidene Mode. Hergestellt in Abu Dhabi, VAE. Weltweiter Versand.`,
    `Achteraanzicht van de Bint Saeed Covent Garden Al Talli abaya in ${c.nl} met elegante A-line silhouet, vloeiende drape over volledige lengte en eigentijds designer tailoring dat UNESCO-Emiratisch Al Talli-erfgoed viert. Premium luxe abaya ontworpen in Abu Dhabi voor VAE, Golf en wereldwijde bescheiden mode. Gemaakt in Abu Dhabi, VAE. Wereldwijde verzending.`,
    `Vista traseira da abaya Bint Saeed Covent Garden Al Talli em ${c.pt} com silhueta A-line elegante, caimento fluido de comprimento total e alfaiataria de designer contemporânea que celebra o artesanato patrimonial Al Talli emirati da UNESCO. Abaya de luxo premium desenhada em Abu Dhabi para EAU, Golfo e moda modesta global. Feita em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.`,
    `Tampak belakang Bint Saeed Covent Garden Al Talli Abaya ${c.id} menonjolkan siluet A-line elegan, drape mengalir penuh, dan tailoring desainer kontemporer yang merayakan kerajinan warisan Al Talli Emirati UNESCO. Abaya mewah premium dirancang di Abu Dhabi untuk UEA, GCC, dan busana modest global. Dibuat di Abu Dhabi, UEA. Pengiriman dunia.`,
    `Pandangan belakang Bint Saeed Covent Garden Al Talli Abaya ${c.ms} menyerlahkan siluet A-line anggun, jatuhan mengalir penuh, dan jahitan pereka kontemporari yang meraikan kraf warisan Al Talli Emirati UNESCO. Abaya mewah premium direka di Abu Dhabi untuk UAE, GCC, dan fesyen sopan global. Dihasilkan di Abu Dhabi, UAE. Penghantaran seluruh dunia.`,
  )
}

const EMBLEM_CLOSE_UP_ALTS = altLoc(
  'Close-up of traditional Emirati Al Talli woven trim and detachable statement sash on the Bint Saeed Covent Garden Abaya — UNESCO Intangible Cultural Heritage embroidery with metallic thread, rich crepe fabric, and signature gold-tone Bint Saeed emblem pin. What is Al Talli? Luxury Al Talli abaya craftsmanship designed in Abu Dhabi, United Arab Emirates for UAE, GCC, and worldwide discovery. Worldwide shipping.',
  'لقطة مقرّبة لتفاصيل التلي المنسوج الإماراتي التقليدي والوشاح القابل للفصل على عباية Bint Saeed Covent Garden — تطريز تراث اليونسكو بخيوط معدنية، وقماش كريب غني، ودبوس الشعار الذهبي المميز من Bint Saeed. ما هو التلي؟ حرفية عباية التلي الفاخرة صُممت في أبوظبي، الإمارات العربية المتحدة للإمارات والخليج والاكتشاف العالمي. شحن عالمي.',
  'Gros plan de la garniture tissée Al Talli émiratie traditionnelle et de l’écharpe statement amovible sur l’abaya Bint Saeed Covent Garden — broderie du patrimoine immatériel UNESCO au fil métallique, riche crêpe et épingle emblème dorée signature Bint Saeed. Qu’est-ce que l’Al Talli ? Artisanat d’abaya Al Talli de luxe conçu à Abou Dabi, EAU pour les EAU, le Golfe et la découverte mondiale. Livraison mondiale.',
  'Primo piano della finitura in Al Talli tessuto tradizionale emiratino e della fascia statement removibile sulla Bint Saeed Covent Garden Abaya — ricamo patrimonio immateriale UNESCO con filo metallico, ricco crepe e spilla emblema dorata signature Bint Saeed. Che cos’è Al Talli? Artigianato abaya Al Talli di lusso progettato ad Abu Dhabi, EAU per EAU, Golfo e scoperta mondiale. Spedizione mondiale.',
  'Primer plano del ribete tejido Al Talli tradicional emiratí y del fajín statement desmontable en la abaya Bint Saeed Covent Garden — bordado patrimonio inmaterial UNESCO con hilo metálico, crepé rico y pin de emblema dorado signature Bint Saeed. ¿Qué es Al Talli? Artesanía de abaya Al Talli de lujo diseñada en Abu Dabi, EAU para EAU, Golfo y descubrimiento mundial. Envío mundial.',
  'Крупный план традиционной эмиратской тканой отделки Al Talli и съёмной statement-ленты на абайе Bint Saeed Covent Garden — вышивка нематериального наследия ЮНЕСКО металлической нитью, насыщенный креп и фирменная золотистая булавка-эмблема Bint Saeed. Что такое Al Talli? Люксовое мастерство абайи Al Talli, созданное в Абу-Даби, ОАЭ для ОАЭ, Залива и мирового поиска. Доставка по всему миру.',
  'Bint Saeed Covent Garden Abaya传统阿联酋Al Talli编织饰边与可拆卸statement饰带特写——联合国教科文组织非物质文化遗产金属线刺绣、浓郁绉绸与标志性Bint Saeed金色徽章胸针。什么是Al Talli？阿布扎比设计的奢华Al Talli长袍工艺，面向阿联酋、海湾及全球发现。全球配送。',
  'Nahaufnahme der traditionellen emiratischen Al-Talli-Webverzierung und des abnehmbaren Statement-Schals an der Bint Saeed Covent Garden Abaya — UNESCO-immaterielles Kulturerbe-Stickerei mit Metallfaden, reichem Krepp und charakteristischer goldfarbener Bint Saeed-Emblempin. Was ist Al Talli? Luxus-Al-Talli-Abaya-Handwerk aus Abu Dhabi, VAE für VAE, Golf und weltweite Entdeckung. Weltweiter Versand.',
  'Close-up van traditionele Emiratische Al Talli geweven afwerking en afneembare statement-sjaal op de Bint Saeed Covent Garden abaya — UNESCO immaterieel erfgoed borduurwerk met metallic draad, rijk crepe en kenmerkende goudkleurige Bint Saeed-emblempin. Wat is Al Talli? Luxe Al Talli abaya vakmanschap ontworpen in Abu Dhabi, VAE voor VAE, Golf en wereldwijde ontdekking. Wereldwijde verzending.',
  'Close-up do acabamento em Al Talli tecido tradicional emirati e da faixa statement destacável na abaya Bint Saeed Covent Garden — bordado património imaterial UNESCO com fio metálico, crepe rico e alfinete de emblema dourado signature Bint Saeed. O que é Al Talli? Artesanato de abaya Al Talli de luxo desenhado em Abu Dhabi, EAU para EAU, Golfo e descoberta mundial. Envio mundial.',
  'Close-up hiasan Al Talli tenun tradisional Emirati dan sash statement lepas pada Bint Saeed Covent Garden Abaya — sulaman warisan budaya takbenda UNESCO dengan benang metalik, kain crepe kaya, dan pin lambang emas signature Bint Saeed. Apa itu Al Talli? Kerajinan abaya Al Talli mewah dirancang di Abu Dhabi, UEA untuk UEA, GCC, dan penemuan dunia. Pengiriman dunia.',
  'Close-up hiasan Al Talli tenunan tradisional Emirati dan sash statement boleh tanggal pada Bint Saeed Covent Garden Abaya — sulaman warisan budaya tidak ketara UNESCO dengan benang logam, kain crepe kaya, dan pin lambang emas signature Bint Saeed. Apakah Al Talli? Kraf abaya Al Talli mewah direka di Abu Dhabi, UAE untuk UAE, GCC, dan penemuan dunia. Penghantaran seluruh dunia.',
)

function entry(color: ColorSlug, view: 'front' | 'side' | 'back'): AltEntry {
  const alts =
    view === 'front' ? frontAlts(color) : view === 'side' ? sideAlts(color) : backAlts(color)
  return {
    filename: `bint-saeed-covent-garden-abaya-${color}-${view}.webp`,
    alts,
  }
}

/** Curated PDP image alts — Covent Garden Abaya (all colours). Al Talli discovery optimised. */
export const COVENT_GARDEN_ABAYA_IMAGE_ALT_ENTRIES: AltEntry[] = [
  entry('burgundy', 'front'),
  entry('burgundy', 'side'),
  entry('burgundy', 'back'),
  {
    filename: 'bint-saeed-covent-garden-abaya-burgundy-close-up-signature-emblem.jpg',
    alts: EMBLEM_CLOSE_UP_ALTS,
  },
  entry('black', 'front'),
  entry('black', 'side'),
  entry('black', 'back'),
  entry('navy-blue', 'front'),
  entry('navy-blue', 'side'),
  entry('navy-blue', 'back'),
]
