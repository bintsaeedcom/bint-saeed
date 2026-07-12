import type { AppLocale } from '@/lib/i18n/routing'
import type { NecklaceEarringPdpContentPack } from '@/lib/accessories/necklaceEarringPdpContent'
import { getJewelleryCareCopy } from '@/lib/accessories/jewelleryCareCopyI18n'
import { JEWELLERY_CARE_FAQ_EARRING_EN } from '@/lib/accessories/jewelleryCareCopyI18n'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'

export const EARRING_IDS = [
  'al-ain-oasis-earrings-malachite',
  'al-ain-oasis-earrings-orange-jade',
  'al-quaa-earrings-rose-quartz',
  'al-quaa-earrings-lapis-lazuli',
] as const

export type EarringId = (typeof EARRING_IDS)[number]

export function isEarringPdpId(id: string): id is EarringId {
  return (EARRING_IDS as readonly string[]).includes(id)
}

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
  handAssembled: string
  hematite: string
  rosette: string
  giftBox: string
  uniqueness: string
  uniquenessLapis: string
  identical: string
  identicalLapis: string
  madeWhere: string
  strandAnswer: string
  copper14k: string
  silhouetteLight: string
  drop55: string
  leverback: string
  brass18k: string
  silhouetteElegant: string
  drop4: string
  studPink: string
  studClear: string
  careFaq: string
  qRosette: string
  qNecklace: string
  qStrand: string
  qIdentical: string
  qMade: string
  qGift: string
  qCare: string
  madeFromQ: (fullName: string) => string
  necklaceAnswer: (necklace: string) => string
  giftAnswer: (fullName: string) => string
  coordinate: (necklace: string) => string
}

const UI: Record<SecondaryLocale, SharedUi> = {
  it: {
    featuresTitle: 'Caratteristiche',
    houseCode: 'House Code: Al Ain Rosette',
    handAssembled:
      'Orecchini pendenti in pietra naturale assemblati a mano ad Abu Dhabi, Emirati Arabi Uniti',
    hematite: 'Perle di ematite sfaccettata placcata oro che catturano la luce',
    rosette:
      'Signature Al Ain Rosette intagliata a mano in corniola naturale (circa 15 mm)',
    giftBox: 'Presentati in un cofanetto regalo firma Bint Saeed',
    uniqueness: 'Ogni pietra naturale è unica per colore, motivo e inclusioni',
    uniquenessLapis:
      'Ogni pietra naturale è unica per colore, motivo e inclusioni naturali di pirite',
    identical:
      'No. Ogni creazione Bint Saeed presenta gemme naturali. Variazioni di colore, motivo e inclusioni fanno parte dell’individualità di ogni pezzo e vanno celebrate come segno dei materiali naturali.',
    identicalLapis:
      'No. Ogni creazione Bint Saeed presenta gemme naturali. Variazioni di colore, motivo e inclusioni naturali di pirite fanno parte dell’individualità di ogni pezzo e vanno celebrate come segno dei materiali naturali.',
    madeWhere:
      'Ogni paio è assemblato a mano ad Abu Dhabi, Emirati Arabi Uniti, secondo gli standard di artigianato e qualità di Bint Saeed.',
    strandAnswer:
      'Sì. I Signature Strands Bint Saeed sono concepiti per completare gli orecchini e possono essere fissati ad abaya, abiti e pezzi di sartoria Bint Saeed selezionati.',
    copper14k: 'Rame nickel-free placcato oro 14k',
    silhouetteLight: 'Silhouette leggera concepita per un comfort tutto il giorno',
    drop55: 'Lunghezza del drop: 5,5 cm (2,17 in)',
    leverback: 'Chiusura leverback pavé di zirconia',
    brass18k: 'Ottone placcato oro 18k',
    silhouetteElegant:
      'Silhouette elegante e leggera concepita per un comfort tutto il giorno',
    drop4: 'Lunghezza del drop: 4 cm (1,57 in)',
    studPink: 'Perno in zirconia rosa taglio a pera',
    studClear: 'Perno in zirconia trasparente taglio a pera',
    careFaq: JEWELLERY_CARE_FAQ_EARRING_EN,
    qRosette: 'Che cos’è l’Al Ain Rosette?',
    qNecklace: 'Esiste una collana abbinata?',
    qStrand: 'È disponibile un Signature Strand abbinato?',
    qIdentical: 'Ogni paio è identico?',
    qMade: 'Dove sono realizzati gli orecchini?',
    qGift: 'Gli orecchini arrivano in confezione regalo?',
    qCare: 'Come dovrei prendermi cura dei miei orecchini?',
    madeFromQ: (n) => `Di che cosa sono fatti gli ${n}?`,
    necklaceAnswer: (n) =>
      `Sì. La ${n} è stata concepita per completare gli orecchini e creare un insieme armonioso.`,
    giftAnswer: (n) =>
      `Sì. Gli ${n} sono presentati in un cofanetto regalo signature Bint Saeed, ideale per il dono e la conservazione.`,
    coordinate: (n) =>
      `Concepiti per coordinarsi con la ${n} e i Signature Strands Bint Saeed`,
  },
  es: {
    featuresTitle: 'Características',
    houseCode: 'House Code: Al Ain Rosette',
    handAssembled:
      'Pendientes largos de piedra natural ensamblados a mano en Abu Dabi, Emiratos Árabes Unidos',
    hematite: 'Cuentas de hematita facetada baño de oro que captan la luz',
    rosette:
      'Signature Al Ain Rosette tallada a mano en cornalina natural (aproximadamente 15 mm)',
    giftBox: 'Presentados en un estuche de regalo firma Bint Saeed',
    uniqueness: 'Cada piedra natural es única en color, patrón e inclusiones',
    uniquenessLapis:
      'Cada piedra natural es única en color, patrón e inclusiones naturales de pirita',
    identical:
      'No. Cada creación Bint Saeed presenta gemas naturales. Las variaciones de color, patrón e inclusiones forman parte de la individualidad de cada pieza y deben celebrarse como sello de los materiales naturales.',
    identicalLapis:
      'No. Cada creación Bint Saeed presenta gemas naturales. Las variaciones de color, patrón e inclusiones naturales de pirita forman parte de la individualidad de cada pieza y deben celebrarse como sello de los materiales naturales.',
    madeWhere:
      'Cada par se ensambla a mano en Abu Dabi, Emiratos Árabes Unidos, según los estándares de artesanía y calidad de Bint Saeed.',
    strandAnswer:
      'Sí. Los Signature Strands Bint Saeed se han diseñado para complementar los pendientes y pueden fijarse a abayas, vestidos y piezas de sastrería Bint Saeed seleccionadas.',
    copper14k: 'Cobre libre de níquel baño de oro 14k',
    silhouetteLight: 'Silueta ligera diseñada para un uso cómodo todo el día',
    drop55: 'Longitud de caída: 5,5 cm (2,17 in)',
    leverback: 'Cierre leverback pavé de zirconia',
    brass18k: 'Latón baño de oro 18k',
    silhouetteElegant:
      'Silueta elegante y ligera diseñada para un uso cómodo todo el día',
    drop4: 'Longitud de caída: 4 cm (1,57 in)',
    studPink: 'Pendiente en zirconia rosa talla pera',
    studClear: 'Pendiente en zirconia transparente talla pera',
    careFaq: JEWELLERY_CARE_FAQ_EARRING_EN,
    qRosette: '¿Qué es la Al Ain Rosette?',
    qNecklace: '¿Hay un collar a juego?',
    qStrand: '¿Hay un Signature Strand a juego disponible?',
    qIdentical: '¿Cada par es idéntico?',
    qMade: '¿Dónde se fabrican los pendientes?',
    qGift: '¿Los pendientes llegan en packaging de regalo?',
    qCare: '¿Cómo debo cuidar mis pendientes?',
    madeFromQ: (n) => `¿De qué están hechos los ${n}?`,
    necklaceAnswer: (n) =>
      `Sí. El ${n} se ha diseñado para complementar los pendientes y crear un conjunto armonioso.`,
    giftAnswer: (n) =>
      `Sí. Los ${n} se presentan en un estuche de regalo signature Bint Saeed, ideal para regalar y conservar.`,
    coordinate: (n) =>
      `Diseñados para coordinar con el ${n} y los Signature Strands Bint Saeed`,
  },
  ru: {
    featuresTitle: 'Особенности',
    houseCode: 'House Code: Al Ain Rosette',
    handAssembled:
      'Серьги-капли из натурального камня ручной сборки в Абу-Даби, Объединённые Арабские Эмираты',
    hematite: 'Бусины гранёного позолоченного гематита, ловящие свет',
    rosette:
      'Signature Al Ain Rosette, вырезанная вручную из натурального сердолика (около 15 мм)',
    giftBox: 'Подаются в фирменной подарочной коробке Bint Saeed',
    uniqueness: 'Каждый натуральный камень уникален по цвету, рисунку и включениям',
    uniquenessLapis:
      'Каждый натуральный камень уникален по цвету, рисунку и природным вкраплениям пирита',
    identical:
      'Нет. Каждое творение Bint Saeed включает натуральные самоцветы. Различия в цвете, рисунке и включениях — часть индивидуальности каждой вещи и должны цениться как знак натуральных материалов.',
    identicalLapis:
      'Нет. Каждое творение Bint Saeed включает натуральные самоцветы. Различия в цвете, рисунке и природных вкраплениях пирита — часть индивидуальности каждой вещи и должны цениться как знак натуральных материалов.',
    madeWhere:
      'Каждая пара собирается вручную в Абу-Даби, Объединённые Арабские Эмираты, по стандартам мастерства и качества Bint Saeed.',
    strandAnswer:
      'Да. Signature Strands Bint Saeed созданы, чтобы дополнять серьги, и могут крепиться к избранным абаям, платьям и портновским изделиям Bint Saeed.',
    copper14k: 'Никель-фри медь с покрытием золотом 14k',
    silhouetteLight: 'Лёгкий силуэт, рассчитанный на комфорт в течение всего дня',
    drop55: 'Длина капли: 5,5 см (2,17 in)',
    leverback: 'Рычажный замок с паве из циркония',
    brass18k: 'Латунь с покрытием золотом 18k',
    silhouetteElegant:
      'Элегантный лёгкий силуэт, рассчитанный на комфорт в течение всего дня',
    drop4: 'Длина капли: 4 см (1,57 in)',
    studPink: 'Штифт из розового циркония грушевидной огранки',
    studClear: 'Штифт из прозрачного циркония грушевидной огранки',
    careFaq: JEWELLERY_CARE_FAQ_EARRING_EN,
    qRosette: 'Что такое Al Ain Rosette?',
    qNecklace: 'Есть ли подходящее ожерелье?',
    qStrand: 'Есть ли подходящий Signature Strand?',
    qIdentical: 'Каждая ли пара одинакова?',
    qMade: 'Где изготавливаются серьги?',
    qGift: 'Серьги приходят в подарочной упаковке?',
    qCare: 'Как ухаживать за серьгами?',
    madeFromQ: (n) => `Из чего сделаны ${n}?`,
    necklaceAnswer: (n) =>
      `Да. ${n} создано, чтобы дополнять серьги и составлять гармоничный комплект.`,
    giftAnswer: (n) =>
      `Да. ${n} подаются в фирменной подарочной коробке Bint Saeed — идеально для подарка и хранения.`,
    coordinate: (n) =>
      `Созданы для сочетания с ${n} и Signature Strands Bint Saeed`,
  },
  zh: {
    featuresTitle: '特点',
    houseCode: 'House Code: Al Ain Rosette',
    handAssembled: '于阿联酋阿布扎比手工组装的天然石垂坠耳环',
    hematite: '捕捉光线的镀金切面赤铁矿珠',
    rosette: 'Signature Al Ain Rosette，天然红玉髓手工雕刻（约 15 毫米）',
    giftBox: '置于 Bint Saeed 签名礼盒中呈献',
    uniqueness: '每颗天然石在色彩、纹理与包裹体上皆独一无二',
    uniquenessLapis: '每颗天然石在色彩、纹理与天然黄铁矿包裹体上皆独一无二',
    identical:
      '否。每件 Bint Saeed 作品皆采用天然宝石。色彩、纹理与包裹体的差异属于每件作品的个性，应作为天然材质的标志加以珍视。',
    identicalLapis:
      '否。每件 Bint Saeed 作品皆采用天然宝石。色彩、纹理与天然黄铁矿包裹体的差异属于每件作品的个性，应作为天然材质的标志加以珍视。',
    madeWhere: '每一对皆于阿联酋阿布扎比手工组装，遵循 Bint Saeed 的工艺与品质标准。',
    strandAnswer:
      '是。Bint Saeed Signature Strands 旨在与耳环相配，并可固定于精选 Bint Saeed 长袍、裙装与定制单品。',
    copper14k: '14k 镀金无镍铜',
    silhouetteLight: '轻盈廓形，为全天舒适佩戴而设计',
    drop55: '垂长：5.5 厘米（2.17 英寸）',
    leverback: '密镶锆石杠杆扣',
    brass18k: '18k 镀金黄铜',
    silhouetteElegant: '优雅轻盈廓形，为全天舒适佩戴而设计',
    drop4: '垂长：4 厘米（1.57 英寸）',
    studPink: '梨形粉锆石耳钉',
    studClear: '梨形透明锆石耳钉',
    careFaq: JEWELLERY_CARE_FAQ_EARRING_EN,
    qRosette: '什么是 Al Ain Rosette？',
    qNecklace: '是否有配套项链？',
    qStrand: '是否有配套 Signature Strand？',
    qIdentical: '每一对是否完全相同？',
    qMade: '耳环在哪里制作？',
    qGift: '耳环是否附礼盒包装？',
    qCare: '应如何护理耳环？',
    madeFromQ: (n) => `${n}由什么制成？`,
    necklaceAnswer: (n) => `是。${n}旨在与耳环相配，构成和谐套组。`,
    giftAnswer: (n) => `是。${n}置于 Bint Saeed 标志性礼盒中呈献，适合赠礼与珍藏。`,
    coordinate: (n) => `旨在与${n}及 Bint Saeed Signature Strands 协调佩戴`,
  },
  de: {
    featuresTitle: 'Merkmale',
    houseCode: 'House Code: Al Ain Rosette',
    handAssembled:
      'Handmontierte Tropfenohrringe aus Naturstein in Abu Dhabi, Vereinigte Arabische Emirate',
    hematite: 'Facettiertes vergoldetes Hämatit, das das Licht einfängt',
    rosette:
      'Signature Al Ain Rosette, handgeschnitzt aus natürlichem Karneol (etwa 15 mm)',
    giftBox: 'Präsentiert in einer signature Bint Saeed Geschenkbox',
    uniqueness: 'Jeder Naturstein ist einzigartig in Farbe, Muster und Einschlüssen',
    uniquenessLapis:
      'Jeder Naturstein ist einzigartig in Farbe, Muster und natürlichen Pyriteinschlüssen',
    identical:
      'Nein. Jede Bint-Saeed-Kreation zeigt Natursteine. Variationen in Farbe, Muster und Einschlüssen gehören zur Individualität jedes Stücks und sollten als Merkmal natürlicher Materialien gefeiert werden.',
    identicalLapis:
      'Nein. Jede Bint-Saeed-Kreation zeigt Natursteine. Variationen in Farbe, Muster und natürlichen Pyriteinschlüssen gehören zur Individualität jedes Stücks und sollten als Merkmal natürlicher Materialien gefeiert werden.',
    madeWhere:
      'Jedes Paar wird in Abu Dhabi, Vereinigte Arabische Emirate, handmontiert — nach den Handwerks- und Qualitätsstandards von Bint Saeed.',
    strandAnswer:
      'Ja. Die Signature Strands Bint Saeed sind darauf ausgelegt, die Ohrringe zu ergänzen und können an ausgewählten Abayas, Kleidern und Maßstücken von Bint Saeed befestigt werden.',
    copper14k: '14k goldplattiertes nickelfreies Kupfer',
    silhouetteLight: 'Leichte Silhouette für angenehmen Ganztageskomfort',
    drop55: 'Tropfenlänge: 5,5 cm (2,17 in)',
    leverback: 'Pavé-Zirkonia-Leverback-Verschluss',
    brass18k: '18k goldplattiertes Messing',
    silhouetteElegant:
      'Elegante leichte Silhouette für angenehmen Ganztageskomfort',
    drop4: 'Tropfenlänge: 4 cm (1,57 in)',
    studPink: 'Birnenförmiger rosa Zirkonia-Stecker',
    studClear: 'Birnenförmiger klarer Zirkonia-Stecker',
    careFaq: JEWELLERY_CARE_FAQ_EARRING_EN,
    qRosette: 'Was ist die Al Ain Rosette?',
    qNecklace: 'Gibt es eine passende Halskette?',
    qStrand: 'Gibt es einen passenden Signature Strand?',
    qIdentical: 'Ist jedes Paar identisch?',
    qMade: 'Wo werden die Ohrringe hergestellt?',
    qGift: 'Kommen die Ohrringe in Geschenkverpackung?',
    qCare: 'Wie sollte ich meine Ohrringe pflegen?',
    madeFromQ: (n) => `Woraus bestehen die ${n}?`,
    necklaceAnswer: (n) =>
      `Ja. Die ${n} wurde gestaltet, um die Ohrringe zu ergänzen und ein harmonisches Set zu bilden.`,
    giftAnswer: (n) =>
      `Ja. Die ${n} werden in einer signature Bint-Saeed-Geschenkbox präsentiert — ideal zum Verschenken und Aufbewahren.`,
    coordinate: (n) =>
      `Gestaltet zur Abstimmung mit der ${n} und den Signature Strands Bint Saeed`,
  },
  nl: {
    featuresTitle: 'Kenmerken',
    houseCode: 'House Code: Al Ain Rosette',
    handAssembled:
      'Handgemonteerde natuursteen druppeloorbellen in Abu Dhabi, Verenigde Arabische Emiraten',
    hematite: 'Gefacetteerd verguld hematiet dat het licht vangt',
    rosette:
      'Signature Al Ain Rosette, handgesneden uit natuurlijke carneool (ongeveer 15 mm)',
    giftBox: 'Gepresenteerd in een signature Bint Saeed cadeauverpakking',
    uniqueness: 'Elke natuursteen is uniek in kleur, patroon en inclusies',
    uniquenessLapis:
      'Elke natuursteen is uniek in kleur, patroon en natuurlijke pyrietinclusies',
    identical:
      'Nee. Elke Bint Saeed-creatie toont natuurlijke edelstenen. Variaties in kleur, patroon en inclusies horen bij de individualiteit van elk stuk en verdienen het om als kenmerk van natuurlijke materialen te worden gevierd.',
    identicalLapis:
      'Nee. Elke Bint Saeed-creatie toont natuurlijke edelstenen. Variaties in kleur, patroon en natuurlijke pyrietinclusies horen bij de individualiteit van elk stuk en verdienen het om als kenmerk van natuurlijke materialen te worden gevierd.',
    madeWhere:
      'Elk paar wordt met de hand gemonteerd in Abu Dhabi, Verenigde Arabische Emiraten, volgens de vakmanschap- en kwaliteitsnormen van Bint Saeed.',
    strandAnswer:
      'Ja. De Signature Strands Bint Saeed zijn ontworpen om de oorbellen te complementeren en kunnen worden bevestigd aan geselecteerde Bint Saeed abaya’s, jurken en maatwerkstukken.',
    copper14k: '14k verguld nikkelvrij koper',
    silhouetteLight: 'Licht silhouet ontworpen voor comfortabel dagelijks dragen',
    drop55: 'Druppellengte: 5,5 cm (2,17 in)',
    leverback: 'Pavé-zirconia leverback-sluiting',
    brass18k: '18k verguld messing',
    silhouetteElegant:
      'Elegant licht silhouet ontworpen voor comfortabel dagelijks dragen',
    drop4: 'Druppellengte: 4 cm (1,57 in)',
    studPink: 'Peer-cut roze zirconia stud',
    studClear: 'Peer-cut heldere zirconia stud',
    careFaq: JEWELLERY_CARE_FAQ_EARRING_EN,
    qRosette: 'Wat is de Al Ain Rosette?',
    qNecklace: 'Is er een bijpassende ketting?',
    qStrand: 'Is er een bijpassende Signature Strand beschikbaar?',
    qIdentical: 'Is elk paar identiek?',
    qMade: 'Waar worden de oorbellen gemaakt?',
    qGift: 'Komen de oorbellen in cadeauverpakking?',
    qCare: 'Hoe moet ik mijn oorbellen verzorgen?',
    madeFromQ: (n) => `Waarvan zijn de ${n} gemaakt?`,
    necklaceAnswer: (n) =>
      `Ja. De ${n} is ontworpen om de oorbellen te complementeren en een harmonieus set te vormen.`,
    giftAnswer: (n) =>
      `Ja. De ${n} worden gepresenteerd in een signature Bint Saeed cadeauverpakking, ideaal om te geven en te bewaren.`,
    coordinate: (n) =>
      `Ontworpen om te coördineren met de ${n} en de Signature Strands Bint Saeed`,
  },
  pt: {
    featuresTitle: 'Características',
    houseCode: 'House Code: Al Ain Rosette',
    handAssembled:
      'Brincos pendentes em pedra natural montados à mão em Abu Dhabi, Emirados Árabes Unidos',
    hematite: 'Contas de hematite facetada banho de ouro que captam a luz',
    rosette:
      'Signature Al Ain Rosette esculpida à mão em cornalina natural (aproximadamente 15 mm)',
    giftBox: 'Apresentados numa caixa de presente signature Bint Saeed',
    uniqueness: 'Cada pedra natural é única em cor, padrão e inclusões',
    uniquenessLapis:
      'Cada pedra natural é única em cor, padrão e inclusões naturais de pirite',
    identical:
      'Não. Cada criação Bint Saeed apresenta gemas naturais. Variações de cor, padrão e inclusões fazem parte da individualidade de cada peça e devem ser celebradas como marca dos materiais naturais.',
    identicalLapis:
      'Não. Cada criação Bint Saeed apresenta gemas naturais. Variações de cor, padrão e inclusões naturais de pirite fazem parte da individualidade de cada peça e devem ser celebradas como marca dos materiais naturais.',
    madeWhere:
      'Cada par é montado à mão em Abu Dhabi, Emirados Árabes Unidos, segundo os padrões de artesanato e qualidade da Bint Saeed.',
    strandAnswer:
      'Sim. Os Signature Strands Bint Saeed foram concebidos para complementar os brincos e podem ser fixados a abayas, vestidos e peças de alfaiataria Bint Saeed selecionadas.',
    copper14k: 'Cobre sem níquel banho de ouro 14k',
    silhouetteLight: 'Silhueta leve concebida para uso confortável o dia todo',
    drop55: 'Comprimento de queda: 5,5 cm (2,17 in)',
    leverback: 'Fecho leverback pavé de zirconia',
    brass18k: 'Latão banho de ouro 18k',
    silhouetteElegant:
      'Silhueta elegante e leve concebida para uso confortável o dia todo',
    drop4: 'Comprimento de queda: 4 cm (1,57 in)',
    studPink: 'Pino em zirconia rosa corte pêra',
    studClear: 'Pino em zirconia transparente corte pêra',
    careFaq: JEWELLERY_CARE_FAQ_EARRING_EN,
    qRosette: 'O que é a Al Ain Rosette?',
    qNecklace: 'Existe um colar a condizer?',
    qStrand: 'Existe um Signature Strand a condizer disponível?',
    qIdentical: 'Cada par é idêntico?',
    qMade: 'Onde são feitos os brincos?',
    qGift: 'Os brincos chegam em embalagem de presente?',
    qCare: 'Como devo cuidar dos meus brincos?',
    madeFromQ: (n) => `De que são feitos os ${n}?`,
    necklaceAnswer: (n) =>
      `Sim. O ${n} foi concebido para complementar os brincos e criar um conjunto harmonioso.`,
    giftAnswer: (n) =>
      `Sim. Os ${n} são apresentados numa caixa-presente signature Bint Saeed, ideal para oferecer e guardar.`,
    coordinate: (n) =>
      `Concebidos para coordenar com o ${n} e os Signature Strands Bint Saeed`,
  },
  id: {
    featuresTitle: 'Fitur',
    houseCode: 'House Code: Al Ain Rosette',
    handAssembled:
      'Anting drop batu alam dirakit tangan di Abu Dhabi, Uni Emirat Arab',
    hematite: 'Manik hematit berfaset berlapis emas yang menangkap cahaya',
    rosette:
      'Signature Al Ain Rosette diukir tangan dari karnelian alami (sekitar 15 mm)',
    giftBox: 'Disajikan dalam kotak hadiah signature Bint Saeed',
    uniqueness: 'Setiap batu alam unik dalam warna, pola, dan inklusi',
    uniquenessLapis:
      'Setiap batu alam unik dalam warna, pola, dan inklusi pirit alami',
    identical:
      'Tidak. Setiap kreasi Bint Saeed menampilkan batu permata alami. Variasi warna, pola, dan inklusi adalah bagian dari individualitas setiap karya dan patut dirayakan sebagai ciri bahan alami.',
    identicalLapis:
      'Tidak. Setiap kreasi Bint Saeed menampilkan batu permata alami. Variasi warna, pola, dan inklusi pirit alami adalah bagian dari individualitas setiap karya dan patut dirayakan sebagai ciri bahan alami.',
    madeWhere:
      'Setiap pasangan dirakit tangan di Abu Dhabi, Uni Emirat Arab, sesuai standar keahlian dan kualitas Bint Saeed.',
    strandAnswer:
      'Ya. Signature Strands Bint Saeed dirancang untuk melengkapi anting dan dapat dipasang pada abaya, gaun, dan potongan jahitan Bint Saeed terpilih.',
    copper14k: 'Tembaga bebas nikel berlapis emas 14k',
    silhouetteLight: 'Siluet ringan dirancang untuk kenyamanan sepanjang hari',
    drop55: 'Panjang drop: 5,5 cm (2,17 in)',
    leverback: 'Kaitan leverback pavé zirconia',
    brass18k: 'Kuningan berlapis emas 18k',
    silhouetteElegant:
      'Siluet elegan dan ringan dirancang untuk kenyamanan sepanjang hari',
    drop4: 'Panjang drop: 4 cm (1,57 in)',
    studPink: 'Stud zirconia merah muda potongan pir',
    studClear: 'Stud zirconia bening potongan pir',
    careFaq: JEWELLERY_CARE_FAQ_EARRING_EN,
    qRosette: 'Apa itu Al Ain Rosette?',
    qNecklace: 'Apakah ada kalung yang serasi?',
    qStrand: 'Apakah Signature Strand yang serasi tersedia?',
    qIdentical: 'Apakah setiap pasangan identik?',
    qMade: 'Di mana anting dibuat?',
    qGift: 'Apakah anting datang dalam kemasan hadiah?',
    qCare: 'Bagaimana saya harus merawat anting saya?',
    madeFromQ: (n) => `Terbuat dari apakah ${n}?`,
    necklaceAnswer: (n) =>
      `Ya. ${n} dirancang untuk melengkapi anting dan menciptakan set yang harmonis.`,
    giftAnswer: (n) =>
      `Ya. ${n} disajikan dalam kotak hadiah signature Bint Saeed, ideal untuk memberi dan menyimpan.`,
    coordinate: (n) =>
      `Dirancang untuk berkoordinasi dengan ${n} dan Signature Strands Bint Saeed`,
  },
  ms: {
    featuresTitle: 'Ciri-ciri',
    houseCode: 'House Code: Al Ain Rosette',
    handAssembled:
      'Anting drop batu semula jadi dipasang tangan di Abu Dhabi, Emiriah Arab Bersatu',
    hematite: 'Manik hematit berfaset bersalut emas yang menangkap cahaya',
    rosette:
      'Signature Al Ain Rosette diukir tangan daripada karnelian semula jadi (kira-kira 15 mm)',
    giftBox: 'Dipersembahkan dalam kotak hadiah signature Bint Saeed',
    uniqueness: 'Setiap batu semula jadi unik dari segi warna, corak dan inklusi',
    uniquenessLapis:
      'Setiap batu semula jadi unik dari segi warna, corak dan inklusi pirit semula jadi',
    identical:
      'Tidak. Setiap ciptaan Bint Saeed menampilkan batu permata semula jadi. Variasi warna, corak dan inklusi adalah sebahagian daripada keindividuan setiap karya dan patut diraikan sebagai tanda bahan semula jadi.',
    identicalLapis:
      'Tidak. Setiap ciptaan Bint Saeed menampilkan batu permata semula jadi. Variasi warna, corak dan inklusi pirit semula jadi adalah sebahagian daripada keindividuan setiap karya dan patut diraikan sebagai tanda bahan semula jadi.',
    madeWhere:
      'Setiap pasangan dipasang tangan di Abu Dhabi, Emiriah Arab Bersatu, mengikut piawaian ketukangan dan kualiti Bint Saeed.',
    strandAnswer:
      'Ya. Signature Strands Bint Saeed direka untuk melengkapi anting dan boleh dipasang pada abaya, gaun dan potongan jahitan Bint Saeed terpilih.',
    copper14k: 'Tembaga bebas nikel bersalut emas 14k',
    silhouetteLight: 'Siluet ringan direka untuk keselesaan sepanjang hari',
    drop55: 'Panjang drop: 5,5 cm (2,17 in)',
    leverback: 'Kaitan leverback pavé zirconia',
    brass18k: 'Loyang bersalut emas 18k',
    silhouetteElegant:
      'Siluet elegan dan ringan direka untuk keselesaan sepanjang hari',
    drop4: 'Panjang drop: 4 cm (1,57 in)',
    studPink: 'Stud zirconia merah jambu potongan pir',
    studClear: 'Stud zirconia jernih potongan pir',
    careFaq: JEWELLERY_CARE_FAQ_EARRING_EN,
    qRosette: 'Apakah Al Ain Rosette?',
    qNecklace: 'Adakah rantai leher yang sepadan?',
    qStrand: 'Adakah Signature Strand yang sepadan tersedia?',
    qIdentical: 'Adakah setiap pasangan sama?',
    qMade: 'Di manakah anting dihasilkan?',
    qGift: 'Adakah anting datang dalam pembungkusan hadiah?',
    qCare: 'Bagaimanakah saya harus menjaga anting saya?',
    madeFromQ: (n) => `Dari apakah ${n} dibuat?`,
    necklaceAnswer: (n) =>
      `Ya. ${n} direka untuk melengkapi anting dan mencipta set yang harmoni.`,
    giftAnswer: (n) =>
      `Ya. ${n} dipersembahkan dalam kotak hadiah signature Bint Saeed, sesuai untuk memberi dan menyimpan.`,
    coordinate: (n) =>
      `Direka untuk berkoordinasi dengan ${n} dan Signature Strands Bint Saeed`,
  },
}

type ProductLocaleCopy = {
  fullName: string
  necklaceName: string
  introParagraphs: string[]
  stoneFeatures: string[]
  madeFromAnswer: string[]
  family: 'oasis' | 'quaa'
  lapisExtras?: boolean
}

const PRODUCT_COPY: Record<EarringId, Record<SecondaryLocale, ProductLocaleCopy>> = {
  'al-ain-oasis-earrings-malachite': {
    it: {
      family: 'oasis',
      fullName: 'Orecchini Al Ain Oasis — Malachite',
      necklaceName: 'Collana Al Ain Oasis — Malachite',
      stoneFeatures: ['Vera malachite', 'Vera pietra di sole'],
      introParagraphs: [
        'Il tocco finale che riunisce ogni cosa.',
        'Alcuni pezzi completano un look. Altri diventano parte di come si viene ricordati.',
        'Gli Orecchini Al Ain Oasis — Malachite sono assemblati a mano ad Abu Dhabi, Emirati Arabi Uniti, unendo vere gemme di malachite e pietra di sole a una Al Ain Rosette intagliata a mano in corniola, ematite sfaccettata placcata oro che cattura la luce e zirconia brillante in rame nickel-free placcato oro 14k.',
        'Creati per accompagnare la Collana Al Ain Oasis in Malachite e i Signature Strands Bint Saeed, ogni pezzo appartiene a una collezione pensata per essere indossata insieme o custodita da sola. Il risultato è una gioielleria ponderata, versatile e inconfondibilmente Bint Saeed.',
        'Indossati con un’abaya fluida, un abito da sera raffinato o i pezzi quotidiani preferiti, gli Orecchini Al Ain Oasis portano calore, colore e artigianato a ogni look. Le proporzioni equilibrate lasciano emergere le gemme naturali restando abbastanza leggere da mattina a sera.',
        'Ogni gemma è naturalmente unica, con le proprie variazioni di colore, motivo e inclusioni. Assemblati con cura ad Abu Dhabi, questi orecchini sono un dono significativo per compleanni, Eid, lauree, anniversari o semplicemente per celebrare qualcuno di speciale.',
        'Abbastanza eleganti per le occasioni speciali. Abbastanza versatili per ogni giorno. Abbastanza distintivi da entrare nel vostro stile signature.',
      ],
      madeFromAnswer: [
        'Ogni paio unisce vere gemme di malachite e pietra di sole, una Al Ain Rosette intagliata a mano in corniola, ematite sfaccettata placcata oro e zirconia brillante in rame nickel-free placcato oro 14k, con chiusura leverback pavé di zirconia.',
        'Ogni gemma è naturalmente unica, con le proprie variazioni di colore, motivo e inclusioni, rendendo ogni paio unico nel suo genere.',
      ],
    },
    es: {
      family: 'oasis',
      fullName: 'Pendientes Al Ain Oasis — Malaquita',
      necklaceName: 'Collar Al Ain Oasis — Malaquita',
      stoneFeatures: ['Malaquita genuina', 'Piedra de sol genuina'],
      introParagraphs: [
        'El toque final que lo reúne todo.',
        'Algunas piezas completan un look. Otras se convierten en parte de cómo se te recuerda.',
        'Los Pendientes Al Ain Oasis — Malaquita se ensamblan a mano en Abu Dabi, Emiratos Árabes Unidos, combinando gemas genuinas de malaquita y piedra de sol con una Al Ain Rosette tallada a mano en cornalina, hematita facetada baño de oro que capta la luz y zirconia brillante en cobre libre de níquel baño de oro 14k.',
        'Creados para acompañar el Collar Al Ain Oasis en Malaquita y los Signature Strands Bint Saeed, cada pieza pertenece a una colección pensada para llevarse junta o atesorarse sola. El resultado es joyería reflexiva, versátil e inconfundiblemente Bint Saeed.',
        'Con una abaya fluida, un look de noche refinado o tus piezas cotidianas favoritas, los Pendientes Al Ain Oasis aportan calidez, color y oficio a cada look. Sus proporciones equilibradas permiten que las gemas naturales destaquen sin dejar de ser lo bastante ligeras para llevarlas de mañana a noche.',
        'Cada gema es naturalmente única, con sus propias variaciones de color, patrón e inclusiones. Ensamblados con cuidado en Abu Dabi, estos pendientes son un regalo significativo para cumpleaños, Eid, graduaciones, aniversarios o simplemente para celebrar a alguien especial.',
        'Lo bastante elegantes para ocasiones especiales. Lo bastante versátiles para cada día. Lo bastante distintivos para formar parte de tu estilo signature.',
      ],
      madeFromAnswer: [
        'Cada par combina gemas genuinas de malaquita y piedra de sol, una Al Ain Rosette tallada a mano en cornalina, hematita facetada baño de oro y zirconia brillante en cobre libre de níquel baño de oro 14k, con cierre leverback pavé de zirconia.',
        'Cada gema es naturalmente única, con sus propias variaciones de color, patrón e inclusiones, haciendo de cada par una pieza única.',
      ],
    },
    ru: {
      family: 'oasis',
      fullName: 'Серьги Al Ain Oasis — Малахит',
      necklaceName: 'Ожерелье Al Ain Oasis — Малахит',
      stoneFeatures: ['Настоящий малахит', 'Настоящий солнечный камень'],
      introParagraphs: [
        'Завершающий штрих, который собирает всё воедино.',
        'Одни вещи завершают образ. Другие становятся частью того, как вас запоминают.',
        'Серьги Al Ain Oasis — Малахит собираются вручную в Абу-Даби, ОАЭ, соединяя подлинные малахит и солнечный камень с резной сердоликовой Al Ain Rosette, гранёным позолоченным гематитом, ловящим свет, и сверкающим цирконием на никель-фри меди с покрытием 14k.',
        'Созданы сопровождать Ожерелье Al Ain Oasis в малахите и Signature Strands Bint Saeed: каждая вещь принадлежит коллекции, задуманной для совместного ношения или отдельного бережения. Результат — вдумчивая, многогранная и безошибочно Bint Saeed ювелирная работа.',
        'С текучей абаей, изысканным вечерним образом или любимыми повседневными вещами серьги Al Ain Oasis приносят тепло, цвет и мастерство в каждый образ. Уравновешенные пропорции позволяют натуральным камням звучать, оставаясь достаточно лёгкими с утра до вечера.',
        'Каждый самоцвет естественно уникален — со своими вариациями цвета, рисунка и включений. Собранные с заботой в Абу-Даби, эти серьги — значимый подарок на дни рождения, Ид, выпускные, годовщины или просто чтобы отметить особенного человека.',
        'Достаточно элегантны для особых случаев. Достаточно универсальны для каждого дня. Достаточно характерны, чтобы войти в ваш signature стиль.',
      ],
      madeFromAnswer: [
        'Каждая пара соединяет подлинные малахит и солнечный камень, резную сердоликовую Al Ain Rosette, гранёный позолоченный гематит и сверкающий цирконий на никель-фри меди с покрытием 14k, с рычажным замком с паве из циркония.',
        'Каждый самоцвет естественно уникален — со своими вариациями цвета, рисунка и включений, делая каждую пару единственной в своём роде.',
      ],
    },
    zh: {
      family: 'oasis',
      fullName: 'Al Ain Oasis 孔雀石耳环',
      necklaceName: 'Al Ain Oasis 孔雀石项链',
      stoneFeatures: ['天然孔雀石', '天然日光石'],
      introParagraphs: [
        '收束一切的那一笔。',
        '有些单品完成造型。另一些则成为人们记住你的方式。',
        'Al Ain Oasis 孔雀石耳环于阿联酋阿布扎比手工组装，将天然孔雀石与日光石，与手工雕刻的红玉髓 Al Ain Rosette、捕捉光线的镀金切面赤铁矿，以及镶于 14k 镀金无镍铜的明亮锆石相结合。',
        '为搭配孔雀石 Al Ain Oasis 项链与 Bint Saeed Signature Strands 而创；每件作品同属一套可成套佩戴、亦可单独珍藏的系列。结果是审慎、多变、且分明属于 Bint Saeed 的珠宝。',
        '无论搭配飘逸长袍、精致晚装或日常最爱，Al Ain Oasis 耳环都为每个造型带去温暖、色彩与工艺。均衡比例让天然宝石得以彰显，同时轻盈到可从早戴到晚。',
        '每颗宝石天生独特，带着各自的色彩、纹理与包裹体。于阿布扎比细心组装，适合作为生日、开斋节、毕业、周年纪念或单纯庆祝珍视之人的有意义礼物。',
        '足以应对特殊场合的优雅。足以陪伴日常的多变。足以成为你签名风格的一部分。',
      ],
      madeFromAnswer: [
        '每一对结合天然孔雀石与日光石、手工雕刻的红玉髓 Al Ain Rosette、镀金切面赤铁矿，以及镶于 14k 镀金无镍铜的明亮锆石，并以密镶锆石杠杆扣收束。',
        '每颗宝石天生独特，带着各自的色彩、纹理与包裹体，使每一对皆独一无二。',
      ],
    },
    de: {
      family: 'oasis',
      fullName: 'Al Ain Oasis Ohrringe — Malachit',
      necklaceName: 'Al Ain Oasis Halskette — Malachit',
      stoneFeatures: ['Echter Malachit', 'Echter Sonnenstein'],
      introParagraphs: [
        'Der letzte Schliff, der alles zusammenführt.',
        'Manche Stücke vollenden einen Look. Andere werden Teil dessen, wie man erinnert wird.',
        'Die Al Ain Oasis Ohrringe — Malachit werden in Abu Dhabi, Vereinigte Arabische Emirate, handmontiert und verbinden echten Malachit und Sonnenstein mit einer handgeschnitzten Karneol-Al-Ain-Rosette, facettiertem vergoldetem Hämatit, das das Licht einfängt, und brillanter Zirkonia in 14k goldplattiertem nickelfreiem Kupfer.',
        'Geschaffen zur Begleitung der Al Ain Oasis Halskette in Malachit und der Signature Strands Bint Saeed gehört jedes Stück zu einer Kollektion, die zusammen getragen oder für sich bewahrt werden darf. Das Ergebnis ist durchdachte, vielseitige und unverkennbar Bint Saeed Schmuckkunst.',
        'Mit fließender Abaya, raffiniertem Abendlook oder den liebsten Alltagsteilen bringen die Al Ain Oasis Ohrringe Wärme, Farbe und Handwerk in jeden Look. Ausgewogene Proportionen lassen die Natursteine hervortreten und bleiben leicht genug von morgens bis abends.',
        'Jeder Edelstein ist von Natur aus einzigartig — mit eigenen Variationen in Farbe, Muster und Einschlüssen. Sorgfältig in Abu Dhabi montiert, sind diese Ohrringe ein bedeutsames Geschenk zu Geburtstagen, Eid, Abschlüssen, Jahrestagen oder einfach, um jemanden Besonderes zu feiern.',
        'Elegant genug für besondere Anlässe. Vielseitig genug für jeden Tag. Charaktervoll genug, um Teil Ihres Signature-Stils zu werden.',
      ],
      madeFromAnswer: [
        'Jedes Paar verbindet echten Malachit und Sonnenstein, eine handgeschnitzte Karneol-Al-Ain-Rosette, facettiertes vergoldetes Hämatit und brillante Zirkonia in 14k goldplattiertem nickelfreiem Kupfer, mit Pavé-Zirkonia-Leverback.',
        'Jeder Edelstein ist von Natur aus einzigartig — mit eigenen Variationen in Farbe, Muster und Einschlüssen, sodass jedes Paar einzigartig ist.',
      ],
    },
    nl: {
      family: 'oasis',
      fullName: 'Al Ain Oasis oorbellen — Malachiet',
      necklaceName: 'Al Ain Oasis ketting — Malachiet',
      stoneFeatures: ['Echte malachiet', 'Echte zonsteen'],
      introParagraphs: [
        'De finishing touch die alles samenbrengt.',
        'Sommige stukken maken een look af. Andere worden deel van hoe men je herinnert.',
        'De Al Ain Oasis oorbellen — Malachiet worden met de hand gemonteerd in Abu Dhabi, Verenigde Arabische Emiraten, en combineren echte malachiet en zonsteen met een handgesneden carneool Al Ain Rosette, gefacetteerd verguld hematiet dat het licht vangt, en briljante zirconia in 14k verguld nikkelvrij koper.',
        'Gecreëerd om de Al Ain Oasis ketting in malachiet en de Signature Strands Bint Saeed te begeleiden, behoort elk stuk tot een collectie die samen gedragen of apart gekoesterd mag worden. Het resultaat is doordachte, veelzijdige en onmiskenbaar Bint Saeed sieradenkunst.',
        'Met een vloeiende abaya, een verfijnde avondlook of je favoriete alledaagse stukken brengen de Al Ain Oasis oorbellen warmte, kleur en vakmanschap in elke look. Gebalanceerde verhoudingen laten de natuurstenen uitkomen terwijl ze licht genoeg blijven van ochtend tot avond.',
        'Elke edelsteen is van nature uniek, met eigen variaties in kleur, patroon en inclusies. Zorgvuldig gemonteerd in Abu Dhabi zijn deze oorbellen een betekenisvol cadeau voor verjaardagen, Eid, diploma-uitreikingen, jubilea of gewoon om iemand bijzonders te vieren.',
        'Elegant genoeg voor speciale gelegenheden. Veelzijdig genoeg voor elke dag. Distinctief genoeg om deel van je signature stijl te worden.',
      ],
      madeFromAnswer: [
        'Elk paar combineert echte malachiet en zonsteen, een handgesneden carneool Al Ain Rosette, gefacetteerd verguld hematiet en briljante zirconia in 14k verguld nikkelvrij koper, met een pavé-zirconia leverback.',
        'Elke edelsteen is van nature uniek, met eigen variaties in kleur, patroon en inclusies, waardoor elk paar uniek is.',
      ],
    },
    pt: {
      family: 'oasis',
      fullName: 'Brincos Al Ain Oasis — Malaquite',
      necklaceName: 'Colar Al Ain Oasis — Malaquite',
      stoneFeatures: ['Malaquite genuína', 'Pedra do sol genuína'],
      introParagraphs: [
        'O toque final que reúne tudo.',
        'Algumas peças completam um look. Outras tornam-se parte da forma como se é lembrada.',
        'Os Brincos Al Ain Oasis — Malaquite são montados à mão em Abu Dhabi, Emirados Árabes Unidos, combinando gemas genuínas de malaquite e pedra do sol com uma Al Ain Rosette esculpida à mão em cornalina, hematite facetada banho de ouro que capta a luz e zirconia brilhante em cobre sem níquel banho de ouro 14k.',
        'Criados para acompanhar o Colar Al Ain Oasis em Malaquite e os Signature Strands Bint Saeed, cada peça pertence a uma coleção pensada para ser usada em conjunto ou guardada sozinha. O resultado é joalharia ponderada, versátil e inconfundivelmente Bint Saeed.',
        'Com uma abaya fluida, um look de noite refinado ou as suas peças do dia a dia preferidas, os Brincos Al Ain Oasis trazem calor, cor e ofício a cada look. As proporções equilibradas permitem que as gemas naturais se destaquem, permanecendo leves o suficiente da manhã à noite.',
        'Cada gema é naturalmente única, com as suas próprias variações de cor, padrão e inclusões. Montados com cuidado em Abu Dhabi, estes brincos são um presente significativo para aniversários, Eid, formaturas, aniversários de casamento ou simplesmente para celebrar alguém especial.',
        'Elegantes o suficiente para ocasiões especiais. Versáteis o suficiente para cada dia. Distintivos o suficiente para se tornarem parte do seu estilo signature.',
      ],
      madeFromAnswer: [
        'Cada par combina gemas genuínas de malaquite e pedra do sol, uma Al Ain Rosette esculpida à mão em cornalina, hematite facetada banho de ouro e zirconia brilhante em cobre sem níquel banho de ouro 14k, com fecho leverback pavé de zirconia.',
        'Cada gema é naturalmente única, com as suas próprias variações de cor, padrão e inclusões, tornando cada par único no seu género.',
      ],
    },
    id: {
      family: 'oasis',
      fullName: 'Anting Al Ain Oasis — Malakit',
      necklaceName: 'Kalung Al Ain Oasis — Malakit',
      stoneFeatures: ['Malakit asli', 'Batu matahari asli'],
      introParagraphs: [
        'Sentuhan akhir yang menyatukan semuanya.',
        'Beberapa karya menyelesaikan sebuah look. Yang lain menjadi bagian dari cara Anda dikenang.',
        'Anting Al Ain Oasis — Malakit dirakit tangan di Abu Dhabi, Uni Emirat Arab, menggabungkan malakit dan batu matahari asli dengan Al Ain Rosette karnelian ukiran tangan, hematit berfaset berlapis emas yang menangkap cahaya, dan zirconia cemerlang pada tembaga bebas nikel berlapis emas 14k.',
        'Diciptakan untuk menemani Kalung Al Ain Oasis ber-malakit dan Signature Strands Bint Saeed; setiap karya milik koleksi yang dirancang untuk dipakai bersama atau disayangi sendiri. Hasilnya adalah perhiasan yang dipertimbangkan, serbaguna, dan jelas Bint Saeed.',
        'Dengan abaya mengalir, look malam yang halus, atau potongan sehari-hari favorit, Anting Al Ain Oasis membawa kehangatan, warna, dan ketukangan ke setiap look. Proporsi yang seimbang membiarkan batu alam menonjol sambil tetap cukup ringan dari pagi hingga malam.',
        'Setiap batu permata secara alami unik, dengan variasi warna, pola, dan inklusi sendiri. Dirakit dengan teliti di Abu Dhabi, anting ini menjadi hadiah bermakna untuk ulang tahun, Idul Fitri, wisuda, hari jadi, atau sekadar merayakan seseorang yang istimewa.',
        'Cukup elegan untuk kesempatan khusus. Cukup serbaguna untuk setiap hari. Cukup khas untuk menjadi bagian dari gaya signature Anda.',
      ],
      madeFromAnswer: [
        'Setiap pasangan menggabungkan malakit dan batu matahari asli, Al Ain Rosette karnelian ukiran tangan, hematit berfaset berlapis emas, dan zirconia cemerlang pada tembaga bebas nikel berlapis emas 14k, dengan kaitan leverback pavé zirconia.',
        'Setiap batu permata secara alami unik, dengan variasi warna, pola, dan inklusi sendiri, menjadikan setiap pasangan satu-satunya.',
      ],
    },
    ms: {
      family: 'oasis',
      fullName: 'Anting Al Ain Oasis — Malakit',
      necklaceName: 'Rantai leher Al Ain Oasis — Malakit',
      stoneFeatures: ['Malakit tulen', 'Batu matahari tulen'],
      introParagraphs: [
        'Sentuhan akhir yang menyatukan segalanya.',
        'Sesetengah karya melengkapkan look. Yang lain menjadi sebahagian daripada cara anda dikenang.',
        'Anting Al Ain Oasis — Malakit dipasang tangan di Abu Dhabi, Emiriah Arab Bersatu, menggabungkan malakit dan batu matahari tulen dengan Al Ain Rosette karnelian ukiran tangan, hematit berfaset bersalut emas yang menangkap cahaya, dan zirconia cemerlang pada tembaga bebas nikel bersalut emas 14k.',
        'Dicipta untuk menemani Rantai leher Al Ain Oasis ber-malakit dan Signature Strands Bint Saeed; setiap karya milik koleksi yang direka untuk dipakai bersama atau disayangi sendiri. Hasilnya ialah barang kemas yang dipertimbangkan, serba boleh dan jelas Bint Saeed.',
        'Dengan abaya mengalir, look malam yang halus, atau potongan harian kegemaran, Anting Al Ain Oasis membawa kehangatan, warna dan ketukangan ke setiap look. Nisbah yang seimbang membiarkan batu semula jadi menonjol sambil kekal cukup ringan dari pagi hingga malam.',
        'Setiap batu permata secara semula jadi unik, dengan variasi warna, corak dan inklusi sendiri. Dipasang dengan teliti di Abu Dhabi, anting ini menjadi hadiah bermakna untuk hari jadi, Aidilfitri, konvokesyen, ulang tahun, atau sekadar meraikan seseorang yang istimewa.',
        'Cukup elegan untuk majlis khas. Cukup serba boleh untuk setiap hari. Cukup tersendiri untuk menjadi sebahagian daripada gaya signature anda.',
      ],
      madeFromAnswer: [
        'Setiap pasangan menggabungkan malakit dan batu matahari tulen, Al Ain Rosette karnelian ukiran tangan, hematit berfaset bersalut emas, dan zirconia cemerlang pada tembaga bebas nikel bersalut emas 14k, dengan kaitan leverback pavé zirconia.',
        'Setiap batu permata secara semula jadi unik, dengan variasi warna, corak dan inklusi sendiri, menjadikan setiap pasangan satu-satunya.',
      ],
    },
  },

  'al-ain-oasis-earrings-orange-jade': {
    it: {
      family: 'oasis',
      fullName: 'Orecchini Al Ain Oasis — Giada arancio',
      necklaceName: 'Collana Al Ain Oasis — Giada arancio',
      stoneFeatures: ['Vera giada arancio', 'Vera pietra di sole'],
      introParagraphs: [
        'Il tocco finale che riunisce ogni cosa.',
        'Alcuni pezzi completano un look. Altri diventano parte di come si viene ricordati.',
        'Gli Orecchini Al Ain Oasis — Giada arancio sono assemblati a mano ad Abu Dhabi, Emirati Arabi Uniti, unendo vere gemme di giada arancio e pietra di sole a una Al Ain Rosette intagliata a mano in corniola, ematite sfaccettata placcata oro che cattura la luce e zirconia brillante in rame nickel-free placcato oro 14k.',
        'Creati per accompagnare la Collana Al Ain Oasis in Giada arancio e i Signature Strands Bint Saeed, ogni pezzo appartiene a una collezione pensata per essere indossata insieme o custodita da sola. Il risultato è una gioielleria ponderata, versatile e inconfondibilmente Bint Saeed.',
        'Indossati con un’abaya fluida, un abito da sera raffinato o i pezzi quotidiani preferiti, gli Orecchini Al Ain Oasis portano calore, colore e artigianato a ogni look. I ricchi toni arancio della giada sono completati dal naturale scintillio della pietra di sole, in una composizione ispirata al paesaggio desertico caldo intorno alla storica città oasi di Al Ain.',
        'Ogni gemma è naturalmente unica, con le proprie variazioni di colore, motivo e inclusioni. Assemblati con cura ad Abu Dhabi, questi orecchini sono un dono significativo per compleanni, Eid, lauree, anniversari o semplicemente per celebrare qualcuno di speciale.',
        'Abbastanza eleganti per le occasioni speciali. Abbastanza versatili per ogni giorno. Abbastanza distintivi da entrare nel vostro stile signature.',
      ],
      madeFromAnswer: [
        'Ogni paio unisce vere gemme di giada arancio e pietra di sole, una Al Ain Rosette intagliata a mano in corniola, ematite sfaccettata placcata oro e zirconia brillante in rame nickel-free placcato oro 14k, con chiusura leverback pavé di zirconia.',
        'Ogni gemma è naturalmente unica, con le proprie variazioni di colore, motivo e inclusioni, rendendo ogni paio unico nel suo genere.',
      ],
    },
    es: {
      family: 'oasis',
      fullName: 'Pendientes Al Ain Oasis — Jade naranja',
      necklaceName: 'Collar Al Ain Oasis — Jade naranja',
      stoneFeatures: ['Jade naranja genuino', 'Piedra de sol genuina'],
      introParagraphs: [
        'El toque final que lo reúne todo.',
        'Algunas piezas completan un look. Otras se convierten en parte de cómo se te recuerda.',
        'Los Pendientes Al Ain Oasis — Jade naranja se ensamblan a mano en Abu Dabi, Emiratos Árabes Unidos, combinando gemas genuinas de jade naranja y piedra de sol con una Al Ain Rosette tallada a mano en cornalina, hematita facetada baño de oro que capta la luz y zirconia brillante en cobre libre de níquel baño de oro 14k.',
        'Creados para acompañar el Collar Al Ain Oasis en Jade naranja y los Signature Strands Bint Saeed, cada pieza pertenece a una colección pensada para llevarse junta o atesorarse sola. El resultado es joyería reflexiva, versátil e inconfundiblemente Bint Saeed.',
        'Con una abaya fluida, un look de noche refinado o tus piezas cotidianas favoritas, los Pendientes Al Ain Oasis aportan calidez, color y oficio a cada look. Los ricos tonos naranja del jade se complementan con el brillo natural de la piedra de sol, en una composición inspirada en el cálido paisaje desértico que rodea la histórica ciudad oasis de Al Ain.',
        'Cada gema es naturalmente única, con sus propias variaciones de color, patrón e inclusiones. Ensamblados con cuidado en Abu Dabi, estos pendientes son un regalo significativo para cumpleaños, Eid, graduaciones, aniversarios o simplemente para celebrar a alguien especial.',
        'Lo bastante elegantes para ocasiones especiales. Lo bastante versátiles para cada día. Lo bastante distintivos para formar parte de tu estilo signature.',
      ],
      madeFromAnswer: [
        'Cada par combina gemas genuinas de jade naranja y piedra de sol, una Al Ain Rosette tallada a mano en cornalina, hematita facetada baño de oro y zirconia brillante en cobre libre de níquel baño de oro 14k, con cierre leverback pavé de zirconia.',
        'Cada gema es naturalmente única, con sus propias variaciones de color, patrón e inclusiones, haciendo de cada par una pieza única.',
      ],
    },
    ru: {
      family: 'oasis',
      fullName: 'Серьги Al Ain Oasis — Оранжевый нефрит',
      necklaceName: 'Ожерелье Al Ain Oasis — Оранжевый нефрит',
      stoneFeatures: ['Настоящий оранжевый нефрит', 'Настоящий солнечный камень'],
      introParagraphs: [
        'Завершающий штрих, который собирает всё воедино.',
        'Одни вещи завершают образ. Другие становятся частью того, как вас запоминают.',
        'Серьги Al Ain Oasis — Оранжевый нефрит собираются вручную в Абу-Даби, ОАЭ, соединяя подлинные оранжевый нефрит и солнечный камень с резной сердоликовой Al Ain Rosette, гранёным позолоченным гематитом, ловящим свет, и сверкающим цирконием на никель-фри меди с покрытием 14k.',
        'Созданы сопровождать Ожерелье Al Ain Oasis в оранжевом нефрите и Signature Strands Bint Saeed: каждая вещь принадлежит коллекции, задуманной для совместного ношения или отдельного бережения. Результат — вдумчивая, многогранная и безошибочно Bint Saeed ювелирная работа.',
        'С текучей абаей, изысканным вечерним образом или любимыми повседневными вещами серьги Al Ain Oasis приносят тепло, цвет и мастерство в каждый образ. Богатые оранжевые тона нефрита дополняются природным сверканием солнечного камня — композиция, вдохновлённая тёплым пустынным пейзажем вокруг исторического оазисного города Аль-Айн.',
        'Каждый самоцвет естественно уникален — со своими вариациями цвета, рисунка и включений. Собранные с заботой в Абу-Даби, эти серьги — значимый подарок на дни рождения, Ид, выпускные, годовщины или просто чтобы отметить особенного человека.',
        'Достаточно элегантны для особых случаев. Достаточно универсальны для каждого дня. Достаточно характерны, чтобы войти в ваш signature стиль.',
      ],
      madeFromAnswer: [
        'Каждая пара соединяет подлинные оранжевый нефрит и солнечный камень, резную сердоликовую Al Ain Rosette, гранёный позолоченный гематит и сверкающий цирконий на никель-фри меди с покрытием 14k, с рычажным замком с паве из циркония.',
        'Каждый самоцвет естественно уникален — со своими вариациями цвета, рисунка и включений, делая каждую пару единственной в своём роде.',
      ],
    },
    zh: {
      family: 'oasis',
      fullName: 'Al Ain Oasis 橙玉耳环',
      necklaceName: 'Al Ain Oasis 橙玉项链',
      stoneFeatures: ['天然橙玉', '天然日光石'],
      introParagraphs: [
        '收束一切的那一笔。',
        '有些单品完成造型。另一些则成为人们记住你的方式。',
        'Al Ain Oasis 橙玉耳环于阿联酋阿布扎比手工组装，将天然橙玉与日光石，与手工雕刻的红玉髓 Al Ain Rosette、捕捉光线的镀金切面赤铁矿，以及镶于 14k 镀金无镍铜的明亮锆石相结合。',
        '为搭配橙玉 Al Ain Oasis 项链与 Bint Saeed Signature Strands 而创；每件作品同属一套可成套佩戴、亦可单独珍藏的系列。结果是审慎、多变、且分明属于 Bint Saeed 的珠宝。',
        '无论搭配飘逸长袍、精致晚装或日常最爱，Al Ain Oasis 耳环都为每个造型带去温暖、色彩与工艺。橙玉的浓郁暖调与日光石的天然闪烁相得益彰，构图灵感来自围绕历史绿洲之城艾因的温暖沙漠景致。',
        '每颗宝石天生独特，带着各自的色彩、纹理与包裹体。于阿布扎比细心组装，适合作为生日、开斋节、毕业、周年纪念或单纯庆祝珍视之人的有意义礼物。',
        '足以应对特殊场合的优雅。足以陪伴日常的多变。足以成为你签名风格的一部分。',
      ],
      madeFromAnswer: [
        '每一对结合天然橙玉与日光石、手工雕刻的红玉髓 Al Ain Rosette、镀金切面赤铁矿，以及镶于 14k 镀金无镍铜的明亮锆石，并以密镶锆石杠杆扣收束。',
        '每颗宝石天生独特，带着各自的色彩、纹理与包裹体，使每一对皆独一无二。',
      ],
    },
    de: {
      family: 'oasis',
      fullName: 'Al Ain Oasis Ohrringe — Orange Jade',
      necklaceName: 'Al Ain Oasis Halskette — Orange Jade',
      stoneFeatures: ['Echte orangefarbene Jade', 'Echter Sonnenstein'],
      introParagraphs: [
        'Der letzte Schliff, der alles zusammenführt.',
        'Manche Stücke vollenden einen Look. Andere werden Teil dessen, wie man erinnert wird.',
        'Die Al Ain Oasis Ohrringe — Orange Jade werden in Abu Dhabi, Vereinigte Arabische Emirate, handmontiert und verbinden echte orangefarbene Jade und Sonnenstein mit einer handgeschnitzten Karneol-Al-Ain-Rosette, facettiertem vergoldetem Hämatit, das das Licht einfängt, und brillanter Zirkonia in 14k goldplattiertem nickelfreiem Kupfer.',
        'Geschaffen zur Begleitung der Al Ain Oasis Halskette in orangefarbener Jade und der Signature Strands Bint Saeed gehört jedes Stück zu einer Kollektion, die zusammen getragen oder für sich bewahrt werden darf. Das Ergebnis ist durchdachte, vielseitige und unverkennbar Bint Saeed Schmuckkunst.',
        'Mit fließender Abaya, raffiniertem Abendlook oder den liebsten Alltagsteilen bringen die Al Ain Oasis Ohrringe Wärme, Farbe und Handwerk in jeden Look. Die reichen Orangetöne der Jade werden vom natürlichen Funkeln des Sonnensteins ergänzt — eine Komposition, inspiriert von der warmen Wüstenlandschaft um die historische Oasenstadt Al Ain.',
        'Jeder Edelstein ist von Natur aus einzigartig — mit eigenen Variationen in Farbe, Muster und Einschlüssen. Sorgfältig in Abu Dhabi montiert, sind diese Ohrringe ein bedeutsames Geschenk zu Geburtstagen, Eid, Abschlüssen, Jahrestagen oder einfach, um jemanden Besonderes zu feiern.',
        'Elegant genug für besondere Anlässe. Vielseitig genug für jeden Tag. Charaktervoll genug, um Teil Ihres Signature-Stils zu werden.',
      ],
      madeFromAnswer: [
        'Jedes Paar verbindet echte orangefarbene Jade und Sonnenstein, eine handgeschnitzte Karneol-Al-Ain-Rosette, facettiertes vergoldetes Hämatit und brillante Zirkonia in 14k goldplattiertem nickelfreiem Kupfer, mit Pavé-Zirkonia-Leverback.',
        'Jeder Edelstein ist von Natur aus einzigartig — mit eigenen Variationen in Farbe, Muster und Einschlüssen, sodass jedes Paar einzigartig ist.',
      ],
    },
    nl: {
      family: 'oasis',
      fullName: 'Al Ain Oasis oorbellen — Oranje jade',
      necklaceName: 'Al Ain Oasis ketting — Oranje jade',
      stoneFeatures: ['Echte oranje jade', 'Echte zonsteen'],
      introParagraphs: [
        'De finishing touch die alles samenbrengt.',
        'Sommige stukken maken een look af. Andere worden deel van hoe men je herinnert.',
        'De Al Ain Oasis oorbellen — Oranje jade worden met de hand gemonteerd in Abu Dhabi, Verenigde Arabische Emiraten, en combineren echte oranje jade en zonsteen met een handgesneden carneool Al Ain Rosette, gefacetteerd verguld hematiet dat het licht vangt, en briljante zirconia in 14k verguld nikkelvrij koper.',
        'Gecreëerd om de Al Ain Oasis ketting in oranje jade en de Signature Strands Bint Saeed te begeleiden, behoort elk stuk tot een collectie die samen gedragen of apart gekoesterd mag worden. Het resultaat is doordachte, veelzijdige en onmiskenbaar Bint Saeed sieradenkunst.',
        'Met een vloeiende abaya, een verfijnde avondlook of je favoriete alledaagse stukken brengen de Al Ain Oasis oorbellen warmte, kleur en vakmanschap in elke look. De rijke oranje tinten van de jade worden aangevuld door de natuurlijke schittering van zonsteen — een compositie geïnspireerd door het warme woestijnlandschap rond de historische oasestad Al Ain.',
        'Elke edelsteen is van nature uniek, met eigen variaties in kleur, patroon en inclusies. Zorgvuldig gemonteerd in Abu Dhabi zijn deze oorbellen een betekenisvol cadeau voor verjaardagen, Eid, diploma-uitreikingen, jubilea of gewoon om iemand bijzonders te vieren.',
        'Elegant genoeg voor speciale gelegenheden. Veelzijdig genoeg voor elke dag. Distinctief genoeg om deel van je signature stijl te worden.',
      ],
      madeFromAnswer: [
        'Elk paar combineert echte oranje jade en zonsteen, een handgesneden carneool Al Ain Rosette, gefacetteerd verguld hematiet en briljante zirconia in 14k verguld nikkelvrij koper, met een pavé-zirconia leverback.',
        'Elke edelsteen is van nature uniek, met eigen variaties in kleur, patroon en inclusies, waardoor elk paar uniek is.',
      ],
    },
    pt: {
      family: 'oasis',
      fullName: 'Brincos Al Ain Oasis — Jade laranja',
      necklaceName: 'Colar Al Ain Oasis — Jade laranja',
      stoneFeatures: ['Jade laranja genuína', 'Pedra do sol genuína'],
      introParagraphs: [
        'O toque final que reúne tudo.',
        'Algumas peças completam um look. Outras tornam-se parte da forma como se é lembrada.',
        'Os Brincos Al Ain Oasis — Jade laranja são montados à mão em Abu Dhabi, Emirados Árabes Unidos, combinando gemas genuínas de jade laranja e pedra do sol com uma Al Ain Rosette esculpida à mão em cornalina, hematite facetada banho de ouro que capta a luz e zirconia brilhante em cobre sem níquel banho de ouro 14k.',
        'Criados para acompanhar o Colar Al Ain Oasis em Jade laranja e os Signature Strands Bint Saeed, cada peça pertence a uma coleção pensada para ser usada em conjunto ou guardada sozinha. O resultado é joalharia ponderada, versátil e inconfundivelmente Bint Saeed.',
        'Com uma abaya fluida, um look de noite refinado ou as suas peças do dia a dia preferidas, os Brincos Al Ain Oasis trazem calor, cor e ofício a cada look. Os ricos tons laranja do jade são complementados pelo brilho natural da pedra do sol, numa composição inspirada na paisagem desértica quente em torno da histórica cidade oásis de Al Ain.',
        'Cada gema é naturalmente única, com as suas próprias variações de cor, padrão e inclusões. Montados com cuidado em Abu Dhabi, estes brincos são um presente significativo para aniversários, Eid, formaturas, aniversários de casamento ou simplesmente para celebrar alguém especial.',
        'Elegantes o suficiente para ocasiões especiais. Versáteis o suficiente para cada dia. Distintivos o suficiente para se tornarem parte do seu estilo signature.',
      ],
      madeFromAnswer: [
        'Cada par combina gemas genuínas de jade laranja e pedra do sol, uma Al Ain Rosette esculpida à mão em cornalina, hematite facetada banho de ouro e zirconia brilhante em cobre sem níquel banho de ouro 14k, com fecho leverback pavé de zirconia.',
        'Cada gema é naturalmente única, com as suas próprias variações de cor, padrão e inclusões, tornando cada par único no seu género.',
      ],
    },
    id: {
      family: 'oasis',
      fullName: 'Anting Al Ain Oasis — Jade oranye',
      necklaceName: 'Kalung Al Ain Oasis — Jade oranye',
      stoneFeatures: ['Jade berwarna oranye asli', 'Batu matahari asli'],
      introParagraphs: [
        'Sentuhan akhir yang menyatukan semuanya.',
        'Beberapa karya menyelesaikan sebuah look. Yang lain menjadi bagian dari cara Anda dikenang.',
        'Anting Al Ain Oasis — Jade oranye dirakit tangan di Abu Dhabi, Uni Emirat Arab, menggabungkan jade berwarna oranye dan batu matahari asli dengan Al Ain Rosette karnelian ukiran tangan, hematit berfaset berlapis emas yang menangkap cahaya, dan zirconia cemerlang pada tembaga bebas nikel berlapis emas 14k.',
        'Diciptakan untuk menemani Kalung Al Ain Oasis ber-jade oranye dan Signature Strands Bint Saeed; setiap karya milik koleksi yang dirancang untuk dipakai bersama atau disayangi sendiri. Hasilnya adalah perhiasan yang dipertimbangkan, serbaguna, dan jelas Bint Saeed.',
        'Dengan abaya mengalir, look malam yang halus, atau potongan sehari-hari favorit, Anting Al Ain Oasis membawa kehangatan, warna, dan ketukangan ke setiap look. Nada oranye kaya pada jade dilengkapi kilau alami batu matahari — komposisi yang terinspirasi lanskap gurun hangat di sekitar kota oasis bersejarah Al Ain.',
        'Setiap batu permata secara alami unik, dengan variasi warna, pola, dan inklusi sendiri. Dirakit dengan teliti di Abu Dhabi, anting ini menjadi hadiah bermakna untuk ulang tahun, Idul Fitri, wisuda, hari jadi, atau sekadar merayakan seseorang yang istimewa.',
        'Cukup elegan untuk kesempatan khusus. Cukup serbaguna untuk setiap hari. Cukup khas untuk menjadi bagian dari gaya signature Anda.',
      ],
      madeFromAnswer: [
        'Setiap pasangan menggabungkan jade berwarna oranye dan batu matahari asli, Al Ain Rosette karnelian ukiran tangan, hematit berfaset berlapis emas, dan zirconia cemerlang pada tembaga bebas nikel berlapis emas 14k, dengan kaitan leverback pavé zirconia.',
        'Setiap batu permata secara alami unik, dengan variasi warna, pola, dan inklusi sendiri, menjadikan setiap pasangan satu-satunya.',
      ],
    },
    ms: {
      family: 'oasis',
      fullName: 'Anting Al Ain Oasis — Jed oren',
      necklaceName: 'Rantai leher Al Ain Oasis — Jed oren',
      stoneFeatures: ['Jed berwarna oren tulen', 'Batu matahari tulen'],
      introParagraphs: [
        'Sentuhan akhir yang menyatukan segalanya.',
        'Sesetengah karya melengkapkan look. Yang lain menjadi sebahagian daripada cara anda dikenang.',
        'Anting Al Ain Oasis — Jed oren dipasang tangan di Abu Dhabi, Emiriah Arab Bersatu, menggabungkan jed berwarna oren dan batu matahari tulen dengan Al Ain Rosette karnelian ukiran tangan, hematit berfaset bersalut emas yang menangkap cahaya, dan zirconia cemerlang pada tembaga bebas nikel bersalut emas 14k.',
        'Dicipta untuk menemani Rantai leher Al Ain Oasis ber-jed oren dan Signature Strands Bint Saeed; setiap karya milik koleksi yang direka untuk dipakai bersama atau disayangi sendiri. Hasilnya ialah barang kemas yang dipertimbangkan, serba boleh dan jelas Bint Saeed.',
        'Dengan abaya mengalir, look malam yang halus, atau potongan harian kegemaran, Anting Al Ain Oasis membawa kehangatan, warna dan ketukangan ke setiap look. Nada oren kaya pada jed dilengkapi kilauan semula jadi batu matahari — komposisi yang diilhamkan oleh lanskap gurun hangat di sekitar bandar oasis bersejarah Al Ain.',
        'Setiap batu permata secara semula jadi unik, dengan variasi warna, corak dan inklusi sendiri. Dipasang dengan teliti di Abu Dhabi, anting ini menjadi hadiah bermakna untuk hari jadi, Aidilfitri, konvokesyen, ulang tahun, atau sekadar meraikan seseorang yang istimewa.',
        'Cukup elegan untuk majlis khas. Cukup serba boleh untuk setiap hari. Cukup tersendiri untuk menjadi sebahagian daripada gaya signature anda.',
      ],
      madeFromAnswer: [
        'Setiap pasangan menggabungkan jed berwarna oren dan batu matahari tulen, Al Ain Rosette karnelian ukiran tangan, hematit berfaset bersalut emas, dan zirconia cemerlang pada tembaga bebas nikel bersalut emas 14k, dengan kaitan leverback pavé zirconia.',
        'Setiap batu permata secara semula jadi unik, dengan variasi warna, corak dan inklusi sendiri, menjadikan setiap pasangan satu-satunya.',
      ],
    },
  },

  'al-quaa-earrings-rose-quartz': {
    it: {
      family: 'quaa',
      fullName: 'Orecchini Al Quaa — Quarzo rosa',
      necklaceName: 'Collana Al Ain Oasis — Quarzo rosa',
      stoneFeatures: ['Vere gemme di quarzo rosa'],
      introParagraphs: [
        'Il tocco finale che riunisce ogni cosa.',
        'Gli Orecchini Al Quaa — Quarzo rosa sono pensati per le donne che sanno che i dettagli più piccoli lasciano spesso l’impressione più forte. Assemblati a mano ad Abu Dhabi, Emirati Arabi Uniti, ogni paio unisce vere gemme di quarzo rosa, una Al Ain Rosette intagliata a mano in corniola, perle di ematite sfaccettata placcata oro che catturano la luce e delicata zirconia rosa in ottone placcato oro 18k.',
        'Concepiti per coordinarsi senza sforzo con la Collana Al Ain Oasis in Quarzo rosa e i Signature Strands Bint Saeed, ogni pezzo è creato per completare il successivo, rendendo naturale costruire nel tempo una collezione gioielli armoniosa. Indossati con un’abaya Bint Saeed o con i pezzi quotidiani preferiti, questi orecchini in pietra naturale portano calore, artigianato ed eleganza senza tempo a ogni look.',
        'Ogni gemma naturale è unica, con il proprio colore, motivo e inclusioni, rendendo ogni paio unico nel suo genere. Assemblati con cura ad Abu Dhabi, sono un dono significativo per compleanni, Eid, lauree, anniversari o semplicemente per celebrare qualcuno di speciale.',
        'Abbastanza eleganti per le occasioni speciali. Abbastanza versatili per il quotidiano. Abbastanza distintivi da restare impressi.',
      ],
      madeFromAnswer: [
        'Ogni paio unisce vere gemme di quarzo rosa, una Al Ain Rosette intagliata a mano in corniola, perle di ematite sfaccettata placcata oro e un perno in zirconia rosa taglio a pera in ottone placcato oro 18k.',
        'Ogni gemma naturale è unica, con il proprio colore, motivo e inclusioni, rendendo ogni paio unico nel suo genere.',
      ],
    },
    es: {
      family: 'quaa',
      fullName: 'Pendientes Al Quaa — Cuarzo rosa',
      necklaceName: 'Collar Al Ain Oasis — Cuarzo rosa',
      stoneFeatures: ['Gemas genuinas de cuarzo rosa'],
      introParagraphs: [
        'El toque final que lo reúne todo.',
        'Los Pendientes Al Quaa — Cuarzo rosa están pensados para mujeres que saben que los detalles más pequeños suelen dejar la impresión más fuerte. Ensamblados a mano en Abu Dabi, Emiratos Árabes Unidos, cada par combina gemas genuinas de cuarzo rosa, una Al Ain Rosette tallada a mano en cornalina, cuentas de hematita facetada baño de oro que captan la luz y delicada zirconia rosa en latón baño de oro 18k.',
        'Diseñados para coordinar con facilidad con el Collar Al Ain Oasis en Cuarzo rosa y los Signature Strands Bint Saeed, cada pieza se crea para complementar la siguiente, facilitando construir con el tiempo una colección de joyería armoniosa. Con una abaya Bint Saeed o tus piezas cotidianas favoritas, estos pendientes de piedra natural aportan calidez, oficio y elegancia atemporal a cada look.',
        'Cada gema natural es única, con su propio color, patrón e inclusiones, haciendo de cada par una pieza única. Ensamblados con cuidado en Abu Dabi, son un regalo significativo para cumpleaños, Eid, graduaciones, aniversarios o simplemente para celebrar a alguien especial.',
        'Lo bastante elegantes para ocasiones especiales. Lo bastante versátiles para el día a día. Lo bastante distintivos para ser recordados.',
      ],
      madeFromAnswer: [
        'Cada par combina gemas genuinas de cuarzo rosa, una Al Ain Rosette tallada a mano en cornalina, cuentas de hematita facetada baño de oro y un pendiente en zirconia rosa talla pera en latón baño de oro 18k.',
        'Cada gema natural es única, con su propio color, patrón e inclusiones, haciendo de cada par una pieza única.',
      ],
    },
    ru: {
      family: 'quaa',
      fullName: 'Серьги Al Quaa — Розовый кварц',
      necklaceName: 'Ожерелье Al Ain Oasis — Розовый кварц',
      stoneFeatures: ['Подлинные камни розового кварца'],
      introParagraphs: [
        'Завершающий штрих, который собирает всё воедино.',
        'Серьги Al Quaa — Розовый кварц созданы для женщин, которые понимают: самые малые детали часто оставляют самое сильное впечатление. Собранные вручную в Абу-Даби, ОАЭ, каждая пара соединяет подлинный розовый кварц, резную сердоликовую Al Ain Rosette, бусины гранёного позолоченного гематита, ловящие свет, и нежный розовый цирконий на латуни с покрытием 18k.',
        'Задуманы для лёгкого сочетания с Ожерельем Al Ain Oasis в розовом кварце и Signature Strands Bint Saeed: каждая вещь создана дополнять следующую, помогая со временем собрать гармоничную ювелирную коллекцию. С абаей Bint Saeed или любимыми повседневными вещами эти серьги из натурального камня приносят тепло, мастерство и вневременную элегантность в каждый образ.',
        'Каждый натуральный самоцвет уникален — со своим цветом, рисунком и включениями, делая каждую пару единственной в своём роде. Собранные с заботой в Абу-Даби, они — значимый подарок на дни рождения, Ид, выпускные, годовщины или просто чтобы отметить особенного человека.',
        'Достаточно элегантны для особых случаев. Достаточно универсальны для повседневности. Достаточно характерны, чтобы их запомнили.',
      ],
      madeFromAnswer: [
        'Каждая пара соединяет подлинный розовый кварц, резную сердоликовую Al Ain Rosette, бусины гранёного позолоченного гематита и штифт из розового циркония грушевидной огранки на латуни с покрытием 18k.',
        'Каждый натуральный самоцвет уникален — со своим цветом, рисунком и включениями, делая каждую пару единственной в своём роде.',
      ],
    },
    zh: {
      family: 'quaa',
      fullName: 'Al Quaa 粉晶耳环',
      necklaceName: 'Al Ain Oasis 粉晶项链',
      stoneFeatures: ['天然粉晶宝石'],
      introParagraphs: [
        '收束一切的那一笔。',
        'Al Quaa 粉晶耳环为懂得最小细节往往留下最深印象的女性而设。于阿联酋阿布扎比手工组装，每一对结合天然粉晶、手工雕刻的红玉髓 Al Ain Rosette、捕捉光线的镀金切面赤铁矿珠，以及镶于 18k 镀金黄铜的精致粉锆石。',
        '旨在轻松与粉晶 Al Ain Oasis 项链及 Bint Saeed Signature Strands 协调；每件作品为下一件而互补，便于随时间建立和谐的珠宝收藏。无论搭配 Bint Saeed 长袍或日常最爱，这些天然石耳环都为每个造型带去温暖、工艺与不朽优雅。',
        '每颗天然宝石皆独特，带着各自的色彩、纹理与包裹体，使每一对皆独一无二。于阿布扎比细心组装，适合作为生日、开斋节、毕业、周年纪念或单纯庆祝珍视之人的有意义礼物。',
        '足以应对特殊场合的优雅。足以陪伴日常的多变。足以被铭记的独特。',
      ],
      madeFromAnswer: [
        '每一对结合天然粉晶、手工雕刻的红玉髓 Al Ain Rosette、镀金切面赤铁矿珠，以及镶于 18k 镀金黄铜的梨形粉锆石耳钉。',
        '每颗天然宝石皆独特，带着各自的色彩、纹理与包裹体，使每一对皆独一无二。',
      ],
    },
    de: {
      family: 'quaa',
      fullName: 'Al Quaa Ohrringe — Rosenquarz',
      necklaceName: 'Al Ain Oasis Halskette — Rosenquarz',
      stoneFeatures: ['Echte Rosenquarz-Edelsteine'],
      introParagraphs: [
        'Der letzte Schliff, der alles zusammenführt.',
        'Die Al Quaa Ohrringe — Rosenquarz sind für Frauen gedacht, die wissen, dass die kleinsten Details oft den stärksten Eindruck hinterlassen. Handmontiert in Abu Dhabi, Vereinigte Arabische Emirate, verbindet jedes Paar echten Rosenquarz, eine handgeschnitzte Karneol-Al-Ain-Rosette, facettierte vergoldete Hämatitperlen, die das Licht einfangen, und zartes rosa Zirkonia in 18k goldplattiertem Messing.',
        'Gestaltet zur mühelosen Abstimmung mit der Al Ain Oasis Halskette in Rosenquarz und den Signature Strands Bint Saeed, wird jedes Stück geschaffen, um das nächste zu ergänzen — so lässt sich mit der Zeit eine harmonische Schmuckkollektion aufbauen. Mit einer Bint-Saeed-Abaya oder den liebsten Alltagsteilen bringen diese Naturstein-Ohrringe Wärme, Handwerk und zeitlose Eleganz in jeden Look.',
        'Jeder Naturstein ist einzigartig — mit eigener Farbe, eigenem Muster und Einschlüssen, sodass jedes Paar einzigartig ist. Sorgfältig in Abu Dhabi montiert, sind sie ein bedeutsames Geschenk zu Geburtstagen, Eid, Abschlüssen, Jahrestagen oder einfach, um jemanden Besonderes zu feiern.',
        'Elegant genug für besondere Anlässe. Vielseitig genug für den Alltag. Charaktervoll genug, um in Erinnerung zu bleiben.',
      ],
      madeFromAnswer: [
        'Jedes Paar verbindet echten Rosenquarz, eine handgeschnitzte Karneol-Al-Ain-Rosette, facettierte vergoldete Hämatitperlen und einen birnenförmigen rosa Zirkonia-Stecker in 18k goldplattiertem Messing.',
        'Jeder Naturstein ist einzigartig — mit eigener Farbe, eigenem Muster und Einschlüssen, sodass jedes Paar einzigartig ist.',
      ],
    },
    nl: {
      family: 'quaa',
      fullName: 'Al Quaa oorbellen — Rozenkwarts',
      necklaceName: 'Al Ain Oasis ketting — Rozenkwarts',
      stoneFeatures: ['Echte rozenkwarts edelstenen'],
      introParagraphs: [
        'De finishing touch die alles samenbrengt.',
        'De Al Quaa oorbellen — Rozenkwarts zijn bedoeld voor vrouwen die weten dat de kleinste details vaak de sterkste indruk achterlaten. Met de hand gemonteerd in Abu Dhabi, Verenigde Arabische Emiraten, combineert elk paar echte rozenkwarts, een handgesneden carneool Al Ain Rosette, gefacetteerde verguld hematiet kralen die het licht vangen, en delicate roze zirconia in 18k verguld messing.',
        'Ontworpen om moeiteloos te coördineren met de Al Ain Oasis ketting in rozenkwarts en de Signature Strands Bint Saeed, wordt elk stuk gemaakt om het volgende te complementeren — zo bouw je met de tijd een harmonieuze sieradencollectie op. Met een Bint Saeed abaya of je favoriete alledaagse stukken brengen deze natuursteen oorbellen warmte, vakmanschap en tijdloze elegantie in elke look.',
        'Elke natuurlijke edelsteen is uniek, met eigen kleur, patroon en inclusies, waardoor elk paar uniek is. Zorgvuldig gemonteerd in Abu Dhabi zijn ze een betekenisvol cadeau voor verjaardagen, Eid, diploma-uitreikingen, jubilea of gewoon om iemand bijzonders te vieren.',
        'Elegant genoeg voor speciale gelegenheden. Veelzijdig genoeg voor alledaags dragen. Distinctief genoeg om herinnerd te worden.',
      ],
      madeFromAnswer: [
        'Elk paar combineert echte rozenkwarts, een handgesneden carneool Al Ain Rosette, gefacetteerde verguld hematiet kralen en een peer-cut roze zirconia stud in 18k verguld messing.',
        'Elke natuurlijke edelsteen is uniek, met eigen kleur, patroon en inclusies, waardoor elk paar uniek is.',
      ],
    },
    pt: {
      family: 'quaa',
      fullName: 'Brincos Al Quaa — Quartzo rosa',
      necklaceName: 'Colar Al Ain Oasis — Quartzo rosa',
      stoneFeatures: ['Gemas genuínas de quartzo rosa'],
      introParagraphs: [
        'O toque final que reúne tudo.',
        'Os Brincos Al Quaa — Quartzo rosa são pensados para mulheres que sabem que os mais pequenos detalhes deixam muitas vezes a impressão mais forte. Montados à mão em Abu Dhabi, Emirados Árabes Unidos, cada par combina gemas genuínas de quartzo rosa, uma Al Ain Rosette esculpida à mão em cornalina, contas de hematite facetada banho de ouro que captam a luz e delicada zirconia rosa em latão banho de ouro 18k.',
        'Concebidos para coordenar sem esforço com o Colar Al Ain Oasis em Quartzo rosa e os Signature Strands Bint Saeed, cada peça é criada para complementar a seguinte, facilitando construir ao longo do tempo uma coleção de joias harmoniosa. Com uma abaya Bint Saeed ou as suas peças do dia a dia preferidas, estes brincos em pedra natural trazem calor, ofício e elegância atemporal a cada look.',
        'Cada gema natural é única, com a sua própria cor, padrão e inclusões, tornando cada par único no seu género. Montados com cuidado em Abu Dhabi, são um presente significativo para aniversários, Eid, formaturas, aniversários de casamento ou simplesmente para celebrar alguém especial.',
        'Elegantes o suficiente para ocasiões especiais. Versáteis o suficiente para o dia a dia. Distintivos o suficiente para serem lembrados.',
      ],
      madeFromAnswer: [
        'Cada par combina gemas genuínas de quartzo rosa, uma Al Ain Rosette esculpida à mão em cornalina, contas de hematite facetada banho de ouro e um pino em zirconia rosa corte pêra em latão banho de ouro 18k.',
        'Cada gema natural é única, com a sua própria cor, padrão e inclusões, tornando cada par único no seu género.',
      ],
    },
    id: {
      family: 'quaa',
      fullName: 'Anting Al Quaa — Kuarsa mawar',
      necklaceName: 'Kalung Al Ain Oasis — Kuarsa mawar',
      stoneFeatures: ['Batu kuarsa mawar asli'],
      introParagraphs: [
        'Sentuhan akhir yang menyatukan semuanya.',
        'Anting Al Quaa — Kuarsa mawar dirancang untuk wanita yang memahami bahwa detail terkecil sering meninggalkan kesan terkuat. Dirakit tangan di Abu Dhabi, Uni Emirat Arab, setiap pasangan menggabungkan kuarsa mawar asli, Al Ain Rosette karnelian ukiran tangan, manik hematit berfaset berlapis emas yang menangkap cahaya, dan zirconia merah muda halus pada kuningan berlapis emas 18k.',
        'Dirancang untuk berkoordinasi dengan mudah dengan Kalung Al Ain Oasis ber-kuarsa mawar dan Signature Strands Bint Saeed; setiap karya diciptakan untuk melengkapi berikutnya, memudahkan membangun koleksi perhiasan yang harmonis seiring waktu. Dengan abaya Bint Saeed atau potongan sehari-hari favorit, anting batu alam ini membawa kehangatan, ketukangan, dan keanggunan abadi ke setiap look.',
        'Setiap batu permata alami unik, dengan warna, pola, dan inklusi sendiri, menjadikan setiap pasangan satu-satunya. Dirakit dengan teliti di Abu Dhabi, mereka menjadi hadiah bermakna untuk ulang tahun, Idul Fitri, wisuda, hari jadi, atau sekadar merayakan seseorang yang istimewa.',
        'Cukup elegan untuk kesempatan khusus. Cukup serbaguna untuk hari-hari biasa. Cukup khas untuk dikenang.',
      ],
      madeFromAnswer: [
        'Setiap pasangan menggabungkan kuarsa mawar asli, Al Ain Rosette karnelian ukiran tangan, manik hematit berfaset berlapis emas, dan stud zirconia merah muda potongan pir pada kuningan berlapis emas 18k.',
        'Setiap batu permata alami unik, dengan warna, pola, dan inklusi sendiri, menjadikan setiap pasangan satu-satunya.',
      ],
    },
    ms: {
      family: 'quaa',
      fullName: 'Anting Al Quaa — Kuarsa mawar',
      necklaceName: 'Rantai leher Al Ain Oasis — Kuarsa mawar',
      stoneFeatures: ['Batu kuarsa mawar tulen'],
      introParagraphs: [
        'Sentuhan akhir yang menyatukan segalanya.',
        'Anting Al Quaa — Kuarsa mawar direka untuk wanita yang memahami bahawa perincian terkecil sering meninggalkan kesan terkuat. Dipasang tangan di Abu Dhabi, Emiriah Arab Bersatu, setiap pasangan menggabungkan kuarsa mawar tulen, Al Ain Rosette karnelian ukiran tangan, manik hematit berfaset bersalut emas yang menangkap cahaya, dan zirconia merah jambu halus pada loyang bersalut emas 18k.',
        'Direka untuk berkoordinasi dengan mudah dengan Rantai leher Al Ain Oasis ber-kuarsa mawar dan Signature Strands Bint Saeed; setiap karya dicipta untuk melengkapi yang seterusnya, memudahkan membina koleksi barang kemas yang harmoni dari masa ke masa. Dengan abaya Bint Saeed atau potongan harian kegemaran, anting batu semula jadi ini membawa kehangatan, ketukangan dan keanggunan abadi ke setiap look.',
        'Setiap batu permata semula jadi unik, dengan warna, corak dan inklusi sendiri, menjadikan setiap pasangan satu-satunya. Dipasang dengan teliti di Abu Dhabi, mereka menjadi hadiah bermakna untuk hari jadi, Aidilfitri, konvokesyen, ulang tahun, atau sekadar meraikan seseorang yang istimewa.',
        'Cukup elegan untuk majlis khas. Cukup serba boleh untuk hari biasa. Cukup tersendiri untuk dikenang.',
      ],
      madeFromAnswer: [
        'Setiap pasangan menggabungkan kuarsa mawar tulen, Al Ain Rosette karnelian ukiran tangan, manik hematit berfaset bersalut emas, dan stud zirconia merah jambu potongan pir pada loyang bersalut emas 18k.',
        'Setiap batu permata semula jadi unik, dengan warna, corak dan inklusi sendiri, menjadikan setiap pasangan satu-satunya.',
      ],
    },
  },

  'al-quaa-earrings-lapis-lazuli': {
    it: {
      family: 'quaa',
      lapisExtras: true,
      fullName: 'Orecchini Al Quaa — Lapislazzuli',
      necklaceName: 'Collana Al Ain Oasis — Lapislazzuli',
      stoneFeatures: ['Vere gemme di lapislazzuli'],
      introParagraphs: [
        'Il tocco finale che riunisce ogni cosa.',
        'Gli Orecchini Al Quaa — Lapislazzuli sono pensati per le donne che sanno che i dettagli più piccoli lasciano spesso l’impressione più forte. Assemblati a mano ad Abu Dhabi, Emirati Arabi Uniti, ogni paio unisce vere gemme di lapislazzuli, una Al Ain Rosette intagliata a mano in corniola, perle di ematite sfaccettata placcata oro che catturano la luce e brillante zirconia trasparente in ottone placcato oro 18k.',
        'Concepiti per coordinarsi senza sforzo con la Collana Al Ain Oasis in Lapislazzuli e i Signature Strands Bint Saeed, ogni pezzo è creato per completare il successivo, rendendo naturale costruire nel tempo una collezione gioielli armoniosa. Indossati con un’abaya Bint Saeed o con i pezzi quotidiani preferiti, questi orecchini in pietra naturale portano profondità, artigianato ed eleganza senza tempo a ogni look.',
        'Ogni gemma naturale è unica, con il proprio colore, motivo e inclusioni naturali di pirite, rendendo ogni paio unico nel suo genere. Assemblati con cura ad Abu Dhabi, sono un dono significativo per compleanni, Eid, lauree, anniversari o semplicemente per celebrare qualcuno di speciale.',
        'Abbastanza eleganti per le occasioni speciali. Abbastanza versatili per il quotidiano. Abbastanza distintivi da restare impressi.',
      ],
      madeFromAnswer: [
        'Ogni paio unisce vere gemme di lapislazzuli, una Al Ain Rosette intagliata a mano in corniola, perle di ematite sfaccettata placcata oro e un perno in zirconia trasparente taglio a pera in ottone placcato oro 18k.',
        'Ogni gemma naturale è unica, con il proprio colore, motivo e inclusioni naturali di pirite, rendendo ogni paio unico nel suo genere.',
      ],
    },
    es: {
      family: 'quaa',
      lapisExtras: true,
      fullName: 'Pendientes Al Quaa — Lapislázuli',
      necklaceName: 'Collar Al Ain Oasis — Lapislázuli',
      stoneFeatures: ['Gemas genuinas de lapislázuli'],
      introParagraphs: [
        'El toque final que lo reúne todo.',
        'Los Pendientes Al Quaa — Lapislázuli están pensados para mujeres que saben que los detalles más pequeños suelen dejar la impresión más fuerte. Ensamblados a mano en Abu Dabi, Emiratos Árabes Unidos, cada par combina gemas genuinas de lapislázuli, una Al Ain Rosette tallada a mano en cornalina, cuentas de hematita facetada baño de oro que captan la luz y brillante zirconia transparente en latón baño de oro 18k.',
        'Diseñados para coordinar con facilidad con el Collar Al Ain Oasis en Lapislázuli y los Signature Strands Bint Saeed, cada pieza se crea para complementar la siguiente, facilitando construir con el tiempo una colección de joyería armoniosa. Con una abaya Bint Saeed o tus piezas cotidianas favoritas, estos pendientes de piedra natural aportan profundidad, oficio y elegancia atemporal a cada look.',
        'Cada gema natural es única, con su propio color, patrón e inclusiones naturales de pirita, haciendo de cada par una pieza única. Ensamblados con cuidado en Abu Dabi, son un regalo significativo para cumpleaños, Eid, graduaciones, aniversarios o simplemente para celebrar a alguien especial.',
        'Lo bastante elegantes para ocasiones especiales. Lo bastante versátiles para el día a día. Lo bastante distintivos para ser recordados.',
      ],
      madeFromAnswer: [
        'Cada par combina gemas genuinas de lapislázuli, una Al Ain Rosette tallada a mano en cornalina, cuentas de hematita facetada baño de oro y un pendiente en zirconia transparente talla pera en latón baño de oro 18k.',
        'Cada gema natural es única, con su propio color, patrón e inclusiones naturales de pirita, haciendo de cada par una pieza única.',
      ],
    },
    ru: {
      family: 'quaa',
      lapisExtras: true,
      fullName: 'Серьги Al Quaa — Лазурит',
      necklaceName: 'Ожерелье Al Ain Oasis — Лазурит',
      stoneFeatures: ['Подлинные камни лазурита'],
      introParagraphs: [
        'Завершающий штрих, который собирает всё воедино.',
        'Серьги Al Quaa — Лазурит созданы для женщин, которые понимают: самые малые детали часто оставляют самое сильное впечатление. Собранные вручную в Абу-Даби, ОАЭ, каждая пара соединяет подлинный лазурит, резную сердоликовую Al Ain Rosette, бусины гранёного позолоченного гематита, ловящие свет, и сверкающий прозрачный цирконий на латуни с покрытием 18k.',
        'Задуманы для лёгкого сочетания с Ожерельем Al Ain Oasis в лазурите и Signature Strands Bint Saeed: каждая вещь создана дополнять следующую, помогая со временем собрать гармоничную ювелирную коллекцию. С абаей Bint Saeed или любимыми повседневными вещами эти серьги из натурального камня приносят глубину, мастерство и вневременную элегантность в каждый образ.',
        'Каждый натуральный самоцвет уникален — со своим цветом, рисунком и природными вкраплениями пирита, делая каждую пару единственной в своём роде. Собранные с заботой в Абу-Даби, они — значимый подарок на дни рождения, Ид, выпускные, годовщины или просто чтобы отметить особенного человека.',
        'Достаточно элегантны для особых случаев. Достаточно универсальны для повседневности. Достаточно характерны, чтобы их запомнили.',
      ],
      madeFromAnswer: [
        'Каждая пара соединяет подлинный лазурит, резную сердоликовую Al Ain Rosette, бусины гранёного позолоченного гематита и штифт из прозрачного циркония грушевидной огранки на латуни с покрытием 18k.',
        'Каждый натуральный самоцвет уникален — со своим цветом, рисунком и природными вкраплениями пирита, делая каждую пару единственной в своём роде.',
      ],
    },
    zh: {
      family: 'quaa',
      lapisExtras: true,
      fullName: 'Al Quaa 青金石耳环',
      necklaceName: 'Al Ain Oasis 青金石项链',
      stoneFeatures: ['天然青金石宝石'],
      introParagraphs: [
        '收束一切的那一笔。',
        'Al Quaa 青金石耳环为懂得最小细节往往留下最深印象的女性而设。于阿联酋阿布扎比手工组装，每一对结合天然青金石、手工雕刻的红玉髓 Al Ain Rosette、捕捉光线的镀金切面赤铁矿珠，以及镶于 18k 镀金黄铜的明亮透明锆石。',
        '旨在轻松与青金石 Al Ain Oasis 项链及 Bint Saeed Signature Strands 协调；每件作品为下一件而互补，便于随时间建立和谐的珠宝收藏。无论搭配 Bint Saeed 长袍或日常最爱，这些天然石耳环都为每个造型带去深度、工艺与不朽优雅。',
        '每颗天然宝石皆独特，带着各自的色彩、纹理与天然黄铁矿包裹体，使每一对皆独一无二。于阿布扎比细心组装，适合作为生日、开斋节、毕业、周年纪念或单纯庆祝珍视之人的有意义礼物。',
        '足以应对特殊场合的优雅。足以陪伴日常的多变。足以被铭记的独特。',
      ],
      madeFromAnswer: [
        '每一对结合天然青金石、手工雕刻的红玉髓 Al Ain Rosette、镀金切面赤铁矿珠，以及镶于 18k 镀金黄铜的梨形透明锆石耳钉。',
        '每颗天然宝石皆独特，带着各自的色彩、纹理与天然黄铁矿包裹体，使每一对皆独一无二。',
      ],
    },
    de: {
      family: 'quaa',
      lapisExtras: true,
      fullName: 'Al Quaa Ohrringe — Lapislazuli',
      necklaceName: 'Al Ain Oasis Halskette — Lapislazuli',
      stoneFeatures: ['Echte Lapislazuli-Edelsteine'],
      introParagraphs: [
        'Der letzte Schliff, der alles zusammenführt.',
        'Die Al Quaa Ohrringe — Lapislazuli sind für Frauen gedacht, die wissen, dass die kleinsten Details oft den stärksten Eindruck hinterlassen. Handmontiert in Abu Dhabi, Vereinigte Arabische Emirate, verbindet jedes Paar echten Lapislazuli, eine handgeschnitzte Karneol-Al-Ain-Rosette, facettierte vergoldete Hämatitperlen, die das Licht einfangen, und brillante klare Zirkonia in 18k goldplattiertem Messing.',
        'Gestaltet zur mühelosen Abstimmung mit der Al Ain Oasis Halskette in Lapislazuli und den Signature Strands Bint Saeed, wird jedes Stück geschaffen, um das nächste zu ergänzen — so lässt sich mit der Zeit eine harmonische Schmuckkollektion aufbauen. Mit einer Bint-Saeed-Abaya oder den liebsten Alltagsteilen bringen diese Naturstein-Ohrringe Tiefe, Handwerk und zeitlose Eleganz in jeden Look.',
        'Jeder Naturstein ist einzigartig — mit eigener Farbe, eigenem Muster und natürlichen Pyriteinschlüssen, sodass jedes Paar einzigartig ist. Sorgfältig in Abu Dhabi montiert, sind sie ein bedeutsames Geschenk zu Geburtstagen, Eid, Abschlüssen, Jahrestagen oder einfach, um jemanden Besonderes zu feiern.',
        'Elegant genug für besondere Anlässe. Vielseitig genug für den Alltag. Charaktervoll genug, um in Erinnerung zu bleiben.',
      ],
      madeFromAnswer: [
        'Jedes Paar verbindet echten Lapislazuli, eine handgeschnitzte Karneol-Al-Ain-Rosette, facettierte vergoldete Hämatitperlen und einen birnenförmigen klaren Zirkonia-Stecker in 18k goldplattiertem Messing.',
        'Jeder Naturstein ist einzigartig — mit eigener Farbe, eigenem Muster und natürlichen Pyriteinschlüssen, sodass jedes Paar einzigartig ist.',
      ],
    },
    nl: {
      family: 'quaa',
      lapisExtras: true,
      fullName: 'Al Quaa oorbellen — Lapis lazuli',
      necklaceName: 'Al Ain Oasis ketting — Lapis lazuli',
      stoneFeatures: ['Echte lapis lazuli edelstenen'],
      introParagraphs: [
        'De finishing touch die alles samenbrengt.',
        'De Al Quaa oorbellen — Lapis lazuli zijn bedoeld voor vrouwen die weten dat de kleinste details vaak de sterkste indruk achterlaten. Met de hand gemonteerd in Abu Dhabi, Verenigde Arabische Emiraten, combineert elk paar echte lapis lazuli, een handgesneden carneool Al Ain Rosette, gefacetteerde verguld hematiet kralen die het licht vangen, en briljante heldere zirconia in 18k verguld messing.',
        'Ontworpen om moeiteloos te coördineren met de Al Ain Oasis ketting in lapis lazuli en de Signature Strands Bint Saeed, wordt elk stuk gemaakt om het volgende te complementeren — zo bouw je met de tijd een harmonieuze sieradencollectie op. Met een Bint Saeed abaya of je favoriete alledaagse stukken brengen deze natuursteen oorbellen diepte, vakmanschap en tijdloze elegantie in elke look.',
        'Elke natuurlijke edelsteen is uniek, met eigen kleur, patroon en natuurlijke pyrietinclusies, waardoor elk paar uniek is. Zorgvuldig gemonteerd in Abu Dhabi zijn ze een betekenisvol cadeau voor verjaardagen, Eid, diploma-uitreikingen, jubilea of gewoon om iemand bijzonders te vieren.',
        'Elegant genoeg voor speciale gelegenheden. Veelzijdig genoeg voor alledaags dragen. Distinctief genoeg om herinnerd te worden.',
      ],
      madeFromAnswer: [
        'Elk paar combineert echte lapis lazuli, een handgesneden carneool Al Ain Rosette, gefacetteerde verguld hematiet kralen en een peer-cut heldere zirconia stud in 18k verguld messing.',
        'Elke natuurlijke edelsteen is uniek, met eigen kleur, patroon en natuurlijke pyrietinclusies, waardoor elk paar uniek is.',
      ],
    },
    pt: {
      family: 'quaa',
      lapisExtras: true,
      fullName: 'Brincos Al Quaa — Lápis-lazúli',
      necklaceName: 'Colar Al Ain Oasis — Lápis-lazúli',
      stoneFeatures: ['Gemas genuínas de lápis-lazúli'],
      introParagraphs: [
        'O toque final que reúne tudo.',
        'Os Brincos Al Quaa — Lápis-lazúli são pensados para mulheres que sabem que os mais pequenos detalhes deixam muitas vezes a impressão mais forte. Montados à mão em Abu Dhabi, Emirados Árabes Unidos, cada par combina gemas genuínas de lápis-lazúli, uma Al Ain Rosette esculpida à mão em cornalina, contas de hematite facetada banho de ouro que captam a luz e brilhante zirconia transparente em latão banho de ouro 18k.',
        'Concebidos para coordenar sem esforço com o Colar Al Ain Oasis em Lápis-lazúli e os Signature Strands Bint Saeed, cada peça é criada para complementar a seguinte, facilitando construir ao longo do tempo uma coleção de joias harmoniosa. Com uma abaya Bint Saeed ou as suas peças do dia a dia preferidas, estes brincos em pedra natural trazem profundidade, ofício e elegância atemporal a cada look.',
        'Cada gema natural é única, com a sua própria cor, padrão e inclusões naturais de pirite, tornando cada par único no seu género. Montados com cuidado em Abu Dhabi, são um presente significativo para aniversários, Eid, formaturas, aniversários de casamento ou simplesmente para celebrar alguém especial.',
        'Elegantes o suficiente para ocasiões especiais. Versáteis o suficiente para o dia a dia. Distintivos o suficiente para serem lembrados.',
      ],
      madeFromAnswer: [
        'Cada par combina gemas genuínas de lápis-lazúli, uma Al Ain Rosette esculpida à mão em cornalina, contas de hematite facetada banho de ouro e um pino em zirconia transparente corte pêra em latão banho de ouro 18k.',
        'Cada gema natural é única, com a sua própria cor, padrão e inclusões naturais de pirite, tornando cada par único no seu género.',
      ],
    },
    id: {
      family: 'quaa',
      lapisExtras: true,
      fullName: 'Anting Al Quaa — Lapis lazuli',
      necklaceName: 'Kalung Al Ain Oasis — Lapis lazuli',
      stoneFeatures: ['Batu lapis lazuli asli'],
      introParagraphs: [
        'Sentuhan akhir yang menyatukan semuanya.',
        'Anting Al Quaa — Lapis lazuli dirancang untuk wanita yang memahami bahwa detail terkecil sering meninggalkan kesan terkuat. Dirakit tangan di Abu Dhabi, Uni Emirat Arab, setiap pasangan menggabungkan lapis lazuli asli, Al Ain Rosette karnelian ukiran tangan, manik hematit berfaset berlapis emas yang menangkap cahaya, dan zirconia bening cemerlang pada kuningan berlapis emas 18k.',
        'Dirancang untuk berkoordinasi dengan mudah dengan Kalung Al Ain Oasis ber-lapis lazuli dan Signature Strands Bint Saeed; setiap karya diciptakan untuk melengkapi berikutnya, memudahkan membangun koleksi perhiasan yang harmonis seiring waktu. Dengan abaya Bint Saeed atau potongan sehari-hari favorit, anting batu alam ini membawa kedalaman, ketukangan, dan keanggunan abadi ke setiap look.',
        'Setiap batu permata alami unik, dengan warna, pola, dan inklusi pirit alami sendiri, menjadikan setiap pasangan satu-satunya. Dirakit dengan teliti di Abu Dhabi, mereka menjadi hadiah bermakna untuk ulang tahun, Idul Fitri, wisuda, hari jadi, atau sekadar merayakan seseorang yang istimewa.',
        'Cukup elegan untuk kesempatan khusus. Cukup serbaguna untuk hari-hari biasa. Cukup khas untuk dikenang.',
      ],
      madeFromAnswer: [
        'Setiap pasangan menggabungkan lapis lazuli asli, Al Ain Rosette karnelian ukiran tangan, manik hematit berfaset berlapis emas, dan stud zirconia bening potongan pir pada kuningan berlapis emas 18k.',
        'Setiap batu permata alami unik, dengan warna, pola, dan inklusi pirit alami sendiri, menjadikan setiap pasangan satu-satunya.',
      ],
    },
    ms: {
      family: 'quaa',
      lapisExtras: true,
      fullName: 'Anting Al Quaa — Lapis lazuli',
      necklaceName: 'Rantai leher Al Ain Oasis — Lapis lazuli',
      stoneFeatures: ['Batu lapis lazuli tulen'],
      introParagraphs: [
        'Sentuhan akhir yang menyatukan segalanya.',
        'Anting Al Quaa — Lapis lazuli direka untuk wanita yang memahami bahawa perincian terkecil sering meninggalkan kesan terkuat. Dipasang tangan di Abu Dhabi, Emiriah Arab Bersatu, setiap pasangan menggabungkan lapis lazuli tulen, Al Ain Rosette karnelian ukiran tangan, manik hematit berfaset bersalut emas yang menangkap cahaya, dan zirconia jernih cemerlang pada loyang bersalut emas 18k.',
        'Direka untuk berkoordinasi dengan mudah dengan Rantai leher Al Ain Oasis ber-lapis lazuli dan Signature Strands Bint Saeed; setiap karya dicipta untuk melengkapi yang seterusnya, memudahkan membina koleksi barang kemas yang harmoni dari masa ke masa. Dengan abaya Bint Saeed atau potongan harian kegemaran, anting batu semula jadi ini membawa kedalaman, ketukangan dan keanggunan abadi ke setiap look.',
        'Setiap batu permata semula jadi unik, dengan warna, corak dan inklusi pirit semula jadi sendiri, menjadikan setiap pasangan satu-satunya. Dipasang dengan teliti di Abu Dhabi, mereka menjadi hadiah bermakna untuk hari jadi, Aidilfitri, konvokesyen, ulang tahun, atau sekadar meraikan seseorang yang istimewa.',
        'Cukup elegan untuk majlis khas. Cukup serba boleh untuk hari biasa. Cukup tersendiri untuk dikenang.',
      ],
      madeFromAnswer: [
        'Setiap pasangan menggabungkan lapis lazuli tulen, Al Ain Rosette karnelian ukiran tangan, manik hematit berfaset bersalut emas, dan stud zirconia jernih potongan pir pada loyang bersalut emas 18k.',
        'Setiap batu permata semula jadi unik, dengan warna, corak dan inklusi pirit semula jadi sendiri, menjadikan setiap pasangan satu-satunya.',
      ],
    },
  },
}

function buildPack(
  locale: SecondaryLocale,
  product: ProductLocaleCopy,
): NecklaceEarringPdpContentPack {
  const ui = UI[locale]
  const care = getJewelleryCareCopy(locale)
  const isOasis = product.family === 'oasis'
  const uniqueness = product.lapisExtras ? ui.uniquenessLapis : ui.uniqueness
  const identical = product.lapisExtras ? ui.identicalLapis : ui.identical
  const clasp = isOasis ? ui.leverback : product.lapisExtras ? ui.studClear : ui.studPink
  const extras = isOasis
    ? [ui.copper14k, ui.silhouetteLight, ui.drop55]
    : [ui.brass18k, ui.silhouetteElegant, ui.drop4]

  return {
    introParagraphs: product.introParagraphs,
    featuresTitle: ui.featuresTitle,
    features: [
      ui.houseCode,
      ui.handAssembled,
      ...product.stoneFeatures,
      ui.hematite,
      ui.rosette,
      ...extras,
      clasp,
      uniqueness,
      ui.coordinate(product.necklaceName),
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
        question: ui.qNecklace,
        answer: ui.necklaceAnswer(product.necklaceName),
      },
      {
        question: ui.qStrand,
        answer: ui.strandAnswer,
      },
      {
        question: ui.qIdentical,
        answer: identical,
      },
      {
        question: ui.qMade,
        answer: ui.madeWhere,
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

export function getEarringPdpContentI18n(
  id: string,
  locale: AppLocale,
): NecklaceEarringPdpContentPack | undefined {
  // Authored EN/AR/FR packs in necklaceEarringPdpContent* take precedence.
  if (locale === 'en' || locale === 'ar' || locale === 'fr') return undefined
  if (!isSecondary(locale)) return undefined

  const canonical = resolveAccessoryId(id)
  if (!isEarringPdpId(canonical)) return undefined

  const product = PRODUCT_COPY[canonical][locale]
  return buildPack(locale, product)
}
