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
  emptyDescription: 'Your next Bint Saeed piece may already be waiting.',
  remove: 'Remove from favorites',
}

const AR: WishlistCopy = {
  title: 'المفضلة',
  intro: 'تُحفظ القطع على هذا المتصفح. عند تفعيل تسجيل الدخول لاحقًا، يمكن ربط المفضلة بحسابك.',
  emptyTitle: 'لا توجد قطع محفوظة بعد',
  emptyDescription: 'قطعتك التالية من Bint Saeed قد تكون بانتظارك الآن.',
  remove: 'إزالة من المفضلة',
}

const FR: WishlistCopy = {
  title: 'Favoris',
  intro: 'Les pièces que vous aimez sont enregistrées dans ce navigateur.',
  emptyTitle: 'Aucune pièce enregistrée',
  emptyDescription: 'Votre prochaine piece Bint Saeed vous attend peut-etre deja.',
  remove: 'Retirer des favoris',
}

export function getWishlistCopy(locale: AppLocale | string): WishlistCopy {
  if (locale === 'ar') return AR
  if (locale === 'fr') return FR
  return EN
}
