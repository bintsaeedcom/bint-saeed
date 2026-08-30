import type { AppLocale } from '@/lib/i18n/routing'
import { getHouseCodesDetailGroup } from '@/lib/products/pdpHouseCodesGroupsI18n'
import { PDP_COLOUR_TITLE } from '@/lib/products/pdpFeatureSectionTitles'
import type { PdpDetailGroup } from '@/lib/products/pdpIntroRich'
import { pdpStructuredStrings } from '@/lib/products/productPdpStructuredI18n'

const SHIRT_TITLE: Record<AppLocale, string> = {
  en: 'Shirt',
  ar: 'القميص',
  fr: 'Chemise',
  it: 'Camicia',
  es: 'Camisa',
  ru: 'Рубашка',
  zh: '衬衫',
  de: 'Hemd',
  nl: 'Overhemd',
  pt: 'Camisa',
  id: 'Kemeja',
  ms: 'Kemeja',
}

const MAXI_SKIRT_TITLE: Record<AppLocale, string> = {
  en: 'Satin Maxi Skirt',
  ar: 'التنورة الماكسي',
  fr: 'Jupe maxi',
  it: 'Gonna maxi',
  es: 'Falda maxi',
  ru: 'Юбка макси',
  zh: '缎面及地半裙',
  de: 'Maxirock',
  nl: 'Maxirok',
  pt: 'Saia maxi',
  id: 'Rok maxi',
  ms: 'Skirt maxi',
}

const GARMENT_JEWELLERY_TITLE: Record<AppLocale, string> = {
  en: 'Signature Garment Jewellery',
  ar: 'مجوهرات القطعة التوقيعية',
  fr: 'Bijouterie-garment signature',
  it: 'Garment jewellery signature',
  es: 'Joyería-garment signature',
  ru: 'Фирменные garment jewellery',
  zh: '标志性服装珠宝',
  de: 'Signature Garment Jewellery',
  nl: 'Signature garment jewellery',
  pt: 'Joalharia-garment signature',
  id: 'Garment jewellery signature',
  ms: 'Garment jewellery signature',
}

const GARMENT_JEWELLERY_ITEMS: Record<AppLocale, string[]> = {
  en: [
    'Interchangeable natural-stone garment jewellery at the shirt cuffs',
    'Includes genuine natural Onyx strands with the set',
    'Onyx strands are removable; shirt can be worn with or without them',
    'Exchange for Colored Jade, Rose Quartz, Lapis Lazuli, Malachite and more — available separately',
  ],
  ar: [
    'شريطان من العقيق التوقيعيان مرفقان مع الطقم',
    'يتصل الشريطان مباشرة بالقميص',
    'خيوط أحجار طبيعية إضافية متوفرة بشكل منفصل من Signature Strands',
  ],
  fr: [
    'Deux fils Onyx signature inclus avec le set',
    'Les fils s’attachent directement à la chemise',
    'Fils en pierre naturelle supplémentaires disponibles séparément dans Signature Strands',
  ],
  it: [
    'Due fili in onice signature inclusi nel set',
    'I fili si agganciano direttamente alla camicia',
    'Fili in pietra naturale aggiuntivi disponibili separatamente in Signature Strands',
  ],
  es: [
    'Dos hebras de ónice signature incluidas con el set',
    'Las hebras se fijan directamente a la camisa',
    'Hebras de piedra natural adicionales disponibles por separado en Signature Strands',
  ],
  ru: [
    'Две фирменные нити из оникса в комплекте',
    'Нити крепятся непосредственно к рубашке',
    'Дополнительные нити из натурального камня — отдельно в коллекции Signature Strands',
  ],
  zh: [
    '衬衫袖口可更换天然石服饰珠宝',
    '套装附赠天然玛瑙链两条',
    '玛瑙链可取下；衬衫可配链或不配链穿着',
    '可更换为彩玉、玫瑰石英、青金石、孔雀石等天然石——另购',
  ],
  de: [
    'Zwei signature Onyx-Stränge im Set enthalten',
    'Stränge werden direkt am Hemd befestigt',
    'Weitere Naturstein-Stränge separat unter Signature Strands erhältlich',
  ],
  nl: [
    'Twee signature onyx strands inbegrepen bij het set',
    'Strands bevestigen direct aan het overhemd',
    'Extra natural stone strands apart via Signature Strands',
  ],
  pt: [
    'Duas strands de ónix signature incluídas no set',
    'As strands prendem-se diretamente à camisa',
    'Strands de pedra natural adicionais disponíveis separadamente em Signature Strands',
  ],
  id: [
    'Dua strand onyx signature termasuk dalam set',
    'Strand dipasang langsung ke kemeja',
    'Strand batu alami tambahan tersedia terpisah di Signature Strands',
  ],
  ms: [
    'Dua strand onyx signature disertakan dengan set',
    'Strand dipasang terus ke kemeja',
    'Strand batu semula jadi tambahan tersedia berasingan di Signature Strands',
  ],
}

const SHIRT_ITEMS: Record<AppLocale, string[]> = {
  en: [
    'Coordinating satin shirt in Champagne Cream',
    'Interchangeable natural-stone strands at the cuffs — jewellery for the garment itself',
    'Bint Saeed signature gold-tone Knotted Line buttons at the cuffs',
    'Front button fastening',
    'Wear with the coordinating skirt, or independently with tailoring, denim or your own wardrobe pieces',
  ],
  ar: [
    'بلوزة ساتان راقية بسيلويت نظيف يلامس الجسم بلطف',
    'إغلاق أمامي بأزرار',
    'أزرار Knotted Line الذهبية المميزة من Bint Saeed عند الأكمام',
    'ساتان ناعم بانسيابية أنيقة تلتقط الضوء',
    'صُممت لترتدى مع التنورة المنسّقة أو بشكل منفصل',
  ],
  fr: [
    'Blouse en satin raffinée à silhouette épurée et fluide',
    'Fermeture avant à boutons',
    'Boutons dorés signature Knotted Line de Bint Saeed aux poignets',
    'Satin souple à tombée élégante et lumineuse',
    'Conçue pour être portée avec la jupe coordonnée ou séparément',
  ],
  it: [
    'Blusa in raso raffinata con silhouette pulita e fluida',
    'Chiusura frontale con bottoni',
    'Bottoni dorati signature Knotted Line di Bint Saeed ai polsi',
    'Raso morbido con drappeggio elegante e luminoso',
    'Pensata per essere indossata con la gonna coordinata o da sola',
  ],
  es: [
    'Blusa de satén refinada con silueta limpia y fluida',
    'Cierre frontal con botones',
    'Botones dorados signature Knotted Line de Bint Saeed en los puños',
    'Satén suave con caída elegante y luminosa',
    'Diseñada para llevarse con la falda coordinada o por separado',
  ],
  ru: [
    'Изящная атласная блуза с чистым, мягко облегающим силуэтом',
    'Фронтальная застёжка на пуговицы',
    'Фирменные золотистые пуговицы Knotted Line от Bint Saeed на манжетах',
    'Мягкий атлас с элегантной, светлоотражающей драпировкой',
    'Создана для носки с координированной юбкой или отдельно',
  ],
  zh: [
    '香槟奶油色协调缎面衬衫',
    '袖口可更换天然石链饰——专为服饰而设计的珠宝',
    'BINT SAEED 承悦标志性金色调 Knotted Line 袖扣',
    '前襟纽扣',
    '可与配套半裙同穿，亦可与西裤、牛仔或衣橱单品单独搭配',
  ],
  de: [
    'Raffinierte Satinbluse mit klarer, sanft umspielender Silhouette',
    'Frontknopfleiste',
    'Bint Saeed Signatur-Knotted-Line-Knöpfe an den Manschetten in Goldoptik',
    'Weicher Satin mit elegantem, lichtreflektierendem Fall',
    'Zum Tragen mit dem Koordinationsrock oder separat gestylt',
  ],
  nl: [
    'Verfijnde satijnen blouse met strak, vloeiend silhouet',
    'Frontsluiting met knopen',
    'Bint Saeed signature goudkleurige Knotted Line-knopen aan de manchetten',
    'Zacht satijn met elegante, lichtvangende drape',
    'Ontworpen om te dragen met de coördinatierok of apart',
  ],
  pt: [
    'Blusa em cetim refinada com silhueta limpa e fluida',
    'Fecho frontal com botões',
    'Botões dourados signature Knotted Line da Bint Saeed nos punhos',
    'Cetim suave com caimento elegante e luminoso',
    'Concebida para usar com a saia coordenada ou separadamente',
  ],
  id: [
    'Blus satin halus dengan siluet bersih yang mengalir',
    'Penutup depan berkancing',
    'Kancing emas signature Knotted Line Bint Saeed di manset',
    'Satin lembut dengan drape elegan yang menangkap cahaya',
    'Dirancang dipakai dengan rok koordinat atau terpisah',
  ],
  ms: [
    'Blouse satin halus dengan siluet bersih mengalir',
    'Penutup hadapan berbutang',
    'Butang emas signature Knotted Line Bint Saeed di manset',
    'Satin lembut dengan jatuhan elegan menangkap cahaya',
    'Direka dipakai dengan skirt koordinat atau berasingan',
  ],
}

const MAXI_SKIRT_ITEMS: Record<AppLocale, string[]> = {
  en: [
    'Fluid long satin skirt in Champagne Cream',
    'Signature Al Talli-inspired detailing running through the skirt',
    'Gold waist trim with black-and-gold braided detail',
    'High-waisted floor-length silhouette',
    'Designed to pair with the coordinate shirt or styled separately',
  ],
  ar: [
    'تنورة ماكسي بطول الأرض بخصر مرتفع',
    'حاشية خصر ذهبية بتفصيل ضفيرة أسود وذهبي',
    'ساتان انسيابي بحركة رشيقة عند الحاشية',
    'خط نظيف من الخصر إلى الأرض',
    'صُممت لتُنسّق مع البلوزة أو بشكل منفصل',
  ],
  fr: [
    'Jupe maxi longueur sol à taille haute',
    'Galon doré à la taille avec détail tressé noir et or',
    'Satin fluide au mouvement gracieux au ourlet',
    'Ligne nette de la taille au sol',
    'Conçue pour s’associer à la blouse coordonnée ou seule',
  ],
  it: [
    'Gonna maxi a pavimento con vita alta',
    'Finitura dorata in vita con dettaglio intrecciato nero e oro',
    'Raso fluido con movimento aggraziato sull’orlo',
    'Linea pulita dalla vita al pavimento',
    'Pensata da abbinare alla blusa coordinata o da sola',
  ],
  es: [
    'Falda maxi de largo hasta el suelo con cintura alta',
    'Trim dorado en la cintura con detalle trenzado negro y dorado',
    'Satén fluido con movimiento gracioso en el bajo',
    'Línea limpia de cintura a suelo',
    'Diseñada para combinar con la blusa coordinada o por separado',
  ],
  ru: [
    'Юбка макси в пол с высокой талией',
    'Золотистая отделка на талии с чёрно-золотым плетёным деталем',
    'Fluidный атлас с грациозным движением у низа',
    'Чистая линия от талии до пола',
    'Создана для сочетания с координированной блузой или отдельно',
  ],
  zh: [
    '香槟奶油色飘逸缎面长裙',
    '贯穿半裙的标志性 Al Talli 灵感细节',
    '金色调腰饰，黑金编织细节',
    '高腰及地廓形',
    '可与配套衬衫同穿，亦可单独搭配',
  ],
  de: [
    'Hoch taillierter Maxirock in Bodenlänge',
    'Goldfarbene Taillenverzierung mit schwarz-goldener Flechtdetail',
    'Fließender Satin mit anmutiger Bewegung am Saum',
    'Klare Linie von der Taille bis zum Boden',
    'Zum Tragen mit der Koordinationsbluse oder separat',
  ],
  nl: [
    'High-waisted maxirok tot op de grond',
    'Gouden tailletrim met zwart-gouden vlechtdetail',
    'Vloeiend satijn met gracieuze beweging aan de zoom',
    'Strakke lijn van taille tot vloer',
    'Ontworpen om te combineren met de coördinatieblouse of apart',
  ],
  pt: [
    'Saia maxi comprimento chão com cintura alta',
    'Acabamento dourado na cintura com detalhe trançado preto e dourado',
    'Cetim fluido com movimento gracioso na barra',
    'Linha limpa da cintura ao chão',
    'Concebida para combinar com a blusa coordenada ou separadamente',
  ],
  id: [
    'Rok maxi panjang penuh dengan pinggang tinggi',
    'Trim pinggang emas dengan detail anyaman hitam-emas',
    'Satin mengalir dengan gerakan anggun di hem',
    'Garis bersih dari pinggang ke lantai',
    'Dirancang dipasangkan dengan blus koordinat atau terpisah',
  ],
  ms: [
    'Skirt maxi panjang penuh dengan pinggang tinggi',
    'Trim pinggang emas dengan butiran anyaman hitam-emas',
    'Satin mengalir dengan pergerakan anggun di hem',
    'Garis bersih dari pinggang ke lantai',
    'Direka digabungkan dengan blouse koordinat atau berasingan',
  ],
}

const FIT_SHIRT: Record<AppLocale, string> = {
  en: 'Shirt: refined fit skimming the body',
  ar: 'البلوزة: قصة راقية تلامس الجسم بلطف',
  fr: 'Blouse : coupe raffinée fluide sur le corps',
  it: 'Blusa: vestibilità raffinata che scivola sul corpo',
  es: 'Blusa: ajuste refinado que roza el cuerpo',
  ru: 'Блуза: изящная посадка, мягко облегающая силуэт',
  zh: '衬衫：精致贴合、轻抚身形',
  de: 'Bluse: raffinierter, sanft umspielender Sitz',
  nl: 'Blouse: verfijnde pasvorm langs het lichaam',
  pt: 'Blusa: caimento refinado sobre o corpo',
  id: 'Blus: pas refined mengalir di tubuh',
  ms: 'Blouse: potongan halus mengalir di badan',
}

const FIT_SKIRT: Record<AppLocale, string> = {
  en: 'Skirt: high-waisted floor-length silhouette',
  ar: 'التنورة: سيلويت بخصر مرتفع بطول الأرض',
  fr: 'Jupe : silhouette taille haute longueur sol',
  it: 'Gonna: silhouette a vita alta fino al pavimento',
  es: 'Falda: silueta de cintura alta hasta el suelo',
  ru: 'Юбка: силуэт с высокой талией до пола',
  zh: '半裙：高腰及地廓形',
  de: 'Rock: hoch taillierte Silhouette in Bodenlänge',
  nl: 'Rok: high-waisted silhouet tot op de grond',
  pt: 'Saia: silhueta de cintura alta até ao chão',
  id: 'Rok: siluet pinggang tinggi panjang penuh',
  ms: 'Skirt: siluet pinggang tinggi panjang penuh',
}

const MODEL_HEIGHT: Record<AppLocale, string> = {
  en: 'Model height: 160 cm / 63 inches',
  ar: 'طول العارضة: 160 سم / 63 بوصة',
  fr: 'Taille du mannequin : 160 cm / 63 pouces',
  it: 'Altezza modella: 160 cm / 63 pollici',
  es: 'Altura de la modelo: 160 cm / 63 pulgadas',
  ru: 'Рост модели: 160 см / 63 дюйма',
  zh: '模特身高：160 厘米 / 63 英寸',
  de: 'Modelgröße: 160 cm / 63 Zoll',
  nl: 'Model lengte: 160 cm / 63 inch',
  pt: 'Altura da modelo: 160 cm / 63 polegadas',
  id: 'Tinggi model: 160 cm / 63 inci',
  ms: 'Tinggi model: 160 cm / 63 inci',
}

const MODEL_WEAR_XS: Record<AppLocale, string> = {
  en: 'Model wears size XS',
  ar: 'العارضة ترتدي مقاس XS',
  fr: 'Le mannequin porte la taille XS',
  it: 'La modella indossa taglia XS',
  es: 'La modelo lleva talla XS',
  ru: 'На модели размер XS',
  zh: '模特穿着 XS 码',
  de: 'Das Model trägt Größe XS',
  nl: 'Model draagt maat XS',
  pt: 'A modelo usa tamanho XS',
  id: 'Model memakai ukuran XS',
  ms: 'Model memakai saiz XS',
}

const COMPOSITION: Record<AppLocale, string> = {
  en: 'Fabric composition — to be finalized with production.',
  ar: 'تركيبة القماش — سيتم اعتمادها نهائيًا مع الإنتاج.',
  fr: 'Composition du tissu — à finaliser avec la production.',
  it: 'Composizione del tessuto — da finalizzare con la produzione.',
  es: 'Composición de la tela — por finalizar con producción.',
  ru: 'Состав ткани — будет уточнён при производстве.',
  zh: '面料成分 — 将与生产最终确认。',
  de: 'Stoffzusammensetzung — wird mit der Produktion finalisiert.',
  nl: 'Stofsamenstelling — wordt definitief vastgesteld met productie.',
  pt: 'Composição do tecido — a finalizar com a produção.',
  id: 'Komposisi kain — akan difinalisasi bersama produksi.',
  ms: 'Komposisi kain — akan dimuktamadkan bersama pengeluaran.',
}

const CARE: Record<AppLocale, string> = {
  en: 'Professional dry clean only to preserve the satin, Knotted Line buttons, and delicate Al Talli detailing.',
  ar: 'تنظيف جاف احترافي فقط للحفاظ على الساتان وأزرار Knotted Line وتفاصيل التلي الرقيقة.',
  fr: 'Nettoyage à sec professionnel uniquement pour préserver le satin, les boutons Knotted Line et les détails Al Talli délicats.',
  it: 'Solo lavaggio a secco professionale per preservare il raso, i bottoni Knotted Line e i dettagli Al Talli.',
  es: 'Solo limpieza en seco profesional para preservar el satén, los botones Knotted Line y el detalle Al Talli.',
  ru: 'Только профессиональная химчистка для сохранения атласа, пуговиц Knotted Line и отделки Al Talli.',
  zh: '仅建议专业干洗，以保护缎面、Knotted Line 纽扣及精致的 Al Talli 灵感细节。',
  de: 'Nur professionelle Reinigung, um Satin, Knotted-Line-Knöpfe und filigrane Al-Talli-Details zu bewahren.',
  nl: 'Alleen professionele stomerij om het satijn, Knotted Line-knopen en delicate Al Talli-details te behouden.',
  pt: 'Apenas limpeza a seco profissional para preservar o cetim, botões Knotted Line e detalhes Al Talli.',
  id: 'Hanya dry clean profesional untuk menjaga satin, kancing Knotted Line, dan detail Al Talli.',
  ms: 'Dry clean profesional sahaja untuk mengekalkan satin, butang Knotted Line, dan butiran Al Talli.',
}

const ORIGIN: Record<AppLocale, string> = {
  en: 'Made in Abu Dhabi, United Arab Emirates',
  ar: 'صُنع في أبوظبي، الإمارات العربية المتحدة',
  fr: 'Fabriqué à Abou Dabi, Émirats arabes unis',
  it: 'Realizzato ad Abu Dhabi, Emirati Arabi Uniti',
  es: 'Hecho en Abu Dabi, Emiratos Árabes Unidos',
  ru: 'Сделано в Абу-Даби, ОАЭ',
  zh: '阿联酋阿布扎比制造',
  de: 'Hergestellt in Abu Dhabi, Vereinigte Arabische Emirate',
  nl: 'Gemaakt in Abu Dhabi, Verenigde Arabische Emiraten',
  pt: 'Feito em Abu Dhabi, Emirados Árabes Unidos',
  id: 'Dibuat di Abu Dhabi, Uni Emirat Arab',
  ms: 'Dihasilkan di Abu Dhabi, Emiriah Arab Bersatu',
}

export const GROSVENOR_SET_COLOUR = ['Champagne Cream'] as const

export function grosvenorSetComposition(locale: AppLocale = 'en'): string[] {
  return [COMPOSITION[locale] ?? COMPOSITION.en]
}

export function grosvenorSetCare(locale: AppLocale = 'en'): string[] {
  return [CARE[locale] ?? CARE.en]
}

export function grosvenorSetFitAndSize(locale: AppLocale = 'en'): string[] {
  const s = pdpStructuredStrings(locale)
  return [
    FIT_SHIRT[locale] ?? FIT_SHIRT.en,
    FIT_SKIRT[locale] ?? FIT_SKIRT.en,
    MODEL_HEIGHT[locale] ?? MODEL_HEIGHT.en,
    MODEL_WEAR_XS[locale] ?? MODEL_WEAR_XS.en,
    s.customLength,
  ]
}

export function grosvenorSetOrigin(locale: AppLocale = 'en'): string[] {
  return [ORIGIN[locale] ?? ORIGIN.en]
}

export function buildGrosvenorSetDetailGroups(locale: AppLocale = 'en'): PdpDetailGroup[] {
  const shirt = SHIRT_ITEMS[locale] ?? SHIRT_ITEMS.en
  const skirt = MAXI_SKIRT_ITEMS[locale] ?? MAXI_SKIRT_ITEMS.en
  const jewellery = GARMENT_JEWELLERY_ITEMS[locale] ?? GARMENT_JEWELLERY_ITEMS.en

  return [
    {
      title: SHIRT_TITLE[locale] ?? SHIRT_TITLE.en,
      items: [...shirt],
    },
    {
      title: MAXI_SKIRT_TITLE[locale] ?? MAXI_SKIRT_TITLE.en,
      items: [...skirt],
    },
    {
      title: GARMENT_JEWELLERY_TITLE[locale] ?? GARMENT_JEWELLERY_TITLE.en,
      items: [...jewellery],
    },
    getHouseCodesDetailGroup('grosvenor-set', locale),
    {
      title: PDP_COLOUR_TITLE[locale] ?? PDP_COLOUR_TITLE.en,
      items: [...GROSVENOR_SET_COLOUR],
    },
  ]
}
