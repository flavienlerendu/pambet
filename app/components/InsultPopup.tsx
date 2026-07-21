"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function InsultPopup({ insult, onClose }: { insult: string; onClose: () => void }) {
  useEffect(() => {
    if (!insult) return;
    const t = setTimeout(onClose, 2500);
    return () => clearTimeout(t);
  }, [insult, onClose]);

  return (
    <AnimatePresence>
      {insult && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 cursor-pointer px-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-center max-w-2xl"
          >
            <div className="mx-auto w-40 h-40 rounded-full overflow-hidden mb-6">
              <Image
                src={`${BASE}/media/${encodeURIComponent("ChatGPT Image 21 juil. 2026, 22_11_12.png")}`}
                alt="mouton"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white font-black text-3xl md:text-5xl leading-tight">
              {insult}
            </p>
            <p className="text-slate-600 font-mono text-xs mt-10 uppercase tracking-widest">
              Cliquer pour continuer
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
