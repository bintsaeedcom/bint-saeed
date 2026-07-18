import type { AppLocale } from '@/lib/i18n/routing'

export type CodesPageChrome = {
  navTitle: string
  description: string
}

const CHROME: Record<AppLocale, CodesPageChrome> = {
  en: {
    navTitle: 'The Codes',
    description:
      'The elements that carry the legacy of the house. Rooted in origin. Defined with precision.',
  },
  ar: {
    navTitle: 'الرموز',
    description: 'العناصر التي تحمل إرث الدار. متجذرة في الأصل. محددة بدقة.',
  },
  fr: {
    navTitle: 'The Codes',
    description:
      'Les éléments qui portent l’héritage de la maison. Enracinés dans l’origine. Définis avec précision.',
  },
  it: {
    navTitle: 'The Codes',
    description:
      'Gli elementi che portano l’eredità della casa. Radicati nell’origine. Definiti con precisione.',
  },
  es: {
    navTitle: 'The Codes',
    description:
      'Los elementos que llevan el legado de la casa. Arraigados en el origen. Definidos con precisión.',
  },
  ru: {
    navTitle: 'The Codes',
    description:
      'Элементы, несущие наследие дома. Укоренённые в происхождении. Определённые с точностью.',
  },
  zh: {
    navTitle: 'The Codes',
    description: '承载品牌传承的元素。植根于本源。以精准界定。',
  },
  de: {
    navTitle: 'The Codes',
    description:
      'Die Elemente, die das Erbe des Hauses tragen. In Herkunft verwurzelt. Mit Präzision definiert.',
  },
  nl: {
    navTitle: 'The Codes',
    description:
      'De elementen die het erfgoed van het huis dragen. Geworteld in oorsprong. Met precisie gedefinieerd.',
  },
  pt: {
    navTitle: 'The Codes',
    description:
      'Os elementos que carregam o legado da casa. Enraizados na origem. Definidos com precisão.',
  },
  id: {
    navTitle: 'The Codes',
    description:
      'Elemen yang membawa warisan rumah. Berakar pada asal. Ditetapkan dengan ketepatan.',
  },
  ms: {
    navTitle: 'The Codes',
    description:
      'Unsur yang membawa warisan rumah. Berakar pada asal. Ditakrifkan dengan ketepatan.',
  },
}

export function getCodesPageChrome(locale: AppLocale | string): CodesPageChrome {
  const key = (locale in CHROME ? locale : 'en') as AppLocale
  return CHROME[key]
}
