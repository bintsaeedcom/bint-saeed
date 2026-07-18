import type { AppLocale } from '@/lib/i18n/routing'
import { commerceUi } from '@/lib/i18n/commerceUi'

export type CareersCopy = {
  breadcrumbHome: string
  breadcrumb: string
  backToHome: string
  pageTitle: string
  intro: string
  contactCta: string
  aboutCta: string
}

const EN: CareersCopy = {
  breadcrumbHome: 'Home',
  breadcrumb: 'Careers',
  backToHome: 'Back to Home',
  pageTitle: 'Careers',
  intro:
    'We are building with care across design, operations, and client experience. If you are interested in future opportunities, please reach out to our team and include your role focus and portfolio.',
  contactCta: 'Contact Team',
  aboutCta: 'About The House',
}

const AR: CareersCopy = {
  breadcrumbHome: 'الرئيسية',
  breadcrumb: 'الوظائف',
  backToHome: 'العودة للرئيسية',
  pageTitle: 'الوظائف',
  intro:
    'نبني بعناية عبر التصميم والعمليات وتجربة العميل. إذا كنتِ مهتمة بفرص مستقبلية، تواصلي مع فريقنا مع ذكر مجال دورك وملف أعمالك.',
  contactCta: 'تواصلي مع الفريق',
  aboutCta: 'عن الدار',
}

const FR: CareersCopy = {
  breadcrumbHome: 'Accueil',
  breadcrumb: 'Carrières',
  backToHome: 'Retour à l’accueil',
  pageTitle: 'Carrières',
  intro:
    'Nous construisons avec soin, entre design, opérations et expérience client. Si vous souhaitez être considérée pour de futures opportunités, écrivez à notre équipe en précisant votre domaine et en joignant votre portfolio.',
  contactCta: 'Contacter l’équipe',
  aboutCta: 'À propos de la maison',
}

const IT: CareersCopy = {
  breadcrumbHome: 'Home',
  breadcrumb: 'Carriere',
  backToHome: 'Torna alla home',
  pageTitle: 'Carriere',
  intro:
    'Costruiamo con cura tra design, operazioni ed esperienza cliente. Se desideri essere considerata per opportunità future, scrivi al nostro team indicando il tuo ambito e allegando il portfolio.',
  contactCta: 'Contatta il team',
  aboutCta: 'La maison',
}

const ES: CareersCopy = {
  breadcrumbHome: 'Inicio',
  breadcrumb: 'Carreras',
  backToHome: 'Volver al inicio',
  pageTitle: 'Carreras',
  intro:
    'Construimos con cuidado entre diseño, operaciones y experiencia de clienta. Si te interesan oportunidades futuras, escribe a nuestro equipo indicando tu área de interés y adjuntando tu portfolio.',
  contactCta: 'Contactar al equipo',
  aboutCta: 'Sobre la maison',
}

const RU: CareersCopy = {
  breadcrumbHome: 'Главная',
  breadcrumb: 'Карьера',
  backToHome: 'На главную',
  pageTitle: 'Карьера',
  intro:
    'Мы выстраиваем дом с вниманием к дизайну, операциям и клиентскому опыту. Если вас интересуют будущие возможности, напишите нашей команде, указав направление и приложив портфолио.',
  contactCta: 'Связаться с командой',
  aboutCta: 'О доме',
}

const ZH: CareersCopy = {
  breadcrumbHome: '首页',
  breadcrumb: '招聘',
  backToHome: '返回首页',
  pageTitle: '招聘',
  intro:
    '我们以审慎之心推进设计、运营与客户体验。若您希望了解未来机会，请联系我们的团队，说明您关注的方向并附上作品集。',
  contactCta: '联系团队',
  aboutCta: '关于品牌',
}

const DE: CareersCopy = {
  breadcrumbHome: 'Startseite',
  breadcrumb: 'Karriere',
  backToHome: 'Zurück zur Startseite',
  pageTitle: 'Karriere',
  intro:
    'Wir bauen mit Sorgfalt an Design, Operations und Kundenerlebnis. Wenn Sie an künftigen Möglichkeiten interessiert sind, schreiben Sie unserem Team und nennen Sie Ihren Schwerpunkt sowie Ihr Portfolio.',
  contactCta: 'Team kontaktieren',
  aboutCta: 'Über das Haus',
}

const NL: CareersCopy = {
  breadcrumbHome: 'Home',
  breadcrumb: 'Carrière',
  backToHome: 'Terug naar home',
  pageTitle: 'Carrière',
  intro:
    'Wij bouwen met zorg aan design, operations en klantervaring. Bent u geïnteresseerd in toekomstige mogelijkheden, neem dan contact op met ons team en vermeld uw focusgebied en portfolio.',
  contactCta: 'Contacteer het team',
  aboutCta: 'Over het huis',
}

const PT: CareersCopy = {
  breadcrumbHome: 'Início',
  breadcrumb: 'Carreiras',
  backToHome: 'Voltar ao início',
  pageTitle: 'Carreiras',
  intro:
    'Construímos com cuidado entre design, operações e experiência da cliente. Se tiver interesse em oportunidades futuras, escreva à nossa equipa indicando a sua área e anexando o portefólio.',
  contactCta: 'Contactar a equipa',
  aboutCta: 'Sobre a maison',
}

const ID: CareersCopy = {
  breadcrumbHome: 'Beranda',
  breadcrumb: 'Karier',
  backToHome: 'Kembali ke beranda',
  pageTitle: 'Karier',
  intro:
    'Kami membangun dengan teliti di bidang desain, operasional, dan pengalaman klien. Jika Anda tertarik pada peluang di masa depan, hubungi tim kami dan sertakan fokus peran serta portofolio Anda.',
  contactCta: 'Hubungi tim',
  aboutCta: 'Tentang maison',
}

const MS: CareersCopy = {
  breadcrumbHome: 'Laman utama',
  breadcrumb: 'Kerjaya',
  backToHome: 'Kembali ke laman utama',
  pageTitle: 'Kerjaya',
  intro:
    'Kami membina dengan teliti merentas reka bentuk, operasi dan pengalaman pelanggan. Jika anda berminat dengan peluang akan datang, hubungi pasukan kami dan nyatakan fokus peranan serta portfolio anda.',
  contactCta: 'Hubungi pasukan',
  aboutCta: 'Tentang maison',
}

const BY_LOCALE: Record<AppLocale, CareersCopy> = {
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

export function getCareersCopy(locale: AppLocale | string): CareersCopy {
  const key = (locale in BY_LOCALE ? locale : 'en') as AppLocale
  const base = BY_LOCALE[key]
  try {
    const ui = commerceUi(locale as AppLocale)
    return {
      ...base,
      breadcrumbHome: ui.common.home,
      backToHome: ui.common.backToHome,
    }
  } catch {
    return base
  }
}
