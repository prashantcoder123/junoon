import React from "react";
import { Link } from "react-router-dom";
import { memories } from "../data/memoriesData";

const MemoriesPage = () => {
  return (
    <main className="bg-black min-h-screen pt-28 pb-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* TITLE */}
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/90">
            Junoon Archives
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold">
            <span className="block text-white">Junoon</span>
            <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent">
              Memories
            </span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-3xl mx-auto">
            Relive the iconic sports moments from previous Junoon editions.
          </p>
        </header>

        {/* GRID CARDS */}
        <section className="grid gap-8 md:grid-cols-3">
          {memories.map((item) => (
            <Link
              key={item.id}
              to={`/memories/${item.id}`}
              className="group block"
            >
              <article
                className="
                  relative p-6 
                  bg-gradient-to-br from-white/5 via-black/60 to-black
                  border border-white/10
                  rounded-3xl shadow-xl
                  cursor-pointer
                  transition-all duration-300 
                  ease-out
                  hover:rotate-[2deg]
                  hover:-translate-y-3
                  hover:shadow-[0_0_45px_rgba(255,0,150,0.5)]
                  will-change-transform
                "
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* NEON GLOW */}
                <div
                  className="
                    absolute inset-0 -z-10
                    opacity-0
                    bg-gradient-to-r from-sky-400/30 via-fuchsia-400/30 to-rose-400/30
                    blur-2xl
                    rounded-3xl
                    transition-opacity duration-300
                    group-hover:opacity-100
                  "
                />

                <h2 className="text-xl font-bold text-white mb-2">
                  {item.year}
                </h2>

                <p className="text-sm text-slate-300">
                  {item.desc}
                </p>
              </article>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
};

export default MemoriesPage;
