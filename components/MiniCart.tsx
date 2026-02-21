'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiX, FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiArrowRight } from 'react-icons/fi'
import { useCartStore } from '@/store/cartStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'

interface MiniCartProps {
  isOpen: boolean
  onClose: () => void
}

export default function MiniCart({ isOpen, onClose }: MiniCartProps) {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore()
  const { formatPrice } = useCurrency()
  const { isRTL } = useLanguage()

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: isRTL ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? '-100%' : '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className={`fixed top-0 ${isRTL ? 'left-0' : 'right-0'} h-full w-full max-w-md bg-white z-[101] flex flex-col ${isRTL ? 'rtl' : 'ltr'}`}
          >
            {/* Header */}
            <div className={`flex items-center justify-between p-4 sm:p-6 border-b border-brand-stone/20 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <h2 className="font-rozha text-xl sm:text-2xl text-brand-darkRed">
                {isRTL ? 'سلة التسوق' : 'Shopping Bag'} ({items.length})
              </h2>
              <button
                onClick={onClose}
                className="p-2 text-brand-clayRed hover:text-brand-dustyBlue transition-colors"
                data-cursor-hover
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                  <FiShoppingBag className="w-12 h-12 text-brand-stone/50 mb-4" />
                  <p className="font-rozha text-xl text-brand-darkRed mb-2">
                    {isRTL ? 'السلة فارغة' : 'Your bag is empty'}
                  </p>
                  <p className="font-roboto text-sm text-brand-clayRed/60 mb-6">
                    {isRTL ? 'اكتشفي مجموعتنا' : 'Discover our collection'}
                  </p>
                  <Link
                    href="/shop"
                    onClick={onClose}
                    className="px-6 py-3 bg-brand-darkRed text-white font-roboto text-xs uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-colors"
                    data-cursor-hover
                  >
                    {isRTL ? 'تسوقي الآن' : 'Shop Now'}
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-brand-stone/10">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}-${item.color}`} className={`p-4 flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      {/* Image */}
                      <Link href={`/shop/${item.id}`} onClick={onClose} className="flex-shrink-0" data-cursor-hover>
                        <div className="relative w-20 h-24 sm:w-24 sm:h-32 bg-[#f5f5f5] rounded-lg overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </Link>

                      {/* Details */}
                      <div className={`flex-1 min-w-0 ${isRTL ? 'text-right' : ''}`}>
                        <Link href={`/shop/${item.id}`} onClick={onClose} data-cursor-hover>
                          <h3 className="font-roboto text-sm font-medium text-brand-darkRed truncate hover:text-brand-dustyBlue transition-colors">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="font-roboto text-xs text-brand-clayRed/60 mt-0.5">
                          {item.size} • {item.color}
                        </p>
                        <p className="font-roboto text-sm text-brand-darkRed mt-2">
                          {formatPrice(item.price)}
                        </p>

                        {/* Quantity & Remove */}
                        <div className={`flex items-center justify-between mt-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <div className="flex items-center border border-brand-stone/30 rounded">
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.color, Math.max(1, item.quantity - 1))}
                              className="p-2 text-brand-darkRed hover:bg-brand-dustyBlue/10 transition-colors"
                              data-cursor-hover
                            >
                              <FiMinus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center font-roboto text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                              className="p-2 text-brand-darkRed hover:bg-brand-dustyBlue/10 transition-colors"
                              data-cursor-hover
                            >
                              <FiPlus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id, item.size, item.color)}
                            className="p-2 text-brand-clayRed/50 hover:text-brand-dustyBlue transition-colors"
                            data-cursor-hover
                          >
                            <FiTrash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-brand-stone/20 p-4 sm:p-6 space-y-4 bg-[#f8f7f5]">
                {/* Subtotal */}
                <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="font-roboto text-sm text-brand-clayRed/70 uppercase tracking-wider">
                    {isRTL ? 'المجموع الفرعي' : 'Subtotal'}
                  </span>
                  <span className="font-roboto text-lg font-medium text-brand-darkRed">
                    {formatPrice(getTotal())}
                  </span>
                </div>
                <p className={`font-roboto text-[10px] text-brand-clayRed/50 ${isRTL ? 'text-right' : ''}`}>
                  {isRTL ? 'يُحسب الشحن عند الدفع' : 'Shipping calculated at checkout'}
                </p>

                {/* Buttons */}
                <div className="space-y-3">
                  <Link
                    href="/cart"
                    onClick={onClose}
                    className={`w-full py-4 bg-brand-darkRed text-white font-roboto text-sm uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-colors flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                    data-cursor-hover
                  >
                    {isRTL ? 'إتمام الشراء' : 'Checkout'}
                    <FiArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </Link>
                  <button
                    onClick={onClose}
                    className="w-full py-3 text-brand-darkRed font-roboto text-xs uppercase tracking-[0.15em] hover:text-brand-dustyBlue transition-colors"
                    data-cursor-hover
                  >
                    {isRTL ? 'متابعة التسوق' : 'Continue Shopping'}
                  </button>
                </div>

                {/* Trust Badges */}
                <div className={`flex items-center justify-center gap-3 pt-3 border-t border-brand-stone/20 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="font-roboto text-[9px] text-brand-clayRed/40 tracking-wide">
                    {isRTL ? '🔒 دفع آمن' : '🔒 Secure checkout'}
                  </span>
                  <span className="text-brand-stone/30">•</span>
                  <span className="font-roboto text-[9px] text-brand-clayRed/40 tracking-wide">
                    {isRTL ? '🚚 شحن مجاني +500 AED' : '🚚 Free shipping 500+ AED'}
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
