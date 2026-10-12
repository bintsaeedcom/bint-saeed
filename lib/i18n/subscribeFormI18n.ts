import type { AppLocale } from '@/lib/i18n/routing'

export type SubscribeNotifyChannel = 'email' | 'whatsapp'

export type SubscribeFormCopy = {
  fullName: string
  email: string
  phoneOptional: string
  phoneOptionalNote: string
  phoneRequired: string
  notifyEmail: string
  notifyWhatsApp: string
  notifyHintEmail: string
  notifyHintWhatsApp: string
  phoneRequiredWhatsApp: string
  subscribe: string
  subscribing: string
  success: string
  errorGeneric: string
  privacyLine: string
}

const EN: SubscribeFormCopy = {
  fullName: 'Full name',
  email: 'Email Address',
  phoneOptional: 'Mobile number',
  phoneOptionalNote: '(optional)',
  phoneRequired: 'Mobile number',
  notifyEmail: 'Email updates',
  notifyWhatsApp: 'WhatsApp alerts',
  notifyHintEmail: 'Receive Private Sale access and new collections by email.',
  notifyHintWhatsApp: 'Receive Private Sale access on WhatsApp. Add your mobile number below.',
  phoneRequiredWhatsApp: 'Please add your mobile number for WhatsApp alerts.',
  subscribe: 'Sign up',
  subscribing: 'Signing up…',
  success: 'Welcome to Bint Saeed!',
  errorGeneric: 'Something went wrong. Please try again.',
  privacyLine: 'By signing up, you agree to our Privacy Policy and consent to receive updates.',
}

const AR: SubscribeFormCopy = {
  fullName: 'الاسم الكامل',
  email: 'البريد الإلكتروني',
  phoneOptional: 'رقم الجوال',
  phoneOptionalNote: '(اختياري)',
  phoneRequired: 'رقم الجوال',
  notifyEmail: 'تحديثات بالبريد',
  notifyWhatsApp: 'تنبيهات واتساب',
  notifyHintEmail: 'احصلي على دخول المبيعات الخاصة والمجموعات الجديدة عبر البريد.',
  notifyHintWhatsApp: 'احصلي على دخول المبيعات الخاصة عبر واتساب. أضيفي رقم جوالك أدناه.',
  phoneRequiredWhatsApp: 'يرجى إضافة رقم الجوال لتنبيهات واتساب.',
  subscribe: 'سجّلي',
  subscribing: 'جارٍ التسجيل…',
  success: 'أهلاً بكِ في Bint Saeed!',
  errorGeneric: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
  privacyLine: 'بالتسجيل، توافقين على سياسة الخصوصية وعلى استلام التحديثات.',
}

const FR: SubscribeFormCopy = {
  fullName: 'Nom complet',
  email: 'Adresse e-mail',
  phoneOptional: 'Numéro de mobile',
  phoneOptionalNote: '(facultatif)',
  phoneRequired: 'Numéro de mobile',
  notifyEmail: 'Actualités par e-mail',
  notifyWhatsApp: 'Alertes WhatsApp',
  notifyHintEmail: 'Recevez l’accès aux Ventes Privées et aux nouvelles collections par e-mail.',
  notifyHintWhatsApp: 'Recevez l’accès aux Ventes Privées sur WhatsApp. Ajoutez votre numéro ci-dessous.',
  phoneRequiredWhatsApp: 'Veuillez indiquer votre numéro de mobile pour les alertes WhatsApp.',
  subscribe: 'S’inscrire',
  subscribing: 'Inscription…',
  success: 'Bienvenue chez Bint Saeed',
  errorGeneric: 'Une erreur est survenue. Veuillez réessayer.',
  privacyLine: 'En vous inscrivant, vous acceptez notre Politique de confidentialité et de recevoir nos actualités.',
}

const IT: SubscribeFormCopy = {
  fullName: 'Nome completo',
  email: 'Indirizzo e-mail',
  phoneOptional: 'Numero di cellulare',
  phoneOptionalNote: '(facoltativo)',
  phoneRequired: 'Numero di cellulare',
  notifyEmail: 'Aggiornamenti via e-mail',
  notifyWhatsApp: 'Avvisi WhatsApp',
  notifyHintEmail: 'Ricevi l’accesso alle Vendite Private e alle nuove collezioni via e-mail.',
  notifyHintWhatsApp: 'Ricevi l’accesso alle Vendite Private su WhatsApp. Aggiungi il tuo numero qui sotto.',
  phoneRequiredWhatsApp: 'Aggiungi il tuo numero di cellulare per gli avvisi WhatsApp.',
  subscribe: 'Iscriviti',
  subscribing: 'Iscrizione…',
  success: 'Benvenuta in Bint Saeed',
  errorGeneric: 'Qualcosa è andato storto. Riprova.',
  privacyLine: 'Iscrivendoti, accetti la nostra Informativa sulla privacy e di ricevere aggiornamenti.',
}

const DE: SubscribeFormCopy = {
  fullName: 'Vollständiger Name',
  email: 'E-Mail-Adresse',
  phoneOptional: 'Handynummer',
  phoneOptionalNote: '(optional)',
  phoneRequired: 'Handynummer',
  notifyEmail: 'Updates per E-Mail',
  notifyWhatsApp: 'WhatsApp-Benachrichtigungen',
  notifyHintEmail: 'Erhalten Sie Zugang zu Private Sales und neuen Kollektionen per E-Mail.',
  notifyHintWhatsApp: 'Erhalten Sie Zugang zu Private Sales per WhatsApp. Bitte Handynummer unten eintragen.',
  phoneRequiredWhatsApp: 'Bitte Handynummer für WhatsApp-Benachrichtigungen angeben.',
  subscribe: 'Anmelden',
  subscribing: 'Wird angemeldet…',
  success: 'Willkommen bei Bint Saeed',
  errorGeneric: 'Etwas ist schiefgelaufen. Bitte erneut versuchen.',
  privacyLine: 'Mit der Anmeldung stimmen Sie unserer Datenschutzrichtlinie und dem Erhalt von Updates zu.',
}

const NL: SubscribeFormCopy = {
  fullName: 'Volledige naam',
  email: 'E-mailadres',
  phoneOptional: 'Mobiel nummer',
  phoneOptionalNote: '(optioneel)',
  phoneRequired: 'Mobiel nummer',
  notifyEmail: 'Updates per e-mail',
  notifyWhatsApp: 'WhatsApp-meldingen',
  notifyHintEmail: 'Ontvang toegang tot Private Sales en nieuwe collecties per e-mail.',
  notifyHintWhatsApp: 'Ontvang toegang tot Private Sales via WhatsApp. Vul hieronder uw mobiele nummer in.',
  phoneRequiredWhatsApp: 'Voeg uw mobiele nummer toe voor WhatsApp-meldingen.',
  subscribe: 'Aanmelden',
  subscribing: 'Bezig met aanmelden…',
  success: 'Welkom bij Bint Saeed!',
  errorGeneric: 'Er is iets misgegaan. Probeer het opnieuw.',
  privacyLine: 'Door u aan te melden, gaat u akkoord met ons privacybeleid en met het ontvangen van updates.',
}

const PT: SubscribeFormCopy = {
  fullName: 'Nome completo',
  email: 'Endereço de e-mail',
  phoneOptional: 'Número de telemóvel',
  phoneOptionalNote: '(opcional)',
  phoneRequired: 'Número de telemóvel',
  notifyEmail: 'Atualizações por e-mail',
  notifyWhatsApp: 'Alertas WhatsApp',
  notifyHintEmail: 'Receba acesso às Vendas Privadas e às novas coleções por e-mail.',
  notifyHintWhatsApp: 'Receba acesso às Vendas Privadas no WhatsApp. Adicione o seu número abaixo.',
  phoneRequiredWhatsApp: 'Adicione o seu número de telemóvel para alertas WhatsApp.',
  subscribe: 'Inscrever-se',
  subscribing: 'A inscrever…',
  success: 'Bem-vinda à Bint Saeed',
  errorGeneric: 'Algo correu mal. Tente novamente.',
  privacyLine: 'Ao inscrever-se, aceita a nossa Política de privacidade e o envio de atualizações.',
}

const ES: SubscribeFormCopy = {
  fullName: 'Nombre completo',
  email: 'Correo electrónico',
  phoneOptional: 'Número de móvil',
  phoneOptionalNote: '(opcional)',
  phoneRequired: 'Número de móvil',
  notifyEmail: 'Novedades por correo',
  notifyWhatsApp: 'Alertas WhatsApp',
  notifyHintEmail: 'Recibe acceso a las Ventas Privadas y a las nuevas colecciones por correo.',
  notifyHintWhatsApp: 'Recibe acceso a las Ventas Privadas por WhatsApp. Añade tu móvil abajo.',
  phoneRequiredWhatsApp: 'Añade tu número de móvil para las alertas de WhatsApp.',
  subscribe: 'Registrarse',
  subscribing: 'Registrando…',
  success: 'Bienvenida a Bint Saeed',
  errorGeneric: 'Algo salió mal. Inténtalo de nuevo.',
  privacyLine: 'Al registrarte, aceptas nuestra Política de privacidad y recibir actualizaciones.',
}

const RU: SubscribeFormCopy = {
  fullName: 'Полное имя',
  email: 'Адрес эл. почты',
  phoneOptional: 'Мобильный номер',
  phoneOptionalNote: '(необязательно)',
  phoneRequired: 'Мобильный номер',
  notifyEmail: 'Новости по почте',
  notifyWhatsApp: 'Уведомления WhatsApp',
  notifyHintEmail: 'Получайте доступ к закрытым продажам и новым коллекциям по электронной почте.',
  notifyHintWhatsApp: 'Получайте доступ к закрытым продажам в WhatsApp. Укажите мобильный номер ниже.',
  phoneRequiredWhatsApp: 'Укажите мобильный номер для уведомлений WhatsApp.',
  subscribe: 'Записаться',
  subscribing: 'Запись…',
  success: 'Добро пожаловать в Bint Saeed',
  errorGeneric: 'Произошла ошибка. Пожалуйста, попробуйте снова.',
  privacyLine: 'Записываясь, вы соглашаетесь с Политикой конфиденциальности и получением обновлений.',
}

const ZH: SubscribeFormCopy = {
  fullName: '全名',
  email: '电子邮箱',
  phoneOptional: '手机号码',
  phoneOptionalNote: '（选填）',
  phoneRequired: '手机号码',
  notifyEmail: '邮件更新',
  notifyWhatsApp: 'WhatsApp 提醒',
  notifyHintEmail: '通过邮件获取私享特卖与新系列资讯。',
  notifyHintWhatsApp: '通过 WhatsApp 获取私享特卖资讯。请在下方填写手机号码。',
  phoneRequiredWhatsApp: '请填写手机号码以接收 WhatsApp 提醒。',
  subscribe: '立即登记',
  subscribing: '登记中…',
  success: '欢迎加入 Bint Saeed',
  errorGeneric: '出现错误，请重试。',
  privacyLine: '登记即表示您同意我们的隐私政策，并同意接收更新。',
}

const ID: SubscribeFormCopy = {
  fullName: 'Nama lengkap',
  email: 'Alamat email',
  phoneOptional: 'Nomor ponsel',
  phoneOptionalNote: '(opsional)',
  phoneRequired: 'Nomor ponsel',
  notifyEmail: 'Pembaruan email',
  notifyWhatsApp: 'Peringatan WhatsApp',
  notifyHintEmail: 'Dapatkan akses Private Sale dan koleksi baru melalui email.',
  notifyHintWhatsApp: 'Dapatkan akses Private Sale melalui WhatsApp. Tambahkan nomor ponsel di bawah.',
  phoneRequiredWhatsApp: 'Tambahkan nomor ponsel untuk peringatan WhatsApp.',
  subscribe: 'Daftar',
  subscribing: 'Mendaftar…',
  success: 'Selamat datang di Bint Saeed',
  errorGeneric: 'Terjadi kesalahan. Silakan coba lagi.',
  privacyLine: 'Dengan mendaftar, Anda menyetujui Kebijakan Privasi kami dan menerima pembaruan.',
}

const MS: SubscribeFormCopy = {
  fullName: 'Nama penuh',
  email: 'Alamat e-mel',
  phoneOptional: 'Nombor telefon bimbit',
  phoneOptionalNote: '(pilihan)',
  phoneRequired: 'Nombor telefon bimbit',
  notifyEmail: 'Kemas kini e-mel',
  notifyWhatsApp: 'Makluman WhatsApp',
  notifyHintEmail: 'Terima akses Jualan Peribadi dan koleksi baharu melalui e-mel.',
  notifyHintWhatsApp: 'Terima akses Jualan Peribadi melalui WhatsApp. Tambah nombor telefon di bawah.',
  phoneRequiredWhatsApp: 'Sila tambah nombor telefon bimbit untuk makluman WhatsApp.',
  subscribe: 'Daftar',
  subscribing: 'Mendaftar…',
  success: 'Selamat datang ke Bint Saeed',
  errorGeneric: 'Sesuatu telah berlaku. Sila cuba lagi.',
  privacyLine: 'Dengan mendaftar, anda bersetuju dengan Dasar Privasi kami dan menerima kemas kini.',
}

export function getSubscribeFormCopy(locale: AppLocale | string): SubscribeFormCopy {
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
