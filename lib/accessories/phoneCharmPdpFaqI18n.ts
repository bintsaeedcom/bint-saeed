import type { AppLocale } from '@/lib/i18n/routing'
import type { AlQuaaPhoneCharmId, PhoneCharmFaqItem } from '@/lib/accessories/phoneCharmPdpContent'
import { getTheCodesSections } from '@/lib/the-codes/codesPageContent'

export type PhoneCharmStoneKey =
  | 'fuchsia-jade'
  | 'orange-jade'
  | 'onyx'
  | 'tiger-eye'
  | 'malachite'
  | 'lapis-lazuli'
  | 'rose-quartz'

const ID_TO_STONE_KEY: Record<AlQuaaPhoneCharmId, PhoneCharmStoneKey> = {
  'al-quaa-phone-charm-fuchsia-jade': 'fuchsia-jade',
  'al-quaa-phone-charm-orange-jade': 'orange-jade',
  'al-quaa-phone-charm-onyx': 'onyx',
  'al-quaa-phone-charm-tiger-eye': 'tiger-eye',
  'al-quaa-phone-charm-malachite': 'malachite',
  'al-quaa-phone-charm-lapis-lazuli': 'lapis-lazuli',
  'al-quaa-phone-charm-rose-quartz': 'rose-quartz',
}

/** Same primary Al Ain Rosette paragraph as /the-codes — single source of truth. */
function getAlAinRosetteFaqAnswer(locale: AppLocale): string {
  const section = getTheCodesSections(locale).find((s) => s.id === 'al-ain-rosette')
  const paragraph = section?.paragraphs[0]?.trim()
  if (paragraph) return paragraph
  return getTheCodesSections('en').find((s) => s.id === 'al-ain-rosette')!.paragraphs[0]!
}

const CARE_A_EN =
  'Avoid contact with water, perfume and harsh chemicals. Natural gemstones may chip or break if dropped onto hard surfaces or subjected to impact. Wipe gently with a soft, dry cloth when needed. Do not soak the stones in water or cleansers. Store in a soft pouch or Bint Saeed gift box when not in use, away from sunlight, excessive heat and damp conditions.'

/** Colour-treatment note ONLY on fuchsia-jade / orange-jade keys — never on other stones. */
const NATURAL_A_EN: Record<PhoneCharmStoneKey, string> = {
  'fuchsia-jade':
    'Yes. Each Bint Saeed Natural Stone Phone Charm is hand-assembled using genuine natural gemstones. Variations in colour, pattern and inclusions are unique characteristics of each stone. The Fuchsia Jade beads are natural jade whose luminous colour has been carefully enhanced through traditional colour treatment — a long-established practice in fine stone jewellery that deepens the stone’s presence while preserving its natural character.',
  'orange-jade':
    'Yes. Each Bint Saeed Natural Stone Phone Charm is hand-assembled using genuine natural gemstones. Variations in colour, pattern and inclusions are unique characteristics of each stone. The Orange Jade beads are natural jade whose warm colour has been carefully enhanced through traditional colour treatment — a refined atelier practice that intensifies the stone’s glow while leaving its natural texture and individuality intact.',
  onyx:
    'Yes. Each Bint Saeed Natural Stone Phone Charm is hand-assembled using genuine natural gemstones. Variations in colour, pattern and inclusions are unique characteristics of each stone. The polished Onyx beads retain their deep natural black tone — a quiet, graphic presence shaped only by careful cutting and finishing.',
  'tiger-eye':
    'Yes. Each Bint Saeed Natural Stone Phone Charm is hand-assembled using genuine natural gemstones. Variations in colour, pattern and inclusions are unique characteristics of each stone. Tiger Eye shows its natural chatoyant bands of golden brown in its own right — silk-like flashes of light that no two beads share in quite the same way.',
  malachite:
    'Yes. Each Bint Saeed Natural Stone Phone Charm is hand-assembled using genuine natural gemstones. Variations in colour, pattern and inclusions are unique characteristics of each stone. Malachite reveals its natural green banding and depth of colour exactly as nature formed it — each bead a small landscape of its own.',
  'lapis-lazuli':
    'Yes. Each Bint Saeed Natural Stone Phone Charm is hand-assembled using genuine natural gemstones. Variations in colour, pattern and inclusions are unique characteristics of each stone. Lapis Lazuli keeps its natural ultramarine depth, often flecked with golden pyrite — a royal blue that belongs entirely to the stone.',
  'rose-quartz':
    'Yes. Each Bint Saeed Natural Stone Phone Charm is hand-assembled using genuine natural gemstones. Variations in colour, pattern and inclusions are unique characteristics of each stone. Rose Quartz appears in its soft natural blush — a gentle pink shaped by careful selection and polishing alone.',
}

const FIT_A_EN: Record<PhoneCharmStoneKey, string> = {
  'fuchsia-jade':
    'The Al Quaa Fuchsia Jade Phone Charm is designed for compatible phone cases with attachment points. Please note that the phone case is not included — so you may pair the vivid fuchsia jade with the case that already suits your everyday.',
  'orange-jade':
    'The Al Quaa Orange Jade Phone Charm is designed for compatible phone cases with attachment points. Please note that the phone case is not included — leaving you free to set the warm orange jade against the case you prefer.',
  onyx:
    'The Al Quaa Onyx Phone Charm is designed for compatible phone cases with attachment points. Please note that the phone case is not included — allowing the polished black onyx to sit quietly against whichever case you already carry.',
  'tiger-eye':
    'The Al Quaa Tiger Eye Phone Charm is designed for compatible phone cases with attachment points. Please note that the phone case is not included — so the golden-brown chatoyance can move with the case you choose.',
  malachite:
    'The Al Quaa Malachite Phone Charm is designed for compatible phone cases with attachment points. Please note that the phone case is not included — pairing the vivid green banding with the case that best frames it.',
  'lapis-lazuli':
    'The Al Quaa Lapis Lazuli Phone Charm is designed for compatible phone cases with attachment points. Please note that the phone case is not included — so the deep ultramarine can accompany the case you already use.',
  'rose-quartz':
    'The Al Quaa Rose Quartz Phone Charm is designed for compatible phone cases with attachment points. Please note that the phone case is not included — allowing the soft blush quartz to complement the case you prefer.',
}

type FaqLocalePack = {
  naturalQ: string
  naturalA: Record<PhoneCharmStoneKey, string>
  rosetteQ: string
  fitQ: string
  fitA: Record<PhoneCharmStoneKey, string>
  careQ: string
  careA: string
}

const FAQ_BY_LOCALE: Record<AppLocale, FaqLocalePack> = {
  en: {
    naturalQ: 'Are the gemstones natural?',
    naturalA: NATURAL_A_EN,
    rosetteQ: 'What is the Al Ain Rosette?',
    fitQ: 'Will the phone charm fit my phone?',
    fitA: FIT_A_EN,
    careQ: 'How should I care for my Natural Stone Phone Charm?',
    careA: CARE_A_EN,
  },
  ar: {
    naturalQ: 'هل الأحجار طبيعية؟',
    naturalA: {
      'fuchsia-jade':
        'نعم. كل تعليقة هاتف من الأحجار الطبيعية لدى Bint Saeed تُجمَّع يدوياً من أحجار كريمة طبيعية أصيلة. وتباينات اللون والنمط والشوائب خصائص فريدة لكل حجر. خرز اليشم الفوشي من اليشم الطبيعي وقد عُزّز لونه المضيء بعناية عبر معالجة لونية تقليدية — ممارسة عريقة في مجوهرات الأحجار الراقية تعمّق حضور الحجر مع الحفاظ على طابعه الطبيعي.',
      'orange-jade':
        'نعم. كل تعليقة هاتف من الأحجار الطبيعية لدى Bint Saeed تُجمَّع يدوياً من أحجار كريمة طبيعية أصيلة. وتباينات اللون والنمط والشوائب خصائص فريدة لكل حجر. خرز اليشم البرتقالي من اليشم الطبيعي وقد عُزّز دفء لونه بعناية عبر معالجة لونية تقليدية — ممارسة مرسم رفيعة تُكثّف توهّج الحجر مع الإبقاء على ملمسه الطبيعي وتفرّده.',
      onyx:
        'نعم. كل تعليقة هاتف من الأحجار الطبيعية لدى Bint Saeed تُجمَّع يدوياً من أحجار كريمة طبيعية أصيلة. وتباينات اللون والنمط والشوائب خصائص فريدة لكل حجر. يحتفظ خرز الأونكس المصقول بسواده الطبيعي العميق — حضوراً هادئاً وبيانياً لا يحتاج أكثر من قصٍّ وتشطيب دقيقين.',
      'tiger-eye':
        'نعم. كل تعليقة هاتف من الأحجار الطبيعية لدى Bint Saeed تُجمَّع يدوياً من أحجار كريمة طبيعية أصيلة. وتباينات اللون والنمط والشوائب خصائص فريدة لكل حجر. تُظهر عين النمر أشرطتها الطبيعية الذهبية البنّية ذات البريق الحريري — ومضات ضوء لا يتشابه فيها خرزان تماماً.',
      malachite:
        'نعم. كل تعليقة هاتف من الأحجار الطبيعية لدى Bint Saeed تُجمَّع يدوياً من أحجار كريمة طبيعية أصيلة. وتباينات اللون والنمط والشوائب خصائص فريدة لكل حجر. يكشف الملاكيت عن تعاريجه الخضراء الطبيعية وعمق لونه كما شكّلته الطبيعة — كل خرزة مشهداً صغيراً بذاته.',
      'lapis-lazuli':
        'نعم. كل تعليقة هاتف من الأحجار الطبيعية لدى Bint Saeed تُجمَّع يدوياً من أحجار كريمة طبيعية أصيلة. وتباينات اللون والنمط والشوائب خصائص فريدة لكل حجر. يحتفظ اللازورد بعمقه الطبيعي فوق البنفسجي، وغالباً بنثار ذهب البيريت — أزرق ملكي ينتمي إلى الحجر وحده.',
      'rose-quartz':
        'نعم. كل تعليقة هاتف من الأحجار الطبيعية لدى Bint Saeed تُجمَّع يدوياً من أحجار كريمة طبيعية أصيلة. وتباينات اللون والنمط والشوائب خصائص فريدة لكل حجر. يظهر الكوارتز الوردي بورديّته الطبيعية الناعمة — وردياً رقيقاً يتشكّل بالاختيار والصقل الدقيقين وحدهما.',
    },
    rosetteQ: 'ما هي روزيت العين؟',
    fitQ: 'هل تناسب تعليقة الهاتف جهازي؟',
    fitA: {
      'fuchsia-jade':
        'صُممت تعليقة هاتف القوع من اليشم الفوشي لأغلفة الهاتف المتوافقة ذات نقاط التثبيت. يُرجى ملاحظة أن غلاف الهاتف غير مشمول — لتتمكّني من مزاوجة اليشم الفوشي النابض مع الغلاف الذي يناسب يومك أصلاً.',
      'orange-jade':
        'صُممت تعليقة هاتف القوع من اليشم البرتقالي لأغلفة الهاتف المتوافقة ذات نقاط التثبيت. يُرجى ملاحظة أن غلاف الهاتف غير مشمول — لتختاري بحرية الغلاف الذي يُبرز دفء اليشم البرتقالي.',
      onyx:
        'صُممت تعليقة هاتف القوع من الأونكس لأغلفة الهاتف المتوافقة ذات نقاط التثبيت. يُرجى ملاحظة أن غلاف الهاتف غير مشمول — ليجلس الأونكس الأسود المصقول بهدوء على الغلاف الذي تحملينه أصلاً.',
      'tiger-eye':
        'صُممت تعليقة هاتف القوع من عين النمر لأغلفة الهاتف المتوافقة ذات نقاط التثبيت. يُرجى ملاحظة أن غلاف الهاتف غير مشمول — ليتحرّك البريق الذهبي البنّي مع الغلاف الذي تختارينه.',
      malachite:
        'صُممت تعليقة هاتف القوع من الملاكيت لأغلفة الهاتف المتوافقة ذات نقاط التثبيت. يُرجى ملاحظة أن غلاف الهاتف غير مشمول — لتُزاوجي التعاريج الخضراء النابضة مع الغلاف الذي يُبرزها بأفضل صورة.',
      'lapis-lazuli':
        'صُممت تعليقة هاتف القوع من اللازورد لأغلفة الهاتف المتوافقة ذات نقاط التثبيت. يُرجى ملاحظة أن غلاف الهاتف غير مشمول — ليرافق الأزرق فوق البنفسجي العميق الغلاف الذي تستخدمينه أصلاً.',
      'rose-quartz':
        'صُممت تعليقة هاتف القوع من الكوارتز الوردي لأغلفة الهاتف المتوافقة ذات نقاط التثبيت. يُرجى ملاحظة أن غلاف الهاتف غير مشمول — ليكمل الكوارتز الوردي الناعم الغلاف الذي تفضّلينه.',
    },
    careQ: 'كيف أعتني بتعليقة هاتفي من الأحجار الطبيعية؟',
    careA:
      'تجنّبي ملامسة الماء والعطر والمواد الكيميائية القاسية. قد تتشقّق الأحجار الطبيعية أو تنكسر إذا سقطت على سطح صلب أو تعرّضت لصدمة. امسحي بلطف بقطعة قماش ناعمة وجافة عند الحاجة. لا تغمري الأحجار في الماء أو المنظفات. احفظيها في جراب ناعم أو علبة هدايا Bint Saeed عند عدم الاستخدام، بعيداً عن الشمس والحرارة الزائدة والرطوبة.',
  },
  fr: {
    naturalQ: 'Les pierres sont-elles naturelles ?',
    naturalA: {
      'fuchsia-jade':
        'Oui. Chaque breloque de téléphone en pierres naturelles Bint Saeed est assemblée à la main à partir de véritables gemmes naturelles. Les variations de couleur, de motif et d’inclusions sont des caractéristiques uniques de chaque pierre. Les perles de jade fuchsia sont du jade naturel dont la couleur lumineuse a été soigneusement sublimée par un traitement de couleur traditionnel — une pratique ancienne de la joaillerie fine qui approfondit la présence de la pierre tout en préservant son caractère naturel.',
      'orange-jade':
        'Oui. Chaque breloque de téléphone en pierres naturelles Bint Saeed est assemblée à la main à partir de véritables gemmes naturelles. Les variations de couleur, de motif et d’inclusions sont des caractéristiques uniques de chaque pierre. Les perles de jade orange sont du jade naturel dont la chaleur de ton a été soigneusement sublimée par un traitement de couleur traditionnel — une pratique d’atelier raffinée qui intensifie l’éclat de la pierre tout en laissant intactes sa texture et son individualité naturelles.',
      onyx:
        'Oui. Chaque breloque de téléphone en pierres naturelles Bint Saeed est assemblée à la main à partir de véritables gemmes naturelles. Les variations de couleur, de motif et d’inclusions sont des caractéristiques uniques de chaque pierre. Les perles d’onyx poli conservent leur noir naturel profond — une présence graphique et discrète qui n’exige rien d’autre qu’une coupe et une finition soignées.',
      'tiger-eye':
        'Oui. Chaque breloque de téléphone en pierres naturelles Bint Saeed est assemblée à la main à partir de véritables gemmes naturelles. Les variations de couleur, de motif et d’inclusions sont des caractéristiques uniques de chaque pierre. L’œil de tigre révèle ses bandes chatoyantes naturelles brun doré — des éclats soyeux de lumière qu’aucune perle ne partage tout à fait de la même manière.',
      malachite:
        'Oui. Chaque breloque de téléphone en pierres naturelles Bint Saeed est assemblée à la main à partir de véritables gemmes naturelles. Les variations de couleur, de motif et d’inclusions sont des caractéristiques uniques de chaque pierre. La malachite montre ses bandes vertes naturelles et sa profondeur de couleur telles que la nature les a formées — chaque perle un petit paysage à part entière.',
      'lapis-lazuli':
        'Oui. Chaque breloque de téléphone en pierres naturelles Bint Saeed est assemblée à la main à partir de véritables gemmes naturelles. Les variations de couleur, de motif et d’inclusions sont des caractéristiques uniques de chaque pierre. Le lapis-lazuli conserve sa profondeur d’outremer naturelle, souvent piquée d’or de pyrite — un bleu royal qui appartient entièrement à la pierre.',
      'rose-quartz':
        'Oui. Chaque breloque de téléphone en pierres naturelles Bint Saeed est assemblée à la main à partir de véritables gemmes naturelles. Les variations de couleur, de motif et d’inclusions sont des caractéristiques uniques de chaque pierre. Le quartz rose apparaît dans son blush naturel délicat — un rose doux façonné par la seule patience d’une sélection et d’un polissage attentifs.',
    },
    rosetteQ: 'Qu’est-ce que la rosette d’Al Ain ?',
    fitQ: 'La breloque convient-elle à mon téléphone ?',
    fitA: {
      'fuchsia-jade':
        'La breloque de téléphone Al Quaa en jade fuchsia est conçue pour les coques compatibles munies de points d’attache. Veuillez noter que la coque n’est pas incluse — afin de pouvoir associer le jade fuchsia éclatant à celle qui accompagne déjà votre quotidien.',
      'orange-jade':
        'La breloque de téléphone Al Quaa en jade orange est conçue pour les coques compatibles munies de points d’attache. Veuillez noter que la coque n’est pas incluse — vous laissant libre d’associer le jade orange chaleureux à celle que vous préférez.',
      onyx:
        'La breloque de téléphone Al Quaa en onyx est conçue pour les coques compatibles munies de points d’attache. Veuillez noter que la coque n’est pas incluse — permettant à l’onyx noir poli de se poser discrètement sur celle que vous portez déjà.',
      'tiger-eye':
        'La breloque de téléphone Al Quaa en œil de tigre est conçue pour les coques compatibles munies de points d’attache. Veuillez noter que la coque n’est pas incluse — pour que le chatoyant brun doré accompagne celle que vous choisissez.',
      malachite:
        'La breloque de téléphone Al Quaa en malachite est conçue pour les coques compatibles munies de points d’attache. Veuillez noter que la coque n’est pas incluse — associant les bandes vertes vives à celle qui les met le mieux en valeur.',
      'lapis-lazuli':
        'La breloque de téléphone Al Quaa en lapis-lazuli est conçue pour les coques compatibles munies de points d’attache. Veuillez noter que la coque n’est pas incluse — pour que l’outremer profond accompagne celle que vous utilisez déjà.',
      'rose-quartz':
        'La breloque de téléphone Al Quaa en quartz rose est conçue pour les coques compatibles munies de points d’attache. Veuillez noter que la coque n’est pas incluse — afin que le blush délicat complète celle que vous préférez.',
    },
    careQ: 'Comment entretenir ma breloque de téléphone en pierres naturelles ?',
    careA:
      'Évitez le contact avec l’eau, le parfum et les produits chimiques agressifs. Les pierres naturelles peuvent s’ébrécher ou se briser en cas de chute sur une surface dure ou de choc. Essuyez délicatement avec un chiffon doux et sec si nécessaire. N’immergez pas les pierres dans l’eau ou les produits nettoyants. Rangez-les dans une pochette souple ou un écrin Bint Saeed lorsqu’elles ne sont pas utilisées, à l’abri du soleil, de la chaleur excessive et de l’humidité.',
  },
  it: {
    naturalQ: 'Le pietre sono naturali?',
    naturalA: {
      'fuchsia-jade':
        'Sì. Ogni ciondolo per telefono in pietra naturale Bint Saeed è assemblato a mano con gemme naturali autentiche. Variazioni di colore, motivo e inclusioni sono caratteristiche uniche di ogni pietra. Le perle di giada fucsia sono giada naturale il cui colore luminoso è stato accuratamente valorizzato con un trattamento cromatico tradizionale — pratica consolidata nella gioielleria fine che approfondisce la presenza della pietra preservandone il carattere naturale.',
      'orange-jade':
        'Sì. Ogni ciondolo per telefono in pietra naturale Bint Saeed è assemblato a mano con gemme naturali autentiche. Variazioni di colore, motivo e inclusioni sono caratteristiche uniche di ogni pietra. Le perle di giada arancio sono giada naturale il cui calore di tono è stato accuratamente valorizzato con un trattamento cromatico tradizionale — pratica d’atelier raffinata che intensifica il bagliore della pietra lasciando intatte texture e individualità naturali.',
      onyx:
        'Sì. Ogni ciondolo per telefono in pietra naturale Bint Saeed è assemblato a mano con gemme naturali autentiche. Variazioni di colore, motivo e inclusioni sono caratteristiche uniche di ogni pietra. Le perle di onice levigate conservano il loro nero naturale profondo — una presenza grafica e discreta che non richiede altro che un taglio e una finitura accurati.',
      'tiger-eye':
        'Sì. Ogni ciondolo per telefono in pietra naturale Bint Saeed è assemblato a mano con gemme naturali autentiche. Variazioni di colore, motivo e inclusioni sono caratteristiche uniche di ogni pietra. L’occhio di tigre mostra le sue bande chatoyant naturali bruno-dorate — bagliori setosi di luce che nessuna perla condivide allo stesso modo.',
      malachite:
        'Sì. Ogni ciondolo per telefono in pietra naturale Bint Saeed è assemblato a mano con gemme naturali autentiche. Variazioni di colore, motivo e inclusioni sono caratteristiche uniche di ogni pietra. La malachite rivela le sue bande verdi naturali e la profondità di colore proprio come la natura le ha formate — ogni perla un piccolo paesaggio a sé.',
      'lapis-lazuli':
        'Sì. Ogni ciondolo per telefono in pietra naturale Bint Saeed è assemblato a mano con gemme naturali autentiche. Variazioni di colore, motivo e inclusioni sono caratteristiche uniche di ogni pietra. Il lapislazzuli conserva la sua profondità oltremare naturale, spesso punteggiata d’oro di pirite — un blu reale che appartiene interamente alla pietra.',
      'rose-quartz':
        'Sì. Ogni ciondolo per telefono in pietra naturale Bint Saeed è assemblato a mano con gemme naturali autentiche. Variazioni di colore, motivo e inclusioni sono caratteristiche uniche di ogni pietra. Il quarzo rosa appare nel suo blush naturale delicato — un rosa soffice modellato soltanto da selezione e lucidatura attente.',
    },
    rosetteQ: 'Cos’è la Rosetta di Al Ain?',
    fitQ: 'Il ciondolo è adatto al mio telefono?',
    fitA: {
      'fuchsia-jade':
        'Il ciondolo Al Quaa in giada fucsia è progettato per custodie compatibili con punti di attacco. La custodia non è inclusa — così potete abbinare la vivace giada fucsia a quella che già accompagna la vostra giornata.',
      'orange-jade':
        'Il ciondolo Al Quaa in giada arancio è progettato per custodie compatibili con punti di attacco. La custodia non è inclusa — lasciandovi libere di abbinare la calda giada arancio a quella che preferite.',
      onyx:
        'Il ciondolo Al Quaa in onice è progettato per custodie compatibili con punti di attacco. La custodia non è inclusa — permettendo all’onice nero levigato di posarsi con discrezione su quella che già portate.',
      'tiger-eye':
        'Il ciondolo Al Quaa in occhio di tigre è progettato per custodie compatibili con punti di attacco. La custodia non è inclusa — perché il chatoyant bruno-dorato possa muoversi con quella che scegliete.',
      malachite:
        'Il ciondolo Al Quaa in malachite è progettato per custodie compatibili con punti di attacco. La custodia non è inclusa — abbinando le vivaci bande verdi a quella che meglio le valorizza.',
      'lapis-lazuli':
        'Il ciondolo Al Quaa in lapislazzuli è progettato per custodie compatibili con punti di attacco. La custodia non è inclusa — perché l’oltremare profondo accompagni quella che già usate.',
      'rose-quartz':
        'Il ciondolo Al Quaa in quarzo rosa è progettato per custodie compatibili con punti di attacco. La custodia non è inclusa — affinché il blush delicato completi quella che preferite.',
    },
    careQ: 'Come prendersi cura del ciondolo per telefono in pietra naturale?',
    careA:
      'Evitate il contatto con acqua, profumo e sostanze chimiche aggressive. Le gemme naturali possono scheggiarsi o rompersi se cadono su superfici dure o subiscono un urto. Pulite delicatamente con un panno morbido e asciutto quando necessario. Non immergete le pietre in acqua o detergenti. Conservatele in una soft pouch o nella gift box Bint Saeed quando non le indossate, lontano da sole, calore eccessivo e umidità.',
  },
  es: {
    naturalQ: '¿Las gemas son naturales?',
    naturalA: {
      'fuchsia-jade':
        'Sí. Cada colgante para móvil en piedra natural Bint Saeed se ensambla a mano con gemas naturales auténticas. Las variaciones de color, patrón e inclusiones son características únicas de cada piedra. Las cuentas de jade fucsia son jade natural cuyo color luminoso ha sido cuidadosamente realzado mediante un tratamiento de color tradicional — una práctica consolidada en la joyería fina que profundiza la presencia de la piedra preservando su carácter natural.',
      'orange-jade':
        'Sí. Cada colgante para móvil en piedra natural Bint Saeed se ensambla a mano con gemas naturales auténticas. Las variaciones de color, patrón e inclusiones son características únicas de cada piedra. Las cuentas de jade naranja son jade natural cuyo calor de tono ha sido cuidadosamente realzado mediante un tratamiento de color tradicional — una práctica de atelier refinada que intensifica el brillo de la piedra dejando intactas su textura e individualidad naturales.',
      onyx:
        'Sí. Cada colgante para móvil en piedra natural Bint Saeed se ensambla a mano con gemas naturales auténticas. Las variaciones de color, patrón e inclusiones son características únicas de cada piedra. Las cuentas de ónix pulido conservan su negro natural profundo — una presencia gráfica y discreta que no exige más que un corte y un acabado cuidadosos.',
      'tiger-eye':
        'Sí. Cada colgante para móvil en piedra natural Bint Saeed se ensambla a mano con gemas naturales auténticas. Las variaciones de color, patrón e inclusiones son características únicas de cada piedra. El ojo de tigre muestra sus bandas chatoyant naturales marrón dorado — destellos sedosos de luz que ninguna cuenta comparte exactamente igual.',
      malachite:
        'Sí. Cada colgante para móvil en piedra natural Bint Saeed se ensambla a mano con gemas naturales auténticas. Las variaciones de color, patrón e inclusiones son características únicas de cada piedra. La malaquita revela sus bandas verdes naturales y su profundidad de color tal como la naturaleza las formó — cada cuenta un pequeño paisaje en sí misma.',
      'lapis-lazuli':
        'Sí. Cada colgante para móvil en piedra natural Bint Saeed se ensambla a mano con gemas naturales auténticas. Las variaciones de color, patrón e inclusiones son características únicas de cada piedra. El lapislázuli conserva su profundidad ultramar natural, a menudo salpicada de oro de pirita — un azul real que pertenece por completo a la piedra.',
      'rose-quartz':
        'Sí. Cada colgante para móvil en piedra natural Bint Saeed se ensambla a mano con gemas naturales auténticas. Las variaciones de color, patrón e inclusiones son características únicas de cada piedra. El cuarzo rosa aparece en su blush natural suave — un rosa delicado formado sólo por una selección y un pulido cuidadosos.',
    },
    rosetteQ: '¿Qué es la Roseta de Al Ain?',
    fitQ: '¿El colgante encaja en mi teléfono?',
    fitA: {
      'fuchsia-jade':
        'El colgante Al Quaa de jade fucsia está diseñado para fundas compatibles con puntos de sujeción. La funda no está incluida — para que pueda emparejar el jade fucsia intenso con la que ya acompaña su día a día.',
      'orange-jade':
        'El colgante Al Quaa de jade naranja está diseñado para fundas compatibles con puntos de sujeción. La funda no está incluida — dejándole libre de asociar el cálido jade naranja con la que prefiera.',
      onyx:
        'El colgante Al Quaa de ónix está diseñado para fundas compatibles con puntos de sujeción. La funda no está incluida — permitiendo que el ónix negro pulido repose con discreción sobre la que ya lleva.',
      'tiger-eye':
        'El colgante Al Quaa de ojo de tigre está diseñado para fundas compatibles con puntos de sujeción. La funda no está incluida — para que el chatoyant marrón dorado acompañe la que elija.',
      malachite:
        'El colgante Al Quaa de malaquita está diseñado para fundas compatibles con puntos de sujeción. La funda no está incluida — emparejando las vivas bandas verdes con la que mejor las enmarque.',
      'lapis-lazuli':
        'El colgante Al Quaa de lapislázuli está diseñado para fundas compatibles con puntos de sujeción. La funda no está incluida — para que el ultramar profundo acompañe la que ya utiliza.',
      'rose-quartz':
        'El colgante Al Quaa de cuarzo rosa está diseñado para fundas compatibles con puntos de sujeción. La funda no está incluida — para que el blush suave complemente la que prefiera.',
    },
    careQ: '¿Cómo debo cuidar mi colgante para móvil en piedra natural?',
    careA:
      'Evite el contacto con agua, perfume y productos químicos agresivos. Las gemas naturales pueden astillarse o romperse si caen sobre una superficie dura o sufren un impacto. Limpie con suavidad con un paño seco y suave cuando sea necesario. No sumerja las piedras en agua ni en limpiadores. Guárdelas en una soft pouch o en la caja de regalo Bint Saeed cuando no las use, lejos del sol, el calor excesivo y la humedad.',
  },
  // Remaining locales follow EN meaning with native luxury tone.
  ru: {
    naturalQ: 'Камни натуральные?',
    naturalA: {
      'fuchsia-jade':
        'Да. Каждая подвеска для телефона Bint Saeed из натурального камня собирается вручную из подлинных натуральных самоцветов. Вариации цвета, узора и включений — уникальные черты каждого камня. Бусины фуксиевого нефрита — натуральный нефрит, чей светящийся цвет бережно усилен традиционной цветовой обработкой — давней практикой в высокой ювелирной работе с камнем, которая углубляет присутствие камня, сохраняя его природный характер.',
      'orange-jade':
        'Да. Каждая подвеска для телефона Bint Saeed из натурального камня собирается вручную из подлинных натуральных самоцветов. Вариации цвета, узора и включений — уникальные черты каждого камня. Бусины оранжевого нефрита — натуральный нефрит, чья тёплая окраска бережно усилена традиционной цветовой обработкой — изысканной ателье-практикой, усиливающей сияние камня при сохранении природной фактуры и индивидуальности.',
      onyx:
        'Да. Каждая подвеска для телефона Bint Saeed из натурального камня собирается вручную из подлинных натуральных самоцветов. Вариации цвета, узора и включений — уникальные черты каждого камня. Полированные бусины оникса сохраняют глубокий природный чёрный тон — спокойное графичное присутствие, которому достаточно точной огранки и отделки.',
      'tiger-eye':
        'Да. Каждая подвеска для телефона Bint Saeed из натурального камня собирается вручную из подлинных натуральных самоцветов. Вариации цвета, узора и включений — уникальные черты каждого камня. Тигровый глаз являет природные переливающиеся золотисто-коричневые полосы — шелковистые вспышки света, которые ни одна бусина не повторяет в точности.',
      malachite:
        'Да. Каждая подвеска для телефона Bint Saeed из натурального камня собирается вручную из подлинных натуральных самоцветов. Вариации цвета, узора и включений — уникальные черты каждого камня. Малахит открывает природную зелёную полосатость и глубину цвета именно так, как сформировала их природа — каждая бусина свой маленький пейзаж.',
      'lapis-lazuli':
        'Да. Каждая подвеска для телефона Bint Saeed из натурального камня собирается вручную из подлинных натуральных самоцветов. Вариации цвета, узора и включений — уникальные черты каждого камня. Лазурит сохраняет природную ультрамариновую глубину, часто с золотистыми вкраплениями пирита — королевский синий, целиком принадлежащий камню.',
      'rose-quartz':
        'Да. Каждая подвеска для телефона Bint Saeed из натурального камня собирается вручную из подлинных натуральных самоцветов. Вариации цвета, узора и включений — уникальные черты каждого камня. Розовый кварц предстаёт в своей мягкой природной румяной окраске — нежный розовый, сформированный лишь терпеливым отбором и полировкой.',
    },
    rosetteQ: 'Что такое розетка Al Ain?',
    fitQ: 'Подойдёт ли подвеска к моему телефону?',
    fitA: {
      'fuchsia-jade':
        'Подвеска Al Quaa из фуксиевого нефрита рассчитана на совместимые чехлы с точками крепления. Чехол не входит в комплект — чтобы вы могли сочетать яркий фуксиевый нефрит с тем чехлом, который уже сопровождает ваш день.',
      'orange-jade':
        'Подвеска Al Quaa из оранжевого нефрита рассчитана на совместимые чехлы с точками крепления. Чехол не входит в комплект — оставляя свободу сочетать тёплый оранжевый нефрит с предпочтительным чехлом.',
      onyx:
        'Подвеска Al Quaa из оникса рассчитана на совместимые чехлы с точками крепления. Чехол не входит в комплект — позволяя полированному чёрному ониксу спокойно лечь на тот, что вы уже носите.',
      'tiger-eye':
        'Подвеска Al Quaa из тигрового глаза рассчитана на совместимые чехлы с точками крепления. Чехол не входит в комплект — чтобы золотисто-коричневый перелив двигался с выбранным вами чехлом.',
      malachite:
        'Подвеска Al Quaa из малахита рассчитана на совместимые чехлы с точками крепления. Чехол не входит в комплект — сочетая живую зелёную полосатость с чехлом, который лучше её обрамляет.',
      'lapis-lazuli':
        'Подвеска Al Quaa из лазурита рассчитана на совместимые чехлы с точками крепления. Чехол не входит в комплект — чтобы глубокий ультрамарин сопровождал уже используемый вами чехол.',
      'rose-quartz':
        'Подвеска Al Quaa из розового кварца рассчитана на совместимые чехлы с точками крепления. Чехол не входит в комплект — чтобы мягкий румяный кварц дополнял предпочитаемый вами чехол.',
    },
    careQ: 'Как ухаживать за подвеской для телефона из натурального камня?',
    careA:
      'Избегайте контакта с водой, духами и агрессивной химией. Натуральные камни могут сколоться или треснуть при падении на твёрдую поверхность или ударе. При необходимости мягко протирайте сухой тканью. Не замачивайте камни в воде или очистителях. Храните в мягком мешочке или подарочной коробке Bint Saeed вдали от солнца, сильного тепла и влаги.',
  },
  zh: {
    naturalQ: '宝石是天然的吗？',
    naturalA: {
      'fuchsia-jade':
        '是的。每一件 Bint Saeed 天然石手机挂饰均以真天然宝石手工组装。颜色、纹理与内含物的差异，是每颗石头独有的特质。紫红玉珠为天然玉，其明丽色泽经传统着色工艺细心强化——这是高级石材珠宝中的悠久做法，加深石头的存在感，同时保留其天然性情。',
      'orange-jade':
        '是的。每一件 Bint Saeed 天然石手机挂饰均以真天然宝石手工组装。颜色、纹理与内含物的差异，是每颗石头独有的特质。橙玉珠为天然玉，其温暖色调经传统着色工艺细心强化——一种精致工坊做法，强化石头的光泽，同时保留天然质感与个性。',
      onyx:
        '是的。每一件 Bint Saeed 天然石手机挂饰均以真天然宝石手工组装。颜色、纹理与内含物的差异，是每颗石头独有的特质。抛光缟玛瑙珠保留其天然深邃黑色——安静而有力的存在，只需精细切割与打磨。',
      'tiger-eye':
        '是的。每一件 Bint Saeed 天然石手机挂饰均以真天然宝石手工组装。颜色、纹理与内含物的差异，是每颗石头独有的特质。虎眼石展现天然金棕色猫眼条带——丝绸般的光泽闪动，无一粒珠完全相同。',
      malachite:
        '是的。每一件 Bint Saeed 天然石手机挂饰均以真天然宝石手工组装。颜色、纹理与内含物的差异，是每颗石头独有的特质。孔雀石呈现天然绿色条带与色深，一如自然形成——每一粒珠都是一方小小风景。',
      'lapis-lazuli':
        '是的。每一件 Bint Saeed 天然石手机挂饰均以真天然宝石手工组装。颜色、纹理与内含物的差异，是每颗石头独有的特质。青金石保有天然群青深度，常伴金色黄铁矿斑点——全然属于石头本身的宝蓝。',
      'rose-quartz':
        '是的。每一件 Bint Saeed 天然石手机挂饰均以真天然宝石手工组装。颜色、纹理与内含物的差异，是每颗石头独有的特质。粉晶呈现柔和的天然腮红色——温柔粉调，仅经细心甄选与抛光而成。',
    },
    rosetteQ: '什么是 Al Ain 玫瑰花饰？',
    fitQ: '手机挂饰适合我的手机吗？',
    fitA: {
      'fuchsia-jade':
        'Al Quaa 紫红玉手机挂饰专为带有挂点的兼容手机壳设计。请注意手机壳不包含在内——便于您将鲜明的紫红玉与日常已用的手机壳搭配。',
      'orange-jade':
        'Al Quaa 橙玉手机挂饰专为带有挂点的兼容手机壳设计。请注意手机壳不包含在内——您可自由将温暖的橙玉与心仪的手机壳搭配。',
      onyx:
        'Al Quaa 缟玛瑙手机挂饰专为带有挂点的兼容手机壳设计。请注意手机壳不包含在内——让抛光黑缟玛瑙安静落在您已有的手机壳上。',
      'tiger-eye':
        'Al Quaa 虎眼石手机挂饰专为带有挂点的兼容手机壳设计。请注意手机壳不包含在内——让金棕色猫眼光泽随您选择的手机壳而动。',
      malachite:
        'Al Quaa 孔雀石手机挂饰专为带有挂点的兼容手机壳设计。请注意手机壳不包含在内——将鲜明绿纹与最能衬托它的手机壳搭配。',
      'lapis-lazuli':
        'Al Quaa 青金石手机挂饰专为带有挂点的兼容手机壳设计。请注意手机壳不包含在内——让深邃群青陪伴您已在使用的手机壳。',
      'rose-quartz':
        'Al Quaa 粉晶手机挂饰专为带有挂点的兼容手机壳设计。请注意手机壳不包含在内——让柔和腮红粉晶衬托您偏爱的手机壳。',
    },
    careQ: '如何保养天然石手机挂饰？',
    careA:
      '避免接触水、香水和刺激性化学品。天然宝石若跌落硬面或受撞击，可能崩裂或破损。需要时用柔软干布轻拭。勿将石头浸泡于水或清洁剂中。不使用时置于柔软袋或 Bint Saeed 礼盒中，远离阳光、过热与潮湿。',
  },
  de: {
    naturalQ: 'Sind die Edelsteine natürlich?',
    naturalA: {
      'fuchsia-jade':
        'Ja. Jeder Bint Saeed Naturstein-Telefonanhänger wird von Hand aus echten natürlichen Edelsteinen zusammengesetzt. Variationen in Farbe, Muster und Einschlüssen sind einzigartige Merkmale jedes Steins. Die Fuchsia-Jade-Perlen sind natürliche Jade, deren leuchtende Farbe durch eine traditionelle Farbbehandlung sorgfältig vertieft wurde — eine seit Langem etablierte Praxis der feinen Steinschmuckkunst, die die Präsenz des Steins verstärkt und seinen natürlichen Charakter bewahrt.',
      'orange-jade':
        'Ja. Jeder Bint Saeed Naturstein-Telefonanhänger wird von Hand aus echten natürlichen Edelsteinen zusammengesetzt. Variationen in Farbe, Muster und Einschlüssen sind einzigartige Merkmale jedes Steins. Die Orange-Jade-Perlen sind natürliche Jade, deren warme Farbe durch eine traditionelle Farbbehandlung sorgfältig vertieft wurde — eine raffinierte Atelierpraxis, die den Glanz des Steins intensiviert und Textur sowie Individualität unberührt lässt.',
      onyx:
        'Ja. Jeder Bint Saeed Naturstein-Telefonanhänger wird von Hand aus echten natürlichen Edelsteinen zusammengesetzt. Variationen in Farbe, Muster und Einschlüssen sind einzigartige Merkmale jedes Steins. Die polierten Onyx-Perlen bewahren ihren tiefen natürlichen Schwarzton — eine ruhige, grafische Präsenz, die nichts weiter braucht als sorgfältigen Schliff und Finish.',
      'tiger-eye':
        'Ja. Jeder Bint Saeed Naturstein-Telefonanhänger wird von Hand aus echten natürlichen Edelsteinen zusammengesetzt. Variationen in Farbe, Muster und Einschlüssen sind einzigartige Merkmale jedes Steins. Tigerauge zeigt seine natürlichen chatoyanten goldbraunen Bänder — seidige Lichtblitze, die keine zwei Perlen ganz gleich teilen.',
      malachite:
        'Ja. Jeder Bint Saeed Naturstein-Telefonanhänger wird von Hand aus echten natürlichen Edelsteinen zusammengesetzt. Variationen in Farbe, Muster und Einschlüssen sind einzigartige Merkmale jedes Steins. Malachit offenbart seine natürliche Grünbänderung und Farbtiefe genau so, wie die Natur sie formte — jede Perle eine kleine Landschaft für sich.',
      'lapis-lazuli':
        'Ja. Jeder Bint Saeed Naturstein-Telefonanhänger wird von Hand aus echten natürlichen Edelsteinen zusammengesetzt. Variationen in Farbe, Muster und Einschlüssen sind einzigartige Merkmale jedes Steins. Lapislazuli bewahrt seine natürliche Ultramarintiefe, oft mit goldenen Pyritflecken — ein Königsblau, das ganz dem Stein gehört.',
      'rose-quartz':
        'Ja. Jeder Bint Saeed Naturstein-Telefonanhänger wird von Hand aus echten natürlichen Edelsteinen zusammengesetzt. Variationen in Farbe, Muster und Einschlüssen sind einzigartige Merkmale jedes Steins. Rosenquarz erscheint in seinem weichen natürlichen Blush — ein sanftes Rosa, geformt allein durch geduldige Auswahl und Politur.',
    },
    rosetteQ: 'Was ist die Al-Ain-Rosette?',
    fitQ: 'Passt der Telefonanhänger zu meinem Telefon?',
    fitA: {
      'fuchsia-jade':
        'Der Al-Quaa-Telefonanhänger aus Fuchsia-Jade ist für kompatible Hüllen mit Befestigungspunkten konzipiert. Die Hülle ist nicht enthalten — sodass Sie die leuchtende Fuchsia-Jade mit der Hülle kombinieren können, die Ihren Alltag bereits begleitet.',
      'orange-jade':
        'Der Al-Quaa-Telefonanhänger aus Orange Jade ist für kompatible Hüllen mit Befestigungspunkten konzipiert. Die Hülle ist nicht enthalten — Sie können die warme Orange Jade frei mit der bevorzugten Hülle verbinden.',
      onyx:
        'Der Al-Quaa-Telefonanhänger aus Onyx ist für kompatible Hüllen mit Befestigungspunkten konzipiert. Die Hülle ist nicht enthalten — damit der polierte schwarze Onyx ruhig auf der Hülle sitzen kann, die Sie bereits tragen.',
      'tiger-eye':
        'Der Al-Quaa-Telefonanhänger aus Tigerauge ist für kompatible Hüllen mit Befestigungspunkten konzipiert. Die Hülle ist nicht enthalten — damit das goldbraune Chatoyant mit der gewählten Hülle mitbewegt.',
      malachite:
        'Der Al-Quaa-Telefonanhänger aus Malachit ist für kompatible Hüllen mit Befestigungspunkten konzipiert. Die Hülle ist nicht enthalten — und verbindet die lebendige Grünbänderung mit der Hülle, die sie am besten rahmt.',
      'lapis-lazuli':
        'Der Al-Quaa-Telefonanhänger aus Lapislazuli ist für kompatible Hüllen mit Befestigungspunkten konzipiert. Die Hülle ist nicht enthalten — damit das tiefe Ultramarin die Hülle begleitet, die Sie bereits nutzen.',
      'rose-quartz':
        'Der Al-Quaa-Telefonanhänger aus Rosenquarz ist für kompatible Hüllen mit Befestigungspunkten konzipiert. Die Hülle ist nicht enthalten — damit der weiche Blush-Quarz die bevorzugte Hülle ergänzt.',
    },
    careQ: 'Wie pflege ich meinen Naturstein-Telefonanhänger?',
    careA:
      'Vermeiden Sie Kontakt mit Wasser, Parfum und aggressiven Chemikalien. Natürliche Edelsteine können Splitter bekommen oder brechen, wenn sie auf harte Oberflächen fallen oder Stößen ausgesetzt sind. Bei Bedarf sanft mit einem weichen, trockenen Tuch abwischen. Steine nicht in Wasser oder Reiniger einweichen. In einem weichen Beutel oder der Bint-Saeed-Geschenkbox aufbewahren, fern von Sonne, übermäßiger Hitze und Feuchtigkeit.',
  },
  nl: {
    naturalQ: 'Zijn de edelstenen natuurlijk?',
    naturalA: {
      'fuchsia-jade':
        'Ja. Elke Bint Saeed telefoonhanger van natuursteen wordt met de hand samengesteld uit echte natuurlijke edelstenen. Variaties in kleur, patroon en insluitsels zijn unieke kenmerken van elke steen. De fuchsia-jadekralen zijn natuurlijke jade waarvan de lichtende kleur zorgvuldig is verdiept door traditionele kleurbehandeling — een gevestigde praktijk in fijne steensieraden die de aanwezigheid van de steen versterkt en zijn natuurlijke karakter bewaart.',
      'orange-jade':
        'Ja. Elke Bint Saeed telefoonhanger van natuursteen wordt met de hand samengesteld uit echte natuurlijke edelstenen. Variaties in kleur, patroon en insluitsels zijn unieke kenmerken van elke steen. De oranje jadekralen zijn natuurlijke jade waarvan de warme kleur zorgvuldig is verdiept door traditionele kleurbehandeling — een verfijnde atelierpraktijk die de gloed van de steen intensiveert en textuur en individualiteit intact laat.',
      onyx:
        'Ja. Elke Bint Saeed telefoonhanger van natuursteen wordt met de hand samengesteld uit echte natuurlijke edelstenen. Variaties in kleur, patroon en insluitsels zijn unieke kenmerken van elke steen. De gepolijste onyxkralen behouden hun diepe natuurlijke zwart — een stille, grafische aanwezigheid die niets meer vraagt dan zorgvuldig snijden en afwerken.',
      'tiger-eye':
        'Ja. Elke Bint Saeed telefoonhanger van natuursteen wordt met de hand samengesteld uit echte natuurlijke edelstenen. Variaties in kleur, patroon en insluitsels zijn unieke kenmerken van elke steen. Tijgeroog toont zijn natuurlijke chatoyante goudbruine banden — zijdeachtige lichtflitsen die geen twee kralen precies delen.',
      malachite:
        'Ja. Elke Bint Saeed telefoonhanger van natuursteen wordt met de hand samengesteld uit echte natuurlijke edelstenen. Variaties in kleur, patroon en insluitsels zijn unieke kenmerken van elke steen. Malachiet onthult zijn natuurlijke groene banding en kleurdiepte precies zoals de natuur die vormde — elke kraal een klein landschap op zich.',
      'lapis-lazuli':
        'Ja. Elke Bint Saeed telefoonhanger van natuursteen wordt met de hand samengesteld uit echte natuurlijke edelstenen. Variaties in kleur, patroon en insluitsels zijn unieke kenmerken van elke steen. Lapis lazuli bewaart zijn natuurlijke ultramarijndiepte, vaak met gouden pyrietvlekjes — een koningsblauw dat geheel bij de steen hoort.',
      'rose-quartz':
        'Ja. Elke Bint Saeed telefoonhanger van natuursteen wordt met de hand samengesteld uit echte natuurlijke edelstenen. Variaties in kleur, patroon en insluitsels zijn unieke kenmerken van elke steen. Rozenkwarts verschijnt in zijn zachte natuurlijke blush — een mild roze, gevormd alleen door geduldig selecteren en polijsten.',
    },
    rosetteQ: 'Wat is de Al Ain Rosette?',
    fitQ: 'Past de telefoonhanger bij mijn telefoon?',
    fitA: {
      'fuchsia-jade':
        'De Al Quaa telefoonhanger van fuchsia-jade is ontworpen voor compatibele hoesjes met bevestigingspunten. Het hoesje is niet inbegrepen — zodat u de levendige fuchsia-jade kunt combineren met het hoesje dat uw dag al begeleidt.',
      'orange-jade':
        'De Al Quaa telefoonhanger van oranje jade is ontworpen voor compatibele hoesjes met bevestigingspunten. Het hoesje is niet inbegrepen — u bent vrij de warme oranje jade te zetten tegen het hoesje van uw voorkeur.',
      onyx:
        'De Al Quaa telefoonhanger van onyx is ontworpen voor compatibele hoesjes met bevestigingspunten. Het hoesje is niet inbegrepen — zodat de gepolijste zwarte onyx rustig kan liggen op het hoesje dat u al draagt.',
      'tiger-eye':
        'De Al Quaa telefoonhanger van tijgeroog is ontworpen voor compatibele hoesjes met bevestigingspunten. Het hoesje is niet inbegrepen — zodat het goudbruine chatoyant meebeweegt met het gekozen hoesje.',
      malachite:
        'De Al Quaa telefoonhanger van malachiet is ontworpen voor compatibele hoesjes met bevestigingspunten. Het hoesje is niet inbegrepen — en paart de levendige groene banding aan het hoesje dat die het best omlijst.',
      'lapis-lazuli':
        'De Al Quaa telefoonhanger van lapis lazuli is ontworpen voor compatibele hoesjes met bevestigingspunten. Het hoesje is niet inbegrepen — zodat het diepe ultramarijn het hoesje begeleidt dat u al gebruikt.',
      'rose-quartz':
        'De Al Quaa telefoonhanger van rozenkwarts is ontworpen voor compatibele hoesjes met bevestigingspunten. Het hoesje is niet inbegrepen — zodat de zachte blush-kwarts het voorkeurshoesje aanvult.',
    },
    careQ: 'Hoe verzorg ik mijn telefoonhanger van natuursteen?',
    careA:
      'Vermijd contact met water, parfum en agressieve chemicaliën. Natuurlijke edelstenen kunnen afbrokkelen of breken bij val op een hard oppervlak of bij een schok. Veeg indien nodig zacht af met een zachte, droge doek. Dompel stenen niet onder in water of reinigers. Bewaar in een zachte pouch of Bint Saeed cadeaudoos, uit de buurt van zonlicht, overmatige hitte en vocht.',
  },
  pt: {
    naturalQ: 'As gemas são naturais?',
    naturalA: {
      'fuchsia-jade':
        'Sim. Cada pingente para telemóvel em pedra natural Bint Saeed é montado à mão com gemas naturais genuínas. Variações de cor, padrão e inclusões são características únicas de cada pedra. As contas de jade fúcsia são jade natural cuja cor luminosa foi cuidadosamente realçada por tratamento de cor tradicional — prática consolidada na joalharia fina de pedra que aprofunda a presença da pedra preservando o seu carácter natural.',
      'orange-jade':
        'Sim. Cada pingente para telemóvel em pedra natural Bint Saeed é montado à mão com gemas naturais genuínas. Variações de cor, padrão e inclusões são características únicas de cada pedra. As contas de jade laranja são jade natural cujo calor de tom foi cuidadosamente realçado por tratamento de cor tradicional — prática de atelier refinada que intensifica o brilho da pedra deixando intactas textura e individualidade naturais.',
      onyx:
        'Sim. Cada pingente para telemóvel em pedra natural Bint Saeed é montado à mão com gemas naturais genuínas. Variações de cor, padrão e inclusões são características únicas de cada pedra. As contas de ónix polido conservam o seu preto natural profundo — uma presença gráfica e discreta que nada exige além de corte e acabamento cuidadosos.',
      'tiger-eye':
        'Sim. Cada pingente para telemóvel em pedra natural Bint Saeed é montado à mão com gemas naturais genuínas. Variações de cor, padrão e inclusões são características únicas de cada pedra. O olho de tigre revela as suas bandas chatoyant naturais castanho-douradas — clarões sedosos de luz que nenhuma conta partilha exactamente da mesma forma.',
      malachite:
        'Sim. Cada pingente para telemóvel em pedra natural Bint Saeed é montado à mão com gemas naturais genuínas. Variações de cor, padrão e inclusões são características únicas de cada pedra. A malaquite mostra as suas bandas verdes naturais e a profundidade de cor tal como a natureza as formou — cada conta uma pequena paisagem por si.',
      'lapis-lazuli':
        'Sim. Cada pingente para telemóvel em pedra natural Bint Saeed é montado à mão com gemas naturais genuínas. Variações de cor, padrão e inclusões são características únicas de cada pedra. O lápis-lazúli conserva a sua profundidade ultramarina natural, muitas vezes salpicada de ouro de pirite — um azul real que pertence por completo à pedra.',
      'rose-quartz':
        'Sim. Cada pingente para telemóvel em pedra natural Bint Saeed é montado à mão com gemas naturais genuínas. Variações de cor, padrão e inclusões são características únicas de cada pedra. O quartzo rosa aparece no seu blush natural suave — um rosa delicado moldado apenas por selecção e polimento cuidadosos.',
    },
    rosetteQ: 'O que é a Roseta de Al Ain?',
    fitQ: 'O pingente serve no meu telemóvel?',
    fitA: {
      'fuchsia-jade':
        'O pingente Al Quaa de jade fúcsia foi concebido para capas compatíveis com pontos de fixação. A capa não está incluída — para que possa associar o jade fúcsia vívido à capa que já acompanha o seu dia a dia.',
      'orange-jade':
        'O pingente Al Quaa de jade laranja foi concebido para capas compatíveis com pontos de fixação. A capa não está incluída — deixando-a livre de associar o jade laranja quente à capa que preferir.',
      onyx:
        'O pingente Al Quaa de ónix foi concebido para capas compatíveis com pontos de fixação. A capa não está incluída — permitindo que o ónix preto polido assente com discreção na capa que já transporta.',
      'tiger-eye':
        'O pingente Al Quaa de olho de tigre foi concebido para capas compatíveis com pontos de fixação. A capa não está incluída — para que o chatoyant castanho-dourado se mova com a capa que escolher.',
      malachite:
        'O pingente Al Quaa de malaquite foi concebido para capas compatíveis com pontos de fixação. A capa não está incluída — associando as bandas verdes vívidas à capa que melhor as enquadra.',
      'lapis-lazuli':
        'O pingente Al Quaa de lápis-lazúli foi concebido para capas compatíveis com pontos de fixação. A capa não está incluída — para que o ultramar profundo acompanhe a capa que já utiliza.',
      'rose-quartz':
        'O pingente Al Quaa de quartzo rosa foi concebido para capas compatíveis com pontos de fixação. A capa não está incluída — para que o blush suave complemente a capa que preferir.',
    },
    careQ: 'Como devo cuidar do meu pingente para telemóvel em pedra natural?',
    careA:
      'Evite o contacto com água, perfume e químicos agressivos. As gemas naturais podem lascar ou partir se caírem sobre uma superfície dura ou sofrerem impacto. Limpe suavemente com um pano macio e seco quando necessário. Não mergulhe as pedras em água ou limpeza. Guarde num soft pouch ou na caixa de oferta Bint Saeed quando não as usar, longe do sol, do calor excessivo e da humidade.',
  },
  id: {
    naturalQ: 'Apakah batu permata itu alami?',
    naturalA: {
      'fuchsia-jade':
        'Ya. Setiap liontin ponsel batu alam Bint Saeed dirakit tangan dari batu permata alami asli. Variasi warna, pola, dan inklusi adalah ciri unik setiap batu. Manik jade fuchsia adalah jade alami yang warnanya yang bercahaya telah diperhalus dengan cermat melalui perlakuan warna tradisional — praktik lama dalam perhiasan batu halus yang memperdalam kehadiran batu sambil menjaga karakternya yang alami.',
      'orange-jade':
        'Ya. Setiap liontin ponsel batu alam Bint Saeed dirakit tangan dari batu permata alami asli. Variasi warna, pola, dan inklusi adalah ciri unik setiap batu. Manik jade oranye adalah jade alami yang kehangatan warnanya telah diperhalus dengan cermat melalui perlakuan warna tradisional — praktik atelier yang halus yang mengintensifkan kilau batu sambil mempertahankan tekstur dan individualitas alaminya.',
      onyx:
        'Ya. Setiap liontin ponsel batu alam Bint Saeed dirakit tangan dari batu permata alami asli. Variasi warna, pola, dan inklusi adalah ciri unik setiap batu. Manik oniks yang dipoles mempertahankan hitam alami yang dalam — kehadiran grafis yang tenang yang hanya membutuhkan pemotongan dan finishing yang cermat.',
      'tiger-eye':
        'Ya. Setiap liontin ponsel batu alam Bint Saeed dirakit tangan dari batu permata alami asli. Variasi warna, pola, dan inklusi adalah ciri unik setiap batu. Mata harimau menampilkan pita chatoyant cokelat keemasan alaminya — kilasan cahaya seperti sutra yang tidak dibagikan dua manik dengan cara yang sama.',
      malachite:
        'Ya. Setiap liontin ponsel batu alam Bint Saeed dirakit tangan dari batu permata alami asli. Variasi warna, pola, dan inklusi adalah ciri unik setiap batu. Malakit menyingkap banding hijau alami dan kedalaman warnanya persis seperti dibentuk alam — setiap manik adalah lanskap kecil tersendiri.',
      'lapis-lazuli':
        'Ya. Setiap liontin ponsel batu alam Bint Saeed dirakit tangan dari batu permata alami asli. Variasi warna, pola, dan inklusi adalah ciri unik setiap batu. Lapis lazuli menjaga kedalaman ultramarine alaminya, sering berbintik emas pirit — biru kerajaan yang sepenuhnya milik batu itu.',
      'rose-quartz':
        'Ya. Setiap liontin ponsel batu alam Bint Saeed dirakit tangan dari batu permata alami asli. Variasi warna, pola, dan inklusi adalah ciri unik setiap batu. Kuarsa mawar muncul dalam blush lembut alaminya — merah muda halus yang dibentuk hanya oleh seleksi dan polesan yang cermat.',
    },
    rosetteQ: 'Apa itu Rosette Al Ain?',
    fitQ: 'Apakah liontin ponsel cocok dengan ponsel saya?',
    fitA: {
      'fuchsia-jade':
        'Liontin ponsel Al Quaa jade fuchsia dirancang untuk casing yang kompatibel dengan titik pelekatan. Casing tidak termasuk — agar Anda dapat memasangkan jade fuchsia yang hidup dengan casing yang sudah menemani hari Anda.',
      'orange-jade':
        'Liontin ponsel Al Quaa jade oranye dirancang untuk casing yang kompatibel dengan titik pelekatan. Casing tidak termasuk — memberi kebebasan memasangkan jade oranye yang hangat dengan casing pilihan Anda.',
      onyx:
        'Liontin ponsel Al Quaa oniks dirancang untuk casing yang kompatibel dengan titik pelekatan. Casing tidak termasuk — memungkinkan oniks hitam yang dipoles duduk tenang pada casing yang sudah Anda bawa.',
      'tiger-eye':
        'Liontin ponsel Al Quaa mata harimau dirancang untuk casing yang kompatibel dengan titik pelekatan. Casing tidak termasuk — agar chatoyant cokelat keemasan bergerak bersama casing yang Anda pilih.',
      malachite:
        'Liontin ponsel Al Quaa malakit dirancang untuk casing yang kompatibel dengan titik pelekatan. Casing tidak termasuk — memasangkan banding hijau yang hidup dengan casing yang paling membingkainya.',
      'lapis-lazuli':
        'Liontin ponsel Al Quaa lapis lazuli dirancang untuk casing yang kompatibel dengan titik pelekatan. Casing tidak termasuk — agar ultramarine yang dalam menemani casing yang sudah Anda gunakan.',
      'rose-quartz':
        'Liontin ponsel Al Quaa kuarsa mawar dirancang untuk casing yang kompatibel dengan titik pelekatan. Casing tidak termasuk — agar blush lembut melengkapi casing yang Anda sukai.',
    },
    careQ: 'Bagaimana cara merawat liontin ponsel batu alam saya?',
    careA:
      'Hindari kontak dengan air, parfum, dan bahan kimia keras. Batu permata alami dapat retak atau patah jika terjatuh ke permukaan keras atau terkena benturan. Lap lembut dengan kain lembut kering jika diperlukan. Jangan rendam batu dalam air atau pembersih. Simpan dalam soft pouch atau kotak hadiah Bint Saeed saat tidak digunakan, jauh dari sinar matahari, panas berlebih, dan kelembapan.',
  },
  ms: {
    naturalQ: 'Adakah batu permata itu semula jadi?',
    naturalA: {
      'fuchsia-jade':
        'Ya. Setiap liontin telefon batu semula jadi Bint Saeed dipasang tangan daripada batu permata semula jadi tulen. Variasi warna, corak dan inklusi ialah ciri unik setiap batu. Manik jed fuchsia ialah jed semula jadi yang warna bercahayanya telah diperkaya dengan teliti melalui rawatan warna tradisional — amalan lama dalam perhiasan batu halus yang memperdalam kehadiran batu sambil memelihara wataknya yang semula jadi.',
      'orange-jade':
        'Ya. Setiap liontin telefon batu semula jadi Bint Saeed dipasang tangan daripada batu permata semula jadi tulen. Variasi warna, corak dan inklusi ialah ciri unik setiap batu. Manik jed oren ialah jed semula jadi yang kehangatan warnanya telah diperkaya dengan teliti melalui rawatan warna tradisional — amalan atelier yang halus yang mengintensifkan sinar batu sambil mengekalkan tekstur dan keindividuan semula jadinya.',
      onyx:
        'Ya. Setiap liontin telefon batu semula jadi Bint Saeed dipasang tangan daripada batu permata semula jadi tulen. Variasi warna, corak dan inklusi ialah ciri unik setiap batu. Manik oniks digilap mengekalkan hitam semula jadi yang dalam — kehadiran grafik yang tenang yang hanya memerlukan potongan dan kemasan yang teliti.',
      'tiger-eye':
        'Ya. Setiap liontin telefon batu semula jadi Bint Saeed dipasang tangan daripada batu permata semula jadi tulen. Variasi warna, corak dan inklusi ialah ciri unik setiap batu. Mata harimau mempamerkan jalur chatoyant perang keemasan semula jadinya — kilauan cahaya seperti sutera yang tidak dikongsi dua manik dengan cara yang sama.',
      malachite:
        'Ya. Setiap liontin telefon batu semula jadi Bint Saeed dipasang tangan daripada batu permata semula jadi tulen. Variasi warna, corak dan inklusi ialah ciri unik setiap batu. Malakit mendedahkan banding hijau semula jadi dan kedalaman warnanya tepat seperti dibentuk alam — setiap manik ialah landskap kecil tersendiri.',
      'lapis-lazuli':
        'Ya. Setiap liontin telefon batu semula jadi Bint Saeed dipasang tangan daripada batu permata semula jadi tulen. Variasi warna, corak dan inklusi ialah ciri unik setiap batu. Lapis lazuli mengekalkan kedalaman ultramarin semula jadinya, sering berbintik emas pirit — biru diraja yang sepenuhnya milik batu itu.',
      'rose-quartz':
        'Ya. Setiap liontin telefon batu semula jadi Bint Saeed dipasang tangan daripada batu permata semula jadi tulen. Variasi warna, corak dan inklusi ialah ciri unik setiap batu. Kuarsa mawar muncul dalam blush lembut semula jadinya — merah jambu lembut yang dibentuk hanya oleh pemilihan dan penggilapan yang teliti.',
    },
    rosetteQ: 'Apakah Rosette Al Ain?',
    fitQ: 'Adakah liontin telefon sesuai dengan telefon saya?',
    fitA: {
      'fuchsia-jade':
        'Liontin telefon Al Quaa jed fuchsia direka untuk casing yang serasi dengan titik pelekatan. Casing tidak disertakan — supaya anda boleh memasangkan jed fuchsia yang cerah dengan casing yang sudah menemani hari anda.',
      'orange-jade':
        'Liontin telefon Al Quaa jed oren direka untuk casing yang serasi dengan titik pelekatan. Casing tidak disertakan — memberi kebebasan memasangkan jed oren yang hangat dengan casing pilihan anda.',
      onyx:
        'Liontin telefon Al Quaa oniks direka untuk casing yang serasi dengan titik pelekatan. Casing tidak disertakan — membolehkan oniks hitam digilap duduk tenang pada casing yang sudah anda bawa.',
      'tiger-eye':
        'Liontin telefon Al Quaa mata harimau direka untuk casing yang serasi dengan titik pelekatan. Casing tidak disertakan — supaya chatoyant perang keemasan bergerak bersama casing yang anda pilih.',
      malachite:
        'Liontin telefon Al Quaa malakit direka untuk casing yang serasi dengan titik pelekatan. Casing tidak disertakan — memasangkan banding hijau yang hidup dengan casing yang paling membingkainya.',
      'lapis-lazuli':
        'Liontin telefon Al Quaa lapis lazuli direka untuk casing yang serasi dengan titik pelekatan. Casing tidak disertakan — supaya ultramarin yang dalam menemani casing yang sudah anda gunakan.',
      'rose-quartz':
        'Liontin telefon Al Quaa kuarsa mawar direka untuk casing yang serasi dengan titik pelekatan. Casing tidak disertakan — supaya blush lembut melengkapi casing yang anda sukai.',
    },
    careQ: 'Bagaimanakah saya menjaga liontin telefon batu semula jadi saya?',
    careA:
      'Elakkan sentuhan dengan air, minyak wangi dan bahan kimia keras. Batu permata semula jadi boleh retak atau pecah jika terjatuh ke permukaan keras atau terkena hentaman. Sapu lembut dengan kain lembut kering jika perlu. Jangan rendam batu dalam air atau pencuci. Simpan dalam soft pouch atau kotak hadiah Bint Saeed apabila tidak digunakan, jauh daripada cahaya matahari, haba berlebihan dan kelembapan.',
  },
}

export function getPhoneCharmFaqItems(
  id: AlQuaaPhoneCharmId,
  locale: AppLocale,
): PhoneCharmFaqItem[] {
  const stoneKey = ID_TO_STONE_KEY[id]
  const pack = FAQ_BY_LOCALE[locale] ?? FAQ_BY_LOCALE.en
  return [
    { question: pack.naturalQ, answer: pack.naturalA[stoneKey] },
    { question: pack.rosetteQ, answer: getAlAinRosetteFaqAnswer(locale) },
    { question: pack.fitQ, answer: pack.fitA[stoneKey] },
    { question: pack.careQ, answer: pack.careA },
  ]
}
