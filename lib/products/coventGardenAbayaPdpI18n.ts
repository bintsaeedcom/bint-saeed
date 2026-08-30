import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductPdpContent } from '@/data/productPdpContent'
import { COVENT_GARDEN_ABAYA_INTRO_EN } from '@/data/coventGardenAbayaPdpIntro'
import type { PdpDetailGroup, PdpIntroParagraph } from '@/lib/products/pdpIntroRich'
import {
  THE_CODES_AL_TALLI_HREF,
  THE_CODES_KNOTTED_LINES_HREF,
  pdpIntroParagraphsToPlainText,
} from '@/lib/products/pdpIntroRich'
import { getCoventGardenAbayaPdpFaq } from '@/lib/products/coventGardenAbayaFaqI18n'
import { getHouseCodesDetailGroup } from '@/lib/products/pdpHouseCodesGroupsI18n'
import { PDP_COLOUR_TITLE, PDP_SILHOUETTE_TITLE } from '@/lib/products/pdpFeatureSectionTitles'
import { localizedColorName } from '@/lib/products/imageAltI18n'

export const COVENT_GARDEN_ABAYA_SLUG = 'covent-garden-abaya'

const COLOURS = ['Burgundy', 'Deep Black', 'Navy Blue'] as const

function t(value: string): PdpIntroParagraph[number] {
  return { type: 'text', value }
}

function boldAlTalli(label = 'Al Talli'): PdpIntroParagraph[number] {
  return { type: 'codeLink', label, href: THE_CODES_AL_TALLI_HREF, bold: true }
}

function boldKnottedLine(label = 'Knotted Line'): PdpIntroParagraph[number] {
  return { type: 'codeLink', label, href: THE_CODES_KNOTTED_LINES_HREF, bold: true }
}

function boldMonogramPin(label = 'Bint Saeed gold-tone Monogram pin'): PdpIntroParagraph[number] {
  return { type: 'codeLink', label, href: '/the-codes#the-monogram', bold: true }
}

function boldWahatAlKarama(label = 'Wahat Al Karama'): PdpIntroParagraph[number] {
  return { type: 'codeLink', label, href: '#', bold: true }
}

function pairingParagraph(before: string, orWord: string, after: string): PdpIntroParagraph {
  return [
    t(before),
    { type: 'codeLink', label: 'Covent Garden Dress', href: '/shop/covent-garden-long-dress', bold: true },
    t(` ${orWord} `),
    { type: 'codeLink', label: 'Hampstead Dress', href: '/shop/hampstead-dress', bold: true },
    t(after),
  ]
}

const INTRO_BY_LOCALE: Record<AppLocale, PdpIntroParagraph[]> = {
  en: COVENT_GARDEN_ABAYA_INTRO_EN,
  ar: [
    [
      t(
        'وُلدت عباية Covent Garden من اللغة البصرية لأبوظبي، فجمعت بين التفصيل المعاصر والعمارة وإحدى أعز الحرف التقليدية في دولة الإمارات العربية المتحدة.',
      ),
    ],
    [
      t('تستلهم عباية Covent Garden جزءاً من لغتها التصميمية من '),
      boldWahatAlKarama('واحة الكرامة'),
      t(
        '، أحد أبرز المعالم المعمارية في أبوظبي. أشكالها النحتية الضخمة، المكوّنة من هياكل تميل بعضها إلى بعض وتتساند، كانت مصدر الإلهام للهندسة المتقاطعة التي تظهر في أساور العباءة ذات الحضور الخاص.',
      ),
    ],
    [
      t('تُترجم Bint Saeed هذه الإشارة المعمارية إلى نسيج عبر أشرطة متناوبة من '),
      boldAlTalli(),
      t(' الأسود والذهبي، فتكوّن تركيباً بيانياً على الأكمام. وبوصفه تراثاً ثقافياً غير مادي تعترف به اليونسكو، يُعدّ '),
      boldAlTalli(),
      t(
        ' حرفة نسيج إماراتية تقليدية تناقلتها أجيال من النساء في الإمارات. وهنا يخلق استخدامه حواراً بين تعبيرين عن الإمارات: عمارة أبوظبي المعاصرة والحرفة الموروثة.',
      ),
    ],
    [
      t(
        'والنتيجة تفصيلة تحمل مشهد المدينة إلى الثوب. تصبح العمارة خطاً، والخط نسيجاً، والنسيج شيئاً يمكن ارتداؤه.',
      ),
    ],
    [
      t(
        'بقصة A-line أنيقة وبطانة كريب ناعمة كاملة، تنساب عباية Covent Garden من الكتفين وتتحرك بجمال مع كل خطوة. صُممت للأعراس والمناسبات الرسمية والتجمعات الأنيقة والأمسيات التي تستدعي حضوراً مميزاً.',
      ),
    ],
    [
      t('تُنهى الكتفان بكتاف وزرّات '),
      boldKnottedLine(),
      t(
        ' الذهبية المميزة لـ Bint Saeed، وهو رمز آخر من رموز الدار مستوحى من الصلة والنسب والمسارات التي تربط جيلاً بجيل.',
      ),
    ],
    [
      t('يكمل التصميم وشاحاً قابلاً للفصل. منتهياً بتفاصيل '),
      boldAlTalli(),
      t(' و'),
      boldMonogramPin('دبوس الشعار الذهبي لـ Bint Saeed'),
      t(
        '، يمكن ارتداؤه منسدلاً من الكتف أو بشكل قطري عبر الجسم، ليمنح القصة طابعاً أكثر احتفالية.',
      ),
    ],
    pairingParagraph(
      'تتوفر بالأسود العميق والعنابي والأزرق الكحلي، ويمكن ارتداء عباية Covent Garden فوق ',
      'أو',
      ' لإطلالة طبقات مكتملة.',
    ),
    [
      t(
        'ومثل كل عباءة Bint Saeed، يمكن تخصيصها عبر الملصق الداخلي المخفي المميز للدار. أضيفي اسماً أو تاريخاً أو رسالة ذات معنى لتفصيلة لا تعرفها إلا مرتديتها.',
      ),
    ],
    [
      t(
        'من عمارة أبوظبي إلى الأيدي والتقاليد التي شكّلت الحرفة الإماراتية، تعبّر عباية Covent Garden عما يقع في قلب Bint Saeed: حمل الثقافة البصرية لدولة الإمارات إلى الأمام عبر التصميم المعاصر.',
      ),
    ],
  ],
  fr: [
    [
      t(
        'Née du langage visuel d’Abou Dabi, l’abaya Covent Garden réunit tailleur contemporain, architecture et l’un des savoir-faire traditionnels les plus précieux des Émirats arabes unis.',
      ),
    ],
    [
      t('L’abaya Covent Garden emprunte une part de son langage formel à '),
      boldWahatAlKarama(),
      t(
        ', l’un des monuments architecturaux les plus distinctifs d’Abou Dabi. Ses volumes monumentaux, composés de structures qui s’inclinent les unes vers les autres et se soutiennent, ont inspiré la géométrie entrecroisée des poignets statement de l’abaya.',
      ),
    ],
    [
      t(
        'Bint Saeed traduit cette référence architecturale en textile par des bandes alternées de ',
      ),
      boldAlTalli(),
      t(
        ' noir et doré, dessinant une composition graphique sur les manches. Reconnue par l’UNESCO comme patrimoine culturel immatériel, ',
      ),
      boldAlTalli(),
      t(
        ' est un art du tissage émirati transmis de génération en génération par les femmes des Émirats. Ici, son usage crée un dialogue entre deux expressions des Émirats : l’architecture contemporaine d’Abou Dabi et le savoir-faire hérité.',
      ),
    ],
    [
      t(
        'Il en résulte un détail qui porte le paysage de la ville dans le vêtement. L’architecture devient ligne, la ligne devient textile, et le textile devient ce que l’on peut porter.',
      ),
    ],
    [
      t(
        'Coupée dans une silhouette A-line élégante et entièrement doublée d’un crêpe doux, l’abaya Covent Garden tombe fluide depuis les épaules et accompagne chaque pas avec grâce. Elle est conçue pour les mariages, les occasions officielles, les réceptions élégantes et les soirées qui appellent une présence distinctive.',
      ),
    ],
    [
      t('Les épaules sont finies d’épaulettes et de boutons dorés signature '),
      boldKnottedLine(),
      t(
        ' de Bint Saeed — un autre code de la maison inspiré du lien, de la lignée et des chemins qui unissent une génération à la suivante.',
      ),
    ],
    [
      t('Une écharpe statement amovible complète le dessin. Finie de '),
      boldAlTalli(),
      t(' et de l’'),
      boldMonogramPin('épingle Monogram dorée Bint Saeed'),
      t(
        ', elle peut se draper depuis l’épaule ou se croiser en diagonale sur le corps, conférant à la silhouette un caractère plus cérémoniel.',
      ),
    ],
    pairingParagraph(
      'Disponible en Noir profond, Bourgogne et Bleu marine, l’abaya Covent Garden se porte sur la ',
      'ou la ',
      ' pour une superposition complète.',
    ),
    [
      t(
        'Comme chaque abaya Bint Saeed, elle peut aussi être personnalisée avec l’étiquette intérieure cachée signature de la maison. Ajoutez un nom, une date ou un message personnel — un détail connu de celle qui la porte seule.',
      ),
    ],
    [
      t(
        'De l’architecture d’Abou Dabi aux mains et aux traditions qui ont façonné l’artisanat émirati, l’abaya Covent Garden exprime ce qui est au cœur de Bint Saeed : porter la culture visuelle des Émirats vers l’avenir par le design contemporain.',
      ),
    ],
  ],
  it: [
    [
      t(
        'Nata dal linguaggio visivo di Abu Dhabi, l’abaya Covent Garden unisce sartoria contemporanea, architettura e uno dei mestieri tradizionali più preziosi degli Emirati Arabi Uniti.',
      ),
    ],
    [
      t('L’abaya Covent Garden trae parte del suo linguaggio formale da '),
      boldWahatAlKarama(),
      t(
        ', uno dei monumenti architettonici più distintivi di Abu Dhabi. Le sue forme monumentali, composte da strutture che si inclinano e si sostengono a vicenda, hanno ispirato la geometria intersecata dei polsini statement dell’abaya.',
      ),
    ],
    [
      t(
        'Bint Saeed traduce questo riferimento architettonico in tessuto attraverso fasce alternate di ',
      ),
      boldAlTalli(),
      t(
        ' nero e dorato, creando una composizione grafica sulle maniche. Riconosciuto dall’UNESCO come patrimonio culturale immateriale, ',
      ),
      boldAlTalli(),
      t(
        ' è un’arte della tessitura emiratina tramandata di generazione in generazione dalle donne degli Emirati. Qui la sua applicazione crea un dialogo tra due espressioni degli Emirati: l’architettura contemporanea di Abu Dhabi e l’artigianato ereditato.',
      ),
    ],
    [
      t(
        'Il risultato è un dettaglio che porta il paesaggio della città nel capo. L’architettura diventa linea, la linea tessuto, e il tessuto qualcosa che si può indossare.',
      ),
    ],
    [
      t(
        'Tagliata in un’elegante silhouette A-line e completamente foderata in crepe morbido, l’abaya Covent Garden cade fluida dalle spalle e si muove con grazia a ogni passo. È pensata per matrimoni, occasioni ufficiali, ricevimenti eleganti e serate che chiedono una presenza distintiva.',
      ),
    ],
    [
      t('Le spalle sono finite con spalline e bottoni dorati signature '),
      boldKnottedLine(),
      t(
        ' di Bint Saeed — un altro codice della maison ispirato al legame, alla discendenza e ai sentieri che uniscono una generazione alla successiva.',
      ),
    ],
    [
      t('Una fascia statement removibile completa il disegno. Finita con '),
      boldAlTalli(),
      t(' e la '),
      boldMonogramPin('spilla Monogram dorata Bint Saeed'),
      t(
        ', può essere drappeggiata dalla spalla o stilizzata in diagonale sul corpo, conferendo alla silhouette un carattere più cerimoniale.',
      ),
    ],
    pairingParagraph(
      'Disponibile in Nero profondo, Borgogna e Blu navy, l’abaya Covent Garden si indossa sopra il ',
      'o il ',
      ' per un look stratificato completo.',
    ),
    [
      t(
        'Come ogni abaya Bint Saeed, può anche essere personalizzata con l’etichetta interna nascosta signature della maison. Aggiungete un nome, una data o un messaggio personale — un dettaglio noto soltanto a chi la indossa.',
      ),
    ],
    [
      t(
        'Dall’architettura di Abu Dhabi alle mani e alle tradizioni che hanno plasmato l’artigianato emiratino, l’abaya Covent Garden esprime ciò che sta al cuore di Bint Saeed: portare avanti la cultura visiva degli Emirati attraverso il design contemporaneo.',
      ),
    ],
  ],
  es: [
    [
      t(
        'Nacida del lenguaje visual de Abu Dabi, la abaya Covent Garden reúne sastrería contemporánea, arquitectura y uno de los oficios tradicionales más preciados de los Emiratos Árabes Unidos.',
      ),
    ],
    [
      t('La abaya Covent Garden toma parte de su lenguaje formal de '),
      boldWahatAlKarama(),
      t(
        ', uno de los monumentos arquitectónicos más distintivos de Abu Dabi. Sus formas monumentales, compuestas de estructuras que se inclinan y se sostienen mutuamente, inspiraron la geometría entrecruzada de los puños statement de la abaya.',
      ),
    ],
    [
      t(
        'Bint Saeed traduce esta referencia arquitectónica en textil mediante bandas alternadas de ',
      ),
      boldAlTalli(),
      t(
        ' negro y dorado, creando una composición gráfica en las mangas. Reconocido por la UNESCO como Patrimonio Cultural Inmaterial, ',
      ),
      boldAlTalli(),
      t(
        ' es un arte del tejido emiratí transmitido de generación en generación por las mujeres de los Emiratos. Aquí su aplicación crea un diálogo entre dos expresiones de los Emiratos: la arquitectura contemporánea de Abu Dabi y la artesanía heredada.',
      ),
    ],
    [
      t(
        'El resultado es un detalle que lleva el paisaje de la ciudad a la prenda. La arquitectura se hace línea, la línea textil, y el textil algo que se puede llevar.',
      ),
    ],
    [
      t(
        'Cortada en una elegante silueta A-line y totalmente forrada en crepé suave, la abaya Covent Garden cae fluida desde los hombros y se mueve con gracia en cada paso. Está pensada para bodas, ocasiones oficiales, reuniones elegantes y veladas que piden una presencia distintiva.',
      ),
    ],
    [
      t('Los hombros se rematan con hombreras y botones dorados signature '),
      boldKnottedLine(),
      t(
        ' de Bint Saeed — otro código de la casa inspirado en el vínculo, el linaje y los caminos que unen una generación a la siguiente.',
      ),
    ],
    [
      t('Una faja statement desmontable completa el diseño. Acabada con '),
      boldAlTalli(),
      t(' y el '),
      boldMonogramPin('pin Monogram dorado Bint Saeed'),
      t(
        ', puede drapearse desde el hombro o cruzarse en diagonal sobre el cuerpo, otorgando a la silueta un carácter más ceremonial.',
      ),
    ],
    pairingParagraph(
      'Disponible en Negro profundo, Burdeos y Azul marino, la abaya Covent Garden puede llevarse sobre el ',
      'o el ',
      ' para un look en capas completo.',
    ),
    [
      t(
        'Como toda abaya Bint Saeed, también puede personalizarse con la etiqueta interior oculta signature de la casa. Añade un nombre, una fecha o un mensaje personal — un detalle conocido sólo por quien la lleva.',
      ),
    ],
    [
      t(
        'De la arquitectura de Abu Dabi a las manos y tradiciones que han forjado la artesanía emiratí, la abaya Covent Garden expresa lo que late en el corazón de Bint Saeed: llevar adelante la cultura visual de los Emiratos a través del diseño contemporáneo.',
      ),
    ],
  ],
  ru: [
    [
      t(
        'Рождённая визуальным языком Абу-Даби, абайя Covent Garden соединяет современный крой, архитектуру и одно из самых ценных традиционных ремёсел Объединённых Арабских Эмиратов.',
      ),
    ],
    [
      t('Абайя Covent Garden черпает часть своего формального языка у '),
      boldWahatAlKarama(),
      t(
        ' — одного из самых выразительных архитектурных памятников Абу-Даби. Её монументальные формы, сложенные из конструкций, которые наклоняются друг к другу и поддерживают одна другую, вдохновили пересекающуюся геометрию statement-манжет абайи.',
      ),
    ],
    [
      t(
        'Bint Saeed переводит эту архитектурную отсылку в текстиль чередующимися полосами чёрного и золотистого ',
      ),
      boldAlTalli(),
      t(
        ', создавая графическую композицию на рукавах. Признанный ЮНЕСКО нематериальным культурным наследием, ',
      ),
      boldAlTalli(),
      t(
        ' — традиционное эмиратское ткачество, передаваемое поколениями женщин ОАЭ. Здесь его применение создаёт диалог между двумя выражениями Эмиратов: современной архитектурой Абу-Даби и унаследованным мастерством.',
      ),
    ],
    [
      t(
        'В итоге — деталь, которая переносит пейзаж города в одежду. Архитектура становится линией, линия — текстилем, а текстиль — тем, что можно носить.',
      ),
    ],
    [
      t(
        'Скроенная в элегантном силуэте A-line и полностью на мягкой креповой подкладке, абайя Covent Garden свободно ниспадает с плеч и красиво движется с каждым шагом. Она создана для свадеб, официальных мероприятий, изысканных приёмов и вечеров, требующих особого присутствия.',
      ),
    ],
    [
      t('Плечи отделаны погонами и фирменными золотистыми пуговицами '),
      boldKnottedLine(),
      t(
        ' Bint Saeed — ещё один код дома, вдохновлённый связью, преемственностью и путями, что связывают одно поколение со следующим.',
      ),
    ],
    [
      t('Съёмная statement-палантин завершает образ. Отделанная '),
      boldAlTalli(),
      t(' и '),
      boldMonogramPin('золотистой эмблемой Monogram Bint Saeed'),
      t(
        ', она может ниспадать с плеча или лежать по диагонали через тело, придавая силуэту более торжественный характер.',
      ),
    ],
    pairingParagraph(
      'В цветах Deep Black, Burgundy и Navy Blue абайю Covent Garden можно носить поверх ',
      'или ',
      ', создавая завершённый многослойный образ.',
    ),
    [
      t(
        'Как и каждая абайя Bint Saeed, её можно персонализировать с помощью фирменной скрытой внутренней этикетки. Добавьте имя, дату или личное послание — деталь, известную только той, кто её носит.',
      ),
    ],
    [
      t(
        'От архитектуры Абу-Даби к рукам и традициям, сформировавшим эмиратское ремесло, абайя Covent Garden выражает то, что лежит в сердце Bint Saeed: нести визуальную культуру ОАЭ вперёд через современный дизайн.',
      ),
    ],
  ],
  zh: [
    [
      t(
        '源自阿布扎比的视觉语言，Covent Garden Abaya 将当代剪裁、建筑，与阿联酋最珍贵的传统工艺之一融为一体。',
      ),
    ],
    [
      t('Covent Garden Abaya 的部分设计语言取自 '),
      boldWahatAlKarama(),
      t(
        '——阿布扎比最具辨识度的建筑地标之一。其纪念碑式体量由彼此倾斜、相互支撑的结构组成，正是长袍瞩目袖口交错几何的灵感来源。',
      ),
    ],
    [
      t('BINT SAEED 承悦 将这一建筑参照转译为织物：以黑与金色 '),
      boldAlTalli(),
      t(
        ' 交替条带，在袖口形成图形构成。作为联合国教科文组织认定的非物质文化遗产，',
      ),
      boldAlTalli(),
      t(
        ' 是由阿联酋女性世代相传的传统编织工艺。在此，它的运用在两种阿联酋表达之间建立对话：当代阿布扎比建筑与被传承的手艺。',
      ),
    ],
    [
      t(
        '最终，这一细节将城市的地貌带入衣身。建筑成为线条，线条成为织物，织物成为可穿之物。',
      ),
    ],
    [
      t(
        '优雅 A 字廓形，全里衬柔软绉绸，Covent Garden Abaya 自肩部垂落，随步履轻盈流动。它为婚礼、正式场合、雅集聚会，以及需要独特气场的夜晚而设计。',
      ),
    ],
    [
      t('肩部以肩章与 BINT SAEED 承悦 标志性金色 '),
      boldKnottedLine(),
      t(
        ' 纽扣收束——又一个源自连结、血脉与代际路径的品牌符号。',
      ),
    ],
    [
      t('可拆卸瞩目披肩完成整体。饰以 '),
      boldAlTalli(),
      t(' 细节与 '),
      boldMonogramPin('BINT SAEED 承悦 金色徽章胸针'),
      t(
        '，可自肩披落或斜跨身前，令廓形更添仪式感。',
      ),
    ],
    pairingParagraph(
      '提供深黑、酒红与海军蓝，Covent Garden Abaya 可叠穿于 ',
      '或 ',
      ' 之上，构成完整的层次造型。',
    ),
    [
      t(
        '与每件 BINT SAEED 承悦 长袍一样，亦可透过品牌标志性隐藏内标个性化。加入姓名、日期或深意寄语——只有穿着者本人知晓的细节。',
      ),
    ],
    [
      t(
        '从阿布扎比的建筑，到塑造阿联酋工艺的双手与传统，Covent Garden Abaya 表达着 BINT SAEED 承悦 的核心：以当代设计，将阿联酋的视觉文化向前延续。',
      ),
    ],
  ],
  de: [
    [
      t(
        'Aus der Bildsprache Abu Dhabis geboren, vereint die Covent Garden Abaya zeitgenössisches Schneiderhandwerk, Architektur und eines der wertvollsten traditionellen Handwerke der Vereinigten Arabischen Emirate.',
      ),
    ],
    [
      t('Die Covent Garden Abaya bezieht einen Teil ihrer Formensprache von '),
      boldWahatAlKarama(),
      t(
        ', einem der prägendsten Architekturdenkmäler Abu Dhabis. Ihre monumentalen Formen — Strukturen, die sich zueinander neigen und einander stützen — inspirierten die sich kreuzende Geometrie der Statement-Manschetten der Abaya.',
      ),
    ],
    [
      t(
        'Bint Saeed übersetzt diesen architektonischen Bezug in Textil durch wechselnde Bänder aus schwarzem und goldfarbenem ',
      ),
      boldAlTalli(),
      t(
        ' und schafft so eine grafische Komposition über die Ärmel. Als immaterielles Kulturerbe von der UNESCO anerkannt, ist ',
      ),
      boldAlTalli(),
      t(
        ' eine traditionelle emiratische Webkunst, die von Generation zu Generation von Frauen in den Emiraten weitergegeben wird. Hier entsteht im Einsatz ein Dialog zwischen zwei Ausdrucksformen der Emirate: der zeitgenössischen Architektur Abu Dhabis und dem ererbten Handwerk.',
      ),
    ],
    [
      t(
        'Das Ergebnis ist ein Detail, das die Landschaft der Stadt in das Kleidungsstück trägt. Architektur wird Linie, Linie wird Textil, und Textil wird etwas, das man tragen kann.',
      ),
    ],
    [
      t(
        'In einer eleganten A-Linien-Silhouette geschnitten und vollständig mit weichem Krepe gefüttert, fällt die Covent Garden Abaya fließend von den Schultern und bewegt sich anmutig mit jedem Schritt. Sie ist für Hochzeiten, offizielle Anlässe, elegante Empfänge und Abende gedacht, die eine unverwechselbare Präsenz verlangen.',
      ),
    ],
    [
      t('Die Schultern sind mit Epauletten und den charakteristischen goldfarbenen '),
      boldKnottedLine(),
      t(
        '-Knöpfen von Bint Saeed veredelt — ein weiterer Hauscode, inspiriert von Verbindung, Abstammung und den Pfaden, die eine Generation mit der nächsten verbinden.',
      ),
    ],
    [
      t('Ein abnehmbarer Statement-Schal vollendet den Entwurf. Mit '),
      boldAlTalli(),
      t('-Details und der '),
      boldMonogramPin('goldfarbenen Monogram-Nadel von Bint Saeed'),
      t(
        ' versehen, lässt er sich von der Schulter drapieren oder diagonal über den Körper führen und verleiht der Silhouette einen feierlicheren Charakter.',
      ),
    ],
    pairingParagraph(
      'Erhältlich in Tief Schwarz, Burgund und Marineblau, kann die Covent Garden Abaya über dem ',
      'oder dem ',
      ' getragen werden — für ein vollständiges Layering.',
    ),
    [
      t(
        'Wie jede Bint-Saeed-Abaya kann sie zudem mit dem charakteristischen versteckten Innenetikett personalisiert werden. Fügen Sie einen Namen, ein Datum oder eine persönliche Botschaft hinzu — ein Detail, das nur der Trägerin bekannt ist.',
      ),
    ],
    [
      t(
        'Von der Architektur Abu Dhabis zu den Händen und Traditionen, die das emiratische Handwerk geformt haben, bringt die Covent Garden Abaya zum Ausdruck, was im Herzen von Bint Saeed liegt: die visuelle Kultur der Emirate durch zeitgenössisches Design weiterzutragen.',
      ),
    ],
  ],
  nl: [
    [
      t(
        'Geboren uit de beeldtaal van Abu Dhabi, brengt de Covent Garden Abaya eigentijdse kleermakerskunst, architectuur en een van de meest gekoesterde traditionele ambachten van de Verenigde Arabische Emiraten samen.',
      ),
    ],
    [
      t('De Covent Garden Abaya ontleent een deel van haar vormtaal aan '),
      boldWahatAlKarama(),
      t(
        ', een van Abu Dhabi’s meest kenmerkende architectonische monumenten. Haar monumentale vormen — structuren die naar elkaar hellen en elkaar steunen — inspireerden de kruisende geometrie van de statement-manchetten van de abaya.',
      ),
    ],
    [
      t(
        'Bint Saeed vertaalt deze architectonische verwijzing naar textiel via afwisselende banen van zwart en goudkleurig ',
      ),
      boldAlTalli(),
      t(
        ', en creëert zo een grafische compositie over de mouwen. Erkend door UNESCO als immaterieel cultureel erfgoed, is ',
      ),
      boldAlTalli(),
      t(
        ' een traditioneel Emirati weefambacht, van generatie op generatie doorgegeven door vrouwen in de Emiraten. Hier ontstaat in de toepassing een dialoog tussen twee uitdrukkingen van de Emiraten: de hedendaagse architectuur van Abu Dhabi en het geërfde vakmanschap.',
      ),
    ],
    [
      t(
        'Het resultaat is een detail dat het landschap van de stad in het kledingstuk draagt. Architectuur wordt lijn, lijn wordt textiel, en textiel wordt iets dat gedragen kan worden.',
      ),
    ],
    [
      t(
        'Gesneden in een elegante A-line silhouet en volledig gevoerd met zacht crêpe, valt de Covent Garden Abaya vloeiend van de schouders en beweegt sierlijk bij elke stap. Zij is ontworpen voor bruiloften, officiële gelegenheden, elegante bijeenkomsten en avonden die om een onderscheidende aanwezigheid vragen.',
      ),
    ],
    [
      t('De schouders zijn afgewerkt met epauletten en de kenmerkende gouden '),
      boldKnottedLine(),
      t(
        '-knopen van Bint Saeed — een andere huiscode, geïnspireerd door verbinding, afstamming en de paden die de ene generatie aan de volgende binden.',
      ),
    ],
    [
      t('Een afneembare statement-sjaal voltooit het ontwerp. Afgewerkt met '),
      boldAlTalli(),
      t('-details en de '),
      boldMonogramPin('gouden Monogram-speld van Bint Saeed'),
      t(
        ', kan zij van de schouder worden gedrapeerd of diagonaal over het lichaam gestyled, zodat de silhouet een meer ceremonieel karakter krijgt.',
      ),
    ],
    pairingParagraph(
      'Verkrijgbaar in Diep Zwart, Bourgondisch en Marineblauw, kan de Covent Garden Abaya over de ',
      'of de ',
      ' worden gedragen voor een volledig gelaagd look.',
    ),
    [
      t(
        'Zoals elke Bint Saeed abaya kan zij ook worden gepersonaliseerd met het kenmerkende verborgen binnenlabel. Voeg een naam, datum of persoonlijke boodschap toe — een detail dat alleen de draagster kent.',
      ),
    ],
    [
      t(
        'Van de architectuur van Abu Dhabi tot de handen en tradities die het Emirati ambacht hebben gevormd, brengt de Covent Garden Abaya tot uitdrukking wat in het hart van Bint Saeed ligt: de visuele cultuur van de Emiraten voortzetten door eigentijds design.',
      ),
    ],
  ],
  pt: [
    [
      t(
        'Nascida da linguagem visual de Abu Dhabi, a abaya Covent Garden reúne alfaiataria contemporânea, arquitetura e um dos ofícios tradicionais mais preciosos dos Emirados Árabes Unidos.',
      ),
    ],
    [
      t('A abaya Covent Garden retira parte da sua linguagem formal de '),
      boldWahatAlKarama(),
      t(
        ', um dos monumentos arquitectónicos mais distintivos de Abu Dhabi. As suas formas monumentais — estruturas que se inclinam umas para as outras e se sustentam — inspiraram a geometria entrecruzada dos punhos statement da abaya.',
      ),
    ],
    [
      t(
        'A Bint Saeed traduz esta referência arquitectónica em têxtil através de faixas alternadas de ',
      ),
      boldAlTalli(),
      t(
        ' preto e dourado, criando uma composição gráfica nas mangas. Reconhecido pela UNESCO como Património Cultural Imaterial, ',
      ),
      boldAlTalli(),
      t(
        ' é uma arte de tecelagem emirati transmitida de geração em geração pelas mulheres dos Emirados. Aqui, a sua aplicação cria um diálogo entre duas expressões dos Emirados: a arquitetura contemporânea de Abu Dhabi e o mestrado herdado.',
      ),
    ],
    [
      t(
        'O resultado é um detalhe que leva a paisagem da cidade para a peça. A arquitetura torna-se linha, a linha têxtil, e o têxtil algo que se pode usar.',
      ),
    ],
    [
      t(
        'Cortada numa elegante silhueta A-line e totalmente forrada em crepe macio, a abaya Covent Garden cai fluida dos ombros e move-se com graça a cada passo. Foi concebida para casamentos, ocasiões oficiais, encontros elegantes e noites que pedem uma presença distintiva.',
      ),
    ],
    [
      t('Os ombros são acabados com epaulettes e botões dourados signature '),
      boldKnottedLine(),
      t(
        ' da Bint Saeed — outro código da casa inspirado na ligação, na linhagem e nos caminhos que unem uma geração à seguinte.',
      ),
    ],
    [
      t('Uma echarpe statement destacável completa o desenho. Acabada com '),
      boldAlTalli(),
      t(' e o '),
      boldMonogramPin('alfinete Monogram dourado Bint Saeed'),
      t(
        ', pode drapear-se do ombro ou cruzar-se em diagonal pelo corpo, conferindo à silhueta um carácter mais cerimonial.',
      ),
    ],
    pairingParagraph(
      'Disponível em Preto Profundo, Borgonha e Azul-Marinho, a abaya Covent Garden pode usar-se sobre o ',
      'ou o ',
      ' para um look em camadas completo.',
    ),
    [
      t(
        'Como cada abaya Bint Saeed, também pode ser personalizada com a etiqueta interior oculta signature da casa. Adicione um nome, uma data ou uma mensagem pessoal — um detalhe conhecido apenas por quem a usa.',
      ),
    ],
    [
      t(
        'Da arquitetura de Abu Dhabi às mãos e tradições que moldaram o ofício emirati, a abaya Covent Garden expressa o que está no coração da Bint Saeed: levar a cultura visual dos Emirados adiante através do design contemporâneo.',
      ),
    ],
  ],
  id: [
    [
      t(
        'Lahir dari bahasa visual Abu Dhabi, abaya Covent Garden menyatukan tailoring kontemporer, arsitektur, dan salah satu kerajinan tradisional paling berharga di Uni Emirat Arab.',
      ),
    ],
    [
      t('Abaya Covent Garden mengambil sebagian bahasa bentuknya dari '),
      boldWahatAlKarama(),
      t(
        ', salah satu landmark arsitektur paling khas di Abu Dhabi. Bentuk-bentuk monumentalnya — struktur yang condong saling menyangga — menjadi inspirasi geometri bersilang pada manset statement abaya.',
      ),
    ],
    [
      t(
        'Bint Saeed menerjemahkan rujukan arsitektur ini ke dalam tekstil melalui pita bergantian ',
      ),
      boldAlTalli(),
      t(
        ' hitam dan emas, membentuk komposisi grafis di sepanjang lengan. Diakui UNESCO sebagai Warisan Budaya Takbenda, ',
      ),
      boldAlTalli(),
      t(
        ' adalah seni tenun Emirati tradisional yang diwariskan lintas generasi perempuan di UAE. Di sini, penerapannya menciptakan dialog antara dua ekspresi Emirat: arsitektur kontemporer Abu Dhabi dan keterampilan yang diwarisi.',
      ),
    ],
    [
      t(
        'Hasilnya adalah detail yang membawa lanskap kota ke dalam busana. Arsitektur menjadi garis, garis menjadi tekstil, dan tekstil menjadi sesuatu yang dapat dikenakan.',
      ),
    ],
    [
      t(
        'Dipotong dalam siluet A-line yang elegan dan sepenuhnya berlapis krepe lembut, abaya Covent Garden jatuh mengalir dari bahu dan bergerak indah di setiap langkah. Dirancang untuk pernikahan, acara resmi, pertemuan elegan, dan malam yang meminta kehadiran yang khas.',
      ),
    ],
    [
      t('Bahu diselesaikan dengan epaulet dan kancing emas signature '),
      boldKnottedLine(),
      t(
        ' Bint Saeed — kode rumah lainnya yang terinspirasi oleh hubungan, garis keturunan, dan jalur yang mengikat satu generasi ke generasi berikutnya.',
      ),
    ],
    [
      t('Selempang statement yang dapat dilepas melengkapi desain. Diselesaikan dengan '),
      boldAlTalli(),
      t(' dan '),
      boldMonogramPin('pin Monogram emas Bint Saeed'),
      t(
        ', dapat digantung dari bahu atau distyle diagonal di tubuh, memberi siluet karakter yang lebih seremonial.',
      ),
    ],
    pairingParagraph(
      'Tersedia dalam Deep Black, Burgundy, dan Navy Blue, abaya Covent Garden dapat dikenakan di atas ',
      'atau ',
      ' untuk tampilan berlapis yang lengkap.',
    ),
    [
      t(
        'Seperti setiap abaya Bint Saeed, abaya ini juga dapat dipersonalisasi dengan label dalam tersembunyi signature rumah. Tambahkan nama, tanggal, atau pesan bermakna — detail yang hanya diketahui oleh pemakainya.',
      ),
    ],
    [
      t(
        'Dari arsitektur Abu Dhabi hingga tangan dan tradisi yang membentuk kerajinan Emirati, abaya Covent Garden mengungkapkan apa yang ada di jantung Bint Saeed: membawa budaya visual UAE maju melalui desain kontemporer.',
      ),
    ],
  ],
  ms: [
    [
      t(
        'Lahir dari bahasa visual Abu Dhabi, abaya Covent Garden menyatukan jahitan kontemporari, seni bina, dan salah satu kraf tradisional paling berharga di Emiriah Arab Bersatu.',
      ),
    ],
    [
      t('Abaya Covent Garden mengambil sebahagian bahasa bentuknya dari '),
      boldWahatAlKarama(),
      t(
        ', salah sebuah mercu tanda seni bina paling tersendiri di Abu Dhabi. Bentuk monumentalnya — struktur yang condong saling menyokong — menjadi inspirasi geometri bersilang pada manset statement abaya.',
      ),
    ],
    [
      t(
        'Bint Saeed menterjemah rujukan seni bina ini kepada tekstil melalui jalur berganti ',
      ),
      boldAlTalli(),
      t(
        ' hitam dan emas, membentuk komposisi grafik di sepanjang lengan. Diiktiraf UNESCO sebagai Warisan Budaya Tidak Ketara, ',
      ),
      boldAlTalli(),
      t(
        ' ialah seni tenunan Emirati tradisional yang diwarisi merentas generasi wanita di UAE. Di sini, penggunaannya mewujudkan dialog antara dua ungkapan Emiriah: seni bina kontemporari Abu Dhabi dan kemahiran yang diwarisi.',
      ),
    ],
    [
      t(
        'Hasilnya ialah butiran yang membawa landskap bandar ke dalam pakaian. Seni bina menjadi garisan, garisan menjadi tekstil, dan tekstil menjadi sesuatu yang boleh dipakai.',
      ),
    ],
    [
      t(
        'Dipotong dalam siluet A-line yang elegan dan sepenuhnya berlapis krepe lembut, abaya Covent Garden jatuh mengalir dari bahu dan bergerak anggun pada setiap langkah. Direka untuk perkahwinan, majlis rasmi, perhimpunan elegan, dan malam yang memerlukan kehadiran tersendiri.',
      ),
    ],
    [
      t('Bahu disiapkan dengan epaulet dan butang emas signature '),
      boldKnottedLine(),
      t(
        ' Bint Saeed — satu lagi kod rumah yang diilhamkan oleh hubungan, keturunan, dan laluan yang mengikat satu generasi kepada generasi seterusnya.',
      ),
    ],
    [
      t('Selendang statement boleh tanggal melengkapkan reka bentuk. Disiapkan dengan '),
      boldAlTalli(),
      t(' dan '),
      boldMonogramPin('pin Monogram emas Bint Saeed'),
      t(
        ', ia boleh digantung dari bahu atau distyle secara pepenjuru merentasi badan, memberikan siluet watak yang lebih istiadat.',
      ),
    ],
    pairingParagraph(
      'Tersedia dalam Deep Black, Burgundy, dan Navy Blue, abaya Covent Garden boleh dipakai di atas ',
      'atau ',
      ' untuk rupa berlapis yang lengkap.',
    ),
    [
      t(
        'Seperti setiap abaya Bint Saeed, ia juga boleh diperibadikan dengan label dalaman tersembunyi signature rumah. Tambah nama, tarikh, atau mesej bermakna — butiran yang hanya diketahui oleh pemakainya.',
      ),
    ],
    [
      t(
        'Dari seni bina Abu Dhabi kepada tangan dan tradisi yang membentuk kraf Emirati, abaya Covent Garden mengungkapkan apa yang terletak di jantung Bint Saeed: membawa budaya visual UAE ke hadapan melalui reka bentuk kontemporari.',
      ),
    ],
  ],
}

const SILHOUETTE_ITEMS: Record<AppLocale, readonly string[]> = {
  en: [
    'Elegant A-line abaya',
    'Open-front design with optional concealed snap-button closure available upon request',
    'Detachable statement sash finished with Bint Saeed signature gold-tone Monogram pin for multiple styling options',
    'Shoulder epaulettes with signature button detailing',
    'Wide cuffs with heritage woven trim',
    'Fully lined with a soft crepe lining for exceptional comfort and a refined finish',
    'Hidden side seam pockets',
    'Complimentary personalisation available on Bint Saeed’s signature hidden inner label',
  ],
  ar: [
    'عباية معاصرة بقصة A-line وانسيابية أنيقة',
    'تصميم مفتوح من الأمام مع إمكانية إغلاق مخفي بأزرار عند الطلب',
    'وشاح قابل للفصل مع دبوس الشعار الذهبي المميز لـ Bint Saeed',
    'كتفان بتفاصيل أزرار مميزة',
    'أساور واسعة بتفاصيل نسيج تراثية',
    'مبطّنة بالكامل ببطانة كريب ناعمة',
    'جيوب جانبية مخفية',
    'تخصيص مجاني على الملصق الداخلي المخفي المميز للدار',
  ],
  fr: [
    'Abaya A-line élégante',
    'Design ouvert à l’avant avec fermeture pressionnée dissimulée en option sur demande',
    'Écharpe statement amovible finie avec l’épingle emblème dorée signature de Bint Saeed',
    'Épaulettes avec boutons signature',
    'Poignets larges avec bordure tissée patrimoniale',
    'Entièrement doublée d’un crêpe doux pour un confort exceptionnel',
    'Poches latérales dissimulées',
    'Personnalisation offerte sur l’étiquette intérieure cachée signature',
  ],
  it: [
    'Abaya A-line elegante',
    'Design aperto sul davanti con chiusura a pressione nascosta opzionale su richiesta',
    'Fascia statement removibile con spilla Monogram dorata signature di Bint Saeed',
    'Spalline con bottoni signature',
    'Polsini ampi con bordo tessuto patrimoniale',
    'Completamente foderata in crepe morbido per comfort eccezionale',
    'Tasche laterali nascoste',
    'Personalizzazione omaggio sull’etichetta interna nascosta signature',
  ],
  es: [
    'Abaya A-line elegante',
    'Diseño abierto frontal con cierre a presión oculto opcional bajo pedido',
    'Faja statement desmontable con pin Monogram dorado signature de Bint Saeed',
    'Hombreras con botones signature',
    'Puños amplios con ribete tejido patrimonial',
    'Completamente forrada con crepé suave para confort excepcional',
    'Bolsillos laterales ocultos',
    'Personalización gratuita en la etiqueta interior oculta signature',
  ],
  ru: [
    'Изящная абайя A-line',
    'Открытый перед с опциональной скрытой застёжкой на кнопки по запросу',
    'Съёмная statement-палантин с фирменной золотистой эмблемой Bint Saeed',
    'Погоны с фирменными пуговицами',
    'Широкие манжеты с традиционным тканым бордюром',
    'Полная подкладка из мягкого крепа для исключительного комфорта',
    'Скрытые боковые карманы',
    'Бесплатная персонализация на скрытой внутренней этикетке',
  ],
  zh: [
    '优雅 A 字长袍',
    '前开襟设计，可按需选配隐藏按扣闭合',
    '可拆卸瞩目披肩，饰 BINT SAEED 承悦 标志性金色徽章胸针',
    '肩章配标志性纽扣细节',
    '宽袖口配传承编织镶边',
    '全里衬柔软绉绸，舒适精致',
    '隐藏侧缝口袋',
    '标志性隐藏内标可免费个性化',
  ],
  de: [
    'Elegante A-Linien-Abaya',
    'Offenes Frontdesign mit optionaler verdeckter Druckknopf-Schließung auf Anfrage',
    'Abnehmbarer Statement-Schal mit charakteristischer goldfarbener Emblem-Nadel von Bint Saeed',
    'Schulterklappen mit charakteristischen Knöpfen',
    'Weite Manschetten mit traditioneller Webverzierung',
    'Vollständig mit weichem Krepe gefüttert für außergewöhnlichen Komfort',
    'Versteckte Seitentaschen',
    'Kostenlose Personalisierung auf dem charakteristischen versteckten Innenetikett',
  ],
  nl: [
    'Elegante A-line abaya',
    'Open voorkant met optionele verborgen drukknoopsluiting op aanvraag',
    'Afneembare statement-sjaal met kenmerkende gouden embleemspeld van Bint Saeed',
    'Schouderflappen met kenmerkende knopen',
    'Brede manchetten met erfgoed geweven afwerking',
    'Volledig gevoerd met zacht crêpe voor uitzonderlijk comfort',
    'Verborgen zijzakken',
    'Gratis personalisatie op het kenmerkende verborgen binnenlabel',
  ],
  pt: [
    'Abaya A-line elegante',
    'Design aberto à frente com fecho de mola oculto opcional sob pedido',
    'Echarpe statement destacável com alfinete Monogram dourado signature da Bint Saeed',
    'Almofadas de ombro com botões signature',
    'Punhos largos com acabamento tecido patrimonial',
    'Totalmente forrada com crepe macio para conforto excecional',
    'Bolsos laterais ocultos',
    'Personalização gratuita na etiqueta interior oculta signature',
  ],
  id: [
    'Abaya A-line elegan',
    'Desain depan terbuka dengan penutup kancing tersembunyi opsional atas permintaan',
    'Selempang statement dapat dilepas dengan pin Monogram emas signature Bint Saeed',
    'Epaulet bahu dengan detail kancing signature',
    'Manset lebar dengan trim tenun warisan',
    'Berlapis krepe lembut sepenuhnya untuk kenyamanan luar biasa',
    'Saku samping tersembunyi',
    'Personalisasi gratis pada label dalam tersembunyi signature',
  ],
  ms: [
    'Abaya A-line elegan',
    'Reka bentuk hadapan terbuka dengan penutup butang tersembunyi pilihan atas permintaan',
    'Selendang statement boleh tanggal dengan pin lambang emas signature Bint Saeed',
    'Epaulet bahu dengan butiran butang signature',
    'Manset lebar dengan hiasan tenunan warisan',
    'Berlapis krepe lembut sepenuhnya untuk keselesaan luar biasa',
    'Poket sisi tersembunyi',
    'Pemperibadian percuma pada label dalaman tersembunyi signature',
  ],
}

const COMPOSITION_OUTER: Record<AppLocale, string> = {
  en: 'Outer: 80% Polyester, 20% Viscose',
  ar: 'الخارجي: 80% بوليستر، 20% فيسكوز',
  fr: 'Extérieur : 80 % polyester, 20 % viscose',
  it: 'Esterno: 80% poliestere, 20% viscosa',
  es: 'Exterior: 80% poliéster, 20% viscosa',
  ru: 'Верх: 80% полиэстер, 20% вискоза',
  zh: '面料：80% 聚酯纤维，20% 粘胶纤维',
  de: 'Außenmaterial: 80 % Polyester, 20 % Viskose',
  nl: 'Buitenstof: 80% polyester, 20% viscose',
  pt: 'Exterior: 80% poliéster, 20% viscose',
  id: 'Luar: 80% Polyester, 20% Viscose',
  ms: 'Luaran: 80% Polyester, 20% Viscose',
}

const COMPOSITION_LINING: Record<AppLocale, string> = {
  en: 'Lining: 70% Polyester, 30% Viscose',
  ar: 'البطانة: 70% بوليستر، 30% فيسكوز',
  fr: 'Doublure : 70 % polyester, 30 % viscose',
  it: 'Fodera: 70% poliestere, 30% viscosa',
  es: 'Forro: 70% poliéster, 30% viscosa',
  ru: 'Подкладка: 70% полиэстер, 30% вискоза',
  zh: '里料：70% 聚酯纤维，30% 粘胶纤维',
  de: 'Futter: 70 % Polyester, 30 % Viskose',
  nl: 'Voering: 70% polyester, 30% viscose',
  pt: 'Forro: 70% poliéster, 30% viscose',
  id: 'Lapisan: 70% Polyester, 30% Viscose',
  ms: 'Lapisan: 70% Polyester, 30% Viscose',
}

const CARE: Record<AppLocale, string> = {
  en: 'Professional dry clean recommended. Gentle machine wash at 30°C if needed.',
  ar: 'يُنصح بالتنظيف الجاف الاحترافي. غسل لطيف عند 30°م عند الحاجة.',
  fr: 'Nettoyage à sec professionnel recommandé. Lavage en machine délicat à 30 °C si nécessaire.',
  it: 'Lavaggio a secco professionale consigliato. Lavaggio in lavatrice delicato a 30 °C se necessario.',
  es: 'Se recomienda limpieza en seco profesional. Lavado a máquina suave a 30 °C si es necesario.',
  ru: 'Рекомендуется профессиональная химчистка. При необходимости — деликатная машинная стирка при 30 °C.',
  zh: '建议专业干洗。如需机洗，请使用 30°C 轻柔模式。',
  de: 'Professionelle Reinigung empfohlen. Bei Bedarf Schonwaschgang bei 30 °C.',
  nl: 'Professionele stomerij aanbevolen. Indien nodig zachte machinewas op 30 °C.',
  pt: 'Limpeza a seco profissional recomendada. Lavagem na máquina suave a 30 °C se necessário.',
  id: 'Dry clean profesional disarankan. Cuci mesin lembut pada 30°C jika diperlukan.',
  ms: 'Dry clean profesional disyorkan. Basuhan mesin lembut pada 30°C jika perlu.',
}

const FIT_AND_SIZE: Record<AppLocale, readonly string[]> = {
  en: [
    'Elegant A-line abaya',
    'Length: 138 cm / 54.5 inches',
    'Model height: 155 cm / 61 inches',
    'Model wears size XS',
    'Custom length available upon request',
  ],
  ar: [
    'قصة A-line أنيقة',
    'الطول: 138 سم / 54.5 بوصة',
    'طول العارضة: 155 سم / 61 بوصة',
    'العارضة ترتدي مقاس XS',
    'طول مخصص متاح عند الطلب',
  ],
  fr: [
    'Abaya A-line élégante',
    'Longueur : 138 cm / 54,5 pouces',
    'Taille du mannequin : 155 cm / 61 pouces',
    'Le mannequin porte la taille XS',
    'Longueur sur mesure disponible sur demande',
  ],
  it: [
    'Abaya A-line elegante',
    'Lunghezza: 138 cm / 54,5 pollici',
    'Altezza modella: 155 cm / 61 pollici',
    'La modella indossa taglia XS',
    'Lunghezza personalizzata disponibile su richiesta',
  ],
  es: [
    'Abaya A-line elegante',
    'Largo: 138 cm / 54,5 pulgadas',
    'Altura de la modelo: 155 cm / 61 pulgadas',
    'La modelo lleva talla XS',
    'Largo personalizado disponible bajo pedido',
  ],
  ru: [
    'Изящная абайя A-line',
    'Длина: 138 см / 54,5 дюйма',
    'Рост модели: 155 см / 61 дюйм',
    'На модели размер XS',
    'Индивидуальная длина по запросу',
  ],
  zh: [
    '优雅 A 字长袍',
    '长度：138 厘米 / 54.5 英寸',
    '模特身高：155 厘米 / 61 英寸',
    '模特穿着 XS 码',
    '可按需定制长度',
  ],
  de: [
    'Elegante A-Linien-Abaya',
    'Länge: 138 cm / 54,5 Zoll',
    'Modellgröße: 155 cm / 61 Zoll',
    'Das Model trägt Größe XS',
    'Individuelle Länge auf Anfrage',
  ],
  nl: [
    'Elegante A-line abaya',
    'Lengte: 138 cm / 54,5 inch',
    'Model lengte: 155 cm / 61 inch',
    'Model draagt maat XS',
    'Aangepaste lengte op aanvraag',
  ],
  pt: [
    'Abaya A-line elegante',
    'Comprimento: 138 cm / 54,5 polegadas',
    'Altura da modelo: 155 cm / 61 polegadas',
    'A modelo usa tamanho XS',
    'Comprimento personalizado disponível sob pedido',
  ],
  id: [
    'Abaya A-line elegan',
    'Panjang: 138 cm / 54,5 inci',
    'Tinggi model: 155 cm / 61 inci',
    'Model memakai ukuran XS',
    'Panjang kustom tersedia atas permintaan',
  ],
  ms: [
    'Abaya A-line elegan',
    'Panjang: 138 cm / 54.5 inci',
    'Tinggi model: 155 cm / 61 inci',
    'Model memakai saiz XS',
    'Panjang khas tersedia atas permintaan',
  ],
}

const ORIGIN: Record<AppLocale, string> = {
  en: 'Made in Abu Dhabi, United Arab Emirates',
  ar: 'صُنع في أبوظبي، الإمارات العربية المتحدة',
  fr: 'Fabriqué à Abou Dabi, Émirats arabes unis',
  it: 'Realizzato ad Abu Dhabi, Emirati Arabi Uniti',
  es: 'Hecho en Abu Dabi, Emiratos Árabes Unidos',
  ru: 'Сделано в Абу-Даби, ОАЭ',
  zh: '阿联酋阿布扎比制造',
  de: 'Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate',
  nl: 'Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten',
  pt: 'Feito em Abu Dhabi, Emirados Árabes Unidos',
  id: 'Dibuat di Abu Dhabi, Uni Emirat Arab',
  ms: 'Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu',
}

function colourItems(locale: AppLocale): string[] {
  return COLOURS.map((c) => localizedColorName(c, locale))
}

export function buildCoventGardenAbayaDetailGroups(locale: AppLocale): PdpDetailGroup[] {
  return [
    {
      title: PDP_SILHOUETTE_TITLE[locale],
      items: [...SILHOUETTE_ITEMS[locale]],
    },
    getHouseCodesDetailGroup('knotted-line-al-talli', locale),
    {
      title: PDP_COLOUR_TITLE[locale],
      items: colourItems(locale),
    },
  ]
}

export function buildCoventGardenAbayaPdpContent(locale: AppLocale): ProductPdpContent {
  const introParagraphParts = INTRO_BY_LOCALE[locale]
  return {
    introParagraphParts,
    introParagraphs: pdpIntroParagraphsToPlainText(introParagraphParts),
    productDetails: [],
    productDetailGroups: buildCoventGardenAbayaDetailGroups(locale),
    compositionDetails: [COMPOSITION_OUTER[locale], COMPOSITION_LINING[locale]],
    careDetails: [CARE[locale]],
    fitAndSizeDetails: [...FIT_AND_SIZE[locale]],
    originDetails: [ORIGIN[locale]],
    faq: getCoventGardenAbayaPdpFaq(locale),
  }
}
