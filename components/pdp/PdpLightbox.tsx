'use client'

import { useEffect, useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Pagination, Keyboard } from 'swiper/modules'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'
import PdpGalleryImage from '@/components/pdp/PdpGalleryImage'

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
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', handleKey)
    }
  }, [open, handleKey])

  useEffect(() => {
    if (!open || !swiper || swiper.destroyed) return
    // With loop enabled, `activeIndex` is the duplicated-slide index — sync on `realIndex`.
    if (swiper.realIndex === safeIndex) return
    if (typeof swiper.slideToLoop === 'function' && swiper.params.loop) {
      swiper.slideToLoop(safeIndex, 0)
    } else {
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
          className="fixed inset-0 z-[80] flex flex-col bg-[#1a0210]/96"
          onClick={onClose}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,0,20,0.35),transparent_65%)]"
            aria-hidden
          />

          <div className="relative z-10 flex items-center justify-between px-4 pb-2 pt-[max(1rem,env(safe-area-inset-top))] sm:px-6">
            <p className="font-montserrat text-[11px] uppercase tracking-[0.2em] text-white/70">
              {safeIndex + 1} / {count}
            </p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onClose()
              }}
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              aria-label={closeLabel}
              data-cursor-hover
            >
              <FiX className="h-6 w-6" strokeWidth={1.75} />
            </button>
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

            <Swiper
              key={`lightbox-${images.map((i) => i.src).join('|')}`}
              modules={[Pagination, Keyboard]}
              initialSlide={safeIndex}
              spaceBetween={16}
              slidesPerView={1}
              loop={count > 1}
              resistanceRatio={0.65}
              keyboard={{ enabled: true }}
              pagination={count > 1 ? { clickable: true, dynamicBullets: true } : false}
              onSwiper={setSwiper}
              onSlideChange={(instance) => onIndexChange(instance.realIndex)}
              className="pdp-lightbox-swiper h-full w-full max-w-5xl [&_.swiper-pagination-bullet]:bg-white/40 [&_.swiper-pagination-bullet-active]:bg-white"
            >
              {images.map((image, i) => (
                <SwiperSlide key={`${image.src}-${i}`}>
                  <div className="relative mx-auto flex h-[min(82dvh,880px)] w-full max-w-[min(100%,42rem)] items-center justify-center">
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
