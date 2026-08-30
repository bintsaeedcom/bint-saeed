import type { AppLocale } from '@/lib/i18n/routing'
import { altLoc } from '@/lib/products/imageAltOverridesI18n'

type AltEntry = { filename: string; alts: Record<AppLocale, string> }

const COLOR = altLoc(
  'Champagne Cream',
  'Champagne Cream',
  'Champagne Cream',
  'Champagne Cream',
  'Champagne Cream',
  'Champagne Cream',
  'Champagne Cream',
  'Champagne Cream',
  'Champagne Cream',
  'Champagne Cream',
  'Champagne Cream',
  'Champagne Cream',
)

function frontAlts(): Record<AppLocale, string> {
  return altLoc(
    `Bint Saeed Grosvenor Set in ${COLOR.en}, front view. Luxury designer satin evening coordinate set with a refined blouse and high-waisted floor-length maxi skirt, gold waist trim with black-and-gold braided detail, and signature gold-tone Knotted Line cuff buttons. Buy formal modest occasionwear from Abu Dhabi to London, Paris, Milan, Riyadh, and worldwide. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.`,
    `طقم Bint Saeed Grosvenor باللون ${COLOR.ar}، منظر أمامي. طقم مسائي ساتان فاخر من بلوزة راقية وتنورة ماكسي بخصر مرتفع، حاشية خصر ذهبية وتفصيل ضفيرة، وأزرار Knotted Line عند الأكمام. شراء أزياء محتشمة للمناسبات من أبوظبي إلى لندن وباريس وميلانو والرياض والعالم. صُنع في أبوظبي، الإمارات. شحن عالمي.`,
    `Set Bint Saeed Grosvenor en ${COLOR.fr}, vue de face. Set du soir satin de créateur avec blouse raffinée et jupe maxi taille haute, galon doré à la taille et boutons Knotted Line aux poignets. Acheter tenue de soirée modeste d’Abou Dabi vers Londres, Paris, Milan, Riyad et le monde. Fabriqué à Abou Dabi, EAU. Livraison mondiale.`,
    `Bint Saeed Grosvenor Set in ${COLOR.it}, vista frontale. Set serale in raso con blusa raffinata e gonna maxi a vita alta, finitura dorata in vita e bottoni Knotted Line ai polsi. Acquistare occasionwear modesto da Abu Dhabi a Londra, Parigi, Milano, Riyadh e mondo. Realizzato ad Abu Dhabi, EAU. Spedizione mondiale.`,
    `Set Bint Saeed Grosvenor en ${COLOR.es}, vista frontal. Set nocturno de satén con blusa refinada y falda maxi de cintura alta, trim dorado en la cintura y botones Knotted Line en los puños. Comprar moda modesta de ocasión de Abu Dabi a Londres, París, Milán, Riad y el mundo. Hecho en Abu Dabi, EAU. Envío mundial.`,
    `Комплект Bint Saeed Grosvenor цвета ${COLOR.ru}, вид спереди. Атласный вечерний комплект: блуза и юбка макси с высокой талией, золотистая отделка на талии и пуговицы Knotted Line на манжетах. Купить скромный occasionwear из Абу-Даби в Лондон, Париж, Милан, Эр-Рияд и мир. Сделано в Абу-Даби, ОАЭ. Доставка по миру.`,
    `BINT SAEED 承悦 Grosvenor 套装${COLOR.zh}正面视图。奢华缎面晚宴协调套装：精致衬衫与高腰及地长裙，金色调腰饰与 Knotted Line 袖扣。阿布扎比至伦敦、巴黎、米兰、利雅得及全球。阿联酋阿布扎比制造。全球配送。`,
    `Bint Saeed Grosvenor Set in ${COLOR.de}, Frontansicht. Satin-Abend-Koordinations-Set mit Bluse und hoch tailliertem Maxirock, goldener Taillenverzierung und Knotted-Line-Manschettenknöpfen. Formelle bescheidene Mode aus Abu Dhabi weltweit. Hergestellt in Abu Dhabi, VAE. Weltweiter Versand.`,
    `Bint Saeed Grosvenor Set in ${COLOR.nl}, vooraanzicht. Satijnen avond coördinatieset met blouse en high-waisted maxirok, gouden tailletrim en Knotted Line manchetknopen. Formele bescheiden mode uit Abu Dhabi wereldwijd. Gemaakt in Abu Dhabi, VAE. Wereldwijde verzending.`,
    `Set Bint Saeed Grosvenor em ${COLOR.pt}, vista frontal. Set noturno em cetim com blusa refinada e saia maxi de cintura alta, acabamento dourado na cintura e botões Knotted Line nos punhos. Moda modesta formal de Abu Dhabi para o mundo. Feito em Abu Dhabi, EAU. Envio mundial.`,
    `Bint Saeed Grosvenor Set ${COLOR.id}, tampak depan. Set malam satin koordinat dengan blus halus dan rok maxi pinggang tinggi, trim emas dan kancing Knotted Line di manset. Busana modest formal dari Abu Dhabi ke dunia. Dibuat di Abu Dhabi, UEA. Pengiriman dunia.`,
    `Bint Saeed Grosvenor Set ${COLOR.ms}, pandangan hadapan. Set malam satin koordinat dengan blouse halus dan skirt maxi pinggang tinggi, trim emas dan butang Knotted Line di manset. Fesyen sopan formal dari Abu Dhabi ke seluruh dunia. Dihasilkan di Abu Dhabi, UAE. Penghantaran seluruh dunia.`,
  )
}

function sideAlts(): Record<AppLocale, string> {
  return altLoc(
    `Three-quarter view of the Bint Saeed Grosvenor Set in ${COLOR.en} showcasing satin drape, high-waisted maxi line, gold waist trim, and Knotted Line cuff buttons. Luxury Emirati evening coordinate set for formal wardrobes in Abu Dhabi, London, Paris, and worldwide. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.`,
    `منظر ثلاثة أرباع لطقم Grosvenor باللون ${COLOR.ar} يبرز انسيابية الساتان، خط التنورة الماكسي، حاشية الخصر الذهبية، وأزرار Knotted Line. طقم مسائي إماراتي فاخر للخزائن الرسمية. صُنع في أبوظبي. شحن عالمي.`,
    `Vue trois-quarts du Grosvenor Set en ${COLOR.fr} avec tombée satin, ligne jupe maxi, galon doré et boutons Knotted Line. Set du soir émirati de luxe. Fabriqué à Abou Dabi. Livraison mondiale.`,
    `Vista tre quarti del Grosvenor Set in ${COLOR.it} con drappeggio satin, linea gonna maxi, finitura dorata e bottoni Knotted Line. Set serale emiratino di lusso. Realizzato ad Abu Dhabi. Spedizione mondiale.`,
    `Vista tres cuartos del Grosvenor Set en ${COLOR.es} con caída de satén, línea falda maxi, trim dorado y botones Knotted Line. Set nocturno emiratí de lujo. Hecho en Abu Dabi. Envío mundial.`,
    `Вид три четверти Grosvenor Set цвета ${COLOR.ru} с драпировкой атласа, линией юбки макси и пуговицами Knotted Line. Люксовый вечерний комплект из ОАЭ. Сделано в Абу-Даби. Доставка по миру.`,
    `Grosvenor 套装${COLOR.zh}四分之三视图，展现缎面垂坠、高腰长裙线条与 Knotted Line 袖扣。奢华阿联酋晚宴套装。阿布扎比制造。全球配送。`,
    `Dreiviertelansicht des Grosvenor Set in ${COLOR.de} mit Satin-Fall, Maxirock-Linie und Knotted-Line-Knöpfen. Luxus-emiratisches Abend-Set. Hergestellt in Abu Dhabi. Weltweiter Versand.`,
    `Driekwartweergave van de Grosvenor Set in ${COLOR.nl} met satijnen drape, maxirok-lijn en Knotted Line knopen. Luxe Emiratisch avondset. Gemaakt in Abu Dhabi. Wereldwijde verzending.`,
    `Vista de três quartos do Grosvenor Set em ${COLOR.pt} com caimento em cetim, linha saia maxi e botões Knotted Line. Set noturno emirati de luxo. Feito em Abu Dhabi. Envio mundial.`,
    `Pandangan tiga perempat Grosvenor Set ${COLOR.id} menampilkan drape satin, garis rok maxi, dan kancing Knotted Line. Set malam Emirati mewah. Dibuat di Abu Dhabi. Pengiriman dunia.`,
    `Pandangan tiga suku Grosvenor Set ${COLOR.ms} mempamerkan jatuhan satin, garis skirt maxi, dan butang Knotted Line. Set malam Emirati mewah. Dihasilkan di Abu Dhabi. Penghantaran seluruh dunia.`,
  )
}

function backAlts(): Record<AppLocale, string> {
  return altLoc(
    `Back view of the Bint Saeed Grosvenor Set in ${COLOR.en} highlighting satin evening tailoring, floor-length maxi skirt silhouette, and Knotted Line cuff detail on the blouse. Premium luxury coordinate set designed in Abu Dhabi for formal modest fashion worldwide. Made in Abu Dhabi, United Arab Emirates. Worldwide shipping.`,
    `منظر خلفي لطقم Grosvenor باللون ${COLOR.ar} يبرز تفصيل الساتان المسائي، سيلويت التنورة الماكسي، وتفاصيل Knotted Line على البلوزة. طقم منسّق فاخر من أبوظبي للأزياء المحتشمة الرسمية. شحن عالمي.`,
    `Vue de dos du Grosvenor Set en ${COLOR.fr} soulignant le tailleur satin du soir, la jupe maxi longueur sol et les boutons Knotted Line. Set coordonné premium conçu à Abou Dabi. Livraison mondiale.`,
    `Vista posteriore del Grosvenor Set in ${COLOR.it} con sartoria satin serale, gonna maxi e bottoni Knotted Line. Set coordinato premium da Abu Dhabi. Spedizione mondiale.`,
    `Vista trasera del Grosvenor Set en ${COLOR.es} con sastrería satin nocturna, falda maxi y botones Knotted Line. Set coordinado premium de Abu Dabi. Envío mundial.`,
    `Вид сзади Grosvenor Set с вечерним атласным кроем, юбкой макси и пуговицами Knotted Line. Премиальный комплект из Абу-Даби. Доставка по миру.`,
    `Grosvenor 套装${COLOR.zh}背面视图，凸显缎面晚宴剪裁、及地长裙与 Knotted Line 袖扣。阿布扎比设计高端套装。全球配送。`,
    `Rückansicht des Grosvenor Set in ${COLOR.de} mit Satin-Abendschneiderei, Maxirock-Silhouette und Knotted-Line-Details. Premium-Set aus Abu Dhabi. Weltweiter Versand.`,
    `Achteraanzicht van de Grosvenor Set in ${COLOR.nl} met satijnen avond tailoring, maxirok-silhouet en Knotted Line details. Premium set uit Abu Dhabi. Wereldwijde verzending.`,
    `Vista traseira do Grosvenor Set em ${COLOR.pt} com alfaiataria noturna em cetim, saia maxi e botões Knotted Line. Set premium de Abu Dhabi. Envio mundial.`,
    `Tampak belakang Grosvenor Set ${COLOR.id} menonjolkan tailoring satin malam, siluet rok maxi, dan kancing Knotted Line. Set premium dari Abu Dhabi. Pengiriman dunia.`,
    `Pandangan belakang Grosvenor Set ${COLOR.ms} menyerlahkan jahitan satin malam, siluet skirt maxi, dan butang Knotted Line. Set premium dari Abu Dhabi. Penghantaran seluruh dunia.`,
  )
}

function lifestyle1Alts(): Record<AppLocale, string> {
  return altLoc(
    `Lifestyle image of the Bint Saeed Grosvenor Set in ${COLOR.en} styled for an evening occasion — satin blouse and maxi skirt with gold waist trim. Signature onyx garment jewellery shown as styling reference only. Emirati luxury formal set from Abu Dhabi. Worldwide shipping.`,
    `صورة lifestyle لطقم Grosvenor باللون ${COLOR.ar} منسّق لمناسبة مسائية — بلوزة ساتان وتنورة ماكسي بحاشية خصر ذهبية. مجوهرات عقيق للإلهام فقط. طقم فاخر من أبوظبي. شحن عالمي.`,
    `Image lifestyle du Grosvenor Set en ${COLOR.fr} pour une occasion du soir — blouse satin et jupe maxi. Bijouterie onyx en référence styling uniquement. Set formel de luxe d’Abou Dabi.`,
    `Immagine lifestyle del Grosvenor Set in ${COLOR.it} per un’occasione serale — blusa satin e gonna maxi. Gioielli onyx come riferimento styling. Set formale emiratino.`,
    `Imagen lifestyle del Grosvenor Set en ${COLOR.es} para ocasión nocturna — blusa satén y falda maxi. Joyería ónice como referencia de styling. Set formal emiratí.`,
    `Lifestyle Grosvenor Set ${COLOR.ru} для вечернего случая. Onyx jewellery — styling reference. Люксовый комплект из Абу-Даби.`,
    `Grosvenor 套装${COLOR.zh}生活方式图，晚宴造型；玛瑙首饰仅为造型参考。`,
    `Lifestyle Grosvenor Set in ${COLOR.de} für Abendanlässe. Onyx-Schmuck nur Styling-Referenz.`,
    `Lifestyle Grosvenor Set in ${COLOR.nl} voor avondgelegenheden. Onyx sieraden alleen stylingreferentie.`,
    `Lifestyle Grosvenor Set em ${COLOR.pt} para ocasião noturna. Joalharia ónix apenas referência.`,
    `Lifestyle Grosvenor Set ${COLOR.id} untuk acara malam. Perhiasan onyx referensi styling.`,
    `Lifestyle Grosvenor Set ${COLOR.ms} untuk majlis malam. Barang kemas onyx rujukan styling.`,
  )
}

function lifestyle2Alts(): Record<AppLocale, string> {
  return altLoc(
    `Second lifestyle view of the Bint Saeed Grosvenor Set in ${COLOR.en} showing fluid satin movement at the maxi hem and coordinated evening proportion. Knotted Line cuff buttons and gold waist trim. Designer formal set from Abu Dhabi, UAE.`,
    `منظر lifestyle ثانٍ لطقم Grosvenor باللون ${COLOR.ar} يُظهر حركة الساتان عند حاشية التنورة ونسب المساء المنسّقة.`,
    `Deuxième vue lifestyle du Grosvenor Set en ${COLOR.fr} montrant le mouvement satin à l’ourlet maxi.`,
    `Seconda vista lifestyle del Grosvenor Set in ${COLOR.it} con movimento satin all’orlo maxi.`,
    `Segunda vista lifestyle del Grosvenor Set en ${COLOR.es} con movimiento de satén en el bajo maxi.`,
    `Второй lifestyle Grosvenor Set ${COLOR.ru} с движением атласа у низа юбки макси.`,
    `Grosvenor 套装${COLOR.zh}第二张生活方式图，展现裙摆缎面动感。`,
    `Zweite Lifestyle-Ansicht Grosvenor Set in ${COLOR.de} mit Satin-Bewegung am Maxisaum.`,
    `Tweede lifestyle Grosvenor Set in ${COLOR.nl} met satijnen beweging aan maxizoom.`,
    `Segunda vista lifestyle Grosvenor Set em ${COLOR.pt} com movimento de cetim na barra maxi.`,
    `Lifestyle kedua Grosvenor Set ${COLOR.id} menampilkan gerakan satin di hem maxi.`,
    `Lifestyle kedua Grosvenor Set ${COLOR.ms} mempamerkan pergerakan satin di hem maxi.`,
  )
}

function jewelleryDetailAlts(): Record<AppLocale, string> {
  return altLoc(
    `Detail image of signature onyx garment jewellery styled with the Bint Saeed Grosvenor Set in ${COLOR.en} — styling reference only, not included with the satin blouse and maxi skirt coordinate. Bint Saeed formal evening set from Abu Dhabi.`,
    `صورة تفصيلية لمجوهرات عقيق signature منسّقة مع Grosvenor Set — للإلهام فقط، غير مرفقة بالطقم.`,
    `Détail bijouterie onyx signature avec le Grosvenor Set — référence styling uniquement.`,
    `Dettaglio gioielli onyx signature con Grosvenor Set — solo riferimento styling.`,
    `Detalle joyería ónice signature con Grosvenor Set — solo referencia de styling.`,
    `Деталь onyx jewellery с Grosvenor Set — только styling reference.`,
    `Grosvenor 套装${COLOR.zh}玛瑙首饰细节图——造型参考，非套装内容。`,
    `Detail Onyx-Garment-Jewellery mit Grosvenor Set — nur Styling-Referenz.`,
    `Detail onyx garment jewellery met Grosvenor Set — alleen stylingreferentie.`,
    `Detalhe joalharia ónix signature com Grosvenor Set — apenas referência.`,
    `Detail perhiasan onyx dengan Grosvenor Set — referensi styling saja.`,
    `Butiran barang kemas onyx dengan Grosvenor Set — rujukan styling sahaja.`,
  )
}

/** Curated PDP image alts — Grosvenor Set (Champagne Cream). Evening satin set + Knotted Line discovery optimised. */
export const GROSVENOR_SET_IMAGE_ALT_ENTRIES: AltEntry[] = [
  { filename: 'bint-saeed-grosvenor-set-champagne-cream-front.webp', alts: frontAlts() },
  { filename: 'bint-saeed-grosvenor-set-champagne-cream-side.webp', alts: sideAlts() },
  { filename: 'bint-saeed-grosvenor-set-champagne-cream-back.webp', alts: backAlts() },
  { filename: 'bint-saeed-grosvenor-set-champagne-cream-lifestyle-1.webp', alts: lifestyle1Alts() },
  { filename: 'bint-saeed-grosvenor-set-champagne-cream-lifestyle-2.webp', alts: lifestyle2Alts() },
  {
    filename: 'bint-saeed-grosvenor-set-champagne-cream-garment-jewellery-detail.webp',
    alts: jewelleryDetailAlts(),
  },
]
