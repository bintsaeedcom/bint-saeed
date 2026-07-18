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

export const GF_FR = pack({
  breadcrumbHome: 'Accueil',
  breadcrumb: 'Giving Forward',
  backToHome: "Retour à l'accueil",
  pageTitle: 'Giving Forward',
  introLead:
    'Bint Saeed est née d’un endroit du cœur où existe le désir de créer quelque chose qui laisse une marque au-delà du visible — quelque chose qui continue dans le sens, dans l’impact, et dans les vies qu’il atteint.',
  introFact:
    'Avec chaque pièce Bint Saeed, un geste de don continue, s’étendant au-delà de ce qui est créé. Toutes les filles et tous les fils ne grandissent pas avec un sens d’appartenance, de soutien ou de continuité. Certains doivent trouver leur chemin sans les fondations que d’autres reçoivent. Pour cette raison, 20 AED de chaque pièce sont dédiés, inshallah, à des initiatives caritatives sous le Mother of the Nation Endowment for Orphans, sous le patronage de Son Altesse le Cheikh Mohamed bin Zayed Al Nahyan, via l’Endowments and Minors’ Funds Authority, ainsi qu’à des initiatives du Emirates Red Crescent. Ainsi, ce qui est porté plus loin n’est pas seulement une histoire d’origine, mais une contribution qui continue — au-delà du vêtement, jusque dans les vies qu’elle peut toucher.',
  carriedTitle: 'Les valeurs que nous portons plus loin',
  pillars: [
    {
      title: 'Responsabilité',
      body: 'Nous créons en réponse à ce qui est réellement désiré, privilégiant une production réfléchie plutôt que l’excès. À mesure que la maison grandit, nous restons responsables de ce que nous faisons entrer dans le monde et des choix qui déterminent sa fabrication.',
    },
    {
      title: 'Continuité',
      body: 'Nous croyons que le patrimoine émirati mérite de continuer avec fierté, trouvant une nouvelle expression dans la vie des femmes d’aujourd’hui. Ancrée aux Émirats arabes unis, nous portons ses références culturelles dans le design contemporain et au-delà des frontières, pour qu’elles soient découvertes ailleurs sans perdre leur origine.',
    },
    {
      title: 'Giving Forward',
      body: 'La croissance doit aussi ouvrir la possibilité à quelque chose au-delà de nous d’avancer. Par le don caritatif et le soutien aux autres, nous croyons qu’une part de ce que la maison reçoit doit continuer dans la vie de celles et ceux qui en ont besoin.',
    },
    {
      title: 'Appartenance',
      body: 'Être fille, c’est appartenir à une histoire, à un lieu et aux personnes qui forment d’où l’on vient. Bint Saeed rassemble des femmes qui valorisent l’origine, l’héritage et la liberté de porter l’un et l’autre dans une vie entièrement leur.',
    },
    {
      title: 'Dignité',
      body: 'Nous abordons les femmes, le savoir-faire et le patrimoine culturel avec le respect que leurs histoires méritent. Nous croyons que ces histoires doivent être chéries, et nous célébrons les femmes qui se portent avec dignité, respect de soi et une profonde conscience de leur propre valeur.',
    },
  ],
  shopCta: 'Voir les pièces',
  contactCta: 'Nous contacter',
  hangtagCaption: 'Un héritage porté plus loin',
})

export const GF_IT = pack({
  breadcrumbHome: 'Home',
  breadcrumb: 'Giving Forward',
  backToHome: 'Torna alla home',
  pageTitle: 'Giving Forward',
  introLead:
    'Bint Saeed nasce da un luogo del cuore in cui esiste il desiderio di creare qualcosa che lasci un segno oltre il visibile — qualcosa che continua nel significato, nell’impatto e nelle vite che raggiunge.',
  introFact:
    'Con ogni pezzo Bint Saeed, un gesto di dono continua, estendendosi oltre ciò che è creato. Non ogni figlia o figlio cresce con un senso di appartenenza, sostegno o continuità. Alcuni devono trovare la propria strada senza le fondamenta date ad altri. Per questo, 20 AED da ogni pezzo sono dedicati, inshallah, a iniziative caritatevoli sotto il Mother of the Nation Endowment for Orphans, sotto il patrocinio di Sua Altezza lo Sheikh Mohamed bin Zayed Al Nahyan, attraverso l’Endowments and Minors’ Funds Authority, nonché a iniziative del Emirates Red Crescent. In questo modo, ciò che viene portato avanti non è solo una storia di origine, ma un contributo che continua — oltre il capo, nelle vite che può toccare.',
  carriedTitle: 'I valori che portiamo avanti',
  pillars: [
    {
      title: 'Responsabilità',
      body: 'Creiamo in risposta a ciò che è davvero desiderato, privilegiando una produzione ponderata rispetto all’eccesso. Man mano che la maison cresce, restiamo responsabili di ciò che introduciamo nel mondo e delle scelte su come viene fatto.',
    },
    {
      title: 'Continuità',
      body: 'Crediamo che il patrimonio emiratino meriti di continuare con orgoglio, trovando nuova espressione nella vita delle donne di oggi. Radicate negli Emirati Arabi Uniti, portiamo i suoi riferimenti culturali nel design contemporaneo e oltre i confini, perché siano scoperti altrove senza perdere l’origine.',
    },
    {
      title: 'Giving Forward',
      body: 'La crescita dovrebbe creare la possibilità che qualcosa oltre noi stessi avanzi. Attraverso il dono caritatevole e il sostegno agli altri, crediamo che parte di ciò che la maison riceve debba continuare nella vita di chi potrebbe averne bisogno.',
    },
    {
      title: 'Appartenenza',
      body: 'Essere figlia significa appartenere a una storia, a un luogo e alle persone che formano da dove si viene. Bint Saeed riunisce donne che valorizzano origine, heritage e la libertà di portare entrambi in una vita interamente propria.',
    },
    {
      title: 'Dignità',
      body: 'Ci avviciniamo alle donne, all’artigianalità e al patrimonio culturale con il rispetto che le loro storie meritano. Crediamo che queste storie vadano custodite, e celebriamo le donne che si portano con dignità, rispetto di sé e una profonda consapevolezza del proprio valore.',
    },
  ],
  shopCta: 'Scopri i pezzi',
  contactCta: 'Contattaci',
  hangtagCaption: 'Un’eredità portata avanti',
})

export const GF_DE = pack({
  breadcrumbHome: 'Startseite',
  breadcrumb: 'Giving Forward',
  backToHome: 'Zur Startseite',
  pageTitle: 'Giving Forward',
  introLead:
    'Bint Saeed entstand aus einem Ort im Herzen, an dem der Wunsch besteht, etwas zu schaffen, das eine Spur hinterlässt jenseits des Sichtbaren — etwas, das in Bedeutung, Wirkung und in den Leben fortbesteht, die es erreicht.',
  introFact:
    'Mit jedem Bint Saeed Stück setzt sich eine Geste des Gebens fort, die über das Geschaffene hinausgeht. Nicht jede Tochter oder jeder Sohn wächst mit Zugehörigkeit, Unterstützung oder Kontinuität auf. Manche müssen ihren Weg ohne die Grundlagen finden, die anderen gegeben werden. Deshalb werden 20 AED von jedem Stück, inshallah, wohltätigen Initiativen unter dem Mother of the Nation Endowment for Orphans gewidmet, unter der Schirmherrschaft Seiner Hoheit Sheikh Mohamed bin Zayed Al Nahyan, über die Endowments and Minors’ Funds Authority, sowie Initiativen des Emirates Red Crescent. So ist das Weitergetragene nicht nur eine Geschichte des Ursprungs, sondern ein Beitrag, der fortbesteht — über das Kleidungsstück hinaus in die Leben, die er berühren kann.',
  carriedTitle: 'Die Werte, die wir weitertragen',
  pillars: [
    {
      title: 'Verantwortung',
      body: 'Wir schaffen als Antwort auf das, was wirklich gewünscht wird, und bevorzugen bedachte Produktion statt Überschuss. Während das Haus wächst, bleiben wir verantwortlich für das, was wir in die Welt bringen, und für die Entscheidungen hinter seiner Entstehung.',
    },
    {
      title: 'Kontinuität',
      body: 'Wir glauben, dass emiratisches Erbe mit Stolz weitergehen und neuen Ausdruck im Leben der Frauen von heute finden soll. Verwurzelt in den Vereinigten Arabischen Emiraten tragen wir seine kulturellen Bezüge in zeitgenössisches Design und über Grenzen hinweg — entdeckt an neuen Orten, ohne den Ursprung zu verlieren.',
    },
    {
      title: 'Giving Forward',
      body: 'Wachstum soll auch die Möglichkeit schaffen, dass etwas über uns hinaus weitergeht. Durch wohltätiges Geben und Unterstützung anderer glauben wir, dass ein Teil dessen, was das Haus empfängt, in das Leben derer weitergehen soll, die es brauchen könnten.',
    },
    {
      title: 'Zugehörigkeit',
      body: 'Tochter zu sein heißt, zu einer Geschichte, einem Ort und den Menschen zu gehören, die Teil dessen sind, woher man kommt. Bint Saeed versammelt Frauen, die Herkunft, Erbe und die Freiheit schätzen, beides in ein ganz eigenes Leben zu tragen.',
    },
    {
      title: 'Würde',
      body: 'Wir begegnen Frauen, Handwerk und kulturellem Erbe mit dem Respekt, den ihre Geschichten verdienen. Wir glauben, dass diese Geschichten bewahrt werden sollen, und feiern Frauen, die sich mit Würde, Selbstachtung und einem tiefen Verständnis ihres eigenen Werts tragen.',
    },
  ],
  shopCta: 'Stücke entdecken',
  contactCta: 'Kontakt',
  hangtagCaption: 'Erbe, das weitergetragen wird',
})

export const GF_NL = pack({
  breadcrumbHome: 'Home',
  breadcrumb: 'Giving Forward',
  backToHome: 'Terug naar home',
  pageTitle: 'Giving Forward',
  introLead:
    'Bint Saeed ontstond uit een plek in het hart waar het verlangen bestaat om iets te creëren dat een spoor nalaat voorbij het zichtbare — iets dat voortgaat in betekenis, impact en in de levens die het raakt.',
  introFact:
    'Met elk Bint Saeed-stuk gaat een gebaar van geven verder, voorbij wat wordt gemaakt. Niet elke dochter of zoon groeit op met een gevoel van toebehoren, steun of continuïteit. Sommigen moeten hun weg vinden zonder de fundamenten die anderen krijgen. Daarom wordt 20 AED van elk stuk, inshallah, gewijd aan charitatieve initiatieven onder het Mother of the Nation Endowment for Orphans, onder beschermheerschap van Zijne Hoogheid Sheikh Mohamed bin Zayed Al Nahyan, via de Endowments and Minors’ Funds Authority, evenals initiatieven van de Emirates Red Crescent. Zo is wat verder wordt gedragen niet alleen een verhaal van herkomst, maar een bijdrage die doorgaat — voorbij het kledingstuk, in de levens die zij kan raken.',
  carriedTitle: 'De waarden die wij verder dragen',
  pillars: [
    {
      title: 'Verantwoordelijkheid',
      body: 'Wij creëren in antwoord op wat werkelijk gewenst is, en geven de voorkeur aan doordachte productie boven overdaad. Naarmate het Huis groeit, blijven wij verantwoordelijk voor wat wij in de wereld brengen en voor de keuzes achter hoe het gemaakt wordt.',
    },
    {
      title: 'Continuïteit',
      body: 'Wij geloven dat Emiratisch erfgoed met trots mag voortgaan en nieuwe uitdrukking mag vinden in het leven van vrouwen vandaag. Geworteld in de Verenigde Arabische Emiraten dragen wij zijn culturele referenties in hedendaags design en over grenzen heen — ontdekt op nieuwe plekken, zonder de oorsprong te verliezen.',
    },
    {
      title: 'Giving Forward',
      body: 'Groei moet ook de mogelijkheid scheppen dat iets buiten onszelf verder beweegt. Via charitatief geven en steun aan anderen geloven wij dat een deel van wat het Huis ontvangt moet voortgaan in het leven van wie het nodig kan hebben.',
    },
    {
      title: 'Toebehoren',
      body: 'Dochter zijn is behoren tot een verhaal, een plek en de mensen die deel zijn van waar u vandaan komt. Bint Saeed brengt vrouwen samen die herkomst, erfgoed en de vrijheid waarderen om beide mee te nemen in een leven dat geheel van hen is.',
    },
    {
      title: 'Waardigheid',
      body: 'Wij benaderen vrouwen, vakmanschap en cultureel erfgoed met het respect dat hun verhalen verdienen. Wij geloven dat deze verhalen gekoesterd moeten worden, en vieren vrouwen die zichzelf dragen met waardigheid, zelfrespect en een diep begrip van hun eigen waarde.',
    },
  ],
  shopCta: 'Ontdek stukken',
  contactCta: 'Contact',
  hangtagCaption: 'Erfgoed dat verder wordt gedragen',
})

export const GF_PT = pack({
  breadcrumbHome: 'Início',
  breadcrumb: 'Giving Forward',
  backToHome: 'Voltar ao início',
  pageTitle: 'Giving Forward',
  introLead:
    'Bint Saeed nasceu de um lugar no coração onde existe o desejo de criar algo que deixe uma marca para além do visível — algo que continua no significado, no impacto e nas vidas que alcança.',
  introFact:
    'Com cada peça Bint Saeed, um gesto de dar continua, estendendo-se para além do que é criado. Nem todas as filhas ou filhos crescem com um sentido de pertença, apoio ou continuidade. Alguns têm de encontrar o seu caminho sem as fundações que outros recebem. Por esta razão, 20 AED de cada peça são dedicados, inshallah, a iniciativas de caridade sob o Mother of the Nation Endowment for Orphans, sob o patrocínio de Sua Alteza o Sheikh Mohamed bin Zayed Al Nahyan, através da Endowments and Minors’ Funds Authority, bem como a iniciativas do Emirates Red Crescent. Assim, o que é levado mais longe não é apenas uma história de origem, mas uma contribuição que continua — para além da peça, nas vidas que pode tocar.',
  carriedTitle: 'Os valores que levamos mais longe',
  pillars: [
    {
      title: 'Responsabilidade',
      body: 'Criamos em resposta ao que é verdadeiramente desejado, privilegiando uma produção ponderada em vez do excesso. À medida que a maison cresce, permanecemos responsáveis pelo que trazemos ao mundo e pelas escolhas por detrás da sua feitura.',
    },
    {
      title: 'Continuidade',
      body: 'Acreditamos que a herança emiradense merece continuar com orgulho, encontrando nova expressão na vida das mulheres de hoje. Enraizadas nos Emirados Árabes Unidos, levamos as suas referências culturais ao design contemporâneo e além das fronteiras, para serem descobertas noutros lugares sem perder a origem.',
    },
    {
      title: 'Giving Forward',
      body: 'O crescimento deve também criar a possibilidade de algo para além de nós avançar. Através da dádiva caritativa e do apoio aos outros, acreditamos que parte do que a maison recebe deve continuar na vida de quem dela possa precisar.',
    },
    {
      title: 'Pertença',
      body: 'Ser filha é pertencer a uma história, a um lugar e às pessoas que formam de onde se vem. Bint Saeed reúne mulheres que valorizam origem, herança e a liberdade de levar ambas para uma vida inteiramente sua.',
    },
    {
      title: 'Dignidade',
      body: 'Abordamos as mulheres, o saber-fazer e o património cultural com o respeito que as suas histórias merecem. Acreditamos que estas histórias devem ser acarinhadas, e celebramos mulheres que se portam com dignidade, auto-respeito e uma profunda compreensão do próprio valor.',
    },
  ],
  shopCta: 'Ver peças',
  contactCta: 'Contactar',
  hangtagCaption: 'Herança levada adiante',
})
