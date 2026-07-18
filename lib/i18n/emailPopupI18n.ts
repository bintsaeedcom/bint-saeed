import type { AppLocale } from '@/lib/i18n/routing'

export type EmailPopupCopy = {
  imageAlt: string
  exclusiveOffer: string
  headline: string
  body: string
  firstName: string
  email: string
  signingUp: string
  signUp: string
  privacyLine: string
  welcome: string
  discountIntro: string
  copyHint: string
  startShopping: string
  emailCheckError: string
  genericError: string
  codeCopied: string
}

const EN: EmailPopupCopy = {
  imageAlt: 'Bint Saeed Collection',
  exclusiveOffer: 'Exclusive Offer',
  headline: 'Get 10% Off',
  body: 'Subscribe to our newsletter and receive an exclusive discount on your first order, plus the latest designs and offers.',
  firstName: 'First name',
  email: 'Email',
  signingUp: 'Signing up...',
  signUp: 'Sign me up!',
  privacyLine: 'By subscribing, you agree to our Privacy Policy and receiving marketing emails.',
  welcome: 'Welcome!',
  discountIntro: "Here's your exclusive discount code:",
  copyHint: 'Click to copy • Valid for 30 days',
  startShopping: 'Start Shopping',
  emailCheckError: 'Please check your email address.',
  genericError: 'Something went wrong. Please try again.',
  codeCopied: 'Code copied!',
}

const AR: EmailPopupCopy = {
  imageAlt: 'مجموعة Bint Saeed',
  exclusiveOffer: 'خصم حصري',
  headline: 'احصلي على خصم 10%',
  body: 'اشتركي في نشرتنا واحصلي على خصم حصري على طلبك الأول، بالإضافة إلى أحدث التصاميم والعروض.',
  firstName: 'الاسم الأول',
  email: 'البريد الإلكتروني',
  signingUp: 'جاري التسجيل...',
  signUp: 'اشتركي الآن',
  privacyLine: 'بالاشتراك، توافقين على سياسة الخصوصية وتلقي رسائل تسويقية.',
  welcome: 'مرحباً بك!',
  discountIntro: 'هذا كود الخصم الخاص بك:',
  copyHint: 'اضغطي لنسخ الكود • صالح لمدة 30 يوماً',
  startShopping: 'ابدئي التسوق',
  emailCheckError: 'يرجى التحقق من البريد الإلكتروني.',
  genericError: 'حدث خطأ. حاولي مرة أخرى.',
  codeCopied: 'تم نسخ الكود!',
}

const FR: EmailPopupCopy = {
  imageAlt: 'Collection Bint Saeed',
  exclusiveOffer: 'Offre exclusive',
  headline: '−10 % offerts',
  body: 'Inscrivez-vous à notre newsletter et recevez une réduction exclusive sur votre première commande, ainsi que les nouveautés de la maison.',
  firstName: 'Prénom',
  email: 'E-mail',
  signingUp: 'Inscription…',
  signUp: 'Je m’inscris',
  privacyLine: 'En vous inscrivant, vous acceptez notre Politique de confidentialité et de recevoir nos e-mails.',
  welcome: 'Bienvenue',
  discountIntro: 'Voici votre code de réduction exclusif :',
  copyHint: 'Cliquez pour copier • Valable 30 jours',
  startShopping: 'Commencer à découvrir',
  emailCheckError: 'Veuillez vérifier votre adresse e-mail.',
  genericError: 'Une erreur est survenue. Veuillez réessayer.',
  codeCopied: 'Code copié',
}

const IT: EmailPopupCopy = {
  imageAlt: 'Collezione Bint Saeed',
  exclusiveOffer: 'Offerta esclusiva',
  headline: '−10% di sconto',
  body: 'Iscriviti alla newsletter e ricevi uno sconto esclusivo sul primo ordine, insieme alle novità della maison.',
  firstName: 'Nome',
  email: 'E-mail',
  signingUp: 'Iscrizione…',
  signUp: 'Iscrivimi',
  privacyLine: 'Iscrivendoti, accetti la nostra Informativa sulla privacy e di ricevere e-mail di marketing.',
  welcome: 'Benvenuta',
  discountIntro: 'Ecco il tuo codice sconto esclusivo:',
  copyHint: 'Clicca per copiare • Valido 30 giorni',
  startShopping: 'Inizia a scoprire',
  emailCheckError: 'Controlla il tuo indirizzo e-mail.',
  genericError: 'Qualcosa è andato storto. Riprova.',
  codeCopied: 'Codice copiato',
}

const DE: EmailPopupCopy = {
  imageAlt: 'Bint Saeed Kollektion',
  exclusiveOffer: 'Exklusives Angebot',
  headline: '10 % Rabatt',
  body: 'Abonnieren Sie unseren Newsletter und erhalten Sie einen exklusiven Rabatt auf Ihre erste Bestellung sowie Neuheiten des Hauses.',
  firstName: 'Vorname',
  email: 'E-Mail',
  signingUp: 'Wird angemeldet…',
  signUp: 'Anmelden',
  privacyLine: 'Mit der Anmeldung stimmen Sie unserer Datenschutzrichtlinie und dem Erhalt von Marketing-E-Mails zu.',
  welcome: 'Willkommen',
  discountIntro: 'Ihr exklusiver Rabattcode:',
  copyHint: 'Zum Kopieren klicken • 30 Tage gültig',
  startShopping: 'Jetzt entdecken',
  emailCheckError: 'Bitte prüfen Sie Ihre E-Mail-Adresse.',
  genericError: 'Etwas ist schiefgelaufen. Bitte erneut versuchen.',
  codeCopied: 'Code kopiert',
}

const NL: EmailPopupCopy = {
  imageAlt: 'Bint Saeed collectie',
  exclusiveOffer: 'Exclusief aanbod',
  headline: '10% korting',
  body: 'Schrijf u in voor de nieuwsbrief en ontvang een exclusieve korting op uw eerste bestelling, plus de nieuwste ontwerpen en aanbiedingen.',
  firstName: 'Voornaam',
  email: 'E-mail',
  signingUp: 'Bezig met inschrijven...',
  signUp: 'Schrijf mij in',
  privacyLine: 'Door u in te schrijven, gaat u akkoord met ons privacybeleid en met het ontvangen van marketingberichten.',
  welcome: 'Welkom!',
  discountIntro: 'Hier is uw exclusieve kortingscode:',
  copyHint: 'Klik om te kopiëren • 30 dagen geldig',
  startShopping: 'Begin met shoppen',
  emailCheckError: 'Controleer uw e-mailadres.',
  genericError: 'Er is iets misgegaan. Probeer het opnieuw.',
  codeCopied: 'Code gekopieerd!',
}

const PT: EmailPopupCopy = {
  imageAlt: 'Coleção Bint Saeed',
  exclusiveOffer: 'Oferta exclusiva',
  headline: '−10% de desconto',
  body: 'Subscreva a nossa newsletter e receba um desconto exclusivo na primeira encomenda, bem como as novidades da maison.',
  firstName: 'Nome próprio',
  email: 'E-mail',
  signingUp: 'A subscrever…',
  signUp: 'Subscrever',
  privacyLine: 'Ao subscrever, aceita a nossa Política de privacidade e o envio de e-mails de marketing.',
  welcome: 'Bem-vinda',
  discountIntro: 'Aqui está o seu código de desconto exclusivo:',
  copyHint: 'Clique para copiar • Válido por 30 dias',
  startShopping: 'Começar a descobrir',
  emailCheckError: 'Por favor, verifique o seu endereço de e-mail.',
  genericError: 'Algo correu mal. Tente novamente.',
  codeCopied: 'Código copiado',
}

const ES: EmailPopupCopy = {
  imageAlt: 'Colección Bint Saeed',
  exclusiveOffer: 'Oferta exclusiva',
  headline: '−10% de descuento',
  body: 'Suscríbete a nuestra newsletter y recibe un descuento exclusivo en tu primer pedido, además de las novedades de la maison.',
  firstName: 'Nombre',
  email: 'Correo electrónico',
  signingUp: 'Suscribiendo…',
  signUp: 'Suscribirme',
  privacyLine: 'Al suscribirte, aceptas nuestra Política de privacidad y recibir correos de marketing.',
  welcome: 'Bienvenida',
  discountIntro: 'Aquí tienes tu código de descuento exclusivo:',
  copyHint: 'Haz clic para copiar • Válido 30 días',
  startShopping: 'Empezar a descubrir',
  emailCheckError: 'Por favor, revisa tu correo electrónico.',
  genericError: 'Algo salió mal. Inténtalo de nuevo.',
  codeCopied: 'Código copiado',
}

const RU: EmailPopupCopy = {
  imageAlt: 'Коллекция Bint Saeed',
  exclusiveOffer: 'Эксклюзивное предложение',
  headline: 'Скидка 10%',
  body: 'Подпишитесь на рассылку и получите эксклюзивную скидку на первый заказ, а также новости дома.',
  firstName: 'Имя',
  email: 'Эл. почта',
  signingUp: 'Подписка…',
  signUp: 'Подписаться',
  privacyLine: 'Подписываясь, вы соглашаетесь с Политикой конфиденциальности и получением маркетинговых писем.',
  welcome: 'Добро пожаловать',
  discountIntro: 'Ваш эксклюзивный код скидки:',
  copyHint: 'Нажмите, чтобы скопировать • Действует 30 дней',
  startShopping: 'Начать знакомство',
  emailCheckError: 'Пожалуйста, проверьте адрес электронной почты.',
  genericError: 'Произошла ошибка. Пожалуйста, попробуйте снова.',
  codeCopied: 'Код скопирован',
}

const ZH: EmailPopupCopy = {
  imageAlt: 'Bint Saeed 系列',
  exclusiveOffer: '专属优惠',
  headline: '立享 10% 优惠',
  body: '订阅电子通讯，即可获得首单专属折扣，并掌握品牌最新设计与资讯。',
  firstName: '名字',
  email: '电子邮箱',
  signingUp: '订阅中…',
  signUp: '立即订阅',
  privacyLine: '订阅即表示您同意我们的隐私政策，并同意接收营销邮件。',
  welcome: '欢迎',
  discountIntro: '您的专属折扣码：',
  copyHint: '点击复制 · 有效期 30 天',
  startShopping: '开始选购',
  emailCheckError: '请检查您的电子邮箱地址。',
  genericError: '出现错误，请重试。',
  codeCopied: '已复制折扣码',
}

const ID: EmailPopupCopy = {
  imageAlt: 'Koleksi Bint Saeed',
  exclusiveOffer: 'Penawaran eksklusif',
  headline: 'Diskon 10%',
  body: 'Berlangganan newsletter kami dan terima diskon eksklusif untuk pesanan pertama, plus desain dan penawaran terbaru.',
  firstName: 'Nama depan',
  email: 'Email',
  signingUp: 'Mendaftar…',
  signUp: 'Daftarkan saya',
  privacyLine: 'Dengan berlangganan, Anda menyetujui Kebijakan Privasi kami dan menerima email pemasaran.',
  welcome: 'Selamat datang',
  discountIntro: 'Berikut kode diskon eksklusif Anda:',
  copyHint: 'Klik untuk menyalin • Berlaku 30 hari',
  startShopping: 'Mulai berbelanja',
  emailCheckError: 'Silakan periksa alamat email Anda.',
  genericError: 'Terjadi kesalahan. Silakan coba lagi.',
  codeCopied: 'Kode disalin',
}

const MS: EmailPopupCopy = {
  imageAlt: 'Koleksi Bint Saeed',
  exclusiveOffer: 'Tawaran eksklusif',
  headline: 'Diskaun 10%',
  body: 'Langgan surat berita kami dan terima diskaun eksklusif untuk pesanan pertama, serta reka bentuk dan tawaran terkini.',
  firstName: 'Nama pertama',
  email: 'E-mel',
  signingUp: 'Mendaftar…',
  signUp: 'Daftarkan saya',
  privacyLine: 'Dengan melanggan, anda bersetuju dengan Dasar Privasi kami dan menerima e-mel pemasaran.',
  welcome: 'Selamat datang',
  discountIntro: 'Berikut kod diskaun eksklusif anda:',
  copyHint: 'Klik untuk salin • Sah 30 hari',
  startShopping: 'Mula membeli',
  emailCheckError: 'Sila semak alamat e-mel anda.',
  genericError: 'Sesuatu telah berlaku. Sila cuba lagi.',
  codeCopied: 'Kod disalin',
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
