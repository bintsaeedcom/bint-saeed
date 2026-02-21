'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGlobe, FiChevronDown } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { Language } from '@/lib/i18n/translations'

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark'
}

export default function LanguageSwitcher({ variant = 'dark' }: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages: { code: Language; label: string; native: string }[] = [
    { code: 'en', label: 'English', native: 'EN' },
    { code: 'ar', label: 'العربية', native: 'عر' },
  ]

  const currentLang = languages.find(l => l.code === language)

  const textColor = variant === 'light' 
    ? 'text-white hover:text-white/70' 
    : 'text-brand-darkRed hover:text-brand-dustyBlue'
  
  const bgColor = variant === 'light'
    ? 'bg-white/10 border-white/20'
    : 'bg-white border-brand-stone/30'

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.1em] transition-colors ${textColor}`}
        data-cursor-hover
      >
        <FiGlobe className="w-4 h-4" />
        <span>{currentLang?.native}</span>
        <FiChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`absolute top-full mt-2 right-0 ${bgColor} border shadow-lg z-50 min-w-[140px]`}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code)
                    setIsOpen(false)
                  }}
                  className={`w-full text-left px-4 py-3 font-roboto text-sm tracking-wide transition-colors ${
                    language === lang.code
                      ? variant === 'light' 
                        ? 'bg-white/20 text-white' 
                        : 'bg-brand-stone/20 text-brand-darkRed'
                      : variant === 'light'
                        ? 'text-white/80 hover:bg-white/10'
                        : 'text-brand-clayRed hover:bg-brand-dustyBlue/10'
                  }`}
                  data-cursor-hover
                >
                  {lang.label}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
