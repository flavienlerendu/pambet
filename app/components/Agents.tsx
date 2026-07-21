"use client";
import { motion } from "framer-motion";
import { agents } from "../data/chatData";
import { useState, useEffect } from "react";
import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const turtleMap: Record<string, { name: string; color: string }> = {
  "Abel-Antoine": { name: "Michelangelo", color: "#f97316" },
  "Flavien":      { name: "Leonardo",     color: "#3b82f6" },
  "Charles":      { name: "Donatello",    color: "#a855f7" },
  "Thomas":       { name: "Raphael",      color: "#ef4444" },
};

function TurtleFace({ color, name }: { color: string; name: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a1a0a]">
      <svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg" className="w-48 h-48">
        {/* Shell */}
        <ellipse cx="100" cy="205" rx="72" ry="30" fill="#14532d"/>
        <ellipse cx="100" cy="195" rx="67" ry="26" fill="#166534"/>
        <polygon points="100,170 114,178 114,194 100,202 86,194 86,178" fill="#15803d" stroke="#14532d" strokeWidth="1.5"/>
        <polygon points="76,163 86,170 86,184 76,191 66,184 66,170" fill="#15803d" stroke="#14532d" strokeWidth="1.5"/>
        <polygon points="124,163 134,170 134,184 124,191 114,184 114,170" fill="#15803d" stroke="#14532d" strokeWidth="1.5"/>
        {/* Face */}
        <ellipse cx="100" cy="100" rx="70" ry="75" fill="#4ade80"/>
        <ellipse cx="100" cy="60" rx="52" ry="22" fill="#22c55e" opacity="0.4"/>
        {/* Bandana */}
        <rect x="28" y="68" width="144" height="36" rx="18" fill={color}/>
        {/* Bandana ties */}
        <line x1="170" y1="76" x2="183" y2="65" stroke={color} strokeWidth="6" strokeLinecap="round"/>
        <line x1="170" y1="82" x2="185" y2="90" stroke={color} strokeWidth="6" strokeLinecap="round"/>
        <ellipse cx="173" cy="79" rx="9" ry="7" fill={color} opacity="0.85" transform="rotate(-15 173 79)"/>
        {/* Eye whites */}
        <ellipse cx="72" cy="87" rx="18" ry="15" fill="white"/>
        <ellipse cx="128" cy="87" rx="18" ry="15" fill="white"/>
        {/* Pupils */}
        <circle cx="75" cy="88" r="9" fill="#111"/>
        <circle cx="131" cy="88" r="9" fill="#111"/>
        {/* Shine */}
        <circle cx="79" cy="84" r="3" fill="white"/>
        <circle cx="135" cy="84" r="3" fill="white"/>
        {/* Nose */}
        <ellipse cx="100" cy="115" rx="7" ry="5" fill="#22c55e"/>
        <circle cx="97" cy="116" r="2" fill="#16a34a"/>
        <circle cx="103" cy="116" r="2" fill="#16a34a"/>
        {/* Mouth */}
        <path d="M 75 132 Q 100 152 125 132" stroke="#166534" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      </svg>
      <p className="text-white font-black text-lg mt-1" style={{ color }}>{name}</p>
    </div>
  );
}

export default function Agents() {
  const [secretFlipped, setSecretFlipped] = useState<number | null>(null);
  const [photoFlipped, setPhotoFlipped] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhotoFlipped([true, true, true, true]);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const togglePhoto = (i: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoFlipped((prev) => prev.map((v, idx) => idx === i ? !v : v));
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.4em] text-amber-500 uppercase mb-4">
            Dossier Agents
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Les 4 Conspirateurs
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Ils ont tous une vie. Ils ont tous des bébés, des boulots, des réunions, des insomnies.
            Ils ont quand même été là.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agents.map((agent, i) => {
            const turtle = turtleMap[agent.name];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onClick={() => setSecretFlipped(secretFlipped === i ? null : i)}
              >
                <div className="relative bg-[#0d0d14] border border-[#1e1e2e] rounded-xl overflow-hidden hover:border-slate-600 transition-all duration-300 cursor-pointer">
                  {/* Color accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 z-10 opacity-60"
                    style={{ background: agent.color }}
                  />

                  {/* Photo flip zone */}
                  <div
                    className="relative w-full aspect-[4/3] cursor-pointer"
                    style={{ perspective: "1000px" }}
                    onClick={(e) => togglePhoto(i, e)}
                  >
                    <div
                      style={{
                        transformStyle: "preserve-3d",
                        transition: "transform 0.7s cubic-bezier(0.4,0.2,0.2,1)",
                        transform: photoFlipped[i] ? "rotateY(180deg)" : "rotateY(0deg)",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                      }}
                    >
                      {/* Front — portrait */}
                      <div style={{ backfaceVisibility: "hidden", position: "absolute", inset: 0 }}>
                        <Image
                          src={`${BASE}/media/${encodeURIComponent(agent.photo)}`}
                          alt={agent.name}
                          fill
                          className="object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-[#0d0d14]/20 to-transparent" />
                        <div className="absolute top-4 right-4 z-10">
                          <span
                            className="text-sm font-mono font-bold px-3 py-1 rounded border bg-[#0d0d14]/80 backdrop-blur-sm"
                            style={{ color: agent.color, borderColor: agent.color }}
                          >
                            {agent.role}
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-0 right-0 text-center">
                          <span className="text-xs font-mono text-slate-600">↻ cliquer pour révéler</span>
                        </div>
                      </div>

                      {/* Back — turtle */}
                      <div
                        style={{
                          backfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                          position: "absolute",
                          inset: 0,
                        }}
                      >
                        <TurtleFace color={turtle?.color ?? "#fff"} name={turtle?.name ?? ""} />
                        <div className="absolute bottom-3 left-0 right-0 text-center">
                          <span className="text-xs font-mono text-slate-600">↻ cliquer pour revenir</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="text-xl font-black text-white mb-3">{agent.name}</h3>

                    {secretFlipped === i ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 p-3 rounded-lg border border-amber-500/20 bg-amber-500/5"
                      >
                        <p className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">
                          🔓 Info secrète
                        </p>
                        <p className="text-sm text-slate-300">{agent.secret}</p>
                      </motion.div>
                    ) : (
                      <div className="mt-3 p-3 rounded-lg border border-slate-800 bg-[#0a0a12]">
                        <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-1">
                          Meilleure réplique
                        </p>
                        <p className="text-sm text-slate-300 italic">&ldquo;{agent.bestQuote}&rdquo;</p>
                      </div>
                    )}

                    <p className="text-xs text-slate-700 font-mono mt-3 text-right">
                      {secretFlipped === i ? "↑ cliquer pour fermer" : "↓ cliquer pour révéler l'info secrète"}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
