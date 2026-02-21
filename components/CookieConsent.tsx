'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FiX, FiShield } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const { t, isRTL } = useLanguage()

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setShowConsent(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all')
    localStorage.setItem('analyticsConsent', 'true')
    localStorage.setItem('marketingConsent', 'true')
    setShowConsent(false)
  }

  const acceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential')
    localStorage.setItem('analyticsConsent', 'false')
    localStorage.setItem('marketingConsent', 'false')
    setShowConsent(false)
  }

  return (
    <AnimatePresence>
      {showConsent && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100]"
            onClick={() => setShowDetails(false)}
            data-cursor-hover
          />
          
          {/* Cookie Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[101] p-4 md:p-6"
            data-cursor-hover
          >
            <div className="container mx-auto">
              <div className="bg-brand-stone border-t-4 border-brand-darkRed shadow-2xl rounded-none md:rounded-t-2xl p-6 md:p-8 max-w-4xl mx-auto">
                {/* Header */}
                <div className={`flex items-start justify-between mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-12 h-12 bg-brand-darkRed/20 rounded-full flex items-center justify-center">
                      <FiShield className="w-6 h-6 text-brand-darkRed" />
                    </div>
                    <div>
                      <h4 className="font-rozha text-2xl text-brand-darkRed">
                        {t.cookie.title || 'We Value Your Privacy'}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`mb-8 ${isRTL ? 'text-right' : ''}`}>
                  <p className="font-roboto text-sm md:text-base text-brand-darkRed/80 tracking-wide leading-relaxed">
                    {t.cookie.message}
                  </p>
                  
                  {/* Cookie Details Toggle */}
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="font-roboto text-sm text-brand-darkRed underline mt-3 hover:text-brand-dustyBlue transition-colors"
                    data-cursor-hover
                  >
                    {showDetails ? (t.cookie.hideDetails || 'Hide details') : (t.cookie.showDetails || 'Show details')}
                  </button>
                  
                  {/* Cookie Details */}
                  <AnimatePresence>
                    {showDetails && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 p-6 bg-white/60 rounded-lg">
                          <div className="grid md:grid-cols-3 gap-6">
                            {/* Essential */}
                            <div>
                              <div className={`flex items-center justify-between mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <span className="font-roboto font-medium text-sm text-brand-darkRed">
                                  {t.cookie.essential || 'Essential'}
                                </span>
                                <span className="text-xs text-brand-clayRed bg-brand-stone/30 px-2 py-1 rounded">
                                  {t.cookie.alwaysOn || 'Always on'}
                                </span>
                              </div>
                              <p className="font-roboto text-xs text-brand-clayRed/70 leading-relaxed">
                                {t.cookie.essentialDesc || 'Required for the website to function. Cannot be disabled.'}
                              </p>
                            </div>
                            
                            {/* Analytics */}
                            <div>
                              <div className={`flex items-center justify-between mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <span className="font-roboto font-medium text-sm text-brand-darkRed">
                                  {t.cookie.analytics || 'Analytics'}
                                </span>
                                <span className="text-xs text-brand-clayRed bg-brand-dustyBlue/20 px-2 py-1 rounded">
                                  {t.cookie.optional || 'Optional'}
                                </span>
                              </div>
                              <p className="font-roboto text-xs text-brand-clayRed/70 leading-relaxed">
                                {t.cookie.analyticsDesc || 'Help us understand how visitors interact with our website.'}
                              </p>
                            </div>
                            
                            {/* Marketing */}
                            <div>
                              <div className={`flex items-center justify-between mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <span className="font-roboto font-medium text-sm text-brand-darkRed">
                                  {t.cookie.marketing || 'Marketing'}
                                </span>
                                <span className="text-xs text-brand-clayRed bg-brand-dustyBlue/20 px-2 py-1 rounded">
                                  {t.cookie.optional || 'Optional'}
                                </span>
                              </div>
                              <p className="font-roboto text-xs text-brand-clayRed/70 leading-relaxed">
                                {t.cookie.marketingDesc || 'Used to show you relevant advertisements.'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Actions */}
                <div className={`flex flex-col sm:flex-row gap-3 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                  <button
                    onClick={acceptEssential}
                    className="flex-1 sm:flex-none px-8 py-4 border border-brand-darkRed text-brand-darkRed font-roboto text-xs uppercase tracking-[0.15em] hover:bg-brand-dustyBlue hover:text-white transition-all duration-300"
                    data-cursor-hover
                  >
                    {t.cookie.essentialOnly}
                  </button>
                  <button
                    onClick={acceptAll}
                    className="flex-1 sm:flex-none px-8 py-4 bg-brand-darkRed text-white font-roboto text-xs uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-all duration-300"
                    data-cursor-hover
                  >
                    {t.cookie.acceptAll}
                  </button>
                  <Link
                    href="/cookie-policy"
                    className={`flex-1 sm:flex-none px-8 py-4 text-brand-clayRed font-roboto text-xs uppercase tracking-[0.15em] hover:text-brand-dustyBlue transition-colors text-center ${isRTL ? 'sm:mr-auto' : 'sm:ml-auto'}`}
                    data-cursor-hover
                  >
                    {t.cookie.learnMore}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
