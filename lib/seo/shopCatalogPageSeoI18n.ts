import type { AppLocale } from '@/lib/i18n/routing'

type PageSeoPack = { pageTitle: string; metaDescription: string }

/** Live shop RTW slugs missing dedicated PageSeoI18n packs (kaftans / Covent Garden Abaya / Soho covered elsewhere). */
export const SHOP_CATALOG_PAGE_SEO_SLUGS = [
  'knightsbridge-abaya-jacket',
  'kensington-abaya',
  'marylebone-abaya',
  'belgravia-abaya',
  'park-lane-abaya',
  'hyde-park-set',
  'knightsbridge-dress',
  'covent-garden-long-dress',
  'hampstead-dress',
  'covent-garden-signature-set',
] as const

type ShopCatalogSeoSlug = (typeof SHOP_CATALOG_PAGE_SEO_SLUGS)[number]

const PAGE_SEO: Record<ShopCatalogSeoSlug, Record<AppLocale, PageSeoPack>> = {
  'knightsbridge-abaya-jacket': {
    en: {
      pageTitle: 'Knightsbridge Abaya Jacket | Al Khous Jacket Abaya Abu Dhabi | Bint Saeed',
      metaDescription:
        'Knightsbridge Abaya Jacket — Al Khous–inspired jacket abaya with structured shoulders and Knotted Lines of Lineage buttons. Emirati luxury outerwear from Abu Dhabi, UAE. Ships worldwide.',
    },
    ar: {
      pageTitle: 'عباية جاكيت Knightsbridge | عباية الخوص أبوظبي | Bint Saeed',
      metaDescription:
        'عباية جاكيت Knightsbridge — عباية جاكيت مستوحاة من الخوص بأكتاف مُهيكَلة وأزرار Knotted Lines of Lineage. أزياء خارجية فاخرة إماراتية من أبوظبي. شحن عالمي.',
    },
    fr: {
      pageTitle: 'Abaya veste Knightsbridge | Abaya Al Khous Abou Dabi | Bint Saeed',
      metaDescription:
        'Abaya veste Knightsbridge — abaya veste inspirée d’Al Khous, épaules structurées et boutons Knotted Lines of Lineage. Outerwear de luxe émiratie d’Abou Dabi. Livraison mondiale.',
    },
    it: {
      pageTitle: 'Abaya giacca Knightsbridge | Abaya Al Khous Abu Dhabi | Bint Saeed',
      metaDescription:
        'Abaya giacca Knightsbridge — abaya giacca ispirata ad Al Khous, spalle strutturate e bottoni Knotted Lines of Lineage. Outerwear di lusso emiratina da Abu Dhabi. Spedizione mondiale.',
    },
    es: {
      pageTitle: 'Abaya chaqueta Knightsbridge | Abaya Al Khous Abu Dabi | Bint Saeed',
      metaDescription:
        'Abaya chaqueta Knightsbridge — abaya chaqueta inspirada en Al Khous, hombros estructurados y botones Knotted Lines of Lineage. Outerwear de lujo emiratí de Abu Dabi. Envío mundial.',
    },
    ru: {
      pageTitle: 'Абайя-жакет Knightsbridge | Абайя Al Khous Абу-Даби | Bint Saeed',
      metaDescription:
        'Абайя-жакет Knightsbridge — абайя-жакет в духе Al Khous со структурированными плечами и пуговицами Knotted Lines of Lineage. Эмиратский люкс из Абу-Даби. Доставка по миру.',
    },
    zh: {
      pageTitle: 'Knightsbridge 长袍外套 | Al Khous 夹克长袍 阿布扎比 | Bint Saeed',
      metaDescription:
        'Knightsbridge 长袍外套 — 以 Al Khous 为灵感的夹克长袍，结构肩线与 Knotted Lines of Lineage 纽扣。阿联酋阿布扎比奢华外衣。全球配送。',
    },
    de: {
      pageTitle: 'Knightsbridge Abaya-Jacke | Al-Khous-Jackenabaya Abu Dhabi | Bint Saeed',
      metaDescription:
        'Knightsbridge Abaya-Jacke — Al-Khous-inspirierte Jackenabaya mit strukturierten Schultern und Knotted-Lines-of-Lineage-Knöpfen. Emiratische Luxus-Outerwear aus Abu Dhabi. Weltweiter Versand.',
    },
    nl: {
      pageTitle: 'Knightsbridge abaya jas | Al Khous jas-abaya Abu Dhabi | Bint Saeed',
      metaDescription:
        'Knightsbridge abaya jas — Al Khous-geïnspireerde jas-abaya met gestructureerde schouders en Knotted Lines of Lineage knopen. Emiratische luxe outerwear uit Abu Dhabi. Wereldwijde verzending.',
    },
    pt: {
      pageTitle: 'Abaya casaco Knightsbridge | Abaya Al Khous Abu Dhabi | Bint Saeed',
      metaDescription:
        'Abaya casaco Knightsbridge — abaya casaco inspirada em Al Khous, ombros estruturados e botões Knotted Lines of Lineage. Outerwear de luxo emirati de Abu Dhabi. Envio mundial.',
    },
    id: {
      pageTitle: 'Knightsbridge Abaya Jacket | Abaya Jaket Al Khous Abu Dhabi | Bint Saeed',
      metaDescription:
        'Knightsbridge Abaya Jacket — abaya jaket inspirasi Al Khous dengan bahu terstruktur dan kancing Knotted Lines of Lineage. Outerwear mewah Emirati dari Abu Dhabi. Pengiriman dunia.',
    },
    ms: {
      pageTitle: 'Knightsbridge Abaya Jacket | Abaya Jaket Al Khous Abu Dhabi | Bint Saeed',
      metaDescription:
        'Knightsbridge Abaya Jacket — abaya jaket inspirasi Al Khous dengan bahu berstruktur dan butang Knotted Lines of Lineage. Outerwear mewah Emirati dari Abu Dhabi. Penghantaran seluruh dunia.',
    },
  },
  'kensington-abaya': {
    en: {
      pageTitle: 'Kensington Abaya | Tailored Designer Abaya Abu Dhabi UAE | Bint Saeed',
      metaDescription:
        'Kensington Abaya — tailored designer abaya with clean architectural lines from Bint Saeed Abu Dhabi. Emirati luxury modest fashion for UAE, GCC and international wardrobes. Ships worldwide.',
    },
    ar: {
      pageTitle: 'عباية Kensington | عباية مصمّمة مفصّلة أبوظبي | Bint Saeed',
      metaDescription:
        'عباية Kensington — عباية مصمّمة مفصّلة بخطوط معمارية نظيفة من Bint Saeed أبوظبي. أزياء محتشمة فاخرة إماراتية للإمارات والخليج والعالم. شحن عالمي.',
    },
    fr: {
      pageTitle: 'Abaya Kensington | Abaya de créateur taillée Abou Dabi | Bint Saeed',
      metaDescription:
        'Abaya Kensington — abaya de créateur taillée aux lignes architecturales épurées par Bint Saeed Abou Dabi. Mode modeste de luxe émiratie pour EAU, Golfe et garde-robes internationales. Livraison mondiale.',
    },
    it: {
      pageTitle: 'Abaya Kensington | Abaya designer sartoriale Abu Dhabi | Bint Saeed',
      metaDescription:
        'Abaya Kensington — abaya designer sartoriale con linee architettoniche pulite di Bint Saeed Abu Dhabi. Modest fashion di lusso emiratina per EAU, Golfo e guardaroba internazionali. Spedizione mondiale.',
    },
    es: {
      pageTitle: 'Abaya Kensington | Abaya de diseñador de sastrería Abu Dabi | Bint Saeed',
      metaDescription:
        'Abaya Kensington — abaya de diseñador de sastrería con líneas arquitectónicas limpias de Bint Saeed Abu Dabi. Moda modesta de lujo emiratí para EAU, Golfo y armarios internacionales. Envío mundial.',
    },
    ru: {
      pageTitle: 'Абайя Kensington | Дизайнерская абайя Абу-Даби | Bint Saeed',
      metaDescription:
        'Абайя Kensington — дизайнерская абайя с чистыми архитектурными линиями от Bint Saeed Абу-Даби. Эмиратская люксовая скромная мода для ОАЭ, Залива и мира. Доставка по миру.',
    },
    zh: {
      pageTitle: 'Kensington 长袍 | 阿布扎比剪裁设计师长袍 | Bint Saeed',
      metaDescription:
        'Kensington 长袍 — Bint Saeed 阿布扎比利落建筑感线条的剪裁设计师长袍。阿联酋奢华端庄时尚，面向海湾与国际衣橱。全球配送。',
    },
    de: {
      pageTitle: 'Kensington Abaya | Taillierte Designer-Abaya Abu Dhabi | Bint Saeed',
      metaDescription:
        'Kensington Abaya — taillierte Designer-Abaya mit klaren architektonischen Linien von Bint Saeed Abu Dhabi. Emiratische Luxus-Modest Fashion für VAE, Golf und internationale Garderoben. Weltweiter Versand.',
    },
    nl: {
      pageTitle: 'Kensington abaya | Getailleerde designer abaya Abu Dhabi | Bint Saeed',
      metaDescription:
        'Kensington abaya — getailleerde designer abaya met strakke architecturale lijnen van Bint Saeed Abu Dhabi. Emiratische luxe modest fashion voor VAE, Golf en internationale garderobes. Wereldwijde verzending.',
    },
    pt: {
      pageTitle: 'Abaya Kensington | Abaya de designer de alfaiataria Abu Dhabi | Bint Saeed',
      metaDescription:
        'Abaya Kensington — abaya de designer de alfaiataria com linhas arquitetónicas limpas da Bint Saeed Abu Dhabi. Moda modesta de luxo emirati para EAU, Golfo e guarda-roupas internacionais. Envio mundial.',
    },
    id: {
      pageTitle: 'Kensington Abaya | Abaya Desainer Tailored Abu Dhabi | Bint Saeed',
      metaDescription:
        'Kensington Abaya — abaya desainer tailored dengan garis arsitektural bersih dari Bint Saeed Abu Dhabi. Modest fashion mewah Emirati untuk UEA, GCC, dan lemari internasional. Pengiriman dunia.',
    },
    ms: {
      pageTitle: 'Kensington Abaya | Abaya Pereka Terjahit Abu Dhabi | Bint Saeed',
      metaDescription:
        'Kensington Abaya — abaya pereka terjahit dengan garisan seni bina bersih dari Bint Saeed Abu Dhabi. Fesyen sopan mewah Emirati untuk UAE, GCC dan almari antarabangsa. Penghantaran seluruh dunia.',
    },
  },
  'marylebone-abaya': {
    en: {
      pageTitle: 'Marylebone Abaya | A-Line Abaya with Onyx Strands | Bint Saeed',
      metaDescription:
        'Marylebone Abaya — graceful A-line designer abaya with removable Onyx Strands and interchangeable Signature Strands. Created in Abu Dhabi, UAE. Ships worldwide.',
    },
    ar: {
      pageTitle: 'عباية Marylebone | عباية A-line بخيوط العقيق | Bint Saeed',
      metaDescription:
        'عباية Marylebone — عباية مصمّمة A-line أنيقة بخيوط عقيق قابلة للإزالة وخيوط توقيع قابلة للتبديل. صُنعت في أبوظبي، الإمارات. شحن عالمي.',
    },
    fr: {
      pageTitle: 'Abaya Marylebone | Abaya A-line avec fils Onyx | Bint Saeed',
      metaDescription:
        'Abaya Marylebone — abaya de créateur A-line gracieuse avec fils Onyx amovibles et Signature Strands interchangeables. Créée à Abou Dabi, EAU. Livraison mondiale.',
    },
    it: {
      pageTitle: 'Abaya Marylebone | Abaya A-line con fili Onyx | Bint Saeed',
      metaDescription:
        'Abaya Marylebone — abaya designer A-line aggraziata con fili Onyx rimovibili e Signature Strands intercambiabili. Creata ad Abu Dhabi, EAU. Spedizione mondiale.',
    },
    es: {
      pageTitle: 'Abaya Marylebone | Abaya A-line con hebras Onyx | Bint Saeed',
      metaDescription:
        'Abaya Marylebone — abaya de diseñador A-line elegante con hebras Onyx extraíbles y Signature Strands intercambiables. Creada en Abu Dabi, EAU. Envío mundial.',
    },
    ru: {
      pageTitle: 'Абайя Marylebone | Абайя A-line с нитями оникса | Bint Saeed',
      metaDescription:
        'Абайя Marylebone — изящная дизайнерская абайя A-line со съёмными нитями оникса и сменными Signature Strands. Создана в Абу-Даби, ОАЭ. Доставка по миру.',
    },
    zh: {
      pageTitle: 'Marylebone 长袍 | 配玛瑙串的 A 字长袍 | Bint Saeed',
      metaDescription:
        'Marylebone 长袍 — 优雅 A 字设计师长袍，可拆卸玛瑙串与可互换 Signature Strands。阿联酋阿布扎比创作。全球配送。',
    },
    de: {
      pageTitle: 'Marylebone Abaya | A-Linien-Abaya mit Onyx-Strängen | Bint Saeed',
      metaDescription:
        'Marylebone Abaya — anmutige A-Linien-Designer-Abaya mit abnehmbaren Onyx-Strängen und austauschbaren Signature Strands. Geschaffen in Abu Dhabi, VAE. Weltweiter Versand.',
    },
    nl: {
      pageTitle: 'Marylebone abaya | A-line abaya met Onyx Strands | Bint Saeed',
      metaDescription:
        'Marylebone abaya — sierlijke A-line designer abaya met verwijderbare Onyx Strands en verwisselbare Signature Strands. Gemaakt in Abu Dhabi, VAE. Wereldwijde verzending.',
    },
    pt: {
      pageTitle: 'Abaya Marylebone | Abaya A-line com fios Onyx | Bint Saeed',
      metaDescription:
        'Abaya Marylebone — abaya de designer A-line graciosa com fios Onyx removíveis e Signature Strands intercambiáveis. Criada em Abu Dhabi, EAU. Envio mundial.',
    },
    id: {
      pageTitle: 'Marylebone Abaya | Abaya A-Line dengan Onyx Strands | Bint Saeed',
      metaDescription:
        'Marylebone Abaya — abaya desainer A-line anggun dengan Onyx Strands lepas dan Signature Strands dapat ditukar. Dibuat di Abu Dhabi, UEA. Pengiriman dunia.',
    },
    ms: {
      pageTitle: 'Marylebone Abaya | Abaya A-Line dengan Onyx Strands | Bint Saeed',
      metaDescription:
        'Marylebone Abaya — abaya pereka A-line anggun dengan Onyx Strands boleh tanggal dan Signature Strands boleh ditukar. Dihasilkan di Abu Dhabi, UAE. Penghantaran seluruh dunia.',
    },
  },
  'belgravia-abaya': {
    en: {
      pageTitle: 'Belgravia Abaya | Luxury Designer Abaya Abu Dhabi UAE | Bint Saeed',
      metaDescription:
        'Belgravia Abaya — refined designer abaya from Bint Saeed Abu Dhabi, United Arab Emirates. Emirati luxury modest fashion for GCC and international wardrobes. Ships worldwide.',
    },
    ar: {
      pageTitle: 'عباية Belgravia | عباية مصمّمة فاخرة أبوظبي | Bint Saeed',
      metaDescription:
        'عباية Belgravia — عباية مصمّمة راقية من Bint Saeed أبوظبي، الإمارات العربية المتحدة. أزياء محتشمة فاخرة إماراتية للخليج والعالم. شحن عالمي.',
    },
    fr: {
      pageTitle: 'Abaya Belgravia | Abaya de créateur de luxe Abou Dabi | Bint Saeed',
      metaDescription:
        'Abaya Belgravia — abaya de créateur raffinée par Bint Saeed Abou Dabi, Émirats arabes unis. Mode modeste de luxe émiratie pour le Golfe et les garde-robes internationales. Livraison mondiale.',
    },
    it: {
      pageTitle: 'Abaya Belgravia | Abaya designer di lusso Abu Dhabi | Bint Saeed',
      metaDescription:
        'Abaya Belgravia — abaya designer raffinata di Bint Saeed Abu Dhabi, Emirati Arabi Uniti. Modest fashion di lusso emiratina per Golfo e guardaroba internazionali. Spedizione mondiale.',
    },
    es: {
      pageTitle: 'Abaya Belgravia | Abaya de diseñador de lujo Abu Dabi | Bint Saeed',
      metaDescription:
        'Abaya Belgravia — abaya de diseñador refinada de Bint Saeed Abu Dabi, Emiratos Árabes Unidos. Moda modesta de lujo emiratí para el Golfo y armarios internacionales. Envío mundial.',
    },
    ru: {
      pageTitle: 'Абайя Belgravia | Люксовая дизайнерская абайя Абу-Даби | Bint Saeed',
      metaDescription:
        'Абайя Belgravia — утончённая дизайнерская абайя от Bint Saeed Абу-Даби, ОАЭ. Эмиратская люксовая скромная мода для Залива и мира. Доставка по миру.',
    },
    zh: {
      pageTitle: 'Belgravia 长袍 | 阿布扎比奢华设计师长袍 | Bint Saeed',
      metaDescription:
        'Belgravia 长袍 — Bint Saeed 阿联酋阿布扎比精致设计师长袍。阿联酋奢华端庄时尚，面向海湾与国际衣橱。全球配送。',
    },
    de: {
      pageTitle: 'Belgravia Abaya | Luxus-Designer-Abaya Abu Dhabi | Bint Saeed',
      metaDescription:
        'Belgravia Abaya — raffinierte Designer-Abaya von Bint Saeed Abu Dhabi, VAE. Emiratische Luxus-Modest Fashion für Golf und internationale Garderoben. Weltweiter Versand.',
    },
    nl: {
      pageTitle: 'Belgravia abaya | Luxe designer abaya Abu Dhabi | Bint Saeed',
      metaDescription:
        'Belgravia abaya — verfijnde designer abaya van Bint Saeed Abu Dhabi, VAE. Emiratische luxe modest fashion voor de Golf en internationale garderobes. Wereldwijde verzending.',
    },
    pt: {
      pageTitle: 'Abaya Belgravia | Abaya de designer de luxo Abu Dhabi | Bint Saeed',
      metaDescription:
        'Abaya Belgravia — abaya de designer refinada da Bint Saeed Abu Dhabi, Emirados Árabes Unidos. Moda modesta de luxo emirati para o Golfo e guarda-roupas internacionais. Envio mundial.',
    },
    id: {
      pageTitle: 'Belgravia Abaya | Abaya Desainer Mewah Abu Dhabi | Bint Saeed',
      metaDescription:
        'Belgravia Abaya — abaya desainer halus dari Bint Saeed Abu Dhabi, UEA. Modest fashion mewah Emirati untuk GCC dan lemari internasional. Pengiriman dunia.',
    },
    ms: {
      pageTitle: 'Belgravia Abaya | Abaya Pereka Mewah Abu Dhabi | Bint Saeed',
      metaDescription:
        'Belgravia Abaya — abaya pereka halus dari Bint Saeed Abu Dhabi, UAE. Fesyen sopan mewah Emirati untuk GCC dan almari antarabangsa. Penghantaran seluruh dunia.',
    },
  },
  'park-lane-abaya': {
    en: {
      pageTitle: 'Park Lane Abaya | Tailored A-Line Diplomat Abaya | Bint Saeed',
      metaDescription:
        'Park Lane Abaya — tailored A-line designer abaya with integrated shoulder scarf and Knotted Line details. Created in Abu Dhabi, UAE. Ships worldwide.',
    },
    ar: {
      pageTitle: 'عباية Park Lane | عباية A-line دبلوماسية مفصّلة | Bint Saeed',
      metaDescription:
        'عباية Park Lane — عباية مصمّمة A-line مفصّلة بوشاح كتف مدمج وتفاصيل Knotted Line. صُنعت في أبوظبي، الإمارات. شحن عالمي.',
    },
    fr: {
      pageTitle: 'Abaya Park Lane | Abaya A-line diplomatique taillée | Bint Saeed',
      metaDescription:
        'Abaya Park Lane — abaya de créateur A-line taillée avec écharpe d’épaule intégrée et détails Knotted Line. Créée à Abou Dabi, EAU. Livraison mondiale.',
    },
    it: {
      pageTitle: 'Abaya Park Lane | Abaya A-line diplomatica sartoriale | Bint Saeed',
      metaDescription:
        'Abaya Park Lane — abaya designer A-line sartoriale con sciarpa spalla integrata e dettagli Knotted Line. Creata ad Abu Dhabi, EAU. Spedizione mondiale.',
    },
    es: {
      pageTitle: 'Abaya Park Lane | Abaya A-line diplomática de sastrería | Bint Saeed',
      metaDescription:
        'Abaya Park Lane — abaya de diseñador A-line de sastrería con bufanda de hombro integrada y detalles Knotted Line. Creada en Abu Dabi, EAU. Envío mundial.',
    },
    ru: {
      pageTitle: 'Абайя Park Lane | Дипломатическая абайя A-line | Bint Saeed',
      metaDescription:
        'Абайя Park Lane — дизайнерская абайя A-line с встроенным плечевым шарфом и деталями Knotted Line. Создана в Абу-Даби, ОАЭ. Доставка по миру.',
    },
    zh: {
      pageTitle: 'Park Lane 长袍 | 剪裁 A 字外交长袍 | Bint Saeed',
      metaDescription:
        'Park Lane 长袍 — 剪裁 A 字设计师长袍，一体式肩巾与 Knotted Line 细节。阿联酋阿布扎比创作。全球配送。',
    },
    de: {
      pageTitle: 'Park Lane Abaya | Taillierte A-Linien-Diplomaten-Abaya | Bint Saeed',
      metaDescription:
        'Park Lane Abaya — taillierte A-Linien-Designer-Abaya mit integriertem Schulterschal und Knotted-Line-Details. Geschaffen in Abu Dhabi, VAE. Weltweiter Versand.',
    },
    nl: {
      pageTitle: 'Park Lane abaya | Getailleerde A-line diplomatenabaya | Bint Saeed',
      metaDescription:
        'Park Lane abaya — getailleerde A-line designer abaya met geïntegreerde schoudersjaal en Knotted Line details. Gemaakt in Abu Dhabi, VAE. Wereldwijde verzending.',
    },
    pt: {
      pageTitle: 'Abaya Park Lane | Abaya A-line diplomática de alfaiataria | Bint Saeed',
      metaDescription:
        'Abaya Park Lane — abaya de designer A-line de alfaiataria com lenço de ombro integrado e detalhes Knotted Line. Criada em Abu Dhabi, EAU. Envio mundial.',
    },
    id: {
      pageTitle: 'Park Lane Abaya | Abaya Diplomatik A-Line Tailored | Bint Saeed',
      metaDescription:
        'Park Lane Abaya — abaya desainer A-line tailored dengan scarf bahu terintegrasi dan detail Knotted Line. Dibuat di Abu Dhabi, UEA. Pengiriman dunia.',
    },
    ms: {
      pageTitle: 'Park Lane Abaya | Abaya Diplomatik A-Line Terjahit | Bint Saeed',
      metaDescription:
        'Park Lane Abaya — abaya pereka A-line terjahit dengan skarf bahu bersepadu dan butiran Knotted Line. Dihasilkan di Abu Dhabi, UAE. Penghantaran seluruh dunia.',
    },
  },
  'hyde-park-set': {
    en: {
      pageTitle: 'Hyde Park Set | Shirt & Palazzo Travel Set UAE | Bint Saeed',
      metaDescription:
        'Hyde Park Set — oversized premium crepe shirt and wide-leg palazzo with Knotted Line buttons. Emirati luxury travelwear from Abu Dhabi. Ships worldwide.',
    },
    ar: {
      pageTitle: 'طقم Hyde Park | طقم قميص وبالازو للسفر | Bint Saeed',
      metaDescription:
        'طقم Hyde Park — قميص كريب واسع وبنطال بالازو بأزرار Knotted Line. أزياء سفر فاخرة إماراتية من أبوظبي. شحن عالمي.',
    },
    fr: {
      pageTitle: 'Hyde Park Set | Set chemise & palazzo voyage EAU | Bint Saeed',
      metaDescription:
        'Hyde Park Set — chemise oversize en crêpe premium et palazzo avec boutons Knotted Line. Travelwear de luxe émiratie d’Abou Dabi. Livraison mondiale.',
    },
    it: {
      pageTitle: 'Hyde Park Set | Set camicia & palazzo viaggio EAU | Bint Saeed',
      metaDescription:
        'Hyde Park Set — camicia oversize in crepe premium e palazzo con bottoni Knotted Line. Travelwear di lusso emiratina da Abu Dhabi. Spedizione mondiale.',
    },
    es: {
      pageTitle: 'Hyde Park Set | Set camisa y palazzo viaje EAU | Bint Saeed',
      metaDescription:
        'Hyde Park Set — camisa oversize en crepe premium y palazzo con botones Knotted Line. Travelwear de lujo emiratí de Abu Dabi. Envío mundial.',
    },
    ru: {
      pageTitle: 'Hyde Park Set | Комплект рубашка и palazzo ОАЭ | Bint Saeed',
      metaDescription:
        'Hyde Park Set — оверсайз рубашка из премиального крепа и palazzo с пуговицами Knotted Line. Эмиратская люксовая travelwear из Абу-Даби. Доставка по миру.',
    },
    zh: {
      pageTitle: 'Hyde Park 套装 | 衬衫阔腿裤旅行套装 阿联酋 | Bint Saeed',
      metaDescription:
        'Hyde Park 套装 — 宽松高端绉绸衬衫与阔腿长裤，Knotted Line 纽扣。阿联酋阿布扎比奢华旅行装。全球配送。',
    },
    de: {
      pageTitle: 'Hyde Park Set | Hemd- & Palazzo-Reiseset VAE | Bint Saeed',
      metaDescription:
        'Hyde Park Set — Oversize-Premium-Krepp-Hemd und Palazzo mit Knotted-Line-Knöpfen. Emiratische Luxus-Reisemode aus Abu Dhabi. Weltweiter Versand.',
    },
    nl: {
      pageTitle: 'Hyde Park Set | Overhemd & palazzo reisset VAE | Bint Saeed',
      metaDescription:
        'Hyde Park Set — oversized premium crêpe overhemd en palazzo met Knotted Line knopen. Emiratische luxe travelwear uit Abu Dhabi. Wereldwijde verzending.',
    },
    pt: {
      pageTitle: 'Hyde Park Set | Set camisa & palazzo viagem EAU | Bint Saeed',
      metaDescription:
        'Hyde Park Set — camisa oversize em crepe premium e palazzo com botões Knotted Line. Travelwear de luxo emirati de Abu Dhabi. Envio mundial.',
    },
    id: {
      pageTitle: 'Hyde Park Set | Set Kemeja & Palazzo Travel UEA | Bint Saeed',
      metaDescription:
        'Hyde Park Set — kemeja oversize krepe premium dan palazzo dengan kancing Knotted Line. Luxury travelwear Emirati dari Abu Dhabi. Pengiriman dunia.',
    },
    ms: {
      pageTitle: 'Hyde Park Set | Set Kemeja & Palazzo Travel UAE | Bint Saeed',
      metaDescription:
        'Hyde Park Set — kemeja oversize krepe premium dan palazzo dengan butang Knotted Line. Luxury travelwear Emirati dari Abu Dhabi. Penghantaran seluruh dunia.',
    },
  },
  'knightsbridge-dress': {
    en: {
      pageTitle: 'Knightsbridge Dress | Al Khous Maxi Dress Abu Dhabi | Bint Saeed',
      metaDescription:
        'Knightsbridge Dress — flowing maxi dress with Al Khous–inspired halter detailing. Contemporary Emirati designer dress from Abu Dhabi, UAE. Ships worldwide.',
    },
    ar: {
      pageTitle: 'فستان Knightsbridge | فستان ماكسي الخوص أبوظبي | Bint Saeed',
      metaDescription:
        'فستان Knightsbridge — فستان ماكسي انسيابي بتفاصيل هالتر مستوحاة من الخوص. فستان مصمّم إماراتي معاصر من أبوظبي. شحن عالمي.',
    },
    fr: {
      pageTitle: 'Robe Knightsbridge | Robe maxi Al Khous Abou Dabi | Bint Saeed',
      metaDescription:
        'Robe Knightsbridge — robe maxi fluide avec détail halter inspiré d’Al Khous. Robe de créateur émiratie contemporaine d’Abou Dabi. Livraison mondiale.',
    },
    it: {
      pageTitle: 'Knightsbridge Dress | Abito maxi Al Khous Abu Dhabi | Bint Saeed',
      metaDescription:
        'Knightsbridge Dress — abito maxi fluido con dettaglio halter ispirato ad Al Khous. Abito designer emiratino contemporaneo da Abu Dhabi. Spedizione mondiale.',
    },
    es: {
      pageTitle: 'Knightsbridge Dress | Vestido maxi Al Khous Abu Dabi | Bint Saeed',
      metaDescription:
        'Knightsbridge Dress — vestido maxi fluido con detalle halter inspirado en Al Khous. Vestido de diseñador emiratí contemporáneo de Abu Dabi. Envío mundial.',
    },
    ru: {
      pageTitle: 'Платье Knightsbridge | Макси-платье Al Khous Абу-Даби | Bint Saeed',
      metaDescription:
        'Платье Knightsbridge — струящееся макси-платье с халтером в духе Al Khous. Современное эмиратское дизайнерское платье из Абу-Даби. Доставка по миру.',
    },
    zh: {
      pageTitle: 'Knightsbridge 连衣裙 | Al Khous 长裙 阿布扎比 | Bint Saeed',
      metaDescription:
        'Knightsbridge 连衣裙 — 流畅长裙，以 Al Khous 为灵感的挂脖细节。阿联酋阿布扎比当代设计师连衣裙。全球配送。',
    },
    de: {
      pageTitle: 'Knightsbridge Dress | Al-Khous-Maxikleid Abu Dhabi | Bint Saeed',
      metaDescription:
        'Knightsbridge Dress — fließendes Maxikleid mit Al-Khous-inspiriertem Halterdetail. Zeitgenössisches emiratisches Designer-Kleid aus Abu Dhabi. Weltweiter Versand.',
    },
    nl: {
      pageTitle: 'Knightsbridge Dress | Al Khous maxi-jurk Abu Dhabi | Bint Saeed',
      metaDescription:
        'Knightsbridge Dress — vloeiende maxi-jurk met Al Khous-geïnspireerd halterdetail. Eigentijds Emiratisch designer jurk uit Abu Dhabi. Wereldwijde verzending.',
    },
    pt: {
      pageTitle: 'Knightsbridge Dress | Vestido maxi Al Khous Abu Dhabi | Bint Saeed',
      metaDescription:
        'Knightsbridge Dress — vestido maxi fluido com detalhe halter inspirado em Al Khous. Vestido de designer emirati contemporâneo de Abu Dhabi. Envio mundial.',
    },
    id: {
      pageTitle: 'Knightsbridge Dress | Gaun Maxi Al Khous Abu Dhabi | Bint Saeed',
      metaDescription:
        'Knightsbridge Dress — gaun maxi mengalir dengan detail halter inspirasi Al Khous. Gaun desainer Emirati kontemporer dari Abu Dhabi. Pengiriman dunia.',
    },
    ms: {
      pageTitle: 'Knightsbridge Dress | Gaun Maxi Al Khous Abu Dhabi | Bint Saeed',
      metaDescription:
        'Knightsbridge Dress — gaun maxi mengalir dengan butiran halter inspirasi Al Khous. Gaun pereka Emirati kontemporari dari Abu Dhabi. Penghantaran seluruh dunia.',
    },
  },
  'covent-garden-long-dress': {
    en: {
      pageTitle: 'Covent Garden Long Dress | Tailored Maxi Under-Abaya Dress | Bint Saeed',
      metaDescription:
        'Covent Garden Long Dress — tailored maxi under-abaya dress with clean neckline and concealed zip. Designed in Abu Dhabi, UAE. Ships worldwide.',
    },
    ar: {
      pageTitle: 'فستان Covent Garden الطويل | فستان ماكسي تحت العباءة | Bint Saeed',
      metaDescription:
        'فستان Covent Garden الطويل — فستان ماكسي مفصّل تحت العباءة بياقة نظيفة وسحّاب مخفي. صُمم في أبوظبي، الإمارات. شحن عالمي.',
    },
    fr: {
      pageTitle: 'Robe longue Covent Garden | Robe maxi sous abaya | Bint Saeed',
      metaDescription:
        'Robe longue Covent Garden — robe maxi taillée sous abaya, encolure épurée et fermeture dissimulée. Conçue à Abou Dabi, EAU. Livraison mondiale.',
    },
    it: {
      pageTitle: 'Covent Garden Long Dress | Abito maxi sotto abaya | Bint Saeed',
      metaDescription:
        'Covent Garden Long Dress — abito maxi sartoriale sotto abaya, scollo pulito e zip nascosta. Progettato ad Abu Dhabi, EAU. Spedizione mondiale.',
    },
    es: {
      pageTitle: 'Covent Garden Long Dress | Vestido maxi bajo abaya | Bint Saeed',
      metaDescription:
        'Covent Garden Long Dress — vestido maxi de sastrería bajo abaya, escote limpio y cremallera oculta. Diseñado en Abu Dabi, EAU. Envío mundial.',
    },
    ru: {
      pageTitle: 'Платье Covent Garden Long | Макси под абайю | Bint Saeed',
      metaDescription:
        'Платье Covent Garden Long — приталенное макси-платье под абайю с чистым вырезом и скрытой молнией. Создано в Абу-Даби, ОАЭ. Доставка по миру.',
    },
    zh: {
      pageTitle: 'Covent Garden 长裙 | 剪裁内穿长袍长裙 | Bint Saeed',
      metaDescription:
        'Covent Garden 长裙 — 剪裁长款内穿长袍裙，简洁领口与隐藏拉链。阿联酋阿布扎比设计。全球配送。',
    },
    de: {
      pageTitle: 'Covent Garden Long Dress | Tailliertes Maxi Under-Abaya | Bint Saeed',
      metaDescription:
        'Covent Garden Long Dress — tailliertes Maxikleid unter Abaya mit klarem Ausschnitt und verdecktem Reißverschluss. Entworfen in Abu Dhabi, VAE. Weltweiter Versand.',
    },
    nl: {
      pageTitle: 'Covent Garden Long Dress | Getailleerde maxi under-abaya | Bint Saeed',
      metaDescription:
        'Covent Garden Long Dress — getailleerde maxi-jurk onder abaya met strakke halslijn en verborgen ritssluiting. Ontworpen in Abu Dhabi, VAE. Wereldwijde verzending.',
    },
    pt: {
      pageTitle: 'Covent Garden Long Dress | Vestido maxi sob abaya | Bint Saeed',
      metaDescription:
        'Covent Garden Long Dress — vestido maxi de alfaiataria sob abaya, decote limpo e fecho oculto. Desenhado em Abu Dhabi, EAU. Envio mundial.',
    },
    id: {
      pageTitle: 'Covent Garden Long Dress | Gaun Maxi Under-Abaya | Bint Saeed',
      metaDescription:
        'Covent Garden Long Dress — gaun maxi tailored under-abaya dengan leher bersih dan resleting tersembunyi. Dirancang di Abu Dhabi, UEA. Pengiriman dunia.',
    },
    ms: {
      pageTitle: 'Covent Garden Long Dress | Gaun Maxi Under-Abaya | Bint Saeed',
      metaDescription:
        'Covent Garden Long Dress — gaun maxi terjahit under-abaya dengan leher bersih dan zip tersembunyi. Direka di Abu Dhabi, UAE. Penghantaran seluruh dunia.',
    },
  },
  'hampstead-dress': {
    en: {
      pageTitle: 'Hampstead Dress | Al Talli Crepe Maxi Dress Abu Dhabi | Bint Saeed',
      metaDescription:
        'Hampstead Dress — the fully lined premium crepe maxi you’ve been looking for, with draped neckline and UNESCO-recognised Al Talli waist trim. Created in Abu Dhabi, UAE. Ships worldwide.',
    },
    ar: {
      pageTitle: 'فستان Hampstead | فستان ماكسي كريب بالتلي أبوظبي | Bint Saeed',
      metaDescription:
        'فستان Hampstead — ماكسي الكريب الفاخر المبطّن الذي كنتِ تبحثين عنه، بخط عنق متدلٍّ وتفاصيل التلي المعترف بها من اليونسكو. صُنع في أبوظبي. شحن عالمي.',
    },
    fr: {
      pageTitle: 'Robe Hampstead | Robe maxi crêpe Al Talli Abou Dabi | Bint Saeed',
      metaDescription:
        'Robe Hampstead — la maxi en crêpe premium entièrement doublée que vous cherchiez, encolure drapée et garniture Al Talli reconnue par l’UNESCO. Créée à Abou Dabi. Livraison mondiale.',
    },
    it: {
      pageTitle: 'Hampstead Dress | Abito maxi crepe Al Talli Abu Dhabi | Bint Saeed',
      metaDescription:
        'Hampstead Dress — il maxi in crepe premium completamente foderato che stavate cercando, scollo drappeggiato e trim Al Talli UNESCO. Creato ad Abu Dhabi. Spedizione mondiale.',
    },
    es: {
      pageTitle: 'Hampstead Dress | Vestido maxi crepé Al Talli Abu Dabi | Bint Saeed',
      metaDescription:
        'Hampstead Dress — el maxi de crepé premium totalmente forrado que has estado buscando, escote drapeado y ribete Al Talli UNESCO. Creado en Abu Dabi. Envío mundial.',
    },
    ru: {
      pageTitle: 'Платье Hampstead | Макси из крепа Al Talli Абу-Даби | Bint Saeed',
      metaDescription:
        'Платье Hampstead — полностью подбитое премиальное креповое макси, которое вы искали, с драпированным вырезом и отделкой Al Talli (ЮНЕСКО). Создано в Абу-Даби. Доставка по миру.',
    },
    zh: {
      pageTitle: 'Hampstead 连衣裙 | Al Talli 绉绸长裙 阿布扎比 | Bint Saeed',
      metaDescription:
        'Hampstead 连衣裙 — 你一直在寻找的全里衬高端绉绸长裙，垂坠领口与联合国教科文组织认可的 Al Talli 腰饰。阿布扎比创作。全球配送。',
    },
    de: {
      pageTitle: 'Hampstead Dress | Al-Talli-Krepp-Maxikleid Abu Dhabi | Bint Saeed',
      metaDescription:
        'Hampstead Dress — das vollgefütterte Premium-Krepp-Maxi, das Sie gesucht haben, mit drapiertem Ausschnitt und UNESCO-Al-Talli-Taillenbesatz. Geschaffen in Abu Dhabi. Weltweiter Versand.',
    },
    nl: {
      pageTitle: 'Hampstead Dress | Al Talli crêpe maxi-jurk Abu Dhabi | Bint Saeed',
      metaDescription:
        'Hampstead Dress — het volledig gevoerde premium crêpe maxi dat u zocht, met gedrapeerde halslijn en UNESCO Al Talli-taille. Gemaakt in Abu Dhabi. Wereldwijde verzending.',
    },
    pt: {
      pageTitle: 'Hampstead Dress | Vestido maxi crepe Al Talli Abu Dhabi | Bint Saeed',
      metaDescription:
        'Hampstead Dress — o maxi em crepe premium totalmente forrado que você procurava, decote drapeado e acabamento Al Talli UNESCO. Criado em Abu Dhabi. Envio mundial.',
    },
    id: {
      pageTitle: 'Hampstead Dress | Gaun Maxi Krepe Al Talli Abu Dhabi | Bint Saeed',
      metaDescription:
        'Hampstead Dress — maxi krepe premium berlapis penuh yang Anda cari, leher drape dan trim Al Talli UNESCO. Dibuat di Abu Dhabi. Pengiriman dunia.',
    },
    ms: {
      pageTitle: 'Hampstead Dress | Gaun Maxi Krepe Al Talli Abu Dhabi | Bint Saeed',
      metaDescription:
        'Hampstead Dress — maxi krepe premium berlapik penuh yang anda cari, leher drape dan hiasan Al Talli UNESCO. Dihasilkan di Abu Dhabi. Penghantaran seluruh dunia.',
    },
  },
  'covent-garden-signature-set': {
    en: {
      pageTitle: 'Covent Garden Signature Set | Dress & Jacket Set UAE | Bint Saeed',
      metaDescription:
        'Covent Garden Signature Set — coordinated dress and tailored jacket with Al Khous–inspired detailing. Emirati luxury two-piece from Abu Dhabi. Ships worldwide.',
    },
    ar: {
      pageTitle: 'طقم Covent Garden Signature | طقم فستان وجاكيت | Bint Saeed',
      metaDescription:
        'طقم Covent Garden Signature — فستان وجاكيت منسّقان بتفاصيل مستوحاة من الخوص. طقم ثنائي فاخر إماراتي من أبوظبي. شحن عالمي.',
    },
    fr: {
      pageTitle: 'Covent Garden Signature Set | Set robe & veste EAU | Bint Saeed',
      metaDescription:
        'Covent Garden Signature Set — robe et veste coordonnées avec détails inspirés d’Al Khous. Ensemble deux pièces de luxe émiratie d’Abou Dabi. Livraison mondiale.',
    },
    it: {
      pageTitle: 'Covent Garden Signature Set | Set abito & giacca EAU | Bint Saeed',
      metaDescription:
        'Covent Garden Signature Set — abito e giacca coordinati con dettagli ispirati ad Al Khous. Due pezzi di lusso emiratina da Abu Dhabi. Spedizione mondiale.',
    },
    es: {
      pageTitle: 'Covent Garden Signature Set | Set vestido y chaqueta EAU | Bint Saeed',
      metaDescription:
        'Covent Garden Signature Set — vestido y chaqueta coordinados con detalles inspirados en Al Khous. Conjunto de dos piezas de lujo emiratí de Abu Dabi. Envío mundial.',
    },
    ru: {
      pageTitle: 'Covent Garden Signature Set | Комплект платье и жакет ОАЭ | Bint Saeed',
      metaDescription:
        'Covent Garden Signature Set — согласованные платье и жакет с деталями в духе Al Khous. Эмиратский люксовый комплект из Абу-Даби. Доставка по миру.',
    },
    zh: {
      pageTitle: 'Covent Garden Signature 套装 | 连衣裙外套套装 阿联酋 | Bint Saeed',
      metaDescription:
        'Covent Garden Signature 套装 — 连衣裙与剪裁外套协调搭配，Al Khous 灵感细节。阿联酋阿布扎比奢华两件套。全球配送。',
    },
    de: {
      pageTitle: 'Covent Garden Signature Set | Kleid- & Jacken-Set VAE | Bint Saeed',
      metaDescription:
        'Covent Garden Signature Set — koordiniertes Kleid und taillierte Jacke mit Al-Khous-inspirierten Details. Emiratisches Luxus-Zweiteiler aus Abu Dhabi. Weltweiter Versand.',
    },
    nl: {
      pageTitle: 'Covent Garden Signature Set | Jurk- & jassenset VAE | Bint Saeed',
      metaDescription:
        'Covent Garden Signature Set — gecoördineerde jurk en getailleerd jasje met Al Khous-geïnspireerde details. Emiratische luxe tweedelige set uit Abu Dhabi. Wereldwijde verzending.',
    },
    pt: {
      pageTitle: 'Covent Garden Signature Set | Set vestido & casaco EAU | Bint Saeed',
      metaDescription:
        'Covent Garden Signature Set — vestido e casaco coordenados com detalhes inspirados em Al Khous. Conjunto de duas peças de luxo emirati de Abu Dhabi. Envio mundial.',
    },
    id: {
      pageTitle: 'Covent Garden Signature Set | Set Gaun & Jaket UEA | Bint Saeed',
      metaDescription:
        'Covent Garden Signature Set — gaun dan jaket terkoordinasi dengan detail inspirasi Al Khous. Two-piece mewah Emirati dari Abu Dhabi. Pengiriman dunia.',
    },
    ms: {
      pageTitle: 'Covent Garden Signature Set | Set Gaun & Jaket UAE | Bint Saeed',
      metaDescription:
        'Covent Garden Signature Set — gaun dan jaket terselaras dengan butiran inspirasi Al Khous. Two-piece mewah Emirati dari Abu Dhabi. Penghantaran seluruh dunia.',
    },
  },
}

export function isShopCatalogPageSeoSlug(slug: string): slug is ShopCatalogSeoSlug {
  return (SHOP_CATALOG_PAGE_SEO_SLUGS as readonly string[]).includes(slug.toLowerCase())
}

export function getShopCatalogPageSeo(
  slug: string,
  locale: AppLocale = 'en',
): { title: string; description: string } | null {
  const key = slug.toLowerCase()
  if (!isShopCatalogPageSeoSlug(key)) return null
  const pack = PAGE_SEO[key][locale] ?? PAGE_SEO[key].en
  return { title: pack.pageTitle, description: pack.metaDescription }
}
