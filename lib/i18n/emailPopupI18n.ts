import type { AppLocale } from '@/lib/i18n/routing'

export type EmailPopupCopy = {
  headline: string
  body: string
  fullName: string
  email: string
  signingUp: string
  signUp: string
  privacyLine: string
  welcome: string
  discountIntro: string
  copyHint: string
  privilegeNote: string
  startShopping: string
  emailCheckError: string
  genericError: string
  codeCopied: string
  teaserLabel: string
  teaserOpenAria: string
  teaserDismissAria: string
  closeAria: string
}

const EN: EmailPopupCopy = {
  headline: 'Welcome gift',
  body: 'Receive a welcome gift on your first order.',
  fullName: 'Full name',
  email: 'Email',
  signingUp: 'Redeeming…',
  signUp: 'Redeem',
  privacyLine: 'By joining, you agree to our Privacy Policy and to receiving occasional notes from the house.',
  welcome: 'Your welcome gift',
  discountIntro: 'Present this code at checkout on your first order:',
  copyHint: 'Click to copy',
  privilegeNote: 'After your first qualifying order, a personal 10% code — locked to this email — will unlock.',
  startShopping: 'Continue shopping',
  emailCheckError: 'Please check your email address.',
  genericError: 'Something went wrong. Please try again.',
  codeCopied: 'Code copied',
  teaserLabel: 'Welcome gift',
  teaserOpenAria: 'Open your welcome gift',
  teaserDismissAria: 'Dismiss welcome gift',
  closeAria: 'Close',
}

const AR: EmailPopupCopy = {
  headline: 'هدية ترحيبية',
  body: 'احصلي على هدية ترحيبية مع طلبك الأول.',
  fullName: 'الاسم الكامل',
  email: 'البريد الإلكتروني',
  signingUp: 'جارٍ التفعيل…',
  signUp: 'استلمي هديتك',
  privacyLine: 'بالانضمام، توافقين على سياسة الخصوصية وتلقي رسائل من الدار بين الحين والآخر.',
  welcome: 'هديتك الترحيبية',
  discountIntro: 'استخدمي هذا الرمز عند الدفع في طلبك الأول:',
  copyHint: 'اضغطي للنسخ',
  privilegeNote: 'بعد أول طلب مؤهّل، يُفعَّل رمز شخصي بخصم 10% مرتبط بهذا البريد.',
  startShopping: 'تابعي التسوق',
  emailCheckError: 'يرجى التحقق من البريد الإلكتروني.',
  genericError: 'حدث خطأ. حاولي مرة أخرى.',
  codeCopied: 'تم نسخ الرمز',
  teaserLabel: 'هدية ترحيبية',
  teaserOpenAria: 'افتحي هديتك الترحيبية',
  teaserDismissAria: 'إخفاء الهدية الترحيبية',
  closeAria: 'إغلاق',
}

const FR: EmailPopupCopy = {
  headline: 'Cadeau de bienvenue',
  body: 'Recevez un cadeau de bienvenue avec votre première commande.',
  fullName: 'Nom complet',
  email: 'E-mail',
  signingUp: 'Un instant…',
  signUp: 'Recevoir mon cadeau',
  privacyLine: 'En vous inscrivant, vous acceptez notre Politique de confidentialité et de recevoir occasionnellement des nouvelles de la Maison.',
  welcome: 'Votre cadeau de bienvenue',
  discountIntro: 'Saisissez ce code lors du paiement de votre première commande :',
  copyHint: 'Cliquez pour copier',
  privilegeNote: 'Après votre première commande éligible, un code personnel −10 % — lié à cet e-mail — s’active.',
  startShopping: 'Poursuivre la découverte',
  emailCheckError: 'Veuillez vérifier votre adresse e-mail.',
  genericError: 'Une erreur est survenue. Veuillez réessayer.',
  codeCopied: 'Code copié',
  teaserLabel: 'Cadeau de bienvenue',
  teaserOpenAria: 'Ouvrir votre cadeau de bienvenue',
  teaserDismissAria: 'Masquer le cadeau de bienvenue',
  closeAria: 'Fermer',
}

const IT: EmailPopupCopy = {
  headline: 'Regalo di benvenuto',
  body: 'Ricevi un regalo di benvenuto con il tuo primo ordine.',
  fullName: 'Nome completo',
  email: 'E-mail',
  signingUp: 'Un istante…',
  signUp: 'Ricevi il regalo',
  privacyLine: 'Iscrivendoti, accetti la nostra Informativa sulla privacy e di ricevere occasionali note dalla Maison.',
  welcome: 'Il tuo regalo di benvenuto',
  discountIntro: 'Inserisci questo codice al checkout del tuo primo ordine:',
  copyHint: 'Clicca per copiare',
  privilegeNote: 'Dopo il primo ordine idoneo, un codice personale −10% — legato a questa e-mail — si attiva.',
  startShopping: 'Continua a scoprire',
  emailCheckError: 'Controlla il tuo indirizzo e-mail.',
  genericError: 'Qualcosa è andato storto. Riprova.',
  codeCopied: 'Codice copiato',
  teaserLabel: 'Regalo di benvenuto',
  teaserOpenAria: 'Apri il tuo regalo di benvenuto',
  teaserDismissAria: 'Nascondi il regalo di benvenuto',
  closeAria: 'Chiudi',
}

const DE: EmailPopupCopy = {
  headline: 'Willkommensgeschenk',
  body: 'Erhalten Sie ein Willkommensgeschenk zu Ihrer ersten Bestellung.',
  fullName: 'Vollständiger Name',
  email: 'E-Mail',
  signingUp: 'Einen Moment…',
  signUp: 'Geschenk erhalten',
  privacyLine: 'Mit der Anmeldung stimmen Sie unserer Datenschutzrichtlinie und gelegentlichen Nachrichten des Hauses zu.',
  welcome: 'Ihr Willkommensgeschenk',
  discountIntro: 'Geben Sie diesen Code beim Bezahlen Ihrer ersten Bestellung ein:',
  copyHint: 'Zum Kopieren klicken',
  privilegeNote: 'Nach Ihrer ersten qualifizierenden Bestellung wird ein persönlicher 10 %-Code — an diese E-Mail gebunden — freigeschaltet.',
  startShopping: 'Weiter entdecken',
  emailCheckError: 'Bitte prüfen Sie Ihre E-Mail-Adresse.',
  genericError: 'Etwas ist schiefgelaufen. Bitte erneut versuchen.',
  codeCopied: 'Code kopiert',
  teaserLabel: 'Willkommensgeschenk',
  teaserOpenAria: 'Willkommensgeschenk öffnen',
  teaserDismissAria: 'Willkommensgeschenk ausblenden',
  closeAria: 'Schließen',
}

const NL: EmailPopupCopy = {
  headline: 'Welkomstgeschenk',
  body: 'Ontvang een welkomstgeschenk bij uw eerste bestelling.',
  fullName: 'Volledige naam',
  email: 'E-mail',
  signingUp: 'Een moment…',
  signUp: 'Geschenk ontvangen',
  privacyLine: 'Door u aan te sluiten gaat u akkoord met ons privacybeleid en incidentele berichten van het Huis.',
  welcome: 'Uw welkomstgeschenk',
  discountIntro: 'Gebruik deze code bij het afrekenen van uw eerste bestelling:',
  copyHint: 'Klik om te kopiëren',
  privilegeNote: 'Na uw eerste kwalificerende bestelling wordt een persoonlijke 10%-code — gekoppeld aan dit e-mailadres — geactiveerd.',
  startShopping: 'Verder winkelen',
  emailCheckError: 'Controleer uw e-mailadres.',
  genericError: 'Er is iets misgegaan. Probeer het opnieuw.',
  codeCopied: 'Code gekopieerd',
  teaserLabel: 'Welkomstgeschenk',
  teaserOpenAria: 'Open uw welkomstgeschenk',
  teaserDismissAria: 'Welkomstgeschenk verbergen',
  closeAria: 'Sluiten',
}

const PT: EmailPopupCopy = {
  headline: 'Presente de boas-vindas',
  body: 'Receba um presente de boas-vindas na sua primeira encomenda.',
  fullName: 'Nome completo',
  email: 'E-mail',
  signingUp: 'Um momento…',
  signUp: 'Receber presente',
  privacyLine: 'Ao juntar-se, aceita a nossa Política de privacidade e receber ocasionalmente notas da Maison.',
  welcome: 'O seu presente de boas-vindas',
  discountIntro: 'Utilize este código no checkout da sua primeira encomenda:',
  copyHint: 'Clique para copiar',
  privilegeNote: 'Após a primeira encomenda elegível, um código pessoal de 10% — ligado a este e-mail — activa-se.',
  startShopping: 'Continuar a descobrir',
  emailCheckError: 'Por favor, verifique o seu endereço de e-mail.',
  genericError: 'Algo correu mal. Tente novamente.',
  codeCopied: 'Código copiado',
  teaserLabel: 'Presente de boas-vindas',
  teaserOpenAria: 'Abrir o seu presente de boas-vindas',
  teaserDismissAria: 'Ocultar presente de boas-vindas',
  closeAria: 'Fechar',
}

const ES: EmailPopupCopy = {
  headline: 'Regalo de bienvenida',
  body: 'Reciba un regalo de bienvenida con su primer pedido.',
  fullName: 'Nombre completo',
  email: 'Correo electrónico',
  signingUp: 'Un momento…',
  signUp: 'Recibir regalo',
  privacyLine: 'Al unirse, acepta nuestra Política de privacidad y recibir ocasionalmente notas de la Maison.',
  welcome: 'Su regalo de bienvenida',
  discountIntro: 'Utilice este código al pagar su primer pedido:',
  copyHint: 'Haga clic para copiar',
  privilegeNote: 'Tras su primer pedido elegible, un código personal del 10% — vinculado a este correo — se activa.',
  startShopping: 'Seguir descubriendo',
  emailCheckError: 'Por favor, revise su correo electrónico.',
  genericError: 'Algo salió mal. Inténtelo de nuevo.',
  codeCopied: 'Código copiado',
  teaserLabel: 'Regalo de bienvenida',
  teaserOpenAria: 'Abrir su regalo de bienvenida',
  teaserDismissAria: 'Ocultar regalo de bienvenida',
  closeAria: 'Cerrar',
}

const RU: EmailPopupCopy = {
  headline: 'Приветственный подарок',
  body: 'Получите приветственный подарок к первому заказу.',
  fullName: 'Полное имя',
  email: 'Эл. почта',
  signingUp: 'Секунду…',
  signUp: 'Получить подарок',
  privacyLine: 'Присоединяясь, вы соглашаетесь с Политикой конфиденциальности и редкими письмами от Дома.',
  welcome: 'Ваш приветственный подарок',
  discountIntro: 'Введите этот код при оформлении первого заказа:',
  copyHint: 'Нажмите, чтобы скопировать',
  privilegeNote: 'После первого подходящего заказа персональный код на 10% — привязанный к этой почте — активируется.',
  startShopping: 'Продолжить знакомство',
  emailCheckError: 'Пожалуйста, проверьте адрес электронной почты.',
  genericError: 'Произошла ошибка. Пожалуйста, попробуйте снова.',
  codeCopied: 'Код скопирован',
  teaserLabel: 'Приветственный подарок',
  teaserOpenAria: 'Открыть приветственный подарок',
  teaserDismissAria: 'Скрыть приветственный подарок',
  closeAria: 'Закрыть',
}

const ZH: EmailPopupCopy = {
  headline: '迎新礼遇',
  body: '首单即享迎新礼遇。',
  fullName: '全名',
  email: '电子邮箱',
  signingUp: '请稍候…',
  signUp: '领取礼遇',
  privacyLine: '加入即表示您同意我们的隐私政策，并接收品牌偶尔寄送的讯息。',
  welcome: '您的迎新礼遇',
  discountIntro: '首单结账时输入此码：',
  copyHint: '点击复制',
  privilegeNote: '首笔合格订单完成后，绑定此邮箱的个人 10% 优惠码将激活。',
  startShopping: '继续选购',
  emailCheckError: '请检查您的电子邮箱地址。',
  genericError: '出现错误，请重试。',
  codeCopied: '已复制优惠码',
  teaserLabel: '迎新礼遇',
  teaserOpenAria: '打开迎新礼遇',
  teaserDismissAria: '隐藏迎新礼遇',
  closeAria: '关闭',
}

const ID: EmailPopupCopy = {
  headline: 'Hadiah selamat datang',
  body: 'Dapatkan hadiah selamat datang untuk pesanan pertama Anda.',
  fullName: 'Nama lengkap',
  email: 'Email',
  signingUp: 'Sebentar…',
  signUp: 'Klaim hadiah',
  privacyLine: 'Dengan bergabung, Anda menyetujui Kebijakan Privasi kami dan catatan sesekali dari house.',
  welcome: 'Hadiah selamat datang Anda',
  discountIntro: 'Gunakan kode ini saat checkout pesanan pertama Anda:',
  copyHint: 'Klik untuk menyalin',
  privilegeNote: 'Setelah pesanan pertama yang memenuhi syarat, kode pribadi 10% — terikat ke email ini — aktif.',
  startShopping: 'Lanjutkan belanja',
  emailCheckError: 'Silakan periksa alamat email Anda.',
  genericError: 'Terjadi kesalahan. Silakan coba lagi.',
  codeCopied: 'Kode disalin',
  teaserLabel: 'Hadiah selamat datang',
  teaserOpenAria: 'Buka hadiah selamat datang',
  teaserDismissAria: 'Sembunyikan hadiah selamat datang',
  closeAria: 'Tutup',
}

const MS: EmailPopupCopy = {
  headline: 'Hadiah alu-aluan',
  body: 'Terima hadiah alu-aluan untuk pesanan pertama anda.',
  fullName: 'Nama penuh',
  email: 'E-mel',
  signingUp: 'Sebentar…',
  signUp: 'Tebus hadiah',
  privacyLine: 'Dengan menyertai, anda bersetuju dengan Dasar Privasi kami dan menerima nota sesekali daripada house.',
  welcome: 'Hadiah alu-aluan anda',
  discountIntro: 'Gunakan kod ini semasa checkout pesanan pertama anda:',
  copyHint: 'Klik untuk salin',
  privilegeNote: 'Selepas pesanan pertama yang layak, kod peribadi 10% — dikunci kepada e-mel ini — diaktifkan.',
  startShopping: 'Teruskan membeli',
  emailCheckError: 'Sila semak alamat e-mel anda.',
  genericError: 'Sesuatu telah berlaku. Sila cuba lagi.',
  codeCopied: 'Kod disalin',
  teaserLabel: 'Hadiah alu-aluan',
  teaserOpenAria: 'Buka hadiah alu-aluan',
  teaserDismissAria: 'Sembunyikan hadiah alu-aluan',
  closeAria: 'Tutup',
}

export function getEmailPopupCopy(locale: AppLocale | string): EmailPopupCopy {
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
