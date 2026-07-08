"use client";
import { motion } from "framer-motion";

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

export default function Resultat() {
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

        {/* Videos */}
        <div className="space-y-16">
          {videos.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
      </div>
    </section>
  );
}
