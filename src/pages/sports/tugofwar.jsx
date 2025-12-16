// src/pages/sports/Cricket.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiExternalLink,
  FiFileText,
  FiCalendar,
  FiChevronRight,
  FiPhone,
} from "react-icons/fi";

import cricketScheduleImg from "../../assets/schedule/volleyball.png";

/* Small hook for scroll-reveal */
const useReveal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // fire once
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};

const coordinators = [
  {
    name: "Shiv Prakash",
    role: "Cricket Head",
    phone: "+91 98765 43210",
  },
  {
    name: "Ankit Kumar",
    role: "Fixture & Scorer",
    phone: "+91 98765 43211",
  },
  {
    name: "Murari",
    role: "Logistics & Umpire Desk",
    phone: "+91 98765 43212",
  },
];

const Cricket = () => {
  const header = useReveal();
  const schedule = useReveal();
  const coord = useReveal();

  return (
    <main className="bg-black min-h-screen pt-28 pb-24 px-6 md:px-10">
      <div className="relative mx-auto max-w-4xl space-y-10">
        {/* 🔮 Animated glow behind page */}
        <div className="pointer-events-none absolute -inset-24 -z-10 bg-gradient-to-br from-sky-500/25 via-fuchsia-500/20 to-rose-500/30 blur-3xl opacity-70 animate-pulse" />

        {/* 🧭 Breadcrumb */}
        <nav className="flex items-center gap-1 text-xs text-slate-400">
          <Link to="/" className="hover:text-sky-300 transition">
            Home
          </Link>
          <FiChevronRight className="text-[0.7rem]" />
          <Link to="/#events" className="hover:text-sky-300 transition">
            Events
          </Link>
          <FiChevronRight className="text-[0.7rem]" />
          <span className="text-slate-200">Tug Of War</span>
        </nav>

        {/* Header */}
        <header
          ref={header.ref}
          className={`text-center space-y-2 transition-all duration-700 ${
            header.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Tug Of War
          </h1>
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300">
            Outdoor • Team • Knockout
          </p>
        </header>

        {/* Inline buttons */}
        <div
          className={`flex flex-wrap gap-4 pt-2 transition-all duration-700 ${
            header.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          {/* Register */}
          <a
            href="https://forms.gle/your-cricket-google-form"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 
              px-6 py-2 rounded-full font-semibold text-sm
              bg-gradient-to-r from-sky-500 via-fuchsia-500 to-rose-500
              text-black shadow-[0_0_20px_rgba(236,72,153,0.6)]
              hover:scale-105 active:scale-95 transition
            "
          >
            <FiExternalLink />
            Register (Google Form)
          </a>

          {/* Rulebook */}
          <a
            href="/rulebooks/cricket.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 
              px-5 py-2 rounded-full text-sm font-semibold
              bg-white/5 border border-white/20 text-white
              hover:bg-white/10 hover:scale-105 transition
            "
          >
            <FiFileText />
            Rulebook PDF
          </a>
        </div>

        {/* 🗓 Event Schedule – MULTI IMAGE SCROLLABLE */}
        <section
          ref={schedule.ref}
          className={`transition-all duration-700 ${
            schedule.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div
            className="
      relative rounded-3xl overflow-hidden 
      bg-white/5 border border-white/10
      shadow-[0_0_35px_rgba(0,0,0,0.7)]
    "
          >
            {/* header strip */}
            <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-sky-600 to-fuchsia-600/80">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/20">
                <FiCalendar className="text-sky-100" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-100/90">
                  Tug Of War Schedule
                </p>
                <p className="text-[0.7rem] text-sky-50/80">
                  Full match schedules • swipe to explore
                </p>
              </div>
            </div>

            {/* 🔥 Scroll container */}
            <div
              className="
        flex gap-4 p-4 
        overflow-x-auto
        scrollbar-none
      "
              style={{ scrollSnapType: "x mandatory" }}
            >
              {[cricketScheduleImg, cricketScheduleImg].map((src, idx) => (
                <div
                  key={idx}
                  className="
            relative min-w-[80%] md:min-w-[45%]
            scroll-snap-start
            rounded-2xl overflow-hidden bg-black 
            border border-white/10
            shadow-[0_0_20px_rgba(0,0,0,0.6)]
            transition-transform duration-300
            hover:scale-[1.03]
          "
                >
                  <img
                    src={src}
                    alt="Match schedule"
                    className="w-full h-auto object-contain"
                  />

                  {/* glow */}
                  <div
                    className="
            absolute -inset-2 -z-10
            bg-gradient-to-br from-sky-500/30 via-fuchsia-500/30 to-rose-500/30
            opacity-0 group-hover:opacity-100 blur-2xl
            transition-all duration-500
          "
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coordinator section */}
        <section
          ref={coord.ref}
          className={`mt-8 space-y-4 transition-all duration-700 ${
            coord.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-xl font-bold text-white">Event Coordinators</h2>
          <p className="text-sm text-slate-300">
            For any doubts related to team registration, eligibility, fixtures
            or rules, feel free to contact the cricket council below.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {coordinators.map((c) => (
              <div
                key={c.name}
                className="
                  rounded-2xl border border-white/15 
                  bg-white/5 p-4 text-sm text-slate-200 
                  shadow-[0_0_25px_rgba(0,0,0,0.5)]
                "
              >
                <p className="font-semibold text-white">{c.name}</p>
                <p className="text-xs text-sky-200 mt-1">{c.role}</p>
                <p className="flex items-center gap-2 text-xs mt-3 text-slate-300">
                  <FiPhone className="text-sky-300" />
                  {c.phone}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 📸 Previous Cricket Highlights */}

      <section
        className={`mt-12 space-y-6 transition-all duration-700 ${
          coord.visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-xl font-bold text-white">Tug Of War Highlights</h2>

        <p className="text-sm text-slate-300 max-w-2xl">
          Glimpses from previous Junoon cricket tournaments — passion, teamwork
          and unforgettable moments.
        </p>

        {/* 🔺 Image Grid */}

        {/* yaha pe image ke liye public se image liye h  */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            "/memories/tugofwar/6.jpeg",
            "/assets/memories/cricket3.png",
            "/assets/memories/cricket4.png",
            "/assets/memories/cricket5.png",
            "/assets/memories/cricket6.png",
          ].map((src, idx) => (
            <div
              key={idx}
              className="
          group relative overflow-hidden
          rounded-2xl border border-white/10 
          bg-white/5 
          shadow-[0_0_25px_rgba(0,0,0,0.5)]
          cursor-pointer
          transition-transform duration-300
          hover:scale-105
        "
            >
              {/* Glow on hover */}
              <div
                className="
            absolute -inset-2 -z-10
            bg-gradient-to-br from-sky-500/30 via-fuchsia-500/30 to-rose-500/30
            opacity-0 blur-xl
            group-hover:opacity-100 group-hover:blur-2xl
            transition-all duration-500
          "
              />

              <img
                src={src}
                alt="Tug Of War Highlights"
                className="
            w-full h-40 object-cover
            md:h-48
            transition-all duration-300
            group-hover:scale-110
          "
              />
            </div>
          ))}
        </div>
      </section>

      {/* 📌 Floating register button (always visible) */}
      <a
        href="https://forms.gle/your-cricket-google-form"
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed right-4 bottom-4 z-50
          flex items-center gap-2
          px-4 py-2 rounded-full
          bg-gradient-to-r from-sky-500 via-fuchsia-500 to-rose-500
          text-xs font-semibold text-black
          shadow-[0_0_24px_rgba(236,72,153,0.9)]
          hover:scale-105 active:scale-95
          transition-transform
        "
      >
        <FiExternalLink className="text-sm" />
        Register for Tug Of War
      </a>
    </main>
  );
};

export default Cricket;
