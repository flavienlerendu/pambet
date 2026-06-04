"use client";
import { motion } from "framer-motion";
import { plansAbandoned } from "../data/chatData";

export default function PlansAbandoned() {
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
            Dossiers Archivés
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Les 6 Plans Sacrifiés
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Chaque grand plan a exigé des dizaines de plans abandonnés.
            Voici ceux que tu n&apos;as jamais vus.
          </p>
        </motion.div>

        <div className="space-y-3">
          {plansAbandoned.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 p-4 bg-[#0d0d14] border border-[#1e1e2e] rounded-lg"
            >
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-5 h-5 rounded-full border-2 border-red-600 flex items-center justify-center">
                  <div className="w-2 h-0.5 bg-red-600" />
                </div>
              </div>
              <div>
                <p className="text-white font-bold text-sm line-through decoration-red-600/60">{plan.plan}</p>
                <p className="text-slate-500 text-xs mt-1">{plan.reason}</p>
              </div>
              <div className="ml-auto flex-shrink-0">
                <span className="text-xs font-mono text-red-500/60 border border-red-500/30 px-2 py-0.5 rounded">
                  ANNULÉ
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
