"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { randomInsult } from "../data/insults";
import InsultPopup from "./InsultPopup";

export default function PasswordGate({ onSuccess }: { onSuccess: () => void }) {
  const [value, setValue] = useState("");
  const [shake, setShake] = useState(false);
  const [insult, setInsult] = useState("");

  const submit = () => {
    if (insult) return;
    if (value.toLowerCase().trim() === "thermomix") {
      onSuccess();
    } else {
      setInsult(randomInsult());
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setValue("");
    }
  };

  return (
    <>
    <InsultPopup insult={insult} onClose={() => setInsult("")} />
    <div className="fixed inset-0 bg-[#050508] flex flex-col items-center justify-center z-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm text-center"
      >
        <p className="font-mono text-xs tracking-[0.4em] text-amber-500 uppercase mb-6">
          Accès restreint
        </p>
        <h1 className="text-3xl font-black text-white mb-2">
          OPÉRATION PAMBET
        </h1>
        <p className="text-slate-500 text-sm font-mono mb-10">
          Dossier classifié — niveau 5
        </p>

        <motion.div animate={shake ? { x: [-8, 8, -8, 8, 0] } : {}} transition={{ duration: 0.4 }}>
          <input
            type="password"
            value={value}
            onChange={(e) => { setValue(e.target.value); }}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder="0 indice - Mouahahah"
            autoFocus
            className="w-full bg-[#0d0d14] border border-[#1e1e2e] rounded-lg px-4 py-3 text-white font-mono text-center text-sm outline-none transition-colors mb-3 focus:border-slate-600 placeholder-slate-600"
          />

          <button
            onClick={submit}
            className="w-full border border-amber-500/50 text-amber-500 font-mono text-sm uppercase tracking-widest py-3 rounded-lg hover:bg-amber-500/10 transition-colors"
          >
            ▶ Entrer
          </button>
        </motion.div>
      </motion.div>
    </div>
    </>
  );
}
