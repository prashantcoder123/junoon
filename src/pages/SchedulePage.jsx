// src/pages/SchedulePage.jsx
import React from "react";

// 🖼 TEMP: using same image for all schedules right now
// replace / add more imports as you create real schedule posters
import volleyballSchedule from "../assets/schedule/volleyball.png";

const schedules = [
  {
    title: "Cricket",
    images: [volleyballSchedule, volleyballSchedule,volleyballSchedule], // add real cricket_1, cricket_2 later
  },
  {
    title: "Football",
    images: [volleyballSchedule],
  },
  {
    title: "Volleyball",
    images: [volleyballSchedule, volleyballSchedule],
  },
  {
    title: "Badminton",
    images: [volleyballSchedule],
  },
  {
    title: "Chess",
    images: [volleyballSchedule],
  },
  {
    title: "E-Sports",
    images: [volleyballSchedule, volleyballSchedule],
  },
];

const SchedulePage = () => {
  return (
    <main className="bg-black min-h-screen pt-28 pb-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Heading */}
        <header className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/90">
            Junoon 4.0
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold">
            <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent">
              Sports Schedules
            </span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
            Full match schedules for all events. Zoom in or swipe through the
            posters to view match timings clearly.
          </p>
        </header>

        {/* Image grid */}
        <section className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
          {schedules.map((item) => (
            <article
              key={item.title}
              className="
                bg-white/5 border border-white/10 rounded-3xl 
                shadow-[0_0_35px_rgba(0,0,0,0.7)]
                overflow-hidden
                transition-transform duration-300
                hover:-translate-y-2 hover:shadow-[0_0_55px_rgba(236,72,153,0.7)]
                group
              "
            >
              {/* Card heading */}
              <div className="px-4 pt-4 pb-2">
                <h2 className="text-white font-semibold text-lg">
                  {item.title} Schedule
                </h2>
                <p className="text-xs text-slate-300">
                  Swipe / scroll to view all fixtures.
                </p>
              </div>

              {/* 🔥 Horizontal scroll gallery */}
              <div className="relative px-4 pb-4">
                <div
                  className="
                    flex gap-4 
                    overflow-x-auto 
                    scrollbar-none
                  "
                  style={{ scrollSnapType: "x mandatory" }}
                >
                  {item.images.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className="
                        scroll-snap-start
                        min-w-[82%] md:min-w-[70%]
                        rounded-2xl overflow-hidden 
                        bg-black border border-white/10
                        shadow-[0_0_24px_rgba(0,0,0,0.6)]
                        transition-transform duration-300
                        hover:scale-[1.03]
                      "
                    >
                      <img
                        src={imgSrc}
                        alt={`${item.title} schedule ${idx + 1}`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default SchedulePage;
