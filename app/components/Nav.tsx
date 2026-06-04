"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "briefing", label: "Briefing" },
  { id: "agents", label: "Agents" },
  { id: "chronologie", label: "Timeline" },
  { id: "dossiers", label: "Dossiers" },
  { id: "casting", label: "Casting" },
  { id: "halloffame", label: "Hall of Fame" },
  { id: "wrapped", label: "Stats" },
  { id: "gallery", label: "Photos" },
  { id: "audios", label: "Vocaux" },
  { id: "final", label: "Final" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-[#050508]/95 backdrop-blur-md border-b border-[#1e1e2e]" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-mono text-xs tracking-widest text-amber-500 uppercase hover:text-amber-400 transition-colors"
          >
            ◀ OPÉ PAMBET
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="px-3 py-1.5 text-xs font-mono text-slate-500 hover:text-white transition-colors rounded uppercase tracking-wider"
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Mobile menu */}
          <button
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-12 left-0 right-0 z-39 bg-[#050508]/98 border-b border-[#1e1e2e] p-4"
          style={{ zIndex: 39 }}
        >
          <div className="grid grid-cols-2 gap-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="py-2 px-3 text-left text-xs font-mono text-slate-400 hover:text-white border border-[#1e1e2e] rounded uppercase tracking-wider"
              >
                {s.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
