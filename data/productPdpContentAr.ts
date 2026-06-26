import type { Product } from '@/data/products'
import { buildKnightsbridgeDressPdpContent } from '@/data/knightsbridgeDressPdpContent'
import type { ProductPdpContent } from '@/data/productPdpContent'
import { getProductSlug } from '@/lib/products/links'
import { getBelgraviaPdpFaq } from '@/lib/products/belgraviaSchemaI18n'
import { getKensingtonPdpFaq } from '@/lib/products/kensingtonSchemaI18n'
import { getKnightsbridgePdpFaq } from '@/lib/products/knightsbridgeSchemaI18n'
import {
  knightsbridgePdpColorLabel,
} from '@/lib/products/knightsbridgePairing'
import { buildVariantSku } from '@/lib/products/sku'

type MayfairColorKey = 'deep-maroon' | 'black' | 'peach'

const MAYFAIR_COLOR_COPY: Record<MayfairColorKey, { label: string; adj: string }> = {
  'deep-maroon': { label: 'Deep Maroon', adj: 'خمري داكن' },
  black: { label: 'Black', adj: 'أسود' },
  peach: { label: 'Peach', adj: 'خوخي' },
}

function normalizeMayfairColor(color?: string): MayfairColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('black')) return 'black'
  if (c.includes('peach')) return 'peach'
  return 'deep-maroon'
}

const NOTHING_HILL_STYLE_SKU = 'BS-KF-002'

const KAFTAN_COMPOSITION_DETAILS = [
  'القماش الخارجي: كريب شيفون (100% بوليستر)',
  'الفستان الداخلي: 100% بوليستر',
] as const

const NOTHING_HILL_COMPOSITION_DETAILS = [
  'القماش الخارجي: شيفون (100% بوليستر)',
  'الفستان الداخلي: 100% بوليستر',
] as const

const KAFTAN_CARE_DETAILS = [
  'يوصى بالتنظيف الجاف الاحترافي',
  'غسل يدوي لطيف بماء بارد عند الحاجة',
  'عدم استخدام المبيض',
  'عدم التجفيف الآلي',
] as const

const ABAYA_CARE_DETAILS = ['تنظيف جاف احترافي فقط'] as const

const BELGRAVIA_COMPOSITION_DETAILS = [
  'القماش الخارجي: مزيج كريب خفيف (80% بوليستر، 20% فيسكوز)',
  'تركيبة البطانة: (70% بوليستر، 30% فيسكوز)',
] as const

function cmToInches(cm: number): number {
  return Math.round(cm / 2.54)
}

function kaftanFitAndSizeDetails(maxLengthCm: number, opts?: { includeAdjustableTies?: boolean }): string[] {
  const lines = [
    'مقاس واحد',
    `الطول الأقصى للقطعة: ${maxLengthCm} سم / ${cmToInches(maxLengthCm)} بوصة`,
  ]
  if (opts?.includeAdjustableTies !== false) {
    lines.push('يمكن تعديل الانسيابية عبر أربطة داخلية مخفية')
  }
  lines.push('طول العارضة 155 سم / 61 بوصة')
  return lines
}

export function buildMayfairKaftanContentAr(color?: string): ProductPdpContent {
  const { label, adj } = MAYFAIR_COLOR_COPY[normalizeMayfairColor(color)]

  return {
    introParagraphs: [
      `صُمم كفتان مايفير للمرأة التي تدرك أن الأناقة لا تعرف الثبات. قُصّ من كريب شيفون بلون ${adj} مع فستان داخلي متصل، ليمنح هذا الكفتان الشيفون انسيابية ناعمة تنساب بسهولة من الكتف حتى الحاشية.`,
      'ينسدل وشاح ناعم من الكتف الأيسر ويمكن تنسيقه بشكل قطري عبر الجسم باستخدام دبوس شعار Bint Saeed الذهبي المميز. كما تتيح الأربطة الداخلية المخفية تعديل الانسيابية بأكثر من أسلوب، سواء بإطلالة منسابة تشبه العباءة أو بقوام أكثر تحديدًا. النتيجة قطعة تتشكل مع المرأة التي ترتديها، وتتكيف طبيعيًا مع مختلف المناسبات واللحظات.',
      'خفيف، متعدد الاستخدامات، ومصمم ليُرتدى لسنوات لا لمواسم عابرة، ينتقل كفتان مايفير بسلاسة بين مختلف المناسبات. يمكن ارتداؤه لحفل زفاف، أو احتفال، أو عشاء في الخارج، أو حتى ليوم عادي يستحق لمسة استثنائية. لا تحدده مدينة ولا وجهة ولا لحظة؛ بل يصبح جزءًا من قصتها ويرافقها أينما ذهبت.',
      'إنها قطعة لا تُختار فقط لجمالها، بل للشعور الذي تمنحه للمرأة منذ اللحظة الأولى التي ترتديها فيها.',
    ],
    productDetails: [
      `كفتان كريب شيفون بلون ${adj}`,
      'انسيابية ناعمة ببناء متعدد الطبقات',
      'فستان داخلي متصل لسهولة الارتداء',
      'ياقة على شكل V',
      'وشاح متصل منسدل من الكتف الأيسر',
      'يتضمن دبوس شعار Bint Saeed الذهبي المميز',
      'يمكن تنسيق الوشاح بشكل قطري عبر الجسم',
      'تصميم بأربطة داخلية مخفية يتيح خيارات تنسيق متعددة',
      'يمكن ارتداؤه بانسيابية واسعة أو بقوام محدد برقة',
      'أكمام مفتوحة تمنح حركة أنيقة',
      'بناء خفيف مصمم للراحة والأناقة',
      `اللون: ${label}`,
      'صُنع في أبوظبي، الإمارات العربية المتحدة',
    ],
    compositionDetails: [...KAFTAN_COMPOSITION_DETAILS],
    fitAndSizeDetails: kaftanFitAndSizeDetails(165),
    careDetails: [...KAFTAN_CARE_DETAILS],
  }
}

type NothingHillColorKey = 'peach-pink' | 'black' | 'peach'

const NOTHING_HILL_COLOR_COPY: Record<NothingHillColorKey, { label: string; adj: string }> = {
  'peach-pink': { label: 'Peach Pink', adj: 'خوخي وردي' },
  peach: { label: 'Peach', adj: 'خوخي' },
  black: { label: 'Black', adj: 'أسود' },
}

function normalizeNothingHillColor(color?: string): NothingHillColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('black')) return 'black'
  if (c.includes('peach pink') || c.includes('peach-pink')) return 'peach-pink'
  if (c.includes('peach')) return 'peach'
  return 'peach-pink'
}

export function buildNothingHillKaftanContentAr(color?: string): ProductPdpContent {
  const { label, adj } = NOTHING_HILL_COLOR_COPY[normalizeNothingHillColor(color)]

  return {
    introParagraphs: [
      `صُمم كفتان ناثينغ هيل للمرأة التي تقدر الأناقة في أكثر صورها سلاسة. صُنع من طبقات شيفون ناعمة بلون ${adj}، واكتمل بياقة bateau راقية ليمنح انسيابية متدفقة تتحرك بأناقة مع كل خطوة.`,
      'خفيف ومرن، ينساب الشيفون طبيعيًا من الكتف حتى الحاشية، ليخلق إحساسًا بالحركة مع الحفاظ على توازن جميل في القوام. ويظهر شعار Bint Saeed الذهبي في المقدمة بشكل رصين، كتعبير أنيق عن هوية الدار.',
      `تمنح درجة ${adj} الهادئة دفئًا وأنوثة للتصميم، ما يجعلها مناسبة بالقدر نفسه للاحتفالات، واللقاءات الحميمة، وفعاليات السفر، وكل مناسبة تتطلب أناقة هادئة. كما يتيح البناء الهوائي للقوام أن ينساب حول الجسم بخفة، ليعكس حضورًا راقيًا وسهلًا في آنٍ واحد.`,
      'صُمم ليُرتدى موسمًا بعد آخر، ولا تحدده صيحات عابرة أو مناسبة واحدة. إنها قطعة تُختار لما تمنحه من سهولة في الظهور بإطلالة جميلة، سواء في مناسبة خاصة، أو لقاء مسائي، أو لحظة تستحق أن تُحفظ في الذاكرة.',
      'خفيف، أنيق، وخالد، ليصبح جزءًا من قصة المرأة التي ترتديه ويرافقها أينما أخذتها الحياة.',
    ],
    productDetails: [
      `كفتان شيفون ناعم بلون ${adj}`,
      'انسيابية متعددة الطبقات بحركة رشيقة',
      'فستان داخلي متصل لسهولة الارتداء',
      'ياقة bateau أنيقة',
      'يتضمن شعار Bint Saeed الذهبي المميز',
      'ألواح شيفون منسدلة بحركة مرنة',
      'بناء خفيف مصمم للراحة والأناقة',
      'مصمم ليتحرك بانسجام طبيعي مع من ترتديه',
      'مناسب للاحتفالات واللقاءات وفعاليات السفر والمناسبات الخاصة',
      'قوام هوائي بانسدال أنثوي ناعم',
      `اللون: ${label}`,
      'صُنع في أبوظبي، الإمارات العربية المتحدة',
      `رمز المنتج: ${buildVariantSku(NOTHING_HILL_STYLE_SKU, label)}`,
    ],
    compositionDetails: [...NOTHING_HILL_COMPOSITION_DETAILS],
    fitAndSizeDetails: kaftanFitAndSizeDetails(165, { includeAdjustableTies: false }),
    careDetails: [...KAFTAN_CARE_DETAILS],
  }
}

type BelgraviaColorKey = 'deep-black' | 'navy-blue'

const BELGRAVIA_COLOR_COPY: Record<BelgraviaColorKey, { label: string }> = {
  'deep-black': { label: 'Deep Black' },
  'navy-blue': { label: 'Navy Blue' },
}

function normalizeBelgraviaColor(color?: string): BelgraviaColorKey {
  const c = (color ?? '').toLowerCase()
  if (c.includes('navy')) return 'navy-blue'
  if (c.includes('black')) return 'deep-black'
  return 'deep-black'
}

export function buildBelgraviaAbayaContentAr(color?: string): ProductPdpContent {
  const { label } = BELGRAVIA_COLOR_COPY[normalizeBelgraviaColor(color)]

  return {
    introParagraphs: [
      'تستمد عباية بلغرافيا إلهامها من البِشت، أحد أكثر الأزياء شهرة في شبه الجزيرة العربية، مع إعادة صياغته في انسيابية معاصرة تناسب إيقاع الحياة الحديثة.',
      'تتوفر باللونين Deep Black وNavy Blue، وتتميّز بحياكة يدوية مستوحاة من فن الخوص الإماراتي التقليدي، وهو حرفة نسج سعف النخيل المتوارثة عبر الأجيال. يستحضر النمط هندسة السعف المنسوج ليضيف ملمسًا وحضورًا تراثيًا إلى قوام أنيق وهادئ.',
      'صُنعت عباية بلغرافيا في أبوظبي، وتعكس التزام Bint Saeed بحمل الحِرف التقليدية إلى المستقبل عبر تصميم معاصر. يمنح القص المستوحى من البِشت حركة رشيقة مع الحفاظ على بنية راقية، بينما تؤمن الجيوب المخفية والبنية المبطنة بالكامل راحة وسهولة في الارتداء.',
      'صُممت لتنتقل بسلاسة بين المناسبات والدول وأنماط الحياة، فيمكن ارتداؤها في زفاف بالرياض، أو عشاء في لندن، أو فعالية في باريس، أو في الحياة اليومية في الخليج. إنها قطعة خالدة لا تتبع الصيحات العابرة، موجهة للمرأة التي تقدّر الأناقة والحِرفة والقطع التي تبقى ذات صلة أينما ارتدتها.',
      'وككل عبايات Bint Saeed، تُصنع عباية بلغرافيا حسب الطلب ويمكن تخصيصها باسم أو تاريخ أو رسالة ذات معنى داخل الجيب المخفي.',
    ],
    productDetails: [
      'انسيابية عباية مستوحاة من البِشت',
      'متوفرة بلوني Deep Black وNavy Blue',
      'حياكة يدوية مستوحاة من فن الخوص التقليدي (نسج سعف النخيل)',
      'تصميم أمامي مفتوح',
      'إغلاق اختياري بأزرار كبس مخفية متاح عند الطلب',
      'مبطنة بالكامل لراحة ولمسة نهائية راقية',
      'جيوب جانبية مخفية',
      'إمكانية التخصيص داخل الجيب المخفي',
      'انسيابية واسعة ومريحة لسهولة الحركة',
      'قماش خارجي من مزيج كريب خفيف',
      'تصميم معاصر مستوحى من التراث الإماراتي والخليجي وحِرفه',
      'مناسبة للأناقة اليومية واللقاءات وحفلات الزفاف والمناسبات الخاصة',
      'طول العارضة: 155 سم / 61 بوصة',
      'الطول: 138 سم / 54.5 بوصة',
      `اللون: ${label}`,
      'صُنعت في أبوظبي، الإمارات العربية المتحدة',
    ],
    compositionDetails: [...BELGRAVIA_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      'المقاسات المتاحة: XS, S, M, L, XL, XXL',
      'الطول: 138 سم / 54.5 بوصة',
      'طول العارضة: 155 سم / 61 بوصة',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    faq: getBelgraviaPdpFaq('ar'),
  }
}

const KENSINGTON_COMPOSITION_DETAILS = [
  'القماش الخارجي: 80% بوليستر، 20% فيسكوز',
  'البطانة: 70% بوليستر، 30% فيسكوز',
] as const

export function buildKensingtonAbayaContentAr(): ProductPdpContent {
  return {
    introParagraphs: [
      'صُممت عباية كنسينغتون للمرأة التي ترى أن الثقة تُعبّر عن نفسها عبر البساطة. تأتي باللون الأسود العميق مع انسيابية طويلة ونقية، لتمنح حضورًا يعتمد على البنية والحركة والتوازن، لا على الزخرفة.',
      'مستوحاة من قوة وبنية المعاطف المفصّلة بعناية، تجمع عباية كنسينغتون بين سهولة الزي التقليدي والمظهر المصقول لجاكيت بتفصيل متقن. وتمنح الخطوط النظيفة عند الكتفين والجسم قوامًا متزنًا وأنيقًا وسهل الارتداء.',
      'تستمد الحواف الملمسية عند الصدر والأساور إلهامها من فن الخوص الإماراتي التقليدي، وهو نسج سعف النخيل المتوارث عبر الأجيال. وقد أُعيد تقديمها من خلال نسيج أورغانزا أسود لامع بخفة، ليضيف عمقًا وملمسًا دون مبالغة.',
      'صُممت لتُرتدى بسهولة فوق الفساتين، والقطع المفصّلة، وأزياء المناسبات، والإطلالات اليومية، فتنتقل طبيعيًا بين الحياة اليومية، واجتماعات العمل، والعشاءات، واللقاءات، والسفر، والمناسبات الخاصة. جمالها الخالد يمنحها القدرة على مرافقة المرأة عبر البلدان والمواسم ومراحل الحياة، مع الحفاظ على صلتها بالحِرفة والأناقة التي ألهمت تصميمها.',
      'مبطنة بالكامل بقماش كريب ناعم ومكتملة بجيبين جانبيين مخفيين، توازن عباية كنسينغتون بين العملية والرقي مع الحفاظ على انسيابية نظيفة وأنيقة. وككل عبايات Bint Saeed، يمكن تخصيصها ببطاقة داخلية مخفية تحمل اسمًا أو تاريخًا أو رسالة ذات معنى، ما يجعلها خيارًا مميزًا للهدايا والمناسبات.',
      'أنيقة، متعددة الاستخدامات، ومصممة لتُرتدى لسنوات لا لمواسم؛ عباية كنسينغتون صُممت لترافق المرأة أينما أخذتها الحياة.',
    ],
    productDetails: [
      'Deep Black',
      'ياقة دائرية',
      'حشوة كتف خفيفة',
      'إغلاق أمامي بأزرار كبس',
      'حياكة Bint Saeed المميزة مستوحاة من فن الخوص التقليدي',
      'جيبان جانبيان مخفيان',
      'بطانة كريب ناعمة',
      'بطاقة تخصيص داخلية مخفية اختيارية',
      'الطول: 138 سم / 54.5 بوصة',
      'طول العارضة: 155 سم / 61 بوصة',
      'العارضة ترتدي مقاس XS',
      'صُنعت في أبوظبي، الإمارات العربية المتحدة',
    ],
    compositionDetails: [...KENSINGTON_COMPOSITION_DETAILS],
    fitAndSizeDetails: [
      'المقاسات المتاحة: XS, S, M, L, XL',
      'مصممة بقصّة هيكلية مع انسيابية ناعمة',
      'الطول: 138 سم / 54.5 بوصة',
      'طول العارضة: 155 سم / 61 بوصة',
      'العارضة ترتدي مقاس XS',
    ],
    careDetails: [...ABAYA_CARE_DETAILS],
    faq: getKensingtonPdpFaq('ar'),
  }
}

function isKnightsbridgeNavyColor(color?: string): boolean {
  return (color ?? '').toLowerCase().includes('navy')
}

export function buildKnightsbridgeAbayaJacketContentAr(color?: string): ProductPdpContent {
  const catalogColor = isKnightsbridgeNavyColor(color) ? 'Navy Grey' : 'Dark Brown'
  const colorLabel = knightsbridgePdpColorLabel(catalogColor, 'ar')

  return {
    introParagraphs: [
      'النساء اللواتي تبدو أناقتهن سهلة هن غالبًا الأقل انشغالًا باتباع الصيحات. لا يترددن في التعبير عن ذواتهن، وغالبًا ما يصنعن هن الاتجاه بدلًا من اتباعه.',
      'صُممت عباية الجاكيت خوص للمرأة التي تتحرك بثقة وفق إيقاعها الخاص. تقع بين العباية والجاكيت، فتجمع سهولة الزي التقليدي مع حضور الملابس الخارجية المعاصرة.',
      'بقصة مريحة ومتوفرة بلوني Dark Brown وNavy Grey، تُنسق بسهولة فوق الفساتين، والقطع المفصلة، والملابس المحاكة، والأساسيات اليومية. سواء ارتديت مع حذاء رياضي أو كعب، فإنها تتأقلم طبيعيًا مع التنقل والسفر والحياة بين المدن.',
      'تستمد التفاصيل الملمسية عند جيوب الصدر والأساور إلهامها من فن الخوص الإماراتي التقليدي المتوارث عبر الأجيال. وقد أُعيد تقديمها بصياغة معاصرة لتمنح التصميم عمقًا وبنية وشخصية، مع الحفاظ على مظهر راقٍ.',
      'تضيف تفاصيل الكتف المميزة تأثيرًا عسكريًا رصينًا إلى القوام، لتمنحه حضورًا واثقًا متوازنًا مع الراحة وسهولة الحركة. كما تعزز الجيوب الأربع العملية اليومية، وتشمل جيبين على الصدر وجيبين جانبيين مخفيين.',
      'يكتمل التصميم بأزرار Bint Saeed الذهبية المميزة Knotted Lines of Lineage، وهي إحدى الشفرات البصرية الدائمة للدار. تستلهم هذه التفاصيل الروابط التي تصل الأجيال ببعضها، وتذكّر بأن أكثر ما له قيمة هو ما نحمله معنا إلى الأمام.',
      'صُنعت عباية الجاكيت خوص في أبوظبي، وتعكس التزام Bint Saeed بإدخال عناصر من التراث الإماراتي إلى خزانة معاصرة. سواء ارتُديت لقهوة في لندن، أو ليوم سفر، أو لاجتماع في دبي، أو للحياة اليومية في الخليج، فهي تقدم انسيابية مميزة للمرأة التي تدرك أن الأناقة ليست للمناسبات فقط.',
      'مريحة، متعددة الاستخدامات، ومصممة لتُرتدى باستمرار؛ تحتفي عباية الجاكيت خوص بفكرة أن الأناقة الحقيقية لا تظهر فقط في اللحظات الكبرى، بل في الطريقة التي تختار بها المرأة أن تقدم نفسها كل يوم.',
    ],
    productDetails: [
      `عباية جاكيت ${colorLabel} بقصّة مريحة`,
      'ياقة مدببة',
      'إغلاق أمامي مخفي بالأزرار',
      'جيبان على الصدر',
      'جيبان جانبيان مخفيان',
      'تفاصيل تبويب عند الكتف',
      'أكمام طويلة بأساور مزودة بأزرار',
      'حياكة Bint Saeed المميزة المستوحاة من الخوص على جيوب الصدر والأساور',
      'أزرار Bint Saeed الذهبية المميزة Knotted Lines of Lineage',
      'فستان داخلي متصل',
      'بطاقة تخصيص داخلية مخفية اختيارية تتضمن اسمًا أو تاريخًا أو رسالة ذات معنى',
      `اللون: ${colorLabel} مع تفاصيل خوص متباينة بطابع طبيعي`,
      'الطول: 143 سم / 56.3 بوصة',
      'صُنعت في أبوظبي، الإمارات العربية المتحدة',
    ],
    compositionDetails: [
      'القماش الخارجي: 60% بوليستر، 40% قطن',
      'الفستان الداخلي: 100% بوليستر',
    ],
    fitAndSizeDetails: [
      'طول العارضة: 160 سم / 63 بوصة',
      'العارضة ترتدي مقاس XS',
      'مصممة بقصّة مريحة',
      'المقاسات المتاحة: XS, S, M, L, XL, XXL',
    ],
    careDetails: ['تنظيف جاف احترافي فقط'],
    faq: getKnightsbridgePdpFaq('ar'),
  }
}

function isMayfairKaftan(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'mayfair-kaftan' || product.id === 'bs-002'
}

function isNothingHillKaftan(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'nothing-hill-kaftan' || product.id === 'cf-002'
}

function isBelgraviaAbaya(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'belgravia-abaya' || product.id === 'ab-006'
}

function isKensingtonAbaya(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'kensington-abaya' || product.id === 'ab-004'
}

function isKnightsbridgeAbayaJacket(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'knightsbridge-abaya-jacket' || product.id === 'bs-001'
}

function isKnightsbridgeDress(product: Product): boolean {
  const slug = getProductSlug(product).toLowerCase()
  return slug === 'knightsbridge-dress' || product.id === 'bs-003'
}

/** Arabic PDP copy for hero products; returns null for other slugs. */
export function getProductPdpContentAr(product: Product, color?: string): ProductPdpContent | null {
  if (isMayfairKaftan(product)) return buildMayfairKaftanContentAr(color)
  if (isNothingHillKaftan(product)) return buildNothingHillKaftanContentAr(color)
  if (isBelgraviaAbaya(product)) return buildBelgraviaAbayaContentAr(color)
  if (isKensingtonAbaya(product)) return buildKensingtonAbayaContentAr()
  if (isKnightsbridgeAbayaJacket(product)) return buildKnightsbridgeAbayaJacketContentAr(color)
  if (isKnightsbridgeDress(product)) return buildKnightsbridgeDressPdpContent(color, 'ar')
  return null
}
