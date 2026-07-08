"use client";
import { motion, AnimatePresence } from "framer-motion";
import { allPhotos } from "../data/chatData";
import { useState } from "react";
import Image from "next/image";

const INITIAL_COUNT = 24;
const isVideo = (file: string) => file.endsWith(".mp4");
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const photoCount = allPhotos.filter((f) => !isVideo(f)).length;
const videoCount = allPhotos.filter(isVideo).length;

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visiblePhotos = showAll ? allPhotos : allPhotos.slice(0, INITIAL_COUNT);

  return (
    <section className="py-24 px-6 bg-[#080810]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.4em] text-amber-500 uppercase mb-4">
            Archives Visuelles
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {photoCount} Photos & {videoCount} Vidéos
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Des mois de préparation capturés. Chaque image raconte un moment
            de ce complot d&apos;amitié.
          </p>
        </motion.div>

        {/* Media grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {visiblePhotos.map((photo, i) => (
            <motion.div
              key={photo}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.02, 0.5) }}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
              onClick={() => setSelected(photo)}
            >
              {isVideo(photo) ? (
                <video
                  src={`${BASE}/media/${encodeURIComponent(photo)}`}
                  muted
                  loop
                  playsInline
                  className="w-full object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
                  style={{ display: "block" }}
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                />
              ) : (
                <Image
                  src={`${BASE}/media/${encodeURIComponent(photo)}`}
                  alt={`Photo ${i + 1}`}
                  width={300}
                  height={200}
                  className="w-full object-cover rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                  style={{ display: "block" }}
                />
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-all">
                  {isVideo(photo) ? "▶" : "🔍"}
                </span>
              </div>
              {isVideo(photo) && (
                <div className="absolute bottom-2 left-2 bg-black/60 rounded px-1.5 py-0.5 text-white text-xs font-mono">
                  ▶
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Show all button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <button
              onClick={() => setShowAll(true)}
              className="border border-amber-500/50 text-amber-500 font-mono text-sm uppercase tracking-widest px-8 py-3 rounded-lg hover:bg-amber-500/10 transition-colors"
            >
              Voir les {allPhotos.length} médias →
            </button>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-3xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {isVideo(selected) ? (
                <video
                  src={`${BASE}/media/${encodeURIComponent(selected)}`}
                  controls
                  autoPlay
                  className="w-full max-h-[85vh] object-contain rounded-lg"
                />
              ) : (
                <Image
                  src={`${BASE}/media/${encodeURIComponent(selected)}`}
                  alt="Photo agrandie"
                  width={900}
                  height={700}
                  className="w-full h-full object-contain rounded-lg"
                />
              )}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-8 h-8 bg-black/60 rounded-full text-white flex items-center justify-center text-sm hover:bg-black/80"
              >
                ✕
              </button>
              {/* Nav */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const idx = allPhotos.indexOf(selected);
                  if (idx > 0) setSelected(allPhotos[idx - 1]);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 rounded-full text-white flex items-center justify-center hover:bg-black/80"
              >
                ‹
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const idx = allPhotos.indexOf(selected);
                  if (idx < allPhotos.length - 1) setSelected(allPhotos[idx + 1]);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 rounded-full text-white flex items-center justify-center hover:bg-black/80"
              >
                ›
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
