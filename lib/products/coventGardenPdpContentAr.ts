import type { ProductPdpContent } from '@/data/productPdpContent'
import type { PdpIntroParagraph } from '@/lib/products/pdpIntroRich'
import {
  THE_CODES_AL_TALLI_HREF,
  THE_CODES_KHOUS_HREF,
  THE_CODES_KNOTTED_LINES_HREF,
  pdpIntroParagraphsToPlainText,
} from '@/lib/products/pdpIntroRich'
import { getCoventGardenAbayaPdpFaq } from '@/lib/products/coventGardenAbayaFaqI18n'
import { getCoventGardenLongDressFaq } from '@/lib/products/coventGardenLongDressFaqI18n'
import { getCoventGardenSignatureSetFaq } from '@/lib/products/coventGardenSignatureSetFaqI18n'
import { getHouseCodesDetailGroup } from '@/lib/products/pdpHouseCodesGroupsI18n'
import { localizedColorName } from '@/lib/products/imageAltI18n'

const COVENT_GARDEN_ABAYA_INTRO_AR: PdpIntroParagraph[] = [
  [
    {
      type: 'text',
      value: 'لكل دار أزياء القطعة التي تُعرّفها. بالنسبة إلى Bint Saeed، عباية Covent Garden إحدى تلك الإبداعات.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'تجمع بين التفصيل المعاصر والفن وإحدى أعز الحرف التقليدية في دولة الإمارات العربية المتحدة، وصُنعت عباية Covent Garden للنساء اللواتي يقدّرن الأناقة الخالدة المعبّرة عبر تصميم استثنائي. مبطّنة بالكامل ببطانة كريب ناعمة، تتحرك قصتها الأنيقة A-line بجمال مع كل خطوة، لتمنح حضوراً راقياً للأعراس والمناسبات الرسمية والتجمعات الأنيقة واللحظات التي يهم فيها ترك انطباع دائم.',
    },
  ],
  [
    {
      type: 'text',
      value: 'تتوفر بالألوان العنابي والأسود العميق والأزرق الكحلي، وقد وُضعت كل تفصيلة بعناية. تُنهى كتفا العباءة بأزرار ',
    },
    { type: 'codeLink', label: 'Knotted Line', href: THE_CODES_KNOTTED_LINES_HREF, bold: true },
    { type: 'text', value: ' الذهبية المميزة لـ Bint Saeed، بينما تزيّن الأساور الواسعة تفاصيل ' },
    { type: 'codeLink', label: 'Al Talli', href: THE_CODES_AL_TALLI_HREF, bold: true },
    {
      type: 'text',
      value:
        ' المنسوجة. يُعترف بـ Al Talli من قِبل اليونسكو كتراث ثقافي غير مادي، وهو من أعز الحرف الإماراتية التقليدية. في Bint Saeed، نُعيد تخييل استخدام Al Talli عبر التصميم المعاصر، ليُرتدى ويُقدَّر من نساء حول العالم.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'يكمل التصميم وشاحاً قابلاً للفصل، منتهياً بتفاصيل Al Talli ودبوس الشعار الذهبي المميز لـ Bint Saeed. يُرتدى منسدلاً من الكتف أو بشكل قطري عبر الجسم، فيحوّل القصة بحضور وتميّز وأناقة خالدة.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'مثل كل عباءة Bint Saeed، يمكن تخصيص عباية Covent Garden عبر الملصق الداخلي المخفي المميز للدار، لإضافة اسم أو تاريخ أو رسالة ذات معنى تبقى قريبة منكِ في كل مرة ترتدينها.',
    },
  ],
  [
    { type: 'text', value: 'تنسجم عباية Covent Garden بجمال مع ' },
    { type: 'codeLink', label: 'Covent Garden Dress', href: '/shop/covent-garden-long-dress', bold: true },
    { type: 'text', value: ' أو ' },
    { type: 'codeLink', label: 'Hampstead Dress', href: '/shop/hampstead-dress', bold: true },
    {
      type: 'text',
      value: '، لتكوين إطلالات طبقات راقية حيث وُضع كل تفصيل بعناية من الداخل إلى الخارج.',
    },
  ],
]

const COVENT_GARDEN_LONG_DRESS_INTRO_AR: PdpIntroParagraph[] = [
  [
    {
      type: 'text',
      value: 'بعض الفساتين تُشترى لمناسبة محددة. الأفضل منها يصبح جزءاً من لحظات لا تُحصى في حياتك.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'صُمم فستان Covent Garden Dress للنساء اللواتي يقدّرن القصص الخالدة التي تنتقل بسلاسة بين العمل والغداء الأنيق وشاي بعد الظهر والعشاء وافتتاحات المعارض والفعاليات الثقافية. معاصر وراقٍ، يقدّم قصة متوازنة بأناقة دون مبالغة.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'يتوفر بالألوان العنابي والأسود العميق والأزرق الكحلي، ويتميز بقصة ناعمة ورقبة دائرية نظيفة وجيوب جانبية مخفية. مبطّن ببطانة كريب ناعمة لراحة استثنائية، يمنح حركة رشيقة مع إمكانية تعديل الطول عند الطلب.',
    },
  ],
  [
    {
      type: 'text',
      value: 'جميل بمفرده، يُعد أيضاً من فساتين Bint Saeed المميزة تحت العباءة. صُنع للنساء اللواتي يدركن أن الأناقة الحقيقية تُعرَّف بالقصة والملاءمة والنسبة لا بالزخرفة الزائدة، ويتناغم بجمال مع ',
    },
    { type: 'codeLink', label: 'Covent Garden Abaya', href: '/shop/covent-garden-abaya', bold: true },
    { type: 'text', value: ' و' },
    { type: 'codeLink', label: 'Kensington Abaya', href: '/shop/kensington-abaya', bold: true },
    { type: 'text', value: ' و' },
    { type: 'codeLink', label: 'Marylebone Abaya', href: '/shop/marylebone-abaya', bold: true },
    {
      type: 'text',
      value: '، لتكوين إطلالة راقية حيث وُضعت كل طبقة بعناية — لأن الأناقة الحقيقية تبدأ قبل الطبقة الخارجية.',
    },
  ],
]

const COVENT_GARDEN_SIGNATURE_SET_INTRO_AR: PdpIntroParagraph[] = [
  [
    {
      type: 'text',
      value: 'أفضل الخزائن لا تُبنى بشراء المزيد، بل باختيار قطع تخلق إمكانيات أكثر في كل مرة تفتحين فيها خزانتك.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'طقم Covent Garden Signature Set طقم معاصر من قطعتين يضم فستان Covent Garden Dress وجاكيت مفصّل بأكمام قصيرة. صُمم للحظات الحياة اليومية من العمل والغداء الأنيق وشاي بعد الظهر والعشاء والفعاليات الثقافية، ويقدّم قصة راقية دون مبالغة.',
    },
  ],
  [
    {
      type: 'text',
      value: 'يتوفر بالألوان العنابي والأسود العميق والأزرق الكحلي، ويتميز الجاكيت بجيبين أماميين بتفاصيل نسيج مميزة مستوحاة من ',
    },
    { type: 'codeLink', label: 'Al Khous', href: THE_CODES_KHOUS_HREF, bold: true },
    {
      type: 'text',
      value:
        '، إحدى أقدم الحرف التقليدية في دولة الإمارات. لأجيال، نسج الإماراتيون أوراق النخيل في أشياء وظيفية وزخرفية، فكان Al Khous تعبيراً دائماً عن التراث الثقافي. أُعيد تفسيره عبر التفصيل المعاصر ليضيف ملمساً وحرفية مع الحفاظ على خطوط أنيقة نظيفة.',
    },
  ],
  [
    { type: 'text', value: 'ينتهي بأزرار ' },
    { type: 'codeLink', label: 'Knotted Lines', href: THE_CODES_KNOTTED_LINES_HREF, bold: true },
    {
      type: 'text',
      value:
        ' الذهبية المميزة لـ Bint Saeed، فيحمل أحد رموز الدار الدائمة. مستوحاة من الروابط التي توحّد الأجيال، تمثل كل زر القصص والقيم والتقاليد التي تُحمل إلى الأمام.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'يمكن ارتداء الطقم معاً أو كل قطعة على حدة، ما يمنح مرونة في التنسيق. مثل كل قطعة Bint Saeed، يتضمن تخصيصاً عبر الملصق الداخلي المخفي المميز للدار.',
    },
  ],
]

function colorListAr(): string {
  return ['Burgundy', 'Deep Black', 'Navy Blue'].map((c) => localizedColorName(c, 'ar')).join('، ')
}

export function buildCoventGardenAbayaContentAr(): ProductPdpContent {
  return {
    introParagraphParts: COVENT_GARDEN_ABAYA_INTRO_AR,
    introParagraphs: pdpIntroParagraphsToPlainText(COVENT_GARDEN_ABAYA_INTRO_AR),
    productDetails: [
      'عباية معاصرة بقصة A-line وانسيابية أنيقة',
      'تصميم مفتوح من الأمام مع إمكانية إغلاق مخفي بأزرار عند الطلب',
      'وشاح قابل للفصل مع دبوس الشعار الذهبي المميز لـ Bint Saeed',
      'كتفان بتفاصيل أزرار مميزة',
      'أساور واسعة بتفاصيل نسيج تراثية',
      'مبطّنة بالكامل ببطانة كريب ناعمة',
      'جيوب جانبية مخفية',
      'تخصيص مجاني على الملصق الداخلي المخفي المميز للدار',
      `متوفر بالألوان: ${colorListAr()}`,
    ],
    productDetailGroups: [getHouseCodesDetailGroup('knotted-line-al-talli', 'ar')],
    compositionDetails: ['الخارجي: 80% بوليستر، 20% فيسكوز', 'البطانة: 70% بوليستر، 30% فيسكوز'],
    careDetails: ['يُنصح بالتنظيف الجاف الاحترافي. غسل لطيف عند 30°م عند الحاجة.'],
    fitAndSizeDetails: [
      'قصة A-line أنيقة',
      'الطول: 138 سم / 54.5 بوصة',
      'طول العارضة: 155 سم / 61 بوصة',
      'العارضة ترتدي مقاس XS',
      'طول مخصص متاح عند الطلب',
    ],
    originDetails: ['صُنع في أبوظبي، الإمارات العربية المتحدة'],
    faq: getCoventGardenAbayaPdpFaq('ar'),
  }
}

export function buildCoventGardenLongDressContentAr(): ProductPdpContent {
  return {
    introParagraphParts: COVENT_GARDEN_LONG_DRESS_INTRO_AR,
    introParagraphs: pdpIntroParagraphsToPlainText(COVENT_GARDEN_LONG_DRESS_INTRO_AR),
    productDetails: [
      'فستان بقصة ناعمة ورقبة دائرية نظيفة',
      'جيوب جانبية مخفية',
      'مبطّن ببطانة كريب ناعمة',
      'طول قابل للتعديل عند الطلب',
      `متوفر بالألوان: ${colorListAr()}`,
    ],
    compositionDetails: ['الخارجي: 80% بوليستر، 20% فيسكوز', 'البطانة: 70% بوليستر، 30% فيسكوز'],
    careDetails: ['يُنصح بالتنظيف الجاف الاحترافي. غسل لطيف عند 30°م عند الحاجة.'],
    fitAndSizeDetails: [
      'قصة ناعمة متوازنة',
      'الطول: 148 سم / 58.3 بوصة (مقاس M)',
      'طول العارضة: 155 سم / 61 بوصة',
      'العارضة ترتدي مقاس M',
      'طول مخصص متاح عند الطلب',
    ],
    originDetails: ['صُنع في أبوظبي، الإمارات العربية المتحدة'],
    faq: getCoventGardenLongDressFaq('ar'),
  }
}

export function buildCoventGardenSignatureSetContentAr(colorName?: string): ProductPdpContent {
  const resolvedColor = colorName ? localizedColorName(colorName, 'ar') : undefined
  return {
    introParagraphParts: COVENT_GARDEN_SIGNATURE_SET_INTRO_AR,
    introParagraphs: pdpIntroParagraphsToPlainText(COVENT_GARDEN_SIGNATURE_SET_INTRO_AR),
    productDetails: [],
    productDetailGroups: [
      {
        title: resolvedColor ? `الجاكيت — ${resolvedColor}` : 'الجاكيت',
        items: [
          'جاكيت مفصّل بأكمام قصيرة',
          'جيبان أماميان بتفاصيل نسيج مستوحاة من Al Khous',
          'أزرار Knotted Lines الذهبية المميزة',
          'مبطّن بالكامل',
        ],
      },
      {
        title: 'الفستان',
        items: [
          'فستان Covent Garden Dress بقصة ناعمة',
          'رقبة دائرية نظيفة وجيوب جانبية مخفية',
          'مبطّن ببطانة كريب ناعمة',
        ],
      },
      getHouseCodesDetailGroup('knotted-line-only', 'ar'),
    ],
    compositionGroups: [
      {
        title: 'الجاكيت',
        items: ['الخارجي: 80% بوليستر، 20% فيسكوز', 'البطانة: 70% بوليستر، 30% فيسكوز'],
      },
      {
        title: 'الفستان',
        items: ['الخارجي: 80% بوليستر، 20% فيسكوز', 'البطانة: 70% بوليستر، 30% فيسكوز'],
      },
    ],
    careDetails: ['يُنصح بالتنظيف الجاف الاحترافي. غسل لطيف عند 30°م عند الحاجة.'],
    fitAndSizeDetails: [
      'طول الجاكيت: 70 سم (مقاس M)',
      'طول الفستان: 148 سم (مقاس M)',
      'قصة مريحة',
      'طول مخصص متاح عند الطلب',
    ],
    originDetails: ['صُنع في أبوظبي، الإمارات العربية المتحدة'],
    faq: getCoventGardenSignatureSetFaq('ar'),
  }
}
