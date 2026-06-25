'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiShoppingBag, FiCheck } from 'react-icons/fi'
import { useCartStore } from '@/store/cartStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { getProductHref } from '@/lib/products/links'
import toast from 'react-hot-toast'
import { showAddedToBagToast } from '@/lib/cart/addedToBagToast'

interface StickyAddToCartProps {
  product: {
    id: string
    name: string
    price: number
    image: string
  }
  selectedSize: string
  selectedColor: string
  quantity: number
  customLength?: string
  notes?: string
  showThreshold?: number // px scroll before showing
}

export default function StickyAddToCart({
  product,
  selectedSize,
  selectedColor,
  quantity,
  customLength,
  notes,
  showThreshold = 400,
}: StickyAddToCartProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isAdded, setIsAdded] = useState(false)
  const addItem = useCartStore((state) => state.addItem)
  const { formatPrice } = useCurrency()
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showThreshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showThreshold])

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error(ui.quickBuy.chooseSizeError)
      // Scroll to size selection
      document.getElementById('size-selection')?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    if (!selectedColor) {
      toast.error(ui.quickBuy.chooseColourError)
      document.getElementById('color-selection')?.scrollIntoView({ behavior: 'smooth' })
      return
    }

    addItem({
      id: product.id,
      productUrl: getProductHref(product),
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      quantity,
      customLength,
      notes,
    })

    setIsAdded(true)
    showAddedToBagToast(isRTL)
    
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`fixed bottom-0 left-0 right-0 z-[96] border-t border-brand-stone/20 bg-white shadow-2xl safe-area-inset lg:hidden ${isRTL ? 'rtl' : 'ltr'}`}
        >
          <div className="container mx-auto px-4 py-3">
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {/* Price */}
              <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                <p className="font-montserrat text-lg font-medium text-brand-darkRed">
                  {formatPrice(product.price)}
                </p>
                <p className="font-montserrat text-[10px] text-brand-clayRed/50 uppercase tracking-wider">
                  {selectedSize && selectedColor 
                    ? `${selectedSize} • ${selectedColor}` 
                    : ui.stickyAddToCart.selectSizeAndColour}
                </p>
              </div>

              {/* Add to Cart Button */}
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`flex-1 py-3.5 font-montserrat text-xs uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2 ${
                  isAdded
                    ? 'bg-green-600 text-white'
                    : 'bg-brand-darkRed text-white active:bg-brand-clayRed'
                } ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {isAdded ? (
                  <>
                    <FiCheck className="w-4 h-4" />
                    {ui.stickyAddToCart.added}
                  </>
                ) : (
                  <>
                    <FiShoppingBag className="w-4 h-4" />
                    {ui.stickyAddToCart.addToBag}
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
