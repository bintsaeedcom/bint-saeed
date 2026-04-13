'use client'

import { useState, useRef, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, Pagination, FreeMode } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { FiChevronDown, FiPlus, FiMinus, FiArrowLeft, FiHeart, FiX, FiMaximize2 } from 'react-icons/fi'
import SizeGuideModal from '@/components/SizeGuideModal'
import SizeChartPanel from '@/components/SizeChartPanel'
import OrderCutoffBanner from '@/components/OrderCutoffBanner'
import toast from 'react-hot-toast'
import { products as staticProducts, type Product } from '@/data/products'
import { useCartStore } from '@/store/cartStore'
import { useWishlistStore } from '@/store/wishlistStore'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import {
  getPdpSizeOptions,
  categoryNeedsLengthCmDropdown,
  lengthCmSelectOptions,
  CUSTOMISATION_SURCHARGE_AED,
  CUSTOMISATION_MAX_CHARS,
} from '@/lib/shopProductOptions'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/pagination'

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const productId = typeof params.id === 'string' ? params.id : ''
  const [product, setProduct] = useState<Product | null>(() =>
    productId ? staticProducts.find((p) => p.id === productId) ?? null : null
  )

  useEffect(() => {
    const base = productId ? staticProducts.find((p) => p.id === productId) ?? null : null
    setProduct(base)
    if (!productId) return
    let cancelled = false
    fetch(`/api/catalog/${encodeURIComponent(productId)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled || !data?.product) return
        setProduct(data.product as Product)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [productId])

  const favorited = useWishlistStore((s) => s.items.some((i) => i.id === productId))
  const addWishlist = useWishlistStore((s) => s.addItem)
  const removeWishlist = useWishlistStore((s) => s.removeItem)

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const mainSwiperRef = useRef<SwiperType | null>(null)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [lengthCm, setLengthCm] = useState('')
  const [customisationActive, setCustomisationActive] = useState(false)
  const [customisationMessage, setCustomisationMessage] = useState('')
  const [notes, setNotes] = useState('')
  const [openDropdown, setOpenDropdown] = useState<string | null>('description')
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false)
  
  const addItem = useCartStore((state) => state.addItem)
  const { isRTL } = useLanguage()

  if (!product) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="font-rozha text-3xl text-brand-darkRed mb-4">Product Not Found</h1>
          <LocaleLink
            href="/shop"
            className="font-roboto text-sm uppercase tracking-[0.15em] text-brand-clayRed hover:text-brand-dustyBlue"
            data-cursor-hover
          >
            Return to Shop
          </LocaleLink>
        </div>
      </div>
    )
  }

  const needsLength = categoryNeedsLengthCmDropdown(product.category)
  const sizeOptions = getPdpSizeOptions(product.category, product.sizes)
  const personalisationSurcharge =
    customisationActive && customisationMessage.trim().length > 0 ? CUSTOMISATION_SURCHARGE_AED : 0
  const displayUnitAed = product.price + personalisationSurcharge

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size')
      return
    }
    if (!selectedColor) {
      toast.error('Please select a color')
      return
    }
    if (needsLength && !lengthCm) {
      toast.error('Please select a length (cm)')
      return
    }
    if (customisationActive && !customisationMessage.trim()) {
      toast.error('Please enter your personalisation text, or turn personalisation off')
      return
    }

    const trimmedCustom = customisationActive ? customisationMessage.trim() : ''

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity,
      lengthCm: needsLength ? lengthCm : undefined,
      customLength: needsLength && lengthCm ? `${lengthCm} cm` : undefined,
      customisationMessage: trimmedCustom || undefined,
      customisationSurcharge: trimmedCustom ? CUSTOMISATION_SURCHARGE_AED : undefined,
      notes,
    })

    toast.success('Added to bag')
  }

  const toggleWishlist = () => {
    if (!product) return
    if (favorited) {
      removeWishlist(product.id)
      toast.success('Removed from favorites')
      return
    }
    addWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0] ?? '',
      category: product.category,
      href: `/shop/${product.id}`,
    })
    toast.success('Saved to favorites')
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
            <LocaleLink href="/" className="text-brand-clayRed/50 hover:text-brand-dustyBlue transition-colors" data-cursor-hover>
              Home
            </LocaleLink>
            <span className="text-brand-clayRed/30">/</span>
            <LocaleLink href="/shop" className="text-brand-clayRed/50 hover:text-brand-dustyBlue transition-colors" data-cursor-hover>
              Shop
            </LocaleLink>
            <span className="text-brand-clayRed/30">/</span>
            <span className="text-brand-darkRed">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="isolate grid min-w-0 grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-0 w-full min-w-0 max-w-full space-y-4 overflow-hidden"
          >
            {/* Main Image */}
            <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f5f5]">
              <Swiper
                modules={[Navigation, Thumbs, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true, dynamicBullets: true }}
                preventClicks={false}
                preventClicksPropagation={false}
                onSwiper={(swiper) => {
                  mainSwiperRef.current = swiper
                }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                className="h-full product-gallery-swiper"
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="relative h-full w-full cursor-zoom-in"
                      onClick={() => {
                        setLightboxIndex(index)
                        setIsLightboxOpen(true)
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          setLightboxIndex(index)
                          setIsLightboxOpen(true)
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label={`${product.name} — open image ${index + 1} in lightbox`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} — ${index === 0 ? 'campaign' : index === 1 ? 'close-up' : `product ${index - 1}`}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Thumbnails — tap to jump main gallery */}
            <div className="hidden md:block">
              <Swiper
                modules={[FreeMode, Thumbs]}
                onSwiper={setThumbsSwiper}
                spaceBetween={12}
                slidesPerView={4}
                freeMode
                watchSlidesProgress
                slideToClickedSlide
                preventClicks={false}
                preventClicksPropagation={false}
                className="product-gallery-thumbs !overflow-visible"
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={index} className="!h-auto">
                    <button
                      type="button"
                      className="group relative block aspect-[3/4] w-full overflow-hidden bg-[#f5f5f5] p-0 text-left outline-none ring-brand-darkRed focus-visible:ring-2"
                      onClick={() => mainSwiperRef.current?.slideTo(index)}
                      aria-label={`Show image ${index + 1}`}
                      data-cursor-hover
                    >
                      <Image
                        src={image}
                        alt=""
                        fill
                        sizes="120px"
                        className="object-cover transition-opacity group-hover:opacity-80"
                      />
                    </button>
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
            className={`relative z-[1] min-w-0 lg:sticky lg:top-32 lg:self-start ${isRTL ? 'text-right' : ''}`}
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
            <div className="mb-8 space-y-1">
              <p className="font-roboto text-xl text-brand-darkRed tracking-wide">
                {(displayUnitAed * quantity).toLocaleString()} AED
                {quantity > 1 && (
                  <span className="ml-2 font-roboto text-sm font-normal text-brand-clayRed/60">
                    ({quantity} × {displayUnitAed.toLocaleString()} AED)
                  </span>
                )}
              </p>
              {personalisationSurcharge > 0 && (
                <p className="font-roboto text-xs text-brand-clayRed/60 tracking-wide">
                  Includes {CUSTOMISATION_SURCHARGE_AED.toLocaleString()} AED personalisation per piece
                </p>
              )}
            </div>

            {/* Short Description */}
            <p className="font-roboto text-sm text-brand-clayRed/70 tracking-wide leading-relaxed mb-4">
              {product.description}
            </p>
            <p className="mb-8 font-roboto text-xs uppercase tracking-[0.18em] text-brand-dustyBlue">
              {isRTL
                ? 'صُنع حسب الطلب — متاحة ضمن الفصل الحالي (التوفر يُؤكَّد عند الطلب).'
                : 'Made to order — available within this chapter (availability confirmed when you order).'}
            </p>

            <OrderCutoffBanner />

            {/* Color Selection */}
            <div className="mb-8">
              <div className={`mb-3 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed">
                  Color
                </span>
                {selectedColor && (
                  <span className="font-roboto text-xs text-brand-clayRed/60 tracking-wide">
                    {selectedColor}
                  </span>
                )}
              </div>
              <p className={`mb-3 font-roboto text-xs leading-relaxed text-brand-clayRed/60 ${isRTL ? 'text-right' : ''}`}>
                {isRTL
                  ? 'الألوان المتاحة لهذا الطراز — اختاري لونًا قبل الإضافة للسلة.'
                  : 'Available colourways for this piece — tap a swatch to select before adding to bag.'}
              </p>
              <div className={`flex flex-wrap gap-3 ${isRTL ? 'justify-end' : ''}`}>
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(color.name)}
                    className={`h-11 w-11 rounded-full border-2 transition-all ${
                      selectedColor === color.name
                        ? 'border-brand-darkRed scale-110 ring-2 ring-brand-darkRed/20 ring-offset-2'
                        : 'border-brand-stone/30 hover:scale-105 hover:border-brand-dustyBlue'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    aria-pressed={selectedColor === color.name}
                    aria-label={`Colour ${color.name}`}
                    data-cursor-hover
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <div className={`mb-3 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed">
                  Size
                </span>
                <button
                  type="button"
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="flex items-center gap-1.5 font-roboto text-xs text-brand-clayRed hover:text-brand-dustyBlue tracking-wide underline transition-colors"
                  data-cursor-hover
                >
                  <FiMaximize2 className="w-3 h-3" />
                  Size Guide
                </button>
              </div>
              <p className={`mb-3 font-roboto text-xs leading-relaxed text-brand-clayRed/60 ${isRTL ? 'text-right' : ''}`}>
                {isRTL
                  ? 'جدول المقاسات أدناه موحّد لقصة A لكل الأنماط — اختاري المقاس ثم راجعي الجدول.'
                  : 'Same A-cut chart applies across all styles below — choose your size, then confirm against the table.'}
              </p>
              <div className={`flex flex-wrap gap-3 ${isRTL ? 'justify-end' : ''}`}>
                {sizeOptions.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => {
                      setSelectedSize(size)
                      if (needsLength) setLengthCm('')
                    }}
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

            <SizeChartPanel onOpenInteractive={() => setIsSizeGuideOpen(true)} />

            {/* Garment length (Abayas, Caftans, Dresses) — after size */}
            {needsLength && (
              <div className="mb-8">
                <label className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed mb-3 block">
                  Length (cm)
                </label>
                {!selectedSize ? (
                  <p className={`font-roboto text-xs text-brand-clayRed/60 tracking-wide ${isRTL ? 'text-right' : ''}`}>
                    {isRTL ? 'اختر المقاس أولاً لعرض أطوال التفصيل.' : 'Select a size to choose your length.'}
                  </p>
                ) : (
                  <select
                    value={lengthCm}
                    onChange={(e) => setLengthCm(e.target.value)}
                    className="w-full px-4 py-3 border border-brand-stone/50 font-roboto text-sm tracking-wide bg-white focus:border-brand-darkRed transition-colors"
                  >
                    <option value="">{isRTL ? 'اختر الطول' : 'Select length'}</option>
                    {lengthCmSelectOptions().map((cm) => (
                      <option key={cm} value={cm}>
                        {cm} cm
                      </option>
                    ))}
                  </select>
                )}
              </div>
            )}

            {/* Personalisation */}
            <div className="mb-8">
              <span className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed mb-3 block">
                Personalisation
              </span>
              <p className={`mb-3 font-roboto text-xs leading-relaxed text-brand-clayRed/60 ${isRTL ? 'text-right' : ''}`}>
                {isRTL
                  ? `إضافة نص تفصيلي مقابل ${CUSTOMISATION_SURCHARGE_AED} درهم لكل قطعة.`
                  : `Add custom text or embroidery for ${CUSTOMISATION_SURCHARGE_AED} AED per piece.`}
              </p>
              <div className={`flex flex-wrap gap-3 ${isRTL ? 'justify-end' : ''}`}>
                <button
                  type="button"
                  onClick={() => {
                    setCustomisationActive(false)
                    setCustomisationMessage('')
                  }}
                  className={`min-w-[100px] px-4 py-3 font-roboto text-xs uppercase tracking-[0.1em] border transition-all ${
                    !customisationActive
                      ? 'bg-brand-darkRed text-white border-brand-darkRed'
                      : 'bg-white text-brand-darkRed border-brand-stone/50 hover:border-brand-dustyBlue'
                  }`}
                  aria-pressed={!customisationActive}
                  data-cursor-hover
                >
                  {isRTL ? 'بدون تخصيص' : 'No personalisation'}
                </button>
                <button
                  type="button"
                  onClick={() => setCustomisationActive(true)}
                  className={`min-w-[100px] px-4 py-3 font-roboto text-xs uppercase tracking-[0.1em] border transition-all ${
                    customisationActive
                      ? 'bg-brand-darkRed text-white border-brand-darkRed'
                      : 'bg-white text-brand-darkRed border-brand-stone/50 hover:border-brand-dustyBlue'
                  }`}
                  aria-pressed={customisationActive}
                  data-cursor-hover
                >
                  {isRTL ? `تخصيص (+${CUSTOMISATION_SURCHARGE_AED})` : `Personalise (+${CUSTOMISATION_SURCHARGE_AED} AED)`}
                </button>
              </div>
              {customisationActive && (
                <div className="mt-4 space-y-2">
                  <input
                    type="text"
                    value={customisationMessage}
                    onChange={(e) => setCustomisationMessage(e.target.value.slice(0, CUSTOMISATION_MAX_CHARS))}
                    maxLength={CUSTOMISATION_MAX_CHARS}
                    placeholder={isRTL ? 'النص (٢٥ حرفاً كحد أقصى)' : 'Your message (max 25 characters)'}
                    className="w-full px-4 py-3 border border-brand-stone/50 font-roboto text-sm tracking-wide focus:border-brand-darkRed transition-colors"
                  />
                  <p className={`font-roboto text-[10px] text-brand-clayRed/50 ${isRTL ? 'text-right' : ''}`}>
                    {customisationMessage.length}/{CUSTOMISATION_MAX_CHARS}
                  </p>
                  <p className={`font-roboto text-xs text-brand-darkRed/80 leading-relaxed border border-brand-stone/30 bg-brand-stone/5 p-3 ${isRTL ? 'text-right' : ''}`}>
                    {isRTL
                      ? 'القطع المخصصة تُنفَّذ حسب طلبك ولا يمكن إرجاعها أو استبدالها.'
                      : 'Customised pieces are made to your request and cannot be returned or exchanged.'}
                  </p>
                </div>
              )}
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

              {/* Wishlist — persisted; view under /wishlist */}
              <button
                type="button"
                onClick={toggleWishlist}
                className={`px-4 border transition-colors ${
                  favorited
                    ? 'border-brand-darkRed bg-brand-darkRed text-white'
                    : 'border-brand-stone/50 text-brand-darkRed hover:border-brand-dustyBlue'
                }`}
                aria-pressed={favorited}
                aria-label={favorited ? 'Remove from favorites' : 'Save to favorites'}
                data-cursor-hover
              >
                <FiHeart className={`w-5 h-5 ${favorited ? 'fill-current' : ''}`} />
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
            <div className="relative m-4 h-full w-full max-h-[72vh] max-w-[51.2rem]">
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
