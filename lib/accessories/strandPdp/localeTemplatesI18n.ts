import type { AppLocale } from '@/lib/i18n/routing'
import type { StrandPdpFaqItem } from '@/lib/accessories/strandPdp/types'

export type StrandPdpLocaleTemplates = {
  stoneOriginTitle: string
  naturalStoneTitle: string
  naturalStoneBody: string
  care: readonly string[]
  introP2Evening: string
  introP2Mood: string
  introP3: string
  introClosing: string
  detailDesignedFor: string
  detailHandAssembled: string
  detailHematite: string
  detailKnottedLine: string
  detailLength: string
  detailAttach: string
  detailPersonalise: string
  detailNotJewellery: string
  materialHematite: string
  materialKnottedLine: string
  pairOf: (strandShortName: string) => string
  pairOfLimited: (strandShortName: string) => string
}

type StrandPdpFaqStrings = {
  faqQ1: string
  faqA1: string
  faqQ2: string
  faqA2: string
  faqQ3: string
  faqA3: (strandLabel: string) => string
  faqQ4: string
  faqA4: (stoneLabel: string) => string
  faqQ5: string
  faqA5: string
  faqQ6: string
  faqA6: string
  faqQ7: string
  faqA7: string
  faqQ8: string
  faqA8: (stoneLabel: string, variationNote: string) => string
}

type LocalePack = StrandPdpLocaleTemplates & StrandPdpFaqStrings

const EN: LocalePack = {
  stoneOriginTitle: 'Stone Origin',
  naturalStoneTitle: 'Natural Stone',
  naturalStoneBody:
    'Every Signature Strand is created from genuine natural gemstones formed over millions of years. Variations in colour, inclusions and natural markings are not imperfections but part of the stone’s individual beauty, making every pair unique.',
  care: [
    'Remove the strands before washing or dry cleaning your garment.',
    'Avoid contact with water and prolonged moisture.',
    'Do not spray perfume directly onto the gemstones or gold-tone hardware.',
    'Store inside the Bint Saeed presentation box when not in use.',
    'Clean gently using a soft, dry microfibre cloth.',
    'Avoid prolonged exposure to direct sunlight and high humidity.',
  ],
  introP2Evening:
    'Created as one of Bint Saeed’s signature House Codes, these detachable strands invite a more personal way of dressing. Rather than purchasing another garment, they allow the same piece to evolve effortlessly for evening occasions, formal gatherings or everyday elegance.',
  introP2Mood:
    'Created as one of Bint Saeed’s signature House Codes, these detachable strands offer a new way to personalise your wardrobe. Rather than purchasing another garment, they allow the same piece to evolve according to the occasion, your accessories or simply the way you wish to express yourself that day.',
  introP3:
    'Designed exclusively for compatible Bint Saeed garments, including the Marylebone Abaya and future compatible creations, they can be attached or removed within seconds, creating a refined look that feels uniquely your own.',
  introClosing:
    'This is more than an accessory. It is a personal expression of one of Bint Saeed’s signature House Codes.',
  detailDesignedFor: 'Designed exclusively for compatible Bint Saeed garments',
  detailHandAssembled: 'Hand-assembled in Abu Dhabi, United Arab Emirates',
  detailHematite:
    'Faceted gold-plated Hematite accent beads positioned between every natural gemstone to catch and reflect light with every movement',
  detailKnottedLine: 'Finished with Bint Saeed’s signature gold-tone Knotted Line elements',
  detailLength: 'Approximately 15–17 cm in length',
  detailAttach: 'Easily attached or removed within seconds',
  detailPersonalise:
    'Designed to personalise your garment according to the occasion, your accessories or your mood',
  detailNotJewellery:
    'Created exclusively for Bint Saeed garments and not intended to be worn as jewellery',
  materialHematite: 'Faceted gold-plated Hematite accent beads',
  materialKnottedLine: 'Bint Saeed signature gold-tone Knotted Line elements',
  pairOf: (name) => `Pair of detachable ${name} Signature Strands`,
  pairOfLimited: (name) => `Pair of detachable ${name} Signature Strands — limited edition`,
  faqQ1: 'What is a Signature Strand?',
  faqA1:
    'A Signature Strand is one of Bint Saeed’s signature House Codes. Crafted from natural gemstones and signature gold-tone Knotted Line elements, it attaches to selected Bint Saeed garments, allowing you to personalise and transform your look without changing the garment itself.',
  faqQ2: 'Why would I own more than one Signature Strand?',
  faqA2:
    'Every natural stone brings its own character. Collecting different Signature Strands allows the same garment to evolve effortlessly, whether you wish to coordinate with your handbag, jewellery, shoes or the occasion itself.',
  faqQ3: 'Which Bint Saeed garments are compatible?',
  faqA3: (strandLabel) =>
    `${strandLabel} are designed for selected Bint Saeed garments featuring our concealed attachment system, including the Marylebone Abaya and future compatible designs clearly indicated on each product page.`,
  faqQ4: 'Are these genuine natural gemstones?',
  faqA4: (stoneLabel) =>
    `Yes. Every ${stoneLabel} bead is made from genuine natural stone. Differences in colour, markings and natural characteristics are expected and are a hallmark of authenticity.`,
  faqQ5: 'Can I wear the Signature Strands as jewellery?',
  faqA5:
    'No. Signature Strands have been designed exclusively as garment adornments and are not intended to be worn as necklaces, bracelets or earrings.',
  faqQ6: 'Can I match them with Bint Saeed jewellery?',
  faqA6:
    'Yes. Many Bint Saeed jewellery pieces are created using the same natural gemstones, allowing beautifully coordinated styling across your wardrobe.',
  faqQ7: 'Will more Signature Strands become available?',
  faqA7:
    'Yes. The Signature Strand collection will continue to grow with new natural gemstones, seasonal colours and future personalisation options, including initials, meaningful symbols and collectible charms.',
  faqQ8: 'My stones look different from the photographs. Is this normal?',
  faqA8: (stoneLabel, variationNote) =>
    `Absolutely. Every ${stoneLabel} gemstone is naturally formed over millions of years. ${variationNote}`,
}

const AR: LocalePack = {
  stoneOriginTitle: 'أصل الحجر',
  naturalStoneTitle: 'حجر طبيعي',
  naturalStoneBody:
    'يُصنع كل Signature Strand من أحجار كريمة طبيعية حقيقية تشكّلت عبر ملايين السنين. تباينات اللون والشوائب والعلامات الطبيعية ليست عيوباً بل جزءاً من جمال الحجر الفردي، ما يجعل كل زوج فريداً.',
  care: [
    'أزيلي الستراندات قبل غسل القطعة أو تنظيفها جافاً.',
    'تجنّبي ملامسة الماء والرطوبة لفترات طويلة.',
    'لا ترشّي العطر مباشرة على الأحجار الكريمة أو التفاصيل الذهبية.',
    'احفظيها داخل علبة تقديم Bint Saeed عند عدم الاستخدام.',
    'نظّفي بلطف بقطعة قماش ميكروفايبر ناعمة وجافة.',
    'تجنّبي التعرّض المطوّل لأشعة الشمس المباشرة والرطوبة العالية.',
  ],
  introP2Evening:
    'بوصفها أحد رموز الدار الحصرية من Bint Saeed، تدعو هذه الستراندات القابلة للفصل إلى أسلوب أكثر شخصية في اللبس. بدلاً من شراء قطعة جديدة، تتيح لنفس القطعة أن تتطوّر بسهولة لمناسبات المساء أو التجمعات الرسمية أو الأناقة اليومية.',
  introP2Mood:
    'بوصفها أحد رموز الدار الحصرية من Bint Saeed، تقدّم هذه الستراندات القابلة للفصل طريقة جديدة لتخصيص خزانتك. بدلاً من شراء قطعة جديدة، تتيح لنفس القطعة أن تتطوّر وفق المناسبة أو إكسسواراتك أو ببساطة الطريقة التي ترغبين في التعبير عن نفسك بها ذلك اليوم.',
  introP3:
    'صُمّمت حصرياً لقطع Bint Saeed المتوافقة، بما في ذلك عباءة Marylebone Abaya والإبداعات المتوافقة المستقبلية، ويمكن إرفاقها أو إزالتها خلال ثوانٍ، لإطلالة راقية تشعرين أنها خاصة بك.',
  introClosing: 'هذا أكثر من إكسسوار. إنه تعبير شخصي عن أحد رموز الدار الحصرية من Bint Saeed.',
  detailDesignedFor: 'صُمّم حصرياً لقطع Bint Saeed المتوافقة',
  detailHandAssembled: 'يُجمَّع يدوياً في أبوظبي، الإمارات العربية المتحدة',
  detailHematite:
    'خرز هيماتيت مطلي ذهباً ومقطّع موضوع بين كل حجر كريم طبيعي لالتقاط الضوء وعكسه مع كل حركة',
  detailKnottedLine: 'مُنهى بعناصر Knotted Line الذهبية الحصرية من Bint Saeed',
  detailLength: 'الطول تقريباً 15–17 سم',
  detailAttach: 'يُرفق أو يُزال بسهولة خلال ثوانٍ',
  detailPersonalise: 'صُمّم لتخصيص قطعتك وفق المناسبة أو إكسسواراتك أو مزاجك',
  detailNotJewellery: 'صُنع حصرياً لقطع Bint Saeed وغير مخصّص ليُرتدى كمجوهرات',
  materialHematite: 'خرز هيماتيت مطلي ذهباً ومقطّع',
  materialKnottedLine: 'عناصر Knotted Line الذهبية الحصرية من Bint Saeed',
  pairOf: (name) => `زوج من ستراندات ${name} Signature Strands القابلة للفصل`,
  pairOfLimited: (name) => `زوج من ستراندات ${name} Signature Strands القابلة للفصل — إصدار محدود`,
  faqQ1: 'ما هو Signature Strand؟',
  faqA1:
    'Signature Strand هو أحد رموز الدار الحصرية من Bint Saeed. يُصنع من أحجار كريمة طبيعية وعناصر Knotted Line الذهبية الحصرية، ويُثبَّت على قطع Bint Saeed المختارة، ليتيح لك تخصيص إطلالتك وتحويلها دون تغيير القطعة نفسها.',
  faqQ2: 'لماذا أمتلك أكثر من Signature Strand واحد؟',
  faqA2:
    'كل حجر طبيعي يحمل طابعه الخاص. امتلاك ستراندات Signature Strands مختلفة يتيح لنفس القطعة أن تتطوّر بسهولة، سواء رغبتِ في التنسيق مع حقيبتك أو مجوهراتك أو حذائك أو المناسبة نفسها.',
  faqQ3: 'ما هي قطع Bint Saeed المتوافقة؟',
  faqA3: (strandLabel) =>
    `${strandLabel} صُمّمت لقطع Bint Saeed المختارة التي تتضمّن نظام التثبيت المخفي لدينا، بما في ذلك عباءة Marylebone Abaya والتصاميم المتوافقة المستقبلية الموضّحة بوضوح في كل صفحة منتج.`,
  faqQ4: 'هل هذه أحجار كريمة طبيعية حقيقية؟',
  faqA4: (stoneLabel) =>
    `نعم. كل خرزة ${stoneLabel} مصنوعة من حجر طبيعي حقيقي. الاختلافات في اللون والعلامات والخصائص الطبيعية متوقعة وهي علامة على الأصالة.`,
  faqQ5: 'هل يمكنني ارتداء Signature Strands كمجوهرات؟',
  faqA5:
    'لا. صُمّمت Signature Strands حصرياً كزينة للملابس وغير مخصّصة ليُرتدى كقلائد أو أساور أو أقراط.',
  faqQ6: 'هل يمكنني تنسيقها مع مجوهرات Bint Saeed؟',
  faqA6:
    'نعم. تُصنع العديد من قطع مجوهرات Bint Saeed من نفس الأحجار الكريمة الطبيعية، ما يتيح تنسيقاً جميلاً عبر خزانتك.',
  faqQ7: 'هل ستتوفر المزيد من Signature Strands؟',
  faqA7:
    'نعم. سيستمر توسّع مجموعة Signature Strand بأحجار كريمة طبيعية جديدة وألوان موسمية وخيارات تخصيص مستقبلية، بما في ذلك الأحرف الأولى والرموز ذات المعنى والتعليقات القابلة للجمع.',
  faqQ8: 'أحجاري تبدو مختلفة عن الصور. هل هذا طبيعي؟',
  faqA8: (stoneLabel, variationNote) =>
    `بالتأكيد. كل حجر ${stoneLabel} كريم يتشكّل طبيعياً عبر ملايين السنين. ${variationNote}`,
}

const FR: LocalePack = {
  stoneOriginTitle: 'Origine de la pierre',
  naturalStoneTitle: 'Pierre naturelle',
  naturalStoneBody:
    'Chaque Signature Strand est créé à partir de véritables pierres naturelles formées sur des millions d’années. Les variations de couleur, les inclusions et les marques naturelles ne sont pas des imperfections mais font partie de la beauté individuelle de la pierre, rendant chaque paire unique.',
  care: [
    'Retirez les fils avant de laver ou de nettoyer à sec votre vêtement.',
    'Évitez le contact avec l’eau et l’humidité prolongée.',
    'Ne vaporisez pas de parfum directement sur les pierres ou les finitions dorées.',
    'Rangez-les dans l’écrin Bint Saeed lorsqu’elles ne sont pas utilisées.',
    'Nettoyez délicatement avec un chiffon microfibre doux et sec.',
    'Évitez une exposition prolongée au soleil direct et à une forte humidité.',
  ],
  introP2Evening:
    'Créés comme l’un des codes de la maison signature de Bint Saeed, ces fils amovibles invitent à une façon plus personnelle de s’habiller. Plutôt que d’acheter un nouveau vêtement, ils permettent à la même pièce d’évoluer sans effort pour les soirées, les réceptions formelles ou l’élégance du quotidien.',
  introP2Mood:
    'Créés comme l’un des codes de la maison signature de Bint Saeed, ces fils amovibles offrent une nouvelle façon de personnaliser votre garde-robe. Plutôt que d’acheter un nouveau vêtement, ils permettent à la même pièce d’évoluer selon l’occasion, vos accessoires ou simplement la manière dont vous souhaitez vous exprimer ce jour-là.',
  introP3:
    'Conçus exclusivement pour les vêtements Bint Saeed compatibles, y compris l’abaya Marylebone et les futures créations compatibles, ils peuvent être attachés ou retirés en quelques secondes, créant un look raffiné qui vous est propre.',
  introClosing:
    'C’est plus qu’un accessoire. C’est une expression personnelle de l’un des codes de la maison signature de Bint Saeed.',
  detailDesignedFor: 'Conçu exclusivement pour les vêtements Bint Saeed compatibles',
  detailHandAssembled: 'Assemblé à la main à Abu Dhabi, Émirats arabes unis',
  detailHematite:
    'Perles d’accent en Hématite plaquée or facettées, positionnées entre chaque pierre naturelle pour capter et refléter la lumière à chaque mouvement',
  detailKnottedLine: 'Fini avec les éléments Knotted Line dorés signature de Bint Saeed',
  detailLength: 'Longueur d’environ 15–17 cm',
  detailAttach: 'Facilement attaché ou retiré en quelques secondes',
  detailPersonalise:
    'Conçu pour personnaliser votre vêtement selon l’occasion, vos accessoires ou votre humeur',
  detailNotJewellery:
    'Créé exclusivement pour les vêtements Bint Saeed et non destiné à être porté comme bijou',
  materialHematite: 'Perles d’accent en Hématite plaquée or facettées',
  materialKnottedLine: 'Éléments Knotted Line dorés signature Bint Saeed',
  pairOf: (name) => `Paire de Signature Strands ${name} amovibles`,
  pairOfLimited: (name) => `Paire de Signature Strands ${name} amovibles — édition limitée`,
  faqQ1: 'Qu’est-ce qu’un Signature Strand ?',
  faqA1:
    'Un Signature Strand est l’un des codes de la maison signature de Bint Saeed. Fabriqué à partir de pierres naturelles et d’éléments Knotted Line dorés signature, il s’attache aux vêtements Bint Saeed sélectionnés, vous permettant de personnaliser et transformer votre look sans changer le vêtement lui-même.',
  faqQ2: 'Pourquoi posséder plus d’un Signature Strand ?',
  faqA2:
    'Chaque pierre naturelle a son propre caractère. Collectionner différents Signature Strands permet au même vêtement d’évoluer sans effort, que vous souhaitiez coordonner avec votre sac, vos bijoux, vos chaussures ou l’occasion elle-même.',
  faqQ3: 'Quels vêtements Bint Saeed sont compatibles ?',
  faqA3: (strandLabel) =>
    `Les ${strandLabel} sont conçus pour des vêtements Bint Saeed sélectionnés dotés de notre système d’attache dissimulé, y compris l’abaya Marylebone et les futures créations compatibles clairement indiquées sur chaque page produit.`,
  faqQ4: 'S’agit-il de véritables pierres naturelles ?',
  faqA4: (stoneLabel) =>
    `Oui. Chaque perle en ${stoneLabel} est faite de pierre naturelle authentique. Les différences de couleur, de marques et de caractéristiques naturelles sont attendues et témoignent de l’authenticité.`,
  faqQ5: 'Puis-je porter les Signature Strands comme bijoux ?',
  faqA5:
    'Non. Les Signature Strands ont été conçus exclusivement comme ornements de vêtement et ne sont pas destinés à être portés en colliers, bracelets ou boucles d’oreilles.',
  faqQ6: 'Puis-je les assortir aux bijoux Bint Saeed ?',
  faqA6:
    'Oui. De nombreuses pièces de bijouterie Bint Saeed sont créées avec les mêmes pierres naturelles, permettant une coordination harmonieuse dans votre garde-robe.',
  faqQ7: 'D’autres Signature Strands seront-ils disponibles ?',
  faqA7:
    'Oui. La collection Signature Strand continuera de s’enrichir avec de nouvelles pierres naturelles, des couleurs saisonnières et de futures options de personnalisation, y compris initiales, symboles significatifs et breloques collectionnables.',
  faqQ8: 'Mes pierres semblent différentes des photographies. Est-ce normal ?',
  faqA8: (stoneLabel, variationNote) =>
    `Absolument. Chaque gemme en ${stoneLabel} est formée naturellement sur des millions d’années. ${variationNote}`,
}

const IT: LocalePack = {
  stoneOriginTitle: 'Origine della pietra',
  naturalStoneTitle: 'Pietra naturale',
  naturalStoneBody:
    'Ogni Signature Strand è creato da autentiche gemme naturali formatesi nel corso di milioni di anni. Le variazioni di colore, le inclusioni e le marcature naturali non sono imperfezioni ma parte della bellezza individuale della pietra, rendendo ogni paio unico.',
  care: [
    'Rimuovi i fili prima di lavare o lavare a secco il capo.',
    'Evita il contatto con acqua e umidità prolungata.',
    'Non spruzzare profumo direttamente sulle gemme o sulle finiture dorate.',
    'Conservali nella confezione Bint Saeed quando non in uso.',
    'Pulisci delicatamente con un panno in microfibra morbido e asciutto.',
    'Evita un’esposizione prolungata alla luce solare diretta e all’alta umidità.',
  ],
  introP2Evening:
    'Creati come uno dei codici di casa signature di Bint Saeed, questi fili staccabili invitano a un modo più personale di vestirsi. Piuttosto che acquistare un altro capo, permettono allo stesso pezzo di evolversi senza sforzo per serate, occasioni formali o eleganza quotidiana.',
  introP2Mood:
    'Creati come uno dei codici di casa signature di Bint Saeed, questi fili staccabili offrono un nuovo modo di personalizzare il guardaroba. Piuttosto che acquistare un altro capo, permettono allo stesso pezzo di evolversi secondo l’occasione, gli accessori o semplicemente il modo in cui desideri esprimerti quel giorno.',
  introP3:
    'Progettati esclusivamente per i capi Bint Saeed compatibili, inclusa l’abaya Marylebone e le future creazioni compatibili, possono essere applicati o rimossi in pochi secondi, creando un look raffinato che ti appartiene.',
  introClosing:
    'Questo è più di un accessorio. È un’espressione personale di uno dei codici di casa signature di Bint Saeed.',
  detailDesignedFor: 'Progettato esclusivamente per capi Bint Saeed compatibili',
  detailHandAssembled: 'Assemblato a mano ad Abu Dhabi, Emirati Arabi Uniti',
  detailHematite:
    'Perle d’accento in Ematite placcata oro sfaccettate, posizionate tra ogni gemma naturale per catturare e riflettere la luce ad ogni movimento',
  detailKnottedLine: 'Finito con gli elementi Knotted Line dorati signature di Bint Saeed',
  detailLength: 'Lunghezza di circa 15–17 cm',
  detailAttach: 'Facilmente applicato o rimosso in pochi secondi',
  detailPersonalise:
    'Progettato per personalizzare il capo secondo l’occasione, gli accessori o il tuo umore',
  detailNotJewellery:
    'Creato esclusivamente per capi Bint Saeed e non destinato a essere indossato come gioiello',
  materialHematite: 'Perle d’accento in Ematite placcata oro sfaccettate',
  materialKnottedLine: 'Elementi Knotted Line dorati signature Bint Saeed',
  pairOf: (name) => `Paio di Signature Strands ${name} staccabili`,
  pairOfLimited: (name) => `Paio di Signature Strands ${name} staccabili — edizione limitata`,
  faqQ1: 'Cos’è un Signature Strand?',
  faqA1:
    'Un Signature Strand è uno dei codici di casa signature di Bint Saeed. Realizzato con gemme naturali ed elementi Knotted Line dorati signature, si fissa ai capi Bint Saeed selezionati, permettendoti di personalizzare e trasformare il tuo look senza cambiare il capo stesso.',
  faqQ2: 'Perché possedere più di un Signature Strand?',
  faqA2:
    'Ogni pietra naturale ha il proprio carattere. Collezionare diversi Signature Strands permette allo stesso capo di evolversi senza sforzo, che tu voglia coordinare con la borsa, i gioielli, le scarpe o l’occasione stessa.',
  faqQ3: 'Quali capi Bint Saeed sono compatibili?',
  faqA3: (strandLabel) =>
    `I ${strandLabel} sono progettati per capi Bint Saeed selezionati con il nostro sistema di attacco nascosto, inclusa l’abaya Marylebone e i futuri design compatibili chiaramente indicati in ogni pagina prodotto.`,
  faqQ4: 'Si tratta di gemme naturali autentiche?',
  faqA4: (stoneLabel) =>
    `Sì. Ogni perla in ${stoneLabel} è realizzata in pietra naturale autentica. Le differenze di colore, marcature e caratteristiche naturali sono attese e sono segno di autenticità.`,
  faqQ5: 'Posso indossare i Signature Strands come gioielli?',
  faqA5:
    'No. I Signature Strands sono stati progettati esclusivamente come ornamenti per capi e non sono destinati a essere indossati come collane, bracciali o orecchini.',
  faqQ6: 'Posso abbinarli ai gioielli Bint Saeed?',
  faqA6:
    'Sì. Molti gioielli Bint Saeed sono creati con le stesse gemme naturali, permettendo uno styling coordinato e armonioso nel guardaroba.',
  faqQ7: 'Saranno disponibili altri Signature Strands?',
  faqA7:
    'Sì. La collezione Signature Strand continuerà a crescere con nuove gemme naturali, colori stagionali e future opzioni di personalizzazione, inclusi iniziali, simboli significativi e ciondoli da collezione.',
  faqQ8: 'Le mie pietre sembrano diverse dalle fotografie. È normale?',
  faqA8: (stoneLabel, variationNote) =>
    `Assolutamente. Ogni gemma in ${stoneLabel} si forma naturalmente nel corso di milioni di anni. ${variationNote}`,
}

const ES: LocalePack = {
  stoneOriginTitle: 'Origen de la piedra',
  naturalStoneTitle: 'Piedra natural',
  naturalStoneBody:
    'Cada Signature Strand está creado con auténticas gemas naturales formadas durante millones de años. Las variaciones de color, inclusiones y marcas naturales no son imperfecciones sino parte de la belleza individual de la piedra, haciendo que cada par sea único.',
  care: [
    'Retire los hilos antes de lavar o limpiar en seco su prenda.',
    'Evite el contacto con agua y humedad prolongada.',
    'No rocíe perfume directamente sobre las gemas o los acabados dorados.',
    'Guárdelos en la caja de presentación Bint Saeed cuando no los use.',
    'Limpie suavemente con un paño de microfibra suave y seco.',
    'Evite la exposición prolongada a la luz solar directa y a la alta humedad.',
  ],
  introP2Evening:
    'Creados como uno de los códigos de la casa signature de Bint Saeed, estos hilos desmontables invitan a una forma más personal de vestir. En lugar de adquirir otra prenda, permiten que la misma pieza evolucione sin esfuerzo para ocasiones nocturnas, reuniones formales o elegancia cotidiana.',
  introP2Mood:
    'Creados como uno de los códigos de la casa signature de Bint Saeed, estos hilos desmontables ofrecen una nueva forma de personalizar su guardarropa. En lugar de adquirir otra prenda, permiten que la misma pieza evolucione según la ocasión, sus accesorios o simplemente la forma en que desea expresarse ese día.',
  introP3:
    'Diseñados exclusivamente para prendas Bint Saeed compatibles, incluida la abaya Marylebone y futuras creaciones compatibles, pueden colocarse o retirarse en segundos, creando un look refinado que se siente únicamente suyo.',
  introClosing:
    'Esto es más que un accesorio. Es una expresión personal de uno de los códigos de la casa signature de Bint Saeed.',
  detailDesignedFor: 'Diseñado exclusivamente para prendas Bint Saeed compatibles',
  detailHandAssembled: 'Ensamblado a mano en Abu Dabi, Emiratos Árabes Unidos',
  detailHematite:
    'Cuentas de acento de Hematita chapada en oro facetadas, colocadas entre cada gema natural para captar y reflejar la luz con cada movimiento',
  detailKnottedLine: 'Acabado con los elementos Knotted Line dorados signature de Bint Saeed',
  detailLength: 'Longitud de aproximadamente 15–17 cm',
  detailAttach: 'Fácilmente colocado o retirado en segundos',
  detailPersonalise:
    'Diseñado para personalizar su prenda según la ocasión, sus accesorios o su estado de ánimo',
  detailNotJewellery:
    'Creado exclusivamente para prendas Bint Saeed y no destinado a usarse como joyería',
  materialHematite: 'Cuentas de acento de Hematita chapada en oro facetadas',
  materialKnottedLine: 'Elementos Knotted Line dorados signature Bint Saeed',
  pairOf: (name) => `Par de Signature Strands ${name} desmontables`,
  pairOfLimited: (name) => `Par de Signature Strands ${name} desmontables — edición limitada`,
  faqQ1: '¿Qué es un Signature Strand?',
  faqA1:
    'Un Signature Strand es uno de los códigos de la casa signature de Bint Saeed. Elaborado con gemas naturales y elementos Knotted Line dorados signature, se fija a prendas Bint Saeed seleccionadas, permitiéndole personalizar y transformar su look sin cambiar la prenda en sí.',
  faqQ2: '¿Por qué poseer más de un Signature Strand?',
  faqA2:
    'Cada piedra natural tiene su propio carácter. Coleccionar diferentes Signature Strands permite que la misma prenda evolucione sin esfuerzo, ya sea para coordinar con su bolso, joyería, zapatos o la ocasión misma.',
  faqQ3: '¿Qué prendas Bint Saeed son compatibles?',
  faqA3: (strandLabel) =>
    `Los ${strandLabel} están diseñados para prendas Bint Saeed seleccionadas con nuestro sistema de fijación oculto, incluida la abaya Marylebone y futuros diseños compatibles claramente indicados en cada página de producto.`,
  faqQ4: '¿Son gemas naturales auténticas?',
  faqA4: (stoneLabel) =>
    `Sí. Cada cuenta de ${stoneLabel} está hecha de piedra natural auténtica. Las diferencias de color, marcas y características naturales son esperadas y son señal de autenticidad.`,
  faqQ5: '¿Puedo usar los Signature Strands como joyería?',
  faqA5:
    'No. Los Signature Strands han sido diseñados exclusivamente como adornos de prenda y no están destinados a usarse como collares, pulseras o pendientes.',
  faqQ6: '¿Puedo combinarlos con joyería Bint Saeed?',
  faqA6:
    'Sí. Muchas piezas de joyería Bint Saeed se crean con las mismas gemas naturales, permitiendo un estilo coordinado y armonioso en su guardarropa.',
  faqQ7: '¿Habrá más Signature Strands disponibles?',
  faqA7:
    'Sí. La colección Signature Strand seguirá creciendo con nuevas gemas naturales, colores de temporada y futuras opciones de personalización, incluidas iniciales, símbolos significativos y dijes coleccionables.',
  faqQ8: 'Mis piedras se ven diferentes a las fotografías. ¿Es normal?',
  faqA8: (stoneLabel, variationNote) =>
    `Por supuesto. Cada gema de ${stoneLabel} se forma naturalmente durante millones de años. ${variationNote}`,
}

const RU: LocalePack = {
  stoneOriginTitle: 'Происхождение камня',
  naturalStoneTitle: 'Натуральный камень',
  naturalStoneBody:
    'Каждый Signature Strand создан из подлинных натуральных камней, сформировавшихся за миллионы лет. Вариации цвета, включения и природные отметины — не недостатки, а часть индивидуальной красоты камня, делающая каждую пару уникальной.',
  care: [
    'Снимайте нити перед стиркой или химчисткой изделия.',
    'Избегайте контакта с водой и длительной влажности.',
    'Не распыляйте парфюм непосредственно на камни или золотистую фурнитуру.',
    'Храните в фирменной коробке Bint Saeed, когда не используете.',
    'Аккуратно протирайте мягкой сухой микрофибровой салфеткой.',
    'Избегайте длительного воздействия прямых солнечных лучей и высокой влажности.',
  ],
  introP2Evening:
    'Созданные как один из фирменных кодов дома Bint Saeed, эти съёмные нити приглашают к более личному способу одеваться. Вместо покупки нового изделия они позволяют тому же предмету легко меняться для вечерних случаев, официальных встреч или повседневной элегантности.',
  introP2Mood:
    'Созданные как один из фирменных кодов дома Bint Saeed, эти съёмные нити предлагают новый способ персонализировать гардероб. Вместо покупки нового изделия они позволяют тому же предмету меняться в зависимости от случая, аксессуаров или просто того, как вы хотите выразить себя в этот день.',
  introP3:
    'Разработаны исключительно для совместимых изделий Bint Saeed, включая абайю Marylebone и будущие совместимые модели; их можно закрепить или снять за секунды, создавая утончённый образ, который ощущается по-настоящему вашим.',
  introClosing:
    'Это больше, чем аксессуар. Это личное выражение одного из фирменных кодов дома Bint Saeed.',
  detailDesignedFor: 'Разработано исключительно для совместимых изделий Bint Saeed',
  detailHandAssembled: 'Собрано вручную в Абу-Даби, Объединённые Арабские Эмираты',
  detailHematite:
    'Фацетные акцентные бусины из позолоченного гематита между каждым натуральным камнем — для улавливания и отражения света при каждом движении',
  detailKnottedLine: 'Завершено фирменными золотистыми элементами Knotted Line от Bint Saeed',
  detailLength: 'Длина примерно 15–17 см',
  detailAttach: 'Легко закрепляется или снимается за секунды',
  detailPersonalise:
    'Создано для персонализации изделия в зависимости от случая, аксессуаров или настроения',
  detailNotJewellery:
    'Создано исключительно для изделий Bint Saeed и не предназначено для ношения как украшение',
  materialHematite: 'Фацетные акцентные бусины из позолоченного гематита',
  materialKnottedLine: 'Фирменные золотистые элементы Knotted Line Bint Saeed',
  pairOf: (name) => `Пара съёмных Signature Strands ${name}`,
  pairOfLimited: (name) => `Пара съёмных Signature Strands ${name} — лимитированная серия`,
  faqQ1: 'Что такое Signature Strand?',
  faqA1:
    'Signature Strand — один из фирменных кодов дома Bint Saeed. Создан из натуральных камней и фирменных золотистых элементов Knotted Line, крепится к выбранным изделиям Bint Saeed, позволяя персонализировать и преобразить образ без смены самого изделия.',
  faqQ2: 'Зачем иметь более одного Signature Strand?',
  faqA2:
    'Каждый натуральный камень обладает своим характером. Коллекционирование разных Signature Strands позволяет одному изделию легко меняться — в гармонии с сумкой, украшениями, обувью или самим случаем.',
  faqQ3: 'Какие изделия Bint Saeed совместимы?',
  faqA3: (strandLabel) =>
    `${strandLabel} разработаны для выбранных изделий Bint Saeed со скрытой системой крепления, включая абайю Marylebone и будущие совместимые модели, чётко указанные на каждой странице товара.`,
  faqQ4: 'Это подлинные натуральные камни?',
  faqA4: (stoneLabel) =>
    `Да. Каждая бусина из ${stoneLabel} сделана из подлинного натурального камня. Различия в цвете, отметинах и природных характеристиках ожидаемы и являются признаком подлинности.`,
  faqQ5: 'Можно ли носить Signature Strands как украшения?',
  faqA5:
    'Нет. Signature Strands разработаны исключительно как украшения для одежды и не предназначены для ношения в качестве ожерелий, браслетов или серёг.',
  faqQ6: 'Можно ли сочетать их с украшениями Bint Saeed?',
  faqA6:
    'Да. Многие украшения Bint Saeed созданы из тех же натуральных камней, что позволяет гармонично координировать образ.',
  faqQ7: 'Появятся ли ещё Signature Strands?',
  faqA7:
    'Да. Коллекция Signature Strand будет расширяться новыми натуральными камнями, сезонными оттенками и будущими вариантами персонализации, включая инициалы, значимые символы и коллекционные подвески.',
  faqQ8: 'Мои камни выглядят иначе, чем на фотографиях. Это нормально?',
  faqA8: (stoneLabel, variationNote) =>
    `Безусловно. Каждый камень ${stoneLabel} формируется природой за миллионы лет. ${variationNote}`,
}

const ZH: LocalePack = {
  stoneOriginTitle: '宝石来源',
  naturalStoneTitle: '天然宝石',
  naturalStoneBody:
    '每一款 Signature Strand 均采用历经数百万年形成的天然宝石精心打造。色泽、内含物与自然纹理的差异并非瑕疵，而是宝石独特之美的一部分，令每一对都独一无二。',
  care: [
    '清洗或干洗服装前请先取下饰带。',
    '避免接触水及长时间潮湿环境。',
    '请勿将香水直接喷洒在宝石或金色配件上。',
    '不佩戴时请存放于 Bint Saeed 礼盒内。',
    '请用柔软干燥的微纤维布轻轻擦拭。',
    '避免长时间暴露于阳光直射及高湿度环境。',
  ],
  introP2Evening:
    '作为 Bint Saeed 标志性 House Codes 之一，这些可拆卸饰带带来更具个人风格的着装方式。无需购置新衣，同一件作品即可轻松演变，适配晚宴、正式聚会或日常优雅场合。',
  introP2Mood:
    '作为 Bint Saeed 标志性 House Codes 之一，这些可拆卸饰带为衣橱带来全新的个性化方式。无需购置新衣，同一件作品即可随场合、配饰或当日心境而演变。',
  introP3:
    '专为兼容的 Bint Saeed 服装而设计，包括 Marylebone Abaya 及未来兼容作品，可在数秒内轻松装卸，打造精致而独具个人气质的造型。',
  introClosing: '这不仅是配饰，更是 Bint Saeed 标志性 House Codes 的个人表达。',
  detailDesignedFor: '专为兼容的 Bint Saeed 服装而设计',
  detailHandAssembled: '于阿联酋阿布扎比手工组装',
  detailHematite: '每颗天然宝石之间镶嵌切面镀金赤铁矿点缀珠，随动作捕捉并反射光线',
  detailKnottedLine: '以 Bint Saeed 标志性金色 Knotted Line 元素收尾',
  detailLength: '长度约 15–17 厘米',
  detailAttach: '可在数秒内轻松装卸',
  detailPersonalise: '专为随场合、配饰或心境个性化您的服装而设计',
  detailNotJewellery: '专为 Bint Saeed 服装而创，非作为珠宝佩戴',
  materialHematite: '切面镀金赤铁矿点缀珠',
  materialKnottedLine: 'Bint Saeed 标志性金色 Knotted Line 元素',
  pairOf: (name) => `一对可拆卸 ${name} Signature Strands`,
  pairOfLimited: (name) => `一对可拆卸 ${name} Signature Strands — 限量版`,
  faqQ1: '什么是 Signature Strand？',
  faqA1:
    'Signature Strand 是 Bint Saeed 标志性 House Codes 之一。以天然宝石与标志性金色 Knotted Line 元素精心打造，可固定于精选 Bint Saeed 服装，让您无需更换服装即可个性化并变换造型。',
  faqQ2: '为何拥有多款 Signature Strand？',
  faqA2:
    '每颗天然宝石皆独具个性。收藏不同 Signature Strands 可让同一件服装轻松演变，无论您希望与手袋、珠宝、鞋履或场合本身协调搭配。',
  faqQ3: '哪些 Bint Saeed 服装兼容？',
  faqA3: (strandLabel) =>
    `${strandLabel} 专为采用隐蔽固定系统的精选 Bint Saeed 服装而设计，包括 Marylebone Abaya 及各产品页明确标注的未来兼容款式。`,
  faqQ4: '这些是真正的天然宝石吗？',
  faqA4: (stoneLabel) =>
    `是的。每一颗 ${stoneLabel} 珠均由真正的天然石材制成。色泽、纹理与自然特征的差异属正常现象，亦是真品之标志。`,
  faqQ5: '可以将 Signature Strands 作为珠宝佩戴吗？',
  faqA5: '不可以。Signature Strands 专为服装装饰而设计，不宜作为项链、手链或耳环佩戴。',
  faqQ6: '可以与 Bint Saeed 珠宝搭配吗？',
  faqA6: '可以。许多 Bint Saeed 珠宝采用相同的天然宝石，令整体造型协调统一。',
  faqQ7: '未来还会有更多 Signature Strands 吗？',
  faqA7:
    '会的。Signature Strand 系列将持续推出新的天然宝石、季节色彩及未来个性化选项，包括字母、寓意符号及收藏级吊饰。',
  faqQ8: '我的宝石与照片看起来不同，这正常吗？',
  faqA8: (stoneLabel, variationNote) =>
    `完全正常。每一颗 ${stoneLabel} 宝石均经数百万年自然形成。${variationNote}`,
}

const DE: LocalePack = {
  stoneOriginTitle: 'Herkunft des Steins',
  naturalStoneTitle: 'Naturstein',
  naturalStoneBody:
    'Jeder Signature Strand wird aus echten Natursteinen gefertigt, die über Millionen von Jahren entstanden sind. Farbvariationen, Einschlüsse und natürliche Markierungen sind keine Mängel, sondern Teil der individuellen Schönheit des Steins — jedes Paar ist einzigartig.',
  care: [
    'Entfernen Sie die Stränge vor dem Waschen oder chemischen Reinigen Ihres Kleidungsstücks.',
    'Vermeiden Sie Kontakt mit Wasser und anhaltender Feuchtigkeit.',
    'Sprühen Sie kein Parfum direkt auf die Edelsteine oder goldfarbenen Beschläge.',
    'Bewahren Sie sie in der Bint Saeed Präsentationsbox auf, wenn sie nicht getragen werden.',
    'Reinigen Sie sanft mit einem weichen, trockenen Mikrofasertuch.',
    'Vermeiden Sie längere direkte Sonneneinstrahlung und hohe Luftfeuchtigkeit.',
  ],
  introP2Evening:
    'Als einer der charakteristischen House Codes von Bint Saeed laden diese abnehmbaren Stränge zu einer persönlicheren Art des Ankleidens ein. Statt ein neues Kleidungsstück zu kaufen, ermöglichen sie demselben Stück, mühelos für Abendanlässe, formelle Zusammenkünfte oder alltägliche Eleganz zu wandeln.',
  introP2Mood:
    'Als einer der charakteristischen House Codes von Bint Saeed bieten diese abnehmbaren Stränge eine neue Art, die Garderobe zu personalisieren. Statt ein neues Kleidungsstück zu kaufen, ermöglichen sie demselben Stück, sich je nach Anlass, Accessoires oder einfach danach zu entwickeln, wie Sie sich an diesem Tag ausdrücken möchten.',
  introP3:
    'Exklusiv für kompatible Bint Saeed Kleidungsstücke entwickelt, einschließlich der Marylebone Abaya und zukünftiger kompatibler Kreationen, können sie innerhalb von Sekunden befestigt oder entfernt werden und schaffen einen raffinierten Look, der sich einzigartig nach Ihnen anfühlt.',
  introClosing:
    'Dies ist mehr als ein Accessoire. Es ist ein persönlicher Ausdruck eines der charakteristischen House Codes von Bint Saeed.',
  detailDesignedFor: 'Exklusiv für kompatible Bint Saeed Kleidungsstücke entwickelt',
  detailHandAssembled: 'Handmontiert in Abu Dhabi, Vereinigte Arabische Emirate',
  detailHematite:
    'Facettierte Akzentperlen aus goldplattiertem Hämatit zwischen jedem Naturstein, um bei jeder Bewegung Licht einzufangen und zu reflektieren',
  detailKnottedLine: 'Veredelt mit den charakteristischen goldfarbenen Knotted Line Elementen von Bint Saeed',
  detailLength: 'Etwa 15–17 cm lang',
  detailAttach: 'Leicht innerhalb von Sekunden zu befestigen oder zu entfernen',
  detailPersonalise:
    'Entwickelt, um Ihr Kleidungsstück je nach Anlass, Accessoires oder Stimmung zu personalisieren',
  detailNotJewellery:
    'Exklusiv für Bint Saeed Kleidungsstücke geschaffen und nicht als Schmuck gedacht',
  materialHematite: 'Facettierte Akzentperlen aus goldplattiertem Hämatit',
  materialKnottedLine: 'Charakteristische goldfarbene Knotted Line Elemente von Bint Saeed',
  pairOf: (name) => `Paar abnehmbarer ${name} Signature Strands`,
  pairOfLimited: (name) => `Paar abnehmbarer ${name} Signature Strands — limitierte Auflage`,
  faqQ1: 'Was ist ein Signature Strand?',
  faqA1:
    'Ein Signature Strand ist einer der charakteristischen House Codes von Bint Saeed. Aus Natursteinen und charakteristischen goldfarbenen Knotted Line Elementen gefertigt, wird er an ausgewählten Bint Saeed Kleidungsstücken befestigt und ermöglicht es, den Look zu personalisieren und zu verändern, ohne das Kleidungsstück selbst zu wechseln.',
  faqQ2: 'Warum mehr als einen Signature Strand besitzen?',
  faqA2:
    'Jeder Naturstein hat seinen eigenen Charakter. Verschiedene Signature Strands zu sammeln ermöglicht demselben Kleidungsstück, mühelos zu wandeln — ob mit Handtasche, Schmuck, Schuhen oder dem Anlass selbst abgestimmt.',
  faqQ3: 'Welche Bint Saeed Kleidungsstücke sind kompatibel?',
  faqA3: (strandLabel) =>
    `${strandLabel} sind für ausgewählte Bint Saeed Kleidungsstücke mit unserem verdeckten Befestigungssystem entwickelt, einschließlich der Marylebone Abaya und zukünftiger kompatibler Designs, die auf jeder Produktseite klar angegeben sind.`,
  faqQ4: 'Sind dies echte Natursteine?',
  faqA4: (stoneLabel) =>
    `Ja. Jede ${stoneLabel}-Perle besteht aus echtem Naturstein. Unterschiede in Farbe, Markierungen und natürlichen Merkmalen sind zu erwarten und ein Zeichen der Echtheit.`,
  faqQ5: 'Kann ich Signature Strands als Schmuck tragen?',
  faqA5:
    'Nein. Signature Strands wurden ausschließlich als Kleidungsverzierungen entwickelt und sind nicht als Halsketten, Armbänder oder Ohrringe gedacht.',
  faqQ6: 'Kann ich sie mit Bint Saeed Schmuck kombinieren?',
  faqA6:
    'Ja. Viele Bint Saeed Schmuckstücke werden aus denselben Natursteinen gefertigt und ermöglichen eine harmonisch abgestimmte Garderobe.',
  faqQ7: 'Werden weitere Signature Strands verfügbar sein?',
  faqA7:
    'Ja. Die Signature Strand Kollektion wird mit neuen Natursteinen, saisonalen Farben und zukünftigen Personalisierungsoptionen wachsen, einschließlich Initialen, bedeutungsvoller Symbole und Sammler-Anhänger.',
  faqQ8: 'Meine Steine sehen anders aus als auf den Fotos. Ist das normal?',
  faqA8: (stoneLabel, variationNote) =>
    `Absolut. Jeder ${stoneLabel}-Edelstein entsteht natürlich über Millionen von Jahren. ${variationNote}`,
}

const NL: LocalePack = {
  stoneOriginTitle: 'Oorsprong van de steen',
  naturalStoneTitle: 'Natuursteen',
  naturalStoneBody:
    'Elke Signature Strand is gemaakt van echte natuurlijke edelstenen die miljoenen jaren geleden zijn gevormd. Variaties in kleur, insluitsels en natuurlijke markeringen zijn geen imperfecties maar deel van de individuele schoonheid van de steen, waardoor elk paar uniek is.',
  care: [
    'Verwijder de strands vóór het wassen of stomerijen van uw kledingstuk.',
    'Vermijd contact met water en langdurige vochtigheid.',
    'Spuit geen parfum direct op de edelstenen of goudkleurige beslag.',
    'Bewaar ze in de Bint Saeed presentatiedoos wanneer ze niet worden gedragen.',
    'Reinig voorzichtig met een zachte, droge microvezeldoek.',
    'Vermijd langdurige blootstelling aan direct zonlicht en hoge luchtvochtigheid.',
  ],
  introP2Evening:
    'Gecreëerd als een van de kenmerkende House Codes van Bint Saeed, nodigen deze afneembare strands uit tot een persoonlijkere manier van aankleden. In plaats van een nieuw kledingstuk aan te schaffen, laten ze hetzelfde stuk moeiteloos evolueren voor avondgelegenheden, formele bijeenkomsten of alledaagse elegantie.',
  introP2Mood:
    'Gecreëerd als een van de kenmerkende House Codes van Bint Saeed, bieden deze afneembare strands een nieuwe manier om uw garderobe te personaliseren. In plaats van een nieuw kledingstuk aan te schaffen, laten ze hetzelfde stuk evolueren volgens de gelegenheid, uw accessoires of simpelweg de manier waarop u zich die dag wilt uitdrukken.',
  introP3:
    'Exclusief ontworpen voor compatibele Bint Saeed kledingstukken, waaronder de Marylebone Abaya en toekomstige compatibele creaties, kunnen ze binnen seconden worden bevestigd of verwijderd, voor een verfijnde look die uniek van u aanvoelt.',
  introClosing:
    'Dit is meer dan een accessoire. Het is een persoonlijke expressie van een van de kenmerkende House Codes van Bint Saeed.',
  detailDesignedFor: 'Exclusief ontworpen voor compatibele Bint Saeed kledingstukken',
  detailHandAssembled: 'Handmatig geassembleerd in Abu Dhabi, Verenigde Arabische Emiraten',
  detailHematite:
    'Gefacetteerde accentkralen van goudverguld hematiet, geplaatst tussen elke natuurlijke edelsteen om bij elke beweging licht te vangen en te reflecteren',
  detailKnottedLine: 'Afgewerkt met de kenmerkende goudkleurige Knotted Line elementen van Bint Saeed',
  detailLength: 'Ongeveer 15–17 cm lang',
  detailAttach: 'Eenvoudig binnen seconden te bevestigen of te verwijderen',
  detailPersonalise:
    'Ontworpen om uw kledingstuk te personaliseren volgens de gelegenheid, uw accessoires of uw stemming',
  detailNotJewellery:
    'Exclusief gecreëerd voor Bint Saeed kledingstukken en niet bedoeld om als sieraad te worden gedragen',
  materialHematite: 'Gefacetteerde accentkralen van goudverguld hematiet',
  materialKnottedLine: 'Kenmerkende goudkleurige Knotted Line elementen van Bint Saeed',
  pairOf: (name) => `Paar afneembare ${name} Signature Strands`,
  pairOfLimited: (name) => `Paar afneembare ${name} Signature Strands — limited edition`,
  faqQ1: 'Wat is een Signature Strand?',
  faqA1:
    'Een Signature Strand is een van de kenmerkende House Codes van Bint Saeed. Gemaakt van natuurlijke edelstenen en kenmerkende goudkleurige Knotted Line elementen, wordt het bevestigd aan geselecteerde Bint Saeed kledingstukken, zodat u uw look kunt personaliseren en transformeren zonder het kledingstuk zelf te wijzigen.',
  faqQ2: 'Waarom meer dan één Signature Strand bezitten?',
  faqA2:
    'Elke natuursteen heeft zijn eigen karakter. Verschillende Signature Strands verzamelen laat hetzelfde kledingstuk moeiteloos evolueren, of u nu wilt coördineren met uw tas, sieraden, schoenen of de gelegenheid zelf.',
  faqQ3: 'Welke Bint Saeed kledingstukken zijn compatibel?',
  faqA3: (strandLabel) =>
    `${strandLabel} zijn ontworpen voor geselecteerde Bint Saeed kledingstukken met ons verborgen bevestigingssysteem, waaronder de Marylebone Abaya en toekomstige compatibele ontwerpen die duidelijk op elke productpagina worden aangegeven.`,
  faqQ4: 'Zijn dit echte natuurlijke edelstenen?',
  faqA4: (stoneLabel) =>
    `Ja. Elke ${stoneLabel}-kraal is gemaakt van echte natuursteen. Verschillen in kleur, markeringen en natuurlijke kenmerken zijn te verwachten en zijn een teken van authenticiteit.`,
  faqQ5: 'Kan ik Signature Strands als sieraden dragen?',
  faqA5:
    'Nee. Signature Strands zijn uitsluitend ontworpen als kledingversieringen en niet bedoeld om als kettingen, armbanden of oorbellen te worden gedragen.',
  faqQ6: 'Kan ik ze combineren met Bint Saeed sieraden?',
  faqA6:
    'Ja. Veel Bint Saeed sieraden worden gemaakt met dezelfde natuurlijke edelstenen, wat een mooi gecoördineerde garderobe mogelijk maakt.',
  faqQ7: 'Komen er meer Signature Strands beschikbaar?',
  faqA7:
    'Ja. De Signature Strand collectie zal blijven groeien met nieuwe natuurlijke edelstenen, seizoenskleuren en toekomstige personalisatieopties, waaronder initialen, betekenisvolle symbolen en verzamelbare bedels.',
  faqQ8: 'Mijn stenen zien er anders uit dan op de foto’s. Is dit normaal?',
  faqA8: (stoneLabel, variationNote) =>
    `Absoluut. Elke ${stoneLabel}-edelsteen is natuurlijk gevormd over miljoenen jaren. ${variationNote}`,
}

const PT: LocalePack = {
  stoneOriginTitle: 'Origem da pedra',
  naturalStoneTitle: 'Pedra natural',
  naturalStoneBody:
    'Cada Signature Strand é criado com gemas naturais genuínas formadas ao longo de milhões de anos. Variações de cor, inclusões e marcas naturais não são imperfeições, mas parte da beleza individual da pedra, tornando cada par único.',
  care: [
    'Remova os fios antes de lavar ou limpar a seco a sua peça.',
    'Evite contacto com água e humidade prolongada.',
    'Não borrife perfume diretamente sobre as gemas ou os acabamentos dourados.',
    'Guarde na caixa de apresentação Bint Saeed quando não estiver a usar.',
    'Limpe suavemente com um pano de microfibra macio e seco.',
    'Evite exposição prolongada à luz solar direta e à elevada humidade.',
  ],
  introP2Evening:
    'Criados como um dos códigos da casa signature da Bint Saeed, estes fios destacáveis convidam a uma forma mais pessoal de se vestir. Em vez de adquirir outra peça, permitem que a mesma evolua sem esforço para ocasiões noturnas, encontros formais ou elegância quotidiana.',
  introP2Mood:
    'Criados como um dos códigos da casa signature da Bint Saeed, estes fios destacáveis oferecem uma nova forma de personalizar o seu guarda-roupa. Em vez de adquirir outra peça, permitem que a mesma evolua de acordo com a ocasião, os seus acessórios ou simplesmente a forma como deseja expressar-se nesse dia.',
  introP3:
    'Concebidos exclusivamente para peças Bint Saeed compatíveis, incluindo a abaya Marylebone e futuras criações compatíveis, podem ser colocados ou removidos em segundos, criando um look refinado que lhe pertence.',
  introClosing:
    'Isto é mais do que um acessório. É uma expressão pessoal de um dos códigos da casa signature da Bint Saeed.',
  detailDesignedFor: 'Concebido exclusivamente para peças Bint Saeed compatíveis',
  detailHandAssembled: 'Montado à mão em Abu Dhabi, Emirados Árabes Unidos',
  detailHematite:
    'Contas de destaque em Hematite folheada a ouro facetadas, posicionadas entre cada gema natural para captar e refletir a luz a cada movimento',
  detailKnottedLine: 'Acabado com os elementos Knotted Line dourados signature da Bint Saeed',
  detailLength: 'Comprimento de aproximadamente 15–17 cm',
  detailAttach: 'Facilmente colocado ou removido em segundos',
  detailPersonalise:
    'Concebido para personalizar a sua peça de acordo com a ocasião, os seus acessórios ou o seu humor',
  detailNotJewellery:
    'Criado exclusivamente para peças Bint Saeed e não destinado a ser usado como joia',
  materialHematite: 'Contas de destaque em Hematite folheada a ouro facetadas',
  materialKnottedLine: 'Elementos Knotted Line dourados signature Bint Saeed',
  pairOf: (name) => `Par de Signature Strands ${name} destacáveis`,
  pairOfLimited: (name) => `Par de Signature Strands ${name} destacáveis — edição limitada`,
  faqQ1: 'O que é um Signature Strand?',
  faqA1:
    'Um Signature Strand é um dos códigos da casa signature da Bint Saeed. Feito com gemas naturais e elementos Knotted Line dourados signature, fixa-se a peças Bint Saeed selecionadas, permitindo personalizar e transformar o seu look sem alterar a peça em si.',
  faqQ2: 'Por que possuir mais de um Signature Strand?',
  faqA2:
    'Cada pedra natural tem o seu próprio carácter. Colecionar diferentes Signature Strands permite que a mesma peça evolua sem esforço, quer deseje coordenar com a sua mala, joias, sapatos ou a própria ocasião.',
  faqQ3: 'Que peças Bint Saeed são compatíveis?',
  faqA3: (strandLabel) =>
    `Os ${strandLabel} são concebidos para peças Bint Saeed selecionadas com o nosso sistema de fixação oculto, incluindo a abaya Marylebone e futuros designs compatíveis claramente indicados em cada página de produto.`,
  faqQ4: 'São gemas naturais genuínas?',
  faqA4: (stoneLabel) =>
    `Sim. Cada conta de ${stoneLabel} é feita de pedra natural genuína. Diferenças de cor, marcas e características naturais são esperadas e são sinal de autenticidade.`,
  faqQ5: 'Posso usar os Signature Strands como joias?',
  faqA5:
    'Não. Os Signature Strands foram concebidos exclusivamente como adornos de peça e não se destinam a ser usados como colares, pulseiras ou brincos.',
  faqQ6: 'Posso combiná-los com joias Bint Saeed?',
  faqA6:
    'Sim. Muitas peças de joalharia Bint Saeed são criadas com as mesmas gemas naturais, permitindo um estilo coordenado e harmonioso no guarda-roupa.',
  faqQ7: 'Haverá mais Signature Strands disponíveis?',
  faqA7:
    'Sim. A coleção Signature Strand continuará a crescer com novas gemas naturais, cores sazonais e futuras opções de personalização, incluindo iniciais, símbolos significativos e charms colecionáveis.',
  faqQ8: 'As minhas pedras parecem diferentes das fotografias. É normal?',
  faqA8: (stoneLabel, variationNote) =>
    `Sem dúvida. Cada gema de ${stoneLabel} forma-se naturalmente ao longo de milhões de anos. ${variationNote}`,
}

const ID: LocalePack = {
  stoneOriginTitle: 'Asal Batu',
  naturalStoneTitle: 'Batu Alam',
  naturalStoneBody:
    'Setiap Signature Strand dibuat dari batu permata alami asli yang terbentuk selama jutaan tahun. Variasi warna, inklusi, dan tanda alami bukanlah cacat melainkan bagian dari keindahan individual batu, menjadikan setiap pasang unik.',
  care: [
    'Lepaskan strand sebelum mencuci atau dry clean pakaian Anda.',
    'Hindari kontak dengan air dan kelembapan berkepanjangan.',
    'Jangan menyemprotkan parfum langsung ke batu permata atau aksesori bernuansa emas.',
    'Simpan di dalam kotak presentasi Bint Saeed saat tidak digunakan.',
    'Bersihkan dengan lembut menggunakan kain microfibre lembut dan kering.',
    'Hindari paparan sinar matahari langsung dan kelembapan tinggi dalam waktu lama.',
  ],
  introP2Evening:
    'Diciptakan sebagai salah satu House Codes khas Bint Saeed, strand yang dapat dilepas ini mengundang cara berpakaian yang lebih personal. Alih-alih membeli pakaian baru, mereka memungkinkan potongan yang sama berkembang dengan mudah untuk acara malam, pertemuan formal, atau keanggunan sehari-hari.',
  introP2Mood:
    'Diciptakan sebagai salah satu House Codes khas Bint Saeed, strand yang dapat dilepas ini menawarkan cara baru untuk mempersonalisasi lemari pakaian Anda. Alih-alih membeli pakaian baru, mereka memungkinkan potongan yang sama berkembang sesuai acara, aksesori, atau cara Anda ingin mengekspresikan diri hari itu.',
  introP3:
    'Dirancang secara eksklusif untuk pakaian Bint Saeed yang kompatibel, termasuk Marylebone Abaya dan kreasi kompatibel mendatang, mereka dapat dipasang atau dilepas dalam hitungan detik, menciptakan tampilan halus yang terasa unik milik Anda.',
  introClosing:
    'Ini lebih dari sekadar aksesori. Ini adalah ekspresi personal dari salah satu House Codes khas Bint Saeed.',
  detailDesignedFor: 'Dirancang secara eksklusif untuk pakaian Bint Saeed yang kompatibel',
  detailHandAssembled: 'Dirakit tangan di Abu Dhabi, Uni Emirat Arab',
  detailHematite:
    'Manik aksen Hematite berlapis emas berfaset yang diposisikan di antara setiap batu permata alami untuk menangkap dan memantulkan cahaya pada setiap gerakan',
  detailKnottedLine: 'Diselesaikan dengan elemen Knotted Line bernuansa emas khas Bint Saeed',
  detailLength: 'Panjang sekitar 15–17 cm',
  detailAttach: 'Mudah dipasang atau dilepas dalam hitungan detik',
  detailPersonalise:
    'Dirancang untuk mempersonalisasi pakaian Anda sesuai acara, aksesori, atau suasana hati',
  detailNotJewellery:
    'Diciptakan secara eksklusif untuk pakaian Bint Saeed dan tidak dimaksudkan untuk dikenakan sebagai perhiasan',
  materialHematite: 'Manik aksen Hematite berlapis emas berfaset',
  materialKnottedLine: 'Elemen Knotted Line bernuansa emas khas Bint Saeed',
  pairOf: (name) => `Sepasang Signature Strands ${name} yang dapat dilepas`,
  pairOfLimited: (name) => `Sepasang Signature Strands ${name} yang dapat dilepas — edisi terbatas`,
  faqQ1: 'Apa itu Signature Strand?',
  faqA1:
    'Signature Strand adalah salah satu House Codes khas Bint Saeed. Dibuat dari batu permata alami dan elemen Knotted Line bernuansa emas khas, ia dipasang pada pakaian Bint Saeed terpilih, memungkinkan Anda mempersonalisasi dan mengubah penampilan tanpa mengganti pakaian itu sendiri.',
  faqQ2: 'Mengapa memiliki lebih dari satu Signature Strand?',
  faqA2:
    'Setiap batu alami memiliki karakter tersendiri. Mengoleksi Signature Strands yang berbeda memungkinkan pakaian yang sama berkembang dengan mudah, baik Anda ingin menyesuaikan dengan tas, perhiasan, sepatu, atau acara itu sendiri.',
  faqQ3: 'Pakaian Bint Saeed mana yang kompatibel?',
  faqA3: (strandLabel) =>
    `${strandLabel} dirancang untuk pakaian Bint Saeed terpilih dengan sistem pemasangan tersembunyi kami, termasuk Marylebone Abaya dan desain kompatibel mendatang yang jelas ditunjukkan di setiap halaman produk.`,
  faqQ4: 'Apakah ini batu permata alami asli?',
  faqA4: (stoneLabel) =>
    `Ya. Setiap manik ${stoneLabel} terbuat dari batu alami asli. Perbedaan warna, corak, dan karakteristik alami diharapkan dan merupakan tanda keaslian.`,
  faqQ5: 'Bisakah saya memakai Signature Strands sebagai perhiasan?',
  faqA5:
    'Tidak. Signature Strands dirancang secara eksklusif sebagai hiasan pakaian dan tidak dimaksudkan untuk dikenakan sebagai kalung, gelang, atau anting.',
  faqQ6: 'Bisakah saya mencocokkannya dengan perhiasan Bint Saeed?',
  faqA6:
    'Ya. Banyak perhiasan Bint Saeed dibuat dengan batu permata alami yang sama, memungkinkan gaya yang selaras di seluruh lemari pakaian Anda.',
  faqQ7: 'Akankah ada lebih banyak Signature Strands?',
  faqA7:
    'Ya. Koleksi Signature Strand akan terus berkembang dengan batu permata alami baru, warna musiman, dan opsi personalisasi mendatang, termasuk inisial, simbol bermakna, dan charm koleksi.',
  faqQ8: 'Batu saya terlihat berbeda dari foto. Apakah ini normal?',
  faqA8: (stoneLabel, variationNote) =>
    `Tentu saja. Setiap batu permata ${stoneLabel} terbentuk secara alami selama jutaan tahun. ${variationNote}`,
}

const MS: LocalePack = {
  stoneOriginTitle: 'Asal Batu',
  naturalStoneTitle: 'Batu Semula Jadi',
  naturalStoneBody:
    'Setiap Signature Strand dicipta daripada batu permata semula jadi tulen yang terbentuk selama berjuta-juta tahun. Variasi warna, inclusion dan tanda semula jadi bukanlah kecacatan tetapi sebahagian daripada keindahan individu batu, menjadikan setiap pasangan unik.',
  care: [
    'Tanggalkan strand sebelum mencuci atau mencuci kering pakaian anda.',
    'Elakkan sentuhan dengan air dan kelembapan berpanjangan.',
    'Jangan menyembur minyak wangi terus ke atas batu permata atau perkakasan bernuansa emas.',
    'Simpan di dalam kotak pembentangan Bint Saeed apabila tidak digunakan.',
    'Bersihkan dengan lembut menggunakan kain microfibre lembut dan kering.',
    'Elakkan pendedahan berpanjangan kepada cahaya matahari langsung dan kelembapan tinggi.',
  ],
  introP2Evening:
    'Dicipta sebagai salah satu House Codes khas Bint Saeed, strand boleh tanggal ini mengundang cara berpakaian yang lebih peribadi. Daripada membeli pakaian baharu, ia membolehkan potongan yang sama berkembang dengan mudah untuk majlis malam, perhimpunan rasmi atau keanggunan harian.',
  introP2Mood:
    'Dicipta sebagai salah satu House Codes khas Bint Saeed, strand boleh tanggal ini menawarkan cara baharu untuk memperibadikan almari pakaian anda. Daripada membeli pakaian baharu, ia membolehkan potongan yang sama berkembang mengikut majlis, aksesori atau cara anda ingin mengekspresikan diri pada hari itu.',
  introP3:
    'Direka secara eksklusif untuk pakaian Bint Saeed yang serasi, termasuk Marylebone Abaya dan ciptaan serasi akan datang, ia boleh dipasang atau ditanggalkan dalam beberapa saat, mewujudkan penampilan halus yang terasa unik milik anda.',
  introClosing:
    'Ini lebih daripada aksesori. Ia adalah ekspresi peribadi salah satu House Codes khas Bint Saeed.',
  detailDesignedFor: 'Direka secara eksklusif untuk pakaian Bint Saeed yang serasi',
  detailHandAssembled: 'Dipasang tangan di Abu Dhabi, Emiriah Arab Bersatu',
  detailHematite:
    'Manik aksen Hematite bersalut emas berfaset yang diletakkan di antara setiap batu permata semula jadi untuk menangkap dan memantulkan cahaya pada setiap pergerakan',
  detailKnottedLine: 'Disiapkan dengan elemen Knotted Line bernuansa emas khas Bint Saeed',
  detailLength: 'Panjang kira-kira 15–17 cm',
  detailAttach: 'Mudah dipasang atau ditanggalkan dalam beberapa saat',
  detailPersonalise:
    'Direka untuk memperibadikan pakaian anda mengikut majlis, aksesori atau mood anda',
  detailNotJewellery:
    'Dicipta secara eksklusif untuk pakaian Bint Saeed dan tidak bertujuan untuk dipakai sebagai barang kemas',
  materialHematite: 'Manik aksen Hematite bersalut emas berfaset',
  materialKnottedLine: 'Elemen Knotted Line bernuansa emas khas Bint Saeed',
  pairOf: (name) => `Sepasang Signature Strands ${name} boleh tanggal`,
  pairOfLimited: (name) => `Sepasang Signature Strands ${name} boleh tanggal — edisi terhad`,
  faqQ1: 'Apakah Signature Strand?',
  faqA1:
    'Signature Strand ialah salah satu House Codes khas Bint Saeed. Dibuat daripada batu permata semula jadi dan elemen Knotted Line bernuansa emas khas, ia dipasang pada pakaian Bint Saeed terpilih, membolehkan anda memperibadikan dan mengubah penampilan tanpa menukar pakaian itu sendiri.',
  faqQ2: 'Mengapa memiliki lebih daripada satu Signature Strand?',
  faqA2:
    'Setiap batu semula jadi mempunyai karakter tersendiri. Mengumpul Signature Strands yang berbeza membolehkan pakaian yang sama berkembang dengan mudah, sama ada anda ingin menyesuaikan dengan beg, barang kemas, kasut atau majlis itu sendiri.',
  faqQ3: 'Pakaian Bint Saeed manakah yang serasi?',
  faqA3: (strandLabel) =>
    `${strandLabel} direka untuk pakaian Bint Saeed terpilih dengan sistem pemasangan tersembunyi kami, termasuk Marylebone Abaya dan reka bentuk serasi akan datang yang jelas dinyatakan pada setiap halaman produk.`,
  faqQ4: 'Adakah ini batu permata semula jadi tulen?',
  faqA4: (stoneLabel) =>
    `Ya. Setiap manik ${stoneLabel} diperbuat daripada batu semula jadi tulen. Perbezaan warna, corak dan ciri semula jadi dijangka dan merupakan tanda ketulenan.`,
  faqQ5: 'Bolehkah saya memakai Signature Strands sebagai barang kemas?',
  faqA5:
    'Tidak. Signature Strands direka secara eksklusif sebagai hiasan pakaian dan tidak bertujuan untuk dipakai sebagai rantai, gelang atau anting-anting.',
  faqQ6: 'Bolehkah saya memadankannya dengan barang kemas Bint Saeed?',
  faqA6:
    'Ya. Banyak barang kemas Bint Saeed dicipta menggunakan batu permata semula jadi yang sama, membolehkan gaya yang selaras di seluruh almari pakaian anda.',
  faqQ7: 'Adakah lebih banyak Signature Strands akan tersedia?',
  faqA7:
    'Ya. Koleksi Signature Strand akan terus berkembang dengan batu permata semula jadi baharu, warna bermusim dan pilihan pemeribadian akan datang, termasuk inisial, simbol bermakna dan charm koleksi.',
  faqQ8: 'Batu saya kelihatan berbeza daripada foto. Adakah ini normal?',
  faqA8: (stoneLabel, variationNote) =>
    `Sudah tentu. Setiap batu permata ${stoneLabel} terbentuk secara semula jadi selama berjuta-juta tahun. ${variationNote}`,
}

const LOCALE_PACKS: Record<AppLocale, LocalePack> = {
  en: EN,
  ar: AR,
  fr: FR,
  it: IT,
  es: ES,
  ru: RU,
  zh: ZH,
  de: DE,
  nl: NL,
  pt: PT,
  id: ID,
  ms: MS,
}

export const STRAND_PDP_LOCALE_TEMPLATES: Record<AppLocale, StrandPdpLocaleTemplates> =
  LOCALE_PACKS

export function buildStrandFaqFromTemplates(
  templates: StrandPdpLocaleTemplates,
  strandLabel: string,
  stoneLabel: string,
  variationNote: string,
): StrandPdpFaqItem[] {
  const pack = templates as LocalePack
  return [
    { question: pack.faqQ1, answer: pack.faqA1 },
    { question: pack.faqQ2, answer: pack.faqA2 },
    { question: pack.faqQ3, answer: pack.faqA3(strandLabel) },
    { question: pack.faqQ4, answer: pack.faqA4(stoneLabel) },
    { question: pack.faqQ5, answer: pack.faqA5 },
    { question: pack.faqQ6, answer: pack.faqA6 },
    { question: pack.faqQ7, answer: pack.faqA7 },
    {
      question: pack.faqQ8,
      answer: pack.faqA8(stoneLabel, variationNote),
    },
  ]
}
