"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { randomInsult } from "../data/insults";
import InsultPopup from "./InsultPopup";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const photos = [
  "WhatsApp Image 2026-07-11 at 20.52.52.jpeg",
  "WhatsApp Image 2026-07-11 at 20.53.05.jpeg",
  "WhatsApp Image 2026-07-11 at 20.53.12.jpeg",
  "WhatsApp Image 2026-07-11 at 20.53.14.jpeg",
  "WhatsApp Image 2026-07-11 at 20.53.14 (1).jpeg",
  "WhatsApp Image 2026-07-11 at 20.53.33.jpeg",
  "WhatsApp Image 2026-07-11 at 20.54.06.jpeg",
  "WhatsApp Image 2026-07-11 at 20.54.44.jpeg",
  "WhatsApp Image 2026-07-11 at 21.58.19.jpeg",
];

const captions = [
  "Niveau d'élégance : hors catégorie",
  "La femme qui a dit oui. Respect.",
  "Quand l'amour prend une forme humaine",
  "Madame Pambet au naturel",
  "Elle gère. Absolument tout.",
  "La vraie boss de l'opération",
  "Style, classe, et bonne humeur",
  "La raison pour laquelle tout ça valait le coup",
  "Officiellement la meilleure décision de Maxime",
];

function MarionGate({ onSuccess }: { onSuccess: () => void }) {
  const [value, setValue] = useState("");
  const [shake, setShake] = useState(false);
  const [insult, setInsult] = useState("");

  const submit = () => {
    if (insult) return;
    if (value.toLowerCase().trim() === "marion") {
      onSuccess();
    } else {
      setInsult(randomInsult());
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setValue("");
    }
  };

  return (
    <>
    <InsultPopup insult={insult} onClose={() => setInsult("")} />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center py-16 px-6"
    >
      <div className="w-full max-w-sm text-center">
        <div className="text-5xl mb-6">💍</div>
        <p className="font-mono text-xs tracking-[0.4em] text-pink-400 uppercase mb-4">
          Niveau 8 — Accès amoureux
        </p>
        <h3 className="text-2xl font-black text-white mb-2">Dossier Marion</h3>
        <p className="text-slate-500 text-sm font-mono mb-8">
          Ce dossier est réservé aux personnes qui savent ce qui compte vraiment.
        </p>

        <motion.div animate={shake ? { x: [-8, 8, -8, 8, 0] } : {}} transition={{ duration: 0.4 }}>
          <input
            type="password"
            value={value}
            onChange={(e) => { setValue(e.target.value); }}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder="0 indice - Mouahahah"
            className="w-full bg-[#0d0d14] border border-[#1e1e2e] rounded-lg px-4 py-3 text-white font-mono text-center text-sm outline-none transition-colors mb-3 focus:border-pink-500/50 placeholder-slate-600"
          />

          <button
            onClick={submit}
            className="w-full border border-pink-500/50 text-pink-400 font-mono text-sm uppercase tracking-widest py-3 rounded-lg hover:bg-pink-500/10 transition-colors"
          >
            ♥ Ouvrir le dossier
          </button>
        </motion.div>
      </div>
    </motion.div>
    </>
  );
}

export default function Marion() {
  const [unlocked, setUnlocked] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 bg-[#05040a]">
      <div className="max-w-5xl mx-auto">
        <>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs tracking-[0.4em] text-pink-400 uppercase mb-4">
            Dossier Final — Niveau 8
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            La <span className="text-pink-400">Femme de ta Vie</span>
          </h2>
          <p className="text-slate-500 font-mono text-sm max-w-lg mx-auto">
            La nouvelle femme de ta vie est un être de lumière.
            Bravo les mariés. Vive l&apos;amour. 💕
          </p>
        </motion.div>

        {!unlocked ? (
          <MarionGate onSuccess={() => setUnlocked(true)} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Love banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 p-8 rounded-2xl border border-pink-500/20 bg-pink-500/5"
            >
              <div className="text-6xl mb-4">💍</div>
              <h3 className="text-3xl font-black text-white mb-3">
                Marion &amp; Maxime
              </h3>
              <p className="text-pink-300 text-lg font-light italic max-w-xl mx-auto leading-relaxed">
                « La vraie victoire de cette opération, ce n'est pas d'avoir piégé Max.
                C'est qu'il rentre chez lui avec cette femme-là. »
              </p>
              <div className="flex justify-center gap-2 mt-6 flex-wrap">
                {["✨ Être de lumière", "💕 Vive l'amour", "🎊 Bravo les mariés", "🏆 Best decision ever"].map((tag) => (
                  <span key={tag} className="text-xs font-mono text-pink-400 border border-pink-500/30 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Photo grid */}
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {photos.map((photo, i) => (
                <motion.div
                  key={photo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="break-inside-avoid cursor-pointer group relative rounded-xl overflow-hidden"
                  onClick={() => setSelected(photo)}
                >
                  <div className="relative w-full">
                    <Image
                      src={`${BASE}/media/${encodeURIComponent(photo)}`}
                      alt={captions[i] ?? "Marion"}
                      width={600}
                      height={800}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end">
                      <p className="text-white text-xs font-mono p-3 italic">
                        {captions[i] ?? "Marion"}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
              {selected && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                  onClick={() => setSelected(null)}
                >
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    className="relative max-w-lg w-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src={`${BASE}/media/${encodeURIComponent(selected)}`}
                      alt="Marion"
                      width={800}
                      height={1000}
                      className="w-full h-auto rounded-2xl object-contain max-h-[85vh]"
                    />
                    <button
                      onClick={() => setSelected(null)}
                      className="absolute top-3 right-3 text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center text-sm hover:bg-black/80"
                    >
                      ✕
                    </button>
                    <p className="text-center text-pink-300 text-sm font-mono mt-3 italic">
                      {captions[photos.indexOf(selected)] ?? "Marion"}
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Final message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center mt-20 p-8"
            >
              <p className="text-4xl mb-4">💕</p>
              <p className="text-white font-black text-2xl mb-3">Vive les Pambet</p>
              <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                Fin du dossier. L'opération est terminée.
                Mais la plus belle aventure, elle, ne fait que commencer.
              </p>
            </motion.div>
          </motion.div>
        )}
        </>
      </div>
    </section>
  );
}
