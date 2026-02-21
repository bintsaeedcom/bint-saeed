'use client'

import { useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCheck, FiShoppingBag, FiArrowLeft } from 'react-icons/fi'
import { useCartStore } from '@/store/cartStore'

function CheckoutSuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const clearCart = useCartStore((state) => state.clearCart)

  useEffect(() => {
    if (sessionId) {
      clearCart()
    }
  }, [sessionId, clearCart])

  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center relative">
      {/* Subtle background effects */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-stone/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-dustyBlue/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-6 lg:left-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-roboto text-sm uppercase tracking-[0.15em] text-brand-clayRed hover:text-brand-dustyBlue transition-colors group"
            data-cursor-hover
          >
            <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto text-center"
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

            <h1 className="font-rozha text-4xl text-brand-darkRed mb-4">
              Thank You!
            </h1>
            <p className="font-roboto text-brand-clayRed tracking-wide mb-8 leading-relaxed">
              Your order has been confirmed. We've sent a confirmation email with your order details. 
              Our team is preparing your beautiful pieces with care.
            </p>

            {sessionId && (
              <p className="font-roboto text-xs text-brand-stone tracking-wide mb-8">
                Order Reference: {sessionId.slice(-8).toUpperCase()}
              </p>
            )}

            <div className="space-y-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-brand-darkRed text-white font-roboto text-sm uppercase tracking-[0.2em] hover:bg-brand-dustyBlue transition-colors"
                data-cursor-hover
              >
                <FiShoppingBag className="w-4 h-4" />
                Continue Shopping
              </Link>
              <Link
                href="/"
                className="inline-block w-full px-8 py-4 border border-brand-darkRed text-brand-darkRed font-roboto text-sm uppercase tracking-[0.2em] hover:bg-brand-dustyBlue hover:text-white transition-colors"
                data-cursor-hover
              >
                Back to Home
              </Link>
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
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="animate-pulse text-brand-clayRed">Loading...</div>
      </div>
    }>
      <CheckoutSuccessContent />
    </Suspense>
  )
}
