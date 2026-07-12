import type { AppLocale } from '@/lib/i18n/routing'
import {
  FR_EARRING_PDP_BY_ID,
  FR_NECKLACE_PDP_BY_ID,
} from '@/lib/accessories/necklaceEarringPdpContentFr'
import {
  AR_EARRING_PDP_BY_ID,
  EN_EARRING_PDP_BY_ID,
} from '@/lib/accessories/necklaceEarringPdpContentEarringsEn'
import { getEarringPdpContentI18n } from '@/lib/accessories/earringPdpContentI18n'
import { getNecklacePdpContentI18n } from '@/lib/accessories/necklacePdpContentI18n'
import type { ProductFaqItem } from '@/lib/products/productSchemaMeta'
import {
  JEWELLERY_CARE_AR,
  JEWELLERY_CARE_EN,
  JEWELLERY_CARE_FAQ_NECKLACE_AR,
  JEWELLERY_CARE_FAQ_NECKLACE_EN,
  JEWELLERY_CARE_LEAD_AR,
  JEWELLERY_CARE_LEAD_EN,
} from '@/lib/accessories/jewelleryCareCopyI18n'
import {
  getAlAinRosetteFaqAnswer,
  isAlAinRosetteFaqQuestion,
} from '@/lib/the-codes/alAinRosetteFaqAnswer'

export type NecklaceEarringFaqItem = {
  question: string
  answer: string | string[]
}

export type NecklaceEarringPdpContentPack = {
  introParagraphs: string[]
  featuresTitle: string
  features: string[]
  careLead: string
  care: string[]
  faq: NecklaceEarringFaqItem[]
}

function faqAnswerParagraphs(answer: string | string[]): string[] {
  return Array.isArray(answer) ? answer : [answer]
}

const MALACHITE_PACK: Partial<Record<AppLocale, NecklaceEarringPdpContentPack>> = {
  en: {
    introParagraphs: [
      'Some pieces become part of the way you are recognised. The Al Ain Oasis Necklace - Malachite is hand-strung from natural malachite gemstones, accented with gold-plated hematite beads and finished with the House’s signature Al Ain Rosette, hand-carved from natural Carnelian. Designed to adapt to every occasion, it may be worn as a single long necklace or doubled around the neck to create a shorter layered silhouette.',
      'Natural gemstones have long been treasured for their individuality. Their depth of colour, distinctive veining and organic character bring a sense of richness that only nature can create, making every necklace as unique as the woman who wears it.',
      'Handcrafted in Abu Dhabi, the necklace combines natural gemstones with one of Bint Saeed’s House Codes. Inspired by the warm desert tones surrounding Al Ain, the Al Ain Rosette appears throughout the House’s jewellery and ready-to-wear collections as a signature expression of Bint Saeed’s design language.',
      'Complete the look by pairing the necklace with the matching Al Ain Rosette Earrings and the House’s signature Bint Saeed Strands.',
    ],
    featuresTitle: 'Features',
    features: [
      'Bint Saeed Signature House Codes: Al Ain Rosette',
      'Handcrafted in Abu Dhabi, United Arab Emirates',
      'Hand-strung natural malachite gemstone beads (approximately 5 mm)',
      'Gold-plated hematite accent beads woven throughout the design',
      'Signature Al Ain Rosette hand-carved from natural Carnelian (approximately 15 mm)',
      'Convertible design, wear as a single long necklace or doubled around the neck',
      'Gold-tone signature clasp with adjustable extension chain',
      'Each natural stone is unique in colour, veining and natural character',
      'Designed to coordinate with the Al Ain Oasis Earrings - Malachite and Signature Strand - Malachite',
      'Presented in a signature Bint Saeed gift box',
    ],
    careLead: JEWELLERY_CARE_LEAD_EN,
    care: [...JEWELLERY_CARE_EN],
    faq: [
      {
        question: 'What is the Al Ain Oasis Necklace - Malachite made from?',
        answer: [
          'The necklace is handcrafted using natural malachite gemstone beads, gold-plated hematite accent beads and the House’s signature Al Ain Rosette, hand-carved from natural Carnelian. It is finished with a gold-tone clasp and adjustable extension chain.',
          'Malachite is a naturally occurring gemstone formed over thousands of years in copper-rich regions. Celebrated for its distinctive green bands and depth of colour, every malachite bead is unique, ensuring no two Bint Saeed creations are ever exactly alike.',
        ],
      },
      {
        question: 'What is the Al Ain Rosette?',
        answer:
          'The Al Ain Rosette is one of Bint Saeed’s House Codes. Hand-carved from natural Carnelian, it is inspired by the warm desert tones surrounding Al Ain, the historic oasis city of Abu Dhabi in the United Arab Emirates. Surrounded by palm groves, mountain landscapes and centuries of Emirati heritage, Al Ain is celebrated as one of the country’s most treasured cultural landscapes. The Al Ain Rosette carries this inspiration throughout the House’s jewellery and ready-to-wear collections.',
      },
      {
        question: 'Is there a matching Signature Strand available?',
        answer:
          'Yes. The Al Ain Rosette Malachite Signature Strand has been designed to complement the necklace and may be attached to selected Bint Saeed abayas, dresses and tailoring, allowing your jewellery and garments to share the same natural gemstone details. Paired with the matching Al Ain Rosette Earrings, it creates a complete expression of the House’s natural stone collection.',
      },
      {
        question: 'Can the necklace be worn in different ways?',
        answer:
          'Yes. The Al Ain Oasis Necklace - Malachite is designed to be worn as a single long necklace or doubled around the neck to create a shorter layered silhouette.',
      },
      {
        question: 'Is every necklace identical?',
        answer:
          'No. Every Bint Saeed creation features natural gemstones. Variations in colour, veining and natural characteristics are part of the individuality of each creation and should be celebrated as a hallmark of natural materials.',
      },
      {
        question: 'Where is the necklace made?',
        answer:
          'Every Al Ain Oasis Necklace - Malachite is handcrafted in Abu Dhabi, United Arab Emirates.',
      },
      {
        question: 'Does the necklace arrive in gift packaging?',
        answer:
          'Yes. Every Al Ain Oasis Necklace - Malachite is presented in a signature Bint Saeed gift box, making it ideal for gifting and safekeeping.',
      },
      {
        question: 'How should I care for my necklace?',
        answer:
          JEWELLERY_CARE_FAQ_NECKLACE_EN,
      },
    ],
  },
  ar: {
    introParagraphs: [
      'بعض القطع تصبح جزءاً من الطريقة التي يُعرَف بها حضورك. قلادة القوع روزيت الملاكيت مصنوعة يدوياً من أحجار الملاكيت الطبيعية، مع خرز هيمايت مطلي بالذهب، ومُنتهية برمز الدار «روزيت القوع» المنحوت يدوياً من حجر العقيق الطبيعي. صُممت لتتكيف مع كل مناسبة؛ يمكن ارتداؤها كسلسلة طويلة واحدة أو مضاعفتها حول العنق لإطلالة أقصر بطبقات.',
      'لطالما اُعتبرت الأحجار الطبيعية ثمينة لتميزها الفردي. عمق لونها وعروقها المميزة وطابعها العضوي يمنحان ثراءً لا يخلقه سوى الطبيعة، فتصبح كل قلادة فريدة كالمرأة التي ترتديها.',
      'صُنعت يدوياً في أبوظبي، وتجمع القلادة بين الأحجار الطبيعية وأحد رموز Bint Saeed. مستوحاة من درجات الصحراء الدافئة المحيطة بالعين، يظهر روزيت القوع في مجموعات المجوهرات والجاهز في الدار كتعبير توقيعي عن لغة تصميم Bint Saeed.',
      'أكملي الإطلالة بمزاوجة القلادة مع أقراط القوع روزيت المطابقة وخيوط Bint Saeed التوقيعية.',
    ],
    featuresTitle: 'المميزات',
    features: [
      'رمز الدار: روزيت القوع',
      'صُنع يدويًا في أبوظبي، الإمارات العربية المتحدة',
      'خرز ملاكيت طبيعي مُرصّع يدوياً (حوالي 5 مم)',
      'خرز هيمايت مطلي بالذهب مُدمج في التصميم',
      'تفصيل روزيت القوع منحوت يدويًا من العقيق الطبيعي (حوالي 15 مم)',
      'تصميم قابل للتحويل: ارتداء طويل أو مزدوج حول العنق',
      'إغلاق توقيع ذهبي مع سلسلة تمديد قابلة للتعديل',
      'كل حجر طبيعي فريد في لونه وعروقه وطابعه الطبيعي',
      'مصممة للتنسيق مع أقراط القوع روزيت وخيوط Bint Saeed',
      'تُقدَّم في علبة هدايا Bint Saeed',
    ],
    careLead: JEWELLERY_CARE_LEAD_AR,
    care: [...JEWELLERY_CARE_AR],
    faq: [
      {
        question: 'ممّ تُصنع قلادة القوع روزيت الملاكيت؟',
        answer: [
          'تُصنع القلادة يدوياً من خرز ملاكيت طبيعي، وخرز هيمايت مطلي بالذهب، ورمز الدار «روزيت القوع» المنحوت يدوياً من العقيق الطبيعي، مع إغلاق ذهبي وسلسلة تمديد قابلة للتعديل.',
          'الملاكيت حجر كريم طبيعي يتشكّل على مدى آلاف السنين في مناطق غنية بالنحاس. ويُقدَّر لعروقه الخضراء المميزة وعمق لونه، وكل خرزة ملاكيت فريدة، فلا تتطابق قطعتان من Bint Saeed تماماً.',
        ],
      },
      {
        question: 'ما هو روزيت القوع؟',
        answer:
          'روزيت القوع أحد رموز Bint Saeed. يُنحت يدوياً من العقيق الطبيعي، مستوحى من درجات الصحراء الدافئة المحيطة بالعين، مدينة الواحة التاريخية في أبوظبي بالإمارات العربية المتحدة. محاطة ببساتين النخيل ومناظر جبلية وقرون من التراث الإماراتي، تُعد العين من أثمن المشاهد الثقافية في الدولة. يحمل روزيت القوع هذا الإلهام في مجموعات المجوهرات والجاهز في الدار.',
      },
      {
        question: 'هل يتوفر Signature Strand مطابق؟',
        answer:
          'نعم. صُمم Al Ain Rosette Malachite Signature Strand ليكمل القلادة ويمكن تثبيته على عباءات وفساتين وقطع خياطة مختارة من Bint Saeed، لتتشارك مجوهراتك وملابسك في تفاصيل الأحجار الطبيعية نفسها. مع أقراط القوع روزيت المطابقة، يُكمل تعبيراً متكاملاً عن مجموعة الأحجار الطبيعية في الدار.',
      },
      {
        question: 'هل يمكن ارتداء القلادة بطرق مختلفة؟',
        answer:
          'نعم. صُممت قلادة القوع روزيت الملاكيت لتُرتدى كسلسلة طويلة واحدة أو مضاعفة حول العنق لإطلالة أقصر بطبقات.',
      },
      {
        question: 'هل كل قلادة مطابقة للأخرى؟',
        answer:
          'لا. كل قطعة من Bint Saeed تتضمن أحجاراً طبيعية. اختلافات اللون والعروق والسمات الطبيعية جزء من تميز كل قطعة ويُعد سمة من سمات المواد الطبيعية.',
      },
      {
        question: 'أين تُصنع القلادة؟',
        answer: 'تُصنع كل قلادة القوع روزيت الملاكيت يدوياً في أبوظبي، الإمارات العربية المتحدة.',
      },
      {
        question: 'هل تصل القلادة في تغليف هدايا؟',
        answer:
          'نعم. تُقدَّم كل قلادة القوع روزيت الملاكيت في علبة هدايا توقيعية من Bint Saeed، مثالية للإهداء والحفظ.',
      },
      {
        question: 'كيف أعتني بقلادتي؟',
        answer:
          JEWELLERY_CARE_FAQ_NECKLACE_AR,
      },
    ],
  },
}

const ROSE_QUARTZ_PACK: Partial<Record<AppLocale, NecklaceEarringPdpContentPack>> = {
  en: {
    introParagraphs: [
      'Elegant in its simplicity, the Al Ain Oasis Necklace - Rose Quartz brings together the gentle beauty of natural rose quartz with the House’s signature Al Ain Rosette, hand-carved from natural Carnelian. Delicately accented with gold-plated hematite beads, the necklace may be worn as a single long strand or doubled around the neck for a more layered silhouette.',
      'Valued for centuries, natural gemstones are admired for their individuality. The soft blush tones of rose quartz, combined with the warmth of Carnelian and luminous gold accents, create a composition that feels both timeless and distinctive. As every stone is formed by nature, each necklace possesses its own unique colour, veining and character.',
      'Handcrafted in Abu Dhabi, the necklace reflects Bint Saeed’s appreciation for natural materials and enduring craftsmanship. Complete the look with the matching Al Ain Rosette Earrings and the Al Ain Rosette Rose Quartz Signature Strand, designed to complement selected Bint Saeed abayas, dresses and tailoring.',
    ],
    featuresTitle: 'Features',
    features: [
      'Bint Saeed Signature House Codes: Al Ain Rosette',
      'Handcrafted in Abu Dhabi, United Arab Emirates',
      'Natural rose quartz gemstone beads (approximately 5 mm)',
      'Gold-plated hematite accent beads throughout the design',
      'Signature Al Ain Rosette hand-carved from natural Carnelian (approximately 15 mm)',
      'Convertible design, wear as a single long necklace or doubled around the neck',
      'Gold-tone signature clasp with adjustable extension chain',
      'Each natural gemstone is unique in colour, veining and natural character',
      'Designed to coordinate with the Al Quaa Earrings - Rose Quartz and Signature Strand - Rose Quartz',
      'Presented in a signature Bint Saeed gift box',
    ],
    careLead: JEWELLERY_CARE_LEAD_EN,
    care: [...JEWELLERY_CARE_EN],
    faq: [
      {
        question: 'What is the Al Ain Oasis Necklace - Rose Quartz made from?',
        answer: [
          'The necklace is handcrafted using natural rose quartz gemstone beads, gold-plated hematite accent beads and the House’s signature Al Ain Rosette, hand-carved from natural Carnelian. It is completed with a gold-tone clasp and adjustable extension chain.',
          'Rose quartz is a naturally occurring variety of quartz, admired for its delicate pink tones and subtle translucency. Every gemstone is unique, making each Bint Saeed necklace one of a kind.',
        ],
      },
      {
        question: 'What is the Al Ain Rosette?',
        answer:
          'The Al Ain Rosette is one of Bint Saeed’s House Codes. Hand-carved from natural Carnelian, it is inspired by the warm desert tones surrounding Al Ain, the historic oasis city of Abu Dhabi in the United Arab Emirates. Surrounded by palm groves, mountain landscapes and centuries of Emirati heritage, Al Ain is celebrated as one of the country’s most treasured cultural landscapes. The Al Ain Rosette carries this inspiration throughout the House’s jewellery and ready-to-wear collections.',
      },
      {
        question: 'Is there a matching Signature Strand available?',
        answer:
          'Yes. The Al Ain Rosette Rose Quartz Signature Strand has been designed to complement the necklace and may be attached to selected Bint Saeed abayas, dresses and tailoring, allowing your jewellery and garments to share the same natural gemstone details. Paired with the matching Al Ain Rosette Earrings, it creates a complete expression of the House’s natural stone collection.',
      },
      {
        question: 'Can the necklace be worn in different ways?',
        answer:
          'Yes. The necklace may be worn as a single long necklace or doubled around the neck to create a shorter layered silhouette.',
      },
      {
        question: 'Is every necklace identical?',
        answer:
          'No. Every Bint Saeed creation features natural gemstones. Variations in colour, veining and natural characteristics are part of the individuality of each creation and should be celebrated as a hallmark of natural materials.',
      },
      {
        question: 'Where is the necklace made?',
        answer:
          'Every Al Ain Oasis Necklace - Rose Quartz is handcrafted in Abu Dhabi, United Arab Emirates.',
      },
      {
        question: 'Does the necklace arrive in gift packaging?',
        answer:
          'Yes. Every Al Ain Oasis Necklace - Rose Quartz is presented in a signature Bint Saeed gift box, making it ideal for gifting and safekeeping.',
      },
      {
        question: 'How should I care for my necklace?',
        answer:
          JEWELLERY_CARE_FAQ_NECKLACE_EN,
      },
    ],
  },
  ar: {
    introParagraphs: [
      'أنيقة في بساطتها، تجمع قلادة القوع روزيت الكوارتز الوردي بين جمال الكوارتز الوردي الطبيعي اللطيف ورمز الدار «روزيت القوع» المنحوت يدوياً من العقيق الطبيعي. مع لمسات من خرز الهيمايت المطلي بالذهب، يمكن ارتداؤها كسلسلة طويلة واحدة أو مضاعفتها حول العنق لإطلالة أكثر طبقات.',
      'لطالما اُعجب الناس بالأحجار الطبيعية لتميزها عبر القرون. درجات الوردي الناعمة للكوارتز الوردي، مع دفء العقيق ولمسات الذهب المضيئة، تخلق تركيبة تبدو خالدة ومميزة في آنٍ واحد. وبما أن كل حجر يتشكّل في الطبيعة، تتمتع كل قلادة بلونها وعروقها وطابعها الفريد.',
      'صُنعت يدوياً في أبوظبي، وتعكس القلادة تقدير Bint Saeed للمواد الطبيعية والحرفية الدائمة. أكملي الإطلالة مع أقراط القوع روزيت المطابقة وAl Ain Rosette Rose Quartz Signature Strand، المصمم ليكمل عباءات وفساتين وقطع خياطة مختارة من Bint Saeed.',
    ],
    featuresTitle: 'المميزات',
    features: [
      'رمز الدار: روزيت القوع',
      'صُنع يدويًا في أبوظبي، الإمارات العربية المتحدة',
      'خرز كوارتز وردي طبيعي (حوالي 5 مم)',
      'خرز هيمايت مطلي بالذهب مُدمج في التصميم',
      'تفصيل روزيت القوع منحوت يدويًا من العقيق الطبيعي (حوالي 15 مم)',
      'تصميم قابل للتحويل: ارتداء طويل أو مزدوج حول العنق',
      'إغلاق توقيع ذهبي مع سلسلة تمديد قابلة للتعديل',
      'كل حجر طبيعي فريد في لونه وعروقه وطابعه الطبيعي',
      'مصممة للتنسيق مع أقراط القوع روزيت وAl Ain Rosette Rose Quartz Signature Strand',
      'تُقدَّم في علبة هدايا توقيعية من Bint Saeed',
    ],
    careLead: JEWELLERY_CARE_LEAD_AR,
    care: [...JEWELLERY_CARE_AR],
    faq: [
      {
        question: 'ممّ تُصنع قلادة القوع روزيت الكوارتز الوردي؟',
        answer: [
          'تُصنع القلادة يدوياً من خرز كوارتز وردي طبيعي، وخرز هيمايت مطلي بالذهب، ورمز الدار «روزيت القوع» المنحوت يدوياً من العقيق الطبيعي، مع إغلاق ذهبي وسلسلة تمديد قابلة للتعديل.',
          'الكوارتز الوردي نوع طبيعي من الكوارتز، يُقدَّر لدرجاته الوردية الرقيقة وشفافيته اللطيفة. كل حجر فريد، فتصبح كل قلادة من Bint Saeed فريدة من نوعها.',
        ],
      },
      {
        question: 'ما هو روزيت القوع؟',
        answer:
          'روزيت القوع أحد رموز Bint Saeed. يُنحت يدوياً من العقيق الطبيعي، مستوحى من درجات الصحراء الدافئة المحيطة بالعين، مدينة الواحة التاريخية في أبوظبي بالإمارات العربية المتحدة. محاطة ببساتين النخيل ومناظر جبلية وقرون من التراث الإماراتي، تُعد العين من أثمن المشاهد الثقافية في الدولة. يحمل روزيت القوع هذا الإلهام في مجموعات المجوهرات والجاهز في الدار.',
      },
      {
        question: 'هل يتوفر Signature Strand مطابق؟',
        answer:
          'نعم. صُمم Al Ain Rosette Rose Quartz Signature Strand ليكمل القلادة ويمكن تثبيته على عباءات وفساتين وقطع خياطة مختارة من Bint Saeed، لتتشارك مجوهراتك وملابسك في تفاصيل الأحجار الطبيعية نفسها. مع أقراط القوع روزيت المطابقة، يُكمل تعبيراً متكاملاً عن مجموعة الأحجار الطبيعية في الدار.',
      },
      {
        question: 'هل يمكن ارتداء القلادة بطرق مختلفة؟',
        answer:
          'نعم. يمكن ارتداؤها كقلادة طويلة واحدة أو مضاعفة حول العنق لإطلالة أقصر بطبقات.',
      },
      {
        question: 'هل كل قلادة مطابقة للأخرى؟',
        answer:
          'لا. كل قطعة من Bint Saeed تتضمن أحجاراً طبيعية. اختلافات اللون والعروق والسمات الطبيعية جزء من تميز كل قطعة ويُعد سمة من سمات المواد الطبيعية.',
      },
      {
        question: 'أين تُصنع القلادة؟',
        answer: 'تُصنع كل قلادة القوع روزيت الكوارتز الوردي يدوياً في أبوظبي، الإمارات العربية المتحدة.',
      },
      {
        question: 'هل تصل القلادة في تغليف هدايا؟',
        answer:
          'نعم. تُقدَّم كل قلادة القوع روزيت الكوارتز الوردي في علبة هدايا توقيعية من Bint Saeed، مثالية للإهداء والحفظ.',
      },
      {
        question: 'كيف أعتني بقلادتي؟',
        answer:
          JEWELLERY_CARE_FAQ_NECKLACE_AR,
      },
    ],
  },
}

const LAPIS_LAZULI_PACK: Partial<Record<AppLocale, NecklaceEarringPdpContentPack>> = {
  en: {
    introParagraphs: [
      'Rich in colour and natural character, the Al Ain Oasis Necklace - Lapis Lazuli is hand-strung from natural lapis lazuli gemstones, accented with gold-plated hematite beads and completed with the House’s signature Al Ain Rosette, hand-carved from natural Carnelian. Designed with versatility in mind, it may be worn as a single long necklace or doubled around the neck to create a more layered silhouette.',
      'Treasured since antiquity, lapis lazuli has long been admired for its deep royal blue colour and naturally occurring golden pyrite inclusions. Combined with the warmth of Carnelian and luminous gold accents, each necklace reflects the individuality that only natural gemstones can offer. No two creations are ever exactly alike.',
      'Handcrafted in Abu Dhabi, the necklace reflects Bint Saeed’s appreciation for natural materials and enduring craftsmanship. Complete the look with the matching Al Ain Rosette Earrings and the Al Ain Rosette Lapis Lazuli Signature Strand, designed to complement selected Bint Saeed abayas, dresses and tailoring.',
    ],
    featuresTitle: 'Features',
    features: [
      'Bint Saeed Signature House Codes: Al Ain Rosette',
      'Handcrafted in Abu Dhabi, United Arab Emirates',
      'Natural lapis lazuli gemstone beads (approximately 5 mm)',
      'Gold-plated hematite accent beads throughout the design',
      'Signature Al Ain Rosette hand-carved from natural Carnelian (approximately 15 mm)',
      'Convertible design, wear as a single long necklace or doubled around the neck',
      'Gold-tone signature clasp with adjustable extension chain',
      'Each natural gemstone displays its own colour, veining and pyrite inclusions',
      'Designed to coordinate with the Al Quaa Earrings - Lapis Lazuli and Signature Strand - Lapis Lazuli',
      'Presented in a signature Bint Saeed gift box',
    ],
    careLead: JEWELLERY_CARE_LEAD_EN,
    care: [...JEWELLERY_CARE_EN],
    faq: [
      {
        question: 'What is the Al Ain Oasis Necklace - Lapis Lazuli made from?',
        answer: [
          'The necklace is handcrafted using natural lapis lazuli gemstone beads, gold-plated hematite accent beads and the House’s signature Al Ain Rosette, hand-carved from natural Carnelian. It is completed with a gold-tone clasp and adjustable extension chain.',
          'Lapis lazuli is a naturally occurring gemstone, prized for its intense royal blue colour and distinctive golden pyrite inclusions. Every gemstone is unique, ensuring each Bint Saeed necklace possesses its own individual character.',
        ],
      },
      {
        question: 'What is the Al Ain Rosette?',
        answer:
          'The Al Ain Rosette is one of Bint Saeed’s House Codes. Hand-carved from natural Carnelian, it is inspired by the warm desert tones surrounding Al Ain, the historic oasis city of Abu Dhabi in the United Arab Emirates. Surrounded by palm groves, mountain landscapes and centuries of Emirati heritage, Al Ain is celebrated as one of the country’s most treasured cultural landscapes. The Al Ain Rosette carries this inspiration throughout the House’s jewellery and ready-to-wear collections.',
      },
      {
        question: 'Is there a matching Signature Strand available?',
        answer:
          'Yes. The Al Ain Rosette Lapis Lazuli Signature Strand has been designed to complement the necklace and may be attached to selected Bint Saeed abayas, dresses and tailoring, allowing your jewellery and garments to share the same natural gemstone details. Paired with the matching Al Ain Rosette Earrings, it creates a complete expression of the House’s natural stone collection.',
      },
      {
        question: 'Can the necklace be worn in different ways?',
        answer:
          'Yes. The necklace may be worn as a single long necklace or doubled around the neck to create a shorter layered silhouette.',
      },
      {
        question: 'Is every necklace identical?',
        answer:
          'No. Every Bint Saeed creation features natural gemstones. Variations in colour, veining, pyrite inclusions and natural characteristics are part of the individuality of each creation and should be celebrated as a hallmark of natural materials.',
      },
      {
        question: 'Where is the necklace made?',
        answer:
          'Every Al Ain Oasis Necklace - Lapis Lazuli is handcrafted in Abu Dhabi, United Arab Emirates.',
      },
      {
        question: 'Does the necklace arrive in gift packaging?',
        answer:
          'Yes. Every Al Ain Oasis Necklace - Lapis Lazuli is presented in a signature Bint Saeed gift box, making it ideal for gifting and safekeeping.',
      },
      {
        question: 'How should I care for my necklace?',
        answer:
          JEWELLERY_CARE_FAQ_NECKLACE_EN,
      },
    ],
  },
  ar: {
    introParagraphs: [
      'غنية باللون والطابع الطبيعي، تُرصَّع قلادة القوع روزيت اللازورد يدوياً من أحجار اللازورد الطبيعية، مع خرز هيمايت مطلي بالذهب، وتكتمل برمز الدار «روزيت القوع» المنحوت يدوياً من العقيق الطبيعي. صُممت بمرونة في الارتداء؛ يمكن ارتداؤها كقلادة طويلة واحدة أو مضاعفتها حول العنق لإطلالة أكثر طبقات.',
      'يُقدَّر اللازورد منذ العصور القديمة لأزرقه الملكي العميق وتضمينات البيريت الذهبية الطبيعية. مع دفء العقيق ولمسات الذهب المضيئة، تعكس كل قلادة التميز الذي لا تمنحه سوى الأحجار الطبيعية. لا تتطابق قطعتان تماماً.',
      'صُنعت يدوياً في أبوظبي، وتعكس القلادة تقدير Bint Saeed للمواد الطبيعية والحرفية الدائمة. أكملي الإطلالة مع أقراط القوع روزيت المطابقة وAl Ain Rosette Lapis Lazuli Signature Strand، المصمم ليكمل عباءات وفساتين وقطع خياطة مختارة من Bint Saeed.',
    ],
    featuresTitle: 'المميزات',
    features: [
      'رمز الدار: روزيت القوع',
      'صُنع يدويًا في أبوظبي، الإمارات العربية المتحدة',
      'خرز لازورد طبيعي (حوالي 5 مم)',
      'خرز هيمايت مطلي بالذهب مُدمج في التصميم',
      'تفصيل روزيت القوع منحوت يدويًا من العقيق الطبيعي (حوالي 15 مم)',
      'تصميم قابل للتحويل: ارتداء طويل أو مزدوج حول العنق',
      'إغلاق توقيع ذهبي مع سلسلة تمديد قابلة للتعديل',
      'كل حجر طبيعي يتميز بلونه وعروقه وتضمينات البيريت الخاصة به',
      'مصممة للتنسيق مع أقراط القوع روزيت وAl Ain Rosette Lapis Lazuli Signature Strand',
      'تُقدَّم في علبة هدايا توقيعية من Bint Saeed',
    ],
    careLead: JEWELLERY_CARE_LEAD_AR,
    care: [...JEWELLERY_CARE_AR],
    faq: [
      {
        question: 'ممّ تُصنع قلادة القوع روزيت اللازورد؟',
        answer: [
          'تُصنع القلادة يدوياً من خرز لازورد طبيعي، وخرز هيمايت مطلي بالذهب، ورمز الدار «روزيت القوع» المنحوت يدوياً من العقيق الطبيعي، مع إغلاق ذهبي وسلسلة تمديد قابلة للتعديل.',
          'اللازورد حجر طبيعي يُقدَّر لأزرقه الملكي الكثيف وتضمينات البيريت الذهبية المميزة. كل حجر فريد، فتتمتع كل قلادة من Bint Saeed بطابعها الفردي.',
        ],
      },
      {
        question: 'ما هو روزيت القوع؟',
        answer:
          'روزيت القوع أحد رموز Bint Saeed. يُنحت يدوياً من العقيق الطبيعي، مستوحى من درجات الصحراء الدافئة المحيطة بالعين، مدينة الواحة التاريخية في أبوظبي بالإمارات العربية المتحدة. محاطة ببساتين النخيل ومناظر جبلية وقرون من التراث الإماراتي، تُعد العين من أثمن المشاهد الثقافية في الدولة. يحمل روزيت القوع هذا الإلهام في مجموعات المجوهرات والجاهز في الدار.',
      },
      {
        question: 'هل يتوفر Signature Strand مطابق؟',
        answer:
          'نعم. صُمم Al Ain Rosette Lapis Lazuli Signature Strand ليكمل القلادة ويمكن تثبيته على عباءات وفساتين وقطع خياطة مختارة من Bint Saeed، لتتشارك مجوهراتك وملابسك في تفاصيل الأحجار الطبيعية نفسها. مع أقراط القوع روزيت المطابقة، يُكمل تعبيراً متكاملاً عن مجموعة الأحجار الطبيعية في الدار.',
      },
      {
        question: 'هل يمكن ارتداء القلادة بطرق مختلفة؟',
        answer:
          'نعم. يمكن ارتداؤها كقلادة طويلة واحدة أو مضاعفة حول العنق لإطلالة أقصر بطبقات.',
      },
      {
        question: 'هل كل قلادة مطابقة للأخرى؟',
        answer:
          'لا. كل قطعة من Bint Saeed تتضمن أحجاراً طبيعية. اختلافات اللون والعروق وتضمينات البيريت والسمات الطبيعية جزء من تميز كل قطعة ويُعد سمة من سمات المواد الطبيعية.',
      },
      {
        question: 'أين تُصنع القلادة؟',
        answer: 'تُصنع كل قلادة القوع روزيت اللازورد يدوياً في أبوظبي، الإمارات العربية المتحدة.',
      },
      {
        question: 'هل تصل القلادة في تغليف هدايا؟',
        answer:
          'نعم. تُقدَّم كل قلادة القوع روزيت اللازورد في علبة هدايا توقيعية من Bint Saeed، مثالية للإهداء والحفظ.',
      },
      {
        question: 'كيف أعتني بقلادتي؟',
        answer:
          JEWELLERY_CARE_FAQ_NECKLACE_AR,
      },
    ],
  },
}

const SUNSTONE_PACK: Partial<Record<AppLocale, NecklaceEarringPdpContentPack>> = {
  en: {
    introParagraphs: [
      'Radiant by nature, the Al Ain Oasis Necklace - Sunstone is hand-strung from natural sunstone gemstones, accented with gold-plated hematite beads and completed with the House’s signature Al Ain Rosette, hand-carved from natural Carnelian. Designed with versatility in mind, it may be worn as a single long necklace or doubled around the neck to create a shorter layered silhouette.',
      'Natural gemstones have been admired for generations for the individuality they bring to every creation. The warm peach and golden tones of sunstone, enhanced by its natural shimmer, are complemented by luminous gold accents and the rich warmth of Carnelian. As every gemstone is formed by nature, each necklace possesses its own distinctive colour, inclusions and character.',
      'Handcrafted in Abu Dhabi, the necklace reflects Bint Saeed’s appreciation for natural materials and enduring craftsmanship. Complete the look with the matching Al Ain Rosette Earrings and the Al Ain Rosette Sunstone Signature Strand, designed to complement selected Bint Saeed abayas, dresses and tailoring.',
    ],
    featuresTitle: 'Features',
    features: [
      'Bint Saeed Signature House Codes: Al Ain Rosette',
      'Handcrafted in Abu Dhabi, United Arab Emirates',
      'Natural sunstone gemstone beads (approximately 5 mm)',
      'Gold-plated hematite accent beads throughout the design',
      'Signature Al Ain Rosette hand-carved from natural Carnelian (approximately 15 mm)',
      'Convertible design, wear as a single long necklace or doubled around the neck',
      'Gold-tone signature clasp with adjustable extension chain',
      'Each natural gemstone displays its own colour, shimmer and natural character',
      'Designed to coordinate with the Al Ain Oasis Earrings - Orange Jade and Signature Strand - Sunstone',
      'Presented in a signature Bint Saeed gift box',
    ],
    careLead: JEWELLERY_CARE_LEAD_EN,
    care: [...JEWELLERY_CARE_EN],
    faq: [
      {
        question: 'What is the Al Ain Oasis Necklace - Sunstone made from?',
        answer: [
          'The necklace is handcrafted using natural sunstone gemstone beads, gold-plated hematite accent beads and the House’s signature Al Ain Rosette, hand-carved from natural Carnelian. It is completed with a gold-tone clasp and adjustable extension chain.',
          'Sunstone is a naturally occurring feldspar gemstone, admired for its warm peach, golden and copper tones, together with its characteristic natural shimmer known as aventurescence. Every gemstone is unique, ensuring each Bint Saeed necklace possesses its own individual character.',
        ],
      },
      {
        question: 'What is the Al Ain Rosette?',
        answer:
          'The Al Ain Rosette is one of Bint Saeed’s House Codes. Hand-carved from natural Carnelian, it is inspired by the warm desert tones surrounding Al Ain, the historic oasis city of Abu Dhabi in the United Arab Emirates. Surrounded by palm groves, mountain landscapes and centuries of Emirati heritage, Al Ain is celebrated as one of the country’s most treasured cultural landscapes. The Al Ain Rosette carries this inspiration throughout the House’s jewellery and ready-to-wear collections.',
      },
      {
        question: 'Is there a matching Signature Strand available?',
        answer:
          'Yes. The Al Ain Rosette Sunstone Signature Strand has been designed to complement the necklace and may be attached to selected Bint Saeed abayas, dresses and tailoring, allowing your jewellery and garments to share the same natural gemstone details. Paired with the matching Al Ain Rosette Earrings, it creates a complete expression of the House’s natural stone collection.',
      },
      {
        question: 'Can the necklace be worn in different ways?',
        answer:
          'Yes. The necklace may be worn as a single long necklace or doubled around the neck to create a shorter layered silhouette.',
      },
      {
        question: 'Is every necklace identical?',
        answer:
          'No. Every Bint Saeed creation features natural gemstones. Variations in colour, natural shimmer, inclusions and characteristics are part of the individuality of each creation and should be celebrated as a hallmark of natural materials.',
      },
      {
        question: 'Where is the necklace made?',
        answer:
          'Every Al Ain Oasis Necklace - Sunstone is handcrafted in Abu Dhabi, United Arab Emirates.',
      },
      {
        question: 'Does the necklace arrive in gift packaging?',
        answer:
          'Yes. Every Al Ain Oasis Necklace - Sunstone is presented in a signature Bint Saeed gift box, making it ideal for gifting and safekeeping.',
      },
      {
        question: 'How should I care for my necklace?',
        answer:
          JEWELLERY_CARE_FAQ_NECKLACE_EN,
      },
    ],
  },
  ar: {
    introParagraphs: [
      'مشرقة بطبيعتها، تُرصَّع قلادة القوع روزيت حجر الشمس يدوياً من أحجار حجر الشمس الطبيعية، مع خرز هيمايت مطلي بالذهب، وتكتمل برمز الدار «روزيت القوع» المنحوت يدوياً من العقيق الطبيعي. صُممت بمرونة في الارتداء؛ يمكن ارتداؤها كقلادة طويلة واحدة أو مضاعفتها حول العنق لإطلالة أقصر بطبقات.',
      'يُعجب الناس بالأحجار الطبيعية منذ أجيال للتميز الذي تمنحه كل قطعة. درجات الخوخ والذهب الدافئة لحجر الشمس، مع بريقه الطبيعي، تتناغم مع لمسات الذهب المضيئة ودفء العقيق. وبما أن كل حجر يتشكّل في الطبيعة، تتمتع كل قلادة بلونها وتضميناتها وطابعها المميز.',
      'صُنعت يدوياً في أبوظبي، وتعكس القلادة تقدير Bint Saeed للمواد الطبيعية والحرفية الدائمة. أكملي الإطلالة مع أقراط القوع روزيت المطابقة وAl Ain Rosette Sunstone Signature Strand، المصمم ليكمل عباءات وفساتين وقطع خياطة مختارة من Bint Saeed.',
    ],
    featuresTitle: 'المميزات',
    features: [
      'رمز الدار: روزيت القوع',
      'صُنع يدويًا في أبوظبي، الإمارات العربية المتحدة',
      'خرز حجر شمس طبيعي (حوالي 5 مم)',
      'خرز هيمايت مطلي بالذهب مُدمج في التصميم',
      'تفصيل روزيت القوع منحوت يدويًا من العقيق الطبيعي (حوالي 15 مم)',
      'تصميم قابل للتحويل: ارتداء طويل أو مزدوج حول العنق',
      'إغلاق توقيع ذهبي مع سلسلة تمديد قابلة للتعديل',
      'كل حجر طبيعي يتميز بلونه وبريقه وطابعه الطبيعي',
      'مصممة للتنسيق مع أقراط القوع روزيت وAl Ain Rosette Sunstone Signature Strand',
      'تُقدَّم في علبة هدايا توقيعية من Bint Saeed',
    ],
    careLead: JEWELLERY_CARE_LEAD_AR,
    care: [...JEWELLERY_CARE_AR],
    faq: [
      {
        question: 'ممّ تُصنع قلادة القوع روزيت حجر الشمس؟',
        answer: [
          'تُصنع القلادة يدوياً من خرز حجر شمس طبيعي، وخرز هيمايت مطلي بالذهب، ورمز الدار «روزيت القوع» المنحوت يدوياً من العقيق الطبيعي، مع إغلاق ذهبي وسلسلة تمديد قابلة للتعديل.',
          'حجر الشمس نوع طبيعي من الفلسبار، يُقدَّر لدرجاته الدافئة من الخوخ والذهب والنحاس، مع بريقه الطبيعي المميز المعروف بالتأثير اللامع. كل حجر فريد، فتتمتع كل قلادة من Bint Saeed بطابعها الفردي.',
        ],
      },
      {
        question: 'ما هو روزيت القوع؟',
        answer:
          'روزيت القوع أحد رموز Bint Saeed. يُنحت يدوياً من العقيق الطبيعي، مستوحى من درجات الصحراء الدافئة المحيطة بالعين، مدينة الواحة التاريخية في أبوظبي بالإمارات العربية المتحدة. محاطة ببساتين النخيل ومناظر جبلية وقرون من التراث الإماراتي، تُعد العين من أثمن المشاهد الثقافية في الدولة. يحمل روزيت القوع هذا الإلهام في مجموعات المجوهرات والجاهز في الدار.',
      },
      {
        question: 'هل يتوفر Signature Strand مطابق؟',
        answer:
          'نعم. صُمم Al Ain Rosette Sunstone Signature Strand ليكمل القلادة ويمكن تثبيته على عباءات وفساتين وقطع خياطة مختارة من Bint Saeed، لتتشارك مجوهراتك وملابسك في تفاصيل الأحجار الطبيعية نفسها. مع أقراط القوع روزيت المطابقة، يُكمل تعبيراً متكاملاً عن مجموعة الأحجار الطبيعية في الدار.',
      },
      {
        question: 'هل يمكن ارتداء القلادة بطرق مختلفة؟',
        answer:
          'نعم. يمكن ارتداؤها كقلادة طويلة واحدة أو مضاعفة حول العنق لإطلالة أقصر بطبقات.',
      },
      {
        question: 'هل كل قلادة مطابقة للأخرى؟',
        answer:
          'لا. كل قطعة من Bint Saeed تتضمن أحجاراً طبيعية. اختلافات اللون والبريق الطبيعي والتضمينات والسمات جزء من تميز كل قطعة ويُعد سمة من سمات المواد الطبيعية.',
      },
      {
        question: 'أين تُصنع القلادة؟',
        answer: 'تُصنع كل قلادة القوع روزيت حجر الشمس يدوياً في أبوظبي، الإمارات العربية المتحدة.',
      },
      {
        question: 'هل تصل القلادة في تغليف هدايا؟',
        answer:
          'نعم. تُقدَّم كل قلادة القوع روزيت حجر الشمس في علبة هدايا توقيعية من Bint Saeed، مثالية للإهداء والحفظ.',
      },
      {
        question: 'كيف أعتني بقلادتي؟',
        answer:
          JEWELLERY_CARE_FAQ_NECKLACE_AR,
      },
    ],
  },
}

const TIGER_EYE_PACK: Partial<Record<AppLocale, NecklaceEarringPdpContentPack>> = {
  en: {
    introParagraphs: [
      'Distinctive in colour and character, the Al Ain Oasis Necklace - Tiger Eye is hand-strung from natural tiger eye gemstones, accented with gold-plated hematite beads and completed with the House’s signature Al Ain Rosette, hand-carved from natural Carnelian. Designed with versatility in mind, it may be worn as a single long necklace or doubled around the neck to create a shorter layered silhouette.',
      'Natural gemstones have been admired for generations for their individuality. The rich golden-brown tones of tiger eye, together with its distinctive silky lustre, create a composition that is both timeless and expressive. As every gemstone is formed by nature, each necklace possesses its own unique colour, chatoyancy and natural character.',
      'Handcrafted in Abu Dhabi, the necklace reflects Bint Saeed’s appreciation for natural materials and enduring craftsmanship. Complete the look with the matching Al Ain Rosette Earrings and the Al Ain Rosette Tiger Eye Signature Strand, designed to complement selected Bint Saeed abayas, dresses and tailoring.',
    ],
    featuresTitle: 'Features',
    features: [
      'Bint Saeed Signature House Codes: Al Ain Rosette',
      'Handcrafted in Abu Dhabi, United Arab Emirates',
      'Natural tiger eye gemstone beads (approximately 5 mm)',
      'Gold-plated hematite accent beads throughout the design',
      'Signature Al Ain Rosette hand-carved from natural Carnelian (approximately 15 mm)',
      'Convertible design, wear as a single long necklace or doubled around the neck',
      'Gold-tone signature clasp with adjustable extension chain',
      'Each natural gemstone displays its own colour, silky lustre and natural character',
      'Designed to coordinate with signature earrings and Signature Strand - Tiger Eye',
      'Presented in a signature Bint Saeed gift box',
    ],
    careLead: JEWELLERY_CARE_LEAD_EN,
    care: [...JEWELLERY_CARE_EN],
    faq: [
      {
        question: 'What is the Al Ain Oasis Necklace - Tiger Eye made from?',
        answer: [
          'The necklace is handcrafted using natural tiger eye gemstone beads, gold-plated hematite accent beads and the House’s signature Al Ain Rosette, hand-carved from natural Carnelian. It is completed with a gold-tone clasp and adjustable extension chain.',
          'Tiger eye is a naturally occurring gemstone admired for its rich golden-brown tones and distinctive silky optical effect, known as chatoyancy, which creates a moving band of light across the surface. Every gemstone is unique, ensuring each Bint Saeed necklace possesses its own individual character.',
        ],
      },
      {
        question: 'What is the Al Ain Rosette?',
        answer:
          'The Al Ain Rosette is one of Bint Saeed’s House Codes. Hand-carved from natural Carnelian, it is inspired by the warm desert tones surrounding Al Ain, the historic oasis city of Abu Dhabi in the United Arab Emirates. Surrounded by palm groves, mountain landscapes and centuries of Emirati heritage, Al Ain is celebrated as one of the country’s most treasured cultural landscapes. The Al Ain Rosette carries this inspiration throughout the House’s jewellery and ready-to-wear collections.',
      },
      {
        question: 'Is there a matching Signature Strand available?',
        answer:
          'Yes. The Al Ain Rosette Tiger Eye Signature Strand has been designed to complement the necklace and may be attached to selected Bint Saeed abayas, dresses and tailoring, allowing your jewellery and garments to share the same natural gemstone details. Paired with the matching Al Ain Rosette Earrings, it creates a complete expression of the House’s natural stone collection.',
      },
      {
        question: 'Can the necklace be worn in different ways?',
        answer:
          'Yes. The necklace may be worn as a single long necklace or doubled around the neck to create a shorter layered silhouette.',
      },
      {
        question: 'Is every necklace identical?',
        answer:
          'No. Every Bint Saeed creation features natural gemstones. Variations in colour, chatoyancy, inclusions and natural characteristics are part of the individuality of each creation and should be celebrated as a hallmark of natural materials.',
      },
      {
        question: 'Where is the necklace made?',
        answer:
          'Every Al Ain Oasis Necklace - Tiger Eye is handcrafted in Abu Dhabi, United Arab Emirates.',
      },
      {
        question: 'Does the necklace arrive in gift packaging?',
        answer:
          'Yes. Every Al Ain Oasis Necklace - Tiger Eye is presented in a signature Bint Saeed gift box, making it ideal for gifting and safekeeping.',
      },
      {
        question: 'How should I care for my necklace?',
        answer:
          JEWELLERY_CARE_FAQ_NECKLACE_EN,
      },
    ],
  },
  ar: {
    introParagraphs: [
      'مميزة باللون والطابع، تُرصَّع قلادة القوع روزيت عين النمر يدوياً من أحجار عين النمر الطبيعية، مع خرز هيمايت مطلي بالذهب، وتكتمل برمز الدار «روزيت القوع» المنحوت يدوياً من العقيق الطبيعي. صُممت بمرونة في الارتداء؛ يمكن ارتداؤها كقلادة طويلة واحدة أو مضاعفتها حول العنق لإطلالة أقصر بطبقات.',
      'يُعجب الناس بالأحجار الطبيعية منذ أجيال لتميزها. درجات الذهبي والبني الغنية لعين النمر، مع بريقها الحريري المميز، تخلق تركيبة خالدة ومعبّرة في آنٍ واحد. وبما أن كل حجر يتشكّل في الطبيعة، تتمتع كل قلادة بلونها وتأثيرها البصري اللامع وطابعها الفريد.',
      'صُنعت يدوياً في أبوظبي، وتعكس القلادة تقدير Bint Saeed للمواد الطبيعية والحرفية الدائمة. أكملي الإطلالة مع أقراط القوع روزيت المطابقة وAl Ain Rosette Tiger Eye Signature Strand، المصمم ليكمل عباءات وفساتين وقطع خياطة مختارة من Bint Saeed.',
    ],
    featuresTitle: 'المميزات',
    features: [
      'رمز الدار: روزيت القوع',
      'صُنع يدويًا في أبوظبي، الإمارات العربية المتحدة',
      'خرز عين نمر طبيعي (حوالي 5 مم)',
      'خرز هيمايت مطلي بالذهب مُدمج في التصميم',
      'تفصيل روزيت القوع منحوت يدويًا من العقيق الطبيعي (حوالي 15 مم)',
      'تصميم قابل للتحويل: ارتداء طويل أو مزدوج حول العنق',
      'إغلاق توقيع ذهبي مع سلسلة تمديد قابلة للتعديل',
      'كل حجر طبيعي يتميز بلونه وبريقه الحريري وطابعه الطبيعي',
      'مصممة للتنسيق مع أقراط القوع روزيت وAl Ain Rosette Tiger Eye Signature Strand',
      'تُقدَّم في علبة هدايا توقيعية من Bint Saeed',
    ],
    careLead: JEWELLERY_CARE_LEAD_AR,
    care: [...JEWELLERY_CARE_AR],
    faq: [
      {
        question: 'ممّ تُصنع قلادة القوع روزيت عين النمر؟',
        answer: [
          'تُصنع القلادة يدوياً من خرز عين نمر طبيعي، وخرز هيمايت مطلي بالذهب، ورمز الدار «روزيت القوع» المنحوت يدوياً من العقيق الطبيعي، مع إغلاق ذهبي وسلسلة تمديد قابلة للتعديل.',
          'عين النمر حجر طبيعي يُقدَّر لدرجاته الذهبية والبنية الغنية وتأثيره البصري الحريري المميز المعروف بالتأثير اللامع، الذي يخلق شريطاً متحركاً من الضوء على السطح. كل حجر فريد، فتتمتع كل قلادة من Bint Saeed بطابعها الفردي.',
        ],
      },
      {
        question: 'ما هو روزيت القوع؟',
        answer:
          'روزيت القوع أحد رموز Bint Saeed. يُنحت يدوياً من العقيق الطبيعي، مستوحى من درجات الصحراء الدافئة المحيطة بالعين، مدينة الواحة التاريخية في أبوظبي بالإمارات العربية المتحدة. محاطة ببساتين النخيل ومناظر جبلية وقرون من التراث الإماراتي، تُعد العين من أثمن المشاهد الثقافية في الدولة. يحمل روزيت القوع هذا الإلهام في مجموعات المجوهرات والجاهز في الدار.',
      },
      {
        question: 'هل يتوفر Signature Strand مطابق؟',
        answer:
          'نعم. صُمم Al Ain Rosette Tiger Eye Signature Strand ليكمل القلادة ويمكن تثبيته على عباءات وفساتين وقطع خياطة مختارة من Bint Saeed، لتتشارك مجوهراتك وملابسك في تفاصيل الأحجار الطبيعية نفسها. مع أقراط القوع روزيت المطابقة، يُكمل تعبيراً متكاملاً عن مجموعة الأحجار الطبيعية في الدار.',
      },
      {
        question: 'هل يمكن ارتداء القلادة بطرق مختلفة؟',
        answer:
          'نعم. يمكن ارتداؤها كقلادة طويلة واحدة أو مضاعفة حول العنق لإطلالة أقصر بطبقات.',
      },
      {
        question: 'هل كل قلادة مطابقة للأخرى؟',
        answer:
          'لا. كل قطعة من Bint Saeed تتضمن أحجاراً طبيعية. اختلافات اللون والتأثير اللامع والتضمينات والسمات الطبيعية جزء من تميز كل قطعة ويُعد سمة من سمات المواد الطبيعية.',
      },
      {
        question: 'أين تُصنع القلادة؟',
        answer: 'تُصنع كل قلادة القوع روزيت عين النمر يدوياً في أبوظبي، الإمارات العربية المتحدة.',
      },
      {
        question: 'هل تصل القلادة في تغليف هدايا؟',
        answer:
          'نعم. تُقدَّم كل قلادة القوع روزيت عين النمر في علبة هدايا توقيعية من Bint Saeed، مثالية للإهداء والحفظ.',
      },
      {
        question: 'كيف أعتني بقلادتي؟',
        answer:
          JEWELLERY_CARE_FAQ_NECKLACE_AR,
      },
    ],
  },
}

const ONYX_PACK: Partial<Record<AppLocale, NecklaceEarringPdpContentPack>> = {
  en: {
    introParagraphs: [
      'Refined in its simplicity, the Al Ain Oasis Necklace - Onyx is hand-strung from natural black onyx gemstones, accented with gold-plated hematite beads and completed with the House’s signature Al Ain Rosette, hand-carved from natural Carnelian. Designed with versatility in mind, it may be worn as a single long necklace or doubled around the neck to create a shorter layered silhouette.',
      'Natural gemstones have been admired for generations for their individuality. The deep black tones of onyx create a striking contrast with the warmth of Carnelian and luminous gold accents, resulting in a composition that is both timeless and distinctive. As every gemstone is formed by nature, each necklace possesses its own subtle character and natural beauty.',
      'Handcrafted in Abu Dhabi, the necklace reflects Bint Saeed’s appreciation for natural materials and enduring craftsmanship. Complete the look with signature earrings and the Signature Strand - Onyx, designed to complement selected Bint Saeed abayas, dresses and tailoring.',
    ],
    featuresTitle: 'Features',
    features: [
      'Bint Saeed Signature House Codes: Al Ain Rosette',
      'Handcrafted in Abu Dhabi, United Arab Emirates',
      'Natural black onyx gemstone beads (approximately 5 mm)',
      'Gold-plated hematite accent beads throughout the design',
      'Signature Al Ain Rosette hand-carved from natural Carnelian (approximately 15 mm)',
      'Convertible design, wear as a single long necklace or doubled around the neck',
      'Gold-tone signature clasp with adjustable extension chain',
      'Each natural gemstone is unique in tone and natural character',
      'Designed to coordinate with signature earrings and Signature Strand - Onyx',
      'Presented in a signature Bint Saeed gift box',
    ],
    careLead: JEWELLERY_CARE_LEAD_EN,
    care: [...JEWELLERY_CARE_EN],
    faq: [
      {
        question: 'What is the Al Ain Oasis Necklace - Onyx made from?',
        answer: [
          'The necklace is handcrafted using natural black onyx gemstone beads, gold-plated hematite accent beads and the House’s signature Al Ain Rosette, hand-carved from natural Carnelian. It is completed with a gold-tone clasp and adjustable extension chain.',
          'Onyx is a naturally occurring variety of chalcedony, admired for its rich black colour and smooth polished finish. Every gemstone is unique, ensuring each Bint Saeed necklace possesses its own individual character.',
        ],
      },
      {
        question: 'What is the Al Ain Rosette?',
        answer:
          'The Al Ain Rosette is one of Bint Saeed’s House Codes. Hand-carved from natural Carnelian, it is inspired by the warm desert tones surrounding Al Ain, the historic oasis city of Abu Dhabi in the United Arab Emirates. Surrounded by palm groves, mountain landscapes and centuries of Emirati heritage, Al Ain is celebrated as one of the country’s most treasured cultural landscapes. The Al Ain Rosette carries this inspiration throughout the House’s jewellery and ready-to-wear collections.',
      },
      {
        question: 'Is there a matching Signature Strand available?',
        answer:
          'Yes. The Signature Strand - Onyx has been designed to complement the necklace and may be attached to selected Bint Saeed abayas, dresses and tailoring, allowing your jewellery and garments to share the same natural gemstone details. Paired with signature earrings, it creates a complete expression of the House’s natural stone collection.',
      },
      {
        question: 'Can the necklace be worn in different ways?',
        answer:
          'Yes. The necklace may be worn as a single long necklace or doubled around the neck to create a shorter layered silhouette.',
      },
      {
        question: 'Is every necklace identical?',
        answer:
          'No. Every Bint Saeed creation features natural gemstones. Variations in tone, inclusions and natural characteristics are part of the individuality of each creation and should be celebrated as a hallmark of natural materials.',
      },
      {
        question: 'Where is the necklace made?',
        answer:
          'Every Al Ain Oasis Necklace - Onyx is handcrafted in Abu Dhabi, United Arab Emirates.',
      },
      {
        question: 'Does the necklace arrive in gift packaging?',
        answer:
          'Yes. Every Al Ain Oasis Necklace - Onyx is presented in a signature Bint Saeed gift box, making it ideal for gifting and safekeeping.',
      },
      {
        question: 'How should I care for my necklace?',
        answer:
          JEWELLERY_CARE_FAQ_NECKLACE_EN,
      },
    ],
  },
  ar: {
    introParagraphs: [
      'راقية في بساطتها، تُرصَّع قلادة القوع روزيت الأونكس يدوياً من أحجار الأونكس الأسود الطبيعية، مع خرز هيمايت مطلي بالذهب، وتكتمل برمز الدار «روزيت القوع» المنحوت يدوياً من العقيق الطبيعي. صُممت بمرونة في الارتداء؛ يمكن ارتداؤها كقلادة طويلة واحدة أو مضاعفتها حول العنق لإطلالة أقصر بطبقات.',
      'يُعجب الناس بالأحجار الطبيعية منذ أجيال لتميزها. درجات الأسود العميقة للأونكس تخلق تبايناً لافتاً مع دفء العقيق ولمسات الذهب المضيئة، فتبدو التركيبة خالدة ومميزة في آنٍ واحد. وبما أن كل حجر يتشكّل في الطبيعة، تتمتع كل قلادة بطابعها الرقيق وجمالها الطبيعي.',
      'صُنعت يدوياً في أبوظبي، وتعكس القلادة تقدير Bint Saeed للمواد الطبيعية والحرفية الدائمة. أكملي الإطلالة مع الأقراط التوقيعية وSignature Strand — أونكس، المصمم ليكمل عباءات وفساتين وقطع خياطة مختارة من Bint Saeed.',
    ],
    featuresTitle: 'المميزات',
    features: [
      'رمز الدار: روزيت القوع',
      'صُنع يدويًا في أبوظبي، الإمارات العربية المتحدة',
      'خرز أونكس أسود طبيعي (حوالي 5 مم)',
      'خرز هيمايت مطلي بالذهب مُدمج في التصميم',
      'تفصيل روزيت القوع منحوت يدويًا من العقيق الطبيعي (حوالي 15 مم)',
      'تصميم قابل للتحويل: ارتداء طويل أو مزدوج حول العنق',
      'إغلاق توقيع ذهبي مع سلسلة تمديد قابلة للتعديل',
      'كل حجر طبيعي فريد في درجته وطابعه الطبيعي',
      'مصممة للتنسيق مع الأقراط التوقيعية وSignature Strand — أونكس',
      'تُقدَّم في علبة هدايا توقيعية من Bint Saeed',
    ],
    careLead: JEWELLERY_CARE_LEAD_AR,
    care: [...JEWELLERY_CARE_AR],
    faq: [
      {
        question: 'ممّ تُصنع قلادة القوع روزيت الأونكس؟',
        answer: [
          'تُصنع القلادة يدوياً من خرز أونكس أسود طبيعي، وخرز هيمايت مطلي بالذهب، ورمز الدار «روزيت القوع» المنحوت يدوياً من العقيق الطبيعي، مع إغلاق ذهبي وسلسلة تمديد قابلة للتعديل.',
          'الأونكس نوع طبيعي من العقيق الردي، يُقدَّر لأسوده الغني ولمسته المصقولة الناعمة. كل حجر فريد، فتتمتع كل قلادة من Bint Saeed بطابعها الفردي.',
        ],
      },
      {
        question: 'ما هو روزيت القوع؟',
        answer:
          'روزيت القوع أحد رموز Bint Saeed. يُنحت يدوياً من العقيق الطبيعي، مستوحى من درجات الصحراء الدافئة المحيطة بالعين، مدينة الواحة التاريخية في أبوظبي بالإمارات العربية المتحدة. محاطة ببساتين النخيل ومناظر جبلية وقرون من التراث الإماراتي، تُعد العين من أثمن المشاهد الثقافية في الدولة. يحمل روزيت القوع هذا الإلهام في مجموعات المجوهرات والجاهز في الدار.',
      },
      {
        question: 'هل يتوفر Signature Strand مطابق؟',
        answer:
          'نعم. صُمم Signature Strand — أونكس ليكمل القلادة ويمكن تثبيته على عباءات وفساتين وقطع خياطة مختارة من Bint Saeed، لتتشارك مجوهراتك وملابسك في تفاصيل الأحجار الطبيعية نفسها. مع الأقراط التوقيعية، يُكمل تعبيراً متكاملاً عن مجموعة الأحجار الطبيعية في الدار.',
      },
      {
        question: 'هل يمكن ارتداء القلادة بطرق مختلفة؟',
        answer:
          'نعم. يمكن ارتداؤها كقلادة طويلة واحدة أو مضاعفة حول العنق لإطلالة أقصر بطبقات.',
      },
      {
        question: 'هل كل قلادة مطابقة للأخرى؟',
        answer:
          'لا. كل قطعة من Bint Saeed تتضمن أحجاراً طبيعية. اختلافات الدرجة والتضمينات والسمات الطبيعية جزء من تميز كل قطعة ويُعد سمة من سمات المواد الطبيعية.',
      },
      {
        question: 'أين تُصنع القلادة؟',
        answer: 'تُصنع كل قلادة القوع روزيت الأونكس يدوياً في أبوظبي، الإمارات العربية المتحدة.',
      },
      {
        question: 'هل تصل القلادة في تغليف هدايا؟',
        answer:
          'نعم. تُقدَّم كل قلادة القوع روزيت الأونكس في علبة هدايا توقيعية من Bint Saeed، مثالية للإهداء والحفظ.',
      },
      {
        question: 'كيف أعتني بقلادتي؟',
        answer:
          JEWELLERY_CARE_FAQ_NECKLACE_AR,
      },
    ],
  },
}

const PDP_BY_ID: Record<string, Partial<Record<AppLocale, NecklaceEarringPdpContentPack>>> = {
  'al-ain-oasis-necklace-malachite': MALACHITE_PACK,
  'al-ain-oasis-necklace-rose-quartz': ROSE_QUARTZ_PACK,
  'al-ain-oasis-necklace-lapis-lazuli': LAPIS_LAZULI_PACK,
  'al-ain-oasis-necklace-sunstone': SUNSTONE_PACK,
  'al-ain-oasis-necklace-tiger-eye': TIGER_EYE_PACK,
  'al-ain-oasis-necklace-onyx': ONYX_PACK,
}

export function getNecklaceEarringPdpContent(
  id: string,
  locale: AppLocale = 'en',
): NecklaceEarringPdpContentPack | undefined {
  let content: NecklaceEarringPdpContentPack | undefined
  if (locale === 'fr' && FR_NECKLACE_PDP_BY_ID[id]) content = FR_NECKLACE_PDP_BY_ID[id]
  else if (locale === 'fr' && FR_EARRING_PDP_BY_ID[id]) content = FR_EARRING_PDP_BY_ID[id]
  else if (locale === 'en' && EN_EARRING_PDP_BY_ID[id]) content = EN_EARRING_PDP_BY_ID[id]
  else if (locale === 'ar' && AR_EARRING_PDP_BY_ID[id]) content = AR_EARRING_PDP_BY_ID[id]
  else content = PDP_BY_ID[id]?.[locale]

  // Secondary locales (it/es/ru/…) — full translated earring / necklace packs.
  if (!content) {
    content = getEarringPdpContentI18n(id, locale)
  }
  if (!content) {
    content = getNecklacePdpContentI18n(id, locale)
  }

  // Never silently fall back to English for another locale.
  if (!content) return undefined

  return {
    ...content,
    faq: content.faq.map((item) =>
      isAlAinRosetteFaqQuestion(item.question)
        ? { ...item, answer: getAlAinRosetteFaqAnswer(locale) }
        : item,
    ),
  }
}

/** FAQ items flattened for Product + FAQPage JSON-LD. */
export function getNecklaceEarringFaqForSchema(
  id: string,
  locale: AppLocale = 'en',
): ProductFaqItem[] {
  const content = getNecklaceEarringPdpContent(id, locale)
  if (!content?.faq.length) return []
  return content.faq.map((item) => ({
    question: item.question,
    answer: faqAnswerParagraphs(item.answer).join(' '),
  }))
}

export { faqAnswerParagraphs }

