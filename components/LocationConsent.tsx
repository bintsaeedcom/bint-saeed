'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMapPin, FiGlobe, FiX } from 'react-icons/fi'
import { useCurrency, currencies } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'

interface DetectedLocation {
  country: string
  countryCode: string
  currency: string
  city?: string
}

export default function LocationConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [detectedLocation, setDetectedLocation] = useState<DetectedLocation | null>(null)
  const { currency, setCurrency } = useCurrency()
  const { isRTL } = useLanguage()

  useEffect(() => {
    const hasConsented = localStorage.getItem('bint-saeed-location-consent')
    const hasDismissed = localStorage.getItem('bint-saeed-location-dismissed')
    
    if (hasConsented || hasDismissed) return

    // Detect location
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        
        const countryToCurrency: Record<string, string> = {
          AE: 'AED', SA: 'SAR', KW: 'KWD', QA: 'QAR',
          BH: 'BHD', OM: 'OMR', US: 'USD', GB: 'GBP',
          DE: 'EUR', FR: 'EUR', IT: 'EUR', ES: 'EUR', NL: 'EUR',
        }

        const suggestedCurrency = countryToCurrency[data.country_code] || 'USD'
        
        // Only show if detected currency differs from current
        if (suggestedCurrency !== currency.code) {
          setDetectedLocation({
            country: data.country_name,
            countryCode: data.country_code,
            currency: suggestedCurrency,
            city: data.city,
          })
          
          // Show after a short delay
          setTimeout(() => setIsVisible(true), 2000)
        }
      } catch (error) {
        console.log('Location detection failed')
      }
    }

    detectLocation()
  }, [currency.code])

  const handleAccept = () => {
    if (detectedLocation) {
      setCurrency(detectedLocation.currency)
      localStorage.setItem('bint-saeed-location-consent', 'true')
    }
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('bint-saeed-location-dismissed', 'true')
    setIsVisible(false)
  }

  const suggestedCurrencyData = currencies.find(c => c.code === detectedLocation?.currency)

  return (
    <AnimatePresence>
      {isVisible && detectedLocation && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`fixed bottom-24 ${isRTL ? 'left-6' : 'right-6'} z-[90] max-w-sm`}
        >
          <div className="bg-white border border-brand-stone/20 shadow-2xl rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-brand-darkRed px-5 py-4 flex items-center justify-between">
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <FiMapPin className="w-5 h-5 text-white" />
                </div>
                <div className={isRTL ? 'text-right' : ''}>
                  <p className="font-roboto text-xs text-white/60 uppercase tracking-wider">
                    {isRTL ? 'تم اكتشاف موقعك' : 'Location Detected'}
                  </p>
                  <p className="font-rozha text-lg text-white">
                    {detectedLocation.city ? `${detectedLocation.city}, ` : ''}{detectedLocation.country}
                  </p>
                </div>
              </div>
              <button
                onClick={handleDecline}
                className="text-white/60 hover:text-white transition-colors"
                data-cursor-hover
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-5">
              <p className={`font-roboto text-sm text-brand-clayRed tracking-wide mb-4 ${isRTL ? 'text-right' : ''}`}>
                {isRTL 
                  ? `هل تريدين عرض الأسعار بعملة ${suggestedCurrencyData?.name}؟`
                  : `Would you like to see prices in ${suggestedCurrencyData?.name}?`}
              </p>

              {/* Currency Preview */}
              <div className="bg-brand-stone/10 rounded-lg p-4 mb-4">
                <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="font-roboto text-xs text-brand-clayRed/60 uppercase tracking-wider">
                    {isRTL ? 'مثال' : 'Example'}
                  </span>
                  <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="font-roboto text-sm text-brand-clayRed/50 line-through">
                      1,000 د.إ
                    </span>
                    <span className="font-roboto text-sm text-brand-darkRed font-medium">
                      → {suggestedCurrencyData?.symbol}{Math.round(1000 * (suggestedCurrencyData?.rate || 1))}
                    </span>
                  </div>
                </div>
              </div>

              {/* Worldwide Shipping Note */}
              <div className={`flex items-center gap-2 mb-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <FiGlobe className="w-4 h-4 text-brand-dustyBlue" />
                <span className="font-roboto text-xs text-brand-clayRed/70">
                  {isRTL ? 'نشحن إلى جميع أنحاء العالم' : 'We ship worldwide'}
                </span>
              </div>

              {/* Actions */}
              <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <button
                  onClick={handleDecline}
                  className="flex-1 px-4 py-3 border border-brand-stone/30 text-brand-clayRed font-roboto text-xs uppercase tracking-[0.1em] hover:bg-brand-dustyBlue/10 transition-colors"
                  data-cursor-hover
                >
                  {isRTL ? 'لا شكراً' : 'No Thanks'}
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 px-4 py-3 bg-brand-darkRed text-white font-roboto text-xs uppercase tracking-[0.1em] hover:bg-brand-dustyBlue transition-colors"
                  data-cursor-hover
                >
                  {isRTL ? `استخدمي ${detectedLocation.currency}` : `Use ${detectedLocation.currency}`}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
