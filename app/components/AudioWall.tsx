"use client";
import { motion } from "framer-motion";
import { allAudios } from "../data/chatData";
import { useState, useRef } from "react";

export default function AudioWall() {
  const [playing, setPlaying] = useState<string | null>(null);
  const audioRefs = useRef<Map<string, HTMLAudioElement>>(new Map());

  const togglePlay = (file: string) => {
    const prev = playing;
    if (prev && prev !== file) {
      audioRefs.current.get(prev)?.pause();
    }
    const el = audioRefs.current.get(file);
    if (!el) return;
    if (playing === file) {
      el.pause();
      setPlaying(null);
    } else {
      el.play().catch(() => {});
      setPlaying(file);
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.4em] text-amber-500 uppercase mb-4">
            Archives Audio
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Le Mur des Vocaux
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            93 notes vocales. Une sélection équilibrée — chaque agent a sa voix.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {allAudios.map(({ file, author, color }, i) => {
            const isPlaying = playing === file;
            return (
              <motion.div
                key={file}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <audio
                  ref={(el) => { if (el) audioRefs.current.set(file, el); }}
                  src={`/media/${file}`}
                  onEnded={() => setPlaying(null)}
                />
                <button
                  onClick={() => togglePlay(file)}
                  className={`w-full p-4 rounded-xl border text-left transition-all duration-200 ${
                    isPlaying
                      ? "border-opacity-50"
                      : "bg-[#0d0d14] border-[#1e1e2e] hover:border-slate-700"
                  }`}
                  style={isPlaying ? { background: `${color}15`, borderColor: `${color}80` } : {}}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: isPlaying ? color : "#1a1a2e" }}
                    >
                      <span className={`text-xs ${isPlaying ? "text-black" : "text-white"}`}>
                        {isPlaying ? "⏸" : "▶"}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-mono font-bold truncate" style={{ color }}>
                        {author}
                      </p>
                      <p className="text-xs text-slate-700 truncate font-mono">🎙️ Vocal #{i + 1}</p>
                    </div>
                  </div>
                  {/* Waveform visual */}
                  <div className="flex items-end gap-0.5 h-6">
                    {Array.from({ length: 20 }).map((_, j) => (
                      <div
                        key={j}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${20 + Math.sin(j * 1.5 + i) * 15 + Math.random() * 10}%`,
                          background: isPlaying ? color : "#374151",
                          opacity: isPlaying ? 0.8 : 0.4,
                        }}
                      />
                    ))}
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-700 text-xs font-mono mt-8"
        >
          + 80 autres vocaux dans les archives complètes
        </motion.p>
      </div>
    </section>
  );
}
