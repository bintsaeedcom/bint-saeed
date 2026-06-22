'use client'

import { productImageSrc } from '@/lib/products/shopImage'

type PdpGalleryImageProps = {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

/**
 * PDP gallery media — native `<img>` for reliable rendering inside Swiper on iOS Safari
 * (Next/Image `fill` + Swiper often shows empty grey boxes on mobile).
 */
export default function PdpGalleryImage({
  src,
  alt,
  className = 'object-cover object-top',
  priority = false,
}: PdpGalleryImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- intentional for iOS Swiper reliability
    <img
      src={productImageSrc(src)}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      className={`absolute inset-0 h-full w-full ${className}`}
    />
  )
}
