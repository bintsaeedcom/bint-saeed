'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { FiChevronDown, FiPlus, FiMinus, FiArrowLeft, FiHeart, FiX, FiMaximize2 } from 'react-icons/fi'
import SizeGuideModal from '@/components/SizeGuideModal'
import toast from 'react-hot-toast'
import { products } from '@/data/products'
import { useCartStore } from '@/store/cartStore'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const product = products.find((p) => p.id === params.id)
  
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [customLength, setCustomLength] = useState('')
  const [notes, setNotes] = useState('')
  const [openDropdown, setOpenDropdown] = useState<string | null>('description')
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false)
  
  const addItem = useCartStore((state) => state.addItem)

  if (!product) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="font-rozha text-3xl text-brand-darkRed mb-4">Product Not Found</h1>
          <Link
            href="/shop"
            className="font-roboto text-sm uppercase tracking-[0.15em] text-brand-clayRed hover:text-brand-dustyBlue"
            data-cursor-hover
          >
            Return to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size')
      return
    }
    if (!selectedColor) {
      toast.error('Please select a color')
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity,
      customLength,
      notes,
    })

    toast.success('Added to bag')
  }

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="pt-28 pb-6 border-b border-brand-stone/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.1em]">
            <Link href="/" className="text-brand-clayRed/50 hover:text-brand-dustyBlue transition-colors" data-cursor-hover>
              Home
            </Link>
            <span className="text-brand-clayRed/30">/</span>
            <Link href="/shop" className="text-brand-clayRed/50 hover:text-brand-dustyBlue transition-colors" data-cursor-hover>
              Shop
            </Link>
            <span className="text-brand-clayRed/30">/</span>
            <span className="text-brand-darkRed">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative aspect-[3/4] bg-[#f5f5f5] overflow-hidden">
              <Swiper
                modules={[Navigation, Thumbs]}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                navigation
                className="h-full"
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div 
                      className="relative h-full cursor-zoom-in"
                      onClick={() => {
                        setLightboxIndex(index)
                        setIsLightboxOpen(true)
                      }}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Thumbnails */}
            <div className="hidden md:block">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={12}
                slidesPerView={4}
                watchSlidesProgress
                className="!overflow-visible"
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative aspect-[3/4] bg-[#f5f5f5] cursor-pointer overflow-hidden group">
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover transition-opacity group-hover:opacity-80"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            {/* Category */}
            <span className="font-roboto text-xs uppercase tracking-[0.3em] text-brand-dustyBlue mb-3 block">
              {product.category}
            </span>

            {/* Title */}
            <h1 className="font-rozha text-3xl md:text-4xl lg:text-5xl text-brand-darkRed mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-roboto text-xl text-brand-darkRed tracking-wide mb-8">
              {product.price.toLocaleString()} AED
            </p>

            {/* Short Description */}
            <p className="font-roboto text-sm text-brand-clayRed/70 tracking-wide leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Color Selection */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed">
                  Color
                </span>
                {selectedColor && (
                  <span className="font-roboto text-xs text-brand-clayRed/60 tracking-wide">
                    {selectedColor}
                  </span>
                )}
              </div>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color.name
                        ? 'border-brand-darkRed scale-110'
                        : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    data-cursor-hover
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed">
                  Size
                </span>
                <button 
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="flex items-center gap-1.5 font-roboto text-xs text-brand-clayRed hover:text-brand-dustyBlue tracking-wide underline transition-colors" 
                  data-cursor-hover
                >
                  <FiMaximize2 className="w-3 h-3" />
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[60px] px-4 py-3 font-roboto text-xs uppercase tracking-[0.1em] border transition-all ${
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

            {/* Custom Length */}
            <div className="mb-8">
              <label className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed mb-3 block">
                Custom Length (Optional)
              </label>
              <input
                type="text"
                value={customLength}
                onChange={(e) => setCustomLength(e.target.value)}
                placeholder="e.g., 140cm"
                className="w-full px-4 py-3 border border-brand-stone/50 font-roboto text-sm tracking-wide focus:border-brand-darkRed transition-colors"
              />
            </div>

            {/* Notes */}
            <div className="mb-8">
              <label className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed mb-3 block">
                Special Notes (Optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any special requests or alterations..."
                rows={3}
                className="w-full px-4 py-3 border border-brand-stone/50 font-roboto text-sm tracking-wide focus:border-brand-darkRed transition-colors resize-none"
              />
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4 mb-8">
              {/* Quantity */}
              <div className="flex items-center border border-brand-stone/50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-brand-darkRed hover:bg-brand-dustyBlue/10 transition-colors"
                  data-cursor-hover
                >
                  <FiMinus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-roboto text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-brand-darkRed hover:bg-brand-dustyBlue/10 transition-colors"
                  data-cursor-hover
                >
                  <FiPlus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="flex-1 px-8 py-4 bg-brand-darkRed text-white font-roboto text-sm uppercase tracking-[0.2em] hover:bg-brand-dustyBlue transition-colors"
                data-cursor-hover
              >
                Add to Bag
              </button>

              {/* Wishlist */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`px-4 border transition-colors ${
                  isWishlisted 
                    ? 'border-brand-darkRed bg-brand-darkRed text-white' 
                    : 'border-brand-stone/50 text-brand-darkRed hover:border-brand-dustyBlue'
                }`}
                data-cursor-hover
              >
                <FiHeart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Accordion Details */}
            <div className="border-t border-brand-stone/30">
              {/* Description */}
              <div className="border-b border-brand-stone/30">
                <button
                  onClick={() => toggleDropdown('description')}
                  className="w-full flex items-center justify-between py-5"
                  data-cursor-hover
                >
                  <span className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed">
                    Description
                  </span>
                  <FiChevronDown
                    className={`w-4 h-4 text-brand-darkRed transition-transform ${
                      openDropdown === 'description' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === 'description' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="font-roboto text-sm text-brand-clayRed/70 tracking-wide leading-relaxed pb-5">
                        {product.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Fabric & Materials */}
              <div className="border-b border-brand-stone/30">
                <button
                  onClick={() => toggleDropdown('fabric')}
                  className="w-full flex items-center justify-between py-5"
                  data-cursor-hover
                >
                  <span className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed">
                    Fabric & Materials
                  </span>
                  <FiChevronDown
                    className={`w-4 h-4 text-brand-darkRed transition-transform ${
                      openDropdown === 'fabric' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === 'fabric' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="font-roboto text-sm text-brand-clayRed/70 tracking-wide leading-relaxed pb-5">
                        {product.fabric}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Size & Measurements */}
              <div className="border-b border-brand-stone/30">
                <button
                  onClick={() => toggleDropdown('size')}
                  className="w-full flex items-center justify-between py-5"
                  data-cursor-hover
                >
                  <span className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed">
                    Size & Measurements
                  </span>
                  <FiChevronDown
                    className={`w-4 h-4 text-brand-darkRed transition-transform ${
                      openDropdown === 'size' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === 'size' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="font-roboto text-sm text-brand-clayRed/70 tracking-wide leading-relaxed pb-5">
                        {product.measurements}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Shipping & Returns */}
              <div>
                <button
                  onClick={() => toggleDropdown('shipping')}
                  className="w-full flex items-center justify-between py-5"
                  data-cursor-hover
                >
                  <span className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed">
                    Shipping & Returns
                  </span>
                  <FiChevronDown
                    className={`w-4 h-4 text-brand-darkRed transition-transform ${
                      openDropdown === 'shipping' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === 'shipping' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="font-roboto text-sm text-brand-clayRed/70 tracking-wide leading-relaxed pb-5 space-y-2">
                        <p>• Free shipping on orders over 500 AED</p>
                        <p>• Express delivery: 1-2 business days (UAE)</p>
                        <p>• Standard delivery: 3-5 business days (GCC)</p>
                        <p>• Returns accepted within 14 days</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              className="absolute top-6 right-6 text-white z-10"
              onClick={() => setIsLightboxOpen(false)}
              data-cursor-hover
            >
              <FiX className="w-8 h-8" />
            </button>
            <div className="relative w-full h-full max-w-5xl max-h-[90vh] m-4">
              <Image
                src={product.images[lightboxIndex]}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Size Guide Modal */}
      <SizeGuideModal 
        isOpen={isSizeGuideOpen} 
        onClose={() => setIsSizeGuideOpen(false)} 
      />
    </div>
  )
}
