import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductPdpContent } from '@/data/productPdpContent'
import { SOHO_SET_INTRO_EN } from '@/data/sohoSetPdpIntro'
import {
  SOHO_SET_CARE,
  SOHO_SET_COMPOSITION,
  SOHO_SET_COLOUR,
  SOHO_SET_FIT_AND_SIZE,
  SOHO_SET_ORIGIN,
  buildSohoSetDetailGroups,
} from '@/data/sohoSetPdpDetails'
import type { PdpIntroParagraph } from '@/lib/products/pdpIntroRich'
import {
  THE_CODES_AL_TALLI_HREF,
  THE_CODES_KNOTTED_LINES_HREF,
  pdpIntroParagraphsToPlainText,
} from '@/lib/products/pdpIntroRich'
import type { ProductFaqItem } from '@/lib/products/productSchemaMeta'
import { getSohoSetPdpFaq as getSohoSetFaq } from '@/lib/products/sohoSetFaqI18n'
import { SOHO_SLUG } from '@/lib/products/secondaryCatalogSchemaLocalePacks'

export const SOHO_SET_SLUG = SOHO_SLUG

function trimParagraph(before: string, afterKnotted: string, afterAlTalli: string): PdpIntroParagraph {
  return [
    { type: 'text', value: before },
    {
      type: 'codeLink',
      label: 'Knotted Line',
      href: THE_CODES_KNOTTED_LINES_HREF,
      bold: true,
    },
    { type: 'text', value: afterKnotted },
    {
      type: 'codeLink',
      label: 'Al Talli',
      href: THE_CODES_AL_TALLI_HREF,
      bold: true,
    },
    { type: 'text', value: afterAlTalli },
  ]
}

const INTRO_BY_LOCALE: Record<AppLocale, PdpIntroParagraph[]> = {
  en: SOHO_SET_INTRO_EN,
  ar: [
    [{ type: 'text', value: 'الطقم الذي يستحق مكاناً في خزانتك.' }],
    [
      {
        type: 'text',
        value:
          'بعض القطع صُممت لمناسبة واحدة. وأخرى تصبح جزءاً من أسلوب حياتك. مجموعة Soho تنتمي إلى الفئة الثانية.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'صُنعت لنساء ذوات أسلوب حياة متطوّر، تجمع مجموعة Soho بين راحة أزياء السفر الفاخرة ودقة التفصيل المعاصر. تبدو شبه رياضية في راحتها، وأنيقة بلا لبس في مظهرها. سواء مع حذاء رياضي لقهوة الصباح في دبي، أو أثناء التنقل بين المدن، أو مع كعب عالٍ لعشاء في لندن — تتكيف بسهولة مع مسار يومك.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'مصنوعة من كريب فاخر انسيابي، يتدلّى القميص الواسع بشكل طبيعي على الجسم بينما تخلق بنطال بالازو واسع الساق حركة رشيقة مع كل خطوة. ارتدِ القميص فضفاضاً لسيلويت بلا جهد، أو أدخله في الخصر لمظهر أكثر تفصيلاً، أو اربطه عند الخصر لإطلالة مختلفة تماماً. طقم واحد. إمكانيات لا حصر لها.',
      },
    ],
    trimParagraph(
      'متوفر بالأسود العميق والكحلي — كل تفصيلة وُضعت بعناية. جيبان وظيفيان على الصدر وجيبان جانبيان مخفيان في البنطال يجمعان العملية اليومية مع تصميم راقٍ، لتبقي هاتفك وأحمر الشفاه أو ضرورياتك الصغيرة معك دون استخدام يديك. منتهٍ بأزرار ',
      ' الذهبية المميزة من Bint Saeed وتفاصيل ',
      ' المميزة التي تمتد بأناقة على جانبي البنطال، تحمل مجموعة Soho أحد أعز الحرف التقليدية في دولة الإمارات العربية المتحدة إلى أزياء النساء المعاصرة.',
    ),
    [
      {
        type: 'text',
        value:
          'معترف به من اليونسكو كتراث ثقافي غير مادي، التلي من أشهر الحرف الإماراتية التقليدية في دولة الإمارات العربية المتحدة. في Bint Saeed، نعيد تفسير هذا الإرث الرائع عبر تصميم معاصر، ليُقدَّر جزء مهم من الثقافة الإماراتية من المرأة اليوم.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'سواء في أبوظبي أو دبي أو الدوحة أو الرياض أو مدينة الكويت أو مسقط أو لندن أو باريس أو ميلانو أو تورنتو أو سنغافورة، تعكس مجموعة Soho فلسفة Bint Saeed في حمل التراث إلى الأمام عبر تصميم خالد. طقم صُنع ليسافر بسهولة مع المرأة التي ترتديه، فيبقى أنيقاً أينما تأخذها الحياة.',
      },
    ],
  ],
  fr: [
    [{ type: 'text', value: 'Le set qui mérite sa place dans votre garde-robe.' }],
    [
      {
        type: 'text',
        value:
          'Certaines pièces sont conçues pour une seule occasion. D’autres deviennent partie intégrante de votre vie. Le Soho Set appartient à cette seconde catégorie.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Créé pour les femmes au mode de vie évolutif, le Soho Set allie l’aisance décontractée du travelwear de luxe au raffinement du tailoring contemporain. Presque sportif dans son confort, il reste indéniablement élégant. Avec des baskets pour un café matinal à Dubaï, en voyage entre villes, ou avec des talons pour un dîner à Londres — il s’adapte sans effort.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Coupé dans un crêpe premium magnifiquement fluide, la chemise oversize drape naturellement sur le corps tand que le pantalon palazzo wide-leg crée un mouvement gracieux à chaque pas. Portez la chemise loose, rentrez-la pour un look plus structuré, ou nouez-la à la taille pour une silhouette entièrement différente. Un set. Des possibilités infinies.',
      },
    ],
    trimParagraph(
      'Disponible en Noir profond et Bleu marine, chaque détail a été soigneusement pensé. Deux poches poitrine fonctionnelles et deux poches latérales dissimulées dans le pantalon allient praticité et design raffiné. Finitions avec les boutons dorés signature ',
      ' de Bint Saeed et la ',
      ' distinctive du house qui court élégamment le long des coutures latérales du pantalon — le Soho Set porte l’un des plus précieux savoir-faire traditionnels des Émirats arabes unis dans la mode féminine contemporaine.',
    ),
    [
      {
        type: 'text',
        value:
          'Reconnue par l’UNESCO comme patrimoine culturel immatériel, l’Al Talli est l’une des plus célébrées traditions artisanales émiraties. Chez Bint Saeed, nous réinterprétons ce patrimoine remarquable par un design contemporain, pour que la femme d’aujourd’hui puisse en apprécier une part essentielle de la culture émiratie.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Qu’il soit porté à Abou Dabi, Dubaï, Doha, Riyad, Koweït, Mascate, Londres, Paris, Milan, Toronto ou Singapour, le Soho Set reflète la philosophie de Bint Saeed : porter l’héritage vers l’avenir par un design intemporel — créé pour voyager avec la femme qui le porte.',
      },
    ],
  ],
  it: [
    [{ type: 'text', value: 'Il set che si guadagna un posto nel guardaroba.' }],
    [
      {
        type: 'text',
        value:
          'Alcuni capi sono pensati per un’occasione sola. Altri diventano parte del modo in cui vivi. Il Soho Set appartiene a questi ultimi.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Creato per donne con uno stile di vita in evoluzione, il Soho Set unisce la comodità rilassata del luxury travelwear al rigore del tailoring contemporaneo. Quasi sportivo nel comfort, inequivocabilmente elegante nell’aspetto — con sneakers a Dubai, in viaggio tra città, o con i tacchi a cena a Londra.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Tagliato in un crepe premium splendidamente fluido, la camicia oversize drappeggia naturalmente sul corpo mentre i pantaloni palazzo a gamba larga creano movimento ad ogni passo. Indossala loose, infilala nel waistband, o annodala in vita. Un set. Infinite possibilità.',
      },
    ],
    trimParagraph(
      'Disponibile in Nero profondo e Blu navy — ogni dettaglio è stato considerato con cura. Due tasche sul petto e due tasche laterali nascoste nei pantaloni uniscono praticità e design raffinato. Finito con i bottoni dorati signature ',
      ' di Bint Saeed e la ',
      ' distintiva della maison lungo i fianchi del pantalone, il Soho Set porta uno dei più preziosi mestieri tradizionali degli Emirati Arabi Uniti nella moda femminile contemporanea.',
    ),
    [
      {
        type: 'text',
        value:
          'Riconosciuto dall’UNESCO come patrimonio culturale immateriale, l’Al Talli è una delle più celebrate tradizioni artigianali emiratine. In Bint Saeed reinterpretiamo questo straordinario patrimonio attraverso il design contemporaneo.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Indossato ad Abu Dhabi, Dubai, Doha, Riyadh, Kuwait City, Muscat, Londra, Parigi, Milano, Toronto o Singapore, il Soho Set riflette la filosofia di Bint Saeed di portare avanti l’eredità attraverso un design senza tempo.',
      },
    ],
  ],
  es: [
    [{ type: 'text', value: 'El set que se gana su lugar en el armario.' }],
    [
      {
        type: 'text',
        value:
          'Algunas piezas están diseñadas para una sola ocasión. Otras se convierten en parte de cómo vives. El Soho Set pertenece a estas últimas.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Creado para mujeres con un estilo de vida en evolución, el Soho Set combina la comodidad relajada del travelwear de lujo con el refinamiento del sastrería contemporánea. Casi deportivo en su confort, inequívocamente elegante — con zapatillas en Dubái, en viaje entre ciudades, o con tacones en Londres.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Cortado en un crepé premium maravillosamente fluido, la camisa oversize cae con naturalidad mientras los pantalones palazzo de pierna ancha crean movimiento gracioso. Llévala suelta, metida o anudada en la cintura. Un set. Posibilidades infinitas.',
      },
    ],
    trimParagraph(
      'Disponible en Negro profundo y Azul marino, cada detalle ha sido cuidadosamente considerado. Dos bolsillos funcionales en el pecho y dos bolsillos laterales ocultos en los pantalones. Acabado con los botones dorados signature ',
      ' de Bint Saeed y el ',
      ' distintivo de la casa a lo largo de los costados del pantalón — el Soho Set lleva una de las artesanías tradicionales más preciadas de los Emiratos Árabes Unidos a la moda femenina contemporánea.',
    ),
    [
      {
        type: 'text',
        value:
          'Reconocido por la UNESCO como Patrimonio Cultural Inmaterial, el Al Talli es una de las artesanías tradicionales emiratíes más celebradas. En Bint Saeed reinterpretamos este patrimonio mediante diseño contemporáneo.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Ya sea en Abu Dabi, Dubái, Doha, Riad, Kuwait, Mascate, Londres, París, Milán, Toronto o Singapur, el Soho Set refleja la filosofía de Bint Saeed de llevar el patrimonio hacia adelante mediante un diseño atemporal.',
      },
    ],
  ],
  ru: [
    [{ type: 'text', value: 'Комплект, который заслуживает место в вашем гардеробе.' }],
    [
      {
        type: 'text',
        value:
          'Некоторые вещи созданы для одного случая. Другие становятся частью вашей жизни. Soho Set относится ко вторым.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Создан для женщин с меняющимся образом жизни, Soho Set сочетает расслабленный комфорт luxury travelwear с изысканностью современного кроя. Почти спортивный в комфорте, безошибочно элегантный — с кроссовками в Дубае, в пути между городами или с каблуками в Лондоне.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Из прекрасно текучего премиального крепа: оверсайз рубашка естественно драпируется, а широкие брюки-палazzo создают грациозное движение. Носите свободно, заправьте или завяжите на талии. Один комплект. Бесконечные возможности.',
      },
    ],
    trimParagraph(
      'Доступен в глубоком чёрном и тёмно-синем — каждая деталь продумана. Два функциональных нагрудных кармана и два скрытых боковых в брюках. Завершён золотистыми пуговицами ',
      ' от Bint Saeed и фирменной отделкой ',
      ' вдоль боковых швов брюк — Soho Set приносит одно из самых ценных традиционных ремёсел ОАЭ в современную женскую моду.',
    ),
    [
      {
        type: 'text',
        value:
          'Признанный ЮНЕСКО нематериальным культурным наследием, Al Talli — одно из самых знаменитых традиционных эмиратских ремёсел. В Bint Saeed мы переосмысливаем это наследие через современный дизайн.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'В Абу-Даби, Дубае, Дохе, Эр-Рияде, Кувейте, Маскате, Лондоне, Париже, Милане, Торонто или Сингапуре — Soho Set отражает философию Bint Saeed нести наследие вперёд через вневременной дизайн.',
      },
    ],
  ],
  zh: [
    [{ type: 'text', value: '值得在衣橱中占有一席之地的套装。' }],
    [
      {
        type: 'text',
        value: '有些单品为单一场合而设计，有些则融入您的生活方式。Soho 套装属于后者。',
      },
    ],
    [
      {
        type: 'text',
        value:
          '为生活方式不断演进的现代女性而创，Soho 套装将奢华旅行装的轻松舒适与当代剪裁的精致融为一体。舒适近乎运动，外观却毋庸置疑地优雅——迪拜晨间咖啡配运动鞋、城际旅途，或伦敦晚宴配高跟鞋，皆可从容适应。',
      },
    ],
    [
      {
        type: 'text',
        value:
          '选用柔美飘逸的高端绉绸，宽松衬衫自然垂坠于身，阔腿 palazzo 长裤令每一步灵动优雅。可宽松穿着、塞入腰头或腰间打结——一套造型，无限可能。',
      },
    ],
    trimParagraph(
      '提供深黑色与海军蓝，每个细节皆经深思熟虑。两件实用胸袋与长裤隐藏侧缝口袋，兼顾日常实用与精致设计。饰以 Bint Saeed 标志性金色调 ',
      ' 纽扣与沿裤侧优雅延伸的 ',
      ' 饰边，Soho 套装将阿联酋最珍贵的传统工艺带入当代女装。',
    ),
    [
      {
        type: 'text',
        value:
          'Al Talli 为联合国教科文组织非物质文化遗产，是阿联酋最受推崇的传统手工艺之一。在 Bint Saeed，我们通过当代设计重新诠释这一卓越传承。',
      },
    ],
    [
      {
        type: 'text',
        value:
          '无论在阿布扎比、迪拜、多哈、利雅得、科威特城、马斯喀特、伦敦、巴黎、米兰、多伦多或新加坡，Soho 套装体现 Bint Saeed 以永恒设计传承遗产的理念，伴您优雅出行。',
      },
    ],
  ],
  de: [
    [{ type: 'text', value: 'Das Set, das seinen Platz in Ihrer Garderobe verdient.' }],
    [
      {
        type: 'text',
        value:
          'Manche Stücke sind für einen Anlass gemacht. Andere werden Teil Ihres Lebens. Das Soho Set gehört zu Letzterem.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Für Frauen mit sich wandelndem Lebensstil verbindet das Soho Set die entspannte Leichtigkeit von Luxury Travelwear mit der Raffinesse zeitgenössischen Tailorings — mit Sneakern in Dubai, auf Reisen oder mit Heels in London.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Aus wunderbar fließendem Premium-Krepp: das Oversize-Hemd drapiert natürlich, die weiten Palazzo-Hosen schaffen graziöse Bewegung. Loose, in den Bund gesteckt oder an der Taille gebunden. Ein Set. Unendliche Möglichkeiten.',
      },
    ],
    trimParagraph(
      'In Tiefschwarz und Marineblau — jedes Detail durchdacht. Zwei Brusttaschen und zwei versteckte Seitennaht-Taschen in der Hose. Mit goldfarbenen ',
      '-Knöpfen von Bint Saeed und dem charakteristischen ',
      '-Besatz entlang der Hosen-Nahtseiten trägt das Soho Set eines der wertvollsten traditionellen Handwerke der VAE in die zeitgenössische Damenmode.',
    ),
    [
      {
        type: 'text',
        value:
          'Von der UNESCO als immaterielles Kulturerbe anerkannt, ist Al Talli eines der gefeiertsten traditionellen emiratischen Handwerke. Bei Bint Saeed interpretieren wir dieses Erbe durch zeitgenössisches Design neu.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'In Abu Dhabi, Dubai, Doha, Riad, Kuwait, Maskat, London, Paris, Mailand, Toronto oder Singapur — das Soho Set trägt Bint Saeeds Philosophie, Erbe durch zeitloses Design weiterzuführen.',
      },
    ],
  ],
  nl: [
    [{ type: 'text', value: 'De set die zijn plaats in uw garderobe verdient.' }],
    [
      {
        type: 'text',
        value:
          'Sommige stukken zijn voor één gelegenheid ontworpen. Anderen worden deel van hoe u leeft. De Soho Set hoort bij die laatste categorie.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Gemaakt voor vrouwen met een evoluerende levensstijl, combineert de Soho Set het ontspannen gemak van luxury travelwear met de verfijning van eigentijds maatwerk — met sneakers in Dubai, onderweg tussen steden, of met hakken in Londen.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Gesneden uit prachtig vloeiend premium crêpe: het oversized overhemd drapeert natuurlijk, de wide-leg palazzo-broek creëert gracieuze beweging. Los, in de tailleband of geknoopt op de taille. Eén set. Eindeloze mogelijkheden.',
      },
    ],
    trimParagraph(
      'In diepzwart en marineblauw — elk detail doordacht. Twee borstzakken en twee verborgen zijnaadzakken in de broek. Afgewerkt met goudkleurige ',
      '-knopen van Bint Saeed en het kenmerkende ',
      '-weefwerk langs de zijkanten van de broek draagt de Soho Set een van de meest gekoesterde traditionele ambachten van de VAE de hedendaagse damesmode in.',
    ),
    [
      {
        type: 'text',
        value:
          'Erkend door UNESCO als immaterieel cultureel erfgoed is Al Talli een van de meest gevierde traditionele Emiratische ambachten. Bij Bint Saeed herinterpreteren we dit erfgoed via eigentijds design.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'In Abu Dhabi, Dubai, Doha, Riyad, Koeweit, Muscat, Londen, Parijs, Milaan, Toronto of Singapore — de Soho Set draagt Bint Saeeds filosofie van erfgoed door tijdloos design.',
      },
    ],
  ],
  pt: [
    [{ type: 'text', value: 'O set que conquista o seu lugar no guarda-roupa.' }],
    [
      {
        type: 'text',
        value:
          'Algumas peças são feitas para uma única ocasião. Outras tornam-se parte da forma como vive. O Soho Set pertence a estas últimas.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Criado para mulheres com um estilo de vida em evolução, o Soho Set combina o conforto descontraído do travelwear de luxo com o refinamento do tailoring contemporâneo — com ténis no Dubai, em viagem entre cidades, ou com saltos em Londres.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Cortado em crepe premium magnificamente fluido, a camisa oversized drapeia naturalmente enquanto as calças palazzo de perna larga criam movimento gracioso. Use solta, metida ou amarrada na cintura. Um set. Possibilidades infinitas.',
      },
    ],
    trimParagraph(
      'Em Preto profundo e Azul-marinho — cada detalhe foi cuidadosamente considerado. Dois bolsos no peito e dois bolsos laterais ocultos nas calças. Acabado com botões dourados ',
      ' da Bint Saeed e o ',
      ' distintivo da casa ao longo dos lados das calças, o Soho Set leva um dos artesanatos tradicionais mais preciosos dos Emirados Árabes Unidos à moda feminina contemporânea.',
    ),
    [
      {
        type: 'text',
        value:
          'Reconhecido pela UNESCO como Património Cultural Imaterial, o Al Talli é uma das artes artesanais tradicionais emiratis mais celebradas. Na Bint Saeed reinterpretamos este património através de design contemporâneo.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Em Abu Dhabi, Dubai, Doha, Riade, Kuwait, Mascate, Londres, Paris, Milão, Toronto ou Singapura — o Soho Set reflete a filosofia da Bint Saeed de levar o património adiante através de design intemporal.',
      },
    ],
  ],
  id: [
    [{ type: 'text', value: 'Set yang layak mendapat tempat di garderobe Anda.' }],
    [
      {
        type: 'text',
        value:
          'Beberapa potong dirancang untuk satu kesempatan. Yang lain menjadi bagian cara Anda hidup. Soho Set termasuk yang terakhir.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Dibuat untuk wanita dengan gaya hidup yang berkembang, Soho Set menggabungkan kenyamanan santai luxury travelwear dengan kehalusan tailoring kontemporer — dengan sneakers di Dubai, dalam perjalanan antarkota, atau heels di London.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Dipotong dari krepe premium yang mengalir indah, kemeja oversized drape secara alami sementara celana palazzo wide-leg menciptakan gerakan anggun. Pakai longgar, tuck in, atau ikat di pinggang. Satu set. Kemungkinan tak terbatas.',
      },
    ],
    trimParagraph(
      'Tersedia dalam Hitam pekat dan Navy Blue — setiap detail dipertimbangkan dengan saksama. Dua saku dada fungsional dan dua saku samping tersembunyi di celana. Dihiasi kancing emas signature ',
      ' Bint Saeed dan trim ',
      ' khas house di sepanjang sisi celana, Soho Set membawa salah satu kerajinan tradisional paling berharga UEA ke busana wanita kontemporer.',
    ),
    [
      {
        type: 'text',
        value:
          'Diakui UNESCO sebagai Warisan Budaya Takbenda, Al Talli adalah salah satu kerajinan tradisional Emirati paling terkenal. Di Bint Saeed kami menafsirkan kembali warisan ini melalui desain kontemporer.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Di Abu Dhabi, Dubai, Doha, Riyadh, Kuwait City, Muscat, London, Paris, Milan, Toronto, atau Singapore — Soho Set mencerminkan filosofi Bint Saeed membawa warisan melalui desain abadi.',
      },
    ],
  ],
  ms: [
    [{ type: 'text', value: 'Set yang layak mendapat tempat dalam almari anda.' }],
    [
      {
        type: 'text',
        value:
          'Sesetengah potongan direka untuk satu majlis. Yang lain menjadi sebahagian cara anda hidup. Soho Set tergolong dalam yang kedua.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Dicipta untuk wanita dengan gaya hidup yang berkembang, Soho Set menggabungkan keselesaan santai luxury travelwear dengan kehalusan jahitan kontemporari — dengan sneakers di Dubai, dalam perjalanan antara bandar, atau heels di London.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Dipotong daripada krepe premium yang mengalir indah, kemeja oversized drape secara semula jadi manakala seluar palazzo kaki lebar mencipta pergerakan anggun. Pakai longgar, tuck in, atau ikat di pinggang. Satu set. Kemungkinan tanpa had.',
      },
    ],
    trimParagraph(
      'Tersedia dalam Hitam pekat dan Navy Blue — setiap butiran dipertimbangkan dengan teliti. Dua poket dada fungsian dan dua poket sisi tersembunyi pada seluar. Dihiasi butang emas signature ',
      ' Bint Saeed dan hiasan ',
      ' khas rumah di sepanjang sisi seluar, Soho Set membawa salah satu kraf tradisional paling berharga UAE ke fesyen wanita kontemporari.',
    ),
    [
      {
        type: 'text',
        value:
          'Diiktiraf UNESCO sebagai Warisan Budaya Tidak Ketara, Al Talli ialah salah satu kraf artisanal tradisional Emirati paling terkenal. Di Bint Saeed kami mentafsir semula warisan ini melalui reka bentuk kontemporari.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Sama ada di Abu Dhabi, Dubai, Doha, Riyadh, Kuwait City, Muscat, London, Paris, Milan, Toronto atau Singapore — Soho Set mencerminkan falsafah Bint Saeed membawa warisan melalui reka bentuk abadi.',
      },
    ],
  ],
}

export function isSohoSetSlug(slug: string): boolean {
  return slug.toLowerCase() === SOHO_SET_SLUG
}

export function getSohoSetIntro(locale: AppLocale = 'en'): PdpIntroParagraph[] {
  return INTRO_BY_LOCALE[locale] ?? INTRO_BY_LOCALE.en
}

export function getSohoSetPdpFaq(locale: AppLocale = 'en'): ProductFaqItem[] {
  return getSohoSetFaq(locale)
}

export function buildSohoSetPdpContent(locale: AppLocale = 'en'): ProductPdpContent {
  const intro = buildSohoSetPdpIntro(locale)
  return {
    ...intro,
    productDetails: [...SOHO_SET_COLOUR],
    productDetailGroups: buildSohoSetDetailGroups(locale),
    compositionDetails: [...SOHO_SET_COMPOSITION],
    fitAndSizeDetails: [...SOHO_SET_FIT_AND_SIZE],
    careDetails: [...SOHO_SET_CARE],
    originDetails: [...SOHO_SET_ORIGIN],
  }
}

export function buildSohoSetPdpIntro(locale: AppLocale = 'en'): Pick<
  ProductPdpContent,
  'introParagraphParts' | 'introParagraphs' | 'faq'
> {
  const introParagraphParts = getSohoSetIntro(locale)
  return {
    introParagraphParts,
    introParagraphs: pdpIntroParagraphsToPlainText(introParagraphParts),
    faq: getSohoSetPdpFaq(locale),
  }
}
