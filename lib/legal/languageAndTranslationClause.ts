import { OFFICIAL_EMAILS } from '@/lib/brand/officialEmails'

/**
 * Controlling-language / translation disclaimer shared across legal pages.
 * English is authoritative; other languages are convenience translations.
 */

export const LANGUAGE_CLAUSE_TITLE_EN = 'Language and Translations'

export const LANGUAGE_CLAUSE_BODY_EN = [
  'The original language of this website (including these Terms and Conditions, related policies, product information, interface text, and customer communications published on the site) is English. For interpretive, contractual, and legal purposes, the English text controls. Policies, rights, and obligations are read according to the meaning of the English text. If there is any conflict, inconsistency, or ambiguity between the English version and a translation, the English version prevails.',
  'Where the website or a policy is offered in another language, that translation is provided for convenience only. Translations may be prepared with automated translation tools and assisted review workflows. We take care to present clear material, but we do not warrant that any translation is complete, accurate, current, or free from error.',
  'To the extent permitted by applicable law, Bint Saeed is not responsible for misunderstanding, claim, loss, or dispute arising from reliance on a translated version of the website, these Terms, or any related policy. No rights may be derived from an incorrect or incomplete translation.',
  `If you notice an error or unclear wording in a translation, please tell us at ${OFFICIAL_EMAILS.legal} so we can review and, where appropriate, correct it.`,
] as const

/** Short cross-reference for Privacy, Shipping, Cookie and similar policies. */
export const LANGUAGE_CLAUSE_SHORT_EN =
  `The original language of this website and of this policy is English. The English text controls for interpretive and legal purposes, and policies apply according to the meaning of the English text. Translations into other languages are for convenience only and may be produced with automated translation tools and assisted review. To the extent permitted by law, Bint Saeed is not liable for errors or misunderstandings arising from translated text, and no rights may be derived from an incorrect translation. Please report translation concerns to ${OFFICIAL_EMAILS.legal}. See also the “Language and Translations” section of our Terms & Conditions.`

export const LANGUAGE_CLAUSE_TITLE_AR = 'اللغة والترجمات'

export const LANGUAGE_CLAUSE_BODY_AR = [
  'اللغة الأصلية لهذا الموقع (بما في ذلك هذه الشروط والأحكام والسياسات ذات الصلة ومعلومات المنتجات ونصوص الواجهة والاتصالات مع العملاء المنشورة على الموقع) هي الإنجليزية. ولأغراض التفسير والتعاقد والقانون، يُعتدّ بالنص الإنجليزي. وتُقرأ السياسات والحقوق والالتزامات وفقاً لمعنى النص الإنجليزي. وإذا وُجد أي تعارض أو عدم اتساق أو غموض بين النسخة الإنجليزية وترجمة ما، تسود النسخة الإنجليزية.',
  'عندما يُتاح الموقع أو سياسة بلغة أخرى، تُقدَّم تلك الترجمة للتيسير فقط. وقد تُعدّ الترجمات باستخدام أدوات ترجمة آلية ومراجعات مساعدة. نحرص على تقديم مواد واضحة، لكننا لا نضمن اكتمال أي ترجمة أو دقتها أو حداثتها أو خلوّها من الأخطاء.',
  'إلى الحد الذي يسمح به القانون المعمول به، لا تتحمل Bint Saeed المسؤولية عن سوء فهم أو مطالبة أو خسارة أو نزاع ينشأ عن الاعتماد على نسخة مترجمة من الموقع أو هذه الشروط أو أي سياسة ذات صلة. ولا يجوز اشتقاق أي حقوق من ترجمة غير صحيحة أو غير مكتملة.',
  `إذا لاحظت خطأً أو صياغة غير واضحة في ترجمة، يرجى إبلاغنا على ${OFFICIAL_EMAILS.legal} لنراجعها ونصححها حيثما كان ذلك مناسباً.`,
] as const

export const LANGUAGE_CLAUSE_SHORT_AR =
  `اللغة الأصلية لهذا الموقع ولهذه السياسة هي الإنجليزية. يُعتدّ بالنص الإنجليزي لأغراض التفسير والقانون، وتُطبَّق السياسات وفقاً لمعنى النص الإنجليزي. وتُقدَّم الترجمات للتيسير فقط، وقد تُنتَج باستخدام أدوات ترجمة آلية ومراجعة مساعدة. إلى الحد الذي يسمح به القانون، لا تتحمل Bint Saeed المسؤولية عن أخطاء أو سوء فهم ناشئ عن النص المترجم، ولا يجوز اشتقاق حقوق من ترجمة غير صحيحة. يرجى الإبلاغ عن ملاحظات الترجمة إلى ${OFFICIAL_EMAILS.legal}. انظر أيضاً قسم «اللغة والترجمات» في الشروط والأحكام.`

export const LANGUAGE_CLAUSE_TITLE_ID = 'Bahasa dan Terjemahan'

export const LANGUAGE_CLAUSE_BODY_ID = [
  'Bahasa asli situs web ini (termasuk Syarat dan Ketentuan ini, kebijakan terkait, informasi produk, teks antarmuka, dan komunikasi pelanggan yang dipublikasikan di situs) adalah bahasa Inggris. Untuk tujuan penafsiran, kontrak, dan hukum, teks berbahasa Inggris mengikat. Kebijakan, hak, dan kewajiban dibaca menurut makna teks bahasa Inggris. Jika terdapat konflik, ketidakkonsistenan, atau ambiguitas antara versi bahasa Inggris dan terjemahan, versi bahasa Inggris yang berlaku.',
  'Apabila situs atau kebijakan disediakan dalam bahasa lain, terjemahan tersebut hanya untuk kenyamanan. Terjemahan dapat disiapkan dengan alat terjemahan otomatis dan alur peninjauan berbantuan. Kami berupaya menyajikan materi yang jelas, tetapi tidak menjamin bahwa terjemahan lengkap, akurat, terkini, atau bebas dari kesalahan.',
  'Sejauh diizinkan hukum yang berlaku, Bint Saeed tidak bertanggung jawab atas kesalahpahaman, klaim, kerugian, atau sengketa yang timbul dari ketergantungan pada versi terjemahan situs, Syarat ini, atau kebijakan terkait. Tidak ada hak yang dapat digantungkan pada terjemahan yang salah atau tidak lengkap.',
  `Jika Anda menemukan kesalahan atau kata yang tidak jelas dalam terjemahan, harap laporkan ke ${OFFICIAL_EMAILS.legal} agar kami dapat meninjau dan, jika sesuai, memperbaikinya.`,
] as const

export const LANGUAGE_CLAUSE_SHORT_ID =
  `Bahasa asli situs web ini dan kebijakan ini adalah bahasa Inggris. Teks berbahasa Inggris mengikat untuk tujuan penafsiran dan hukum, dan kebijakan berlaku menurut makna teks bahasa Inggris. Terjemahan ke bahasa lain hanya untuk kenyamanan dan dapat dihasilkan dengan alat terjemahan otomatis serta peninjauan berbantuan. Sejauh diizinkan hukum, Bint Saeed tidak bertanggung jawab atas kesalahan atau kesalahpahaman dari teks terjemahan, dan tidak ada hak yang dapat digantungkan pada terjemahan yang salah. Harap laporkan masalah terjemahan ke ${OFFICIAL_EMAILS.legal}. Lihat juga bagian “Bahasa dan Terjemahan” dalam Syarat dan Ketentuan kami.`

export const LANGUAGE_CLAUSE_TITLE_MS = 'Bahasa dan Terjemahan'

export const LANGUAGE_CLAUSE_BODY_MS = [
  'Bahasa asal laman web ini (termasuk Terma dan Syarat ini, polisi berkaitan, maklumat produk, teks antara muka, dan komunikasi pelanggan yang diterbitkan di laman) ialah bahasa Inggeris. Bagi tujuan tafsiran, kontrak, dan undang-undang, teks bahasa Inggeris adalah mengikat. Polisi, hak, dan kewajipan dibaca menurut makna teks bahasa Inggeris. Jika timbul konflik, ketidakkonsistenan, atau kekaburan antara versi bahasa Inggeris dan terjemahan, versi bahasa Inggeris diguna pakai.',
  'Jika laman atau polisi disediakan dalam bahasa lain, terjemahan itu hanya untuk kemudahan. Terjemahan boleh disediakan menggunakan alat terjemahan automatik dan semakan dibantu. Kami berusaha menyediakan bahan yang jelas, tetapi tidak menjamin bahawa terjemahan lengkap, tepat, terkini, atau bebas daripada ralat.',
  'Setakat yang dibenarkan undang-undang berkenaan, Bint Saeed tidak bertanggungjawab ke atas salah faham, tuntutan, kerugian, atau pertikaian yang timbul daripada pergantungan pada versi terjemahan laman, Terma ini, atau polisi berkaitan. Tiada hak boleh diperolehi daripada terjemahan yang salah atau tidak lengkap.',
  `Jika anda perasan ralat atau kata-kata yang tidak jelas dalam terjemahan, sila laporkan kepada ${OFFICIAL_EMAILS.legal} supaya kami boleh menyemak dan, jika sesuai, membetulkannya.`,
] as const

export const LANGUAGE_CLAUSE_SHORT_MS =
  `Bahasa asal laman web ini dan polisi ini ialah bahasa Inggeris. Teks bahasa Inggeris adalah mengikat bagi tujuan tafsiran dan undang-undang, dan polisi diguna pakai menurut makna teks bahasa Inggeris. Terjemahan ke bahasa lain hanya untuk kemudahan dan boleh dihasilkan menggunakan alat terjemahan automatik serta semakan dibantu. Setakat yang dibenarkan undang-undang, Bint Saeed tidak bertanggungjawab ke atas ralat atau salah faham daripada teks terjemahan, dan tiada hak boleh diperolehi daripada terjemahan yang salah. Sila laporkan isu terjemahan kepada ${OFFICIAL_EMAILS.legal}. Lihat juga bahagian “Bahasa dan Terjemahan” dalam Terma dan Syarat kami.`

export const LANGUAGE_CLAUSE_TITLE_FR = 'Langue et traductions'
export const LANGUAGE_CLAUSE_SHORT_FR =
  `La langue d’origine de ce site et de la présente politique est l’anglais. Le texte anglais fait foi aux fins d’interprétation et de droit, et les politiques s’appliquent selon le sens du texte anglais. Les traductions sont fournies pour commodité uniquement et peuvent être produites à l’aide d’outils de traduction automatisée et d’une relecture assistée. Dans la mesure permise par la loi, Bint Saeed n’est pas responsable des erreurs ou malentendus liés à un texte traduit, et aucun droit ne peut être tiré d’une traduction incorrecte. Signalez toute réserve de traduction à ${OFFICIAL_EMAILS.legal}. Voir aussi la section « Langue et traductions » des Conditions générales.`

export const LANGUAGE_CLAUSE_TITLE_DE = 'Sprache und Übersetzungen'
export const LANGUAGE_CLAUSE_SHORT_DE =
  `Die Originalsprache dieser Website und dieser Richtlinie ist Englisch. Der englische Text ist für Auslegung und rechtliche Zwecke maßgeblich; Richtlinien gelten nach dem Sinn des englischen Textes. Übersetzungen dienen nur der Erleichterung und können mit automatisierten Übersetzungswerkzeugen und unterstützter Prüfung erstellt werden. Soweit gesetzlich zulässig, haftet Bint Saeed nicht für Fehler oder Missverständnisse aus übersetztem Text; aus einer fehlerhaften Übersetzung können keine Rechte abgeleitet werden. Melden Sie Übersetzungsbedenken an ${OFFICIAL_EMAILS.legal}. Siehe auch den Abschnitt „Sprache und Übersetzungen“ in den Allgemeinen Geschäftsbedingungen.`

export const LANGUAGE_CLAUSE_TITLE_IT = 'Lingua e traduzioni'
export const LANGUAGE_CLAUSE_SHORT_IT =
  `La lingua originale di questo sito e di questa policy è l’inglese. Il testo inglese è vincolante a fini interpretativi e giuridici, e le policy si applicano secondo il significato del testo inglese. Le traduzioni sono fornite solo per comodità e possono essere prodotte con strumenti di traduzione automatica e revisione assistita. Nella misura consentita dalla legge, Bint Saeed non è responsabile di errori o fraintendimenti derivanti dal testo tradotto, e nessun diritto può derivare da una traduzione scorretta. Segnalare questioni di traduzione a ${OFFICIAL_EMAILS.legal}. Vedere anche la sezione « Lingua e traduzioni » dei Termini e condizioni.`

export const LANGUAGE_CLAUSE_TITLE_ES = 'Idioma y traducciones'
export const LANGUAGE_CLAUSE_SHORT_ES =
  `El idioma original de este sitio y de esta política es el inglés. El texto en inglés es vinculante a efectos interpretativos y jurídicos, y las políticas se aplican según el sentido del texto en inglés. Las traducciones se ofrecen solo por comodidad y pueden elaborarse con herramientas de traducción automática y revisión asistida. En la medida permitida por la ley, Bint Saeed no responde de errores o malentendidos derivados del texto traducido, y no pueden derivarse derechos de una traducción incorrecta. Informe dudas de traducción a ${OFFICIAL_EMAILS.legal}. Véase también la sección « Idioma y traducciones » de los Términos y condiciones.`

export const LANGUAGE_CLAUSE_TITLE_NL = 'Taal en vertalingen'
export const LANGUAGE_CLAUSE_SHORT_NL =
  `De oorspronkelijke taal van deze website en dit beleid is Engels. De Engelse tekst is leidend voor interpretatie en juridische doeleinden; beleid geldt volgens de betekenis van de Engelse tekst. Vertalingen zijn alleen ter gemak en kunnen met geautomatiseerde vertaaltools en ondersteunde controle worden gemaakt. Voor zover de wet dat toelaat, is Bint Saeed niet aansprakelijk voor fouten of misverstanden uit vertaalde tekst, en uit een onjuiste vertaling kunnen geen rechten worden ontleend. Meld vertaalpunten aan ${OFFICIAL_EMAILS.legal}. Zie ook het onderdeel „Taal en vertalingen” in de Algemene voorwaarden.`

export const LANGUAGE_CLAUSE_TITLE_PT = 'Idioma e traduções'
export const LANGUAGE_CLAUSE_SHORT_PT =
  `O idioma original deste site e desta política é o inglês. O texto em inglês prevalece para fins interpretativos e jurídicos, e as políticas aplicam-se segundo o sentido do texto em inglês. As traduções são apenas para comodidade e podem ser produzidas com ferramentas de tradução automática e revisão assistida. Na medida permitida por lei, a Bint Saeed não responde por erros ou mal-entendidos decorrentes de texto traduzido, e nenhum direito pode ser derivado de uma tradução incorreta. Reporte questões de tradução a ${OFFICIAL_EMAILS.legal}. Consulte também a secção « Idioma e traduções » dos Termos e condições.`

export const LANGUAGE_CLAUSE_TITLE_RU = 'Язык и переводы'
export const LANGUAGE_CLAUSE_SHORT_RU =
  `Исходный язык этого сайта и настоящей политики: английский. Английский текст имеет преимущественную силу для толкования и правовых целей; политики применяются в соответствии со смыслом английского текста. Переводы предоставляются только для удобства и могут готовиться с помощью средств автоматического перевода и вспомогательной проверки. В пределах, допускаемых законом, Bint Saeed не несёт ответственности за ошибки или недоразумения, вызванные переведённым текстом, и из неверного перевода нельзя извлекать права. Сообщайте о замечаниях к переводам на ${OFFICIAL_EMAILS.legal}. См. также раздел «Язык и переводы» в Условиях использования.`

export const LANGUAGE_CLAUSE_TITLE_ZH = '语言与翻译'
export const LANGUAGE_CLAUSE_SHORT_ZH =
  `本网站及本政策的原始语言为英文。就解释与法律目的而言，以英文文本为准；政策依英文文本含义适用。其他语言译本仅供便利，可能借助自动翻译工具及辅助审校制作。在法律允许的范围内，Bint Saeed 不对因依赖译文而产生的错误或误解承担责任，亦不得从不准确的译文主张权利。如发现翻译问题，请发信至 ${OFFICIAL_EMAILS.legal}。另请参阅《条款与条件》中的「语言与翻译」部分。`
