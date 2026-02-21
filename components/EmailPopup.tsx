'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiX } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import toast from 'react-hot-toast'

export default function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [discountCode, setDiscountCode] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '' })
  const { isRTL } = useLanguage()

  useEffect(() => {
    // Check if user has already seen/dismissed the popup
    const hasSeenPopup = localStorage.getItem('bint-saeed-popup-seen')
    const hasSubscribed = localStorage.getItem('bint-saeed-subscribed')
    
    if (!hasSeenPopup && !hasSubscribed) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => setIsOpen(true), 5000)
      return () => clearTimeout(timer)
    }
  }, [])

  const generateDiscountCode = () => {
    // Generate unique discount code: BINT + random alphanumeric
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let code = 'WELCOME'
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return code
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Generate unique discount code
      const code = generateDiscountCode()
      
      // Send to your API (Mailerlite + Slack + store code)
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          discountCode: code,
          source: 'popup'
        }),
      })

      if (response.ok) {
        setDiscountCode(code)
        setShowSuccess(true)
        localStorage.setItem('bint-saeed-subscribed', 'true')
        localStorage.setItem('bint-saeed-discount-code', code)
      } else {
        throw new Error('Failed to subscribe')
      }
    } catch (error) {
      toast.error(isRTL ? 'حدث خطأ. حاولي مرة أخرى.' : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('bint-saeed-popup-seen', 'true')
  }

  const copyCode = () => {
    navigator.clipboard.writeText(discountCode)
    toast.success(isRTL ? 'تم نسخ الكود!' : 'Code copied!')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
            data-cursor-hover
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-3xl md:w-full z-[201] overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[500px] shadow-2xl"
            data-cursor-hover
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 text-white hover:text-brand-dustyBlue transition-colors bg-brand-darkRed/80 rounded-full"
              data-cursor-hover
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* Image Side */}
            <div className="relative w-full md:w-1/2 h-48 md:h-auto flex-shrink-0 bg-brand-darkRed">
              <Image
                src="https://images.unsplash.com/photo-1590003511523-9c5e5e60a3b1?w=800&q=90"
                alt="Bint Saeed Collection"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-darkRed/40 to-transparent" />
              {/* Decorative text */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10">
                <span className="font-rozha text-3xl md:text-4xl text-white/90 leading-tight">
                  {isRTL ? 'خصم حصري' : 'Exclusive Offer'}
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className={`flex-1 p-8 md:p-10 flex flex-col justify-center bg-brand-stone ${isRTL ? 'text-right' : ''}`}>
              {!showSuccess ? (
                <>
                  <h2 className="font-rozha text-2xl md:text-3xl text-brand-darkRed mb-3">
                    {isRTL ? 'احصلي على خصم 10%' : 'Get 10% Off'}
                  </h2>
                  <p className="font-roboto text-sm text-brand-darkRed/70 tracking-wide mb-6">
                    {isRTL 
                      ? 'اشتركي في نشرتنا واحصلي على خصم حصري على طلبك الأول، بالإضافة إلى أحدث التصاميم والعروض.'
                      : 'Subscribe to our newsletter and receive an exclusive discount on your first order, plus the latest designs and offers.'}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      required
                      placeholder={isRTL ? 'الاسم الأول' : 'First name'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 bg-white border border-brand-darkRed/20 font-roboto text-sm tracking-wide focus:border-brand-darkRed focus:outline-none transition-colors ${isRTL ? 'text-right' : ''}`}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    />
                    <input
                      type="email"
                      required
                      placeholder={isRTL ? 'البريد الإلكتروني' : 'Email'}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 bg-white border border-brand-darkRed/20 font-roboto text-sm tracking-wide focus:border-brand-darkRed focus:outline-none transition-colors ${isRTL ? 'text-right' : ''}`}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-brand-darkRed text-white font-roboto text-sm uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-colors disabled:opacity-50"
                      data-cursor-hover
                    >
                      {isSubmitting 
                        ? (isRTL ? 'جاري التسجيل...' : 'Signing up...') 
                        : (isRTL ? 'اشتركي الآن' : 'Sign me up!')}
                    </button>
                  </form>

                  <p className="font-roboto text-xs text-brand-darkRed/50 mt-4">
                    {isRTL 
                      ? 'بالاشتراك، توافقين على سياسة الخصوصية وتلقي رسائل تسويقية.'
                      : 'By subscribing, you agree to our Privacy Policy and receiving marketing emails.'}
                  </p>
                </>
              ) : (
                /* Success State */
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-darkRed/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🎉</span>
                  </div>
                  <h2 className="font-rozha text-2xl md:text-3xl text-brand-darkRed mb-3">
                    {isRTL ? 'مرحباً بك!' : 'Welcome!'}
                  </h2>
                  <p className="font-roboto text-sm text-brand-darkRed/70 tracking-wide mb-6">
                    {isRTL 
                      ? 'هذا كود الخصم الخاص بك:'
                      : 'Here\'s your exclusive discount code:'}
                  </p>
                  
                  <div 
                    onClick={copyCode}
                    className="bg-white border-2 border-dashed border-brand-darkRed px-6 py-4 mb-4 cursor-pointer hover:bg-brand-dustyBlue/20 transition-colors"
                    data-cursor-hover
                  >
                    <span className="font-roboto font-bold text-2xl text-brand-darkRed tracking-[0.2em]">
                      {discountCode}
                    </span>
                  </div>
                  
                  <p className="font-roboto text-xs text-brand-darkRed/60 mb-6">
                    {isRTL 
                      ? 'اضغطي لنسخ الكود • صالح لمدة 30 يوم'
                      : 'Click to copy • Valid for 30 days'}
                  </p>

                  <button
                    onClick={handleClose}
                    className="px-8 py-3 bg-brand-darkRed text-white font-roboto text-sm uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-colors"
                    data-cursor-hover
                  >
                    {isRTL ? 'ابدئي التسوق' : 'Start Shopping'}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
