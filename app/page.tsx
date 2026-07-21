"use client";
import { useState } from "react";
import PasswordGate from "./components/PasswordGate";
import Boot from "./components/Boot";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Agents from "./components/Agents";
import Timeline from "./components/Timeline";
import Dossiers from "./components/Dossiers";
import CastingReveal from "./components/CastingReveal";
import HallOfFame from "./components/HallOfFame";
import PlansAbandoned from "./components/PlansAbandoned";
import Wrapped from "./components/Wrapped";
import Gallery from "./components/Gallery";
import AudioWall from "./components/AudioWall";
import Resultat from "./components/Resultat";
import Marion from "./components/Marion";
import Final from "./components/Final";

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false);
  const [booted, setBooted] = useState(false);
  const [resultatUnlocked, setResultatUnlocked] = useState(false);

  return (
    <>
      {!authenticated && <PasswordGate onSuccess={() => setAuthenticated(true)} />}
      {authenticated && !booted && <Boot onComplete={() => setBooted(true)} />}
      {booted && (
        <main className="min-h-screen bg-[#050508]">
          <Nav />
          <div id="briefing"><Intro /></div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          <div id="agents"><Agents /></div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          <div id="chronologie"><Timeline /></div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          <div id="dossiers"><Dossiers /></div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          <div id="casting"><CastingReveal /></div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          <div id="halloffame"><HallOfFame /></div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          <div id="plans"><PlansAbandoned /></div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          <div id="wrapped"><Wrapped /></div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          <div id="gallery"><Gallery /></div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          <div id="audios"><AudioWall /></div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          <div id="resultat"><Resultat onUnlock={() => setResultatUnlocked(true)} /></div>
          {resultatUnlocked && (
            <>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-pink-900/30 to-transparent" />
              <div id="marion"><Marion /></div>
            </>
          )}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-900/30 to-transparent" />
          <div id="final"><Final /></div>
          <div className="text-center py-8 font-mono text-xs text-slate-800">
            Opération Pambet — Dossier #001 — Classifié jusqu&apos;au 5 juin 2026
          </div>
        </main>
      )}
    </>
  );
}
