import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { lineTotalAed } from '@/lib/shopProductOptions'

export interface CartItem {
  id: string
  /** Canonical PDP path for this line item (e.g. /shop/khous-jacket-abaya, /accessories/signature-malachite-necklace). */
  productUrl?: string
  name: string
  price: number
  image: string
  size: string
  color: string
  quantity: number
  /** Legacy free-text length; also set when using cm dropdown for display. */
  customLength?: string
  notes?: string
  /** Garment length from PDP dropdown, e.g. "55" (cm). */
  lengthCm?: string
  /** Embroidery / personalisation text — triggers surcharge when non-empty. */
  customisationMessage?: string
  /** Added to `price` per unit when customisation is applied (e.g. 40 AED). */
  customisationSurcharge?: number
}

function sameCartLine(
  a: Pick<CartItem, 'id' | 'size' | 'color' | 'lengthCm' | 'customisationMessage'>,
  b: Pick<CartItem, 'id' | 'size' | 'color' | 'lengthCm' | 'customisationMessage'>
): boolean {
  return (
    a.id === b.id &&
    a.size === b.size &&
    a.color === b.color &&
    (a.lengthCm ?? '') === (b.lengthCm ?? '') &&
    (a.customisationMessage ?? '') === (b.customisationMessage ?? '')
  )
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string, size: string, color: string, lengthCm?: string, customisationMessage?: string) => void
  updateQuantity: (
    id: string,
    size: string,
    color: string,
    quantity: number,
    lengthCm?: string,
    customisationMessage?: string
  ) => void
  clearCart: () => void
  getTotal: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        set((state) => {
          const existingIndex = state.items.findIndex((i) => sameCartLine(i, item))

          if (existingIndex > -1) {
            const newItems = [...state.items]
            newItems[existingIndex].quantity += item.quantity
            return { items: newItems }
          }

          return { items: [...state.items, item] }
        })
      },

      removeItem: (id, size, color, lengthCm, customisationMessage) => {
        set((state) => ({
          items: state.items.filter(
            (item) =>
              !sameCartLine(item, {
                id,
                size,
                color,
                lengthCm,
                customisationMessage,
              })
          ),
        }))
      },

      updateQuantity: (id, size, color, quantity, lengthCm, customisationMessage) => {
        set((state) => ({
          items: state.items.map((item) =>
            sameCartLine(item, { id, size, color, lengthCm, customisationMessage })
              ? { ...item, quantity }
              : item
          ),
        }))
      },

      clearCart: () => set({ items: [] }),

      getTotal: () => {
        return get().items.reduce((total, item) => total + lineTotalAed(item), 0)
      },
    }),
    {
      name: 'bint-saeed-cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
