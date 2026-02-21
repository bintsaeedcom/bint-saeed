'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiArrowLeft, FiArrowRight, FiGlobe, FiTruck, FiInfo } from 'react-icons/fi'
import { useCartStore } from '@/store/cartStore'
import { loadStripe } from '@stripe/stripe-js'
import toast from 'react-hot-toast'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore()
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const { formatPrice } = useCurrency()
  const { isRTL } = useLanguage()

  const handleCheckout = async () => {
    if (items.length === 0) {
      toast.error('Your bag is empty')
      return
    }

    setIsCheckingOut(true)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      })

      const { sessionId, error } = await response.json()

      if (error) {
        throw new Error(error)
      }

      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')
      
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId })
      }
    } catch (error) {
      console.error('Checkout error:', error)
      toast.error('Unable to process checkout. Please try again.')
    } finally {
      setIsCheckingOut(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md mx-auto py-20"
          >
            <FiShoppingBag className="w-16 h-16 text-brand-stone mx-auto mb-8" />
            <h1 className="font-rozha text-3xl md:text-4xl text-brand-darkRed mb-4">
              Your Bag is Empty
            </h1>
            <p className="font-roboto text-sm text-brand-clayRed/70 tracking-wide mb-10">
              Discover our collection and find pieces that speak to you.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-10 py-4 bg-brand-darkRed text-white font-roboto text-sm uppercase tracking-[0.2em] hover:bg-brand-dustyBlue transition-colors"
              data-cursor-hover
            >
              Continue Shopping
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="pt-28 pb-6 border-b border-brand-stone/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.15em] text-brand-clayRed hover:text-brand-dustyBlue transition-colors group"
              data-cursor-hover
            >
              <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Continue Shopping
            </Link>
            <h1 className="font-rozha text-2xl md:text-3xl text-brand-darkRed">
              Shopping Bag ({items.length})
            </h1>
            <div className="w-32" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {items.map((item, index) => (
                <motion.div
                  key={`${item.id}-${item.size}-${item.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 pb-8 border-b border-brand-stone/20"
                >
                  {/* Image */}
                  <Link href={`/shop/${item.id}`} className="flex-shrink-0" data-cursor-hover>
                    <div className="relative w-28 md:w-36 aspect-[3/4] bg-[#f5f5f5]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <Link href={`/shop/${item.id}`} data-cursor-hover>
                        <h3 className="font-rozha text-lg md:text-xl text-brand-darkRed mb-2 hover:text-brand-dustyBlue transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <div className="font-roboto text-xs text-brand-clayRed/60 tracking-wide space-y-1">
                        <p>Size: {item.size}</p>
                        <p>Color: {item.color}</p>
                        {item.customLength && <p>Length: {item.customLength}</p>}
                        {item.notes && <p>Notes: {item.notes}</p>}
                      </div>
                    </div>

                    {/* Price & Actions */}
                    <div className="flex items-end justify-between mt-4">
                      <p className="font-roboto text-base text-brand-darkRed tracking-wide">
                        {formatPrice(item.price)}
                      </p>

                      <div className="flex items-center gap-4">
                        {/* Quantity */}
                        <div className="flex items-center border border-brand-stone/30">
                          <button
                            onClick={() => updateQuantity(item.id, item.size, item.color, Math.max(1, item.quantity - 1))}
                            className="px-3 py-2 text-brand-darkRed hover:bg-brand-dustyBlue/10 transition-colors"
                            data-cursor-hover
                          >
                            <FiMinus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-roboto text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                            className="px-3 py-2 text-brand-darkRed hover:bg-brand-dustyBlue/10 transition-colors"
                            data-cursor-hover
                          >
                            <FiPlus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeItem(item.id, item.size, item.color)}
                          className="text-brand-clayRed/50 hover:text-brand-dustyBlue transition-colors"
                          data-cursor-hover
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className={`sticky top-32 bg-[#f8f7f5] p-8 ${isRTL ? 'text-right' : ''}`}>
              <h2 className="font-rozha text-2xl text-brand-darkRed mb-6">
                {isRTL ? 'ملخص الطلب' : 'Order Summary'}
              </h2>

              <div className="space-y-4 mb-6">
                <div className={`flex justify-between font-roboto text-sm tracking-wide ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-brand-clayRed/70">{isRTL ? 'المجموع الفرعي' : 'Subtotal'}</span>
                  <span className="text-brand-darkRed">{formatPrice(getTotal())}</span>
                </div>
                
                {/* Shipping Notice */}
                <div className={`flex items-start gap-2 p-3 bg-brand-dustyBlue/10 rounded-lg ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <FiInfo className="w-4 h-4 text-brand-dustyBlue flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-roboto text-xs text-brand-clayRed tracking-wide">
                      {isRTL 
                        ? 'يتم احتساب الشحن عند الدفع بناءً على موقعك'
                        : 'Shipping calculated at checkout based on your location'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-brand-stone/30 pt-6 mb-6">
                <div className={`flex justify-between font-roboto text-base tracking-wide ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-brand-darkRed uppercase tracking-[0.1em]">
                    {isRTL ? 'المجموع' : 'Subtotal'}
                  </span>
                  <span className="text-brand-darkRed font-medium">
                    {formatPrice(getTotal())}
                  </span>
                </div>
                <p className={`font-roboto text-[10px] text-brand-clayRed/50 tracking-wide mt-1 ${isRTL ? 'text-right' : ''}`}>
                  {isRTL ? '+ الشحن (يُحسب عند الدفع)' : '+ Shipping (calculated at checkout)'}
                </p>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className={`w-full py-4 bg-brand-darkRed text-white font-roboto text-sm uppercase tracking-[0.2em] hover:bg-brand-dustyBlue transition-colors disabled:opacity-50 flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                {isCheckingOut ? (
                  isRTL ? 'جاري المعالجة...' : 'Processing...'
                ) : (
                  <>
                    {isRTL ? 'الدفع الآن' : 'Proceed to Checkout'}
                    <FiArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </>
                )}
              </button>

              {/* Worldwide Shipping Badge */}
              <div className={`flex items-center justify-center gap-2 mt-6 py-3 border-t border-b border-brand-stone/20 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <FiGlobe className="w-4 h-4 text-brand-darkRed" />
                <span className="font-roboto text-xs uppercase tracking-[0.15em] text-brand-darkRed">
                  {isRTL ? 'نشحن لجميع أنحاء العالم' : 'We Ship Worldwide'}
                </span>
              </div>

              {/* Shipping Info */}
              <div className="mt-4 space-y-3">
                <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <FiTruck className="w-4 h-4 text-brand-clayRed/50 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-roboto text-xs text-brand-clayRed/70 tracking-wide">
                      {isRTL ? 'شحن مجاني للإمارات والخليج للطلبات فوق 500 درهم' : 'Free UAE & GCC shipping on orders over 500 AED'}
                    </p>
                  </div>
                </div>
                <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <FiGlobe className="w-4 h-4 text-brand-clayRed/50 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-roboto text-xs text-brand-clayRed/70 tracking-wide">
                      {isRTL ? 'الشحن الدولي متاح - يُحسب عند الدفع' : 'International shipping available - rates at checkout'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Delivery Time */}
              <div className={`mt-4 p-3 bg-brand-stone/10 rounded-lg ${isRTL ? 'text-right' : ''}`}>
                <p className="font-roboto text-[10px] uppercase tracking-[0.15em] text-brand-clayRed/50 mb-1">
                  {isRTL ? 'مدة التوصيل' : 'Delivery Time'}
                </p>
                <p className="font-roboto text-xs text-brand-darkRed tracking-wide">
                  {isRTL ? 'الطلبات تُصنع يدوياً وتُسلم خلال أسبوعين' : 'Orders are handcrafted and delivered within 2 weeks'}
                </p>
              </div>

              {/* Secure Payment */}
              <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-brand-stone/30">
                <span className="font-roboto text-[10px] uppercase tracking-[0.1em] text-brand-clayRed/50">
                  {isRTL ? 'دفع آمن' : 'Secure Payment'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
