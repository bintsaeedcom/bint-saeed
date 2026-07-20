'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, Pagination, FreeMode } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { FiPlus, FiMinus, FiHeart, FiMaximize2, FiGlobe, FiAward } from 'react-icons/fi'
import SizeGuideModal from '@/components/SizeGuideModal'
import StickyAddToCart from '@/components/StickyAddToCart'
import FavoriteHeartButton from '@/components/FavoriteHeartButton'
import TamaraProductWidget from '@/components/TamaraProductWidget'
import TabbyPromoSnippet from '@/components/TabbyPromoSnippet'
import {
  PDP_COLOUR_SWATCH,
  pdpColourSwatchState,
} from '@/lib/ui/pdpColourSwatch'
import { trackEvent } from '@/lib/analytics/tracking'
import { clarityUnmaskPriceProps } from '@/lib/analytics/clarityUnmask'
import toast from 'react-hot-toast'
import { products as staticProducts, type Product } from '@/data/products'
import { getProductPdpContent } from '@/data/productPdpContent'
import { getLocalizedProductCatalogFields } from '@/lib/products/productCatalogCopyI18n'
import { getLocalizedProductDisplayName } from '@/lib/products/productDisplayNameI18n'
import { getProductImageAlt, getProductImageTitle } from '@/lib/products/imageAlt'
import { localizedColorName } from '@/lib/products/imageAltI18n'
import { getProductColorOptions, getProductImagesForColor } from '@/lib/products/productColorAvailability'
import {
  getKnightsbridgePairedSlug,
  getProductHrefWithColor,
  isKnightsbridgePairingSlug,
  normalizeKnightsbridgeCatalogColor,
} from '@/lib/products/knightsbridgePairing'
import {
  getDressAbayaPairingRelatedSlugs,
  isDressAbayaPairingSlug,
  resolveDressAbayaPairedColor,
} from '@/lib/products/dressAbayaPairing'
import { buildShopProductJsonLd } from '@/lib/products/productJsonLd'
import { getProductFaq } from '@/lib/products/productSchemaMeta'
import { useCartStore } from '@/store/cartStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { productPageUi } from '@/lib/i18n/productPageUi'
import { getPdpGalleryAriaCopy } from '@/lib/i18n/pdpGalleryAriaI18n'
import { getProductHref, getProductSlug, resolveProductIdentifier } from '@/lib/products/links'
import {
  getPdpSizeOptions,
  CUSTOMISATION_MAX_CHARS,
  productOffersPersonalisation,
  productShowsSizeSelector,
  productIsOneSizeOnly,
} from '@/lib/shopProductOptions'
import { showAddedToBagToast } from '@/lib/cart/addedToBagToast'
import { getStripeShipToCopy } from '@/lib/shipping/stripeShipToCopy'
import { resolveProductSku } from '@/lib/products/sku'
import {
  PDP_ACCORDION_SUBTITLE,
  PDP_BULLET_ITEM,
  PDP_BULLET_LIST,
  PDP_COPY_INTRO,
  PDP_COPY_RELAXED,
  formatPdpProductCodeLine,
  PDP_FAQ_QUESTION,
  PDP_RELATED_TITLE,
} from '@/lib/pdp/pdpTypography'
import { PdpShippingReturnsBullets } from '@/lib/pdp/PdpShippingReturnsBullets'
import PdpIntroParagraph from '@/components/PdpIntroParagraph'
import PdpGalleryImage from '@/components/pdp/PdpGalleryImage'
import PdpLightbox from '@/components/pdp/PdpLightbox'
import PdpAccordion, {
  scrollPdpAccordionSectionIntoView,
  type PdpAccordionSectionConfig,
} from '@/components/pdp/PdpAccordion'
import {
  CTA_BUTTON_RADIUS,
  PDP_FILLED_PLUM,
  pdpCtaPrimary,
  pdpSizeButtonBase,
} from '@/lib/ui/ctaClasses'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/pagination'

const PDP_OUTLINED_PLUM = 'bg-white text-brand-darkRed border-brand-darkRed'
const PDP_CONTROL_BUTTON_BASE = pdpSizeButtonBase
const PDP_PRIMARY_CTA = pdpCtaPrimary

const MANUAL_PAIRINGS: Record<string, string[]> = {
  'knightsbridge-abaya-jacket': ['knightsbridge-dress'],
  'knightsbridge-dress': ['knightsbridge-abaya-jacket'],
}

function resolveRelatedStyles(product: Product): Product[] {
  const pairedSlug = getKnightsbridgePairedSlug(product.slug)
  if (pairedSlug && isKnightsbridgePairingSlug(product.slug)) {
    return staticProducts.filter((p) => p.slug === pairedSlug)
  }

  const dressAbayaSlugs = getDressAbayaPairingRelatedSlugs(product.slug)
  if (dressAbayaSlugs) {
    const bySlug = new Map(staticProducts.map((p) => [getProductSlug(p), p]))
    return dressAbayaSlugs
      .map((slug) => bySlug.get(slug))
      .filter((p): p is Product => Boolean(p))
  }

  const manualPairSlugs = MANUAL_PAIRINGS[product.slug]
  if (manualPairSlugs) {
    return staticProducts.filter((p) => manualPairSlugs.includes(p.slug))
  }

  return staticProducts
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 2)
}

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

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const mainSwiperRef = useRef<SwiperType | null>(null)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [customisationActive, setCustomisationActive] = useState(false)
  const [customisationMessage, setCustomisationMessage] = useState('')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false)
  const addItem = useCartStore((state) => state.addItem)
  const { isRTL, language, t } = useLanguage()
  const ui = productPageUi(language)
  const galleryAria = getPdpGalleryAriaCopy(language)
  const { formatPrice, formatAmount, convertPrice, currency } = useCurrency()

  const relatedStyles = useMemo(
    () => (product ? resolveRelatedStyles(product) : []),
    [product],
  )
  const knightsbridgePairColor = useMemo(
    () => normalizeKnightsbridgeCatalogColor(selectedColor || product?.colors[0]?.name),
    [selectedColor, product?.colors],
  )
  const catalogFields = useMemo(
    () => (product ? getLocalizedProductCatalogFields(product, language) : null),
    [product, language],
  )
  const displayName = useMemo(
    () => (product ? getLocalizedProductDisplayName(product, language) : ''),
    [product, language],
  )
  const pdpContent = useMemo(
    () =>
      product
        ? getProductPdpContent(product, { color: selectedColor, locale: language })
        : {
            productDetails: [],
            fitAndSizeDetails: [],
          },
    [product, selectedColor, language],
  )
  const {
    introParagraphs,
    introParagraphParts,
    productDetails,
    productDetailGroups,
    compositionGroups,
    originDetails,
    compositionDetails,
    careDetails,
    brandStory,
    fitAndSizeDetails,
    stylePairingNote,
    faq: pdpFaq,
  } = pdpContent
  const hasManualPairing = Boolean(
    product &&
      (isKnightsbridgePairingSlug(product.slug) || isDressAbayaPairingSlug(product.slug)),
  )
  const faqItems = useMemo(
    () => (product ? getProductFaq(product, pdpFaq, language) : []),
    [product, pdpFaq, language],
  )
  const productDetailsBullets = useMemo(() => productDetails, [productDetails])
  const productReferenceLine = useMemo(() => {
    if (!product) return null
    const sku = resolveProductSku(product, selectedColor)
    if (!sku) return null
    return formatPdpProductCodeLine(sku, isRTL)
  }, [product, selectedColor, isRTL])
  const estimatedShipDate = useMemo(() => {
    const d = new Date()
    d.setDate(d.getDate() + 14)
    return new Intl.DateTimeFormat(language === 'ar' ? 'ar-AE' : 'en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(d)
  }, [language])
  /** Thumbs strip is hidden on small screens; connecting Thumbs module with swiper=null breaks layout on iOS. */
  const thumbConnected = Boolean(thumbsSwiper && !thumbsSwiper.destroyed)
  const mainGalleryModules = useMemo(
    () => (thumbConnected ? [Navigation, Thumbs, Pagination] : [Navigation, Pagination]),
    [thumbConnected],
  )

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-pageCanvas pt-4 sm:pt-6 md:pt-8">
        <div className="text-center">
          <h1 data-document-h1="true" className="font-rozha text-3xl text-brand-darkRed mb-4">{ui.productNotFound}</h1>
          <LocaleLink
            href="/shop"
            className="font-montserrat text-sm uppercase tracking-[0.15em] text-brand-darkRed hover:text-brand-dustyBlue"
            data-cursor-hover
          >
            {ui.returnToShop}
          </LocaleLink>
        </div>
      </div>
    )
  }

  const sizeOptions = getPdpSizeOptions(product.category, product.sizes, getProductSlug(product))
  const showSizeSelector = productShowsSizeSelector(product.category, product.sizes, getProductSlug(product))
  const showPersonalisation = productOffersPersonalisation(product.category)
  const colorOptions = useMemo(() => getProductColorOptions(product), [product])

  useEffect(() => {
    if (productIsOneSizeOnly(product)) {
      setSelectedSize('One Size')
      return
    }
    if (!sizeOptions.length) return
    setSelectedSize((current) => (current && sizeOptions.includes(current) ? current : sizeOptions[0] ?? ''))
  }, [sizeOptions, product.id, product.slug, product.sizes])

  useEffect(() => {
    const availableColors = colorOptions.map((color) => color.name)
    if (!availableColors.length) return

    const fromUrl =
      typeof window !== 'undefined'
        ? new URLSearchParams(window.location.search).get('color')
        : null
    if (fromUrl && availableColors.includes(fromUrl)) {
      setSelectedColor(fromUrl)
      return
    }

    setSelectedColor((current) =>
      current && availableColors.includes(current) ? current : (availableColors[0] ?? ''),
    )
  }, [colorOptions, product.id])

  const handleColorSelect = (colorName: string) => {
    setSelectedColor(colorName)
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href)
      url.searchParams.set('color', colorName)
      window.history.replaceState({}, '', url.toString())
    }
  }

  useEffect(() => {
    if (!showPersonalisation) {
      setCustomisationActive(false)
      setCustomisationMessage('')
    }
  }, [product.id, showPersonalisation])

  const activeImages = useMemo(
    () => getProductImagesForColor(product, selectedColor),
    [product, selectedColor],
  )
  const activeImageAlt = (image: string, index: number) =>
    getProductImageAlt(product, image, { color: selectedColor, index, locale: language })
  const activeImageTitle = (image: string) =>
    getProductImageTitle(image, { locale: language })
  const isVideoFile = (src: string) => /\.(mp4|mov|webm|ogg)$/i.test(src)
  const isHeicFile = (src: string) => /\.(heic|heif)$/i.test(src)
  const lightboxImages = useMemo(
    () =>
      activeImages.flatMap((src, index) =>
        isVideoFile(src)
          ? []
          : [{ src, alt: activeImageAlt(src, index), title: activeImageTitle(src) }],
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- rebuild when gallery inputs change
    [activeImages, selectedColor, language, product],
  )
  const openLightboxAt = (galleryIndex: number) => {
    const src = activeImages[galleryIndex]
    if (!src || isVideoFile(src)) return
    const next = lightboxImages.findIndex((item) => item.src === src)
    setLightboxIndex(next >= 0 ? next : 0)
    setIsLightboxOpen(true)
  }

  useEffect(() => {
    if (!lightboxImages.length) return
    setLightboxIndex((current) => Math.min(current, lightboxImages.length - 1))
  }, [lightboxImages])

  useEffect(() => {
    mainSwiperRef.current?.slideTo(0, 0)
    setLightboxIndex(0)
    setThumbsSwiper(null)
  }, [selectedColor])

  useEffect(() => {
    setOpenDropdown(null)
  }, [product?.id, selectedColor])

  useEffect(() => {
    if (!product) return
    trackEvent('view_item', {
      item_id: product.id,
      item_name: displayName,
      item_category: product.category,
      currency: currency.code,
      value: convertPrice(product.price, product.id),
    })
  }, [product, product?.id, currency.code, convertPrice])

  const displayUnitPrice = convertPrice(product?.price ?? 0, product?.id)
  const sizeAndFitDetails =
    fitAndSizeDetails.length > 0
      ? fitAndSizeDetails
      : product.measurements?.trim()
        ? [product.measurements]
        : []
  const productJsonLd = useMemo(
    () =>
      buildShopProductJsonLd({
        product,
        activeImages,
        selectedColor,
        productPagePath: getProductHref(product),
        locale: language,
      }),
    [product, activeImages, selectedColor, language],
  )

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error(t.product.selectSize)
      return
    }
    if (!selectedColor) {
      toast.error(t.product.selectColor)
      return
    }
    if (showPersonalisation && customisationActive && !customisationMessage.trim()) {
      toast.error(ui.personalisation.emptyError)
      return
    }

    const trimmedCustom =
      showPersonalisation && customisationActive ? customisationMessage.trim() : ''

    addItem({
      id: product.id,
      productUrl: getProductHref(product),
      name: displayName,
      price: product.price,
      image: activeImages[0] ?? product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity,
      customisationMessage: trimmedCustom || undefined,
      sku: resolveProductSku(product, selectedColor),
    })

    trackEvent('add_to_cart', {
      item_id: product.id,
      item_name: displayName,
      item_category: product.category,
      item_variant: `${selectedSize}-${selectedColor}`,
      quantity,
    })
    showAddedToBagToast(isRTL)
  }

  const openShippingInfo = () => {
    setOpenDropdown('shipping')
    window.setTimeout(() => scrollPdpAccordionSectionIntoView('shipping'), 280)
  }

  const handleAccordionOpen = (key: string) => {
    if (key === 'size') trackEvent('open_size_guide', { page: 'product', item_id: product.id })
    if (key === 'description') trackEvent('open_personalisation_info', { page: 'product', item_id: product.id })
  }

  const pdpAccordionSections = useMemo((): PdpAccordionSectionConfig[] => {
    const sections: PdpAccordionSectionConfig[] = []

    if (introParagraphParts && introParagraphParts.length > 1) {
      sections.push({
        id: 'intro',
        title: ui.readMore,
        titleTag: 'h2',
        children: (
          <div className="space-y-3">
            {introParagraphParts.slice(1).map((paragraph, idx) => (
              <PdpIntroParagraph
                key={`intro-rich-${idx}`}
                parts={paragraph}
                className={`${PDP_COPY_INTRO} pdp-copy--intro`}
              />
            ))}
          </div>
        ),
      })
    } else if (introParagraphs && introParagraphs.length > 1) {
      sections.push({
        id: 'intro',
        title: ui.readMore,
        titleTag: 'h2',
        children: (
          <div className="space-y-3">
            {introParagraphs.slice(1).map((paragraph, idx) => (
              <p key={`intro-${idx}`} className={`${PDP_COPY_INTRO} pdp-copy--intro`}>
                {paragraph}
              </p>
            ))}
          </div>
        ),
      })
    }

    sections.push(
      {
        id: 'description',
        title: ui.productDetails,
        titleTag: sections.length === 0 ? 'h2' : 'h3',
        children: (
          <>
            {productDetailGroups && productDetailGroups.length > 0 ? (
              <div className="space-y-4">
                {productDetailGroups.map((group) => (
                  <div key={group.title} className="space-y-2">
                    <p className={`${PDP_ACCORDION_SUBTITLE} text-start`}>{group.title}</p>
                    <ul className={PDP_BULLET_LIST}>
                      {group.items.map((item, idx) => (
                        <li key={`pdg-${group.title}-${idx}`} className={PDP_BULLET_ITEM}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {productDetailsBullets.length > 0 && (
                  <ul className={PDP_BULLET_LIST}>
                    {productDetailsBullets.map((item, idx) => (
                      <li key={`pd-${idx}`} className={PDP_BULLET_ITEM}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <ul className={PDP_BULLET_LIST}>
                {productDetailsBullets.map((item, idx) => (
                  <li key={`pd-${idx}`} className={PDP_BULLET_ITEM}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {compositionGroups && compositionGroups.length > 0 ? (
              <div className="space-y-4 pt-3">
                <p className={`${PDP_ACCORDION_SUBTITLE} text-start`}>{ui.composition}</p>
                {compositionGroups.map((group) => (
                  <div key={group.title} className="space-y-2">
                    <p className={`font-montserrat text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-darkRed/80 text-start`}>
                      {group.title}
                    </p>
                    <ul className={PDP_BULLET_LIST}>
                      {group.items.map((item, idx) => (
                        <li key={`compg-${group.title}-${idx}`} className={PDP_BULLET_ITEM}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              compositionDetails &&
              compositionDetails.length > 0 && (
                <div className="space-y-2 pt-3">
                  <p className={`${PDP_ACCORDION_SUBTITLE} text-start`}>{ui.composition}</p>
                  <ul className={PDP_BULLET_LIST}>
                    {compositionDetails.map((item, idx) => (
                      <li key={`comp-${idx}`} className={PDP_BULLET_ITEM}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
            {careDetails && careDetails.length > 0 && (
              <div className="space-y-2 pt-3">
                <p className={`${PDP_ACCORDION_SUBTITLE} text-start`}>{ui.care}</p>
                <ul className={PDP_BULLET_LIST}>
                  {careDetails.map((item, idx) => (
                    <li key={`care-${idx}`} className={PDP_BULLET_ITEM}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {originDetails && originDetails.length > 0 && (
              <div className="space-y-2 pt-3">
                <p className={`${PDP_ACCORDION_SUBTITLE} text-start`}>{t.product.origin}</p>
                <ul className={PDP_BULLET_LIST}>
                  {originDetails.map((item, idx) => (
                    <li key={`origin-${idx}`} className={PDP_BULLET_ITEM}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {productReferenceLine && (
              <p className={`pt-3 ${PDP_COPY_RELAXED} text-start`}>
                {productReferenceLine}
              </p>
            )}
            {brandStory && (
              <p className={`pt-3 ${PDP_COPY_INTRO} pdp-copy--intro text-start`}>
                {brandStory}
              </p>
            )}
          </>
        ),
      },
      {
        id: 'size',
        title: t.product.sizeMeasurements,
        children: (
          <ul className={PDP_BULLET_LIST}>
            {sizeAndFitDetails.map((item, idx) => (
              <li key={`sz-${idx}`} className={PDP_BULLET_ITEM}>
                {item}
              </li>
            ))}
          </ul>
        ),
      },
      {
        id: 'shipping',
        title: t.product.shippingReturns,
        bordered: faqItems.length > 0,
        children: <PdpShippingReturnsBullets isRTL={isRTL} />,
      },
    )

    if (faqItems.length > 0) {
      sections.push({
        id: 'faq',
        title: ui.faq,
        bordered: false,
        panelClassName: 'space-y-4 pb-5',
        children: faqItems.map((item, idx) => (
          <div key={`faq-${idx}`} className="text-start">
            <p className={PDP_FAQ_QUESTION}>{item.question}</p>
            <p className={`mt-1 ${PDP_COPY_RELAXED}`}>{item.answer}</p>
          </div>
        )),
      })
    }

    return sections
  }, [
    brandStory,
    careDetails,
    compositionDetails,
    compositionGroups,
    faqItems,
    introParagraphParts,
    introParagraphs,
    isRTL,
    originDetails,
    productDetailGroups,
    productDetailsBullets,
    productReferenceLine,
    sizeAndFitDetails,
    t.product.shippingReturns,
    t.product.sizeMeasurements,
    ui,
  ])

  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-pageCanvas pb-[calc(var(--mobile-bottom-chrome,0px)+1rem)] lg:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <AppPageWayfinding
        layout="bar"
        rtl={isRTL}
        segments={[
          { label: ui.home, href: '/home' },
          { label: ui.shop, href: '/shop' },
          { label: displayName },
        ]}
        backLink={{
          href: '/shop',
          label: ui.backToShop,
        }}
      />

      <div className="mx-auto w-full max-w-[1400px] px-4 py-4 sm:px-8 sm:py-8 lg:py-12">
        <div className="isolate grid min-h-0 min-w-0 grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-0 w-full min-h-0 min-w-0 overflow-x-clip lg:max-w-[42rem]"
          >
            <FavoriteHeartButton
              id={product.id}
              name={displayName}
              price={product.price}
              image={activeImages[0] ?? product.images[0] ?? ''}
              category={product.category}
              href={getProductHref(product)}
              className={`absolute top-2.5 z-30 h-9 w-9 rounded-full border border-stone-200/90 bg-white/90 text-brand-darkRed shadow-sm backdrop-blur-sm transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue sm:top-3 sm:h-10 sm:w-10 end-2.5 sm:end-3`}
              iconClassName="h-3.5 w-3.5 sm:h-4 sm:w-4"
            />
            <div className="grid gap-3 lg:grid-cols-[4.75rem_minmax(0,1fr)] lg:items-start">
              <div className="hidden lg:block">
                <Swiper
                  key={`thumbs-vertical-${selectedColor}`}
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
                  className="product-gallery-thumbs !overflow-visible"
                >
                  {activeImages.map((image, index) => (
                    <SwiperSlide key={image} className="!h-auto">
                      <button
                        type="button"
                        className="group relative block aspect-[3/4] w-full overflow-hidden border border-brand-stone/25 bg-[#f5f5f5] p-0 text-left outline-none ring-brand-darkRed focus-visible:ring-2"
                        onClick={() => {
                          mainSwiperRef.current?.slideTo(index)
                          trackEvent('gallery_interaction', {
                            interaction_type: 'thumbnail_click',
                            item_id: product.id,
                            image_index: index,
                          })
                        }}
                        aria-label={galleryAria.showImage(index + 1)}
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
                            alt={activeImageAlt(image, index)}
                            className="h-full w-full img-zoom object-cover object-top transition-opacity group-hover:opacity-80"
                            loading="lazy"
                          />
                        ) : (
                          <PdpGalleryImage
                            src={image}
                            alt={activeImageAlt(image, index)}
                            title={activeImageTitle(image)}
                            className="img-zoom object-cover object-top transition-opacity group-hover:opacity-80"
                          />
                        )}
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Main Image */}
              <div className="space-y-3">
                <div className="relative aspect-[3/4] w-full min-h-0 overflow-hidden border border-brand-stone/20 bg-[#f5f5f5] [&_.product-gallery-swiper]:absolute [&_.product-gallery-swiper]:inset-0 [&_.product-gallery-swiper]:h-full [&_.product-gallery-swiper]:w-full">
                  <Swiper
                    key={`main-${selectedColor}`}
                    modules={mainGalleryModules}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true, dynamicBullets: true }}
                    observer
                    observeParents
                    resizeObserver
                    preventClicks={false}
                    preventClicksPropagation={false}
                    touchStartPreventDefault={false}
                    onSwiper={(swiper) => {
                      mainSwiperRef.current = swiper
                    }}
                    onSlideChange={(swiper) =>
                      trackEvent('gallery_interaction', {
                        interaction_type: 'slide_change',
                        item_id: product.id,
                        image_index: swiper.activeIndex,
                      })
                    }
                    {...(thumbConnected ? { thumbs: { swiper: thumbsSwiper } } : {})}
                    className="h-full w-full min-h-0 product-gallery-swiper"
                  >
                    {activeImages.map((image, index) => (
                      <SwiperSlide key={image}>
                        <div
                          className={`relative h-full w-full ${isVideoFile(image) ? 'cursor-default' : 'cursor-zoom-in'}`}
                          onClick={() => openLightboxAt(index)}
                          onKeyDown={(e) => {
                            if (isVideoFile(image)) return
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              openLightboxAt(index)
                            }
                          }}
                          role="button"
                          tabIndex={isVideoFile(image) ? -1 : 0}
                          aria-label={
                            isVideoFile(image)
                              ? galleryAria.videoSlide(displayName, index + 1)
                              : galleryAria.openImageLightbox(displayName, index + 1)
                          }
                        >
                          {isVideoFile(image) ? (
                            <video
                              src={image}
                              controls
                              playsInline
                              preload="metadata"
                              className="h-full w-full img-zoom object-cover"
                            />
                          ) : isHeicFile(image) ? (
                            <img
                              src={image}
                              alt={activeImageAlt(image, index)}
                              className="h-full w-full img-zoom object-cover"
                              loading={index === 0 ? 'eager' : 'lazy'}
                            />
                          ) : (
                            <PdpGalleryImage
                              src={image}
                              alt={activeImageAlt(image, index)}
                              title={activeImageTitle(image)}
                              priority={index === 0}
                              className="img-zoom object-cover object-top"
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
                    key={`thumbs-horizontal-${selectedColor}`}
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
                    {activeImages.map((image, index) => (
                      <SwiperSlide key={image} className="!h-auto">
                        <button
                          type="button"
                          className="group relative block aspect-[3/4] w-full overflow-hidden border border-brand-stone/25 bg-[#f5f5f5] p-0 text-left outline-none ring-brand-darkRed focus-visible:ring-2"
                          onClick={() => mainSwiperRef.current?.slideTo(index)}
                          aria-label={galleryAria.showImage(index + 1)}
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
                              alt={activeImageAlt(image, index)}
                              className="h-full w-full img-zoom object-cover object-top transition-opacity group-hover:opacity-80"
                              loading="lazy"
                            />
                          ) : (
                            <PdpGalleryImage
                              src={image}
                              alt={activeImageAlt(image, index)}
                              title={activeImageTitle(image)}
                              className="img-zoom object-cover object-top transition-opacity group-hover:opacity-80"
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
            className={`pdp-info relative z-[1] min-h-0 min-w-0 bg-white px-3.5 pb-3.5 pt-0 lg:sticky lg:top-28 lg:self-start lg:px-4 lg:pb-4 lg:pt-0 text-start`}
          >
            {/* Title */}
            <h1 data-document-h1="true" data-product-name="true" className="mb-1 font-rozha text-[1.75rem] md:text-[1.95rem] lg:text-[2.05rem] text-black leading-[1.15]">
              {displayName}
            </h1>

            {/* Price */}
            <div className="mb-3 space-y-0.5">
              <p
                className="font-montserrat text-lg text-brand-darkRed tracking-wide"
                {...clarityUnmaskPriceProps}
              >
                {formatAmount(displayUnitPrice * quantity)}
                {quantity > 1 && (
                  <span className="ml-2 font-montserrat text-[11px] font-normal text-brand-darkRed/65">
                    ({quantity} × {formatAmount(displayUnitPrice)})
                  </span>
                )}
              </p>
            </div>
            {/* Color Selection */}
            {colorOptions.length > 1 && (
            <div id="color-selection" className="mb-1.5 border-b border-brand-stone/20 pb-3">
              <div className={`mb-2 flex items-center justify-between `}>
                <span className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-darkRed">
                  {t.product.color}
                </span>
                {selectedColor && (
                  <span className="font-montserrat text-[11px] text-brand-darkRed/65 tracking-wide">
                    {selectedColor ? localizedColorName(selectedColor, language) : null}
                  </span>
                )}
              </div>
              <div className={`flex flex-wrap gap-2 `}>
                {colorOptions.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => handleColorSelect(color.name)}
                    className={`${PDP_COLOUR_SWATCH} ${pdpColourSwatchState(selectedColor === color.name)}`}
                    style={{ backgroundColor: color.hex }}
                    title={localizedColorName(color.name, language)}
                    aria-pressed={selectedColor === color.name}
                    aria-label={`${t.product.color} ${localizedColorName(color.name, language)}`}
                    data-cursor-hover
                  />
                ))}
              </div>
            </div>
            )}

            {/* Size Selection */}
            {showSizeSelector ? (
            <div id="size-selection" className="mb-3 border-b border-brand-stone/20 pb-3">
              <div className={`mb-2 flex items-center justify-between `}>
                <span className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-darkRed">
                  {t.product.size}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setIsSizeGuideOpen(true)
                    trackEvent('open_size_guide', { page: 'product', item_id: product.id })
                  }}
                  className="flex items-center gap-1.5 font-montserrat text-[11px] font-semibold text-brand-darkRed hover:text-brand-dustyBlue tracking-wide underline transition-colors"
                  data-cursor-hover
                >
                  <FiMaximize2 className="w-3 h-3" />
                  {t.product.sizeGuide}
                </button>
              </div>
              <div className={`flex flex-wrap gap-2 `}>
                {sizeOptions.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[52px] px-3 py-2.5 font-montserrat text-[11px] uppercase tracking-[0.08em] border transition-all ${CTA_BUTTON_RADIUS} ${
 selectedSize === size
 ? PDP_FILLED_PLUM
 : `${PDP_OUTLINED_PLUM} hover:bg-brand-darkRed/5`
 }`}
                    data-cursor-hover
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="mt-2 font-montserrat text-[11px] italic tracking-wide text-brand-darkRed/80">
                {ui.madeToOrderShips(estimatedShipDate)}
              </p>
            </div>
            ) : (
              <p id="size-selection" className="mb-3 border-b border-brand-stone/20 pb-3 font-montserrat text-[11px] italic tracking-wide text-brand-darkRed/80">
                {ui.oneSizeMadeToOrderShips(estimatedShipDate)}
              </p>
            )}

            {showPersonalisation && (
              <div id="personalisation-section" className="mb-3 border-b border-brand-stone/20 pb-3">
                <h2 className="mb-2 block font-montserrat text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-darkRed">
                  {ui.personalisation.title}
                </h2>
                <p className={`mb-2 font-montserrat text-[11px] leading-relaxed text-brand-darkRed/65 text-start`}>
                  {ui.personalisation.desc}
                </p>
                <div className={`flex flex-col gap-2 sm:flex-row sm:flex-wrap `}>
                  <button
                    type="button"
                    onClick={() => {
                      setCustomisationActive(false)
                      setCustomisationMessage('')
                    }}
                    className={`w-full sm:w-auto ${PDP_CONTROL_BUTTON_BASE} ${
 !customisationActive
 ? PDP_FILLED_PLUM
 : `${PDP_OUTLINED_PLUM} hover:bg-brand-darkRed/5`
 }`}
                    aria-pressed={!customisationActive}
                    data-cursor-hover
                  >
                    {ui.personalisation.noPersonalisation}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCustomisationActive(true)}
                    className={`w-full sm:w-auto ${PDP_CONTROL_BUTTON_BASE} ${
 customisationActive
 ? PDP_FILLED_PLUM
 : `${PDP_OUTLINED_PLUM} hover:bg-brand-darkRed/5`
 }`}
                    aria-pressed={customisationActive}
                    data-cursor-hover
                  >
                    {ui.personalisation.personalise}
                  </button>
                </div>
                {customisationActive && (
                  <div className="mt-3 space-y-2">
                    <input
                      type="text"
                      value={customisationMessage}
                      onChange={(e) => setCustomisationMessage(e.target.value.slice(0, CUSTOMISATION_MAX_CHARS))}
                      maxLength={CUSTOMISATION_MAX_CHARS}
                      placeholder={ui.personalisation.placeholder}
                      className={`w-full border border-brand-darkRed/30 bg-white px-3 py-2.5 font-montserrat text-[11px] tracking-wide text-brand-darkRed placeholder:text-brand-muted transition-colors focus:border-brand-clayRed focus:outline-none focus:ring-1 focus:ring-brand-clayRed/25 ${CTA_BUTTON_RADIUS}`}
                    />
                    <p className={`font-montserrat text-[11px] text-brand-darkRed/55 text-start`}>
                      {customisationMessage.length}/{CUSTOMISATION_MAX_CHARS}
                    </p>
                    <p className={`font-montserrat text-[11px] text-brand-darkRed/80 leading-relaxed border border-brand-stone/20 bg-white p-2.5 text-start`}>
                      {ui.personalisation.customisedNoReturn}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="mb-1 flex flex-col gap-2 sm:flex-row sm:gap-3">
              {/* Quantity */}
              <div className={`flex w-full items-center justify-center border border-brand-stone/50 sm:w-auto sm:justify-start ${CTA_BUTTON_RADIUS}`}>
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
                data-pdp-primary-atc
                className={`w-full px-6 py-3 sm:flex-1 ${PDP_PRIMARY_CTA}`}
                data-cursor-hover
              >
                {ui.addToBag}
              </button>

            </div>
            {(currency.code === 'AED' || currency.code === 'SAR') ? (
              <TamaraProductWidget
                amount={convertPrice(product.price, product.id)}
                currency={currency.code}
                className="mb-3 mt-1"
              />
            ) : null}
            {['AED', 'SAR', 'KWD'].includes(currency.code) ? (
              <TabbyPromoSnippet
                price={convertPrice(product.price, product.id)}
                currency={currency.code}
                source="product"
                className="mb-3"
              />
            ) : null}
            <div className={`mb-1 grid grid-cols-3 gap-2.5 border-y border-brand-stone/20 py-3 text-start`}>
              <div className="flex flex-col items-center gap-1 text-center">
                <FiAward className="h-3.5 w-3.5 text-brand-darkRed/75" />
                <span className="font-montserrat text-[9px] uppercase tracking-[0.13em] text-brand-darkRed">
                  {ui.ethicallyMade}
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <FiHeart className="h-3.5 w-3.5 text-brand-darkRed/75" />
                <span className="font-montserrat text-[9px] uppercase tracking-[0.13em] text-brand-darkRed">
                  {ui.weGiveForward}
                </span>
              </div>
              <button
                type="button"
                onClick={openShippingInfo}
                className="flex flex-col items-center gap-1 text-center transition-opacity hover:opacity-80"
                aria-controls="pdp-accordion-panel-shipping"
                data-cursor-hover
              >
                <FiGlobe className="h-3.5 w-3.5 text-brand-darkRed/75" />
                <span className="font-montserrat text-[9px] uppercase tracking-[0.13em] text-brand-darkRed">
                  {getStripeShipToCopy(language).short}
                </span>
              </button>
            </div>

            {/* Intro / short description */}
            {introParagraphParts && introParagraphParts.length > 0 ? (
              <div className={`mb-2 text-start`}>
                <PdpIntroParagraph
                  parts={introParagraphParts[0]}
                  className={`mb-2 ${PDP_COPY_INTRO} pdp-copy--intro`}
                />
              </div>
            ) : introParagraphs && introParagraphs.length > 0 ? (
              <div className={`mb-2 text-start`}>
                <p className={`mb-2 ${PDP_COPY_INTRO} pdp-copy--intro`}>
                  {introParagraphs[0]}
                </p>
              </div>
            ) : (
              <p className={`mb-1 ${PDP_COPY_INTRO} pdp-copy--intro`}>
                {catalogFields?.description}
              </p>
            )}

            <PdpAccordion
              openId={openDropdown}
              onOpenChange={setOpenDropdown}
              onSectionOpen={handleAccordionOpen}
              sections={pdpAccordionSections}
            />

            {stylePairingNote && (
              <p className={`mt-6 font-montserrat text-[12px] leading-relaxed text-brand-darkRed/75 text-start`}>
                {stylePairingNote}
              </p>
            )}

            {relatedStyles.length > 0 && (
              <section className="relative z-20 mt-8">
                <h3 className={PDP_RELATED_TITLE}>
                  {hasManualPairing ? ui.pairsWellWith : ui.youMayAlsoLike}
                </h3>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {relatedStyles.map((item) => {
                    const activeColor = selectedColor || product?.colors[0]?.name || ''
                    const pairedColor = isKnightsbridgePairingSlug(product.slug)
                      ? knightsbridgePairColor
                      : isDressAbayaPairingSlug(product.slug)
                        ? resolveDressAbayaPairedColor(product.slug, item, activeColor)
                        : item.colors[0]?.name ?? ''
                    const pairedImages = getProductImagesForColor(item, pairedColor)
                    const pairedImage = pairedImages[0] ?? item.images[0]
                    const useColorLink =
                      isKnightsbridgePairingSlug(product.slug) || isDressAbayaPairingSlug(product.slug)
                    return (
                    <LocaleLink
                      key={item.id}
                      href={
                        useColorLink
                          ? getProductHrefWithColor(item, pairedColor)
                          : getProductHref(item)
                      }
                      className="group relative z-20 block pointer-events-auto"
                      data-cursor-hover
                    >
                      <div className="relative z-20 aspect-[9/16] overflow-hidden bg-brand-stone/10">
                        <PdpGalleryImage
                          src={pairedImage}
                          alt={getProductImageAlt(item, pairedImage, { color: pairedColor, index: 0, locale: language })}
                          className="img-zoom object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </div>
                      <div className="mt-3 flex min-w-0 items-start justify-between gap-2 sm:gap-3">
                        <p data-product-name="true" className="min-w-0 flex-1 font-montserrat text-[10px] uppercase leading-snug tracking-[0.12em] text-brand-darkRed sm:text-[11px] sm:tracking-[0.14em]">
                          <span className="line-clamp-2">{item.name}</span>
                        </p>
                        <p className="shrink-0 pt-0.5 font-montserrat text-[10px] tabular-nums tracking-wide text-brand-darkRed/80 sm:text-[11px]">
                          {formatPrice(item.price, item.id)}
                        </p>
                      </div>
                    </LocaleLink>
                    )
                  })}
                </div>
              </section>
            )}
          </motion.div>
        </div>
      </div>

      <PdpLightbox
        open={isLightboxOpen}
        images={lightboxImages}
        index={lightboxIndex}
        onIndexChange={setLightboxIndex}
        onClose={() => setIsLightboxOpen(false)}
        closeLabel={galleryAria.closeGallery}
      />

      {/* Size Guide Modal */}
      <SizeGuideModal 
        isOpen={isSizeGuideOpen} 
        onClose={() => setIsSizeGuideOpen(false)} 
      />

      <StickyAddToCart
        product={{
          id: product.id,
          name: displayName,
          price: product.price,
          image: activeImages[0] ?? product.images[0] ?? '',
          productUrl: getProductHref(product),
          sku: resolveProductSku(product, selectedColor),
        }}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        quantity={quantity}
        customisationMessage={
          customisationActive && customisationMessage.trim()
            ? customisationMessage.trim()
            : undefined
        }
        customisationRequired={Boolean(showPersonalisation && customisationActive)}
      />
    </div>
  )
}
