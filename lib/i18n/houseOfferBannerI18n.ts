import type { AppLocale } from '@/lib/i18n/routing'

export type HouseOfferBannerCopy = {
  /** Rotating offer lines — shipping strings use {amount}. */
  firstPurchase: string
  housePrivilege: string
  /** Always-on cue — ships internationally (not the free-threshold line). */
  worldwideShipping: string
  shippingUae: string
  shippingWorldwide: string
  dismissAria: string
}

const EN: HouseOfferBannerCopy = {
  firstPurchase: 'Enjoy 15% off your first purchase',
  housePrivilege: 'Personal House Privilege after your first order',
  worldwideShipping: 'Worldwide shipping',
  shippingUae: 'Free UAE shipping above {amount}',
  shippingWorldwide: 'Free worldwide shipping above {amount}',
  dismissAria: 'Dismiss offer banner',
}

const AR: HouseOfferBannerCopy = {
  firstPurchase: 'خصم 15% على أول شراء',
  housePrivilege: 'امتياز الدار الشخصي بعد أول طلب',
  worldwideShipping: 'شحن عالمي',
  shippingUae: 'شحن مجاني داخل الإمارات فوق {amount}',
  shippingWorldwide: 'شحن مجاني عالمياً فوق {amount}',
  dismissAria: 'إغلاق شريط العرض',
}

const FR: HouseOfferBannerCopy = {
  firstPurchase: '−15 % sur votre premier achat',
  housePrivilege: 'Privilège personnel de la Maison après votre première commande',
  worldwideShipping: 'Livraison mondiale',
  shippingUae: 'Livraison offerte aux EAU au-dessus de {amount}',
  shippingWorldwide: 'Livraison mondiale offerte au-dessus de {amount}',
  dismissAria: 'Fermer la bannière',
}

const IT: HouseOfferBannerCopy = {
  firstPurchase: '−15% sul primo acquisto',
  housePrivilege: 'Privilegio personale della Maison dopo il primo ordine',
  worldwideShipping: 'Spedizione mondiale',
  shippingUae: 'Spedizione gratuita negli EAU oltre {amount}',
  shippingWorldwide: 'Spedizione mondiale gratuita oltre {amount}',
  dismissAria: 'Chiudi il banner',
}

const DE: HouseOfferBannerCopy = {
  firstPurchase: '15 % auf Ihren ersten Einkauf',
  housePrivilege: 'Persönliches Hausprivileg nach Ihrer ersten Bestellung',
  worldwideShipping: 'Weltweiter Versand',
  shippingUae: 'Kostenloser UAE-Versand ab {amount}',
  shippingWorldwide: 'Kostenloser weltweiter Versand ab {amount}',
  dismissAria: 'Angebotsbanner schließen',
}

const NL: HouseOfferBannerCopy = {
  firstPurchase: '15% op uw eerste aankoop',
  housePrivilege: 'Persoonlijk House Privilege na uw eerste bestelling',
  worldwideShipping: 'Wereldwijde verzending',
  shippingUae: 'Gratis VAE-verzending vanaf {amount}',
  shippingWorldwide: 'Gratis wereldwijde verzending vanaf {amount}',
  dismissAria: 'Aanbiedingsbanner sluiten',
}

const PT: HouseOfferBannerCopy = {
  firstPurchase: '15% na primeira compra',
  housePrivilege: 'Privilégio pessoal da Casa após a primeira encomenda',
  worldwideShipping: 'Envio mundial',
  shippingUae: 'Envio gratuito nos EAU acima de {amount}',
  shippingWorldwide: 'Envio mundial gratuito acima de {amount}',
  dismissAria: 'Fechar o banner',
}

const ES: HouseOfferBannerCopy = {
  firstPurchase: '15% en la primera compra',
  housePrivilege: 'Privilegio personal de la Casa tras el primer pedido',
  worldwideShipping: 'Envío mundial',
  shippingUae: 'Envío gratuito en EAU a partir de {amount}',
  shippingWorldwide: 'Envío mundial gratuito a partir de {amount}',
  dismissAria: 'Cerrar el banner',
}

const RU: HouseOfferBannerCopy = {
  firstPurchase: 'Скидка 15% на первую покупку',
  housePrivilege: 'Личная привилегия Дома после первого заказа',
  worldwideShipping: 'Доставка по всему миру',
  shippingUae: 'Бесплатная доставка по ОАЭ от {amount}',
  shippingWorldwide: 'Бесплатная мировая доставка от {amount}',
  dismissAria: 'Закрыть баннер',
}

const ZH: HouseOfferBannerCopy = {
  firstPurchase: '首单享 15% 优惠',
  housePrivilege: '首单后解锁个人 House Privilege',
  worldwideShipping: '全球配送',
  shippingUae: '阿联酋满 {amount} 免运费',
  shippingWorldwide: '全球满 {amount} 免运费',
  dismissAria: '关闭优惠横幅',
}

const ID: HouseOfferBannerCopy = {
  firstPurchase: 'Diskon 15% untuk pembelian pertama',
  housePrivilege: 'House Privilege pribadi setelah pesanan pertama',
  worldwideShipping: 'Pengiriman dunia',
  shippingUae: 'Gratis ongkir UEA di atas {amount}',
  shippingWorldwide: 'Gratis ongkir dunia di atas {amount}',
  dismissAria: 'Tutup banner penawaran',
}

const MS: HouseOfferBannerCopy = {
  firstPurchase: 'Diskaun 15% untuk pembelian pertama',
  housePrivilege: 'House Privilege peribadi selepas pesanan pertama',
  worldwideShipping: 'Penghantaran sedunia',
  shippingUae: 'Penghantaran percuma UAE melebihi {amount}',
  shippingWorldwide: 'Penghantaran percuma sedunia melebihi {amount}',
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
