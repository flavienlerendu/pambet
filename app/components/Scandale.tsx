"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function ScandaleGate({ onSuccess }: { onSuccess: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const submit = () => {
    if (value.toLowerCase().trim() === "pestorosso") {
      onSuccess();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setValue("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center py-16 px-6"
    >
      <div className="w-full max-w-sm text-center">
        <p className="font-mono text-xs tracking-[0.4em] text-orange-500 uppercase mb-4">
          ⚠ Niveau 7 — Accès ultra-restreint
        </p>
        <h3 className="text-2xl font-black text-white mb-2">Dossier Sensible</h3>
        <p className="text-slate-500 text-sm font-mono mb-8">
          Ce dossier contient des informations classifiées d'intérêt mondial.
          Habilitation maximale requise.
        </p>

        <motion.div animate={shake ? { x: [-8, 8, -8, 8, 0] } : {}} transition={{ duration: 0.4 }}>
          <input
            type="password"
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false); }}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder="Code ultra-secret"
            autoFocus
            className={`w-full bg-[#0d0d14] border rounded-lg px-4 py-3 text-white font-mono text-center text-sm outline-none transition-colors mb-3 ${
              error ? "border-orange-500 placeholder-orange-500/50" : "border-[#1e1e2e] focus:border-slate-600 placeholder-slate-600"
            }`}
          />

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-orange-500 text-xs font-mono mb-3"
              >
                Habilitation refusée. Vous n'êtes pas prêt.
              </motion.p>
            )}
          </AnimatePresence>

          <button
            onClick={submit}
            className="w-full border border-orange-500/50 text-orange-400 font-mono text-sm uppercase tracking-widest py-3 rounded-lg hover:bg-orange-500/10 transition-colors"
          >
            ▶ Accéder au dossier sensible
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

const allegations = [
  {
    icon: "🥊",
    label: "VIOLENCE CARACTÉRISÉE",
    title: "La Finale qui a failli tourner au bain de sang",
    body: "Le 19 juillet 2026, au stade de Los Ángeles, devant 90 000 témoins sidérés, les joueurs argentins ont transformé la plus grande finale de l'histoire du football en scène de règlement de comptes. Des coups, des menaces, des provocations — tout ce que le sport est censé transcender, réduit à néant en 90 secondes d'hystérie collective. Les images ont fait le tour du monde. L'Argentine, elle, a préféré regarder ailleurs.",
  },
  {
    icon: "🏆",
    label: "CORRUPTION PRÉSUMÉE",
    title: "La FIFA dans la poche ? Les soupçons qui ne disparaissent pas",
    body: "Depuis la victoire argentine au Qatar en 2022, les questions s'accumulent. Des arbitrages ahurissants, des décisions de tirage au sort improbables, des sponsors mystérieusement alignés sur les intérêts de la fédération argentine. Des sources internes à la FIFA, sous couvert d'anonymat, évoquent des \"arrangements\" et des \"facilitations\". Aucune preuve formelle à ce jour — mais quand la fumée est aussi dense, difficile de croire qu'il n'y a pas de feu.",
  },
  {
    icon: "😤",
    label: "COMPORTEMENT SCANDALEUX",
    title: "L'arrogance comme marque de fabrique",
    body: "Ils chantent, ils insultent, ils narguent. Le vestiaire argentin est devenu le symbole d'un football qui a oublié le respect. Les incidents se multiplient depuis 2021 : altercations avec le staff brésilien, provocation envers les supporters néerlandais, et aujourd'hui, des coups portés sur des joueurs espagnols à peine le coup de sifflet final retenti. L'UEFA et la FIFA ont ouvert des enquêtes. L'Argentine, elle, a sorti les avocats.",
  },
];

export default function Scandale() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <section className="py-24 px-6 bg-[#080508]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs tracking-[0.4em] text-orange-500 uppercase mb-4">
            Dossier Noir — Niveau 7
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Le <span className="text-orange-500">Scandale</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed mt-2">
            Attendez 2 minutes. Le mariage de Max, c'est bien. C'est même magnifique.
            Mais il y a bien plus important pour l'humanité en ce moment.
            <span className="text-orange-400 font-bold"> Notre haine des footballeurs argentins.</span>
            <br />
            Passons quelques instants sur ce scandale.
          </p>
        </motion.div>

        {!unlocked ? (
          <ScandaleGate onSuccess={() => setUnlocked(true)} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Alert banner */}
            <div className="border border-orange-500/40 bg-orange-500/5 rounded-xl px-6 py-4 flex items-center gap-4">
              <span className="text-2xl">🚨</span>
              <p className="text-orange-300 font-mono text-sm leading-relaxed">
                <strong>ALERTE MONDIALE :</strong> Ce dossier compile les faits, témoignages et images qui ont mis le football argentin au ban de la planète sportive. Âmes sensibles s'abstenir.
              </p>
            </div>

            {/* Allegations */}
            {allegations.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-[#0d0d14] border border-[#1e1e2e] rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{a.icon}</span>
                  <span className="font-mono text-xs text-orange-500 tracking-widest uppercase border border-orange-500/30 px-2 py-0.5 rounded">
                    {a.label}
                  </span>
                </div>
                <h3 className="text-white font-black text-xl mb-3">{a.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{a.body}</p>
              </motion.div>
            ))}

            {/* Video embed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-[#0d0d14] border border-orange-500/20 rounded-2xl overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-[#1e1e2e]">
                <p className="font-mono text-xs text-orange-500 tracking-widest uppercase mb-1">
                  Preuve vidéo — Finale Coupe du Monde 2026
                </p>
                <h3 className="text-white font-bold text-lg">La bagarre Argentine — Espagne</h3>
                <p className="text-slate-500 text-sm mt-0.5">Images brutes. Non censurées. Condamnables.</p>
              </div>
              <div className="relative bg-black" style={{ paddingBottom: "177.77%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dvbkdVe8nRY"
                  title="Bagarre Argentine Espagne Finale Coupe du Monde 2026"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>

            {/* Verdict */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="border border-orange-500/40 bg-orange-500/5 rounded-xl px-6 py-5 text-center"
            >
              <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-2">Verdict de la rédaction</p>
              <p className="text-white font-black text-2xl mb-2">HONTE MONDIALE 🌍</p>
              <p className="text-slate-400 text-sm">
                Le football argentin a gagné des trophées. Il a perdu quelque chose de bien plus précieux : le respect.
                L'histoire jugera. Et elle ne sera pas clémente.
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
