"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  "> INITIALISATION DU SYSTÈME...",
  "> CONNEXION AU SERVEUR SÉCURISÉ...",
  "> AUTHENTIFICATION EN COURS...",
  "> ACCÈS NIVEAU 5 ACCORDÉ",
  "> CHARGEMENT DU DOSSIER #PAMBET-2025...",
  "> 1 545 MESSAGES DÉCHIFFRÉS",
  "> 219 JOURS D'OPÉRATION SECRÈTE",
  "> DOSSIER PRÊT",
];

export default function Boot({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [showTitle, setShowTitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < lines.length) {
        setVisibleLines((prev) => [...prev, lines[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowTitle(true), 400);
        setTimeout(() => setShowButton(true), 1000);
      }
    }, 280);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050508] overflow-hidden">
      {/* Scanline */}
      <div className="pointer-events-none fixed inset-0 z-10"
        style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.03) 3px, rgba(0,0,0,0.03) 4px)" }}
      />

      <div className="w-full max-w-2xl px-6">
        {/* Terminal */}
        <div className="font-mono text-sm mb-8 space-y-1 min-h-[200px]">
          {visibleLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="text-green-400"
            >
              {line}
            </motion.div>
          ))}
          {visibleLines.length < lines.length && (
            <span className="text-green-400 cursor">_</span>
          )}
        </div>

        {/* Title */}
        <AnimatePresence>
          {showTitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10"
            >
              <div className="inline-block mb-4 rotate-[-8deg]">
                <div className="border-4 border-red-600 px-4 py-1 font-mono font-black text-red-600 text-sm tracking-widest">
                  CLASSIFIÉ
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-2 glow-gold" style={{ color: "#f59e0b" }}>
                OPÉRATION
              </h1>
              <h1 className="text-6xl md:text-8xl font-black tracking-tight glow-gold" style={{ color: "#f59e0b" }}>
                PAMBET
              </h1>
              <p className="mt-4 font-mono text-xs tracking-[0.4em] text-slate-500 uppercase">
                Dossier Numéro 001 — Usage Strictement Personnel
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button */}
        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <button
                onClick={onComplete}
                className="group relative font-mono text-sm tracking-widest uppercase px-10 py-4 border border-amber-500/50 text-amber-400 hover:bg-amber-500/10 transition-all duration-300 cursor-pointer"
              >
                <span className="relative z-10">▶ ACCÉDER AU DOSSIER</span>
                <div className="absolute inset-0 border border-amber-500/20 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </button>
              <p className="mt-4 font-mono text-xs text-slate-600">
                Maxime Pambet — Accès autorisé après l&apos;EVG
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
