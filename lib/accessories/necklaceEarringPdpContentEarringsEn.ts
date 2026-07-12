import type { NecklaceEarringPdpContentPack } from '@/lib/accessories/necklaceEarringPdpContent'
import {
  JEWELLERY_CARE_AR,
  JEWELLERY_CARE_EN,
  JEWELLERY_CARE_FAQ_EARRING_AR,
  JEWELLERY_CARE_FAQ_EARRING_EN,
  JEWELLERY_CARE_LEAD_AR,
  JEWELLERY_CARE_LEAD_EN,
} from '@/lib/accessories/jewelleryCareCopyI18n'

/**
 * Earring feature order mirrors necklaces (minus convertible / extension chain):
 * House Code → Handcrafted → Stone(s) → Hematite → Rosette 15 mm → Extra → Clasp → Unique → Coordinate → Gift box
 * Care and colour live in their own PDP sections / catalog fields — not in Features.
 */
type EarringEnPackInput = {
  fullNameEn: string
  fullNameAr: string
  introParagraphsEn: string[]
  introParagraphsAr: string[]
  stoneFeatureEn: string | string[]
  stoneFeatureAr: string | string[]
  /** Overrides the default Abu Dhabi handcrafted line. */
  handcraftedFeatureEn?: string
  handcraftedFeatureAr?: string
  /** Optional lines inserted after the Rosette feature (e.g. hardware, length). */
  extraFeaturesEn?: string[]
  extraFeaturesAr?: string[]
  /** Overrides the default gold-tone clasp / post line. */
  claspFeatureEn?: string
  claspFeatureAr?: string
  /** Overrides the default uniqueness feature line. */
  uniquenessFeatureEn?: string
  uniquenessFeatureAr?: string
  /** Overrides the “Is every pair identical?” FAQ answer. */
  identicalAnswerEn?: string
  identicalAnswerAr?: string
  necklaceNameEn: string
  necklaceNameAr: string
  strandNameEn?: string
  strandNameAr?: string
  madeFromAnswerEn: string | string[]
  madeFromAnswerAr: string | string[]
}

function asFeatureList(value: string | string[]): string[] {
  return Array.isArray(value) ? value : [value]
}

function buildEarringPackEnAr(input: EarringEnPackInput): {
  en: NecklaceEarringPdpContentPack
  ar: NecklaceEarringPdpContentPack
} {
  const strandEn = input.strandNameEn
    ? `Yes. The ${input.strandNameEn} has been designed to complement the earrings and may be attached to selected Bint Saeed abayas, dresses and tailoring.`
    : 'Yes. A matching Signature Strand may complement the earrings and attach to selected Bint Saeed abayas, dresses and tailoring.'

  const strandAr = input.strandNameAr
    ? `نعم. صُمم ${input.strandNameAr} ليكمل الأقراط ويمكن تثبيته على عباءات وفساتين وقطع خياطة مختارة من Bint Saeed.`
    : 'نعم. يمكن أن يكمل Signature Strand مطابق الأقراط ويُثبَّت على عباءات وفساتين وقطع خياطة مختارة من Bint Saeed.'

  const coordinateEn = input.strandNameEn
    ? `Designed to coordinate with the ${input.necklaceNameEn} and Bint Saeed Signature Strands`
    : `Designed to coordinate with the ${input.necklaceNameEn}`

  const coordinateAr = input.strandNameAr
    ? `مصممة للتنسيق مع ${input.necklaceNameAr} وخيوط Bint Saeed التوقيعية`
    : `مصممة للتنسيق مع ${input.necklaceNameAr}`

  const handcraftedEn =
    input.handcraftedFeatureEn ?? 'Handcrafted in Abu Dhabi, United Arab Emirates'
  const handcraftedAr =
    input.handcraftedFeatureAr ?? 'صُنعت يدوياً في أبوظبي، الإمارات العربية المتحدة'
  const claspEn = input.claspFeatureEn ?? 'Gold-tone clasp and post for comfortable wear'
  const claspAr = input.claspFeatureAr ?? 'إغلاق وعمود ذهبي اللون لارتداء مريح'
  const uniquenessEn =
    input.uniquenessFeatureEn ??
    'Each natural stone is unique in colour, pattern and inclusions'
  const uniquenessAr =
    input.uniquenessFeatureAr ?? 'كل حجر طبيعي فريد في لونه ونقشه وتضميناته'
  const identicalEn =
    input.identicalAnswerEn ??
    'No. Every Bint Saeed creation features natural gemstones. Variations in colour, pattern and inclusions are part of the individuality of each creation and should be celebrated as a hallmark of natural materials.'
  const identicalAr =
    input.identicalAnswerAr ??
    'لا. كل إبداع من Bint Saeed يضم أحجاراً طبيعية. الاختلافات في اللون والنقش والتضمينات جزء من تفرّد كل قطعة ويجب الاحتفاء بها كعلامة للمواد الطبيعية.'

  return {
    en: {
      introParagraphs: input.introParagraphsEn,
      featuresTitle: 'Features',
      features: [
        'House Code: Al Ain Rosette',
        handcraftedEn,
        ...asFeatureList(input.stoneFeatureEn),
        'Faceted gold-plated Hematite beads that catch the light',
        'Signature Al Ain Rosette hand-carved from natural Carnelian (approximately 15 mm)',
        ...(input.extraFeaturesEn ?? []),
        claspEn,
        uniquenessEn,
        coordinateEn,
        'Presented in a signature Bint Saeed gift box',
      ],
      careLead: JEWELLERY_CARE_LEAD_EN,
      care: [...JEWELLERY_CARE_EN],
      faq: [
        {
          question: `What are the ${input.fullNameEn} made from?`,
          answer: input.madeFromAnswerEn,
        },
        {
          question: 'What is the Al Ain Rosette?',
          answer: '', // overwritten by getNecklaceEarringPdpContent via /the-codes
        },
        {
          question: 'Is there a matching necklace?',
          answer: `Yes. The ${input.necklaceNameEn} has been designed to complement the earrings and create a harmonious set.`,
        },
        {
          question: 'Is there a matching Signature Strand available?',
          answer: strandEn,
        },
        {
          question: 'Is every pair identical?',
          answer: identicalEn,
        },
        {
          question: 'Where are the earrings made?',
          answer:
            'Every pair is hand-assembled in Abu Dhabi, United Arab Emirates, to Bint Saeed’s standards of craftsmanship and quality.',
        },
        {
          question: 'Do the earrings arrive in gift packaging?',
          answer: `Yes. The ${input.fullNameEn} are presented in a signature Bint Saeed gift box, ideal for gifting and safekeeping.`,
        },
        {
          question: 'How should I care for my earrings?',
          answer: JEWELLERY_CARE_FAQ_EARRING_EN,
        },
      ],
    },
    ar: {
      introParagraphs: input.introParagraphsAr,
      featuresTitle: 'المميزات',
      features: [
        'رمز الدار: روزيت القوع',
        handcraftedAr,
        ...asFeatureList(input.stoneFeatureAr),
        'خرز هيمايت مطلي بالذهب ومُقطَّع يلتقط الضوء',
        'تفصيل روزيت القوع منحوت يدويًا من العقيق الطبيعي (حوالي 15 مم)',
        ...(input.extraFeaturesAr ?? []),
        claspAr,
        uniquenessAr,
        coordinateAr,
        'تُقدَّم في علبة هدايا توقيعية من Bint Saeed',
      ],
      careLead: JEWELLERY_CARE_LEAD_AR,
      care: [...JEWELLERY_CARE_AR],
      faq: [
        {
          question: `ممّ تُصنع ${input.fullNameAr}؟`,
          answer: input.madeFromAnswerAr,
        },
        {
          question: 'ما هو روزيت القوع؟',
          answer: '',
        },
        {
          question: 'هل توجد قلادة مطابقة؟',
          answer: `نعم. صُممت ${input.necklaceNameAr} لتكمل الأقراط وتكوّن مجموعة متناغمة.`,
        },
        {
          question: 'هل يتوفر Signature Strand مطابق؟',
          answer: strandAr,
        },
        {
          question: 'هل كل زوج متطابق؟',
          answer: identicalAr,
        },
        {
          question: 'أين تُصنع الأقراط؟',
          answer:
            'يُجمَّع كل زوج يدوياً في أبوظبي، الإمارات العربية المتحدة، وفق معايير الحرفية والجودة لدى Bint Saeed.',
        },
        {
          question: 'هل تصل الأقراط في تغليف هدايا؟',
          answer: `نعم. تُقدَّم ${input.fullNameAr} في علبة هدايا توقيعية من Bint Saeed، مثالية للإهداء والحفظ.`,
        },
        {
          question: 'كيف أعتني بأقراطي؟',
          answer: JEWELLERY_CARE_FAQ_EARRING_AR,
        },
      ],
    },
  }
}

const MALACHITE = buildEarringPackEnAr({
  fullNameEn: 'Al Ain Oasis Earrings - Malachite',
  fullNameAr: 'أقراط واحة العين — ملاكيت',
  introParagraphsEn: [
    'The finishing touch that brings everything together.',
    'Some pieces complete an outfit. Others become part of how you are remembered.',
    'The Al Ain Oasis Malachite Earrings are hand-assembled in Abu Dhabi, United Arab Emirates, combining genuine Malachite and Sunstone gemstones with a hand-carved Carnelian Al Ain Rosette, faceted gold-plated Hematite that catches the light and brilliant zirconia set in 14k gold-plated, nickel-free copper.',
    'Created to accompany the Al Ain Oasis Necklace in Malachite and Bint Saeed Signature Strands, every piece belongs to a collection designed to be worn together or treasured on its own. The result is jewellery that feels considered, versatile and unmistakably Bint Saeed.',
    'Whether worn with a flowing abaya, refined eveningwear or your favourite everyday pieces, the Al Ain Oasis Earrings bring warmth, colour and craftsmanship to every look. Their balanced proportions allow the natural gemstones to stand out while remaining effortless enough to wear from morning until evening.',
    'Every gemstone is naturally unique, carrying its own variations in colour, pattern and inclusions. Thoughtfully hand-assembled in Abu Dhabi, these earrings make a meaningful gift for birthdays, Eid, graduations, anniversaries or simply to celebrate someone special.',
    'Elegant enough for special occasions. Versatile enough for every day. Distinctive enough to become part of your signature style.',
  ],
  introParagraphsAr: [
    'اللمسة الأخيرة التي تُكمِل كل شيء.',
    'بعض القطع تُكمِل إطلالة. وأخرى تصبح جزءاً من الطريقة التي يُذكَر بها حضورك.',
    'أقراط واحة العين — ملاكيت مُجمَّعة يدوياً في أبوظبي، الإمارات العربية المتحدة، تجمع أحجار ملاكيت وحجر شمس أصلية مع روزيت القوع المنحوتة يدوياً من العقيق، وهيمايت مطلي بالذهب ومُقطَّع يلتقط الضوء، وزركونيا لامعة مثبتة في نحاس خالٍ من النيكل مطلي بالذهب عيار 14 قيراطاً.',
    'صُممت لمرافقة قلادة واحة العين بالملاكيت وخيوط Bint Saeed التوقيعية؛ كل قطعة تنتمي إلى مجموعة صُممت لتُرتدى معاً أو تُقتنى وحدها. النتيجة مجوهرات مدروسة ومتعددة الاستخدام وبصمة Bint Saeed التي لا تُخطئ.',
    'سواءً مع عباءة منسدلة، أو إطلالة مسائية راقية، أو قطعك اليومية المفضّلة، تضيف أقراط واحة العين دفئاً ولوناً وحرفية لكل إطلالة. نسبها المتوازنة تُبرز الأحجار الطبيعية مع بقائها خفيفة بما يكفي للارتداء من الصباح حتى المساء.',
    'كل حجر طبيعي فريد، يحمل اختلافاته في اللون والنقش والتضمينات. مُجمَّعة بعناية في أبوظبي، فهي هدية ذات معنى لأعياد الميلاد والعيد والتخرج والذكرى السنوية، أو ببساطة للاحتفاء بشخص عزيز.',
    'أنيقة بما يكفي للمناسبات الخاصة. متعددة الاستخدام بما يكفي لكل يوم. مميزة بما يكفي أن تصبح جزءاً من أسلوبك التوقيع.',
  ],
  stoneFeatureEn: ['Genuine Malachite', 'Genuine Sunstone'],
  stoneFeatureAr: ['ملاكيت أصلي', 'حجر شمس أصلي'],
  handcraftedFeatureEn:
    'Hand-assembled natural stone drop earrings in Abu Dhabi, United Arab Emirates',
  handcraftedFeatureAr:
    'أقراط متدلية من أحجار طبيعية مُجمَّعة يدوياً في أبوظبي، الإمارات العربية المتحدة',
  extraFeaturesEn: [
    '14k gold-plated, nickel-free copper',
    'Lightweight silhouette designed for comfortable all-day wear',
    'Drop length: 5.5 cm (2.17 in)',
  ],
  extraFeaturesAr: [
    'نحاس خالٍ من النيكل مطلي بالذهب عيار 14 قيراطاً',
    'قصّة خفيفة مصممة للارتداء المريح طوال اليوم',
    'طول التدلي: 5.5 سم (2.17 إنش)',
  ],
  claspFeatureEn: 'Pavé zirconia leverback clasp',
  claspFeatureAr: 'إغلاق رافعة مرصّع بالزركونيا',
  necklaceNameEn: 'Al Ain Oasis Necklace - Malachite',
  necklaceNameAr: 'قلادة واحة العين — ملاكيت',
  strandNameEn: 'Bint Saeed Signature Strands',
  strandNameAr: 'خيوط Bint Saeed التوقيعية',
  madeFromAnswerEn: [
    'Each pair combines genuine Malachite and Sunstone gemstones, a hand-carved Carnelian Al Ain Rosette, faceted gold-plated Hematite, and brilliant zirconia set in 14k gold-plated, nickel-free copper, finished with a pavé zirconia leverback clasp.',
    'Every gemstone is naturally unique, carrying its own variations in colour, pattern and inclusions, making every pair one of a kind.',
  ],
  madeFromAnswerAr: [
    'يجمع كل زوج أحجار ملاكيت وحجر شمس أصلية، وروزيت القوع المنحوتة يدوياً من العقيق، وهيمايت مطلي بالذهب ومُقطَّع، وزركونيا لامعة مثبتة في نحاس خالٍ من النيكل مطلي بالذهب عيار 14 قيراطاً، مع إغلاق رافعة مرصّع بالزركونيا.',
    'كل حجر طبيعي فريد باختلافاته في اللون والنقش والتضمينات، فيغدو كل زوج واحداً من نوعه.',
  ],
})

const ROSE_QUARTZ = buildEarringPackEnAr({
  fullNameEn: 'Al Quaa Earrings - Rose Quartz',
  fullNameAr: 'أقراط القوع — كوارتز وردي',
  introParagraphsEn: [
    'The finishing touch that brings everything together.',
    'The Al Quaa Rose Quartz Earrings are designed for women who understand that the smallest details often leave the strongest impression. Hand-assembled in Abu Dhabi, United Arab Emirates, each pair combines genuine Rose Quartz gemstones, a hand-carved Carnelian Al Ain Rosette, faceted gold-plated Hematite beads that catch the light, and delicate pink zirconia set in 18k gold-plated brass.',
    'Designed to coordinate effortlessly with the Al Ain Oasis Necklace in Rose Quartz and Bint Saeed Signature Strands, each piece is created to complement the next, making it easy to build a beautifully coordinated jewellery collection over time. Whether paired with a Bint Saeed abaya or your favourite everyday pieces, these natural stone earrings bring warmth, craftsmanship and timeless elegance to every look.',
    'Every natural gemstone is unique, with its own colour, pattern and inclusions, making every pair one of a kind. Thoughtfully hand-assembled in Abu Dhabi, they make a meaningful gift for birthdays, Eid, graduations, anniversaries or simply to celebrate someone special.',
    'Elegant enough for special occasions. Versatile enough for everyday wear. Distinctive enough to be remembered.',
  ],
  introParagraphsAr: [
    'اللمسة الأخيرة التي تُكمِل كل شيء.',
    'صُممت أقراط القوع — كوارتز وردي للنساء اللواتي يدركن أن أصغر التفاصيل غالباً ما تترك أقوى انطباع. مُجمَّعة يدوياً في أبوظبي، الإمارات العربية المتحدة، يجمع كل زوج أحجار كوارتز وردي أصلية، وروزيت القوع المنحوتة يدوياً من العقيق، وخرز هيمايت مطلي بالذهب ومُقطَّع يلتقط الضوء، وزركونيا وردية رقيقة مثبتة في نحاس مطلي بالذهب عيار 18 قيراطاً.',
    'صُممت للتنسيق بسلاسة مع قلادة واحة العين بالكوارتز الوردي وخيوط Bint Saeed التوقيعية؛ كل قطعة تُكمِل التالية، فيسهل بناء مجموعة مجوهرات متناغمة مع الوقت. سواءً مع عباءة من Bint Saeed أو مع قطعك اليومية المفضّلة، تضيف هذه الأقراط من الأحجار الطبيعية دفئاً وحرفية وأناقة خالدة لكل إطلالة.',
    'كل حجر طبيعي فريد بلونه ونقشه وتضميناته، فيغدو كل زوج واحداً من نوعه. مُجمَّعة بعناية في أبوظبي، فهي هدية ذات معنى لأعياد الميلاد والعيد والتخرج والذكرى السنوية، أو ببساطة للاحتفاء بشخص عزيز.',
    'أنيقة بما يكفي للمناسبات الخاصة. متعددة الاستخدام بما يكفي لليوميات. مميزة بما يكفي أن تُذكَر.',
  ],
  stoneFeatureEn: 'Genuine Rose Quartz gemstones',
  stoneFeatureAr: 'أحجار كوارتز وردي أصلية',
  handcraftedFeatureEn:
    'Hand-assembled natural stone drop earrings in Abu Dhabi, United Arab Emirates',
  handcraftedFeatureAr:
    'أقراط متدلية من أحجار طبيعية مُجمَّعة يدوياً في أبوظبي، الإمارات العربية المتحدة',
  extraFeaturesEn: [
    '18k gold-plated brass',
    'Elegant lightweight silhouette designed for comfortable all-day wear',
    'Drop length: 4 cm (1.57 in)',
  ],
  extraFeaturesAr: [
    'نحاس مطلي بالذهب عيار 18 قيراطاً',
    'قصّة أنيقة خفيفة مصممة للارتداء المريح طوال اليوم',
    'طول التدلي: 4 سم (1.57 إنش)',
  ],
  claspFeatureEn: 'Pear-cut pink zirconia stud',
  claspFeatureAr: 'مسمار زركونيا وردية بقطع كمّثري',
  necklaceNameEn: 'Al Ain Oasis Necklace - Rose Quartz',
  necklaceNameAr: 'قلادة واحة العين — كوارتز وردي',
  strandNameEn: 'Bint Saeed Signature Strands',
  strandNameAr: 'خيوط Bint Saeed التوقيعية',
  madeFromAnswerEn: [
    'Each pair combines genuine Rose Quartz gemstones, a hand-carved Carnelian Al Ain Rosette, faceted gold-plated Hematite beads, and a pear-cut pink zirconia stud set in 18k gold-plated brass.',
    'Every natural gemstone is unique, with its own colour, pattern and inclusions, making every pair one of a kind.',
  ],
  madeFromAnswerAr: [
    'يجمع كل زوج أحجار كوارتز وردي أصلية، وروزيت القوع المنحوتة يدوياً من العقيق، وخرز هيمايت مطلي بالذهب ومُقطَّع، ومسمار زركونيا وردية بقطع كمّثري مثبت في نحاس مطلي بالذهب عيار 18 قيراطاً.',
    'كل حجر طبيعي فريد بلونه ونقشه وتضميناته، فيغدو كل زوج واحداً من نوعه.',
  ],
})

const ORANGE_JADE = buildEarringPackEnAr({
  fullNameEn: 'Al Ain Oasis Earrings - Orange Jade',
  fullNameAr: 'أقراط واحة العين — يشم برتقالي',
  introParagraphsEn: [
    'The finishing touch that brings everything together.',
    'Some pieces complete an outfit. Others become part of how you are remembered.',
    'The Al Ain Oasis Orange Coloured Jade Earrings are hand-assembled in Abu Dhabi, United Arab Emirates, combining genuine Orange Coloured Jade and Sunstone gemstones with a hand-carved Carnelian Al Ain Rosette, faceted gold-plated Hematite that catches the light and brilliant zirconia set in 14k gold-plated, nickel-free copper.',
    'Created to accompany the Al Ain Oasis Necklace in Orange Coloured Jade and Bint Saeed Signature Strands, every piece belongs to a collection designed to be worn together or treasured on its own. The result is jewellery that feels considered, versatile and unmistakably Bint Saeed.',
    'Whether worn with a flowing abaya, refined eveningwear or your favourite everyday pieces, the Al Ain Oasis Earrings bring warmth, colour and craftsmanship to every look. The rich orange tones of the jade are complemented by the natural sparkle of Sunstone, creating a composition inspired by the warm desert landscape surrounding the historic oasis city of Al Ain.',
    'Every gemstone is naturally unique, carrying its own variations in colour, pattern and inclusions. Thoughtfully hand-assembled in Abu Dhabi, these earrings make a meaningful gift for birthdays, Eid, graduations, anniversaries or simply to celebrate someone special.',
    'Elegant enough for special occasions. Versatile enough for every day. Distinctive enough to become part of your signature style.',
  ],
  introParagraphsAr: [
    'اللمسة الأخيرة التي تُكمِل كل شيء.',
    'بعض القطع تُكمِل إطلالة. وأخرى تصبح جزءاً من الطريقة التي يُذكَر بها حضورك.',
    'أقراط واحة العين — يشم برتقالي مُجمَّعة يدوياً في أبوظبي، الإمارات العربية المتحدة، تجمع أحجار يشم برتقالي اللون وحجر شمس أصلية مع روزيت القوع المنحوتة يدوياً من العقيق، وهيمايت مطلي بالذهب ومُقطَّع يلتقط الضوء، وزركونيا لامعة مثبتة في نحاس خالٍ من النيكل مطلي بالذهب عيار 14 قيراطاً.',
    'صُممت لمرافقة قلادة واحة العين باليشم برتقالي اللون وخيوط Bint Saeed التوقيعية؛ كل قطعة تنتمي إلى مجموعة صُممت لتُرتدى معاً أو تُقتنى وحدها. النتيجة مجوهرات مدروسة ومتعددة الاستخدام وبصمة Bint Saeed التي لا تُخطئ.',
    'سواءً مع عباءة منسدلة، أو إطلالة مسائية راقية، أو قطعك اليومية المفضّلة، تضيف أقراط واحة العين دفئاً ولوناً وحرفية لكل إطلالة. درجات اليشم البرتقالية الغنية تكتمل بتألق حجر الشمس الطبيعي، في تكوين مستوحى من دفء المشهد الصحراوي المحيط بمدينة العين التاريخية.',
    'كل حجر طبيعي فريد، يحمل اختلافاته في اللون والنقش والتضمينات. مُجمَّعة بعناية في أبوظبي، فهي هدية ذات معنى لأعياد الميلاد والعيد والتخرج والذكرى السنوية، أو ببساطة للاحتفاء بشخص عزيز.',
    'أنيقة بما يكفي للمناسبات الخاصة. متعددة الاستخدام بما يكفي لكل يوم. مميزة بما يكفي أن تصبح جزءاً من أسلوبك التوقيع.',
  ],
  stoneFeatureEn: [
    'Genuine Orange Coloured Jade',
    'Genuine Sunstone',
  ],
  stoneFeatureAr: [
    'يشم برتقالي اللون أصلي',
    'حجر شمس أصلي',
  ],
  handcraftedFeatureEn:
    'Hand-assembled natural stone drop earrings in Abu Dhabi, United Arab Emirates',
  handcraftedFeatureAr:
    'أقراط متدلية من أحجار طبيعية مُجمَّعة يدوياً في أبوظبي، الإمارات العربية المتحدة',
  extraFeaturesEn: [
    '14k gold-plated, nickel-free copper',
    'Lightweight silhouette designed for comfortable all-day wear',
    'Drop length: 5.5 cm (2.17 in)',
  ],
  extraFeaturesAr: [
    'نحاس خالٍ من النيكل مطلي بالذهب عيار 14 قيراطاً',
    'قصّة خفيفة مصممة للارتداء المريح طوال اليوم',
    'طول التدلي: 5.5 سم (2.17 إنش)',
  ],
  claspFeatureEn: 'Pavé zirconia leverback clasp',
  claspFeatureAr: 'إغلاق رافعة مرصّع بالزركونيا',
  necklaceNameEn: 'Al Ain Oasis Necklace - Orange Coloured Jade',
  necklaceNameAr: 'قلادة واحة العين — يشم برتقالي اللون',
  strandNameEn: 'Bint Saeed Signature Strands',
  strandNameAr: 'خيوط Bint Saeed التوقيعية',
  madeFromAnswerEn: [
    'Each pair combines genuine Orange Coloured Jade and Sunstone gemstones, a hand-carved Carnelian Al Ain Rosette, faceted gold-plated Hematite, and brilliant zirconia set in 14k gold-plated, nickel-free copper, finished with a pavé zirconia leverback clasp.',
    'Every gemstone is naturally unique, carrying its own variations in colour, pattern and inclusions, making every pair one of a kind.',
  ],
  madeFromAnswerAr: [
    'يجمع كل زوج أحجار يشم برتقالي اللون وحجر شمس أصلية، وروزيت القوع المنحوتة يدوياً من العقيق، وهيمايت مطلي بالذهب ومُقطَّع، وزركونيا لامعة مثبتة في نحاس خالٍ من النيكل مطلي بالذهب عيار 14 قيراطاً، مع إغلاق رافعة بزركونيا مرصّعة.',
    'كل حجر طبيعي فريد باختلافاته في اللون والنقش والتضمينات، فيغدو كل زوج واحداً من نوعه.',
  ],
})

const LAPIS = buildEarringPackEnAr({
  fullNameEn: 'Al Quaa Earrings - Lapis Lazuli',
  fullNameAr: 'أقراط القوع — لازورد',
  introParagraphsEn: [
    'The finishing touch that brings everything together.',
    'The Al Quaa Lapis Lazuli Earrings are designed for women who understand that the smallest details often leave the strongest impression. Hand-assembled in Abu Dhabi, United Arab Emirates, each pair combines genuine Lapis Lazuli gemstones, a hand-carved Carnelian Al Ain Rosette, faceted gold-plated Hematite beads that catch the light, and brilliant clear zirconia set in 18k gold-plated brass.',
    'Designed to coordinate effortlessly with the Al Ain Oasis Necklace in Lapis Lazuli and Bint Saeed Signature Strands, each piece is created to complement the next, making it easy to build a beautifully coordinated jewellery collection over time. Whether paired with a Bint Saeed abaya or your favourite everyday pieces, these natural stone earrings bring depth, craftsmanship and timeless elegance to every look.',
    'Every natural gemstone is unique, with its own colour, pattern and natural pyrite inclusions, making every pair one of a kind. Thoughtfully hand-assembled in Abu Dhabi, they make a meaningful gift for birthdays, Eid, graduations, anniversaries or simply to celebrate someone special.',
    'Elegant enough for special occasions. Versatile enough for everyday wear. Distinctive enough to be remembered.',
  ],
  introParagraphsAr: [
    'اللمسة الأخيرة التي تُكمِل كل شيء.',
    'صُممت أقراط القوع — لازورد للنساء اللواتي يدركن أن أصغر التفاصيل غالباً ما تترك أقوى انطباع. مُجمَّعة يدوياً في أبوظبي، الإمارات العربية المتحدة، يجمع كل زوج أحجار لازورد أصلية، وروزيت القوع المنحوتة يدوياً من العقيق، وخرز هيمايت مطلي بالذهب ومُقطَّع يلتقط الضوء، وزركونيا شفافة لامعة مثبتة في نحاس مطلي بالذهب عيار 18 قيراطاً.',
    'صُممت للتنسيق بسلاسة مع قلادة واحة العين باللازورد وخيوط Bint Saeed التوقيعية؛ كل قطعة تُكمِل التالية، فيسهل بناء مجموعة مجوهرات متناغمة مع الوقت. سواءً مع عباءة من Bint Saeed أو مع قطعك اليومية المفضّلة، تضيف هذه الأقراط من الأحجار الطبيعية عمقاً وحرفية وأناقة خالدة لكل إطلالة.',
    'كل حجر طبيعي فريد بلونه ونقشه وتضمينات البيريت الطبيعية، فيغدو كل زوج واحداً من نوعه. مُجمَّعة بعناية في أبوظبي، فهي هدية ذات معنى لأعياد الميلاد والعيد والتخرج والذكرى السنوية، أو ببساطة للاحتفاء بشخص عزيز.',
    'أنيقة بما يكفي للمناسبات الخاصة. متعددة الاستخدام بما يكفي لليوميات. مميزة بما يكفي أن تُذكَر.',
  ],
  stoneFeatureEn: 'Genuine Lapis Lazuli gemstones',
  stoneFeatureAr: 'أحجار لازورد أصلية',
  handcraftedFeatureEn:
    'Hand-assembled natural stone drop earrings in Abu Dhabi, United Arab Emirates',
  handcraftedFeatureAr:
    'أقراط متدلية من أحجار طبيعية مُجمَّعة يدوياً في أبوظبي، الإمارات العربية المتحدة',
  extraFeaturesEn: [
    '18k gold-plated brass',
    'Elegant lightweight silhouette designed for comfortable all-day wear',
    'Drop length: 4 cm (1.57 in)',
  ],
  extraFeaturesAr: [
    'نحاس مطلي بالذهب عيار 18 قيراطاً',
    'قصّة أنيقة خفيفة مصممة للارتداء المريح طوال اليوم',
    'طول التدلي: 4 سم (1.57 إنش)',
  ],
  claspFeatureEn: 'Pear-cut clear zirconia stud',
  claspFeatureAr: 'مسمار زركونيا شفافة بقطع كمّثري',
  uniquenessFeatureEn:
    'Each natural stone is unique in colour, pattern and natural pyrite inclusions',
  uniquenessFeatureAr: 'كل حجر طبيعي فريد في لونه ونقشه وتضمينات البيريت الطبيعية',
  identicalAnswerEn:
    'No. Every Bint Saeed creation features natural gemstones. Variations in colour, pattern and natural pyrite inclusions are part of the individuality of each creation and should be celebrated as a hallmark of natural materials.',
  identicalAnswerAr:
    'لا. كل إبداع من Bint Saeed يضم أحجاراً طبيعية. الاختلافات في اللون والنقش وتضمينات البيريت الطبيعية جزء من تفرّد كل قطعة ويجب الاحتفاء بها كعلامة للمواد الطبيعية.',
  necklaceNameEn: 'Al Ain Oasis Necklace - Lapis Lazuli',
  necklaceNameAr: 'قلادة واحة العين — لازورد',
  strandNameEn: 'Bint Saeed Signature Strands',
  strandNameAr: 'خيوط Bint Saeed التوقيعية',
  madeFromAnswerEn: [
    'Each pair combines genuine Lapis Lazuli gemstones, a hand-carved Carnelian Al Ain Rosette, faceted gold-plated Hematite beads, and a pear-cut clear zirconia stud set in 18k gold-plated brass.',
    'Every natural gemstone is unique, with its own colour, pattern and natural pyrite inclusions, making every pair one of a kind.',
  ],
  madeFromAnswerAr: [
    'يجمع كل زوج أحجار لازورد أصلية، وروزيت القوع المنحوتة يدوياً من العقيق، وخرز هيمايت مطلي بالذهب ومُقطَّع، ومسمار زركونيا شفافة بقطع كمّثري مثبت في نحاس مطلي بالذهب عيار 18 قيراطاً.',
    'كل حجر طبيعي فريد بلونه ونقشه وتضمينات البيريت الطبيعية، فيغدو كل زوج واحداً من نوعه.',
  ],
})

export const EN_EARRING_PDP_BY_ID: Record<string, NecklaceEarringPdpContentPack> = {
  'al-ain-oasis-earrings-malachite': MALACHITE.en,
  'al-quaa-earrings-rose-quartz': ROSE_QUARTZ.en,
  'al-ain-oasis-earrings-orange-jade': ORANGE_JADE.en,
  'al-quaa-earrings-lapis-lazuli': LAPIS.en,
}

export const AR_EARRING_PDP_BY_ID: Record<string, NecklaceEarringPdpContentPack> = {
  'al-ain-oasis-earrings-malachite': MALACHITE.ar,
  'al-quaa-earrings-rose-quartz': ROSE_QUARTZ.ar,
  'al-ain-oasis-earrings-orange-jade': ORANGE_JADE.ar,
  'al-quaa-earrings-lapis-lazuli': LAPIS.ar,
}
