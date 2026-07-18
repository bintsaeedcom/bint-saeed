import type { AppLocale } from '@/lib/i18n/routing'

export type SubscribeNotifyChannel = 'email' | 'whatsapp'

export type SubscribeFormCopy = {
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
  email: 'Email Address',
  phoneOptional: 'Mobile number',
  phoneOptionalNote: '(optional)',
  phoneRequired: 'Mobile number',
  notifyEmail: 'Email updates',
  notifyWhatsApp: 'WhatsApp alerts',
  notifyHintEmail: 'Subscribe for new collections and House previews by email.',
  notifyHintWhatsApp: 'Get notified on WhatsApp when new chapters launch. Add your mobile number below.',
  phoneRequiredWhatsApp: 'Please add your mobile number for WhatsApp alerts.',
  subscribe: 'Subscribe',
  subscribing: 'Subscribing...',
  success: 'Welcome to Bint Saeed!',
  errorGeneric: 'Something went wrong. Please try again.',
  privacyLine: 'By subscribing, you agree to our Privacy Policy and consent to receive updates.',
}

const AR: SubscribeFormCopy = {
  email: 'البريد الإلكتروني',
  phoneOptional: 'رقم الجوال',
  phoneOptionalNote: '(اختياري)',
  phoneRequired: 'رقم الجوال',
  notifyEmail: 'تحديثات بالبريد',
  notifyWhatsApp: 'تنبيهات واتساب',
  notifyHintEmail: 'اشتركي لتصلكِ المجموعات الجديدة ومعاينات الدار عبر البريد.',
  notifyHintWhatsApp: 'تلقّي تنبيهاً على واتساب عند إطلاق فصول جديدة. أضيفي رقم جوالك أدناه.',
  phoneRequiredWhatsApp: 'يرجى إضافة رقم الجوال لتنبيهات واتساب.',
  subscribe: 'اشتركي',
  subscribing: 'جارٍ الاشتراك...',
  success: 'أهلاً بكِ في Bint Saeed!',
  errorGeneric: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
  privacyLine: 'بالاشتراك، توافقين على سياسة الخصوصية وتوافقين على استلام التحديثات.',
}

const FR: SubscribeFormCopy = {
  email: 'Adresse e-mail',
  phoneOptional: 'Numéro de mobile',
  phoneOptionalNote: '(facultatif)',
  phoneRequired: 'Numéro de mobile',
  notifyEmail: 'Actualités par e-mail',
  notifyWhatsApp: 'Alertes WhatsApp',
  notifyHintEmail: 'Inscrivez-vous pour recevoir les nouvelles collections et les avant-premières de la maison.',
  notifyHintWhatsApp: 'Recevez une alerte WhatsApp à chaque nouveau chapitre. Ajoutez votre numéro ci-dessous.',
  phoneRequiredWhatsApp: 'Veuillez indiquer votre numéro de mobile pour les alertes WhatsApp.',
  subscribe: 'S’inscrire',
  subscribing: 'Inscription…',
  success: 'Bienvenue chez Bint Saeed',
  errorGeneric: 'Une erreur est survenue. Veuillez réessayer.',
  privacyLine: 'En vous inscrivant, vous acceptez notre Politique de confidentialité et de recevoir nos actualités.',
}

const IT: SubscribeFormCopy = {
  email: 'Indirizzo e-mail',
  phoneOptional: 'Numero di cellulare',
  phoneOptionalNote: '(facoltativo)',
  phoneRequired: 'Numero di cellulare',
  notifyEmail: 'Aggiornamenti via e-mail',
  notifyWhatsApp: 'Avvisi WhatsApp',
  notifyHintEmail: 'Iscriviti per ricevere le nuove collezioni e le anteprime della maison via e-mail.',
  notifyHintWhatsApp: 'Ricevi un avviso WhatsApp all’uscita di ogni nuovo capitolo. Aggiungi il tuo numero qui sotto.',
  phoneRequiredWhatsApp: 'Aggiungi il tuo numero di cellulare per gli avvisi WhatsApp.',
  subscribe: 'Iscriviti',
  subscribing: 'Iscrizione…',
  success: 'Benvenuta in Bint Saeed',
  errorGeneric: 'Qualcosa è andato storto. Riprova.',
  privacyLine: 'Iscrivendoti, accetti la nostra Informativa sulla privacy e di ricevere aggiornamenti.',
}

const DE: SubscribeFormCopy = {
  email: 'E-Mail-Adresse',
  phoneOptional: 'Handynummer',
  phoneOptionalNote: '(optional)',
  phoneRequired: 'Handynummer',
  notifyEmail: 'Updates per E-Mail',
  notifyWhatsApp: 'WhatsApp-Benachrichtigungen',
  notifyHintEmail: 'Abonnieren Sie Neuheiten und Vorabblicke des Hauses per E-Mail.',
  notifyHintWhatsApp: 'Erhalten Sie eine WhatsApp-Benachrichtigung, wenn neue Kapitel erscheinen. Bitte Handynummer unten eintragen.',
  phoneRequiredWhatsApp: 'Bitte Handynummer für WhatsApp-Benachrichtigungen angeben.',
  subscribe: 'Abonnieren',
  subscribing: 'Wird abonniert…',
  success: 'Willkommen bei Bint Saeed',
  errorGeneric: 'Etwas ist schiefgelaufen. Bitte erneut versuchen.',
  privacyLine: 'Mit der Anmeldung stimmen Sie unserer Datenschutzrichtlinie und dem Erhalt von Updates zu.',
}

const NL: SubscribeFormCopy = {
  email: 'E-mailadres',
  phoneOptional: 'Mobiel nummer',
  phoneOptionalNote: '(optioneel)',
  phoneRequired: 'Mobiel nummer',
  notifyEmail: 'Updates per e-mail',
  notifyWhatsApp: 'WhatsApp-meldingen',
  notifyHintEmail: 'Schrijf u in voor nieuwe collecties en previews van het Huis per e-mail.',
  notifyHintWhatsApp: 'Ontvang een melding via WhatsApp wanneer nieuwe hoofdstukken verschijnen. Vul hieronder uw mobiele nummer in.',
  phoneRequiredWhatsApp: 'Voeg uw mobiele nummer toe voor WhatsApp-meldingen.',
  subscribe: 'Inschrijven',
  subscribing: 'Bezig met inschrijven...',
  success: 'Welkom bij Bint Saeed!',
  errorGeneric: 'Er is iets misgegaan. Probeer het opnieuw.',
  privacyLine: 'Door u in te schrijven, gaat u akkoord met ons privacybeleid en met het ontvangen van updates.',
}

const PT: SubscribeFormCopy = {
  email: 'Endereço de e-mail',
  phoneOptional: 'Número de telemóvel',
  phoneOptionalNote: '(opcional)',
  phoneRequired: 'Número de telemóvel',
  notifyEmail: 'Atualizações por e-mail',
  notifyWhatsApp: 'Alertas WhatsApp',
  notifyHintEmail: 'Subscreva para receber novas coleções e prévias da maison por e-mail.',
  notifyHintWhatsApp: 'Receba um alerta WhatsApp quando novos capítulos forem lançados. Adicione o seu número abaixo.',
  phoneRequiredWhatsApp: 'Adicione o seu número de telemóvel para alertas WhatsApp.',
  subscribe: 'Subscrever',
  subscribing: 'A subscrever…',
  success: 'Bem-vinda à Bint Saeed',
  errorGeneric: 'Algo correu mal. Tente novamente.',
  privacyLine: 'Ao subscrever, aceita a nossa Política de privacidade e o envio de atualizações.',
}

const ES: SubscribeFormCopy = {
  email: 'Correo electrónico',
  phoneOptional: 'Número de móvil',
  phoneOptionalNote: '(opcional)',
  phoneRequired: 'Número de móvil',
  notifyEmail: 'Novedades por correo',
  notifyWhatsApp: 'Alertas WhatsApp',
  notifyHintEmail: 'Suscríbete para recibir nuevas colecciones y avances de la maison por correo.',
  notifyHintWhatsApp: 'Recibe un aviso por WhatsApp cuando se lancen nuevos capítulos. Añade tu móvil abajo.',
  phoneRequiredWhatsApp: 'Añade tu número de móvil para las alertas de WhatsApp.',
  subscribe: 'Suscribirse',
  subscribing: 'Suscribiendo…',
  success: 'Bienvenida a Bint Saeed',
  errorGeneric: 'Algo salió mal. Inténtalo de nuevo.',
  privacyLine: 'Al suscribirte, aceptas nuestra Política de privacidad y recibir actualizaciones.',
}

const RU: SubscribeFormCopy = {
  email: 'Адрес эл. почты',
  phoneOptional: 'Мобильный номер',
  phoneOptionalNote: '(необязательно)',
  phoneRequired: 'Мобильный номер',
  notifyEmail: 'Новости по почте',
  notifyWhatsApp: 'Уведомления WhatsApp',
  notifyHintEmail: 'Подпишитесь, чтобы получать новые коллекции и превью дома по электронной почте.',
  notifyHintWhatsApp: 'Получайте уведомление в WhatsApp о новых главах. Укажите мобильный номер ниже.',
  phoneRequiredWhatsApp: 'Укажите мобильный номер для уведомлений WhatsApp.',
  subscribe: 'Подписаться',
  subscribing: 'Подписка…',
  success: 'Добро пожаловать в Bint Saeed',
  errorGeneric: 'Произошла ошибка. Пожалуйста, попробуйте снова.',
  privacyLine: 'Подписываясь, вы соглашаетесь с Политикой конфиденциальности и получением обновлений.',
}

const ZH: SubscribeFormCopy = {
  email: '电子邮箱',
  phoneOptional: '手机号码',
  phoneOptionalNote: '（选填）',
  phoneRequired: '手机号码',
  notifyEmail: '邮件更新',
  notifyWhatsApp: 'WhatsApp 提醒',
  notifyHintEmail: '订阅以通过邮件接收新系列与品牌预览。',
  notifyHintWhatsApp: '新章节发布时通过 WhatsApp 通知您。请在下方填写手机号码。',
  phoneRequiredWhatsApp: '请填写手机号码以接收 WhatsApp 提醒。',
  subscribe: '订阅',
  subscribing: '订阅中…',
  success: '欢迎加入 Bint Saeed',
  errorGeneric: '出现错误，请重试。',
  privacyLine: '订阅即表示您同意我们的隐私政策，并同意接收更新。',
}

const ID: SubscribeFormCopy = {
  email: 'Alamat email',
  phoneOptional: 'Nomor ponsel',
  phoneOptionalNote: '(opsional)',
  phoneRequired: 'Nomor ponsel',
  notifyEmail: 'Pembaruan email',
  notifyWhatsApp: 'Peringatan WhatsApp',
  notifyHintEmail: 'Berlangganan untuk koleksi baru dan pratinjau Maison melalui email.',
  notifyHintWhatsApp: 'Dapatkan pemberitahuan WhatsApp saat bab baru diluncurkan. Tambahkan nomor ponsel di bawah.',
  phoneRequiredWhatsApp: 'Tambahkan nomor ponsel untuk peringatan WhatsApp.',
  subscribe: 'Berlangganan',
  subscribing: 'Berlangganan…',
  success: 'Selamat datang di Bint Saeed',
  errorGeneric: 'Terjadi kesalahan. Silakan coba lagi.',
  privacyLine: 'Dengan berlangganan, Anda menyetujui Kebijakan Privasi kami dan menerima pembaruan.',
}

const MS: SubscribeFormCopy = {
  email: 'Alamat e-mel',
  phoneOptional: 'Nombor telefon bimbit',
  phoneOptionalNote: '(pilihan)',
  phoneRequired: 'Nombor telefon bimbit',
  notifyEmail: 'Kemas kini e-mel',
  notifyWhatsApp: 'Makluman WhatsApp',
  notifyHintEmail: 'Langgan untuk koleksi baharu dan pratonton Maison melalui e-mel.',
  notifyHintWhatsApp: 'Dapatkan makluman WhatsApp apabila bab baharu dilancarkan. Tambah nombor telefon di bawah.',
  phoneRequiredWhatsApp: 'Sila tambah nombor telefon bimbit untuk makluman WhatsApp.',
  subscribe: 'Langgan',
  subscribing: 'Melanggan…',
  success: 'Selamat datang ke Bint Saeed',
  errorGeneric: 'Sesuatu telah berlaku. Sila cuba lagi.',
  privacyLine: 'Dengan melanggan, anda bersetuju dengan Dasar Privasi kami dan menerima kemas kini.',
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
