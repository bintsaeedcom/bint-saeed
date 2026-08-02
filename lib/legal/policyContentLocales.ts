import type { PolicyContent, PolicySection } from '@/lib/legal/policyContentId'
import {
  LANGUAGE_CLAUSE_SHORT_DE,
  LANGUAGE_CLAUSE_SHORT_ES,
  LANGUAGE_CLAUSE_SHORT_FR,
  LANGUAGE_CLAUSE_SHORT_IT,
  LANGUAGE_CLAUSE_SHORT_NL,
  LANGUAGE_CLAUSE_SHORT_PT,
  LANGUAGE_CLAUSE_SHORT_RU,
  LANGUAGE_CLAUSE_SHORT_ZH,
} from '@/lib/legal/languageAndTranslationClause'

export type EuZhLocale = 'fr' | 'de' | 'it' | 'es' | 'nl' | 'pt' | 'ru' | 'zh'


const TERMS_FR_META: Omit<PolicyContent, 'sections'> = {
  pageTitle: "Conditions générales",
  breadcrumb: "Conditions générales",
  homeBreadcrumb: "Accueil",
  heroLabel: "Juridique",
  lastUpdated: "Dernière mise à jour : juillet 2026",
  intro: "Les présentes Conditions régissent l’accès et l’utilisation du site Bint Saeed, de ses produits et services associés, conformément au droit applicable des Émirats arabes unis.",
  summaryTitle: "Avis résumé",
  summaryBody: ["En utilisant ce site ou en passant commande, vous acceptez ces Conditions. Si vous n’y consentez pas, veuillez ne pas utiliser le site. La langue d’origine du site et de ces Conditions est l’anglais. Le texte anglais fait foi. Les traductions sont fournies pour commodité uniquement et ne créent pas de droits distincts."],
  sectionList: ["1. Champ d’application et acceptation", "2. Capacité et responsabilité du compte", "3. Produits, disponibilité et prix", "4. Commandes, paiement et vérification", "5. Expédition, livraison et transfert des risques", "6. Retours, réparations et caractère définitif des commandes", "7. Personnalisation et travaux sur mesure", "8. Propriété intellectuelle", "9. Usages autorisés et interdits", "10. Déclaration relative aux contributions caritatives", "11. Avertissements et limitation de responsabilité", "12. Indemnisation", "13. Droit applicable et juridiction", "14. Langue et traductions", "15. Modifications, divisibilité et contact"],
}

const TERMS_FR_SECTIONS: PolicySection[] = [
    {
      title: "1. Champ d’application et acceptation",
      body: ["Les présentes Conditions générales s’appliquent à toute personne qui accède au site Bint Saeed, à son contenu, à ses produits ou à ses services associés. En accédant au site, en créant un compte ou en passant commande, vous confirmez avoir lu, compris et accepté ces Conditions."],
    },
    {
      title: "2. Capacité et responsabilité du compte",
      body: ["Vous devez avoir la capacité juridique de conclure des contrats selon le droit applicable. Si vous créez un compte, vous êtes responsable de la confidentialité de vos identifiants et de toute activité effectuée sous votre compte."],
      list: ["Vous acceptez de fournir des informations exactes, complètes et à jour pour les commandes et les communications.", "Vous êtes responsable de maintenir à jour vos coordonnées de livraison, de facturation et de contact.", "Nous pouvons suspendre ou restreindre l’accès en cas de soupçon raisonnable d’abus, de fraude ou de risque de sécurité."],
    },
    {
      title: "3. Produits, disponibilité et prix",
      body: ["Nous nous efforçons de présenter avec exactitude les détails, la disponibilité et les prix des produits. Des erreurs occasionnelles peuvent toutefois survenir. Les images sont illustratives et peuvent varier légèrement selon l’éclairage, l’écran et le caractère artisanal de la production."],
      list: ["Les prix sont affichés dans la devise que vous sélectionnez sur le site. Les montants de vente au détail sont fixés par devise et ne constituent pas des conversions de change en temps réel. L’AED est la devise de présentation par défaut pour la navigation depuis les EAU, sauf choix d’une autre devise prise en charge.", "La TVA applicable est traitée conformément aux exigences fiscales des EAU.", "Nous pouvons mettre à jour l’assortiment et les prix à tout moment avant confirmation de commande.", "Les pièces personnalisées sont soumises à des délais spécifiques et à des conditions de vente ferme."],
    },
    {
      title: "4. Commandes, paiement et vérification",
      body: ["La soumission d’une demande de commande ne constitue pas une acceptation définitive par Bint Saeed. Une commande est acceptée lorsque nous émettons une confirmation et que l’autorisation de paiement est validée."],
      list: ["Les paiements sont traités par des prestataires sécurisés, notamment Stripe (Embedded Checkout), PayPal et Mollie lorsqu’ils sont proposés pour votre destination. Les données complètes de carte sont traitées par ces prestataires et ne sont pas conservées intégralement par Bint Saeed.", "Nous pouvons refuser, annuler ou limiter une commande pour des motifs légitimes.", "Des contrôles antifraude, d’identité et de paiement peuvent être requis.", "En cas d’erreur de paiement ou de prix, nous pouvons annuler et rembourser la commande concernée."],
    },
    {
      title: "5. Expédition, livraison et transfert des risques",
      body: ["Les délais de livraison sont indicatifs et non garantis. Des retards peuvent survenir pour des raisons logistiques, douanières, de jours fériés, météo ou d’événements hors de notre contrôle raisonnable."],
      list: ["La livraison offerte aux Émirats arabes unis s’applique aux commandes dont le sous-total marchandises est d’au moins 1 000 AED.", "La livraison mondiale offerte s’applique aux commandes dont le sous-total marchandises est d’au moins 500 EUR (ou l’équivalent indiqué dans la devise sélectionnée).", "En dessous de ces seuils, des frais forfaitaires s’appliquent : 35 AED aux EAU, et 30 EUR (ou l’équivalent indiqué) à l’international, confirmés au paiement.", "Les commandes internationales sont expédiées via DHL Express ; aux EAU via Jeebly.", "Les droits de douane, taxes d’importation et frais de dédouanement restent à la charge du destinataire.", "Le client doit fournir une adresse, un téléphone et un e-mail complets et exacts. Bint Saeed n’est pas responsable d’une non-livraison due à des informations incorrectes fournies par le client.", "Les conditions, coûts et délais estimés figurent au paiement ou dans les politiques applicables.", "Le risque de perte est transféré à la livraison à l’adresse ou au destinataire accepté."],
    },
    {
      title: "6. Retours, réparations et caractère définitif des commandes",
      body: ["Les retours et réparations sont régis par notre Politique d’expédition et de retours. Nous invitons chaque client à la lire avant de commander."],
      list: ["De nombreuses pièces sont fabriquées sur commande ; les annulations et retours sont limités une fois la production commencée. Les articles prêts à expédier et les accessoires suivent la Politique d’expédition et de retours, y compris les règles de vente ferme pour les boucles d’oreilles et tout autre article ainsi indiqué sur la page produit.", "Les réclamations pour défaut ou non-conformité matérielle doivent être adressées avec preuves dans le délai indiqué.", "Les échanges exigent que les étiquettes, sceaux et dispositifs de sécurité d’origine restent intacts ; leur retrait ou une tentative de retrait rend la demande irrecevable.", "Les remèdes peuvent inclure d’abord la réparation ou le remplacement, puis le remboursement lorsque la loi l’exige."],
    },
    {
      title: "7. Personnalisation et travaux sur mesure",
      body: [
        "En soumettant un texte de personnalisation, vous confirmez disposer des droits nécessaires et que ce contenu ne porte pas atteinte à des tiers ni à la loi. Nous pouvons refuser une personnalisation illicite, offensante ou non conforme.",
        "Vérifiez soigneusement l’orthographe avant envoi. Nous ne sommes pas responsables des erreurs saisies par la cliente.",
        "Tout article produit avec une étiquette intérieure personnalisée (y compris une étiquette offerte de la Maison) est en vente ferme et ne peut être échangé ni retourné pour un changement d’avis, une préférence de taille ou un motif similaire, sauf défaut de fabrication avéré ou non-conformité matérielle, ou lorsque la loi impérative l’exige.",
        "Une étiquette intérieure personnalisée offerte n’exclut pas une commande éligible de HOUSE15 ou du House Privilege, sous réserve des conditions Communauté ci-dessous — la personnalisation demeure toutefois une vente ferme aux fins d’échange.",
      ],
    },
    {
      title: "8. Propriété intellectuelle",
      body: ["L’ensemble du contenu du site, des actifs créatifs, designs, photographies, marques, textes et matériaux techniques appartient à Bint Saeed ou lui est concédé sous licence, et est protégé par le droit de la propriété intellectuelle applicable."],
      list: ["Aucune copie, reproduction, extraction, republication ou réutilisation commerciale sans autorisation écrite.", "Aucune utilisation des éléments de marque, images produit ou matériels propriétaires dans une œuvre dérivée sans accord.", "Les demandes d’autorisation peuvent être adressées à legal@bintsaeed.com."],
    },
    {
      title: "9. Usages autorisés et interdits",
      body: [],
      list: ["Vous pouvez utiliser ce site uniquement pour une navigation et des achats licites et légitimes.", "Tout accès illicite, tentative d’interférence, abus automatisé ou comportement frauduleux est interdit.", "Nous pouvons bloquer l’accès et engager des démarches appropriées en cas d’abus constaté."],
    },
    {
      title: "10. Déclaration relative aux contributions caritatives",
      body: ["Lorsque des déclarations de contribution caritative figurent sur le site ou dans des communications produit, elles décrivent le modèle d’affectation sociale prévu et ne modifient pas le prix d’achat sauf indication expresse."],
    },
    {
      title: "11. Avertissements et limitation de responsabilité",
      body: ["Dans la mesure permise par le droit applicable, le site et les services sont fournis « en l’état » et « selon disponibilité », sans garantie de fonctionnement ininterrompu.", "Bint Saeed n’est pas responsable des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs découlant de l’usage du site, d’un retard de livraison, d’une interruption de service tiers ou d’événements hors contrôle raisonnable. Sauf lorsque la responsabilité ne peut être limitée par la loi, notre responsabilité est limitée au montant payé pour la commande concernée.", "Sauf lorsque la responsabilité ne peut être limitée par la loi, Bint Saeed n’est pas responsable des pertes ou dommages résultant d’une mauvaise utilisation des produits, du non-respect des conseils d’entretien, d’une altération non autorisée ou d’une manipulation incorrecte."],
    },
    {
      title: "12. Indemnisation",
      body: ["Vous acceptez d’indemniser et de dégager Bint Saeed de toute réclamation, responsabilité, perte ou coût découlant de votre manquement à ces Conditions, d’un usage abusif du site ou d’une violation du droit applicable."],
    },
    {
      title: "13. Droit applicable et juridiction",
      body: ["Ces Conditions sont régies par le droit des Émirats arabes unis. Sous réserve des droits impératifs des consommateurs, les litiges relèvent des tribunaux compétents des EAU.", "Ce site est exploité par une société enregistrée à Abou Dhabi, Émirats arabes unis, sous le numéro de licence commerciale CN-6384424 délivré par l’Abu Dhabi Registration Authority (ADRA)."],
    },
    {
      title: "14. Langue et traductions",
      body: [LANGUAGE_CLAUSE_SHORT_FR],
    },
    {
      title: "15. Modifications, divisibilité et contact",
      body: ["Nous pouvons réviser ces Conditions. Les versions mises à jour prennent effet dès leur publication sur cette page. Si une disposition est jugée inapplicable, les autres demeurent en vigueur.", "Bint Saeed\nDemandes juridiques : legal@bintsaeed.com\nDemandes générales : hello@bintsaeed.com"],
    }
]

const TERMS_DE_META: Omit<PolicyContent, 'sections'> = {
  pageTitle: "Allgemeine Geschäftsbedingungen",
  breadcrumb: "Allgemeine Geschäftsbedingungen",
  homeBreadcrumb: "Startseite",
  heroLabel: "Rechtliches",
  lastUpdated: "Zuletzt aktualisiert: Juli 2026",
  intro: "Diese Bedingungen regeln den Zugang zu und die Nutzung der Website, Produkte und verbundenen Dienste von Bint Saeed nach dem anwendbaren Recht der Vereinigten Arabischen Emirate.",
  summaryTitle: "Kurzhinweis",
  summaryBody: ["Mit der Nutzung dieser Website oder einer Bestellung akzeptieren Sie diese Bedingungen. Wenn Sie nicht einverstanden sind, nutzen Sie die Website bitte nicht. Die Originalsprache der Website und dieser Bedingungen ist Englisch. Der englische Text ist maßgeblich. Übersetzungen dienen nur der Erleichterung und begründen keine eigenen Rechte."],
  sectionList: ["1. Geltungsbereich und Annahme", "2. Geschäftsfähigkeit und Kontenverantwortung", "3. Produkte, Verfügbarkeit und Preise", "4. Bestellungen, Zahlung und Prüfung", "5. Versand, Lieferung und Gefahrübergang", "6. Rückgaben, Reparaturen und Endgültigkeit von Bestellungen", "7. Personalisierung und Maßanfertigungen", "8. Geistiges Eigentum", "9. Zulässige und unzulässige Nutzung", "10. Erklärung zu gemeinnützigen Beiträgen", "11. Haftungsausschlüsse und Haftungsbeschränkung", "12. Freistellung", "13. Anwendbares Recht und Gerichtsstand", "14. Sprache und Übersetzungen", "15. Änderungen, Teilunwirksamkeit und Kontakt"],
}

const TERMS_DE_SECTIONS: PolicySection[] = [
    {
      title: "1. Geltungsbereich und Annahme",
      body: ["Diese Allgemeinen Geschäftsbedingungen gelten für alle Besucher, Nutzer und Kunden, die die Website, Inhalte, Produkte und verbundenen Dienste von Bint Saeed nutzen. Mit dem Zugriff, der Kontoerstellung oder einer Bestellung bestätigen Sie, diese Bedingungen gelesen, verstanden und akzeptiert zu haben."],
    },
    {
      title: "2. Geschäftsfähigkeit und Kontenverantwortung",
      body: ["Sie müssen nach anwendbarem Recht geschäftsfähig sein. Bei Kontoerstellung sind Sie für die Vertraulichkeit Ihrer Zugangsdaten und alle Aktivitäten unter Ihrem Konto verantwortlich."],
      list: ["Sie verpflichten sich, für Bestellungen und Kommunikation genaue, vollständige und aktuelle Angaben zu machen.", "Sie sind dafür verantwortlich, Liefer-, Rechnungs- und Kontaktdaten aktuell zu halten.", "Wir können den Zugang sperren oder einschränken, wenn Missbrauch, Betrug oder ein Sicherheitsrisiko hinreichend vermutet wird."],
    },
    {
      title: "3. Produkte, Verfügbarkeit und Preise",
      body: ["Wir bemühen uns um korrekte Produktdetails, Verfügbarkeit und Preise. Gelegentliche Fehler können vorkommen. Produktbilder sind illustrativ und können aufgrund von Licht, Bildschirm und handwerklicher Fertigung leicht abweichen."],
      list: ["Preise werden in der auf der Website gewählten Währung angezeigt. Festbeträge gelten je Währung und sind keine Live-Devisenkurse. AED ist die Standardpräsentationswährung für die Nutzung aus den VAE, sofern keine andere unterstützte Währung gewählt wird.", "Anfallende Mehrwertsteuer wird nach den Steueranforderungen der VAE behandelt.", "Sortiment und Preise können vor Auftragsbestätigung jederzeit aktualisiert werden.", "Maß- und personalisierte Stücke unterliegen besonderen Lieferzeiten und Endverkaufsbedingungen."],
    },
    {
      title: "4. Bestellungen, Zahlung und Prüfung",
      body: ["Die Übermittlung einer Bestellanfrage gilt nicht als endgültige Annahme durch Bint Saeed. Eine Bestellung gilt als angenommen, wenn wir eine Bestätigung erteilen und die Zahlungsautorisierung erfolgreich abgeschlossen ist."],
      list: ["Zahlungen werden über sichere Anbieter abgewickelt, einschließlich Stripe (Embedded Checkout), PayPal und Mollie, soweit für Ihr Ziel angeboten. Vollständige Kartendaten werden von diesen Anbietern verarbeitet und nicht vollständig bei Bint Saeed gespeichert.", "Wir können Bestellungen aus rechtmäßigen Gründen ablehnen, stornieren oder begrenzen.", "Betrugsprävention, Identitäts- und Zahlungsprüfungen können erforderlich sein.", "Bei Zahlungs- oder Preisfehlern können wir die betroffene Bestellung stornieren und erstatten."],
    },
    {
      title: "5. Versand, Lieferung und Gefahrübergang",
      body: ["Lieferzeiten sind Schätzungen und nicht garantiert. Verzögerungen können durch Logistik, Zoll, Feiertage, Wetter oder Ereignisse außerhalb unserer zumutbaren Kontrolle entstehen."],
      list: ["Kostenloser Versand innerhalb der VAE gilt ab einem Warenuntertotal von 1.000 AED.", "Kostenloser weltweiter Versand gilt ab einem Warenuntertotal von 500 EUR (oder dem angezeigten Äquivalent in der gewählten Währung).", "Unterhalb dieser Schwellen gelten Pauschalen: 35 AED in den VAE und 30 EUR (oder Äquivalent) international, bestätigt bei Zahlung.", "Internationale Sendungen erfolgen über DHL Express; in den VAE über Jeebly.", "Zölle, Einfuhrsteuern und Abfertigungsgebühren trägt der Empfänger.", "Kunden müssen vollständige und korrekte Lieferadresse, Telefonnummer und E-Mail angeben. Bint Saeed haftet nicht für Nichtzustellung aufgrund falscher Kundendaten.", "Bedingungen, Kosten und geschätzte Fristen werden beim Checkout oder in den Richtlinien angezeigt.", "Die Gefahr geht mit der Zustellung an die Lieferadresse oder den angenommenen Empfänger über."],
    },
    {
      title: "6. Rückgaben, Reparaturen und Endgültigkeit von Bestellungen",
      body: ["Rückgaben und Reparaturen richten sich nach unserer Versand- und Rückgaberichtlinie. Bitte prüfen Sie diese vor der Bestellung."],
      list: ["Viele Stücke werden auf Bestellung gefertigt; Stornierungen und Rückgaben sind nach Produktionsbeginn eingeschränkt. Sofort lieferbare Ready-to-Wear- und Accessoire-Artikel folgen der Versand- und Rückgaberichtlinie, einschließlich Endverkaufsregeln für Ohrringe und andere auf der Produktseite so gekennzeichnete Artikel.", "Mängel- oder Materialabweichungsansprüche sind innerhalb der genannten Frist mit Nachweisen einzureichen.", "Umtausch setzt unversehrte Originaletiketten, Siegel und Sicherheitskennzeichen voraus; Entfernung oder Versuch der Entfernung macht das Ersuchen unzulässig.", "Abhilfen können zuerst Reparatur oder Ersatz und, soweit gesetzlich erforderlich, Erstattung umfassen."],
    },
    {
      title: "7. Personalisierung und Maßanfertigungen",
      body: [
        "Mit Übermittlung eines Personalisierungstextes bestätigen Sie die Nutzungsrechte und dass der Inhalt keine Rechte Dritter oder geltendes Recht verletzt. Wir können unzulässige, beleidigende oder richtlinienwidrige Personalisierungen ablehnen.",
        "Bitte prüfen Sie Schreibweise und Wortlaut vor dem Absenden. Für kundenseitige Eingabefehler übernehmen wir keine Verantwortung.",
        "Jeder Artikel mit personalisiertem Innenetikett (einschließlich eines kostenlosen House-Etiketts) ist endgültig verkauft und kann nicht wegen Meinungsänderung, Größenpräferenz oder ähnlicher Gründe umgetauscht oder zurückgegeben werden, außer bei nachgewiesenem Herstellungsfehler oder wesentlicher Abweichung oder soweit zwingendes Recht etwas anderes verlangt.",
        "Ein kostenloses personalisiertes Innenetikett schließt eine berechtigte Bestellung nicht von HOUSE15 oder dem House Privilege aus — vorbehaltlich der Community-Bedingungen unten —, die Personalisierung macht den Artikel jedoch für Umtauschzwecke zum Endverkauf.",
      ],
    },
    {
      title: "8. Geistiges Eigentum",
      body: ["Alle Website-Inhalte, kreativen Assets, Designs, Fotografien, Marken, Texte und technischen Materialien gehören Bint Saeed oder sind lizenziert und durch das anwendbare Immaterialgüterrecht geschützt."],
      list: ["Kein Kopieren, Reproduzieren, Scraping, erneutes Veröffentlichen oder kommerzielle Weiterverwendung ohne schriftliche Zustimmung.", "Keine Nutzung von Markenelementen, Produktbildern oder proprietärem Material in abgeleiteten Werken ohne Freigabe.", "Genehmigungsanfragen an legal@bintsaeed.com."],
    },
    {
      title: "9. Zulässige und unzulässige Nutzung",
      body: [],
      list: ["Die Website darf nur für rechtmäßige, persönliche und legitime Browse-/Kaufzwecke genutzt werden.", "Unrechtmäßiger Zugriff, Störversuche, Bot-Missbrauch oder betrügerisches Verhalten sind untersagt.", "Bei festgestelltem Missbrauch können wir den Zugang sperren und geeignete Schritte einleiten."],
    },
    {
      title: "10. Erklärung zu gemeinnützigen Beiträgen",
      body: ["Soweit gemeinnützige Beitragsangaben auf der Website oder in Produktkommunikation erscheinen, beschreiben sie unser vorgesehenes soziales Zuweisungsmodell und ändern den Kaufpreis nicht, sofern nicht ausdrücklich anders angegeben."],
    },
    {
      title: "11. Haftungsausschlüsse und Haftungsbeschränkung",
      body: ["Soweit gesetzlich zulässig, werden Website und Dienste „wie besehen“ und „wie verfügbar“ ohne Gewähr ununterbrochenen Betriebs bereitgestellt.", "Bint Saeed haftet nicht für indirekte, zufällige, besondere, Folgeschäden oder Strafschadensersatz aus Nutzung der Website, Lieferverzögerung, Unterbrechung von Drittdiensten oder Ereignissen außerhalb zumutbarer Kontrolle. Soweit die Haftung gesetzlich nicht beschränkt werden kann, bleibt sie unberührt; im Übrigen ist sie auf den für die betreffende Bestellung gezahlten Betrag begrenzt.", "Soweit die Haftung gesetzlich nicht beschränkt werden kann, bleibt sie unberührt; im Übrigen ist Bint Saeed nicht verantwortlich für Verlust oder Schaden aus Fehlgebrauch von Produkten, Nichtbefolgung von Pflegehinweisen, unbefugter Veränderung oder unsachgemäßer Handhabung."],
    },
    {
      title: "12. Freistellung",
      body: ["Sie stellen Bint Saeed von Ansprüchen, Verbindlichkeiten, Verlusten und Kosten frei, die aus Ihrer Verletzung dieser Bedingungen, Missbrauch der Website oder Verletzung anwendbaren Rechts entstehen."],
    },
    {
      title: "13. Anwendbares Recht und Gerichtsstand",
      body: ["Diese Bedingungen unterliegen dem Recht der Vereinigten Arabischen Emirate. Vorbehaltlich zwingender Verbraucherschutzrechte entscheiden die zuständigen Gerichte der VAE.", "Diese Website wird von einem in Abu Dhabi, VAE, registrierten Unternehmen betrieben, Handelslizenz Nr. CN-6384424 der Abu Dhabi Registration Authority (ADRA)."],
    },
    {
      title: "14. Sprache und Übersetzungen",
      body: [LANGUAGE_CLAUSE_SHORT_DE],
    },
    {
      title: "15. Änderungen, Teilunwirksamkeit und Kontakt",
      body: ["Wir können diese Bedingungen ändern. Aktualisierte Fassungen gelten ab Veröffentlichung auf dieser Seite. Ist eine Bestimmung unwirksam, bleiben die übrigen wirksam.", "Bint Saeed\nRechtliche Anfragen: legal@bintsaeed.com\nAllgemeine Anfragen: hello@bintsaeed.com"],
    }
]

const TERMS_IT_META: Omit<PolicyContent, 'sections'> = {
  pageTitle: "Termini e condizioni",
  breadcrumb: "Termini e condizioni",
  homeBreadcrumb: "Home",
  heroLabel: "Legale",
  lastUpdated: "Ultimo aggiornamento: luglio 2026",
  intro: "I presenti Termini regolano l’accesso e l’uso del sito, dei prodotti e dei servizi correlati di Bint Saeed secondo il diritto applicabile degli Emirati Arabi Uniti.",
  summaryTitle: "Avviso di sintesi",
  summaryBody: ["Usando questo sito o effettuando un ordine, accetti i presenti Termini. Se non sei d’accordo, non utilizzare il sito. La lingua originale del sito e di questi Termini è l’inglese. Il testo inglese è vincolante. Le traduzioni sono solo per comodità e non creano diritti distinti."],
  sectionList: ["1. Ambito e accettazione", "2. Capacità e responsabilità dell’account", "3. Prodotti, disponibilità e prezzi", "4. Ordini, pagamento e verifica", "5. Spedizione, consegna e trasferimento del rischio", "6. Resi, riparazioni e definitività dell’ordine", "7. Personalizzazione e lavori su misura", "8. Proprietà intellettuale", "9. Uso consentito e vietato", "10. Dichiarazione sui contributi benefici", "11. Esclusioni e limitazione di responsabilità", "12. Manleva", "13. Legge applicabile e foro competente", "14. Lingua e traduzioni", "15. Modifiche, severabilità e contatti"],
}

const TERMS_IT_SECTIONS: PolicySection[] = [
    {
      title: "1. Ambito e accettazione",
      body: ["I presenti Termini e condizioni si applicano a visitatori, utenti e clienti che accedono al sito Bint Saeed, ai contenuti, prodotti e servizi correlati. Accedendo al sito, creando un account o ordinando, confermi di aver letto, compreso e accettato i Termini."],
    },
    {
      title: "2. Capacità e responsabilità dell’account",
      body: ["Devi avere capacità giuridica di stipulare contratti secondo la legge applicabile. Se crei un account, sei responsabile della riservatezza delle credenziali e di ogni attività svolta con l’account."],
      list: ["Accetti di fornire informazioni accurate, complete e aggiornate per ordini e comunicazioni.", "Sei responsabile di mantenere aggiornati i dati di spedizione, fatturazione e contatto.", "Possiamo sospendere o limitare l’accesso in caso di ragionevole sospetto di abuso, frode o rischio di sicurezza."],
    },
    {
      title: "3. Prodotti, disponibilità e prezzi",
      body: ["Ci impegniamo a presentare con accuratezza dettagli, disponibilità e prezzi. Possono verificarsi errori occasionali. Le immagini sono illustrative e possono variare leggermente per luce, schermo e lavorazione artigianale."],
      list: ["I prezzi sono mostrati nella valuta selezionata sul sito. Gli importi al dettaglio sono fissi per valuta e non sono conversioni forex in tempo reale. L’AED è la valuta di presentazione predefinita per la navigazione dagli EAU, salvo altra valuta supportata.", "L’IVA applicabile è gestita secondo i requisiti fiscali degli EAU.", "Possiamo aggiornare assortimento e prezzi in qualsiasi momento prima della conferma dell’ordine.", "I pezzi personalizzati sono soggetti a tempi specifici e condizioni di vendita definitiva."],
    },
    {
      title: "4. Ordini, pagamento e verifica",
      body: ["L’invio di una richiesta d’ordine non costituisce accettazione definitiva da parte di Bint Saeed. L’ordine è accettato quando emettiamo conferma e l’autorizzazione al pagamento è completata con successo."],
      list: ["I pagamenti sono elaborati da fornitori sicuri, tra cui Stripe (Embedded Checkout), PayPal e Mollie ove offerti per la destinazione. I dati completi della carta sono gestiti da tali processori e non sono memorizzati integralmente da Bint Saeed.", "Possiamo rifiutare, annullare o limitare ordini per motivi legittimi.", "Possono essere richiesti controlli antifrode, di identità e di pagamento.", "In caso di errore di pagamento o di prezzo possiamo annullare e rimborsare l’ordine interessato."],
    },
    {
      title: "5. Spedizione, consegna e trasferimento del rischio",
      body: ["I tempi di consegna sono stime e non sono garantiti. Ritardi possono derivare da logistica, dogana, festività, meteo o eventi fuori dal nostro ragionevole controllo."],
      list: ["La spedizione gratuita negli Emirati Arabi Uniti si applica ad ordini con subtotale merce di almeno 1.000 AED.", "La spedizione mondiale gratuita si applica ad ordini con subtotale merce di almeno 500 EUR (o l’equivalente indicato nella valuta selezionata).", "Sotto tali soglie si applicano tariffe fisse: 35 AED negli EAU e 30 EUR (o equivalente) a livello internazionale, confermate al pagamento.", "Gli ordini internazionali sono evasi con DHL Express; negli EAU con Jeebly.", "Dazi, imposte di importazione e costi di sdoganamento restano a carico del destinatario.", "Il cliente deve fornire indirizzo, telefono ed e-mail completi e corretti. Bint Saeed non è responsabile per mancata consegna dovuta a dati errati forniti dal cliente.", "Termini, costi e tempi stimati sono mostrati al checkout o nelle policy applicabili.", "Il rischio di perdita si trasferisce alla consegna all’indirizzo o al destinatario accettato."],
    },
    {
      title: "6. Resi, riparazioni e definitività dell’ordine",
      body: ["Resi e riparazioni sono regolati dalla nostra Politica di spedizione e resi. Si invita a leggerla prima di ordinare."],
      list: ["Molti pezzi sono realizzati su ordine; cancellazioni e resi sono limitati una volta avviata la produzione. Ready-to-wear pronti alla spedizione e accessori seguono la Politica di spedizione e resi, comprese le regole di vendita definitiva per orecchini e altri articoli così indicati nella pagina prodotto.", "Reclami per difetto o non conformità materiale vanno presentati con prove entro i termini indicati.", "I cambi richiedono etichette, sigilli e dispositivi di sicurezza originali intatti; rimozione o tentativo di rimozione rende la richiesta inammissibile.", "I rimedi possono includere prima riparazione o sostituzione e, ove richiesto dalla legge, rimborso."],
    },
    {
      title: "7. Personalizzazione e lavori su misura",
      body: [
        "Inviando un testo di personalizzazione, confermi di avere i diritti necessari e che il contenuto non viola diritti di terzi né la legge. Possiamo rifiutare personalizzazioni illecite, offensive o non conformi.",
        "Verifica attentamente ortografia e testo prima dell’invio. Non siamo responsabili di errori inseriti dal cliente.",
        "Ogni articolo prodotto con etichetta interna personalizzata (inclusa un’etichetta gratuita della Maison) è vendita definitiva e non può essere cambiato o reso per ripensamento, preferenza di taglia o motivi simili, salvo difetto di fabbricazione verificato o non conformità materiale, o ove la legge imperativa richieda altrimenti.",
        "Un’etichetta interna personalizzata gratuita non esclude un ordine idoneo da HOUSE15 o dal House Privilege, fatte salve le condizioni Community sotto — ma la personalizzazione resta vendita definitiva ai fini del cambio.",
      ],
    },
    {
      title: "8. Proprietà intellettuale",
      body: ["Tutti i contenuti del sito, asset creativi, design, fotografie, marchi, testi e materiali tecnici appartengono a Bint Saeed o sono concessi in licenza e sono protetti dalla legge sulla proprietà intellettuale applicabile."],
      list: ["Vietata copia, riproduzione, scraping, ripubblicazione o riuso commerciale senza consenso scritto.", "Vietato l’uso di elementi di brand, immagini prodotto o materiale proprietario in opere derivate senza approvazione.", "Richieste di autorizzazione a legal@bintsaeed.com."],
    },
    {
      title: "9. Uso consentito e vietato",
      body: [],
      list: ["Puoi usare il sito solo per navigazione e acquisti leciti e legittimi.", "Sono vietati accessi illeciti, interferenze, abuso da bot o condotta fraudolenta.", "Possiamo bloccare l’accesso e adottare misure appropriate in caso di abuso."],
    },
    {
      title: "10. Dichiarazione sui contributi benefici",
      body: ["Ove siano comunicate dichiarazioni di contributo benefico sul sito o nelle comunicazioni di prodotto, esse descrivono il modello di destinazione sociale previsto e non modificano il prezzo di acquisto salvo diversa indicazione espressa."],
    },
    {
      title: "11. Esclusioni e limitazione di responsabilità",
      body: ["Nella misura consentita dalla legge applicabile, il sito e i servizi sono forniti « così come sono » e « come disponibili », senza garanzia di funzionamento ininterrotto.", "Bint Saeed non è responsabile di danni indiretti, incidentali, speciali, consequenziali o punitivi derivanti dall’uso del sito, ritardi di consegna, interruzioni di servizi terzi o eventi fuori dal ragionevole controllo. Salvo ove la responsabilità non possa essere limitata per legge, la nostra responsabilità è limitata all’importo pagato per l’ordine interessato.", "Salvo ove la responsabilità non possa essere limitata per legge, Bint Saeed non è responsabile di perdite o danni derivanti da uso improprio dei prodotti, mancato rispetto delle indicazioni di cura, alterazione non autorizzata o maneggiamento scorretto."],
    },
    {
      title: "12. Manleva",
      body: ["Accetti di manlevare e tenere indenne Bint Saeed da reclami, responsabilità, perdite e costi derivanti dalla violazione di questi Termini, dall’uso improprio del sito o dalla violazione della legge applicabile."],
    },
    {
      title: "13. Legge applicabile e foro competente",
      body: ["I presenti Termini sono regolati dalla legge degli Emirati Arabi Uniti. Salvo diritti dei consumatori inderogabili, le controversie spettano ai tribunali competenti degli EAU.", "Questo sito è gestito da una società registrata ad Abu Dhabi, Emirati Arabi Uniti, con licenza commerciale CN-6384424 rilasciata dall’Abu Dhabi Registration Authority (ADRA)."],
    },
    {
      title: "14. Lingua e traduzioni",
      body: [LANGUAGE_CLAUSE_SHORT_IT],
    },
    {
      title: "15. Modifiche, severabilità e contatti",
      body: ["Possiamo rivedere i Termini. Le versioni aggiornate decorrono dalla pubblicazione su questa pagina. Se una clausola è inapplicabile, le altre restano valide.", "Bint Saeed\nRichieste legali: legal@bintsaeed.com\nRichieste generali: hello@bintsaeed.com"],
    }
]

const TERMS_ES_META: Omit<PolicyContent, 'sections'> = {
  pageTitle: "Términos y condiciones",
  breadcrumb: "Términos y condiciones",
  homeBreadcrumb: "Inicio",
  heroLabel: "Legal",
  lastUpdated: "Última actualización: julio de 2026",
  intro: "Estos Términos rigen el acceso y uso del sitio, productos y servicios relacionados de Bint Saeed conforme al derecho aplicable de los Emiratos Árabes Unidos.",
  summaryTitle: "Aviso resumido",
  summaryBody: ["Al usar este sitio o realizar un pedido, acepta estos Términos. Si no está de acuerdo, no utilice el sitio. El idioma original del sitio y de estos Términos es el inglés. El texto en inglés es vinculante. Las traducciones son solo por comodidad y no crean derechos distintos."],
  sectionList: ["1. Ámbito y aceptación", "2. Capacidad y responsabilidad de la cuenta", "3. Productos, disponibilidad y precios", "4. Pedidos, pago y verificación", "5. Envío, entrega y transferencia del riesgo", "6. Devoluciones, reparaciones y carácter definitivo del pedido", "7. Personalización y trabajos a medida", "8. Propiedad intelectual", "9. Uso permitido y prohibido", "10. Declaración sobre contribuciones benéficas", "11. Exenciones y limitación de responsabilidad", "12. Indemnización", "13. Ley aplicable y jurisdicción", "14. Idioma y traducciones", "15. Cambios, divisibilidad y contacto"],
}

const TERMS_ES_SECTIONS: PolicySection[] = [
    {
      title: "1. Ámbito y aceptación",
      body: ["Estos Términos y condiciones se aplican a visitantes, usuarios y clientes que accedan al sitio, contenidos, productos y servicios relacionados de Bint Saeed. Al acceder, crear una cuenta o pedir, confirma haber leído, comprendido y aceptado estos Términos."],
    },
    {
      title: "2. Capacidad y responsabilidad de la cuenta",
      body: ["Debe tener capacidad legal para celebrar contratos conforme a la ley aplicable. Si crea una cuenta, es responsable de la confidencialidad de sus credenciales y de toda actividad bajo su cuenta."],
      list: ["Acepta facilitar información exacta, completa y actualizada para pedidos y comunicaciones.", "Es responsable de mantener actualizados los datos de envío, facturación y contacto.", "Podemos suspender o restringir el acceso ante sospecha razonable de abuso, fraude o riesgo de seguridad."],
    },
    {
      title: "3. Productos, disponibilidad y precios",
      body: ["Procuramos presentar con exactitud los detalles, disponibilidad y precios. Pueden producirse errores ocasionales. Las imágenes son ilustrativas y pueden variar ligeramente por luz, pantalla y producción artesanal."],
      list: ["Los precios se muestran en la moneda que seleccione en el sitio. Los importes minoristas son fijos por moneda y no son conversiones forex en vivo. El AED es la moneda de presentación predeterminada para la navegación desde EAU, salvo otra moneda admitida.", "El IVA aplicable se gestiona según los requisitos fiscales de EAU.", "Podemos actualizar el surtido y los precios en cualquier momento antes de la confirmación del pedido.", "Las piezas personalizadas están sujetas a plazos específicos y condiciones de venta final."],
    },
    {
      title: "4. Pedidos, pago y verificación",
      body: ["El envío de una solicitud de pedido no constituye aceptación definitiva por Bint Saeed. Un pedido se acepta cuando emitimos confirmación y se completa con éxito la autorización de pago."],
      list: ["Los pagos se procesan mediante proveedores seguros, incluidos Stripe (Embedded Checkout), PayPal y Mollie cuando se ofrezcan para su destino. Los datos completos de tarjeta los tratan dichos procesadores y Bint Saeed no los almacena íntegramente.", "Podemos rechazar, cancelar o limitar pedidos por motivos legítimos.", "Pueden requerirse controles antifraude, de identidad y de pago.", "Si hay error de pago o de precio, podemos cancelar y reembolsar el pedido afectado."],
    },
    {
      title: "5. Envío, entrega y transferencia del riesgo",
      body: ["Los plazos de entrega son estimaciones y no están garantizados. Puede haber retrasos por logística, aduanas, festivos, clima o eventos fuera de nuestro control razonable."],
      list: ["El envío gratuito en Emiratos Árabes Unidos aplica a pedidos con subtotal de mercancía de al menos 1.000 AED.", "El envío mundial gratuito aplica a pedidos con subtotal de mercancía de al menos 500 EUR (o el equivalente mostrado en la moneda seleccionada).", "Por debajo de esos umbrales, se aplican tarifas fijas: 35 AED en EAU y 30 EUR (o equivalente) internacional, confirmadas al pagar.", "Los pedidos internacionales se gestionan con DHL Express; en EAU con Jeebly.", "Aranceles, impuestos de importación y gastos de despacho corren a cargo del destinatario.", "El cliente debe facilitar dirección, teléfono y correo completos y exactos. Bint Saeed no responde de no entregas por datos incorrectos facilitados por el cliente.", "Condiciones, costes y plazos estimados se muestran en el pago o en las políticas aplicables.", "El riesgo de pérdida se transfiere en la entrega a la dirección o al destinatario aceptado."],
    },
    {
      title: "6. Devoluciones, reparaciones y carácter definitivo del pedido",
      body: ["Las devoluciones y reparaciones se rigen por nuestra Política de envío y devoluciones. Revísela antes de pedir."],
      list: ["Muchas piezas se fabrican bajo pedido; las cancelaciones y devoluciones son limitadas una vez iniciada la producción. El ready-to-wear listo para envío y los accesorios siguen la Política de envío y devoluciones, incluidas las reglas de venta final para pendientes y otros artículos así marcados en la página del producto.", "Las reclamaciones por defecto o no conformidad material deben presentarse con pruebas en el plazo indicado.", "Los cambios exigen etiquetas, precintos y dispositivos de seguridad originales intactos; su retirada o intento de retirada hace inadmisible la solicitud.", "Las medidas pueden incluir primero reparación o sustitución y, cuando la ley lo exija, reembolso."],
    },
    {
      title: "7. Personalización y trabajos a medida",
      body: [
        "Al enviar un texto de personalización, confirma que tiene derecho a usarlo y que no infringe derechos de terceros ni la ley. Podemos rechazar personalizaciones ilícitas, ofensivas o no conformes.",
        "Revise con cuidado la ortografía antes de enviar. No somos responsables de errores introducidos por la clienta.",
        "Cualquier artículo producido con etiqueta interior personalizada (incluida una etiqueta gratuita de la Maison) es venta definitiva y no puede canjearse ni devolverse por cambio de opinión, preferencia de talla o motivos similares, salvo defecto de fabricación verificado o no conformidad material, o cuando la ley imperativa exija otra cosa.",
        "Una etiqueta interior personalizada gratuita no excluye un pedido elegible de HOUSE15 o del House Privilege, con sujeción a los términos de Comunidad más abajo — pero la personalización sigue siendo venta definitiva a efectos de cambio.",
      ],
    },
    {
      title: "8. Propiedad intelectual",
      body: ["Todo el contenido del sitio, activos creativos, diseños, fotografía, marcas, textos y materiales técnicos pertenecen a Bint Saeed o están licenciados y protegidos por la legislación de propiedad intelectual aplicable."],
      list: ["Prohibida la copia, reproducción, scraping, republicación o reutilización comercial sin consentimiento escrito.", "Prohibido el uso de elementos de marca, imágenes de producto o material propio en obras derivadas sin aprobación.", "Solicitudes de permiso a legal@bintsaeed.com."],
    },
    {
      title: "9. Uso permitido y prohibido",
      body: [],
      list: ["Puede usar este sitio solo para navegación y compras lícitas y legítimas.", "Están prohibidos el acceso ilícito, interferencias, abuso de bots o conducta fraudulenta.", "Podemos bloquear el acceso y adoptar medidas adecuadas ante abusos."],
    },
    {
      title: "10. Declaración sobre contribuciones benéficas",
      body: ["Cuando se comuniquen declaraciones de contribución benéfica en el sitio o en comunicaciones de producto, describen el modelo de asignación social previsto y no alteran el precio de compra salvo indicación expresa."],
    },
    {
      title: "11. Exenciones y limitación de responsabilidad",
      body: ["En la medida permitida por la ley aplicable, el sitio y los servicios se ofrecen « tal cual » y « según disponibilidad », sin garantía de funcionamiento ininterrumpido.", "Bint Saeed no responde de daños indirectos, incidentales, especiales, consecuenciales o punitivos derivados del uso del sitio, retraso en la entrega, interrupción de servicios de terceros o eventos fuera del control razonable. Salvo cuando la responsabilidad no pueda limitarse por ley, nuestra responsabilidad se limita al importe pagado por el pedido correspondiente.", "Salvo cuando la responsabilidad no pueda limitarse por ley, Bint Saeed no responde de pérdidas o daños derivados del mal uso de productos, incumplimiento de las indicaciones de cuidado, alteración no autorizada o manipulación incorrecta."],
    },
    {
      title: "12. Indemnización",
      body: ["Acepta indemnizar y eximir a Bint Saeed de reclamaciones, responsabilidades, pérdidas y costes derivados de su incumplimiento de estos Términos, del uso indebido del sitio o de la vulneración de la ley aplicable."],
    },
    {
      title: "13. Ley aplicable y jurisdicción",
      body: ["Estos Términos se rigen por las leyes de los Emiratos Árabes Unidos. Sin perjuicio de derechos imperativos de consumidores, los litigios corresponden a los tribunales competentes de EAU.", "Este sitio lo opera una sociedad registrada en Abu Dabi, Emiratos Árabes Unidos, con licencia comercial CN-6384424 emitida por la Abu Dhabi Registration Authority (ADRA)."],
    },
    {
      title: "14. Idioma y traducciones",
      body: [LANGUAGE_CLAUSE_SHORT_ES],
    },
    {
      title: "15. Cambios, divisibilidad y contacto",
      body: ["Podemos revisar estos Términos. Las versiones actualizadas surten efecto desde su publicación en esta página. Si alguna disposición es inaplicable, el resto permanece vigente.", "Bint Saeed\nConsultas legales: legal@bintsaeed.com\nConsultas generales: hello@bintsaeed.com"],
    }
]

const TERMS_NL_META: Omit<PolicyContent, 'sections'> = {
  pageTitle: "Algemene voorwaarden",
  breadcrumb: "Algemene voorwaarden",
  homeBreadcrumb: "Home",
  heroLabel: "Juridisch",
  lastUpdated: "Laatst bijgewerkt: juli 2026",
  intro: "Deze Voorwaarden regelen de toegang tot en het gebruik van de website, producten en gerelateerde diensten van Bint Saeed volgens het toepasselijke recht van de Verenigde Arabische Emiraten.",
  summaryTitle: "Samenvatting",
  summaryBody: ["Door deze website te gebruiken of een bestelling te plaatsen, gaat u akkoord met deze Voorwaarden. Bent u het niet eens, gebruik de site dan niet. De oorspronkelijke taal van de website en deze Voorwaarden is Engels. De Engelse tekst is leidend. Vertalingen zijn alleen ter gemak en scheppen geen aparte rechten."],
  sectionList: ["1. Reikwijdte en aanvaarding", "2. Bekwaamheid en accountverantwoordelijkheid", "3. Producten, beschikbaarheid en prijzen", "4. Bestellingen, betaling en verificatie", "5. Verzending, levering en risico-overgang", "6. Retouren, reparaties en definitiviteit van bestellingen", "7. Personalisatie en maatwerk", "8. Intellectuele eigendom", "9. Toegestaan en verboden gebruik", "10. Verklaring over charitatieve bijdragen", "11. Disclaimers en aansprakelijkheidsbeperking", "12. Vrijwaring", "13. Toepasselijk recht en bevoegdheid", "14. Taal en vertalingen", "15. Wijzigingen, deelbaarheid en contact"],
}

const TERMS_NL_SECTIONS: PolicySection[] = [
    {
      title: "1. Reikwijdte en aanvaarding",
      body: ["Deze Algemene voorwaarden gelden voor bezoekers, gebruikers en klanten die de website, content, producten en gerelateerde diensten van Bint Saeed gebruiken. Door toegang, accountaanmaak of bestelling bevestigt u deze Voorwaarden te hebben gelezen, begrepen en aanvaard."],
    },
    {
      title: "2. Bekwaamheid en accountverantwoordelijkheid",
      body: ["U moet rechtsbekwaam zijn om overeenkomsten te sluiten naar toepasselijk recht. Bij een account bent u verantwoordelijk voor de vertrouwelijkheid van inloggegevens en alle activiteit onder uw account."],
      list: ["U stemt in met accurate, volledige en actuele gegevens voor bestellingen en communicatie.", "U bent verantwoordelijk voor actuele verzend-, factuur- en contactgegevens.", "Wij kunnen toegang opschorten of beperken bij redelijk vermoeden van misbruik, fraude of veiligheidsrisico."],
    },
    {
      title: "3. Producten, beschikbaarheid en prijzen",
      body: ["Wij streven naar accurate productdetails, beschikbaarheid en prijzen. Incidentele fouten kunnen voorkomen. Afbeeldingen zijn illustratief en kunnen licht afwijken door licht, scherm en handwerk."],
      list: ["Prijzen worden getoond in de op de site gekozen valuta. Vaste retailbedragen gelden per valuta en zijn geen live forex-conversies. AED is de standaard presentatievaluta voor browsen vanuit de VAE, tenzij een andere ondersteunde valuta wordt gekozen.", "Toepasselijke btw wordt behandeld volgens fiscale eisen van de VAE.", "Assortiment en prijzen kunnen vóór orderbevestiging worden bijgewerkt.", "Gepersonaliseerde stukken kennen specifieke levertijden en definitieve-verkoopvoorwaarden."],
    },
    {
      title: "4. Bestellingen, betaling en verificatie",
      body: ["Het indienen van een bestelaanvraag is geen definitieve aanvaarding door Bint Saeed. Een bestelling is aanvaard wanneer wij een bevestiging afgeven en de betalingsautorisatie succesvol is afgerond."],
      list: ["Betalingen lopen via beveiligde providers, waaronder Stripe (Embedded Checkout), PayPal en Mollie waar aangeboden voor uw bestemming. Volledige kaartgegevens worden door die processors verwerkt en niet volledig door Bint Saeed bewaard.", "Wij kunnen bestellingen om rechtmatige redenen weigeren, annuleren of beperken.", "Fraudepreventie, identiteits- en betalingscontroles kunnen vereist zijn.", "Bij betalings- of prijsfouten kunnen wij de betreffende bestelling annuleren en terugbetalen."],
    },
    {
      title: "5. Verzending, levering en risico-overgang",
      body: ["Levertijden zijn schattingen en niet gegarandeerd. Vertraging kan ontstaan door logistiek, douane, feestdagen, weer of gebeurtenissen buiten onze redelijke controle."],
      list: ["Gratis verzending binnen de VAE geldt vanaf een merchandisesubtotaal van 1.000 AED.", "Gratis wereldwijde verzending geldt vanaf een merchandisesubtotaal van 500 EUR (of het getoonde equivalent in de gekozen valuta).", "Onder die drempels gelden forfaitaire kosten: 35 AED in de VAE en 30 EUR (of equivalent) internationaal, bevestigd bij betaling.", "Internationale zendingen via DHL Express; in de VAE via Jeebly.", "Douanerechten, invoerbelastingen en inklaringskosten blijven voor rekening van de ontvanger.", "Klanten moeten een volledig en juist afleveradres, telefoonnummer en e-mail opgeven. Bint Saeed is niet verantwoordelijk voor niet-levering door onjuiste klantgegevens.", "Voorwaarden, kosten en geschatte termijnen staan bij checkout of in de toepasselijke beleidsdocumenten.", "Het risico van verlies gaat over bij levering op het afleveradres of aan de aanvaarde ontvanger."],
    },
    {
      title: "6. Retouren, reparaties en definitiviteit van bestellingen",
      body: ["Retouren en reparaties vallen onder ons Verzend- en retourbeleid. Lees dit vóór bestelling."],
      list: ["Veel stukken worden op bestelling gemaakt; annuleringen en retouren zijn beperkt na start van productie. Ready-to-wear op voorraad en accessoires volgen het Verzend- en retourbeleid, inclusief definitieve-verkoopregels voor oorbellen en andere artikelen die zo op de productpagina staan.", "Klachten over defect of materiële non-conformiteit moeten met bewijs binnen de gestelde termijn worden ingediend.", "Ruilen vereist intacte originele labels, zegels en veiligheidsmerken; verwijdering of poging daartoe maakt het verzoek onontvankelijk.", "Remedies kunnen eerst reparatie of vervanging omvatten, en restitutie waar de wet dat vereist."],
    },
    {
      title: "7. Personalisatie en maatwerk",
      body: [
        "Door personalisatietekst in te dienen bevestigt u de rechten daarop en dat de inhoud geen rechten van derden of de wet schendt. Wij kunnen onrechtmatige, beledigende of niet-conforme personalisatie weigeren.",
        "Controleer spelling en tekst zorgvuldig vóór verzending. Wij zijn niet verantwoordelijk voor door de klant ingevoerde fouten.",
        "Elk artikel met een gepersonaliseerd binnenlabel (inclusief een gratis House-label) is definitieve verkoop en kan niet worden geruild of geretourneerd wegens bedenktijd, maalvoorkeur of vergelijkbare redenen, behalve bij een geverifieerd fabricagefout of materiële non-conformiteit, of waar dwingend recht anders vereist.",
        "Een gratis gepersonaliseerd binnenlabel sluit een in aanmerking komende bestelling niet uit van HOUSE15 of House Privilege, onder voorbehoud van de Community-voorwaarden hieronder — personalisatie blijft echter definitieve verkoop voor ruil.",
      ],
    },
    {
      title: "8. Intellectuele eigendom",
      body: ["Alle website-inhoud, creatieve assets, designs, fotografie, merken, teksten en technische materialen zijn eigendom van of gelicentieerd aan Bint Saeed en beschermd door toepasselijk IE-recht."],
      list: ["Geen kopiëren, reproduceren, scrapen, herpubliceren of commercieel hergebruik zonder schriftelijke toestemming.", "Geen gebruik van merkelementen, productbeelden of proprietair materiaal in afgeleide werken zonder goedkeuring.", "Toestemmingsverzoeken naar legal@bintsaeed.com."],
    },
    {
      title: "9. Toegestaan en verboden gebruik",
      body: [],
      list: ["U mag deze site alleen gebruiken voor rechtmatig browsen/kopen.", "Onrechtmatige toegang, storing, botmisbruik of frauduleus gedrag is verboden.", "Wij kunnen toegang blokkeren en passende stappen nemen bij misbruik."],
    },
    {
      title: "10. Verklaring over charitatieve bijdragen",
      body: ["Waar charitatieve bijdrageverklaringen op de site of in productcommunicatie staan, beschrijven zij ons beoogde sociale toewijzingsmodel en wijzigen zij de aankoopprijs niet tenzij uitdrukkelijk anders vermeld."],
    },
    {
      title: "11. Disclaimers en aansprakelijkheidsbeperking",
      body: ["Voor zover toegestaan door toepasselijk recht worden website en diensten “as is” en “as available” aangeboden, zonder garantie van ononderbroken werking.", "Bint Saeed is niet aansprakelijk voor indirecte, incidentele, bijzondere, gevolg- of punitieve schade door gebruik van de site, leveringsvertraging, onderbreking van derdendiensten of gebeurtenissen buiten redelijke controle. Behalve waar aansprakelijkheid wettelijk niet mag worden beperkt, is onze aansprakelijkheid beperkt tot het voor de betreffende bestelling betaalde bedrag.", "Behalve waar aansprakelijkheid wettelijk niet mag worden beperkt, is Bint Saeed niet verantwoordelijk voor verlies of schade door misbruik van producten, niet-naleving van verzorgingsadvies, ongeautoriseerde wijziging of onjuiste handling."],
    },
    {
      title: "12. Vrijwaring",
      body: ["U vrijwaart Bint Saeed voor claims, aansprakelijkheden, verliezen en kosten die voortvloeien uit schending van deze Voorwaarden, misbruik van de site of schending van toepasselijk recht."],
    },
    {
      title: "13. Toepasselijk recht en bevoegdheid",
      body: ["Deze Voorwaarden worden beheerst door het recht van de Verenigde Arabische Emiraten. Behoudens dwingende consumentenrechten vallen geschillen onder de bevoegde rechterlijke instanties van de VAE.", "Deze website wordt geëxploiteerd door een in Abu Dhabi, VAE, geregistreerde vennootschap met handelslicentie CN-6384424 van de Abu Dhabi Registration Authority (ADRA)."],
    },
    {
      title: "14. Taal en vertalingen",
      body: [LANGUAGE_CLAUSE_SHORT_NL],
    },
    {
      title: "15. Wijzigingen, deelbaarheid en contact",
      body: ["Wij kunnen deze Voorwaarden herzien. Bijgewerkte versies gelden vanaf publicatie op deze pagina. Als een bepaling niet-afdwingbaar is, blijven de overige van kracht.", "Bint Saeed\nJuridische vragen: legal@bintsaeed.com\nAlgemene vragen: hello@bintsaeed.com"],
    }
]

const TERMS_PT_META: Omit<PolicyContent, 'sections'> = {
  pageTitle: "Termos e condições",
  breadcrumb: "Termos e condições",
  homeBreadcrumb: "Início",
  heroLabel: "Legal",
  lastUpdated: "Última atualização: julho de 2026",
  intro: "Estes Termos regem o acesso e a utilização do site, produtos e serviços relacionados da Bint Saeed ao abrigo do direito aplicável dos Emirados Árabes Unidos.",
  summaryTitle: "Aviso resumido",
  summaryBody: ["Ao utilizar este site ou fazer um pedido, aceita estes Termos. Se não concordar, não utilize o site. O idioma original do site e destes Termos é o inglês. O texto em inglês prevalece. As traduções são apenas para comodidade e não criam direitos distintos."],
  sectionList: ["1. Âmbito e aceitação", "2. Capacidade e responsabilidade da conta", "3. Produtos, disponibilidade e preços", "4. Encomendas, pagamento e verificação", "5. Envio, entrega e transferência do risco", "6. Devoluções, reparações e definitividade da encomenda", "7. Personalização e trabalhos sob medida", "8. Propriedade intelectual", "9. Utilização permitida e proibida", "10. Declaração sobre contribuições solidárias", "11. Exclusões e limitação de responsabilidade", "12. Indemnização", "13. Lei aplicável e jurisdição", "14. Idioma e traduções", "15. Alterações, divisibilidade e contacto"],
}

const TERMS_PT_SECTIONS: PolicySection[] = [
    {
      title: "1. Âmbito e aceitação",
      body: ["Estes Termos e condições aplicam-se a visitantes, utilizadores e clientes que acedam ao site, conteúdos, produtos e serviços relacionados da Bint Saeed. Ao aceder, criar conta ou encomendar, confirma ter lido, compreendido e aceite estes Termos."],
    },
    {
      title: "2. Capacidade e responsabilidade da conta",
      body: ["Deve ter capacidade jurídica para celebrar contratos segundo a lei aplicável. Se criar uma conta, é responsável pela confidencialidade das credenciais e por toda a atividade sob a sua conta."],
      list: ["Aceita fornecer informação exata, completa e atualizada para encomendas e comunicações.", "É responsável por manter atualizados os dados de envio, faturação e contacto.", "Podemos suspender ou restringir o acesso em caso de suspeita razoável de abuso, fraude ou risco de segurança."],
    },
    {
      title: "3. Produtos, disponibilidade e preços",
      body: ["Procuramos apresentar com exatidão detalhes, disponibilidade e preços. Podem ocorrer erros ocasionais. As imagens são ilustrativas e podem variar ligeiramente por luz, ecrã e produção artesanal."],
      list: ["Os preços são mostrados na moeda selecionada no site. Os montantes de retalho são fixos por moeda e não são conversões cambiais em tempo real. O AED é a moeda de apresentação predefinida para navegação a partir dos EAU, salvo outra moeda suportada.", "O IVA aplicável é tratado segundo os requisitos fiscais dos EAU.", "Podemos atualizar o sortido e os preços a qualquer momento antes da confirmação da encomenda.", "Peças personalizadas estão sujeitas a prazos específicos e condições de venda definitiva."],
    },
    {
      title: "4. Encomendas, pagamento e verificação",
      body: ["A submissão de um pedido de encomenda não constitui aceitação definitiva pela Bint Saeed. Uma encomenda é aceite quando emitimos confirmação e a autorização de pagamento é concluída com sucesso."],
      list: ["Os pagamentos são processados por prestadores seguros, incluindo Stripe (Embedded Checkout), PayPal e Mollie quando oferecidos para o seu destino. Os dados completos do cartão são tratados por esses processadores e não são armazenados na íntegra pela Bint Saeed.", "Podemos recusar, cancelar ou limitar encomendas por motivos legítimos.", "Podem ser necessários controlos antifraude, de identidade e de pagamento.", "Em caso de erro de pagamento ou de preço, podemos cancelar e reembolsar a encomenda afetada."],
    },
    {
      title: "5. Envio, entrega e transferência do risco",
      body: ["Os prazos de entrega são estimativas e não são garantidos. Podem ocorrer atrasos por logística, alfândega, feriados, meteorologia ou eventos fora do nosso controlo razoável."],
      list: ["O envio gratuito nos Emirados Árabes Unidos aplica-se a encomendas com subtotal de mercadoria de pelo menos 1.000 AED.", "O envio mundial gratuito aplica-se a encomendas com subtotal de mercadoria de pelo menos 500 EUR (ou o equivalente mostrado na moeda selecionada).", "Abaixo desses limiares, aplicam-se taxas fixas: 35 AED nos EAU e 30 EUR (ou equivalente) internacional, confirmadas no pagamento.", "Encomendas internacionais são cumpridas com DHL Express; nos EAU com Jeebly.", "Direitos aduaneiros, impostos de importação e custos de desalfandegamento ficam a cargo do destinatário.", "O cliente deve fornecer morada, telefone e e-mail completos e exatos. A Bint Saeed não é responsável por não entrega decorrente de dados incorretos fornecidos pelo cliente.", "Condições, custos e prazos estimados são mostrados no checkout ou nas políticas aplicáveis.", "O risco de perda transfere-se na entrega na morada ou ao destinatário aceite."],
    },
    {
      title: "6. Devoluções, reparações e definitividade da encomenda",
      body: ["Devoluções e reparações regem-se pela nossa Política de envio e devoluções. Consulte-a antes de encomendar."],
      list: ["Muitas peças são feitas sob encomenda; cancelamentos e devoluções são limitados após o início da produção. Ready-to-wear pronto a enviar e acessórios seguem a Política de envio e devoluções, incluindo regras de venda definitiva para brincos e outros artigos assim marcados na página do produto.", "Reclamações por defeito ou não conformidade material devem ser apresentadas com prova no prazo indicado.", "Trocas exigem etiquetas, selos e dispositivos de segurança originais intactos; a remoção ou tentativa de remoção torna o pedido inadmissível.", "Os remédios podem incluir primeiro reparação ou substituição e, quando a lei o exigir, reembolso."],
    },
    {
      title: "7. Personalização e trabalhos sob medida",
      body: [
        "Ao enviar texto de personalização, confirma ter o direito de o utilizar e que o conteúdo não infringe direitos de terceiros nem a lei. Podemos recusar personalizações ilícitas, ofensivas ou não conformes.",
        "Verifique cuidadosamente a ortografia antes de enviar. Não somos responsáveis por erros introduzidos pela cliente.",
        "Qualquer artigo produzido com etiqueta interior personalizada (incluindo uma etiqueta gratuita da Maison) é venda definitiva e não pode ser trocado nem devolvido por mudança de ideia, preferência de tamanho ou motivos semelhantes, salvo defeito de fabrico verificado ou não conformidade material, ou quando a lei imperativa o exija.",
        "Uma etiqueta interior personalizada gratuita não exclui uma encomenda elegível de HOUSE15 ou do House Privilege, sob reserva dos termos da Comunidade abaixo — mas a personalização permanece venda definitiva para efeitos de troca.",
      ],
    },
    {
      title: "8. Propriedade intelectual",
      body: ["Todo o conteúdo do site, ativos criativos, designs, fotografia, marcas, textos e materiais técnicos pertencem à Bint Saeed ou estão licenciados e protegidos pela legislação de propriedade intelectual aplicável."],
      list: ["Proibida a cópia, reprodução, scraping, republicação ou reutilização comercial sem consentimento escrito.", "Proibida a utilização de elementos de marca, imagens de produto ou material proprietário em obras derivadas sem aprovação.", "Pedidos de autorização para legal@bintsaeed.com."],
    },
    {
      title: "9. Utilização permitida e proibida",
      body: [],
      list: ["Pode utilizar este site apenas para navegação e compras lícitas e legítimas.", "É proibido o acesso ilícito, interferência, abuso de bots ou conduta fraudulenta.", "Podemos bloquear o acesso e tomar medidas adequadas em caso de abuso."],
    },
    {
      title: "10. Declaração sobre contribuições solidárias",
      body: ["Quando forem comunicadas declarações de contribuição solidária no site ou em comunicações de produto, descrevem o modelo de afetação social previsto e não alteram o preço de compra salvo indicação expressa."],
    },
    {
      title: "11. Exclusões e limitação de responsabilidade",
      body: ["Na medida permitida pela lei aplicável, o site e os serviços são fornecidos « tal como estão » e « conforme disponibilidade », sem garantia de funcionamento ininterrupto.", "A Bint Saeed não responde por danos indiretos, incidentais, especiais, consequenciais ou punitivos decorrentes do uso do site, atraso na entrega, interrupção de serviços de terceiros ou eventos fora do controlo razoável. Salvo quando a responsabilidade não possa ser limitada por lei, a nossa responsabilidade limita-se ao montante pago pela encomenda respetiva.", "Salvo quando a responsabilidade não possa ser limitada por lei, a Bint Saeed não é responsável por perdas ou danos decorrentes de mau uso dos produtos, incumprimento das indicações de cuidado, alteração não autorizada ou manuseamento incorreto."],
    },
    {
      title: "12. Indemnização",
      body: ["Aceita indemnizar e isentar a Bint Saeed de reclamações, responsabilidades, perdas e custos decorrentes da violação destes Termos, do uso indevido do site ou da violação da lei aplicável."],
    },
    {
      title: "13. Lei aplicável e jurisdição",
      body: ["Estes Termos regem-se pelas leis dos Emirados Árabes Unidos. Sem prejuízo de direitos imperativos de consumidores, os litígios cabem aos tribunais competentes dos EAU.", "Este site é explorado por uma sociedade registada em Abu Dhabi, Emirados Árabes Unidos, com licença comercial CN-6384424 emitida pela Abu Dhabi Registration Authority (ADRA)."],
    },
    {
      title: "14. Idioma e traduções",
      body: [LANGUAGE_CLAUSE_SHORT_PT],
    },
    {
      title: "15. Alterações, divisibilidade e contacto",
      body: ["Podemos rever estes Termos. As versões atualizadas produzem efeitos desde a publicação nesta página. Se alguma disposição for inaplicável, as restantes mantêm-se.", "Bint Saeed\nPedidos jurídicos: legal@bintsaeed.com\nPedidos gerais: hello@bintsaeed.com"],
    }
]

const TERMS_RU_META: Omit<PolicyContent, 'sections'> = {
  pageTitle: "Условия использования",
  breadcrumb: "Условия использования",
  homeBreadcrumb: "Главная",
  heroLabel: "Правовая информация",
  lastUpdated: "Последнее обновление: июль 2026",
  intro: "Настоящие Условия регулируют доступ к сайту Bint Saeed, продуктам и связанным услугам в соответствии с применимым правом Объединённых Арабских Эмиратов.",
  summaryTitle: "Краткое уведомление",
  summaryBody: ["Используя этот сайт или оформляя заказ, вы соглашаетесь с настоящими Условиями. Если вы не согласны, пожалуйста, не используйте сайт. Исходный язык сайта и этих Условий : английский. Английский текст имеет преимущественную силу. Переводы предоставляются только для удобства и не создают отдельных прав."],
  sectionList: ["1. Сфера действия и принятие", "2. Правоспособность и ответственность за аккаунт", "3. Товары, наличие и цены", "4. Заказы, оплата и проверка", "5. Доставка и переход риска", "6. Возвраты, ремонт и окончательность заказа", "7. Персонализация и индивидуальные заказы", "8. Интеллектуальная собственность", "9. Разрешённое и запрещённое использование", "10. Заявление о благотворительных взносах", "11. Отказ от гарантий и ограничение ответственности", "12. Возмещение убытков", "13. Применимое право и юрисдикция", "14. Язык и переводы", "15. Изменения, делимость и контакты"],
}

const TERMS_RU_SECTIONS: PolicySection[] = [
    {
      title: "1. Сфера действия и принятие",
      body: ["Настоящие Условия применяются ко всем посетителям, пользователям и клиентам, которые используют сайт Bint Saeed, контент, товары и связанные услуги. Заходя на сайт, создавая аккаунт или оформляя заказ, вы подтверждаете, что прочитали, поняли и приняли эти Условия."],
    },
    {
      title: "2. Правоспособность и ответственность за аккаунт",
      body: ["Вы должны обладать правоспособностью заключать договоры по применимому праву. Если вы создаёте аккаунт, вы отвечаете за конфиденциальность учётных данных и за все действия под вашим аккаунтом."],
      list: ["Вы соглашаетесь предоставлять точные, полные и актуальные сведения для заказов и переписки.", "Вы отвечаете за актуальность данных доставки, оплаты и контактов.", "Мы можем приостановить или ограничить доступ при обоснованном подозрении в злоупотреблении, мошенничестве или угрозе безопасности."],
    },
    {
      title: "3. Товары, наличие и цены",
      body: ["Мы стремимся точно указывать сведения о товарах, наличии и ценах. Возможны отдельные ошибки. Изображения носят иллюстративный характер и могут незначительно отличаться из-за освещения, экрана и ручного производства."],
      list: ["Цены показываются в выбранной на сайте валюте. Розничные суммы фиксированы по валютам и не являются живой конвертацией. AED — валюта представления по умолчанию при просмотре из ОАЭ, если не выбрана другая поддерживаемая валюта.", "Применимый НДС обрабатывается согласно налоговым требованиям ОАЭ.", "Ассортимент и цены могут обновляться до подтверждения заказа.", "Персонализированные изделия имеют особые сроки и условия окончательной продажи."],
    },
    {
      title: "4. Заказы, оплата и проверка",
      body: ["Отправка запроса на заказ не означает окончательного принятия Bint Saeed. Заказ принят, когда мы направляем подтверждение и успешно завершена авторизация платежа."],
      list: ["Платежи обрабатываются безопасными провайдерами, включая Stripe (Embedded Checkout), PayPal и Mollie, если они доступны для вашего направления. Полные данные карты обрабатываются этими провайдерами и не хранятся полностью у Bint Saeed.", "Мы можем отклонить, отменить или ограничить заказ по законным основаниям.", "Могут потребоваться проверки на мошенничество, личности и платежа.", "При ошибке оплаты или цены мы можем отменить заказ и вернуть средства."],
    },
    {
      title: "5. Доставка и переход риска",
      body: ["Сроки доставки являются ориентировочными и не гарантируются. Задержки возможны из-за логистики, таможни, праздников, погоды или обстоятельств вне нашего разумного контроля."],
      list: ["Бесплатная доставка по ОАЭ действует при товарном субтотале от 1 000 AED.", "Бесплатная международная доставка действует при товарном субтотале от 500 EUR (или показанного эквивалента в выбранной валюте).", "Ниже порогов применяются фиксированные сборы: 35 AED в ОАЭ и 30 EUR (или эквивалент) за рубеж, подтверждаются при оплате.", "Международные заказы отправляются через DHL Express; в ОАЭ — через Jeebly.", "Таможенные пошлины, импортные налоги и сборы за оформление оплачивает получатель.", "Клиент должен указать полный и точный адрес, телефон и e-mail. Bint Saeed не отвечает за недоставку из-за неверных данных клиента.", "Условия, стоимость и ориентировочные сроки указываются при оформлении или в применимых политиках.", "Риск утраты переходит при доставке по адресу или принятому получателю."],
    },
    {
      title: "6. Возвраты, ремонт и окончательность заказа",
      body: ["Возвраты и ремонт регулируются Политикой доставки и возврата. Ознакомьтесь с ней до заказа."],
      list: ["Многие изделия изготавливаются на заказ; отмена и возврат ограничены после начала производства. Готовые к отправке ready-to-wear и аксессуары следуют Политике доставки и возврата, включая правила окончательной продажи для серёг и других товаров, отмеченных так на странице товара.", "Претензии по дефекту или материальному несоответствию подаются с доказательствами в указанный срок.", "Обмен требует сохранности оригинальных ярлыков, пломб и средств защиты; снятие или попытка снятия делает запрос недопустимым.", "Средства защиты прав могут сначала включать ремонт или замену, а при необходимости по закону — возврат средств."],
    },
    {
      title: "7. Персонализация и индивидуальные заказы",
      body: [
        "Отправляя текст персонализации, вы подтверждаете право на его использование и отсутствие нарушения прав третьих лиц или закона. Мы можем отклонить незаконную, оскорбительную или несоответствующую персонализацию.",
        "Перед отправкой внимательно проверьте написание. Мы не несём ответственности за ошибки, введённые клиентом.",
        "Любое изделие с персонализированной внутренней этикеткой (включая бесплатную этикетку Дома) является окончательной продажей и не подлежит обмену или возврату из‑за изменения решения, предпочтения размера или аналогичных причин, за исключением подтверждённого производственного дефекта или существенного несоответствия, либо если иное требует императивный закон.",
        "Бесплатная персонализированная внутренняя этикетка не исключает подходящий заказ из HOUSE15 или House Privilege — с учётом условий Сообщества ниже, — однако персонализация делает изделие окончательной продажей для целей обмена.",
      ],
    },
    {
      title: "8. Интеллектуальная собственность",
      body: ["Весь контент сайта, креативные материалы, дизайн, фотографии, товарные знаки, тексты и технические материалы принадлежат Bint Saeed или лицензированы и защищены применимым правом ИС."],
      list: ["Запрещены копирование, воспроизведение, скрейпинг, повторная публикация или коммерческое использование без письменного согласия.", "Запрещено использование элементов бренда, изображений товаров или собственных материалов в производных работах без одобрения.", "Запросы на разрешение: legal@bintsaeed.com."],
    },
    {
      title: "9. Разрешённое и запрещённое использование",
      body: [],
      list: ["Сайт можно использовать только для законного просмотра и покупок.", "Запрещены незаконный доступ, вмешательство, злоупотребление ботами или мошенничество.", "Мы можем заблокировать доступ и принять меры при злоупотреблении."],
    },
    {
      title: "10. Заявление о благотворительных взносах",
      body: ["Если на сайте или в товарных сообщениях указаны заявления о благотворительных взносах, они описывают предполагаемую модель социальной аллокации и не меняют цену покупки, если прямо не указано иное."],
    },
    {
      title: "11. Отказ от гарантий и ограничение ответственности",
      body: ["В пределах, допускаемых применимым правом, сайт и услуги предоставляются «как есть» и «по мере доступности» без гарантии бесперебойной работы.", "Bint Saeed не несёт ответственности за косвенные, случайные, особые, последующие или штрафные убытки из-за использования сайта, задержки доставки, перерыва сторонних сервисов или событий вне разумного контроля. Если ответственность нельзя ограничить по закону, она сохраняется; в иных случаях она ограничена суммой, уплаченной по соответствующему заказу.", "Если ответственность нельзя ограничить по закону, она сохраняется; в иных случаях Bint Saeed не отвечает за убытки или вред из-за неправильного использования товаров, несоблюдения рекомендаций по уходу, несанкционированного изменения или неправильного обращения."],
    },
    {
      title: "12. Возмещение убытков",
      body: ["Вы соглашаетесь возместить и оградить Bint Saeed от претензий, обязательств, убытков и расходов, возникших из-за нарушения вами этих Условий, злоупотребления сайтом или нарушения применимого права."],
    },
    {
      title: "13. Применимое право и юрисдикция",
      body: ["Настоящие Условия регулируются правом Объединённых Арабских Эмиратов. С учётом императивных прав потребителей споры подлежат рассмотрению компетентными судами ОАЭ.", "Сайт эксплуатируется компанией, зарегистрированной в Абу-Даби, ОАЭ, коммерческая лицензия CN-6384424, выданная Abu Dhabi Registration Authority (ADRA)."],
    },
    {
      title: "14. Язык и переводы",
      body: [LANGUAGE_CLAUSE_SHORT_RU],
    },
    {
      title: "15. Изменения, делимость и контакты",
      body: ["Мы можем обновлять эти Условия. Обновлённые версии действуют с публикации на этой странице. Если положение неисполнимо, остальные сохраняют силу.", "Bint Saeed\nЮридические запросы: legal@bintsaeed.com\nОбщие запросы: hello@bintsaeed.com"],
    }
]

const TERMS_ZH_META: Omit<PolicyContent, 'sections'> = {
  pageTitle: "条款与条件",
  breadcrumb: "条款与条件",
  homeBreadcrumb: "首页",
  heroLabel: "法律信息",
  lastUpdated: "最近更新：2026年7月",
  intro: "本条款规范对 Bint Saeed 网站、产品及相关服务的访问与使用，并适用阿拉伯联合酋长国相关法律。",
  summaryTitle: "摘要提示",
  summaryBody: ["使用本网站或下单即表示您同意本条款。如不同意，请勿使用本网站。本网站及本条款的原始语言为英文。以英文文本为准。译本仅供便利，不创设独立权利。"],
  sectionList: ["1. 范围与接受", "2. 行为能力与账户责任", "3. 产品、供应与价格", "4. 订单、支付与核验", "5. 配送、交付与风险转移", "6. 退货、维修与订单终局性", "7. 个性化与定制", "8. 知识产权", "9. 允许与禁止的使用", "10. 慈善贡献声明", "11. 免责声明与责任限制", "12. 赔偿", "13. 适用法律与管辖", "14. 语言与翻译", "15. 变更、可分割性与联系方式"],
}

const TERMS_ZH_SECTIONS: PolicySection[] = [
    {
      title: "1. 范围与接受",
      body: ["本条款与条件适用于访问或使用 Bint Saeed 网站、内容、产品及相关服务的所有访客、用户与客户。访问本网站、创建账户或下单，即确认您已阅读、理解并同意本条款。"],
    },
    {
      title: "2. 行为能力与账户责任",
      body: ["您须具备适用法律下订立合同的行为能力。若创建账户，您须对登录凭据的保密性及账户下全部活动负责。"],
      list: ["您同意为订单与沟通提供准确、完整且最新的信息。", "您须确保配送、账单与联系信息保持准确。", "在合理怀疑存在滥用、欺诈或安全风险时，我们可暂停或限制访问。"],
    },
    {
      title: "3. 产品、供应与价格",
      body: ["我们尽力准确展示产品详情、供应与价格。偶发错误仍可能出现。产品图片仅供示意，可能因光线、屏幕与手工制作而略有差异。"],
      list: ["价格以您在网站选择的货币显示。各货币的零售金额为固定标价，并非实时外汇换算。除非选择其他支持货币，浏览阿联酋站点时默认展示货币为迪拉姆（AED）。", "适用增值税按阿联酋税务要求处理。", "我们可在订单确认前随时更新货品与价格。", "定制与个性化单品适用特定工期及最终售出条件。"],
    },
    {
      title: "4. 订单、支付与核验",
      body: ["提交订购请求并不构成 Bint Saeed 的最终接受。当我们发出订单确认且支付授权成功完成时，订单即被接受。"],
      list: ["付款通过安全支付服务商处理，包括 Stripe（Embedded Checkout）、PayPal，以及在您的目的地提供时的 Mollie。完整银行卡信息由上述处理方处理，Bint Saeed 不会完整保存。", "我们可基于合法理由拒绝、取消或限制订单。", "可能需要进行反欺诈、身份与支付核验。", "如发生支付或定价错误，我们可取消并退款相关订单。"],
    },
    {
      title: "5. 配送、交付与风险转移",
      body: ["交付时间仅为预估，不作保证。物流、海关、节假日、天气或超出合理控制的事件可能导致延误。"],
      list: ["阿联酋境内商品小计达 1,000 迪拉姆及以上可享包邮。", "全球配送在商品小计达 500 欧元及以上（或所选货币显示的等值金额）可享包邮。", "低于上述门槛时适用固定运费：阿联酋境内 35 迪拉姆，国际 30 欧元（或等值），以付款时确认为准。", "国际订单由 DHL Express 承运；阿联酋订单由 Jeebly 承运。", "目的地关税、进口税与清关费用由收件人承担。", "客户须提供完整准确的配送地址、电话与电子邮箱。因客户提供错误信息导致未送达的，Bint Saeed 不承担责任。", "运费条款、费用与预估时效见结账页或相关政策。", "灭失风险于送达配送地址或被接受的收件人时转移。"],
    },
    {
      title: "6. 退货、维修与订单终局性",
      body: ["退货与维修适用《配送与退货政策》。下单前请审阅全文。"],
      list: ["许多单品按单制作；生产开始后取消与退货受限。可即发的成衣与配饰遵循《配送与退货政策》，包括耳环及产品页标明最终售出之其他商品的规则。", "缺陷或实质性不符主张须在规定期限内附证据提出。", "换货须原厂吊牌、封签与防伪标识完好；移除或试图移除将使请求不合格。", "救济可先包括维修或更换，并在法律要求时退款。"],
    },
    {
      title: "7. 个性化与定制",
      body: [
        "提交个性化文本即确认您有权使用该内容，且不侵犯第三方权利或违反法律。我们可拒绝违法、冒犯或不符政策的个性化请求。",
        "提交前请仔细核对拼写与用词。客户自行输入的错误，本店概不负责。",
        "凡带有个性化内标的商品（含免费 House 内标）均为最终售出，除经核实的生产缺陷或实质性不符，或强制性法律另有规定外，不得因改变主意、尺码偏好或类似理由换货或退货。",
        "免费个性化内标不排除符合条件的订单使用 HOUSE15 或 House Privilege（以社群条款为准），但个性化商品就换货而言仍属最终售出。",
      ],
    },
    {
      title: "8. 知识产权",
      body: ["网站全部内容、创意资产、设计、摄影、商标、文本与技术材料归 Bint Saeed 所有或获其许可，并受适用知识产权法保护。"],
      list: ["未经书面同意，不得复制、再制作、抓取、再发布或商业再利用。", "未经批准，不得在衍生作品中使用品牌元素、产品图或专有材料。", "许可申请请发至 legal@bintsaeed.com。"],
    },
    {
      title: "9. 允许与禁止的使用",
      body: [],
      list: ["您仅可将本网站用于合法、正当的浏览与购买。", "禁止非法访问、干扰、机器人滥用或欺诈行为。", "发现滥用时，我们可封锁访问并采取适当措施。"],
    },
    {
      title: "10. 慈善贡献声明",
      body: ["如网站或产品沟通中出现慈善贡献说明，其描述的是拟定的社会影响分配模式，除非另有明确说明，不改变购买价格。"],
    },
    {
      title: "11. 免责声明与责任限制",
      body: ["在适用法律允许的范围内，网站与服务按「现状」及「可供使用」提供，不保证不间断运行。", "Bint Saeed 不对因使用网站、交付延误、第三方服务中断或超出合理控制之事件引起的间接、附带、特殊、后果性或惩罚性损害承担责任。除法律不得限制责任的情形外，我们的责任以相关订单实付金额为限。", "除法律不得限制责任的情形外，Bint Saeed 不对因误用产品、未遵循护理指引、未经授权改动或不当处理造成的损失或损害负责。"],
    },
    {
      title: "12. 赔偿",
      body: ["您同意就因违反本条款、滥用网站或违反适用法律而产生的索赔、责任、损失与费用，向 Bint Saeed 作出赔偿并使其免受损害。"],
    },
    {
      title: "13. 适用法律与管辖",
      body: ["本条款受阿拉伯联合酋长国法律管辖。在强制性消费者保护权利范围内，争议由阿联酋有管辖权的法院审理。", "本网站由在阿联酋阿布扎比注册的公司运营，商业执照号 CN-6384424，由阿布扎比注册局（ADRA）颁发。"],
    },
    {
      title: "14. 语言与翻译",
      body: [LANGUAGE_CLAUSE_SHORT_ZH],
    },
    {
      title: "15. 变更、可分割性与联系方式",
      body: ["我们可不时修订本条款。更新版本自本页发布之日起生效。若任何条款无法执行，其余条款仍完全有效。", "Bint Saeed\n法律问询：legal@bintsaeed.com\n一般问询：hello@bintsaeed.com"],
    }
]

const TERMS_BY_LOCALE: Record<EuZhLocale, PolicyContent> = {

  fr: { ...TERMS_FR_META, sections: TERMS_FR_SECTIONS },

  de: { ...TERMS_DE_META, sections: TERMS_DE_SECTIONS },

  it: { ...TERMS_IT_META, sections: TERMS_IT_SECTIONS },

  es: { ...TERMS_ES_META, sections: TERMS_ES_SECTIONS },

  nl: { ...TERMS_NL_META, sections: TERMS_NL_SECTIONS },

  pt: { ...TERMS_PT_META, sections: TERMS_PT_SECTIONS },

  ru: { ...TERMS_RU_META, sections: TERMS_RU_SECTIONS },

  zh: { ...TERMS_ZH_META, sections: TERMS_ZH_SECTIONS },

}

export function getLocalizedTermsContent(lang: EuZhLocale): PolicyContent {
  return TERMS_BY_LOCALE[lang]
}

// ----- Privacy (localized) -----

const PRIVACY_FR_META: Omit<PolicyContent, 'sections'> = {
  pageTitle: "Politique de confidentialité",
  breadcrumb: "Politique de confidentialité",
  homeBreadcrumb: "Accueil",
  heroLabel: "Juridique",
  lastUpdated: "Dernière mise à jour : juillet 2026",
  intro: "La présente Politique de confidentialité explique comment Bint Saeed collecte, utilise, protège et divulgue des données personnelles dans le cadre de ce site et des services associés.",
  summaryTitle: "Avis de confidentialité",
  summaryBody: ["Nous agissons dans le cadre juridique applicable des Émirats arabes unis et appliquons les exigences de consentement du RGPD pour les utilisateurs concernés, y compris dans l’Union européenne."],
  sectionList: ["1. Avis de confidentialité et cadre juridique", "2. Informations collectées", "3. Utilisation des données personnelles", "4. Base juridique du traitement", "5. Partage et divulgation", "6. Services et sous-traitants tiers", "7. Sécurité et mesures organisationnelles", "8. Vos droits", "9. Cookies et suivi", "10. Conservation", "11. Transferts internationaux", "12. Réclamations et autorités", "13. Langue et traductions", "14. Contact et mises à jour"],
}

function privacySections_fr(analyticsLine: string): PolicySection[] {
  return [
    {
      title: "1. Avis de confidentialité et cadre juridique",
      body: ["La présente politique s’applique aux données personnelles traitées par Bint Saeed via ce site, les parcours clients associés et les communications opérationnelles. Elle reflète le décret-loi fédéral des EAU n° 45 de 2021 et, le cas échéant, les principes du RGPD."],
    },
    {
      title: "2. Informations collectées",
      body: ["Nous collectons les informations que vous fournissez et des données techniques limitées collectées automatiquement."],
      subsections: [{ title: "Données personnelles et de commande", list: ["Nom, e-mail, téléphone, détails de livraison et de facturation.", "Détails de commande, préférences produit et communications d’assistance.", "Éléments de personnalisation fournis pour l’exécution de la commande."] }, { title: "Données techniques et d’usage", list: ["Signaux de localisation dérivés de l’IP, navigateur, type d’appareil et navigation de session.", "Préférences de cookies et de consentement pour la conformité et le fonctionnement du site."] }],
    },
    {
      title: "3. Utilisation des données personnelles",
      body: [],
      list: ["Traiter, exécuter et accompagner les commandes et demandes produit.", "Assurer le service client, les communications transactionnelles et les avis de service.", "Améliorer l’utilisabilité, la sécurité et les performances du site.", "Exploiter des programmes d’analyse uniquement lorsque le consentement est donné.", "Respecter les obligations légales, fiscales et de prévention de la fraude."],
    },
    {
      title: "4. Base juridique du traitement",
      body: ["Lorsque le RGPD s’applique, le traitement peut reposer sur :"],
      list: ["Le consentement, y compris le consentement optionnel aux cookies/analyses.", "L’exécution du contrat, y compris le traitement et la livraison des commandes.", "Les obligations légales, y compris la comptabilité et les dossiers de conformité.", "Les intérêts légitimes, y compris la prévention de la fraude et la sécurité du site."],
      subsections: [{ title: "", list: ["Lorsque le traitement repose sur le consentement, vous pouvez le retirer à tout moment."] }],
    },
    {
      title: "5. Partage et divulgation",
      body: ["Nous ne vendons pas de données personnelles. Nous pouvons partager des données uniquement lorsque cela est nécessaire, notamment avec :"],
      list: ["Prestataires de paiement, partenaires logistiques et fournisseurs essentiels.", "Conseillers professionnels ou autorités lorsque la loi l’exige.", "Prestataires agissant sous obligations contractuelles de confidentialité et de sécurité."],
    },
    {
      title: "6. Services et sous-traitants tiers",
      body: ["Nous utilisons des prestataires sélectionnés pour le commerce, les communications, l’infrastructure et l’analyse. Selon la configuration, cela peut inclure le paiement, l’hébergement/CDN, l’e-mail opérationnel et des outils d’analyse optionnels.", analyticsLine, "Traitement des paiements : les données de carte/paiement sont traitées par des prestataires sécurisés (notamment Stripe, PayPal et Mollie lorsqu’ils sont proposés) et ne sont pas conservées intégralement par Bint Saeed."],
    },
    {
      title: "7. Sécurité et mesures organisationnelles",
      body: ["Nous appliquons des mesures techniques et organisationnelles adaptées aux données traitées, notamment des contrôles d’accès, un transport sécurisé et des contrôles opérationnels."],
    },
    {
      title: "8. Vos droits",
      body: ["Sous réserve du droit applicable, vous pouvez demander l’accès, la rectification, l’effacement, la limitation, la portabilité ou vous opposer à certains traitements."],
      list: ["Vous pouvez gérer le consentement aux cookies non essentiels via le contrôle Cookie settings dans le pied de page.", "Une vérification d’identité peut être requise avant de traiter certaines demandes.", "Nous répondons dans les délais légaux applicables."],
    },
    {
      title: "9. Cookies et suivi",
      body: ["Nous utilisons des cookies essentiels au fonctionnement du site et des cookies optionnels d’analyse uniquement après consentement. Pour le détail, consultez la Politique relative aux cookies."],
    },
    {
      title: "10. Conservation",
      body: ["Nous conservons les données personnelles uniquement aussi longtemps que nécessaire à l’exécution, à la conformité, à la sécurité et à la tenue de registres. Certains dossiers commerciaux peuvent être conservés selon les exigences légales/commerciales des EAU."],
    },
    {
      title: "11. Transferts internationaux",
      body: ["Lorsque des données personnelles sont traitées dans plusieurs juridictions, nous appliquons des contrôles contractuels et organisationnels conformes aux exigences applicables des EAU et du RGPD."],
    },
    {
      title: "12. Réclamations et autorités",
      body: ["Vous pouvez déposer une réclamation auprès d’une autorité de contrôle compétente dans votre juridiction, y compris aux EAU le cas échéant."],
    },
    {
      title: "13. Langue et traductions",
      body: [LANGUAGE_CLAUSE_SHORT_FR],
    },
    {
      title: "14. Contact et mises à jour",
      body: ["Nous pouvons réviser cette Politique de confidentialité. Les versions mises à jour prennent effet dès leur publication sur cette page.", "Bint Saeed\nDemandes confidentialité et juridiques : legal@bintsaeed.com\nDemandes générales : hello@bintsaeed.com"],
    },
  ]
}

const PRIVACY_DE_META: Omit<PolicyContent, 'sections'> = {
  pageTitle: "Datenschutzerklärung",
  breadcrumb: "Datenschutzerklärung",
  homeBreadcrumb: "Startseite",
  heroLabel: "Rechtliches",
  lastUpdated: "Zuletzt aktualisiert: Juli 2026",
  intro: "Diese Datenschutzerklärung erläutert, wie Bint Saeed personenbezogene Daten im Zusammenhang mit dieser Website und verbundenen Diensten erhebt, verwendet, schützt und offenlegt.",
  summaryTitle: "Datenschutzhinweis",
  summaryBody: ["Wir handeln im anwendbaren Rechtsrahmen der Vereinigten Arabischen Emirate und wenden GDPR-Einwilligungsanforderungen für betroffene Nutzer an, einschließlich in der Europäischen Union."],
  sectionList: ["1. Datenschutzhinweis und Rechtsrahmen", "2. Welche Daten wir erheben", "3. Verwendung personenbezogener Daten", "4. Rechtsgrundlage der Verarbeitung", "5. Weitergabe und Offenlegung", "6. Drittanbieter und Auftragsverarbeiter", "7. Sicherheit und organisatorische Maßnahmen", "8. Ihre Rechte", "9. Cookies und Tracking", "10. Speicherung", "11. Internationale Übermittlungen", "12. Beschwerden und Aufsichtsbehörden", "13. Sprache und Übersetzungen", "14. Kontakt und Aktualisierungen"],
}

function privacySections_de(analyticsLine: string): PolicySection[] {
  return [
    {
      title: "1. Datenschutzhinweis und Rechtsrahmen",
      body: ["Diese Richtlinie gilt für personenbezogene Daten, die Bint Saeed über diese Website, zugehörige Kundenwege und betriebliche Kommunikation verarbeitet. Sie berücksichtigt das UAE Federal Decree-Law No. 45 of 2021 und, soweit anwendbar, GDPR-Grundsätze."],
    },
    {
      title: "2. Welche Daten wir erheben",
      body: ["Wir erheben von Ihnen bereitgestellte Informationen sowie begrenzte automatisch erhobene technische Daten."],
      subsections: [{ title: "Personen- und Bestelldaten", list: ["Name, E-Mail, Telefon, Liefer- und Rechnungsangaben.", "Bestelldetails, Produktpräferenzen und Supportkommunikation.", "Personalisierungseingaben zur Auftragserfüllung."] }, { title: "Technische und Nutzungsdaten", list: ["Aus der IP abgeleitete Standortsignale, Browser, Gerätetyp und Sitzungsnavigation.", "Cookie- und Einwilligungspräferenzen für Compliance und Websitefunktion."] }],
    },
    {
      title: "3. Verwendung personenbezogener Daten",
      body: [],
      list: ["Bestellungen und Produktanfragen verarbeiten, erfüllen und unterstützen.", "Kundenservice, transaktionale Kommunikation und Servicehinweise bereitstellen.", "Nutzbarkeit, Sicherheit und Leistung der Website verbessern.", "Analyseprogramme nur bei erteilter Einwilligung betreiben.", "Rechtliche, steuerliche und Betrugspräventionspflichten erfüllen."],
    },
    {
      title: "4. Rechtsgrundlage der Verarbeitung",
      body: ["Soweit GDPR relevant ist, kann die Verarbeitung beruhen auf:"],
      list: ["Einwilligung, einschließlich optionaler Cookie-/Analyseeinwilligung.", "Vertragserfüllung, einschließlich Bestellabwicklung und Lieferung.", "Rechtlichen Pflichten, einschließlich Buchhaltung und Compliance-Unterlagen.", "Berechtigten Interessen, einschließlich Betrugsprävention und Website-Sicherheit."],
      subsections: [{ title: "", list: ["Beruht die Verarbeitung auf Einwilligung, können Sie diese jederzeit widerrufen."] }],
    },
    {
      title: "5. Weitergabe und Offenlegung",
      body: ["Wir verkaufen keine personenbezogenen Daten. Eine Weitergabe erfolgt nur soweit erforderlich, insbesondere an:"],
      list: ["Zahlungsanbieter, Logistikpartner und wesentliche Dienstleister.", "Berufliche Berater oder Behörden, soweit gesetzlich erforderlich.", "Dienstleister unter vertraglichen Vertraulichkeits- und Sicherheitsverpflichtungen."],
    },
    {
      title: "6. Drittanbieter und Auftragsverarbeiter",
      body: ["Wir nutzen ausgewählte Drittanbieter für Handel, Kommunikation, Infrastruktur und Analyse. Je nach Konfiguration können Zahlungsabwicklung, Hosting/CDN, Betriebs-E-Mail und optionale Analysetools enthalten sein.", analyticsLine, "Zahlungsabwicklung: Karten-/Zahlungsdaten werden von sicheren Zahlungsanbietern verarbeitet (einschließlich Stripe, PayPal und Mollie, soweit angeboten) und nicht vollständig bei Bint Saeed gespeichert."],
    },
    {
      title: "7. Sicherheit und organisatorische Maßnahmen",
      body: ["Wir wenden technische und organisatorische Maßnahmen an, die zu den verarbeiteten Daten passen, einschließlich Zugangskontrollen, sicherem Transport und betrieblichen Kontrollen."],
    },
    {
      title: "8. Ihre Rechte",
      body: ["Vorbehaltlich anwendbaren Rechts können Sie Auskunft, Berichtigung, Löschung, Einschränkung, Übertragbarkeit oder Widerspruch gegen bestimmte Verarbeitungen verlangen."],
      list: ["Nicht wesentliche Cookie-Einwilligungen können Sie über Cookie settings in der Fußzeile verwalten.", "Vor Bearbeitung bestimmter Anträge kann eine Identitätsprüfung erforderlich sein.", "Wir antworten innerhalb der geltenden gesetzlichen Fristen."],
    },
    {
      title: "9. Cookies und Tracking",
      body: ["Wir verwenden wesentliche Cookies für den Websitebetrieb und optionale Analyse-Cookies nur nach Einwilligung. Details finden Sie in der Cookie-Richtlinie."],
    },
    {
      title: "10. Speicherung",
      body: ["Wir speichern personenbezogene Daten nur so lange wie für Erfüllung, Compliance, Sicherheit und Aufbewahrung erforderlich. Bestimmte Handelsunterlagen können nach rechtlichen/geschäftlichen Anforderungen der VAE aufbewahrt werden."],
    },
    {
      title: "11. Internationale Übermittlungen",
      body: ["Werden personenbezogene Daten über Rechtsordnungen hinweg verarbeitet, wenden wir vertragliche und organisatorische Kontrollen gemäß anwendbaren UAE- und GDPR-Anforderungen an."],
    },
    {
      title: "12. Beschwerden und Aufsichtsbehörden",
      body: ["Sie können eine Beschwerde bei einer zuständigen Aufsichtsbehörde in Ihrer Rechtsordnung einreichen, einschließlich in den VAE, soweit anwendbar."],
    },
    {
      title: "13. Sprache und Übersetzungen",
      body: [LANGUAGE_CLAUSE_SHORT_DE],
    },
    {
      title: "14. Kontakt und Aktualisierungen",
      body: ["Wir können diese Datenschutzerklärung überarbeiten. Aktualisierte Fassungen gelten ab Veröffentlichung auf dieser Seite.", "Bint Saeed\nDatenschutz- und Rechtsanfragen: legal@bintsaeed.com\nAllgemeine Anfragen: hello@bintsaeed.com"],
    },
  ]
}

const PRIVACY_IT_META: Omit<PolicyContent, 'sections'> = {
  pageTitle: "Informativa sulla privacy",
  breadcrumb: "Informativa sulla privacy",
  homeBreadcrumb: "Home",
  heroLabel: "Legale",
  lastUpdated: "Ultimo aggiornamento: luglio 2026",
  intro: "La presente Informativa sulla privacy spiega come Bint Saeed raccoglie, utilizza, protegge e comunica i dati personali in relazione a questo sito e ai servizi correlati.",
  summaryTitle: "Avviso privacy",
  summaryBody: ["Operiamo nel quadro giuridico applicabile degli Emirati Arabi Uniti e applichiamo i requisiti di consenso GDPR per gli utenti interessati, inclusa l’Unione europea."],
  sectionList: ["1. Avviso privacy e quadro giuridico", "2. Dati raccolti", "3. Uso dei dati personali", "4. Base giuridica del trattamento", "5. Condivisione e divulgazione", "6. Servizi e responsabili del trattamento terzi", "7. Sicurezza e misure organizzative", "8. I tuoi diritti", "9. Cookie e tracciamento", "10. Conservazione", "11. Trasferimenti internazionali", "12. Reclami e autorità", "13. Lingua e traduzioni", "14. Contatti e aggiornamenti"],
}

function privacySections_it(analyticsLine: string): PolicySection[] {
  return [
    {
      title: "1. Avviso privacy e quadro giuridico",
      body: ["La presente policy si applica ai dati personali trattati da Bint Saeed tramite questo sito, i percorsi cliente associati e le comunicazioni operative. Riflette il UAE Federal Decree-Law No. 45 of 2021 e, ove applicabile, i principi GDPR."],
    },
    {
      title: "2. Dati raccolti",
      body: ["Raccogliamo le informazioni che fornisci e dati tecnici limitati raccolti automaticamente."],
      subsections: [{ title: "Dati personali e d’ordine", list: ["Nome, e-mail, telefono, dettagli di spedizione e fatturazione.", "Dettagli ordine, preferenze prodotto e comunicazioni di assistenza.", "Input di personalizzazione forniti per l’evasione dell’ordine."] }, { title: "Dati tecnici e di utilizzo", list: ["Segnali di localizzazione derivati dall’IP, browser, tipo di dispositivo e navigazione di sessione.", "Preferenze cookie e consenso per conformità e funzionamento del sito."] }],
    },
    {
      title: "3. Uso dei dati personali",
      body: [],
      list: ["Elaborare, evadere e supportare ordini e richieste prodotto.", "Fornire assistenza clienti, comunicazioni transazionali e avvisi di servizio.", "Migliorare usabilità, sicurezza e prestazioni del sito.", "Operare programmi di analisi solo con consenso.", "Adempiere obblighi legali, fiscali e di prevenzione frodi."],
    },
    {
      title: "4. Base giuridica del trattamento",
      body: ["Ove rilevante ai sensi del GDPR, il trattamento può fondarsi su:"],
      list: ["Consenso, incluso il consenso opzionale a cookie/analisi.", "Esecuzione del contratto, inclusa elaborazione e consegna degli ordini.", "Obblighi di legge, inclusa contabilità e registri di conformità.", "Interessi legittimi, inclusa prevenzione frodi e sicurezza del sito."],
      subsections: [{ title: "", list: ["Se il trattamento si basa sul consenso, puoi revocarlo in qualsiasi momento."] }],
    },
    {
      title: "5. Condivisione e divulgazione",
      body: ["Non vendiamo dati personali. Possiamo condividere dati solo ove necessario, anche con:"],
      list: ["Fornitori di pagamento, partner logistici e vendor essenziali.", "Consulenti professionali o autorità ove richiesto dalla legge.", "Fornitori vincolati a obblighi contrattuali di riservatezza e sicurezza."],
    },
    {
      title: "6. Servizi e responsabili del trattamento terzi",
      body: ["Utilizziamo fornitori terzi selezionati per commercio, comunicazioni, infrastruttura e analisi. A seconda della configurazione, ciò può includere pagamento, hosting/CDN, e-mail operativa e strumenti di analisi opzionali.", analyticsLine, "Elaborazione dei pagamenti: i dati di carta/pagamento sono trattati da fornitori sicuri (inclusi Stripe, PayPal e Mollie ove offerti) e non sono memorizzati per intero da Bint Saeed."],
    },
    {
      title: "7. Sicurezza e misure organizzative",
      body: ["Applichiamo misure tecniche e organizzative adeguate ai dati trattati, inclusi controlli di accesso, trasporto sicuro e controlli operativi."],
    },
    {
      title: "8. I tuoi diritti",
      body: ["Fatto salvo il diritto applicabile, puoi richiedere accesso, rettifica, cancellazione, limitazione, portabilità o opporti a certi trattamenti."],
      list: ["Puoi gestire il consenso ai cookie non essenziali tramite Cookie settings nel footer.", "Può essere richiesta la verifica dell’identità prima di evadere certe richieste.", "Rispondiamo entro i termini di legge applicabili."],
    },
    {
      title: "9. Cookie e tracciamento",
      body: ["Usiamo cookie essenziali per il funzionamento del sito e cookie di analisi opzionali solo dopo il consenso. Per i dettagli, consulta la Cookie Policy."],
    },
    {
      title: "10. Conservazione",
      body: ["Conserviamo i dati personali solo per il tempo necessario a evasione, conformità, sicurezza e tenuta dei registri. Alcuni registri commerciali possono essere conservati secondo i requisiti legali/commerciali degli EAU."],
    },
    {
      title: "11. Trasferimenti internazionali",
      body: ["Quando i dati personali sono trattati tra giurisdizioni, applichiamo controlli contrattuali e organizzativi coerenti con i requisiti applicabili di EAU e GDPR."],
    },
    {
      title: "12. Reclami e autorità",
      body: ["Puoi presentare reclamo a un’autorità di controllo competente nella tua giurisdizione, incluse le autorità degli EAU ove applicabile."],
    },
    {
      title: "13. Lingua e traduzioni",
      body: [LANGUAGE_CLAUSE_SHORT_IT],
    },
    {
      title: "14. Contatti e aggiornamenti",
      body: ["Possiamo rivedere questa Informativa sulla privacy. Le versioni aggiornate decorrono dalla pubblicazione su questa pagina.", "Bint Saeed\nRichieste privacy e legali: legal@bintsaeed.com\nRichieste generali: hello@bintsaeed.com"],
    },
  ]
}

const PRIVACY_ES_META: Omit<PolicyContent, 'sections'> = {
  pageTitle: "Política de privacidad",
  breadcrumb: "Política de privacidad",
  homeBreadcrumb: "Inicio",
  heroLabel: "Legal",
  lastUpdated: "Última actualización: julio de 2026",
  intro: "Esta Política de privacidad explica cómo Bint Saeed recopila, utiliza, protege y revela datos personales en relación con este sitio y servicios relacionados.",
  summaryTitle: "Aviso de privacidad",
  summaryBody: ["Actuamos en el marco jurídico aplicable de los Emiratos Árabes Unidos y aplicamos los requisitos de consentimiento del RGPD para los usuarios pertinentes, incluida la Unión Europea."],
  sectionList: ["1. Aviso de privacidad y marco legal", "2. Información que recopilamos", "3. Cómo usamos los datos personales", "4. Base jurídica del tratamiento", "5. Compartición y divulgación", "6. Servicios y encargados del tratamiento", "7. Seguridad y medidas organizativas", "8. Sus derechos", "9. Cookies y seguimiento", "10. Conservación", "11. Transferencias internacionales", "12. Reclamaciones y autoridades", "13. Idioma y traducciones", "14. Contacto y actualizaciones"],
}

function privacySections_es(analyticsLine: string): PolicySection[] {
  return [
    {
      title: "1. Aviso de privacidad y marco legal",
      body: ["Esta política se aplica a los datos personales tratados por Bint Saeed a través de este sitio, recorridos de cliente asociados y comunicaciones operativas. Refleja el UAE Federal Decree-Law No. 45 of 2021 y, cuando proceda, los principios del RGPD."],
    },
    {
      title: "2. Información que recopilamos",
      body: ["Recopilamos la información que usted facilita y datos técnicos limitados recogidos automáticamente."],
      subsections: [{ title: "Datos personales y de pedido", list: ["Nombre, correo, teléfono, datos de envío y facturación.", "Detalles del pedido, preferencias de producto y comunicaciones de soporte.", "Datos de personalización facilitados para cumplir el pedido."] }, { title: "Datos técnicos y de uso", list: ["Señales de ubicación derivadas de la IP, navegador, tipo de dispositivo y navegación de sesión.", "Preferencias de cookies y consentimiento para cumplimiento y funcionamiento del sitio."] }],
    },
    {
      title: "3. Cómo usamos los datos personales",
      body: [],
      list: ["Procesar, cumplir y dar soporte a pedidos y consultas de producto.", "Prestar atención al cliente, comunicaciones transaccionales y avisos de servicio.", "Mejorar usabilidad, seguridad y rendimiento del sitio.", "Operar programas de analítica solo con consentimiento.", "Cumplir obligaciones legales, fiscales y de prevención del fraude."],
    },
    {
      title: "4. Base jurídica del tratamiento",
      body: ["Cuando el RGPD resulte aplicable, el tratamiento puede basarse en:"],
      list: ["Consentimiento, incluido el consentimiento opcional de cookies/analítica.", "Ejecución del contrato, incluido el procesamiento y la entrega de pedidos.", "Obligaciones legales, incluida la contabilidad y los registros de cumplimiento.", "Intereses legítimos, incluida la prevención del fraude y la seguridad del sitio."],
      subsections: [{ title: "", list: ["Si el tratamiento se basa en el consentimiento, puede retirarlo en cualquier momento."] }],
    },
    {
      title: "5. Compartición y divulgación",
      body: ["No vendemos datos personales. Podemos compartir datos solo cuando sea necesario, incluso con:"],
      list: ["Proveedores de pago, socios logísticos y proveedores esenciales.", "Asesores profesionales o autoridades cuando lo exija la ley.", "Proveedores sujetos a obligaciones contractuales de confidencialidad y seguridad."],
    },
    {
      title: "6. Servicios y encargados del tratamiento",
      body: ["Usamos proveedores terceros seleccionados para comercio, comunicaciones, infraestructura y analítica. Según la configuración, puede incluir pago, hosting/CDN, correo operativo y herramientas de analítica opcionales.", analyticsLine, "Procesamiento de pagos: los datos de tarjeta/pago los tratan proveedores seguros (incluidos Stripe, PayPal y Mollie cuando se ofrezcan) y Bint Saeed no los almacena íntegramente."],
    },
    {
      title: "7. Seguridad y medidas organizativas",
      body: ["Aplicamos medidas técnicas y organizativas adecuadas a los datos que tratamos, incluidos controles de acceso, transporte seguro y controles operativos."],
    },
    {
      title: "8. Sus derechos",
      body: ["Con sujeción a la ley aplicable, puede solicitar acceso, rectificación, supresión, limitación, portabilidad u oposición a determinados tratamientos."],
      list: ["Puede gestionar el consentimiento de cookies no esenciales mediante Cookie settings en el pie de página.", "Puede requerirse verificación de identidad antes de tramitar ciertas solicitudes.", "Respondemos dentro de los plazos legales aplicables."],
    },
    {
      title: "9. Cookies y seguimiento",
      body: ["Usamos cookies esenciales para el funcionamiento del sitio y cookies de analítica opcionales solo tras el consentimiento. Para más detalle, consulte la Política de cookies."],
    },
    {
      title: "10. Conservación",
      body: ["Conservamos los datos personales solo el tiempo necesario para el cumplimiento, la conformidad, la seguridad y la conservación de registros. Ciertos registros comerciales pueden conservarse según requisitos legales/mercantiles de EAU."],
    },
    {
      title: "11. Transferencias internacionales",
      body: ["Cuando los datos personales se traten entre jurisdicciones, aplicamos controles contractuales y organizativos coherentes con los requisitos aplicables de EAU y del RGPD."],
    },
    {
      title: "12. Reclamaciones y autoridades",
      body: ["Puede presentar una reclamación ante una autoridad de control competente en su jurisdicción, incluidas las de EAU cuando proceda."],
    },
    {
      title: "13. Idioma y traducciones",
      body: [LANGUAGE_CLAUSE_SHORT_ES],
    },
    {
      title: "14. Contacto y actualizaciones",
      body: ["Podemos revisar esta Política de privacidad. Las versiones actualizadas surten efecto desde su publicación en esta página.", "Bint Saeed\nConsultas de privacidad y legales: legal@bintsaeed.com\nConsultas generales: hello@bintsaeed.com"],
    },
  ]
}

const PRIVACY_NL_META: Omit<PolicyContent, 'sections'> = {
  pageTitle: "Privacybeleid",
  breadcrumb: "Privacybeleid",
  homeBreadcrumb: "Home",
  heroLabel: "Juridisch",
  lastUpdated: "Laatst bijgewerkt: juli 2026",
  intro: "Dit Privacybeleid legt uit hoe Bint Saeed persoonsgegevens verzamelt, gebruikt, beschermt en openbaar maakt in verband met deze website en gerelateerde diensten.",
  summaryTitle: "Privacyverklaring",
  summaryBody: ["Wij handelen binnen het toepasselijke juridische kader van de Verenigde Arabische Emiraten en passen GDPR-toestemmingsvereisten toe voor relevante gebruikers, inclusief in de Europese Unie."],
  sectionList: ["1. Privacyverklaring en juridisch kader", "2. Welke gegevens we verzamelen", "3. Gebruik van persoonsgegevens", "4. Rechtsgrond voor verwerking", "5. Delen en openbaarmaking", "6. Derde diensten en verwerkers", "7. Beveiliging en organisatorische maatregelen", "8. Uw rechten", "9. Cookies en tracking", "10. Bewaring", "11. Internationale doorgiften", "12. Klachten en toezichthouders", "13. Taal en vertalingen", "14. Contact en updates"],
}

function privacySections_nl(analyticsLine: string): PolicySection[] {
  return [
    {
      title: "1. Privacyverklaring en juridisch kader",
      body: ["Dit beleid geldt voor persoonsgegevens die Bint Saeed via deze website, bijbehorende klantreizen en operationele communicatie verwerkt. Het weerspiegelt UAE Federal Decree-Law No. 45 of 2021 en, waar van toepassing, GDPR-beginselen."],
    },
    {
      title: "2. Welke gegevens we verzamelen",
      body: ["We verzamelen door u verstrekte informatie en beperkte automatisch verzamelde technische gegevens."],
      subsections: [{ title: "Persoons- en ordergegevens", list: ["Naam, e-mail, telefoon, verzend- en factuurgegevens.", "Orderdetails, productvoorkeuren en supportcommunicatie.", "Personalisatie-invoer voor orderafhandeling."] }, { title: "Technische en gebruiksgegevens", list: ["Uit IP afgeleide locatiesignalen, browser, apparaattype en sessienavigatie.", "Cookie- en toestemmingsvoorkeuren voor compliance en websitewerking."] }],
    },
    {
      title: "3. Gebruik van persoonsgegevens",
      body: [],
      list: ["Bestellingen en productvragen verwerken, uitvoeren en ondersteunen.", "Klantenservice, transactionele communicatie en servicemeldingen bieden.", "Bruikbaarheid, beveiliging en prestaties van de site verbeteren.", "Analyseprogramma’s alleen bij toestemming uitvoeren.", "Voldoen aan juridische, fiscale en fraudepreventieverplichtingen."],
    },
    {
      title: "4. Rechtsgrond voor verwerking",
      body: ["Voor zover GDPR relevant is, kan verwerking berusten op:"],
      list: ["Toestemming, inclusief optionele cookie-/analysetoestemming.", "Contractuitvoering, inclusief orderverwerking en levering.", "Wettelijke verplichtingen, inclusief boekhouding en compliance-administratie.", "Gerechtvaardigde belangen, inclusief fraudepreventie en sitebeveiliging."],
      subsections: [{ title: "", list: ["Als verwerking op toestemming berust, kunt u die te allen tijde intrekken."] }],
    },
    {
      title: "5. Delen en openbaarmaking",
      body: ["We verkopen geen persoonsgegevens. We delen gegevens alleen waar nodig, onder meer met:"],
      list: ["Betaalproviders, logistieke partners en essentiële leveranciers.", "Professionele adviseurs of autoriteiten waar de wet dat vereist.", "Dienstverleners onder contractuele geheimhoudings- en beveiligingsplichten."],
    },
    {
      title: "6. Derde diensten en verwerkers",
      body: ["We gebruiken geselecteerde derden voor commerce, communicatie, infrastructuur en analyse. Afhankelijk van de configuratie kan dit betaling, hosting/CDN, operationele e-mail en optionele analysetools omvatten.", analyticsLine, "Betaalverwerking: kaart-/betalingsgegevens worden verwerkt door veilige betaalproviders (waaronder Stripe, PayPal en Mollie waar aangeboden) en niet volledig door Bint Saeed bewaard."],
    },
    {
      title: "7. Beveiliging en organisatorische maatregelen",
      body: ["We passen technische en organisatorische maatregelen toe die passen bij de verwerkte gegevens, inclusief toegangscontroles, veilig transport en operationele controles."],
    },
    {
      title: "8. Uw rechten",
      body: ["Onder voorbehoud van toepasselijk recht kunt u inzage, rectificatie, wissing, beperking, overdraagbaarheid of bezwaar tegen bepaalde verwerking vragen."],
      list: ["Niet-essentiële cookietoestemming beheert u via Cookie settings in de footer.", "Identiteitsverificatie kan vereist zijn vóór behandeling van bepaalde verzoeken.", "We reageren binnen toepasselijke wettelijke termijnen."],
    },
    {
      title: "9. Cookies en tracking",
      body: ["We gebruiken essentiële cookies voor websitewerking en optionele analycookies alleen na toestemming. Zie het Cookiebeleid voor details."],
    },
    {
      title: "10. Bewaring",
      body: ["We bewaren persoonsgegevens alleen zolang nodig voor uitvoering, compliance, beveiliging en registratie. Bepaalde handelsdossiers kunnen worden bewaard volgens juridische/zakelijke eisen van de VAE."],
    },
    {
      title: "11. Internationale doorgiften",
      body: ["Wanneer persoonsgegevens over rechtsgebieden worden verwerkt, passen we contractuele en organisatorische controles toe die aansluiten bij toepasselijke UAE- en GDPR-vereisten."],
    },
    {
      title: "12. Klachten en toezichthouders",
      body: ["U kunt een klacht indienen bij een bevoegde toezichthouder in uw rechtsgebied, inclusief in de VAE waar van toepassing."],
    },
    {
      title: "13. Taal en vertalingen",
      body: [LANGUAGE_CLAUSE_SHORT_NL],
    },
    {
      title: "14. Contact en updates",
      body: ["We kunnen dit Privacybeleid herzien. Bijgewerkte versies gelden vanaf publicatie op deze pagina.", "Bint Saeed\nPrivacy- en juridische vragen: legal@bintsaeed.com\nAlgemene vragen: hello@bintsaeed.com"],
    },
  ]
}

const PRIVACY_PT_META: Omit<PolicyContent, 'sections'> = {
  pageTitle: "Política de privacidade",
  breadcrumb: "Política de privacidade",
  homeBreadcrumb: "Início",
  heroLabel: "Legal",
  lastUpdated: "Última atualização: julho de 2026",
  intro: "Esta Política de privacidade explica como a Bint Saeed recolhe, utiliza, protege e divulga dados pessoais no âmbito deste site e serviços relacionados.",
  summaryTitle: "Aviso de privacidade",
  summaryBody: ["Atuamos no quadro jurídico aplicável dos Emirados Árabes Unidos e aplicamos os requisitos de consentimento do RGPD para utilizadores relevantes, incluindo na União Europeia."],
  sectionList: ["1. Aviso de privacidade e quadro legal", "2. Informação que recolhemos", "3. Como utilizamos dados pessoais", "4. Base legal do tratamento", "5. Partilha e divulgação", "6. Serviços e subprocessadores", "7. Segurança e medidas organizacionais", "8. Os seus direitos", "9. Cookies e rastreio", "10. Conservação", "11. Transferências internacionais", "12. Reclamações e autoridades", "13. Idioma e traduções", "14. Contacto e atualizações"],
}

function privacySections_pt(analyticsLine: string): PolicySection[] {
  return [
    {
      title: "1. Aviso de privacidade e quadro legal",
      body: ["Esta política aplica-se a dados pessoais tratados pela Bint Saeed através deste site, percursos de cliente associados e comunicações operacionais. Reflete o UAE Federal Decree-Law No. 45 of 2021 e, quando aplicável, princípios do RGPD."],
    },
    {
      title: "2. Informação que recolhemos",
      body: ["Recolhemos informação que nos fornece e dados técnicos limitados recolhidos automaticamente."],
      subsections: [{ title: "Dados pessoais e de encomenda", list: ["Nome, e-mail, telefone, dados de envio e faturação.", "Detalhes da encomenda, preferências de produto e comunicações de apoio.", "Inputs de personalização fornecidos para cumprimento da encomenda."] }, { title: "Dados técnicos e de utilização", list: ["Sinais de localização derivados do IP, browser, tipo de dispositivo e navegação de sessão.", "Preferências de cookies e consentimento para conformidade e funcionamento do site."] }],
    },
    {
      title: "3. Como utilizamos dados pessoais",
      body: [],
      list: ["Processar, cumprir e apoiar encomendas e pedidos de produto.", "Prestar apoio ao cliente, comunicações transacionais e avisos de serviço.", "Melhorar usabilidade, segurança e desempenho do site.", "Operar programas de analítica apenas com consentimento.", "Cumprir obrigações legais, fiscais e de prevenção de fraude."],
    },
    {
      title: "4. Base legal do tratamento",
      body: ["Quando o RGPD for relevante, o tratamento pode basear-se em:"],
      list: ["Consentimento, incluindo consentimento opcional de cookies/analítica.", "Execução do contrato, incluindo processamento e entrega de encomendas.", "Obrigações legais, incluindo contabilidade e registos de conformidade.", "Interesses legítimos, incluindo prevenção de fraude e segurança do site."],
      subsections: [{ title: "", list: ["Quando o tratamento se baseia no consentimento, pode retirá-lo a qualquer momento."] }],
    },
    {
      title: "5. Partilha e divulgação",
      body: ["Não vendemos dados pessoais. Podemos partilhar dados apenas quando necessário, incluindo com:"],
      list: ["Prestadores de pagamento, parceiros logísticos e fornecedores essenciais.", "Assessores profissionais ou autoridades quando a lei o exija.", "Prestadores sujeitos a obrigações contratuais de confidencialidade e segurança."],
    },
    {
      title: "6. Serviços e subprocessadores",
      body: ["Utilizamos prestadores terceiros selecionados para comércio, comunicações, infraestrutura e analítica. Consoante a configuração, pode incluir pagamento, hosting/CDN, e-mail operacional e ferramentas de analítica opcionais.", analyticsLine, "Processamento de pagamentos: dados de cartão/pagamento são tratados por prestadores seguros (incluindo Stripe, PayPal e Mollie quando oferecidos) e não são armazenados na íntegra pela Bint Saeed."],
    },
    {
      title: "7. Segurança e medidas organizacionais",
      body: ["Aplicamos medidas técnicas e organizacionais adequadas aos dados tratados, incluindo controlos de acesso, transporte seguro e controlos operacionais."],
    },
    {
      title: "8. Os seus direitos",
      body: ["Sob reserva da lei aplicável, pode solicitar acesso, retificação, apagamento, limitação, portabilidade ou oposição a determinados tratamentos."],
      list: ["Pode gerir o consentimento de cookies não essenciais através de Cookie settings no rodapé.", "Pode ser necessária verificação de identidade antes de tratar certos pedidos.", "Respondemos dentro dos prazos legais aplicáveis."],
    },
    {
      title: "9. Cookies e rastreio",
      body: ["Utilizamos cookies essenciais para o funcionamento do site e cookies de analítica opcionais apenas após consentimento. Para detalhes, consulte a Política de cookies."],
    },
    {
      title: "10. Conservação",
      body: ["Conservamos dados pessoais apenas o tempo necessário para cumprimento, conformidade, segurança e arquivo. Certos registos comerciais podem ser conservados segundo requisitos legais/comerciais dos EAU."],
    },
    {
      title: "11. Transferências internacionais",
      body: ["Quando dados pessoais são tratados entre jurisdições, aplicamos controlos contratuais e organizacionais coerentes com requisitos aplicáveis dos EAU e do RGPD."],
    },
    {
      title: "12. Reclamações e autoridades",
      body: ["Pode apresentar reclamação junto de uma autoridade de controlo competente na sua jurisdição, incluindo nos EAU quando aplicável."],
    },
    {
      title: "13. Idioma e traduções",
      body: [LANGUAGE_CLAUSE_SHORT_PT],
    },
    {
      title: "14. Contacto e atualizações",
      body: ["Podemos rever esta Política de privacidade. As versões atualizadas produzem efeitos desde a publicação nesta página.", "Bint Saeed\nPedidos de privacidade e jurídicos: legal@bintsaeed.com\nPedidos gerais: hello@bintsaeed.com"],
    },
  ]
}

const PRIVACY_RU_META: Omit<PolicyContent, 'sections'> = {
  pageTitle: "Политика конфиденциальности",
  breadcrumb: "Политика конфиденциальности",
  homeBreadcrumb: "Главная",
  heroLabel: "Правовая информация",
  lastUpdated: "Последнее обновление: июль 2026",
  intro: "Настоящая Политика конфиденциальности объясняет, как Bint Saeed собирает, использует, защищает и раскрывает персональные данные в связи с этим сайтом и связанными услугами.",
  summaryTitle: "Уведомление о конфиденциальности",
  summaryBody: ["Мы действуем в применимой правовой системе ОАЭ и применяем требования согласия GDPR для соответствующих пользователей, включая пользователей в Европейском союзе."],
  sectionList: ["1. Уведомление и правовая основа", "2. Какие данные мы собираем", "3. Как мы используем персональные данные", "4. Правовые основания обработки", "5. Передача и раскрытие", "6. Сторонние сервисы и обработчики", "7. Безопасность и организационные меры", "8. Ваши права", "9. Файлы cookie и отслеживание", "10. Хранение", "11. Международные передачи", "12. Жалобы и надзорные органы", "13. Язык и переводы", "14. Контакты и обновления"],
}

function privacySections_ru(analyticsLine: string): PolicySection[] {
  return [
    {
      title: "1. Уведомление и правовая основа",
      body: ["Настоящая политика применяется к персональным данным, обрабатываемым Bint Saeed через этот сайт, связанные клиентские пути и операционные сообщения. Она учитывает UAE Federal Decree-Law No. 45 of 2021 и, где применимо, принципы GDPR."],
    },
    {
      title: "2. Какие данные мы собираем",
      body: ["Мы собираем сведения, которые вы предоставляете, и ограниченные технические данные, собираемые автоматически."],
      subsections: [{ title: "Персональные и заказные данные", list: ["Имя, e-mail, телефон, данные доставки и оплаты.", "Сведения о заказе, предпочтениях по товарам и переписке поддержки.", "Данные персонализации для исполнения заказа."] }, { title: "Технические данные и данные об использовании", list: ["Сигналы местоположения на основе IP, браузер, тип устройства и навигация в сессии.", "Предпочтения cookie и согласия для соответствия и работы сайта."] }],
    },
    {
      title: "3. Как мы используем персональные данные",
      body: [],
      list: ["Обрабатывать, исполнять и сопровождать заказы и запросы по товарам.", "Оказывать поддержку, направлять транзакционные сообщения и сервисные уведомления.", "Улучшать удобство, безопасность и производительность сайта.", "Запускать аналитику только при наличии согласия.", "Соблюдать правовые, налоговые обязанности и меры против мошенничества."],
    },
    {
      title: "4. Правовые основания обработки",
      body: ["Если применим GDPR, обработка может опираться на:"],
      list: ["Согласие, включая опциональное согласие на cookie/аналитику.", "Исполнение договора, включая обработку и доставку заказов.", "Правовые обязанности, включая учёт и compliance-записи.", "Законные интересы, включая предотвращение мошенничества и безопасность сайта."],
      subsections: [{ title: "", list: ["Если обработка основана на согласии, вы можете отозвать его в любое время."] }],
    },
    {
      title: "5. Передача и раскрытие",
      body: ["Мы не продаём персональные данные. Мы можем передавать данные только при необходимости, в том числе:"],
      list: ["Платёжным провайдерам, логистическим партнёрам и необходимым подрядчикам.", "Профессиональным консультантам или органам, когда этого требует закон.", "Подрядчикам с договорными обязательствами конфиденциальности и безопасности."],
    },
    {
      title: "6. Сторонние сервисы и обработчики",
      body: ["Мы используем выбранных сторонних провайдеров для торговли, коммуникаций, инфраструктуры и аналитики. В зависимости от конфигурации это может включать оплату, хостинг/CDN, операционную почту и опциональные аналитические инструменты.", analyticsLine, "Обработка платежей: данные карты/платежа обрабатываются безопасными провайдерами (включая Stripe, PayPal и Mollie, где предлагаются) и не хранятся полностью у Bint Saeed."],
    },
    {
      title: "7. Безопасность и организационные меры",
      body: ["Мы применяем технические и организационные меры, соответствующие обрабатываемым данным, включая контроль доступа, защищённую передачу и операционный контроль."],
    },
    {
      title: "8. Ваши права",
      body: ["С учётом применимого права вы можете запросить доступ, исправление, удаление, ограничение, переносимость или возражение против определённой обработки."],
      list: ["Необязательное согласие на cookie можно управлять через Cookie settings в подвале сайта.", "Перед выполнением некоторых запросов может потребоваться проверка личности.", "Мы отвечаем в применимые законные сроки."],
    },
    {
      title: "9. Файлы cookie и отслеживание",
      body: ["Мы используем необходимые cookie для работы сайта и опциональные аналитические cookie только после согласия. Подробности см. в Политике cookie."],
    },
    {
      title: "10. Хранение",
      body: ["Мы храним персональные данные только столько, сколько нужно для исполнения, соответствия, безопасности и учёта. Отдельные торговые записи могут храниться согласно правовым/деловым требованиям ОАЭ."],
    },
    {
      title: "11. Международные передачи",
      body: ["Если персональные данные обрабатываются в разных юрисдикциях, мы применяем договорные и организационные меры, согласованные с применимыми требованиями ОАЭ и GDPR."],
    },
    {
      title: "12. Жалобы и надзорные органы",
      body: ["Вы можете подать жалобу в компетентный надзорный орган в вашей юрисдикции, включая органы ОАЭ, где применимо."],
    },
    {
      title: "13. Язык и переводы",
      body: [LANGUAGE_CLAUSE_SHORT_RU],
    },
    {
      title: "14. Контакты и обновления",
      body: ["Мы можем обновлять эту Политику конфиденциальности. Обновлённые версии действуют с публикации на этой странице.", "Bint Saeed\nЗапросы по конфиденциальности и праву: legal@bintsaeed.com\nОбщие запросы: hello@bintsaeed.com"],
    },
  ]
}

const PRIVACY_ZH_META: Omit<PolicyContent, 'sections'> = {
  pageTitle: "隐私政策",
  breadcrumb: "隐私政策",
  homeBreadcrumb: "首页",
  heroLabel: "法律信息",
  lastUpdated: "最近更新：2026年7月",
  intro: "本隐私政策说明 Bint Saeed 如何就本网站及相关服务收集、使用、保护与披露个人数据。",
  summaryTitle: "隐私提示",
  summaryBody: ["我们在阿拉伯联合酋长国适用法律框架下运营，并对相关用户（包括欧盟用户）适用 GDPR 同意要求。"],
  sectionList: ["1. 隐私提示与法律框架", "2. 我们收集的信息", "3. 我们如何使用个人数据", "4. 处理的法律依据", "5. 共享与披露", "6. 第三方服务与处理者", "7. 安全与组织措施", "8. 您的权利", "9. Cookie 与追踪", "10. 保存期限", "11. 国际传输", "12. 投诉与监管机构", "13. 语言与翻译", "14. 联系与更新"],
}

function privacySections_zh(analyticsLine: string): PolicySection[] {
  return [
    {
      title: "1. 隐私提示与法律框架",
      body: ["本政策适用于 Bint Saeed 通过本网站、相关客户流程与运营沟通处理的个人数据。其体现阿联酋联邦法令 2021 年第 45 号，并在适用时遵循 GDPR 原则。"],
    },
    {
      title: "2. 我们收集的信息",
      body: ["我们收集您直接提供的信息，以及有限的自动收集技术数据。"],
      subsections: [{ title: "个人与订单数据", list: ["姓名、电子邮箱、电话、配送与账单信息。", "订单详情、产品偏好与客服沟通。", "为履行订单而提供的个性化输入。"] }, { title: "技术与使用数据", list: ["基于 IP 的位置信号、浏览器、设备类型与会话浏览。", "用于合规与网站运行的 Cookie 与同意偏好。"] }],
    },
    {
      title: "3. 我们如何使用个人数据",
      body: [],
      list: ["处理、履行并支持订单与产品咨询。", "提供客户服务、交易通知与服务通告。", "改进网站可用性、安全与性能。", "仅在获得同意后运行分析项目。", "履行法律、税务与反欺诈义务。"],
    },
    {
      title: "4. 处理的法律依据",
      body: ["在 GDPR 适用时，处理可基于："],
      list: ["同意，包括可选的 Cookie/分析同意。", "合同履行，包括订单处理与交付。", "法律义务，包括会计与合规记录。", "合法利益，包括反欺诈与网站安全。"],
      subsections: [{ title: "", list: ["若处理基于同意，您可随时撤回。"] }],
    },
    {
      title: "5. 共享与披露",
      body: ["我们不出售个人数据。仅在必要时共享，对象可包括："],
      list: ["支付服务商、物流伙伴与必要供应商。", "法律要求时的专业顾问或主管机关。", "负有合同保密与安全义务的服务商。"],
    },
    {
      title: "6. 第三方服务与处理者",
      body: ["我们使用经筛选的第三方提供商开展电商、通信、基础设施与分析。视配置可包括支付、托管/CDN、运营邮件与可选分析工具。", analyticsLine, "支付处理：银行卡/支付数据由安全支付服务商处理（包括 Stripe、PayPal，以及在提供时的 Mollie），Bint Saeed 不会完整保存。"],
    },
    {
      title: "7. 安全与组织措施",
      body: ["我们采取与所处理数据相适应的技术与组织措施，包括访问控制、安全传输与运营控制。"],
    },
    {
      title: "8. 您的权利",
      body: ["在适用法律范围内，您可请求访问、更正、删除、限制、可携或反对特定处理。"],
      list: ["可通过页脚 Cookie settings 管理非必要 Cookie 同意。", "处理特定权利请求前可能需要身份核验。", "我们在适用法定期限内答复。"],
    },
    {
      title: "9. Cookie 与追踪",
      body: ["我们使用网站运行所需的必要 Cookie，并仅在同意后使用可选分析 Cookie。详情见 Cookie 政策。"],
    },
    {
      title: "10. 保存期限",
      body: ["我们仅在履约、合规、安全与存档所需期限内保存个人数据。某些商业记录可按阿联酋法律/业务要求保存。"],
    },
    {
      title: "11. 国际传输",
      body: ["当个人数据跨法域处理时，我们适用符合阿联酋与 GDPR 要求的合同与组织控制。"],
    },
    {
      title: "12. 投诉与监管机构",
      body: ["您可向所在法域的主管监管机构投诉，包括在适用时向阿联酋主管机关投诉。"],
    },
    {
      title: "13. 语言与翻译",
      body: [LANGUAGE_CLAUSE_SHORT_ZH],
    },
    {
      title: "14. 联系与更新",
      body: ["我们可修订本隐私政策。更新版本自本页发布之日起生效。", "Bint Saeed\n隐私与法律问询：legal@bintsaeed.com\n一般问询：hello@bintsaeed.com"],
    },
  ]
}

export function buildLocalizedAnalyticsLine(lang: EuZhLocale, titles: string[]): string {
  switch (lang) {

    case 'fr':
      return titles.length > 0 ? "Services d’analyse (selon environnement) : {titles}".replace('{titles}', titles.join(', ')) : "Aucun outil d’analyse optionnel n’est actuellement activé dans cet environnement."

    case 'de':
      return titles.length > 0 ? "Analysedienste (umgebungsabhängig): {titles}".replace('{titles}', titles.join(', ')) : "In dieser Umgebung sind derzeit keine optionalen Analyse-Tracker aktiviert."

    case 'it':
      return titles.length > 0 ? "Servizi di analisi (in base all’ambiente): {titles}".replace('{titles}', titles.join(', ')) : "Nessun tracker di analisi opzionale è attualmente abilitato in questo ambiente."

    case 'es':
      return titles.length > 0 ? "Servicios de analítica (según entorno): {titles}".replace('{titles}', titles.join(', ')) : "No hay rastreadores de analítica opcionales activados actualmente en este entorno."

    case 'nl':
      return titles.length > 0 ? "Analysediensten (omgevingsafhankelijk): {titles}".replace('{titles}', titles.join(', ')) : "Er zijn momenteel geen optionele analysetrackers ingeschakeld in deze omgeving."

    case 'pt':
      return titles.length > 0 ? "Serviços de analítica (conforme ambiente): {titles}".replace('{titles}', titles.join(', ')) : "Não existem rastreadores de analítica opcionais atualmente ativos neste ambiente."

    case 'ru':
      return titles.length > 0 ? "Аналитические сервисы (в зависимости от среды): {titles}".replace('{titles}', titles.join(', ')) : "В этой среде сейчас не включены опциональные аналитические трекеры."

    case 'zh':
      return titles.length > 0 ? "分析服务（视环境而定）：{titles}".replace('{titles}', titles.join(', ')) : "当前环境未启用可选分析追踪器。"

  }
}

export function getLocalizedPrivacyContent(lang: EuZhLocale, analyticsLine: string): PolicyContent {
  switch (lang) {

    case 'fr':
      return { ...PRIVACY_FR_META, sections: privacySections_fr(analyticsLine) }

    case 'de':
      return { ...PRIVACY_DE_META, sections: privacySections_de(analyticsLine) }

    case 'it':
      return { ...PRIVACY_IT_META, sections: privacySections_it(analyticsLine) }

    case 'es':
      return { ...PRIVACY_ES_META, sections: privacySections_es(analyticsLine) }

    case 'nl':
      return { ...PRIVACY_NL_META, sections: privacySections_nl(analyticsLine) }

    case 'pt':
      return { ...PRIVACY_PT_META, sections: privacySections_pt(analyticsLine) }

    case 'ru':
      return { ...PRIVACY_RU_META, sections: privacySections_ru(analyticsLine) }

    case 'zh':
      return { ...PRIVACY_ZH_META, sections: privacySections_zh(analyticsLine) }

  }
}
