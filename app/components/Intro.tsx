"use client";
import { motion } from "framer-motion";

const bigNumbers = [
  { number: "1 545", label: "messages envoyés", sub: "en 219 jours" },
  { number: "4", label: "agents infiltrés", sub: "dans ta vie" },
  { number: "6", label: "plans abandonnés", sub: "et recommencés" },
  { number: "0", label: "fuites", sub: "miracle" },
];

export default function Intro() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <p className="font-mono text-xs tracking-[0.4em] text-amber-500 uppercase mb-6">
          Briefing Initial
        </p>
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
          Tu pensais aller à un<br />
          <span className="text-amber-400">stage de rhétorique.</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-16">
          Pendant 7 mois, quatre personnes ont travaillé dans ton dos.
          Ils ont menti, planifié, stressé. Ils ont ri, douté, et recommencé.
          Tout ça pour toi. Tout ça sans que tu le saches.
        </p>

        {/* Big numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {bigNumbers.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0d0d14] border border-[#1e1e2e] rounded-lg p-6 text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-amber-400 glow-gold mb-1">
                {item.number}
              </div>
              <div className="text-white font-medium text-sm mb-1">{item.label}</div>
              <div className="text-slate-600 text-xs font-mono">{item.sub}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
