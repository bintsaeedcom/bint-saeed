import type { AppLocale } from '@/lib/i18n/routing'

/** Screen-reader labels for bag qty ± and remove — Part 4 commerce chrome. */
type CartAriaCopy = {
  decreaseQuantity: string
  increaseQuantity: string
  removeItem: string
}

const EN: CartAriaCopy = {
  decreaseQuantity: 'Decrease quantity',
  increaseQuantity: 'Increase quantity',
  removeItem: 'Remove item',
}

const AR: CartAriaCopy = {
  decreaseQuantity: 'تقليل الكمية',
  increaseQuantity: 'زيادة الكمية',
  removeItem: 'إزالة القطعة',
}

const FR: CartAriaCopy = {
  decreaseQuantity: 'Diminuer la quantité',
  increaseQuantity: 'Augmenter la quantité',
  removeItem: "Retirer l'article",
}

export function getCartAriaCopy(locale: AppLocale | string): CartAriaCopy {
  if (locale === 'ar') return AR
  if (locale === 'fr') return FR
  return EN
}
