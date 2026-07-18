import type { PolicyContent, PolicySection } from '@/lib/legal/policyContentId'
import type { EuZhLocale } from '@/lib/legal/policyContentLocales'
import {
  LANGUAGE_CLAUSE_SHORT_DE,
  LANGUAGE_CLAUSE_SHORT_ES,
  LANGUAGE_CLAUSE_SHORT_FR,
  LANGUAGE_CLAUSE_SHORT_IT,
  LANGUAGE_CLAUSE_SHORT_NL,
  LANGUAGE_CLAUSE_SHORT_PT,
  LANGUAGE_CLAUSE_SHORT_RU,
  LANGUAGE_CLAUSE_SHORT_ZH,
  LANGUAGE_CLAUSE_TITLE_DE,
  LANGUAGE_CLAUSE_TITLE_ES,
  LANGUAGE_CLAUSE_TITLE_FR,
  LANGUAGE_CLAUSE_TITLE_IT,
  LANGUAGE_CLAUSE_TITLE_NL,
  LANGUAGE_CLAUSE_TITLE_PT,
  LANGUAGE_CLAUSE_TITLE_RU,
  LANGUAGE_CLAUSE_TITLE_ZH,
} from '@/lib/legal/languageAndTranslationClause'

type ShipmentChrome = Omit<PolicyContent, 'sections'>

type EuBodies = {
  s5: PolicySection
  s6: PolicySection
}

const CLAUSE_TITLE: Record<EuZhLocale, string> = {
  fr: LANGUAGE_CLAUSE_TITLE_FR,
  de: LANGUAGE_CLAUSE_TITLE_DE,
  it: LANGUAGE_CLAUSE_TITLE_IT,
  es: LANGUAGE_CLAUSE_TITLE_ES,
  nl: LANGUAGE_CLAUSE_TITLE_NL,
  pt: LANGUAGE_CLAUSE_TITLE_PT,
  ru: LANGUAGE_CLAUSE_TITLE_RU,
  zh: LANGUAGE_CLAUSE_TITLE_ZH,
}

const CLAUSE_SHORT: Record<EuZhLocale, string> = {
  fr: LANGUAGE_CLAUSE_SHORT_FR,
  de: LANGUAGE_CLAUSE_SHORT_DE,
  it: LANGUAGE_CLAUSE_SHORT_IT,
  es: LANGUAGE_CLAUSE_SHORT_ES,
  nl: LANGUAGE_CLAUSE_SHORT_NL,
  pt: LANGUAGE_CLAUSE_SHORT_PT,
  ru: LANGUAGE_CLAUSE_SHORT_RU,
  zh: LANGUAGE_CLAUSE_SHORT_ZH,
}

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

const EU_BODIES: Record<EuZhLocale, EuBodies> = {
  fr: {
    s5: {
      title: '5. Clients de l’UE – Droit de rétractation',
      body: [
        'Pour les clients situés dans l’Union européenne, la réglementation relative à la consommation peut prévoir un droit de rétractation de 14 jours pour les achats en ligne.',
        'Toutefois, ce droit ne s’applique généralement pas à :',
        'Comme de nombreuses pièces Bint Saeed sont produites sur demande après confirmation de commande, elles relèvent généralement de cette exemption. Les retours et annulations ne sont donc pas acceptés une fois la production commencée.',
      ],
      list: [
        'Les biens fabriqués selon les spécifications du consommateur.',
        'Les articles clairement personnalisés ou sur mesure.',
        'Les biens scellés qui ne peuvent être retournés pour des raisons de protection de la santé ou d’hygiène, y compris les boucles d’oreilles.',
      ],
    },
    s6: {
      title: '6. Exception UE (articles défectueux uniquement)',
      body: [
        'En cas de défaut de fabrication :',
        'Nous évaluerons la situation et fournirons une résolution appropriée, qui peut inclure réparation, remplacement, échange, avoir magasin ou remboursement lorsque le droit applicable l’exige.',
      ],
      list: [
        'Les clients doivent nous notifier dans les 48 heures suivant la livraison.',
        'Des preuves photographiques doivent être fournies par e-mail.',
      ],
    },
  },
  de: {
    s5: {
      title: '5. EU-Kunden – Widerrufsrecht',
      body: [
        'Für Kunden in der Europäischen Union können Verbrauchervorschriften ein 14-tägiges Widerrufsrecht für Online-Käufe vorsehen.',
        'Dieses Recht gilt jedoch in der Regel nicht für:',
        'Da viele Bint-Saeed-Stücke nach Bestellbestätigung auf Abruf gefertigt werden, fallen sie grundsätzlich unter diese Ausnahme. Rückgaben und Stornierungen werden daher nicht akzeptiert, sobald die Produktion begonnen hat.',
      ],
      list: [
        'Waren, die nach Kundenspezifikation angefertigt werden.',
        'Deutlich personalisierte oder maßgefertigte Artikel.',
        'Versiegelte Waren, die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zurückgegeben werden können, einschließlich Ohrringe.',
      ],
    },
    s6: {
      title: '6. EU-Ausnahme (nur mangelhafte Artikel)',
      body: [
        'Im Falle eines Herstellungsfehlers:',
        'Wir prüfen den Sachverhalt und bieten eine angemessene Lösung, die Reparatur, Ersatz, Umtausch, Gutschrift oder — soweit gesetzlich erforderlich — Erstattung umfassen kann.',
      ],
      list: [
        'Kunden müssen uns innerhalb von 48 Stunden nach Lieferung benachrichtigen.',
        'Unterstützende fotografische Nachweise müssen per E-Mail übermittelt werden.',
      ],
    },
  },
  it: {
    s5: {
      title: '5. Clienti UE – Diritto di recesso',
      body: [
        'Per i clienti situati nell’Unione europea, la normativa sui consumatori può prevedere un diritto di recesso di 14 giorni per gli acquisti online.',
        'Tuttavia, questo diritto generalmente non si applica a:',
        'Poiché molti pezzi Bint Saeed sono prodotti su ordinazione dopo la conferma dell’ordine, rientrano generalmente in questa esenzione. Resi e cancellazioni non sono quindi accettati una volta avviata la produzione.',
      ],
      list: [
        'Beni realizzati secondo le specifiche del consumatore.',
        'Articoli chiaramente personalizzati o su misura.',
        'Beni sigillati non idonei al reso per ragioni di tutela della salute o igiene, inclusi gli orecchini.',
      ],
    },
    s6: {
      title: '6. Eccezione UE (solo articoli difettosi)',
      body: [
        'In caso di difetto di fabbricazione:',
        'Valuteremo la situazione e forniremo una risoluzione appropriata, che può includere riparazione, sostituzione, cambio, credito negozio o rimborso ove richiesto dalla legge applicabile.',
      ],
      list: [
        'I clienti devono comunicarcelo entro 48 ore dalla consegna.',
        'Devono essere fornite prove fotografiche via e-mail.',
      ],
    },
  },
  es: {
    s5: {
      title: '5. Clientes de la UE – Derecho de desistimiento',
      body: [
        'Para clientes situados en la Unión Europea, la normativa de consumo puede prever un derecho de desistimiento de 14 días para compras en línea.',
        'No obstante, este derecho generalmente no se aplica a:',
        'Como muchas piezas Bint Saeed se producen bajo pedido tras la confirmación del pedido, suelen quedar dentro de esta exención. Por tanto, no se aceptan devoluciones ni cancelaciones una vez iniciada la producción.',
      ],
      list: [
        'Bienes elaborados según las especificaciones del consumidor.',
        'Artículos claramente personalizados o a medida.',
        'Bienes precintados que no pueden devolverse por razones de protección de la salud o higiene, incluidos los pendientes.',
      ],
    },
    s6: {
      title: '6. Excepción UE (solo artículos defectuosos)',
      body: [
        'En caso de defecto de fabricación:',
        'Evaluaremos el asunto y ofreceremos una resolución adecuada, que puede incluir reparación, sustitución, cambio, crédito de tienda o reembolso cuando lo exija la ley aplicable.',
      ],
      list: [
        'Los clientes deben notificarnos en un plazo de 48 horas desde la entrega.',
        'Debe aportarse evidencia fotográfica por correo electrónico.',
      ],
    },
  },
  nl: {
    s5: {
      title: '5. EU-klanten – Herroepingsrecht',
      body: [
        'Voor klanten in de Europese Unie kan de consumentenregelgeving een herroepingsrecht van 14 dagen voorzien voor online aankopen.',
        'Dit recht geldt echter in het algemeen niet voor:',
        'Omdat veel Bint Saeed-stukken na orderbevestiging op bestelling worden geproduceerd, vallen zij doorgaans onder deze uitzondering. Retouren en annuleringen worden daarom niet geaccepteerd zodra de productie is gestart.',
      ],
      list: [
        'Goederen die volgens de specificaties van de consument zijn gemaakt.',
        'Duidelijk gepersonaliseerde of op maat gemaakte artikelen.',
        'Verzegelde goederen die om redenen van gezondheidsbescherming of hygiëne niet kunnen worden geretourneerd, inclusief oorbellen.',
      ],
    },
    s6: {
      title: '6. EU-uitzondering (alleen defecte artikelen)',
      body: [
        'In geval van een fabricagefout:',
        'Wij beoordelen de zaak en bieden een passende oplossing, die reparatie, vervanging, ruiling, tegoed of — waar vereist door toepasselijk recht — terugbetaling kan omvatten.',
      ],
      list: [
        'Klanten moeten ons binnen 48 uur na levering melden.',
        'Ondersteunend fotografisch bewijs moet per e-mail worden verstrekt.',
      ],
    },
  },
  pt: {
    s5: {
      title: '5. Clientes da UE – Direito de retractação',
      body: [
        'Para clientes situados na União Europeia, a regulamentação de consumo pode prever um direito de retractação de 14 dias para compras online.',
        'No entanto, este direito geralmente não se aplica a:',
        'Como muitas peças Bint Saeed são produzidas sob encomenda após a confirmação do pedido, enquadram-se geralmente nesta isenção. Devoluções e cancelamentos não são, por isso, aceites uma vez iniciada a produção.',
      ],
      list: [
        'Bens feitos segundo as especificações do consumidor.',
        'Artigos claramente personalizados ou feitos à medida.',
        'Bens selados que não são adequados para devolução por razões de proteção da saúde ou higiene, incluindo brincos.',
      ],
    },
    s6: {
      title: '6. Exceção UE (apenas artigos com defeito)',
      body: [
        'Em caso de defeito de fabrico:',
        'Avaliamos a situação e fornecemos uma resolução adequada, que pode incluir reparação, substituição, troca, crédito de loja ou reembolso quando exigido pela lei aplicável.',
      ],
      list: [
        'Os clientes devem notificar-nos no prazo de 48 horas após a entrega.',
        'Devem ser fornecidas provas fotográficas por e-mail.',
      ],
    },
  },
  ru: {
    s5: {
      title: '5. Клиенты ЕС – право на отказ',
      body: [
        'Для клиентов, находящихся в Европейском союзе, потребительское законодательство может предусматривать 14-дневное право на отказ от онлайн-покупок.',
        'Однако это право, как правило, не применяется к:',
        'Поскольку многие изделия Bint Saeed производятся на заказ после подтверждения заказа, они обычно подпадают под это исключение. Возвраты и отмены поэтому не принимаются после начала производства.',
      ],
      list: [
        'Товары, изготовленные по спецификациям потребителя.',
        'Явно персонализированные или изготовленные на заказ изделия.',
        'Запечатанные товары, не подлежащие возврату по причинам охраны здоровья или гигиены, включая серьги.',
      ],
    },
    s6: {
      title: '6. Исключение ЕС (только дефектные изделия)',
      body: [
        'В случае производственного дефекта:',
        'Мы рассмотрим вопрос и предложим надлежащее решение, которое может включать ремонт, замену, обмен, кредит магазина или возврат средств, если этого требует применимое право.',
      ],
      list: [
        'Клиенты должны уведомить нас в течение 48 часов после доставки.',
        'Подтверждающие фотографии должны быть предоставлены по электронной почте.',
      ],
    },
  },
  zh: {
    s5: {
      title: '5. 欧盟客户——撤回权',
      body: [
        '对于位于欧盟的客户，消费者法规可能就在线购买提供 14 天撤回权。',
        '然而，该权利一般不适用于：',
        '由于许多 Bint Saeed 作品在确认订单后按需生产，通常属于此豁免范围。因此，一旦开始生产，将不接受退货或取消。',
      ],
      list: [
        '按消费者规格制作的商品。',
        '明显个性化或定制的商品。',
        '因健康保护或卫生原因不宜退回的密封商品，包括耳环。',
      ],
    },
    s6: {
      title: '6. 欧盟例外（仅限瑕疵商品）',
      body: [
        '如出现制造瑕疵：',
        '我们将评估情况并提供适当解决方案，可能包括维修、更换、换货、店铺积分，或在适用法律要求时退款。',
      ],
      list: [
        '客户须在收货后 48 小时内通知我们。',
        '须通过电子邮件提供照片证据。',
      ],
    },
  },
}

/**
 * EU/zh shipment packs: localised chrome + EU withdrawal sections (5–6) and language clause.
 * Remaining sections retain approved English legal meaning until full localisation ships.
 */
export function getLocalizedShipmentContent(
  lang: EuZhLocale,
  englishSections: PolicySection[],
  englishSectionList: string[],
): PolicyContent {
  const meta = { ...META[lang] }
  const euBodies = EU_BODIES[lang]
  const sections = englishSections.map((section) => {
    if (section.title.startsWith('5.')) return euBodies.s5
    if (section.title.startsWith('6.')) return euBodies.s6
    if (section.title.startsWith('13.')) {
      return { title: `13. ${CLAUSE_TITLE[lang]}`, body: [CLAUSE_SHORT[lang]] }
    }
    return section
  })
  meta.sectionList = englishSectionList.map((label, index) => {
    if (label.startsWith('5.')) return euBodies.s5.title
    if (label.startsWith('6.')) return euBodies.s6.title
    if (label.startsWith('13.')) return `13. ${CLAUSE_TITLE[lang]}`
    return label
  })
  return { ...meta, sections }
}
