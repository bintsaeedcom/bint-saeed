import type { FaqBundle } from '@/lib/faq/types'

export const faqIt: FaqBundle = {
  title: 'Domande frequenti',
  subtitle: 'Ordini, spedizioni e policy Bint Saeed',
  categories: [
    {
      name: 'Su Bint Saeed',
      questions: [
        {
          q: "Cos'è Bint Saeed?",
          a:
            'Bint Saeed è una casa di abaya di lusso con base ad Abu Dhabi (EAU). Progetta abaya ispirate ai codici culturali emiratini e offre gioielli e pezzi lifestyle per la donna contemporanea.',
        },
        {
          q: 'Dove si trova Bint Saeed?',
          a:
            'Sede ad Abu Dhabi (EAU). Serviamo Emirati e GCC; spediamo anche internazionalmente dove previsto—verifica destinazioni al checkout.',
        },
        {
          q: 'Cosa crea Bint Saeed?',
          a:
            'Abaya con codici di design emiratini—Al Talli, Khous—insieme a gioielli e oggetti curati per guardaroba e lifestyle.',
        },
        {
          q: 'Dove acquisto in modo ufficiale (non su marketplace)?',
          a:
            'Marchio indipendente e legato al patrimonio: acquisto ufficiale su bintsaeed.com con consegna UAE/GCC (vedi checkout). Nessun rivenditore salvo annunci sui nostri canali—in dubbio acquista solo qui.',
        },
      ],
    },
    {
      name: 'Ordini e spedizioni',
      questions: [
        {
          q: 'Tempi di consegna?',
          a: 'UAE: 1–2 giorni lavorativi (express) o 2–3 (standard). GCC: 3–5 giorni. Internazionale: 7–14 in base al Paese.',
        },
        {
          q: 'Spedizione gratuita?',
          a: 'Sì per ordini sopra 500 AED in UAE/GCC quando indicato.',
        },
        {
          q: 'Tracking?',
          a: 'Sì: codice inviato via email (SMS se disponibile) dopo la spedizione.',
        },
        {
          q: 'Spedite all’estero?',
          a: 'Sì dove disponibile. Dazi e tasse possono essere a carico del cliente.',
        },
      ],
    },
    {
      name: 'Resi e cambi',
      questions: [
        {
          q: 'Politica resi?',
          a:
            'Vendite conclusive; rimborsi solo in casi limitati. Cambio entro 14 giorni per capi non indossati, integri, con cartellino. Saldi e su misura: vendita finale.',
        },
        {
          q: 'Come avviare un reso?',
          a: 'Scrivi a contact@bintsaeed.com con numero ordine. Etichetta prepagata per ordini idonei negli UAE.',
        },
        {
          q: 'Rimborsi?',
          a: 'No. Solo cambio per articoli idonei entro 14 giorni secondo condizioni.',
        },
      ],
    },
    {
      name: 'Taglie e vestibilità',
      questions: [
        {
          q: 'Come scelgo la taglia?',
          a: 'Consulta la guida; tra due taglie spesso conviene la più grande.',
        },
        {
          q: 'Su misura?',
          a: 'Possibile—lunghezze e note al checkout o via assistenza.',
        },
        {
          q: 'Modifiche dopo l’acquisto?',
          a: 'Possibili a pagamento; contattaci entro 7 giorni dalla consegna.',
        },
      ],
    },
    {
      name: 'Pagamenti e sicurezza',
      questions: [
        {
          q: 'Metodi di pagamento?',
          a: 'Carte Visa, Mastercard, Amex, Apple Pay dove attivo, bonifico per alcuni clienti UAE.',
        },
        {
          q: 'Pagamenti sicuri?',
          a: 'Transazioni tramite Stripe (PCI-DSS). Non memorizziamo il numero completo della carta.',
        },
        {
          q: 'Rate?',
          a: 'Pagamento integrale al checkout; eventuali piani saranno comunicati sul sito.',
        },
      ],
    },
  ],
  contact: {
    title: 'Altre domande?',
    description: 'Il nostro team è a disposizione',
  },
}
