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
  /** Use `above` when the trigger sits at the bottom of the viewport (e.g. mobile menu footer). */
  dropdownPlacement?: 'below' | 'above'
}

export default function CurrencySwitcher({
  variant = 'dark',
  showSymbol = true,
  align = 'end',
  dropdownPlacement = 'below',
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
    'bg-[linear-gradient(120deg,rgba(20,9,13,0.92)_0%,rgba(35,17,24,0.9)_34%,rgba(60,24,37,0.88)_58%,rgba(28,14,20,0.9)_100%)] border border-white/20 backdrop-blur-xl shadow-[0_18px_42px_rgba(10,4,8,0.42)]'

  const itemHover = 'hover:bg-white/10'
  const menuAlignClass =
    align === 'start'
      ? isRTL
        ? 'right-0'
        : 'left-0'
      : isRTL
        ? 'left-0'
        : 'right-0'
  const openAbove = dropdownPlacement === 'above'
  const placementClass = openAbove
    ? 'bottom-full mb-2 max-h-[min(18rem,42dvh)]'
    : 'top-full mt-2 max-h-72'
  const animFrom = openAbove ? { opacity: 0, y: 10 } : { opacity: 0, y: -10 }
  const animTo = openAbove ? { opacity: 0, y: 10 } : { opacity: 0, y: -10 }

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
            initial={animFrom}
            animate={{ opacity: 1, y: 0 }}
            exit={animTo}
            transition={{ duration: 0.2 }}
            className={`absolute z-[90] ${placementClass} ${menuAlignClass} min-w-[230px] overflow-hidden rounded-xl p-1.5 ${dropdownSurfaceClass}`}
          >
            <div className="max-h-[min(18rem,42dvh)] overflow-y-auto overscroll-contain pr-0.5">
              {currencies.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => {
                    setCurrency(c.code)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center justify-between rounded-lg px-3.5 py-2.5 transition-colors ${itemHover} ${isRTL ? 'flex-row-reverse' : ''} ${
                    currency.code === c.code ? 'bg-white/14 ring-1 ring-white/16' : ''
                  }`}
                  data-cursor-hover
                >
                  <div className={`flex items-center gap-2.5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span aria-hidden>{currencyFlags[c.code] ?? '💱'}</span>
                    <span className="font-montserrat text-xs font-semibold tracking-[0.08em] text-white">
                      {c.code}
                    </span>
                    <span className="font-montserrat text-xs text-white/65">
                      {c.symbol}
                    </span>
                  </div>
                  {currency.code === c.code && (
                    <FiCheck className="w-4 h-4 text-white/95" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
