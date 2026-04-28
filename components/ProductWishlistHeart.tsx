'use client'

import type { Product } from '@/data/products'
import FavoriteHeartButton from '@/components/FavoriteHeartButton'

interface ProductWishlistHeartProps {
  product: Product
  href: string
  className?: string
}

export default function ProductWishlistHeart({ product, href, className = '' }: ProductWishlistHeartProps) {
  return (
    <FavoriteHeartButton
      id={product.id}
      name={product.name}
      price={product.price}
      image={product.images[0] ?? ''}
      category={product.category}
      href={href}
      className={`rounded-full border border-stone-200/90 bg-white/95 p-2.5 text-brand-darkRed shadow-sm backdrop-blur-sm transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue ${className}`}
    />
  )
}
