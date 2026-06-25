'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiTruck, FiGift, FiCreditCard } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'

export default function DeliveryBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)

  const messages = useMemo(
    () => [
      { icon: FiTruck, text: ui.deliveryBanner.uaeFree },
      { icon: FiGift, text: ui.deliveryBanner.worldwide },
      { icon: FiCreditCard, text: ui.deliveryBanner.tabby },
    ],
    [ui.deliveryBanner],
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
        <div className={`flex items-center justify-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <CurrentIcon className="w-4 h-4 text-brand-dustyBlue" />
              <span className="font-montserrat text-xs tracking-wide">
                {messages[currentIndex].text}
              </span>
            </motion.div>
          </AnimatePresence>

          <div className="hidden md:flex items-center gap-1.5 ml-4">
            {messages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  currentIndex === index ? 'bg-brand-darkRed w-4' : 'bg-brand-darkRed/40'
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'left-4' : 'right-4'} text-brand-darkRed/60 hover:text-brand-darkRed transition-colors`}
          aria-label={ui.common.close}
          data-cursor-hover
        >
          <FiX className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
