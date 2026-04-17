'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiCheck } from 'react-icons/fi'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'

interface CurrencySwitcherProps {
  variant?: 'light' | 'dark'
  showSymbol?: boolean
  align?: 'start' | 'end'
}

export default function CurrencySwitcher({
  variant = 'dark',
  showSymbol = true,
  align = 'end',
}: CurrencySwitcherProps) {
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

  const dropdownSurfaceClass =
    'bg-[linear-gradient(90deg,rgba(18,8,11,0.82)_0%,rgba(28,15,21,0.8)_22%,rgba(45,20,30,0.78)_50%,rgba(28,15,21,0.8)_78%,rgba(18,8,11,0.82)_100%)] border border-white/18 backdrop-blur-xl shadow-[0_18px_40px_rgba(10,4,8,0.38)]'

  const itemHover = 'hover:bg-white/10'
  const menuAlignClass =
    align === 'start'
      ? isRTL
        ? 'right-0'
        : 'left-0'
      : isRTL
        ? 'left-0'
        : 'right-0'
  const currencyFlags: Record<string, string> = {
    AED: '🇦🇪',
    USD: '🇺🇸',
    EUR: '🇪🇺',
    GBP: '🇬🇧',
    CHF: '🇨🇭',
    SAR: '🇸🇦',
    KWD: '🇰🇼',
    QAR: '🇶🇦',
    BHD: '🇧🇭',
    OMR: '🇴🇲',
  }

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 font-montserrat text-xs uppercase tracking-[0.1em] transition-colors ${textColor} ${isRTL ? 'flex-row-reverse' : ''}`}
        data-cursor-hover
      >
        <span aria-hidden>{currencyFlags[currency.code] ?? '💱'}</span>
        <span>{currency.code}</span>
        {showSymbol && <span className="text-[10px]">{currency.symbol}</span>}
        <FiChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full z-[65] mt-2 ${menuAlignClass} max-h-72 min-w-[220px] overflow-y-auto overscroll-contain rounded-lg py-2 ${dropdownSurfaceClass}`}
          >
            {currencies.map((c) => (
              <button
                key={c.code}
                type="button"
                onClick={() => {
                  setCurrency(c.code)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center justify-between px-4 py-2.5 transition-colors ${itemHover} ${isRTL ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span aria-hidden>{currencyFlags[c.code] ?? '💱'}</span>
                  <span className="font-montserrat text-xs font-medium text-white">
                    {c.code}
                  </span>
                  <span className="font-montserrat text-xs text-white/60">
                    {c.symbol}
                  </span>
                </div>
                {currency.code === c.code && (
                  <FiCheck className="w-4 h-4 text-white" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
