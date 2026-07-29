import type { HomeEditorialCopy } from '@/lib/i18n/homeEditorialCopyI18n'

const HEX = [
  { hex: '#1a0210' },
  { hex: '#8b5a2b' },
  { hex: '#f4b8c5' },
  { hex: '#1f7a5e' },
] as const

const TITLES = [
  'The Monogram',
  'Al Khous',
  'Knotted Lines',
  'Al Ain Rosette',
  'Al Talli',
  'The Strands',
] as const

function pack(
  p: Omit<
    HomeEditorialCopy,
    | 'heroHeadline'
    | 'abayaStrandsEyebrow'
    | 'abayaStrandsHeading'
    | 'abayaStrandsBody'
    | 'shopStrandsCta'
    | 'carriedCloseEyebrow'
    | 'personalisationHeading'
    | 'personalisationBody'
    | 'personalisationCta'
    | 'shopNowCta'
  > &
    Partial<
      Pick<
        HomeEditorialCopy,
        | 'heroHeadline'
        | 'abayaStrandsEyebrow'
        | 'abayaStrandsHeading'
        | 'abayaStrandsBody'
        | 'shopStrandsCta'
        | 'carriedCloseEyebrow'
        | 'personalisationHeading'
        | 'personalisationBody'
        | 'personalisationCta'
        | 'shopNowCta'
      >
    >,
): HomeEditorialCopy {
  return {
    heroHeadline: '',
    abayaStrandsEyebrow: '',
    abayaStrandsHeading: '',
    abayaStrandsBody: '',
    shopStrandsCta: '',
    carriedCloseEyebrow: '',
    personalisationHeading: '',
    personalisationBody: '',
    personalisationCta: '',
    shopNowCta: '',
    ...p,
  }
}

export const HOME_ES = pack({
  heroSubline: 'Llevar el patrimonio más lejos.',
  heroBrandStoryCta: 'Nuestra historia',
  manifestoLead: 'Bint Saeed',
  manifestoQuote: 'Un sentido de sí que no cambia con el lugar.',
  manifestoSnippets: [
    'Dondequiera que se viva la vida — de Abu Dhabi a Londres, de Riad a París, de Doha a Marbella — no hace falta cambiar la forma en que se presenta. Cada pieza lleva su elegancia, su manera de ser, con la misma constancia, dondequiera que esté.',
    'Bint Saeed existe en la intersección del patrimonio y una vida contemporánea — llevada más allá de las fronteras, reconocida por su constancia.',
  ],
  manifestoImageEyebrow: 'De Abu Dhabi al mundo',
  manifestoLabel: 'MANIFIESTO',
  manifestoReadStory: 'Leer nuestra historia',
  chapterLabel: 'CAPÍTULO I',
  collectionHeading: 'LA COLECCIÓN',
  pillars: [
    {
      title: 'Hecho en Abu Dhabi',
      copy: 'Cada pieza se termina en series limitadas, con atención al corte, al caído y a la longevidad.',
    },
    {
      title: 'Firmas en piedra natural',
      copy: 'Strands y detalles se eligen por su historia, su simbolismo y su portabilidad en el tiempo.',
    },
    {
      title: 'Personalización incluida',
      copy: 'Puede añadirse una nota en el bolsillo oculto — para regalar, para un hito, para un sentido privado.',
    },
  ],
  strandSwatches: [
    { name: 'Ónix', hex: HEX[0].hex },
    { name: 'Ojo de tigre', hex: HEX[1].hex },
    { name: 'Cuarzo rosa', hex: HEX[2].hex },
    { name: 'Malaquita', hex: HEX[3].hex },
  ],
  shopCta: 'TIENDA',
  returnToShopCta: 'Volver a la tienda',
  categoryFocus: 'Enfoque de categoría',
  categoryNewIn: 'Novedades',
  categoryHiddenPocketGift: 'Regalo bolsillo oculto',
  pricePrefix: 'AED',
  houseCodesEyebrow: 'House Codes',
  houseCodesHeading: 'THE HOUSE CODES',
  discoverCodesCta: 'Descubrir The Codes',
  storyCodes: [
    { title: TITLES[0], subtitle: 'Marca de la maison', imageAlt: 'Monograma de la maison Bint Saeed — house code' },
    { title: TITLES[1], subtitle: 'Artesanía de la palma', imageAlt: 'Tejido Al Khous en frondas de palmera — patrimonio emiratí, house code' },
    { title: TITLES[2], subtitle: 'Línea y continuidad', imageAlt: 'Motivo dorado Knotted Lines of Lineage — house code' },
    { title: TITLES[3], subtitle: 'Motivo regional', imageAlt: 'Motivo Al Ain Rosette en cornalina — house code' },
    { title: TITLES[4], subtitle: 'Hilo de oro', imageAlt: 'Bordado tradicional Al Talli emiratí — house code' },
    { title: TITLES[5], subtitle: 'Líneas de cuentas', imageAlt: 'Strands de piedras naturales para abaya — house code de patrimonio emiratí' },
  ],
  mediaAlts: {
    strandsCollection: 'Colección Strands Bint Saeed',
    strandsCarouselAlts: ['', '', '', ''] as const,
    personalisationLabel: 'Etiqueta interior personalizada Bint Saeed',
    campaignGazelles: 'Panorama de campaña Bint Saeed — gacelas de Abu Dhabi',
    heroMobile: 'Abayas Bint Saeed burdeos y negro, fotografía editorial de grupo',
    heroDesktop: 'Abayas de lujo Bint Saeed, fotografía editorial',
    manifestoPortrait: 'Bint Saeed — de Abu Dhabi al mundo',
    categoryPreview: (label) => `Vista previa ${label}`,
  },
  createdForYouEyebrow: 'Llevado cerca',
  createdForYouHeading: 'PERSONALIZACIÓN',
  createdForYouBody:
    'Cada pieza incluye un bolsillo oculto, personalizable con un nombre, una fecha o un mensaje privado. Ideal para el Eid, bodas e hitos.',
  formatPriceRange: (min, max) => `AED ${min.toLocaleString('es-ES')}-${max.toLocaleString('es-ES')}`,
  formatPriceFrom: (min) => `AED ${min.toLocaleString('es-ES')}+`,
  formatProductPrice: (price) => `AED ${price.toLocaleString('es-ES')}`,
})

export const HOME_RU = pack({
  heroSubline: 'Нести наследие дальше.',
  heroBrandStoryCta: 'Наша история',
  manifestoLead: 'Bint Saeed',
  manifestoQuote: 'Чувство себя, которое не меняется с местом.',
  manifestoSnippets: [
    'Где бы ни проживалась жизнь — от Abu Dhabi до Лондона, от Эр-Рияда до Парижа, от Дохи до Марбельи — не нужно менять то, как вы себя представляете. Каждая вещь несёт вашу элегантность, ваш способ быть, с той же спокойной постоянностью, где бы вы ни были.',
    'Bint Saeed существует на пересечении наследия и современной жизни — несомая через границы, узнаваемая по своей постоянности.',
  ],
  manifestoImageEyebrow: 'Из Abu Dhabi в мир',
  manifestoLabel: 'МАНИФЕСТ',
  manifestoReadStory: 'Читать нашу историю',
  chapterLabel: 'ГЛАВА I',
  collectionHeading: 'КОЛЛЕКЦИЯ',
  pillars: [
    {
      title: 'Создано в Abu Dhabi',
      copy: 'Каждая вещь завершается малыми сериями — с вниманием к крою, посадке и долговечности.',
    },
    {
      title: 'Подписи из натурального камня',
      copy: 'Strands и детали выбираются по истории, символике и носкости во времени.',
    },
    {
      title: 'Персонализация включена',
      copy: 'В скрытый карман можно добавить записку — для подарка, вехи, частного смысла.',
    },
  ],
  strandSwatches: [
    { name: 'Оникс', hex: HEX[0].hex },
    { name: 'Тигровый глаз', hex: HEX[1].hex },
    { name: 'Розовый кварц', hex: HEX[2].hex },
    { name: 'Малахит', hex: HEX[3].hex },
  ],
  shopCta: 'МАГАЗИН',
  returnToShopCta: 'Вернуться в магазин',
  categoryFocus: 'Фокус категории',
  categoryNewIn: 'Новинки',
  categoryHiddenPocketGift: 'Подарок со скрытым карманом',
  pricePrefix: 'AED',
  houseCodesEyebrow: 'House Codes',
  houseCodesHeading: 'THE HOUSE CODES',
  discoverCodesCta: 'Открыть The Codes',
  storyCodes: [
    { title: TITLES[0], subtitle: 'Знак дома', imageAlt: 'Монограмма дома Bint Saeed — house code' },
    { title: TITLES[1], subtitle: 'Пальмовое ремесло', imageAlt: 'Плетение Al Khous из пальмовых листьев — эмиратское наследие, house code' },
    { title: TITLES[2], subtitle: 'Линия и преемственность', imageAlt: 'Золотой мотив Knotted Lines of Lineage — house code' },
    { title: TITLES[3], subtitle: 'Региональный мотив', imageAlt: 'Мотив Al Ain Rosette из сердолика — house code' },
    { title: TITLES[4], subtitle: 'Золотая нить', imageAlt: 'Традиционная эмиратская вышивка Al Talli — house code' },
    { title: TITLES[5], subtitle: 'Линии бусин', imageAlt: 'Абайя Strands из натурального камня — эмиратское наследие, house code' },
  ],
  mediaAlts: {
    strandsCollection: 'Коллекция Strands Bint Saeed',
    strandsCarouselAlts: ['', '', '', ''] as const,
    personalisationLabel: 'Персонализированная внутренняя этикетка Bint Saeed',
    campaignGazelles: 'Кампанийная панорама Bint Saeed — газели Abu Dhabi',
    heroMobile: 'Абайи Bint Saeed бордо и чёрный, редакционная групповая съёмка',
    heroDesktop: 'Люксовые абайи Bint Saeed, редакционная съёмка',
    manifestoPortrait: 'Bint Saeed — из Abu Dhabi в мир',
    categoryPreview: (label) => `Превью ${label}`,
  },
  createdForYouEyebrow: 'Носится близко',
  createdForYouHeading: 'ПЕРСОНАЛИЗАЦИЯ',
  createdForYouBody:
    'В каждой вещи есть скрытый карман — с именем, датой или личным сообщением. К Eid, свадьбам и вехам.',
  formatPriceRange: (min, max) => `AED ${min.toLocaleString('ru-RU')}-${max.toLocaleString('ru-RU')}`,
  formatPriceFrom: (min) => `AED ${min.toLocaleString('ru-RU')}+`,
  formatProductPrice: (price) => `AED ${price.toLocaleString('ru-RU')}`,
})

export const HOME_ZH = pack({
  heroSubline: '将传承带得更远。',
  heroBrandStoryCta: '我们的故事',
  manifestoLead: 'Bint Saeed',
  manifestoQuote: '一种不因地点而改变的自我感。',
  manifestoSnippets: [
    '无论生活在何处——从阿布扎比到伦敦，从利雅得到巴黎，从多哈到马贝拉——您无需改变呈现自己的方式。每一件单品都以同样的从容，承载您的优雅与存在方式。',
    'Bint Saeed 存在于传承与当代生活的交汇处——跨越边界被佩戴，以其恒定而被辨识。',
  ],
  manifestoImageEyebrow: '从阿布扎比走向世界',
  manifestoLabel: '宣言',
  manifestoReadStory: '阅读我们的故事',
  chapterLabel: '第一章',
  collectionHeading: '系列',
  pillars: [
    {
      title: '成形于阿布扎比',
      copy: '每件单品以小批量完成，关注剪裁、垂坠与经久。',
    },
    {
      title: '天然石印记',
      copy: 'Strands 与细节依其故事、象征与可长久性而选。',
    },
    {
      title: '含个性化定制',
      copy: '可在隐藏口袋中加入字条——用于馈赠、里程碑或私密意义。',
    },
  ],
  strandSwatches: [
    { name: '缟玛瑙', hex: HEX[0].hex },
    { name: '虎眼石', hex: HEX[1].hex },
    { name: '粉水晶', hex: HEX[2].hex },
    { name: '孔雀石', hex: HEX[3].hex },
  ],
  shopCta: '选购',
  returnToShopCta: '返回选购',
  categoryFocus: '品类焦点',
  categoryNewIn: '新品',
  categoryHiddenPocketGift: '隐藏口袋礼赠',
  pricePrefix: 'AED',
  houseCodesEyebrow: 'House Codes',
  houseCodesHeading: 'THE HOUSE CODES',
  discoverCodesCta: '探索 The Codes',
  storyCodes: [
    { title: TITLES[0], subtitle: '品牌印记', imageAlt: 'Bint Saeed 品牌字母标 — house code' },
    { title: TITLES[1], subtitle: '棕榈工艺', imageAlt: 'Al Khous 棕榈叶编织 — 阿联酋传承，house code' },
    { title: TITLES[2], subtitle: '线与延续', imageAlt: 'Knotted Lines of Lineage 金饰 — house code' },
    { title: TITLES[3], subtitle: '地域纹样', imageAlt: 'Al Ain Rosette 红玉髓纹样 — house code' },
    { title: TITLES[4], subtitle: '金线', imageAlt: '传统 Al Talli 阿联酋刺绣 — house code' },
    { title: TITLES[5], subtitle: '珠线', imageAlt: '天然石长袍 Strands — 阿联酋传承 house code' },
  ],
  mediaAlts: {
    strandsCollection: 'Bint Saeed Strands 系列',
    strandsCarouselAlts: ['', '', '', ''] as const,
    personalisationLabel: 'Bint Saeed 个性化内标',
    campaignGazelles: 'Bint Saeed 广告全景 — 阿布扎比瞪羚',
    heroMobile: 'Bint Saeed 酒红与黑色长袍，编辑群像摄影',
    heroDesktop: 'Bint Saeed 奢华长袍，编辑摄影',
    manifestoPortrait: 'Bint Saeed — 从阿布扎比走向世界',
    categoryPreview: (label) => `${label}预览`,
  },
  createdForYouEyebrow: '贴身携带',
  createdForYouHeading: '个性化定制',
  createdForYouBody:
    '每件单品含隐藏口袋，可定制姓名、日期或私密留言。适于开斋节、婚礼与人生节点。',
  formatPriceRange: (min, max) => `AED ${min.toLocaleString('zh-CN')}-${max.toLocaleString('zh-CN')}`,
  formatPriceFrom: (min) => `AED ${min.toLocaleString('zh-CN')}+`,
  formatProductPrice: (price) => `AED ${price.toLocaleString('zh-CN')}`,
})

export const HOME_ID = pack({
  heroSubline: 'Membawa warisan lebih jauh.',
  heroBrandStoryCta: 'Kisah kami',
  manifestoLead: 'Bint Saeed',
  manifestoQuote: 'Rasa diri yang tidak berubah bersama tempat.',
  manifestoSnippets: [
    'Di mana pun kehidupan dijalani — dari Abu Dhabi ke London, dari Riyadh ke Paris, dari Doha ke Marbella — Anda tidak perlu mengubah cara Anda menampilkan diri. Setiap potongan membawa keanggunan Anda, cara Anda menjadi, dengan ketenangan yang sama, di mana pun Anda berada.',
    'Bint Saeed ada di persimpangan warisan dan kehidupan kontemporer — dibawa melampaui batas, dikenali dari keteguhannya.',
  ],
  manifestoImageEyebrow: 'Dari Abu Dhabi ke dunia',
  manifestoLabel: 'MANIFESTO',
  manifestoReadStory: 'Baca kisah kami',
  chapterLabel: 'BAB I',
  collectionHeading: 'KOLEKSI',
  pillars: [
    {
      title: 'Dibuat di Abu Dhabi',
      copy: 'Setiap potongan diselesaikan dalam seri kecil, dengan perhatian pada potongan, jatuhan, dan daya tahan.',
    },
    {
      title: 'Tanda tangan batu alam',
      copy: 'Strands dan detail dipilih untuk kisah, simbolisme, dan kenyamanan dipakai sepanjang waktu.',
    },
    {
      title: 'Personalisasi termasuk',
      copy: 'Catatan di saku tersembunyi dapat ditambahkan — untuk hadiah, tonggak, atau makna pribadi.',
    },
  ],
  strandSwatches: [
    { name: 'Oniks', hex: HEX[0].hex },
    { name: 'Mata harimau', hex: HEX[1].hex },
    { name: 'Kuarsa merah muda', hex: HEX[2].hex },
    { name: 'Malakit', hex: HEX[3].hex },
  ],
  shopCta: 'BELANJA',
  returnToShopCta: 'Kembali ke belanja',
  categoryFocus: 'Fokus kategori',
  categoryNewIn: 'Baru tiba',
  categoryHiddenPocketGift: 'Hadiah saku tersembunyi',
  pricePrefix: 'AED',
  houseCodesEyebrow: 'House Codes',
  houseCodesHeading: 'THE HOUSE CODES',
  discoverCodesCta: 'Temukan The Codes',
  storyCodes: [
    { title: TITLES[0], subtitle: 'Tanda maison', imageAlt: 'Monogram maison Bint Saeed — house code' },
    { title: TITLES[1], subtitle: 'Kriya palem', imageAlt: 'Tenun Al Khous dari pelepah palem — warisan Emirat, house code' },
    { title: TITLES[2], subtitle: 'Garis dan kesinambungan', imageAlt: 'Motif emas Knotted Lines of Lineage — house code' },
    { title: TITLES[3], subtitle: 'Motif regional', imageAlt: 'Motif Al Ain Rosette batu carnelian — house code' },
    { title: TITLES[4], subtitle: 'Benang emas', imageAlt: 'Sulaman tradisional Al Talli Emirat — house code' },
    { title: TITLES[5], subtitle: 'Garis manik', imageAlt: 'Strands batu alam untuk abaya — warisan Emirat, house code' },
  ],
  mediaAlts: {
    strandsCollection: 'Koleksi Strands Bint Saeed',
    strandsCarouselAlts: ['', '', '', ''] as const,
    personalisationLabel: 'Label dalam personalisasi Bint Saeed',
    campaignGazelles: 'Panorama kampanye Bint Saeed — gazelle Abu Dhabi',
    heroMobile: 'Abaya Bint Saeed maroon dan hitam, fotografi editorial kelompok',
    heroDesktop: 'Abaya mewah Bint Saeed, fotografi editorial',
    manifestoPortrait: 'Bint Saeed — dari Abu Dhabi ke dunia',
    categoryPreview: (label) => `Pratinjau ${label}`,
  },
  createdForYouEyebrow: 'Dibawa dekat',
  createdForYouHeading: 'PERSONALISASI',
  createdForYouBody:
    'Setiap potongan memiliki saku tersembunyi, dapat dipersonalisasi dengan nama, tanggal, atau pesan pribadi. Cocok untuk Eid, pernikahan, dan tonggak.',
  formatPriceRange: (min, max) => `AED ${min.toLocaleString('id-ID')}-${max.toLocaleString('id-ID')}`,
  formatPriceFrom: (min) => `AED ${min.toLocaleString('id-ID')}+`,
  formatProductPrice: (price) => `AED ${price.toLocaleString('id-ID')}`,
})

export const HOME_MS = pack({
  heroSubline: 'Membawa warisan lebih jauh.',
  heroBrandStoryCta: 'Kisah kami',
  manifestoLead: 'Bint Saeed',
  manifestoQuote: 'Rasa diri yang tidak berubah bersama tempat.',
  manifestoSnippets: [
    'Di mana jua kehidupan dijalani — dari Abu Dhabi ke London, dari Riyadh ke Paris, dari Doha ke Marbella — anda tidak perlu mengubah cara anda menampilkan diri. Setiap potongan membawa keanggunan anda, cara anda menjadi, dengan ketenteraman yang sama, di mana jua anda berada.',
    'Bint Saeed wujud di persimpangan warisan dan kehidupan kontemporari — dibawa melangkaui sempadan, dikenali melalui keteguhannya.',
  ],
  manifestoImageEyebrow: 'Dari Abu Dhabi ke dunia',
  manifestoLabel: 'MANIFESTO',
  manifestoReadStory: 'Baca kisah kami',
  chapterLabel: 'BAB I',
  collectionHeading: 'KOLEKSI',
  pillars: [
    {
      title: 'Dibuat di Abu Dhabi',
      copy: 'Setiap potongan disiapkan dalam siri kecil, dengan perhatian pada potongan, jatuhan dan ketahanan.',
    },
    {
      title: 'Tanda tangan batu semula jadi',
      copy: 'Strands dan perincian dipilih untuk kisah, simbolisme dan keselesaan dipakai sepanjang masa.',
    },
    {
      title: 'Pemperibadian termasuk',
      copy: 'Nota dalam poket tersembunyi boleh ditambah — untuk hadiah, peristiwa penting, atau makna peribadi.',
    },
  ],
  strandSwatches: [
    { name: 'Oniks', hex: HEX[0].hex },
    { name: 'Mata harimau', hex: HEX[1].hex },
    { name: 'Kuarsa merah jambu', hex: HEX[2].hex },
    { name: 'Malakit', hex: HEX[3].hex },
  ],
  shopCta: 'BELI',
  returnToShopCta: 'Kembali ke beli',
  categoryFocus: 'Fokus kategori',
  categoryNewIn: 'Baru tiba',
  categoryHiddenPocketGift: 'Hadiah poket tersembunyi',
  pricePrefix: 'AED',
  houseCodesEyebrow: 'House Codes',
  houseCodesHeading: 'THE HOUSE CODES',
  discoverCodesCta: 'Temui The Codes',
  storyCodes: [
    { title: TITLES[0], subtitle: 'Tanda maison', imageAlt: 'Monogram maison Bint Saeed — house code' },
    { title: TITLES[1], subtitle: 'Ketukangan palma', imageAlt: 'Tenunan Al Khous daripada pelepah palma — warisan Emirati, house code' },
    { title: TITLES[2], subtitle: 'Garis dan kesinambungan', imageAlt: 'Motif emas Knotted Lines of Lineage — house code' },
    { title: TITLES[3], subtitle: 'Motif serantau', imageAlt: 'Motif Al Ain Rosette batu carnelian — house code' },
    { title: TITLES[4], subtitle: 'Benang emas', imageAlt: 'Sulaman tradisional Al Talli Emirati — house code' },
    { title: TITLES[5], subtitle: 'Garis manik', imageAlt: 'Strands batu semula jadi untuk abaya — warisan Emirati, house code' },
  ],
  mediaAlts: {
    strandsCollection: 'Koleksi Strands Bint Saeed',
    strandsCarouselAlts: ['', '', '', ''] as const,
    personalisationLabel: 'Label dalam diperibadikan Bint Saeed',
    campaignGazelles: 'Panorama kempen Bint Saeed — gazelle Abu Dhabi',
    heroMobile: 'Abaya Bint Saeed maroon dan hitam, fotografi editorial kumpulan',
    heroDesktop: 'Abaya mewah Bint Saeed, fotografi editorial',
    manifestoPortrait: 'Bint Saeed — dari Abu Dhabi ke dunia',
    categoryPreview: (label) => `Pratonton ${label}`,
  },
  createdForYouEyebrow: 'Dibawa dekat',
  createdForYouHeading: 'PEMPERIBADIAN',
  createdForYouBody:
    'Setiap potongan mempunyai poket tersembunyi, boleh diperibadikan dengan nama, tarikh atau mesej peribadi. Sesuai untuk Eid, perkahwinan dan peristiwa penting.',
  formatPriceRange: (min, max) => `AED ${min.toLocaleString('ms-MY')}-${max.toLocaleString('ms-MY')}`,
  formatPriceFrom: (min) => `AED ${min.toLocaleString('ms-MY')}+`,
  formatProductPrice: (price) => `AED ${price.toLocaleString('ms-MY')}`,
})
