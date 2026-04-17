'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, Pagination, FreeMode } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { FiChevronDown, FiPlus, FiMinus, FiHeart, FiX, FiMaximize2, FiGlobe, FiAward } from 'react-icons/fi'
import SizeGuideModal from '@/components/SizeGuideModal'
import toast from 'react-hot-toast'
import { products as staticProducts, type Product } from '@/data/products'
import { getProductPdpContent } from '@/data/productPdpContent'
import { useCartStore } from '@/store/cartStore'
import { useWishlistStore } from '@/store/wishlistStore'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getTabbyCheckoutUrl } from '@/lib/payments'
import { getProductHref, getProductSlug, resolveProductIdentifier } from '@/lib/products/links'
import {
  getPdpSizeOptions,
  CUSTOMISATION_SURCHARGE_AED,
  CUSTOMISATION_MAX_CHARS,
} from '@/lib/shopProductOptions'
import { showAddedToBagToast } from '@/lib/cart/addedToBagToast'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/pagination'

const SPECIAL_NOTES_MAX_CHARS = 150

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const rawId = params?.id
  const routeIdentifier =
    typeof rawId === 'string'
      ? decodeURIComponent(rawId)
      : Array.isArray(rawId) && typeof rawId[0] === 'string'
        ? decodeURIComponent(rawId[0])
        : ''
  const resolvedStaticProduct = useMemo(
    () => (routeIdentifier ? resolveProductIdentifier(staticProducts, routeIdentifier) : null),
    [routeIdentifier]
  )
  const productId = resolvedStaticProduct?.id ?? routeIdentifier
  const [product, setProduct] = useState<Product | null>(() =>
    resolvedStaticProduct
  )

  useEffect(() => {
    const base = resolvedStaticProduct
    setProduct(base)
    if (!productId) return
    let cancelled = false
    fetch(`/api/catalog/${encodeURIComponent(routeIdentifier)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled || !data?.product) return
        setProduct(data.product as Product)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [productId, resolvedStaticProduct, routeIdentifier])

  useEffect(() => {
    if (!product || !routeIdentifier) return
    const canonical = getProductSlug(product).toLowerCase()
    const normalized = routeIdentifier.trim().toLowerCase()
    if (normalized === canonical) return
    router.replace(getProductHref(product))
  }, [product, routeIdentifier, router])

  const favorited = useWishlistStore((s) => s.items.some((i) => i.id === productId))
  const addWishlist = useWishlistStore((s) => s.addItem)
  const removeWishlist = useWishlistStore((s) => s.removeItem)

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const mainSwiperRef = useRef<SwiperType | null>(null)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [customisationActive, setCustomisationActive] = useState(false)
  const [customisationMessage, setCustomisationMessage] = useState('')
  const [notes, setNotes] = useState('')
  const [openDropdown, setOpenDropdown] = useState<string | null>('description')
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false)
  
  const addItem = useCartStore((state) => state.addItem)
  const { isRTL } = useLanguage()

  const relatedStyles = useMemo(
    () =>
      product
        ? staticProducts
            .filter((p) => p.id !== product.id && p.category === product.category)
            .slice(0, 3)
        : [],
    [product],
  )
  const { productDetails, fitAndSizeDetails } = useMemo(
    () => (product ? getProductPdpContent(product) : { productDetails: [], fitAndSizeDetails: [] }),
    [product]
  )
  const estimatedShipDate = useMemo(() => {
    const d = new Date()
    d.setDate(d.getDate() + 14)
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    }).format(d)
  }, [])
  const tabbyUrl = useMemo(() => getTabbyCheckoutUrl(), [])

  if (!product) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 data-document-h1="true" className="font-rozha text-3xl text-brand-darkRed mb-4">Product Not Found</h1>
          <LocaleLink
            href="/shop"
            className="font-montserrat text-sm uppercase tracking-[0.15em] text-brand-darkRed hover:text-brand-dustyBlue"
            data-cursor-hover
          >
            Return to Shop
          </LocaleLink>
        </div>
      </div>
    )
  }

  const sizeOptions = getPdpSizeOptions(product.category, product.sizes)
  useEffect(() => {
    if (!sizeOptions.length) return
    setSelectedSize((current) => (current && sizeOptions.includes(current) ? current : sizeOptions[0] ?? ''))
  }, [sizeOptions, product.id])

  useEffect(() => {
    const availableColors = product.colors.map((color) => color.name)
    if (!availableColors.length) return
    setSelectedColor((current) =>
      current && availableColors.includes(current) ? current : (availableColors[0] ?? '')
    )
  }, [product.colors, product.id])

  const personalisationSurcharge =
    customisationActive && customisationMessage.trim().length > 0 ? CUSTOMISATION_SURCHARGE_AED : 0
  const displayUnitAed = product.price + personalisationSurcharge
  const sizeAndMeasurementDetails = [product.measurements, ...fitAndSizeDetails]
  const isVideoFile = (src: string) => /\.(mp4|mov|webm|ogg)$/i.test(src)
  const isHeicFile = (src: string) => /\.(heic|heif)$/i.test(src)

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size')
      return
    }
    if (!selectedColor) {
      toast.error('Please select a color')
      return
    }
    if (customisationActive && !customisationMessage.trim()) {
      toast.error('Please enter your personalisation text, or turn personalisation off')
      return
    }

    const trimmedCustom = customisationActive ? customisationMessage.trim() : ''

    addItem({
      id: product.id,
      productUrl: getProductHref(product),
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity,
      customisationMessage: trimmedCustom || undefined,
      customisationSurcharge: trimmedCustom ? CUSTOMISATION_SURCHARGE_AED : undefined,
      notes,
    })

    showAddedToBagToast(isRTL)
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
      href: getProductHref(product),
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
        <div className="mx-auto min-w-0 max-w-[1280px] px-6 lg:px-10">
          <nav
            aria-label="Breadcrumb"
            className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 font-montserrat text-[10px] uppercase tracking-[0.12em] sm:text-xs"
          >
            <div className="flex shrink-0 items-center gap-2 leading-none text-brand-darkRed/60">
              <LocaleLink
                href="/"
                className="hover:text-brand-dustyBlue transition-colors"
                data-cursor-hover
              >
                Home
              </LocaleLink>
              <span className="select-none text-[11px] font-light text-brand-darkRed/30 sm:text-xs" aria-hidden>
                /
              </span>
              <LocaleLink
                href="/shop"
                className="hover:text-brand-dustyBlue transition-colors"
                data-cursor-hover
              >
                Shop
              </LocaleLink>
              <span className="select-none text-[11px] font-light text-brand-darkRed/30 sm:text-xs" aria-hidden>
                /
              </span>
            </div>
            <span
              className="min-w-0 flex-1 truncate leading-snug text-brand-darkRed sm:flex-none sm:leading-normal sm:whitespace-normal sm:overflow-visible sm:text-clip"
              title={product.name}
            >
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-10 lg:px-10 lg:py-12">
        <div className="isolate grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-0 w-full min-w-0 overflow-hidden lg:max-w-[42rem]"
          >
            <div className="grid gap-3 lg:grid-cols-[4.75rem_minmax(0,1fr)] lg:items-start">
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
                  {product.images.map((image, index) => (
                    <SwiperSlide key={index} className="!h-auto">
                      <button
                        type="button"
                        className="group relative block aspect-[3/4] w-full overflow-hidden border border-brand-stone/25 bg-[#f5f5f5] p-0 text-left outline-none ring-brand-darkRed focus-visible:ring-2"
                        onClick={() => mainSwiperRef.current?.slideTo(index)}
                        aria-label={`Show image ${index + 1}`}
                        data-cursor-hover
                      >
                        {isVideoFile(image) ? (
                          <video
                            src={image}
                            muted
                            playsInline
                            preload="metadata"
                            className="h-full w-full object-cover transition-opacity group-hover:opacity-80"
                          />
                        ) : isHeicFile(image) ? (
                          <img
                            src={image}
                            alt=""
                            className="h-full w-full object-cover transition-opacity group-hover:opacity-80"
                            loading="lazy"
                          />
                        ) : (
                          <Image
                            src={image}
                            alt=""
                            fill
                            sizes="76px"
                            className="object-cover transition-opacity group-hover:opacity-80"
                          />
                        )}
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Main Image */}
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
                    {product.images.map((image, index) => (
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
                              ? `${product.name} — video ${index + 1}`
                              : `${product.name} — open image ${index + 1} in lightbox`
                          }
                        >
                          {isVideoFile(image) ? (
                            <video
                              src={image}
                              controls
                              playsInline
                              preload="metadata"
                              className="h-full w-full object-cover"
                            />
                          ) : isHeicFile(image) ? (
                            <img
                              src={image}
                              alt={`${product.name} — ${index === 0 ? 'campaign' : index === 1 ? 'close-up' : `product ${index - 1}`}`}
                              className="h-full w-full object-cover"
                              loading={index === 0 ? 'eager' : 'lazy'}
                            />
                          ) : (
                            <Image
                              src={image}
                              alt={`${product.name} — ${index === 0 ? 'campaign' : index === 1 ? 'close-up' : `product ${index - 1}`}`}
                              fill
                              sizes="(max-width: 768px) 100vw, 40vw"
                              className="object-cover"
                              priority={index === 0}
                            />
                          )}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Thumbnails — tap to jump main gallery */}
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
                    {product.images.map((image, index) => (
                      <SwiperSlide key={index} className="!h-auto">
                        <button
                          type="button"
                          className="group relative block aspect-[3/4] w-full overflow-hidden border border-brand-stone/25 bg-[#f5f5f5] p-0 text-left outline-none ring-brand-darkRed focus-visible:ring-2"
                          onClick={() => mainSwiperRef.current?.slideTo(index)}
                          aria-label={`Show image ${index + 1}`}
                          data-cursor-hover
                        >
                          {isVideoFile(image) ? (
                            <video
                              src={image}
                              muted
                              playsInline
                              preload="metadata"
                              className="h-full w-full object-cover transition-opacity group-hover:opacity-80"
                            />
                          ) : isHeicFile(image) ? (
                            <img
                              src={image}
                              alt=""
                              className="h-full w-full object-cover transition-opacity group-hover:opacity-80"
                              loading="lazy"
                            />
                          ) : (
                            <Image
                              src={image}
                              alt=""
                              fill
                              sizes="120px"
                              className="object-cover transition-opacity group-hover:opacity-80"
                            />
                          )}
                        </button>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`pdp-info relative z-[1] min-w-0 bg-white p-4 lg:sticky lg:top-28 lg:self-start lg:p-5 ${isRTL ? 'text-right' : ''}`}
          >
            {/* Category */}
            <span className="mb-1.5 block font-montserrat text-[11px] uppercase tracking-[0.24em] text-brand-dustyBlue">
              {product.category}
            </span>

            {/* Title */}
            <h1 data-document-h1="true" className="mb-2.5 font-rozha text-[1.75rem] md:text-[1.95rem] lg:text-[2.05rem] text-brand-darkRed leading-[1.15]">
              {product.name}
            </h1>

            {/* Price */}
            <div className="mb-4 space-y-1">
              <p className="font-montserrat text-lg text-brand-darkRed tracking-wide">
                {(displayUnitAed * quantity).toLocaleString()} AED
                {quantity > 1 && (
                  <span className="ml-2 font-montserrat text-[11px] font-normal text-brand-darkRed/65">
                    ({quantity} × {displayUnitAed.toLocaleString()} AED)
                  </span>
                )}
              </p>
              {personalisationSurcharge > 0 && (
                <p className="font-montserrat text-[11px] text-brand-darkRed/65 tracking-wide">
                  Includes {CUSTOMISATION_SURCHARGE_AED.toLocaleString()} AED personalisation per piece
                </p>
              )}
            </div>
            {/* Color Selection */}
            <div className="mb-5 border-b border-brand-stone/20 pb-5">
              <div className={`mb-3 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-darkRed">
                  Color
                </span>
                {selectedColor && (
                  <span className="font-montserrat text-[11px] text-brand-darkRed/65 tracking-wide">
                    {selectedColor}
                  </span>
                )}
              </div>
              <p className={`mb-2.5 font-montserrat text-[11px] leading-relaxed text-brand-darkRed/65 ${isRTL ? 'text-right' : ''}`}>
                {isRTL
                  ? 'الألوان المتاحة لهذا الطراز — اختاري لونًا قبل الإضافة للسلة.'
                  : 'Available colourways for this piece — tap a swatch to select before adding to bag.'}
              </p>
              <div className={`flex flex-wrap gap-2.5 ${isRTL ? 'justify-end' : ''}`}>
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(color.name)}
                    className={`h-9 w-9 rounded-full border-2 transition-all ${
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
            <div className="mb-5 border-b border-brand-stone/20 pb-5">
              <div className={`mb-3 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-darkRed">
                  Size
                </span>
                <button
                  type="button"
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="flex items-center gap-1.5 font-montserrat text-[11px] font-semibold text-brand-darkRed hover:text-brand-dustyBlue tracking-wide underline transition-colors"
                  data-cursor-hover
                >
                  <FiMaximize2 className="w-3 h-3" />
                  Size Guide
                </button>
              </div>
              <p className={`mb-2.5 font-montserrat text-[11px] leading-relaxed text-brand-darkRed/65 ${isRTL ? 'text-right' : ''}`}>
                {isRTL
                  ? 'جدول المقاسات أدناه موحّد لقصة A لكل الأنماط — اختاري المقاس ثم راجعي الجدول.'
                  : 'Same A-cut chart applies across all styles below — choose your size, then confirm against the table.'}
              </p>
              <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                {sizeOptions.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[52px] px-3 py-2.5 font-montserrat text-[11px] uppercase tracking-[0.08em] border transition-all ${
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
              <div className="mt-3 border border-brand-stone/25 bg-white px-3.5 py-2.5">
                <p className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-darkRed">
                  Please note: this is a pre-order size.
                </p>
                <p className="mt-1 font-montserrat text-[11px] tracking-wide text-brand-darkRed/75">
                  Estimated shipment date: {estimatedShipDate}
                </p>
              </div>
            </div>

            {/* Personalisation */}
            <div className="mb-5 border-b border-brand-stone/20 pb-5">
              <span className="mb-2.5 block font-montserrat text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-darkRed">
                Personalisation
              </span>
              <p className={`mb-2.5 font-montserrat text-[11px] leading-relaxed text-brand-darkRed/65 ${isRTL ? 'text-right' : ''}`}>
                {isRTL
                  ? `إضافة نص تفصيلي مقابل ${CUSTOMISATION_SURCHARGE_AED} درهم لكل قطعة.`
                  : `Add custom text or embroidery for ${CUSTOMISATION_SURCHARGE_AED} AED per piece.`}
              </p>
              <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                <button
                  type="button"
                  onClick={() => {
                    setCustomisationActive(false)
                    setCustomisationMessage('')
                  }}
                    className={`min-w-[94px] px-3 py-2.5 font-montserrat text-[11px] uppercase tracking-[0.08em] border transition-all ${
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
                    className={`min-w-[94px] px-3 py-2.5 font-montserrat text-[11px] uppercase tracking-[0.08em] border transition-all ${
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
                    placeholder={isRTL ? 'النص (٣٥ حرفاً كحد أقصى)' : 'Your message (max 35 characters)'}
                    className="w-full px-3 py-2.5 border border-brand-stone/50 font-montserrat text-[11px] tracking-wide focus:border-brand-darkRed transition-colors"
                  />
                  <p className={`font-montserrat text-[11px] text-brand-darkRed/55 ${isRTL ? 'text-right' : ''}`}>
                    {customisationMessage.length}/{CUSTOMISATION_MAX_CHARS}
                  </p>
                  <p className={`font-montserrat text-[11px] text-brand-darkRed/80 leading-relaxed border border-brand-stone/20 bg-white p-2.5 ${isRTL ? 'text-right' : ''}`}>
                    {isRTL
                      ? 'القطع المخصصة تُنفَّذ حسب طلبك ولا يمكن إرجاعها أو استبدالها.'
                      : 'Customised pieces are made to your request and cannot be returned or exchanged.'}
                  </p>
                </div>
              )}
            </div>

            {/* Notes */}
            <div className="mb-5 border-b border-brand-stone/20 pb-5">
              <label className="mb-2.5 block font-montserrat text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-darkRed">
                Special Notes (Optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value.slice(0, SPECIAL_NOTES_MAX_CHARS))}
                placeholder="Any special requests or alterations..."
                rows={3}
                maxLength={SPECIAL_NOTES_MAX_CHARS}
                className="w-full px-3 py-2.5 border border-brand-stone/50 font-montserrat text-[11px] tracking-wide focus:border-brand-darkRed transition-colors resize-none"
              />
              <p className={`mt-2 font-montserrat text-[11px] text-brand-darkRed/55 ${isRTL ? 'text-right' : ''}`}>
                {notes.length}/{SPECIAL_NOTES_MAX_CHARS}
              </p>
            </div>

            {/* Quantity & Add to Cart */}
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
            <div className="mb-5 flex gap-3">
              {/* Quantity */}
              <div className="flex items-center border border-brand-stone/50">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2.5 text-brand-darkRed hover:bg-brand-dustyBlue/10 transition-colors"
                  data-cursor-hover
                >
                  <FiMinus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center font-montserrat text-[11px]">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2.5 text-brand-darkRed hover:bg-brand-dustyBlue/10 transition-colors"
                  data-cursor-hover
                >
                  <FiPlus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 px-6 py-3 bg-brand-darkRed text-white font-montserrat text-[11px] font-semibold uppercase tracking-[0.16em] hover:bg-brand-dustyBlue transition-colors"
                data-cursor-hover
              >
                Add to Bag
              </button>

              {/* Wishlist — persisted; view under /wishlist */}
              <button
                type="button"
                onClick={toggleWishlist}
                className={`px-3 border transition-colors ${
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

            {/* Short Description */}
            <p className="mb-2.5 whitespace-pre-line font-montserrat text-[11px] text-brand-darkRed/75 tracking-wide leading-[1.65]">
              {product.description}
            </p>
            {product.id !== 'bs-002' && (
              <p className="mb-4 font-montserrat text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-dustyBlue">
                {isRTL
                  ? 'صُنع حسب الطلب — متاحة ضمن الفصل الحالي (التوفر يُؤكَّد عند الطلب).'
                  : 'Made to order — available within this chapter (availability confirmed when you order).'}
              </p>
            )}

            {/* Accordion Details */}
            <div className="border-t border-brand-stone/30">
              {/* Description */}
              <div className="border-b border-brand-stone/30">
                <button
                  onClick={() => toggleDropdown('description')}
                  className="w-full flex items-center justify-between py-4"
                  data-cursor-hover
                >
                  <span className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-darkRed">
                    Product Details
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
                      <div className="space-y-2 pb-5">
                        {productDetails.map((item) => (
                          <p key={item} className={`font-montserrat text-[11px] text-brand-darkRed/75 tracking-wide leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                            • {item}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Size & Measurements */}
              <div className="border-b border-brand-stone/30">
                <button
                  onClick={() => toggleDropdown('size')}
                  className="w-full flex items-center justify-between py-4"
                  data-cursor-hover
                >
                  <span className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-darkRed">
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
                      <div className="space-y-2 pb-5">
                        {sizeAndMeasurementDetails.map((item) => (
                          <p key={item} className={`font-montserrat text-[11px] text-brand-darkRed/75 tracking-wide leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                            • {item}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Shipping & Returns */}
              <div>
                <button
                  onClick={() => toggleDropdown('shipping')}
                  className="w-full flex items-center justify-between py-4"
                  data-cursor-hover
                >
                  <span className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-darkRed">
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
                      <div className="font-montserrat text-[11px] text-brand-darkRed/75 tracking-wide leading-relaxed pb-5 space-y-2">
                        <p>• Free shipping is available within the UAE only.</p>
                        <p>• In-stock styles dispatch within 1-3 business days for orders placed before 3:00 PM UAE time.</p>
                        <p>• Pre-order styles dispatch on the date shown on the product page.</p>
                        <p>• Mixed orders (in-stock + pre-order) dispatch together on the stated pre-order date.</p>
                        <p>• All sales are final. We do not offer refunds, some exclusions apply.</p>
                        <p>• Exchanges for in-stock items are accepted within 14 days for unworn, undamaged pieces with tags attached.</p>
                        <p>• Discounted items cannot be returned or exchanged.</p>
                        <p>• Pre-order items cannot be returned or exchanged.</p>
                        <p>• Personalised items cannot be returned or exchanged.</p>
                        <p>
                          • For more information, please review our{' '}
                          <LocaleLink href="/terms" className="underline hover:text-brand-dustyBlue" data-cursor-hover>
                            Refunds and Exchanges policy
                          </LocaleLink>
                          .
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {relatedStyles.length > 0 && (
              <section className="relative z-20 mt-12">
                <h3 className="mb-5 font-montserrat text-xs uppercase tracking-[0.22em] text-brand-darkRed">
                  {isRTL ? 'يناسبها أيضاً' : 'Pairs well with'}
                </h3>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {relatedStyles.map((item) => (
                    <LocaleLink
                      key={item.id}
                      href={getProductHref(item)}
                      className="group relative z-20 block pointer-events-auto"
                      data-cursor-hover
                    >
                      <div className="relative z-20 aspect-[3/4] overflow-hidden bg-brand-stone/10">
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          fill
                          sizes="(max-width: 768px) 50vw, 22vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </div>
                      <div className="mt-3 flex items-center justify-between gap-3">
                        <p className="font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-darkRed">
                          {item.name}
                        </p>
                        <p className="font-montserrat text-xs tracking-wide text-brand-darkRed/80">
                          {item.price.toLocaleString()} AED
                        </p>
                      </div>
                    </LocaleLink>
                  ))}
                </div>
              </section>
            )}
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
