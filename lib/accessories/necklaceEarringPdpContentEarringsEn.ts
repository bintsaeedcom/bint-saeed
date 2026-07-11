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
 * House Code → Handcrafted → Stone → Hematite → Rosette 15 mm → Clasp/post → Unique → Coordinate → Gift box
 */
type EarringEnPackInput = {
  fullNameEn: string
  fullNameAr: string
  introParagraphsEn: string[]
  introParagraphsAr: string[]
  stoneFeatureEn: string
  stoneFeatureAr: string
  necklaceNameEn: string
  necklaceNameAr: string
  strandNameEn?: string
  strandNameAr?: string
  madeFromAnswerEn: string | string[]
  madeFromAnswerAr: string | string[]
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
    ? `Designed to coordinate with the ${input.necklaceNameEn} and ${input.strandNameEn}`
    : `Designed to coordinate with the ${input.necklaceNameEn}`

  const coordinateAr = input.strandNameAr
    ? `مصممة للتنسيق مع ${input.necklaceNameAr} و${input.strandNameAr}`
    : `مصممة للتنسيق مع ${input.necklaceNameAr}`

  return {
    en: {
      introParagraphs: input.introParagraphsEn,
      featuresTitle: 'Features',
      features: [
        'House Code: Al Ain Rosette',
        'Handcrafted in Abu Dhabi, United Arab Emirates',
        input.stoneFeatureEn,
        'Gold-plated hematite accent beads woven throughout the design',
        'Signature Al Ain Rosette hand-carved from natural Carnelian (approximately 15 mm)',
        'Gold-tone clasp and post for comfortable wear',
        'Each natural stone is unique in colour, veining and natural character',
        coordinateEn,
        'Presented in a Bint Saeed gift box',
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
          answer:
            'No. Every Bint Saeed creation features natural gemstones. Variations in colour, veining and natural characteristics are part of the individuality of each creation and should be celebrated as a hallmark of natural materials.',
        },
        {
          question: 'Where are the earrings made?',
          answer:
            'Every pair is handcrafted in Abu Dhabi, United Arab Emirates, to Bint Saeed’s standards of craftsmanship and quality.',
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
        'صُنعت يدوياً في أبوظبي، الإمارات العربية المتحدة',
        input.stoneFeatureAr,
        'خرز هيمايت مطلي بالذهب منسوج عبر التصميم',
        'تفصيل روزيت القوع منحوت يدويًا من العقيق الطبيعي (حوالي 15 مم)',
        'إغلاق وعمود ذهبي اللون لارتداء مريح',
        'كل حجر طبيعي فريد في لونه وعروقه وطابعه الطبيعي',
        coordinateAr,
        'تُقدَّم في علبة هدايا من Bint Saeed',
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
          answer:
            'لا. كل إبداع من Bint Saeed يضم أحجاراً طبيعية. الاختلافات في اللون والعروق والطابع الطبيعي جزء من تفرّد كل قطعة ويجب الاحتفاء بها كعلامة للمواد الطبيعية.',
        },
        {
          question: 'أين تُصنع الأقراط؟',
          answer:
            'يُصنع كل زوج يدوياً في أبوظبي، الإمارات العربية المتحدة، وفق معايير الحرفية والجودة لدى Bint Saeed.',
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
    'The Al Ain Oasis Earrings - Malachite are hand-assembled from natural malachite gemstones, the House’s signature Al Ain Rosette hand-carved from natural Carnelian, and gold-plated hematite accents that catch the light with every movement.',
    'Natural gemstones have long been treasured for their individuality. Their depth of colour, distinctive veining and organic character bring a sense of richness that only nature can create, making every pair as unique as the woman who wears it.',
    'Handcrafted in Abu Dhabi, these earrings combine natural materials with one of Bint Saeed’s House Codes. Complete the look with the matching Al Ain Oasis Necklace - Malachite and the Al Ain Rosette Malachite Signature Strand.',
  ],
  introParagraphsAr: [
    'أقراط واحة العين — ملاكيت مُجمَّعة يدوياً من أحجار الملاكيت الطبيعية، ورمز الدار «روزيت القوع» المنحوت يدوياً من العقيق الطبيعي، مع لمسات هيمايت مطلية بالذهب تلتقط الضوء مع كل حركة.',
    'لطالما اعتُبرت الأحجار الطبيعية ثمينة لتفرّدها. عمق لونها وعروقها المميزة وطابعها العضوي يمنحان ثراءً لا تصنعه إلا الطبيعة، فيغدو كل زوج فريداً كالمرأة التي ترتديه.',
    'صُنعت يدوياً في أبوظبي، وتجمع هذه الأقراط بين المواد الطبيعية وأحد رموز Bint Saeed. أكملي الإطلالة مع قلادة واحة العين — ملاكيت المطابقة وAl Ain Rosette Malachite Signature Strand.',
  ],
  stoneFeatureEn: 'Hand-selected natural malachite gemstones',
  stoneFeatureAr: 'أحجار ملاكيت طبيعية مختارة يدوياً',
  necklaceNameEn: 'Al Ain Oasis Necklace - Malachite',
  necklaceNameAr: 'قلادة واحة العين — ملاكيت',
  strandNameEn: 'Al Ain Rosette Malachite Signature Strand',
  strandNameAr: 'Al Ain Rosette Malachite Signature Strand',
  madeFromAnswerEn: [
    'The earrings are handcrafted using natural malachite gemstones, gold-plated hematite accents and the House’s signature Al Ain Rosette, hand-carved from natural Carnelian.',
    'Malachite is a naturally occurring gemstone formed over thousands of years in copper-rich regions. Celebrated for its distinctive green bands and depth of colour, every malachite stone is unique.',
  ],
  madeFromAnswerAr: [
    'تُصنع الأقراط يدوياً من أحجار ملاكيت طبيعية، ولمسات هيمايت مطلية بالذهب، ورمز الدار «روزيت القوع» المنحوت يدوياً من العقيق الطبيعي.',
    'الملاكيت حجر طبيعي تكوّن عبر آلاف السنين في مناطق غنية بالنحاس. يُحتفى بأشرطته الخضراء المميزة وعمق لونه، وكل حجر فريد.',
  ],
})

const ROSE_QUARTZ = buildEarringPackEnAr({
  fullNameEn: 'Al Quaa Earrings - Rose Quartz',
  fullNameAr: 'أقراط القوع — كوارتز وردي',
  introParagraphsEn: [
    'The Al Quaa Earrings - Rose Quartz bring together the gentle beauty of natural rose quartz with the House’s signature Al Ain Rosette hand-carved from natural Carnelian, accented with gold-plated hematite.',
    'Treasured for centuries, natural gemstones are admired for their individuality. The soft blush of rose quartz, the warmth of Carnelian and luminous gold-tone accents create a harmony that feels both timeless and distinctive.',
    'Handcrafted in Abu Dhabi, these earrings reflect Bint Saeed’s appreciation for natural materials. Complete the look with the matching Al Ain Oasis Necklace - Rose Quartz and the Al Ain Rosette Rose Quartz Signature Strand.',
  ],
  introParagraphsAr: [
    'أقراط القوع — كوارتز وردي تجمع جمال الكوارتز الوردي الطبيعي اللطيف مع رمز الدار «روزيت القوع» المنحوت يدوياً من العقيق الطبيعي، مع لمسات هيمايت مطلية بالذهب.',
    'لطالما اعتُبرت الأحجار الطبيعية ثمينة لتفرّدها. وردية الكوارتز الدافئة ودفء العقيق واللمسات الذهبية تكوّن تناغماً خالداً ومميزاً.',
    'صُنعت يدوياً في أبوظبي، وتعكس هذه الأقراط تقدير Bint Saeed للمواد الطبيعية. أكملي الإطلالة مع قلادة واحة العين — كوارتز وردي المطابقة وAl Ain Rosette Rose Quartz Signature Strand.',
  ],
  stoneFeatureEn: 'Hand-selected natural rose quartz gemstones',
  stoneFeatureAr: 'أحجار كوارتز وردي طبيعية مختارة يدوياً',
  necklaceNameEn: 'Al Ain Oasis Necklace - Rose Quartz',
  necklaceNameAr: 'قلادة واحة العين — كوارتز وردي',
  strandNameEn: 'Al Ain Rosette Rose Quartz Signature Strand',
  strandNameAr: 'Al Ain Rosette Rose Quartz Signature Strand',
  madeFromAnswerEn: [
    'The earrings are handcrafted using natural rose quartz gemstones, gold-plated hematite accents and the House’s signature Al Ain Rosette, hand-carved from natural Carnelian.',
    'Rose quartz is a natural variety of quartz admired for its delicate pink tones and subtle translucence. Every stone is unique.',
  ],
  madeFromAnswerAr: [
    'تُصنع الأقراط يدوياً من أحجار كوارتز وردي طبيعية، ولمسات هيمايت مطلية بالذهب، ورمز الدار «روزيت القوع» المنحوت يدوياً من العقيق الطبيعي.',
    'الكوارتز الوردي صنف طبيعي من الكوارتز يُعجب بدرجاته الوردية الرقيقة وشفافيته الخفيفة. كل حجر فريد.',
  ],
})

const ORANGE_JADE = buildEarringPackEnAr({
  fullNameEn: 'Al Ain Oasis Earrings - Orange Jade',
  fullNameAr: 'أقراط واحة العين — يشم برتقالي',
  introParagraphsEn: [
    'The Al Ain Oasis Earrings - Orange Jade are hand-assembled from natural orange jade gemstones, the House’s signature Al Ain Rosette hand-carved from natural Carnelian, and gold-plated hematite accents for a luminous contrast.',
    'Natural gemstones are admired for their individuality. The warm orange tones of jade create an elegant balance with the warmth of Carnelian and luminous gold-tone accents.',
    'Handcrafted in Abu Dhabi, these earrings express Bint Saeed’s signature design language. Complete the look with the matching Al Ain Oasis Necklace - Sunstone.',
  ],
  introParagraphsAr: [
    'أقراط واحة العين — يشم برتقالي مُجمَّعة يدوياً من أحجار اليشم البرتقالي الطبيعية، ورمز الدار «روزيت القوع» المنحوت يدوياً من العقيق الطبيعي، مع لمسات هيمايت مطلية بالذهب لتباين مضيء.',
    'تُعجب الأحجار الطبيعية بتفرّدها. درجات اليشم البرتقالية الدافئة تخلق توازناً أنيقاً مع دفء العقيق واللمسات الذهبية.',
    'صُنعت يدوياً في أبوظبي، وتعبّر هذه الأقراط عن لغة تصميم Bint Saeed التوقيعية. أكملي الإطلالة مع قلادة واحة العين — حجر الشمس المطابقة.',
  ],
  stoneFeatureEn: 'Hand-selected natural orange jade gemstones',
  stoneFeatureAr: 'أحجار يشم برتقالي طبيعية مختارة يدوياً',
  necklaceNameEn: 'Al Ain Oasis Necklace - Sunstone',
  necklaceNameAr: 'قلادة واحة العين — حجر الشمس',
  strandNameEn: 'Al Ain Rosette Sunstone Signature Strand',
  strandNameAr: 'Al Ain Rosette Sunstone Signature Strand',
  madeFromAnswerEn: [
    'The earrings are handcrafted using natural orange jade gemstones, gold-plated hematite accents and the House’s signature Al Ain Rosette, hand-carved from natural Carnelian.',
    'Orange jade is a natural stone appreciated for its warm hues and depth of colour. Every stone is unique.',
  ],
  madeFromAnswerAr: [
    'تُصنع الأقراط يدوياً من أحجار يشم برتقالي طبيعية، ولمسات هيمايت مطلية بالذهب، ورمز الدار «روزيت القوع» المنحوت يدوياً من العقيق الطبيعي.',
    'اليشم البرتقالي حجر طبيعي يُقدَّر لدرجاته الدافئة وعمق لونه. كل حجر فريد.',
  ],
})

const LAPIS = buildEarringPackEnAr({
  fullNameEn: 'Al Quaa Earrings - Lapis Lazuli',
  fullNameAr: 'أقراط القوع — لازورد',
  introParagraphsEn: [
    'The Al Quaa Earrings - Lapis Lazuli are hand-assembled from natural lapis lazuli gemstones, the House’s signature Al Ain Rosette hand-carved from natural Carnelian, and gold-plated hematite accents.',
    'Treasured since antiquity, lapis lazuli is admired for its deep royal blue and naturally occurring golden pyrite inclusions. Because every stone is unique, every pair carries its own character.',
    'Handcrafted in Abu Dhabi, these earrings reflect Bint Saeed’s appreciation for natural materials. Complete the look with the matching Al Ain Oasis Necklace - Lapis Lazuli and the Al Ain Rosette Lapis Lazuli Signature Strand.',
  ],
  introParagraphsAr: [
    'أقراط القوع — لازورد مُجمَّعة يدوياً من أحجار اللازورد الطبيعية، ورمز الدار «روزيت القوع» المنحوت يدوياً من العقيق الطبيعي، مع لمسات هيمايت مطلية بالذهب.',
    'ثمين منذ القدم، يُعجب اللازورد بأزرقه الملكي العميق وتضمينات البيريت الذهبية الطبيعية. ولأن كل حجر فريد، يحمل كل زوج طابعه الخاص.',
    'صُنعت يدوياً في أبوظبي، وتعكس هذه الأقراط تقدير Bint Saeed للمواد الطبيعية. أكملي الإطلالة مع قلادة واحة العين — لازورد المطابقة وAl Ain Rosette Lapis Lazuli Signature Strand.',
  ],
  stoneFeatureEn: 'Hand-selected natural lapis lazuli gemstones',
  stoneFeatureAr: 'أحجار لازورد طبيعية مختارة يدوياً',
  necklaceNameEn: 'Al Ain Oasis Necklace - Lapis Lazuli',
  necklaceNameAr: 'قلادة واحة العين — لازورد',
  strandNameEn: 'Al Ain Rosette Lapis Lazuli Signature Strand',
  strandNameAr: 'Al Ain Rosette Lapis Lazuli Signature Strand',
  madeFromAnswerEn: [
    'The earrings are handcrafted using natural lapis lazuli gemstones, gold-plated hematite accents and the House’s signature Al Ain Rosette, hand-carved from natural Carnelian.',
    'Lapis lazuli is a natural stone prized for its intense royal blue and distinctive golden pyrite inclusions. Every stone is unique.',
  ],
  madeFromAnswerAr: [
    'تُصنع الأقراط يدوياً من أحجار لازورد طبيعية، ولمسات هيمايت مطلية بالذهب، ورمز الدار «روزيت القوع» المنحوت يدوياً من العقيق الطبيعي.',
    'اللازورد حجر طبيعي يُقدَّر لأزرقه الملكي الكثيف وتضمينات البيريت الذهبية المميزة. كل حجر فريد.',
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
