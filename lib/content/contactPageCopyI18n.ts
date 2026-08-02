import type { AppLocale } from '@/lib/i18n/routing'
import { commerceUi } from '@/lib/i18n/commerceUi'
import type { Language } from '@/lib/i18n/translations'

export type ContactDepartmentKey =
  | 'support'
  | 'orders'
  | 'returns'
  | 'personalisation'
  | 'wholesale'
  | 'partnerships'
  | 'press'
  | 'legal'
  | 'general'

export type ContactPageCopy = {
  breadcrumbHome: string
  breadcrumbContact: string
  pageTitle: string
  heroDescription: string
  heroBannerAlt: string
  portraitAlt: string
  nameLabel: string
  emailLabel: string
  phoneLabel: string
  subjectLabel: string
  messageLabel: string
  subjectPlaceholder: string
  messagePlaceholder: string
  subjectRequired: string
  messageRequired: string
  messageTooShort: string
  sendMessage: string
  sending: string
  messageReceived: string
  thankYou: string
  sendAnother: string
  toastBody: string
  genericError: string
  generalInquiries: string
  phone: string
  location: string
  locationValue: string
  businessHours: string
  businessHoursValue: string
  departmentInboxes: string
  departments: Record<ContactDepartmentKey, string>
}

const LOCATION_EN = 'Abu Dhabi,\u00A0United\u00A0Arab\u00A0Emirates'
const LOCATION_AR = 'أبو ظبي، الإمارات العربية المتحدة'
const LOCATION_FR = 'Abou Dhabi,\u00A0Émirats\u00A0arabes\u00A0unis'
const LOCATION_IT = 'Abu Dhabi,\u00A0Emirati\u00A0Arabi\u00A0Uniti'
const LOCATION_ES = 'Abu Dhabi,\u00A0Emiratos\u00A0Árabes\u00A0Unidos'
const LOCATION_DE = 'Abu Dhabi,\u00A0Vereinigte\u00A0Arabische\u00A0Emirate'
const LOCATION_NL = 'Abu Dhabi,\u00A0Verenigde\u00A0Arabische\u00A0Emiraten'
const LOCATION_PT = 'Abu Dhabi,\u00A0Emirados\u00A0Árabes\u00A0Unidos'
const LOCATION_RU = 'Абу-Даби,\u00A0Объединённые\u00A0Арабские\u00A0Эмираты'
const LOCATION_ID = 'Abu Dhabi,\u00A0Uni\u00A0Emirat\u00A0Arab'
const LOCATION_MS = 'Abu Dhabi,\u00A0Emiriah\u00A0Arab\u00A0Bersatu'
const HOURS_EN = 'Sun - Thu: 9 AM - 6 PM'
const HOURS_AR = 'الأحد - الخميس: 9 ص - 6 م'

const EN: ContactPageCopy = {
  breadcrumbHome: 'Home',
  breadcrumbContact: 'Contact',
  pageTitle: 'Contact Us',
  heroDescription:
    'Whether you’re discovering Bint Saeed for the first time or already part of our community, we’re pleased to assist with every enquiry.',
  heroBannerAlt: 'Bint Saeed contact editorial banner',
  portraitAlt:
    'Bint Saeed Abu Dhabi — branded editorial portrait with fountain grass, palms, and contemporary architecture at dusk',
  nameLabel: 'Full name',
  emailLabel: 'Email',
  phoneLabel: 'Phone',
  subjectLabel: 'Subject',
  messageLabel: 'Message',
  subjectPlaceholder: 'Select a subject',
  messagePlaceholder: 'How can we help you?',
  subjectRequired: 'Please select a subject',
  messageRequired: 'Please enter your message',
  messageTooShort: 'Please share a little more detail so we can assist you properly.',
  sendMessage: 'Send Message',
  sending: 'Sending...',
  messageReceived: 'Message received',
  thankYou: 'Thank you for your request',
  sendAnother: 'Send another message',
  toastBody: 'Thank you for your enquiry. We will be in touch shortly.',
  genericError: 'Something went wrong. Please try again.',
  generalInquiries: 'General Inquiries',
  phone: 'Phone',
  location: 'Location',
  locationValue: LOCATION_EN,
  businessHours: 'Business Hours',
  businessHoursValue: HOURS_EN,
  departmentInboxes: 'Department Inboxes',
  departments: {
    support: 'Customer Support',
    orders: 'Orders',
    returns: 'Returns & Exchanges',
    personalisation: 'Personalisation',
    wholesale: 'Wholesale',
    partnerships: 'Partnerships',
    press: 'Press & Media',
    legal: 'Legal',
    general: 'General Inquiry',
  },
}

const AR: ContactPageCopy = {
  breadcrumbHome: 'الرئيسية',
  breadcrumbContact: 'تواصلي معنا',
  pageTitle: 'تواصلي معنا',
  heroDescription:
    'سواء كانت هذه زيارتك الأولى لـ Bint Saeed أو أنكِ جزء من مجتمعنا، يسعدنا مساعدتك في كل استفسار.',
  heroBannerAlt: 'بانر تواصل Bint Saeed',
  portraitAlt:
    'Bint Saeed أبوظبي — صورة تحريرية مع أعشاب نافورة ونخيل وعمارة معاصرة',
  nameLabel: 'الاسم الكامل',
  emailLabel: 'البريد الإلكتروني',
  phoneLabel: 'رقم الهاتف',
  subjectLabel: 'الموضوع',
  messageLabel: 'رسالتك',
  subjectPlaceholder: 'اختاري موضوعاً',
  messagePlaceholder: 'كيف يمكننا مساعدتك؟',
  subjectRequired: 'يرجى اختيار موضوع',
  messageRequired: 'يرجى إدخال رسالتك',
  messageTooShort: 'يرجى إضافة مزيد من التفاصيل لنتمكن من مساعدتكِ.',
  sendMessage: 'إرسال الرسالة',
  sending: 'جاري الإرسال...',
  messageReceived: 'تم الاستلام',
  thankYou: 'شكراً لطلبكِ',
  sendAnother: 'إرسال رسالة أخرى',
  toastBody: 'شكراً لتواصلك معنا. سنعود إليك في أقرب وقت.',
  genericError: 'حدث خطأ. حاولي مرة أخرى.',
  generalInquiries: 'البريد الإلكتروني',
  phone: 'الهاتف',
  location: 'الموقع',
  locationValue: LOCATION_AR,
  businessHours: 'ساعات العمل',
  businessHoursValue: HOURS_AR,
  departmentInboxes: 'البريد حسب القسم',
  departments: {
    support: 'دعم العملاء',
    orders: 'الطلبات',
    returns: 'الإرجاع والاستبدال',
    personalisation: 'التخصيص',
    wholesale: 'الجملة',
    partnerships: 'الشراكات',
    press: 'الصحافة والإعلام',
    legal: 'الشؤون القانونية',
    general: 'استفسار عام',
  },
}

const FR: ContactPageCopy = {
  breadcrumbHome: 'Accueil',
  breadcrumbContact: 'Contact',
  pageTitle: 'Nous contacter',
  heroDescription:
    'Que vous découvriez Bint Saeed pour la première fois ou que vous fassiez déjà partie de notre communauté, nous sommes heureux de répondre à chaque demande.',
  heroBannerAlt: 'Bannière éditoriale contact Bint Saeed',
  portraitAlt:
    'Bint Saeed Abu Dhabi — portrait éditorial de marque avec herbes de fontaine, palmiers et architecture contemporaine au crépuscule',
  nameLabel: 'Nom complet',
  emailLabel: 'E-mail',
  phoneLabel: 'Téléphone',
  subjectLabel: 'Objet',
  messageLabel: 'Message',
  subjectPlaceholder: 'Choisir un objet',
  messagePlaceholder: 'Comment pouvons-nous vous aider ?',
  subjectRequired: 'Veuillez choisir un objet',
  messageRequired: 'Veuillez saisir votre message',
  messageTooShort: 'Merci de préciser un peu davantage votre demande afin que nous puissions vous assister.',
  sendMessage: 'Envoyer le message',
  sending: 'Envoi…',
  messageReceived: 'Message reçu',
  thankYou: 'Merci pour votre demande',
  sendAnother: 'Envoyer un autre message',
  toastBody: 'Merci pour votre message. Nous vous répondrons sous peu.',
  genericError: 'Une erreur est survenue. Veuillez réessayer.',
  generalInquiries: 'Demandes générales',
  phone: 'Téléphone',
  location: 'Lieu',
  locationValue: LOCATION_FR,
  businessHours: 'Horaires',
  businessHoursValue: 'Dim. – jeu. : 9 h – 18 h',
  departmentInboxes: 'Boîtes par service',
  departments: {
    support: 'Service client',
    orders: 'Commandes',
    returns: 'Retours et échanges',
    personalisation: 'Personnalisation',
    wholesale: 'Vente en gros',
    partnerships: 'Partenariats',
    press: 'Presse et médias',
    legal: 'Juridique',
    general: 'Demande générale',
  },
}

const IT: ContactPageCopy = {
  breadcrumbHome: 'Home',
  breadcrumbContact: 'Contatti',
  pageTitle: 'Contattaci',
  heroDescription:
    'Che scopra Bint Saeed per la prima volta o faccia già parte della nostra comunità, siamo lieti di assisterla in ogni richiesta.',
  heroBannerAlt: 'Banner editoriale contatti Bint Saeed',
  portraitAlt:
    'Bint Saeed Abu Dhabi — ritratto editoriale con erbe da fontana, palme e architettura contemporanea al crepuscolo',
  nameLabel: 'Nome completo',
  emailLabel: 'E-mail',
  phoneLabel: 'Telefono',
  subjectLabel: 'Oggetto',
  messageLabel: 'Messaggio',
  subjectPlaceholder: 'Seleziona un oggetto',
  messagePlaceholder: 'Come possiamo assisterla?',
  subjectRequired: 'La preghiamo di selezionare un oggetto',
  messageRequired: 'La preghiamo di inserire il suo messaggio',
  messageTooShort: 'La preghiamo di aggiungere qualche dettaglio in più per poterle essere d’aiuto.',
  sendMessage: 'Invia il messaggio',
  sending: 'Invio…',
  messageReceived: 'Richiesta ricevuta',
  thankYou: 'Grazie per la sua richiesta',
  sendAnother: 'Invia un altro messaggio',
  toastBody: 'Grazie per la sua richiesta. La ricontatteremo a breve.',
  genericError: 'Si è verificato un errore. La preghiamo di riprovare.',
  generalInquiries: 'Richieste generali',
  phone: 'Telefono',
  location: 'Sede',
  locationValue: LOCATION_IT,
  businessHours: 'Orari',
  businessHoursValue: 'Dom – gio: 9:00 – 18:00',
  departmentInboxes: 'Caselle per reparto',
  departments: {
    support: 'Assistenza clienti',
    orders: 'Ordini',
    returns: 'Resi e cambi',
    personalisation: 'Personalizzazione',
    wholesale: 'Ingrosso',
    partnerships: 'Partnership',
    press: 'Stampa e media',
    legal: 'Legale',
    general: 'Richiesta generale',
  },
}

const ES: ContactPageCopy = {
  breadcrumbHome: 'Inicio',
  breadcrumbContact: 'Contacto',
  pageTitle: 'Contáctanos',
  heroDescription:
    'Ya sea que descubras Bint Saeed por primera vez o formes parte de nuestra comunidad, nos complace ayudarte con cada consulta.',
  heroBannerAlt: 'Banner editorial de contacto Bint Saeed',
  portraitAlt:
    'Bint Saeed Abu Dhabi — retrato editorial de marca con hierbas de fuente, palmeras y arquitectura contemporánea al atardecer',
  nameLabel: 'Nombre completo',
  emailLabel: 'Correo electrónico',
  phoneLabel: 'Teléfono',
  subjectLabel: 'Asunto',
  messageLabel: 'Mensaje',
  subjectPlaceholder: 'Selecciona un asunto',
  messagePlaceholder: '¿Cómo podemos ayudarte?',
  subjectRequired: 'Selecciona un asunto',
  messageRequired: 'Por favor, escriba su mensaje',
  messageTooShort: 'Comparta un poco más de detalle para que podamos asistirle adecuadamente.',
  sendMessage: 'Enviar mensaje',
  sending: 'Enviando…',
  messageReceived: 'Mensaje recibido',
  thankYou: 'Gracias por su solicitud',
  sendAnother: 'Enviar otro mensaje',
  toastBody: 'Gracias por tu consulta. Nos pondremos en contacto en breve.',
  genericError: 'Algo salió mal. Inténtalo de nuevo.',
  generalInquiries: 'Consultas generales',
  phone: 'Teléfono',
  location: 'Ubicación',
  locationValue: LOCATION_ES,
  businessHours: 'Horario',
  businessHoursValue: 'Dom – jue: 9:00 – 18:00',
  departmentInboxes: 'Bandejas por departamento',
  departments: {
    support: 'Atención al cliente',
    orders: 'Pedidos',
    returns: 'Devoluciones y cambios',
    personalisation: 'Personalización',
    wholesale: 'Mayorista',
    partnerships: 'Colaboraciones',
    press: 'Prensa y medios',
    legal: 'Legal',
    general: 'Consulta general',
  },
}

const RU: ContactPageCopy = {
  breadcrumbHome: 'Главная',
  breadcrumbContact: 'Контакты',
  pageTitle: 'Связаться с нами',
  heroDescription:
    'Открываете ли вы Bint Saeed впервые или уже являетесь частью нашего сообщества — мы с удовольствием ответим на каждый запрос.',
  heroBannerAlt: 'Редакционный баннер контактов Bint Saeed',
  portraitAlt:
    'Bint Saeed Abu Dhabi — редакционный портрет с фонтанной травой, пальмами и современной архитектурой на закате',
  nameLabel: 'Полное имя',
  emailLabel: 'Эл. почта',
  phoneLabel: 'Телефон',
  subjectLabel: 'Тема',
  messageLabel: 'Сообщение',
  subjectPlaceholder: 'Выберите тему',
  messagePlaceholder: 'Чем мы можем помочь?',
  subjectRequired: 'Пожалуйста, выберите тему',
  messageRequired: 'Пожалуйста, введите сообщение',
  messageTooShort: 'Пожалуйста, добавьте чуть больше деталей, чтобы мы могли вам помочь.',
  sendMessage: 'Отправить сообщение',
  sending: 'Отправка…',
  messageReceived: 'Сообщение получено',
  thankYou: 'Благодарим за ваш запрос',
  sendAnother: 'Отправить ещё одно сообщение',
  toastBody: 'Спасибо за ваш запрос. Мы свяжемся с вами в ближайшее время.',
  genericError: 'Произошла ошибка. Пожалуйста, попробуйте снова.',
  generalInquiries: 'Общие вопросы',
  phone: 'Телефон',
  location: 'Местоположение',
  locationValue: LOCATION_RU,
  businessHours: 'Часы работы',
  businessHoursValue: 'Вс – чт: 9:00 – 18:00',
  departmentInboxes: 'Почта по отделам',
  departments: {
    support: 'Служба поддержки',
    orders: 'Заказы',
    returns: 'Возвраты и обмен',
    personalisation: 'Персонализация',
    wholesale: 'Опт',
    partnerships: 'Партнёрства',
    press: 'Пресса и СМИ',
    legal: 'Юридический отдел',
    general: 'Общий запрос',
  },
}

const ZH: ContactPageCopy = {
  breadcrumbHome: '首页',
  breadcrumbContact: '联系我们',
  pageTitle: '联系我们',
  heroDescription:
    '无论您是初次了解 Bint Saeed，还是已是我们社群的一员，我们都乐于协助每一项询问。',
  heroBannerAlt: 'Bint Saeed 联系页编辑横幅',
  portraitAlt:
    'Bint Saeed 阿布扎比 — 品牌编辑肖像，喷泉草、棕榈与当代建筑，暮色之中',
  nameLabel: '全名',
  emailLabel: '电子邮箱',
  phoneLabel: '电话',
  subjectLabel: '主题',
  messageLabel: '留言',
  subjectPlaceholder: '请选择主题',
  messagePlaceholder: '我们能为您做些什么？',
  subjectRequired: '请选择主题',
  messageRequired: '请填写留言',
  messageTooShort: '请稍作补充，以便我们更好地为您协助。',
  sendMessage: '发送留言',
  sending: '发送中…',
  messageReceived: '已收到留言',
  thankYou: '感谢您的垂询',
  sendAnother: '再发一条留言',
  toastBody: '感谢您的询问。我们将尽快与您联系。',
  genericError: '出现错误，请重试。',
  generalInquiries: '一般询问',
  phone: '电话',
  location: '地点',
  locationValue: '阿布扎比，阿拉伯联合酋长国',
  businessHours: '营业时间',
  businessHoursValue: '周日至周四：上午 9 时至下午 6 时',
  departmentInboxes: '各部门邮箱',
  departments: {
    support: '客户支持',
    orders: '订单',
    returns: '退换货',
    personalisation: '个性化定制',
    wholesale: '批发',
    partnerships: '合作伙伴',
    press: '媒体与新闻',
    legal: '法务',
    general: '一般询问',
  },
}

const DE: ContactPageCopy = {
  breadcrumbHome: 'Startseite',
  breadcrumbContact: 'Kontakt',
  pageTitle: 'Kontakt',
  heroDescription:
    'Ob Sie Bint Saeed zum ersten Mal entdecken oder bereits Teil unserer Gemeinschaft sind — wir helfen Ihnen gern bei jeder Anfrage.',
  heroBannerAlt: 'Editorielles Kontaktbanner Bint Saeed',
  portraitAlt:
    'Bint Saeed Abu Dhabi — editorielles Markenporträt mit Springbrunnengras, Palmen und zeitgenössischer Architektur in der Dämmerung',
  nameLabel: 'Vollständiger Name',
  emailLabel: 'E-Mail',
  phoneLabel: 'Telefon',
  subjectLabel: 'Betreff',
  messageLabel: 'Nachricht',
  subjectPlaceholder: 'Betreff wählen',
  messagePlaceholder: 'Wie können wir Ihnen helfen?',
  subjectRequired: 'Bitte wählen Sie einen Betreff',
  messageRequired: 'Bitte geben Sie Ihre Nachricht ein',
  messageTooShort: 'Bitte teilen Sie uns etwas mehr mit, damit wir Ihnen gezielt helfen können.',
  sendMessage: 'Nachricht senden',
  sending: 'Wird gesendet…',
  messageReceived: 'Nachricht erhalten',
  thankYou: 'Vielen Dank für Ihre Anfrage',
  sendAnother: 'Weitere Nachricht senden',
  toastBody: 'Vielen Dank für Ihre Anfrage. Wir melden uns in Kürze.',
  genericError: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
  generalInquiries: 'Allgemeine Anfragen',
  phone: 'Telefon',
  location: 'Standort',
  locationValue: LOCATION_DE,
  businessHours: 'Öffnungszeiten',
  businessHoursValue: 'So – Do: 9:00 – 18:00',
  departmentInboxes: 'Postfächer nach Bereich',
  departments: {
    support: 'Kundenservice',
    orders: 'Bestellungen',
    returns: 'Rückgaben & Umtausch',
    personalisation: 'Personalisierung',
    wholesale: 'Großhandel',
    partnerships: 'Partnerschaften',
    press: 'Presse & Medien',
    legal: 'Rechtliches',
    general: 'Allgemeine Anfrage',
  },
}

const NL: ContactPageCopy = {
  breadcrumbHome: 'Home',
  breadcrumbContact: 'Contact',
  pageTitle: 'Contact',
  heroDescription:
    'Of u Bint Saeed voor het eerst ontdekt of al deel uitmaakt van onze gemeenschap — wij helpen u graag bij elke vraag.',
  heroBannerAlt: 'Editoriaal contactbanner Bint Saeed',
  portraitAlt:
    'Bint Saeed Abu Dhabi — editoriaal merkportret met fonteingras, palmen en hedendaagse architectuur in de schemering',
  nameLabel: 'Volledige naam',
  emailLabel: 'E-mail',
  phoneLabel: 'Telefoon',
  subjectLabel: 'Onderwerp',
  messageLabel: 'Bericht',
  subjectPlaceholder: 'Kies een onderwerp',
  messagePlaceholder: 'Hoe kunnen wij u helpen?',
  subjectRequired: 'Kies een onderwerp',
  messageRequired: 'Voer uw bericht in',
  messageTooShort: 'Deel iets meer detail zodat wij u zorgvuldig kunnen helpen.',
  sendMessage: 'Bericht versturen',
  sending: 'Versturen…',
  messageReceived: 'Bericht ontvangen',
  thankYou: 'Dank u voor uw verzoek',
  sendAnother: 'Nog een bericht versturen',
  toastBody: 'Dank voor uw vraag. Wij nemen binnenkort contact met u op.',
  genericError: 'Er is iets misgegaan. Probeer het opnieuw.',
  generalInquiries: 'Algemene vragen',
  phone: 'Telefoon',
  location: 'Locatie',
  locationValue: LOCATION_NL,
  businessHours: 'Openingstijden',
  businessHoursValue: 'Zo – do: 9:00 – 18:00',
  departmentInboxes: 'Postvakken per afdeling',
  departments: {
    support: 'Klantenservice',
    orders: 'Bestellingen',
    returns: 'Retouren & ruilen',
    personalisation: 'Personalisatie',
    wholesale: 'Groothandel',
    partnerships: 'Partnerschappen',
    press: 'Pers & media',
    legal: 'Juridisch',
    general: 'Algemene vraag',
  },
}

const PT: ContactPageCopy = {
  breadcrumbHome: 'Início',
  breadcrumbContact: 'Contacto',
  pageTitle: 'Contacte-nos',
  heroDescription:
    'Quer esteja a descobrir a Bint Saeed pela primeira vez ou já faça parte da nossa comunidade, teremos todo o gosto em ajudar em cada pedido.',
  heroBannerAlt: 'Banner editorial de contacto Bint Saeed',
  portraitAlt:
    'Bint Saeed Abu Dhabi — retrato editorial de marca com ervas de fonte, palmeiras e arquitetura contemporânea ao crepúsculo',
  nameLabel: 'Nome completo',
  emailLabel: 'E-mail',
  phoneLabel: 'Telefone',
  subjectLabel: 'Assunto',
  messageLabel: 'Mensagem',
  subjectPlaceholder: 'Selecione um assunto',
  messagePlaceholder: 'Como podemos ajudar?',
  subjectRequired: 'Selecione um assunto',
  messageRequired: 'Por favor, introduza a sua mensagem',
  messageTooShort: 'Partilhe um pouco mais de detalhe para podermos assisti-la com precisão.',
  sendMessage: 'Enviar mensagem',
  sending: 'A enviar…',
  messageReceived: 'Mensagem recebida',
  thankYou: 'Agradecemos o seu pedido',
  sendAnother: 'Enviar outra mensagem',
  toastBody: 'Obrigado pelo seu pedido. Entraremos em contacto em breve.',
  genericError: 'Algo correu mal. Tente novamente.',
  generalInquiries: 'Pedidos gerais',
  phone: 'Telefone',
  location: 'Localização',
  locationValue: LOCATION_PT,
  businessHours: 'Horário',
  businessHoursValue: 'Dom – qui: 9:00 – 18:00',
  departmentInboxes: 'Caixas por departamento',
  departments: {
    support: 'Apoio ao cliente',
    orders: 'Encomendas',
    returns: 'Devoluções e trocas',
    personalisation: 'Personalização',
    wholesale: 'Grossista',
    partnerships: 'Parcerias',
    press: 'Imprensa e media',
    legal: 'Jurídico',
    general: 'Pedido geral',
  },
}

const ID: ContactPageCopy = {
  breadcrumbHome: 'Beranda',
  breadcrumbContact: 'Kontak',
  pageTitle: 'Hubungi kami',
  heroDescription:
    'Baik Anda baru mengenal Bint Saeed maupun sudah menjadi bagian dari komunitas kami, kami senang membantu setiap pertanyaan.',
  heroBannerAlt: 'Spanduk editorial kontak Bint Saeed',
  portraitAlt:
    'Bint Saeed Abu Dhabi — potret editorial merek dengan rumput air mancur, palem, dan arsitektur kontemporer saat senja',
  nameLabel: 'Nama lengkap',
  emailLabel: 'Email',
  phoneLabel: 'Telepon',
  subjectLabel: 'Subjek',
  messageLabel: 'Pesan',
  subjectPlaceholder: 'Pilih subjek',
  messagePlaceholder: 'Bagaimana kami dapat membantu?',
  subjectRequired: 'Silakan pilih subjek',
  messageRequired: 'Silakan masukkan pesan Anda',
  messageTooShort: 'Mohon tambahkan sedikit detail agar kami dapat membantu dengan tepat.',
  sendMessage: 'Kirim pesan',
  sending: 'Mengirim…',
  messageReceived: 'Pesan diterima',
  thankYou: 'Terima kasih atas permintaan Anda',
  sendAnother: 'Kirim pesan lain',
  toastBody: 'Terima kasih atas pertanyaan Anda. Kami akan segera menghubungi Anda.',
  genericError: 'Terjadi kesalahan. Silakan coba lagi.',
  generalInquiries: 'Pertanyaan umum',
  phone: 'Telepon',
  location: 'Lokasi',
  locationValue: LOCATION_ID,
  businessHours: 'Jam kerja',
  businessHoursValue: 'Min – Kam: 09.00 – 18.00',
  departmentInboxes: 'Kotak masuk per departemen',
  departments: {
    support: 'Dukungan pelanggan',
    orders: 'Pesanan',
    returns: 'Pengembalian & penukaran',
    personalisation: 'Personalisasi',
    wholesale: 'Grosir',
    partnerships: 'Kemitraan',
    press: 'Pers & media',
    legal: 'Hukum',
    general: 'Pertanyaan umum',
  },
}

const MS: ContactPageCopy = {
  breadcrumbHome: 'Laman utama',
  breadcrumbContact: 'Hubungi',
  pageTitle: 'Hubungi kami',
  heroDescription:
    'Sama ada anda baharu mengenal Bint Saeed atau sudah menjadi sebahagian daripada komuniti kami, kami gembira membantu setiap pertanyaan.',
  heroBannerAlt: 'Sepanduk editorial hubungan Bint Saeed',
  portraitAlt:
    'Bint Saeed Abu Dhabi — potret editorial jenama dengan rumput air pancut, palma dan seni bina kontemporari pada senja',
  nameLabel: 'Nama lengkap',
  emailLabel: 'E-mel',
  phoneLabel: 'Telefon',
  subjectLabel: 'Subjek',
  messageLabel: 'Mesej',
  subjectPlaceholder: 'Pilih subjek',
  messagePlaceholder: 'Bagaimanakah kami boleh membantu?',
  subjectRequired: 'Sila pilih subjek',
  messageRequired: 'Sila masukkan mesej anda',
  messageTooShort: 'Sila kongsikan sedikit lagi butiran supaya kami dapat membantu anda dengan baik.',
  sendMessage: 'Hantar mesej',
  sending: 'Menghantar…',
  messageReceived: 'Mesej diterima',
  thankYou: 'Terima kasih atas permintaan anda',
  sendAnother: 'Hantar mesej lain',
  toastBody: 'Terima kasih atas pertanyaan anda. Kami akan menghubungi anda tidak lama lagi.',
  genericError: 'Sesuatu telah berlaku. Sila cuba lagi.',
  generalInquiries: 'Pertanyaan umum',
  phone: 'Telefon',
  location: 'Lokasi',
  locationValue: LOCATION_MS,
  businessHours: 'Waktu perniagaan',
  businessHoursValue: 'Ahd – Kha: 9 pagi – 6 petang',
  departmentInboxes: 'Peti masuk mengikut jabatan',
  departments: {
    support: 'Sokongan pelanggan',
    orders: 'Pesanan',
    returns: 'Pemulangan & pertukaran',
    personalisation: 'Pemperibadian',
    wholesale: 'Borong',
    partnerships: 'Perkongsian',
    press: 'Akhbar & media',
    legal: 'Undang-undang',
    general: 'Pertanyaan umum',
  },
}

const BY_LOCALE: Record<AppLocale, ContactPageCopy> = {
  en: EN,
  ar: AR,
  fr: FR,
  it: IT,
  es: ES,
  ru: RU,
  zh: ZH,
  de: DE,
  nl: NL,
  pt: PT,
  id: ID,
  ms: MS,
}

export function getContactPageCopy(locale: AppLocale | Language | string): ContactPageCopy {
  const key = (locale in BY_LOCALE ? locale : 'en') as AppLocale
  const base = BY_LOCALE[key]
  try {
    const ui = commerceUi(key)
    return {
      ...base,
      breadcrumbHome: ui.common.home,
    }
  } catch {
    return base
  }
}

export const CONTACT_SUBJECT_VALUES = [
  'support',
  'orders',
  'returns',
  'personalisation',
  'wholesale',
  'partnerships',
  'press',
  'legal',
  'general',
] as const satisfies readonly ContactDepartmentKey[]
