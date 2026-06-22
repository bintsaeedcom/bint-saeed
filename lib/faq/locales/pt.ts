import type { FaqBundle } from '@/lib/faq/types'

export const faqPt: FaqBundle = {
  title: 'Perguntas frequentes',
  subtitle: 'Encomendas, envios e políticas da Bint Saeed',
  categories: [
    {
      name: 'Sobre a Bint Saeed',
      questions: [
        {
          q: 'O que é a Bint Saeed?',
          a:
            'A Bint Saeed é uma casa de abayas de luxo sediada em Abu Dhabi (EAU). Desenvolve abayas inspiradas nos códigos culturais emiradenses e oferece joalharia e peças de lifestyle contemporâneas.',
        },
        {
          q: 'Onde fica a sede?',
          a:
            'Sede em Abu Dhabi (EAU). Entrega nos Emirados e no Golfo; envio internacional quando disponível—confirme destinos no checkout.',
        },
        {
          q: 'O que a marca cria?',
          a:
            'Abayas assentes em códigos de design emiradenses—Al Talli, Khous—com joalharia e objetos selecionados para guarda‑roupa e estilo de vida.',
        },
        {
          q: 'Onde comprar oficialmente (fora de marketplaces)?',
          a:
            'Marca independente ligada ao património: compra oficial em bintsaeed.com com envios EAU/Golfo (ver checkout). Sem revendedores salvo anúncio nos nossos canais—em caso de dúvida compre apenas aqui.',
        },
      ],
    },
    {
      name: 'Encomendas e envios',
      questions: [
        {
          q: 'Quais os prazos de entrega?',
          a: 'EAU: 1–2 dias úteis (expresso) ou 2–3 (standard). Golfo: 3–5 dias úteis. Internacional: 7–14 conforme país.',
        },
        {
          q: 'Envio gratuito?',
          a: 'Sim para encomendas acima de 1000 AED nos EAU.',
        },
        {
          q: 'Tracking?',
          a: 'Sim: código por e‑mail (SMS quando disponível) após envio.',
        },
        {
          q: 'Enviam para o estrangeiro?',
          a: 'Sim onde disponível. Taxas alfandegárias podem ser da cliente.',
        },
      ],
    },
    {
      name: 'Devoluções e trocas',
      questions: [
        {
          q: 'Política de devolução?',
          a:
            'Vendas finais; reembolso apenas em casos excecionais. Troca até 14 dias para peças não usadas, intactas e com etiqueta. Saldo e por medida: venda final.',
        },
        {
          q: 'Como iniciar uma devolução?',
          a: 'Escreva para returns@bintsaeed.com com o número da encomenda. Etiqueta pré‑paga para encomendas elegíveis nos EAU.',
        },
        {
          q: 'Reembolso?',
          a: 'Não. Apenas troca para artigos elegíveis dentro de 14 dias conforme condições.',
        },
      ],
    },
    {
      name: 'Tamanhos e caimento',
      questions: [
        {
          q: 'Como escolher o tamanho?',
          a: 'Consulte o guia; entre dois tamanhos, prefira frequentemente o maior.',
        },
        {
          q: 'Feito por medida?',
          a: 'Possível—comprimento e notas no checkout ou via apoio.',
        },
        {
          q: 'Ajustes após compra?',
          a: 'Possíveis com taxa extra; contacte até 7 dias após receção.',
        },
      ],
    },
    {
      name: 'Pagamento e segurança',
      questions: [
        {
          q: 'Métodos de pagamento?',
          a: 'Visa, Mastercard, Amex, Apple Pay quando ativo, transferência para alguns clientes EAU.',
        },
        {
          q: 'Pagamento seguro?',
          a: 'Processamento via Stripe (PCI‑DSS). Não armazenamos o número completo do cartão.',
        },
        {
          q: 'Prestações?',
          a: 'Pagamento integral no checkout; planos futuros serão anunciados no site.',
        },
      ],
    },
  ],
  contact: {
    title: 'Precisa de mais ajuda?',
    description: 'A nossa equipa está disponível para si',
  },
}
