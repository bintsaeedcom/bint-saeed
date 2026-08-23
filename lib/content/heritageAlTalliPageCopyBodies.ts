import type { AppLocale } from '@/lib/i18n/routing'

export type AlTalliPageCopyBody = {
  heroTag: string
  heroTitle: string
  heroSubtitle: string
  storyEyebrow: string
  storyTitle: string
  storyP1: string
  storyP2: string
  storyP3: string
  craftEyebrow: string
  craftTitle: string
  techniques: { title: string; description: string }[]
  unescoEyebrow: string
  unescoTitle: string
  unescoBody: string
  unescoBadge1: string
  unescoBadge2: string
  abuDhabiEyebrow: string
  abuDhabiTitle: string
  abuDhabiP1: string
  abuDhabiP2: string
  brandEyebrow: string
  brandTitle: string
  brandP1: string
  brandP2: string
  brandP3: string
  brandP4: string
  journalNote: string
  shopCta: string
  imageAltHero: string
  imageAltStory: string
  imageAltLoom: string
  imageAltStrands: string
  imageAltBobbins: string
  imageAltAbuDhabi: string
  imageTitleHero: string
  imageTitleStory: string
  imageTitleLoom: string
  imageTitleStrands: string
  imageTitleBobbins: string
  imageTitleAbuDhabi: string
}

export const AL_TALLI_PAGE_COPY_BODIES: Record<AppLocale, AlTalliPageCopyBody> = {
  en: {
    heroTag: 'Emirati craft',
    heroTitle: 'Al Talli',
    heroSubtitle: 'The Emirati Craft Woven Through Generations',
    storyEyebrow: 'The craft',
    storyTitle: 'Woven through generations',
    storyP1:
      "Al Talli is a traditional Emirati decorative craft distinguished by intricate bands of metallic and coloured thread, created by hand and historically used to adorn women's clothing in the United Arab Emirates. Passed between generations of women, the craft forms part of the UAE's living cultural heritage and remains one of the most recognisable expressions of traditional Emirati craftsmanship.",
    storyP2:
      'Traditionally, Al Talli is created by intertwining cotton or silk threads with metallic threads in gold or silver tones. The strands are worked together to form decorative bands that can be applied to the neckline, sleeves and other parts of traditional garments. Depending on the pattern, the result can range from slender linear details to elaborate compositions in which the metallic thread catches and reflects the light.',
    storyP3:
      "The importance of Al Talli extends beyond its appearance. Its making preserves knowledge carried through the hands of women, with techniques, patterns and ways of working shared across generations. In 2022, the traditional skills of Al Talli embroidery in the UAE were inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity.",
    craftEyebrow: 'The making',
    craftTitle: 'Thread, light, and rhythm',
    techniques: [
      {
        title: 'The strands',
        description: 'Cotton or silk worked with metallic gold or silver thread, strand by strand.',
      },
      {
        title: 'The bands',
        description:
          'Decorative bands for neckline, sleeves, and garment edges — from slender lines to denser compositions.',
      },
      {
        title: 'Light and presence',
        description:
          'Delicate individually; together, the metallic lines gain presence through repetition and light.',
      },
    ],
    unescoEyebrow: 'UNESCO',
    unescoTitle: 'Living cultural heritage',
    unescoBody:
      "In 2022, the traditional skills of Al Talli embroidery in the United Arab Emirates were inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity — recognising a craft carried by women, generation to generation.",
    unescoBadge1: 'Inscribed 2022',
    unescoBadge2: 'United Arab Emirates',
    abuDhabiEyebrow: 'Abu Dhabi',
    abuDhabiTitle: 'Al Talli in Abu Dhabi today',
    abuDhabiP1:
      'In Abu Dhabi, Al Talli can still be encountered as a living practice. Cultural institutions including the House of Artisans at Qasr Al Hosn help document, preserve and share traditional Emirati crafts, allowing new generations and visitors from around the world to understand not only the finished pieces, but also the skill and time behind their creation.',
    abuDhabiP2:
      'For Bint Saeed, this relationship between heritage and contemporary life is particularly meaningful. Abu Dhabi is a city where the past remains present within a rapidly evolving international capital, and Al Talli offers a beautiful example of how cultural knowledge can continue without remaining fixed in another time.',
    brandEyebrow: 'Bint Saeed',
    brandTitle: 'From Al Talli to contemporary fashion',
    brandP1:
      'When Bint Saeed began exploring Al Talli, the challenge was not simply how to place a traditional decoration onto a contemporary garment. A craft with such cultural richness deserves greater consideration than that.',
    brandP2:
      'Instead, we looked closely at its visual language: slender metallic lines sitting beside one another, the rhythm created through repetition, the relationship between textile and light, and the way something remarkably delicate gains presence when many individual strands come together.',
    brandP3:
      'Those observations became part of the developing design language of Bint Saeed. Across selected Bint Saeed garments, linear metallic details reference the character of Al Talli in different ways. Sometimes the relationship is immediately recognisable; elsewhere, only a trace remains. The aim is not to recreate traditional Emirati clothing, but to allow elements encountered within the cultural landscape of Abu Dhabi to find thoughtful contemporary expressions.',
    brandP4:
      'In this way, Al Talli becomes more than a reference from the past. It becomes part of an ongoing conversation between women, clothing, craftsmanship and place.',
    journalNote:
      'For those who would like to discover the story behind the craft, The Bint Saeed Journal visits the House of Artisans in Abu Dhabi in The Golden Thread Between Women, exploring Al Talli through the women who make it and the question of how heritage can travel into contemporary fashion.',
    shopCta: 'Shop Al Talli pieces',
    imageAltHero:
      'Navy Bint Saeed abaya detail with gold Al Talli metallic embroidery — Emirati heritage craft, Abu Dhabi',
    imageAltStory:
      'Close-up of handwoven Al Talli embroidery in powder-blue cotton and gold metallic thread — Middle Eastern craft, UAE',
    imageAltLoom:
      'Traditional Emirati Al Talli kajujah with gold metallic threads and wooden bobbins — living craft in Abu Dhabi',
    imageAltStrands:
      'Gold Al Talli metallic embroidery strands on display — UNESCO-recognised UAE cultural heritage',
    imageAltBobbins:
      'Wooden bobbins wound with silver metallic thread for traditional Al Talli embroidery — Emirati heritage craft',
    imageAltAbuDhabi:
      'Emirati woman practising Al Talli embroidery at the House of Artisans, Qasr Al Hosn, Abu Dhabi',
    imageTitleHero:
      'Al Talli embroidery abaya detail — Emirati heritage craft | Bint Saeed Abu Dhabi',
    imageTitleStory:
      'Al Talli metallic thread embroidery — Middle Eastern craft UAE',
    imageTitleLoom:
      'Al Talli kajujah loom — traditional Emirati heritage craft Abu Dhabi',
    imageTitleStrands:
      'Gold Al Talli metallic strands — UNESCO UAE cultural heritage',
    imageTitleBobbins:
      'Al Talli metallic bobbins — traditional Emirati embroidery',
    imageTitleAbuDhabi:
      'Al Talli artisan at House of Artisans Qasr Al Hosn — Abu Dhabi culture',
  },

  ar: {
    heroTag: 'حرفة إماراتية',
    heroTitle: 'التلي',
    heroSubtitle: 'حرفة إماراتية نسجتها الأجيال',
    storyEyebrow: 'الحرفة',
    storyTitle: 'منسوجة عبر الأجيال',
    storyP1:
      'التلي حرفة زخرفية إماراتية تقليدية تتميز بأشرطة دقيقة من خيوط معدنية وملونة، تُصنع يدوياً واستُخدمت تاريخياً لتزيين ملابس النساء في الإمارات العربية المتحدة. توارثتها أجيال من النساء، فغدت جزءاً من التراث الثقافي الحي للدولة، وتظل من أوضح تعبيرات الحرفة الإماراتية الأصيلة.',
    storyP2:
      'يُصنع التلي تقليدياً بتداخل خيوط القطن أو الحرير مع خيوط معدنية بدرجات الذهب أو الفضة. تُعمل الخيوط معاً لتكوّن أشرطة زخرفية تُوضع على الياقة والأكمام وسائر مواضع الثياب التقليدية. بحسب النمط، قد تكون النتيجة تفاصيل خطية رفيعة أو تراكيب أوسع يلتقط فيها الخيط المعدني الضوء ويعكسه.',
    storyP3:
      'أهمية التلي تتجاوز مظهره. فصناعته تحفظ معرفةً حملتها أيدي النساء، بتقنيات وأنماط وطرائق عمل انتقلت عبر الأجيال. وفي عام 2022، أُدرجت المهارات التقليدية لتطريز التلي في دولة الإمارات على القائمة التمثيلية للتراث الثقافي غير المادي للبشرية لدى اليونسكو.',
    craftEyebrow: 'الصنعة',
    craftTitle: 'خيط، ضوء، وإيقاع',
    techniques: [
      {
        title: 'الخيوط',
        description: 'قطن أو حرير يُعمل مع خيط معدني ذهبي أو فضي، خيطاً بعد خيط.',
      },
      {
        title: 'الأشرطة',
        description:
          'أشرطة زخرفية للياقة والأكمام وحواف الثوب — من خطوط رفيعة إلى تراكيب أكثر كثافة.',
      },
      {
        title: 'الضوء والحضور',
        description:
          'رقيقة كلٌّ على حدة؛ ومعاً تكتسب الخطوط المعدنية حضوراً بالتكرار والضوء.',
      },
    ],
    unescoEyebrow: 'اليونسكو',
    unescoTitle: 'تراث ثقافي حي',
    unescoBody:
      'في عام 2022، أُدرجت المهارات التقليدية لتطريز التلي في الإمارات العربية المتحدة على القائمة التمثيلية للتراث الثقافي غير المادي للبشرية لدى اليونسكو — اعترافاً بحرفة تحملها النساء جيلاً بعد جيل.',
    unescoBadge1: 'مُدرج 2022',
    unescoBadge2: 'الإمارات العربية المتحدة',
    abuDhabiEyebrow: 'أبوظبي',
    abuDhabiTitle: 'التلي في أبوظبي اليوم',
    abuDhabiP1:
      'في أبوظبي، ما يزال التلي يُمارس كحرفة حية. مؤسسات ثقافية منها بيت الحرفيين في قصر الحصن توثّق الحرف الإماراتية التقليدية وتحفظها وتنقلها، ليتعرّف الجيل الجديد وزوار العالم لا على القطعة المكتملة فحسب، بل على المهارة والوقت اللذين وراء صنعها.',
    abuDhabiP2:
      'بالنسبة لبنت سعيد، لهذه العلاقة بين التراث والحياة المعاصرة معنى خاص. أبوظبي مدينة يبقى فيها الماضي حاضراً داخل عاصمة دولية سريعة التحوّل، والتلي مثال جميل على كيف تستمر المعرفة الثقافية دون أن تتجمّد في زمنٍ آخر.',
    brandEyebrow: 'بنت سعيد',
    brandTitle: 'من التلي إلى الأزياء المعاصرة',
    brandP1:
      'حين بدأت بنت سعيد استكشاف التلي، لم يكن السؤال كيف نضع زخرفة تقليدية على ثوب معاصر فحسب. حرفة بهذا الثراء الثقافي تستحق تأملاً أعمق من ذلك.',
    brandP2:
      'بل نظرنا عن كثب إلى لغتها البصرية: خطوط معدنية رفيعة تتجاور، والإيقاع الذي ينشأ بالتكرار، والعلاقة بين النسيج والضوء، وكيف يكتسب ما هو في غاية الرقة حضوراً حين تجتمع خيوط كثيرة.',
    brandP3:
      'صارت تلك الملاحظات جزءاً من لغة التصميم الناشئة لدى بنت سعيد. عبر قطع مختارة، تشير تفاصيل معدنية خطية إلى طابع التلي بطرائق مختلفة. أحياناً تكون الصلة جليّة؛ وأحياناً لا يبقى سوى أثر. الهدف ليس إعادة صنع اللباس الإماراتي التقليدي، بل أن تجد عناصرٌ من المشهد الثقافي في أبوظبي تعبيرات معاصرة مدروسة.',
    brandP4:
      'بهذا يصبح التلي أكثر من إشارة إلى الماضي. يصبح جزءاً من حوارٍ مستمر بين النساء والثياب والحرفة والمكان.',
    journalNote:
      'لمن تودّ اكتشاف قصة الحرفة، يزور مجلة بنت سعيد بيت الحرفيين في أبوظبي في The Golden Thread Between Women، مستكشفاً التلي من خلال النساء اللواتي يصنعنه، وسؤال كيف ينتقل التراث إلى الأزياء المعاصرة.',
    shopCta: 'تسوّقي قطع التلي',
    imageAltHero:
      'تفاصيل عباية Bint Saeed الكحلية بتطريز التلي المعدني الذهبي — حرفة تراثية إماراتية، أبوظبي',
    imageAltStory: 'لقطة مقرّبة لتطريز التلي اليدوي بخيوط قطن أزرق فاتح وخيوط معدنية ذهبية — حرفة من الشرق الأوسط، الإمارات',
    imageAltLoom: 'كجوجة التلي الإماراتية التقليدية بخيوط معدنية ذهبية وبكرات خشبية — حرفة حيّة في أبوظبي',
    imageAltStrands: 'خيوط تطريز التلي المعدنية الذهبية معروضة — تراث ثقافي إماراتي معترف به من اليونسكو',
    imageAltBobbins: 'بكرات خشبية ملفوف عليها خيط معدني فضي يُستخدم في تطريز التلي التقليدي — حرفة تراثية إماراتية',
    imageAltAbuDhabi: 'امرأة إماراتية تمارس تطريز التلي في بيت الحرفيين، قصر الحصن، أبوظبي',
    imageTitleHero: 'تطريز التلي على العباية — حرفة تراثية إماراتية | Bint Saeed أبوظبي',
    imageTitleStory: 'تطريز التلي بخيوط معدنية — حرفة الشرق الأوسط، الإمارات',
    imageTitleLoom: 'كجوجة التلي — حرفة تراثية إماراتية تقليدية في أبوظبي',
    imageTitleStrands: 'خيوط التلي الذهبية المعدنية — تراث ثقافي إماراتي معترف به من اليونسكو',
    imageTitleBobbins: 'بكرات التلي المعدنية — تطريز إماراتي تقليدي',
    imageTitleAbuDhabi: 'حرفية التلي في بيت الحرفيين بقصر الحصن — ثقافة أبوظبي',
  },

  fr: {
    heroTag: 'Savoir-faire émirati',
    heroTitle: 'Al Talli',
    heroSubtitle: 'Le savoir-faire émirati tissé à travers les générations',
    storyEyebrow: 'Le métier',
    storyTitle: 'Tissé à travers les générations',
    storyP1:
      'Al Talli est un art décoratif émirati traditionnel, marqué par d’étroites bandes de fils métalliques et colorés, réalisées à la main et historiquement destinées à orner les vêtements féminins aux Émirats arabes unis. Transmis de génération en génération de femmes, ce savoir-faire appartient au patrimoine culturel vivant du pays et demeure l’une des expressions les plus reconnaissables de l’artisanat émirati.',
    storyP2:
      'Traditionnellement, Al Talli naît de l’entrelacs de fils de coton ou de soie avec des fils métalliques aux tons or ou argent. Les brins s’assemblent en bandes décoratives que l’on applique au décolleté, aux manches et à d’autres parties des vêtements traditionnels. Selon le motif, le résultat va du détail linéaire le plus fin à des compositions plus élaborées où le fil métallique capte et renvoie la lumière.',
    storyP3:
      'L’importance d’Al Talli dépasse l’apparence. Sa pratique conserve un savoir porté par les mains des femmes — techniques, motifs et gestes transmis d’une génération à l’autre. En 2022, les savoir-faire traditionnels de la broderie Al Talli aux Émirats arabes unis ont été inscrits sur la Liste représentative du patrimoine culturel immatériel de l’humanité de l’UNESCO.',
    craftEyebrow: 'La fabrique',
    craftTitle: 'Fil, lumière et rythme',
    techniques: [
      {
        title: 'Les brins',
        description:
          'Coton ou soie travaillés avec un fil métallique or ou argent, brin après brin.',
      },
      {
        title: 'Les bandes',
        description:
          'Bandes décoratives pour le décolleté, les manches et les bords — du trait fin à la composition plus dense.',
      },
      {
        title: 'Lumière et présence',
        description:
          'Délicats pris isolément ; ensemble, les lignes métalliques gagnent en présence par la répétition et la lumière.',
      },
    ],
    unescoEyebrow: 'UNESCO',
    unescoTitle: 'Patrimoine culturel vivant',
    unescoBody:
      'En 2022, les savoir-faire traditionnels de la broderie Al Talli aux Émirats arabes unis ont été inscrits sur la Liste représentative du patrimoine culturel immatériel de l’humanité de l’UNESCO — reconnaissance d’un métier porté par les femmes, de génération en génération.',
    unescoBadge1: 'Inscrit 2022',
    unescoBadge2: 'Émirats arabes unis',
    abuDhabiEyebrow: 'Abou Dabi',
    abuDhabiTitle: 'Al Talli à Abou Dabi aujourd’hui',
    abuDhabiP1:
      'À Abou Dabi, Al Talli se rencontre encore comme une pratique vivante. Des institutions culturelles, dont la House of Artisans à Qasr Al Hosn, documentent, préservent et partagent les métiers traditionnels émiratis, permettant aux nouvelles générations et aux visiteurs du monde entier de comprendre non seulement les pièces achevées, mais aussi le savoir et le temps qu’elles portent.',
    abuDhabiP2:
      'Pour Bint Saeed, ce lien entre héritage et vie contemporaine a une résonance particulière. Abou Dabi est une ville où le passé demeure présent au sein d’une capitale internationale en pleine mutation, et Al Talli offre un bel exemple de la façon dont un savoir culturel peut se poursuivre sans se figer dans un autre temps.',
    brandEyebrow: 'Bint Saeed',
    brandTitle: "D'Al Talli à la mode contemporaine",
    brandP1:
      'Lorsque Bint Saeed a commencé à explorer Al Talli, la question n’était pas seulement comment poser un ornement traditionnel sur un vêtement contemporain. Un métier d’une telle richesse culturelle mérite une attention plus profonde.',
    brandP2:
      'Nous avons plutôt observé de près son langage visuel : de fines lignes métalliques côte à côte, le rythme né de la répétition, le rapport entre textile et lumière, et la manière dont quelque chose de remarquablement délicat gagne en présence lorsque de nombreux brins se rejoignent.',
    brandP3:
      'Ces observations sont entrées dans le langage de design en formation de Bint Saeed. Sur certaines pièces, des détails métalliques linéaires évoquent le caractère d’Al Talli de façons diverses. Parfois le rapport est immédiatement lisible ; ailleurs, il ne reste qu’une trace. L’intention n’est pas de reconstituer le vêtement émirati traditionnel, mais de laisser des éléments rencontrés dans le paysage culturel d’Abou Dabi trouver des expressions contemporaines attentives.',
    brandP4:
      'Ainsi Al Talli devient plus qu’une référence au passé. Il s’inscrit dans une conversation continue entre les femmes, le vêtement, le savoir-faire et le lieu.',
    journalNote:
      'Pour celles qui souhaitent découvrir l’histoire du métier, The Bint Saeed Journal se rend à la House of Artisans à Abou Dabi dans The Golden Thread Between Women, explorant Al Talli à travers les femmes qui le font et la question de savoir comment l’héritage peut voyager vers la mode contemporaine.',
    shopCta: 'Découvrir les pièces Al Talli',
    imageAltHero:
      'Détail d’abaya Bint Saeed marine brodée d’Al Talli métallique doré — artisanat patrimonial émirati, Abu Dhabi',
    imageAltStory:
      'Gros plan d’Al Talli tissé à la main, coton bleu poudre et fil métallique doré — artisanat du Moyen-Orient, ÉAU',
    imageAltLoom:
      'Kajujah traditionnelle émiratie pour l’Al Talli, fils métalliques dorés et bobines de bois — artisanat vivant à Abu Dhabi',
    imageAltStrands:
      'Brins d’Al Talli métalliques dorés exposés — patrimoine culturel des ÉAU reconnu par l’UNESCO',
    imageAltBobbins:
      'Bobines de bois enroulées de fil métallique argenté pour la broderie traditionnelle Al Talli',
    imageAltAbuDhabi:
      'Femme émiratie pratiquant l’Al Talli à la House of Artisans, Qasr Al Hosn, Abu Dhabi',
    imageTitleHero:
      'Broderie Al Talli sur abaya — artisanat patrimonial émirati | Bint Saeed Abu Dhabi',
    imageTitleStory:
      'Broderie Al Talli au fil métallique — artisanat du Moyen-Orient, ÉAU',
    imageTitleLoom:
      'Kajujah Al Talli — artisanat patrimonial émirati traditionnel à Abu Dhabi',
    imageTitleStrands:
      'Brins métalliques dorés Al Talli — patrimoine culturel UNESCO des ÉAU',
    imageTitleBobbins:
      'Bobines métalliques Al Talli — broderie émiratie traditionnelle',
    imageTitleAbuDhabi:
      'Artisane Al Talli à la House of Artisans, Qasr Al Hosn — culture d’Abu Dhabi',
  },

  it: {
    heroTag: 'Artigianato emiratino',
    heroTitle: 'Al Talli',
    heroSubtitle: 'Il mestiere emiratino tessuto attraverso le generazioni',
    storyEyebrow: 'Il mestiere',
    storyTitle: 'Tessuto attraverso le generazioni',
    storyP1:
      'Al Talli è un’arte decorativa tradizionale emiratina, distinta da bande intricate di filo metallico e colorato, realizzate a mano e storicamente impiegate per ornare gli abiti femminili negli Emirati Arabi Uniti. Trasmesse di generazione in generazione di donne, queste competenze fanno parte del patrimonio culturale vivo del Paese e restano una delle espressioni più riconoscibili dell’artigianato emiratino.',
    storyP2:
      'Tradizionalmente, Al Talli nasce dall’intreccio di fili di cotone o seta con fili metallici in toni oro o argento. I filamenti si lavorano insieme fino a formare bande decorative applicabili allo scollo, alle maniche e ad altre parti degli abiti tradizionali. A seconda del motivo, il risultato va dal dettaglio lineare più sottile a composizioni più elaborate in cui il filo metallico cattura e riflette la luce.',
    storyP3:
      'L’importanza di Al Talli va oltre l’aspetto. La sua realizzazione conserva un sapere portato dalle mani delle donne — tecniche, motivi e modi di lavorare condivisi tra le generazioni. Nel 2022, le competenze tradizionali del ricamo Al Talli negli Emirati Arabi Uniti sono state iscritte nella Lista rappresentativa del patrimonio culturale immateriale dell’umanità dell’UNESCO.',
    craftEyebrow: 'Il fare',
    craftTitle: 'Filo, luce e ritmo',
    techniques: [
      {
        title: 'I filamenti',
        description:
          'Cotone o seta lavorati con filo metallico oro o argento, filamento dopo filamento.',
      },
      {
        title: 'Le bande',
        description:
          'Bande decorative per scollo, maniche e bordi — da linee sottili a composizioni più dense.',
      },
      {
        title: 'Luce e presenza',
        description:
          'Delicati singolarmente; insieme, le linee metalliche acquistano presenza attraverso ripetizione e luce.',
      },
    ],
    unescoEyebrow: 'UNESCO',
    unescoTitle: 'Patrimonio culturale vivo',
    unescoBody:
      'Nel 2022, le competenze tradizionali del ricamo Al Talli negli Emirati Arabi Uniti sono state iscritte nella Lista rappresentativa del patrimonio culturale immateriale dell’umanità dell’UNESCO — riconoscimento di un mestiere portato dalle donne, generazione dopo generazione.',
    unescoBadge1: 'Iscritto 2022',
    unescoBadge2: 'Emirati Arabi Uniti',
    abuDhabiEyebrow: 'Abu Dhabi',
    abuDhabiTitle: 'Al Talli ad Abu Dhabi oggi',
    abuDhabiP1:
      'Ad Abu Dhabi, Al Talli si incontra ancora come pratica viva. Istituzioni culturali, tra cui la House of Artisans a Qasr Al Hosn, documentano, preservano e condividono i mestieri tradizionali emiratini, permettendo alle nuove generazioni e ai visitatori di tutto il mondo di comprendere non solo i pezzi finiti, ma anche la maestria e il tempo che li hanno generati.',
    abuDhabiP2:
      'Per Bint Saeed, questo rapporto tra heritage e vita contemporanea ha un significato particolare. Abu Dhabi è una città in cui il passato resta presente entro una capitale internazionale in rapida evoluzione, e Al Talli offre un bel esempio di come il sapere culturale possa continuare senza restare fissato in un altro tempo.',
    brandEyebrow: 'Bint Saeed',
    brandTitle: 'Da Al Talli alla moda contemporanea',
    brandP1:
      'Quando Bint Saeed ha iniziato a esplorare Al Talli, la sfida non era semplicemente come collocare un ornamento tradizionale su un capo contemporaneo. Un mestiere di tale ricchezza culturale merita una considerazione più ampia.',
    brandP2:
      'Abbiamo piuttosto osservato da vicino il suo linguaggio visivo: linee metalliche sottili affiancate, il ritmo creato dalla ripetizione, il rapporto tra tessuto e luce, e il modo in cui qualcosa di straordinariamente delicato acquista presenza quando molti filamenti si riuniscono.',
    brandP3:
      'Quelle osservazioni sono entrate nel linguaggio di design in formazione di Bint Saeed. Su capi selezionati, dettagli metallici lineari richiamano il carattere di Al Talli in modi diversi. A volte il legame è immediatamente riconoscibile; altrove resta solo una traccia. L’intento non è ricreare l’abbigliamento tradizionale emiratino, ma lasciare che elementi incontrati nel paesaggio culturale di Abu Dhabi trovino espressioni contemporanee ponderate.',
    brandP4:
      'Così Al Talli diventa più di un riferimento al passato. Entra in una conversazione continua tra donne, abito, artigianato e luogo.',
    journalNote:
      'Per chi desidera scoprire la storia dietro il mestiere, The Bint Saeed Journal visita la House of Artisans ad Abu Dhabi in The Golden Thread Between Women, esplorando Al Talli attraverso le donne che lo realizzano e la domanda di come l’heritage possa viaggiare verso la moda contemporanea.',
    shopCta: 'Scopri i pezzi Al Talli',
    imageAltHero:
      'Dettaglio di abaya Bint Saeed blu navy con ricamo Al Talli metallico dorato — artigianato patrimoniale emiratino, Abu Dhabi',
    imageAltStory:
      'Primo piano di ricamo Al Talli fatto a mano in cotone azzurro e filo metallico dorato — mestiere del Medio Oriente, EAU',
    imageAltLoom:
      'Kajujah tradizionale emiratina per Al Talli con fili metallici dorati e rocchetti di legno — mestiere vivo ad Abu Dhabi',
    imageAltStrands:
      'Fili metallici dorati Al Talli in esposizione — patrimonio culturale degli EAU riconosciuto dall’UNESCO',
    imageAltBobbins:
      'Rocchetti di legno avvolti di filo metallico argentato per il ricamo tradizionale Al Talli',
    imageAltAbuDhabi:
      'Donna emiratina che pratica Al Talli alla House of Artisans, Qasr Al Hosn, Abu Dhabi',
    imageTitleHero:
      'Ricamo Al Talli su abaya — artigianato patrimoniale emiratino | Bint Saeed Abu Dhabi',
    imageTitleStory:
      'Ricamo Al Talli a filo metallico — mestiere del Medio Oriente, EAU',
    imageTitleLoom:
      'Kajujah Al Talli — artigianato patrimoniale emiratino tradizionale ad Abu Dhabi',
    imageTitleStrands:
      'Fili metallici dorati Al Talli — patrimonio culturale UNESCO degli EAU',
    imageTitleBobbins:
      'Rocchetti metallici Al Talli — ricamo emiratino tradizionale',
    imageTitleAbuDhabi:
      'Artigiana Al Talli alla House of Artisans, Qasr Al Hosn — cultura di Abu Dhabi',
  },

  es: {
    heroTag: 'Oficio emiratí',
    heroTitle: 'Al Talli',
    heroSubtitle: 'El oficio emiratí tejido a través de las generaciones',
    storyEyebrow: 'El oficio',
    storyTitle: 'Tejido a través de las generaciones',
    storyP1:
      'Al Talli es un arte decorativo tradicional emiratí, distinguido por bandas intrincadas de hilo metálico y de color, elaboradas a mano y empleadas históricamente para adornar la ropa de las mujeres en los Emiratos Árabes Unidos. Transmitido entre generaciones de mujeres, forma parte del patrimonio cultural vivo del país y sigue siendo una de las expresiones más reconocibles de la artesanía emiratí.',
    storyP2:
      'Tradicionalmente, Al Talli se crea entrelazando hilos de algodón o seda con hilos metálicos en tonos oro o plata. Los filamentos se trabajan juntos hasta formar bandas decorativas que se aplican al escote, las mangas y otras partes de las prendas tradicionales. Según el motivo, el resultado va desde el detalle lineal más fino hasta composiciones más elaboradas en las que el hilo metálico capta y refleja la luz.',
    storyP3:
      'La importancia de Al Talli va más allá de su apariencia. Su elaboración preserva un saber llevado por las manos de las mujeres — técnicas, motivos y modos de trabajar compartidos entre generaciones. En 2022, las destrezas tradicionales del bordado Al Talli en los Emiratos Árabes Unidos fueron inscritas en la Lista Representativa del Patrimonio Cultural Inmaterial de la Humanidad de la UNESCO.',
    craftEyebrow: 'El hacer',
    craftTitle: 'Hilo, luz y ritmo',
    techniques: [
      {
        title: 'Los filamentos',
        description:
          'Algodón o seda trabajados con hilo metálico oro o plata, filamento a filamento.',
      },
      {
        title: 'Las bandas',
        description:
          'Bandas decorativas para escote, mangas y bordes — de líneas esbeltas a composiciones más densas.',
      },
      {
        title: 'Luz y presencia',
        description:
          'Delicados por separado; juntos, las líneas metálicas ganan presencia mediante la repetición y la luz.',
      },
    ],
    unescoEyebrow: 'UNESCO',
    unescoTitle: 'Patrimonio cultural vivo',
    unescoBody:
      'En 2022, las destrezas tradicionales del bordado Al Talli en los Emiratos Árabes Unidos fueron inscritas en la Lista Representativa del Patrimonio Cultural Inmaterial de la Humanidad de la UNESCO — reconocimiento de un oficio llevado por las mujeres, de generación en generación.',
    unescoBadge1: 'Inscrito 2022',
    unescoBadge2: 'Emiratos Árabes Unidos',
    abuDhabiEyebrow: 'Abu Dabi',
    abuDhabiTitle: 'Al Talli en Abu Dabi hoy',
    abuDhabiP1:
      'En Abu Dabi, Al Talli se encuentra aún como práctica viva. Instituciones culturales como la House of Artisans en Qasr Al Hosn documentan, preservan y comparten los oficios tradicionales emiratíes, permitiendo a las nuevas generaciones y a visitantes de todo el mundo comprender no solo las piezas terminadas, sino también la maestría y el tiempo que las han hecho posibles.',
    abuDhabiP2:
      'Para Bint Saeed, esta relación entre heritage y vida contemporánea tiene un sentido particular. Abu Dabi es una ciudad donde el pasado permanece presente dentro de una capital internacional en rápida evolución, y Al Talli ofrece un bello ejemplo de cómo el saber cultural puede continuar sin quedar fijado en otro tiempo.',
    brandEyebrow: 'Bint Saeed',
    brandTitle: 'De Al Talli a la moda contemporánea',
    brandP1:
      'Cuando Bint Saeed comenzó a explorar Al Talli, el desafío no era simplemente cómo colocar un adorno tradicional sobre una prenda contemporánea. Un oficio de tal riqueza cultural merece una consideración más profunda.',
    brandP2:
      'En su lugar, observamos de cerca su lenguaje visual: líneas metálicas esbeltas unas junto a otras, el ritmo creado por la repetición, la relación entre textil y luz, y el modo en que algo notablemente delicado gana presencia cuando muchos filamentos se reúnen.',
    brandP3:
      'Esas observaciones pasaron a formar parte del lenguaje de diseño en desarrollo de Bint Saeed. En prendas seleccionadas, detalles metálicos lineales evocan el carácter de Al Talli de distintas maneras. A veces la relación es inmediatamente reconocible; en otros casos solo queda un rastro. La intención no es recrear la indumentaria tradicional emiratí, sino permitir que elementos hallados en el paisaje cultural de Abu Dabi encuentren expresiones contemporáneas meditadas.',
    brandP4:
      'Así Al Talli se vuelve más que una referencia al pasado. Forma parte de una conversación continua entre mujeres, vestimenta, artesanía y lugar.',
    journalNote:
      'Para quienes deseen descubrir la historia detrás del oficio, The Bint Saeed Journal visita la House of Artisans en Abu Dabi en The Golden Thread Between Women, explorando Al Talli a través de las mujeres que lo realizan y la cuestión de cómo el heritage puede viajar hacia la moda contemporánea.',
    shopCta: 'Comprar piezas Al Talli',
    imageAltHero:
      'Detalle de abaya Bint Saeed azul marino con bordado Al Talli metálico dorado — oficio patrimonial emiratí, Abu Dabi',
    imageAltStory:
      'Primer plano de bordado Al Talli hecho a mano en algodón azul polvo e hilo metálico dorado — oficio de Oriente Medio, EAU',
    imageAltLoom:
      'Kajujah tradicional emiratí para Al Talli con hilos metálicos dorados y bobinas de madera — oficio vivo en Abu Dabi',
    imageAltStrands:
      'Hebras metálicas doradas Al Talli en exposición — patrimonio cultural de los EAU reconocido por la UNESCO',
    imageAltBobbins:
      'Bobinas de madera enrolladas con hilo metálico plateado para el bordado tradicional Al Talli',
    imageAltAbuDhabi:
      'Mujer emiratí practicando Al Talli en la House of Artisans, Qasr Al Hosn, Abu Dabi',
    imageTitleHero:
      'Bordado Al Talli en abaya — oficio patrimonial emiratí | Bint Saeed Abu Dabi',
    imageTitleStory:
      'Bordado Al Talli con hilo metálico — oficio de Oriente Medio, EAU',
    imageTitleLoom:
      'Kajujah Al Talli — oficio patrimonial emiratí tradicional en Abu Dabi',
    imageTitleStrands:
      'Hebras metálicas doradas Al Talli — patrimonio cultural UNESCO de los EAU',
    imageTitleBobbins:
      'Bobinas metálicas Al Talli — bordado emiratí tradicional',
    imageTitleAbuDhabi:
      'Artesana Al Talli en la House of Artisans, Qasr Al Hosn — cultura de Abu Dabi',
  },

  ru: {
    heroTag: 'Эмиратское ремесло',
    heroTitle: 'Al Talli',
    heroSubtitle: 'Эмиратское ремесло, сотканное поколениями',
    storyEyebrow: 'Ремесло',
    storyTitle: 'Соткано поколениями',
    storyP1:
      'Al Talli — традиционное эмиратское декоративное ремесло, отличающееся изысканными лентами из металлической и цветной нити, создаваемыми вручную и исторически служившими украшением женской одежды в Объединённых Арабских Эмиратах. Передаваясь от поколения к поколению женщин, оно входит в живое культурное наследие страны и остаётся одним из самых узнаваемых выражений традиционного эмиратского мастерства.',
    storyP2:
      'Традиционно Al Talli создаётся переплетением хлопковых или шёлковых нитей с металлическими — золотистыми или серебристыми. Нити сходятся в декоративные ленты, которые накладывают на вырез, рукава и другие части традиционной одежды. В зависимости от узора результат может быть тонкой линейной деталью или более сложной композицией, где металлическая нить ловит и отражает свет.',
    storyP3:
      'Значение Al Talli выходит за пределы внешнего облика. Его создание сохраняет знание, несомое руками женщин, — техники, узоры и способы работы, передаваемые через поколения. В 2022 году традиционные навыки вышивки Al Talli в ОАЭ были внесены в Репрезентативный список нематериального культурного наследия человечества ЮНЕСКО.',
    craftEyebrow: 'Создание',
    craftTitle: 'Нить, свет и ритм',
    techniques: [
      {
        title: 'Нити',
        description:
          'Хлопок или шёлк в работе с металлической золотой или серебряной нитью — нить за нитью.',
      },
      {
        title: 'Ленты',
        description:
          'Декоративные ленты для выреза, рукавов и краёв — от тонких линий до более плотных композиций.',
      },
      {
        title: 'Свет и присутствие',
        description:
          'По отдельности — изящны; вместе металлические линии обретают присутствие через повторение и свет.',
      },
    ],
    unescoEyebrow: 'ЮНЕСКО',
    unescoTitle: 'Живое культурное наследие',
    unescoBody:
      'В 2022 году традиционные навыки вышивки Al Talli в Объединённых Арабских Эмиратах были внесены в Репрезентативный список нематериального культурного наследия человечества ЮНЕСКО — признание ремесла, которое несут женщины из поколения в поколение.',
    unescoBadge1: 'Внесено в 2022',
    unescoBadge2: 'Объединённые Арабские Эмираты',
    abuDhabiEyebrow: 'Абу-Даби',
    abuDhabiTitle: 'Al Talli в Абу-Даби сегодня',
    abuDhabiP1:
      'В Абу-Даби Al Talli по-прежнему встречается как живая практика. Культурные институции, в том числе House of Artisans при Qasr Al Hosn, помогают документировать, сохранять и передавать традиционные эмиратские ремёсла, позволяя новым поколениям и гостям со всего мира понять не только готовые изделия, но и мастерство и время, вложенные в их создание.',
    abuDhabiP2:
      'Для Bint Saeed эта связь между наследием и современной жизнью особенно значима. Абу-Даби — город, где прошлое остаётся присутствующим внутри стремительно меняющейся международной столицы, а Al Talli — прекрасный пример того, как культурное знание может продолжаться, не застывая в другом времени.',
    brandEyebrow: 'Bint Saeed',
    brandTitle: 'От Al Talli к современной моде',
    brandP1:
      'Когда Bint Saeed начала изучать Al Talli, задача состояла не просто в том, как перенести традиционный декор на современную одежду. Ремесло такой культурной глубины заслуживает более внимательного отношения.',
    brandP2:
      'Вместо этого мы пристально смотрели на его визуальный язык: тонкие металлические линии рядом друг с другом, ритм, рождаемый повторением, связь ткани и света, и то, как нечто необычайно хрупкое обретает присутствие, когда множество отдельных нитей сходятся вместе.',
    brandP3:
      'Эти наблюдения вошли в формирующийся язык дизайна Bint Saeed. На избранных изделиях линейные металлические детали отсылают к характеру Al Talli по-разному. Иногда связь узнаётся сразу; в других случаях остаётся лишь след. Цель — не воссоздать традиционную эмиратскую одежду, а дать элементам культурного ландшафта Абу-Даби найти продуманные современные выражения.',
    brandP4:
      'Так Al Talli становится больше, чем отсылкой к прошлому. Оно входит в продолжающийся разговор между женщинами, одеждой, мастерством и местом.',
    journalNote:
      'Тем, кто хочет узнать историю ремесла, The Bint Saeed Journal посещает House of Artisans в Абу-Даби в материале The Golden Thread Between Women — исследуя Al Talli через женщин, которые его создают, и вопрос о том, как наследие может перейти в современную моду.',
    shopCta: 'Смотреть изделия Al Talli',
    imageAltHero:
      'Деталь тёмно-синей абайи Bint Saeed с золотой металлической вышивкой Al Talli — эмиратское наследие, Абу-Даби',
    imageAltStory:
      'Крупный план ручной вышивки Al Talli голубым хлопком и золотой металлической нитью — ремесло Ближнего Востока, ОАЭ',
    imageAltLoom:
      'Традиционная эмиратская каджуджа Al Talli с золотыми металлическими нитями и деревянными бобинами — живое ремесло в Абу-Даби',
    imageAltStrands:
      'Золотые металлические пряди вышивки Al Talli на витрине — культурное наследие ОАЭ, признанное ЮНЕСКО',
    imageAltBobbins:
      'Деревянные бобины с серебристой металлической нитью для традиционной вышивки Al Talli',
    imageAltAbuDhabi:
      'Эмиратская женщина за вышивкой Al Talli в House of Artisans, Qasr Al Hosn, Абу-Даби',
    imageTitleHero:
      'Вышивка Al Talli на абайе — эмиратское наследие | Bint Saeed Абу-Даби',
    imageTitleStory:
      'Вышивка Al Talli металлической нитью — ремесло Ближнего Востока, ОАЭ',
    imageTitleLoom:
      'Каджуджа Al Talli — традиционное эмиратское наследие в Абу-Даби',
    imageTitleStrands:
      'Золотые металлические пряди Al Talli — культурное наследие ЮНЕСКО ОАЭ',
    imageTitleBobbins:
      'Металлические бобины Al Talli — традиционная эмиратская вышивка',
    imageTitleAbuDhabi:
      'Мастерица Al Talli в House of Artisans, Qasr Al Hosn — культура Абу-Даби',
  },

  zh: {
    heroTag: '阿联酋工艺',
    heroTitle: 'Al Talli',
    heroSubtitle: '代代相传的阿联酋工艺',
    storyEyebrow: '工艺',
    storyTitle: '代代织就',
    storyP1:
      'Al Talli 是阿联酋传统装饰工艺，以金属与彩色细线织成的精致饰带为特征，纯手工制成，历史上用于装点阿拉伯联合酋长国的女装。它在女性之间世代相承，构成阿联酋活态文化遗产的一部分，亦是最易辨识的传统阿联酋工艺表达之一。',
    storyP2:
      '传统上，Al Talli 以棉线或丝线与金、银色调的金属线交织而成。线缕共同织成装饰饰带，可施于领口、袖口及传统服饰的其他部位。依纹样不同，成品可自纤细的线条细节，延展为金属线捕捉并反射光线的繁复构图。',
    storyP3:
      'Al Talli 的意义不止于外观。其制作保存着由女性之手承载的知识——技法、纹样与工作方式在代际间相传。2022 年，阿联酋 Al Talli 刺绣的传统技艺被列入联合国教科文组织人类非物质文化遗产代表作名录。',
    craftEyebrow: '制作',
    craftTitle: '线、光与节奏',
    techniques: [
      {
        title: '线缕',
        description: '棉或丝与金色或银色金属线逐缕相织。',
      },
      {
        title: '饰带',
        description: '用于领口、袖口与衣缘的装饰饰带——自纤细线条至更密的构图。',
      },
      {
        title: '光与存在感',
        description: '单看纤细；合在一起，金属线条借由重复与光线获得存在感。',
      },
    ],
    unescoEyebrow: '联合国教科文组织',
    unescoTitle: '活态文化遗产',
    unescoBody:
      '2022 年，阿拉伯联合酋长国 Al Talli 刺绣的传统技艺被列入联合国教科文组织人类非物质文化遗产代表作名录——承认这一由女性世代传承的工艺。',
    unescoBadge1: '列入 2022',
    unescoBadge2: '阿拉伯联合酋长国',
    abuDhabiEyebrow: '阿布扎比',
    abuDhabiTitle: '今日阿布扎比的 Al Talli',
    abuDhabiP1:
      '在阿布扎比，Al Talli 仍可见为活态实践。包括 Qasr Al Hosn 内 House of Artisans 在内的文化机构协助记录、保存并分享传统阿联酋工艺，使新一代与来自世界各地的访客不仅理解成品，也理解其背后的技艺与时间。',
    abuDhabiP2:
      '对 Bint Saeed 而言，遗产与当代生活的这一关系尤为重要。阿布扎比是一座在迅速演变的国际都市中仍让过去保持在场的城市，而 Al Talli 正是文化知识得以延续、又不至于凝固于另一时代的美好例证。',
    brandEyebrow: 'Bint Saeed',
    brandTitle: '从 Al Talli 到当代时装',
    brandP1:
      '当 Bint Saeed 开始探索 Al Talli 时，挑战并不只是如何把传统装饰放到当代服装上。如此富有文化厚度的工艺，值得更深一层的考量。',
    brandP2:
      '我们转而细察其视觉语言：并置的纤细金属线条、重复所形成的节奏、织物与光线的关系，以及极度纤巧之物在众多线缕汇聚时如何获得存在感。',
    brandP3:
      '这些观察进入了 Bint Saeed 正在成形的设计语言。在部分服装上，线性金属细节以不同方式呼应 Al Talli 的气质。有时关系一目了然；有时仅余痕迹。意图并非复刻传统阿联酋服饰，而是让阿布扎比文化景观中相遇的元素，找到审慎的当代表达。',
    brandP4:
      '如此，Al Talli 不止是对过去的引用。它成为女性、服装、工艺与地方之间持续对话的一部分。',
    journalNote:
      '若想了解工艺背后的故事，The Bint Saeed Journal 在 The Golden Thread Between Women 一文中造访阿布扎比 House of Artisans，经由制作 Al Talli 的女性，探问遗产如何进入当代时装。',
    shopCta: '选购 Al Talli 单品',
    imageAltHero: 'Bint Saeed 藏青色阿巴亚局部，金色 Al Talli 金属线刺绣——阿联酋传承工艺，阿布扎比',
    imageAltStory: '手工 Al Talli 刺绣特写：粉蓝棉线与金色金属线——中东工艺，阿联酋',
    imageAltLoom: '传统阿联酋 Al Talli 用 kajujah，金色金属线与木质线轴——阿布扎比活态工艺',
    imageAltStrands: '展陈中的金色 Al Talli 金属刺绣线缕——获联合国教科文组织认可的阿联酋文化遗产',
    imageAltBobbins: '缠绕银色金属线的木质线轴，用于传统 Al Talli 刺绣——阿联酋传承工艺',
    imageAltAbuDhabi: '阿联酋女性在阿布扎比 Qasr Al Hosn 的 House of Artisans 练习 Al Talli 刺绣',
    imageTitleHero: '阿巴亚上的 Al Talli 刺绣——阿联酋传承工艺 | Bint Saeed 阿布扎比',
    imageTitleStory: 'Al Talli 金属线刺绣——中东工艺，阿联酋',
    imageTitleLoom: 'Al Talli kajujah 织架——阿布扎比传统阿联酋传承工艺',
    imageTitleStrands: '金色 Al Talli 金属线缕——教科文组织阿联酋文化遗产',
    imageTitleBobbins: 'Al Talli 金属线轴——传统阿联酋刺绣',
    imageTitleAbuDhabi: 'House of Artisans、Qasr Al Hosn 的 Al Talli 匠人——阿布扎比文化',
  },

  de: {
    heroTag: 'Emiratisches Handwerk',
    heroTitle: 'Al Talli',
    heroSubtitle: 'Das emiratische Handwerk, über Generationen gewoben',
    storyEyebrow: 'Das Handwerk',
    storyTitle: 'Über Generationen gewoben',
    storyP1:
      'Al Talli ist ein traditionelles emiratisches Dekorhandwerk, geprägt von filigranen Bändern aus metallischem und farbigem Faden, von Hand gefertigt und historisch zur Verzierung der Frauenkleidung in den Vereinigten Arabischen Emiraten verwendet. Von Generation zu Generation von Frauen weitergegeben, gehört es zum lebendigen Kulturerbe des Landes und zählt zu den unverkennbarsten Ausdrucksformen traditionellen emiratischen Könnens.',
    storyP2:
      'Traditionell entsteht Al Talli durch das Verflechten von Baumwoll- oder Seidenfäden mit metallischen Fäden in Gold- oder Silbertönen. Die Stränge werden zu dekorativen Bändern gearbeitet, die an Ausschnitt, Ärmeln und anderen Teilen traditioneller Gewänder angebracht werden können. Je nach Muster reicht das Ergebnis von schlanken linearen Details bis zu reicheren Kompositionen, in denen der Metallfaden das Licht fängt und zurückwirft.',
    storyP3:
      'Die Bedeutung von Al Talli geht über das Erscheinungsbild hinaus. Seine Herstellung bewahrt Wissen, das durch die Hände von Frauen getragen wird — Techniken, Muster und Arbeitsweisen, die über Generationen geteilt werden. 2022 wurden die traditionellen Fertigkeiten der Al-Talli-Stickerei in den VAE in die Repräsentative Liste des immateriellen Kulturerbes der Menschheit der UNESCO aufgenommen.',
    craftEyebrow: 'Das Machen',
    craftTitle: 'Faden, Licht und Rhythmus',
    techniques: [
      {
        title: 'Die Stränge',
        description:
          'Baumwolle oder Seide, Faden für Faden mit metallischem Gold- oder Silberfaden gearbeitet.',
      },
      {
        title: 'Die Bänder',
        description:
          'Dekorative Bänder für Ausschnitt, Ärmel und Kanten — von schlanken Linien bis zu dichteren Kompositionen.',
      },
      {
        title: 'Licht und Präsenz',
        description:
          'Für sich zart; gemeinsam gewinnen die metallischen Linien durch Wiederholung und Licht an Präsenz.',
      },
    ],
    unescoEyebrow: 'UNESCO',
    unescoTitle: 'Lebendiges Kulturerbe',
    unescoBody:
      '2022 wurden die traditionellen Fertigkeiten der Al-Talli-Stickerei in den Vereinigten Arabischen Emiraten in die Repräsentative Liste des immateriellen Kulturerbes der Menschheit der UNESCO aufgenommen — Anerkennung eines Handwerks, das Frauen von Generation zu Generation tragen.',
    unescoBadge1: 'Eingetragen 2022',
    unescoBadge2: 'Vereinigte Arabische Emirate',
    abuDhabiEyebrow: 'Abu Dhabi',
    abuDhabiTitle: 'Al Talli in Abu Dhabi heute',
    abuDhabiP1:
      'In Abu Dhabi begegnet man Al Talli noch als lebendiger Praxis. Kulturelle Institutionen, darunter die House of Artisans in Qasr Al Hosn, dokumentieren, bewahren und vermitteln traditionelle emiratische Handwerke — und lassen neue Generationen sowie Besucher aus aller Welt nicht nur die fertigen Stücke verstehen, sondern auch Können und Zeit, die sie tragen.',
    abuDhabiP2:
      'Für Bint Saeed hat diese Beziehung zwischen Erbe und zeitgenössischem Leben besondere Bedeutung. Abu Dhabi ist eine Stadt, in der die Vergangenheit in einer rasch wandelnden internationalen Hauptstadt gegenwärtig bleibt, und Al Talli zeigt eindrucksvoll, wie kulturelles Wissen fortbestehen kann, ohne in einer anderen Zeit festgeschrieben zu sein.',
    brandEyebrow: 'Bint Saeed',
    brandTitle: 'Von Al Talli zur zeitgenössischen Mode',
    brandP1:
      'Als Bint Saeed begann, Al Talli zu erkunden, ging es nicht allein darum, einen traditionellen Schmuck auf ein zeitgenössisches Kleidungsstück zu setzen. Ein Handwerk von solcher kultureller Tiefe verdient eine sorgfältigere Betrachtung.',
    brandP2:
      'Stattdessen betrachteten wir genau seine Bildsprache: schlanke metallische Linien nebeneinander, den Rhythmus der Wiederholung, das Verhältnis von Textil und Licht, und die Art, wie etwas bemerkenswert Zartes an Präsenz gewinnt, wenn viele einzelne Stränge zusammenfinden.',
    brandP3:
      'Diese Beobachtungen gingen in die sich entwickelnde Designsprache von Bint Saeed ein. An ausgewählten Stücken verweisen lineare metallische Details auf unterschiedliche Weise auf den Charakter von Al Talli. Manchmal ist die Beziehung sofort erkennbar; anderswo bleibt nur eine Spur. Ziel ist nicht, traditionelle emiratische Kleidung nachzubilden, sondern Elementen aus der kulturellen Landschaft Abu Dhabis durchdachte zeitgenössische Ausdrucksformen zu geben.',
    brandP4:
      'So wird Al Talli mehr als ein Verweis auf die Vergangenheit. Es wird Teil eines fortlaufenden Gesprächs zwischen Frauen, Kleidung, Handwerk und Ort.',
    journalNote:
      'Wer die Geschichte hinter dem Handwerk entdecken möchte, besucht The Bint Saeed Journal die House of Artisans in Abu Dhabi in The Golden Thread Between Women — und erkundet Al Talli durch die Frauen, die es machen, sowie die Frage, wie Erbe in die zeitgenössische Mode wandern kann.',
    shopCta: 'Al-Talli-Stücke entdecken',
    imageAltHero:
      'Detail einer marineblauen Bint-Saeed-Abaya mit goldener Al-Talli-Metallstickerei — emiratisches Kulturerbe, Abu Dhabi',
    imageAltStory:
      'Nahaufnahme handgewebter Al-Talli-Stickerei in puderblauem Baumwoll- und goldenem Metallfaden — Handwerk des Nahen Ostens, VAE',
    imageAltLoom:
      'Traditionelle emiratische Al-Talli-Kajujah mit goldenen Metallfäden und Holzspulen — lebendiges Handwerk in Abu Dhabi',
    imageAltStrands:
      'Goldene metallische Al-Talli-Stickerei-Stränge ausgestellt — von der UNESCO anerkanntes Kulturerbe der VAE',
    imageAltBobbins:
      'Holzspulen mit silbernem Metallfaden für traditionelle Al-Talli-Stickerei',
    imageAltAbuDhabi:
      'Emiratische Frau bei Al-Talli-Stickerei im House of Artisans, Qasr Al Hosn, Abu Dhabi',
    imageTitleHero:
      'Al-Talli-Stickerei an der Abaya — emiratisches Kulturerbe | Bint Saeed Abu Dhabi',
    imageTitleStory:
      'Al-Talli-Stickerei mit Metallfaden — Handwerk des Nahen Ostens, VAE',
    imageTitleLoom:
      'Al-Talli-Kajujah — traditionelles emiratisches Kulturerbe in Abu Dhabi',
    imageTitleStrands:
      'Goldene metallische Al-Talli-Stränge — UNESCO-Kulturerbe der VAE',
    imageTitleBobbins:
      'Metallische Al-Talli-Spulen — traditionelle emiratische Stickerei',
    imageTitleAbuDhabi:
      'Al-Talli-Handwerkerin im House of Artisans, Qasr Al Hosn — Kultur Abu Dhabis',
  },

  nl: {
    heroTag: 'Emiratisch ambacht',
    heroTitle: 'Al Talli',
    heroSubtitle: 'Het Emiratische ambacht, door generaties geweven',
    storyEyebrow: 'Het ambacht',
    storyTitle: 'Door generaties geweven',
    storyP1:
      'Al Talli is een traditioneel Emiratisch decoratief ambacht, gekenmerkt door fijne banden van metallische en gekleurde draad, met de hand gemaakt en historisch gebruikt om dameskleding in de Verenigde Arabische Emiraten te sieren. Overgedragen tussen generaties vrouwen, maakt het deel uit van het levende culturele erfgoed van het land en blijft het een van de meest herkenbare uitdrukkingen van traditioneel Emiratisch vakmanschap.',
    storyP2:
      'Traditioneel ontstaat Al Talli door katoen- of zijdedraden te verweven met metallische draden in goud- of zilvertonen. De strengen worden tot decoratieve banden gewerkt die op halslijn, mouwen en andere delen van traditionele kledingstukken kunnen worden aangebracht. Afhankelijk van het patroon loopt het resultaat van slanke lineaire details tot rijkere composities waarin de metallische draad het licht vangt en weerkaatst.',
    storyP3:
      'Het belang van Al Talli reikt verder dan het uiterlijk. Het maken ervan bewaart kennis die door de handen van vrouwen wordt gedragen — technieken, patronen en werkwijzen die over generaties worden gedeeld. In 2022 werden de traditionele vaardigheden van Al Talli-borduurwerk in de VAE opgenomen op de Representatieve Lijst van het Immaterieel Cultureel Erfgoed van de Mensheid van UNESCO.',
    craftEyebrow: 'Het maken',
    craftTitle: 'Draad, licht en ritme',
    techniques: [
      {
        title: 'De strengen',
        description:
          'Katoen of zijde, streng voor streng gewerkt met metallische goud- of zilverdraad.',
      },
      {
        title: 'De banden',
        description:
          'Decoratieve banden voor halslijn, mouwen en randen — van slanke lijnen tot dichtere composities.',
      },
      {
        title: 'Licht en aanwezigheid',
        description:
          'Afzonderlijk delicaat; samen winnen de metallische lijnen aan aanwezigheid door herhaling en licht.',
      },
    ],
    unescoEyebrow: 'UNESCO',
    unescoTitle: 'Levend cultureel erfgoed',
    unescoBody:
      'In 2022 werden de traditionele vaardigheden van Al Talli-borduurwerk in de Verenigde Arabische Emiraten opgenomen op de Representatieve Lijst van het Immaterieel Cultureel Erfgoed van de Mensheid van UNESCO — erkenning van een ambacht dat vrouwen van generatie op generatie dragen.',
    unescoBadge1: 'Ingeschreven 2022',
    unescoBadge2: 'Verenigde Arabische Emiraten',
    abuDhabiEyebrow: 'Abu Dhabi',
    abuDhabiTitle: 'Al Talli in Abu Dhabi vandaag',
    abuDhabiP1:
      'In Abu Dhabi komt Al Talli nog voor als levende praktijk. Culturele instellingen, waaronder de House of Artisans bij Qasr Al Hosn, helpen traditionele Emiratische ambachten te documenteren, te bewaren en te delen, zodat nieuwe generaties en bezoekers van over de hele wereld niet alleen de voltooide stukken begrijpen, maar ook de vaardigheid en tijd erachter.',
    abuDhabiP2:
      'Voor Bint Saeed heeft deze verhouding tussen erfgoed en hedendaags leven bijzondere betekenis. Abu Dhabi is een stad waar het verleden aanwezig blijft binnen een snel veranderende internationale hoofdstad, en Al Talli biedt een mooi voorbeeld van hoe culturele kennis kan voortgaan zonder vast te zitten in een andere tijd.',
    brandEyebrow: 'Bint Saeed',
    brandTitle: 'Van Al Talli naar hedendaagse mode',
    brandP1:
      'Toen Bint Saeed Al Talli begon te verkennen, was de uitdaging niet alleen hoe een traditionele versiering op een hedendaags kledingstuk te plaatsen. Een ambacht met zo’n culturele rijkdom verdient een diepere overweging.',
    brandP2:
      'In plaats daarvan keken we nauwkeurig naar zijn beeldtaal: slanke metallische lijnen naast elkaar, het ritme van herhaling, de verhouding tussen textiel en licht, en de manier waarop iets opmerkelijk delicats aanwezigheid wint wanneer vele afzonderlijke strengen samenkomen.',
    brandP3:
      'Die waarnemingen werden deel van de zich ontwikkelende designtaal van Bint Saeed. Op geselecteerde stukken verwijzen lineaire metallische details op verschillende manieren naar het karakter van Al Talli. Soms is de relatie onmiddellijk herkenbaar; elders blijft slechts een spoor. Het doel is niet traditionele Emiratische kleding te herscheppen, maar elementen uit het culturele landschap van Abu Dhabi doordachte hedendaagse uitdrukkingen te laten vinden.',
    brandP4:
      'Zo wordt Al Talli meer dan een verwijzing naar het verleden. Het wordt deel van een voortdurend gesprek tussen vrouwen, kleding, vakmanschap en plek.',
    journalNote:
      'Voor wie het verhaal achter het ambacht wil ontdekken, bezoekt The Bint Saeed Journal de House of Artisans in Abu Dhabi in The Golden Thread Between Women — en verkent Al Talli via de vrouwen die het maken, en de vraag hoe erfgoed kan overgaan naar hedendaagse mode.',
    shopCta: 'Shop Al Talli-stukken',
    imageAltHero:
      'Detail van marineblauwe Bint Saeed-abaya met gouden Al Talli-metalliekborduursel — Emiratisch erfgoedambacht, Abu Dhabi',
    imageAltStory:
      'Close-up van handgeweven Al Talli-borduurwerk in poederblauw katoen en gouden metallic draad — ambacht uit het Midden-Oosten, VAE',
    imageAltLoom:
      'Traditionele Emiratische Al Talli-kajujah met gouden metallic draden en houten spoelen — levend ambacht in Abu Dhabi',
    imageAltStrands:
      'Gouden metallic Al Talli-borduurstrengen tentoongesteld — door UNESCO erkend cultureel erfgoed van de VAE',
    imageAltBobbins:
      'Houten spoelen met zilveren metallic draad voor traditioneel Al Talli-borduurwerk',
    imageAltAbuDhabi:
      'Emiratische vrouw die Al Talli beoefent in de House of Artisans, Qasr Al Hosn, Abu Dhabi',
    imageTitleHero:
      'Al Talli-borduurwerk op abaya — Emiratisch erfgoedambacht | Bint Saeed Abu Dhabi',
    imageTitleStory:
      'Al Talli-borduurwerk met metallic draad — ambacht uit het Midden-Oosten, VAE',
    imageTitleLoom:
      'Al Talli-kajujah — traditioneel Emiratisch erfgoedambacht in Abu Dhabi',
    imageTitleStrands:
      'Gouden metallic Al Talli-strengen — UNESCO cultureel erfgoed van de VAE',
    imageTitleBobbins:
      'Metallic Al Talli-spoelen — traditioneel Emiratisch borduurwerk',
    imageTitleAbuDhabi:
      'Al Talli-ambachtsvrouw in House of Artisans, Qasr Al Hosn — cultuur van Abu Dhabi',
  },

  pt: {
    heroTag: 'Ofício emirati',
    heroTitle: 'Al Talli',
    heroSubtitle: 'O ofício emirati tecido através das gerações',
    storyEyebrow: 'O ofício',
    storyTitle: 'Tecido através das gerações',
    storyP1:
      'Al Talli é um ofício decorativo tradicional emirati, marcado por faixas intrincadas de fio metálico e colorido, feitas à mão e historicamente usadas para adornar a roupa feminina nos Emirados Árabes Unidos. Transmitido entre gerações de mulheres, integra o património cultural vivo do país e permanece uma das expressões mais reconhecíveis do artesanato emirati tradicional.',
    storyP2:
      'Tradicionalmente, Al Talli nasce do entrelaçar de fios de algodão ou seda com fios metálicos em tons de ouro ou prata. Os fios trabalham-se em conjunto até formar faixas decorativas aplicáveis à gola, às mangas e a outras partes das peças tradicionais. Consoante o padrão, o resultado vai do detalhe linear mais fino a composições mais elaboradas em que o fio metálico capta e reflecte a luz.',
    storyP3:
      'A importância de Al Talli ultrapassa a aparência. A sua feitura preserva um saber levado pelas mãos das mulheres — técnicas, padrões e modos de trabalhar partilhados entre gerações. Em 2022, as competências tradicionais do bordado Al Talli nos Emirados Árabes Unidos foram inscritas na Lista Representativa do Património Cultural Imaterial da Humanidade da UNESCO.',
    craftEyebrow: 'O fazer',
    craftTitle: 'Fio, luz e ritmo',
    techniques: [
      {
        title: 'Os fios',
        description:
          'Algodão ou seda trabalhados com fio metálico ouro ou prata, fio a fio.',
      },
      {
        title: 'As faixas',
        description:
          'Faixas decorativas para gola, mangas e orlas — de linhas esbeltas a composições mais densas.',
      },
      {
        title: 'Luz e presença',
        description:
          'Delicados isoladamente; juntos, as linhas metálicas ganham presença pela repetição e pela luz.',
      },
    ],
    unescoEyebrow: 'UNESCO',
    unescoTitle: 'Património cultural vivo',
    unescoBody:
      'Em 2022, as competências tradicionais do bordado Al Talli nos Emirados Árabes Unidos foram inscritas na Lista Representativa do Património Cultural Imaterial da Humanidade da UNESCO — reconhecimento de um ofício levado pelas mulheres, geração após geração.',
    unescoBadge1: 'Inscrito 2022',
    unescoBadge2: 'Emirados Árabes Unidos',
    abuDhabiEyebrow: 'Abu Dhabi',
    abuDhabiTitle: 'Al Talli em Abu Dhabi hoje',
    abuDhabiP1:
      'Em Abu Dhabi, Al Talli ainda se encontra como prática viva. Instituições culturais, incluindo a House of Artisans em Qasr Al Hosn, ajudam a documentar, preservar e partilhar ofícios tradicionais emiratis, permitindo que novas gerações e visitantes de todo o mundo compreendam não só as peças acabadas, mas também a mestria e o tempo da sua criação.',
    abuDhabiP2:
      'Para a Bint Saeed, esta relação entre património e vida contemporânea tem um sentido particular. Abu Dhabi é uma cidade onde o passado permanece presente dentro de uma capital internacional em rápida evolução, e Al Talli oferece um belo exemplo de como o saber cultural pode continuar sem ficar fixo noutro tempo.',
    brandEyebrow: 'Bint Saeed',
    brandTitle: 'De Al Talli à moda contemporânea',
    brandP1:
      'Quando a Bint Saeed começou a explorar Al Talli, o desafio não era simplesmente como colocar um ornamento tradicional numa peça contemporânea. Um ofício de tal riqueza cultural merece uma consideração mais profunda.',
    brandP2:
      'Em vez disso, observámos de perto a sua linguagem visual: linhas metálicas esbeltas lado a lado, o ritmo criado pela repetição, a relação entre têxtil e luz, e o modo como algo notavelmente delicado ganha presença quando muitos fios individuais se reúnem.',
    brandP3:
      'Essas observações passaram a integrar a linguagem de design em formação da Bint Saeed. Em peças selecionadas, detalhes metálicos lineares evocam o carácter de Al Talli de formas distintas. Por vezes a relação é imediatamente reconhecível; noutros casos resta apenas um vestígio. O intuito não é recriar o vestuário tradicional emirati, mas permitir que elementos encontrados no panorama cultural de Abu Dhabi encontrem expressões contemporâneas ponderadas.',
    brandP4:
      'Assim Al Talli torna-se mais do que uma referência ao passado. Torna-se parte de uma conversa contínua entre mulheres, vestuário, artesanato e lugar.',
    journalNote:
      'Para quem desejar descobrir a história por detrás do ofício, The Bint Saeed Journal visita a House of Artisans em Abu Dhabi em The Golden Thread Between Women, explorando Al Talli através das mulheres que o fazem e a questão de como o património pode viajar para a moda contemporânea.',
    shopCta: 'Comprar peças Al Talli',
    imageAltHero:
      'Detalhe de abaya Bint Saeed azul-marinho com bordado Al Talli metálico dourado — ofício patrimonial emirati, Abu Dhabi',
    imageAltStory:
      'Close-up de bordado Al Talli feito à mão em algodão azul-pó e fio metálico dourado — ofício do Médio Oriente, EAU',
    imageAltLoom:
      'Kajujah tradicional emirati para Al Talli com fios metálicos dourados e bobinas de madeira — ofício vivo em Abu Dhabi',
    imageAltStrands:
      'Fios metálicos dourados Al Talli em exposição — património cultural dos EAU reconhecido pela UNESCO',
    imageAltBobbins:
      'Bobinas de madeira enroladas com fio metálico prateado para o bordado tradicional Al Talli',
    imageAltAbuDhabi:
      'Mulher emirati a praticar Al Talli na House of Artisans, Qasr Al Hosn, Abu Dhabi',
    imageTitleHero:
      'Bordado Al Talli em abaya — ofício patrimonial emirati | Bint Saeed Abu Dhabi',
    imageTitleStory:
      'Bordado Al Talli com fio metálico — ofício do Médio Oriente, EAU',
    imageTitleLoom:
      'Kajujah Al Talli — ofício patrimonial emirati tradicional em Abu Dhabi',
    imageTitleStrands:
      'Fios metálicos dourados Al Talli — património cultural UNESCO dos EAU',
    imageTitleBobbins:
      'Bobinas metálicas Al Talli — bordado emirati tradicional',
    imageTitleAbuDhabi:
      'Artesã Al Talli na House of Artisans, Qasr Al Hosn — cultura de Abu Dhabi',
  },

  id: {
    heroTag: 'Kerajinan Emirat',
    heroTitle: 'Al Talli',
    heroSubtitle: 'Kerajinan Emirat yang terjalin lintas generasi',
    storyEyebrow: 'Kerajinan',
    storyTitle: 'Terjalin lintas generasi',
    storyP1:
      'Al Talli adalah kerajinan dekoratif tradisional Emirat yang ditandai oleh pita-pita rumit dari benang metalik dan berwarna, dibuat dengan tangan dan secara historis digunakan untuk menghias pakaian perempuan di Uni Emirat Arab. Diwariskan antar generasi perempuan, kerajinan ini menjadi bagian dari warisan budaya hidup negara itu dan tetap menjadi salah satu ungkapan paling dikenali dari keahlian Emirat tradisional.',
    storyP2:
      'Secara tradisional, Al Talli dibuat dengan menjalin benang kapas atau sutra bersama benang metalik bernuansa emas atau perak. Helai-helai itu dikerjakan bersama hingga membentuk pita dekoratif yang dapat dipasang pada leher, lengan, dan bagian lain pakaian tradisional. Tergantung polanya, hasilnya dapat berupa detail linear yang ramping hingga komposisi yang lebih kaya, di mana benang metalik menangkap dan memantulkan cahaya.',
    storyP3:
      'Pentingnya Al Talli melampaui penampilannya. Pembuatannya menjaga pengetahuan yang dibawa melalui tangan perempuan — teknik, pola, dan cara kerja yang diwariskan lintas generasi. Pada 2022, keterampilan tradisional sulaman Al Talli di UAE dimasukkan ke dalam Daftar Representatif Warisan Budaya Takbenda Umat Manusia UNESCO.',
    craftEyebrow: 'Pembuatan',
    craftTitle: 'Benang, cahaya, dan ritme',
    techniques: [
      {
        title: 'Helai-helai',
        description:
          'Kapas atau sutra dikerjakan dengan benang metalik emas atau perak, helai demi helai.',
      },
      {
        title: 'Pita-pita',
        description:
          'Pita dekoratif untuk leher, lengan, dan tepi pakaian — dari garis ramping hingga komposisi yang lebih padat.',
      },
      {
        title: 'Cahaya dan kehadiran',
        description:
          'Halus secara individu; bersama-sama, garis metalik memperoleh kehadiran melalui pengulangan dan cahaya.',
      },
    ],
    unescoEyebrow: 'UNESCO',
    unescoTitle: 'Warisan budaya yang hidup',
    unescoBody:
      'Pada 2022, keterampilan tradisional sulaman Al Talli di Uni Emirat Arab dimasukkan ke dalam Daftar Representatif Warisan Budaya Takbenda Umat Manusia UNESCO — pengakuan atas kerajinan yang diemban perempuan, generasi demi generasi.',
    unescoBadge1: 'Terdaftar 2022',
    unescoBadge2: 'Uni Emirat Arab',
    abuDhabiEyebrow: 'Abu Dhabi',
    abuDhabiTitle: 'Al Talli di Abu Dhabi hari ini',
    abuDhabiP1:
      'Di Abu Dhabi, Al Talli masih dapat dijumpai sebagai praktik yang hidup. Lembaga budaya termasuk House of Artisans di Qasr Al Hosn membantu mendokumentasikan, melestarikan, dan membagikan kerajinan tradisional Emirat, sehingga generasi baru dan pengunjung dari seluruh dunia memahami bukan hanya karya jadi, tetapi juga keahlian dan waktu di balik penciptaannya.',
    abuDhabiP2:
      'Bagi Bint Saeed, hubungan antara warisan dan kehidupan kontemporer ini sangat bermakna. Abu Dhabi adalah kota di mana masa lalu tetap hadir di dalam ibu kota internasional yang berkembang pesat, dan Al Talli menawarkan contoh indah tentang bagaimana pengetahuan budaya dapat berlanjut tanpa terkunci di waktu lain.',
    brandEyebrow: 'Bint Saeed',
    brandTitle: 'Dari Al Talli ke mode kontemporer',
    brandP1:
      'Ketika Bint Saeed mulai menelusuri Al Talli, tantangannya bukan sekadar bagaimana menempatkan hiasan tradisional pada pakaian kontemporer. Kerajinan dengan kekayaan budaya sedemikian layak mendapat pertimbangan yang lebih dalam.',
    brandP2:
      'Sebaliknya, kami mencermati bahasa visualnya: garis metalik ramping berdampingan, ritme yang lahir dari pengulangan, hubungan antara tekstil dan cahaya, serta cara sesuatu yang luar biasa halus memperoleh kehadiran ketika banyak helai berkumpul.',
    brandP3:
      'Pengamatan itu menjadi bagian dari bahasa desain Bint Saeed yang sedang terbentuk. Pada pakaian terpilih, detail metalik linear merujuk karakter Al Talli dengan cara yang berbeda. Kadang hubungannya langsung dikenali; di tempat lain, hanya jejak yang tersisa. Tujuannya bukan menciptakan kembali pakaian tradisional Emirat, melainkan memungkinkan unsur-unsur dalam lanskap budaya Abu Dhabi menemukan ekspresi kontemporer yang penuh pertimbangan.',
    brandP4:
      'Dengan demikian Al Talli menjadi lebih dari sekadar rujukan ke masa lalu. Ia menjadi bagian dari percakapan yang berkelanjutan antara perempuan, pakaian, keahlian, dan tempat.',
    journalNote:
      'Bagi yang ingin menemukan kisah di balik kerajinan ini, The Bint Saeed Journal mengunjungi House of Artisans di Abu Dhabi dalam The Golden Thread Between Women, menelusuri Al Talli melalui perempuan yang membuatnya dan pertanyaan bagaimana warisan dapat berpindah ke mode kontemporer.',
    shopCta: 'Belanja potongan Al Talli',
    imageAltHero:
      'Detail abaya Bint Saeed biru laut dengan sulaman Al Talli metalik emas — kerajinan warisan Emirati, Abu Dhabi',
    imageAltStory:
      'Close-up sulaman Al Talli buatan tangan dari katun biru pucat dan benang metalik emas — kerajinan Timur Tengah, UEA',
    imageAltLoom:
      'Kajujah tradisional Emirati untuk Al Talli dengan benang metalik emas dan kumparan kayu — kerajinan hidup di Abu Dhabi',
    imageAltStrands:
      'Helai sulaman Al Talli metalik emas dipamerkan — warisan budaya UEA yang diakui UNESCO',
    imageAltBobbins:
      'Kumparan kayu dililit benang metalik perak untuk sulaman tradisional Al Talli',
    imageAltAbuDhabi:
      'Perempuan Emirati mempraktikkan Al Talli di House of Artisans, Qasr Al Hosn, Abu Dhabi',
    imageTitleHero:
      'Sulaman Al Talli pada abaya — kerajinan warisan Emirati | Bint Saeed Abu Dhabi',
    imageTitleStory:
      'Sulaman Al Talli dengan benang metalik — kerajinan Timur Tengah, UEA',
    imageTitleLoom:
      'Kajujah Al Talli — kerajinan warisan Emirati tradisional di Abu Dhabi',
    imageTitleStrands:
      'Helai metalik emas Al Talli — warisan budaya UNESCO UEA',
    imageTitleBobbins:
      'Kumparan metalik Al Talli — sulaman Emirati tradisional',
    imageTitleAbuDhabi:
      'Pengrajin Al Talli di House of Artisans, Qasr Al Hosn — budaya Abu Dhabi',
  },

  ms: {
    heroTag: 'Kraftangan Emirati',
    heroTitle: 'Al Talli',
    heroSubtitle: 'Kraftangan Emirati yang dijalin merentas generasi',
    storyEyebrow: 'Kraftangan',
    storyTitle: 'Dijalin merentas generasi',
    storyP1:
      'Al Talli ialah kraftangan hiasan tradisional Emirati yang dicirikan oleh jalur-jalur rumit daripada benang metalik dan berwarna, dibuat dengan tangan dan secara sejarah digunakan untuk menghias pakaian wanita di Emiriah Arab Bersatu. Diwarisi antara generasi wanita, kraftangan ini menjadi sebahagian daripada warisan budaya hidup negara itu dan kekal sebagai salah satu ungkapan paling dikenali bagi keahlian Emirati tradisional.',
    storyP2:
      'Secara tradisional, Al Talli dihasilkan dengan menjalin benang kapas atau sutera bersama benang metalik bernada emas atau perak. Helai-helai itu dikerjakan bersama hingga membentuk jalur hiasan yang boleh dipasang pada leher, lengan, dan bahagian lain pakaian tradisional. Mengikut corak, hasilnya boleh berupa butiran linear yang langsing hingga komposisi yang lebih kaya, di mana benang metalik menangkap dan memantulkan cahaya.',
    storyP3:
      'Kepentingan Al Talli melangkaui penampilannya. Pembuatannya memelihara pengetahuan yang dibawa melalui tangan wanita — teknik, corak, dan cara kerja yang dikongsi merentas generasi. Pada 2022, kemahiran tradisional sulaman Al Talli di UAE dimasukkan ke dalam Senarai Representatif Warisan Budaya Tidak Ketara Manusia UNESCO.',
    craftEyebrow: 'Pembuatan',
    craftTitle: 'Benang, cahaya, dan irama',
    techniques: [
      {
        title: 'Helai-helai',
        description:
          'Kapas atau sutera dikerjakan dengan benang metalik emas atau perak, helai demi helai.',
      },
      {
        title: 'Jalur-jalur',
        description:
          'Jalur hiasan untuk leher, lengan, dan tepi pakaian — dari garis langsing hingga komposisi yang lebih padat.',
      },
      {
        title: 'Cahaya dan kehadiran',
        description:
          'Halus secara individu; bersama-sama, garis metalik memperoleh kehadiran melalui pengulangan dan cahaya.',
      },
    ],
    unescoEyebrow: 'UNESCO',
    unescoTitle: 'Warisan budaya yang hidup',
    unescoBody:
      'Pada 2022, kemahiran tradisional sulaman Al Talli di Emiriah Arab Bersatu dimasukkan ke dalam Senarai Representatif Warisan Budaya Tidak Ketara Manusia UNESCO — pengiktirafan terhadap kraftangan yang digalas wanita, generasi demi generasi.',
    unescoBadge1: 'Disenaraikan 2022',
    unescoBadge2: 'Emiriah Arab Bersatu',
    abuDhabiEyebrow: 'Abu Dhabi',
    abuDhabiTitle: 'Al Talli di Abu Dhabi hari ini',
    abuDhabiP1:
      'Di Abu Dhabi, Al Talli masih boleh dijumpai sebagai amalan yang hidup. Institusi budaya termasuk House of Artisans di Qasr Al Hosn membantu mendokumentasikan, memelihara, dan berkongsi kraftangan tradisional Emirati, membolehkan generasi baharu dan pengunjung dari seluruh dunia memahami bukan sahaja karya siap, tetapi juga kemahiran dan masa di sebalik penciptaannya.',
    abuDhabiP2:
      'Bagi Bint Saeed, hubungan antara warisan dan kehidupan kontemporari ini amat bermakna. Abu Dhabi ialah sebuah bandar di mana masa lalu kekal hadir dalam ibu kota antarabangsa yang berkembang pesat, dan Al Talli menawarkan contoh indah bagaimana pengetahuan budaya boleh berterusan tanpa terkunci dalam masa lain.',
    brandEyebrow: 'Bint Saeed',
    brandTitle: 'Dari Al Talli ke fesyen kontemporari',
    brandP1:
      'Apabila Bint Saeed mula meneliti Al Talli, cabarannya bukan sekadar bagaimana meletakkan hiasan tradisional pada pakaian kontemporari. Kraftangan dengan kekayaan budaya sedemikian layak mendapat pertimbangan yang lebih mendalam.',
    brandP2:
      'Sebaliknya, kami meneliti bahasa visualnya: garis metalik langsing bersebelahan, irama yang lahir daripada pengulangan, hubungan antara tekstil dan cahaya, serta cara sesuatu yang amat halus memperoleh kehadiran apabila banyak helai individu berkumpul.',
    brandP3:
      'Pemerhatian itu menjadi sebahagian daripada bahasa reka bentuk Bint Saeed yang sedang terbentuk. Pada pakaian terpilih, butiran metalik linear merujuk watak Al Talli dengan cara yang berbeza. Kadangkala hubungannya terus dikenali; di tempat lain, hanya jejak yang tinggal. Matlamatnya bukan mencipta semula pakaian tradisional Emirati, tetapi membenarkan unsur-unsur dalam landskap budaya Abu Dhabi mencari ungkapan kontemporari yang teliti.',
    brandP4:
      'Dengan demikian Al Talli menjadi lebih daripada rujukan kepada masa lalu. Ia menjadi sebahagian daripada perbualan berterusan antara wanita, pakaian, keahlian, dan tempat.',
    journalNote:
      'Bagi yang ingin menemui kisah di sebalik kraftangan ini, The Bint Saeed Journal melawat House of Artisans di Abu Dhabi dalam The Golden Thread Between Women, meneliti Al Talli melalui wanita yang membuatnya dan persoalan bagaimana warisan boleh berpindah ke fesyen kontemporari.',
    shopCta: 'Beli potongan Al Talli',
    imageAltHero:
      'Perincian abaya Bint Saeed biru laut dengan sulaman Al Talli metalik emas — kraf warisan Emirati, Abu Dhabi',
    imageAltStory:
      'Close-up sulaman Al Talli buatan tangan dalam kapas biru pucat dan benang metalik emas — kraf Timur Tengah, UAE',
    imageAltLoom:
      'Kajujah tradisional Emirati untuk Al Talli dengan benang metalik emas dan gelendong kayu — kraf hidup di Abu Dhabi',
    imageAltStrands:
      'Helai sulaman Al Talli metalik emas dipamerkan — warisan budaya UAE diiktiraf UNESCO',
    imageAltBobbins:
      'Gelendong kayu dililit benang metalik perak untuk sulaman tradisional Al Talli',
    imageAltAbuDhabi:
      'Wanita Emirati mengamalkan Al Talli di House of Artisans, Qasr Al Hosn, Abu Dhabi',
    imageTitleHero:
      'Sulaman Al Talli pada abaya — kraf warisan Emirati | Bint Saeed Abu Dhabi',
    imageTitleStory:
      'Sulaman Al Talli dengan benang metalik — kraf Timur Tengah, UAE',
    imageTitleLoom:
      'Kajujah Al Talli — kraf warisan Emirati tradisional di Abu Dhabi',
    imageTitleStrands:
      'Helai metalik emas Al Talli — warisan budaya UNESCO UAE',
    imageTitleBobbins:
      'Gelendong metalik Al Talli — sulaman Emirati tradisional',
    imageTitleAbuDhabi:
      'Pengrajin Al Talli di House of Artisans, Qasr Al Hosn — budaya Abu Dhabi',
  },
}
