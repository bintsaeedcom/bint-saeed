import type { FaqBundle } from '@/lib/faq/types'

export const faqDe: FaqBundle = {
  title: 'Häufige Fragen',
  subtitle: 'Bestellung, Versand und Richtlinien bei Bint Saeed',
  categories: [
    {
      name: 'Über Bint Saeed',
      questions: [
        {
          q: 'Was ist Bint Saeed?',
          a:
            'Bint Saeed ist ein Luxus‑Abaya‑Haus mit Sitz in Abu Dhabi (VAE). Wir entwerfen Abayas entlang emiratischer Kulturcodes und bieten Schmuck sowie Lifestyle‑Pieces für den globalen Alltag.',
        },
        {
          q: 'Wo ist Bint Saeed ansässig?',
          a:
            'Hauptsitz Abu Dhabi (VAE). Lieferung in die VAE und GCC‑Staaten; international wo angeboten—Ziele im Checkout prüfen.',
        },
        {
          q: 'Was bietet Bint Saeed an?',
          a:
            'Abayas mit emiratischen Designcodes—Al‑Talli, Khous—dazu Schmuck und kuratierte Objekte für zeitgemäße Garderoben.',
        },
        {
          q: 'Wo kaufe ich offiziell—nicht über Marktplätze?',
          a:
            'Unabhängige Erbe‑Marke: offiziell auf bintsaeed.com mit Lieferung VAE/GCC (siehe Checkout). Keine Drittpartner ohne unsere Ankündigung—bei Zweifeln nur hier kaufen.',
        },
      ],
    },
    {
      name: 'Bestellung & Versand',
      questions: [
        {
          q: 'Wie lange dauert die Lieferung?',
          a: 'VAE: 1–2 Werktage (Express) oder 2–3 (Standard). GCC: 3–5 Werktage. International: 7–14 je nach Land.',
        },
        {
          q: 'Kostenloser Versand?',
          a: 'Ja bei Bestellungen über 500 AED innerhalb VAE/GCC, wenn ausgewiesen.',
        },
        {
          q: 'Sendungsverfolgung?',
          a: 'Ja—Tracking per E‑Mail (SMS wenn möglich) nach Versand.',
        },
        {
          q: 'Internationaler Versand?',
          a: 'Ja, wo verfügbar. Zölle/Steuern können beim Empfänger anfallen.',
        },
      ],
    },
    {
      name: 'Rückgabe & Umtausch',
      questions: [
        {
          q: 'Rückgaberichtlinie?',
          a:
            'Käufe sind endgültig; Erstattungen nur in Ausnahmefällen. Umtausch innerhalb von 14 Tagen für ungetragene, makellose Artikel mit Etikett. Sale und Maßanfertigung: finale Verkäufe.',
        },
        {
          q: 'Wie starte ich eine Rücksendung?',
          a: 'Mail an contact@bintsaeed.com mit Bestellnummer. Für berechtigte VAE‑Bestellungen ggf. frankiertes Label.',
        },
        {
          q: 'Erstattung?',
          a: 'Nein. Umtausch nur bei berechtigten Artikeln innerhalb von 14 Tagen nach Bedingungen.',
        },
      ],
    },
    {
      name: 'Größe & Passform',
      questions: [
        {
          q: 'Wie finde ich meine Größe?',
          a: 'Größentabelle nutzen; zwischen zwei Größen oft eine Nummer größer für Komfort.',
        },
        {
          q: 'Maßanfertigung?',
          a: 'Möglich—Länge/Notizen im Checkout oder Kontakt zum Team.',
        },
        {
          q: 'Änderungen nach Kauf?',
          a: 'Gegen Gebühr möglich; innerhalb von 7 Tagen nach Erhalt melden.',
        },
      ],
    },
    {
      name: 'Zahlung & Sicherheit',
      questions: [
        {
          q: 'Zahlungsarten?',
          a: 'Visa, Mastercard, Amex, Apple Pay wo aktiv, Banküberweisung für ausgewählte VAE‑Kunden.',
        },
        {
          q: 'Sichere Zahlung?',
          a: 'Abwicklung über Stripe (PCI‑DSS). Keine vollständige Speicherung Ihrer Kartendaten bei uns.',
        },
        {
          q: 'Ratenzahlung?',
          a: 'Derzeit volle Zahlung am Checkout; spätere Modelle werden ggf. angekündigt.',
        },
      ],
    },
  ],
  contact: {
    title: 'Noch Fragen?',
    description: 'Unser Kundenservice hilft Ihnen gerne',
  },
}
