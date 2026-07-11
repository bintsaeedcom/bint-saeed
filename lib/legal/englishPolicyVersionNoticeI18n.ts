import type { AppLocale } from '@/lib/i18n/routing'

export type EnglishPolicyNoticeCopy = {
  /** Full sentence with {link} placeholder for the clickable label. */
  template: string
  linkLabel: string
}

const EN: EnglishPolicyNoticeCopy = {
  template:
    'The English text is the controlling version of this policy. To read the English version, open {link}.',
  linkLabel: 'the English version of this policy',
}

const AR: EnglishPolicyNoticeCopy = {
  template:
    'النص الإنجليزي هو النسخة المُلزمة لهذه السياسة. لقراءة النسخة الإنجليزية، افتحي {link}.',
  linkLabel: 'النسخة الإنجليزية من هذه السياسة',
}

const FR: EnglishPolicyNoticeCopy = {
  template:
    'Le texte anglais constitue la version faisant foi de cette politique. Pour consulter la version anglaise, ouvrez {link}.',
  linkLabel: 'la version anglaise de cette politique',
}

const IT: EnglishPolicyNoticeCopy = {
  template:
    'Il testo inglese è la versione vincolante di questa policy. Per leggere la versione inglese, apri {link}.',
  linkLabel: 'la versione inglese di questa policy',
}

const ES: EnglishPolicyNoticeCopy = {
  template:
    'El texto en inglés es la versión vinculante de esta política. Para leer la versión en inglés, abre {link}.',
  linkLabel: 'la versión en inglés de esta política',
}

const RU: EnglishPolicyNoticeCopy = {
  template:
    'Английский текст является юридически определяющей версией этой политики. Чтобы прочитать английскую версию, откройте {link}.',
  linkLabel: 'английскую версию этой политики',
}

const ZH: EnglishPolicyNoticeCopy = {
  template: '本政策以英文文本为准。如需阅读英文版本，请打开{link}。',
  linkLabel: '本政策的英文版本',
}

const DE: EnglishPolicyNoticeCopy = {
  template:
    'Der englische Text ist die maßgebliche Fassung dieser Richtlinie. Die englische Version finden Sie unter {link}.',
  linkLabel: 'der englischen Version dieser Richtlinie',
}

const NL: EnglishPolicyNoticeCopy = {
  template:
    'De Engelse tekst is de leidende versie van dit beleid. Om de Engelse versie te lezen, open {link}.',
  linkLabel: 'de Engelse versie van dit beleid',
}

const PT: EnglishPolicyNoticeCopy = {
  template:
    'O texto em inglês é a versão vinculativa desta política. Para ler a versão em inglês, abra {link}.',
  linkLabel: 'a versão em inglês desta política',
}

const ID: EnglishPolicyNoticeCopy = {
  template:
    'Teks bahasa Inggris adalah versi yang mengikat dari kebijakan ini. Untuk membaca versi bahasa Inggris, buka {link}.',
  linkLabel: 'versi bahasa Inggris dari kebijakan ini',
}

const MS: EnglishPolicyNoticeCopy = {
  template:
    'Teks bahasa Inggeris ialah versi yang mengikat bagi polisi ini. Untuk membaca versi bahasa Inggeris, buka {link}.',
  linkLabel: 'versi bahasa Inggeris polisi ini',
}

const BY_LOCALE: Record<AppLocale, EnglishPolicyNoticeCopy> = {
  en: EN,
  ar: AR,
  fr: FR,
  it: IT,
  es: ES,
  ru: RU,
  zh: ZH,
  de: DE,
  nl: NL,
  pt: PT,
  id: ID,
  ms: MS,
}

export function getEnglishPolicyNoticeCopy(locale: AppLocale): EnglishPolicyNoticeCopy {
  return BY_LOCALE[locale] ?? EN
}

/** Canonical English policy paths (no locale prefix). */
export const ENGLISH_POLICY_PATHS = {
  terms: '/terms',
  privacy: '/privacy-policy',
  shipment: '/shipment-return-policy',
  cookie: '/cookie-policy',
} as const

export type EnglishPolicyKey = keyof typeof ENGLISH_POLICY_PATHS
