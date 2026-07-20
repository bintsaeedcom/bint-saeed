import type { AppLocale } from '@/lib/i18n/routing'

export type CheckoutSuccessCopy = {
  breadcrumb: string
  title: string
  subtitle: string
  confirmingTitle?: string
  confirmingSubtitle?: string
  pendingTitle?: string
  pendingSubtitle?: string
  sessionReference: string
  keepExploring: string
  keepExploringBody: string
  stayCloseHeading: string
  stayCloseHint: string
}

export type CheckoutSuccessCopyResolved = Required<CheckoutSuccessCopy>

const EN: CheckoutSuccessCopy = {
  breadcrumb: 'Order confirmed',
  title: 'Order Confirmed',
  subtitle: 'Thank you for your order. You will receive a confirmation email shortly.',
  confirmingTitle: 'Confirming your order',
  confirmingSubtitle: 'Please wait a moment while we verify your payment.',
  pendingTitle: 'Payment received',
  pendingSubtitle:
    'If you completed payment, a confirmation email is on its way. Keep this page open briefly, or check your inbox.',
  sessionReference: 'Order reference',
  keepExploring: 'While you wait',
  keepExploringBody: 'Explore the pieces that carry the Bint Saeed story forward.',
  stayCloseHeading: 'Stay close to the House',
  stayCloseHint: 'Private releases, care notes, and new chapters — by email, only when it matters.',
}

const AR: CheckoutSuccessCopy = {
  breadcrumb: 'تأكيد الطلب',
  title: 'تم تأكيد الطلب',
  subtitle: 'شكراً لطلبك. ستصلك رسالة تأكيد عبر البريد الإلكتروني قريباً.',
  sessionReference: 'رقم الطلب',
  keepExploring: 'بينما تنتظرين',
  keepExploringBody: 'استكشفي القطع التي تواصل قصة Bint Saeed.',
  stayCloseHeading: 'ابقي قريبة من الدار',
  stayCloseHint: 'إصدارات خاصة وملاحظات عناية وفصول جديدة — عبر البريد، فقط عندما يهم الأمر.',
}

const FR: CheckoutSuccessCopy = {
  breadcrumb: 'Commande confirmée',
  title: 'Commande confirmée',
  subtitle: 'Merci pour votre commande. Vous recevrez bientôt un e-mail de confirmation.',
  sessionReference: 'Référence de commande',
  keepExploring: 'En attendant',
  keepExploringBody: 'Explorez les pièces qui prolongent l’histoire de Bint Saeed.',
  stayCloseHeading: 'Rester proche de la maison',
  stayCloseHint: 'Lancements privés, conseils d’entretien et nouveaux chapitres — par e-mail, seulement lorsque cela compte.',
}

const IT: CheckoutSuccessCopy = {
  breadcrumb: 'Ordine confermato',
  title: 'Ordine confermato',
  subtitle: 'Grazie per il tuo ordine. Riceverai a breve un’e-mail di conferma.',
  sessionReference: 'Riferimento ordine',
  keepExploring: 'Nel frattempo',
  keepExploringBody: 'Esplora i pezzi che portano avanti la storia di Bint Saeed.',
  stayCloseHeading: 'Resta vicina alla maison',
  stayCloseHint: 'Anteprime private, note di cura e nuovi capitoli — via e-mail, solo quando conta.',
}

const DE: CheckoutSuccessCopy = {
  breadcrumb: 'Bestellung bestätigt',
  title: 'Bestellung bestätigt',
  subtitle: 'Vielen Dank für Ihre Bestellung. Sie erhalten in Kürze eine Bestätigungs-E-Mail.',
  sessionReference: 'Bestellreferenz',
  keepExploring: 'Derweil',
  keepExploringBody: 'Entdecken Sie die Stücke, die die Geschichte von Bint Saeed weitertragen.',
  stayCloseHeading: 'Bleiben Sie dem Haus nahe',
  stayCloseHint: 'Private Releases, Pflegenotizen und neue Kapitel — per E-Mail, nur wenn es zählt.',
}

const NL: CheckoutSuccessCopy = {
  breadcrumb: 'Bestelling bevestigd',
  title: 'Bestelling bevestigd',
  subtitle: 'Dank u voor uw bestelling. U ontvangt binnenkort een bevestigingsmail.',
  sessionReference: 'Bestelreferentie',
  keepExploring: 'Ondertussen',
  keepExploringBody: 'Ontdek de stukken die het verhaal van Bint Saeed voortzetten.',
  stayCloseHeading: 'Blijf dicht bij het Huis',
  stayCloseHint: 'Privéreleases, verzorgingsnotities en nieuwe hoofdstukken — per e-mail, alleen wanneer het ertoe doet.',
}

const PT: CheckoutSuccessCopy = {
  breadcrumb: 'Encomenda confirmada',
  title: 'Encomenda confirmada',
  subtitle: 'Obrigada pela sua encomenda. Receberá em breve um e-mail de confirmação.',
  sessionReference: 'Referência da encomenda',
  keepExploring: 'Enquanto espera',
  keepExploringBody: 'Explore as peças que levam a história da Bint Saeed mais longe.',
  stayCloseHeading: 'Fique perto da maison',
  stayCloseHint: 'Lançamentos privados, notas de cuidado e novos capítulos — por e-mail, apenas quando importa.',
}

const ES: CheckoutSuccessCopy = {
  breadcrumb: 'Pedido confirmado',
  title: 'Pedido confirmado',
  subtitle: 'Gracias por tu pedido. Recibirás un correo de confirmación en breve.',
  sessionReference: 'Referencia del pedido',
  keepExploring: 'Mientras esperas',
  keepExploringBody: 'Explora las piezas que llevan adelante la historia de Bint Saeed.',
  stayCloseHeading: 'Quédate cerca de la maison',
  stayCloseHint: 'Lanzamientos privados, notas de cuidado y nuevos capítulos — por correo, solo cuando importa.',
}

const RU: CheckoutSuccessCopy = {
  breadcrumb: 'Заказ подтверждён',
  title: 'Заказ подтверждён',
  subtitle: 'Спасибо за ваш заказ. Вскоре вы получите письмо с подтверждением.',
  sessionReference: 'Номер заказа',
  keepExploring: 'Пока вы ждёте',
  keepExploringBody: 'Откройте вещи, которые продолжают историю Bint Saeed.',
  stayCloseHeading: 'Оставайтесь рядом с домом',
  stayCloseHint: 'Закрытые релизы, советы по уходу и новые главы — по почте, только когда это важно.',
}

const ZH: CheckoutSuccessCopy = {
  breadcrumb: '订单已确认',
  title: '订单已确认',
  subtitle: '感谢您的订购。您将很快收到确认邮件。',
  sessionReference: '订单参考号',
  keepExploring: '等候之际',
  keepExploringBody: '继续探索承载 Bint Saeed 故事的单品。',
  stayCloseHeading: '与品牌保持联系',
  stayCloseHint: '私密发布、护理提示与新篇章 — 仅在重要时通过邮件送达。',
}

const ID: CheckoutSuccessCopy = {
  breadcrumb: 'Pesanan dikonfirmasi',
  title: 'Pesanan dikonfirmasi',
  subtitle: 'Terima kasih atas pesanan Anda. Anda akan segera menerima email konfirmasi.',
  sessionReference: 'Referensi pesanan',
  keepExploring: 'Sambil menunggu',
  keepExploringBody: 'Jelajahi potongan yang membawa kisah Bint Saeed terus maju.',
  stayCloseHeading: 'Tetap dekat dengan Maison',
  stayCloseHint: 'Rilis pribadi, catatan perawatan, dan bab baru — lewat email, hanya saat penting.',
}

const MS: CheckoutSuccessCopy = {
  breadcrumb: 'Pesanan disahkan',
  title: 'Pesanan disahkan',
  subtitle: 'Terima kasih atas pesanan anda. Anda akan menerima e-mel pengesahan tidak lama lagi.',
  sessionReference: 'Rujukan pesanan',
  keepExploring: 'Sementara menunggu',
  keepExploringBody: 'Terokai potongan yang membawa kisah Bint Saeed terus maju.',
  stayCloseHeading: 'Kekal dekat dengan Maison',
  stayCloseHint: 'Keluaran peribadi, nota penjagaan dan bab baharu — melalui e-mel, hanya apabila penting.',
}

export function getCheckoutSuccessCopy(locale: AppLocale | string): CheckoutSuccessCopyResolved {
  const pack =
    locale === 'ar'
      ? AR
      : locale === 'fr'
        ? FR
        : locale === 'it'
          ? IT
          : locale === 'de'
            ? DE
            : locale === 'nl'
              ? NL
              : locale === 'pt'
                ? PT
                : locale === 'es'
                  ? ES
                  : locale === 'ru'
                    ? RU
                    : locale === 'zh'
                      ? ZH
                      : locale === 'id'
                        ? ID
                        : locale === 'ms'
                          ? MS
                          : EN
  return {
    ...EN,
    ...pack,
    confirmingTitle: pack.confirmingTitle ?? EN.confirmingTitle!,
    confirmingSubtitle: pack.confirmingSubtitle ?? EN.confirmingSubtitle!,
    pendingTitle: pack.pendingTitle ?? EN.pendingTitle!,
    pendingSubtitle: pack.pendingSubtitle ?? EN.pendingSubtitle!,
  }
}
