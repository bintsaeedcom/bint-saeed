import { STRIPE_SHIPPING_ALLOWED_COUNTRIES } from '@/lib/stripe/buildCheckoutSessionOptions'
import type { AppLocale } from '@/lib/i18n/routing'

/** Keep destination messaging aligned with Stripe Checkout allowlist. */
export { STRIPE_SHIPPING_ALLOWED_COUNTRIES }

type ShipToCopy = {
  /** Short label for PDP trust strip / compact UI */
  short: string
  /** Cart / MiniCart destination line */
  cartLine: string
}

const COPY: Record<string, ShipToCopy> = {
  en: {
    short: 'GCC, UK, US & Europe',
    cartLine: 'Ships to GCC, UK, US & selected Europe',
  },
  ar: {
    short: 'الخليج، بريطانيا، أمريكا وأوروبا',
    cartLine: 'الشحن إلى الخليج وبريطانيا وأمريكا وأوروبا المختارة',
  },
  fr: {
    short: 'CCG, RU, US & Europe',
    cartLine: 'Livraison vers le CCG, le RU, les US et une sélection en Europe',
  },
  de: {
    short: 'GCC, UK, US & Europa',
    cartLine: 'Versand in den GCC, UK, die USA und ausgewähltes Europa',
  },
  it: {
    short: 'GCC, UK, US ed Europa',
    cartLine: 'Spedizione verso GCC, UK, US ed Europa selezionata',
  },
  es: {
    short: 'CCG, RU, EE. UU. y Europa',
    cartLine: 'Envíos al CCG, RU, EE. UU. y Europa seleccionada',
  },
  ru: {
    short: 'GCC, UK, США и Европа',
    cartLine: 'Доставка в GCC, UK, США и выбранные страны Европы',
  },
  zh: {
    short: '海湾、英、美与欧洲',
    cartLine: '配送至海湾地区、英国、美国及部分欧洲国家',
  },
  nl: {
    short: 'GCC, UK, VS & Europa',
    cartLine: 'Verzending naar GCC, UK, VS en geselecteerd Europa',
  },
  pt: {
    short: 'GCC, UK, EUA e Europa',
    cartLine: 'Envio para GCC, UK, EUA e Europa selecionada',
  },
  id: {
    short: 'GCC, UK, AS & Eropa',
    cartLine: 'Pengiriman ke GCC, UK, AS, dan Eropa terpilih',
  },
  ms: {
    short: 'GCC, UK, AS & Eropah',
    cartLine: 'Penghantaran ke GCC, UK, AS dan Eropah terpilih',
  },
}

export function getStripeShipToCopy(locale: AppLocale | string): ShipToCopy {
  return COPY[locale] ?? COPY.en
}

export function stripeShipToCountryCodes(): readonly string[] {
  return STRIPE_SHIPPING_ALLOWED_COUNTRIES
}
