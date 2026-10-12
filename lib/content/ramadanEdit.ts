import type { AppLocale } from '@/lib/i18n/routing'

/**
 * Ramadan Edit — soft SEO landing (sitemap + llms, not in primary nav).
 * EN is source of truth; NL / FR / IT / AR follow its meaning in native luxury register.
 * Never claim availability here — the product grid filters sold-out pieces at render.
 */

export const RAMADAN_PATH = '/ramadan'

export const RAMADAN_LOCALES = ['en', 'ar', 'fr', 'it', 'nl'] as const satisfies readonly AppLocale[]
export type RamadanLocale = (typeof RAMADAN_LOCALES)[number]

export function isRamadanLocale(locale: AppLocale): locale is RamadanLocale {
  return (RAMADAN_LOCALES as readonly AppLocale[]).includes(locale)
}

/** Candidate pieces, in display order. Fully sold-out pieces are hidden at render. */
export const RAMADAN_EDIT_SLUGS = [
  'belgravia-abaya',
  'park-lane-abaya',
  'covent-garden-abaya',
  'knightsbridge-abaya-jacket',
  'kensington-abaya',
  'marylebone-abaya',
  'mayfair-kaftan',
  'nothing-hill-kaftan',
  'grosvenor-set',
  'covent-garden-signature-set',
  'hyde-park-set',
  'soho-set',
  'covent-garden-long-dress',
  'hampstead-dress',
  'knightsbridge-dress',
] as const

export type RamadanFaq = { question: string; answer: string }

export type RamadanEditCopy = {
  metaTitle: string
  metaDescription: string
  keywords: readonly string[]
  eyebrow: string
  title: string
  lead: string
  sections: readonly { heading: string; body: readonly string[] }[]
  gridHeading: string
  faqHeading: string
  faqs: readonly RamadanFaq[]
  shopCta: string
  breadcrumbHome: string
}

const EN: RamadanEditCopy = {
  metaTitle: 'Ramadan Edit 2027 — Luxury Abayas, Kaftans & Sets',
  metaDescription:
    'The Bint Saeed Ramadan edit: designer abayas, kaftans, dresses and silk-satin sets for iftar, suhoor gatherings and Eid. Designed in Abu Dhabi, delivered worldwide.',
  keywords: [
    'Ramadan collection',
    'Ramadan collection 2027',
    'Ramadan abaya',
    'Ramadan abayas',
    'Ramadan kaftan',
    'Ramadan kaftans',
    'Ramadan outfits',
    'Ramadan outfit ideas',
    'Ramadan dress',
    'Ramadan sets',
    'iftar outfit',
    'what to wear for iftar',
    'suhoor outfit',
    'Eid abaya',
    'Eid outfit',
    'Eid collection',
    'luxury Ramadan abaya',
    'designer Ramadan abaya',
    'modest Ramadan outfits',
    'Ramadan abaya UAE',
    'Ramadan abaya Dubai',
    'Ramadan abaya Abu Dhabi',
    'Ramadan abaya Saudi Arabia',
    'Ramadan abaya Qatar',
    'silk satin set Ramadan',
    'structured abaya',
    'Bint Saeed Ramadan',
  ],
  eyebrow: 'The Ramadan Edit',
  title: 'Dressing for the Holy Month',
  lead:
    'Ramadan asks for a different rhythm: slower evenings, tables shared with family, visits that run late into the night. The Bint Saeed Ramadan edit gathers abayas, kaftans, dresses and sets made for that rhythm — composed, comfortable and quietly considered, from iftar to Eid.',
  sections: [
    {
      heading: 'Iftar, and the evenings that follow',
      body: [
        'The month is lived after sunset. Iftar at home, gatherings with family, suhoor with friends — each calls for pieces that move easily and hold their line through long evenings.',
        'Our abayas are cut for exactly that: fluid where they should be, structured where it matters, finished with heritage details drawn from Al Khous palm-frond weaving.',
      ],
    },
    {
      heading: 'Abayas, kaftans and sets',
      body: [
        'Choose a bisht-inspired abaya for formal evenings, a structured jacket abaya for a sharper silhouette, or a long dress beneath an open abaya for gatherings at home.',
        'For the nights that ask for more, the Grosvenor set pairs a silk-satin shirt with a fluid long skirt — Ramadan evening dressing, carried forward to Eid.',
      ],
    },
    {
      heading: 'Eid, and gifts that stay',
      body: [
        'Many choose their Eid piece during Ramadan. Bint Saeed abayas can carry a hidden inner label personalised with a name, a meaningful date or a private message — a detail known only to the wearer.',
        'Each piece is designed in Abu Dhabi and delivered worldwide.',
      ],
    },
  ],
  gridHeading: 'Pieces for the month',
  faqHeading: 'Questions often asked',
  faqs: [
    {
      question: 'What should I wear for iftar?',
      answer:
        'For iftar at home or with family, a fluid abaya over a long dress is effortless and composed. For formal iftar invitations, a bisht-inspired or structured abaya — or a coordinated set — gives a more polished line.',
    },
    {
      question: 'Do you have kaftans for Ramadan?',
      answer:
        'Yes. Bint Saeed kaftans sit within our ready-to-wear alongside abayas, dresses and sets. Pieces currently available are shown on this page; the full collection is in the shop.',
    },
    {
      question: 'Can I wear the Ramadan edit for Eid?',
      answer:
        'Yes. The edit is designed to carry from the evenings of the month into Eid — the Grosvenor silk-satin set and our formal abayas are often chosen for Eid gatherings.',
    },
    {
      question: 'How early should I order for Ramadan or Eid?',
      answer:
        'Our garments are made to order. Each product page shows the estimated dispatch window, so we recommend ordering early in the season.',
    },
  ],
  shopCta: 'Discover the full collection',
  breadcrumbHome: 'Home',
}

const AR: RamadanEditCopy = {
  metaTitle: 'تشكيلة رمضان 2027 — عبايات وقفاطين وأطقم فاخرة',
  metaDescription:
    'تشكيلة رمضان من Bint Saeed: عبايات راقية وقفاطين وفساتين وأطقم من الساتان الحريري للإفطار والسحور والغبقة والعيد. صُمّمت في أبوظبي وتصلكِ أينما كنتِ.',
  keywords: [
    'تشكيلة رمضان',
    'تشكيلة رمضان 2027',
    'عبايات رمضان',
    'عباية رمضان',
    'قفطان رمضان',
    'قفاطين رمضان',
    'إطلالات رمضان',
    'ملابس رمضان',
    'لبس الغبقة',
    'عباية الغبقة',
    'لبس الإفطار',
    'إطلالة السحور',
    'عباية العيد',
    'لبس العيد',
    'عبايات فاخرة رمضان',
    'عبايات رمضان الإمارات',
    'عبايات رمضان دبي',
    'عبايات رمضان أبوظبي',
    'عبايات رمضان السعودية',
    'عبايات رمضان قطر',
    'طقم ساتان حريري',
    'عباية بقصة مهيكلة',
    'Bint Saeed رمضان',
  ],
  eyebrow: 'تشكيلة رمضان',
  title: 'أناقة الشهر الفضيل',
  lead:
    'لرمضان إيقاعه الخاص: أمسيات هادئة، وموائد تجمع العائلة، وزيارات تمتد حتى ساعات الليل. تجمع تشكيلة رمضان من Bint Saeed عبايات وقفاطين وفساتين وأطقمًا صُمّمت لهذا الإيقاع — رصينة ومريحة ومدروسة بهدوء، من الإفطار حتى العيد.',
  sections: [
    {
      heading: 'الإفطار، وما يليه من أمسيات',
      body: [
        'يُعاش الشهر بعد المغرب: إفطار في البيت، ولقاءات مع الأهل، وغبقة وسحور مع الصديقات — وكل مناسبة تحتاج قطعًا تتحرك بسهولة وتحافظ على انسيابها طوال السهرة.',
        'صُمّمت عباياتنا لذلك تمامًا: انسيابية حيث ينبغي، ومهيكلة حيث يلزم، مع لمسات تراثية مستوحاة من سفّ الخوص.',
      ],
    },
    {
      heading: 'عبايات وقفاطين وأطقم',
      body: [
        'اختاري عباية مستوحاة من البشت للأمسيات الرسمية، أو عباية بقصة الجاكيت لإطلالة أكثر حدّة، أو فستانًا طويلًا تحت عباية مفتوحة للجلسات العائلية.',
        'وللليالي التي تستحق أكثر، يجمع طقم Grosvenor قميصًا من الساتان الحريري مع تنورة طويلة منسابة — أناقة أمسيات رمضان تمتد حتى العيد.',
      ],
    },
    {
      heading: 'العيد، وهدايا تبقى',
      body: [
        'كثيرات يخترن قطعة العيد خلال رمضان. ويمكن تخصيص بطاقة داخلية مخفية في عبايات Bint Saeed باسم أو تاريخ عزيز أو رسالة خاصة — تفصيل لا تعرفه سواكِ.',
        'تُصمَّم كل قطعة في أبوظبي وتصلكِ أينما كنتِ في العالم.',
      ],
    },
  ],
  gridHeading: 'قطع الشهر',
  faqHeading: 'أسئلة شائعة',
  faqs: [
    {
      question: 'ماذا أرتدي على الإفطار؟',
      answer:
        'للإفطار في البيت أو مع العائلة، تمنحكِ عباية منسابة فوق فستان طويل إطلالة رصينة بلا تكلّف. أما لدعوات الإفطار الرسمية، فالعباية المستوحاة من البشت أو العباية المهيكلة — أو الطقم المنسّق — تمنحكِ حضورًا أكثر أناقة.',
    },
    {
      question: 'هل لديكم قفاطين لرمضان؟',
      answer:
        'نعم. القفاطين جزء من تشكيلتنا الجاهزة إلى جانب العبايات والفساتين والأطقم. تظهر في هذه الصفحة القطع المتوفرة حاليًا، والتشكيلة كاملة في المتجر.',
    },
    {
      question: 'هل تناسب تشكيلة رمضان العيد أيضًا؟',
      answer:
        'نعم. صُمّمت التشكيلة لتنتقل من أمسيات الشهر إلى العيد — وكثيرًا ما يُختار طقم Grosvenor من الساتان الحريري وعباياتنا الرسمية لمجالس العيد.',
    },
    {
      question: 'متى أطلب لرمضان أو العيد؟',
      answer:
        'تُصنع قطعنا حسب الطلب، وتعرض كل صفحة منتج موعد الشحن المتوقع، لذا ننصحكِ بالطلب مبكرًا في الموسم.',
    },
  ],
  shopCta: 'اكتشفي التشكيلة كاملة',
  breadcrumbHome: 'الرئيسية',
}

const FR: RamadanEditCopy = {
  metaTitle: 'Sélection Ramadan 2027 — Abayas, caftans et ensembles de luxe',
  metaDescription:
    'La sélection Ramadan de Bint Saeed : abayas de créateur, caftans, robes et ensembles en satin de soie pour l’iftar, les soirées du mois et l’Aïd. Conçus à Abou Dabi, livrés dans le monde entier.',
  keywords: [
    'collection Ramadan',
    'collection Ramadan 2027',
    'abaya Ramadan',
    'abayas Ramadan',
    'caftan Ramadan',
    'tenue Ramadan',
    'tenues Ramadan',
    'tenue iftar',
    'que porter pour l’iftar',
    'abaya Aïd',
    'tenue Aïd',
    'abaya de luxe Ramadan',
    'abaya de créateur',
    'mode modeste de luxe',
    'ensemble satin de soie',
    'abaya structurée',
    'Bint Saeed Ramadan',
  ],
  eyebrow: 'La sélection Ramadan',
  title: 'S’habiller pour le mois sacré',
  lead:
    'Le Ramadan impose un autre rythme : des soirées plus lentes, des tables partagées en famille, des visites qui se prolongent tard dans la nuit. La sélection Ramadan de Bint Saeed réunit abayas, caftans, robes et ensembles pensés pour ce rythme — posés, confortables, discrètement réfléchis, de l’iftar jusqu’à l’Aïd.',
  sections: [
    {
      heading: 'L’iftar, et les soirées qui suivent',
      body: [
        'Le mois se vit après le coucher du soleil. Iftar à la maison, réunions de famille, suhoor entre amies : chaque moment appelle des pièces qui bougent avec aisance et gardent leur ligne tout au long de la soirée.',
        'Nos abayas sont coupées pour cela : fluides là où il le faut, structurées là où cela compte, rehaussées de détails patrimoniaux inspirés du tressage de palmes Al Khous.',
      ],
    },
    {
      heading: 'Abayas, caftans et ensembles',
      body: [
        'Choisissez une abaya inspirée du bisht pour les soirées formelles, une abaya-veste structurée pour une silhouette plus nette, ou une robe longue sous une abaya ouverte pour les réunions à la maison.',
        'Pour les soirs qui demandent davantage, l’ensemble Grosvenor associe une chemise en satin de soie à une jupe longue et fluide — l’élégance des soirées du Ramadan, prolongée jusqu’à l’Aïd.',
      ],
    },
    {
      heading: 'L’Aïd, et les cadeaux qui restent',
      body: [
        'Beaucoup choisissent leur pièce de l’Aïd pendant le Ramadan. Les abayas Bint Saeed peuvent recevoir une étiquette intérieure cachée, personnalisée d’un prénom, d’une date qui compte ou d’un message intime — un détail connu de vous seule.',
        'Chaque pièce est conçue à Abou Dabi et livrée dans le monde entier.',
      ],
    },
  ],
  gridHeading: 'Les pièces du mois',
  faqHeading: 'Questions fréquentes',
  faqs: [
    {
      question: 'Que porter pour l’iftar ?',
      answer:
        'Pour un iftar à la maison ou en famille, une abaya fluide sur une robe longue reste simple et posée. Pour une invitation plus formelle, une abaya inspirée du bisht ou une abaya structurée — ou un ensemble coordonné — offre une ligne plus soignée.',
    },
    {
      question: 'Proposez-vous des caftans pour le Ramadan ?',
      answer:
        'Oui. Les caftans Bint Saeed font partie de notre prêt-à-porter, aux côtés des abayas, des robes et des ensembles. Les pièces actuellement disponibles figurent sur cette page ; la collection complète est en boutique.',
    },
    {
      question: 'Peut-on porter la sélection Ramadan pour l’Aïd ?',
      answer:
        'Oui. La sélection est pensée pour passer des soirées du mois à l’Aïd — l’ensemble Grosvenor en satin de soie et nos abayas habillées sont souvent choisis pour les réceptions de l’Aïd.',
    },
    {
      question: 'Quand commander pour le Ramadan ou l’Aïd ?',
      answer:
        'Nos pièces sont façonnées à la commande. Chaque fiche produit indique le délai d’expédition estimé ; nous vous conseillons donc de commander tôt dans la saison.',
    },
  ],
  shopCta: 'Découvrir toute la collection',
  breadcrumbHome: 'Accueil',
}

const IT: RamadanEditCopy = {
  metaTitle: 'Selezione Ramadan 2027 — Abaya, caftani e completi di lusso',
  metaDescription:
    'La selezione Ramadan di Bint Saeed: abaya d’autore, caftani, abiti e completi in raso di seta per l’iftar, le serate del mese e l’Eid. Disegnati ad Abu Dhabi, consegnati in tutto il mondo.',
  keywords: [
    'collezione Ramadan',
    'collezione Ramadan 2027',
    'abaya Ramadan',
    'caftano Ramadan',
    'outfit Ramadan',
    'look Ramadan',
    'outfit iftar',
    'cosa indossare per l’iftar',
    'abaya Eid',
    'outfit Eid',
    'abaya di lusso Ramadan',
    'abaya d’autore',
    'moda modesta di lusso',
    'completo in raso di seta',
    'abaya strutturata',
    'Bint Saeed Ramadan',
  ],
  eyebrow: 'La selezione Ramadan',
  title: 'Vestire il mese sacro',
  lead:
    'Il Ramadan chiede un ritmo diverso: serate più lente, tavole condivise in famiglia, visite che si allungano fino a notte. La selezione Ramadan di Bint Saeed riunisce abaya, caftani, abiti e completi pensati per questo ritmo — composti, confortevoli, discretamente curati, dall’iftar all’Eid.',
  sections: [
    {
      heading: 'L’iftar, e le serate che seguono',
      body: [
        'Il mese si vive dopo il tramonto. Iftar a casa, incontri in famiglia, suhoor con le amiche: ogni momento chiede capi che si muovano con naturalezza e mantengano la linea per tutta la sera.',
        'Le nostre abaya sono tagliate proprio per questo: fluide dove serve, strutturate dove conta, rifinite con dettagli di tradizione ispirati all’intreccio di palma Al Khous.',
      ],
    },
    {
      heading: 'Abaya, caftani e completi',
      body: [
        'Scegliete un’abaya ispirata al bisht per le serate formali, un’abaya-giacca strutturata per una silhouette più netta, o un abito lungo sotto un’abaya aperta per gli incontri in casa.',
        'Per le sere che chiedono di più, il completo Grosvenor unisce una camicia in raso di seta a una gonna lunga e fluida — l’eleganza delle serate di Ramadan, portata fino all’Eid.',
      ],
    },
    {
      heading: 'L’Eid, e i doni che restano',
      body: [
        'Molte scelgono il capo per l’Eid durante il Ramadan. Le abaya Bint Saeed possono accogliere un’etichetta interna nascosta, personalizzata con un nome, una data importante o un messaggio privato — un dettaglio noto solo a chi lo indossa.',
        'Ogni capo è disegnato ad Abu Dhabi e consegnato in tutto il mondo.',
      ],
    },
  ],
  gridHeading: 'I capi del mese',
  faqHeading: 'Domande frequenti',
  faqs: [
    {
      question: 'Cosa indossare per l’iftar?',
      answer:
        'Per un iftar a casa o in famiglia, un’abaya fluida su un abito lungo è semplice e composta. Per un invito più formale, un’abaya ispirata al bisht o un’abaya strutturata — oppure un completo coordinato — dona una linea più curata.',
    },
    {
      question: 'Avete caftani per il Ramadan?',
      answer:
        'Sì. I caftani Bint Saeed fanno parte del nostro prêt-à-porter, accanto ad abaya, abiti e completi. I capi attualmente disponibili sono in questa pagina; la collezione completa è nello shop.',
    },
    {
      question: 'La selezione Ramadan si può indossare per l’Eid?',
      answer:
        'Sì. La selezione è pensata per accompagnare le serate del mese fino all’Eid — il completo Grosvenor in raso di seta e le nostre abaya da sera sono spesso scelti per i ricevimenti dell’Eid.',
    },
    {
      question: 'Quando ordinare per il Ramadan o l’Eid?',
      answer:
        'I nostri capi sono realizzati su ordinazione. Ogni scheda prodotto indica i tempi di spedizione stimati: consigliamo di ordinare all’inizio della stagione.',
    },
  ],
  shopCta: 'Scopri l’intera collezione',
  breadcrumbHome: 'Home',
}

const NL: RamadanEditCopy = {
  metaTitle: 'Ramadan-selectie 2027 — Luxe abaya’s, kaftans en sets',
  metaDescription:
    'De Ramadan-selectie van Bint Saeed: designer abaya’s, kaftans, jurken en sets van zijdesatijn voor iftar, de avonden van de maand en Eid. Ontworpen in Abu Dhabi, wereldwijd geleverd.',
  keywords: [
    'Ramadan collectie',
    'Ramadan collectie 2027',
    'Ramadan abaya',
    'Ramadan kaftan',
    'Ramadan outfit',
    'Ramadan outfits',
    'iftar outfit',
    'wat draag je bij iftar',
    'Eid abaya',
    'Eid outfit',
    'luxe abaya Ramadan',
    'designer abaya',
    'luxe modest fashion',
    'zijdesatijnen set',
    'gestructureerde abaya',
    'Bint Saeed Ramadan',
  ],
  eyebrow: 'De Ramadan-selectie',
  title: 'Gekleed voor de heilige maand',
  lead:
    'Ramadan vraagt om een ander ritme: tragere avonden, tafels gedeeld met familie, bezoeken die tot diep in de nacht duren. De Ramadan-selectie van Bint Saeed brengt abaya’s, kaftans, jurken en sets samen die voor dat ritme zijn gemaakt — ingetogen, comfortabel en met zorg doordacht, van iftar tot Eid.',
  sections: [
    {
      heading: 'Iftar, en de avonden daarna',
      body: [
        'De maand speelt zich af na zonsondergang. Iftar thuis, samenkomsten met familie, suhoor met vriendinnen — elk moment vraagt om stukken die soepel bewegen en hun lijn de hele avond vasthouden.',
        'Onze abaya’s zijn daarvoor gesneden: vloeiend waar het moet, gestructureerd waar het telt, afgewerkt met erfgoeddetails geïnspireerd op Al Khous-palmvlechtwerk.',
      ],
    },
    {
      heading: 'Abaya’s, kaftans en sets',
      body: [
        'Kies een op de bisht geïnspireerde abaya voor formele avonden, een gestructureerde jasabaya voor een strakker silhouet, of een lange jurk onder een open abaya voor samenkomsten thuis.',
        'Voor avonden die om meer vragen, combineert de Grosvenor-set een blouse van zijdesatijn met een lange, vloeiende rok — de elegantie van de Ramadan-avonden, meegenomen tot Eid.',
      ],
    },
    {
      heading: 'Eid, en geschenken die blijven',
      body: [
        'Velen kiezen hun Eid-stuk al tijdens de Ramadan. Abaya’s van Bint Saeed kunnen een verborgen binnenlabel krijgen, gepersonaliseerd met een naam, een betekenisvolle datum of een persoonlijke boodschap — een detail dat alleen de draagster kent.',
        'Elk stuk wordt ontworpen in Abu Dhabi en wereldwijd geleverd.',
      ],
    },
  ],
  gridHeading: 'Stukken voor de maand',
  faqHeading: 'Veelgestelde vragen',
  faqs: [
    {
      question: 'Wat draag je bij iftar?',
      answer:
        'Voor iftar thuis of met familie is een vloeiende abaya over een lange jurk moeiteloos en ingetogen. Voor een formelere uitnodiging geeft een op de bisht geïnspireerde of gestructureerde abaya — of een gecoördineerde set — een verfijndere lijn.',
    },
    {
      question: 'Hebben jullie kaftans voor de Ramadan?',
      answer:
        'Ja. Kaftans van Bint Saeed horen bij onze ready-to-wear, naast abaya’s, jurken en sets. De stukken die nu beschikbaar zijn, staan op deze pagina; de volledige collectie vind je in de shop.',
    },
    {
      question: 'Kan ik de Ramadan-selectie ook voor Eid dragen?',
      answer:
        'Ja. De selectie is ontworpen om van de avonden van de maand door te lopen naar Eid — de Grosvenor-set van zijdesatijn en onze formele abaya’s worden vaak gekozen voor Eid-samenkomsten.',
    },
    {
      question: 'Wanneer bestel ik voor Ramadan of Eid?',
      answer:
        'Onze stukken worden op bestelling gemaakt. Elke productpagina toont de verwachte verzendtermijn, dus we raden aan vroeg in het seizoen te bestellen.',
    },
  ],
  shopCta: 'Ontdek de volledige collectie',
  breadcrumbHome: 'Home',
}

export const RAMADAN_EDIT_COPY: Record<RamadanLocale, RamadanEditCopy> = {
  en: EN,
  ar: AR,
  fr: FR,
  it: IT,
  nl: NL,
}

export function getRamadanEditCopy(locale: AppLocale): RamadanEditCopy {
  return isRamadanLocale(locale) ? RAMADAN_EDIT_COPY[locale] : EN
}
