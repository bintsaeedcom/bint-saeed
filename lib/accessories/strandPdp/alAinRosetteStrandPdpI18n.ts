import type { AppLocale } from '@/lib/i18n/routing'
import type { StrandPdpContent } from '@/lib/accessories/strandPdp/types'
import type { AlAinRosetteStrandId } from '@/lib/accessories/strandPdp/alAinRosetteStrandIds'
import { AL_AIN_ROSETTE_STRAND_PDP_EN } from '@/lib/accessories/strandPdp/alAinRosetteStrandPdpEn'
import { getAlAinRosetteDisplayNames } from '@/lib/accessories/strandPdp/alAinRosetteDisplayNamesI18n'
import {
  buildStrandFaqFromTemplates,
  resolveStrandCare,
  STRAND_PDP_LOCALE_TEMPLATES,
} from '@/lib/accessories/strandPdp/localeTemplatesI18n'

type RosetteSharedStrings = {
  introP2: string
  introRosette: string
  introUnique: string
  closing: string
  carnelianOrigin: string
  detailRosettes: string
  materialRosettes: string
  stoneOriginSuffix: string
  pairOfDetachable: (headline: string) => string
}

type RosetteStoneStrings = {
  headline: string
  introP1: string
  introStone: string
  introRosetteBalance: string
  stoneOriginLead: string
  stoneBeadDetail: string
  materialStone: string
  strandLabel: string
  stoneLabel: string
  variationNote: string
}

function buildRosettePdp(
  shared: RosetteSharedStrings,
  stone: RosetteStoneStrings,
  locale: AppLocale,
): StrandPdpContent {
  const templates = STRAND_PDP_LOCALE_TEMPLATES[locale]

  return {
    headline: stone.headline,
    introParagraphs: [
      stone.introP1,
      shared.introP2,
      stone.introStone,
      `${shared.introRosette} ${stone.introRosetteBalance}`,
      shared.introUnique,
      shared.closing,
    ],
    productDetails: [
      shared.pairOfDetachable(stone.headline),
      templates.detailDesignedFor,
      templates.detailHandAssembled,
      stone.stoneBeadDetail,
      shared.detailRosettes,
      templates.detailHematite,
      templates.detailKnottedLine,
      templates.detailLength,
      templates.detailAttach,
      templates.detailPersonalise,
      templates.detailNotJewellery,
      templates.detailGiftBox,
    ],
    materials: [
      stone.materialStone,
      shared.materialRosettes,
      templates.materialHematite,
      templates.materialKnottedLine,
    ],
    stoneOrigin: `${stone.stoneOriginLead} ${shared.carnelianOrigin} ${shared.stoneOriginSuffix}`,
    naturalStone: templates.naturalStoneBody,
    care: [...resolveStrandCare(locale)],
    faq: buildStrandFaqFromTemplates(
      templates,
      stone.strandLabel,
      stone.stoneLabel,
      stone.variationNote,
      locale,
    ),
  }
}

function withLocalizedDisplayNames(
  locale: AppLocale,
  id: AlAinRosetteStrandId,
  stone: RosetteStoneStrings,
): RosetteStoneStrings {
  if (locale === 'en') return stone
  const names = getAlAinRosetteDisplayNames(id, locale)
  return { ...stone, ...names }
}

function buildLocalePack(
  locale: AppLocale,
  shared: RosetteSharedStrings,
  stones: Record<AlAinRosetteStrandId, RosetteStoneStrings>,
): Record<AlAinRosetteStrandId, StrandPdpContent> {
  return {
    'signature-strand-lapis-lazuli': buildRosettePdp(
      shared,
      withLocalizedDisplayNames(locale, 'signature-strand-lapis-lazuli', stones['signature-strand-lapis-lazuli']),
      locale,
    ),
    'signature-strand-sunstone': buildRosettePdp(
      shared,
      withLocalizedDisplayNames(locale, 'signature-strand-sunstone', stones['signature-strand-sunstone']),
      locale,
    ),
    'signature-strand-rose-quartz': buildRosettePdp(
      shared,
      withLocalizedDisplayNames(locale, 'signature-strand-rose-quartz', stones['signature-strand-rose-quartz']),
      locale,
    ),
    'signature-strand-malachite': buildRosettePdp(
      shared,
      withLocalizedDisplayNames(locale, 'signature-strand-malachite', stones['signature-strand-malachite']),
      locale,
    ),
  }
}

const AR_PACK = buildLocalePack('ar', {
  introP2:
    'صُمّمت لتخصيص تصاميم Bint Saeed المتوافقة، بما في ذلك عباءة Marylebone Abaya والإبداعات المتوافقة المستقبلية، وتتيح هذه الستراندات القابلة للفصل لقطعة واحدة أن تتطوّر بسهولة. سواء لنسيقها مع حقيبتك أو حذائك أو مجوهراتك، تمنحك تعبيراً جديداً دون تغيير القطعة نفسها.',
  introRosette:
    'يُعدّ Al Ain Rosette المنحوت يدوياً من العقيق أحد رموز الدار الحصرية من Bint Saeed. مستوحى من درجات الرمل الدافئة والمناظر الطبيعية المحيطة بمدينة الواحة العين في الإمارات العربية المتحدة، يعيد تفسير شكل طبيعي بسيط إلى تفصيلة تصميم عصرية يمكن للنساء حول العالم ارتداؤها.',
  introUnique:
    'لأن كل حجر كريم يتشكّل طبيعياً، فإن كل Signature Strand فريد تماماً في لونه وعلاماته وطابعه.',
  closing: 'هذا أكثر من إكسسوار. إنه تعبير شخصي عن أحد رموز الدار الحصرية من Bint Saeed.',
  carnelianOrigin:
    'يُستورد العقيق المستخدم في Al Ain Rosettes من الهند ويُنحت بعناية ليصبح أحد رموز الدار الحصرية من Bint Saeed.',
  detailRosettes: 'Al Ain Rosettes من العقيق المنحوت يدوياً (حوالي 15 مم)',
  materialRosettes: 'Al Ain Rosettes من العقيق المنحوت يدوياً',
  stoneOriginSuffix:
    'تعرض كل حجر كريم طبيعي لونه الفريد وشوائبه وعلاماته الخاصة، ما يجعل كل Signature Strand فريداً من نوعه.',
  pairOfDetachable: (headline) => `زوج من ${headline} القابل للفصل`,
}, {
  'signature-strand-lapis-lazuli': {
    headline: 'Lapis Lazuli Al Ain Rosette Signature Strands',
    introP1:
      'يجمع Lapis Lazuli Al Ain Rosette Signature Strands بين الأحجار الكريمة الطبيعية والإلهام الإماراتي والتصميم المعاصر في أحد رموز الدار الحصرية من Bint Saeed. يُجمَّع يدوياً في أبوظبي من Lapis Lazuli طبيعي وAl Ain Rosettes من العقيق المنحوت يدوياً، ليقدّم طريقة راقية لتحويل قطع Bint Saeed المختارة من خلال تفصيلة مدروسة واحدة.',
    introStone:
      'يُعجب بـ Lapis Lazuli منذ آلاف السنين لدرجاته الزرقاء الملكية الغنية وشوائب البيريت الذهبية الطبيعية، ما يجعل كل ستراند فريداً بجماله. بين كل حجر كريم، تلتقط لمسات Hematite المطلية ذهباً والمقطّعة الضوء وتعكسه مع كل حركة، مضيفة بريقاً رقيقاً عبر التركيبة بأكملها.',
    introRosetteBalance:
      'مع Lapis Lazuli الأزرق العميق، يخلق توازناً لافتاً بين اللون والحرفية والإلهام الثقافي.',
    stoneOriginLead:
      'يُقدَّر Lapis Lazuli منذ قرون لألوانه الزرقاء الكثيفة ويُستورد أساساً من أفغانستان.',
    stoneBeadDetail: 'خرز Lapis Lazuli طبيعي (حوالي 5 مم)',
    materialStone: 'أحجار Lapis Lazuli طبيعية',
    strandLabel: 'Lapis Lazuli Al Ain Rosette Signature Strands',
    stoneLabel: 'Lapis Lazuli',
    variationNote:
      'التباينات الطبيعية في درجة اللون الأزرق وشوائب البيريت والعلامات جزء مما يجعل كل Signature Strand فريداً.',
  },
  'signature-strand-sunstone': {
    headline: 'Sunstone Al Ain Rosette Signature Strands',
    introP1:
      'يجمع Sunstone Al Ain Rosette Signature Strands بين الأحجار الكريمة الطبيعية والإلهام الإماراتي والتصميم المعاصر في أحد رموز الدار الحصرية من Bint Saeed. يُجمَّع يدوياً في أبوظبي من Sunstone طبيعي وAl Ain Rosettes من العقيق المنحوت يدوياً، ليقدّم طريقة راقية لتحويل قطع Bint Saeed المختارة من خلال تفصيلة مدروسة واحدة.',
    introStone:
      'يُعجب بـ Sunstone لتوهجه الدافئ البرتقالي-الخوخي ولمعة aventurescence الرقيقة التي تمنح كل ستراند بريقاً ناعماً من الداخل. بين كل حجر كريم، تلتقط لمسات Hematite المطلية ذهباً والمقطّعة الضوء وتعكسه مع كل حركة، مضيفة بريقاً رقيقاً عبر التركيبة بأكملها.',
    introRosetteBalance:
      'مع إشعاع Sunstone الدافئ، يخلق توازناً لافتاً بين اللون والحرفية والإلهام الثقافي.',
    stoneOriginLead:
      'يُستورد Sunstone من مناطق تشمل الهند والنرويج والولايات المتحدة، ويُقدَّر لألوانه الدافئة البرتقالية-الخوخية وبريقه الداخلي اللطيف.',
    stoneBeadDetail: 'خرز Sunstone طبيعي (حوالي 5 مم)',
    materialStone: 'أحجار Sunstone طبيعية',
    strandLabel: 'Sunstone Al Ain Rosette Signature Strands',
    stoneLabel: 'Sunstone',
    variationNote:
      'التباينات الطبيعية في التوهج واللون والشوائب جزء مما يجعل كل Signature Strand فريداً.',
  },
  'signature-strand-rose-quartz': {
    headline: 'Rose Quartz Al Ain Rosette Signature Strands',
    introP1:
      'يجمع Rose Quartz Al Ain Rosette Signature Strands بين الأحجار الكريمة الطبيعية والإلهام الإماراتي والتصميم المعاصر في أحد رموز الدار الحصرية من Bint Saeed. يُجمَّع يدوياً في أبوظبي من Rose Quartz طبيعي وAl Ain Rosettes من العقيق المنحوت يدوياً، ليقدّم طريقة راقية لتحويل قطع Bint Saeed المختارة من خلال تفصيلة مدروسة واحدة.',
    introStone:
      'يُعجب بـ Rose Quartz لدرجاته الوردية الناعمة وطابعه الرومانسي المضيء، ما يضفي دفئاً لطيفاً على كل ستراند. بين كل حجر كريم، تلتقط لمسات Hematite المطلية ذهباً والمقطّعة الضوء وتعكسه مع كل حركة، مضيفة بريقاً رقيقاً عبر التركيبة بأكملها.',
    introRosetteBalance:
      'مع درجات Rose Quartz الوردية، يخلق توازناً لافتاً بين اللون والحرفية والإلهام الثقافي.',
    stoneOriginLead:
      'يُستورد Rose Quartz من مناطق تشمل البرازيل ومدغشقر وجنوب أفريقيا، ويُعتز به لدرجاته الوردية الرقيقة وشفافيته الطبيعية.',
    stoneBeadDetail: 'خرز Rose Quartz طبيعي (حوالي 5 مم)',
    materialStone: 'أحجار Rose Quartz طبيعية',
    strandLabel: 'Rose Quartz Al Ain Rosette Signature Strands',
    stoneLabel: 'Rose Quartz',
    variationNote:
      'التباينات الطبيعية في درجة الوردي والوضوح والعلامات جزء مما يجعل كل Signature Strand فريداً.',
  },
  'signature-strand-malachite': {
    headline: 'Malachite Al Ain Rosette Signature Strands',
    introP1:
      'يجمع Malachite Al Ain Rosette Signature Strands بين الأحجار الكريمة الطبيعية والإلهام الإماراتي والتصميم المعاصر في أحد رموز الدار الحصرية من Bint Saeed. يُجمَّع يدوياً في أبوظبي من Malachite طبيعي وAl Ain Rosettes من العقيق المنحوت يدوياً، ليقدّم طريقة راقية لتحويل قطع Bint Saeed المختارة من خلال تفصيلة مدروسة واحدة.',
    introStone:
      'يُعجب بـ Malachite لدرجاته الخضراء العميقة وتموجاته الطبيعية المميزة، ما يمنح كل ستراند حضوراً جريئاً وراقياً. بين كل حجر كريم، تلتقط لمسات Hematite المطلية ذهباً والمقطّعة الضوء وتعكسه مع كل حركة، مضيفة بريقاً رقيقاً عبر التركيبة بأكملها.',
    introRosetteBalance:
      'مع الأخضر الغني لـ Malachite، يخلق توازناً لافتاً بين اللون والحرفية والإلهام الثقافي.',
    stoneOriginLead:
      'يُستورد Malachite من مناطق تشمل جمهورية الكونغو الديمقراطية وزامبيا وأستراليا، ويُقدَّر لألوانه الخضراء المشبعة وأنماطه الطبيعية المتموجة.',
    stoneBeadDetail: 'خرز Malachite طبيعي (حوالي 5 مم)',
    materialStone: 'أحجار Malachite طبيعية',
    strandLabel: 'Malachite Al Ain Rosette Signature Strands',
    stoneLabel: 'Malachite',
    variationNote:
      'التباينات الطبيعية في درجة الأخضر والتموج والعلامات جزء مما يجعل كل Signature Strand فريداً.',
  },
})

const FR_PACK = buildLocalePack('fr', {
  introP2:
    'Conçues pour personnaliser les créations compatibles de Bint Saeed, y compris la Marylebone Abaya et les futures créations compatibles, ces strands détachables permettent à une même pièce d’évoluer avec fluidité. Portées pour s’accorder à votre sac, vos chaussures ou vos bijoux, elles offrent une expression nouvelle sans modifier le vêtement lui-même.',
  introRosette:
    'La Al Ain Rosette en cornaline sculptée à la main est l’un des Codes Maison signature de Bint Saeed. Inspirée des tons sable chaud et du paysage naturel entourant la ville-oasis d’Al Ain aux Émirats arabes unis, elle réinterprète une forme naturelle simple en détail de design contemporain, pensé pour être porté par des femmes partout dans le monde.',
  introUnique:
    'Chaque pierre étant formée naturellement, chaque Signature Strand est totalement unique par sa couleur, ses nuances et son caractère.',
  closing:
    'C’est bien plus qu’un accessoire. C’est une expression personnelle de l’un des Codes Maison signature de Bint Saeed.',
  carnelianOrigin:
    'La cornaline utilisée pour les Al Ain Rosettes provient d’Inde et est soigneusement sculptée pour devenir l’un des Codes Maison signature de Bint Saeed.',
  detailRosettes: 'Al Ain Rosettes en cornaline sculptées à la main (environ 15 mm)',
  materialRosettes: 'Al Ain Rosettes en cornaline sculptées à la main',
  stoneOriginSuffix:
    'Chaque pierre naturelle présente sa propre couleur, ses inclusions et ses marques, rendant chaque Signature Strand véritablement unique.',
  pairOfDetachable: (headline) => `Paire de ${headline} détachables`,
}, {
  'signature-strand-lapis-lazuli': {
    headline: 'Lapis Lazuli Al Ain Rosette Signature Strands',
    introP1:
      'Les Lapis Lazuli Al Ain Rosette Signature Strands réunissent pierres naturelles, inspiration émiratie et design contemporain dans l’un des Codes Maison signature de Bint Saeed. Assemblées à la main à Abu Dhabi à partir de Lapis Lazuli naturel et de Al Ain Rosettes en cornaline sculptée à la main, elles offrent une manière raffinée de transformer des pièces Bint Saeed sélectionnées grâce à un seul détail pensé avec soin.',
    introStone:
      'Admiré depuis des millénaires, le Lapis Lazuli est reconnu pour ses tons bleu royal profonds et ses inclusions naturelles de pyrite dorée, qui rendent chaque strand magnifiquement unique. Entre chaque pierre, des accents de Hematite facettée et plaquée or captent et reflètent la lumière à chaque mouvement, apportant une brillance subtile à l’ensemble.',
    introRosetteBalance:
      'Associée au bleu intense du Lapis Lazuli, elle crée un équilibre remarquable entre couleur, savoir-faire et inspiration culturelle.',
    stoneOriginLead:
      'Le Lapis Lazuli est prisé depuis des siècles pour son bleu intense et provient principalement d’Afghanistan.',
    stoneBeadDetail: 'Perles de pierre naturelle de Lapis Lazuli (environ 5 mm)',
    materialStone: 'Pierres naturelles de Lapis Lazuli',
    strandLabel: 'Lapis Lazuli Al Ain Rosette Signature Strands',
    stoneLabel: 'Lapis Lazuli',
    variationNote:
      'Les variations naturelles de ton bleu, les inclusions de pyrite et les marques font partie de ce qui rend chaque Signature Strand unique.',
  },
  'signature-strand-sunstone': {
    headline: 'Sunstone Al Ain Rosette Signature Strands',
    introP1:
      'Les Sunstone Al Ain Rosette Signature Strands réunissent pierres naturelles, inspiration émiratie et design contemporain dans l’un des Codes Maison signature de Bint Saeed. Assemblées à la main à Abu Dhabi à partir de Sunstone naturelle et de Al Ain Rosettes en cornaline sculptée à la main, elles offrent une manière raffinée de transformer des pièces Bint Saeed sélectionnées grâce à un seul détail pensé avec soin.',
    introStone:
      'La Sunstone est appréciée pour son éclat chaud pêche-orangé et sa délicate aventurescence, qui confère à chaque strand une lumière douce venant de l’intérieur. Entre chaque pierre, des accents de Hematite facettée et plaquée or captent et reflètent la lumière à chaque mouvement, apportant une brillance subtile à l’ensemble.',
    introRosetteBalance:
      'Associée à la radiance chaleureuse de la Sunstone, elle crée un équilibre remarquable entre couleur, savoir-faire et inspiration culturelle.',
    stoneOriginLead:
      'La Sunstone provient de régions incluant l’Inde, la Norvège et les États-Unis, et est appréciée pour sa palette pêche-orangé et son éclat interne délicat.',
    stoneBeadDetail: 'Perles de pierre naturelle de Sunstone (environ 5 mm)',
    materialStone: 'Pierres naturelles de Sunstone',
    strandLabel: 'Sunstone Al Ain Rosette Signature Strands',
    stoneLabel: 'Sunstone',
    variationNote:
      'Les variations naturelles d’éclat, de tonalité et d’inclusions font partie de ce qui rend chaque Signature Strand unique.',
  },
  'signature-strand-rose-quartz': {
    headline: 'Rose Quartz Al Ain Rosette Signature Strands',
    introP1:
      'Les Rose Quartz Al Ain Rosette Signature Strands réunissent pierres naturelles, inspiration émiratie et design contemporain dans l’un des Codes Maison signature de Bint Saeed. Assemblées à la main à Abu Dhabi à partir de Rose Quartz naturel et de Al Ain Rosettes en cornaline sculptée à la main, elles offrent une manière raffinée de transformer des pièces Bint Saeed sélectionnées grâce à un seul détail pensé avec soin.',
    introStone:
      'Le Rose Quartz est admiré pour ses tons rosés délicats et son caractère lumineux et romantique, apportant une chaleur douce à chaque strand. Entre chaque pierre, des accents de Hematite facettée et plaquée or captent et reflètent la lumière à chaque mouvement, apportant une brillance subtile à l’ensemble.',
    introRosetteBalance:
      'Associée aux nuances rosées du Rose Quartz, elle crée un équilibre remarquable entre couleur, savoir-faire et inspiration culturelle.',
    stoneOriginLead:
      'Le Rose Quartz provient de régions incluant le Brésil, Madagascar et l’Afrique du Sud, et est apprécié pour ses tons roses délicats et sa translucidité naturelle.',
    stoneBeadDetail: 'Perles de pierre naturelle de Rose Quartz (environ 5 mm)',
    materialStone: 'Pierres naturelles de Rose Quartz',
    strandLabel: 'Rose Quartz Al Ain Rosette Signature Strands',
    stoneLabel: 'Rose Quartz',
    variationNote:
      'Les variations naturelles de ton rosé, de clarté et de marques font partie de ce qui rend chaque Signature Strand unique.',
  },
  'signature-strand-malachite': {
    headline: 'Malachite Al Ain Rosette Signature Strands',
    introP1:
      'Les Malachite Al Ain Rosette Signature Strands réunissent pierres naturelles, inspiration émiratie et design contemporain dans l’un des Codes Maison signature de Bint Saeed. Assemblées à la main à Abu Dhabi à partir de Malachite naturelle et de Al Ain Rosettes en cornaline sculptée à la main, elles offrent une manière raffinée de transformer des pièces Bint Saeed sélectionnées grâce à un seul détail pensé avec soin.',
    introStone:
      'La Malachite est appréciée pour ses tons verts profonds et son rubanement naturel distinctif, donnant à chaque strand une présence audacieuse et raffinée. Entre chaque pierre, des accents de Hematite facettée et plaquée or captent et reflètent la lumière à chaque mouvement, apportant une brillance subtile à l’ensemble.',
    introRosetteBalance:
      'Associée au vert intense de la Malachite, elle crée un équilibre remarquable entre couleur, savoir-faire et inspiration culturelle.',
    stoneOriginLead:
      'La Malachite provient de régions incluant la République démocratique du Congo, la Zambie et l’Australie, et est appréciée pour son vert saturé et ses motifs rubanés naturels.',
    stoneBeadDetail: 'Perles de pierre naturelle de Malachite (environ 5 mm)',
    materialStone: 'Pierres naturelles de Malachite',
    strandLabel: 'Malachite Al Ain Rosette Signature Strands',
    stoneLabel: 'Malachite',
    variationNote:
      'Les variations naturelles de ton vert, de rubanement et de marques font partie de ce qui rend chaque Signature Strand unique.',
  },
})

const IT_PACK = buildLocalePack('it', {
  introP2:
    'Pensate per personalizzare i design compatibili Bint Saeed, inclusa la Marylebone Abaya e le future creazioni compatibili, queste strands removibili permettono a un solo capo di evolversi con naturalezza. Abbinate alla borsa, alle scarpe o ai gioielli, creano un’espressione nuova senza modificare il capo stesso.',
  introRosette:
    'La Al Ain Rosette in corniola scolpita a mano è uno degli House Codes distintivi di Bint Saeed. Ispirata alle calde tonalità della sabbia e al paesaggio naturale che circonda la città-oasi di Al Ain negli Emirati Arabi Uniti, reinterpreta una forma naturale essenziale in un dettaglio contemporaneo, pensato per essere indossato da donne in tutto il mondo.',
  introUnique:
    'Poiché ogni pietra preziosa nasce in natura, ogni Signature Strand è completamente unica per colore, venature e carattere.',
  closing:
    'È più di un accessorio. È un’espressione personale di uno degli House Codes distintivi di Bint Saeed.',
  carnelianOrigin:
    'La corniola utilizzata per le Al Ain Rosettes proviene dall’India ed è scolpita con cura per diventare uno degli House Codes distintivi di Bint Saeed.',
  detailRosettes: 'Al Ain Rosettes in corniola scolpite a mano (circa 15 mm)',
  materialRosettes: 'Al Ain Rosettes in corniola scolpite a mano',
  stoneOriginSuffix:
    'Ogni pietra naturale presenta un colore, inclusioni e segni propri, rendendo ogni Signature Strand davvero unica.',
  pairOfDetachable: (headline) => `Coppia di ${headline} removibili`,
}, {
  'signature-strand-lapis-lazuli': {
    headline: 'Lapis Lazuli Al Ain Rosette Signature Strands',
    introP1:
      'Le Lapis Lazuli Al Ain Rosette Signature Strands uniscono pietre naturali, ispirazione emiratina e design contemporaneo in uno degli House Codes distintivi di Bint Saeed. Assemblate a mano ad Abu Dhabi con Lapis Lazuli naturale e Al Ain Rosettes in corniola scolpite a mano, offrono un modo raffinato per trasformare capi Bint Saeed selezionati attraverso un unico dettaglio studiato.',
    introStone:
      'Ammirato da millenni, il Lapis Lazuli è riconosciuto per i suoi ricchi toni blu reale e per le naturali inclusioni di pirite dorata, che rendono ogni strand splendidamente unica. Tra una pietra e l’altra, accenti in Hematite sfaccettata placcata oro catturano e riflettono la luce a ogni movimento, aggiungendo una brillantezza discreta all’insieme.',
    introRosetteBalance:
      'Insieme al blu profondo del Lapis Lazuli, crea un equilibrio d’impatto tra colore, artigianalità e ispirazione culturale.',
    stoneOriginLead:
      'Il Lapis Lazuli è apprezzato da secoli per il suo blu intenso ed è reperito principalmente in Afghanistan.',
    stoneBeadDetail: 'Perle in pietra naturale di Lapis Lazuli (circa 5 mm)',
    materialStone: 'Pietre naturali di Lapis Lazuli',
    strandLabel: 'Lapis Lazuli Al Ain Rosette Signature Strands',
    stoneLabel: 'Lapis Lazuli',
    variationNote:
      'Le variazioni naturali di tono blu, inclusioni di pirite e venature fanno parte di ciò che rende unica ogni Signature Strand.',
  },
  'signature-strand-sunstone': {
    headline: 'Sunstone Al Ain Rosette Signature Strands',
    introP1:
      'Le Sunstone Al Ain Rosette Signature Strands uniscono pietre naturali, ispirazione emiratina e design contemporaneo in uno degli House Codes distintivi di Bint Saeed. Assemblate a mano ad Abu Dhabi con Sunstone naturale e Al Ain Rosettes in corniola scolpite a mano, offrono un modo raffinato per trasformare capi Bint Saeed selezionati attraverso un unico dettaglio studiato.',
    introStone:
      'La Sunstone è apprezzata per il suo bagliore caldo pesca-arancio e per la delicata aventurescenza, che dona a ogni strand una luminosità soffusa dall’interno. Tra una pietra e l’altra, accenti in Hematite sfaccettata placcata oro catturano e riflettono la luce a ogni movimento, aggiungendo una brillantezza discreta all’insieme.',
    introRosetteBalance:
      'Insieme alla calda radiosità della Sunstone, crea un equilibrio d’impatto tra colore, artigianalità e ispirazione culturale.',
    stoneOriginLead:
      'La Sunstone proviene da aree tra cui India, Norvegia e Stati Uniti, ed è apprezzata per la sua palette pesca-arancio e la sua delicata scintilla interna.',
    stoneBeadDetail: 'Perle in pietra naturale di Sunstone (circa 5 mm)',
    materialStone: 'Pietre naturali di Sunstone',
    strandLabel: 'Sunstone Al Ain Rosette Signature Strands',
    stoneLabel: 'Sunstone',
    variationNote:
      'Le variazioni naturali di luminosità, tono e inclusioni fanno parte di ciò che rende unica ogni Signature Strand.',
  },
  'signature-strand-rose-quartz': {
    headline: 'Rose Quartz Al Ain Rosette Signature Strands',
    introP1:
      'Le Rose Quartz Al Ain Rosette Signature Strands uniscono pietre naturali, ispirazione emiratina e design contemporaneo in uno degli House Codes distintivi di Bint Saeed. Assemblate a mano ad Abu Dhabi con Rose Quartz naturale e Al Ain Rosettes in corniola scolpite a mano, offrono un modo raffinato per trasformare capi Bint Saeed selezionati attraverso un unico dettaglio studiato.',
    introStone:
      'Il Rose Quartz è ammirato per i suoi morbidi toni rosati e il suo carattere luminoso e romantico, che dona un calore delicato a ogni strand. Tra una pietra e l’altra, accenti in Hematite sfaccettata placcata oro catturano e riflettono la luce a ogni movimento, aggiungendo una brillantezza discreta all’insieme.',
    introRosetteBalance:
      'Insieme ai toni rosati del Rose Quartz, crea un equilibrio d’impatto tra colore, artigianalità e ispirazione culturale.',
    stoneOriginLead:
      'Il Rose Quartz proviene da aree tra cui Brasile, Madagascar e Sudafrica, ed è apprezzato per le sue delicate sfumature rosa e la sua naturale traslucenza.',
    stoneBeadDetail: 'Perle in pietra naturale di Rose Quartz (circa 5 mm)',
    materialStone: 'Pietre naturali di Rose Quartz',
    strandLabel: 'Rose Quartz Al Ain Rosette Signature Strands',
    stoneLabel: 'Rose Quartz',
    variationNote:
      'Le variazioni naturali di tono rosato, trasparenza e venature fanno parte di ciò che rende unica ogni Signature Strand.',
  },
  'signature-strand-malachite': {
    headline: 'Malachite Al Ain Rosette Signature Strands',
    introP1:
      'Le Malachite Al Ain Rosette Signature Strands uniscono pietre naturali, ispirazione emiratina e design contemporaneo in uno degli House Codes distintivi di Bint Saeed. Assemblate a mano ad Abu Dhabi con Malachite naturale e Al Ain Rosettes in corniola scolpite a mano, offrono un modo raffinato per trasformare capi Bint Saeed selezionati attraverso un unico dettaglio studiato.',
    introStone:
      'La Malachite è apprezzata per i suoi toni verde intenso e per le sue distintive bande naturali, che conferiscono a ogni strand una presenza decisa ma raffinata. Tra una pietra e l’altra, accenti in Hematite sfaccettata placcata oro catturano e riflettono la luce a ogni movimento, aggiungendo una brillantezza discreta all’insieme.',
    introRosetteBalance:
      'Insieme al verde ricco della Malachite, crea un equilibrio d’impatto tra colore, artigianalità e ispirazione culturale.',
    stoneOriginLead:
      'La Malachite proviene da aree tra cui la Repubblica Democratica del Congo, lo Zambia e l’Australia, ed è apprezzata per il suo verde saturo e i suoi naturali motivi a bande.',
    stoneBeadDetail: 'Perle in pietra naturale di Malachite (circa 5 mm)',
    materialStone: 'Pietre naturali di Malachite',
    strandLabel: 'Malachite Al Ain Rosette Signature Strands',
    stoneLabel: 'Malachite',
    variationNote:
      'Le variazioni naturali di tono verde, bande e venature fanno parte di ciò che rende unica ogni Signature Strand.',
  },
})

const ES_PACK = buildLocalePack('es', {
  introP2:
    'Diseñadas para personalizar diseños compatibles de Bint Saeed, incluida la Marylebone Abaya y futuras creaciones compatibles, estas strands desmontables permiten que una misma prenda evolucione con facilidad. Ya sea para combinar con tu bolso, zapatos o joyas, crean una expresión nueva sin cambiar la prenda en sí.',
  introRosette:
    'La Al Ain Rosette de cornalina tallada a mano es uno de los House Codes emblemáticos de Bint Saeed. Inspirada en los cálidos tonos de arena y el paisaje natural que rodea la ciudad oasis de Al Ain en los Emiratos Árabes Unidos, reinterpreta una forma natural sencilla en un detalle de diseño contemporáneo pensado para mujeres de todo el mundo.',
  introUnique:
    'Como cada gema se forma de manera natural, cada Signature Strand es totalmente única en color, vetas y carácter.',
  closing:
    'Esto es más que un accesorio. Es una expresión personal de uno de los House Codes emblemáticos de Bint Saeed.',
  carnelianOrigin:
    'La cornalina utilizada en las Al Ain Rosettes se obtiene en la India y se talla cuidadosamente para convertirse en uno de los House Codes emblemáticos de Bint Saeed.',
  detailRosettes: 'Al Ain Rosettes de cornalina talladas a mano (aproximadamente 15 mm)',
  materialRosettes: 'Al Ain Rosettes de cornalina talladas a mano',
  stoneOriginSuffix:
    'Cada gema natural muestra su propio color, inclusiones y marcas, haciendo que cada Signature Strand sea verdaderamente única.',
  pairOfDetachable: (headline) => `Par de ${headline} desmontables`,
}, {
  'signature-strand-lapis-lazuli': {
    headline: 'Lapis Lazuli Al Ain Rosette Signature Strands',
    introP1:
      'Las Lapis Lazuli Al Ain Rosette Signature Strands reúnen gemas naturales, inspiración emiratí y diseño contemporáneo en uno de los House Codes emblemáticos de Bint Saeed. Ensambladas a mano en Abu Dhabi con Lapis Lazuli natural y Al Ain Rosettes de cornalina talladas a mano, ofrecen una forma refinada de transformar prendas seleccionadas de Bint Saeed mediante un único detalle cuidadosamente pensado.',
    introStone:
      'Admirado durante miles de años, el Lapis Lazuli es reconocido por sus profundos tonos azul real y sus inclusiones naturales de pirita dorada, lo que hace que cada strand sea bellamente única. Entre cada gema, los acentos facetados de Hematite chapada en oro capturan y reflejan la luz con cada movimiento, aportando un brillo sutil a toda la composición.',
    introRosetteBalance:
      'Junto con el azul profundo del Lapis Lazuli, crea un equilibrio impactante entre color, artesanía e inspiración cultural.',
    stoneOriginLead:
      'El Lapis Lazuli se valora desde hace siglos por su intenso color azul y se obtiene principalmente de Afganistán.',
    stoneBeadDetail: 'Cuentas de gema natural de Lapis Lazuli (aproximadamente 5 mm)',
    materialStone: 'Gemas naturales de Lapis Lazuli',
    strandLabel: 'Lapis Lazuli Al Ain Rosette Signature Strands',
    stoneLabel: 'Lapis Lazuli',
    variationNote:
      'Las variaciones naturales del tono azul, las inclusiones de pirita y las marcas forman parte de lo que hace única a cada Signature Strand.',
  },
  'signature-strand-sunstone': {
    headline: 'Sunstone Al Ain Rosette Signature Strands',
    introP1:
      'Las Sunstone Al Ain Rosette Signature Strands reúnen gemas naturales, inspiración emiratí y diseño contemporáneo en uno de los House Codes emblemáticos de Bint Saeed. Ensambladas a mano en Abu Dhabi con Sunstone natural y Al Ain Rosettes de cornalina talladas a mano, ofrecen una forma refinada de transformar prendas seleccionadas de Bint Saeed mediante un único detalle cuidadosamente pensado.',
    introStone:
      'La Sunstone es apreciada por su cálido resplandor melocotón-anaranjado y su delicada aventurescencia, que aporta a cada strand un brillo suave desde el interior. Entre cada gema, los acentos facetados de Hematite chapada en oro capturan y reflejan la luz con cada movimiento, aportando un brillo sutil a toda la composición.',
    introRosetteBalance:
      'Junto con la cálida luminosidad de la Sunstone, crea un equilibrio impactante entre color, artesanía e inspiración cultural.',
    stoneOriginLead:
      'La Sunstone procede de regiones como India, Noruega y Estados Unidos, y se aprecia por su paleta melocotón-anaranjada y su suave destello interno.',
    stoneBeadDetail: 'Cuentas de gema natural de Sunstone (aproximadamente 5 mm)',
    materialStone: 'Gemas naturales de Sunstone',
    strandLabel: 'Sunstone Al Ain Rosette Signature Strands',
    stoneLabel: 'Sunstone',
    variationNote:
      'Las variaciones naturales de brillo, tono e inclusiones forman parte de lo que hace única a cada Signature Strand.',
  },
  'signature-strand-rose-quartz': {
    headline: 'Rose Quartz Al Ain Rosette Signature Strands',
    introP1:
      'Las Rose Quartz Al Ain Rosette Signature Strands reúnen gemas naturales, inspiración emiratí y diseño contemporáneo en uno de los House Codes emblemáticos de Bint Saeed. Ensambladas a mano en Abu Dhabi con Rose Quartz natural y Al Ain Rosettes de cornalina talladas a mano, ofrecen una forma refinada de transformar prendas seleccionadas de Bint Saeed mediante un único detalle cuidadosamente pensado.',
    introStone:
      'El Rose Quartz es admirado por sus suaves tonos rosados y su carácter luminoso y romántico, aportando una calidez delicada a cada strand. Entre cada gema, los acentos facetados de Hematite chapada en oro capturan y reflejan la luz con cada movimiento, aportando un brillo sutil a toda la composición.',
    introRosetteBalance:
      'Junto con los tonos rosados del Rose Quartz, crea un equilibrio impactante entre color, artesanía e inspiración cultural.',
    stoneOriginLead:
      'El Rose Quartz procede de regiones como Brasil, Madagascar y Sudáfrica, y se valora por sus delicados matices rosados y su translucidez natural.',
    stoneBeadDetail: 'Cuentas de gema natural de Rose Quartz (aproximadamente 5 mm)',
    materialStone: 'Gemas naturales de Rose Quartz',
    strandLabel: 'Rose Quartz Al Ain Rosette Signature Strands',
    stoneLabel: 'Rose Quartz',
    variationNote:
      'Las variaciones naturales de tono rosado, claridad y marcas forman parte de lo que hace única a cada Signature Strand.',
  },
  'signature-strand-malachite': {
    headline: 'Malachite Al Ain Rosette Signature Strands',
    introP1:
      'Las Malachite Al Ain Rosette Signature Strands reúnen gemas naturales, inspiración emiratí y diseño contemporáneo en uno de los House Codes emblemáticos de Bint Saeed. Ensambladas a mano en Abu Dhabi con Malachite natural y Al Ain Rosettes de cornalina talladas a mano, ofrecen una forma refinada de transformar prendas seleccionadas de Bint Saeed mediante un único detalle cuidadosamente pensado.',
    introStone:
      'La Malachite es apreciada por sus intensos tonos verdes y su distintivo bandeado natural, aportando a cada strand una presencia audaz pero refinada. Entre cada gema, los acentos facetados de Hematite chapada en oro capturan y reflejan la luz con cada movimiento, aportando un brillo sutil a toda la composición.',
    introRosetteBalance:
      'Junto con el verde intenso de la Malachite, crea un equilibrio impactante entre color, artesanía e inspiración cultural.',
    stoneOriginLead:
      'La Malachite procede de regiones como la República Democrática del Congo, Zambia y Australia, y se valora por su color verde saturado y sus patrones naturales bandeados.',
    stoneBeadDetail: 'Cuentas de gema natural de Malachite (aproximadamente 5 mm)',
    materialStone: 'Gemas naturales de Malachite',
    strandLabel: 'Malachite Al Ain Rosette Signature Strands',
    stoneLabel: 'Malachite',
    variationNote:
      'Las variaciones naturales del tono verde, el bandeado y las marcas forman parte de lo que hace única a cada Signature Strand.',
  },
})

const RU_PACK = buildLocalePack('ru', {
  introP2:
    'Созданные для персонализации совместимых моделей Bint Saeed, включая Marylebone Abaya и будущие совместимые изделия, эти съемные strands позволяют одному и тому же образу легко меняться. В сочетании с сумкой, обувью или украшениями они дают новое выражение стиля, не изменяя само изделие.',
  introRosette:
    'Al Ain Rosette из карнеола, вырезанная вручную, — один из фирменных House Codes Bint Saeed. Вдохновленная теплыми песочными оттенками и природным ландшафтом вокруг оазисного города Аль-Айн в ОАЭ, она переосмысляет простую природную форму в современную дизайнерскую деталь для женщин по всему миру.',
  introUnique:
    'Поскольку каждый драгоценный камень формируется природой, каждая Signature Strand полностью уникальна по цвету, включениям и характеру.',
  closing:
    'Это больше, чем аксессуар. Это личное выражение одного из фирменных House Codes Bint Saeed.',
  carnelianOrigin:
    'Карнеол для Al Ain Rosettes поставляется из Индии и тщательно вырезается вручную, становясь одним из фирменных House Codes Bint Saeed.',
  detailRosettes: 'Al Ain Rosettes из карнеола ручной резьбы (около 15 мм)',
  materialRosettes: 'Al Ain Rosettes из карнеола ручной резьбы',
  stoneOriginSuffix:
    'Каждый природный камень имеет свой оттенок, включения и рисунок, поэтому каждая Signature Strand действительно единственная в своем роде.',
  pairOfDetachable: (headline) => `Пара съемных ${headline}`,
}, {
  'signature-strand-lapis-lazuli': {
    headline: 'Lapis Lazuli Al Ain Rosette Signature Strands',
    introP1:
      'Lapis Lazuli Al Ain Rosette Signature Strands объединяют природные камни, эмиратское вдохновение и современный дизайн в одном из фирменных House Codes Bint Saeed. Собранные вручную в Abu Dhabi из натурального Lapis Lazuli и Al Ain Rosettes из карнеола ручной резьбы, они предлагают изысканный способ преобразить выбранные изделия Bint Saeed одной продуманной деталью.',
    introStone:
      'Lapis Lazuli восхищает уже тысячи лет благодаря глубоким королевским синим тонам и природным золотистым включениям пирита, делая каждую strand по-своему прекрасной. Между камнями граненые позолоченные акценты Hematite улавливают и отражают свет при каждом движении, добавляя композиции тонкое сияние.',
    introRosetteBalance:
      'В сочетании с глубоким синим Lapis Lazuli создается выразительный баланс цвета, мастерства и культурного вдохновения.',
    stoneOriginLead:
      'Lapis Lazuli веками ценится за насыщенный синий цвет и в основном добывается в Афганистане.',
    stoneBeadDetail: 'Бусины из натурального Lapis Lazuli (около 5 мм)',
    materialStone: 'Натуральные камни Lapis Lazuli',
    strandLabel: 'Lapis Lazuli Al Ain Rosette Signature Strands',
    stoneLabel: 'Lapis Lazuli',
    variationNote:
      'Естественные вариации синего оттенка, включения пирита и природные рисунки — часть того, что делает каждую Signature Strand уникальной.',
  },
  'signature-strand-sunstone': {
    headline: 'Sunstone Al Ain Rosette Signature Strands',
    introP1:
      'Sunstone Al Ain Rosette Signature Strands объединяют природные камни, эмиратское вдохновение и современный дизайн в одном из фирменных House Codes Bint Saeed. Собранные вручную в Abu Dhabi из натурального Sunstone и Al Ain Rosettes из карнеола ручной резьбы, они предлагают изысканный способ преобразить выбранные изделия Bint Saeed одной продуманной деталью.',
    introStone:
      'Sunstone ценится за теплое персиково-оранжевое сияние и деликатную авантюресценцию, придающую каждой strand мягкий свет изнутри. Между камнями граненые позолоченные акценты Hematite улавливают и отражают свет при каждом движении, добавляя композиции тонкое сияние.',
    introRosetteBalance:
      'В сочетании с теплым свечением Sunstone создается выразительный баланс цвета, мастерства и культурного вдохновения.',
    stoneOriginLead:
      'Sunstone поступает из регионов, включая Индию, Норвегию и США, и ценится за теплую персиково-оранжевую палитру и мягкое внутреннее мерцание.',
    stoneBeadDetail: 'Бусины из натурального Sunstone (около 5 мм)',
    materialStone: 'Натуральные камни Sunstone',
    strandLabel: 'Sunstone Al Ain Rosette Signature Strands',
    stoneLabel: 'Sunstone',
    variationNote:
      'Естественные вариации свечения, оттенка и включений — часть того, что делает каждую Signature Strand уникальной.',
  },
  'signature-strand-rose-quartz': {
    headline: 'Rose Quartz Al Ain Rosette Signature Strands',
    introP1:
      'Rose Quartz Al Ain Rosette Signature Strands объединяют природные камни, эмиратское вдохновение и современный дизайн в одном из фирменных House Codes Bint Saeed. Собранные вручную в Abu Dhabi из натурального Rose Quartz и Al Ain Rosettes из карнеола ручной резьбы, они предлагают изысканный способ преобразить выбранные изделия Bint Saeed одной продуманной деталью.',
    introStone:
      'Rose Quartz ценится за мягкие розовые оттенки и светящийся романтичный характер, добавляющий каждой strand деликатное тепло. Между камнями граненые позолоченные акценты Hematite улавливают и отражают свет при каждом движении, добавляя композиции тонкое сияние.',
    introRosetteBalance:
      'В сочетании с нежно-розовыми тонами Rose Quartz создается выразительный баланс цвета, мастерства и культурного вдохновения.',
    stoneOriginLead:
      'Rose Quartz поставляется из регионов, включая Бразилию, Мадагаскар и Южную Африку, и ценится за деликатные розовые оттенки и природную полупрозрачность.',
    stoneBeadDetail: 'Бусины из натурального Rose Quartz (около 5 мм)',
    materialStone: 'Натуральные камни Rose Quartz',
    strandLabel: 'Rose Quartz Al Ain Rosette Signature Strands',
    stoneLabel: 'Rose Quartz',
    variationNote:
      'Естественные вариации розового оттенка, прозрачности и рисунка — часть того, что делает каждую Signature Strand уникальной.',
  },
  'signature-strand-malachite': {
    headline: 'Malachite Al Ain Rosette Signature Strands',
    introP1:
      'Malachite Al Ain Rosette Signature Strands объединяют природные камни, эмиратское вдохновение и современный дизайн в одном из фирменных House Codes Bint Saeed. Собранные вручную в Abu Dhabi из натурального Malachite и Al Ain Rosettes из карнеола ручной резьбы, они предлагают изысканный способ преобразить выбранные изделия Bint Saeed одной продуманной деталью.',
    introStone:
      'Malachite ценится за глубокие зеленые тона и характерную природную полосчатость, придающую каждой strand смелое, но изысканное присутствие. Между камнями граненые позолоченные акценты Hematite улавливают и отражают свет при каждом движении, добавляя композиции тонкое сияние.',
    introRosetteBalance:
      'В сочетании с насыщенным зеленым Malachite создается выразительный баланс цвета, мастерства и культурного вдохновения.',
    stoneOriginLead:
      'Malachite поставляется из регионов, включая Демократическую Республику Конго, Замбию и Австралию, и ценится за насыщенный зеленый цвет и природные полосчатые узоры.',
    stoneBeadDetail: 'Бусины из натурального Malachite (около 5 мм)',
    materialStone: 'Натуральные камни Malachite',
    strandLabel: 'Malachite Al Ain Rosette Signature Strands',
    stoneLabel: 'Malachite',
    variationNote:
      'Естественные вариации зеленого оттенка, полосчатости и рисунка — часть того, что делает каждую Signature Strand уникальной.',
  },
})

const ZH_PACK = buildLocalePack('zh', {
  introP2:
    '这些可拆卸 strands 专为个性化 Bint Saeed 兼容设计而打造，包括 Marylebone Abaya 及未来兼容款式，让同一件服装也能轻松呈现不同风格。无论搭配手袋、鞋履或珠宝，都能在不改变服装本身的前提下带来全新表达。',
  introRosette:
    '手工雕刻的 Carnelian Al Ain Rosette 是 Bint Saeed 标志性 House Codes 之一。其灵感源自阿联酋 Al Ain 绿洲城市周边的暖沙色调与自然景观，将简洁自然形态演绎为现代设计细节，适合全球女性佩戴。',
  introUnique:
    '每一颗宝石都由自然形成，因此每一条 Signature Strand 都在色泽、纹理与气质上独一无二。',
  closing: '这不仅是配饰，更是对 Bint Saeed 标志性 House Codes 之一的个性表达。',
  carnelianOrigin:
    '用于 Al Ain Rosettes 的 Carnelian 采自印度，并经精细手工雕刻，成为 Bint Saeed 标志性 House Codes 之一。',
  detailRosettes: '手工雕刻 Carnelian Al Ain Rosettes（约 15 毫米）',
  materialRosettes: '手工雕刻 Carnelian Al Ain Rosettes',
  stoneOriginSuffix:
    '每一颗天然宝石都展现其专属色泽、内含物与纹理标记，因此每一条 Signature Strand 都独一无二。',
  pairOfDetachable: (headline) => `一对可拆卸 ${headline}`,
}, {
  'signature-strand-lapis-lazuli': {
    headline: 'Lapis Lazuli Al Ain Rosette Signature Strands',
    introP1:
      'Lapis Lazuli Al Ain Rosette Signature Strands 将天然宝石、阿联酋灵感与当代设计融合于 Bint Saeed 标志性 House Codes 之一。以天然 Lapis Lazuli 与手工雕刻 Carnelian Al Ain Rosettes 在 Abu Dhabi 手工组装，通过一个精心细节，为精选 Bint Saeed 服装带来更精致的焕新方式。',
    introStone:
      'Lapis Lazuli 数千年来备受珍视，以浓郁皇家蓝色调与天然金色黄铁矿内含物著称，使每条 strand 都别具美感。每颗宝石之间，切面镀金 Hematite 点缀会随动作捕捉并反射光线，为整体增添低调光泽。',
    introRosetteBalance:
      '与深邃蓝调的 Lapis Lazuli 搭配，形成色彩、工艺与文化灵感之间的鲜明平衡。',
    stoneOriginLead:
      'Lapis Lazuli 因其浓郁蓝色而数世纪以来备受推崇，主要产自阿富汗。',
    stoneBeadDetail: '天然 Lapis Lazuli 宝石珠（约 5 毫米）',
    materialStone: '天然 Lapis Lazuli 宝石',
    strandLabel: 'Lapis Lazuli Al Ain Rosette Signature Strands',
    stoneLabel: 'Lapis Lazuli',
    variationNote:
      '蓝色深浅、黄铁矿内含物与天然纹理的差异，正是每条 Signature Strand 独一无二的原因。',
  },
  'signature-strand-sunstone': {
    headline: 'Sunstone Al Ain Rosette Signature Strands',
    introP1:
      'Sunstone Al Ain Rosette Signature Strands 将天然宝石、阿联酋灵感与当代设计融合于 Bint Saeed 标志性 House Codes 之一。以天然 Sunstone 与手工雕刻 Carnelian Al Ain Rosettes 在 Abu Dhabi 手工组装，通过一个精心细节，为精选 Bint Saeed 服装带来更精致的焕新方式。',
    introStone:
      'Sunstone 以温暖的蜜桃橙光泽与细腻砂金效应而受到喜爱，为每条 strand 带来由内而外的柔和亮感。每颗宝石之间，切面镀金 Hematite 点缀会随动作捕捉并反射光线，为整体增添低调光泽。',
    introRosetteBalance:
      '与 Sunstone 温暖光辉相配，形成色彩、工艺与文化灵感之间的鲜明平衡。',
    stoneOriginLead:
      'Sunstone 产自包括印度、挪威和美国在内的地区，以其蜜桃橙色调与柔和内在闪光而备受青睐。',
    stoneBeadDetail: '天然 Sunstone 宝石珠（约 5 毫米）',
    materialStone: '天然 Sunstone 宝石',
    strandLabel: 'Sunstone Al Ain Rosette Signature Strands',
    stoneLabel: 'Sunstone',
    variationNote:
      '光泽、色调与内含物的自然差异，正是每条 Signature Strand 独一无二的原因。',
  },
  'signature-strand-rose-quartz': {
    headline: 'Rose Quartz Al Ain Rosette Signature Strands',
    introP1:
      'Rose Quartz Al Ain Rosette Signature Strands 将天然宝石、阿联酋灵感与当代设计融合于 Bint Saeed 标志性 House Codes 之一。以天然 Rose Quartz 与手工雕刻 Carnelian Al Ain Rosettes 在 Abu Dhabi 手工组装，通过一个精心细节，为精选 Bint Saeed 服装带来更精致的焕新方式。',
    introStone:
      'Rose Quartz 以柔和粉色调与明亮浪漫气质而闻名，为每条 strand 带来温柔暖意。每颗宝石之间，切面镀金 Hematite 点缀会随动作捕捉并反射光线，为整体增添低调光泽。',
    introRosetteBalance:
      '与 Rose Quartz 柔粉色调相配，形成色彩、工艺与文化灵感之间的鲜明平衡。',
    stoneOriginLead:
      'Rose Quartz 产自包括巴西、马达加斯加和南非在内的地区，以其细腻粉色与天然半透明质感而备受珍视。',
    stoneBeadDetail: '天然 Rose Quartz 宝石珠（约 5 毫米）',
    materialStone: '天然 Rose Quartz 宝石',
    strandLabel: 'Rose Quartz Al Ain Rosette Signature Strands',
    stoneLabel: 'Rose Quartz',
    variationNote:
      '粉色深浅、通透度与天然纹理的差异，正是每条 Signature Strand 独一无二的原因。',
  },
  'signature-strand-malachite': {
    headline: 'Malachite Al Ain Rosette Signature Strands',
    introP1:
      'Malachite Al Ain Rosette Signature Strands 将天然宝石、阿联酋灵感与当代设计融合于 Bint Saeed 标志性 House Codes 之一。以天然 Malachite 与手工雕刻 Carnelian Al Ain Rosettes 在 Abu Dhabi 手工组装，通过一个精心细节，为精选 Bint Saeed 服装带来更精致的焕新方式。',
    introStone:
      'Malachite 以深邃绿色调与标志性天然条带纹理而著称，赋予每条 strand 大胆而精致的存在感。每颗宝石之间，切面镀金 Hematite 点缀会随动作捕捉并反射光线，为整体增添低调光泽。',
    introRosetteBalance:
      '与 Malachite 浓郁绿色相配，形成色彩、工艺与文化灵感之间的鲜明平衡。',
    stoneOriginLead:
      'Malachite 产自包括刚果民主共和国、赞比亚和澳大利亚在内的地区，以其饱和绿色与天然条带纹样而受到重视。',
    stoneBeadDetail: '天然 Malachite 宝石珠（约 5 毫米）',
    materialStone: '天然 Malachite 宝石',
    strandLabel: 'Malachite Al Ain Rosette Signature Strands',
    stoneLabel: 'Malachite',
    variationNote:
      '绿色深浅、条带纹理与天然标记的差异，正是每条 Signature Strand 独一无二的原因。',
  },
})

const DE_PACK = buildLocalePack('de', {
  introP2:
    'Diese abnehmbaren Strands wurden entwickelt, um kompatible Bint Saeed Designs zu personalisieren, darunter die Marylebone Abaya und künftige kompatible Kreationen. So kann sich ein einziges Kleidungsstück mühelos weiterentwickeln. Ob abgestimmt auf Handtasche, Schuhe oder Schmuck: Sie schaffen einen neuen Ausdruck, ohne das Kleidungsstück selbst zu verändern.',
  introRosette:
    'Die handgeschnitzte Carnelian Al Ain Rosette ist einer der charakteristischen House Codes von Bint Saeed. Inspiriert von warmen Sandtönen und der natürlichen Landschaft rund um die Oasenstadt Al Ain in den Vereinigten Arabischen Emiraten, interpretiert sie eine schlichte Naturform als modernes Designdetail neu, das von Frauen weltweit getragen werden kann.',
  introUnique:
    'Da jeder Edelstein natürlich entsteht, ist jede Signature Strand in Farbe, Zeichnung und Charakter vollständig einzigartig.',
  closing:
    'Das ist mehr als ein Accessoire. Es ist ein persönlicher Ausdruck eines der charakteristischen House Codes von Bint Saeed.',
  carnelianOrigin:
    'Der für die Al Ain Rosettes verwendete Carnelian stammt aus Indien und wird sorgfältig von Hand geschnitzt, um zu einem der charakteristischen House Codes von Bint Saeed zu werden.',
  detailRosettes: 'Handgeschnitzte Carnelian Al Ain Rosettes (ca. 15 mm)',
  materialRosettes: 'Handgeschnitzte Carnelian Al Ain Rosettes',
  stoneOriginSuffix:
    'Jeder Naturstein zeigt seine eigene Farbe, Einschlüsse und Zeichnungen, wodurch jede Signature Strand ein Unikat ist.',
  pairOfDetachable: (headline) => `Paar abnehmbarer ${headline}`,
}, {
  'signature-strand-lapis-lazuli': {
    headline: 'Lapis Lazuli Al Ain Rosette Signature Strands',
    introP1:
      'Die Lapis Lazuli Al Ain Rosette Signature Strands vereinen Naturedelsteine, emiratische Inspiration und zeitgenössisches Design in einem der charakteristischen House Codes von Bint Saeed. In Abu Dhabi von Hand aus natürlichem Lapis Lazuli und handgeschnitzten Carnelian Al Ain Rosettes zusammengesetzt, bieten sie eine raffinierte Möglichkeit, ausgewählte Bint Saeed Stücke durch ein einziges durchdachtes Detail zu verwandeln.',
    introStone:
      'Lapis Lazuli wird seit Jahrtausenden geschätzt und ist für seine satten königsblauen Töne sowie natürlich vorkommenden goldenen Pyrit-Einschlüsse bekannt, die jede Strand besonders machen. Zwischen jedem Edelstein fangen facettierte, vergoldete Hematite-Akzente bei jeder Bewegung das Licht ein und reflektieren es, wodurch die gesamte Komposition dezent strahlt.',
    introRosetteBalance:
      'Zusammen mit dem tiefen Blau des Lapis Lazuli entsteht eine markante Balance aus Farbe, Handwerkskunst und kultureller Inspiration.',
    stoneOriginLead:
      'Lapis Lazuli wird seit Jahrhunderten für seine intensive blaue Farbe geschätzt und stammt überwiegend aus Afghanistan.',
    stoneBeadDetail: 'Perlen aus natürlichem Lapis Lazuli (ca. 5 mm)',
    materialStone: 'Natürliche Lapis Lazuli Edelsteine',
    strandLabel: 'Lapis Lazuli Al Ain Rosette Signature Strands',
    stoneLabel: 'Lapis Lazuli',
    variationNote:
      'Natürliche Variationen im Blauton, Pyrit-Einschlüsse und Zeichnungen machen jede Signature Strand einzigartig.',
  },
  'signature-strand-sunstone': {
    headline: 'Sunstone Al Ain Rosette Signature Strands',
    introP1:
      'Die Sunstone Al Ain Rosette Signature Strands vereinen Naturedelsteine, emiratische Inspiration und zeitgenössisches Design in einem der charakteristischen House Codes von Bint Saeed. In Abu Dhabi von Hand aus natürlichem Sunstone und handgeschnitzten Carnelian Al Ain Rosettes zusammengesetzt, bieten sie eine raffinierte Möglichkeit, ausgewählte Bint Saeed Stücke durch ein einziges durchdachtes Detail zu verwandeln.',
    introStone:
      'Sunstone wird für seinen warmen pfirsich-orangefarbenen Schimmer und seine feine Aventureszenz geschätzt, die jeder Strand ein sanftes Leuchten von innen verleiht. Zwischen jedem Edelstein fangen facettierte, vergoldete Hematite-Akzente bei jeder Bewegung das Licht ein und reflektieren es, wodurch die gesamte Komposition dezent strahlt.',
    introRosetteBalance:
      'Zusammen mit der warmen Ausstrahlung des Sunstone entsteht eine markante Balance aus Farbe, Handwerkskunst und kultureller Inspiration.',
    stoneOriginLead:
      'Sunstone stammt aus Regionen wie Indien, Norwegen und den USA und wird für seine pfirsich-orange Palette und sein sanftes inneres Funkeln geschätzt.',
    stoneBeadDetail: 'Perlen aus natürlichem Sunstone (ca. 5 mm)',
    materialStone: 'Natürliche Sunstone Edelsteine',
    strandLabel: 'Sunstone Al Ain Rosette Signature Strands',
    stoneLabel: 'Sunstone',
    variationNote:
      'Natürliche Variationen in Leuchten, Farbton und Einschlüssen machen jede Signature Strand einzigartig.',
  },
  'signature-strand-rose-quartz': {
    headline: 'Rose Quartz Al Ain Rosette Signature Strands',
    introP1:
      'Die Rose Quartz Al Ain Rosette Signature Strands vereinen Naturedelsteine, emiratische Inspiration und zeitgenössisches Design in einem der charakteristischen House Codes von Bint Saeed. In Abu Dhabi von Hand aus natürlichem Rose Quartz und handgeschnitzten Carnelian Al Ain Rosettes zusammengesetzt, bieten sie eine raffinierte Möglichkeit, ausgewählte Bint Saeed Stücke durch ein einziges durchdachtes Detail zu verwandeln.',
    introStone:
      'Rose Quartz wird für seine zarten Rosétöne und seinen leuchtend-romantischen Charakter geschätzt und verleiht jeder Strand eine sanfte Wärme. Zwischen jedem Edelstein fangen facettierte, vergoldete Hematite-Akzente bei jeder Bewegung das Licht ein und reflektieren es, wodurch die gesamte Komposition dezent strahlt.',
    introRosetteBalance:
      'Zusammen mit den zarten Rosétönen des Rose Quartz entsteht eine markante Balance aus Farbe, Handwerkskunst und kultureller Inspiration.',
    stoneOriginLead:
      'Rose Quartz stammt aus Regionen wie Brasilien, Madagaskar und Südafrika und wird für seine zarten Rosétöne und natürliche Transluzenz geschätzt.',
    stoneBeadDetail: 'Perlen aus natürlichem Rose Quartz (ca. 5 mm)',
    materialStone: 'Natürliche Rose Quartz Edelsteine',
    strandLabel: 'Rose Quartz Al Ain Rosette Signature Strands',
    stoneLabel: 'Rose Quartz',
    variationNote:
      'Natürliche Variationen in Roséton, Klarheit und Zeichnung machen jede Signature Strand einzigartig.',
  },
  'signature-strand-malachite': {
    headline: 'Malachite Al Ain Rosette Signature Strands',
    introP1:
      'Die Malachite Al Ain Rosette Signature Strands vereinen Naturedelsteine, emiratische Inspiration und zeitgenössisches Design in einem der charakteristischen House Codes von Bint Saeed. In Abu Dhabi von Hand aus natürlichem Malachite und handgeschnitzten Carnelian Al Ain Rosettes zusammengesetzt, bieten sie eine raffinierte Möglichkeit, ausgewählte Bint Saeed Stücke durch ein einziges durchdachtes Detail zu verwandeln.',
    introStone:
      'Malachite wird für seine tiefen Grüntöne und die charakteristische natürliche Bänderung geschätzt, die jeder Strand eine ausdrucksstarke und zugleich raffinierte Präsenz verleiht. Zwischen jedem Edelstein fangen facettierte, vergoldete Hematite-Akzente bei jeder Bewegung das Licht ein und reflektieren es, wodurch die gesamte Komposition dezent strahlt.',
    introRosetteBalance:
      'Zusammen mit dem satten Grün des Malachite entsteht eine markante Balance aus Farbe, Handwerkskunst und kultureller Inspiration.',
    stoneOriginLead:
      'Malachite stammt aus Regionen wie der Demokratischen Republik Kongo, Sambia und Australien und wird für seine gesättigte grüne Farbe sowie natürliche Bänderungsmuster geschätzt.',
    stoneBeadDetail: 'Perlen aus natürlichem Malachite (ca. 5 mm)',
    materialStone: 'Natürliche Malachite Edelsteine',
    strandLabel: 'Malachite Al Ain Rosette Signature Strands',
    stoneLabel: 'Malachite',
    variationNote:
      'Natürliche Variationen in Grünton, Bänderung und Zeichnung machen jede Signature Strand einzigartig.',
  },
})

const NL_PACK = buildLocalePack('nl', {
  introP2:
    'Deze afneembare strands zijn ontworpen om compatibele Bint Saeed ontwerpen te personaliseren, waaronder de Marylebone Abaya en toekomstige compatibele creaties. Zo kan één kledingstuk moeiteloos evolueren. Gestyled bij je handtas, schoenen of sieraden zorgen ze voor een frisse expressie zonder het kledingstuk zelf te veranderen.',
  introRosette:
    'De met de hand gesneden Carnelian Al Ain Rosette is een van de kenmerkende House Codes van Bint Saeed. Geïnspireerd op de warme zandtinten en het natuurlijke landschap rond de oasestad Al Ain in de Verenigde Arabische Emiraten, vertaalt deze een eenvoudige natuurlijke vorm naar een eigentijds designdetail dat wereldwijd gedragen kan worden.',
  introUnique:
    'Omdat elke edelsteen op natuurlijke wijze wordt gevormd, is elke Signature Strand volledig uniek in kleur, tekening en karakter.',
  closing:
    'Dit is meer dan een accessoire. Het is een persoonlijke uitdrukking van een van de kenmerkende House Codes van Bint Saeed.',
  carnelianOrigin:
    'De Carnelian die wordt gebruikt voor de Al Ain Rosettes komt uit India en wordt zorgvuldig met de hand gesneden tot een van de kenmerkende House Codes van Bint Saeed.',
  detailRosettes: 'Met de hand gesneden Carnelian Al Ain Rosettes (ongeveer 15 mm)',
  materialRosettes: 'Met de hand gesneden Carnelian Al Ain Rosettes',
  stoneOriginSuffix:
    'Elke natuurlijke edelsteen toont een eigen kleur, insluitsels en markeringen, waardoor elke Signature Strand echt uniek is.',
  pairOfDetachable: (headline) => `Paar afneembare ${headline}`,
}, {
  'signature-strand-lapis-lazuli': {
    headline: 'Lapis Lazuli Al Ain Rosette Signature Strands',
    introP1:
      'De Lapis Lazuli Al Ain Rosette Signature Strands brengen natuurlijke edelstenen, Emirati inspiratie en eigentijds design samen in een van de kenmerkende House Codes van Bint Saeed. Met de hand geassembleerd in Abu Dhabi van natuurlijke Lapis Lazuli en met de hand gesneden Carnelian Al Ain Rosettes, bieden ze een verfijnde manier om geselecteerde Bint Saeed kledingstukken te transformeren via één doordacht detail.',
    introStone:
      'Lapis Lazuli wordt al duizenden jaren bewonderd om zijn rijke koningsblauwe tonen en natuurlijk voorkomende gouden pyrietinsluitsels, waardoor elke strand prachtig uniek is. Tussen elke edelsteen vangen gefacetteerde goudvergulde Hematite-accenten het licht bij elke beweging en weerkaatsen het subtiel door de hele compositie.',
    introRosetteBalance:
      'Samen met het diepe blauw van Lapis Lazuli ontstaat een opvallende balans tussen kleur, vakmanschap en culturele inspiratie.',
    stoneOriginLead:
      'Lapis Lazuli wordt al eeuwen gewaardeerd om zijn intense blauwe kleur en is voornamelijk afkomstig uit Afghanistan.',
    stoneBeadDetail: 'Natuurlijke Lapis Lazuli edelsteenkralen (ongeveer 5 mm)',
    materialStone: 'Natuurlijke Lapis Lazuli edelstenen',
    strandLabel: 'Lapis Lazuli Al Ain Rosette Signature Strands',
    stoneLabel: 'Lapis Lazuli',
    variationNote:
      'Natuurlijke variaties in blauwtint, pyrietinsluitsels en markeringen maken elke Signature Strand uniek.',
  },
  'signature-strand-sunstone': {
    headline: 'Sunstone Al Ain Rosette Signature Strands',
    introP1:
      'De Sunstone Al Ain Rosette Signature Strands brengen natuurlijke edelstenen, Emirati inspiratie en eigentijds design samen in een van de kenmerkende House Codes van Bint Saeed. Met de hand geassembleerd in Abu Dhabi van natuurlijke Sunstone en met de hand gesneden Carnelian Al Ain Rosettes, bieden ze een verfijnde manier om geselecteerde Bint Saeed kledingstukken te transformeren via één doordacht detail.',
    introStone:
      'Sunstone wordt gewaardeerd om zijn warme perzik-oranje gloed en fijne aventurescentie, die elke strand een zachte innerlijke schittering geeft. Tussen elke edelsteen vangen gefacetteerde goudvergulde Hematite-accenten het licht bij elke beweging en weerkaatsen het subtiel door de hele compositie.',
    introRosetteBalance:
      'Samen met de warme uitstraling van Sunstone ontstaat een opvallende balans tussen kleur, vakmanschap en culturele inspiratie.',
    stoneOriginLead:
      'Sunstone is afkomstig uit regio’s zoals India, Noorwegen en de Verenigde Staten en wordt gewaardeerd om het perzik-oranje palet en de zachte interne schittering.',
    stoneBeadDetail: 'Natuurlijke Sunstone edelsteenkralen (ongeveer 5 mm)',
    materialStone: 'Natuurlijke Sunstone edelstenen',
    strandLabel: 'Sunstone Al Ain Rosette Signature Strands',
    stoneLabel: 'Sunstone',
    variationNote:
      'Natuurlijke variaties in gloed, tint en insluitsels maken elke Signature Strand uniek.',
  },
  'signature-strand-rose-quartz': {
    headline: 'Rose Quartz Al Ain Rosette Signature Strands',
    introP1:
      'De Rose Quartz Al Ain Rosette Signature Strands brengen natuurlijke edelstenen, Emirati inspiratie en eigentijds design samen in een van de kenmerkende House Codes van Bint Saeed. Met de hand geassembleerd in Abu Dhabi van natuurlijke Rose Quartz en met de hand gesneden Carnelian Al Ain Rosettes, bieden ze een verfijnde manier om geselecteerde Bint Saeed kledingstukken te transformeren via één doordacht detail.',
    introStone:
      'Rose Quartz wordt bewonderd om zijn zachte blush-tinten en licht romantische karakter, wat elke strand een subtiele warmte geeft. Tussen elke edelsteen vangen gefacetteerde goudvergulde Hematite-accenten het licht bij elke beweging en weerkaatsen het subtiel door de hele compositie.',
    introRosetteBalance:
      'Samen met de blush-tinten van Rose Quartz ontstaat een opvallende balans tussen kleur, vakmanschap en culturele inspiratie.',
    stoneOriginLead:
      'Rose Quartz is afkomstig uit regio’s zoals Brazilië, Madagaskar en Zuid-Afrika en wordt gewaardeerd om zijn delicate roze tinten en natuurlijke translucentie.',
    stoneBeadDetail: 'Natuurlijke Rose Quartz edelsteenkralen (ongeveer 5 mm)',
    materialStone: 'Natuurlijke Rose Quartz edelstenen',
    strandLabel: 'Rose Quartz Al Ain Rosette Signature Strands',
    stoneLabel: 'Rose Quartz',
    variationNote:
      'Natuurlijke variaties in blush-tint, helderheid en markeringen maken elke Signature Strand uniek.',
  },
  'signature-strand-malachite': {
    headline: 'Malachite Al Ain Rosette Signature Strands',
    introP1:
      'De Malachite Al Ain Rosette Signature Strands brengen natuurlijke edelstenen, Emirati inspiratie en eigentijds design samen in een van de kenmerkende House Codes van Bint Saeed. Met de hand geassembleerd in Abu Dhabi van natuurlijke Malachite en met de hand gesneden Carnelian Al Ain Rosettes, bieden ze een verfijnde manier om geselecteerde Bint Saeed kledingstukken te transformeren via één doordacht detail.',
    introStone:
      'Malachite wordt gewaardeerd om zijn diepe groentinten en kenmerkende natuurlijke bandering, die elke strand een krachtige maar verfijnde uitstraling geeft. Tussen elke edelsteen vangen gefacetteerde goudvergulde Hematite-accenten het licht bij elke beweging en weerkaatsen het subtiel door de hele compositie.',
    introRosetteBalance:
      'Samen met het rijke groen van Malachite ontstaat een opvallende balans tussen kleur, vakmanschap en culturele inspiratie.',
    stoneOriginLead:
      'Malachite is afkomstig uit regio’s zoals de Democratische Republiek Congo, Zambia en Australië en wordt gewaardeerd om zijn verzadigde groene kleur en natuurlijke bandpatronen.',
    stoneBeadDetail: 'Natuurlijke Malachite edelsteenkralen (ongeveer 5 mm)',
    materialStone: 'Natuurlijke Malachite edelstenen',
    strandLabel: 'Malachite Al Ain Rosette Signature Strands',
    stoneLabel: 'Malachite',
    variationNote:
      'Natuurlijke variaties in groentint, bandering en markeringen maken elke Signature Strand uniek.',
  },
})

const PT_PACK = buildLocalePack('pt', {
  introP2:
    'Criadas para personalizar designs compatíveis da Bint Saeed, incluindo a Marylebone Abaya e futuras criações compatíveis, estas strands destacáveis permitem que uma única peça evolua com facilidade. Seja para coordenar com a sua mala, sapatos ou joias, criam uma nova expressão sem alterar a peça em si.',
  introRosette:
    'A Carnelian Al Ain Rosette esculpida à mão é um dos House Codes de assinatura da Bint Saeed. Inspirada nos tons quentes de areia e na paisagem natural que envolve a cidade-oásis de Al Ain, nos Emirados Árabes Unidos, reinterpreta uma forma natural simples num detalhe de design contemporâneo que pode ser usado por mulheres em todo o mundo.',
  introUnique:
    'Como cada gema é formada naturalmente, cada Signature Strand é totalmente única na cor, nas marcações e no caráter.',
  closing:
    'Isto é mais do que um acessório. É uma expressão pessoal de um dos House Codes de assinatura da Bint Saeed.',
  carnelianOrigin:
    'A Carnelian usada nas Al Ain Rosettes é proveniente da Índia e cuidadosamente esculpida para se tornar um dos House Codes de assinatura da Bint Saeed.',
  detailRosettes: 'Carnelian Al Ain Rosettes esculpidas à mão (aproximadamente 15 mm)',
  materialRosettes: 'Carnelian Al Ain Rosettes esculpidas à mão',
  stoneOriginSuffix:
    'Cada gema natural apresenta cor, inclusões e marcações próprias, tornando cada Signature Strand verdadeiramente única.',
  pairOfDetachable: (headline) => `Par de ${headline} destacáveis`,
}, {
  'signature-strand-lapis-lazuli': {
    headline: 'Lapis Lazuli Al Ain Rosette Signature Strands',
    introP1:
      'As Lapis Lazuli Al Ain Rosette Signature Strands reúnem gemas naturais, inspiração emiradense e design contemporâneo num dos House Codes de assinatura da Bint Saeed. Montadas à mão em Abu Dhabi com Lapis Lazuli natural e Carnelian Al Ain Rosettes esculpidas à mão, oferecem uma forma refinada de transformar peças selecionadas da Bint Saeed através de um único detalhe pensado com intenção.',
    introStone:
      'Admirado há milhares de anos, o Lapis Lazuli é reconhecido pelos seus ricos tons azul-real e pelas inclusões naturais de pirita dourada, tornando cada strand belamente única. Entre cada gema, acentos facetados de Hematite banhada a ouro captam e refletem a luz a cada movimento, acrescentando um brilho subtil a toda a composição.',
    introRosetteBalance:
      'Juntamente com o azul profundo do Lapis Lazuli, cria um equilíbrio marcante entre cor, artesanato e inspiração cultural.',
    stoneOriginLead:
      'O Lapis Lazuli é valorizado há séculos pela sua cor azul intensa e é proveniente principalmente do Afeganistão.',
    stoneBeadDetail: 'Contas de gema natural de Lapis Lazuli (aproximadamente 5 mm)',
    materialStone: 'Gemas naturais de Lapis Lazuli',
    strandLabel: 'Lapis Lazuli Al Ain Rosette Signature Strands',
    stoneLabel: 'Lapis Lazuli',
    variationNote:
      'As variações naturais de tom azul, inclusões de pirita e marcações fazem parte do que torna cada Signature Strand única.',
  },
  'signature-strand-sunstone': {
    headline: 'Sunstone Al Ain Rosette Signature Strands',
    introP1:
      'As Sunstone Al Ain Rosette Signature Strands reúnem gemas naturais, inspiração emiradense e design contemporâneo num dos House Codes de assinatura da Bint Saeed. Montadas à mão em Abu Dhabi com Sunstone natural e Carnelian Al Ain Rosettes esculpidas à mão, oferecem uma forma refinada de transformar peças selecionadas da Bint Saeed através de um único detalhe pensado com intenção.',
    introStone:
      'A Sunstone é apreciada pelo seu brilho quente pêssego-alaranjado e pela delicada aventurescência, que confere a cada strand uma luminosidade suave vinda de dentro. Entre cada gema, acentos facetados de Hematite banhada a ouro captam e refletem a luz a cada movimento, acrescentando um brilho subtil a toda a composição.',
    introRosetteBalance:
      'Juntamente com a radiância quente da Sunstone, cria um equilíbrio marcante entre cor, artesanato e inspiração cultural.',
    stoneOriginLead:
      'A Sunstone é proveniente de regiões como Índia, Noruega e Estados Unidos, sendo apreciada pela sua paleta pêssego-alaranjada e pelo brilho interno suave.',
    stoneBeadDetail: 'Contas de gema natural de Sunstone (aproximadamente 5 mm)',
    materialStone: 'Gemas naturais de Sunstone',
    strandLabel: 'Sunstone Al Ain Rosette Signature Strands',
    stoneLabel: 'Sunstone',
    variationNote:
      'As variações naturais de brilho, tonalidade e inclusões fazem parte do que torna cada Signature Strand única.',
  },
  'signature-strand-rose-quartz': {
    headline: 'Rose Quartz Al Ain Rosette Signature Strands',
    introP1:
      'As Rose Quartz Al Ain Rosette Signature Strands reúnem gemas naturais, inspiração emiradense e design contemporâneo num dos House Codes de assinatura da Bint Saeed. Montadas à mão em Abu Dhabi com Rose Quartz natural e Carnelian Al Ain Rosettes esculpidas à mão, oferecem uma forma refinada de transformar peças selecionadas da Bint Saeed através de um único detalhe pensado com intenção.',
    introStone:
      'O Rose Quartz é admirado pelos seus tons rosados suaves e pelo seu caráter luminoso e romântico, trazendo uma delicada sensação de calor a cada strand. Entre cada gema, acentos facetados de Hematite banhada a ouro captam e refletem a luz a cada movimento, acrescentando um brilho subtil a toda a composição.',
    introRosetteBalance:
      'Juntamente com os tons rosados do Rose Quartz, cria um equilíbrio marcante entre cor, artesanato e inspiração cultural.',
    stoneOriginLead:
      'O Rose Quartz é proveniente de regiões como Brasil, Madagáscar e África do Sul, sendo valorizado pelas delicadas nuances rosadas e pela translucidez natural.',
    stoneBeadDetail: 'Contas de gema natural de Rose Quartz (aproximadamente 5 mm)',
    materialStone: 'Gemas naturais de Rose Quartz',
    strandLabel: 'Rose Quartz Al Ain Rosette Signature Strands',
    stoneLabel: 'Rose Quartz',
    variationNote:
      'As variações naturais de tom rosado, transparência e marcações fazem parte do que torna cada Signature Strand única.',
  },
  'signature-strand-malachite': {
    headline: 'Malachite Al Ain Rosette Signature Strands',
    introP1:
      'As Malachite Al Ain Rosette Signature Strands reúnem gemas naturais, inspiração emiradense e design contemporâneo num dos House Codes de assinatura da Bint Saeed. Montadas à mão em Abu Dhabi com Malachite natural e Carnelian Al Ain Rosettes esculpidas à mão, oferecem uma forma refinada de transformar peças selecionadas da Bint Saeed através de um único detalhe pensado com intenção.',
    introStone:
      'A Malachite é apreciada pelos seus tons verdes profundos e pelo seu bandamento natural distintivo, conferindo a cada strand uma presença ousada e refinada. Entre cada gema, acentos facetados de Hematite banhada a ouro captam e refletem a luz a cada movimento, acrescentando um brilho subtil a toda a composição.',
    introRosetteBalance:
      'Juntamente com o verde intenso da Malachite, cria um equilíbrio marcante entre cor, artesanato e inspiração cultural.',
    stoneOriginLead:
      'A Malachite é proveniente de regiões como a República Democrática do Congo, Zâmbia e Austrália, sendo valorizada pela cor verde saturada e pelos padrões naturais em bandas.',
    stoneBeadDetail: 'Contas de gema natural de Malachite (aproximadamente 5 mm)',
    materialStone: 'Gemas naturais de Malachite',
    strandLabel: 'Malachite Al Ain Rosette Signature Strands',
    stoneLabel: 'Malachite',
    variationNote:
      'As variações naturais de tom verde, bandamento e marcações fazem parte do que torna cada Signature Strand única.',
  },
})

const ID_PACK = buildLocalePack('id', {
  introP2:
    'Dirancang untuk mempersonalisasi desain Bint Saeed yang kompatibel, termasuk Marylebone Abaya dan kreasi kompatibel di masa mendatang, strands lepas-pasang ini memungkinkan satu busana berevolusi dengan mudah. Dipadukan dengan tas tangan, sepatu, atau perhiasan Anda, strands ini menghadirkan ekspresi baru tanpa mengubah busana utamanya.',
  introRosette:
    'Carnelian Al Ain Rosette yang diukir tangan adalah salah satu House Codes khas Bint Saeed. Terinspirasi dari nuansa pasir hangat dan lanskap alami di sekitar kota oasis Al Ain di Uni Emirat Arab, elemen ini menafsirkan ulang bentuk alami yang sederhana menjadi detail desain kontemporer yang dapat dikenakan perempuan di seluruh dunia.',
  introUnique:
    'Karena setiap batu permata terbentuk secara alami, setiap Signature Strand sepenuhnya unik dalam warna, inklusi, dan karakternya.',
  closing:
    'Ini lebih dari sekadar aksesori. Ini adalah ekspresi personal dari salah satu House Codes khas Bint Saeed.',
  carnelianOrigin:
    'Carnelian yang digunakan untuk Al Ain Rosettes berasal dari India dan diukir dengan cermat menjadi salah satu House Codes khas Bint Saeed.',
  detailRosettes: 'Carnelian Al Ain Rosettes ukir tangan (sekitar 15 mm)',
  materialRosettes: 'Carnelian Al Ain Rosettes ukir tangan',
  stoneOriginSuffix:
    'Setiap batu permata alami menampilkan warna, inklusi, dan tanda alaminya sendiri, menjadikan setiap Signature Strand benar-benar satu-satunya.',
  pairOfDetachable: (headline) => `Sepasang ${headline} lepas-pasang`,
}, {
  'signature-strand-lapis-lazuli': {
    headline: 'Lapis Lazuli Al Ain Rosette Signature Strands',
    introP1:
      'Lapis Lazuli Al Ain Rosette Signature Strands memadukan batu permata alami, inspirasi Emirat, dan desain kontemporer dalam salah satu House Codes khas Bint Saeed. Dirakit tangan di Abu Dhabi dari Lapis Lazuli alami dan Carnelian Al Ain Rosettes ukir tangan, koleksi ini menawarkan cara elegan untuk mentransformasi busana pilihan Bint Saeed melalui satu detail yang penuh pertimbangan.',
    introStone:
      'Dikagumi selama ribuan tahun, Lapis Lazuli dikenal lewat rona biru kerajaan yang kaya serta inklusi pirit keemasan alaminya, membuat setiap strand tampak indah dan unik. Di antara tiap batu, aksen Hematite bersegi berlapis emas menangkap dan memantulkan cahaya di setiap gerakan, menghadirkan kilau halus di seluruh komposisi.',
    introRosetteBalance:
      'Bersama biru pekat Lapis Lazuli, tercipta keseimbangan menawan antara warna, keahlian, dan inspirasi budaya.',
    stoneOriginLead:
      'Lapis Lazuli telah dihargai selama berabad-abad karena warna birunya yang intens dan terutama bersumber dari Afghanistan.',
    stoneBeadDetail: 'Manik batu permata Lapis Lazuli alami (sekitar 5 mm)',
    materialStone: 'Batu permata Lapis Lazuli alami',
    strandLabel: 'Lapis Lazuli Al Ain Rosette Signature Strands',
    stoneLabel: 'Lapis Lazuli',
    variationNote:
      'Variasi alami pada nuansa biru, inklusi pirit, dan tanda alami adalah bagian dari yang membuat setiap Signature Strand unik.',
  },
  'signature-strand-sunstone': {
    headline: 'Sunstone Al Ain Rosette Signature Strands',
    introP1:
      'Sunstone Al Ain Rosette Signature Strands memadukan batu permata alami, inspirasi Emirat, dan desain kontemporer dalam salah satu House Codes khas Bint Saeed. Dirakit tangan di Abu Dhabi dari Sunstone alami dan Carnelian Al Ain Rosettes ukir tangan, koleksi ini menawarkan cara elegan untuk mentransformasi busana pilihan Bint Saeed melalui satu detail yang penuh pertimbangan.',
    introStone:
      'Sunstone dikagumi karena pijar hangat warna persik-oranye dan efek aventurescence yang lembut, memberi setiap strand kilau halus dari dalam. Di antara tiap batu, aksen Hematite bersegi berlapis emas menangkap dan memantulkan cahaya di setiap gerakan, menghadirkan kilau halus di seluruh komposisi.',
    introRosetteBalance:
      'Bersama pancaran hangat Sunstone, tercipta keseimbangan menawan antara warna, keahlian, dan inspirasi budaya.',
    stoneOriginLead:
      'Sunstone bersumber dari wilayah termasuk India, Norwegia, dan Amerika Serikat, serta dihargai karena palet persik-oranyenya dan kilau internal yang lembut.',
    stoneBeadDetail: 'Manik batu permata Sunstone alami (sekitar 5 mm)',
    materialStone: 'Batu permata Sunstone alami',
    strandLabel: 'Sunstone Al Ain Rosette Signature Strands',
    stoneLabel: 'Sunstone',
    variationNote:
      'Variasi alami pada pijar, rona, dan inklusi adalah bagian dari yang membuat setiap Signature Strand unik.',
  },
  'signature-strand-rose-quartz': {
    headline: 'Rose Quartz Al Ain Rosette Signature Strands',
    introP1:
      'Rose Quartz Al Ain Rosette Signature Strands memadukan batu permata alami, inspirasi Emirat, dan desain kontemporer dalam salah satu House Codes khas Bint Saeed. Dirakit tangan di Abu Dhabi dari Rose Quartz alami dan Carnelian Al Ain Rosettes ukir tangan, koleksi ini menawarkan cara elegan untuk mentransformasi busana pilihan Bint Saeed melalui satu detail yang penuh pertimbangan.',
    introStone:
      'Rose Quartz dikagumi karena rona merah muda lembut dan karakter romantis bercahayanya, menghadirkan kehangatan anggun pada setiap strand. Di antara tiap batu, aksen Hematite bersegi berlapis emas menangkap dan memantulkan cahaya di setiap gerakan, menghadirkan kilau halus di seluruh komposisi.',
    introRosetteBalance:
      'Bersama nuansa merah muda Rose Quartz, tercipta keseimbangan menawan antara warna, keahlian, dan inspirasi budaya.',
    stoneOriginLead:
      'Rose Quartz bersumber dari wilayah termasuk Brasil, Madagaskar, dan Afrika Selatan, serta dihargai karena rona merah mudanya yang lembut dan translusensi alaminya.',
    stoneBeadDetail: 'Manik batu permata Rose Quartz alami (sekitar 5 mm)',
    materialStone: 'Batu permata Rose Quartz alami',
    strandLabel: 'Rose Quartz Al Ain Rosette Signature Strands',
    stoneLabel: 'Rose Quartz',
    variationNote:
      'Variasi alami pada rona merah muda, kejernihan, dan tanda alami adalah bagian dari yang membuat setiap Signature Strand unik.',
  },
  'signature-strand-malachite': {
    headline: 'Malachite Al Ain Rosette Signature Strands',
    introP1:
      'Malachite Al Ain Rosette Signature Strands memadukan batu permata alami, inspirasi Emirat, dan desain kontemporer dalam salah satu House Codes khas Bint Saeed. Dirakit tangan di Abu Dhabi dari Malachite alami dan Carnelian Al Ain Rosettes ukir tangan, koleksi ini menawarkan cara elegan untuk mentransformasi busana pilihan Bint Saeed melalui satu detail yang penuh pertimbangan.',
    introStone:
      'Malachite dikagumi karena rona hijau pekat dan pola pita alaminya yang khas, memberi setiap strand kehadiran yang berani namun tetap elegan. Di antara tiap batu, aksen Hematite bersegi berlapis emas menangkap dan memantulkan cahaya di setiap gerakan, menghadirkan kilau halus di seluruh komposisi.',
    introRosetteBalance:
      'Bersama hijau kaya Malachite, tercipta keseimbangan menawan antara warna, keahlian, dan inspirasi budaya.',
    stoneOriginLead:
      'Malachite bersumber dari wilayah termasuk Republik Demokratik Kongo, Zambia, dan Australia, serta dihargai karena warna hijau jenuh dan pola pita alaminya.',
    stoneBeadDetail: 'Manik batu permata Malachite alami (sekitar 5 mm)',
    materialStone: 'Batu permata Malachite alami',
    strandLabel: 'Malachite Al Ain Rosette Signature Strands',
    stoneLabel: 'Malachite',
    variationNote:
      'Variasi alami pada rona hijau, pola pita, dan tanda alami adalah bagian dari yang membuat setiap Signature Strand unik.',
  },
})

const MS_PACK = buildLocalePack('ms', {
  introP2:
    'Direka untuk memperibadikan rekaan Bint Saeed yang serasi, termasuk Marylebone Abaya dan ciptaan serasi pada masa hadapan, strands boleh tanggal ini membolehkan satu helaian busana berkembang dengan mudah. Dipadankan dengan beg tangan, kasut atau barang kemas anda, ia memberi ekspresi baharu tanpa mengubah busana asal.',
  introRosette:
    'Carnelian Al Ain Rosette ukiran tangan ialah salah satu House Codes ikonik Bint Saeed. Diilhamkan oleh rona pasir hangat dan landskap semula jadi di sekitar bandar oasis Al Ain di UAE, elemen ini mentafsir semula bentuk semula jadi yang ringkas kepada perincian reka bentuk kontemporari untuk wanita di seluruh dunia.',
  introUnique:
    'Oleh sebab setiap batu permata terbentuk secara semula jadi, setiap Signature Strand benar-benar unik dari segi warna, inklusi dan karakternya.',
  closing:
    'Ini lebih daripada aksesori. Ini adalah ekspresi peribadi salah satu House Codes ikonik Bint Saeed.',
  carnelianOrigin:
    'Carnelian yang digunakan untuk Al Ain Rosettes diperoleh dari India dan diukir dengan teliti menjadi salah satu House Codes ikonik Bint Saeed.',
  detailRosettes: 'Carnelian Al Ain Rosettes ukiran tangan (kira-kira 15 mm)',
  materialRosettes: 'Carnelian Al Ain Rosettes ukiran tangan',
  stoneOriginSuffix:
    'Setiap batu permata semula jadi menampilkan warna, inklusi dan tanda semula jadinya sendiri, menjadikan setiap Signature Strand benar-benar istimewa.',
  pairOfDetachable: (headline) => `Sepasang ${headline} boleh tanggal`,
}, {
  'signature-strand-lapis-lazuli': {
    headline: 'Lapis Lazuli Al Ain Rosette Signature Strands',
    introP1:
      'Lapis Lazuli Al Ain Rosette Signature Strands menggabungkan batu permata semula jadi, inspirasi Emirati dan reka bentuk kontemporari dalam salah satu House Codes ikonik Bint Saeed. Dipasang tangan di Abu Dhabi daripada Lapis Lazuli semula jadi dan Carnelian Al Ain Rosettes ukiran tangan, ia menawarkan cara elegan untuk mengubah busana terpilih Bint Saeed melalui satu perincian bermakna.',
    introStone:
      'Lapis Lazuli telah dikagumi selama ribuan tahun kerana tona biru diraja yang kaya serta inklusi pirit keemasan semula jadi, menjadikan setiap strand sangat unik. Di antara setiap batu, aksen Hematite bersisi berlapis emas menangkap dan memantulkan cahaya pada setiap gerakan, menambah kilauan halus pada keseluruhan komposisi.',
    introRosetteBalance:
      'Digandingkan dengan biru mendalam Lapis Lazuli, ia mewujudkan keseimbangan menawan antara warna, ketukangan dan inspirasi budaya.',
    stoneOriginLead:
      'Lapis Lazuli telah dihargai selama berabad-abad kerana warna birunya yang pekat dan kebanyakannya diperoleh dari Afghanistan.',
    stoneBeadDetail: 'Manik batu permata Lapis Lazuli semula jadi (kira-kira 5 mm)',
    materialStone: 'Batu permata Lapis Lazuli semula jadi',
    strandLabel: 'Lapis Lazuli Al Ain Rosette Signature Strands',
    stoneLabel: 'Lapis Lazuli',
    variationNote:
      'Variasi semula jadi pada tona biru, inklusi pirit dan tanda semula jadi ialah sebahagian daripada keunikan setiap Signature Strand.',
  },
  'signature-strand-sunstone': {
    headline: 'Sunstone Al Ain Rosette Signature Strands',
    introP1:
      'Sunstone Al Ain Rosette Signature Strands menggabungkan batu permata semula jadi, inspirasi Emirati dan reka bentuk kontemporari dalam salah satu House Codes ikonik Bint Saeed. Dipasang tangan di Abu Dhabi daripada Sunstone semula jadi dan Carnelian Al Ain Rosettes ukiran tangan, ia menawarkan cara elegan untuk mengubah busana terpilih Bint Saeed melalui satu perincian bermakna.',
    introStone:
      'Sunstone dihargai kerana sinar hangat rona pic-oren dan kesan aventurescence yang lembut, memberikan setiap strand kilauan halus dari dalam. Di antara setiap batu, aksen Hematite bersisi berlapis emas menangkap dan memantulkan cahaya pada setiap gerakan, menambah kilauan halus pada keseluruhan komposisi.',
    introRosetteBalance:
      'Digandingkan dengan seri hangat Sunstone, ia mewujudkan keseimbangan menawan antara warna, ketukangan dan inspirasi budaya.',
    stoneOriginLead:
      'Sunstone diperoleh dari wilayah termasuk India, Norway dan Amerika Syarikat, serta dihargai kerana palet pic-oren dan kilauan dalaman yang lembut.',
    stoneBeadDetail: 'Manik batu permata Sunstone semula jadi (kira-kira 5 mm)',
    materialStone: 'Batu permata Sunstone semula jadi',
    strandLabel: 'Sunstone Al Ain Rosette Signature Strands',
    stoneLabel: 'Sunstone',
    variationNote:
      'Variasi semula jadi pada kilau, tona dan inklusi ialah sebahagian daripada keunikan setiap Signature Strand.',
  },
  'signature-strand-rose-quartz': {
    headline: 'Rose Quartz Al Ain Rosette Signature Strands',
    introP1:
      'Rose Quartz Al Ain Rosette Signature Strands menggabungkan batu permata semula jadi, inspirasi Emirati dan reka bentuk kontemporari dalam salah satu House Codes ikonik Bint Saeed. Dipasang tangan di Abu Dhabi daripada Rose Quartz semula jadi dan Carnelian Al Ain Rosettes ukiran tangan, ia menawarkan cara elegan untuk mengubah busana terpilih Bint Saeed melalui satu perincian bermakna.',
    introStone:
      'Rose Quartz dikagumi kerana tona merah jambu lembut dan karakter romantik bercahayanya, membawa kehangatan anggun pada setiap strand. Di antara setiap batu, aksen Hematite bersisi berlapis emas menangkap dan memantulkan cahaya pada setiap gerakan, menambah kilauan halus pada keseluruhan komposisi.',
    introRosetteBalance:
      'Digandingkan dengan rona merah jambu Rose Quartz, ia mewujudkan keseimbangan menawan antara warna, ketukangan dan inspirasi budaya.',
    stoneOriginLead:
      'Rose Quartz diperoleh dari wilayah termasuk Brazil, Madagascar dan Afrika Selatan, serta dihargai kerana rona merah jambu lembut dan sifat lut sinar semula jadinya.',
    stoneBeadDetail: 'Manik batu permata Rose Quartz semula jadi (kira-kira 5 mm)',
    materialStone: 'Batu permata Rose Quartz semula jadi',
    strandLabel: 'Rose Quartz Al Ain Rosette Signature Strands',
    stoneLabel: 'Rose Quartz',
    variationNote:
      'Variasi semula jadi pada tona merah jambu, kejernihan dan tanda semula jadi ialah sebahagian daripada keunikan setiap Signature Strand.',
  },
  'signature-strand-malachite': {
    headline: 'Malachite Al Ain Rosette Signature Strands',
    introP1:
      'Malachite Al Ain Rosette Signature Strands menggabungkan batu permata semula jadi, inspirasi Emirati dan reka bentuk kontemporari dalam salah satu House Codes ikonik Bint Saeed. Dipasang tangan di Abu Dhabi daripada Malachite semula jadi dan Carnelian Al Ain Rosettes ukiran tangan, ia menawarkan cara elegan untuk mengubah busana terpilih Bint Saeed melalui satu perincian bermakna.',
    introStone:
      'Malachite dihargai kerana tona hijau pekat dan jalur semula jadi yang tersendiri, memberikan setiap strand kehadiran berani namun sofistikated. Di antara setiap batu, aksen Hematite bersisi berlapis emas menangkap dan memantulkan cahaya pada setiap gerakan, menambah kilauan halus pada keseluruhan komposisi.',
    introRosetteBalance:
      'Digandingkan dengan hijau kaya Malachite, ia mewujudkan keseimbangan menawan antara warna, ketukangan dan inspirasi budaya.',
    stoneOriginLead:
      'Malachite diperoleh dari wilayah termasuk Republik Demokratik Congo, Zambia dan Australia, serta dihargai kerana warna hijau tepu dan corak jalur semula jadinya.',
    stoneBeadDetail: 'Manik batu permata Malachite semula jadi (kira-kira 5 mm)',
    materialStone: 'Batu permata Malachite semula jadi',
    strandLabel: 'Malachite Al Ain Rosette Signature Strands',
    stoneLabel: 'Malachite',
    variationNote:
      'Variasi semula jadi pada tona hijau, jalur dan tanda semula jadi ialah sebahagian daripada keunikan setiap Signature Strand.',
  },
})

const LOCALE_PACKS: Record<AppLocale, Record<AlAinRosetteStrandId, StrandPdpContent>> = {
  en: AL_AIN_ROSETTE_STRAND_PDP_EN,
  ar: AR_PACK,
  fr: FR_PACK,
  it: IT_PACK,
  es: ES_PACK,
  ru: RU_PACK,
  zh: ZH_PACK,
  de: DE_PACK,
  nl: NL_PACK,
  pt: PT_PACK,
  id: ID_PACK,
  ms: MS_PACK,
}

export function getAlAinRosetteStrandPdp(
  id: AlAinRosetteStrandId,
  locale: AppLocale,
): StrandPdpContent {
  return LOCALE_PACKS[locale][id]
}
