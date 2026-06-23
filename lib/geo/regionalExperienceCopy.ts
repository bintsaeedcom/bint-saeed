import type { AppLocale } from '@/lib/i18n/routing'

export type RegionalCopy = {
  eyebrow: string
  title: string
  body: string
  detectedLine: (city: string, country: string) => string
  settingsLine: (language: string, currency: string) => string
  primary: (language: string) => string
  secondary: string
  changeTitle: string
  languageLabel: string
  currencyLabel: string
  apply: string
  close: string
}

const en: RegionalCopy = {
  eyebrow: 'Bint Saeed',
  title: 'Your regional experience',
  body:
    'We have adjusted language and currency for your region. You may continue with these settings or choose another language and currency at any time.',
  detectedLine: (city, country) => (city ? `${city} · ${country}` : country),
  settingsLine: (language, currency) => `${language} · ${currency}`,
  primary: (language) => `Continue in ${language}`,
  secondary: 'Change language or currency',
  changeTitle: 'Preferences',
  languageLabel: 'Language',
  currencyLabel: 'Currency',
  apply: 'Apply selection',
  close: 'Close',
}

const copyByLocale: Partial<Record<AppLocale, RegionalCopy>> = {
  ar: {
    eyebrow: 'بنت سعيد',
    title: 'تجربتك الإقليمية',
    body:
      'قمنا بضبط اللغة والعملة لمنطقتك. يمكنك المتابعة بهذه الإعدادات أو اختيار لغة وعملة أخرى في أي وقت.',
    detectedLine: (city, country) => (city ? `${city} · ${country}` : country),
    settingsLine: (language, currency) => `${language} · ${currency}`,
    primary: (language) => `المتابعة بـ ${language}`,
    secondary: 'تغيير اللغة أو العملة',
    changeTitle: 'التفضيلات',
    languageLabel: 'اللغة',
    currencyLabel: 'العملة',
    apply: 'تطبيق الاختيار',
    close: 'إغلاق',
  },
  fr: {
    eyebrow: 'Bint Saeed',
    title: 'Votre expérience régionale',
    body:
      'Nous avons adapté la langue et la devise à votre région. Vous pouvez continuer avec ces paramètres ou en choisir d’autres à tout moment.',
    detectedLine: (city, country) => (city ? `${city} · ${country}` : country),
    settingsLine: (language, currency) => `${language} · ${currency}`,
    primary: (language) => `Continuer en ${language}`,
    secondary: 'Changer la langue ou la devise',
    changeTitle: 'Préférences',
    languageLabel: 'Langue',
    currencyLabel: 'Devise',
    apply: 'Appliquer',
    close: 'Fermer',
  },
  de: {
    eyebrow: 'Bint Saeed',
    title: 'Ihr regionales Erlebnis',
    body:
      'Wir haben Sprache und Währung für Ihre Region angepasst. Sie können mit diesen Einstellungen fortfahren oder jederzeit eine andere Sprache und Währung wählen.',
    detectedLine: (city, country) => (city ? `${city} · ${country}` : country),
    settingsLine: (language, currency) => `${language} · ${currency}`,
    primary: (language) => `Weiter auf ${language}`,
    secondary: 'Sprache oder Währung ändern',
    changeTitle: 'Einstellungen',
    languageLabel: 'Sprache',
    currencyLabel: 'Währung',
    apply: 'Übernehmen',
    close: 'Schließen',
  },
  es: {
    eyebrow: 'Bint Saeed',
    title: 'Su experiencia regional',
    body:
      'Hemos ajustado el idioma y la moneda para su región. Puede continuar con estos ajustes o elegir otro idioma y moneda en cualquier momento.',
    detectedLine: (city, country) => (city ? `${city} · ${country}` : country),
    settingsLine: (language, currency) => `${language} · ${currency}`,
    primary: (language) => `Continuar en ${language}`,
    secondary: 'Cambiar idioma o moneda',
    changeTitle: 'Preferencias',
    languageLabel: 'Idioma',
    currencyLabel: 'Moneda',
    apply: 'Aplicar',
    close: 'Cerrar',
  },
  it: {
    eyebrow: 'Bint Saeed',
    title: 'La tua esperienza regionale',
    body:
      'Abbiamo adattato lingua e valuta alla tua regione. Puoi continuare con queste impostazioni o scegliere un’altra lingua e valuta in qualsiasi momento.',
    detectedLine: (city, country) => (city ? `${city} · ${country}` : country),
    settingsLine: (language, currency) => `${language} · ${currency}`,
    primary: (language) => `Continua in ${language}`,
    secondary: 'Cambia lingua o valuta',
    changeTitle: 'Preferenze',
    languageLabel: 'Lingua',
    currencyLabel: 'Valuta',
    apply: 'Applica',
    close: 'Chiudi',
  },
  ru: {
    eyebrow: 'Bint Saeed',
    title: 'Ваш региональный опыт',
    body:
      'Мы настроили язык и валюту для вашего региона. Вы можете продолжить с этими настройками или выбрать другой язык и валюту в любое время.',
    detectedLine: (city, country) => (city ? `${city} · ${country}` : country),
    settingsLine: (language, currency) => `${language} · ${currency}`,
    primary: (language) => `Продолжить на ${language}`,
    secondary: 'Изменить язык или валюту',
    changeTitle: 'Настройки',
    languageLabel: 'Язык',
    currencyLabel: 'Валюта',
    apply: 'Применить',
    close: 'Закрыть',
  },
  zh: {
    eyebrow: 'Bint Saeed',
    title: '您的区域体验',
    body: '我们已根据您的地区调整了语言和货币。您可以继续使用这些设置，或随时选择其他语言和货币。',
    detectedLine: (city, country) => (city ? `${city} · ${country}` : country),
    settingsLine: (language, currency) => `${language} · ${currency}`,
    primary: (language) => `继续使用${language}`,
    secondary: '更改语言或货币',
    changeTitle: '偏好设置',
    languageLabel: '语言',
    currencyLabel: '货币',
    apply: '应用',
    close: '关闭',
  },
  id: {
    eyebrow: 'Bint Saeed',
    title: 'Pengalaman regional Anda',
    body:
      'Kami telah menyesuaikan bahasa dan mata uang untuk wilayah Anda. Anda dapat melanjutkan dengan pengaturan ini atau memilih bahasa dan mata uang lain kapan saja.',
    detectedLine: (city, country) => (city ? `${city} · ${country}` : country),
    settingsLine: (language, currency) => `${language} · ${currency}`,
    primary: (language) => `Lanjutkan dalam ${language}`,
    secondary: 'Ubah bahasa atau mata uang',
    changeTitle: 'Preferensi',
    languageLabel: 'Bahasa',
    currencyLabel: 'Mata uang',
    apply: 'Terapkan',
    close: 'Tutup',
  },
}

export function getRegionalExperienceCopy(locale: AppLocale): RegionalCopy {
  return copyByLocale[locale] ?? en
}
