import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductPdpContent } from '@/data/productPdpContent'
import { PARK_LANE_ABAYA_FAQ_EN } from '@/data/parkLaneAbayaPdpFaq'
import type { PdpDetailGroup, PdpIntroParagraph } from '@/lib/products/pdpIntroRich'
import { THE_CODES_KNOTTED_LINES_HREF, pdpIntroParagraphsToPlainText } from '@/lib/products/pdpIntroRich'
import type { ProductFaqItem } from '@/lib/products/productSchemaMeta'
import { getHouseCodesDetailGroup } from '@/lib/products/pdpHouseCodesGroupsI18n'
import { PDP_COLOUR_TITLE, PDP_SILHOUETTE_TITLE } from '@/lib/products/pdpFeatureSectionTitles'

export const PARK_LANE_ABAYA_SLUG = 'park-lane-abaya'

export const PARK_LANE_ABAYA_INTRO_EN = [
  'The abaya that speaks before you do.',
  'Some garments rely on embellishment to be noticed. The Park Lane Abaya proves that exceptional tailoring is enough.',
  'Designed with a graceful A-line silhouette, this contemporary designer abaya creates effortless movement while maintaining a beautifully balanced shape. Crafted from a softly textured crepe with a refined grain, it drapes naturally from the shoulders, allowing every step to feel poised, confident and elegant.',
  'Inspired by the precision of contemporary tailoring, the shoulders are finished with Bint Saeed’s signature gold-tone Knotted Line buttons. More than a design detail, they create subtle structure through the upper silhouette, encouraging a confident posture from the moment the abaya is worn.',
  'Flowing from the left shoulder is an integrated scarf that moves naturally with the wearer, adding softness and graceful movement without interrupting the clean architectural lines of the silhouette. Finished with Bint Saeed signature gold-tone Monogram cufflinks, the wide cuffs introduce a discreet touch of distinction while remaining elegantly understated.',
  'Available in Deep Black, Dark Maroon and Navy Blue, every detail of the Park Lane Abaya has been thoughtfully considered. This modern abaya is defined by its refined silhouette, integrated shoulder scarf and subtle gold-tone accents, creating a harmonious balance between movement and structure. Hidden side seam pockets provide everyday practicality, while the clean tailoring allows the woman wearing it to remain the focal point. Rather than relying on embellishment, the Park Lane Abaya celebrates proportion, craftsmanship and timeless elegance, making it an abaya that remains relevant season after season.',
  'The Park Lane Abaya belongs as naturally in London’s business districts and Parisian cafés as it does in Abu Dhabi, Riyadh and Doha. Created for women who move effortlessly between cultures and occasions, it can be worn as a refined contemporary layer or embraced as a timeless abaya, adapting beautifully to every setting.',
] as const

const A_LINE_SILHOUETTE: Record<AppLocale, string> = {
  en: 'Elegant A-line abaya',
  ar: 'عباية A-line أنيقة',
  fr: 'abaya A-line gracieuse',
  it: 'abaya A-line aggraziata',
  es: 'abaya A-line elegante',
  ru: 'изящная абайя A-line',
  zh: '优雅A字长袍',
  de: 'anmutige A-Linien-Abaya',
  nl: 'sierlijke A-line abaya',
  pt: 'abaya A-line graciosa',
  id: 'abaya A-line elegan',
  ms: 'abaya A-line anggun',
}

type LocalePack = {
  introParagraphParts: PdpIntroParagraph[]
  silhouetteItems: readonly string[]
  colourItems: readonly string[]
  compositionDetails: readonly string[]
  careDetails: readonly string[]
  fitAndSizeDetails: readonly string[]
  originDetails: readonly string[]
  faq: ProductFaqItem[]
}

function knottedLineParagraph(before: string, after: string): PdpIntroParagraph {
  return [
    { type: 'text', value: before },
    {
      type: 'codeLink',
      label: 'Knotted Line',
      href: THE_CODES_KNOTTED_LINES_HREF,
      bold: true,
    },
    { type: 'text', value: after },
  ]
}

function buildEnIntro(): PdpIntroParagraph[] {
  return [
    [{ type: 'text', value: PARK_LANE_ABAYA_INTRO_EN[0] }],
    [{ type: 'text', value: PARK_LANE_ABAYA_INTRO_EN[1] }],
    [{ type: 'text', value: PARK_LANE_ABAYA_INTRO_EN[2] }],
    knottedLineParagraph(
      'Inspired by the precision of contemporary tailoring, the shoulders are finished with Bint Saeed’s signature gold-tone ',
      ' buttons. More than a design detail, they create subtle structure through the upper silhouette, encouraging a confident posture from the moment the abaya is worn.',
    ),
    [{ type: 'text', value: PARK_LANE_ABAYA_INTRO_EN[4] }],
    [{ type: 'text', value: PARK_LANE_ABAYA_INTRO_EN[5] }],
    [{ type: 'text', value: PARK_LANE_ABAYA_INTRO_EN[6] }],
  ]
}

const LOCALE_PACKS: Record<AppLocale, LocalePack> = {
  en: {
    introParagraphParts: buildEnIntro(),
    silhouetteItems: [
      A_LINE_SILHOUETTE.en,
      'Tailored construction for an elegant drape',
      'Integrated shoulder scarf designed to flow naturally with movement',
      'Hidden side seam pockets',
      'Wide cuffs with removable Bint Saeed signature gold-tone Monogram cufflinks',
      'Optional snap button closure',
      'Optional hidden inner label personalisation',
    ],
    colourItems: ['Deep Black', 'Dark Maroon', 'Navy Blue'],
    compositionDetails: ['Outer: 75% Polyester, 25% Viscose'],
    careDetails: [
      'Remove the signature cufflinks before washing.',
      'Gentle machine wash at 30°C.',
    ],
    fitAndSizeDetails: [
      A_LINE_SILHOUETTE.en,
      'Designed to be worn open or closed',
      'Model height: 155 cm / 5\'1"',
      'Model wears size XS',
      'Custom length available upon request',
    ],
    originDetails: ['Made in Abu Dhabi, United Arab Emirates'],
    faq: PARK_LANE_ABAYA_FAQ_EN,
  },
  ar: {
    introParagraphParts: [
      [{ type: 'text', value: 'العباءة التي تتحدث قبل أن تتحدثي أنت.' }],
      [
        {
          type: 'text',
          value:
            'بعض القطع تعتمد على الزخرفة لتُلاحَظ. عباءة Park Lane تثبت أن التفصيل الاستثنائي وحده يكفي.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'صُممت بسيلويت A-line أنيق، تخلق هذه العباءة المصممة المعاصرة حركة بلا جهد مع الحفاظ على شكل متوازن بجمال. مصنوعة من كريب ناعم الملمس بحبيبة راقية، تتدلّى طبيعياً من الكتفين، لتشعرك كل خطوة بالثقة والأناقة والرصانة.',
        },
      ],
      knottedLineParagraph(
        'مستوحاة من دقة التفصيل المعاصر، تُنهى الكتفان بأزرار ',
        ' الذهبية المميزة من Bint Saeed. أكثر من تفصيلة تصميمية، تخلق بنية خفيفة عبر الجزء العلوي من السيلويت، وتشجع وقفة واثقة منذ لحظة ارتداء العباءة.',
      ),
      [
        {
          type: 'text',
          value:
            'يتدفق من الكتف الأيسر وشاح مدمج يتحرك طبيعياً مع المرأة التي ترتديه، مضيفاً نعومة وحركة رشيقة دون مقاطعة الخطوط المعمارية النظيفة للسيلويت. منتهية بأزرار أكمام شعار Bint Saeed الذهبية المميزة، تقدّم الأكمام الواسعة لمسة تميّز رقيقة مع بقائها أنيقة بلا مبالغة.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'متوافرة بالأسود العميق، والعنابي الداكن، والأزرق البحري — كل تفصيلة في عباءة Park Lane وُضعت بعناية. تُعرّف هذه العباءة العصرية بسيلويتها المكرّر، ووشاح الكتف المدمج، واللمسات الذهبية الرقيقة، مما يخلق توازناً متناغماً بين الحركة والبنية. توفر جيوب اللحام الجانبية المخفية عملية يومية، بينما يسمح التفصيل النظيف للمرأة التي ترتديها أن تبقى محور الاهتمام. بدلاً من الاعتماد على الزخرفة، تحتفي عباءة Park Lane بالتناسب والحرفية والأناقة الخالدة — عباءة تبقى ذات صلة موسماً بعد موسم.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'تنتمي عباءة Park Lane بشكل طبيعي إلى أحياء الأعمال في لندن والمقاهي الباريسية كما تنتمي إلى أبوظبي والرياض والدوحة. صُنعت لنساء يتحركن بسهولة بين الثقافات والمناسبات، يمكن ارتداؤها كطبقة معاصرة راقية أو كعباءة خالدة، تتكيف بجمال مع كل إعداد.',
        },
      ],
    ],
    silhouetteItems: [
      A_LINE_SILHOUETTE.ar,
      'تفصيل مُحكم لتدلٍّ أنيق',
      'وشاح كتف مدمج يتدفق طبيعياً مع الحركة',
      'جيوب جانبية مخفية في اللحامات',
      'أكمام واسعة مع أزرار أكمام شعار Bint Saeed الذهبية القابلة للإزالة',
      'إغلاق اختياري بأزرار سناب',
      'تخصيص اختياري ببطاقة داخلية مخفية',
    ],
    colourItems: ['أسود عميق', 'عنابي داكن', 'أزرق بحري'],
    compositionDetails: ['الخارجي: 75% بوليستر، 25% فيسكوز'],
    careDetails: [
      'أزيلي أزرار الأكمام المميزة قبل الغسيل.',
      'غسل آلي لطيف عند 30°م.',
    ],
    fitAndSizeDetails: [
      A_LINE_SILHOUETTE.ar,
      'صُممت لارتداء مفتوحة أو مغلقة',
      'طول العارضة: 155 سم',
      'العارضة ترتدي مقاس XS',
      'طول مخصص متاح عند الطلب',
    ],
    originDetails: ['صُنعت في أبوظبي، الإمارات العربية المتحدة'],
    faq: [
      {
        question: 'ما الذي يميز عباءة Park Lane عن العباءات الأخرى؟',
        answer:
          'صُممت عباءة Park Lane لتبرز عن التوقعات التقليدية للعباءة. بدلاً من الاعتماد على الزخرفة، تحقق أناقتها عبر تفصيل استثنائي، وسيلويت A-line أنيق، ووشاح كتف مدمج يخلق حركة جميلة مع كل خطوة. تقدّم الكتفان المهيكلتان، وأزرار Knotted Line الذهبية المميزة، وأزرار أكمام شعار Bint Saeed سيلويتاً يبدو مناسباً كطبقة خارجية معاصرة أو كعباءة خالدة.',
      },
      {
        question: 'أين يمكنني ارتداء عباءة Park Lane؟',
        answer:
          'صُنعت عباءة Park Lane لنساء تتحركن بسهولة بين الثقافات والمناسبات والوجهات. سواء في اجتماع عمل، أو استقبال سفارة، أو عشاء رسمي، أو زفاف، أو مناسبة ثقافية — تتكيف بجمال مع كل إعداد. تنتمي بشكل طبيعي إلى أحياء الأعمال في لندن والمقاهي الباريسية كما في أبوظبي والرياض والدوحة.',
      },
      {
        question: 'هل عباءة Park Lane مناسبة للدبلوماسيين والتنفيذيين والمناسبات الرسمية؟',
        answer:
          'بالتأكيد. صُنعت لنساء يمثلن أنفسهن بثقة وأناقة في بيئات مهنية ودولية. تفصيلها الرصين، وحركتها الرشيقة، وتفاصيلها المكرّرة تجعلها مناسبة بشكل خاص للاستقبالات الدبلوماسية والفعاليات الرسمية والاجتماعات القيادية والمناسبات التي يهم فيها الظهور باحترام وتميّز.',
      },
      {
        question: 'هل يمكنني تخصيص عباءة Park Lane؟',
        answer:
          'نعم. مثل كل عباءة من Bint Saeed، يمكن تخصيص عباءة Park Lane ببطاقة داخلية مخفية مميزة للدار. أضيفي اسماً أو تاريخاً أو رسالة ذات معنى لتفصيلة رقيقة تبقى قريبة منك في كل مرة ترتدينها.',
      },
      {
        question: 'هل يمكنني ارتداء عباءة Park Lane مغلقة؟',
        answer:
          'نعم. يمكن طلب عباءة Park Lane بإغلاق اختياري بأزرار سناب غير ملحوظة، لتُرتدى مفتوحة أو مغلقة حسب تفضيلك والمناسبة.',
      },
      {
        question: 'كيف أعتني بعباءة Park Lane؟',
        answer:
          'للحفاظ على التدلّي الأنيق واللمسة النهائية الراقية، اغسليها بلطف في الغسالة عند 30°م. قبل الغسيل أو التنظيف الجاف الاحترافي، أزيلي دائماً أزرار أكمام شعار Bint Saeed الذهبية المميزة لحماية القطعة والأزرار.',
      },
    ],
  },
  fr: {
    introParagraphParts: [
      [{ type: 'text', value: 'L’abaya qui parle avant vous.' }],
      [
        {
          type: 'text',
          value:
            'Certaines pièces comptent sur l’embellissement pour être remarquées. L’Abaya Park Lane prouve qu’un tailoring exceptionnel suffit.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'Conçue avec une silhouette A-line gracieuse, cette abaya de créateur contemporaine crée un mouvement sans effort tout en conservant une forme magnifiquement équilibrée. Confectionnée dans un crêpe doucement texturé au grain raffiné, elle tombe naturellement des épaules, pour que chaque pas se sente posé, confiant et élégant.',
        },
      ],
      knottedLineParagraph(
        'Inspirée par la précision du tailoring contemporain, les épaules sont finies avec les boutons dorés signature ',
        ' de Bint Saeed. Plus qu’un détail de design, ils créent une structure subtile dans le haut de la silhouette, encourageant une posture confiante dès le moment où l’abaya est portée.',
      ),
      [
        {
          type: 'text',
          value:
            'Descendant de l’épaule gauche, une écharpe intégrée se meut naturellement avec la femme qui la porte, ajoutant douceur et mouvement gracieux sans interrompre les lignes architecturales épurées de la silhouette. Finies avec les boutons de manchette emblème dorés signature Bint Saeed, les larges poignets introduisent une touche de distinction discrète tout en restant élégamment sobres.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'Disponible en Noir profond, Bordeaux foncé et Bleu marine, chaque détail de l’Abaya Park Lane a été soigneusement considéré. Cette abaya moderne se définit par sa silhouette raffinée, son écharpe d’épaule intégrée et ses accents dorés subtils, créant un équilibre harmonieux entre mouvement et structure. Des poches latérales dissimulées dans les coutures offrent une praticité quotidienne, tandis que le tailoring épuré permet à la femme qui la porte de rester au centre de l’attention. Plutôt que de compter sur l’embellissement, l’Abaya Park Lane célèbre la proportion, l’artisanat et l’élégance intemporelle.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'L’Abaya Park Lane appartient aussi naturellement aux quartiers d’affaires de Londres et aux cafés parisiens qu’à Abou Dabi, Riyad et Doha. Créée pour les femmes qui passent sans effort d’une culture à l’autre, elle peut être portée comme couche contemporaine raffinée ou comme abaya intemporelle.',
        },
      ],
    ],
    silhouetteItems: [
      A_LINE_SILHOUETTE.fr,
      'Construction sur mesure pour un tombé élégant',
      'Écharpe d’épaule intégrée conçue pour accompagner le mouvement',
      'Poches latérales dissimulées dans les coutures',
      'Larges poignets avec boutons de manchette emblème dorés Bint Saeed amovibles',
      'Fermeture optionnelle par boutons-pression',
      'Personnalisation optionnelle par étiquette intérieure cachée',
    ],
    colourItems: ['Noir profond', 'Bordeaux foncé', 'Bleu marine'],
    compositionDetails: ['Extérieur : 75 % polyester, 25 % viscose'],
    careDetails: [
      'Retirez les boutons de manchette signature avant le lavage.',
      'Lavage en machine délicat à 30 °C.',
    ],
    fitAndSizeDetails: [
      A_LINE_SILHOUETTE.fr,
      'Conçue pour être portée ouverte ou fermée',
      'Taille mannequin : 155 cm',
      'La mannequin porte la taille XS',
      'Longueur sur mesure disponible sur demande',
    ],
    originDetails: ['Fabriquée à Abou Dabi, Émirats arabes unis'],
    faq: [
      {
        question: 'Qu’est-ce qui distingue l’Abaya Park Lane des autres abayas ?',
        answer:
          'L’Abaya Park Lane a été conçue pour se démarquer des attentes traditionnelles. Plutôt que de compter sur l’embellissement, elle atteint son élégance par un tailoring exceptionnel, une silhouette A-line gracieuse et une écharpe d’épaule intégrée. Les épaules structurées, les boutons Knotted Line dorés et les boutons de manchette emblème Bint Saeed créent une silhouette aussi à l’aise en couche contemporaine qu’en abaya intemporelle.',
      },
      {
        question: 'Où puis-je porter l’Abaya Park Lane ?',
        answer:
          'Créée pour les femmes dont la vie passe sans effort entre cultures, occasions et destinations — réunion d’affaires, réception d’ambassade, dîner formel, mariage ou événement culturel. Elle appartient aussi naturellement aux quartiers d’affaires de Londres et aux cafés parisiens qu’à Abou Dabi, Riyad et Doha.',
      },
      {
        question: 'L’Abaya Park Lane convient-elle aux diplomates, dirigeantes et occasions officielles ?',
        answer:
          'Absolument. Créée pour les femmes qui se présentent avec confiance et élégance dans des contextes professionnels et internationaux. Son tailoring sobre, son mouvement gracieux et ses détails raffinés la rendent particulièrement adaptée aux réceptions diplomatiques, événements officiels et engagements culturels.',
      },
      {
        question: 'Puis-je personnaliser l’Abaya Park Lane ?',
        answer:
          'Oui. Comme chaque abaya Bint Saeed, l’Abaya Park Lane peut être personnalisée avec l’étiquette intérieure cachée signature de la maison — un nom, une date ou un message personnel.',
      },
      {
        question: 'Puis-je porter l’Abaya Park Lane fermée ?',
        answer:
          'Oui. L’Abaya Park Lane peut être commandée avec des fermetures à boutons-pression discrètes en option, pour la porter ouverte ou fermée selon votre préférence.',
      },
      {
        question: 'Comment entretenir l’Abaya Park Lane ?',
        answer:
          'Pour préserver le tombé élégant et la finition raffinée, lavage en machine délicat à 30 °C. Retirez toujours les boutons de manchette emblème dorés Bint Saeed avant le lavage ou le nettoyage à sec.',
      },
    ],
  },
  it: {
    introParagraphParts: [
      [{ type: 'text', value: 'L’abaya che parla prima di te.' }],
      [
        {
          type: 'text',
          value:
            'Alcuni capi contano sull’abbellimento per essere notati. La Park Lane Abaya dimostra che un tailoring eccezionale è sufficiente.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'Progettata con una silhouette A-line aggraziata, questa abaya designer contemporanea crea movimento senza sforzo mantenendo una forma magnificamente equilibrata. Realizzata in crepe dalla texture morbida e grana raffinata, cade naturalmente dalle spalle, rendendo ogni passo composto, sicuro ed elegante.',
        },
      ],
      knottedLineParagraph(
        'Ispirata alla precisione del tailoring contemporaneo, le spalle sono rifinite con i bottoni dorati signature ',
        ' di Bint Saeed. Più di un dettaglio di design, creano una struttura sottile nella parte superiore della silhouette, incoraggiando una postura sicura dal momento in cui l’abaya viene indossata.',
      ),
      [
        {
          type: 'text',
          value:
            'Scorrendo dalla spalla sinistra, una sciarpa integrata si muove naturalmente con chi la indossa, aggiungendo morbidezza e movimento aggraziato senza interrompere le linee architettoniche pulite della silhouette. Finiti con i gemelli Monogram dorati signature Bint Saeed, i polsini ampi introducono un tocco di distinzione discreto restando elegantemente sobri.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'Disponibile in Nero profondo, Bordeaux scuro e Blu navy, ogni dettaglio della Park Lane Abaya è stato considerato con cura. Questa abaya moderna è definita dalla silhouette raffinata, dalla sciarpa spalla integrata e dagli accenti dorati sottili, creando un equilibrio armonioso tra movimento e struttura. Tasche laterali nascoste nelle cuciture per praticità quotidiana, mentre il tailoring pulito lascia la donna che la indossa al centro dell’attenzione.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'La Park Lane Abaya appartiene naturalmente ai quartieri degli affari di Londra e ai caffè parigini come ad Abu Dhabi, Riyadh e Doha. Creata per donne che si muovono senza sforzo tra culture e occasioni, può essere indossata come strato contemporaneo raffinato o come abaya senza tempo.',
        },
      ],
    ],
    silhouetteItems: [
      A_LINE_SILHOUETTE.it,
      'Costruzione sartoriale per un drappeggio elegante',
      'Sciarpa spalla integrata progettata per fluire con il movimento',
      'Tasche laterali nascoste nelle cuciture',
      'Polsini ampi con gemelli Monogram dorati Bint Saeed rimovibili',
      'Chiusura opzionale a bottoni a pressione',
      'Personalizzazione opzionale con etichetta interna nascosta',
    ],
    colourItems: ['Nero profondo', 'Bordeaux scuro', 'Blu navy'],
    compositionDetails: ['Esterno: 75% poliestere, 25% viscosa'],
    careDetails: [
      'Rimuovere i gemelli signature prima del lavaggio.',
      'Lavaggio in lavatrice delicato a 30 °C.',
    ],
    fitAndSizeDetails: [
      A_LINE_SILHOUETTE.it,
      'Progettata per essere indossata aperta o chiusa',
      'Altezza modella: 155 cm',
      'La modella indossa taglia XS',
      'Lunghezza su misura disponibile su richiesta',
    ],
    originDetails: ['Realizzata ad Abu Dhabi, Emirati Arabi Uniti'],
    faq: [
      {
        question: 'Cosa distingue la Park Lane Abaya dalle altre abaya?',
        answer:
          'La Park Lane Abaya è stata progettata per distinguersi dalle aspettative tradizionali. Piuttosto che contare sull’abbellimento, raggiunge l’eleganza attraverso tailoring eccezionale, silhouette A-line aggraziata e sciarpa spalla integrata. Spalle strutturate, bottoni Knotted Line dorati e gemelli Monogram Bint Saeed creano una silhouette adatta sia come strato designer contemporaneo sia come abaya senza tempo.',
      },
      {
        question: 'Dove posso indossare la Park Lane Abaya?',
        answer:
          'Creata per donne la cui vita si muove senza sforzo tra culture, occasioni e destinazioni — riunioni di lavoro, ricevimenti in ambasciata, cene formali, matrimoni ed eventi culturali. Appartiene naturalmente ai quartieri degli affari di Londra e ai caffè parigini come ad Abu Dhabi, Riyadh e Doha.',
      },
      {
        question: 'La Park Lane Abaya è adatta a diplomatici, dirigenti e occasioni ufficiali?',
        answer:
          'Assolutamente. Creata per donne che si presentano con fiducia ed eleganza in contesti professionali e internazionali. Il tailoring sobrio, il movimento aggraziato e i dettagli raffinati la rendono particolarmente adatta a ricevimenti diplomatici, eventi ufficiali e impegni culturali.',
      },
      {
        question: 'Posso personalizzare la Park Lane Abaya?',
        answer:
          'Sì. Come ogni abaya Bint Saeed, la Park Lane Abaya può essere personalizzata con l’etichetta interna nascosta signature della casa — un nome, una data o un messaggio personale.',
      },
      {
        question: 'Posso indossare la Park Lane Abaya chiusa?',
        answer:
          'Sì. La Park Lane Abaya può essere ordinata con chiusure a bottoni a pressione discrete opzionali, per indossarla aperta o chiusa secondo preferenza.',
      },
      {
        question: 'Come devo curare la Park Lane Abaya?',
        answer:
          'Per preservare il drappeggio elegante e la finitura raffinata, lavaggio in lavatrice delicato a 30 °C. Rimuovere sempre i gemelli Monogram dorati Bint Saeed prima del lavaggio o della lavanderia a secco.',
      },
    ],
  },
  es: {
    introParagraphParts: [
      [{ type: 'text', value: 'La abaya que habla antes que tú.' }],
      [
        {
          type: 'text',
          value:
            'Algunas prendas dependen del adorno para ser notadas. La Park Lane Abaya demuestra que una sastrería excepcional es suficiente.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'Diseñada con una silueta A-line elegante, esta abaya de diseñador contemporánea crea movimiento sin esfuerzo manteniendo una forma bellamente equilibrada. Confeccionada en un crepé de textura suave y grano refinado, cae naturalmente desde los hombros, haciendo que cada paso se sienta sereno, seguro y elegante.',
        },
      ],
      knottedLineParagraph(
        'Inspirada en la precisión de la sastrería contemporánea, los hombros están acabados con los botones dorados signature ',
        ' de Bint Saeed. Más que un detalle de diseño, crean estructura sutil en la parte superior de la silueta, fomentando una postura segura desde el momento en que se lleva la abaya.',
      ),
      [
        {
          type: 'text',
          value:
            'Fluyendo desde el hombro izquierdo, una bufanda integrada se mueve naturalmente con quien la lleva, añadiendo suavidad y movimiento gracioso sin interrumpir las líneas arquitectónicas limpias de la silueta. Acabados con gemelos Monogram dorados signature Bint Saeed, los amplios puños introducen un toque de distinción discreto permaneciendo elegantemente sobrios.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'Disponible en Negro profundo, Burdeos oscuro y Azul marino, cada detalle de la Park Lane Abaya ha sido cuidadosamente considerado. Esta abaya moderna se define por su silueta refinada, bufanda de hombro integrada y acentos dorados sutiles, creando un equilibrio armonioso entre movimiento y estructura. Bolsillos laterales ocultos en las costuras para practicidad diaria, mientras la sastrería limpia permite que la mujer que la lleva permanezca como foco.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'La Park Lane Abaya pertenece con la misma naturalidad a los distritos de negocios de Londres y a los cafés parisinos que a Abu Dhabi, Riad y Doha. Creada para mujeres que se mueven sin esfuerzo entre culturas y ocasiones, puede llevarse como capa contemporánea refinada o como abaya atemporal.',
        },
      ],
    ],
    silhouetteItems: [
      A_LINE_SILHOUETTE.es,
      'Construcción entallada para un drapeado elegante',
      'Bufanda de hombro integrada diseñada para fluir con el movimiento',
      'Bolsillos laterales ocultos en las costuras',
      'Puños amplios con gemelos Monogram dorados Bint Saeed extraíbles',
      'Cierre opcional con botones a presión',
      'Personalización opcional con etiqueta interior oculta',
    ],
    colourItems: ['Negro profundo', 'Burdeos oscuro', 'Azul marino'],
    compositionDetails: ['Exterior: 75% poliéster, 25% viscosa'],
    careDetails: [
      'Retire los gemelos signature antes del lavado.',
      'Lavado a máquina suave a 30 °C.',
    ],
    fitAndSizeDetails: [
      A_LINE_SILHOUETTE.es,
      'Diseñada para llevarse abierta o cerrada',
      'Altura de la modelo: 155 cm',
      'La modelo lleva talla XS',
      'Largo personalizado disponible bajo pedido',
    ],
    originDetails: ['Hecha en Abu Dhabi, Emiratos Árabes Unidos'],
    faq: [
      {
        question: '¿Qué distingue a la Park Lane Abaya de otras abayas?',
        answer:
          'La Park Lane Abaya fue diseñada para destacar de las expectativas tradicionales. En lugar de depender del adorno, logra su elegancia mediante sastrería excepcional, silueta A-line elegante y bufanda de hombro integrada. Hombros estructurados, botones Knotted Line dorados y gemelos Monogram Bint Saeed crean una silueta igualmente adecuada como capa de diseñador contemporánea o como abaya atemporal.',
      },
      {
        question: '¿Dónde puedo llevar la Park Lane Abaya?',
        answer:
          'Creada para mujeres cuya vida se mueve sin esfuerzo entre culturas, ocasiones y destinos — reuniones de negocios, recepciones en embajadas, cenas formales, bodas y eventos culturales. Pertenece con naturalidad a los distritos de negocios de Londres y cafés parisinos como a Abu Dhabi, Riad y Doha.',
      },
      {
        question: '¿Es la Park Lane Abaya adecuada para diplomáticos, ejecutivas y ocasiones oficiales?',
        answer:
          'Absolutamente. Creada para mujeres que se presentan con confianza y elegancia en entornos profesionales e internacionales. Su sastrería sobria, movimiento gracioso y detalles refinados la hacen especialmente adecuada para recepciones diplomáticas, eventos oficiales y compromisos culturales.',
      },
      {
        question: '¿Puedo personalizar la Park Lane Abaya?',
        answer:
          'Sí. Como cada abaya Bint Saeed, la Park Lane Abaya puede personalizarse con la etiqueta interior oculta signature de la casa — un nombre, una fecha o un mensaje personal.',
      },
      {
        question: '¿Puedo llevar la Park Lane Abaya cerrada?',
        answer:
          'Sí. La Park Lane Abaya puede pedirse con cierres de botones a presión discretos opcionales, para llevarla abierta o cerrada según preferencia.',
      },
      {
        question: '¿Cómo debo cuidar la Park Lane Abaya?',
        answer:
          'Para preservar el drapeado elegante y el acabado refinado, lavado a máquina suave a 30 °C. Retire siempre los gemelos Monogram dorados Bint Saeed antes del lavado o la limpieza en seco.',
      },
    ],
  },
  ru: {
    introParagraphParts: [
      [{ type: 'text', value: 'Абайя, которая говорит раньше вас.' }],
      [
        {
          type: 'text',
          value:
            'Некоторые вещи полагаются на украшения, чтобы быть замеченными. Park Lane Abaya доказывает, что исключительный крой — достаточно.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'С изящным силуэтом A-line эта современная дизайнерская абайя создаёт лёгкое движение, сохраняя прекрасно сбалансированную форму. Из мягкого крепа с утончённой фактурой она естественно ниспадает с плеч, делая каждый шаг уверенным и элегантным.',
        },
      ],
      knottedLineParagraph(
        'Вдохновлённая точностью современного кроя, плечи завершены фирменными золотистыми пуговицами ',
        ' от Bint Saeed. Это не просто деталь дизайна — они создают тонкую структуру верхней части силуэта, поощряя уверенную осанку с момента надевания.',
      ),
      [
        {
          type: 'text',
          value:
            'С левого плеча струится встроенный шарф, который естественно движется вместе с женщиной, добавляя мягкость и грациозное движение, не нарушая чистых архитектурных линий силуэта. Широкие манжеты с фирменными золотистыми запонками-эмблемой Bint Saeed вносят сдержанную ноту отличия.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'Доступна в глубоком чёрном, тёмном бордовом и тёмно-синем — каждая деталь Park Lane Abaya тщательно продумана. Эта современная абайя определяется утончённым силуэтом, встроенным плечевым шарфом и тонкими золотистыми акцентами. Скрытые боковые карманы в швах обеспечивают повседневную практичность, а чистый крой позволяет женщине оставаться в центре внимания.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'Park Lane Abaya одинаково естественно смотрится в деловых кварталах Лондона и парижских кафе, как в Абу-Даби, Эр-Рияде и Дохе. Создана для женщин, легко перемещающихся между культурами и случаями — как изысканный современный слой или как вневременная абайя.',
        },
      ],
    ],
    silhouetteItems: [
      A_LINE_SILHOUETTE.ru,
      'Точный крой для элегантного падения ткани',
      'Встроенный плечевой шарф, созданный для естественного движения',
      'Скрытые боковые карманы в швах',
      'Широкие манжеты со съёмными золотистыми запонками-эмблемой Bint Saeed',
      'Опциональная застёжка на кнопки',
      'Опциональная персонализация скрытой внутренней биркой',
    ],
    colourItems: ['Глубокий чёрный', 'Тёмный бордовый', 'Тёмно-синий'],
    compositionDetails: ['Верх: 75% полиэстер, 25% вискоза'],
    careDetails: [
      'Снимите фирменные запонки перед стиркой.',
      'Деликатная машинная стирка при 30 °C.',
    ],
    fitAndSizeDetails: [
      A_LINE_SILHOUETTE.ru,
      'Создана для ношения нараспашку или застёгнутой',
      'Рост модели: 155 см',
      'Модель носит размер XS',
      'Индивидуальная длина по запросу',
    ],
    originDetails: ['Сделано в Абу-Даби, ОАЭ'],
    faq: [
      {
        question: 'Чем Park Lane Abaya отличается от других абай?',
        answer:
          'Park Lane Abaya создана выходить за рамки традиционных ожиданий. Вместо украшений она достигает элегантности через исключительный крой, изящный силуэт A-line и встроенный плечевой шарф. Структурированные плечи, золотистые пуговицы Knotted Line и запонки-эмблема Bint Saeed создают силуэт, уместный как современный дизайнерский слой или как вневременная абайя.',
      },
      {
        question: 'Где можно носить Park Lane Abaya?',
        answer:
          'Создана для женщин, чья жизнь легко перемещается между культурами, случаями и направлениями — деловые встречи, приёмы в посольствах, формальные ужины, свадьбы и культурные мероприятия. Одинаково естественна в деловых кварталах Лондона и парижских кафе, как в Абу-Даби, Эр-Рияде и Дохе.',
      },
      {
        question: 'Подходит ли Park Lane Abaya для дипломатов, руководителей и официальных случаев?',
        answer:
          'Безусловно. Создана для женщин, представляющих себя с уверенностью и элегантностью в профессиональных и международных контекстах. Сдержанный крой, грациозное движение и утончённые детали особенно подходят для дипломатических приёмов и официальных мероприятий.',
      },
      {
        question: 'Можно ли персонализировать Park Lane Abaya?',
        answer:
          'Да. Как и каждая абайя Bint Saeed, Park Lane Abaya может быть персонализирована фирменной скрытой внутренней биркой — именем, датой или личным посланием.',
      },
      {
        question: 'Можно ли носить Park Lane Abaya застёгнутой?',
        answer:
          'Да. Park Lane Abaya можно заказать с опциональными незаметными кнопками, чтобы носить нараспашку или застёгнутой.',
      },
      {
        question: 'Как ухаживать за Park Lane Abaya?',
        answer:
          'Для сохранения элегантного падения ткани — деликатная машинная стирка при 30 °C. Всегда снимайте золотистые запонки-эмблему Bint Saeed перед стиркой или химчисткой.',
      },
    ],
  },
  zh: {
    introParagraphParts: [
      [{ type: 'text', value: '先于您开口的袍服。' }],
      [
        {
          type: 'text',
          value:
            '有些服装依靠装饰引人注目。Park Lane Abaya 证明，卓越的剪裁便已足够。',
        },
      ],
      [
        {
          type: 'text',
          value:
            '以优雅A字廓形设计，这款当代设计师长袍在保持优美平衡廓形的同时，营造毫不费力的流动感。采用柔软质感、精致纹理的绉绸，从肩部自然垂坠，令每一步都从容、自信而优雅。',
        },
      ],
      knottedLineParagraph(
        '灵感源自当代剪裁的精准，肩部以 Bint Saeed 标志性金色调 ',
        ' 纽扣收束。这不仅是设计细节，更在上半身廓形中营造微妙结构，从穿上那一刻起便鼓励自信姿态。',
      ),
      [
        {
          type: 'text',
          value:
            '从左肩垂落的一体肩巾随穿着者自然流动，增添柔美与优雅动感，却不打断廓形洁净的建筑线条。宽袖口以 Bint Saeed 标志性金色调徽标袖扣收束，在保持优雅低调的同时，引入含蓄的辨识度。',
        },
      ],
      [
        {
          type: 'text',
          value:
            '提供深黑色、深酒红色与海军蓝 — Park Lane Abaya 的每一处细节皆经深思熟虑。这款现代长袍以精致廓形、一体肩巾与含蓄金色点缀定义，在动感与结构间达成和谐平衡。隐藏侧缝口袋兼顾日常实用，利落剪裁令穿着者始终是焦点。',
        },
      ],
      [
        {
          type: 'text',
          value:
            'Park Lane Abaya 在伦敦商务区与巴黎咖啡馆，与在阿布扎比、利雅得和多哈同样自然得体。为在不同文化与场合间从容切换的女性而创，可作为精致当代外搭，亦可作为永恒长袍，优雅适应每一种场景。',
        },
      ],
    ],
    silhouetteItems: [
      A_LINE_SILHOUETTE.zh,
      '精工剪裁，垂坠优雅',
      '一体肩巾，随动作自然流动',
      '隐藏侧缝口袋',
      '宽袖口，可拆卸 Bint Saeed 标志性金色调徽标袖扣',
      '可选按扣闭合',
      '可选隐藏内标个性化',
    ],
    colourItems: ['深黑色', '深酒红色', '海军蓝'],
    compositionDetails: ['外层：75% 聚酯纤维，25% 粘胶纤维'],
    careDetails: ['洗涤前请取下标志性袖扣。', '30°C 轻柔机洗。'],
    fitAndSizeDetails: [
      A_LINE_SILHOUETTE.zh,
      '可开襟或闭合穿着',
      '模特身高：155 厘米',
      '模特穿着 XS 码',
      '可按需定制长度',
    ],
    originDetails: ['阿联酋阿布扎比制造'],
    faq: [
      {
        question: 'Park Lane Abaya 与其他长袍有何不同？',
        answer:
          'Park Lane Abaya 旨在超越传统长袍的期待。不靠装饰，而以卓越剪裁、优雅A字廓形与一体肩巾成就优雅。结构化肩部、Knotted Line 金色调纽扣与 Bint Saeed 徽标袖扣，造就同样适合当代设计师外搭或永恒长袍的廓形。',
      },
      {
        question: '可以在哪些场合穿着 Park Lane Abaya？',
        answer:
          '为在不同文化、场合与目的地间从容切换的女性而创 — 商务会议、使馆招待、正式晚宴、婚礼与文化场合皆宜。在伦敦商务区、巴黎咖啡馆与阿布扎比、利雅得、多哈同样自然得体。',
      },
      {
        question: 'Park Lane Abaya 适合外交官、高管与正式场合吗？',
        answer:
          '当然适合。为在专业与国际场合以自信优雅示人的女性而创。低调剪裁、优雅动感与精致细节，尤其适合外交招待、官方活动与文化场合。',
      },
      {
        question: '可以个性化定制 Park Lane Abaya 吗？',
        answer:
          '可以。与每件 Bint Saeed 长袍一样，Park Lane Abaya 可通过品牌标志性隐藏内标个性化 — 姓名、日期或专属寄语。',
      },
      {
        question: '可以闭合穿着 Park Lane Abaya 吗？',
        answer:
          '可以。Park Lane Abaya 可选配隐蔽按扣，按个人喜好与场合开襟或闭合穿着。',
      },
      {
        question: '如何护理 Park Lane Abaya？',
        answer:
          '为保持优雅垂坠与精致质感，30°C 轻柔机洗。洗涤或干洗前请务必取下 Bint Saeed 标志性金色调徽标袖扣。',
      },
    ],
  },
  de: {
    introParagraphParts: [
      [{ type: 'text', value: 'Die Abaya, die spricht, bevor Sie es tun.' }],
      [
        {
          type: 'text',
          value:
            'Manche Kleidungsstücke verlassen sich auf Verzierung, um bemerkt zu werden. Die Park Lane Abaya beweist, dass außergewöhnliches Tailoring genügt.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'Mit anmutiger A-Linien-Silhouette schafft diese zeitgenössische Designer-Abaya mühelose Bewegung bei wunderschön ausbalancierter Form. Aus sanft strukturiertem Krepp mit raffinierter Maserung fällt sie natürlich von den Schultern — jeder Schritt wirkt gelassen, selbstbewusst und elegant.',
        },
      ],
      knottedLineParagraph(
        'Inspiriert von der Präzision zeitgenössischen Tailorings, sind die Schultern mit Bint Saeed Signatur-',
        '-Knöpfen in Goldoptik veredelt. Mehr als ein Designdetail schaffen sie subtile Struktur im oberen Silhouettenbereich und fördern eine selbstbewusste Haltung vom ersten Moment an.',
      ),
      [
        {
          type: 'text',
          value:
            'Von der linken Schulter fließt ein integrierter Schal, der sich natürlich mit der Trägerin bewegt — Weichheit und anmutige Bewegung, ohne die klaren architektonischen Linien zu unterbrechen. Die weiten Manschetten mit Bint Saeed Signatur-Emblem-Manschettenknöpfen in Goldoptik setzen einen diskreten Akzent.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'In Tiefschwarz, Dunkelbordeaux und Marineblau — jedes Detail der Park Lane Abaya wurde sorgfältig bedacht. Diese moderne Abaya definiert sich durch raffinierte Silhouette, integrierten Schulterschal und subtile Goldakzente. Versteckte Seitennaht-Taschen bieten Alltagspraktikabilität, während das klare Tailoring die Trägerin im Mittelpunkt lässt.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'Die Park Lane Abaya gehört in Londons Geschäftsviertel und Pariser Cafés ebenso selbstverständlich wie nach Abu Dhabi, Riad und Doha. Für Frauen, die mühelos zwischen Kulturen und Anlässen wechseln — als raffinierte zeitgenössische Schicht oder als zeitlose Abaya.',
        },
      ],
    ],
    silhouetteItems: [
      A_LINE_SILHOUETTE.de,
      'Maßgeschneiderter Schnitt für eleganten Fall',
      'Integrierter Schulterschal für natürliche Bewegung',
      'Versteckte Seitennaht-Taschen',
      'Weite Manschetten mit abnehmbaren Bint Saeed Emblem-Manschettenknöpfen in Goldoptik',
      'Optionale Druckknopf-Schließung',
      'Optionale Personalisierung mit verstecktem Innenetikett',
    ],
    colourItems: ['Tiefschwarz', 'Dunkles Bordeaux', 'Marineblau'],
    compositionDetails: ['Außenmaterial: 75 % Polyester, 25 % Viskose'],
    careDetails: [
      'Signatur-Manschettenknöpfe vor dem Waschen entfernen.',
      'Schonwaschgang bei 30 °C.',
    ],
    fitAndSizeDetails: [
      A_LINE_SILHOUETTE.de,
      'Zum Offen- oder Geschlossen-Tragen konzipiert',
      'Modellgröße: 155 cm',
      'Modell trägt XS',
      'Individuelle Länge auf Anfrage',
    ],
    originDetails: ['Hergestellt in Abu Dhabi, VAE'],
    faq: [
      {
        question: 'Was unterscheidet die Park Lane Abaya von anderen Abayas?',
        answer:
          'Die Park Lane Abaya wurde geschaffen, um traditionelle Erwartungen zu übertreffen. Statt Verzierung erreicht sie Eleganz durch außergewöhnliches Tailoring, anmutige A-Linien-Silhouette und integrierten Schulterschal. Strukturierte Schultern, goldene Knotted-Line-Knöpfe und Bint Saeed Emblem-Manschettenknöpfe schaffen eine Silhouette für zeitgenössische Schicht oder zeitlose Abaya.',
      },
      {
        question: 'Wo kann ich die Park Lane Abaya tragen?',
        answer:
          'Für Frauen, deren Leben mühelos zwischen Kulturen, Anlässen und Destinationen wechselt — Geschäftstreffen, Botschaftsempfänge, formelle Dinners, Hochzeiten und Kulturveranstaltungen. In Londons Geschäftsvierteln, Pariser Cafés, Abu Dhabi, Riad und Doha gleichermaßen.',
      },
      {
        question: 'Ist die Park Lane Abaya für Diplomatinnen, Führungskräfte und offizielle Anlässe geeignet?',
        answer:
          'Absolut. Für Frauen, die sich in professionellen und internationalen Kontexten mit Selbstvertrauen und Eleganz präsentieren. Zurückhaltendes Tailoring, anmutige Bewegung und raffinierte Details — besonders für diplomatische Empfänge und offizielle Anlässe.',
      },
      {
        question: 'Kann ich die Park Lane Abaya personalisieren?',
        answer:
          'Ja. Wie jede Bint Saeed Abaya kann die Park Lane Abaya mit dem Signatur-Innenetikett personalisiert werden — Name, Datum oder persönliche Botschaft.',
      },
      {
        question: 'Kann ich die Park Lane Abaya geschlossen tragen?',
        answer:
          'Ja. Die Park Lane Abaya kann mit optionalen diskreten Druckknöpfen bestellt werden — offen oder geschlossen nach Wunsch.',
      },
      {
        question: 'Wie pflege ich die Park Lane Abaya?',
        answer:
          'Für eleganten Fall und raffinierte Optik: Schonwaschgang bei 30 °C. Goldene Bint Saeed Emblem-Manschettenknöpfe vor Wäsche oder Reinigung immer entfernen.',
      },
    ],
  },
  nl: {
    introParagraphParts: [
      [{ type: 'text', value: 'De abaya die spreekt voordat u dat doet.' }],
      [
        {
          type: 'text',
          value:
            'Sommige kledingstukken vertrouwen op versiering om op te vallen. De Park Lane Abaya bewijst dat uitzonderlijk maatwerk genoeg is.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'Ontworpen met een sierlijke A-line silhouet, creëert deze eigentijdse designer abaya moeiteloze beweging met een prachtig gebalanceerde vorm. Gemaakt van zacht gestructureerd crêpe met verfijnde structuur, valt het natuurlijk van de schouders — elke stap voelt beheerst, zelfverzekerd en elegant.',
        },
      ],
      knottedLineParagraph(
        'Geïnspireerd door de precisie van eigentijds maatwerk, zijn de schouders afgewerkt met Bint Saeed signature goudkleurige ',
        '-knopen. Meer dan een designdetail creëren ze subtiele structuur in het bovenste silhouet en stimuleren een zelfverzekerde houding vanaf het moment van dragen.',
      ),
      [
        {
          type: 'text',
          value:
            'Vanaf de linkerschouder stroomt een geïntegreerde sjaal die natuurlijk meebeweegt met de drager — zachtheid en sierlijke beweging zonder de strakke architecturale lijnen te onderbreken. Brede manchetten met Bint Saeed signature embleem manchetknopen in goud introduceren een discrete touch van onderscheid.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'Beschikbaar in Diepzwart, Donker bordeaux en Marineblauw — elk detail van de Park Lane Abaya is zorgvuldig overwogen. Deze moderne abaya wordt gedefinieerd door verfijnd silhouet, geïntegreerde schoudersjaal en subtiele gouden accenten. Verborgen zijnaadzakken bieden dagelijkse praktijk, terwijl het strakke maatwerk de drager centraal laat staan.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'De Park Lane Abaya hoort even natuurlijk in Londens zakenwijken en Parijse cafés als in Abu Dhabi, Riyad en Doha. Voor vrouwen die moeiteloos tussen culturen en gelegenheden bewegen — als verfijnde eigentijdse laag of als tijdloze abaya.',
        },
      ],
    ],
    silhouetteItems: [
      A_LINE_SILHOUETTE.nl,
      'Maatwerkconstructie voor elegant draperen',
      'Geïntegreerde schoudersjaal ontworpen om natuurlijk mee te bewegen',
      'Verborgen zijnaadzakken',
      'Brede manchetten met verwijderbare Bint Saeed embleem manchetknopen in goud',
      'Optionele drukknoopssluiting',
      'Optionele personalisatie met verborgen binnenlabel',
    ],
    colourItems: ['Diepzwart', 'Donker bordeaux', 'Marineblauw'],
    compositionDetails: ['Buitenkant: 75% polyester, 25% viscose'],
    careDetails: [
      'Verwijder de signature manchetknopen vóór het wassen.',
      'Zachte machinewas op 30 °C.',
    ],
    fitAndSizeDetails: [
      A_LINE_SILHOUETTE.nl,
      'Ontworpen om open of gesloten gedragen te worden',
      'Model lengte: 155 cm',
      'Model draagt XS',
      'Aangepaste lengte op aanvraag',
    ],
    originDetails: ['Gemaakt in Abu Dhabi, VAE'],
    faq: [
      {
        question: 'Wat onderscheidt de Park Lane Abaya van andere abaya’s?',
        answer:
          'De Park Lane Abaya is ontworpen om traditionele verwachtingen te overstijgen. In plaats van versiering bereikt ze elegantie door uitzonderlijk maatwerk, sierlijk A-line silhouet en geïntegreerde schoudersjaal. Gestructureerde schouders, gouden Knotted Line-knopen en Bint Saeed embleem manchetknopen creëren een silhouet dat even thuis is als eigentijdse designer laag of tijdloze abaya.',
      },
      {
        question: 'Waar kan ik de Park Lane Abaya dragen?',
        answer:
          'Voor vrouwen wier leven moeiteloos beweegt tussen culturen, gelegenheden en bestemmingen — zakelijke vergaderingen, ambassade recepties, formele diners, bruiloften en culturele evenementen. Even natuurlijk in Londens zakenwijken en Parijse cafés als in Abu Dhabi, Riyad en Doha.',
      },
      {
        question: 'Is de Park Lane Abaya geschikt voor diplomaten, executives en officiële gelegenheden?',
        answer:
          'Absoluut. Voor vrouwen die zich met vertrouwen en elegantie presenteren in professionele en internationale contexten. Terughoudend maatwerk, sierlijke beweging en verfijnde details — bijzonder geschikt voor diplomatieke recepties en officiële gelegenheden.',
      },
      {
        question: 'Kan ik de Park Lane Abaya personaliseren?',
        answer:
          'Ja. Zoals elke Bint Saeed abaya kan de Park Lane Abaya worden gepersonaliseerd met het signature verborgen binnenlabel — een naam, datum of persoonlijke boodschap.',
      },
      {
        question: 'Kan ik de Park Lane Abaya gesloten dragen?',
        answer:
          'Ja. De Park Lane Abaya kan worden besteld met optionele discrete drukknopen — open of gesloten naar voorkeur.',
      },
      {
        question: 'Hoe onderhoud ik de Park Lane Abaya?',
        answer:
          'Voor elegant draperen en verfijnde afwerking: zachte machinewas op 30 °C. Verwijder altijd de gouden Bint Saeed embleem manchetknopen vóór wassen of stomerij.',
      },
    ],
  },
  pt: {
    introParagraphParts: [
      [{ type: 'text', value: 'A abaya que fala antes de si.' }],
      [
        {
          type: 'text',
          value:
            'Algumas peças dependem do adorno para serem notadas. A Park Lane Abaya prova que um alfaiataria excecional é suficiente.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'Concebida com uma silhueta A-line graciosa, esta abaya de designer contemporânea cria movimento sem esforço mantendo uma forma magnificamente equilibrada. Confeccionada em crepe de textura suave e grão refinado, cai naturalmente dos ombros, fazendo cada passo parecer sereno, confiante e elegante.',
        },
      ],
      knottedLineParagraph(
        'Inspirada na precisão da alfaiataria contemporânea, os ombros são acabados com os botões dourados signature ',
        ' da Bint Saeed. Mais do que um detalhe de design, criam estrutura subtil na parte superior da silhueta, encorajando uma postura confiante desde o momento em que a abaya é usada.',
      ),
      [
        {
          type: 'text',
          value:
            'Fluindo do ombro esquerdo, um lenço integrado move-se naturalmente com quem a usa, adicionando suavidade e movimento gracioso sem interromper as linhas arquitetónicas limpas da silhueta. Acabados com abotoaduras Monogram douradas signature Bint Saeed, os punhos largos introduzem um toque discreto de distinção.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'Disponível em Preto profundo, Bordô escuro e Azul-marinho — cada detalhe da Park Lane Abaya foi cuidadosamente considerado. Esta abaya moderna define-se pela silhueta refinada, lenço de ombro integrado e acentos dourados subtis. Bolsos laterais ocultos nas costuras para praticidade quotidiana, enquanto a alfaiataria limpa permite que a mulher que a usa permaneça como foco.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'A Park Lane Abaya pertence naturalmente aos distritos de negócios de Londres e cafés parisienses, como em Abu Dhabi, Riade e Doha. Criada para mulheres que se movem sem esforço entre culturas e ocasiões — como camada contemporânea refinada ou abaya intemporal.',
        },
      ],
    ],
    silhouetteItems: [
      A_LINE_SILHOUETTE.pt,
      'Construção alfaiataria para um caimento elegante',
      'Lenço de ombro integrado concebido para fluir com o movimento',
      'Bolsos laterais ocultos nas costuras',
      'Punhos largos com abotoaduras Monogram douradas Bint Saeed removíveis',
      'Fecho opcional com botões de pressão',
      'Personalização opcional com etiqueta interior oculta',
    ],
    colourItems: ['Preto profundo', 'Bordô escuro', 'Azul-marinho'],
    compositionDetails: ['Exterior: 75% poliéster, 25% viscose'],
    careDetails: [
      'Remova as abotoaduras signature antes da lavagem.',
      'Lavagem na máquina suave a 30 °C.',
    ],
    fitAndSizeDetails: [
      A_LINE_SILHOUETTE.pt,
      'Concebida para ser usada aberta ou fechada',
      'Altura da modelo: 155 cm',
      'Modelo usa XS',
      'Comprimento personalizado disponível mediante pedido',
    ],
    originDetails: ['Feita em Abu Dhabi, Emirados Árabes Unidos'],
    faq: [
      {
        question: 'O que distingue a Park Lane Abaya de outras abayas?',
        answer:
          'A Park Lane Abaya foi concebida para se destacar das expectativas tradicionais. Em vez de depender do adorno, alcança elegância através de alfaiataria excecional, silhueta A-line graciosa e lenço de ombro integrado. Ombros estruturados, botões Knotted Line dourados e abotoaduras Monogram Bint Saeed criam uma silhueta igualmente adequada como camada de designer contemporânea ou abaya intemporal.',
      },
      {
        question: 'Onde posso usar a Park Lane Abaya?',
        answer:
          'Criada para mulheres cuja vida se move sem esforço entre culturas, ocasiões e destinos — reuniões de negócios, receções em embaixadas, jantares formais, casamentos e eventos culturais. Pertence naturalmente aos distritos de negócios de Londres e cafés parisienses, como em Abu Dhabi, Riade e Doha.',
      },
      {
        question: 'A Park Lane Abaya é adequada para diplomatas, executivas e ocasiões oficiais?',
        answer:
          'Absolutamente. Criada para mulheres que se apresentam com confiança e elegância em contextos profissionais e internacionais. Alfaiataria sóbria, movimento gracioso e detalhes refinados — especialmente adequada para receções diplomáticas e eventos oficiais.',
      },
      {
        question: 'Posso personalizar a Park Lane Abaya?',
        answer:
          'Sim. Como cada abaya Bint Saeed, a Park Lane Abaya pode ser personalizada com a etiqueta interior oculta signature da casa — um nome, data ou mensagem pessoal.',
      },
      {
        question: 'Posso usar a Park Lane Abaya fechada?',
        answer:
          'Sim. A Park Lane Abaya pode ser encomendada com fechos de botões de pressão discretos opcionais — aberta ou fechada conforme preferência.',
      },
      {
        question: 'Como devo cuidar da Park Lane Abaya?',
        answer:
          'Para preservar o caimento elegante e o acabamento refinado, lavagem na máquina suave a 30 °C. Remova sempre as abotoaduras Monogram douradas Bint Saeed antes da lavagem ou limpeza a seco.',
      },
    ],
  },
  id: {
    introParagraphParts: [
      [{ type: 'text', value: 'Abaya yang berbicara sebelum Anda.' }],
      [
        {
          type: 'text',
          value:
            'Beberapa pakaian mengandalkan hiasan untuk diperhatikan. Park Lane Abaya membuktikan bahwa tailoring yang luar biasa sudah cukup.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'Dirancang dengan siluet A-line yang anggun, abaya desainer kontemporer ini menciptakan gerakan tanpa usaha sambil mempertahankan bentuk yang seimbang dengan indah. Dibuat dari krepe bertekstur lembut dengan butiran halus, jatuh secara alami dari bahu, membuat setiap langkah terasa tenang, percaya diri, dan elegan.',
        },
      ],
      knottedLineParagraph(
        'Terinspirasi oleh presisi tailoring kontemporer, bahu diselesaikan dengan kancing emas signature ',
        ' Bint Saeed. Lebih dari detail desain, mereka menciptakan struktur halus di bagian atas siluet, mendorong postur percaya diri sejak abaya dikenakan.',
      ),
      [
        {
          type: 'text',
          value:
            'Mengalir dari bahu kiri, scarf terintegrasi bergerak secara alami bersama pemakainya, menambah kelembutan dan gerakan anggun tanpa mengganggu garis arsitektural siluet yang bersih. Selesai dengan cufflink Monogram emas signature Bint Saeed, manset lebar memperkenalkan sentuhan pembedaan yang halus.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'Tersedia dalam Hitam pekat, Maroon gelap, dan Navy Blue — setiap detail Park Lane Abaya dipertimbangkan dengan saksama. Abaya modern ini didefinisikan oleh siluet halus, scarf bahu terintegrasi, dan aksen emas halus. Saku sisi tersembunyi di jahitan untuk kepraktisan sehari-hari, sementara tailoring bersih memungkinkan wanita yang memakainya tetap menjadi fokus.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'Park Lane Abaya sama alaminya di distrik bisnis London dan kafe Paris seperti di Abu Dhabi, Riyadh, dan Doha. Diciptakan untuk wanita yang bergerak tanpa usaha antara budaya dan kesempatan — sebagai lapisan kontemporer halus atau abaya abadi.',
        },
      ],
    ],
    silhouetteItems: [
      A_LINE_SILHOUETTE.id,
      'Konstruksi tailored untuk drape elegan',
      'Scarf bahu terintegrasi dirancang mengalir dengan gerakan',
      'Saku sisi tersembunyi di jahitan',
      'Manset lebar dengan cufflink Monogram emas Bint Saeed yang dapat dilepas',
      'Penutup kancing snap opsional',
      'Personalisasi label dalam tersembunyi opsional',
    ],
    colourItems: ['Hitam pekat', 'Maroon gelap', 'Navy Blue'],
    compositionDetails: ['Luar: 75% Poliester, 25% Viskosa'],
    careDetails: [
      'Lepaskan cufflink signature sebelum mencuci.',
      'Cuci mesin lembut pada 30°C.',
    ],
    fitAndSizeDetails: [
      A_LINE_SILHOUETTE.id,
      'Dirancang untuk dipakai terbuka atau tertutup',
      'Tinggi model: 155 cm',
      'Model memakai ukuran XS',
      'Panjang kustom tersedia atas permintaan',
    ],
    originDetails: ['Dibuat di Abu Dhabi, Uni Emirat Arab'],
    faq: [
      {
        question: 'Apa yang membuat Park Lane Abaya berbeda dari abaya lainnya?',
        answer:
          'Park Lane Abaya dirancang untuk menonjol dari ekspektasi tradisional. Alih-alih mengandalkan hiasan, ia mencapai keanggunan melalui tailoring luar biasa, siluet A-line anggun, dan scarf bahu terintegrasi. Bahu terstruktur, kancing Knotted Line emas, dan cufflink Monogram Bint Saeed menciptakan siluet yang sama cocoknya sebagai lapisan desainer kontemporer atau abaya abadi.',
      },
      {
        question: 'Di mana saya bisa memakai Park Lane Abaya?',
        answer:
          'Diciptakan untuk wanita yang hidupnya bergerak tanpa usaha antara budaya, kesempatan, dan destinasi — rapat bisnis, resepsi kedutaan, makan malam formal, pernikahan, dan acara budaya. Sama alaminya di distrik bisnis London dan kafe Paris seperti di Abu Dhabi, Riyadh, dan Doha.',
      },
      {
        question: 'Apakah Park Lane Abaya cocok untuk diplomat, eksekutif, dan acara resmi?',
        answer:
          'Tentu saja. Diciptakan untuk wanita yang menampilkan diri dengan percaya diri dan keanggunan dalam konteks profesional dan internasional. Tailoring sederhana, gerakan anggun, dan detail halus — sangat cocok untuk resepsi diplomatik dan acara resmi.',
      },
      {
        question: 'Bisakah saya mempersonalisasi Park Lane Abaya?',
        answer:
          'Ya. Seperti setiap abaya Bint Saeed, Park Lane Abaya dapat dipersonalisasi dengan label dalam tersembunyi signature rumah — nama, tanggal, atau pesan pribadi.',
      },
      {
        question: 'Bisakah saya memakai Park Lane Abaya tertutup?',
        answer:
          'Ya. Park Lane Abaya dapat dipesan dengan penutup kancing snap diskret opsional — terbuka atau tertutup sesuai preferensi.',
      },
      {
        question: 'Bagaimana cara merawat Park Lane Abaya?',
        answer:
          'Untuk menjaga drape elegan dan finishing halus, cuci mesin lembut pada 30°C. Selalu lepaskan cufflink Monogram emas Bint Saeed sebelum mencuci atau dry clean.',
      },
    ],
  },
  ms: {
    introParagraphParts: [
      [{ type: 'text', value: 'Abaya yang bercakap sebelum anda.' }],
      [
        {
          type: 'text',
          value:
            'Sesetengah pakaian bergantung pada hiasan untuk diperhatikan. Park Lane Abaya membuktikan bahawa tailoring yang luar biasa sudah mencukupi.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'Direka dengan siluet A-line yang anggun, abaya pereka kontemporari ini mencipta pergerakan tanpa usaha sambil mengekalkan bentuk yang seimbang dengan indah. Dihasilkan daripada krepe bertekstur lembut dengan butiran halus, jatuh secara semula jadi dari bahu, menjadikan setiap langkah tenang, yakin dan elegan.',
        },
      ],
      knottedLineParagraph(
        'Diilhamkan oleh ketepatan tailoring kontemporari, bahu disiapkan dengan butang emas signature ',
        ' Bint Saeed. Lebih daripada butiran reka bentuk, ia mencipta struktur halus di bahagian atas siluet, menggalakkan postur yakin sejak abaya dipakai.',
      ),
      [
        {
          type: 'text',
          value:
            'Mengalir dari bahu kiri, skaf terintegrasi bergerak secara semula jadi bersama pemakainya, menambah kelembutan dan pergerakan anggun tanpa mengganggu garisan seni bina siluet yang bersih. Disiapkan dengan cufflink Monogram emas signature Bint Saeed, manset lebar memperkenalkan sentuhan keistimewaan yang halus.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'Tersedia dalam Hitam pekat, Maroon gelap, dan Navy Blue — setiap butiran Park Lane Abaya dipertimbangkan dengan teliti. Abaya moden ini ditakrifkan oleh siluet halus, skaf bahu terintegrasi, dan aksen emas halus. Poket sisi tersembunyi di jahitan untuk kepraktisan harian, manakala tailoring bersih membenarkan wanita yang memakainya kekal sebagai fokus.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'Park Lane Abaya sama semula jadinya di daerah perniagaan London dan kafe Paris seperti di Abu Dhabi, Riyadh, dan Doha. Dicipta untuk wanita yang bergerak tanpa usaha antara budaya dan majlis — sebagai lapisan kontemporari halus atau abaya abadi.',
        },
      ],
    ],
    silhouetteItems: [
      A_LINE_SILHOUETTE.ms,
      'Pembinaan tailored untuk drape elegan',
      'Skaf bahu terintegrasi direka untuk mengalir dengan pergerakan',
      'Poket sisi tersembunyi di jahitan',
      'Manset lebar dengan cufflink Monogram emas Bint Saeed boleh tanggal',
      'Penutup butang snap pilihan',
      'Pemperibadian label dalaman tersembunyi pilihan',
    ],
    colourItems: ['Hitam pekat', 'Maroon gelap', 'Navy Blue'],
    compositionDetails: ['Luar: 75% Poliester, 25% Viskosa'],
    careDetails: [
      'Tanggalkan cufflink signature sebelum mencuci.',
      'Basuh mesin lembut pada 30°C.',
    ],
    fitAndSizeDetails: [
      A_LINE_SILHOUETTE.ms,
      'Direka untuk dipakai terbuka atau tertutup',
      'Tinggi model: 155 cm',
      'Model memakai saiz XS',
      'Panjang tersuai tersedia atas permintaan',
    ],
    originDetails: ['Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu'],
    faq: [
      {
        question: 'Apakah yang membezakan Park Lane Abaya daripada abaya lain?',
        answer:
          'Park Lane Abaya direka untuk menonjol daripada jangkaan tradisional. Daripada bergantung pada hiasan, ia mencapai keanggunan melalui tailoring luar biasa, siluet A-line anggun, dan skaf bahu terintegrasi. Bahu berstruktur, butang Knotted Line emas, dan cufflink Monogram Bint Saeed mencipta siluet yang sama sesuainya sebagai lapisan pereka kontemporari atau abaya abadi.',
      },
      {
        question: 'Di manakah saya boleh memakai Park Lane Abaya?',
        answer:
          'Dicipta untuk wanita yang hidupnya bergerak tanpa usaha antara budaya, majlis, dan destinasi — mesyuarat perniagaan, resepsi kedutaan, makan malam formal, perkahwinan, dan acara budaya. Sama semula jadinya di daerah perniagaan London dan kafe Paris seperti di Abu Dhabi, Riyadh, dan Doha.',
      },
      {
        question: 'Adakah Park Lane Abaya sesuai untuk diplomat, eksekutif, dan majlis rasmi?',
        answer:
          'Sudah tentu. Dicipta untuk wanita yang menampilkan diri dengan yakin dan keanggunan dalam konteks profesional dan antarabangsa. Tailoring sederhana, pergerakan anggun, dan butiran halus — sangat sesuai untuk resepsi diplomatik dan majlis rasmi.',
      },
      {
        question: 'Bolehkah saya memperibadikan Park Lane Abaya?',
        answer:
          'Ya. Seperti setiap abaya Bint Saeed, Park Lane Abaya boleh diperibadikan dengan label dalaman tersembunyi signature rumah — nama, tarikh, atau mesej peribadi.',
      },
      {
        question: 'Bolehkah saya memakai Park Lane Abaya tertutup?',
        answer:
          'Ya. Park Lane Abaya boleh ditempah dengan penutup butang snap halus pilihan — terbuka atau tertutup mengikut pilihan.',
      },
      {
        question: 'Bagaimana saya menjaga Park Lane Abaya?',
        answer:
          'Untuk mengekalkan drape elegan dan kemasan halus, basuh mesin lembut pada 30°C. Sentiasa tanggalkan cufflink Monogram emas Bint Saeed sebelum mencuci atau dry clean.',
      },
    ],
  },
}

function buildParkLaneAbayaDetailGroups(locale: AppLocale): PdpDetailGroup[] {
  const pack = LOCALE_PACKS[locale]
  return [
    {
      title: PDP_SILHOUETTE_TITLE[locale],
      items: [...pack.silhouetteItems],
    },
    getHouseCodesDetailGroup('knotted-line-emblem', locale),
    {
      title: PDP_COLOUR_TITLE[locale],
      items: [...pack.colourItems],
    },
  ]
}

export function getParkLaneAbayaPdpPack(locale: AppLocale): LocalePack {
  return LOCALE_PACKS[locale]
}

export function getParkLaneAbayaPdpFaq(locale: AppLocale): ProductFaqItem[] {
  return LOCALE_PACKS[locale].faq
}

export function buildParkLaneAbayaPdpContent(
  _color?: string,
  locale: AppLocale = 'en',
): ProductPdpContent {
  const pack = LOCALE_PACKS[locale]
  return {
    introParagraphParts: pack.introParagraphParts,
    introParagraphs: pdpIntroParagraphsToPlainText(pack.introParagraphParts),
    productDetails: [],
    productDetailGroups: buildParkLaneAbayaDetailGroups(locale),
    compositionDetails: [...pack.compositionDetails],
    careDetails: [...pack.careDetails],
    fitAndSizeDetails: [...pack.fitAndSizeDetails],
    originDetails: [...pack.originDetails],
    faq: getParkLaneAbayaPdpFaq(locale),
  }
}
