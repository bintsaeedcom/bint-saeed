'use client'

import { useState, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import { FiX, FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiArrowRight, FiLock, FiPackage } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import { useCartStore } from '@/store/cartStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { lineUnitForCurrency, lineTotalForCurrency } from '@/lib/shopProductOptions'
import { products as staticProducts } from '@/data/products'
import { getProductHref } from '@/lib/products/links'
import { getCartLineImageAlt, getProductImageAlt } from '@/lib/products/imageAlt'
import { isWebshopPicturePath, productImageSrc } from '@/lib/products/shopImage'
import { resolveCartShippingMessages } from '@/lib/shipping/resolveCartShippingMessages'
import {
  glassDrawer,
  glassDrawerWash,
  glassPrimaryBtn,
  glassSecondaryBtn,
  glassTextMuted,
  glassTextTitle,
} from '@/lib/ui/glassClasses'
import { lockBodyScroll } from '@/lib/ui/bodyScrollLock'

import 'swiper/css'
import 'swiper/css/free-mode'

interface MiniCartProps {
  isOpen: boolean
  onClose: () => void
}

export default function MiniCart({ isOpen, onClose }: MiniCartProps) {
  const { items, removeItem, updateQuantity } = useCartStore()
  const { formatPrice, formatAmount, currency, formatCartSubtotal, cartSubtotal } = useCurrency()
  const { isRTL, language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const ui = commerceUi(language)
  const shippingMessages = resolveCartShippingMessages({
    subtotal: cartSubtotal(items),
    currency: currency.code,
    copy: ui.cart,
  })
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
    return ordered.slice(0, 2)
  }, [items])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    const unlock = lockBodyScroll()
    return () => {
      document.removeEventListener('keydown', handleEscape)
      unlock()
    }
  }, [isOpen, onClose])

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Soft scrim — no heavy blur (avoids “site stuck” feel) */}
          <motion.div
            key="mini-cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-[#1a0210]/45"
          />

          {/* Drawer */}
          <motion.div
            key="mini-cart-drawer"
            initial={{ x: isRTL ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? '-100%' : '100%' }}
            transition={{ type: 'tween', duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 ${isRTL ? 'left-0 border-r' : 'right-0 border-l'} z-[101] flex h-[100dvh] w-full max-w-md flex-col ${glassDrawer} ${isRTL ? 'rtl' : 'ltr'}`}
          >
            <div className={glassDrawerWash} aria-hidden />

            {/* Header */}
            <div className={`relative z-[1] flex items-center justify-between border-b border-brand-darkRed/10 p-4 sm:p-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <h2 className={`font-rozha text-xl sm:text-2xl ${glassTextTitle}`}>
                {ui.cart.shoppingBag} ({items.length})
              </h2>
              <button
                type="button"
                onClick={onClose}
                className={`p-2 transition-colors ${glassTextMuted} hover:text-brand-dustyBlue`}
                data-cursor-hover
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="relative z-[1] flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                  <FiShoppingBag className={`mb-4 h-12 w-12 ${glassTextMuted}`} />
                  <p className={`mb-2 font-rozha text-xl ${glassTextTitle}`}>
                    {ui.miniCart.yourBagIsEmpty}
                  </p>
                  <p className={`mb-6 font-montserrat text-sm ${glassTextMuted}`}>
                    {ui.miniCart.discoverCollection}
                  </p>
                  <LocaleLink
                    href="/shop"
                    onClick={onClose}
                    className={glassPrimaryBtn}
                    data-cursor-hover
                  >
                    {ui.cart.shopNow}
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
                            src={productImageSrc(item.image)}
                            alt={getCartLineImageAlt(
                              item,
                              staticProducts.find((product) => product.id === item.id),
                              language,
                            )}
                            fill
                            unoptimized={isWebshopPicturePath(item.image)}
                            className="img-zoom object-cover object-top"
                            sizes="80px"
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
                            {ui.cart.personalisation}: “{summarize(item.customisationMessage)}”
                          </p>
                        )}
                        {item.notes && (
                          <p className="font-montserrat text-[10px] text-brand-clayRed/80 mt-1 line-clamp-2">
                            {ui.cart.note}: {summarize(item.notes)}
                          </p>
                        )}
                        <p className="font-montserrat text-sm text-brand-darkRed mt-2">
                          {formatAmount(lineUnitForCurrency(item, currency.code))}
                          {item.quantity > 1 && (
                            <span className="block font-montserrat text-[10px] text-brand-clayRed/60">
                              {formatAmount(lineTotalForCurrency(item, currency.code))} {ui.cart.lineTotal}
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
                    {ui.miniCart.youMayAlsoLike}
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
                              alt={getProductImageAlt(p, p.images[0] ?? '', {
                                color: p.colors[0]?.name,
                                index: 0,
                                locale: language,
                              })}
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
              <div className="relative z-[1] space-y-4 border-t border-brand-darkRed/10 bg-white/55 p-4 backdrop-blur-md sm:p-6">
                {/* Subtotal */}
                <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={`font-montserrat text-sm uppercase tracking-wider ${glassTextMuted}`}>
                    {ui.cart.subtotal}
                  </span>
                  <span className={`font-montserrat text-lg font-medium ${glassTextTitle}`}>
                    {formatCartSubtotal(items)}
                  </span>
                </div>
                <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={`font-montserrat text-[11px] uppercase tracking-wider ${glassTextMuted}`}>
                    {shippingMessages.feeLabel}
                  </span>
                  <span
                    className={`font-montserrat text-[11px] tracking-wide ${
                      shippingMessages.unlocked ? 'text-brand-dustyBlue' : glassTextTitle
                    }`}
                  >
                    {shippingMessages.feeValue}
                  </span>
                </div>
                <p
                  className={`font-montserrat text-[10px] leading-relaxed ${
                    shippingMessages.unlocked ? 'text-brand-dustyBlue' : glassTextMuted
                  } ${isRTL ? 'text-right' : ''}`}
                >
                  {shippingMessages.primary}
                </p>

                {/* Buttons */}
                <div className="space-y-3">
                  <LocaleLink
                    href="/checkout"
                    onClick={onClose}
                    className={`${glassPrimaryBtn} !min-h-[48px] !text-xs inline-flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                    data-cursor-hover
                  >
                    {ui.miniCart.reviewYourOrder}
                    <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </LocaleLink>
                  <button
                    type="button"
                    onClick={onClose}
                    className={`${glassSecondaryBtn} !min-h-[44px] !text-[11px]`}
                    data-cursor-hover
                  >
                    {ui.cart.continueShopping}
                  </button>
                </div>

                {/* Trust Badges */}
                <div
                  className={`flex flex-col gap-2.5 border-t border-brand-darkRed/10 pt-4 sm:flex-row sm:items-center sm:justify-center sm:gap-5 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
                >
                  <div className={`flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <FiLock className="h-3.5 w-3.5 shrink-0 text-brand-darkRed/80" aria-hidden />
                    <span className={`font-montserrat text-[10px] font-medium tracking-wide ${glassTextMuted}`}>
                      {ui.trust.secureCheckout}
                    </span>
                  </div>
                  <span className="hidden text-brand-stone/35 sm:inline" aria-hidden>
                    •
                  </span>
                  <div className={`flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <FiPackage className="h-3.5 w-3.5 shrink-0 text-brand-darkRed/80" aria-hidden />
                    <span className={`font-montserrat text-[10px] font-medium tracking-wide ${glassTextMuted}`}>
                      {shippingMessages.primary}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  )
}
