import type { AppLocale } from '@/lib/i18n/routing'
import { altLoc } from '@/lib/products/imageAltOverridesI18n'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'
import type { AlQuaaPhoneCharmId } from '@/lib/accessories/phoneCharmPdpContent'
import { isAlQuaaPhoneCharmId } from '@/lib/accessories/phoneCharmPdpContent'

export type PhoneCharmLocalizedAlts = {
  carouselAlt: string
  pdpAlt: string
  lifestyleAlt?: string
}

type AltPack = {
  carouselAlt: Record<AppLocale, string>
  pdpAlt: Record<AppLocale, string>
  lifestyleAlt?: Record<AppLocale, string>
}

const PHONE_CHARM_IMAGE_ALTS: Record<AlQuaaPhoneCharmId, AltPack> = {
  'al-quaa-phone-charm-fuchsia-jade': {
    carouselAlt: altLoc(
      'Al Quaa Fuchsia Jade phone charm — vibrant pink jade beads with hand-carved Carnelian Al Ain Rosette, natural stone luxury phone accessory by Bint Saeed Abu Dhabi',
      'تعليقة هاتف القوع يشم فوشي — خرز يشم وردي نابض مع روزيت العين المحفورة من العقيق، إكسسوار هاتف فاخر من الأحجار الطبيعية من Bint Saeed أبوظبي',
      'Breloque téléphone Al Quaa jade fuchsia — perles de jade rose vif et rosette d’Al Ain en cornaline sculptée, accessoire téléphone luxe pierres naturelles Bint Saeed Abou Dabi',
      'Ciondolo telefono Al Quaa giada fucsia — perle di giada rosa vivace e Rosetta di Al Ain in corniola intagliata, accessorio telefono lusso pietre naturali Bint Saeed Abu Dhabi',
      'Colgante móvil Al Quaa jade fucsia — cuentas de jade rosa vibrante y Roseta de Al Ain en cornalina tallada, accesorio móvil lujo piedra natural Bint Saeed Abu Dabi',
      'Подвеска Al Quaa фуксиевый нефрит — яркие розовые бусины нефрита и резной сердоликовой розеткой Al Ain, люксовый аксессуар для телефона из натурального камня Bint Saeed Абу-Даби',
      'Al Quaa 紫红玉手机挂饰 — 鲜艳粉玉珠与手工雕刻红玉髓 Al Ain 玫瑰花饰，Bint Saeed 阿布扎比天然石奢华手机配饰',
      'Al Quaa Fuchsia-Jade Telefonanhänger — leuchtend pinke Jadeperlen mit handgeschnitzter Karneol-Al-Ain-Rosette, Naturstein-Luxus-Telefonaccessoire von Bint Saeed Abu Dhabi',
      'Al Quaa fuchsia-jade telefoonhanger — levendige roze jade kralen met handgesneden carneool Al Ain Rosette, natuursteen luxe telefoonaccessoire van Bint Saeed Abu Dhabi',
      'Pingente telemóvel Al Quaa jade fúcsia — contas de jade rosa vibrante com Roseta de Al Ain em cornalina esculpida, acessório telemóvel luxo pedra natural Bint Saeed Abu Dhabi',
      'Liontin ponsel Al Quaa jade fuchsia — manik jade merah muda cerah dengan Rosette Al Ain karnelian ukiran tangan, aksesori ponsel mewah batu alam Bint Saeed Abu Dhabi',
      'Liontin telefon Al Quaa jed fuchsia — manik jed merah jambu cerah dengan Rosette Al Ain karnelian ukiran tangan, aksesori telefon mewah batu semula jadi Bint Saeed Abu Dhabi',
    ),
    pdpAlt: altLoc(
      'Al Quaa Fuchsia Jade natural stone phone charm by Bint Saeed: vivid fuchsia jade beads, hand-carved Carnelian Al Ain Rosette and gold-plated faceted hematite accents on display. Luxury handcrafted phone jewellery for lovers of natural stones and refined accessories. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.',
      'تعليقة هاتف القوع يشم فوشي من الأحجار الطبيعية من Bint Saeed: خرز يشم فوشي نابض، روزيت العين المحفورة من العقيق، وخرز هيمايت مطلي بالذهب مُقطَّع على الواجهة. مجوهرات هاتف فاخرة مصنوعة يدوياً لعاشقات الأحجار الطبيعية والإكسسوارات الراقية. صُنعت في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.',
      'Breloque téléphone Al Quaa jade fuchsia pierres naturelles par Bint Saeed : perles de jade fuchsia vif, rosette d’Al Ain en cornaline sculptée à la main et accents d’hématite facettée plaquée or. Bijou téléphone de luxe artisanal pour amoureuses de pierres naturelles et accessoires raffinés. Fabriquée à Abou Dabi, Émirats arabes unis. Livraison mondiale.',
      'Ciondolo telefono Al Quaa giada fucsia in pietra naturale di Bint Saeed: perle di giada fucsia vivida, Rosetta di Al Ain in corniola intagliata a mano e accenti di ematite sfaccettata placcata oro. Gioiello telefono di lusso artigianale per amanti di pietre naturali e accessori raffinati. Realizzato ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.',
      'Colgante móvil Al Quaa jade fucsia de piedra natural de Bint Saeed: cuentas de jade fucsia viva, Roseta de Al Ain en cornalina tallada a mano y acentos de hematita facetada baño de oro. Joyería móvil de lujo artesanal para amantes de piedras naturales y accesorios refinados. Hecho en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.',
      'Подвеска для телефона Al Quaa фуксиевый нефрит из натурального камня от Bint Saeed: яркие бусины фуксиевого нефрита, резная сердоликовая розетка Al Ain и акценты из позолоченного гранёного гематита. Роскошное рукотворное украшение для телефона для любительниц натуральных камней и изысканных аксессуаров. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.',
      'Bint Saeed Al Quaa 紫红玉天然石手机挂饰：鲜艳紫红玉珠、手工雕刻红玉髓 Al Ain 玫瑰花饰与镀金切面赤铁矿点缀。献给天然石与精致配饰爱好者的奢华手工手机珠宝。阿联酋阿布扎比制造。全球配送。',
      'Al Quaa Fuchsia-Jade Naturstein-Telefonanhänger von Bint Saeed: leuchtende Fuchsia-Jadeperlen, handgeschnitzte Karneol-Al-Ain-Rosette und vergoldete facettierte Hämatit-Akzente. Luxuriöser handgefertigter Telefonschmuck für Liebhaberinnen von Natursteinen und raffinierten Accessoires. Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate. Weltweiter Versand.',
      'Al Quaa fuchsia-jade natuursteen telefoonhanger van Bint Saeed: levendige fuchsia-jade kralen, handgesneden carneool Al Ain Rosette en verguld gefacetteerd hematiet. Luxe handgemaakte telefoonsieraden voor liefhebbers van natuursteen en verfijnde accessoires. Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten. Wereldwijde verzending.',
      'Pingente telemóvel Al Quaa jade fúcsia em pedra natural da Bint Saeed: contas de jade fúcsia vívida, Roseta de Al Ain em cornalina esculpida à mão e acentos de hematite facetada banho de ouro. Joia de telemóvel de luxo artesanal para amantes de pedras naturais e acessórios refinados. Feito em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.',
      'Liontin ponsel Al Quaa jade fuchsia batu alam oleh Bint Saeed: manik jade fuchsia cerah, Rosette Al Ain karnelian ukiran tangan, dan aksen hematit berfaset berlapis emas. Perhiasan ponsel mewah buatan tangan untuk pecinta batu alam dan aksesori halus. Dibuat di Abu Dhabi, Uni Emirat Arab. Pengiriman dunia.',
      'Liontin telefon Al Quaa jed fuchsia batu semula jadi oleh Bint Saeed: manik jed fuchsia cerah, Rosette Al Ain karnelian ukiran tangan, dan aksen hematit berfaset bersalut emas. Barang kemas telefon mewah buatan tangan untuk peminat batu semula jadi dan aksesori halus. Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu. Penghantaran seluruh dunia.',
    ),
  },

  'al-quaa-phone-charm-orange-jade': {
    carouselAlt: altLoc(
      'Al Quaa Orange Jade phone charm — warm luminous orange jade beads with Carnelian Al Ain Rosette, natural stone luxury phone accessory by Bint Saeed Abu Dhabi',
      'تعليقة هاتف القوع يشم برتقالي — خرز يشم برتقالي دافئ مضيء مع روزيت العين من العقيق، إكسسوار هاتف فاخر من الأحجار الطبيعية من Bint Saeed أبوظبي',
      'Breloque téléphone Al Quaa jade orange — perles de jade orange chaud lumineux et rosette d’Al Ain en cornaline, accessoire téléphone luxe pierres naturelles Bint Saeed Abou Dabi',
      'Ciondolo telefono Al Quaa giada arancio — perle di giada arancio calda luminosa e Rosetta di Al Ain in corniola, accessorio telefono lusso pietre naturali Bint Saeed Abu Dhabi',
      'Colgante móvil Al Quaa jade naranja — cuentas de jade naranja cálido luminoso y Roseta de Al Ain en cornalina, accesorio móvil lujo piedra natural Bint Saeed Abu Dabi',
      'Подвеска Al Quaa оранжевый нефрит — тёплые светящиеся оранжевые бусины нефрита и сердоликовой розеткой Al Ain, люксовый аксессуар для телефона из натурального камня Bint Saeed Абу-Даби',
      'Al Quaa 橙玉手机挂饰 — 温暖明亮的橙玉珠与红玉髓 Al Ain 玫瑰花饰，Bint Saeed 阿布扎比天然石奢华手机配饰',
      'Al Quaa Orange-Jade Telefonanhänger — warm leuchtende Orange-Jadeperlen mit Karneol-Al-Ain-Rosette, Naturstein-Luxus-Telefonaccessoire von Bint Saeed Abu Dhabi',
      'Al Quaa oranje-jade telefoonhanger — warm lichtende oranje jade kralen met carneool Al Ain Rosette, natuursteen luxe telefoonaccessoire van Bint Saeed Abu Dhabi',
      'Pingente telemóvel Al Quaa jade laranja — contas de jade laranja quente luminoso com Roseta de Al Ain em cornalina, acessório telemóvel luxo pedra natural Bint Saeed Abu Dhabi',
      'Liontin ponsel Al Quaa jade oranye — manik jade oranye hangat bercahaya dengan Rosette Al Ain karnelian, aksesori ponsel mewah batu alam Bint Saeed Abu Dhabi',
      'Liontin telefon Al Quaa jed oren — manik jed oren hangat bercahaya dengan Rosette Al Ain karnelian, aksesori telefon mewah batu semula jadi Bint Saeed Abu Dhabi',
    ),
    pdpAlt: altLoc(
      'Al Quaa Orange Jade natural stone phone charm by Bint Saeed: luminous warm orange jade beads, hand-carved Carnelian Al Ain Rosette and gold-plated faceted hematite on display. Handcrafted luxury phone jewellery for natural stone lovers and refined accessory collectors. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.',
      'تعليقة هاتف القوع يشم برتقالي من الأحجار الطبيعية من Bint Saeed: خرز يشم برتقالي دافئ مضيء، روزيت العين المحفورة من العقيق، وهيمايت مطلي بالذهب مُقطَّع على الواجهة. مجوهرات هاتف فاخرة مصنوعة يدوياً لعاشقات الأحجار الطبيعية وجامعات الإكسسوارات الراقية. صُنعت في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.',
      'Breloque téléphone Al Quaa jade orange pierres naturelles par Bint Saeed : perles de jade orange chaud lumineux, rosette d’Al Ain en cornaline sculptée et hématite facettée plaquée or. Bijou téléphone de luxe artisanal pour amoureuses de pierres naturelles et collectionneuses d’accessoires raffinés. Fabriquée à Abou Dabi, Émirats arabes unis. Livraison mondiale.',
      'Ciondolo telefono Al Quaa giada arancio in pietra naturale di Bint Saeed: perle di giada arancio calda luminosa, Rosetta di Al Ain in corniola intagliata e ematite sfaccettata placcata oro. Gioiello telefono di lusso artigianale per amanti di pietre naturali e collezioniste di accessori raffinati. Realizzato ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.',
      'Colgante móvil Al Quaa jade naranja de piedra natural de Bint Saeed: cuentas de jade naranja cálido luminoso, Roseta de Al Ain en cornalina tallada y hematita facetada baño de oro. Joyería móvil de lujo artesanal para amantes de piedras naturales y coleccionistas de accesorios refinados. Hecho en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.',
      'Подвеска для телефона Al Quaa оранжевый нефрит из натурального камня от Bint Saeed: тёплые светящиеся оранжевые бусины нефрита, резная сердоликовая розетка Al Ain и позолоченный гранёный гематит. Роскошное рукотворное украшение для телефона для любительниц натуральных камней и коллекционерок изысканных аксессуаров. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.',
      'Bint Saeed Al Quaa 橙玉天然石手机挂饰：温暖明亮的橙玉珠、手工雕刻红玉髓 Al Ain 玫瑰花饰与镀金切面赤铁矿。献给天然石爱好者与精致配饰收藏者的奢华手工手机珠宝。阿联酋阿布扎比制造。全球配送。',
      'Al Quaa Orange-Jade Naturstein-Telefonanhänger von Bint Saeed: warm leuchtende Orange-Jadeperlen, handgeschnitzte Karneol-Al-Ain-Rosette und vergoldetes facettiertes Hämatit. Luxuriöser handgefertigter Telefonschmuck für Naturstein-Liebhaberinnen und Sammlerinnen raffinierter Accessoires. Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate. Weltweiter Versand.',
      'Al Quaa oranje-jade natuursteen telefoonhanger van Bint Saeed: warm lichtende oranje jade kralen, handgesneden carneool Al Ain Rosette en verguld gefacetteerd hematiet. Luxe handgemaakte telefoonsieraden voor natuursteenliefhebbers en verzamelaarsters van verfijnde accessoires. Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten. Wereldwijde verzending.',
      'Pingente telemóvel Al Quaa jade laranja em pedra natural da Bint Saeed: contas de jade laranja quente luminoso, Roseta de Al Ain em cornalina esculpida e hematite facetada banho de ouro. Joia de telemóvel de luxo artesanal para amantes de pedras naturais e colecionadoras de acessórios refinados. Feito em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.',
      'Liontin ponsel Al Quaa jade oranye batu alam oleh Bint Saeed: manik jade oranye hangat bercahaya, Rosette Al Ain karnelian ukiran tangan, dan hematit berfaset berlapis emas. Perhiasan ponsel mewah buatan tangan untuk pecinta batu alam dan kolektor aksesori halus. Dibuat di Abu Dhabi, Uni Emirat Arab. Pengiriman dunia.',
      'Liontin telefon Al Quaa jed oren batu semula jadi oleh Bint Saeed: manik jed oren hangat bercahaya, Rosette Al Ain karnelian ukiran tangan, dan hematit berfaset bersalut emas. Barang kemas telefon mewah buatan tangan untuk peminat batu semula jadi dan pengumpul aksesori halus. Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu. Penghantaran seluruh dunia.',
    ),
  },

  'al-quaa-phone-charm-onyx': {
    carouselAlt: altLoc(
      'Al Quaa Onyx phone charm — polished black onyx beads with Carnelian Al Ain Rosette, natural stone luxury phone accessory by Bint Saeed Abu Dhabi',
      'تعليقة هاتف القوع أونكس — خرز أونكس أسود مصقول مع روزيت العين من العقيق، إكسسوار هاتف فاخر من الأحجار الطبيعية من Bint Saeed أبوظبي',
      'Breloque téléphone Al Quaa onyx — perles d’onyx noir poli et rosette d’Al Ain en cornaline, accessoire téléphone luxe pierres naturelles Bint Saeed Abou Dabi',
      'Ciondolo telefono Al Quaa onice — perle di onice nera levigata e Rosetta di Al Ain in corniola, accessorio telefono lusso pietre naturali Bint Saeed Abu Dhabi',
      'Colgante móvil Al Quaa ónix — cuentas de ónix negro pulido y Roseta de Al Ain en cornalina, accesorio móvil lujo piedra natural Bint Saeed Abu Dabi',
      'Подвеска Al Quaa оникс — полированные чёрные бусины оникса и сердоликовой розеткой Al Ain, люксовый аксессуар для телефона из натурального камня Bint Saeed Абу-Даби',
      'Al Quaa 缟玛瑙手机挂饰 — 抛光黑色缟玛瑙珠与红玉髓 Al Ain 玫瑰花饰，Bint Saeed 阿布扎比天然石奢华手机配饰',
      'Al Quaa Onyx Telefonanhänger — polierte schwarze Onyxperlen mit Karneol-Al-Ain-Rosette, Naturstein-Luxus-Telefonaccessoire von Bint Saeed Abu Dhabi',
      'Al Quaa onyx telefoonhanger — gepolijste zwarte onyx kralen met carneool Al Ain Rosette, natuursteen luxe telefoonaccessoire van Bint Saeed Abu Dhabi',
      'Pingente telemóvel Al Quaa ónix — contas de ónix preto polido com Roseta de Al Ain em cornalina, acessório telemóvel luxo pedra natural Bint Saeed Abu Dhabi',
      'Liontin ponsel Al Quaa oniks — manik oniks hitam dipoles dengan Rosette Al Ain karnelian, aksesori ponsel mewah batu alam Bint Saeed Abu Dhabi',
      'Liontin telefon Al Quaa oniks — manik oniks hitam digilap dengan Rosette Al Ain karnelian, aksesori telefon mewah batu semula jadi Bint Saeed Abu Dhabi',
    ),
    pdpAlt: altLoc(
      'Al Quaa Onyx natural stone phone charm by Bint Saeed: polished deep black onyx beads, hand-carved Carnelian Al Ain Rosette and gold-plated faceted hematite accents on display. Elegant luxury phone jewellery for lovers of natural stones and contemporary Emirati accessories. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.',
      'تعليقة هاتف القوع أونكس من الأحجار الطبيعية من Bint Saeed: خرز أونكس أسود عميق مصقول، روزيت العين المحفورة من العقيق، وهيمايت مطلي بالذهب مُقطَّع على الواجهة. مجوهرات هاتف فاخرة أنيقة لعاشقات الأحجار الطبيعية والإكسسوارات الإماراتية المعاصرة. صُنعت في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.',
      'Breloque téléphone Al Quaa onyx pierres naturelles par Bint Saeed : perles d’onyx noir profond poli, rosette d’Al Ain en cornaline sculptée et accents d’hématite facettée plaquée or. Bijou téléphone de luxe élégant pour amoureuses de pierres naturelles et accessoires émiratis contemporains. Fabriquée à Abou Dabi, Émirats arabes unis. Livraison mondiale.',
      'Ciondolo telefono Al Quaa onice in pietra naturale di Bint Saeed: perle di onice nera profonda levigata, Rosetta di Al Ain in corniola intagliata e accenti di ematite sfaccettata placcata oro. Gioiello telefono di lusso elegante per amanti di pietre naturali e accessori emiratini contemporanei. Realizzato ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.',
      'Colgante móvil Al Quaa ónix de piedra natural de Bint Saeed: cuentas de ónix negro profundo pulido, Roseta de Al Ain en cornalina tallada y acentos de hematita facetada baño de oro. Joyería móvil de lujo elegante para amantes de piedras naturales y accesorios emiratíes contemporáneos. Hecho en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.',
      'Подвеска для телефона Al Quaa оникс из натурального камня от Bint Saeed: полированные глубоко-чёрные бусины оникса, резная сердоликовая розетка Al Ain и акценты из позолоченного гранёного гематита. Элегантное люксовое украшение для телефона для любительниц натуральных камней и современных эмиратских аксессуаров. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.',
      'Bint Saeed Al Quaa 缟玛瑙天然石手机挂饰：抛光深黑缟玛瑙珠、手工雕刻红玉髓 Al Ain 玫瑰花饰与镀金切面赤铁矿点缀。献给天然石爱好者与当代阿联酋配饰审美的优雅奢华手机珠宝。阿联酋阿布扎比制造。全球配送。',
      'Al Quaa Onyx Naturstein-Telefonanhänger von Bint Saeed: polierte tiefschwarze Onyxperlen, handgeschnitzte Karneol-Al-Ain-Rosette und vergoldete facettierte Hämatit-Akzente. Eleganter Luxus-Telefonschmuck für Liebhaberinnen von Natursteinen und zeitgenössischen emiratischen Accessoires. Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate. Weltweiter Versand.',
      'Al Quaa onyx natuursteen telefoonhanger van Bint Saeed: gepolijste diepzwarte onyx kralen, handgesneden carneool Al Ain Rosette en verguld gefacetteerd hematiet. Elegante luxe telefoonsieraden voor liefhebbers van natuursteen en eigentijdse Emiratische accessoires. Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten. Wereldwijde verzending.',
      'Pingente telemóvel Al Quaa ónix em pedra natural da Bint Saeed: contas de ónix preto profundo polido, Roseta de Al Ain em cornalina esculpida e acentos de hematite facetada banho de ouro. Joia de telemóvel de luxo elegante para amantes de pedras naturais e acessórios emirati contemporâneos. Feito em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.',
      'Liontin ponsel Al Quaa oniks batu alam oleh Bint Saeed: manik oniks hitam pekat dipoles, Rosette Al Ain karnelian ukiran tangan, dan aksen hematit berfaset berlapis emas. Perhiasan ponsel mewah elegan untuk pecinta batu alam dan aksesori Emirati kontemporer. Dibuat di Abu Dhabi, Uni Emirat Arab. Pengiriman dunia.',
      'Liontin telefon Al Quaa oniks batu semula jadi oleh Bint Saeed: manik oniks hitam pekat digilap, Rosette Al Ain karnelian ukiran tangan, dan aksen hematit berfaset bersalut emas. Barang kemas telefon mewah elegan untuk peminat batu semula jadi dan aksesori Emirati kontemporari. Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu. Penghantaran seluruh dunia.',
    ),
  },

  'al-quaa-phone-charm-tiger-eye': {
    carouselAlt: altLoc(
      'Al Quaa Tiger Eye phone charm — warm chatoyant tiger eye beads with Carnelian Al Ain Rosette, natural stone luxury phone accessory by Bint Saeed Abu Dhabi',
      'تعليقة هاتف القوع عين النمر — خرز عين النمر الدافئ المتلألئ مع روزيت العين من العقيق، إكسسوار هاتف فاخر من الأحجار الطبيعية من Bint Saeed أبوظبي',
      'Breloque téléphone Al Quaa œil de tigre — perles d’œil de tigre chatoyant chaud et rosette d’Al Ain en cornaline, accessoire téléphone luxe pierres naturelles Bint Saeed Abou Dabi',
      'Ciondolo telefono Al Quaa occhio di tigre — perle di occhio di tigre chatoyant caldo e Rosetta di Al Ain in corniola, accessorio telefono lusso pietre naturali Bint Saeed Abu Dhabi',
      'Colgante móvil Al Quaa ojo de tigre — cuentas de ojo de tigre chatoyant cálido y Roseta de Al Ain en cornalina, accesorio móvil lujo piedra natural Bint Saeed Abu Dabi',
      'Подвеска Al Quaa тигровый глаз — тёплые переливающиеся бусины тигрового глаза и сердоликовой розеткой Al Ain, люксовый аксессуар для телефона из натурального камня Bint Saeed Абу-Даби',
      'Al Quaa 虎眼石手机挂饰 — 温暖猫眼光虎眼珠与红玉髓 Al Ain 玫瑰花饰，Bint Saeed 阿布扎比天然石奢华手机配饰',
      'Al Quaa Tigerauge Telefonanhänger — warm chatoyante Tigerauge-Perlen mit Karneol-Al-Ain-Rosette, Naturstein-Luxus-Telefonaccessoire von Bint Saeed Abu Dhabi',
      'Al Quaa tijgeroog telefoonhanger — warm chatoyante tijgeroog kralen met carneool Al Ain Rosette, natuursteen luxe telefoonaccessoire van Bint Saeed Abu Dhabi',
      'Pingente telemóvel Al Quaa olho de tigre — contas de olho de tigre chatoyant quente com Roseta de Al Ain em cornalina, acessório telemóvel luxo pedra natural Bint Saeed Abu Dhabi',
      'Liontin ponsel Al Quaa mata harimau — manik mata harimau chatoyant hangat dengan Rosette Al Ain karnelian, aksesori ponsel mewah batu alam Bint Saeed Abu Dhabi',
      'Liontin telefon Al Quaa mata harimau — manik mata harimau chatoyant hangat dengan Rosette Al Ain karnelian, aksesori telefon mewah batu semula jadi Bint Saeed Abu Dhabi',
    ),
    pdpAlt: altLoc(
      'Al Quaa Tiger Eye natural stone phone charm by Bint Saeed: warm chatoyant tiger eye beads, hand-carved Carnelian Al Ain Rosette and gold-plated faceted hematite on display. Handcrafted luxury phone jewellery for gemstone collectors and lovers of natural stone accessories. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.',
      'تعليقة هاتف القوع عين النمر من الأحجار الطبيعية من Bint Saeed: خرز عين النمر الدافئ المتلألئ، روزيت العين المحفورة من العقيق، وهيمايت مطلي بالذهب مُقطَّع على الواجهة. مجوهرات هاتف فاخرة مصنوعة يدوياً لجامعات الأحجار الكريمة وعاشقات إكسسوارات الأحجار الطبيعية. صُنعت في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.',
      'Breloque téléphone Al Quaa œil de tigre pierres naturelles par Bint Saeed : perles d’œil de tigre chatoyant chaud, rosette d’Al Ain en cornaline sculptée et hématite facettée plaquée or. Bijou téléphone de luxe artisanal pour collectionneuses de gemmes et amoureuses d’accessoires pierres naturelles. Fabriquée à Abou Dabi, Émirats arabes unis. Livraison mondiale.',
      'Ciondolo telefono Al Quaa occhio di tigre in pietra naturale di Bint Saeed: perle di occhio di tigre chatoyant caldo, Rosetta di Al Ain in corniola intagliata e ematite sfaccettata placcata oro. Gioiello telefono di lusso artigianale per collezioniste di gemme e amanti di accessori in pietra naturale. Realizzato ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.',
      'Colgante móvil Al Quaa ojo de tigre de piedra natural de Bint Saeed: cuentas de ojo de tigre chatoyant cálido, Roseta de Al Ain en cornalina tallada y hematita facetada baño de oro. Joyería móvil de lujo artesanal para coleccionistas de gemas y amantes de accesorios de piedra natural. Hecho en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.',
      'Подвеска для телефона Al Quaa тигровый глаз из натурального камня от Bint Saeed: тёплые переливающиеся бусины тигрового глаза, резная сердоликовая розетка Al Ain и позолоченный гранёный гематит. Роскошное рукотворное украшение для телефона для коллекционерок самоцветов и любительниц аксессуаров из натурального камня. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.',
      'Bint Saeed Al Quaa 虎眼石天然石手机挂饰：温暖猫眼光虎眼珠、手工雕刻红玉髓 Al Ain 玫瑰花饰与镀金切面赤铁矿。献给宝石收藏者与天然石配饰爱好者的奢华手工手机珠宝。阿联酋阿布扎比制造。全球配送。',
      'Al Quaa Tigerauge Naturstein-Telefonanhänger von Bint Saeed: warm chatoyante Tigerauge-Perlen, handgeschnitzte Karneol-Al-Ain-Rosette und vergoldetes facettiertes Hämatit. Luxuriöser handgefertigter Telefonschmuck für Edelstein-Sammlerinnen und Liebhaberinnen von Naturstein-Accessoires. Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate. Weltweiter Versand.',
      'Al Quaa tijgeroog natuursteen telefoonhanger van Bint Saeed: warm chatoyante tijgeroog kralen, handgesneden carneool Al Ain Rosette en verguld gefacetteerd hematiet. Luxe handgemaakte telefoonsieraden voor edelsteenverzamelaarsters en liefhebbers van natuursteenaccessoires. Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten. Wereldwijde verzending.',
      'Pingente telemóvel Al Quaa olho de tigre em pedra natural da Bint Saeed: contas de olho de tigre chatoyant quente, Roseta de Al Ain em cornalina esculpida e hematite facetada banho de ouro. Joia de telemóvel de luxo artesanal para colecionadoras de gemas e amantes de acessórios em pedra natural. Feito em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.',
      'Liontin ponsel Al Quaa mata harimau batu alam oleh Bint Saeed: manik mata harimau chatoyant hangat, Rosette Al Ain karnelian ukiran tangan, dan hematit berfaset berlapis emas. Perhiasan ponsel mewah buatan tangan untuk kolektor batu permata dan pecinta aksesori batu alam. Dibuat di Abu Dhabi, Uni Emirat Arab. Pengiriman dunia.',
      'Liontin telefon Al Quaa mata harimau batu semula jadi oleh Bint Saeed: manik mata harimau chatoyant hangat, Rosette Al Ain karnelian ukiran tangan, dan hematit berfaset bersalut emas. Barang kemas telefon mewah buatan tangan untuk pengumpul batu permata dan peminat aksesori batu semula jadi. Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu. Penghantaran seluruh dunia.',
    ),
  },

  'al-quaa-phone-charm-malachite': {
    carouselAlt: altLoc(
      'Al Quaa Malachite phone charm — deep green banded malachite beads with Carnelian Al Ain Rosette, natural stone luxury phone accessory by Bint Saeed Abu Dhabi',
      'تعليقة هاتف القوع ملاكيت — خرز ملاكيت أخضر عميق مُخطَّط مع روزيت العين من العقيق، إكسسوار هاتف فاخر من الأحجار الطبيعية من Bint Saeed أبوظبي',
      'Breloque téléphone Al Quaa malachite — perles de malachite verte profonde bandée et rosette d’Al Ain en cornaline, accessoire téléphone luxe pierres naturelles Bint Saeed Abou Dabi',
      'Ciondolo telefono Al Quaa malachite — perle di malachite verde profonda a bande e Rosetta di Al Ain in corniola, accessorio telefono lusso pietre naturali Bint Saeed Abu Dhabi',
      'Colgante móvil Al Quaa malaquita — cuentas de malaquita verde profunda bandeada y Roseta de Al Ain en cornalina, accesorio móvil lujo piedra natural Bint Saeed Abu Dabi',
      'Подвеска Al Quaa малахит — глубоко-зелёные полосчатые бусины малахита и сердоликовой розеткой Al Ain, люксовый аксессуар для телефона из натурального камня Bint Saeed Абу-Даби',
      'Al Quaa 孔雀石手机挂饰 — 深绿条带孔雀石珠与红玉髓 Al Ain 玫瑰花饰，Bint Saeed 阿布扎比天然石奢华手机配饰',
      'Al Quaa Malachit Telefonanhänger — tiefgrüne gebänderte Malachitperlen mit Karneol-Al-Ain-Rosette, Naturstein-Luxus-Telefonaccessoire von Bint Saeed Abu Dhabi',
      'Al Quaa malachiet telefoonhanger — diepgroene gestreepte malachiet kralen met carneool Al Ain Rosette, natuursteen luxe telefoonaccessoire van Bint Saeed Abu Dhabi',
      'Pingente telemóvel Al Quaa malaquite — contas de malaquite verde profunda bandeada com Roseta de Al Ain em cornalina, acessório telemóvel luxo pedra natural Bint Saeed Abu Dhabi',
      'Liontin ponsel Al Quaa malakit — manik malakit hijau pekat berpita dengan Rosette Al Ain karnelian, aksesori ponsel mewah batu alam Bint Saeed Abu Dhabi',
      'Liontin telefon Al Quaa malakit — manik malakit hijau pekat berjalur dengan Rosette Al Ain karnelian, aksesori telefon mewah batu semula jadi Bint Saeed Abu Dhabi',
    ),
    pdpAlt: altLoc(
      'Al Quaa Malachite natural stone phone charm by Bint Saeed: deep green banded malachite beads, hand-carved Carnelian Al Ain Rosette and gold-plated faceted hematite accents on display. Statement luxury phone jewellery for natural stone lovers and Emirati designer accessory collectors. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.',
      'تعليقة هاتف القوع ملاكيت من الأحجار الطبيعية من Bint Saeed: خرز ملاكيت أخضر عميق مُخطَّط، روزيت العين المحفورة من العقيق، وهيمايت مطلي بالذهب مُقطَّع على الواجهة. مجوهرات هاتف فاخرة بارزة لعاشقات الأحجار الطبيعية وجامعات إكسسوارات المصمّم الإماراتي. صُنعت في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.',
      'Breloque téléphone Al Quaa malachite pierres naturelles par Bint Saeed : perles de malachite verte profonde bandée, rosette d’Al Ain en cornaline sculptée et accents d’hématite facettée plaquée or. Bijou téléphone statement de luxe pour amoureuses de pierres naturelles et collectionneuses d’accessoires designer émiratis. Fabriquée à Abou Dabi, Émirats arabes unis. Livraison mondiale.',
      'Ciondolo telefono Al Quaa malachite in pietra naturale di Bint Saeed: perle di malachite verde profonda a bande, Rosetta di Al Ain in corniola intagliata e accenti di ematite sfaccettata placcata oro. Gioiello telefono statement di lusso per amanti di pietre naturali e collezioniste di accessori designer emiratini. Realizzato ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.',
      'Colgante móvil Al Quaa malaquita de piedra natural de Bint Saeed: cuentas de malaquita verde profunda bandeada, Roseta de Al Ain en cornalina tallada y acentos de hematita facetada baño de oro. Joyería móvil statement de lujo para amantes de piedras naturales y coleccionistas de accesorios diseñador emiratíes. Hecho en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.',
      'Подвеска для телефона Al Quaa малахит из натурального камня от Bint Saeed: глубоко-зелёные полосчатые бусины малахита, резная сердоликовая розетка Al Ain и акценты из позолоченного гранёного гематита. Акцентное люксовое украшение для телефона для любительниц натуральных камней и коллекционерок эмиратских дизайнерских аксессуаров. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.',
      'Bint Saeed Al Quaa 孔雀石天然石手机挂饰：深绿条带孔雀石珠、手工雕刻红玉髓 Al Ain 玫瑰花饰与镀金切面赤铁矿点缀。献给天然石爱好者与阿联酋设计师配饰收藏者的奢华亮点手机珠宝。阿联酋阿布扎比制造。全球配送。',
      'Al Quaa Malachit Naturstein-Telefonanhänger von Bint Saeed: tiefgrüne gebänderte Malachitperlen, handgeschnitzte Karneol-Al-Ain-Rosette und vergoldete facettierte Hämatit-Akzente. Statement-Luxus-Telefonschmuck für Naturstein-Liebhaberinnen und Sammlerinnen emiratischer Designer-Accessoires. Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate. Weltweiter Versand.',
      'Al Quaa malachiet natuursteen telefoonhanger van Bint Saeed: diepgroene gestreepte malachiet kralen, handgesneden carneool Al Ain Rosette en verguld gefacetteerd hematiet. Statement luxe telefoonsieraden voor natuursteenliefhebbers en verzamelaarsters van Emiratische designeraccessoires. Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten. Wereldwijde verzending.',
      'Pingente telemóvel Al Quaa malaquite em pedra natural da Bint Saeed: contas de malaquite verde profunda bandeada, Roseta de Al Ain em cornalina esculpida e acentos de hematite facetada banho de ouro. Joia de telemóvel statement de luxo para amantes de pedras naturais e colecionadoras de acessórios designer emirati. Feito em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.',
      'Liontin ponsel Al Quaa malakit batu alam oleh Bint Saeed: manik malakit hijau pekat berpita, Rosette Al Ain karnelian ukiran tangan, dan aksen hematit berfaset berlapis emas. Perhiasan ponsel mewah statement untuk pecinta batu alam dan kolektor aksesori desainer Emirati. Dibuat di Abu Dhabi, Uni Emirat Arab. Pengiriman dunia.',
      'Liontin telefon Al Quaa malakit batu semula jadi oleh Bint Saeed: manik malakit hijau pekat berjalur, Rosette Al Ain karnelian ukiran tangan, dan aksen hematit berfaset bersalut emas. Barang kemas telefon mewah statement untuk peminat batu semula jadi dan pengumpul aksesori pereka Emirati. Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu. Penghantaran seluruh dunia.',
    ),
  },

  'al-quaa-phone-charm-lapis-lazuli': {
    carouselAlt: altLoc(
      'Al Quaa Lapis Lazuli phone charm — royal blue lapis beads with gold pyrite flecks and Carnelian Al Ain Rosette, natural stone luxury phone accessory by Bint Saeed Abu Dhabi',
      'تعليقة هاتف القوع لازورد — خرز لازورد أزرق ملكي بنقاط البيريت الذهبية مع روزيت العين من العقيق، إكسسوار هاتف فاخر من الأحجار الطبيعية من Bint Saeed أبوظبي',
      'Breloque téléphone Al Quaa lapis-lazuli — perles de lapis bleu royal à reflets de pyrite dorée et rosette d’Al Ain en cornaline, accessoire téléphone luxe pierres naturelles Bint Saeed Abou Dabi',
      'Ciondolo telefono Al Quaa lapislazzuli — perle di lapis blu reale con riflessi di pirite dorata e Rosetta di Al Ain in corniola, accessorio telefono lusso pietre naturali Bint Saeed Abu Dhabi',
      'Colgante móvil Al Quaa lapislázuli — cuentas de lapis azul real con motas de pirita dorada y Roseta de Al Ain en cornalina, accesorio móvil lujo piedra natural Bint Saeed Abu Dabi',
      'Подвеска Al Quaa лазурит — королевско-синие бусины лазурита с золотистыми вкраплениями пирита и сердоликовой розеткой Al Ain, люксовый аксессуар для телефона из натурального камня Bint Saeed Абу-Даби',
      'Al Quaa 青金石手机挂饰 — 皇家蓝青金珠含金色黄铁矿闪光与红玉髓 Al Ain 玫瑰花饰，Bint Saeed 阿布扎比天然石奢华手机配饰',
      'Al Quaa Lapislazuli Telefonanhänger — königsblaue Lapisperlen mit goldenen Pyritflecken und Karneol-Al-Ain-Rosette, Naturstein-Luxus-Telefonaccessoire von Bint Saeed Abu Dhabi',
      'Al Quaa lapis lazuli telefoonhanger — koningsblauwe lapis kralen met gouden pyrietspikkels en carneool Al Ain Rosette, natuursteen luxe telefoonaccessoire van Bint Saeed Abu Dhabi',
      'Pingente telemóvel Al Quaa lápis-lazúli — contas de lápis azul-real com flecks de pirite dourada e Roseta de Al Ain em cornalina, acessório telemóvel luxo pedra natural Bint Saeed Abu Dhabi',
      'Liontin ponsel Al Quaa lapis lazuli — manik lapis biru royal dengan bintik pirit emas dan Rosette Al Ain karnelian, aksesori ponsel mewah batu alam Bint Saeed Abu Dhabi',
      'Liontin telefon Al Quaa lapis lazuli — manik lapis biru diraja dengan bintik pirit emas dan Rosette Al Ain karnelian, aksesori telefon mewah batu semula jadi Bint Saeed Abu Dhabi',
    ),
    pdpAlt: altLoc(
      'Al Quaa Lapis Lazuli natural stone phone charm by Bint Saeed: rich royal blue lapis lazuli beads with gold pyrite flecks, hand-carved Carnelian Al Ain Rosette and gold-plated hematite on display. Luxury handcrafted phone jewellery for gemstone enthusiasts and refined accessory lovers. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.',
      'تعليقة هاتف القوع لازورد من الأحجار الطبيعية من Bint Saeed: خرز لازورد أزرق ملكي غني بنقاط البيريت الذهبية، روزيت العين المحفورة من العقيق، وهيمايت مطلي بالذهب على الواجهة. مجوهرات هاتف فاخرة مصنوعة يدوياً لعشّاق الأحجار الكريمة وعاشقات الإكسسوارات الراقية. صُنعت في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.',
      'Breloque téléphone Al Quaa lapis-lazuli pierres naturelles par Bint Saeed : riches perles de lapis bleu royal à reflets de pyrite dorée, rosette d’Al Ain en cornaline sculptée et hématite plaquée or. Bijou téléphone de luxe artisanal pour passionnées de gemmes et amoureuses d’accessoires raffinés. Fabriquée à Abou Dabi, Émirats arabes unis. Livraison mondiale.',
      'Ciondolo telefono Al Quaa lapislazzuli in pietra naturale di Bint Saeed: ricche perle di lapis blu reale con riflessi di pirite dorata, Rosetta di Al Ain in corniola intagliata ed ematite placcata oro. Gioiello telefono di lusso artigianale per appassionate di gemme e amanti di accessori raffinati. Realizzato ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.',
      'Colgante móvil Al Quaa lapislázuli de piedra natural de Bint Saeed: ricas cuentas de lapis azul real con motas de pirita dorada, Roseta de Al Ain en cornalina tallada y hematita baño de oro. Joyería móvil de lujo artesanal para entusiastas de gemas y amantes de accesorios refinados. Hecho en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.',
      'Подвеска для телефона Al Quaa лазурит из натурального камня от Bint Saeed: насыщенные королевско-синие бусины лазурита с золотистыми вкраплениями пирита, резная сердоликовая розетка Al Ain и позолоченный гематит. Роскошное рукотворное украшение для телефона для ценительниц самоцветов и любительниц изысканных аксессуаров. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.',
      'Bint Saeed Al Quaa 青金石天然石手机挂饰：浓郁皇家蓝青金珠含金色黄铁矿闪光、手工雕刻红玉髓 Al Ain 玫瑰花饰与镀金赤铁矿。献给宝石爱好者与精致配饰审美的奢华手工手机珠宝。阿联酋阿布扎比制造。全球配送。',
      'Al Quaa Lapislazuli Naturstein-Telefonanhänger von Bint Saeed: reich königsblaue Lapislazuli-Perlen mit goldenen Pyritflecken, handgeschnitzte Karneol-Al-Ain-Rosette und vergoldetes Hämatit. Luxuriöser handgefertigter Telefonschmuck für Edelstein-Enthusiastinnen und Liebhaberinnen raffinierter Accessoires. Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate. Weltweiter Versand.',
      'Al Quaa lapis lazuli natuursteen telefoonhanger van Bint Saeed: rijke koningsblauwe lapis lazuli kralen met gouden pyrietspikkels, handgesneden carneool Al Ain Rosette en verguld hematiet. Luxe handgemaakte telefoonsieraden voor edelsteenliefhebbers en liefhebbers van verfijnde accessoires. Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten. Wereldwijde verzending.',
      'Pingente telemóvel Al Quaa lápis-lazúli em pedra natural da Bint Saeed: ricas contas de lápis-lazúli azul-real com flecks de pirite dourada, Roseta de Al Ain em cornalina esculpida e hematite banho de ouro. Joia de telemóvel de luxo artesanal para entusiastas de gemas e amantes de acessórios refinados. Feito em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.',
      'Liontin ponsel Al Quaa lapis lazuli batu alam oleh Bint Saeed: manik lapis lazuli biru royal kaya dengan bintik pirit emas, Rosette Al Ain karnelian ukiran tangan, dan hematit berlapis emas. Perhiasan ponsel mewah buatan tangan untuk penggemar batu permata dan pecinta aksesori halus. Dibuat di Abu Dhabi, Uni Emirat Arab. Pengiriman dunia.',
      'Liontin telefon Al Quaa lapis lazuli batu semula jadi oleh Bint Saeed: manik lapis lazuli biru diraja kaya dengan bintik pirit emas, Rosette Al Ain karnelian ukiran tangan, dan hematit bersalut emas. Barang kemas telefon mewah buatan tangan untuk peminat batu permata dan peminat aksesori halus. Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu. Penghantaran seluruh dunia.',
    ),
  },

  'al-quaa-phone-charm-rose-quartz': {
    carouselAlt: altLoc(
      'Al Quaa Rose Quartz phone charm — soft blush rose quartz beads with Carnelian Al Ain Rosette, natural stone luxury phone accessory by Bint Saeed Abu Dhabi',
      'تعليقة هاتف القوع كوارتز وردي — خرز كوارتز وردي ناعم بلون الخدود مع روزيت العين من العقيق، إكسسوار هاتف فاخر من الأحجار الطبيعية من Bint Saeed أبوظبي',
      'Breloque téléphone Al Quaa quartz rose — perles de quartz rose blush doux et rosette d’Al Ain en cornaline, accessoire téléphone luxe pierres naturelles Bint Saeed Abou Dabi',
      'Ciondolo telefono Al Quaa quarzo rosa — perle di quarzo rosa blush morbido e Rosetta di Al Ain in corniola, accessorio telefono lusso pietre naturali Bint Saeed Abu Dhabi',
      'Colgante móvil Al Quaa cuarzo rosa — cuentas de cuarzo rosa blush suave y Roseta de Al Ain en cornalina, accesorio móvil lujo piedra natural Bint Saeed Abu Dabi',
      'Подвеска Al Quaa розовый кварц — мягкие румяно-розовые бусины розового кварца и сердоликовой розеткой Al Ain, люксовый аксессуар для телефона из натурального камня Bint Saeed Абу-Даби',
      'Al Quaa 粉晶手机挂饰 — 柔粉玫瑰石英珠与红玉髓 Al Ain 玫瑰花饰，Bint Saeed 阿布扎比天然石奢华手机配饰',
      'Al Quaa Rosenquarz Telefonanhänger — weiche blush-rosafarbene Rosenquarzperlen mit Karneol-Al-Ain-Rosette, Naturstein-Luxus-Telefonaccessoire von Bint Saeed Abu Dhabi',
      'Al Quaa rozenkwarts telefoonhanger — zachte blush-roze rozenkwarts kralen met carneool Al Ain Rosette, natuursteen luxe telefoonaccessoire van Bint Saeed Abu Dhabi',
      'Pingente telemóvel Al Quaa quartzo rosa — contas de quartzo rosa blush suave com Roseta de Al Ain em cornalina, acessório telemóvel luxo pedra natural Bint Saeed Abu Dhabi',
      'Liontin ponsel Al Quaa kuarsa mawar — manik kuarsa mawar blush lembut dengan Rosette Al Ain karnelian, aksesori ponsel mewah batu alam Bint Saeed Abu Dhabi',
      'Liontin telefon Al Quaa kuarsa mawar — manik kuarsa mawar blush lembut dengan Rosette Al Ain karnelian, aksesori telefon mewah batu semula jadi Bint Saeed Abu Dhabi',
    ),
    pdpAlt: altLoc(
      'Al Quaa Rose Quartz natural stone phone charm by Bint Saeed: soft blush rose quartz beads, hand-carved Carnelian Al Ain Rosette and gold-plated faceted hematite accents on display. Romantic luxury phone jewellery for lovers of natural stones, phone charms and refined accessories. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.',
      'تعليقة هاتف القوع كوارتز وردي من الأحجار الطبيعية من Bint Saeed: خرز كوارتز وردي ناعم بلون الخدود، روزيت العين المحفورة من العقيق، وهيمايت مطلي بالذهب مُقطَّع على الواجهة. مجوهرات هاتف فاخرة رومانسية لعاشقات الأحجار الطبيعية وتعليقات الهاتف والإكسسوارات الراقية. صُنعت في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.',
      'Breloque téléphone Al Quaa quartz rose pierres naturelles par Bint Saeed : perles de quartz rose blush doux, rosette d’Al Ain en cornaline sculptée et accents d’hématite facettée plaquée or. Bijou téléphone romantique de luxe pour amoureuses de pierres naturelles, breloques téléphone et accessoires raffinés. Fabriquée à Abou Dabi, Émirats arabes unis. Livraison mondiale.',
      'Ciondolo telefono Al Quaa quarzo rosa in pietra naturale di Bint Saeed: perle di quarzo rosa blush morbido, Rosetta di Al Ain in corniola intagliata e accenti di ematite sfaccettata placcata oro. Gioiello telefono romantico di lusso per amanti di pietre naturali, ciondoli telefono e accessori raffinati. Realizzato ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.',
      'Colgante móvil Al Quaa cuarzo rosa de piedra natural de Bint Saeed: cuentas de cuarzo rosa blush suave, Roseta de Al Ain en cornalina tallada y acentos de hematita facetada baño de oro. Joyería móvil romántica de lujo para amantes de piedras naturales, colgantes de móvil y accesorios refinados. Hecho en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.',
      'Подвеска для телефона Al Quaa розовый кварц из натурального камня от Bint Saeed: мягкие румяно-розовые бусины розового кварца, резная сердоликовая розетка Al Ain и акценты из позолоченного гранёного гематита. Романтичное люксовое украшение для телефона для любительниц натуральных камней, подвесок для телефона и изысканных аксессуаров. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.',
      'Bint Saeed Al Quaa 粉晶天然石手机挂饰：柔粉玫瑰石英珠、手工雕刻红玉髓 Al Ain 玫瑰花饰与镀金切面赤铁矿点缀。献给天然石、手机挂饰与精致配饰爱好者的浪漫奢华手机珠宝。阿联酋阿布扎比制造。全球配送。',
      'Al Quaa Rosenquarz Naturstein-Telefonanhänger von Bint Saeed: weiche blush-rosafarbene Rosenquarzperlen, handgeschnitzte Karneol-Al-Ain-Rosette und vergoldete facettierte Hämatit-Akzente. Romantischer Luxus-Telefonschmuck für Liebhaberinnen von Natursteinen, Telefonanhängern und raffinierten Accessoires. Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate. Weltweiter Versand.',
      'Al Quaa rozenkwarts natuursteen telefoonhanger van Bint Saeed: zachte blush-roze rozenkwarts kralen, handgesneden carneool Al Ain Rosette en verguld gefacetteerd hematiet. Romantische luxe telefoonsieraden voor liefhebbers van natuursteen, telefoonhangers en verfijnde accessoires. Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten. Wereldwijde verzending.',
      'Pingente telemóvel Al Quaa quartzo rosa em pedra natural da Bint Saeed: contas de quartzo rosa blush suave, Roseta de Al Ain em cornalina esculpida e acentos de hematite facetada banho de ouro. Joia de telemóvel romântica de luxo para amantes de pedras naturais, pingentes de telemóvel e acessórios refinados. Feito em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.',
      'Liontin ponsel Al Quaa kuarsa mawar batu alam oleh Bint Saeed: manik kuarsa mawar blush lembut, Rosette Al Ain karnelian ukiran tangan, dan aksen hematit berfaset berlapis emas. Perhiasan ponsel mewah romantis untuk pecinta batu alam, liontin ponsel, dan aksesori halus. Dibuat di Abu Dhabi, Uni Emirat Arab. Pengiriman dunia.',
      'Liontin telefon Al Quaa kuarsa mawar batu semula jadi oleh Bint Saeed: manik kuarsa mawar blush lembut, Rosette Al Ain karnelian ukiran tangan, dan aksen hematit berfaset bersalut emas. Barang kemas telefon mewah romantik untuk peminat batu semula jadi, liontin telefon dan aksesori halus. Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu. Penghantaran seluruh dunia.',
    ),
  },
}

export function getPhoneCharmLocalizedAlts(
  id: string,
  locale: AppLocale = 'en',
): PhoneCharmLocalizedAlts | undefined {
  const canonicalId = resolveAccessoryId(id)
  if (!isAlQuaaPhoneCharmId(canonicalId)) return undefined
  const pack = PHONE_CHARM_IMAGE_ALTS[canonicalId]
  if (!pack) return undefined
  return {
    carouselAlt: pack.carouselAlt[locale] ?? pack.carouselAlt.en,
    pdpAlt: pack.pdpAlt[locale] ?? pack.pdpAlt.en,
    ...(pack.lifestyleAlt
      ? { lifestyleAlt: pack.lifestyleAlt[locale] ?? pack.lifestyleAlt.en }
      : {}),
  }
}
