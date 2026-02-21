'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiX, FiShoppingBag, FiCheck, FiArrowRight } from 'react-icons/fi'
import { useCartStore } from '@/store/cartStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import toast from 'react-hot-toast'

interface QuickBuyProps {
  isOpen: boolean
  onClose: () => void
  product: {
    id: string
    name: string
    nameAr?: string
    price: number
    images: string[]
    sizes: string[]
    colors: { name: string; nameAr?: string; hex: string }[]
    category?: string
  }
}

export default function QuickBuy({ isOpen, onClose, product }: QuickBuyProps) {
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [isAdded, setIsAdded] = useState(false)
  const addItem = useCartStore((state) => state.addItem)
  const { formatPrice } = useCurrency()
  const { isRTL } = useLanguage()

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error(isRTL ? 'الرجاء اختيار المقاس' : 'Please select a size')
      return
    }
    if (!selectedColor) {
      toast.error(isRTL ? 'الرجاء اختيار اللون' : 'Please select a color')
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    })

    setIsAdded(true)
    toast.success(isRTL ? 'تمت الإضافة للسلة' : 'Added to bag')
    
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
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    })

    // Redirect to checkout
    window.location.href = '/cart'
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
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`fixed bottom-0 left-0 right-0 md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg md:w-full bg-white z-[101] rounded-t-2xl md:rounded-2xl max-h-[90vh] overflow-y-auto safe-area-inset ${isRTL ? 'rtl' : 'ltr'}`}
          >
            {/* Handle bar for mobile */}
            <div className="md:hidden flex justify-center pt-3 pb-2">
              <div className="w-12 h-1 bg-brand-stone/30 rounded-full" />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} p-2 text-brand-clayRed hover:text-brand-dustyBlue transition-colors z-10`}
              data-cursor-hover
            >
              <FiX className="w-5 h-5" />
            </button>

            <div className="p-5 sm:p-6">
              {/* Product Info */}
              <div className={`flex gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-24 sm:w-28 aspect-[3/4] relative bg-[#f5f5f5] rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                  {product.category && (
                    <span className="font-roboto text-[10px] uppercase tracking-[0.2em] text-brand-dustyBlue block mb-1">
                      {product.category}
                    </span>
                  )}
                  <h3 className="font-rozha text-xl sm:text-2xl text-brand-darkRed mb-2">
                    {isRTL && product.nameAr ? product.nameAr : product.name}
                  </h3>
                  <p className="font-roboto text-lg text-brand-darkRed">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-5">
                <label className={`font-roboto text-xs uppercase tracking-[0.15em] text-brand-darkRed mb-3 block ${isRTL ? 'text-right' : ''}`}>
                  {isRTL ? 'المقاس' : 'Size'}
                  {selectedSize && <span className="text-brand-clayRed/60 ml-2">({selectedSize})</span>}
                </label>
                <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[48px] px-3 py-2.5 font-roboto text-xs uppercase tracking-[0.1em] border transition-all ${
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

              {/* Color Selection */}
              <div className="mb-6">
                <label className={`font-roboto text-xs uppercase tracking-[0.15em] text-brand-darkRed mb-3 block ${isRTL ? 'text-right' : ''}`}>
                  {isRTL ? 'اللون' : 'Color'}
                  {selectedColor && <span className="text-brand-clayRed/60 ml-2">({selectedColor})</span>}
                </label>
                <div className={`flex flex-wrap gap-3 ${isRTL ? 'justify-end' : ''}`}>
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === color.name
                          ? 'border-brand-darkRed scale-110 ring-2 ring-brand-darkRed/20'
                          : 'border-transparent hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={isRTL && color.nameAr ? color.nameAr : color.name}
                      data-cursor-hover
                    />
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {/* Add to Bag */}
                <button
                  onClick={handleAddToCart}
                  disabled={isAdded}
                  className={`w-full py-4 font-roboto text-sm uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2 ${
                    isAdded
                      ? 'bg-green-600 text-white'
                      : 'bg-brand-darkRed text-white hover:bg-brand-dustyBlue'
                  } ${isRTL ? 'flex-row-reverse' : ''}`}
                  data-cursor-hover
                >
                  {isAdded ? (
                    <>
                      <FiCheck className="w-5 h-5" />
                      {isRTL ? 'تمت الإضافة!' : 'Added!'}
                    </>
                  ) : (
                    <>
                      <FiShoppingBag className="w-4 h-4" />
                      {isRTL ? 'أضيفي للسلة' : 'Add to Bag'}
                    </>
                  )}
                </button>

                {/* Buy Now - Skip to checkout */}
                <button
                  onClick={handleBuyNow}
                  className={`w-full py-4 border border-brand-darkRed text-brand-darkRed font-roboto text-sm uppercase tracking-[0.15em] hover:bg-brand-dustyBlue hover:text-white transition-all flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                  data-cursor-hover
                >
                  {isRTL ? 'اشتري الآن' : 'Buy Now'}
                  <FiArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-brand-stone/20">
                <span className="font-roboto text-[10px] text-brand-clayRed/50 tracking-wide">
                  {isRTL ? '✓ شحن مجاني +500 درهم' : '✓ Free shipping 500+ AED'}
                </span>
                <span className="text-brand-stone/30">|</span>
                <span className="font-roboto text-[10px] text-brand-clayRed/50 tracking-wide">
                  {isRTL ? '✓ إرجاع خلال 14 يوم' : '✓ 14-day returns'}
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
