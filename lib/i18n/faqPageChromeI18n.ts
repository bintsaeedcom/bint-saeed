import type { AppLocale } from '@/lib/i18n/routing'

export type FaqPageChrome = {
  relatedPoliciesAria: string
  topicsAria: string
}

const BY_LOCALE: Record<AppLocale, FaqPageChrome> = {
  en: { relatedPoliciesAria: 'Related policies', topicsAria: 'FAQ topics' },
  ar: { relatedPoliciesAria: 'روابط السياسات', topicsAria: 'مواضيع الأسئلة' },
  fr: { relatedPoliciesAria: 'Politiques associées', topicsAria: 'Sujets FAQ' },
  it: { relatedPoliciesAria: 'Policy correlate', topicsAria: 'Argomenti FAQ' },
  es: { relatedPoliciesAria: 'Políticas relacionadas', topicsAria: 'Temas de FAQ' },
  de: { relatedPoliciesAria: 'Zugehörige Richtlinien', topicsAria: 'FAQ-Themen' },
  nl: { relatedPoliciesAria: 'Gerelateerde beleidsregels', topicsAria: 'FAQ-onderwerpen' },
  pt: { relatedPoliciesAria: 'Políticas relacionadas', topicsAria: 'Tópicos de FAQ' },
  ru: { relatedPoliciesAria: 'Связанные политики', topicsAria: 'Темы FAQ' },
  zh: { relatedPoliciesAria: '相关政策', topicsAria: '常见问题主题' },
  id: { relatedPoliciesAria: 'Kebijakan terkait', topicsAria: 'Topik FAQ' },
  ms: { relatedPoliciesAria: 'Dasar berkaitan', topicsAria: 'Topik FAQ' },
}

export function getFaqPageChrome(locale: AppLocale | string): FaqPageChrome {
  const key = (locale in BY_LOCALE ? locale : 'en') as AppLocale
  return BY_LOCALE[key]
}
