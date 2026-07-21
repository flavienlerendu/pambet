const insults = [
  "You're killing me, Smalls.",
  "You are one pathetic loser!",
  "Stupid is as stupid does.",
  "You can't handle the truth!",
  "Les cons, ça ose tout. C'est même à ça qu'on les reconnaît.",
  "T'es mauvais, Jack.",
  "C'est de la merde !",
  "You're an embarrassment.",
  "You blew it!",
  "Amateur!",
  "You have failed me for the last time.",
  "You're fired!",
  "Il est tellement mauvais qu'il ferait passer un figurant pour le héros.",
  "On dirait qu'il joue contre son propre camp.",
  "Ce n'est pas un niveau débutant, c'est un niveau tutoriel raté.",
  "S'il y avait une médaille de la médiocrité, il finirait deuxième.",
];

export function randomInsult() {
  return insults[Math.floor(Math.random() * insults.length)];
}
