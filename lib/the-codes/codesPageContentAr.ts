import { withBrandAlt } from '@/lib/products/imageAlt'
import type { CodesSectionContent } from '@/lib/the-codes/codesPageContent'

const IMG = {
  monogram: 'bint-saeed-abu-dhabi-monogram-luxury-house.webp',
  alTalli: 'bint-saeed-abu-dhabi-al-talli-emirati-heritage.webp',
  khous: 'bint-saeed-abu-dhabi-khous-emirati-heritage.webp',
  alAinRosette: 'bint-saeed-abu-dhabi-al-ain-rosette-emirati-heritage.webp',
  knottedLines: 'bint-saeed-abu-dhabi-knotted-lines-of-lineage.webp',
  strands: 'bint-saeed-abu-dhabi-natural-stone-beads-emirati-heritage.webp',
} as const

export const CODES_HERO_AR = {
  file: IMG.khous,
  alt: withBrandAlt('نسيج الخوص من سعف النخيل — صورة افتتاحية لصفحة الرموز'),
}

export const THE_CODES_SECTIONS_AR: CodesSectionContent[] = [
  {
    id: 'the-monogram',
    eyebrow: 'علامة الدار',
    title: 'الشعار',
    paragraphs: [
      'شعار Bint Saeed أكثر من مجرد علامة — إنه بنية للهوية. يعكس شكله المتشابك الاستمرارية، حيث تعود الخطوط إلى نفسها بدلاً من أن تنقطع. يظهر بقصد عبر القطع، أحياناً بخفة، وأحياناً بحضور، دائماً جزءاً من الكل.',
    ],
    imageFile: IMG.monogram,
    imageAlt: withBrandAlt('شعار دار Bint Saeed الفاخرة — علامة هوية متشابكة ورمز تصميم من أبوظبي'),
  },
  {
    id: 'al-talli',
    eyebrow: 'خيط التراث',
    title: 'Al Talli',
    paragraphs: [
      'Al Talli حرفة إماراتية تقليدية، تُنسج بخيوط معدنية دقيقة ومعترف بها كجزء من التراث الثقافي في دولة الإمارات العربية المتحدة. يعكس الدقة والصبر وتقاليد الزينة العريقة. في Bint Saeed، نُترجم هذه الحرفة إلى أشكال تتحرك بسلاسة عبر الحدود.',
    ],
    imageFile: IMG.alTalli,
    imageAlt: withBrandAlt('تطريز تراثي إماراتي Al Talli بخيوط ذهبية — رمز من رموز دار Bint Saeed'),
  },
  {
    id: 'khous',
    eyebrow: 'النسيج والبنية',
    title: 'Al Khous',
    paragraphs: [
      'نسيج الخوص متجذر في استخدام سعف النخيل، يُشكَّل عبر البنية والتكرار، ومعترف به كجزء من الحرف التقليدية في المنطقة. يعكس أسلوب صنع وظيفي وراقٍ في آنٍ واحد. تُحمل منطقه إلى خطوط وبناء كل قطعة.',
    ],
    imageFile: IMG.khous,
    imageAlt: withBrandAlt('نسيج الخوص من سعف النخيل — حرفة تراثية إماراتية ورمز من رموز دار Bint Saeed'),
  },
  {
    id: 'al-ain-rosette',
    eyebrow: 'الزخرفة',
    title: 'Al Ain Rosette',
    paragraphs: [
      'تظهر زهرة العين كحجر عقيق منحوت داخل الدار. يعكس لونها الدافئ مشهد صحراء العين في دولة الإمارات، بينما يستحضر شكلها الأشكال المستديرة لزهرة الصحراء وزهر Tribulus omanense الأصفر. حالياً، تظهر في المجوهرات والقطع الصغيرة كنقطة تمييز.',
    ],
    imageFile: IMG.alAinRosette,
    imageAlt: withBrandAlt('زخرفة Al Ain Rosette من العقيق — رمز تراثي إماراتي من أبوظبي'),
  },
  {
    id: 'knotted-lines-of-lineage',
    eyebrow: 'الخط والاستمرارية',
    title: 'Knotted Lines',
    paragraphs: [
      'تظهر الخطوط المربوطة في الدار كعنصر متكرر، على شكل أزرار وخيوط عبر الملابس. كل عقدة تعكس اتصالاً عبر الزمن، تربط ما ورثته بما تعيشينه. موضوعة قرب مرتديها، تبقى تذكيراً خفياً بقصة مستمرة.',
    ],
    imageFile: IMG.knottedLines,
    imageAlt: withBrandAlt('زخرفة Knotted Lines الذهبية على القماش — رمز الاستمرارية في دار Bint Saeed'),
  },
  {
    id: 'the-strands',
    eyebrow: 'الحجر والخيط',
    title: 'The Strands',
    paragraphs: [
      'تتكوّن The Strands من أحجار طبيعية، مرتبة على الكتف وعبر الثوب. في الدار، تُمدّ الخط المربوط إلى خيط متصل — محسوب في الموضع، متعمّد في الوزن، وقريب من مرتديته. ليست زينة ولا لاحقة؛ توازن القصة بينما تحمل الاتصال بين الأصل والحضور كرمز محدّد للدار.',
    ],
    imageFile: IMG.strands,
    imageAlt: withBrandAlt('خيوط عباءة من أحجار طبيعية — رمز دار قابل للارتداء من الخيط والتوازن، Bint Saeed أبوظبي'),
  },
]
