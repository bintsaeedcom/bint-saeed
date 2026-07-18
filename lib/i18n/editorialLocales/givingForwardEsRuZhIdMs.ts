import type { GivingForwardCopy } from '@/lib/content/givingForwardCopyI18n'

function pack(
  partial: Omit<GivingForwardCopy, 'intro'> & { introLead: string; introFact: string },
): GivingForwardCopy {
  return {
    breadcrumbHome: partial.breadcrumbHome,
    breadcrumb: partial.breadcrumb,
    backToHome: partial.backToHome,
    pageTitle: partial.pageTitle,
    intro: [partial.introLead, partial.introFact],
    carriedTitle: partial.carriedTitle,
    pillars: partial.pillars,
    shopCta: partial.shopCta,
    contactCta: partial.contactCta,
    hangtagCaption: partial.hangtagCaption,
  }
}

export const GF_ES = pack({
  breadcrumbHome: 'Inicio',
  breadcrumb: 'Giving Forward',
  backToHome: 'Volver al inicio',
  pageTitle: 'Giving Forward',
  introLead:
    'Bint Saeed nació de un lugar del corazón donde existe el deseo de crear algo que deje una huella más allá de lo visible: algo que continúa en el sentido, en el impacto y en las vidas a las que llega.',
  introFact:
    'Con cada pieza Bint Saeed, un gesto de donación continúa, extendiéndose más allá de lo creado. No toda hija o hijo crece con un sentido de pertenencia, apoyo o continuidad. Algunos deben encontrar su camino sin los cimientos que otros reciben. Por ello, 20 AED de cada pieza se dedican, inshallah, a iniciativas benéficas bajo el Mother of the Nation Endowment for Orphans, bajo el patrocinio de Su Alteza el Jeque Mohamed bin Zayed Al Nahyan, a través de la Endowments and Minors’ Funds Authority, así como a iniciativas de Emirates Red Crescent. Así, lo que se lleva adelante no es solo una historia de origen, sino una contribución que continúa — más allá de la prenda, hasta las vidas que puede tocar.',
  carriedTitle: 'Los valores que llevamos adelante',
  pillars: [
    {
      title: 'Responsabilidad',
      body: 'Creamos en respuesta a lo verdaderamente deseado, favoreciendo una producción reflexiva frente al exceso. A medida que la maison crece, seguimos siendo responsables de lo que traemos al mundo y de las decisiones detrás de cómo se hace.',
    },
    {
      title: 'Continuidad',
      body: 'Creemos que el patrimonio emiratí merece continuar con orgullo, hallando nueva expresión en la vida de las mujeres de hoy. Arraigadas en los Emiratos Árabes Unidos, llevamos sus referencias culturales al diseño contemporáneo y más allá de las fronteras, para que se descubran en nuevos lugares sin perder su origen.',
    },
    {
      title: 'Giving Forward',
      body: 'El crecimiento debe abrir también la posibilidad de que algo más allá de nosotras avance. A través de la donación y el apoyo a otros, creemos que parte de lo que la maison recibe debe continuar en la vida de quienes lo necesitan.',
    },
    {
      title: 'Pertenencia',
      body: 'Ser hija es pertenecer a una historia, a un lugar y a las personas que forman de dónde vienes. Bint Saeed reúne a mujeres que valoran el origen, el patrimonio y la libertad de llevar ambos a una vida enteramente propia.',
    },
    {
      title: 'Dignidad',
      body: 'Nos acercamos a las mujeres, al saber-hacer y al patrimonio cultural con el respeto que sus historias merecen. Creemos que estas historias deben cuidarse, y celebramos a las mujeres que se llevan con dignidad, respeto propio y una profunda comprensión de su propio valor.',
    },
  ],
  shopCta: 'Ver piezas',
  contactCta: 'Contactar',
  hangtagCaption: 'Herencia llevada adelante',
})

export const GF_RU = pack({
  breadcrumbHome: 'Главная',
  breadcrumb: 'Giving Forward',
  backToHome: 'На главную',
  pageTitle: 'Giving Forward',
  introLead:
    'Bint Saeed родилась из места в сердце, где существует желание создать нечто, оставляющее след за пределами видимого — нечто, что продолжается в смысле, в воздействии и в жизнях, которых оно достигает.',
  introFact:
    'С каждой вещью Bint Saeed жест дарения продолжается, выходя за пределы созданного. Не каждая дочь или сын растёт с чувством принадлежности, поддержки или преемственности. Некоторым приходится искать путь без тех основ, что даны другим. Поэтому 20 AED с каждой вещи направляются, inshallah, на благотворительные инициативы в рамках Mother of the Nation Endowment for Orphans под покровительством Его Высочества шейха Mohamed bin Zayed Al Nahyan через Endowments and Minors’ Funds Authority, а также на инициативы Emirates Red Crescent. Так то, что мы несём дальше, — не только история происхождения, но и вклад, который продолжается — за пределами одежды, в жизнях, которых он способен коснуться.',
  carriedTitle: 'Ценности, которые мы несём дальше',
  pillars: [
    {
      title: 'Ответственность',
      body: 'Мы создаём в ответ на подлинное желание, предпочитая осмысленное производство избытку. По мере роста дома мы остаёмся ответственными за то, что приносим в мир, и за выборы, стоящие за тем, как это сделано.',
    },
    {
      title: 'Преемственность',
      body: 'Мы верим, что эмиратское наследие достойно продолжения с гордостью, находя новое выражение в жизни женщин сегодня. Укоренённые в United Arab Emirates, мы несём его культурные отсылки в современный дизайн и за границы, позволяя открывать их в новых местах, не теряя происхождения.',
    },
    {
      title: 'Giving Forward',
      body: 'Рост должен открывать возможность двигаться вперёд и чему-то за пределами нас самих. Через благотворительность и поддержку других мы верим, что часть того, что получает дом, должна продолжаться в жизнях тех, кому это может быть нужно.',
    },
    {
      title: 'Принадлежность',
      body: 'Быть дочерью — значит принадлежать истории, месту и людям, составляющим то, откуда вы. Bint Saeed объединяет женщин, которые ценят происхождение, наследие и свободу нести и то и другое в жизнь, целиком свою.',
    },
    {
      title: 'Достоинство',
      body: 'Мы относимся к женщинам, мастерству и культурному наследию с уважением, которого заслуживают их истории. Мы верим, что эти истории нужно беречь, и чествуем женщин, несущих себя с достоинством, самоуважением и глубоким пониманием собственной ценности.',
    },
  ],
  shopCta: 'Смотреть вещи',
  contactCta: 'Связаться',
  hangtagCaption: 'Наследие, которое несут дальше',
})

export const GF_ZH = pack({
  breadcrumbHome: '首页',
  breadcrumb: 'Giving Forward',
  backToHome: '返回首页',
  pageTitle: 'Giving Forward',
  introLead:
    'Bint Saeed 源于心中一处愿望：创造超越可见之物的印记——在意义、影响与所触及的生命中延续。',
  introFact:
    '每一件 Bint Saeed 单品，都延续着一份给予，延伸至所创造之物以外。并非每一位女儿或儿子都能在归属、支持与延续感中成长。有些人不得不在缺少他人所获根基的情况下寻路。因此，每件单品中的 20 AED，inshallah，将用于 Mother of the Nation Endowment for Orphans 旗下慈善倡议，由 His Highness Sheikh Mohamed bin Zayed Al Nahyan 赞助，经 Endowments and Minors’ Funds Authority 执行，并支持 Emirates Red Crescent 的倡议。如此，所传承的不仅是起源的故事，更是一份持续的贡献——超越衣物，抵达它所能触及的生命。',
  carriedTitle: '我们向前传承的价值',
  pillars: [
    {
      title: '责任',
      body: '我们回应真正所需而创造，以审慎的生产取代过量。随着品牌成长，我们仍对带入世界之物及其制作背后的选择负责。',
    },
    {
      title: '延续',
      body: '我们相信阿联酋遗产值得骄傲地延续，并在今日女性的生命中找到新表达。植根于阿拉伯联合酋长国，我们将其文化参照带入当代设计、跨越边界，使它们在新的地方被发现，而不失其本源。',
    },
    {
      title: 'Giving Forward',
      body: '成长也应让超越我们自身的事物得以向前。通过慈善与对他者的支持，我们相信品牌所得的一部分，应继续进入可能需要它的生命之中。',
    },
    {
      title: '归属',
      body: '身为女儿，是归属于一个故事、一个地方，以及构成你从何处而来的人们。Bint Saeed 汇聚珍视起源、遗产，并自由地将二者带入全然属于自己的生命的女性。',
    },
    {
      title: '尊严',
      body: '我们以她们的故事所应得的尊重对待女性、工艺与文化遗产。我们相信这些故事应被珍视，并礼赞以尊严、自重与对自身价值的深刻理解自持的女性。',
    },
  ],
  shopCta: '浏览单品',
  contactCta: '联系我们',
  hangtagCaption: '传承向前',
})

export const GF_ID = pack({
  breadcrumbHome: 'Beranda',
  breadcrumb: 'Giving Forward',
  backToHome: 'Kembali ke beranda',
  pageTitle: 'Giving Forward',
  introLead:
    'Bint Saeed lahir dari tempat di dalam hati di mana keinginan ada untuk menciptakan sesuatu yang meninggalkan jejak di luar yang terlihat — sesuatu yang berlanjut dalam makna, dampak, dan kehidupan yang dijangkau.',
  introFact:
    'Dengan setiap potongan Bint Saeed, gestur memberi berlanjut, meluas di luar yang diciptakan. Tidak setiap putri atau putra tumbuh dengan rasa memiliki, dukungan, atau kesinambungan. Beberapa harus menemukan jalan tanpa fondasi yang diberikan kepada orang lain. Karena itu, 20 AED dari setiap potongan didedikasikan, inshallah, untuk inisiatif amal di bawah Mother of the Nation Endowment for Orphans, di bawah naungan His Highness Sheikh Mohamed bin Zayed Al Nahyan, melalui Endowments and Minors’ Funds Authority, serta inisiatif Emirates Red Crescent. Dengan demikian, yang dibawa maju bukan hanya kisah asal, melainkan kontribusi yang berlanjut — melampaui pakaian, ke kehidupan yang mampu disentuhnya.',
  carriedTitle: 'Nilai yang kami bawa maju',
  pillars: [
    {
      title: 'Tanggung jawab',
      body: 'Kami menciptakan sebagai respons terhadap yang benar-benar diinginkan, mengutamakan produksi yang dipertimbangkan daripada kelebihan. Seiring Maison tumbuh, kami tetap bertanggung jawab atas apa yang kami bawa ke dunia dan pilihan di balik bagaimana ia dibuat.',
    },
    {
      title: 'Kesinambungan',
      body: 'Kami percaya warisan Emirat layak berlanjut dengan kebanggaan, menemukan ekspresi baru dalam kehidupan perempuan hari ini. Berakar di United Arab Emirates, kami membawa referensi budayanya ke desain kontemporer dan melintasi batas, agar ditemukan di tempat baru tanpa kehilangan asalnya.',
    },
    {
      title: 'Giving Forward',
      body: 'Pertumbuhan harus juga membuka kemungkinan bagi sesuatu di luar diri kita untuk maju. Melalui pemberian amal dan dukungan kepada orang lain, kami percaya sebagian dari yang diterima Maison harus berlanjut ke kehidupan mereka yang mungkin membutuhkannya.',
    },
    {
      title: 'Rasa memiliki',
      body: 'Menjadi putri berarti milik suatu kisah, suatu tempat, dan orang-orang yang membentuk dari mana Anda berasal. Bint Saeed menyatukan perempuan yang menghargai asal, warisan, dan kebebasan membawa keduanya ke kehidupan yang sepenuhnya milik mereka.',
    },
    {
      title: 'Martabat',
      body: 'Kami mendekati perempuan, kriya, dan warisan budaya dengan rasa hormat yang layak diterima kisah mereka. Kami percaya kisah-kisah ini harus dihargai, dan kami merayakan perempuan yang membawa diri dengan martabat, harga diri, dan pemahaman mendalam akan nilai mereka sendiri.',
    },
  ],
  shopCta: 'Lihat potongan',
  contactCta: 'Hubungi',
  hangtagCaption: 'Warisan yang dibawa maju',
})

export const GF_MS = pack({
  breadcrumbHome: 'Laman utama',
  breadcrumb: 'Giving Forward',
  backToHome: 'Kembali ke laman utama',
  pageTitle: 'Giving Forward',
  introLead:
    'Bint Saeed lahir daripada tempat dalam hati di mana keinginan wujud untuk mencipta sesuatu yang meninggalkan kesan di luar yang kelihatan — sesuatu yang berterusan dalam makna, impak, dan kehidupan yang dicapainya.',
  introFact:
    'Dengan setiap potongan Bint Saeed, gerak memberi berterusan, meluas di luar yang dicipta. Tidak setiap anak perempuan atau anak lelaki membesar dengan rasa milik, sokongan atau kesinambungan. Sesetengah terpaksa mencari jalan tanpa asas yang diberikan kepada orang lain. Atas sebab itu, 20 AED daripada setiap potongan didedikasikan, inshallah, kepada inisiatif amal di bawah Mother of the Nation Endowment for Orphans, di bawah naungan His Highness Sheikh Mohamed bin Zayed Al Nahyan, melalui Endowments and Minors’ Funds Authority, serta inisiatif Emirates Red Crescent. Begitulah, yang dibawa ke hadapan bukan sekadar kisah asal, tetapi sumbangan yang berterusan — melangkaui pakaian, ke dalam kehidupan yang mampu disentuhnya.',
  carriedTitle: 'Nilai yang kami bawa ke hadapan',
  pillars: [
    {
      title: 'Tanggungjawab',
      body: 'Kami mencipta sebagai respons kepada apa yang benar-benar diinginkan, mengutamakan pengeluaran yang dipertimbangkan berbanding lebihan. Seiring Maison berkembang, kami kekal bertanggungjawab terhadap apa yang kami bawa ke dunia dan pilihan di sebalik cara ia dibuat.',
    },
    {
      title: 'Kesinambungan',
      body: 'Kami percaya warisan Emirati layak diteruskan dengan kebanggaan, mencari ungkapan baharu dalam kehidupan wanita hari ini. Berakar di United Arab Emirates, kami membawa rujukan budayanya ke reka bentuk kontemporari dan merentas sempadan, supaya ditemui di tempat baharu tanpa kehilangan asalnya.',
    },
    {
      title: 'Giving Forward',
      body: 'Pertumbuhan juga harus membuka kemungkinan bagi sesuatu di luar diri kita untuk bergerak ke hadapan. Melalui pemberian amal dan sokongan kepada orang lain, kami percaya sebahagian daripada apa yang diterima Maison harus berterusan ke dalam kehidupan mereka yang mungkin memerlukannya.',
    },
    {
      title: 'Rasa milik',
      body: 'Menjadi anak perempuan bermaksud milik suatu kisah, suatu tempat, dan orang yang membentuk dari mana anda berasal. Bint Saeed menghimpunkan wanita yang menghargai asal, warisan, dan kebebasan membawa keduanya ke dalam kehidupan yang sepenuhnya milik mereka.',
    },
    {
      title: 'Maruah',
      body: 'Kami mendekati wanita, ketukangan dan warisan budaya dengan penghormatan yang layak diterima kisah mereka. Kami percaya kisah-kisah ini harus dihargai, dan kami meraikan wanita yang membawa diri dengan maruah, harga diri dan pemahaman mendalam tentang nilai mereka sendiri.',
    },
  ],
  shopCta: 'Lihat potongan',
  contactCta: 'Hubungi',
  hangtagCaption: 'Warisan yang dibawa ke hadapan',
})
