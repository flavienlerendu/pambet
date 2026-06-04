"use client";
import { motion } from "framer-motion";
import { monthlyActivity } from "../data/chatData";

export default function Timeline() {
  const max = Math.max(...monthlyActivity.map((m) => m.messages));

  return (
    <section className="py-24 px-6 bg-[#080810]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.4em] text-amber-500 uppercase mb-4">
            Analyse Temporelle
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            7 Mois de Complot
          </h2>
          <p className="text-slate-400 text-base">
            L&apos;activité de la cellule secrète, mois par mois.
          </p>
        </motion.div>

        {/* Bar chart */}
        <div className="flex items-end gap-2 md:gap-3 h-48 mb-6">
          {monthlyActivity.map((month, i) => {
            const height = (month.messages / max) * 100;
            const isLast = i === monthlyActivity.length - 1;
            return (
              <motion.div
                key={i}
                className="flex-1 flex flex-col items-center gap-1 group"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-full flex flex-col items-center justify-end" style={{ height: "160px" }}>
                  <motion.div
                    className="w-full rounded-t-sm relative"
                    style={{
                      background: isLast
                        ? "linear-gradient(180deg, #f59e0b, #d97706)"
                        : "linear-gradient(180deg, #3b82f6, #1d4ed8)",
                      opacity: isLast ? 1 : 0.6,
                    }}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
                  >
                    {isLast && (
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className="text-amber-400 text-xs font-mono">🎯 JOUR J</span>
                      </div>
                    )}
                  </motion.div>
                </div>
                <span className="text-[10px] font-mono text-slate-600 text-center leading-tight">
                  {month.month}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Key moments on timeline */}
        <div className="space-y-3 mt-10">
          {monthlyActivity.map((month, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-4"
            >
              <div className="w-16 text-right font-mono text-xs text-slate-600">{month.month}</div>
              <div className="w-px h-4 bg-slate-800" />
              <div className="flex-1 flex items-center gap-3">
                <div
                  className="h-0.5 rounded-full"
                  style={{
                    width: `${(month.messages / max) * 200}px`,
                    background: i === monthlyActivity.length - 1 ? "#f59e0b" : "#3b82f6",
                    opacity: i === monthlyActivity.length - 1 ? 1 : 0.4,
                    maxWidth: "200px",
                  }}
                />
                <span className="text-xs text-slate-500">{month.label}</span>
                <span className="text-xs font-mono text-slate-700">({month.messages})</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Peak day highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 border border-amber-500/30 rounded-xl p-6 bg-amber-500/5 text-center"
        >
          <p className="font-mono text-xs tracking-widest text-amber-500 uppercase mb-2">Pic d&apos;activité record</p>
          <p className="text-4xl font-black text-white mb-1">2 juin 2026</p>
          <p className="text-amber-400 font-mono text-lg font-bold">134 messages en une journée</p>
          <p className="text-slate-500 text-sm mt-2">Le jour où Max a dit oui au faux casting.</p>
        </motion.div>
      </div>
    </section>
  );
}
