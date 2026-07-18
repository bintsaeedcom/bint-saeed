import type { AppLocale } from '@/lib/i18n/routing'

export type WhatsAppTopicId = 'bank-transfer' | 'priority-order' | 'strands' | 'personalisation' | 'other'

export type WhatsAppTopicCopy = { id: WhatsAppTopicId; label: string; message: string }

export type WhatsAppChrome = {
  title: string
  subtitle: string
  close: string
  ariaLive: string
}

const CHROME: Record<AppLocale, WhatsAppChrome> = {
  en: { title: 'How can we help?', subtitle: 'Live chat with our customer service on WhatsApp', close: 'Close', ariaLive: 'Customer service live chat on WhatsApp' },
  ar: { title: 'كيف يمكننا مساعدتك؟', subtitle: 'دردشة مباشرة مع خدمة العملاء عبر واتساب', close: 'إغلاق', ariaLive: 'خدمة العملاء عبر واتساب' },
  fr: { title: 'Comment pouvons-nous vous aider ?', subtitle: 'Discussion en direct avec notre service client sur WhatsApp', close: 'Fermer', ariaLive: 'Service client en direct sur WhatsApp' },
  it: { title: 'Come possiamo aiutarla?', subtitle: 'Chat dal vivo con il nostro servizio clienti su WhatsApp', close: 'Chiudi', ariaLive: 'Assistenza clienti live su WhatsApp' },
  es: { title: '¿Cómo podemos ayudarte?', subtitle: 'Chat en vivo con nuestro servicio de atención al cliente en WhatsApp', close: 'Cerrar', ariaLive: 'Atención al cliente en vivo por WhatsApp' },
  de: { title: 'Wie können wir Ihnen helfen?', subtitle: 'Live-Chat mit unserem Kundenservice über WhatsApp', close: 'Schließen', ariaLive: 'Kundenservice live über WhatsApp' },
  nl: { title: 'Hoe kunnen wij u helpen?', subtitle: 'Livechat met onze klantenservice via WhatsApp', close: 'Sluiten', ariaLive: 'Klantenservice live via WhatsApp' },
  pt: { title: 'Como podemos ajudar?', subtitle: 'Chat em direto com o nosso apoio ao cliente no WhatsApp', close: 'Fechar', ariaLive: 'Apoio ao cliente em direto no WhatsApp' },
  ru: { title: 'Чем мы можем помочь?', subtitle: 'Онлайн-чат со службой поддержки в WhatsApp', close: 'Закрыть', ariaLive: 'Служба поддержки в WhatsApp' },
  zh: { title: '我们能为您做些什么？', subtitle: '通过 WhatsApp 与客服实时对话', close: '关闭', ariaLive: 'WhatsApp 客户服务在线咨询' },
  id: { title: 'Bagaimana kami dapat membantu?', subtitle: 'Obrolan langsung dengan layanan pelanggan kami di WhatsApp', close: 'Tutup', ariaLive: 'Layanan pelanggan langsung di WhatsApp' },
  ms: { title: 'Bagaimana kami boleh membantu?', subtitle: 'Sembang langsung dengan khidmat pelanggan kami di WhatsApp', close: 'Tutup', ariaLive: 'Khidmat pelanggan langsung di WhatsApp' },
}

const TOPICS: Record<AppLocale, WhatsAppTopicCopy[]> = {
  en: [
    { id: 'personalisation', label: 'Personalisation', message: 'Hello Bint Saeed — I would like to ask about personalising a piece (hidden name label or private message).' },
    { id: 'strands', label: 'Abaya strands', message: 'Hello Bint Saeed — I would like more information about the interchangeable abaya strands and how to wear or change them.' },
    { id: 'priority-order', label: 'Priority order', message: 'Hello Bint Saeed — I need a priority / rush order. Could you advise on the earliest timeline and what is possible?' },
    { id: 'bank-transfer', label: 'Bank transfer', message: 'Hello Bint Saeed — I would like to pay by bank transfer. Could you please share the account details for my order?' },
    { id: 'other', label: 'I have another question', message: 'Hello Bint Saeed — I have another question.' },
  ],
  ar: [
    { id: 'personalisation', label: 'التخصيص', message: 'مرحباً Bint Saeed — أود الاستفسار عن تخصيص قطعة (بطاقة الاسم المخفية أو رسالة خاصة).' },
    { id: 'strands', label: 'خيوط العباءة', message: 'مرحباً Bint Saeed — أود معرفة المزيد عن خيوط العباءة القابلة للتبديل وكيف يتم ارتداؤها أو تغييرها.' },
    { id: 'priority-order', label: 'طلب ذو أولوية', message: 'مرحباً Bint Saeed — أحتاج طلباً عاجلاً / ذا أولوية. هل يمكنكم إرشادي لأقرب موعد ممكن وما هو المتاح؟' },
    { id: 'bank-transfer', label: 'تحويل بنكي', message: 'مرحباً Bint Saeed — أود الدفع عبر التحويل البنكي. هل يمكنكم تزويدي بتفاصيل الحساب لإتمام طلبي؟' },
    { id: 'other', label: 'لدي سؤال آخر', message: 'مرحباً Bint Saeed — لدي سؤال آخر.' },
  ],
  fr: [
    { id: 'personalisation', label: 'Personnalisation', message: 'Bonjour Bint Saeed — je souhaite des informations sur la personnalisation d’une pièce (étiquette nominative discrète ou message privé).' },
    { id: 'strands', label: 'Strands abaya', message: 'Bonjour Bint Saeed — je souhaite en savoir plus sur les strands interchangeables pour abaya et comment les porter ou les changer.' },
    { id: 'priority-order', label: 'Commande prioritaire', message: 'Bonjour Bint Saeed — j’ai besoin d’une commande prioritaire / urgente. Pourriez-vous indiquer le délai le plus court et ce qui est possible ?' },
    { id: 'bank-transfer', label: 'Virement bancaire', message: 'Bonjour Bint Saeed — je souhaite payer par virement bancaire. Pourriez-vous partager les coordonnées du compte pour ma commande ?' },
    { id: 'other', label: 'J’ai une autre question', message: 'Bonjour Bint Saeed — j’ai une autre question.' },
  ],
  it: [
    { id: 'personalisation', label: 'Personalizzazione', message: 'Buongiorno Bint Saeed — vorrei informazioni sulla personalizzazione di un pezzo (etichetta nome nascosta o messaggio privato).' },
    { id: 'strands', label: 'Strand abaya', message: 'Buongiorno Bint Saeed — vorrei più informazioni sugli strand intercambiabili per abaya e su come indossarli o cambiarli.' },
    { id: 'priority-order', label: 'Ordine prioritario', message: 'Buongiorno Bint Saeed — ho bisogno di un ordine prioritario / urgente. Potreste indicarmi i tempi più rapidi e cosa è possibile?' },
    { id: 'bank-transfer', label: 'Bonifico bancario', message: 'Buongiorno Bint Saeed — vorrei pagare con bonifico bancario. Potreste condividere i dettagli del conto per il mio ordine?' },
    { id: 'other', label: 'Ho un’altra domanda', message: 'Buongiorno Bint Saeed — ho un’altra domanda.' },
  ],
  es: [
    { id: 'personalisation', label: 'Personalización', message: 'Hola Bint Saeed — me gustaría información sobre personalizar una pieza (etiqueta de nombre oculta o mensaje privado).' },
    { id: 'strands', label: 'Strands de abaya', message: 'Hola Bint Saeed — me gustaría más información sobre los strands intercambiables de abaya y cómo llevarlos o cambiarlos.' },
    { id: 'priority-order', label: 'Pedido prioritario', message: 'Hola Bint Saeed — necesito un pedido prioritario / urgente. ¿Pueden aconsejarme el plazo más corto y qué es posible?' },
    { id: 'bank-transfer', label: 'Transferencia bancaria', message: 'Hola Bint Saeed — me gustaría pagar por transferencia bancaria. ¿Pueden compartir los datos de la cuenta para mi pedido?' },
    { id: 'other', label: 'Tengo otra pregunta', message: 'Hola Bint Saeed — tengo otra pregunta.' },
  ],
  de: [
    { id: 'personalisation', label: 'Personalisierung', message: 'Guten Tag Bint Saeed — ich möchte mich nach der Personalisierung eines Stücks erkundigen (verstecktes Namensetikett oder private Nachricht).' },
    { id: 'strands', label: 'Abaya-Strands', message: 'Guten Tag Bint Saeed — ich möchte mehr über die austauschbaren Abaya-Strands und das Tragen oder Wechseln erfahren.' },
    { id: 'priority-order', label: 'Prioritätsbestellung', message: 'Guten Tag Bint Saeed — ich benötige eine Prioritäts- / Expressbestellung. Können Sie den frühesten Zeitrahmen und die Möglichkeiten nennen?' },
    { id: 'bank-transfer', label: 'Banküberweisung', message: 'Guten Tag Bint Saeed — ich möchte per Banküberweisung zahlen. Können Sie bitte die Kontodaten für meine Bestellung teilen?' },
    { id: 'other', label: 'Ich habe eine andere Frage', message: 'Guten Tag Bint Saeed — ich habe eine andere Frage.' },
  ],
  nl: [
    { id: 'personalisation', label: 'Personalisatie', message: 'Hallo Bint Saeed — ik wil graag informeren over personalisatie van een stuk (verborgen naamlabel of privébericht).' },
    { id: 'strands', label: 'Abaya-strands', message: 'Hallo Bint Saeed — ik wil graag meer informatie over de verwisselbare abaya-strands en hoe ze te dragen of te wisselen.' },
    { id: 'priority-order', label: 'Prioriteitsbestelling', message: 'Hallo Bint Saeed — ik heb een prioriteits- / spoedbestelling nodig. Kunt u adviseren over de vroegste termijn en wat mogelijk is?' },
    { id: 'bank-transfer', label: 'Bankoverschrijving', message: 'Hallo Bint Saeed — ik wil graag betalen via bankoverschrijving. Kunt u de rekeninggegevens voor mijn bestelling delen?' },
    { id: 'other', label: 'Ik heb een andere vraag', message: 'Hallo Bint Saeed — ik heb een andere vraag.' },
  ],
  pt: [
    { id: 'personalisation', label: 'Personalização', message: 'Olá Bint Saeed — gostaria de informações sobre personalizar uma peça (etiqueta de nome oculta ou mensagem privada).' },
    { id: 'strands', label: 'Strands de abaya', message: 'Olá Bint Saeed — gostaria de mais informações sobre os strands intercambiáveis de abaya e como usá-los ou trocá-los.' },
    { id: 'priority-order', label: 'Encomenda prioritária', message: 'Olá Bint Saeed — preciso de uma encomenda prioritária / urgente. Podem aconselhar o prazo mais curto e o que é possível?' },
    { id: 'bank-transfer', label: 'Transferência bancária', message: 'Olá Bint Saeed — gostaria de pagar por transferência bancária. Podem partilhar os dados da conta para a minha encomenda?' },
    { id: 'other', label: 'Tenho outra pergunta', message: 'Olá Bint Saeed — tenho outra pergunta.' },
  ],
  ru: [
    { id: 'personalisation', label: 'Персонализация', message: 'Здравствуйте, Bint Saeed — хочу узнать о персонализации изделия (скрытая именная бирка или личное сообщение).' },
    { id: 'strands', label: 'Стренды абаи', message: 'Здравствуйте, Bint Saeed — хочу узнать больше о сменных стрендах для абаи и о том, как их носить или менять.' },
    { id: 'priority-order', label: 'Срочный заказ', message: 'Здравствуйте, Bint Saeed — мне нужен приоритетный / срочный заказ. Подскажите ближайшие сроки и что возможно?' },
    { id: 'bank-transfer', label: 'Банковский перевод', message: 'Здравствуйте, Bint Saeed — хочу оплатить банковским переводом. Можете ли вы прислать реквизиты для моего заказа?' },
    { id: 'other', label: 'У меня другой вопрос', message: 'Здравствуйте, Bint Saeed — у меня другой вопрос.' },
  ],
  zh: [
    { id: 'personalisation', label: '个性化', message: '您好，Bint Saeed — 我想咨询作品的个性化（隐藏姓名标或私人留言）。' },
    { id: 'strands', label: '阿巴雅挂链', message: '您好，Bint Saeed — 我想了解可更换的阿巴雅挂链以及如何佩戴或更换。' },
    { id: 'priority-order', label: '加急订单', message: '您好，Bint Saeed — 我需要加急 / 优先订单。能否告知最早时间与可行方案？' },
    { id: 'bank-transfer', label: '银行转账', message: '您好，Bint Saeed — 我想通过银行转账付款。能否提供订单账户信息？' },
    { id: 'other', label: '我有其他问题', message: '您好，Bint Saeed — 我有其他问题。' },
  ],
  id: [
    { id: 'personalisation', label: 'Personalisasi', message: 'Halo Bint Saeed — saya ingin bertanya tentang personalisasi sebuah karya (label nama tersembunyi atau pesan pribadi).' },
    { id: 'strands', label: 'Strand abaya', message: 'Halo Bint Saeed — saya ingin informasi lebih lanjut tentang strand abaya yang dapat diganti dan cara memakainya atau menggantinya.' },
    { id: 'priority-order', label: 'Pesanan prioritas', message: 'Halo Bint Saeed — saya membutuhkan pesanan prioritas / kilat. Bisakah Anda menyarankan timeline paling awal dan apa yang memungkinkan?' },
    { id: 'bank-transfer', label: 'Transfer bank', message: 'Halo Bint Saeed — saya ingin membayar dengan transfer bank. Bisakah Anda membagikan detail rekening untuk pesanan saya?' },
    { id: 'other', label: 'Saya punya pertanyaan lain', message: 'Halo Bint Saeed — saya punya pertanyaan lain.' },
  ],
  ms: [
    { id: 'personalisation', label: 'Pemperibadian', message: 'Halo Bint Saeed — saya ingin bertanya tentang pemperibadian sesuatu karya (label nama tersembunyi atau mesej peribadi).' },
    { id: 'strands', label: 'Strand abaya', message: 'Halo Bint Saeed — saya ingin maklumat lanjut tentang strand abaya yang boleh ditukar dan cara memakainya atau menukarnya.' },
    { id: 'priority-order', label: 'Pesanan keutamaan', message: 'Halo Bint Saeed — saya memerlukan pesanan keutamaan / segera. Bolehkah anda menasihati garis masa paling awal dan apa yang boleh?' },
    { id: 'bank-transfer', label: 'Pemindahan bank', message: 'Halo Bint Saeed — saya ingin membayar melalui pemindahan bank. Bolehkah anda berkongsi butiran akaun untuk pesanan saya?' },
    { id: 'other', label: 'Saya ada soalan lain', message: 'Halo Bint Saeed — saya ada soalan lain.' },
  ],
}

export function getWhatsAppChrome(locale: AppLocale | string): WhatsAppChrome {
  const key = (locale in CHROME ? locale : 'en') as AppLocale
  return CHROME[key]
}

export function getWhatsAppTopics(locale: AppLocale | string): WhatsAppTopicCopy[] {
  const key = (locale in TOPICS ? locale : 'en') as AppLocale
  return TOPICS[key]
}
