import type { AppLocale } from '@/lib/i18n/routing'
import { altLoc } from '@/lib/products/imageAltOverridesI18n'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'

export type NecklaceLocalizedAlts = {
  carouselAlt: string
  pdpAlt: string
}

export const NECKLACE_ALT_IDS = [
  'al-ain-oasis-necklace-malachite',
  'al-ain-oasis-necklace-tiger-eye',
  'al-ain-oasis-necklace-onyx',
  'al-ain-oasis-necklace-rose-quartz',
  'al-ain-oasis-necklace-sunstone',
  'al-ain-oasis-necklace-lapis-lazuli',
] as const

export type NecklaceAltId = (typeof NECKLACE_ALT_IDS)[number]

function isNecklaceAltId(id: string): id is NecklaceAltId {
  return (NECKLACE_ALT_IDS as readonly string[]).includes(id)
}

type AltPack = {
  carouselAlt: Record<AppLocale, string>
  pdpAlt: Record<AppLocale, string>
}

const NECKLACE_IMAGE_ALTS: Record<NecklaceAltId, AltPack> = {
  'al-ain-oasis-necklace-malachite': {
    carouselAlt: altLoc(
      'Al Ain Oasis Necklace - Malachite — natural malachite beads with Carnelian Al Ain Rosette and signature clasp, handcrafted by Bint Saeed Abu Dhabi',
      'قلادة واحة العين — ملاكيت — خرز ملاكيت طبيعي مع روزيت العين من العقيق وإغلاق توقيعي، صناعة يدوية من Bint Saeed أبوظبي',
      'Collier Al Ain Oasis — Malachite — perles de malachite naturelles, rosette d’Al Ain en cornaline et fermoir signature, façonné à la main par Bint Saeed Abou Dabi',
      'Collana Al Ain Oasis — Malachite — perle di malachite naturali, Rosetta di Al Ain in corniola e chiusura signature, artigianale Bint Saeed Abu Dhabi',
      'Collar Al Ain Oasis — Malaquita — cuentas de malaquita natural, Roseta de Al Ain en cornalina y cierre signature, artesanal Bint Saeed Abu Dabi',
      'Ожерелье Al Ain Oasis — Малахит — натуральные бусины малахита, розетка Al Ain из сердолика и фирменный замок, ручная работа Bint Saeed Абу-Даби',
      'Al Ain Oasis 孔雀石项链 — 天然孔雀石珠、红玉髓 Al Ain 玫瑰花饰与标志扣环，Bint Saeed 阿布扎比手工制作',
      'Al Ain Oasis Halskette — Malachit — natürliche Malachitperlen mit Karneol-Al-Ain-Rosette und Signature-Verschluss, handgefertigt von Bint Saeed Abu Dhabi',
      'Al Ain Oasis ketting — Malachiet — natuurlijke malachietkralen met carneool Al Ain Rosette en signature sluiting, handgemaakt door Bint Saeed Abu Dhabi',
      'Colar Al Ain Oasis — Malaquite — contas de malaquite natural, Roseta de Al Ain em cornalina e fecho signature, artesanal Bint Saeed Abu Dhabi',
      'Kalung Al Ain Oasis — Malakit — manik malakit alami dengan Rosette Al Ain karnelian dan kait signature, buatan tangan Bint Saeed Abu Dhabi',
      'Rantai leher Al Ain Oasis — Malakit — manik malakit semula jadi dengan Rosette Al Ain karnelian dan kait signature, buatan tangan Bint Saeed Abu Dhabi',
    ),
    pdpAlt: altLoc(
      'Al Ain Oasis Necklace - Malachite by Bint Saeed: hand-strung natural malachite beads, Carnelian Al Ain Rosette and 18K gold-plated signature clasp — luxury stone bead necklace, handcrafted in Abu Dhabi, United Arab Emirates. Worldwide shipping.',
      'قلادة واحة العين — ملاكيت من Bint Saeed: خرز ملاكيت طبيعي مُرصّع يدوياً، روزيت العين من العقيق وإغلاق توقيعي مطلي ذهب 18 قيراط — قلادة خرز فاخرة، صُنعت يدوياً في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.',
      'Collier Al Ain Oasis — Malachite par Bint Saeed : perles de malachite naturelles enfilées à la main, rosette d’Al Ain en cornaline et fermoir signature plaqué or 18 carats — collier de perles de luxe, façonné à Abou Dabi, Émirats arabes unis. Livraison mondiale.',
      'Collana Al Ain Oasis — Malachite di Bint Saeed: perle di malachite naturali infilate a mano, Rosetta di Al Ain in corniola e chiusura signature placcata oro 18k — collana di perle di lusso, artigianale ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.',
      'Collar Al Ain Oasis — Malaquita de Bint Saeed: cuentas de malaquita natural ensartadas a mano, Roseta de Al Ain en cornalina y cierre signature baño de oro 18k — collar de cuentas de lujo, artesanal en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.',
      'Ожерелье Al Ain Oasis — Малахит от Bint Saeed: натуральные бусины малахита, нанизанные вручную, розетка Al Ain из сердолика и фирменный замок с покрытием 18k — роскошное каменное ожерелье, ручная работа в Абу-Даби, ОАЭ. Доставка по всему миру.',
      'Bint Saeed Al Ain Oasis 孔雀石项链：手工串制天然孔雀石珠、红玉髓 Al Ain 玫瑰花饰与 18K 镀金标志扣环——奢华石珠项链，阿联酋阿布扎比手工制作。全球配送。',
      'Al Ain Oasis Halskette — Malachit von Bint Saeed: handaufgezogene natürliche Malachitperlen, Karneol-Al-Ain-Rosette und 18K goldplattierter Signature-Verschluss — luxuriöse Steinperlenkette, handgefertigt in Abu Dhabi, Vereinigte Arabische Emirate. Weltweiter Versand.',
      'Al Ain Oasis ketting — Malachiet van Bint Saeed: handgeregen natuurlijke malachietkralen, carneool Al Ain Rosette en 18K verguld signature sluiting — luxe steenkralenketting, handgemaakt in Abu Dhabi, Verenigde Arabische Emiraten. Wereldwijde verzending.',
      'Colar Al Ain Oasis — Malaquite da Bint Saeed: contas de malaquite natural enfiadas à mão, Roseta de Al Ain em cornalina e fecho signature banho de ouro 18k — colar de contas de luxo, artesanal em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.',
      'Kalung Al Ain Oasis — Malakit oleh Bint Saeed: manik malakit alami dirangkai tangan, Rosette Al Ain karnelian dan kait signature berlapis emas 18K — kalung manik batu mewah, buatan tangan di Abu Dhabi, Uni Emirat Arab. Pengiriman dunia.',
      'Rantai leher Al Ain Oasis — Malakit oleh Bint Saeed: manik malakit semula jadi dirangkai tangan, Rosette Al Ain karnelian dan kait signature bersalut emas 18K — rantai leher manik batu mewah, buatan tangan di Abu Dhabi, Emiriah Arab Bersatu. Penghantaran seluruh dunia.',
    ),
  },

  'al-ain-oasis-necklace-tiger-eye': {
    carouselAlt: altLoc(
      'Al Ain Oasis Necklace - Tiger Eye — warm chatoyant tiger eye beads with Carnelian Al Ain Rosette and signature clasp, handcrafted by Bint Saeed Abu Dhabi',
      'قلادة واحة العين — عين النمر — خرز عين نمر دافئ بلمعان شاتويان مع روزيت العين من العقيق وإغلاق توقيعي، صناعة يدوية من Bint Saeed أبوظبي',
      'Collier Al Ain Oasis — Œil de tigre — perles d’œil de tigre chatoyantes, rosette d’Al Ain en cornaline et fermoir signature, façonné à la main par Bint Saeed Abou Dabi',
      'Collana Al Ain Oasis — Occhio di tigre — perle di occhio di tigre cangianti, Rosetta di Al Ain in corniola e chiusura signature, artigianale Bint Saeed Abu Dhabi',
      'Collar Al Ain Oasis — Ojo de tigre — cuentas de ojo de tigre chatoyantes, Roseta de Al Ain en cornalina y cierre signature, artesanal Bint Saeed Abu Dabi',
      'Ожерелье Al Ain Oasis — Тигровый глаз — тёплые переливающиеся бусины тигрового глаза, розетка Al Ain из сердолика и фирменный замок, ручная работа Bint Saeed Абу-Даби',
      'Al Ain Oasis 虎眼石项链 — 温暖猫眼虎眼石珠、红玉髓 Al Ain 玫瑰花饰与标志扣环，Bint Saeed 阿布扎比手工制作',
      'Al Ain Oasis Halskette — Tigerauge — warmes chatoyantes Tigerauge mit Karneol-Al-Ain-Rosette und Signature-Verschluss, handgefertigt von Bint Saeed Abu Dhabi',
      'Al Ain Oasis ketting — Tijgeroog — warme chatoyante tijgeroogkralen met carneool Al Ain Rosette en signature sluiting, handgemaakt door Bint Saeed Abu Dhabi',
      'Colar Al Ain Oasis — Olho de tigre — contas de olho de tigre chatoyantes, Roseta de Al Ain em cornalina e fecho signature, artesanal Bint Saeed Abu Dhabi',
      'Kalung Al Ain Oasis — Mata harimau — manik mata harimau chatoyant hangat dengan Rosette Al Ain karnelian dan kait signature, buatan tangan Bint Saeed Abu Dhabi',
      'Rantai leher Al Ain Oasis — Mata harimau — manik mata harimau chatoyant hangat dengan Rosette Al Ain karnelian dan kait signature, buatan tangan Bint Saeed Abu Dhabi',
    ),
    pdpAlt: altLoc(
      'Al Ain Oasis Necklace - Tiger Eye by Bint Saeed: natural tiger eye stone beads with subtle chatoyancy, Carnelian Al Ain Rosette and 18K gold-plated signature clasp — handcrafted bead necklace in Abu Dhabi, United Arab Emirates. Worldwide shipping.',
      'قلادة واحة العين — عين النمر من Bint Saeed: خرز عين نمر طبيعي بلمعان شاتويان لطيف، روزيت العين من العقيق وإغلاق توقيعي مطلي ذهب 18 قيراط — قلادة خرز يدوية في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.',
      'Collier Al Ain Oasis — Œil de tigre par Bint Saeed : perles d’œil de tigre naturelles au chatoyant subtil, rosette d’Al Ain en cornaline et fermoir signature plaqué or 18 carats — collier de perles façonné à Abou Dabi, Émirats arabes unis. Livraison mondiale.',
      'Collana Al Ain Oasis — Occhio di tigre di Bint Saeed: perle di occhio di tigre naturali dal chatoyancy sottile, Rosetta di Al Ain in corniola e chiusura signature placcata oro 18k — collana di perle artigianale ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.',
      'Collar Al Ain Oasis — Ojo de tigre de Bint Saeed: cuentas de ojo de tigre natural con chatoyancy sutil, Roseta de Al Ain en cornalina y cierre signature baño de oro 18k — collar de cuentas artesanal en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.',
      'Ожерелье Al Ain Oasis — Тигровый глаз от Bint Saeed: натуральные бусины тигрового глаза с тонкой переливчатостью, розетка Al Ain из сердолика и фирменный замок с покрытием 18k — бусинное ожерелье ручной работы в Абу-Даби, ОАЭ. Доставка по всему миру.',
      'Bint Saeed Al Ain Oasis 虎眼石项链：带细微猫眼光的天然虎眼石珠、红玉髓 Al Ain 玫瑰花饰与 18K 镀金标志扣环——阿联酋阿布扎比手工串珠项链。全球配送。',
      'Al Ain Oasis Halskette — Tigerauge von Bint Saeed: natürliche Tigerauge-Perlen mit feiner Chatoyance, Karneol-Al-Ain-Rosette und 18K goldplattierter Signature-Verschluss — handgefertigte Perlenkette in Abu Dhabi, Vereinigte Arabische Emirate. Weltweiter Versand.',
      'Al Ain Oasis ketting — Tijgeroog van Bint Saeed: natuurlijke tijgeroogkralen met subtiele chatoyancy, carneool Al Ain Rosette en 18K verguld signature sluiting — handgemaakte kralenketting in Abu Dhabi, Verenigde Arabische Emiraten. Wereldwijde verzending.',
      'Colar Al Ain Oasis — Olho de tigre da Bint Saeed: contas de olho de tigre natural com chatoyancy subtil, Roseta de Al Ain em cornalina e fecho signature banho de ouro 18k — colar de contas artesanal em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.',
      'Kalung Al Ain Oasis — Mata harimau oleh Bint Saeed: manik batu mata harimau alami dengan chatoyancy halus, Rosette Al Ain karnelian dan kait signature berlapis emas 18K — kalung manik buatan tangan di Abu Dhabi, Uni Emirat Arab. Pengiriman dunia.',
      'Rantai leher Al Ain Oasis — Mata harimau oleh Bint Saeed: manik batu mata harimau semula jadi dengan chatoyancy halus, Rosette Al Ain karnelian dan kait signature bersalut emas 18K — rantai leher manik buatan tangan di Abu Dhabi, Emiriah Arab Bersatu. Penghantaran seluruh dunia.',
    ),
  },

  'al-ain-oasis-necklace-onyx': {
    carouselAlt: altLoc(
      'Al Ain Oasis Necklace - Onyx — polished black onyx beads with Carnelian Al Ain Rosette and signature clasp, handcrafted by Bint Saeed Abu Dhabi',
      'قلادة واحة العين — أونكس — خرز أونكس أسود مصقول مع روزيت العين من العقيق وإغلاق توقيعي، صناعة يدوية من Bint Saeed أبوظبي',
      'Collier Al Ain Oasis — Onyx — perles d’onyx noir poli, rosette d’Al Ain en cornaline et fermoir signature, façonné à la main par Bint Saeed Abou Dabi',
      'Collana Al Ain Oasis — Onice — perle di onice nero lucidato, Rosetta di Al Ain in corniola e chiusura signature, artigianale Bint Saeed Abu Dhabi',
      'Collar Al Ain Oasis — Ónice — cuentas de ónice negro pulido, Roseta de Al Ain en cornalina y cierre signature, artesanal Bint Saeed Abu Dabi',
      'Ожерелье Al Ain Oasis — Оникс — полированные бусины чёрного оникса, розетка Al Ain из сердолика и фирменный замок, ручная работа Bint Saeed Абу-Даби',
      'Al Ain Oasis 玛瑙项链 — 抛光黑玛瑙珠、红玉髓 Al Ain 玫瑰花饰与标志扣环，Bint Saeed 阿布扎比手工制作',
      'Al Ain Oasis Halskette — Onyx — polierte schwarze Onyxperlen mit Karneol-Al-Ain-Rosette und Signature-Verschluss, handgefertigt von Bint Saeed Abu Dhabi',
      'Al Ain Oasis ketting — Onyx — gepolijste zwarte onyxkralen met carneool Al Ain Rosette en signature sluiting, handgemaakt door Bint Saeed Abu Dhabi',
      'Colar Al Ain Oasis — Ónix — contas de ónix negro polido, Roseta de Al Ain em cornalina e fecho signature, artesanal Bint Saeed Abu Dhabi',
      'Kalung Al Ain Oasis — Oniks — manik oniks hitam dipoles dengan Rosette Al Ain karnelian dan kait signature, buatan tangan Bint Saeed Abu Dhabi',
      'Rantai leher Al Ain Oasis — Oniks — manik oniks hitam digilap dengan Rosette Al Ain karnelian dan kait signature, buatan tangan Bint Saeed Abu Dhabi',
    ),
    pdpAlt: altLoc(
      'Al Ain Oasis Necklace - Onyx by Bint Saeed: hand-strung polished black onyx beads, Carnelian Al Ain Rosette and refined 18K gold-plated signature clasp — luxury onyx bead necklace, handcrafted in Abu Dhabi, United Arab Emirates. Worldwide shipping.',
      'قلادة واحة العين — أونكس من Bint Saeed: خرز أونكس أسود مصقول مُرصّع يدوياً، روزيت العين من العقيق وإغلاق توقيعي راقٍ مطلي ذهب 18 قيراط — قلادة أونكس فاخرة، صُنعت يدوياً في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.',
      'Collier Al Ain Oasis — Onyx par Bint Saeed : perles d’onyx noir poli enfilées à la main, rosette d’Al Ain en cornaline et fermoir signature raffiné plaqué or 18 carats — collier d’onyx de luxe, façonné à Abou Dabi, Émirats arabes unis. Livraison mondiale.',
      'Collana Al Ain Oasis — Onice di Bint Saeed: perle di onice nero lucidato infilate a mano, Rosetta di Al Ain in corniola e chiusura signature raffinata placcata oro 18k — collana di onice di lusso, artigianale ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.',
      'Collar Al Ain Oasis — Ónice de Bint Saeed: cuentas de ónice negro pulido ensartadas a mano, Roseta de Al Ain en cornalina y cierre signature refinado baño de oro 18k — collar de ónice de lujo, artesanal en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.',
      'Ожерелье Al Ain Oasis — Оникс от Bint Saeed: полированные бусины чёрного оникса, нанизанные вручную, розетка Al Ain из сердолика и изысканный фирменный замок с покрытием 18k — роскошное ониксовое ожерелье, ручная работа в Абу-Даби, ОАЭ. Доставка по всему миру.',
      'Bint Saeed Al Ain Oasis 玛瑙项链：手工串制抛光黑玛瑙珠、红玉髓 Al Ain 玫瑰花饰与精致 18K 镀金标志扣环——奢华玛瑙珠项链，阿联酋阿布扎比手工制作。全球配送。',
      'Al Ain Oasis Halskette — Onyx von Bint Saeed: handaufgezogene polierte schwarze Onyxperlen, Karneol-Al-Ain-Rosette und raffinierter 18K goldplattierter Signature-Verschluss — luxuriöse Onyxkette, handgefertigt in Abu Dhabi, Vereinigte Arabische Emirate. Weltweiter Versand.',
      'Al Ain Oasis ketting — Onyx van Bint Saeed: handgeregen gepolijste zwarte onyxkralen, carneool Al Ain Rosette en verfijnde 18K verguld signature sluiting — luxe onyxkralenketting, handgemaakt in Abu Dhabi, Verenigde Arabische Emiraten. Wereldwijde verzending.',
      'Colar Al Ain Oasis — Ónix da Bint Saeed: contas de ónix negro polido enfiadas à mão, Roseta de Al Ain em cornalina e fecho signature refinado banho de ouro 18k — colar de ónix de luxo, artesanal em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.',
      'Kalung Al Ain Oasis — Oniks oleh Bint Saeed: manik oniks hitam dipoles dirangkai tangan, Rosette Al Ain karnelian dan kait signature berlapis emas 18K yang halus — kalung manik oniks mewah, buatan tangan di Abu Dhabi, Uni Emirat Arab. Pengiriman dunia.',
      'Rantai leher Al Ain Oasis — Oniks oleh Bint Saeed: manik oniks hitam digilap dirangkai tangan, Rosette Al Ain karnelian dan kait signature bersalut emas 18K yang halus — rantai leher manik oniks mewah, buatan tangan di Abu Dhabi, Emiriah Arab Bersatu. Penghantaran seluruh dunia.',
    ),
  },

  'al-ain-oasis-necklace-rose-quartz': {
    carouselAlt: altLoc(
      'Al Ain Oasis Necklace - Rose Quartz — soft pink hand-knotted rose quartz beads with Carnelian Al Ain Rosette and signature clasp, handcrafted by Bint Saeed Abu Dhabi',
      'قلادة واحة العين — كوارتز وردي — خرز كوارتز وردي وردي ناعم مربوط يدوياً مع روزيت العين من العقيق وإغلاق توقيعي، صناعة يدوية من Bint Saeed أبوظبي',
      'Collier Al Ain Oasis — Quartz rose — perles de quartz rose blush nouées à la main, rosette d’Al Ain en cornaline et fermoir signature, façonné à la main par Bint Saeed Abou Dabi',
      'Collana Al Ain Oasis — Quarzo rosa — perle di quarzo rosa soft annodate a mano, Rosetta di Al Ain in corniola e chiusura signature, artigianale Bint Saeed Abu Dhabi',
      'Collar Al Ain Oasis — Cuarzo rosa — cuentas de cuarzo rosa suave anudadas a mano, Roseta de Al Ain en cornalina y cierre signature, artesanal Bint Saeed Abu Dabi',
      'Ожерелье Al Ain Oasis — Розовый кварц — мягкие розовые бусины розового кварца, нанизанные вручную, розетка Al Ain из сердолика и фирменный замок, ручная работа Bint Saeed Абу-Даби',
      'Al Ain Oasis 粉晶项链 — 柔粉手工结系粉晶珠、红玉髓 Al Ain 玫瑰花饰与标志扣环，Bint Saeed 阿布扎比手工制作',
      'Al Ain Oasis Halskette — Rosenquarz — weiche rosa handgeknotete Rosenquarzperlen mit Karneol-Al-Ain-Rosette und Signature-Verschluss, handgefertigt von Bint Saeed Abu Dhabi',
      'Al Ain Oasis ketting — Rozenkwarts — zachte roze handgeknoopte rozenkwartskralen met carneool Al Ain Rosette en signature sluiting, handgemaakt door Bint Saeed Abu Dhabi',
      'Colar Al Ain Oasis — Quartzo rosa — contas de quartzo rosa suave atadas à mão, Roseta de Al Ain em cornalina e fecho signature, artesanal Bint Saeed Abu Dhabi',
      'Kalung Al Ain Oasis — Kuarsa mawar — manik kuarsa mawar merah muda lembut diikat tangan dengan Rosette Al Ain karnelian dan kait signature, buatan tangan Bint Saeed Abu Dhabi',
      'Rantai leher Al Ain Oasis — Kuarsa mawar — manik kuarsa mawar merah jambu lembut diikat tangan dengan Rosette Al Ain karnelian dan kait signature, buatan tangan Bint Saeed Abu Dhabi',
    ),
    pdpAlt: altLoc(
      'Al Ain Oasis Necklace - Rose Quartz by Bint Saeed: hand-knotted natural rose quartz beads, luminous blush line, Carnelian Al Ain Rosette and 18K gold-plated signature clasp — romantic stone bead necklace, handcrafted in Abu Dhabi, United Arab Emirates. Worldwide shipping.',
      'قلادة واحة العين — كوارتز وردي من Bint Saeed: خرز كوارتز وردي طبيعي مربوط يدوياً، خط وردي مضيء، روزيت العين من العقيق وإغلاق توقيعي مطلي ذهب 18 قيراط — قلادة خرز رومانسية، صُنعت يدوياً في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.',
      'Collier Al Ain Oasis — Quartz rose par Bint Saeed : perles de quartz rose naturelles nouées à la main, ligne blush lumineuse, rosette d’Al Ain en cornaline et fermoir signature plaqué or 18 carats — collier romantique, façonné à Abou Dabi, Émirats arabes unis. Livraison mondiale.',
      'Collana Al Ain Oasis — Quarzo rosa di Bint Saeed: perle di quarzo rosa naturali annodate a mano, linea blush luminosa, Rosetta di Al Ain in corniola e chiusura signature placcata oro 18k — collana romantica, artigianale ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.',
      'Collar Al Ain Oasis — Cuarzo rosa de Bint Saeed: cuentas de cuarzo rosa natural anudadas a mano, línea blush luminosa, Roseta de Al Ain en cornalina y cierre signature baño de oro 18k — collar romántico, artesanal en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.',
      'Ожерелье Al Ain Oasis — Розовый кварц от Bint Saeed: натуральные бусины розового кварца, нанизанные вручную, светящаяся линия blush, розетка Al Ain из сердолика и фирменный замок с покрытием 18k — романтическое каменное ожерелье, ручная работа в Абу-Даби, ОАЭ. Доставка по всему миру.',
      'Bint Saeed Al Ain Oasis 粉晶项链：手工结系天然粉晶珠、柔亮粉线、红玉髓 Al Ain 玫瑰花饰与 18K 镀金标志扣环——浪漫石珠项链，阿联酋阿布扎比手工制作。全球配送。',
      'Al Ain Oasis Halskette — Rosenquarz von Bint Saeed: handgeknotete natürliche Rosenquarzperlen, leuchtende Blush-Linie, Karneol-Al-Ain-Rosette und 18K goldplattierter Signature-Verschluss — romantische Steinperlenkette, handgefertigt in Abu Dhabi, Vereinigte Arabische Emirate. Weltweiter Versand.',
      'Al Ain Oasis ketting — Rozenkwarts van Bint Saeed: handgeknoopte natuurlijke rozenkwartskralen, lichtende blush-lijn, carneool Al Ain Rosette en 18K verguld signature sluiting — romantische steenkralenketting, handgemaakt in Abu Dhabi, Verenigde Arabische Emiraten. Wereldwijde verzending.',
      'Colar Al Ain Oasis — Quartzo rosa da Bint Saeed: contas de quartzo rosa natural atadas à mão, linha blush luminosa, Roseta de Al Ain em cornalina e fecho signature banho de ouro 18k — colar romântico, artesanal em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.',
      'Kalung Al Ain Oasis — Kuarsa mawar oleh Bint Saeed: manik kuarsa mawar alami diikat tangan, garis blush bercahaya, Rosette Al Ain karnelian dan kait signature berlapis emas 18K — kalung manik batu romantis, buatan tangan di Abu Dhabi, Uni Emirat Arab. Pengiriman dunia.',
      'Rantai leher Al Ain Oasis — Kuarsa mawar oleh Bint Saeed: manik kuarsa mawar semula jadi diikat tangan, garis blush bercahaya, Rosette Al Ain karnelian dan kait signature bersalut emas 18K — rantai leher manik batu romantis, buatan tangan di Abu Dhabi, Emiriah Arab Bersatu. Penghantaran seluruh dunia.',
    ),
  },

  'al-ain-oasis-necklace-sunstone': {
    carouselAlt: altLoc(
      'Al Ain Oasis Necklace - Sunstone — warm peach-orange sunstone beads with Carnelian Al Ain Rosette and signature clasp, handcrafted by Bint Saeed Abu Dhabi',
      'قلادة واحة العين — حجر الشمس — خرز حجر شمس خوخي-برتقالي دافئ مع روزيت العين من العقيق وإغلاق توقيعي، صناعة يدوية من Bint Saeed أبوظبي',
      'Collier Al Ain Oasis — Pierre de soleil — perles de pierre de soleil pêche-orangé, rosette d’Al Ain en cornaline et fermoir signature, façonné à la main par Bint Saeed Abou Dabi',
      'Collana Al Ain Oasis — Pietra di sole — perle di pietra di sole pesca-arancio, Rosetta di Al Ain in corniola e chiusura signature, artigianale Bint Saeed Abu Dhabi',
      'Collar Al Ain Oasis — Piedra de sol — cuentas de piedra de sol melocotón-naranja, Roseta de Al Ain en cornalina y cierre signature, artesanal Bint Saeed Abu Dabi',
      'Ожерелье Al Ain Oasis — Солнечный камень — тёплые персиково-оранжевые бусины солнечного камня, розетка Al Ain из сердолика и фирменный замок, ручная работа Bint Saeed Абу-Даби',
      'Al Ain Oasis 日光石项链 — 温暖桃橙日光石珠、红玉髓 Al Ain 玫瑰花饰与标志扣环，Bint Saeed 阿布扎比手工制作',
      'Al Ain Oasis Halskette — Sonnenstein — warme pfirsich-orangefarbene Sonnensteinperlen mit Karneol-Al-Ain-Rosette und Signature-Verschluss, handgefertigt von Bint Saeed Abu Dhabi',
      'Al Ain Oasis ketting — Zonsteen — warme perzik-oranje zonsteenkralen met carneool Al Ain Rosette en signature sluiting, handgemaakt door Bint Saeed Abu Dhabi',
      'Colar Al Ain Oasis — Pedra do sol — contas de pedra do sol pêssego-laranja, Roseta de Al Ain em cornalina e fecho signature, artesanal Bint Saeed Abu Dhabi',
      'Kalung Al Ain Oasis — Batu matahari — manik batu matahari peach-oranye hangat dengan Rosette Al Ain karnelian dan kait signature, buatan tangan Bint Saeed Abu Dhabi',
      'Rantai leher Al Ain Oasis — Batu matahari — manik batu matahari peach-oren hangat dengan Rosette Al Ain karnelian dan kait signature, buatan tangan Bint Saeed Abu Dhabi',
    ),
    pdpAlt: altLoc(
      'Al Ain Oasis Necklace - Sunstone by Bint Saeed: luminous natural sunstone beads, Carnelian Al Ain Rosette and 18K gold-plated signature clasp — handcrafted stone bead necklace in Abu Dhabi, United Arab Emirates. Worldwide shipping.',
      'قلادة واحة العين — حجر الشمس من Bint Saeed: خرز حجر شمس طبيعي مضيء، روزيت العين من العقيق وإغلاق توقيعي مطلي ذهب 18 قيراط — قلادة خرز يدوية في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.',
      'Collier Al Ain Oasis — Pierre de soleil par Bint Saeed : perles de pierre de soleil naturelles lumineuses, rosette d’Al Ain en cornaline et fermoir signature plaqué or 18 carats — collier de perles façonné à Abou Dabi, Émirats arabes unis. Livraison mondiale.',
      'Collana Al Ain Oasis — Pietra di sole di Bint Saeed: perle di pietra di sole naturali luminose, Rosetta di Al Ain in corniola e chiusura signature placcata oro 18k — collana di perle artigianale ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.',
      'Collar Al Ain Oasis — Piedra de sol de Bint Saeed: cuentas de piedra de sol natural luminosas, Roseta de Al Ain en cornalina y cierre signature baño de oro 18k — collar de cuentas artesanal en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.',
      'Ожерелье Al Ain Oasis — Солнечный камень от Bint Saeed: светящиеся натуральные бусины солнечного камня, розетка Al Ain из сердолика и фирменный замок с покрытием 18k — каменное ожерелье ручной работы в Абу-Даби, ОАЭ. Доставка по всему миру.',
      'Bint Saeed Al Ain Oasis 日光石项链：明亮天然日光石珠、红玉髓 Al Ain 玫瑰花饰与 18K 镀金标志扣环——阿联酋阿布扎比手工石珠项链。全球配送。',
      'Al Ain Oasis Halskette — Sonnenstein von Bint Saeed: leuchtende natürliche Sonnensteinperlen, Karneol-Al-Ain-Rosette und 18K goldplattierter Signature-Verschluss — handgefertigte Steinperlenkette in Abu Dhabi, Vereinigte Arabische Emirate. Weltweiter Versand.',
      'Al Ain Oasis ketting — Zonsteen van Bint Saeed: lichtende natuurlijke zonsteenkralen, carneool Al Ain Rosette en 18K verguld signature sluiting — handgemaakte steenkralenketting in Abu Dhabi, Verenigde Arabische Emiraten. Wereldwijde verzending.',
      'Colar Al Ain Oasis — Pedra do sol da Bint Saeed: contas de pedra do sol natural luminosas, Roseta de Al Ain em cornalina e fecho signature banho de ouro 18k — colar de contas artesanal em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.',
      'Kalung Al Ain Oasis — Batu matahari oleh Bint Saeed: manik batu matahari alami bercahaya, Rosette Al Ain karnelian dan kait signature berlapis emas 18K — kalung manik batu buatan tangan di Abu Dhabi, Uni Emirat Arab. Pengiriman dunia.',
      'Rantai leher Al Ain Oasis — Batu matahari oleh Bint Saeed: manik batu matahari semula jadi bercahaya, Rosette Al Ain karnelian dan kait signature bersalut emas 18K — rantai leher manik batu buatan tangan di Abu Dhabi, Emiriah Arab Bersatu. Penghantaran seluruh dunia.',
    ),
  },

  'al-ain-oasis-necklace-lapis-lazuli': {
    carouselAlt: altLoc(
      'Al Ain Oasis Necklace - Lapis Lazuli — deep royal blue lapis beads with Carnelian Al Ain Rosette and signature clasp, handcrafted by Bint Saeed Abu Dhabi',
      'قلادة واحة العين — لازورد — خرز لازورد أزرق ملكي عميق مع روزيت العين من العقيق وإغلاق توقيعي، صناعة يدوية من Bint Saeed أبوظبي',
      'Collier Al Ain Oasis — Lapis-lazuli — perles de lapis bleu royal profond, rosette d’Al Ain en cornaline et fermoir signature, façonné à la main par Bint Saeed Abou Dabi',
      'Collana Al Ain Oasis — Lapislazzuli — perle di lapis blu reale intenso, Rosetta di Al Ain in corniola e chiusura signature, artigianale Bint Saeed Abu Dhabi',
      'Collar Al Ain Oasis — Lapislázuli — cuentas de lapis azul real profundo, Roseta de Al Ain en cornalina y cierre signature, artesanal Bint Saeed Abu Dabi',
      'Ожерелье Al Ain Oasis — Лазурит — глубокие королевско-синие бусины лазурита, розетка Al Ain из сердолика и фирменный замок, ручная работа Bint Saeed Абу-Даби',
      'Al Ain Oasis 青金石项链 — 深皇家蓝青金石珠、红玉髓 Al Ain 玫瑰花饰与标志扣环，Bint Saeed 阿布扎比手工制作',
      'Al Ain Oasis Halskette — Lapislazuli — tief königsblaue Lapisperlen mit Karneol-Al-Ain-Rosette und Signature-Verschluss, handgefertigt von Bint Saeed Abu Dhabi',
      'Al Ain Oasis ketting — Lapis lazuli — diep koningsblauwe lapiskralen met carneool Al Ain Rosette en signature sluiting, handgemaakt door Bint Saeed Abu Dhabi',
      'Colar Al Ain Oasis — Lápis-lazúli — contas de lápis azul-real profundo, Roseta de Al Ain em cornalina e fecho signature, artesanal Bint Saeed Abu Dhabi',
      'Kalung Al Ain Oasis — Lapis lazuli — manik lapis biru royal dalam dengan Rosette Al Ain karnelian dan kait signature, buatan tangan Bint Saeed Abu Dhabi',
      'Rantai leher Al Ain Oasis — Lapis lazuli — manik lapis biru diraja dalam dengan Rosette Al Ain karnelian dan kait signature, buatan tangan Bint Saeed Abu Dhabi',
    ),
    pdpAlt: altLoc(
      'Al Ain Oasis Necklace - Lapis Lazuli by Bint Saeed: rich natural lapis lazuli beads, Carnelian Al Ain Rosette and 18K gold-plated signature clasp — luxury blue stone necklace, handcrafted in Abu Dhabi, United Arab Emirates. Worldwide shipping.',
      'قلادة واحة العين — لازورد من Bint Saeed: خرز لازورد طبيعي غني، روزيت العين من العقيق وإغلاق توقيعي مطلي ذهب 18 قيراط — قلادة حجر أزرق فاخرة، صُنعت يدوياً في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.',
      'Collier Al Ain Oasis — Lapis-lazuli par Bint Saeed : perles de lapis-lazuli naturelles riches, rosette d’Al Ain en cornaline et fermoir signature plaqué or 18 carats — collier pierre bleue de luxe, façonné à Abou Dabi, Émirats arabes unis. Livraison mondiale.',
      'Collana Al Ain Oasis — Lapislazzuli di Bint Saeed: perle di lapislazzuli naturali ricche, Rosetta di Al Ain in corniola e chiusura signature placcata oro 18k — collana pietra blu di lusso, artigianale ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.',
      'Collar Al Ain Oasis — Lapislázuli de Bint Saeed: cuentas de lapislázuli natural ricas, Roseta de Al Ain en cornalina y cierre signature baño de oro 18k — collar piedra azul de lujo, artesanal en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.',
      'Ожерелье Al Ain Oasis — Лазурит от Bint Saeed: насыщенные натуральные бусины лазурита, розетка Al Ain из сердолика и фирменный замок с покрытием 18k — роскошное синее каменное ожерелье, ручная работа в Абу-Даби, ОАЭ. Доставка по всему миру.',
      'Bint Saeed Al Ain Oasis 青金石项链：浓郁天然青金石珠、红玉髓 Al Ain 玫瑰花饰与 18K 镀金标志扣环——奢华蓝色石项链，阿联酋阿布扎比手工制作。全球配送。',
      'Al Ain Oasis Halskette — Lapislazuli von Bint Saeed: reiche natürliche Lapislazuliperlen, Karneol-Al-Ain-Rosette und 18K goldplattierter Signature-Verschluss — luxuriöse blaue Steinkette, handgefertigt in Abu Dhabi, Vereinigte Arabische Emirate. Weltweiter Versand.',
      'Al Ain Oasis ketting — Lapis lazuli van Bint Saeed: rijke natuurlijke lapis lazuli kralen, carneool Al Ain Rosette en 18K verguld signature sluiting — luxe blauwe steenketting, handgemaakt in Abu Dhabi, Verenigde Arabische Emiraten. Wereldwijde verzending.',
      'Colar Al Ain Oasis — Lápis-lazúli da Bint Saeed: contas de lápis-lazúli natural ricas, Roseta de Al Ain em cornalina e fecho signature banho de ouro 18k — colar pedra azul de luxo, artesanal em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.',
      'Kalung Al Ain Oasis — Lapis lazuli oleh Bint Saeed: manik lapis lazuli alami kaya, Rosette Al Ain karnelian dan kait signature berlapis emas 18K — kalung batu biru mewah, buatan tangan di Abu Dhabi, Uni Emirat Arab. Pengiriman dunia.',
      'Rantai leher Al Ain Oasis — Lapis lazuli oleh Bint Saeed: manik lapis lazuli semula jadi kaya, Rosette Al Ain karnelian dan kait signature bersalut emas 18K — rantai leher batu biru mewah, buatan tangan di Abu Dhabi, Emiriah Arab Bersatu. Penghantaran seluruh dunia.',
    ),
  },
}

export function getNecklaceLocalizedAlts(
  id: string,
  locale: AppLocale = 'en',
): NecklaceLocalizedAlts | undefined {
  const canonicalId = resolveAccessoryId(id)
  if (!isNecklaceAltId(canonicalId)) return undefined
  const pack = NECKLACE_IMAGE_ALTS[canonicalId]
  return {
    carouselAlt: pack.carouselAlt[locale] ?? pack.carouselAlt.en,
    pdpAlt: pack.pdpAlt[locale] ?? pack.pdpAlt.en,
  }
}
