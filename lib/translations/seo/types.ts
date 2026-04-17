/**
 * Supplemental SEO JSON-LD copy (GCC stores, Brand, MediaObject, merged FAQ blocks).
 * One bundle per UI locale — see `en.ts`, `ar.ts`, … and `index.ts`.
 */

export type FaqPair = { question: string; answer: string }

export type GccStoreCopy = {
  /** Matches builder routing: abu-dhabi | dubai | doha | riyadh | jeddah */
  id: 'abu-dhabi' | 'dubai' | 'doha' | 'riyadh' | 'jeddah'
  name: string
  alternateNames: string[]
  description: string
}

export type GccStoreId = GccStoreCopy['id']

export type SeoSupplementalBundle = {
  /** Reusable short brand paragraph (also embedded in answers). */
  brandFact: string
  gccStores: GccStoreCopy[]
  gccGovBrand: {
    slogan: string
    description: string
    alternateNames: string[]
  }
  pressBrand: {
    slogan: string
    description: string
    alternateNames: string[]
    /** Schema.org ContactPoint.contactType */
    contactType: string
    /** Human-readable language names for `availableLanguage` */
    availableLanguages: string[]
  }
  mediaKit: {
    name: string
    description: string
  }
  faqGcc: FaqPair[]
  faqRoyal: FaqPair[]
  faqCompetitor: FaqPair[]
  faqAiLuxury: FaqPair[]
  faqAiClassic: FaqPair[]
}
