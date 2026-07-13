'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
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
  /** Fallback scroll distance if the primary ATC node is missing */
  showThreshold?: number
}

/**
 * Mobile sticky ATC — pinned to the true viewport bottom (ported to body).
 * Luxury pattern: only appears after the primary Add to Bag scrolls out of view.
 */
export default function StickyAddToCart({
  product,
  selectedSize,
  selectedColor,
  quantity,
  customLength,
  notes,
  customisationMessage,
  showThreshold = 480,
}: StickyAddToCartProps) {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isAdded, setIsAdded] = useState(false)
  const barRef = useRef<HTMLDivElement | null>(null)
  const addItem = useCartStore((state) => state.addItem)
  const { formatPrice } = useCurrency()
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const primaryAtc = document.querySelector<HTMLElement>('[data-pdp-primary-atc]')

    if (primaryAtc && typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Show sticky bar only once the main CTA has left the viewport
          setIsVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0)
        },
        { threshold: 0, rootMargin: '0px' },
      )
      observer.observe(primaryAtc)
      return () => observer.disconnect()
    }

    const handleScroll = () => setIsVisible(window.scrollY > showThreshold)
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

  const variantMeta =
    selectedSize && selectedColor
      ? `${selectedSize} · ${selectedColor}`
      : selectedSize || selectedColor || ui.stickyAddToCart.selectSizeAndColour

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          ref={barRef}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className={`pointer-events-auto fixed inset-x-0 bottom-0 z-[96] overflow-hidden border-t border-white/20 bg-[#1a0210]/82 shadow-[0_-16px_48px_-12px_rgba(0,0,0,0.55)] backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:bg-[#1a0210]/72 lg:hidden ${isRTL ? 'rtl' : 'ltr'}`}
          style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#2d141e]/55 via-[#1a0210]/35 to-[#12080b]/70"
            aria-hidden
          />
          <div className="relative z-[1] mx-auto max-w-[1400px] px-3 py-2.5 sm:px-4">
            <div className={`flex min-w-0 items-center gap-2.5 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className={`min-w-0 flex-1 overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}>
                <p className="truncate font-montserrat text-[15px] font-medium tabular-nums tracking-wide text-white">
                  {formatPrice(product.price)}
                </p>
                <p className="mt-0.5 truncate font-montserrat text-[10px] uppercase tracking-[0.1em] text-[#e8d8c8]">
                  {product.name}
                </p>
                <p className="mt-0.5 truncate font-montserrat text-[9px] uppercase tracking-[0.12em] text-[#e8d8c8]/65">
                  {variantMeta}
                </p>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`relative inline-flex min-h-[46px] min-w-[8.75rem] max-w-[52%] shrink-0 items-center justify-center gap-1.5 rounded-[4px] border px-3.5 font-montserrat text-[11px] uppercase tracking-[0.12em] transition-colors ${
                  isAdded
                    ? 'border-green-600 bg-green-600 text-white'
                    : 'border-brand-darkRed bg-brand-darkRed text-white hover:bg-brand-darkMagenta active:bg-brand-clayRed'
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
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
