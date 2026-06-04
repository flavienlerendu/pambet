"use client";
import { motion, AnimatePresence } from "framer-motion";
import { keyMoments } from "../data/chatData";
import { useState } from "react";

const classColors: Record<string, string> = {
  "CONFIDENTIEL": "text-blue-400 border-blue-400",
  "TOP SECRET": "text-red-400 border-red-400",
  "PERSONNEL": "text-purple-400 border-purple-400",
  "URGENT — OPÉRATION RÉUSSIE": "text-amber-400 border-amber-400",
};

export default function Dossiers() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.4em] text-amber-500 uppercase mb-4">
            Archives Secrètes
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Les Dossiers Classifiés
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            9 moments clés. Chaque dossier révèle ce qui se passait dans ton dos.
          </p>
        </motion.div>

        <div className="space-y-3">
          {keyMoments.map((moment, i) => {
            const isOpen = open === moment.id;
            const colorClass = classColors[moment.classification] || "text-slate-400 border-slate-600";
            return (
              <motion.div
                key={moment.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : moment.id)}
                  className="w-full text-left bg-[#0d0d14] border border-[#1e1e2e] rounded-lg overflow-hidden hover:border-slate-700 transition-all duration-200"
                >
                  <div className="flex items-center gap-4 px-5 py-4">
                    <span className="text-2xl flex-shrink-0">{moment.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <div className={`font-mono text-[10px] border px-2 py-0.5 rounded tracking-widest ${colorClass}`}>
                          {moment.classification}
                        </div>
                        <span className="text-xs font-mono text-slate-600">{moment.date}</span>
                      </div>
                      <h3 className="text-white font-bold text-sm md:text-base">{moment.title}</h3>
                    </div>
                    <span className={`text-slate-500 transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-90" : ""}`}>
                      ▶
                    </span>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-[#080812] border-x border-b border-[#1e1e2e] rounded-b-lg px-5 pb-5 pt-4">
                        {/* Content */}
                        <div className="relative pl-4 border-l border-slate-800 mb-4">
                          <p className="text-slate-300 text-sm leading-relaxed">{moment.content}</p>
                        </div>
                        {/* Detail */}
                        {moment.detail && (
                          <div className="bg-[#0d0d18] rounded-lg p-4 border border-slate-800/50">
                            <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-2">
                              🔍 Détail classifié
                            </p>
                            <p className="text-slate-400 text-sm italic">{moment.detail}</p>
                          </div>
                        )}
                        {/* Special for "L'oiseau" */}
                        {moment.id === "oiseau" && (
                          <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-4 text-center p-4 border border-amber-500/40 rounded-lg bg-amber-500/5"
                          >
                            <p className="text-amber-400 font-black text-lg glow-gold">
                              🏆 CHAMPIONS DU MONDE 🏆
                            </p>
                            <p className="text-slate-400 text-xs mt-1 font-mono">
                              Le message d&apos;Abel-Antoine, 13h48, 2 juin 2026
                            </p>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
