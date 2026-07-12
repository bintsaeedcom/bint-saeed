import type { AppLocale } from '@/lib/i18n/routing'
import { OFFICIAL_EMAILS } from '@/lib/brand/officialEmails'
import { COOKIE_POLICY_AR, type CookiePolicyContentAr } from '@/lib/legal/cookiePolicyContentAr'
import {
  LANGUAGE_CLAUSE_SHORT_AR,
  LANGUAGE_CLAUSE_SHORT_DE,
  LANGUAGE_CLAUSE_SHORT_EN,
  LANGUAGE_CLAUSE_SHORT_ES,
  LANGUAGE_CLAUSE_SHORT_FR,
  LANGUAGE_CLAUSE_SHORT_ID,
  LANGUAGE_CLAUSE_SHORT_IT,
  LANGUAGE_CLAUSE_SHORT_MS,
  LANGUAGE_CLAUSE_SHORT_NL,
  LANGUAGE_CLAUSE_SHORT_PT,
  LANGUAGE_CLAUSE_SHORT_RU,
  LANGUAGE_CLAUSE_SHORT_ZH,
  LANGUAGE_CLAUSE_TITLE_AR,
  LANGUAGE_CLAUSE_TITLE_DE,
  LANGUAGE_CLAUSE_TITLE_EN,
  LANGUAGE_CLAUSE_TITLE_ES,
  LANGUAGE_CLAUSE_TITLE_FR,
  LANGUAGE_CLAUSE_TITLE_ID,
  LANGUAGE_CLAUSE_TITLE_IT,
  LANGUAGE_CLAUSE_TITLE_MS,
  LANGUAGE_CLAUSE_TITLE_NL,
  LANGUAGE_CLAUSE_TITLE_PT,
  LANGUAGE_CLAUSE_TITLE_RU,
  LANGUAGE_CLAUSE_TITLE_ZH,
} from '@/lib/legal/languageAndTranslationClause'

export type CookiePolicyContent = CookiePolicyContentAr

const ESSENTIAL_EN = [
  { name: 'cookieConsent', purpose: 'Stores your cookie choice state', provider: 'Bint Saeed', duration: 'up to 1 year' },
  { name: 'analyticsConsent', purpose: 'Stores analytics consent preference', provider: 'Bint Saeed', duration: 'up to 1 year' },
  { name: 'marketingConsent', purpose: 'Stores marketing consent preference', provider: 'Bint Saeed', duration: 'up to 1 year' },
  { name: 'cart data (local state)', purpose: 'Maintains basket/session shopping state', provider: 'Bint Saeed', duration: 'session/local storage' },
  { name: '__stripe_mid', purpose: 'Fraud prevention and payment security', provider: 'Stripe', duration: 'up to 1 year' },
  { name: '__stripe_sid', purpose: 'Payment session fraud prevention', provider: 'Stripe', duration: 'up to 30 minutes' },
]

const COOKIE_EN: CookiePolicyContent = {
  breadcrumb: 'Cookie Policy',
  homeBreadcrumb: 'Home',
  heroLabel: 'Legal',
  pageTitle: 'Cookie Policy',
  lastUpdated: 'Last updated: July 2026',
  intro:
    'This policy explains how Bint Saeed uses cookies and similar technologies. We ask for consent before setting non-essential cookies and provide controls to manage preferences.',
  summaryTitle: 'About This Cookie Policy',
  summaryBody:
    'Our cookie controls follow UAE legal requirements and GDPR/ePrivacy consent expectations for relevant users, including users in the EU.',
  sectionList: [
    '1. What Are Cookies',
    '2. Essential Cookies (Always Active)',
    '3. Analytics and Behavioral Cookies (Optional)',
    '4. Third-Party Services and Cookies',
    '5. Cookie Consent and Preference Management',
    '6. Withdrawing or Changing Consent',
    '7. Cookie Retention',
    '8. Language and Translations',
    '9. Policy Updates',
    '10. Contact',
  ],
  whatAreCookies: {
    title: '1. What Are Cookies',
    body: 'Cookies are small text files placed on your device when you visit a website. They support secure functionality, remember preferences, and may help us understand aggregated usage patterns.',
  },
  essentialCookies: {
    title: '2. Essential Cookies (Always Active)',
    intro:
      'These cookies are necessary for core website operation, security, checkout, and consent management. They are set regardless of optional analytics consent.',
    tableHeaders: { cookie: 'Cookie / Key', purpose: 'Purpose', provider: 'Provider', retention: 'Retention' },
    cookies: ESSENTIAL_EN,
  },
  analytics: {
    title: '3. Analytics and Behavioral Cookies (Optional)',
    body: 'Optional analytics and behavioral cookies load only after consent through our cookie controls. Without consent, these tools do not run in tracking mode.',
    noTrackers: 'No optional analytics trackers are currently enabled in this environment.',
  },
  thirdParty: {
    title: '4. Third-Party Services and Cookies',
    items: [
      {
        label: 'Stripe, PayPal, and Mollie:',
        text: 'payment processing and related fraud-prevention or checkout cookies where those rails are offered.',
      },
      {
        label: 'Analytics providers:',
        text: 'activated only when configured and analytics consent is granted (for example GA4, Microsoft Clarity, or PostHog when enabled).',
      },
      {
        label: 'Hosting/infrastructure vendors:',
        text: 'may process technical request metadata for service reliability.',
      },
    ],
  },
  consent: {
    title: '5. Cookie Consent and Preference Management',
    body: 'On first visit, you can accept all cookies or essential only. Preferences are stored in your browser (including localStorage keys used for consent). Optional analytics trackers load only after analytics consent. Marketing consent is recorded for future advertising tools and does not currently load ad pixels on this site unless separately enabled.',
  },
  withdraw: {
    title: '6. Withdrawing or Changing Consent',
    body: 'You can change preferences using Cookie settings in the website footer, or by clearing this site’s cookies and local storage and revisiting the website. You can also use browser controls to block cookies.',
    browserInstructions: [
      'Chrome: Settings → Privacy and security → Cookies',
      'Firefox: Settings → Privacy & Security → Cookies',
      'Safari: Preferences → Privacy',
      'Edge: Settings → Cookies and site permissions',
    ],
  },
  retention: {
    title: '7. Cookie Retention',
    body: 'Cookie retention differs by purpose and provider. Session cookies are removed when sessions end, while persistent cookies may remain up to their defined expiry period.',
  },
  updates: {
    title: '9. Policy Updates',
    body: 'We may update this Cookie Policy to reflect legal, technical, or operational changes. Material updates are shown in the revised “Last updated” date and, where required, in renewed consent prompts.',
  },
  contact: {
    title: '10. Contact',
    body: 'If you have questions about this Cookie Policy or cookie controls, contact:',
    legalLabel: 'Legal Inquiries:',
    generalLabel: 'General Inquiries:',
  },
}

type LocalePack = {
  meta: Pick<
    CookiePolicyContent,
    | 'breadcrumb'
    | 'homeBreadcrumb'
    | 'heroLabel'
    | 'pageTitle'
    | 'lastUpdated'
    | 'intro'
    | 'summaryTitle'
    | 'summaryBody'
  >
  sectionList: string[]
  whatAreCookies: CookiePolicyContent['whatAreCookies']
  essentialIntro: string
  tableHeaders: CookiePolicyContent['essentialCookies']['tableHeaders']
  cookiePurposes: string[]
  analytics: CookiePolicyContent['analytics']
  thirdParty: CookiePolicyContent['thirdParty']
  consent: CookiePolicyContent['consent']
  withdrawBody: string
  retention: string
  languageTitle: string
  languageBody: string
  updates: CookiePolicyContent['updates']
  contact: CookiePolicyContent['contact']
}

function buildFromPack(pack: LocalePack): CookiePolicyContent {
  return {
    ...pack.meta,
    sectionList: pack.sectionList,
    whatAreCookies: pack.whatAreCookies,
    essentialCookies: {
      title: pack.sectionList[1] ?? '2. Essential Cookies',
      intro: pack.essentialIntro,
      tableHeaders: pack.tableHeaders,
      cookies: ESSENTIAL_EN.map((row, i) => ({
        ...row,
        purpose: pack.cookiePurposes[i] ?? row.purpose,
      })),
    },
    analytics: pack.analytics,
    thirdParty: pack.thirdParty,
    consent: pack.consent,
    withdraw: {
      title: pack.sectionList[5] ?? '6. Withdrawing or Changing Consent',
      body: pack.withdrawBody,
      browserInstructions: COOKIE_EN.withdraw.browserInstructions,
    },
    retention: {
      title: pack.sectionList[6] ?? '7. Cookie Retention',
      body: pack.retention,
    },
    updates: pack.updates,
    contact: pack.contact,
  }
}

const FR = buildFromPack({
  meta: {
    breadcrumb: 'Politique relative aux cookies',
    homeBreadcrumb: 'Accueil',
    heroLabel: 'Juridique',
    pageTitle: 'Politique relative aux cookies',
    lastUpdated: 'Dernière mise à jour : juillet 2026',
    intro:
      'Cette politique explique comment Bint Saeed utilise les cookies et technologies similaires. Nous demandons votre consentement avant de déposer des cookies non essentiels et fournissons des contrôles pour gérer vos préférences.',
    summaryTitle: 'À propos de cette politique',
    summaryBody:
      'Nos contrôles cookies s’alignent sur les exigences juridiques des EAU et sur les attentes de consentement RGPD/ePrivacy pour les utilisateurs concernés, y compris dans l’UE.',
  },
  sectionList: [
    '1. Que sont les cookies',
    '2. Cookies essentiels (toujours actifs)',
    '3. Cookies d’analyse et de comportement (optionnels)',
    '4. Services et cookies tiers',
    '5. Consentement et gestion des préférences',
    '6. Retrait ou modification du consentement',
    '7. Durée de conservation',
    `8. ${LANGUAGE_CLAUSE_TITLE_FR}`,
    '9. Mises à jour de la politique',
    '10. Contact',
  ],
  whatAreCookies: {
    title: '1. Que sont les cookies',
    body: 'Les cookies sont de petits fichiers texte placés sur votre appareil lorsque vous visitez un site. Ils assurent des fonctions sécurisées, mémorisent des préférences et peuvent aider à comprendre des usages agrégés.',
  },
  essentialIntro:
    'Ces cookies sont nécessaires au fonctionnement du site, à la sécurité, au paiement et à la gestion du consentement. Ils sont déposés indépendamment du consentement analytique optionnel.',
  tableHeaders: { cookie: 'Cookie / clé', purpose: 'Finalité', provider: 'Fournisseur', retention: 'Conservation' },
  cookiePurposes: [
    'Enregistre votre choix de cookies',
    'Enregistre la préférence de consentement analytique',
    'Enregistre la préférence de consentement marketing',
    'Maintient l’état panier/session',
    'Prévention de la fraude et sécurité du paiement',
    'Prévention de fraude pour la session de paiement',
  ],
  analytics: {
    title: '3. Cookies d’analyse et de comportement (optionnels)',
    body: 'Les cookies d’analyse optionnels ne sont chargés qu’après consentement via nos contrôles. Sans consentement, ces outils ne fonctionnent pas en mode suivi.',
    noTrackers: 'Aucun outil d’analyse optionnel n’est actuellement activé dans cet environnement.',
  },
  thirdParty: {
    title: '4. Services et cookies tiers',
    items: [
      {
        label: 'Stripe, PayPal et Mollie :',
        text: 'traitement des paiements et cookies antifraude ou de paiement lorsqu’ils sont proposés.',
      },
      {
        label: 'Prestataires d’analyse :',
        text: 'activés uniquement s’ils sont configurés et si le consentement analytique est donné.',
      },
      {
        label: 'Hébergement / infrastructure :',
        text: 'peuvent traiter des métadonnées techniques de requête pour la fiabilité du service.',
      },
    ],
  },
  consent: {
    title: '5. Consentement et gestion des préférences',
    body: 'Lors de la première visite, vous pouvez tout accepter ou conserver uniquement l’essentiel. Les préférences sont stockées dans le navigateur (y compris localStorage). Les outils d’analyse optionnels ne se chargent qu’après consentement analytique. Le consentement marketing est enregistré pour de futurs outils publicitaires et ne charge actuellement aucun pixel publicitaire sur ce site sauf activation séparée.',
  },
  withdrawBody:
    'Vous pouvez modifier vos préférences via Cookie settings dans le pied de page, ou en effaçant les cookies et le stockage local de ce site puis en le revisitant. Vous pouvez aussi utiliser les contrôles du navigateur.',
  retention:
    'La durée de conservation varie selon la finalité et le fournisseur. Les cookies de session sont supprimés à la fin de la session ; les cookies persistants peuvent rester jusqu’à leur échéance.',
  languageTitle: LANGUAGE_CLAUSE_TITLE_FR,
  languageBody: LANGUAGE_CLAUSE_SHORT_FR,
  updates: {
    title: '9. Mises à jour de la politique',
    body: 'Nous pouvons mettre à jour cette politique pour refléter des changements juridiques, techniques ou opérationnels. Les mises à jour importantes apparaissent dans la date « Dernière mise à jour » et, si besoin, dans de nouvelles demandes de consentement.',
  },
  contact: {
    title: '10. Contact',
    body: 'Pour toute question sur cette politique ou les contrôles cookies, contactez :',
    legalLabel: 'Demandes juridiques :',
    generalLabel: 'Demandes générales :',
  },
})

const ID = buildFromPack({
  meta: {
    breadcrumb: 'Kebijakan Cookie',
    homeBreadcrumb: 'Beranda',
    heroLabel: 'Hukum',
    pageTitle: 'Kebijakan Cookie',
    lastUpdated: 'Terakhir diperbarui: Juli 2026',
    intro:
      'Kebijakan ini menjelaskan bagaimana Bint Saeed menggunakan cookie dan teknologi serupa. Kami meminta persetujuan sebelum menempatkan cookie non-esensial dan menyediakan kontrol untuk mengelola preferensi.',
    summaryTitle: 'Tentang Kebijakan Cookie ini',
    summaryBody:
      'Kontrol cookie kami mengikuti persyaratan hukum UAE dan ekspektasi persetujuan GDPR/ePrivacy bagi pengguna yang relevan, termasuk di UE.',
  },
  sectionList: [
    '1. Apa Itu Cookie',
    '2. Cookie Esensial (Selalu Aktif)',
    '3. Cookie Analitik dan Perilaku (Opsional)',
    '4. Layanan dan Cookie Pihak Ketiga',
    '5. Persetujuan Cookie dan Pengelolaan Preferensi',
    '6. Menarik atau Mengubah Persetujuan',
    '7. Retensi Cookie',
    `8. ${LANGUAGE_CLAUSE_TITLE_ID}`,
    '9. Pembaruan Kebijakan',
    '10. Kontak',
  ],
  whatAreCookies: {
    title: '1. Apa Itu Cookie',
    body: 'Cookie adalah file teks kecil yang ditempatkan di perangkat Anda saat mengunjungi situs. Cookie mendukung fungsi aman, mengingat preferensi, dan dapat membantu memahami pola penggunaan secara agregat.',
  },
  essentialIntro:
    'Cookie ini diperlukan untuk operasi inti situs, keamanan, checkout, dan pengelolaan persetujuan. Cookie ini ditetapkan terlepas dari persetujuan analitik opsional.',
  tableHeaders: { cookie: 'Cookie / Kunci', purpose: 'Tujuan', provider: 'Penyedia', retention: 'Retensi' },
  cookiePurposes: [
    'Menyimpan pilihan cookie Anda',
    'Menyimpan preferensi persetujuan analitik',
    'Menyimpan preferensi persetujuan pemasaran',
    'Mempertahankan status keranjang/sesi',
    'Pencegahan penipuan dan keamanan pembayaran',
    'Pencegahan penipuan sesi pembayaran',
  ],
  analytics: {
    title: '3. Cookie Analitik dan Perilaku (Opsional)',
    body: 'Cookie analitik opsional hanya dimuat setelah persetujuan melalui kontrol cookie. Tanpa persetujuan, alat ini tidak berjalan dalam mode pelacakan.',
    noTrackers: 'Tidak ada pelacak analitik opsional yang saat ini diaktifkan di lingkungan ini.',
  },
  thirdParty: {
    title: '4. Layanan dan Cookie Pihak Ketiga',
    items: [
      {
        label: 'Stripe, PayPal, dan Mollie:',
        text: 'pemrosesan pembayaran serta cookie antifraud atau checkout jika saluran tersebut ditawarkan.',
      },
      {
        label: 'Penyedia analitik:',
        text: 'diaktifkan hanya jika dikonfigurasi dan persetujuan analitik diberikan.',
      },
      {
        label: 'Hosting/infrastruktur:',
        text: 'dapat memproses metadata permintaan teknis untuk keandalan layanan.',
      },
    ],
  },
  consent: {
    title: '5. Persetujuan Cookie dan Pengelolaan Preferensi',
    body: 'Pada kunjungan pertama, Anda dapat menerima semua cookie atau hanya yang esensial. Preferensi disimpan di browser (termasuk localStorage). Pelacak analitik opsional hanya dimuat setelah persetujuan analitik. Persetujuan pemasaran dicatat untuk alat iklan di masa depan dan saat ini tidak memuat piksel iklan di situs ini kecuali diaktifkan secara terpisah.',
  },
  withdrawBody:
    'Anda dapat mengubah preferensi melalui Cookie settings di footer situs, atau dengan menghapus cookie dan penyimpanan lokal situs ini lalu mengunjungi kembali. Anda juga dapat menggunakan kontrol browser.',
  retention:
    'Retensi cookie berbeda menurut tujuan dan penyedia. Cookie sesi dihapus saat sesi berakhir; cookie persisten dapat tetap ada hingga masa berlakunya.',
  languageTitle: LANGUAGE_CLAUSE_TITLE_ID,
  languageBody: LANGUAGE_CLAUSE_SHORT_ID,
  updates: {
    title: '9. Pembaruan Kebijakan',
    body: 'Kami dapat memperbarui Kebijakan Cookie ini untuk mencerminkan perubahan hukum, teknis, atau operasional. Pembaruan material tercermin pada tanggal “Terakhir diperbarui” dan, jika diperlukan, pada permintaan persetujuan ulang.',
  },
  contact: {
    title: '10. Kontak',
    body: 'Jika Anda memiliki pertanyaan tentang Kebijakan Cookie ini atau kontrol cookie, hubungi:',
    legalLabel: 'Pertanyaan Hukum:',
    generalLabel: 'Pertanyaan Umum:',
  },
})

const MS = buildFromPack({
  meta: {
    breadcrumb: 'Dasar Kuki',
    homeBreadcrumb: 'Laman Utama',
    heroLabel: 'Undang-undang',
    pageTitle: 'Dasar Kuki',
    lastUpdated: 'Kemas kini terakhir: Julai 2026',
    intro:
      'Dasar ini menjelaskan bagaimana Bint Saeed menggunakan kuki dan teknologi serupa. Kami meminta kebenaran sebelum menetapkan kuki bukan penting dan menyediakan kawalan untuk mengurus keutamaan.',
    summaryTitle: 'Perihal Dasar Kuki ini',
    summaryBody:
      'Kawalan kuki kami mengikuti keperluan undang-undang UAE dan jangkaan kebenaran GDPR/ePrivacy untuk pengguna berkaitan, termasuk di EU.',
  },
  sectionList: [
    '1. Apakah Kuki',
    '2. Kuki Penting (Sentiasa Aktif)',
    '3. Kuki Analitik dan Tingkah Laku (Pilihan)',
    '4. Perkhidmatan dan Kuki Pihak Ketiga',
    '5. Kebenaran Kuki dan Pengurusan Keutamaan',
    '6. Menarik Balik atau Mengubah Kebenaran',
    '7. Tempoh Simpanan Kuki',
    `8. ${LANGUAGE_CLAUSE_TITLE_MS}`,
    '9. Kemas Kini Dasar',
    '10. Hubungi',
  ],
  whatAreCookies: {
    title: '1. Apakah Kuki',
    body: 'Kuki ialah fail teks kecil yang diletakkan pada peranti anda apabila melawat laman web. Ia menyokong fungsi selamat, mengingati keutamaan, dan boleh membantu memahami corak penggunaan secara agregat.',
  },
  essentialIntro:
    'Kuki ini diperlukan untuk operasi teras laman, keselamatan, pembayaran, dan pengurusan kebenaran. Ia ditetapkan tanpa mengira kebenaran analitik pilihan.',
  tableHeaders: { cookie: 'Kuki / Kunci', purpose: 'Tujuan', provider: 'Penyedia', retention: 'Tempoh' },
  cookiePurposes: [
    'Menyimpan pilihan kuki anda',
    'Menyimpan keutamaan kebenaran analitik',
    'Menyimpan keutamaan kebenaran pemasaran',
    'Mengekalkan status bakul/sesi',
    'Pencegahan penipuan dan keselamatan pembayaran',
    'Pencegahan penipuan sesi pembayaran',
  ],
  analytics: {
    title: '3. Kuki Analitik dan Tingkah Laku (Pilihan)',
    body: 'Kuki analitik pilihan dimuatkan hanya selepas kebenaran melalui kawalan kuki. Tanpa kebenaran, alat ini tidak berjalan dalam mod penjejakan.',
    noTrackers: 'Tiada penjejak analitik pilihan yang diaktifkan dalam persekitaran ini pada masa ini.',
  },
  thirdParty: {
    title: '4. Perkhidmatan dan Kuki Pihak Ketiga',
    items: [
      {
        label: 'Stripe, PayPal, dan Mollie:',
        text: 'pemprosesan pembayaran serta kuki pencegahan penipuan atau pembayaran jika ditawarkan.',
      },
      {
        label: 'Penyedia analitik:',
        text: 'diaktifkan hanya apabila dikonfigurasi dan kebenaran analitik diberikan.',
      },
      {
        label: 'Hosting/infrastruktur:',
        text: 'boleh memproses metadata permintaan teknikal untuk kebolehpercayaan perkhidmatan.',
      },
    ],
  },
  consent: {
    title: '5. Kebenaran Kuki dan Pengurusan Keutamaan',
    body: 'Pada lawatan pertama, anda boleh menerima semua kuki atau yang penting sahaja. Keutamaan disimpan dalam pelayar (termasuk localStorage). Penjejak analitik pilihan dimuatkan hanya selepas kebenaran analitik. Kebenaran pemasaran direkodkan untuk alat iklan akan datang dan tidak memuatkan piksel iklan pada masa ini kecuali diaktifkan secara berasingan.',
  },
  withdrawBody:
    'Anda boleh mengubah keutamaan melalui Cookie settings di footer laman, atau dengan memadam kuki dan storan tempatan laman ini lalu melawat semula. Anda juga boleh menggunakan kawalan pelayar.',
  retention:
    'Tempoh simpanan kuki berbeza mengikut tujuan dan penyedia. Kuki sesi dibuang apabila sesi tamat; kuki berterusan mungkin kekal hingga tarikh luputnya.',
  languageTitle: LANGUAGE_CLAUSE_TITLE_MS,
  languageBody: LANGUAGE_CLAUSE_SHORT_MS,
  updates: {
    title: '9. Kemas Kini Dasar',
    body: 'Kami boleh mengemas kini Dasar Kuki ini untuk mencerminkan perubahan undang-undang, teknikal, atau operasi. Kemas kini material ditunjukkan pada tarikh “Kemas kini terakhir” dan, jika perlu, dalam permintaan kebenaran semula.',
  },
  contact: {
    title: '10. Hubungi',
    body: 'Jika anda ada soalan tentang Dasar Kuki ini atau kawalan kuki, hubungi:',
    legalLabel: 'Pertanyaan Undang-undang:',
    generalLabel: 'Pertanyaan Umum:',
  },
})

/** Locales that reuse EN essential cookie names with localized surrounding copy. */
const LOCALE_COOKIE: Partial<Record<AppLocale, CookiePolicyContent>> = {
  fr: FR,
  id: ID,
  ms: MS,
  de: buildFromPack({
    meta: {
      breadcrumb: 'Cookie-Richtlinie',
      homeBreadcrumb: 'Startseite',
      heroLabel: 'Rechtliches',
      pageTitle: 'Cookie-Richtlinie',
      lastUpdated: 'Zuletzt aktualisiert: Juli 2026',
      intro:
        'Diese Richtlinie erläutert, wie Bint Saeed Cookies und ähnliche Technologien verwendet. Wir bitten um Einwilligung, bevor nicht wesentliche Cookies gesetzt werden, und stellen Steuerungen zur Verwaltung der Präferenzen bereit.',
      summaryTitle: 'Über diese Cookie-Richtlinie',
      summaryBody:
        'Unsere Cookie-Steuerungen entsprechen den rechtlichen Anforderungen der VAE und den GDPR/ePrivacy-Einwilligungserwartungen für betroffene Nutzer, einschließlich in der EU.',
    },
    sectionList: [
      '1. Was sind Cookies',
      '2. Essenzielle Cookies (immer aktiv)',
      '3. Analyse- und Verhaltenscookies (optional)',
      '4. Drittanbieterdienste und Cookies',
      '5. Einwilligung und Präferenzverwaltung',
      '6. Widerruf oder Änderung der Einwilligung',
      '7. Speicherdauer',
      `8. ${LANGUAGE_CLAUSE_TITLE_DE}`,
      '9. Aktualisierungen der Richtlinie',
      '10. Kontakt',
    ],
    whatAreCookies: {
      title: '1. Was sind Cookies',
      body: 'Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie unterstützen sichere Funktionen, speichern Präferenzen und können helfen, aggregierte Nutzungsmuster zu verstehen.',
    },
    essentialIntro:
      'Diese Cookies sind für den Kernbetrieb der Website, Sicherheit, Checkout und Einwilligungsverwaltung erforderlich. Sie werden unabhängig von optionaler Analyseeinwilligung gesetzt.',
    tableHeaders: { cookie: 'Cookie / Schlüssel', purpose: 'Zweck', provider: 'Anbieter', retention: 'Speicherdauer' },
    cookiePurposes: [
      'Speichert Ihre Cookie-Auswahl',
      'Speichert die Analyseeinwilligung',
      'Speichert die Marketingeinwilligung',
      'Erhält den Warenkorb-/Sitzungsstatus',
      'Betrugsprävention und Zahlungssicherheit',
      'Betrugsprävention für die Zahlungssitzung',
    ],
    analytics: {
      title: '3. Analyse- und Verhaltenscookies (optional)',
      body: 'Optionale Analyse-Cookies werden erst nach Einwilligung über unsere Cookie-Steuerungen geladen. Ohne Einwilligung laufen diese Tools nicht im Tracking-Modus.',
      noTrackers: 'In dieser Umgebung sind derzeit keine optionalen Analyse-Tracker aktiviert.',
    },
    thirdParty: {
      title: '4. Drittanbieterdienste und Cookies',
      items: [
        {
          label: 'Stripe, PayPal und Mollie:',
          text: 'Zahlungsabwicklung sowie Betrugspräventions- oder Checkout-Cookies, soweit angeboten.',
        },
        {
          label: 'Analyseanbieter:',
          text: 'nur aktiv, wenn konfiguriert und Analyseeinwilligung erteilt wurde.',
        },
        {
          label: 'Hosting/Infrastruktur:',
          text: 'können technische Anfragemetadaten zur Dienstzuverlässigkeit verarbeiten.',
        },
      ],
    },
    consent: {
      title: '5. Einwilligung und Präferenzverwaltung',
      body: 'Beim ersten Besuch können Sie alle Cookies akzeptieren oder nur die wesentlichen behalten. Präferenzen werden im Browser gespeichert (einschließlich localStorage). Optionale Analyse-Tracker laden erst nach Analyseeinwilligung. Die Marketingeinwilligung wird für künftige Werbemittel gespeichert und lädt derzeit keine Werbe-Pixel auf dieser Website, sofern nicht separat aktiviert.',
    },
    withdrawBody:
      'Sie können Präferenzen über Cookie settings in der Fußzeile ändern oder Cookies und lokalen Speicher dieser Website löschen und die Website erneut besuchen. Sie können auch Browsersteuerungen nutzen.',
    retention:
      'Die Speicherdauer unterscheidet sich nach Zweck und Anbieter. Sitzungs-Cookies entfallen mit Sitzungsende; dauerhafte Cookies können bis zum Ablaufdatum verbleiben.',
    languageTitle: LANGUAGE_CLAUSE_TITLE_DE,
    languageBody: LANGUAGE_CLAUSE_SHORT_DE,
    updates: {
      title: '9. Aktualisierungen der Richtlinie',
      body: 'Wir können diese Cookie-Richtlinie anpassen, um rechtliche, technische oder betriebliche Änderungen abzubilden. Wesentliche Updates erscheinen im Datum „Zuletzt aktualisiert“ und, soweit erforderlich, in erneuten Einwilligungsaufforderungen.',
    },
    contact: {
      title: '10. Kontakt',
      body: 'Bei Fragen zu dieser Cookie-Richtlinie oder den Cookie-Steuerungen wenden Sie sich an:',
      legalLabel: 'Rechtliche Anfragen:',
      generalLabel: 'Allgemeine Anfragen:',
    },
  }),
}

// Fill remaining EU/ZH locales with EN structure localized via concise packs
function simpleLocale(
  locale: AppLocale,
  meta: LocalePack['meta'],
  titles: string[],
  languageTitle: string,
  languageBody: string,
  copy: {
    what: string
    essentialIntro: string
    analyticsBody: string
    noTrackers: string
    third: { label: string; text: string }[]
    consent: string
    withdraw: string
    retention: string
    updates: string
    contactBody: string
    legal: string
    general: string
    purposes: string[]
    headers: LocalePack['tableHeaders']
  },
): CookiePolicyContent {
  return buildFromPack({
    meta,
    sectionList: [...titles.slice(0, 7), `8. ${languageTitle}`, ...titles.slice(7)],
    whatAreCookies: { title: titles[0], body: copy.what },
    essentialIntro: copy.essentialIntro,
    tableHeaders: copy.headers,
    cookiePurposes: copy.purposes,
    analytics: { title: titles[2], body: copy.analyticsBody, noTrackers: copy.noTrackers },
    thirdParty: { title: titles[3], items: copy.third },
    consent: { title: titles[4], body: copy.consent },
    withdrawBody: copy.withdraw,
    retention: copy.retention,
    languageTitle,
    languageBody,
    updates: { title: titles[7], body: copy.updates },
    contact: {
      title: titles[8],
      body: copy.contactBody,
      legalLabel: copy.legal,
      generalLabel: copy.general,
    },
  })
}

LOCALE_COOKIE.it = simpleLocale(
  'it',
  {
    breadcrumb: 'Cookie Policy',
    homeBreadcrumb: 'Home',
    heroLabel: 'Legale',
    pageTitle: 'Cookie Policy',
    lastUpdated: 'Ultimo aggiornamento: luglio 2026',
    intro:
      'Questa policy spiega come Bint Saeed utilizza cookie e tecnologie simili. Chiediamo il consenso prima di impostare cookie non essenziali e forniamo controlli per gestire le preferenze.',
    summaryTitle: 'Informazioni su questa Cookie Policy',
    summaryBody:
      'I nostri controlli cookie seguono i requisiti giuridici degli EAU e le aspettative di consenso GDPR/ePrivacy per gli utenti interessati, inclusa l’UE.',
  },
  [
    '1. Cosa sono i cookie',
    '2. Cookie essenziali (sempre attivi)',
    '3. Cookie analitici e comportamentali (opzionali)',
    '4. Servizi e cookie di terzi',
    '5. Consenso e gestione delle preferenze',
    '6. Revoca o modifica del consenso',
    '7. Conservazione dei cookie',
    '9. Aggiornamenti della policy',
    '10. Contatti',
  ],
  LANGUAGE_CLAUSE_TITLE_IT,
  LANGUAGE_CLAUSE_SHORT_IT,
  {
    what: 'I cookie sono piccoli file di testo collocati sul dispositivo quando visiti un sito. Supportano funzioni sicure, ricordano preferenze e possono aiutare a comprendere modelli di utilizzo aggregati.',
    essentialIntro:
      'Questi cookie sono necessari per il funzionamento del sito, la sicurezza, il checkout e la gestione del consenso. Sono impostati indipendentemente dal consenso analitico opzionale.',
    analyticsBody:
      'I cookie analitici opzionali vengono caricati solo dopo il consenso tramite i nostri controlli. Senza consenso, questi strumenti non operano in modalità di tracciamento.',
    noTrackers: 'Nessun tracker analitico opzionale è attualmente abilitato in questo ambiente.',
    third: [
      { label: 'Stripe, PayPal e Mollie:', text: 'elaborazione dei pagamenti e cookie antifrode o di checkout ove offerti.' },
      { label: 'Fornitori di analisi:', text: 'attivati solo se configurati e con consenso analitico.' },
      { label: 'Hosting/infrastruttura:', text: 'possono trattare metadati tecnici delle richieste per l’affidabilità del servizio.' },
    ],
    consent:
      'Alla prima visita puoi accettare tutti i cookie o solo quelli essenziali. Le preferenze sono memorizzate nel browser (incluso localStorage). I tracker analitici opzionali si caricano solo dopo il consenso analitico. Il consenso marketing è registrato per futuri strumenti pubblicitari e attualmente non carica pixel pubblicitari su questo sito salvo attivazione separata.',
    withdraw:
      'Puoi modificare le preferenze tramite Cookie settings nel footer, oppure cancellando cookie e archiviazione locale di questo sito e rivisitandolo. Puoi anche usare i controlli del browser.',
    retention:
      'La conservazione dei cookie varia per finalità e fornitore. I cookie di sessione vengono rimossi a fine sessione; i cookie persistenti possono restare fino alla scadenza.',
    updates:
      'Possiamo aggiornare questa Cookie Policy per riflettere cambiamenti giuridici, tecnici o operativi. Gli aggiornamenti rilevanti compaiono nella data “Ultimo aggiornamento” e, se necessario, in nuove richieste di consenso.',
    contactBody: 'Per domande su questa Cookie Policy o sui controlli cookie, contatta:',
    legal: 'Richieste legali:',
    general: 'Richieste generali:',
    purposes: [
      'Memorizza la scelta sui cookie',
      'Memorizza la preferenza di consenso analitico',
      'Memorizza la preferenza di consenso marketing',
      'Mantiene lo stato carrello/sessione',
      'Prevenzione frodi e sicurezza dei pagamenti',
      'Prevenzione frodi della sessione di pagamento',
    ],
    headers: { cookie: 'Cookie / Chiave', purpose: 'Finalità', provider: 'Fornitore', retention: 'Conservazione' },
  },
)

LOCALE_COOKIE.es = simpleLocale(
  'es',
  {
    breadcrumb: 'Política de cookies',
    homeBreadcrumb: 'Inicio',
    heroLabel: 'Legal',
    pageTitle: 'Política de cookies',
    lastUpdated: 'Última actualización: julio de 2026',
    intro:
      'Esta política explica cómo Bint Saeed utiliza cookies y tecnologías similares. Solicitamos consentimiento antes de establecer cookies no esenciales y ofrecemos controles para gestionar preferencias.',
    summaryTitle: 'Sobre esta política de cookies',
    summaryBody:
      'Nuestros controles de cookies siguen los requisitos legales de EAU y las expectativas de consentimiento del RGPD/ePrivacy para usuarios pertinentes, incluida la UE.',
  },
  [
    '1. Qué son las cookies',
    '2. Cookies esenciales (siempre activas)',
    '3. Cookies analíticas y de comportamiento (opcionales)',
    '4. Servicios y cookies de terceros',
    '5. Consentimiento y gestión de preferencias',
    '6. Retirada o cambio del consentimiento',
    '7. Conservación de cookies',
    '9. Actualizaciones de la política',
    '10. Contacto',
  ],
  LANGUAGE_CLAUSE_TITLE_ES,
  LANGUAGE_CLAUSE_SHORT_ES,
  {
    what: 'Las cookies son pequeños archivos de texto que se colocan en su dispositivo al visitar un sitio. Permiten funciones seguras, recuerdan preferencias y pueden ayudar a entender patrones de uso agregados.',
    essentialIntro:
      'Estas cookies son necesarias para el funcionamiento del sitio, la seguridad, el pago y la gestión del consentimiento. Se establecen con independencia del consentimiento analítico opcional.',
    analyticsBody:
      'Las cookies analíticas opcionales solo se cargan tras el consentimiento mediante nuestros controles. Sin consentimiento, estas herramientas no operan en modo de seguimiento.',
    noTrackers: 'No hay rastreadores analíticos opcionales activados actualmente en este entorno.',
    third: [
      { label: 'Stripe, PayPal y Mollie:', text: 'procesamiento de pagos y cookies antifraude o de pago cuando se ofrezcan.' },
      { label: 'Proveedores de analítica:', text: 'se activan solo si están configurados y hay consentimiento analítico.' },
      { label: 'Alojamiento/infraestructura:', text: 'pueden tratar metadatos técnicos de solicitud para la fiabilidad del servicio.' },
    ],
    consent:
      'En la primera visita puede aceptar todas las cookies o solo las esenciales. Las preferencias se guardan en el navegador (incluido localStorage). Los rastreadores analíticos opcionales solo se cargan tras el consentimiento analítico. El consentimiento de marketing se registra para futuras herramientas publicitarias y actualmente no carga píxeles publicitarios en este sitio salvo activación separada.',
    withdraw:
      'Puede cambiar preferencias con Cookie settings en el pie de página, o borrando las cookies y el almacenamiento local de este sitio y volviendo a visitarlo. También puede usar los controles del navegador.',
    retention:
      'La conservación de cookies varía según finalidad y proveedor. Las de sesión se eliminan al terminar la sesión; las persistentes pueden permanecer hasta su caducidad.',
    updates:
      'Podemos actualizar esta Política de cookies para reflejar cambios legales, técnicos u operativos. Las actualizaciones materiales aparecen en la fecha “Última actualización” y, si procede, en nuevas solicitudes de consentimiento.',
    contactBody: 'Si tiene preguntas sobre esta Política de cookies o los controles, contacte:',
    legal: 'Consultas legales:',
    general: 'Consultas generales:',
    purposes: [
      'Guarda su elección de cookies',
      'Guarda la preferencia de consentimiento analítico',
      'Guarda la preferencia de consentimiento de marketing',
      'Mantiene el estado del carrito/sesión',
      'Prevención del fraude y seguridad del pago',
      'Prevención del fraude de la sesión de pago',
    ],
    headers: { cookie: 'Cookie / Clave', purpose: 'Finalidad', provider: 'Proveedor', retention: 'Conservación' },
  },
)

LOCALE_COOKIE.nl = simpleLocale(
  'nl',
  {
    breadcrumb: 'Cookiebeleid',
    homeBreadcrumb: 'Home',
    heroLabel: 'Juridisch',
    pageTitle: 'Cookiebeleid',
    lastUpdated: 'Laatst bijgewerkt: juli 2026',
    intro:
      'Dit beleid legt uit hoe Bint Saeed cookies en vergelijkbare technologieën gebruikt. We vragen toestemming vóór het plaatsen van niet-essentiële cookies en bieden bedieningselementen om voorkeuren te beheren.',
    summaryTitle: 'Over dit cookiebeleid',
    summaryBody:
      'Onze cookiebediening volgt juridische eisen van de VAE en GDPR/ePrivacy-toestemmingsverwachtingen voor relevante gebruikers, inclusief in de EU.',
  },
  [
    '1. Wat zijn cookies',
    '2. Essentiële cookies (altijd actief)',
    '3. Analyse- en gedragscookies (optioneel)',
    '4. Diensten en cookies van derden',
    '5. Toestemming en voorkeursbeheer',
    '6. Intrekken of wijzigen van toestemming',
    '7. Bewaartermijn van cookies',
    '9. Beleidsupdates',
    '10. Contact',
  ],
  LANGUAGE_CLAUSE_TITLE_NL,
  LANGUAGE_CLAUSE_SHORT_NL,
  {
    what: 'Cookies zijn kleine tekstbestanden die op uw apparaat worden geplaatst wanneer u een website bezoekt. Ze ondersteunen veilige functionaliteit, onthouden voorkeuren en kunnen helpen geaggregeerde gebruikspatronen te begrijpen.',
    essentialIntro:
      'Deze cookies zijn nodig voor kernwerking van de site, beveiliging, checkout en toestemmingsbeheer. Ze worden geplaatst ongeacht optionele analysetoestemming.',
    analyticsBody:
      'Optionele analysecookies worden pas na toestemming via onze cookiebediening geladen. Zonder toestemming draaien deze tools niet in trackingmodus.',
    noTrackers: 'Er zijn momenteel geen optionele analysetrackers ingeschakeld in deze omgeving.',
    third: [
      { label: 'Stripe, PayPal en Mollie:', text: 'betaalverwerking en gerelateerde fraudepreventie- of checkoutcookies waar aangeboden.' },
      { label: 'Analyseproviders:', text: 'alleen actief indien geconfigureerd en analysetoestemming is gegeven.' },
      { label: 'Hosting/infrastructuur:', text: 'kunnen technische requestmetadata verwerken voor dienstbetrouwbaarheid.' },
    ],
    consent:
      'Bij het eerste bezoek kunt u alle cookies accepteren of alleen de essentiële. Voorkeuren worden in de browser opgeslagen (inclusief localStorage). Optionele analysetrackers laden pas na analysetoestemming. Marketingtoestemming wordt bewaard voor toekomstige advertentietools en laadt momenteel geen advertentiepixels op deze site tenzij apart ingeschakeld.',
    withdraw:
      'U kunt voorkeuren wijzigen via Cookie settings in de footer, of door cookies en lokale opslag van deze site te wissen en opnieuw te bezoeken. U kunt ook browserbediening gebruiken.',
    retention:
      'Bewaartermijnen verschillen per doel en provider. Sessiecookies verdwijnen aan het einde van de sessie; persistente cookies kunnen tot hun vervaldatum blijven.',
    updates:
      'We kunnen dit Cookiebeleid bijwerken voor juridische, technische of operationele wijzigingen. Materiële updates blijken uit de datum “Laatst bijgewerkt” en, waar nodig, uit vernieuwde toestemmingsverzoeken.',
    contactBody: 'Vragen over dit Cookiebeleid of cookiebediening? Neem contact op met:',
    legal: 'Juridische vragen:',
    general: 'Algemene vragen:',
    purposes: [
      'Slaat uw cookiekeuze op',
      'Slaat analysetoestemming op',
      'Slaat marketingtoestemming op',
      'Behoudt winkelwagen-/sessiestatus',
      'Fraudepreventie en betaalveiligheid',
      'Fraudepreventie voor de betaalsessie',
    ],
    headers: { cookie: 'Cookie / Sleutel', purpose: 'Doel', provider: 'Provider', retention: 'Bewaartermijn' },
  },
)

LOCALE_COOKIE.pt = simpleLocale(
  'pt',
  {
    breadcrumb: 'Política de cookies',
    homeBreadcrumb: 'Início',
    heroLabel: 'Legal',
    pageTitle: 'Política de cookies',
    lastUpdated: 'Última atualização: julho de 2026',
    intro:
      'Esta política explica como a Bint Saeed utiliza cookies e tecnologias semelhantes. Pedimos consentimento antes de definir cookies não essenciais e disponibilizamos controlos para gerir preferências.',
    summaryTitle: 'Sobre esta política de cookies',
    summaryBody:
      'Os nossos controlos de cookies seguem requisitos legais dos EAU e expectativas de consentimento RGPD/ePrivacy para utilizadores relevantes, incluindo na UE.',
  },
  [
    '1. O que são cookies',
    '2. Cookies essenciais (sempre ativos)',
    '3. Cookies analíticos e comportamentais (opcionais)',
    '4. Serviços e cookies de terceiros',
    '5. Consentimento e gestão de preferências',
    '6. Retirada ou alteração do consentimento',
    '7. Conservação de cookies',
    '9. Atualizações da política',
    '10. Contacto',
  ],
  LANGUAGE_CLAUSE_TITLE_PT,
  LANGUAGE_CLAUSE_SHORT_PT,
  {
    what: 'Cookies são pequenos ficheiros de texto colocados no seu dispositivo quando visita um site. Apoiam funcionalidade segura, recordam preferências e podem ajudar a compreender padrões de utilização agregados.',
    essentialIntro:
      'Estes cookies são necessários para o funcionamento do site, segurança, checkout e gestão de consentimento. São definidos independentemente do consentimento analítico opcional.',
    analyticsBody:
      'Cookies analíticos opcionais só são carregados após consentimento através dos nossos controlos. Sem consentimento, estas ferramentas não operam em modo de rastreio.',
    noTrackers: 'Não existem rastreadores analíticos opcionais atualmente ativos neste ambiente.',
    third: [
      { label: 'Stripe, PayPal e Mollie:', text: 'processamento de pagamentos e cookies antifraude ou de checkout quando oferecidos.' },
      { label: 'Prestadores de analítica:', text: 'ativados apenas se configurados e com consentimento analítico.' },
      { label: 'Alojamento/infraestrutura:', text: 'podem processar metadados técnicos de pedidos para fiabilidade do serviço.' },
    ],
    consent:
      'Na primeira visita, pode aceitar todos os cookies ou apenas os essenciais. As preferências são guardadas no browser (incluindo localStorage). Rastreadores analíticos opcionais só carregam após consentimento analítico. O consentimento de marketing é registado para futuras ferramentas publicitárias e atualmente não carrega pixels publicitários neste site salvo ativação separada.',
    withdraw:
      'Pode alterar preferências através de Cookie settings no rodapé, ou ao limpar cookies e armazenamento local deste site e revisitá-lo. Também pode usar controlos do browser.',
    retention:
      'A conservação de cookies difere por finalidade e prestador. Cookies de sessão são removidos no fim da sessão; cookies persistentes podem permanecer até à respetiva validade.',
    updates:
      'Podemos atualizar esta Política de cookies para refletir alterações legais, técnicas ou operacionais. Atualizações materiais aparecem na data “Última atualização” e, se necessário, em novos pedidos de consentimento.',
    contactBody: 'Se tiver perguntas sobre esta Política de cookies ou controlos, contacte:',
    legal: 'Pedidos jurídicos:',
    general: 'Pedidos gerais:',
    purposes: [
      'Guarda a sua escolha de cookies',
      'Guarda a preferência de consentimento analítico',
      'Guarda a preferência de consentimento de marketing',
      'Mantém o estado do cesto/sessão',
      'Prevenção de fraude e segurança de pagamento',
      'Prevenção de fraude da sessão de pagamento',
    ],
    headers: { cookie: 'Cookie / Chave', purpose: 'Finalidade', provider: 'Prestador', retention: 'Conservação' },
  },
)

LOCALE_COOKIE.ru = simpleLocale(
  'ru',
  {
    breadcrumb: 'Политика cookie',
    homeBreadcrumb: 'Главная',
    heroLabel: 'Правовая информация',
    pageTitle: 'Политика cookie',
    lastUpdated: 'Последнее обновление: июль 2026',
    intro:
      'Эта политика объясняет, как Bint Saeed использует cookie и сходные технологии. Мы запрашиваем согласие перед установкой необязательных cookie и предоставляем инструменты управления предпочтениями.',
    summaryTitle: 'Об этой политике cookie',
    summaryBody:
      'Наши элементы управления cookie соответствуют правовым требованиям ОАЭ и ожиданиям согласия GDPR/ePrivacy для соответствующих пользователей, включая ЕС.',
  },
  [
    '1. Что такое cookie',
    '2. Необходимые cookie (всегда активны)',
    '3. Аналитические и поведенческие cookie (опционально)',
    '4. Сторонние сервисы и cookie',
    '5. Согласие и управление предпочтениями',
    '6. Отзыв или изменение согласия',
    '7. Срок хранения cookie',
    '9. Обновления политики',
    '10. Контакты',
  ],
  LANGUAGE_CLAUSE_TITLE_RU,
  LANGUAGE_CLAUSE_SHORT_RU,
  {
    what: 'Cookie: небольшие текстовые файлы, которые размещаются на устройстве при посещении сайта. Они обеспечивают безопасные функции, запоминают предпочтения и могут помогать понимать агрегированные модели использования.',
    essentialIntro:
      'Эти cookie необходимы для работы сайта, безопасности, оформления заказа и управления согласием. Они устанавливаются независимо от опционального аналитического согласия.',
    analyticsBody:
      'Опциональные аналитические cookie загружаются только после согласия через наши элементы управления. Без согласия эти инструменты не работают в режиме отслеживания.',
    noTrackers: 'В этой среде сейчас не включены опциональные аналитические трекеры.',
    third: [
      { label: 'Stripe, PayPal и Mollie:', text: 'обработка платежей и связанные cookie против мошенничества или оформления заказа, где эти каналы предлагаются.' },
      { label: 'Провайдеры аналитики:', text: 'активируются только при настройке и наличии аналитического согласия.' },
      { label: 'Хостинг/инфраструктура:', text: 'могут обрабатывать технические метаданные запросов для надёжности сервиса.' },
    ],
    consent:
      'При первом визите вы можете принять все cookie или только необходимые. Предпочтения сохраняются в браузере (включая localStorage). Опциональные аналитические трекеры загружаются только после аналитического согласия. Маркетинговое согласие сохраняется для будущих рекламных инструментов и сейчас не загружает рекламные пиксели на этом сайте, если они не включены отдельно.',
    withdraw:
      'Вы можете изменить предпочтения через Cookie settings в подвале сайта либо очистить cookie и локальное хранилище этого сайта и зайти снова. Также можно использовать настройки браузера.',
    retention:
      'Срок хранения cookie зависит от цели и провайдера. Сессионные cookie удаляются по окончании сессии; постоянные могут оставаться до истечения срока.',
    updates:
      'Мы можем обновлять эту Политику cookie с учётом правовых, технических или операционных изменений. Существенные обновления отражаются в дате «Последнее обновление» и, при необходимости, в повторных запросах согласия.',
    contactBody: 'По вопросам этой Политики cookie или элементов управления обращайтесь:',
    legal: 'Юридические запросы:',
    general: 'Общие запросы:',
    purposes: [
      'Сохраняет ваш выбор cookie',
      'Сохраняет предпочтение аналитического согласия',
      'Сохраняет предпочтение маркетингового согласия',
      'Поддерживает состояние корзины/сессии',
      'Предотвращение мошенничества и безопасность оплаты',
      'Предотвращение мошенничества в платёжной сессии',
    ],
    headers: { cookie: 'Cookie / ключ', purpose: 'Цель', provider: 'Провайдер', retention: 'Срок' },
  },
)

LOCALE_COOKIE.zh = simpleLocale(
  'zh',
  {
    breadcrumb: 'Cookie 政策',
    homeBreadcrumb: '首页',
    heroLabel: '法律信息',
    pageTitle: 'Cookie 政策',
    lastUpdated: '最近更新：2026年7月',
    intro:
      '本政策说明 Bint Saeed 如何使用 Cookie 及类似技术。我们在设置非必要 Cookie 前征求同意，并提供偏好管理控件。',
    summaryTitle: '关于本 Cookie 政策',
    summaryBody:
      '我们的 Cookie 控件遵循阿联酋法律要求，以及对相关用户（包括欧盟用户）的 GDPR/ePrivacy 同意预期。',
  },
  [
    '1. 什么是 Cookie',
    '2. 必要 Cookie（始终启用）',
    '3. 分析与行为 Cookie（可选）',
    '4. 第三方服务与 Cookie',
    '5. Cookie 同意与偏好管理',
    '6. 撤回或更改同意',
    '7. Cookie 保存期限',
    '9. 政策更新',
    '10. 联系方式',
  ],
  LANGUAGE_CLAUSE_TITLE_ZH,
  LANGUAGE_CLAUSE_SHORT_ZH,
  {
    what: 'Cookie 是访问网站时保存在设备上的小型文本文件。它们支持安全功能、记住偏好，并可能帮助我们了解汇总使用模式。',
    essentialIntro:
      '这些 Cookie 对网站核心运行、安全、结账与同意管理是必要的。无论是否给予可选分析同意，都会设置。',
    analyticsBody:
      '可选分析与行为 Cookie 仅在通过我们的 Cookie 控件同意后加载。未经同意，这些工具不会以追踪模式运行。',
    noTrackers: '当前环境未启用可选分析追踪器。',
    third: [
      { label: 'Stripe、PayPal 与 Mollie：', text: '支付处理及在提供时相关的反欺诈或结账 Cookie。' },
      { label: '分析服务商：', text: '仅在已配置并获得分析同意时启用。' },
      { label: '托管/基础设施：', text: '可能处理技术请求元数据以保障服务可靠性。' },
    ],
    consent:
      '首次访问时可接受全部 Cookie 或仅保留必要 Cookie。偏好保存在浏览器中（包括 localStorage）。可选分析追踪器仅在分析同意后加载。营销同意会记录以供未来广告工具使用，目前不会在本站加载广告像素，除非另行启用。',
    withdraw:
      '您可通过页脚 Cookie settings 更改偏好，或清除本站 Cookie 与本地存储后重新访问。也可使用浏览器控件阻止 Cookie。',
    retention:
      'Cookie 保存期限因目的与提供方而异。会话 Cookie 在会话结束时删除；持久 Cookie 可能保留至其有效期届满。',
    updates:
      '我们可能更新本 Cookie 政策以反映法律、技术或运营变化。重大更新会体现在「最近更新」日期，并在需要时通过重新征求同意提示体现。',
    contactBody: '如对本 Cookie 政策或控件有疑问，请联系：',
    legal: '法律问询：',
    general: '一般问询：',
    purposes: [
      '存储您的 Cookie 选择',
      '存储分析同意偏好',
      '存储营销同意偏好',
      '维持购物车/会话状态',
      '反欺诈与支付安全',
      '支付会话反欺诈',
    ],
    headers: { cookie: 'Cookie / 键', purpose: '用途', provider: '提供方', retention: '保存期限' },
  },
)

export function getCookiePolicyContent(lang: AppLocale): CookiePolicyContent {
  if (lang === 'ar') {
    return {
      ...COOKIE_POLICY_AR,
      // ensure language clause fields remain available via page helpers
    }
  }
  if (lang === 'en') return COOKIE_EN
  return LOCALE_COOKIE[lang] ?? COOKIE_EN
}

export function getCookieLanguageClause(lang: AppLocale): { title: string; body: string } {
  switch (lang) {
    case 'ar':
      return { title: LANGUAGE_CLAUSE_TITLE_AR, body: LANGUAGE_CLAUSE_SHORT_AR }
    case 'fr':
      return { title: LANGUAGE_CLAUSE_TITLE_FR, body: LANGUAGE_CLAUSE_SHORT_FR }
    case 'de':
      return { title: LANGUAGE_CLAUSE_TITLE_DE, body: LANGUAGE_CLAUSE_SHORT_DE }
    case 'it':
      return { title: LANGUAGE_CLAUSE_TITLE_IT, body: LANGUAGE_CLAUSE_SHORT_IT }
    case 'es':
      return { title: LANGUAGE_CLAUSE_TITLE_ES, body: LANGUAGE_CLAUSE_SHORT_ES }
    case 'nl':
      return { title: LANGUAGE_CLAUSE_TITLE_NL, body: LANGUAGE_CLAUSE_SHORT_NL }
    case 'pt':
      return { title: LANGUAGE_CLAUSE_TITLE_PT, body: LANGUAGE_CLAUSE_SHORT_PT }
    case 'ru':
      return { title: LANGUAGE_CLAUSE_TITLE_RU, body: LANGUAGE_CLAUSE_SHORT_RU }
    case 'zh':
      return { title: LANGUAGE_CLAUSE_TITLE_ZH, body: LANGUAGE_CLAUSE_SHORT_ZH }
    case 'id':
      return { title: LANGUAGE_CLAUSE_TITLE_ID, body: LANGUAGE_CLAUSE_SHORT_ID }
    case 'ms':
      return { title: LANGUAGE_CLAUSE_TITLE_MS, body: LANGUAGE_CLAUSE_SHORT_MS }
    default:
      return { title: LANGUAGE_CLAUSE_TITLE_EN, body: LANGUAGE_CLAUSE_SHORT_EN }
  }
}

export { OFFICIAL_EMAILS }
