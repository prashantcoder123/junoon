// src/components/EventsSection.jsx
import React from "react";

// 🏆 Import images for each event
import cricketImg from "../assets/events/cricket.png";
import footballImg from "../assets/events/football1.jpg";
import volleyballImg from "../assets/events/volleyball1.jpeg";
import badmintonImg from "../assets/events/badminton1.jpeg";
import chessImg from "../assets/events/chess.jpeg";
import esportsImg from "../assets/events/esports.jpeg";
import kabaddiImg from "../assets/events/kabaddi.jpeg";
import athleticsImg from "../assets/events/athletics.jpeg";
import tabletennisImg from "../assets/events/tt.jpeg";
import armWrestlingImg from "../assets/events/arm.jpeg";
import tugofwarImg from "../assets/events/tugofwar.jpeg";
import ScheduleButton from "./ScheduleButton";   // ⬅️ NEW

const events = [
  {
    name: "Cricket",
    tagline: "Powerplay • Knockouts",
    meta: "Outdoor • Team",
    highlight: "Most Loved",
    gradient: "from-amber-400/30 via-orange-500/20 to-rose-500/30",
    img: cricketImg,
    link: "/sports/cricket"
  },
  {
    name: "Football",
    tagline: "Turf • Night Matches",
    meta: "Outdoor • Team",
    highlight: "High Intensity",
    gradient: "from-emerald-400/25 via-cyan-400/20 to-sky-500/30",
    img: footballImg,
    link: "/sports/football"
  },
  {
    name: "Volleyball",
    tagline: "Rallies • Smashes",
    meta: "Outdoor • Team",
    highlight: "Crowd Favourite",
    gradient: "from-fuchsia-400/30 via-purple-500/20 to-indigo-500/30",
    img: volleyballImg,
    link: "/sports/volleyball"
  },
  {
    name: "Badminton",
    tagline: "Singles • Doubles",
    meta: "Indoor • Court",
    highlight: "Fast Reflexes",
    gradient: "from-sky-400/30 via-cyan-400/20 to-emerald-400/30",
    img: badmintonImg,
    link: "/sports/badminton"
  },
  {
    name: "Chess",
    tagline: "Checkmate Minds",
    meta: "Indoor • Solo",
    highlight: "Strategy",
    gradient: "from-slate-300/40 via-slate-500/20 to-purple-500/30",
    img: chessImg,
    link: "/sports/chess"
  },
  {
    name: "E-Sports",
    tagline: "Clutch • GGWP",
    meta: "Indoor • Squad",
    highlight: "New Gen",
    gradient: "from-pink-500/30 via-violet-500/20 to-blue-500/30",
    img: esportsImg,
    link: "/sports/esports"
  },
  {
    name: "Kabaddi",
    tagline: "Clutch • GGWP",
    meta: "Indoor • Squad",
    highlight: "New Gen",
    gradient: "from-pink-500/30 via-violet-500/20 to-blue-500/30",
    img: kabaddiImg,
    link: "/sports/kabaddi"
  },
  {
    name: "Athletics",
    tagline: "Clutch • GGWP",
    meta: "Indoor • Squad",
    highlight: "New Gen",
    gradient: "from-pink-500/30 via-violet-500/20 to-blue-500/30",
    img: athleticsImg,
    link: "/sports/athletics"
  },
  {
    name: "Table Tennis",
    tagline: "Clutch • GGWP",
    meta: "Indoor • Squad",
    highlight: "New Gen",
    gradient: "from-pink-500/30 via-violet-500/20 to-blue-500/30",
    img: tabletennisImg,
    link: "/sports/tt"
  },
  {
    name: "Arm Wrestling",
    tagline: "Clutch • GGWP",
    meta: "Indoor • Squad",
    highlight: "New Gen",
    gradient: "from-pink-500/30 via-violet-500/20 to-blue-500/30",
    img: armWrestlingImg,
    link: "/sports/armwrestling"
  },
  {
    name: "Tug of War",
    tagline: "Clutch • GGWP",
    meta: "Indoor • Squad",
    highlight: "New Gen",
    gradient: "from-pink-500/30 via-violet-500/20 to-blue-500/30",
    img: tugofwarImg,
    link: "/sports/tugofwar"
  },
];

const EventsSection = () => {
  return (
    <section
      id="events"
      className="relative z-30 w-full px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        
        {/* Heading */}
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/90">
            Junoon 4.0 • Lineup
          </p>

          <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">
            <span className="block text-white">Tournament</span>
            <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent">
              Featured Sports
            </span>
          </h2>
        </div>

        {/* ⚡ GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.name}
              className="
                group relative overflow-hidden
                rounded-3xl border border-white/10
                bg-white/5 backdrop-blur-xl
                shadow-[0_0_35px_rgba(0,0,0,0.5)]
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_0_55px_rgba(255,0,150,0.5)]
              "
            >
              {/* 🌈 glow */}
              <div
                className={`
                  pointer-events-none absolute -inset-24 -z-10
                  bg-gradient-to-br ${event.gradient}
                  opacity-0 blur-3xl
                  transition-opacity duration-300
                  group-hover:opacity-100
                `}
              />

              {/* 🖼 IMAGE */}
              <img
                src={event.img}
                alt={event.name}
                className="
                  h-40 w-full object-cover
                  sm:h-48 md:h-52 lg:h-56
                  rounded-t-3xl
                  transition-transform duration-300
                  group-hover:scale-105
                "
              />

              {/* 📄 TEXT CONTENT */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold sm:text-xl text-white">
                  {event.name}
                </h3>

                <p className="text-xs uppercase tracking-[0.2em] text-sky-200/90">
                  {event.meta}
                </p>

                <p className="text-sm text-slate-200/85">{event.tagline}</p>

                {/* CTA + footer */}
                <div className="flex items-center justify-between pt-4">
                  <a
                    href={event.link}
                    className="
                      rounded-full
                      bg-gradient-to-r from-sky-500 via-fuchsia-500 to-rose-500
                      px-4 py-1.5
                      text-xs font-semibold text-black
                      shadow-[0_0_18px_rgba(236,72,153,0.6)]
                      transition-transform duration-200
                      hover:scale-105
                      active:scale-95
                    "
                  >
                    Register
                  </a>

                  <span className="text-[0.65rem] tracking-[0.2em] uppercase text-slate-100/75">
                    3D • Live • 2025
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
  {/* ⬇️ Schedule button below events */}
        <ScheduleButton />
      </div>
    </section>
  );
};

export default EventsSection;
