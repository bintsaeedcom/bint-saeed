'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiShoppingBag, FiCheck } from 'react-icons/fi'
import { useCartStore } from '@/store/cartStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { getProductHref } from '@/lib/products/links'
import toast from 'react-hot-toast'
import { showAddedToBagToast } from '@/lib/cart/addedToBagToast'
import { trackEvent } from '@/lib/analytics/tracking'
import {
  clearMobileBottomChrome,
  publishMobileBottomChrome,
} from '@/lib/ui/mobileBottomChrome'

interface StickyAddToCartProps {
  product: {
    id: string
    name: string
    price: number
    image: string
    productUrl?: string
    sku?: string
  }
  selectedSize: string
  selectedColor: string
  quantity: number
  customLength?: string
  notes?: string
  customisationMessage?: string
  showThreshold?: number
}

export default function StickyAddToCart({
  product,
  selectedSize,
  selectedColor,
  quantity,
  customLength,
  notes,
  customisationMessage,
  showThreshold = 400,
}: StickyAddToCartProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isAdded, setIsAdded] = useState(false)
  const barRef = useRef<HTMLDivElement | null>(null)
  const addItem = useCartStore((state) => state.addItem)
  const { formatPrice } = useCurrency()
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showThreshold)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showThreshold])

  useEffect(() => {
    document.documentElement.dataset.stickyAtcVisible = isVisible ? '1' : '0'
    if (!isVisible) {
      clearMobileBottomChrome('sticky-atc')
      return () => {
        delete document.documentElement.dataset.stickyAtcVisible
        clearMobileBottomChrome('sticky-atc')
      }
    }

    const el = barRef.current
    if (!el) return

    const publish = () => publishMobileBottomChrome('sticky-atc', el.getBoundingClientRect().height)
    publish()
    const ro = new ResizeObserver(publish)
    ro.observe(el)
    return () => {
      ro.disconnect()
      delete document.documentElement.dataset.stickyAtcVisible
      clearMobileBottomChrome('sticky-atc')
    }
  }, [isVisible])

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error(ui.quickBuy.chooseSizeError)
      document.getElementById('size-selection')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    if (!selectedColor) {
      toast.error(ui.quickBuy.chooseColourError)
      document.getElementById('color-selection')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    addItem({
      id: product.id,
      productUrl: product.productUrl ?? getProductHref(product),
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      quantity,
      customLength,
      notes,
      customisationMessage: customisationMessage || undefined,
      sku: product.sku,
    })

    trackEvent('add_to_cart', {
      item_id: product.id,
      item_name: product.name,
      item_variant: `${selectedSize}-${selectedColor}`,
      quantity,
    })

    setIsAdded(true)
    showAddedToBagToast(isRTL)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const meta =
    selectedSize && selectedColor
      ? `${selectedSize} · ${selectedColor}`
      : ui.stickyAddToCart.selectSizeAndColour

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={barRef}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className={`fixed inset-x-0 bottom-0 z-[96] border-t border-brand-stone/25 bg-white/95 shadow-[0_-8px_28px_-12px_rgba(26,2,16,0.22)] backdrop-blur-md lg:hidden ${isRTL ? 'rtl' : 'ltr'}`}
        >
          <div className="mx-auto max-w-[1400px] px-3 pb-[max(0.65rem,env(safe-area-inset-bottom))] pt-2.5 sm:px-4">
            <div className={`flex min-w-0 items-center gap-2.5 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className={`min-w-0 flex-1 overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}>
                <p className="truncate font-montserrat text-[15px] font-medium tabular-nums tracking-wide text-brand-darkRed">
                  {formatPrice(product.price)}
                </p>
                <p className="mt-0.5 truncate font-montserrat text-[9px] uppercase tracking-[0.12em] text-brand-clayRed/55">
                  {meta}
                </p>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`inline-flex min-h-[46px] min-w-[8.75rem] max-w-[52%] shrink-0 items-center justify-center gap-1.5 px-3.5 font-montserrat text-[11px] uppercase tracking-[0.12em] transition-colors ${
                  isAdded
                    ? 'bg-green-600 text-white'
                    : 'bg-brand-darkRed text-white active:bg-brand-clayRed'
                } ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {isAdded ? (
                  <>
                    <FiCheck className="h-4 w-4 shrink-0" />
                    <span className="truncate">{ui.stickyAddToCart.added}</span>
                  </>
                ) : (
                  <>
                    <FiShoppingBag className="h-4 w-4 shrink-0" />
                    <span className="truncate">{ui.stickyAddToCart.addToBag}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
