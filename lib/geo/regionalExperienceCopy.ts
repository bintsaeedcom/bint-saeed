import type { AppLocale } from '@/lib/i18n/routing'

export type RegionalCopy = {
  eyebrow: string
  title: string
  bodyWithCity: (city: string, country: string, currency: string) => string
  bodyCountryOnly: (country: string, currency: string) => string
  continueEnglish: string
  secondary: string
  changeTitle: string
  languageLabel: string
  currencyLabel: string
  apply: string
  close: string
}

/** Primary CTA for switching to the visitor's regional language — always in that language. */
export const continueInLanguageCta: Record<string, string> = {
  ar: 'المتابعة بالعربية',
  zh: '继续使用中文',
  ru: 'Продолжить на русском',
  it: 'Continua in italiano',
  de: 'Weiter auf Deutsch',
  fr: 'Continuer en français',
  es: 'Continuar en español',
  nl: 'Doorgaan in het Nederlands',
  pt: 'Continuar em português',
  id: 'Lanjutkan dalam Bahasa Indonesia',
  ms: 'Teruskan dalam Bahasa Melayu',
}

function pack(
  base: Omit<RegionalCopy, 'bodyWithCity' | 'bodyCountryOnly'> & {
    withCity: (city: string, country: string, currency: string) => string
    countryOnly: (country: string, currency: string) => string
  },
): RegionalCopy {
  return {
    eyebrow: base.eyebrow,
    title: base.title,
    bodyWithCity: base.withCity,
    bodyCountryOnly: base.countryOnly,
    continueEnglish: base.continueEnglish,
    secondary: base.secondary,
    changeTitle: base.changeTitle,
    languageLabel: base.languageLabel,
    currencyLabel: base.currencyLabel,
    apply: base.apply,
    close: base.close,
  }
}

const BY_LOCALE: Record<AppLocale, RegionalCopy> = {
  en: pack({
    eyebrow: 'Bint Saeed',
    title: 'Your regional experience',
    withCity: (city, country, currency) =>
      `Since you're browsing from ${city}, ${country}, our prices are shown in ${currency}. You can change your language or currency at any time.`,
    countryOnly: (country, currency) =>
      `For ${country}, our prices are shown in ${currency}. You can change your language or currency at any time.`,
    continueEnglish: 'Continue in English',
    secondary: 'Change language or currency',
    changeTitle: 'Preferences',
    languageLabel: 'Language',
    currencyLabel: 'Currency',
    apply: 'Apply selection',
    close: 'Close',
  }),
  ar: pack({
    eyebrow: 'Bint Saeed',
    title: 'تجربتك الإقليمية',
    withCity: (city, country, currency) =>
      `بما أنكِ تتصفحين من ${city}، ${country}، تُعرض أسعارنا بعملة ${currency}. يمكنكِ تغيير اللغة أو العملة في أي وقت.`,
    countryOnly: (country, currency) =>
      `لـ ${country}، تُعرض أسعارنا بعملة ${currency}. يمكنكِ تغيير اللغة أو العملة في أي وقت.`,
    continueEnglish: 'المتابعة بالإنجليزية',
    secondary: 'تغيير اللغة أو العملة',
    changeTitle: 'التفضيلات',
    languageLabel: 'اللغة',
    currencyLabel: 'العملة',
    apply: 'تطبيق الاختيار',
    close: 'إغلاق',
  }),
  fr: pack({
    eyebrow: 'Bint Saeed',
    title: 'Votre expérience régionale',
    withCity: (city, country, currency) =>
      `Puisque vous consultez depuis ${city}, ${country}, nos prix s’affichent en ${currency}. Vous pouvez changer de langue ou de devise à tout moment.`,
    countryOnly: (country, currency) =>
      `Pour ${country}, nos prix s’affichent en ${currency}. Vous pouvez changer de langue ou de devise à tout moment.`,
    continueEnglish: 'Continuer en anglais',
    secondary: 'Changer la langue ou la devise',
    changeTitle: 'Préférences',
    languageLabel: 'Langue',
    currencyLabel: 'Devise',
    apply: 'Appliquer',
    close: 'Fermer',
  }),
  it: pack({
    eyebrow: 'Bint Saeed',
    title: 'La tua esperienza regionale',
    withCity: (city, country, currency) =>
      `Poiché stai navigando da ${city}, ${country}, i prezzi sono mostrati in ${currency}. Puoi cambiare lingua o valuta in qualsiasi momento.`,
    countryOnly: (country, currency) =>
      `Per ${country}, i prezzi sono mostrati in ${currency}. Puoi cambiare lingua o valuta in qualsiasi momento.`,
    continueEnglish: 'Continua in inglese',
    secondary: 'Cambia lingua o valuta',
    changeTitle: 'Preferenze',
    languageLabel: 'Lingua',
    currencyLabel: 'Valuta',
    apply: 'Applica selezione',
    close: 'Chiudi',
  }),
  es: pack({
    eyebrow: 'Bint Saeed',
    title: 'Tu experiencia regional',
    withCity: (city, country, currency) =>
      `Como navegas desde ${city}, ${country}, los precios se muestran en ${currency}. Puedes cambiar el idioma o la moneda en cualquier momento.`,
    countryOnly: (country, currency) =>
      `Para ${country}, los precios se muestran en ${currency}. Puedes cambiar el idioma o la moneda en cualquier momento.`,
    continueEnglish: 'Continuar en inglés',
    secondary: 'Cambiar idioma o moneda',
    changeTitle: 'Preferencias',
    languageLabel: 'Idioma',
    currencyLabel: 'Moneda',
    apply: 'Aplicar selección',
    close: 'Cerrar',
  }),
  ru: pack({
    eyebrow: 'Bint Saeed',
    title: 'Ваш региональный опыт',
    withCity: (city, country, currency) =>
      `Поскольку вы просматриваете сайт из ${city}, ${country}, цены показаны в ${currency}. Язык или валюту можно изменить в любой момент.`,
    countryOnly: (country, currency) =>
      `Для ${country} цены показаны в ${currency}. Язык или валюту можно изменить в любой момент.`,
    continueEnglish: 'Продолжить на английском',
    secondary: 'Изменить язык или валюту',
    changeTitle: 'Настройки',
    languageLabel: 'Язык',
    currencyLabel: 'Валюта',
    apply: 'Применить',
    close: 'Закрыть',
  }),
  zh: pack({
    eyebrow: 'Bint Saeed',
    title: '您的地区体验',
    withCity: (city, country, currency) =>
      `您正在从${city}，${country}浏览，价格以 ${currency} 显示。您可随时更改语言或货币。`,
    countryOnly: (country, currency) =>
      `针对${country}，价格以 ${currency} 显示。您可随时更改语言或货币。`,
    continueEnglish: '继续使用英语',
    secondary: '更改语言或货币',
    changeTitle: '偏好设置',
    languageLabel: '语言',
    currencyLabel: '货币',
    apply: '应用选择',
    close: '关闭',
  }),
  de: pack({
    eyebrow: 'Bint Saeed',
    title: 'Ihr regionales Erlebnis',
    withCity: (city, country, currency) =>
      `Da Sie von ${city}, ${country} aus browsen, werden Preise in ${currency} angezeigt. Sprache oder Währung können Sie jederzeit ändern.`,
    countryOnly: (country, currency) =>
      `Für ${country} werden Preise in ${currency} angezeigt. Sprache oder Währung können Sie jederzeit ändern.`,
    continueEnglish: 'Auf Englisch fortfahren',
    secondary: 'Sprache oder Währung ändern',
    changeTitle: 'Einstellungen',
    languageLabel: 'Sprache',
    currencyLabel: 'Währung',
    apply: 'Auswahl übernehmen',
    close: 'Schließen',
  }),
  nl: pack({
    eyebrow: 'Bint Saeed',
    title: 'Uw regionale ervaring',
    withCity: (city, country, currency) =>
      `Omdat u bladert vanuit ${city}, ${country}, worden prijzen in ${currency} getoond. U kunt taal of valuta op elk moment wijzigen.`,
    countryOnly: (country, currency) =>
      `Voor ${country} worden prijzen in ${currency} getoond. U kunt taal of valuta op elk moment wijzigen.`,
    continueEnglish: 'Doorgaan in het Engels',
    secondary: 'Taal of valuta wijzigen',
    changeTitle: 'Voorkeuren',
    languageLabel: 'Taal',
    currencyLabel: 'Valuta',
    apply: 'Selectie toepassen',
    close: 'Sluiten',
  }),
  pt: pack({
    eyebrow: 'Bint Saeed',
    title: 'A sua experiência regional',
    withCity: (city, country, currency) =>
      `Como está a navegar a partir de ${city}, ${country}, os preços são mostrados em ${currency}. Pode alterar o idioma ou a moeda a qualquer momento.`,
    countryOnly: (country, currency) =>
      `Para ${country}, os preços são mostrados em ${currency}. Pode alterar o idioma ou a moeda a qualquer momento.`,
    continueEnglish: 'Continuar em inglês',
    secondary: 'Alterar idioma ou moeda',
    changeTitle: 'Preferências',
    languageLabel: 'Idioma',
    currencyLabel: 'Moeda',
    apply: 'Aplicar seleção',
    close: 'Fechar',
  }),
  id: pack({
    eyebrow: 'Bint Saeed',
    title: 'Pengalaman regional Anda',
    withCity: (city, country, currency) =>
      `Karena Anda menelusuri dari ${city}, ${country}, harga ditampilkan dalam ${currency}. Anda dapat mengubah bahasa atau mata uang kapan saja.`,
    countryOnly: (country, currency) =>
      `Untuk ${country}, harga ditampilkan dalam ${currency}. Anda dapat mengubah bahasa atau mata uang kapan saja.`,
    continueEnglish: 'Lanjutkan dalam bahasa Inggris',
    secondary: 'Ubah bahasa atau mata uang',
    changeTitle: 'Preferensi',
    languageLabel: 'Bahasa',
    currencyLabel: 'Mata uang',
    apply: 'Terapkan pilihan',
    close: 'Tutup',
  }),
  ms: pack({
    eyebrow: 'Bint Saeed',
    title: 'Pengalaman serantau anda',
    withCity: (city, country, currency) =>
      `Oleh kerana anda melayari dari ${city}, ${country}, harga dipaparkan dalam ${currency}. Anda boleh menukar bahasa atau mata wang pada bila-bila masa.`,
    countryOnly: (country, currency) =>
      `Untuk ${country}, harga dipaparkan dalam ${currency}. Anda boleh menukar bahasa atau mata wang pada bila-bila masa.`,
    continueEnglish: 'Teruskan dalam bahasa Inggeris',
    secondary: 'Tukar bahasa atau mata wang',
    changeTitle: 'Keutamaan',
    languageLabel: 'Bahasa',
    currencyLabel: 'Mata wang',
    apply: 'Gunakan pilihan',
    close: 'Tutup',
  }),
}

export function getRegionalExperienceCopy(locale?: AppLocale | string): RegionalCopy {
  const key = (locale && locale in BY_LOCALE ? locale : 'en') as AppLocale
  return BY_LOCALE[key]
}

export function getContinueInLanguageCta(languageCode: string): string | undefined {
  return continueInLanguageCta[languageCode]
}
