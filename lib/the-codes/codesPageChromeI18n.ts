import type { AppLocale } from '@/lib/i18n/routing'

export type CodesPageChrome = {
  navTitle: string
  description: string
  exploreHeritageChapter: string
}

const CHROME: Record<AppLocale, CodesPageChrome> = {
  en: {
    navTitle: 'The Codes',
    description:
      'The elements that carry the legacy of the house. Rooted in origin. Defined with precision.',
    exploreHeritageChapter: 'Explore the heritage chapter',
  },
  ar: {
    navTitle: 'الرموز',
    description: 'العناصر التي تحمل إرث الدار. متجذرة في الأصل. محددة بدقة.',
    exploreHeritageChapter: 'استكشفي فصل التراث',
  },
  fr: {
    navTitle: 'The Codes',
    description:
      'Les éléments qui portent l’héritage de la maison. Enracinés dans l’origine. Définis avec précision.',
    exploreHeritageChapter: 'Explorer le chapitre patrimoine',
  },
  it: {
    navTitle: 'The Codes',
    description:
      'Gli elementi che portano l’eredità della casa. Radicati nell’origine. Definiti con precisione.',
    exploreHeritageChapter: 'Esplora il capitolo heritage',
  },
  es: {
    navTitle: 'The Codes',
    description:
      'Los elementos que llevan el legado de la casa. Arraigados en el origen. Definidos con precisión.',
    exploreHeritageChapter: 'Explorar el capítulo de patrimonio',
  },
  ru: {
    navTitle: 'The Codes',
    description:
      'Элементы, несущие наследие дома. Укоренённые в происхождении. Определённые с точностью.',
    exploreHeritageChapter: 'Открыть главу наследия',
  },
  zh: {
    navTitle: 'The Codes',
    description: '承载品牌传承的元素。植根于本源。以精准界定。',
    exploreHeritageChapter: '探索传承篇章',
  },
  de: {
    navTitle: 'The Codes',
    description:
      'Die Elemente, die das Erbe des Hauses tragen. In Herkunft verwurzelt. Mit Präzision definiert.',
    exploreHeritageChapter: 'Heritage-Kapitel entdecken',
  },
  nl: {
    navTitle: 'The Codes',
    description:
      'De elementen die het erfgoed van het huis dragen. Geworteld in oorsprong. Met precisie gedefinieerd.',
    exploreHeritageChapter: 'Ontdek het heritage-hoofdstuk',
  },
  pt: {
    navTitle: 'The Codes',
    description:
      'Os elementos que carregam o legado da casa. Enraizados na origem. Definidos com precisão.',
    exploreHeritageChapter: 'Explorar o capítulo de património',
  },
  id: {
    navTitle: 'The Codes',
    description:
      'Elemen yang membawa warisan rumah. Berakar pada asal. Ditetapkan dengan ketepatan.',
    exploreHeritageChapter: 'Jelajahi bab warisan',
  },
  ms: {
    navTitle: 'The Codes',
    description:
      'Unsur yang membawa warisan rumah. Berakar pada asal. Ditakrifkan dengan ketepatan.',
    exploreHeritageChapter: 'Terokai bab warisan',
  },
}

export function getCodesPageChrome(locale: AppLocale | string): CodesPageChrome {
  const key = (locale in CHROME ? locale : 'en') as AppLocale
  return CHROME[key]
}
