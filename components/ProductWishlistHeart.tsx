'use client'

import type { Product } from '@/data/products'
import FavoriteHeartButton from '@/components/FavoriteHeartButton'

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
      className={`h-9 w-9 rounded-full border border-stone-200/90 bg-white/90 text-brand-darkRed shadow-sm backdrop-blur-sm transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue sm:h-10 sm:w-10 ${className}`}
    />
  )
}
