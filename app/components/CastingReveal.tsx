"use client";
import { motion } from "framer-motion";
import { castingScript } from "../data/chatData";
import { useState } from "react";

export default function CastingReveal() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="py-24 px-6 bg-[#050508] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5"
        style={{ background: "repeating-linear-gradient(45deg, #f59e0b 0, #f59e0b 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6 rotate-[-5deg]">
            <div className="border-4 border-red-600 px-5 py-1.5 font-mono font-black text-red-600 text-base tracking-widest">
              TOP SECRET
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            L&apos;Opération Faux Casting
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Pendant des semaines, ils ont imaginé te faire jouer un rôle.
            Le rôle d&apos;un acteur qui auditionne pour une pub de lunettes.
            Mais le texte qu&apos;ils avaient écrit... n&apos;était pas ce que tu croyais.
          </p>
        </motion.div>

        {/* Timeline of the operation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { step: "01", title: "Stanislas recruté", desc: "Thomas contacte son ami Stanislas pour t'envoyer une invitation officielle à un « stage de rhétorique »." },
            { step: "02", title: "Le faux site", desc: "Abel crée bureauonze.com et une adresse casting@bureauonze.com. Un vrai site professionnel. Tout est faux." },
            { step: "03", title: "Le mail de casting", desc: "Envoyé le 2 juin. Tu réponds OUI le même jour. 134 messages d'hystérie collective." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-[#0d0d14] border border-[#1e1e2e] rounded-xl p-5"
            >
              <div className="font-mono text-4xl font-black text-amber-500/30 mb-3">{item.step}</div>
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* The script */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-[#0a0a12] border border-amber-500/20 rounded-xl p-8 font-mono text-sm relative overflow-hidden">
            {/* Paper texture lines */}
            <div className="absolute inset-0 opacity-5"
              style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(255,255,255,0.05) 28px, rgba(255,255,255,0.05) 29px)" }}
            />

            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs text-amber-500/60 tracking-widest uppercase font-mono">Bureau Onze — Casting #2026-06</p>
                <p className="text-xs text-slate-700 mt-0.5">Confidentiel — Ne pas divulguer avant le mariage</p>
              </div>
              <div className="rotate-[-12deg] border-2 border-amber-500 px-3 py-1 text-amber-500 text-xs font-black tracking-widest">
                PREUVE
              </div>
            </div>

            <div className="space-y-2 text-slate-300 relative z-10 mb-6">
              {castingScript.split("\n").map((line, i) => (
                <div key={i} className={line.startsWith("[") ? "text-amber-400/60 text-xs" : ""}>
                  {line || <br />}
                </div>
              ))}
            </div>

            {!revealed && (
              <button
                onClick={() => setRevealed(true)}
                className="w-full py-3 border border-amber-500/30 text-amber-400 font-mono text-xs tracking-widest uppercase hover:bg-amber-500/10 transition-all rounded-lg mt-2"
              >
                🔓 Révéler la déclaration cachée
              </button>
            )}

            {revealed && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-5 border border-pink-500/30 rounded-lg bg-pink-500/5"
              >
                <p className="text-xs font-mono text-pink-400 uppercase tracking-widest mb-3">
                  💌 La déclaration d&apos;amour cachée
                </p>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  Ce texte, que tu as appris et récité devant une caméra lors d&apos;un &laquo; casting &raquo;,
                  était en réalité écrit pour être remonté dans un ordre différent.
                  Un arrangement qui, à la place de parler de toi en tant qu&apos;acteur,
                  parlait de toi en tant qu&apos;amoureux. Une déclaration à Marion.
                  Filmée. Par toi. Sans que tu le saches.
                </p>
                <p className="text-xs font-mono text-slate-600 mt-3">
                  ※ Idée originale de Charlie — perfectionnée collectivement pendant 2 mois.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
