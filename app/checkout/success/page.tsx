'use client'

import { useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { FiCheck, FiShoppingBag } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { useCartStore } from '@/store/cartStore'
import { trackEvent } from '@/lib/analytics/tracking'

function CheckoutSuccessContent() {
  const searchParams = useSearchParams()
  const { isRTL } = useLanguage()
  const sessionId = searchParams?.get('session_id')
  const clearCart = useCartStore((state) => state.clearCart)

  useEffect(() => {
    if (sessionId) {
      trackEvent('purchase', { session_id: sessionId })
      clearCart()
    }
  }, [sessionId, clearCart])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-brand-pageCanvas pb-20 pt-24 sm:pt-28">
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-brand-stone/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 h-80 w-80 rounded-full bg-brand-dustyBlue/5 blur-3xl" />

      <div className="container relative mx-auto min-w-0 px-6 lg:px-12">
        <AppPageWayfinding
          rtl={isRTL}
          className="mb-10"
          segments={[
            { label: isRTL ? 'الرئيسية' : 'Home', href: '/home' },
            { label: isRTL ? 'تأكيد الطلب' : 'Order Confirmed' },
          ]}
          backLink={{
            href: '/home',
            label: isRTL ? 'العودة للرئيسية' : 'Back to Home',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-lg text-center"
        >
          <div className="glass-card rounded-2xl p-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <FiCheck className="w-10 h-10 text-green-600" />
            </motion.div>

            <h1 data-document-h1="true" className="font-rozha text-4xl text-brand-darkRed mb-4">
              Thank You!
            </h1>
            <p className="font-montserrat text-brand-clayRed tracking-wide mb-8 leading-relaxed">
              Your order has been confirmed. We've sent a confirmation email with your order details. 
              Our team is preparing your beautiful pieces with care.
            </p>

            {sessionId && (
              <p className="font-montserrat text-xs text-brand-stone tracking-wide mb-8">
                Order Reference: {sessionId.slice(-8).toUpperCase()}
              </p>
            )}

            <div className="space-y-4">
              <LocaleLink
                href="/shop"
                className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 px-8 py-4 bg-brand-darkRed text-white font-montserrat text-sm uppercase tracking-[0.2em] hover:bg-brand-dustyBlue transition-colors"
                data-cursor-hover
              >
                <FiShoppingBag className="w-4 h-4" />
                Continue Shopping
              </LocaleLink>
              <LocaleLink
                href="/"
                className="inline-flex min-h-[52px] w-full items-center justify-center px-8 py-4 border border-brand-darkRed text-brand-darkRed font-montserrat text-sm uppercase tracking-[0.2em] hover:bg-brand-dustyBlue hover:text-white transition-colors"
                data-cursor-hover
              >
                Back to Home
              </LocaleLink>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center pb-20 pt-4 sm:pt-6 md:pt-8">
        <div className="animate-pulse text-brand-clayRed">Loading...</div>
      </div>
    }>
      <CheckoutSuccessContent />
    </Suspense>
  )
}
