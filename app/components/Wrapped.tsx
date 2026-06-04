"use client";
import { motion } from "framer-motion";
import { stats } from "../data/chatData";

const statCards = [
  {
    label: "Messages totaux",
    value: "1 545",
    sub: "Soit un roman entier",
    color: "#f59e0b",
    icon: "💬",
  },
  {
    label: "Jours de préparation",
    value: "219",
    sub: "Oct 2025 → Juin 2026",
    color: "#3b82f6",
    icon: "📅",
  },
  {
    label: "Photos partagées",
    value: "102",
    sub: "Costumes, repérages, inspirations",
    color: "#10b981",
    icon: "📸",
  },
  {
    label: "Notes vocales",
    value: "93",
    sub: "Idées à la volée, réactions, fous rires",
    color: "#8b5cf6",
    icon: "🎙️",
  },
  {
    label: "Vidéos échangées",
    value: "5",
    sub: "Références, preuves, tutos",
    color: "#ec4899",
    icon: "🎬",
  },
  {
    label: "GIFs envoyés",
    value: "11",
    sub: "Pour exprimer l'inexprimable",
    color: "#f97316",
    icon: "🎭",
  },
  {
    label: "Visios organisées",
    value: "12+",
    sub: "Soirs, week-ends, heures de repas",
    color: "#06b6d4",
    icon: "📹",
  },
  {
    label: "Plans abandonnés",
    value: "7",
    sub: "Chaque échec = un meilleur plan",
    color: "#dc2626",
    icon: "❌",
  },
];

export default function Wrapped() {
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
            EVG Wrapped 2026
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            En Chiffres
          </h2>
          <p className="text-slate-400 text-base">
            Parce qu&apos;un EVG mérite ses statistiques.
          </p>
        </motion.div>

        {/* Stat grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {statCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-[#0d0d14] border border-[#1e1e2e] rounded-xl p-4 text-center"
            >
              <div className="text-3xl mb-2">{card.icon}</div>
              <div className="text-3xl font-black mb-1" style={{ color: card.color }}>{card.value}</div>
              <div className="text-white text-xs font-bold mb-1">{card.label}</div>
              <div className="text-slate-600 text-xs">{card.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Special stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Peak day */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0d0d14] border border-[#1e1e2e] rounded-xl p-6"
          >
            <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">
              🌋 Jour le plus explosif
            </p>
            <div>
              <h3 className="text-white font-black text-xl">{stats.biggestDay.date}</h3>
              <p className="text-amber-400 font-mono font-bold text-2xl">{stats.biggestDay.count} messages</p>
              <p className="text-slate-500 text-xs mt-1">{stats.biggestDay.reason}</p>
            </div>
          </motion.div>

          {/* Night owl */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0d0d14] border border-[#1e1e2e] rounded-xl p-6"
          >
            <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">
              🦉 Messages après minuit
            </p>
            <div>
              <p className="text-white font-black text-4xl">{stats.nightMessages}</p>
              <p className="text-slate-400 text-sm mt-2">
                Dont un set complet de production musicale entre 3h et 4h du matin.
              </p>
              <p className="text-slate-600 text-xs mt-1 font-mono">— DJ Abel, session unique</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
