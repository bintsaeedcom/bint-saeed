import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { sanitizePersistedCartWithMeta } from '@/lib/cart/sanitizePersistedCart'
import { lineTotalAed } from '@/lib/shopProductOptions'

export interface CartItem {
  id: string
  /** Canonical PDP path for this line item (e.g. /shop/knightsbridge-abaya-jacket, /accessories/al-ain-oasis-necklace-malachite). */
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
  /** Ops SKU e.g. BS-AB-001-DBR (abayas). */
  sku?: string
  /** Embroidery / personalisation text (complimentary on abayas). */
  customisationMessage?: string
  /** @deprecated No longer charged — kept for persisted carts. */
  customisationSurcharge?: number
  /** Digital gift card purchase metadata (AED denomination). */
  giftCard?: {
    denominationAed: number
    sendToRecipient: boolean
    recipientName?: string
    recipientEmail?: string
    personalMessage?: string
  }
}

function sameCartLine(
  a: Pick<CartItem, 'id' | 'size' | 'color' | 'lengthCm' | 'customisationMessage' | 'giftCard'>,
  b: Pick<CartItem, 'id' | 'size' | 'color' | 'lengthCm' | 'customisationMessage' | 'giftCard'>
): boolean {
  const giftKey = (g: CartItem['giftCard']) =>
    g
      ? `${g.denominationAed}|${g.sendToRecipient ? 1 : 0}|${g.recipientEmail ?? ''}|${g.personalMessage ?? ''}|${g.recipientName ?? ''}`
      : ''
  return (
    a.id === b.id &&
    a.size === b.size &&
    a.color === b.color &&
    (a.lengthCm ?? '') === (b.lengthCm ?? '') &&
    (a.customisationMessage ?? '') === (b.customisationMessage ?? '') &&
    giftKey(a.giftCard) === giftKey(b.giftCard)
  )
}

interface CartStore {
  items: CartItem[]
  /** False until persist has finished reading localStorage (avoids empty-cart checkout bounce). */
  hasHydrated: boolean
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
  updateCustomisationMessage: (
    id: string,
    size: string,
    color: string,
    lengthCm: string | undefined,
    previousMessage: string | undefined,
    nextMessage: string | undefined,
  ) => void
  clearCart: () => void
  getTotal: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      hasHydrated: false,

      addItem: (item) => {
        const quantityAdded = item.quantity
        set((state) => {
          const existingIndex = state.items.findIndex((i) => sameCartLine(i, item))

          if (existingIndex > -1) {
            const newItems = [...state.items]
            newItems[existingIndex].quantity += item.quantity
            return { items: newItems }
          }

          return { items: [...state.items, item] }
        })

        if (typeof window !== 'undefined') {
          queueMicrotask(() => {
            void import('@/lib/analytics/cartSlack').then((m) => m.notifyCartAddSlack(item, quantityAdded))
          })
        }
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

      updateCustomisationMessage: (id, size, color, lengthCm, previousMessage, nextMessage) => {
        set((state) => {
          const index = state.items.findIndex((item) =>
            sameCartLine(item, {
              id,
              size,
              color,
              lengthCm,
              customisationMessage: previousMessage,
            }),
          )
          if (index < 0) return state

          const trimmed = nextMessage?.trim() || undefined
          const updated: CartItem = { ...state.items[index], customisationMessage: trimmed }
          const remainder = state.items.filter((_, i) => i !== index)
          const mergeIndex = remainder.findIndex((item) => sameCartLine(item, updated))
          if (mergeIndex > -1) {
            const merged = [...remainder]
            merged[mergeIndex] = {
              ...merged[mergeIndex],
              quantity: merged[mergeIndex].quantity + updated.quantity,
            }
            return { items: merged }
          }

          const next = [...state.items]
          next[index] = updated
          return { items: next }
        })
      },

      clearCart: () => set({ items: [] }),

      getTotal: () => {
        return get().items.reduce((total, item) => total + lineTotalAed(item), 0)
      },
    }),
    {
      name: 'bint-saeed-cart',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
      onRehydrateStorage: () => (state, error) => {
        // Must never throw — zustand only marks hydration finished after this callback.
        // A throw leaves hasHydrated=false forever while items may already be restored
        // (bag badge shows 1, checkout stuck on "Loading checkout…").
        try {
          if (error) {
            console.error('Cart rehydrate storage error', error)
            useCartStore.setState({ hasHydrated: true })
            return
          }

          if (!state) {
            useCartStore.setState({ items: [], hasHydrated: true })
            return
          }

          const { items, removedCount } = sanitizePersistedCartWithMeta(state.items)
          useCartStore.setState({
            items,
            hasHydrated: true,
          })

          if (removedCount > 0 && typeof window !== 'undefined') {
            queueMicrotask(() => {
              void import('react-hot-toast').then(({ default: toast }) => {
                toast(
                  removedCount === 1
                    ? 'One piece in your bag is no longer available and was removed.'
                    : `${removedCount} pieces in your bag are no longer available and were removed.`,
                  { id: 'cart-sanitize-removed', duration: 4200 },
                )
              })
            })
          }
        } catch (rehydrateError) {
          console.error('Cart rehydrate failed', rehydrateError)
          useCartStore.setState({ hasHydrated: true })
        }
      },
    }
  )
)

/**
 * Sync our `hasHydrated` flag after zustand persist finishes.
 * Pass `force: true` only from a timed failsafe — never on first paint,
 * or an empty cart flash can redirect checkout → bag before restore.
 */
export function ensureCartHydrated(opts?: { force?: boolean }) {
  if (typeof window === 'undefined') return
  if (useCartStore.getState().hasHydrated) return
  if (useCartStore.persist.hasHydrated() || opts?.force) {
    useCartStore.setState({ hasHydrated: true })
  }
}
