import type { AppLocale } from '@/lib/i18n/routing'
import { stripLocaleFromPathname } from '@/lib/i18n/routing'

export type ErrorPageCopy = {
  title: string
  description: string
  errorId: string
  tryAgain: string
  home: string
  collection: string
  goToHome: string
  needAssistance: string
  whatsAppSupport: string
  globalTitle: string
  globalDescription: string
}

const EN: ErrorPageCopy = {
  title: 'Something Went Wrong',
  description: 'We apologize for the inconvenience. Please try again, or contact us if the problem persists.',
  errorId: 'Error ID',
  tryAgain: 'Try Again',
  home: 'Home',
  collection: 'Collection',
  goToHome: 'Go to Home',
  needAssistance: 'Need assistance?',
  whatsAppSupport: 'WhatsApp Support',
  globalTitle: 'We Hit an Unexpected Issue',
  globalDescription: 'Please try again. If the issue continues, return home and try again in a moment.',
}

const AR: ErrorPageCopy = {
  title: 'حدث خطأ ما',
  description: 'نعتذر عن الإزعاج. يرجى المحاولة مرة أخرى، أو التواصلي معنا إذا استمرت المشكلة.',
  errorId: 'رقم الخطأ',
  tryAgain: 'حاولي مرة أخرى',
  home: 'الرئيسية',
  collection: 'المجموعة',
  goToHome: 'العودة للرئيسية',
  needAssistance: 'تحتاجين مساعدة؟',
  whatsAppSupport: 'دعم واتساب',
  globalTitle: 'واجهنا مشكلة غير متوقعة',
  globalDescription: 'يرجى المحاولة مرة أخرى. إذا استمرت المشكلة، عودي للرئيسية وحاولي بعد قليل.',
}

const FR: ErrorPageCopy = {
  title: 'Une erreur est survenue',
  description: 'Nous nous excusons pour la gêne occasionnée. Veuillez réessayer, ou nous contacter si le problème persiste.',
  errorId: 'Identifiant d’erreur',
  tryAgain: 'Réessayer',
  home: 'Accueil',
  collection: 'Collection',
  goToHome: 'Retour à l’accueil',
  needAssistance: 'Besoin d’aide ?',
  whatsAppSupport: 'Assistance WhatsApp',
  globalTitle: 'Un imprévu est survenu',
  globalDescription: 'Veuillez réessayer. Si le problème continue, revenez à l’accueil et réessayez dans un instant.',
}

const IT: ErrorPageCopy = {
  title: 'Qualcosa è andato storto',
  description: 'Ci scusiamo per il disagio. Riprova oppure contattaci se il problema persiste.',
  errorId: 'ID errore',
  tryAgain: 'Riprova',
  home: 'Home',
  collection: 'Collezione',
  goToHome: 'Torna alla home',
  needAssistance: 'Hai bisogno di assistenza?',
  whatsAppSupport: 'Supporto WhatsApp',
  globalTitle: 'Si è verificato un imprevisto',
  globalDescription: 'Riprova. Se il problema continua, torna alla home e riprova tra poco.',
}

const DE: ErrorPageCopy = {
  title: 'Etwas ist schiefgelaufen',
  description: 'Wir entschuldigen uns für die Unannehmlichkeit. Bitte erneut versuchen oder uns kontaktieren, falls das Problem bestehen bleibt.',
  errorId: 'Fehler-ID',
  tryAgain: 'Erneut versuchen',
  home: 'Startseite',
  collection: 'Kollektion',
  goToHome: 'Zur Startseite',
  needAssistance: 'Benötigen Sie Hilfe?',
  whatsAppSupport: 'WhatsApp-Support',
  globalTitle: 'Ein unerwartetes Problem ist aufgetreten',
  globalDescription: 'Bitte erneut versuchen. Falls das Problem anhält, kehren Sie zur Startseite zurück und versuchen Sie es gleich noch einmal.',
}

const NL: ErrorPageCopy = {
  title: 'Er is iets misgegaan',
  description: 'Onze excuses voor het ongemak. Probeer het opnieuw, of neem contact met ons op als het probleem aanhoudt.',
  errorId: 'Fout-ID',
  tryAgain: 'Opnieuw proberen',
  home: 'Home',
  collection: 'Collectie',
  goToHome: 'Naar home',
  needAssistance: 'Hulp nodig?',
  whatsAppSupport: 'WhatsApp-ondersteuning',
  globalTitle: 'Er is een onverwacht probleem opgetreden',
  globalDescription: 'Probeer het opnieuw. Als het probleem aanhoudt, ga terug naar home en probeer het zo opnieuw.',
}

const PT: ErrorPageCopy = {
  title: 'Algo correu mal',
  description: 'Pedimos desculpa pelo inconveniente. Tente novamente ou contacte-nos se o problema persistir.',
  errorId: 'ID do erro',
  tryAgain: 'Tentar novamente',
  home: 'Início',
  collection: 'Coleção',
  goToHome: 'Ir para o início',
  needAssistance: 'Precisa de ajuda?',
  whatsAppSupport: 'Apoio WhatsApp',
  globalTitle: 'Ocorreu um imprevisto',
  globalDescription: 'Tente novamente. Se o problema continuar, volte ao início e tente daqui a pouco.',
}

const ES: ErrorPageCopy = {
  title: 'Algo salió mal',
  description: 'Pedimos disculpas por las molestias. Inténtalo de nuevo o contáctanos si el problema continúa.',
  errorId: 'ID de error',
  tryAgain: 'Intentar de nuevo',
  home: 'Inicio',
  collection: 'Colección',
  goToHome: 'Ir al inicio',
  needAssistance: '¿Necesitas ayuda?',
  whatsAppSupport: 'Soporte WhatsApp',
  globalTitle: 'Se produjo un imprevisto',
  globalDescription: 'Inténtalo de nuevo. Si el problema continúa, vuelve al inicio y prueba en un momento.',
}

const RU: ErrorPageCopy = {
  title: 'Что-то пошло не так',
  description: 'Приносим извинения за неудобство. Пожалуйста, попробуйте снова или свяжитесь с нами, если проблема сохраняется.',
  errorId: 'ID ошибки',
  tryAgain: 'Попробовать снова',
  home: 'Главная',
  collection: 'Коллекция',
  goToHome: 'На главную',
  needAssistance: 'Нужна помощь?',
  whatsAppSupport: 'Поддержка WhatsApp',
  globalTitle: 'Возникла непредвиденная проблема',
  globalDescription: 'Пожалуйста, попробуйте снова. Если проблема сохраняется, вернитесь на главную и повторите попытку через мгновение.',
}

const ZH: ErrorPageCopy = {
  title: '出现错误',
  description: '给您带来不便，敬请谅解。请重试；若问题持续，请联系我们。',
  errorId: '错误编号',
  tryAgain: '重试',
  home: '首页',
  collection: '系列',
  goToHome: '返回首页',
  needAssistance: '需要协助？',
  whatsAppSupport: 'WhatsApp 支持',
  globalTitle: '遇到意外问题',
  globalDescription: '请重试。若问题持续，请返回首页稍后再试。',
}

const ID: ErrorPageCopy = {
  title: 'Terjadi kesalahan',
  description: 'Mohon maaf atas ketidaknyamanan. Silakan coba lagi, atau hubungi kami jika masalah berlanjut.',
  errorId: 'ID kesalahan',
  tryAgain: 'Coba lagi',
  home: 'Beranda',
  collection: 'Koleksi',
  goToHome: 'Ke beranda',
  needAssistance: 'Butuh bantuan?',
  whatsAppSupport: 'Dukungan WhatsApp',
  globalTitle: 'Terjadi masalah tak terduga',
  globalDescription: 'Silakan coba lagi. Jika masalah berlanjut, kembali ke beranda dan coba sebentar lagi.',
}

const MS: ErrorPageCopy = {
  title: 'Sesuatu telah berlaku',
  description: 'Kami memohon maaf atas kesulitan ini. Sila cuba lagi, atau hubungi kami jika masalah berterusan.',
  errorId: 'ID ralat',
  tryAgain: 'Cuba lagi',
  home: 'Laman utama',
  collection: 'Koleksi',
  goToHome: 'Ke laman utama',
  needAssistance: 'Perlukan bantuan?',
  whatsAppSupport: 'Sokongan WhatsApp',
  globalTitle: 'Berlaku masalah tidak dijangka',
  globalDescription: 'Sila cuba lagi. Jika masalah berterusan, kembali ke laman utama dan cuba sebentar lagi.',
}

export function getErrorPageCopy(locale: AppLocale | string): ErrorPageCopy {
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

/** For global-error.tsx (no React context) — reads locale from URL path. */
export function getErrorPageCopyFromPathname(pathname: string): ErrorPageCopy {
  const { locale } = stripLocaleFromPathname(pathname)
  return getErrorPageCopy(locale)
}
