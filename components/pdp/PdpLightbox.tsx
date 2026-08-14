'use client'

import { useEffect, useCallback, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Pagination, Keyboard } from 'swiper/modules'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'
import PdpGalleryImage from '@/components/pdp/PdpGalleryImage'
import { lockBodyScroll, recoverStuckBodyScroll } from '@/lib/ui/bodyScrollLock'

import 'swiper/css'
import 'swiper/css/pagination'

export type PdpLightboxItem = {
  src: string
  alt: string
  title?: string
}

type PdpLightboxProps = {
  open: boolean
  images: PdpLightboxItem[]
  index: number
  onIndexChange: (index: number) => void
  onClose: () => void
  closeLabel?: string
}

/**
 * Full-viewport PDP gallery — swipe / arrows / keyboard, with a clear close control.
 * Shared by apparel + accessories PDPs. Loop is intentionally off — loop + index
 * sync caused endless slide cycling when images were enlarged.
 */
export default function PdpLightbox({
  open,
  images,
  index,
  onIndexChange,
  onClose,
  closeLabel = 'Close gallery',
}: PdpLightboxProps) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const wasOpenRef = useRef(false)
  const count = images.length
  const safeIndex = count === 0 ? 0 : Math.min(Math.max(index, 0), count - 1)

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (!open) return
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
    },
    [open, onClose],
  )

  useEffect(() => {
    if (open) {
      wasOpenRef.current = true
      return lockBodyScroll()
    }
    // Only after a real close — not on first mount — resync page / Lenis scroll.
    if (!wasOpenRef.current) return
    wasOpenRef.current = false
    const t = window.setTimeout(() => {
      recoverStuckBodyScroll()
      window.dispatchEvent(
        new CustomEvent('bs:body-scroll-unlocked', { detail: { scrollY: window.scrollY } }),
      )
    }, 40)
    return () => window.clearTimeout(t)
  }, [open])

  useEffect(() => {
    if (!open) return
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, handleKey])

  /**
   * Scrolling dismisses the enlarged image and hands the page back.
   * Body scroll is locked while open, so intent is read from wheel / touch
   * rather than a scroll event. Horizontal touch stays with Swiper.
   */
  useEffect(() => {
    if (!open) return

    let armed = false
    let wheelTravel = 0
    let touchStartX = 0
    let touchStartY = 0

    // Ignore inertia carried over from the scroll that preceded opening.
    const armTimer = window.setTimeout(() => {
      armed = true
    }, 260)

    const onWheel = (e: WheelEvent) => {
      if (!armed) return
      wheelTravel += Math.abs(e.deltaY)
      if (wheelTravel > 40) onClose()
    }

    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      if (!touch) return
      touchStartX = touch.clientX
      touchStartY = touch.clientY
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!armed) return
      const touch = e.touches[0]
      if (!touch) return
      const dy = touch.clientY - touchStartY
      const dx = touch.clientX - touchStartX
      if (Math.abs(dy) > 64 && Math.abs(dy) > Math.abs(dx) * 1.5) onClose()
    }

    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })

    return () => {
      window.clearTimeout(armTimer)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) {
      setSwiper(null)
      return
    }
    if (!swiper || swiper.destroyed) return
    if (swiper.activeIndex !== safeIndex) {
      swiper.slideTo(safeIndex, 0)
    }
  }, [open, safeIndex, swiper])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open && count > 0 ? (
        <motion.div
          key="pdp-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Product gallery"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[80] flex flex-col bg-[#1a0210]/90 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-[#1a0210]/70"
          data-scroll-lock-owner="true"
          onClick={onClose}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,0,20,0.35),transparent_65%)]"
            aria-hidden
          />

          <div className="relative z-10 flex items-center px-4 pb-2 pt-[max(1rem,env(safe-area-inset-top))] sm:px-6">
            <p className="font-montserrat text-[11px] uppercase tracking-[0.2em] text-white/70">
              {safeIndex + 1} / {count}
            </p>
          </div>

          <div
            className="relative z-10 flex min-h-0 flex-1 items-center justify-center px-2 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-10"
            onClick={(e) => e.stopPropagation()}
          >
            {count > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => swiper?.slidePrev()}
                  className="absolute left-2 z-20 hidden h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:left-4 sm:flex"
                  aria-label="Previous image"
                  data-cursor-hover
                >
                  <FiChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={() => swiper?.slideNext()}
                  className="absolute right-2 z-20 hidden h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:right-4 sm:flex"
                  aria-label="Next image"
                  data-cursor-hover
                >
                  <FiChevronRight className="h-6 w-6" />
                </button>
              </>
            ) : null}

            <div className="relative h-full w-full max-w-[min(100%,42rem)]">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onClose()
                }}
                className="absolute right-2 top-2 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-[#1a0210]/55 text-white backdrop-blur-sm transition-colors hover:bg-[#1a0210]/75 sm:right-3 sm:top-3 sm:h-11 sm:w-11"
                aria-label={closeLabel}
                data-cursor-hover
              >
                <FiX className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
              </button>

              <Swiper
              key={`lightbox-${images.map((i) => i.src).join('|')}`}
              modules={[Pagination, Keyboard]}
              initialSlide={safeIndex}
              spaceBetween={16}
              slidesPerView={1}
              loop={false}
              allowTouchMove
              speed={320}
              resistanceRatio={0.65}
              keyboard={{ enabled: true }}
              pagination={count > 1 ? { clickable: true, dynamicBullets: true } : false}
              onSwiper={setSwiper}
              onSlideChange={(instance) => {
                if (instance.activeIndex !== index) {
                  onIndexChange(instance.activeIndex)
                }
              }}
              className="pdp-lightbox-swiper h-full w-full [&_.swiper-pagination-bullet]:bg-white/40 [&_.swiper-pagination-bullet-active]:bg-white"
            >
              {images.map((image, i) => (
                <SwiperSlide key={`${image.src}-${i}`}>
                  <div className="relative mx-auto flex h-[min(82dvh,880px)] w-full items-center justify-center">
                    <div className="relative h-full w-full">
                      <PdpGalleryImage
                        src={image.src}
                        alt={image.alt}
                        title={image.title}
                        priority={i === safeIndex}
                        className="object-contain object-center"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
          </div>

          {count > 1 ? (
            <p className="relative z-10 pb-3 text-center font-montserrat text-[10px] uppercase tracking-[0.18em] text-white/45 sm:hidden">
              Swipe for more
            </p>
          ) : null}
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
