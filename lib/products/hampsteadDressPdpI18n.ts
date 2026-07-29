import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductPdpContent } from '@/data/productPdpContent'
import {
  HAMPSTEAD_DRESS_CARE,
  HAMPSTEAD_DRESS_COMPOSITION,
  HAMPSTEAD_DRESS_FIT_AND_SIZE,
  HAMPSTEAD_DRESS_ORIGIN,
  HAMPSTEAD_DRESS_PRODUCT_DETAILS,
} from '@/data/hampsteadDressPdpDetails'
import { HAMPSTEAD_DRESS_FAQ_EN } from '@/data/hampsteadDressPdpFaq'
import { HAMPSTEAD_DRESS_INTRO_EN } from '@/data/hampsteadDressPdpIntro'
import type { PdpIntroParagraph } from '@/lib/products/pdpIntroRich'
import { THE_CODES_AL_TALLI_HREF, pdpIntroParagraphsToPlainText } from '@/lib/products/pdpIntroRich'
import type { ProductFaqItem } from '@/lib/products/productSchemaMeta'
import { getAlTalliHeritageFaqItem } from '@/lib/products/alTalliHeritageFaqI18n'
import { appendAlTalliCareFaq } from '@/lib/products/alTalliCareFaqI18n'
import { getHouseCodesDetailGroup } from '@/lib/products/pdpHouseCodesGroupsI18n'

export const HAMPSTEAD_DRESS_SLUG = 'hampstead-dress'

type LocalePack = {
  introParagraphParts: PdpIntroParagraph[]
  productDetails: readonly string[]
  compositionDetails: readonly string[]
  careDetails: readonly string[]
  fitAndSizeDetails: readonly string[]
  originDetails: readonly string[]
  faq: ProductFaqItem[]
}

function pairingParagraph(
  lead: string,
  and: string,
  tail: string,
): PdpIntroParagraph {
  return [
    { type: 'text', value: lead },
    { type: 'codeLink', label: 'Covent Garden Abaya', href: '/shop/covent-garden-abaya', bold: true },
    { type: 'text', value: ', ' },
    { type: 'codeLink', label: 'Marylebone Abaya', href: '/shop/marylebone-abaya', bold: true },
    { type: 'text', value: ', ' },
    { type: 'codeLink', label: 'Kensington Abaya', href: '/shop/kensington-abaya', bold: true },
    { type: 'text', value: and },
    { type: 'codeLink', label: 'Belgravia Abaya', href: '/shop/belgravia-abaya', bold: true },
    { type: 'text', value: tail },
  ]
}

function alTalliParagraph(before: string, after: string): PdpIntroParagraph {
  return [
    { type: 'text', value: before },
    { type: 'codeLink', label: 'Al Talli', href: THE_CODES_AL_TALLI_HREF, bold: true },
    { type: 'text', value: after },
  ]
}

const LOCALE_PACKS: Record<AppLocale, LocalePack> = {
  en: {
    introParagraphParts: HAMPSTEAD_DRESS_INTRO_EN,
    productDetails: HAMPSTEAD_DRESS_PRODUCT_DETAILS,
    compositionDetails: HAMPSTEAD_DRESS_COMPOSITION,
    careDetails: HAMPSTEAD_DRESS_CARE,
    fitAndSizeDetails: HAMPSTEAD_DRESS_FIT_AND_SIZE,
    originDetails: HAMPSTEAD_DRESS_ORIGIN,
    faq: HAMPSTEAD_DRESS_FAQ_EN,
  },
  ar: {
    introParagraphParts: [
      [{ type: 'text', value: '«هذا بالضبط نوع الفستان الذي كنتِ تبحثين عنه.»' }],
      [
        {
          type: 'text',
          value:
            'صُنع فستان Hampstead للنساء اللواتي يقدّرن الأناقة الخالدة، والقصة الاستثنائية، والبساطة الراقية. مبطّن بالكامل ومصنوع من كريب راقٍ، يمنح خط العنق المتدلّي الأنيق، والسيلويت المنحوت بلطف، والاتساع الرشيق، فستاناً يتحرك بجمال مع كل خطوة. صُمم ليُرتدى بثقة وحده أو تحت العباءة، ليصبح من أكثر القطع تعدداً في خزانة مدروسة.',
        },
      ],
      alTalliParagraph(
        'متوفر بالأسود العميق، والعنابي، والكحلي — كل تفصيلة وُضعت بعناية. جيوب جانبية مخفية في اللحامات لعملية يومية دون مقاطعة السيلويت، بينما يُنهى الخصر بتفاصيل ',
        ' المنسوجة المميزة من Bint Saeed. معترف به من اليونسكو كتراث ثقافي غير مادي، التلي من أعز الحرف التراثية الإماراتية. في Bint Saeed، نعيد تفسير هذا الإرث الرائع عبر تصميم معاصر، ليُقدَّر جزء مهم من الثقافة الإماراتية من نساء حول العالم.',
      ),
      pairingParagraph(
        'كأساس في خزانة Bint Saeed، يُنسّق فستان Hampstead بجمال مع ',
        '، و',
        '، مما يخلق سيلويتات طبقات راقية حيث وُضعت كل تفصيلة بعناية من الداخل إلى الخارج.',
      ),
      [
        {
          type: 'text',
          value:
            'سواء في أبوظبي أو دبي أو الرياض أو الدوحة أو مدينة الكويت أو مسقط أو لندن أو باريس أو ميلانو أو تورنتو، يعكس فستان Hampstead فلسفة Bint Saeed في حمل التراث إلى الأمام عبر تصميم خالد. فستان صُنع ليسافر بسهولة مع المرأة التي ترتديه، فيبقى أنيقاً أينما تأخذها الحياة.',
        },
      ],
    ],
    productDetails: [
      'خط عنق متدلّي أنيق مع سيلويت منحوت بلطف واتساع رشيق',
      'مبطّن بالكامل لراحة استثنائية ولمسة راقية',
      'مصنوع من كريب راقٍ',
      'جيوب جانبية مخفية في اللحامات لعملية يومية',
      'صُمم ليُرتدى بجمال وحده أو تحت العباءة',
      'يُنسّق بجمال مع عباية Covent Garden وMarylebone وKensington وBelgravia',
      'متوفر بالأسود العميق، والعنابي، والكحلي',
    ],
    compositionDetails: ['الخارجي: كريب راقٍ', 'مبطّن بالكامل'],
    careDetails: [
      'يُنصح بالتنظيف الجاف الاحترافي',
      'غسل يدوي لطيف بماء بارد عند الحاجة',
      'عدم استخدام المبيض',
      'عدم التجفيف الآلي',
    ],
    fitAndSizeDetails: [
      'سيلويت منحوت بلطف مع اتساع رشيق',
      'طول الفستان: 118 سم (مقاس M)',
      'طول العارضة: 155 سم',
      'العارضة ترتدي مقاس XS',
    ],
    originDetails: ['صُنع في أبوظبي، الإمارات العربية المتحدة'],
    faq: [
      {
        question: 'ما الذي يميز فستان Hampstead؟',
        answer:
          'يجمع فستان Hampstead خط عنق متدلّياً أنيقاً، وسيلويتاً منحوتاً بلطفاً مع اتساع رشيق، وجيوباً جانبية مخفية، وتفاصيل التلي المنسوجة المميزة من Bint Saeed عند الخصر — حرفية تراث إماراتية معترف بها من اليونسكو أُعيد تفسيرها عبر تصميم معاصر في أبوظبي.',
      },
      {
        question: 'هل يمكن ارتداء فستان Hampstead تحت العباءة؟',
        answer:
          'نعم. صُمم ليُرتدى بثقة وحده أو تحت العباءة. يُنسّق بجمال مع عباية Covent Garden وMarylebone وKensington وBelgravia، ليخلق سيلويتات طبقات راقية حيث وُضعت كل تفصيلة بعناية من الداخل إلى الخارج.',
      },
      {
        question: 'ما هو التلي في فستان Hampstead؟',
        answer:
          'التلي تطريز إماراتي تقليدي معترف به من اليونسكو كتراث ثقافي غير مادي. في فستان Hampstead، تنهي تفاصيل التلي المنسوجة المميزة من Bint Saeed الخصر — لتُقدَّر جزءاً مهماً من الثقافة الإماراتية من نساء حول العالم عبر تصميم معاصر.',
      },
      {
        question: 'لمن صُنع فستان Hampstead؟',
        answer:
          'صُنع للنساء اللواتي يقدّرن الأناقة الخالدة، والقصة الاستثنائية، والبساطة الراقية — في أبوظبي أو دبي أو الرياض أو الدوحة أو الكويت أو مسقط أو لندن أو باريس أو ميلانو أو تورنتو أو أينما تأخذها الحياة.',
      },
      {
        question: 'هل العناية بفستان Hampstead سهلة؟',
        answer:
          'يُنصح بالتنظيف الجاف الاحترافي للحفاظ على الكريب الراقي وتفاصيل التلي. يمكن الغسل اليدوي اللطيف بماء بارد عند الحاجة. لا تُستخدم المبيضات ولا التجفيف الآلي.',
      },
    ],
  },
  fr: {
    introParagraphParts: [
      [{ type: 'text', value: '« C’est exactement le genre de robe que vous cherchiez. »' }],
      [
        {
          type: 'text',
          value:
            'La robe Hampstead a été créée pour les femmes qui apprécient l’élégance intemporelle, la coupe exceptionnelle et la simplicité raffinée. Entièrement doublée et confectionnée dans un crêpe premium raffiné, son encolure drapée élégante, sa silhouette délicatement sculptée et son léger évasé créent une robe qui se meut magnifiquement à chaque pas. Conçue pour être portée avec assurance seule ou sous une abaya, elle devient l’une des pièces les plus polyvalentes d’une garde-robe réfléchie.',
        },
      ],
      alTalliParagraph(
        'Disponible en Noir profond, Bordeaux et Bleu marine, chaque détail a été soigneusement considéré. Des poches latérales dissimulées dans les coutures offrent une praticité quotidienne sans interrompre la silhouette, tandis que la taille est finie par la ',
        ' tissée signature de Bint Saeed. Reconnue par l’UNESCO comme patrimoine culturel immatériel, l’Al Talli est l’une des plus précieuses traditions artisanales émiraties. Chez Bint Saeed, nous réinterprétons ce patrimoine remarquable par un design contemporain, permettant à une part importante de la culture émiratie d’être appréciée par des femmes du monde entier.',
      ),
      pairingParagraph(
        'Conçue comme une fondation de la garde-robe Bint Saeed, la robe Hampstead s’associe magnifiquement à l’',
        ', et l’',
        ', créant des silhouettes superposées raffinées où chaque détail a été pensé de l’intérieur vers l’extérieur.',
      ),
      [
        {
          type: 'text',
          value:
            'Qu’elle soit portée à Abou Dabi, Dubaï, Riyad, Doha, Koweït, Mascate, Londres, Paris, Milan ou Toronto, la robe Hampstead reflète la philosophie de Bint Saeed : porter l’héritage vers l’avenir par un design intemporel. Une robe créée pour voyager avec la femme qui la porte, et rester élégante où que la vie la mène.',
        },
      ],
    ],
    productDetails: [
      'Encolure drapée élégante avec silhouette délicatement sculptée et léger évasé',
      'Entièrement doublée pour un confort exceptionnel et une finition raffinée',
      'Confectionnée dans un crêpe premium raffiné',
      'Poches latérales dissimulées dans les coutures pour la praticité quotidienne',
      'Conçue pour être portée seule ou sous une abaya',
      'S’associe à l’abaya Covent Garden, Marylebone, Kensington et Belgravia',
      'Disponible en Noir profond, Bordeaux et Bleu marine',
    ],
    compositionDetails: ['Extérieur : crêpe premium raffiné', 'Entièrement doublée'],
    careDetails: [
      'Nettoyage à sec professionnel recommandé',
      'Lavage à la main à l’eau froide si nécessaire',
      'Ne pas javelliser',
      'Ne pas sécher en machine',
    ],
    fitAndSizeDetails: [
      'Silhouette délicatement sculptée avec léger évasé',
      'Longueur : 118 cm (taille M)',
      'Taille mannequin : 155 cm',
      'La mannequin porte la taille XS',
    ],
    originDetails: ['Fabriquée à Abou Dabi, Émirats arabes unis'],
    faq: [
      {
        question: 'Qu’est-ce qui distingue la robe Hampstead ?',
        answer:
          'La robe Hampstead associe une encolure drapée élégante, une silhouette délicatement sculptée avec léger évasé, des poches latérales dissimulées et la garniture tissée Al Talli signature de Bint Saeed à la taille — artisanat patrimonial émirati reconnu par l’UNESCO, réinterprété par un design contemporain à Abou Dabi.',
      },
      {
        question: 'La robe Hampstead peut-elle être portée sous une abaya ?',
        answer:
          'Oui. Elle a été conçue pour être portée seule ou sous une abaya. Elle s’associe à l’abaya Covent Garden, Marylebone, Kensington et Belgravia, créant des silhouettes superposées raffinées où chaque détail a été pensé de l’intérieur vers l’extérieur.',
      },
      {
        question: 'Qu’est-ce que l’Al Talli sur la robe Hampstead ?',
        answer:
          'L’Al Talli est un artisanat de broderie tissée émiratie traditionnelle reconnu par l’UNESCO. Sur la robe Hampstead, la garniture Al Talli signature de Bint Saeed finit la taille — permettant à une part importante de la culture émiratie d’être appréciée par des femmes du monde entier.',
      },
      {
        question: 'Pour qui la robe Hampstead a-t-elle été créée ?',
        answer:
          'Pour les femmes qui apprécient l’élégance intemporelle, la coupe exceptionnelle et la simplicité raffinée — à Abou Dabi, Dubaï, Riyad, Doha, Koweït, Mascate, Londres, Paris, Milan, Toronto ou partout où la vie les mène.',
      },
      {
        question: 'La robe Hampstead est-elle facile d’entretien ?',
        answer:
          'Le nettoyage à sec professionnel est recommandé pour préserver le crêpe raffiné et la garniture Al Talli. Lavage à la main à l’eau froide si nécessaire. Ne pas javelliser ni sécher en machine.',
      },
    ],
  },
  it: {
    introParagraphParts: [
      [{ type: 'text', value: '«È esattamente il tipo di abito che stavi cercando.»' }],
      [
        {
          type: 'text',
          value:
            'L’Hampstead Dress è stato creato per donne che apprezzano eleganza senza tempo, vestibilità eccezionale e raffinata semplicità. Completamente foderato e realizzato in un crepe premium raffinato, con scollo drappeggiato elegante, silhouette delicatamente scolpita e leggero ampliamento, crea un abito che si muove magnificamente a ogni passo. Progettato per essere indossato con sicurezza da solo o sotto un’abaya, diventa uno dei capi più versatili in un guardaroba curato.',
        },
      ],
      alTalliParagraph(
        'Disponibile in Nero profondo, Bordeaux e Blu navy, ogni dettaglio è stato considerato con cura. Tasche laterali nascoste nelle cuciture per praticità quotidiana senza interrompere la silhouette, mentre il punto vita è rifinito con la ',
        ' tessuta signature di Bint Saeed. Riconosciuto dall’UNESCO come patrimonio culturale immateriale, l’Al Talli è una delle più preziose tradizioni artigianali emiratine. In Bint Saeed reinterpretiamo questo straordinario patrimonio attraverso il design contemporaneo.',
      ),
      pairingParagraph(
        'Concepito come fondamento del guardaroba Bint Saeed, l’Hampstead Dress si abbina magnificamente all’',
        ', e all’',
        ', creando silhouette stratificate raffinate in cui ogni dettaglio è stato pensato dall’interno verso l’esterno.',
      ),
      [
        {
          type: 'text',
          value:
            'Indossato ad Abu Dhabi, Dubai, Riyadh, Doha, Kuwait City, Muscat, Londra, Parigi, Milano o Toronto, l’Hampstead Dress riflette la filosofia di Bint Saeed di portare avanti l’eredità attraverso un design senza tempo — creato per viaggiare con la donna che lo indossa.',
        },
      ],
    ],
    productDetails: [
      'Scollo drappeggiato elegante con silhouette delicatamente scolpita e leggero ampliamento',
      'Completamente foderato per comfort eccezionale',
      'Realizzato in crepe premium raffinato',
      'Tasche laterali nascoste nelle cuciture',
      'Da indossare da solo o sotto abaya',
      'Si abbina a Covent Garden, Marylebone, Kensington e Belgravia Abaya',
      'Disponibile in Nero profondo, Bordeaux e Blu navy',
    ],
    compositionDetails: ['Esterno: crepe premium raffinato', 'Completamente foderato'],
    careDetails: [
      'Lavaggio a secco professionale consigliato',
      'Lavaggio a mano in acqua fredda se necessario',
      'Non candeggiare',
      'Non asciugare in asciugatrice',
    ],
    fitAndSizeDetails: [
      'Silhouette delicatamente scolpita con leggero ampliamento',
      'Lunghezza: 118 cm (taglia M)',
      'Altezza modella: 155 cm',
      'La modella indossa taglia XS',
    ],
    originDetails: ['Realizzato ad Abu Dhabi, Emirati Arabi Uniti'],
    faq: [
      {
        question: 'Cosa rende distintivo l’Hampstead Dress?',
        answer:
          'Combina scollo drappeggiato, silhouette scolpita, tasche nascoste e finitura Al Talli al punto vita — patrimonio emiratino UNESCO reinterpretato ad Abu Dhabi.',
      },
      {
        question: 'Si può indossare sotto un’abaya?',
        answer:
          'Sì. Progettato da solo o sotto abaya; si abbina a Covent Garden, Marylebone, Kensington e Belgravia Abaya.',
      },
      {
        question: 'Cos’è l’Al Talli sull’Hampstead Dress?',
        answer:
          'Broderia tessuta emiratina tradizionale UNESCO. La finitura Al Talli di Bint Saeed completa il punto vita.',
      },
      {
        question: 'Per chi è stato creato?',
        answer:
          'Per donne che apprezzano eleganza senza tempo e vestibilità eccezionale — nel GCC, Europa e oltre.',
      },
      {
        question: 'È facile da curare?',
        answer: 'Lavaggio a secco consigliato; lavaggio a mano a freddo se necessario. No candeggio.',
      },
    ],
  },
  es: {
    introParagraphParts: [
      [{ type: 'text', value: '«Este es exactamente el tipo de vestido que estabas buscando.»' }],
      [
        {
          type: 'text',
          value:
            'El Hampstead Dress fue creado para mujeres que aprecian la elegancia atemporal, el ajuste excepcional y la simplicidad refinada. Totalmente forrado y confeccionado en un crepé premium refinado, su escote drapeado elegante, silueta suavemente esculpida y leve acampanado crean un vestido que se mueve con belleza en cada paso. Diseñado para llevarse con confianza solo o bajo una abaya.',
        },
      ],
      alTalliParagraph(
        'Disponible en Negro profundo, Burdeos y Azul marino, cada detalle ha sido cuidadosamente considerado. Bolsillos laterales ocultos en las costuras y cintura acabada con el ',
        ' tejido distintivo de Bint Saeed. Reconocido por la UNESCO como Patrimonio Cultural Inmaterial, el Al Talli es una de las artesanías tradicionales emiratíes más preciadas.',
      ),
      pairingParagraph(
        'Diseñado como base del guardarropa Bint Saeed, el Hampstead Dress combina maravillosamente con la ',
        ', y la ',
        ', creando siluetas en capas refinadas.',
      ),
      [
        {
          type: 'text',
          value:
            'Ya sea en Abu Dabi, Dubái, Riad, Doha, Kuwait, Mascate, Londres, París, Milán o Toronto, el Hampstead Dress refleja la filosofía de Bint Saeed de llevar el patrimonio hacia adelante mediante un diseño atemporal.',
        },
      ],
    ],
    productDetails: [
      'Escote drapeado elegante con silueta suavemente esculpida',
      'Totalmente forrado',
      'Crepé premium refinado',
      'Bolsillos laterales ocultos',
      'Para llevar solo o bajo abaya',
      'Combina con abayas Covent Garden, Marylebone, Kensington y Belgravia',
      'Negro profundo, Burdeos y Azul marino',
    ],
    compositionDetails: ['Exterior: crepé premium refinado', 'Totalmente forrado'],
    careDetails: [
      'Limpieza en seco profesional recomendada',
      'Lavado a mano en agua fría si es necesario',
      'No usar lejía',
      'No secar en secadora',
    ],
    fitAndSizeDetails: [
      'Silueta suavemente esculpida',
      'Largo: 118 cm (talla M)',
      'Altura modelo: 155 cm',
      'La modelo lleva talla XS',
    ],
    originDetails: ['Hecho en Abu Dabi, Emiratos Árabes Unidos'],
    faq: [
      {
        question: '¿Qué distingue al Hampstead Dress?',
        answer:
          'Combina escote drapeado, silueta esculpida, bolsillos ocultos y ribete Al Talli en la cintura — patrimonio emiratí UNESCO reinterpretado en Abu Dabi.',
      },
      {
        question: '¿Se puede llevar bajo una abaya?',
        answer: 'Sí. Diseñado para llevarse solo o bajo abaya; combina con Covent Garden, Marylebone, Kensington y Belgravia.',
      },
      {
        question: '¿Qué es el Al Talli en el Hampstead Dress?',
        answer: 'Artesanía de bordado tejido emiratí reconocida por la UNESCO; el ribete Al Talli de Bint Saeed acaba la cintura.',
      },
      {
        question: '¿Para quién fue creado?',
        answer: 'Para mujeres que aprecian elegancia atemporal y ajuste excepcional en el Golfo y en el mundo.',
      },
      {
        question: '¿Es fácil de cuidar?',
        answer: 'Limpieza en seco recomendada; lavado a mano en frío si es necesario.',
      },
    ],
  },
  ru: {
    introParagraphParts: [
      [{ type: 'text', value: '«Это именно то платье, которое вы искали.»' }],
      [
        {
          type: 'text',
          value:
            'Платье Hampstead создано для женщин, ценящих вневременную элегантность, исключительную посадку и утончённую простоту. Полностью на подкладке из изысканного премиального крепа, с элегантным драпированным вырезом, мягко скульптурным силуэтом и лёгким клёшем — оно прекрасно движется с каждым шагом. Создано для уверенного ношения самостоятельно или под абайей.',
        },
      ],
      alTalliParagraph(
        'Доступно в глубоком чёрном, бордовом и тёмно-синем. Скрытые боковые карманы и талия с отделкой ',
        ' от Bint Saeed. Al Talli признан ЮНЕСКО нематериальным культурным наследием — одно из самых ценных эмиратских ремёсел.',
      ),
      pairingParagraph(
        'Как основа гардероба Bint Saeed, Hampstead Dress прекрасно сочетается с ',
        ', и ',
        ', создавая изысканные многослойные силуэты.',
      ),
      [
        {
          type: 'text',
          value:
            'В Абу-Даби, Дубае, Эр-Рияде, Дохе, Кувейте, Маскате, Лондоне, Париже, Милане или Торонто — Hampstead Dress отражает философию Bint Saeed нести наследие вперёд через вневременной дизайн.',
        },
      ],
    ],
    productDetails: [
      'Элегантный драпированный вырез, мягко скульптурный силуэт',
      'Полная подкладка',
      'Изысканный премиальный креп',
      'Скрытые боковые карманы',
      'Для ношения самостоятельно или под абайей',
      'Сочетается с абайями Covent Garden, Marylebone, Kensington и Belgravia',
      'Глубокий чёрный, бордовый, тёмно-синий',
    ],
    compositionDetails: ['Верх: премиальный креп', 'Полная подкладка'],
    careDetails: [
      'Рекомендуется профессиональная химчистка',
      'Деликатная ручная стирка в холодной воде при необходимости',
      'Не отбеливать',
      'Не сушить в сушилке',
    ],
    fitAndSizeDetails: [
      'Мягко скульптурный силуэт',
      'Длина: 118 см (размер M)',
      'Рост модели: 155 см',
      'Модель носит XS',
    ],
    originDetails: ['Сделано в Абу-Даби, ОАЭ'],
    faq: [
      {
        question: 'Чем отличается Hampstead Dress?',
        answer: 'Драпированный вырез, скульптурный силуэт, скрытые карманы и Al Talli на талии — наследие ЮНЕСКО из Абу-Даби.',
      },
      {
        question: 'Можно носить под абайей?',
        answer: 'Да. Сочетается с Covent Garden, Marylebone, Kensington и Belgravia Abaya.',
      },
      {
        question: 'Что такое Al Talli на этом платье?',
        answer: 'Традиционная эмиратская тканая вышивка ЮНЕСКО; отделка Bint Saeed завершает талию.',
      },
      {
        question: 'Для кого создано?',
        answer: 'Для женщин, ценящих вневременную элегантность — в ОАЭ, странах Залива и по всему миру.',
      },
      {
        question: 'Легко ли ухаживать?',
        answer: 'Рекомендуется химчистка; деликатная ручная стирка при необходимости.',
      },
    ],
  },
  zh: {
    introParagraphParts: [
      [{ type: 'text', value: '「这正是你一直在寻找的那类连衣裙。」' }],
      [
        {
          type: 'text',
          value:
            'Hampstead Dress 为欣赏永恒优雅、卓越版型与精致简约的女性而创。全里衬精制高端绉绸，优雅垂坠领口、柔和雕塑廓形与轻微伞摆，令每一步都灵动优美。可自信单穿或叠穿于长袍之下，成为精心衣橱中最百搭的单品之一。',
        },
      ],
      alTalliParagraph(
        '提供深黑色、酒红色与海军蓝。隐藏侧缝口袋，腰际饰以 Bint Saeed 标志性 ',
        ' 编织饰边。Al Talli 为联合国教科文组织非物质文化遗产，是阿联酋最珍贵的传统工艺之一。',
      ),
      pairingParagraph(
        '作为 Bint Saeed 衣橱基础款，Hampstead Dress 与 ',
        '、',
        ' 等长袍叠穿极为和谐，由内而外每一层细节皆经深思熟虑。',
      ),
      [
        {
          type: 'text',
          value:
            '无论在阿布扎比、迪拜、利雅得、多哈、科威特城、马斯喀特、伦敦、巴黎、米兰或多伦多，Hampstead Dress 体现 Bint Saeed 以永恒设计传承遗产的理念，伴您优雅出行。',
        },
      ],
    ],
    productDetails: [
      '优雅垂坠领口，柔和雕塑廓形与轻微伞摆',
      '全里衬，舒适精致',
      '精制高端绉绸',
      '隐藏侧缝口袋',
      '可单穿或叠穿长袍',
      '搭配 Covent Garden、Marylebone、Kensington、Belgravia 长袍',
      '深黑色、酒红色、海军蓝',
    ],
    compositionDetails: ['外层：精制高端绉绸', '全里衬'],
    careDetails: ['建议专业干洗', '必要时冷水轻柔手洗', '不可漂白', '不可滚筒烘干'],
    fitAndSizeDetails: ['柔和雕塑廓形', '裙长：118 厘米（M 码）', '模特身高：155 厘米', '模特穿着 XS 码'],
    originDetails: ['阿联酋阿布扎比制造'],
    faq: [
      {
        question: 'Hampstead Dress 有何独特之处？',
        answer: '垂坠领口、雕塑廓形、隐藏口袋与腰际 Al Talli 饰边 — 阿布扎比当代诠释的联合国教科文组织阿联酋传承。',
      },
      {
        question: '可以穿在长袍里面吗？',
        answer: '可以。专为单穿或叠穿长袍设计，搭配 Covent Garden、Marylebone、Kensington、Belgravia 长袍。',
      },
      {
        question: '腰际的 Al Talli 是什么？',
        answer: '联合国教科文组织认可的传统阿联酋编织刺绣；Bint Saeed 标志性饰边完成腰际细节。',
      },
      {
        question: '适合谁？',
        answer: '欣赏永恒优雅与卓越版型的女性 — 海湾及全球衣橱。',
      },
      {
        question: '易于护理吗？',
        answer: '建议干洗；必要时冷水手洗，不可漂白或烘干。',
      },
    ],
  },
  de: {
    introParagraphParts: [
      [{ type: 'text', value: '„Genau diese Art von Kleid haben Sie gesucht.“' }],
      [
        {
          type: 'text',
          value:
            'Das Hampstead Dress wurde für Frauen geschaffen, die zeitlose Eleganz, außergewöhnliche Passform und raffinierte Schlichtheit schätzen. Vollgefüttert aus raffiniertem Premium-Krepp, mit elegant drapiertem Ausschnitt, sanft skulpturierter Silhouette und leichtem Schwung — es bewegt sich wunderschön bei jedem Schritt. Für selbstbewusstes Tragen allein oder unter einer Abaya.',
        },
      ],
      alTalliParagraph(
        'In Tiefschwarz, Burgunder und Marineblau. Versteckte Seitennähte-Taschen; Taillenabschluss mit Bint Saeed ',
        '-Webbesatz. Al Talli ist UNESCO-Weltkulturerbe — eines der wertvollsten emiratischen Handwerke.',
      ),
      pairingParagraph(
        'Als Grundlage der Bint Saeed-Garderobe kombiniert das Hampstead Dress wunderbar mit der ',
        ', und der ',
        ' — raffinierte Layering-Silhouetten von innen nach außen durchdacht.',
      ),
      [
        {
          type: 'text',
          value:
            'In Abu Dhabi, Dubai, Riad, Doha, Kuwait, Maskat, London, Paris, Mailand oder Toronto — das Hampstead Dress trägt Bint Saeeds Philosophie, Erbe durch zeitloses Design weiterzuführen.',
        },
      ],
    ],
    productDetails: [
      'Elegant drapierter Ausschnitt, sanft skulpturierte Silhouette',
      'Vollgefüttert',
      'Raffinierter Premium-Krepp',
      'Versteckte Seitennaht-Taschen',
      'Allein oder unter Abaya tragbar',
      'Kombiniert mit Covent Garden, Marylebone, Kensington, Belgravia Abaya',
      'Tiefschwarz, Burgunder, Marineblau',
    ],
    compositionDetails: ['Außenmaterial: Premium-Krepp', 'Vollgefüttert'],
    careDetails: [
      'Professionelle chemische Reinigung empfohlen',
      'Schonende Handwäsche in kaltem Wasser bei Bedarf',
      'Nicht bleichen',
      'Nicht im Trockner trocknen',
    ],
    fitAndSizeDetails: [
      'Sanft skulpturierte Silhouette',
      'Länge: 118 cm (Größe M)',
      'Modellgröße: 155 cm',
      'Modell trägt XS',
    ],
    originDetails: ['Hergestellt in Abu Dhabi, VAE'],
    faq: [
      {
        question: 'Was macht das Hampstead Dress besonders?',
        answer: 'Drapierter Ausschnitt, skulpturierte Silhouette, versteckte Taschen und Al-Talli-Taille — UNESCO-Erbe aus Abu Dhabi.',
      },
      {
        question: 'Unter einer Abaya tragbar?',
        answer: 'Ja. Mit Covent Garden, Marylebone, Kensington und Belgravia Abaya kombinierbar.',
      },
      {
        question: 'Was ist Al Talli hier?',
        answer: 'Traditionelles emiratisches Webstickerei-Erbe der UNESCO; Bint Saeed-Besatz an der Taille.',
      },
      {
        question: 'Für wen wurde es geschaffen?',
        answer: 'Für Frauen, die zeitlose Eleganz schätzen — im Golf und weltweit.',
      },
      {
        question: 'Pflegeleicht?',
        answer: 'Chemische Reinigung empfohlen; Handwäsche in kaltem Wasser bei Bedarf.',
      },
    ],
  },
  nl: {
    introParagraphParts: [
      [{ type: 'text', value: '“Dit is precies het soort jurk dat u zocht.”' }],
      [
        {
          type: 'text',
          value:
            'De Hampstead Dress is gemaakt voor vrouwen die tijdloze elegantie, uitzonderlijke pasvorm en verfijnde eenvoud waarderen. Volledig gevoerd in verfijnd premium crêpe, met elegant gedrapeerde halslijn, zacht gebeeldhouwde silhouet en lichte flare — beweegt prachtig bij elke stap. Ontworpen om vol vertrouwen solo of onder een abaya gedragen te worden.',
        },
      ],
      alTalliParagraph(
        'In diepzwart, bordeaux en marineblauw. Verborgen zijnaadzakken; taille afgewerkt met Bint Saeed ',
        '-weefwerk. Al Talli is UNESCO-immaterieel erfgoed — een van de meest gekoesterde Emiratische ambachten.',
      ),
      pairingParagraph(
        'Als fundament van de Bint Saeed-garderobe combineert de Hampstead Dress prachtig met de ',
        ', en de ',
        ' — verfijnde gelaagde silhouetten van binnen naar buiten doordacht.',
      ),
      [
        {
          type: 'text',
          value:
            'In Abu Dhabi, Dubai, Riyad, Doha, Koeweit, Muscat, Londen, Parijs, Milaan of Toronto — de Hampstead Dress draagt Bint Saeeds filosofie van erfgoed door tijdloos design.',
        },
      ],
    ],
    productDetails: [
      'Elegante gedrapeerde halslijn, zacht gebeeldhouwd silhouet',
      'Volledig gevoerd',
      'Verfijnd premium crêpe',
      'Verborgen zijnaadzakken',
      'Solo of onder abaya',
      'Combineert met Covent Garden, Marylebone, Kensington, Belgravia abaya',
      'Diepzwart, bordeaux, marineblauw',
    ],
    compositionDetails: ['Buitenkant: premium crêpe', 'Volledig gevoerd'],
    careDetails: [
      'Professionele stomerij aanbevolen',
      'Zacht handwas in koud water indien nodig',
      'Niet bleken',
      'Niet in droger',
    ],
    fitAndSizeDetails: [
      'Zacht gebeeldhouwd silhouet',
      'Lengte: 118 cm (maat M)',
      'Model lengte: 155 cm',
      'Model draagt XS',
    ],
    originDetails: ['Gemaakt in Abu Dhabi, VAE'],
    faq: [
      {
        question: 'Wat maakt de Hampstead Dress bijzonder?',
        answer: 'Gedrapeerde hals, gebeeldhouwd silhouet, verborgen zakken en Al Talli-taille — UNESCO-erfgoed uit Abu Dhabi.',
      },
      {
        question: 'Onder een abaya te dragen?',
        answer: 'Ja. Combineert met Covent Garden, Marylebone, Kensington en Belgravia abaya.',
      },
      {
        question: 'Wat is Al Talli hier?',
        answer: 'Traditioneel Emiratisch weefwerk erkend door UNESCO; Bint Saeed-afwerking aan de taille.',
      },
      {
        question: 'Voor wie gemaakt?',
        answer: 'Vrouwen die tijdloze elegantie waarderen — in de Golf en wereldwijd.',
      },
      {
        question: 'Makkelijk te onderhouden?',
        answer: 'Stomerij aanbevolen; handwas in koud water indien nodig.',
      },
    ],
  },
  pt: {
    introParagraphParts: [
      [{ type: 'text', value: '«Este é exatamente o tipo de vestido que você procurava.»' }],
      [
        {
          type: 'text',
          value:
            'O Hampstead Dress foi criado para mulheres que apreciam elegância intemporal, caimento excecional e simplicidade refinada. Totalmente forrado em crepe premium refinado, com decote drapeado elegante, silhueta suavemente esculpida e leve evasé — move-se lindamente a cada passo. Concebido para ser usado com confiança sozinho ou sob abaya.',
        },
      ],
      alTalliParagraph(
        'Em Preto profundo, Borgonha e Azul-marinho. Bolsos laterais ocultos; cintura acabada com o ',
        ' tecido distintivo Bint Saeed. Al Talli é património imaterial da UNESCO — uma das artes tradicionais emirati mais preciosas.',
      ),
      pairingParagraph(
        'Como base do guarda-roupa Bint Saeed, o Hampstead Dress combina lindamente com a ',
        ', e a ',
        ', criando silhuetas em camadas refinadas.',
      ),
      [
        {
          type: 'text',
          value:
            'Em Abu Dhabi, Dubai, Riade, Doha, Kuwait, Mascate, Londres, Paris, Milão ou Toronto — o Hampstead Dress reflete a filosofia da Bint Saeed de levar o património adiante através de design intemporal.',
        },
      ],
    ],
    productDetails: [
      'Decote drapeado elegante, silhueta suavemente esculpida',
      'Totalmente forrado',
      'Crepe premium refinado',
      'Bolsos laterais ocultos',
      'Para usar sozinho ou sob abaya',
      'Combina com abayas Covent Garden, Marylebone, Kensington e Belgravia',
      'Preto profundo, Borgonha, Azul-marinho',
    ],
    compositionDetails: ['Exterior: crepe premium refinado', 'Totalmente forrado'],
    careDetails: [
      'Limpeza a seco profissional recomendada',
      'Lavagem à mão em água fria se necessário',
      'Não usar lixívia',
      'Não secar na máquina',
    ],
    fitAndSizeDetails: [
      'Silhueta suavemente esculpida',
      'Comprimento: 118 cm (tamanho M)',
      'Altura da modelo: 155 cm',
      'Modelo usa XS',
    ],
    originDetails: ['Feito em Abu Dhabi, Emirados Árabes Unidos'],
    faq: [
      {
        question: 'O que distingue o Hampstead Dress?',
        answer: 'Decote drapeado, silhueta esculpida, bolsos ocultos e Al Talli na cintura — património UNESCO de Abu Dhabi.',
      },
      {
        question: 'Pode usar-se sob abaya?',
        answer: 'Sim. Combina com Covent Garden, Marylebone, Kensington e Belgravia Abaya.',
      },
      {
        question: 'O que é Al Talli neste vestido?',
        answer: 'Artesanato de bordado tecido emirati UNESCO; acabamento Bint Saeed na cintura.',
      },
      {
        question: 'Para quem foi criado?',
        answer: 'Mulheres que apreciam elegância intemporal — no Golfo e no mundo.',
      },
      {
        question: 'É fácil de cuidar?',
        answer: 'Limpeza a seco recomendada; lavagem à mão em frio se necessário.',
      },
    ],
  },
  id: {
    introParagraphParts: [
      [{ type: 'text', value: '"Ini persis gaun yang selama ini Anda cari."' }],
      [
        {
          type: 'text',
          value:
            'Hampstead Dress dibuat untuk wanita yang menghargai keanggunan abadi, potongan luar biasa, dan kesederhanaan halus. Sepenuhnya berlapis dan dibuat dari krepe premium halus, dengan garis leher drape elegan, siluet lembut terbentuk, dan flare ringan — bergerak indah di setiap langkah. Dirancang untuk dipakai dengan percaya diri sendiri atau di bawah abaya.',
        },
      ],
      alTalliParagraph(
        'Tersedia dalam Hitam pekat, Burgundy, dan Navy Blue. Saku samping tersembunyi; pinggang dihiasi trim tenun ',
        ' signature Bint Saeed. Al Talli diakui UNESCO sebagai Warisan Budaya Takbenda — salah satu kerajinan tradisional Emirati paling berharga.',
      ),
      pairingParagraph(
        'Sebagai fondasi garderobe Bint Saeed, Hampstead Dress berpadu indah dengan ',
        ', dan ',
        ', menciptakan siluet berlapis yang halus.',
      ),
      [
        {
          type: 'text',
          value:
            'Di Abu Dhabi, Dubai, Riyadh, Doha, Kuwait City, Muscat, London, Paris, Milan, atau Toronto — Hampstead Dress mencerminkan filosofi Bint Saeed membawa warisan melalui desain abadi.',
        },
      ],
    ],
    productDetails: [
      'Garis leher drape elegan, siluet lembut terbentuk',
      'Sepenuhnya berlapis',
      'Krepe premium halus',
      'Saku samping tersembunyi',
      'Untuk dipakai sendiri atau di bawah abaya',
      'Berpadu dengan abaya Covent Garden, Marylebone, Kensington, Belgravia',
      'Hitam pekat, Burgundy, Navy Blue',
    ],
    compositionDetails: ['Luar: krepe premium halus', 'Sepenuhnya berlapis'],
    careDetails: [
      'Pembersihan kering profesional disarankan',
      'Cuci tangan lembut dengan air dingin jika diperlukan',
      'Jangan pemutih',
      'Jangan mesin pengering',
    ],
    fitAndSizeDetails: [
      'Siluet lembut terbentuk',
      'Panjang: 118 cm (ukuran M)',
      'Tinggi model: 155 cm',
      'Model memakai XS',
    ],
    originDetails: ['Dibuat di Abu Dhabi, Uni Emirat Arab'],
    faq: [
      {
        question: 'Apa yang membuat Hampstead Dress istimewa?',
        answer: 'Garis leher drape, siluet terbentuk, saku tersembunyi, dan Al Talli di pinggang — warisan UNESCO dari Abu Dhabi.',
      },
      {
        question: 'Bisakah dipakai di bawah abaya?',
        answer: 'Ya. Berpadu dengan abaya Covent Garden, Marylebone, Kensington, dan Belgravia.',
      },
      {
        question: 'Apa itu Al Talli pada gaun ini?',
        answer: 'Kerajinan sulam tenun tradisional Emirati UNESCO; trim Bint Saeed di pinggang.',
      },
      {
        question: 'Untuk siapa dibuat?',
        answer: 'Wanita yang menghargai keanggunan abadi — di GCC dan dunia.',
      },
      {
        question: 'Mudah dirawat?',
        answer: 'Dry clean disarankan; cuci tangan dingin jika perlu.',
      },
    ],
  },
  ms: {
    introParagraphParts: [
      [{ type: 'text', value: '"Inilah jenis gaun yang selama ini anda cari."' }],
      [
        {
          type: 'text',
          value:
            'Hampstead Dress direka untuk wanita yang menghargai keanggunan abadi, potongan luar biasa, dan kesederhanaan halus. Sepenuhnya berlapik dan dihasilkan daripada krepe premium halus, dengan garis leher drape elegan, siluet lembut terbentuk, dan kembang lembut — bergerak indah pada setiap langkah. Direka untuk dipakai dengan yakin sendiri atau di bawah abaya.',
        },
      ],
      alTalliParagraph(
        'Tersedia dalam Hitam pekat, Burgundy, dan Navy Blue. Poket sisi tersembunyi; pinggang dihiasi hiasan tenunan ',
        ' signature Bint Saeed. Al Talli diiktiraf UNESCO sebagai Warisan Budaya Tidak Ketara — salah satu kraf tradisional Emirati paling berharga.',
      ),
      pairingParagraph(
        'Sebagai asas almari Bint Saeed, Hampstead Dress serasi dengan ',
        ', dan ',
        ', mencipta siluet berlapis yang halus.',
      ),
      [
        {
          type: 'text',
          value:
            'Sama ada di Abu Dhabi, Dubai, Riyadh, Doha, Kuwait City, Muscat, London, Paris, Milan atau Toronto — Hampstead Dress mencerminkan falsafah Bint Saeed membawa warisan melalui reka bentuk abadi.',
        },
      ],
    ],
    productDetails: [
      'Garis leher drape elegan, siluet lembut terbentuk',
      'Sepenuhnya berlapik',
      'Krepe premium halus',
      'Poket sisi tersembunyi',
      'Untuk dipakai sendiri atau di bawah abaya',
      'Serasi dengan abaya Covent Garden, Marylebone, Kensington, Belgravia',
      'Hitam pekat, Burgundy, Navy Blue',
    ],
    compositionDetails: ['Luar: krepe premium halus', 'Sepenuhnya berlapik'],
    careDetails: [
      'Pembersihan kering profesional disyorkan',
      'Basuh tangan lembut dengan air sejuk jika perlu',
      'Jangan peluntur',
      'Jangan pengering mesin',
    ],
    fitAndSizeDetails: [
      'Siluet lembut terbentuk',
      'Panjang: 118 cm (saiz M)',
      'Tinggi model: 155 cm',
      'Model memakai XS',
    ],
    originDetails: ['Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu'],
    faq: [
      {
        question: 'Apakah yang membezakan Hampstead Dress?',
        answer: 'Garis leher drape, siluet terbentuk, poket tersembunyi, dan Al Talli di pinggang — warisan UNESCO dari Abu Dhabi.',
      },
      {
        question: 'Bolehkah dipakai di bawah abaya?',
        answer: 'Ya. Serasi dengan abaya Covent Garden, Marylebone, Kensington, dan Belgravia.',
      },
      {
        question: 'Apakah Al Talli pada gaun ini?',
        answer: 'Kraf sulaman tenunan tradisional Emirati UNESCO; hiasan Bint Saeed di pinggang.',
      },
      {
        question: 'Untuk siapa direka?',
        answer: 'Wanita yang menghargai keanggunan abadi — di GCC dan seluruh dunia.',
      },
      {
        question: 'Mudah dijaga?',
        answer: 'Dry clean disyorkan; basuh tangan sejuk jika perlu.',
      },
    ],
  },
}

export function isHampsteadDressSlug(slug: string): boolean {
  return slug.toLowerCase() === HAMPSTEAD_DRESS_SLUG
}

export function getHampsteadDressPdpPack(locale: AppLocale = 'en'): LocalePack {
  return LOCALE_PACKS[locale] ?? LOCALE_PACKS.en
}

export function getHampsteadDressPdpFaq(locale: AppLocale = 'en'): ProductFaqItem[] {
  return appendAlTalliCareFaq(getHampsteadDressPdpPack(locale).faq, HAMPSTEAD_DRESS_SLUG, locale)
}

export function buildHampsteadDressPdpContent(locale: AppLocale = 'en'): ProductPdpContent {
  const pack = getHampsteadDressPdpPack(locale)
  return {
    introParagraphParts: pack.introParagraphParts,
    introParagraphs: pdpIntroParagraphsToPlainText(pack.introParagraphParts),
    productDetails: [...pack.productDetails],
    productDetailGroups: [getHouseCodesDetailGroup('al-talli', locale)],
    compositionDetails: [...pack.compositionDetails],
    careDetails: [...pack.careDetails],
    fitAndSizeDetails: [...pack.fitAndSizeDetails],
    originDetails: [...pack.originDetails],
    faq: getHampsteadDressPdpFaq(locale),
  }
}
