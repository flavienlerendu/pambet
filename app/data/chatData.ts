export const agents = [
  {
    name: "Abel-Antoine",
    emoji: "🎭",
    photo: "abel.jpg",
    messages: 465,
    role: "Le Maestro",
    color: "#f59e0b",
    description: "Certains ont des idées. Lui en fait des opérations. Là où d'autres voient le chaos, il entend déjà la musique. Le genre de profil capable de transformer une impulsion de minuit en plan d'action avant le café du matin. Faille connue : incapable de laisser une idée mourir de sa belle mort.",
    bestQuote: "L'OISEAU EST DANS LA CAGE LES GARS",
    secret: "A rêvé que Max avait tout découvert. A failli ne pas se remettre.",
  },
  {
    name: "Flavien",
    emoji: "🏠",
    photo: "flav.jpg",
    messages: 463,
    role: "Le Logisticien",
    color: "#3b82f6",
    description: "Là où les autres improvisent, il a déjà réservé. Sans lui, l'opération n'aurait pas de lieu, pas de timing, pas d'adresse. L'homme qui transforme les idées floues en coordonnées GPS. Point faible : craque à J-1. Littéralement.",
    bestQuote: "allez il est temps que ça se passe, je craque",
    secret: "Sa sœur habite à 200m du studio de casting. Le destin.",
  },
  {
    name: "Charles",
    emoji: "👨‍💻",
    photo: "charles .jpg",
    messages: 349,
    role: "L'Ingénieur",
    color: "#8b5cf6",
    description: "Discret, précis, fiable. Le type qu'on sous-estime jusqu'au moment où on réalise que tout tient grâce à lui. Opère depuis la distance avec une efficacité déconcertante. Ne fait pas de bruit. Fait des résultats. Talon d'Achille : Lyonnais.",
    bestQuote: "Ha ha je pleure de rire et de honte c'est génial",
    secret: "A failli acheter un costume Blandin à 650€.",
  },
  {
    name: "Thomas",
    emoji: "🎬",
    photo: "thom.jpg",
    messages: 266,
    role: "Le Machiavélique",
    color: "#10b981",
    description: "Il sourit. Il improvise. Il ment. Dans cet ordre ou dans un autre — difficile à dire. Un talent rare pour transformer la vérité en fiction, et la fiction en vérité. Ne jamais lui faire confiance. Lui faire entièrement confiance. Défaut principal : n'est pas Boulette proof.",
    bestQuote: "Ah bah tu verras pendant le week-end à Amst...",
    secret: "Sa 'fausse gaffe' sur Amsterdam était totalement improvisée. Max a cru avoir tout grillé.",
  },
];

export const monthlyActivity = [
  { month: "Oct 25", messages: 4, label: "Naissance du groupe" },
  { month: "Nov 25", messages: 85, label: "Premier visio" },
  { month: "Déc 25", messages: 114, label: "La maison à Meudon" },
  { month: "Jan 26", messages: 63, label: "Barathon planning" },
  { month: "Fév 26", messages: 300, label: "Opération Rhétorique" },
  { month: "Mar 26", messages: 95, label: "Le programme & la logistique" },
  { month: "Avr 26", messages: 261, label: "Costumes & casting" },
  { month: "Mai 26", messages: 302, label: "Le faux casting prend forme" },
  { month: "Jun 26", messages: 321, label: "L'oiseau est dans la cage 🎯" },
];

export const stats = {
  totalMessages: 1545,
  daysPrepared: 219,
  photos: 113,
  audios: 93,
  videos: 6,
  gifs: 11,
  visios: 12,
  plansAbandoned: 6,
  biggestDay: { date: "2 juin 2026", count: 134, reason: "Max répond OUI au casting" },
  topSpammer: "Abel-Antoine",
  topSpammerMessages: 465,
  mostActivePeriod: "Juin 2026",
  latestMessage: "04/06 15:09",
  wordsMost: ["zombie", "casting", "tortue", "bellevilloise", "barathon"],
  averageResponseTime: "< 2h",
  nightMessages: 47,  // messages sent after midnight
};

export const keyMoments = [
  {
    id: "creation",
    date: "29 octobre 2025",
    title: "Naissance du groupe",
    classification: "CONFIDENTIEL",
    icon: "🔐",
    content: "Abel-Antoine crée le groupe. Son premier message : « Salut les gars ! Je crée ce groupe pour commencer à réfléchir... Des bisous. » C'est parti pour 219 jours de complot.",
    detail: "Le groupe reste silencieux pendant 15 jours. Personne n'a le temps. Mais personne n'oublie.",
  },
  {
    id: "premiere-visio",
    date: "29 novembre 2025",
    title: "Le premier grand visio",
    classification: "CONFIDENTIEL",
    icon: "📹",
    content: "Appel vidéo avec les 4. La maison HomeExchange à Meudon se profile. Flavien envoie déjà des liens de maisons. Une idée folle émerge : Marrakech.",
    detail: "« Sinon hier un pote me parlait de marrakech... des grandes villas pour une bouchée de pain » — Flavien. Le projet Marrakech sera abandonné. Premier plan sacrifié.",
  },
  {
    id: "meudon",
    date: "28 décembre 2025",
    title: "La maison à Meudon est validée",
    classification: "CONFIDENTIEL",
    icon: "🏠",
    content: "32 avenue du Château, Meudon. Les proprios ont dit oui. 300€ de frais de ménage. « Ils nettoient à la langue ou quoi ? » — Abel-Antoine.",
    detail: "La maison sera leur QG. Arrivée le vendredi 5 juin, départ le lundi. Avec option prolongation.",
  },
  {
    id: "operation-rhetorique",
    date: "13 février 2026",
    title: "Opération Rhétorique : le SMS de Stanislas",
    classification: "TOP SECRET",
    icon: "🎭",
    content: "Thomas fait envoyer par son ami Stanislas un SMS à Max : une invitation à un « stage de rhétorique » fictif les 5-6-7 juin. Très bien payé.",
    detail: "« Hello Max, on a pas réussi à se voir l'autre fois... Un cabinet de formation organise un gros stage de rhétorique... plutôt bien payé. » — SMS envoyé à Max.",
  },
  {
    id: "fausse-gaffe",
    date: "25 février 2026",
    title: "La fausse gaffe d'Amsterdam",
    classification: "TOP SECRET",
    icon: "🤫",
    content: "Dîner chez Flavien avec Max. Thomas improvise en live : « Ah bah tu verras pendant le week-end à Amst... » Max a cru avoir grillé le plan. Il avait honte pour eux.",
    detail: "« Max m'a chuchoté dans la cuisine : merde je me sens mal pour vous, je crois que Thom a gaffé. » Max était soulagé. C'était 100% calculé par Thomas.",
  },
  {
    id: "bureauonze",
    date: "30 mai 2026",
    title: "Le faux site de casting",
    classification: "TOP SECRET",
    icon: "🌐",
    content: "Abel crée un faux site (bureauonze.com) et une fausse adresse mail (casting@bureauonze.com). Le décor est planté pour le plus grand canular de leur histoire.",
    detail: "Le mail de casting envoyé à Max lui propose d'être le comédien d'une pub pour des lunettes. Le vrai texte contient une déclaration d'amour cachée pour Marion.",
  },
  {
    id: "oiseau",
    date: "2 juin 2026",
    title: "L'OISEAU EST DANS LA CAGE",
    classification: "URGENT — OPÉRATION RÉUSSIE",
    icon: "🎯",
    content: "Max répond OUI au mail de casting. C'est le jour le plus actif de toute la conversation : 134 messages. Les 4 agents explosent.",
    detail: "« MAIS FERME TA GUEULE » « MAIS QUOIIIII » « CHAAAAMPIONS DU MOOOOONDE » « L'OISEAU EST DANS LA CAGE LES GARS » « 6 MOIS DE TAF LES GARS »",
  },
  {
    id: "chanson",
    date: "3 juin 2026, 3h05",
    title: "La chanson de 3h du matin",
    classification: "CONFIDENTIEL",
    icon: "🎵",
    content: "Abel crée une chanson IA intitulée « Maxime Pambet ». À 3h05 du matin. « résiliez mon abonnement à Suno immédiatement svp »",
    detail: "Thomas l'écoute 20 fois. « Le seul truc que je me dis c'est que là il va comprendre qui on est avant même qu'on enlève les masques. »",
  },
  {
    id: "tortues",
    date: "5 juin 2026",
    title: "Quatre Tortues Ninja l'attendent",
    classification: "TOP SECRET — JOUR J",
    icon: "🐢",
    content: "4 costumes de Tortues Ninja loués. 800€ de caution. Un studio de danse « Marilyn Monroe » réservé. Un caméraman. Julie, une super comédienne. Et Max qui ne se doute de rien.",
    detail: "Flavien : « faut qu'on se partage notre loc en temps réel sur whatsapp ! celui qui suit max est le point de référence ! »",
  },
];

export const hallOfFame = [
  {
    author: "Abel-Antoine",
    text: "L'OISEAU EST DANS LA CAGE LES GARS",
    context: "Quand Max a dit oui au faux casting",
    emoji: "🎯",
    date: "02/06 13h48",
  },
  {
    author: "Thomas",
    text: "CHAAAAMPIONS DU MOOOOONDE",
    context: "1 seconde après",
    emoji: "🏆",
    date: "02/06 13h48",
  },
  {
    author: "Abel-Antoine",
    text: "résiliez mon abonnement à Suno immédiatement svp",
    context: "Après avoir créé une chanson IA entière à 3h05 du matin",
    emoji: "🎵",
    date: "03/06 03h05",
  },
  {
    author: "Abel-Antoine",
    text: "J'ai rêvé que Max m'envoyait un texto : « Ptn les gars pour ce week-end vous êtes des grands malades »",
    context: "La veille du jour J",
    emoji: "😭",
    date: "04/06 08h07",
  },
  {
    author: "Abel-Antoine",
    text: "Mon psy trouve que c'est très positif pour moi d'organiser tout ça en tous cas",
    context: "Session de préparation du faux casting",
    emoji: "🛋️",
    date: "04/06 14h46",
  },
  {
    author: "Thomas",
    text: "toute la terre est au courant sauf max. Si ça fuite pas d'ici là c'est un miracle",
    context: "Quand la compagnie théâtre de Max lui achète ses billets de train pour l'EVG",
    emoji: "🌍",
    date: "28/05 17h39",
  },
  {
    author: "Flavien",
    text: "Je frétille sous ma carapace beau brun",
    context: "Idée de petit mot à glisser discrètement à Max déguisé",
    emoji: "🐢",
    date: "02/06 14h09",
  },
  {
    author: "Charles",
    text: "Il précisent sur le site qu'il vaut mieux être grand et renoi sinon t'as l'air d'un con",
    context: "En cherchant des costumes croisés sur Father & Sons",
    emoji: "👔",
    date: "27/04 10h19",
  },
  {
    author: "Abel-Antoine",
    text: "C'est vrai qu'avec toutes ces dépenses, c'est un peu comme si on se mariait nous-mêmes",
    context: "Au moment de calculer le budget total EVG + mariage + costume",
    emoji: "💸",
    date: "21/04 11h49",
  },
  {
    author: "Flavien",
    text: "allez il est temps que ça se passe, je craque",
    context: "La veille du jour J, alors que tout est prêt",
    emoji: "💫",
    date: "04/06 14h45",
  },
  {
    author: "Thomas",
    text: "J'ai dit un truc du genre : « Ah bah tu verras pendant le week-end à Amst... » Il nous sous-estime mdr",
    context: "Lendemain du dîner chez Flavien, révélation de la fausse gaffe improvisée",
    emoji: "🎭",
    date: "26/02 10h51",
  },
];

export const plansAbandoned = [
  { plan: "Marrakech", reason: "Logistique trop compliquée pour un EVG surprise" },
  { plan: "Costume Blandin à 650€", reason: "On a préféré mettre le budget là où ça compte : dans les souvenirs partagés." },
  { plan: "Barathon à surprises (copains dans chaque bar)", reason: "Remplacé par La Bellevilloise — bien moins casse-gueule en termes de logistique" },
  { plan: "Débarquer au milieu du casting", reason: "On a préféré une caméra cachée pour immortaliser les images" },
  { plan: "Tortues Ninja dans le métro après le casting", reason: "Vision 360 limitée. Risque de chute." },
  { plan: "Directrice de casting professionnelle", reason: "Remplacée par Julie — une super comédienne" },
];

export const allPhotos = [
  "00000013-PHOTO-2025-11-17-16-29-27.jpg",
  "00000016-PHOTO-2025-11-17-16-34-10.jpg",
  "00000058-GIF-2025-11-27-11-39-19.mp4",
  "00000076-PHOTO-2025-11-29-13-52-36.jpg",
  "00000077-PHOTO-2025-11-29-13-53-45.jpg",
  "00000079-VIDEO-2025-11-29-13-58-44.mp4",
  "00000084-PHOTO-2025-11-29-14-19-49.jpg",
  "00000117-PHOTO-2025-12-10-12-50-03.jpg",
  "00000120-PHOTO-2025-12-10-12-51-55.jpg",
  "00000197-PHOTO-2025-12-23-18-34-39.jpg",
  "00000218-GIF-2025-12-28-11-20-35.mp4",
  "00000219-GIF-2025-12-28-12-59-55.mp4",
  "00000285-GIF-2026-01-30-23-35-58.mp4",
  "00000286-PHOTO-2026-01-30-23-37-30.jpg",
  "00000287-PHOTO-2026-01-30-23-38-00.jpg",
  "00000288-PHOTO-2026-02-05-10-06-36.jpg",
  "00000292-PHOTO-2026-02-05-11-13-13.jpg",
  "00000325-PHOTO-2026-02-14-20-30-19.jpg",
  "00000364-PHOTO-2026-02-16-18-20-08.jpg",
  "00000366-PHOTO-2026-02-16-18-22-30.jpg",
  "00000368-PHOTO-2026-02-16-18-23-25.jpg",
  "00000371-PHOTO-2026-02-16-18-24-45.jpg",
  "00000430-PHOTO-2026-02-19-08-57-27.jpg",
  "00000431-PHOTO-2026-02-19-08-57-27.jpg",
  "00000445-PHOTO-2026-02-19-09-16-05.jpg",
  "00000453-PHOTO-2026-02-19-10-16-48.jpg",
  "00000465-PHOTO-2026-02-19-11-35-22.jpg",
  "00000590-GIF-2026-02-25-19-29-04.mp4",
  "00000591-GIF-2026-02-25-19-29-16.mp4",
  "00000592-PHOTO-2026-02-25-19-30-48.jpg",
  "00000646-PHOTO-2026-03-24-15-13-27.jpg",
  "00000687-PHOTO-2026-03-26-10-02-29.jpg",
  "00000707-PHOTO-2026-03-29-10-22-29.jpg",
  "00000722-GIF-2026-03-31-18-13-39.mp4",
  "00000736-PHOTO-2026-04-01-12-45-27.jpg",
  "00000739-PHOTO-2026-04-01-12-47-59.jpg",
  "00000740-PHOTO-2026-04-01-12-48-00.jpg",
  "00000741-PHOTO-2026-04-01-12-48-00.jpg",
  "00000756-VIDEO-2026-04-02-15-12-13.mp4",
  "00000827-VIDEO-2026-04-19-20-33-45.mp4",
  "00000844-PHOTO-2026-04-20-11-57-18.jpg",
  "00000891-PHOTO-2026-04-21-11-48-54.jpg",
  "00000898-PHOTO-2026-04-21-11-50-54.jpg",
  "00000899-PHOTO-2026-04-21-11-50-54.jpg",
  "00000934-PHOTO-2026-04-27-14-28-50.jpg",
  "00000936-PHOTO-2026-04-27-14-31-00.jpg",
  "00000937-PHOTO-2026-04-27-14-31-37.jpg",
  "00000961-GIF-2026-04-28-23-05-59.mp4",
  "00000970-PHOTO-2026-04-29-12-29-38.jpg",
  "00000972-PHOTO-2026-04-29-14-17-16.jpg",
  "00000973-VIDEO-2026-04-29-14-19-42.mp4",
  "00000974-PHOTO-2026-04-29-14-19-42.jpg",
  "00000975-PHOTO-2026-04-29-14-19-43.jpg",
  "00000976-PHOTO-2026-04-29-14-20-46.jpg",
  "00000978-PHOTO-2026-04-29-14-21-27.jpg",
  "00000979-PHOTO-2026-04-29-14-55-35.jpg",
  "00000980-PHOTO-2026-04-29-14-55-36.jpg",
  "00000981-PHOTO-2026-04-29-14-55-36.jpg",
  "00000982-PHOTO-2026-04-29-14-55-37.jpg",
  "00000983-PHOTO-2026-04-29-14-55-37.jpg",
  "00000984-PHOTO-2026-04-29-14-55-37.jpg",
  "00000985-PHOTO-2026-04-29-14-55-38.jpg",
  "00000986-PHOTO-2026-04-29-14-55-38.jpg",
  "00000992-PHOTO-2026-04-29-15-05-04.jpg",
  "00000993-PHOTO-2026-04-29-15-05-04.jpg",
  "00000999-PHOTO-2026-04-29-15-40-54.jpg",
  "00001000-PHOTO-2026-04-29-15-42-31.jpg",
  "00001006-1-1440x810.jpg",
  "00001029-PHOTO-2026-04-30-21-42-33.jpg",
  "00001039-VIDEO-2026-05-04-22-59-11.mp4",
  "00001071-PHOTO-2026-05-09-16-51-02.jpg",
  "00001113-PHOTO-2026-05-11-10-21-06.jpg",
  "00001120-GIF-2026-05-11-10-33-44.mp4",
  "00001126-GIF-2026-05-11-10-36-48.mp4",
  "00001128-GIF-2026-05-11-10-37-09.mp4",
  "00001148-PHOTO-2026-05-13-15-09-36.jpg",
  "00001163-PHOTO-2026-05-14-17-57-20.jpg",
  "00001170-VIDEO-2026-05-14-22-10-39.mp4",
  "00001171-PHOTO-2026-05-14-22-15-18.jpg",
  "00001172-PHOTO-2026-05-14-22-15-50.jpg",
  "00001175-PHOTO-2026-05-14-23-32-10.jpg",
  "00001177-PHOTO-2026-05-15-08-14-52.jpg",
  "00001178-PHOTO-2026-05-15-08-16-55.jpg",
  "00001192-PHOTO-2026-05-18-17-40-47.jpg",
  "00001193-PHOTO-2026-05-18-17-40-48.jpg",
  "00001194-PHOTO-2026-05-18-17-41-11.jpg",
  "00001242-PHOTO-2026-05-20-20-14-33.jpg",
  "00001246-PHOTO-2026-05-20-20-23-56.jpg",
  "00001272-GIF-2026-05-22-09-44-14.mp4",
  "00001279-GIF-2026-05-22-12-12-01.mp4",
  "00001300-PHOTO-2026-05-25-11-50-51.jpg",
  "00001305-PHOTO-2026-05-25-11-53-37.jpg",
  "00001308-PHOTO-2026-05-25-19-46-33.jpg",
  "00001309-PHOTO-2026-05-25-19-46-34.jpg",
  "00001310-PHOTO-2026-05-25-19-46-34.jpg",
  "00001316-PHOTO-2026-05-26-08-24-54.jpg",
  "00001317-PHOTO-2026-05-26-08-24-55.jpg",
  "00001318-PHOTO-2026-05-26-08-24-55.jpg",
  "00001319-PHOTO-2026-05-26-08-24-55.jpg",
  "00001374-GIF-2026-05-28-09-43-51.mp4",
  "00001452-GIF-2026-06-01-14-43-37.mp4",
  "00001459-VIDEO-2026-06-01-15-27-43.mp4",
  "00001460-PHOTO-2026-06-01-15-27-52.jpg",
  "00001471-PHOTO-2026-06-01-15-43-49.jpg",
  "00001490-GIF-2026-06-02-11-28-23.mp4",
  "00001491-PHOTO-2026-06-02-13-44-57.jpg",
  "00001496-GIF-2026-06-02-13-46-05.mp4",
  "00001497-GIF-2026-06-02-13-46-45.mp4",
  "00001499-GIF-2026-06-02-13-46-57.mp4",
  "00001503-PHOTO-2026-06-02-13-48-25.jpg",
  "00001514-GIF-2026-06-02-13-50-07.mp4",
  "00001554-PHOTO-2026-06-02-14-11-44.jpg",
  "00001559-PHOTO-2026-06-02-15-10-59.jpg",
  "00001577-PHOTO-2026-06-02-15-41-00.jpg",
  "00001579-GIF-2026-06-02-15-41-37.mp4",
  "00001590-PHOTO-2026-06-02-17-16-41.jpg",
  "00001600-PHOTO-2026-06-02-17-32-04.jpg",
  "00001619-PHOTO-2026-06-02-21-46-40.jpg",
  "00001634-GIF-2026-06-02-22-18-23.mp4",
  "00001635-PHOTO-2026-06-02-22-20-08.jpg",
  "00001699-PHOTO-2026-06-03-11-07-10.jpg",
  "00001739-PHOTO-2026-06-04-12-17-33.jpg",
  "00001740-VIDEO-2026-06-04-12-18-13.mp4",
  "00001741-VIDEO-2026-06-04-12-19-26.mp4",
  "00001742-PHOTO-2026-06-04-12-19-56.jpg",
  "00001765-PHOTO-2026-06-04-14-45-05.jpg",
  "00001770-PHOTO-2026-06-04-14-51-15.jpg",
  "00001780-PHOTO-2026-06-04-15-07-18.jpg",
  "00001782-PHOTO-2026-06-04-15-08-35.jpg",
  "00001784-PHOTO-2026-06-04-15-09-10.jpg",
  "00001785-PHOTO-2026-06-04-15-09-10.jpg",
  "00001786-PHOTO-2026-06-04-15-09-10.jpg",
  "00001787-PHOTO-2026-06-04-15-09-10.jpg",
  "00001790-GIF-2026-06-04-15-11-11.mp4",
  "00001791-VIDEO-2026-06-04-15-27-56.mp4",
  "WhatsApp Image 2026-06-04 at 17.32.15.jpeg",
  "WhatsApp Image 2026-06-04 at 18.01.23.jpeg",
  "WhatsApp Image 2026-06-04 at 22.31.19.jpeg",
  "WhatsApp Image 2026-06-05 at 09.16.08.jpeg",
  "WhatsApp Image 2026-06-05 at 09.22.32.jpeg",
  "WhatsApp Image 2026-06-05 at 09.31.15.jpeg",
  "WhatsApp Image 2026-06-05 at 10.21.19.jpeg",
  "WhatsApp Image 2026-06-05 at 11.04.05.jpeg",
  "WhatsApp Image 2026-06-05 at 11.54.13.jpeg",
  "00000222-Capture d'écran 2026-01-05 à 18.12.47.png",
  "WhatsApp Video 2026-06-04 at 19.39.54.mp4",
  "WhatsApp GIF 2026-06-05 at 11.43.01.gif",
  "WhatsApp GIF 2026-06-05 at 11.45.39.gif",
];

// Balanced selection: 4 per agent (1 for Charles who only sent 1)
export const allAudios = [
  // Abel-Antoine — #f59e0b
  { file: "00000533-AUDIO-2026-02-23-11-58-07.opus", author: "Abel-Antoine", color: "#f59e0b" },
  { file: "00001168-AUDIO-2026-05-14-22-05-56.opus", author: "Abel-Antoine", color: "#f59e0b" },
  { file: "00001500-AUDIO-2026-06-02-13-47-57.opus", author: "Abel-Antoine", color: "#f59e0b" },
  { file: "00001747-AUDIO-2026-06-04-13-33-04.opus", author: "Abel-Antoine", color: "#f59e0b" },
  // Flavien — #3b82f6
  { file: "00000299-AUDIO-2026-02-11-14-45-27.opus", author: "Flavien", color: "#3b82f6" },
  { file: "00000541-AUDIO-2026-02-23-15-42-44.opus", author: "Flavien", color: "#3b82f6" },
  { file: "00001240-AUDIO-2026-05-20-20-11-39.opus", author: "Flavien", color: "#3b82f6" },
  { file: "00001738-AUDIO-2026-06-04-12-17-20.opus", author: "Flavien", color: "#3b82f6" },
  // Charles — #8b5cf6
  { file: "00000833-AUDIO-2026-04-20-09-10-47.opus", author: "Charles", color: "#8b5cf6" },
  // Thomas — #10b981
  { file: "00000067-AUDIO-2025-11-29-11-43-21.opus", author: "Thomas", color: "#10b981" },
  { file: "00000432-AUDIO-2026-02-19-08-58-44.opus", author: "Thomas", color: "#10b981" },
  { file: "00001493-AUDIO-2026-06-02-13-45-24.opus", author: "Thomas", color: "#10b981" },
  { file: "00001707-AUDIO-2026-06-03-15-24-00.opus", author: "Thomas", color: "#10b981" },
];

export const castingScript = `Je suis acteur.
C'est comme ça qu'on dit.
Tous les matins je me lève pour devenir quelqu'un d'autre.
Pour incarner des vies qui sont pas la mienne.

Mais le soir, quand je ferme les yeux,
je suis seul, face à moi-même.
Jouer des rôles, ça remplit pas le silence.

Et puis t'es arrivée.
Comme une évidence.
On me dit souvent que j'ai la vision, mais là j'avoue :
je t'ai pas vue venir.

Avant toi, tout était un peu flou.
Je regardais sans vraiment voir.
Je connaissais les bons angles, les bonnes lumières.
Mais je passais à côté de l'essentiel.
Mon cœur était hors-champ.
Comme coupé au montage.

Depuis que t'es là, c'est plein soleil.
Au crépuscule comme en plein jour.
T'es ma nuit américaine.
Fini le noir et blanc — j'ai retrouvé la couleur.

Tu connais tous mes regards.
Les fatigués. Les heureux.
Ceux des jours de première.
Des lendemains difficiles.

Avec toi, pour la première fois,
j'ai plus besoin de jouer.

Nous deux, c'est plan séquence.
Version longue.
Sans clap de fin.`;

export const finalMessage = `Maxime,

Tu pensais passer un week-end de travail.
Tu pensais auditionner pour une pub de lunettes.
Tu pensais que tes amis avaient peut-être oublié de faire quelque chose pour toi.

Ils n'ont pas oublié.

Pendant 219 jours, ils t'ont menti.
Ils t'ont menti avec talent.
Ils t'ont menti avec amour.

1 545 messages échangés.
4 agents infiltrés dans ta vie.
6 plans abandonnés et recommencés.
1 fausse gaffe improvisée en live.
1 faux site web, 1 fausse adresse mail.
1 chanson créée à 3h05 du matin.
4 costumes de Tortues Ninja.

Tout ça pour voir ta tête quand tu comprendrais.

Tu as une chance insolente d'avoir ces amis-là.`;
