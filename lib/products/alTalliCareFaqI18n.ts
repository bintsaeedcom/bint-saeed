import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem } from '@/lib/products/productSchemaMeta'
import { AL_TALLI_HERITAGE_PRODUCT_SLUGS } from '@/lib/products/alTalliHeritageFaqI18n'

/** Localised product names for Al Talli care FAQ — extend when adding new Al Talli pieces. */
const PRODUCT_NAME: Record<string, Record<AppLocale, string>> = {
  'hampstead-dress': {
    en: 'Hampstead Dress',
    ar: 'فستان Hampstead',
    fr: 'robe Hampstead',
    it: 'Hampstead Dress',
    es: 'Hampstead Dress',
    ru: 'Hampstead Dress',
    zh: 'Hampstead Dress',
    de: 'Hampstead Dress',
    nl: 'Hampstead Dress',
    pt: 'Hampstead Dress',
    id: 'Hampstead Dress',
    ms: 'Hampstead Dress',
  },
  'covent-garden-abaya': {
    en: 'Covent Garden Abaya',
    ar: 'عباية Covent Garden',
    fr: 'abaya Covent Garden',
    it: 'Covent Garden Abaya',
    es: 'abaya Covent Garden',
    ru: 'Covent Garden Abaya',
    zh: 'Covent Garden 长袍',
    de: 'Covent Garden Abaya',
    nl: 'Covent Garden abaya',
    pt: 'Covent Garden Abaya',
    id: 'Covent Garden Abaya',
    ms: 'Covent Garden Abaya',
  },
  'soho-set': {
    en: 'Soho Set',
    ar: 'مجموعة Soho',
    fr: 'Soho Set',
    it: 'Soho Set',
    es: 'Soho Set',
    ru: 'Soho Set',
    zh: 'Soho 套装',
    de: 'Soho Set',
    nl: 'Soho Set',
    pt: 'Soho Set',
    id: 'Soho Set',
    ms: 'Soho Set',
  },
  'grosvenor-set': {
    en: 'Grosvenor Set',
    ar: 'مجموعة Grosvenor',
    fr: 'Grosvenor Set',
    it: 'Grosvenor Set',
    es: 'Grosvenor Set',
    ru: 'Grosvenor Set',
    zh: 'Grosvenor 套装',
    de: 'Grosvenor Set',
    nl: 'Grosvenor Set',
    pt: 'Grosvenor Set',
    id: 'Grosvenor Set',
    ms: 'Grosvenor Set',
  },
}

/** Garment noun in the care answer (“As the dress / abaya / set is finished…”). */
const GARMENT_NOUN: Record<string, Record<AppLocale, string>> = {
  'hampstead-dress': {
    en: 'dress',
    ar: 'الفستان',
    fr: 'la robe',
    it: 'l’abito',
    es: 'el vestido',
    ru: 'платье',
    zh: '连衣裙',
    de: 'das Kleid',
    nl: 'de jurk',
    pt: 'o vestido',
    id: 'gaun',
    ms: 'gaun',
  },
  'covent-garden-abaya': {
    en: 'abaya',
    ar: 'العباءة',
    fr: 'l’abaya',
    it: 'l’abaya',
    es: 'la abaya',
    ru: 'абайя',
    zh: '长袍',
    de: 'die Abaya',
    nl: 'de abaya',
    pt: 'a abaya',
    id: 'abaya',
    ms: 'abaya',
  },
  'soho-set': {
    en: 'set',
    ar: 'الطقم',
    fr: 'le set',
    it: 'il set',
    es: 'el set',
    ru: 'комплект',
    zh: '套装',
    de: 'das Set',
    nl: 'de set',
    pt: 'o set',
    id: 'set',
    ms: 'set',
  },
  'grosvenor-set': {
    en: 'set',
    ar: 'الطقم',
    fr: 'le set',
    it: 'il set',
    es: 'el set',
    ru: 'комплект',
    zh: '套装',
    de: 'das Set',
    nl: 'de set',
    pt: 'o set',
    id: 'set',
    ms: 'set',
  },
}

function questionFor(locale: AppLocale, productName: string): string {
  const q: Record<AppLocale, string> = {
    en: `How should I care for the ${productName}?`,
    ar: `كيف أعتني على ${productName}؟`,
    fr: `Comment entretenir ${productName} ?`,
    it: `Come devo curare ${productName}?`,
    es: `¿Cómo debo cuidar ${productName}?`,
    ru: `Как ухаживать за ${productName}?`,
    zh: `如何护理${productName}？`,
    de: `Wie pflege ich ${productName}?`,
    nl: `Hoe verzorg ik de ${productName}?`,
    pt: `Como devo cuidar do ${productName}?`,
    id: `Bagaimana cara merawat ${productName}?`,
    ms: `Bagaimana saya menjaga ${productName}?`,
  }
  return q[locale]
}

function answerFor(locale: AppLocale, productName: string, garmentNoun: string): string {
  const a: Record<AppLocale, string> = {
    en: `To preserve the beauty of your ${productName}, we recommend professional dry cleaning only. As the ${garmentNoun} is finished with Bint Saeed’s signature Al Talli trim, a delicate traditional Emirati craft woven with fine metallic threads, it should be handled with care to maintain its beauty and craftsmanship for years to come.`,
    ar: `للحفاظ على جمال ${productName}، نوصي بالتنظيف الجاف الاحترافي فقط. وبما أن ${garmentNoun} منتهٍ بتفاصيل التلي المنسوجة المميزة من Bint Saeed — حرفة إماراتية تقليدية رقيقة منسوجة بخيوط معدنية دقيقة — فيجب التعامل معه بعناية للحفاظ على جماله وحرفيته لسنوات قادمة.`,
    fr: `Pour préserver la beauté de votre ${productName}, nous recommandons uniquement le nettoyage à sec professionnel. ${garmentNoun} étant finie par la garniture tissée Al Talli signature de Bint Saeed — un savoir-faire émirati traditionnel délicat tissé de fins fils métalliques — elle doit être manipulée avec soin pour conserver sa beauté et son artisanat pendant des années.`,
    it: `Per preservare la bellezza del ${productName}, consigliamo solo il lavaggio a secco professionale. Poiché ${garmentNoun} è rifinito con la finitura in Al Talli tessuto signature di Bint Saeed — una delicata arte tradizionale emiratina tessuta con fini fili metallici — va trattato con cura per mantenerne bellezza e artigianalità per gli anni a venire.`,
    es: `Para preservar la belleza de su ${productName}, recomendamos únicamente limpieza en seco profesional. Como ${garmentNoun} está acabado con el ribete tejido Al Talli distintivo de Bint Saeed — una delicada artesanía tradicional emiratí tejida con finos hilos metálicos — debe manipularse con cuidado para mantener su belleza y artesanía durante años.`,
    ru: `Чтобы сохранить красоту ${productName}, мы рекомендуем только профессиональную химчистку. Поскольку ${garmentNoun} завершено фирменной тканой отделкой Al Talli от Bint Saeed — деликатным традиционным эмиратским ремеслом с тонкими металлическими нитями — с ним следует обращаться бережно, чтобы сохранить красоту и мастерство на долгие годы.`,
    zh: `为保持${productName}的美感，我们建议仅限专业干洗。${garmentNoun}饰以 Bint Saeed 标志性 Al Talli 编织饰边——以精细金属线编织的精致传统阿联酋工艺——应悉心护理，以长久保持其美感与工艺品质。`,
    de: `Um die Schönheit Ihres ${productName} zu bewahren, empfehlen wir ausschließlich professionelle chemische Reinigung. Da ${garmentNoun} mit Bint Saeeds Signatur-Al-Talli-Webbesatz veredelt ist — einem feinen traditionellen emiratischen Handwerk mit metallischen Fäden — sollte es behutsam behandelt werden, um Schönheit und Handwerkskunst über Jahre zu erhalten.`,
    nl: `Om de schoonheid van uw ${productName} te behouden, raden wij alleen professionele stomerij aan. Omdat ${garmentNoun} is afgewerkt met Bint Saeeds kenmerkend Al Talli-weefwerk — een delicaat traditioneel Emiratisch ambacht geweven met fijne metallic draden — moet het zorgvuldig worden behandeld om schoonheid en vakmanschap jarenlang te bewaren.`,
    pt: `Para preservar a beleza do seu ${productName}, recomendamos apenas limpeza a seco profissional. Como ${garmentNoun} é acabado com o acabamento em Al Talli tecido distintivo da Bint Saeed — um delicado artesanato tradicional emirati tecido com finos fios metálicos — deve ser manuseado com cuidado para manter a sua beleza e artesanato durante anos.`,
    id: `Untuk menjaga keindahan ${productName}, kami merekomendasikan dry clean profesional saja. Karena ${garmentNoun} dihiasi trim tenun Al Talli signature Bint Saeed — kerajinan tradisional Emirati halus yang ditenun dengan benang metalik halus — harus ditangani dengan hati-hati agar keindahan dan kraftsmanship-nya terjaga selama bertahun-tahun.`,
    ms: `Untuk mengekalkan keindahan ${productName}, kami mengesyorkan dry clean profesional sahaja. Memandangkan ${garmentNoun} dihiasi hiasan tenunan Al Talli signature Bint Saeed — kraf tradisional Emirati halus yang ditenun dengan benang logam halus — ia harus ditangani dengan berhati-hati untuk mengekalkan keindahan dan krafnya selama bertahun-tahun.`,
  }
  return a[locale]
}

const CARE_QUESTION_RE =
  /how should i care|how do i care|كيف.*أعتني|comment.*entretenir|come devo curare|cómo debo cuidar|как ухаживать|如何护理|wie pflege ich|hoe verzorg ik|como devo cuidar|bagaimana cara merawat|bagaimana saya menjaga/i

export function isAlTalliHeritageProductSlug(slug: string): boolean {
  return AL_TALLI_HERITAGE_PRODUCT_SLUGS.has(slug.toLowerCase())
}

/** Locked Al Talli care FAQ — shared across all Al Talli heritage products. */
export function getAlTalliCareFaqItem(slug: string, locale: AppLocale = 'en'): ProductFaqItem | null {
  const s = slug.toLowerCase()
  const names = PRODUCT_NAME[s]
  const nouns = GARMENT_NOUN[s]
  if (!names || !nouns) return null

  const productName = names[locale]
  const garmentNoun = nouns[locale]

  return {
    question: questionFor(locale, productName),
    answer: answerFor(locale, productName, garmentNoun),
  }
}

/** Append the shared Al Talli care FAQ when missing. Use for PDP and schema FAQ lists. */
export function appendAlTalliCareFaq(
  faq: ProductFaqItem[],
  slug: string,
  locale: AppLocale = 'en',
): ProductFaqItem[] {
  if (!isAlTalliHeritageProductSlug(slug)) return faq
  if (faq.some((item) => CARE_QUESTION_RE.test(item.question))) return faq

  const care = getAlTalliCareFaqItem(slug, locale)
  return care ? [...faq, care] : faq
}
