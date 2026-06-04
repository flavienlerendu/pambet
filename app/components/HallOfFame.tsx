"use client";
import { motion } from "framer-motion";
import { hallOfFame } from "../data/chatData";

const agentColors: Record<string, string> = {
  "Abel-Antoine": "#f59e0b",
  "Flavien": "#3b82f6",
  "Charles": "#8b5cf6",
  "Thomas": "#10b981",
};

export default function HallOfFame() {
  return (
    <section className="py-24 px-6 bg-[#080810]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.4em] text-amber-500 uppercase mb-4">
            Hall of Fame
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Les Messages Légendaires
          </h2>
          <p className="text-slate-400 text-base">
            1 545 messages. Voici les meilleurs.
          </p>
        </motion.div>

        <div className="space-y-6">
          {hallOfFame.map((msg, i) => {
            const isRight = i % 2 === 0;
            const color = agentColors[msg.author] || "#94a3b8";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isRight ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className={`flex ${isRight ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[85%] ${isRight ? "items-end" : "items-start"} flex flex-col gap-1`}>
                  {/* Author */}
                  <div
                    className={`flex items-center gap-2 ${isRight ? "flex-row-reverse" : ""}`}
                  >
                    <span className="text-xs font-mono font-bold" style={{ color }}>
                      {msg.author}
                    </span>
                    <span className="text-xs text-slate-700 font-mono">{msg.date}</span>
                    <span>{msg.emoji}</span>
                  </div>
                  {/* Bubble */}
                  <div
                    className={`px-4 py-3 rounded-2xl ${isRight ? "bubble-right rounded-br-sm" : "bubble-left rounded-bl-sm"}`}
                  >
                    <p className="text-white text-sm font-medium leading-relaxed">{msg.text}</p>
                  </div>
                  {/* Context */}
                  <p className="text-xs text-slate-600 italic px-1">{msg.context}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
