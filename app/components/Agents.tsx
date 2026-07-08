"use client";
import { motion } from "framer-motion";
import { agents } from "../data/chatData";
import { useState } from "react";
import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Agents() {
  const [flipped, setFlipped] = useState<number | null>(null);

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
          {agents.map((agent, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="cursor-pointer"
              onClick={() => setFlipped(flipped === i ? null : i)}
            >
              <div className="relative bg-[#0d0d14] border border-[#1e1e2e] rounded-xl overflow-hidden hover:border-slate-600 transition-all duration-300">
                {/* Color accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 z-10 opacity-60"
                  style={{ background: agent.color }}
                />

                {/* Portrait */}
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={`${BASE}/media/${encodeURIComponent(agent.photo)}`}
                    alt={agent.name}
                    fill
                    className="object-cover object-top"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-[#0d0d14]/20 to-transparent" />
                  {/* Role badge over photo */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded border bg-[#0d0d14]/80 backdrop-blur-sm"
                      style={{ color: agent.color, borderColor: agent.color }}
                    >
                      {agent.role}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-xl font-black text-white mb-3">{agent.name}</h3>

                  {flipped === i ? (
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
                    {flipped === i ? "↑ cliquer pour fermer" : "↓ cliquer pour révéler l&apos;info secrète"}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
