'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import DiscoverDestinationGrid from '@/components/DiscoverDestinationGrid'
import { FiTrash2, FiPlus, FiMinus, FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useCartStore } from '@/store/cartStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { getCartEmptyDiscoverCopy } from '@/lib/i18n/cartEmptyDiscoverI18n'
import { lineUnitForCurrency, lineTotalForCurrency } from '@/lib/shopProductOptions'
import { products as staticProducts } from '@/data/products'
import { getProductHref } from '@/lib/products/links'
import { trackEvent } from '@/lib/analytics/tracking'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { SITE_CONTENT_TOP_PAD } from '@/lib/ui/editorialPageChrome'
import { getCartLineImageAlt } from '@/lib/products/imageAlt'
import { isWebshopPicturePath, productImageSrc } from '@/lib/products/shopImage'
import { getEstimatedShippingFee } from '@/lib/pricing'
import { resolveCartShippingMessages } from '@/lib/shipping/resolveCartShippingMessages'
import { cartRequiresPhysicalShipping } from '@/lib/giftCards/cartDetection'
import { useEffect, useRef } from 'react'
import {
  clearMobileBottomChrome,
  publishMobileBottomChrome,
} from '@/lib/ui/mobileBottomChrome'
import TabbyPromoSnippet from '@/components/TabbyPromoSnippet'

export default function CartPage() {
  const { items, removeItem, updateQuantity, hasHydrated } = useCartStore()
  const mobileBarRef = useRef<HTMLDivElement | null>(null)
  const productHref = (item: (typeof items)[number]) =>
    item.productUrl ?? getProductHref(staticProducts.find((product) => product.id === item.id) ?? { id: item.id, name: item.name })
  const lineKey = (item: (typeof items)[number]) =>
    `${item.id}-${item.size}-${item.color}-${item.lengthCm ?? ''}-${item.customisationMessage ?? ''}`
  const { formatAmount, currency, cartSubtotal, formatCartSubtotal } = useCurrency()
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const subtotal = cartSubtotal(items)
  const requiresPhysicalShipping = cartRequiresPhysicalShipping(items)
  const shippingMessages = resolveCartShippingMessages({
    subtotal,
    currency: currency.code,
    copy: ui.cart,
  })
  const shippingFee = !requiresPhysicalShipping
    ? 0
    : shippingMessages.unlocked
      ? 0
      : getEstimatedShippingFee(currency.code)
  const estimatedTotal = subtotal + shippingFee
  const shippingFeeValue = !requiresPhysicalShipping
    ? language === 'ar'
      ? 'رقمي — بدون شحن'
      : 'Digital — no shipping'
    : shippingMessages.feeValue
  const shippingPrimary = !requiresPhysicalShipping
    ? language === 'ar'
      ? 'بطاقة الهدايا رقمية وتُسلَّم بالبريد الإلكتروني.'
      : 'Gift cards are digital and delivered by email.'
    : shippingMessages.primary
  const shippingSecondary = requiresPhysicalShipping ? shippingMessages.secondary : undefined
  const compactButtonRadius = 'rounded-[4px]'

  useEffect(() => {
    if (items.length === 0) {
      clearMobileBottomChrome('cart-bar')
      return
    }
    const el = mobileBarRef.current
    if (!el) return

    const publish = () => {
      // lg:hidden bar — don’t reserve chrome / hide WhatsApp on desktop
      const visible = window.getComputedStyle(el).display !== 'none'
      if (!visible) {
        clearMobileBottomChrome('cart-bar')
        return
      }
      publishMobileBottomChrome('cart-bar', el.getBoundingClientRect().height)
    }
    publish()
    const ro = new ResizeObserver(publish)
    ro.observe(el)
    window.addEventListener('resize', publish)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', publish)
      clearMobileBottomChrome('cart-bar')
    }
  }, [items.length])

  if (!hasHydrated) {
    return (
      <div className={`flex min-h-screen items-center justify-center bg-brand-pageCanvas font-montserrat text-brand-clayRed/70 ${SITE_CONTENT_TOP_PAD}`}>
        {ui.checkout.redirecting}
      </div>
    )
  }

  if (items.length === 0) {
    const emptyCopy = getCartEmptyDiscoverCopy(language)
    return (
      <div className={`relative min-h-screen overflow-x-hidden bg-brand-pageCanvas pb-28 ${SITE_CONTENT_TOP_PAD}`}>
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[min(52vh,28rem)] bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(26,2,16,0.14),transparent_68%)]"
          aria-hidden
        />
        <div className="relative container mx-auto px-6 lg:px-12">
          <AppPageWayfinding
            rtl={isRTL}
            variant="muted"
            className="mb-10"
            breadcrumbClassName="text-brand-clayRed/70 [&_a]:text-brand-clayRed/70 [&_span]:text-brand-darkRed"
            segments={[
              { label: ui.common.home, href: '/home' },
              { label: ui.common.bag },
            ]}
            backLink={{
              href: '/shop',
              label: emptyCopy.exploreCollection,
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={`mx-auto max-w-3xl text-start`}
          >
            <p className="font-montserrat text-[11px] font-medium uppercase tracking-[0.22em] text-brand-dustyBlue">
              {emptyCopy.eyebrow}
            </p>
            <h1
              data-document-h1="true"
              className="mt-4 font-rozha text-[clamp(2.15rem,6vw,3.35rem)] leading-[1.05] text-brand-darkRed"
            >
              {emptyCopy.title}
            </h1>
            <p
              className={`mt-5 max-w-xl font-montserrat text-sm leading-relaxed tracking-wide text-brand-clayRed/75 md:text-[15px] ${
 isRTL ? 'mr-0' : 'mx-auto'
 }`}
            >
              {emptyCopy.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-12 max-w-5xl"
          >
            <DiscoverDestinationGrid source="cart_empty_state" />
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-pageCanvas pb-[calc(var(--mobile-bottom-chrome,5.5rem)+1rem)] lg:pb-0">
      {/* Header */}
      <div className={`border-b border-brand-stone/20 pb-4 ${SITE_CONTENT_TOP_PAD} sm:pb-6`}>
        <div className="container mx-auto min-w-0 px-4 sm:px-6 lg:px-12">
          <AppPageWayfinding
            rtl={isRTL}
            variant="muted"
            className="mb-4"
            breadcrumbClassName="text-brand-clayRed/70 [&_a]:text-brand-clayRed/70 [&_span]:text-brand-darkRed"
            segments={[
              { label: ui.common.home, href: '/home' },
              { label: ui.common.bag },
            ]}
            backLink={{
              href: '/shop',
              label: ui.cart.continueShopping,
            }}
          />
          <h1 data-document-h1="true" className="font-rozha text-2xl text-brand-darkRed md:text-3xl">
            {ui.cart.shoppingBag} ({items.length})
          </h1>
        </div>
      </div>

      <div className="container mx-auto min-w-0 px-4 py-8 sm:px-6 sm:py-12 lg:px-12">
        <div className="grid min-w-0 gap-8 lg:grid-cols-3 lg:gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {items.map((item, index) => (
                <motion.div
                  key={lineKey(item)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 border-b border-brand-stone/20 pb-7 sm:gap-6 sm:pb-8"
                >
                  {/* Image */}
                  <LocaleLink href={productHref(item)} className="flex-shrink-0" data-cursor-hover>
                    <div className="relative aspect-[9/16] w-[5.6rem] bg-[#f5f5f5] md:w-[7.2rem]">
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
                        sizes="(max-width: 768px) 90px, 115px"
                      />
                    </div>
                  </LocaleLink>

                  {/* Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <LocaleLink href={productHref(item)} data-cursor-hover>
                        <h3 data-product-name="true" className="font-rozha text-lg md:text-xl text-brand-darkRed mb-2 hover:text-brand-dustyBlue transition-colors">
                          {item.name}
                        </h3>
                      </LocaleLink>
                      <div className="space-y-1 font-montserrat text-xs tracking-wide text-brand-clayRed/60">
                        <p>{ui.cart.size}: {item.size}</p>
                        <p>{ui.cart.colour}: {item.color}</p>
                        {item.sku && (
                          <p className="font-montserrat text-[10px] uppercase tracking-[0.12em] text-brand-clayRed/60">
                            {ui.cart.productCode.replace('{sku}', item.sku)}
                          </p>
                        )}
                        {(item.lengthCm || item.customLength) && (
                          <p>{ui.cart.length}: {item.lengthCm ? `${item.lengthCm} cm` : item.customLength}</p>
                        )}
                        {item.customisationMessage && (
                          <p>{ui.cart.personalisation}: {item.customisationMessage}</p>
                        )}
                        {item.notes && <p>{ui.cart.note}: {item.notes}</p>}
                      </div>
                    </div>

                    {/* Price & Actions */}
                    <div className="mt-4 flex items-end justify-between">
                      <p className="font-montserrat text-base text-brand-darkRed tracking-wide">
                        {formatAmount(lineUnitForCurrency(item, currency.code))}
                        {item.quantity > 1 ? (
                          <span className="block font-montserrat text-xs text-brand-clayRed/60">
                            {ui.cart.lineTotal}:{' '}
                            {formatAmount(lineTotalForCurrency(item, currency.code))}
                          </span>
                        ) : null}
                      </p>

                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Quantity */}
                        <div className={`flex items-center border border-brand-stone/30 ${compactButtonRadius}`}>
                          <button
                            onClick={() =>
                              {
                                const nextQuantity = Math.max(1, item.quantity - 1)
                                updateQuantity(
                                  item.id,
                                  item.size,
                                  item.color,
                                  nextQuantity,
                                  item.lengthCm,
                                  item.customisationMessage
                                )
                                trackEvent('update_cart_quantity', {
                                  item_id: item.id,
                                  item_name: item.name,
                                  quantity: nextQuantity,
                                  direction: 'decrease',
                                })
                              }
                            }
                            className={`px-3 py-2 text-brand-darkRed transition-colors hover:bg-brand-dustyBlue/10 ${compactButtonRadius}`}
                            data-cursor-hover
                          >
                            <FiMinus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-montserrat text-sm">{item.quantity}</span>
                          <button
                            onClick={() =>
                              {
                                const nextQuantity = item.quantity + 1
                                updateQuantity(
                                  item.id,
                                  item.size,
                                  item.color,
                                  nextQuantity,
                                  item.lengthCm,
                                  item.customisationMessage
                                )
                                trackEvent('update_cart_quantity', {
                                  item_id: item.id,
                                  item_name: item.name,
                                  quantity: nextQuantity,
                                  direction: 'increase',
                                })
                              }
                            }
                            className={`px-3 py-2 text-brand-darkRed transition-colors hover:bg-brand-dustyBlue/10 ${compactButtonRadius}`}
                            data-cursor-hover
                          >
                            <FiPlus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() =>
                            {
                              removeItem(item.id, item.size, item.color, item.lengthCm, item.customisationMessage)
                              trackEvent('remove_from_cart', {
                                item_id: item.id,
                                item_name: item.name,
                                item_category: 'cart',
                              })
                            }
                          }
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
            <div className={`relative sticky top-32 overflow-hidden rounded-2xl border border-brand-darkRed/10 bg-gradient-to-b from-[#3B0A12] to-[#1F0508] p-6 text-brand-ivory shadow-xl sm:p-8 text-start`}>
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/40 to-transparent"
                aria-hidden
              />
              <h2 className="mb-6 font-montserrat text-[11px] uppercase tracking-[0.28em] text-brand-dustyBlue/90">
                {ui.cart.orderSummary}
              </h2>

              <div
                className={`flex items-baseline justify-between gap-4 font-montserrat text-sm tracking-wide text-white/75 `}
              >
                <span className="min-w-0">{ui.cart.subtotal}</span>
                <span className="shrink-0 whitespace-nowrap text-white">{formatCartSubtotal(items)}</span>
              </div>

              <div
                className={`mt-3 flex items-baseline justify-between gap-4 font-montserrat text-sm tracking-wide text-white/75 `}
              >
                <span className="min-w-0">{shippingMessages.feeLabel}</span>
                <span
                  className={`shrink-0 whitespace-nowrap ${
 !requiresPhysicalShipping || shippingMessages.unlocked
 ? 'text-brand-dustyBlue'
 : 'text-white'
 }`}
                >
                  {shippingFeeValue}
                </span>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div
                  className={`flex items-baseline justify-between gap-4 `}
                >
                  <span className="min-w-0 font-montserrat text-[13px] uppercase tracking-[0.16em] text-white/80">{ui.cart.estimatedTotal}</span>
                  <span className="shrink-0 whitespace-nowrap font-rozha text-xl text-white">{formatAmount(estimatedTotal)}</span>
                </div>
                <p className="mt-2 font-montserrat text-[11px] tracking-wide text-white/55">
                  {ui.cart.taxesIncluded}
                </p>
                {['AED', 'SAR', 'KWD'].includes(currency.code) ? (
                  <div className="mt-4 rounded-[4px] bg-white/95 px-2 py-1">
                    <TabbyPromoSnippet
                      price={Number(estimatedTotal.toFixed(2))}
                      currency={currency.code}
                      source="cart"
                    />
                  </div>
                ) : null}
              </div>

              <LocaleLink
                href="/checkout"
                className={`mt-8 hidden min-h-[52px] w-full items-center justify-center gap-2 rounded-[4px] bg-brand-dustyBlue py-4 font-montserrat text-sm uppercase tracking-[0.18em] text-[#1a0008] transition-colors hover:bg-white lg:flex `}
                data-cursor-hover
                onClick={() =>
                  trackEvent('click_checkout', {
                    currency: currency.code,
                    value: Number(cartSubtotal(items).toFixed(2)),
                    item_count: items.length,
                    source: 'cart_page',
                  })
                }
              >
                {ui.cart.proceedSecurePayment}
                <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
              </LocaleLink>

              <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
                <p
                  className={`font-montserrat text-xs leading-relaxed tracking-wide ${
 !requiresPhysicalShipping || shippingMessages.unlocked
 ? 'text-brand-dustyBlue'
 : 'text-white/55'
 }`}
                >
                  {!requiresPhysicalShipping || shippingMessages.unlocked
                    ? shippingPrimary
                    : `${shippingPrimary}${shippingSecondary ? ` ${shippingSecondary}` : ''}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky checkout — opaque brand wine glass so white totals stay readable over cream */}
      <div
        ref={mobileBarRef}
        className="fixed inset-x-0 bottom-0 z-[96] overflow-hidden border-t border-white/15 shadow-[0_-16px_48px_-12px_rgba(0,0,0,0.55)] lg:hidden"
      >
        <div className="pointer-events-none absolute inset-0 bg-[#1a0210]" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-[#1a0210]/88 backdrop-blur-xl backdrop-saturate-150"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#2d141e]/50 via-transparent to-[#12080b]/80"
          aria-hidden
        />
        <div className="relative z-[1] px-3 pt-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))]">
          <div className={`mb-2 flex min-w-0 items-baseline justify-between gap-3 `}>
            <span className="min-w-0 truncate font-montserrat text-[10px] uppercase tracking-[0.14em] text-[#e8d8c8]/80">
              {ui.cart.estimatedTotal}
            </span>
            <span className="shrink-0 font-montserrat text-sm tabular-nums text-[#faf7f3]">
              {formatAmount(estimatedTotal)}
            </span>
          </div>
          <LocaleLink
            href="/checkout"
            className={`flex min-h-[46px] w-full items-center justify-center gap-2 rounded-[4px] bg-brand-dustyBlue px-3 py-3 font-montserrat text-[11px] uppercase tracking-[0.14em] text-[#1a0008] `}
            data-cursor-hover
            onClick={() =>
              trackEvent('click_checkout', {
                currency: currency.code,
                value: Number(cartSubtotal(items).toFixed(2)),
                item_count: items.length,
                source: 'cart_mobile_bar',
              })
            }
          >
            <span className="truncate">{ui.cart.proceedSecurePayment}</span>
            <FiArrowRight className={`h-4 w-4 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
          </LocaleLink>
        </div>
      </div>
    </div>
  )
}
