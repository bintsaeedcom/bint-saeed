'use client'

import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiX, FiShoppingBag, FiArrowRight, FiPackage, FiRotateCcw, FiClock } from 'react-icons/fi'
import { useCartStore } from '@/store/cartStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { productPageUi } from '@/lib/i18n/productPageUi'
import { formatAmountForCurrency, getUaeFreeShippingThreshold } from '@/lib/pricing'
import { withShippingAmount } from '@/lib/shipping/withShippingAmount'
import { getProductHref } from '@/lib/products/links'
import toast from 'react-hot-toast'
import { getProductImageAlt } from '@/lib/products/imageAlt'
import { localizedColorName } from '@/lib/products/imageAltI18n'
import {
  getProductColorOptions,
  getProductImagesForColor,
} from '@/lib/products/productColorAvailability'
import { isWebshopPicturePath, productImageSrc } from '@/lib/products/shopImage'
import {
  CUSTOMISATION_MAX_CHARS,
  productIsOneSizeOnly,
  productOffersPersonalisation,
  productShowsSizeSelector,
} from '@/lib/shopProductOptions'
import { formFieldClass } from '@/lib/ui/formFieldClasses'
import { lockBodyScroll } from '@/lib/ui/bodyScrollLock'

/** Dense ivory glass — luxury feel without washing out type */
const sheetClass =
  'border border-white/70 bg-[#faf8f5]/94 shadow-[0_-18px_48px_-12px_rgba(26,2,16,0.35)] backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-[#faf8f5]/88'

interface QuickBuyProps {
  isOpen: boolean
  onClose: () => void
  product: {
    id: string
    name: string
    nameAr?: string
    slug?: string
    price: number
    images: string[]
    colorImages?: Record<string, string[]>
    sizes: string[]
    colors: { name: string; nameAr?: string; hex: string }[]
    category?: string
    productUrl?: string
  }
}

export default function QuickBuy({ isOpen, onClose, product }: QuickBuyProps) {
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [customisationActive, setCustomisationActive] = useState(false)
  const [customisationMessage, setCustomisationMessage] = useState('')
  const [mounted, setMounted] = useState(false)
  const addItem = useCartStore((state) => state.addItem)
  const { formatPrice, currency } = useCurrency()
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const pdpUi = productPageUi(language)
  const uaeShippingNote = withShippingAmount(
    ui.cart.freeUaeShipping,
    formatAmountForCurrency(getUaeFreeShippingThreshold(currency.code), currency.code),
  )

  const colorOptions = useMemo(() => getProductColorOptions(product), [product])
  const showPersonalisation = productOffersPersonalisation(product.category ?? '')
  const showSizeSelector =
    product.sizes.length > 1 &&
    productShowsSizeSelector(product.category ?? 'Kaftans', product.sizes, product.slug)

  const estimatedShipDate = useMemo(() => {
    const d = new Date()
    d.setDate(d.getDate() + 14)
    return new Intl.DateTimeFormat(language === 'ar' ? 'ar-AE' : 'en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(d)
  }, [language])

  const shipNote = productIsOneSizeOnly({ slug: product.slug, sizes: product.sizes })
    ? pdpUi.oneSizeMadeToOrderShips(estimatedShipDate)
    : pdpUi.madeToOrderShips(estimatedShipDate)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const available = colorOptions.map((color) => color.name)
    setSelectedColor(available[0] ?? '')
    setCustomisationActive(false)
    setCustomisationMessage('')
    if (product.sizes.length === 1) {
      setSelectedSize(product.sizes[0] ?? '')
    } else if (productIsOneSizeOnly({ slug: product.slug, sizes: product.sizes })) {
      setSelectedSize('One Size')
    } else {
      setSelectedSize(product.sizes[0] ?? '')
    }
  }, [isOpen, product.id, product.slug, product.sizes, colorOptions])

  useEffect(() => {
    if (!isOpen) return
    return lockBodyScroll()
  }, [isOpen])

  const activeImages = useMemo(
    () => getProductImagesForColor(product, selectedColor),
    [product, selectedColor],
  )
  const previewImage = activeImages[0] ?? product.images[0]

  const catalogProduct = {
    name: product.name,
    category: product.category ?? 'Abayas',
    colors: product.colors,
    slug: product.slug ?? '',
  }

  const buildLine = () => {
    const trimmed =
      showPersonalisation && customisationActive ? customisationMessage.trim() : ''
    return {
      id: product.id,
      productUrl: product.productUrl ?? getProductHref(product),
      name: product.name,
      price: product.price,
      image: previewImage,
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
      customisationMessage: trimmed || undefined,
    }
  }

  const validate = () => {
    if (!selectedSize) {
      toast.error(ui.quickBuy.chooseSizeError)
      return false
    }
    if (!selectedColor) {
      toast.error(ui.quickBuy.chooseColourError)
      return false
    }
    if (showPersonalisation && customisationActive && !customisationMessage.trim()) {
      toast.error(pdpUi.personalisation.emptyError)
      return false
    }
    return true
  }

  const handleAddToCart = () => {
    if (!validate()) return

    addItem(buildLine())
    // Close immediately so shop stays usable — no mini-cart takeover / stuck scrim
    onClose()
    toast.success(ui.quickBuy.added, {
      duration: 2200,
      id: 'quickbuy-added',
    })
  }

  const handleBuyNow = () => {
    if (!validate()) return
    addItem(buildLine())
    window.location.href = '/checkout'
  }

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Soft scrim — no heavy blur (avoids “site stuck” feel) */}
          <motion.div
            key="quickbuy-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-[#1a0210]/48"
            aria-hidden
          />

          <motion.div
            key="quickbuy-sheet"
            role="dialog"
            aria-modal="true"
            aria-label={ui.quickBuy.addToBag}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'tween', duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed inset-x-0 bottom-0 z-[101] flex max-h-[min(88dvh,40rem)] flex-col overflow-hidden rounded-t-[1.25rem] ${sheetClass} ${isRTL ? 'rtl' : 'ltr'} md:inset-x-auto md:bottom-auto md:left-1/2 md:top-[6vh] md:w-[min(100vw-2rem,28rem)] md:-translate-x-1/2 md:rounded-2xl md:shadow-[0_24px_64px_-16px_rgba(26,2,16,0.4)]`}
            style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
          >
            {/* Mobile grabber */}
            <div className="flex shrink-0 justify-center pb-1 pt-2.5 md:hidden">
              <div className="h-1 w-11 rounded-full bg-brand-darkRed/25" />
            </div>

            <button
              type="button"
              onClick={onClose}
              className={`absolute top-3 z-20 rounded-full bg-white/70 p-2.5 text-[#5c5356] shadow-sm transition-colors hover:bg-white hover:text-brand-darkRed ${isRTL ? 'left-3' : 'right-3'}`}
              data-cursor-hover
              aria-label="Close"
            >
              <FiX className="h-5 w-5" />
            </button>

            {/* Scrollable options — size/colour first */}
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pt-1 sm:px-5">
              <div className={`mb-4 flex min-w-0 gap-3 sm:mb-5 sm:gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="relative aspect-[3/4] w-[4.5rem] flex-shrink-0 overflow-hidden rounded-md bg-[#efe8e1] sm:w-20">
                  <Image
                    key={previewImage}
                    src={productImageSrc(previewImage)}
                    alt={getProductImageAlt(catalogProduct, previewImage, {
                      color: selectedColor || product.colors[0]?.name,
                      index: 0,
                      locale: language,
                    })}
                    fill
                    className="object-cover object-top"
                    unoptimized={isWebshopPicturePath(previewImage)}
                  />
                </div>
                <div className={`min-w-0 flex-1 pe-8 ${isRTL ? 'text-right' : ''}`}>
                  {product.category && (
                    <span className="mb-1 block truncate font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-dustyBlue">
                      {product.category}
                    </span>
                  )}
                  <h3
                    data-product-name="true"
                    className="mb-1 line-clamp-2 font-rozha text-[1.35rem] leading-[1.15] text-brand-darkRed sm:text-2xl"
                  >
                    {isRTL && product.nameAr ? product.nameAr : product.name}
                  </h3>
                  <p className="font-montserrat text-base tabular-nums text-brand-darkRed sm:text-lg">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </div>

              {showSizeSelector && (
                <div className="mb-3.5">
                  <label
                    className={`mb-2 block font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-darkRed ${isRTL ? 'text-right' : ''}`}
                  >
                    {ui.quickBuy.size}
                    {selectedSize ? (
                      <span className="ms-2 font-normal normal-case tracking-normal text-[#5c5356]">
                        ({selectedSize})
                      </span>
                    ) : null}
                  </label>
                  <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[48px] border px-3 py-2.5 font-montserrat text-xs uppercase tracking-[0.1em] transition-all ${
                          selectedSize === size
                            ? 'border-brand-darkRed bg-brand-darkRed text-white'
                            : 'border-brand-darkRed/25 bg-white text-brand-darkRed hover:border-brand-dustyBlue'
                        }`}
                        data-cursor-hover
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <p
                className={`mb-3.5 flex items-start gap-2 font-montserrat text-[11px] leading-snug tracking-wide text-[#4a3a36] ${isRTL ? 'flex-row-reverse text-right' : ''}`}
              >
                <FiClock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-darkRed/75" aria-hidden />
                <span>{shipNote}</span>
              </p>

              {colorOptions.length > 1 && (
                <div className="mb-3.5">
                  <label
                    className={`mb-2 block font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-darkRed ${isRTL ? 'text-right' : ''}`}
                  >
                    {ui.quickBuy.color}
                    {selectedColor ? (
                      <span className="ms-2 font-normal normal-case tracking-normal text-[#5c5356]">
                        ({localizedColorName(selectedColor, language)})
                      </span>
                    ) : null}
                  </label>
                  <div className={`flex flex-wrap gap-3 ${isRTL ? 'justify-end' : ''}`}>
                    {colorOptions.map((color) => (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => setSelectedColor(color.name)}
                        className={`h-10 w-10 rounded-full border-2 transition-all ${
                          selectedColor === color.name
                            ? 'scale-110 border-brand-darkRed ring-2 ring-brand-darkRed/20'
                            : 'border-white/80 shadow-sm hover:scale-105'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={localizedColorName(color.name, language)}
                        data-cursor-hover
                      />
                    ))}
                  </div>
                </div>
              )}

              {showPersonalisation && (
                <div className="mb-2 border-t border-brand-darkRed/10 pt-3.5">
                  <p
                    className={`mb-1.5 font-montserrat text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-darkRed ${isRTL ? 'text-right' : ''}`}
                  >
                    {pdpUi.personalisation.title}
                  </p>
                  <p
                    className={`mb-2.5 font-montserrat text-[11px] leading-relaxed text-[#4a3a36] ${isRTL ? 'text-right' : ''}`}
                  >
                    {pdpUi.personalisation.desc}
                  </p>
                  <div className={`flex flex-col gap-2 sm:flex-row ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                    <button
                      type="button"
                      onClick={() => {
                        setCustomisationActive(false)
                        setCustomisationMessage('')
                      }}
                      className={`min-h-[40px] flex-1 border px-3 py-2 font-montserrat text-[10px] uppercase tracking-[0.12em] transition-colors ${
                        !customisationActive
                          ? 'border-brand-darkRed bg-brand-darkRed text-white'
                          : 'border-brand-darkRed/25 bg-white text-brand-darkRed'
                      }`}
                      aria-pressed={!customisationActive}
                      data-cursor-hover
                    >
                      {pdpUi.personalisation.noPersonalisation}
                    </button>
                    <button
                      type="button"
                      onClick={() => setCustomisationActive(true)}
                      className={`min-h-[40px] flex-1 border px-3 py-2 font-montserrat text-[10px] uppercase tracking-[0.12em] transition-colors ${
                        customisationActive
                          ? 'border-brand-darkRed bg-brand-darkRed text-white'
                          : 'border-brand-darkRed/25 bg-white text-brand-darkRed'
                      }`}
                      aria-pressed={customisationActive}
                      data-cursor-hover
                    >
                      {pdpUi.personalisation.personalise}
                    </button>
                  </div>
                  {customisationActive && (
                    <div className="mt-3 space-y-2">
                      <input
                        type="text"
                        value={customisationMessage}
                        onChange={(e) =>
                          setCustomisationMessage(e.target.value.slice(0, CUSTOMISATION_MAX_CHARS))
                        }
                        maxLength={CUSTOMISATION_MAX_CHARS}
                        placeholder={pdpUi.personalisation.placeholder}
                        className={`${formFieldClass} !py-2.5 !text-[12px]`}
                        autoComplete="off"
                        data-allow-select
                      />
                      <p className={`font-montserrat text-[10px] text-[#5c5356] ${isRTL ? 'text-right' : ''}`}>
                        {customisationMessage.length}/{CUSTOMISATION_MAX_CHARS}
                      </p>
                      <p
                        className={`border border-brand-darkRed/12 bg-white/80 p-2.5 font-montserrat text-[10px] leading-relaxed text-[#2c2426] ${isRTL ? 'text-right' : ''}`}
                      >
                        {pdpUi.personalisation.customisedNoReturn}
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-3 flex flex-col gap-2 border-t border-brand-darkRed/10 pb-3 pt-3 md:pb-4">
                <div className={`flex min-w-0 items-start justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <FiPackage className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-darkRed/80" aria-hidden />
                  <span className="min-w-0 text-center font-montserrat text-[10px] font-medium leading-snug tracking-wide text-[#5c5356]">
                    {uaeShippingNote}
                  </span>
                </div>
                <div className={`flex min-w-0 items-start justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <FiRotateCcw className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-darkRed/80" aria-hidden />
                  <span className="min-w-0 text-center font-montserrat text-[10px] font-medium leading-snug tracking-wide text-[#5c5356]">
                    {ui.checkout.shipmentPolicy}
                  </span>
                </div>
              </div>
            </div>

            {/* Sticky CTAs — always visible without scrolling */}
            <div className="shrink-0 space-y-2 border-t border-brand-darkRed/10 bg-[#faf8f5]/96 px-4 py-3 sm:px-5">
              <button
                type="button"
                onClick={handleAddToCart}
                className={`inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded border border-brand-darkRed bg-brand-darkRed px-3 py-2.5 font-montserrat text-[11px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-darkMagenta sm:text-xs ${isRTL ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                <FiShoppingBag className="h-4 w-4 shrink-0" />
                <span className="truncate">{ui.quickBuy.addToBag}</span>
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                className={`inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded border border-brand-darkRed/35 bg-white px-3 py-2.5 font-montserrat text-[11px] uppercase tracking-[0.1em] text-brand-darkRed transition-colors hover:border-brand-darkRed/55 hover:bg-[#f3eee8] sm:text-xs ${isRTL ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                <span className="truncate">{ui.quickBuy.buyNow}</span>
                <FiArrowRight className={`h-4 w-4 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  )
}
