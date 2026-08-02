import type { AppLocale } from '@/lib/i18n/routing'

export type HouseOfferBannerCopy = {
  /** UAE visitors — use {amount} for the complimentary UAE threshold. */
  lineUae: string
  /** International visitors — use {amount} for the complimentary worldwide threshold. */
  lineWorldwide: string
  dismissAria: string
}

const EN: HouseOfferBannerCopy = {
  lineUae: `Enjoy 15% off your first purchase · personal House Privilege after · Free UAE shipping above {amount}`,
  lineWorldwide: `Enjoy 15% off your first purchase · personal House Privilege after · Free worldwide shipping above {amount}`,
  dismissAria: 'Dismiss offer banner',
}

const AR: HouseOfferBannerCopy = {
  lineUae: `خصم 15% على أول شراء · امتياز الدار الشخصي بعد · شحن مجاني داخل الإمارات فوق {amount}`,
  lineWorldwide: `خصم 15% على أول شراء · امتياز الدار الشخصي بعد · شحن مجاني عالمياً فوق {amount}`,
  dismissAria: 'إغلاق شريط العرض',
}

const FR: HouseOfferBannerCopy = {
  lineUae: `−15 % sur le premier achat · privilège personnel ensuite · livraison offerte aux EAU au-dessus de {amount}`,
  lineWorldwide: `−15 % sur le premier achat · privilège personnel ensuite · livraison mondiale offerte au-dessus de {amount}`,
  dismissAria: 'Fermer la bannière',
}

const IT: HouseOfferBannerCopy = {
  lineUae: `−15% sul primo acquisto · privilegio personale dopo · spedizione gratuita negli EAU oltre {amount}`,
  lineWorldwide: `−15% sul primo acquisto · privilegio personale dopo · spedizione mondiale gratuita oltre {amount}`,
  dismissAria: 'Chiudi il banner',
}

const DE: HouseOfferBannerCopy = {
  lineUae: `15 % auf den ersten Kauf · danach persönliches Hausprivileg · kostenloser UAE-Versand ab {amount}`,
  lineWorldwide: `15 % auf den ersten Kauf · danach persönliches Hausprivileg · kostenloser weltweiter Versand ab {amount}`,
  dismissAria: 'Angebotsbanner schließen',
}

const NL: HouseOfferBannerCopy = {
  lineUae: `15% op de eerste aankoop · daarna persoonlijk House Privilege · gratis VAE-verzending vanaf {amount}`,
  lineWorldwide: `15% op de eerste aankoop · daarna persoonlijk House Privilege · gratis wereldwijde verzending vanaf {amount}`,
  dismissAria: 'Aanbiedingsbanner sluiten',
}

const PT: HouseOfferBannerCopy = {
  lineUae: `15% na primeira compra · privilégio pessoal depois · envio gratuito nos EAU acima de {amount}`,
  lineWorldwide: `15% na primeira compra · privilégio pessoal depois · envio mundial gratuito acima de {amount}`,
  dismissAria: 'Fechar o banner',
}

const ES: HouseOfferBannerCopy = {
  lineUae: `15% en la primera compra · privilegio personal después · envío gratuito en EAU a partir de {amount}`,
  lineWorldwide: `15% en la primera compra · privilegio personal después · envío mundial gratuito a partir de {amount}`,
  dismissAria: 'Cerrar el banner',
}

const RU: HouseOfferBannerCopy = {
  lineUae: `Скидка 15% на первую покупку · затем личная привилегия · бесплатная доставка по ОАЭ от {amount}`,
  lineWorldwide: `Скидка 15% на первую покупку · затем личная привилегия · бесплатная мировая доставка от {amount}`,
  dismissAria: 'Закрыть баннер',
}

const ZH: HouseOfferBannerCopy = {
  lineUae: `首单 15% 优惠 · 之后解锁个人 House Privilege · 阿联酋满 {amount} 免运费`,
  lineWorldwide: `首单 15% 优惠 · 之后解锁个人 House Privilege · 全球满 {amount} 免运费`,
  dismissAria: '关闭优惠横幅',
}

const ID: HouseOfferBannerCopy = {
  lineUae: `Diskon 15% pembelian pertama · House Privilege setelahnya · gratis ongkir UEA di atas {amount}`,
  lineWorldwide: `Diskon 15% pembelian pertama · House Privilege setelahnya · gratis ongkir dunia di atas {amount}`,
  dismissAria: 'Tutup banner penawaran',
}

const MS: HouseOfferBannerCopy = {
  lineUae: `Diskaun 15% pembelian pertama · House Privilege selepas itu · penghantaran percuma UAE melebihi {amount}`,
  lineWorldwide: `Diskaun 15% pembelian pertama · House Privilege selepas itu · penghantaran percuma sedunia melebihi {amount}`,
  dismissAria: 'Tutup banner tawaran',
}

export function getHouseOfferBannerCopy(locale: AppLocale | string): HouseOfferBannerCopy {
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
