import type { AppLocale } from '@/lib/i18n/routing'

export type EmailPopupCopy = {
  imageAlt: string
  exclusiveOffer: string
  eyebrow: string
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
  privilegeNote: string
  startShopping: string
  emailCheckError: string
  genericError: string
  codeCopied: string
}

const EN: EmailPopupCopy = {
  imageAlt:
    'Bint Saeed gold BS monogram centred on deep burgundy velvet petals — Abu Dhabi house emblem',
  exclusiveOffer: 'Your place within the house',
  eyebrow: 'Bint Saeed Community',
  headline: 'Join the community',
  body: 'Subscribe for a private welcome: 15% off your first purchase, and an additional 10% House Privilege on future full-price purchases until 29 August 2027.',
  firstName: 'First name',
  email: 'Email',
  signingUp: 'Joining…',
  signUp: 'Subscribe now',
  privacyLine: 'By joining, you agree to our Privacy Policy and to receiving occasional notes from the house.',
  welcome: 'Welcome to the house',
  discountIntro: 'Use this code at checkout for 15% off your first qualifying purchase:',
  copyHint: 'Click to copy · First purchase',
  privilegeNote:
    'After your first qualifying order, a personal 10% code — locked to this email — will unlock.',
  startShopping: 'Continue shopping',
  emailCheckError: 'Please check your email address.',
  genericError: 'Something went wrong. Please try again.',
  codeCopied: 'Code copied',
}

const AR: EmailPopupCopy = {
  imageAlt: 'مونوغرام Bint Saeed الذهبي على خلفية مخملية بورغوندي — شعار الدار من أبوظبي',
  exclusiveOffer: 'مكانك في الدار',
  eyebrow: 'مجتمع Bint Saeed',
  headline: 'انضمّي إلى مجتمعنا',
  body: 'اشتركي لترحيب خاص: خصم 15% على أول شراء، وامتياز إضافي بنسبة 10% من الدار على المشتريات اللاحقة بالسعر الكامل حتى 29 أغسطس 2027.',
  firstName: 'الاسم الأول',
  email: 'البريد الإلكتروني',
  signingUp: 'جاري الانضمام…',
  signUp: 'اشتركي الآن',
  privacyLine: 'بالانضمام، توافقين على سياسة الخصوصية وتلقي رسائل من الدار بين الحين والآخر.',
  welcome: 'مرحباً بك في الدار',
  discountIntro: 'استخدمي هذا الرمز عند الدفع لخصم 15% على أول عملية شراء مؤهّلة:',
  copyHint: 'اضغطي للنسخ · أول شراء',
  privilegeNote:
    'بعد أول طلب مؤهّل، يُفعَّل رمز شخصي بخصم 10% مرتبط بهذا البريد.',
  startShopping: 'تابعي التسوق',
  emailCheckError: 'يرجى التحقق من البريد الإلكتروني.',
  genericError: 'حدث خطأ. حاولي مرة أخرى.',
  codeCopied: 'تم نسخ الرمز',
}

const FR: EmailPopupCopy = {
  imageAlt:
    'Monogramme doré BS de Bint Saeed sur pétales de velours bordeaux — emblème de la Maison à Abou Dhabi',
  exclusiveOffer: 'Votre place au sein de la Maison',
  eyebrow: 'Communauté Bint Saeed',
  headline: 'Rejoindre la communauté',
  body: 'Inscrivez-vous pour un accueil privé : −15 % sur votre premier achat, puis un privilège House Privilege supplémentaire de −10 % sur les achats à prix plein jusqu’au 29 août 2027.',
  firstName: 'Prénom',
  email: 'E-mail',
  signingUp: 'Inscription…',
  signUp: 'S’inscrire maintenant',
  privacyLine: 'En vous inscrivant, vous acceptez notre Politique de confidentialité et de recevoir occasionnellement des nouvelles de la Maison.',
  welcome: 'Bienvenue dans la Maison',
  discountIntro: 'Utilisez ce code au paiement pour −15 % sur votre premier achat éligible :',
  copyHint: 'Cliquez pour copier · Premier achat',
  privilegeNote:
    'Après votre première commande éligible, un code personnel −10 % — lié à cet e-mail — s’active.',
  startShopping: 'Poursuivre la découverte',
  emailCheckError: 'Veuillez vérifier votre adresse e-mail.',
  genericError: 'Une erreur est survenue. Veuillez réessayer.',
  codeCopied: 'Code copié',
}

const IT: EmailPopupCopy = {
  imageAlt:
    'Monogramma dorato BS di Bint Saeed su petali di velluto bordeaux — emblema della Maison di Abu Dhabi',
  exclusiveOffer: 'Il tuo posto nella Maison',
  eyebrow: 'Comunità Bint Saeed',
  headline: 'Entra nella comunità',
  body: 'Iscriviti per un benvenuto privato: −15% sul primo acquisto e un House Privilege aggiuntivo del −10% sugli acquisti a prezzo pieno fino al 29 agosto 2027.',
  firstName: 'Nome',
  email: 'E-mail',
  signingUp: 'Iscrizione…',
  signUp: 'Iscriviti ora',
  privacyLine: 'Iscrivendoti, accetti la nostra Informativa sulla privacy e di ricevere occasionali note dalla Maison.',
  welcome: 'Benvenuta nella Maison',
  discountIntro: 'Usa questo codice al checkout per −15% sul primo acquisto idoneo:',
  copyHint: 'Clicca per copiare · Primo acquisto',
  privilegeNote:
    'Dopo il primo ordine idoneo, un codice personale −10% — legato a questa e-mail — si attiva.',
  startShopping: 'Continua a scoprire',
  emailCheckError: 'Controlla il tuo indirizzo e-mail.',
  genericError: 'Qualcosa è andato storto. Riprova.',
  codeCopied: 'Codice copiato',
}

const DE: EmailPopupCopy = {
  imageAlt:
    'Goldenes BS-Monogramm von Bint Saeed auf burgunderfarbenen Samtblüten — Emblem des Hauses in Abu Dhabi',
  exclusiveOffer: 'Ihr Platz im Haus',
  eyebrow: 'Bint Saeed Community',
  headline: 'Der Community beitreten',
  body: 'Melden Sie sich für einen privaten Willkommensgruß an: 15 % auf den ersten Kauf und ein zusätzliches 10 %-House Privilege auf spätere Vollpreis-Käufe bis 29. August 2027.',
  firstName: 'Vorname',
  email: 'E-Mail',
  signingUp: 'Wird angemeldet…',
  signUp: 'Jetzt abonnieren',
  privacyLine: 'Mit der Anmeldung stimmen Sie unserer Datenschutzrichtlinie und gelegentlichen Nachrichten des Hauses zu.',
  welcome: 'Willkommen im Haus',
  discountIntro: 'Nutzen Sie diesen Code an der Kasse für 15 % auf Ihren ersten qualifizierenden Kauf:',
  copyHint: 'Zum Kopieren klicken · Erster Kauf',
  privilegeNote:
    'Nach Ihrer ersten qualifizierenden Bestellung wird ein persönlicher 10 %-Code — an diese E-Mail gebunden — freigeschaltet.',
  startShopping: 'Weiter entdecken',
  emailCheckError: 'Bitte prüfen Sie Ihre E-Mail-Adresse.',
  genericError: 'Etwas ist schiefgelaufen. Bitte erneut versuchen.',
  codeCopied: 'Code kopiert',
}

const NL: EmailPopupCopy = {
  imageAlt:
    'Gouden BS-monogram van Bint Saeed op bordeauxrode fluweelbloembladen — embleem van het Huis in Abu Dhabi',
  exclusiveOffer: 'Uw plek in het Huis',
  eyebrow: 'Bint Saeed Community',
  headline: 'Word lid van de community',
  body: 'Schrijf u in voor een privé welkom: 15% korting op uw eerste aankoop, en een aanvullend House Privilege van 10% op latere full-price aankopen tot 29 augustus 2027.',
  firstName: 'Voornaam',
  email: 'E-mail',
  signingUp: 'Bezig met aansluiten…',
  signUp: 'Nu abonneren',
  privacyLine: 'Door u aan te sluiten gaat u akkoord met ons privacybeleid en incidentele berichten van het Huis.',
  welcome: 'Welkom in het Huis',
  discountIntro: 'Gebruik deze code bij het afrekenen voor 15% op uw eerste kwalificerende aankoop:',
  copyHint: 'Klik om te kopiëren · Eerste aankoop',
  privilegeNote:
    'Na uw eerste kwalificerende bestelling wordt een persoonlijke 10%-code — gekoppeld aan dit e-mailadres — geactiveerd.',
  startShopping: 'Verder winkelen',
  emailCheckError: 'Controleer uw e-mailadres.',
  genericError: 'Er is iets misgegaan. Probeer het opnieuw.',
  codeCopied: 'Code gekopieerd',
}

const PT: EmailPopupCopy = {
  imageAlt:
    'Monograma dourado BS da Bint Saeed sobre pétalas de veludo borgonha — emblema da Maison em Abu Dhabi',
  exclusiveOffer: 'O seu lugar na Maison',
  eyebrow: 'Comunidade Bint Saeed',
  headline: 'Junte-se à comunidade',
  body: 'Subscreva para um acolhimento privado: 15% na primeira compra, e um House Privilege adicional de 10% em compras a preço inteiro até 29 de agosto de 2027.',
  firstName: 'Nome próprio',
  email: 'E-mail',
  signingUp: 'A juntar-se…',
  signUp: 'Subscrever agora',
  privacyLine: 'Ao juntar-se, aceita a nossa Política de privacidade e receber ocasionalmente notas da Maison.',
  welcome: 'Bem-vinda à Maison',
  discountIntro: 'Use este código no checkout para 15% na primeira compra elegível:',
  copyHint: 'Clique para copiar · Primeira compra',
  privilegeNote:
    'Após a primeira encomenda elegível, um código pessoal de 10% — ligado a este e-mail — activa-se.',
  startShopping: 'Continuar a descobrir',
  emailCheckError: 'Por favor, verifique o seu endereço de e-mail.',
  genericError: 'Algo correu mal. Tente novamente.',
  codeCopied: 'Código copiado',
}

const ES: EmailPopupCopy = {
  imageAlt:
    'Monograma dorado BS de Bint Saeed sobre pétalos de terciopelo burdeos — emblema de la Maison en Abu Dabi',
  exclusiveOffer: 'Su lugar en la Maison',
  eyebrow: 'Comunidad Bint Saeed',
  headline: 'Únase a la comunidad',
  body: 'Suscríbase para una bienvenida privada: 15% en su primera compra, y un House Privilege adicional del 10% en compras a precio completo hasta el 29 de agosto de 2027.',
  firstName: 'Nombre',
  email: 'Correo electrónico',
  signingUp: 'Uniéndose…',
  signUp: 'Suscribirse ahora',
  privacyLine: 'Al unirse, acepta nuestra Política de privacidad y recibir ocasionalmente notas de la Maison.',
  welcome: 'Bienvenida a la Maison',
  discountIntro: 'Use este código en el pago para un 15% en su primera compra elegible:',
  copyHint: 'Haga clic para copiar · Primera compra',
  privilegeNote:
    'Tras su primer pedido elegible, un código personal del 10% — vinculado a este correo — se activa.',
  startShopping: 'Seguir descubriendo',
  emailCheckError: 'Por favor, revise su correo electrónico.',
  genericError: 'Algo salió mal. Inténtelo de nuevo.',
  codeCopied: 'Código copiado',
}

const RU: EmailPopupCopy = {
  imageAlt:
    'Золотая монограмма BS Bint Saeed на бордовых бархатных лепестках — эмблема Дома в Абу-Даби',
  exclusiveOffer: 'Ваше место в Доме',
  eyebrow: 'Сообщество Bint Saeed',
  headline: 'Присоединиться к сообществу',
  body: 'Подпишитесь на частное приветствие: скидка 15% на первую покупку и дополнительная привилегия House Privilege 10% на последующие покупки по полной цене до 29 августа 2027 года.',
  firstName: 'Имя',
  email: 'Эл. почта',
  signingUp: 'Подключение…',
  signUp: 'Подписаться сейчас',
  privacyLine: 'Присоединяясь, вы соглашаетесь с Политикой конфиденциальности и редкими письмами от Дома.',
  welcome: 'Добро пожаловать в Дом',
  discountIntro: 'Используйте этот код при оформлении для скидки 15% на первую подходящую покупку:',
  copyHint: 'Нажмите, чтобы скопировать · Первая покупка',
  privilegeNote:
    'После первого подходящего заказа персональный код на 10% — привязанный к этой почте — активируется.',
  startShopping: 'Продолжить знакомство',
  emailCheckError: 'Пожалуйста, проверьте адрес электронной почты.',
  genericError: 'Произошла ошибка. Пожалуйста, попробуйте снова.',
  codeCopied: 'Код скопирован',
}

const ZH: EmailPopupCopy = {
  imageAlt: 'Bint Saeed 金色 BS 交织字母标志置于深酒红丝绒花瓣之上——阿布扎比品牌徽章',
  exclusiveOffer: '您在品牌中的一席之地',
  eyebrow: 'Bint Saeed 社群',
  headline: '加入社群',
  body: '订阅即可获得私人欢迎礼遇：首单立减 15%，以及额外 10% House Privilege 全价优惠，有效期至 2027 年 8 月 29 日。',
  firstName: '名字',
  email: '电子邮箱',
  signingUp: '加入中…',
  signUp: '立即订阅',
  privacyLine: '加入即表示您同意我们的隐私政策，并接收品牌偶尔寄送的讯息。',
  welcome: '欢迎加入品牌',
  discountIntro: '结账时使用此码，首笔合格购买可享 15% 优惠：',
  copyHint: '点击复制 · 首单',
  privilegeNote:
    '首笔合格订单完成后，绑定此邮箱的个人 10% 优惠码将激活。',
  startShopping: '继续选购',
  emailCheckError: '请检查您的电子邮箱地址。',
  genericError: '出现错误，请重试。',
  codeCopied: '已复制优惠码',
}

const ID: EmailPopupCopy = {
  imageAlt:
    'Monogram emas BS Bint Saeed di atas kelopak beludru burgundy — emblem house Abu Dhabi',
  exclusiveOffer: 'Tempat Anda di dalam House',
  eyebrow: 'Komunitas Bint Saeed',
  headline: 'Bergabung dengan komunitas',
  body: 'Berlangganan untuk sambutan pribadi: diskon 15% pada pembelian pertama, dan House Privilege tambahan 10% untuk pembelian full-price berikutnya hingga 29 Agustus 2027.',
  firstName: 'Nama depan',
  email: 'Email',
  signingUp: 'Sedang bergabung…',
  signUp: 'Berlangganan sekarang',
  privacyLine: 'Dengan bergabung, Anda menyetujui Kebijakan Privasi kami dan catatan sesekali dari house.',
  welcome: 'Selamat datang di house',
  discountIntro: 'Gunakan kode ini saat checkout untuk diskon 15% pada pembelian pertama yang memenuhi syarat:',
  copyHint: 'Klik untuk menyalin · Pembelian pertama',
  privilegeNote:
    'Setelah pesanan pertama yang memenuhi syarat, kode pribadi 10% — terikat ke email ini — aktif.',
  startShopping: 'Lanjutkan belanja',
  emailCheckError: 'Silakan periksa alamat email Anda.',
  genericError: 'Terjadi kesalahan. Silakan coba lagi.',
  codeCopied: 'Kode disalin',
}

const MS: EmailPopupCopy = {
  imageAlt:
    'Monogram emas BS Bint Saeed di atas kelopak beludru burgundy — lambang house Abu Dhabi',
  exclusiveOffer: 'Tempat anda dalam House',
  eyebrow: 'Komuniti Bint Saeed',
  headline: 'Sertai komuniti',
  body: 'Langgan untuk alu-aluan peribadi: diskaun 15% pada pembelian pertama, dan House Privilege tambahan 10% pada pembelian full-price seterusnya sehingga 29 Ogos 2027.',
  firstName: 'Nama pertama',
  email: 'E-mel',
  signingUp: 'Sedang menyertai…',
  signUp: 'Langgan sekarang',
  privacyLine: 'Dengan menyertai, anda bersetuju dengan Dasar Privasi kami dan menerima nota sesekali daripada house.',
  welcome: 'Selamat datang ke house',
  discountIntro: 'Gunakan kod ini semasa checkout untuk diskaun 15% pada pembelian pertama yang layak:',
  copyHint: 'Klik untuk salin · Pembelian pertama',
  privilegeNote:
    'Selepas pesanan pertama yang layak, kod peribadi 10% — dikunci kepada e-mel ini — diaktifkan.',
  startShopping: 'Teruskan membeli',
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
