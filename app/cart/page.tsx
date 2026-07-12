'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import { FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useCartStore } from '@/store/cartStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
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

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartStore()
  const productHref = (item: (typeof items)[number]) =>
    item.productUrl ?? getProductHref(staticProducts.find((product) => product.id === item.id) ?? { id: item.id, name: item.name })
  const lineKey = (item: (typeof items)[number]) =>
    `${item.id}-${item.size}-${item.color}-${item.lengthCm ?? ''}-${item.customisationMessage ?? ''}`
  const { formatAmount, currency, cartSubtotal, formatCartSubtotal } = useCurrency()
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const subtotal = cartSubtotal(items)
  const shippingMessages = resolveCartShippingMessages({
    subtotal,
    currency: currency.code,
    copy: ui.cart,
  })
  const shippingFee = shippingMessages.unlocked ? 0 : getEstimatedShippingFee(currency.code)
  const estimatedTotal = subtotal + shippingFee
  const compactButtonRadius = 'rounded-[4px]'

  if (items.length === 0) {
    return (
      <div className={`min-h-screen bg-brand-pageCanvas pb-20 ${SITE_CONTENT_TOP_PAD}`}>
        <div className="container mx-auto px-6 lg:px-12">
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
              label: ui.cart.continueShopping,
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md mx-auto py-20"
          >
            <FiShoppingBag className="w-16 h-16 text-brand-stone mx-auto mb-8" />
            <h1 data-document-h1="true" className="font-rozha text-3xl md:text-4xl text-brand-darkRed mb-4">
              {ui.cart.empty}
            </h1>
            <p className="font-montserrat text-sm text-brand-clayRed/70 tracking-wide mb-10">
              {ui.cart.emptyDescription}
            </p>
            <LocaleLink
              href="/shop"
              className="inline-flex items-center gap-2 rounded-[4px] bg-brand-darkRed px-10 py-4 font-montserrat text-sm uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dustyBlue"
              data-cursor-hover
              data-analytics-event="click_cta_home_to_collection"
              data-analytics-section="cart-empty-state"
            >
              {ui.cart.continueShopping}
              <FiArrowRight className="w-4 h-4" />
            </LocaleLink>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-pageCanvas">
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
            <div className={`relative sticky top-32 overflow-hidden rounded-2xl border border-brand-darkRed/10 bg-gradient-to-b from-[#3B0A12] to-[#1F0508] p-6 text-brand-ivory shadow-xl sm:p-8 ${isRTL ? 'text-right' : ''}`}>
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/40 to-transparent"
                aria-hidden
              />
              <h2 className="mb-6 font-montserrat text-[11px] uppercase tracking-[0.28em] text-brand-dustyBlue/90">
                {ui.cart.orderSummary}
              </h2>

              <div
                className={`flex items-baseline justify-between gap-4 font-montserrat text-sm tracking-wide text-white/75 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <span className="min-w-0">{ui.cart.subtotal}</span>
                <span className="shrink-0 whitespace-nowrap text-white">{formatCartSubtotal(items)}</span>
              </div>

              <div
                className={`mt-3 flex items-baseline justify-between gap-4 font-montserrat text-sm tracking-wide text-white/75 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <span className="min-w-0">{shippingMessages.feeLabel}</span>
                <span
                  className={`shrink-0 whitespace-nowrap ${shippingMessages.unlocked ? 'text-brand-dustyBlue' : 'text-white'}`}
                >
                  {shippingMessages.feeValue}
                </span>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div
                  className={`flex items-baseline justify-between gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <span className="min-w-0 font-montserrat text-[13px] uppercase tracking-[0.16em] text-white/80">{ui.cart.estimatedTotal}</span>
                  <span className="shrink-0 whitespace-nowrap font-rozha text-xl text-white">{formatAmount(estimatedTotal)}</span>
                </div>
                <p className="mt-2 font-montserrat text-[11px] tracking-wide text-white/55">
                  {ui.cart.taxesIncluded}
                </p>
              </div>

              <LocaleLink
                href="/checkout"
                className={`mt-8 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[4px] bg-brand-dustyBlue py-4 font-montserrat text-sm uppercase tracking-[0.18em] text-[#1a0008] transition-colors hover:bg-white ${isRTL ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
                onClick={() =>
                  trackEvent('begin_checkout', {
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
                    shippingMessages.unlocked ? 'text-brand-dustyBlue' : 'text-white/55'
                  }`}
                >
                  {shippingMessages.primary}
                </p>
                {shippingMessages.secondary ? (
                  <p className="font-montserrat text-xs leading-relaxed tracking-wide text-white/55">
                    {shippingMessages.secondary}
                  </p>
                ) : null}
                <p className="font-montserrat text-xs leading-relaxed tracking-wide text-white/55">
                  {ui.cart.shipWorldwide}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
