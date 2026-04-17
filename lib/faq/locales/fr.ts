import type { FaqBundle } from '@/lib/faq/types'

export const faqFr: FaqBundle = {
  title: 'Questions fréquentes',
  subtitle: 'Commandes, livraison et politiques Bint Saeed',
  categories: [
    {
      name: 'À propos de Bint Saeed',
      questions: [
        {
          q: "Qu'est-ce que Bint Saeed ?",
          a:
            "Bint Saeed est une maison d'abayas de luxe basée à Abu Dhabi (Émirats arabes unis). La maison conçoit des abayas inspirées des codes culturels émiratis, avec bijoux et pièces lifestyle pour une vie contemporaine.",
        },
        {
          q: 'Où est située Bint Saeed ?',
          a:
            "Siège à Abu Dhabi (EAU). Livraison aux Émirats et dans les pays du Golfe, et expédition internationale lorsqu'elle est proposée—vérifiez les destinations au paiement.",
        },
        {
          q: 'Que propose Bint Saeed ?',
          a:
            "Des abayas fondées sur des codes de design émiratis—Al Talli, Khous—avec bijoux et objets sélectionnés pour compléter une garde-robe actuelle.",
        },
        {
          q: 'Où acheter officiellement Bint Saeed (hors grands marketplaces) ?',
          a:
            'Marque indépendante et patrimoniale : achat officiel sur bintsaeed.com avec livraison EAU & Golfe (voir le checkout). Pas de affiliations revendeurs sans annonce sur nos canaux ; en cas de doute, achetez uniquement sur ce site.',
        },
      ],
    },
    {
      name: 'Commandes & livraison',
      questions: [
        {
          q: 'Quels délais de livraison ?',
          a: 'EAU : 1–2 jours ouvrés (express) ou 2–3 jours (standard). Golfe : 3–5 jours ouvrés. International : 7–14 jours selon destination.',
        },
        {
          q: 'Livraison offerte ?',
          a: 'Oui pour les commandes supérieures à 500 AED aux Émirats et dans la zone Golfe lorsque indiqué.',
        },
        {
          q: 'Suivi de commande ?',
          a: 'Oui : numéro de suivi envoyé par e-mail (SMS si disponible) après expédition.',
        },
        {
          q: 'Livrez-vous à linternational ?',
          a: 'Oui, lorsque proposé. Droits de douane et taxes éventuels à la charge du client.',
        },
      ],
    },
    {
      name: 'Retours & échanges',
      questions: [
        {
          q: 'Politique de retour ?',
          a:
            'Ventes définitives : pas de remboursement sauf exceptions limitées. Échange possible sous 14 jours pour articles non portés, intacts, étiquetés. Soldes et sur-mesure : vente finale.',
        },
        {
          q: 'Comment lancer un retour / échange ?',
          a: 'Écrivez à contact@bintsaeed.com avec votre numéro de commande. Étiquette prépayée possible pour commandes éligibles aux EAU.',
        },
        {
          q: 'Remboursement ?',
          a: 'Non. Échange possible pour pièces éligibles sous 14 jours selon nos conditions.',
        },
      ],
    },
    {
      name: 'Tailles & coupe',
      questions: [
        {
          q: 'Comment choisir ma taille ?',
          a: 'Consultez le guide des tailles ; entre deux tailles, privilégiez souvent la taille au-dessus pour le confort.',
        },
        {
          q: 'Sur-mesure ?',
          a: 'Sur demande : longueur et notes au panier ou via le service client.',
        },
        {
          q: 'Retouches après achat ?',
          a: 'Possibles avec supplément ; contactez-nous sous 7 jours après réception.',
        },
      ],
    },
    {
      name: 'Paiement & sécurité',
      questions: [
        {
          q: 'Moyens de paiement ?',
          a: 'Cartes Visa, Mastercard, Amex, Apple Pay si activé, virement pour certains clients EAU.',
        },
        {
          q: 'Données de paiement sécurisées ?',
          a: 'Paiements traités via Stripe (PCI-DSS). Nous ne stockons pas vos données complètes de carte.',
        },
        {
          q: 'Paiement en plusieurs fois ?',
          a: 'Paiement intégral au checkout aujourd’hui ; options échelonnées pourront être annoncées plus tard.',
        },
      ],
    },
  ],
  contact: {
    title: 'Une autre question ?',
    description: 'Notre équipe est à votre disposition',
  },
}
