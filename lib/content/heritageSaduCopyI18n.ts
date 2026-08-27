import type { AppLocale } from '@/lib/i18n/routing'
import {
  getHeritageSharedChrome,
  type HeritageSharedChrome,
  type HeritageCraftPattern,
  type HeritageCraftColor,
} from '@/lib/content/heritageAlTalliCopyI18n'

export type SaduPageCopy = HeritageSharedChrome & {
  heroTag: string
  heroTitle: string
  heroSubtitle: string
  storyEyebrow: string
  storyTitle: string
  storyP1: string
  storyP2: string
  symbolsEyebrow: string
  symbolsTitle: string
  symbolsLead: string
  patterns: HeritageCraftPattern[]
  unescoEyebrow: string
  unescoTitle: string
  unescoBody: string
  unescoBadge1: string
  unescoBadge2: string
  unescoBadge3: string
  paletteEyebrow: string
  paletteTitle: string
  colors: HeritageCraftColor[]
  brandEyebrow: string
  brandTitle: string
  brandP1: string
  brandP2: string
}

const SADU: Record<AppLocale, Omit<SaduPageCopy, keyof HeritageSharedChrome>> = {
  en: {
    heroTag: 'UNESCO Heritage',
    heroTitle: 'Sadu Weaving',
    heroSubtitle: 'The Traditional Bedouin Weaving Art',
    storyEyebrow: 'Desert Legacy',
    storyTitle: 'Fabric of the Desert',
    storyP1: 'Sadu is the traditional Bedouin weaving art practiced by Bedouin women across the Arabian Peninsula for thousands of years. This art was an essential part of desert life, where women would weave tents, cushions, and camel bags.',
    storyP2: 'Each pattern in Sadu carries meaning and tells a story. The lines, triangles, and squares are not mere decorations - they are symbols speaking of nature, animals, and life in the desert.',
    symbolsEyebrow: 'Symbols',
    symbolsTitle: 'Patterns with Meaning',
    symbolsLead: 'Every pattern in Sadu carries deep symbolism passed through generations',
    patterns: [
      {
        name: 'Al Shajara',
        meaning: 'Tree of Life - Symbolizing growth and strength'
      },
      {
        name: 'Al \'Ayin',
        meaning: 'The Eye - Protection against evil'
      },
      {
        name: 'Al Rakham',
        meaning: 'The Vulture - Symbol of wisdom'
      },
      {
        name: 'Al Dhulla',
        meaning: 'The Rib - Representing strength'
      }
    ],
    unescoEyebrow: 'Global Recognition',
    unescoTitle: 'Preserved for Generations',
    unescoBody: 'Al Sadu weaving skills of the United Arab Emirates were first inscribed in 2011 on UNESCO’s List of Intangible Cultural Heritage in Need of Urgent Safeguarding. After a sustained safeguarding programme, the element was transferred in 2025 to UNESCO’s Representative List of the Intangible Cultural Heritage of Humanity.',
    unescoBadge1: 'Inscribed 2011 · List 2025',
    unescoBadge2: 'Representative List',
    unescoBadge3: 'UAE • KSA • Kuwait',
    paletteEyebrow: 'The Palette',
    paletteTitle: 'Colors of Sadu',
    colors: [
      {
        name: 'Black',
        hex: '#1a1a1a',
        meaning: 'Made from goat hair, represents Bedouin tents'
      },
      {
        name: 'White',
        hex: '#f5f5f5',
        meaning: 'From sheep wool, symbolizes purity'
      },
      {
        name: 'Red',
        hex: '#6f1524',
        meaning: 'Natural dye from pomegranate, signifies celebration'
      },
      {
        name: 'Orange',
        hex: '#d4804a',
        meaning: 'From saffron, represents the desert sun'
      }
    ],
    brandEyebrow: 'Bint Saeed × Sadu',
    brandTitle: 'Desert Spirit in Our Designs',
    brandP1: 'The bold patterns and warm colors of Sadu inspire us at Bint Saeed. We incorporate traditional geometric patterns into our embroidery and use a desert-inspired color palette in our fabrics.',
    brandP2: 'Some of our exclusive pieces feature hand-woven bands using authentic Sadu techniques, crafted in collaboration with Bedouin artisans who preserve this ancient legacy.'
  },
  ar: {
    heroTag: 'تراث اليونسكو',
    heroTitle: 'السدو',
    heroSubtitle: 'فن النسيج البدوي التقليدي',
    storyEyebrow: 'إرث البادية',
    storyTitle: 'نسيج الصحراء',
    storyP1: 'السدو هو فن النسيج البدوي التقليدي الذي مارسته نساء البدو في شبه الجزيرة العربية لآلاف السنين. كان هذا الفن جزءاً أساسياً من حياة البادية، حيث كانت النساء تنسج الخيام والوسائد وحقائب الجمال.',
    storyP2: 'كل نمط في السدو يحمل معنى ويروي قصة. الخطوط والمثلثات والمربعات ليست مجرد زخارف - بل هي رموز تتحدث عن الطبيعة والحيوانات والحياة في الصحراء.',
    symbolsEyebrow: 'الرموز',
    symbolsTitle: 'أنماط ذات معنى',
    symbolsLead: 'كل نمط في السدو يحمل رمزية عميقة توارثتها الأجيال',
    patterns: [
      {
        name: 'الشجرة',
        meaning: 'شجرة الحياة - ترمز للنمو والقوة'
      },
      {
        name: 'العين',
        meaning: 'العين - للحماية من الشر'
      },
      {
        name: 'الرخم',
        meaning: 'طائر الرخم - رمز الحكمة'
      },
      {
        name: 'الضلعة',
        meaning: 'الضلعة - تمثل القوة'
      }
    ],
    unescoEyebrow: 'اعتراف عالمي',
    unescoTitle: 'محفوظ للأجيال',
    unescoBody: 'أُدرجت مهارات نسيج السدو في الإمارات أولاً عام ٢٠١١ على قائمة اليونسكو للتراث الثقافي غير المادي الذي يحتاج إلى صون عاجل. وبعد برنامج صون متواصل، نُقلت العنصر عام ٢٠٢٥ إلى القائمة التمثيلية للتراث الثقافي غير المادي للبشرية.',
    unescoBadge1: 'مُدرج 2011',
    unescoBadge2: 'القائمة التمثيلية',
    unescoBadge3: 'الإمارات • السعودية • الكويت',
    paletteEyebrow: 'اللوحة',
    paletteTitle: 'ألوان السدو',
    colors: [
      {
        name: 'أسود',
        hex: '#1a1a1a',
        meaning: 'من شعر الماعز، يمثل خيام البدو'
      },
      {
        name: 'أبيض',
        hex: '#f5f5f5',
        meaning: 'من صوف الأغنام، يرمز للنقاء'
      },
      {
        name: 'أحمر',
        hex: '#6f1524',
        meaning: 'صبغة طبيعية من الرمان، ترمز للاحتفال'
      },
      {
        name: 'برتقالي',
        hex: '#d4804a',
        meaning: 'من الزعفران، يمثل شمس الصحراء'
      }
    ],
    brandEyebrow: 'بنت سعيد × السدو',
    brandTitle: 'روح البادية في تصاميمنا',
    brandP1: 'أنماط السدو الجريئة وألوانها الدافئة تلهمنا في بنت سعيد. ندمج الأنماط الهندسية التقليدية في تطريزاتنا، ونستخدم لوحة ألوان مستوحاة من الصحراء في أقمشتنا.',
    brandP2: 'بعض قطعنا الحصرية تتضمن شرائط منسوجة يدوياً بتقنية السدو الأصيلة، مصنوعة بالتعاون مع حرفيات بدويات يحافظن على هذا الإرث العريق.'
  },
  fr: {
    heroTag: 'Patrimoine UNESCO',
    heroTitle: 'Sadu',
    heroSubtitle: 'L’art traditionnel du tissage bédouin',
    storyEyebrow: 'Héritage du désert',
    storyTitle: 'Tissu du désert',
    storyP1: 'Le Sadu est l’art traditionnel du tissage bédouin pratiqué par les femmes à travers la péninsule Arabique depuis des millénaires. Essentiel à la vie du désert, il tissait tentes, coussins et sacs de chameau.',
    storyP2: 'Chaque motif du Sadu porte un sens et raconte une histoire. Lignes, triangles et carrés ne sont pas de simples ornements, ce sont des symboles de la nature, des animaux et de la vie dans le désert.',
    symbolsEyebrow: 'Symboles',
    symbolsTitle: 'Motifs porteurs de sens',
    symbolsLead: 'Chaque motif du Sadu porte une symbolique profonde transmise de génération en génération',
    patterns: [
      {
        name: 'Al Shajara',
        meaning: 'Arbre de vie, croissance et force'
      },
      {
        name: 'Al \'Ayin',
        meaning: 'L’œil, protection contre le mal'
      },
      {
        name: 'Al Rakham',
        meaning: 'Le vautour, symbole de sagesse'
      },
      {
        name: 'Al Dhulla',
        meaning: 'La côte, représentation de la force'
      }
    ],
    unescoEyebrow: 'Reconnaissance mondiale',
    unescoTitle: 'Préservé pour les générations',
    unescoBody: 'Les savoir-faire du tissage Al Sadu aux EAU ont d’abord été inscrits en 2011 sur la Liste du patrimoine culturel immatériel nécessitant une sauvegarde urgente. Après un programme de sauvegarde, l’élément a été transféré en 2025 sur la Liste représentative du patrimoine culturel immatériel de l’humanité.',
    unescoBadge1: 'Inscrit 2011',
    unescoBadge2: 'Liste représentative',
    unescoBadge3: 'EAU • KSA • Koweït',
    paletteEyebrow: 'La palette',
    paletteTitle: 'Couleurs du Sadu',
    colors: [
      {
        name: 'Noir',
        hex: '#1a1a1a',
        meaning: 'Poil de chèvre, les tentes bédouines'
      },
      {
        name: 'Blanc',
        hex: '#f5f5f5',
        meaning: 'Laine de mouton, pureté'
      },
      {
        name: 'Rouge',
        hex: '#6f1524',
        meaning: 'Teinture naturelle de grenade, célébration'
      },
      {
        name: 'Orange',
        hex: '#d4804a',
        meaning: 'Safran, soleil du désert'
      }
    ],
    brandEyebrow: 'Bint Saeed × Sadu',
    brandTitle: 'Esprit du désert dans nos créations',
    brandP1: 'Les motifs audacieux et les couleurs chaudes du Sadu nous inspirent chez Bint Saeed. Nous intégrons les géométries traditionnelles à nos broderies et une palette désertique à nos tissus.',
    brandP2: 'Certaines pièces exclusives portent des bandes tissées à la main selon des techniques Sadu authentiques, en collaboration avec des artisanes bédouines qui préservent cet héritage.'
  },
  it: {
    heroTag: 'Heritage UNESCO',
    heroTitle: 'Sadu',
    heroSubtitle: 'L’arte tradizionale della tessitura beduina',
    storyEyebrow: 'Eredità del deserto',
    storyTitle: 'Tessuto del deserto',
    storyP1: 'Il Sadu è l’arte tradizionale della tessitura beduina praticata dalle donne in tutta la Penisola Arabica da millenni. Essenziale alla vita del deserto, tesseva tende, cuscini e bisacce da cammello.',
    storyP2: 'Ogni motivo del Sadu porta un significato e racconta una storia. Linee, triangoli e quadrati non sono meri ornamenti, sono simboli di natura, animali e vita nel deserto.',
    symbolsEyebrow: 'Simboli',
    symbolsTitle: 'Motivi con significato',
    symbolsLead: 'Ogni motivo del Sadu porta un simbolismo profondo tramandato di generazione in generazione',
    patterns: [
      {
        name: 'Al Shajara',
        meaning: 'Albero della vita, crescita e forza'
      },
      {
        name: 'Al \'Ayin',
        meaning: 'L’occhio, protezione dal male'
      },
      {
        name: 'Al Rakham',
        meaning: 'L’avvoltoio, simbolo di saggezza'
      },
      {
        name: 'Al Dhulla',
        meaning: 'La costola, rappresentazione della forza'
      }
    ],
    unescoEyebrow: 'Riconoscimento globale',
    unescoTitle: 'Preservato per le generazioni',
    unescoBody: 'Le abilità di tessitura Al Sadu degli EAU furono iscritte nel 2011 nella Lista del patrimonio culturale immateriale che necessita di salvaguardia urgente. Dopo un programma di salvaguardia, l’elemento è stato trasferito nel 2025 nella Lista rappresentativa del patrimonio culturale immateriale dell’umanità.',
    unescoBadge1: 'Iscritto 2011',
    unescoBadge2: 'Lista rappresentativa',
    unescoBadge3: 'EAU • KSA • Kuwait',
    paletteEyebrow: 'La palette',
    paletteTitle: 'Colori del Sadu',
    colors: [
      {
        name: 'Nero',
        hex: '#1a1a1a',
        meaning: 'Pelo di capra, le tende beduine'
      },
      {
        name: 'Bianco',
        hex: '#f5f5f5',
        meaning: 'Lana di pecora, purezza'
      },
      {
        name: 'Rosso',
        hex: '#6f1524',
        meaning: 'Tintura naturale di melograno, celebrazione'
      },
      {
        name: 'Arancio',
        hex: '#d4804a',
        meaning: 'Zafferano, sole del deserto'
      }
    ],
    brandEyebrow: 'Bint Saeed × Sadu',
    brandTitle: 'Spirito del deserto nei nostri disegni',
    brandP1: 'I motivi audaci e i colori caldi del Sadu ci ispirano da Bint Saeed. Integriamo le geometrie tradizionali nei ricami e una palette desertica nei tessuti.',
    brandP2: 'Alcuni pezzi esclusivi presentano bande tessute a mano con tecniche Sadu autentiche, in collaborazione con artigiane beduine che preservano questo heritage.'
  },
  es: {
    heroTag: 'Patrimonio UNESCO',
    heroTitle: 'Sadu',
    heroSubtitle: 'El arte tradicional del tejido beduino',
    storyEyebrow: 'Legado del desierto',
    storyTitle: 'Tejido del desierto',
    storyP1: 'El Sadu es el arte tradicional del tejido beduino practicado por las mujeres en toda la Península Arábiga durante milenios. Esencial a la vida del desierto, tejía tiendas, cojines y alforjas de camello.',
    storyP2: 'Cada motivo del Sadu guarda un sentido y cuenta una historia. Líneas, triángulos y cuadrados no son meros adornos: son símbolos de la naturaleza, los animales y la vida en el desierto.',
    symbolsEyebrow: 'Símbolos',
    symbolsTitle: 'Motivos con significado',
    symbolsLead: 'Cada motivo del Sadu porta un simbolismo profundo transmitido de generación en generación',
    patterns: [
      {
        name: 'Al Shajara',
        meaning: 'Árbol de la vida, crecimiento y fuerza'
      },
      {
        name: 'Al \'Ayin',
        meaning: 'El ojo, protección contra el mal'
      },
      {
        name: 'Al Rakham',
        meaning: 'El buitre, símbolo de sabiduría'
      },
      {
        name: 'Al Dhulla',
        meaning: 'La costilla, representación de la fuerza'
      }
    ],
    unescoEyebrow: 'Reconocimiento mundial',
    unescoTitle: 'Preservado para las generaciones',
    unescoBody: 'Al Sadu en los EAU se inscribió primero en 2011 en la Lista del patrimonio cultural inmaterial que necesita salvaguarda urgente de la UNESCO. Tras un programa de salvaguarda, el elemento se transfirió en 2025 a la Lista Representativa del Patrimonio Cultural Inmaterial de la Humanidad.',
    unescoBadge1: 'Inscrito 2011',
    unescoBadge2: 'Lista Representativa',
    unescoBadge3: 'EAU • KSA • Kuwait',
    paletteEyebrow: 'La paleta',
    paletteTitle: 'Colores del Sadu',
    colors: [
      {
        name: 'Negro',
        hex: '#1a1a1a',
        meaning: 'Pelo de cabra, las tiendas beduinas'
      },
      {
        name: 'Blanco',
        hex: '#f5f5f5',
        meaning: 'Lana de oveja, pureza'
      },
      {
        name: 'Rojo',
        hex: '#6f1524',
        meaning: 'Tinte natural de granada, celebración'
      },
      {
        name: 'Naranja',
        hex: '#d4804a',
        meaning: 'Azafrán, sol del desierto'
      }
    ],
    brandEyebrow: 'Bint Saeed × Sadu',
    brandTitle: 'Espíritu del desierto en nuestros diseños',
    brandP1: 'Los motivos audaces y los colores cálidos del Sadu nos inspiran en Bint Saeed. Integramos las geometrías tradicionales en nuestros bordados y una paleta desértica en nuestros tejidos.',
    brandP2: 'Algunas piezas exclusivas incluyen bandas tejidas a mano con técnicas Sadu auténticas, en colaboración con artesanas beduinas que preservan este legado.'
  },
  ru: {
    heroTag: 'Наследие ЮНЕСКО',
    heroTitle: 'Sadu',
    heroSubtitle: 'Традиционное бедуинское искусство ткачества',
    storyEyebrow: 'Наследие пустыни',
    storyTitle: 'Ткань пустыни',
    storyP1: 'Sadu, традиционное бедуинское ткачество, которым бедуинские женщины занимались на Аравийском полуострове тысячелетиями. Необходимое для жизни в пустыне, оно ткало шатры, подушки и верблюжьи сумки.',
    storyP2: 'Каждый узор Sadu несёт смысл и рассказывает историю. Линии, треугольники и квадраты, не просто украшения, а символы природы, животных и жизни в пустыне.',
    symbolsEyebrow: 'Символы',
    symbolsTitle: 'Узоры со смыслом',
    symbolsLead: 'Каждый узор Sadu несёт глубокую символику, передаваемую поколениями',
    patterns: [
      {
        name: 'Al Shajara',
        meaning: 'Древо жизни, рост и сила'
      },
      {
        name: 'Al \'Ayin',
        meaning: 'Глаз, защита от зла'
      },
      {
        name: 'Al Rakham',
        meaning: 'Стервятник, символ мудрости'
      },
      {
        name: 'Al Dhulla',
        meaning: 'Ребро, воплощение силы'
      }
    ],
    unescoEyebrow: 'Мировое признание',
    unescoTitle: 'Сохранено для поколений',
    unescoBody: 'Навыки ткачества Al Sadu в ОАЭ сначала внесли в 2011 году в Список нематериального культурного наследия ЮНЕСКО, нуждающегося в срочной охране. После программы охраны элемент в 2025 году перенесли в Репрезентативный список нематериального культурного наследия человечества.',
    unescoBadge1: 'Внесён 2011',
    unescoBadge2: 'Репрезентативный список',
    unescoBadge3: 'ОАЭ • КСА • Кувейт',
    paletteEyebrow: 'Палитра',
    paletteTitle: 'Цвета Sadu',
    colors: [
      {
        name: 'Чёрный',
        hex: '#1a1a1a',
        meaning: 'Козья шерсть, бедуинские шатры'
      },
      {
        name: 'Белый',
        hex: '#f5f5f5',
        meaning: 'Овечья шерсть, чистота'
      },
      {
        name: 'Красный',
        hex: '#6f1524',
        meaning: 'Натуральный краситель из граната, праздник'
      },
      {
        name: 'Оранжевый',
        hex: '#d4804a',
        meaning: 'Шафран, солнце пустыни'
      }
    ],
    brandEyebrow: 'Bint Saeed × Sadu',
    brandTitle: 'Дух пустыни в наших моделях',
    brandP1: 'Смелые узоры и тёплые цвета Sadu вдохновляют нас в Bint Saeed. Мы вплетаем традиционную геометрию в вышивку и пустынную палитру в ткани.',
    brandP2: 'Некоторые эксклюзивные вещи украшены лентами ручного ткачества по подлинным техникам Sadu, в сотрудничестве с бедуинскими мастерицами, хранящими это наследие.'
  },
  zh: {
    heroTag: '教科文组织遗产',
    heroTitle: 'Sadu',
    heroSubtitle: '传统贝都因编织艺术',
    storyEyebrow: '沙漠传承',
    storyTitle: '沙漠之织物',
    storyP1: 'Sadu 是贝都因女性在阿拉伯半岛延续数千年的传统编织艺术。它是沙漠生活的必需，用以编织帐篷、靠垫与骆驼袋。',
    storyP2: 'Sadu 的每一纹样皆有深意并讲述故事。线条、三角与方块并非单纯装饰：它们是自然、动物与沙漠生活的象征。',
    symbolsEyebrow: '象征',
    symbolsTitle: '有意义的纹样',
    symbolsLead: 'Sadu 的每一纹样都承载代代相传的深层象征',
    patterns: [
      {
        name: 'Al Shajara',
        meaning: '生命之树：象征生长与力量'
      },
      {
        name: 'Al \'Ayin',
        meaning: '眼睛：抵御邪恶'
      },
      {
        name: 'Al Rakham',
        meaning: '秃鹫：智慧之象征'
      },
      {
        name: 'Al Dhulla',
        meaning: '肋骨：力量的呈现'
      }
    ],
    unescoEyebrow: '全球认可',
    unescoTitle: '为世代保存',
    unescoBody: '阿联酋 Al Sadu 织造技艺于 2011 年先被列入联合国教科文组织急需保护的非物质文化遗产名录；经持续保护后，于 2025 年转入人类非物质文化遗产代表作名录。',
    unescoBadge1: '列入 2011',
    unescoBadge2: '代表作名录',
    unescoBadge3: '阿联酋 • 沙特 • 科威特',
    paletteEyebrow: '色板',
    paletteTitle: 'Sadu 之色',
    colors: [
      {
        name: '黑',
        hex: '#1a1a1a',
        meaning: '山羊毛：贝都因帐篷'
      },
      {
        name: '白',
        hex: '#f5f5f5',
        meaning: '绵羊毛：纯洁'
      },
      {
        name: '红',
        hex: '#6f1524',
        meaning: '石榴天然染料：庆典'
      },
      {
        name: '橙',
        hex: '#d4804a',
        meaning: '藏红花：沙漠之阳'
      }
    ],
    brandEyebrow: 'Bint Saeed × Sadu',
    brandTitle: '设计中的沙漠之魂',
    brandP1: 'Sadu 大胆的纹样与温暖的色彩启发着 Bint Saeed。我们将传统几何融入刺绣，并以沙漠灵感的色板用于面料。',
    brandP2: '部分独家单品带有以正统 Sadu 技法手工织成的饰带，与守护这一古老传承的贝都因工匠合作完成。'
  },
  de: {
    heroTag: 'UNESCO-Erbe',
    heroTitle: 'Sadu',
    heroSubtitle: 'Die traditionelle beduinische Webkunst',
    storyEyebrow: 'Wüstenerbe',
    storyTitle: 'Gewebe der Wüste',
    storyP1: 'Sadu ist die traditionelle beduinische Webkunst, die Beduinenfrauen seit Jahrtausenden auf der Arabischen Halbinsel pflegen. Wesentlich für das Wüstenleben webten sie Zelte, Kissen und Kamelsätteltaschen.',
    storyP2: 'Jedes Muster im Sadu trägt Sinn und erzählt eine Geschichte. Linien, Dreiecke und Quadrate sind keine bloßen Verzierungen, sie sind Symbole für Natur, Tiere und das Leben in der Wüste.',
    symbolsEyebrow: 'Symbole',
    symbolsTitle: 'Muster mit Bedeutung',
    symbolsLead: 'Jedes Muster im Sadu trägt tiefe Symbolik, über Generationen weitergegeben',
    patterns: [
      {
        name: 'Al Shajara',
        meaning: 'Baum des Lebens, Wachstum und Kraft'
      },
      {
        name: 'Al \'Ayin',
        meaning: 'Das Auge, Schutz vor dem Bösen'
      },
      {
        name: 'Al Rakham',
        meaning: 'Der Geier, Symbol der Weisheit'
      },
      {
        name: 'Al Dhulla',
        meaning: 'Die Rippe, Darstellung von Stärke'
      }
    ],
    unescoEyebrow: 'Weltweite Anerkennung',
    unescoTitle: 'Für Generationen bewahrt',
    unescoBody: 'Die Al-Sadu-Webfähigkeiten der VAE wurden 2011 zunächst in die UNESCO-Liste des immateriellen Kulturerbes aufgenommen, das dringender Sicherung bedarf. Nach einem Sicherungsprogramm wurde das Element 2025 auf die Repräsentative Liste des immateriellen Kulturerbes der Menschheit übertragen.',
    unescoBadge1: 'Eingetragen 2011',
    unescoBadge2: 'Repräsentative Liste',
    unescoBadge3: 'VAE • KSA • Kuwait',
    paletteEyebrow: 'Die Palette',
    paletteTitle: 'Farben des Sadu',
    colors: [
      {
        name: 'Schwarz',
        hex: '#1a1a1a',
        meaning: 'Ziegenhaar, beduinische Zelte'
      },
      {
        name: 'Weiß',
        hex: '#f5f5f5',
        meaning: 'Schafwolle, Reinheit'
      },
      {
        name: 'Rot',
        hex: '#6f1524',
        meaning: 'Naturfarbe aus Granatapfel, Feier'
      },
      {
        name: 'Orange',
        hex: '#d4804a',
        meaning: 'Safran, Wüstensonne'
      }
    ],
    brandEyebrow: 'Bint Saeed × Sadu',
    brandTitle: 'Wüstengeist in unseren Entwürfen',
    brandP1: 'Die kühnen Muster und warmen Farben des Sadu inspirieren uns bei Bint Saeed. Wir integrieren traditionelle Geometrien in Stickerei und eine wüsteninspirierte Palette in unsere Stoffe.',
    brandP2: 'Einige exklusive Stücke tragen handgewebte Bänder mit authentischen Sadu-Techniken, in Zusammenarbeit mit beduinischen Handwerkerinnen, die dieses Erbe bewahren.'
  },
  nl: {
    heroTag: 'UNESCO-erfgoed',
    heroTitle: 'Sadu',
    heroSubtitle: 'De traditionele Bedoeïense weefkunst',
    storyEyebrow: 'Woestijnerfgoed',
    storyTitle: 'Weefsel van de woestijn',
    storyP1: 'Sadu is de traditionele Bedoeïense weefkunst die Bedoeïense vrouwen al duizenden jaren beoefenen op het Arabisch Schiereiland. Essentieel voor het woestijnleven weefden zij tenten, kussens en kameelzakken.',
    storyP2: 'Elk patroon in Sadu draagt betekenis en vertelt een verhaal. Lijnen, driehoeken en vierkanten zijn geen loutere versiering, het zijn symbolen van natuur, dieren en het leven in de woestijn.',
    symbolsEyebrow: 'Symbolen',
    symbolsTitle: 'Patronen met betekenis',
    symbolsLead: 'Elk patroon in Sadu draagt diepe symboliek die generaties is doorgegeven',
    patterns: [
      {
        name: 'Al Shajara',
        meaning: 'Levensboom, groei en kracht'
      },
      {
        name: 'Al \'Ayin',
        meaning: 'Het oog, bescherming tegen het kwaad'
      },
      {
        name: 'Al Rakham',
        meaning: 'De gier, symbool van wijsheid'
      },
      {
        name: 'Al Dhulla',
        meaning: 'De rib, voorstelling van kracht'
      }
    ],
    unescoEyebrow: 'Wereldwijde erkenning',
    unescoTitle: 'Bewaard voor generaties',
    unescoBody: 'De Al Sadu-weefvaardigheden van de VAE werden in 2011 eerst opgenomen op de UNESCO-lijst van immaterieel cultureel erfgoed dat dringende bescherming nodig heeft. Na een beschermingsprogramma werd het element in 2025 overgebracht naar de Representatieve Lijst van het immaterieel cultureel erfgoed van de mensheid.',
    unescoBadge1: 'Ingeschreven 2011',
    unescoBadge2: 'Representatieve Lijst',
    unescoBadge3: 'VAE • KSA • Koeweit',
    paletteEyebrow: 'Het palet',
    paletteTitle: 'Kleuren van Sadu',
    colors: [
      {
        name: 'Zwart',
        hex: '#1a1a1a',
        meaning: 'Geitenhaar, Bedoeïense tenten'
      },
      {
        name: 'Wit',
        hex: '#f5f5f5',
        meaning: 'Schapenwol, zuiverheid'
      },
      {
        name: 'Rood',
        hex: '#6f1524',
        meaning: 'Natuurlijke kleurstof van granaatappel, viering'
      },
      {
        name: 'Oranje',
        hex: '#d4804a',
        meaning: 'Saffraan, woestijnzon'
      }
    ],
    brandEyebrow: 'Bint Saeed × Sadu',
    brandTitle: 'Woestijngeest in onze ontwerpen',
    brandP1: 'De gedurfde patronen en warme kleuren van Sadu inspireren ons bij Bint Saeed. We brengen traditionele geometrieën in borduurwerk en een woestijnpalet in onze stoffen.',
    brandP2: 'Sommige exclusieve stukken dragen handgeweven banden met authentieke Sadu-technieken, in samenwerking met Bedoeïense ambachtsvrouwen die dit erfgoed bewaren.'
  },
  pt: {
    heroTag: 'Património UNESCO',
    heroTitle: 'Sadu',
    heroSubtitle: 'A arte tradicional da tecelagem beduína',
    storyEyebrow: 'Legado do deserto',
    storyTitle: 'Tecido do deserto',
    storyP1: 'O Sadu é a arte tradicional da tecelagem beduína praticada pelas mulheres em toda a Península Arábica durante milénios. Essencial à vida no deserto, tecia tendas, almofadas e alforjes de camelo.',
    storyP2: 'Cada padrão do Sadu carrega sentido e conta uma história. Linhas, triângulos e quadrados não são meros ornamentos, são símbolos da natureza, dos animais e da vida no deserto.',
    symbolsEyebrow: 'Símbolos',
    symbolsTitle: 'Padrões com significado',
    symbolsLead: 'Cada padrão do Sadu carrega simbolismo profundo transmitido de geração em geração',
    patterns: [
      {
        name: 'Al Shajara',
        meaning: 'Árvore da vida, crescimento e força'
      },
      {
        name: 'Al \'Ayin',
        meaning: 'O olho, proteção contra o mal'
      },
      {
        name: 'Al Rakham',
        meaning: 'O abutre, símbolo de sabedoria'
      },
      {
        name: 'Al Dhulla',
        meaning: 'A costela, representação da força'
      }
    ],
    unescoEyebrow: 'Reconhecimento mundial',
    unescoTitle: 'Preservado para as gerações',
    unescoBody: 'As competências de tecelagem Al Sadu dos EAU foram primeiro inscritas em 2011 na Lista do património cultural imaterial que necessita de salvaguarda urgente da UNESCO. Após um programa de salvaguarda, o elemento foi transferido em 2025 para a Lista Representativa do Património Cultural Imaterial da Humanidade.',
    unescoBadge1: 'Inscrito 2011',
    unescoBadge2: 'Lista Representativa',
    unescoBadge3: 'EAU • KSA • Kuwait',
    paletteEyebrow: 'A paleta',
    paletteTitle: 'Cores do Sadu',
    colors: [
      {
        name: 'Preto',
        hex: '#1a1a1a',
        meaning: 'Pelo de cabra, as tendas beduínas'
      },
      {
        name: 'Branco',
        hex: '#f5f5f5',
        meaning: 'Lã de ovelha, pureza'
      },
      {
        name: 'Vermelho',
        hex: '#6f1524',
        meaning: 'Tintura natural de romã, celebração'
      },
      {
        name: 'Laranja',
        hex: '#d4804a',
        meaning: 'Açafrão, sol do deserto'
      }
    ],
    brandEyebrow: 'Bint Saeed × Sadu',
    brandTitle: 'Espírito do deserto nos nossos desenhos',
    brandP1: 'Os padrões ousados e as cores quentes do Sadu inspiram-nos na Bint Saeed. Integramos geometrias tradicionais nos bordados e uma paleta desértica nos tecidos.',
    brandP2: 'Algumas peças exclusivas incluem faixas tecidas à mão com técnicas Sadu autênticas, em colaboração com artesãs beduínas que preservam este legado.'
  },
  id: {
    heroTag: 'Warisan UNESCO',
    heroTitle: 'Sadu',
    heroSubtitle: 'Seni tenun tradisional Badui',
    storyEyebrow: 'Warisan gurun',
    storyTitle: 'Kain gurun',
    storyP1: 'Sadu adalah seni tenun tradisional Badui yang dipraktikkan perempuan Badui di Semenanjung Arabia selama ribuan tahun. Esensial bagi kehidupan gurun, seni ini menenun tenda, bantal, dan tas unta.',
    storyP2: 'Setiap pola dalam Sadu membawa makna dan menceritakan kisah. Garis, segitiga, dan persegi bukan sekadar hiasan, mereka simbol alam, hewan, dan kehidupan di gurun.',
    symbolsEyebrow: 'Simbol',
    symbolsTitle: 'Pola bermakna',
    symbolsLead: 'Setiap pola dalam Sadu membawa simbolisme mendalam yang diwariskan lintas generasi',
    patterns: [
      {
        name: 'Al Shajara',
        meaning: 'Pohon kehidupan, pertumbuhan dan kekuatan'
      },
      {
        name: 'Al \'Ayin',
        meaning: 'Mata, perlindungan dari kejahatan'
      },
      {
        name: 'Al Rakham',
        meaning: 'Burung nasar, simbol kebijaksanaan'
      },
      {
        name: 'Al Dhulla',
        meaning: 'Tulang rusuk, representasi kekuatan'
      }
    ],
    unescoEyebrow: 'Pengakuan global',
    unescoTitle: 'Dilestarikan untuk generasi',
    unescoBody: 'Keterampilan tenun Al Sadu di UEA pertama kali dicatat pada 2011 dalam Daftar Warisan Budaya Takbenda UNESCO yang memerlukan perlindungan mendesak. Setelah program pelestarian, unsur tersebut dipindahkan pada 2025 ke Daftar Representatif Warisan Budaya Takbenda umat manusia.',
    unescoBadge1: 'Dicatat 2011',
    unescoBadge2: 'Daftar Representatif',
    unescoBadge3: 'UEA • KSA • Kuwait',
    paletteEyebrow: 'Palet',
    paletteTitle: 'Warna Sadu',
    colors: [
      {
        name: 'Hitam',
        hex: '#1a1a1a',
        meaning: 'Bulu kambing, tenda Badui'
      },
      {
        name: 'Putih',
        hex: '#f5f5f5',
        meaning: 'Wol domba, kemurnian'
      },
      {
        name: 'Merah',
        hex: '#6f1524',
        meaning: 'Pewarna alami delima, perayaan'
      },
      {
        name: 'Oranye',
        hex: '#d4804a',
        meaning: 'Saffron, matahari gurun'
      }
    ],
    brandEyebrow: 'Bint Saeed × Sadu',
    brandTitle: 'Jiwa gurun dalam desain kami',
    brandP1: 'Pola berani dan warna hangat Sadu mengilhami kami di Bint Saeed. Kami memasukkan geometri tradisional ke sulaman dan palet gurun ke kain kami.',
    brandP2: 'Beberapa karya eksklusif menampilkan pita tenun tangan dengan teknik Sadu otentik, dibuat bersama pengrajin Badui yang menjaga warisan kuno ini.'
  },
  ms: {
    heroTag: 'Warisan UNESCO',
    heroTitle: 'Sadu',
    heroSubtitle: 'Seni tenunan tradisional Badwi',
    storyEyebrow: 'Warisan gurun',
    storyTitle: 'Kain gurun',
    storyP1: 'Sadu ialah seni tenunan tradisional Badwi yang diamalkan wanita Badwi di Semenanjung Arab selama beribu tahun. Penting bagi kehidupan gurun, seni ini menenun khemah, bantal dan beg unta.',
    storyP2: 'Setiap corak dalam Sadu membawa makna dan menceritakan kisah. Garis, segitiga dan segi empat bukan sekadar hiasan, ia simbol alam, haiwan dan kehidupan di gurun.',
    symbolsEyebrow: 'Simbol',
    symbolsTitle: 'Corak bermakna',
    symbolsLead: 'Setiap corak dalam Sadu membawa simbolisme mendalam yang diwarisi merentas generasi',
    patterns: [
      {
        name: 'Al Shajara',
        meaning: 'Pokok kehidupan, pertumbuhan dan kekuatan'
      },
      {
        name: 'Al \'Ayin',
        meaning: 'Mata, perlindungan daripada kejahatan'
      },
      {
        name: 'Al Rakham',
        meaning: 'Burung nasar, simbol kebijaksanaan'
      },
      {
        name: 'Al Dhulla',
        meaning: 'Tulang rusuk, perwakilan kekuatan'
      }
    ],
    unescoEyebrow: 'Pengiktirafan global',
    unescoTitle: 'Dipelihara untuk generasi',
    unescoBody: 'Kemahiran tenunan Al Sadu di UAE mula-mula disenaraikan pada 2011 dalam Senarai Warisan Budaya Tidak Ketara UNESCO yang memerlukan perlindungan segera. Selepas program pemeliharaan, unsur itu dipindahkan pada 2025 ke Senarai Representatif Warisan Budaya Tidak Ketara umat manusia.',
    unescoBadge1: 'Disenaraikan 2011',
    unescoBadge2: 'Senarai Representatif',
    unescoBadge3: 'UAE • KSA • Kuwait',
    paletteEyebrow: 'Palet',
    paletteTitle: 'Warna Sadu',
    colors: [
      {
        name: 'Hitam',
        hex: '#1a1a1a',
        meaning: 'Bulu kambing, khemah Badwi'
      },
      {
        name: 'Putih',
        hex: '#f5f5f5',
        meaning: 'Bulu biri-biri, kesucian'
      },
      {
        name: 'Merah',
        hex: '#6f1524',
        meaning: 'Pewarna semula jadi delima, perayaan'
      },
      {
        name: 'Oren',
        hex: '#d4804a',
        meaning: 'Saffron, matahari gurun'
      }
    ],
    brandEyebrow: 'Bint Saeed × Sadu',
    brandTitle: 'Semangat gurun dalam reka bentuk kami',
    brandP1: 'Corak berani dan warna hangat Sadu memberi inspirasi kepada kami di Bint Saeed. Kami memasukkan geometri tradisional ke dalam sulaman dan palet gurun ke dalam fabrik kami.',
    brandP2: 'Sesetengah karya eksklusif menampilkan jalur tenunan tangan dengan teknik Sadu tulen, dihasilkan bersama pengrajin Badwi yang memelihara warisan kuno ini.'
  },
}

export function getSaduPageCopy(locale: AppLocale | string): SaduPageCopy {
  const key = (locale in SADU ? locale: 'en') as AppLocale
  return { ...getHeritageSharedChrome(key), ...SADU[key] }
}
