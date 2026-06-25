import type { AppLocale } from '@/lib/i18n/routing'
import { patchAlKhousHeritageFaq } from '@/lib/products/alKhousHeritageFaqI18n'
import type { AbayaSchemaLocalePack } from '@/lib/products/abayaSchemaPackResolve'

type Facts = AbayaSchemaLocalePack['facts']
type Faq = AbayaSchemaLocalePack['faq']

export const KNIGHTSBRIDGE_AUDIENCE_EXTENSION: Record<AppLocale, string> = {
  en: ', jacket abayas, relaxed jacket abayas, modest outerwear, contemporary outerwear, everyday luxury, travel wardrobes, elegant daily dressing, and women who prefer setting trends rather than following them',
  ar: '، عبايات جاكيت، عبايات جاكيت مريحة، ملابس خارجية محتشمة، ملابس خارجية معاصرة، فخامة يومية، خزائن السفر، أناقة الملبس اليومي، والنساء اللواتي يفضلن وضع الاتجاهات بدلاً من اتباعها',
  fr: ', abayas vestes, abayas vestes décontractées, vêtements d\'extérieur modestes, vêtements d\'extérieur contemporains, luxe au quotidien, garde-robes de voyage, élégance vestimentaire quotidienne, et les femmes qui préfèrent imposer les tendances plutôt que les suivre',
  it: ', abaya giacca, abaya giacca rilassate, capospalla modesti, capospalla contemporanei, lusso quotidiano, guardaroba da viaggio, eleganza quotidiana, e donne che preferiscono dettare le tendenze piuttosto che seguirle',
  es: ', abayas chaqueta, abayas chaqueta relajadas, ropa exterior modesta, ropa exterior contemporánea, lujo cotidiano, guardarropas de viaje, elegancia diaria, y mujeres que prefieren marcar tendencias en lugar de seguirlas',
  ru: ', жакет-абайи, расслабленные жакет-абайи, скромная верхняя одежда, современная верхняя одежда, повседневная роскошь, дорожный гардероб, элегантный повседневный стиль, и женщины, которые предпочитают задавать тренды, а не следовать им',
  zh: '、夹克式阿巴亚、宽松夹克式阿巴亚、端庄外套、现代外套、日常奢华、旅行衣橱、优雅日常装扮，以及更愿引领潮流而非追随潮流的女性',
  de: ', Jacket-Abayas, entspannte Jacket-Abayas, bescheidene Oberbekleidung, zeitgenössische Oberbekleidung, Alltagsluxus, Reisegarderoben, elegante Alltagskleidung und Frauen, die lieber Trends setzen als ihnen folgen',
  nl: ', jacket abayas, relaxed jacket abayas, bescheiden outerwear, eigentijdse outerwear, alledaags luxe, reisgarderobes, elegante dagelijkse uitstraling, en vrouwen die liever trends zetten dan volgen',
  pt: ', abayas casaco, abayas casaco descontraídas, roupa exterior modesta, roupa exterior contemporânea, luxo quotidiano, roupeiros de viagem, elegância diária, e mulheres que preferem definir tendências em vez de segui-las',
  id: ', abaya jaket, abaya jaket santai, pakaian luar sopan, pakaian luar kontemporer, kemewahan sehari-hari, garderobe perjalanan, penampilan harian yang elegan, dan wanita yang lebih suka menetapkan tren daripada mengikutinya',
  ms: ', abaya jaket, abaya jaket santai, pakaian luar sopan, pakaian luar kontemporari, kemewahan harian, almari perjalanan, pemakaian harian yang anggun, dan wanita yang lebih suka menetapkan trend daripada mengikutinya',
}

const KNIGHTSBRIDGE_FACTS_EN: Facts = {
  productType: 'Relaxed jacket abaya inspired by contemporary outerwear',
  productCategory: 'Abaya, Jacket Abaya, Outerwear, Long Jacket, Modest Outerwear',
  fit: 'Relaxed fit with a jacket-inspired silhouette designed for layering.',
  maximumGarmentLength: '143 cm / 56.3 inches',
  modelHeight: '160 cm / 63 inches',
  modelWears: 'XS',
  closure: 'Concealed front button closure',
  pockets: 'Two chest pockets and two hidden side pockets',
  personalisation:
    'Optional personalisation on a hidden interior label with a name, date, or meaningful message.',
  lining: 'Attached inner dress in 100% Polyester',
  innerDress: 'Attached inner dress in 100% Polyester',
  trim:
    'Khous-inspired woven detailing on the chest pockets and cuffs, derived from the traditional Emirati art of palm frond weaving; Bint Saeed signature gold-tone Knotted Lines of Lineage buttons on the chest pockets and cuffs.',
  stylingDetail:
    'Relaxed jacket abaya with pointed collar, concealed front button closure, chest pockets, hidden side pockets, Khous-inspired woven detailing, buttoned cuffs, shoulder tab detailing, attached inner dress, and signature gold-tone buttons.',
  care: 'Professional dry clean only.',
  material: 'Outer: 60% Polyester, 40% Cotton. Inner dress: 100% Polyester.',
  suitableFor:
    'Everyday luxury, daily dressing, travel, coffee outings, work, meetings, city life, weekend dressing, modest outerwear, elegant casual wear, and life between the Gulf, Europe, and beyond.',
}

const KNIGHTSBRIDGE_FACTS_ID: Facts = {
  productType: 'Abaya jaket santai terinspirasi pakaian luar kontemporer',
  productCategory: 'Abaya, Abaya Jaket, Pakaian Luar, Jaket Panjang, Pakaian Luar Sopan',
  fit: 'Potongan santai dengan siluet terinspirasi jaket yang dirancang untuk layering.',
  maximumGarmentLength: '143 cm / 56,3 inci',
  modelHeight: '160 cm / 63 inci',
  modelWears: 'XS',
  closure: 'Penutup kancing depan tersembunyi',
  pockets: 'Dua saku dada dan dua saku samping tersembunyi',
  personalisation:
    'Personalisasi opsional pada label interior tersembunyi dengan nama, tanggal, atau pesan bermakna.',
  lining: 'Gaun dalam terpasang 100% Polyester',
  innerDress: 'Gaun dalam terpasang 100% Polyester',
  trim:
    'Detail tenun terinspirasi Khous pada saku dada dan manset, berasal dari seni tradisional Emirati anyaman pelepah palem; kancing emas khas Bint Saeed Knotted Lines of Lineage pada saku dada dan manset.',
  stylingDetail:
    'Abaya jaket santai dengan kerah runcing, penutup kancing depan tersembunyi, saku dada, saku samping tersembunyi, detail tenun terinspirasi Khous, manset berkancing, detail tab bahu, gaun dalam terpasang, dan kancing emas khas.',
  care: 'Pembersihan kering profesional saja.',
  material: 'Luar: 60% Polyester, 40% Katun. Gaun dalam: 100% Polyester.',
  suitableFor:
    'Kemewahan sehari-hari, berpakaian harian, perjalanan, kopi, kerja, rapat, kehidupan kota, akhir pekan, pakaian luar sopan, kasual elegan, dan kehidupan antara Teluk, Eropa, dan seterusnya.',
}

const KNIGHTSBRIDGE_FACTS_MS: Facts = {
  productType: 'Abaya jaket santai terinspirasi pakaian luar kontemporari',
  productCategory: 'Abaya, Abaya Jaket, Pakaian Luar, Jaket Panjang, Pakaian Luar Sopan',
  fit: 'Potongan santai dengan siluet berinspirasi jaket yang direka untuk pelapisan.',
  maximumGarmentLength: '143 cm / 56.3 inci',
  modelHeight: '160 cm / 63 inci',
  modelWears: 'XS',
  closure: 'Penutup butang hadapan tersembunyi',
  pockets: 'Dua poket dada dan dua poket sisi tersembunyi',
  personalisation:
    'Pemperibadian pilihan pada label dalaman tersembunyi dengan nama, tarikh, atau mesej bermakna.',
  lining: 'Gaun dalaman terpasang 100% Polyester',
  innerDress: 'Gaun dalaman terpasang 100% Polyester',
  trim:
    'Perincian tenunan terinspirasi Khous pada poket dada dan manset, daripada seni tradisional Emirati menenun pelepah palma; butang emas khas Bint Saeed Knotted Lines of Lineage pada poket dada dan manset.',
  stylingDetail:
    'Abaya jaket santai dengan kolar runcing, penutup butang hadapan tersembunyi, poket dada, poket sisi tersembunyi, perincian tenunan terinspirasi Khous, manset berbutang, perincian tab bahu, gaun dalaman terpasang, dan butang emas khas.',
  care: 'Pembersihan kering profesional sahaja.',
  material: 'Luar: 60% Polyester, 40% Kapas. Gaun dalaman: 100% Polyester.',
  suitableFor:
    'Kemewahan harian, pemakaian setiap hari, perjalanan, kopi, kerja, mesyuarat, kehidupan bandar, hujung minggu, pakaian luar sopan, kasual elegan, dan kehidupan antara Teluk, Eropah, dan seterusnya.',
}

const KNIGHTSBRIDGE_FACTS_AR: Facts = {
  productType: 'عباية جاكيت مريحة مستوحاة من الملابس الخارجية المعاصرة',
  productCategory: 'عباية، عباية جاكيت، ملابس خارجية، جاكيت طويل، ملابس خارجية محتشمة',
  fit: 'قصة مريحة مع تصميم مستوحى من الجاكيت ومصمم للارتداء بطبقات.',
  maximumGarmentLength: '143 سم / 56.3 بوصة',
  modelHeight: '160 سم / 63 بوصة',
  modelWears: 'XS',
  closure: 'إغلاق أمامي بأزرار مخفية',
  pockets: 'جيبان على الصدر وجيبان جانبيان مخفيان',
  personalisation: 'تخصيص اختياري على بطاقة داخلية مخفية تتضمن اسماً أو تاريخاً أو رسالة ذات معنى.',
  lining: 'فستان داخلي مرفق من 100% Polyester',
  innerDress: 'فستان داخلي مرفق من 100% Polyester',
  trim:
    'تفاصيل نسج مستوحاة من Khous على جيوب الصدر والأساور، مستمدة من الفن الإماراتي التقليدي لنسج سعف النخيل؛ أزرار ذهبية مميزة من Bint Saeed باسم Knotted Lines of Lineage على جيوب الصدر والأساور.',
  stylingDetail:
    'عباية جاكيت مريحة بياقة مدببة، وإغلاق أمامي بأزرار مخفية، وجيوب صدر، وجيوب جانبية مخفية، وتفاصيل نسج مستوحاة من Khous، وأساور مزودة بأزرار، وتفاصيل تبويب الكتف، وفستان داخلي مرفق، وأزرار ذهبية مميزة.',
  care: 'تنظيف جاف احترافي فقط.',
  material: 'الخارجي: 60% Polyester، 40% Cotton. الفستان الداخلي: 100% Polyester.',
  suitableFor:
    'الفخامة اليومية، والإطلالات اليومية، والسفر، والخروج إلى المقاهي، والعمل، والاجتماعات، وحياة المدينة، وإطلالات عطلة نهاية الأسبوع، والملابس الخارجية المحتشمة، والإطلالات الكاجوال الأنيقة، والحياة بين الخليج وأوروبا وما بعدها.',
}

const KNIGHTSBRIDGE_FACTS_FR: Facts = {
  productType: 'Abaya veste décontractée inspirée du vestiaire outerwear contemporain',
  productCategory: 'Abaya, Abaya veste, Outerwear, Veste longue, Outerwear modeste',
  fit: 'Coupe décontractée avec une silhouette inspirée de la veste, pensée pour les superpositions.',
  maximumGarmentLength: '143 cm / 56.3 pouces',
  modelHeight: '160 cm / 63 pouces',
  modelWears: 'XS',
  closure: 'Fermeture boutonnée frontale dissimulée',
  pockets: 'Deux poches poitrine et deux poches latérales cachées',
  personalisation:
    'Personnalisation optionnelle sur une étiquette intérieure cachée avec un nom, une date ou un message significatif.',
  lining: 'Robe intérieure attachée en 100% Polyester',
  innerDress: 'Robe intérieure attachée en 100% Polyester',
  trim:
    'Détails tissés inspirés de Khous sur les poches poitrine et les poignets, issus de l\'art émirati traditionnel du tressage de feuilles de palmier ; boutons dorés signature Bint Saeed Knotted Lines of Lineage sur les poches poitrine et les poignets.',
  stylingDetail:
    'Abaya veste décontractée avec col pointu, fermeture boutonnée frontale dissimulée, poches poitrine, poches latérales cachées, détails tissés inspirés de Khous, poignets boutonnés, détail de patte d\'épaule, robe intérieure attachée et boutons dorés signature.',
  care: 'Nettoyage à sec professionnel uniquement.',
  material: 'Extérieur : 60% Polyester, 40% Cotton. Robe intérieure : 100% Polyester.',
  suitableFor:
    'Luxe quotidien, tenue de tous les jours, voyages, sorties café, travail, réunions, vie urbaine, tenues de week-end, outerwear modeste, casual chic élégant, et vie entre le Golfe, l\'Europe et au-delà.',
}

const KNIGHTSBRIDGE_FACTS_IT: Facts = {
  productType: 'Abaya giacca rilassata ispirata al capospalla contemporaneo',
  productCategory: 'Abaya, Abaya giacca, Capospalla, Giacca lunga, Capospalla modesto',
  fit: 'Vestibilità rilassata con silhouette ispirata alla giacca, progettata per la stratificazione.',
  maximumGarmentLength: '143 cm / 56.3 pollici',
  modelHeight: '160 cm / 63 pollici',
  modelWears: 'XS',
  closure: 'Chiusura frontale nascosta con bottoni',
  pockets: 'Due tasche sul petto e due tasche laterali nascoste',
  personalisation:
    'Personalizzazione opzionale su un\'etichetta interna nascosta con nome, data o messaggio significativo.',
  lining: 'Abito interno applicato in 100% Polyester',
  innerDress: 'Abito interno applicato in 100% Polyester',
  trim:
    'Dettagli intrecciati ispirati a Khous su tasche sul petto e polsini, derivati dall\'arte emiratina tradizionale dell\'intreccio di foglie di palma; bottoni dorati signature Bint Saeed Knotted Lines of Lineage su tasche sul petto e polsini.',
  stylingDetail:
    'Abaya giacca rilassata con colletto a punta, chiusura frontale nascosta con bottoni, tasche sul petto, tasche laterali nascoste, dettagli intrecciati ispirati a Khous, polsini con bottoni, dettaglio tab sulla spalla, abito interno applicato e bottoni dorati signature.',
  care: 'Solo lavaggio a secco professionale.',
  material: 'Esterno: 60% Polyester, 40% Cotton. Abito interno: 100% Polyester.',
  suitableFor:
    'Lusso quotidiano, styling di tutti i giorni, viaggi, uscite al caffè, lavoro, riunioni, vita in città, look del weekend, capospalla modesto, casual elegante, e vita tra il Golfo, l\'Europa e oltre.',
}

const KNIGHTSBRIDGE_FACTS_ES: Facts = {
  productType: 'Abaya chaqueta relajada inspirada en el outerwear contemporáneo',
  productCategory: 'Abaya, Abaya chaqueta, Outerwear, Chaqueta larga, Outerwear modesto',
  fit: 'Corte relajado con una silueta inspirada en chaqueta, diseñada para superponer capas.',
  maximumGarmentLength: '143 cm / 56.3 pulgadas',
  modelHeight: '160 cm / 63 pulgadas',
  modelWears: 'XS',
  closure: 'Cierre frontal oculto con botones',
  pockets: 'Dos bolsillos en el pecho y dos bolsillos laterales ocultos',
  personalisation:
    'Personalización opcional en una etiqueta interior oculta con nombre, fecha o mensaje significativo.',
  lining: 'Vestido interior adjunto en 100% Polyester',
  innerDress: 'Vestido interior adjunto en 100% Polyester',
  trim:
    'Detalle tejido inspirado en Khous en los bolsillos del pecho y los puños, derivado del arte tradicional emiratí de tejer hojas de palma; botones dorados signature Bint Saeed Knotted Lines of Lineage en los bolsillos del pecho y los puños.',
  stylingDetail:
    'Abaya chaqueta relajada con cuello en punta, cierre frontal oculto con botones, bolsillos en el pecho, bolsillos laterales ocultos, detalle tejido inspirado en Khous, puños abotonados, detalle de trabilla en el hombro, vestido interior adjunto y botones dorados signature.',
  care: 'Solo limpieza en seco profesional.',
  material: 'Exterior: 60% Polyester, 40% Cotton. Vestido interior: 100% Polyester.',
  suitableFor:
    'Lujo diario, vestimenta diaria, viajes, salidas de café, trabajo, reuniones, vida urbana, looks de fin de semana, outerwear modesto, casual elegante, y vida entre el Golfo, Europa y más allá.',
}

const KNIGHTSBRIDGE_FACTS_RU: Facts = {
  productType: 'Свободная жакет-абайя, вдохновлённая современным outerwear',
  productCategory: 'Абайя, Жакет-абайя, Outerwear, Длинный жакет, Скромный outerwear',
  fit: 'Свободная посадка с силуэтом в стиле жакета, созданным для многослойности.',
  maximumGarmentLength: '143 см / 56.3 дюйма',
  modelHeight: '160 см / 63 дюйма',
  modelWears: 'XS',
  closure: 'Скрытая передняя застёжка на пуговицах',
  pockets: 'Два нагрудных кармана и два скрытых боковых кармана',
  personalisation:
    'Опциональная персонализация на скрытой внутренней бирке с именем, датой или значимым сообщением.',
  lining: 'Прикреплённое внутреннее платье из 100% Polyester',
  innerDress: 'Прикреплённое внутреннее платье из 100% Polyester',
  trim:
    'Тканые детали в стиле Khous на нагрудных карманах и манжетах, вдохновлённые традиционным эмиратским искусством плетения пальмовых листьев; фирменные золотистые пуговицы Bint Saeed Knotted Lines of Lineage на нагрудных карманах и манжетах.',
  stylingDetail:
    'Свободная жакет-абайя с заострённым воротником, скрытой передней застёжкой на пуговицах, нагрудными карманами, скрытыми боковыми карманами, ткаными деталями в стиле Khous, манжетами на пуговицах, деталями плечевой паты, прикреплённым внутренним платьем и фирменными золотистыми пуговицами.',
  care: 'Только профессиональная сухая чистка.',
  material: 'Верх: 60% Polyester, 40% Cotton. Внутреннее платье: 100% Polyester.',
  suitableFor:
    'Повседневной роскоши, ежедневных образов, путешествий, встреч в кофейнях, работы, встреч, городской жизни, образов выходного дня, скромного outerwear, элегантного casual и жизни между Персидским заливом, Европой и не только.',
}

const KNIGHTSBRIDGE_FACTS_ZH: Facts = {
  productType: '受现代外套风格启发的宽松夹克式阿巴亚',
  productCategory: 'Abaya、夹克式 Abaya、外套、长夹克、端庄外套',
  fit: '宽松版型，采用夹克灵感廓形，便于叠穿。',
  maximumGarmentLength: '143 厘米 / 56.3 英寸',
  modelHeight: '160 厘米 / 63 英寸',
  modelWears: 'XS',
  closure: '隐藏式前门襟纽扣开合',
  pockets: '两个胸袋与两个隐藏侧袋',
  personalisation: '可选个性化服务：在隐藏内侧标签上添加姓名、日期或有意义的信息。',
  lining: '附带 100% Polyester 内搭连衣裙',
  innerDress: '附带 100% Polyester 内搭连衣裙',
  trim:
    '胸袋与袖口采用受 Khous 启发的织纹细节，源自阿联酋传统棕榈叶编织艺术；胸袋与袖口配有 Bint Saeed 标志性金色 Knotted Lines of Lineage 纽扣。',
  stylingDetail:
    '宽松夹克式阿巴亚，配尖领、隐藏式前门襟纽扣开合、胸袋、隐藏侧袋、受 Khous 启发的织纹细节、纽扣袖口、肩部袢带细节、附带内搭连衣裙与标志性金色纽扣。',
  care: '仅限专业干洗。',
  material: '外层：60% Polyester，40% Cotton。内搭连衣裙：100% Polyester。',
  suitableFor:
    '适合日常奢华、每日穿搭、旅行、咖啡会面、工作、会议、都市生活、周末穿搭、端庄外套、优雅休闲风，以及往返海湾地区、欧洲及更远地区的生活方式。',
}

const KNIGHTSBRIDGE_FACTS_DE: Facts = {
  productType: 'Relaxte Jacket-Abaya, inspiriert von zeitgenössischer Oberbekleidung',
  productCategory: 'Abaya, Jacket-Abaya, Oberbekleidung, Lange Jacke, Dezente Oberbekleidung',
  fit: 'Relaxte Passform mit von der Jacke inspirierter Silhouette, entworfen für Layering.',
  maximumGarmentLength: '143 cm / 56.3 Zoll',
  modelHeight: '160 cm / 63 Zoll',
  modelWears: 'XS',
  closure: 'Verdeckter vorderer Knopfverschluss',
  pockets: 'Zwei Brusttaschen und zwei verdeckte Seitentaschen',
  personalisation:
    'Optionale Personalisierung auf einem verdeckten Innenetikett mit Name, Datum oder bedeutungsvoller Botschaft.',
  lining: 'Integriertes Innenkleid aus 100% Polyester',
  innerDress: 'Integriertes Innenkleid aus 100% Polyester',
  trim:
    'Von Khous inspirierte Webdetails an Brusttaschen und Manschetten, abgeleitet von der traditionellen emiratischen Kunst des Flechtens von Palmwedeln; goldfarbene Signature-Knöpfe von Bint Saeed Knotted Lines of Lineage an Brusttaschen und Manschetten.',
  stylingDetail:
    'Relaxte Jacket-Abaya mit Spitzkragen, verdecktem vorderem Knopfverschluss, Brusttaschen, verdeckten Seitentaschen, von Khous inspirierten Webdetails, geknöpften Manschetten, Schulterlaschen-Details, integriertem Innenkleid und goldfarbenen Signature-Knöpfen.',
  care: 'Nur professionelle chemische Reinigung.',
  material: 'Außen: 60% Polyester, 40% Cotton. Innenkleid: 100% Polyester.',
  suitableFor:
    'Alltagsluxus, tägliches Styling, Reisen, Coffee-Outings, Arbeit, Meetings, Stadtleben, Wochenendlooks, dezente Oberbekleidung, eleganten Casual-Stil und ein Leben zwischen dem Golf, Europa und darüber hinaus.',
}

const KNIGHTSBRIDGE_FACTS_NL: Facts = {
  productType: 'Relaxte jacket abaya, geïnspireerd op eigentijdse outerwear',
  productCategory: 'Abaya, Jacket abaya, Outerwear, Lange jas, Bescheiden outerwear',
  fit: 'Relaxte pasvorm met een op een jacket geïnspireerd silhouet, ontworpen voor layering.',
  maximumGarmentLength: '143 cm / 56.3 inch',
  modelHeight: '160 cm / 63 inch',
  modelWears: 'XS',
  closure: 'Verborgen knoopsluiting aan de voorkant',
  pockets: 'Twee borstzakken en twee verborgen zijzakken',
  personalisation:
    'Optionele personalisatie op een verborgen binnenlabel met een naam, datum of betekenisvolle boodschap.',
  lining: 'Vaste binnenjurk van 100% Polyester',
  innerDress: 'Vaste binnenjurk van 100% Polyester',
  trim:
    'Khous-geinspireerde geweven details op de borstzakken en manchetten, afgeleid van de traditionele Emirati-kunst van palmbladweven; goudkleurige signature-knopen van Bint Saeed Knotted Lines of Lineage op de borstzakken en manchetten.',
  stylingDetail:
    'Relaxte jacket abaya met puntkraag, verborgen knoopsluiting aan de voorkant, borstzakken, verborgen zijzakken, Khous-geinspireerde geweven details, manchetten met knopen, schoudertab-details, vaste binnenjurk en goudkleurige signature-knopen.',
  care: 'Alleen professioneel stomen.',
  material: 'Buitenkant: 60% Polyester, 40% Cotton. Binnenjurk: 100% Polyester.',
  suitableFor:
    'Alledaagse luxe, dagelijkse styling, reizen, koffie-uitjes, werk, meetings, stadsleven, weekendkleding, bescheiden outerwear, elegante casual wear en het leven tussen de Golf, Europa en daarbuiten.',
}

const KNIGHTSBRIDGE_FACTS_PT: Facts = {
  productType: 'Abaya casaco descontraída inspirada em outerwear contemporânea',
  productCategory: 'Abaya, Abaya casaco, Outerwear, Casaco comprido, Outerwear modesta',
  fit: 'Corte descontraído com silhueta inspirada em casaco, concebida para sobreposição de camadas.',
  maximumGarmentLength: '143 cm / 56.3 polegadas',
  modelHeight: '160 cm / 63 polegadas',
  modelWears: 'XS',
  closure: 'Fecho frontal oculto com botões',
  pockets: 'Dois bolsos no peito e dois bolsos laterais ocultos',
  personalisation:
    'Personalização opcional numa etiqueta interior oculta com nome, data ou mensagem significativa.',
  lining: 'Vestido interior anexado em 100% Polyester',
  innerDress: 'Vestido interior anexado em 100% Polyester',
  trim:
    'Detalhe tecido inspirado em Khous nos bolsos do peito e nos punhos, derivado da arte tradicional emiradense de tecelagem de folhas de palmeira; botões dourados signature Bint Saeed Knotted Lines of Lineage nos bolsos do peito e nos punhos.',
  stylingDetail:
    'Abaya casaco descontraída com gola pontiaguda, fecho frontal oculto com botões, bolsos no peito, bolsos laterais ocultos, detalhe tecido inspirado em Khous, punhos abotoados, detalhe de pala no ombro, vestido interior anexado e botões dourados signature.',
  care: 'Apenas limpeza a seco profissional.',
  material: 'Exterior: 60% Polyester, 40% Cotton. Vestido interior: 100% Polyester.',
  suitableFor:
    'Luxo quotidiano, vestir diário, viagens, saídas para café, trabalho, reuniões, vida urbana, looks de fim de semana, outerwear modesta, casual elegante, e vida entre o Golfo, a Europa e além.',
}

const KNIGHTSBRIDGE_FAQ_EN: Faq = [
  {
    question: 'What makes the Khous Jacket Abaya different from other abayas?',
    answer:
      'The Khous Jacket Abaya sits between an abaya and a jacket, combining the ease of traditional dressing with the confidence of contemporary outerwear. Its relaxed silhouette, structured shoulders, four functional pockets, and signature detailing create a piece designed for everyday life rather than occasional wear.',
  },
  {
    question: 'How can the Khous Jacket Abaya be styled?',
    answer:
      'Designed for versatility, it can be worn over dresses, tailoring, knitwear, tracksuits, and everyday attire. Whether paired with sneakers, flats, or heels, it adapts naturally to travel, work, coffee outings, and daily life.',
  },
  {
    question: 'Why was the Khous Jacket Abaya designed with a jacket-inspired silhouette?',
    answer:
      'The Khous Jacket Abaya was created for women who move between different roles, cities, and environments throughout their day. Inspired by the versatility of outerwear, it offers a silhouette that feels confident, practical, and effortless while maintaining the elegance of an abaya.',
  },
  {
    question: 'What is Al Khous and how is it reflected in the Khous Jacket Abaya?',
    answer:
      'Al Khous is the traditional Emirati art of weaving palm fronds, a craft passed down through generations. The Khous Jacket Abaya draws inspiration from this heritage through textured detailing across the chest pockets and cuffs, reinterpreted through contemporary design.',
  },
  {
    question: 'Can the Khous Jacket Abaya be personalised?',
    answer:
      'Yes. Like all Bint Saeed abayas, the Khous Jacket Abaya can be personalised with a hidden interior label featuring a name, date, or meaningful message, making it especially meaningful for gifting, celebrations, and personal milestones.',
  },
]

const KNIGHTSBRIDGE_FAQ_ID: Faq = [
  {
    question: 'Apa yang membuat Abaya Jaket Khous berbeda dari abaya lainnya?',
    answer:
      'Abaya Jaket Khous berada di antara abaya dan jaket, menggabungkan kemudahan berpakaian tradisional dengan kepercayaan diri pakaian luar kontemporer. Siluet santainya, bahu terstruktur, empat saku fungsional, dan detail khas menciptakan karya yang dirancang untuk kehidupan sehari-hari, bukan pemakaian sesekali.',
  },
  {
    question: 'Bagaimana Abaya Jaket Khous dapat distyling?',
    answer:
      'Dirancang untuk serbaguna, dapat dikenakan di atas gaun, tailoring, knitwear, tracksuit, dan pakaian sehari-hari. Baik dipadukan dengan sneakers, flats, atau heels, ia beradaptasi secara alami untuk perjalanan, kerja, kopi, dan kehidupan harian.',
  },
  {
    question: 'Mengapa Abaya Jaket Khous dirancang dengan siluet terinspirasi jaket?',
    answer:
      'Abaya Jaket Khous diciptakan untuk wanita yang bergerak antara peran, kota, dan lingkungan yang berbeda sepanjang hari. Terinspirasi serbagunanya pakaian luar, ia menawarkan siluet yang terasa percaya diri, praktis, dan effortless sambil mempertahankan keanggunan abaya.',
  },
  {
    question: 'Apa itu Al Khous dan bagaimana tercermin pada Abaya Jaket Khous?',
    answer:
      'Al Khous adalah seni tradisional Emirati menganyam pelepah palem, kerajinan yang diwariskan lintas generasi. Abaya Jaket Khous mengambil inspirasi dari warisan ini melalui detail bertekstur di saku dada dan manset, diinterpretasikan melalui desain kontemporer.',
  },
  {
    question: 'Apakah Abaya Jaket Khous dapat dipersonalisasi?',
    answer:
      'Ya. Seperti semua abaya Bint Saeed, Abaya Jaket Khous dapat dipersonalisasi dengan label interior tersembunyi berisi nama, tanggal, atau pesan bermakna, sangat berarti untuk hadiah, perayaan, dan pencapaian pribadi.',
  },
]

const KNIGHTSBRIDGE_FAQ_MS: Faq = [
  {
    question: 'Apakah yang membezakan Abaya Jaket Khous daripada abaya lain?',
    answer:
      'Abaya Jaket Khous berada di antara abaya dan jaket, menggabungkan kemudahan pemakaian tradisional dengan keyakinan pakaian luar kontemporari. Siluet santainya, bahu berstruktur, empat poket fungsional, dan perincian khas mewujudkan sekeping yang direka untuk kehidupan harian, bukan pemakaian sekali-sekala.',
  },
  {
    question: 'Bagaimanakah Abaya Jaket Khous boleh digayakan?',
    answer:
      'Direka untuk serba guna, ia boleh dipakai di atas gaun, tailoring, knitwear, tracksuit, dan pakaian harian. Sama ada digandingkan dengan sneakers, flats, atau heels, ia menyesuaikan diri secara semula jadi untuk perjalanan, kerja, kopi, dan kehidupan harian.',
  },
  {
    question: 'Mengapakah Abaya Jaket Khous direka dengan siluet berinspirasi jaket?',
    answer:
      'Abaya Jaket Khous dicipta untuk wanita yang bergerak antara peranan, bandar, dan persekitaran yang berbeza sepanjang hari. Terinspirasi serba gunanya pakaian luar, ia menawarkan siluet yang terasa yakin, praktikal, dan effortless sambil mengekalkan keanggunan abaya.',
  },
  {
    question: 'Apakah Al Khous dan bagaimana ia tercermin pada Abaya Jaket Khous?',
    answer:
      'Al Khous ialah seni tradisional Emirati dalam menenun pelepah palma, kraftangan yang diwarisi turun-temurun. Abaya Jaket Khous mengambil inspirasi daripada warisan ini melalui perincian bertekstur di poket dada dan manset, ditafsirkan melalui reka bentuk kontemporari.',
  },
  {
    question: 'Bolehkah Abaya Jaket Khous diperibadikan?',
    answer:
      'Ya. Seperti semua abaya Bint Saeed, Abaya Jaket Khous boleh diperibadikan dengan label dalaman tersembunyi yang menampilkan nama, tarikh, atau mesej bermakna, menjadikannya sangat bermakna untuk hadiah, perayaan, dan pencapaian peribadi.',
  },
]

const KNIGHTSBRIDGE_FAQ_AR: Faq = [
  {
    question: 'ما الذي يجعل Khous Jacket Abaya مختلفاً عن العبايات الأخرى؟',
    answer:
      'يقع Khous Jacket Abaya بين العباية والجاكيت، جامعاً بين سهولة اللباس التقليدي وثقة الملابس الخارجية المعاصرة. يمنحك تصميمه المريح، وأكتافه المنظمة، وجيوبه العملية الأربع، وتفاصيله المميزة قطعة صُممت للحياة اليومية لا للمناسبات فقط.',
  },
  {
    question: 'كيف يمكن تنسيق Khous Jacket Abaya؟',
    answer:
      'صُمم ليكون متعدد الاستخدامات، ويمكن ارتداؤه فوق الفساتين، والملابس المفصلة، وقطع الـ knitwear، والـ tracksuits، والإطلالات اليومية. سواء نُسّق مع sneakers أو flats أو heels، فإنه يتكيف طبيعياً مع السفر والعمل وخروجات القهوة والحياة اليومية.',
  },
  {
    question: 'لماذا صُمم Khous Jacket Abaya بقصة مستوحاة من الجاكيت؟',
    answer:
      'تم ابتكار Khous Jacket Abaya للنساء اللواتي ينتقلن بين أدوار ومدن وبيئات مختلفة خلال اليوم. وبإلهام من مرونة الملابس الخارجية، يقدم قصة تجمع بين الثقة والعملية والانسيابية مع الحفاظ على أناقة العباية.',
  },
  {
    question: 'ما هو Al Khous وكيف ينعكس في Khous Jacket Abaya؟',
    answer:
      'Al Khous هو الفن الإماراتي التقليدي لنسج سعف النخيل، وهي حرفة متوارثة عبر الأجيال. يستلهم Khous Jacket Abaya هذا الإرث من خلال تفاصيل ملمسية على جيوب الصدر والأساور، أعيد تقديمها بروح تصميم معاصر.',
  },
  {
    question: 'هل يمكن تخصيص Khous Jacket Abaya؟',
    answer:
      'نعم. مثل جميع عبايات Bint Saeed، يمكن تخصيص Khous Jacket Abaya ببطاقة داخلية مخفية تحمل اسماً أو تاريخاً أو رسالة ذات معنى، ما يجعله مميزاً للهدايا والاحتفالات والمحطات الشخصية.',
  },
]

const KNIGHTSBRIDGE_FAQ_FR: Faq = [
  {
    question: 'Qu\'est-ce qui distingue la Khous Jacket Abaya des autres abayas ?',
    answer:
      'La Khous Jacket Abaya se situe entre l\'abaya et la veste, en associant l\'aisance de l\'habit traditionnel à l\'assurance d\'une outerwear contemporaine. Sa silhouette décontractée, ses épaules structurées, ses quatre poches fonctionnelles et ses détails signature en font une pièce pensée pour la vie quotidienne plutôt que pour des occasions ponctuelles.',
  },
  {
    question: 'Comment porter la Khous Jacket Abaya ?',
    answer:
      'Pensée pour la polyvalence, elle se porte sur des robes, du tailoring, du knitwear, des tracksuits et des tenues de tous les jours. Avec des sneakers, des flats ou des heels, elle s\'adapte naturellement aux voyages, au travail, aux sorties café et à la vie quotidienne.',
  },
  {
    question: 'Pourquoi la Khous Jacket Abaya a-t-elle été conçue avec une silhouette inspirée de la veste ?',
    answer:
      'La Khous Jacket Abaya a été créée pour les femmes qui passent entre différents rôles, villes et environnements au fil de la journée. Inspirée par la polyvalence de l\'outerwear, elle offre une silhouette à la fois assurée, pratique et effortless tout en conservant l\'élégance d\'une abaya.',
  },
  {
    question: 'Qu\'est-ce que Al Khous et comment cela se reflète-t-il dans la Khous Jacket Abaya ?',
    answer:
      'Al Khous est l\'art émirati traditionnel du tressage de feuilles de palmier, un savoir-faire transmis de génération en génération. La Khous Jacket Abaya s\'inspire de cet héritage à travers des détails texturés sur les poches poitrine et les poignets, réinterprétés dans un design contemporain.',
  },
  {
    question: 'La Khous Jacket Abaya peut-elle être personnalisée ?',
    answer:
      'Oui. Comme toutes les abayas Bint Saeed, la Khous Jacket Abaya peut être personnalisée avec une étiquette intérieure cachée portant un nom, une date ou un message significatif, ce qui la rend particulièrement précieuse pour les cadeaux, les célébrations et les étapes personnelles.',
  },
]

const KNIGHTSBRIDGE_FAQ_IT: Faq = [
  {
    question: 'Cosa rende la Khous Jacket Abaya diversa dalle altre abaya?',
    answer:
      'La Khous Jacket Abaya si colloca tra un\'abaya e una giacca, unendo la facilità dell\'abbigliamento tradizionale alla sicurezza del capospalla contemporaneo. La sua silhouette rilassata, le spalle strutturate, le quattro tasche funzionali e i dettagli signature creano un capo pensato per la vita quotidiana, non solo per occasioni sporadiche.',
  },
  {
    question: 'Come si può abbinare la Khous Jacket Abaya?',
    answer:
      'Pensata per la versatilità, può essere indossata su abiti, tailoring, knitwear, tracksuit e look di tutti i giorni. Con sneakers, flats o heels, si adatta naturalmente a viaggi, lavoro, uscite al caffè e vita quotidiana.',
  },
  {
    question: 'Perché la Khous Jacket Abaya è stata disegnata con una silhouette ispirata alla giacca?',
    answer:
      'La Khous Jacket Abaya è stata creata per donne che si muovono tra ruoli, città e ambienti diversi durante la giornata. Ispirata alla versatilità dell\'outerwear, offre una silhouette sicura, pratica ed effortless mantenendo l\'eleganza dell\'abaya.',
  },
  {
    question: 'Che cos\'è Al Khous e come si riflette nella Khous Jacket Abaya?',
    answer:
      'Al Khous è l\'arte emiratina tradizionale dell\'intreccio delle foglie di palma, una lavorazione tramandata di generazione in generazione. La Khous Jacket Abaya trae ispirazione da questa eredità attraverso dettagli testurizzati su tasche sul petto e polsini, reinterpretati in chiave contemporanea.',
  },
  {
    question: 'La Khous Jacket Abaya può essere personalizzata?',
    answer:
      'Sì. Come tutte le abaya Bint Saeed, la Khous Jacket Abaya può essere personalizzata con un\'etichetta interna nascosta che riporta un nome, una data o un messaggio significativo, rendendola particolarmente speciale per regali, celebrazioni e traguardi personali.',
  },
]

const KNIGHTSBRIDGE_FAQ_ES: Faq = [
  {
    question: '¿Qué hace diferente a la Khous Jacket Abaya frente a otras abayas?',
    answer:
      'La Khous Jacket Abaya se sitúa entre una abaya y una chaqueta, combinando la facilidad de la vestimenta tradicional con la confianza del outerwear contemporáneo. Su silueta relajada, hombros estructurados, cuatro bolsillos funcionales y detalles signature crean una pieza diseñada para la vida diaria en lugar de uso ocasional.',
  },
  {
    question: '¿Cómo se puede estilizar la Khous Jacket Abaya?',
    answer:
      'Diseñada para la versatilidad, puede llevarse sobre vestidos, tailoring, knitwear, tracksuits y looks diarios. Ya sea con sneakers, flats o heels, se adapta de forma natural a viajes, trabajo, salidas de café y vida cotidiana.',
  },
  {
    question: '¿Por qué la Khous Jacket Abaya se diseñó con una silueta inspirada en chaqueta?',
    answer:
      'La Khous Jacket Abaya fue creada para mujeres que se mueven entre distintos roles, ciudades y entornos a lo largo del día. Inspirada en la versatilidad del outerwear, ofrece una silueta con confianza, practicidad y un aire effortless, manteniendo la elegancia de una abaya.',
  },
  {
    question: '¿Qué es Al Khous y cómo se refleja en la Khous Jacket Abaya?',
    answer:
      'Al Khous es el arte tradicional emiratí de tejer hojas de palma, una artesanía transmitida de generación en generación. La Khous Jacket Abaya toma inspiración de este legado mediante detalles texturizados en bolsillos del pecho y puños, reinterpretados con diseño contemporáneo.',
  },
  {
    question: '¿Se puede personalizar la Khous Jacket Abaya?',
    answer:
      'Sí. Como todas las abayas de Bint Saeed, la Khous Jacket Abaya puede personalizarse con una etiqueta interior oculta con un nombre, fecha o mensaje significativo, lo que la hace especialmente valiosa para regalos, celebraciones y hitos personales.',
  },
]

const KNIGHTSBRIDGE_FAQ_RU: Faq = [
  {
    question: 'Чем Khous Jacket Abaya отличается от других абай?',
    answer:
      'Khous Jacket Abaya находится между абайей и жакетом, сочетая лёгкость традиционного образа с уверенностью современного outerwear. Свободный силуэт, структурные плечи, четыре функциональных кармана и фирменные детали создают вещь, рассчитанную на повседневную жизнь, а не на редкие случаи.',
  },
  {
    question: 'Как стилизовать Khous Jacket Abaya?',
    answer:
      'Модель создана для универсальности: её можно носить поверх платьев, tailoring, knitwear, tracksuits и повседневных образов. В сочетании со sneakers, flats или heels она естественно подходит для путешествий, работы, встреч в кофейнях и ежедневной жизни.',
  },
  {
    question: 'Почему Khous Jacket Abaya создана с силуэтом в стиле жакета?',
    answer:
      'Khous Jacket Abaya создана для женщин, которые в течение дня переходят между разными ролями, городами и средами. Вдохновлённая универсальностью outerwear, она предлагает силуэт, который ощущается уверенно, практично и effortless, сохраняя элегантность абайи.',
  },
  {
    question: 'Что такое Al Khous и как это отражено в Khous Jacket Abaya?',
    answer:
      'Al Khous — традиционное эмиратское искусство плетения пальмовых листьев, ремесло, передающееся из поколения в поколение. Khous Jacket Abaya вдохновляется этим наследием через фактурные детали на нагрудных карманах и манжетах, переосмысленные в современном дизайне.',
  },
  {
    question: 'Можно ли персонализировать Khous Jacket Abaya?',
    answer:
      'Да. Как и все абайи Bint Saeed, Khous Jacket Abaya можно персонализировать скрытой внутренней биркой с именем, датой или значимым сообщением, что делает её особенно ценной для подарков, торжеств и личных этапов.',
  },
]

const KNIGHTSBRIDGE_FAQ_ZH: Faq = [
  {
    question: 'Khous Jacket Abaya 与其他 abaya 有什么不同？',
    answer:
      'Khous Jacket Abaya 介于 abaya 与夹克之间，将传统着装的轻松感与现代外套的自信感结合在一起。它拥有宽松廓形、结构化肩线、四个功能口袋与标志性细节，专为日常生活而非偶尔穿着而设计。',
  },
  {
    question: 'Khous Jacket Abaya 可以如何搭配？',
    answer:
      '它为多场景穿搭而设计，可叠穿于连衣裙、tailoring、knitwear、tracksuits 与日常服饰之外。无论搭配 sneakers、flats 还是 heels，都能自然适配旅行、工作、咖啡会面与日常生活。',
  },
  {
    question: '为什么 Khous Jacket Abaya 采用夹克灵感廓形设计？',
    answer:
      'Khous Jacket Abaya 为在一天中切换不同角色、城市与环境的女性而打造。受外套多功能性启发，它在保持 abaya 优雅气质的同时，提供自信、实用且 effortless 的廓形体验。',
  },
  {
    question: 'Al Khous 是什么？它如何体现在 Khous Jacket Abaya 中？',
    answer:
      'Al Khous 是阿联酋传统的棕榈叶编织艺术，这项工艺代代相传。Khous Jacket Abaya 从这一文化传承中汲取灵感，在胸袋与袖口加入纹理细节，并以当代设计语言重新诠释。',
  },
  {
    question: 'Khous Jacket Abaya 可以个性化定制吗？',
    answer:
      '可以。与所有 Bint Saeed abaya 一样，Khous Jacket Abaya 可在隐藏内侧标签上加入姓名、日期或有意义的信息，因此尤其适合作为礼物、庆祝时刻与个人里程碑之选。',
  },
]

const KNIGHTSBRIDGE_FAQ_DE: Faq = [
  {
    question: 'Was unterscheidet die Khous Jacket Abaya von anderen Abayas?',
    answer:
      'Die Khous Jacket Abaya liegt zwischen Abaya und Jacke und verbindet die Leichtigkeit traditioneller Kleidung mit der Souveränität zeitgenössischer Oberbekleidung. Ihre relaxte Silhouette, strukturierte Schultern, vier funktionale Taschen und Signature-Details schaffen ein Piece für den Alltag statt für seltene Anlässe.',
  },
  {
    question: 'Wie kann die Khous Jacket Abaya gestylt werden?',
    answer:
      'Sie wurde auf Vielseitigkeit ausgelegt und kann über Kleidern, Tailoring, Knitwear, Tracksuits und Alltagslooks getragen werden. Ob mit Sneakers, Flats oder Heels kombiniert, sie passt sich natürlich an Reisen, Arbeit, Coffee-Outings und den täglichen Rhythmus an.',
  },
  {
    question: 'Warum wurde die Khous Jacket Abaya mit einer von Jacken inspirierten Silhouette entworfen?',
    answer:
      'Die Khous Jacket Abaya wurde für Frauen geschaffen, die im Laufe ihres Tages zwischen unterschiedlichen Rollen, Städten und Umfeldern wechseln. Inspiriert von der Vielseitigkeit von Outerwear bietet sie eine Silhouette, die selbstbewusst, praktisch und effortless wirkt und zugleich die Eleganz einer Abaya bewahrt.',
  },
  {
    question: 'Was ist Al Khous und wie spiegelt es sich in der Khous Jacket Abaya wider?',
    answer:
      'Al Khous ist die traditionelle emiratische Kunst des Flechtens von Palmwedeln, ein Handwerk, das über Generationen weitergegeben wurde. Die Khous Jacket Abaya greift dieses Erbe durch texturierte Details an Brusttaschen und Manschetten auf und interpretiert es im zeitgenössischen Design neu.',
  },
  {
    question: 'Kann die Khous Jacket Abaya personalisiert werden?',
    answer:
      'Ja. Wie alle Abayas von Bint Saeed kann die Khous Jacket Abaya mit einem versteckten Innenetikett personalisiert werden, das einen Namen, ein Datum oder eine bedeutungsvolle Botschaft trägt. Dadurch ist sie besonders wertvoll für Geschenke, Feiern und persönliche Meilensteine.',
  },
]

const KNIGHTSBRIDGE_FAQ_NL: Faq = [
  {
    question: 'Wat maakt de Khous Jacket Abaya anders dan andere abaya\'s?',
    answer:
      'De Khous Jacket Abaya zit tussen een abaya en een jacket in en combineert het gemak van traditionele kleding met het zelfvertrouwen van eigentijdse outerwear. Het relaxte silhouet, de gestructureerde schouders, vier functionele zakken en signature-details maken dit een stuk voor het dagelijks leven in plaats van incidenteel gebruik.',
  },
  {
    question: 'Hoe kan de Khous Jacket Abaya gestyled worden?',
    answer:
      'Ontworpen voor veelzijdigheid kan ze gedragen worden over jurken, tailoring, knitwear, tracksuits en dagelijkse outfits. Met sneakers, flats of heels past ze zich vanzelf aan voor reizen, werk, koffie-afspraken en het dagelijks leven.',
  },
  {
    question: 'Waarom werd de Khous Jacket Abaya ontworpen met een op een jacket geinspireerd silhouet?',
    answer:
      'De Khous Jacket Abaya werd gemaakt voor vrouwen die gedurende hun dag bewegen tussen verschillende rollen, steden en omgevingen. Geinspireerd door de veelzijdigheid van outerwear biedt ze een silhouet dat zelfverzekerd, praktisch en effortless aanvoelt, terwijl de elegantie van een abaya behouden blijft.',
  },
  {
    question: 'Wat is Al Khous en hoe komt dit terug in de Khous Jacket Abaya?',
    answer:
      'Al Khous is de traditionele Emirati-kunst van het vlechten van palmbladeren, een ambacht dat van generatie op generatie is doorgegeven. De Khous Jacket Abaya haalt inspiratie uit dit erfgoed via getextureerde details op de borstzakken en manchetten, opnieuw geïnterpreteerd in een eigentijds design.',
  },
  {
    question: 'Kan de Khous Jacket Abaya gepersonaliseerd worden?',
    answer:
      'Ja. Net als alle abaya\'s van Bint Saeed kan de Khous Jacket Abaya gepersonaliseerd worden met een verborgen binnenlabel met een naam, datum of betekenisvolle boodschap, waardoor ze extra bijzonder is voor cadeaus, vieringen en persoonlijke mijlpalen.',
  },
]

const KNIGHTSBRIDGE_FAQ_PT: Faq = [
  {
    question: 'O que torna a Khous Jacket Abaya diferente de outras abayas?',
    answer:
      'A Khous Jacket Abaya posiciona-se entre uma abaya e um casaco, combinando a facilidade do vestir tradicional com a confiança de uma outerwear contemporânea. A sua silhueta descontraída, ombros estruturados, quatro bolsos funcionais e detalhes signature criam uma peça pensada para o dia a dia e não apenas para uso ocasional.',
  },
  {
    question: 'Como pode a Khous Jacket Abaya ser estilizada?',
    answer:
      'Concebida para versatilidade, pode ser usada sobre vestidos, tailoring, knitwear, tracksuits e looks diários. Quer combinada com sneakers, flats ou heels, adapta-se naturalmente a viagens, trabalho, saídas para café e vida quotidiana.',
  },
  {
    question: 'Porque foi a Khous Jacket Abaya desenhada com uma silhueta inspirada em casaco?',
    answer:
      'A Khous Jacket Abaya foi criada para mulheres que se movem entre diferentes papéis, cidades e ambientes ao longo do dia. Inspirada pela versatilidade da outerwear, oferece uma silhueta confiante, prática e effortless, mantendo a elegância de uma abaya.',
  },
  {
    question: 'O que é Al Khous e como se reflete na Khous Jacket Abaya?',
    answer:
      'Al Khous é a arte tradicional emiradense de tecer folhas de palmeira, um ofício passado de geração em geração. A Khous Jacket Abaya inspira-se nesta herança através de detalhes texturados nos bolsos do peito e nos punhos, reinterpretados com design contemporâneo.',
  },
  {
    question: 'A Khous Jacket Abaya pode ser personalizada?',
    answer:
      'Sim. Tal como todas as abayas da Bint Saeed, a Khous Jacket Abaya pode ser personalizada com uma etiqueta interior oculta com nome, data ou mensagem significativa, tornando-a especialmente marcante para presentes, celebrações e marcos pessoais.',
  },
]

function knightsbridgePack(
  locale: AppLocale,
  facts: AbayaSchemaLocalePack['facts'],
  faq: AbayaSchemaLocalePack['faq'],
): AbayaSchemaLocalePack {
  return { facts, faq: patchAlKhousHeritageFaq(faq, 'knightsbridge-abaya-jacket', locale) }
}

export const KNIGHTSBRIDGE_SCHEMA_PACKS: Record<AppLocale, AbayaSchemaLocalePack> = {
  en: knightsbridgePack('en', KNIGHTSBRIDGE_FACTS_EN, KNIGHTSBRIDGE_FAQ_EN),
  ar: knightsbridgePack('ar', KNIGHTSBRIDGE_FACTS_AR, KNIGHTSBRIDGE_FAQ_AR),
  fr: knightsbridgePack('fr', KNIGHTSBRIDGE_FACTS_FR, KNIGHTSBRIDGE_FAQ_FR),
  it: knightsbridgePack('it', KNIGHTSBRIDGE_FACTS_IT, KNIGHTSBRIDGE_FAQ_IT),
  es: knightsbridgePack('es', KNIGHTSBRIDGE_FACTS_ES, KNIGHTSBRIDGE_FAQ_ES),
  ru: knightsbridgePack('ru', KNIGHTSBRIDGE_FACTS_RU, KNIGHTSBRIDGE_FAQ_RU),
  zh: knightsbridgePack('zh', KNIGHTSBRIDGE_FACTS_ZH, KNIGHTSBRIDGE_FAQ_ZH),
  de: knightsbridgePack('de', KNIGHTSBRIDGE_FACTS_DE, KNIGHTSBRIDGE_FAQ_DE),
  nl: knightsbridgePack('nl', KNIGHTSBRIDGE_FACTS_NL, KNIGHTSBRIDGE_FAQ_NL),
  pt: knightsbridgePack('pt', KNIGHTSBRIDGE_FACTS_PT, KNIGHTSBRIDGE_FAQ_PT),
  id: knightsbridgePack('id', KNIGHTSBRIDGE_FACTS_ID, KNIGHTSBRIDGE_FAQ_ID),
  ms: knightsbridgePack('ms', KNIGHTSBRIDGE_FACTS_MS, KNIGHTSBRIDGE_FAQ_MS),
}
