'use client'

import { useState, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import { FiX, FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiArrowRight, FiLock } from 'react-icons/fi'
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
  glassOverlayPanel,
  glassOverlayWash,
  glassPrimaryBtn,
  glassSecondaryBtnOnDark,
  glassTextBodyOnDark,
  glassTextMutedOnDark,
  glassTextTitleOnDark,
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
          <motion.div
            key="mini-cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-[#1a0210]/55 backdrop-blur-[2px]"
          />

          <motion.div
            key="mini-cart-drawer"
            initial={{ x: isRTL ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? '-100%' : '100%' }}
            transition={{ type: 'tween', duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 ${isRTL ? 'left-0 border-r' : 'right-0 border-l'} z-[101] flex h-[100dvh] w-full max-w-md flex-col ${glassOverlayPanel} ${isRTL ? 'rtl' : 'ltr'}`}
          >
            <div className={glassOverlayWash} aria-hidden />

            {/* Header */}
            <div
              className={`relative z-[1] flex shrink-0 items-center justify-between border-b border-white/12 px-4 py-4 sm:px-6 sm:py-5 ${
                isRTL ? 'flex-row-reverse' : ''
              }`}
            >
              <h2 className={`font-rozha text-xl leading-tight sm:text-2xl ${glassTextTitleOnDark}`}>
                {ui.cart.shoppingBag} ({items.length})
              </h2>
              <button
                type="button"
                onClick={onClose}
                className={`rounded-full p-2 transition-colors hover:bg-white/10 ${glassTextMutedOnDark} hover:text-white`}
                data-cursor-hover
                aria-label={ui.common.close}
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>

            {/* Items */}
            <div className="relative z-[1] min-h-0 flex-1 overflow-y-auto overscroll-contain">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                  <FiShoppingBag className={`mb-4 h-12 w-12 ${glassTextMutedOnDark}`} />
                  <p className={`mb-2 font-rozha text-xl ${glassTextTitleOnDark}`}>
                    {ui.miniCart.yourBagIsEmpty}
                  </p>
                  <p className={`mb-6 max-w-xs font-montserrat text-sm leading-relaxed ${glassTextBodyOnDark}`}>
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
                <ul className="space-y-0 px-3 py-3 sm:px-4">
                  {items.map((item) => (
                    <li
                      key={lineKey(item)}
                      className={`mb-2.5 flex gap-3 rounded-[6px] border border-white/10 bg-white/[0.06] p-3 last:mb-0 sm:gap-4 sm:p-3.5 ${
                        isRTL ? 'flex-row-reverse' : ''
                      }`}
                    >
                      <LocaleLink
                        href={productHref(item)}
                        onClick={onClose}
                        className="shrink-0"
                        data-cursor-hover
                      >
                        <div className="relative h-[4.8rem] w-16 overflow-hidden rounded-[4px] bg-[#12080b] ring-1 ring-white/10 sm:h-[6.4rem] sm:w-[4.8rem]">
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

                      <div className={`min-w-0 flex-1 ${isRTL ? 'text-right' : ''}`}>
                        <LocaleLink href={productHref(item)} onClick={onClose} data-cursor-hover>
                          <h3
                            data-product-name="true"
                            className={`line-clamp-2 font-montserrat text-[12px] font-medium uppercase leading-snug tracking-[0.04em] transition-colors hover:text-white sm:text-[13px] ${glassTextTitleOnDark}`}
                          >
                            {item.name}
                          </h3>
                        </LocaleLink>
                        <p className={`mt-1 font-montserrat text-[11px] leading-snug ${glassTextMutedOnDark}`}>
                          {item.size} · {item.color}
                          {item.lengthCm ? ` · ${item.lengthCm} cm` : ''}
                        </p>
                        {item.customisationMessage && (
                          <p className={`mt-1 line-clamp-2 font-montserrat text-[10px] ${glassTextBodyOnDark}`}>
                            {ui.cart.personalisation}: “{summarize(item.customisationMessage)}”
                          </p>
                        )}
                        {item.notes && (
                          <p className={`mt-1 line-clamp-2 font-montserrat text-[10px] ${glassTextMutedOnDark}`}>
                            {ui.cart.note}: {summarize(item.notes)}
                          </p>
                        )}
                        <p className={`mt-2 font-montserrat text-sm tabular-nums ${glassTextTitleOnDark}`}>
                          {formatAmount(lineUnitForCurrency(item, currency.code))}
                          {item.quantity > 1 && (
                            <span className={`mt-0.5 block font-montserrat text-[10px] ${glassTextMutedOnDark}`}>
                              {formatAmount(lineTotalForCurrency(item, currency.code))} {ui.cart.lineTotal}
                            </span>
                          )}
                        </p>

                        <div
                          className={`mt-3 flex items-center justify-between gap-2 ${
                            isRTL ? 'flex-row-reverse' : ''
                          }`}
                        >
                          <div className="inline-flex items-center overflow-hidden rounded-[4px] border-2 border-[#e8d8c8]/55 bg-white/[0.08] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.size,
                                  item.color,
                                  Math.max(1, item.quantity - 1),
                                  item.lengthCm,
                                  item.customisationMessage,
                                )
                              }
                              className={`p-2.5 transition-colors hover:bg-white/12 ${glassTextBodyOnDark}`}
                              data-cursor-hover
                              aria-label="Decrease quantity"
                            >
                              <FiMinus className="h-3.5 w-3.5" />
                            </button>
                            <span
                              className={`min-w-[2rem] border-x border-[#e8d8c8]/35 px-1 text-center font-montserrat text-sm tabular-nums ${glassTextTitleOnDark}`}
                            >
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.size,
                                  item.color,
                                  item.quantity + 1,
                                  item.lengthCm,
                                  item.customisationMessage,
                                )
                              }
                              className={`p-2.5 transition-colors hover:bg-white/12 ${glassTextBodyOnDark}`}
                              data-cursor-hover
                              aria-label="Increase quantity"
                            >
                              <FiPlus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              removeItem(
                                item.id,
                                item.size,
                                item.color,
                                item.lengthCm,
                                item.customisationMessage,
                              )
                            }
                            className={`rounded-full p-2 transition-colors hover:bg-white/10 ${glassTextMutedOnDark} hover:text-white`}
                            data-cursor-hover
                            aria-label="Remove item"
                          >
                            <FiTrash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {items.length > 0 && youMayAlsoLike.length > 0 && (
                <div className={`border-t border-white/10 py-4 ${isRTL ? 'text-right' : ''}`}>
                  <p className={`px-4 font-montserrat text-[10px] uppercase tracking-[0.18em] ${glassTextMutedOnDark}`}>
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
                          <div className="relative aspect-[9/16] overflow-hidden rounded-[4px] bg-[#12080b] ring-1 ring-white/10">
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
                          <p
                            className={`mt-1.5 line-clamp-2 font-montserrat text-[10px] leading-snug transition-colors group-hover:text-white ${glassTextBodyOnDark}`}
                          >
                            {p.name}
                          </p>
                          <p className={`mt-0.5 font-montserrat text-[10px] tabular-nums ${glassTextMutedOnDark}`}>
                            {formatPrice(p.price)}
                          </p>
                        </LocaleLink>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="relative z-[1] shrink-0 space-y-3.5 border-t border-white/12 bg-[#12080b]/45 px-4 py-4 backdrop-blur-md sm:space-y-4 sm:px-6 sm:py-5">
                <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={`font-montserrat text-[11px] uppercase tracking-[0.14em] ${glassTextMutedOnDark}`}>
                    {ui.cart.subtotal}
                  </span>
                  <span className={`font-montserrat text-lg font-medium tabular-nums ${glassTextTitleOnDark}`}>
                    {formatCartSubtotal(items)}
                  </span>
                </div>
                <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={`font-montserrat text-[11px] uppercase tracking-[0.14em] ${glassTextMutedOnDark}`}>
                    {shippingMessages.feeLabel}
                  </span>
                  <span
                    className={`font-montserrat text-[11px] tracking-wide ${
                      shippingMessages.unlocked ? 'text-[#c4b5a0]' : glassTextTitleOnDark
                    }`}
                  >
                    {shippingMessages.feeValue}
                  </span>
                </div>
                {/* One shipping note only — skip when unlocked (already says Complimentary above) */}
                {!shippingMessages.unlocked && (
                  <p className={`font-montserrat text-[10px] leading-relaxed ${glassTextMutedOnDark} ${isRTL ? 'text-right' : ''}`}>
                    {shippingMessages.primary}
                    {shippingMessages.secondary ? ` ${shippingMessages.secondary}` : ''}
                  </p>
                )}

                <div className="space-y-2.5 pt-0.5">
                  <LocaleLink
                    href="/checkout"
                    onClick={onClose}
                    className={`${glassPrimaryBtn} !min-h-[48px] !text-xs inline-flex items-center justify-center gap-2 ${
                      isRTL ? 'flex-row-reverse' : ''
                    }`}
                    data-cursor-hover
                  >
                    {ui.miniCart.reviewYourOrder}
                    <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </LocaleLink>
                  <button
                    type="button"
                    onClick={onClose}
                    className={`${glassSecondaryBtnOnDark} !min-h-[44px] !text-[11px]`}
                    data-cursor-hover
                  >
                    {ui.cart.continueShopping}
                  </button>
                </div>

                <div
                  className={`flex items-center justify-center gap-2 border-t border-white/10 pt-3.5 ${
                    isRTL ? 'flex-row-reverse' : ''
                  }`}
                >
                  <FiLock className="h-3.5 w-3.5 shrink-0 text-[#e8d8c8]/80" aria-hidden />
                  <span className={`font-montserrat text-[10px] font-medium tracking-wide ${glassTextMutedOnDark}`}>
                    {ui.trust.secureCheckout}
                  </span>
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
