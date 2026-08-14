import type { AppLocale } from '@/lib/i18n/routing'
import { altLoc } from '@/lib/products/imageAltOverridesI18n'

type AltEntry = { filename: string; alts: Record<AppLocale, string> }

type ColorSlug = 'black' | 'navy-blue'

const COLOR_LABEL: Record<ColorSlug, Record<AppLocale, string>> = {
  black: altLoc(
    'Deep Black',
    'أسود عميق',
    'Noir profond',
    'Nero profondo',
    'Negro profundo',
    'глубокий чёрный',
    '深黑色',
    'Tiefschwarz',
    'Diepzwart',
    'Preto profundo',
    'Hitam pekat',
    'Hitam pekat',
  ),
  'navy-blue': altLoc(
    'Navy Blue',
    'كحلي',
    'Bleu marine',
    'Blu navy',
    'Azul marino',
    'тёмно-синий',
    '海军蓝',
    'Marineblau',
    'Marineblauw',
    'Azul-marinho',
    'Biru navy',
    'Biru laut',
  ),
}

function frontAlts(color: ColorSlug): Record<AppLocale, string> {
  const c = COLOR_LABEL[color]
  return altLoc(
    `Bint Saeed Hyde Park Set in ${c.en}, front view. Luxury designer travel set featuring an oversized premium crepe shirt and flowing wide-leg palazzo trousers with signature gold-tone Knotted Line buttons, functional chest pockets, and hidden side seam pockets. Buy understated elegance travel outfit UAE — modest khaleeji fashion and contemporary Emirati ready-to-wear from Abu Dhabi to London, Portofino, Rabat, Singapore, Miami, Los Angeles, Brunei, and worldwide. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.`,
    `طقم Bint Saeed Hyde Park باللون ${c.ar}، منظر أمامي. طقم سفر مصمّم فاخر يتضمن قميص كريب فاخر واسع وبنطال بالازو انسيابي بساق واسعة مع أزرار Knotted Line الذهبية المميزة، وجيوب صدرية وظيفية، وجيوب جانبية مخفية. شراء إطلالة سفر أنيقة رصينة الإمارات — أزياء خليجية محتشمة وجاهزة للارتداء إماراتية معاصرة من أبوظبي إلى لندن وبورتوفينو والرباط وسنغافورة وميامي ولوس أنجلوس وبروناي والعالم. صُنع في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.`,
    `Set Bint Saeed Hyde Park en ${c.fr}, vue de face. Set voyage de créateur de luxe avec chemise oversize en crêpe premium et pantalon palazzo fluide à jambe large, boutons signature dorés Knotted Line, poches poitrine fonctionnelles et poches latérales dissimulées. Acheter tenue voyage élégance discrète EAU — mode modeste khaleeji et prêt-à-porter émirati contemporain d’Abou Dabi vers Londres, Portofino, Rabat, Singapour, Miami, Los Angeles, Brunei et le monde. Fabriqué à Abou Dabi, Émirats arabes unis. Livraison mondiale.`,
    `Bint Saeed Hyde Park Set in ${c.it}, vista frontale. Set viaggio designer di lusso con camicia oversize in crepe premium e pantaloni palazzo fluidi a gamba larga, bottoni dorati signature Knotted Line, tasche petto funzionali e tasche laterali nascoste. Comprare outfit viaggio eleganza sobria EAU — modest fashion khaleeji e prêt-à-porter emiratino contemporaneo da Abu Dhabi a Londra, Portofino, Rabat, Singapore, Miami, Los Angeles, Brunei e mondo. Realizzato ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.`,
    `Set Bint Saeed Hyde Park en ${c.es}, vista frontal. Set de viaje de diseñador de lujo con camisa oversize en crepe premium y pantalones palazzo fluidos de pierna ancha, botones dorados signature Knotted Line, bolsillos de pecho funcionales y bolsillos laterales ocultos. Comprar outfit viaje elegancia discreta EAU — moda modesta khaleeji y prêt-à-porter emiratí contemporáneo de Abu Dabi a Londres, Portofino, Rabat, Singapur, Miami, Los Ángeles, Brunéi y el mundo. Hecho en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.`,
    `Комплект Bint Saeed Hyde Park цвета ${c.ru}, вид спереди. Люксовый дизайнерский travel set: оверсайз рубашка из премиального крепа и струящиеся брюки palazzo с широкой штаниной, фирменные золотистые пуговицы Knotted Line, функциональные нагрудные и скрытые боковые карманы. Купить сдержанный элегантный travel outfit ОАЭ — скромная khaleeji мода и современный эмиратский ready-to-wear из Абу-Даби в Лондон, Портофино, Рабат, Сингапур, Майами, Лос-Анджелес, Бруней и мир. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.`,
    `Bint Saeed Hyde Park Set${c.zh}正面视图。奢华设计师旅行套装：宽松高级绉绸衬衫与流畅阔腿palazzo长裤，标志性金色调Knotted Line纽扣、实用胸袋与侧缝隐藏口袋。购买阿联酋含蓄优雅旅行穿搭——端庄海湾时尚与阿布扎比至伦敦、波托菲诺、拉巴特、新加坡、迈阿密、洛杉矶、文莱及全球的当代阿联酋成衣。阿联酋阿布扎比制造。全球配送。`,
    `Bint Saeed Hyde Park Set in ${c.de}, Frontansicht. Luxus-Designer-Reise-Set mit Oversize-Premium-Krepp-Hemd und fließender weiter Palazzo-Hose, charakteristischen goldfarbenen Knotted-Line-Knöpfen, funktionalen Brusttaschen und versteckten Seitennaht-Taschen. Elegantes Reise-Outfit mit zurückhaltender Eleganz VAE kaufen — bescheidene Khaleeji-Mode und zeitgenössisches emiratisches Ready-to-wear aus Abu Dhabi nach London, Portofino, Rabat, Singapur, Miami, Los Angeles, Brunei und weltweit. Hergestellt in Abu Dhabi, VAE. Weltweiter Versand.`,
    `Bint Saeed Hyde Park Set in ${c.nl}, vooraanzicht. Luxe designer reisset met oversized premium crêpe overhemd en vloeiende wide-leg palazzo-broek, kenmerkende goudkleurige Knotted Line knopen, functionele borstzakken en verborgen zijnaadzakken. Elegant reis-outfit met ingetogen elegantie VAE kopen — bescheiden khaleeji mode en eigentijds Emiratisch ready-to-wear van Abu Dhabi naar Londen, Portofino, Rabat, Singapore, Miami, Los Angeles, Brunei en wereldwijd. Gemaakt in Abu Dhabi, VAE. Wereldwijde verzending.`,
    `Set Bint Saeed Hyde Park em ${c.pt}, vista frontal. Set viagem de designer de luxo com camisa oversize em crepe premium e calças palazzo fluidas de perna larga, botões dourados signature Knotted Line, bolsos de peito funcionais e bolsos laterais ocultos. Comprar outfit viagem elegância discreta EAU — moda modesta khaleeji e prêt-à-porter emirati contemporâneo de Abu Dhabi para Londres, Portofino, Rabat, Singapura, Miami, Los Angeles, Brunei e mundo. Feito em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.`,
    `Bint Saeed Hyde Park Set ${c.id}, tampak depan. Set perjalanan desainer mewah dengan kemeja oversize krepe premium dan celana palazzo kaki lebar mengalir, kancing Knotted Line emas signature, saku dada fungsional dan saku sisi tersembunyi. Beli outfit perjalanan elegansi understated UEA — busana modest khaleeji dan ready-to-wear Emirati kontemporer dari Abu Dhabi ke London, Portofino, Rabat, Singapore, Miami, Los Angeles, Brunei, dan dunia. Dibuat di Abu Dhabi, UEA. Pengiriman dunia.`,
    `Bint Saeed Hyde Park Set ${c.ms}, pandangan hadapan. Set perjalanan pereka mewah dengan kemeja oversize krepe premium dan seluar palazzo kaki lebar mengalir, butang Knotted Line emas signature, poket dada fungsian dan poket sisi tersembunyi. Beli outfit perjalanan keanggunan understated UAE — fesyen sopan khaleeji dan ready-to-wear Emirati kontemporari dari Abu Dhabi ke London, Portofino, Rabat, Singapore, Miami, Los Angeles, Brunei, dan seluruh dunia. Dihasilkan di Abu Dhabi, UAE. Penghantaran seluruh dunia.`,
  )
}

function sideAlts(color: ColorSlug): Record<AppLocale, string> {
  const c = COLOR_LABEL[color]
  return altLoc(
    `Three-quarter view of the Bint Saeed Hyde Park Set in ${c.en} showcasing fluid premium crepe drape, oversized shirt silhouette, flowing palazzo movement, and signature Knotted Line buttons. Luxury Emirati coordinate travel set — premium shirt and palazzo pairing for women in Abu Dhabi, London, Portofino, Rabat, Singapore, Miami, Los Angeles, Brunei, and international wardrobes. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.`,
    `منظر ثلاثة أرباع لطقم Bint Saeed Hyde Park باللون ${c.ar} يبرز انسيابية الكريب الفاخر، وسيلويت القميص الواسع، وحركة البالازو الانسيابي، وأزرار Knotted Line المميزة. طقم سفر إماراتي منسّق فاخر — قميص وبنطال بالازو راقٍ لنساء أبوظبي ولندن وبورتوفينو والرباط وسنغافورة وميامي ولوس أنجلوس وبروناي والخزائن الدولية. صُنع في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.`,
    `Vue trois-quarts du set Bint Saeed Hyde Park en ${c.fr} mettant en valeur la tombée fluide du crêpe premium, la silhouette chemise oversize, le mouvement palazzo fluide et les boutons Knotted Line signature. Ensemble voyage coordonné émirati de luxe — chemise et palazzo premium pour les femmes d’Abou Dabi, Londres, Portofino, Rabat, Singapour, Miami, Los Angeles, Brunei et garde-robes internationales. Fabriqué à Abou Dabi, Émirats arabes unis. Livraison mondiale.`,
    `Vista tre quarti del Bint Saeed Hyde Park Set in ${c.it} con drappeggio fluido in crepe premium, silhouette camicia oversize, movimento palazzo fluido e bottoni Knotted Line signature. Set viaggio coordinato emiratino di lusso — abbinamento premium camicia e palazzo per donne ad Abu Dhabi, Londra, Portofino, Rabat, Singapore, Miami, Los Angeles, Brunei e guardaroba internazionali. Realizzato ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.`,
    `Vista tres cuartos del set Bint Saeed Hyde Park en ${c.es} con caída fluida de crepe premium, silueta de camisa oversize, movimiento palazzo fluido y botones Knotted Line signature. Set de viaje coordinado emiratí de lujo — combinación premium de camisa y palazzo para mujeres en Abu Dabi, Londres, Portofino, Rabat, Singapur, Miami, Los Ángeles, Brunéi y armarios internacionales. Hecho en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.`,
    `Вид три четверти комплекта Bint Saeed Hyde Park цвета ${c.ru} с плавной драпировкой премиального крепа, оверсайз силуэтом рубашки, струящимся движением palazzo и фирменными пуговицами Knotted Line. Люксовый координированный travel set из ОАЭ — премиальная рубашка и palazzo для женщин в Абу-Даби, Лондоне, Портофино, Рабате, Сингапуре, Майами, Лос-Анджелесе, Брунее и международных гардеробах. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.`,
    `Bint Saeed Hyde Park Set${c.zh}四分之三视图，展现高级绉绸流畅垂坠、宽松衬衫廓形、流畅palazzo动感与Knotted Line标志性纽扣。奢华阿联酋协调旅行套装——高端衬衫与阔腿裤搭配，面向阿布扎比、伦敦、波托菲诺、拉巴特、新加坡、迈阿密、洛杉矶、文莱及国际衣橱女性。阿布扎比制造。全球配送。`,
    `Dreiviertelansicht des Bint Saeed Hyde Park Set in ${c.de} mit fließendem Premium-Krepp-Fall, Oversize-Hemd-Silhouette, fließender Palazzo-Bewegung und charakteristischen Knotted-Line-Knöpfen. Luxus-emiratisches Koordinaten-Reise-Set — Premium-Hemd und Palazzo für Frauen in Abu Dhabi, London, Portofino, Rabat, Singapur, Miami, Los Angeles, Brunei und internationalen Garderoben. Hergestellt in Abu Dhabi, VAE. Weltweiter Versand.`,
    `Driekwartweergave van de Bint Saeed Hyde Park Set in ${c.nl} met vloeiende premium crêpe drape, oversized overhemd silhouet, vloeiende palazzo beweging en kenmerkende Knotted Line knopen. Luxe Emiratisch coördinatie reisset — premium overhemd en palazzo voor vrouwen in Abu Dhabi, Londen, Portofino, Rabat, Singapore, Miami, Los Angeles, Brunei en internationale garderobes. Gemaakt in Abu Dhabi, VAE. Wereldwijde verzending.`,
    `Vista de três quartos do set Bint Saeed Hyde Park em ${c.pt} com caimento fluido em crepe premium, silhueta de camisa oversize, movimento palazzo fluido e botões Knotted Line signature. Set viagem coordenado emirati de luxo — combinação premium de camisa e palazzo para mulheres em Abu Dhabi, Londres, Portofino, Rabat, Singapura, Miami, Los Angeles, Brunei e guarda-roupa internacionais. Feito em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.`,
    `Pandangan tiga perempat Bint Saeed Hyde Park Set ${c.id} menampilkan drape krepe premium mengalir, siluet kemeja oversized, gerakan palazzo mengalir, dan kancing Knotted Line signature. Set perjalanan koordinat Emirati mewah — pasangan premium kemeja dan palazzo untuk wanita di Abu Dhabi, London, Portofino, Rabat, Singapore, Miami, Los Angeles, Brunei, dan garderobe internasional. Dibuat di Abu Dhabi, UEA. Pengiriman dunia.`,
    `Pandangan tiga suku Bint Saeed Hyde Park Set ${c.ms} mempamerkan jatuhan krepe premium mengalir, siluet kemeja oversized, pergerakan palazzo mengalir, dan butang Knotted Line signature. Set perjalanan koordinat Emirati mewah — gabungan premium kemeja dan palazzo untuk wanita di Abu Dhabi, London, Portofino, Rabat, Singapore, Miami, Los Angeles, Brunei, dan almari antarabangsa. Dihasilkan di Abu Dhabi, UAE. Penghantaran seluruh dunia.`,
  )
}

function backAlts(color: ColorSlug): Record<AppLocale, string> {
  const c = COLOR_LABEL[color]
  return altLoc(
    `Back view of the Bint Saeed Hyde Park Set in ${c.en} highlighting relaxed oversized shirt tailoring, full-length flowing palazzo trousers, and contemporary designer travelwear finished with signature Knotted Line buttons. Premium luxury coordinate set designed in Abu Dhabi for UAE, GCC, modest fashion, and global ready-to-wear wardrobes. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.`,
    `منظر خلفي لطقم Bint Saeed Hyde Park باللون ${c.ar} يبرز تفصيل القميص الواسع المريح، وبنطال البالازو الانسيابي بطول كامل، وملابس السفر المصمّمة المعاصرة المنتهية بأزرار Knotted Line المميزة. طقم منسّق فاخر راقٍ صُمم في أبوظبي للإمارات والخليج والأزياء المحتشمة وجاهزية الارتداء العالمية. صُنع في أبوظبي، الإمارات العربية المتحدة. شحن عالمي.`,
    `Vue de dos du set Bint Saeed Hyde Park en ${c.fr} soulignant la coupe chemise oversize décontractée, le pantalon palazzo fluide pleine longueur et le travelwear de créateur contemporain fini de boutons Knotted Line signature. Ensemble coordonné de luxe premium conçu à Abou Dabi pour les EAU, le Golfe, la mode modeste et les garde-robes prêt-à-porter mondiales. Fabriqué à Abou Dabi, Émirats arabes unis. Livraison mondiale.`,
    `Vista posteriore del Bint Saeed Hyde Park Set in ${c.it} con sartoria camicia oversize rilassata, pantaloni palazzo fluidi a tutta lunghezza e travelwear designer contemporaneo con bottoni Knotted Line signature. Set coordinato di lusso premium progettato ad Abu Dhabi per EAU, Golfo, modest fashion e guardaroba ready-to-wear globali. Realizzato ad Abu Dhabi, Emirati Arabi Uniti. Spedizione mondiale.`,
    `Vista trasera del set Bint Saeed Hyde Park en ${c.es} con sastrería de camisa oversize relajada, pantalones palazzo fluidos de largo completo y travelwear de diseñador contemporáneo con botones Knotted Line signature. Set coordinado de lujo premium diseñado en Abu Dabi para EAU, Golfo, moda modesta y armarios ready-to-wear globales. Hecho en Abu Dabi, Emiratos Árabes Unidos. Envío mundial.`,
    `Вид сзади комплекта Bint Saeed Hyde Park цвета ${c.ru} с расслабленным оверсайз кроем рубашки, струящимися брюками palazzo во всю длину и современным дизайнерским travelwear с фирменными пуговицами Knotted Line. Премиальный люксовый координированный комплект, созданный в Абу-Даби для ОАЭ, стран Залива, скромной моды и мировых гардеробов ready-to-wear. Сделано в Абу-Даби, ОАЭ. Доставка по всему миру.`,
    `Bint Saeed Hyde Park Set${c.zh}背面视图，凸显宽松衬衫剪裁、全长流畅阔腿palazzo长裤与Knotted Line标志性纽扣的当代设计师旅行装。阿布扎比设计的高端奢华协调套装，面向阿联酋、海湾、端庄时尚及全球成衣衣橱。阿布扎比制造。全球配送。`,
    `Rückansicht des Bint Saeed Hyde Park Set in ${c.de} mit entspannter Oversize-Hemd-Schneiderei, ganzlangen fließenden Palazzo-Hosen und zeitgenössischem Designer-Travelwear mit charakteristischen Knotted-Line-Knöpfen. Premium-Luxus-Koordinaten-Set aus Abu Dhabi für VAE, Golf, bescheidene Mode und globale Ready-to-wear-Garderoben. Hergestellt in Abu Dhabi, VAE. Weltweiter Versand.`,
    `Achteraanzicht van de Bint Saeed Hyde Park Set in ${c.nl} met ontspannen oversized overhemd tailoring, full-length vloeiende palazzo-broek en eigentijds designer travelwear met kenmerkende Knotted Line knopen. Premium luxe coördinatieset ontworpen in Abu Dhabi voor VAE, Golf, bescheiden mode en wereldwijde ready-to-wear garderobes. Gemaakt in Abu Dhabi, VAE. Wereldwijde verzending.`,
    `Vista traseira do set Bint Saeed Hyde Park em ${c.pt} com alfaiataria de camisa oversize descontraída, calças palazzo fluidas de comprimento total e travelwear de designer contemporâneo com botões Knotted Line signature. Set coordenado de luxo premium desenhado em Abu Dhabi para EAU, Golfo, moda modesta e guarda-roupa ready-to-wear global. Feito em Abu Dhabi, Emirados Árabes Unidos. Envio mundial.`,
    `Tampak belakang Bint Saeed Hyde Park Set ${c.id} menonjolkan tailoring kemeja oversized santai, celana palazzo mengalir penuh, dan travelwear desainer kontemporer dengan kancing Knotted Line signature. Set koordinat mewah premium dirancang di Abu Dhabi untuk UEA, GCC, busana modest, dan garderobe ready-to-wear global. Dibuat di Abu Dhabi, UEA. Pengiriman dunia.`,
    `Pandangan belakang Bint Saeed Hyde Park Set ${c.ms} menyerlahkan jahitan kemeja oversized santai, seluar palazzo mengalir penuh, dan travelwear pereka kontemporari dengan butang Knotted Line signature. Set koordinat mewah premium direka di Abu Dhabi untuk UAE, GCC, fesyen sopan, dan almari ready-to-wear global. Dihasilkan di Abu Dhabi, UAE. Penghantaran seluruh dunia.`,
  )
}

function entry(color: ColorSlug, view: 'front' | 'side' | 'back'): AltEntry {
  const alts =
    view === 'front' ? frontAlts(color) : view === 'side' ? sideAlts(color) : backAlts(color)
  return {
    filename: `bint-saeed-hyde-park-set-${color}-${view}.webp`,
    alts,
  }
}

/** Curated PDP image alts — Hyde Park Set (Deep Black & Navy Blue). Travel set + Knotted Line discovery optimised. */
export const HYDE_PARK_SET_IMAGE_ALT_ENTRIES: AltEntry[] = [
  entry('black', 'front'),
  entry('black', 'side'),
  entry('black', 'back'),
  entry('navy-blue', 'front'),
  entry('navy-blue', 'side'),
  entry('navy-blue', 'back'),
]
