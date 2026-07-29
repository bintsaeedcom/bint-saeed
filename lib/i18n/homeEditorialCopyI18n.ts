import type { Language } from '@/lib/i18n/translations'
import { shopSignatureStrandsCta } from '@/lib/i18n/strandsBrandLock'
import { HOME_DE, HOME_FR, HOME_IT, HOME_PT } from '@/lib/i18n/editorialLocales/homeFrItDePt'
import {
  HOME_ES,
  HOME_ID,
  HOME_MS,
  HOME_RU,
  HOME_ZH,
} from '@/lib/i18n/editorialLocales/homeEsRuZhIdMs'

/** Home hero H1 — localized; Latin scripts in uppercase to match English display. */
const HOME_HERO_HEADLINE: Record<Language, string> = {
  en: 'FOR WOMEN WITH EVOLVING LIFESTYLES',
  ar: 'للنساء ذوات أنماط حياة متطوّرة',
  fr: 'POUR LES FEMMES AUX MODES DE VIE EN ÉVOLUTION',
  it: 'PER LE DONNE CON STILI DI VITA IN EVOLUZIONE',
  es: 'PARA MUJERES CON ESTILOS DE VIDA EN EVOLUCIÓN',
  ru: 'ДЛЯ ЖЕНЩИН С МЕНЯЮЩИМСЯ ОБРАЗОМ ЖИЗНИ',
  zh: '为生活方式不断演进的女性',
  de: 'FÜR FRAUEN MIT SICH WANDELNDEN LEBENSSTILEN',
  nl: 'VOOR VROUWEN WIER LEVEN BLIJFT BEWEGEN',
  pt: 'PARA MULHERES COM ESTILOS DE VIDA EM EVOLUÇÃO',
  id: 'UNTUK WANITA DENGAN GAYA HIDUP YANG TERUS BERKEMBANG',
  ms: 'UNTUK WANITA DENGAN GAYA HIDUP YANG SENTIASA BERKEMBANG',
}

/** Strands split-panel — localized copy. */
const HOME_STRANDS_EYEBROW: Record<Language, string> = {
  en: 'GARMENT JEWELLERY',
  ar: 'مجوهرات الملابس',
  fr: 'BIJOUX POUR VÊTEMENTS',
  it: 'GIOIELLI PER CAPI',
  es: 'JOYERÍA PARA PRENDAS',
  ru: 'УКРАШЕНИЯ ДЛЯ ОДЕЖДЫ',
  zh: '服装珠宝',
  de: 'KLEIDUNGS-SCHMUCK',
  nl: 'SIERADEN VOOR HET KLEDINGSTUK',
  pt: 'JOIAS PARA VESTUÁRIO',
  id: 'PERHIASAN PAKAIAN',
  ms: 'BARANG KEMAS PAKAIAN',
}

/** Keep Latin Signature Strands as the product-line name in every locale. */
const HOME_STRANDS_HEADING: Record<Language, string> = {
  en: 'A MODULAR JEWELLERY CONCEPT FOR CLOTHING',
  ar: 'مفهوم مجوهرات معياري للملابس',
  fr: 'UN CONCEPT DE BIJOUX MODULAIRE POUR LE VÊTEMENT',
  it: 'UN CONCETTO DI GIOIELLERIA MODULARE PER L’ABBIGLIAMENTO',
  es: 'UN CONCEPTO DE JOYERÍA MODULAR PARA LA ROPA',
  ru: 'МОДУЛЬНАЯ ЮВЕЛИРНАЯ КОНЦЕПЦИЯ ДЛЯ ОДЕЖДЫ',
  zh: '专为服饰而生的模块化珠宝概念',
  de: 'EIN MODULARES SCHMUCKKONZEPT FÜR KLEIDUNG',
  nl: 'EEN MODULAIR SIERADENCONCEPT VOOR KLEDING',
  pt: 'UM CONCEITO DE JOALHARIA MODULAR PARA O VESTUÁRIO',
  id: 'KONSEP PERHIASAN MODULAR UNTUK PAKAIAN',
  ms: 'KONSEP BARANG KEMAS MODULAR UNTUK PAKAIAN',
}

const HOME_STRANDS_BODY: Record<Language, string> = {
  en:
    'Bint Saeed introduces Signature Strands, a modular jewellery concept designed specifically for clothing. The natural stone strands attach to the cuffs of selected garments and can be exchanged to complement different occasions or personal styles, allowing a single garment to evolve over time.',
  ar:
    'تقدّم Bint Saeed Signature Strands، مفهوم مجوهرات معياري صُمّم خصيصاً للملابس. تُثبَّت خيوط الأحجار الطبيعية على أساور قطع مختارة، ويمكن تبديلها لتتواءم مع المناسبات المختلفة أو الأساليب الشخصية، فتبقى القطعة واحدة وتتطوّر مع الزمن.',
  fr:
    'Bint Saeed présente Signature Strands, un concept de bijoux modulaires conçu spécifiquement pour le vêtement. Les fils de pierres naturelles se fixent aux poignets de pièces sélectionnées et peuvent s’échanger pour accompagner différentes occasions ou styles personnels, permettant à un même vêtement d’évoluer dans le temps.',
  it:
    'Bint Saeed presenta Signature Strands, un concetto di gioielleria modulare pensato specificamente per l’abbigliamento. I fili di pietre naturali si fissano ai polsini di capi selezionati e possono essere scambiati per accompagnare diverse occasioni o stili personali, permettendo a un medesimo capo di evolvere nel tempo.',
  es:
    'Bint Saeed presenta Signature Strands, un concepto de joyería modular diseñado específicamente para la ropa. Los hilos de piedras naturales se fijan a los puños de prendas seleccionadas y pueden intercambiarse para acompañar distintas ocasiones o estilos personales, permitiendo que una misma prenda evolucione con el tiempo.',
  ru:
    'Bint Saeed представляет Signature Strands — модульную ювелирную концепцию, созданную специально для одежды. Нити из натурального камня крепятся к манжетам избранных изделий и могут меняться в соответствии с разными поводами или личным стилем, позволяя одной вещи развиваться со временем.',
  zh:
    'Bint Saeed 推出 Signature Strands：专为服饰设计的模块化珠宝概念。天然石串饰附着于精选服饰的袖口，并可随场合与个人风格更换，使同一件服饰随时间而演变。',
  de:
    'Bint Saeed stellt Signature Strands vor — ein modulares Schmuckkonzept, eigens für Kleidung entworfen. Die Naturstein-Stränge werden an den Manschetten ausgewählter Stücke befestigt und lassen sich austauschen, um verschiedene Anlässe oder persönliche Stile zu begleiten — so kann ein einzelnes Kleidungsstück über die Zeit hinweg weiterwachsen.',
  nl:
    'Bint Saeed introduceert Signature Strands, een modulair sieradenconcept specifiek ontworpen voor kleding. De strengen van natuursteen bevestigen zich aan de manchetten van geselecteerde stukken en kunnen worden verwisseld om verschillende gelegenheden of persoonlijke stijlen te complementeren, zodat één kledingstuk in de loop van de tijd kan evolueren.',
  pt:
    'A Bint Saeed apresenta Signature Strands, um conceito de joalharia modular concebido especificamente para o vestuário. Os fios de pedras naturais fixam-se aos punhos de peças selecionadas e podem ser trocados para acompanhar diferentes ocasiões ou estilos pessoais, permitindo que uma mesma peça evolua ao longo do tempo.',
  id:
    'Bint Saeed memperkenalkan Signature Strands, konsep perhiasan modular yang dirancang khusus untuk pakaian. Rantai batu alam dipasang pada manset pakaian terpilih dan dapat diganti untuk menyesuaikan berbagai kesempatan atau gaya pribadi, sehingga satu pakaian dapat berkembang seiring waktu.',
  ms:
    'Bint Saeed memperkenalkan Signature Strands, konsep barang kemas modular yang direka khusus untuk pakaian. Rantai batu semula jadi dipasang pada manset pakaian terpilih dan boleh ditukar untuk melengkapi majlis atau gaya peribadi yang berbeza, membolehkan satu pakaian berkembang dari masa ke masa.',
}

/** Built from brand lock — "Signature Strands" is never localized. */
function homeStrandsShopCta(lang: Language): string {
  return shopSignatureStrandsCta(lang, 'upper')
}

const HOME_SHOP_NOW_CTA: Record<Language, string> = {
  en: 'Shop Now',
  ar: 'تسوّقي الآن',
  fr: 'Acheter',
  it: 'Acquista',
  es: 'Comprar',
  ru: 'В магазин',
  zh: '立即选购',
  de: 'Jetzt shoppen',
  nl: 'Shop nu',
  pt: 'Comprar',
  id: 'Belanja sekarang',
  ms: 'Beli sekarang',
}

const HOME_PERSONALISATION_EYEBROW: Record<Language, string> = {
  en: 'PERSONALISED ABAYAS',
  ar: 'عباءات مخصّصة',
  fr: 'ABAYAS PERSONNALISÉES',
  it: 'ABAYA PERSONALIZZATE',
  es: 'ABAYAS PERSONALIZADAS',
  ru: 'ПЕРСОНАЛИЗИРОВАННЫЕ АБАЙИ',
  zh: '个性化阿巴亚',
  de: 'PERSONALISIERTE ABAYAS',
  nl: 'GEPERSONALISEERDE ABAYA’S',
  pt: 'ABAYAS PERSONALIZADAS',
  id: 'ABAYA DIPERSONALISASI',
  ms: 'ABAYA DIPERIBADIKAN',
}

const HOME_PERSONALISATION_HEADING: Record<Language, string> = {
  en: 'PERSONALISATION',
  ar: 'التخصيص',
  fr: 'PERSONNALISATION',
  it: 'PERSONALIZZAZIONE',
  es: 'PERSONALIZACIÓN',
  ru: 'ПЕРСОНАЛИЗАЦИЯ',
  zh: '个性化',
  de: 'PERSONALISIERUNG',
  nl: 'PERSONALISATIE',
  pt: 'PERSONALIZAÇÃO',
  id: 'PERSONALISASI',
  ms: 'PERSONALISASI',
}

const HOME_PERSONALISATION_BODY: Record<Language, string> = {
  en:
    'Available exclusively on Bint Saeed abayas, our hidden inner label can be personalised with a name, meaningful date or private message. A detail known only to you, yet carried close with you every time you wear it.',
  ar:
    'حصرياً على عباءات Bint Saeed، يمكن تخصيص بطاقتنا الداخلية الخفية باسم أو تاريخ ذي معنى أو رسالة خاصة. تفصيل يعرفه أنت وحدك، يبقى قريباً منك في كل مرة ترتدين فيها قطعتك.',
  fr:
    'Exclusivement sur les abayas Bint Saeed, notre étiquette intérieure dissimulée peut être personnalisée avec un prénom, une date symbolique ou un message privé. Un détail connu de vous seule, porté tout près de vous à chaque fois que vous la portez.',
  it:
    'Disponibile in esclusiva sulle abaya Bint Saeed, la nostra etichetta interna nascosta può essere personalizzata con un nome, una data significativa o un messaggio privato. Un dettaglio noto solo a voi, da portare vicino ogni volta che lo indossate.',
  es:
    'Disponible exclusivamente en las abayas Bint Saeed, nuestra etiqueta interior oculta puede personalizarse con un nombre, una fecha significativa o un mensaje privado. Un detalle que solo usted conoce, llevado cerca cada vez que la viste.',
  ru:
    'Эксклюзивно для абай Bint Saeed: скрытая внутренняя бирка может быть персонализирована именем, значимой датой или личным посланием. Деталь, известная только вам, — рядом с вами каждый раз, когда вы её надеваете.',
  zh:
    '仅在 Bint Saeed 阿巴亚上提供：隐藏内标可定制姓名、意义非凡的日期或私密留言。只属于您的细节，每次穿着都贴身相伴。',
  de:
    'Exklusiv bei Bint Saeed Abayas kann unser verstecktes Innenetikett mit einem Namen, einem bedeutungsvollen Datum oder einer privaten Botschaft personalisiert werden. Ein Detail, das nur Sie kennen — und das Sie bei jedem Tragen nah bei sich tragen.',
  nl:
    'Uitsluitend op Bint Saeed abaya’s: ons verborgen binnenlabel kan worden gepersonaliseerd met een naam, een betekenisvolle datum of een privébericht. Een detail dat alleen u kent — dichtbij, telkens wanneer u het draagt.',
  pt:
    'Disponível exclusivamente nas abayas Bint Saeed, a nossa etiqueta interior oculta pode ser personalizada com um nome, uma data significativa ou uma mensagem privada. Um detalhe conhecido apenas por si, levado perto de si sempre que o usa.',
  id:
    'Tersedia secara eksklusif pada abaya Bint Saeed, label dalam tersembunyi kami dapat dipersonalisasi dengan nama, tanggal bermakna, atau pesan pribadi. Detail yang hanya Anda ketahui, dibawa dekat setiap kali Anda memakainya.',
  ms:
    'Tersedia secara eksklusif pada abaya Bint Saeed, label dalaman tersembunyi kami boleh diperibadikan dengan nama, tarikh bermakna atau mesej peribadi. Perincian yang hanya anda ketahui, dibawa rapat setiap kali anda memakainya.',
}

const HOME_PERSONALISATION_CTA: Record<Language, string> = {
  en: 'Discover Options',
  ar: 'اكتشفي الخيارات',
  fr: 'Découvrir les options',
  it: 'Scopri le opzioni',
  es: 'Descubrir opciones',
  ru: 'Узнать варианты',
  zh: '探索选项',
  de: 'Optionen entdecken',
  nl: 'Ontdek opties',
  pt: 'Descobrir opções',
  id: 'Jelajahi pilihan',
  ms: 'Terokai pilihan',
}

export type HomePillar = {
  title: string
  copy: string
}

export type HomeStrandSwatch = {
  name: string
  hex: string
}

export type HomeStoryCode = {
  title: string
  subtitle: string
  /** Base image alt (without brand-geo suffix); pass through withBrandAlt(locale). */
  imageAlt: string
}

export type HomeMediaAlts = {
  strandsCollection: string
  /** Four home strands carousel slides — base alts; pass through withBrandAlt(locale). */
  strandsCarouselAlts: readonly [string, string, string, string]
  personalisationLabel: string
  campaignGazelles: string
  heroMobile: string
  heroDesktop: string
  manifestoPortrait: string
  categoryPreview: (label: string) => string
}

export type HomeEditorialCopy = {
  heroHeadline: string
  heroSubline: string
  heroBrandStoryCta: string
  manifestoLead: string
  manifestoQuote: string
  manifestoSnippets: string[]
  manifestoImageEyebrow: string
  manifestoLabel: string
  manifestoReadStory: string
  chapterLabel: string
  collectionHeading: string
  pillars: HomePillar[]
  strandSwatches: HomeStrandSwatch[]
  abayaStrandsEyebrow: string
  abayaStrandsHeading: string
  abayaStrandsBody: string
  shopStrandsCta: string
  carriedCloseEyebrow: string
  personalisationHeading: string
  personalisationBody: string
  personalisationCta: string
  shopCta: string
  shopNowCta: string
  returnToShopCta: string
  categoryFocus: string
  categoryNewIn: string
  categoryHiddenPocketGift: string
  pricePrefix: string
  houseCodesEyebrow: string
  houseCodesHeading: string
  discoverCodesCta: string
  storyCodes: HomeStoryCode[]
  mediaAlts: HomeMediaAlts
  createdForYouEyebrow: string
  createdForYouHeading: string
  createdForYouBody: string
  formatPriceRange: (min: number, max: number) => string
  formatPriceFrom: (min: number) => string
  formatProductPrice: (price: number) => string
}

const HOME_STRANDS_CAROUSEL_ALTS: Record<Language, readonly [string, string, string, string]> = {
  en: [
    'Bint Saeed Signature Strands flatlay — interchangeable natural stone strands with Al Ain Rosette carnelian and gold-tone clasps',
    'Bint Saeed Signature Strand with lapis lazuli beads and Al Ain Rosette carnelian, attached to the cuff of a champagne silk blouse',
    'Bint Saeed Signature Strand with heart-shaped amethyst stones and gold accents, attached to the cuff of a champagne silk blouse',
    'Bint Saeed Signature Strand with onyx beads and gold-tone clasp, attached to the cuff of a champagne silk blouse',
  ],
  ar: [
    'عرض Signature Strands من Bint Saeed — خيوط أحجار طبيعية قابلة للتبديل مع روزيت العين من العقيق ومشابك بلون الذهب',
    'Signature Strand من Bint Saeed بخرز لازورد وروزيت العين من العقيق، مثبّت على أسورة بلوزة حريرية بلون الشامبانيا',
    'Signature Strand من Bint Saeed بأحجار أميثيست على شكل قلب وتفاصيل ذهبية، مثبّت على أسورة بلوزة حريرية بلون الشامبانيا',
    'Signature Strand من Bint Saeed بخرز عقيق يماني ومشبك بلون الذهب، مثبّت على أسورة بلوزة حريرية بلون الشامبانيا',
  ],
  fr: [
    'Composition Signature Strands Bint Saeed — fils de pierres naturelles interchangeables avec Rosette d’Al Ain en cornaline et fermoirs dorés',
    'Signature Strand Bint Saeed en perles de lapis-lazuli et Rosette d’Al Ain en cornaline, fixé au poignet d’un chemisier de soie champagne',
    'Signature Strand Bint Saeed en améthystes en forme de cœur et accents dorés, fixé au poignet d’un chemisier de soie champagne',
    'Signature Strand Bint Saeed en perles d’onyx et fermoir doré, fixé au poignet d’un chemisier de soie champagne',
  ],
  it: [
    'Flatlay Signature Strands Bint Saeed — fili di pietre naturali intercambiabili con Rosette d’Al Ain in corniola e chiusure dorate',
    'Signature Strand Bint Saeed con perle di lapislazzuli e Rosette d’Al Ain in corniola, fissato al polsino di una blusa in seta champagne',
    'Signature Strand Bint Saeed con ametiste a cuore e dettagli dorati, fissato al polsino di una blusa in seta champagne',
    'Signature Strand Bint Saeed con perle di onice e chiusura dorata, fissato al polsino di una blusa in seta champagne',
  ],
  es: [
    'Composición Signature Strands Bint Saeed — hilos intercambiables de piedras naturales con Rosette d’Al Ain en cornalina y cierres dorados',
    'Signature Strand Bint Saeed con cuentas de lapislázuli y Rosette d’Al Ain en cornalina, sujeto al puño de una blusa de seda champán',
    'Signature Strand Bint Saeed con amatistas en forma de corazón y acentos dorados, sujeto al puño de una blusa de seda champán',
    'Signature Strand Bint Saeed con cuentas de ónix y cierre dorado, sujeto al puño de una blusa de seda champán',
  ],
  de: [
    'Signature Strands Bint Saeed Flatlay — austauschbare Naturstein-Stränge mit Al Ain Rosette aus Karneol und goldfarbenen Verschlüssen',
    'Signature Strand Bint Saeed mit Lapislazuli-Perlen und Al Ain Rosette aus Karneol, am Manschettenabschluss einer Champagner-Seidenbluse',
    'Signature Strand Bint Saeed mit herzförmigem Amethyst und goldfarbenen Akzenten, am Manschettenabschluss einer Champagner-Seidenbluse',
    'Signature Strand Bint Saeed mit Onyx-Perlen und goldfarbenem Verschluss, am Manschettenabschluss einer Champagner-Seidenbluse',
  ],
  nl: [
    'Signature Strands Bint Saeed flatlay — verwisselbare natuursteenstrengen met Al Ain Rosette van carneool en goudkleurige sluitingen',
    'Signature Strand Bint Saeed met lapis lazuli-kralen en Al Ain Rosette van carneool, bevestigd aan de manchet van een champagne zijden blouse',
    'Signature Strand Bint Saeed met hartvormige amethist en gouden accenten, bevestigd aan de manchet van een champagne zijden blouse',
    'Signature Strand Bint Saeed met onyxkralen en goudkleurige sluiting, bevestigd aan de manchet van een champagne zijden blouse',
  ],
  pt: [
    'Composição Signature Strands Bint Saeed — fios intercambiáveis de pedras naturais com Rosette d’Al Ain em cornalina e fechos dourados',
    'Signature Strand Bint Saeed com contas de lápis-lazúli e Rosette d’Al Ain em cornalina, preso ao punho de uma blusa de seda champagne',
    'Signature Strand Bint Saeed com ametistas em forma de coração e detalhes dourados, preso ao punho de uma blusa de seda champagne',
    'Signature Strand Bint Saeed com contas de ónix e fecho dourado, preso ao punho de uma blusa de seda champagne',
  ],
  ru: [
    'Композиция Signature Strands Bint Saeed — сменные нити из натурального камня с розеткой Al Ain из сердолика и золотистыми застёжками',
    'Signature Strand Bint Saeed с бусинами лазурита и розеткой Al Ain из сердолика на манжете шёлковой блузы цвета шампань',
    'Signature Strand Bint Saeed с аметистами в форме сердца и золотистыми акцентами на манжете шёлковой блузы цвета шампань',
    'Signature Strand Bint Saeed с бусинами оникса и золотистой застёжкой на манжете шёлковой блузы цвета шампань',
  ],
  zh: [
    'Bint Saeed Signature Strands 平铺展示——可更换天然石串饰，配以 Al Ain Rosette 红玉髓与金色扣件',
    'Bint Saeed Signature Strand：青金石串珠与 Al Ain Rosette 红玉髓，附着于香槟丝绸衬衫袖口',
    'Bint Saeed Signature Strand：心形紫水晶与金色细节，附着于香槟丝绸衬衫袖口',
    'Bint Saeed Signature Strand：黑玛瑙串珠与金色扣件，附着于香槟丝绸衬衫袖口',
  ],
  id: [
    'Flatlay Signature Strands Bint Saeed — rantai batu alam yang dapat diganti dengan Al Ain Rosette karnelian dan kait berwarna emas',
    'Signature Strand Bint Saeed dengan manik lapis lazuli dan Al Ain Rosette karnelian, terpasang pada manset blus sutra champagne',
    'Signature Strand Bint Saeed dengan amethyst berbentuk hati dan aksen emas, terpasang pada manset blus sutra champagne',
    'Signature Strand Bint Saeed dengan manik onyx dan kait berwarna emas, terpasang pada manset blus sutra champagne',
  ],
  ms: [
    'Flatlay Signature Strands Bint Saeed — rantai batu semula jadi boleh ditukar dengan Al Ain Rosette karnelian dan pengunci berwarna emas',
    'Signature Strand Bint Saeed dengan manik lapis lazuli dan Al Ain Rosette karnelian, dipasang pada manset blaus sutera champagne',
    'Signature Strand Bint Saeed dengan amethyst berbentuk hati dan aksen emas, dipasang pada manset blaus sutera champagne',
    'Signature Strand Bint Saeed dengan manik onyx dan pengunci berwarna emas, dipasang pada manset blaus sutera champagne',
  ],
}

const STRAND_SWATCHES_HEX = [
  { hex: '#1a0210' },
  { hex: '#8b5a2b' },
  { hex: '#f4b8c5' },
  { hex: '#1f7a5e' },
] as const

const STORY_CODES_TITLES = [
  'The Monogram',
  'Al Khous',
  'Knotted Lines',
  'Al Ain Rosette',
  'Al Talli',
  'The Strands',
] as const

const HOME_EN: HomeEditorialCopy = {
  heroHeadline: HOME_HERO_HEADLINE.en,
  heroSubline: 'Carrying Heritage Forward.',
  heroBrandStoryCta: 'Brand Story',
  manifestoLead: 'Bint Saeed',
  manifestoQuote: 'A sense of self that does not shift with setting.',
  manifestoSnippets: [
    'Wherever life is lived, from Abu Dhabi to London, from Riyadh to Paris, from Doha to Marbella, you do not need to change how you present yourself. Each piece carries your elegance, your way of being, with consistency, wherever you are.',
    'Bint Saeed exists at the intersection of heritage and a contemporary life, carried across borders and recognised by its consistency.',
  ],
  manifestoImageEyebrow: 'From Abu Dhabi to the world',
  manifestoLabel: 'MANIFESTO',
  manifestoReadStory: 'Read our story',
  chapterLabel: 'CHAPTER I',
  collectionHeading: 'THE COLLECTION',
  pillars: [
    {
      title: 'Crafted in Abu Dhabi',
      copy: 'Each piece is finished in small runs, with a focus on cut, drape, and longevity.',
    },
    {
      title: 'Natural Stone Signatures',
      copy: 'Strands and details are selected for story, symbolism, and timeless wearability.',
    },
    {
      title: 'Personalisation Included',
      copy: 'A hidden pocket note can be added for gifting, milestones, and private meaning.',
    },
  ],
  strandSwatches: [
    { name: 'Onyx', hex: STRAND_SWATCHES_HEX[0].hex },
    { name: 'Tiger Eye', hex: STRAND_SWATCHES_HEX[1].hex },
    { name: 'Rose Quartz', hex: STRAND_SWATCHES_HEX[2].hex },
    { name: 'Malachite', hex: STRAND_SWATCHES_HEX[3].hex },
  ],
  abayaStrandsEyebrow: HOME_STRANDS_EYEBROW.en,
  abayaStrandsHeading: HOME_STRANDS_HEADING.en,
  abayaStrandsBody: HOME_STRANDS_BODY.en,
  shopStrandsCta: homeStrandsShopCta('en'),
  carriedCloseEyebrow: HOME_PERSONALISATION_EYEBROW.en,
  personalisationHeading: HOME_PERSONALISATION_HEADING.en,
  personalisationBody: HOME_PERSONALISATION_BODY.en,
  personalisationCta: HOME_PERSONALISATION_CTA.en,
  shopCta: 'SHOP',
  shopNowCta: 'SHOP NOW',
  returnToShopCta: 'Return to Shop',
  categoryFocus: 'Category Focus',
  categoryNewIn: 'New in',
  categoryHiddenPocketGift: 'Hidden pocket gift',
  pricePrefix: 'DHS.',
  houseCodesEyebrow: 'House Codes',
  houseCodesHeading: 'THE HOUSE CODES',
  discoverCodesCta: 'Discover the Codes',
  storyCodes: [
    {
      title: STORY_CODES_TITLES[0],
      subtitle: 'Signature mark',
      imageAlt: 'Bint Saeed luxury house monogram — house code',
    },
    {
      title: STORY_CODES_TITLES[1],
      subtitle: 'Palm craftsmanship',
      imageAlt: 'Al Khous palm-frond weaving Emirati heritage — house code',
    },
    {
      title: STORY_CODES_TITLES[2],
      subtitle: 'Line & continuity',
      imageAlt: 'Knotted Lines of Lineage gold motif — house code',
    },
    {
      title: STORY_CODES_TITLES[3],
      subtitle: 'Regional motif',
      imageAlt: 'Al Ain Rosette carnelian stone motif — house code',
    },
    {
      title: STORY_CODES_TITLES[4],
      subtitle: 'Gold threadwork',
      imageAlt: 'Traditional Al Talli Emirati heritage embroidery — house code',
    },
    {
      title: STORY_CODES_TITLES[5],
      subtitle: 'Beaded lines',
      imageAlt: 'Natural stone abaya strands — Emirati heritage house code',
    },
  ],
  mediaAlts: {
    strandsCollection: 'Bint Saeed strand collection',
    strandsCarouselAlts: HOME_STRANDS_CAROUSEL_ALTS.en,
    personalisationLabel: 'Bint Saeed personalised hidden inner label',
    campaignGazelles: 'Bint Saeed campaign panorama — Abu Dhabi gazelles',
    heroMobile: 'Bint Saeed luxury abayas in burgundy and black, editorial group photograph',
    heroDesktop: 'Bint Saeed luxury abayas, editorial photograph',
    manifestoPortrait: 'Bint Saeed — from Abu Dhabi to the world',
    categoryPreview: (label) => `${label} preview`,
  },
  createdForYouEyebrow: 'Carried Close',
  createdForYouHeading: 'PERSONALISATION',
  createdForYouBody:
    'Every piece includes a hidden pocket, personalised with a name, date, or private message. Perfect for Eid, weddings, and milestones.',
  formatPriceRange: (min, max) => `DHS ${min.toLocaleString()}-${max.toLocaleString()}`,
  formatPriceFrom: (min) => `DHS ${min.toLocaleString()}+`,
  formatProductPrice: (price) => `DHS. ${price.toLocaleString()}`,
}

const HOME_AR: HomeEditorialCopy = {
  heroHeadline: HOME_HERO_HEADLINE.ar,
  heroSubline: 'حمل الإرث إلى الأمام.',
  heroBrandStoryCta: 'قصة العلامة',
  manifestoLead: 'Bint Saeed',
  manifestoQuote: 'إحساس بالذات لا يتبدّل مع المكان.',
  manifestoSnippets: [
    'أينما تُعاش الحياة، من أبوظبي إلى لندن، من الرياض إلى باريس، من الدوحة إلى ماربيا، لا حاجة لتغيير طريقة تقديم نفسك. كل قطعة تحمل أناقتك وأسلوب وجودك باتساق، أينما كنت.',
    'توجد Bint Saeed عند تقاطع الإرث والحياة المعاصرة، تُحمل عبر الحدود وتُعرف باتساقها.',
  ],
  manifestoImageEyebrow: 'من أبوظبي إلى العالم',
  manifestoLabel: 'البيان',
  manifestoReadStory: 'اقرأي قصتنا',
  chapterLabel: 'الفصل الأول',
  collectionHeading: 'المجموعة',
  pillars: [
    {
      title: 'صُنعت في أبوظبي',
      copy: 'تُنجز كل قطعة بكميات محدودة، مع تركيز على القصّ والانسيابية والمتانة.',
    },
    {
      title: 'توقيعات من الأحجار الطبيعية',
      copy: 'تُختار الخيوط والتفاصيل لقصتها ورمزيتها وقابليتها للارتداء عبر الزمن.',
    },
    {
      title: 'التخصيص مشمول',
      copy: 'يمكن إضافة ملاحظة في الجيب الخفي للإهداء والمناسبات والمعنى الخاص.',
    },
  ],
  strandSwatches: [
    { name: 'عقيق يماني', hex: STRAND_SWATCHES_HEX[0].hex },
    { name: 'عين النمر', hex: STRAND_SWATCHES_HEX[1].hex },
    { name: 'كوارتز وردي', hex: STRAND_SWATCHES_HEX[2].hex },
    { name: 'ملكيت', hex: STRAND_SWATCHES_HEX[3].hex },
  ],
  abayaStrandsEyebrow: HOME_STRANDS_EYEBROW.ar,
  abayaStrandsHeading: HOME_STRANDS_HEADING.ar,
  abayaStrandsBody: HOME_STRANDS_BODY.ar,
  shopStrandsCta: homeStrandsShopCta('ar'),
  carriedCloseEyebrow: HOME_PERSONALISATION_EYEBROW.ar,
  personalisationHeading: HOME_PERSONALISATION_HEADING.ar,
  personalisationBody: HOME_PERSONALISATION_BODY.ar,
  personalisationCta: HOME_PERSONALISATION_CTA.ar,
  shopCta: 'تسوّقي',
  shopNowCta: 'تسوّقي الآن',
  returnToShopCta: 'العودة للمتجر',
  categoryFocus: 'تركيز الفئة',
  categoryNewIn: 'وصل حديثاً',
  categoryHiddenPocketGift: 'هدية الجيب الخفي',
  pricePrefix: 'د.إ',
  houseCodesEyebrow: 'رموز الدار',
  houseCodesHeading: 'رموز الدار',
  discoverCodesCta: 'اكتشفي الرموز',
  storyCodes: [
    {
      title: 'الشعار',
      subtitle: 'العلامة المميزة',
      imageAlt: 'شعار دار Bint Saeed الفاخرة — علامة هوية متشابكة ورمز تصميم من أبوظبي',
    },
    {
      title: STORY_CODES_TITLES[1],
      subtitle: 'حرفة النخيل',
      imageAlt: 'نسيج الخوص من سعف النخيل — حرفة تراثية إماراتية ورمز من رموز دار Bint Saeed',
    },
    {
      title: STORY_CODES_TITLES[2],
      subtitle: 'الخط والاستمرارية',
      imageAlt: 'زخرفة Knotted Lines الذهبية على القماش — رمز الاستمرارية في دار Bint Saeed',
    },
    {
      title: STORY_CODES_TITLES[3],
      subtitle: 'زخرفة إقليمية',
      imageAlt: 'زخرفة Al Ain Rosette من العقيق — رمز تراثي إماراتي من أبوظبي',
    },
    {
      title: STORY_CODES_TITLES[4],
      subtitle: 'تطريز بالخيوط الذهبية',
      imageAlt: 'تطريز تراثي إماراتي Al Talli بخيوط ذهبية — رمز من رموز دار Bint Saeed',
    },
    {
      title: STORY_CODES_TITLES[5],
      subtitle: 'خطوط مُرصّعة',
      imageAlt: 'خيوط عباءة من أحجار طبيعية — رمز دار قابل للارتداء من الخيط والتوازن، Bint Saeed أبوظبي',
    },
  ],
  mediaAlts: {
    strandsCollection: 'مجموعة خيوط Bint Saeed',
    strandsCarouselAlts: HOME_STRANDS_CAROUSEL_ALTS.ar,
    personalisationLabel: 'ملصق داخلي مخفي ومخصّص من Bint Saeed',
    campaignGazelles: 'بانوراما حملة Bint Saeed — غزلان أبوظبي',
    heroMobile: 'عباءات Bint Saeed الفاخرة بالعنابي والأسود، صورة تحريرية جماعية',
    heroDesktop: 'عباءات Bint Saeed الفاخرة، صورة تحريرية',
    manifestoPortrait: 'Bint Saeed — من أبوظبي إلى العالم',
    categoryPreview: (label) => `معاينة ${label}`,
  },
  createdForYouEyebrow: 'تُحمل قريباً',
  createdForYouHeading: 'التخصيص',
  createdForYouBody:
    'تتضمن كل قطعة جيباً خفياً، يُخصَّص باسم أو تاريخ أو رسالة خاصة. مثالية للعيد والأعراس والمناسبات.',
  formatPriceRange: (min, max) => `د.إ ${min.toLocaleString()}-${max.toLocaleString()}`,
  formatPriceFrom: (min) => `د.إ ${min.toLocaleString()}+`,
  formatProductPrice: (price) => `د.إ ${price.toLocaleString()}`,
}

const HOME_NL: HomeEditorialCopy = {
  heroHeadline: HOME_HERO_HEADLINE.nl,
  heroSubline: 'Erfgoed dat verder reikt.',
  heroBrandStoryCta: 'Ons verhaal',
  manifestoLead: 'Bint Saeed',
  manifestoQuote: 'Een gevoel van zelf dat niet verandert met de setting.',
  manifestoSnippets: [
    'Waar het leven ook wordt geleefd — van Abu Dhabi tot Londen, van Riyad tot Parijs, van Doha tot Marbella — hoeft u uw manier van aanwezig zijn niet te wijzigen. Elk stuk draagt uw elegantie, uw houding, met dezelfde rust, waar u ook bent.',
    'Bint Saeed bestaat op het snijvlak van erfgoed en een hedendaags leven — gedragen over grenzen, herkend aan zijn consistentie.',
  ],
  manifestoImageEyebrow: 'Van Abu Dhabi naar de wereld',
  manifestoLabel: 'MANIFEST',
  manifestoReadStory: 'Lees ons verhaal',
  chapterLabel: 'HOOFDSTUK I',
  collectionHeading: 'DE COLLECTIE',
  pillars: [
    {
      title: 'Gemaakt in Abu Dhabi',
      copy: 'Elk stuk wordt in beperkte oplage afgewerkt, met aandacht voor snit, drapering en duurzaamheid.',
    },
    {
      title: 'Natuursteen als handtekening',
      copy: 'Strands en details worden gekozen om hun verhaal, symboliek en tijdloze draagbaarheid.',
    },
    {
      title: 'Personalisatie inbegrepen',
      copy: 'Een verborgen zakbericht kan worden toegevoegd — voor giften, mijlpalen en een privébetekenis.',
    },
  ],
  strandSwatches: [
    { name: 'Onyx', hex: STRAND_SWATCHES_HEX[0].hex },
    { name: 'Tijgeroog', hex: STRAND_SWATCHES_HEX[1].hex },
    { name: 'Rozenkwarts', hex: STRAND_SWATCHES_HEX[2].hex },
    { name: 'Malachiet', hex: STRAND_SWATCHES_HEX[3].hex },
  ],
  abayaStrandsEyebrow: HOME_STRANDS_EYEBROW.nl,
  abayaStrandsHeading: HOME_STRANDS_HEADING.nl,
  abayaStrandsBody: HOME_STRANDS_BODY.nl,
  shopStrandsCta: homeStrandsShopCta('nl'),
  carriedCloseEyebrow: HOME_PERSONALISATION_EYEBROW.nl,
  personalisationHeading: HOME_PERSONALISATION_HEADING.nl,
  personalisationBody: HOME_PERSONALISATION_BODY.nl,
  personalisationCta: HOME_PERSONALISATION_CTA.nl,
  shopCta: 'SHOP',
  shopNowCta: HOME_SHOP_NOW_CTA.nl,
  returnToShopCta: 'Terug naar de shop',
  categoryFocus: 'Categorie in beeld',
  categoryNewIn: 'Nieuw binnen',
  categoryHiddenPocketGift: 'Verborgen zak als geschenk',
  pricePrefix: 'AED',
  houseCodesEyebrow: 'House Codes',
  houseCodesHeading: 'THE HOUSE CODES',
  discoverCodesCta: 'Ontdek The Codes',
  storyCodes: [
    {
      title: STORY_CODES_TITLES[0],
      subtitle: 'Handtekening van het huis',
      imageAlt: 'Bint Saeed luxe huis-monogram — house code',
    },
    {
      title: STORY_CODES_TITLES[1],
      subtitle: 'Palm vakmanschap',
      imageAlt: 'Al Khous palmbladweefsel Emiratisch erfgoed — house code',
    },
    {
      title: STORY_CODES_TITLES[2],
      subtitle: 'Lijn en continuïteit',
      imageAlt: 'Knotted Lines of Lineage gouden motief — house code',
    },
    {
      title: STORY_CODES_TITLES[3],
      subtitle: 'Regionaal motief',
      imageAlt: 'Al Ain Rosette carneool-motief — house code',
    },
    {
      title: STORY_CODES_TITLES[4],
      subtitle: 'Gouddraadwerk',
      imageAlt: 'Traditioneel Al Talli Emiratisch borduurwerk — house code',
    },
    {
      title: STORY_CODES_TITLES[5],
      subtitle: 'Gekralde lijnen',
      imageAlt: 'Natuursteen abaya Strands — Emiratisch erfgoed house code',
    },
  ],
  mediaAlts: {
    strandsCollection: 'Bint Saeed Strands-collectie',
    strandsCarouselAlts: HOME_STRANDS_CAROUSEL_ALTS.nl,
    personalisationLabel: 'Bint Saeed gepersonaliseerd verborgen binnenlabel',
    campaignGazelles: 'Bint Saeed campagnepanorama — gazellen van Abu Dhabi',
    heroMobile: 'Bint Saeed luxe abaya’s in bordeaux en zwart, editoriale groepsfotografie',
    heroDesktop: 'Bint Saeed luxe abaya’s, editoriale fotografie',
    manifestoPortrait: 'Bint Saeed — van Abu Dhabi naar de wereld',
    categoryPreview: (label) => `Voorbeeld ${label}`,
  },
  createdForYouEyebrow: 'Dichtbij gedragen',
  createdForYouHeading: 'PERSONALISATIE',
  createdForYouBody:
    'Elk stuk heeft een verborgen zak, te personaliseren met een naam, datum of privébericht. Passend voor Eid, bruiloften en mijlpalen.',
  formatPriceRange: (min, max) => `AED ${min.toLocaleString('nl-NL')}-${max.toLocaleString('nl-NL')}`,
  formatPriceFrom: (min) => `AED ${min.toLocaleString('nl-NL')}+`,
  formatProductPrice: (price) => `AED ${price.toLocaleString('nl-NL')}`,
}

export function getHomeEditorialCopy(locale: Language | string): HomeEditorialCopy {
  const lang: Language = locale in HOME_HERO_HEADLINE ? (locale as Language) : 'en'
  const base =
    lang === 'ar'
      ? HOME_AR
      : lang === 'nl'
        ? HOME_NL
        : lang === 'fr'
          ? HOME_FR
          : lang === 'it'
            ? HOME_IT
            : lang === 'de'
              ? HOME_DE
              : lang === 'pt'
                ? HOME_PT
                : lang === 'es'
                  ? HOME_ES
                  : lang === 'ru'
                    ? HOME_RU
                    : lang === 'zh'
                      ? HOME_ZH
                      : lang === 'id'
                        ? HOME_ID
                        : lang === 'ms'
                          ? HOME_MS
                          : HOME_EN
  return {
    ...base,
    heroHeadline: HOME_HERO_HEADLINE[lang],
    abayaStrandsEyebrow: HOME_STRANDS_EYEBROW[lang],
    abayaStrandsHeading: HOME_STRANDS_HEADING[lang],
    abayaStrandsBody: HOME_STRANDS_BODY[lang],
    shopStrandsCta: homeStrandsShopCta(lang),
    carriedCloseEyebrow: HOME_PERSONALISATION_EYEBROW[lang],
    personalisationHeading: HOME_PERSONALISATION_HEADING[lang],
    personalisationBody: HOME_PERSONALISATION_BODY[lang],
    personalisationCta: HOME_PERSONALISATION_CTA[lang],
    shopNowCta: HOME_SHOP_NOW_CTA[lang],
    mediaAlts: {
      ...base.mediaAlts,
      strandsCarouselAlts: HOME_STRANDS_CAROUSEL_ALTS[lang],
    },
  }
}
