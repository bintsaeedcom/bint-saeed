'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGlobe, FiChevronDown } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { Language } from '@/lib/i18n/translations'
import { stripLocaleFromPathname, localizedPath } from '@/lib/i18n/routing'

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark'
  align?: 'start' | 'end'
  /** Use `above` when the trigger sits at the bottom of the viewport (e.g. mobile menu footer). */
  dropdownPlacement?: 'below' | 'above'
}

type LangRow = { code: Language; label: string; native: string; flag: string }

const ALL_LANGUAGES: LangRow[] = [
  { code: 'en', label: 'English', native: 'EN', flag: '🇬🇧' },
  { code: 'ar', label: 'العربية', native: 'عر', flag: '🇦🇪' },
  { code: 'zh', label: '中文', native: '中', flag: '🇨🇳' },
  { code: 'de', label: 'Deutsch', native: 'DE', flag: '🇩🇪' },
  { code: 'fr', label: 'Français', native: 'FR', flag: '🇫🇷' },
  { code: 'it', label: 'Italiano', native: 'IT', flag: '🇮🇹' },
  { code: 'es', label: 'Español', native: 'ES', flag: '🇪🇸' },
  { code: 'ru', label: 'Русский', native: 'RU', flag: '🇷🇺' },
  { code: 'nl', label: 'Nederlands', native: 'NL', flag: '🇳🇱' },
  { code: 'pt', label: 'Português', native: 'PT', flag: '🇵🇹' },
]

export default function LanguageSwitcher({
  variant = 'dark',
  align = 'end',
  dropdownPlacement = 'below',
}: LanguageSwitcherProps) {
  const { language, setLanguage, t, isRTL } = useLanguage()
  const router = useRouter()
  const pathname = usePathname() || '/'
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLang = ALL_LANGUAGES.find((l) => l.code === language)

  const textColor =
    variant === 'light'
      ? 'text-white hover:text-white/70'
      : 'text-brand-darkRed hover:text-brand-dustyBlue'

  const dropdownSurfaceClass =
    'bg-[linear-gradient(90deg,rgba(18,8,11,0.82)_0%,rgba(28,15,21,0.8)_22%,rgba(45,20,30,0.78)_50%,rgba(28,15,21,0.8)_78%,rgba(18,8,11,0.82)_100%)] border border-white/18 backdrop-blur-xl shadow-[0_18px_40px_rgba(10,4,8,0.38)]'

  const itemHover =
    'text-white/85 hover:bg-white/10'
  const menuAlignClass =
    align === 'start'
      ? isRTL
        ? 'right-0'
        : 'left-0'
      : isRTL
        ? 'left-0'
        : 'right-0'

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  /** Outer panel + inner scroll region: viewport-aware so lists stay visible and scroll on small screens. */
  const menuPanelMax = 'max-h-[min(18rem,52dvh)]'
  const menuScrollMax = 'max-h-[min(17rem,48dvh)]'

  const openAbove = dropdownPlacement === 'above'
  const placementClass = openAbove
    ? `bottom-full mb-2 ${menuPanelMax}`
    : `top-full mt-2 ${menuPanelMax}`
  const animFrom = openAbove ? { opacity: 0, y: 10 } : { opacity: 0, y: -10 }
  const animTo = openAbove ? { opacity: 0, y: 10 } : { opacity: 0, y: -10 }

  const navigateToLanguage = (code: Language) => {
    const { pathname: inner } = stripLocaleFromPathname(pathname)
    const target = localizedPath(code === 'en' ? 'en' : code, inner)
    router.push(target, { scroll: false })
    setLanguage(code)
    setIsOpen(false)
  }

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.1em] transition-colors ${textColor}`}
        data-cursor-hover
      >
        <FiGlobe className="w-4 h-4" />
        <span>{currentLang?.native}</span>
        <FiChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="lang-switcher-menu"
              initial={animFrom}
              animate={{ opacity: 1, y: 0 }}
              exit={animTo}
              transition={{ duration: 0.2 }}
              className={`absolute z-[110] ${placementClass} ${menuAlignClass} min-w-[220px] max-w-[calc(100vw-2rem)] overflow-hidden overscroll-contain rounded-lg py-2 ${dropdownSurfaceClass}`}
            >
              <div
                className={`min-h-0 overflow-y-auto overscroll-y-contain px-0 py-1 [-webkit-overflow-scrolling:touch] touch-pan-y ${menuScrollMax}`}
              >
                {ALL_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => navigateToLanguage(lang.code)}
                    className={`flex w-full items-center gap-2 px-4 py-2.5 text-left font-montserrat text-sm tracking-wide transition-colors ${
                      language === lang.code ? 'bg-white/18 text-white' : itemHover
                    }`}
                    data-cursor-hover
                  >
                    <span>{lang.flag}</span>
                    <span className="truncate">{lang.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
