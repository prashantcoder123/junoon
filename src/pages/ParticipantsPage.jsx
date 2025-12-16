// src/pages/ParticipantsPage.jsx
import React from "react";

const colleges = [
  {
    district: "Aurangabad",
    name: "Government Engineering College Aurangabad",
    location: "Arthua • Kasma • Rafiganj, Bihar",
    note: "Tournament Hosts 2025",
    isHost: true,
  },
  {
    district: "Arwal",
    name: "Government Engineering College Arwal",
    location: "Arwal, Bihar",
    note: "",
    isHost: false,
  },
  {
    district: "Gaya",
    name: "Gaya College of Engineering Gaya",
    location: "Gaya, Bihar",
    note: "",
    isHost: false,
  },
  {
    district: "Jahanabad",
    name: "Government Engineering College Jahanabad",
    location: "Jahanabad, Bihar",
    note: "",
    isHost: false,
  },
];

const ParticipantsPage = () => {
  return (
    <main className="pt-28 pb-20 px-6 md:px-10 bg-black min-h-screen">
      <section className="max-w-6xl mx-auto space-y-6">
        {/* Heading */}
        <div className="text-center space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/90">
            UMANG 25
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Participating Colleges
          </h2>
        </div>

        {/* Colleges grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {colleges.map((clg) => (
            <article
              key={clg.name}
              className={`
                relative rounded-3xl overflow-hidden
                bg-white/5 
                border 
                ${
                  clg.isHost
                    ? "border-amber-400 shadow-[0_0_35px_rgba(251,191,36,0.7)]"
                    : "border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.6)]"
                }
                transition-transform duration-300
                hover:-translate-y-2
              `}
            >
              {/* Top bar */}
              <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-sky-600 to-indigo-700">
                <h3 className="text-xl font-bold text-white">
                  {clg.district}
                </h3>

                {clg.isHost && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-400 text-black shadow-md">
                    Host College
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="px-6 py-4 space-y-3 bg-black">
                <p className="text-white font-semibold text-sm md:text-base">
                  {clg.name}
                </p>

                <p className="text-slate-300 text-sm flex items-center gap-2">
                  <span>🎓</span>
                  <span>{clg.location}</span>
                </p>

                {clg.note && clg.isHost && (
                  <p className="text-xs md:text-sm text-amber-300 flex items-center gap-2">
                    <span>🏆</span>
                    <span>{clg.note}</span>
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ParticipantsPage;
