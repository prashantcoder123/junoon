// src/components/LocationSection.jsx
import React from "react";

const sportsSpots = [
  {
    name: "Cricket Ground",
    emoji: "🏏",
    query:
      "Government+Engineering+College+Aurangabad+cricket+ground+Arhua+Rafiganj+Bihar",
  },
  {
    name: "Football",
    emoji: "⚽",
    query:
      "Government+Engineering+College+Aurangabad+football+ground+Arhua+Rafiganj+Bihar",
  },
  {
    name: "Volleyball Court",
    emoji: "🏐",
    query:
      "Government+Engineering+College+Aurangabad+volleyball+court+Arhua+Rafiganj+Bihar",
  },
];

const LocationSection = () => {
  return (
    <section className="bg-black py-24 px-6 md:px-10 text-center">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
        <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent">
          Location
        </span>
      </h2>

      {/* Location pill */}
      <p className="inline-block px-6 py-2 text-sm font-semibold bg-white/5 border border-white/10 rounded-full text-sky-200 tracking-wide mb-10">
        📍 Government Engineering College Aurangabad, Arthua • Rafiganj • Bihar
      </p>

      {/* Map + marker + directions */}
      <div className="mx-auto max-w-4xl space-y-4">
        {/* Map container */}
        <div
          className="
            relative 
            overflow-hidden 
            rounded-3xl 
            border border-white/10 
            shadow-[0_0_50px_rgba(236,72,153,0.4)]
            bg-gradient-to-br from-black via-slate-900 to-black
          "
        >
          {/* Google map iframe */}
          <iframe
            title="GEC Aurangabad Location Map"
            src="https://www.google.com/maps?q=Government+Engineering+College+Aurangabad+Arhua+Rafiganj+Bihar&output=embed"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[320px] md:h-[420px] opacity-90"
          />

          {/* Dark overlay for 'dark-mode' map feel */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />

          {/* Neon pulsing marker in centre */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* outer pulse */}
              <span
                className="
                  absolute inset-0
                  rounded-full
                  bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400
                  opacity-60
                  blur-md
                  animate-ping
                "
              />
              {/* core dot */}
              <span
                className="
                  relative block h-4 w-4 md:h-5 md:w-5 
                  rounded-full 
                  bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400
                  shadow-[0_0_18px_rgba(236,72,153,0.9)]
                  border border-white/60
                "
              />
            </div>
          </div>
        </div>

        {/* Get Directions button */}
        <div className="pt-2">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Government+Engineering+College+Aurangabad+Arhua+Rafiganj+Bihar"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center justify-center
              px-6 py-2.5 mt-2
              rounded-full text-sm font-semibold
              bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400
              text-black
              shadow-[0_0_25px_rgba(236,72,153,0.8)]
              hover:scale-105 active:scale-95
              transition-transform duration-200
            "
          >
            Open Directions in Google Maps
          </a>
        </div>
      </div>

      {/* Sports grounds cards */}
      <div className="max-w-5xl mx-auto mt-12 space-y-4 text-left">
        <h3 className="text-white   font-semibold text-lg text-center md:text-left">
          Sports Venues Inside Campus
        </h3>

        <div className="grid gap-4 md:grid-cols-3">
          {sportsSpots.map((spot) => (
            <div
              key={spot.name}
              className="
                p-4 rounded-2xl 
                bg-white/5 border border-white/10 
                shadow-[0_0_25px_rgba(0,0,0,0.7)]
                flex flex-col items-start gap-2
                transition-transform duration-300
                hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(236,72,153,0.7)]
              "
            >
              <div className="text-2xl">{spot.emoji}</div>
              <p className="text-white font-semibold text-sm">
                {spot.name}
              </p>
              <p className="text-xs text-slate-300">
                Located inside GEC Aurangabad campus, Arhua, Rafiganj.
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${spot.query}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 text-xs font-semibold text-sky-300 hover:text-sky-100"
              >
                View on Google Maps →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
