import type { AppLocale } from '@/lib/i18n/routing'
import type { Product } from '@/data/products'
import { getProductSlug } from '@/lib/products/links'
import { getHeritageCraft } from '@/lib/products/heritageSeo'
import { productIsOneSizeOnly } from '@/lib/shopProductOptions'
import { MODEST_DISCOVERY_KEYWORDS } from '@/lib/brand/brandPositioning'
import { BRAND_NAME, LOCALE_GEO } from '@/lib/i18n/brandProperNouns'
import type { ProductFaqItem } from '@/lib/products/productSchemaMeta'
import { buildLocalisedOptimisedSchemaKeywords } from '@/lib/products/optimisedKeywordsI18n'
import { getLocalizedKaftanFaq } from '@/lib/products/kaftanSchemaI18n'

export const SCHEMA_SUITABLE_FOR: Record<AppLocale, string> = {
  en: 'Weddings, Eid, celebrations, dinners, travel, gatherings and everyday elegance',
  ar: 'الأعراس والعيد والاحتفالات والعشاء والسفر والتجمعات والأناقة اليومية',
  fr: 'Mariages, Aïd, célébrations, dîners, voyages, réunions et élégance au quotidien',
  it: 'Matrimoni, Eid, celebrazioni, cene, viaggi, ritrovi ed eleganza quotidiana',
  es: 'Bodas, Eid, celebraciones, cenas, viajes, reuniones y elegancia cotidiana',
  ru: 'Свадьбы, Ид, праздники, ужины, путешествия, встречи и повседневная элегантность',
  zh: '婚礼、开斋节、庆典、晚宴、旅行、聚会与日常优雅',
  de: 'Hochzeiten, Eid, Feiern, Dinners, Reisen, Zusammenkünfte und alltägliche Eleganz',
  nl: 'Bruiloften, Eid, vieringen, diners, reizen, bijeenkomsten en alledaagse elegantie',
  pt: 'Casamentos, Eid, celebrações, jantares, viagens, encontros e elegância quotidiana',
  id: 'Pernikahan, Id, perayaan, makan malam, perjalanan, pertemuan, dan keanggunan sehari-hari',
  ms: 'Perkahwinan, Aidilfitri, sambutan, majlis malam, perjalanan, pertemuan, dan keanggunan harian',
}

export const SCHEMA_MADE_IN: Record<AppLocale, string> = {
  en: LOCALE_GEO.en.madeIn,
  ar: LOCALE_GEO.ar.madeIn,
  fr: LOCALE_GEO.fr.madeIn,
  it: LOCALE_GEO.it.madeIn,
  es: LOCALE_GEO.es.madeIn,
  ru: LOCALE_GEO.ru.madeIn,
  zh: LOCALE_GEO.zh.madeIn,
  de: LOCALE_GEO.de.madeIn,
  nl: LOCALE_GEO.nl.madeIn,
  pt: LOCALE_GEO.pt.madeIn,
  id: LOCALE_GEO.id.madeIn,
  ms: LOCALE_GEO.ms.madeIn,
}

const PROPERTY_LABELS: Record<string, Record<AppLocale, string>> = {
  'Brand origin': {
    en: 'Brand origin',
    ar: 'أصل العلامة',
    fr: 'Origine de la marque',
    it: 'Origine del brand',
    es: 'Origen de la marca',
    ru: 'Происхождение бренда',
    zh: '品牌起源',
    de: 'Markenherkunft',
    nl: 'Merkherkomst',
    pt: 'Origem da marca',
    id: 'Brand origin',
    ms: 'Asal jenama',
  },
  'Emirati brand': {
    en: 'Emirati brand',
    ar: 'علامة إماراتية',
    fr: 'Marque émiratie',
    it: 'Brand emiratino',
    es: 'Marca emiratí',
    ru: 'Эмиратский бренд',
    zh: '阿联酋品牌',
    de: 'Emiratische Marke',
    nl: 'Emiratisch merk',
    pt: 'Marca emirati',
    id: 'Emirati brand',
    ms: 'Jenama Emirati',
  },
  'Made in': {
    en: 'Made in',
    ar: 'صُنع في',
    fr: 'Fabriqué à',
    it: 'Prodotto a',
    es: 'Hecho en',
    ru: 'Сделано в',
    zh: '产地',
    de: 'Hergestellt in',
    nl: 'Gemaakt in',
    pt: 'Feito em',
    id: 'Dibuat di',
    ms: 'Dihasilkan di',
  },
  'Suitable For': {
    en: 'Suitable For',
    ar: 'مناسب لـ',
    fr: 'Convient pour',
    it: 'Adatto per',
    es: 'Adecuado para',
    ru: 'Подходит для',
    zh: '适用场合',
    de: 'Geeignet für',
    nl: 'Geschikt voor',
    pt: 'Adequado para',
    id: 'Suitable For',
    ms: 'Sesuai untuk',
  },
  Neckline: {
    en: 'Neckline',
    ar: 'خط العنق',
    fr: 'Encolure',
    it: 'Scollatura',
    es: 'Escote',
    ru: 'Вырез',
    zh: '领口',
    de: 'Ausschnitt',
    nl: 'Halslijn',
    pt: 'Decote',
    id: 'Neckline',
    ms: 'Garis leher',
  },
  Fit: {
    en: 'Fit',
    ar: 'القصّة',
    fr: 'Coupe',
    it: 'Vestibilità',
    es: 'Ajuste',
    ru: 'Посадка',
    zh: '版型',
    de: 'Passform',
    nl: 'Pasvorm',
    pt: 'Caimento',
    id: 'Fit',
    ms: 'Potongan',
  },
  'Maximum garment length': {
    en: 'Maximum garment length',
    ar: 'أقصى طول للقطعة',
    fr: 'Longueur maximale du vêtement',
    it: 'Lunghezza massima del capo',
    es: 'Longitud máxima de la prenda',
    ru: 'Максимальная длина изделия',
    zh: '最大衣长',
    de: 'Maximale Kleiderlänge',
    nl: 'Maximale lengte',
    pt: 'Comprimento máximo da peça',
    id: 'Maximum garment length',
    ms: 'Panjang maksimum pakaian',
  },
  Lining: {
    en: 'Lining',
    ar: 'البطانة',
    fr: 'Doublure',
    it: 'Fodera',
    es: 'Forro',
    ru: 'Подкладка',
    zh: '里料',
    de: 'Futter',
    nl: 'Voering',
    pt: 'Forro',
    id: 'Lining',
    ms: 'Lapisan',
  },
  'Inner dress': {
    en: 'Inner dress',
    ar: 'فستان داخلي',
    fr: 'Robe intérieure',
    it: 'Abito interno',
    es: 'Vestido interior',
    ru: 'Внутреннее платье',
    zh: '内衬连衣裙',
    de: 'Innenkleid',
    nl: 'Binnenjurk',
    pt: 'Vestido interior',
    id: 'Inner dress',
    ms: 'Gaun dalam',
  },
  Closure: {
    en: 'Closure',
    ar: 'الإغلاق',
    fr: 'Fermeture',
    it: 'Chiusura',
    es: 'Cierre',
    ru: 'Застёжка',
    zh: '闭合方式',
    de: 'Verschluss',
    nl: 'Sluiting',
    pt: 'Fecho',
    id: 'Closure',
    ms: 'Penutup',
  },
  Pockets: {
    en: 'Pockets',
    ar: 'الجيوب',
    fr: 'Poches',
    it: 'Tasche',
    es: 'Bolsillos',
    ru: 'Карманы',
    zh: '口袋',
    de: 'Taschen',
    nl: 'Zakken',
    pt: 'Bolsos',
    id: 'Pockets',
    ms: 'Poket',
  },
  'Styling detail': {
    en: 'Styling detail',
    ar: 'تفصيل التنسيق',
    fr: 'Détail de style',
    it: 'Dettaglio di styling',
    es: 'Detalle de estilo',
    ru: 'Деталь стиля',
    zh: '造型细节',
    de: 'Styling-Detail',
    nl: 'Stylingdetail',
    pt: 'Detalhe de estilo',
    id: 'Styling detail',
    ms: 'Butiran gaya',
  },
  Care: {
    en: 'Care',
    ar: 'العناية',
    fr: 'Entretien',
    it: 'Cura',
    es: 'Cuidado',
    ru: 'Уход',
    zh: '护理',
    de: 'Pflege',
    nl: 'Onderhoud',
    pt: 'Cuidados',
    id: 'Care',
    ms: 'Penjagaan',
  },
  'Product type': {
    en: 'Product type',
    ar: 'نوع المنتج',
    fr: 'Type de produit',
    it: 'Tipo di prodotto',
    es: 'Tipo de producto',
    ru: 'Тип изделия',
    zh: '产品类型',
    de: 'Produkttyp',
    nl: 'Producttype',
    pt: 'Tipo de produto',
    id: 'Product type',
    ms: 'Jenis produk',
  },
  'Product category': {
    en: 'Product category',
    ar: 'فئة المنتج',
    fr: 'Catégorie de produit',
    it: 'Categoria prodotto',
    es: 'Categoría de producto',
    ru: 'Категория изделия',
    zh: '产品类别',
    de: 'Produktkategorie',
    nl: 'Productcategorie',
    pt: 'Categoria do produto',
    id: 'Product category',
    ms: 'Kategori produk',
  },
  Trim: {
    en: 'Trim',
    ar: 'الزخرفة',
    fr: 'Garniture',
    it: 'Finitura',
    es: 'Adorno',
    ru: 'Отделка',
    zh: '饰边',
    de: 'Besatz',
    nl: 'Afwerking',
    pt: 'Acabamento',
    id: 'Trim',
    ms: 'Hiasan',
  },
  Personalisation: {
    en: 'Personalisation',
    ar: 'التخصيص',
    fr: 'Personnalisation',
    it: 'Personalizzazione',
    es: 'Personalización',
    ru: 'Персонализация',
    zh: '个性化',
    de: 'Personalisierung',
    nl: 'Personalisatie',
    pt: 'Personalização',
    id: 'Personalisation',
    ms: 'Pemperibadian',
  },
  'Model height': {
    en: 'Model height',
    ar: 'طول العارضة',
    fr: 'Taille du mannequin',
    it: 'Altezza modella',
    es: 'Altura de la modelo',
    ru: 'Рост модели',
    zh: '模特身高',
    de: 'Modellgröße',
    nl: 'Model lengte',
    pt: 'Altura da modelo',
    id: 'Model height',
    ms: 'Tinggi model',
  },
  Material: {
    en: 'Material',
    ar: 'الخامة',
    fr: 'Matière',
    it: 'Materiale',
    es: 'Material',
    ru: 'Материал',
    zh: '材质',
    de: 'Material',
    nl: 'Materiaal',
    pt: 'Material',
    id: 'Material',
    ms: 'Bahan',
  },
  'Heritage craft': {
    en: 'Heritage craft',
    ar: 'الحرفة التراثية',
    fr: 'Artisanat patrimonial',
    it: 'Artigianato heritage',
    es: 'Artesanía patrimonial',
    ru: 'Наследие ремесла',
    zh: '传承工艺',
    de: 'Heritage-Handwerk',
    nl: 'Erfgoedambacht',
    pt: 'Artesanato de herança',
    id: 'Warisan craft',
    ms: 'Kraftangan warisan',
  },
}

export function localizePropertyLabel(name: string, locale: AppLocale): string {
  return PROPERTY_LABELS[name]?.[locale] ?? name
}

function productTypeLabel(category: string, locale: AppLocale): string {
  const map: Record<string, Record<AppLocale, string>> = {
    Abayas: {
      en: 'abaya',
      ar: 'عباءة',
      fr: 'abaya',
      it: 'abaya',
      es: 'abaya',
      ru: 'абайя',
      zh: '阿巴亚',
      de: 'Abaya',
      nl: 'abaya',
      pt: 'abaya',
      id: 'abaya',
      ms: 'abaya',
    },
    Kaftans: {
      en: 'kaftan',
      ar: 'قفطان',
      fr: 'caftan',
      it: 'kaftan',
      es: 'caftán',
      ru: 'кафтан',
      zh: '长袍',
      de: 'Kaftan',
      nl: 'kaftan',
      pt: 'kaftan',
      id: 'kaftan',
      ms: 'kaftan',
    },
    Dresses: {
      en: 'dress',
      ar: 'فستان',
      fr: 'robe',
      it: 'abito',
      es: 'vestido',
      ru: 'платье',
      zh: '连衣裙',
      de: 'Kleid',
      nl: 'jurk',
      pt: 'vestido',
      id: 'dress',
      ms: 'dress',
    },
    Sets: {
      en: 'set',
      ar: 'طقم',
      fr: 'ensemble',
      it: 'set',
      es: 'conjunto',
      ru: 'комплект',
      zh: '套装',
      de: 'Set',
      nl: 'set',
      pt: 'conjunto',
      id: 'set',
      ms: 'set',
    },
  }
  return map[category]?.[locale] ?? map.Abayas.en
}

const G = LOCALE_GEO

const CONTEMPORARY_KEYWORDS: Record<AppLocale, string[]> = {
  en: ['contemporary fashion', 'contemporary luxury', `${G.en.city} fashion house`, 'evolving lifestyles'],
  ar: ['أزياء معاصرة', `دار أزياء ${G.ar.city}`, 'أسلوب حياة متطوّر'],
  fr: ['mode contemporaine', 'luxe contemporain', `maison de mode ${G.fr.city}`],
  it: ['moda contemporanea', 'lusso contemporaneo', `casa di moda ${G.it.city}`],
  es: ['moda contemporánea', 'lujo contemporáneo', `casa de moda ${G.es.city}`],
  ru: ['современная мода', 'современная роскошь', `дом моды ${G.ru.city}`],
  zh: ['当代时尚', '当代奢华', `${G.zh.city}时尚品牌屋`],
  de: ['zeitgenössische Mode', 'zeitgenössischer Luxus', `Modehaus ${G.de.city}`],
  nl: ['eigentijdse mode', 'eigentijds luxe', `modehuis ${G.nl.city}`],
  pt: ['moda contemporânea', 'luxo contemporâneo', `casa de moda ${G.pt.city}`],
  id: ['fashion kontemporer', 'kemewahan kontemporer', `rumah fashion ${G.id.city}`, 'gaya hidup berkembang'],
  ms: ['fesyen kontemporari', 'kemewahan kontemporari', `rumah fesyen ${G.ms.city}`, 'gaya hidup berkembang'],
}

export function buildLocalizedProductKeywords(
  product: Product,
  locale: AppLocale,
  colorName?: string,
): string {
  const optimised = buildLocalisedOptimisedSchemaKeywords(product, colorName, locale)

  if (locale === 'en') {
    return optimised
  }

  const type = productTypeLabel(product.category, locale)
  const color = colorName?.trim() || product.colors[0]?.name || ''
  const slug = getProductSlug(product).toLowerCase()
  const craft = getHeritageCraft(slug)

  const terms = new Set<string>([
    ...optimised.split(', '),
    ...CONTEMPORARY_KEYWORDS[locale],
    ...MODEST_DISCOVERY_KEYWORDS[locale],
    `${product.name} ${type}`,
    color ? `${color} ${type}` : '',
  ])

  if (productIsOneSizeOnly(product)) {
    terms.add(`One size ${type}`)
  }

  if (craft === 'khous') {
    terms.add('Khous weaving')
    terms.add('Handwoven trim')
  }
  if (craft === 'al-talli') {
    terms.add('Al Talli')
  }

  return [...terms].filter(Boolean).join(', ')
}

const FAQ_TEMPLATES: Record<
  AppLocale,
  {
    madeIn: (name: string) => ProductFaqItem
    occasions: (name: string) => ProductFaqItem
    oneSize: (name: string) => ProductFaqItem
    khous: (name: string) => ProductFaqItem
    talli: (name: string) => ProductFaqItem
    scarfStyle?: (name: string) => ProductFaqItem
  }
> = {
  en: {
    madeIn: (name) => ({
      question: `Where is the ${name} made?`,
      answer: `The ${name} is made in Abu Dhabi, United Arab Emirates by Bint Saeed.`,
    }),
    occasions: (name) => ({
      question: `Is the ${name} suitable for weddings and special occasions?`,
      answer: `Yes. The ${name} is designed for weddings, Eid, celebrations, dinners, travel, gatherings and everyday elegance.`,
    }),
    oneSize: (name) => ({
      question: `Is the ${name} one size?`,
      answer: `Yes. The ${name} is designed as a one-size silhouette.`,
    }),
    khous: (name) => ({
      question: `Does the ${name} feature Khous-inspired detailing?`,
      answer: `Yes. The ${name} features handwoven trim inspired by the Emirati tradition of Khous weaving, made in Abu Dhabi.`,
    }),
    talli: (name) => ({
      question: `Does the ${name} feature Al Talli trim?`,
      answer: `Yes. The ${name} features traditional Al Talli trim celebrating Emirati heritage craftsmanship.`,
    }),
    scarfStyle: (name) => ({
      question: `Can the scarf on the ${name} be styled in different ways?`,
      answer:
        'Yes. The attached scarf detail can be styled diagonally across the body using the signature Bint Saeed gold-tone emblem pin.',
    }),
  },
  ar: {
    madeIn: (name) => ({
      question: `أين يُصنع ${name}؟`,
      answer: `يُصنع ${name} في ${G.ar.madeIn}، من قِبل ${BRAND_NAME}.`,
    }),
    occasions: (name) => ({
      question: `هل يناسب ${name} الأعراس والمناسبات الخاصة؟`,
      answer: `نعم. صُمم ${name} للأعراس والعيد والاحتفالات والعشاء والسفر والتجمعات والأناقة اليومية.`,
    }),
    oneSize: (name) => ({
      question: `هل ${name} بمقاس واحد؟`,
      answer: `نعم. صُمم ${name} بقصّة مقاس واحد.`,
    }),
    khous: (name) => ({
      question: `هل يتضمن ${name} تفاصيل مستوحاة من الخوص؟`,
      answer: `نعم. يتضمن ${name} زخرفة منسوجة يدوياً مستوحاة من تقاليد الخوص الإماراتية، صُنعت في ${G.ar.city}.`,
    }),
    talli: (name) => ({
      question: `هل يتضمن ${name} زخرفة التلي؟`,
      answer: `نعم. يتضمن ${name} زخرفة التلي التراثية التي تحتفي بالحرف الإماراتية.`,
    }),
    scarfStyle: (name) => ({
      question: `هل يمكن تنسيق وشاح ${name} بطرق مختلفة؟`,
      answer:
        `نعم. يمكن تنسيق الوشاح المرفق بشكل قطري عبر الجسم باستخدام دبوس الشعار الذهبي من ${BRAND_NAME}.`,
    }),
  },
  fr: {
    madeIn: (name) => ({
      question: `Où est fabriqué ${name} ?`,
      answer: `${name} est fabriqué à ${G.fr.madeIn}, par ${BRAND_NAME}.`,
    }),
    occasions: (name) => ({
      question: `${name} convient-il aux mariages et occasions spéciales ?`,
      answer: `Oui. ${name} est conçu pour les mariages, l’Aïd, les célébrations, les dîners, les voyages, les réunions et l’élégance quotidienne.`,
    }),
    oneSize: (name) => ({
      question: `${name} est-il en taille unique ?`,
      answer: `Oui. ${name} est conçu en silhouette taille unique.`,
    }),
    khous: (name) => ({
      question: `${name} présente-t-il des détails inspirés du Khous ?`,
      answer: `Oui. ${name} comporte une garniture tissée à la main inspirée de la tradition émiratie du tissage Khous, fabriquée à ${G.fr.city}.`,
    }),
    talli: (name) => ({
      question: `${name} comporte-t-il une garniture Al Talli ?`,
      answer: `Oui. ${name} comporte une garniture Al Talli traditionnelle célébrant l’artisanat du patrimoine émirati.`,
    }),
  },
  it: {
    madeIn: (name) => ({
      question: `Dove è realizzato ${name}?`,
      answer: `${name} è realizzato a ${G.it.madeIn}, da ${BRAND_NAME}.`,
    }),
    occasions: (name) => ({
      question: `${name} è adatto a matrimoni e occasioni speciali?`,
      answer: `Sì. ${name} è pensato per matrimoni, Eid, celebrazioni, cene, viaggi, ritrovi ed eleganza quotidiana.`,
    }),
    oneSize: (name) => ({
      question: `${name} è taglia unica?`,
      answer: `Sì. ${name} è progettato come silhouette taglia unica.`,
    }),
    khous: (name) => ({
      question: `${name} presenta dettagli ispirati al Khous?`,
      answer: `Sì. ${name} presenta una finitura tessuta a mano ispirata alla tradizione emiratina della tessitura Khous, realizzata a ${G.it.city}.`,
    }),
    talli: (name) => ({
      question: `${name} presenta finiture Al Talli?`,
      answer: `Sì. ${name} presenta finiture Al Talli tradizionali che celebrano l’artigianato del patrimonio emiratino.`,
    }),
  },
  es: {
    madeIn: (name) => ({
      question: `¿Dónde se fabrica ${name}?`,
      answer: `${name} se fabrica en ${G.es.madeIn}, por ${BRAND_NAME}.`,
    }),
    occasions: (name) => ({
      question: `¿Es ${name} adecuado para bodas y ocasiones especiales?`,
      answer: `Sí. ${name} está diseñado para bodas, Eid, celebraciones, cenas, viajes, reuniones y elegancia cotidiana.`,
    }),
    oneSize: (name) => ({
      question: `¿${name} es de talla única?`,
      answer: `Sí. ${name} está diseñado como silueta de talla única.`,
    }),
    khous: (name) => ({
      question: `¿${name} incluye detalles inspirados en Khous?`,
      answer: `Sí. ${name} incluye un ribete tejido a mano inspirado en la tradición emiratí del tejido Khous, hecho en ${G.es.city}.`,
    }),
    talli: (name) => ({
      question: `¿${name} incluye ribete Al Talli?`,
      answer: `Sí. ${name} incluye ribete Al Talli tradicional que celebra la artesanía del patrimonio emiratí.`,
    }),
  },
  ru: {
    madeIn: (name) => ({
      question: `Где производится ${name}?`,
      answer: `${name} производится в ${G.ru.madeIn}, брендом ${BRAND_NAME}.`,
    }),
    occasions: (name) => ({
      question: `Подходит ли ${name} для свадеб и особых случаев?`,
      answer: `Да. ${name} создан для свадеб, Ида, праздников, ужинов, путешествий, встреч и повседневной элегантности.`,
    }),
    oneSize: (name) => ({
      question: `${name} — один размер?`,
      answer: `Да. ${name} спроектирован как силуэт одного размера.`,
    }),
    khous: (name) => ({
      question: `Есть ли у ${name} детали в духе Khous?`,
      answer: `Да. ${name} украшен ручной отделкой, вдохновлённой эмиратской традицией плетения Khous, сделанной в ${G.ru.city}.`,
    }),
    talli: (name) => ({
      question: `Есть ли у ${name} отделка Al Talli?`,
      answer: `Да. ${name} имеет традиционную отделку Al Talli, отражающую эмиратское наследие.`,
    }),
  },
  zh: {
    madeIn: (name) => ({
      question: `${name} 在哪里制作？`,
      answer: `${name} 由 ${BRAND_NAME} 在 ${G.zh.madeIn} 制作。`,
    }),
    occasions: (name) => ({
      question: `${name} 适合婚礼和特殊场合吗？`,
      answer: `适合。${name} 适用于婚礼、开斋节、庆典、晚宴、旅行、聚会与日常优雅场合。`,
    }),
    oneSize: (name) => ({
      question: `${name} 是均码吗？`,
      answer: `是的。${name} 采用均码廓形设计。`,
    }),
    khous: (name) => ({
      question: `${name} 是否有 Khous 灵感细节？`,
      answer: `是的。${name} 配有手工编织饰边，灵感来自阿联酋 Khous 编织传统，在 ${G.zh.city} 制作。`,
    }),
    talli: (name) => ({
      question: `${name} 是否有 Al Talli 饰边？`,
      answer: `是的。${name} 配有传统 Al Talli 饰边，彰显阿联酋传承工艺。`,
    }),
  },
  de: {
    madeIn: (name) => ({
      question: `Wo wird ${name} hergestellt?`,
      answer: `${name} wird in ${G.de.madeIn} von ${BRAND_NAME} hergestellt.`,
    }),
    occasions: (name) => ({
      question: `Ist ${name} für Hochzeiten und besondere Anlässe geeignet?`,
      answer: `Ja. ${name} ist für Hochzeiten, Eid, Feiern, Dinners, Reisen, Zusammenkünfte und alltägliche Eleganz konzipiert.`,
    }),
    oneSize: (name) => ({
      question: `Ist ${name} One Size?`,
      answer: `Ja. ${name} ist als One-Size-Silhouette konzipiert.`,
    }),
    khous: (name) => ({
      question: `Hat ${name} Khous-inspirierte Details?`,
      answer: `Ja. ${name} hat handgewebte Besätze, inspiriert von der emiratischen Khous-Webtradition, hergestellt in ${G.de.city}.`,
    }),
    talli: (name) => ({
      question: `Hat ${name} Al-Talli-Besatz?`,
      answer: `Ja. ${name} hat traditionellen Al-Talli-Besatz, der emiratisches Erbe feiert.`,
    }),
  },
  nl: {
    madeIn: (name) => ({
      question: `Waar wordt ${name} gemaakt?`,
      answer: `${name} wordt gemaakt in ${G.nl.madeIn} door ${BRAND_NAME}.`,
    }),
    occasions: (name) => ({
      question: `Is ${name} geschikt voor bruiloften en speciale gelegenheden?`,
      answer: `Ja. ${name} is ontworpen voor bruiloften, Eid, vieringen, diners, reizen, bijeenkomsten en alledaagse elegantie.`,
    }),
    oneSize: (name) => ({
      question: `Is ${name} one size?`,
      answer: `Ja. ${name} is ontworpen als one-size silhouet.`,
    }),
    khous: (name) => ({
      question: `Heeft ${name} Khous-geïnspireerde details?`,
      answer: `Ja. ${name} heeft handgeweven afwerking geïnspireerd op de Emirati Khous-traditie, gemaakt in ${G.nl.city}.`,
    }),
    talli: (name) => ({
      question: `Heeft ${name} Al Talli-afwerking?`,
      answer: `Ja. ${name} heeft traditionele Al Talli-afwerking die Emirati erfgoed viert.`,
    }),
  },
  pt: {
    madeIn: (name) => ({
      question: `Onde é feito ${name}?`,
      answer: `${name} é feito em ${G.pt.madeIn} pela ${BRAND_NAME}.`,
    }),
    occasions: (name) => ({
      question: `${name} é adequado para casamentos e ocasiões especiais?`,
      answer: `Sim. ${name} foi concebido para casamentos, Eid, celebrações, jantares, viagens, encontros e elegância quotidiana.`,
    }),
    oneSize: (name) => ({
      question: `${name} é tamanho único?`,
      answer: `Sim. ${name} foi concebido como silhueta tamanho único.`,
    }),
    khous: (name) => ({
      question: `${name} inclui detalhes inspirados em Khous?`,
      answer: `Sim. ${name} inclui acabamento tecido à mão inspirado na tradição emiratense de tecelagem Khous, feito em ${G.pt.city}.`,
    }),
    talli: (name) => ({
      question: `${name} inclui acabamento Al Talli?`,
      answer: `Sim. ${name} inclui acabamento Al Talli tradicional que celebra o artesanato do património emirati.`,
    }),
  },
  id: {
    madeIn: (name) => ({
      question: `Di mana ${name} dibuat?`,
      answer: `${name} dibuat di ${G.id.madeIn} oleh ${BRAND_NAME}.`,
    }),
    occasions: (name) => ({
      question: `Apakah ${name} cocok untuk pernikahan dan acara khusus?`,
      answer: `Ya. ${name} dirancang untuk pernikahan, Id, perayaan, makan malam, perjalanan, pertemuan, dan keanggunan sehari-hari.`,
    }),
    oneSize: (name) => ({
      question: `Apakah ${name} one size?`,
      answer: `Ya. ${name} dirancang sebagai siluet one-size.`,
    }),
    khous: (name) => ({
      question: `Apakah ${name} memiliki detail terinspirasi Khous?`,
      answer: `Ya. ${name} memiliki trim tenun tangan terinspirasi tradisi tenun Khous Emirati, dibuat di ${G.id.city}.`,
    }),
    talli: (name) => ({
      question: `Apakah ${name} memiliki trim Al Talli?`,
      answer: `Ya. ${name} memiliki trim Al Talli tradisional yang merayakan kerajinan warisan Emirati.`,
    }),
    scarfStyle: (name) => ({
      question: `Bisakah scarf pada ${name} ditata dengan berbagai cara?`,
      answer:
        'Ya. Detail scarf terpasang dapat ditata secara diagonal di tubuh menggunakan pin emblem emas khas Bint Saeed.',
    }),
  },
  ms: {
    madeIn: (name) => ({
      question: `Di manakah ${name} dihasilkan?`,
      answer: `${name} dihasilkan di ${G.ms.madeIn} oleh ${BRAND_NAME}.`,
    }),
    occasions: (name) => ({
      question: `Adakah ${name} sesuai untuk perkahwinan dan acara khas?`,
      answer: `Ya. ${name} direka untuk perkahwinan, Aidilfitri, sambutan, majlis malam, perjalanan, pertemuan, dan keanggunan harian.`,
    }),
    oneSize: (name) => ({
      question: `Adakah ${name} one size?`,
      answer: `Ya. ${name} direka sebagai siluet one-size.`,
    }),
    khous: (name) => ({
      question: `Adakah ${name} mempunyai butiran terinspirasi Khous?`,
      answer: `Ya. ${name} mempunyai hiasan tenunan tangan terinspirasi tradisi tenunan Khous Emirati, dihasilkan di ${G.ms.city}.`,
    }),
    talli: (name) => ({
      question: `Adakah ${name} mempunyai hiasan Al Talli?`,
      answer: `Ya. ${name} mempunyai hiasan Al Talli tradisional yang meraikan kraftangan warisan Emirati.`,
    }),
    scarfStyle: (name) => ({
      question: `Bolehkah scarf pada ${name} digayakan dalam pelbagai cara?`,
      answer:
        'Ya. Butiran scarf terpasang boleh digayakan secara pepenjuru merentasi badan menggunakan pin emblem emas khas Bint Saeed.',
    }),
  },
}

const KAFTAN_SLUGS = new Set(['mayfair-kaftan', 'nothing-hill-kaftan'])

export function buildLocalizedDefaultFaq(product: Product, locale: AppLocale): ProductFaqItem[] {
  const name = product.name
  const craft = getHeritageCraft(getProductSlug(product))
  const t = FAQ_TEMPLATES[locale]
  const items = [t.madeIn(name), t.occasions(name)]

  if (productIsOneSizeOnly(product)) items.push(t.oneSize(name))
  if (craft === 'khous') items.push(t.khous(name))
  if (craft === 'al-talli') items.push(t.talli(name))

  return items
}

export function getLocalizedProductFaq(
  product: Product,
  locale: AppLocale,
  customFaq?: ProductFaqItem[],
): ProductFaqItem[] {
  const slug = getProductSlug(product).toLowerCase()

  if (KAFTAN_SLUGS.has(slug)) {
    return getLocalizedKaftanFaq(slug, locale)
  }

  return buildLocalizedDefaultFaq(product, locale)
}

export function buildLocalizedSchemaDescription(
  product: Product,
  locale: AppLocale,
  baseDescription: string,
): string {
  const intro: Record<AppLocale, string> = {
    en: `${product.name} by ${BRAND_NAME} — a contemporary house from ${G.en.city} devoted to evolving lifestyles.`,
    ar: `${product.name} من ${BRAND_NAME} — دار معاصرة من ${G.ar.city} مكرّسة لأسلوب حياة يتطوّر.`,
    fr: `${product.name} par ${BRAND_NAME} — une maison contemporaine d’${G.fr.city} au service de modes de vie en évolution.`,
    it: `${product.name} di ${BRAND_NAME} — una casa contemporanea di ${G.it.city} dedicata a stili di vita in evoluzione.`,
    es: `${product.name} de ${BRAND_NAME} — una casa contemporánea de ${G.es.city} dedicada a estilos de vida en evolución.`,
    ru: `${product.name} от ${BRAND_NAME} — современный дом из ${G.ru.city} для меняющегося образа жизни.`,
    zh: `${product.name} — ${BRAND_NAME}，源自${G.zh.city}的当代品牌屋，致力于不断演进的生活方式。`,
    de: `${product.name} von ${BRAND_NAME} — ein zeitgenössisches Haus aus ${G.de.city} für sich wandelnde Lebensstile.`,
    nl: `${product.name} van ${BRAND_NAME} — een eigentijds huis uit ${G.nl.city} voor veranderende levensstijlen.`,
    pt: `${product.name} da ${BRAND_NAME} — uma casa contemporânea de ${G.pt.city} dedicada a estilos de vida em evolução.`,
    id: `${product.name} oleh ${BRAND_NAME} — rumah kontemporer dari ${G.id.city} yang berdedikasi pada gaya hidup yang terus berkembang.`,
    ms: `${product.name} oleh ${BRAND_NAME} — rumah kontemporari dari ${G.ms.city} yang berdedikasi kepada gaya hidup yang sentiasa berkembang.`,
  }

  return `${intro[locale]} ${baseDescription}`.replace(/\s+/g, ' ').trim()
}
