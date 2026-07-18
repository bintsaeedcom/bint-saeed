import type { AppLocale } from '@/lib/i18n/routing'

export type AccountPageCopy = {
  signedIn: string
  signedOut: string
  somethingWentWrong: string
  loading: string
  signOut: string
  signingOut: string
  favorites: string
  faq: string
}

const BY_LOCALE: Record<AppLocale, AccountPageCopy> = {
  en: {
    signedIn: 'Signed in',
    signedOut: 'Signed out',
    somethingWentWrong: 'Something went wrong',
    loading: 'Loading…',
    signOut: 'Sign out',
    signingOut: 'Signing out…',
    favorites: 'Favorites',
    faq: 'FAQ',
  },
  ar: {
    signedIn: 'تم تسجيل الدخول',
    signedOut: 'تم تسجيل الخروج',
    somethingWentWrong: 'حدث خطأ',
    loading: 'جاري التحميل…',
    signOut: 'تسجيل الخروج',
    signingOut: 'جاري الخروج…',
    favorites: 'المفضلة',
    faq: 'الأسئلة الشائعة',
  },
  fr: {
    signedIn: 'Connectée',
    signedOut: 'Déconnectée',
    somethingWentWrong: 'Une erreur est survenue',
    loading: 'Chargement…',
    signOut: 'Se déconnecter',
    signingOut: 'Déconnexion…',
    favorites: 'Favoris',
    faq: 'FAQ',
  },
  it: {
    signedIn: 'Accesso effettuato',
    signedOut: 'Disconnessa',
    somethingWentWrong: 'Si è verificato un errore',
    loading: 'Caricamento…',
    signOut: 'Esci',
    signingOut: 'Disconnessione…',
    favorites: 'Preferiti',
    faq: 'FAQ',
  },
  es: {
    signedIn: 'Sesión iniciada',
    signedOut: 'Sesión cerrada',
    somethingWentWrong: 'Algo salió mal',
    loading: 'Cargando…',
    signOut: 'Cerrar sesión',
    signingOut: 'Cerrando sesión…',
    favorites: 'Favoritos',
    faq: 'FAQ',
  },
  de: {
    signedIn: 'Angemeldet',
    signedOut: 'Abgemeldet',
    somethingWentWrong: 'Etwas ist schiefgelaufen',
    loading: 'Laden…',
    signOut: 'Abmelden',
    signingOut: 'Abmelden…',
    favorites: 'Favoriten',
    faq: 'FAQ',
  },
  nl: {
    signedIn: 'Ingelogd',
    signedOut: 'Uitgelogd',
    somethingWentWrong: 'Er is iets misgegaan',
    loading: 'Laden…',
    signOut: 'Uitloggen',
    signingOut: 'Uitloggen…',
    favorites: 'Favorieten',
    faq: 'FAQ',
  },
  pt: {
    signedIn: 'Sessão iniciada',
    signedOut: 'Sessão terminada',
    somethingWentWrong: 'Algo correu mal',
    loading: 'A carregar…',
    signOut: 'Terminar sessão',
    signingOut: 'A terminar sessão…',
    favorites: 'Favoritos',
    faq: 'FAQ',
  },
  ru: {
    signedIn: 'Вы вошли',
    signedOut: 'Вы вышли',
    somethingWentWrong: 'Произошла ошибка',
    loading: 'Загрузка…',
    signOut: 'Выйти',
    signingOut: 'Выход…',
    favorites: 'Избранное',
    faq: 'FAQ',
  },
  zh: {
    signedIn: '已登录',
    signedOut: '已退出',
    somethingWentWrong: '出现错误',
    loading: '加载中…',
    signOut: '退出登录',
    signingOut: '正在退出…',
    favorites: '收藏',
    faq: '常见问题',
  },
  id: {
    signedIn: 'Berhasil masuk',
    signedOut: 'Berhasil keluar',
    somethingWentWrong: 'Terjadi kesalahan',
    loading: 'Memuat…',
    signOut: 'Keluar',
    signingOut: 'Sedang keluar…',
    favorites: 'Favorit',
    faq: 'FAQ',
  },
  ms: {
    signedIn: 'Berjaya log masuk',
    signedOut: 'Berjaya log keluar',
    somethingWentWrong: 'Sesuatu telah berlaku',
    loading: 'Memuatkan…',
    signOut: 'Log keluar',
    signingOut: 'Sedang log keluar…',
    favorites: 'Kegemaran',
    faq: 'Soalan Lazim',
  },
}

export function getAccountPageCopy(locale: AppLocale | string): AccountPageCopy {
  const key = (locale in BY_LOCALE ? locale : 'en') as AppLocale
  return BY_LOCALE[key]
}
