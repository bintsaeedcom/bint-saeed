import type { AppLocale } from '@/lib/i18n/routing'
import type { NecklaceEarringPdpContentPack } from '@/lib/accessories/necklaceEarringPdpContent'
import { getJewelleryCareCopy } from '@/lib/accessories/jewelleryCareCopyI18n'
import { JEWELLERY_CARE_FAQ_NECKLACE_EN } from '@/lib/accessories/jewelleryCareCopyI18n'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'
import { isNecklacePdpId } from '@/lib/accessories/necklacePdpMetaI18n'

export const NECKLACE_IDS = [
  'al-ain-oasis-necklace-malachite',
  'al-ain-oasis-necklace-tiger-eye',
  'al-ain-oasis-necklace-onyx',
  'al-ain-oasis-necklace-rose-quartz',
  'al-ain-oasis-necklace-sunstone',
  'al-ain-oasis-necklace-lapis-lazuli',
] as const

export type NecklaceId = (typeof NECKLACE_IDS)[number]

/** Locales served by this pack — authored EN/AR/FR packs win in the resolver. */
type SecondaryLocale = 'it' | 'es' | 'ru' | 'zh' | 'de' | 'nl' | 'pt' | 'id' | 'ms'

const SECONDARY: readonly SecondaryLocale[] = [
  'it',
  'es',
  'ru',
  'zh',
  'de',
  'nl',
  'pt',
  'id',
  'ms',
]

function isSecondary(locale: AppLocale): locale is SecondaryLocale {
  return (SECONDARY as readonly string[]).includes(locale)
}

type SharedUi = {
  featuresTitle: string
  houseCode: string
  handcrafted: string
  hematite: string
  rosette: string
  convertible: string
  clasp: string
  giftBox: string
  uniqueness: string
  uniquenessLapis: string
  uniquenessSunstone: string
  uniquenessTiger: string
  uniquenessOnyx: string
  identical: string
  identicalLapis: string
  identicalSunstone: string
  identicalTiger: string
  identicalOnyx: string
  wearWays: string
  careFaq: string
  qRosette: string
  qStrand: string
  qWear: string
  qIdentical: string
  qMade: string
  qGift: string
  qCare: string
  madeFromQ: (fullName: string) => string
  madeWhere: (fullName: string) => string
  giftAnswer: (fullName: string) => string
}

const UI: Record<SecondaryLocale, SharedUi> = {
  it: {
    featuresTitle: 'Caratteristiche',
    houseCode: 'House Code: Al Ain Rosette',
    handcrafted: 'Artigianale ad Abu Dhabi, Emirati Arabi Uniti',
    hematite: 'Perle di ematite placcata oro integrate nel design',
    rosette: 'Signature Al Ain Rosette intagliata a mano in corniola naturale (circa 15 mm)',
    convertible: 'Design convertibile: indossare lunga o raddoppiata intorno al collo',
    clasp: 'Chiusura signature dorata con catenina di estensione regolabile',
    giftBox: 'Presentata in un cofanetto regalo signature Bint Saeed',
    uniqueness: 'Ogni pietra naturale è unica per colore, venature e carattere naturale',
    uniquenessLapis: 'Ogni gemma naturale mostra il proprio colore, venature e inclusioni di pirite',
    uniquenessSunstone: 'Ogni gemma naturale mostra il proprio colore, scintillio e carattere naturale',
    uniquenessTiger: 'Ogni gemma naturale mostra il proprio colore, lustro setoso e carattere naturale',
    uniquenessOnyx: 'Ogni gemma naturale è unica per tono e carattere naturale',
    identical:
      'No. Ogni creazione Bint Saeed presenta gemme naturali. Variazioni di colore, venature e caratteristiche naturali fanno parte dell’individualità di ogni pezzo e vanno celebrate come segno dei materiali naturali.',
    identicalLapis:
      'No. Ogni creazione Bint Saeed presenta gemme naturali. Variazioni di colore, venature, inclusioni di pirite e caratteristiche naturali fanno parte dell’individualità di ogni pezzo e vanno celebrate come segno dei materiali naturali.',
    identicalSunstone:
      'No. Ogni creazione Bint Saeed presenta gemme naturali. Variazioni di colore, scintillio naturale, inclusioni e caratteristiche fanno parte dell’individualità di ogni pezzo e vanno celebrate come segno dei materiali naturali.',
    identicalTiger:
      'No. Ogni creazione Bint Saeed presenta gemme naturali. Variazioni di colore, chatoyancy, inclusioni e caratteristiche naturali fanno parte dell’individualità di ogni pezzo e vanno celebrate come segno dei materiali naturali.',
    identicalOnyx:
      'No. Ogni creazione Bint Saeed presenta gemme naturali. Variazioni di tono, inclusioni e caratteristiche naturali fanno parte dell’individualità di ogni pezzo e vanno celebrate come segno dei materiali naturali.',
    wearWays:
      'Sì. La collana può essere indossata come lunghezza singola o raddoppiata intorno al collo per una silhouette più corta e stratificata.',
    careFaq: JEWELLERY_CARE_FAQ_NECKLACE_EN,
    qRosette: 'Che cos’è l’Al Ain Rosette?',
    qStrand: 'È disponibile un Signature Strand abbinato?',
    qWear: 'La collana può essere indossata in modi diversi?',
    qIdentical: 'Ogni collana è identica?',
    qMade: 'Dove è realizzata la collana?',
    qGift: 'La collana arriva in confezione regalo?',
    qCare: 'Come dovrei prendermi cura della mia collana?',
    madeFromQ: (n) => `Di che cosa è fatta la ${n}?`,
    madeWhere: (n) => `Ogni ${n} è artigianale ad Abu Dhabi, Emirati Arabi Uniti.`,
    giftAnswer: (n) =>
      `Sì. Ogni ${n} è presentata in un cofanetto regalo signature Bint Saeed, ideale per il dono e la conservazione.`,
  },
  es: {
    featuresTitle: 'Características',
    houseCode: 'House Code: Al Ain Rosette',
    handcrafted: 'Hecho a mano en Abu Dabi, Emiratos Árabes Unidos',
    hematite: 'Cuentas de hematita baño de oro integradas en el diseño',
    rosette: 'Signature Al Ain Rosette tallada a mano en cornalina natural (aproximadamente 15 mm)',
    convertible: 'Diseño convertible: llevar largo o doblado alrededor del cuello',
    clasp: 'Cierre signature dorado con cadena de extensión ajustable',
    giftBox: 'Presentado en un estuche de regalo signature Bint Saeed',
    uniqueness: 'Cada piedra natural es única en color, vetas y carácter natural',
    uniquenessLapis: 'Cada gema natural muestra su propio color, vetas e inclusiones de pirita',
    uniquenessSunstone: 'Cada gema natural muestra su propio color, brillo y carácter natural',
    uniquenessTiger: 'Cada gema natural muestra su propio color, lustre sedoso y carácter natural',
    uniquenessOnyx: 'Cada gema natural es única en tono y carácter natural',
    identical:
      'No. Cada creación Bint Saeed presenta gemas naturales. Las variaciones de color, vetas y características naturales forman parte de la individualidad de cada pieza y deben celebrarse como sello de los materiales naturales.',
    identicalLapis:
      'No. Cada creación Bint Saeed presenta gemas naturales. Las variaciones de color, vetas, inclusiones de pirita y características naturales forman parte de la individualidad de cada pieza y deben celebrarse como sello de los materiales naturales.',
    identicalSunstone:
      'No. Cada creación Bint Saeed presenta gemas naturales. Las variaciones de color, brillo natural, inclusiones y características forman parte de la individualidad de cada pieza y deben celebrarse como sello de los materiales naturales.',
    identicalTiger:
      'No. Cada creación Bint Saeed presenta gemas naturales. Las variaciones de color, chatoyancy, inclusiones y características naturales forman parte de la individualidad de cada pieza y deben celebrarse como sello de los materiales naturales.',
    identicalOnyx:
      'No. Cada creación Bint Saeed presenta gemas naturales. Las variaciones de tono, inclusiones y características naturales forman parte de la individualidad de cada pieza y deben celebrarse como sello de los materiales naturales.',
    wearWays:
      'Sí. El collar puede llevarse como longitud sencilla o doblado alrededor del cuello para una silueta más corta y en capas.',
    careFaq: JEWELLERY_CARE_FAQ_NECKLACE_EN,
    qRosette: '¿Qué es la Al Ain Rosette?',
    qStrand: '¿Hay un Signature Strand a juego disponible?',
    qWear: '¿Se puede llevar el collar de distintas maneras?',
    qIdentical: '¿Cada collar es idéntico?',
    qMade: '¿Dónde se fabrica el collar?',
    qGift: '¿El collar llega en packaging de regalo?',
    qCare: '¿Cómo debo cuidar mi collar?',
    madeFromQ: (n) => `¿De qué está hecho el ${n}?`,
    madeWhere: (n) => `Cada ${n} se hace a mano en Abu Dabi, Emiratos Árabes Unidos.`,
    giftAnswer: (n) =>
      `Sí. Cada ${n} se presenta en un estuche de regalo signature Bint Saeed, ideal para regalar y conservar.`,
  },
  ru: {
    featuresTitle: 'Особенности',
    houseCode: 'House Code: Al Ain Rosette',
    handcrafted: 'Ручная работа в Абу-Даби, Объединённые Арабские Эмираты',
    hematite: 'Бусины позолоченного гематита, вплетённые в дизайн',
    rosette: 'Signature Al Ain Rosette, вырезанная вручную из натурального сердолика (около 15 мм)',
    convertible: 'Преобразуемый дизайн: носить длинной или удвоенной вокруг шеи',
    clasp: 'Золотистый фирменный замок с регулируемой удлиняющей цепочкой',
    giftBox: 'Подаётся в фирменной подарочной коробке Bint Saeed',
    uniqueness: 'Каждый натуральный камень уникален по цвету, прожилкам и природному характеру',
    uniquenessLapis: 'Каждый натуральный самоцвет являет собственный цвет, прожилки и вкрапления пирита',
    uniquenessSunstone: 'Каждый натуральный самоцвет являет собственный цвет, мерцание и природный характер',
    uniquenessTiger: 'Каждый натуральный самоцвет являет собственный цвет, шелковистый блеск и природный характер',
    uniquenessOnyx: 'Каждый натуральный самоцвет уникален по тону и природному характеру',
    identical:
      'Нет. Каждое творение Bint Saeed включает натуральные самоцветы. Различия в цвете, прожилках и природных свойствах — часть индивидуальности каждой вещи и должны цениться как знак натуральных материалов.',
    identicalLapis:
      'Нет. Каждое творение Bint Saeed включает натуральные самоцветы. Различия в цвете, прожилках, вкраплениях пирита и природных свойствах — часть индивидуальности каждой вещи и должны цениться как знак натуральных материалов.',
    identicalSunstone:
      'Нет. Каждое творение Bint Saeed включает натуральные самоцветы. Различия в цвете, природном мерцании, включениях и свойствах — часть индивидуальности каждой вещи и должны цениться как знак натуральных материалов.',
    identicalTiger:
      'Нет. Каждое творение Bint Saeed включает натуральные самоцветы. Различия в цвете, переливчатости, включениях и природных свойствах — часть индивидуальности каждой вещи и должны цениться как знак натуральных материалов.',
    identicalOnyx:
      'Нет. Каждое творение Bint Saeed включает натуральные самоцветы. Различия в тоне, включениях и природных свойствах — часть индивидуальности каждой вещи и должны цениться как знак натуральных материалов.',
    wearWays:
      'Да. Ожерелье можно носить одной длинной нитью или удвоить вокруг шеи для более короткого многослойного силуэта.',
    careFaq: JEWELLERY_CARE_FAQ_NECKLACE_EN,
    qRosette: 'Что такое Al Ain Rosette?',
    qStrand: 'Есть ли подходящий Signature Strand?',
    qWear: 'Можно ли носить ожерелье по-разному?',
    qIdentical: 'Каждое ли ожерелье одинаково?',
    qMade: 'Где изготавливается ожерелье?',
    qGift: 'Ожерелье приходит в подарочной упаковке?',
    qCare: 'Как ухаживать за ожерельем?',
    madeFromQ: (n) => `Из чего сделано ${n}?`,
    madeWhere: (n) => `Каждое ${n} создаётся вручную в Абу-Даби, Объединённые Арабские Эмираты.`,
    giftAnswer: (n) =>
      `Да. Каждое ${n} подаётся в фирменной подарочной коробке Bint Saeed — идеально для подарка и хранения.`,
  },
  zh: {
    featuresTitle: '特点',
    houseCode: 'House Code: Al Ain Rosette',
    handcrafted: '于阿联酋阿布扎比手工制作',
    hematite: '贯穿设计的镀金赤铁矿点缀珠',
    rosette: 'Signature Al Ain Rosette，天然红玉髓手工雕刻（约 15 毫米）',
    convertible: '可变换设计：可作单层长链，或双绕颈间呈较短层次廓形',
    clasp: '金色标志扣环配可调节延长链',
    giftBox: '置于 Bint Saeed 标志性礼盒中呈献',
    uniqueness: '每颗天然石在色彩、纹理与天然性格上皆独一无二',
    uniquenessLapis: '每颗天然宝石皆呈现各自的色彩、纹理与黄铁矿包裹体',
    uniquenessSunstone: '每颗天然宝石皆呈现各自的色彩、闪光与天然性格',
    uniquenessTiger: '每颗天然宝石皆呈现各自的色彩、丝滑光泽与天然性格',
    uniquenessOnyx: '每颗天然宝石在色调与天然性格上皆独一无二',
    identical:
      '否。每件 Bint Saeed 作品皆采用天然宝石。色彩、纹理与天然特质的差异属于每件作品的个性，应作为天然材质的标志加以珍视。',
    identicalLapis:
      '否。每件 Bint Saeed 作品皆采用天然宝石。色彩、纹理、黄铁矿包裹体与天然特质的差异属于每件作品的个性，应作为天然材质的标志加以珍视。',
    identicalSunstone:
      '否。每件 Bint Saeed 作品皆采用天然宝石。色彩、天然闪光、包裹体与特质的差异属于每件作品的个性，应作为天然材质的标志加以珍视。',
    identicalTiger:
      '否。每件 Bint Saeed 作品皆采用天然宝石。色彩、猫眼光、包裹体与天然特质的差异属于每件作品的个性，应作为天然材质的标志加以珍视。',
    identicalOnyx:
      '否。每件 Bint Saeed 作品皆采用天然宝石。色调、包裹体与天然特质的差异属于每件作品的个性，应作为天然材质的标志加以珍视。',
    wearWays: '是。项链可作单层长链佩戴，或双绕颈间呈较短层次廓形。',
    careFaq: JEWELLERY_CARE_FAQ_NECKLACE_EN,
    qRosette: '什么是 Al Ain Rosette？',
    qStrand: '是否有配套 Signature Strand？',
    qWear: '项链是否可以不同方式佩戴？',
    qIdentical: '每条项链是否完全相同？',
    qMade: '项链在哪里制作？',
    qGift: '项链是否附礼盒包装？',
    qCare: '应如何护理项链？',
    madeFromQ: (n) => `${n}由什么制成？`,
    madeWhere: (n) => `每条${n}皆于阿联酋阿布扎比手工制作。`,
    giftAnswer: (n) => `是。每条${n}置于 Bint Saeed 标志性礼盒中呈献，适合赠礼与珍藏。`,
  },
  de: {
    featuresTitle: 'Merkmale',
    houseCode: 'House Code: Al Ain Rosette',
    handcrafted: 'Handgefertigt in Abu Dhabi, Vereinigte Arabische Emirate',
    hematite: 'Vergoldete Hämatit-Akzentperlen durch das gesamte Design',
    rosette: 'Signature Al Ain Rosette, handgeschnitzt aus natürlichem Karneol (etwa 15 mm)',
    convertible: 'Wandelbares Design: lang tragen oder doppelt um den Hals legen',
    clasp: 'Goldfarbener Signature-Verschluss mit verstellbarer Verlängerungskette',
    giftBox: 'Präsentiert in einer signature Bint-Saeed-Geschenkbox',
    uniqueness: 'Jeder Naturstein ist einzigartig in Farbe, Äderung und natürlichem Charakter',
    uniquenessLapis: 'Jeder Naturstein zeigt eigene Farbe, Äderung und Pyriteinschlüsse',
    uniquenessSunstone: 'Jeder Naturstein zeigt eigene Farbe, Schimmer und natürlichen Charakter',
    uniquenessTiger: 'Jeder Naturstein zeigt eigene Farbe, seidigen Glanz und natürlichen Charakter',
    uniquenessOnyx: 'Jeder Naturstein ist einzigartig in Ton und natürlichem Charakter',
    identical:
      'Nein. Jede Bint-Saeed-Kreation zeigt Natursteine. Variationen in Farbe, Äderung und natürlichen Eigenschaften gehören zur Individualität jedes Stücks und sollten als Merkmal natürlicher Materialien gefeiert werden.',
    identicalLapis:
      'Nein. Jede Bint-Saeed-Kreation zeigt Natursteine. Variationen in Farbe, Äderung, Pyriteinschlüssen und natürlichen Eigenschaften gehören zur Individualität jedes Stücks und sollten als Merkmal natürlicher Materialien gefeiert werden.',
    identicalSunstone:
      'Nein. Jede Bint-Saeed-Kreation zeigt Natursteine. Variationen in Farbe, natürlichem Schimmer, Einschlüssen und Eigenschaften gehören zur Individualität jedes Stücks und sollten als Merkmal natürlicher Materialien gefeiert werden.',
    identicalTiger:
      'Nein. Jede Bint-Saeed-Kreation zeigt Natursteine. Variationen in Farbe, Chatoyance, Einschlüssen und natürlichen Eigenschaften gehören zur Individualität jedes Stücks und sollten als Merkmal natürlicher Materialien gefeiert werden.',
    identicalOnyx:
      'Nein. Jede Bint-Saeed-Kreation zeigt Natursteine. Variationen in Ton, Einschlüssen und natürlichen Eigenschaften gehören zur Individualität jedes Stücks und sollten als Merkmal natürlicher Materialien gefeiert werden.',
    wearWays:
      'Ja. Die Halskette kann als einzelne lange Länge oder doppelt um den Hals getragen werden, für eine kürzere, geschichtete Silhouette.',
    careFaq: JEWELLERY_CARE_FAQ_NECKLACE_EN,
    qRosette: 'Was ist die Al Ain Rosette?',
    qStrand: 'Gibt es einen passenden Signature Strand?',
    qWear: 'Kann die Halskette auf verschiedene Weise getragen werden?',
    qIdentical: 'Ist jede Halskette identisch?',
    qMade: 'Wo wird die Halskette hergestellt?',
    qGift: 'Kommt die Halskette in Geschenkverpackung?',
    qCare: 'Wie sollte ich meine Halskette pflegen?',
    madeFromQ: (n) => `Woraus besteht die ${n}?`,
    madeWhere: (n) => `Jede ${n} wird in Abu Dhabi, Vereinigte Arabische Emirate, handgefertigt.`,
    giftAnswer: (n) =>
      `Ja. Jede ${n} wird in einer signature Bint-Saeed-Geschenkbox präsentiert — ideal zum Verschenken und Aufbewahren.`,
  },
  nl: {
    featuresTitle: 'Kenmerken',
    houseCode: 'House Code: Al Ain Rosette',
    handcrafted: 'Handgemaakt in Abu Dhabi, Verenigde Arabische Emiraten',
    hematite: 'Verguld hematiet accentkralen doorheen het ontwerp',
    rosette: 'Signature Al Ain Rosette, handgesneden uit natuurlijke carneool (ongeveer 15 mm)',
    convertible: 'Convertibel ontwerp: lang dragen of dubbel om de hals',
    clasp: 'Goudkleurige signature sluiting met verstelbare verlengketting',
    giftBox: 'Gepresenteerd in een signature Bint Saeed cadeauverpakking',
    uniqueness: 'Elke natuursteen is uniek in kleur, adering en natuurlijk karakter',
    uniquenessLapis: 'Elke natuurlijke edelsteen toont eigen kleur, adering en pyrietinclusies',
    uniquenessSunstone: 'Elke natuurlijke edelsteen toont eigen kleur, schittering en natuurlijk karakter',
    uniquenessTiger: 'Elke natuurlijke edelsteen toont eigen kleur, zijdeachtige glans en natuurlijk karakter',
    uniquenessOnyx: 'Elke natuurlijke edelsteen is uniek in toon en natuurlijk karakter',
    identical:
      'Nee. Elke Bint Saeed-creatie toont natuurlijke edelstenen. Variaties in kleur, adering en natuurlijke kenmerken horen bij de individualiteit van elk stuk en verdienen het om als kenmerk van natuurlijke materialen te worden gevierd.',
    identicalLapis:
      'Nee. Elke Bint Saeed-creatie toont natuurlijke edelstenen. Variaties in kleur, adering, pyrietinclusies en natuurlijke kenmerken horen bij de individualiteit van elk stuk en verdienen het om als kenmerk van natuurlijke materialen te worden gevierd.',
    identicalSunstone:
      'Nee. Elke Bint Saeed-creatie toont natuurlijke edelstenen. Variaties in kleur, natuurlijke schittering, inclusies en kenmerken horen bij de individualiteit van elk stuk en verdienen het om als kenmerk van natuurlijke materialen te worden gevierd.',
    identicalTiger:
      'Nee. Elke Bint Saeed-creatie toont natuurlijke edelstenen. Variaties in kleur, chatoyancy, inclusies en natuurlijke kenmerken horen bij de individualiteit van elk stuk en verdienen het om als kenmerk van natuurlijke materialen te worden gevierd.',
    identicalOnyx:
      'Nee. Elke Bint Saeed-creatie toont natuurlijke edelstenen. Variaties in toon, inclusies en natuurlijke kenmerken horen bij de individualiteit van elk stuk en verdienen het om als kenmerk van natuurlijke materialen te worden gevierd.',
    wearWays:
      'Ja. De ketting kan als enkele lange lengte of dubbel om de hals worden gedragen voor een korter gelaagd silhouet.',
    careFaq: JEWELLERY_CARE_FAQ_NECKLACE_EN,
    qRosette: 'Wat is de Al Ain Rosette?',
    qStrand: 'Is er een bijpassende Signature Strand beschikbaar?',
    qWear: 'Kan de ketting op verschillende manieren worden gedragen?',
    qIdentical: 'Is elke ketting identiek?',
    qMade: 'Waar wordt de ketting gemaakt?',
    qGift: 'Komt de ketting in cadeauverpakking?',
    qCare: 'Hoe moet ik mijn ketting verzorgen?',
    madeFromQ: (n) => `Waarvan is de ${n} gemaakt?`,
    madeWhere: (n) => `Elke ${n} wordt handgemaakt in Abu Dhabi, Verenigde Arabische Emiraten.`,
    giftAnswer: (n) =>
      `Ja. Elke ${n} wordt gepresenteerd in een signature Bint Saeed cadeauverpakking, ideaal om te geven en te bewaren.`,
  },
  pt: {
    featuresTitle: 'Características',
    houseCode: 'House Code: Al Ain Rosette',
    handcrafted: 'Feito à mão em Abu Dhabi, Emirados Árabes Unidos',
    hematite: 'Contas de hematite banho de ouro integradas no design',
    rosette: 'Signature Al Ain Rosette esculpida à mão em cornalina natural (aproximadamente 15 mm)',
    convertible: 'Design convertível: usar longo ou dobrado à volta do pescoço',
    clasp: 'Fecho signature dourado com corrente de extensão ajustável',
    giftBox: 'Apresentado numa caixa-presente signature Bint Saeed',
    uniqueness: 'Cada pedra natural é única em cor, veios e carácter natural',
    uniquenessLapis: 'Cada gema natural mostra a sua própria cor, veios e inclusões de pirite',
    uniquenessSunstone: 'Cada gema natural mostra a sua própria cor, brilho e carácter natural',
    uniquenessTiger: 'Cada gema natural mostra a sua própria cor, lustro sedoso e carácter natural',
    uniquenessOnyx: 'Cada gema natural é única em tom e carácter natural',
    identical:
      'Não. Cada criação Bint Saeed apresenta gemas naturais. Variações de cor, veios e características naturais fazem parte da individualidade de cada peça e devem ser celebradas como marca dos materiais naturais.',
    identicalLapis:
      'Não. Cada criação Bint Saeed apresenta gemas naturais. Variações de cor, veios, inclusões de pirite e características naturais fazem parte da individualidade de cada peça e devem ser celebradas como marca dos materiais naturais.',
    identicalSunstone:
      'Não. Cada criação Bint Saeed apresenta gemas naturais. Variações de cor, brilho natural, inclusões e características fazem parte da individualidade de cada peça e devem ser celebradas como marca dos materiais naturais.',
    identicalTiger:
      'Não. Cada criação Bint Saeed apresenta gemas naturais. Variações de cor, chatoyancy, inclusões e características naturais fazem parte da individualidade de cada peça e devem ser celebradas como marca dos materiais naturais.',
    identicalOnyx:
      'Não. Cada criação Bint Saeed apresenta gemas naturais. Variações de tom, inclusões e características naturais fazem parte da individualidade de cada peça e devem ser celebradas como marca dos materiais naturais.',
    wearWays:
      'Sim. O colar pode ser usado como comprimento simples ou dobrado à volta do pescoço para uma silhueta mais curta e em camadas.',
    careFaq: JEWELLERY_CARE_FAQ_NECKLACE_EN,
    qRosette: 'O que é a Al Ain Rosette?',
    qStrand: 'Existe um Signature Strand a condizer disponível?',
    qWear: 'O colar pode ser usado de formas diferentes?',
    qIdentical: 'Cada colar é idêntico?',
    qMade: 'Onde é feito o colar?',
    qGift: 'O colar chega em embalagem de presente?',
    qCare: 'Como devo cuidar do meu colar?',
    madeFromQ: (n) => `De que é feito o ${n}?`,
    madeWhere: (n) => `Cada ${n} é feito à mão em Abu Dhabi, Emirados Árabes Unidos.`,
    giftAnswer: (n) =>
      `Sim. Cada ${n} é apresentado numa caixa-presente signature Bint Saeed, ideal para oferecer e guardar.`,
  },
  id: {
    featuresTitle: 'Fitur',
    houseCode: 'House Code: Al Ain Rosette',
    handcrafted: 'Dibuat tangan di Abu Dhabi, Uni Emirat Arab',
    hematite: 'Manik aksen hematit berlapis emas di seluruh desain',
    rosette: 'Signature Al Ain Rosette diukir tangan dari karnelian alami (sekitar 15 mm)',
    convertible: 'Desain convertible: dikenakan panjang atau digandakan di leher',
    clasp: 'Kait signature bernada emas dengan rantai ekstensi yang dapat disesuaikan',
    giftBox: 'Disajikan dalam kotak hadiah signature Bint Saeed',
    uniqueness: 'Setiap batu alam unik dalam warna, urat, dan karakter alami',
    uniquenessLapis: 'Setiap batu permata alami menampilkan warna, urat, dan inklusi pirit sendiri',
    uniquenessSunstone: 'Setiap batu permata alami menampilkan warna, kilau, dan karakter alami sendiri',
    uniquenessTiger: 'Setiap batu permata alami menampilkan warna, kilau sutra, dan karakter alami sendiri',
    uniquenessOnyx: 'Setiap batu permata alami unik dalam nada dan karakter alami',
    identical:
      'Tidak. Setiap kreasi Bint Saeed menampilkan batu permata alami. Variasi warna, urat, dan karakteristik alami adalah bagian dari individualitas setiap karya dan patut dirayakan sebagai ciri bahan alami.',
    identicalLapis:
      'Tidak. Setiap kreasi Bint Saeed menampilkan batu permata alami. Variasi warna, urat, inklusi pirit, dan karakteristik alami adalah bagian dari individualitas setiap karya dan patut dirayakan sebagai ciri bahan alami.',
    identicalSunstone:
      'Tidak. Setiap kreasi Bint Saeed menampilkan batu permata alami. Variasi warna, kilau alami, inklusi, dan karakteristik adalah bagian dari individualitas setiap karya dan patut dirayakan sebagai ciri bahan alami.',
    identicalTiger:
      'Tidak. Setiap kreasi Bint Saeed menampilkan batu permata alami. Variasi warna, chatoyancy, inklusi, dan karakteristik alami adalah bagian dari individualitas setiap karya dan patut dirayakan sebagai ciri bahan alami.',
    identicalOnyx:
      'Tidak. Setiap kreasi Bint Saeed menampilkan batu permata alami. Variasi nada, inklusi, dan karakteristik alami adalah bagian dari individualitas setiap karya dan patut dirayakan sebagai ciri bahan alami.',
    wearWays:
      'Ya. Kalung dapat dikenakan sebagai panjang tunggal atau digandakan di leher untuk siluet berlapis yang lebih pendek.',
    careFaq: JEWELLERY_CARE_FAQ_NECKLACE_EN,
    qRosette: 'Apa itu Al Ain Rosette?',
    qStrand: 'Apakah Signature Strand yang serasi tersedia?',
    qWear: 'Apakah kalung dapat dikenakan dengan cara berbeda?',
    qIdentical: 'Apakah setiap kalung identik?',
    qMade: 'Di mana kalung dibuat?',
    qGift: 'Apakah kalung datang dalam kemasan hadiah?',
    qCare: 'Bagaimana saya harus merawat kalung saya?',
    madeFromQ: (n) => `Terbuat dari apakah ${n}?`,
    madeWhere: (n) => `Setiap ${n} dibuat tangan di Abu Dhabi, Uni Emirat Arab.`,
    giftAnswer: (n) =>
      `Ya. Setiap ${n} disajikan dalam kotak hadiah signature Bint Saeed, ideal untuk memberi dan menyimpan.`,
  },
  ms: {
    featuresTitle: 'Ciri-ciri',
    houseCode: 'House Code: Al Ain Rosette',
    handcrafted: 'Dibuat tangan di Abu Dhabi, Emiriah Arab Bersatu',
    hematite: 'Manik aksen hematit bersalut emas di seluruh reka bentuk',
    rosette: 'Signature Al Ain Rosette diukir tangan daripada karnelian semula jadi (kira-kira 15 mm)',
    convertible: 'Reka bentuk boleh ubah: dipakai panjang atau digandakan di leher',
    clasp: 'Kait signature bernada emas dengan rantai sambungan boleh laras',
    giftBox: 'Dipersembahkan dalam kotak hadiah signature Bint Saeed',
    uniqueness: 'Setiap batu semula jadi unik dari segi warna, urat dan karakter semula jadi',
    uniquenessLapis: 'Setiap batu permata semula jadi memaparkan warna, urat dan inklusi pirit sendiri',
    uniquenessSunstone: 'Setiap batu permata semula jadi memaparkan warna, kilau dan karakter semula jadi sendiri',
    uniquenessTiger: 'Setiap batu permata semula jadi memaparkan warna, kilau sutera dan karakter semula jadi sendiri',
    uniquenessOnyx: 'Setiap batu permata semula jadi unik dari segi nada dan karakter semula jadi',
    identical:
      'Tidak. Setiap ciptaan Bint Saeed menampilkan batu permata semula jadi. Variasi warna, urat dan ciri semula jadi adalah sebahagian daripada keindividuan setiap karya dan patut diraikan sebagai tanda bahan semula jadi.',
    identicalLapis:
      'Tidak. Setiap ciptaan Bint Saeed menampilkan batu permata semula jadi. Variasi warna, urat, inklusi pirit dan ciri semula jadi adalah sebahagian daripada keindividuan setiap karya dan patut diraikan sebagai tanda bahan semula jadi.',
    identicalSunstone:
      'Tidak. Setiap ciptaan Bint Saeed menampilkan batu permata semula jadi. Variasi warna, kilau semula jadi, inklusi dan ciri adalah sebahagian daripada keindividuan setiap karya dan patut diraikan sebagai tanda bahan semula jadi.',
    identicalTiger:
      'Tidak. Setiap ciptaan Bint Saeed menampilkan batu permata semula jadi. Variasi warna, chatoyancy, inklusi dan ciri semula jadi adalah sebahagian daripada keindividuan setiap karya dan patut diraikan sebagai tanda bahan semula jadi.',
    identicalOnyx:
      'Tidak. Setiap ciptaan Bint Saeed menampilkan batu permata semula jadi. Variasi nada, inklusi dan ciri semula jadi adalah sebahagian daripada keindividuan setiap karya dan patut diraikan sebagai tanda bahan semula jadi.',
    wearWays:
      'Ya. Rantai leher boleh dipakai sebagai panjang tunggal atau digandakan di leher untuk siluet berlapis yang lebih pendek.',
    careFaq: JEWELLERY_CARE_FAQ_NECKLACE_EN,
    qRosette: 'Apakah Al Ain Rosette?',
    qStrand: 'Adakah Signature Strand yang sepadan tersedia?',
    qWear: 'Bolehkah rantai leher dipakai dengan cara berbeza?',
    qIdentical: 'Adakah setiap rantai leher sama?',
    qMade: 'Di manakah rantai leher dihasilkan?',
    qGift: 'Adakah rantai leher datang dalam pembungkusan hadiah?',
    qCare: 'Bagaimanakah saya harus menjaga rantai leher saya?',
    madeFromQ: (n) => `Dari apakah ${n} dibuat?`,
    madeWhere: (n) => `Setiap ${n} dibuat tangan di Abu Dhabi, Emiriah Arab Bersatu.`,
    giftAnswer: (n) =>
      `Ya. Setiap ${n} dipersembahkan dalam kotak hadiah signature Bint Saeed, sesuai untuk memberi dan menyimpan.`,
  },
}

type UniquenessKey = 'default' | 'lapis' | 'sunstone' | 'tiger' | 'onyx'

type ProductLocaleCopy = {
  fullName: string
  introParagraphs: string[]
  beadFeature: string
  uniquenessKey: UniquenessKey
  coordinateFeature: string
  madeFromAnswer: string[]
  strandAnswer: string
}

const PRODUCT_COPY: Record<NecklaceId, Record<SecondaryLocale, ProductLocaleCopy>> = {
  'al-ain-oasis-necklace-malachite': {
    it: {
      uniquenessKey: 'default',
      fullName: `Collana Al Ain Oasis — Malachite`,
      beadFeature: `Perle di malachite naturale infilate a mano (circa 5 mm)`,
      coordinateFeature: `Concepita per coordinarsi con gli Orecchini Al Ain Oasis — Malachite e il Signature Strand — Malachite`,
      introParagraphs: [
        `Alcuni pezzi diventano parte del modo in cui si viene riconosciuti. La Collana Al Ain Oasis — Malachite è infilata a mano con gemme di malachite naturali, accentata da perle di ematite placcata oro e terminata dalla Al Ain Rosette signature della Maison, intagliata a mano in corniola naturale. Concepita per adattarsi a ogni occasione, può essere indossata come lunghezza singola o raddoppiata intorno al collo per una silhouette più corta e stratificata.`,
        `Le gemme naturali sono da tempo apprezzate per la loro individualità. La profondità di colore, le venature distintive e il carattere organico offrono una ricchezza che solo la natura può creare, rendendo ogni collana unica come la donna che la indossa.`,
        `Artigianale ad Abu Dhabi, la collana unisce gemme naturali a uno dei House Codes di Bint Saeed. Ispirata ai toni caldi del deserto intorno ad Al Ain, la Al Ain Rosette appare nelle collezioni gioielli e prêt-à-porter della Maison come espressione signature del linguaggio di design Bint Saeed.`,
        `Completate l’insieme abbinando la collana agli orecchini Al Ain Rosette assortiti e ai Signature Strands Bint Saeed.`,
      ],
      madeFromAnswer: [
        `La collana è artigianale con perle di malachite naturale, perle di ematite placcata oro e la Al Ain Rosette signature della Maison, intagliata a mano in corniola naturale. È terminata da una chiusura dorata e una catenina di estensione regolabile.`,
        `La malachite è una gemma naturale formata nel corso di migliaia di anni in regioni ricche di rame. Celebrata per le sue bande verdi distintive e la profondità di colore, ogni perla di malachite è unica, assicurando che nessuna creazione Bint Saeed sia mai esattamente uguale a un’altra.`,
      ],
      strandAnswer: `Sì. Il Signature Strand — Malachite è stato concepito per completare la collana e può essere fissato ad abaya, abiti e pezzi di sartoria Bint Saeed selezionati, permettendo a gioielli e capi di condividere gli stessi dettagli in pietra naturale. Abbinato agli orecchini assortiti, compone un’espressione completa della collezione pietre naturali della Maison.`,
    },
    es: {
      uniquenessKey: 'default',
      fullName: `Collar Al Ain Oasis — Malaquita`,
      beadFeature: `Cuentas de malaquita natural ensartadas a mano (aproximadamente 5 mm)`,
      coordinateFeature: `Diseñado para coordinar con los Pendientes Al Ain Oasis — Malaquita y el Signature Strand — Malaquita`,
      introParagraphs: [
        `Algunas piezas se convierten en parte de cómo se te reconoce. El Collar Al Ain Oasis — Malaquita se ensarta a mano con gemas de malaquita naturales, se acentúa con cuentas de hematita baño de oro y se remata con la Al Ain Rosette signature de la Maison, tallada a mano en cornalina natural. Diseñado para adaptarse a cada ocasión, puede llevarse como longitud sencilla o doblado alrededor del cuello para una silueta más corta y en capas.`,
        `Las gemas naturales se han apreciado desde hace tiempo por su individualidad. La profundidad de color, las vetas distintivas y el carácter orgánico aportan una riqueza que solo la naturaleza puede crear, haciendo cada collar tan único como la mujer que lo lleva.`,
        `Hecho a mano en Abu Dabi, el collar combina gemas naturales con uno de los House Codes de Bint Saeed. Inspirada en los tonos cálidos del desierto que rodean Al Ain, la Al Ain Rosette aparece en las colecciones de joyería y prêt-à-porter de la Maison como expresión signature del lenguaje de diseño Bint Saeed.`,
        `Completa el look combinando el collar con los pendientes Al Ain Rosette a juego y los Signature Strands Bint Saeed.`,
      ],
      madeFromAnswer: [
        `El collar se elabora a mano con cuentas de malaquita natural, cuentas de hematita baño de oro y la Al Ain Rosette signature de la Maison, tallada a mano en cornalina natural. Se remata con un cierre dorado y una cadena de extensión ajustable.`,
        `La malaquita es una gema natural formada a lo largo de miles de años en regiones ricas en cobre. Celebrada por sus bandas verdes distintivas y su profundidad de color, cada cuenta de malaquita es única, asegurando que ninguna creación Bint Saeed sea exactamente igual a otra.`,
      ],
      strandAnswer: `Sí. El Signature Strand — Malaquita se ha diseñado para complementar el collar y puede fijarse a abayas, vestidos y piezas de sastrería Bint Saeed seleccionadas, permitiendo que joyería y prendas compartan los mismos detalles de piedra natural. Emparejado con los pendientes a juego, crea una expresión completa de la colección de piedra natural de la Maison.`,
    },
    ru: {
      uniquenessKey: 'default',
      fullName: `Ожерелье Al Ain Oasis — Малахит`,
      beadFeature: `Натуральные бусины малахита, нанизанные вручную (около 5 мм)`,
      coordinateFeature: `Создано для сочетания с Серьгами Al Ain Oasis — Малахит и Signature Strand — Малахит`,
      introParagraphs: [
        `Некоторые вещи становятся частью того, как вас узнают. Ожерелье Al Ain Oasis — Малахит нанизано вручную из натурального малахит, акцентировано бусинами позолоченного гематита и завершено фирменной Al Ain Rosette Дома, вырезанной вручную из натурального сердолика. Созданное для любой ситуации, оно может носиться одной длинной нитью или удвоенным вокруг шеи для более короткого многослойного силуэта.`,
        `Натуральные самоцветы давно ценятся за индивидуальность. Глубина цвета, характерные прожилки и органический характер дают богатство, которое способна создать только природа, делая каждое ожерелье таким же уникальным, как женщина, которая его носит.`,
        `Созданное вручную в Абу-Даби, ожерелье соединяет натуральные самоцветы с одним из House Codes Bint Saeed. Вдохновлённая тёплыми пустынными тонами вокруг Al Ain, Al Ain Rosette появляется в ювелирных и готовых коллекциях Дома как фирменное выражение языка дизайна Bint Saeed.`,
        `Завершите образ, сочетая ожерелье с подходящими серьгами Al Ain Rosette и Signature Strands Bint Saeed.`,
      ],
      madeFromAnswer: [
        `Ожерелье создаётся вручную из натуральных бусин малахита, бусин позолоченного гематита и фирменной Al Ain Rosette Дома, вырезанной вручную из натурального сердолика. Завершается золотистым замком и регулируемой удлиняющей цепочкой.`,
        `Малахит — натуральный самоцвет, формировавшийся тысячелетиями в меденосных регионах. Прославленный характерными зелёными полосами и глубиной цвета, каждая бусина малахита уникальна, поэтому никакие два творения Bint Saeed не бывают в точности одинаковыми.`,
      ],
      strandAnswer: `Да. Signature Strand — Малахит создан, чтобы дополнять ожерелье, и может крепиться к избранным абаям, платьям и портновским изделиям Bint Saeed, позволяя украшениям и одежде разделять одни и те же детали из натурального камня. В паре с подходящими серьгами это полное выражение коллекции натурального камня Дома.`,
    },
    zh: {
      uniquenessKey: 'default',
      fullName: `Al Ain Oasis 孔雀石项链`,
      beadFeature: `手工串制天然孔雀石珠（约 5 毫米）`,
      coordinateFeature: `旨在与 Al Ain Oasis 孔雀石耳环及 Signature Strand — 孔雀石 协调佩戴`,
      introParagraphs: [
        `有些单品成为人们认出你的方式。Al Ain Oasis 孔雀石项链以天然孔雀石手工串制，点缀镀金赤铁矿珠，并以品牌标志性 Al Ain Rosette——天然红玉髓手工雕刻——收束。为适应各种场合而设计，可作单层长链，或双绕颈间呈较短层次廓形。`,
        `天然宝石因其个性而久为珍视。色彩深度、独特纹理与有机性格带来唯有自然能创造的丰盈，使每条项链都如佩戴者般独一无二。`,
        `于阿布扎比手工制作，项链将天然宝石与 Bint Saeed 的 House Code 之一相结合。受 Al Ain 周边温暖沙漠色调启发，Al Ain Rosette 贯穿品牌珠宝与成衣系列，成为 Bint Saeed 设计语言的标志性表达。`,
        `以配套 Al Ain Rosette 耳环与 Bint Saeed Signature Strands 完成造型。`,
      ],
      madeFromAnswer: [
        `项链以天然孔雀石珠、镀金赤铁矿珠，以及品牌标志性、天然红玉髓手工雕刻的 Al Ain Rosette 手工制作，并以金色扣环与可调节延长链收束。`,
        `孔雀石是在富铜地区历经千年形成的天然宝石。以其独特绿带与色彩深度著称，每颗孔雀石珠皆独一无二，确保没有任何两件 Bint Saeed 作品完全相同。`,
      ],
      strandAnswer: `是。Signature Strand — 孔雀石旨在与项链相配，并可固定于精选 Bint Saeed 长袍、裙装与定制单品，使珠宝与服饰共享相同的天然石细节。搭配配套耳环，构成品牌天然石系列的完整表达。`,
    },
    de: {
      uniquenessKey: 'default',
      fullName: `Al Ain Oasis Halskette — Malachit`,
      beadFeature: `Handaufgezogene natürliche Malachitperlen (etwa 5 mm)`,
      coordinateFeature: `Gestaltet zur Abstimmung mit den Al Ain Oasis Ohrringen — Malachit und dem Signature Strand — Malachit`,
      introParagraphs: [
        `Manche Stücke werden Teil dessen, wie man erkannt wird. Die Al Ain Oasis Halskette — Malachit wird aus natürlichem Malachit handaufgezogen, mit vergoldeten Hämatitperlen akzentuiert und mit der Signature-Al-Ain-Rosette des Hauses abgeschlossen, handgeschnitzt aus natürlichem Karneol. Für jede Gelegenheit gedacht, kann sie als einzelne lange Länge oder doppelt um den Hals getragen werden, für eine kürzere, geschichtete Silhouette.`,
        `Natursteine werden seit Langem für ihre Individualität geschätzt. Die Farbtiefe, die charakteristische Äderung und der organische Charakter bringen einen Reichtum, den nur die Natur schaffen kann — und machen jede Halskette so einzigartig wie die Frau, die sie trägt.`,
        `Handgefertigt in Abu Dhabi verbindet die Halskette Natursteine mit einem der House Codes von Bint Saeed. Inspiriert von den warmen Wüstentönen um Al Ain erscheint die Al Ain Rosette in den Schmuck- und Ready-to-wear-Kollektionen des Hauses als Signature-Ausdruck der Designsprache von Bint Saeed.`,
        `Vervollständigen Sie den Look, indem Sie die Halskette mit den passenden Al Ain Rosette Ohrringen und den Signature Strands Bint Saeed kombinieren.`,
      ],
      madeFromAnswer: [
        `Die Halskette wird handgefertigt aus natürlichen Malachit-Perlen, vergoldeten Hämatit-Akzentperlen und der Signature-Al-Ain-Rosette des Hauses, handgeschnitzt aus natürlichem Karneol. Sie wird mit einem goldfarbenen Verschluss und einer verstellbaren Verlängerungskette abgeschlossen.`,
        `Malachit ist ein natürlich vorkommender Edelstein, der über Jahrtausende in kupferreichen Regionen entstanden ist. Gefeiert für seine charakteristischen grünen Bänder und Farbtiefe ist jede Malachitperle einzigartig — keine zwei Bint-Saeed-Kreationen sind jemals genau gleich.`,
      ],
      strandAnswer: `Ja. Der Signature Strand — Malachit wurde gestaltet, um die Halskette zu ergänzen, und kann an ausgewählten Abayas, Kleidern und Maßstücken von Bint Saeed befestigt werden, sodass Schmuck und Kleidung dieselben Natursteindetails teilen. Mit den passenden Ohrringen entsteht ein vollständiger Ausdruck der Naturstein-Kollektion des Hauses.`,
    },
    nl: {
      uniquenessKey: 'default',
      fullName: `Al Ain Oasis ketting — Malachiet`,
      beadFeature: `Handgeregen natuurlijke malachietkralen (ongeveer 5 mm)`,
      coordinateFeature: `Ontworpen om te coördineren met de Al Ain Oasis oorbellen — Malachiet en de Signature Strand — Malachiet`,
      introParagraphs: [
        `Sommige stukken worden deel van hoe men je herkent. De Al Ain Oasis ketting — Malachiet wordt met de hand geregen van natuurlijke malachiet, geaccentueerd met verguld hematiet kralen en afgewerkt met de signature Al Ain Rosette van het Huis, handgesneden uit natuurlijke carneool. Ontworpen voor elke gelegenheid, kan hij als enkele lange lengte of dubbel om de hals worden gedragen voor een korter gelaagd silhouet.`,
        `Natuurlijke edelstenen worden al lang gewaardeerd om hun individualiteit. De kleurdiepte, kenmerkende adering en organische karakter brengen een rijkdom die alleen de natuur kan scheppen, waardoor elke ketting even uniek is als de vrouw die hem draagt.`,
        `Handgemaakt in Abu Dhabi combineert de ketting natuurlijke edelstenen met een van de House Codes van Bint Saeed. Geïnspireerd door de warme woestijntonen rond Al Ain verschijnt de Al Ain Rosette in de sieraden- en ready-to-wear-collecties van het Huis als signature-uitdrukking van de design taal van Bint Saeed.`,
        `Maak de look af door de ketting te combineren met de bijpassende Al Ain Rosette oorbellen en de Signature Strands Bint Saeed.`,
      ],
      madeFromAnswer: [
        `De ketting wordt handgemaakt met natuurlijke malachietkralen, verguld hematiet accentkralen en de signature Al Ain Rosette van het Huis, handgesneden uit natuurlijke carneool. Hij wordt afgewerkt met een goudkleurige sluiting en een verstelbare verlengketting.`,
        `Malachiet is een natuurlijk voorkomende edelsteen, gevormd over duizenden jaren in koperrijke gebieden. Gevierd om zijn kenmerkende groene banden en kleurdiepte is elke malachietkraal uniek, zodat geen twee Bint Saeed-creaties ooit precies hetzelfde zijn.`,
      ],
      strandAnswer: `Ja. De Signature Strand — Malachiet is ontworpen om de ketting te complementeren en kan worden bevestigd aan geselecteerde Bint Saeed abaya’s, jurken en maatwerkstukken, zodat sieraden en kleding dezelfde natuursteendetails delen. Gepaard met de bijpassende oorbellen vormt het een volledige uitdrukking van de natuursteencollectie van het Huis.`,
    },
    pt: {
      uniquenessKey: 'default',
      fullName: `Colar Al Ain Oasis — Malaquite`,
      beadFeature: `Contas de malaquite natural enfiadas à mão (aproximadamente 5 mm)`,
      coordinateFeature: `Concebido para coordenar com os Brincos Al Ain Oasis — Malaquite e o Signature Strand — Malaquite`,
      introParagraphs: [
        `Algumas peças tornam-se parte da forma como se é reconhecida. O Colar Al Ain Oasis — Malaquite é enfiado à mão com gemas de malaquite naturais, acentuado com contas de hematite banho de ouro e terminado com a Al Ain Rosette signature da Maison, esculpida à mão em cornalina natural. Concebido para se adaptar a cada ocasião, pode ser usado como comprimento simples ou dobrado à volta do pescoço para uma silhueta mais curta e em camadas.`,
        `As gemas naturais são há muito apreciadas pela sua individualidade. A profundidade de cor, os veios distintos e o carácter orgânico trazem uma riqueza que só a natureza pode criar, tornando cada colar tão único como a mulher que o usa.`,
        `Feito à mão em Abu Dhabi, o colar combina gemas naturais com um dos House Codes da Bint Saeed. Inspirada nos tons quentes do deserto em torno de Al Ain, a Al Ain Rosette aparece nas coleções de joalharia e prêt-à-porter da Maison como expressão signature da linguagem de design Bint Saeed.`,
        `Complete o look combinando o colar com os brincos Al Ain Rosette a condizer e os Signature Strands Bint Saeed.`,
      ],
      madeFromAnswer: [
        `O colar é feito à mão com contas de malaquite natural, contas de hematite banho de ouro e a Al Ain Rosette signature da Maison, esculpida à mão em cornalina natural. É terminado com um fecho dourado e uma corrente de extensão ajustável.`,
        `A malaquite é uma gema natural formada ao longo de milhares de anos em regiões ricas em cobre. Celebrada pelas suas faixas verdes distintas e profundidade de cor, cada conta de malaquite é única, assegurando que nenhuma criação Bint Saeed é exactamente igual a outra.`,
      ],
      strandAnswer: `Sim. O Signature Strand — Malaquite foi concebido para complementar o colar e pode ser fixado a abayas, vestidos e peças de alfaiataria Bint Saeed selecionadas, permitindo que joias e vestuário partilhem os mesmos detalhes em pedra natural. Emparelhado com os brincos a condizer, cria uma expressão completa da coleção de pedra natural da Maison.`,
    },
    id: {
      uniquenessKey: 'default',
      fullName: `Kalung Al Ain Oasis — Malakit`,
      beadFeature: `Manik malakit alami dirangkai tangan (sekitar 5 mm)`,
      coordinateFeature: `Dirancang untuk berkoordinasi dengan Anting Al Ain Oasis — Malakit dan Signature Strand — Malakit`,
      introParagraphs: [
        `Beberapa karya menjadi bagian dari cara Anda dikenali. Kalung Al Ain Oasis — Malakit dirangkai tangan dari malakit alami, diberi aksen manik hematit berlapis emas, dan diakhiri dengan Al Ain Rosette signature House, diukir tangan dari karnelian alami. Dirancang untuk setiap kesempatan, dapat dikenakan sebagai panjang tunggal atau digandakan di leher untuk siluet berlapis yang lebih pendek.`,
        `Batu permata alami telah lama dihargai karena individualitasnya. Kedalaman warna, urat khas, dan karakter organik membawa kekayaan yang hanya alam yang mampu menciptakan, menjadikan setiap kalung seunik wanita yang memakainya.`,
        `Dibuat tangan di Abu Dhabi, kalung ini menggabungkan batu permata alami dengan salah satu House Codes Bint Saeed. Terinspirasi nada gurun hangat di sekitar Al Ain, Al Ain Rosette muncul di koleksi perhiasan dan ready-to-wear House sebagai ekspresi signature bahasa desain Bint Saeed.`,
        `Lengkapi look dengan memasangkan kalung dengan anting Al Ain Rosette yang serasi dan Signature Strands Bint Saeed.`,
      ],
      madeFromAnswer: [
        `Kalung dibuat tangan menggunakan manik malakit alami, manik aksen hematit berlapis emas, dan Al Ain Rosette signature House yang diukir tangan dari karnelian alami. Diselesaikan dengan kait bernada emas dan rantai ekstensi yang dapat disesuaikan.`,
        `Malakit adalah batu permata alami yang terbentuk selama ribuan tahun di wilayah kaya tembaga. Dirayakan karena pita hijau khas dan kedalaman warnanya, setiap manik malakit unik, memastikan tidak ada dua kreasi Bint Saeed yang persis sama.`,
      ],
      strandAnswer: `Ya. Signature Strand — Malakit dirancang untuk melengkapi kalung dan dapat dipasang pada abaya, gaun, dan potongan jahitan Bint Saeed terpilih, sehingga perhiasan dan pakaian berbagi detail batu alam yang sama. Dipasangkan dengan anting yang serasi, ia menciptakan ekspresi lengkap koleksi batu alam House.`,
    },
    ms: {
      uniquenessKey: 'default',
      fullName: `Rantai leher Al Ain Oasis — Malakit`,
      beadFeature: `Manik malakit semula jadi dirangkai tangan (kira-kira 5 mm)`,
      coordinateFeature: `Direka untuk berkoordinasi dengan Anting Al Ain Oasis — Malakit dan Signature Strand — Malakit`,
      introParagraphs: [
        `Sesetengah karya menjadi sebahagian daripada cara anda dikenali. Rantai leher Al Ain Oasis — Malakit dirangkai tangan daripada malakit semula jadi, diberi aksen manik hematit bersalut emas, dan diakhiri dengan Al Ain Rosette signature House, diukir tangan daripada karnelian semula jadi. Direka untuk setiap majlis, ia boleh dipakai sebagai panjang tunggal atau digandakan di leher untuk siluet berlapis yang lebih pendek.`,
        `Batu permata semula jadi telah lama dihargai kerana keindividuannya. Kedalaman warna, urat tersendiri dan karakter organik membawa kekayaan yang hanya alam mampu mencipta, menjadikan setiap rantai leher seunik wanita yang memakainya.`,
        `Dibuat tangan di Abu Dhabi, rantai leher ini menggabungkan batu permata semula jadi dengan salah satu House Codes Bint Saeed. Diilhamkan nada padang pasir hangat sekitar Al Ain, Al Ain Rosette muncul dalam koleksi barang kemas dan ready-to-wear House sebagai ekspresi signature bahasa reka bentuk Bint Saeed.`,
        `Lengkapkan look dengan memasangkan rantai leher dengan anting Al Ain Rosette yang sepadan dan Signature Strands Bint Saeed.`,
      ],
      madeFromAnswer: [
        `Rantai leher dibuat tangan menggunakan manik malakit semula jadi, manik aksen hematit bersalut emas, dan Al Ain Rosette signature House yang diukir tangan daripada karnelian semula jadi. Diselesaikan dengan kait bernada emas dan rantai sambungan boleh laras.`,
        `Malakit ialah batu permata semula jadi yang terbentuk selama ribuan tahun di kawasan kaya tembaga. Dirayakan kerana jalur hijau tersendiri dan kedalaman warnanya, setiap manik malakit unik, memastikan tiada dua ciptaan Bint Saeed yang sama tepat.`,
      ],
      strandAnswer: `Ya. Signature Strand — Malakit direka untuk melengkapi rantai leher dan boleh dipasang pada abaya, gaun dan potongan jahitan Bint Saeed terpilih, membolehkan barang kemas dan pakaian berkongsi perincian batu semula jadi yang sama. Dipasangkan dengan anting yang sepadan, ia mencipta ekspresi lengkap koleksi batu semula jadi House.`,
    },
  },
  'al-ain-oasis-necklace-tiger-eye': {
    it: {
      uniquenessKey: 'tiger',
      fullName: `Collana Al Ain Oasis — Occhio di tigre`,
      beadFeature: `Perle di occhio di tigre naturale infilate a mano (circa 5 mm)`,
      coordinateFeature: `Concepita per coordinarsi con orecchini signature e il Signature Strand — Occhio di tigre`,
      introParagraphs: [
        `Distintiva per colore e carattere, la Collana Al Ain Oasis — Occhio di tigre è infilata a mano con gemme di occhio di tigre naturali, accentata da perle di ematite placcata oro e completata dalla Al Ain Rosette signature della Maison, intagliata a mano in corniola naturale. Concepita per la versatilità, può essere indossata come lunghezza singola o raddoppiata intorno al collo per una silhouette più corta e stratificata.`,
        `Le gemme naturali sono da tempo apprezzate per la loro individualità. La profondità di colore, le venature distintive e il carattere organico offrono una ricchezza che solo la natura può creare, rendendo ogni collana unica come la donna che la indossa.`,
        `Artigianale ad Abu Dhabi, la collana riflette l’apprezzamento di Bint Saeed per i materiali naturali e l’artigianato duraturo. Completate l’insieme abbinando la collana a orecchini signature e al Signature Strand — Occhio di tigre, concepito per completare abaya, abiti e pezzi di sartoria Bint Saeed selezionati.`,
      ],
      madeFromAnswer: [
        `La collana è artigianale con perle di occhio di tigre naturale, perle di ematite placcata oro e la Al Ain Rosette signature della Maison, intagliata a mano in corniola naturale. È terminata da una chiusura dorata e una catenina di estensione regolabile.`,
        `L’occhio di tigre è una gemma naturale ammirata per i suoi toni dorato-bruni e il lustro setoso distintivo, noto come chatoyancy, che crea una banda di luce mobile sulla superficie. Ogni gemma è unica, assicurando che ogni collana Bint Saeed possieda il proprio carattere.`,
      ],
      strandAnswer: `Sì. Il Signature Strand — Occhio di tigre è stato concepito per completare la collana e può essere fissato ad abaya, abiti e pezzi di sartoria Bint Saeed selezionati, permettendo a gioielli e capi di condividere gli stessi dettagli in pietra naturale. Abbinato a orecchini signature, compone un’espressione completa della collezione pietre naturali della Maison.`,
    },
    es: {
      uniquenessKey: 'tiger',
      fullName: `Collar Al Ain Oasis — Ojo de tigre`,
      beadFeature: `Cuentas de ojo de tigre natural ensartadas a mano (aproximadamente 5 mm)`,
      coordinateFeature: `Diseñado para coordinar con pendientes signature y el Signature Strand — Ojo de tigre`,
      introParagraphs: [
        `Distintivo en color y carácter, el Collar Al Ain Oasis — Ojo de tigre se ensarta a mano con gemas de ojo de tigre naturales, se acentúa con cuentas de hematita baño de oro y se completa con la Al Ain Rosette signature de la Maison, tallada a mano en cornalina natural. Diseñado con versatilidad, puede llevarse como longitud sencilla o doblado alrededor del cuello para una silueta más corta y en capas.`,
        `Las gemas naturales se han apreciado desde hace tiempo por su individualidad. La profundidad de color, las vetas distintivas y el carácter orgánico aportan una riqueza que solo la naturaleza puede crear, haciendo cada collar tan único como la mujer que lo lleva.`,
        `Hecho a mano en Abu Dabi, el collar refleja la apreciación de Bint Saeed por los materiales naturales y la artesanía perdurable. Completa el look combinando el collar con pendientes signature y el Signature Strand — Ojo de tigre, diseñado para complementar abayas, vestidos y sastrería Bint Saeed seleccionadas.`,
      ],
      madeFromAnswer: [
        `El collar se elabora a mano con cuentas de ojo de tigre natural, cuentas de hematita baño de oro y la Al Ain Rosette signature de la Maison, tallada a mano en cornalina natural. Se remata con un cierre dorado y una cadena de extensión ajustable.`,
        `El ojo de tigre es una gema natural admirada por sus tonos dorado-marrones y su lustre sedoso distintivo, conocido como chatoyancy, que crea una banda de luz móvil en la superficie. Cada gema es única, asegurando que cada collar Bint Saeed posea su propio carácter.`,
      ],
      strandAnswer: `Sí. El Signature Strand — Ojo de tigre se ha diseñado para complementar el collar y puede fijarse a abayas, vestidos y piezas de sastrería Bint Saeed seleccionadas, permitiendo que joyería y prendas compartan los mismos detalles de piedra natural. Emparejado con pendientes signature, crea una expresión completa de la colección de piedra natural de la Maison.`,
    },
    ru: {
      uniquenessKey: 'tiger',
      fullName: `Ожерелье Al Ain Oasis — Тигровый глаз`,
      beadFeature: `Натуральные бусины тигрового глаза, нанизанные вручную (около 5 мм)`,
      coordinateFeature: `Создано для сочетания с signature-серьгами и Signature Strand — Тигровый глаз`,
      introParagraphs: [
        `Отличительное по цвету и характеру, Ожерелье Al Ain Oasis — Тигровый глаз нанизано вручную из натурального тигровый глаз, акцентировано бусинами позолоченного гематита и завершено фирменной Al Ain Rosette Дома, вырезанной вручную из натурального сердолика. Созданное с мыслью о многогранности, оно может носиться одной длинной нитью или удвоенным вокруг шеи для более короткого многослойного силуэта.`,
        `Натуральные самоцветы давно ценятся за индивидуальность. Глубина цвета, характерные прожилки и органический характер дают богатство, которое способна создать только природа, делая каждое ожерелье таким же уникальным, как женщина, которая его носит.`,
        `Созданное вручную в Абу-Даби, ожерелье отражает уважение Bint Saeed к натуральным материалам и долговечному мастерству. Завершите образ, сочетая ожерелье с signature-серьгами и Signature Strand — Тигровый глаз, созданным дополнять избранные абаи, платья и портновские изделия Bint Saeed.`,
      ],
      madeFromAnswer: [
        `Ожерелье создаётся вручную из натуральных бусин тигрового глаза, бусин позолоченного гематита и фирменной Al Ain Rosette Дома, вырезанной вручную из натурального сердолика. Завершается золотистым замком и регулируемой удлиняющей цепочкой.`,
        `Тигровый глаз — натуральный самоцвет, ценимый за богатые золотисто-коричневые тона и характерный шелковистый оптический эффект, известный как переливчатость, создающий подвижную полосу света на поверхности. Каждый самоцвет уникален, поэтому каждое ожерелье Bint Saeed обладает собственным характером.`,
      ],
      strandAnswer: `Да. Signature Strand — Тигровый глаз создан, чтобы дополнять ожерелье, и может крепиться к избранным абаям, платьям и портновским изделиям Bint Saeed, позволяя украшениям и одежде разделять одни и те же детали из натурального камня. В паре с signature-серьгами это полное выражение коллекции натурального камня Дома.`,
    },
    zh: {
      uniquenessKey: 'tiger',
      fullName: `Al Ain Oasis 虎眼石项链`,
      beadFeature: `手工串制天然虎眼石珠（约 5 毫米）`,
      coordinateFeature: `旨在与标志性耳环及 Signature Strand — 虎眼石 协调佩戴`,
      introParagraphs: [
        `色彩与性格鲜明，Al Ain Oasis 虎眼石项链以天然虎眼石手工串制，点缀镀金赤铁矿珠，并以品牌标志性 Al Ain Rosette——天然红玉髓手工雕刻——完成。为多变佩戴而设计，可作单层长链，或双绕颈间呈较短层次廓形。`,
        `天然宝石因其个性而久为珍视。色彩深度、独特纹理与有机性格带来唯有自然能创造的丰盈，使每条项链都如佩戴者般独一无二。`,
        `于阿布扎比手工制作，项链体现 Bint Saeed 对天然材质与持久工艺的珍视。以标志性耳环与 Signature Strand — 虎眼石 完成造型；后者旨在与精选 Bint Saeed 长袍、裙装与定制单品相配。`,
      ],
      madeFromAnswer: [
        `项链以天然虎眼石珠、镀金赤铁矿珠，以及品牌标志性、天然红玉髓手工雕刻的 Al Ain Rosette 手工制作，并以金色扣环与可调节延长链收束。`,
        `虎眼石是天然宝石，以其浓郁金棕色调与丝滑光泽著称；这种被称为猫眼光的光学效果在表面形成移动光带。每颗宝石皆独特，确保每条 Bint Saeed 项链都有自身性格。`,
      ],
      strandAnswer: `是。Signature Strand — 虎眼石旨在与项链相配，并可固定于精选 Bint Saeed 长袍、裙装与定制单品，使珠宝与服饰共享相同的天然石细节。搭配标志性耳环，构成品牌天然石系列的完整表达。`,
    },
    de: {
      uniquenessKey: 'tiger',
      fullName: `Al Ain Oasis Halskette — Tigerauge`,
      beadFeature: `Handaufgezogene natürliche Tigerauge-Perlen (etwa 5 mm)`,
      coordinateFeature: `Gestaltet zur Abstimmung mit Signature-Ohrringen und dem Signature Strand — Tigerauge`,
      introParagraphs: [
        `Unverwechselbar in Farbe und Charakter, wird die Al Ain Oasis Halskette — Tigerauge aus natürlichem Tigerauge handaufgezogen, mit vergoldeten Hämatitperlen akzentuiert und mit der Signature-Al-Ain-Rosette des Hauses abgeschlossen, handgeschnitzt aus natürlichem Karneol. Für Vielseitigkeit gedacht, kann sie als einzelne lange Länge oder doppelt um den Hals getragen werden, für eine kürzere, geschichtete Silhouette.`,
        `Natursteine werden seit Langem für ihre Individualität geschätzt. Die Farbtiefe, die charakteristische Äderung und der organische Charakter bringen einen Reichtum, den nur die Natur schaffen kann — und machen jede Halskette so einzigartig wie die Frau, die sie trägt.`,
        `Handgefertigt in Abu Dhabi spiegelt die Halskette Bint Saeeds Wertschätzung für natürliche Materialien und beständiges Handwerk wider. Vervollständigen Sie den Look mit Signature-Ohrringen und dem Signature Strand — Tigerauge, gestaltet zur Ergänzung ausgewählter Abayas, Kleider und Maßstücke von Bint Saeed.`,
      ],
      madeFromAnswer: [
        `Die Halskette wird handgefertigt aus natürlichen Tigerauge-Perlen, vergoldeten Hämatit-Akzentperlen und der Signature-Al-Ain-Rosette des Hauses, handgeschnitzt aus natürlichem Karneol. Sie wird mit einem goldfarbenen Verschluss und einer verstellbaren Verlängerungskette abgeschlossen.`,
        `Tigerauge ist ein natürlich vorkommender Edelstein, bewundert für seine reichen goldbraunen Töne und den charakteristischen seidigen optischen Effekt, bekannt als Chatoyance, der ein wanderndes Lichtband auf der Oberfläche erzeugt. Jeder Edelstein ist einzigartig — jede Bint-Saeed-Halskette besitzt ihren eigenen Charakter.`,
      ],
      strandAnswer: `Ja. Der Signature Strand — Tigerauge wurde gestaltet, um die Halskette zu ergänzen, und kann an ausgewählten Abayas, Kleidern und Maßstücken von Bint Saeed befestigt werden, sodass Schmuck und Kleidung dieselben Natursteindetails teilen. Mit Signature-Ohrringen entsteht ein vollständiger Ausdruck der Naturstein-Kollektion des Hauses.`,
    },
    nl: {
      uniquenessKey: 'tiger',
      fullName: `Al Ain Oasis ketting — Tijgeroog`,
      beadFeature: `Handgeregen natuurlijke tijgeroogkralen (ongeveer 5 mm)`,
      coordinateFeature: `Ontworpen om te coördineren met signature oorbellen en de Signature Strand — Tijgeroog`,
      introParagraphs: [
        `Onderscheidend in kleur en karakter, wordt de Al Ain Oasis ketting — Tijgeroog met de hand geregen van natuurlijke tijgeroog, geaccentueerd met verguld hematiet kralen en afgewerkt met de signature Al Ain Rosette van het Huis, handgesneden uit natuurlijke carneool. Ontworpen met veelzijdigheid in gedachten, kan hij als enkele lange lengte of dubbel om de hals worden gedragen voor een korter gelaagd silhouet.`,
        `Natuurlijke edelstenen worden al lang gewaardeerd om hun individualiteit. De kleurdiepte, kenmerkende adering en organische karakter brengen een rijkdom die alleen de natuur kan scheppen, waardoor elke ketting even uniek is als de vrouw die hem draagt.`,
        `Handgemaakt in Abu Dhabi weerspiegelt de ketting Bint Saeeds waardering voor natuurlijke materialen en duurzaam vakmanschap. Maak de look af met signature oorbellen en de Signature Strand — Tijgeroog, ontworpen om geselecteerde Bint Saeed abaya’s, jurken en maatwerk te complementeren.`,
      ],
      madeFromAnswer: [
        `De ketting wordt handgemaakt met natuurlijke tijgeroogkralen, verguld hematiet accentkralen en de signature Al Ain Rosette van het Huis, handgesneden uit natuurlijke carneool. Hij wordt afgewerkt met een goudkleurige sluiting en een verstelbare verlengketting.`,
        `Tijgeroog is een natuurlijk voorkomende edelsteen, bewonderd om zijn rijke goudbruine tonen en kenmerkende zijdeachtige optische effect, bekend als chatoyancy, dat een bewegende lichtband over het oppervlak creëert. Elke edelsteen is uniek, zodat elke Bint Saeed-ketting zijn eigen karakter heeft.`,
      ],
      strandAnswer: `Ja. De Signature Strand — Tijgeroog is ontworpen om de ketting te complementeren en kan worden bevestigd aan geselecteerde Bint Saeed abaya’s, jurken en maatwerkstukken, zodat sieraden en kleding dezelfde natuursteendetails delen. Gepaard met signature oorbellen vormt het een volledige uitdrukking van de natuursteencollectie van het Huis.`,
    },
    pt: {
      uniquenessKey: 'tiger',
      fullName: `Colar Al Ain Oasis — Olho de tigre`,
      beadFeature: `Contas de olho de tigre natural enfiadas à mão (aproximadamente 5 mm)`,
      coordinateFeature: `Concebido para coordenar com brincos signature e o Signature Strand — Olho de tigre`,
      introParagraphs: [
        `Distintivo em cor e carácter, o Colar Al Ain Oasis — Olho de tigre é enfiado à mão com gemas de olho de tigre naturais, acentuado com contas de hematite banho de ouro e completado com a Al Ain Rosette signature da Maison, esculpida à mão em cornalina natural. Concebido com versatilidade, pode ser usado como comprimento simples ou dobrado à volta do pescoço para uma silhueta mais curta e em camadas.`,
        `As gemas naturais são há muito apreciadas pela sua individualidade. A profundidade de cor, os veios distintos e o carácter orgânico trazem uma riqueza que só a natureza pode criar, tornando cada colar tão único como a mulher que o usa.`,
        `Feito à mão em Abu Dhabi, o colar reflecte a apreciação da Bint Saeed pelos materiais naturais e o ofício duradouro. Complete o look com brincos signature e o Signature Strand — Olho de tigre, concebido para complementar abayas, vestidos e alfaiataria Bint Saeed selecionadas.`,
      ],
      madeFromAnswer: [
        `O colar é feito à mão com contas de olho de tigre natural, contas de hematite banho de ouro e a Al Ain Rosette signature da Maison, esculpida à mão em cornalina natural. É terminado com um fecho dourado e uma corrente de extensão ajustável.`,
        `O olho de tigre é uma gema natural admirada pelos seus tons dourado-castanhos e lustro sedoso distintivo, conhecido como chatoyancy, que cria uma banda de luz móvel na superfície. Cada gema é única, assegurando que cada colar Bint Saeed possui o seu próprio carácter.`,
      ],
      strandAnswer: `Sim. O Signature Strand — Olho de tigre foi concebido para complementar o colar e pode ser fixado a abayas, vestidos e peças de alfaiataria Bint Saeed selecionadas, permitindo que joias e vestuário partilhem os mesmos detalhes em pedra natural. Emparelhado com brincos signature, cria uma expressão completa da coleção de pedra natural da Maison.`,
    },
    id: {
      uniquenessKey: 'tiger',
      fullName: `Kalung Al Ain Oasis — Mata harimau`,
      beadFeature: `Manik mata harimau alami dirangkai tangan (sekitar 5 mm)`,
      coordinateFeature: `Dirancang untuk berkoordinasi dengan anting signature dan Signature Strand — Mata harimau`,
      introParagraphs: [
        `Khas dalam warna dan karakter, Kalung Al Ain Oasis — Mata harimau dirangkai tangan dari mata harimau alami, diberi aksen manik hematit berlapis emas, dan dilengkapi Al Ain Rosette signature House, diukir tangan dari karnelian alami. Dirancang dengan keserbagunaan, dapat dikenakan sebagai panjang tunggal atau digandakan di leher untuk siluet berlapis yang lebih pendek.`,
        `Batu permata alami telah lama dihargai karena individualitasnya. Kedalaman warna, urat khas, dan karakter organik membawa kekayaan yang hanya alam yang mampu menciptakan, menjadikan setiap kalung seunik wanita yang memakainya.`,
        `Dibuat tangan di Abu Dhabi, kalung ini mencerminkan apresiasi Bint Saeed terhadap bahan alami dan ketukangan yang abadi. Lengkapi look dengan anting signature dan Signature Strand — Mata harimau, dirancang untuk melengkapi abaya, gaun, dan jahitan Bint Saeed terpilih.`,
      ],
      madeFromAnswer: [
        `Kalung dibuat tangan menggunakan manik mata harimau alami, manik aksen hematit berlapis emas, dan Al Ain Rosette signature House yang diukir tangan dari karnelian alami. Diselesaikan dengan kait bernada emas dan rantai ekstensi yang dapat disesuaikan.`,
        `Mata harimau adalah batu permata alami yang dikagumi karena nada cokelat keemasan yang kaya dan kilau sutra khas, dikenal sebagai chatoyancy, yang menciptakan pita cahaya bergerak di permukaan. Setiap batu unik, memastikan setiap kalung Bint Saeed memiliki karakternya sendiri.`,
      ],
      strandAnswer: `Ya. Signature Strand — Mata harimau dirancang untuk melengkapi kalung dan dapat dipasang pada abaya, gaun, dan potongan jahitan Bint Saeed terpilih, sehingga perhiasan dan pakaian berbagi detail batu alam yang sama. Dipasangkan dengan anting signature, ia menciptakan ekspresi lengkap koleksi batu alam House.`,
    },
    ms: {
      uniquenessKey: 'tiger',
      fullName: `Rantai leher Al Ain Oasis — Mata harimau`,
      beadFeature: `Manik mata harimau semula jadi dirangkai tangan (kira-kira 5 mm)`,
      coordinateFeature: `Direka untuk berkoordinasi dengan anting signature dan Signature Strand — Mata harimau`,
      introParagraphs: [
        `Khas dari segi warna dan karakter, Rantai leher Al Ain Oasis — Mata harimau dirangkai tangan daripada mata harimau semula jadi, diberi aksen manik hematit bersalut emas, dan dilengkapi Al Ain Rosette signature House, diukir tangan daripada karnelian semula jadi. Direka dengan serba boleh, ia boleh dipakai sebagai panjang tunggal atau digandakan di leher untuk siluet berlapis yang lebih pendek.`,
        `Batu permata semula jadi telah lama dihargai kerana keindividuannya. Kedalaman warna, urat tersendiri dan karakter organik membawa kekayaan yang hanya alam mampu mencipta, menjadikan setiap rantai leher seunik wanita yang memakainya.`,
        `Dibuat tangan di Abu Dhabi, rantai leher ini mencerminkan penghargaan Bint Saeed terhadap bahan semula jadi dan ketukangan yang abadi. Lengkapkan look dengan anting signature dan Signature Strand — Mata harimau, direka untuk melengkapi abaya, gaun dan jahitan Bint Saeed terpilih.`,
      ],
      madeFromAnswer: [
        `Rantai leher dibuat tangan menggunakan manik mata harimau semula jadi, manik aksen hematit bersalut emas, dan Al Ain Rosette signature House yang diukir tangan daripada karnelian semula jadi. Diselesaikan dengan kait bernada emas dan rantai sambungan boleh laras.`,
        `Mata harimau ialah batu permata semula jadi yang dikagumi kerana nada perang keemasan yang kaya dan kilau sutera tersendiri, dikenali sebagai chatoyancy, yang mencipta jalur cahaya bergerak di permukaan. Setiap batu unik, memastikan setiap rantai leher Bint Saeed memiliki karakternya sendiri.`,
      ],
      strandAnswer: `Ya. Signature Strand — Mata harimau direka untuk melengkapi rantai leher dan boleh dipasang pada abaya, gaun dan potongan jahitan Bint Saeed terpilih, membolehkan barang kemas dan pakaian berkongsi perincian batu semula jadi yang sama. Dipasangkan dengan anting signature, ia mencipta ekspresi lengkap koleksi batu semula jadi House.`,
    },
  },
  'al-ain-oasis-necklace-onyx': {
    it: {
      uniquenessKey: 'onyx',
      fullName: `Collana Al Ain Oasis — Onice`,
      beadFeature: `Perle di onice nero naturale infilate a mano (circa 5 mm)`,
      coordinateFeature: `Concepita per coordinarsi con orecchini signature e il Signature Strand — Onice`,
      introParagraphs: [
        `Raffinata nella sua semplicità, la Collana Al Ain Oasis — Onice è infilata a mano con gemme di onice nero naturali, accentata da perle di ematite placcata oro e completata dalla Al Ain Rosette signature della Maison, intagliata a mano in corniola naturale. Concepita per la versatilità, può essere indossata come lunghezza singola o raddoppiata intorno al collo per una silhouette più corta e stratificata.`,
        `Le gemme naturali sono da tempo apprezzate per la loro individualità. La profondità di colore, le venature distintive e il carattere organico offrono una ricchezza che solo la natura può creare, rendendo ogni collana unica come la donna che la indossa.`,
        `Artigianale ad Abu Dhabi, la collana riflette l’apprezzamento di Bint Saeed per i materiali naturali e l’artigianato duraturo. Completate l’insieme abbinando la collana a orecchini signature e al Signature Strand — Onice, concepito per completare abaya, abiti e pezzi di sartoria Bint Saeed selezionati.`,
      ],
      madeFromAnswer: [
        `La collana è artigianale con perle di onice nero naturale, perle di ematite placcata oro e la Al Ain Rosette signature della Maison, intagliata a mano in corniola naturale. È terminata da una chiusura dorata e una catenina di estensione regolabile.`,
        `L’onice è una varietà naturale di calcedonio, ammirata per il suo colore nero ricco e la finitura liscia e lucida. Ogni gemma è unica, assicurando che ogni collana Bint Saeed possieda il proprio carattere.`,
      ],
      strandAnswer: `Sì. Il Signature Strand — Onice è stato concepito per completare la collana e può essere fissato ad abaya, abiti e pezzi di sartoria Bint Saeed selezionati, permettendo a gioielli e capi di condividere gli stessi dettagli in pietra naturale. Abbinato a orecchini signature, compone un’espressione completa della collezione pietre naturali della Maison.`,
    },
    es: {
      uniquenessKey: 'onyx',
      fullName: `Collar Al Ain Oasis — Ónice`,
      beadFeature: `Cuentas de ónice negro natural ensartadas a mano (aproximadamente 5 mm)`,
      coordinateFeature: `Diseñado para coordinar con pendientes signature y el Signature Strand — Ónice`,
      introParagraphs: [
        `Refinado en su simplicidad, el Collar Al Ain Oasis — Ónice se ensarta a mano con gemas de ónice negro naturales, se acentúa con cuentas de hematita baño de oro y se completa con la Al Ain Rosette signature de la Maison, tallada a mano en cornalina natural. Diseñado con versatilidad, puede llevarse como longitud sencilla o doblado alrededor del cuello para una silueta más corta y en capas.`,
        `Las gemas naturales se han apreciado desde hace tiempo por su individualidad. La profundidad de color, las vetas distintivas y el carácter orgánico aportan una riqueza que solo la naturaleza puede crear, haciendo cada collar tan único como la mujer que lo lleva.`,
        `Hecho a mano en Abu Dabi, el collar refleja la apreciación de Bint Saeed por los materiales naturales y la artesanía perdurable. Completa el look combinando el collar con pendientes signature y el Signature Strand — Ónice, diseñado para complementar abayas, vestidos y sastrería Bint Saeed seleccionadas.`,
      ],
      madeFromAnswer: [
        `El collar se elabora a mano con cuentas de ónice negro natural, cuentas de hematita baño de oro y la Al Ain Rosette signature de la Maison, tallada a mano en cornalina natural. Se remata con un cierre dorado y una cadena de extensión ajustable.`,
        `El ónice es una variedad natural de calcedonia, admirada por su rico color negro y su acabado liso y pulido. Cada gema es única, asegurando que cada collar Bint Saeed posea su propio carácter.`,
      ],
      strandAnswer: `Sí. El Signature Strand — Ónice se ha diseñado para complementar el collar y puede fijarse a abayas, vestidos y piezas de sastrería Bint Saeed seleccionadas, permitiendo que joyería y prendas compartan los mismos detalles de piedra natural. Emparejado con pendientes signature, crea una expresión completa de la colección de piedra natural de la Maison.`,
    },
    ru: {
      uniquenessKey: 'onyx',
      fullName: `Ожерелье Al Ain Oasis — Оникс`,
      beadFeature: `Натуральные бусины чёрного оникса, нанизанные вручную (около 5 мм)`,
      coordinateFeature: `Создано для сочетания с signature-серьгами и Signature Strand — Оникс`,
      introParagraphs: [
        `Изысканное в своей простоте, Ожерелье Al Ain Oasis — Оникс нанизано вручную из натурального чёрный оникс, акцентировано бусинами позолоченного гематита и завершено фирменной Al Ain Rosette Дома, вырезанной вручную из натурального сердолика. Созданное с мыслью о многогранности, оно может носиться одной длинной нитью или удвоенным вокруг шеи для более короткого многослойного силуэта.`,
        `Натуральные самоцветы давно ценятся за индивидуальность. Глубина цвета, характерные прожилки и органический характер дают богатство, которое способна создать только природа, делая каждое ожерелье таким же уникальным, как женщина, которая его носит.`,
        `Созданное вручную в Абу-Даби, ожерелье отражает уважение Bint Saeed к натуральным материалам и долговечному мастерству. Завершите образ, сочетая ожерелье с signature-серьгами и Signature Strand — Оникс, созданным дополнять избранные абаи, платья и портновские изделия Bint Saeed.`,
      ],
      madeFromAnswer: [
        `Ожерелье создаётся вручную из натуральных бусин чёрного оникса, бусин позолоченного гематита и фирменной Al Ain Rosette Дома, вырезанной вручную из натурального сердолика. Завершается золотистым замком и регулируемой удлиняющей цепочкой.`,
        `Оникс — природная разновидность халцедона, ценимая за насыщенный чёрный цвет и гладкую полированную поверхность. Каждый самоцвет уникален, поэтому каждое ожерелье Bint Saeed обладает собственным характером.`,
      ],
      strandAnswer: `Да. Signature Strand — Оникс создан, чтобы дополнять ожерелье, и может крепиться к избранным абаям, платьям и портновским изделиям Bint Saeed, позволяя украшениям и одежде разделять одни и те же детали из натурального камня. В паре с signature-серьгами это полное выражение коллекции натурального камня Дома.`,
    },
    zh: {
      uniquenessKey: 'onyx',
      fullName: `Al Ain Oasis 玛瑙项链`,
      beadFeature: `手工串制天然黑玛瑙珠（约 5 毫米）`,
      coordinateFeature: `旨在与标志性耳环及 Signature Strand — 玛瑙 协调佩戴`,
      introParagraphs: [
        `以简洁见精炼，Al Ain Oasis 玛瑙项链以天然黑玛瑙手工串制，点缀镀金赤铁矿珠，并以品牌标志性 Al Ain Rosette——天然红玉髓手工雕刻——完成。为多变佩戴而设计，可作单层长链，或双绕颈间呈较短层次廓形。`,
        `天然宝石因其个性而久为珍视。色彩深度、独特纹理与有机性格带来唯有自然能创造的丰盈，使每条项链都如佩戴者般独一无二。`,
        `于阿布扎比手工制作，项链体现 Bint Saeed 对天然材质与持久工艺的珍视。以标志性耳环与 Signature Strand — 玛瑙 完成造型；后者旨在与精选 Bint Saeed 长袍、裙装与定制单品相配。`,
      ],
      madeFromAnswer: [
        `项链以天然黑玛瑙珠、镀金赤铁矿珠，以及品牌标志性、天然红玉髓手工雕刻的 Al Ain Rosette 手工制作，并以金色扣环与可调节延长链收束。`,
        `玛瑙是玉髓的天然品种，以其浓郁黑色与光滑抛光表面著称。每颗宝石皆独特，确保每条 Bint Saeed 项链都有自身性格。`,
      ],
      strandAnswer: `是。Signature Strand — 玛瑙旨在与项链相配，并可固定于精选 Bint Saeed 长袍、裙装与定制单品，使珠宝与服饰共享相同的天然石细节。搭配标志性耳环，构成品牌天然石系列的完整表达。`,
    },
    de: {
      uniquenessKey: 'onyx',
      fullName: `Al Ain Oasis Halskette — Onyx`,
      beadFeature: `Handaufgezogene natürliche schwarze Onyxperlen (etwa 5 mm)`,
      coordinateFeature: `Gestaltet zur Abstimmung mit Signature-Ohrringen und dem Signature Strand — Onyx`,
      introParagraphs: [
        `Raffiniert in ihrer Einfachheit, wird die Al Ain Oasis Halskette — Onyx aus natürlichem schwarzer Onyx handaufgezogen, mit vergoldeten Hämatitperlen akzentuiert und mit der Signature-Al-Ain-Rosette des Hauses abgeschlossen, handgeschnitzt aus natürlichem Karneol. Für Vielseitigkeit gedacht, kann sie als einzelne lange Länge oder doppelt um den Hals getragen werden, für eine kürzere, geschichtete Silhouette.`,
        `Natursteine werden seit Langem für ihre Individualität geschätzt. Die Farbtiefe, die charakteristische Äderung und der organische Charakter bringen einen Reichtum, den nur die Natur schaffen kann — und machen jede Halskette so einzigartig wie die Frau, die sie trägt.`,
        `Handgefertigt in Abu Dhabi spiegelt die Halskette Bint Saeeds Wertschätzung für natürliche Materialien und beständiges Handwerk wider. Vervollständigen Sie den Look mit Signature-Ohrringen und dem Signature Strand — Onyx, gestaltet zur Ergänzung ausgewählter Abayas, Kleider und Maßstücke von Bint Saeed.`,
      ],
      madeFromAnswer: [
        `Die Halskette wird handgefertigt aus natürlichen schwarzer Onyx-Perlen, vergoldeten Hämatit-Akzentperlen und der Signature-Al-Ain-Rosette des Hauses, handgeschnitzt aus natürlichem Karneol. Sie wird mit einem goldfarbenen Verschluss und einer verstellbaren Verlängerungskette abgeschlossen.`,
        `Onyx ist eine natürlich vorkommende Chalcedon-Varietät, bewundert für ihre tiefe schwarze Farbe und die glatte polierte Oberfläche. Jeder Edelstein ist einzigartig — jede Bint-Saeed-Halskette besitzt ihren eigenen Charakter.`,
      ],
      strandAnswer: `Ja. Der Signature Strand — Onyx wurde gestaltet, um die Halskette zu ergänzen, und kann an ausgewählten Abayas, Kleidern und Maßstücken von Bint Saeed befestigt werden, sodass Schmuck und Kleidung dieselben Natursteindetails teilen. Mit Signature-Ohrringen entsteht ein vollständiger Ausdruck der Naturstein-Kollektion des Hauses.`,
    },
    nl: {
      uniquenessKey: 'onyx',
      fullName: `Al Ain Oasis ketting — Onyx`,
      beadFeature: `Handgeregen natuurlijke zwarte onyxkralen (ongeveer 5 mm)`,
      coordinateFeature: `Ontworpen om te coördineren met signature oorbellen en de Signature Strand — Onyx`,
      introParagraphs: [
        `Raffiné in zijn eenvoud, wordt de Al Ain Oasis ketting — Onyx met de hand geregen van natuurlijke zwarte onyx, geaccentueerd met verguld hematiet kralen en afgewerkt met de signature Al Ain Rosette van het Huis, handgesneden uit natuurlijke carneool. Ontworpen met veelzijdigheid in gedachten, kan hij als enkele lange lengte of dubbel om de hals worden gedragen voor een korter gelaagd silhouet.`,
        `Natuurlijke edelstenen worden al lang gewaardeerd om hun individualiteit. De kleurdiepte, kenmerkende adering en organische karakter brengen een rijkdom die alleen de natuur kan scheppen, waardoor elke ketting even uniek is als de vrouw die hem draagt.`,
        `Handgemaakt in Abu Dhabi weerspiegelt de ketting Bint Saeeds waardering voor natuurlijke materialen en duurzaam vakmanschap. Maak de look af met signature oorbellen en de Signature Strand — Onyx, ontworpen om geselecteerde Bint Saeed abaya’s, jurken en maatwerk te complementeren.`,
      ],
      madeFromAnswer: [
        `De ketting wordt handgemaakt met natuurlijke zwarte onyxkralen, verguld hematiet accentkralen en de signature Al Ain Rosette van het Huis, handgesneden uit natuurlijke carneool. Hij wordt afgewerkt met een goudkleurige sluiting en een verstelbare verlengketting.`,
        `Onyx is een natuurlijk voorkomende chalcedoonvariëteit, bewonderd om zijn rijke zwarte kleur en glad gepolijste afwerking. Elke edelsteen is uniek, zodat elke Bint Saeed-ketting zijn eigen karakter heeft.`,
      ],
      strandAnswer: `Ja. De Signature Strand — Onyx is ontworpen om de ketting te complementeren en kan worden bevestigd aan geselecteerde Bint Saeed abaya’s, jurken en maatwerkstukken, zodat sieraden en kleding dezelfde natuursteendetails delen. Gepaard met signature oorbellen vormt het een volledige uitdrukking van de natuursteencollectie van het Huis.`,
    },
    pt: {
      uniquenessKey: 'onyx',
      fullName: `Colar Al Ain Oasis — Ónix`,
      beadFeature: `Contas de ónix negro natural enfiadas à mão (aproximadamente 5 mm)`,
      coordinateFeature: `Concebido para coordenar com brincos signature e o Signature Strand — Ónix`,
      introParagraphs: [
        `Refinado na sua simplicidade, o Colar Al Ain Oasis — Ónix é enfiado à mão com gemas de ónix negro naturais, acentuado com contas de hematite banho de ouro e completado com a Al Ain Rosette signature da Maison, esculpida à mão em cornalina natural. Concebido com versatilidade, pode ser usado como comprimento simples ou dobrado à volta do pescoço para uma silhueta mais curta e em camadas.`,
        `As gemas naturais são há muito apreciadas pela sua individualidade. A profundidade de cor, os veios distintos e o carácter orgânico trazem uma riqueza que só a natureza pode criar, tornando cada colar tão único como a mulher que o usa.`,
        `Feito à mão em Abu Dhabi, o colar reflecte a apreciação da Bint Saeed pelos materiais naturais e o ofício duradouro. Complete o look com brincos signature e o Signature Strand — Ónix, concebido para complementar abayas, vestidos e alfaiataria Bint Saeed selecionadas.`,
      ],
      madeFromAnswer: [
        `O colar é feito à mão com contas de ónix negro natural, contas de hematite banho de ouro e a Al Ain Rosette signature da Maison, esculpida à mão em cornalina natural. É terminado com um fecho dourado e uma corrente de extensão ajustável.`,
        `O ónix é uma variedade natural de calcedónia, admirado pela sua rica cor negra e acabamento liso e polido. Cada gema é única, assegurando que cada colar Bint Saeed possui o seu próprio carácter.`,
      ],
      strandAnswer: `Sim. O Signature Strand — Ónix foi concebido para complementar o colar e pode ser fixado a abayas, vestidos e peças de alfaiataria Bint Saeed selecionadas, permitindo que joias e vestuário partilhem os mesmos detalhes em pedra natural. Emparelhado com brincos signature, cria uma expressão completa da coleção de pedra natural da Maison.`,
    },
    id: {
      uniquenessKey: 'onyx',
      fullName: `Kalung Al Ain Oasis — Oniks`,
      beadFeature: `Manik oniks hitam alami dirangkai tangan (sekitar 5 mm)`,
      coordinateFeature: `Dirancang untuk berkoordinasi dengan anting signature dan Signature Strand — Oniks`,
      introParagraphs: [
        `Halus dalam kesederhanaannya, Kalung Al Ain Oasis — Oniks dirangkai tangan dari oniks hitam alami, diberi aksen manik hematit berlapis emas, dan dilengkapi Al Ain Rosette signature House, diukir tangan dari karnelian alami. Dirancang dengan keserbagunaan, dapat dikenakan sebagai panjang tunggal atau digandakan di leher untuk siluet berlapis yang lebih pendek.`,
        `Batu permata alami telah lama dihargai karena individualitasnya. Kedalaman warna, urat khas, dan karakter organik membawa kekayaan yang hanya alam yang mampu menciptakan, menjadikan setiap kalung seunik wanita yang memakainya.`,
        `Dibuat tangan di Abu Dhabi, kalung ini mencerminkan apresiasi Bint Saeed terhadap bahan alami dan ketukangan yang abadi. Lengkapi look dengan anting signature dan Signature Strand — Oniks, dirancang untuk melengkapi abaya, gaun, dan jahitan Bint Saeed terpilih.`,
      ],
      madeFromAnswer: [
        `Kalung dibuat tangan menggunakan manik oniks hitam alami, manik aksen hematit berlapis emas, dan Al Ain Rosette signature House yang diukir tangan dari karnelian alami. Diselesaikan dengan kait bernada emas dan rantai ekstensi yang dapat disesuaikan.`,
        `Oniks adalah varietas kalsedon alami, dikagumi karena warna hitam kaya dan permukaan halus yang dipoles. Setiap batu unik, memastikan setiap kalung Bint Saeed memiliki karakternya sendiri.`,
      ],
      strandAnswer: `Ya. Signature Strand — Oniks dirancang untuk melengkapi kalung dan dapat dipasang pada abaya, gaun, dan potongan jahitan Bint Saeed terpilih, sehingga perhiasan dan pakaian berbagi detail batu alam yang sama. Dipasangkan dengan anting signature, ia menciptakan ekspresi lengkap koleksi batu alam House.`,
    },
    ms: {
      uniquenessKey: 'onyx',
      fullName: `Rantai leher Al Ain Oasis — Oniks`,
      beadFeature: `Manik oniks hitam semula jadi dirangkai tangan (kira-kira 5 mm)`,
      coordinateFeature: `Direka untuk berkoordinasi dengan anting signature dan Signature Strand — Oniks`,
      introParagraphs: [
        `Halus dalam kesederhanaannya, Rantai leher Al Ain Oasis — Oniks dirangkai tangan daripada oniks hitam semula jadi, diberi aksen manik hematit bersalut emas, dan dilengkapi Al Ain Rosette signature House, diukir tangan daripada karnelian semula jadi. Direka dengan serba boleh, ia boleh dipakai sebagai panjang tunggal atau digandakan di leher untuk siluet berlapis yang lebih pendek.`,
        `Batu permata semula jadi telah lama dihargai kerana keindividuannya. Kedalaman warna, urat tersendiri dan karakter organik membawa kekayaan yang hanya alam mampu mencipta, menjadikan setiap rantai leher seunik wanita yang memakainya.`,
        `Dibuat tangan di Abu Dhabi, rantai leher ini mencerminkan penghargaan Bint Saeed terhadap bahan semula jadi dan ketukangan yang abadi. Lengkapkan look dengan anting signature dan Signature Strand — Oniks, direka untuk melengkapi abaya, gaun dan jahitan Bint Saeed terpilih.`,
      ],
      madeFromAnswer: [
        `Rantai leher dibuat tangan menggunakan manik oniks hitam semula jadi, manik aksen hematit bersalut emas, dan Al Ain Rosette signature House yang diukir tangan daripada karnelian semula jadi. Diselesaikan dengan kait bernada emas dan rantai sambungan boleh laras.`,
        `Oniks ialah varieti kalsedon semula jadi, dikagumi kerana warna hitam kaya dan kemasan licin digilap. Setiap batu unik, memastikan setiap rantai leher Bint Saeed memiliki karakternya sendiri.`,
      ],
      strandAnswer: `Ya. Signature Strand — Oniks direka untuk melengkapi rantai leher dan boleh dipasang pada abaya, gaun dan potongan jahitan Bint Saeed terpilih, membolehkan barang kemas dan pakaian berkongsi perincian batu semula jadi yang sama. Dipasangkan dengan anting signature, ia mencipta ekspresi lengkap koleksi batu semula jadi House.`,
    },
  },
  'al-ain-oasis-necklace-rose-quartz': {
    it: {
      uniquenessKey: 'default',
      fullName: `Collana Al Ain Oasis — Quarzo rosa`,
      beadFeature: `Perle di quarzo rosa naturale infilate a mano (circa 5 mm)`,
      coordinateFeature: `Concepita per coordinarsi con gli Orecchini Al Quaa — Quarzo rosa e il Signature Strand — Quarzo rosa`,
      introParagraphs: [
        `Elegante nella sua semplicità, la Collana Al Ain Oasis — Quarzo rosa è infilata a mano con gemme di quarzo rosa naturali, accentata da perle di ematite placcata oro e completata dalla Al Ain Rosette signature della Maison, intagliata a mano in corniola naturale. Concepita per la versatilità, può essere indossata come lunghezza singola o raddoppiata intorno al collo per una silhouette più corta e stratificata.`,
        `Le gemme naturali sono da tempo apprezzate per la loro individualità. La profondità di colore, le venature distintive e il carattere organico offrono una ricchezza che solo la natura può creare, rendendo ogni collana unica come la donna che la indossa.`,
        `Artigianale ad Abu Dhabi, la collana riflette l’apprezzamento di Bint Saeed per i materiali naturali e l’artigianato duraturo. Completate l’insieme abbinando la collana agli orecchini assortiti e al Signature Strand — Quarzo rosa, concepito per completare abaya, abiti e pezzi di sartoria Bint Saeed selezionati.`,
      ],
      madeFromAnswer: [
        `La collana è artigianale con perle di quarzo rosa naturale, perle di ematite placcata oro e la Al Ain Rosette signature della Maison, intagliata a mano in corniola naturale. È terminata da una chiusura dorata e una catenina di estensione regolabile.`,
        `Il quarzo rosa è una varietà naturale di quarzo, ammirata per i suoi toni rosa delicati e la traslucenza sottile. Ogni gemma è unica, rendendo ogni collana Bint Saeed unica nel suo genere.`,
      ],
      strandAnswer: `Sì. Il Signature Strand — Quarzo rosa è stato concepito per completare la collana e può essere fissato ad abaya, abiti e pezzi di sartoria Bint Saeed selezionati, permettendo a gioielli e capi di condividere gli stessi dettagli in pietra naturale. Abbinato agli orecchini assortiti, compone un’espressione completa della collezione pietre naturali della Maison.`,
    },
    es: {
      uniquenessKey: 'default',
      fullName: `Collar Al Ain Oasis — Cuarzo rosa`,
      beadFeature: `Cuentas de cuarzo rosa natural ensartadas a mano (aproximadamente 5 mm)`,
      coordinateFeature: `Diseñado para coordinar con los Pendientes Al Quaa — Cuarzo rosa y el Signature Strand — Cuarzo rosa`,
      introParagraphs: [
        `Elegante en su simplicidad, el Collar Al Ain Oasis — Cuarzo rosa se ensarta a mano con gemas de cuarzo rosa naturales, se acentúa con cuentas de hematita baño de oro y se completa con la Al Ain Rosette signature de la Maison, tallada a mano en cornalina natural. Diseñado con versatilidad, puede llevarse como longitud sencilla o doblado alrededor del cuello para una silueta más corta y en capas.`,
        `Las gemas naturales se han apreciado desde hace tiempo por su individualidad. La profundidad de color, las vetas distintivas y el carácter orgánico aportan una riqueza que solo la naturaleza puede crear, haciendo cada collar tan único como la mujer que lo lleva.`,
        `Hecho a mano en Abu Dabi, el collar refleja la apreciación de Bint Saeed por los materiales naturales y la artesanía perdurable. Completa el look combinando el collar con los pendientes a juego y el Signature Strand — Cuarzo rosa, diseñado para complementar abayas, vestidos y sastrería Bint Saeed seleccionadas.`,
      ],
      madeFromAnswer: [
        `El collar se elabora a mano con cuentas de cuarzo rosa natural, cuentas de hematita baño de oro y la Al Ain Rosette signature de la Maison, tallada a mano en cornalina natural. Se remata con un cierre dorado y una cadena de extensión ajustable.`,
        `El cuarzo rosa es una variedad natural de cuarzo, admirado por sus tonos rosa delicados y su sutil translucidez. Cada gema es única, haciendo de cada collar Bint Saeed una pieza única.`,
      ],
      strandAnswer: `Sí. El Signature Strand — Cuarzo rosa se ha diseñado para complementar el collar y puede fijarse a abayas, vestidos y piezas de sastrería Bint Saeed seleccionadas, permitiendo que joyería y prendas compartan los mismos detalles de piedra natural. Emparejado con los pendientes a juego, crea una expresión completa de la colección de piedra natural de la Maison.`,
    },
    ru: {
      uniquenessKey: 'default',
      fullName: `Ожерелье Al Ain Oasis — Розовый кварц`,
      beadFeature: `Натуральные бусины розового кварца, нанизанные вручную (около 5 мм)`,
      coordinateFeature: `Создано для сочетания с Серьгами Al Quaa — Розовый кварц и Signature Strand — Розовый кварц`,
      introParagraphs: [
        `Изысканное в своей простоте, Ожерелье Al Ain Oasis — Розовый кварц нанизано вручную из натурального розовый кварц, акцентировано бусинами позолоченного гематита и завершено фирменной Al Ain Rosette Дома, вырезанной вручную из натурального сердолика. Созданное с мыслью о многогранности, оно может носиться одной длинной нитью или удвоенным вокруг шеи для более короткого многослойного силуэта.`,
        `Натуральные самоцветы давно ценятся за индивидуальность. Глубина цвета, характерные прожилки и органический характер дают богатство, которое способна создать только природа, делая каждое ожерелье таким же уникальным, как женщина, которая его носит.`,
        `Созданное вручную в Абу-Даби, ожерелье отражает уважение Bint Saeed к натуральным материалам и долговечному мастерству. Завершите образ, сочетая ожерелье с подходящими серьгами и Signature Strand — Розовый кварц, созданным дополнять избранные абаи, платья и портновские изделия Bint Saeed.`,
      ],
      madeFromAnswer: [
        `Ожерелье создаётся вручную из натуральных бусин розового кварца, бусин позолоченного гематита и фирменной Al Ain Rosette Дома, вырезанной вручную из натурального сердолика. Завершается золотистым замком и регулируемой удлиняющей цепочкой.`,
        `Розовый кварц — природная разновидность кварца, ценимая за нежные розовые тона и тонкую полупрозрачность. Каждый самоцвет уникален, делая каждое ожерелье Bint Saeed единственным в своём роде.`,
      ],
      strandAnswer: `Да. Signature Strand — Розовый кварц создан, чтобы дополнять ожерелье, и может крепиться к избранным абаям, платьям и портновским изделиям Bint Saeed, позволяя украшениям и одежде разделять одни и те же детали из натурального камня. В паре с подходящими серьгами это полное выражение коллекции натурального камня Дома.`,
    },
    zh: {
      uniquenessKey: 'default',
      fullName: `Al Ain Oasis 粉晶项链`,
      beadFeature: `天然粉晶珠（约 5 毫米）`,
      coordinateFeature: `旨在与 Al Quaa 粉晶耳环及 Signature Strand — 粉晶 协调佩戴`,
      introParagraphs: [
        `以简洁见优雅，Al Ain Oasis 粉晶项链以天然粉晶手工串制，点缀镀金赤铁矿珠，并以品牌标志性 Al Ain Rosette——天然红玉髓手工雕刻——完成。为多变佩戴而设计，可作单层长链，或双绕颈间呈较短层次廓形。`,
        `天然宝石因其个性而久为珍视。色彩深度、独特纹理与有机性格带来唯有自然能创造的丰盈，使每条项链都如佩戴者般独一无二。`,
        `于阿布扎比手工制作，项链体现 Bint Saeed 对天然材质与持久工艺的珍视。以配套耳环与 Signature Strand — 粉晶 完成造型；后者旨在与精选 Bint Saeed 长袍、裙装与定制单品相配。`,
      ],
      madeFromAnswer: [
        `项链以天然粉晶珠、镀金赤铁矿珠，以及品牌标志性、天然红玉髓手工雕刻的 Al Ain Rosette 手工制作，并以金色扣环与可调节延长链收束。`,
        `粉晶是石英的天然品种，以其柔粉色调与细微半透明著称。每颗宝石皆独特，使每条 Bint Saeed 项链独一无二。`,
      ],
      strandAnswer: `是。Signature Strand — 粉晶旨在与项链相配，并可固定于精选 Bint Saeed 长袍、裙装与定制单品，使珠宝与服饰共享相同的天然石细节。搭配配套耳环，构成品牌天然石系列的完整表达。`,
    },
    de: {
      uniquenessKey: 'default',
      fullName: `Al Ain Oasis Halskette — Rosenquarz`,
      beadFeature: `Handaufgezogene natürliche Rosenquarzperlen (etwa 5 mm)`,
      coordinateFeature: `Gestaltet zur Abstimmung mit den Al Quaa Ohrringen — Rosenquarz und dem Signature Strand — Rosenquarz`,
      introParagraphs: [
        `Elegant in ihrer Einfachheit, wird die Al Ain Oasis Halskette — Rosenquarz aus natürlichem Rosenquarz handaufgezogen, mit vergoldeten Hämatitperlen akzentuiert und mit der Signature-Al-Ain-Rosette des Hauses abgeschlossen, handgeschnitzt aus natürlichem Karneol. Für Vielseitigkeit gedacht, kann sie als einzelne lange Länge oder doppelt um den Hals getragen werden, für eine kürzere, geschichtete Silhouette.`,
        `Natursteine werden seit Langem für ihre Individualität geschätzt. Die Farbtiefe, die charakteristische Äderung und der organische Charakter bringen einen Reichtum, den nur die Natur schaffen kann — und machen jede Halskette so einzigartig wie die Frau, die sie trägt.`,
        `Handgefertigt in Abu Dhabi spiegelt die Halskette Bint Saeeds Wertschätzung für natürliche Materialien und beständiges Handwerk wider. Vervollständigen Sie den Look mit den passenden Ohrringen und dem Signature Strand — Rosenquarz, gestaltet zur Ergänzung ausgewählter Abayas, Kleider und Maßstücke von Bint Saeed.`,
      ],
      madeFromAnswer: [
        `Die Halskette wird handgefertigt aus natürlichen Rosenquarz-Perlen, vergoldeten Hämatit-Akzentperlen und der Signature-Al-Ain-Rosette des Hauses, handgeschnitzt aus natürlichem Karneol. Sie wird mit einem goldfarbenen Verschluss und einer verstellbaren Verlängerungskette abgeschlossen.`,
        `Rosenquarz ist eine natürlich vorkommende Quarzvarietät, bewundert für ihre zarten Rosatöne und subtile Transluzenz. Jeder Edelstein ist einzigartig — jede Bint-Saeed-Halskette ist ein Unikat.`,
      ],
      strandAnswer: `Ja. Der Signature Strand — Rosenquarz wurde gestaltet, um die Halskette zu ergänzen, und kann an ausgewählten Abayas, Kleidern und Maßstücken von Bint Saeed befestigt werden, sodass Schmuck und Kleidung dieselben Natursteindetails teilen. Mit den passenden Ohrringen entsteht ein vollständiger Ausdruck der Naturstein-Kollektion des Hauses.`,
    },
    nl: {
      uniquenessKey: 'default',
      fullName: `Al Ain Oasis ketting — Rozenkwarts`,
      beadFeature: `Handgeregen natuurlijke rozenkwartskralen (ongeveer 5 mm)`,
      coordinateFeature: `Ontworpen om te coördineren met de Al Quaa oorbellen — Rozenkwarts en de Signature Strand — Rozenkwarts`,
      introParagraphs: [
        `Elegant in zijn eenvoud, wordt de Al Ain Oasis ketting — Rozenkwarts met de hand geregen van natuurlijke rozenkwarts, geaccentueerd met verguld hematiet kralen en afgewerkt met de signature Al Ain Rosette van het Huis, handgesneden uit natuurlijke carneool. Ontworpen met veelzijdigheid in gedachten, kan hij als enkele lange lengte of dubbel om de hals worden gedragen voor een korter gelaagd silhouet.`,
        `Natuurlijke edelstenen worden al lang gewaardeerd om hun individualiteit. De kleurdiepte, kenmerkende adering en organische karakter brengen een rijkdom die alleen de natuur kan scheppen, waardoor elke ketting even uniek is als de vrouw die hem draagt.`,
        `Handgemaakt in Abu Dhabi weerspiegelt de ketting Bint Saeeds waardering voor natuurlijke materialen en duurzaam vakmanschap. Maak de look af met de bijpassende oorbellen en de Signature Strand — Rozenkwarts, ontworpen om geselecteerde Bint Saeed abaya’s, jurken en maatwerk te complementeren.`,
      ],
      madeFromAnswer: [
        `De ketting wordt handgemaakt met natuurlijke rozenkwartskralen, verguld hematiet accentkralen en de signature Al Ain Rosette van het Huis, handgesneden uit natuurlijke carneool. Hij wordt afgewerkt met een goudkleurige sluiting en een verstelbare verlengketting.`,
        `Rozenkwarts is een natuurlijk voorkomende kwartsvariëteit, bewonderd om zachte rozetonen en subtiele doorschijnendheid. Elke edelsteen is uniek, waardoor elke Bint Saeed-ketting uniek is.`,
      ],
      strandAnswer: `Ja. De Signature Strand — Rozenkwarts is ontworpen om de ketting te complementeren en kan worden bevestigd aan geselecteerde Bint Saeed abaya’s, jurken en maatwerkstukken, zodat sieraden en kleding dezelfde natuursteendetails delen. Gepaard met de bijpassende oorbellen vormt het een volledige uitdrukking van de natuursteencollectie van het Huis.`,
    },
    pt: {
      uniquenessKey: 'default',
      fullName: `Colar Al Ain Oasis — Quartzo rosa`,
      beadFeature: `Contas de quartzo rosa natural enfiadas à mão (aproximadamente 5 mm)`,
      coordinateFeature: `Concebido para coordenar com os Brincos Al Quaa — Quartzo rosa e o Signature Strand — Quartzo rosa`,
      introParagraphs: [
        `Elegante na sua simplicidade, o Colar Al Ain Oasis — Quartzo rosa é enfiado à mão com gemas de quartzo rosa naturais, acentuado com contas de hematite banho de ouro e completado com a Al Ain Rosette signature da Maison, esculpida à mão em cornalina natural. Concebido com versatilidade, pode ser usado como comprimento simples ou dobrado à volta do pescoço para uma silhueta mais curta e em camadas.`,
        `As gemas naturais são há muito apreciadas pela sua individualidade. A profundidade de cor, os veios distintos e o carácter orgânico trazem uma riqueza que só a natureza pode criar, tornando cada colar tão único como a mulher que o usa.`,
        `Feito à mão em Abu Dhabi, o colar reflecte a apreciação da Bint Saeed pelos materiais naturais e o ofício duradouro. Complete o look com os brincos a condizer e o Signature Strand — Quartzo rosa, concebido para complementar abayas, vestidos e alfaiataria Bint Saeed selecionadas.`,
      ],
      madeFromAnswer: [
        `O colar é feito à mão com contas de quartzo rosa natural, contas de hematite banho de ouro e a Al Ain Rosette signature da Maison, esculpida à mão em cornalina natural. É terminado com um fecho dourado e uma corrente de extensão ajustável.`,
        `O quartzo rosa é uma variedade natural de quartzo, admirado pelos seus tons rosa delicados e translucidez subtil. Cada gema é única, tornando cada colar Bint Saeed único no seu género.`,
      ],
      strandAnswer: `Sim. O Signature Strand — Quartzo rosa foi concebido para complementar o colar e pode ser fixado a abayas, vestidos e peças de alfaiataria Bint Saeed selecionadas, permitindo que joias e vestuário partilhem os mesmos detalhes em pedra natural. Emparelhado com os brincos a condizer, cria uma expressão completa da coleção de pedra natural da Maison.`,
    },
    id: {
      uniquenessKey: 'default',
      fullName: `Kalung Al Ain Oasis — Kuarsa mawar`,
      beadFeature: `Manik kuarsa mawar alami dirangkai tangan (sekitar 5 mm)`,
      coordinateFeature: `Dirancang untuk berkoordinasi dengan Anting Al Quaa — Kuarsa mawar dan Signature Strand — Kuarsa mawar`,
      introParagraphs: [
        `Anggun dalam kesederhanaannya, Kalung Al Ain Oasis — Kuarsa mawar dirangkai tangan dari kuarsa mawar alami, diberi aksen manik hematit berlapis emas, dan dilengkapi Al Ain Rosette signature House, diukir tangan dari karnelian alami. Dirancang dengan keserbagunaan, dapat dikenakan sebagai panjang tunggal atau digandakan di leher untuk siluet berlapis yang lebih pendek.`,
        `Batu permata alami telah lama dihargai karena individualitasnya. Kedalaman warna, urat khas, dan karakter organik membawa kekayaan yang hanya alam yang mampu menciptakan, menjadikan setiap kalung seunik wanita yang memakainya.`,
        `Dibuat tangan di Abu Dhabi, kalung ini mencerminkan apresiasi Bint Saeed terhadap bahan alami dan ketukangan yang abadi. Lengkapi look dengan anting yang serasi dan Signature Strand — Kuarsa mawar, dirancang untuk melengkapi abaya, gaun, dan jahitan Bint Saeed terpilih.`,
      ],
      madeFromAnswer: [
        `Kalung dibuat tangan menggunakan manik kuarsa mawar alami, manik aksen hematit berlapis emas, dan Al Ain Rosette signature House yang diukir tangan dari karnelian alami. Diselesaikan dengan kait bernada emas dan rantai ekstensi yang dapat disesuaikan.`,
        `Kuarsa mawar adalah varietas kuarsa alami, dikagumi karena nada merah muda lembut dan tembus cahaya yang halus. Setiap batu unik, menjadikan setiap kalung Bint Saeed satu-satunya.`,
      ],
      strandAnswer: `Ya. Signature Strand — Kuarsa mawar dirancang untuk melengkapi kalung dan dapat dipasang pada abaya, gaun, dan potongan jahitan Bint Saeed terpilih, sehingga perhiasan dan pakaian berbagi detail batu alam yang sama. Dipasangkan dengan anting yang serasi, ia menciptakan ekspresi lengkap koleksi batu alam House.`,
    },
    ms: {
      uniquenessKey: 'default',
      fullName: `Rantai leher Al Ain Oasis — Kuarsa mawar`,
      beadFeature: `Manik kuarsa mawar semula jadi dirangkai tangan (kira-kira 5 mm)`,
      coordinateFeature: `Direka untuk berkoordinasi dengan Anting Al Quaa — Kuarsa mawar dan Signature Strand — Kuarsa mawar`,
      introParagraphs: [
        `Anggun dalam kesederhanaannya, Rantai leher Al Ain Oasis — Kuarsa mawar dirangkai tangan daripada kuarsa mawar semula jadi, diberi aksen manik hematit bersalut emas, dan dilengkapi Al Ain Rosette signature House, diukir tangan daripada karnelian semula jadi. Direka dengan serba boleh, ia boleh dipakai sebagai panjang tunggal atau digandakan di leher untuk siluet berlapis yang lebih pendek.`,
        `Batu permata semula jadi telah lama dihargai kerana keindividuannya. Kedalaman warna, urat tersendiri dan karakter organik membawa kekayaan yang hanya alam mampu mencipta, menjadikan setiap rantai leher seunik wanita yang memakainya.`,
        `Dibuat tangan di Abu Dhabi, rantai leher ini mencerminkan penghargaan Bint Saeed terhadap bahan semula jadi dan ketukangan yang abadi. Lengkapkan look dengan anting yang sepadan dan Signature Strand — Kuarsa mawar, direka untuk melengkapi abaya, gaun dan jahitan Bint Saeed terpilih.`,
      ],
      madeFromAnswer: [
        `Rantai leher dibuat tangan menggunakan manik kuarsa mawar semula jadi, manik aksen hematit bersalut emas, dan Al Ain Rosette signature House yang diukir tangan daripada karnelian semula jadi. Diselesaikan dengan kait bernada emas dan rantai sambungan boleh laras.`,
        `Kuarsa mawar ialah varieti kuarsa semula jadi, dikagumi kerana nada merah jambu lembut dan ketelusan halus. Setiap batu unik, menjadikan setiap rantai leher Bint Saeed satu-satunya.`,
      ],
      strandAnswer: `Ya. Signature Strand — Kuarsa mawar direka untuk melengkapi rantai leher dan boleh dipasang pada abaya, gaun dan potongan jahitan Bint Saeed terpilih, membolehkan barang kemas dan pakaian berkongsi perincian batu semula jadi yang sama. Dipasangkan dengan anting yang sepadan, ia mencipta ekspresi lengkap koleksi batu semula jadi House.`,
    },
  },
  'al-ain-oasis-necklace-sunstone': {
    it: {
      uniquenessKey: 'sunstone',
      fullName: `Collana Al Ain Oasis — Pietra di sole`,
      beadFeature: `Perle di pietra di sole naturale infilate a mano (circa 5 mm)`,
      coordinateFeature: `Concepita per coordinarsi con gli Orecchini Al Ain Oasis — Giada arancio e il Signature Strand — Pietra di sole`,
      introParagraphs: [
        `Radiante per natura, la Collana Al Ain Oasis — Pietra di sole è infilata a mano con gemme di pietra di sole naturali, accentata da perle di ematite placcata oro e completata dalla Al Ain Rosette signature della Maison, intagliata a mano in corniola naturale. Concepita per la versatilità, può essere indossata come lunghezza singola o raddoppiata intorno al collo per una silhouette più corta e stratificata.`,
        `Le gemme naturali sono da tempo apprezzate per la loro individualità. La profondità di colore, le venature distintive e il carattere organico offrono una ricchezza che solo la natura può creare, rendendo ogni collana unica come la donna che la indossa.`,
        `Artigianale ad Abu Dhabi, la collana riflette l’apprezzamento di Bint Saeed per i materiali naturali e l’artigianato duraturo. Completate l’insieme abbinando la collana agli orecchini assortiti e al Signature Strand — Pietra di sole, concepito per completare abaya, abiti e pezzi di sartoria Bint Saeed selezionati.`,
      ],
      madeFromAnswer: [
        `La collana è artigianale con perle di pietra di sole naturale, perle di ematite placcata oro e la Al Ain Rosette signature della Maison, intagliata a mano in corniola naturale. È terminata da una chiusura dorata e una catenina di estensione regolabile.`,
        `La pietra di sole è un feldispato naturale, ammirata per i suoi toni pesca, dorati e rame, insieme al caratteristico scintillio naturale noto come aventurescence. Ogni gemma è unica, assicurando che ogni collana Bint Saeed possieda il proprio carattere.`,
      ],
      strandAnswer: `Sì. Il Signature Strand — Pietra di sole è stato concepito per completare la collana e può essere fissato ad abaya, abiti e pezzi di sartoria Bint Saeed selezionati, permettendo a gioielli e capi di condividere gli stessi dettagli in pietra naturale. Abbinato agli orecchini assortiti, compone un’espressione completa della collezione pietre naturali della Maison.`,
    },
    es: {
      uniquenessKey: 'sunstone',
      fullName: `Collar Al Ain Oasis — Piedra de sol`,
      beadFeature: `Cuentas de piedra de sol natural ensartadas a mano (aproximadamente 5 mm)`,
      coordinateFeature: `Diseñado para coordinar con los Pendientes Al Ain Oasis — Jade naranja y el Signature Strand — Piedra de sol`,
      introParagraphs: [
        `Radiante por naturaleza, el Collar Al Ain Oasis — Piedra de sol se ensarta a mano con gemas de piedra de sol naturales, se acentúa con cuentas de hematita baño de oro y se completa con la Al Ain Rosette signature de la Maison, tallada a mano en cornalina natural. Diseñado con versatilidad, puede llevarse como longitud sencilla o doblado alrededor del cuello para una silueta más corta y en capas.`,
        `Las gemas naturales se han apreciado desde hace tiempo por su individualidad. La profundidad de color, las vetas distintivas y el carácter orgánico aportan una riqueza que solo la naturaleza puede crear, haciendo cada collar tan único como la mujer que lo lleva.`,
        `Hecho a mano en Abu Dabi, el collar refleja la apreciación de Bint Saeed por los materiales naturales y la artesanía perdurable. Completa el look combinando el collar con los pendientes a juego y el Signature Strand — Piedra de sol, diseñado para complementar abayas, vestidos y sastrería Bint Saeed seleccionadas.`,
      ],
      madeFromAnswer: [
        `El collar se elabora a mano con cuentas de piedra de sol natural, cuentas de hematita baño de oro y la Al Ain Rosette signature de la Maison, tallada a mano en cornalina natural. Se remata con un cierre dorado y una cadena de extensión ajustable.`,
        `La piedra de sol es un feldespato natural, admirada por sus tonos melocotón, dorados y cobre, junto con su característico brillo natural conocido como aventurescence. Cada gema es única, asegurando que cada collar Bint Saeed posea su propio carácter.`,
      ],
      strandAnswer: `Sí. El Signature Strand — Piedra de sol se ha diseñado para complementar el collar y puede fijarse a abayas, vestidos y piezas de sastrería Bint Saeed seleccionadas, permitiendo que joyería y prendas compartan los mismos detalles de piedra natural. Emparejado con los pendientes a juego, crea una expresión completa de la colección de piedra natural de la Maison.`,
    },
    ru: {
      uniquenessKey: 'sunstone',
      fullName: `Ожерелье Al Ain Oasis — Солнечный камень`,
      beadFeature: `Натуральные бусины солнечного камня, нанизанные вручную (около 5 мм)`,
      coordinateFeature: `Создано для сочетания с Серьгами Al Ain Oasis — Оранжевый нефрит и Signature Strand — Солнечный камень`,
      introParagraphs: [
        `Сияющее от природы, Ожерелье Al Ain Oasis — Солнечный камень нанизано вручную из натурального солнечный камень, акцентировано бусинами позолоченного гематита и завершено фирменной Al Ain Rosette Дома, вырезанной вручную из натурального сердолика. Созданное с мыслью о многогранности, оно может носиться одной длинной нитью или удвоенным вокруг шеи для более короткого многослойного силуэта.`,
        `Натуральные самоцветы давно ценятся за индивидуальность. Глубина цвета, характерные прожилки и органический характер дают богатство, которое способна создать только природа, делая каждое ожерелье таким же уникальным, как женщина, которая его носит.`,
        `Созданное вручную в Абу-Даби, ожерелье отражает уважение Bint Saeed к натуральным материалам и долговечному мастерству. Завершите образ, сочетая ожерелье с подходящими серьгами и Signature Strand — Солнечный камень, созданным дополнять избранные абаи, платья и портновские изделия Bint Saeed.`,
      ],
      madeFromAnswer: [
        `Ожерелье создаётся вручную из натуральных бусин солнечного камня, бусин позолоченного гематита и фирменной Al Ain Rosette Дома, вырезанной вручную из натурального сердолика. Завершается золотистым замком и регулируемой удлиняющей цепочкой.`,
        `Солнечный камень — натуральный полевой шпат, ценимый за тёплые персиковые, золотистые и медные тона вместе с характерным природным мерцанием, известным как авантюресценция. Каждый самоцвет уникален, поэтому каждое ожерелье Bint Saeed обладает собственным характером.`,
      ],
      strandAnswer: `Да. Signature Strand — Солнечный камень создан, чтобы дополнять ожерелье, и может крепиться к избранным абаям, платьям и портновским изделиям Bint Saeed, позволяя украшениям и одежде разделять одни и те же детали из натурального камня. В паре с подходящими серьгами это полное выражение коллекции натурального камня Дома.`,
    },
    zh: {
      uniquenessKey: 'sunstone',
      fullName: `Al Ain Oasis 日光石项链`,
      beadFeature: `天然日光石珠（约 5 毫米）`,
      coordinateFeature: `旨在与 Al Ain Oasis 橙玉耳环及 Signature Strand — 日光石 协调佩戴`,
      introParagraphs: [
        `天生明亮，Al Ain Oasis 日光石项链以天然日光石手工串制，点缀镀金赤铁矿珠，并以品牌标志性 Al Ain Rosette——天然红玉髓手工雕刻——完成。为多变佩戴而设计，可作单层长链，或双绕颈间呈较短层次廓形。`,
        `天然宝石因其个性而久为珍视。色彩深度、独特纹理与有机性格带来唯有自然能创造的丰盈，使每条项链都如佩戴者般独一无二。`,
        `于阿布扎比手工制作，项链体现 Bint Saeed 对天然材质与持久工艺的珍视。以配套耳环与 Signature Strand — 日光石 完成造型；后者旨在与精选 Bint Saeed 长袍、裙装与定制单品相配。`,
      ],
      madeFromAnswer: [
        `项链以天然日光石珠、镀金赤铁矿珠，以及品牌标志性、天然红玉髓手工雕刻的 Al Ain Rosette 手工制作，并以金色扣环与可调节延长链收束。`,
        `日光石是天然长石宝石，以其温暖桃、金与铜色调，以及称为日光效应的天然闪光著称。每颗宝石皆独特，确保每条 Bint Saeed 项链都有自身性格。`,
      ],
      strandAnswer: `是。Signature Strand — 日光石旨在与项链相配，并可固定于精选 Bint Saeed 长袍、裙装与定制单品，使珠宝与服饰共享相同的天然石细节。搭配配套耳环，构成品牌天然石系列的完整表达。`,
    },
    de: {
      uniquenessKey: 'sunstone',
      fullName: `Al Ain Oasis Halskette — Sonnenstein`,
      beadFeature: `Handaufgezogene natürliche Sonnensteinperlen (etwa 5 mm)`,
      coordinateFeature: `Gestaltet zur Abstimmung mit den Al Ain Oasis Ohrringen — Orange Jade und dem Signature Strand — Sonnenstein`,
      introParagraphs: [
        `Von Natur aus strahlend, wird die Al Ain Oasis Halskette — Sonnenstein aus natürlichem Sonnenstein handaufgezogen, mit vergoldeten Hämatitperlen akzentuiert und mit der Signature-Al-Ain-Rosette des Hauses abgeschlossen, handgeschnitzt aus natürlichem Karneol. Für Vielseitigkeit gedacht, kann sie als einzelne lange Länge oder doppelt um den Hals getragen werden, für eine kürzere, geschichtete Silhouette.`,
        `Natursteine werden seit Langem für ihre Individualität geschätzt. Die Farbtiefe, die charakteristische Äderung und der organische Charakter bringen einen Reichtum, den nur die Natur schaffen kann — und machen jede Halskette so einzigartig wie die Frau, die sie trägt.`,
        `Handgefertigt in Abu Dhabi spiegelt die Halskette Bint Saeeds Wertschätzung für natürliche Materialien und beständiges Handwerk wider. Vervollständigen Sie den Look mit den passenden Ohrringen und dem Signature Strand — Sonnenstein, gestaltet zur Ergänzung ausgewählter Abayas, Kleider und Maßstücke von Bint Saeed.`,
      ],
      madeFromAnswer: [
        `Die Halskette wird handgefertigt aus natürlichen Sonnenstein-Perlen, vergoldeten Hämatit-Akzentperlen und der Signature-Al-Ain-Rosette des Hauses, handgeschnitzt aus natürlichem Karneol. Sie wird mit einem goldfarbenen Verschluss und einer verstellbaren Verlängerungskette abgeschlossen.`,
        `Sonnenstein ist ein natürlich vorkommender Feldspat, bewundert für warme Pfirsich-, Gold- und Kupfertöne sowie den charakteristischen natürlichen Schimmer, bekannt als Aventureszenz. Jeder Edelstein ist einzigartig — jede Bint-Saeed-Halskette besitzt ihren eigenen Charakter.`,
      ],
      strandAnswer: `Ja. Der Signature Strand — Sonnenstein wurde gestaltet, um die Halskette zu ergänzen, und kann an ausgewählten Abayas, Kleidern und Maßstücken von Bint Saeed befestigt werden, sodass Schmuck und Kleidung dieselben Natursteindetails teilen. Mit den passenden Ohrringen entsteht ein vollständiger Ausdruck der Naturstein-Kollektion des Hauses.`,
    },
    nl: {
      uniquenessKey: 'sunstone',
      fullName: `Al Ain Oasis ketting — Zonsteen`,
      beadFeature: `Handgeregen natuurlijke zonsteenkralen (ongeveer 5 mm)`,
      coordinateFeature: `Ontworpen om te coördineren met de Al Ain Oasis oorbellen — Oranje jade en de Signature Strand — Zonsteen`,
      introParagraphs: [
        `Stralend van nature, wordt de Al Ain Oasis ketting — Zonsteen met de hand geregen van natuurlijke zonsteen, geaccentueerd met verguld hematiet kralen en afgewerkt met de signature Al Ain Rosette van het Huis, handgesneden uit natuurlijke carneool. Ontworpen met veelzijdigheid in gedachten, kan hij als enkele lange lengte of dubbel om de hals worden gedragen voor een korter gelaagd silhouet.`,
        `Natuurlijke edelstenen worden al lang gewaardeerd om hun individualiteit. De kleurdiepte, kenmerkende adering en organische karakter brengen een rijkdom die alleen de natuur kan scheppen, waardoor elke ketting even uniek is als de vrouw die hem draagt.`,
        `Handgemaakt in Abu Dhabi weerspiegelt de ketting Bint Saeeds waardering voor natuurlijke materialen en duurzaam vakmanschap. Maak de look af met de bijpassende oorbellen en de Signature Strand — Zonsteen, ontworpen om geselecteerde Bint Saeed abaya’s, jurken en maatwerk te complementeren.`,
      ],
      madeFromAnswer: [
        `De ketting wordt handgemaakt met natuurlijke zonsteenkralen, verguld hematiet accentkralen en de signature Al Ain Rosette van het Huis, handgesneden uit natuurlijke carneool. Hij wordt afgewerkt met een goudkleurige sluiting en een verstelbare verlengketting.`,
        `Zonsteen is een natuurlijk voorkomende veldspaat, bewonderd om warme perzik-, gouden en koper tonen, samen met de kenmerkende natuurlijke schittering bekend als aventurescence. Elke edelsteen is uniek, zodat elke Bint Saeed-ketting zijn eigen karakter heeft.`,
      ],
      strandAnswer: `Ja. De Signature Strand — Zonsteen is ontworpen om de ketting te complementeren en kan worden bevestigd aan geselecteerde Bint Saeed abaya’s, jurken en maatwerkstukken, zodat sieraden en kleding dezelfde natuursteendetails delen. Gepaard met de bijpassende oorbellen vormt het een volledige uitdrukking van de natuursteencollectie van het Huis.`,
    },
    pt: {
      uniquenessKey: 'sunstone',
      fullName: `Colar Al Ain Oasis — Pedra do sol`,
      beadFeature: `Contas de pedra do sol natural enfiadas à mão (aproximadamente 5 mm)`,
      coordinateFeature: `Concebido para coordenar com os Brincos Al Ain Oasis — Jade laranja e o Signature Strand — Pedra do sol`,
      introParagraphs: [
        `Radiante por natureza, o Colar Al Ain Oasis — Pedra do sol é enfiado à mão com gemas de pedra do sol naturais, acentuado com contas de hematite banho de ouro e completado com a Al Ain Rosette signature da Maison, esculpida à mão em cornalina natural. Concebido com versatilidade, pode ser usado como comprimento simples ou dobrado à volta do pescoço para uma silhueta mais curta e em camadas.`,
        `As gemas naturais são há muito apreciadas pela sua individualidade. A profundidade de cor, os veios distintos e o carácter orgânico trazem uma riqueza que só a natureza pode criar, tornando cada colar tão único como a mulher que o usa.`,
        `Feito à mão em Abu Dhabi, o colar reflecte a apreciação da Bint Saeed pelos materiais naturais e o ofício duradouro. Complete o look com os brincos a condizer e o Signature Strand — Pedra do sol, concebido para complementar abayas, vestidos e alfaiataria Bint Saeed selecionadas.`,
      ],
      madeFromAnswer: [
        `O colar é feito à mão com contas de pedra do sol natural, contas de hematite banho de ouro e a Al Ain Rosette signature da Maison, esculpida à mão em cornalina natural. É terminado com um fecho dourado e uma corrente de extensão ajustável.`,
        `A pedra do sol é um feldspato natural, admirada pelos seus tons pêssego, dourados e cobre, juntamente com o brilho natural característico conhecido como aventurescence. Cada gema é única, assegurando que cada colar Bint Saeed possui o seu próprio carácter.`,
      ],
      strandAnswer: `Sim. O Signature Strand — Pedra do sol foi concebido para complementar o colar e pode ser fixado a abayas, vestidos e peças de alfaiataria Bint Saeed selecionadas, permitindo que joias e vestuário partilhem os mesmos detalhes em pedra natural. Emparelhado com os brincos a condizer, cria uma expressão completa da coleção de pedra natural da Maison.`,
    },
    id: {
      uniquenessKey: 'sunstone',
      fullName: `Kalung Al Ain Oasis — Batu matahari`,
      beadFeature: `Manik batu matahari alami dirangkai tangan (sekitar 5 mm)`,
      coordinateFeature: `Dirancang untuk berkoordinasi dengan Anting Al Ain Oasis — Jade oranye dan Signature Strand — Batu matahari`,
      introParagraphs: [
        `Bercahaya secara alami, Kalung Al Ain Oasis — Batu matahari dirangkai tangan dari batu matahari alami, diberi aksen manik hematit berlapis emas, dan dilengkapi Al Ain Rosette signature House, diukir tangan dari karnelian alami. Dirancang dengan keserbagunaan, dapat dikenakan sebagai panjang tunggal atau digandakan di leher untuk siluet berlapis yang lebih pendek.`,
        `Batu permata alami telah lama dihargai karena individualitasnya. Kedalaman warna, urat khas, dan karakter organik membawa kekayaan yang hanya alam yang mampu menciptakan, menjadikan setiap kalung seunik wanita yang memakainya.`,
        `Dibuat tangan di Abu Dhabi, kalung ini mencerminkan apresiasi Bint Saeed terhadap bahan alami dan ketukangan yang abadi. Lengkapi look dengan anting yang serasi dan Signature Strand — Batu matahari, dirancang untuk melengkapi abaya, gaun, dan jahitan Bint Saeed terpilih.`,
      ],
      madeFromAnswer: [
        `Kalung dibuat tangan menggunakan manik batu matahari alami, manik aksen hematit berlapis emas, dan Al Ain Rosette signature House yang diukir tangan dari karnelian alami. Diselesaikan dengan kait bernada emas dan rantai ekstensi yang dapat disesuaikan.`,
        `Batu matahari adalah feldspar alami, dikagumi karena nada peach, emas, dan tembaga yang hangat, bersama kilau alami khas yang dikenal sebagai aventurescence. Setiap batu unik, memastikan setiap kalung Bint Saeed memiliki karakternya sendiri.`,
      ],
      strandAnswer: `Ya. Signature Strand — Batu matahari dirancang untuk melengkapi kalung dan dapat dipasang pada abaya, gaun, dan potongan jahitan Bint Saeed terpilih, sehingga perhiasan dan pakaian berbagi detail batu alam yang sama. Dipasangkan dengan anting yang serasi, ia menciptakan ekspresi lengkap koleksi batu alam House.`,
    },
    ms: {
      uniquenessKey: 'sunstone',
      fullName: `Rantai leher Al Ain Oasis — Batu matahari`,
      beadFeature: `Manik batu matahari semula jadi dirangkai tangan (kira-kira 5 mm)`,
      coordinateFeature: `Direka untuk berkoordinasi dengan Anting Al Ain Oasis — Jed oren dan Signature Strand — Batu matahari`,
      introParagraphs: [
        `Bercahaya secara semula jadi, Rantai leher Al Ain Oasis — Batu matahari dirangkai tangan daripada batu matahari semula jadi, diberi aksen manik hematit bersalut emas, dan dilengkapi Al Ain Rosette signature House, diukir tangan daripada karnelian semula jadi. Direka dengan serba boleh, ia boleh dipakai sebagai panjang tunggal atau digandakan di leher untuk siluet berlapis yang lebih pendek.`,
        `Batu permata semula jadi telah lama dihargai kerana keindividuannya. Kedalaman warna, urat tersendiri dan karakter organik membawa kekayaan yang hanya alam mampu mencipta, menjadikan setiap rantai leher seunik wanita yang memakainya.`,
        `Dibuat tangan di Abu Dhabi, rantai leher ini mencerminkan penghargaan Bint Saeed terhadap bahan semula jadi dan ketukangan yang abadi. Lengkapkan look dengan anting yang sepadan dan Signature Strand — Batu matahari, direka untuk melengkapi abaya, gaun dan jahitan Bint Saeed terpilih.`,
      ],
      madeFromAnswer: [
        `Rantai leher dibuat tangan menggunakan manik batu matahari semula jadi, manik aksen hematit bersalut emas, dan Al Ain Rosette signature House yang diukir tangan daripada karnelian semula jadi. Diselesaikan dengan kait bernada emas dan rantai sambungan boleh laras.`,
        `Batu matahari ialah feldspar semula jadi, dikagumi kerana nada peach, emas dan tembaga yang hangat, bersama kilau semula jadi tersendiri dikenali sebagai aventurescence. Setiap batu unik, memastikan setiap rantai leher Bint Saeed memiliki karakternya sendiri.`,
      ],
      strandAnswer: `Ya. Signature Strand — Batu matahari direka untuk melengkapi rantai leher dan boleh dipasang pada abaya, gaun dan potongan jahitan Bint Saeed terpilih, membolehkan barang kemas dan pakaian berkongsi perincian batu semula jadi yang sama. Dipasangkan dengan anting yang sepadan, ia mencipta ekspresi lengkap koleksi batu semula jadi House.`,
    },
  },
  'al-ain-oasis-necklace-lapis-lazuli': {
    it: {
      uniquenessKey: 'lapis',
      fullName: `Collana Al Ain Oasis — Lapislazzuli`,
      beadFeature: `Perle di lapislazzuli naturale infilate a mano (circa 5 mm)`,
      coordinateFeature: `Concepita per coordinarsi con gli Orecchini Al Quaa — Lapislazzuli e il Signature Strand — Lapislazzuli`,
      introParagraphs: [
        `Ricca di colore e carattere naturale, la Collana Al Ain Oasis — Lapislazzuli è infilata a mano con gemme di lapislazzuli naturali, accentata da perle di ematite placcata oro e completata dalla Al Ain Rosette signature della Maison, intagliata a mano in corniola naturale. Concepita per la versatilità, può essere indossata come lunghezza singola o raddoppiata intorno al collo per una silhouette più corta e stratificata.`,
        `Le gemme naturali sono da tempo apprezzate per la loro individualità. La profondità di colore, le venature distintive e il carattere organico offrono una ricchezza che solo la natura può creare, rendendo ogni collana unica come la donna che la indossa.`,
        `Artigianale ad Abu Dhabi, la collana riflette l’apprezzamento di Bint Saeed per i materiali naturali e l’artigianato duraturo. Completate l’insieme abbinando la collana agli orecchini assortiti e al Signature Strand — Lapislazzuli, concepito per completare abaya, abiti e pezzi di sartoria Bint Saeed selezionati.`,
      ],
      madeFromAnswer: [
        `La collana è artigianale con perle di lapislazzuli naturale, perle di ematite placcata oro e la Al Ain Rosette signature della Maison, intagliata a mano in corniola naturale. È terminata da una chiusura dorata e una catenina di estensione regolabile.`,
        `Il lapislazzuli è una gemma naturale, apprezzata per l’intenso blu reale e le distintive inclusioni dorate di pirite. Ogni gemma è unica, assicurando che ogni collana Bint Saeed possieda il proprio carattere.`,
      ],
      strandAnswer: `Sì. Il Signature Strand — Lapislazzuli è stato concepito per completare la collana e può essere fissato ad abaya, abiti e pezzi di sartoria Bint Saeed selezionati, permettendo a gioielli e capi di condividere gli stessi dettagli in pietra naturale. Abbinato agli orecchini assortiti, compone un’espressione completa della collezione pietre naturali della Maison.`,
    },
    es: {
      uniquenessKey: 'lapis',
      fullName: `Collar Al Ain Oasis — Lapislázuli`,
      beadFeature: `Cuentas de lapislázuli natural ensartadas a mano (aproximadamente 5 mm)`,
      coordinateFeature: `Diseñado para coordinar con los Pendientes Al Quaa — Lapislázuli y el Signature Strand — Lapislázuli`,
      introParagraphs: [
        `Rica en color y carácter natural, el Collar Al Ain Oasis — Lapislázuli se ensarta a mano con gemas de lapislázuli naturales, se acentúa con cuentas de hematita baño de oro y se completa con la Al Ain Rosette signature de la Maison, tallada a mano en cornalina natural. Diseñado con versatilidad, puede llevarse como longitud sencilla o doblado alrededor del cuello para una silueta más corta y en capas.`,
        `Las gemas naturales se han apreciado desde hace tiempo por su individualidad. La profundidad de color, las vetas distintivas y el carácter orgánico aportan una riqueza que solo la naturaleza puede crear, haciendo cada collar tan único como la mujer que lo lleva.`,
        `Hecho a mano en Abu Dabi, el collar refleja la apreciación de Bint Saeed por los materiales naturales y la artesanía perdurable. Completa el look combinando el collar con los pendientes a juego y el Signature Strand — Lapislázuli, diseñado para complementar abayas, vestidos y sastrería Bint Saeed seleccionadas.`,
      ],
      madeFromAnswer: [
        `El collar se elabora a mano con cuentas de lapislázuli natural, cuentas de hematita baño de oro y la Al Ain Rosette signature de la Maison, tallada a mano en cornalina natural. Se remata con un cierre dorado y una cadena de extensión ajustable.`,
        `El lapislázuli es una gema natural, apreciada por su intenso azul real y sus distintivas inclusiones doradas de pirita. Cada gema es única, asegurando que cada collar Bint Saeed posea su propio carácter.`,
      ],
      strandAnswer: `Sí. El Signature Strand — Lapislázuli se ha diseñado para complementar el collar y puede fijarse a abayas, vestidos y piezas de sastrería Bint Saeed seleccionadas, permitiendo que joyería y prendas compartan los mismos detalles de piedra natural. Emparejado con los pendientes a juego, crea una expresión completa de la colección de piedra natural de la Maison.`,
    },
    ru: {
      uniquenessKey: 'lapis',
      fullName: `Ожерелье Al Ain Oasis — Лазурит`,
      beadFeature: `Натуральные бусины лазурита, нанизанные вручную (около 5 мм)`,
      coordinateFeature: `Создано для сочетания с Серьгами Al Quaa — Лазурит и Signature Strand — Лазурит`,
      introParagraphs: [
        `Богатое цветом и природным характером, Ожерелье Al Ain Oasis — Лазурит нанизано вручную из натурального лазурит, акцентировано бусинами позолоченного гематита и завершено фирменной Al Ain Rosette Дома, вырезанной вручную из натурального сердолика. Созданное с мыслью о многогранности, оно может носиться одной длинной нитью или удвоенным вокруг шеи для более короткого многослойного силуэта.`,
        `Натуральные самоцветы давно ценятся за индивидуальность. Глубина цвета, характерные прожилки и органический характер дают богатство, которое способна создать только природа, делая каждое ожерелье таким же уникальным, как женщина, которая его носит.`,
        `Созданное вручную в Абу-Даби, ожерелье отражает уважение Bint Saeed к натуральным материалам и долговечному мастерству. Завершите образ, сочетая ожерелье с подходящими серьгами и Signature Strand — Лазурит, созданным дополнять избранные абаи, платья и портновские изделия Bint Saeed.`,
      ],
      madeFromAnswer: [
        `Ожерелье создаётся вручную из натуральных бусин лазурита, бусин позолоченного гематита и фирменной Al Ain Rosette Дома, вырезанной вручную из натурального сердолика. Завершается золотистым замком и регулируемой удлиняющей цепочкой.`,
        `Лазурит — натуральный самоцвет, ценимый за интенсивный королевский синий и характерные золотистые вкрапления пирита. Каждый самоцвет уникален, поэтому каждое ожерелье Bint Saeed обладает собственным характером.`,
      ],
      strandAnswer: `Да. Signature Strand — Лазурит создан, чтобы дополнять ожерелье, и может крепиться к избранным абаям, платьям и портновским изделиям Bint Saeed, позволяя украшениям и одежде разделять одни и те же детали из натурального камня. В паре с подходящими серьгами это полное выражение коллекции натурального камня Дома.`,
    },
    zh: {
      uniquenessKey: 'lapis',
      fullName: `Al Ain Oasis 青金石项链`,
      beadFeature: `天然青金石珠（约 5 毫米）`,
      coordinateFeature: `旨在与 Al Quaa 青金石耳环及 Signature Strand — 青金石 协调佩戴`,
      introParagraphs: [
        `色彩与天然性格丰盈，Al Ain Oasis 青金石项链以天然青金石手工串制，点缀镀金赤铁矿珠，并以品牌标志性 Al Ain Rosette——天然红玉髓手工雕刻——完成。为多变佩戴而设计，可作单层长链，或双绕颈间呈较短层次廓形。`,
        `天然宝石因其个性而久为珍视。色彩深度、独特纹理与有机性格带来唯有自然能创造的丰盈，使每条项链都如佩戴者般独一无二。`,
        `于阿布扎比手工制作，项链体现 Bint Saeed 对天然材质与持久工艺的珍视。以配套耳环与 Signature Strand — 青金石 完成造型；后者旨在与精选 Bint Saeed 长袍、裙装与定制单品相配。`,
      ],
      madeFromAnswer: [
        `项链以天然青金石珠、镀金赤铁矿珠，以及品牌标志性、天然红玉髓手工雕刻的 Al Ain Rosette 手工制作，并以金色扣环与可调节延长链收束。`,
        `青金石是天然宝石，以其浓郁皇家蓝与独特金色黄铁矿包裹体著称。每颗宝石皆独特，确保每条 Bint Saeed 项链都有自身性格。`,
      ],
      strandAnswer: `是。Signature Strand — 青金石旨在与项链相配，并可固定于精选 Bint Saeed 长袍、裙装与定制单品，使珠宝与服饰共享相同的天然石细节。搭配配套耳环，构成品牌天然石系列的完整表达。`,
    },
    de: {
      uniquenessKey: 'lapis',
      fullName: `Al Ain Oasis Halskette — Lapislazuli`,
      beadFeature: `Handaufgezogene natürliche Lapislazuliperlen (etwa 5 mm)`,
      coordinateFeature: `Gestaltet zur Abstimmung mit den Al Quaa Ohrringen — Lapislazuli und dem Signature Strand — Lapislazuli`,
      introParagraphs: [
        `Reich an Farbe und natürlichem Charakter, wird die Al Ain Oasis Halskette — Lapislazuli aus natürlichem Lapislazuli handaufgezogen, mit vergoldeten Hämatitperlen akzentuiert und mit der Signature-Al-Ain-Rosette des Hauses abgeschlossen, handgeschnitzt aus natürlichem Karneol. Für Vielseitigkeit gedacht, kann sie als einzelne lange Länge oder doppelt um den Hals getragen werden, für eine kürzere, geschichtete Silhouette.`,
        `Natursteine werden seit Langem für ihre Individualität geschätzt. Die Farbtiefe, die charakteristische Äderung und der organische Charakter bringen einen Reichtum, den nur die Natur schaffen kann — und machen jede Halskette so einzigartig wie die Frau, die sie trägt.`,
        `Handgefertigt in Abu Dhabi spiegelt die Halskette Bint Saeeds Wertschätzung für natürliche Materialien und beständiges Handwerk wider. Vervollständigen Sie den Look mit den passenden Ohrringen und dem Signature Strand — Lapislazuli, gestaltet zur Ergänzung ausgewählter Abayas, Kleider und Maßstücke von Bint Saeed.`,
      ],
      madeFromAnswer: [
        `Die Halskette wird handgefertigt aus natürlichen Lapislazuli-Perlen, vergoldeten Hämatit-Akzentperlen und der Signature-Al-Ain-Rosette des Hauses, handgeschnitzt aus natürlichem Karneol. Sie wird mit einem goldfarbenen Verschluss und einer verstellbaren Verlängerungskette abgeschlossen.`,
        `Lapislazuli ist ein natürlich vorkommender Edelstein, geschätzt für intensives Königsblau und charakteristische goldene Pyriteinschlüsse. Jeder Edelstein ist einzigartig — jede Bint-Saeed-Halskette besitzt ihren eigenen Charakter.`,
      ],
      strandAnswer: `Ja. Der Signature Strand — Lapislazuli wurde gestaltet, um die Halskette zu ergänzen, und kann an ausgewählten Abayas, Kleidern und Maßstücken von Bint Saeed befestigt werden, sodass Schmuck und Kleidung dieselben Natursteindetails teilen. Mit den passenden Ohrringen entsteht ein vollständiger Ausdruck der Naturstein-Kollektion des Hauses.`,
    },
    nl: {
      uniquenessKey: 'lapis',
      fullName: `Al Ain Oasis ketting — Lapis lazuli`,
      beadFeature: `Handgeregen natuurlijke lapis lazuli kralen (ongeveer 5 mm)`,
      coordinateFeature: `Ontworpen om te coördineren met de Al Quaa oorbellen — Lapis lazuli en de Signature Strand — Lapis lazuli`,
      introParagraphs: [
        `Rijk aan kleur en natuurlijk karakter, wordt de Al Ain Oasis ketting — Lapis lazuli met de hand geregen van natuurlijke lapis lazuli, geaccentueerd met verguld hematiet kralen en afgewerkt met de signature Al Ain Rosette van het Huis, handgesneden uit natuurlijke carneool. Ontworpen met veelzijdigheid in gedachten, kan hij als enkele lange lengte of dubbel om de hals worden gedragen voor een korter gelaagd silhouet.`,
        `Natuurlijke edelstenen worden al lang gewaardeerd om hun individualiteit. De kleurdiepte, kenmerkende adering en organische karakter brengen een rijkdom die alleen de natuur kan scheppen, waardoor elke ketting even uniek is als de vrouw die hem draagt.`,
        `Handgemaakt in Abu Dhabi weerspiegelt de ketting Bint Saeeds waardering voor natuurlijke materialen en duurzaam vakmanschap. Maak de look af met de bijpassende oorbellen en de Signature Strand — Lapis lazuli, ontworpen om geselecteerde Bint Saeed abaya’s, jurken en maatwerk te complementeren.`,
      ],
      madeFromAnswer: [
        `De ketting wordt handgemaakt met natuurlijke lapis lazulikralen, verguld hematiet accentkralen en de signature Al Ain Rosette van het Huis, handgesneden uit natuurlijke carneool. Hij wordt afgewerkt met een goudkleurige sluiting en een verstelbare verlengketting.`,
        `Lapis lazuli is een natuurlijk voorkomende edelsteen, gewaardeerd om intens koningsblauw en kenmerkende gouden pyrietinclusies. Elke edelsteen is uniek, zodat elke Bint Saeed-ketting zijn eigen karakter heeft.`,
      ],
      strandAnswer: `Ja. De Signature Strand — Lapis lazuli is ontworpen om de ketting te complementeren en kan worden bevestigd aan geselecteerde Bint Saeed abaya’s, jurken en maatwerkstukken, zodat sieraden en kleding dezelfde natuursteendetails delen. Gepaard met de bijpassende oorbellen vormt het een volledige uitdrukking van de natuursteencollectie van het Huis.`,
    },
    pt: {
      uniquenessKey: 'lapis',
      fullName: `Colar Al Ain Oasis — Lápis-lazúli`,
      beadFeature: `Contas de lápis-lazúli natural enfiadas à mão (aproximadamente 5 mm)`,
      coordinateFeature: `Concebido para coordenar com os Brincos Al Quaa — Lápis-lazúli e o Signature Strand — Lápis-lazúli`,
      introParagraphs: [
        `Rico em cor e carácter natural, o Colar Al Ain Oasis — Lápis-lazúli é enfiado à mão com gemas de lápis-lazúli naturais, acentuado com contas de hematite banho de ouro e completado com a Al Ain Rosette signature da Maison, esculpida à mão em cornalina natural. Concebido com versatilidade, pode ser usado como comprimento simples ou dobrado à volta do pescoço para uma silhueta mais curta e em camadas.`,
        `As gemas naturais são há muito apreciadas pela sua individualidade. A profundidade de cor, os veios distintos e o carácter orgânico trazem uma riqueza que só a natureza pode criar, tornando cada colar tão único como a mulher que o usa.`,
        `Feito à mão em Abu Dhabi, o colar reflecte a apreciação da Bint Saeed pelos materiais naturais e o ofício duradouro. Complete o look com os brincos a condizer e o Signature Strand — Lápis-lazúli, concebido para complementar abayas, vestidos e alfaiataria Bint Saeed selecionadas.`,
      ],
      madeFromAnswer: [
        `O colar é feito à mão com contas de lápis-lazúli natural, contas de hematite banho de ouro e a Al Ain Rosette signature da Maison, esculpida à mão em cornalina natural. É terminado com um fecho dourado e uma corrente de extensão ajustável.`,
        `O lápis-lazúli é uma gema natural, apreciada pelo azul-real intenso e pelas inclusões douradas distintas de pirite. Cada gema é única, assegurando que cada colar Bint Saeed possui o seu próprio carácter.`,
      ],
      strandAnswer: `Sim. O Signature Strand — Lápis-lazúli foi concebido para complementar o colar e pode ser fixado a abayas, vestidos e peças de alfaiataria Bint Saeed selecionadas, permitindo que joias e vestuário partilhem os mesmos detalhes em pedra natural. Emparelhado com os brincos a condizer, cria uma expressão completa da coleção de pedra natural da Maison.`,
    },
    id: {
      uniquenessKey: 'lapis',
      fullName: `Kalung Al Ain Oasis — Lapis lazuli`,
      beadFeature: `Manik lapis lazuli alami dirangkai tangan (sekitar 5 mm)`,
      coordinateFeature: `Dirancang untuk berkoordinasi dengan Anting Al Quaa — Lapis lazuli dan Signature Strand — Lapis lazuli`,
      introParagraphs: [
        `Kaya warna dan karakter alami, Kalung Al Ain Oasis — Lapis lazuli dirangkai tangan dari lapis lazuli alami, diberi aksen manik hematit berlapis emas, dan dilengkapi Al Ain Rosette signature House, diukir tangan dari karnelian alami. Dirancang dengan keserbagunaan, dapat dikenakan sebagai panjang tunggal atau digandakan di leher untuk siluet berlapis yang lebih pendek.`,
        `Batu permata alami telah lama dihargai karena individualitasnya. Kedalaman warna, urat khas, dan karakter organik membawa kekayaan yang hanya alam yang mampu menciptakan, menjadikan setiap kalung seunik wanita yang memakainya.`,
        `Dibuat tangan di Abu Dhabi, kalung ini mencerminkan apresiasi Bint Saeed terhadap bahan alami dan ketukangan yang abadi. Lengkapi look dengan anting yang serasi dan Signature Strand — Lapis lazuli, dirancang untuk melengkapi abaya, gaun, dan jahitan Bint Saeed terpilih.`,
      ],
      madeFromAnswer: [
        `Kalung dibuat tangan menggunakan manik lapis lazuli alami, manik aksen hematit berlapis emas, dan Al Ain Rosette signature House yang diukir tangan dari karnelian alami. Diselesaikan dengan kait bernada emas dan rantai ekstensi yang dapat disesuaikan.`,
        `Lapis lazuli adalah batu permata alami, dihargai karena biru royal yang intens dan inklusi pirit emas yang khas. Setiap batu unik, memastikan setiap kalung Bint Saeed memiliki karakternya sendiri.`,
      ],
      strandAnswer: `Ya. Signature Strand — Lapis lazuli dirancang untuk melengkapi kalung dan dapat dipasang pada abaya, gaun, dan potongan jahitan Bint Saeed terpilih, sehingga perhiasan dan pakaian berbagi detail batu alam yang sama. Dipasangkan dengan anting yang serasi, ia menciptakan ekspresi lengkap koleksi batu alam House.`,
    },
    ms: {
      uniquenessKey: 'lapis',
      fullName: `Rantai leher Al Ain Oasis — Lapis lazuli`,
      beadFeature: `Manik lapis lazuli semula jadi dirangkai tangan (kira-kira 5 mm)`,
      coordinateFeature: `Direka untuk berkoordinasi dengan Anting Al Quaa — Lapis lazuli dan Signature Strand — Lapis lazuli`,
      introParagraphs: [
        `Kaya warna dan karakter semula jadi, Rantai leher Al Ain Oasis — Lapis lazuli dirangkai tangan daripada lapis lazuli semula jadi, diberi aksen manik hematit bersalut emas, dan dilengkapi Al Ain Rosette signature House, diukir tangan daripada karnelian semula jadi. Direka dengan serba boleh, ia boleh dipakai sebagai panjang tunggal atau digandakan di leher untuk siluet berlapis yang lebih pendek.`,
        `Batu permata semula jadi telah lama dihargai kerana keindividuannya. Kedalaman warna, urat tersendiri dan karakter organik membawa kekayaan yang hanya alam mampu mencipta, menjadikan setiap rantai leher seunik wanita yang memakainya.`,
        `Dibuat tangan di Abu Dhabi, rantai leher ini mencerminkan penghargaan Bint Saeed terhadap bahan semula jadi dan ketukangan yang abadi. Lengkapkan look dengan anting yang sepadan dan Signature Strand — Lapis lazuli, direka untuk melengkapi abaya, gaun dan jahitan Bint Saeed terpilih.`,
      ],
      madeFromAnswer: [
        `Rantai leher dibuat tangan menggunakan manik lapis lazuli semula jadi, manik aksen hematit bersalut emas, dan Al Ain Rosette signature House yang diukir tangan daripada karnelian semula jadi. Diselesaikan dengan kait bernada emas dan rantai sambungan boleh laras.`,
        `Lapis lazuli ialah batu permata semula jadi, dihargai kerana biru diraja yang intens dan inklusi pirit emas yang tersendiri. Setiap batu unik, memastikan setiap rantai leher Bint Saeed memiliki karakternya sendiri.`,
      ],
      strandAnswer: `Ya. Signature Strand — Lapis lazuli direka untuk melengkapi rantai leher dan boleh dipasang pada abaya, gaun dan potongan jahitan Bint Saeed terpilih, membolehkan barang kemas dan pakaian berkongsi perincian batu semula jadi yang sama. Dipasangkan dengan anting yang sepadan, ia mencipta ekspresi lengkap koleksi batu semula jadi House.`,
    },
  },
}

function buildPack(
  locale: SecondaryLocale,
  product: ProductLocaleCopy,
): NecklaceEarringPdpContentPack {
  const ui = UI[locale]
  const care = getJewelleryCareCopy(locale)
  const uniqueness =
    product.uniquenessKey === 'lapis'
      ? ui.uniquenessLapis
      : product.uniquenessKey === 'sunstone'
        ? ui.uniquenessSunstone
        : product.uniquenessKey === 'tiger'
          ? ui.uniquenessTiger
          : product.uniquenessKey === 'onyx'
            ? ui.uniquenessOnyx
            : ui.uniqueness
  const identical =
    product.uniquenessKey === 'lapis'
      ? ui.identicalLapis
      : product.uniquenessKey === 'sunstone'
        ? ui.identicalSunstone
        : product.uniquenessKey === 'tiger'
          ? ui.identicalTiger
          : product.uniquenessKey === 'onyx'
            ? ui.identicalOnyx
            : ui.identical

  return {
    introParagraphs: product.introParagraphs,
    featuresTitle: ui.featuresTitle,
    features: [
      ui.houseCode,
      ui.handcrafted,
      product.beadFeature,
      ui.hematite,
      ui.rosette,
      ui.convertible,
      ui.clasp,
      uniqueness,
      product.coordinateFeature,
      ui.giftBox,
    ],
    careLead: care.lead,
    care: [...care.bullets],
    faq: [
      {
        question: ui.madeFromQ(product.fullName),
        answer: product.madeFromAnswer,
      },
      {
        question: ui.qRosette,
        answer: '',
      },
      {
        question: ui.qStrand,
        answer: product.strandAnswer,
      },
      {
        question: ui.qWear,
        answer: ui.wearWays,
      },
      {
        question: ui.qIdentical,
        answer: identical,
      },
      {
        question: ui.qMade,
        answer: ui.madeWhere(product.fullName),
      },
      {
        question: ui.qGift,
        answer: ui.giftAnswer(product.fullName),
      },
      {
        question: ui.qCare,
        answer: ui.careFaq,
      },
    ],
  }
}

export function getNecklacePdpContentI18n(
  id: string,
  locale: AppLocale,
): NecklaceEarringPdpContentPack | undefined {
  // Authored EN/AR/FR packs in necklaceEarringPdpContent* take precedence.
  if (locale === 'en' || locale === 'ar' || locale === 'fr') return undefined
  if (!isSecondary(locale)) return undefined

  const canonical = resolveAccessoryId(id)
  if (!isNecklacePdpId(canonical)) return undefined

  const product = PRODUCT_COPY[canonical as NecklaceId][locale]
  return buildPack(locale, product)
}
