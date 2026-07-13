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
    short: 'Worldwide Shipping',
    cartLine: 'Ships worldwide',
  },
  ar: {
    short: 'شحن عالمي',
    cartLine: 'شحن إلى جميع أنحاء العالم',
  },
  fr: {
    short: 'Livraison mondiale',
    cartLine: 'Livraison dans le monde entier',
  },
  de: {
    short: 'Weltweiter Versand',
    cartLine: 'Weltweiter Versand',
  },
  it: {
    short: 'Spedizione mondiale',
    cartLine: 'Spedizione in tutto il mondo',
  },
  es: {
    short: 'Envío mundial',
    cartLine: 'Envíos a todo el mundo',
  },
  ru: {
    short: 'Доставка по миру',
    cartLine: 'Доставка по всему миру',
  },
  zh: {
    short: '全球配送',
    cartLine: '全球配送',
  },
  nl: {
    short: 'Wereldwijde verzending',
    cartLine: 'Wereldwijde verzending',
  },
  pt: {
    short: 'Envio mundial',
    cartLine: 'Envio para todo o mundo',
  },
  id: {
    short: 'Pengiriman ke seluruh dunia',
    cartLine: 'Pengiriman ke seluruh dunia',
  },
  ms: {
    short: 'Penghantaran seluruh dunia',
    cartLine: 'Penghantaran ke seluruh dunia',
  },
}

export function getStripeShipToCopy(locale: AppLocale | string): ShipToCopy {
  return COPY[locale] ?? COPY.en
}

export function stripeShipToCountryCodes(): readonly string[] {
  return STRIPE_SHIPPING_ALLOWED_COUNTRIES
}
