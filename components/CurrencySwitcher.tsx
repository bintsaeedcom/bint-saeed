'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiCheck } from 'react-icons/fi'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'

interface CurrencySwitcherProps {
  variant?: 'light' | 'dark'
}

export default function CurrencySwitcher({ variant = 'dark' }: CurrencySwitcherProps) {
  const { currency, setCurrency, currencies } = useCurrency()
  const { isRTL } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const textColor = variant === 'light' 
    ? 'text-white/80 hover:text-white' 
    : 'text-brand-clayRed hover:text-brand-dustyBlue'

  const dropdownBg = variant === 'light'
    ? 'bg-brand-darkRed/95 backdrop-blur-md border-white/10'
    : 'bg-white border-brand-stone/20 shadow-xl'

  const itemHover = variant === 'light'
    ? 'hover:bg-white/10'
    : 'hover:bg-brand-dustyBlue/10'

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 font-roboto text-xs uppercase tracking-[0.1em] transition-colors ${textColor} ${isRTL ? 'flex-row-reverse' : ''}`}
        data-cursor-hover
      >
        <span>{currency.code}</span>
        <span className="text-[10px]">{currency.symbol}</span>
        <FiChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full mt-2 ${isRTL ? 'left-0' : 'right-0'} min-w-[180px] py-2 border rounded-lg z-50 ${dropdownBg}`}
          >
            {currencies.map((c) => (
              <button
                key={c.code}
                onClick={() => {
                  setCurrency(c.code)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center justify-between px-4 py-2.5 transition-colors ${itemHover} ${isRTL ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={`font-roboto text-xs font-medium ${variant === 'light' ? 'text-white' : 'text-brand-darkRed'}`}>
                    {c.code}
                  </span>
                  <span className={`font-roboto text-xs ${variant === 'light' ? 'text-white/60' : 'text-brand-clayRed/60'}`}>
                    {c.symbol}
                  </span>
                </div>
                {currency.code === c.code && (
                  <FiCheck className={`w-4 h-4 ${variant === 'light' ? 'text-white' : 'text-brand-darkRed'}`} />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
