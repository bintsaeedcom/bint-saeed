import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  size: string
  color: string
  quantity: number
  customLength?: string
  notes?: string
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string, size: string, color: string) => void
  updateQuantity: (id: string, size: string, color: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => {
        set((state) => {
          const existingIndex = state.items.findIndex(
            (i) => i.id === item.id && i.size === item.size && i.color === item.color
          )
          
          if (existingIndex > -1) {
            const newItems = [...state.items]
            newItems[existingIndex].quantity += item.quantity
            return { items: newItems }
          }
          
          return { items: [...state.items, item] }
        })
      },
      
      removeItem: (id, size, color) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.id === id && item.size === size && item.color === color)
          ),
        }))
      },
      
      updateQuantity: (id, size, color, quantity) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id && item.size === size && item.color === color
              ? { ...item, quantity }
              : item
          ),
        }))
      },
      
      clearCart: () => set({ items: [] }),
      
      getTotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
      },
    }),
    {
      name: 'bint-saeed-cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
