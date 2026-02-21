'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { FiChevronDown, FiPlus, FiMinus, FiArrowLeft, FiHeart, FiX, FiShare2 } from 'react-icons/fi'
import toast from 'react-hot-toast'
import { accessories, accessoryCategories } from '@/data/accessories'
import { useCartStore } from '@/store/cartStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import WristMeasurement from '@/components/WristMeasurement'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export default function AccessoryDetailPage() {
  const params = useParams()
  const router = useRouter()
  const accessory = accessories.find((a) => a.id === params.id)
  
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [wristSize, setWristSize] = useState('')
  const [notes, setNotes] = useState('')
  const [openDropdown, setOpenDropdown] = useState<string | null>('description')
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  
  const addItem = useCartStore((state) => state.addItem)
  const { formatPrice } = useCurrency()
  const { isRTL } = useLanguage()

  if (!accessory) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center bg-white">
        <div className={`text-center ${isRTL ? 'rtl' : ''}`}>
          <h1 className="font-rozha text-3xl text-brand-darkRed mb-4">
            {isRTL ? 'المنتج غير موجود' : 'Product Not Found'}
          </h1>
          <Link
            href="/accessories"
            className="font-roboto text-sm uppercase tracking-[0.15em] text-brand-clayRed hover:text-brand-dustyBlue"
            data-cursor-hover
          >
            {isRTL ? 'العودة للإكسسوارات' : 'Return to Accessories'}
          </Link>
        </div>
      </div>
    )
  }

  const isBracelet = accessory.category === 'bracelets'
  const categoryInfo = accessoryCategories.find(c => c.id === accessory.category)

  const handleAddToCart = () => {
    if (!selectedColor) {
      toast.error(isRTL ? 'الرجاء اختيار لون' : 'Please select a color')
      return
    }
    if (isBracelet && !wristSize) {
      toast.error(isRTL ? 'الرجاء إدخال مقاس المعصم' : 'Please enter your wrist size')
      return
    }

    addItem({
      id: accessory.id,
      name: isRTL ? accessory.nameAr : accessory.name,
      price: accessory.price,
      image: accessory.images[0],
      size: isBracelet ? `Wrist: ${wristSize}cm` : 'One Size',
      color: selectedColor,
      quantity,
      customLength: isBracelet ? wristSize : '',
      notes,
    })

    toast.success(isRTL ? 'تمت الإضافة للسلة' : 'Added to bag')
  }

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key)
  }

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Breadcrumb */}
      <div className="pt-28 pb-6 border-b border-brand-stone/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className={`flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.1em] ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Link href="/" className="text-brand-clayRed/50 hover:text-brand-dustyBlue transition-colors" data-cursor-hover>
              {isRTL ? 'الرئيسية' : 'Home'}
            </Link>
            <span className="text-brand-clayRed/30">/</span>
            <Link href="/accessories" className="text-brand-clayRed/50 hover:text-brand-dustyBlue transition-colors" data-cursor-hover>
              {isRTL ? 'الإكسسوارات' : 'Accessories'}
            </Link>
            <span className="text-brand-clayRed/30">/</span>
            <Link 
              href={`/accessories?category=${accessory.category}`} 
              className="text-brand-clayRed/50 hover:text-brand-dustyBlue transition-colors" 
              data-cursor-hover
            >
              {isRTL ? categoryInfo?.nameAr : categoryInfo?.name}
            </Link>
            <span className="text-brand-clayRed/30">/</span>
            <span className="text-brand-darkRed">{isRTL ? accessory.nameAr : accessory.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative aspect-square bg-[#f5f5f5] overflow-hidden">
              <Swiper
                modules={[Navigation, Thumbs]}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                navigation
                className="h-full"
              >
                {accessory.images.map((image, index) => (
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
                        alt={`${accessory.name} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Tags */}
              <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} flex flex-col gap-2 z-10`}>
                {accessory.isNew && (
                  <span className="px-3 py-1 bg-brand-darkRed text-white font-roboto text-[10px] uppercase tracking-[0.15em]">
                    {isRTL ? 'جديد' : 'New'}
                  </span>
                )}
                {accessory.isBestseller && (
                  <span className="px-3 py-1 bg-brand-clayRed text-white font-roboto text-[10px] uppercase tracking-[0.15em]">
                    {isRTL ? 'الأكثر مبيعاً' : 'Bestseller'}
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnails */}
            {accessory.images.length > 1 && (
              <div className="hidden md:block">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={12}
                  slidesPerView={4}
                  watchSlidesProgress
                  className="!overflow-visible"
                >
                  {accessory.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative aspect-square bg-[#f5f5f5] cursor-pointer overflow-hidden group">
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
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`lg:sticky lg:top-32 lg:self-start ${isRTL ? 'text-right' : ''}`}
          >
            {/* Category */}
            <span className="font-roboto text-xs uppercase tracking-[0.3em] text-brand-dustyBlue mb-3 block">
              {isRTL ? categoryInfo?.nameAr : categoryInfo?.name}
            </span>

            {/* Title */}
            <h1 className="font-rozha text-3xl md:text-4xl lg:text-5xl text-brand-darkRed mb-4">
              {isRTL ? accessory.nameAr : accessory.name}
            </h1>

            {/* Price */}
            <p className="font-roboto text-xl text-brand-darkRed tracking-wide mb-8">
              {formatPrice(accessory.price)}
            </p>

            {/* Short Description */}
            <p className="font-roboto text-sm text-brand-clayRed/70 tracking-wide leading-relaxed mb-8">
              {isRTL ? accessory.descriptionAr : accessory.description}
            </p>

            {/* Color Selection */}
            <div className="mb-8">
              <div className={`flex items-center justify-between mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed">
                  {isRTL ? 'اللون' : 'Color'}
                </span>
                {selectedColor && (
                  <span className="font-roboto text-xs text-brand-clayRed/60 tracking-wide">
                    {selectedColor}
                  </span>
                )}
              </div>
              <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {accessory.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(isRTL ? color.nameAr : color.name)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === (isRTL ? color.nameAr : color.name)
                        ? 'border-brand-darkRed scale-110'
                        : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={isRTL ? color.nameAr : color.name}
                    data-cursor-hover
                  />
                ))}
              </div>
            </div>

            {/* Wrist Measurement (for bracelets only) */}
            {isBracelet && (
              <div className="mb-8">
                <WristMeasurement value={wristSize} onChange={setWristSize} />
              </div>
            )}

            {/* Notes */}
            <div className="mb-8">
              <label className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed mb-3 block">
                {isRTL ? 'ملاحظات خاصة (اختياري)' : 'Special Notes (Optional)'}
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={isRTL ? 'أي طلبات خاصة...' : 'Any special requests...'}
                rows={2}
                className={`w-full px-4 py-3 border border-brand-stone/50 font-roboto text-sm tracking-wide focus:border-brand-darkRed transition-colors resize-none ${isRTL ? 'text-right' : ''}`}
              />
            </div>

            {/* Quantity & Add to Cart */}
            <div className={`flex gap-4 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
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
                className="flex-1 py-4 bg-brand-darkRed text-white font-roboto text-sm uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-colors"
                data-cursor-hover
              >
                {isRTL ? 'أضيفي للسلة' : 'Add to Bag'}
              </button>

              {/* Wishlist */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`px-4 border transition-colors ${
                  isWishlisted 
                    ? 'bg-brand-darkRed border-brand-darkRed text-white' 
                    : 'border-brand-stone/50 text-brand-darkRed hover:border-brand-dustyBlue'
                }`}
                data-cursor-hover
              >
                <FiHeart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Share */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                toast.success(isRTL ? 'تم نسخ الرابط' : 'Link copied!')
              }}
              className={`flex items-center gap-2 font-roboto text-xs text-brand-clayRed/60 hover:text-brand-dustyBlue transition-colors mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              <FiShare2 className="w-4 h-4" />
              {isRTL ? 'مشاركة' : 'Share'}
            </button>

            {/* Dropdowns */}
            <div className="border-t border-brand-stone/20">
              {/* Description */}
              <div className="border-b border-brand-stone/20">
                <button
                  onClick={() => toggleDropdown('description')}
                  className={`w-full py-4 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}
                  data-cursor-hover
                >
                  <span className="font-roboto text-xs uppercase tracking-[0.15em] text-brand-darkRed">
                    {isRTL ? 'الوصف' : 'Description'}
                  </span>
                  <FiChevronDown className={`w-4 h-4 text-brand-darkRed transition-transform ${openDropdown === 'description' ? 'rotate-180' : ''}`} />
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
                        {isRTL ? accessory.descriptionAr : accessory.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Materials */}
              <div className="border-b border-brand-stone/20">
                <button
                  onClick={() => toggleDropdown('materials')}
                  className={`w-full py-4 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}
                  data-cursor-hover
                >
                  <span className="font-roboto text-xs uppercase tracking-[0.15em] text-brand-darkRed">
                    {isRTL ? 'المواد' : 'Materials'}
                  </span>
                  <FiChevronDown className={`w-4 h-4 text-brand-darkRed transition-transform ${openDropdown === 'materials' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openDropdown === 'materials' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="font-roboto text-sm text-brand-clayRed/70 tracking-wide leading-relaxed pb-5">
                        {isRTL ? accessory.materialsAr : accessory.materials}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Care */}
              <div className="border-b border-brand-stone/20">
                <button
                  onClick={() => toggleDropdown('care')}
                  className={`w-full py-4 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}
                  data-cursor-hover
                >
                  <span className="font-roboto text-xs uppercase tracking-[0.15em] text-brand-darkRed">
                    {isRTL ? 'العناية' : 'Care'}
                  </span>
                  <FiChevronDown className={`w-4 h-4 text-brand-darkRed transition-transform ${openDropdown === 'care' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openDropdown === 'care' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="font-roboto text-sm text-brand-clayRed/70 tracking-wide leading-relaxed pb-5 space-y-2">
                        <p>{isRTL ? '• تجنبي ملامسة العطور والمواد الكيميائية' : '• Avoid contact with perfumes and chemicals'}</p>
                        <p>{isRTL ? '• احفظيها في مكان جاف' : '• Store in a dry place'}</p>
                        <p>{isRTL ? '• امسحيها بقطعة قماش ناعمة' : '• Wipe with a soft cloth'}</p>
                        <p>{isRTL ? '• أزيليها قبل السباحة أو الاستحمام' : '• Remove before swimming or bathing'}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Shipping */}
              <div className="border-b border-brand-stone/20">
                <button
                  onClick={() => toggleDropdown('shipping')}
                  className={`w-full py-4 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}
                  data-cursor-hover
                >
                  <span className="font-roboto text-xs uppercase tracking-[0.15em] text-brand-darkRed">
                    {isRTL ? 'الشحن' : 'Shipping'}
                  </span>
                  <FiChevronDown className={`w-4 h-4 text-brand-darkRed transition-transform ${openDropdown === 'shipping' ? 'rotate-180' : ''}`} />
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
                        <p>{isRTL ? '• شحن مجاني للطلبات فوق 500 درهم' : '• Free shipping on orders over 500 AED'}</p>
                        <p>{isRTL ? '• التوصيل السريع: 1-2 أيام عمل (الإمارات)' : '• Express delivery: 1-2 business days (UAE)'}</p>
                        <p>{isRTL ? '• التوصيل العادي: 3-5 أيام عمل (الخليج)' : '• Standard delivery: 3-5 business days (GCC)'}</p>
                        <p>{isRTL ? '• الإرجاع مقبول خلال 14 يوم' : '• Returns accepted within 14 days'}</p>
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
              className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} text-white z-10`}
              onClick={() => setIsLightboxOpen(false)}
              data-cursor-hover
            >
              <FiX className="w-8 h-8" />
            </button>
            <div className="relative w-full h-full max-w-5xl max-h-[90vh] m-4">
              <Image
                src={accessory.images[lightboxIndex]}
                alt={accessory.name}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
