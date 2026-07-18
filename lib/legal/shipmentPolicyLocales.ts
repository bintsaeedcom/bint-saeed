import type { PolicyContent } from '@/lib/legal/policyContentId'
import type { EuZhLocale } from '@/lib/legal/policyContentLocales'
import {
  getEuZhShipmentSectionList,
  getEuZhShipmentSections,
} from '@/lib/legal/shipmentPolicyBodiesEuZh'

type ShipmentChrome = Omit<PolicyContent, 'sections'>

const META: Record<EuZhLocale, ShipmentChrome> = {
  fr: {
    pageTitle: 'Politique d’expédition et de retours',
    breadcrumb: 'Politique d’expédition et de retours',
    homeBreadcrumb: 'Accueil',
    heroLabel: 'Juridique',
    lastUpdated: 'Dernière mise à jour : juillet 2026',
    intro: 'La présente politique définit les délais d’expédition, l’éligibilité aux échanges, les procédures de retour et les voies de remède pour les achats effectués auprès de Bint Saeed.',
    summaryTitle: 'Avis résumé',
    summaryBody: [
      'Chez Bint Saeed, chaque pièce est créée avec soin et inspectée avant expédition. Nous encourageons les clients à examiner attentivement les descriptions, les informations de taille et les détails produits avant de commander.',
      'Si la majorité des pièces Bint Saeed sont produites sur commande, certains articles peuvent être disponibles pour une expédition immédiate.',
    ],
    sectionList: [],
  },
  de: {
    pageTitle: 'Versand- und Rückgaberichtlinie',
    breadcrumb: 'Versand- und Rückgaberichtlinie',
    homeBreadcrumb: 'Startseite',
    heroLabel: 'Rechtliches',
    lastUpdated: 'Zuletzt aktualisiert: Juli 2026',
    intro: 'Diese Richtlinie legt Versandzeiten, Umtauschberechtigung, Rückgabeverfahren und Abhilfewege für Käufe bei Bint Saeed fest.',
    summaryTitle: 'Kurzhinweis',
    summaryBody: [
      'Bei Bint Saeed wird jedes Stück mit Sorgfalt gefertigt und vor dem Versand geprüft. Wir bitten Kunden, Produktbeschreibungen, Größeninformationen und Produktdetails vor der Bestellung sorgfältig zu prüfen.',
      'Während die Mehrzahl der Bint-Saeed-Stücke auf Bestellung gefertigt wird, können ausgewählte Artikel sofort versandbereit sein.',
    ],
    sectionList: [],
  },
  it: {
    pageTitle: 'Politica di spedizione e resi',
    breadcrumb: 'Politica di spedizione e resi',
    homeBreadcrumb: 'Home',
    heroLabel: 'Legale',
    lastUpdated: 'Ultimo aggiornamento: luglio 2026',
    intro: 'Questa policy definisce tempi di spedizione, idoneità allo scambio, procedure di reso e percorsi di rimedio per gli acquisti effettuati presso Bint Saeed.',
    summaryTitle: 'Avviso di sintesi',
    summaryBody: [
      'Da Bint Saeed ogni pezzo è creato con cura e ispezionato prima della spedizione. Incoraggiamo i clienti a esaminare attentamente descrizioni, informazioni sulla taglia e dettagli prodotto prima di ordinare.',
      'Mentre la maggioranza dei pezzi Bint Saeed è prodotta su ordinazione, articoli selezionati possono essere disponibili per spedizione immediata.',
    ],
    sectionList: [],
  },
  es: {
    pageTitle: 'Política de envío y devoluciones',
    breadcrumb: 'Política de envío y devoluciones',
    homeBreadcrumb: 'Inicio',
    heroLabel: 'Legal',
    lastUpdated: 'Última actualización: julio de 2026',
    intro: 'Esta política establece plazos de envío, elegibilidad de cambios, procedimientos de devolución y vías de remedio para las compras realizadas en Bint Saeed.',
    summaryTitle: 'Aviso resumido',
    summaryBody: [
      'En Bint Saeed, cada pieza se crea con cuidado y se inspecciona antes del envío. Animamos a los clientes a revisar con atención descripciones, información de talla y detalles del producto antes de pedir.',
      'Aunque la mayoría de las piezas Bint Saeed se producen bajo pedido, artículos seleccionados pueden estar disponibles para envío inmediato.',
    ],
    sectionList: [],
  },
  nl: {
    pageTitle: 'Verzend- en retourbeleid',
    breadcrumb: 'Verzend- en retourbeleid',
    homeBreadcrumb: 'Home',
    heroLabel: 'Juridisch',
    lastUpdated: 'Laatst bijgewerkt: juli 2026',
    intro: 'Dit beleid beschrijft verzendtijden, ruilgeschiktheid, retourprocedures en herstelpaden voor aankopen bij Bint Saeed.',
    summaryTitle: 'Samenvattend bericht',
    summaryBody: [
      'Bij Bint Saeed wordt elk stuk met zorg gemaakt en vóór verzending gecontroleerd. Wij moedigen klanten aan productbeschrijvingen, maatinformatie en productdetails zorgvuldig te bekijken vóór bestelling.',
      'Hoewel de meerderheid van de Bint Saeed-stukken op bestelling wordt geproduceerd, kunnen geselecteerde artikelen beschikbaar zijn voor directe verzending.',
    ],
    sectionList: [],
  },
  pt: {
    pageTitle: 'Política de envio e devoluções',
    breadcrumb: 'Política de envio e devoluções',
    homeBreadcrumb: 'Início',
    heroLabel: 'Legal',
    lastUpdated: 'Última atualização: julho de 2026',
    intro: 'Esta política define prazos de envio, elegibilidade de troca, procedimentos de devolução e vias de remédio para compras efetuadas na Bint Saeed.',
    summaryTitle: 'Aviso resumido',
    summaryBody: [
      'Na Bint Saeed, cada peça é criada com cuidado e inspecionada antes do envio. Incentivamos os clientes a rever cuidadosamente descrições, informação de tamanho e detalhes do produto antes de encomendar.',
      'Embora a maioria das peças Bint Saeed seja produzida sob encomenda, artigos selecionados podem estar disponíveis para envio imediato.',
    ],
    sectionList: [],
  },
  ru: {
    pageTitle: 'Политика доставки и возврата',
    breadcrumb: 'Политика доставки и возврата',
    homeBreadcrumb: 'Главная',
    heroLabel: 'Правовая информация',
    lastUpdated: 'Последнее обновление: июль 2026',
    intro: 'Настоящая политика определяет сроки доставки, условия обмена, процедуры возврата и пути урегулирования для покупок в Bint Saeed.',
    summaryTitle: 'Краткое уведомление',
    summaryBody: [
      'В Bint Saeed каждое изделие создаётся с заботой и проверяется перед отправкой. Мы рекомендуем внимательно изучать описания, информацию о размере и детали товара перед заказом.',
      'Хотя большинство изделий Bint Saeed производится на заказ, отдельные позиции могут быть доступны для немедленной отправки.',
    ],
    sectionList: [],
  },
  zh: {
    pageTitle: '配送与退货政策',
    breadcrumb: '配送与退货政策',
    homeBreadcrumb: '首页',
    heroLabel: '法律',
    lastUpdated: '最近更新：2026 年 7 月',
    intro: '本政策规定通过 Bint Saeed 购买商品的配送时效、换货资格、退货程序及救济途径。',
    summaryTitle: '摘要提示',
    summaryBody: [
      '在 Bint Saeed，每一件作品均经悉心制作并在发货前检验。我们鼓励客户在下单前仔细查阅产品说明、尺码信息与详情。',
      '尽管多数 Bint Saeed 作品按订单生产，部分单品或可立即发货。',
    ],
    sectionList: [],
  },
}

/**
 * EU/zh shipment packs: fully localised chrome and all 14 policy sections.
 */
export function getLocalizedShipmentContent(lang: EuZhLocale): PolicyContent {
  const meta = { ...META[lang] }
  const sections = getEuZhShipmentSections(lang)
  meta.sectionList = getEuZhShipmentSectionList(lang)
  return { ...meta, sections }
}
