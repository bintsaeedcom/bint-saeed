import type { AppLocale } from '@/lib/i18n/routing'

type ProductPageUiPersonalisation = {
  title: string
  desc: string
  noPersonalisation: string
  personalise: string
  /** Quiet checkout CTA — collapsed until the shopper opens it. */
  checkoutOptional: string
  placeholder: string
  customisedNoReturn: string
  emptyError: string
}

export type ProductPageUi = {
  home: string
  shop: string
  backToShop: string
  productNotFound: string
  returnToShop: string
  productDetails: string
  composition: string
  care: string
  faq: string
  readMore: string
  readLess: string
  /** Garment PDP — estimated shipment window (dates from page view). */
  madeToOrderShips: (dateRange: string) => string
  oneSizeMadeToOrderShips: (dateRange: string) => string
  /** Jewellery / accessories PDP only. */
  jewelleryLeadTime: string
  fasterDeliveryPrompt: string
  fasterDeliveryCta: string
  fasterDeliveryWhatsAppMessage: string
  personalisation: ProductPageUiPersonalisation
  ethicallyMade: string
  weGiveForward: string
  worldwideShipping: string
  pairsWellWith: string
  youMayAlsoLike: string
  addToBag: string
}

const PRODUCT_PAGE_UI: Record<AppLocale, ProductPageUi> = {
  en: {
    home: 'Home',
    shop: 'Shop',
    backToShop: 'Back to Shop',
    productNotFound: 'Product Not Found',
    returnToShop: 'Return to Shop',
    productDetails: 'Product Details',
    composition: 'Composition',
    care: 'Care',
    faq: 'FAQ',
    readMore: 'Read more',
    readLess: 'Read less',
    madeToOrderShips: (dateRange: string) =>
      `Ordered, crafted for you then delivered — estimated shipment ${dateRange}`,
    oneSizeMadeToOrderShips: (dateRange: string) =>
      `One size · Ordered, crafted for you then delivered — estimated shipment ${dateRange}`,
    jewelleryLeadTime: 'Ordered, crafted for you then delivered · ships in 4–7 days',
    fasterDeliveryPrompt: 'Need it faster?',
    fasterDeliveryCta: 'Contact us now',
    fasterDeliveryWhatsAppMessage:
      "I'm interested in one of your styles but I need a faster delivery. What are the options?",
    personalisation: {
      title: 'Personalisation',
      desc: 'Add a name, special date or message to the inner label - complimentary.',
      noPersonalisation: 'No personalisation',
      personalise: 'Personalise',
      checkoutOptional: 'Add personalisation (optional)',
      placeholder: 'Your message (max 35 characters)',
      customisedNoReturn: 'Customised pieces are made to your request and cannot be returned or exchanged.',
      emptyError: 'Please enter your personalisation text, or turn personalisation off',
    },
    ethicallyMade: 'Ethically made',
    weGiveForward: 'We Give Forward',
    worldwideShipping: 'Worldwide Shipping',
    pairsWellWith: 'Pairs well with',
    youMayAlsoLike: 'You may also like',
    addToBag: 'Add to Bag',
  },
  ar: {
    home: 'الرئيسية',
    shop: 'المتجر',
    backToShop: 'العودة إلى المتجر',
    productNotFound: 'المنتج غير موجود',
    returnToShop: 'العودة إلى المتجر',
    productDetails: 'تفاصيل المنتج',
    composition: 'الخامة',
    care: 'العناية',
    faq: 'الأسئلة الشائعة',
    readMore: 'اقرأي المزيد',
    readLess: 'عرض أقل',
    madeToOrderShips: (dateRange: string) =>
      `تُطلب، تُصنع لأجلكِ، ثم تُسلَّم — الشحن المتوقع ${dateRange}`,
    oneSizeMadeToOrderShips: (dateRange: string) =>
      `مقاس واحد · تُطلب، تُصنع لأجلكِ، ثم تُسلَّم — الشحن المتوقع ${dateRange}`,
    jewelleryLeadTime: 'تُطلب، تُصنع لأجلكِ، ثم تُسلَّم · تُشحن خلال 4–7 أيام',
    fasterDeliveryPrompt: 'تحتاجينها أسرع؟',
    fasterDeliveryCta: 'تواصلي معنا الآن',
    fasterDeliveryWhatsAppMessage:
      'أنا مهتمة بأحد طرازاتكم وأحتاج إلى توصيل أسرع. ما الخيارات المتاحة؟',
    personalisation: {
      title: 'التخصيص',
      desc: 'أضيفي اسما أو تاريخا أو رسالة على البطاقة الداخلية - مجانا.',
      noPersonalisation: 'بدون تخصيص',
      personalise: 'تخصيص',
      checkoutOptional: 'أضيفي التخصيص (اختياري)',
      placeholder: 'النص (35 حرفا كحد أقصى)',
      customisedNoReturn: 'القطع المخصصة تنفذ حسب طلبك ولا يمكن إرجاعها أو استبدالها.',
      emptyError: 'يرجى إدخال نص التخصيص أو إيقاف خيار التخصيص',
    },
    ethicallyMade: 'صنع أخلاقي',
    weGiveForward: 'العطاء المستمر',
    worldwideShipping: 'شحن عالمي',
    pairsWellWith: 'يتناسق مع',
    youMayAlsoLike: 'قد يعجبك أيضا',
    addToBag: 'أضيفي للسلة',
  },
  fr: {
    home: 'Accueil',
    shop: 'Boutique',
    backToShop: 'Retour à la boutique',
    productNotFound: 'Produit non trouvé',
    returnToShop: 'Retour à la boutique',
    productDetails: 'Détails du produit',
    composition: 'Composition',
    care: 'Entretien',
    faq: 'FAQ',
    readMore: 'Lire plus',
    readLess: 'Lire moins',
    madeToOrderShips: (dateRange: string) =>
      `Commandée, confectionnée pour vous, puis livrée — expédition estimée ${dateRange}`,
    oneSizeMadeToOrderShips: (dateRange: string) =>
      `Taille unique · commandée, confectionnée pour vous, puis livrée — expédition estimée ${dateRange}`,
    jewelleryLeadTime: 'Commandée, confectionnée pour vous, puis livrée · expédiée sous 4 à 7 jours',
    fasterDeliveryPrompt: 'Besoin d’une livraison plus rapide ?',
    fasterDeliveryCta: 'Contactez-nous',
    fasterDeliveryWhatsAppMessage:
      'Je suis intéressée par l’une de vos pièces et j’aurais besoin d’une livraison plus rapide. Quelles sont les options ?',
    personalisation: {
      title: 'Personnalisation',
      desc: 'Ajoutez un prénom, une date spéciale ou un message sur l’étiquette intérieure — offert.',
      noPersonalisation: 'Sans personnalisation',
      personalise: 'Personnaliser',
      checkoutOptional: 'Ajouter une personnalisation (facultatif)',
      placeholder: 'Votre message (max. 35 caractères)',
      customisedNoReturn: 'Les pièces personnalisées sont réalisées sur demande et ne peuvent pas être retournées ni échangées.',
      emptyError: 'Veuillez saisir votre texte de personnalisation ou désactiver la personnalisation',
    },
    ethicallyMade: 'Confection éthique',
    weGiveForward: 'Giving Forward',
    worldwideShipping: 'Livraison mondiale',
    pairsWellWith: 'S’accorde avec',
    youMayAlsoLike: 'Vous pourriez aussi aimer',
    addToBag: 'Ajouter au panier',
  },
  de: {
    home: 'Startseite',
    shop: 'Shop',
    backToShop: 'Zurück zum Shop',
    productNotFound: 'Produkt nicht gefunden',
    returnToShop: 'Zurück zum Shop',
    productDetails: 'Produktdetails',
    composition: 'Material',
    care: 'Pflege',
    faq: 'FAQ',
    readMore: 'Mehr lesen',
    readLess: 'Weniger lesen',
    madeToOrderShips: (dateRange: string) =>
      `Bestellt, für Sie gefertigt, dann geliefert — voraussichtlicher Versand ${dateRange}`,
    oneSizeMadeToOrderShips: (dateRange: string) =>
      `Einheitsgröße · bestellt, für Sie gefertigt, dann geliefert — voraussichtlicher Versand ${dateRange}`,
    jewelleryLeadTime: 'Bestellt, für Sie gefertigt, dann geliefert · Versand in 4–7 Tagen',
    fasterDeliveryPrompt: 'Benötigen Sie es schneller?',
    fasterDeliveryCta: 'Kontaktieren Sie uns',
    fasterDeliveryWhatsAppMessage:
      'Ich interessiere mich für einen Ihrer Styles und benötige eine schnellere Lieferung. Welche Optionen gibt es?',
    personalisation: {
      title: 'Personalisierung',
      desc: 'Fügen Sie einen Namen, ein besonderes Datum oder eine Nachricht auf dem Innenetikett hinzu — kostenfrei.',
      noPersonalisation: 'Ohne Personalisierung',
      personalise: 'Personalisieren',
      checkoutOptional: 'Personalisierung hinzufügen (optional)',
      placeholder: 'Ihre Nachricht (max. 35 Zeichen)',
      customisedNoReturn: 'Personalisierte Teile werden auf Wunsch gefertigt und können nicht zurückgegeben oder umgetauscht werden.',
      emptyError: 'Bitte geben Sie einen Personalisierungstext ein oder deaktivieren Sie die Personalisierung',
    },
    ethicallyMade: 'Ethisch gefertigt',
    weGiveForward: 'Giving Forward',
    worldwideShipping: 'Weltweiter Versand',
    pairsWellWith: 'Passt gut zu',
    youMayAlsoLike: 'Das könnte Ihnen auch gefallen',
    addToBag: 'In die Tasche',
  },
  it: {
    home: 'Home',
    shop: 'Negozio',
    backToShop: 'Torna al negozio',
    productNotFound: 'Prodotto non trovato',
    returnToShop: 'Torna al negozio',
    productDetails: 'Dettagli prodotto',
    composition: 'Composizione',
    care: 'Cura',
    faq: 'FAQ',
    readMore: 'Leggi di più',
    readLess: 'Leggi meno',
    madeToOrderShips: (dateRange: string) =>
      `Ordinata, realizzata per voi, poi consegnata — spedizione stimata ${dateRange}`,
    oneSizeMadeToOrderShips: (dateRange: string) =>
      `Taglia unica · ordinata, realizzata per voi, poi consegnata — spedizione stimata ${dateRange}`,
    jewelleryLeadTime: 'Ordinata, realizzata per voi, poi consegnata · spedizione in 4–7 giorni',
    fasterDeliveryPrompt: 'Vi serve prima?',
    fasterDeliveryCta: 'Contattateci',
    fasterDeliveryWhatsAppMessage:
      'Sono interessata a uno dei vostri modelli e avrei bisogno di una consegna più rapida. Quali sono le opzioni?',
    personalisation: {
      title: 'Personalizzazione',
      desc: 'Aggiungi un nome, una data speciale o un messaggio all’etichetta interna — in omaggio.',
      noPersonalisation: 'Nessuna personalizzazione',
      personalise: 'Personalizza',
      checkoutOptional: 'Aggiungere una personalizzazione (facoltativo)',
      placeholder: 'Il tuo messaggio (max. 35 caratteri)',
      customisedNoReturn: 'I capi personalizzati sono realizzati su richiesta e non possono essere restituiti o cambiati.',
      emptyError: 'Inserisci il testo di personalizzazione oppure disattiva la personalizzazione',
    },
    ethicallyMade: 'Realizzato eticamente',
    weGiveForward: 'Giving Forward',
    worldwideShipping: 'Spedizione mondiale',
    pairsWellWith: 'Si abbina bene con',
    youMayAlsoLike: 'Potrebbe piacerti anche',
    addToBag: 'Aggiungi alla shopping bag',
  },
  es: {
    home: 'Inicio',
    shop: 'Tienda',
    backToShop: 'Volver a la tienda',
    productNotFound: 'Producto no encontrado',
    returnToShop: 'Volver a la tienda',
    productDetails: 'Detalles del producto',
    composition: 'Composicion',
    care: 'Cuidado',
    faq: 'Preguntas frecuentes',
    readMore: 'Leer mas',
    readLess: 'Leer menos',
    madeToOrderShips: (dateRange: string) =>
      `Pedida, confeccionada para usted, luego entregada — envío estimado ${dateRange}`,
    oneSizeMadeToOrderShips: (dateRange: string) =>
      `Talla única · pedida, confeccionada para usted, luego entregada — envío estimado ${dateRange}`,
    jewelleryLeadTime: 'Pedida, confeccionada para usted, luego entregada · envío en 4–7 días',
    fasterDeliveryPrompt: '¿Lo necesita antes?',
    fasterDeliveryCta: 'Contáctenos',
    fasterDeliveryWhatsAppMessage:
      'Me interesa uno de sus estilos y necesito una entrega más rápida. ¿Qué opciones hay?',
    personalisation: {
      title: 'Personalizacion',
      desc: 'Anade un nombre, una fecha especial o un mensaje en la etiqueta interior - de cortesia.',
      noPersonalisation: 'Sin personalizacion',
      personalise: 'Personalizar',
      checkoutOptional: 'Añadir personalización (opcional)',
      placeholder: 'Tu mensaje (maximo 35 caracteres)',
      customisedNoReturn: 'Las piezas personalizadas se confeccionan bajo pedido y no pueden devolverse ni cambiarse.',
      emptyError: 'Introduce tu texto de personalizacion o desactiva la personalizacion',
    },
    ethicallyMade: 'Hecho eticamente',
    weGiveForward: 'Damos hacia adelante',
    worldwideShipping: 'Envio mundial',
    pairsWellWith: 'Combina bien con',
    youMayAlsoLike: 'Tambien te puede gustar',
    addToBag: 'Anadir a la bolsa',
  },
  ru: {
    home: 'Главная',
    shop: 'Магазин',
    backToShop: 'Вернуться в магазин',
    productNotFound: 'Товар не найден',
    returnToShop: 'Вернуться в магазин',
    productDetails: 'Детали товара',
    composition: 'Состав',
    care: 'Уход',
    faq: 'FAQ',
    readMore: 'Читать далее',
    readLess: 'Свернуть',
    madeToOrderShips: (dateRange: string) =>
      `Заказано, создано для вас, затем доставлено — ориентировочная отправка ${dateRange}`,
    oneSizeMadeToOrderShips: (dateRange: string) =>
      `Единый размер · заказано, создано для вас, затем доставлено — ориентировочная отправка ${dateRange}`,
    jewelleryLeadTime: 'Заказано, создано для вас, затем доставлено · отправка за 4–7 дней',
    fasterDeliveryPrompt: 'Нужна более быстрая доставка?',
    fasterDeliveryCta: 'Свяжитесь с нами',
    fasterDeliveryWhatsAppMessage:
      'Меня интересует одна из ваших моделей, и мне нужна более быстрая доставка. Какие есть варианты?',
    personalisation: {
      title: 'Персонализация',
      desc: 'Добавьте имя, особую дату или сообщение на внутреннюю бирку - бесплатно.',
      noPersonalisation: 'Без персонализации',
      personalise: 'Персонализировать',
      checkoutOptional: 'Добавить персонализацию (необязательно)',
      placeholder: 'Ваше сообщение (макс. 35 символов)',
      customisedNoReturn: 'Персонализированные изделия изготавливаются по вашему запросу и не подлежат возврату или обмену.',
      emptyError: 'Введите текст персонализации или отключите персонализацию',
    },
    ethicallyMade: 'Этичное производство',
    weGiveForward: 'Передаем добро дальше',
    worldwideShipping: 'Доставка по миру',
    pairsWellWith: 'Отлично сочетается с',
    youMayAlsoLike: 'Вам также может понравиться',
    addToBag: 'Добавить в сумку',
  },
  zh: {
    home: '首页',
    shop: '商店',
    backToShop: '返回商店',
    productNotFound: '未找到产品',
    returnToShop: '返回商店',
    productDetails: '产品细节',
    composition: '材质成分',
    care: '护理方式',
    faq: '常见问题',
    readMore: '阅读更多',
    readLess: '收起',
    madeToOrderShips: (dateRange: string) =>
      `下单后专为您制作，再行送达 — 预计发货 ${dateRange}`,
    oneSizeMadeToOrderShips: (dateRange: string) =>
      `均码 · 下单后专为您制作，再行送达 — 预计发货 ${dateRange}`,
    jewelleryLeadTime: '下单后专为您制作，再行送达 · 4–7 天内发货',
    fasterDeliveryPrompt: '希望更快收到？',
    fasterDeliveryCta: '立即联系我们',
    fasterDeliveryWhatsAppMessage:
      '我对其中一款款式感兴趣，但需要更快的配送。请问有哪些选择？',
    personalisation: {
      title: '个性化定制',
      desc: '可在内侧标牌添加姓名、特别日期或寄语 - 免费提供。',
      noPersonalisation: '不需要定制',
      personalise: '进行定制',
      checkoutOptional: '添加个性化（可选）',
      placeholder: '您的信息（最多 35 个字符）',
      customisedNoReturn: '定制款按您的要求制作，无法退货或换货。',
      emptyError: '请输入定制内容，或关闭定制选项',
    },
    ethicallyMade: '负责任制作',
    weGiveForward: '善意传递',
    worldwideShipping: '全球配送',
    pairsWellWith: '可搭配',
    youMayAlsoLike: '您可能也喜欢',
    addToBag: '加入购物袋',
  },
  nl: {
    home: 'Home',
    shop: 'Shop',
    backToShop: 'Terug naar shop',
    productNotFound: 'Product niet gevonden',
    returnToShop: 'Terug naar shop',
    productDetails: 'Productdetails',
    composition: 'Samenstelling',
    care: 'Onderhoud',
    faq: 'FAQ',
    readMore: 'Lees meer',
    readLess: 'Lees minder',
    madeToOrderShips: (dateRange: string) =>
      `Besteld, voor u gemaakt, daarna geleverd — verwachte verzending ${dateRange}`,
    oneSizeMadeToOrderShips: (dateRange: string) =>
      `One size · besteld, voor u gemaakt, daarna geleverd — verwachte verzending ${dateRange}`,
    jewelleryLeadTime: 'Besteld, voor u gemaakt, daarna geleverd · verzending binnen 4–7 dagen',
    fasterDeliveryPrompt: 'Sneller nodig?',
    fasterDeliveryCta: 'Neem contact op',
    fasterDeliveryWhatsAppMessage:
      'Ik heb interesse in een van uw stijlen en heb een snellere levering nodig. Wat zijn de mogelijkheden?',
    personalisation: {
      title: 'Personalisatie',
      desc: 'Voeg een naam, betekenisvolle datum of privébericht toe op het binnenlabel — kosteloos.',
      noPersonalisation: 'Geen personalisatie',
      personalise: 'Personaliseren',
      checkoutOptional: 'Personalisatie toevoegen (optioneel)',
      placeholder: 'Uw bericht (max. 35 tekens)',
      customisedNoReturn: 'Gepersonaliseerde stukken worden op verzoek gemaakt en kunnen niet worden geretourneerd of geruild.',
      emptyError: 'Voer uw personalisatietekst in of schakel personalisatie uit',
    },
    ethicallyMade: 'Ethisch gemaakt',
    weGiveForward: 'Wij geven door',
    worldwideShipping: 'Wereldwijde verzending',
    pairsWellWith: 'Combineert goed met',
    youMayAlsoLike: 'Misschien ook iets voor u',
    addToBag: 'Toevoegen aan tas',
  },
  pt: {
    home: 'Início',
    shop: 'Loja',
    backToShop: 'Voltar à loja',
    productNotFound: 'Produto não encontrado',
    returnToShop: 'Voltar à loja',
    productDetails: 'Detalhes do produto',
    composition: 'Composição',
    care: 'Cuidados',
    faq: 'FAQ',
    readMore: 'Ler mais',
    readLess: 'Ler menos',
    madeToOrderShips: (dateRange: string) =>
      `Encomendada, feita para si, depois entregue — envio estimado ${dateRange}`,
    oneSizeMadeToOrderShips: (dateRange: string) =>
      `Tamanho único · encomendada, feita para si, depois entregue — envio estimado ${dateRange}`,
    jewelleryLeadTime: 'Encomendada, feita para si, depois entregue · envio em 4–7 dias',
    fasterDeliveryPrompt: 'Precisa mais depressa?',
    fasterDeliveryCta: 'Contacte-nos',
    fasterDeliveryWhatsAppMessage:
      'Tenho interesse num dos vossos modelos e preciso de uma entrega mais rápida. Quais são as opções?',
    personalisation: {
      title: 'Personalização',
      desc: 'Adicione um nome, data especial ou mensagem na etiqueta interna — cortesia da maison.',
      noPersonalisation: 'Sem personalização',
      personalise: 'Personalizar',
      checkoutOptional: 'Adicionar personalização (opcional)',
      placeholder: 'A sua mensagem (máx. 35 caracteres)',
      customisedNoReturn: 'Peças personalizadas são feitas ao seu pedido e não podem ser devolvidas ou trocadas.',
      emptyError: 'Introduza o texto de personalização ou desative a personalização',
    },
    ethicallyMade: 'Feito com ética',
    weGiveForward: 'Giving Forward',
    worldwideShipping: 'Envio mundial',
    pairsWellWith: 'Combina com',
    youMayAlsoLike: 'Também pode gostar',
    addToBag: 'Adicionar ao saco',
  },
  id: {
    home: 'Beranda',
    shop: 'Toko',
    backToShop: 'Kembali ke toko',
    productNotFound: 'Produk tidak ditemukan',
    returnToShop: 'Kembali ke toko',
    productDetails: 'Detail produk',
    composition: 'Komposisi',
    care: 'Perawatan',
    faq: 'FAQ',
    readMore: 'Baca selengkapnya',
    readLess: 'Tampilkan lebih sedikit',
    madeToOrderShips: (dateRange: string) =>
      `Dipesan, dibuat untuk Anda, lalu dikirim — estimasi pengiriman ${dateRange}`,
    oneSizeMadeToOrderShips: (dateRange: string) =>
      `Satu ukuran · dipesan, dibuat untuk Anda, lalu dikirim — estimasi pengiriman ${dateRange}`,
    jewelleryLeadTime: 'Dipesan, dibuat untuk Anda, lalu dikirim · dikirim dalam 4–7 hari',
    fasterDeliveryPrompt: 'Butuh lebih cepat?',
    fasterDeliveryCta: 'Hubungi kami',
    fasterDeliveryWhatsAppMessage:
      'Saya tertarik dengan salah satu gaya Anda dan membutuhkan pengiriman lebih cepat. Apa opsi yang tersedia?',
    personalisation: {
      title: 'Personalisasi',
      desc: 'Tambahkan nama, tanggal spesial, atau pesan pada label bagian dalam - gratis.',
      noPersonalisation: 'Tanpa personalisasi',
      personalise: 'Personalisasi',
      checkoutOptional: 'Tambahkan personalisasi (opsional)',
      placeholder: 'Pesan Anda (maks. 35 karakter)',
      customisedNoReturn: 'Produk yang dipersonalisasi dibuat sesuai permintaan Anda dan tidak dapat dikembalikan atau ditukar.',
      emptyError: 'Masukkan teks personalisasi Anda atau nonaktifkan personalisasi',
    },
    ethicallyMade: 'Dibuat secara etis',
    weGiveForward: 'Kami berbagi kebaikan',
    worldwideShipping: 'Pengiriman ke seluruh dunia',
    pairsWellWith: 'Cocok dipadukan dengan',
    youMayAlsoLike: 'Anda mungkin juga suka',
    addToBag: 'Tambahkan ke tas',
  },
  ms: {
    home: 'Laman utama',
    shop: 'Kedai',
    backToShop: 'Kembali ke kedai',
    productNotFound: 'Produk tidak ditemui',
    returnToShop: 'Kembali ke kedai',
    productDetails: 'Butiran produk',
    composition: 'Komposisi',
    care: 'Penjagaan',
    faq: 'FAQ',
    readMore: 'Baca lagi',
    readLess: 'Baca kurang',
    madeToOrderShips: (dateRange: string) =>
      `Ditempah, dibuat untuk anda, kemudian dihantar — anggaran penghantaran ${dateRange}`,
    oneSizeMadeToOrderShips: (dateRange: string) =>
      `Satu saiz · ditempah, dibuat untuk anda, kemudian dihantar — anggaran penghantaran ${dateRange}`,
    jewelleryLeadTime: 'Ditempah, dibuat untuk anda, kemudian dihantar · dihantar dalam 4–7 hari',
    fasterDeliveryPrompt: 'Perlukan lebih cepat?',
    fasterDeliveryCta: 'Hubungi kami',
    fasterDeliveryWhatsAppMessage:
      'Saya berminat dengan salah satu gaya anda dan memerlukan penghantaran lebih cepat. Apakah pilihan yang tersedia?',
    personalisation: {
      title: 'Personalisasi',
      desc: 'Tambah nama, tarikh istimewa atau mesej pada label dalam - percuma.',
      noPersonalisation: 'Tanpa personalisasi',
      personalise: 'Personalisasi',
      checkoutOptional: 'Tambah pemperibadian (pilihan)',
      placeholder: 'Mesej anda (maksimum 35 aksara)',
      customisedNoReturn: 'Item yang dipersonalisasi dibuat mengikut permintaan anda dan tidak boleh dipulangkan atau ditukar.',
      emptyError: 'Sila masukkan teks personalisasi anda atau matikan personalisasi',
    },
    ethicallyMade: 'Dibuat secara beretika',
    weGiveForward: 'Kami berkongsi kebaikan',
    worldwideShipping: 'Penghantaran seluruh dunia',
    pairsWellWith: 'Padanan sesuai dengan',
    youMayAlsoLike: 'Anda mungkin juga suka',
    addToBag: 'Tambah ke beg',
  },
}

export function productPageUi(locale: AppLocale): ProductPageUi {
  const pack = PRODUCT_PAGE_UI[locale]
  if (!pack) throw new Error(`Missing product page UI for locale: ${locale}`)
  return pack
}
