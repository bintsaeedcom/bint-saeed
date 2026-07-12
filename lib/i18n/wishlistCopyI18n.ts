import type { AppLocale } from '@/lib/i18n/routing'

type WishlistCopy = {
  title: string
  intro: string
  emptyTitle: string
  emptyDescription: string
  remove: string
}

const EN: WishlistCopy = {
  title: 'Favorites',
  intro:
    'Pieces you heart are saved in this browser. When account sign-in is available, favorites can sync to your profile.',
  emptyTitle: 'No saved pieces yet',
  emptyDescription: 'Explore the collection and tap the heart on any product.',
  remove: 'Remove from favorites',
}

const AR: WishlistCopy = {
  title: 'المفضلة',
  intro: 'تُحفظ القطع على هذا المتصفح. عند تفعيل تسجيل الدخول لاحقًا، يمكن ربط المفضلة بحسابك.',
  emptyTitle: 'لا توجد قطع محفوظة بعد',
  emptyDescription: 'تسوقي المجموعة وأضيفي ما يعجبك.',
  remove: 'إزالة من المفضلة',
}

const FR: WishlistCopy = {
  title: 'Favoris',
  intro: 'Les pièces que vous aimez sont enregistrées dans ce navigateur.',
  emptyTitle: 'Aucune pièce enregistrée',
  emptyDescription: 'Explorez la collection et touchez le cœur sur un produit.',
  remove: 'Retirer des favoris',
}

export function getWishlistCopy(locale: AppLocale | string): WishlistCopy {
  if (locale === 'ar') return AR
  if (locale === 'fr') return FR
  return EN
}
