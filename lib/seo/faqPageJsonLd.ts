import type { AppLocale } from '@/lib/i18n/routing'
import { schemaInLanguageForLocale } from '@/lib/i18n/bcp47'
import { FAQ_BY_LOCALE } from '@/lib/faq/faqByLocale'

/** FAQPage mainEntity mirrors on-page FAQ copy for the active locale (single language per graph). */
function flattenFaqMainEntity(locale: AppLocale) {
  const bundle = FAQ_BY_LOCALE[locale]
  return bundle.categories.flatMap((cat) =>
    cat.questions.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  )
}

/** FAQPage JSON-LD for `/faq` only. */
export function buildFaqPageJsonLd(locale: AppLocale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: schemaInLanguageForLocale(locale),
    mainEntity: flattenFaqMainEntity(locale),
  }
}
