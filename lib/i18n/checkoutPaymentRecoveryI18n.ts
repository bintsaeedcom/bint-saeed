import type { AppLocale } from '@/lib/i18n/routing'

export type CheckoutPaymentRecoveryCopy = {
  title: string
  eyebrowCancelled: string
  eyebrowFailed: string
  /** `{provider}` = payment supplier display name when known. */
  bodyCancelled: string
  bodyFailed: string
  bodyCancelledGeneric: string
  bodyFailedGeneric: string
  dismissAria: string
}

const EN: CheckoutPaymentRecoveryCopy = {
  title: 'Your order is still waiting for you',
  eyebrowCancelled: 'Payment cancelled',
  eyebrowFailed: 'Payment not completed',
  bodyCancelled:
    'Your {provider} checkout wasn’t completed, but your selected pieces are still in your bag. You can continue with {provider} below or choose another payment method.',
  bodyFailed:
    'Your {provider} payment wasn’t completed, but your selected pieces are still in your bag. You can try again below or choose another payment method.',
  bodyCancelledGeneric:
    'Your payment wasn’t completed, but your selected pieces are still in your bag. You can continue below or choose another payment method.',
  bodyFailedGeneric:
    'Your payment wasn’t completed, but your selected pieces are still in your bag. You can try again below or choose another payment method.',
  dismissAria: 'Dismiss notification',
}

const AR: CheckoutPaymentRecoveryCopy = {
  title: 'طلبك لا يزال بانتظارك',
  eyebrowCancelled: 'تم إلغاء الدفع',
  eyebrowFailed: 'لم يكتمل الدفع',
  bodyCancelled:
    'لم يكتمل الدفع عبر {provider}، لكن قطعك المختارة ما زالت في سلتك. يمكنك المتابعة مع {provider} أدناه أو اختيار طريقة دفع أخرى.',
  bodyFailed:
    'لم تكتمل عملية الدفع عبر {provider}، لكن قطعك المختارة ما زالت في سلتك. يمكنك المحاولة مرة أخرى أدناه أو اختيار طريقة دفع أخرى.',
  bodyCancelledGeneric:
    'لم يكتمل الدفع، لكن قطعك المختارة ما زالت في سلتك. يمكنك المتابعة أدناه أو اختيار طريقة دفع أخرى.',
  bodyFailedGeneric:
    'لم يكتمل الدفع، لكن قطعك المختارة ما زالت في سلتك. يمكنك المحاولة مرة أخرى أدناه أو اختيار طريقة دفع أخرى.',
  dismissAria: 'إغلاق الإشعار',
}

const FR: CheckoutPaymentRecoveryCopy = {
  title: 'Votre commande vous attend encore',
  eyebrowCancelled: 'Paiement annulé',
  eyebrowFailed: 'Paiement non abouti',
  bodyCancelled:
    'Votre paiement {provider} n’a pas été mené à terme, mais vos pièces restent dans votre panier. Vous pouvez poursuivre avec {provider} ci-dessous ou choisir un autre moyen de paiement.',
  bodyFailed:
    'Votre paiement {provider} n’a pas abouti, mais vos pièces restent dans votre panier. Vous pouvez réessayer ci-dessous ou choisir un autre moyen de paiement.',
  bodyCancelledGeneric:
    'Votre paiement n’a pas été mené à terme, mais vos pièces restent dans votre panier. Vous pouvez poursuivre ci-dessous ou choisir un autre moyen de paiement.',
  bodyFailedGeneric:
    'Votre paiement n’a pas abouti, mais vos pièces restent dans votre panier. Vous pouvez réessayer ci-dessous ou choisir un autre moyen de paiement.',
  dismissAria: 'Fermer la notification',
}

const IT: CheckoutPaymentRecoveryCopy = {
  title: 'Il tuo ordine ti sta ancora aspettando',
  eyebrowCancelled: 'Pagamento annullato',
  eyebrowFailed: 'Pagamento non completato',
  bodyCancelled:
    'Il checkout con {provider} non è stato completato, ma i pezzi selezionati sono ancora nella shopping bag. Puoi continuare con {provider} qui sotto o scegliere un altro metodo di pagamento.',
  bodyFailed:
    'Il pagamento con {provider} non è stato completato, ma i pezzi selezionati sono ancora nella shopping bag. Puoi riprovare qui sotto o scegliere un altro metodo di pagamento.',
  bodyCancelledGeneric:
    'Il pagamento non è stato completato, ma i pezzi selezionati sono ancora nella shopping bag. Puoi continuare qui sotto o scegliere un altro metodo di pagamento.',
  bodyFailedGeneric:
    'Il pagamento non è stato completato, ma i pezzi selezionati sono ancora nella shopping bag. Puoi riprovare qui sotto o scegliere un altro metodo di pagamento.',
  dismissAria: 'Chiudi notifica',
}

const DE: CheckoutPaymentRecoveryCopy = {
  title: 'Ihre Bestellung wartet noch auf Sie',
  eyebrowCancelled: 'Zahlung abgebrochen',
  eyebrowFailed: 'Zahlung nicht abgeschlossen',
  bodyCancelled:
    'Ihr {provider}-Checkout wurde nicht abgeschlossen, doch Ihre ausgewählten Stücke bleiben in Ihrer Tasche. Sie können unten mit {provider} fortfahren oder eine andere Zahlungsart wählen.',
  bodyFailed:
    'Ihre {provider}-Zahlung wurde nicht abgeschlossen, doch Ihre ausgewählten Stücke bleiben in Ihrer Tasche. Sie können es unten erneut versuchen oder eine andere Zahlungsart wählen.',
  bodyCancelledGeneric:
    'Ihre Zahlung wurde nicht abgeschlossen, doch Ihre ausgewählten Stücke bleiben in Ihrer Tasche. Sie können unten fortfahren oder eine andere Zahlungsart wählen.',
  bodyFailedGeneric:
    'Ihre Zahlung wurde nicht abgeschlossen, doch Ihre ausgewählten Stücke bleiben in Ihrer Tasche. Sie können es unten erneut versuchen oder eine andere Zahlungsart wählen.',
  dismissAria: 'Hinweis schließen',
}

const NL: CheckoutPaymentRecoveryCopy = {
  title: 'Uw bestelling wacht nog op u',
  eyebrowCancelled: 'Betaling geannuleerd',
  eyebrowFailed: 'Betaling niet voltooid',
  bodyCancelled:
    'Uw {provider}-checkout is niet voltooid, maar uw geselecteerde stukken blijven in uw tas. U kunt hieronder verdergaan met {provider} of een andere betaalmethode kiezen.',
  bodyFailed:
    'Uw {provider}-betaling is niet voltooid, maar uw geselecteerde stukken blijven in uw tas. U kunt het hieronder opnieuw proberen of een andere betaalmethode kiezen.',
  bodyCancelledGeneric:
    'Uw betaling is niet voltooid, maar uw geselecteerde stukken blijven in uw tas. U kunt hieronder verdergaan of een andere betaalmethode kiezen.',
  bodyFailedGeneric:
    'Uw betaling is niet voltooid, maar uw geselecteerde stukken blijven in uw tas. U kunt het hieronder opnieuw proberen of een andere betaalmethode kiezen.',
  dismissAria: 'Melding sluiten',
}

const PT: CheckoutPaymentRecoveryCopy = {
  title: 'A sua encomenda ainda o aguarda',
  eyebrowCancelled: 'Pagamento cancelado',
  eyebrowFailed: 'Pagamento não concluído',
  bodyCancelled:
    'O checkout com {provider} não foi concluído, mas as suas peças selecionadas permanecem no saco. Pode continuar com {provider} abaixo ou escolher outro método de pagamento.',
  bodyFailed:
    'O pagamento com {provider} não foi concluído, mas as suas peças selecionadas permanecem no saco. Pode tentar novamente abaixo ou escolher outro método de pagamento.',
  bodyCancelledGeneric:
    'O pagamento não foi concluído, mas as suas peças selecionadas permanecem no saco. Pode continuar abaixo ou escolher outro método de pagamento.',
  bodyFailedGeneric:
    'O pagamento não foi concluído, mas as suas peças selecionadas permanecem no saco. Pode tentar novamente abaixo ou escolher outro método de pagamento.',
  dismissAria: 'Fechar notificação',
}

const ES: CheckoutPaymentRecoveryCopy = {
  title: 'Tu pedido sigue esperándote',
  eyebrowCancelled: 'Pago cancelado',
  eyebrowFailed: 'Pago no completado',
  bodyCancelled:
    'Tu checkout con {provider} no se completó, pero tus piezas seleccionadas siguen en la bolsa. Puedes continuar con {provider} abajo o elegir otro método de pago.',
  bodyFailed:
    'Tu pago con {provider} no se completó, pero tus piezas seleccionadas siguen en la bolsa. Puedes intentarlo de nuevo abajo o elegir otro método de pago.',
  bodyCancelledGeneric:
    'Tu pago no se completó, pero tus piezas seleccionadas siguen en la bolsa. Puedes continuar abajo o elegir otro método de pago.',
  bodyFailedGeneric:
    'Tu pago no se completó, pero tus piezas seleccionadas siguen en la bolsa. Puedes intentarlo de nuevo abajo o elegir otro método de pago.',
  dismissAria: 'Cerrar aviso',
}

const RU: CheckoutPaymentRecoveryCopy = {
  title: 'Ваш заказ всё ещё ждёт вас',
  eyebrowCancelled: 'Оплата отменена',
  eyebrowFailed: 'Оплата не завершена',
  bodyCancelled:
    'Оформление через {provider} не было завершено, но выбранные вещи остаются в сумке. Вы можете продолжить с {provider} ниже или выбрать другой способ оплаты.',
  bodyFailed:
    'Оплата через {provider} не была завершена, но выбранные вещи остаются в сумке. Вы можете попробовать снова ниже или выбрать другой способ оплаты.',
  bodyCancelledGeneric:
    'Оплата не была завершена, но выбранные вещи остаются в сумке. Вы можете продолжить ниже или выбрать другой способ оплаты.',
  bodyFailedGeneric:
    'Оплата не была завершена, но выбранные вещи остаются в сумке. Вы можете попробовать снова ниже или выбрать другой способ оплаты.',
  dismissAria: 'Закрыть уведомление',
}

const ZH: CheckoutPaymentRecoveryCopy = {
  title: '您的订单仍在等候',
  eyebrowCancelled: '付款已取消',
  eyebrowFailed: '付款未完成',
  bodyCancelled:
    '您的 {provider} 结账未完成，但所选单品仍保留在购物袋中。您可在下方继续使用 {provider}，或选择其他付款方式。',
  bodyFailed:
    '您的 {provider} 付款未完成，但所选单品仍保留在购物袋中。您可在下方重试，或选择其他付款方式。',
  bodyCancelledGeneric:
    '付款未完成，但所选单品仍保留在购物袋中。您可在下方继续，或选择其他付款方式。',
  bodyFailedGeneric:
    '付款未完成，但所选单品仍保留在购物袋中。您可在下方重试，或选择其他付款方式。',
  dismissAria: '关闭提示',
}

const ID: CheckoutPaymentRecoveryCopy = {
  title: 'Pesanan Anda masih menunggu',
  eyebrowCancelled: 'Pembayaran dibatalkan',
  eyebrowFailed: 'Pembayaran belum selesai',
  bodyCancelled:
    'Checkout {provider} Anda belum selesai, tetapi potongan pilihan tetap ada di tas. Anda dapat melanjutkan dengan {provider} di bawah atau memilih metode pembayaran lain.',
  bodyFailed:
    'Pembayaran {provider} Anda belum selesai, tetapi potongan pilihan tetap ada di tas. Anda dapat mencoba lagi di bawah atau memilih metode pembayaran lain.',
  bodyCancelledGeneric:
    'Pembayaran belum selesai, tetapi potongan pilihan tetap ada di tas. Anda dapat melanjutkan di bawah atau memilih metode pembayaran lain.',
  bodyFailedGeneric:
    'Pembayaran belum selesai, tetapi potongan pilihan tetap ada di tas. Anda dapat mencoba lagi di bawah atau memilih metode pembayaran lain.',
  dismissAria: 'Tutup pemberitahuan',
}

const MS: CheckoutPaymentRecoveryCopy = {
  title: 'Pesanan anda masih menunggu',
  eyebrowCancelled: 'Pembayaran dibatalkan',
  eyebrowFailed: 'Pembayaran tidak selesai',
  bodyCancelled:
    'Checkout {provider} anda tidak selesai, tetapi potongan dipilih kekal dalam beg. Anda boleh teruskan dengan {provider} di bawah atau pilih kaedah pembayaran lain.',
  bodyFailed:
    'Pembayaran {provider} anda tidak selesai, tetapi potongan dipilih kekal dalam beg. Anda boleh cuba lagi di bawah atau pilih kaedah pembayaran lain.',
  bodyCancelledGeneric:
    'Pembayaran tidak selesai, tetapi potongan dipilih kekal dalam beg. Anda boleh teruskan di bawah atau pilih kaedah pembayaran lain.',
  bodyFailedGeneric:
    'Pembayaran tidak selesai, tetapi potongan dipilih kekal dalam beg. Anda boleh cuba lagi di bawah atau pilih kaedah pembayaran lain.',
  dismissAria: 'Tutup pemberitahuan',
}

const BY_LOCALE: Record<AppLocale, CheckoutPaymentRecoveryCopy> = {
  en: EN,
  ar: AR,
  fr: FR,
  it: IT,
  de: DE,
  nl: NL,
  pt: PT,
  es: ES,
  ru: RU,
  zh: ZH,
  id: ID,
  ms: MS,
}

export function getCheckoutPaymentRecoveryCopy(
  locale: AppLocale | string,
): CheckoutPaymentRecoveryCopy {
  if (locale in BY_LOCALE) return BY_LOCALE[locale as AppLocale]
  return EN
}

export function withProviderName(template: string, providerName: string): string {
  return template.replaceAll('{provider}', providerName)
}
