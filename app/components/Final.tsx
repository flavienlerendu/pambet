"use client";
import { motion } from "framer-motion";
import { finalMessage, allPhotos } from "../data/chatData";
import Image from "next/image";

export default function Final() {
  const mosaicPhotos = allPhotos.filter((f) => !f.endsWith(".mp4")).slice(-24);

  return (
    <section className="py-24 px-6 bg-[#050508] relative overflow-hidden">
      {/* Photo mosaic background */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="grid grid-cols-6 md:grid-cols-8 gap-1 h-full">
          {[...mosaicPhotos, ...mosaicPhotos].map((photo, i) => (
            <div key={i} className="overflow-hidden">
              <Image
                src={`/media/${encodeURIComponent(photo)}`}
                alt=""
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#050508]/80 to-[#050508]" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.4em] text-amber-500 uppercase mb-6">
            Message Final
          </p>
          <div className="inline-block mb-8 rotate-[3deg]">
            <div className="border-4 border-green-500 px-5 py-1.5 font-mono font-black text-green-500 text-base tracking-widest">
              DÉCLASSIFIÉ
            </div>
          </div>
        </motion.div>

        {/* The message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-[#0d0d14]/80 backdrop-blur-sm border border-[#1e1e2e] rounded-2xl p-8 md:p-12"
        >
          <div className="space-y-4 text-slate-300 leading-relaxed">
            {finalMessage.split("\n\n").map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className={`${i === 0 ? "text-amber-400 text-xl font-bold" : "text-slate-300"} ${
                  para.includes("1 545") || para.includes("219") || para.includes("6 plans") ? "font-mono text-sm text-slate-400" : ""
                }`}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Agents sign-off */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 font-mono text-sm mb-4">Signé,</p>
          <div className="flex flex-wrap justify-center gap-6 text-2xl mb-6">
            {["Abel-Antoine 🎭", "Flavien 🏠", "Charles 👨‍💻", "Thomas 🎬"].map((name) => (
              <span key={name} className="text-slate-400 font-bold text-sm">{name}</span>
            ))}
          </div>
          <p className="text-slate-700 font-mono text-xs">
            Groupe créé le 29 octobre 2025 · Dernier message le 4 juin 2026
          </p>
        </motion.div>

        {/* Final stamp */}
        <motion.div
          initial={{ opacity: 0, rotate: -20, scale: 0.5 }}
          whileInView={{ opacity: 1, rotate: -8, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
          className="mt-16 text-center"
        >
          <div className="inline-block border-8 border-amber-500/40 rounded-full px-12 py-8 text-center">
            <p className="text-amber-500/70 font-black text-3xl tracking-widest font-mono">OPÉRATION</p>
            <p className="text-amber-500 font-black text-5xl tracking-widest font-mono glow-gold">PAMBET</p>
            <p className="text-amber-500/70 font-black text-2xl tracking-widest font-mono">RÉUSSIE</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
