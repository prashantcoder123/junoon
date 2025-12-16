import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative z-30 w-full px-6 py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Heading */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/90">
            About • Umang&apos;25 • Junoon 4.0
          </p>

          <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">
            <span className="block text-white">What is</span>
            <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent">
              JUNOON 4.0?
            </span>
          </h2>

          <p className="text-sm md:text-base text-slate-200/85">
            JUNOON 4.0 is the official sports fest of{" "}
            <span className="text-sky-300 font-semibold">
              <a href="https://www.gecaurangabad.ac.in/">Government Engineering College, Aurangabad</a>
            </span>
            . It is a celebration of energy, discipline and team spirit where
            students from all branches and years compete across multiple indoor
            and outdoor events under the banner of{" "}
            <span className="text-rose-300 font-semibold">UMANG&apos;25</span>.
          </p>

          <p className="text-sm md:text-base text-slate-300/80">
            From cricket to e-sports, JUNOON 4.0 is designed to give every
            athlete, enthusiast and supporter a chance to experience the thrill
            of stadium-like moments right inside campus, with a modern 3D
            digital experience layered over the ground reality.
          </p>
        </div>

        {/* 3 highlight cards – now 3D */}
<div className="grid gap-6 md:grid-cols-3 perspective-1000">
  {/* Card 1 */}
  <div className="group relative">
    <div
      className="
        relative overflow-hidden rounded-3xl
        border border-cyan-300/25
        bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/40
        p-5 md:p-6
        backdrop-blur-xl
        shadow-[0_25px_60px_rgba(0,0,0,0.75)]
        transition-all duration-300
        group-hover:-translate-y-2
        group-hover:shadow-[0_35px_90px_rgba(56,189,248,0.45)]
        group-hover:rotate-x-3
        group-hover:-rotate-y-3
      "
      style={{ transformOrigin: "center center" }}
    >
      {/* glow border */}
      <div className="pointer-events-none absolute -inset-[40%] -z-10 bg-gradient-to-br from-sky-500/40 via-cyan-400/25 to-emerald-400/30 blur-3xl opacity-60 group-hover:opacity-90" />
      {/* subtle inner highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.18),transparent_55%)]" />

      <h3 className="text-lg md:text-xl font-semibold text-white">
        High Energy Arena
      </h3>
      <p className="mt-2 text-sm text-slate-200/90">
        Floodlights, cheering crowds, live score updates, and 3D visuals —
        JUNOON turns every match into an unforgettable arena experience.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="group relative">
    <div
      className="
        relative overflow-hidden rounded-3xl
        border border-fuchsia-300/25
        bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/40
        p-5 md:p-6
        backdrop-blur-xl
        shadow-[0_25px_60px_rgba(0,0,0,0.75)]
        transition-all duration-300
        group-hover:-translate-y-2
        group-hover:shadow-[0_35px_90px_rgba(236,72,153,0.45)]
        group-hover:-rotate-x-3
        group-hover:rotate-y-3
      "
      style={{ transformOrigin: "center center" }}
    >
      <div className="pointer-events-none absolute -inset-[40%] -z-10 bg-gradient-to-br from-fuchsia-500/40 via-violet-500/30 to-sky-500/30 blur-3xl opacity-60 group-hover:opacity-90" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.18),transparent_55%)]" />

      <h3 className="text-lg md:text-xl font-semibold text-white">
        Spirit &amp; Fair Play
      </h3>
      <p className="mt-2 text-sm text-slate-200/90">
        JUNOON is not just about winning trophies. It&apos;s about
        sportsmanship, discipline, leadership and respecting every player on
        and off the field.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="group relative">
    <div
      className="
        relative overflow-hidden rounded-3xl
        border border-amber-300/25
        bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/40
        p-5 md:p-6
        backdrop-blur-xl
        shadow-[0_25px_60px_rgba(0,0,0,0.75)]
        transition-all duration-300
        group-hover:-translate-y-2
        group-hover:shadow-[0_35px_90px_rgba(251,191,36,0.45)]
        group-hover:rotate-x-2
        group-hover:rotate-y-2
      "
      style={{ transformOrigin: "center center" }}
    >
      <div className="pointer-events-none absolute -inset-[40%] -z-10 bg-gradient-to-br from-amber-400/40 via-orange-500/30 to-rose-500/35 blur-3xl opacity-60 group-hover:opacity-90" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.18),transparent_55%)]" />

      <h3 className="text-lg md:text-xl font-semibold text-white">
        Multi–Sport Experience
      </h3>
      <p className="mt-2 text-sm text-slate-200/90">
        Cricket, football, volleyball, badminton, chess, e-sports and more —
        one fest, one platform, countless memories for every sports lover in
        GEC.
      </p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default AboutSection;
