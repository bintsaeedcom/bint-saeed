import type { AppLocale } from '@/lib/i18n/routing'
import { altLoc } from '@/lib/products/imageAltOverridesI18n'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'

export type EarringLocalizedAlts = {
  carouselAlt: string
  pdpAlt: string
}

export const EARRING_ALT_IDS = [
  'al-ain-oasis-earrings-malachite',
  'al-ain-oasis-earrings-orange-jade',
  'al-quaa-earrings-rose-quartz',
  'al-quaa-earrings-lapis-lazuli',
] as const

export type EarringAltId = (typeof EARRING_ALT_IDS)[number]

function isEarringAltId(id: string): id is EarringAltId {
  return (EARRING_ALT_IDS as readonly string[]).includes(id)
}

type AltPack = {
  carouselAlt: Record<AppLocale, string>
  pdpAlt: Record<AppLocale, string>
}

const EARRING_IMAGE_ALTS: Record<EarringAltId, AltPack> = {
  'al-ain-oasis-earrings-malachite': {
    carouselAlt: altLoc(
      'Al Ain Oasis Earrings - Malachite — natural Malachite and Sunstone with Carnelian Al Ain Rosette and pavé zirconia leverback, luxury drop earrings by Bint Saeed Abu Dhabi',
      'أقراط واحة العين — ملاكيت — ملاكيت وحجر شمس طبيعيان مع روزيت العين من العقيق وإغلاق رافعة مرصّع بالزركونيا، أقراط متدلية فاخرة من Bint Saeed أبوظبي',
      'Boucles d’oreilles Al Ain Oasis — Malachite — malachite et pierre de soleil naturelles, rosette d’Al Ain en cornaline et fermoir leverback pavé de zirconia, pendants de luxe Bint Saeed Abou Dabi',
      'Orecchini Al Ain Oasis — Malachite — malachite e pietra di sole naturali, Rosetta di Al Ain in corniola e chiusura leverback pavé di zirconia, orecchini pendenti di lusso Bint Saeed Abu Dhabi',
      'Pendientes Al Ain Oasis — Malaquita — malaquita y piedra de sol naturales, Roseta de Al Ain en cornalina y cierre leverback pavé de zirconia, pendientes largos de lujo Bint Saeed Abu Dabi',
      'Серьги Al Ain Oasis — Малахит — натуральные малахит и солнечный камень, розетка Al Ain из сердолика и рычажный замок с паве из циркония, люксовые серьги-капли Bint Saeed Абу-Даби',
      'Al Ain Oasis 孔雀石耳环 — 天然孔雀石与日光石、红玉髓 Al Ain 玫瑰花饰与密镶锆石杠杆扣，Bint Saeed 阿布扎比奢华垂坠耳环',
      'Al Ain Oasis Ohrringe — Malachit — natürlicher Malachit und Sonnenstein mit Karneol-Al-Ain-Rosette und Pavé-Zirkonia-Leverback, Luxus-Tropfenohrringe von Bint Saeed Abu Dhabi',
      'Al Ain Oasis oorbellen — Malachiet — natuurlijke malachiet en zonsteen met carneool Al Ain Rosette en pavé-zirconia leverback, luxe druppeloorbellen van Bint Saeed Abu Dhabi',
      'Brincos Al Ain Oasis — Malaquite — malaquite e pedra do sol naturais, Roseta de Al Ain em cornalina e fecho leverback pavé de zirconia, brincos pendentes de luxo Bint Saeed Abu Dhabi',
      'Anting Al Ain Oasis — Malakit — malakit dan batu matahari alami dengan Rosette Al Ain karnelian dan tuas leverback pavé zirconia, anting drop mewah Bint Saeed Abu Dhabi',
      'Anting Al Ain Oasis — Malakit — malakit dan batu matahari semula jadi dengan Rosette Al Ain karnelian dan tuas leverback pavé zirconia, anting drop mewah Bint Saeed Abu Dhabi',
    ),
    pdpAlt: altLoc(
      'Al Ain Oasis Earrings - Malachite by Bint Saeed: genuine Malachite and Sunstone gemstones, hand-carved Carnelian Al Ain Rosette, faceted gold-plated Hematite and pavé zirconia leverback clasp in 14k gold-plated nickel-free copper. Luxury hand-assembled drop earrings, drop 5.5 cm. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.',
      'أقراط واحة العين — ملاكيت من Bint Saeed: أحجار ملاكيت وحجر شمس أصلية، روزيت العين المحفورة من العقيق، هيمايت مطلي بالذهب مُقطَّع، وإغلاق رافعة مرصّع بالزركونيا في نحاس خالٍ من النيكل مطلي بالذهب عيار 14 قيراطاً. أقراط متدلية فاخرة مُجمَّعة يدوياً، طول التدلي 5.5 سم. صُنعت في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.',
      'Boucles d’oreilles Al Ain Oasis — Malachite par Bint Saeed : véritables pierres de malachite et de pierre de soleil, rosette d’Al Ain en cornaline sculptée, hématite facettée plaquée or et fermoir leverback pavé de zirconia en cuivre sans nickel plaqué or 14 carats. Pendants de luxe assemblés à la main, chute 5,5 cm. Fabriquées à Abou Dabi, Émirats arabes unis. Livraison mondiale.',
      'Orecchini Al Ain Oasis — Malachite di Bint Saeed: vere gemme di malachite e pietra di sole, Rosetta di Al Ain in corniola intagliata, ematite sfaccettata placcata oro e chiusura leverback pavé di zirconia in rame nickel-free placcato oro 14k. Orecchini pendenti di lusso assemblati a mano, drop 5,5 cm. Realizzati ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.',
      'Pendientes Al Ain Oasis — Malaquita de Bint Saeed: gemas genuinas de malaquita y piedra de sol, Roseta de Al Ain en cornalina tallada, hematita facetada baño de oro y cierre leverback pavé de zirconia en cobre libre de níquel baño de oro 14k. Pendientes largos de lujo ensamblados a mano, caída 5,5 cm. Hechos en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.',
      'Серьги Al Ain Oasis — Малахит от Bint Saeed: подлинные малахит и солнечный камень, резная сердоликовая розетка Al Ain, гранёный позолоченный гематит и рычажный замок с паве из циркония на никель-фри меди с покрытием 14k. Роскошные серьги-капли ручной сборки, длина 5,5 см. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.',
      'Bint Saeed Al Ain Oasis 孔雀石耳环：天然孔雀石与日光石、手工雕刻红玉髓 Al Ain 玫瑰花饰、镀金切面赤铁矿，以及 14k 镀金无镍铜密镶锆石杠杆扣。奢华手工组装垂坠耳环，垂长 5.5 厘米。阿联酋阿布扎比制造。全球配送。',
      'Al Ain Oasis Ohrringe — Malachit von Bint Saeed: echter Malachit und Sonnenstein, handgeschnitzte Karneol-Al-Ain-Rosette, facettiertes vergoldetes Hämatit und Pavé-Zirkonia-Leverback in 14k goldplattiertem nickelfreiem Kupfer. Luxuriöse handmontierte Tropfenohrringe, Länge 5,5 cm. Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate. Weltweiter Versand.',
      'Al Ain Oasis oorbellen — Malachiet van Bint Saeed: echte malachiet en zonsteen, handgesneden carneool Al Ain Rosette, gefacetteerd verguld hematiet en pavé-zirconia leverback in 14k verguld nikkelvrij koper. Luxe handgemonteerde druppeloorbellen, lengte 5,5 cm. Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten. Wereldwijde verzending.',
      'Brincos Al Ain Oasis — Malaquite da Bint Saeed: gemas genuínas de malaquite e pedra do sol, Roseta de Al Ain em cornalina esculpida, hematite facetada banho de ouro e fecho leverback pavé de zirconia em cobre sem níquel banho de ouro 14k. Brincos pendentes de luxo montados à mão, queda 5,5 cm. Feitos em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.',
      'Anting Al Ain Oasis — Malakit oleh Bint Saeed: malakit dan batu matahari asli, Rosette Al Ain karnelian ukiran tangan, hematit berfaset berlapis emas, dan tuas leverback pavé zirconia pada tembaga bebas nikel berlapis emas 14k. Anting drop mewah dirakit tangan, panjang 5,5 cm. Dibuat di Abu Dhabi, Uni Emirat Arab. Pengiriman dunia.',
      'Anting Al Ain Oasis — Malakit oleh Bint Saeed: malakit dan batu matahari tulen, Rosette Al Ain karnelian ukiran tangan, hematit berfaset bersalut emas, dan tuas leverback pavé zirconia pada tembaga bebas nikel bersalut emas 14k. Anting drop mewah dipasang tangan, panjang 5,5 cm. Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu. Penghantaran seluruh dunia.',
    ),
  },

  'al-ain-oasis-earrings-orange-jade': {
    carouselAlt: altLoc(
      'Al Ain Oasis Earrings - Orange Jade — Orange Coloured Jade and Sunstone with Carnelian Al Ain Rosette and pavé zirconia leverback, luxury drop earrings by Bint Saeed Abu Dhabi',
      'أقراط واحة العين — يشم برتقالي — يشم برتقالي اللون وحجر شمس مع روزيت العين من العقيق وإغلاق رافعة مرصّع بالزركونيا، أقراط متدلية فاخرة من Bint Saeed أبوظبي',
      'Boucles d’oreilles Al Ain Oasis — Jade orange — jade orange et pierre de soleil, rosette d’Al Ain en cornaline et fermoir leverback pavé de zirconia, pendants de luxe Bint Saeed Abou Dabi',
      'Orecchini Al Ain Oasis — Giada arancio — giada arancio e pietra di sole, Rosetta di Al Ain in corniola e chiusura leverback pavé di zirconia, orecchini pendenti di lusso Bint Saeed Abu Dhabi',
      'Pendientes Al Ain Oasis — Jade naranja — jade naranja y piedra de sol, Roseta de Al Ain en cornalina y cierre leverback pavé de zirconia, pendientes largos de lujo Bint Saeed Abu Dabi',
      'Серьги Al Ain Oasis — Оранжевый нефрит — оранжевый нефрит и солнечный камень, розетка Al Ain из сердолика и рычажный замок с паве из циркония, люксовые серьги-капли Bint Saeed Абу-Даби',
      'Al Ain Oasis 橙玉耳环 — 橙色玉与日光石、红玉髓 Al Ain 玫瑰花饰与密镶锆石杠杆扣，Bint Saeed 阿布扎比奢华垂坠耳环',
      'Al Ain Oasis Ohrringe — Orange Jade — orangefarbene Jade und Sonnenstein mit Karneol-Al-Ain-Rosette und Pavé-Zirkonia-Leverback, Luxus-Tropfenohrringe von Bint Saeed Abu Dhabi',
      'Al Ain Oasis oorbellen — Oranje jade — oranje jade en zonsteen met carneool Al Ain Rosette en pavé-zirconia leverback, luxe druppeloorbellen van Bint Saeed Abu Dhabi',
      'Brincos Al Ain Oasis — Jade laranja — jade laranja e pedra do sol, Roseta de Al Ain em cornalina e fecho leverback pavé de zirconia, brincos pendentes de luxo Bint Saeed Abu Dhabi',
      'Anting Al Ain Oasis — Jade oranye — jade berwarna oranye dan batu matahari dengan Rosette Al Ain karnelian dan tuas leverback pavé zirconia, anting drop mewah Bint Saeed Abu Dhabi',
      'Anting Al Ain Oasis — Jed oren — jed berwarna oren dan batu matahari dengan Rosette Al Ain karnelian dan tuas leverback pavé zirconia, anting drop mewah Bint Saeed Abu Dhabi',
    ),
    pdpAlt: altLoc(
      'Al Ain Oasis Earrings - Orange Jade by Bint Saeed: genuine Orange Coloured Jade and Sunstone gemstones, hand-carved Carnelian Al Ain Rosette, faceted gold-plated Hematite and pavé zirconia leverback clasp in 14k gold-plated nickel-free copper. Luxury hand-assembled drop earrings, drop 5.5 cm. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.',
      'أقراط واحة العين — يشم برتقالي من Bint Saeed: أحجار يشم برتقالي اللون وحجر شمس أصلية، روزيت العين المحفورة من العقيق، هيمايت مطلي بالذهب مُقطَّع، وإغلاق رافعة مرصّع بالزركونيا في نحاس خالٍ من النيكل مطلي بالذهب عيار 14 قيراطاً. أقراط متدلية فاخرة مُجمَّعة يدوياً، طول التدلي 5.5 سم. صُنعت في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.',
      'Boucles d’oreilles Al Ain Oasis — Jade orange par Bint Saeed : véritables pierres de jade orange et de pierre de soleil, rosette d’Al Ain en cornaline sculptée, hématite facettée plaquée or et fermoir leverback pavé de zirconia en cuivre sans nickel plaqué or 14 carats. Pendants de luxe assemblés à la main, chute 5,5 cm. Fabriquées à Abou Dabi, Émirats arabes unis. Livraison mondiale.',
      'Orecchini Al Ain Oasis — Giada arancio di Bint Saeed: vere gemme di giada arancio e pietra di sole, Rosetta di Al Ain in corniola intagliata, ematite sfaccettata placcata oro e chiusura leverback pavé di zirconia in rame nickel-free placcato oro 14k. Orecchini pendenti di lusso assemblati a mano, drop 5,5 cm. Realizzati ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.',
      'Pendientes Al Ain Oasis — Jade naranja de Bint Saeed: gemas genuinas de jade naranja y piedra de sol, Roseta de Al Ain en cornalina tallada, hematita facetada baño de oro y cierre leverback pavé de zirconia en cobre libre de níquel baño de oro 14k. Pendientes largos de lujo ensamblados a mano, caída 5,5 cm. Hechos en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.',
      'Серьги Al Ain Oasis — Оранжевый нефрит от Bint Saeed: подлинные оранжевый нефрит и солнечный камень, резная сердоликовая розетка Al Ain, гранёный позолоченный гематит и рычажный замок с паве из циркония на никель-фри меди с покрытием 14k. Роскошные серьги-капли ручной сборки, длина 5,5 см. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.',
      'Bint Saeed Al Ain Oasis 橙玉耳环：天然橙色玉与日光石、手工雕刻红玉髓 Al Ain 玫瑰花饰、镀金切面赤铁矿，以及 14k 镀金无镍铜密镶锆石杠杆扣。奢华手工组装垂坠耳环，垂长 5.5 厘米。阿联酋阿布扎比制造。全球配送。',
      'Al Ain Oasis Ohrringe — Orange Jade von Bint Saeed: echte orangefarbene Jade und Sonnenstein, handgeschnitzte Karneol-Al-Ain-Rosette, facettiertes vergoldetes Hämatit und Pavé-Zirkonia-Leverback in 14k goldplattiertem nickelfreiem Kupfer. Luxuriöse handmontierte Tropfenohrringe, Länge 5,5 cm. Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate. Weltweiter Versand.',
      'Al Ain Oasis oorbellen — Oranje jade van Bint Saeed: echte oranje jade en zonsteen, handgesneden carneool Al Ain Rosette, gefacetteerd verguld hematiet en pavé-zirconia leverback in 14k verguld nikkelvrij koper. Luxe handgemonteerde druppeloorbellen, lengte 5,5 cm. Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten. Wereldwijde verzending.',
      'Brincos Al Ain Oasis — Jade laranja da Bint Saeed: gemas genuínas de jade laranja e pedra do sol, Roseta de Al Ain em cornalina esculpida, hematite facetada banho de ouro e fecho leverback pavé de zirconia em cobre sem níquel banho de ouro 14k. Brincos pendentes de luxo montados à mão, queda 5,5 cm. Feitos em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.',
      'Anting Al Ain Oasis — Jade oranye oleh Bint Saeed: jade berwarna oranye dan batu matahari asli, Rosette Al Ain karnelian ukiran tangan, hematit berfaset berlapis emas, dan tuas leverback pavé zirconia pada tembaga bebas nikel berlapis emas 14k. Anting drop mewah dirakit tangan, panjang 5,5 cm. Dibuat di Abu Dhabi, Uni Emirat Arab. Pengiriman dunia.',
      'Anting Al Ain Oasis — Jed oren oleh Bint Saeed: jed berwarna oren dan batu matahari tulen, Rosette Al Ain karnelian ukiran tangan, hematit berfaset bersalut emas, dan tuas leverback pavé zirconia pada tembaga bebas nikel bersalut emas 14k. Anting drop mewah dipasang tangan, panjang 5,5 cm. Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu. Penghantaran seluruh dunia.',
    ),
  },

  'al-quaa-earrings-rose-quartz': {
    carouselAlt: altLoc(
      'Al Quaa Earrings - Rose Quartz — soft blush Rose Quartz with Carnelian Al Ain Rosette and pear-cut pink zirconia stud, luxury drop earrings by Bint Saeed Abu Dhabi',
      'أقراط القوع — كوارتز وردي — كوارتز وردي ناعم مع روزيت العين من العقيق ومسمار زركونيا وردية بقطع كمّثري، أقراط متدلية فاخرة من Bint Saeed أبوظبي',
      'Boucles d’oreilles Al Quaa — Quartz rose — quartz rose blush doux, rosette d’Al Ain en cornaline et clou en zirconia rose taille poire, pendants de luxe Bint Saeed Abou Dabi',
      'Orecchini Al Quaa — Quarzo rosa — quarzo rosa blush soft, Rosetta di Al Ain in corniola e perno in zirconia rosa taglio a pera, orecchini pendenti di lusso Bint Saeed Abu Dhabi',
      'Pendientes Al Quaa — Cuarzo rosa — cuarzo rosa blush suave, Roseta de Al Ain en cornalina y pendiente en zirconia rosa talla pera, pendientes largos de lujo Bint Saeed Abu Dabi',
      'Серьги Al Quaa — Розовый кварц — мягкий розовый кварц, розетка Al Ain из сердолика и штифт из розового циркония грушевидной огранки, люксовые серьги-капли Bint Saeed Абу-Даби',
      'Al Quaa 粉晶耳环 — 柔粉粉晶、红玉髓 Al Ain 玫瑰花饰与梨形粉锆石耳钉，Bint Saeed 阿布扎比奢华垂坠耳环',
      'Al Quaa Ohrringe — Rosenquarz — weicher Blush-Rosenquarz mit Karneol-Al-Ain-Rosette und birnenförmigem rosa Zirkonia-Stecker, Luxus-Tropfenohrringe von Bint Saeed Abu Dhabi',
      'Al Quaa oorbellen — Rozenkwarts — zachte blush-rozenkwarts met carneool Al Ain Rosette en peer-cut roze zirconia stud, luxe druppeloorbellen van Bint Saeed Abu Dhabi',
      'Brincos Al Quaa — Quartzo rosa — quartzo rosa blush suave, Roseta de Al Ain em cornalina e pino em zirconia rosa corte pêra, brincos pendentes de luxo Bint Saeed Abu Dhabi',
      'Anting Al Quaa — Kuarsa mawar — kuarsa mawar blush lembut dengan Rosette Al Ain karnelian dan stud zirconia merah muda potongan pir, anting drop mewah Bint Saeed Abu Dhabi',
      'Anting Al Quaa — Kuarsa mawar — kuarsa mawar blush lembut dengan Rosette Al Ain karnelian dan stud zirconia merah jambu potongan pir, anting drop mewah Bint Saeed Abu Dhabi',
    ),
    pdpAlt: altLoc(
      'Al Quaa Earrings - Rose Quartz by Bint Saeed: genuine Rose Quartz gemstones, hand-carved Carnelian Al Ain Rosette, faceted gold-plated Hematite beads and a pear-cut pink zirconia stud in 18k gold-plated brass. Luxury hand-assembled drop earrings, drop 4 cm. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.',
      'أقراط القوع — كوارتز وردي من Bint Saeed: أحجار كوارتز وردي أصلية، روزيت العين المحفورة من العقيق، خرز هيمايت مطلي بالذهب مُقطَّع، ومسمار زركونيا وردية بقطع كمّثري في نحاس مطلي بالذهب عيار 18 قيراطاً. أقراط متدلية فاخرة مُجمَّعة يدوياً، طول التدلي 4 سم. صُنعت في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.',
      'Boucles d’oreilles Al Quaa — Quartz rose par Bint Saeed : véritables pierres de quartz rose, rosette d’Al Ain en cornaline sculptée, perles d’hématite facettée plaquée or et clou en zirconia rose taille poire en laiton plaqué or 18 carats. Pendants de luxe assemblés à la main, chute 4 cm. Fabriquées à Abou Dabi, Émirats arabes unis. Livraison mondiale.',
      'Orecchini Al Quaa — Quarzo rosa di Bint Saeed: vere gemme di quarzo rosa, Rosetta di Al Ain in corniola intagliata, perle di ematite sfaccettata placcata oro e perno in zirconia rosa taglio a pera in ottone placcato oro 18k. Orecchini pendenti di lusso assemblati a mano, drop 4 cm. Realizzati ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.',
      'Pendientes Al Quaa — Cuarzo rosa de Bint Saeed: gemas genuinas de cuarzo rosa, Roseta de Al Ain en cornalina tallada, cuentas de hematita facetada baño de oro y pendiente en zirconia rosa talla pera en latón baño de oro 18k. Pendientes largos de lujo ensamblados a mano, caída 4 cm. Hechos en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.',
      'Серьги Al Quaa — Розовый кварц от Bint Saeed: подлинный розовый кварц, резная сердоликовая розетка Al Ain, бусины гранёного позолоченного гематита и штифт из розового циркония грушевидной огранки на латуни с покрытием 18k. Роскошные серьги-капли ручной сборки, длина 4 см. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.',
      'Bint Saeed Al Quaa 粉晶耳环：天然粉晶、手工雕刻红玉髓 Al Ain 玫瑰花饰、镀金切面赤铁矿珠，以及 18k 镀金黄铜梨形粉锆石耳钉。奢华手工组装垂坠耳环，垂长 4 厘米。阿联酋阿布扎比制造。全球配送。',
      'Al Quaa Ohrringe — Rosenquarz von Bint Saeed: echter Rosenquarz, handgeschnitzte Karneol-Al-Ain-Rosette, facettierte vergoldete Hämatitperlen und birnenförmiger rosa Zirkonia-Stecker in 18k goldplattiertem Messing. Luxuriöse handmontierte Tropfenohrringe, Länge 4 cm. Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate. Weltweiter Versand.',
      'Al Quaa oorbellen — Rozenkwarts van Bint Saeed: echte rozenkwarts, handgesneden carneool Al Ain Rosette, gefacetteerde verguld hematiet kralen en peer-cut roze zirconia stud in 18k verguld messing. Luxe handgemonteerde druppeloorbellen, lengte 4 cm. Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten. Wereldwijde verzending.',
      'Brincos Al Quaa — Quartzo rosa da Bint Saeed: gemas genuínas de quartzo rosa, Roseta de Al Ain em cornalina esculpida, contas de hematite facetada banho de ouro e pino em zirconia rosa corte pêra em latão banho de ouro 18k. Brincos pendentes de luxo montados à mão, queda 4 cm. Feitos em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.',
      'Anting Al Quaa — Kuarsa mawar oleh Bint Saeed: kuarsa mawar asli, Rosette Al Ain karnelian ukiran tangan, manik hematit berfaset berlapis emas, dan stud zirconia merah muda potongan pir pada kuningan berlapis emas 18k. Anting drop mewah dirakit tangan, panjang 4 cm. Dibuat di Abu Dhabi, Uni Emirat Arab. Pengiriman dunia.',
      'Anting Al Quaa — Kuarsa mawar oleh Bint Saeed: kuarsa mawar tulen, Rosette Al Ain karnelian ukiran tangan, manik hematit berfaset bersalut emas, dan stud zirconia merah jambu potongan pir pada loyang bersalut emas 18k. Anting drop mewah dipasang tangan, panjang 4 cm. Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu. Penghantaran seluruh dunia.',
    ),
  },

  'al-quaa-earrings-lapis-lazuli': {
    carouselAlt: altLoc(
      'Al Quaa Earrings - Lapis Lazuli — royal blue Lapis Lazuli with pyrite inclusions, Carnelian Al Ain Rosette and pear-cut clear zirconia stud, luxury drop earrings by Bint Saeed Abu Dhabi',
      'أقراط القوع — لازورد — لازورد أزرق ملكي بتضمينات البيريت، روزيت العين من العقيق ومسمار زركونيا شفافة بقطع كمّثري، أقراط متدلية فاخرة من Bint Saeed أبوظبي',
      'Boucles d’oreilles Al Quaa — Lapis-lazuli — lapis bleu royal à inclusions de pyrite, rosette d’Al Ain en cornaline et clou en zirconia transparente taille poire, pendants de luxe Bint Saeed Abou Dabi',
      'Orecchini Al Quaa — Lapislazzuli — lapis blu reale con inclusioni di pirite, Rosetta di Al Ain in corniola e perno in zirconia trasparente taglio a pera, orecchini pendenti di lusso Bint Saeed Abu Dhabi',
      'Pendientes Al Quaa — Lapislázuli — lapis azul real con inclusiones de pirita, Roseta de Al Ain en cornalina y pendiente en zirconia transparente talla pera, pendientes largos de lujo Bint Saeed Abu Dabi',
      'Серьги Al Quaa — Лазурит — королевско-синий лазурит с вкраплениями пирита, розетка Al Ain из сердолика и штифт из прозрачного циркония грушевидной огранки, люксовые серьги-капли Bint Saeed Абу-Даби',
      'Al Quaa 青金石耳环 — 含黄铁矿包裹体的皇家蓝青金石、红玉髓 Al Ain 玫瑰花饰与梨形透明锆石耳钉，Bint Saeed 阿布扎比奢华垂坠耳环',
      'Al Quaa Ohrringe — Lapislazuli — königsblauer Lapislazuli mit Pyriteinschlüssen, Karneol-Al-Ain-Rosette und birnenförmigem klarem Zirkonia-Stecker, Luxus-Tropfenohrringe von Bint Saeed Abu Dhabi',
      'Al Quaa oorbellen — Lapis lazuli — koningsblauwe lapis lazuli met pyrietinclusies, carneool Al Ain Rosette en peer-cut heldere zirconia stud, luxe druppeloorbellen van Bint Saeed Abu Dhabi',
      'Brincos Al Quaa — Lápis-lazúli — lápis azul-real com inclusões de pirite, Roseta de Al Ain em cornalina e pino em zirconia transparente corte pêra, brincos pendentes de luxo Bint Saeed Abu Dhabi',
      'Anting Al Quaa — Lapis lazuli — lapis biru royal dengan inklusi pirit, Rosette Al Ain karnelian dan stud zirconia bening potongan pir, anting drop mewah Bint Saeed Abu Dhabi',
      'Anting Al Quaa — Lapis lazuli — lapis biru diraja dengan inklusi pirit, Rosette Al Ain karnelian dan stud zirconia jernih potongan pir, anting drop mewah Bint Saeed Abu Dhabi',
    ),
    pdpAlt: altLoc(
      'Al Quaa Earrings - Lapis Lazuli by Bint Saeed: genuine Lapis Lazuli gemstones with natural pyrite inclusions, hand-carved Carnelian Al Ain Rosette, faceted gold-plated Hematite beads and a pear-cut clear zirconia stud in 18k gold-plated brass. Luxury hand-assembled drop earrings, drop 4 cm. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.',
      'أقراط القوع — لازورد من Bint Saeed: أحجار لازورد أصلية بتضمينات البيريت الطبيعية، روزيت العين المحفورة من العقيق، خرز هيمايت مطلي بالذهب مُقطَّع، ومسمار زركونيا شفافة بقطع كمّثري في نحاس مطلي بالذهب عيار 18 قيراطاً. أقراط متدلية فاخرة مُجمَّعة يدوياً، طول التدلي 4 سم. صُنعت في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.',
      'Boucles d’oreilles Al Quaa — Lapis-lazuli par Bint Saeed : véritables pierres de lapis-lazuli à inclusions naturelles de pyrite, rosette d’Al Ain en cornaline sculptée, perles d’hématite facettée plaquée or et clou en zirconia transparente taille poire en laiton plaqué or 18 carats. Pendants de luxe assemblés à la main, chute 4 cm. Fabriquées à Abou Dabi, Émirats arabes unis. Livraison mondiale.',
      'Orecchini Al Quaa — Lapislazzuli di Bint Saeed: vere gemme di lapislazzuli con inclusioni naturali di pirite, Rosetta di Al Ain in corniola intagliata, perle di ematite sfaccettata placcata oro e perno in zirconia trasparente taglio a pera in ottone placcato oro 18k. Orecchini pendenti di lusso assemblati a mano, drop 4 cm. Realizzati ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.',
      'Pendientes Al Quaa — Lapislázuli de Bint Saeed: gemas genuinas de lapislázuli con inclusiones naturales de pirita, Roseta de Al Ain en cornalina tallada, cuentas de hematita facetada baño de oro y pendiente en zirconia transparente talla pera en latón baño de oro 18k. Pendientes largos de lujo ensamblados a mano, caída 4 cm. Hechos en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.',
      'Серьги Al Quaa — Лазурит от Bint Saeed: подлинный лазурит с природными вкраплениями пирита, резная сердоликовая розетка Al Ain, бусины гранёного позолоченного гематита и штифт из прозрачного циркония грушевидной огранки на латуни с покрытием 18k. Роскошные серьги-капли ручной сборки, длина 4 см. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.',
      'Bint Saeed Al Quaa 青金石耳环：含天然黄铁矿包裹体的青金石、手工雕刻红玉髓 Al Ain 玫瑰花饰、镀金切面赤铁矿珠，以及 18k 镀金黄铜梨形透明锆石耳钉。奢华手工组装垂坠耳环，垂长 4 厘米。阿联酋阿布扎比制造。全球配送。',
      'Al Quaa Ohrringe — Lapislazuli von Bint Saeed: echter Lapislazuli mit natürlichen Pyriteinschlüssen, handgeschnitzte Karneol-Al-Ain-Rosette, facettierte vergoldete Hämatitperlen und birnenförmiger klarer Zirkonia-Stecker in 18k goldplattiertem Messing. Luxuriöse handmontierte Tropfenohrringe, Länge 4 cm. Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate. Weltweiter Versand.',
      'Al Quaa oorbellen — Lapis lazuli van Bint Saeed: echte lapis lazuli met natuurlijke pyrietinclusies, handgesneden carneool Al Ain Rosette, gefacetteerde verguld hematiet kralen en peer-cut heldere zirconia stud in 18k verguld messing. Luxe handgemonteerde druppeloorbellen, lengte 4 cm. Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten. Wereldwijde verzending.',
      'Brincos Al Quaa — Lápis-lazúli da Bint Saeed: gemas genuínas de lápis-lazúli com inclusões naturais de pirite, Roseta de Al Ain em cornalina esculpida, contas de hematite facetada banho de ouro e pino em zirconia transparente corte pêra em latão banho de ouro 18k. Brincos pendentes de luxo montados à mão, queda 4 cm. Feitos em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.',
      'Anting Al Quaa — Lapis lazuli oleh Bint Saeed: lapis lazuli asli dengan inklusi pirit alami, Rosette Al Ain karnelian ukiran tangan, manik hematit berfaset berlapis emas, dan stud zirconia bening potongan pir pada kuningan berlapis emas 18k. Anting drop mewah dirakit tangan, panjang 4 cm. Dibuat di Abu Dhabi, Uni Emirat Arab. Pengiriman dunia.',
      'Anting Al Quaa — Lapis lazuli oleh Bint Saeed: lapis lazuli tulen dengan inklusi pirit semula jadi, Rosette Al Ain karnelian ukiran tangan, manik hematit berfaset bersalut emas, dan stud zirconia jernih potongan pir pada loyang bersalut emas 18k. Anting drop mewah dipasang tangan, panjang 4 cm. Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu. Penghantaran seluruh dunia.',
    ),
  },
}

export function getEarringLocalizedAlts(
  id: string,
  locale: AppLocale = 'en',
): EarringLocalizedAlts | undefined {
  const canonicalId = resolveAccessoryId(id)
  if (!isEarringAltId(canonicalId)) return undefined
  const pack = EARRING_IMAGE_ALTS[canonicalId]
  return {
    carouselAlt: pack.carouselAlt[locale] ?? pack.carouselAlt.en,
    pdpAlt: pack.pdpAlt[locale] ?? pack.pdpAlt.en,
  }
}
