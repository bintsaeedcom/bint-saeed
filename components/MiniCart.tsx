'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import { FiX, FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiArrowRight } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import { useCartStore } from '@/store/cartStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { lineUnitAed, lineTotalAed } from '@/lib/shopProductOptions'
import { products as staticProducts } from '@/data/products'
import { getProductHref } from '@/lib/products/links'

import 'swiper/css'
import 'swiper/css/free-mode'

interface MiniCartProps {
  isOpen: boolean
  onClose: () => void
}

export default function MiniCart({ isOpen, onClose }: MiniCartProps) {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore()
  const { formatPrice } = useCurrency()
  const { isRTL } = useLanguage()
  const summarize = (value: string, max = 46) =>
    value.length > max ? `${value.slice(0, max).trimEnd()}…` : value
  const productHref = (item: (typeof items)[number]) =>
    item.productUrl ?? getProductHref(staticProducts.find((product) => product.id === item.id) ?? { id: item.id, name: item.name })
  const lineKey = (item: (typeof items)[number]) =>
    `${item.id}-${item.size}-${item.color}-${item.lengthCm ?? ''}-${item.customisationMessage ?? ''}`

  const youMayAlsoLike = useMemo(() => {
    if (items.length === 0) return []
    const cartIds = new Set(items.map((i) => i.id))
    const categoriesInCart = new Set<string>()
    for (const line of items) {
      const p = staticProducts.find((pr) => pr.id === line.id)
      if (p) categoriesInCart.add(p.category)
    }
    const primary = categoriesInCart.size ? [...categoriesInCart][0] : null
    const pool = staticProducts.filter((p) => !cartIds.has(p.id))
    const same = primary ? pool.filter((p) => p.category === primary) : []
    const rest = primary ? pool.filter((p) => p.category !== primary) : pool
    const ordered = [...same, ...rest]
    return ordered.slice(0, 16)
  }, [items])

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
            key="mini-cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            key="mini-cart-drawer"
            initial={{ x: isRTL ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? '-100%' : '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className={`fixed top-0 ${isRTL ? 'left-0' : 'right-0'} z-[101] flex h-full w-full max-w-md flex-col bg-white ${isRTL ? 'rtl' : 'ltr'}`}
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
                  <p className="font-montserrat text-sm text-brand-clayRed/60 mb-6">
                    {isRTL ? 'اكتشفي مجموعتنا' : 'Discover our collection'}
                  </p>
                  <LocaleLink
                    href="/shop"
                    onClick={onClose}
                    className="px-6 py-3 bg-brand-darkRed text-white font-montserrat text-xs uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-colors"
                    data-cursor-hover
                  >
                    {isRTL ? 'تسوقي الآن' : 'Shop Now'}
                  </LocaleLink>
                </div>
              ) : (
                <div className="divide-y divide-brand-stone/10">
                  {items.map((item) => (
                    <div key={lineKey(item)} className={`p-4 flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      {/* Image */}
                      <LocaleLink href={productHref(item)} onClick={onClose} className="flex-shrink-0" data-cursor-hover>
                        <div className="relative h-[4.8rem] w-16 overflow-hidden rounded-lg bg-[#f5f5f5] sm:h-[6.4rem] sm:w-[4.8rem]">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="img-zoom object-cover object-top"
                          />
                        </div>
                      </LocaleLink>

                      {/* Details */}
                      <div className={`flex-1 min-w-0 ${isRTL ? 'text-right' : ''}`}>
                        <LocaleLink href={productHref(item)} onClick={onClose} data-cursor-hover>
                          <h3 data-product-name="true" className="font-montserrat text-sm font-medium text-brand-darkRed truncate hover:text-brand-dustyBlue transition-colors">
                            {item.name}
                          </h3>
                        </LocaleLink>
                        <p className="font-montserrat text-xs text-brand-clayRed/60 mt-0.5">
                          {item.size} • {item.color}
                          {item.lengthCm ? ` • ${item.lengthCm} cm` : ''}
                        </p>
                        {item.customisationMessage && (
                          <p className="font-montserrat text-[10px] text-brand-darkRed/80 mt-1 line-clamp-2">
                            {isRTL ? 'التخصيص:' : 'Personalisation:'} “{summarize(item.customisationMessage)}”
                          </p>
                        )}
                        {item.notes && (
                          <p className="font-montserrat text-[10px] text-brand-clayRed/80 mt-1 line-clamp-2">
                            {isRTL ? 'ملاحظة:' : 'Note:'} {summarize(item.notes)}
                          </p>
                        )}
                        <p className="font-montserrat text-sm text-brand-darkRed mt-2">
                          {formatPrice(lineUnitAed(item))}
                          {item.quantity > 1 && (
                            <span className="block font-montserrat text-[10px] text-brand-clayRed/60">
                              {formatPrice(lineTotalAed(item))} {isRTL ? 'المجموع' : 'line total'}
                            </span>
                          )}
                        </p>

                        {/* Quantity & Remove */}
                        <div className={`flex items-center justify-between mt-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <div className="flex items-center border border-brand-stone/30 rounded">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.size,
                                  item.color,
                                  Math.max(1, item.quantity - 1),
                                  item.lengthCm,
                                  item.customisationMessage
                                )
                              }
                              className="p-2 text-brand-darkRed hover:bg-brand-dustyBlue/10 transition-colors"
                              data-cursor-hover
                            >
                              <FiMinus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center font-montserrat text-sm">{item.quantity}</span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.size,
                                  item.color,
                                  item.quantity + 1,
                                  item.lengthCm,
                                  item.customisationMessage
                                )
                              }
                              className="p-2 text-brand-darkRed hover:bg-brand-dustyBlue/10 transition-colors"
                              data-cursor-hover
                            >
                              <FiPlus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() =>
                              removeItem(item.id, item.size, item.color, item.lengthCm, item.customisationMessage)
                            }
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

              {items.length > 0 && youMayAlsoLike.length > 0 && (
                <div className={`border-t border-brand-stone/15 py-4 ${isRTL ? 'text-right' : ''}`}>
                  <p className="px-4 font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-clayRed/70">
                    {isRTL ? 'قد يعجبك أيضاً' : 'You may also like'}
                  </p>
                  <Swiper
                    modules={[FreeMode]}
                    freeMode={{ enabled: true, momentum: true, momentumRatio: 0.85 }}
                    slidesPerView="auto"
                    spaceBetween={12}
                    dir={isRTL ? 'rtl' : 'ltr'}
                    className="mt-3 !px-4"
                    wrapperClass="!items-stretch"
                  >
                    {youMayAlsoLike.map((p) => (
                      <SwiperSlide key={p.id} className="!w-[7.25rem] sm:!w-[7.75rem]">
                        <LocaleLink
                          href={getProductHref(p)}
                          onClick={onClose}
                          className="group block"
                          data-cursor-hover
                        >
                          <div className="relative aspect-[9/16] overflow-hidden rounded-md bg-[#f5f5f5]">
                            <Image
                              src={p.images[0]}
                              alt={p.name}
                              fill
                              sizes="124px"
                              className="img-zoom object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                          </div>
                          <p className="mt-1.5 line-clamp-2 font-montserrat text-[10px] leading-snug text-brand-darkRed group-hover:text-brand-dustyBlue">
                            {p.name}
                          </p>
                          <p className="mt-0.5 font-montserrat text-[10px] text-brand-clayRed/80">{formatPrice(p.price)}</p>
                        </LocaleLink>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-brand-stone/20 p-4 sm:p-6 space-y-4 bg-[#f8f7f5]">
                {/* Subtotal */}
                <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="font-montserrat text-sm text-brand-clayRed/70 uppercase tracking-wider">
                    {isRTL ? 'المجموع الفرعي' : 'Subtotal'}
                  </span>
                  <span className="font-montserrat text-lg font-medium text-brand-darkRed">
                    {formatPrice(getTotal())}
                  </span>
                </div>
                <p className={`font-montserrat text-[10px] text-brand-clayRed/50 ${isRTL ? 'text-right' : ''}`}>
                  {isRTL ? 'يُحسب الشحن عند الدفع' : 'Shipping calculated at checkout'}
                </p>

                {/* Buttons */}
                <div className="space-y-3">
                  <LocaleLink
                    href="/checkout"
                    onClick={onClose}
                    className={`w-full py-4 bg-brand-darkRed text-white font-montserrat text-sm uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-colors flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                    data-cursor-hover
                  >
                    {isRTL ? 'إتمام الشراء' : 'Checkout'}
                    <FiArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </LocaleLink>
                  <button
                    onClick={onClose}
                    className="w-full py-3 text-brand-darkRed font-montserrat text-xs uppercase tracking-[0.15em] hover:text-brand-dustyBlue transition-colors"
                    data-cursor-hover
                  >
                    {isRTL ? 'متابعة التسوق' : 'Continue Shopping'}
                  </button>
                </div>

                {/* Trust Badges */}
                <div className={`flex items-center justify-center gap-3 pt-3 border-t border-brand-stone/20 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="font-montserrat text-[9px] text-brand-clayRed/40 tracking-wide">
                    {isRTL ? '🔒 دفع آمن' : '🔒 Secure checkout'}
                  </span>
                  <span className="text-brand-stone/30">•</span>
                  <span className="font-montserrat text-[9px] text-brand-clayRed/40 tracking-wide">
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
