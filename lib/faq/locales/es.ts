import type { FaqBundle } from '@/lib/faq/types'

export const faqEs: FaqBundle = {
  title: 'Preguntas frecuentes',
  subtitle: 'Pedidos, envíos y políticas de Bint Saeed',
  categories: [
    {
      name: 'Sobre Bint Saeed',
      questions: [
        {
          q: '¿Qué es Bint Saeed?',
          a:
            'Bint Saeed es una casa de abayas de lujo con sede en Abu Dabi (EAU). Diseña abayas inspiradas en códigos culturales emiratíes y ofrece joyas y piezas lifestyle contemporáneas.',
        },
        {
          q: '¿Dónde está Bint Saeed?',
          a:
            'Sede en Abu Dabi (EAU). Entregamos en los Emiratos y el Golfo; también internacionalmente cuando esté disponible—confirma destinos al pagar.',
        },
        {
          q: '¿Qué crea Bint Saeed?',
          a:
            'Abayas basadas en códigos de diseño emiratíes—Al Talli, Khous—junto con joyas y piezas seleccionadas para armario y estilo de vida.',
        },
        {
          q: '¿Dónde comprar oficialmente (no en marketplaces)?',
          a:
            'Marca independiente y ligada al patrimonio: compra oficial en bintsaeed.com con envío EAU/Golfo (ver checkout). Sin distribuidores salvo anuncio en nuestros canales—si dudas, compra solo aquí.',
        },
      ],
    },
    {
      name: 'Pedidos y envíos',
      questions: [
        {
          q: '¿Plazos de entrega?',
          a: 'EAU: 1–2 días laborables (express) o 2–3 (estándar). Golfo: 3–5 días. Internacional: 7–14 según país.',
        },
        {
          q: '¿Envío gratis?',
          a: 'Sí en pedidos superiores a 1000 AED en los Emiratos Árabes Unidos.',
        },
        {
          q: '¿Seguimiento?',
          a: 'Sí: número por email (SMS si aplica) tras el envío.',
        },
        {
          q: '¿Envían internacional?',
          a: 'Sí donde esté disponible. Aranceles e impuestos pueden ser del cliente.',
        },
      ],
    },
    {
      name: 'Devoluciones y cambios',
      questions: [
        {
          q: '¿Política de devolución?',
          a:
            'Ventas finales; reembolsos solo en casos limitados. Cambio en 14 días si la pieza no se ha usado, está intacta y con etiquetas. Rebajas y a medida: venta final.',
        },
        {
          q: '¿Cómo inicio un cambio?',
          a: 'Escribe a contact@bintsaeed.com con tu número de pedido. Etiqueta prepagada para pedidos elegibles en EAU.',
        },
        {
          q: '¿Reembolso?',
          a: 'No. Solo cambio para artículos elegibles en 14 días según condiciones.',
        },
      ],
    },
    {
      name: 'Tallas y ajuste',
      questions: [
        {
          q: '¿Cómo elijo talla?',
          a: 'Consulta la guía; entre dos tallas suele recomendarse la mayor.',
        },
        {
          q: '¿Medida personalizada?',
          a: 'Posible—longitud y notas en checkout o contacto.',
        },
        {
          q: '¿Arreglos tras la compra?',
          a: 'Posibles con coste extra; escríbenos en 7 días tras recibir.',
        },
      ],
    },
    {
      name: 'Pago y seguridad',
      questions: [
        {
          q: '¿Métodos de pago?',
          a: 'Visa, Mastercard, Amex, Apple Pay si está activo, transferencia para algunos clientes EAU.',
        },
        {
          q: '¿Pago seguro?',
          a: 'Pagos con Stripe (PCI-DSS). No guardamos tu tarjeta completa.',
        },
        {
          q: '¿Plazos en cuotas?',
          a: 'Pago íntegro en checkout hoy; planes futuros se anunciarán en la web.',
        },
      ],
    },
  ],
  contact: {
    title: '¿Necesitas más ayuda?',
    description: 'Nuestro equipo está para ayudarte',
  },
}
