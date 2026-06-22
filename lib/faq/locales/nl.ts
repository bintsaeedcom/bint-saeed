import type { FaqBundle } from '@/lib/faq/types'

export const faqNl: FaqBundle = {
  title: 'Veelgestelde vragen',
  subtitle: 'Bestellen, levering en beleid bij Bint Saeed',
  categories: [
    {
      name: 'Over Bint Saeed',
      questions: [
        {
          q: 'Wat is Bint Saeed?',
          a:
            'Bint Saeed is een luxe abayahuis in Abu Dhabi (VAE). Het ontwerpt abaya’s langs emiratische cultuurcodes en biedt sieraden en lifestyle‑stukken voor een hedendaagse garderobe.',
        },
        {
          q: 'Waar zit Bint Saeed?',
          a:
            'Hoofdzetel in Abu Dhabi (VAE). Levering in de VAE en GCC; internationaal waar aangeboden—controleer bestemmingen bij afrekenen.',
        },
        {
          q: 'Wat maakt Bint Saeed?',
          a:
            'Abaya’s met emiratische designcodes—Al Talli, Khous—plus sieraden en geselecteerde objecten voor stijl en wonen.',
        },
        {
          q: 'Waar koop ik officieel (niet via marketplaces)?',
          a:
            'Onafhankelijk erfgoedmerk: officiële aankoop via bintsaeed.com met levering VAE/GCC (zie checkout). Geen externe verkopers tenzij aangekondigd—koop bij twijfel alleen hier.',
        },
      ],
    },
    {
      name: 'Bestelling & levering',
      questions: [
        {
          q: 'Hoe lang duurt levering?',
          a: 'VAE: 1–2 werkdagen (express) of 2–3 (standaard). GCC: 3–5 werkdagen. Internationaal: 7–14 dagen afhankelijk van land.',
        },
        {
          q: 'Gratis verzending?',
          a: 'Ja bij bestellingen boven 1000 AED in de VAE.',
        },
        {
          q: 'Tracking?',
          a: 'Ja: track & trace per e‑mail (SMS indien mogelijk) na verzending.',
        },
        {
          q: 'Internationale verzending?',
          a: 'Ja waar beschikbaar. Douane en belastingen kunnen voor de ontvanger zijn.',
        },
      ],
    },
    {
      name: 'Retour & ruilen',
      questions: [
        {
          q: 'Retourbeleid?',
          a:
            'Verkopen zijn definitief; terugbetaling alleen in uitzonderlijke gevallen. Ruilen binnen 14 dagen voor ongedragen, onbeschadigde artikelen met label. Sale en maatwerk: definitief.',
        },
        {
          q: 'Hoe start ik een retour?',
          a: 'Mail returns@bintsaeed.com met ordernummer. Voor geschikte VAE‑orders eventueel voorbetaald label.',
        },
        {
          q: 'Terugbetaling?',
          a: 'Nee. Alleen ruil voor geschikte items binnen 14 dagen volgens voorwaarden.',
        },
      ],
    },
    {
      name: 'Maten & pasvorm',
      questions: [
        {
          q: 'Welke maat kies ik?',
          a: 'Gebruik de maattabel; tussen twee maten vaak één maat groter voor comfort.',
        },
        {
          q: 'Op maat?',
          a: 'Mogelijk—lengte/notities bij afrekenen of via klantenservice.',
        },
        {
          q: 'Aanpassingen na aankoop?',
          a: 'Mogelijk tegen fee; neem binnen 7 dagen na ontvangst contact op.',
        },
      ],
    },
    {
      name: 'Betaling & veiligheid',
      questions: [
        {
          q: 'Betaalmethodes?',
          a: 'Visa, Mastercard, Amex, Apple Pay waar actief, overschrijving voor sommige VAE‑klanten.',
        },
        {
          q: 'Veilig betalen?',
          a: 'Transacties via Stripe (PCI‑DSS). Volledige kaartnummers slaan wij niet op.',
        },
        {
          q: 'Gespreid betalen?',
          a: 'Nu volledige betaling bij afrekenen; latere opties volgen via de site.',
        },
      ],
    },
  ],
  contact: {
    title: 'Nog vragen?',
    description: 'Ons team helpt je graag',
  },
}
