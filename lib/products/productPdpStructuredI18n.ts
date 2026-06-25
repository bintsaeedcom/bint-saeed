import type { AppLocale } from '@/lib/i18n/routing'

export type PdpStructuredStrings = {
  introLead: (name: string, desc: string) => string
  stylingSuffix: string
  introOccasions: (name: string) => string
  introClosing: string
  colour: string
  availableColours: string
  madeIn: string
  oneSize: string
  maxLength: (cm: number, inches: number) => string
  adjustableTies: string
  modelHeight: string
  availableSizes: string
  customLength: string
}

const EN: PdpStructuredStrings = {
  introLead: (name, desc) =>
    `${name} is designed for women who understand that elegance is never static. ${desc}`,
  stylingSuffix:
    'Hidden construction and finishing are considered throughout, so the piece reads as effortless from every angle.',
  introOccasions: (name) =>
    `Lightweight, versatile, and designed to be worn for years rather than seasons, ${name} moves effortlessly between occasions. Worn for a wedding, a celebration, a dinner abroad, or an ordinary day that deserves something extraordinary, it adapts naturally to the life of the woman who wears it. It is not defined by a destination, a city, or a moment. It becomes part of her story and travels wherever she does.`,
  introClosing:
    'It is a piece chosen not only for how it looks, but for how it makes a woman feel the moment she puts it on.',
  colour: 'Colour',
  availableColours: 'Available colours',
  madeIn: 'Made in Abu Dhabi, UAE',
  oneSize: 'One Size',
  maxLength: (cm, inches) => `Maximum garment length: ${cm} cm / ${inches} inches`,
  adjustableTies: 'Adjustable silhouette through hidden internal ties',
  modelHeight: 'Model is 155 cm / 61 inches tall',
  availableSizes: 'Available sizes',
  customLength: 'Custom length available upon request',
}

const AR: PdpStructuredStrings = {
  introLead: (name, desc) =>
    `صُمّم ${name} للمرأة التي تدرك أن الأناقة ليست ثابتة. ${desc}`,
  stylingSuffix: 'تُعتمد التفاصيل الإنشائية والتشطيبات بعناية، ليبدو القطعة أنيقة بلا جهد من كل زاوية.',
  introOccasions: (name) =>
    `خفيف ومتعدد الاستخدامات، ومصمَّم ليُرتدى لسنوات لا لمواسم، ينتقل ${name} بسلاسة بين المناسبات. سواء لحفل زفاف أو احتفال أو عشاء في الخارج أو يوم عادي يستحق شيئاً مميزاً، يتكيف طبيعياً مع حياة المرأة التي ترتديه. لا يُحدَّد بوجهة أو مدينة أو لحظة. يصبح جزءاً من قصتها ويرافقها أينما ذهبت.`,
  introClosing: 'قطعة تُختار ليس فقط لما تبدو عليه، بل لما تشعر به المرأة لحظة ارتدائها.',
  colour: 'اللون',
  availableColours: 'الألوان المتاحة',
  madeIn: 'صُنع في أبوظبي، الإمارات العربية المتحدة',
  oneSize: 'مقاس واحد',
  maxLength: (cm, inches) => `الطول الأقصى للقطعة: ${cm} سم / ${inches} بوصة`,
  adjustableTies: 'قصة قابلة للتعديل عبر أربطة داخلية مخفية',
  modelHeight: 'طول العارضة 155 سم / 61 بوصة',
  availableSizes: 'المقاسات المتاحة',
  customLength: 'طول مخصص متاح عند الطلب',
}

const FR: PdpStructuredStrings = {
  introLead: (name, desc) =>
    `${name} est conçu pour les femmes qui comprennent que l'élégance n'est jamais statique. ${desc}`,
  stylingSuffix:
    'La construction et les finitions sont pensées dans les moindres détails, pour une pièce élégante sous tous les angles.',
  introOccasions: (name) =>
    `Léger, polyvalent et conçu pour être porté pendant des années plutôt que des saisons, ${name} passe avec aisance d'une occasion à l'autre. Pour un mariage, une célébration, un dîner à l'étranger ou un jour ordinaire qui mérite l'exceptionnel, il s'adapte naturellement à la vie de la femme qui le porte. Il n'est défini ni par une destination, ni par une ville, ni par un instant. Il devient partie de son histoire et voyage avec elle.`,
  introClosing:
    "C'est une pièce choisie non seulement pour son apparence, mais pour ce qu'elle fait ressentir à la femme dès qu'elle l'enfile.",
  colour: 'Couleur',
  availableColours: 'Couleurs disponibles',
  madeIn: 'Fabriqué à Abou Dabi, Émirats arabes unis',
  oneSize: 'Taille unique',
  maxLength: (cm, inches) => `Longueur maximale du vêtement : ${cm} cm / ${inches} pouces`,
  adjustableTies: 'Silhouette ajustable grâce à des liens internes dissimulés',
  modelHeight: 'Le mannequin mesure 155 cm / 61 pouces',
  availableSizes: 'Tailles disponibles',
  customLength: 'Longueur sur mesure disponible sur demande',
}

const DE: PdpStructuredStrings = {
  introLead: (name, desc) =>
    `${name} ist für Frauen geschaffen, die verstehen, dass Eleganz niemals statisch ist. ${desc}`,
  stylingSuffix:
    'Konstruktion und Verarbeitung sind durchdacht, damit das Stück von jeder Seite mühelos wirkt.',
  introOccasions: (name) =>
    `Leicht, vielseitig und für Jahre statt für Saisons konzipiert, bewegt sich ${name} mühelos zwischen Anlässen. Ob Hochzeit, Feier, Dinner im Ausland oder ein gewöhnlicher Tag, der etwas Besonderes verdient — es passt sich dem Leben der Frau an, die es trägt. Es wird nicht durch Ziel, Stadt oder Moment definiert. Es wird Teil ihrer Geschichte und reist mit ihr.`,
  introClosing:
    'Ein Stück, das nicht nur wegen seines Aussehens gewählt wird, sondern wegen des Gefühls beim Anziehen.',
  colour: 'Farbe',
  availableColours: 'Verfügbare Farben',
  madeIn: 'Hergestellt in Abu Dhabi, VAE',
  oneSize: 'One Size',
  maxLength: (cm, inches) => `Maximale Kleidungslänge: ${cm} cm / ${inches} Zoll`,
  adjustableTies: 'Anpassbare Silhouette durch versteckte innere Bänder',
  modelHeight: 'Model ist 155 cm / 61 Zoll groß',
  availableSizes: 'Verfügbare Größen',
  customLength: 'Individuelle Länge auf Anfrage erhältlich',
}

const IT: PdpStructuredStrings = {
  introLead: (name, desc) =>
    `${name} è pensato per le donne che comprendono che l'eleganza non è mai statica. ${desc}`,
  stylingSuffix:
    'Costruzione e finiture sono curate in ogni dettaglio, perché il capo risulti effortless da ogni angolazione.',
  introOccasions: (name) =>
    `Leggero, versatile e creato per essere indossato per anni piuttosto che per stagioni, ${name} si muove con naturalezza tra le occasioni. Per un matrimonio, una celebrazione, una cena all'estero o un giorno ordinario che merita qualcosa di straordinario, si adatta alla vita della donna che lo indossa. Non è definito da una destinazione, una città o un momento. Diventa parte della sua storia e viaggia con lei.`,
  introClosing:
    'Un capo scelto non solo per come appare, ma per come fa sentire la donna nel momento in cui lo indossa.',
  colour: 'Colore',
  availableColours: 'Colori disponibili',
  madeIn: 'Realizzato ad Abu Dhabi, Emirati Arabi Uniti',
  oneSize: 'Taglia unica',
  maxLength: (cm, inches) => `Lunghezza massima del capo: ${cm} cm / ${inches} pollici`,
  adjustableTies: 'Silhouette regolabile tramite lacci interni nascosti',
  modelHeight: 'La modella è alta 155 cm / 61 pollici',
  availableSizes: 'Taglie disponibili',
  customLength: 'Lunghezza personalizzata disponibile su richiesta',
}

const ES: PdpStructuredStrings = {
  introLead: (name, desc) =>
    `${name} está diseñado para mujeres que entienden que la elegancia nunca es estática. ${desc}`,
  stylingSuffix:
    'La construcción y los acabados se consideran en cada detalle, para que la pieza se lea effortless desde cualquier ángulo.',
  introOccasions: (name) =>
    `Ligero, versátil y creado para usarse durante años y no solo temporadas, ${name} se mueve con naturalidad entre ocasiones. Para una boda, una celebración, una cena en el extranjero o un día ordinario que merece algo extraordinario, se adapta a la vida de la mujer que lo lleva. No está definido por un destino, una ciudad o un momento. Se convierte en parte de su historia y viaja con ella.`,
  introClosing:
    'Una pieza elegida no solo por cómo se ve, sino por cómo hace sentir a la mujer en el momento de ponérsela.',
  colour: 'Color',
  availableColours: 'Colores disponibles',
  madeIn: 'Hecho en Abu Dabi, Emiratos Árabes Unidos',
  oneSize: 'Talla única',
  maxLength: (cm, inches) => `Longitud máxima de la prenda: ${cm} cm / ${inches} pulgadas`,
  adjustableTies: 'Silueta ajustable mediante lazos internos ocultos',
  modelHeight: 'La modelo mide 155 cm / 61 pulgadas',
  availableSizes: 'Tallas disponibles',
  customLength: 'Largo personalizado disponible bajo pedido',
}

const RU: PdpStructuredStrings = {
  introLead: (name, desc) =>
    `${name} создан для женщин, которые понимают: элегантность никогда не бывает неподвижной. ${desc}`,
  stylingSuffix:
    'Конструкция и отделка продуманы до мелочей, чтобы изделие выглядело без усилий с любого ракурса.',
  introOccasions: (name) =>
    `Лёгкий, универсальный и созданный для ношения годами, а не сезонами, ${name} естественно переходит от одного случая к другому. Свадьба, праздник, ужин за границей или обычный день, достойный особенного — он подстраивается под жизнь женщины, которая его носит. Он не определяется местом, городом или моментом. Он становится частью её истории и путешествует с ней.`,
  introClosing:
    'Вещь выбирают не только за внешний вид, но и за ощущение в момент, когда она надевается.',
  colour: 'Цвет',
  availableColours: 'Доступные цвета',
  madeIn: 'Сделано в Абу-Даби, ОАЭ',
  oneSize: 'One Size',
  maxLength: (cm, inches) => `Максимальная длина изделия: ${cm} см / ${inches} дюймов`,
  adjustableTies: 'Регулируемый силуэт с помощью скрытых внутренних завязок',
  modelHeight: 'Рост модели 155 см / 61 дюйм',
  availableSizes: 'Доступные размеры',
  customLength: 'Индивидуальная длина по запросу',
}

const ZH: PdpStructuredStrings = {
  introLead: (name, desc) =>
    `${name} 为懂得优雅从不停滞的女性而设计。${desc}`,
  stylingSuffix: '结构与收边均经过细致考量，使单品从每个角度都从容得体。',
  introOccasions: (name) =>
    `${name} 轻盈多变，为经年穿着而非一季潮流而生，在不同场合间自然流转。婚礼、庆典、海外晚宴，或值得特别的寻常一日——它顺应穿着者的生活节奏。它不囿于目的地、城市或某一时刻，而成为她故事的一部分，随她远行。`,
  introClosing: '被选中的不仅在于外观，更在于穿上那一刻带给女性的感受。',
  colour: '颜色',
  availableColours: '可选颜色',
  madeIn: '阿联酋阿布扎比制作',
  oneSize: '均码',
  maxLength: (cm, inches) => `服装最大长度：${cm} 厘米 / ${inches} 英寸`,
  adjustableTies: '可通过隐藏内系带调节廓形',
  modelHeight: '模特身高 155 厘米 / 61 英寸',
  availableSizes: '可选尺码',
  customLength: '可按需定制长度',
}

const NL: PdpStructuredStrings = {
  introLead: (name, desc) =>
    `${name} is ontworpen voor vrouwen die begrijpen dat elegantie nooit statisch is. ${desc}`,
  stylingSuffix:
    'Constructie en afwerking zijn zorgvuldig afgewerkt, zodat het stuk vanuit elke hoek moeiteloos oogt.',
  introOccasions: (name) =>
    `Licht, veelzijdig en gemaakt om jarenlang gedragen te worden in plaats van één seizoen, beweegt ${name} moeiteloos tussen gelegenheden. Voor een bruiloft, een viering, een diner in het buitenland of een gewone dag die iets bijzonders verdient — het past zich aan het leven van de vrouw die het draagt. Het wordt niet gedefinieerd door bestemming, stad of moment. Het wordt deel van haar verhaal en reist met haar mee.`,
  introClosing:
    'Een stuk dat niet alleen wordt gekozen om hoe het eruitziet, maar om hoe het voelt op het moment dat het wordt aangetrokken.',
  colour: 'Kleur',
  availableColours: 'Beschikbare kleuren',
  madeIn: 'Gemaakt in Abu Dhabi, VAE',
  oneSize: 'One Size',
  maxLength: (cm, inches) => `Maximale lengte van het kledingstuk: ${cm} cm / ${inches} inch`,
  adjustableTies: 'Verstelbaar silhouet via verborgen interne banden',
  modelHeight: 'Model is 155 cm / 61 inch lang',
  availableSizes: 'Beschikbare maten',
  customLength: 'Aangepaste lengte op aanvraag beschikbaar',
}

const PT: PdpStructuredStrings = {
  introLead: (name, desc) =>
    `${name} foi concebido para mulheres que compreendem que a elegância nunca é estática. ${desc}`,
  stylingSuffix:
    'A construção e os acabamentos são pensados em detalhe, para que a peça se leia com naturalidade de qualquer ângulo.',
  introOccasions: (name) =>
    `Leve, versátil e criado para ser usado durante anos e não apenas temporadas, ${name} move-se naturalmente entre ocasiões. Para um casamento, uma celebração, um jantar no estrangeiro ou um dia comum que merece algo extraordinário, adapta-se à vida da mulher que o veste. Não é definido por um destino, uma cidade ou um momento. Torna-se parte da sua história e viaja com ela.`,
  introClosing:
    'Uma peça escolhida não só pelo aspeto, mas pelo que faz sentir à mulher no momento em que a veste.',
  colour: 'Cor',
  availableColours: 'Cores disponíveis',
  madeIn: 'Feito em Abu Dhabi, Emirados Árabes Unidos',
  oneSize: 'Tamanho único',
  maxLength: (cm, inches) => `Comprimento máximo da peça: ${cm} cm / ${inches} polegadas`,
  adjustableTies: 'Silhueta ajustável através de laços internos ocultos',
  modelHeight: 'A modelo mede 155 cm / 61 polegadas',
  availableSizes: 'Tamanhos disponíveis',
  customLength: 'Comprimento personalizado disponível mediante pedido',
}

const ID: PdpStructuredStrings = {
  introLead: (name, desc) =>
    `${name} dirancang untuk wanita yang memahami bahwa keanggunan tidak pernah statis. ${desc}`,
  stylingSuffix:
    'Konstruksi dan finishing dipertimbangkan secara menyeluruh, sehingga karya terlihat effortless dari setiap sudut.',
  introOccasions: (name) =>
    `Ringan, serbaguna, dan dirancang untuk dikenakan selama bertahun-tahun, ${name} bergerak dengan natural di antara berbagai kesempatan. Untuk pernikahan, perayaan, makan malam di luar negeri, atau hari biasa yang layak mendapat sesuatu yang istimewa — ia beradaptasi pada kehidupan wanita yang memakainya. Tidak ditentukan oleh destinasi, kota, atau momen. Ia menjadi bagian dari kisahnya dan menemani ke mana pun ia pergi.`,
  introClosing:
    'Karya yang dipilih tidak hanya karena penampilannya, tetapi karena perasaan yang diberikannya saat dikenakan.',
  colour: 'Warna',
  availableColours: 'Warna tersedia',
  madeIn: 'Dibuat di Abu Dhabi, Uni Emirat Arab',
  oneSize: 'One Size',
  maxLength: (cm, inches) => `Panjang garment maksimum: ${cm} cm / ${inches} inci`,
  adjustableTies: 'Siluet dapat disesuaikan melalui tali internal tersembunyi',
  modelHeight: 'Model tinggi 155 cm / 61 inci',
  availableSizes: 'Ukuran tersedia',
  customLength: 'Panjang custom tersedia atas permintaan',
}

const MS: PdpStructuredStrings = {
  introLead: (name, desc) =>
    `${name} direka untuk wanita yang memahami bahawa keanggunan tidak pernah statik. ${desc}`,
  stylingSuffix:
    'Pembinaan dan kemasan dipertimbangkan sepenuhnya, agar karya kelihatan effortless dari setiap sudut.',
  introOccasions: (name) =>
    `Ringan, serba guna, dan direka untuk dipakai selama bertahun-tahun, ${name} bergerak secara semula jadi antara majlis. Sama ada perkahwinan, perayaan, majlis makan malam di luar negara, atau hari biasa yang layak mendapat sesuatu yang istimewa — ia menyesuaikan diri dengan kehidupan wanita yang memakainya. Ia tidak ditentukan oleh destinasi, bandar, atau detik. Ia menjadi sebahagian daripada kisahnya dan mengembara ke mana sahaja dia pergi.`,
  introClosing:
    'Karya yang dipilih bukan sahaja kerana rupanya, tetapi kerana perasaan yang diberikannya apabila dipakai.',
  colour: 'Warna',
  availableColours: 'Warna tersedia',
  madeIn: 'Dibuat di Abu Dhabi, Emiriah Arab Bersatu',
  oneSize: 'One Size',
  maxLength: (cm, inches) => `Panjang garment maksimum: ${cm} cm / ${inches} inci`,
  adjustableTies: 'Siluet boleh laras melalui tali dalaman tersembunyi',
  modelHeight: 'Model tinggi 155 cm / 61 inci',
  availableSizes: 'Saiz tersedia',
  customLength: 'Panjang tersuai tersedia atas permintaan',
}

export const PDP_STRUCTURED_STRINGS: Record<AppLocale, PdpStructuredStrings> = {
  en: EN,
  ar: AR,
  fr: FR,
  de: DE,
  it: IT,
  es: ES,
  ru: RU,
  zh: ZH,
  nl: NL,
  pt: PT,
  id: ID,
  ms: MS,
}

export function pdpStructuredStrings(locale: AppLocale): PdpStructuredStrings {
  return PDP_STRUCTURED_STRINGS[locale] ?? EN
}
