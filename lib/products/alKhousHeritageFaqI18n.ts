import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem } from '@/lib/products/productSchemaMeta'

export type AlKhousHeritageProductKey =
  | 'belgravia'
  | 'kensington'
  | 'knightsbridge-abaya-jacket'
  | 'knightsbridge-dress'

const PRODUCT_NAMES: Record<AlKhousHeritageProductKey, Record<AppLocale, string>> = {
  belgravia: {
    en: 'Belgravia Abaya',
    ar: 'عباية Belgravia',
    fr: 'Abaya Belgravia',
    it: 'Abaya Belgravia',
    es: 'Abaya Belgravia',
    ru: 'Абайя Belgravia',
    zh: 'Belgravia 长袍',
    de: 'Belgravia Abaya',
    nl: 'Belgravia abaya',
    pt: 'Abaya Belgravia',
    id: 'Abaya Belgravia',
    ms: 'Abaya Belgravia',
  },
  kensington: {
    en: 'Kensington Abaya',
    ar: 'عباية Kensington',
    fr: 'Abaya Kensington',
    it: 'Abaya Kensington',
    es: 'Abaya Kensington',
    ru: 'Абайя Kensington',
    zh: 'Kensington 长袍',
    de: 'Kensington Abaya',
    nl: 'Kensington abaya',
    pt: 'Abaya Kensington',
    id: 'Abaya Kensington',
    ms: 'Abaya Kensington',
  },
  'knightsbridge-abaya-jacket': {
    en: 'Knightsbridge Abaya Jacket',
    ar: 'عباية Knightsbridge Abaya Jacket',
    fr: 'Abaya veste Knightsbridge',
    it: 'Abaya giacca Knightsbridge',
    es: 'Abaya chaqueta Knightsbridge',
    ru: 'Абайя-жакет Knightsbridge',
    zh: 'Knightsbridge 夹克式长袍',
    de: 'Knightsbridge Abaya Jacket',
    nl: 'Knightsbridge abaya jacket',
    pt: 'Abaya casaco Knightsbridge',
    id: 'Abaya Jaket Knightsbridge',
    ms: 'Abaya Jaket Knightsbridge',
  },
  'knightsbridge-dress': {
    en: 'Knightsbridge Dress',
    ar: 'فستان Knightsbridge',
    fr: 'Robe Knightsbridge',
    it: 'Abito Knightsbridge',
    es: 'Vestido Knightsbridge',
    ru: 'Платье Knightsbridge',
    zh: 'Knightsbridge 连衣裙',
    de: 'Knightsbridge Dress',
    nl: 'Knightsbridge dress',
    pt: 'Vestido Knightsbridge',
    id: 'Gaun Knightsbridge',
    ms: 'Gaun Knightsbridge',
  },
}

const QUESTION: Record<AppLocale, string> = {
  en: 'What is Al Khous, and why is it important to Emirati heritage?',
  ar: 'ما هو Al Khous، ولماذا يعد مهماً للتراث الإماراتي؟',
  fr: "Qu'est-ce que Al Khous, et pourquoi est-il important pour le patrimoine emirati ?",
  it: "Che cos'è Al Khous e perché è importante per il patrimonio emiratino?",
  es: '¿Qué es Al Khous y por qué es importante para el patrimonio emiratí?',
  ru: 'Что такое Al Khous и почему это важно для эмиратского наследия?',
  zh: '什么是 Al Khous？它为何对阿联酋传统遗产具有重要意义？',
  de: 'Was ist Al Khous, und warum ist es für das emiratische Erbe wichtig?',
  nl: 'Wat is Al Khous, en waarom is het belangrijk voor het Emiratische erfgoed?',
  pt: 'O que é Al Khous e por que é importante para o património emirati?',
  id: 'Apa itu Al Khous, dan mengapa penting bagi warisan budaya Emirati?',
  ms: 'Apakah Al Khous, dan mengapa ia penting bagi warisan budaya Emirati?',
}

function answerBody(locale: AppLocale, productName: string): string {
  const bodies: Record<AppLocale, string> = {
    en: `Al Khous is one of the United Arab Emirates' oldest traditional crafts, created by weaving the leaves of the date palm into functional and decorative objects. Passed down through generations, it remains an important expression of Emirati culture and craftsmanship. The ${productName} draws inspiration from the patterns and weaving techniques of this heritage through contemporary woven detailing.`,
    ar: `يعد Al Khous من أقدم الحرف التقليدية في دولة الإمارات العربية المتحدة، يُصنع من نسج أوراق نخيل التمر إلى قطع وظيفية وزخرفية. ومع انتقاله عبر الأجيال، يبقى تعبيراً مهماً عن الثقافة والحرفية الإماراتية. تستلهم ${productName} أنماط وتقنيات النسج في هذا الإرث من خلال تفاصيل منسوجة معاصرة.`,
    fr: `Al Khous est l'un des plus anciens savoir-faire traditionnels des Émirats arabes unis, consistant à tresser les feuilles du palmier dattier en objets fonctionnels et décoratifs. Transmis de génération en génération, il demeure une expression importante de la culture et de l'artisanat emiratis. ${productName} s'inspire des motifs et des techniques de tissage de cet héritage à travers des finitions tissées contemporaines.`,
    it: `Al Khous è una delle più antiche arti tradizionali degli Emirati Arabi Uniti, creata intrecciando le foglie della palma da dattero in oggetti funzionali e decorativi. Tramandata di generazione in generazione, resta un'importante espressione della cultura e dell'artigianalità emiratina. ${productName} trae ispirazione dai motivi e dalle tecniche di intreccio di questo patrimonio attraverso dettagli tessuti contemporanei.`,
    es: `Al Khous es una de las artesanías tradicionales más antiguas de los Emiratos Árabes Unidos, creada al tejer las hojas de la palmera datilera en objetos funcionales y decorativos. Transmitida de generación en generación, sigue siendo una expresión importante de la cultura y la artesanía emiratí. ${productName} se inspira en los patrones y las técnicas de tejido de este legado a través de detalles tejidos contemporáneos.`,
    ru: `Al Khous — одно из старейших традиционных ремёсел Объединённых Арабских Эмиратов, основанное на плетении листьев финиковой пальмы в функциональные и декоративные изделия. Передаваемое из поколения в поколение, оно остаётся важным выражением эмиратской культуры и мастерства. ${productName} черпает вдохновение в узорах и техниках плетения этого наследия через современную тканую отделку.`,
    zh: `Al Khous 是阿联酋最古老的传统工艺之一，将椰枣树叶编织成功能与装饰物件。代代相传，它始终是阿联酋文化与工艺的重要表达。${productName} 通过当代编织细节，从这一遗产的纹样与织造技法中汲取灵感。`,
    de: `Al Khous ist eines der ältesten traditionellen Handwerke der Vereinigten Arabischen Emirate und entsteht durch das Flechten von Dattelpalmenblättern zu funktionalen und dekorativen Objekten. Über Generationen weitergegeben, bleibt es ein wichtiger Ausdruck emiratischer Kultur und Handwerkskunst. ${productName} lässt sich von den Mustern und Webtechniken dieses Erbes durch zeitgenössische gewebte Details inspirieren.`,
    nl: `Al Khous is een van de oudste traditionele ambachten van de Verenigde Arabische Emiraten, ontstaan door het vlechten van dadelpalmbladeren tot functionele en decoratieve objecten. Doorgegeven van generatie op generatie blijft het een belangrijke uitdrukking van Emiratische cultuur en vakmanschap. ${productName} put inspiratie uit de patronen en weeftechnieken van dit erfgoed via eigentijdse geweven details.`,
    pt: `Al Khous é uma das artes tradicionais mais antigas dos Emirados Árabes Unidos, criada ao tecer as folhas da palmeira-dátil em objetos funcionais e decorativos. Transmitida de geração em geração, continua a ser uma expressão importante da cultura e do artesanato emirati. ${productName} inspira-se nos padrões e nas técnicas de tecelagem deste património através de detalhes tecidos contemporâneos.`,
    id: `Al Khous adalah salah satu kerajinan tradisional tertua di Uni Emirat Arab, dibuat dengan menenun daun pohon kurma menjadi benda fungsional dan dekoratif. Diwariskan lintas generasi, ia tetap menjadi ekspresi penting budaya dan kerajinan Emirati. ${productName} mengambil inspirasi dari pola dan teknik tenun warisan ini melalui detail anyaman kontemporer.`,
    ms: `Al Khous ialah salah satu kraf tradisional tertua di Emiriah Arab Bersatu, dicipta dengan menenun daun pokok kurma menjadi objek fungsian dan hiasan. Diwarisi merentas generasi, ia kekal sebagai ungkapan penting budaya dan kraf Emirati. ${productName} mengambil inspirasi daripada corak dan teknik tenunan warisan ini melalui perincian tenunan kontemporari.`,
  }
  return bodies[locale]
}

export function getAlKhousHeritageFaqItem(
  productKey: AlKhousHeritageProductKey,
  locale: AppLocale = 'en',
): ProductFaqItem {
  const productName = PRODUCT_NAMES[productKey][locale]
  return {
    question: QUESTION[locale],
    answer: answerBody(locale, productName),
  }
}

const AL_KHOUS_QUESTION_RE =
  /al\s*khous|الخوص|khous\s*weaving|tenun.*khous|anyam.*khous|نسج.*الخوص|خوص/i

/** Replace legacy Al Khous FAQ entries with the heritage question copy. */
export function patchAlKhousHeritageFaq(
  faq: ProductFaqItem[],
  productKey: AlKhousHeritageProductKey,
  locale: AppLocale,
): ProductFaqItem[] {
  const replacement = getAlKhousHeritageFaqItem(productKey, locale)
  const idx = faq.findIndex((item) => AL_KHOUS_QUESTION_RE.test(item.question))
  if (idx === -1) return [...faq, replacement]
  return faq.map((item, i) => (i === idx ? replacement : item))
}
