import type { AppLocale } from '@/lib/i18n/routing'
import { withBrandAlt } from '@/lib/products/imageAlt'

export type SizeGuideCopy = {
  intro: string
  bodyMeasurementsInch: string
  bodyMeasurementsCm: string
  ukSize: string
  internationalConversions: string
  size: string
  howToMeasure: string
  imageAlt: string
  measureItems: readonly { id: string; title: string; copy: string }[]
  rowLabels: { bust: string; waist: string; hips: string }
  helpTitle: string
  helpBody: string
  scrollHint: string
  selectHint: string
  unitInch: string
  unitCm: string
  unitAriaLabel: string
  whatsapp: string
  contactUs: string
}

const EN_BASE: Omit<SizeGuideCopy, 'imageAlt'> = {
  intro:
    'This size chart provides general sizing information, which can vary depending on style. For more specific sizing information, please contact our concierge team.',
  bodyMeasurementsInch: 'Body Measurements - Inch',
  bodyMeasurementsCm: 'Body Measurements - CM',
  ukSize: 'UK Size',
  internationalConversions: 'International Conversions',
  size: 'Size',
  howToMeasure: 'How To Measure',
  rowLabels: { bust: 'Bust', waist: 'Waist', hips: 'Hips' },
  measureItems: [
    { id: '1', title: 'Sleeve', copy: 'Top shoulder point down to the wrist.' },
    { id: '2', title: 'Bust', copy: 'Maximum circumference on the chest on the highest point.' },
    { id: '3', title: 'Under Bust', copy: 'Body circumference directly under the bust.' },
    { id: '4', title: 'Waist', copy: 'Circumference of the waistline at the smallest point.' },
    { id: '5', title: 'Hips', copy: 'Circumference around the hip level where the hip is the widest.' },
    { id: '6', title: 'Leg', copy: 'Outside leg length from waist to the floor.' },
    { id: '7', title: 'Full Length', copy: 'Top shoulder point to the floor.' },
  ],
  helpTitle: 'Need sizing help?',
  helpBody: 'Our concierge can advise your best size before checkout.',
  scrollHint: 'Swipe sideways to see all sizes',
  selectHint: 'Select a size to highlight',
  unitInch: 'Inches',
  unitCm: 'CM',
  unitAriaLabel: 'Measurement unit',
  whatsapp: 'WhatsApp',
  contactUs: 'Contact Us',
}

const AR_BASE: Omit<SizeGuideCopy, 'imageAlt'> = {
  intro:
    'يوفر هذا الجدول معلومات عامة عن المقاسات، وقد تختلف حسب القصة. لمزيد من التفاصيل، يرجى التواصل مع فريق الكونسيرج.',
  bodyMeasurementsInch: 'قياسات الجسم — بوصة',
  bodyMeasurementsCm: 'قياسات الجسم — سم',
  ukSize: 'مقاس المملكة المتحدة',
  internationalConversions: 'التحويلات الدولية',
  size: 'المقاس',
  howToMeasure: 'كيفية القياس',
  rowLabels: { bust: 'الصدر', waist: 'الخصر', hips: 'الأرداف' },
  measureItems: [
    { id: '1', title: 'الكم', copy: 'من أعلى نقطة في الكتف إلى المعصم.' },
    { id: '2', title: 'الصدر', copy: 'أقصى محيط على أعلى نقطة في الصدر.' },
    { id: '3', title: 'تحت الصدر', copy: 'محيط الجسم مباشرة تحت الصدر.' },
    { id: '4', title: 'الخصر', copy: 'محيط خط الخصر عند أصغر نقطة.' },
    { id: '5', title: 'الأرداف', copy: 'المحيط حول مستوى الورك حيث يكون الورك في أعرض نقطة.' },
    { id: '6', title: 'الساق', copy: 'طول الساق الخارجي من الخصر إلى الأرض.' },
    { id: '7', title: 'الطول الكامل', copy: 'من أعلى نقطة في الكتف إلى الأرض.' },
  ],
  helpTitle: 'تحتاجين مساعدة بالمقاس؟',
  helpBody: 'فريقنا يساعدك لاختيار المقاس المثالي قبل الطلب.',
  scrollHint: 'مرري أفقياً لعرض كل المقاسات',
  selectHint: 'اختاري مقاسك لتمييزه',
  unitInch: 'بوصة',
  unitCm: 'سم',
  unitAriaLabel: 'وحدة القياس',
  whatsapp: 'واتساب',
  contactUs: 'تواصلي معنا',
}

const FR_BASE: Omit<SizeGuideCopy, 'imageAlt'> = {
  intro:
    'Ce guide fournit des indications générales de taille, susceptibles de varier selon le modèle. Pour un conseil plus précis, contactez notre équipe conciergerie.',
  bodyMeasurementsInch: 'Mensurations — pouces',
  bodyMeasurementsCm: 'Mensurations — cm',
  ukSize: 'Taille UK',
  internationalConversions: 'Correspondances internationales',
  size: 'Taille',
  howToMeasure: 'Comment prendre ses mesures',
  rowLabels: { bust: 'Poitrine', waist: 'Taille', hips: 'Hanches' },
  measureItems: [
    { id: '1', title: 'Manche', copy: 'Du point haut de l’épaule jusqu’au poignet.' },
    { id: '2', title: 'Poitrine', copy: 'Circonférence maximale de la poitrine au point le plus haut.' },
    { id: '3', title: 'Sous la poitrine', copy: 'Circonférence du corps juste sous la poitrine.' },
    { id: '4', title: 'Taille', copy: 'Circonférence de la taille au point le plus étroit.' },
    { id: '5', title: 'Hanches', copy: 'Circonférence au niveau des hanches, au point le plus large.' },
    { id: '6', title: 'Jambe', copy: 'Longueur extérieure de la jambe, de la taille au sol.' },
    { id: '7', title: 'Longueur totale', copy: 'Du point haut de l’épaule jusqu’au sol.' },
  ],
  helpTitle: 'Besoin d’aide pour la taille ?',
  helpBody: 'Notre conciergerie peut vous conseiller la taille idéale avant le paiement.',
  scrollHint: 'Faites glisser horizontalement pour voir toutes les tailles',
  selectHint: 'Sélectionnez une taille pour la mettre en évidence',
  unitInch: 'Pouces',
  unitCm: 'CM',
  unitAriaLabel: 'Unité de mesure',
  whatsapp: 'WhatsApp',
  contactUs: 'Nous contacter',
}

const IT_BASE: Omit<SizeGuideCopy, 'imageAlt'> = {
  intro:
    'Questa tabella fornisce indicazioni generali di taglia, che possono variare a seconda dello stile. Per indicazioni più precise, contatta il nostro team concierge.',
  bodyMeasurementsInch: 'Misure corporee — pollici',
  bodyMeasurementsCm: 'Misure corporee — cm',
  ukSize: 'Taglia UK',
  internationalConversions: 'Conversioni internazionali',
  size: 'Taglia',
  howToMeasure: 'Come misurarsi',
  rowLabels: { bust: 'Busto', waist: 'Vita', hips: 'Fianchi' },
  measureItems: [
    { id: '1', title: 'Manica', copy: 'Dal punto alto della spalla al polso.' },
    { id: '2', title: 'Busto', copy: 'Circonferenza massima del petto nel punto più alto.' },
    { id: '3', title: 'Sotto il busto', copy: 'Circonferenza del corpo immediatamente sotto il seno.' },
    { id: '4', title: 'Vita', copy: 'Circonferenza della vita nel punto più stretto.' },
    { id: '5', title: 'Fianchi', copy: 'Circonferenza a livello dei fianchi, nel punto più ampio.' },
    { id: '6', title: 'Gamba', copy: 'Lunghezza esterna della gamba dalla vita al pavimento.' },
    { id: '7', title: 'Lunghezza totale', copy: 'Dal punto alto della spalla al pavimento.' },
  ],
  helpTitle: 'Serve aiuto con la taglia?',
  helpBody: 'Il nostro concierge può consigliarti la taglia migliore prima del checkout.',
  scrollHint: 'Scorri in orizzontale per vedere tutte le taglie',
  selectHint: 'Seleziona una taglia per evidenziarla',
  unitInch: 'Pollici',
  unitCm: 'CM',
  unitAriaLabel: 'Unità di misura',
  whatsapp: 'WhatsApp',
  contactUs: 'Contattaci',
}

const DE_BASE: Omit<SizeGuideCopy, 'imageAlt'> = {
  intro:
    'Diese Größentabelle bietet allgemeine Orientierung und kann je nach Modell abweichen. Für eine genauere Beratung wenden Sie sich bitte an unser Concierge-Team.',
  bodyMeasurementsInch: 'Körpermaße — Zoll',
  bodyMeasurementsCm: 'Körpermaße — cm',
  ukSize: 'UK-Größe',
  internationalConversions: 'Internationale Größenumrechnung',
  size: 'Größe',
  howToMeasure: 'So messen Sie richtig',
  rowLabels: { bust: 'Brust', waist: 'Taille', hips: 'Hüfte' },
  measureItems: [
    { id: '1', title: 'Ärmel', copy: 'Vom höchsten Schulterpunkt bis zum Handgelenk.' },
    { id: '2', title: 'Brust', copy: 'Maximaler Umfang der Brust am höchsten Punkt.' },
    { id: '3', title: 'Unterbrust', copy: 'Körperumfang direkt unter der Brust.' },
    { id: '4', title: 'Taille', copy: 'Umfang der Taille an der schmalsten Stelle.' },
    { id: '5', title: 'Hüfte', copy: 'Umfang auf Hüfthöhe an der breitesten Stelle.' },
    { id: '6', title: 'Bein', copy: 'Außenbeinlänge von der Taille bis zum Boden.' },
    { id: '7', title: 'Gesamtlänge', copy: 'Vom höchsten Schulterpunkt bis zum Boden.' },
  ],
  helpTitle: 'Hilfe bei der Größe?',
  helpBody: 'Unser Concierge berät Sie vor dem Checkout zur besten Größe.',
  scrollHint: 'Wischen Sie seitlich, um alle Größen zu sehen',
  selectHint: 'Wählen Sie eine Größe zum Hervorheben',
  unitInch: 'Zoll',
  unitCm: 'CM',
  unitAriaLabel: 'Maßeinheit',
  whatsapp: 'WhatsApp',
  contactUs: 'Kontakt',
}

const NL_BASE: Omit<SizeGuideCopy, 'imageAlt'> = {
  intro:
    'Deze maattabel geeft algemene maatindicaties, die per model kunnen verschillen. Voor specifiekere maatadvies kunt u contact opnemen met ons concierge-team.',
  bodyMeasurementsInch: 'Lichaamsmaten — inch',
  bodyMeasurementsCm: 'Lichaamsmaten — cm',
  ukSize: 'UK-maat',
  internationalConversions: 'Internationale conversies',
  size: 'Maat',
  howToMeasure: 'Hoe te meten',
  rowLabels: { bust: 'Buste', waist: 'Taille', hips: 'Heupen' },
  measureItems: [
    { id: '1', title: 'Mouw', copy: 'Van het hoogste schouderpunt tot de pols.' },
    { id: '2', title: 'Buste', copy: 'Maximale omtrek van de borst op het hoogste punt.' },
    { id: '3', title: 'Onderbuste', copy: 'Lichaamsomtrek direct onder de buste.' },
    { id: '4', title: 'Taille', copy: 'Omtrek van de taille op het smalste punt.' },
    { id: '5', title: 'Heupen', copy: 'Omtrek op heuphoogte waar de heup het breedst is.' },
    { id: '6', title: 'Been', copy: 'Buitenbeenlengte van taille tot vloer.' },
    { id: '7', title: 'Totale lengte', copy: 'Van het hoogste schouderpunt tot de vloer.' },
  ],
  helpTitle: 'Hulp nodig met de maat?',
  helpBody: 'Onze concierge kan vóór checkout uw beste maat adviseren.',
  scrollHint: 'Veeg zijwaarts om alle maten te zien',
  selectHint: 'Selecteer een maat om te markeren',
  unitInch: 'Inches',
  unitCm: 'CM',
  unitAriaLabel: 'Meeteenheid',
  whatsapp: 'WhatsApp',
  contactUs: 'Contact',
}

const PT_BASE: Omit<SizeGuideCopy, 'imageAlt'> = {
  intro:
    'Este guia oferece indicações gerais de tamanho, que podem variar consoante o modelo. Para aconselhamento mais preciso, contacte a nossa equipa de concierge.',
  bodyMeasurementsInch: 'Medidas corporais — polegadas',
  bodyMeasurementsCm: 'Medidas corporais — cm',
  ukSize: 'Tamanho UK',
  internationalConversions: 'Conversões internacionais',
  size: 'Tamanho',
  howToMeasure: 'Como medir',
  rowLabels: { bust: 'Busto', waist: 'Cintura', hips: 'Ancas' },
  measureItems: [
    { id: '1', title: 'Manga', copy: 'Do ponto mais alto do ombro até ao pulso.' },
    { id: '2', title: 'Busto', copy: 'Circunferência máxima do peito no ponto mais alto.' },
    { id: '3', title: 'Sob o busto', copy: 'Circunferência do corpo imediatamente sob o busto.' },
    { id: '4', title: 'Cintura', copy: 'Circunferência da cintura no ponto mais estreito.' },
    { id: '5', title: 'Ancas', copy: 'Circunferência ao nível das ancas, no ponto mais largo.' },
    { id: '6', title: 'Perna', copy: 'Comprimento exterior da perna, da cintura ao chão.' },
    { id: '7', title: 'Comprimento total', copy: 'Do ponto mais alto do ombro ao chão.' },
  ],
  helpTitle: 'Precisa de ajuda com o tamanho?',
  helpBody: 'A nossa concierge pode aconselhar o melhor tamanho antes do pagamento.',
  scrollHint: 'Deslize horizontalmente para ver todos os tamanhos',
  selectHint: 'Selecione um tamanho para o destacar',
  unitInch: 'Polegadas',
  unitCm: 'CM',
  unitAriaLabel: 'Unidade de medida',
  whatsapp: 'WhatsApp',
  contactUs: 'Contacte-nos',
}

const ES_BASE: Omit<SizeGuideCopy, 'imageAlt'> = {
  intro:
    'Esta guía ofrece información general de tallas, que puede variar según el estilo. Para un asesoramiento más preciso, contacta con nuestro equipo de concierge.',
  bodyMeasurementsInch: 'Medidas corporales — pulgadas',
  bodyMeasurementsCm: 'Medidas corporales — cm',
  ukSize: 'Talla UK',
  internationalConversions: 'Conversiones internacionales',
  size: 'Talla',
  howToMeasure: 'Cómo medirse',
  rowLabels: { bust: 'Busto', waist: 'Cintura', hips: 'Cadera' },
  measureItems: [
    { id: '1', title: 'Manga', copy: 'Del punto más alto del hombro a la muñeca.' },
    { id: '2', title: 'Busto', copy: 'Circunferencia máxima del pecho en el punto más alto.' },
    { id: '3', title: 'Bajo el busto', copy: 'Circunferencia del cuerpo justo bajo el busto.' },
    { id: '4', title: 'Cintura', copy: 'Circunferencia de la cintura en el punto más estrecho.' },
    { id: '5', title: 'Cadera', copy: 'Circunferencia a la altura de la cadera, en el punto más ancho.' },
    { id: '6', title: 'Pierna', copy: 'Largo exterior de la pierna, de la cintura al suelo.' },
    { id: '7', title: 'Largo total', copy: 'Del punto más alto del hombro al suelo.' },
  ],
  helpTitle: '¿Necesitas ayuda con la talla?',
  helpBody: 'Nuestro concierge puede aconsejarte la mejor talla antes del pago.',
  scrollHint: 'Desliza horizontalmente para ver todas las tallas',
  selectHint: 'Selecciona una talla para resaltarla',
  unitInch: 'Pulgadas',
  unitCm: 'CM',
  unitAriaLabel: 'Unidad de medida',
  whatsapp: 'WhatsApp',
  contactUs: 'Contáctanos',
}

const RU_BASE: Omit<SizeGuideCopy, 'imageAlt'> = {
  intro:
    'Эта таблица даёт общие ориентиры по размеру; они могут отличаться в зависимости от модели. За более точной консультацией обратитесь к нашей команде консьержа.',
  bodyMeasurementsInch: 'Мерки тела — дюймы',
  bodyMeasurementsCm: 'Мерки тела — см',
  ukSize: 'Размер UK',
  internationalConversions: 'Международные соответствия',
  size: 'Размер',
  howToMeasure: 'Как снимать мерки',
  rowLabels: { bust: 'Бюст', waist: 'Талия', hips: 'Бёдра' },
  measureItems: [
    { id: '1', title: 'Рукав', copy: 'От верхней точки плеча до запястья.' },
    { id: '2', title: 'Бюст', copy: 'Максимальная окружность груди в самой высокой точке.' },
    { id: '3', title: 'Под грудью', copy: 'Окружность тела непосредственно под грудью.' },
    { id: '4', title: 'Талия', copy: 'Окружность талии в самой узкой точке.' },
    { id: '5', title: 'Бёдра', copy: 'Окружность на уровне бёдер в самой широкой точке.' },
    { id: '6', title: 'Нога', copy: 'Длина внешней стороны ноги от талии до пола.' },
    { id: '7', title: 'Полная длина', copy: 'От верхней точки плеча до пола.' },
  ],
  helpTitle: 'Нужна помощь с размером?',
  helpBody: 'Наш консьерж подскажет лучший размер до оформления заказа.',
  scrollHint: 'Проведите в сторону, чтобы увидеть все размеры',
  selectHint: 'Выберите размер, чтобы выделить его',
  unitInch: 'Дюймы',
  unitCm: 'СМ',
  unitAriaLabel: 'Единица измерения',
  whatsapp: 'WhatsApp',
  contactUs: 'Связаться с нами',
}

const ZH_BASE: Omit<SizeGuideCopy, 'imageAlt'> = {
  intro:
    '本尺码表提供一般性参考，可能因款式而异。如需更精确的建议，请联系我们的礼宾团队。',
  bodyMeasurementsInch: '身体尺寸 — 英寸',
  bodyMeasurementsCm: '身体尺寸 — 厘米',
  ukSize: '英国码',
  internationalConversions: '国际换算',
  size: '尺码',
  howToMeasure: '如何测量',
  rowLabels: { bust: '胸围', waist: '腰围', hips: '臀围' },
  measureItems: [
    { id: '1', title: '袖长', copy: '从肩部最高点至手腕。' },
    { id: '2', title: '胸围', copy: '胸部最高点处的最大围度。' },
    { id: '3', title: '下胸围', copy: '胸部正下方的身体围度。' },
    { id: '4', title: '腰围', copy: '腰线最细处的围度。' },
    { id: '5', title: '臀围', copy: '臀部最宽处的围度。' },
    { id: '6', title: '腿长', copy: '从腰至地面的外侧腿长。' },
    { id: '7', title: '全长', copy: '从肩部最高点至地面。' },
  ],
  helpTitle: '需要尺码协助？',
  helpBody: '礼宾团队可在结账前为您建议最合适的尺码。',
  scrollHint: '左右滑动查看全部尺码',
  selectHint: '选择尺码以高亮显示',
  unitInch: '英寸',
  unitCm: '厘米',
  unitAriaLabel: '测量单位',
  whatsapp: 'WhatsApp',
  contactUs: '联系我们',
}

const ID_BASE: Omit<SizeGuideCopy, 'imageAlt'> = {
  intro:
    'Tabel ukuran ini memberikan informasi umum, yang dapat berbeda menurut gaya. Untuk panduan lebih spesifik, hubungi tim concierge kami.',
  bodyMeasurementsInch: 'Ukuran tubuh — inci',
  bodyMeasurementsCm: 'Ukuran tubuh — cm',
  ukSize: 'Ukuran UK',
  internationalConversions: 'Konversi internasional',
  size: 'Ukuran',
  howToMeasure: 'Cara mengukur',
  rowLabels: { bust: 'Dada', waist: 'Pinggang', hips: 'Pinggul' },
  measureItems: [
    { id: '1', title: 'Lengan', copy: 'Dari titik bahu tertinggi ke pergelangan tangan.' },
    { id: '2', title: 'Dada', copy: 'Lingkar maksimal dada pada titik tertinggi.' },
    { id: '3', title: 'Bawah dada', copy: 'Lingkar tubuh tepat di bawah dada.' },
    { id: '4', title: 'Pinggang', copy: 'Lingkar pinggang pada titik tersempit.' },
    { id: '5', title: 'Pinggul', copy: 'Lingkar pada tingkat pinggul di titik terlebar.' },
    { id: '6', title: 'Kaki', copy: 'Panjang kaki luar dari pinggang ke lantai.' },
    { id: '7', title: 'Panjang penuh', copy: 'Dari titik bahu tertinggi ke lantai.' },
  ],
  helpTitle: 'Butuh bantuan ukuran?',
  helpBody: 'Concierge kami dapat menyarankan ukuran terbaik sebelum checkout.',
  scrollHint: 'Geser ke samping untuk melihat semua ukuran',
  selectHint: 'Pilih ukuran untuk menyorotnya',
  unitInch: 'Inci',
  unitCm: 'CM',
  unitAriaLabel: 'Satuan ukuran',
  whatsapp: 'WhatsApp',
  contactUs: 'Hubungi kami',
}

const MS_BASE: Omit<SizeGuideCopy, 'imageAlt'> = {
  intro:
    'Carta saiz ini memberikan maklumat umum, yang boleh berbeza mengikut gaya. Untuk panduan lebih tepat, hubungi pasukan concierge kami.',
  bodyMeasurementsInch: 'Ukuran badan — inci',
  bodyMeasurementsCm: 'Ukuran badan — cm',
  ukSize: 'Saiz UK',
  internationalConversions: 'Penukaran antarabangsa',
  size: 'Saiz',
  howToMeasure: 'Cara mengukur',
  rowLabels: { bust: 'Dada', waist: 'Pinggang', hips: 'Pinggul' },
  measureItems: [
    { id: '1', title: 'Lengan', copy: 'Dari titik bahu tertinggi ke pergelangan tangan.' },
    { id: '2', title: 'Dada', copy: 'Lilitan maksimum dada pada titik tertinggi.' },
    { id: '3', title: 'Bawah dada', copy: 'Lilitan badan tepat di bawah dada.' },
    { id: '4', title: 'Pinggang', copy: 'Lilitan pinggang pada titik tersempit.' },
    { id: '5', title: 'Pinggul', copy: 'Lilitan pada aras pinggul di titik terlebar.' },
    { id: '6', title: 'Kaki', copy: 'Panjang kaki luar dari pinggang ke lantai.' },
    { id: '7', title: 'Panjang penuh', copy: 'Dari titik bahu tertinggi ke lantai.' },
  ],
  helpTitle: 'Perlukan bantuan saiz?',
  helpBody: 'Concierge kami boleh menasihati saiz terbaik sebelum checkout.',
  scrollHint: 'Leret sisi untuk melihat semua saiz',
  selectHint: 'Pilih saiz untuk menyerlahkannya',
  unitInch: 'Inci',
  unitCm: 'CM',
  unitAriaLabel: 'Unit ukuran',
  whatsapp: 'WhatsApp',
  contactUs: 'Hubungi kami',
}

const PACKS: Record<string, Omit<SizeGuideCopy, 'imageAlt'>> = {
  en: EN_BASE,
  ar: AR_BASE,
  fr: FR_BASE,
  it: IT_BASE,
  de: DE_BASE,
  nl: NL_BASE,
  pt: PT_BASE,
  es: ES_BASE,
  ru: RU_BASE,
  zh: ZH_BASE,
  id: ID_BASE,
  ms: MS_BASE,
}

const IMAGE_ALT: Record<string, string> = {
  en: 'How to measure body figure guide for abaya sizing',
  ar: 'كيفية القياس — دليل شكل الجسم لقياسات العباءة',
  fr: 'Guide de prise de mesures pour le choix de taille d’abaya',
  it: 'Guida alle misure corporee per la taglia dell’abaya',
  de: 'Anleitung zur Körpermaßnahme für die Abaya-Größe',
  nl: 'Handleiding lichaamsmaten voor abaya-maten',
  pt: 'Guia de medidas corporais para tamanho de abaya',
  es: 'Guía de medidas corporales para la talla de abaya',
  ru: 'Руководство по снятию мерок для выбора размера абайи',
  zh: '长袍尺码量体指南',
  id: 'Panduan mengukur tubuh untuk ukuran abaya',
  ms: 'Panduan mengukur badan untuk saiz abaya',
}

export function getSizeGuideCopy(locale: AppLocale | string): SizeGuideCopy {
  const base = PACKS[locale] ?? EN_BASE
  const alt = IMAGE_ALT[locale] ?? IMAGE_ALT.en
  return {
    ...base,
    imageAlt: withBrandAlt(alt, locale === 'ar' ? 'ar' : 'en'),
  }
}
