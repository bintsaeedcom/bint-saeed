export type CommunityPolicySection = {
  title: string
  body: string[]
  list?: string[]
  subsections?: { title: string; body?: string[]; list: string[] }[]
}

/**
 * Calm Community / House Privilege terms — protective but not frightening.
 * English is the controlling text; other locales may fall back to English.
 */
export const HOUSE_COMMUNITY_TERMS_TITLE_EN =
  'Bint Saeed Community and House Privileges'

export function houseCommunityTermsSection(lang: string): CommunityPolicySection {
  if (lang === 'ar') return HOUSE_COMMUNITY_AR
  if (lang === 'fr') return HOUSE_COMMUNITY_FR
  if (lang === 'de') return HOUSE_COMMUNITY_DE
  if (lang === 'it') return HOUSE_COMMUNITY_IT
  if (lang === 'es') return HOUSE_COMMUNITY_ES
  if (lang === 'nl') return HOUSE_COMMUNITY_NL
  if (lang === 'pt') return HOUSE_COMMUNITY_PT
  if (lang === 'id') return HOUSE_COMMUNITY_ID
  if (lang === 'ms') return HOUSE_COMMUNITY_MS
  if (lang === 'zh') return HOUSE_COMMUNITY_ZH
  if (lang === 'ru') return HOUSE_COMMUNITY_RU
  return HOUSE_COMMUNITY_EN
}

const HOUSE_COMMUNITY_EN: CommunityPolicySection = {
  title: HOUSE_COMMUNITY_TERMS_TITLE_EN,
  body: [
    'Membership of the Bint Saeed Community is complimentary when you register with a valid email through an approved Bint Saeed form. Members may receive House news, collection updates, invitations and information about Community privileges, and may unsubscribe from marketing at any time. Unsubscribing does not cancel an order already placed or a privilege already validly activated.',
    'We may refuse or remove membership where details are false, duplicated or used improperly to obtain promotional benefits.',
  ],
  subsections: [
    {
      title: 'HOUSE15 — 15% first purchase',
      body: [
        'Community members may use code HOUSE15 for 15% off one first qualifying purchase of eligible full-price clothing and jewellery. HOUSE15 does not apply to discounted, sale, markdown or already-reduced items. A complimentary personalised inner label does not exclude an eligible full-price order from HOUSE15, but any item produced with a personalised label is final sale and cannot be exchanged (except for verified defect or where mandatory law requires otherwise).',
      ],
      list: [
        'One use per customer / first qualifying order only; not retrospective.',
        'Does not apply to gift cards, delivery charges, customs, taxes, separately charged alterations, bespoke or made-to-measure work, limited editions, collaborations, or items marked as excluded.',
        'Does not apply to discounted, sale, markdown or already-reduced items; only full-price eligible clothing and jewellery qualify.',
        'Cannot be combined with another discount code, campaign price or store credit; has no cash value.',
        'Gift-card-only purchases do not count as a first purchase and do not unlock the House Privilege.',
        'We may refuse or reverse HOUSE15 where we reasonably identify misuse, fraud or repeated abuse.',
      ],
    },
    {
      title: '10% House Privilege',
      body: [
        'After your first qualifying order is paid and completed, we activate a personal 10% House Privilege for future eligible full-price clothing and jewellery purchases. The privilege is linked to your registered email, is non-transferable, and remains valid until 29 August 2027 (11:59 p.m. UAE time).',
      ],
      list: [
        'Same product exclusions as HOUSE15 (including gift cards, shipping, taxes and excluded services or editions).',
        'Does not apply to discounted, sale, markdown or already-reduced items; only full-price eligible clothing and jewellery qualify.',
        'Cannot be combined with another discount code, campaign price or store credit; no cash value.',
        'Complimentary personalised inner labels do not exclude eligible garments from the privilege. Personalised items remain final sale for exchange purposes.',
        'We may suspend or withdraw the privilege if the qualifying order is cancelled, payment is reversed, fraud or duplicate accounts are identified, or the personal code is sold, transferred or publicly shared.',
      ],
    },
    {
      title: 'Exchanges, cancellations and returns',
      body: [
        'Where an exchange is allowed under our Shipment & Return Policy, the amount actually paid applies; HOUSE15 is not reused for a second first-purchase benefit. Items with a personalised inner label are final sale and are not eligible for ordinary exchange.',
        'If a qualifying order is cancelled before dispatch, the House Privilege is not activated. Where we cancel because of unavailability or our error, HOUSE15 eligibility may be restored.',
        'Mandatory consumer rights for defective, damaged, incomplete or misdescribed goods are not limited by these Community terms. Where an entire qualifying order is validly refunded under applicable law, the House Privilege may be withdrawn.',
      ],
      list: [],
    },
    {
      title: 'Changes',
      body: [
        'We may update future Community privileges or eligibility. We will not apply changes retrospectively in a way that unfairly removes a privilege already validly earned, except to prevent fraud, as required by law, or as expressly stated here. These Community terms sit alongside our main Terms, Privacy Policy, Shipment & Return Policy and Gift Card terms. Where mandatory UAE law conflicts, that law prevails.',
      ],
      list: [],
    },
  ],
}

const HOUSE_COMMUNITY_AR: CommunityPolicySection = {
  title: 'مجتمع Bint Saeed وامتيازات الدار',
  body: [
    'العضوية في مجتمع Bint Saeed مجانية عند التسجيل ببريد إلكتروني صالح عبر نموذج معتمد. قد تتلقين أخبار الدار والتحديثات والدعوات ومعلومات عن الامتيازات، ويمكنكِ إلغاء الاشتراك التسويقي في أي وقت دون إلغاء طلب قائم أو امتياز مُفعَّل بشكل صحيح.',
    'يجوز لنا رفض العضوية أو إزالتها عند وجود بيانات غير صحيحة أو مكررة أو استخدام غير سليم للحصول على مزايا ترويجية.',
  ],
  subsections: [
    {
      title: 'HOUSE15 — خصم 15% على أول شراء',
      body: [
        'يمكن لأعضاء المجتمع استخدام الرمز HOUSE15 للحصول على خصم 15% على أول عملية شراء مؤهّلة من الملابس والمجوهرات بالسعر الكامل. لا ينطبق HOUSE15 على المنتجات المخفّضة أو في التخفيضات أو ذات السعر المخفّض مسبقاً. الملصق الداخلي المخصّص المجاني لا يستبعد طلباً مؤهّلاً بالسعر الكامل، غير أن أي قطعة تُنتَج بملصق مخصّص تُعدّ بيعاً نهائياً ولا يمكن استبدالها (إلا عند عيب مُثبت أو حيث يقتضي القانون الإلزامي).',
      ],
      list: [
        'مرة واحدة لكل عميلة / أول طلب مؤهّل فقط؛ غير قابل للتطبيق بأثر رجعي.',
        'لا يشمل بطاقات الهدايا ورسوم الشحن والجمارك والضرائب والتعديلات ذات الرسوم المنفصلة والأعمال حسب الطلب والطبعات المحدودة والتعاونات أو المنتجات المستثناة.',
        'لا ينطبق على المنتجات المخفّضة أو في التخفيضات أو ذات السعر المخفّض مسبقاً؛ يؤهّل فقط الملابس والمجوهرات بالسعر الكامل.',
        'لا يُجمع مع خصم أو عرض أو رصيد متجر آخر؛ بلا قيمة نقدية.',
        'شراء بطاقة هدايا فقط لا يُعد أول شراء ولا يفتح امتياز الدار.',
        'يجوز رفض أو عكس HOUSE15 عند الاشتباه المعقول بسوء الاستخدام أو الاحتيال.',
      ],
    },
    {
      title: 'امتياز الدار 10%',
      body: [
        'بعد إتمام ودفع أول طلب مؤهّل، نفعّل امتيازاً شخصياً بنسبة 10% للمشتريات اللاحقة المؤهّلة بالسعر الكامل، مرتبطاً ببريدكِ ومسارياً حتى 29 أغسطس 2027 (11:59 م بتوقيت الإمارات).',
      ],
      list: [
        'نفس الاستثناءات المتعلقة بـ HOUSE15؛ غير قابل للجمع مع عروض أخرى؛ غير قابل للتحويل. لا ينطبق على المنتجات المخفّضة أو في التخفيضات. الملصق المخصّص المجاني لا يستبعد الامتياز، لكن القطع المخصّصة تبقى بيعاً نهائياً لأغراض الاستبدال.',
        'يجوز تعليقه أو سحبه عند الإلغاء أو عكس الدفع أو الاحتيال أو مشاركة الرمز الشخصي.',
      ],
    },
    {
      title: 'الاستبدال والإلغاء والإرجاع',
      body: [
        'حيث يُسمح بالاستبدال وفق سياسة الشحن والإرجاع، يُطبَّق المبلغ المدفوع فعلياً؛ لا يُعاد استخدام HOUSE15 كأول شراء ثانٍ. القطع ذات الملصق الداخلي المخصّص بيع نهائي وغير مؤهلة للاستبدال العادي. عند الإلغاء قبل الشحن لا يُفعَّل الامتياز. الحقوق الإلزامية للسلع المعيبة أو المخالفة للوصف محفوظة.',
      ],
      list: [],
    },
    {
      title: 'التغييرات',
      body: [
        'يجوز تحديث الامتيازات المستقبلية دون سحب غير عادل لامتياز مكتسب بشكل صحيح، باستثناء الاحتيال أو ما يقتضيه القانون. يسري القانون الإماراتي الإلزامي عند التعارض.',
      ],
      list: [],
    },
  ],
}

const HOUSE_COMMUNITY_FR: CommunityPolicySection = {
  title: 'Communauté Bint Saeed et privilèges de la Maison',
  body: [
    'L’adhésion à la Communauté Bint Saeed est gratuite lors d’une inscription avec une adresse e-mail valide. Les membres peuvent recevoir des nouvelles de la Maison et se désinscrire du marketing à tout moment sans annuler une commande déjà passée ni un privilège déjà activé.',
    'Nous pouvons refuser ou retirer une adhésion en cas d’informations fausses, dupliquées ou d’usage abusif des avantages.',
  ],
  subsections: [
    {
      title: 'HOUSE15 — −15 % sur le premier achat',
      body: [
        'Les membres peuvent utiliser le code HOUSE15 pour −15 % sur un premier achat éligible de vêtements et bijoux à prix plein. HOUSE15 ne s’applique pas aux articles déjà soldés, en promotion ou à prix réduit. Une étiquette intérieure personnalisée offerte n’exclut pas une commande éligible à prix plein, mais tout article produit avec une étiquette personnalisée est en vente ferme et ne peut être échangé (sauf défaut avéré ou exigence légale impérative).',
      ],
      list: [
        'Une fois par cliente / première commande éligible ; non rétroactif.',
        'Hors cartes cadeaux, livraison, douanes, taxes, retouches facturées séparément, sur-mesure, éditions limitées, collaborations ou articles exclus.',
        'Ne s’applique pas aux articles soldés, en promotion, markdown ou déjà réduits ; seuls les vêtements et bijoux éligibles à prix plein sont concernés.',
        'Non cumulable ; sans valeur monétaire. Un achat de carte cadeau seule n’ouvre pas le House Privilege.',
        'Nous pouvons refuser ou annuler HOUSE15 en cas d’abus ou de fraude raisonnablement identifiés.',
      ],
    },
    {
      title: 'House Privilege −10 %',
      body: [
        'Après paiement et achèvement de la première commande éligible, un privilège personnel de −10 % est activé pour les achats futurs éligibles à prix plein, lié à l’e-mail enregistré, valable jusqu’au 29 août 2027 (23 h 59, heure des EAU). Mêmes exclusions que HOUSE15, y compris les articles déjà soldés ou à prix réduit ; non cumulable ; non cessible. L’étiquette personnalisée offerte n’exclut pas le privilège ; les articles personnalisés restent en vente ferme pour les échanges.',
      ],
      list: [],
    },
    {
      title: 'Échanges, annulations et retours',
      body: [
        'Les échanges suivent la politique d’expédition et de retours. HOUSE15 n’est pas réutilisé comme second premier achat. Les articles à étiquette intérieure personnalisée sont en vente ferme et ne peuvent pas faire l’objet d’un échange ordinaire. Annulation avant expédition : pas d’activation du privilège. Les droits impératifs pour biens défectueux ou non conformes demeurent.',
      ],
      list: [],
    },
    {
      title: 'Modifications',
      body: [
        'Les privilèges futurs peuvent évoluer sans retirer injustement un avantage déjà valablement acquis, sauf fraude ou exigence légale. Le droit impératif des EAU prévaut en cas de conflit.',
      ],
      list: [],
    },
  ],
}

/** Concise localized packs — same protections, lighter wording. */
const HOUSE_COMMUNITY_DE: CommunityPolicySection = {
  title: 'Bint Saeed Community und House Privileges',
  body: [
    'Die Mitgliedschaft ist kostenlos bei Registrierung mit gültiger E-Mail. Marketing kann jederzeit abbestellt werden, ohne bestehende Bestellungen oder bereits aktivierte Privilegien zu berühren. Missbrauch kann zur Ablehnung oder Entfernung führen.',
  ],
  subsections: [
    {
      title: 'HOUSE15 — 15 % auf den ersten Kauf',
      body: [
        'Einmal pro Kundin / erste qualifizierende Vollpreis-Bestellung von Bekleidung und Schmuck. Nicht für Geschenkkarten, Versand, Steuern, separat berechnete Änderungen, Maßanfertigungen oder ausgeschlossene Artikel. Nicht für reduzierte, Sale- oder bereits rabattierte Artikel. Nicht kombinierbar. Missbrauch kann zur Verweigerung führen.',
      ],
      list: [],
    },
    {
      title: '10 % House Privilege',
      body: [
        'Nach bezahlter, abgeschlossener Erbestellung: persönliches 10 %-Privileg für spätere Vollpreis-Käufe, an die E-Mail gebunden, gültig bis 29. August 2027 (23:59 Uhr UAE-Zeit). Gleiche Ausschlüsse; nicht übertragbar.',
      ],
      list: [],
    },
    {
      title: 'Umtausch, Storno, Rückgabe',
      body: [
        'Umtausch gemäß Versand- und Rückgabepolitik. Kein zweites First-Purchase. Artikel mit personalisiertem Innenetikett sind Endverkauf und vom gewöhnlichen Umtausch ausgeschlossen. Storno vor Versand: kein Privilege. Zwingende Verbraucherrechte bleiben unberührt.',
      ],
      list: [],
    },
  ],
}

const HOUSE_COMMUNITY_IT: CommunityPolicySection = {
  title: 'Comunità Bint Saeed e House Privilege',
  body: [
    'L’iscrizione è gratuita con e-mail valida. È possibile annullare il marketing in qualsiasi momento senza annullare ordini già effettuati o privilegi già attivati. Possiamo rifiutare iscrizioni abusive.',
  ],
  subsections: [
    {
      title: 'HOUSE15 — −15% sul primo acquisto',
      body: [
        'Una volta per cliente / primo ordine idoneo a prezzo pieno (abbigliamento e gioielli). Escluse gift card, spedizione, tasse, lavori su misura e articoli esclusi. Non vale su articoli già scontati, in saldo o ridotti. Non cumulabile.',
      ],
      list: [],
    },
    {
      title: 'House Privilege −10%',
      body: [
        'Dopo il primo ordine idoneo pagato e completato: privilegio personale −10% sugli acquisti futuri a prezzo pieno, legato all’e-mail, valido fino al 29 agosto 2027 (23:59 ora UAE).',
      ],
      list: [],
    },
    {
      title: 'Cambi, cancellazioni e resi',
      body: [
        'I cambi seguono la policy di spedizione e resi. Nessun secondo primo acquisto. Gli articoli con etichetta interna personalizzata sono vendita definitiva e non ammessi al cambio ordinario. Cancellazione prima della spedizione: nessuna attivazione. I diritti obbligatori restano.',
      ],
      list: [],
    },
  ],
}

const HOUSE_COMMUNITY_ES: CommunityPolicySection = {
  title: 'Comunidad Bint Saeed y House Privilege',
  body: [
    'La membresía es gratuita con un correo válido. Puede darse de baja del marketing en cualquier momento sin cancelar pedidos ni privilegios ya activados. Podemos rechazar usos indebidos.',
  ],
  subsections: [
    {
      title: 'HOUSE15 — 15% en la primera compra',
      body: [
        'Una vez por clienta / primer pedido elegible a precio completo (ropa y joyería). No aplica a tarjetas regalo, envío, impuestos, a medida ni artículos excluidos. No aplica a artículos rebajados, en oferta o ya con descuento. No acumulable.',
      ],
      list: [],
    },
    {
      title: 'House Privilege 10%',
      body: [
        'Tras el primer pedido elegible pagado y completado: privilegio personal del 10% en compras futuras a precio completo, vinculado al correo, válido hasta el 29 de agosto de 2027 (23:59 hora de EAU).',
      ],
      list: [],
    },
    {
      title: 'Cambios, cancelaciones y devoluciones',
      body: [
        'Los cambios siguen la política de envío y devoluciones. Sin segundo beneficio de primera compra. Los artículos con etiqueta interior personalizada son venta definitiva y no admiten cambio ordinario. Cancelación antes del envío: sin activación. Los derechos obligatorios se mantienen.',
      ],
      list: [],
    },
  ],
}

const HOUSE_COMMUNITY_NL: CommunityPolicySection = {
  title: 'Bint Saeed Community en House Privilege',
  body: [
    'Lidmaatschap is gratis bij registratie met een geldig e-mailadres. Marketing kunt u altijd stopzetten zonder bestaande bestellingen of geactiveerde privileges te annuleren.',
  ],
  subsections: [
    {
      title: 'HOUSE15 — 15% op de eerste aankoop',
      body: [
        'Eén keer per klant / eerste kwalificerende full-price bestelling (kleding en sieraden). Niet voor cadeaukaarten, verzending, belastingen of uitgesloten items. Niet voor afgeprijsde, sale- of reeds gereduceerde artikelen. Niet combineerbaar.',
      ],
      list: [],
    },
    {
      title: '10% House Privilege',
      body: [
        'Na betaalde, voltooide eerste kwalificerende bestelling: persoonlijk 10%-privilege voor latere full-price aankopen, gekoppeld aan e-mail, geldig tot 29 augustus 2027 (23:59 UAE-tijd).',
      ],
      list: [],
    },
    {
      title: 'Ruilen, annuleren en retourneren',
      body: [
        'Ruilen volgt het verzend- en retourbeleid. Geen tweede first-purchase. Artikelen met gepersonaliseerd binnenlabel zijn definitieve verkoop en niet voor gewone ruil. Annulering vóór verzending: geen privilege. Dwingende rechten blijven gelden.',
      ],
      list: [],
    },
  ],
}

const HOUSE_COMMUNITY_PT: CommunityPolicySection = {
  title: 'Comunidade Bint Saeed e House Privilege',
  body: [
    'A adesão é gratuita com e-mail válido. Pode cancelar o marketing a qualquer momento sem anular encomendas ou privilégios já ativados.',
  ],
  subsections: [
    {
      title: 'HOUSE15 — 15% na primeira compra',
      body: [
        'Uma vez por cliente / primeira encomenda elegível a preço inteiro (vestuário e joalharia). Exclui gift cards, portes, impostos e artigos excluídos. Não se aplica a artigos já descontados, em promoção ou markdown. Não acumulável.',
      ],
      list: [],
    },
    {
      title: 'House Privilege 10%',
      body: [
        'Após a primeira encomenda elegível paga e concluída: privilégio pessoal de 10% em compras futuras a preço inteiro, ligado ao e-mail, válido até 29 de agosto de 2027 (23:59 hora dos EAU).',
      ],
      list: [],
    },
    {
      title: 'Trocas, cancelamentos e devoluções',
      body: [
        'As trocas seguem a política de envio e devolução. Sem segundo benefício de primeira compra. Artigos com etiqueta interior personalizada são venda definitiva e não admitem troca ordinária. Cancelamento antes do envio: sem ativação.',
      ],
      list: [],
    },
  ],
}

const HOUSE_COMMUNITY_ID: CommunityPolicySection = {
  title: 'Komunitas Bint Saeed dan House Privilege',
  body: [
    'Keanggotaan gratis dengan email yang valid. Anda dapat berhenti dari pemasaran kapan saja tanpa membatalkan pesanan atau privilege yang sudah aktif. Kami dapat menolak penyalahgunaan.',
  ],
  subsections: [
    {
      title: 'HOUSE15 — diskon 15% pembelian pertama',
      body: [
        'Sekali per pelanggan / pesanan pertama yang memenuhi syarat dengan harga penuh (pakaian dan perhiasan). Tidak untuk gift card, ongkir, pajak, atau item yang dikecualikan. Tidak berlaku untuk item diskon, sale, atau yang sudah diturunkan harganya. Tidak dapat digabung.',
      ],
      list: [],
    },
    {
      title: 'House Privilege 10%',
      body: [
        'Setelah pesanan pertama yang memenuhi syarat dibayar dan selesai: privilege pribadi 10% untuk pembelian full-price berikutnya, terikat email, berlaku hingga 29 Agustus 2027 (23.59 waktu UEA).',
      ],
      list: [],
    },
    {
      title: 'Tukar, batal, dan retur',
      body: [
        'Penukaran mengikuti kebijakan pengiriman & retur. Tanpa manfaat first-purchase kedua. Item dengan label dalam personalisasi bersifat final sale dan tidak untuk penukaran biasa. Pembatalan sebelum pengiriman: tanpa aktivasi privilege.',
      ],
      list: [],
    },
  ],
}

const HOUSE_COMMUNITY_MS: CommunityPolicySection = {
  title: 'Komuniti Bint Saeed dan House Privilege',
  body: [
    'Keahlian percuma dengan e-mel yang sah. Anda boleh berhenti pemasaran pada bila-bila masa tanpa membatalkan pesanan atau privilege yang sudah aktif.',
  ],
  subsections: [
    {
      title: 'HOUSE15 — diskaun 15% pembelian pertama',
      body: [
        'Sekali setiap pelanggan / pesanan pertama yang layak pada harga penuh. Tidak untuk kad hadiah, penghantaran, cukai atau item dikecualikan. Tidak terpakai pada item diskaun, jualan atau yang sudah diturunkan harga. Tidak boleh digabungkan.',
      ],
      list: [],
    },
    {
      title: 'House Privilege 10%',
      body: [
        'Selepas pesanan pertama yang layak dibayar dan selesai: privilege peribadi 10% untuk pembelian full-price seterusnya, dikunci kepada e-mel, sah sehingga 29 Ogos 2027 (11:59 malam waktu UAE).',
      ],
      list: [],
    },
    {
      title: 'Tukar, batal dan pulangan',
      body: [
        'Pertukaran mengikut polisi penghantaran & pulangan. Tiada manfaat first-purchase kedua. Item dengan label dalam diperibadikan bersifat final sale dan tidak untuk pertukaran biasa. Pembatalan sebelum penghantaran: tiada pengaktifan.',
      ],
      list: [],
    },
  ],
}

const HOUSE_COMMUNITY_ZH: CommunityPolicySection = {
  title: 'Bint Saeed 社群与 House Privilege',
  body: [
    '使用有效电子邮箱通过官方表单注册即可免费加入社群。您可随时取消营销邮件，不影响已下订单或已有效激活的优惠。我们可拒绝虚假或滥用注册。',
  ],
  subsections: [
    {
      title: 'HOUSE15 — 首单 15% 优惠',
      body: [
        '每位顾客仅限一次 / 首笔合格全价服装与珠宝订单。不适用于礼品卡、运费、税费、单独计费的修改、定制及标明除外的商品。不适用于已打折、特卖或已降价商品。不可与其他优惠叠加。',
      ],
      list: [],
    },
    {
      title: '10% House Privilege',
      body: [
        '首笔合格订单付款并完成后，激活绑定该邮箱的个人 10% 全价优惠，有效期至 2027 年 8 月 29 日（阿联酋时间 23:59）。不可转让，排除规则同 HOUSE15。',
      ],
      list: [],
    },
    {
      title: '换货、取消与退货',
      body: [
        '换货遵循发货与退货政策。不会再次获得首单权益。带有个性化内标的商品为最终售出，不适用普通换货。发货前取消：不激活 Privilege。强制性消费者权利不受影响。',
      ],
      list: [],
    },
  ],
}

const HOUSE_COMMUNITY_RU: CommunityPolicySection = {
  title: 'Сообщество Bint Saeed и House Privilege',
  body: [
    'Членство бесплатно при регистрации с действительным e-mail. От маркетинга можно отказаться в любой момент, не отменяя уже сделанный заказ или уже активированную привилегию.',
  ],
  subsections: [
    {
      title: 'HOUSE15 — скидка 15% на первую покупку',
      body: [
        'Один раз на клиента / первый подходящий заказ по полной цене (одежда и украшения). Не действует на подарочные карты, доставку, налоги и исключённые позиции. Не действует на товары со скидкой, распродажей или уже сниженной ценой. Не суммируется.',
      ],
      list: [],
    },
    {
      title: 'House Privilege 10%',
      body: [
        'После оплаты и завершения первого подходящего заказа: личная скидка 10% на последующие покупки по полной цене, привязанная к e-mail, до 29 августа 2027 г. (23:59 по времени ОАЭ).',
      ],
      list: [],
    },
    {
      title: 'Обмен, отмена и возврат',
      body: [
        'Обмен — по политике доставки и возврата. Без повторной «первой покупки». Изделия с персонализированной внутренней этикеткой — окончательная продажа и не подлежат обычному обмену. Отмена до отправки: без активации привилегии.',
      ],
      list: [],
    },
  ],
}
