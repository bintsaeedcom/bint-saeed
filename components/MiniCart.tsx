'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import { createPortal } from 'react-dom'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import NoTranslate from '@/components/NoTranslate'
import { FiX, FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiArrowRight, FiLock } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import { useCartStore } from '@/store/cartStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { getCartAriaCopy } from '@/lib/i18n/cartAriaI18n'
import { shopStrandsCta } from '@/lib/i18n/strandsBrandLock'
import { filterOffCurrentPage } from '@/lib/discover/offCurrentPage'
import { lineUnitForCurrency, lineTotalForCurrency } from '@/lib/shopProductOptions'
import { products as staticProducts } from '@/data/products'
import { accessories } from '@/data/accessories'
import { getLocalizedAccessoryDisplayName } from '@/lib/accessories/accessoryCatalogCopyI18n'
import { getProductHref } from '@/lib/products/links'
import { getCartLineImageAlt, getProductImageAlt, withBrandAlt } from '@/lib/products/imageAlt'
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

/** Deterministic shuffle so each bag open rotates recommendations. */
function seededShuffle<T>(items: T[], seed: number): T[] {
  const out = [...items]
  let s = seed >>> 0 || 1
  const next = () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    return s / 0x100000000
  }
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(next() * (i + 1))
    const tmp = out[i]!
    out[i] = out[j]!
    out[j] = tmp
  }
  return out
}

interface MiniCartProps {
  isOpen: boolean
  onClose: () => void
}

type MiniCartRecommendCard = {
  id: string
  name: string
  href: string
  image: string
  price: number
  imageAlt: string
}

export default function MiniCart({ isOpen, onClose }: MiniCartProps) {
  const pathname = usePathname()
  const { items, removeItem, updateQuantity } = useCartStore()
  const { formatPrice, formatAmount, currency, formatCartSubtotal, cartSubtotal } = useCurrency()
  const { isRTL, language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [recommendationSeed, setRecommendationSeed] = useState(1)
  const wasOpenRef = useRef(false)
  const ui = commerceUi(language)
  const cartAria = getCartAriaCopy(language)
  const emptyExits = useMemo(() => {
    const candidates = [
      { href: '/accessories', label: ui.common.accessories, strandsLock: false },
      { href: '/shop', label: ui.notFound.shopCollection, strandsLock: false },
      { href: '/strands', label: shopStrandsCta(language, 'title'), strandsLock: true },
      { href: '/personalisation', label: ui.cart.personalisation, strandsLock: false },
    ]
    return filterOffCurrentPage(candidates, pathname)
      .slice(0, 3)
      .map((exit, index) => ({
        ...exit,
        style: (index === 0 ? 'primary' : index === 1 ? 'secondary' : 'link') as
          | 'primary'
          | 'secondary'
          | 'link',
      }))
  }, [language, pathname, ui.cart.personalisation, ui.common.accessories, ui.notFound.shopCollection])
  const shippingMessages = resolveCartShippingMessages({
    subtotal: cartSubtotal(items),
    currency: currency.code,
    copy: ui.cart,
  })
  const summarize = (value: string, max = 46) =>
    value.length > max ? `${value.slice(0, max).trimEnd()}…` : value
  const resolveCartProduct = (item: (typeof items)[number]) => {
    const hrefSlug = item.productUrl?.match(/\/(?:shop|accessories)\/([^/?#]+)/)?.[1]
    return (
      staticProducts.find((product) => product.id === item.id || product.slug === hrefSlug) ??
      accessories.find((accessory) => accessory.id === item.id || accessory.id === hrefSlug)
    )
  }
  const cartItemTitle = (item: (typeof items)[number]) => {
    const storedName = item.name?.trim()
    const variantOnly =
      !storedName ||
      storedName === item.size ||
      storedName === item.color ||
      storedName === `${item.size} · ${item.color}` ||
      storedName === `${item.size} - ${item.color}`

    if (!variantOnly) return storedName
    const catalogItem = resolveCartProduct(item)
    return catalogItem?.name ?? storedName ?? item.id
  }
  const productHref = (item: (typeof items)[number]) =>
    item.productUrl ?? getProductHref(resolveCartProduct(item) ?? { id: item.id, name: cartItemTitle(item) })
  const lineKey = (item: (typeof items)[number]) =>
    `${item.id}-${item.size}-${item.color}-${item.lengthCm ?? ''}-${item.customisationMessage ?? ''}`

  const youMayAlsoLike = useMemo((): MiniCartRecommendCard[] => {
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
    const sameShuffled = seededShuffle(same, recommendationSeed * 17 + 3)
    const restShuffled = seededShuffle(rest, recommendationSeed * 31 + 11)
    const apparel = [...sameShuffled, ...restShuffled]

    const toApparelCard = (p: (typeof staticProducts)[number]): MiniCartRecommendCard => ({
      id: p.id,
      name: p.name,
      href: getProductHref(p),
      image: p.images[0] ?? '',
      price: p.price,
      imageAlt: getProductImageAlt(p, p.images[0] ?? '', {
        color: p.colors[0]?.name,
        index: 0,
        locale: language,
      }),
    })

    // Slot 3: always cross-sell a necklace (or rotate if all necklaces are already in bag)
    const necklacePool = accessories.filter(
      (a) => a.category === 'necklaces' && a.inStock && !cartIds.has(a.id),
    )
    const necklacePick = seededShuffle(necklacePool, recommendationSeed * 41 + 7)[0]
    const necklaceCard: MiniCartRecommendCard | null = necklacePick
      ? {
          id: necklacePick.id,
          name: getLocalizedAccessoryDisplayName(necklacePick, language),
          href: `/accessories/${necklacePick.id}`,
          image: necklacePick.images[0] ?? '',
          price: necklacePick.price,
          imageAlt: withBrandAlt(
            `${getLocalizedAccessoryDisplayName(necklacePick, language)} — luxury necklace Abu Dhabi`,
            language === 'ar' ? 'ar' : 'en',
          ),
        }
      : null

    const lead = apparel.slice(0, 2).map(toApparelCard)
    const tail = apparel.slice(2).map(toApparelCard)
    const merged = necklaceCard ? [...lead, necklaceCard, ...tail] : [...lead, ...tail]
    // Dedupe by id and cap row length
    const seen = new Set<string>()
    return merged.filter((card) => {
      if (seen.has(card.id)) return false
      seen.add(card.id)
      return true
    }).slice(0, 6)
  }, [items, recommendationSeed, language])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen && !wasOpenRef.current) {
      setRecommendationSeed((n) => n + 1)
    }
    wasOpenRef.current = isOpen
  }, [isOpen])

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
            className={`fixed top-0 ${isRTL ? 'left-0 border-r' : 'right-0 border-l'} z-[101] flex h-[100dvh] w-full max-w-md flex-col ${glassOverlayPanel} `}
          >
            <div className={glassOverlayWash} aria-hidden />

            {/* Header */}
            <div
              className={`relative z-[1] flex shrink-0 items-center justify-between border-b border-white/12 px-4 py-4 sm:px-6 sm:py-5 `}
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
                <div className="flex h-full flex-col items-center justify-center px-4 py-8 text-center">
                  <FiShoppingBag className={`mb-4 h-10 w-10 ${glassTextMutedOnDark}`} />
                  <p className={`mb-2 font-rozha text-xl ${glassTextTitleOnDark}`}>
                    {ui.miniCart.yourBagIsEmpty}
                  </p>
                  <p className={`mb-6 max-w-xs font-montserrat text-sm leading-relaxed ${glassTextBodyOnDark}`}>
                    {ui.miniCart.discoverCollection}
                  </p>
                  <div className="flex w-full max-w-xs flex-col gap-2">
                    {emptyExits.map((exit) => {
                      const className =
                        exit.style === 'primary'
                          ? glassPrimaryBtn
                          : exit.style === 'secondary'
                            ? glassSecondaryBtnOnDark
                            : `inline-flex min-h-[40px] items-center justify-center font-montserrat text-[11px] uppercase tracking-[0.14em] underline-offset-4 hover:underline ${glassTextMutedOnDark}`
                      return (
                        <LocaleLink
                          key={exit.href}
                          href={exit.href}
                          onClick={onClose}
                          className={className}
                          data-cursor-hover
                        >
                          {exit.strandsLock ? (
                            <NoTranslate>{exit.label}</NoTranslate>
                          ) : (
                            exit.label
                          )}
                        </LocaleLink>
                      )
                    })}
                  </div>
                </div>
              ) : (
                <ul className="space-y-0 px-3 py-3 sm:px-4">
                  {items.map((item) => (
                    <li
                      key={lineKey(item)}
                      className={`mb-2.5 flex gap-3 rounded-[6px] border border-white/10 bg-white/[0.06] p-3 last:mb-0 sm:gap-4 sm:p-3.5 `}
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

                      <div className={`min-w-0 flex-1 text-start`}>
                        <LocaleLink href={productHref(item)} onClick={onClose} data-cursor-hover>
                          <h3
                            data-product-name="true"
                            className={`line-clamp-2 font-montserrat text-[12px] font-medium uppercase leading-snug tracking-[0.04em] transition-colors hover:text-white sm:text-[13px] ${glassTextTitleOnDark}`}
                          >
                            {cartItemTitle(item)}
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
                          className={`mt-3 flex items-center justify-between gap-2 `}
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
                              aria-label={cartAria.decreaseQuantity}
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
                              aria-label={cartAria.increaseQuantity}
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
                            aria-label={cartAria.removeItem}
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
                <div className={`border-t border-white/10 py-4 text-start`}>
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
                          href={p.href}
                          onClick={onClose}
                          className="group block"
                          data-cursor-hover
                        >
                          <div className="relative aspect-[9/16] overflow-hidden rounded-[4px] bg-[#12080b] ring-1 ring-white/10">
                            <Image
                              src={p.image}
                              alt={p.imageAlt}
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
                            {formatPrice(p.price, p.id)}
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
                <div className={`flex items-center justify-between `}>
                  <span className={`font-montserrat text-[11px] uppercase tracking-[0.14em] ${glassTextMutedOnDark}`}>
                    {ui.cart.subtotal}
                  </span>
                  <span className={`font-montserrat text-lg font-medium tabular-nums ${glassTextTitleOnDark}`}>
                    {formatCartSubtotal(items)}
                  </span>
                </div>
                <div className={`flex items-center justify-between `}>
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
                  <p className={`font-montserrat text-[10px] leading-relaxed ${glassTextMutedOnDark} text-start`}>
                    {shippingMessages.primary}
                    {shippingMessages.secondary ? ` ${shippingMessages.secondary}` : ''}
                  </p>
                )}

                <div className="space-y-2.5 pt-0.5">
                  <LocaleLink
                    href="/checkout"
                    onClick={onClose}
                    className={`inline-flex !min-h-[48px] w-full items-center justify-center gap-2 rounded border border-[#e8ddd4] bg-[#e8ddd4] px-3 py-2.5 font-montserrat text-xs uppercase tracking-[0.14em] text-brand-darkRed transition-colors hover:border-white hover:bg-white `}
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
                  className={`flex items-center justify-center gap-2 border-t border-white/10 pt-3.5 `}
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
