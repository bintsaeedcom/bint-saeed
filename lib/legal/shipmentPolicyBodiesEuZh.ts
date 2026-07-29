import type { PolicySection } from '@/lib/legal/policyContentId'
import { OFFICIAL_EMAILS } from '@/lib/brand/officialEmails'
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

const SECTIONS: Record<EuZhLocale, PolicySection[]> = {
  fr: [
    {
      title: '1. Déclaration liminaire',
      body: [
        'Chaque pièce Bint Saeed est créée selon la demande et le choix précis du client. La production ne commence qu’après confirmation de la commande.',
        'Notre engagement est de livrer chaque pièce dans l’état, la qualité et le savoir-faire attendus de Bint Saeed. En cas de difficulté, notre équipe travaillera étroitement avec le client afin de trouver une résolution appropriée.',
      ],
    },
    {
      title: '2. Politique générale',
      body: [
        'Comme de nombreuses pièces Bint Saeed sont produites sur demande après confirmation de commande, nous n’offrons pas de remboursement pour un changement d’avis, une préférence personnelle ou un choix de taille effectué par le client.',
        'Nous comprenons toutefois que des circonstances peuvent exiger une taille alternative.',
        'Les articles éligibles peuvent être échangés dans un délai de 14 jours après livraison, sous réserve de l’approbation du service Retours de Bint Saeed et des conditions ci-dessous.',
        `Pour demander un échange, les clients doivent contacter ${OFFICIAL_EMAILS.returns} dans les 14 jours suivant la réception de leur commande.`,
        'Une autorisation préalable est requise avant tout retour d’article. Une fois l’approbation accordée, des instructions de retour détaillées seront fournies par notre équipe.',
        'Pour être éligible à un échange ou à un retour autorisé, votre article doit être dans le même état que lors de sa réception, non porté ni utilisé, avec ses étiquettes, et dans son emballage d’origine. Vous aurez également besoin du reçu ou de la preuve d’achat d’origine, y compris votre facture ou numéro de commande.',
        'Pour être éligibles à l’échange, les articles doivent :',
      ],
      list: [
        'Être non portés, non utilisés et en état d’origine.',
        'Être retournés avec toutes les étiquettes, scellés et labels de sécurité d’origine intacts et non altérés.',
        'Être retournés dans leur emballage d’origine.',
        'Être accompagnés du reçu ou de la preuve d’achat d’origine, y compris la facture ou le numéro de commande.',
        'Être exempts de parfum, de fumée, de taches, d’altérations, de dommages ou de signes d’usure.',
        'Être approuvés par le service Retours de Bint Saeed avant expédition.',
      ],
      subsections: [
        {
          title: '',
          body: [
            'Bint Saeed n’acceptera pas d’échange ou de retour lorsque les étiquettes, scellés ou labels de sécurité ont été retirés, coupés, endommagés ou altérés, ou lorsque les photographies soumises à l’appui d’une demande indiquent qu’un retrait ou une altération a été tenté.',
            'Aucun échange n’est traité tant que les articles approuvés n’ont pas été physiquement reçus et inspectés dans notre atelier.',
            'Lorsqu’un échange ou un retour approuvé nécessite le renvoi des marchandises à Bint Saeed, des frais d’expédition de retour forfaitaires s’appliquent : AED 35 pour les retours en provenance des Émirats arabes unis, et EUR 35 (ou l’équivalent net dans la devise sélectionnée) pour les retours internationaux. Ces frais sont annulés lorsque le retour résulte d’un défaut vérifié de la Maison, y compris un défaut de fabrication ou une non-conformité matérielle, ou lorsque le droit applicable l’exige autrement.',
            'Les pièces personnalisées, les spécifications sur mesure, les vêtements altérés et les articles produits selon les exigences spécifiques d’un client ne sont pas éligibles à l’échange, sauf en cas de défaut de fabrication vérifié ou de non-conformité matérielle.',
            'Pour des raisons de santé, d’hygiène et de sécurité personnelle, les boucles d’oreilles sont en vente finale et ne peuvent être ni échangées ni remboursées, sauf en cas de défaut de fabrication vérifié ou de non-conformité matérielle.',
          ],
          list: [
          ],
        },
      ],
    },
    {
      title: '3. Exceptions (alignement sur la protection des consommateurs aux Émirats arabes unis)',
      body: [
        'Conformément aux lois applicables des Émirats arabes unis, des exceptions peuvent s’appliquer lorsque :',
      ],
      list: [
        'L’article présente un défaut de fabrication vérifié.',
        'L’article diffère matériellement de la commande confirmée.',
      ],
      subsections: [
        {
          title: '',
          body: [
            'Dans de tels cas :',
          ],
          list: [
            'Le client doit nous en informer dans les 48 heures suivant la livraison.',
            'Des preuves photographiques claires doivent être fournies par e-mail.',
            'L’article doit demeurer inutilisé et dans son état d’origine.',
          ],
        },
        {
          title: '',
          body: [
            'Après examen, Bint Saeed travaillera avec le client afin de déterminer la résolution la plus appropriée, qui peut inclure :',
          ],
          list: [
            'La réparation de l’article.',
            'Le remplacement de l’article.',
            'L’échange de l’article.',
            'Un avoir magasin.',
            'Un remboursement monétaire, uniquement lorsque la réparation ou le remplacement n’est pas raisonnablement possible, ou lorsque le droit applicable l’exige.',
          ],
        },
        {
          title: '',
          body: [
            'Accepter un produit défectueux ou matériellement non conforme pour évaluation n’entraîne pas automatiquement un remboursement monétaire. Les remèdes privilégiés sont l’évaluation, la réparation, le remplacement, l’échange ou un avoir magasin.',
            'Les échanges de taille, lorsqu’ils sont approuvés, sont des échanges uniquement et ne sont pas traités comme des remboursements ou des retours ordinaires pour changement d’avis.',
            'Notre objectif est toujours de fournir une solution juste et appropriée tout en maintenant les standards de qualité de la maison.',
          ],
          list: [
          ],
        },
      ],
    },
    {
      title: '4. Cas non éligibles',
      body: [
        'Les motifs suivants ne constituent pas un fondement pour un remboursement, un échange ou un retour :',
      ],
      list: [
        'Changement d’avis.',
        'Préférence personnelle.',
        'Taille incorrecte sélectionnée par le client.',
        'Variations mineures inhérentes à une production artisanale.',
        'Différences de couleur résultant des réglages d’écran ou des affichages d’appareil.',
        'Dommages résultant d’un entretien inapproprié, d’une mauvaise utilisation, d’une altération ou de l’usure normale.',
        'Retrait, découpe, endommagement ou altération des étiquettes, scellés ou labels de sécurité d’origine, y compris lorsque des photographies indiquent qu’un retrait ou une altération a été tenté.',
        'Les boucles d’oreilles, qui sont en vente finale pour des raisons de santé, d’hygiène et de sécurité personnelle (sauf en cas de défaut de fabrication vérifié ou de non-conformité matérielle).',
      ],
    },
    {
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
    {
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
    {
      title: '7. Reconnaissance finale',
      body: [
        'En passant commande auprès de Bint Saeed, le client confirme avoir pris connaissance et accepté la description du produit, les informations de taille, le délai de production et les termes énoncés dans la présente politique.',
        'Le client reconnaît en outre le caractère bespoke de nombreux vêtements Bint Saeed et comprend les limitations applicables relatives aux remboursements, échanges et annulations.',
      ],
    },
    {
      title: '8. Expédition et livraison',
      body: [
        'Nous visons à expédier chaque commande aussi efficacement que possible tout en maintenant les standards de qualité de Bint Saeed.',
        'Les commandes internationales sont traitées avec DHL Express. Aux Émirats arabes unis, les commandes sont opérées par Jeebly. D’autres transporteurs pourront être introduits à mesure que notre réseau logistique s’étend.',
        'Si vous avez besoin d’une livraison pour une occasion particulière ou à une date fixe, ou si vous souhaitez recevoir votre commande plus tôt, veuillez contacter Client Services avant de passer commande sur WhatsApp au +971 50 229 9402 ou à support@bintsaeed.com. Client Services est disponible du dimanche au jeudi, de 9 h à 18 h (heure d’Abou Dabi). Les délais d’expédition et de transit sont des estimations uniquement et ne peuvent être garantis.',
        'Bien que nous fassions tous les efforts pour respecter les délais estimés, les dates de livraison ne sont pas garanties et peuvent être affectées par des circonstances indépendantes de notre volonté raisonnable.',
        'Une fois la commande transférée au transporteur, les délais de livraison sont soumis au réseau du transporteur, à l’infrastructure locale de livraison, aux procédures douanières et aux réglementations du pays de destination. Bien que nous assistions toujours les clients pour le suivi et la résolution des problèmes d’expédition dans la mesure du possible, nous ne pouvons garantir les délais de livraison après remise au transporteur.',
      ],
      list: [
        'La livraison offerte aux Émirats arabes unis s’applique aux commandes dont le sous-total des marchandises est de AED 1,000 ou plus.',
        'La livraison mondiale offerte s’applique aux commandes dont le sous-total des marchandises est de EUR 500 ou plus (ou l’équivalent net affiché dans la devise sélectionnée).',
        'En deçà de ces seuils, des frais d’expédition forfaitaires s’appliquent : AED 35 aux Émirats arabes unis, et EUR 30 (ou l’équivalent net dans la devise sélectionnée) pour les destinations internationales, confirmés au paiement.',
        'L’heure limite pour une prise en charge le jour même est 14 h 00, heure standard du Golfe (Dubaï, GMT+4). Les jours de préparation et d’expédition sont du lundi au samedi.',
        'Les bijoux, accessoires lifestyle et certains articles en stock peuvent être expédiés le jour même s’ils sont commandés avant 14 h 00, mais l’expédition peut prendre jusqu’à 3 jours ouvrés.',
        'Les vêtements bespoke sont généralement expédiés sous environ deux semaines après confirmation de la commande, et dans un délai maximum d’environ 14 jours calendaires après confirmation (soit jusqu’à 12 jours de préparation du lundi au samedi ; délai de préparation : 0–12 jours ouvrés).',
        'Une fois expédiées, le transit par transporteur aux Émirats arabes unis prend généralement 1–3 jours ouvrés. Le délai total estimé de livraison aux ÉAU est généralement de 1–15 jours ouvrés à compter de la confirmation de commande.',
        'Le transit international prend généralement environ 3–10 jours ouvrés après expédition, selon la destination et le dédouanement.',
        'Les estimations de livraison excluent les dimanches, les jours fériés, les retards transporteurs et les circonstances indépendantes de la volonté de Bint Saeed.',
        'Une fois la commande expédiée, les clients reçoivent une confirmation d’expédition et les détails de suivi lorsqu’ils sont disponibles.',
      ],
    },
    {
      title: '9. Détails de livraison et responsabilités du client',
      body: [
        'Les clients sont responsables de s’assurer que l’adresse de livraison, le numéro de téléphone et l’adresse e-mail sont complets et exacts lors du paiement. Les transporteurs peuvent utiliser le numéro de téléphone ou l’e-mail fourni pour organiser la livraison.',
        'Bint Saeed n’est pas responsable d’une non-livraison, d’un retard ou d’un retour de colis résultant d’informations de livraison incomplètes, incorrectes ou obsolètes fournies par le client.',
        'Lorsque la destination exige une boîte postale (P.O. Box) ou un autre format d’adresse local pour une livraison réussie, les clients doivent fournir ces détails en intégralité. À défaut, le colis peut être retardé ou retourné aux risques du client.',
      ],
    },
    {
      title: '10. Douanes et importation',
      body: [
        'Tous droits de douane, taxes d’importation, frais locaux ou frais de dédouanement imposés par le pays de destination demeurent à la charge du destinataire, sauf indication contraire lors du paiement. Ces frais sont distincts de la commande du client auprès de Bint Saeed.',
        'Les clients sont invités à consulter leur autorité douanière locale concernant les réglementations d’importation, les restrictions et les frais éventuels avant de commander. Les règles douanières varient selon les pays ; une méconnaissance des exigences locales peut entraîner un retard, des frais supplémentaires, un refus ou un retour du colis.',
        'Bint Saeed n’est pas responsable des colis refusés, retenus, retardés ou saisis par les douanes, ni des droits, taxes ou pénalités prélevés une fois le colis parti des Émirats arabes unis.',
      ],
    },
    {
      title: '11. Envois non livrables',
      body: [
        'Si un envoi est retourné à Bint Saeed en raison d’une adresse incorrecte ou incomplète, d’échecs de tentative de livraison, d’un refus du colis, d’un refus de payer les frais de douane, de restrictions à l’importation, ou de motifs comparables non imputables à un défaut vérifié de la Maison, Bint Saeed n’est tenue à aucun remboursement de la commande.',
        'À notre discrétion, nous pouvons proposer une réexpédition aux frais du client, un échange si la pièce demeure éligible, un avoir magasin, ou une autre assistance. Lorsque les marchandises sont saisies par les douanes, abandonnées sur instruction du transporteur, ou lorsque le recouvrement n’est pas raisonnablement possible, aucun avoir ne sera émis.',
        'Comme indiqué ailleurs dans la présente politique, aucun remboursement n’est offert pour un changement d’avis. Les remboursements monétaires, lorsqu’ils sont envisagés, ne surviennent qu’en lien avec un défaut de fabrication vérifié ou une non-conformité matérielle, et uniquement lorsque la réparation ou le remplacement n’est pas raisonnablement possible, ou lorsque le droit applicable l’exige.',
      ],
    },
    {
      title: '12. Force majeure',
      body: [
        'Bint Saeed ne saurait être tenue responsable des retards, interruptions ou manquements à ses obligations lorsque ces circonstances résultent d’événements indépendants de son contrôle raisonnable.',
        'Ces événements peuvent notamment comprendre, sans s’y limiter :',
        'Dans de telles situations, la production, l’expédition, la livraison et les autres obligations peuvent être suspendues ou différées pour la durée de l’événement et toute période de rétablissement raisonnable ultérieure.',
      ],
      list: [
        'Guerre ou conflit armé.',
        'Troubles civils ou instabilité politique.',
        'Actes du gouvernement ou des autorités publiques.',
        'Inspections douanières, retards douaniers ou restrictions à l’importation.',
        'Perturbations des transports.',
        'Catastrophes naturelles.',
        'Conflits du travail ou grèves.',
        'Urgences de santé publique.',
        'Défaillances des services publics, perturbations des télécommunications ou pannes technologiques.',
        'Événements de force majeure ou circonstances comparables indépendantes de notre contrôle raisonnable.',
      ],
    },
    {
      title: `13. ${CLAUSE_TITLE.fr}`,
      body: [CLAUSE_SHORT.fr],
    },
    {
      title: '14. Contact',
      body: [
        'Pour les échanges, demandes de retour et réclamations pour défaut :',
        OFFICIAL_EMAILS.returns,
        'Pour le support client général :',
        OFFICIAL_EMAILS.support,
        'WhatsApp : +971 50 229 9402',
        'Client Services est disponible du dimanche au jeudi, de 9 h à 18 h (heure d’Abou Dabi).',
        'Veuillez indiquer votre numéro de commande ou de facture, vos coordonnées et, le cas échéant, toute photographie à l’appui. Notre équipe examinera votre demande et vous guidera sur les prochaines étapes.',
        'Chez Bint Saeed, nous nous engageons à traiter chaque demande avec équité, professionnalisme et soin.',
      ],
    },
  ],
  de: [
    {
      title: '1. Eröffnungsstatement',
      body: [
        'Jedes Bint-Saeed-Stück wird nach der konkreten Anfrage und Auswahl des Kunden gefertigt. Die Produktion beginnt erst nach Bestätigung der Bestellung.',
        'Unser Anspruch ist es, jedes Stück in dem Zustand, der Qualität und der Handwerkskunst zu liefern, die von Bint Saeed erwartet werden. Sollte ein Problem auftreten, arbeitet unser Team eng mit dem Kunden zusammen, um eine angemessene Lösung zu finden.',
      ],
    },
    {
      title: '2. Allgemeine Richtlinie',
      body: [
        'Da viele Bint-Saeed-Stücke nach Bestellbestätigung auf Abruf gefertigt werden, bieten wir keine Erstattung bei Meinungsänderung, persönlicher Präferenz oder vom Kunden gewählter Größe an.',
        'Gleichwohl verstehen wir, dass Umstände eintreten können, in denen eine alternative Größe erforderlich ist.',
        'Berechtigte Artikel können innerhalb von 14 Tagen nach Lieferung umgetauscht werden, vorbehaltlich der Genehmigung durch die Bint Saeed Returns Department und der nachstehenden Bedingungen.',
        `Um einen Umtausch zu beantragen, müssen Kunden ${OFFICIAL_EMAILS.returns} innerhalb von 14 Tagen nach Erhalt ihrer Bestellung kontaktieren.`,
        'Vor jeder Rücksendung ist eine vorherige Genehmigung erforderlich. Nach Freigabe stellt unser Team detaillierte Rückgabeanweisungen bereit.',
        'Um für einen Umtausch oder eine genehmigte Rückgabe berechtigt zu sein, muss Ihr Artikel denselben Zustand wie bei Erhalt aufweisen, ungetragen bzw. unbenutzt, mit Etiketten und in der Originalverpackung. Sie benötigen zudem den Originalbeleg oder Kaufnachweis, einschließlich Rechnung oder Bestellnummer.',
        'Um umtauschfähig zu sein, müssen Artikel:',
      ],
      list: [
        'Ungetragen, unbenutzt und im Originalzustand sein.',
        'Mit allen originalen Etiketten, Siegeln und Sicherheitskennzeichnungen unversehrt und ungestört zurückgesandt werden.',
        'In der Originalverpackung zurückgesandt werden.',
        'Vom Originalbeleg oder Kaufnachweis begleitet sein, einschließlich Rechnung oder Bestellnummer.',
        'Frei von Parfüm, Rauch, Flecken, Änderungen, Schäden oder Gebrauchsspuren sein.',
        'Vor dem Versand durch die Bint Saeed Returns Department genehmigt sein.',
      ],
      subsections: [
        {
          title: '',
          body: [
            'Bint Saeed akzeptiert keinen Umtausch und keine Rückgabe, wenn Etiketten, Siegel oder Sicherheitskennzeichnungen entfernt, durchgeschnitten, beschädigt oder verändert wurden oder wenn vorgelegte Fotos erkennen lassen, dass eine Entfernung oder Manipulation versucht wurde.',
            'Ein Umtausch wird erst bearbeitet, nachdem die genehmigte Ware physisch in unserem Atelier eingegangen und geprüft wurde.',
            'Erfordert ein genehmigter Umtausch oder eine genehmigte Rückgabe den Rückversand an Bint Saeed, gilt eine pauschale Rückversandgebühr: AED 35 für Rücksendungen aus den Vereinigten Arabischen Emiraten und EUR 35 (oder das reine Äquivalent in der gewählten Währung) für internationale Rücksendungen. Diese Gebühr entfällt, wenn die Rückgabe auf einen verifizierten Fehler des Hauses zurückgeht, einschließlich eines Herstellungsfehlers oder einer wesentlichen Nichtkonformität, oder soweit das anwendbare Recht anderes verlangt.',
            'Personalisierte Stücke, maßgeschneiderte Spezifikationen, veränderte Kleidungsstücke und Artikel, die nach spezifischen Kundenanforderungen gefertigt wurden, sind vom Umtausch ausgeschlossen, außer bei verifiziertem Herstellungsfehler oder wesentlicher Nichtkonformität.',
            'Aus Gründen der Gesundheit, Hygiene und persönlichen Sicherheit sind Ohrringe endgültig verkauft und können weder umgetauscht noch erstattet werden, außer bei verifiziertem Herstellungsfehler oder wesentlicher Nichtkonformität.',
          ],
          list: [
          ],
        },
      ],
    },
    {
      title: '3. Ausnahmen (Ausrichtung an den Verbraucherschutzvorschriften der Vereinigten Arabischen Emirate)',
      body: [
        'Nach den anwendbaren Gesetzen der Vereinigten Arabischen Emirate können Ausnahmen gelten, wenn:',
      ],
      list: [
        'Der Artikel einen verifizierten Herstellungsfehler aufweist.',
        'Der Artikel wesentlich von der bestätigten Bestellung abweicht.',
      ],
      subsections: [
        {
          title: '',
          body: [
            'In solchen Fällen:',
          ],
          list: [
            'Der Kunde muss uns innerhalb von 48 Stunden nach Lieferung benachrichtigen.',
            'Klare fotografische Nachweise müssen per E-Mail übermittelt werden.',
            'Der Artikel muss unbenutzt und im Originalzustand verbleiben.',
          ],
        },
        {
          title: '',
          body: [
            'Nach Prüfung arbeitet Bint Saeed mit dem Kunden zusammen, um die angemessenste Lösung zu bestimmen, die Folgendes umfassen kann:',
          ],
          list: [
            'Reparatur des Artikels.',
            'Ersatz des Artikels.',
            'Umtausch des Artikels.',
            'Gutschrift.',
            'Eine monetäre Erstattung nur, wenn Reparatur oder Ersatz nicht vernünftigerweise möglich ist oder das anwendbare Recht dies verlangt.',
          ],
        },
        {
          title: '',
          body: [
            'Die Annahme eines defekten oder wesentlich nicht konformen Produkts zur Prüfung bedeutet nicht automatisch eine monetäre Erstattung. Bevorzugte Abhilfen sind Prüfung, Reparatur, Ersatz, Umtausch oder Gutschrift.',
            'Größentausch, sofern genehmigt, ist ausschließlich ein Umtausch und wird nicht als Erstattung oder gewöhnliche Rückgabe wegen Meinungsänderung behandelt.',
            'Unser Ziel ist stets, eine faire und angemessene Lösung zu bieten und zugleich die Qualitätsstandards des Hauses zu wahren.',
          ],
          list: [
          ],
        },
      ],
    },
    {
      title: '4. Nicht berechtigte Fälle',
      body: [
        'Folgendes stellt keinen Grund für Erstattung, Umtausch oder Rückgabe dar:',
      ],
      list: [
        'Meinungsänderung.',
        'Persönliche Präferenz.',
        'Vom Kunden falsch gewählte Größe.',
        'Geringfügige Abweichungen, die der handwerklichen Fertigung innewohnen.',
        'Farbunterschiede infolge von Bildschirmeinstellungen oder Geräteanzeigen.',
        'Schäden durch unsachgemäße Pflege, Fehlgebrauch, Veränderung oder normalen Verschleiß.',
        'Entfernung, Durchschneiden, Beschädigung oder Veränderung originaler Etiketten, Siegel oder Sicherheitskennzeichnungen, einschließlich Fällen, in denen Fotos erkennen lassen, dass eine Entfernung oder Manipulation versucht wurde.',
        'Ohrringe, die aus Gründen der Gesundheit, Hygiene und persönlichen Sicherheit endgültig verkauft sind (außer bei verifiziertem Herstellungsfehler oder wesentlicher Nichtkonformität).',
      ],
    },
    {
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
    {
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
    {
      title: '7. Abschließende Anerkennung',
      body: [
        'Mit einer Bestellung bei Bint Saeed bestätigt der Kunde, die Produktbeschreibung, Größeninformationen, Produktionszeit und die in dieser Richtlinie dargelegten Bedingungen geprüft und akzeptiert zu haben.',
        'Der Kunde erkennt ferner den Bespoke-Charakter vieler Bint-Saeed-Kleidungsstücke an und versteht die geltenden Beschränkungen hinsichtlich Erstattungen, Umtausch und Stornierungen.',
      ],
    },
    {
      title: '8. Versand und Lieferung',
      body: [
        'Wir bemühen uns, jede Bestellung so effizient wie möglich zu versenden und zugleich die Qualitätsstandards von Bint Saeed zu wahren.',
        'Internationale Bestellungen werden mit DHL Express ausgeführt. Innerhalb der Vereinigten Arabischen Emirate werden Bestellungen von Jeebly betrieben. Weitere Carrier können mit dem Ausbau unseres Logistiknetzes eingeführt werden.',
        'Benötigen Sie eine Lieferung zu einem bestimmten Anlass oder zu einem festen Datum, oder benötigen Sie Ihre Bestellung früher, kontaktieren Sie bitte Client Services vor der Bestellung per WhatsApp unter +971 50 229 9402 oder unter support@bintsaeed.com. Client Services ist von Sonntag bis Donnerstag, 9:00–18:00 Uhr (Abu-Dhabi-Zeit) erreichbar. Versand- und Laufzeiten sind lediglich Schätzungen und können nicht garantiert werden.',
        'Obwohl wir alle Anstrengungen unternehmen, geschätzte Fristen einzuhalten, sind Liefertermine nicht garantiert und können durch Umstände außerhalb unserer angemessenen Kontrolle beeinflusst werden.',
        'Sobald eine Bestellung an den Kurier übergeben wurde, unterliegen Lieferzeiten dem Netzwerk des Kuriers, der lokalen Lieferinfrastruktur, Zollverfahren und den Vorschriften des Bestimmungslandes. Wir unterstützen Kunden nach Möglichkeit bei Tracking und der Lösung von Versandproblemen, können Lieferzeiten nach Übergabe an den Carrier jedoch nicht garantieren.',
      ],
      list: [
        'Kostenloser Versand innerhalb der Vereinigten Arabischen Emirate gilt für Bestellungen mit einem Waren-Zwischensummenbetrag von AED 1,000 oder mehr.',
        'Kostenloser weltweiter Versand gilt für Bestellungen mit einem Waren-Zwischensummenbetrag von EUR 500 oder mehr (oder dem reinen Äquivalent in der gewählten Währung).',
        'Unterhalb dieser Schwellen gilt eine pauschale Versandgebühr: AED 35 innerhalb der VAE und EUR 30 (oder das reine Äquivalent in der gewählten Währung) für internationale Ziele, bestätigt bei Zahlung.',
        'Die Bestellschlusszeit für eine eventuelle Bearbeitung am selben Tag ist 14:00 Uhr Gulf Standard Time (Dubai, GMT+4). Bearbeitungs- und Versandtage sind Montag–Samstag.',
        'Schmuck, Lifestyle-Accessoires und ausgewählte Lagerartikel können am selben Tag versandt werden, wenn sie vor 14:00 Uhr bestellt werden; der Versand kann jedoch bis zu 3 Werktage dauern.',
        'Bespoke-Kleidungsstücke werden in der Regel innerhalb von etwa zwei Wochen nach Bestellbestätigung versandt, und innerhalb von maximal etwa 14 Kalendertagen nach Bestellbestätigung (entsprechend bis zu 12 Bearbeitungstagen von Montag bis Samstag; Bearbeitungszeit: 0–12 Werktage).',
        'Nach dem Versand beträgt der Kuriertransit in die VAE in der Regel 1–3 Werktage. Die geschätzte Gesamtdauer der Lieferung in die VAE beträgt typischerweise 1–15 Werktage ab Bestellbestätigung.',
        'Der internationale Transit dauert nach dem Versand in der Regel etwa 3–10 Werktage, abhängig von Zielort und Zollabfertigung.',
        'Lieferschätzungen schließen Sonntage, gesetzliche Feiertage, Kurierverzögerungen und Umstände außerhalb der Kontrolle von Bint Saeed aus.',
        'Nach dem Versand erhalten Kunden, soweit verfügbar, eine Versandbestätigung und Tracking-Daten.',
      ],
    },
    {
      title: '9. Lieferangaben und Kundenpflichten',
      body: [
        'Kunden sind dafür verantwortlich, dass Lieferadresse, Telefonnummer und E-Mail-Adresse beim Checkout vollständig und korrekt sind. Kuriere können die angegebene Telefonnummer oder E-Mail nutzen, um die Lieferung zu organisieren.',
        'Bint Saeed haftet nicht für Nichtlieferung, Verzögerung oder Rücksendung einer Sendung, die auf unvollständige, falsche oder veraltete Lieferangaben des Kunden zurückgeht.',
        'Erfordert das Bestimmungsziel ein Postfach (P.O. Box) oder ein anderes lokales Adressformat für eine erfolgreiche Zustellung, müssen Kunden diese Angaben vollständig machen. Unterbleibt dies, kann das Paket verzögert oder auf Risiko des Kunden zurückgesandt werden.',
      ],
    },
    {
      title: '10. Zoll und Einfuhr',
      body: [
        'Zölle, Einfuhrsteuern, lokale Gebühren oder Abfertigungsgebühren des Bestimmungslandes bleiben Verantwortung des Empfängers, sofern beim Checkout nichts anderes angegeben ist. Diese Kosten sind von der Bestellung des Kunden bei Bint Saeed getrennt.',
        'Kunden wird empfohlen, vor der Bestellung ihre örtliche Zollbehörde zu Einfuhrvorschriften, Beschränkungen und möglichen Gebühren zu konsultieren. Zollregeln unterscheiden sich von Land zu Land; Unkenntnis lokaler Anforderungen kann zu Verzögerung, Zusatzkosten, Ablehnung oder Rücksendung führen.',
        'Bint Saeed haftet nicht für Pakete, die vom Zoll abgelehnt, zurückgehalten, verzögert oder beschlagnahmt werden, noch für Zölle, Steuern oder Strafen, die erhoben werden, nachdem die Sendung die Vereinigten Arabischen Emirate verlassen hat.',
      ],
    },
    {
      title: '11. Nicht zustellbare Sendungen',
      body: [
        'Wird eine Sendung an Bint Saeed zurückgesandt wegen einer falschen oder unvollständigen Adresse, fehlgeschlagener Zustellversuche, Ablehnung des Pakets, Verweigerung der Zahlung von Zollgebühren, Einfuhrbeschränkungen oder vergleichbarer Gründe, die nicht auf einen verifizierten Fehler des Hauses zurückgehen, ist Bint Saeed nicht zur Erstattung der Bestellung verpflichtet.',
        'Nach unserem Ermessen können wir einen erneuten Versand auf Kosten des Kunden, einen Umtausch sofern das Stück weiterhin berechtigt ist, eine Gutschrift oder sonstige Unterstützung anbieten. Werden Waren vom Zoll beschlagnahmt, auf Anweisung des Carriers aufgegeben oder ist eine Rückgewinnung nicht vernünftigerweise möglich, wird keine Gutschrift erteilt.',
        'Wie an anderer Stelle in dieser Richtlinie dargelegt, werden Erstattungen bei Meinungsänderung nicht angeboten. Monetäre Erstattungen, soweit überhaupt in Betracht gezogen, entstehen nur im Zusammenhang mit einem verifizierten Herstellungsfehler oder einer wesentlichen Nichtkonformität und nur, wenn Reparatur oder Ersatz nicht vernünftigerweise möglich ist oder das anwendbare Recht dies verlangt.',
      ],
    },
    {
      title: '12. Höhere Gewalt',
      body: [
        'Bint Saeed haftet nicht für Verzögerungen, Unterbrechungen oder die Nichterfüllung von Verpflichtungen, wenn solche Umstände aus Ereignissen außerhalb unserer angemessenen Kontrolle entstehen.',
        'Diese Ereignisse können insbesondere umfassen, sind jedoch nicht beschränkt auf:',
        'In solchen Situationen können Produktion, Versand, Lieferung und sonstige Verpflichtungen für die Dauer des Ereignisses und eine angemessene anschließende Erholungsphase ausgesetzt oder verzögert werden.',
      ],
      list: [
        'Krieg oder bewaffneter Konflikt.',
        'Unruhen oder politische Instabilität.',
        'Handlungen von Regierung oder öffentlichen Behörden.',
        'Zollkontrollen, Zollverzögerungen oder Einfuhrbeschränkungen.',
        'Transportstörungen.',
        'Naturkatastrophen.',
        'Arbeitskämpfe oder Streiks.',
        'Öffentliche Gesundheitsnotstände.',
        'Ausfälle von Versorgungsleistungen, Telekommunikationsstörungen oder Technologieausfälle.',
        'Ereignisse höherer Gewalt oder vergleichbare Umstände außerhalb unserer angemessenen Kontrolle.',
      ],
    },
    {
      title: `13. ${CLAUSE_TITLE.de}`,
      body: [CLAUSE_SHORT.de],
    },
    {
      title: '14. Kontakt',
      body: [
        'Für Umtausch, Rückgabeanfragen und Mangelforderungen:',
        OFFICIAL_EMAILS.returns,
        'Für allgemeinen Kundensupport:',
        OFFICIAL_EMAILS.support,
        'WhatsApp: +971 50 229 9402',
        'Client Services ist von Sonntag bis Donnerstag, 9:00–18:00 Uhr (Abu-Dhabi-Zeit) erreichbar.',
        'Bitte geben Sie Ihre Bestell- oder Rechnungsnummer, Kontaktdaten und gegebenenfalls unterstützende Fotografien an. Unser Team prüft Ihre Anfrage und berät Sie zu den nächsten Schritten.',
        'Bei Bint Saeed verpflichten wir uns, jede Anfrage mit Fairness, Professionalität und Sorgfalt zu behandeln.',
      ],
    },
  ],
  it: [
    {
      title: '1. Dichiarazione introduttiva',
      body: [
        'Ogni pezzo Bint Saeed è creato secondo la richiesta e la selezione specifica del cliente. La produzione inizia soltanto dopo la conferma dell’ordine.',
        'Il nostro impegno è consegnare ogni pezzo nelle condizioni, nella qualità e nella manifattura attese da Bint Saeed. Qualora sorga un problema, il nostro team collaborerà strettamente con il cliente per trovare una risoluzione appropriata.',
      ],
    },
    {
      title: '2. Politica generale',
      body: [
        'Poiché molti pezzi Bint Saeed sono prodotti su ordinazione dopo la conferma dell’ordine, non offriamo rimborsi per ripensamento, preferenza personale o scelta di taglia effettuata dal cliente.',
        'Comprendiamo tuttavia che possano sorgere circostanze in cui sia necessaria una taglia alternativa.',
        'Gli articoli idonei possono essere cambiati entro 14 giorni dalla consegna, previa approvazione del Dipartimento Resi di Bint Saeed e alle condizioni indicate di seguito.',
        `Per richiedere un cambio, i clienti devono contattare ${OFFICIAL_EMAILS.returns} entro 14 giorni dal ricevimento dell’ordine.`,
        'È richiesta un’autorizzazione preventiva prima di qualsiasi reso. Una volta approvato, il nostro team fornirà istruzioni dettagliate per il reso.',
        'Per essere idoneo a un cambio o a un reso autorizzato, l’articolo deve essere nelle stesse condizioni in cui è stato ricevuto, non indossato né utilizzato, con etichette e nella confezione originale. È inoltre necessario lo scontrino o la prova d’acquisto originale, compreso il numero di fattura o di ordine.',
        'Per essere idonei al cambio, gli articoli devono:',
      ],
      list: [
        'Essere non indossati, non utilizzati e in condizioni originali.',
        'Essere restituiti con tutte le etichette, i sigilli e le etichette di sicurezza originali intatti e non alterati.',
        'Essere restituiti nella confezione originale.',
        'Essere accompagnati dallo scontrino o dalla prova d’acquisto originale, compreso il numero di fattura o di ordine.',
        'Essere privi di profumo, fumo, macchie, alterazioni, danni o segni di usura.',
        'Essere approvati dal Dipartimento Resi di Bint Saeed prima della spedizione.',
      ],
      subsections: [
        {
          title: '',
          body: [
            'Bint Saeed non accetterà un cambio o un reso qualora etichette, sigilli o etichette di sicurezza siano stati rimossi, tagliati, danneggiati o alterati, oppure qualora le fotografie presentate a sostegno di una richiesta indichino che sia stata tentata una rimozione o una manomissione.',
            'Nessun cambio viene elaborato finché la merce approvata non sia stata ricevuta fisicamente e ispezionata nel nostro atelier.',
            'Qualora un cambio o un reso approvato richieda la rispedizione della merce a Bint Saeed, si applica una tariffa forfettaria di spedizione di reso: AED 35 per i resi provenienti dagli Emirati Arabi Uniti, e EUR 35 (o l’equivalente netto nella valuta selezionata) per i resi internazionali. Tale tariffa è esentata qualora il reso derivi da un difetto verificato della Maison, compreso un difetto di fabbricazione o una non conformità sostanziale, oppure ove altrimenti richiesto dalla legge applicabile.',
            'I pezzi personalizzati, le specifiche su misura, i capi alterati e gli articoli prodotti secondo i requisiti specifici di un cliente non sono idonei al cambio salvo in caso di difetto di fabbricazione verificato o non conformità sostanziale.',
            'Per ragioni di salute, igiene e sicurezza personale, gli orecchini sono in vendita definitiva e non possono essere cambiati né rimborsati, salvo in caso di difetto di fabbricazione verificato o non conformità sostanziale.',
          ],
          list: [
          ],
        },
      ],
    },
    {
      title: '3. Eccezioni (allineamento alla tutela dei consumatori degli Emirati Arabi Uniti)',
      body: [
        'Conformemente alle leggi applicabili degli Emirati Arabi Uniti, possono applicarsi eccezioni qualora:',
      ],
      list: [
        'L’articolo presenti un difetto di fabbricazione verificato.',
        'L’articolo differisca materialmente dall’ordine confermato.',
      ],
      subsections: [
        {
          title: '',
          body: [
            'In tali casi:',
          ],
          list: [
            'Il cliente deve comunicarcelo entro 48 ore dalla consegna.',
            'Devono essere fornite prove fotografiche chiare via e-mail.',
            'L’articolo deve rimanere inutilizzato e nelle condizioni originali.',
          ],
        },
        {
          title: '',
          body: [
            'A seguito di esame, Bint Saeed collaborerà con il cliente per determinare la risoluzione più appropriata, che può includere:',
          ],
          list: [
            'Riparazione dell’articolo.',
            'Sostituzione dell’articolo.',
            'Cambio dell’articolo.',
            'Credito negozio.',
            'Un rimborso monetario, solo qualora riparazione o sostituzione non siano ragionevolmente possibili, oppure ove richiesto dalla legge applicabile.',
          ],
        },
        {
          title: '',
          body: [
            'Accettare un prodotto difettoso o materialmente non conforme per valutazione non implica automaticamente un rimborso monetario. I rimedi preferiti sono valutazione, riparazione, sostituzione, cambio o credito negozio.',
            'I cambi di taglia, se approvati, sono solo cambi e non sono trattati come rimborsi o resi ordinari per ripensamento.',
            'Il nostro obiettivo è sempre fornire una soluzione equa e appropriata, mantenendo gli standard qualitativi della maison.',
          ],
          list: [
          ],
        },
      ],
    },
    {
      title: '4. Casi non idonei',
      body: [
        'Quanto segue non costituisce motivo di rimborso, cambio o reso:',
      ],
      list: [
        'Ripensamento.',
        'Preferenza personale.',
        'Taglia errata selezionata dal cliente.',
        'Variazioni minori inerenti alla produzione artigianale.',
        'Differenze di colore derivanti dalle impostazioni dello schermo o dalle visualizzazioni del dispositivo.',
        'Danni derivanti da cura impropria, uso improprio, alterazione o usura normale.',
        'Rimozione, taglio, danneggiamento o alterazione di etichette, sigilli o etichette di sicurezza originali, anche qualora le fotografie indichino che sia stata tentata una rimozione o una manomissione.',
        'Orecchini, che sono in vendita definitiva per ragioni di salute, igiene e sicurezza personale (salvo in caso di difetto di fabbricazione verificato o non conformità sostanziale).',
      ],
    },
    {
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
    {
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
    {
      title: '7. Riconoscimento finale',
      body: [
        'Effettuando un ordine presso Bint Saeed, il cliente conferma di aver esaminato e accettato la descrizione del prodotto, le informazioni sulla taglia, i tempi di produzione e i termini indicati nella presente policy.',
        'Il cliente riconosce inoltre la natura bespoke di molti abiti Bint Saeed e comprende le limitazioni applicabili relative a rimborsi, cambi e cancellazioni.',
      ],
    },
    {
      title: '8. Spedizione e consegna',
      body: [
        'Miriamo a spedire ogni ordine nel modo più efficiente possibile, mantenendo gli standard qualitativi di Bint Saeed.',
        'Gli ordini internazionali sono evasi con DHL Express. Negli Emirati Arabi Uniti, gli ordini sono gestiti da Jeebly. Ulteriori corrieri potranno essere introdotti con l’espansione della nostra rete logistica.',
        'Se necessita di una consegna per un’occasione particolare o entro una data fissa, o se desidera ricevere l’ordine prima, contatti Client Services prima di effettuare l’ordine su WhatsApp al +971 50 229 9402 o all’indirizzo support@bintsaeed.com. Client Services è disponibile da domenica a giovedì, dalle 9:00 alle 18:00 (ora di Abu Dhabi). I tempi di spedizione e di transito sono stime e non possono essere garantiti.',
        'Sebbene compiamo ogni sforzo per rispettare i tempi stimati, le date di consegna non sono garantite e possono essere influenzate da circostanze al di fuori del nostro ragionevole controllo.',
        'Una volta trasferito l’ordine al corriere, i tempi di consegna sono soggetti alla rete del corriere, all’infrastruttura locale di consegna, alle procedure doganali e alle normative del Paese di destinazione. Sebbene assistiamo sempre i clienti nel tracking e nella risoluzione dei problemi di spedizione ove possibile, non possiamo garantire i tempi di consegna dopo la consegna al vettore.',
      ],
      list: [
        'La spedizione gratuita negli Emirati Arabi Uniti si applica agli ordini con un subtotale merce di AED 1,000 o superiore.',
        'La spedizione mondiale gratuita si applica agli ordini con un subtotale merce di EUR 500 o superiore (o l’equivalente netto indicato nella valuta selezionata).',
        'Al di sotto di tali soglie, si applica una tariffa forfettaria di spedizione: AED 35 negli Emirati Arabi Uniti, e EUR 30 (o l’equivalente netto nella valuta selezionata) per destinazioni internazionali, confermata al pagamento.',
        'L’orario limite per l’evasione nello stesso giorno è le 14:00, ora standard del Golfo (Dubai, GMT+4). I giorni di gestione e spedizione sono dal lunedì al sabato.',
        'Gioielli, accessori lifestyle e articoli selezionati in stock possono essere spediti lo stesso giorno se ordinati prima delle 14:00, ma la spedizione può richiedere fino a 3 giorni lavorativi.',
        'Gli abiti bespoke sono generalmente spediti entro circa due settimane dalla conferma dell’ordine, e entro un massimo di circa 14 giorni di calendario dalla conferma (equivalenti a fino a 12 giorni di gestione dal lunedì al sabato; tempo di gestione: 0–12 giorni lavorativi).',
        'Una volta spedite, il transito del corriere negli Emirati Arabi Uniti richiede di solito 1–3 giorni lavorativi. Il tempo totale stimato di consegna negli EAU è tipicamente di 1–15 giorni lavorativi dalla conferma dell’ordine.',
        'Il transito internazionale richiede di solito circa 3–10 giorni lavorativi dopo la spedizione, a seconda della destinazione e dello sdoganamento.',
        'Le stime di consegna escludono domeniche, festività pubbliche, ritardi del corriere e circostanze al di fuori del controllo di Bint Saeed.',
        'Una volta spedito l’ordine, i clienti ricevono conferma di spedizione e dettagli di tracking ove disponibili.',
      ],
    },
    {
      title: '9. Dettagli di consegna e responsabilità del cliente',
      body: [
        'I clienti sono responsabili di assicurare che indirizzo di spedizione, numero di telefono e indirizzo e-mail siano completi e accurati al checkout. I corrieri possono utilizzare il numero di telefono o l’e-mail forniti per organizzare la consegna.',
        'Bint Saeed non è responsabile di mancata consegna, ritardo o reso di una spedizione derivanti da informazioni di consegna incomplete, errate o obsolete fornite dal cliente.',
        'Qualora la destinazione richieda una casella postale (P.O. Box) o un altro formato di indirizzo locale per una consegna riuscita, i clienti devono fornire tali dettagli per intero. La mancata fornitura può comportare ritardo o reso del pacco a rischio del cliente.',
      ],
    },
    {
      title: '10. Dogana e importazione',
      body: [
        'Dazi doganali, imposte di importazione, oneri locali o spese di sdoganamento imposti dal Paese di destinazione restano a carico del destinatario, salvo diversa indicazione al checkout. Tali oneri sono distinti dall’ordine del cliente presso Bint Saeed.',
        'Si consiglia ai clienti di consultare la propria autorità doganale locale in merito a normative di importazione, restrizioni e possibili oneri prima di ordinare. Le regole doganali differiscono da Paese a Paese; la mancata conoscenza dei requisiti locali può comportare ritardo, oneri aggiuntivi, rifiuto o reso della spedizione.',
        'Bint Saeed non è responsabile di pacchi rifiutati, trattenuti, ritardati o sequestrati dalla dogana, né di dazi, imposte o sanzioni levati una volta che la spedizione ha lasciato gli Emirati Arabi Uniti.',
      ],
    },
    {
      title: '11. Spedizioni non consegnabili',
      body: [
        'Se una spedizione viene restituita a Bint Saeed a causa di un indirizzo errato o incompleto, tentativi di consegna falliti, rifiuto del pacco, rifiuto di pagare gli oneri doganali, restrizioni all’importazione, o motivi comparabili non imputabili a un difetto verificato della Maison, Bint Saeed non è obbligata a rimborsare l’ordine.',
        'A nostra discrezione, possiamo offrire una rispedizione a spese del cliente, un cambio qualora il pezzo resti idoneo, un credito negozio o altra assistenza. Qualora la merce sia sequestrata dalla dogana, abbandonata su istruzione del vettore, o il recupero non sia ragionevolmente possibile, non verrà emesso alcun credito.',
        'Come stabilito altrove nella presente policy, non si offrono rimborsi per ripensamento. I rimborsi monetari, ove considerati, sorgono solo in relazione a un difetto di fabbricazione verificato o a una non conformità sostanziale, e solo qualora riparazione o sostituzione non siano ragionevolmente possibili, oppure ove richiesto dalla legge applicabile.',
      ],
    },
    {
      title: '12. Forza maggiore',
      body: [
        'Bint Saeed non potrà essere ritenuta responsabile di ritardi, interruzioni o mancato adempimento degli obblighi qualora tali circostanze derivino da eventi al di fuori del nostro ragionevole controllo.',
        'Tali eventi possono includere, a titolo esemplificativo e non esaustivo:',
        'In tali situazioni, produzione, spedizione, consegna e altri obblighi possono essere sospesi o differiti per la durata dell’evento e per ogni ragionevole periodo di ripristino successivo.',
      ],
      list: [
        'Guerra o conflitto armato.',
        'Disordini civili o instabilità politica.',
        'Atti di governo o autorità pubbliche.',
        'Ispezioni doganali, ritardi doganali o restrizioni all’importazione.',
        'Interruzioni dei trasporti.',
        'Calamità naturali.',
        'Controversie di lavoro o scioperi.',
        'Emergenze di salute pubblica.',
        'Guasti ai servizi di pubblica utilità, interruzioni delle telecomunicazioni o interruzioni tecnologiche.',
        'Eventi di forza maggiore o circostanze comparabili al di fuori del nostro ragionevole controllo.',
      ],
    },
    {
      title: `13. ${CLAUSE_TITLE.it}`,
      body: [CLAUSE_SHORT.it],
    },
    {
      title: '14. Contatti',
      body: [
        'Per cambi, richieste di reso e reclami per difetti:',
        OFFICIAL_EMAILS.returns,
        'Per il supporto clienti generale:',
        OFFICIAL_EMAILS.support,
        'WhatsApp: +971 50 229 9402',
        'Client Services è disponibile da domenica a giovedì, dalle 9:00 alle 18:00 (ora di Abu Dhabi).',
        'Si prega di includere il numero d’ordine o di fattura, i recapiti e, ove applicabile, eventuali fotografie a supporto. Il nostro team esaminerà la richiesta e fornirà indicazioni sui passi successivi.',
        'Presso Bint Saeed, ci impegniamo a gestire ogni richiesta con equità, professionalità e cura.',
      ],
    },
  ],
  es: [
    {
      title: '1. Declaración inicial',
      body: [
        'Cada pieza Bint Saeed se crea siguiendo la solicitud y la selección específicas del cliente. La producción comienza únicamente tras la confirmación del pedido.',
        'Nuestro compromiso es entregar cada pieza en el estado, la calidad y la artesanía que se esperan de Bint Saeed. Si surge algún problema, nuestro equipo trabajará estrechamente con el cliente para hallar una resolución adecuada.',
      ],
    },
    {
      title: '2. Política general',
      body: [
        'Como muchas piezas Bint Saeed se producen bajo pedido tras la confirmación del pedido, no ofrecemos reembolsos por cambio de opinión, preferencia personal o selección de talla realizada por el cliente.',
        'No obstante, comprendemos que pueden surgir circunstancias en las que se requiera una talla alternativa.',
        'Los artículos elegibles pueden cambiarse en un plazo de 14 días desde la entrega, previa aprobación del Departamento de Devoluciones de Bint Saeed y con arreglo a las condiciones que se indican a continuación.',
        `Para solicitar un cambio, los clientes deben contactar ${OFFICIAL_EMAILS.returns} en un plazo de 14 días desde la recepción de su pedido.`,
        'Se requiere autorización previa antes de devolver cualquier artículo. Una vez aprobado, nuestro equipo facilitará instrucciones detalladas de devolución.',
        'Para ser elegible a un cambio o a una devolución autorizada, el artículo debe encontrarse en el mismo estado en que se recibió, sin usar ni llevar puesto, con etiquetas y en su embalaje original. También necesitará el recibo o prueba de compra original, incluido el número de factura o de pedido.',
        'Para ser elegibles al cambio, los artículos deben:',
      ],
      list: [
        'Estar sin usar, sin llevar puestos y en estado original.',
        'Devolverse con todas las etiquetas, precintos y etiquetas de seguridad originales intactos y sin alterar.',
        'Devolverse en el embalaje original.',
        'Ir acompañados del recibo o prueba de compra original, incluido el número de factura o de pedido.',
        'Estar libres de perfume, humo, manchas, alteraciones, daños o signos de uso.',
        'Estar aprobados por el Departamento de Devoluciones de Bint Saeed antes del envío.',
      ],
      subsections: [
        {
          title: '',
          body: [
            'Bint Saeed no aceptará un cambio ni una devolución cuando se hayan retirado, cortado, dañado o alterado etiquetas, precintos o etiquetas de seguridad, o cuando las fotografías presentadas en apoyo de una solicitud indiquen que se ha intentado su retirada o manipulación.',
            'No se tramita ningún cambio hasta que la mercancía aprobada haya sido recibida físicamente e inspeccionada en nuestro atelier.',
            'Cuando un cambio o una devolución aprobados requieran el reenvío de la mercancía a Bint Saeed, se aplica una tarifa fija de envío de devolución: AED 35 para devoluciones originadas en los Emiratos Árabes Unidos, y EUR 35 (o el equivalente neto en la moneda seleccionada) para devoluciones internacionales. Esta tarifa se exime cuando la devolución se deba a un fallo verificado de la Casa, incluido un defecto de fabricación o una no conformidad material, o cuando lo exija de otro modo la ley aplicable.',
            'Las piezas personalizadas, las especificaciones a medida, las prendas alteradas y los artículos producidos según los requisitos específicos de un cliente no son elegibles para cambio, salvo en caso de defecto de fabricación verificado o no conformidad material.',
            'Por razones de salud, higiene y seguridad personal, los pendientes son de venta final y no pueden cambiarse ni reembolsarse, salvo en caso de defecto de fabricación verificado o no conformidad material.',
          ],
          list: [
          ],
        },
      ],
    },
    {
      title: '3. Excepciones (alineación con la protección del consumidor de los Emiratos Árabes Unidos)',
      body: [
        'De conformidad con las leyes aplicables de los Emiratos Árabes Unidos, pueden aplicarse excepciones cuando:',
      ],
      list: [
        'El artículo presente un defecto de fabricación verificado.',
        'El artículo difiera materialmente del pedido confirmado.',
      ],
      subsections: [
        {
          title: '',
          body: [
            'En tales casos:',
          ],
          list: [
            'El cliente debe notificárnoslo en un plazo de 48 horas desde la entrega.',
            'Debe aportarse evidencia fotográfica clara por correo electrónico.',
            'El artículo debe permanecer sin usar y en su estado original.',
          ],
        },
        {
          title: '',
          body: [
            'Tras el examen, Bint Saeed trabajará con el cliente para determinar la resolución más adecuada, que puede incluir:',
          ],
          list: [
            'Reparación del artículo.',
            'Sustitución del artículo.',
            'Cambio del artículo.',
            'Crédito de tienda.',
            'Un reembolso monetario, solo cuando la reparación o la sustitución no sea razonablemente posible, o cuando lo exija la ley aplicable.',
          ],
        },
        {
          title: '',
          body: [
            'Aceptar un producto defectuoso o materialmente no conforme para evaluación no implica automáticamente un reembolso monetario. Los remedios preferidos son evaluación, reparación, sustitución, cambio o crédito de tienda.',
            'Los cambios de talla, cuando se aprueban, son únicamente cambios y no se tratan como reembolsos ni devoluciones ordinarias por cambio de opinión.',
            'Nuestro objetivo es siempre ofrecer una solución justa y adecuada manteniendo los estándares de calidad de la casa.',
          ],
          list: [
          ],
        },
      ],
    },
    {
      title: '4. Casos no elegibles',
      body: [
        'Lo siguiente no constituye motivo de reembolso, cambio o devolución:',
      ],
      list: [
        'Cambio de opinión.',
        'Preferencia personal.',
        'Talla incorrecta seleccionada por el cliente.',
        'Variaciones menores inherentes a la producción artesanal.',
        'Diferencias de color derivadas de la configuración de pantalla o de las visualizaciones del dispositivo.',
        'Daños derivados de un cuidado inadecuado, un uso indebido, una alteración o el desgaste normal.',
        'Retirada, corte, daño o alteración de etiquetas, precintos o etiquetas de seguridad originales, incluso cuando las fotografías indiquen que se ha intentado su retirada o manipulación.',
        'Pendientes, que son de venta final por razones de salud, higiene y seguridad personal (salvo en caso de defecto de fabricación verificado o no conformidad material).',
      ],
    },
    {
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
    {
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
    {
      title: '7. Reconocimiento final',
      body: [
        'Al realizar un pedido en Bint Saeed, el cliente confirma haber revisado y aceptado la descripción del producto, la información de talla, el plazo de producción y los términos enunciados en la presente política.',
        'El cliente reconoce además el carácter bespoke de muchas prendas Bint Saeed y comprende las limitaciones aplicables relativas a reembolsos, cambios y cancelaciones.',
      ],
    },
    {
      title: '8. Envío y entrega',
      body: [
        'Procuramos despachar cada pedido con la mayor eficiencia posible manteniendo los estándares de calidad de Bint Saeed.',
        'Los pedidos internacionales se gestionan con DHL Express. En los Emiratos Árabes Unidos, los pedidos los opera Jeebly. Podrán introducirse transportistas adicionales a medida que se amplíe nuestra red logística.',
        'Si necesita una entrega para una ocasión concreta o en una fecha fija, o si necesita su pedido antes, contacte con Client Services antes de realizar el pedido por WhatsApp en +971 50 229 9402 o en support@bintsaeed.com. Client Services está disponible de domingo a jueves, de 9:00 a 18:00 (hora de Abu Dabi). Los plazos de despacho y tránsito son únicamente estimaciones y no pueden garantizarse.',
        'Aunque hacemos todos los esfuerzos por cumplir los plazos estimados, las fechas de entrega no están garantizadas y pueden verse afectadas por circunstancias ajenas a nuestro control razonable.',
        'Una vez transferido el pedido al mensajero, los plazos de entrega quedan sujetos a la red del mensajero, a la infraestructura local de entrega, a los procedimientos aduaneros y a la normativa del país de destino. Aunque siempre asistiremos a los clientes en el seguimiento y la resolución de incidencias de envío cuando sea posible, no podemos garantizar los plazos de entrega tras la entrega al transportista.',
      ],
      list: [
        'El envío gratuito en los Emiratos Árabes Unidos se aplica a pedidos con un subtotal de mercancía de AED 1,000 o más.',
        'El envío mundial gratuito se aplica a pedidos con un subtotal de mercancía de EUR 500 o más (o el equivalente neto mostrado en la moneda seleccionada).',
        'Por debajo de estos umbrales, se aplica una tarifa fija de envío: AED 35 en los EAU, y EUR 30 (o el equivalente neto en la moneda seleccionada) para destinos internacionales, confirmada en el pago.',
        'La hora límite para la gestión el mismo día es las 14:00, hora estándar del Golfo (Dubái, GMT+4). Los días de gestión y envío son de lunes a sábado.',
        'La joyería, los accesorios lifestyle y artículos seleccionados en stock pueden despacharse el mismo día si se piden antes de las 14:00, pero el despacho puede tardar hasta 3 días hábiles.',
        'Las prendas bespoke se despachan generalmente en un plazo de aproximadamente dos semanas tras la confirmación del pedido, y en un máximo de aproximadamente 14 días naturales tras la confirmación (equivalente a hasta 12 días de gestión de lunes a sábado; tiempo de gestión: 0–12 días hábiles).',
        'Una vez despachados, el tránsito del mensajero en los EAU suele tardar 1–3 días hábiles. El tiempo total estimado de entrega en los EAU es normalmente de 1–15 días hábiles desde la confirmación del pedido.',
        'El tránsito internacional suele tardar aproximadamente 3–10 días hábiles tras el despacho, según el destino y el despacho aduanero.',
        'Las estimaciones de entrega excluyen domingos, festivos, retrasos del mensajero y circunstancias fuera del control de Bint Saeed.',
        'Una vez despachado el pedido, los clientes reciben confirmación de envío y detalles de seguimiento cuando estén disponibles.',
      ],
    },
    {
      title: '9. Detalles de entrega y responsabilidades del cliente',
      body: [
        'Los clientes son responsables de asegurar que la dirección de envío, el número de teléfono y la dirección de correo electrónico estén completos y sean exactos en el checkout. Los mensajeros pueden usar el teléfono o el correo facilitados para organizar la entrega.',
        'Bint Saeed no es responsable de la no entrega, el retraso o la devolución de un envío derivados de información de entrega incompleta, incorrecta u obsoleta facilitada por el cliente.',
        'Cuando el destino exija un apartado de correos (P.O. Box) u otro formato de dirección local para una entrega exitosa, los clientes deben facilitar esos datos por completo. No hacerlo puede provocar retraso o devolución del paquete a riesgo del cliente.',
      ],
    },
    {
      title: '10. Aduanas e importación',
      body: [
        'Cualquier arancel aduanero, impuesto de importación, cargo local o tasa de despacho impuesto por el país de destino permanece a cargo del destinatario, salvo que se indique lo contrario en el checkout. Estos cargos son independientes del pedido del cliente con Bint Saeed.',
        'Se aconseja a los clientes consultar a su autoridad aduanera local sobre la normativa de importación, las restricciones y los posibles cargos antes de pedir. Las normas aduaneras difieren según el país; el desconocimiento de los requisitos locales puede provocar retraso, cargos adicionales, denegación o devolución del envío.',
        'Bint Saeed no responde de paquetes rechazados, retenidos, retrasados o incautados por aduanas, ni de aranceles, impuestos o sanciones aplicados una vez que el envío ha salido de los Emiratos Árabes Unidos.',
      ],
    },
    {
      title: '11. Envíos no entregables',
      body: [
        'Si un envío se devuelve a Bint Saeed por una dirección incorrecta o incompleta, intentos de entrega fallidos, rechazo del paquete, negativa a pagar cargos aduaneros, restricciones de importación, o motivos comparables no imputables a un fallo verificado de la Casa, Bint Saeed no está obligada a reembolsar el pedido.',
        'A nuestra discreción, podemos ofrecer un reenvío a cargo del cliente, un cambio si la pieza sigue siendo elegible, un crédito de tienda u otra asistencia. Cuando la mercancía sea incautada por aduanas, abandonada por instrucción del transportista, o la recuperación no sea razonablemente posible, no se emitirá crédito alguno.',
        'Como se establece en otras partes de esta política, no se ofrecen reembolsos por cambio de opinión. Los reembolsos monetarios, cuando se consideren, solo surgen en relación con un defecto de fabricación verificado o una no conformidad material, y únicamente cuando la reparación o la sustitución no sea razonablemente posible, o cuando lo exija la ley aplicable.',
      ],
    },
    {
      title: '12. Fuerza mayor',
      body: [
        'Bint Saeed no será responsable de retrasos, interrupciones o incumplimiento de obligaciones cuando tales circunstancias deriven de acontecimientos ajenos a nuestro control razonable.',
        'Estos acontecimientos pueden incluir, sin limitación:',
        'En tales situaciones, la producción, el despacho, la entrega y otras obligaciones pueden suspenderse o aplazarse durante la duración del acontecimiento y cualquier periodo razonable de recuperación posterior.',
      ],
      list: [
        'Guerra o conflicto armado.',
        'Disturbios civiles o inestabilidad política.',
        'Actos de gobierno o autoridades públicas.',
        'Inspecciones aduaneras, retrasos aduaneros o restricciones de importación.',
        'Disrupciones del transporte.',
        'Desastres naturales.',
        'Conflictos laborales o huelgas.',
        'Emergencias de salud pública.',
        'Fallos de servicios públicos, disrupciones de telecomunicaciones o interrupciones tecnológicas.',
        'Acontecimientos de fuerza mayor o circunstancias comparables ajenas a nuestro control razonable.',
      ],
    },
    {
      title: `13. ${CLAUSE_TITLE.es}`,
      body: [CLAUSE_SHORT.es],
    },
    {
      title: '14. Contacto',
      body: [
        'Para cambios, solicitudes de devolución y reclamaciones por defectos:',
        OFFICIAL_EMAILS.returns,
        'Para atención al cliente general:',
        OFFICIAL_EMAILS.support,
        'WhatsApp: +971 50 229 9402',
        'Client Services está disponible de domingo a jueves, de 9:00 a 18:00 (hora de Abu Dabi).',
        'Incluya su número de pedido o de factura, datos de contacto y, cuando proceda, fotografías de apoyo. Nuestro equipo revisará su solicitud y le orientará sobre los siguientes pasos.',
        'En Bint Saeed, nos comprometemos a tratar cada consulta con equidad, profesionalidad y cuidado.',
      ],
    },
  ],
  nl: [
    {
      title: '1. Openingsverklaring',
      body: [
        'Elk Bint Saeed-stuk wordt gemaakt volgens de specifieke aanvraag en selectie van de klant. De productie start pas na bevestiging van de bestelling.',
        'Onze verbintenis is elk stuk te leveren in de staat, kwaliteit en vakmanschap die van Bint Saeed worden verwacht. Mocht er een probleem ontstaan, dan werkt ons team nauw met de klant samen om een passende oplossing te vinden.',
      ],
    },
    {
      title: '2. Algemeen beleid',
      body: [
        'Omdat veel Bint Saeed-stukken na orderbevestiging op bestelling worden geproduceerd, bieden wij geen terugbetaling bij bedenkingen, persoonlijke voorkeur of een door de klant gekozen maat.',
        'Wij begrijpen evenwel dat omstandigheden kunnen ontstaan waarin een alternatieve maat nodig is.',
        'In aanmerking komende artikelen kunnen binnen 14 dagen na levering worden geruild, onder voorbehoud van goedkeuring door de Bint Saeed Returns Department en de onderstaande voorwaarden.',
        `Om een ruiling aan te vragen, moeten klanten ${OFFICIAL_EMAILS.returns} binnen 14 dagen na ontvangst van hun bestelling contacteren.`,
        'Voorafgaande autorisatie is vereist voordat enig artikel wordt geretourneerd. Na goedkeuring verstrekt ons team gedetailleerde retourinstructies.',
        'Om in aanmerking te komen voor een ruiling of geautoriseerde retour moet uw artikel in dezelfde staat verkeren als bij ontvangst, ongedragen of ongebruikt, met labels, en in de originele verpakking. U heeft tevens het originele ontvangstbewijs of bewijs van aankoop nodig, inclusief factuur- of ordernummer.',
        'Om voor ruiling in aanmerking te komen, moeten artikelen:',
      ],
      list: [
        'Ongedragen, ongebruikt en in originele staat zijn.',
        'Worden geretourneerd met alle originele labels, zegels en veiligheidslabels intact en ongestoord.',
        'Worden geretourneerd in de originele verpakking.',
        'Vergezeld gaan van het originele aankoopbewijs of bewijs van aankoop, inclusief factuur- of ordernummer.',
        'Vrij zijn van parfum, rook, vlekken, wijzigingen, schade of gebruikssporen.',
        'Voorafgaand aan verzending zijn goedgekeurd door de Bint Saeed Returns Department.',
      ],
      subsections: [
        {
          title: '',
          body: [
            'Bint Saeed aanvaardt geen ruiling of retour wanneer labels, zegels of veiligheidslabels zijn verwijderd, doorgesneden, beschadigd of gewijzigd, of wanneer foto’s ter ondersteuning van een verzoek erop wijzen dat verwijdering of manipulatie is geprobeerd.',
            'Geen ruiling wordt verwerkt totdat goedgekeurde goederen fysiek zijn ontvangen en geïnspecteerd in ons atelier.',
            'Wanneer een goedgekeurde ruiling of retour vereist dat goederen terug naar Bint Saeed worden verzonden, geldt een forfaitaire retourverzendkosten: AED 35 voor retouren vanuit de Verenigde Arabische Emiraten, en EUR 35 (of het nette equivalent in de geselecteerde valuta) voor internationale retouren. Deze kosten vervallen wanneer de retour voortvloeit uit een geverifieerde fout van het Huis, inclusief een fabricagefout of materiële non-conformiteit, of wanneer toepasselijk recht anderszins vereist.',
            'Gepersonaliseerde stukken, maatwerk specificaties, gewijzigde kledingstukken en artikelen geproduceerd volgens specifieke klantvereisten komen niet in aanmerking voor ruiling, behalve bij een geverifieerde fabricagefout of materiële non-conformiteit.',
            'Om redenen van gezondheid, hygiëne en persoonlijke veiligheid zijn oorbellen definitieve verkoop en kunnen zij niet worden geruild of terugbetaald, behalve bij een geverifieerde fabricagefout of materiële non-conformiteit.',
          ],
          list: [
          ],
        },
      ],
    },
    {
      title: '3. Uitzonderingen (afstemming op consumentenbescherming in de Verenigde Arabische Emiraten)',
      body: [
        'Overeenkomstig de toepasselijke wetgeving van de Verenigde Arabische Emiraten kunnen uitzonderingen gelden wanneer:',
      ],
      list: [
        'Het artikel een geverifieerde fabricagefout heeft.',
        'Het artikel materieel afwijkt van de bevestigde bestelling.',
      ],
      subsections: [
        {
          title: '',
          body: [
            'In dergelijke gevallen:',
          ],
          list: [
            'De klant moet ons binnen 48 uur na levering melden.',
            'Duidelijk fotografisch bewijs moet per e-mail worden verstrekt.',
            'Het artikel moet ongebruikt en in originele staat blijven.',
          ],
        },
        {
          title: '',
          body: [
            'Na beoordeling werkt Bint Saeed met de klant samen om de meest passende oplossing te bepalen, die kan omvatten:',
          ],
          list: [
            'Reparatie van het artikel.',
            'Vervanging van het artikel.',
            'Ruiling van het artikel.',
            'Winkelsaldo.',
            'Een geldelijke terugbetaling, alleen wanneer reparatie of vervanging niet redelijkerwijs mogelijk is, of wanneer het toepasselijke recht dit vereist.',
          ],
        },
        {
          title: '',
          body: [
            'Het aanvaarden van een defect of materieel non-conform product ter beoordeling betekent niet automatisch een geldelijke terugbetaling. Voorkeursremedies zijn beoordeling, reparatie, vervanging, ruiling of winkelsaldo.',
            'Maatruilingen, indien goedgekeurd, zijn uitsluitend ruilingen en worden niet behandeld als terugbetalingen of gewone retouren wegens veranderde mening.',
            'Ons doel is altijd een eerlijke en passende oplossing te bieden met behoud van de kwaliteitsnormen van het huis.',
          ],
          list: [
          ],
        },
      ],
    },
    {
      title: '4. Niet-in-aanmerking-komende gevallen',
      body: [
        'Het volgende geldt niet als grond voor terugbetaling, ruiling of retour:',
      ],
      list: [
        'Bedenkingen.',
        'Persoonlijke voorkeur.',
        'Onjuiste maat gekozen door de klant.',
        'Kleine variaties inherent aan handgemaakte productie.',
        'Kleurverschillen als gevolg van scherminstellingen of apparaatafbeeldingen.',
        'Schade als gevolg van onjuiste verzorging, misbruik, wijziging of normale slijtage.',
        'Verwijdering, doorsnijden, beschadiging of wijziging van originele labels, zegels of veiligheidslabels, inclusief wanneer foto’s erop wijzen dat verwijdering of manipulatie is geprobeerd.',
        'Oorbellen, die om redenen van gezondheid, hygiëne en persoonlijke veiligheid definitieve verkoop zijn (behalve bij een geverifieerde fabricagefout of materiële non-conformiteit).',
      ],
    },
    {
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
    {
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
    {
      title: '7. Slotbevestiging',
      body: [
        'Door een bestelling bij Bint Saeed te plaatsen, bevestigt de klant de productbeschrijving, maatinformatie, productietijdlijn en de in dit beleid uiteengezette voorwaarden te hebben bekeken en aanvaard.',
        'De klant erkent voorts het bespoke-karakter van veel Bint Saeed-kledingstukken en begrijpt de toepasselijke beperkingen met betrekking tot terugbetalingen, ruilingen en annuleringen.',
      ],
    },
    {
      title: '8. Verzending en levering',
      body: [
        'Wij streven ernaar elke bestelling zo efficiënt mogelijk te verzenden met behoud van de kwaliteitsnormen van Bint Saeed.',
        'Internationale bestellingen worden uitgevoerd met DHL Express. Binnen de Verenigde Arabische Emiraten worden bestellingen uitgevoerd door Jeebly. Extra vervoerders kunnen worden toegevoegd naarmate ons logistieke netwerk groeit.',
        'Indien u levering voor een bepaalde gelegenheid of op een vaste datum nodig heeft, of indien u uw bestelling eerder nodig heeft, neem dan contact op met Client Services vóór het plaatsen van uw bestelling via WhatsApp op +971 50 229 9402 of via support@bintsaeed.com. Client Services is beschikbaar van zondag tot donderdag, van 9:00 tot 18:00 (Abu Dhabi-tijd). Verzend- en transittijden zijn slechts schattingen en kunnen niet worden gegarandeerd.',
        'Hoewel wij alles in het werk stellen om geschatte termijnen te halen, zijn leverdata niet gegarandeerd en kunnen zij worden beïnvloed door omstandigheden buiten onze redelijke controle.',
        'Zodra een bestelling is overgedragen aan de koerier, zijn levertijden onderworpen aan het netwerk van de koerier, de lokale leveringsinfrastructuur, douaneprocedures en regelgeving van het land van bestemming. Wij assisteren klanten waar mogelijk bij tracking en het oplossen van verzendproblemen, maar kunnen levertijden na overdracht aan de vervoerder niet garanderen.',
      ],
      list: [
        'Gratis verzending binnen de Verenigde Arabische Emiraten geldt voor bestellingen met een merchandise-subtotaal van AED 1,000 of meer.',
        'Gratis wereldwijde verzending geldt voor bestellingen met een merchandise-subtotaal van EUR 500 of meer (of het nette equivalent getoond in de geselecteerde valuta).',
        'Onder deze drempels geldt een forfaitaire verzendkosten: AED 35 binnen de VAE, en EUR 30 (of het nette equivalent in de geselecteerde valuta) voor internationale bestemmingen, bevestigd bij betaling.',
        'De besteldeadline voor behandeling op dezelfde dag is 14:00 Gulf Standard Time (Dubai, GMT+4). Behandelings- en verzenddagen zijn maandag–zaterdag.',
        'Sieraden, lifestyle-accessoires en geselecteerde voorraadartikelen kunnen op dezelfde dag worden verzonden indien besteld vóór 14:00, maar verzending kan tot 3 werkdagen duren.',
        'Bespoke-kledingstukken worden doorgaans verzonden binnen ongeveer twee weken na orderbevestiging, en binnen maximaal ongeveer 14 kalenderdagen na orderbevestiging (gelijk aan tot 12 behandelingsdagen van maandag tot zaterdag; behandelingstijd: 0–12 werkdagen).',
        'Na verzending duurt het koerierstransit in de VAE doorgaans 1–3 werkdagen. De geschatte totale levertijd in de VAE is typisch 1–15 werkdagen vanaf orderbevestiging.',
        'Internationaal transit duurt na verzending doorgaans ongeveer 3–10 werkdagen, afhankelijk van bestemming en douaneafhandeling.',
        'Leveringsschattingen sluiten zondagen, feestdagen, koeriersvertragingen en omstandigheden buiten de controle van Bint Saeed uit.',
        'Na verzending ontvangen klanten, indien beschikbaar, verzendbevestiging en trackinggegevens.',
      ],
    },
    {
      title: '9. Leveringsgegevens en klantverantwoordelijkheden',
      body: [
        'Klanten zijn verantwoordelijk voor het waarborgen dat verzendadres, telefoonnummer en e-mailadres bij checkout volledig en juist zijn. Koeriers kunnen het verstrekte telefoonnummer of e-mailadres gebruiken om levering te regelen.',
        'Bint Saeed is niet verantwoordelijk voor niet-levering, vertraging of retour van een zending die voortvloeit uit onvolledige, onjuiste of verouderde leveringsinformatie van de klant.',
        'Wanneer een bestemming een postbus (P.O. Box) of een ander lokaal adresformaat vereist voor succesvolle levering, moeten klanten die gegevens volledig verstrekken. Nalaten daarvan kan leiden tot vertraging of retour van het pakket voor risico van de klant.',
      ],
    },
    {
      title: '10. Douane en import',
      body: [
        'Douanerechten, invoerbelastingen, lokale heffingen of inklaringskosten opgelegd door het land van bestemming blijven verantwoordelijkheid van de ontvanger, tenzij anders vermeld bij checkout. Deze kosten zijn los van de bestelling van de klant bij Bint Saeed.',
        'Klanten wordt geadviseerd hun lokale douaneautoriteit te raadplegen over importregelgeving, beperkingen en mogelijke kosten vóór bestelling. Douaneregels verschillen per land; onbekendheid met lokale vereisten kan leiden tot vertraging, extra kosten, weigering of retour van de zending.',
        'Bint Saeed is niet aansprakelijk voor pakketten die door de douane worden geweigerd, vastgehouden, vertraagd of in beslag genomen, noch voor rechten, belastingen of boetes geheven nadat de zending de Verenigde Arabische Emiraten heeft verlaten.',
      ],
    },
    {
      title: '11. Niet-afleverbare zendingen',
      body: [
        'Indien een zending naar Bint Saeed wordt geretourneerd wegens een onjuist of onvolledig adres, mislukte leveringspogingen, weigering van het pakket, weigering om douanekosten te betalen, importbeperkingen, of vergelijkbare redenen die niet toe te schrijven zijn aan een geverifieerde fout van het Huis, is Bint Saeed niet verplicht de bestelling terug te betalen.',
        'Naar ons goeddunken kunnen wij herverzending op kosten van de klant, een ruiling indien het stuk in aanmerking blijft komen, winkelsaldo of andere bijstand aanbieden. Wanneer goederen door de douane in beslag worden genomen, op instructie van de vervoerder worden achtergelaten, of herstel niet redelijkerwijs mogelijk is, wordt geen tegoed uitgegeven.',
        'Zoals elders in dit beleid uiteengezet, worden terugbetalingen niet aangeboden bij bedenkingen. Monetaire terugbetalingen, voor zover überhaupt overwogen, ontstaan alleen in verband met een geverifieerde fabricagefout of materiële non-conformiteit, en alleen wanneer reparatie of vervanging niet redelijkerwijs mogelijk is, of wanneer toepasselijk recht dit vereist.',
      ],
    },
    {
      title: '12. Overmacht',
      body: [
        'Bint Saeed is niet aansprakelijk voor vertragingen, onderbrekingen of het niet nakomen van verplichtingen wanneer dergelijke omstandigheden voortvloeien uit gebeurtenissen buiten onze redelijke controle.',
        'Deze gebeurtenissen kunnen onder meer omvatten, maar zijn niet beperkt tot:',
        'In dergelijke situaties kunnen productie, verzending, levering en andere verplichtingen worden opgeschort of uitgesteld voor de duur van de gebeurtenis en elke redelijke herstelperiode daarna.',
      ],
      list: [
        'Oorlog of gewapend conflict.',
        'Burgerlijke onrust of politieke instabiliteit.',
        'Handelingen van overheid of openbare autoriteiten.',
        'Douane-inspecties, douanevertragingen of importbeperkingen.',
        'Transportstoringen.',
        'Natuurrampen.',
        'Arbeidsgeschillen of stakingen.',
        'Noodsituaties op het gebied van volksgezondheid.',
        'Storingen van nutsvoorzieningen, telecommunicatiestoringen of technologische uitval.',
        'Overmachtsgebeurtenissen of vergelijkbare omstandigheden buiten onze redelijke controle.',
      ],
    },
    {
      title: `13. ${CLAUSE_TITLE.nl}`,
      body: [CLAUSE_SHORT.nl],
    },
    {
      title: '14. Contact',
      body: [
        'Voor ruilingen, retourverzoeken en defectclaims:',
        OFFICIAL_EMAILS.returns,
        'Voor algemene klantenondersteuning:',
        OFFICIAL_EMAILS.support,
        'WhatsApp: +971 50 229 9402',
        'Client Services is beschikbaar van zondag tot donderdag, van 9:00 tot 18:00 (Abu Dhabi-tijd).',
        'Gelieve uw ordernummer of factuurnummer, contactgegevens en, indien van toepassing, ondersteunende foto’s te vermelden. Ons team beoordeelt uw verzoek en begeleidt u bij de volgende stappen.',
        'Bij Bint Saeed verbinden wij ons ertoe elk verzoek met eerlijkheid, professionaliteit en zorg te behandelen.',
      ],
    },
  ],
  pt: [
    {
      title: '1. Declaração inicial',
      body: [
        'Cada peça Bint Saeed é criada segundo o pedido e a seleção específicos do cliente. A produção só começa após a confirmação da encomenda.',
        'O nosso compromisso é entregar cada peça no estado, na qualidade e no artesanato esperados de Bint Saeed. Caso surja um problema, a nossa equipa trabalhará em estreita colaboração com o cliente para encontrar uma resolução adequada.',
      ],
    },
    {
      title: '2. Política geral',
      body: [
        'Como muitas peças Bint Saeed são produzidas sob encomenda após a confirmação do pedido, não oferecemos reembolsos por mudança de opinião, preferência pessoal ou seleção de tamanho efetuada pelo cliente.',
        'Compreendemos, contudo, que possam surgir circunstâncias em que seja necessário um tamanho alternativo.',
        'Os artigos elegíveis podem ser trocados no prazo de 14 dias após a entrega, sujeita à aprovação do Departamento de Devoluções da Bint Saeed e às condições abaixo.',
        `Para solicitar uma troca, os clientes devem contactar ${OFFICIAL_EMAILS.returns} no prazo de 14 dias após a receção da encomenda.`,
        'É necessária autorização prévia antes de qualquer artigo ser devolvido. Uma vez aprovado, a nossa equipa fornecerá instruções detalhadas de devolução.',
        'Para ser elegível a uma troca ou a uma devolução autorizada, o artigo deve estar no mesmo estado em que foi recebido, sem uso nem desgaste, com etiquetas e na embalagem original. Necessitará também do recibo ou comprovativo de compra original, incluindo a fatura ou o número de encomenda.',
        'Para serem elegíveis à troca, os artigos devem:',
      ],
      list: [
        'Estar sem uso, não utilizados e em estado original.',
        'Ser devolvidos com todas as etiquetas, selos e rótulos de segurança originais intactos e não alterados.',
        'Ser devolvidos na embalagem original.',
        'Ser acompanhados do recibo ou comprovativo de compra original, incluindo a fatura ou o número de encomenda.',
        'Estar isentos de perfume, fumo, manchas, alterações, danos ou sinais de uso.',
        'Ser aprovados pelo Departamento de Devoluções da Bint Saeed antes do envio.',
      ],
      subsections: [
        {
          title: '',
          body: [
            'A Bint Saeed não aceitará troca ou devolução quando etiquetas, selos ou rótulos de segurança tenham sido removidos, cortados, danificados ou alterados, ou quando as fotografias apresentadas em apoio de um pedido indiquem que foi tentada a remoção ou a adulteração.',
            'Nenhuma troca é processada até que as mercadorias aprovadas tenham sido fisicamente recebidas e inspecionadas no nosso atelier.',
            'Quando uma troca ou devolução aprovada exigir o reenvio das mercadorias à Bint Saeed, aplica-se uma taxa fixa de envio de devolução: AED 35 para devoluções originadas nos Emirados Árabes Unidos, e EUR 35 (ou o equivalente líquido na moeda selecionada) para devoluções internacionais. Esta taxa é dispensada quando a devolução resulta de um defeito verificado da Casa, incluindo um defeito de fabrico ou uma não conformidade material, ou quando a lei aplicável o exija de outro modo.',
            'Peças personalizadas, especificações à medida, peças de vestuário alteradas e artigos produzidos segundo os requisitos específicos de um cliente não são elegíveis para troca, exceto em caso de defeito de fabrico verificado ou não conformidade material.',
            'Por razões de saúde, higiene e segurança pessoal, os brincos são de venda final e não podem ser trocados nem reembolsados, exceto em caso de defeito de fabrico verificado ou não conformidade material.',
          ],
          list: [
          ],
        },
      ],
    },
    {
      title: '3. Exceções (alinhamento com a proteção do consumidor dos Emirados Árabes Unidos)',
      body: [
        'De acordo com as leis aplicáveis dos Emirados Árabes Unidos, podem aplicar-se exceções quando:',
      ],
      list: [
        'O artigo apresente um defeito de fabrico verificado.',
        'O artigo difira materialmente da encomenda confirmada.',
      ],
      subsections: [
        {
          title: '',
          body: [
            'Nesses casos:',
          ],
          list: [
            'O cliente deve notificar-nos no prazo de 48 horas após a entrega.',
            'Devem ser fornecidas provas fotográficas claras por e-mail.',
            'O artigo deve permanecer sem uso e no seu estado original.',
          ],
        },
        {
          title: '',
          body: [
            'Após análise, a Bint Saeed trabalhará com o cliente para determinar a resolução mais adequada, que pode incluir:',
          ],
          list: [
            'Reparação do artigo.',
            'Substituição do artigo.',
            'Troca do artigo.',
            'Crédito de loja.',
            'Um reembolso monetário, apenas quando a reparação ou a substituição não seja razoavelmente possível, ou quando a lei aplicável o exija.',
          ],
        },
        {
          title: '',
          body: [
            'Aceitar um produto defeituoso ou materialmente não conforme para avaliação não significa automaticamente um reembolso monetário. Os remédios preferidos são avaliação, reparação, substituição, troca ou crédito de loja.',
            'As trocas de tamanho, quando aprovadas, são apenas trocas e não são tratadas como reembolsos ou devoluções ordinárias por mudança de ideia.',
            'O nosso objetivo é sempre proporcionar uma solução justa e adequada, mantendo os padrões de qualidade da casa.',
          ],
          list: [
          ],
        },
      ],
    },
    {
      title: '4. Casos não elegíveis',
      body: [
        'O seguinte não constitui fundamento para reembolso, troca ou devolução:',
      ],
      list: [
        'Mudança de opinião.',
        'Preferência pessoal.',
        'Tamanho incorreto selecionado pelo cliente.',
        'Variações menores inerentes à produção artesanal.',
        'Diferenças de cor resultantes das definições de ecrã ou das visualizações do dispositivo.',
        'Danos resultantes de cuidados inadequados, uso indevido, alteração ou desgaste normal.',
        'Remoção, corte, dano ou alteração de etiquetas, selos ou rótulos de segurança originais, incluindo quando fotografias indiquem que foi tentada a remoção ou a adulteração.',
        'Brincos, que são de venda final por razões de saúde, higiene e segurança pessoal (exceto em caso de defeito de fabrico verificado ou não conformidade material).',
      ],
    },
    {
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
    {
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
    {
      title: '7. Reconhecimento final',
      body: [
        'Ao efetuar uma encomenda na Bint Saeed, o cliente confirma ter revisto e aceite a descrição do produto, a informação de tamanho, o prazo de produção e os termos enunciados na presente política.',
        'O cliente reconhece ainda a natureza bespoke de muitas peças de vestuário Bint Saeed e compreende as limitações aplicáveis relativas a reembolsos, trocas e cancelamentos.',
      ],
    },
    {
      title: '8. Envio e entrega',
      body: [
        'Procuramos expedir cada encomenda com a maior eficiência possível, mantendo os padrões de qualidade da Bint Saeed.',
        'As encomendas internacionais são cumpridas com DHL Express. Nos Emirados Árabes Unidos, as encomendas são operadas pela Jeebly. Poderão ser introduzidos transportadores adicionais à medida que a nossa rede logística se expandir.',
        'Se necessitar de entrega para uma ocasião particular ou numa data fixa, ou se precisar da encomenda mais cedo, contacte Client Services antes de efetuar a encomenda via WhatsApp em +971 50 229 9402 ou em support@bintsaeed.com. Client Services está disponível de domingo a quinta-feira, das 9:00 às 18:00 (hora de Abu Dhabi). Os prazos de expedição e de trânsito são apenas estimativas e não podem ser garantidos.',
        'Embora façamos todos os esforços para cumprir os prazos estimados, as datas de entrega não são garantidas e podem ser afetadas por circunstâncias fora do nosso controlo razoável.',
        'Uma vez transferida a encomenda para o estafeta, os prazos de entrega ficam sujeitos à rede do estafeta, à infraestrutura local de entrega, aos procedimentos aduaneiros e à regulamentação do país de destino. Embora assistamos sempre os clientes no acompanhamento e na resolução de problemas de envio sempre que possível, não podemos garantir os prazos de entrega após a entrega ao transportador.',
      ],
      list: [
        'O envio gratuito nos Emirados Árabes Unidos aplica-se a encomendas com um subtotal de mercadoria de AED 1,000 ou mais.',
        'O envio mundial gratuito aplica-se a encomendas com um subtotal de mercadoria de EUR 500 ou mais (ou o equivalente líquido apresentado na moeda selecionada).',
        'Abaixo destes limiares, aplica-se uma taxa fixa de envio: AED 35 nos EAU, e EUR 30 (ou o equivalente líquido na moeda selecionada) para destinos internacionais, confirmada no pagamento.',
        'O horário limite para tratamento no mesmo dia é 14:00, hora padrão do Golfo (Dubai, GMT+4). Os dias de tratamento e expedição são de segunda a sábado.',
        'Joalharia, acessórios lifestyle e artigos selecionados em stock podem ser expedidos no mesmo dia se encomendados antes das 14:00, mas a expedição pode demorar até 3 dias úteis.',
        'As peças de vestuário bespoke são geralmente expedidas no prazo de aproximadamente duas semanas após a confirmação da encomenda, e no prazo máximo de aproximadamente 14 dias de calendário após a confirmação (equivalente a até 12 dias de tratamento de segunda a sábado; tempo de tratamento: 0–12 dias úteis).',
        'Uma vez expedidas, o trânsito do courier nos EAU demora geralmente 1–3 dias úteis. O tempo total estimado de entrega nos EAU é tipicamente de 1–15 dias úteis a partir da confirmação da encomenda.',
        'O trânsito internacional demora geralmente aproximadamente 3–10 dias úteis após a expedição, consoante o destino e o desembaraço aduaneiro.',
        'As estimativas de entrega excluem domingos, feriados públicos, atrasos do courier e circunstâncias fora do controlo de Bint Saeed.',
        'Uma vez expedida a encomenda, os clientes recebem confirmação de envio e detalhes de rastreio quando disponíveis.',
      ],
    },
    {
      title: '9. Detalhes de entrega e responsabilidades do cliente',
      body: [
        'Os clientes são responsáveis por assegurar que a morada de envio, o número de telefone e o endereço de e-mail estão completos e corretos no checkout. Os estafetas podem utilizar o telefone ou o e-mail fornecidos para organizar a entrega.',
        'A Bint Saeed não é responsável por não entrega, atraso ou devolução de uma remessa decorrentes de informação de entrega incompleta, incorreta ou desatualizada fornecida pelo cliente.',
        'Quando o destino exigir uma caixa postal (P.O. Box) ou outro formato de morada local para uma entrega bem-sucedida, os clientes devem fornecer esses dados na íntegra. A falha em fazê-lo pode resultar em atraso ou devolução do volume por conta e risco do cliente.',
      ],
    },
    {
      title: '10. Alfândega e importação',
      body: [
        'Quaisquer direitos aduaneiros, impostos de importação, encargos locais ou taxas de desembaraço impostos pelo país de destino permanecem da responsabilidade do destinatário, salvo indicação em contrário no checkout. Estes encargos são distintos da encomenda do cliente junto da Bint Saeed.',
        'Aconselha-se os clientes a consultar a respetiva autoridade aduaneira local sobre regulamentação de importação, restrições e possíveis encargos antes de encomendar. As regras aduaneiras diferem por país; o desconhecimento dos requisitos locais pode resultar em atraso, encargos adicionais, recusa ou devolução da remessa.',
        'A Bint Saeed não é responsável por volumes recusados, retidos, atrasados ou apreendidos pela alfândega, nem por direitos, impostos ou sanções cobrados após a remessa ter saído dos Emirados Árabes Unidos.',
      ],
    },
    {
      title: '11. Remessas não entregáveis',
      body: [
        'Se uma remessa for devolvida à Bint Saeed devido a morada incorreta ou incompleta, tentativas de entrega falhadas, recusa do volume, recusa de pagar encargos aduaneiros, restrições de importação, ou motivos comparáveis não imputáveis a um defeito verificado da Casa, a Bint Saeed não está obrigada a reembolsar a encomenda.',
        'Ao nosso critério, podemos oferecer reenvio a cargo do cliente, uma troca se a peça permanecer elegível, crédito de loja ou outra assistência. Quando as mercadorias forem apreendidas pela alfândega, abandonadas por instrução do transportador, ou a recuperação não for razoavelmente possível, não será emitido qualquer crédito.',
        'Conforme estabelecido noutras partes desta política, não se oferecem reembolsos por mudança de opinião. Os reembolsos monetários, quando considerados, só surgem em ligação com um defeito de fabrico verificado ou uma não conformidade material, e apenas quando a reparação ou a substituição não seja razoavelmente possível, ou quando a lei aplicável o exija.',
      ],
    },
    {
      title: '12. Força maior',
      body: [
        'A Bint Saeed não será responsabilizada por atrasos, interrupções ou incumprimento de obrigações quando tais circunstâncias resultem de eventos fora do nosso controlo razoável.',
        'Estes eventos podem incluir, sem limitação:',
        'Em tais situações, a produção, a expedição, a entrega e outras obrigações podem ser suspensas ou adiadas durante a duração do evento e qualquer período razoável de recuperação posterior.',
      ],
      list: [
        'Guerra ou conflito armado.',
        'Agitação civil ou instabilidade política.',
        'Atos de governo ou autoridades públicas.',
        'Inspeções aduaneiras, atrasos aduaneiros ou restrições de importação.',
        'Perturbações de transporte.',
        'Catástrofes naturais.',
        'Litígios laborais ou greves.',
        'Emergências de saúde pública.',
        'Falhas de serviços públicos, perturbações de telecomunicações ou interrupções tecnológicas.',
        'Eventos de força maior ou circunstâncias comparáveis fora do nosso controlo razoável.',
      ],
    },
    {
      title: `13. ${CLAUSE_TITLE.pt}`,
      body: [CLAUSE_SHORT.pt],
    },
    {
      title: '14. Contacto',
      body: [
        'Para trocas, pedidos de devolução e reclamações por defeito:',
        OFFICIAL_EMAILS.returns,
        'Para apoio ao cliente geral:',
        OFFICIAL_EMAILS.support,
        'WhatsApp: +971 50 229 9402',
        'Client Services está disponível de domingo a quinta-feira, das 9:00 às 18:00 (hora de Abu Dhabi).',
        'Inclua o número de encomenda ou de fatura, os dados de contacto e, quando aplicável, fotografias de apoio. A nossa equipa analisará o seu pedido e orientá-lo-á quanto aos passos seguintes.',
        'Na Bint Saeed, comprometemo-nos a tratar cada pedido com equidade, profissionalismo e cuidado.',
      ],
    },
  ],
  ru: [
    {
      title: '1. Вступительное заявление',
      body: [
        'Каждое изделие Bint Saeed создаётся по конкретному запросу и выбору клиента. Производство начинается только после подтверждения заказа.',
        'Наше обязательство — доставить каждое изделие в состоянии, качестве и с мастерством, ожидаемыми от Bint Saeed. Если возникнет проблема, наша команда будет тесно работать с клиентом, чтобы найти надлежащее решение.',
      ],
    },
    {
      title: '2. Общая политика',
      body: [
        'Поскольку многие изделия Bint Saeed производятся на заказ после подтверждения заказа, мы не предлагаем возврат средств при изменении решения, личных предпочтениях или выборе размера, сделанном клиентом.',
        'Тем не менее мы понимаем, что могут возникнуть обстоятельства, когда требуется альтернативный размер.',
        'Подходящие товары могут быть обменены в течение 14 дней с момента доставки при условии одобрения Отделом возвратов Bint Saeed и при соблюдении условий, изложенных ниже.',
        `Чтобы запросить обмен, клиенты должны связаться с ${OFFICIAL_EMAILS.returns} в течение 14 дней с момента получения заказа.`,
        'До возврата любого товара требуется предварительное разрешение. После одобрения наша команда предоставит подробные инструкции по возврату.',
        'Чтобы товар подлежал обмену или разрешённому возврату, он должен быть в том же состоянии, в котором был получен, неношеным или неиспользованным, с бирками и в оригинальной упаковке. Также потребуется оригинальный чек или подтверждение покупки, включая номер счёта или заказа.',
        'Чтобы товары подлежали обмену, они должны:',
      ],
      list: [
        'Быть неношеными, неиспользованными и в оригинальном состоянии.',
        'Возвращаться со всеми оригинальными бирками, пломбами и защитными ярлыками, неповреждёнными и нетронутыми.',
        'Возвращаться в оригинальной упаковке.',
        'Сопровождаться оригинальным чеком или подтверждением покупки, включая номер счёта или заказа.',
        'Быть свободными от парфюма, дыма, пятен, изменений, повреждений или признаков износа.',
        'Быть одобрены Отделом возвратов Bint Saeed до отправки.',
      ],
      subsections: [
        {
          title: '',
          body: [
            'Bint Saeed не примет обмен или возврат, если бирки, пломбы или защитные ярлыки были сняты, разрезаны, повреждены или изменены, либо если фотографии, представленные в поддержку запроса, указывают на попытку снятия или вмешательства.',
            'Обмен не обрабатывается до тех пор, пока одобренные товары не будут физически получены и проверены в нашем ателье.',
            'Если одобренный обмен или возврат требует отправки товаров обратно в Bint Saeed, применяется фиксированная плата за обратную доставку: AED 35 для возвратов из Объединённых Арабских Эмиратов и EUR 35 (или чистый эквивалент в выбранной валюте) для международных возвратов. Эта плата не взимается, если возврат вызван подтверждённым недостатком Дома, включая производственный дефект или существенное несоответствие, либо если иное требуется применимым правом.',
            'Персонализированные изделия, индивидуальные спецификации, изменённые предметы одежды и товары, произведённые по конкретным требованиям клиента, не подлежат обмену, за исключением случаев подтверждённого производственного дефекта или существенного несоответствия.',
            'По соображениям здоровья, гигиены и личной безопасности серьги являются окончательной продажей и не подлежат обмену или возврату средств, за исключением случаев подтверждённого производственного дефекта или существенного несоответствия.',
          ],
          list: [
          ],
        },
      ],
    },
    {
      title: '3. Исключения (соответствие защите прав потребителей Объединённых Арабских Эмиратов)',
      body: [
        'В соответствии с применимыми законами Объединённых Арабских Эмиратов исключения могут применяться, когда:',
      ],
      list: [
        'Товар имеет подтверждённый производственный дефект.',
        'Товар существенно отличается от подтверждённого заказа.',
      ],
      subsections: [
        {
          title: '',
          body: [
            'В таких случаях:',
          ],
          list: [
            'Клиент должен уведомить нас в течение 48 часов после доставки.',
            'Должны быть предоставлены чёткие фотографические доказательства по электронной почте.',
            'Товар должен оставаться неиспользованным и в оригинальном состоянии.',
          ],
        },
        {
          title: '',
          body: [
            'После рассмотрения Bint Saeed будет работать с клиентом, чтобы определить наиболее подходящее решение, которое может включать:',
          ],
          list: [
            'Ремонт товара.',
            'Замену товара.',
            'Обмен товара.',
            'Кредит магазина.',
            'Денежный возврат — только если ремонт или замена не являются разумно возможными либо этого требует применимое право.',
          ],
        },
        {
          title: '',
          body: [
            'Принятие дефектного или существенно несоответствующего товара для оценки не означает автоматически денежный возврат. Предпочтительные средства — оценка, ремонт, замена, обмен или кредит магазина.',
            'Обмен размера, при одобрении, является только обменом и не рассматривается как возврат денежных средств или обычный возврат из‑за изменения решения.',
            'Наша цель — всегда предоставить справедливое и надлежащее решение, сохраняя стандарты качества дома.',
          ],
          list: [
          ],
        },
      ],
    },
    {
      title: '4. Неподходящие случаи',
      body: [
        'Следующее не является основанием для возврата средств, обмена или возврата:',
      ],
      list: [
        'Изменение решения.',
        'Личные предпочтения.',
        'Неверный размер, выбранный клиентом.',
        'Незначительные вариации, присущие ручному производству.',
        'Различия в цвете, вызванные настройками экрана или отображением устройства.',
        'Повреждения вследствие неправильного ухода, ненадлежащего использования, изменения или нормального износа.',
        'Снятие, разрезание, повреждение или изменение оригинальных бирок, пломб или защитных ярлыков, включая случаи, когда фотографии указывают на попытку снятия или вмешательства.',
        'Серьги, которые являются окончательной продажей по соображениям здоровья, гигиены и личной безопасности (за исключением случаев подтверждённого производственного дефекта или существенного несоответствия).',
      ],
    },
    {
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
    {
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
    {
      title: '7. Итоговое подтверждение',
      body: [
        'Размещая заказ в Bint Saeed, клиент подтверждает, что ознакомился и принял описание товара, информацию о размере, сроки производства и условия, изложенные в настоящей политике.',
        'Клиент также признаёт bespoke-характер многих предметов одежды Bint Saeed и понимает применимые ограничения, связанные с возвратом средств, обменом и отменой.',
      ],
    },
    {
      title: '8. Доставка и получение',
      body: [
        'Мы стремимся отправлять каждый заказ максимально эффективно, сохраняя стандарты качества Bint Saeed.',
        'Международные заказы выполняются через DHL Express. В Объединённых Арабских Эмиратах заказы обрабатываются Jeebly. Дополнительные перевозчики могут быть введены по мере расширения нашей логистической сети.',
        'Если вам нужна доставка к определённому событию или к фиксированной дате, или если заказ нужен раньше, свяжитесь с Client Services до размещения заказа в WhatsApp по номеру +971 50 229 9402 или по адресу support@bintsaeed.com. Client Services доступна с воскресенья по четверг, с 9:00 до 18:00 (время Абу-Даби). Сроки отправки и транзита являются лишь оценочными и не могут быть гарантированы.',
        'Хотя мы прилагаем все усилия для соблюдения оценочных сроков, даты доставки не гарантируются и могут быть затронуты обстоятельствами вне нашего разумного контроля.',
        'После передачи заказа курьеру сроки доставки зависят от сети курьера, местной инфраструктуры доставки, таможенных процедур и правил страны назначения. Хотя мы всегда помогаем клиентам с отслеживанием и решением проблем доставки, когда это возможно, мы не можем гарантировать сроки доставки после передачи перевозчику.',
      ],
      list: [
        'Бесплатная доставка в Объединённых Арабских Эмиратах применяется к заказам с промежуточной суммой товаров AED 1,000 или более.',
        'Бесплатная доставка по всему миру применяется к заказам с промежуточной суммой товаров EUR 500 или более (или чистый эквивалент, показанный в выбранной валюте).',
        'Ниже этих порогов применяется фиксированная плата за доставку: AED 35 в ОАЭ и EUR 30 (или чистый эквивалент в выбранной валюте) для международных направлений, подтверждается при оплате.',
        'Крайний срок заказа для возможной обработки в тот же день — 14:00 по стандартному времени Персидского залива (Дубай, GMT+4). Дни обработки и отправки — с понедельника по субботу.',
        'Украшения, lifestyle-аксессуары и отдельные товары в наличии могут быть отправлены в тот же день, если заказ оформлен до 14:00, однако отправка может занять до 3 рабочих дней.',
        'Bespoke-предметы одежды обычно отправляются в течение примерно двух недель после подтверждения заказа и в течение максимум примерно 14 календарных дней после подтверждения (что соответствует до 12 дней обработки с понедельника по субботу; время обработки: 0–12 рабочих дней).',
        'После отправки курьерский транзит по ОАЭ обычно занимает 1–3 рабочих дня. Ориентировочный общий срок доставки по ОАЭ обычно составляет 1–15 рабочих дней с момента подтверждения заказа.',
        'Международный транзит обычно занимает около 3–10 рабочих дней после отправки в зависимости от пункта назначения и таможенного оформления.',
        'Оценки сроков доставки не включают воскресенья, государственные праздники, задержки курьера и обстоятельства вне контроля Bint Saeed.',
        'После отправки заказа клиенты получают подтверждение отправки и данные отслеживания, где они доступны.',
      ],
    },
    {
      title: '9. Данные доставки и обязанности клиента',
      body: [
        'Клиенты отвечают за то, чтобы адрес доставки, номер телефона и адрес электронной почты были полными и точными при оформлении заказа. Курьеры могут использовать указанный телефон или электронную почту для организации доставки.',
        'Bint Saeed не несёт ответственности за недоставку, задержку или возврат отправления, вызванные неполной, неверной или устаревшей информацией о доставке, предоставленной клиентом.',
        'Если пункт назначения требует абонентского ящика (P.O. Box) или иного местного формата адреса для успешной доставки, клиенты должны предоставить эти данные полностью. Невыполнение этого требования может привести к задержке или возврату посылки на риск клиента.',
      ],
    },
    {
      title: '10. Таможня и импорт',
      body: [
        'Любые таможенные пошлины, импортные налоги, местные сборы или сборы за оформление, взимаемые страной назначения, остаются обязанностью получателя, если иное не указано при оформлении заказа. Эти сборы отделены от заказа клиента в Bint Saeed.',
        'Клиентам рекомендуется до заказа обратиться в местный таможенный орган по поводу правил импорта, ограничений и возможных сборов. Таможенные правила различаются по странам; незнание местных требований может привести к задержке, дополнительным сборам, отказу или возврату отправления.',
        'Bint Saeed не несёт ответственности за посылки, отказанные, удерживаемые, задержанные или изъятые таможней, а также за пошлины, налоги или штрафы, взимаемые после того, как отправление покинуло Объединённые Арабские Эмираты.',
      ],
    },
    {
      title: '11. Недоставляемые отправления',
      body: [
        'Если отправление возвращается в Bint Saeed из-за неверного или неполного адреса, неудачных попыток доставки, отказа от посылки, отказа оплатить таможенные сборы, ограничений на импорт или сопоставимых причин, не связанных с подтверждённым недостатком Дома, Bint Saeed не обязана возвращать средства за заказ.',
        'По нашему усмотрению мы можем предложить повторную отправку за счёт клиента, обмен, если изделие остаётся подходящим, кредит магазина или иную помощь. Если товары изъяты таможней, оставлены по указанию перевозчика или возврат разумно невозможен, кредит не выдаётся.',
        'Как указано в других частях настоящей политики, возврат средств при изменении решения не предлагается. Денежный возврат, если он вообще рассматривается, возникает только в связи с подтверждённым производственным дефектом или существенным несоответствием и только если ремонт или замена не являются разумно возможными, либо если этого требует применимое право.',
      ],
    },
    {
      title: '12. Форс-мажор',
      body: [
        'Bint Saeed не несёт ответственности за задержки, перерывы или неисполнение обязательств, если такие обстоятельства возникают из событий вне нашего разумного контроля.',
        'Эти события могут включать, но не ограничиваются:',
        'В таких ситуациях производство, отправка, доставка и иные обязательства могут быть приостановлены или отложены на время события и любой разумный последующий период восстановления.',
      ],
      list: [
        'Война или вооружённый конфликт.',
        'Гражданские беспорядки или политическая нестабильность.',
        'Действия правительства или государственных органов.',
        'Таможенные проверки, таможенные задержки или ограничения на импорт.',
        'Сбои в транспорте.',
        'Стихийные бедствия.',
        'Трудовые споры или забастовки.',
        'Чрезвычайные ситуации в области общественного здравоохранения.',
        'Сбои коммунальных услуг, телекоммуникационные нарушения или технологические сбои.',
        'Форс-мажорные события или сопоставимые обстоятельства вне нашего разумного контроля.',
      ],
    },
    {
      title: `13. ${CLAUSE_TITLE.ru}`,
      body: [CLAUSE_SHORT.ru],
    },
    {
      title: '14. Контакты',
      body: [
        'По вопросам обмена, запросов на возврат и претензий по дефектам:',
        OFFICIAL_EMAILS.returns,
        'По общим вопросам поддержки клиентов:',
        OFFICIAL_EMAILS.support,
        'WhatsApp: +971 50 229 9402',
        'Client Services доступна с воскресенья по четверг, с 9:00 до 18:00 (время Абу-Даби).',
        'Пожалуйста, укажите номер заказа или счёта, контактные данные и, где применимо, подтверждающие фотографии. Наша команда рассмотрит ваш запрос и даст рекомендации по следующим шагам.',
        'В Bint Saeed мы обязуемся рассматривать каждое обращение справедливо, профессионально и внимательно.',
      ],
    },
  ],
  zh: [
    {
      title: '1. 开篇声明',
      body: [
        '每一件 Bint Saeed 作品均按照客户的具体要求与选择制作。生产仅在订单确认后开始。',
        '我们承诺以 Bint Saeed 所预期的状态、品质与工艺交付每一件作品。如出现问题，我们的团队将与客户紧密协作，寻求适当的解决方式。',
      ],
    },
    {
      title: '2. 一般政策',
      body: [
        '由于许多 Bint Saeed 作品在确认订单后按需生产，我们不因改变主意、个人偏好或客户所选尺码而提供退款。',
        '然而，我们理解可能出现需要更换尺码的情形。',
        '符合条件的商品可在收货后 14 日内换货，须经 Bint Saeed 退货部门批准，并须符合下列条件。',
        `申请换货时，客户须在收到订单后 14 日内联系 ${OFFICIAL_EMAILS.returns}。`,
        '任何商品退回前须事先获得授权。一经批准，我们的团队将提供详细退货说明。',
        '要符合换货或经授权退货的条件，商品须保持收货时的相同状态、未穿着或未使用、带有吊牌，并置于原包装内。您还需要原始收据或购买凭证，包括发票或订单编号。',
        '要符合换货条件，商品必须：',
      ],
      list: [
        '未穿着、未使用，并保持原状。',
        '退回时所有原厂吊牌、封条与安全标签完好无损、未被改动。',
        '以原包装退回。',
        '附带原始收据或购买凭证，包括发票或订单编号。',
        '无香水、烟味、污渍、改动、损坏或穿着痕迹。',
        '在寄出前经 Bint Saeed 退货部门批准。',
      ],
      subsections: [
        {
          title: '',
          body: [
            '凡吊牌、封条或安全标签已被拆除、剪开、损坏或改动，或为支持申请而提交的照片显示曾试图拆除或篡改者，Bint Saeed 概不接受换货或退货。',
            '在获批商品实际送达本工坊并经检验之前，不会处理任何换货。',
            '如获批换货或退货需将商品寄回 Bint Saeed，适用统一退货运费：源自阿拉伯联合酋长国的退货为 AED 35；国际退货为 EUR 35（或所选货币的净等值）。若退货因本品牌经核实的过错（包括制造瑕疵或实质性不符）引起，或适用法律另有要求，则免除该费用。',
            '个性化作品、定制规格、经改动的服装，以及按客户特定要求生产的商品，除存在经核实的制造瑕疵或实质性不符外，不符合换货条件。',
            '出于健康、卫生与人身安全原因，耳环为最终销售，不可换货或退款，但存在经核实的制造瑕疵或实质性不符的情形除外。',
          ],
          list: [
          ],
        },
      ],
    },
    {
      title: '3. 例外情形（对齐阿拉伯联合酋长国消费者保护）',
      body: [
        '根据阿拉伯联合酋长国适用法律，在下列情况下可适用例外：',
      ],
      list: [
        '商品存在经核实的制造瑕疵。',
        '商品与确认订单存在实质性差异。',
      ],
      subsections: [
        {
          title: '',
          body: [
            '在此类情况下：',
          ],
          list: [
            '客户须在收货后 48 小时内通知我们。',
            '须通过电子邮件提供清晰的照片证据。',
            '商品须保持未使用并处于原状。',
          ],
        },
        {
          title: '',
          body: [
            '经审核后，Bint Saeed 将与客户共同确定最适当的解决方式，可能包括：',
          ],
          list: [
            '商品维修。',
            '商品更换。',
            '商品换货。',
            '店铺积分。',
            '金钱退款——仅在维修或更换合理地不可行，或适用法律要求时。',
          ],
        },
        {
          title: '',
          body: [
            '接受有瑕疵或实质性不符的商品以供评估，并不自动意味着金钱退款。优先救济为评估、维修、更换、换货或店铺积分。',
            '经批准的尺码换货仅为换货，不视为退款，亦非因改变主意而产生的普通退货。',
            '我们的目标始终是在维护品牌品质标准的同时，提供公平且适当的解决方案。',
          ],
          list: [
          ],
        },
      ],
    },
    {
      title: '4. 不符合条件的情形',
      body: [
        '下列情形不构成退款、换货或退货的理由：',
      ],
      list: [
        '改变主意。',
        '个人偏好。',
        '客户所选尺码不正确。',
        '手工制作固有的细微差异。',
        '因屏幕设置或设备显示导致的色差。',
        '因护理不当、误用、改动或正常磨损造成的损坏。',
        '拆除、剪开、损坏或改动原厂吊牌、封条或安全标签，包括照片显示曾试图拆除或篡改的情形。',
        '耳环——出于健康、卫生与人身安全原因属最终销售（但存在经核实的制造瑕疵或实质性不符的情形除外）。',
      ],
    },
    {
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
    {
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
    {
      title: '7. 最终确认',
      body: [
        '向 Bint Saeed 下单，即表示客户确认已审阅并接受产品说明、尺码信息、生产时程及本政策所列条款。',
        '客户进一步确认许多 Bint Saeed 服装属定制（bespoke）制作，并理解有关退款、换货与取消的适用限制。',
      ],
    },
    {
      title: '8. 配送与交付',
      body: [
        '我们力求在维护 Bint Saeed 品质标准的同时，尽可能高效地发出每一笔订单。',
        '国际订单由 DHL Express 履约。在阿拉伯联合酋长国内，订单由 Jeebly 运营。随着物流网络扩展，可能引入其他承运商。',
        '如您需要针对特定场合或固定日期的交付，或希望更早收到订单，请在下单前通过 WhatsApp（+971 50 229 9402）或 support@bintsaeed.com 联系 Client Services。Client Services 服务时间为周日至周四 9:00–18:00（阿布扎比时间）。发货与运输时效仅为估算，无法保证。',
        '尽管我们尽一切努力遵守预估时限，交付日期不予保证，并可能受我们合理控制范围之外的情形影响。',
        '订单移交快递后，交付时效取决于快递网络、当地配送基础设施、海关程序及目的地国家法规。我们会在可能范围内协助客户跟踪并解决配送问题，但移交承运商后无法保证交付时效。',
      ],
      list: [
        '阿拉伯联合酋长国内免运费适用于商品小计达 AED 1,000 或以上的订单。',
        '全球免运费适用于商品小计达 EUR 500 或以上的订单（或所选货币所示净等值）。',
        '低于上述门槛时，适用统一运费：阿联酋境内 AED 35；国际目的地 EUR 30（或所选货币的净等值），于付款时确认。',
        '当日处理的订单截止时间为海湾标准时间下午 2:00（迪拜，GMT+4）。处理与发货日为周一至周六。',
        '珠宝、生活方式配饰及部分现货商品若在下午 2:00 前下单，或可当日发出，但发货最长可需 3 个工作日。',
        '定制服装通常在订单确认后约两周内发出，最长约 14 个日历日（相当于周一至周六最多 12 个处理日；处理时间：0–12 个工作日）。',
        '发出后，阿联酋境内快递转运通常需 1–3 个工作日。自订单确认起，阿联酋预计总送达时间通常为 1–15 个工作日。',
        '国际转运在发货后通常约需 3–10 个工作日，视目的地与清关情况而定。',
        '送达预估不含周日、公共假期、快递延误及 Bint Saeed 无法控制的情形。',
        '订单发出后，客户将在可获得时收到发货确认与跟踪信息。',
      ],
    },
    {
      title: '9. 交付详情与客户责任',
      body: [
        '客户有责任确保结账时填写的配送地址、电话号码与电子邮箱完整、准确。快递可能使用所提供的电话或电子邮箱安排交付。',
        '因客户提供的交付信息不完整、不正确或过时而导致的未送达、延误或退回，Bint Saeed 概不负责。',
        '若目的地要求使用邮政信箱（P.O. Box）或其他本地地址格式方可成功交付，客户须完整提供该等信息。未能提供可能导致包裹延误或退回，风险由客户承担。',
      ],
    },
    {
      title: '10. 海关与进口',
      body: [
        '目的地国家征收的任何关税、进口税、地方费用或清关费，除非结账时另有说明，概由收件人承担。该等费用独立于客户向 Bint Saeed 的订单。',
        '建议客户在下单前向当地海关机关咨询进口法规、限制及可能费用。各国海关规则不同；不熟悉当地要求可能导致延误、额外费用、拒收或退回。',
        '对于被海关拒收、扣留、延误或扣押的包裹，以及包裹离开阿拉伯联合酋长国后征收的任何关税、税款或罚金，Bint Saeed 概不负责。',
      ],
    },
    {
      title: '11. 无法投递的包裹',
      body: [
        '若因地址不正确或不完整、投递失败、拒收包裹、拒绝支付关税、进口限制，或非本品牌经核实过错的类似原因导致包裹退回 Bint Saeed，Bint Saeed 无义务退还订单款项。',
        '我们可酌情提供由客户承担费用的重新发货、在商品仍符合条件时的换货、店铺积分或其他协助。若商品被海关扣押、按承运商指示弃置，或合理地无法追回，则不予发放任何积分。',
        '如本政策其他部分所述，改变主意不予退款。金钱退款（如予以考虑）仅与经核实的制造瑕疵或实质性不符相关，且仅在维修或更换合理地不可行，或适用法律要求时适用。',
      ],
    },
    {
      title: '12. 不可抗力',
      body: [
        '若延误、中断或未能履行义务系因超出我们合理控制范围的事件所致，Bint Saeed 不承担责任。',
        '此类事件可包括但不限于：',
        '在此类情形下，生产、发货、交付及其他义务可在事件持续期间及之后任何合理恢复期内暂停或推迟。',
      ],
      list: [
        '战争或武装冲突。',
        '内乱或政治不稳定。',
        '政府或公共机关的行为。',
        '海关查验、海关延误或进口限制。',
        '运输中断。',
        '自然灾害。',
        '劳资纠纷或罢工。',
        '公共卫生紧急情况。',
        '公用事业故障、电信中断或技术宕机。',
        '不可抗力事件或超出我们合理控制范围的类似情形。',
      ],
    },
    {
      title: `13. ${CLAUSE_TITLE.zh}`,
      body: [CLAUSE_SHORT.zh],
    },
    {
      title: '14. 联系方式',
      body: [
        '有关换货、退货申请与瑕疵索赔：',
        OFFICIAL_EMAILS.returns,
        '有关一般客户支持：',
        OFFICIAL_EMAILS.support,
        'WhatsApp：+971 50 229 9402',
        'Client Services 服务时间为周日至周四 9:00–18:00（阿布扎比时间）。',
        '请提供您的订单号或发票号、联系方式，以及适用时的佐证照片。我们的团队将审核您的请求并就后续步骤提供指引。',
        '在 Bint Saeed，我们致力于以公平、专业与关怀处理每一项问询。',
      ],
    },
  ],
}

export function getEuZhShipmentSections(lang: EuZhLocale): PolicySection[] {
  return SECTIONS[lang]
}

export function getEuZhShipmentSectionList(lang: EuZhLocale): string[] {
  return SECTIONS[lang].map((s) => s.title)
}
