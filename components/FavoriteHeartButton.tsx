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
  iconClassName = 'h-4 w-4',
}: FavoriteHeartButtonProps) {
  const favorited = useWishlistStore((s) => s.items.some((i) => i.id === id))
  const addItem = useWishlistStore((s) => s.addItem)
  const removeItem = useWishlistStore((s) => s.removeItem)

  return (
    <button
      type="button"
      className={className}
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
      <FiHeart className={`${iconClassName} ${favorited ? 'fill-current' : ''}`} aria-hidden />
    </button>
  )
}
