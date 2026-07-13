'use client'

import type { Product } from '@/data/products'
import FavoriteHeartButton from '@/components/FavoriteHeartButton'

/** Round frosted glass control — keep size equal (never oval). */
export const WISHLIST_HEART_GLASS_CLASS =
  'h-9 w-9 min-h-9 min-w-9 rounded-full border border-white/55 bg-white/35 text-brand-darkRed shadow-[0_6px_20px_rgba(26,2,16,0.14)] backdrop-blur-md backdrop-saturate-150 transition-[background-color,border-color,color,box-shadow] hover:border-white/80 hover:bg-white/50 hover:text-brand-dustyBlue sm:h-10 sm:w-10 sm:min-h-10 sm:min-w-10'

interface ProductWishlistHeartProps {
  product: Product
  href: string
  className?: string
  iconClassName?: string
}

export default function ProductWishlistHeart({
  product,
  href,
  className = '',
  iconClassName = 'h-3.5 w-3.5 sm:h-4 sm:w-4',
}: ProductWishlistHeartProps) {
  return (
    <FavoriteHeartButton
      id={product.id}
      name={product.name}
      price={product.price}
      image={product.images[0] ?? ''}
      category={product.category}
      href={href}
      iconClassName={iconClassName}
      className={`${WISHLIST_HEART_GLASS_CLASS} ${className}`}
    />
  )
}
