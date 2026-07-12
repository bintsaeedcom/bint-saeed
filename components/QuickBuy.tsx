'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiX, FiShoppingBag, FiCheck, FiArrowRight, FiPackage, FiRotateCcw } from 'react-icons/fi'
import { useCartStore } from '@/store/cartStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
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
import { productIsOneSizeOnly, productShowsSizeSelector } from '@/lib/shopProductOptions'

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
  const [isAdded, setIsAdded] = useState(false)
  const addItem = useCartStore((state) => state.addItem)
  const { formatPrice, currency } = useCurrency()
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const uaeShippingNote = withShippingAmount(
    ui.cart.freeUaeShipping,
    formatAmountForCurrency(getUaeFreeShippingThreshold(currency.code), currency.code),
  )

  const colorOptions = useMemo(
    () => getProductColorOptions(product),
    [product],
  )

  const showSizeSelector = product.sizes.length > 1 && productShowsSizeSelector(
    product.category ?? 'Kaftans',
    product.sizes,
    product.slug,
  )

  useEffect(() => {
    if (!isOpen) return
    const available = colorOptions.map((color) => color.name)
    setSelectedColor(available[0] ?? '')
    if (product.sizes.length === 1) {
      setSelectedSize(product.sizes[0] ?? '')
    } else if (productIsOneSizeOnly({ slug: product.slug, sizes: product.sizes })) {
      setSelectedSize('One Size')
    } else {
      setSelectedSize('')
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

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error(ui.quickBuy.chooseSizeError)
      return
    }
    if (!selectedColor) {
      toast.error(ui.quickBuy.chooseColourError)
      return
    }

    addItem({
      id: product.id,
      productUrl: product.productUrl ?? getProductHref(product),
      name: product.name,
      price: product.price,
      image: previewImage,
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    })

    setIsAdded(true)
    showAddedToBagToast(isRTL)
    
    setTimeout(() => {
      setIsAdded(false)
      setSelectedSize('')
      setSelectedColor('')
      onClose()
    }, 1500)
  }

  const handleBuyNow = async () => {
    if (!selectedSize || !selectedColor) {
      handleAddToCart()
      return
    }

    addItem({
      id: product.id,
      productUrl: product.productUrl ?? getProductHref(product),
      name: product.name,
      price: product.price,
      image: previewImage,
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    })

    window.location.href = '/checkout'
  }

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

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className={`fixed bottom-0 left-0 right-0 z-[101] max-h-[min(92vh,40rem)] overflow-y-auto overscroll-contain rounded-t-2xl bg-white pb-[max(0.75rem,env(safe-area-inset-bottom))] md:bottom-auto md:left-1/2 md:top-1/2 md:max-h-[90vh] md:w-full md:max-w-lg md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-2xl md:pb-0 ${isRTL ? 'rtl' : 'ltr'}`}
          >
            <div className="flex justify-center pb-1 pt-3 md:hidden">
              <div className="h-1 w-12 rounded-full bg-brand-stone/30" />
            </div>

            <button
              type="button"
              onClick={onClose}
              className={`absolute top-3 z-10 rounded-full p-2.5 text-brand-clayRed hover:bg-brand-stone/15 hover:text-brand-dustyBlue ${isRTL ? 'left-3' : 'right-3'}`}
              data-cursor-hover
              aria-label="Close"
            >
              <FiX className="h-5 w-5" />
            </button>

            <div className="px-4 pb-5 pt-2 sm:p-6">
              <div className={`mb-5 flex min-w-0 gap-3 sm:mb-6 sm:gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="relative aspect-[3/4] w-[4.25rem] flex-shrink-0 overflow-hidden rounded-lg bg-[#f5f5f5] sm:aspect-[9/16] sm:w-[5.6rem]">
                  <Image
                    key={previewImage}
                    src={productImageSrc(previewImage)}
                    alt={getProductImageAlt(
                      catalogProduct,
                      previewImage,
                      { color: selectedColor || product.colors[0]?.name, index: 0, locale: language },
                    )}
                    fill
                    className="img-zoom object-cover object-top"
                    unoptimized={isWebshopPicturePath(previewImage)}
                  />
                </div>
                <div className={`min-w-0 flex-1 ${isRTL ? 'text-right' : ''}`}>
                  {product.category && (
                    <span className="mb-1 block truncate font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-dustyBlue">
                      {product.category}
                    </span>
                  )}
                  <h3 data-product-name="true" className="mb-1.5 line-clamp-2 font-rozha text-xl leading-tight text-brand-darkRed sm:text-2xl">
                    {isRTL && product.nameAr ? product.nameAr : product.name}
                  </h3>
                  <p className="font-montserrat text-base tabular-nums text-brand-darkRed sm:text-lg">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </div>

              {/* Size Selection */}
              {showSizeSelector && (
              <div className="mb-5">
                <label className={`font-montserrat text-xs uppercase tracking-[0.15em] text-brand-darkRed mb-3 block ${isRTL ? 'text-right' : ''}`}>
                  {ui.quickBuy.size}
                  {selectedSize && <span className="text-brand-clayRed/60 ml-2">({selectedSize})</span>}
                </label>
                <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[48px] px-3 py-2.5 font-montserrat text-xs uppercase tracking-[0.1em] border transition-all ${
                        selectedSize === size
                          ? 'bg-brand-darkRed text-white border-brand-darkRed'
                          : 'bg-white text-brand-darkRed border-brand-stone/50 hover:border-brand-dustyBlue'
                      }`}
                      data-cursor-hover
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              )}

              {/* Color Selection */}
              {colorOptions.length > 1 && (
              <div className="mb-6">
                <label className={`font-montserrat text-xs uppercase tracking-[0.15em] text-brand-darkRed mb-3 block ${isRTL ? 'text-right' : ''}`}>
                  {ui.quickBuy.color}
                  {selectedColor && <span className="text-brand-clayRed/60 ml-2">({selectedColor})</span>}
                </label>
                <div className={`flex flex-wrap gap-3 ${isRTL ? 'justify-end' : ''}`}>
                  {colorOptions.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === color.name
                          ? 'border-brand-darkRed scale-110 ring-2 ring-brand-darkRed/20'
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

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={isAdded}
                  className={`flex min-h-[48px] w-full items-center justify-center gap-2 py-3.5 font-montserrat text-xs uppercase tracking-[0.14em] transition-all sm:text-sm sm:tracking-[0.15em] ${
                    isAdded
                      ? 'bg-green-600 text-white'
                      : 'bg-brand-darkRed text-white hover:bg-brand-dustyBlue'
                  } ${isRTL ? 'flex-row-reverse' : ''}`}
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
                  className={`flex min-h-[48px] w-full items-center justify-center gap-2 border border-brand-darkRed py-3.5 font-montserrat text-xs uppercase tracking-[0.14em] text-brand-darkRed transition-all hover:bg-brand-dustyBlue hover:text-white sm:text-sm sm:tracking-[0.15em] ${isRTL ? 'flex-row-reverse' : ''}`}
                  data-cursor-hover
                >
                  <span className="truncate">{ui.quickBuy.buyNow}</span>
                  <FiArrowRight className={`h-4 w-4 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <div className="mt-4 flex flex-col gap-2 border-t border-brand-stone/20 pt-3.5">
                <div className={`flex min-w-0 items-start justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <FiPackage className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-darkRed/80" aria-hidden />
                  <span className="min-w-0 text-center font-montserrat text-[10px] font-medium leading-snug tracking-wide text-brand-darkRed/80">
                    {uaeShippingNote}
                  </span>
                </div>
                <div className={`flex min-w-0 items-start justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <FiRotateCcw className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-darkRed/80" aria-hidden />
                  <span className="min-w-0 text-center font-montserrat text-[10px] font-medium leading-snug tracking-wide text-brand-darkRed/80">
                    {ui.checkout.shipmentPolicy}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
