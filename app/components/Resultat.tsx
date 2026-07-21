"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const videos = [
  {
    id: "declaration",
    label: "Document #1 — La Déclaration",
    title: "La Performance.",
    subtitle: "Une déclaration d'amour de haut vol",
    file: "resultat-declaration.mp4",
    tag: "CONFIDENTIEL",
    tagColor: "text-red-500 border-red-500",
  },
  {
    id: "rewind",
    label: "Document #2 — Le Rewind",
    title: "L'Opération Pambet — De A à Z",
    subtitle: "Montage complet de l'opération · Durée classifiée",
    file: "resultat-rewind.mp4",
    tag: "DÉCLASSIFIÉ",
    tagColor: "text-green-500 border-green-500",
  },
];

function VideoGate({ onSuccess }: { onSuccess: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const submit = () => {
    if (value.toLowerCase().trim() === "motorboat") {
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
        <p className="font-mono text-xs tracking-[0.4em] text-red-500 uppercase mb-4">
          Accès restreint — Niveau 6
        </p>
        <h3 className="text-2xl font-black text-white mb-2">Pièces classifiées</h3>
        <p className="text-slate-500 text-sm font-mono mb-8">
          Ces documents nécessitent une habilitation supplémentaire.
        </p>

        <motion.div animate={shake ? { x: [-8, 8, -8, 8, 0] } : {}} transition={{ duration: 0.4 }}>
          <input
            type="password"
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false); }}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder="Code d'accès"
            className={`w-full bg-[#0d0d14] border rounded-lg px-4 py-3 text-white font-mono text-center text-sm outline-none transition-colors mb-3 ${
              error ? "border-red-500 placeholder-red-500/50" : "border-[#1e1e2e] focus:border-slate-600 placeholder-slate-600"
            }`}
          />

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-xs font-mono mb-3"
              >
                Habilitation refusée. Code incorrect.
              </motion.p>
            )}
          </AnimatePresence>

          <button
            onClick={submit}
            className="w-full border border-red-500/50 text-red-400 font-mono text-sm uppercase tracking-widest py-3 rounded-lg hover:bg-red-500/10 transition-colors"
          >
            ▶ Déclassifier
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Resultat() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <section className="py-24 px-6 bg-[#050508]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs tracking-[0.4em] text-amber-500 uppercase mb-4">
            Dossier — Pièces jointes
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Le <span className="text-amber-500">Résultat</span>
          </h2>
          <p className="text-slate-500 font-mono text-sm max-w-md mx-auto">
            Preuves irréfutables du succès de l&apos;Opération Pambet.
            Visionnage autorisé.
          </p>
        </motion.div>

        {/* Gate or Videos */}
        {!unlocked ? (
          <VideoGate onSuccess={() => setUnlocked(true)} />
        ) : (
          <div className="space-y-16">
            {videos.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
              >
                {/* Video card */}
                <div className="bg-[#0d0d14] border border-[#1e1e2e] rounded-2xl overflow-hidden">
                  {/* Card header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-[#1e1e2e]">
                    <div>
                      <p className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-1">
                        {v.label}
                      </p>
                      <h3 className="text-white font-bold text-lg">{v.title}</h3>
                      <p className="text-slate-500 text-sm mt-0.5">{v.subtitle}</p>
                    </div>
                    <div
                      className={`hidden md:block border-2 px-3 py-1 font-mono font-black text-xs tracking-widest rotate-[3deg] ${v.tagColor}`}
                    >
                      {v.tag}
                    </div>
                  </div>

                  {/* Player */}
                  <div className="relative bg-black">
                    <video
                      controls
                      preload="metadata"
                      className="w-full max-h-[70vh] object-contain"
                      src={`${BASE}/media/${encodeURIComponent(v.file)}`}
                    >
                      Votre navigateur ne supporte pas la lecture vidéo.
                    </video>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
