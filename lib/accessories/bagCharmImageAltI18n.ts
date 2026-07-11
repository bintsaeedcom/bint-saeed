import type { AppLocale } from '@/lib/i18n/routing'
import { altLoc } from '@/lib/products/imageAltOverridesI18n'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'
import {
  isAlAinOasisBagCharmId,
  type AlAinOasisBagCharmId,
} from '@/lib/accessories/bagCharmPdpContent'

export type BagCharmLocalizedAlts = {
  carouselAlt: string
  pdpAlt: string
}

type AltPack = {
  carouselAlt: Record<AppLocale, string>
  pdpAlt: Record<AppLocale, string>
}

const BAG_CHARM_IMAGE_ALTS: Record<AlAinOasisBagCharmId, AltPack> = {
  'al-ain-oasis-i-bag-charm-fuchsia-jade': {
    carouselAlt: altLoc(
      'Al Ain Oasis I Fuchsia Jade bag charm — two cascading fuchsia jade strands with hand-carved Carnelian Al Ain Rosettes, natural stone luxury bag accessory by Bint Saeed Abu Dhabi',
      'تعليقة حقيبة واحة العين الأولى يشم فوشي — خيطان متدفقان من اليشم الفوشي مع روزيت العين المنحوتة، إكسسوار حقيبة فاخر من الأحجار الطبيعية من Bint Saeed أبوظبي',
      'Breloque de sac Al Ain Oasis I jade fuchsia — deux brins en cascade de jade fuchsia et rosettes d’Al Ain sculptées, accessoire sac luxe pierres naturelles Bint Saeed Abou Dabi',
      'Ciondolo borsa Al Ain Oasis I giada fucsia — due fili a cascata di giada fucsia e Rosette di Al Ain intagliate, accessorio borsa lusso pietre naturali Bint Saeed Abu Dhabi',
      'Colgante bolso Al Ain Oasis I jade fucsia — dos hebras en cascada de jade fucsia y Rosetas de Al Ain talladas, accesorio bolso lujo piedra natural Bint Saeed Abu Dabi',
      'Подвеска для сумки Al Ain Oasis I фуксиевый нефрит — две каскадные нити фуксиевого нефрита и резные розетки Al Ain, люксовый аксессуар для сумки из натурального камня Bint Saeed Абу-Даби',
      'Al Ain Oasis I 紫红玉手袋挂饰 — 两股紫红玉垂坠链与手工雕刻 Al Ain 玫瑰花饰，Bint Saeed 阿布扎比天然石奢华手袋配饰',
      'Al Ain Oasis I Fuchsia-Jade Taschenanhänger — zwei Kaskadenstränge aus Fuchsia-Jade mit handgeschnitzten Al-Ain-Rosetten, Naturstein-Luxus-Taschenaccessoire von Bint Saeed Abu Dhabi',
      'Al Ain Oasis I fuchsia-jade tashanger — twee cascade-strengen fuchsia-jade met handgesneden Al Ain Rosettes, natuursteen luxe tasaccessoire van Bint Saeed Abu Dhabi',
      'Pingente mala Al Ain Oasis I jade fúcsia — duas correntes em cascata de jade fúcsia com Rosetas de Al Ain esculpidas, acessório mala luxo pedra natural Bint Saeed Abu Dhabi',
      'Liontin tas Al Ain Oasis I jade fuchsia — dua untaian menjuntai jade fuchsia dengan Rosette Al Ain ukiran tangan, aksesori tas mewah batu alam Bint Saeed Abu Dhabi',
      'Liontin beg Al Ain Oasis I jed fuchsia — dua untai menjuntai jed fuchsia dengan Rosette Al Ain ukiran tangan, aksesori beg mewah batu semula jadi Bint Saeed Abu Dhabi',
    ),
    pdpAlt: altLoc(
      'Al Ain Oasis I natural stone bag charm by Bint Saeed: two cascading Fuchsia Jade strands, hand-carved Carnelian Al Ain Rosettes and gold-plated faceted hematite on display. Luxury handcrafted bag jewellery for lovers of natural stones and refined handbag accessories. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.',
      'تعليقة حقيبة واحة العين الأولى من الأحجار الطبيعية من Bint Saeed: خيطان متدفقان من اليشم الفوشي، روزيت العين المنحوتة وهيمايت مطلي بالذهب ذو وجوه على الواجهة. مجوهرات حقيبة فاخرة مصنوعة يدوياً لعاشقات الأحجار الطبيعية وإكسسوارات الحقائب الراقية. صُنعت في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.',
      'Breloque de sac Al Ain Oasis I pierres naturelles par Bint Saeed : deux brins en cascade de jade fuchsia, rosettes d’Al Ain sculptées et hématite facettée plaquée or. Bijou de sac de luxe artisanal pour amoureuses de pierres naturelles et d’accessoires de sac raffinés. Fabriquée à Abou Dabi, Émirats arabes unis. Livraison mondiale.',
      'Ciondolo borsa Al Ain Oasis I in pietra naturale di Bint Saeed: due fili a cascata di giada fucsia, Rosette di Al Ain intagliate ed ematite sfaccettata placcata oro. Gioiello per borsa di lusso artigianale per amanti di pietre naturali e accessori borsa raffinati. Realizzato ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.',
      'Colgante bolso Al Ain Oasis I de piedra natural de Bint Saeed: dos hebras en cascada de jade fucsia, Rosetas de Al Ain talladas y hematita facetada baño de oro. Joyería de bolso de lujo artesanal para amantes de piedras naturales y accesorios de bolso refinados. Hecho en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.',
      'Подвеска для сумки Al Ain Oasis I из натурального камня от Bint Saeed: две каскадные нити фуксиевого нефрита, резные розетки Al Ain и позолоченный гранёный гематит. Роскошное рукотворное украшение для сумки для любительниц натуральных камней и изысканных аксессуаров для сумок. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.',
      'Bint Saeed Al Ain Oasis I 天然石手袋挂饰：两股紫红玉垂坠链、手工雕刻 Al Ain 玫瑰花饰与镀金切面赤铁矿。献给天然石与精致手袋配饰爱好者的奢华手工手袋珠宝。阿联酋阿布扎比制造。全球配送。',
      'Al Ain Oasis I Naturstein-Taschenanhänger von Bint Saeed: zwei Kaskadenstränge aus Fuchsia-Jade, handgeschnitzte Al-Ain-Rosetten und vergoldetes facettiertes Hämatit. Luxuriöser handgefertigter Taschenschmuck für Liebhaberinnen von Natursteinen und raffinierten Handtaschen-Accessoires. Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate. Weltweiter Versand.',
      'Al Ain Oasis I natuursteen-tashanger van Bint Saeed: twee cascade-strengen fuchsia-jade, handgesneden Al Ain Rosettes en verguld gefacetteerd hematiet. Luxe handgemaakte tassieraden voor liefhebbers van natuursteen en verfijnde handtasaccessoires. Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten. Wereldwijde verzending.',
      'Pingente mala Al Ain Oasis I em pedra natural da Bint Saeed: duas correntes em cascata de jade fúcsia, Rosetas de Al Ain esculpidas e hematite facetada banho de ouro. Joia de mala de luxo artesanal para amantes de pedras naturais e acessórios de mala refinados. Feito em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.',
      'Liontin tas Al Ain Oasis I batu alam oleh Bint Saeed: dua untaian menjuntai jade fuchsia, Rosette Al Ain ukiran tangan, dan hematit berfaset berlapis emas. Perhiasan tas mewah buatan tangan untuk pecinta batu alam dan aksesori tas halus. Dibuat di Abu Dhabi, Uni Emirat Arab. Pengiriman dunia.',
      'Liontin beg Al Ain Oasis I batu semula jadi oleh Bint Saeed: dua untai menjuntai jed fuchsia, Rosette Al Ain ukiran tangan, dan hematit berfaset bersalut emas. Barang kemas beg mewah buatan tangan untuk peminat batu semula jadi dan aksesori beg halus. Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu. Penghantaran seluruh dunia.',
    ),
  },
  'al-ain-oasis-ii-bag-charm-fuchsia-jade': {
    carouselAlt: altLoc(
      'Al Ain Oasis II Fuchsia Jade bag charm — three cascading fuchsia jade strands with hand-carved Carnelian Al Ain Rosettes, natural stone luxury bag accessory by Bint Saeed Abu Dhabi',
      'تعليقة حقيبة واحة العين الثانية يشم فوشي — ثلاثة خيوط متدفقة من اليشم الفوشي مع روزيت العين المنحوتة، إكسسوار حقيبة فاخر من الأحجار الطبيعية من Bint Saeed أبوظبي',
      'Breloque de sac Al Ain Oasis II jade fuchsia — trois brins en cascade de jade fuchsia et rosettes d’Al Ain sculptées, accessoire sac luxe pierres naturelles Bint Saeed Abou Dabi',
      'Ciondolo borsa Al Ain Oasis II giada fucsia — tre fili a cascata di giada fucsia e Rosette di Al Ain intagliate, accessorio borsa lusso pietre naturali Bint Saeed Abu Dhabi',
      'Colgante bolso Al Ain Oasis II jade fucsia — tres hebras en cascada de jade fucsia y Rosetas de Al Ain talladas, accesorio bolso lujo piedra natural Bint Saeed Abu Dabi',
      'Подвеска для сумки Al Ain Oasis II фуксиевый нефрит — три каскадные нити фуксиевого нефрита и резные розетки Al Ain, люксовый аксессуар для сумки из натурального камня Bint Saeed Абу-Даби',
      'Al Ain Oasis II 紫红玉手袋挂饰 — 三股紫红玉垂坠链与手工雕刻 Al Ain 玫瑰花饰，Bint Saeed 阿布扎比天然石奢华手袋配饰',
      'Al Ain Oasis II Fuchsia-Jade Taschenanhänger — drei Kaskadenstränge aus Fuchsia-Jade mit handgeschnitzten Al-Ain-Rosetten, Naturstein-Luxus-Taschenaccessoire von Bint Saeed Abu Dhabi',
      'Al Ain Oasis II fuchsia-jade tashanger — drie cascade-strengen fuchsia-jade met handgesneden Al Ain Rosettes, natuursteen luxe tasaccessoire van Bint Saeed Abu Dhabi',
      'Pingente mala Al Ain Oasis II jade fúcsia — três correntes em cascata de jade fúcsia com Rosetas de Al Ain esculpidas, acessório mala luxo pedra natural Bint Saeed Abu Dhabi',
      'Liontin tas Al Ain Oasis II jade fuchsia — tiga untaian menjuntai jade fuchsia dengan Rosette Al Ain ukiran tangan, aksesori tas mewah batu alam Bint Saeed Abu Dhabi',
      'Liontin beg Al Ain Oasis II jed fuchsia — tiga untai menjuntai jed fuchsia dengan Rosette Al Ain ukiran tangan, aksesori beg mewah batu semula jadi Bint Saeed Abu Dhabi',
    ),
    pdpAlt: altLoc(
      'Al Ain Oasis II natural stone bag charm by Bint Saeed: three cascading Fuchsia Jade strands, hand-carved Carnelian Al Ain Rosettes and gold-plated faceted hematite on display. Statement luxury handcrafted bag jewellery for lovers of natural stones and refined handbag accessories. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.',
      'تعليقة حقيبة واحة العين الثانية من الأحجار الطبيعية من Bint Saeed: ثلاثة خيوط متدفقة من اليشم الفوشي، روزيت العين المنحوتة وهيمايت مطلي بالذهب ذو وجوه على الواجهة. مجوهرات حقيبة فاخرة بارزة مصنوعة يدوياً لعاشقات الأحجار الطبيعية وإكسسوارات الحقائب الراقية. صُنعت في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.',
      'Breloque de sac Al Ain Oasis II pierres naturelles par Bint Saeed : trois brins en cascade de jade fuchsia, rosettes d’Al Ain sculptées et hématite facettée plaquée or. Bijou de sac statement de luxe artisanal pour amoureuses de pierres naturelles et d’accessoires de sac raffinés. Fabriquée à Abou Dabi, Émirats arabes unis. Livraison mondiale.',
      'Ciondolo borsa Al Ain Oasis II in pietra naturale di Bint Saeed: tre fili a cascata di giada fucsia, Rosette di Al Ain intagliate ed ematite sfaccettata placcata oro. Gioiello per borsa statement di lusso artigianale per amanti di pietre naturali e accessori borsa raffinati. Realizzato ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.',
      'Colgante bolso Al Ain Oasis II de piedra natural de Bint Saeed: tres hebras en cascada de jade fucsia, Rosetas de Al Ain talladas y hematita facetada baño de oro. Joyería de bolso statement de lujo artesanal para amantes de piedras naturales y accesorios de bolso refinados. Hecho en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.',
      'Подвеска для сумки Al Ain Oasis II из натурального камня от Bint Saeed: три каскадные нити фуксиевого нефрита, резные розетки Al Ain и позолоченный гранёный гематит. Акцентное роскошное рукотворное украшение для сумки для любительниц натуральных камней и изысканных аксессуаров для сумок. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.',
      'Bint Saeed Al Ain Oasis II 天然石手袋挂饰：三股紫红玉垂坠链、手工雕刻 Al Ain 玫瑰花饰与镀金切面赤铁矿。献给天然石与精致手袋配饰爱好者的奢华亮点手工手袋珠宝。阿联酋阿布扎比制造。全球配送。',
      'Al Ain Oasis II Naturstein-Taschenanhänger von Bint Saeed: drei Kaskadenstränge aus Fuchsia-Jade, handgeschnitzte Al-Ain-Rosetten und vergoldetes facettiertes Hämatit. Statement-Luxus-Taschenschmuck für Liebhaberinnen von Natursteinen und raffinierten Handtaschen-Accessoires. Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate. Weltweiter Versand.',
      'Al Ain Oasis II natuursteen-tashanger van Bint Saeed: drie cascade-strengen fuchsia-jade, handgesneden Al Ain Rosettes en verguld gefacetteerd hematiet. Statement luxe tassieraden voor liefhebbers van natuursteen en verfijnde handtasaccessoires. Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten. Wereldwijde verzending.',
      'Pingente mala Al Ain Oasis II em pedra natural da Bint Saeed: três correntes em cascata de jade fúcsia, Rosetas de Al Ain esculpidas e hematite facetada banho de ouro. Joia de mala statement de luxo artesanal para amantes de pedras naturais e acessórios de mala refinados. Feito em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.',
      'Liontin tas Al Ain Oasis II batu alam oleh Bint Saeed: tiga untaian menjuntai jade fuchsia, Rosette Al Ain ukiran tangan, dan hematit berfaset berlapis emas. Perhiasan tas mewah statement buatan tangan untuk pecinta batu alam dan aksesori tas halus. Dibuat di Abu Dhabi, Uni Emirat Arab. Pengiriman dunia.',
      'Liontin beg Al Ain Oasis II batu semula jadi oleh Bint Saeed: tiga untai menjuntai jed fuchsia, Rosette Al Ain ukiran tangan, dan hematit berfaset bersalut emas. Barang kemas beg mewah statement buatan tangan untuk peminat batu semula jadi dan aksesori beg halus. Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu. Penghantaran seluruh dunia.',
    ),
  },
}

export function getBagCharmLocalizedAlts(
  id: string,
  locale: AppLocale = 'en',
): BagCharmLocalizedAlts | undefined {
  const canonicalId = resolveAccessoryId(id)
  if (!isAlAinOasisBagCharmId(canonicalId)) return undefined
  const pack = BAG_CHARM_IMAGE_ALTS[canonicalId]
  if (!pack) return undefined
  return {
    carouselAlt: pack.carouselAlt[locale] ?? pack.carouselAlt.en,
    pdpAlt: pack.pdpAlt[locale] ?? pack.pdpAlt.en,
  }
}

export function getBagCharmCarouselAlt(id: string, locale: AppLocale = 'en'): string | undefined {
  return getBagCharmLocalizedAlts(id, locale)?.carouselAlt
}

export function getBagCharmPdpAlt(
  id: string,
  _imageIndex: number,
  locale: AppLocale = 'en',
): string | undefined {
  return getBagCharmLocalizedAlts(id, locale)?.pdpAlt
}
