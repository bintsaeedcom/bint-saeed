import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductPdpContent } from '@/data/productPdpContent'
import { PDP_COLOUR_TITLE, PDP_SILHOUETTE_TITLE } from '@/lib/products/pdpFeatureSectionTitles'
import type { PdpDetailGroup } from '@/lib/products/pdpIntroRich'
import type { ProductFaqItem } from '@/lib/products/productSchemaMeta'

export const MARYLEBONE_ABAYA_SLUG = 'marylebone-abaya'

type LocalePack = {
  introParagraphs: readonly string[]
  silhouetteItems: readonly string[]
  houseSignaturesTitle: string
  houseSignaturesItems: readonly string[]
  colourItems: readonly string[]
  compositionGroups: readonly PdpDetailGroup[]
  careDetails: readonly string[]
  fitAndSizeDetails: readonly string[]
  faq: ProductFaqItem[]
}

const LOCALE_PACKS: Record<AppLocale, LocalePack> = {
  en: {
    introParagraphs: [
      'The abaya with natural stone jewellery for your wardrobe.',
      'For centuries, jewellery has been worn by women. At Bint Saeed, we imagined something different.',
      'What if your wardrobe could wear jewellery too?',
      'Available in Deep Black and Navy Blue, every Marylebone Abaya is accompanied by two removable Onyx Strands, one for each cuff, handcrafted from genuine natural Onyx gemstones. Between every stone sits a faceted gold-plated hematite bead that catches the light with every movement, while each strand is finished with Bint Saeed’s signature gold-tone Knotted Line details.',
      'Designed with the same graceful A-line silhouette and refined tailoring as the Park Lane Abaya, the Marylebone Abaya transforms through a simple exchange of its strands. While every abaya arrives with its signature Onyx Strands, you can later expand your collection with additional Bint Saeed Strands crafted from other natural gemstones, allowing your abaya to evolve effortlessly alongside your shoes, handbag, jewellery or the occasion itself. It becomes a wardrobe that feels more personal, more expressive and uniquely your own, bringing the richness of natural gemstones into every look without ever replacing the elegance of the abaya.',
      'Each strand is crafted from genuine natural gemstones, making every pair beautifully unique. As the Bint Saeed collection grows, your strands can also be worn across selected garments designed with the house’s signature attachment loops, allowing one collection of natural stone strands to accompany multiple pieces throughout your wardrobe.',
      'Like every Bint Saeed abaya, the Marylebone Abaya can be personalised with a hidden inner label featuring a name, a meaningful date or a personal message, creating a piece that becomes even more special over time.',
      'The Marylebone Abaya belongs as naturally in London’s business districts and Parisian cafés as it does in Abu Dhabi, Riyadh and Doha. It can be worn as a refined contemporary outer layer or embraced as a timeless abaya, adapting beautifully to every setting.',
    ],
    silhouetteItems: [
      'Graceful A-line abaya',
      'Softly textured crepe with a refined grain',
      'Hidden side seam pockets',
      'Wide cuffs designed for interchangeable Bint Saeed Strands',
      'Includes two removable genuine natural Onyx Strands, one for each cuff',
      'Optional snap button closure',
      'Optional hidden inner label personalisation',
    ],
    houseSignaturesTitle: 'House Signatures',
    houseSignaturesItems: [
      'Signature gold-tone Knotted Line details',
      'Signature interchangeable natural stone strands',
      'Crafted in Abu Dhabi, United Arab Emirates',
    ],
    colourItems: ['Deep Black', 'Navy Blue'],
    compositionGroups: [
      { title: 'Abaya', items: ['80% Polyester, 20% Viscose'] },
      {
        title: 'Strands',
        items: [
          'Genuine natural Onyx gemstones',
          'Faceted gold-plated hematite spacer beads',
          'Signature gold-tone Knotted Line end pieces',
        ],
      },
    ],
    careDetails: [
      'Remove the Onyx Strands before washing or professional dry cleaning.',
      'Gentle machine wash at 30°C.',
    ],
    fitAndSizeDetails: [
      'Graceful A-line silhouette',
      'Designed to be worn open or closed',
      'Model height: 155 cm / 5\'1"',
      'Model wears size XS',
      'Custom length available upon request',
    ],
    faq: [
      {
        question: 'Are the Onyx Strands on the Marylebone Abaya removable?',
        answer:
          'Yes. The Marylebone Abaya includes two removable genuine natural Onyx Strands — one for each cuff — with gold-plated hematite spacer beads. Wide cuffs are designed for interchangeable Bint Saeed Strands across your wardrobe.',
      },
      {
        question: 'Who is the Marylebone Abaya designed for?',
        answer:
          'The Marylebone Abaya is designed for women who love fashion — fashion editors, curators, cultural heritage audiences connected to fashion, diplomats, and fashion enthusiasts seeking a graceful A-line abaya with natural stone jewellery and signature Knotted Line details, handcrafted in Abu Dhabi.',
      },
    ],
  },
  ar: {
    introParagraphs: [
      'العباءة التي تحمل مجوهرات الأحجار الطبيعية إلى خزانتك.',
      'لقرون، ارتدت النساء المجوهرات. في Bint Saeed، تخيّلنا شيئاً مختلفاً.',
      'ماذا لو استطاعت خزانتك أن ترتدي المجوهرات أيضاً؟',
      'متوفر بالأسود العميق والكحلي، ترافق كل Marylebone Abaya خيطَي Onyx Strands قابلين للإزالة — واحد لكل كُم — مصنوعين يدوياً من أحجار عقيق Onyx طبيعية أصيلة. بين كل حجر تبرز خرزة هيماتيت مطلية بالذهب ذات أوجه تلتقط الضوء مع كل حركة، بينما ينتهي كل خيط بتفاصيل Knotted Line الذهبية المميزة من Bint Saeed.',
      'صُممت بنفس القصة A-line الأنيقة والتفصيل الراقي مثل Park Lane Abaya، تتحول Marylebone Abaya بمجرد استبدال خيوطها. بينما تصل كل عباءة بخيوط Onyx Strands المميزة، يمكنك لاحقاً توسيع مجموعتك بخيوط Bint Saeed Strands إضافية من أحجار طبيعية أخرى، لتتطور عباءتك بسهولة مع حذائك أو حقيبتك أو مجوهراتك أو المناسبة نفسها. تصبح خزانة أكثر شخصية وأكثر تعبيراً وفريدة من نوعها، تحمل ثراء الأحجار الطبيعية في كل إطلالة دون أن تحل محل أناقة العباءة.',
      'يُصنع كل خيط من أحجار طبيعية أصيلة، ما يجعل كل زوج فريداً بجماله. ومع نمو مجموعة Bint Saeed، يمكن ارتداء خيوطك أيضاً مع قطع مختارة صُممت بحلقات تثبيت مميزة من الدار، لتصاحب مجموعة واحدة من خيوط الأحجار الطبيعية عدة قطع في خزانتك.',
      'مثل كل عباءة من Bint Saeed، يمكن تخصيص Marylebone Abaya ببطاقة داخلية مخفية تحمل اسماً أو تاريخاً ذا معنى أو رسالة شخصية، لتصبح قطعة أكثر خصوصية مع الوقت.',
      'تنتمي Marylebone Abaya بقدر ما إلى أحياء الأعمال في لندن ومقاهي باريس، إلى أبوظبي والرياض والدوحة. يمكن ارتداؤها كطبقة خارجية معاصرة راقية أو كعباءة خالدة، تتكيف بجمال مع كل إعداد.',
    ],
    silhouetteItems: [
      'عباءة A-line أنيقة',
      'كريب بنسيج ناعم وحبيبة راقية',
      'جيوب جانبية مخفية في اللحامات',
      'أكمام واسعة مصممة لخيوط Bint Saeed Strands القابلة للتبديل',
      'تتضمن خيطَي Onyx Strands طبيعيين قابلين للإزالة، واحداً لكل كُم',
      'إغلاق بأزرار سناب اختياري',
      'تخصيص اختياري ببطاقة داخلية مخفية',
    ],
    houseSignaturesTitle: 'توقيعات الدار',
    houseSignaturesItems: [
      'تفاصيل Knotted Line الذهبية المميزة',
      'خيوط أحجار طبيعية قابلة للتبديل من توقيع الدار',
      'صُنعت في أبوظبي، الإمارات العربية المتحدة',
    ],
    colourItems: ['أسود عميق', 'كحلي'],
    compositionGroups: [
      { title: 'العباءة', items: ['80% بوليستر، 20% فيسكوز'] },
      {
        title: 'الخيوط',
        items: [
          'أحجار عقيق Onyx طبيعية أصيلة',
          'خرز فاصل من هيماتيت مطلي بالذهب ذو أوجه',
          'قطع نهاية Knotted Line الذهبية المميزة',
        ],
      },
    ],
    careDetails: [
      'أزيلي خيوط Onyx Strands قبل الغسيل أو التنظيف الجاف الاحترافي.',
      'غسيل آلي لطيف عند 30°م.',
    ],
    fitAndSizeDetails: [
      'قصة A-line أنيقة',
      'مصممة للارتداء مفتوحة أو مغلقة',
      'طول العارضة: 155 سم / 5\'1"',
      'العارضة ترتدي مقاس XS',
      'الطول المخصص متاح عند الطلب',
    ],
    faq: [
      {
        question: 'هل خيوط Onyx Strands على Marylebone Abaya قابلة للإزالة؟',
        answer:
          'نعم. تتضمن Marylebone Abaya خيطَي Onyx Strands طبيعيين قابلين للإزالة — واحداً لكل كُم — مع خرز فاصل من هيماتيت مطلي بالذهب. صُممت الأكمام الواسعة لخيوط Bint Saeed Strands القابلة للتبديل في خزانتك.',
      },
      {
        question: 'لمن صُممت Marylebone Abaya؟',
        answer:
          'صُممت Marylebone Abaya للنساء اللواتي يعشقن الموضة — محررات الأزياء، القيّمين، جمهور التراث الثقافي المرتبط بالأزياء، الدبلوماسيين، وعشاق الموضة الباحثين عن عباءة A-line أنيقة بمجوهرات أحجار طبيعية وتفاصيل Knotted Line المميزة، مصنوعة يدوياً في أبوظبي.',
      },
    ],
  },
  fr: {
    introParagraphs: [
      'L’abaya qui apporte les bijoux en pierres naturelles à votre garde-robe.',
      'Pendant des siècles, les femmes ont porté des bijoux. Chez Bint Saeed, nous avons imaginé autre chose.',
      'Et si votre garde-robe pouvait porter des bijoux elle aussi ?',
      'Disponible en Noir profond et Bleu marine, chaque Marylebone Abaya est accompagnée de deux Onyx Strands amovibles — un pour chaque manchette — façonnés à la main à partir de véritables pierres d’onyx naturelles. Entre chaque pierre se trouve une perle d’hématite plaquée or à facettes qui capte la lumière à chaque mouvement, tandis que chaque fil est terminé par les détails dorés signature Knotted Line de Bint Saeed.',
      'Conçue avec la même silhouette A-line gracieuse et le même tailoring raffiné que la Park Lane Abaya, la Marylebone Abaya se transforme par un simple échange de ses fils. Chaque abaya arrive avec ses Onyx Strands signature, mais vous pouvez ensuite enrichir votre collection avec d’autres Bint Saeed Strands en pierres naturelles, permettant à votre abaya d’évoluer sans effort avec vos chaussures, votre sac, vos bijoux ou l’occasion elle-même. Une garde-robe plus personnelle, plus expressive et uniquement vôtre, qui apporte la richesse des pierres naturelles à chaque look sans jamais remplacer l’élégance de l’abaya.',
      'Chaque fil est façonné à partir de véritables pierres naturelles, rendant chaque paire magnifiquement unique. À mesure que la collection Bint Saeed s’étoffe, vos fils peuvent également être portés sur des pièces sélectionnées conçues avec les boucles d’attache signature de la maison, permettant à une collection de fils en pierres naturelles d’accompagner plusieurs pièces de votre garde-robe.',
      'Comme chaque abaya Bint Saeed, la Marylebone Abaya peut être personnalisée avec une étiquette intérieure dissimulée portant un nom, une date significative ou un message personnel, pour une pièce qui devient encore plus précieuse avec le temps.',
      'La Marylebone Abaya appartient aussi naturellement aux quartiers d’affaires de Londres et aux cafés parisiens qu’à Abou Dabi, Riyad et Doha. Elle peut être portée comme couche extérieure contemporaine raffinée ou comme abaya intemporelle, s’adaptant magnifiquement à chaque contexte.',
    ],
    silhouetteItems: [
      'Abaya A-line gracieuse',
      'Crêpe à texture douce et grain raffiné',
      'Poches latérales dissimulées dans les coutures',
      'Manchettes larges conçues pour les Bint Saeed Strands interchangeables',
      'Inclut deux Onyx Strands naturels amovibles, un pour chaque manchette',
      'Fermeture par boutons-pression optionnelle',
      'Personnalisation optionnelle par étiquette intérieure dissimulée',
    ],
    houseSignaturesTitle: 'Signatures de la Maison',
    houseSignaturesItems: [
      'Détails dorés signature Knotted Line',
      'Fils en pierres naturelles interchangeables signature',
      'Fabriquée à Abou Dabi, Émirats arabes unis',
    ],
    colourItems: ['Noir profond', 'Bleu marine'],
    compositionGroups: [
      { title: 'Abaya', items: ['80 % polyester, 20 % viscose'] },
      {
        title: 'Strands',
        items: [
          'Véritables pierres d’onyx naturelles',
          'Perles intercalaires en hématite plaquée or à facettes',
          'Pièces terminales dorées signature Knotted Line',
        ],
      },
    ],
    careDetails: [
      'Retirez les Onyx Strands avant le lavage ou le nettoyage à sec professionnel.',
      'Lavage en machine délicat à 30 °C.',
    ],
    fitAndSizeDetails: [
      'Silhouette A-line gracieuse',
      'Conçue pour être portée ouverte ou fermée',
      'Taille mannequin : 155 cm / 5\'1"',
      'La mannequin porte la taille XS',
      'Longueur sur mesure disponible sur demande',
    ],
    faq: [
      {
        question: 'Les Onyx Strands de la Marylebone Abaya sont-ils amovibles ?',
        answer:
          'Oui. La Marylebone Abaya comprend deux Onyx Strands naturels amovibles — un pour chaque manchette — avec des perles intercalaires en hématite plaquée or. Les manchettes larges sont conçues pour les Bint Saeed Strands interchangeables dans votre garde-robe.',
      },
      {
        question: 'Pour qui la Marylebone Abaya a-t-elle été conçue ?',
        answer:
          'La Marylebone Abaya est conçue pour les femmes qui aiment la mode — rédactrices de mode, conservatrices, publics du patrimoine culturel liés à la mode, diplomates et passionnées de mode recherchant une abaya A-line gracieuse avec bijoux en pierres naturelles et détails signature Knotted Line, façonnée à la main à Abou Dabi.',
      },
    ],
  },
  it: {
    introParagraphs: [
      'L’abaya che porta i gioielli in pietre naturali nel guardaroba.',
      'Per secoli, le donne hanno indossato gioielli. In Bint Saeed abbiamo immaginato qualcosa di diverso.',
      'E se anche il tuo guardaroba potesse indossare gioielli?',
      'Disponibile in Nero profondo e Blu navy, ogni Marylebone Abaya è accompagnata da due Onyx Strands rimovibili — uno per ogni polsino — realizzati a mano con vere pietre d’onice naturali. Tra ogni pietra si trova una perla in ematite placcata oro sfaccettata che cattura la luce a ogni movimento, mentre ogni filo è rifinito con i dettagli dorati signature Knotted Line di Bint Saeed.',
      'Progettata con la stessa silhouette A-line aggraziata e lo stesso tailoring raffinato della Park Lane Abaya, la Marylebone Abaya si trasforma con un semplice scambio dei suoi fili. Ogni abaya arriva con le sue Onyx Strands signature, ma puoi ampliare la collezione con ulteriori Bint Saeed Strands in altre pietre naturali, permettendo all’abaya di evolversi con scarpe, borsa, gioielli o l’occasione stessa. Un guardaroba più personale, espressivo e unicamente tuo, che porta la ricchezza delle pietre naturali in ogni look senza sostituire mai l’eleganza dell’abaya.',
      'Ogni filo è realizzato con vere pietre naturali, rendendo ogni paio magnificamente unico. Con la crescita della collezione Bint Saeed, i tuoi fili possono essere indossati anche su capi selezionati con le asole di attacco signature della maison, permettendo a una collezione di fili in pietre naturali di accompagnare più pezzi nel guardaroba.',
      'Come ogni abaya Bint Saeed, la Marylebone Abaya può essere personalizzata con un’etichetta interna nascosta con nome, data significativa o messaggio personale, per un capo che diventa ancora più speciale nel tempo.',
      'La Marylebone Abaya appartiene tanto ai quartieri degli affari di Londra e ai caffè parigini quanto ad Abu Dhabi, Riyadh e Doha. Può essere indossata come strato esterno contemporaneo raffinato o come abaya senza tempo, adattandosi magnificamente a ogni contesto.',
    ],
    silhouetteItems: [
      'Abaya A-line aggraziata',
      'Crepe dalla texture morbida e grana raffinata',
      'Tasche laterali nascoste nelle cuciture',
      'Polsini ampi progettati per Bint Saeed Strands intercambiabili',
      'Include due Onyx Strands naturali rimovibili, uno per ogni polsino',
      'Chiusura a bottoni a pressione opzionale',
      'Personalizzazione opzionale con etichetta interna nascosta',
    ],
    houseSignaturesTitle: 'Firme della Maison',
    houseSignaturesItems: [
      'Dettagli dorati signature Knotted Line',
      'Fili in pietre naturali intercambiabili signature',
      'Realizzata ad Abu Dhabi, Emirati Arabi Uniti',
    ],
    colourItems: ['Nero profondo', 'Blu navy'],
    compositionGroups: [
      { title: 'Abaya', items: ['80% poliestere, 20% viscosa'] },
      {
        title: 'Strands',
        items: [
          'Vere pietre d’onice naturali',
          'Perle distanziatrici in ematite placcata oro sfaccettata',
          'Pezzi terminali dorati signature Knotted Line',
        ],
      },
    ],
    careDetails: [
      'Rimuovere gli Onyx Strands prima del lavaggio o della lavanderia a secco professionale.',
      'Lavaggio in macchina delicato a 30 °C.',
    ],
    fitAndSizeDetails: [
      'Silhouette A-line aggraziata',
      'Progettata per essere indossata aperta o chiusa',
      'Altezza modella: 155 cm / 5\'1"',
      'La modella indossa taglia XS',
      'Lunghezza personalizzata disponibile su richiesta',
    ],
    faq: [
      {
        question: 'Gli Onyx Strands sulla Marylebone Abaya sono rimovibili?',
        answer:
          'Sì. La Marylebone Abaya include due Onyx Strands naturali rimovibili — uno per ogni polsino — con perle distanziatrici in ematite placcata oro. I polsini ampi sono progettati per Bint Saeed Strands intercambiabili nel guardaroba.',
      },
      {
        question: 'Per chi è stata progettata la Marylebone Abaya?',
        answer:
          'La Marylebone Abaya è progettata per donne che amano la moda — editor di moda, curatori, pubblici del patrimonio culturale legati alla moda, diplomatici e appassionate di moda che cercano un’abaya A-line aggraziata con gioielli in pietre naturali e dettagli signature Knotted Line, realizzata a mano ad Abu Dhabi.',
      },
    ],
  },
  es: {
    introParagraphs: [
      'La abaya que lleva joyería de piedras naturales a tu armario.',
      'Durante siglos, las mujeres han llevado joyas. En Bint Saeed imaginamos algo diferente.',
      '¿Y si tu armario también pudiera llevar joyas?',
      'Disponible en Negro profundo y Azul marino, cada Marylebone Abaya va acompañada de dos Onyx Strands extraíbles — uno para cada puño — elaborados a mano con auténticas piedras de ónix natural. Entre cada piedra hay una cuenta de hematita chapada en oro con facetas que captura la luz con cada movimiento, mientras cada hebra termina con los detalles dorados signature Knotted Line de Bint Saeed.',
      'Diseñada con la misma silueta A-line graciosa y sastrería refinada que la Park Lane Abaya, la Marylebone Abaya se transforma con un simple intercambio de sus hebras. Cada abaya llega con sus Onyx Strands signature, pero puedes ampliar tu colección con Bint Saeed Strands adicionales de otras piedras naturales, permitiendo que tu abaya evolucione sin esfuerzo junto a tus zapatos, bolso, joyas u ocasión. Un armario más personal, expresivo y únicamente tuyo, que aporta la riqueza de las piedras naturales a cada look sin reemplazar la elegancia de la abaya.',
      'Cada hebra está elaborada con auténticas piedras naturales, haciendo que cada par sea bellamente único. A medida que crece la colección Bint Saeed, tus hebras también pueden usarse en prendas seleccionadas con los bucles de fijación signature de la casa, permitiendo que una colección de hebras de piedras naturales acompañe múltiples piezas en tu armario.',
      'Como cada abaya Bint Saeed, la Marylebone Abaya puede personalizarse con una etiqueta interior oculta con un nombre, una fecha significativa o un mensaje personal, creando una pieza que se vuelve aún más especial con el tiempo.',
      'La Marylebone Abaya pertenece con la misma naturalidad a los distritos de negocios de Londres y cafés parisinos que a Abu Dabi, Riad y Doha. Puede llevarse como capa exterior contemporánea refinada o como abaya atemporal, adaptándose bellamente a cada entorno.',
    ],
    silhouetteItems: [
      'Abaya A-line graciosa',
      'Crepe de textura suave y grano refinado',
      'Bolsillos laterales ocultos en las costuras',
      'Puños anchos diseñados para Bint Saeed Strands intercambiables',
      'Incluye dos Onyx Strands naturales extraíbles, uno para cada puño',
      'Cierre de botones a presión opcional',
      'Personalización opcional con etiqueta interior oculta',
    ],
    houseSignaturesTitle: 'Firmas de la Casa',
    houseSignaturesItems: [
      'Detalles dorados signature Knotted Line',
      'Hebras de piedras naturales intercambiables signature',
      'Hecha en Abu Dabi, Emiratos Árabes Unidos',
    ],
    colourItems: ['Negro profundo', 'Azul marino'],
    compositionGroups: [
      { title: 'Abaya', items: ['80 % poliéster, 20 % viscosa'] },
      {
        title: 'Strands',
        items: [
          'Auténticas piedras de ónix natural',
          'Cuentas separadoras de hematita chapada en oro con facetas',
          'Piezas terminales doradas signature Knotted Line',
        ],
      },
    ],
    careDetails: [
      'Retire los Onyx Strands antes del lavado o la limpieza en seco profesional.',
      'Lavado a máquina suave a 30 °C.',
    ],
    fitAndSizeDetails: [
      'Silueta A-line graciosa',
      'Diseñada para llevarse abierta o cerrada',
      'Altura de la modelo: 155 cm / 5\'1"',
      'La modelo lleva talla XS',
      'Largo personalizado disponible bajo pedido',
    ],
    faq: [
      {
        question: '¿Son extraíbles los Onyx Strands de la Marylebone Abaya?',
        answer:
          'Sí. La Marylebone Abaya incluye dos Onyx Strands naturales extraíbles — uno para cada puño — con cuentas separadoras de hematita chapada en oro. Los puños anchos están diseñados para Bint Saeed Strands intercambiables en tu armario.',
      },
      {
        question: '¿Para quién está diseñada la Marylebone Abaya?',
        answer:
          'La Marylebone Abaya está diseñada para mujeres que aman la moda — editoras de moda, curadoras, públicos del patrimonio cultural vinculados a la moda, diplomáticas y entusiastas de la moda que buscan una abaya A-line graciosa con joyería de piedras naturales y detalles signature Knotted Line, elaborada a mano en Abu Dabi.',
      },
    ],
  },
  ru: {
    introParagraphs: [
      'Абайя, которая приносит украшения из натурального камня в ваш гардероб.',
      'Веками женщины носили украшения. В Bint Saeed мы представили себе нечто иное.',
      'А что, если бы и ваш гардероб мог носить украшения?',
      'Доступна в глубоком чёрном и тёмно-синем цветах, каждая Marylebone Abaya сопровождается двумя съёмными Onyx Strands — по одному на каждый манжет — ручной работы из подлинных натуральных камней оникса. Между каждым камнем — гранёная позолоченная бусина из гематита, ловящая свет при каждом движении, а каждая нить завершается фирменными золотистыми деталями Knotted Line от Bint Saeed.',
      'Созданная с той же грациозной A-line силуэтной линией и утончённым кроем, что и Park Lane Abaya, Marylebone Abaya преображается простой заменой нитей. Каждая абайя поставляется с фирменными Onyx Strands, но позже вы можете расширить коллекцию дополнительными Bint Saeed Strands из других натуральных камней, позволяя абайе развиваться вместе с обувью, сумкой, украшениями или самим поводом. Гардероб становится более личным, выразительным и по-настоящему вашим, принося богатство натуральных камней в каждый образ, не заменяя элегантность абайи.',
      'Каждая нить создана из подлинных натуральных камней, делая каждую пару прекрасно уникальной. По мере роста коллекции Bint Saeed ваши нити также можно носить на избранных изделиях с фирменными петлями крепления дома, позволяя одной коллекции нитей из натурального камня сопровождать несколько вещей в гардеробе.',
      'Как и каждая абайя Bint Saeed, Marylebone Abaya может быть персонализирована скрытой внутренней биркой с именем, значимой датой или личным посланием — вещь, которая со временем становится ещё особеннее.',
      'Marylebone Abaya так же естественно смотрится в деловых кварталах Лондона и парижских кафе, как в Абу-Даби, Эр-Рияде и Дохе. Её можно носить как утончённый современный верхний слой или как вневременную абайю, прекрасно адаптируясь к любой обстановке.',
    ],
    silhouetteItems: [
      'Грациозная A-line абайя',
      'Креп мягкой текстуры с утончённой зернистостью',
      'Скрытые боковые карманы в швах',
      'Широкие манжеты для сменных Bint Saeed Strands',
      'Включает две съёмные натуральные Onyx Strands, по одной на каждый манжет',
      'Опциональная застёжка на кнопки',
      'Опциональная персонализация скрытой внутренней биркой',
    ],
    houseSignaturesTitle: 'Фирменные знаки дома',
    houseSignaturesItems: [
      'Фирменные золотистые детали Knotted Line',
      'Фирменные сменные нити из натурального камня',
      'Сделано в Абу-Даби, ОАЭ',
    ],
    colourItems: ['Глубокий чёрный', 'Тёмно-синий'],
    compositionGroups: [
      { title: 'Абайя', items: ['80% полиэстер, 20% вискоза'] },
      {
        title: 'Strands',
        items: [
          'Подлинные натуральные камни оникса',
          'Гранёные позолоченные разделительные бусины из гематита',
          'Фирменные золотистые концевые элементы Knotted Line',
        ],
      },
    ],
    careDetails: [
      'Снимите Onyx Strands перед стиркой или профессиональной химчисткой.',
      'Деликатная машинная стирка при 30 °C.',
    ],
    fitAndSizeDetails: [
      'Грациозная A-line силуэт',
      'Для ношения нараспашку или застёгнутой',
      'Рост модели: 155 см / 5\'1"',
      'Модель носит размер XS',
      'Индивидуальная длина по запросу',
    ],
    faq: [
      {
        question: 'Съёмные ли Onyx Strands на Marylebone Abaya?',
        answer:
          'Да. Marylebone Abaya включает две съёмные натуральные Onyx Strands — по одной на каждый манжет — с позолоченными разделительными бусинами из гематита. Широкие манжеты рассчитаны на сменные Bint Saeed Strands в вашем гардеробе.',
      },
      {
        question: 'Для кого создана Marylebone Abaya?',
        answer:
          'Marylebone Abaya создана для женщин, которые любят моду — редакторов моды, кураторов, аудиторий культурного наследия, связанных с модой, дипломатов и ценительниц моды, ищущих грациозную A-line абайю с украшениями из натурального камня и фирменными деталями Knotted Line, ручной работы в Абу-Даби.',
      },
    ],
  },
  zh: {
    introParagraphs: [
      '将天然宝石首饰带入衣橱的长袍。',
      '数个世纪以来，女性一直佩戴珠宝。在 Bint Saeed，我们想象了不同的可能。',
      '如果您的衣橱也能佩戴珠宝呢？',
      '提供深黑色与海军蓝，每件 Marylebone Abaya 均配有两条可拆卸 Onyx Strands——每只袖口一条——以纯正天然玛瑙手工打造。每颗宝石之间镶嵌一颗刻面镀金赤铁矿珠，随每一次动作捕捉光线；每条饰带均以 Bint Saeed 标志性金色调 Knotted Line 细节收尾。',
      '与 Park Lane Abaya 同样优雅的 A 字廓形与精致剪裁，Marylebone Abaya 可通过简单更换饰带而焕然一新。每件长袍均配有标志性 Onyx Strands，您亦可日后以其他天然宝石制成的 Bint Saeed Strands 扩展收藏，让长袍随鞋履、手袋、珠宝或场合轻松演变。衣橱更个人、更具表现力、独一无二，将天然宝石的丰富质感带入每一造型，却从不取代长袍本身的优雅。',
      '每条饰带均以纯正天然宝石打造，使每一对都独具美感。随着 Bint Saeed 系列扩展，您的饰带亦可佩戴于品牌标志性固定环设计的精选单品上，让一套天然宝石饰带陪伴衣橱中的多件作品。',
      '与每件 Bint Saeed 长袍一样，Marylebone Abaya 可定制隐藏内标，镌刻姓名、有意义的日子或个人寄语，令这件作品随时间愈发珍贵。',
      'Marylebone Abaya 既自然属于伦敦商务区与巴黎咖啡馆，亦属于阿布扎比、利雅得与多哈。可作为精致当代外搭，亦可作为永恒长袍穿着，优雅适应每一种场合。',
    ],
    silhouetteItems: [
      '优雅 A 字廓形长袍',
      '柔软质感精制绉绸',
      '隐藏侧缝口袋',
      '宽袖口设计，可更换 Bint Saeed Strands',
      '含两条可拆卸纯正天然 Onyx Strands，每只袖口一条',
      '可选按扣开合',
      '可选隐藏内标定制',
    ],
    houseSignaturesTitle: '品牌标志',
    houseSignaturesItems: [
      '标志性金色调 Knotted Line 细节',
      '标志性可更换天然宝石饰带',
      '阿联酋阿布扎比制造',
    ],
    colourItems: ['深黑色', '海军蓝'],
    compositionGroups: [
      { title: '长袍', items: ['80% 聚酯纤维，20% 粘胶纤维'] },
      {
        title: '饰带',
        items: [
          '纯正天然玛瑙宝石',
          '刻面镀金赤铁矿间隔珠',
          '标志性金色调 Knotted Line 末端饰件',
        ],
      },
    ],
    careDetails: [
      '洗涤或专业干洗前请取下 Onyx Strands。',
      '30°C 轻柔机洗。',
    ],
    fitAndSizeDetails: [
      '优雅 A 字廓形',
      '可敞开或扣合穿着',
      '模特身高：155 厘米 / 5 英尺 1 英寸',
      '模特穿着 XS 码',
      '可按需定制长度',
    ],
    faq: [
      {
        question: 'Marylebone Abaya 上的 Onyx Strands 可拆卸吗？',
        answer:
          '可以。Marylebone Abaya 含两条可拆卸纯正天然 Onyx Strands——每只袖口一条——配镀金赤铁矿间隔珠。宽袖口专为衣橱中可更换的 Bint Saeed Strands 而设计。',
      },
      {
        question: 'Marylebone Abaya 适合谁？',
        answer:
          'Marylebone Abaya 为热爱时尚的女性而设计——时尚编辑、策展人、与时尚相关的文化遗产受众、外交官及时尚爱好者，寻求优雅 A 字廓形长袍、天然宝石首饰与标志性 Knotted Line 细节，阿布扎比手工打造。',
      },
    ],
  },
  de: {
    introParagraphs: [
      'Die Abaya, die Schmuck aus Natursteinen in Ihre Garderobe bringt.',
      'Jahrhundertelang trugen Frauen Schmuck. Bei Bint Saeed haben wir uns etwas anderes vorgestellt.',
      'Was wäre, wenn auch Ihre Garderobe Schmuck tragen könnte?',
      'In Tiefschwarz und Marineblau erhältlich, wird jede Marylebone Abaya von zwei abnehmbaren Onyx Strands begleitet — je einer pro Manschette — handgefertigt aus echten natürlichen Onyx-Edelsteinen. Zwischen jedem Stein sitzt eine facettierte goldplattierte Hämatit-Perle, die bei jeder Bewegung das Licht einfängt, während jeder Strang mit den charakteristischen goldfarbenen Knotted-Line-Details von Bint Saeed abgeschlossen wird.',
      'Mit derselben anmutigen A-Linien-Silhouette und dem raffinierten Schnitt wie die Park Lane Abaya verwandelt sich die Marylebone Abaya durch einen einfachen Wechsel ihrer Stränge. Jede Abaya kommt mit ihren charakteristischen Onyx Strands, doch Sie können Ihre Sammlung später mit weiteren Bint Saeed Strands aus anderen Natursteinen erweitern — Ihre Abaya entwickelt sich mühelos mit Schuhen, Handtasche, Schmuck oder dem Anlass selbst. Eine Garderobe, die persönlicher, ausdrucksstärker und einzigartig Ihre wird und den Reichtum natürlicher Edelsteine in jeden Look bringt, ohne die Eleganz der Abaya zu ersetzen.',
      'Jeder Strang ist aus echten Natursteinen gefertigt, wodurch jedes Paar wunderschön einzigartig ist. Mit dem Wachstum der Bint-Saeed-Kollektion können Ihre Stränge auch an ausgewählten Teilen mit den charakteristischen Befestigungsschlaufen des Hauses getragen werden — eine Sammlung natürlicher Steinstränge begleitet mehrere Stücke in Ihrer Garderobe.',
      'Wie jede Bint-Saeed-Abaya kann die Marylebone Abaya mit einem versteckten Innenetikett personalisiert werden — mit einem Namen, einem bedeutsamen Datum oder einer persönlichen Botschaft — für ein Stück, das mit der Zeit noch besonderer wird.',
      'Die Marylebone Abaya gehört ebenso natürlich in Londons Geschäftsviertel und Pariser Cafés wie nach Abu Dhabi, Riad und Doha. Sie kann als raffinierte zeitgenössische Außenschicht oder als zeitlose Abaya getragen werden und passt sich jeder Umgebung wunderbar an.',
    ],
    silhouetteItems: [
      'Anmutige A-Linien-Abaya',
      'Weich strukturierter Krepp mit raffinierter Körnung',
      'Versteckte Seitennaht-Taschen',
      'Weite Manschetten für austauschbare Bint Saeed Strands',
      'Enthält zwei abnehmbare echte natürliche Onyx Strands, je einer pro Manschette',
      'Optionale Druckknopf-Schließung',
      'Optionale Personalisierung mit verstecktem Innenetikett',
    ],
    houseSignaturesTitle: 'Haus-Signaturen',
    houseSignaturesItems: [
      'Charakteristische goldfarbene Knotted-Line-Details',
      'Charakteristische austauschbare Naturstein-Stränge',
      'Hergestellt in Abu Dhabi, VAE',
    ],
    colourItems: ['Tiefschwarz', 'Marineblau'],
    compositionGroups: [
      { title: 'Abaya', items: ['80 % Polyester, 20 % Viskose'] },
      {
        title: 'Strands',
        items: [
          'Echte natürliche Onyx-Edelsteine',
          'Facettierte goldplattierte Hämatit-Abstandperlen',
          'Charakteristische goldfarbene Knotted-Line-Endstücke',
        ],
      },
    ],
    careDetails: [
      'Onyx Strands vor dem Waschen oder der professionellen chemischen Reinigung entfernen.',
      'Schonwaschgang bei 30 °C.',
    ],
    fitAndSizeDetails: [
      'Anmutige A-Linien-Silhouette',
      'Zum offenen oder geschlossenen Tragen',
      'Modellgröße: 155 cm / 5\'1"',
      'Modell trägt Größe XS',
      'Individuelle Länge auf Anfrage',
    ],
    faq: [
      {
        question: 'Sind die Onyx Strands an der Marylebone Abaya abnehmbar?',
        answer:
          'Ja. Die Marylebone Abaya enthält zwei abnehmbare echte natürliche Onyx Strands — je einer pro Manschette — mit goldplattierten Hämatit-Abstandperlen. Weite Manschetten sind für austauschbare Bint Saeed Strands in Ihrer Garderobe konzipiert.',
      },
      {
        question: 'Für wen wurde die Marylebone Abaya entworfen?',
        answer:
          'Die Marylebone Abaya ist für Frauen entworfen, die Mode lieben — Mode-Redakteurinnen, Kuratorinnen, kulturhistorische Modepublika, Diplomatinnen und Modebegeisterte, die eine anmutige A-Linien-Abaya mit Natursteinschmuck und charakteristischen Knotted-Line-Details suchen, handgefertigt in Abu Dhabi.',
      },
    ],
  },
  nl: {
    introParagraphs: [
      'De abaya die natuursteensieraden naar je garderobe brengt.',
      'Eeuwenlang droegen vrouwen sieraden. Bij Bint Saeed stelden we ons iets anders voor.',
      'Wat als je garderobe ook sieraden kon dragen?',
      'Verkrijgbaar in diepzwart en marineblauw, wordt elke Marylebone Abaya vergezeld door twee verwijderbare Onyx Strands — één per manchet — handgemaakt van echte natuurlijke onyx-edelstenen. Tussen elke steen zit een gefacetteerde goudgeplateerde hematietkraal die bij elke beweging het licht vangt, terwijl elke streng is afgewerkt met de kenmerkende goudkleurige Knotted Line-details van Bint Saeed.',
      'Ontworpen met dezelfde gracieuze A-lijn-silhouet en verfijnde tailoring als de Park Lane Abaya, transformeert de Marylebone Abaya door een eenvoudige uitwisseling van haar strengen. Elke abaya arriveert met haar kenmerkende Onyx Strands, maar je kunt je collectie later uitbreiden met extra Bint Saeed Strands van andere natuursteen, zodat je abaya moeiteloos mee evolueert met schoenen, tas, sieraden of de gelegenheid zelf. Een garderobe die persoonlijker, expressiever en uniek van jou wordt, met de rijkdom van natuursteen in elke look zonder de elegantie van de abaya te vervangen.',
      'Elke streng is gemaakt van echte natuursteen, waardoor elk paar prachtig uniek is. Naarmate de Bint Saeed-collectie groeit, kunnen je strengen ook gedragen worden op geselecteerde kledingstukken met de kenmerkende bevestigingslussen van het huis, zodat één collectie natuursteenstrengen meerdere stukken in je garderobe begeleidt.',
      'Zoals elke Bint Saeed-abaya kan de Marylebone Abaya gepersonaliseerd worden met een verborgen binnenlabel met een naam, een betekenisvolle datum of een persoonlijke boodschap — een stuk dat met de tijd nog specialer wordt.',
      'De Marylebone Abaya hoort even natuurlijk in Londens zakenwijken en Parijse cafés als in Abu Dhabi, Riyad en Doha. Ze kan gedragen worden als verfijnde hedendaagse buitenlaag of als tijdloze abaya, en past zich prachtig aan elke setting aan.',
    ],
    silhouetteItems: [
      'Gracieuze A-lijn-abaya',
      'Zacht gestructureerde crêpe met verfijnde korrel',
      'Verborgen zijnaadzakken',
      'Brede manchetten voor verwisselbare Bint Saeed Strands',
      'Inclusief twee verwijderbare echte natuurlijke Onyx Strands, één per manchet',
      'Optionele drukknoopsluiting',
      'Optionele personalisatie met verborgen binnenlabel',
    ],
    houseSignaturesTitle: 'Huis-kenmerken',
    houseSignaturesItems: [
      'Kenmerkende goudkleurige Knotted Line-details',
      'Kenmerkende verwisselbare natuursteenstrengen',
      'Gemaakt in Abu Dhabi, VAE',
    ],
    colourItems: ['Diepzwart', 'Marineblauw'],
    compositionGroups: [
      { title: 'Abaya', items: ['80% polyester, 20% viscose'] },
      {
        title: 'Strands',
        items: [
          'Echte natuurlijke onyx-edelstenen',
          'Gefacetteerde goudgeplateerde hematiet-afstandskralen',
          'Kenmerkende goudkleurige Knotted Line-eindstukken',
        ],
      },
    ],
    careDetails: [
      'Verwijder de Onyx Strands vóór het wassen of professioneel stomen.',
      'Zachte machinewas op 30 °C.',
    ],
    fitAndSizeDetails: [
      'Gracieuze A-lijn-silhouet',
      'Ontworpen om open of gesloten gedragen te worden',
      'Model lengte: 155 cm / 5\'1"',
      'Model draagt maat XS',
      'Aangepaste lengte op aanvraag',
    ],
    faq: [
      {
        question: 'Zijn de Onyx Strands op de Marylebone Abaya verwijderbaar?',
        answer:
          'Ja. De Marylebone Abaya bevat twee verwijderbare echte natuurlijke Onyx Strands — één per manchet — met goudgeplateerde hematiet-afstandskralen. Brede manchetten zijn ontworpen voor verwisselbare Bint Saeed Strands in je garderobe.',
      },
      {
        question: 'Voor wie is de Marylebone Abaya ontworpen?',
        answer:
          'De Marylebone Abaya is ontworpen voor vrouwen die van mode houden — moderedacteuren, conservatoren, cultureel-erfgoedpubliek verbonden met mode, diplomaten en modeliefhebbers die een gracieuze A-lijn-abaya zoeken met natuursteensieraden en kenmerkende Knotted Line-details, handgemaakt in Abu Dhabi.',
      },
    ],
  },
  pt: {
    introParagraphs: [
      'A abaya que traz joias em pedras naturais ao seu guarda-roupa.',
      'Durante séculos, as mulheres usaram joias. Na Bint Saeed, imaginámos algo diferente.',
      'E se o seu guarda-roupa também pudesse usar joias?',
      'Disponível em Preto profundo e Azul-marinho, cada Marylebone Abaya é acompanhada por dois Onyx Strands removíveis — um para cada punho — artesanais em autênticas pedras de ónix naturais. Entre cada pedra situa-se uma conta de hematite folheada a ouro facetada que capta a luz a cada movimento, enquanto cada fio termina com os detalhes dourados signature Knotted Line da Bint Saeed.',
      'Concebida com a mesma silhueta A-line graciosa e tailoring refinado da Park Lane Abaya, a Marylebone Abaya transforma-se com uma simples troca dos seus fios. Cada abaya chega com os seus Onyx Strands signature, mas pode expandir a coleção com Bint Saeed Strands adicionais em outras pedras naturais, permitindo que a abaya evolua sem esforço com sapatos, mala, joias ou a própria ocasião. Um guarda-roupa mais pessoal, expressivo e unicamente seu, trazendo a riqueza das pedras naturais a cada look sem substituir a elegância da abaya.',
      'Cada fio é artesanal em autênticas pedras naturais, tornando cada par magnificamente único. À medida que a coleção Bint Saeed cresce, os seus fios também podem ser usados em peças selecionadas com as alças de fixação signature da casa, permitindo que uma coleção de fios em pedras naturais acompanhe várias peças no guarda-roupa.',
      'Como cada abaya Bint Saeed, a Marylebone Abaya pode ser personalizada com uma etiqueta interior oculta com um nome, uma data significativa ou uma mensagem pessoal, criando uma peça que se torna ainda mais especial com o tempo.',
      'A Marylebone Abaya pertence tão naturalmente aos distritos de negócios de Londres e cafés parisienses como a Abu Dhabi, Riade e Doha. Pode ser usada como camada exterior contemporânea refinada ou como abaya intemporal, adaptando-se lindamente a cada contexto.',
    ],
    silhouetteItems: [
      'Abaya A-line graciosa',
      'Crepe de textura suave e grão refinado',
      'Bolsos laterais ocultos nas costuras',
      'Punhos largos concebidos para Bint Saeed Strands intercambiáveis',
      'Inclui dois Onyx Strands naturais removíveis, um para cada punho',
      'Fecho de botões de pressão opcional',
      'Personalização opcional com etiqueta interior oculta',
    ],
    houseSignaturesTitle: 'Assinaturas da Casa',
    houseSignaturesItems: [
      'Detalhes dourados signature Knotted Line',
      'Fios em pedras naturais intercambiáveis signature',
      'Feita em Abu Dhabi, Emirados Árabes Unidos',
    ],
    colourItems: ['Preto profundo', 'Azul-marinho'],
    compositionGroups: [
      { title: 'Abaya', items: ['80% poliéster, 20% viscose'] },
      {
        title: 'Strands',
        items: [
          'Autênticas pedras de ónix naturais',
          'Contas espaçadoras de hematite folheada a ouro facetadas',
          'Peças terminais douradas signature Knotted Line',
        ],
      },
    ],
    careDetails: [
      'Remova os Onyx Strands antes da lavagem ou limpeza a seco profissional.',
      'Lavagem na máquina suave a 30 °C.',
    ],
    fitAndSizeDetails: [
      'Silhueta A-line graciosa',
      'Concebida para ser usada aberta ou fechada',
      'Altura da modelo: 155 cm / 5\'1"',
      'Modelo usa tamanho XS',
      'Comprimento personalizado disponível sob pedido',
    ],
    faq: [
      {
        question: 'Os Onyx Strands na Marylebone Abaya são removíveis?',
        answer:
          'Sim. A Marylebone Abaya inclui dois Onyx Strands naturais removíveis — um para cada punho — com contas espaçadoras de hematite folheada a ouro. Os punhos largos são concebidos para Bint Saeed Strands intercambiáveis no guarda-roupa.',
      },
      {
        question: 'Para quem foi concebida a Marylebone Abaya?',
        answer:
          'A Marylebone Abaya foi concebida para mulheres que amam moda — editoras de moda, curadoras, públicos de património cultural ligados à moda, diplomatas e entusiastas da moda que procuram uma abaya A-line graciosa com joias em pedras naturais e detalhes signature Knotted Line, artesanal em Abu Dhabi.',
      },
    ],
  },
  id: {
    introParagraphs: [
      'Abaya yang membawa perhiasan batu alami ke dalam lemari pakaian Anda.',
      'Selama berabad-abad, wanita memakai perhiasan. Di Bint Saeed, kami membayangkan sesuatu yang berbeda.',
      'Bagaimana jika lemari pakaian Anda juga bisa memakai perhiasan?',
      'Tersedia dalam Hitam pekat dan Navy Blue, setiap Marylebone Abaya disertai dua Onyx Strands yang dapat dilepas — satu untuk setiap manset — dibuat tangan dari batu Onyx alami asli. Di antara setiap batu terdapat manik hematit berlapis emas berfaset yang menangkap cahaya pada setiap gerakan, sementara setiap strand diakhiri dengan detail Knotted Line emas signature Bint Saeed.',
      'Dirancang dengan siluet A-line anggun dan tailoring halus yang sama seperti Park Lane Abaya, Marylebone Abaya bertransformasi melalui pertukaran strand yang sederhana. Setiap abaya datang dengan Onyx Strands signature-nya, namun Anda dapat memperluas koleksi dengan Bint Saeed Strands tambahan dari batu alami lainnya, memungkinkan abaya berkembang dengan mudah bersama sepatu, tas, perhiasan, atau acara itu sendiri. Menjadi lemari pakaian yang lebih personal, lebih ekspresif, dan benar-benar milik Anda, membawa kekayaan batu alami ke setiap penampilan tanpa menggantikan keanggunan abaya.',
      'Setiap strand dibuat dari batu alami asli, membuat setiap pasang unik dengan indahnya. Seiring pertumbuhan koleksi Bint Saeed, strand Anda juga dapat dipakai pada pakaian terpilih dengan loop pengait signature rumah, memungkinkan satu koleksi strand batu alami menemani beberapa potong di lemari pakaian Anda.',
      'Seperti setiap abaya Bint Saeed, Marylebone Abaya dapat dipersonalisasi dengan label dalam tersembunyi berisi nama, tanggal bermakna, atau pesan pribadi, menciptakan potongan yang semakin istimewa seiring waktu.',
      'Marylebone Abaya sama alaminya di distrik bisnis London dan kafe Paris seperti di Abu Dhabi, Riyadh, dan Doha. Dapat dipakai sebagai lapisan luar kontemporer yang halus atau sebagai abaya abadi, beradaptasi indah di setiap suasana.',
    ],
    silhouetteItems: [
      'Abaya A-line anggun',
      'Krepe bertekstur lembut dengan butiran halus',
      'Saku samping tersembunyi di jahitan sisi',
      'Manset lebar dirancang untuk Bint Saeed Strands yang dapat ditukar',
      'Termasuk dua Onyx Strands alami yang dapat dilepas, satu untuk setiap manset',
      'Penutup kancing snap opsional',
      'Personalisasi opsional dengan label dalam tersembunyi',
    ],
    houseSignaturesTitle: 'Tanda Khas Rumah',
    houseSignaturesItems: [
      'Detail Knotted Line emas signature',
      'Strand batu alami yang dapat ditukar signature',
      'Dibuat di Abu Dhabi, Uni Emirat Arab',
    ],
    colourItems: ['Hitam pekat', 'Navy Blue'],
    compositionGroups: [
      { title: 'Abaya', items: ['80% Poliester, 20% Viskosa'] },
      {
        title: 'Strands',
        items: [
          'Batu Onyx alami asli',
          'Manik pemisah hematit berlapis emas berfaset',
          'Bagian ujung Knotted Line emas signature',
        ],
      },
    ],
    careDetails: [
      'Lepaskan Onyx Strands sebelum mencuci atau dry clean profesional.',
      'Cuci mesin lembut pada 30°C.',
    ],
    fitAndSizeDetails: [
      'Siluet A-line anggun',
      'Dirancang untuk dipakai terbuka atau tertutup',
      'Tinggi model: 155 cm / 5\'1"',
      'Model memakai ukuran XS',
      'Panjang kustom tersedia atas permintaan',
    ],
    faq: [
      {
        question: 'Apakah Onyx Strands pada Marylebone Abaya dapat dilepas?',
        answer:
          'Ya. Marylebone Abaya mencakup dua Onyx Strands alami yang dapat dilepas — satu untuk setiap manset — dengan manik pemisah hematit berlapis emas. Manset lebar dirancang untuk Bint Saeed Strands yang dapat ditukar di lemari pakaian Anda.',
      },
      {
        question: 'Untuk siapa Marylebone Abaya dirancang?',
        answer:
          'Marylebone Abaya dirancang untuk wanita yang mencintai fashion — editor fashion, kurator, audiens warisan budaya yang terhubung dengan fashion, diplomat, dan penggemar fashion yang mencari abaya A-line anggun dengan perhiasan batu alami dan detail Knotted Line signature, dibuat tangan di Abu Dhabi.',
      },
    ],
  },
  ms: {
    introParagraphs: [
      'Abaya yang membawa perhiasan batu semula jadi ke dalam almari pakaian anda.',
      'Selama berabad-abad, wanita memakai perhiasan. Di Bint Saeed, kami membayangkan sesuatu yang berbeza.',
      'Bagaimana jika almari pakaian anda juga boleh memakai perhiasan?',
      'Tersedia dalam Hitam pekat dan Navy Blue, setiap Marylebone Abaya disertai dua Onyx Strands yang boleh ditanggalkan — satu untuk setiap manset — dibuat tangan daripada batu Onyx semula jadi tulen. Antara setiap batu terdapat manik hematit bersalut emas berfaset yang menangkap cahaya pada setiap pergerakan, manakala setiap strand ditamatkan dengan butiran Knotted Line emas signature Bint Saeed.',
      'Direka dengan siluet A-line anggun dan tailoring halus yang sama seperti Park Lane Abaya, Marylebone Abaya berubah melalui pertukaran strand yang mudah. Setiap abaya tiba dengan Onyx Strands signature-nya, namun anda boleh mengembangkan koleksi dengan Bint Saeed Strands tambahan daripada batu semula jadi lain, membolehkan abaya berkembang dengan mudah bersama kasut, beg tangan, perhiasan, atau majlis itu sendiri. Menjadi almari pakaian yang lebih peribadi, lebih ekspresif, dan benar-benar milik anda, membawa kekayaan batu semula jadi ke setiap penampilan tanpa menggantikan keanggunan abaya.',
      'Setiap strand dibuat daripada batu semula jadi tulen, menjadikan setiap pasangan unik dengan indahnya. Apabila koleksi Bint Saeed berkembang, strand anda juga boleh dipakai pada pakaian terpilih dengan gelung pengikat signature rumah, membolehkan satu koleksi strand batu semula jadi menemani beberapa keping di almari pakaian anda.',
      'Seperti setiap abaya Bint Saeed, Marylebone Abaya boleh diperibadikan dengan label dalaman tersembunyi yang memaparkan nama, tarikh bermakna, atau mesej peribadi, mencipta kepingan yang semakin istimewa dari masa ke masa.',
      'Marylebone Abaya sama semula jadinya di daerah perniagaan London dan kafe Paris seperti di Abu Dhabi, Riyadh, dan Doha. Boleh dipakai sebagai lapisan luar kontemporari yang halus atau sebagai abaya abadi, menyesuaikan diri dengan indah dalam setiap suasana.',
    ],
    silhouetteItems: [
      'Abaya A-line anggun',
      'Krepe bertekstur lembut dengan butiran halus',
      'Poket sisi tersembunyi di jahitan sisi',
      'Manset lebar direka untuk Bint Saeed Strands yang boleh ditukar',
      'Termasuk dua Onyx Strands semula jadi yang boleh ditanggalkan, satu untuk setiap manset',
      'Penutup butang snap pilihan',
      'Pemperibadian pilihan dengan label dalaman tersembunyi',
    ],
    houseSignaturesTitle: 'Tanda Khas Rumah',
    houseSignaturesItems: [
      'Butiran Knotted Line emas signature',
      'Strand batu semula jadi boleh ditukar signature',
      'Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu',
    ],
    colourItems: ['Hitam pekat', 'Navy Blue'],
    compositionGroups: [
      { title: 'Abaya', items: ['80% Poliester, 20% Viskosa'] },
      {
        title: 'Strands',
        items: [
          'Batu Onyx semula jadi tulen',
          'Manik pemisah hematit bersalut emas berfaset',
          'Bahagian hujung Knotted Line emas signature',
        ],
      },
    ],
    careDetails: [
      'Tanggalkan Onyx Strands sebelum mencuci atau dry clean profesional.',
      'Basuhan mesin lembut pada 30°C.',
    ],
    fitAndSizeDetails: [
      'Siluet A-line anggun',
      'Direka untuk dipakai terbuka atau tertutup',
      'Tinggi model: 155 cm / 5\'1"',
      'Model memakai saiz XS',
      'Panjang tersuai tersedia atas permintaan',
    ],
    faq: [
      {
        question: 'Adakah Onyx Strands pada Marylebone Abaya boleh ditanggalkan?',
        answer:
          'Ya. Marylebone Abaya termasuk dua Onyx Strands semula jadi yang boleh ditanggalkan — satu untuk setiap manset — dengan manik pemisah hematit bersalut emas. Manset lebar direka untuk Bint Saeed Strands yang boleh ditukar di almari pakaian anda.',
      },
      {
        question: 'Untuk siapa Marylebone Abaya direka?',
        answer:
          'Marylebone Abaya direka untuk wanita yang mencintai fesyen — editor fesyen, kurator, khalayak warisan budaya yang berkaitan dengan fesyen, diplomat, dan peminat fesyen yang mencari abaya A-line anggun dengan perhiasan batu semula jadi dan butiran Knotted Line signature, dibuat tangan di Abu Dhabi.',
      },
    ],
  },
}

function buildDetailGroups(pack: LocalePack, locale: AppLocale): PdpDetailGroup[] {
  return [
    {
      title: PDP_SILHOUETTE_TITLE[locale],
      items: [...pack.silhouetteItems],
    },
    {
      title: pack.houseSignaturesTitle,
      items: [...pack.houseSignaturesItems],
    },
    {
      title: PDP_COLOUR_TITLE[locale],
      items: [...pack.colourItems],
    },
  ]
}

export function isMaryleboneAbayaSlug(slug: string): boolean {
  return slug.toLowerCase() === MARYLEBONE_ABAYA_SLUG
}

export function getMaryleboneAbayaPdpPack(locale: AppLocale): LocalePack {
  return LOCALE_PACKS[locale]
}

export function getMaryleboneAbayaPdpFaq(locale: AppLocale = 'en'): ProductFaqItem[] {
  return getMaryleboneAbayaPdpPack(locale).faq
}

export function buildMaryleboneAbayaPdpContent(
  _color?: string,
  locale: AppLocale = 'en',
): ProductPdpContent {
  const pack = getMaryleboneAbayaPdpPack(locale)
  return {
    introParagraphs: [...pack.introParagraphs],
    productDetails: [],
    productDetailGroups: buildDetailGroups(pack, locale),
    compositionGroups: pack.compositionGroups.map((group) => ({
      title: group.title,
      items: [...group.items],
    })),
    careDetails: [...pack.careDetails],
    fitAndSizeDetails: [...pack.fitAndSizeDetails],
    faq: getMaryleboneAbayaPdpFaq(locale),
  }
}
