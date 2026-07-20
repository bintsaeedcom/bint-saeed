import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface WishlistItem {
  id: string
  name: string
  price: number
  image: string
  category: string
  /** Product URL — `/shop/...` or `/accessories/...`. Older saved items may omit this. */
  href?: string
}

interface WishlistStore {
  items: WishlistItem[]
  addItem: (item: WishlistItem) => void
  removeItem: (id: string) => void
  isInWishlist: (id: string) => boolean
  clearWishlist: () => void
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => {
        const exists = get().items.some((i) => i.id === item.id)
        if (exists) return
        set((state) => ({ items: [...state.items, item] }))
        if (typeof window !== 'undefined') {
          queueMicrotask(() => {
            void import('@/lib/analytics/cartSlack').then((m) => m.notifyWishlistAddSlack(item))
          })
        }
      },
      
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }))
      },
      
      isInWishlist: (id) => {
        return get().items.some((item) => item.id === id)
      },
      
      clearWishlist: () => set({ items: [] }),
    }),
    {
      name: 'bint-saeed-wishlist',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
