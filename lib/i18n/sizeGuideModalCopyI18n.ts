import type { AppLocale } from '@/lib/i18n/routing'

/** Size guide modal chrome on PDP (not the full /size-guide page). */
type SizeGuideModalCopy = {
  title: string
  subtitle: string
  selectSizeHint: string
  measurement: string
  notesInches: string
  notesLength: string
  viewFullGuide: string
  close: string
}

const EN: SizeGuideModalCopy = {
  title: 'Size Guide',
  subtitle: 'A-Cut Abaya Measurements',
  selectSizeHint: 'Select your size to highlight:',
  measurement: 'Measurement',
  notesInches: '• All measurements are in inches',
  notesLength: '• Length per request - Add your preferred length in order notes',
  viewFullGuide: 'View Full Size Guide',
  close: 'Close',
}

const AR: SizeGuideModalCopy = {
  title: 'دليل المقاسات',
  subtitle: 'قياسات العباءة — قصة A',
  selectSizeHint: 'اختاري مقاسك لتمييزه:',
  measurement: 'القياس',
  notesInches: '• جميع القياسات بالبوصة',
  notesLength: '• الطول حسب الطلب — أضيفي طولك المفضل في ملاحظات الطلب',
  viewFullGuide: 'الدليل الكامل',
  close: 'إغلاق',
}

const FR: SizeGuideModalCopy = {
  title: 'Guide des tailles',
  subtitle: 'Mesures de l’abaya coupe A',
  selectSizeHint: 'Sélectionnez votre taille pour la mettre en évidence :',
  measurement: 'Mesure',
  notesInches: '• Toutes les mesures sont en pouces',
  notesLength: '• Longueur sur demande — indiquez la longueur souhaitée dans les notes de commande',
  viewFullGuide: 'Voir le guide complet',
  close: 'Fermer',
}

const IT: SizeGuideModalCopy = {
  title: 'Guida alle taglie',
  subtitle: 'Misure abaya taglio A',
  selectSizeHint: 'Seleziona la tua taglia per evidenziarla:',
  measurement: 'Misura',
  notesInches: '• Tutte le misure sono in pollici',
  notesLength: '• Lunghezza su richiesta — indica la lunghezza preferita nelle note d’ordine',
  viewFullGuide: 'Vedi la guida completa',
  close: 'Chiudi',
}

const DE: SizeGuideModalCopy = {
  title: 'Größenratgeber',
  subtitle: 'Maße der A-Cut Abaya',
  selectSizeHint: 'Wählen Sie Ihre Größe zur Hervorhebung:',
  measurement: 'Maß',
  notesInches: '• Alle Maße in Zoll',
  notesLength: '• Länge auf Wunsch — bitte Wunschlänge in den Bestellnotizen angeben',
  viewFullGuide: 'Vollständigen Größenratgeber ansehen',
  close: 'Schließen',
}

const NL: SizeGuideModalCopy = {
  title: 'Maattabel',
  subtitle: 'Maten A-cut abaya',
  selectSizeHint: 'Selecteer uw maat om te markeren:',
  measurement: 'Maat',
  notesInches: '• Alle maten in inches',
  notesLength: '• Lengte op verzoek — vermeld uw gewenste lengte in de bestelnotities',
  viewFullGuide: 'Volledige maattabel bekijken',
  close: 'Sluiten',
}

const PT: SizeGuideModalCopy = {
  title: 'Guia de tamanhos',
  subtitle: 'Medidas da abaya corte A',
  selectSizeHint: 'Selecione o seu tamanho para destacar:',
  measurement: 'Medida',
  notesInches: '• Todas as medidas estão em polegadas',
  notesLength: '• Comprimento sob pedido — indique o comprimento desejado nas notas da encomenda',
  viewFullGuide: 'Ver o guia completo',
  close: 'Fechar',
}

const ES: SizeGuideModalCopy = {
  title: 'Guía de tallas',
  subtitle: 'Medidas de la abaya corte A',
  selectSizeHint: 'Selecciona tu talla para resaltarla:',
  measurement: 'Medida',
  notesInches: '• Todas las medidas están en pulgadas',
  notesLength: '• Largo bajo pedido — indica el largo deseado en las notas del pedido',
  viewFullGuide: 'Ver la guía completa',
  close: 'Cerrar',
}

const RU: SizeGuideModalCopy = {
  title: 'Таблица размеров',
  subtitle: 'Мерки абайи силуэта A',
  selectSizeHint: 'Выберите размер, чтобы выделить его:',
  measurement: 'Мерка',
  notesInches: '• Все мерки указаны в дюймах',
  notesLength: '• Длина по запросу — укажите желаемую длину в примечаниях к заказу',
  viewFullGuide: 'Полная таблица размеров',
  close: 'Закрыть',
}

const ZH: SizeGuideModalCopy = {
  title: '尺码指南',
  subtitle: 'A 剪裁长袍尺寸',
  selectSizeHint: '选择尺码以高亮显示：',
  measurement: '尺寸',
  notesInches: '• 所有尺寸以英寸计',
  notesLength: '• 长度可按需定制 — 请在订单备注中填写偏好长度',
  viewFullGuide: '查看完整尺码指南',
  close: '关闭',
}

const ID: SizeGuideModalCopy = {
  title: 'Panduan ukuran',
  subtitle: 'Ukuran abaya potongan A',
  selectSizeHint: 'Pilih ukuran Anda untuk menyorotnya:',
  measurement: 'Ukuran',
  notesInches: '• Semua ukuran dalam inci',
  notesLength: '• Panjang sesuai permintaan — tambahkan panjang pilihan di catatan pesanan',
  viewFullGuide: 'Lihat panduan lengkap',
  close: 'Tutup',
}

const MS: SizeGuideModalCopy = {
  title: 'Panduan saiz',
  subtitle: 'Ukuran abaya potongan A',
  selectSizeHint: 'Pilih saiz anda untuk menyerlahkannya:',
  measurement: 'Ukuran',
  notesInches: '• Semua ukuran dalam inci',
  notesLength: '• Panjang mengikut permintaan — nyatakan panjang pilihan dalam nota pesanan',
  viewFullGuide: 'Lihat panduan penuh',
  close: 'Tutup',
}

export function getSizeGuideModalCopy(locale: AppLocale | string): SizeGuideModalCopy {
  if (locale === 'ar') return AR
  if (locale === 'fr') return FR
  if (locale === 'it') return IT
  if (locale === 'de') return DE
  if (locale === 'nl') return NL
  if (locale === 'pt') return PT
  if (locale === 'es') return ES
  if (locale === 'ru') return RU
  if (locale === 'zh') return ZH
  if (locale === 'id') return ID
  if (locale === 'ms') return MS
  return EN
}
