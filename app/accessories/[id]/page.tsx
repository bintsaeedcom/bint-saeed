'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, Pagination, FreeMode } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { FiChevronDown, FiPlus, FiMinus, FiHeart, FiX, FiShare2 } from 'react-icons/fi'
import toast from 'react-hot-toast'
import { accessories, accessoryCategories } from '@/data/accessories'
import { useCartStore } from '@/store/cartStore'
import { useWishlistStore } from '@/store/wishlistStore'
import OrderCutoffBanner from '@/components/OrderCutoffBanner'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { showAddedToBagToast } from '@/lib/cart/addedToBagToast'
import { getTabbyCheckoutUrl } from '@/lib/payments'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/pagination'

export default function AccessoryDetailPage() {
  const params = useParams()
  const rawId = params?.id
  const aid =
    typeof rawId === 'string'
      ? decodeURIComponent(rawId)
      : Array.isArray(rawId) && typeof rawId[0] === 'string'
        ? decodeURIComponent(rawId[0])
        : ''
  const accessory = accessories.find((a) => a.id === aid)

  const favorited = useWishlistStore((s) => s.items.some((i) => i.id === aid))
  const addWishlist = useWishlistStore((s) => s.addItem)
  const removeWishlist = useWishlistStore((s) => s.removeItem)

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const mainSwiperRef = useRef<SwiperType | null>(null)
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [openDropdown, setOpenDropdown] = useState<string | null>('description')
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const addItem = useCartStore((state) => state.addItem)
  const { formatPrice } = useCurrency()
  const { isRTL } = useLanguage()
  const tabbyUrl = useMemo(() => getTabbyCheckoutUrl(), [])

  useEffect(() => {
    const a = accessories.find((x) => x.id === aid)
    if (!a) {
      setSelectedColor('')
      return
    }
    if (a.colors.length === 1) {
      const c = a.colors[0]!
      setSelectedColor(isRTL ? c.nameAr : c.name)
    } else {
      setSelectedColor('')
    }
  }, [aid, isRTL])

  if (!accessory) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center bg-white">
        <div className={`text-center ${isRTL ? 'rtl' : ''}`}>
          <h1 data-document-h1="true" className="font-rozha text-3xl text-brand-darkRed mb-4">
            {isRTL ? 'المنتج غير موجود' : 'Product Not Found'}
          </h1>
          <LocaleLink
            href="/accessories"
            className="font-roboto text-sm uppercase tracking-[0.15em] text-brand-clayRed hover:text-brand-dustyBlue"
            data-cursor-hover
          >
            {isRTL ? 'العودة للإكسسوارات' : 'Return to Accessories'}
          </LocaleLink>
        </div>
      </div>
    )
  }

  const categoryInfo = accessoryCategories.find(c => c.id === accessory.category)

  const handleAddToCart = () => {
    if (!selectedColor && accessory.colors.length > 1) {
      toast.error(isRTL ? 'الرجاء اختيار اللون' : 'Please select a colour')
      return
    }

    addItem({
      id: accessory.id,
      productUrl: `/accessories/${accessory.id}`,
      name: isRTL ? accessory.nameAr : accessory.name,
      price: accessory.price,
      image: accessory.images[0],
      size: 'One Size',
      color:
        selectedColor ||
        (accessory.colors[0]
          ? isRTL
            ? accessory.colors[0].nameAr
            : accessory.colors[0].name
          : ''),
      quantity,
    })

    showAddedToBagToast(isRTL)
  }

  const toggleWishlist = () => {
    if (!accessory) return
    const displayName = isRTL ? accessory.nameAr : accessory.name
    const catInfo = accessoryCategories.find((c) => c.id === accessory.category)
    const catLabel = isRTL ? catInfo?.nameAr : catInfo?.name
    if (favorited) {
      removeWishlist(accessory.id)
      toast.success(isRTL ? 'أُزيلت من المفضلة' : 'Removed from favorites')
      return
    }
    addWishlist({
      id: accessory.id,
      name: displayName,
      price: accessory.price,
      image: accessory.images[0] ?? '',
      category: catLabel ?? 'Accessories',
      href: `/accessories/${accessory.id}`,
    })
    toast.success(isRTL ? 'أُضيفت للمفضلة' : 'Saved to favorites')
  }

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key)
  }

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Breadcrumb */}
      <div className="pt-28 pb-6 border-b border-brand-stone/20">
        <div className="container mx-auto min-w-0 px-6 lg:px-12">
          <nav
            aria-label="Breadcrumb"
            className={`flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 font-roboto text-[10px] uppercase tracking-[0.12em] sm:text-xs ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <div
              className={`flex shrink-0 flex-wrap items-center gap-2 leading-none text-brand-clayRed/50 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <LocaleLink href="/" className="hover:text-brand-dustyBlue transition-colors" data-cursor-hover>
                {isRTL ? 'الرئيسية' : 'Home'}
              </LocaleLink>
              <span className="select-none text-[11px] font-light text-brand-clayRed/30 sm:text-xs" aria-hidden>
                /
              </span>
              <LocaleLink href="/accessories" className="hover:text-brand-dustyBlue transition-colors" data-cursor-hover>
                {isRTL ? 'الإكسسوارات' : 'Accessories'}
              </LocaleLink>
              <span className="select-none text-[11px] font-light text-brand-clayRed/30 sm:text-xs" aria-hidden>
                /
              </span>
              <LocaleLink
                href={`/accessories?type=${accessory.category}`}
                className="max-w-[10rem] truncate hover:text-brand-dustyBlue transition-colors sm:max-w-none sm:overflow-visible sm:whitespace-normal"
                title={isRTL ? categoryInfo?.nameAr : categoryInfo?.name}
                data-cursor-hover
              >
                {isRTL ? categoryInfo?.nameAr : categoryInfo?.name}
              </LocaleLink>
              <span className="select-none text-[11px] font-light text-brand-clayRed/30 sm:text-xs" aria-hidden>
                /
              </span>
            </div>
            <span
              className="min-w-0 flex-1 truncate leading-snug text-brand-darkRed sm:flex-none sm:leading-normal sm:whitespace-normal sm:overflow-visible sm:text-clip"
              title={isRTL ? accessory.nameAr : accessory.name}
            >
              {isRTL ? accessory.nameAr : accessory.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-10 lg:px-10 lg:py-12">
        <div className="isolate grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image Gallery — Royal V-Neck / shop PDP structure */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-0 w-full min-w-0 overflow-hidden lg:max-w-[42rem]"
          >
            <div
              className={`grid gap-3 lg:items-start ${
                accessory.images.length > 1 ? 'lg:grid-cols-[4.75rem_minmax(0,1fr)]' : ''
              }`}
            >
              {accessory.images.length > 1 && (
                <div className="hidden lg:block">
                  <Swiper
                    modules={[FreeMode, Thumbs]}
                    direction="vertical"
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={5}
                    freeMode
                    watchSlidesProgress
                    slideToClickedSlide
                    preventClicks={false}
                    preventClicksPropagation={false}
                    touchStartPreventDefault={false}
                    className="product-gallery-thumbs !h-[44rem] !overflow-visible"
                  >
                    {accessory.images.map((image, index) => (
                      <SwiperSlide key={index} className="!h-auto">
                        <button
                          type="button"
                          className="group relative block aspect-[3/4] w-full overflow-hidden border border-brand-stone/25 bg-[#f5f5f5] p-0 text-left outline-none ring-brand-darkRed focus-visible:ring-2"
                          onClick={() => mainSwiperRef.current?.slideTo(index)}
                          aria-label={`Show image ${index + 1}`}
                          data-cursor-hover
                        >
                          <Image
                            src={image}
                            alt=""
                            fill
                            sizes="76px"
                            className="object-cover transition-opacity group-hover:opacity-80"
                          />
                        </button>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}

              <div className="space-y-3">
                <div className="relative aspect-[3/4] overflow-hidden border border-brand-stone/20 bg-[#f5f5f5]">
                  <Swiper
                    modules={[Navigation, Thumbs, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true, dynamicBullets: true }}
                    preventClicks={false}
                    preventClicksPropagation={false}
                    touchStartPreventDefault={false}
                    onSwiper={(swiper) => {
                      mainSwiperRef.current = swiper
                    }}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    className="h-full product-gallery-swiper"
                  >
                    {accessory.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className="relative h-full w-full cursor-zoom-in"
                          onClick={() => {
                            setLightboxIndex(index)
                            setIsLightboxOpen(true)
                          }}
                          role="presentation"
                        >
                          <Image
                            src={image}
                            alt={`${accessory.name} — ${index === 0 ? 'hero' : `detail ${index + 1}`}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div className={`pointer-events-none absolute top-4 z-10 flex flex-col gap-2 ${isRTL ? 'right-4' : 'left-4'}`}>
                    {accessory.isNew && (
                      <span className="pointer-events-none px-3 py-1 bg-brand-darkRed font-montserrat text-[10px] uppercase tracking-[0.15em] text-white">
                        {isRTL ? 'جديد' : 'New'}
                      </span>
                    )}
                    {accessory.isBestseller && (
                      <span className="pointer-events-none px-3 py-1 bg-brand-clayRed font-montserrat text-[10px] uppercase tracking-[0.15em] text-white">
                        {isRTL ? 'الأكثر مبيعاً' : 'Bestseller'}
                      </span>
                    )}
                    {accessory.isLimitedEdition && (
                      <span className="pointer-events-none border border-white/90 bg-brand-darkRed/85 px-3 py-1 font-montserrat text-[10px] uppercase tracking-[0.15em] text-white">
                        {isRTL ? 'إصدار محدود' : 'Limited Edition'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product Info — shop buy box (no notes / personalisation / wrist), one size */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`pdp-info relative z-[1] min-w-0 bg-white p-4 lg:sticky lg:top-28 lg:self-start lg:p-5 ${isRTL ? 'text-right' : ''}`}
          >
            <span className="mb-1.5 block font-montserrat text-[11px] uppercase tracking-[0.24em] text-brand-dustyBlue">
              {isRTL ? categoryInfo?.nameAr : categoryInfo?.name}
            </span>

            <h1
              data-document-h1="true"
              className="mb-2.5 font-rozha text-[1.75rem] leading-[1.15] text-brand-darkRed md:text-[1.95rem] lg:text-[2.05rem]"
            >
              {isRTL ? accessory.nameAr : accessory.name}
            </h1>

            <div className="mb-4 space-y-1">
              <p className="font-montserrat text-lg tracking-wide text-brand-darkRed">
                {formatPrice(accessory.price * quantity)}
                {quantity > 1 && (
                  <span className="ml-2 font-montserrat text-[11px] font-normal text-brand-darkRed/65">
                    ({quantity} × {formatPrice(accessory.price)})
                  </span>
                )}
              </p>
            </div>

            <p className={`mb-5 font-montserrat text-[11px] leading-relaxed text-brand-darkRed/75 ${isRTL ? 'text-right' : ''}`}>
              {isRTL ? accessory.descriptionAr : accessory.description}
            </p>

            <OrderCutoffBanner />

            {/* Colour — shop spacing */}
            <div className="mb-5 border-b border-brand-stone/20 pb-5">
              <div className={`mb-3 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-darkRed">
                  {isRTL ? 'اللون' : 'Color'}
                </span>
                {selectedColor && (
                  <span className="font-montserrat text-[11px] tracking-wide text-brand-darkRed/65">
                    {selectedColor}
                  </span>
                )}
              </div>
              <p className={`mb-2.5 font-montserrat text-[11px] leading-relaxed text-brand-darkRed/65 ${isRTL ? 'text-right' : ''}`}>
                {isRTL
                  ? 'الألوان المتاحة لهذه القطعة — اختاري لونًا قبل الإضافة للسلة.'
                  : 'Available colourways for this piece — select a colour before adding to bag.'}
              </p>
              <div className={`flex flex-wrap gap-2.5 ${isRTL ? 'justify-end' : ''}`}>
                {accessory.colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(isRTL ? color.nameAr : color.name)}
                    className={`h-9 w-9 rounded-full border-2 transition-all ${
                      selectedColor === (isRTL ? color.nameAr : color.name)
                        ? 'border-brand-darkRed ring-2 ring-brand-darkRed/20 ring-offset-2 scale-110'
                        : 'border-brand-stone/30 hover:scale-105 hover:border-brand-dustyBlue'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={isRTL ? color.nameAr : color.name}
                    aria-pressed={selectedColor === (isRTL ? color.nameAr : color.name)}
                    aria-label={`Colour ${isRTL ? color.nameAr : color.name}`}
                    data-cursor-hover
                  />
                ))}
              </div>
            </div>

            {/* Size — one size only (jewellery & all charms) */}
            <div className="mb-5 border-b border-brand-stone/20 pb-5">
              <div className={`mb-3 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-darkRed">
                  {isRTL ? 'المقاس' : 'Size'}
                </span>
              </div>
              <p className={`mb-2.5 font-montserrat text-[11px] leading-relaxed text-brand-darkRed/65 ${isRTL ? 'text-right' : ''}`}>
                {isRTL
                  ? 'جميع المجوهرات وتعليقات الحقائب والهاتف وتعليقات العباءة بمقاس واحد موحّد.'
                  : 'All jewellery, bag charms, phone charms, and abaya charms are offered in one universal size.'}
              </p>
              <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                <span className="min-w-[52px] border border-brand-darkRed bg-brand-darkRed px-3 py-2.5 font-montserrat text-[11px] uppercase tracking-[0.08em] text-white">
                  {isRTL ? 'مقاس واحد' : 'One Size'}
                </span>
              </div>
            </div>

            {/* Tabby */}
            <div className={`mb-3 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="rounded-sm border border-brand-stone/30 px-1.5 py-0.5 font-montserrat text-[11px] font-semibold lowercase tracking-normal text-brand-darkRed">
                  tabby
                </span>
                <p className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-darkRed/80">
                  {isRTL ? 'الدفع بالتقسيط مع تابي' : 'Pay in installments with Tabby'}
                </p>
              </div>
              {tabbyUrl ? (
                <a
                  href={tabbyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-darkRed underline hover:text-brand-dustyBlue"
                  data-cursor-hover
                >
                  {isRTL ? 'اعرفي أكثر' : 'Learn more'}
                </a>
              ) : (
                <span className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-darkRed/55">
                  {isRTL ? 'إعداد تابي قيد التفعيل' : 'Tabby setup in progress'}
                </span>
              )}
            </div>

            {/* Quantity & Add to Cart */}
            <div className={`mb-5 flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {/* Quantity */}
              <div className="flex items-center border border-brand-stone/50">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-brand-darkRed hover:bg-brand-dustyBlue/10 transition-colors"
                  data-cursor-hover
                >
                  <FiMinus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-montserrat text-[11px]">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-brand-darkRed hover:bg-brand-dustyBlue/10 transition-colors"
                  data-cursor-hover
                >
                  <FiPlus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 bg-brand-darkRed py-4 font-montserrat text-[11px] uppercase tracking-[0.15em] text-white hover:bg-brand-dustyBlue transition-colors"
                data-cursor-hover
              >
                {isRTL ? 'أضيفي للسلة' : 'Add to Bag'}
              </button>

              {/* Wishlist */}
              <button
                type="button"
                onClick={toggleWishlist}
                className={`px-4 border transition-colors ${
                  favorited
                    ? 'bg-brand-darkRed border-brand-darkRed text-white'
                    : 'border-brand-stone/50 text-brand-darkRed hover:border-brand-dustyBlue'
                }`}
                aria-pressed={favorited}
                data-cursor-hover
              >
                <FiHeart className={`w-5 h-5 ${favorited ? 'fill-current' : ''}`} />
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
                        <p>{isRTL ? '• الشحن المجاني متاح داخل الإمارات فقط.' : '• Free shipping is available within the UAE only.'}</p>
                        <p>
                          {isRTL
                            ? '• القطع الجاهزة للشحن تُرسل خلال 1-3 أيام عمل للطلبات المقدمة قبل الساعة 3:00 مساءً بتوقيت الإمارات.'
                            : '• In-stock styles dispatch within 1-3 business days for orders placed before 3:00 PM UAE time.'}
                        </p>
                        <p>
                          {isRTL
                            ? '• القطع المسبقة الطلب تُشحن في التاريخ الموضح على صفحة المنتج.'
                            : '• Pre-order styles dispatch on the date shown on the product page.'}
                        </p>
                        <p>
                          {isRTL
                            ? '• الطلبات المختلطة (جاهز + مسبق الطلب) تُشحن معاً في تاريخ المسبق الطلب المعلن.'
                            : '• Mixed orders (in-stock + pre-order) dispatch together on the stated pre-order date.'}
                        </p>
                        <p>
                          {isRTL
                            ? '• جميع المبيعات نهائية. لا نوفر استرداداً نقدياً، مع وجود بعض الاستثناءات.'
                            : '• All sales are final. We do not offer refunds, some exclusions apply.'}
                        </p>
                        <p>
                          {isRTL
                            ? '• يُقبل استبدال القطع الجاهزة فقط خلال 14 يوماً إذا كانت غير مستخدمة وغير متضررة مع البطاقات.'
                            : '• Exchanges for in-stock items are accepted within 14 days for unworn, undamaged pieces with tags attached.'}
                        </p>
                        <p>
                          {isRTL
                            ? '• لا يمكن إرجاع أو استبدال القطع المخفّضة.'
                            : '• Discounted items cannot be returned or exchanged.'}
                        </p>
                        <p>
                          {isRTL
                            ? '• القطع المسبقة الطلب لا يمكن إرجاعها أو استبدالها.'
                            : '• Pre-order items cannot be returned or exchanged.'}
                        </p>
                        <p>
                          {isRTL
                            ? '• القطع المخصصة لا يمكن إرجاعها أو استبدالها.'
                            : '• Personalised items cannot be returned or exchanged.'}
                        </p>
                        <p>
                          {isRTL ? '• للمزيد من المعلومات، راجعي ' : '• For more information, please review our '}
                          <LocaleLink href="/terms" className="underline hover:text-brand-dustyBlue" data-cursor-hover>
                            {isRTL ? 'سياسة الاسترجاع والاستبدال' : 'Refunds and Exchanges policy'}
                          </LocaleLink>
                          .
                        </p>
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
