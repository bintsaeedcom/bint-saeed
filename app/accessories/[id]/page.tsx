'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AppBreadcrumb from '@/components/AppBreadcrumb'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, Pagination, FreeMode } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { FiChevronDown, FiPlus, FiMinus, FiHeart, FiX, FiGlobe, FiAward } from 'react-icons/fi'
import toast from 'react-hot-toast'
import { accessories, accessoryCategories } from '@/data/accessories'
import { useCartStore } from '@/store/cartStore'
import { useWishlistStore } from '@/store/wishlistStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { showAddedToBagToast } from '@/lib/cart/addedToBagToast'
import { getTabbyCheckoutUrl } from '@/lib/payments'
import { trackEvent } from '@/lib/analytics/tracking'

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

  const thumbConnected = Boolean(thumbsSwiper && !thumbsSwiper.destroyed)
  const mainGalleryModules = useMemo(
    () => (thumbConnected ? [Navigation, Thumbs, Pagination] : [Navigation, Pagination]),
    [thumbConnected],
  )

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
      <div className="flex min-h-screen items-center justify-center bg-brand-pageCanvas pt-4 sm:pt-6 md:pt-8">
        <div className={`text-center ${isRTL ? 'rtl' : ''}`}>
          <h1 data-document-h1="true" className="font-rozha text-3xl text-brand-darkRed mb-4">
            {isRTL ? 'المنتج غير موجود' : 'Product Not Found'}
          </h1>
          <LocaleLink
            href="/accessories"
            className="font-montserrat text-sm uppercase tracking-[0.15em] text-brand-clayRed hover:text-brand-dustyBlue"
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

    trackEvent('add_to_cart', {
      item_id: accessory.id,
      item_name: isRTL ? accessory.nameAr : accessory.name,
      item_category: accessory.category,
      item_variant: selectedColor || 'default',
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

  const detailAngles = accessory.detailAngles
  const hasAngleColumn = !!detailAngles && detailAngles.length === 2
  const isVideoFile = (src: string) => /\.(mp4|mov|webm|ogg)$/i.test(src)
  const isHeicFile = (src: string) => /\.(heic|heif)$/i.test(src)
  const galleryGridClass = hasAngleColumn
    ? 'lg:grid-cols-[4.75rem_minmax(0,1fr)_minmax(8.75rem,11.25rem)]'
    : 'lg:grid-cols-[4.75rem_minmax(0,1fr)]'

  const displayName = isRTL ? accessory.nameAr : accessory.name
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: displayName,
    brand: {
      '@type': 'Brand',
      name: 'Bint Saeed',
    },
    description: isRTL ? accessory.descriptionAr : accessory.description,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AED',
      price: String(accessory.price),
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Bint Saeed',
      },
    },
  }

  useEffect(() => {
    trackEvent('view_item', {
      item_id: accessory.id,
      item_name: displayName,
      item_category: accessory.category,
      currency: 'AED',
      value: accessory.price,
    })
  }, [accessory.category, accessory.id, accessory.price, displayName])

  return (
    <div className="min-h-screen bg-brand-pageCanvas">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      {/* Breadcrumb — same shell as `/shop/[id]` */}
      <div className="pt-28 pb-6 border-b border-brand-stone/20">
        <div className="mx-auto min-w-0 max-w-[1280px] px-6 lg:px-10">
          <AppBreadcrumb
            rtl={isRTL}
            segments={[
              { label: isRTL ? 'الرئيسية' : 'Home', href: '/home' },
              { label: isRTL ? 'الإكسسوارات' : 'Accessories', href: '/accessories' },
              {
                label: (isRTL ? categoryInfo?.nameAr : categoryInfo?.name) ?? '',
                href: `/accessories?type=${accessory.category}`,
              },
              { label: isRTL ? accessory.nameAr : accessory.name },
            ].filter((s) => s.label.length > 0)}
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-10 lg:px-10 lg:py-12">
        <div className="isolate grid min-h-0 min-w-0 grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image Gallery — mirrors `/shop/[id]` (Royal V-Neck Kaftan); optional third column = detail angles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`relative z-0 w-full min-h-0 min-w-0 overflow-x-clip ${hasAngleColumn ? '' : 'lg:max-w-[42rem]'}`}
          >
            <div className={`grid gap-3 lg:items-start ${galleryGridClass}`}>
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
                        className="group relative block aspect-[9/16] w-full overflow-hidden border border-brand-stone/25 bg-[#f5f5f5] p-0 text-left outline-none ring-brand-darkRed focus-visible:ring-2"
                        onClick={() => {
                          mainSwiperRef.current?.slideTo(index)
                          trackEvent('gallery_interaction', {
                            interaction_type: 'thumbnail_click',
                            item_id: accessory.id,
                            image_index: index,
                          })
                        }}
                        aria-label={`Show image ${index + 1}`}
                        data-cursor-hover
                      >
                        {isVideoFile(image) ? (
                          <video
                            src={image}
                            muted
                            playsInline
                            preload="metadata"
                            className="h-full w-full img-zoom object-cover object-top transition-opacity group-hover:opacity-80"
                          />
                        ) : isHeicFile(image) ? (
                          <img
                            src={image}
                            alt={`${displayName} — thumbnail ${index + 1} | Bint Saeed`}
                            className="h-full w-full img-zoom object-cover object-top transition-opacity group-hover:opacity-80"
                            loading="lazy"
                          />
                        ) : (
                          <Image
                            src={image}
                            alt={`${displayName} — thumbnail ${index + 1} | Bint Saeed`}
                            fill
                            sizes="76px"
                            className="img-zoom object-cover object-top transition-opacity group-hover:opacity-80"
                          />
                        )}
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="space-y-3">
                <div className="relative aspect-[9/16] w-full min-h-0 overflow-hidden border border-brand-stone/20 bg-[#f5f5f5]">
                  <Swiper
                    modules={mainGalleryModules}
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
                    onSlideChange={(swiper) =>
                      trackEvent('gallery_interaction', {
                        interaction_type: 'slide_change',
                        item_id: accessory.id,
                        image_index: swiper.activeIndex,
                      })
                    }
                    {...(thumbConnected ? { thumbs: { swiper: thumbsSwiper } } : {})}
                    className="h-full w-full min-h-0 product-gallery-swiper"
                  >
                    {accessory.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className={`relative h-full w-full ${isVideoFile(image) ? 'cursor-default' : 'cursor-zoom-in'}`}
                          onClick={() => {
                            if (isVideoFile(image)) return
                            setLightboxIndex(index)
                            setIsLightboxOpen(true)
                          }}
                          onKeyDown={(e) => {
                            if (isVideoFile(image)) return
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              setLightboxIndex(index)
                              setIsLightboxOpen(true)
                            }
                          }}
                          role="button"
                          tabIndex={isVideoFile(image) ? -1 : 0}
                          aria-label={
                            isVideoFile(image)
                              ? `${displayName} — video ${index + 1}`
                              : `${displayName} — open image ${index + 1} in lightbox`
                          }
                        >
                          {isVideoFile(image) ? (
                            <video
                              src={image}
                              controls
                              playsInline
                              preload="metadata"
                              className="h-full w-full img-zoom object-cover object-top"
                            />
                          ) : isHeicFile(image) ? (
                            <img
                              src={image}
                              alt={`${displayName} — ${index === 0 ? 'campaign' : index === 1 ? 'close-up' : `product ${index - 1}`}`}
                              className="h-full w-full img-zoom object-cover object-top"
                              loading={index === 0 ? 'eager' : 'lazy'}
                            />
                          ) : (
                            <Image
                              src={image}
                              alt={`${displayName} — ${index === 0 ? 'campaign' : index === 1 ? 'close-up' : `product ${index - 1}`}`}
                              fill
                              sizes="(max-width: 768px) 100vw, 40vw"
                              className="img-zoom object-cover object-top"
                              priority={index === 0}
                            />
                          )}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Thumbnails — tablet (same pattern as shop PDP) */}
                <div className="hidden md:block lg:hidden">
                  <Swiper
                    modules={[FreeMode, Thumbs]}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode
                    watchSlidesProgress
                    slideToClickedSlide
                    preventClicks={false}
                    preventClicksPropagation={false}
                    touchStartPreventDefault={false}
                    className="product-gallery-thumbs !overflow-visible"
                  >
                    {accessory.images.map((image, index) => (
                      <SwiperSlide key={index} className="!h-auto">
                        <button
                          type="button"
                          className="group relative block aspect-[9/16] w-full overflow-hidden border border-brand-stone/25 bg-[#f5f5f5] p-0 text-left outline-none ring-brand-darkRed focus-visible:ring-2"
                          onClick={() => {
                            mainSwiperRef.current?.slideTo(index)
                            trackEvent('gallery_interaction', {
                              interaction_type: 'thumbnail_click',
                              item_id: accessory.id,
                              image_index: index,
                            })
                          }}
                          aria-label={`Show image ${index + 1}`}
                          data-cursor-hover
                        >
                          {isVideoFile(image) ? (
                            <video
                              src={image}
                              muted
                              playsInline
                              preload="metadata"
                              className="h-full w-full img-zoom object-cover object-top transition-opacity group-hover:opacity-80"
                            />
                          ) : isHeicFile(image) ? (
                            <img
                              src={image}
                              alt={`${displayName} — thumbnail ${index + 1} | Bint Saeed`}
                              className="h-full w-full img-zoom object-cover object-top transition-opacity group-hover:opacity-80"
                              loading="lazy"
                            />
                          ) : (
                            <Image
                              src={image}
                              alt={`${displayName} — thumbnail ${index + 1} | Bint Saeed`}
                              fill
                              sizes="120px"
                              className="img-zoom object-cover object-top transition-opacity group-hover:opacity-80"
                            />
                          )}
                        </button>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              {/* Detail angles — desktop only; stacked 3:4 portraits */}
              {hasAngleColumn && detailAngles ? (
                <div className="hidden min-w-0 flex-col gap-3 lg:flex">
                  {detailAngles.map((src, ai) => (
                    <div
                      key={`${src}-${ai}`}
                      className="relative aspect-[9/16] w-full overflow-hidden border border-brand-stone/20 bg-[#f5f5f5]"
                    >
                      {isHeicFile(src) ? (
                        <img
                          src={src}
                          alt={`${displayName} — ${isRTL ? `زاوية ${ai + 1}` : `angle ${ai + 1}`}`}
                          className="h-full w-full img-zoom object-cover object-top"
                          loading="lazy"
                        />
                      ) : (
                        <Image
                          src={src}
                          alt={`${displayName} — ${isRTL ? `زاوية ${ai + 1}` : `angle ${ai + 1}`}`}
                          fill
                          sizes="(max-width: 1024px) 0px, 11rem"
                          className="img-zoom object-cover object-top"
                        />
                      )}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </motion.div>

          {/* Product Info — same buy column structure as `/shop/[id]` (no personalisation / notes) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`pdp-info relative z-[1] min-h-0 min-w-0 bg-white p-4 lg:sticky lg:top-28 lg:self-start lg:p-5 ${isRTL ? 'text-right' : ''}`}
          >
            <span className="mb-1.5 block font-montserrat text-[11px] uppercase tracking-[0.24em] text-brand-dustyBlue">
              {isRTL ? categoryInfo?.nameAr : categoryInfo?.name}
            </span>

            <h1
              data-document-h1="true"
              className="mb-2.5 font-rozha text-[1.75rem] leading-[1.15] text-brand-darkRed md:text-[1.95rem] lg:text-[2.05rem]"
            >
              {displayName}
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
            <div className="mb-5 flex gap-3">
              <div className="flex items-center border border-brand-stone/50">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2.5 text-brand-darkRed transition-colors hover:bg-brand-dustyBlue/10"
                  data-cursor-hover
                >
                  <FiMinus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center font-montserrat text-[11px]">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2.5 text-brand-darkRed transition-colors hover:bg-brand-dustyBlue/10"
                  data-cursor-hover
                >
                  <FiPlus className="h-4 w-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 bg-brand-darkRed px-6 py-3 font-montserrat text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-brand-dustyBlue"
                data-cursor-hover
              >
                {isRTL ? 'أضيفي للسلة' : 'Add to Bag'}
              </button>

              <button
                type="button"
                onClick={toggleWishlist}
                className={`border px-3 transition-colors ${
                  favorited
                    ? 'border-brand-darkRed bg-brand-darkRed text-white'
                    : 'border-brand-stone/50 text-brand-darkRed hover:border-brand-dustyBlue'
                }`}
                aria-pressed={favorited}
                aria-label={favorited ? (isRTL ? 'إزالة من المفضلة' : 'Remove from favorites') : isRTL ? 'أضيفي للمفضلة' : 'Save to favorites'}
                data-cursor-hover
              >
                <FiHeart className={`h-5 w-5 ${favorited ? 'fill-current' : ''}`} />
              </button>
            </div>
            <p className={`mb-5 font-montserrat text-[11px] leading-relaxed tracking-wide text-brand-darkRed/70 ${isRTL ? 'text-right' : ''}`}>
              {isRTL
                ? 'مصنوع عند الطلب. يبدأ التصنيع بعد الشراء. الإرجاع محدود. '
                : 'Made to order. Created after purchase. Returns are limited. '}
              <LocaleLink href="/shipment-return-policy" className="underline hover:text-brand-dustyBlue" data-cursor-hover>
                {isRTL ? 'اطلعي على سياسة الشحن والإرجاع' : 'See Shipment & Return Policy'}
              </LocaleLink>
              .
            </p>

            <div className={`mb-5 grid grid-cols-3 gap-3 border-y border-brand-stone/20 py-4 ${isRTL ? 'text-right' : ''}`}>
              <div className="flex flex-col items-center gap-1 text-center">
                <FiAward className="h-3.5 w-3.5 text-brand-darkRed/75" />
                <span className="font-montserrat text-[9px] uppercase tracking-[0.13em] text-brand-darkRed">
                  {isRTL ? 'صنع أخلاقي' : 'Ethically made'}
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <FiHeart className="h-3.5 w-3.5 text-brand-darkRed/75" />
                <span className="font-montserrat text-[9px] uppercase tracking-[0.13em] text-brand-darkRed">
                  {isRTL ? 'نعطي للأمام' : 'We Give Forward'}
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <FiGlobe className="h-3.5 w-3.5 text-brand-darkRed/75" />
                <span className="font-montserrat text-[9px] uppercase tracking-[0.13em] text-brand-darkRed">
                  {isRTL ? 'شحن عالمي' : 'Worldwide shipping'}
                </span>
              </div>
            </div>

            <p className="mb-2.5 whitespace-pre-line font-montserrat text-[11px] leading-[1.65] tracking-wide text-brand-darkRed/75">
              {isRTL ? accessory.descriptionAr : accessory.description}
            </p>
            <p className="mb-4 font-montserrat text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-dustyBlue">
              {isRTL
                ? 'صُنع حسب الطلب — متاحة ضمن الفصل الحالي (التوفر يُؤكَّد عند الطلب).'
                : 'Made to order — available within this chapter (availability confirmed when you order).'}
            </p>

            {/* Accordions — same pattern as `/shop/[id]` */}
            <div className="border-t border-brand-stone/30">
              <div className="border-b border-brand-stone/30">
                <button
                  type="button"
                  onClick={() => toggleDropdown('description')}
                  className="flex w-full items-center justify-between py-4"
                  data-cursor-hover
                >
                  <h2 className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-darkRed">
                    {isRTL ? 'تفاصيل المنتج' : 'Product Details'}
                  </h2>
                  <FiChevronDown
                    className={`h-4 w-4 text-brand-darkRed transition-transform ${openDropdown === 'description' ? 'rotate-180' : ''}`}
                  />
                </button>
                {openDropdown === 'description' && (
                  <div className="space-y-2 pb-5">
                    <p className={`font-montserrat text-[11px] leading-relaxed tracking-wide text-brand-darkRed/75 ${isRTL ? 'text-right' : ''}`}>
                      • {isRTL ? accessory.descriptionAr : accessory.description}
                    </p>
                  </div>
                )}
              </div>

              <div className="border-b border-brand-stone/30">
                <button
                  type="button"
                  onClick={() => toggleDropdown('materials')}
                  className="flex w-full items-center justify-between py-4"
                  data-cursor-hover
                >
                  <h3 className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-darkRed">
                    {isRTL ? 'المواد' : 'Materials'}
                  </h3>
                  <FiChevronDown
                    className={`h-4 w-4 text-brand-darkRed transition-transform ${openDropdown === 'materials' ? 'rotate-180' : ''}`}
                  />
                </button>
                {openDropdown === 'materials' && (
                  <div className="space-y-2 pb-5">
                    <p className={`font-montserrat text-[11px] leading-relaxed tracking-wide text-brand-darkRed/75 ${isRTL ? 'text-right' : ''}`}>
                      • {isRTL ? accessory.materialsAr : accessory.materials}
                    </p>
                  </div>
                )}
              </div>

              <div className="border-b border-brand-stone/30">
                <button
                  type="button"
                  onClick={() => toggleDropdown('care')}
                  className="flex w-full items-center justify-between py-4"
                  data-cursor-hover
                >
                  <h3 className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-darkRed">
                    {isRTL ? 'العناية' : 'Care'}
                  </h3>
                  <FiChevronDown
                    className={`h-4 w-4 text-brand-darkRed transition-transform ${openDropdown === 'care' ? 'rotate-180' : ''}`}
                  />
                </button>
                {openDropdown === 'care' && (
                  <div className="space-y-2 pb-5 font-montserrat text-[11px] leading-relaxed tracking-wide text-brand-darkRed/75">
                    <p className={isRTL ? 'text-right' : ''}>{isRTL ? '• تجنبي ملامسة العطور والمواد الكيميائية' : '• Avoid contact with perfumes and chemicals'}</p>
                    <p className={isRTL ? 'text-right' : ''}>{isRTL ? '• احفظيها في مكان جاف' : '• Store in a dry place'}</p>
                    <p className={isRTL ? 'text-right' : ''}>{isRTL ? '• امسحيها بقطعة قماش ناعمة' : '• Wipe with a soft cloth'}</p>
                    <p className={isRTL ? 'text-right' : ''}>{isRTL ? '• أزيليها قبل السباحة أو الاستحمام' : '• Remove before swimming or bathing'}</p>
                  </div>
                )}
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => toggleDropdown('shipping')}
                  className="flex w-full items-center justify-between py-4"
                  data-cursor-hover
                >
                  <h3 className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-darkRed">
                    {isRTL ? 'الشحن والإرجاع' : 'Shipping & Returns'}
                  </h3>
                  <FiChevronDown
                    className={`h-4 w-4 text-brand-darkRed transition-transform ${openDropdown === 'shipping' ? 'rotate-180' : ''}`}
                  />
                </button>
                {openDropdown === 'shipping' && (
                  <div className="space-y-2 pb-5 font-montserrat text-[11px] leading-relaxed tracking-wide text-brand-darkRed/75">
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
                )}
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
              type="button"
              className="absolute right-6 top-6 z-10 text-white"
              onClick={() => setIsLightboxOpen(false)}
              data-cursor-hover
            >
              <FiX className="h-8 w-8" />
            </button>
            <div className="relative m-4 h-full max-h-[72vh] w-full max-w-[51.2rem]">
              <Image src={accessory.images[lightboxIndex]} alt={displayName} fill className="object-contain" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
