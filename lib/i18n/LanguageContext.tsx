'use client'

import { createContext, useContext, useState, useEffect, useLayoutEffect, ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { translations, type Language, type Translations } from './translations'
import { stripLocaleFromPathname } from './routing'
import type { AppLocale } from './routing'

export const VALID_LANGUAGES: Language[] = ['en', 'ar', 'fr', 'it', 'es', 'ru', 'zh', 'de', 'nl', 'pt', 'id', 'ms']

function resolveTranslations(lang: Language): Translations {
  if (lang === 'id') return translations.id
  if (lang === 'ms') return translations.ms as unknown as Translations
  return translations[lang]
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({
  children,
  initialLocale = 'en',
}: {
  children: ReactNode
  initialLocale?: AppLocale
}) {
  const pathname = usePathname() || '/'
  const [language, setLanguageState] = useState<Language>(() =>
    initialLocale === 'en' ? 'en' : (initialLocale as Language),
  )

  useEffect(() => {
    const { locale } = stripLocaleFromPathname(pathname)
    setLanguageState(locale === 'en' ? 'en' : (locale as Language))
  }, [pathname])

  useLayoutEffect(() => {
    const langAttr = language === 'zh' ? 'zh-CN' : language
    const dir = language === 'ar' ? 'rtl' : 'ltr'
    const root = document.documentElement
    root.lang = langAttr
    root.dir = dir
    root.setAttribute('dir', dir)
    document.body.dir = dir
    document.body.setAttribute('dir', dir)
    document.body.dataset.locale = language
    // Help browser form controls / UA chrome follow Arabic layout
    root.style.setProperty('direction', dir)
  }, [language])

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: resolveTranslations(language),
    isRTL: language === 'ar',
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export type { Language, Translations }

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
