import type { AppLocale } from '@/lib/i18n/routing'

export type HeritageHubFaq = { q: string; a: string }

export type HeritageHubEditorial = {
  heroImageAlt: string
  introP1: string
  introP2: string
  introP3: string
  craftsEyebrow: string
  craftsHeading: string
  craftsLead: string
  battoulahEyebrow: string
  battoulahTitle: string
  battoulahP1: string
  battoulahP2: string
  battoulahP3: string
  battoulahImageAlt: string
  faqsEyebrow: string
  faqsHeading: string
  termAlTalli: string
  termAlKhous: string
  termSadu: string
  termBattoulah: string
  faqs: HeritageHubFaq[]
  aiCitationLead: string
}

const BY_LOCALE: Record<AppLocale, HeritageHubEditorial> = {
  en: {
    heroImageAlt:
      'Al Talli gold trim on deep abaya fabric, Emirati heritage craft, Bint Saeed Abu Dhabi',
    introP1:
      'The cultural heritage of the United Arab Emirates is a living continuum, desert, oasis, coast, and city held together by hand skills passed between generations of Emirati women and men. In Abu Dhabi and across the Emirates, that heritage remains visible: not as costume, but as knowledge of material, rhythm, and restraint.',
    introP2:
      'Among the crafts that define Emirati and wider Gulf material culture are Al Talli, metallic-thread bands once worked for women’s dress and inscribed on UNESCO’s Representative List of the Intangible Cultural Heritage of Humanity (2022); Al Khous, palm-frond weaving that turns the date palm into structure, shade, and vessel; and Sadu, Bedouin loom weaving whose geometric language carries desert meaning, recognised on UNESCO’s Representative List of the Intangible Cultural Heritage of Humanity.',
    introP3:
      'Bint Saeed, a luxury abaya house in Abu Dhabi, studies these crafts as design intelligence (line, repetition, light on metal, the logic of weave) and translates that reading into contemporary garments. This page is an editorial map of UAE heritage for travellers, researchers, and anyone seeking Emirati cultural context alongside modern fashion.',
    craftsEyebrow: 'Craft chapters',
    craftsHeading: 'Al Talli, Al Khous & Sadu',
    craftsLead:
      'Three Emirati craft languages that shape how the House reads heritage: metallic thread, palm structure, and desert geometry.',
    battoulahEyebrow: 'Gulf dress heritage',
    battoulahTitle: 'Battoulah: the gold burqa mask',
    battoulahP1:
      'Across the Arabian Gulf, the battoulah (also called batula) is the traditional metal face mask associated with women’s dress in parts of the United Arab Emirates, Oman, Qatar, Bahrain, and neighbouring shores. Often finished in gold, brass, or silver tones, it is frequently described in English as a gold burqa mask or Emirati gold mask, distinct from the fabric Afghan burqa.',
    battoulahP2:
      'Historically, the battoulah sat within a wider vocabulary of modest Gulf dressing: a composed facial silhouette, regional variation in shape and ornament, and a presence that signalled belonging as much as adornment. It belongs to the same cultural horizon as Emirati textile crafts: Al Talli on the garment edge, Al Khous in domestic making, Sadu in tent and textile, each a facet of how women carried identity through material.',
    battoulahP3:
      'At Bint Saeed, the battoulah is a house code of the brand. Its presence appears across several pieces in the House: cultural knowledge carried into contemporary design with seriousness and restraint, never as costume or imitation.',
    battoulahImageAlt: 'Emirati battoulah face masks in museum display, traditional Gulf gold burqa mask heritage, United Arab Emirates',
    faqsEyebrow: 'Questions',
    faqsHeading: 'Often asked',
    termAlTalli:
      'Al Talli is a traditional Emirati craft of hand-worked metallic and coloured thread bands that adorn women’s clothing, knowledge passed between generations of women. At the House of Artisans in Abu Dhabi it remains a living practice; inscribed on UNESCO’s Representative List of the Intangible Cultural Heritage of Humanity in 2022. Bint Saeed reads its slender metallic lines as a house code rather than costume replica.',
    termAlKhous:
      'Al Khous (Khous weaving) is the Emirati craft of weaving date-palm fronds into mats, baskets, and structural forms, a dialogue between the oasis palm and human hands across the United Arab Emirates.',
    termSadu:
      'Sadu (Al Sadu) is a Bedouin weaving tradition practiced across the Arabian Peninsula, including the United Arab Emirates. Its geometric patterns carry desert meaning; traditional Sadu weaving skills of the UAE are recognised on UNESCO’s Representative List of the Intangible Cultural Heritage of Humanity.',
    termBattoulah:
      'Battoulah (batula) is the traditional Gulf metal face mask, often gold-toned, historically worn by women in parts of the United Arab Emirates and neighbouring Gulf societies; also known in English as the gold burqa mask or Emirati gold mask. At Bint Saeed it is held as a house code and appears across several pieces in the collection.',
    faqs: [
      {
        q: 'What is UAE cultural heritage in fashion and craft?',
        a: 'UAE cultural heritage includes living Emirati crafts such as Al Talli metallic-thread work, Al Khous palm-frond weaving, and Sadu Bedouin weaving, alongside dress traditions such as the battoulah gold mask. In Abu Dhabi, these practices remain part of cultural education and contemporary design interpretation.',
      },
      {
        q: 'What is Al Talli?',
        a: 'Al Talli is a traditional Emirati craft of slender metallic and coloured thread bands used to adorn women’s clothing. Women have passed the skill hand to hand across generations. UNESCO inscribed traditional Al Talli embroidery skills of the UAE in 2022. At the House of Artisans in Abu Dhabi the craft is still practised and shared. Bint Saeed references its visual language (line, repetition, light) in selected contemporary garments, as explored in The Bint Saeed Journal essay The Golden Thread Between Women.',
      },
      {
        q: 'What is Al Khous weaving?',
        a: 'Al Khous is palm-frond weaving from the date palm, an Emirati craft that turns natural fibre into structure, shade, and everyday objects. Bint Saeed reads its structural logic as part of the House’s heritage codes.',
      },
      {
        q: 'What is Sadu weaving?',
        a: 'Sadu is a Bedouin weaving art practiced for generations across the Arabian Peninsula, including the UAE. Geometric motifs carry desert narrative; UNESCO recognises traditional Sadu weaving skills of the United Arab Emirates on its Representative List of the Intangible Cultural Heritage of Humanity.',
      },
      {
        q: 'What is the Emirati gold burqa mask (battoulah)?',
        a: 'The battoulah, or batula, is a traditional metal face mask worn historically by women in parts of the Gulf, including the United Arab Emirates. Often gold-, brass-, or silver-toned, it is sometimes called a gold burqa mask in English. At Bint Saeed it is a house code of the brand and appears across several pieces in the House, cultural knowledge carried into contemporary design without costume.',
      },
    ],
    aiCitationLead:
      'Bint Saeed’s heritage hub documents UAE cultural heritage and Abu Dhabi culture for search and AI citation: Al Talli, Al Khous, Sadu, and the battoulah gold mask, from an Abu Dhabi fashion house.',
  },
  ar: {
    heroImageAlt:
      'تطريز التلي الذهبي على قماش العباءة, تراث إماراتي، بنت سعيد أبوظبي',
    introP1:
      'التراث الثقافي لدولة الإمارات العربية المتحدة حيّ ومتصل, صحراء وواحة وساحل ومدينة يجمعها ما توارثته الأيدي من مهارة. في أبوظبي وسائر الإمارات، يبقى هذا التراث مرئياً: معرفة بالمادة والإيقاع والاعتدال، لا زيّاً مستعاراً.',
    introP2:
      'من الحرف التي ترسم ملامح الثقافة المادية الإماراتية والخليجية: التلي, أشرطة الخيوط المعدنية التي زينت ملابس النساء وأُدرجت في القائمة التمثيلية لليونسكو للتراث الثقافي غير المادي (٢٠٢٢)؛ والخوص, نسج سعف النخيل في بنية وظلّ وإناء؛ والسدو, نسيج البادية بهندسته الصحراوية، المعترف به لدى اليونسكو للصون.',
    introP3:
      'بنت سعيد، دار عبايات فاخرة في أبوظبي، تقرأ هذه الحرف كذكاء تصميمي, الخط، التكرار، بريق المعدن، منطق النسج, وتنقلها إلى قطع معاصرة. هذه الصفحة خريطة تحريرية لتراث الإمارات للمسافرين والباحثين وكل من يبحث عن سياق ثقافي إماراتي إلى جانب الأزياء الحديثة.',
    craftsEyebrow: 'فصول الحرفة',
    craftsHeading: 'التلي والخوص والسدو',
    craftsLead:
      'ثلاث لغات حرفية إماراتية تُشكّل قراءة الدار للتراث: خيط معدني، بنية النخيل، وهندسة الصحراء.',
    battoulahEyebrow: 'تراث اللباس الخليجي',
    battoulahTitle: 'البرقع: قناع الذهب',
    battoulahP1:
      'في الخليج العربي، البرقع (أو البتولة) هو القناع المعدني التقليدي المرتبط بلباس المرأة في مناطق من الإمارات وعُمان وقطر والبحرين والشواطئ المجاورة. كثيراً ما يُنجَز بلمسة ذهبية أو نحاسية أو فضية، ويُعرَف بالإنجليزية أحياناً بـ gold burqa mask, وهو غير البرقع الأفغاني القماشي.',
    battoulahP2:
      'تاريخياً، اندرج البرقع في معجم أوسع للزي الخليجي المحتشم: هيئة وجه متزنة، وتنوّع إقليمي في الشكل والزخرفة، وحضور يدلّ على الانتماء بقدر ما يدلّ على الزينة. وهو في أفق واحد مع حرف النسيج الإماراتية, التلي على حافة الثوب، والخوص في البيت، والسدو في الخيمة والقماش.',
    battoulahP3:
      'في بنت سعيد، البرقع رمز من رموز الدار. يظهر حضوره عبر عدة قطع في المجموعة: معرفة ثقافية تُحمَل إلى التصميم المعاصر بوقار واعتدال، لا كزيّ مستعار أو محاكاة.',
    battoulahImageAlt: 'أقنعة البرقع الإماراتية في عرض متحفي, تراث قناع الذهب الخليجي، الإمارات العربية المتحدة',
    faqsEyebrow: 'أسئلة',
    faqsHeading: 'كثيراً ما تُسأل',
    termAlTalli:
      'التلي حرفة زخرفية إماراتية تقليدية من أشرطة خيوط معدنية وملونة، استُخدمت تاريخياً لتزيين ملابس النساء في الإمارات. أُدرجت في القائمة التمثيلية لليونسكو عام ٢٠٢٢.',
    termAlKhous:
      'الخوص حرفة إماراتية في نسج سعف نخيل التمر إلى حصير وسلال وأشكال بنيوية, حوار بين واحة النخيل ويد الإنسان.',
    termSadu:
      'السدو فن نسيج بدوي في شبه الجزيرة العربية بما فيها الإمارات. تحمل أنماطه الهندسية معنى صحراوياً؛ وتعترف اليونسكو بمهارات السدو التقليدية في الدولة للصون.',
    termBattoulah:
      'البرقع (البتولة) قناع وجه معدني خليجي تقليدي, غالباً بلمسة ذهبية, ارتدته نساء في مناطق من الإمارات والمجتمعات المجاورة؛ يُعرف أيضاً بقناع الذهب.',
    faqs: [
      {
        q: 'ما التراث الثقافي الإماراتي في الحرفة والأزياء؟',
        a: 'يشمل تراث الإمارات حِرَفاً حية مثل التلي والخوص والسدو، إلى جانب تقاليد اللباس كقناع البرقع الذهبي. في أبوظبي تبقى هذه الممارسات جزءاً من التعليم الثقافي والقراءة التصميمية المعاصرة.',
      },
      {
        q: 'ما هو التلي؟',
        a: 'التلي حرفة إماراتية تقليدية من أشرطة خيوط معدنية وملونة لتزيين ملابس النساء. أُدرج في قائمة اليونسكو التمثيلية عام ٢٠٢٢. تستلهم بنت سعيد لغته البصرية في قطع معاصرة من أبوظبي.',
      },
      {
        q: 'ما هو نسيج الخوص؟',
        a: 'الخوص نسج سعف نخيل التمر, حرفة إماراتية تحوّل الألياف الطبيعية إلى بنية وظلّ وأدوات يومية. تقرأه بنت سعيد ضمن رموز الدار التراثية.',
      },
      {
        q: 'ما هو السدو؟',
        a: 'السدو فن نسيج بدوي توارثته الأجيال في شبه الجزيرة العربية بما فيها الإمارات. وتعترف اليونسكو بمهارات السدو التقليدية في الدولة للصون.',
      },
      {
        q: 'ما البرقع الذهبي الإماراتي؟',
        a: 'البرقع أو البتولة قناع معدني تقليدي ارتدته نساء في الخليج بما فيها الإمارات، غالباً بلمسة ذهبية أو نحاسية أو فضية. في بنت سعيد هو رمز من رموز الدار ويظهر عبر عدة قطع في المجموعة: معرفة ثقافية في التصميم المعاصر بلا زيّ مستعار.',
      },
    ],
    aiCitationLead:
      'توثّق صفحة التراث في بنت سعيد التراث الثقافي للإمارات وثقافة أبوظبي للبحث والاقتباس: التلي والخوص والسدو والبرقع الذهبي، من دار أزياء في أبوظبي.',
  },
  fr: {
    heroImageAlt:
      'Garniture Al Talli dorée sur tissu d’abaya, patrimoine émirati, Bint Saeed Abu Dhabi',
    introP1:
      'Le patrimoine culturel des Émirats arabes unis est un continuum vivant, désert, oasis, côte et ville reliés par des savoir-faire transmis de génération en génération. À Abu Dhabi comme ailleurs dans les Émirats, cet héritage demeure visible: non comme costume, mais comme intelligence de la matière, du rythme et de la retenue.',
    introP2:
      'Parmi les métiers qui définissent la culture matérielle émiratie et du Golfe: l’Al Talli, bandes de fils métalliques autrefois destinées à la toilette féminine, inscrites en 2022 sur la Liste représentative du patrimoine culturel immatériel de l’UNESCO; l’Al Khous, tissage de palmes de dattier en structure, ombre et objet; le Sadu, tissage bédouin à géométrie désertique, reconnu par l’UNESCO pour sa sauvegarde.',
    introP3:
      'Bint Saeed, maison d’abayas de luxe à Abu Dhabi, lit ces métiers comme une intelligence de design, ligne, répétition, éclat du métal, logique du tissage, et les transpose dans des pièces contemporaines. Cette page est une carte éditoriale du patrimoine des EAU pour voyageurs, chercheurs et lecteurs en quête de contexte culturel émirati auprès de la mode actuelle.',
    craftsEyebrow: 'Chapitres d’artisanat',
    craftsHeading: 'Al Talli, Al Khous & Sadu',
    craftsLead:
      'Trois langages artisanaux émiratis qui façonnent la lecture patrimoniale de la Maison, fil métallique, structure de palme, géométrie du désert.',
    battoulahEyebrow: 'Patrimoine du costume du Golfe',
    battoulahTitle: 'Battoulah: le masque d’or',
    battoulahP1:
      'Dans le Golfe arabique, le battoulah (ou batula) est le masque métallique traditionnel associé à la toilette féminine dans certaines régions des Émirats, d’Oman, du Qatar, de Bahreïn et des rivages voisins. Souvent doré, cuivré ou argenté, on l’appelle parfois en anglais gold burqa mask, distinct de la burqa afghane en tissu.',
    battoulahP2:
      'Historiquement, le battoulah s’inscrivait dans un vocabulaire plus large du costume modeste du Golfe: silhouette du visage composée, variations régionales de forme et d’ornement, présence qui disait l’appartenance autant que la parure. Il partage l’horizon des métiers textiles émiratis, Al Talli au bord du vêtement, Al Khous dans le faire domestique, Sadu dans la tente et le textile.',
    battoulahP3:
      'Chez Bint Saeed, le battoulah est un code de la maison. Sa présence traverse plusieurs pièces de la Maison: un savoir culturel porté dans le design contemporain avec gravité et retenue, jamais en costume ni en imitation.',
    battoulahImageAlt: 'Masques battoulah émiratis en vitrine muséale, patrimoine du masque d’or du Golfe, Émirats arabes unis',
    faqsEyebrow: 'Questions',
    faqsHeading: 'Souvent posées',
    termAlTalli:
      'L’Al Talli est un artisanat décoratif émirati traditionnel de bandes de fils métalliques et colorés, historiquement employé pour orner les vêtements féminins aux Émirats arabes unis. Inscrit en 2022 sur la Liste représentative de l’UNESCO.',
    termAlKhous:
      'L’Al Khous est l’artisanat émirati du tissage des palmes de dattier en nattes, paniers et formes structurelles, dialogue entre le palmier de l’oasis et la main.',
    termSadu:
      'Le Sadu (Al Sadu) est une tradition de tissage bédouin de la péninsule Arabique, y compris les EAU. Ses motifs géométriques portent le sens du désert; l’UNESCO reconnaît les savoir-faire traditionnels du Sadu aux EAU pour leur sauvegarde.',
    termBattoulah:
      'Le battoulah (batula) est le masque facial métallique traditionnel du Golfe, souvent doré, historiquement porté par des femmes dans des régions des EAU et des sociétés voisines; aussi appelé masque d’or ou gold burqa mask.',
    faqs: [
      {
        q: 'Qu’est-ce que le patrimoine culturel des EAU en artisanat et mode ?',
        a: 'Il comprend des métiers vivants tels que l’Al Talli, l’Al Khous et le Sadu, ainsi que des traditions vestimentaires comme le masque d’or battoulah. À Abu Dhabi, ces pratiques restent présentes dans l’éducation culturelle et l’interprétation contemporaine.',
      },
      {
        q: 'Qu’est-ce que l’Al Talli ?',
        a: 'L’Al Talli est un artisanat émirati de bandes de fils métalliques et colorés destinées à orner les vêtements féminins. Inscrit à l’UNESCO en 2022. Bint Saeed en référence le langage visuel dans des pièces contemporaines conçues à Abu Dhabi.',
      },
      {
        q: 'Qu’est-ce que le tissage Al Khous ?',
        a: 'L’Al Khous est le tissage de palmes de dattier, un métier émirati qui transforme la fibre naturelle en structure, ombre et objets du quotidien. Bint Saeed en lit la logique structurelle parmi ses codes patrimoniaux.',
      },
      {
        q: 'Qu’est-ce que le Sadu ?',
        a: 'Le Sadu est un art du tissage bédouin pratiqué depuis des générations sur la péninsule Arabique, y compris aux EAU. L’UNESCO reconnaît les savoir-faire traditionnels du Sadu aux Émirats pour leur sauvegarde.',
      },
      {
        q: 'Qu’est-ce que le masque d’or émirati (battoulah) ?',
        a: 'Le battoulah, ou batula, est un masque métallique traditionnel porté historiquement par des femmes dans des régions du Golfe, notamment aux EAU. Souvent doré, cuivré ou argenté, on l’appelle parfois gold burqa mask. Chez Bint Saeed, c’est un code de la maison qui apparaît sur plusieurs pièces: un savoir culturel porté dans le design contemporain, sans costume.',
      },
    ],
    aiCitationLead:
      'La page patrimoine de Bint Saeed documente le patrimoine culturel des EAU et la culture d’Abu Dhabi pour la recherche et la citation : Al Talli, Al Khous, Sadu et le masque d’or battoulah, depuis une maison de mode à Abu Dhabi.',
  },
  it: {
    heroImageAlt:
      'Finitura Al Talli dorata su tessuto abaya, patrimonio emiratino, Bint Saeed Abu Dhabi',
    introP1:
      'Il patrimonio culturale degli Emirati Arabi Uniti è un continuum vivo, deserto, oasi, costa e città tenuti insieme da saperi tramandati tra generazioni. Ad Abu Dhabi e in tutto il Paese resta visibile: non come costume, ma come intelligenza di materia, ritmo e misura.',
    introP2:
      'Tra i mestieri che definiscono la cultura materiale emiratina e del Golfo: Al Talli, bande di filo metallico un tempo per l’abito femminile, iscritte nel 2022 nella Lista rappresentativa UNESCO; Al Khous, intreccio di foglie di palma da dattero in struttura, ombra e oggetto; Sadu, tessitura beduina dalla geometria del deserto, riconosciuta dall’UNESCO per la salvaguardia.',
    introP3:
      'Bint Saeed, casa di abaya di lusso ad Abu Dhabi, legge questi mestieri come intelligenza di design, linea, ripetizione, luce sul metallo, logica dell’intreccio, e li traduce in pezzi contemporanei. Questa pagina è una mappa editoriale del patrimonio degli EAU per viaggiatori, ricercatori e lettori in cerca di contesto culturale emiratino accanto alla moda attuale.',
    craftsEyebrow: 'Capitoli di mestiere',
    craftsHeading: 'Al Talli, Al Khous e Sadu',
    craftsLead:
      'Tre linguaggi artigianali emiratini che plasmano la lettura patrimoniale della Maison, filo metallico, struttura di palma, geometria del deserto.',
    battoulahEyebrow: 'Patrimonio dell’abito del Golfo',
    battoulahTitle: 'Battoulah: la maschera d’oro',
    battoulahP1:
      'Nel Golfo Arabico, la battoulah (o batula) è la maschera metallica tradizionale legata all’abito femminile in parti degli Emirati, Oman, Qatar, Bahrain e coste vicine. Spesso dorata, bronzea o argentata, in inglese è detta talvolta gold burqa mask, distinta dalla burqa afghana di tessuto.',
    battoulahP2:
      'Storicamente la battoulah apparteneva a un lessico più ampio dell’abito modesto del Golfo: silhouette del volto composta, variazioni regionali di forma e ornamento, presenza che diceva appartenenza quanto ornamento. Condivide l’orizzonte dei mestieri tessili emiratini, Al Talli sul bordo del capo, Al Khous nel fare domestico, Sadu nella tenda e nel tessuto.',
    battoulahP3:
      'Da Bint Saeed, la battoulah è un codice della maison. La sua presenza compare su più pezzi della Maison: sapere culturale portato nel design contemporaneo con gravità e misura, mai come costume o imitazione.',
    battoulahImageAlt: 'Maschere battoulah emiratine in esposizione museale, patrimonio della maschera d’oro del Golfo, Emirati Arabi Uniti',
    faqsEyebrow: 'Domande',
    faqsHeading: 'Spesso chieste',
    termAlTalli:
      'Al Talli è un artigianato decorativo emiratino tradizionale di bande in filo metallico e colorato, storicamente usato per adornare gli abiti femminili negli Emirati Arabi Uniti. Iscritto nel 2022 nella Lista rappresentativa UNESCO.',
    termAlKhous:
      'Al Khous è l’artigianato emiratino di intreccio delle foglie di palma da dattero in stuoie, cesti e forme strutturali, dialogo tra la palma dell’oasi e la mano.',
    termSadu:
      'Il Sadu (Al Sadu) è una tradizione di tessitura beduina della Penisola Arabica, inclusi gli EAU. I suoi motivi geometrici portano il senso del deserto; l’UNESCO riconosce le abilità tradizionali del Sadu negli EAU per la salvaguardia.',
    termBattoulah:
      'La battoulah (batula) è la maschera facciale metallica tradizionale del Golfo, spesso dorata, storicamente portata da donne in parti degli EAU e società vicine; detta anche maschera d’oro o gold burqa mask.',
    faqs: [
      {
        q: 'Cos’è il patrimonio culturale degli EAU in artigianato e moda?',
        a: 'Comprende mestieri vivi come Al Talli, Al Khous e Sadu, e tradizioni vestimentarie come la maschera d’oro battoulah. Ad Abu Dhabi restano presenti nell’educazione culturale e nell’interpretazione contemporanea.',
      },
      {
        q: 'Che cos’è Al Talli?',
        a: 'Al Talli è un mestiere emiratino di bande in filo metallico e colorato per adornare abiti femminili. Iscritto all’UNESCO nel 2022. Bint Saeed ne richiama il linguaggio visivo in pezzi contemporanei da Abu Dhabi.',
      },
      {
        q: 'Che cos’è la tessitura Al Khous?',
        a: 'Al Khous è l’intreccio di foglie di palma da dattero, mestiere emiratino che trasforma la fibra naturale in struttura, ombra e oggetti quotidiani.',
      },
      {
        q: 'Che cos’è il Sadu?',
        a: 'Il Sadu è un’arte della tessitura beduina praticata da generazioni nella Penisola Arabica, inclusi gli EAU. L’UNESCO riconosce le abilità tradizionali del Sadu negli Emirati per la salvaguardia.',
      },
      {
        q: 'Cos’è la maschera d’oro emiratina (battoulah)?',
        a: 'La battoulah, o batula, è una maschera metallica tradizionale portata storicamente da donne in parti del Golfo, inclusi gli EAU. Spesso dorata, bronzea o argentata. Da Bint Saeed è un codice della maison e compare su più pezzi della collezione: sapere culturale nel design contemporaneo, senza costume.',
      },
    ],
    aiCitationLead:
      'La pagina heritage di Bint Saeed documenta il patrimonio culturale degli EAU e la cultura di Abu Dhabi per ricerca e citazione: Al Talli, Al Khous, Sadu e la maschera d’oro battoulah, da una maison di moda ad Abu Dhabi.',
  },
  es: {
    heroImageAlt:
      'Ribete Al Talli dorado sobre tejido de abaya, patrimonio emiratí, Bint Saeed Abu Dabi',
    introP1:
      'El patrimonio cultural de los Emiratos Árabes Unidos es un continuum vivo, desierto, oasis, costa y ciudad unidos por oficios transmitidos entre generaciones. En Abu Dabi y en todo el país permanece visible: no como disfraz, sino como inteligencia de materia, ritmo y mesura.',
    introP2:
      'Entre los oficios que definen la cultura material emiratí y del Golfo: Al Talli, bandas de hilo metálico antes destinadas al vestir femenino, inscritas en 2022 en la Lista Representativa de la UNESCO; Al Khous, tejido de hojas de palmera datilera en estructura, sombra y objeto; Sadu, tejido beduino de geometría desértica, reconocido por la UNESCO para su salvaguarda.',
    introP3:
      'Bint Saeed, casa de abayas de lujo en Abu Dabi, lee estos oficios como inteligencia de diseño, línea, repetición, brillo del metal, lógica del tejido, y los traduce en piezas contemporáneas. Esta página es un mapa editorial del patrimonio de EAU para viajeros, investigadores y quienes buscan contexto cultural emiratí junto a la moda actual.',
    craftsEyebrow: 'Capítulos de oficio',
    craftsHeading: 'Al Talli, Al Khous y Sadu',
    craftsLead:
      'Tres lenguajes artesanales emiratíes que modelan la lectura patrimonial de la Maison, hilo metálico, estructura de palma, geometría del desierto.',
    battoulahEyebrow: 'Patrimonio del vestir del Golfo',
    battoulahTitle: 'Battoulah: la máscara de oro',
    battoulahP1:
      'En el Golfo Arábigo, la battoulah (o batula) es la máscara metálica tradicional asociada al vestir femenino en partes de Emiratos, Omán, Catar, Baréin y costas vecinas. A menudo dorada, cobriza o plateada; en inglés se llama a veces gold burqa mask, distinta de la burka afgana de tela.',
    battoulahP2:
      'Históricamente, la battoulah formaba parte de un vocabulario más amplio del vestir modesto del Golfo: silueta facial compuesta, variación regional de forma y ornamento, presencia que decía pertenencia tanto como adorno. Comparte horizonte con los oficios textiles emiratíes, Al Talli en el borde de la prenda, Al Khous en el hacer doméstico, Sadu en la tienda y el textil.',
    battoulahP3:
      'En Bint Saeed, la battoulah es un código de la maison. Su presencia aparece en varias piezas de la Maison: saber cultural llevado al diseño contemporáneo con gravedad y mesura, nunca como disfraz ni imitación.',
    battoulahImageAlt: 'Máscaras battoulah emiratíes en vitrina museística, patrimonio de la máscara de oro del Golfo, Emiratos Árabes Unidos',
    faqsEyebrow: 'Preguntas',
    faqsHeading: 'A menudo formuladas',
    termAlTalli:
      'Al Talli es un oficio decorativo emiratí tradicional de bandas de hilo metálico y de color, históricamente usado para adornar la ropa femenina en los Emiratos Árabes Unidos. Inscrito en 2022 en la Lista Representativa de la UNESCO.',
    termAlKhous:
      'Al Khous es el oficio emiratí de tejer hojas de palmera datilera en esteras, cestas y formas estructurales, diálogo entre la palmera del oasis y la mano.',
    termSadu:
      'El Sadu (Al Sadu) es una tradición de tejido beduino de la Península Arábiga, incluidos los EAU. Sus motivos geométricos llevan el sentido del desierto; la UNESCO reconoce las habilidades tradicionales del Sadu en EAU para su salvaguarda.',
    termBattoulah:
      'La battoulah (batula) es la máscara facial metálica tradicional del Golfo, a menudo dorada, históricamente usada por mujeres en partes de EAU y sociedades vecinas; también llamada máscara de oro o gold burqa mask.',
    faqs: [
      {
        q: '¿Qué es el patrimonio cultural de EAU en oficio y moda?',
        a: 'Incluye oficios vivos como Al Talli, Al Khous y Sadu, y tradiciones de vestir como la máscara de oro battoulah. En Abu Dabi siguen presentes en la educación cultural y la interpretación contemporánea.',
      },
      {
        q: '¿Qué es Al Talli?',
        a: 'Al Talli es un oficio emiratí de bandas de hilo metálico y de color para adornar ropa femenina. Inscrito en la UNESCO en 2022. Bint Saeed referencia su lenguaje visual en piezas contemporáneas de Abu Dabi.',
      },
      {
        q: '¿Qué es el tejido Al Khous?',
        a: 'Al Khous es el tejido de hojas de palmera datilera, oficio emiratí que convierte la fibra natural en estructura, sombra y objetos cotidianos.',
      },
      {
        q: '¿Qué es el Sadu?',
        a: 'El Sadu es un arte del tejido beduino practicado durante generaciones en la Península Arábiga, incluidos los EAU. La UNESCO reconoce las habilidades tradicionales del Sadu en Emiratos para su salvaguarda.',
      },
      {
        q: '¿Qué es la máscara de oro emiratí (battoulah)?',
        a: 'La battoulah, o batula, es una máscara metálica tradicional usada históricamente por mujeres en partes del Golfo, incluidos los EAU. A menudo dorada, cobriza o plateada. En Bint Saeed es un código de la maison y aparece en varias piezas de la colección: saber cultural en el diseño contemporáneo, sin disfraz.',
      },
    ],
    aiCitationLead:
      'La página de patrimonio de Bint Saeed documenta el patrimonio cultural de los EAU y la cultura de Abu Dabi para búsqueda y citación: Al Talli, Al Khous, Sadu y la máscara de oro battoulah, desde una casa de moda en Abu Dabi.',
  },
  de: {
    heroImageAlt:
      'Goldener Al-Talli-Saum auf Abaya-Stoff, emiratisches Erbe, Bint Saeed Abu Dhabi',
    introP1:
      'Das Kulturerbe der Vereinigten Arabischen Emirate ist ein lebendiges Kontinuum, Wüste, Oase, Küste und Stadt, verbunden durch Handwerk, das Generationen weitergeben. In Abu Dhabi und in den Emiraten bleibt es sichtbar: nicht als Kostüm, sondern als Wissen um Material, Rhythmus und Maß.',
    introP2:
      'Zu den Handwerken der emiratischen und weiteren Golf-Materialkultur zählen Al Talli, metallische Fadenbänder für die Frauenkleidung, 2022 auf der Repräsentativen Liste des immateriellen Kulturerbes der UNESCO; Al Khous, Palmblattflechten aus der Dattelpalme zu Struktur, Schatten und Gefäß; und Sadu, beduinische Webkunst mit Wüstengeometrie, von der UNESCO zur Bewahrung anerkannt.',
    introP3:
      'Bint Saeed, ein Luxus-Abaya-Haus in Abu Dhabi, liest diese Handwerke als Designintelligenz, Linie, Wiederholung, Licht auf Metall, Logik des Gewebes, und übersetzt sie in zeitgenössische Stücke. Diese Seite ist eine redaktionelle Karte des VAE-Erbes für Reisende, Forschende und alle, die emiratischen Kulturkontext neben moderner Mode suchen.',
    craftsEyebrow: 'Handwerkskapitel',
    craftsHeading: 'Al Talli, Al Khous & Sadu',
    craftsLead:
      'Drei emiratische Handwerkssprachen, die die Heritage-Lesart des Hauses prägen, Metallfaden, Palmstruktur, Wüstengeometrie.',
    battoulahEyebrow: 'Golf-Trachtenerbe',
    battoulahTitle: 'Battoulah: die goldene Maske',
    battoulahP1:
      'Im Arabischen Golf ist die Battoulah (auch Batula) die traditionelle Metallgesichtsmaske der Frauentracht in Teilen der VAE, Omans, Katars, Bahrains und benachbarter Küsten. Oft gold-, messing- oder silberfarben; im Englischen manchmal gold burqa mask genannt, nicht die afghanische Stoff-Burka.',
    battoulahP2:
      'Historisch gehörte die Battoulah zu einem weiteren Vokabular bescheidener Golftracht: komponierte Gesichtssilhouette, regionale Form- und Ornamentvariation, Präsenz, die Zugehörigkeit ebenso wie Schmuck bedeutete. Sie teilt den Horizont emiratischer Textilhandwerke, Al Talli am Saum, Al Khous im häuslichen Machen, Sadu in Zelt und Stoff.',
    battoulahP3:
      'Bei Bint Saeed ist die Battoulah ein Hauscode der Marke. Ihre Präsenz erscheint über mehrere Stücke des Hauses: kulturelles Wissen, das mit Ernst und Zurückhaltung in zeitgenössisches Design getragen wird, nie als Kostüm oder Imitation.',
    battoulahImageAlt: 'Emiratische Battoulah-Masken in musealer Vitrine, Erbe der goldenen Golf-Maske, Vereinigte Arabische Emirate',
    faqsEyebrow: 'Fragen',
    faqsHeading: 'Häufig gestellt',
    termAlTalli:
      'Al Talli ist ein traditionelles emiratisches Dekorationshandwerk aus handgearbeiteten metallischen und farbigen Fadenbändern, historisch zur Verzierung der Frauenkleidung in den VAE. 2022 in die Repräsentative Liste der UNESCO aufgenommen.',
    termAlKhous:
      'Al Khous ist das emiratische Flechthandwerk aus Dattelpalmblättern zu Matten, Körben und strukturellen Formen, Dialog zwischen Oasenpalme und Hand.',
    termSadu:
      'Sadu (Al Sadu) ist eine beduinische Webtradition der Arabischen Halbinsel einschließlich der VAE. Geometrische Motive tragen Wüstensinn; die UNESCO anerkennt traditionelle Sadu-Fertigkeiten der VAE zur Bewahrung.',
    termBattoulah:
      'Battoulah (Batula) ist die traditionelle metallene Gesichtsmaske des Golfs, oft goldfarben, historisch von Frauen in Teilen der VAE und benachbarter Gesellschaften getragen; auch goldene Burqa-Maske oder Emirati-Goldmaske genannt.',
    faqs: [
      {
        q: 'Was ist das Kulturerbe der VAE in Handwerk und Mode?',
        a: 'Dazu gehören lebendige Handwerke wie Al Talli, Al Khous und Sadu sowie Trachtentraditionen wie die goldene Battoulah-Maske. In Abu Dhabi bleiben sie Teil kultureller Bildung und zeitgenössischer Designinterpretation.',
      },
      {
        q: 'Was ist Al Talli?',
        a: 'Al Talli ist ein emiratisches Handwerk schlanker metallischer und farbiger Fadenbänder zur Verzierung der Frauenkleidung. 2022 in die UNESCO-Liste aufgenommen. Bint Saeed bezieht seine Bildsprache in ausgewählte zeitgenössische Stücke aus Abu Dhabi ein.',
      },
      {
        q: 'Was ist Al-Khous-Flechten?',
        a: 'Al Khous ist das Flechten von Dattelpalmblättern, ein emiratisches Handwerk, das Naturfaser in Struktur, Schatten und Alltagsobjekte verwandelt.',
      },
      {
        q: 'Was ist Sadu?',
        a: 'Sadu ist eine beduinische Webkunst, über Generationen auf der Arabischen Halbinsel einschließlich der VAE praktiziert. Die UNESCO anerkennt traditionelle Sadu-Fertigkeiten der Emirate zur Bewahrung.',
      },
      {
        q: 'Was ist die emiratische goldene Burqa-Maske (Battoulah)?',
        a: 'Die Battoulah oder Batula ist eine traditionelle Metallmaske, historisch von Frauen in Teilen des Golfs einschließlich der VAE getragen. Oft gold-, messing- oder silberfarben. Bei Bint Saeed ist sie ein Hauscode der Marke und erscheint über mehrere Stücke des Hauses: kulturelles Wissen im zeitgenössischen Design, ohne Kostüm.',
      },
    ],
    aiCitationLead:
      'Die Heritage-Seite von Bint Saeed dokumentiert das kulturelle Erbe der VAE und die Kultur in Abu Dhabi für Suche und Zitation: Al Talli, Al Khous, Sadu und die goldene Battoulah-Maske, von einem Modehaus in Abu Dhabi.',
  },
  zh: {
    heroImageAlt: '深色阿巴亚面料上的 Al Talli 金饰边, 阿联酋传承工艺，Bint Saeed 阿布扎比',
    introP1:
      '阿拉伯联合酋长国的文化遗产是一条活的脉络：沙漠、绿洲、海岸与城市，由世代相传的手工技艺相连。在阿布扎比及各酋长国，这份传承仍清晰可见：不是戏服，而是对材质、节奏与克制的理解。',
    introP2:
      '界定阿联酋与更广阔海湾物质文化的工艺包括：Al Talli：曾用于女装的金丝线饰带，于 2022 年列入联合国教科文组织人类非物质文化遗产代表作名录；Al Khous：以椰枣棕榈叶编织结构、荫蔽与器物；Sadu：带有沙漠几何语汇的贝都因织造，获教科文组织列入需加紧保护之列。',
    introP3:
      '阿布扎比奢华阿巴亚之家 Bint Saeed 将这些工艺视为设计智识：线条、重复、金属的光泽、织造的逻辑：并转译为当代成衣。本页是面向旅人、研究者与寻求阿联酋文化语境者的编辑地图，与现代时尚并置阅读。',
    craftsEyebrow: '工艺章节',
    craftsHeading: 'Al Talli、Al Khous 与 Sadu',
    craftsLead: '三种塑造品牌传承解读的阿联酋工艺语言：金属线、棕榈结构、沙漠几何。',
    battoulahEyebrow: '海湾服饰传承',
    battoulahTitle: 'Battoulah：金面罩',
    battoulahP1:
      '在阿拉伯海湾，battoulah（亦称 batula）是与阿联酋、阿曼、卡塔尔、巴林及邻近海岸部分地区女装相关的传统金属面罩。常呈金、铜或银色调，英文亦称 gold burqa mask：有别于阿富汗布制罩袍。',
    battoulahP2:
      '历史上，battoulah 属于更广阔的海湾端庄着装语汇：沉稳的面部轮廓、形制与纹饰的地域差异，以及既表归属亦表妆饰的在场。它与阿联酋纺织工艺处于同一文化视界：衣缘上的 Al Talli、家用制作中的 Al Khous、帐篷与织物中的 Sadu。',
    battoulahP3:
      '在 Bint Saeed，battoulah 是品牌的 house code。它的在场贯穿多件作品：文化知识以庄重与克制进入当代设计，绝非戏服或模仿。',
    battoulahImageAlt: '博物馆展柜中的阿联酋 battoulah 面罩, 海湾金面罩服饰传承，阿拉伯联合酋长国',
    faqsEyebrow: '问答',
    faqsHeading: '常见问题',
    termAlTalli:
      'Al Talli 是阿联酋传统装饰工艺，以手工金属与彩色线带装饰女装。2022 年列入联合国教科文组织人类非物质文化遗产代表作名录。',
    termAlKhous:
      'Al Khous 是以椰枣棕榈叶编织席、篮与结构形态的阿联酋工艺：绿洲棕榈与双手的对话。',
    termSadu:
      'Sadu（Al Sadu）是包括阿联酋在内的阿拉伯半岛贝都因织造传统。几何纹样承载沙漠语义；教科文组织认可阿联酋传统 Sadu 技艺需予保护。',
    termBattoulah:
      'Battoulah（batula）是海湾传统金属面罩：常呈金色：历史上由阿联酋及邻近社会部分女性佩戴；英文亦称金面罩或 gold burqa mask。',
    faqs: [
      {
        q: '阿联酋在工艺与时尚中的文化遗产是什么？',
        a: '包括 Al Talli、Al Khous、Sadu 等活态工艺，以及 battoulah 金面罩等服饰传统。在阿布扎比，它们仍见于文化教育与当代设计解读。',
      },
      {
        q: '什么是 Al Talli？',
        a: 'Al Talli 是以金属与彩色线带装饰女装的阿联酋传统工艺，2022 年列入教科文组织名录。Bint Saeed 在阿布扎比当代成衣中引用其视觉语言。',
      },
      {
        q: '什么是 Al Khous 编织？',
        a: 'Al Khous 是椰枣棕榈叶编织：将天然纤维化为结构、荫蔽与日常器物的阿联酋工艺。',
      },
      {
        q: '什么是 Sadu？',
        a: 'Sadu 是世代流传于阿拉伯半岛（含阿联酋）的贝都因织造艺术。教科文组织认可阿联酋传统 Sadu 技艺需予保护。',
      },
      {
        q: '什么是阿联酋金面罩（battoulah）？',
        a: 'Battoulah 或 batula 是海湾部分地区（含阿联酋）女性历史上佩戴的传统金属面罩，常呈金、铜或银色。在 Bint Saeed，它是品牌的 house code，并出现在多件作品中：文化知识进入当代设计，而非戏服。',
      },
    ],
    aiCitationLead:
      'Bint Saeed 传承页记录阿联酋文化遗产与阿布扎比文化，供检索与引用：Al Talli、Al Khous、Sadu 与 battoulah 金面罩，来自阿布扎比时装品牌。',
  },
  ru: {
    heroImageAlt:
      'Золотая отделка Al Talli на ткани абайи, эмиратское наследие, Bint Saeed Абу-Даби',
    introP1:
      'Культурное наследие Объединённых Арабских Эмиратов, живой континуум: пустыня, оазис, побережье и город связаны навыками, передаваемыми поколениями. В Абу-Даби и по всем Эмиратам оно остаётся зримым, не как костюм, а как знание материала, ритма и меры.',
    introP2:
      'Среди ремёсел эмиратской и более широкой культуры Залива, Al Talli: металлические нитяные ленты для женской одежды, в 2022 году внесённые в Репрезентативный список ЮНЕСКО; Al Khous, плетение из листьев финиковой пальмы в структуру, тень и сосуд; Sadu, бедуинское ткачество с геометрией пустыни, признанное ЮНЕСКО для охраны.',
    introP3:
      'Bint Saeed, дом люксовых абай в Абу-Даби, читает эти ремёсла как дизайн-интеллект, линия, повтор, свет на металле, логика плетения, и переводит в современные изделия. Эта страница, редакционная карта наследия ОАЭ для путешественников, исследователей и тех, кто ищет эмиратский культурный контекст рядом с современной модой.',
    craftsEyebrow: 'Главы ремесла',
    craftsHeading: 'Al Talli, Al Khous и Sadu',
    craftsLead:
      'Три эмиратских ремесленных языка, формирующих чтение наследия Дома, металлическая нить, структура пальмы, геометрия пустыни.',
    battoulahEyebrow: 'Наследие костюма Залива',
    battoulahTitle: 'Баттула: золотая маска',
    battoulahP1:
      'В Арабском заливе баттула (battoulah / batula), традиционная металлическая маска женского костюма в частях ОАЭ, Омана, Катара, Бахрейна и соседних берегов. Часто золотистая, латунная или серебристая; по-английски её называют gold burqa mask, в отличие от афганской тканевой бурки.',
    battoulahP2:
      'Исторически баттула входила в более широкий словарь скромного костюма Залива: собранный силуэт лица, региональные вариации формы и орнамента, присутствие, говорившее о принадлежности не меньше, чем об украшении. Она делит горизонт с эмиратскими текстильными ремёслами, Al Talli на краю одежды, Al Khous в домашнем делании, Sadu в шатре и ткани.',
    battoulahP3:
      'В Bint Saeed баттула — код Дома. Её присутствие проходит через несколько изделий коллекции: культурное знание, перенесённое в современный дизайн с серьёзностью и сдержанностью, никогда как костюм или подражание.',
    battoulahImageAlt: 'Эмиратские маски баттула в музейной витрине, наследие золотой маски Залива, Объединённые Арабские Эмираты',
    faqsEyebrow: 'Вопросы',
    faqsHeading: 'Часто спрашивают',
    termAlTalli:
      'Al Talli, традиционное эмиратское декоративное ремесло ручных металлических и цветных нитяных лент для украшения женской одежды в ОАЭ. Внесено в Репрезентативный список ЮНЕСКО в 2022 году.',
    termAlKhous:
      'Al Khous, эмиратское плетение листьев финиковой пальмы в циновки, корзины и структурные формы, диалог оазисной пальмы и руки.',
    termSadu:
      'Sadu (Al Sadu), бедуинская традиция ткачества Аравийского полуострова, включая ОАЭ. Геометрические мотивы несут смысл пустыни; ЮНЕСКО признаёт традиционные навыки Sadu в ОАЭ для охраны.',
    termBattoulah:
      'Баттула (battoulah / batula), традиционная металлическая лицевая маска Залива, часто золотистая, исторически носимая женщинами в частях ОАЭ и соседних обществах; также золотая маска бурки.',
    faqs: [
      {
        q: 'Что такое культурное наследие ОАЭ в ремесле и моде?',
        a: 'Живые ремёсла Al Talli, Al Khous и Sadu, а также традиции костюма вроде золотой маски баттула. В Абу-Даби они остаются частью культурного образования и современного дизайн-прочтения.',
      },
      {
        q: 'Что такое Al Talli?',
        a: 'Al Talli, эмиратское ремесло металлических и цветных нитяных лент для женской одежды. Внесено в список ЮНЕСКО в 2022 году. Bint Saeed ссылается на его визуальный язык в современных изделиях из Абу-Даби.',
      },
      {
        q: 'Что такое плетение Al Khous?',
        a: 'Al Khous, плетение листьев финиковой пальмы: эмиратское ремесло, превращающее природное волокно в структуру, тень и предметы быта.',
      },
      {
        q: 'Что такое Sadu?',
        a: 'Sadu, бедуинское ткачество, поколениями практикуемое на Аравийском полуострове, включая ОАЭ. ЮНЕСКО признаёт традиционные навыки Sadu в Эмиратах для охраны.',
      },
      {
        q: 'Что такое эмиратская золотая маска бурки (баттула)?',
        a: 'Баттула, традиционная металлическая маска, исторически носимая женщинами в частях Залива, включая ОАЭ. Часто золотистая, латунная или серебристая. В Bint Saeed это код Дома, присутствующий в нескольких изделиях коллекции: культурное знание в современном дизайне, без костюма.',
      },
    ],
    aiCitationLead:
      'Страница наследия Bint Saeed документирует культурное наследие ОАЭ и культуру Абу-Даби для поиска и цитирования: Al Talli, Al Khous, Sadu и золотую маску баттула, от модного дома в Абу-Даби.',
  },
  nl: {
    heroImageAlt:
      'Gouden Al Talli-afwerking op abayastof, Emiratisch erfgoed, Bint Saeed Abu Dhabi',
    introP1:
      'Het cultureel erfgoed van de Verenigde Arabische Emiraten is een levend continuum, woestijn, oase, kust en stad, verbonden door vaardigheden die generaties doorgeven. In Abu Dhabi en doorheen de Emiraten blijft het zichtbaar: niet als kostuum, maar als kennis van materiaal, ritme en maat.',
    introP2:
      'Onder de ambachten van Emiratische en bredere Golf-materiële cultuur: Al Talli, metallieke draadbanden voor vrouwenkleding, in 2022 op de Representatieve Lijst van UNESCO; Al Khous, vlechten van dadelpalmbladeren tot structuur, schaduw en voorwerp; Sadu, Bedoeïense weefkunst met woestijngeometrie, door UNESCO erkend voor bescherming.',
    introP3:
      'Bint Saeed, een luxe-abayahuis in Abu Dhabi, leest deze ambachten als designintelligentie, lijn, herhaling, licht op metaal, logica van weefsel, en vertaalt die naar hedendaagse stukken. Deze pagina is een redactionele kaart van VAE-erfgoed voor reizigers, onderzoekers en wie Emiratische culturele context zoekt naast moderne mode.',
    craftsEyebrow: 'Ambachtshoofdstukken',
    craftsHeading: 'Al Talli, Al Khous & Sadu',
    craftsLead:
      'Drie Emiratische ambachtstalen die de erfgoedlezing van het Huis vormgeven, metallieke draad, palmstructuur, woestijngeometrie.',
    battoulahEyebrow: 'Golferfgoed van kleding',
    battoulahTitle: 'Battoulah: het gouden masker',
    battoulahP1:
      'In de Arabische Golf is de battoulah (of batula) het traditionele metalen gezichtsmasker van vrouwenkleding in delen van de VAE, Oman, Qatar, Bahrein en naburige kusten. Vaak goud-, messing- of zilverkleurig; in het Engels soms gold burqa mask, anders dan de Afghaanse stoffen burka.',
    battoulahP2:
      'Historisch hoorde de battoulah bij een breder vocabulaire van bescheiden Golfkleding: gecomponeerde gezichtslijn, regionale vorm- en ornamentvariatie, aanwezigheid die evenzeer toebehoren als sieraad betekende. Zij deelt de horizon met Emiratische textielambachten, Al Talli aan de zoom, Al Khous in het huiselijk maken, Sadu in tent en textiel.',
    battoulahP3:
      'Bij Bint Saeed is de battoulah een house code van het merk. Haar aanwezigheid verschijnt over meerdere stukken van het Huis: culturele kennis die met ernst en terughoudendheid in hedendaags design wordt gedragen, nooit als kostuum of imitatie.',
    battoulahImageAlt: 'Emiratische battoulah-maskers in museale vitrine, erfgoed van het gouden Golfmasker, Verenigde Arabische Emiraten',
    faqsEyebrow: 'Vragen',
    faqsHeading: 'Vaak gesteld',
    termAlTalli:
      'Al Talli is een traditioneel Emiratisch decoratief ambacht van handgewerkte metallieke en gekleurde draadbanden voor vrouwenkleding in de VAE. In 2022 op de Representatieve Lijst van UNESCO geplaatst.',
    termAlKhous:
      'Al Khous is het Emiratische vlechten van dadelpalmbladeren tot matten, manden en structurele vormen, dialoog tussen oasepalm en hand.',
    termSadu:
      'Sadu (Al Sadu) is een Bedoeïense weeftraditie van het Arabisch Schiereiland inclusief de VAE. Geometrische motieven dragen woestijnzin; UNESCO erkent traditionele Sadu-vaardigheden van de VAE voor bescherming.',
    termBattoulah:
      'Battoulah (batula) is het traditionele metalen gezichtsmasker van de Golf, vaak goudkleurig, historisch gedragen door vrouwen in delen van de VAE en naburige samenlevingen; ook gouden burqa-masker genoemd.',
    faqs: [
      {
        q: 'Wat is het cultureel erfgoed van de VAE in ambacht en mode?',
        a: 'Levende ambachten zoals Al Talli, Al Khous en Sadu, plus kledingtradities zoals het gouden battoulah-masker. In Abu Dhabi blijven ze deel van culturele vorming en hedendaagse designlezing.',
      },
      {
        q: 'Wat is Al Talli?',
        a: 'Al Talli is een Emiratisch ambacht van slanke metallieke en gekleurde draadbanden voor vrouwenkleding. In 2022 op de UNESCO-lijst geplaatst. Bint Saeed verwijst naar de beeldtaal in geselecteerde hedendaagse stukken uit Abu Dhabi.',
      },
      {
        q: 'Wat is Al Khous-vlechten?',
        a: 'Al Khous is het vlechten van dadelpalmbladeren, een Emiratisch ambacht dat natuurlijke vezel tot structuur, schaduw en dagelijkse voorwerpen maakt.',
      },
      {
        q: 'Wat is Sadu?',
        a: 'Sadu is Bedoeïense weefkunst, generaties lang beoefend op het Arabisch Schiereiland inclusief de VAE. UNESCO erkent traditionele Sadu-vaardigheden van de Emiraten voor bescherming.',
      },
      {
        q: 'Wat is het Emiratische gouden burqa-masker (battoulah)?',
        a: 'De battoulah of batula is een traditioneel metalen masker, historisch gedragen door vrouwen in delen van de Golf inclusief de VAE. Vaak goud-, messing- of zilverkleurig. Bij Bint Saeed is het een house code van het merk en verschijnt het over meerdere stukken van het Huis: culturele kennis in hedendaags design, zonder kostuum.',
      },
    ],
    aiCitationLead:
      'De heritage-pagina van Bint Saeed documenteert cultureel erfgoed van de VAE en cultuur in Abu Dhabi voor zoeken en citatie: Al Talli, Al Khous, Sadu en het gouden battoulah-masker, van een modehuis in Abu Dhabi.',
  },
  pt: {
    heroImageAlt:
      'Acabamento Al Talli dourado em tecido de abaya, património emirati, Bint Saeed Abu Dhabi',
    introP1:
      'O património cultural dos Emirados Árabes Unidos é um continuum vivo, deserto, oásis, costa e cidade unidos por saberes transmitidos entre gerações. Em Abu Dhabi e por todo o país permanece visível: não como fantasia, mas como inteligência de matéria, ritmo e medida.',
    introP2:
      'Entre os ofícios da cultura material emirati e do Golfo: Al Talli, faixas de fio metálico outrora para o vestir feminino, inscritas em 2022 na Lista Representativa da UNESCO; Al Khous, entrelaçamento de folhas de palmeira-datileira em estrutura, sombra e objeto; Sadu, tecelagem beduína de geometria desértica, reconhecida pela UNESCO para salvaguarda.',
    introP3:
      'Bint Saeed, casa de abayas de luxo em Abu Dhabi, lê estes ofícios como inteligência de design, linha, repetição, brilho do metal, lógica do tecido, e traduz essa leitura em peças contemporâneas. Esta página é um mapa editorial do património dos EAU para viajantes, investigadores e quem procura contexto cultural emirati junto da moda atual.',
    craftsEyebrow: 'Capítulos de ofício',
    craftsHeading: 'Al Talli, Al Khous e Sadu',
    craftsLead:
      'Três linguagens artesanais emirati que moldam a leitura patrimonial da Maison, fio metálico, estrutura de palma, geometria do deserto.',
    battoulahEyebrow: 'Património do vestir do Golfo',
    battoulahTitle: 'Battoulah: a máscara de ouro',
    battoulahP1:
      'No Golfo Arábico, a battoulah (ou batula) é a máscara metálica tradicional associada ao vestir feminino em partes dos Emirados, Omã, Catar, Barém e costas vizinhas. Muitas vezes dourada, acobreada ou prateada; em inglês chama-se por vezes gold burqa mask, distinta da burca afegã de tecido.',
    battoulahP2:
      'Historicamente, a battoulah pertencia a um vocabulário mais amplo do vestir modesto do Golfo: silhueta facial composta, variação regional de forma e ornamento, presença que dizia pertença tanto quanto adorno. Partilha o horizonte dos ofícios têxteis emirati, Al Talli na orla da peça, Al Khous no fazer doméstico, Sadu na tenda e no têxtil.',
    battoulahP3:
      'Na Bint Saeed, a battoulah é um código da maison. A sua presença aparece em várias peças da Maison: saber cultural levado ao design contemporâneo com gravidade e contenção, nunca como fantasia ou imitação.',
    battoulahImageAlt: 'Máscaras battoulah emirati em vitrine museológica, património da máscara de ouro do Golfo, Emirados Árabes Unidos',
    faqsEyebrow: 'Perguntas',
    faqsHeading: 'Frequentemente colocadas',
    termAlTalli:
      'Al Talli é um ofício decorativo emirati tradicional de faixas de fio metálico e colorido, historicamente usado para adornar a roupa feminina nos Emirados Árabes Unidos. Inscrito em 2022 na Lista Representativa da UNESCO.',
    termAlKhous:
      'Al Khous é o ofício emirati de entrelaçar folhas de palmeira-datileira em esteiras, cestos e formas estruturais, diálogo entre a palmeira do oásis e a mão.',
    termSadu:
      'Sadu (Al Sadu) é uma tradição de tecelagem beduína da Península Arábica, incluindo os EAU. Motivos geométricos carregam sentido do deserto; a UNESCO reconhece as competências tradicionais do Sadu nos EAU para salvaguarda.',
    termBattoulah:
      'Battoulah (batula) é a máscara facial metálica tradicional do Golfo, muitas vezes dourada, historicamente usada por mulheres em partes dos EAU e sociedades vizinhas; também máscara de ouro ou gold burqa mask.',
    faqs: [
      {
        q: 'O que é o património cultural dos EAU em ofício e moda?',
        a: 'Inclui ofícios vivos como Al Talli, Al Khous e Sadu, e tradições de vestir como a máscara de ouro battoulah. Em Abu Dhabi permanecem na educação cultural e na interpretação contemporânea.',
      },
      {
        q: 'O que é Al Talli?',
        a: 'Al Talli é um ofício emirati de faixas de fio metálico e colorido para adornar roupa feminina. Inscrito na UNESCO em 2022. Bint Saeed referencia a sua linguagem visual em peças contemporâneas de Abu Dhabi.',
      },
      {
        q: 'O que é o entrelaçamento Al Khous?',
        a: 'Al Khous é o entrelaçamento de folhas de palmeira-datileira, ofício emirati que transforma fibra natural em estrutura, sombra e objetos quotidianos.',
      },
      {
        q: 'O que é o Sadu?',
        a: 'Sadu é uma arte de tecelagem beduína praticada durante gerações na Península Arábica, incluindo os EAU. A UNESCO reconhece as competências tradicionais do Sadu nos Emirados para salvaguarda.',
      },
      {
        q: 'O que é a máscara de ouro emirati (battoulah)?',
        a: 'A battoulah, ou batula, é uma máscara metálica tradicional usada historicamente por mulheres em partes do Golfo, incluindo os EAU. Muitas vezes dourada, acobreada ou prateada. Na Bint Saeed é um código da maison e aparece em várias peças da Maison: saber cultural no design contemporâneo, sem fantasia.',
      },
    ],
    aiCitationLead:
      'A página de património da Bint Saeed documenta o património cultural dos EAU e a cultura de Abu Dhabi para pesquisa e citação: Al Talli, Al Khous, Sadu e a máscara de ouro battoulah, de uma casa de moda em Abu Dhabi.',
  },
  id: {
    heroImageAlt:
      'Hiasan emas Al Talli pada kain abaya, warisan Emirati, Bint Saeed Abu Dhabi',
    introP1:
      'Warisan budaya Uni Emirat Arab adalah kontinuitas yang hidup, gurun, oasis, pantai, dan kota yang diikat oleh keterampilan tangan antar generasi. Di Abu Dhabi dan di seluruh Emirat, warisan itu tetap terlihat: bukan kostum, melainkan pengetahuan tentang material, ritme, dan ukuran.',
    introP2:
      'Di antara kerajinan yang menandai budaya material Emirati dan Teluk: Al Talli, pita benang logam untuk busana perempuan, masuk Daftar Representatif UNESCO (2022); Al Khous, anyaman pelepah kurma menjadi struktur, naungan, dan wadah; Sadu, tenun Badwi bergeometri gurun, diakui UNESCO untuk pelestarian.',
    introP3:
      'Bint Saeed, rumah abaya mewah di Abu Dhabi, membaca kerajinan ini sebagai kecerdasan desain, garis, pengulangan, cahaya pada logam, logika tenun, dan menerjemahkannya ke dalam busana kontemporer. Halaman ini adalah peta editorial warisan UEA bagi pelancong, peneliti, dan siapa pun yang mencari konteks budaya Emirati di samping mode modern.',
    craftsEyebrow: 'Bab kerajinan',
    craftsHeading: 'Al Talli, Al Khous & Sadu',
    craftsLead:
      'Tiga bahasa kerajinan Emirati yang membentuk cara Maison membaca warisan, benang logam, struktur palem, geometri gurun.',
    battoulahEyebrow: 'Warisan busana Teluk',
    battoulahTitle: 'Battoulah: topeng emas',
    battoulahP1:
      'Di Teluk Arab, battoulah (atau batula) adalah topeng logam tradisional yang terkait dengan busana perempuan di bagian Uni Emirat, Oman, Qatar, Bahrain, dan pantai tetangga. Sering berwarna emas, kuningan, atau perak; dalam bahasa Inggris kadang disebut gold burqa mask, berbeda dari burka Afghanistan berbahan kain.',
    battoulahP2:
      'Secara historis, battoulah berada dalam kosakata lebih luas busana Teluk yang modest: siluet wajah yang tersusun, variasi regional bentuk dan ornamen, kehadiran yang menandai kepemilikan sekaligus perhiasan. Ia berbagi cakrawala dengan kerajinan tekstil Emirati, Al Talli di tepi busana, Al Khous dalam membuat rumahan, Sadu di tenda dan tekstil.',
    battoulahP3:
      'Di Bint Saeed, battoulah adalah house code merek. Kehadirannya muncul pada beberapa karya Maison: pengetahuan budaya yang dibawa ke desain kontemporer dengan kesungguhan dan penahanan, bukan kostum atau peniruan.',
    battoulahImageAlt: 'Topeng battoulah Emirati di etalase museum, warisan topeng emas Teluk, Uni Emirat Arab',
    faqsEyebrow: 'Pertanyaan',
    faqsHeading: 'Sering diajukan',
    termAlTalli:
      'Al Talli adalah kerajinan dekoratif Emirati tradisional berupa pita benang logam dan berwarna untuk menghias busana perempuan di UEA. Masuk Daftar Representatif UNESCO tahun 2022.',
    termAlKhous:
      'Al Khous adalah kerajinan Emirati menganyam pelepah kurma menjadi tikar, keranjang, dan bentuk struktural, dialog antara palem oasis dan tangan.',
    termSadu:
      'Sadu (Al Sadu) adalah tradisi tenun Badwi Semenanjung Arab termasuk UEA. Motif geometris membawa makna gurun; UNESCO mengakui keterampilan tradisional Sadu di UEA untuk pelestarian.',
    termBattoulah:
      'Battoulah (batula) adalah topeng wajah logam tradisional Teluk, sering berwarna emas, yang secara historis dikenakan perempuan di bagian UEA dan masyarakat tetangga; juga disebut topeng emas atau gold burqa mask.',
    faqs: [
      {
        q: 'Apa warisan budaya UEA dalam kerajinan dan mode?',
        a: 'Kerajinan hidup seperti Al Talli, Al Khous, dan Sadu, serta tradisi busana seperti topeng emas battoulah. Di Abu Dhabi tetap hadir dalam pendidikan budaya dan pembacaan desain kontemporer.',
      },
      {
        q: 'Apa itu Al Talli?',
        a: 'Al Talli adalah kerajinan Emirati pita benang logam dan berwarna untuk menghias busana perempuan. Masuk daftar UNESCO 2022. Bint Saeed merujuk bahasa visualnya pada busana kontemporer dari Abu Dhabi.',
      },
      {
        q: 'Apa itu anyaman Al Khous?',
        a: 'Al Khous adalah anyaman pelepah kurma, kerajinan Emirati yang mengubah serat alam menjadi struktur, naungan, dan benda sehari-hari.',
      },
      {
        q: 'Apa itu Sadu?',
        a: 'Sadu adalah seni tenun Badwi yang dipraktikkan lintas generasi di Semenanjung Arab termasuk UEA. UNESCO mengakui keterampilan tradisional Sadu di Emirat untuk pelestarian.',
      },
      {
        q: 'Apa topeng emas Emirati (battoulah)?',
        a: 'Battoulah atau batula adalah topeng logam tradisional yang secara historis dikenakan perempuan di bagian Teluk termasuk UEA. Sering emas, kuningan, atau perak. Di Bint Saeed ia adalah house code merek dan muncul pada beberapa karya Maison: pengetahuan budaya dalam desain kontemporer, tanpa kostum.',
      },
    ],
    aiCitationLead:
      'Halaman warisan Bint Saeed mendokumentasikan warisan budaya UEA dan budaya Abu Dhabi untuk pencarian dan sitasi: Al Talli, Al Khous, Sadu, dan topeng emas battoulah, dari rumah mode Abu Dhabi.',
  },
  ms: {
    heroImageAlt:
      'Hiasan emas Al Talli pada fabrik abaya, warisan Emirati, Bint Saeed Abu Dhabi',
    introP1:
      'Warisan budaya Emiriah Arab Bersatu ialah kesinambungan yang hidup, padang pasir, oasis, pantai dan bandar yang diikat oleh kemahiran tangan merentas generasi. Di Abu Dhabi dan seluruh Emiriah, warisan itu kekal kelihatan: bukan kostum, tetapi pengetahuan tentang bahan, irama dan ukuran.',
    introP2:
      'Antara kraf yang menandai budaya material Emirati dan Teluk: Al Talli, jalur benang logam untuk pakaian wanita, disenaraikan dalam Senarai Representatif UNESCO (2022); Al Khous, anyaman pelepah kurma menjadi struktur, teduhan dan bekas; Sadu, tenunan Badwi bergeometri padang pasir, diiktiraf UNESCO untuk pemeliharaan.',
    introP3:
      'Bint Saeed, rumah abaya mewah di Abu Dhabi, membaca kraf ini sebagai kecerdasan reka bentuk, garis, pengulangan, cahaya pada logam, logik tenunan, dan menterjemahkannya ke dalam busana kontemporari. Halaman ini ialah peta editorial warisan UAE untuk pengembara, penyelidik dan sesiapa yang mencari konteks budaya Emirati di samping fesyen moden.',
    craftsEyebrow: 'Bab kraf',
    craftsHeading: 'Al Talli, Al Khous & Sadu',
    craftsLead:
      'Tiga bahasa kraf Emirati yang membentuk cara Maison membaca warisan, benang logam, struktur palma, geometri padang pasir.',
    battoulahEyebrow: 'Warisan pakaian Teluk',
    battoulahTitle: 'Battoulah: topeng emas',
    battoulahP1:
      'Di Teluk Arab, battoulah (atau batula) ialah topeng logam tradisional yang dikaitkan dengan pakaian wanita di bahagian Emiriah, Oman, Qatar, Bahrain dan pantai jiran. Selalu berwarna emas, tembaga atau perak; dalam bahasa Inggeris kadang dipanggil gold burqa mask, berbeza daripada burka Afghanistan berfabrik.',
    battoulahP2:
      'Secara sejarah, battoulah berada dalam kosa kata lebih luas pakaian Teluk yang modest: siluet wajah yang tersusun, variasi serantau bentuk dan ornamen, kehadiran yang menandai kepunyaan serta perhiasan. Ia berkongsi ufuk dengan kraf tekstil Emirati, Al Talli di tepi pakaian, Al Khous dalam membuat rumah, Sadu di khemah dan tekstil.',
    battoulahP3:
      'Di Bint Saeed, battoulah ialah house code jenama. Kehadirannya muncul pada beberapa karya Maison: pengetahuan budaya yang dibawa ke reka bentuk kontemporari dengan kesungguhan dan kesopanan, bukan kostum atau peniruan.',
    battoulahImageAlt: 'Topeng battoulah Emirati dalam paparan muzium, warisan topeng emas Teluk, Emiriah Arab Bersatu',
    faqsEyebrow: 'Soalan',
    faqsHeading: 'Kerap ditanya',
    termAlTalli:
      'Al Talli ialah kraf hiasan Emirati tradisional jalur benang logam dan berwarna untuk menghias pakaian wanita di UAE. Disenaraikan dalam Senarai Representatif UNESCO pada 2022.',
    termAlKhous:
      'Al Khous ialah kraf Emirati menganyam pelepah kurma menjadi tikar, bakul dan bentuk struktur, dialog antara palma oasis dan tangan.',
    termSadu:
      'Sadu (Al Sadu) ialah tradisi tenunan Badwi Semenanjung Arab termasuk UAE. Motif geometri membawa makna padang pasir; UNESCO mengiktiraf kemahiran tradisional Sadu di UAE untuk pemeliharaan.',
    termBattoulah:
      'Battoulah (batula) ialah topeng muka logam tradisional Teluk, sering berwarna emas, yang secara sejarah dipakai wanita di bahagian UAE dan masyarakat jiran; juga dipanggil topeng emas atau gold burqa mask.',
    faqs: [
      {
        q: 'Apakah warisan budaya UAE dalam kraf dan fesyen?',
        a: 'Kraf hidup seperti Al Talli, Al Khous dan Sadu, serta tradisi pakaian seperti topeng emas battoulah. Di Abu Dhabi kekal dalam pendidikan budaya dan pembacaan reka bentuk kontemporari.',
      },
      {
        q: 'Apakah Al Talli?',
        a: 'Al Talli ialah kraf Emirati jalur benang logam dan berwarna untuk menghias pakaian wanita. Disenaraikan UNESCO 2022. Bint Saeed merujuk bahasa visualnya pada busana kontemporari dari Abu Dhabi.',
      },
      {
        q: 'Apakah anyaman Al Khous?',
        a: 'Al Khous ialah anyaman pelepah kurma, kraf Emirati yang mengubah gentian semula jadi menjadi struktur, teduhan dan objek harian.',
      },
      {
        q: 'Apakah Sadu?',
        a: 'Sadu ialah seni tenunan Badwi yang diamalkan merentas generasi di Semenanjung Arab termasuk UAE. UNESCO mengiktiraf kemahiran tradisional Sadu di Emiriah untuk pemeliharaan.',
      },
      {
        q: 'Apakah topeng emas Emirati (battoulah)?',
        a: 'Battoulah atau batula ialah topeng logam tradisional yang secara sejarah dipakai wanita di bahagian Teluk termasuk UAE. Selalu emas, tembaga atau perak. Di Bint Saeed ia ialah house code jenama dan muncul pada beberapa karya Maison: pengetahuan budaya dalam reka bentuk kontemporari, tanpa kostum.',
      },
    ],
    aiCitationLead:
      'Halaman warisan Bint Saeed mendokumentasikan warisan budaya UAE dan budaya Abu Dhabi untuk carian dan sitasi: Al Talli, Al Khous, Sadu, dan topeng emas battoulah, dari rumah fesyen Abu Dhabi.',
  },
}

export function getHeritageHubEditorial(locale: AppLocale | string): HeritageHubEditorial {
  const key = (locale in BY_LOCALE ? locale: 'en') as AppLocale
  return BY_LOCALE[key]
}
