'use client'

import { FiHeart } from 'react-icons/fi'
import toast from 'react-hot-toast'
import { useWishlistStore } from '@/store/wishlistStore'

export interface FavoriteHeartButtonProps {
  id: string
  name: string
  price: number
  image: string
  category: string
  href: string
  className?: string
  iconClassName?: string
}

export default function FavoriteHeartButton({
  id,
  name,
  price,
  image,
  category,
  href,
  className = '',
  iconClassName = 'h-3.5 w-3.5',
}: FavoriteHeartButtonProps) {
  const favorited = useWishlistStore((s) => s.items.some((i) => i.id === id))
  const addItem = useWishlistStore((s) => s.addItem)
  const removeItem = useWishlistStore((s) => s.removeItem)

  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center leading-none ${className}`}
      data-wishlist-heart="true"
      aria-pressed={favorited}
      aria-label={favorited ? 'Remove from favorites' : 'Save to favorites'}
      data-cursor-hover
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        if (favorited) {
          removeItem(id)
          toast.success('Removed from favorites')
          return
        }
        addItem({ id, name, price, image, category, href })
        toast.success('Saved to favorites')
      }}
    >
      {/* Optical nudge: FiHeart path sits slightly high in its viewBox */}
      <FiHeart
        className={`block shrink-0 translate-y-[0.5px] ${iconClassName} ${favorited ? 'fill-current' : ''}`}
        strokeWidth={1.75}
        aria-hidden
      />
    </button>
  )
}
