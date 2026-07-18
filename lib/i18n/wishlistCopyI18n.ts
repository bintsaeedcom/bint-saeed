import type { AppLocale } from '@/lib/i18n/routing'

type WishlistCopy = {
  title: string
  intro: string
  emptyTitle: string
  emptyDescription: string
  /** Aria / button — save (not yet favorited). */
  save: string
  /** Aria / button — remove (already favorited). */
  remove: string
  savedToast: string
  removedToast: string
}

const EN: WishlistCopy = {
  title: 'Favorites',
  intro:
    'Pieces you heart are saved in this browser. When account sign-in is available, favorites can sync to your profile.',
  emptyTitle: 'No saved pieces yet',
  emptyDescription: 'Your next Bint Saeed piece may already be waiting.',
  save: 'Save to favorites',
  remove: 'Remove from favorites',
  savedToast: 'Saved to favorites',
  removedToast: 'Removed from favorites',
}

const AR: WishlistCopy = {
  title: 'المفضلة',
  intro: 'تُحفظ القطع على هذا المتصفح. عند تفعيل تسجيل الدخول لاحقًا، يمكن ربط المفضلة بحسابك.',
  emptyTitle: 'لا توجد قطع محفوظة بعد',
  emptyDescription: 'قطعتك التالية من Bint Saeed قد تكون بانتظارك الآن.',
  save: 'احفظي في المفضلة',
  remove: 'إزالة من المفضلة',
  savedToast: 'أُضيفت إلى المفضلة',
  removedToast: 'أُزيلت من المفضلة',
}

const FR: WishlistCopy = {
  title: 'Favoris',
  intro:
    'Les pièces que vous aimez sont enregistrées dans ce navigateur. Lorsque la connexion compte sera disponible, vos favoris pourront être synchronisés.',
  emptyTitle: 'Aucune pièce enregistrée',
  emptyDescription: 'Votre prochaine pièce Bint Saeed vous attend peut-être déjà.',
  save: 'Enregistrer dans les favoris',
  remove: 'Retirer des favoris',
  savedToast: 'Ajouté aux favoris',
  removedToast: 'Retiré des favoris',
}

const IT: WishlistCopy = {
  title: 'Preferiti',
  intro:
    'I capi che salvi restano in questo browser. Quando l’accesso all’account sarà disponibile, i preferiti potranno sincronizzarsi con il tuo profilo.',
  emptyTitle: 'Nessun pezzo salvato',
  emptyDescription: 'Il tuo prossimo pezzo Bint Saeed potrebbe già attenderti.',
  save: 'Salva nei preferiti',
  remove: 'Rimuovi dai preferiti',
  savedToast: 'Salvato nei preferiti',
  removedToast: 'Rimosso dai preferiti',
}

const DE: WishlistCopy = {
  title: 'Favoriten',
  intro:
    'Mit dem Herz markierte Stücke werden in diesem Browser gespeichert. Sobald die Kontoanmeldung verfügbar ist, können Favoriten mit Ihrem Profil synchronisiert werden.',
  emptyTitle: 'Noch keine gespeicherten Stücke',
  emptyDescription: 'Ihr nächstes Bint Saeed Stück wartet vielleicht schon.',
  save: 'Zu Favoriten speichern',
  remove: 'Aus Favoriten entfernen',
  savedToast: 'Zu Favoriten gespeichert',
  removedToast: 'Aus Favoriten entfernt',
}

const NL: WishlistCopy = {
  title: 'Favorieten',
  intro:
    'Stukken die u een hart geeft, worden in deze browser bewaard. Wanneer accountaanmelding beschikbaar is, kunnen favorieten met uw profiel synchroniseren.',
  emptyTitle: 'Nog geen opgeslagen stukken',
  emptyDescription: 'Uw volgende Bint Saeed-stuk wacht misschien al.',
  save: 'Opslaan in favorieten',
  remove: 'Verwijderen uit favorieten',
  savedToast: 'Opgeslagen in favorieten',
  removedToast: 'Verwijderd uit favorieten',
}

const PT: WishlistCopy = {
  title: 'Favoritos',
  intro:
    'As peças que guarda ficam neste browser. Quando o início de sessão estiver disponível, os favoritos poderão sincronizar com o seu perfil.',
  emptyTitle: 'Ainda sem peças guardadas',
  emptyDescription: 'A sua próxima peça Bint Saeed pode já estar à espera.',
  save: 'Guardar nos favoritos',
  remove: 'Remover dos favoritos',
  savedToast: 'Guardado nos favoritos',
  removedToast: 'Removido dos favoritos',
}

const ES: WishlistCopy = {
  title: 'Favoritos',
  intro:
    'Las piezas que guardas quedan en este navegador. Cuando el inicio de sesión esté disponible, los favoritos podrán sincronizarse con tu perfil.',
  emptyTitle: 'Aún no hay piezas guardadas',
  emptyDescription: 'Tu próxima pieza Bint Saeed puede estar ya esperándote.',
  save: 'Guardar en favoritos',
  remove: 'Quitar de favoritos',
  savedToast: 'Guardado en favoritos',
  removedToast: 'Eliminado de favoritos',
}

const RU: WishlistCopy = {
  title: 'Избранное',
  intro:
    'Отмеченные сердцем вещи сохраняются в этом браузере. Когда вход в аккаунт станет доступен, избранное сможет синхронизироваться с профилем.',
  emptyTitle: 'Пока нет сохранённых вещей',
  emptyDescription: 'Ваша следующая вещь Bint Saeed, возможно, уже ждёт вас.',
  save: 'Сохранить в избранное',
  remove: 'Удалить из избранного',
  savedToast: 'Сохранено в избранное',
  removedToast: 'Удалено из избранного',
}

const ZH: WishlistCopy = {
  title: '收藏',
  intro: '您心选的单品保存在此浏览器中。待账户登录可用时，收藏可同步至您的个人资料。',
  emptyTitle: '尚未收藏单品',
  emptyDescription: '您的下一件 Bint Saeed 单品或许已在等待。',
  save: '加入收藏',
  remove: '移出收藏',
  savedToast: '已加入收藏',
  removedToast: '已移出收藏',
}

const ID: WishlistCopy = {
  title: 'Favorit',
  intro:
    'Potongan yang Anda tandai tersimpan di peramban ini. Saat masuk akun tersedia, favorit dapat disinkronkan ke profil Anda.',
  emptyTitle: 'Belum ada potongan tersimpan',
  emptyDescription: 'Potongan Bint Saeed berikutnya mungkin sudah menunggu Anda.',
  save: 'Simpan ke favorit',
  remove: 'Hapus dari favorit',
  savedToast: 'Disimpan ke favorit',
  removedToast: 'Dihapus dari favorit',
}

const MS: WishlistCopy = {
  title: 'Kegemaran',
  intro:
    'Potongan yang anda tandai disimpan dalam pelayar ini. Apabila log masuk akaun tersedia, kegemaran boleh disegerakkan ke profil anda.',
  emptyTitle: 'Belum ada potongan disimpan',
  emptyDescription: 'Potongan Bint Saeed seterusnya mungkin sudah menanti anda.',
  save: 'Simpan ke kegemaran',
  remove: 'Buang dari kegemaran',
  savedToast: 'Disimpan ke kegemaran',
  removedToast: 'Dibuang dari kegemaran',
}

export function getWishlistCopy(locale: AppLocale | string): WishlistCopy {
  if (locale === 'ar') return AR
  if (locale === 'fr') return FR
  if (locale === 'it') return IT
  if (locale === 'de') return DE
  if (locale === 'nl') return NL
  if (locale === 'pt') return PT
  if (locale === 'es') return ES
  if (locale === 'ru') return RU
  if (locale === 'zh') return ZH
  if (locale === 'id') return ID
  if (locale === 'ms') return MS
  return EN
}
