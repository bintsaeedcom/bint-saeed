'use client'

import { getImageProps } from 'next/image'
import { productImageSrc } from '@/lib/products/shopImage'

const OPTIMIZABLE = /\.(webp|jpe?g|png|avif)$/i

type PdpGalleryImageProps = {
  src: string
  alt: string
  title?: string
  className?: string
  priority?: boolean
  /** Set false to flow in normal layout — required inside a Swiper zoom container. */
  fill?: boolean
  /** Rendered width hint for the responsive `srcSet`. */
  sizes?: string
  /** Serve the untouched file (zoomable lightbox). */
  original?: boolean
}

/**
 * PDP gallery media — native `<img>` for reliable rendering inside Swiper on iOS Safari
 * (Next/Image `fill` + Swiper often shows empty grey boxes on mobile). Responsive
 * `srcSet` keeps multi-megapixel originals from being decoded while the page scrolls.
 */
export default function PdpGalleryImage({
  src,
  alt,
  title,
  className = 'object-cover object-top',
  priority = false,
  fill = true,
  sizes = '(max-width: 1024px) 100vw, 50vw',
  original = false,
}: PdpGalleryImageProps) {
  const resolved = productImageSrc(src)
  const responsive =
    !original && OPTIMIZABLE.test(src.split('?')[0] ?? '')
      ? getImageProps({ src: resolved, alt, fill: true, sizes, quality: 80 }).props
      : null

  return (
    // eslint-disable-next-line @next/next/no-img-element -- intentional for iOS Swiper reliability
    <img
      src={responsive?.src ?? resolved}
      srcSet={responsive?.srcSet}
      sizes={responsive ? sizes : undefined}
      alt={alt}
      title={title}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      className={fill ? `absolute inset-0 h-full w-full ${className}` : className}
    />
  )
}
