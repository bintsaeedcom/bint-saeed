import type { Language } from '@/lib/i18n/translations'
import type { AppLocale } from '@/lib/i18n/routing'
import { commerceUi } from '@/lib/i18n/commerceUi'
import {
  ABOUT_DE,
  ABOUT_FR,
  ABOUT_IT,
  ABOUT_NL,
  ABOUT_PT,
} from '@/lib/i18n/editorialLocales/aboutFrItDeNlPt'
import {
  ABOUT_ES,
  ABOUT_ID,
  ABOUT_MS,
  ABOUT_RU,
  ABOUT_ZH,
} from '@/lib/i18n/editorialLocales/aboutEsRuZhIdMs'

export type AboutWomanStep = {
  numeral: string
  title: string
  body: string
}

export type AboutDesignCode = {
  numeral: string
  name: string
  description: string
}

export type AboutPageCopy = {
  imageAlt: string
  breadcrumbHome: string
  breadcrumbAbout: string
  backToHome: string
  heroEyebrow: string
  heroHeadline: string
  heroSubline: string
  heroTagline: string
  ctaReadStory: string
  ctaExploreCollection: string
  marquee: string
  /** Opening manifesto — appears first after the hero (coming-soon ABOUT copy). */
  manifestoTitle: string
  manifestoSubtitle: string
  manifestoP1: string
  manifestoP2: string
  manifestoP3: string
  originLabel: string
  originHeading: string
  originP1BeforeBint: string
  originP1Bint: string
  originP1AfterBint: string
  originP1Strong: string
  originP2Strong: string
  originP2Rest: string
  originP3: string
  womanLabel: string
  womanHeading: string
  womanSteps: AboutWomanStep[]
  womanClosingH3Strong: string
  womanClosingH3Rest: string
  womanClosingP1Strong1: string
  womanClosingP1Middle: string
  womanClosingP1Strong2: string
  womanClosingP1Rest: string
  womanClosingP2Strong1: string
  womanClosingP2Middle: string
  womanClosingP2Strong2: string
  codesLabel: string
  codesHeadingLine1: string
  codesHeadingLine2: string
  codesIntro: string
  designCodes: AboutDesignCode[]
  codesLink: string
  codesClosingH3: string
  codesClosingH3Strong: string
  codesClosingP1Strong: string
  codesClosingP1Rest: string
  codesClosingP2Strong: string
  codesClosingP2Rest: string
  houseLabel: string
  houseHeading: string
  houseParagraphs: string[]
  ctaGivingForward: string
  closingQuote: string
  closingBrand: string
  ctaOurStoryInCodes: string
}

const DESIGN_CODES_EN: AboutDesignCode[] = [
  { numeral: 'I', name: 'THE MONOGRAM', description: 'A mark carried' },
  { numeral: 'II', name: 'AL TALLI', description: 'Heritage passed down' },
  { numeral: 'III', name: 'KHOUS', description: 'Structure as craft' },
  { numeral: 'IV', name: 'AL AIN ROSETTE', description: 'Desert bloom' },
  { numeral: 'V', name: 'KNOTTED LINES', description: 'Connection across time' },
  { numeral: 'VI', name: 'THE STRANDS', description: 'Drawn from the earth' },
]

const DESIGN_CODES_AR: AboutDesignCode[] = [
  { numeral: 'I', name: 'THE MONOGRAM', description: 'علامة تُحمل' },
  { numeral: 'II', name: 'AL TALLI', description: 'إرث يُورَث' },
  { numeral: 'III', name: 'KHOUS', description: 'بنية كحرفة' },
  { numeral: 'IV', name: 'AL AIN ROSETTE', description: 'زهرة الصحراء' },
  { numeral: 'V', name: 'KNOTTED LINES', description: 'وصلة عبر الزمن' },
  { numeral: 'VI', name: 'THE STRANDS', description: 'مستمدة من الأرض' },
]

const ABOUT_EN: AboutPageCopy = {
  imageAlt: 'Bint Saeed — Abu Dhabi',
  breadcrumbHome: 'Home',
  breadcrumbAbout: 'About',
  backToHome: 'Back to Home',
  heroEyebrow: 'BINT SAEED · ABU DHABI',
  heroHeadline: 'Carrying Heritage Forward.',
  heroSubline: 'A house shaped by origin. Devoted to the daughter in every woman.',
  heroTagline: 'Abu Dhabi · Emirati design codes · Contemporary global presence',
  ctaReadStory: 'READ THE STORY',
  ctaExploreCollection: 'EXPLORE THE COLLECTION',
  marquee: 'BINT SAEED · ABU DHABI · CARRYING HERITAGE FORWARD · DEVOTED TO THE DAUGHTER IN EVERY WOMAN ·',
  manifestoTitle: 'ABOUT',
  manifestoSubtitle: 'A house shaped by origin, carried across the world.',
  manifestoP1:
    'The woman of today does not live as the woman of decades ago. She moves between responsibilities, countries, meetings, family life, travel, and occasion with a pace that asks more of her than ever before. Yet whatever she becomes in the world, she remains a daughter first, carrying with her the values, recognitions, and standards she was shaped by.',
  manifestoP2:
    'Bint Saeed fills the gap where consistent elegance is often lost as women transition between settings, environments, and borders. The Bint Saeed wardrobe allows its clientele to present themselves with confidence and certainty, without the need to adapt to every passing trend.',
  manifestoP3:
    'Rooted in Abu Dhabi, Bint Saeed builds its design language through enduring codes like the woven memory of Khous, the delicacy of Talli, the warmth of natural gemstones, and signature details carried into modern silhouettes made for a life in motion.',
  originLabel: 'THE ORIGIN',
  originHeading: 'A name rooted in lineage, memory, and belonging.',
  originP1BeforeBint: 'In Arabic, ',
  originP1Bint: 'Bint',
  originP1AfterBint:
    ' means daughter of. It is not a reference to where you are, but to where you come from. It carries lineage, memory, and belonging. It holds the story that exists before you, and continues through you. ',
  originP1Strong:
    'Because no matter where life leads, a woman remains connected to her origin. It does not disappear when she moves. It does not change when she grows.',
  originP2Strong:
    'Rooted in Abu Dhabi, Bint Saeed emerges from a place that has always moved forward while preserving its cultural identity.',
  originP2Rest:
    ' A place where ambition and identity exist side by side, where growth is built on origin rather than replacing it. From here, the house extends into a way of living that moves between places with ease.',
  originP3:
    'From Abu Dhabi to Paris, from London to Riyadh, the same sense of self remains. A way of being that does not shift with setting, and a way of dressing that follows it naturally.',
  womanLabel: 'THE WOMAN',
  womanHeading: 'She does not begin again. She continues.',
  womanSteps: [
    {
      numeral: 'I',
      title: 'WHERE SHE IS',
      body: 'Today, a woman moves between cities, cultures, and expectations. She builds a life across places, steps into different roles, and expands what is possible for herself.',
    },
    {
      numeral: 'II',
      title: 'WHAT SHE CARRIES',
      body: 'Yet through all of this, she remains a daughter. Not defined by limitation, but by depth. By where she comes from, and what she carries forward.',
    },
    {
      numeral: 'III',
      title: 'HOW SHE DRESSES',
      body: 'Bint Saeed exists at that intersection. Between heritage and a contemporary life lived locally and across borders. Between where you come from and where you are going. Between the values you have inherited and how you present yourself today.',
    },
  ],
  womanClosingH3Strong: 'Each creation carries that sense of continuity.',
  womanClosingH3Rest:
    ' Not defined by location, but recognised by its consistency. A clear visual language that holds its place wherever it is worn. Origin, expressed in form, in attitude, in the way you are recognised.',
  womanClosingP1Strong1: 'Today, a woman moves between cities, cultures, and expectations.',
  womanClosingP1Middle:
    ' She builds a life across places, steps into different roles, and expands what is possible for herself. ',
  womanClosingP1Strong2: 'Yet through all of this, she remains a daughter.',
  womanClosingP1Rest:
    ' Not defined by limitation, but by depth. By where she comes from, and what she carries forward.',
  womanClosingP2Strong1: 'Bint Saeed exists at that intersection.',
  womanClosingP2Middle:
    ' Between heritage and a contemporary life lived locally and across borders. Between where you come from and where you are going. ',
  womanClosingP2Strong2: 'Between the values you have inherited and how you present yourself today.',
  codesLabel: 'THE CODES',
  codesHeadingLine1: 'Six design codes.',
  codesHeadingLine2: 'One visual language.',
  codesIntro:
    'Every piece carries one or more of the six Bint Saeed design codes — drawn from Emirati craft tradition and translated into a contemporary form.',
  designCodes: DESIGN_CODES_EN,
  codesLink: 'Explore the full codes →',
  codesClosingH3: 'The house draws from Emirati design codes, including Al Talli craftsmanship and the structural logic of Khous weaving. ',
  codesClosingH3Strong:
    'Every piece reflects the elegance of the Gulf, expressed through a way of dressing that moves effortlessly across borders.',
  codesClosingP1Strong: 'For women who move through the world without leaving themselves behind,',
  codesClosingP1Rest:
    ' and who understand that identity is not something to adjust depending on place, but something carried out with confidence and certainty.',
  codesClosingP2Strong:
    'Bint Saeed stands as a house devoted to the daughter in every woman. A reminder that no matter where you go, you do not begin again, you continue.',
  codesClosingP2Rest: '',
  houseLabel: 'HERITAGE',
  houseHeading: 'Heritage is not left behind when life moves forward.',
  houseParagraphs: [
    'Rooted in Abu Dhabi, United Arab Emirates, Bint Saeed holds deep respect for the cultural heritage of the country from which the House creates. We believe the craftsmanship, symbols and stories carried through generations deserve to be cherished, recognised and given a place in the lives of women today.',
    'Emirati heritage enters our designs through detail, material and form. Traditional crafts such as Al Talli and Al Khous, the colours and landscapes of the Emirates, natural stones and ideas of lineage and connection have helped shape the visual language of Bint Saeed.',
    'We do not seek to reproduce the past exactly as it was. We allow its references to find new expression in womenswear, jewellery and objects created for the present.',
    'This is what Carrying Heritage Forward means to us.',
    'To create from Abu Dhabi with pride. To allow Emirati cultural references to continue through contemporary design. And to carry them beyond the borders of the United Arab Emirates, into new wardrobes and new places, while remaining connected to where they began.',
    'Because heritage continues when a new generation finds a place for it in their own lives.',
  ],
  ctaGivingForward: 'READ ABOUT GIVING FORWARD',
  closingQuote: 'A sense of self that does not\nshift with setting.',
  closingBrand: 'BINT SAEED · ABU DHABI',
  ctaOurStoryInCodes: 'OUR STORY IN CODES',
}

const ABOUT_AR: AboutPageCopy = {
  imageAlt: 'Bint Saeed — أبوظبي',
  breadcrumbHome: 'الرئيسية',
  breadcrumbAbout: 'عنّا',
  backToHome: 'العودة للرئيسية',
  heroEyebrow: 'BINT SAEED · ABU DHABI',
  heroHeadline: 'حمل الإرث إلى الأمام.',
  heroSubline: 'دار تشكّلها الأصل. مكرّسة للابنة في كل امرأة.',
  heroTagline: 'أبوظبي · رموز تصميم إماراتية · حضور عالمي معاصر',
  ctaReadStory: 'اقرأي القصة',
  ctaExploreCollection: 'استكشفي المجموعة',
  marquee: 'BINT SAEED · ABU DHABI · حمل الإرث إلى الأمام · مكرّسة للابنة في كل امرأة ·',
  manifestoTitle: 'من نحن',
  manifestoSubtitle: 'بيت صاغته الأصول، وحمل عبر العالم.',
  manifestoP1:
    'امرأة اليوم لا تشبه امرأة العقود الماضية. تعيش بين المسؤوليات والبلدان والمناسبات والسفر، بإيقاع لم تعرفه من قبلها. ومهما بلغت في العالم، تظل ابنة أولاً، تحمل معها القيم والمعايير التي صنعتها.',
  manifestoP2:
    'بنت سعيد تملأ الفراغ الذي تضيع فيه الأناقة حين تنتقل المرأة بين البيئات والحدود. خزانتها تمنح من يرتدينها الثقة واليقين، بعيداً عن كل موضة عابرة.',
  manifestoP3:
    'من أبوظبي، تبني بنت سعيد لغتها التصميمية من رموز راسخة، ذاكرة الخوص ورقة التلي ودفء الأحجار الطبيعية، وتفاصيل تُصاغ في قطع عصرية لامرأة لا تتوقف.',
  originLabel: 'الأصل',
  originHeading: 'اسمٌ متجذّر في النسب، والذاكرة، والانتماء.',
  originP1BeforeBint: 'بالعربية، ',
  originP1Bint: 'Bint',
  originP1AfterBint:
    ' تعني ابنة. ليست إشارة إلى مكانك الحالي، بل إلى من أين أتيت. تحمل النسب والذاكرة والانتماء. تحفظ القصة التي سبقتك، وتستمر عبرك. ',
  originP1Strong:
    'لأنه مهما قادت الحياة، تبقى المرأة متصلة بأصلها. لا يختفي حين تنتقل. لا يتغيّر حين تنمو.',
  originP2Strong:
    'متجذرة في أبوظبي، تنبثق Bint Saeed من مكان دائماً يتقدّم مع الحفاظ على هويته الثقافية.',
  originP2Rest:
    ' مكان يتعايش فيه الطموح والهوية جنباً إلى جنب، حيث يُبنى النمو على الأصل لا يحلّ محله. من هنا، تمتد الدار إلى أسلوب حياة ينتقل بين الأماكن بسلاسة.',
  originP3:
    'من أبوظبي إلى باريس، من لندن إلى الرياض، يبقى الإحساس بالذات واحداً. أسلوب في الوجود لا يتبدّل مع المكان، وأسلوب في اللباس يتبعه طبيعياً.',
  womanLabel: 'المرأة',
  womanHeading: 'لا تبدأ من جديد. تستمر.',
  womanSteps: [
    {
      numeral: 'I',
      title: 'أين هي',
      body: 'اليوم، تنتقل المرأة بين المدن والثقافات والتوقعات. تبني حياة عبر أماكن متعددة، تتولّى أدواراً مختلفة، وتوسّع ما هو ممكن لها.',
    },
    {
      numeral: 'II',
      title: 'ما تحمله',
      body: 'ومع ذلك، تبقى ابنة. ليست محددة بالقيود، بل بالعمق. بمكان أصلها، وما تحمله إلى الأمام.',
    },
    {
      numeral: 'III',
      title: 'كيف تلبس',
      body: 'توجد Bint Saeed عند ذلك التقاطع. بين الإرث وحياة معاصرة تُعاش محلياً وعبر الحدود. بين من أين أتيت وإلى أين تتجه. بين القيم التي ورثتها وكيف تقدّم نفسك اليوم.',
    },
  ],
  womanClosingH3Strong: 'كل إبداع يحمل ذلك الإحساس بالاستمرارية.',
  womanClosingH3Rest:
    ' ليس محدداً بالمكان، بل يُعرف باتساقه. لغة بصرية واضحة تحافظ على مكانتها أينما اُرتديت. الأصل، يُعبَّر عنه في الشكل، في الموقف، في طريقة أن تُعرف.',
  womanClosingP1Strong1: 'اليوم، تنتقل المرأة بين المدن والثقافات والتوقعات.',
  womanClosingP1Middle:
    ' تبني حياة عبر أماكن متعددة، تتولّى أدواراً مختلفة، وتوسّع ما هو ممكن لها. ',
  womanClosingP1Strong2: 'ومع ذلك، تبقى ابنة.',
  womanClosingP1Rest: ' ليست محددة بالقيود، بل بالعمق. بمكان أصلها، وما تحمله إلى الأمام.',
  womanClosingP2Strong1: 'توجد Bint Saeed عند ذلك التقاطع.',
  womanClosingP2Middle:
    ' بين الإرث وحياة معاصرة تُعاش محلياً وعبر الحدود. بين من أين أتيت وإلى أين تتجه. ',
  womanClosingP2Strong2: 'بين القيم التي ورثتها وكيف تقدّم نفسك اليوم.',
  codesLabel: 'الرموز',
  codesHeadingLine1: 'ستة رموز تصميم.',
  codesHeadingLine2: 'لغة بصرية واحدة.',
  codesIntro:
    'تحمل كل قطعة واحداً أو أكثر من رموز Bint Saeed الستة — مستمدة من تقاليد الحرف الإماراتية ومترجمة إلى شكل معاصر.',
  designCodes: DESIGN_CODES_AR,
  codesLink: 'استكشفي الرموز كاملة ←',
  codesClosingH3: 'تستمد الدار من رموز التصميم الإماراتية، بما في ذلك حرفة Al Talli والمنطق البنيوي لنسيج Khous. ',
  codesClosingH3Strong:
    'كل قطعة تعكس أناقة الخليج، معبّرة عنها عبر أسلوب لباس ينتقل بسلاسة عبر الحدود.',
  codesClosingP1Strong: 'للنساء اللواتي يتحركن في العالم دون أن يتركن أنفسهن خلفهن،',
  codesClosingP1Rest:
    ' وللّواتي يدركن أن الهوية ليست شيئاً يُعدَّل حسب المكان، بل شيئاً يُحمل بثقة ويقين.',
  codesClosingP2Strong:
    'تقف Bint Saeed كدار مكرّسة للابنة في كل امرأة. تذكيراً بأنه مهما ذهبتِ، لا تبدئين من جديد، بل تستمرين.',
  codesClosingP2Rest: '',
  houseLabel: 'التراث',
  houseHeading: 'التراث لا يُترك خلفنا حين تمضي الحياة إلى الأمام.',
  houseParagraphs: [
    'متجذّرة في أبوظبي، الإمارات العربية المتحدة، تحمل Bint Saeed احتراماً عميقاً للتراث الثقافي للبلاد التي تُبدع منها الدار. نؤمن بأن الحرفية والرموز والقصص المحمولة عبر الأجيال تستحق أن تُصان وتُقدَّر وأن تجد مكاناً في حياة النساء اليوم.',
    'يدخل التراث الإماراتي إلى تصاميمنا عبر التفاصيل والمادة والشكل. حرف تقليدية مثل التلي والخوص، وألوان الإمارات ومناظرها، والأحجار الطبيعية، وأفكار النسب والصلة، ساعدت في تشكيل اللغة البصرية لـ Bint Saeed.',
    'لا نسعى إلى إعادة إنتاج الماضي كما كان تماماً. نسمح لمراجعه أن تجد تعبيراً جديداً في أزياء النساء والمجوهرات والأشياء المصنوعة للحاضر.',
    'هذا ما يعنيه لنا حمل التراث إلى الأمام.',
    'أن نُبدع من أبوظبي بفخر. أن نسمح للمراجع الثقافية الإماراتية أن تستمر عبر التصميم المعاصر. وأن نحملها إلى ما وراء حدود الإمارات العربية المتحدة، إلى خزائن وأماكن جديدة، مع البقاء متصلين بمكان بدئها.',
    'لأن التراث يستمر حين تجد أجيال جديدة مكاناً له في حياتها.',
  ],
  ctaGivingForward: 'اقرأي عن العطاء إلى الأمام',
  closingQuote: 'إحساس بالذات لا يتبدّل مع المكان.',
  closingBrand: 'BINT SAEED · ABU DHABI',
  ctaOurStoryInCodes: 'قصتنا في الرموز',
}

export function getAboutPageCopy(locale: Language | string): AboutPageCopy {
  const base =
    locale === 'ar'
      ? ABOUT_AR
      : locale === 'fr'
        ? ABOUT_FR
        : locale === 'it'
          ? ABOUT_IT
          : locale === 'de'
            ? ABOUT_DE
            : locale === 'nl'
              ? ABOUT_NL
              : locale === 'pt'
                ? ABOUT_PT
                : locale === 'es'
                  ? ABOUT_ES
                  : locale === 'ru'
                    ? ABOUT_RU
                    : locale === 'zh'
                      ? ABOUT_ZH
                      : locale === 'id'
                        ? ABOUT_ID
                        : locale === 'ms'
                          ? ABOUT_MS
                          : ABOUT_EN
  try {
    const ui = commerceUi(locale as AppLocale)
    return { ...base, backToHome: ui.common.backToHome, breadcrumbHome: ui.common.home }
  } catch {
    return base
  }
}
