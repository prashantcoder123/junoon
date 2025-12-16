// src/components/SportsLoader.jsx
import React from "react";
import heroImg from "../assets/hero/junoon_hero.png";

const SportsLoader = () => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black overflow-hidden">
      {/* Neon background glow */}
      <div className="pointer-events-none absolute -inset-40 bg-gradient-to-br from-sky-500/40 via-fuchsia-500/25 to-rose-500/35 blur-3xl opacity-80" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Junoon text */}
        <div className="text-center space-y-1">
          <p className="text-[0.7rem] tracking-[0.35em] uppercase text-sky-300/90">
            Junoon 4.0
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold">
            <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent">
              Loading Sports Arena
            </span>
          </h1>
        </div>

        {/* Circular sports card */}
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-black/70 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.9)] flex items-center justify-center">
          {/* electric glow ring */}
          <div className="absolute inset-2 rounded-full border border-cyan-300/60 animate-pulse" />
          <div className="absolute inset-0 rounded-full border border-cyan-400/40 animate-[spin_3s_linear_infinite]" />

          {/* hero image bouncing like a ball */}
          <img
            src={heroImg}
            alt="Junoon Sports Loader"
            className="relative w-24 h-24 md:w-28 md:h-28 rounded-3xl object-cover animate-bounce"
          />
        </div>

        {/* progress dots */}
        <div className="flex items-center gap-2 mt-2">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce" />
          <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-bounce delay-150" />
          <span className="w-2 h-2 rounded-full bg-rose-400 animate-bounce delay-300" />
        </div>

        <p className="text-xs text-slate-300 tracking-[0.25em] uppercase mt-2">
          Warming up matches...
        </p>
      </div>
    </div>
  );
};

export default SportsLoader;
