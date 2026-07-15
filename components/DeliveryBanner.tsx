'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiTruck, FiCreditCard } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { withShippingAmount } from '@/lib/shipping/withShippingAmount'
import { useVisitorComplimentaryShipping } from '@/lib/shipping/useVisitorComplimentaryShipping'

export default function DeliveryBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const { language } = useLanguage()
  const ui = commerceUi(language)
  const { currency } = useCurrency()
  const { amountLabel } = useVisitorComplimentaryShipping(currency.code)

  const messages = useMemo(
    () => [
      {
        icon: FiTruck,
        text: withShippingAmount(ui.deliveryBanner.worldwide, amountLabel),
      },
      { icon: FiCreditCard, text: ui.deliveryBanner.tabby },
    ],
    [ui.deliveryBanner, amountLabel],
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [messages.length])

  if (!isVisible) return null

  const CurrentIcon = messages[currentIndex].icon

  return (
    <div className="fixed top-0 left-0 right-0 z-[70] bg-brand-stone text-brand-darkRed py-2.5">
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-center gap-3 `}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`flex items-center gap-2 `}
            >
              <CurrentIcon className="h-4 w-4 text-brand-dustyBlue" />
              <span className="font-montserrat text-xs tracking-wide">{messages[currentIndex].text}</span>
            </motion.div>
          </AnimatePresence>

          <div className="ms-4 hidden items-center gap-1.5 md:flex">
            {messages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
 currentIndex === index ? 'w-4 bg-brand-darkRed' : 'w-1.5 bg-brand-darkRed/40'
 }`}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className={`absolute top-1/2 -translate-y-1/2 end-4 text-brand-darkRed/60 transition-colors hover:text-brand-darkRed`}
          aria-label={ui.common.close}
          data-cursor-hover
        >
          <FiX className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
