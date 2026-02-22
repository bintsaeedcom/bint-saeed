'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiTruck, FiGift, FiCreditCard } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function DeliveryBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const { isRTL } = useLanguage()

  const messages = [
    {
      icon: FiTruck,
      text: isRTL ? 'شحن مجاني للإمارات والخليج • توصيل خلال أسبوعين' : 'Free UAE & GCC Shipping • Delivery in 2 Weeks',
    },
    {
      icon: FiGift,
      text: isRTL ? 'نشحن لجميع أنحاء العالم • رسوم الشحن تُحسب عند الدفع' : 'We Ship Worldwide • Shipping Calculated at Checkout',
    },
    {
      icon: FiCreditCard,
      text: isRTL ? 'ادفعي على 4 دفعات بدون فوائد مع تابي' : 'Pay in 4 Interest-Free Payments with Tabby',
    },
  ]

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
              <span className="font-roboto text-xs tracking-wide">
                {messages[currentIndex].text}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
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

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'left-4' : 'right-4'} text-brand-darkRed/60 hover:text-brand-darkRed transition-colors`}
          data-cursor-hover
        >
          <FiX className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
