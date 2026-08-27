import type { RouteMetaKey } from '@/lib/seo/routeMetaKeys'
import type { AppLocale } from '@/lib/i18n/routing'
import {
  clipMetaDescription,
  getHomeDefaultTitle,
  getHomeMetaDescription,
  getHomeOgTitle,
} from '@/lib/i18n/homePageCopy'
import { META_DESCRIPTION } from '@/lib/seo/routePageMetaDescriptions'
import { brandDocumentTitle } from '@/lib/seo/brandDocumentTitle'

export type { RouteMetaKey }

/**
 * Map pathname (locale prefix already stripped by middleware) to a metadata bucket.
 * More specific paths must be matched before general prefixes.
 */
export function classifyRouteMetaKey(pathname: string): RouteMetaKey {
  const p = pathname.split('?')[0].replace(/\/$/, '') || '/'
  if (p === '/' || p === '/home') return 'home'
  if (p.startsWith('/home/gate')) return 'preview_gate'
  if (p.startsWith('/home/blocked')) return 'preview_blocked'
  if (p.startsWith('/faq')) return 'faq'
  if (p === '/shop') return 'shop_index'
  if (p.startsWith('/shop/')) return 'product'
  if (p.startsWith('/about')) return 'about'
  if (p.startsWith('/contact')) return 'contact'
  if (p.startsWith('/heritage/al-talli')) return 'heritage_al_talli'
  if (p.startsWith('/heritage/khous')) return 'heritage_khous'
  if (p.startsWith('/heritage/sadu')) return 'heritage_sadu'
  if (p.startsWith('/heritage')) return 'heritage'
  if (p.startsWith('/accessories/')) return 'accessories_product'
  if (p.startsWith('/strands')) return 'strands'
  /** Legacy URL (301 → `/strands`); keep meta bucket if anything still requests `/charms`. */
  if (p.startsWith('/charms')) return 'strands'
  if (p.startsWith('/accessories')) return 'accessories'
  if (p.startsWith('/checkout/success')) return 'checkout_success'
  if (p.startsWith('/checkout')) return 'checkout'
  if (p.startsWith('/cart')) return 'cart'
  if (p.startsWith('/account')) return 'account'
  if (p.startsWith('/register')) return 'register'
  if (p.startsWith('/privacy-policy')) return 'privacy'
  if (p.startsWith('/terms')) return 'terms'
  if (p.startsWith('/cookie-policy')) return 'cookies'
  if (p.startsWith('/shipment-return-policy')) return 'shipment_return'
  if (p.startsWith('/size-guide')) return 'size_guide'
  if (p.startsWith('/verify-email')) return 'verify_email'
  if (p.startsWith('/the-codes')) return 'the_codes'
  if (p.startsWith('/craftsmanship')) return 'craftsmanship'
  if (p.startsWith('/dressing-for-the-middle-east')) return 'regional_dressing'
  if (p.startsWith('/personalisation')) return 'personalisation'
  if (p.startsWith('/product-care')) return 'product_care'
  if (p.startsWith('/giving-forward')) return 'giving_forward'
  if (p.startsWith('/careers')) return 'careers'
  if (p.startsWith('/gift-cards')) return 'gift_cards'
  if (p.startsWith('/wishlist')) return 'wishlist'
  if (p.startsWith('/login') || p.startsWith('/sign-in') || p.startsWith('/signin')) return 'login'
  if (
    p.startsWith('/tiktok') ||
    p.startsWith('/instagram') ||
    p.startsWith('/facebook') ||
    p.startsWith('/pinterest') ||
    p.startsWith('/snapchat') ||
    p.startsWith('/x')
  ) {
    return 'social_redirect'
  }
  return 'generic'
}

type Loc = Record<AppLocale, string>

/** Page titles: clear, structured; brand name stays “Bint Saeed” (Latin) where shown. */
const TITLE: Record<Exclude<RouteMetaKey, 'home'>, Loc> = {
  faq: {
    en: 'FAQ | Bint Saeed',
    ar: 'الأسئلة الشائعة | Bint Saeed',
    fr: 'FAQ | Bint Saeed',
    it: 'FAQ | Bint Saeed',
    es: 'Preguntas frecuentes | Bint Saeed',
    ru: 'Вопросы и ответы | Bint Saeed',
    zh: '常见问题 | Bint Saeed',
    de: 'FAQ | Bint Saeed',
    nl: 'Veelgestelde vragen | Bint Saeed',
    pt: 'Perguntas frequentes | Bint Saeed',
    id: 'Pertanyaan Umum | Bint Saeed',
    ms: 'Soalan Lazim | Bint Saeed',
  },
  shop_index: {
    en: 'Bint Saeed | Shop',
    ar: 'Bint Saeed | التسوق',
    fr: 'Bint Saeed | Boutique',
    it: 'Bint Saeed | Shop',
    es: 'Bint Saeed | Tienda',
    ru: 'Bint Saeed | Каталог',
    zh: 'Bint Saeed | 选购',
    de: 'Bint Saeed | Shop',
    nl: 'Bint Saeed | Shop',
    pt: 'Bint Saeed | Loja',
    id: 'Bint Saeed | Belanja',
    ms: 'Bint Saeed | Beli-belah',
  },
  about: {
    en: 'Bint Saeed | About',
    ar: 'Bint Saeed | من نحن',
    fr: 'Bint Saeed | À propos',
    it: 'Bint Saeed | Chi siamo',
    es: 'Bint Saeed | Sobre nosotros',
    ru: 'Bint Saeed | О бренде',
    zh: 'Bint Saeed | 关于',
    de: 'Bint Saeed | Über uns',
    nl: 'Bint Saeed | Over ons',
    pt: 'Bint Saeed | Sobre nós',
    id: 'Bint Saeed | Tentang',
    ms: 'Bint Saeed | Tentang',
  },
  contact: {
    en: 'Bint Saeed | Contact',
    ar: 'Bint Saeed | اتصلي بنا',
    fr: 'Bint Saeed | Contact',
    it: 'Bint Saeed | Contatti',
    es: 'Bint Saeed | Contacto',
    ru: 'Bint Saeed | Контакты',
    zh: 'Bint Saeed | 联系我们',
    de: 'Bint Saeed | Kontakt',
    nl: 'Bint Saeed | Contact',
    pt: 'Bint Saeed | Contacto',
    id: 'Bint Saeed | Kontak',
    ms: 'Bint Saeed | Hubungi',
  },
  heritage: {
    en: 'UAE Heritage — Al Talli, Al Khous, Sadu & Battoulah | Bint Saeed',
    ar: 'تراث الإمارات — التلي والخوص والسدو والبرقع | Bint Saeed',
    fr: 'Patrimoine des EAU — Al Talli, Al Khous, Sadu & Battoulah | Bint Saeed',
    it: 'Patrimonio EAU — Al Talli, Al Khous, Sadu e Battoulah | Bint Saeed',
    es: 'Patrimonio EAU — Al Talli, Al Khous, Sadu y Battoulah | Bint Saeed',
    ru: 'Наследие ОАЭ — Al Talli, Al Khous, Sadu и баттула | Bint Saeed',
    zh: '阿联酋传承 — Al Talli、Al Khous、Sadu 与金面罩 | Bint Saeed',
    de: 'Erbe der VAE — Al Talli, Al Khous, Sadu & Battoulah | Bint Saeed',
    nl: 'Erfgoed VAE — Al Talli, Al Khous, Sadu & Battoulah | Bint Saeed',
    pt: 'Património EAU — Al Talli, Al Khous, Sadu e Battoulah | Bint Saeed',
    id: 'Warisan UEA — Al Talli, Al Khous, Sadu & Battoulah | Bint Saeed',
    ms: 'Warisan UAE — Al Talli, Al Khous, Sadu & Battoulah | Bint Saeed',
  },
  heritage_al_talli: {
    en: 'What Is Al Talli? Emirati Heritage & Craft | Bint Saeed',
    ar: 'ما هو التلي؟ تراث وحرفة إماراتية | Bint Saeed',
    fr: 'Qu’est-ce que l’Al Talli ? Patrimoine et artisanat émiratis | Bint Saeed',
    it: 'Cos’è Al Talli? Patrimonio e artigianato emiratino | Bint Saeed',
    es: '¿Qué es Al Talli? Patrimonio y oficio emiratí | Bint Saeed',
    ru: 'Что такое Al Talli? Эмиратское наследие и ремесло | Bint Saeed',
    zh: '什么是 Al Talli？阿联酋传承与工艺 | Bint Saeed',
    de: 'Was ist Al Talli? Emiratisches Erbe & Handwerk | Bint Saeed',
    nl: 'Wat is Al Talli? Emiratisch erfgoed & ambacht | Bint Saeed',
    pt: 'O que é Al Talli? Património e ofício emirati | Bint Saeed',
    id: 'Apa Itu Al Talli? Warisan & Kerajinan Emirati | Bint Saeed',
    ms: 'Apakah Al Talli? Warisan & Kraf Emirati | Bint Saeed',
  },
  heritage_khous: {
    en: 'Al Khous Palm Weaving — Emirati Heritage Craft | Bint Saeed',
    ar: 'الخوص — حرفة تراثية إماراتية | Bint Saeed',
    fr: 'Al Khous — tissage de palme émirati | Bint Saeed',
    it: 'Al Khous — intreccio di palma emiratino | Bint Saeed',
    es: 'Al Khous — tejido de palma emiratí | Bint Saeed',
    ru: 'Al Khous — эмиратское плетение из пальмы | Bint Saeed',
    zh: 'Al Khous 棕榈编织 — 阿联酋传承工艺 | Bint Saeed',
    de: 'Al Khous — emiratisches Palmblattflechten | Bint Saeed',
    nl: 'Al Khous — Emiratisch palmvlechten | Bint Saeed',
    pt: 'Al Khous — entrelaçamento de palma emirati | Bint Saeed',
    id: 'Al Khous — anyaman palem Emirati | Bint Saeed',
    ms: 'Al Khous — anyaman palma Emirati | Bint Saeed',
  },
  heritage_sadu: {
    en: 'Sadu Weaving — UNESCO Emirati Heritage | Bint Saeed',
    ar: 'السدو — تراث إماراتي معترف به من اليونسكو | Bint Saeed',
    fr: 'Sadu — patrimoine émirati UNESCO | Bint Saeed',
    it: 'Sadu — patrimonio emiratino UNESCO | Bint Saeed',
    es: 'Sadu — patrimonio emiratí UNESCO | Bint Saeed',
    ru: 'Sadu — эмиратское наследие ЮНЕСКО | Bint Saeed',
    zh: 'Sadu 编织 — 教科文组织阿联酋传承 | Bint Saeed',
    de: 'Sadu — UNESCO-emiratisches Erbe | Bint Saeed',
    nl: 'Sadu — UNESCO Emiratisch erfgoed | Bint Saeed',
    pt: 'Sadu — património emirati UNESCO | Bint Saeed',
    id: 'Sadu — warisan Emirati UNESCO | Bint Saeed',
    ms: 'Sadu — warisan Emirati UNESCO | Bint Saeed',
  },
  accessories: {
    en: 'Accessories | Bint Saeed',
    ar: 'الإكسسوارات | Bint Saeed',
    fr: 'Accessoires | Bint Saeed',
    it: 'Accessori | Bint Saeed',
    es: 'Accesorios | Bint Saeed',
    ru: 'Аксессуары | Bint Saeed',
    zh: '配饰 | Bint Saeed',
    de: 'Accessoires | Bint Saeed',
    nl: 'Accessoires | Bint Saeed',
    pt: 'Acessórios | Bint Saeed',
    id: 'Aksesori | Bint Saeed',
    ms: 'Aksesori | Bint Saeed',
  },
  accessories_product: {
    en: 'Accessory | Bint Saeed',
    ar: 'قطعة إكسسوار | Bint Saeed',
    fr: 'Accessoire | Bint Saeed',
    it: 'Accessorio | Bint Saeed',
    es: 'Accesorio | Bint Saeed',
    ru: 'Аксессуар | Bint Saeed',
    zh: '配饰单品 | Bint Saeed',
    de: 'Accessoire | Bint Saeed',
    nl: 'Accessoire | Bint Saeed',
    pt: 'Acessório | Bint Saeed',
    id: 'Aksesori | Bint Saeed',
    ms: 'Aksesori | Bint Saeed',
  },
  cart: {
    en: 'Bag | Bint Saeed',
    ar: 'السلة | Bint Saeed',
    fr: 'Panier | Bint Saeed',
    it: 'Carrello | Bint Saeed',
    es: 'Bolsa | Bint Saeed',
    ru: 'Корзина | Bint Saeed',
    zh: '购物袋 | Bint Saeed',
    de: 'Warenkorb | Bint Saeed',
    nl: 'Tas | Bint Saeed',
    pt: 'Sacola | Bint Saeed',
    id: 'Tas | Bint Saeed',
    ms: 'Beg | Bint Saeed',
  },
  checkout: {
    en: 'Review Your Order | Bint Saeed',
    ar: 'مراجعة الطلب | Bint Saeed',
    fr: 'Vérifier votre commande | Bint Saeed',
    it: 'Rivedi il tuo ordine | Bint Saeed',
    es: 'Revisa tu pedido | Bint Saeed',
    ru: 'Проверка заказа | Bint Saeed',
    zh: '确认订单 | Bint Saeed',
    de: 'Bestellung prüfen | Bint Saeed',
    nl: 'Bestelling controleren | Bint Saeed',
    pt: 'Rever o seu pedido | Bint Saeed',
    id: 'Tinjau Pesanan | Bint Saeed',
    ms: 'Semak Pesanan | Bint Saeed',
  },
  checkout_success: {
    en: 'Order confirmed | Bint Saeed',
    ar: 'تأكيد الطلب | Bint Saeed',
    fr: 'Commande confirmée | Bint Saeed',
    it: 'Ordine confermato | Bint Saeed',
    es: 'Pedido confirmado | Bint Saeed',
    ru: 'Заказ подтверждён | Bint Saeed',
    zh: '订单已确认 | Bint Saeed',
    de: 'Bestellung bestätigt | Bint Saeed',
    nl: 'Bestelling bevestigd | Bint Saeed',
    pt: 'Pedido confirmado | Bint Saeed',
    id: 'Pesanan Dikonfirmasi | Bint Saeed',
    ms: 'Pesanan Disahkan | Bint Saeed',
  },
  account: {
    en: 'Account | Bint Saeed',
    ar: 'الحساب | Bint Saeed',
    fr: 'Compte | Bint Saeed',
    it: 'Account | Bint Saeed',
    es: 'Cuenta | Bint Saeed',
    ru: 'Аккаунт | Bint Saeed',
    zh: '账户 | Bint Saeed',
    de: 'Konto | Bint Saeed',
    nl: 'Account | Bint Saeed',
    pt: 'Conta | Bint Saeed',
    id: 'Akun | Bint Saeed',
    ms: 'Akaun | Bint Saeed',
  },
  register: {
    en: 'Register | Bint Saeed',
    ar: 'التسجيل | Bint Saeed',
    fr: 'Inscription | Bint Saeed',
    it: 'Registrazione | Bint Saeed',
    es: 'Registro | Bint Saeed',
    ru: 'Регистрация | Bint Saeed',
    zh: '注册 | Bint Saeed',
    de: 'Registrierung | Bint Saeed',
    nl: 'Registreren | Bint Saeed',
    pt: 'Registo | Bint Saeed',
    id: 'Daftar | Bint Saeed',
    ms: 'Daftar | Bint Saeed',
  },
  privacy: {
    en: 'Privacy policy | Bint Saeed',
    ar: 'سياسة الخصوصية | Bint Saeed',
    fr: 'Politique de confidentialité | Bint Saeed',
    it: 'Privacy policy | Bint Saeed',
    es: 'Privacidad | Bint Saeed',
    ru: 'Конфиденциальность | Bint Saeed',
    zh: '隐私政策 | Bint Saeed',
    de: 'Datenschutz | Bint Saeed',
    nl: 'Privacybeleid | Bint Saeed',
    pt: 'Privacidade | Bint Saeed',
    id: 'Kebijakan Privasi | Bint Saeed',
    ms: 'Dasar Privasi | Bint Saeed',
  },
  terms: {
    en: 'Terms | Bint Saeed',
    ar: 'الشروط | Bint Saeed',
    fr: 'Conditions | Bint Saeed',
    it: 'Termini | Bint Saeed',
    es: 'Términos | Bint Saeed',
    ru: 'Условия | Bint Saeed',
    zh: '条款 | Bint Saeed',
    de: 'AGB | Bint Saeed',
    nl: 'Voorwaarden | Bint Saeed',
    pt: 'Termos | Bint Saeed',
    id: 'Syarat & Ketentuan | Bint Saeed',
    ms: 'Terma & Syarat | Bint Saeed',
  },
  cookies: {
    en: 'Cookie policy | Bint Saeed',
    ar: 'سياسة ملفات تعريف الارتباط | Bint Saeed',
    fr: 'Cookies | Bint Saeed',
    it: 'Cookie | Bint Saeed',
    es: 'Cookies | Bint Saeed',
    ru: 'Файлы cookie | Bint Saeed',
    zh: 'Cookie 政策 | Bint Saeed',
    de: 'Cookie-Richtlinie | Bint Saeed',
    nl: 'Cookies | Bint Saeed',
    pt: 'Cookies | Bint Saeed',
    id: 'Kebijakan Cookie | Bint Saeed',
    ms: 'Dasar Kuki | Bint Saeed',
  },
  shipment_return: {
    en: 'Bint Saeed | Shipping & Returns',
    ar: 'Bint Saeed | الشحن والإرجاع',
    fr: 'Bint Saeed | Livraison et retours',
    it: 'Bint Saeed | Spedizioni e resi',
    es: 'Bint Saeed | Envíos y devoluciones',
    ru: 'Bint Saeed | Доставка и возврат',
    zh: 'Bint Saeed | 配送与退货',
    de: 'Bint Saeed | Versand & Rückgabe',
    nl: 'Bint Saeed | Verzending & retour',
    pt: 'Bint Saeed | Envios e devoluções',
    id: 'Bint Saeed | Pengiriman & Pengembalian',
    ms: 'Bint Saeed | Penghantaran & Pemulangan',
  },
  size_guide: {
    en: 'Size guide | Bint Saeed',
    ar: 'دليل المقاسات | Bint Saeed',
    fr: 'Guide des tailles | Bint Saeed',
    it: 'Guida alle taglie | Bint Saeed',
    es: 'Guía de tallas | Bint Saeed',
    ru: 'Таблица размеров | Bint Saeed',
    zh: '尺码指南 | Bint Saeed',
    de: 'Größentabelle | Bint Saeed',
    nl: 'Maattabel | Bint Saeed',
    pt: 'Guia de tamanhos | Bint Saeed',
    id: 'Panduan Ukuran | Bint Saeed',
    ms: 'Panduan Saiz | Bint Saeed',
  },
  verify_email: {
    en: 'Verify email | Bint Saeed',
    ar: 'تأكيد البريد الإلكتروني | Bint Saeed',
    fr: 'Vérification e-mail | Bint Saeed',
    it: 'Verifica email | Bint Saeed',
    es: 'Verificar correo | Bint Saeed',
    ru: 'Подтверждение e-mail | Bint Saeed',
    zh: '验证邮箱 | Bint Saeed',
    de: 'E-Mail bestätigen | Bint Saeed',
    nl: 'E-mail verifiëren | Bint Saeed',
    pt: 'Verificar e-mail | Bint Saeed',
    id: 'Verifikasi Email | Bint Saeed',
    ms: 'Pengesahan E-mel | Bint Saeed',
  },
  the_codes: {
    en: 'Bint Saeed | The Codes',
    ar: 'Bint Saeed | الرموز',
    fr: 'Bint Saeed | The Codes',
    it: 'Bint Saeed | The Codes',
    es: 'Bint Saeed | The Codes',
    ru: 'Bint Saeed | Коды дома',
    zh: 'Bint Saeed | 设计准则',
    de: 'Bint Saeed | The Codes',
    nl: 'Bint Saeed | The Codes',
    pt: 'Bint Saeed | The Codes',
    id: 'Bint Saeed | Kode Desain',
    ms: 'Bint Saeed | Kod Reka Bentuk',
  },
  craftsmanship: {
    en: 'Craftsmanship | Bint Saeed',
    ar: 'الحرفية | Bint Saeed',
    fr: 'Artisanat | Bint Saeed',
    it: 'Artigianato | Bint Saeed',
    es: 'Artesanía | Bint Saeed',
    ru: 'Мастерство | Bint Saeed',
    zh: '工艺 | Bint Saeed',
    de: 'Handwerk | Bint Saeed',
    nl: 'Vakmanschap | Bint Saeed',
    pt: 'Artesanato | Bint Saeed',
    id: 'Kerajinan | Bint Saeed',
    ms: 'Kraftangan | Bint Saeed',
  },
  regional_dressing: {
    en: 'Dressing for the Middle East | Bint Saeed',
    ar: 'اللباس في الشرق الأوسط | Bint Saeed',
    fr: 'S’habiller au Moyen-Orient | Bint Saeed',
    it: 'Come vestirsi in Medio Oriente | Bint Saeed',
    es: 'Cómo vestir en Oriente Medio | Bint Saeed',
    ru: 'Как одеваться на Ближнем Востоке | Bint Saeed',
    zh: '中东着装指引 | Bint Saeed',
    de: 'Anziehen im Nahen Osten | Bint Saeed',
    nl: 'Kleden voor het Midden-Oosten | Bint Saeed',
    pt: 'Como vestir no Médio Oriente | Bint Saeed',
    id: 'Berpakaian di Timur Tengah | Bint Saeed',
    ms: 'Berpakaian di Timur Tengah | Bint Saeed',
  },
  personalisation: {
    en: 'Personalise Your Abaya — Hidden Pocket | Bint Saeed',
    ar: 'التخصيص: الجيب المخفي | Bint Saeed',
    fr: 'Personnalisation — poche cachée | Bint Saeed',
    it: 'Personalizzazione — tasca nascosta | Bint Saeed',
    es: 'Personalización — bolsillo oculto | Bint Saeed',
    ru: 'Персонализация — скрытый карман | Bint Saeed',
    zh: '个性化定制 — 隐藏口袋 | Bint Saeed',
    de: 'Personalisierung — versteckte Tasche | Bint Saeed',
    nl: 'Personalisatie — verborgen zakje | Bint Saeed',
    pt: 'Personalização — bolso escondido | Bint Saeed',
    id: 'Personalisasi Abaya — Saku Tersembunyi | Bint Saeed',
    ms: 'Personalisasi Abaya — Poket Tersembunyi | Bint Saeed',
  },
  strands: {
    en: 'Abaya Strands — Natural Stone Customisation | Bint Saeed',
    ar: 'سلاسل العباءة — تخصيص بالأحجار الطبيعية | Bint Saeed',
    fr: 'Brins d’abaya — pierres naturelles | Bint Saeed',
    it: 'Strand di pietra per abaya | Bint Saeed',
    es: 'Strands para abaya — piedras naturales | Bint Saeed',
    ru: 'Нити из камня для абайи | Bint Saeed',
    zh: '阿巴亚石串 — 天然宝石定制 | Bint Saeed',
    de: 'Abaya-Strands — Naturstein-Anpassung | Bint Saeed',
    nl: 'Abaya-strands — natuursteen personalisatie | Bint Saeed',
    pt: 'Strands de abaya — pedras naturais | Bint Saeed',
    id: 'Abaya Strands — Kustomisasi Batu Alam | Bint Saeed',
    ms: 'Abaya Strands — Penyesuaian Batu Semula Jadi | Bint Saeed',
  },
  product_care: {
    en: 'Product care | Bint Saeed',
    ar: 'العناية بالمنتج | Bint Saeed',
    fr: 'Entretien | Bint Saeed',
    it: 'Cura del capo | Bint Saeed',
    es: 'Cuidado | Bint Saeed',
    ru: 'Уход за изделием | Bint Saeed',
    zh: '保养说明 | Bint Saeed',
    de: 'Pflege | Bint Saeed',
    nl: 'Verzorging | Bint Saeed',
    pt: 'Cuidados | Bint Saeed',
    id: 'Perawatan Produk | Bint Saeed',
    ms: 'Penjagaan Produk | Bint Saeed',
  },
  giving_forward: {
    en: 'Giving Forward | Bint Saeed',
    ar: 'المبادرة الإنسانية | Bint Saeed',
    fr: 'Giving Forward | Bint Saeed',
    it: 'Giving Forward | Bint Saeed',
    es: 'Giving Forward | Bint Saeed',
    ru: 'Giving Forward | Bint Saeed',
    zh: 'Giving Forward | Bint Saeed',
    de: 'Giving Forward | Bint Saeed',
    nl: 'Giving Forward | Bint Saeed',
    pt: 'Giving Forward | Bint Saeed',
    id: 'Memberi Ke Depan | Bint Saeed',
    ms: 'Memberi Ke Hadapan | Bint Saeed',
  },
  careers: {
    en: 'Careers | Bint Saeed',
    ar: 'الوظائف | Bint Saeed',
    fr: 'Carrières | Bint Saeed',
    it: 'Carriere | Bint Saeed',
    es: 'Empleo | Bint Saeed',
    ru: 'Карьера | Bint Saeed',
    zh: '招聘 | Bint Saeed',
    de: 'Karriere | Bint Saeed',
    nl: 'Vacatures | Bint Saeed',
    pt: 'Carreiras | Bint Saeed',
    id: 'Karier | Bint Saeed',
    ms: 'Kerjaya | Bint Saeed',
  },
  gift_cards: {
    en: 'Gift Cards',
    ar: 'بطاقات الهدايا',
    fr: 'Cartes cadeaux',
    it: 'Carte regalo',
    es: 'Tarjetas regalo',
    ru: 'Подарочные карты',
    zh: '礼品卡',
    de: 'Geschenkkarten',
    nl: 'Cadeaubonnen',
    pt: 'Cartões-presente',
    id: 'Kartu Hadiah',
    ms: 'Kad Hadiah',
  },
  wishlist: {
    en: 'Wishlist',
    ar: 'قائمة الأمنيات',
    fr: 'Liste d’envies',
    it: 'Lista desideri',
    es: 'Lista de deseos',
    ru: 'Избранное',
    zh: '心愿单',
    de: 'Wunschliste',
    nl: 'Verlanglijst',
    pt: 'Lista de desejos',
    id: 'Daftar Keinginan',
    ms: 'Senarai Hajat',
  },
  login: {
    en: 'Sign In',
    ar: 'تسجيل الدخول',
    fr: 'Connexion',
    it: 'Accedi',
    es: 'Iniciar sesión',
    ru: 'Вход',
    zh: '登录',
    de: 'Anmelden',
    nl: 'Inloggen',
    pt: 'Entrar',
    id: 'Masuk',
    ms: 'Log Masuk',
  },
  preview_gate: {
    en: 'Preview access | Bint Saeed',
    ar: 'الدخول للمعاينة | Bint Saeed',
    fr: 'Accès preview | Bint Saeed',
    it: 'Accesso anteprima | Bint Saeed',
    es: 'Acceso preview | Bint Saeed',
    ru: 'Доступ к превью | Bint Saeed',
    zh: '预览访问 | Bint Saeed',
    de: 'Preview-Zugang | Bint Saeed',
    nl: 'Preview-toegang | Bint Saeed',
    pt: 'Acesso antecipado | Bint Saeed',
    id: 'Akses Pratinjau | Bint Saeed',
    ms: 'Akses Pratonton | Bint Saeed',
  },
  preview_blocked: {
    en: 'Access restricted | Bint Saeed',
    ar: 'الدخول مقيد | Bint Saeed',
    fr: 'Accès restreint | Bint Saeed',
    it: 'Accesso limitato | Bint Saeed',
    es: 'Acceso restringido | Bint Saeed',
    ru: 'Доступ ограничен | Bint Saeed',
    zh: '访问受限 | Bint Saeed',
    de: 'Zugriff eingeschränkt | Bint Saeed',
    nl: 'Toegang beperkt | Bint Saeed',
    pt: 'Acesso restrito | Bint Saeed',
    id: 'Akses Dibatasi | Bint Saeed',
    ms: 'Akses Terhad | Bint Saeed',
  },
  social_redirect: {
    en: 'Official channel | Bint Saeed',
    ar: 'قناة رسمية | Bint Saeed',
    fr: 'Canal officiel | Bint Saeed',
    it: 'Canale ufficiale | Bint Saeed',
    es: 'Canal oficial | Bint Saeed',
    ru: 'Официальный канал | Bint Saeed',
    zh: '官方渠道 | Bint Saeed',
    de: 'Offizieller Kanal | Bint Saeed',
    nl: 'Officieel kanaal | Bint Saeed',
    pt: 'Canal oficial | Bint Saeed',
    id: 'Saluran Resmi | Bint Saeed',
    ms: 'Saluran Resmi | Bint Saeed',
  },
  product: {
    en: 'Product | Bint Saeed',
    ar: 'المنتج | Bint Saeed',
    fr: 'Produit | Bint Saeed',
    it: 'Prodotto | Bint Saeed',
    es: 'Producto | Bint Saeed',
    ru: 'Товар | Bint Saeed',
    zh: '商品 | Bint Saeed',
    de: 'Produkt | Bint Saeed',
    nl: 'Product | Bint Saeed',
    pt: 'Produto | Bint Saeed',
    id: 'Produk | Bint Saeed',
    ms: 'Produk | Bint Saeed',
  },
  generic: {
    en: 'Bint Saeed',
    ar: 'Bint Saeed',
    fr: 'Bint Saeed',
    it: 'Bint Saeed',
    es: 'Bint Saeed',
    ru: 'Bint Saeed',
    zh: 'Bint Saeed',
    de: 'Bint Saeed',
    nl: 'Bint Saeed',
    pt: 'Bint Saeed',
    id: 'Bint Saeed',
    ms: 'Bint Saeed',
  },
}

/** Language-specific `<title>`, meta description, and OG title per route (root layout). */
export function getResolvedRoutePageMeta(locale: AppLocale, pathname: string): {
  title: string
  description: string
  ogTitle: string
} {
  const key = classifyRouteMetaKey(pathname)
  if (key === 'home') {
    return {
      title: brandDocumentTitle(getHomeDefaultTitle(locale)),
      description: getHomeMetaDescription(locale),
      ogTitle: brandDocumentTitle(getHomeOgTitle(locale)),
    }
  }

  const titleRow = TITLE[key]
  const descRow = META_DESCRIPTION[key]
  const title = brandDocumentTitle(titleRow[locale])
  const ogTitle = title

  return {
    title,
    description: clipMetaDescription(descRow[locale]),
    ogTitle,
  }
}
