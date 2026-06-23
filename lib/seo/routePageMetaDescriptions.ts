import type { RouteMetaKey } from '@/lib/seo/routeMetaKeys'
import type { AppLocale } from '@/lib/i18n/routing'
import { indonesiaRouteMetaFromEn } from '@/lib/i18n/indonesiaRouteMetaFromEn'

type Loc = Record<AppLocale, string>
type LocInput = Record<Exclude<AppLocale, 'id'>, string> & { en: string }

function enrichLoc(loc: LocInput): Loc {
  return { ...loc, id: indonesiaRouteMetaFromEn(loc.en) }
}

function enrichLocMap<K extends string>(raw: Record<K, LocInput>): Record<K, Loc> {
  return Object.fromEntries(
    Object.entries(raw).map(([key, value]) => [key, enrichLoc(value as LocInput)])
  ) as Record<K, Loc>
}

/**
 * Meta descriptions: natural search phrasing per market; brand + Abu Dhabi + offer.
 * Arabic: formal, refined, GCC-standard (MSA); no slang.
 */
const META_DESCRIPTION_RAW: Record<Exclude<RouteMetaKey, 'home'>, LocInput> = {
  faq: {
    en:
      'FAQ for Bint Saeed, a luxury abaya house in Abu Dhabi: shipping, sizing, exchanges, official purchase on bintsaeed.com, and GCC delivery.',
    ar:
      'إجابات رسمية عن بِنت سعيد، دار عبايات فاخرة في أبوظبي: الشحن والمقاسات والاستبدال والشراء عبر الموقع الرسمي والتوصيل في دول الخليج.',
    fr:
      'FAQ Bint Saeed, maison d’abayas de luxe à Abu Dhabi : livraison, tailles, échanges, achat officiel sur bintsaeed.com et livraison GCC.',
    it:
      'FAQ su Bint Saeed, casa di abaya di lusso ad Abu Dhabi: spedizioni, taglie, resi, acquisto su bintsaeed.com e consegna nel GCC.',
    es:
      'Preguntas sobre Bint Saeed, casa de abayas de lujo en Abu Dhabi: envíos, tallas, cambios, compra oficial en bintsaeed.com y entrega en el GCC.',
    ru:
      'Ответы по Bint Saeed — дому роскошных абай в Абу-Даби: доставка по ОАЭ и региону, размеры, обмен, покупка на bintsaeed.com.',
    zh:
      'Bint Saeed 常见问题：总部位于阿布扎比的奢华阿巴亚品牌；配送、尺码、换货、bintsaeed.com 官方购买与海合会地区邮寄说明。',
    de:
      'FAQ zu Bint Saeed, Luxus-Abaya-Haus in Abu Dhabi: Versand, Größen, Umtausch, offizieller Kauf auf bintsaeed.com und GCC-Lieferung.',
    nl:
      'FAQ over Bint Saeed, luxe abayahuis in Abu Dhabi: verzending, maten, ruilen, officiële aankoop via bintsaeed.com en GCC-levering.',
    pt:
      'FAQ da Bint Saeed, casa de abayas de luxo em Abu Dhabi: envios, medidas, trocas, compra oficial em bintsaeed.com e entrega no Golfo.',
  },
  shop_index: {
    en:
      'Shop Bint Saeed online — luxury abayas from Abu Dhabi, UAE. Heritage-led design, jewellery and lifestyle pieces; delivery across the UAE and GCC.',
    ar:
      'تسوّقي أونلاين من بِنت سعيد: دار عبايات فاخرة في أبوظبي، مجوهرات وقطع أسلوب حياة، تصميم مستند إلى التراث الإماراتي مع توصيل في الإمارات والخليج.',
    fr:
      'Boutique en ligne Bint Saeed — abayas de luxe depuis Abu Dhabi : pièces inspirées du patrimoine émirati, bijoux et lifestyle ; livraison EAU & GCC.',
    it:
      'Shop online Bint Saeed — abaya di lusso da Abu Dhabi: design legato al patrimonio emiratino, gioielli e lifestyle; spedizioni UAE e GCC.',
    es:
      'Tienda oficial Bint Saeed — abayas de lujo desde Abu Dhabi: diseño ligado al patrimonio emiratí, joyas y lifestyle; envíos EAU y Golfo.',
    ru:
      'Интернет‑магазин Bint Saeed — роскошные абайи из Абу‑Даби: эмиратские коды дизайна, украшения и lifestyle; доставка по ОАЭ и странам GCC.',
    zh:
      '在 Bint Saeed 官方网店选购阿布扎比奢华阿巴亚：融合阿联酋传统工艺与珠宝、生活方式单品；阿联酋与海合会地区配送。',
    de:
      'Bint Saeed Online‑Shop — Luxus‑Abayas aus Abu Dhabi: erbegeprägte Designs, Schmuck und Lifestyle; Lieferung in die VAE und GCC.',
    nl:
      'Shop Bint Saeed — luxe abaya’s uit Abu Dhabi: erfgoedrijke patronen, sieraden en lifestyle; levering in VAE en GCC‑landen.',
    pt:
      'Loja online Bint Saeed — abayas de luxo de Abu Dhabi: silhuetas ligadas ao património emiradense, joalharia e lifestyle; envios EAU e Golfo.',
  },
  product: {
    en:
      'Product detail — Bint Saeed luxury abayas from Abu Dhabi. Materials, fit and craft notes; shop official pieces with UAE & GCC delivery options.',
    ar:
      'تفاصيل المنتج، بِنت سعيد، دار عبايات فاخرة في أبوظبي: المواد والقصّة والحرفية؛ تسوّقي عبر الموقع الرسمي مع خيارات التوصيل في الإمارات والخليج.',
    fr:
      'Fiche produit Bint Saeed — abayas de luxe depuis Abu Dhabi : matières, coupe et artisanat ; achat officiel avec livraison EAU & Golfe.',
    it:
      'Dettaglio prodotto Bint Saeed — abaya di lusso da Abu Dhabi: tessuti, vestibilità e dettaglio sartoriale; acquisto ufficiale con consegna UAE/GCC.',
    es:
      'Producto Bint Saeed — abayas de lujo desde Abu Dhabi: tejidos, caída y acabados; compra oficial con envío a EAU y países del Golfo.',
    ru:
      'Карточка товара Bint Saeed — роскошные абайи из Абу‑Даби: материалы, посадка, детали; официальная покупка, доставка по ОАЭ и GCC.',
    zh:
      'Bint Saeed 商品详情：阿布扎比奢华阿巴亚的面料、版型与工艺说明；官网购买，支持阿联酋与海合会配送。',
    de:
      'Produktdetail Bint Saeed — Luxus‑Abayas aus Abu Dhabi: Materialien, Schnitt und Handwerk; offizieller Kauf mit Lieferung in VAE & GCC.',
    nl:
      'Productdetail Bint Saeed — luxe abaya’s uit Abu Dhabi: stof, pasvorm en afwerking; officiële aankoop met levering VAE/GCC.',
    pt:
      'Produto Bint Saeed — abayas de luxo de Abu Dhabi: materiais, caimento e acabamentos; compra oficial com envios EAU e Golfo.',
  },
  about: {
    en:
      'About Bint Saeed — luxury abaya house founded in Abu Dhabi. Heritage-led design, Al Talli and Khous craft, jewellery and lifestyle for women worldwide.',
    ar:
      'عن بِنت سعيد، دار عبايات فاخرة تأسست في أبوظبي، تركّز على رموز التصميم الإماراتية وحرفية التلي والخوص، ومجوهرات وقطع أسلوب حياة للمرأة المعاصرة.',
    fr:
      'À propos de Bint Saeed — maison d’abayas de luxe à Abu Dhabi : design ancré dans le patrimoine émirati, savoir‑faire Al Talli & Khous, bijoux et lifestyle.',
    it:
      'Chi è Bint Saeed — casa di abaya di lusso con radici ad Abu Dhabi: codici di design emiratini, artigianato Al Talli e Khous, gioielli e lifestyle.',
    es:
      'Sobre Bint Saeed — casa de abayas de lujo con base en Abu Dhabi: diseño ligado al patrimonio emiratí, artesanía Al Talli y Khous, joyas y lifestyle.',
    ru:
      'О бренде Bint Saeed — дом роскошных абай в Абу‑Даби: эмиратские дизайн‑коды, ремесло Аль‑Талли и Хаус, украшения и предметы lifestyle.',
    zh:
      '关于 Bint Saeed：创立于阿布扎比的奢华阿巴亚品牌，延续阿联酋美学与阿勒塔利、赫乌斯工艺，并提供珠宝与生活方式单品。',
    de:
      'Über Bint Saeed — Luxus‑Abaya‑Haus in Abu Dhabi: erbegeprägte Silhouetten, Al‑Talli & Khous, Schmuck und Lifestyle‑Stücke.',
    nl:
      'Over Bint Saeed — luxe abayahuis in Abu Dhabi: emiratisch design, vakmanschap Al Talli & Khous, sieraden en lifestyle‑objecten.',
    pt:
      'Sobre a Bint Saeed — casa de abayas de luxo em Abu Dhabi: design ligado ao património emiradense, ofício Al Talli e Khous, joalharia e lifestyle.',
  },
  contact: {
    en:
      'Contact Bint Saeed in Abu Dhabi — customer care for orders, sizing and delivery across the UAE, GCC and international destinations where available.',
    ar:
      'تواصلي مع بِنت سعيد في أبوظبي، خدمة عملاء للطلبات والمقاسات والتوصيل داخل الإمارات ودول الخليج والوجهات الدولية عند توفرها.',
    fr:
      'Contacter Bint Saeed à Abu Dhabi : service client pour commandes, tailles et livraison aux Émirats, GCC et destinations internationales disponibles.',
    it:
      'Contatta Bint Saeed ad Abu Dhabi: assistenza su ordini, taglie e consegna negli Emirati, GCC e dove il servizio è attivo.',
    es:
      'Contacto Bint Saeed en Abu Dhabi: atención para pedidos, tallas y envíos en EAU, Golfo y destinos internacionales disponibles.',
    ru:
      'Контакты Bint Saeed (Абу‑Даби): поддержка по заказам, размерам и доставке в ОАЭ, страны GCC и на международные направления по условиям сайта.',
    zh:
      '联系阿布扎比的 Bint Saeed：订单、尺码与阿联酋、海合会及适用国际地区的配送与客服咨询。',
    de:
      'Kontakt Bint Saeed Abu Dhabi — Kundenservice zu Bestellungen, Größen und Lieferung in VAE, GCC und internationale Märkte je nach Verfügbarkeit.',
    nl:
      'Contact Bint Saeed Abu Dhabi — klantenservice voor orders, maten en levering in VAE, GCC en internationale bestemmingen waar mogelijk.',
    pt:
      'Contacte a Bint Saeed em Abu Dhabi — apoio a encomendas, medidas e envios nos EAU, Golfo e destinos internacionais quando disponível.',
  },
  heritage: {
    en:
      'Heritage at Bint Saeed — Abu Dhabi luxury abaya house rooted in Emirati craft. Explore stories behind Al Talli, Khous weaving and regional design codes.',
    ar:
      'التراث في بِنت سعيد، دار عبايات فاخرة في أبوظبي تنطلق من الحرف الإماراتية. اطّلعي على قصص التلي ونسيج الخوص ورموز التصميم المحلية.',
    fr:
      'Patrimoine chez Bint Saeed — maison d’abayas à Abu Dhabi ancrée dans le savoir‑faire émirati : Al Talli, Khous et codes de design régionaux.',
    it:
      'Patrimonio Bint Saeed — casa di abaya ad Abu Dhabi legata all’artigianato emiratino: Al Talli, Khous e linee progettuali locali.',
    es:
      'Patrimonio en Bint Saeed — casa de abayas en Abu Dhabi inspirada en el oficio emiratí: Al Talli, Khous y códigos de diseño locales.',
    ru:
      'Наследие Bint Saeed — дом абай в Абу‑Даби на базе эмиратских ремёсел: Аль‑Талли, Хаус и локальные принципы дизайна.',
    zh:
      'Bint Saeed 传承故事：根植阿布扎比的奢华阿巴亚品牌，呈现阿勒塔利、赫乌斯编织与阿联酋设计渊源。',
    de:
      'Heritage bei Bint Saeed — Luxus‑Abaya‑Haus in Abu Dhabi mit Fokus auf Emirati‑Craft, Al‑Talli, Khous und regionale Designcodes.',
    nl:
      'Erfgoed bij Bint Saeed — luxe abayahuis in Abu Dhabi met Emirati‑vakmanschap: Al Talli, Khous en lokale ontwerpcodes.',
    pt:
      'Património na Bint Saeed — casa de abayas em Abu Dhabi ligada ao ofício emiradense: Al Talli, Khous e códigos de design locais.',
  },
  heritage_al_talli: {
    en:
      'Al Talli embroidery — heritage craft referenced by Bint Saeed, luxury abaya house in Abu Dhabi. UNESCO‑recognised Emirati technique at the heart of design.',
    ar:
      'تطريز التلي، حرفة تراثية يستند إليها تصميم بِنت سعيد في أبوظبي؛ تقنية إماراتية معترف بها من اليونسكو وتشكّل جزءاً من الهوية البصرية للدار.',
    fr:
      'Broderie Al Talli — savoir‑faire UNESCO au cœur des créations Bint Saeed à Abu Dhabi : maisons d’abayas de luxe inspirées du patrimoine émirati.',
    it:
      'Al Talli — ricamo patrimonio UNESCO citato da Bint Saeed ad Abu Dhabi per abaya di lusso legate alla cultura emiratina.',
    es:
      'Al Talli — bordado patrimonio UNESCO que inspira a Bint Saeed en Abu Dhabi en abayas de lujo ancladas en la cultura emiratí.',
    ru:
      'Аль‑Талли — эмиратская техника вышивки (UNESCO), которую развивает Bint Saeed в Абу‑Даби в коллекциях люксовых абай.',
    zh:
      '阿勒塔利刺绣：联合国教科文组织认定的阿联酋传统工艺，亦是阿布扎比 Bint Saeed 奢华阿巴亚系列的重要灵感来源。',
    de:
      'Al Talli — UNESCO‑geschütztes Emirati‑Stickwerk, das Bint Saeed in Abu Dhabi für Luxus‑Abayas mit lokaler Identität nutzt.',
    nl:
      'Al Talli — UNESCO‑erfgoed uit de VAE, verwerkt door Bint Saeed in Abu Dhabi in luxe abaya’s met emiratische signatuur.',
    pt:
      'Al Talli — bordado património UNESCO integrado pela Bint Saeed em Abu Dhabi em abayas de luxo com identidade emiradense.',
  },
  heritage_khous: {
    en:
      'Khous palm‑frond weaving — structural heritage referenced by Bint Saeed in Abu Dhabi. Discover how craft logic shapes contemporary luxury abayas.',
    ar:
      'نسيج الخوص، تراث بنيوي يستوحى منه تصميم بِنت سعيد في أبوظبي؛ منطق الحرفية الإماراتية يضفي حضوراً معاصراً على العباءات الفاخرة.',
    fr:
      'Tissage Khous en palmier — référence structurelle pour Bint Saeed à Abu Dhabi : logique artisanale au service d’abayas de luxe contemporaines.',
    it:
      'Khous — intreccio tradizionale citato da Bint Saeed ad Abu Dhabi per dare struttura e ritmo alle collezioni di abaya di lusso.',
    es:
      'Khous — tejido en palma que inspira la silueta en Bint Saeed (Abu Dhabi), conectando oficio local y abayas de lujo actuales.',
    ru:
      'Хаус — плетение из пальмовых листьев как конструктивный код наследия в коллекциях Bint Saeed в Абу‑Даби.',
    zh:
      '赫乌斯棕榈编织工艺：阿布扎比 Bint Saeed 汲取的结构灵感，用以塑造当代奢华阿巴亚轮廓。',
    de:
      'Khous — Palmblatt‑Geflecht als strukturelles Erbe, das Bint Saeed in Abu Dhabi in moderne Luxus‑Abayas übersetzt.',
    nl:
      'Khous — palmweefwerk als structureel erfgoed voor Bint Saeed in Abu Dhabi en hedendaagse luxe abaya’s.',
    pt:
      'Khous — entrelaçamento de palma como referência estrutural na Bint Saeed em Abu Dhabi para abayas de luxo contemporâneas.',
  },
  heritage_sadu: {
    en:
      'Sadu weaving heritage — contextual craft narrative explored by Bint Saeed, Abu Dhabi luxury abaya house connecting textile tradition with modern silhouettes.',
    ar:
      'إرث نسيج السدو، حكاية حرفية يعرضها سياقُ بِنت سعيد في أبوظبي؛ ربطٌ بين تقاليد النسيج المحلي والقصّات المعاصرة للعباءات الفاخرة.',
    fr:
      'Tissage Sadu — lecture patrimoniale proposée par Bint Saeed à Abu Dhabi, entre tradition textile régionale et silhouettes luxury actuelles.',
    it:
      'Sadu — narrazione tessile nel percorso Bint Saeed ad Abu Dhabi tra tradizione locale e abaya contemporanee.',
    es:
      'Sadu — narrativa textil dentro del relato de Bint Saeed en Abu Dhabi: tradición regional y siluetas luxury actuales.',
    ru:
      'Саду — традиционное ткачество в контексте наследия Bint Saeed в Абу‑Даби и современных абай люкса.',
    zh:
      '萨杜编织：在阿布扎比 Bint Saeed 叙事中串联纺织传统与现代奢华阿巴亚廓形。',
    de:
      'Sadu‑Webkunst — textile Tradition, die Bint Saeed in Abu Dhabi mit aktuellen Luxus‑Silhouetten verbindet.',
    nl:
      'Sadu‑weeftraditie — verhaal bij Bint Saeed in Abu Dhabi tussen regionaal textielerfgoed en hedendaagse luxe silhouetten.',
    pt:
      'Tecelagem Sadu — narrativa patrimonial na Bint Saeed em Abu Dhabi entre tradição têxtil e silhuetas luxury atuais.',
  },
  accessories: {
    en:
      'Accessories by Bint Saeed — curated jewellery and lifestyle pieces from Abu Dhabi to complement luxury abayas; shop official edits with UAE & GCC shipping.',
    ar:
      'إكسسوارات من بِنت سعيد، مجوهرات وقطع أسلوب حياة مختارة في أبوظبي لتكميل العباءات الفاخرة؛ تسوّقي عبر الموقع الرسمي مع توصيل في الإمارات والخليج.',
    fr:
      'Accessoires Bint Saeed — bijoux et pièces lifestyle sélectionnées à Abu Dhabi pour accompagner vos abayas ; livraison EAU & Golfe.',
    it:
      'Accessori Bint Saeed — gioielli e oggetti lifestyle curati ad Abu Dhabi da abbinare alle abaya; spedizioni UAE e GCC.',
    es:
      'Accesorios Bint Saeed — joyas y piezas lifestyle curadas en Abu Dhabi para combinar con abayas de lujo; envíos EAU y Golfo.',
    ru:
      'Аксессуары Bint Saeed — украшения и lifestyle‑объекты из Абу‑Даби к роскошным абайям; официальный магазин, доставка ОАЭ/GCC.',
    zh:
      'Bint Saeed 配饰精选：阿布扎比珠宝与生活方式单品，搭配奢华阿巴亚；官网下单，阿联酋与海合会配送。',
    de:
      'Accessoires von Bint Saeed — kuratierte Schmuck‑ und Lifestyle‑Pieces aus Abu Dhabi für Luxus‑Abayas; Versand VAE/GCC.',
    nl:
      'Accessoires van Bint Saeed — geselecteerde sieraden en lifestyle‑items uit Abu Dhabi bij luxe abaya’s; levering VAE/GCC.',
    pt:
      'Acessórios Bint Saeed — joalharia e peças lifestyle curadas em Abu Dhabi para combinar com abayas de luxo; envios EAU/Golfo.',
  },
  accessories_product: {
    en:
      'Accessory detail — Bint Saeed jewellery or lifestyle piece from Abu Dhabi designed to pair with luxury abayas; official purchase with transparent shipping.',
    ar:
      'تفاصيل الإكسسوار، قطعة مجوهرات أو أسلوب حياة من بِنت سعيد في أبوظبي لتنسيقها مع العباءات الفاخرة؛ شراء رسمي وخيارات شحن واضحة.',
    fr:
      'Détail accessoire — pièce Bint Saeed à Abu Dhabi (bijou ou lifestyle) pensée avec les abayas de luxe ; achat officiel et livraison claire.',
    it:
      'Dettaglio accessorio — pezzo Bint Saeed da Abu Dhabi (gioiello/lifestyle) da abbinare alle abaya luxury; acquisto ufficiale con spedizione trasparente.',
    es:
      'Detalle de accesorio — pieza Bint Saeed en Abu Dhabi para combinar con abayas de lujo; compra oficial con envíos claros.',
    ru:
      'Карточка аксессуара — изделие Bint Saeed из Абу‑Даби к люксовым абайям; официальная покупка и понятные условия доставки.',
    zh:
      '配饰详情：阿布扎比 Bint Saeed 珠宝或生活方式单品，可与奢华阿巴亚搭配；官网透明配送说明。',
    de:
      'Accessoire‑Detail — Schmuck‑ oder Lifestyle‑Piece von Bint Saeed aus Abu Dhabi zu Luxus‑Abayas; offizieller Kauf mit klarem Versand.',
    nl:
      'Accessoire‑detail — juweel of lifestyle‑item van Bint Saeed uit Abu Dhabi bij luxe abaya’s; officiële koop met heldere levering.',
    pt:
      'Detalhe do acessório — peça Bint Saeed em Abu Dhabi para combinar com abayas de luxo; compra oficial com envio transparente.',
  },
  cart: {
    en:
      'Your bag at Bint Saeed — review luxury abayas and accessories before checkout. Official Abu Dhabi brand with UAE & GCC delivery options.',
    ar:
      'سلة التسوق في بِنت سعيد، راجعي العباءات الفاخرة والإكسسوارات قبل الدفع. علامة أبوظبي الرسمية مع خيارات توصيل في الإمارات والخليج.',
    fr:
      'Panier Bint Saeed — vérifiez vos abayas et accessoires avant paiement : maison d’Abu Dhabi avec livraison EAU & Golfe.',
    it:
      'Carrello Bint Saeed — riepilogo abaya e accessori prima del checkout; brand ufficiale di Abu Dhabi con consegna UAE/GCC.',
    es:
      'Bolsa Bint Saeed — revisa abayas y accesorios antes de pagar; marca oficial en Abu Dhabi con envío EAU/Golfo.',
    ru:
      'Корзина Bint Saeed — проверьте абайи и аксессуары перед оплатой; официальный бренд Абу‑Даби, доставка ОАЭ/GCC.',
    zh:
      'Bint Saeed 购物袋：结算前核对奢华阿巴亚与配饰；阿布扎比官方品牌，支持阿联酋与海合会配送。',
    de:
      'Warenkorb Bint Saeed — Luxus‑Abayas und Accessoires vor dem Checkout prüfen; offizielle Marke aus Abu Dhabi, Versand VAE/GCC.',
    nl:
      'Tas bij Bint Saeed — controleer luxe abaya’s en accessoires voor afrekenen; officieel merk Abu Dhabi, levering VAE/GCC.',
    pt:
      'Sacola Bint Saeed — reveja abayas e acessórios antes do pagamento; marca oficial de Abu Dhabi com envios EAU/Golfo.',
  },
  checkout: {
    en:
      'Review your Bint Saeed order before secure payment — luxury abayas and accessories from Abu Dhabi. Proceed to Stripe when you are ready.',
    ar:
      'راجعي طلبك من بِنت سعيد قبل الدفع الآمن — عباءات فاخرة وإكسسوارات من أبوظبي. تابعي إلى سترايب عندما تكونين جاهزة.',
    fr:
      'Vérifiez votre commande Bint Saeed avant le paiement sécurisé — abayas et accessoires de luxe depuis Abu Dhabi.',
    it:
      'Rivedi il tuo ordine Bint Saeed prima del pagamento sicuro — abaya e accessori luxury da Abu Dhabi.',
    es:
      'Revisa tu pedido Bint Saeed antes del pago seguro — abayas y accesorios de lujo desde Abu Dhabi.',
    ru:
      'Проверьте заказ Bint Saeed перед безопасной оплатой — роскошные абайи и аксессуары из Абу‑Даби.',
    zh:
      '在安全支付前确认 Bint Saeed 订单——阿布扎比奢华阿巴亚与配饰。',
    de:
      'Prüfen Sie Ihre Bint Saeed Bestellung vor der sicheren Zahlung — Luxus‑Abayas aus Abu Dhabi.',
    nl:
      'Controleer uw Bint Saeed bestelling vóór veilige betaling — luxe abaya’s uit Abu Dhabi.',
    pt:
      'Reveja o seu pedido Bint Saeed antes do pagamento seguro — abayas de luxo de Abu Dhabi.',
  },
  checkout_success: {
    en:
      'Thank you — your Bint Saeed order is confirmed. Luxury abayas and lifestyle pieces from Abu Dhabi; tracking and care details arrive by email.',
    ar:
      'شكراً لكِ، تم تأكيد طلبك لدى بِنت سعيد. قطع فاخرة من أبوظبي؛ ستصلك تفاصيل التتبع والعناية عبر البريد الإلكتروني.',
    fr:
      'Merci — commande Bint Saeed confirmée. Abayas et pièces lifestyle depuis Abu Dhabi ; suivi envoyé par e‑mail.',
    it:
      'Grazie — ordine Bint Saeed confermato. Abaya e pezzi lifestyle da Abu Dhabi; tracciamento via email.',
    es:
      'Gracias — pedido Bint Saeed confirmado. Abayas y piezas lifestyle desde Abu Dhabi; seguimiento por email.',
    ru:
      'Спасибо — заказ Bint Saeed подтверждён. Абайи и lifestyle из Абу‑Даби; отслеживание придёт на почту.',
    zh:
      '感谢您的购买 — Bint Saeed 订单已确认。阿布扎比奢华阿巴亚与生活方式单品；跟踪与护理信息将发送至邮箱。',
    de:
      'Danke — Bestellung bei Bint Saeed bestätigt. Luxus‑Abayas aus Abu Dhabi; Tracking‑Infos folgen per E‑Mail.',
    nl:
      'Bedankt — je Bint Saeed‑bestelling is bevestigd. Luxe abaya’s uit Abu Dhabi; tracking per e‑mail.',
    pt:
      'Obrigado — pedido Bint Saeed confirmado. Peças de luxo de Abu Dhabi; seguimento por e‑mail.',
  },
  account: {
    en:
      'Your Bint Saeed account — manage orders, addresses and preferences for Abu Dhabi luxury abayas and accessories with secure sign‑in.',
    ar:
      'حسابك في بِنت سعيد، إدارة الطلبات والعناوين والتفضيلات لعباءات أبوظبي الفاخرة والإكسسوارات مع تسجيل دخول آمن.',
    fr:
      'Compte Bint Saeed — suivez commandes et préférences pour vos abayas et accessoires de luxe depuis Abu Dhabi en toute sécurité.',
    it:
      'Account Bint Saeed — gestisci ordini e preferenze per abaya e accessori luxury da Abu Dhabi con accesso sicuro.',
    es:
      'Cuenta Bint Saeed — gestiona pedidos y preferencias de abayas y accesorios de lujo desde Abu Dhabi de forma segura.',
    ru:
      'Аккаунт Bint Saeed — заказы и настройки для люксовых абай и аксессуаров из Абу‑Даби; безопасный вход.',
    zh:
      'Bint Saeed 账户：安全管理阿布扎比奢华阿巴亚与配饰订单、地址与偏好设置。',
    de:
      'Bint Saeed‑Konto — Bestellungen und Einstellungen für Luxus‑Abayas aus Abu Dhabi sicher verwalten.',
    nl:
      'Bint Saeed‑account — beheer orders en voorkeuren voor luxe abaya’s uit Abu Dhabi veilig online.',
    pt:
      'Conta Bint Saeed — gere encomendas e preferências para abayas de luxo de Abu Dhabi com login seguro.',
  },
  register: {
    en:
      'Create your Bint Saeed profile — faster checkout for Abu Dhabi luxury abayas, jewellery and lifestyle orders with email updates you control.',
    ar:
      'أنشئي ملفاً في بِنت سعيد، إتمام شراء أسرع لعباءات أبوظبي الفاخرة والمجوهرات مع تحديثات بريدية يمكنك ضبطها.',
    fr:
      'Créez votre profil Bint Saeed — checkout plus rapide pour abayas, bijoux et lifestyle d’Abu Dhabi avec emails maîtrisés.',
    it:
      'Registrati su Bint Saeed — checkout veloce per abaya, gioielli e lifestyle da Abu Dhabi con comunicazioni gestibili.',
    es:
      'Registro Bint Saeed — compras más rápidas de abayas, joyas y lifestyle desde Abu Dhabi con emails configurables.',
    ru:
      'Регистрация Bint Saeed — быстрый заказ люксовых абай и аксессуаров из Абу‑Даби с управляемыми уведомлениями.',
    zh:
      '注册 Bint Saeed：更快结账阿布扎比奢华阿巴亚与珠宝订单，并可自行管理邮件提醒。',
    de:
      'Profil bei Bint Saeed — schnellerer Checkout für Luxus‑Abayas und Lifestyle aus Abu Dhabi mit steuerbaren E‑Mails.',
    nl:
      'Account aanmaken bij Bint Saeed — sneller afrekenen voor luxe abaya’s uit Abu Dhabi met eigen e‑mailvoorkeuren.',
    pt:
      'Crie perfil na Bint Saeed — checkout mais rápido para abayas de luxo de Abu Dhabi com emails controláveis.',
  },
  privacy: {
    en:
      'Privacy policy — how Bint Saeed collects and protects data for Abu Dhabi luxury abaya shoppers across the UAE, GCC and international orders.',
    ar:
      'سياسة الخصوصية، كيف تجمع بِنت سعيد البيانات وتحميها لمتسوّقي العباءات الفاخرة في أبوظبي والإمارات والخليج والطلبات الدولية.',
    fr:
      'Politique de confidentialité — données clients chez Bint Saeed (Abu Dhabi) pour achats en ligne EAU, Golfe et international.',
    it:
      'Privacy policy — trattamento dati Bint Saeed per clienti di abaya luxury ad Abu Dhabi e acquisti UAE/GCC/internazionali.',
    es:
      'Privacidad — tratamiento de datos en compras Bint Saeed (Abu Dhabi) para clientes en EAU, Golfo e internacional.',
    ru:
      'Политика конфиденциальности — обработка данных Bint Saeed для покупателей люксовых абай в Абу‑Даби и онлайн‑заказов.',
    zh:
      '隐私政策：说明 Bint Saeed（阿布扎比）如何收集与保护阿联酋、海合会及国际顾客的购物数据。',
    de:
      'Datenschutz — Umgang mit Kundendaten bei Bint Saeed (Abu Dhabi) für Online‑Bestellungen in VAE, GCC und weltweit.',
    nl:
      'Privacybeleid — hoe Bint Saeed gegevens verwerkt voor klanten van luxe abaya’s uit Abu Dhabi en internationale orders.',
    pt:
      'Privacidade — tratamento de dados na Bint Saeed (Abu Dhabi) para compras nos EAU, Golfo e internacional.',
  },
  terms: {
    en:
      'Terms of use — shopping Bint Saeed luxury abayas from Abu Dhabi online: shipping, exchanges and responsibilities for UAE, GCC and export orders.',
    ar:
      'شروط الاستخدام، التسوّق عبر الإنترنت من بِنت سعيد في أبوظبي: الشحن والاستبدال والمسؤوليات للطلبات في الإمارات والخليج والخارج.',
    fr:
      'Conditions générales — achats en ligne Bint Saeed (Abu Dhabi) : livraison, échanges et obligations pour commandes EAU/GCC.',
    it:
      'Termini di utilizzo — acquisti online Bint Saeed da Abu Dhabi: spedizioni, cambi e responsabilità per ordini UAE/GCC.',
    es:
      'Términos — compras online Bint Saeed desde Abu Dhabi: envíos, cambios y responsabilidades en EAU/Golfo.',
    ru:
      'Условия использования — покупки Bint Saeed онлайн из Абу‑Даби: доставка, обмен и обязанности для заказов ОАЭ/GCC.',
    zh:
      '使用条款：阿布扎比 Bint Saeed 网购奢华阿巴亚的配送、换货与阿联酋/海合会订单责任说明。',
    de:
      'AGB — Online‑Einkauf bei Bint Saeed Abu Dhabi: Versand, Umtausch und Pflichten für VAE/GCC‑Bestellungen.',
    nl:
      'Voorwaarden — online shoppen bij Bint Saeed Abu Dhabi: levering, ruilen en aansprakelijkheid voor VAE/GCC‑orders.',
    pt:
      'Termos — compras online na Bint Saeed Abu Dhabi: envios, trocas e responsabilidades para pedidos EAU/Golfo.',
  },
  cookies: {
    en:
      'Cookie policy — how Bint Saeed uses cookies and similar tech to keep the Abu Dhabi luxury shopping experience fast, secure and personalised.',
    ar:
      'سياسة ملفات تعريف الارتباط، كيف تستخدم بِنت سعيد ملفات الكوكيز والتقنيات المشابهة لتشغيل تجربة تسوّق فاخرة آمنة وسريعة.',
    fr:
      'Politique cookies — usage des traceurs par Bint Saeed pour sécuriser et fluidifier votre shopping luxe depuis Abu Dhabi.',
    it:
      'Cookie policy — uso di cookie da parte di Bint Saeed per rendere sicura e fluida l’esperienza luxury da Abu Dhabi.',
    es:
      'Cookies — uso de tecnologías por Bint Saeed para un shopping de lujo fluido y seguro desde Abu Dhabi.',
    ru:
      'Файлы cookie — как Bint Saeed использует технологии для безопасного люксового шопинга из Абу‑Даби.',
    zh:
      'Cookie 政策：Bint Saeed 如何使用 Cookie 等技术，保障阿布扎比奢华购物体验的流畅与安全。',
    de:
      'Cookie‑Hinweis — Einsatz von Cookies bei Bint Saeed für ein sicheres Luxus‑Shopping aus Abu Dhabi.',
    nl:
      'Cookiebeleid — hoe Bint Saeed cookies gebruikt voor een snelle, veilige luxe‑shopervaring uit Abu Dhabi.',
    pt:
      'Cookies — como a Bint Saeed utiliza tecnologias para uma experiência luxury segura desde Abu Dhabi.',
  },
  size_guide: {
    en:
      'Size guide — measure for Bint Saeed luxury abayas from Abu Dhabi. Fit tips for UAE online shoppers ordering dresses, separates and layered looks.',
    ar:
      'دليل المقاسات، قياسات مقترحة لعباءات بِنت سعيد الفاخرة من أبوظبي؛ إرشادات المناسبة للتسوّق الإلكتروني في الإمارات للفساتين والطبقات.',
    fr:
      'Guide des tailles — prendre ses mesures pour les abayas Bint Saeed (Abu Dhabi) ; conseils pour achats online aux Émirats.',
    it:
      'Guida taglie — misure per abaya Bint Saeed da Abu Dhabi; suggerimenti per acquisti online negli Emirati.',
    es:
      'Guía de tallas — cómo medir para abayas Bint Saeed desde Abu Dhabi; consejos para compras online en EAU.',
    ru:
      'Таблица размеров — как снять мерки для абай Bint Saeed (Абу‑Даби); советы для онлайн‑покупок в ОАЭ.',
    zh:
      '尺码指南：阿布扎比 Bint Saeed 奢华阿巴亚量身建议；阿联酋在线选购上衣与叠搭参考。',
    de:
      'Größentabelle — Messhilfe für Bint Saeed‑Abayas aus Abu Dhabi; Tipps für Online‑Bestellungen in den VAE.',
    nl:
      'Maattabel — opmeten voor Bint Saeed abaya’s uit Abu Dhabi; tips voor online shoppers in VAE.',
    pt:
      'Guia de tamanhos — medições para abayas Bint Saeed em Abu Dhabi; dicas para compras online nos EAU.',
  },
  verify_email: {
    en:
      'Verify your email — secure your Bint Saeed account for Abu Dhabi luxury orders, restocks and tailored client updates you choose to receive.',
    ar:
      'تأكيد البريد الإلكتروني، لتأمين حسابك في بِنت سعيد لطلبات أبوظبي الفاخرة والتنبيهات التي تختارين استلامها.',
    fr:
      'Vérification e-mail — sécurisez votre compte Bint Saeed pour commandes luxury depuis Abu Dhabi et alertes choisies.',
    it:
      'Verifica email — proteggi il tuo account Bint Saeed per ordini luxury da Abu Dhabi e comunicazioni selezionate.',
    es:
      'Verificar correo — asegura tu cuenta Bint Saeed para pedidos luxury desde Abu Dhabi y avisos que eliges.',
    ru:
      'Подтвердите email — защитите аккаунт Bint Saeed для заказов из Абу‑Даби и выбранных уведомлений.',
    zh:
      '验证邮箱：保障 Bint Saeed 阿布扎比账户安全，接收您选择的补货与客户通知。',
    de:
      'E‑Mail bestätigen — sichern Sie Ihr Bint Saeed‑Konto für Luxusbestellungen aus Abu Dhabi und gewählte Hinweise.',
    nl:
      'E-mail verifiëren — beveilig je Bint Saeed‑account voor luxe‑orders uit Abu Dhabi en gekozen updates.',
    pt:
      'Verificar e-mail — proteja a sua conta Bint Saeed para encomendas de luxo de Abu Dhabi e alertas escolhidos.',
  },
  the_codes: {
    en:
      'The Codes — design principles behind Bint Saeed luxury abayas in Abu Dhabi: heritage references, silhouette discipline and contemporary modest dressing.',
    ar:
      'الرموز، مبادئ التصميم في بِنت سعيد، دار عبايات فاخرة في أبوظبي: الإحالة إلى التراث، وضبط القصّة، واللباس المحتشم المعاصر.',
    fr:
      'The Codes — principes de création des abayas Bint Saeed à Abu Dhabi : référence au patrimoine, coupe précise et modestie contemporaine.',
    it:
      'The Codes — principi progettuali delle abaya Bint Saeed ad Abu Dhabi: citazioni heritage, silhouette rigorosa, modest wear attuale.',
    es:
      'The Codes — principios de diseño de las abayas Bint Saeed en Abu Dhabi: legado, silueta y modestia contemporánea.',
    ru:
      'The Codes — принципы дизайна абай Bint Saeed в Абу‑Даби: наследие, дисциплина кроя и современная скромная эстетика.',
    zh:
      '设计准则：阿布扎比 Bint Saeed 奢华阿巴亚的创作原则——传承参照、剪裁克制与当代端庄着装。',
    de:
      'The Codes — Designprinzipien der Bint Saeed‑Abayas in Abu Dhabi: Erbe, Schnittführung und zeitgemäße Modest‑Mode.',
    nl:
      'The Codes — ontwerpprincipes van Bint Saeed abaya’s in Abu Dhabi: erfgoed, silhouetdiscipline en hedendaagse modesty.',
    pt:
      'The Codes — princípios de design das abayas Bint Saeed em Abu Dhabi: legado, silhueta e modéstia contemporânea.',
  },
  craftsmanship: {
    en:
      'Craftsmanship — how Bint Saeed atelier standards in Abu Dhabi elevate luxury abayas through heritage techniques and meticulous finishing.',
    ar:
      'الحرفية، معايير ورشة بِنت سعيد في أبوظبي لرفع جودة العباءات الفاخرة عبر تقنيات تراثية وتشطيبات دقيقة.',
    fr:
      'Artisanat — standards d’atelier Bint Saeed à Abu Dhabi pour sublimer les abayas de luxe via savoir‑faire et finitions précises.',
    it:
      'Artigianato — standard di laboratorio Bint Saeed ad Abu Dhabi per abaya luxury con tecniche heritage e finiture curate.',
    es:
      'Artesanía — estándares de taller Bint Saeed en Abu Dhabi para abayas de lujo con técnicas tradicionales y acabados finos.',
    ru:
      'Мастерство — производственные стандарты Bint Saeed в Абу‑Даби для люксовых абай на базе традиционных техник.',
    zh:
      '工艺：阿布扎比 Bint Saeed 工坊标准，传统技法与精工细节打造奢华阿巴亚。',
    de:
      'Handwerk — Atelier‑Standards von Bint Saeed in Abu Dhabi für Luxus‑Abayas mit Heritage‑Techniken und feinen Finishings.',
    nl:
      'Vakmanschap — atelierstandaarden van Bint Saeed in Abu Dhabi voor luxe abaya’s met erfgoedtechnieken en precieze afwerking.',
    pt:
      'Artesanato — padrões de atelier da Bint Saeed em Abu Dhabi para abayas de luxo com técnicas tradicionais e acabamentos finos.',
  },
  personalisation: {
    en:
      'Every Bint Saeed piece includes a hidden pocket for a personal message. A name, a date, a private word — carried close, known only to you.',
    ar:
      'كل قطعة من Bint Saeed تتضمن جيباً مخفياً لرسالة شخصية: اسم، تاريخ، أو كلمة خاصة تُحمل بقربك.',
    fr:
      'Chaque pièce Bint Saeed inclut une poche cachée pour un message personnel: un nom, une date, un mot privé.',
    it:
      'Ogni capo Bint Saeed include una tasca nascosta per un messaggio personale: un nome, una data, una parola privata.',
    es:
      'Cada pieza Bint Saeed incluye un bolsillo oculto para un mensaje personal: un nombre, una fecha o una palabra privada.',
    ru:
      'Каждое изделие Bint Saeed включает скрытый карман для личного послания: имя, дата или важное слово.',
    zh:
      '每件 Bint Saeed 单品都包含隐藏口袋，可放入姓名、日期或私密文字。',
    de:
      'Jedes Bint Saeed Stück enthält eine versteckte Tasche für eine persönliche Botschaft: Name, Datum oder privates Wort.',
    nl:
      'Elk Bint Saeed stuk heeft een verborgen zakje voor een persoonlijke boodschap: naam, datum of privéwoord.',
    pt:
      'Cada peça Bint Saeed inclui um bolso escondido para mensagem pessoal: nome, data ou palavra privada.',
  },
  strands: {
    en:
      'The first interchangeable abaya strand system. Swap your natural stone to match your mood, your bag, your story. Onyx, jade, amethyst, aventurine and more.',
    ar:
      'أول نظام لسلاسل العباءة بالأحجار الطبيعية القابلة للتبديل: أونيكس، يشم، جمشت، أفينتورين وأكثر.',
    fr:
      'Le premier système de brins pour abaya : changez votre pierre naturelle selon votre style — onyx, jade, améthyste, aventurine et plus.',
    it:
      'Il primo sistema di strand per abaya: cambia la pietra naturale in base al tuo stile — onice, giada, ametista, avventurina e altro.',
    es:
      'El primer sistema de strands para abaya: cambia tu piedra natural según tu estilo — ónix, jade, amatista, aventurina y más.',
    ru:
      'Первая система каменных нитей для абайи: меняйте натуральные камни под настроение — оникс, нефрит, аметист, авантюрин и другие.',
    zh:
      '首个阿巴亚可替换石串系统：根据心情与造型切换天然石材，如玛瑙、玉石、紫水晶、东陵石等。',
    de:
      'Das erste Abaya-Strand-System: Natursteine je nach Stimmung wechseln — Onyx, Jade, Amethyst, Aventurin und mehr.',
    nl:
      'Het eerste abaya-strand systeem: wissel natuursteen naar stijl en stemming — onyx, jade, amethist, aventurijn en meer.',
    pt:
      'O primeiro sistema de strands para abaya: troque pedras naturais conforme o seu estilo — ónix, jade, ametista, aventurina e mais.',
  },
  product_care: {
    en:
      'Product care — guidance for Bint Saeed luxury abayas and fabrics from Abu Dhabi: storage, cleaning and longevity tips for UAE climates.',
    ar:
      'العناية بالمنتج، إرشادات لعباءات بِنت سعيد الفاخرة وأقمشتها من أبوظبي: التخزين والتنظيف وإطالة العمر في ظروف مناخ الإمارات.',
    fr:
      'Entretien — conseils pour abayas et matières Bint Saeed (Abu Dhabi) : stockage, nettoyage et durabilité sous climat émirati.',
    it:
      'Cura del capo — istruzioni per abaya e tessuti Bint Saeed da Abu Dhabi: conservazione e pulizia per il clima degli Emirati.',
    es:
      'Cuidado — recomendaciones para abayas y tejidos Bint Saeed desde Abu Dhabi: guardado y limpieza en clima de EAU.',
    ru:
      'Уход за изделием — рекомендации по абаям и тканям Bint Saeed из Абу‑Даби: хранение и чистка для климата ОАЭ.',
    zh:
      '保养说明：阿布扎比 Bint Saeed 奢华阿巴亚与面料在阿联酋气候下的收纳、洗涤与耐久建议。',
    de:
      'Pflege — Hinweise zu Bint Saeed‑Abayas und Materialien aus Abu Dhabi: Aufbewahrung und Reinigung für das Klima der VAE.',
    nl:
      'Verzorging — tips voor Bint Saeed‑abaya’s uit Abu Dhabi: opbergen en reinigen in het klimaat van de VAE.',
    pt:
      'Cuidados — orientações para abayas e tecidos Bint Saeed de Abu Dhabi: armazenamento e limpeza no clima dos EAU.',
  },
  giving_forward: {
    en:
      'Giving Forward — community initiatives aligned with Bint Saeed values in Abu Dhabi: heritage stewardship and purposeful luxury beyond product.',
    ar:
      'المبادرة الإنسانية، مبادرات مجتمعية تتوافق مع قيم بِنت سعيد في أبوظبي؛ الحفاظ على التراث وفخامة ذات غرض يتجاوز المنتج.',
    fr:
      'Giving Forward — initiatives portées par Bint Saeed à Abu Dhabi autour du patrimoine et d’un luxe engagé.',
    it:
      'Giving Forward — progetti community legati ai valori Bint Saeed ad Abu Dhabi tra patrimonio e lusso consapevole.',
    es:
      'Giving Forward — iniciativas comunitarias de Bint Saeed en Abu Dhabi ligadas al patrimonio y al lujo con propósito.',
    ru:
      'Giving Forward — инициативы Bint Saeed в Абу‑Даби о наследии и осмысленном люксе.',
    zh:
      'Giving Forward：阿布扎比 Bint Saeed 价值观下的社区倡议——传承守护与超越产品的理念奢华。',
    de:
      'Giving Forward — Gemeinschaftsprojekte von Bint Saeed in Abu Dhabi zu Erbe und Luxus mit Verantwortung.',
    nl:
      'Giving Forward — community‑initiatieven van Bint Saeed in Abu Dhabi rond erfgoed en luxe met betekenis.',
    pt:
      'Giving Forward — iniciativas da Bint Saeed em Abu Dhabi sobre património e luxo com propósito.',
  },
  careers: {
    en:
      'Careers — discover roles at Bint Saeed, Abu Dhabi luxury abaya house. Craft, client experience and operations opportunities where heritage meets innovation.',
    ar:
      'الوظائف، استكشفي فرص العمل في بِنت سعيد، دار عبايات فاخرة في أبوظبي؛ حرفية وتجربة عميل وعمليات تجمع بين التراث والابتكار.',
    fr:
      'Carrières — opportunités chez Bint Saeed à Abu Dhabi : atelier, expérience client et opérations entre patrimoine et innovation.',
    it:
      'Carriere — opportunità in Bint Saeed ad Abu Dhabi: laboratorio, retail e operations tra heritage e innovazione.',
    es:
      'Empleo — oportunidades en Bint Saeed Abu Dhabi: taller, experiencia de cliente y operaciones entre legado e innovación.',
    ru:
      'Карьера — вакансии в Bint Saeed (Абу‑Даби): ателье, клиентский сервис и операции на стыке наследия и инноваций.',
    zh:
      '招聘：阿布扎比 Bint Saeed 奢华阿巴亚品牌的职位机会——工艺、客户体验与运营，连接传承与创新。',
    de:
      'Karriere — Jobs bei Bint Saeed in Abu Dhabi: Atelier, Client Experience und Operations zwischen Erbe und Innovation.',
    nl:
      'Vacatures — werken bij Bint Saeed Abu Dhabi: atelier, klantbeleving en operatie tussen erfgoed en innovatie.',
    pt:
      'Carreiras — oportunidades na Bint Saeed em Abu Dhabi: oficina, experiência do cliente e operações entre legado e inovação.',
  },
  preview_gate: {
    en:
      'Preview access — verify entry to explore Bint Saeed editorial experiences from Abu Dhabi before public launch when invited.',
    ar:
      'الدخول للمعاينة، تأكيد الوصول لتجارب بِنت سعيد التحريرية من أبوظبي قبل الإطلاق العام عند الدعوة.',
    fr:
      'Accès preview — vérifiez votre entrée aux expériences éditoriales Bint Saeed (Abu Dhabi) avant ouverture publique.',
    it:
      'Accesso anteprima — verifica l’ingresso alle esperienze editoriali Bint Saeed da Abu Dhabi prima del lancio pubblico.',
    es:
      'Acceso preview — valida tu entrada a experiencias editoriales Bint Saeed en Abu Dhabi antes del lanzamiento.',
    ru:
      'Доступ к превью — подтверждение входа к редакционному опыту Bint Saeed в Абу‑Даби до публичного запуска.',
    zh:
      '预览访问：受邀验证后可提前体验阿布扎比 Bint Saeed 编辑内容。',
    de:
      'Preview‑Zugang — Zugang zu redaktionellen Bint Saeed‑Erlebnissen aus Abu Dhabi vor dem öffentlichen Launch.',
    nl:
      'Preview‑toegang — verifieer toegang tot editoriale Bint Saeed‑ervaringen uit Abu Dhabi vóór publieke launch.',
    pt:
      'Acesso antecipado — confirme entrada às experiências editoriais Bint Saeed em Abu Dhabi antes do lançamento.',
  },
  preview_blocked: {
    en:
      'Access restricted — this Bint Saeed preview area requires authorization. Shop public collections on bintsaeed.com from Abu Dhabi worldwide.',
    ar:
      'الدخول مقيد، منطقة المعاينة تتطلّب ترخيصاً. يمكن تصفّح المجموعات المتاحة للجمهور عبر bintsaeed.com من أبوظبي إلى العالم.',
    fr:
      'Accès restreint — cette zone preview Bint Saeed est protégée. Retrouvez les collections publiques sur bintsaeed.com.',
    it:
      'Accesso limitato — area anteprima Bint Saeed riservata. Collezioni pubbliche su bintsaeed.com da Abu Dhabi.',
    es:
      'Acceso restringido — zona preview Bint Saeed. Colecciones públicas en bintsaeed.com desde Abu Dhabi.',
    ru:
      'Доступ ограничен — закрытая зона превью Bint Saeed. Публичные коллекции на bintsaeed.com.',
    zh:
      '访问受限：此为 Bint Saeed 预览区。公开系列请访问 bintsaeed.com。',
    de:
      'Zugriff eingeschränkt — geschützter Bint Saeed‑Preview‑Bereich. Öffentliche Kollektionen auf bintsaeed.com.',
    nl:
      'Toegang beperkt — afgeschermde Bint Saeed‑preview. Publieke collecties op bintsaeed.com.',
    pt:
      'Acesso restrito — pré‑visualização Bint Saeed protegida. Coleções públicas em bintsaeed.com.',
  },
  social_redirect: {
    en:
      'Official Bint Saeed social link — connect with our Abu Dhabi luxury abaya house on approved channels for launches, craft stories and client care.',
    ar:
      'رابط رسمي لحسابات بِنت سعيد على وسائل التواصل، تابعي دار العبايات الفاخرة في أبوظبي للإطلاقات وقصص الحرفية وخدمة العملاء.',
    fr:
      'Lien social officiel Bint Saeed — suivez la maison d’abayas d’Abu Dhabi pour lancements, savoir‑faire et service client.',
    it:
      'Link social ufficiale Bint Saeed — segui la casa di Abu Dhabi per drop, craft story e assistenza.',
    es:
      'Enlace social oficial Bint Saeed — sigue la casa de Abu Dhabi para lanzamientos, artesanía y atención.',
    ru:
      'Официальный соцканал Bint Saeed — новости дома абай из Абу‑Даби, крафт и поддержка клиентов.',
    zh:
      'Bint Saeed 官方社交链接：关注阿布扎比奢华阿巴亚品牌的新品、工艺故事与客服动态。',
    de:
      'Offizieller Social‑Link — folgen Sie Bint Saeed Abu Dhabi für Launches, Handwerk und Service.',
    nl:
      'Officieel social‑kanaal — volg Bint Saeed Abu Dhabi voor drops, ambacht en service.',
    pt:
      'Ligação social oficial — siga a Bint Saeed Abu Dhabi para lançamentos, ofício e apoio ao cliente.',
  },
  generic: {
    en:
      'Bint Saeed — luxury abaya house in Abu Dhabi, UAE. Abayas, jewellery and lifestyle pieces shaped by Emirati design codes; shipping across the UAE & GCC.',
    ar:
      'بِنت سعيد، دار عبايات فاخرة في أبوظبي، الإمارات العربية المتحدة؛ عباءات ومجوهرات وقطع أسلوب حياة برموز تصميم إماراتية، مع توصيل في الإمارات ودول الخليج.',
    fr:
      'Bint Saeed — maison d’abayas de luxe à Abu Dhabi (EAU). Abayas, bijoux et lifestyle inspirés du design émirati ; livraison EAU & Golfe.',
    it:
      'Bint Saeed — casa di abaya di lusso ad Abu Dhabi (EAU). Abaya, gioielli e lifestyle con codici di design emiratini; consegna UAE/GCC.',
    es:
      'Bint Saeed — casa de abayas de lujo en Abu Dhabi (EAU). Abayas, joyas y lifestyle con códigos de diseño emiratíes; envíos EAU/Golfo.',
    ru:
      'Bint Saeed — дом роскошных абай в Абу‑Даби (ОАЭ): абайи, украшения и lifestyle в духе эмиратских кодов; доставка по ОАЭ и GCC.',
    zh:
      'Bint Saeed：总部位于阿联酋阿布扎比的奢华阿巴亚品牌，珠宝与生活方式单品融入阿联酋设计语言；阿联酋与海合会配送。',
    de:
      'Bint Saeed — Luxus‑Abaya‑Haus in Abu Dhabi (VAE). Abayas, Schmuck und Lifestyle mit emiratischen Designcodes; Versand VAE/GCC.',
    nl:
      'Bint Saeed — luxe abayahuis in Abu Dhabi (VAE). Abaya’s, sieraden en lifestyle met emiratische codes; levering VAE/GCC.',
    pt:
      'Bint Saeed — casa de abayas de luxo em Abu Dhabi (EAU). Abayas, joalharia e lifestyle com códigos emiradenses; envios EAU/Golfo.',
  },
}

export const META_DESCRIPTION = enrichLocMap(META_DESCRIPTION_RAW)
