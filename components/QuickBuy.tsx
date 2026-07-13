'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiX, FiShoppingBag, FiCheck, FiArrowRight, FiPackage, FiRotateCcw, FiClock } from 'react-icons/fi'
import { useCartStore } from '@/store/cartStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { productPageUi } from '@/lib/i18n/productPageUi'
import { formatAmountForCurrency, getUaeFreeShippingThreshold } from '@/lib/pricing'
import { withShippingAmount } from '@/lib/shipping/withShippingAmount'
import { getProductHref } from '@/lib/products/links'
import toast from 'react-hot-toast'
import { showAddedToBagToast } from '@/lib/cart/addedToBagToast'
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
import {
  glassPanel,
  glassPanelWash,
  glassPrimaryBtn,
  glassSecondaryBtn,
  glassTextBody,
  glassTextMuted,
  glassTextTitle,
} from '@/lib/ui/glassClasses'
import { formFieldClass } from '@/lib/ui/formFieldClasses'

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
  const [isAdded, setIsAdded] = useState(false)
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
    if (!isOpen) return
    const available = colorOptions.map((color) => color.name)
    setSelectedColor(available[0] ?? '')
    setCustomisationActive(false)
    setCustomisationMessage('')
    setIsAdded(false)
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
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
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
    setIsAdded(true)
    showAddedToBagToast(isRTL)

    setTimeout(() => {
      setIsAdded(false)
      setSelectedSize('')
      setSelectedColor('')
      setCustomisationActive(false)
      setCustomisationMessage('')
      onClose()
    }, 1500)
  }

  const handleBuyNow = () => {
    if (!validate()) return
    addItem(buildLine())
    window.location.href = '/checkout'
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/45 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className={`fixed bottom-0 left-0 right-0 z-[101] max-h-[min(94vh,44rem)] overflow-hidden rounded-t-2xl pb-[max(0.75rem,env(safe-area-inset-bottom))] md:bottom-auto md:left-1/2 md:top-1/2 md:max-h-[90vh] md:w-full md:max-w-lg md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-2xl md:pb-0 ${glassPanel} ${isRTL ? 'rtl' : 'ltr'}`}
          >
            <div className={glassPanelWash} aria-hidden />

            <div className="relative z-[1] max-h-[min(94vh,44rem)] overflow-y-auto overscroll-contain md:max-h-[90vh]">
              <div className="flex justify-center pb-1 pt-3 md:hidden">
                <div className="h-1 w-12 rounded-full bg-brand-darkRed/20" />
              </div>

              <button
                type="button"
                onClick={onClose}
                className={`absolute top-3 z-10 rounded-full p-2.5 ${glassTextMuted} hover:bg-white/50 hover:text-brand-dustyBlue ${isRTL ? 'left-3' : 'right-3'}`}
                data-cursor-hover
                aria-label="Close"
              >
                <FiX className="h-5 w-5" />
              </button>

              <div className="px-4 pb-5 pt-2 sm:p-6">
                <div className={`mb-5 flex min-w-0 gap-3 sm:mb-6 sm:gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="relative aspect-[3/4] w-[4.25rem] flex-shrink-0 overflow-hidden rounded-lg bg-[#f5f5f5]/80 sm:aspect-[9/16] sm:w-[5.6rem]">
                    <Image
                      key={previewImage}
                      src={productImageSrc(previewImage)}
                      alt={getProductImageAlt(catalogProduct, previewImage, {
                        color: selectedColor || product.colors[0]?.name,
                        index: 0,
                        locale: language,
                      })}
                      fill
                      className="img-zoom object-cover object-top"
                      unoptimized={isWebshopPicturePath(previewImage)}
                    />
                  </div>
                  <div className={`min-w-0 flex-1 ${isRTL ? 'text-right' : ''}`}>
                    {product.category && (
                      <span className={`mb-1 block truncate font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-dustyBlue`}>
                        {product.category}
                      </span>
                    )}
                    <h3
                      data-product-name="true"
                      className={`mb-1.5 line-clamp-2 font-rozha text-xl leading-tight sm:text-2xl ${glassTextTitle}`}
                    >
                      {isRTL && product.nameAr ? product.nameAr : product.name}
                    </h3>
                    <p className={`font-montserrat text-base tabular-nums sm:text-lg ${glassTextTitle}`}>
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </div>

                {showSizeSelector && (
                  <div className="mb-4">
                    <label
                      className={`mb-2.5 block font-montserrat text-[11px] uppercase tracking-[0.14em] ${glassTextTitle} ${isRTL ? 'text-right' : ''}`}
                    >
                      {ui.quickBuy.size}
                      {selectedSize ? (
                        <span className={`ms-2 font-normal normal-case tracking-normal ${glassTextMuted}`}>
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
                              : 'border-brand-darkRed/30 bg-white/70 text-brand-darkRed hover:border-brand-dustyBlue'
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
                  className={`mb-4 flex items-start gap-2 font-montserrat text-[11px] italic leading-snug tracking-wide ${glassTextMuted} ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                >
                  <FiClock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-darkRed/70" aria-hidden />
                  <span>{shipNote}</span>
                </p>

                {colorOptions.length > 1 && (
                  <div className="mb-4">
                    <label
                      className={`mb-2.5 block font-montserrat text-[11px] uppercase tracking-[0.14em] ${glassTextTitle} ${isRTL ? 'text-right' : ''}`}
                    >
                      {ui.quickBuy.color}
                      {selectedColor ? (
                        <span className={`ms-2 font-normal normal-case tracking-normal ${glassTextMuted}`}>
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
                              : 'border-transparent hover:scale-105'
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
                  <div className="mb-5 border-t border-brand-darkRed/10 pt-4">
                    <p className={`mb-1.5 font-montserrat text-[11px] font-semibold uppercase tracking-[0.14em] ${glassTextTitle} ${isRTL ? 'text-right' : ''}`}>
                      {pdpUi.personalisation.title}
                    </p>
                    <p className={`mb-2.5 font-montserrat text-[11px] leading-relaxed ${glassTextMuted} ${isRTL ? 'text-right' : ''}`}>
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
                            : 'border-brand-darkRed/30 bg-white/70 text-brand-darkRed'
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
                            : 'border-brand-darkRed/30 bg-white/70 text-brand-darkRed'
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
                        />
                        <p className={`font-montserrat text-[10px] ${glassTextMuted} ${isRTL ? 'text-right' : ''}`}>
                          {customisationMessage.length}/{CUSTOMISATION_MAX_CHARS}
                        </p>
                        <p
                          className={`border border-brand-darkRed/12 bg-white/55 p-2.5 font-montserrat text-[10px] leading-relaxed ${glassTextBody} ${isRTL ? 'text-right' : ''}`}
                        >
                          {pdpUi.personalisation.customisedNoReturn}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                <div className="space-y-2.5">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    disabled={isAdded}
                    className={`${glassPrimaryBtn} !min-h-[48px] !text-[11px] sm:!text-xs ${
                      isAdded ? '!border-green-600 !bg-green-600' : ''
                    } ${isRTL ? 'flex-row-reverse' : ''} inline-flex items-center justify-center gap-2`}
                    data-cursor-hover
                  >
                    {isAdded ? (
                      <>
                        <FiCheck className="h-5 w-5 shrink-0" />
                        <span className="truncate">{ui.quickBuy.added}</span>
                      </>
                    ) : (
                      <>
                        <FiShoppingBag className="h-4 w-4 shrink-0" />
                        <span className="truncate">{ui.quickBuy.addToBag}</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleBuyNow}
                    className={`${glassSecondaryBtn} !min-h-[48px] !text-[11px] sm:!text-xs ${isRTL ? 'flex-row-reverse' : ''} inline-flex items-center justify-center gap-2`}
                    data-cursor-hover
                  >
                    <span className="truncate">{ui.quickBuy.buyNow}</span>
                    <FiArrowRight className={`h-4 w-4 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <div className="mt-4 flex flex-col gap-2 border-t border-brand-darkRed/10 pt-3.5">
                  <div className={`flex min-w-0 items-start justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <FiPackage className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-darkRed/80" aria-hidden />
                    <span className={`min-w-0 text-center font-montserrat text-[10px] font-medium leading-snug tracking-wide ${glassTextMuted}`}>
                      {uaeShippingNote}
                    </span>
                  </div>
                  <div className={`flex min-w-0 items-start justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <FiRotateCcw className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-darkRed/80" aria-hidden />
                    <span className={`min-w-0 text-center font-montserrat text-[10px] font-medium leading-snug tracking-wide ${glassTextMuted}`}>
                      {ui.checkout.shipmentPolicy}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
