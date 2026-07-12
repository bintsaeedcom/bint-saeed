import type { AppLocale } from '@/lib/i18n/routing'
import { LOCALE_GEO } from '@/lib/i18n/brandProperNouns'
import type { ProductFaqItem, ProductSchemaFacts } from '@/lib/products/productSchemaMeta'

const G = LOCALE_GEO

export type KaftanSlug = 'mayfair-kaftan' | 'nothing-hill-kaftan'

const KAFTAN_SLUG_SET = new Set<string>(['mayfair-kaftan', 'nothing-hill-kaftan'])

export function isKaftanSlug(slug: string): slug is KaftanSlug {
  return KAFTAN_SLUG_SET.has(slug)
}

const CARE: Record<AppLocale, string> = {
  en: 'Professional dry clean recommended',
  ar: 'يُوصى بالتنظيف الجاف الاحترافي',
  fr: 'Nettoyage à sec professionnel recommandé',
  it: 'Lavaggio a secco professionale consigliato',
  es: 'Se recomienda limpieza en seco profesional',
  ru: 'Рекомендуется профессиональная химчистка',
  zh: '建议专业干洗',
  de: 'Professionelle chemische Reinigung empfohlen',
  nl: 'Professionele stomerij aanbevolen',
  pt: 'Limpeza a seco profissional recomendada',
  id: 'Pembersihan kering profesional disarankan',
  ms: 'Pembersihan kering profesional disyorkan',
}

const INNER_DRESS: Record<AppLocale, string> = {
  en: 'Attached inner dress',
  ar: 'فستان داخلي مرفق',
  fr: 'Robe intérieure intégrée',
  it: 'Abito interno integrato',
  es: 'Vestido interior integrado',
  ru: 'Вшитое внутреннее платье',
  zh: '附设内衬连衣裙',
  de: 'Integriertes Innenkleid',
  nl: 'Vastgenaaid binnenjurkje',
  pt: 'Vestido interior integrado',
  id: 'Gaun dalam terpasang',
  ms: 'Gaun dalam terpasang',
}

const KAFTAN_AUDIENCE: Record<AppLocale, string> = {
  en: 'Women seeking luxury occasion wear, premium occasion wear, elegant travel wardrobes, contemporary kaftans, and refined event dressing.',
  ar: 'نساء يبحثن عن أزياء فاخرة للمناسبات، أزياء راقية للمناسبات، وخزانة سفر أنيقة، وقفاطين معاصرة، وإطلالات مناسبات راقية.',
  fr: 'Femmes en quête de tenues de cérémonie de luxe, tenues de cérémonie premium, garde-robes de voyage élégantes, caftans contemporains et habillage raffiné pour les événements.',
  it: 'Donne in cerca di abbigliamento da cerimonia di lusso, abbigliamento da cerimonia premium, guardaroba da viaggio eleganti, kaftan contemporanei e styling raffinato per eventi.',
  es: 'Mujeres que buscan ropa de ocasión de lujo, ropa de ocasión premium, armarios de viaje elegantes, caftanes contemporáneos y vestir refinado para eventos.',
  ru: 'Женщины, ищущие роскошную и премиальную одежду для особых случаев, элегантный дорожный гардероб, современные кафтаны и изысканные образы для мероприятий.',
  zh: '追求奢华场合着装、高端场合着装、优雅旅行衣橱、当代长袍与精致活动穿搭的女性。',
  de: 'Frauen, die luxuriöse und Premium-Anlassmode, elegante Reisegarderoben, zeitgenössische Kaftane und raffinierte Event-Looks suchen.',
  nl: 'Vrouwen die luxe gelegenheidskleding, premium gelegenheidskleding, elegante reisgarderobes, eigentijdse kaftans en verfijnde event-styling zoeken.',
  pt: 'Mulheres que procuram vestuário de ocasião de luxo, vestuário de ocasião premium, guarda-roupa de viagem elegante, kaftans contemporâneos e styling refinado para eventos.',
  id: 'Wanita yang mencari busana acara mewah, busana acara premium, garderobe perjalanan elegan, kaftan kontemporer, dan berpakaian acara yang halus.',
  ms: 'Wanita yang mencari pakaian majlis mewah, pakaian majlis premium, almari perjalanan elegan, kaftan kontemporari, dan gaya acara yang halus.',
}

type KaftanLocalePack = {
  pageTitle: string
  metaDescription: string
  facts: Omit<ProductSchemaFacts, 'faq' | 'madeIn'>
  faq: ProductFaqItem[]
}

const MAYFAIR: Record<AppLocale, KaftanLocalePack> = {
  en: {
    pageTitle: 'Mayfair Kaftan | Deep Maroon Chiffon Occasion Kaftan | Bint Saeed',
    metaDescription:
      'Mayfair Kaftan. Deep Maroon chiffon kaftan featuring a V-neckline, flowing silhouette, attached inner dress and Bint Saeed signature gold-tone Monogram. Designed in Abu Dhabi, United Arab Emirates by Bint Saeed.',
    facts: {
      neckline: 'V-neckline',
      fit: 'One-size silhouette with a fluid, relaxed fit. Hidden internal ties allow the Mayfair Kaftan to be worn loose for a flowing effect or adjusted to create a more defined shape while maintaining graceful movement.',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.en,
      stylingDetail:
        'Attached scarf detail featuring the Bint Saeed signature gold-tone Monogram pin and hidden internal tie construction.',
      suitableFor:
        'Weddings, engagement celebrations, Eid gatherings, formal dinners, destination events, cultural occasions, luxury travel, premium travel, and elegant daytime dressing.',
      care: CARE.en,
    },
    faq: [
      {
        question: 'Is the Mayfair Kaftan suitable for weddings, Eid, and special occasions?',
        answer:
          'Yes. The Mayfair Kaftan is designed for weddings, engagement celebrations, Eid gatherings, formal dinners, destination events, and special occasions. Crafted from Deep Maroon crepe chiffon, its flowing silhouette offers elegance, comfort, and graceful movement for both daytime and evening occasions.',
      },
      {
        question: 'Is the Mayfair Kaftan one size?',
        answer:
          'Yes. The Mayfair Kaftan is designed as a one-size silhouette with a fluid, relaxed fit. Hidden internal ties allow it to be worn loose for an effortless drape or adjusted to create a more defined shape while maintaining comfort and ease of movement.',
      },
      {
        question: 'What makes the Mayfair Kaftan different from other kaftans?',
        answer:
          'The Mayfair Kaftan combines a flowing one-size silhouette, hidden internal ties, an attached scarf detail, and the Bint Saeed signature gold-tone Monogram pin. Crafted from Deep Maroon crepe chiffon and designed in Abu Dhabi, United Arab Emirates, it offers versatile styling, graceful movement, and a timeless approach to occasion dressing.',
      },
    ],
  },
  ar: {
    pageTitle: 'قفطان Mayfair | قفطان مناسبات شيفون عنابي غامق | Bint Saeed',
    metaDescription:
      'قفطان Mayfair. قفطان شيفون عنابي غامق بخط عنق V، وقصّة انسيابية، وفستان داخلي مرفق، وشعار Bint Saeed الذهبي المميز. صُمم في أبوظبي، الإمارات العربية المتحدة من قِبل Bint Saeed.',
    facts: {
      neckline: 'خط عنق V',
      fit: 'قصّة مقاس واحد بقصّة مريحة وانسيابية. تسمح الأربطة الداخلية المخفية بارتداء قفطان Mayfair بشكل فضفاض لتأثير انسيابي، أو بضبطه لتشكيل أكثر تحديداً مع الحفاظ على حركة رشيقة.',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.ar,
      stylingDetail:
        'وشاح مرفق يتضمن دبوس الشعار الذهبي المميز من Bint Saeed مع أربطة داخلية مخفية.',
      suitableFor:
        'الأعراس، احتفالات الخطوبة، تجمعات العيد، العشاء الرسمي، مناسبات الوجهات، المناسبات الثقافية، السفر الفاخر، والإطلالات النهارية الأنيقة.',
      care: CARE.ar,
    },
    faq: [
      {
        question: 'هل يناسب قفطان Mayfair الأعراس والعيد والمناسبات الخاصة؟',
        answer:
          'نعم. صُمم قفطان Mayfair للأعراس، واحتفالات الخطوبة، وتجمعات العيد، والعشاء الرسمي، ومناسبات الوجهات، والمناسبات الخاصة. مصنوع من شيفون كريب عنابي غامق، ويمنح قصّته الانسيابية أناقة وراحة وحركة رشيقة في المناسبات النهارية والمسائية.',
      },
      {
        question: 'هل قفطان Mayfair بمقاس واحد؟',
        answer:
          'نعم. صُمم قفطان Mayfair بقصّة مقاس واحد بقصّة مريحة وانسيابية. تسمح الأربطة الداخلية المخفية بارتدائه بشكل فضفاض لتدلٍّ سهل، أو بضبطه لتشكيل أكثر تحديداً مع الحفاظ على الراحة وسهولة الحركة.',
      },
      {
        question: 'ما الذي يميز قفطان Mayfair عن القفاطين الأخرى؟',
        answer:
          'يجمع قفطان Mayfair بين قصّة مقاس واحد انسيابية، وأربطة داخلية مخفية، ووشاح مرفق، ودبوس الشعار الذهبي المميز من Bint Saeed. مصنوع من شيفون كريب عنابي غامق وصُمم في أبوظبي، الإمارات العربية المتحدة، ليقدّم تنسيقاً متعدد الاستخدامات وحركة رشيقة ونهجاً خالداً لأزياء المناسبات.',
      },
    ],
  },
  fr: {
    pageTitle: 'Kaftan Mayfair | Kaftan de cérémonie en mousseline bordeaux profond | Bint Saeed',
    metaDescription:
      'Kaftan Mayfair. Kaftan en mousseline bordeaux profond avec encolure en V, silhouette fluide, robe intérieure intégrée et emblème doré signature. Conçu à Abou Dabi, Émirats arabes unis par Bint Saeed.',
    facts: {
      neckline: 'Encolure en V',
      fit: 'Silhouette taille unique à coupe fluide et décontractée. Des liens internes dissimulés permettent de le porter ample pour un effet fluide ou ajusté pour une forme plus définie tout en conservant un mouvement gracieux.',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.fr,
      stylingDetail:
        'Écharpe intégrée avec l’épingle emblème dorée signature Bint Saeed et liens internes dissimulés.',
      suitableFor:
        'Mariages, fiançailles, réunions de l’Aïd, dîners formels, événements en destination, occasions culturelles, voyages de luxe et élégance de jour.',
      care: CARE.fr,
    },
    faq: [
      {
        question: 'Le kaftan Mayfair convient-il aux mariages, à l’Aïd et aux occasions spéciales ?',
        answer:
          'Oui. Le kaftan Mayfair est conçu pour les mariages, fiançailles, réunions de l’Aïd, dîners formels, événements en destination et occasions spéciales. En mousseline crêpe bordeaux profond, sa silhouette fluide offre élégance, confort et mouvement gracieux de jour comme de soir.',
      },
      {
        question: 'Le kaftan Mayfair est-il en taille unique ?',
        answer:
          'Oui. Le kaftan Mayfair est conçu en silhouette taille unique à coupe fluide et décontractée. Des liens internes dissimulés permettent un port ample ou un ajustement plus structuré tout en conservant confort et liberté de mouvement.',
      },
      {
        question: 'Qu’est-ce qui distingue le kaftan Mayfair des autres kaftans ?',
        answer:
          'Le kaftan Mayfair associe une silhouette fluide taille unique, des liens internes dissimulés, une écharpe intégrée et l’épingle emblème dorée signature Bint Saeed. En mousseline crêpe bordeaux profond, conçu à Abou Dabi, Émirats arabes unis, il offre un style polyvalent, un mouvement gracieux et une approche intemporelle de la tenue de cérémonie.',
      },
    ],
  },
  it: {
    pageTitle: 'Kaftan Mayfair | Kaftan da cerimonia in chiffon bordeaux profondo | Bint Saeed',
    metaDescription:
      'Kaftan Mayfair. Kaftan in chiffon bordeaux profondo con scollatura a V, silhouette fluida, abito interno integrato ed emblema dorato signature. Progettato ad Abu Dhabi, Emirati Arabi Uniti da Bint Saeed.',
    facts: {
      neckline: 'Scollatura a V',
      fit: 'Silhouette taglia unica con vestibilità fluida e rilassata. Lacci interni nascosti permettono di indossarlo morbido per un effetto fluente o regolato per una forma più definita mantenendo movimento aggraziato.',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.it,
      stylingDetail:
        'Sciarpa integrata con spilla emblema dorata signature Bint Saeed e lacci interni nascosti.',
      suitableFor:
        'Matrimoni, fidanzamenti, celebrazioni dell’Eid, cene formali, eventi in destinazione, occasioni culturali, viaggi di lusso ed eleganza diurna.',
      care: CARE.it,
    },
    faq: [
      {
        question: 'Il kaftan Mayfair è adatto a matrimoni, Eid e occasioni speciali?',
        answer:
          'Sì. Il kaftan Mayfair è pensato per matrimoni, fidanzamenti, celebrazioni dell’Eid, cene formali, eventi in destinazione e occasioni speciali. In chiffon crepe bordeaux profondo, la sua silhouette fluida offre eleganza, comfort e movimento aggraziato di giorno e di sera.',
      },
      {
        question: 'Il kaftan Mayfair è taglia unica?',
        answer:
          'Sì. Il kaftan Mayfair è progettato come silhouette taglia unica con vestibilità fluida e rilassata. I lacci interni nascosti permettono un drappeggio morbido o una forma più definita mantenendo comfort e libertà di movimento.',
      },
      {
        question: 'Cosa rende il kaftan Mayfair diverso dagli altri kaftan?',
        answer:
          'Il kaftan Mayfair combina silhouette fluida taglia unica, lacci interni nascosti, sciarpa integrata e spilla emblema dorata signature Bint Saeed. In chiffon crepe bordeaux profondo, progettato ad Abu Dhabi, Emirati Arabi Uniti, offre styling versatile, movimento aggraziato e un approccio senza tempo all’abbigliamento da cerimonia.',
      },
    ],
  },
  es: {
    pageTitle: 'Kaftán Mayfair | Kaftán de ocasión en chiffon burdeos profundo | Bint Saeed',
    metaDescription:
      'Kaftán Mayfair. Kaftán en chiffon burdeos profundo con escote en V, silueta fluida, vestido interior integrado y emblema dorado signature. Diseñado en Abu Dabi, Emiratos Árabes Unidos por Bint Saeed.',
    facts: {
      neckline: 'Escote en V',
      fit: 'Silueta de talla única con ajuste fluido y relajado. Los lazos internos ocultos permiten llevarlo suelto para un efecto fluido o ajustado para una forma más definida manteniendo movimiento elegante.',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.es,
      stylingDetail:
        'Pañuelo integrado con alfiler emblema dorado signature Bint Saeed y lazos internos ocultos.',
      suitableFor:
        'Bodas, compromisos, reuniones de Eid, cenas formales, eventos en destino, ocasiones culturales, viajes de lujo y elegancia diurna.',
      care: CARE.es,
    },
    faq: [
      {
        question: '¿Es el kaftán Mayfair adecuado para bodas, Eid y ocasiones especiales?',
        answer:
          'Sí. El kaftán Mayfair está diseñado para bodas, compromisos, reuniones de Eid, cenas formales, eventos en destino y ocasiones especiales. En chiffon crepe burdeos profundo, su silueta fluida ofrece elegancia, comodidad y movimiento elegante de día y de noche.',
      },
      {
        question: '¿El kaftán Mayfair es de talla única?',
        answer:
          'Sí. El kaftán Mayfair está diseñado como silueta de talla única con ajuste fluido y relajado. Los lazos internos ocultos permiten un drapeado suelto o una forma más definida manteniendo comodidad y libertad de movimiento.',
      },
      {
        question: '¿Qué hace diferente al kaftán Mayfair de otros kaftanes?',
        answer:
          'El kaftán Mayfair combina silueta fluida de talla única, lazos internos ocultos, pañuelo integrado y alfiler emblema dorado signature Bint Saeed. En chiffon crepe burdeos profundo, diseñado en Abu Dabi, Emiratos Árabes Unidos, ofrece estilo versátil, movimiento elegante y un enfoque atemporal del vestir de ocasión.',
      },
    ],
  },
  ru: {
    pageTitle: 'Кафтан Mayfair | Кафтан для особых случаев из шифона тёмно-бордового | Bint Saeed',
    metaDescription:
      'Кафтан Mayfair. Кафтан из шифона тёмно-бордового цвета с V-образным вырезом, струящимся силуэтом, вшитым внутренним платьем и фирменной золотой эмблемой. Создан в Абу-Даби, Объединённые Арабские Эмираты, Bint Saeed.',
    facts: {
      neckline: 'V-образный вырез',
      fit: 'Силуэт one size со свободной струящейся посадкой. Скрытые внутренние завязки позволяют носить кафтан свободно или скорректировать форму, сохраняя грациозное движение.',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.ru,
      stylingDetail:
        'Встроенный шарф с фирменной золотой булавкой-эмблемой Bint Saeed и скрытыми внутренними завязками.',
      suitableFor:
        'Свадьбы, помолвки, празднования Ида, формальные ужины, мероприятия в путешествиях, культурные события, роскошные поездки и элегантный дневной образ.',
      care: CARE.ru,
    },
    faq: [
      {
        question: 'Подходит ли кафтан Mayfair для свадеб, Ида и особых случаев?',
        answer:
          'Да. Кафтан Mayfair создан для свадеб, помолвок, празднований Ида, формальных ужинов, мероприятий в путешествиях и особых случаев. Из креп-шифона тёмно-бордового цвета его струящийся силуэт дарит элегантность, комфорт и грациозное движение днём и вечером.',
      },
      {
        question: 'Кафтан Mayfair — один размер?',
        answer:
          'Да. Кафтан Mayfair спроектирован как силуэт one size со свободной струящейся посадкой. Скрытые внутренние завязки позволяют носить его свободно или скорректировать форму, сохраняя комфорт и свободу движений.',
      },
      {
        question: 'Чем кафтан Mayfair отличается от других кафтанов?',
        answer:
          'Кафтан Mayfair сочетает струящийся силуэт one size, скрытые внутренние завязки, встроенный шарф и фирменную золотую булавку-эмблему Bint Saeed. Из креп-шифона тёмно-бордового цвета, создан в Абу-Даби, Объединённые Арабские Эмираты, он предлагает универсальный стиль, грациозное движение и вневременной подход к occasion wear.',
      },
    ],
  },
  zh: {
    pageTitle: 'Mayfair 长袍 | 深酒红雪纺场合长袍 | Bint Saeed',
    metaDescription:
      'Mayfair 长袍。深酒红雪纺长袍，V 领、流畅廓形、附设内衬连衣裙与标志性金色徽饰。由 Bint Saeed 设计于阿布扎比，阿拉伯联合酋长国。',
    facts: {
      neckline: 'V 领',
      fit: '均码廓形，剪裁流畅宽松。隐藏内系带可宽松穿着呈现飘逸效果，或调节塑造更明确轮廓，同时保持优雅动感。',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.zh,
      stylingDetail: '附设围巾细节，搭配 Bint Saeed 标志性金色徽饰胸针与隐藏内系带结构。',
      suitableFor: '婚礼、订婚庆典、开斋节聚会、正式晚宴、目的地活动、文化场合、奢华旅行与优雅日间着装。',
      care: CARE.zh,
    },
    faq: [
      {
        question: 'Mayfair 长袍适合婚礼、开斋节和特殊场合吗？',
        answer:
          '适合。Mayfair 长袍为婚礼、订婚庆典、开斋节聚会、正式晚宴、目的地活动与特殊场合而设计。采用深酒红雪纺，流畅廓形在日间与晚间场合皆呈现优雅、舒适与灵动美感。',
      },
      {
        question: 'Mayfair 长袍是均码吗？',
        answer:
          '是的。Mayfair 长袍采用均码廓形，剪裁流畅宽松。隐藏内系带可宽松穿着或调节轮廓，同时保持舒适与活动自如。',
      },
      {
        question: 'Mayfair 长袍与其他长袍有何不同？',
        answer:
          'Mayfair 长袍融合流畅均码廓形、隐藏内系带、附设围巾细节与 Bint Saeed 标志性金色徽饰胸针。采用深酒红雪纺，于阿布扎比、阿拉伯联合酋长国设计，呈现多变造型、优雅动感与永恒的场合着装理念。',
      },
    ],
  },
  de: {
    pageTitle: 'Mayfair Kaftan | Kaftan für Anlässe aus tiefrotem Chiffon | Bint Saeed',
    metaDescription:
      'Mayfair Kaftan. Kaftan aus tiefrotem Chiffon mit V-Ausschnitt, fließender Silhouette, integriertem Innenkleid und signature Gold-Emblem. Entworfen in Abu Dhabi, Vereinigte Arabische Emirate von Bint Saeed.',
    facts: {
      neckline: 'V-Ausschnitt',
      fit: 'One-Size-Silhouette mit fließender, entspannter Passform. Versteckte innere Bänder ermöglichen lockeres Tragen oder eine definiertere Form bei graziöser Bewegung.',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.de,
      stylingDetail:
        'Integriertes Schal-Detail mit signature Bint Saeed Gold-Emblem-Anstecknadel und versteckter innerer Bindekonstruktion.',
      suitableFor:
        'Hochzeiten, Verlobungsfeiern, Eid-Zusammenkünfte, formelle Dinners, Destination-Events, kulturelle Anlässe, Luxusreisen und elegante Tageslooks.',
      care: CARE.de,
    },
    faq: [
      {
        question: 'Ist der Mayfair Kaftan für Hochzeiten, Eid und besondere Anlässe geeignet?',
        answer:
          'Ja. Der Mayfair Kaftan ist für Hochzeiten, Verlobungsfeiern, Eid-Zusammenkünfte, formelle Dinners, Destination-Events und besondere Anlässe konzipiert. Aus tiefrotem Krepp-Chiffon bietet seine fließende Silhouette Eleganz, Komfort und graziöse Bewegung tagsüber und abends.',
      },
      {
        question: 'Ist der Mayfair Kaftan One Size?',
        answer:
          'Ja. Der Mayfair Kaftan ist als One-Size-Silhouette mit fließender, entspannter Passform konzipiert. Versteckte innere Bänder ermöglichen lockeres Drapieren oder eine definiertere Form bei Komfort und Bewegungsfreiheit.',
      },
      {
        question: 'Was unterscheidet den Mayfair Kaftan von anderen Kaftanen?',
        answer:
          'Der Mayfair Kaftan vereint fließende One-Size-Silhouette, versteckte innere Bänder, integriertes Schal-Detail und signature Bint Saeed Gold-Emblem-Anstecknadel. Aus tiefrotem Krepp-Chiffon, entworfen in Abu Dhabi, Vereinigte Arabische Emirate, bietet er vielseitiges Styling, graziöse Bewegung und einen zeitlosen Ansatz für Anlassmode.',
      },
    ],
  },
  nl: {
    pageTitle: 'Mayfair Kaftan | Gelegenheidskaftan in diep bordeaux chiffon | Bint Saeed',
    metaDescription:
      'Mayfair Kaftan. Kaftan in diep bordeaux chiffon met V-hals, vloeiende silhouet, geïntegreerd binnenjurkje en signature gouden embleem. Ontworpen in Abu Dhabi, Verenigde Arabische Emiraten door Bint Saeed.',
    facts: {
      neckline: 'V-hals',
      fit: 'One-size silhouet met vloeiende, ontspannen pasvorm. Verborgen interne banden maken een losse drape of een meer gedefinieerde vorm mogelijk met gracieuze beweging.',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.nl,
      stylingDetail:
        'Geïntegreerd sjaaldetail met signature Bint Saeed gouden embleemspeld en verborgen interne bandconstructie.',
      suitableFor:
        'Bruiloften, verlovingsvieringen, Eid-bijeenkomsten, formele diners, bestemmingsgebeurtenissen, culturele gelegenheden, luxe reizen en elegante daglooks.',
      care: CARE.nl,
    },
    faq: [
      {
        question: 'Is de Mayfair Kaftan geschikt voor bruiloften, Eid en speciale gelegenheden?',
        answer:
          'Ja. De Mayfair Kaftan is ontworpen voor bruiloften, verlovingsvieringen, Eid-bijeenkomsten, formele diners, bestemmingsgebeurtenissen en speciale gelegenheden. In diep bordeaux crêpe chiffon biedt het vloeiende silhouet elegantie, comfort en gracieuze beweging overdag en ’s avonds.',
      },
      {
        question: 'Is de Mayfair Kaftan one size?',
        answer:
          'Ja. De Mayfair Kaftan is ontworpen als one-size silhouet met vloeiende, ontspannen pasvorm. Verborgen interne banden maken een losse drape of een meer gedefinieerde vorm mogelijk met comfort en bewegingsvrijheid.',
      },
      {
        question: 'Wat maakt de Mayfair Kaftan anders dan andere kaftans?',
        answer:
          'De Mayfair Kaftan combineert een vloeiend one-size silhouet, verborgen interne banden, geïntegreerd sjaaldetail en signature Bint Saeed gouden embleemspeld. In diep bordeaux crêpe chiffon, ontworpen in Abu Dhabi, Verenigde Arabische Emiraten, biedt hij veelzijdig styling, gracieuze beweging en een tijdloze benadering van gelegenheidsmode.',
      },
    ],
  },
  pt: {
    pageTitle: 'Kaftan Mayfair | Kaftan de ocasião em chiffon bordeaux profundo | Bint Saeed',
    metaDescription:
      'Kaftan Mayfair. Kaftan em chiffon bordeaux profundo com decote em V, silhueta fluida, vestido interior integrado e emblema dourado signature. Concebido em Abu Dhabi, Emirados Árabes Unidos pela Bint Saeed.',
    facts: {
      neckline: 'Decote em V',
      fit: 'Silhueta tamanho único com caimento fluido e descontraído. Laços internos ocultos permitem usar solto para um efeito fluido ou ajustado para uma forma mais definida mantendo movimento gracioso.',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.pt,
      stylingDetail:
        'Lenço integrado com alfinete emblema dourado signature Bint Saeed e laços internos ocultos.',
      suitableFor:
        'Casamentos, noivados, reuniões de Eid, jantares formais, eventos em destino, ocasiões culturais, viagens de luxo e elegância diurna.',
      care: CARE.pt,
    },
    faq: [
      {
        question: 'O kaftan Mayfair é adequado para casamentos, Eid e ocasiões especiais?',
        answer:
          'Sim. O kaftan Mayfair foi concebido para casamentos, noivados, reuniões de Eid, jantares formais, eventos em destino e ocasiões especiais. Em chiffon crepe bordeaux profundo, a sua silhueta fluida oferece elegância, conforto e movimento gracioso de dia e à noite.',
      },
      {
        question: 'O kaftan Mayfair é tamanho único?',
        answer:
          'Sim. O kaftan Mayfair foi concebido como silhueta tamanho único com caimento fluido e descontraído. Laços internos ocultos permitem um drapeado solto ou uma forma mais definida mantendo conforto e liberdade de movimento.',
      },
      {
        question: 'O que torna o kaftan Mayfair diferente de outros kaftans?',
        answer:
          'O kaftan Mayfair combina silhueta fluida tamanho único, laços internos ocultos, lenço integrado e alfinete emblema dourado signature Bint Saeed. Em chiffon crepe bordeaux profundo, concebido em Abu Dhabi, Emirados Árabes Unidos, oferece styling versátil, movimento gracioso e uma abordagem intemporal ao vestir de ocasião.',
      },
    ],
  },
  id: {
    pageTitle: 'Kaftan Mayfair | Kaftan Acara Chiffon Maroon Gelap | Bint Saeed',
    metaDescription:
      'Kaftan Mayfair. Kaftan chiffon maroon gelap dengan garis leher V, siluet mengalir, gaun dalam terpasang, dan emblem emas khas. Dirancang di Abu Dhabi, Uni Emirat Arab oleh Bint Saeed.',
    facts: {
      neckline: 'Garis leher V',
      fit: 'Siluet one-size dengan pas yang mengalir dan santai. Tali internal tersembunyi memungkinkan kaftan dikenakan longgar untuk efek mengalir atau disesuaikan untuk bentuk lebih terdefinisi sambil menjaga gerakan anggun.',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.id,
      stylingDetail:
        'Detail scarf terpasang dengan pin emblem emas khas Bint Saeed dan konstruksi tali internal tersembunyi.',
      suitableFor:
        'Pernikahan, perayaan tunangan, pertemuan Id, makan malam formal, acara destinasi, acara budaya, perjalanan mewah, dan berpakaian siang yang elegan.',
      care: CARE.id,
    },
    faq: [
      {
        question: 'Apakah Kaftan Mayfair cocok untuk pernikahan, Id, dan acara khusus?',
        answer:
          'Ya. Kaftan Mayfair dirancang untuk pernikahan, perayaan tunangan, pertemuan Id, makan malam formal, acara destinasi, dan acara khusus. Dibuat dari chiffon crepe maroon gelap, siluetnya yang mengalir menawarkan keanggunan, kenyamanan, dan gerakan anggun untuk acara siang dan malam.',
      },
      {
        question: 'Apakah Kaftan Mayfair one size?',
        answer:
          'Ya. Kaftan Mayfair dirancang sebagai siluet one-size dengan pas yang mengalir dan santai. Tali internal tersembunyi memungkinkan dikenakan longgar untuk drape effortless atau disesuaikan untuk bentuk lebih terdefinisi sambil menjaga kenyamanan.',
      },
      {
        question: 'Apa yang membedakan Kaftan Mayfair dari kaftan lainnya?',
        answer:
          'Kaftan Mayfair menggabungkan siluet one-size mengalir, tali internal tersembunyi, detail scarf terpasang, dan pin emblem emas khas Bint Saeed. Dibuat dari chiffon crepe maroon gelap dan dirancang di Abu Dhabi, Uni Emirat Arab, menawarkan styling serbaguna, gerakan anggun, dan pendekatan abadi untuk busana acara.',
      },
    ],
  },
  ms: {
    pageTitle: 'Kaftan Mayfair | Kaftan Majlis Chiffon Maroon Gelap | Bint Saeed',
    metaDescription:
      'Kaftan Mayfair. Kaftan chiffon maroon gelap dengan garis leher V, siluet mengalir, gaun dalam terpasang, dan emblem emas khas. Direka di Abu Dhabi, Emiriah Arab Bersatu oleh Bint Saeed.',
    facts: {
      neckline: 'Garis leher V',
      fit: 'Siluet one-size dengan fit mengalir dan santai. Tali dalaman tersembunyi membolehkan kaftan dipakai longgar atau diselaraskan untuk bentuk lebih jelas.',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.ms,
      stylingDetail:
        'Butiran scarf terpasang dengan pin emblem emas khas Bint Saeed dan konstruksi tali dalaman tersembunyi.',
      suitableFor:
        'Perkahwinan, sambutan pertunangan, perhimpunan Aidilfitri, majlis malam, acara destinasi, dan berpakaian siang elegan.',
      care: CARE.ms,
    },
    faq: [
      {
        question: 'Adakah Kaftan Mayfair sesuai untuk perkahwinan, Aidilfitri, dan acara khas?',
        answer:
          'Ya. Kaftan Mayfair direka untuk majlis perkahwinan, Aidilfitri, dan acara formal dengan siluet mengalir yang anggun.',
      },
      {
        question: 'Adakah Kaftan Mayfair one size?',
        answer:
          'Ya. Siluet one-size dengan tali dalaman tersembunyi untuk fit mengalir atau lebih terstruktur.',
      },
      {
        question: 'Apa yang membezakan Kaftan Mayfair daripada kaftan lain?',
        answer:
          'Scarf terpasang, pin emblem emas khas Bint Saeed, dan chiffon crepe maroon gelap — direka di Abu Dhabi.',
      },
    ],
  },
}

const NOTHING_HILL: Record<AppLocale, KaftanLocalePack> = {
  en: {
    pageTitle: 'Nothing Hill Kaftan | Peach Pink Chiffon Occasion Kaftan | Bint Saeed',
    metaDescription:
      'Nothing Hill Kaftan. Peach Pink chiffon kaftan featuring a refined bateau neckline, flowing silhouette and Bint Saeed signature gold-tone Monogram. Designed in Abu Dhabi, United Arab Emirates by Bint Saeed.',
    facts: {
      neckline: 'Bateau neckline',
      fit: 'One-size silhouette with a fluid, relaxed fit designed to drape effortlessly across different body shapes while maintaining graceful movement.',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.en,
      stylingDetail:
        'Flowing layered chiffon construction featuring the Bint Saeed signature gold-tone Monogram pin.',
      suitableFor:
        'Weddings, engagement celebrations, Eid gatherings, formal dinners, destination events, cultural occasions, luxury travel, premium travel, garden celebrations, and elegant daytime dressing.',
      care: CARE.en,
    },
    faq: [
      {
        question: 'Is the Nothing Hill Kaftan suitable for weddings, Eid, and special occasions?',
        answer:
          'Yes. The Nothing Hill Kaftan is designed for weddings, engagement celebrations, Eid gatherings, formal dinners, destination events, and special occasions. Crafted from soft Peach Pink chiffon, its flowing silhouette creates graceful movement while offering elegance and comfort for both daytime and evening occasions.',
      },
      {
        question: 'Is the Nothing Hill Kaftan one size?',
        answer:
          'Yes. The Nothing Hill Kaftan is designed as a one-size silhouette with a fluid, relaxed fit. Its airy construction allows the chiffon to drape naturally across different body shapes, creating an elegant and effortless appearance while maintaining comfort and freedom of movement.',
      },
      {
        question: 'What makes the Nothing Hill Kaftan different from other kaftans?',
        answer:
          'The Nothing Hill Kaftan combines a flowing layered silhouette, a refined bateau neckline, soft Peach Pink chiffon, and the Bint Saeed signature gold-tone Monogram pin. Designed in Abu Dhabi, United Arab Emirates, it offers a lighter and more romantic interpretation of occasion dressing while maintaining the elegance and versatility that define the Bint Saeed collection.',
      },
      {
        question: 'What is the difference between the Nothing Hill Kaftan and the Mayfair Kaftan?',
        answer:
          'Both kaftans share the same flowing silhouette and elegant construction. The Nothing Hill Kaftan features a refined bateau neckline and is crafted from soft Peach Pink chiffon, creating a lighter and more romantic appearance. The Mayfair Kaftan features a V-neckline and is presented in Deep Maroon crepe chiffon, offering a richer and more dramatic interpretation of occasion dressing.',
      },
      {
        question: 'Can the Nothing Hill Kaftan be worn throughout the year?',
        answer:
          'Yes. The lightweight chiffon construction makes the Nothing Hill Kaftan suitable for celebrations and gatherings throughout the year. Its airy silhouette and timeless design allow it to move effortlessly between seasons, occasions, and destinations.',
      },
      {
        question: 'Is the Nothing Hill Kaftan suitable for destination weddings and international events?',
        answer:
          'Yes. The Nothing Hill Kaftan is designed for weddings, destination celebrations, formal gatherings and special occasions. Its lightweight chiffon construction and flowing silhouette make it an elegant choice for events in the Middle East, Europe and beyond.',
      },
    ],
  },
  ar: {
    pageTitle: 'قفطان Nothing Hill | قفطان مناسبات شيفون وردي خوخي | Bint Saeed',
    metaDescription:
      'قفطان Nothing Hill. قفطان شيفون وردي خوخي بخط عنق بحري راقٍ، وقصّة انسيابية، وشعار Bint Saeed الذهبي المميز. صُمم في أبوظبي، الإمارات العربية المتحدة من قِبل Bint Saeed.',
    facts: {
      neckline: 'خط عنق بحري',
      fit: 'قصّة مقاس واحد بقصّة مريحة وانسيابية تنسدل بسهولة على مختلف أشكال الجسم مع الحفاظ على حركة رشيقة.',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.ar,
      stylingDetail: 'تصميم شيفون متعدد الطبقات انسيابي يتضمن دبوس الشعار الذهبي المميز من Bint Saeed.',
      suitableFor:
        'الأعراس، احتفالات الخطوبة، تجمعات العيد، العشاء الرسمي، مناسبات الوجهات، المناسبات الثقافية، السفر الفاخر، احتفالات الحدائق، والإطلالات النهارية الأنيقة.',
      care: CARE.ar,
    },
    faq: [
      {
        question: 'هل يناسب قفطان Nothing Hill الأعراس والعيد والمناسبات الخاصة؟',
        answer:
          'نعم. صُمم قفطان Nothing Hill للأعراس، واحتفالات الخطوبة، وتجمعات العيد، والعشاء الرسمي، ومناسبات الوجهات، والمناسبات الخاصة. مصنوع من شيفون وردي خوخي ناعم، وتمنح قصّته الانسيابية حركة رشيقة مع أناقة وراحة في المناسبات النهارية والمسائية.',
      },
      {
        question: 'هل قفطان Nothing Hill بمقاس واحد؟',
        answer:
          'نعم. صُمم قفطان Nothing Hill بقصّة مقاس واحد بقصّة مريحة وانسيابية. يسمح بناؤه الخفيف للشيفون بالتدلّي بشكل طبيعي على مختلف أشكال الجسم، ليمنح مظهراً أنيقاً وسهلاً مع الحفاظ على الراحة وحرية الحركة.',
      },
      {
        question: 'ما الذي يميز قفطان Nothing Hill عن القفاطين الأخرى؟',
        answer:
          'يجمع قفطان Nothing Hill بين قصّة متعددة الطبقات انسيابية، وخط عنق بحري راقٍ، وشيفون وردي خوخي ناعم، ودبوس الشعار الذهبي المميز من Bint Saeed. صُمم في أبوظبي، الإمارات العربية المتحدة، ليقدّم تفسيراً أخف وأكثر رومانسية لأزياء المناسبات مع الحفاظ على الأناقة والتنوع اللذين يميزان مجموعة Bint Saeed.',
      },
      {
        question: 'ما الفرق بين قفطان Nothing Hill وقفطان Mayfair؟',
        answer:
          'يتشارك القفطانان في القصّة الانسيابية والبناء الأنيق. يتميز قفطان Nothing Hill بخط عنق بحري راقٍ وشيفون وردي خوخي ناعم لمظهر أخف وأكثر رومانسية. يتميز قفطان Mayfair بخط عنق V وشيفون كريب عنابي غامق لمظهر أغنى وأكثر درامية.',
      },
      {
        question: 'هل يمكن ارتداء قفطان Nothing Hill على مدار العام؟',
        answer:
          'نعم. يجعل البناء الخفيف من الشيفون قفطان Nothing Hill مناسباً للاحتفالات والتجمعات على مدار العام. تسمح قصّته الهوائية وتصميمه الخالد بالانتقال بسهولة بين الفصول والمناسبات والوجهات.',
      },
      {
        question: 'هل يناسب قفطان Nothing Hill حفلات الزفاف في الوجهات والفعاليات الدولية؟',
        answer:
          'نعم. صُمم قفطان Nothing Hill للأعراس، واحتفالات الوجهات، والتجمعات الرسمية والمناسبات الخاصة. يجعل بناؤه الخفيف من الشيفون وقصّته الانسيابية خياراً أنيقاً للفعاليات في الشرق الأوسط وأوروبا وما بعدها.',
      },
    ],
  },
  fr: {
    pageTitle: 'Kaftan Nothing Hill | Kaftan de cérémonie en mousseline rose pêche | Bint Saeed',
    metaDescription:
      'Kaftan Nothing Hill. Kaftan en mousseline rose pêche avec encolure bateau raffinée, silhouette fluide et emblème doré signature. Conçu à Abou Dabi, Émirats arabes unis par Bint Saeed.',
    facts: {
      neckline: 'Encolure bateau',
      fit: 'Silhouette taille unique à coupe fluide et décontractée, conçue pour draper naturellement différentes morphologies avec un mouvement gracieux.',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.fr,
      stylingDetail:
        'Construction en mousseline superposée fluide avec l’épingle emblème dorée signature Bint Saeed.',
      suitableFor:
        'Mariages, fiançailles, réunions de l’Aïd, dîners formels, événements en destination, occasions culturelles, voyages de luxe, célébrations en jardin et élégance de jour.',
      care: CARE.fr,
    },
    faq: [
      {
        question: 'Le kaftan Nothing Hill convient-il aux mariages, à l’Aïd et aux occasions spéciales ?',
        answer:
          'Oui. Le kaftan Nothing Hill est conçu pour les mariages, fiançailles, réunions de l’Aïd, dîners formels, événements en destination et occasions spéciales. En mousseline rose pêche douce, sa silhouette fluide crée un mouvement gracieux avec élégance et confort de jour comme de soir.',
      },
      {
        question: 'Le kaftan Nothing Hill est-il en taille unique ?',
        answer:
          'Oui. Le kaftan Nothing Hill est conçu en silhouette taille unique à coupe fluide et décontractée. Sa construction aérienne permet à la mousseline de draper naturellement différentes morphologies avec élégance et liberté de mouvement.',
      },
      {
        question: 'Qu’est-ce qui distingue le kaftan Nothing Hill des autres kaftans ?',
        answer:
          'Le kaftan Nothing Hill associe une silhouette superposée fluide, une encolure bateau raffinée, une mousseline rose pêche douce et l’épingle emblème dorée signature Bint Saeed. Conçu à Abou Dabi, Émirats arabes unis, il offre une interprétation plus légère et romantique de la tenue de cérémonie.',
      },
      {
        question: 'Quelle est la différence entre le kaftan Nothing Hill et le kaftan Mayfair ?',
        answer:
          'Les deux kaftans partagent la même silhouette fluide et une construction élégante. Le Nothing Hill a une encolure bateau raffinée et une mousseline rose pêche pour un rendu plus léger et romantique. Le Mayfair a une encolure en V et une mousseline crêpe bordeaux profond pour un rendu plus riche et dramatique.',
      },
      {
        question: 'Le kaftan Nothing Hill peut-il être porté toute l’année ?',
        answer:
          'Oui. Sa construction légère en mousseline le rend adapté aux célébrations tout au long de l’année. Sa silhouette aérienne et son design intemporel passent aisément d’une saison, d’une occasion et d’une destination à l’autre.',
      },
      {
        question: 'Le kaftan Nothing Hill convient-il aux mariages en destination et aux événements internationaux ?',
        answer:
          'Oui. Le kaftan Nothing Hill est conçu pour les mariages, célébrations en destination, rassemblements formels et occasions spéciales. Sa mousseline légère et sa silhouette fluide en font un choix élégant au Moyen-Orient, en Europe et au-delà.',
      },
    ],
  },
  it: {
    pageTitle: 'Kaftan Nothing Hill | Kaftan da cerimonia in chiffon rosa pesca | Bint Saeed',
    metaDescription:
      'Kaftan Nothing Hill. Kaftan in chiffon rosa pesca con scollatura a barca raffinata, silhouette fluida ed emblema dorato signature. Progettato ad Abu Dhabi, Emirati Arabi Uniti da Bint Saeed.',
    facts: {
      neckline: 'Scollatura a barca',
      fit: 'Silhouette taglia unica con vestibilità fluida e rilassata, pensata per drappeggiarsi naturalmente su diverse forme mantenendo movimento aggraziato.',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.it,
      stylingDetail:
        'Costruzione in chiffon stratificato fluido con spilla emblema dorata signature Bint Saeed.',
      suitableFor:
        'Matrimoni, fidanzamenti, celebrazioni dell’Eid, cene formali, eventi in destinazione, occasioni culturali, viaggi di lusso, celebrazioni in giardino ed eleganza diurna.',
      care: CARE.it,
    },
    faq: [
      {
        question: 'Il kaftan Nothing Hill è adatto a matrimoni, Eid e occasioni speciali?',
        answer:
          'Sì. Il kaftan Nothing Hill è pensato per matrimoni, fidanzamenti, celebrazioni dell’Eid, cene formali, eventi in destinazione e occasioni speciali. In morbido chiffon rosa pesca, la sua silhouette fluida crea movimento aggraziato con eleganza e comfort di giorno e di sera.',
      },
      {
        question: 'Il kaftan Nothing Hill è taglia unica?',
        answer:
          'Sì. Il kaftan Nothing Hill è progettato come silhouette taglia unica con vestibilità fluida e rilassata. La sua costruzione ariosa permette al chiffon di drappeggiarsi naturalmente su diverse forme con eleganza e libertà di movimento.',
      },
      {
        question: 'Cosa rende il kaftan Nothing Hill diverso dagli altri kaftan?',
        answer:
          'Il kaftan Nothing Hill combina silhouette stratificata fluida, scollatura a barca raffinata, morbido chiffon rosa pesca e spilla emblema dorata signature Bint Saeed. Progettato ad Abu Dhabi, Emirati Arabi Uniti, offre un’interpretazione più leggera e romantica dell’abbigliamento da cerimonia.',
      },
      {
        question: 'Qual è la differenza tra il kaftan Nothing Hill e il kaftan Mayfair?',
        answer:
          'Entrambi condividono la stessa silhouette fluida e costruzione elegante. Il Nothing Hill ha scollatura a barca e chiffon rosa pesca per un aspetto più leggero e romantico. Il Mayfair ha scollatura a V e chiffon crepe bordeaux profondo per un aspetto più ricco e drammatico.',
      },
      {
        question: 'Il kaftan Nothing Hill può essere indossato tutto l’anno?',
        answer:
          'Sì. La costruzione leggera in chiffon lo rende adatto a celebrazioni durante tutto l’anno. La silhouette ariosa e il design senza tempo passano con facilità tra stagioni, occasioni e destinazioni.',
      },
      {
        question: 'Il kaftan Nothing Hill è adatto a matrimoni in destinazione ed eventi internazionali?',
        answer:
          'Sì. Il kaftan Nothing Hill è pensato per matrimoni, celebrazioni in destinazione, incontri formali e occasioni speciali. Il chiffon leggero e la silhouette fluida lo rendono una scelta elegante in Medio Oriente, Europa e oltre.',
      },
    ],
  },
  es: {
    pageTitle: 'Kaftán Nothing Hill | Kaftán de ocasión en chiffon rosa melocotón | Bint Saeed',
    metaDescription:
      'Kaftán Nothing Hill. Kaftán en chiffon rosa melocotón con escote barco refinado, silueta fluida y emblema dorado signature. Diseñado en Abu Dabi, Emiratos Árabes Unidos por Bint Saeed.',
    facts: {
      neckline: 'Escote barco',
      fit: 'Silueta de talla única con ajuste fluido y relajado, diseñada para caer con naturalidad sobre distintas siluetas manteniendo movimiento elegante.',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.es,
      stylingDetail:
        'Construcción en chiffon superpuesto fluido con alfiler emblema dorado signature Bint Saeed.',
      suitableFor:
        'Bodas, compromisos, reuniones de Eid, cenas formales, eventos en destino, ocasiones culturales, viajes de lujo, celebraciones en jardín y elegancia diurna.',
      care: CARE.es,
    },
    faq: [
      {
        question: '¿Es el kaftán Nothing Hill adecuado para bodas, Eid y ocasiones especiales?',
        answer:
          'Sí. El kaftán Nothing Hill está diseñado para bodas, compromisos, reuniones de Eid, cenas formales, eventos en destino y ocasiones especiales. En suave chiffon rosa melocotón, su silueta fluida crea movimiento elegante con comodidad y elegancia de día y de noche.',
      },
      {
        question: '¿El kaftán Nothing Hill es de talla única?',
        answer:
          'Sí. El kaftán Nothing Hill está diseñado como silueta de talla única con ajuste fluido y relajado. Su construcción ligera permite que el chiffon caiga con naturalidad sobre distintas siluetas con elegancia y libertad de movimiento.',
      },
      {
        question: '¿Qué hace diferente al kaftán Nothing Hill de otros kaftanes?',
        answer:
          'El kaftán Nothing Hill combina silueta superpuesta fluida, escote barco refinado, suave chiffon rosa melocotón y alfiler emblema dorado signature Bint Saeed. Diseñado en Abu Dabi, Emiratos Árabes Unidos, ofrece una interpretación más ligera y romántica del vestir de ocasión.',
      },
      {
        question: '¿Cuál es la diferencia entre el kaftán Nothing Hill y el kaftán Mayfair?',
        answer:
          'Ambos comparten la misma silueta fluida y construcción elegante. El Nothing Hill tiene escote barco y chiffon rosa melocotón para un aspecto más ligero y romántico. El Mayfair tiene escote en V y chiffon crepe burdeos profundo para un aspecto más rico y dramático.',
      },
      {
        question: '¿Se puede llevar el kaftán Nothing Hill durante todo el año?',
        answer:
          'Sí. Su construcción ligera en chiffon lo hace adecuado para celebraciones durante todo el año. Su silueta aireada y diseño atemporal pasan con facilidad entre estaciones, ocasiones y destinos.',
      },
      {
        question: '¿Es el kaftán Nothing Hill adecuado para bodas en destino y eventos internacionales?',
        answer:
          'Sí. El kaftán Nothing Hill está diseñado para bodas, celebraciones en destino, reuniones formales y ocasiones especiales. Su chiffon ligero y silueta fluida lo convierten en una elección elegante en Oriente Medio, Europa y más allá.',
      },
    ],
  },
  ru: {
    pageTitle: 'Кафтан Nothing Hill | Кафтан для особых случаев из персиково-розового шифона | Bint Saeed',
    metaDescription:
      'Кафтан Nothing Hill. Кафтан из персиково-розового шифона с изысканным вырезом лодочкой, струящимся силуэтом и фирменной золотой эмблемой. Создан в Абу-Даби, Объединённые Арабские Эмираты, Bint Saeed.',
    facts: {
      neckline: 'Вырез лодочка',
      fit: 'Силуэт one size со свободной струящейся посадкой, естественно драпирующийся на разных фигурах с грациозным движением.',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.ru,
      stylingDetail:
        'Струящаяся многослойная конструкция из шифона с фирменной золотой булавкой-эмблемой Bint Saeed.',
      suitableFor:
        'Свадьбы, помолвки, празднования Ида, формальные ужины, мероприятия в путешествиях, культурные события, роскошные поездки, садовые торжества и элегантный дневной образ.',
      care: CARE.ru,
    },
    faq: [
      {
        question: 'Подходит ли кафтан Nothing Hill для свадеб, Ида и особых случаев?',
        answer:
          'Да. Кафтан Nothing Hill создан для свадеб, помолвок, празднований Ида, формальных ужинов, мероприятий в путешествиях и особых случаев. Из мягкого персиково-розового шифона его струящийся силуэт дарит грациозное движение, элегантность и комфорт днём и вечером.',
      },
      {
        question: 'Кафтан Nothing Hill — один размер?',
        answer:
          'Да. Кафтан Nothing Hill спроектирован как силуэт one size со свободной струящейся посадкой. Лёгкая конструкция позволяет шифону естественно драпироваться на разных фигурах с элегантностью и свободой движений.',
      },
      {
        question: 'Чем кафтан Nothing Hill отличается от других кафтанов?',
        answer:
          'Кафтан Nothing Hill сочетает струящийся многослойный силуэт, изысканный вырез лодочкой, мягкий персиково-розовый шифон и фирменную золотую булавку-эмблему Bint Saeed. Создан в Абу-Даби, Объединённые Арабские Эмираты, предлагая более лёгкую романтичную интерпретацию occasion wear.',
      },
      {
        question: 'В чём разница между кафтанами Nothing Hill и Mayfair?',
        answer:
          'Оба кафтана имеют одинаковый струящийся силуэт и элегантную конструкцию. Nothing Hill — вырез лодочкой и персиково-розовый шифон для более лёгкого романтичного образа. Mayfair — V-образный вырез и тёмно-бордовый креп-шифон для более насыщенного драматичного образа.',
      },
      {
        question: 'Можно ли носить кафтан Nothing Hill круглый год?',
        answer:
          'Да. Лёгкая шифоновая конструкция делает его подходящим для праздников в течение всего года. Воздушный силуэт и вневременной дизайн легко переходят между сезонами, случаями и направлениями.',
      },
      {
        question: 'Подходит ли кафтан Nothing Hill для свадеб в путешествиях и международных мероприятий?',
        answer:
          'Да. Кафтан Nothing Hill создан для свадеб, празднований в путешествиях, формальных встреч и особых случаев. Лёгкий шифон и струящийся силуэт делают его элегантным выбором на Ближнем Востоке, в Европе и за их пределами.',
      },
    ],
  },
  zh: {
    pageTitle: 'Nothing Hill 长袍 | 蜜桃粉雪纺场合长袍 | Bint Saeed',
    metaDescription:
      'Nothing Hill 长袍。蜜桃粉雪纺长袍，精致船型领、流畅廓形与标志性金色徽饰。由 Bint Saeed 设计于阿布扎比，阿拉伯联合酋长国。',
    facts: {
      neckline: '船型领',
      fit: '均码廓形，剪裁流畅宽松，可自然垂坠于不同身形，同时保持优雅动感。',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.zh,
      stylingDetail: '流畅分层雪纺结构，搭配 Bint Saeed 标志性金色徽饰胸针。',
      suitableFor: '婚礼、订婚庆典、开斋节聚会、正式晚宴、目的地活动、文化场合、奢华旅行、花园庆典与优雅日间着装。',
      care: CARE.zh,
    },
    faq: [
      {
        question: 'Nothing Hill 长袍适合婚礼、开斋节和特殊场合吗？',
        answer:
          '适合。Nothing Hill 长袍为婚礼、订婚庆典、开斋节聚会、正式晚宴、目的地活动与特殊场合而设计。采用柔和蜜桃粉雪纺，流畅廓形呈现优雅动感，日间与晚间皆舒适雅致。',
      },
      {
        question: 'Nothing Hill 长袍是均码吗？',
        answer:
          '是的。Nothing Hill 长袍采用均码廓形，剪裁流畅宽松。轻盈结构使雪纺自然垂坠于不同身形，呈现优雅轻松之美，同时保持舒适与活动自如。',
      },
      {
        question: 'Nothing Hill 长袍与其他长袍有何不同？',
        answer:
          'Nothing Hill 长袍融合流畅分层廓形、精致船型领、柔和蜜桃粉雪纺与 Bint Saeed 标志性金色徽饰胸针。于阿布扎比、阿拉伯联合酋长国设计，呈现更轻盈浪漫的场合着装诠释。',
      },
      {
        question: 'Nothing Hill 长袍与 Mayfair 长袍有何区别？',
        answer:
          '两款长袍共享相同的流畅廓形与优雅结构。Nothing Hill 为船型领与蜜桃粉雪纺，外观更轻盈浪漫；Mayfair 为 V 领与深酒红雪纺，呈现更丰富戏剧化的场合造型。',
      },
      {
        question: 'Nothing Hill 长袍可以全年穿着吗？',
        answer:
          '可以。轻盈雪纺结构使其适合全年庆典与聚会。透气廓形与隽永设计可轻松穿梭于不同季节、场合与目的地。',
      },
      {
        question: 'Nothing Hill 长袍适合目的地婚礼与国际活动吗？',
        answer:
          '适合。Nothing Hill 长袍为婚礼、目的地庆典、正式聚会与特殊场合而设计。轻盈雪纺与流畅廓形使其成为中东、欧洲及更远地区活动的优雅之选。',
      },
    ],
  },
  de: {
    pageTitle: 'Nothing Hill Kaftan | Kaftan für Anlässe aus pfirsichrosa Chiffon | Bint Saeed',
    metaDescription:
      'Nothing Hill Kaftan. Kaftan aus pfirsichrosa Chiffon mit raffiniertem Boot-Ausschnitt, fließender Silhouette und signature Gold-Emblem. Entworfen in Abu Dhabi, Vereinigte Arabische Emirate von Bint Saeed.',
    facts: {
      neckline: 'Boot-Ausschnitt',
      fit: 'One-Size-Silhouette mit fließender, entspannter Passform, die mühelos auf verschiedene Körperformen drapiert und graziöse Bewegung bewahrt.',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.de,
      stylingDetail:
        'Fließende mehrlagige Chiffon-Konstruktion mit signature Bint Saeed Gold-Emblem-Anstecknadel.',
      suitableFor:
        'Hochzeiten, Verlobungsfeiern, Eid-Zusammenkünfte, formelle Dinners, Destination-Events, kulturelle Anlässe, Luxusreisen, Gartenfeiern und elegante Tageslooks.',
      care: CARE.de,
    },
    faq: [
      {
        question: 'Ist der Nothing Hill Kaftan für Hochzeiten, Eid und besondere Anlässe geeignet?',
        answer:
          'Ja. Der Nothing Hill Kaftan ist für Hochzeiten, Verlobungsfeiern, Eid-Zusammenkünfte, formelle Dinners, Destination-Events und besondere Anlässe konzipiert. Aus weichem pfirsichrosa Chiffon schafft seine fließende Silhouette graziöse Bewegung mit Eleganz und Komfort tagsüber und abends.',
      },
      {
        question: 'Ist der Nothing Hill Kaftan One Size?',
        answer:
          'Ja. Der Nothing Hill Kaftan ist als One-Size-Silhouette mit fließender, entspannter Passform konzipiert. Die luftige Konstruktion lässt den Chiffon natürlich auf verschiedene Körperformen drapieren mit Eleganz und Bewegungsfreiheit.',
      },
      {
        question: 'Was unterscheidet den Nothing Hill Kaftan von anderen Kaftanen?',
        answer:
          'Der Nothing Hill Kaftan vereint fließende mehrlagige Silhouette, raffinierten Boot-Ausschnitt, weichen pfirsichrosa Chiffon und signature Bint Saeed Gold-Emblem-Anstecknadel. Entworfen in Abu Dhabi, Vereinigte Arabische Emirate, bietet er eine leichtere, romantischere Interpretation von Anlassmode.',
      },
      {
        question: 'Was ist der Unterschied zwischen Nothing Hill und Mayfair Kaftan?',
        answer:
          'Beide teilen dieselbe fließende Silhouette und elegante Konstruktion. Nothing Hill hat Boot-Ausschnitt und pfirsichrosa Chiffon für ein leichteres, romantischeres Erscheinungsbild. Mayfair hat V-Ausschnitt und tiefroten Krepp-Chiffon für ein reicheres, dramatischeres Erscheinungsbild.',
      },
      {
        question: 'Kann der Nothing Hill Kaftan das ganze Jahr getragen werden?',
        answer:
          'Ja. Die leichte Chiffon-Konstruktion macht ihn ganzjährig für Feiern geeignet. Die luftige Silhouette und zeitlose Gestaltung bewegen sich mühelos zwischen Jahreszeiten, Anlässen und Destinationen.',
      },
      {
        question: 'Ist der Nothing Hill Kaftan für Destination Weddings und internationale Events geeignet?',
        answer:
          'Ja. Der Nothing Hill Kaftan ist für Hochzeiten, Destination-Feiern, formelle Zusammenkünfte und besondere Anlässe konzipiert. Leichter Chiffon und fließende Silhouette machen ihn zu einer eleganten Wahl im Nahen Osten, in Europa und darüber hinaus.',
      },
    ],
  },
  nl: {
    pageTitle: 'Nothing Hill Kaftan | Gelegenheidskaftan in perzikroze chiffon | Bint Saeed',
    metaDescription:
      'Nothing Hill Kaftan. Kaftan in perzikroze chiffon met verfijnde bootneck, vloeiende silhouet en signature gouden embleem. Ontworpen in Abu Dhabi, Verenigde Arabische Emiraten door Bint Saeed.',
    facts: {
      neckline: 'Bootneck',
      fit: 'One-size silhouet met vloeiende, ontspannen pasvorm die moeiteloos drapeert over verschillende lichaamsvormen met gracieuze beweging.',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.nl,
      stylingDetail:
        'Vloeiende gelaagde chiffonconstructie met signature Bint Saeed gouden embleemspeld.',
      suitableFor:
        'Bruiloften, verlovingsvieringen, Eid-bijeenkomsten, formele diners, bestemmingsgebeurtenissen, culturele gelegenheden, luxe reizen, tuinfeesten en elegante daglooks.',
      care: CARE.nl,
    },
    faq: [
      {
        question: 'Is de Nothing Hill Kaftan geschikt voor bruiloften, Eid en speciale gelegenheden?',
        answer:
          'Ja. De Nothing Hill Kaftan is ontworpen voor bruiloften, verlovingsvieringen, Eid-bijeenkomsten, formele diners, bestemmingsgebeurtenissen en speciale gelegenheden. In zacht perzikroze chiffon creëert het vloeiende silhouet gracieuze beweging met elegantie en comfort overdag en ’s avonds.',
      },
      {
        question: 'Is de Nothing Hill Kaftan one size?',
        answer:
          'Ja. De Nothing Hill Kaftan is ontworpen als one-size silhouet met vloeiende, ontspannen pasvorm. De luchtige constructie laat de chiffon natuurlijk draperen over verschillende lichaamsvormen met elegantie en bewegingsvrijheid.',
      },
      {
        question: 'Wat maakt de Nothing Hill Kaftan anders dan andere kaftans?',
        answer:
          'De Nothing Hill Kaftan combineert een vloeiend gelaagd silhouet, verfijnde bootneck, zacht perzikroze chiffon en signature Bint Saeed gouden embleemspeld. Ontworpen in Abu Dhabi, Verenigde Arabische Emiraten, biedt hij een lichtere, romantischere interpretatie van gelegenheidsmode.',
      },
      {
        question: 'Wat is het verschil tussen de Nothing Hill en Mayfair Kaftan?',
        answer:
          'Beide delen hetzelfde vloeiende silhouet en elegante constructie. Nothing Hill heeft bootneck en perzikroze chiffon voor een lichter, romantischer uiterlijk. Mayfair heeft V-hals en diep bordeaux crêpe chiffon voor een rijker, dramatischer uiterlijk.',
      },
      {
        question: 'Kan de Nothing Hill Kaftan het hele jaar gedragen worden?',
        answer:
          'Ja. De lichte chiffonconstructie maakt hem geschikt voor vieringen het hele jaar door. Het luchtige silhouet en tijdloze ontwerp bewegen moeiteloos tussen seizoenen, gelegenheden en bestemmingen.',
      },
      {
        question: 'Is de Nothing Hill Kaftan geschikt voor destination weddings en internationale events?',
        answer:
          'Ja. De Nothing Hill Kaftan is ontworpen voor bruiloften, bestemmingsvieringen, formele bijeenkomsten en speciale gelegenheden. Lichte chiffon en vloeiend silhouet maken hem een elegante keuze in het Midden-Oosten, Europa en daarbuiten.',
      },
    ],
  },
  pt: {
    pageTitle: 'Kaftan Nothing Hill | Kaftan de ocasião em chiffon rosa pêssego | Bint Saeed',
    metaDescription:
      'Kaftan Nothing Hill. Kaftan em chiffon rosa pêssego com decote barco refinado, silhueta fluida e emblema dourado signature. Concebido em Abu Dhabi, Emirados Árabes Unidos pela Bint Saeed.',
    facts: {
      neckline: 'Decote barco',
      fit: 'Silhueta tamanho único com caimento fluido e descontraído, pensada para drapar naturalmente em diferentes formas mantendo movimento gracioso.',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.pt,
      stylingDetail:
        'Construção em chiffon sobreposto fluido com alfinete emblema dourado signature Bint Saeed.',
      suitableFor:
        'Casamentos, noivados, reuniões de Eid, jantares formais, eventos em destino, ocasiões culturais, viagens de luxo, celebrações em jardim e elegância diurna.',
      care: CARE.pt,
    },
    faq: [
      {
        question: 'O kaftan Nothing Hill é adequado para casamentos, Eid e ocasiões especiais?',
        answer:
          'Sim. O kaftan Nothing Hill foi concebido para casamentos, noivados, reuniões de Eid, jantares formais, eventos em destino e ocasiões especiais. Em suave chiffon rosa pêssego, a sua silhueta fluida cria movimento gracioso com elegância e conforto de dia e à noite.',
      },
      {
        question: 'O kaftan Nothing Hill é tamanho único?',
        answer:
          'Sim. O kaftan Nothing Hill foi concebido como silhueta tamanho único com caimento fluido e descontraído. A construção arejada permite que o chiffon drapeie naturalmente em diferentes formas com elegância e liberdade de movimento.',
      },
      {
        question: 'O que torna o kaftan Nothing Hill diferente de outros kaftans?',
        answer:
          'O kaftan Nothing Hill combina silhueta sobreposta fluida, decote barco refinado, suave chiffon rosa pêssego e alfinete emblema dourado signature Bint Saeed. Concebido em Abu Dhabi, Emirados Árabes Unidos, oferece uma interpretação mais leve e romântica do vestir de ocasião.',
      },
      {
        question: 'Qual é a diferença entre o kaftan Nothing Hill e o kaftan Mayfair?',
        answer:
          'Ambos partilham a mesma silhueta fluida e construção elegante. O Nothing Hill tem decote barco e chiffon rosa pêssego para um aspeto mais leve e romântico. O Mayfair tem decote em V e chiffon crepe bordeaux profundo para um aspeto mais rico e dramático.',
      },
      {
        question: 'O kaftan Nothing Hill pode ser usado durante todo o ano?',
        answer:
          'Sim. A construção leve em chiffon torna-o adequado para celebrações ao longo do ano. A silhueta arejada e o design intemporal movem-se facilmente entre estações, ocasiões e destinos.',
      },
      {
        question: 'O kaftan Nothing Hill é adequado para casamentos em destino e eventos internacionais?',
        answer:
          'Sim. O kaftan Nothing Hill foi concebido para casamentos, celebrações em destino, encontros formais e ocasiões especiais. O chiffon leve e a silhueta fluida tornam-no uma escolha elegante no Médio Oriente, na Europa e além.',
      },
    ],
  },
  id: {
    pageTitle: 'Kaftan Nothing Hill | Kaftan Acara Chiffon Peach Pink | Bint Saeed',
    metaDescription:
      'Kaftan Nothing Hill. Kaftan chiffon peach pink dengan garis leher bateau halus, siluet mengalir, dan emblem emas khas. Dirancang di Abu Dhabi, Uni Emirat Arab oleh Bint Saeed.',
    facts: {
      neckline: 'Garis leher bateau',
      fit: 'Siluet one-size dengan pas mengalir dan santai yang dirancang untuk drape effortless di berbagai bentuk tubuh sambil menjaga gerakan anggun.',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.id,
      stylingDetail:
        'Konstruksi chiffon berlapis mengalir dengan pin emblem emas khas Bint Saeed.',
      suitableFor:
        'Pernikahan, perayaan tunangan, pertemuan Id, makan malam formal, acara destinasi, acara budaya, perjalanan mewah, perayaan taman, dan berpakaian siang elegan.',
      care: CARE.id,
    },
    faq: [
      {
        question: 'Apakah Kaftan Nothing Hill cocok untuk pernikahan, Id, dan acara khusus?',
        answer:
          'Ya. Kaftan Nothing Hill dirancang untuk pernikahan, perayaan tunangan, pertemuan Id, makan malam formal, acara destinasi, dan acara khusus. Dibuat dari chiffon peach pink lembut, siluet mengalirnya menciptakan gerakan anggun dengan keanggunan dan kenyamanan untuk acara siang dan malam.',
      },
      {
        question: 'Apakah Kaftan Nothing Hill one size?',
        answer:
          'Ya. Kaftan Nothing Hill dirancang sebagai siluet one-size dengan pas mengalir dan santai. Konstruksi ringannya memungkinkan chiffon drape secara natural di berbagai bentuk tubuh dengan penampilan elegan dan effortless.',
      },
      {
        question: 'Apa yang membedakan Kaftan Nothing Hill dari kaftan lainnya?',
        answer:
          'Kaftan Nothing Hill menggabungkan siluet berlapis mengalir, garis leher bateau halus, chiffon peach pink lembut, dan pin emblem emas khas Bint Saeed. Dirancang di Abu Dhabi, Uni Emirat Arab, menawarkan interpretasi busana acara yang lebih ringan dan romantis.',
      },
      {
        question: 'Apa perbedaan antara Kaftan Nothing Hill dan Kaftan Mayfair?',
        answer:
          'Keduanya berbagi siluet mengalir dan konstruksi elegan yang sama. Nothing Hill memiliki garis leher bateau dan chiffon peach pink untuk tampilan lebih ringan dan romantis. Mayfair memiliki garis leher V dan chiffon crepe maroon gelap untuk tampilan lebih kaya dan dramatis.',
      },
      {
        question: 'Bisakah Kaftan Nothing Hill dikenakan sepanjang tahun?',
        answer:
          'Ya. Konstruksi chiffon ringan membuatnya cocok untuk perayaan sepanjang tahun. Siluetnya yang airy dan desain abadi bergerak effortless antara musim, acara, dan destinasi.',
      },
      {
        question: 'Apakah Kaftan Nothing Hill cocok untuk pernikahan destinasi dan acara internasional?',
        answer:
          'Ya. Kaftan Nothing Hill dirancang untuk pernikahan, perayaan destinasi, pertemuan formal, dan acara khusus. Chiffon ringan dan siluet mengalir menjadikannya pilihan elegan di Timur Tengah, Eropa, dan seterusnya.',
      },
    ],
  },
  ms: {
    pageTitle: 'Kaftan Nothing Hill | Kaftan Majlis Chiffon Peach Pink | Bint Saeed',
    metaDescription:
      'Kaftan Nothing Hill. Kaftan chiffon peach pink dengan garis leher bateau halus, siluet mengalir, dan emblem emas khas. Direka di Abu Dhabi, Emiriah Arab Bersatu oleh Bint Saeed.',
    facts: {
      neckline: 'Garis leher bateau',
      fit: 'Siluet one-size dengan potongan mengalir dan santai yang direka untuk jatuh luwes merentasi pelbagai bentuk badan sambil mengekalkan pergerakan anggun.',
      maximumGarmentLength: '165 cm',
      innerDress: INNER_DRESS.ms,
      stylingDetail:
        'Konstruksi chiffon berlapis mengalir dengan pin emblem emas khas Bint Saeed.',
      suitableFor:
        'Perkahwinan, sambutan pertunangan, perhimpunan Aidilfitri, majlis malam, acara destinasi, acara budaya, perjalanan mewah, sambutan taman, dan berpakaian siang elegan.',
      care: CARE.ms,
    },
    faq: [
      {
        question: 'Adakah Kaftan Nothing Hill sesuai untuk perkahwinan, Aidilfitri, dan acara khas?',
        answer:
          'Ya. Kaftan Nothing Hill direka untuk perkahwinan, sambutan pertunangan, perhimpunan Aidilfitri, majlis malam, acara destinasi, dan acara khusus. Diperbuat daripada chiffon peach pink lembut, siluet mengalirnya mencipta pergerakan anggun dengan keanggunan dan keselesaan.',
      },
      {
        question: 'Adakah Kaftan Nothing Hill one size?',
        answer:
          'Ya. Kaftan Nothing Hill direka sebagai siluet one-size dengan fit mengalir dan santai. Konstruksi ringannya membolehkan chiffon jatuh secara semula jadi merentasi pelbagai bentuk badan dengan penampilan elegan.',
      },
      {
        question: 'Apa yang membezakan Kaftan Nothing Hill daripada kaftan lain?',
        answer:
          'Kaftan Nothing Hill menonjolkan chiffon peach pink lembut, garis leher bateau halus, siluet mengalir, dan pin emblem emas khas Bint Saeed. Direka di Abu Dhabi, Emiriah Arab Bersatu, ia menawarkan keanggunan luwes untuk majlis siang dan malam.',
      },
    ],
  },
}

const KAFTAN_BY_SLUG: Record<KaftanSlug, Record<AppLocale, KaftanLocalePack>> = {
  'mayfair-kaftan': MAYFAIR,
  'nothing-hill-kaftan': NOTHING_HILL,
}

export function getKaftanLocalizedContent(
  slug: string,
  locale: AppLocale,
): (KaftanLocalePack & { madeIn: string }) | null {
  if (!isKaftanSlug(slug)) return null
  const pack = KAFTAN_BY_SLUG[slug][locale] ?? KAFTAN_BY_SLUG[slug].en
  return { ...pack, madeIn: G[locale].madeIn }
}

export function getKaftanPageSeo(
  slug: string,
  locale: AppLocale,
): { title: string; description: string } | null {
  const content = getKaftanLocalizedContent(slug, locale)
  if (!content) return null
  return { title: content.pageTitle, description: content.metaDescription }
}

export function getKaftanSchemaAudience(locale: AppLocale): string {
  return KAFTAN_AUDIENCE[locale] ?? KAFTAN_AUDIENCE.en
}

export function getLocalizedKaftanSchemaFacts(
  slug: string,
  locale: AppLocale,
): ProductSchemaFacts | null {
  const content = getKaftanLocalizedContent(slug, locale)
  if (!content) return null
  return {
    madeIn: content.madeIn,
    ...content.facts,
    faq: content.faq,
  }
}

export function getLocalizedKaftanFaq(slug: string, locale: AppLocale): ProductFaqItem[] {
  return getKaftanLocalizedContent(slug, locale)?.faq ?? []
}

