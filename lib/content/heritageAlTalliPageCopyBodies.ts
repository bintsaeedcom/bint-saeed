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
  journalCta: string
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
      'Al Talli is a traditional Emirati decorative craft of intricate metallic and coloured thread bands, worked by hand and historically used to adorn women’s clothing in the United Arab Emirates. Its lines can feel familiar even before the craft is named — gold and silver tracing necklines and sleeves with the quiet certainty of a practice women have passed from hand to hand across generations.',
    storyP2:
      'Traditionally, Al Talli is created by intertwining cotton or silk with metallic threads in gold or silver tones. From a distance the bands look delicate; close to the work, wooden spools, cushions and individual strands reveal how slowly the intricate edging gathers — knowledge preserved not only in pattern, but in the rhythm of making.',
    storyP3:
      'In 2022, the traditional skills of Al Talli embroidery in the UAE were inscribed on UNESCO’s Representative List of the Intangible Cultural Heritage of Humanity. Yet what makes the story especially vivid in Abu Dhabi is that preservation is not confined to an archive: at places such as the House of Artisans, the craft remains practised, documented and shared.',
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
          'Decorative bands for neckline, sleeves, and garment edges — from slender lines to denser compositions that can read almost like jewellery.',
      },
      {
        title: 'Light and presence',
        description:
          'Delicate alone; together, slender metallic lines gain presence through repetition and light — the visual cue Bint Saeed kept returning to.',
      },
    ],
    unescoEyebrow: 'UNESCO',
    unescoTitle: 'Living cultural heritage',
    unescoBody:
      'In 2022, the traditional skills of Al Talli embroidery in the United Arab Emirates were inscribed on UNESCO’s Representative List of the Intangible Cultural Heritage of Humanity — recognising a craft carried by women, generation to generation.',
    unescoBadge1: 'Inscribed 2022',
    unescoBadge2: 'United Arab Emirates',
    abuDhabiEyebrow: 'Abu Dhabi',
    abuDhabiTitle: 'Al Talli in Abu Dhabi today',
    abuDhabiP1:
      'In Abu Dhabi, Al Talli can still be encountered as a living practice. At the House of Artisans at Qasr Al Hosn — and through related cultural work across the emirate — traditional Emirati crafts are documented, practised and shared, so visitors meet not only finished pieces but the women, materials and time behind them.',
    abuDhabiP2:
      'In a capital known for looking forward, there is quiet power in keeping earlier knowledge part of cultural life. For Bint Saeed, that continuity between heritage and contemporary dressing is the ground from which design begins.',
    brandEyebrow: 'Bint Saeed',
    brandTitle: 'From Al Talli to contemporary fashion',
    brandP1:
      'Translating Al Talli into Bint Saeed was more demanding than it first appeared. The traditional work is already extraordinarily rich; simply reproducing that richness on a contemporary garment would have felt too literal, while reducing it too far risked losing the character that made us look closer.',
    brandP2:
      'We kept returning to the lines themselves: slender metallic threads sitting beside one another, presence through repetition, light catching as a woman moved. Rather than recreating a traditional garment, the House could allow something of that visual language to continue in another form.',
    brandP3:
      'Over time those lines became one of the codes of the house — appearing across contemporary silhouettes in ways that sometimes reveal their relationship with Al Talli immediately, and sometimes offer only a trace. The aim was never to make the past look modern, but to let something culturally rich enter the present while its origin can still be felt.',
    brandP4:
      'In this way, Al Talli becomes more than a reference from the past. It becomes part of an ongoing conversation between women, clothing, craftsmanship and place — a golden thread that can travel beyond Abu Dhabi without remaining exactly as it was.',
    journalNote:
      'The fuller essay from the House of Artisans — The Golden Thread Between Women — appears in The Bint Saeed Journal.',
    journalCta: 'Read the Journal essay',
    shopCta: 'Shop Al Talli pieces',
    imageAltHero:
      'Cream thobe with gold Al Talli embroidery at the neckline — Emirati heritage craft, Abu Dhabi',
    imageAltStory:
      'Gold bead Al Talli motif on cream fabric — close embroidery detail, Emirati craft UAE',
    imageAltLoom:
      'Kajujah cushion with gold Al Talli braid and wooden bobbins on exhibition stand — Abu Dhabi',
    imageAltStrands:
      'Orange and gold metallic Al Talli ribbon strands — Emirati heritage craft, United Arab Emirates',
    imageAltBobbins:
      'Wooden bobbins with gold metallic thread hanging from an Al Talli kajujah — Emirati heritage craft',
    imageAltAbuDhabi:
      'Al Talli kajujah exhibition display with gold braid and bobbins — Abu Dhabi cultural heritage',
    imageTitleHero:
      'Al Talli gold embroidery on thobe — Emirati heritage craft | Bint Saeed Abu Dhabi',
    imageTitleStory:
      'Al Talli gold bead motif — Emirati embroidery detail UAE',
    imageTitleLoom:
      'Al Talli kajujah with gold bobbins — Emirati heritage craft Abu Dhabi',
    imageTitleStrands:
      'Orange-gold Al Talli metallic ribbons — UAE cultural heritage',
    imageTitleBobbins:
      'Al Talli kajujah bobbins — traditional Emirati embroidery',
    imageTitleAbuDhabi:
      'Al Talli kajujah exhibition — Abu Dhabi cultural heritage',
  },

  ar: {
    heroTag: 'حرفة إماراتية',
    heroTitle: 'التلي',
    heroSubtitle: 'حرفة إماراتية نسجتها الأجيال',
    storyEyebrow: 'الحرفة',
    storyTitle: 'منسوجة عبر الأجيال',
    storyP1:
      'التلي حرفة زخرفية إماراتية تقليدية من أشرطة خيوط معدنية وملونة تُعمل باليد، واستُخدمت تاريخياً لتزيين ملابس النساء في الإمارات. قد تبدو خطوطه مألوفة حتى قبل أن يُعرَف اسمه — ذهب وفضة يرسمان الياقات والأكمام بثقة هادئة لممارسة تناقلتها النساء يداً بيد عبر الأجيال.',
    storyP2:
      'يُصنع التلي تقليدياً بتشابك القطن أو الحرير مع خيوط معدنية ذهبية أو فضية. من بعيد تبدو الأشرطة رقيقة؛ وعن قرب تكشف البكرات الخشبية والوسائد والخيوط المفردة كيف يتجمّع الإطار المعقّد ببطء — معرفة محفوظة في النمط وفي إيقاع الصنع معاً.',
    storyP3:
      'في عام ٢٠٢٢ أُدرجت مهارات تطريز التلي التقليدية في الإمارات على القائمة التمثيلية لليونسكو للتراث الثقافي غير المادي. وما يجعل القصة حية في أبوظبي أن الحفظ لا يقتصر على الأرشيف: في أماكن مثل بيت الحرفيين تبقى الحرفة ممارسةً موثّقةً ومشتركة.',
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
      'في أبوظبي ما يزال التلي يُلتقى ممارسةً حية. في بيت الحرفيين بقصر الحصن — وعبر عمل ثقافي أوسع في الإمارة — تُوثَّق الحرف الإماراتية التقليدية وتُمارَس وتُشارَك، فيلتقي الزائرون القطعَ والنساءَ والموادَ والوقتَ وراءها.',
    abuDhabiP2:
      'في عاصمة تُعرَف بالنظر إلى الأمام، ثمة قوة هادئة في إبقاء معرفة الأجيال السابقة جزءاً من الحياة الثقافية. ولبنت سعيد، هذه الاستمرارية بين التراث واللبس المعاصر هي الأرض التي ينطلق منها التصميم.',
    brandEyebrow: 'بنت سعيد',
    brandTitle: 'من التلي إلى الأزياء المعاصرة',
    brandP1:
      'نقل التلي إلى بنت سعيد كان أكثر تطلباً مما بدا أولاً. العمل التقليدي غنيّ أصلاً؛ فمحاكاة ذلك الغنى حرفياً على قطعة معاصرة كانت لتبدو سطحية، بينما الإفراط في الاختزال كان ليُفقد السمة التي جعلتنا ننظر عن قرب.',
    brandP2:
      'عدنا إلى الخطوط ذاتها: خيوط معدنية رفيعة جنباً إلى جنب، حضور بالتكرار، ضوء يلتقط الحركة. بدل إعادة صنع ثوب تقليدي، أمكن للدار أن تُبقي شيئاً من لغته البصرية في شكل آخر.',
    brandP3:
      'مع الوقت أصبحت تلك الخطوط أحد رموز الدار — تظهر على قصّات معاصرة بطريقة تكشف أحياناً صلتها بالتلي فوراً، وأحياناً لا تُبقي سوى أثر. لم يكن الهدف أن يبدو الماضي حديثاً، بل أن يدخل شيء غني ثقافياً الحاضرَ ويظل أصله محسوساً.',
    brandP4:
      'هكذا يصبح التلي أكثر من مرجع من الماضي: محادثة مستمرة بين النساء والثياب والحرفة والمكان — خيطاً ذهبياً يمكنه أن يسافر أبعد من أبوظبي دون أن يبقى كما كان تماماً.',
    journalNote:
      'المقال الأوفى من بيت الحرفيين — The Golden Thread Between Women — منشور في مجلة بنت سعيد.',
    journalCta: 'اقرئي مقال المجلة',
    shopCta: 'تسوّقي قطع التلي',
    imageAltHero:
      'ثوب كريمي بتطريز التلي الذهبي عند الياقة — حرفة تراثية إماراتية، أبوظبي',
    imageAltStory: 'زخرفة تلي ذهبية بالخرز على قماش كريمي — تفصيل تطريز إماراتي',
    imageAltLoom: 'كجوجة التلي بشريط ذهبي وبكرات خشبية في عرض تراثي — أبوظبي',
    imageAltStrands: 'شرائط التلي البرتقالية والذهبية المعدنية — حرفة تراثية إماراتية',
    imageAltBobbins: 'بكرات خشبية بخيوط معدنية ذهبية معلّقة من كجوجة التلي — حرفة تراثية إماراتية',
    imageAltAbuDhabi: 'عرض كجوجة التلي بشريط ذهبي وبكرات — تراث ثقافي في أبوظبي',
    imageTitleHero: 'تطريز التلي الذهبي على الثوب — حرفة تراثية إماراتية | Bint Saeed أبوظبي',
    imageTitleStory: 'زخرفة التلي الذهبية — تفصيل تطريز إماراتي',
    imageTitleLoom: 'كجوجة التلي بالبكرات الذهبية — حرفة تراثية إماراتية في أبوظبي',
    imageTitleStrands: 'شرائط التلي البرتقالية الذهبية — تراث ثقافي إماراتي',
    imageTitleBobbins: 'بكرات كجوجة التلي — تطريز إماراتي تقليدي',
    imageTitleAbuDhabi: 'عرض كجوجة التلي — تراث ثقافي في أبوظبي',
  },

  fr: {
    heroTag: 'Savoir-faire émirati',
    heroTitle: 'Al Talli',
    heroSubtitle: 'Le savoir-faire émirati tissé à travers les générations',
    storyEyebrow: 'Le métier',
    storyTitle: 'Tissé à travers les générations',
    storyP1:
      'L’Al Talli est un artisanat décoratif émirati traditionnel de bandes de fils métalliques et colorés, travaillées à la main et historiquement destinées à orner les vêtements féminins aux Émirats arabes unis. Ses lignes peuvent sembler familières avant même que l’on connaisse son nom — or et argent traçant encolures et manches avec la certitude calme d’une pratique transmise de main en main entre femmes, de génération en génération.',
    storyP2:
      'Traditionnellement, l’Al Talli naît de l’entrelacs du coton ou de la soie avec des fils métalliques dorés ou argentés. De loin, les bandes paraissent délicates ; de près, bobines de bois, coussins et brins isolés révèlent combien lentement s’assemble la bordure — un savoir conservé dans le motif autant que dans le rythme du geste.',
    storyP3:
      'En 2022, les savoir-faire traditionnels de la broderie Al Talli aux EAU ont été inscrits sur la Liste représentative du patrimoine culturel immatériel de l’humanité de l’UNESCO. Ce qui rend l’histoire particulièrement vivante à Abu Dhabi, c’est que la préservation ne se limite pas à une archive : à la House of Artisans, notamment, le métier reste pratiqué, documenté et partagé.',
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
      'À Abu Dhabi, l’Al Talli se rencontre encore comme une pratique vivante. À la House of Artisans de Qasr Al Hosn — et à travers un travail culturel plus large dans l’émirat — les métiers traditionnels émiratis sont documentés, pratiqués et partagés, pour que les visiteurs rencontrent non seulement les pièces achevées, mais les femmes, les matières et le temps qui les portent.',
    abuDhabiP2:
      'Dans une capitale connue pour regarder vers l’avant, il y a une force discrète à garder le savoir des générations précédentes dans la vie culturelle. Pour Bint Saeed, cette continuité entre patrimoine et toilette contemporaine est le sol d’où naît le design.',
    brandEyebrow: 'Bint Saeed',
    brandTitle: "D'Al Talli à la mode contemporaine",
    brandP1:
      'Traduire l’Al Talli chez Bint Saeed s’est révélé plus exigeant qu’il n’y paraissait. Le travail traditionnel est déjà d’une richesse extraordinaire ; le reproduire littéralement sur une pièce contemporaine aurait paru trop littéral, tandis que le réduire trop loin aurait risqué d’effacer le caractère qui nous avait fait regarder de plus près.',
    brandP2:
      'Nous sommes revenues aux lignes elles-mêmes : fils métalliques minces côte à côte, présence par la répétition, lumière qui saisit le mouvement. Plutôt que de recréer un vêtement traditionnel, la Maison pouvait laisser quelque chose de ce langage visuel continuer sous une autre forme.',
    brandP3:
      'Avec le temps, ces lignes sont devenues l’un des codes de la maison — apparaissant sur des silhouettes contemporaines de façon tantôt immédiatement lisible, tantôt à peine un tracé. L’enjeu n’était jamais de rendre le passé moderne, mais de laisser quelque chose de culturellement riche entrer dans le présent tout en laissant sentir son origine.',
    brandP4:
      'Ainsi l’Al Talli devient plus qu’une référence du passé : une conversation continue entre femmes, vêtement, savoir-faire et lieu — un fil d’or qui peut voyager au-delà d’Abu Dhabi sans rester exactement ce qu’il était.',
    journalNote:
      'L’essai plus ample depuis la House of Artisans — The Golden Thread Between Women — paraît dans The Bint Saeed Journal.',
    journalCta: 'Lire l’essai du Journal',
    shopCta: 'Découvrir les pièces Al Talli',
    imageAltHero:
      'Thobe crème à broderie Al Talli dorée au décolleté — artisanat patrimonial émirati, Abu Dhabi',
    imageAltStory:
      'Motif Al Talli en perles dorées sur tissu crème — détail de broderie émiratie',
    imageAltLoom:
      'Kajujah avec tresse Al Talli dorée et bobines de bois en exposition — Abu Dhabi',
    imageAltStrands:
      'Rubans Al Talli orange et or métallique — artisanat patrimonial émirati',
    imageAltBobbins:
      'Bobines de bois à fil métallique doré suspendues à une kajujah Al Talli — artisanat émirati',
    imageAltAbuDhabi:
      'Exposition de kajujah Al Talli avec tresse dorée et bobines — patrimoine culturel à Abu Dhabi',
    imageTitleHero:
      'Broderie Al Talli dorée sur thobe — artisanat patrimonial émirati | Bint Saeed Abu Dhabi',
    imageTitleStory:
      'Motif Al Talli en perles dorées — détail de broderie émiratie',
    imageTitleLoom:
      'Kajujah Al Talli aux bobines dorées — artisanat patrimonial à Abu Dhabi',
    imageTitleStrands:
      'Rubans Al Talli orange-or — patrimoine culturel des EAU',
    imageTitleBobbins:
      'Bobines de kajujah Al Talli — broderie émiratie traditionnelle',
    imageTitleAbuDhabi:
      'Exposition kajujah Al Talli — patrimoine culturel à Abu Dhabi',
  },

  it: {
    heroTag: 'Artigianato emiratino',
    heroTitle: 'Al Talli',
    heroSubtitle: 'Il mestiere emiratino tessuto attraverso le generazioni',
    storyEyebrow: 'Il mestiere',
    storyTitle: 'Tessuto attraverso le generazioni',
    storyP1:
      'Al Talli è un artigianato decorativo emiratino tradizionale di bande intricate in filo metallico e colorato, lavorate a mano e storicamente usate per adornare gli abiti femminili negli Emirati Arabi Uniti. Le sue linee possono sembrare familiari ancora prima di conoscerne il nome — oro e argento che tracciano scolli e maniche con la quieta certezza di una pratica che le donne hanno trasmesso di mano in mano, generazione dopo generazione.',
    storyP2:
      'Tradizionalmente, Al Talli nasce intrecciando cotone o seta con fili metallici dorati o argentati. Da lontano le bande appaiono delicate; da vicino rocchetti di legno, cuscini e singoli fili rivelano quanto lentamente si raccolga il bordo — sapere conservato nel motivo e nel ritmo del fare.',
    storyP3:
      'Nel 2022 le abilità tradizionali del ricamo Al Talli negli EAU sono state iscritte nella Lista rappresentativa del patrimonio culturale immateriale dell’UNESCO. Ciò che rende la storia particolarmente viva ad Abu Dhabi è che la conservazione non si limita a un archivio: in luoghi come la House of Artisans il mestiere resta praticato, documentato e condiviso.',
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
      'Ad Abu Dhabi Al Talli si incontra ancora come pratica viva. Alla House of Artisans di Qasr Al Hosn — e attraverso un lavoro culturale più ampio nell’emirato — i mestieri tradizionali emiratini sono documentati, praticati e condivisi, così i visitatori incontrano non solo i pezzi finiti ma le donne, i materiali e il tempo che li portano.',
    abuDhabiP2:
      'In una capitale nota per guardare avanti, c’è una forza quieta nel tenere il sapere delle generazioni precedenti parte della vita culturale. Per Bint Saeed, quella continuità tra heritage e vestire contemporaneo è il suolo da cui nasce il design.',
    brandEyebrow: 'Bint Saeed',
    brandTitle: 'Da Al Talli alla moda contemporanea',
    brandP1:
      'Tradurre Al Talli in Bint Saeed è stato più esigente di quanto apparisse. Il lavoro tradizionale è già straordinariamente ricco; riprodurre letteralmente quella ricchezza su un capo contemporaneo sarebbe sembrato troppo letterale, mentre ridurla troppo avrebbe rischiato di perdere il carattere che ci aveva fatto guardare più da vicino.',
    brandP2:
      'Siamo tornate alle linee stesse: fili metallici sottili uno accanto all’altro, presenza attraverso la ripetizione, luce che coglie il movimento. Piuttosto che ricreare un capo tradizionale, la Maison poteva lasciare che qualcosa di quel linguaggio visivo continuasse in un’altra forma.',
    brandP3:
      'Nel tempo quelle linee sono diventate uno dei codici della maison — apparendo su silhouette contemporanee in modi a volte immediatamente riconoscibili, a volte solo una traccia. L’intento non era rendere moderno il passato, ma lasciare che qualcosa di culturalmente ricco entrasse nel presente lasciando ancora sentire la sua origine.',
    brandP4:
      'Così Al Talli diventa più di un riferimento dal passato: una conversazione continua tra donne, abiti, artigianato e luogo — un filo d’oro che può viaggiare oltre Abu Dhabi senza restare esattamente com’era.',
    journalNote:
      'Il saggio più ampio dalla House of Artisans — The Golden Thread Between Women — è su The Bint Saeed Journal.',
    journalCta: 'Leggi il saggio del Journal',
    shopCta: 'Scopri i pezzi Al Talli',
    imageAltHero:
      'Thobe crema con ricamo Al Talli dorato allo scollo — artigianato patrimoniale emiratino, Abu Dhabi',
    imageAltStory:
      'Motivo Al Talli in perline dorate su tessuto crema — dettaglio di ricamo emiratino',
    imageAltLoom:
      'Kajujah con treccia Al Talli dorata e rocchetti di legno in esposizione — Abu Dhabi',
    imageAltStrands:
      'Nastri Al Talli arancio e oro metallico — artigianato patrimoniale emiratino',
    imageAltBobbins:
      'Rocchetti di legno con filo metallico dorato appesi a una kajujah Al Talli — artigianato emiratino',
    imageAltAbuDhabi:
      'Esposizione di kajujah Al Talli con treccia dorata e rocchetti — patrimonio culturale ad Abu Dhabi',
    imageTitleHero:
      'Ricamo Al Talli dorato su thobe — patrimonio emiratino | Bint Saeed Abu Dhabi',
    imageTitleStory:
      'Motivo Al Talli in perline dorate — dettaglio ricamo emiratino',
    imageTitleLoom:
      'Kajujah Al Talli con rocchetti dorati — artigianato ad Abu Dhabi',
    imageTitleStrands:
      'Nastri Al Talli arancio-oro — patrimonio culturale EAU',
    imageTitleBobbins:
      'Rocchetti kajujah Al Talli — ricamo emiratino tradizionale',
    imageTitleAbuDhabi:
      'Esposizione kajujah Al Talli — patrimonio culturale Abu Dhabi',
  },

  es: {
    heroTag: 'Oficio emiratí',
    heroTitle: 'Al Talli',
    heroSubtitle: 'El oficio emiratí tejido a través de las generaciones',
    storyEyebrow: 'El oficio',
    storyTitle: 'Tejido a través de las generaciones',
    storyP1:
      'Al Talli es un oficio decorativo emiratí tradicional de bandas intrincadas de hilo metálico y de color, trabajadas a mano e históricamente usadas para adornar la ropa femenina en los Emiratos Árabes Unidos. Sus líneas pueden sentirse familiares incluso antes de conocer el nombre — oro y plata trazando escotes y mangas con la quieta certeza de una práctica que las mujeres han pasado de mano en mano, generación tras generación.',
    storyP2:
      'Tradicionalmente, Al Talli se crea entrelazando algodón o seda con hilos metálicos dorados o plateados. De lejos las bandas parecen delicadas; de cerca, bobinas de madera, cojines e hilos sueltos revelan cuán despacio se reúne el borde — saber conservado en el motivo y en el ritmo del hacer.',
    storyP3:
      'En 2022, las habilidades tradicionales del bordado Al Talli en EAU se inscribieron en la Lista Representativa del Patrimonio Cultural Inmaterial de la UNESCO. Lo que hace la historia especialmente viva en Abu Dabi es que la preservación no se limita a un archivo: en lugares como la House of Artisans el oficio sigue practicándose, documentándose y compartiéndose.',
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
      'En Abu Dabi, Al Talli aún se encuentra como práctica viva. En la House of Artisans de Qasr Al Hosn — y a través de un trabajo cultural más amplio en el emirato — los oficios tradicionales emiratíes se documentan, practican y comparten, para que los visitantes encuentren no solo las piezas terminadas sino las mujeres, los materiales y el tiempo detrás de ellas.',
    abuDhabiP2:
      'En una capital conocida por mirar hacia delante, hay una fuerza quieta en mantener el saber de generaciones anteriores parte de la vida cultural. Para Bint Saeed, esa continuidad entre patrimonio y vestir contemporáneo es el suelo desde el que nace el diseño.',
    brandEyebrow: 'Bint Saeed',
    brandTitle: 'De Al Talli a la moda contemporánea',
    brandP1:
      'Traducir Al Talli a Bint Saeed fue más exigente de lo que parecía. El trabajo tradicional ya es extraordinariamente rico; reproducir literalmente esa riqueza en una prenda contemporánea habría parecido demasiado literal, mientras que reducirla demasiado habría arriesgado perder el carácter que nos hizo mirar de cerca.',
    brandP2:
      'Volvimos a las líneas mismas: hilos metálicos delgados uno junto a otro, presencia por repetición, luz que capta el movimiento. En lugar de recrear una prenda tradicional, la Maison podía dejar que algo de ese lenguaje visual continuara en otra forma.',
    brandP3:
      'Con el tiempo esas líneas se convirtieron en uno de los códigos de la maison — apareciendo en siluetas contemporáneas de modos a veces reconocibles de inmediato, a veces solo un rastro. El objetivo nunca fue hacer moderno el pasado, sino dejar que algo culturalmente rico entre en el presente mientras su origen aún se siente.',
    brandP4:
      'Así Al Talli se vuelve más que una referencia del pasado: una conversación continua entre mujeres, ropa, oficio y lugar — un hilo de oro que puede viajar más allá de Abu Dabi sin permanecer exactamente como era.',
    journalNote:
      'El ensayo más amplio desde la House of Artisans — The Golden Thread Between Women — aparece en The Bint Saeed Journal.',
    journalCta: 'Leer el ensayo del Journal',
    shopCta: 'Comprar piezas Al Talli',
    imageAltHero:
      'Thobe crema con bordado Al Talli dorado en el escote — oficio patrimonial emiratí, Abu Dabi',
    imageAltStory:
      'Motivo Al Talli de cuentas doradas sobre tela crema — detalle de bordado emiratí',
    imageAltLoom:
      'Kajujah con trenza Al Talli dorada y bobinas de madera en exposición — Abu Dabi',
    imageAltStrands:
      'Cintas Al Talli naranja y oro metálico — oficio patrimonial emiratí',
    imageAltBobbins:
      'Bobinas de madera con hilo metálico dorado colgando de una kajujah Al Talli — oficio emiratí',
    imageAltAbuDhabi:
      'Exposición de kajujah Al Talli con trenza dorada y bobinas — patrimonio cultural en Abu Dabi',
    imageTitleHero:
      'Bordado Al Talli dorado en thobe — patrimonio emiratí | Bint Saeed Abu Dabi',
    imageTitleStory:
      'Motivo Al Talli de cuentas doradas — detalle de bordado emiratí',
    imageTitleLoom:
      'Kajujah Al Talli con bobinas doradas — oficio en Abu Dabi',
    imageTitleStrands:
      'Cintas Al Talli naranja-oro — patrimonio cultural de EAU',
    imageTitleBobbins:
      'Bobinas kajujah Al Talli — bordado emiratí tradicional',
    imageTitleAbuDhabi:
      'Exposición kajujah Al Talli — patrimonio cultural Abu Dabi',
  },

  ru: {
    heroTag: 'Эмиратское ремесло',
    heroTitle: 'Al Talli',
    heroSubtitle: 'Эмиратское ремесло, сотканное поколениями',
    storyEyebrow: 'Ремесло',
    storyTitle: 'Соткано поколениями',
    storyP1:
      'Al Talli — традиционное эмиратское декоративное ремесло изысканных металлических и цветных нитяных лент, выполненных вручную и исторически использовавшихся для украшения женской одежды в Объединённых Арабских Эмиратах. Его линии могут казаться знакомыми ещё до того, как известно имя — золото и серебро чертят вырезы и рукава с тихой уверенностью практики, которую женщины передавали из рук в руки через поколения.',
    storyP2:
      'Традиционно Al Talli создаётся переплетением хлопка или шёлка с металлическими нитями золотого или серебряного тона. Издали ленты кажутся тонкими; вблизи деревянные шпульки, подушки и отдельные нити показывают, как медленно собирается сложный край — знание, сохранённое и в узоре, и в ритме делания.',
    storyP3:
      'В 2022 году традиционные навыки вышивки Al Talli в ОАЭ были внесены в Репрезентативный список нематериального культурного наследия человечества ЮНЕСКО. Что делает историю особенно живой в Абу-Даби: сохранение не ограничивается архивом — в местах вроде House of Artisans ремесло по-прежнему практикуется, документируется и передаётся.',
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
      'В Абу-Даби Al Talli всё ещё встречается как живая практика. В House of Artisans при Qasr Al Hosn — и через более широкую культурную работу в эмирате — традиционные эмиратские ремёсла документируются, практикуются и разделяются, чтобы гости встречали не только готовые изделия, но женщин, материалы и время за ними.',
    abuDhabiP2:
      'В столице, известной взглядом вперёд, есть тихая сила в том, чтобы удерживать знание прежних поколений частью культурной жизни. Для Bint Saeed эта непрерывность между наследием и современным костюмом — почва, из которой начинается дизайн.',
    brandEyebrow: 'Bint Saeed',
    brandTitle: 'От Al Talli к современной моде',
    brandP1:
      'Перевести Al Talli в Bint Saeed оказалось требовательнее, чем казалось сначала. Традиционная работа уже необычайно богата; буквально воспроизвести это богатство на современном изделии было бы слишком буквально, а слишком сильно упростить — риск потерять характер, из-за которого мы присмотрелись ближе.',
    brandP2:
      'Мы возвращались к самим линиям: тонкие металлические нити рядом друг с другом, присутствие через повторение, свет, ловящий движение. Вместо воссоздания традиционного наряда Дом мог позволить чему-то из этого визуального языка продолжиться в иной форме.',
    brandP3:
      'Со временем эти линии стали одним из кодов дома — появляясь на современных силуэтах то сразу узнаваемо, то лишь следом. Цель никогда не состояла в том, чтобы сделать прошлое современным, а в том, чтобы нечто культурно богатое вошло в настоящее, пока его исток ещё ощутим.',
    brandP4:
      'Так Al Talli становится больше, чем отсылкой из прошлого: продолжающимся разговором между женщинами, одеждой, ремеслом и местом — золотой нитью, которая может уйти дальше Абу-Даби, не оставаясь в точности прежней.',
    journalNote:
      'Более полный очерк из House of Artisans — The Golden Thread Between Women — опубликован в The Bint Saeed Journal.',
    journalCta: 'Читать эссе в Journal',
    shopCta: 'Смотреть изделия Al Talli',
    imageAltHero:
      'Кремовый тоб с золотой вышивкой Al Talli у горловины — эмиратское наследие, Абу-Даби',
    imageAltStory:
      'Золотой бисерный мотив Al Talli на кремовой ткани — деталь эмиратской вышивки',
    imageAltLoom:
      'Каюджа с золотой тесьмой Al Talli и деревянными шпульками на выставке — Абу-Даби',
    imageAltStrands:
      'Оранжево-золотые металлические ленты Al Talli — эмиратское ремесло',
    imageAltBobbins:
      'Деревянные шпульки с золотой металлической нитью на каюдже Al Talli — эмиратское ремесло',
    imageAltAbuDhabi:
      'Выставка каюджи Al Talli с золотой тесьмой и шпульками — культурное наследие Абу-Даби',
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
      'Al Talli 是阿联酋传统装饰工艺，以手工金属与彩色线带构成精致饰带，历史上用于装点女性服饰。它的线条甚至在知其名之前便可能显得熟悉——金银在领口与袖缘游走，带着一代代女性手口相传的从容确信。',
    storyP2:
      '传统上，Al Talli 以棉或丝与金、银色金属线交织而成。远看饰带轻盈；近观木线轴、垫枕与单根线缕，才见边缘如何缓慢汇聚——知识既存于纹样，也存于制作的节奏。',
    storyP3:
      '2022 年，阿联酋传统 Al Talli 刺绣技艺列入联合国教科文组织人类非物质文化遗产代表作名录。在阿布扎比，故事之所以尤为鲜活，是因为保存并不止于档案：在 House of Artisans 等地，这项工艺仍被实践、记录与分享。',
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
      '在阿布扎比，Al Talli 仍可作为活态实践遇见。在 Qasr Al Hosn 的 House of Artisans——以及酋长国更广泛的文化工作中——传统阿联酋工艺被记录、实践与共享，访客遇见的不仅是成品，还有背后的女性、材料与时间。',
    abuDhabiP2:
      '在一座以向前看著称的首都，让前代知识仍留在文化生活中，有一种安静的力量。对 Bint Saeed 而言，传承与当代着装之间的连续性，正是设计的起点。',
    brandEyebrow: 'Bint Saeed',
    brandTitle: '从 Al Talli 到当代时装',
    brandP1:
      '将 Al Talli 转译进 Bint Saeed，比初看起来更费心力。传统工艺本身已极为丰厚；若在当代成衣上原样复刻那份丰厚，会显得过于字面；而削减过甚，又可能失去最初让我们细看的特质。',
    brandP2:
      '我们一再回到线条本身：细长金属线并置、以重复建立存在、随动作捕捉光泽。与其复刻传统服装，品牌可以让这一视觉语言以另一种形式延续。',
    brandP3:
      '渐渐地，这些线条成为品牌密码之一——出现在当代廓形上，有时一目了然，有时只留痕迹。目标从来不是让过去显得现代，而是让文化上丰厚之物进入当下，同时仍能感知其源头。',
    brandP4:
      '于是 Al Talli 不再只是过去的参照：它成为女性、衣饰、工艺与地方之间持续的对话——一条可走出阿布扎比、却不必原样不变的金线。',
    journalNote:
      '来自 House of Artisans 的完整随笔 The Golden Thread Between Women 刊于 The Bint Saeed Journal。',
    journalCta: '阅读 Journal 专文',
    shopCta: '选购 Al Talli 单品',
    imageAltHero: '奶油色长袍领口金色 Al Talli 刺绣 — 阿联酋传承工艺，阿布扎比',
    imageAltStory: '奶油色面料上的金色珠绣 Al Talli 纹样 — 阿联酋刺绣细节',
    imageAltLoom: '展示中的 Al Talli kajujah 金饰带与木线轴 — 阿布扎比',
    imageAltStrands: '橙金金属 Al Talli 织带 — 阿联酋传承工艺',
    imageAltBobbins: '挂在 Al Talli kajujah 上的金色金属线木轴 — 阿联酋工艺',
    imageAltAbuDhabi: 'Al Talli kajujah 金饰带与线轴展览 — 阿布扎比文化遗产',
    imageTitleHero: '长袍上的金色 Al Talli 刺绣 — 阿联酋传承 | Bint Saeed 阿布扎比',
    imageTitleStory: '金色 Al Talli 珠绣纹样 — 阿联酋刺绣细节',
    imageTitleLoom: '带金线轴的 Al Talli kajujah — 阿布扎比传承工艺',
    imageTitleStrands: '橙金 Al Talli 织带 — 阿联酋文化遗产',
    imageTitleBobbins: 'Al Talli kajujah 线轴 — 传统阿联酋刺绣',
    imageTitleAbuDhabi: 'Al Talli kajujah 展览 — 阿布扎比文化遗产',
  },

  de: {
    heroTag: 'Emiratisches Handwerk',
    heroTitle: 'Al Talli',
    heroSubtitle: 'Das emiratische Handwerk, über Generationen gewoben',
    storyEyebrow: 'Das Handwerk',
    storyTitle: 'Über Generationen gewoben',
    storyP1:
      'Al Talli ist ein traditionelles emiratisches Dekorationshandwerk aus filigranen Bändern metallischer und farbiger Fäden, von Hand gearbeitet und historisch zur Verzierung der Frauenkleidung in den Vereinigten Arabischen Emiraten verwendet. Seine Linien können vertraut wirken, noch bevor der Name bekannt ist — Gold und Silber zeichnen Ausschnitte und Ärmel mit der ruhigen Gewissheit einer Praxis, die Frauen von Hand zu Hand über Generationen weitergegeben haben.',
    storyP2:
      'Traditionell entsteht Al Talli durch das Verflechten von Baumwolle oder Seide mit goldenen oder silbernen Metallfäden. Aus der Ferne wirken die Bänder zart; aus der Nähe zeigen Holzspulen, Kissen und einzelne Fäden, wie langsam sich der aufwendige Saum sammelt — Wissen, das im Muster und im Rhythmus des Machens bewahrt wird.',
    storyP3:
      '2022 wurden die traditionellen Fähigkeiten der Al-Talli-Stickerei in den VAE in die Repräsentative Liste des immateriellen Kulturerbes der Menschheit der UNESCO aufgenommen. Was die Geschichte in Abu Dhabi besonders lebendig macht: Bewahrung beschränkt sich nicht auf ein Archiv — an Orten wie dem House of Artisans bleibt das Handwerk praktiziert, dokumentiert und geteilt.',
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
      'In Abu Dhabi begegnet man Al Talli noch als lebendiger Praxis. Im House of Artisans am Qasr Al Hosn — und durch weitere kulturelle Arbeit im Emirat — werden traditionelle emiratische Handwerke dokumentiert, praktiziert und geteilt, sodass Besucher nicht nur fertige Stücke treffen, sondern die Frauen, Materialien und Zeit dahinter.',
    abuDhabiP2:
      'In einer Hauptstadt, die für den Blick nach vorn bekannt ist, liegt stille Kraft darin, früheres Wissen Teil des kulturellen Lebens zu halten. Für Bint Saeed ist diese Kontinuität zwischen Erbe und zeitgenössischem Kleiden der Boden, aus dem Design beginnt.',
    brandEyebrow: 'Bint Saeed',
    brandTitle: 'Von Al Talli zur zeitgenössischen Mode',
    brandP1:
      'Al Talli in Bint Saeed zu übersetzen war anspruchsvoller, als es zunächst schien. Die traditionelle Arbeit ist bereits außerordentlich reich; diese Fülle wörtlich auf ein zeitgenössisches Stück zu reproduzieren hätte zu wörtlich gewirkt, während ein zu starkes Reduzieren den Charakter zu verlieren drohte, der uns genauer hinsehen ließ.',
    brandP2:
      'Wir kehrten zu den Linien selbst zurück: schlanke Metallfäden nebeneinander, Präsenz durch Wiederholung, Licht, das Bewegung einfängt. Statt ein traditionelles Gewand nachzubilden, konnte das Haus etwas dieser Bildsprache in anderer Form fortsetzen lassen.',
    brandP3:
      'Mit der Zeit wurden diese Linien einer der Codes des Hauses — auf zeitgenössischen Silhouetten manchmal sofort erkennbar, manchmal nur eine Spur. Ziel war nie, die Vergangenheit modern wirken zu lassen, sondern etwas kulturell Reiches in die Gegenwart eintreten zu lassen, während sein Ursprung noch spürbar bleibt.',
    brandP4:
      'So wird Al Talli mehr als ein Bezug aus der Vergangenheit: ein fortlaufendes Gespräch zwischen Frauen, Kleidung, Handwerk und Ort — ein goldener Faden, der über Abu Dhabi hinaus reisen kann, ohne genau so zu bleiben, wie er war.',
    journalNote:
      'Der ausführlichere Essay aus der House of Artisans — The Golden Thread Between Women — erscheint in The Bint Saeed Journal.',
    journalCta: 'Journal-Essay lesen',
    shopCta: 'Al-Talli-Stücke entdecken',
    imageAltHero:
      'Creme-Thobe mit goldener Al-Talli-Stickerei am Ausschnitt — emiratisches Erbe, Abu Dhabi',
    imageAltStory:
      'Goldenes Al-Talli-Perlenmotiv auf Creme-Stoff — Stickdetail, Emirati-Handwerk',
    imageAltLoom:
      'Kajujah mit goldener Al-Talli-Borte und Holzspulen in Ausstellung — Abu Dhabi',
    imageAltStrands:
      'Orange-goldene metallische Al-Talli-Bänder — emiratisches Erbe',
    imageAltBobbins:
      'Holzspulen mit goldener Metallfaser an einer Al-Talli-Kajujah — emiratisches Handwerk',
    imageAltAbuDhabi:
      'Al-Talli-Kajujah-Ausstellung mit goldener Borte und Spulen — Kulturerbe Abu Dhabi',
    imageTitleHero:
      'Goldene Al-Talli-Stickerei auf Thobe — emiratisches Erbe | Bint Saeed Abu Dhabi',
    imageTitleStory:
      'Goldenes Al-Talli-Perlenmotiv — Emirati-Stickdetail',
    imageTitleLoom:
      'Al-Talli-Kajujah mit goldenen Spulen — Erbe Abu Dhabi',
    imageTitleStrands:
      'Orange-goldene Al-Talli-Bänder — Kulturerbe der VAE',
    imageTitleBobbins:
      'Al-Talli-Kajujah-Spulen — traditionelle Emirati-Stickerei',
    imageTitleAbuDhabi:
      'Al-Talli-Kajujah-Ausstellung — Kulturerbe Abu Dhabi',
  },

  nl: {
    heroTag: 'Emiratisch ambacht',
    heroTitle: 'Al Talli',
    heroSubtitle: 'Het Emiratische ambacht, door generaties geweven',
    storyEyebrow: 'Het ambacht',
    storyTitle: 'Door generaties geweven',
    storyP1:
      'Al Talli is een traditioneel Emiratisch decoratief ambacht van fijne metallieke en gekleurde draadbanden, met de hand gewerkt en historisch gebruikt om vrouwenkleding in de Verenigde Arabische Emiraten te sieren. De lijnen kunnen vertrouwd aanvoelen nog vóór de naam bekend is — goud en zilver die halslijnen en mouwen trekken met de stille zekerheid van een praktijk die vrouwen van hand tot hand over generaties hebben doorgegeven.',
    storyP2:
      'Traditioneel ontstaat Al Talli door katoen of zijde te verweven met gouden of zilveren metallieke draden. Van ver lijken de banden delicaat; van dichtbij tonen houten spoelen, kussens en aparte draden hoe traag de complexe zoom zich verzamelt — kennis bewaard in motief én in het ritme van maken.',
    storyP3:
      'In 2022 werden de traditionele vaardigheden van Al Talli-borduurwerk in de VAE opgenomen op de Representatieve Lijst van het immaterieel cultureel erfgoed van de mensheid van UNESCO. Wat het verhaal in Abu Dhabi bijzonder levend maakt: behoud beperkt zich niet tot een archief — op plekken als de House of Artisans blijft het ambacht beoefend, gedocumenteerd en gedeeld.',
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
      'In Abu Dhabi komt Al Talli nog voor als levende praktijk. In de House of Artisans bij Qasr Al Hosn — en via breder cultureel werk in het emiraat — worden traditionele Emiratische ambachten gedocumenteerd, beoefend en gedeeld, zodat bezoekers niet alleen voltooide stukken ontmoeten maar de vrouwen, materialen en tijd erachter.',
    abuDhabiP2:
      'In een hoofdstad die bekendstaat om vooruitkijken, ligt stille kracht in het houden van eerdere kennis als deel van het culturele leven. Voor Bint Saeed is die continuïteit tussen erfgoed en hedendaags kleden de grond waaruit design begint.',
    brandEyebrow: 'Bint Saeed',
    brandTitle: 'Van Al Talli naar hedendaagse mode',
    brandP1:
      'Al Talli vertalen naar Bint Saeed was veeleisender dan het eerst leek. Het traditionele werk is al buitengewoon rijk; die rijkdom letterlijk reproduceren op een hedendaags stuk zou te letterlijk hebben gevoeld, terwijl te ver reduceren het karakter dreigde te verliezen dat ons dichterbij liet kijken.',
    brandP2:
      'We keerden terug naar de lijnen zelf: slanke metallieke draden naast elkaar, aanwezigheid door herhaling, licht dat beweging vangt. In plaats van een traditioneel kledingstuk te herscheppen, kon het Huis iets van die beeldtaal in een andere vorm laten voortbestaan.',
    brandP3:
      'Na verloop van tijd werden die lijnen een van de codes van het huis — op hedendaagse silhouetten soms meteen herkenbaar, soms slechts een spoor. Het doel was nooit het verleden modern te laten lijken, maar iets cultureel rijks in het heden te laten binnenkomen terwijl de oorsprong nog voelbaar blijft.',
    brandP4:
      'Zo wordt Al Talli meer dan een referentie uit het verleden: een voortdurend gesprek tussen vrouwen, kleding, ambacht en plaats — een gouden draad die voorbij Abu Dhabi kan reizen zonder precies te blijven wat hij was.',
    journalNote:
      'Het bredere essay vanuit de House of Artisans — The Golden Thread Between Women — verschijnt in The Bint Saeed Journal.',
    journalCta: 'Lees het Journal-essay',
    shopCta: 'Shop Al Talli-stukken',
    imageAltHero:
      'Creme thobe met gouden Al Talli-borduursel bij de hals — Emiratisch erfgoed, Abu Dhabi',
    imageAltStory:
      'Gouden Al Talli-kralenmotief op cremestof — Emiratisch borduurdetail',
    imageAltLoom:
      'Kajujah met gouden Al Talli-band en houten spoelen in tentoonstelling — Abu Dhabi',
    imageAltStrands:
      'Oranje-gouden metallieke Al Talli-linten — Emiratisch erfgoedambacht',
    imageAltBobbins:
      'Houten spoelen met gouden metaaldraad aan een Al Talli-kajujah — Emiratisch ambacht',
    imageAltAbuDhabi:
      'Al Talli-kajujah tentoonstelling met gouden band en spoelen — cultureel erfgoed Abu Dhabi',
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
      'Al Talli é um ofício decorativo emirati tradicional de faixas intricadas de fio metálico e colorido, trabalhadas à mão e historicamente usadas para adornar a roupa feminina nos Emirados Árabes Unidos. As suas linhas podem sentir-se familiares ainda antes de se conhecer o nome — ouro e prata a traçar decotes e mangas com a quieta certeza de uma prática que as mulheres passaram de mão em mão, geração após geração.',
    storyP2:
      'Tradicionalmente, Al Talli nasce do entrelaçar de algodão ou seda com fios metálicos dourados ou prateados. De longe as faixas parecem delicadas; de perto, bobinas de madeira, almofadas e fios soltos revelam quão lentamente se reúne o acabamento — saber conservado no motivo e no ritmo do fazer.',
    storyP3:
      'Em 2022, as competências tradicionais do bordado Al Talli nos EAU foram inscritas na Lista Representativa do Património Cultural Imaterial da UNESCO. O que torna a história especialmente viva em Abu Dhabi é que a preservação não se limita a um arquivo: em lugares como a House of Artisans o ofício continua praticado, documentado e partilhado.',
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
      'Em Abu Dhabi, Al Talli ainda se encontra como prática viva. Na House of Artisans em Qasr Al Hosn — e através de trabalho cultural mais amplo no emirado — os ofícios tradicionais emiratis são documentados, praticados e partilhados, para que os visitantes encontrem não só as peças acabadas mas as mulheres, os materiais e o tempo atrás delas.',
    abuDhabiP2:
      'Numa capital conhecida por olhar para a frente, há uma força quieta em manter o saber de gerações anteriores como parte da vida cultural. Para a Bint Saeed, essa continuidade entre património e vestir contemporâneo é o solo de onde nasce o design.',
    brandEyebrow: 'Bint Saeed',
    brandTitle: 'De Al Talli à moda contemporânea',
    brandP1:
      'Traduzir Al Talli para a Bint Saeed foi mais exigente do que parecia. O trabalho tradicional já é extraordinariamente rico; reproduzir literalmente essa riqueza numa peça contemporânea teria soado demasiado literal, enquanto reduzi-la demais teria arriscado perder o carácter que nos fez olhar de perto.',
    brandP2:
      'Voltámos às linhas em si: fios metálicos delgados lado a lado, presença pela repetição, luz que capta o movimento. Em vez de recriar uma peça tradicional, a Maison podia deixar que algo dessa linguagem visual continuasse noutra forma.',
    brandP3:
      'Com o tempo essas linhas tornaram-se um dos códigos da maison — aparecendo em silhuetas contemporâneas de modos por vezes imediatamente reconhecíveis, por vezes só um rasto. O objectivo nunca foi tornar o passado moderno, mas deixar que algo culturalmente rico entre no presente enquanto a sua origem ainda se sente.',
    brandP4:
      'Assim Al Talli torna-se mais do que uma referência do passado: uma conversa contínua entre mulheres, roupa, ofício e lugar — um fio de ouro que pode viajar para além de Abu Dhabi sem permanecer exactamente como era.',
    journalNote:
      'O ensaio mais amplo da House of Artisans — The Golden Thread Between Women — surge no The Bint Saeed Journal.',
    journalCta: 'Ler o ensaio do Journal',
    shopCta: 'Comprar peças Al Talli',
    imageAltHero:
      'Thobe creme com bordado Al Talli dourado no decote — ofício patrimonial emirati, Abu Dhabi',
    imageAltStory:
      'Motivo Al Talli em missangas douradas sobre tecido creme — detalhe de bordado emirati',
    imageAltLoom:
      'Kajujah com trança Al Talli dourada e bobinas de madeira em exposição — Abu Dhabi',
    imageAltStrands:
      'Fitas Al Talli laranja e ouro metálico — ofício patrimonial emirati',
    imageAltBobbins:
      'Bobinas de madeira com fio metálico dourado pendentes de uma kajujah Al Talli — ofício emirati',
    imageAltAbuDhabi:
      'Exposição de kajujah Al Talli com trança dourada e bobinas — património cultural em Abu Dhabi',
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
      'Al Talli adalah kerajinan dekoratif Emirati tradisional berupa pita benang logam dan berwarna yang rumit, dikerjakan dengan tangan dan secara historis digunakan untuk menghias pakaian perempuan di Uni Emirat Arab. Garis-garisnya dapat terasa akrab bahkan sebelum namanya dikenal — emas dan perak menelusuri leher dan lengan dengan kepastian tenang dari praktik yang diwariskan perempuan dari tangan ke tangan lintas generasi.',
    storyP2:
      'Secara tradisional, Al Talli dibuat dengan menjalin kapas atau sutra bersama benang logam emas atau perak. Dari jauh pita tampak lembut; dari dekat kumparan kayu, bantal, dan helai tunggal memperlihatkan betapa lambat tepian rumit itu terkumpul — pengetahuan yang tersimpan dalam motif maupun ritme membuat.',
    storyP3:
      'Pada 2022, keterampilan tradisional sulaman Al Talli di UEA dimasukkan ke dalam Daftar Representatif Warisan Budaya Takbenda UNESCO. Yang membuat kisah ini khususnya hidup di Abu Dhabi adalah pelestarian tidak terbatas pada arsip: di tempat seperti House of Artisans, kerajinan tetap dipraktikkan, didokumentasikan, dan dibagikan.',
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
      'Di Abu Dhabi, Al Talli masih dapat dijumpai sebagai praktik yang hidup. Di House of Artisans di Qasr Al Hosn — dan melalui kerja budaya yang lebih luas di emirat — kerajinan tradisional Emirati didokumentasikan, dipraktikkan, dan dibagikan, sehingga pengunjung menemui bukan hanya karya jadi tetapi perempuan, bahan, dan waktu di baliknya.',
    abuDhabiP2:
      'Di ibu kota yang dikenal menatap ke depan, ada kekuatan tenang dalam menjaga pengetahuan generasi sebelumnya sebagai bagian dari kehidupan budaya. Bagi Bint Saeed, kesinambungan antara warisan dan berpakaian kontemporer adalah tanah tempat desain bermula.',
    brandEyebrow: 'Bint Saeed',
    brandTitle: 'Dari Al Talli ke mode kontemporer',
    brandP1:
      'Menerjemahkan Al Talli ke Bint Saeed lebih menuntut daripada yang semula tampak. Karya tradisional sudah luar biasa kaya; mereproduksi kekayaan itu secara harfiah pada busana kontemporer akan terasa terlalu harfiah, sementara menguranginya terlalu jauh berisiko kehilangan karakter yang membuat kami menatap lebih dekat.',
    brandP2:
      'Kami kembali ke garis itu sendiri: benang logam ramping berdampingan, kehadiran melalui pengulangan, cahaya yang menangkap gerak. Alih-alih menciptakan ulang busana tradisional, Maison dapat membiarkan sesuatu dari bahasa visual itu berlanjut dalam bentuk lain.',
    brandP3:
      'Seiring waktu garis-garis itu menjadi salah satu kode rumah — muncul pada siluet kontemporer dengan cara yang terkadang langsung dikenali, terkadang hanya jejak. Tujuannya bukan membuat masa lalu tampak modern, melainkan membiarkan sesuatu yang kaya secara budaya masuk ke masa kini sementara asal-usulnya masih terasa.',
    brandP4:
      'Dengan demikian Al Talli menjadi lebih dari rujukan masa lalu: percakapan yang berkelanjutan antara perempuan, pakaian, kerajinan, dan tempat — benang emas yang dapat pergi melampaui Abu Dhabi tanpa tetap persis seperti dulu.',
    journalNote:
      'Esai yang lebih lengkap dari House of Artisans — The Golden Thread Between Women — terbit di The Bint Saeed Journal.',
    journalCta: 'Baca esai Journal',
    shopCta: 'Belanja potongan Al Talli',
    imageAltHero:
      'Thobe krem dengan sulaman Al Talli emas di leher — kerajinan warisan Emirati, Abu Dhabi',
    imageAltStory:
      'Motif manik emas Al Talli pada kain krem — detail sulaman Emirati',
    imageAltLoom:
      'Kajujah dengan kepang Al Talli emas dan kumparan kayu dalam pameran — Abu Dhabi',
    imageAltStrands:
      'Pita Al Talli oranye-emas metalik — kerajinan warisan Emirati',
    imageAltBobbins:
      'Kumparan kayu dengan benang metalik emas tergantung di kajujah Al Talli — kerajinan Emirati',
    imageAltAbuDhabi:
      'Pameran kajujah Al Talli dengan kepang emas dan kumparan — warisan budaya Abu Dhabi',
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
      'Al Talli ialah kraf hiasan Emirati tradisional jalur benang logam dan berwarna yang rumit, dikerjakan dengan tangan dan secara sejarah digunakan untuk menghias pakaian wanita di Emiriah Arab Bersatu. Garisannya boleh terasa akrab bahkan sebelum namanya diketahui — emas dan perak menjejak leher dan lengan dengan kepastian tenang amalan yang diwarisi wanita dari tangan ke tangan merentas generasi.',
    storyP2:
      'Secara tradisional, Al Talli dicipta dengan menjalin kapas atau sutera bersama benang logam emas atau perak. Dari jauh jalur kelihatan lembut; dari dekat kekili kayu, bantal, dan helai tunggal mendedahkan betapa perlahan tepi rumit itu terkumpul — pengetahuan yang dipelihara dalam motif dan irama membuat.',
    storyP3:
      'Pada 2022, kemahiran tradisional sulaman Al Talli di UAE disenaraikan dalam Senarai Representatif Warisan Budaya Tidak Ketara UNESCO. Apa yang menjadikan kisah ini khususnya hidup di Abu Dhabi ialah pemeliharaan tidak terhad kepada arkib: di tempat seperti House of Artisans, kraf kekal diamalkan, didokumentasikan, dan dikongsi.',
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
      'Di Abu Dhabi, Al Talli masih boleh dijumpai sebagai amalan yang hidup. Di House of Artisans di Qasr Al Hosn — dan melalui kerja budaya yang lebih luas di emiriah — kraf tradisional Emirati didokumentasikan, diamalkan, dan dikongsi, supaya pengunjung menemui bukan sahaja karya siap tetapi wanita, bahan, dan masa di belakangnya.',
    abuDhabiP2:
      'Dalam ibu kota yang dikenali kerana memandang ke hadapan, ada kekuatan tenang dalam mengekalkan pengetahuan generasi terdahulu sebagai sebahagian daripada kehidupan budaya. Bagi Bint Saeed, kesinambungan antara warisan dan berpakaian kontemporari ialah tanah tempat reka bentuk bermula.',
    brandEyebrow: 'Bint Saeed',
    brandTitle: 'Dari Al Talli ke fesyen kontemporari',
    brandP1:
      'Menterjemah Al Talli ke Bint Saeed lebih menuntut daripada yang mula-mula kelihatan. Kerja tradisional sudah luar biasa kaya; menghasilkan semula kekayaan itu secara harfiah pada busana kontemporari akan terasa terlalu harfiah, manakala mengurangkannya terlalu jauh berisiko kehilangan watak yang membuat kami menatap lebih dekat.',
    brandP2:
      'Kami kembali kepada garis itu sendiri: benang logam langsing berdampingan, kehadiran melalui pengulangan, cahaya yang menangkap gerak. Daripada mencipta semula pakaian tradisional, Maison boleh membiarkan sesuatu daripada bahasa visual itu berterusan dalam bentuk lain.',
    brandP3:
      'Dari masa ke masa garis-garis itu menjadi salah satu kod rumah — muncul pada siluet kontemporari dengan cara yang kadang-kadang terus dikenali, kadang-kadang hanya kesan. Matlamatnya bukan membuat masa lalu kelihatan moden, tetapi membiarkan sesuatu yang kaya secara budaya masuk ke masa kini sementara asal-usulnya masih terasa.',
    brandP4:
      'Demikian Al Talli menjadi lebih daripada rujukan masa lalu: perbualan berterusan antara wanita, pakaian, kraf, dan tempat — benang emas yang boleh pergi melampaui Abu Dhabi tanpa kekal tepat seperti dulu.',
    journalNote:
      'Esei yang lebih penuh dari House of Artisans — The Golden Thread Between Women — terbit dalam The Bint Saeed Journal.',
    journalCta: 'Baca esei Journal',
    shopCta: 'Beli potongan Al Talli',
    imageAltHero:
      'Thobe krim dengan sulaman Al Talli emas di leher — kraf warisan Emirati, Abu Dhabi',
    imageAltStory:
      'Motif manik emas Al Talli pada fabrik krim — perincian sulaman Emirati',
    imageAltLoom:
      'Kajujah dengan jalinan Al Talli emas dan kekili kayu dalam pameran — Abu Dhabi',
    imageAltStrands:
      'Reben Al Talli oren-emas metalik — kraf warisan Emirati',
    imageAltBobbins:
      'Kekili kayu dengan benang metalik emas tergantung pada kajujah Al Talli — kraf Emirati',
    imageAltAbuDhabi:
      'Pameran kajujah Al Talli dengan jalinan emas dan kekili — warisan budaya Abu Dhabi',
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
