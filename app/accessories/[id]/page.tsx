'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, Pagination, FreeMode } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { FiPlus, FiMinus, FiHeart, FiGlobe, FiAward } from 'react-icons/fi'
import toast from 'react-hot-toast'
import { accessories, accessoryCategories } from '@/data/accessories'
import {
  findShopAccessoryById,
  isSignatureStrandCategory,
  resolveAccessoryId,
} from '@/lib/accessories/accessoryRouteAliases'
import { localizedPath } from '@/lib/i18n/routing'
import { useCartStore } from '@/store/cartStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { productPageUi } from '@/lib/i18n/productPageUi'
import { showAddedToBagToast } from '@/lib/cart/addedToBagToast'
import { trackEvent } from '@/lib/analytics/tracking'
import { withBrandAlt } from '@/lib/products/imageAlt'
import TamaraProductWidget from '@/components/TamaraProductWidget'
import TabbyPromoSnippet from '@/components/TabbyPromoSnippet'
import {
  PDP_COLOUR_SWATCH,
  pdpColourSwatchState,
} from '@/lib/ui/pdpColourSwatch'
import {
  buildAccessoryProductJsonLd,
  getAccessoryImageAlt,
  getAccessoryPdpImages,
} from '@/lib/accessories/accessoryJsonLd'
import { resolveAccessorySkuFromSelection } from '@/lib/accessories/accessorySku'
import { getNecklaceEarringPdpContent, faqAnswerParagraphs } from '@/lib/accessories/necklaceEarringPdpContent'
import {
  JEWELLERY_CARE_AR,
  JEWELLERY_CARE_EN,
  JEWELLERY_CARE_FR,
  JEWELLERY_CARE_LEAD_AR,
  JEWELLERY_CARE_LEAD_EN,
  JEWELLERY_CARE_LEAD_FR,
  getJewelleryCareCopy,
} from '@/lib/accessories/jewelleryCareCopyI18n'
import {
  getLocalizedAccessoryDescription,
  getLocalizedAccessoryDisplayName,
  getLocalizedAccessoryMaterials,
} from '@/lib/accessories/accessoryCatalogCopyI18n'
import { getPhoneCharmPdpContent } from '@/lib/accessories/phoneCharmPdpContent'
import { getBagCharmPdpContent } from '@/lib/accessories/bagCharmPdpContent'
import { accessoryCanonicalUrl } from '@/lib/accessories/accessoryPageUrl'
import PdpGalleryImage from '@/components/pdp/PdpGalleryImage'
import PdpLightbox from '@/components/pdp/PdpLightbox'
import StickyAddToCart from '@/components/StickyAddToCart'
import FavoriteHeartButton from '@/components/FavoriteHeartButton'
import { accessoryDisplaySize } from '@/lib/accessories/accessorySizeLabel'
import { relatedAccessoriesForPdp } from '@/lib/accessories/relatedAccessoriesForPdp'
import { getStripeShipToCopy } from '@/lib/shipping/stripeShipToCopy'
import {
  PDP_BULLET_ITEM,
  PDP_BULLET_LIST,
  PDP_COPY_INTRO,
  PDP_COPY_RELAXED,
  PDP_FAQ_QUESTION,
  PDP_RELATED_TITLE,
  formatPdpProductCodeLine,
} from '@/lib/pdp/pdpTypography'
import { PdpShippingReturnsBullets } from '@/lib/pdp/PdpShippingReturnsBullets'
import {
  buildStrandPdpAccordionSections,
  getStrandPdpContent,
  getStrandPdpSectionTitles,
  signatureStrandsCategoryLabel,
  strandPdpIntroBlock,
} from '@/lib/accessories/strandPdpContent'
import PdpAccordion, {
  scrollPdpAccordionSectionIntoView,
  type PdpAccordionSectionConfig,
} from '@/components/pdp/PdpAccordion'
import { CTA_BUTTON_RADIUS, PDP_FILLED_PLUM, pdpCtaPrimary } from '@/lib/ui/ctaClasses'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/pagination'

const PDP_OUTLINED_PLUM = 'bg-white text-brand-darkRed border-brand-darkRed'
const PDP_PRIMARY_CTA = pdpCtaPrimary

export default function AccessoryDetailPage() {
  const params = useParams()
  const router = useRouter()
  const rawId = params?.id
  const aid =
    typeof rawId === 'string'
      ? decodeURIComponent(rawId)
      : Array.isArray(rawId) && typeof rawId[0] === 'string'
        ? decodeURIComponent(rawId[0])
        : ''
  const canonicalId = resolveAccessoryId(aid)
  const accessory = findShopAccessoryById(aid)

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const mainSwiperRef = useRef<SwiperType | null>(null)
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const addItem = useCartStore((state) => state.addItem)
  const { formatPrice, currency, convertPrice } = useCurrency()
  const { isRTL, t, language } = useLanguage()
  const ui = commerceUi(language)
  const productUi = productPageUi(language)
  const estimatedShipDate = useMemo(() => {
    const d = new Date()
    d.setDate(d.getDate() + 14)
    return new Intl.DateTimeFormat(language === 'ar' ? 'ar-AE' : 'en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(d)
  }, [language])
  const thumbConnected = Boolean(thumbsSwiper && !thumbsSwiper.destroyed)
  const mainGalleryModules = useMemo(
    () => (thumbConnected ? [Navigation, Thumbs, Pagination] : [Navigation, Pagination]),
    [thumbConnected],
  )

  useEffect(() => {
    if (!aid || aid === canonicalId) return
    router.replace(localizedPath(language, `/accessories/${canonicalId}`))
  }, [aid, canonicalId, language, router])

  useEffect(() => {
    const a = findShopAccessoryById(aid)
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

  useEffect(() => {
    setOpenDropdown(null)
  }, [aid, selectedColor])

  if (!accessory) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-pageCanvas pt-4 sm:pt-6 md:pt-8">
        <div className={`text-center ${isRTL ? 'rtl' : ''}`}>
          <h1 data-document-h1="true" className="font-rozha text-3xl text-brand-darkRed mb-4">
            {productUi.productNotFound}
          </h1>
          <LocaleLink
            href="/accessories"
            className="font-montserrat text-sm uppercase tracking-[0.15em] text-brand-clayRed hover:text-brand-dustyBlue"
            data-cursor-hover
          >
            {ui.accessories.returnToAccessories}
          </LocaleLink>
        </div>
      </div>
    )
  }

  const categoryInfo = accessoryCategories.find(c => c.id === accessory.category)
  const sizeLabel = accessoryDisplaySize(accessory.category, ui.accessories)
  const relatedAccessories = relatedAccessoriesForPdp(accessory)
  const isStrandPdp = isSignatureStrandCategory(accessory.category)
  const galleryImageClass = isStrandPdp
    ? 'object-contain object-center'
    : 'object-cover object-top'

  const strandPdpContent = getStrandPdpContent(accessory.id, language)
  const necklaceEarringPdpContent = getNecklaceEarringPdpContent(accessory.id, language)
  const phoneCharmPdpContent = getPhoneCharmPdpContent(accessory.id, language)
  const bagCharmPdpContent = getBagCharmPdpContent(accessory.id, language)
  const strandSectionTitles = getStrandPdpSectionTitles(language)

  const displayName =
    strandPdpContent?.headline ??
    phoneCharmPdpContent?.headline ??
    getLocalizedAccessoryDisplayName(accessory, language)

  /** Catalog title for crumbs — not the long PDP headline. */
  const breadcrumbProductLabel = getLocalizedAccessoryDisplayName(accessory, language)

  const handleAddToCart = () => {
    if (!selectedColor && accessory.colors.length > 1) {
      toast.error(ui.accessories.selectColour)
      return
    }

    const colorLabel =
      selectedColor ||
      (accessory.colors[0]
        ? isRTL
          ? accessory.colors[0].nameAr
          : accessory.colors[0].name
        : '')

    addItem({
      id: accessory.id,
      productUrl: `/accessories/${accessory.id}`,
      name: displayName,
      price: accessory.price,
      image: accessory.images[0],
      size: sizeLabel,
      color: colorLabel,
      quantity,
      sku: resolveAccessorySkuFromSelection(accessory, colorLabel),
    })

    trackEvent('add_to_cart', {
      item_id: accessory.id,
      item_name: displayName,
      item_category: accessory.category,
      item_variant: selectedColor || 'default',
      quantity,
    })
    showAddedToBagToast(isRTL)
  }

  const openShippingInfo = () => {
    setOpenDropdown('shipping')
    window.setTimeout(() => scrollPdpAccordionSectionIntoView('shipping'), 280)
  }

  const pdpAccordionSections = useMemo((): PdpAccordionSectionConfig[] => {
    if (strandPdpContent) {
      return buildStrandPdpAccordionSections({
        content: strandPdpContent,
        productDetailsTitle: productUi.productDetails,
        materialsTitle: ui.accessories.materials,
        careTitle: productUi.care,
        faqTitle: productUi.faq,
        shippingTitle: t.product.shippingReturns,
        stoneOriginTitle: strandSectionTitles.stoneOrigin,
        naturalStoneTitle: strandSectionTitles.naturalStone,
        isRTL,
      })
    }

    const description = isRTL
      ? accessory.descriptionAr
      : getLocalizedAccessoryDescription(accessory, language)
    const materials = isRTL
      ? accessory.materialsAr
      : getLocalizedAccessoryMaterials(accessory, language)
    const referenceSku = resolveAccessorySkuFromSelection(accessory, selectedColor)

    if (phoneCharmPdpContent) {
      return [
        {
          id: 'description',
          title: productUi.productDetails,
          titleTag: 'h2',
          children: (
            <div className={`space-y-4 ${isRTL ? 'text-right' : ''}`}>
              {phoneCharmPdpContent.introParagraphs.map((paragraph, idx) => (
                <p key={`phone-intro-${idx}`} className={PDP_COPY_RELAXED}>
                  {paragraph}
                </p>
              ))}
              <div className="space-y-2 pt-1">
                <p className="font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-darkRed/70">
                  {phoneCharmPdpContent.featuresTitle}
                </p>
                <ul className={PDP_BULLET_LIST}>
                  {phoneCharmPdpContent.features.map((item, idx) => (
                    <li key={`phone-feature-${idx}`} className={PDP_BULLET_ITEM}>
                      {item}
                    </li>
                  ))}
                  {referenceSku ? (
                    <li className={PDP_BULLET_ITEM}>
                      {formatPdpProductCodeLine(referenceSku, isRTL)}
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          ),
        },
        {
          id: 'care',
          title: productUi.care,
          children: (
            <div className={`space-y-3 ${isRTL ? 'text-right' : ''}`}>
              {phoneCharmPdpContent.careLead ? (
                <p className={PDP_COPY_RELAXED}>{phoneCharmPdpContent.careLead}</p>
              ) : null}
              <ul className={PDP_BULLET_LIST}>
                {phoneCharmPdpContent.care.map((item, idx) => (
                  <li key={`phone-care-${idx}`} className={PDP_BULLET_ITEM}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ),
        },
        ...(phoneCharmPdpContent.faq.length > 0
          ? [
              {
                id: 'faq',
                title: productUi.faq,
                panelClassName: 'space-y-4 pb-5',
                children: phoneCharmPdpContent.faq.map((item) => (
                  <div key={item.question} className={isRTL ? 'text-right' : ''}>
                    <p className={PDP_FAQ_QUESTION}>{item.question}</p>
                    <div className="mt-1 space-y-2">
                      {faqAnswerParagraphs(item.answer).map((paragraph, idx) => (
                        <p key={`${item.question}-${idx}`} className={PDP_COPY_RELAXED}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )),
              } satisfies PdpAccordionSectionConfig,
            ]
          : []),
        {
          id: 'shipping',
          title: t.product.shippingReturns,
          bordered: phoneCharmPdpContent.faq.length === 0,
          children: (
            <PdpShippingReturnsBullets
              isRTL={isRTL}
              productKind={accessory.category === 'earrings' ? 'earrings' : 'default'}
            />
          ),
        },
      ]
    }

    if (necklaceEarringPdpContent) {
      return [
        {
          id: 'description',
          title: productUi.productDetails,
          titleTag: 'h2',
          children: (
            <div className={`space-y-4 ${isRTL ? 'text-right' : ''}`}>
              {necklaceEarringPdpContent.introParagraphs.map((paragraph, idx) => (
                <p key={`necklace-intro-${idx}`} className={PDP_COPY_RELAXED}>
                  {paragraph}
                </p>
              ))}
              <div className="space-y-2 pt-1">
                <p className="font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-darkRed/70">
                  {necklaceEarringPdpContent.featuresTitle}
                </p>
                <ul className={PDP_BULLET_LIST}>
                  {necklaceEarringPdpContent.features.map((item, idx) => (
                    <li key={`necklace-feature-${idx}`} className={PDP_BULLET_ITEM}>
                      {item}
                    </li>
                  ))}
                  {referenceSku && (
                    <li className={PDP_BULLET_ITEM}>
                      {formatPdpProductCodeLine(referenceSku, isRTL)}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ),
        },
        {
          id: 'materials',
          title: ui.accessories.materials,
          children: (
            <ul className={PDP_BULLET_LIST}>
              <li className={PDP_BULLET_ITEM}>{materials}</li>
            </ul>
          ),
        },
        {
          id: 'care',
          title: productUi.care,
          children: (
            <div className={`space-y-3 ${isRTL ? 'text-right' : ''}`}>
              <p className={PDP_COPY_RELAXED}>{necklaceEarringPdpContent.careLead}</p>
              <ul className={PDP_BULLET_LIST}>
                {necklaceEarringPdpContent.care.map((item, idx) => (
                  <li key={`necklace-care-${idx}`} className={PDP_BULLET_ITEM}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ),
        },
        ...(necklaceEarringPdpContent.faq.length > 0
          ? [
              {
                id: 'faq',
                title: productUi.faq,
                panelClassName: 'space-y-4 pb-5',
                children: necklaceEarringPdpContent.faq.map((item) => (
                  <div key={item.question} className={isRTL ? 'text-right' : ''}>
                    <p className={PDP_FAQ_QUESTION}>{item.question}</p>
                    <div className="mt-1 space-y-2">
                      {faqAnswerParagraphs(item.answer).map((paragraph, idx) => (
                        <p key={`${item.question}-${idx}`} className={PDP_COPY_RELAXED}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )),
              } satisfies PdpAccordionSectionConfig,
            ]
          : []),
        {
          id: 'shipping',
          title: t.product.shippingReturns,
          bordered: necklaceEarringPdpContent.faq.length === 0,
          children: (
            <PdpShippingReturnsBullets
              isRTL={isRTL}
              productKind={accessory.category === 'earrings' ? 'earrings' : 'default'}
            />
          ),
        },
      ]
    }

    if (bagCharmPdpContent) {
      return [
        {
          id: 'description',
          title: productUi.productDetails,
          titleTag: 'h2',
          children: (
            <div className={`space-y-4 ${isRTL ? 'text-right' : ''}`}>
              {bagCharmPdpContent.introParagraphs.map((paragraph, idx) => (
                <p key={`bag-intro-${idx}`} className={PDP_COPY_RELAXED}>
                  {paragraph}
                </p>
              ))}
              <div className="space-y-2 pt-1">
                <p className="font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-darkRed/70">
                  {bagCharmPdpContent.featuresTitle}
                </p>
                <ul className={PDP_BULLET_LIST}>
                  {bagCharmPdpContent.features.map((item, idx) => (
                    <li key={`bag-feature-${idx}`} className={PDP_BULLET_ITEM}>
                      {item}
                    </li>
                  ))}
                  {referenceSku ? (
                    <li className={PDP_BULLET_ITEM}>
                      {formatPdpProductCodeLine(referenceSku, isRTL)}
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          ),
        },
        {
          id: 'care',
          title: productUi.care,
          children: (
            <div className={`space-y-3 ${isRTL ? 'text-right' : ''}`}>
              {bagCharmPdpContent.careLead ? (
                <p className={PDP_COPY_RELAXED}>{bagCharmPdpContent.careLead}</p>
              ) : null}
              <ul className={PDP_BULLET_LIST}>
                {bagCharmPdpContent.care.map((item, idx) => (
                  <li key={`bag-care-${idx}`} className={PDP_BULLET_ITEM}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ),
        },
        ...(bagCharmPdpContent.faq.length > 0
          ? [
              {
                id: 'faq',
                title: productUi.faq,
                panelClassName: 'space-y-4 pb-5',
                children: bagCharmPdpContent.faq.map((item) => (
                  <div key={item.question} className={isRTL ? 'text-right' : ''}>
                    <p className={PDP_FAQ_QUESTION}>{item.question}</p>
                    <div className="mt-1 space-y-2">
                      {faqAnswerParagraphs(item.answer).map((paragraph, idx) => (
                        <p key={`${item.question}-${idx}`} className={PDP_COPY_RELAXED}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )),
              } satisfies PdpAccordionSectionConfig,
            ]
          : []),
        {
          id: 'shipping',
          title: t.product.shippingReturns,
          bordered: false,
          children: (
            <PdpShippingReturnsBullets isRTL={isRTL} productKind="default" />
          ),
        },
      ]
    }

    const jewelleryCare = getJewelleryCareCopy(language)
    const isBagCharm = accessory.category === 'bag-strands'

    return [
      {
        id: 'description',
        title: productUi.productDetails,
        titleTag: 'h2',
        children: (
          <ul className={PDP_BULLET_LIST}>
            <li className={PDP_BULLET_ITEM}>{description}</li>
            {referenceSku ? (
              <li className={PDP_BULLET_ITEM}>{formatPdpProductCodeLine(referenceSku, isRTL)}</li>
            ) : null}
          </ul>
        ),
      },
      {
        id: 'materials',
        title: ui.accessories.materials,
        children: (
          <ul className={PDP_BULLET_LIST}>
            <li className={PDP_BULLET_ITEM}>{materials}</li>
          </ul>
        ),
      },
      {
        id: 'care',
        title: productUi.care,
        children: isBagCharm ? (
          <div className={`space-y-3 ${isRTL ? 'text-right' : ''}`}>
            <p className={PDP_COPY_RELAXED}>{jewelleryCare.lead}</p>
            <ul className={PDP_BULLET_LIST}>
              {jewelleryCare.bullets.map((item, idx) => (
                <li key={`bag-care-${idx}`} className={PDP_BULLET_ITEM}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ul className={PDP_BULLET_LIST}>
            <li className={PDP_BULLET_ITEM}>
              {ui.accessories.careBullets[0]}
            </li>
            <li className={PDP_BULLET_ITEM}>
              {ui.accessories.careBullets[1]}
            </li>
            <li className={PDP_BULLET_ITEM}>
              {ui.accessories.careBullets[2]}
            </li>
            <li className={PDP_BULLET_ITEM}>
              {ui.accessories.careBullets[3]}
            </li>
          </ul>
        ),
      },
      {
        id: 'shipping',
        title: t.product.shippingReturns,
        bordered: false,
        children: (
          <PdpShippingReturnsBullets
            isRTL={isRTL}
            productKind={accessory.category === 'earrings' ? 'earrings' : 'default'}
          />
        ),
      },
    ]
  }, [
    accessory.description,
    accessory.descriptionAr,
    accessory.category,
    accessory.colors,
    selectedColor,
    accessory.materials,
    accessory.materialsAr,
    bagCharmPdpContent,
    necklaceEarringPdpContent,
    phoneCharmPdpContent,
    isRTL,
    productUi.care,
    productUi.faq,
    productUi.productDetails,
    language,
    strandPdpContent,
    strandSectionTitles.naturalStone,
    strandSectionTitles.stoneOrigin,
    t.product.shippingReturns,
    ui.accessories.careBullets,
    ui.accessories.materials,
  ])

  const detailAngles = accessory.detailAngles
  const hasAngleColumn = !!detailAngles && detailAngles.length === 2
  const isVideoFile = (src: string) => /\.(mp4|mov|webm|ogg)$/i.test(src)
  const isHeicFile = (src: string) => /\.(heic|heif)$/i.test(src)
  const galleryGridClass = hasAngleColumn
    ? 'lg:grid-cols-[4.75rem_minmax(0,1fr)_minmax(8.75rem,11.25rem)]'
    : 'lg:grid-cols-[4.75rem_minmax(0,1fr)]'

  const pdpDescription = strandPdpContent
    ? strandPdpContent.introParagraphs.join(' ')
    : phoneCharmPdpContent
      ? phoneCharmPdpContent.introParagraphs.join(' ')
      : necklaceEarringPdpContent
        ? necklaceEarringPdpContent.introParagraphs.join(' ')
        : bagCharmPdpContent
          ? bagCharmPdpContent.introParagraphs.join(' ')
          : isRTL
            ? accessory.descriptionAr
            : getLocalizedAccessoryDescription(accessory, language)
  const pdpImages = useMemo(() => getAccessoryPdpImages(accessory), [accessory])
  const imageAltFor = (imageSrc: string, index: number) =>
    getAccessoryImageAlt(accessory, imageSrc, index, language)
  const lightboxImages = useMemo(
    () =>
      pdpImages.flatMap((src, index) =>
        isVideoFile(src) ? [] : [{ src, alt: imageAltFor(src, index) }],
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- rebuild when gallery inputs change
    [pdpImages, language, accessory],
  )
  const openLightboxAt = (galleryIndex: number) => {
    const src = pdpImages[galleryIndex]
    if (!src || isVideoFile(src)) return
    const next = lightboxImages.findIndex((item) => item.src === src)
    setLightboxIndex(next >= 0 ? next : 0)
    setIsLightboxOpen(true)
  }
  const productJsonLd = useMemo(
    () =>
      buildAccessoryProductJsonLd({
        accessory,
        displayName,
        description: pdpDescription,
        pageUrl: accessoryCanonicalUrl(language, accessory.id),
        locale: language,
      }),
    [accessory, displayName, language, pdpDescription],
  )

  useEffect(() => {
    if (!lightboxImages.length) return
    setLightboxIndex((current) => Math.min(current, lightboxImages.length - 1))
  }, [lightboxImages])

  useEffect(() => {
    trackEvent('view_item', {
      item_id: accessory.id,
      item_name: displayName,
      item_category: accessory.category,
      currency: 'AED',
      value: accessory.price,
    })
  }, [accessory.category, accessory.id, accessory.price, displayName])

  const categoryBreadcrumbLabel =
    isSignatureStrandCategory(accessory.category)
      ? signatureStrandsCategoryLabel(language)
      : (isRTL ? categoryInfo?.nameAr : categoryInfo?.name) ?? ''

  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-pageCanvas pb-[calc(var(--mobile-bottom-chrome,0px)+1rem)] lg:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <AppPageWayfinding
        layout="bar"
        rtl={isRTL}
        segments={[
          { label: productUi.home, href: '/home' },
          { label: ui.common.accessories, href: '/accessories' },
          {
            label: categoryBreadcrumbLabel,
            href: `/accessories?type=${accessory.category}`,
          },
          { label: breadcrumbProductLabel },
        ].filter((s) => s.label.length > 0)}
        backLink={{ href: '/accessories', label: ui.accessories.returnToAccessories }}
      />

      <div className="mx-auto w-full max-w-[1400px] px-4 py-4 sm:px-8 sm:py-8 lg:py-12">
        <div className="isolate grid min-h-0 min-w-0 grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image Gallery — mirrors `/shop/[id]` (Royal V-Neck Kaftan); optional third column = detail angles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`relative z-0 w-full min-h-0 min-w-0 overflow-x-clip ${hasAngleColumn ? '' : 'lg:max-w-[42rem]'}`}
          >
            <FavoriteHeartButton
              id={accessory.id}
              name={displayName}
              price={accessory.price}
              image={pdpImages[0] ?? accessory.images[0] ?? ''}
              category={accessory.category}
              href={`/accessories/${accessory.id}`}
              className={`absolute top-2.5 z-30 h-9 w-9 rounded-full border border-stone-200/90 bg-white/90 text-brand-darkRed shadow-sm backdrop-blur-sm transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue sm:top-3 sm:h-10 sm:w-10 ${isRTL ? 'left-2.5 sm:left-3' : 'right-2.5 sm:right-3'}`}
              iconClassName="h-3.5 w-3.5 sm:h-4 sm:w-4"
            />
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
                  className="product-gallery-thumbs !overflow-visible"
                >
                  {pdpImages.map((image, index) => (
                    <SwiperSlide key={index} className="!h-auto">
                      <button
                        type="button"
                        className="group relative block aspect-[3/4] w-full overflow-hidden border border-brand-stone/25 bg-[#f5f5f5] p-0 text-left outline-none ring-brand-darkRed focus-visible:ring-2"
                        onClick={() => {
                          mainSwiperRef.current?.slideTo(index)
                          trackEvent('gallery_interaction', {
                            interaction_type: 'thumbnail_click',
                            item_id: accessory.id,
                            image_index: index,
                          })
                        }}
                        aria-label={ui.shop.openProduct.replace('{name}', `${displayName} ${index + 1}`)}
                        data-cursor-hover
                      >
                        {isVideoFile(image) ? (
                          <video
                            src={image}
                            muted
                            playsInline
                            preload="metadata"
                            className={`h-full w-full img-zoom ${galleryImageClass} transition-opacity group-hover:opacity-80`}
                          />
                        ) : isHeicFile(image) ? (
                          <img
                            src={image}
                            alt={imageAltFor(image, index)}
                            className={`h-full w-full img-zoom ${galleryImageClass} transition-opacity group-hover:opacity-80`}
                            loading="lazy"
                          />
                        ) : (
                          <PdpGalleryImage
                            src={image}
                            alt={imageAltFor(image, index)}
                            className={`img-zoom ${galleryImageClass} transition-opacity group-hover:opacity-80`}
                          />
                        )}
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="space-y-3">
                <div className="relative aspect-[3/4] w-full min-h-0 overflow-hidden border border-brand-stone/20 bg-[#f5f5f5] [&_.product-gallery-swiper]:absolute [&_.product-gallery-swiper]:inset-0 [&_.product-gallery-swiper]:h-full [&_.product-gallery-swiper]:w-full">
                  <Swiper
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
                        item_id: accessory.id,
                        image_index: swiper.activeIndex,
                      })
                    }
                    {...(thumbConnected ? { thumbs: { swiper: thumbsSwiper } } : {})}
                    className="h-full w-full min-h-0 product-gallery-swiper"
                  >
                    {pdpImages.map((image, index) => (
                      <SwiperSlide key={index}>
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
                              className={`h-full w-full img-zoom ${galleryImageClass}`}
                            />
                          ) : isHeicFile(image) ? (
                            <img
                              src={image}
                              alt={imageAltFor(image, index)}
                              className={`h-full w-full img-zoom ${galleryImageClass}`}
                              loading={index === 0 ? 'eager' : 'lazy'}
                            />
                          ) : (
                            <PdpGalleryImage
                              src={image}
                              alt={imageAltFor(image, index)}
                              priority={index === 0}
                              className={`img-zoom ${galleryImageClass}`}
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
                    {pdpImages.map((image, index) => (
                      <SwiperSlide key={index} className="!h-auto">
                        <button
                          type="button"
                          className="group relative block aspect-[3/4] w-full overflow-hidden border border-brand-stone/25 bg-[#f5f5f5] p-0 text-left outline-none ring-brand-darkRed focus-visible:ring-2"
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
                              className={`h-full w-full img-zoom ${galleryImageClass} transition-opacity group-hover:opacity-80`}
                            />
                          ) : isHeicFile(image) ? (
                            <img
                              src={image}
                              alt={imageAltFor(image, index)}
                              className={`h-full w-full img-zoom ${galleryImageClass} transition-opacity group-hover:opacity-80`}
                              loading="lazy"
                            />
                          ) : (
                            <PdpGalleryImage
                              src={image}
                              alt={imageAltFor(image, index)}
                              className={`img-zoom ${galleryImageClass} transition-opacity group-hover:opacity-80`}
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
                      className="relative aspect-[3/4] w-full overflow-hidden border border-brand-stone/20 bg-[#f5f5f5]"
                    >
                      {isHeicFile(src) ? (
                        <img
                          src={src}
                          alt={withBrandAlt(`${displayName}, ${isRTL ? `زاوية ${ai + 1}` : `angle ${ai + 1}`}`)}
                          className="h-full w-full img-zoom object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <PdpGalleryImage
                          src={src}
                          alt={withBrandAlt(`${displayName}, ${isRTL ? `زاوية ${ai + 1}` : `angle ${ai + 1}`}`)}
                          className="img-zoom object-cover"
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
            className={`pdp-info relative z-[1] min-h-0 min-w-0 bg-white px-3.5 pb-3.5 pt-0 lg:sticky lg:top-28 lg:self-start lg:px-4 lg:pb-4 lg:pt-0 ${isRTL ? 'text-right' : ''}`}
          >
            <h1
              data-document-h1="true"
              data-product-name="true"
              className="mb-1 font-rozha text-[1.75rem] leading-[1.15] text-black md:text-[1.95rem] lg:text-[2.05rem]"
            >
              {displayName}
            </h1>

            <div className="mb-3 space-y-0.5">
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
            <div id="color-selection" className="mb-3 border-b border-brand-stone/20 pb-3">
              <div className={`mb-2 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-darkRed">
                  {ui.cart.colour}
                </span>
                {selectedColor && (
                  <span className="font-montserrat text-[11px] tracking-wide text-brand-darkRed/65">
                    {selectedColor}
                  </span>
                )}
              </div>
              <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                {accessory.colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(isRTL ? color.nameAr : color.name)}
                    className={`${PDP_COLOUR_SWATCH} ${pdpColourSwatchState(
                      selectedColor === (isRTL ? color.nameAr : color.name),
                    )}`}
                    style={{ backgroundColor: color.hex }}
                    title={isRTL ? color.nameAr : color.name}
                    aria-pressed={selectedColor === (isRTL ? color.nameAr : color.name)}
                    aria-label={`Colour ${isRTL ? color.nameAr : color.name}`}
                    data-cursor-hover
                  />
                ))}
              </div>
            </div>

            {/* Size — jewellery, strands & bag charms use unique size labelling */}
            <div id="size-selection" className="mb-3 border-b border-brand-stone/20 pb-3">
              <div className={`mb-2 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-darkRed">
                  {ui.cart.size}
                </span>
              </div>
              <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                <span className={`min-w-[52px] border px-3 py-2.5 font-montserrat text-[11px] uppercase tracking-[0.08em] ${CTA_BUTTON_RADIUS} ${PDP_FILLED_PLUM}`}>
                  {sizeLabel}
                </span>
              </div>
              <p className="mt-2 font-montserrat text-[11px] italic tracking-wide text-brand-darkRed/80">
                {productUi.madeToOrderShips(estimatedShipDate)}
              </p>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mb-1 flex flex-col gap-2 sm:flex-row sm:gap-3">
              <div className={`flex w-full items-center justify-center border border-brand-stone/50 sm:w-auto sm:justify-start ${CTA_BUTTON_RADIUS}`}>
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
                data-pdp-primary-atc
                  className={`w-full px-6 py-3 sm:flex-1 ${PDP_PRIMARY_CTA}`}
                data-cursor-hover
              >
                {productUi.addToBag}
              </button>

            </div>

            {(currency.code === 'AED' || currency.code === 'SAR') ? (
              <TamaraProductWidget
                amount={convertPrice(accessory.price * quantity)}
                currency={currency.code}
                className="mb-3 mt-1"
              />
            ) : null}
            {['AED', 'SAR', 'KWD'].includes(currency.code) ? (
              <TabbyPromoSnippet
                price={convertPrice(accessory.price * quantity)}
                currency={currency.code}
                source="product"
                className="mb-3"
              />
            ) : null}

            <div className={`mb-1 grid grid-cols-3 gap-2.5 border-y border-brand-stone/20 py-3 ${isRTL ? 'text-right' : ''}`}>
              <div className="flex flex-col items-center gap-1 text-center">
                <FiAward className="h-3.5 w-3.5 text-brand-darkRed/75" />
                <span className="font-montserrat text-[9px] uppercase tracking-[0.13em] text-brand-darkRed">
                  {productUi.ethicallyMade}
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <FiHeart className="h-3.5 w-3.5 text-brand-darkRed/75" />
                <span className="font-montserrat text-[9px] uppercase tracking-[0.13em] text-brand-darkRed">
                  {productUi.weGiveForward}
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

            {strandPdpContent ? (
              <div className="mb-1">{strandPdpIntroBlock(strandPdpContent, isRTL)}</div>
            ) : necklaceEarringPdpContent?.introParagraphs[0] ? (
              <p className={`mb-1 ${PDP_COPY_INTRO} pdp-copy--intro`}>
                {necklaceEarringPdpContent.introParagraphs[0]}
              </p>
            ) : (
              <p className={`mb-1 ${PDP_COPY_INTRO} pdp-copy--intro`}>
                {isRTL ? accessory.descriptionAr : accessory.description}
              </p>
            )}

            <PdpAccordion
              openId={openDropdown}
              onOpenChange={setOpenDropdown}
              sections={pdpAccordionSections}
            />

            {relatedAccessories.length > 0 && (
              <section className="relative z-20 mt-8">
                <h3 className={PDP_RELATED_TITLE}>
                  {productUi.pairsWellWith}
                </h3>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {relatedAccessories.map((item) => {
                    const relatedName = getLocalizedAccessoryDisplayName(item, language)
                    const relatedImage = item.images[0] ?? ''
                    return (
                      <LocaleLink
                        key={item.id}
                        href={`/accessories/${item.id}`}
                        className="group relative z-20 block pointer-events-auto"
                        data-cursor-hover
                      >
                        <div className="relative z-20 aspect-[3/4] overflow-hidden bg-brand-stone/10">
                          <PdpGalleryImage
                            src={relatedImage}
                            alt={getAccessoryImageAlt(item, relatedImage, 0, language)}
                            className="img-zoom object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        </div>
                        <div className="mt-3 flex min-w-0 items-start justify-between gap-2 sm:gap-3">
                          <p data-product-name="true" className="min-w-0 flex-1 font-montserrat text-[10px] uppercase leading-snug tracking-[0.12em] text-brand-darkRed sm:text-[11px] sm:tracking-[0.14em]">
                            <span className="line-clamp-2">{relatedName}</span>
                          </p>
                          <p className="shrink-0 pt-0.5 font-montserrat text-[10px] tabular-nums tracking-wide text-brand-darkRed/80 sm:text-[11px]">
                            {formatPrice(item.price)}
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
        closeLabel={isRTL ? 'إغلاق المعرض' : 'Close gallery'}
      />

      <StickyAddToCart
        product={{
          id: accessory.id,
          name: displayName,
          price: accessory.price,
          image: pdpImages[0] ?? accessory.images[0] ?? '',
          productUrl: `/accessories/${accessory.id}`,
          sku: resolveAccessorySkuFromSelection(accessory, selectedColor),
        }}
        selectedSize={sizeLabel}
        selectedColor={selectedColor}
        quantity={quantity}
      />
    </div>
  )
}
