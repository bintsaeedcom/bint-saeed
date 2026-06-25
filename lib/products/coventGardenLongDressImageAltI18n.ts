import type { AppLocale } from '@/lib/i18n/routing'

function altLoc(
  en: string,
  ar: string,
  fr: string,
  it: string,
  es: string,
  ru: string,
  zh: string,
  de: string,
  nl: string,
  pt: string,
): Record<AppLocale, string> {
  return { en, ar, fr, it, es, ru, zh, de, nl, pt, id: en, ms: en }
}

type AltEntry = { filename: string; alts: Record<AppLocale, string> }

/** Curated PDP image alts — Covent Garden Long Dress. */
export const COVENT_GARDEN_LONG_DRESS_IMAGE_ALT_ENTRIES: AltEntry[] = [
  {
    filename: 'bint-saeed-covent-garden-long-dress-burgundy-front.webp',
    alts: altLoc(
      'Covent Garden Dress in Burgundy, front view. Elegant long dress with a tailored fitted maxi silhouette, clean round neckline, and refined contemporary lines by Bint Saeed, an Emirati contemporary brand from Abu Dhabi, United Arab Emirates.',
      'فستان Covent Garden باللون Burgundy، منظر أمامي. فستان طويل أنيق بسيلويت ماكسي مفصّل وياقة دائرية نظيفة وخطوط معاصرة راقية من Bint Saeed، علامة إماراتية معاصرة من أبوظبي، الإمارات العربية المتحدة.',
      'Robe Covent Garden en Burgundy, vue de face. Robe longue élégante à silhouette maxi ajustée, encolure ronde épurée et lignes contemporaines raffinées par Bint Saeed, marque émiratie contemporaine d’Abou Dabi, Émirats arabes unis.',
      'Covent Garden Dress in Burgundy, vista frontale. Elegante abito lungo con silhouette maxi fitted, scollo tondo pulito e linee contemporanee raffinate di Bint Saeed, marchio emiratino contemporaneo di Abu Dhabi, Emirati Arabi Uniti.',
      'Vestido Covent Garden en Burgundy, vista frontal. Elegante vestido largo con silueta maxi entallada, escote redondo limpio y líneas contemporáneas refinadas de Bint Saeed, marca emiratí contemporánea de Abu Dabi, Emiratos Árabes Unidos.',
      'Платье Covent Garden цвета Burgundy, вид спереди. Элегантное длинное платье с приталенным макси-силуэтом, чистым круглым вырезом и утончёнными современными линиями от Bint Saeed — современного эмиратского бренда из Абу-Даби, ОАЭ.',
      'Covent Garden Dress酒红色正面视图。优雅长款连衣裙，修身长款廓形、简洁圆领与精致当代线条，阿联酋阿布扎比当代品牌Bint Saeed。',
      'Covent Garden Dress in Burgundy, Frontansicht. Elegantes langes Kleid mit taillierter Maxi-Silhouette, cleanem Rundhals und raffinierten zeitgenössischen Linien von Bint Saeed, zeitgenössische emiratische Marke aus Abu Dhabi, VAE.',
      'Covent Garden Dress in Burgundy, vooraanzicht. Elegante lange jurk met getailleerd maxi-silhouet, schone ronde halslijn en verfijnde eigentijdse lijnen van Bint Saeed, eigentijds Emiratisch merk uit Abu Dhabi, VAE.',
      'Vestido Covent Garden em Burgundy, vista frontal. Elegante vestido comprido com silhueta maxi fitted, decote redondo limpo e linhas contemporâneas refinadas da Bint Saeed, marca emirati contemporânea de Abu Dhabi, Emirados Árabes Unidos.',
    ),
  },
  {
    filename: 'bint-saeed-covent-garden-long-dress-burgundy-side.webp',
    alts: altLoc(
      'Side view of the Covent Garden Dress in Burgundy showcasing the softly fitted maxi silhouette and graceful movement. Signature elegant long dress by Bint Saeed Abu Dhabi, United Arab Emirates — designed as a versatile under-abaya dress and beautiful worn on its own.',
      'منظر جانبي لفستان Covent Garden باللون Burgundy يبرز السيلويت الماكسي المفصّل بنعومة والحركة الرشيقة. فستان طويل أنيق مميز من Bint Saeed أبوظبي، الإمارات العربية المتحدة — صُمم كفستان تحت العباية متعدد الاستخدامات وجميل بمفرده.',
      'Vue de profil de la robe Covent Garden en Burgundy mettant en valeur la silhouette maxi doucement ajustée et un mouvement gracieux. Robe longue élégante signature par Bint Saeed Abou Dabi, Émirats arabes unis — conçue comme robe sous abaya polyvalente et belle portée seule.',
      'Vista laterale del Covent Garden Dress in Burgundy con silhouette maxi softly fitted e movimento aggraziato. Elegante abito lungo signature di Bint Saeed Abu Dhabi, Emirati Arabi Uniti — pensato come abito sotto abaya versatile e bellissimo indossato da solo.',
      'Vista lateral del Covent Garden Dress en Burgundy con silueta maxi suavemente entallada y movimiento elegante. Elegante vestido largo signature de Bint Saeed Abu Dabi, Emiratos Árabes Unidos — diseñado como vestido bajo abaya versátil y hermoso por separado.',
      'Вид сбоку платья Covent Garden цвета Burgundy с мягко приталенным макси-силуэтом и грациозным движением. Фирменное элегантное длинное платье от Bint Saeed Абу-Даби, ОАЭ — универсальное платье под абайю и красивое самостоятельно.',
      'Covent Garden Dress酒红色侧面视图，展现柔和修身长款廓形与优雅动感。Bint Saeed阿布扎比、阿联酋标志性优雅长款连衣裙，百搭内穿长袍裙，亦可单独穿着。',
      'Seitenansicht des Covent Garden Dress in Burgundy mit softly fitted Maxi-Silhouette und graziöser Bewegung. Signature elegantes langes Kleid von Bint Saeed Abu Dhabi, VAE — vielseitiges Under-Abaya-Kleid und schön solo getragen.',
      'Zijaanzicht van de Covent Garden Dress in Burgundy met softly fitted maxi-silhouet en gracieuze beweging. Kenmerkende elegante lange jurk van Bint Saeed Abu Dhabi, VAE — veelzijdige under-abaya jurk en prachtig solo gedragen.',
      'Vista lateral do Covent Garden Dress em Burgundy com silhueta maxi softly fitted e movimento gracioso. Elegante vestido comprido signature da Bint Saeed Abu Dhabi, Emirados Árabes Unidos — vestido sob abaya versátil e belo usado sozinho.',
    ),
  },
  {
    filename: 'bint-saeed-covent-garden-long-dress-burgundy-back.webp',
    alts: altLoc(
      'Back view of the Covent Garden Dress in Burgundy highlighting the concealed back zip closure and tailored fitted maxi silhouette. Designer elegant long dress created in Abu Dhabi by Bint Saeed, an Emirati contemporary premium brand.',
      'منظر خلفي لفستان Covent Garden باللون Burgundy يبرز سحّاب الإغلاق الخلفي المخفي والسيلويت الماكسي المفصّل. فستان طويل أنيق مصمّم صُنع في أبوظبي من Bint Saeed، علامة إماراتية معاصرة راقية.',
      'Vue de dos de la robe Covent Garden en Burgundy soulignant la fermeture éclair dissimulée au dos et la silhouette maxi ajustée. Robe longue élégante de créateur réalisée à Abou Dabi par Bint Saeed, marque émiratie contemporaine premium.',
      'Vista posteriore del Covent Garden Dress in Burgundy con zip posteriore nascosta e silhouette maxi fitted sartoriale. Elegante abito lungo designer creato ad Abu Dhabi da Bint Saeed, marchio emiratino contemporaneo premium.',
      'Vista trasera del Covent Garden Dress en Burgundy con cremallera trasera oculta y silueta maxi entallada. Elegante vestido largo de diseñador creado en Abu Dabi por Bint Saeed, marca emiratí contemporánea premium.',
      'Вид сзади платья Covent Garden цвета Burgundy со скрытой застёжкой сзади и приталенным макси-силуэтом. Дизайнерское элегантное длинное платье, созданное в Абу-Даби брендом Bint Saeed — современной премиальной эмиратской маркой.',
      'Covent Garden Dress酒红色背面视图，凸显隐藏后背拉链与剪裁修身长款廓形。阿布扎比Bint Saeed设计师优雅长款连衣裙，阿联酋当代高端品牌。',
      'Rückansicht des Covent Garden Dress in Burgundy mit verdecktem Rückenreißverschluss und taillierter Maxi-Silhouette. Designer-elegantes langes Kleid, in Abu Dhabi von Bint Saeed, einer zeitgenössischen Premium-Marke aus den VAE, geschaffen.',
      'Achteraanzicht van de Covent Garden Dress in Burgundy met verborgen ritssluiting en getailleerd maxi-silhouet. Designer elegante lange jurk gemaakt in Abu Dhabi door Bint Saeed, een eigentijds premium Emiratisch merk.',
      'Vista traseira do Covent Garden Dress em Burgundy com fecho traseiro oculto e silhueta maxi fitted. Elegante vestido comprido de designer criado em Abu Dhabi pela Bint Saeed, marca emirati contemporânea premium.',
    ),
  },
]
