import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { memories } from "../data/memoriesData";

const MemoryDetailPage = () => {
  const { memoryId } = useParams();
  const memory = memories.find((m) => m.id === memoryId);

  const [sportFilter, setSportFilter] = useState("all"); // only used for Junoon 3.0
  const [search, setSearch] = useState("");

  if (!memory) {
    return (
      <main className="bg-black min-h-screen pt-28 px-6 text-center text-white">
        <p>Memory not found.</p>
        <Link
          to="/memories"
          className="mt-4 inline-block text-sm text-sky-300 underline"
        >
          Back to all memories
        </Link>
      </main>
    );
  }

  // 🔹 We treat Junoon 3.0 as "sport-structured", older ones as a flat coordinator list
  const isSportStructured =
    memory.id === "junoon-3-2024" &&
    memory.sports &&
    memory.sports.length > 0;

  // 🔍 normalised search text
  const searchText = search.trim().toLowerCase();

  // 🔹 For non-structured memories (Junoon 2.0, 2022): build a flat coordinator list
  const allCoordinators = useMemo(() => {
    if (!memory.sports || !memory.sports.length) return [];
    const list = [];
    memory.sports.forEach((sport) => {
      (sport.coordinators || []).forEach((coord) => {
        list.push({
          ...coord,
          sportName: sport.name,
        });
      });
    });
    return list;
  }, [memory]);

  // 🔍 Filter helpers
  const matchesSearch = (coord) => {
    if (!searchText) return true;
    const inName = coord.name.toLowerCase().includes(searchText);
    const inRole = coord.role.toLowerCase().includes(searchText);
    return inName || inRole;
  };

  // 🔹 For Junoon 3.0: sports filtered by sportFilter + search
  const displayedSports = useMemo(() => {
    if (!isSportStructured) return [];

    let sports = memory.sports;

    if (sportFilter !== "all") {
      sports = sports.filter(
        (s) => s.name.toLowerCase() === sportFilter.toLowerCase()
      );
    }

    // Inside each sport, filter coordinators by search
    return sports
      .map((sport) => {
        const filteredCoords = (sport.coordinators || []).filter(matchesSearch);
        return { ...sport, coordinators: filteredCoords };
      })
      // Hide sports that have no coordinators matching search
      .filter((sport) => sport.coordinators && sport.coordinators.length > 0);
  }, [isSportStructured, memory.sports, sportFilter, searchText]);

  // 🔹 For older memories: filtered flat coordinator list
  const filteredCoordinators = useMemo(() => {
    if (isSportStructured) return [];
    return allCoordinators.filter(matchesSearch);
  }, [isSportStructured, allCoordinators, searchText]);

  // sport filter labels for Junoon 3.0
  const sportFilterOptions = isSportStructured
    ? [
        { id: "all", label: "All Sports" },
        ...memory.sports.map((s) => ({
          id: s.name.toLowerCase(),
          label: s.name,
        })),
      ]
    : [];

  return (
    <main className="bg-black min-h-screen pt-28 pb-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Back link */}
        <Link
          to="/memories"
          className="text-sm text-sky-300 hover:text-sky-200"
        >
          ← Back to Junoon Memories
        </Link>

        {/* Title */}
        <header className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/90">
            Junoon Archives
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            {memory.year}
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
            {memory.desc}
          </p>
        </header>

        {/* ===== 1. HIGHLIGHTS GALLERY ===== */}
        {memory.galleryImages && memory.galleryImages.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-left text-white font-semibold text-lg">
              Highlights Gallery
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {memory.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="
                    relative group 
                    rounded-2xl 
                    overflow-hidden 
                    border border-white/10 
                    bg-white/5 
                    shadow-[0_0_30px_rgba(0,0,0,0.6)]
                    transition-all duration-300
                    hover:-translate-y-2 
                    hover:shadow-[0_0_55px_rgba(236,72,153,0.5)]
                  "
                  style={{
                    aspectRatio: "1 / 1",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <img
                    src={img}
                    alt={`Highlight ${idx + 1}`}
                    className="
                      w-full h-full object-cover 
                      transition-transform duration-300 
                      group-hover:scale-110
                    "
                  />
                  <div
                    className="
                      absolute inset-0 
                      bg-gradient-to-br from-sky-300/10 via-fuchsia-400/10 to-rose-300/10
                      opacity-0 
                      group-hover:opacity-100 
                      transition-opacity duration-300
                      blur-xl
                    "
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===== 2. FILTERS + SEARCH (only show if there are coordinators) ===== */}
        {(isSportStructured
          ? memory.sports && memory.sports.length
          : allCoordinators && allCoordinators.length) && (
          <section className="space-y-4">
            {/* Sport filter: only Junoon 3.0 */}
            {isSportStructured && (
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {sportFilterOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSportFilter(opt.id)}
                    className={`
                      px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold
                      border transition-all duration-200
                      ${
                        sportFilter === opt.id
                          ? "bg-gradient-to-r from-sky-500 via-fuchsia-500 to-rose-500 text-black border-transparent shadow-[0_0_20px_rgba(236,72,153,0.7)]"
                          : "bg-white/5 border-white/20 text-slate-200 hover:bg-white/10"
                      }
                    `}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {/* 🔍 Coordinator search box */}
            <div className="mt-4 max-w-md w-full mx-auto md:mx-0">
              <label className="block text-left text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-2">
                Search Coordinators
              </label>
              <div
                className="
                  relative rounded-full border border-white/15
                  bg-black/60 px-4 py-2
                  flex items-center gap-2
                  shadow-[0_0_25px_rgba(0,0,0,0.7)]
                  focus-within:border-sky-400 focus-within:shadow-[0_0_30px_rgba(56,189,248,0.7)]
                "
              >
                <span className="text-slate-400 text-sm">🔍</span>
                <input
                  type="text"
                  placeholder="Type a name.."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="
                    flex-1 bg-transparent outline-none
                    text-sm text-slate-100 placeholder:text-slate-500
                  "
                />
              </div>
            </div>
          </section>
        )}

        {/* ===== 3A. JUNOON 3.0 – PER SPORT WITH FILTERED COORDINATORS ===== */}
        {isSportStructured && displayedSports.length > 0 && (
          <section className="space-y-10">
            {displayedSports.map((sport, sIndex) => (
              <div
                key={sIndex}
                className="
                  space-y-5 border border-white/10 rounded-3xl 
                  p-6 md:p-8 bg-white/5 backdrop-blur-xl
                  shadow-[0_0_35px_rgba(0,0,0,0.7)]
                  group
                  transition-transform duration-300
                  hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(236,72,153,0.6)]
                  hover:rotate-[0.5deg]
                "
                style={{ perspective: "1000px" }}
              >
                {/* Sport header + image */}
                <div className="grid gap-6 md:grid-cols-2 items-center">
                  <div className="text-left space-y-2">
                    <h2 className="text-2xl font-bold text-white">
                      {sport.name}
                    </h2>
                    <p className="text-xs uppercase tracking-[0.25em] text-sky-300/90">
                      Event Highlights
                    </p>
                  </div>

                  <div
                    className="
                      relative rounded-3xl overflow-hidden border border-white/15 
                      mx-auto md:mx-0
                      max-w-md 
                      h-64
                      shadow-[0_0_30px_rgba(0,0,0,0.7)]
                      transition-transform duration-300
                      group-hover:scale-[1.03] 
                      group-hover:-translate-y-1
                      group-hover:shadow-[0_0_50px_rgba(236,72,153,0.7)]
                    "
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <img
                      src={sport.image}
                      alt={sport.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Coordinator cards */}
                {sport.coordinators && sport.coordinators.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-left text-white font-semibold mb-3">
                      Coordinators
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                      {sport.coordinators.map((coord, cIndex) => (
                        <div
                          key={cIndex}
                          className="
                            flex flex-col items-center text-center
                            p-3 rounded-2xl
                            bg-black/70 border border-white/10
                            shadow-[0_0_18px_rgba(0,0,0,0.8)]
                            transition-transform duration-300
                            hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(236,72,153,0.7)]
                          "
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          <img
                            src={coord.image}
                            alt={coord.name}
                            className="
                              h-16 w-16 md:h-20 md:w-20
                              rounded-2xl object-cover mb-2 
                              border border-white/20
                            "
                          />
                          <p className="text-white text-sm font-semibold">
                            {coord.name}
                          </p>
                          <p className="text-xs text-slate-300">
                            {coord.role}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* No results message for this year when search filters everything out */}
            {displayedSports.length === 0 && searchText && (
              <p className="text-center text-sm text-slate-400">
                No coordinators found matching "{search}".
              </p>
            )}
          </section>
        )}

        {/* ===== 3B. OLDER YEARS – FLAT ALL-COORDINATORS GRID ===== */}
        {!isSportStructured && allCoordinators.length > 0 && (
          <section className="space-y-5">
            <h2 className="text-left text-white font-semibold text-lg">
              All Coordinators
            </h2>

            {filteredCoordinators.length === 0 && searchText ? (
              <p className="text-sm text-slate-400">
                No coordinators found matching "{search}".
              </p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {filteredCoordinators.map((coord, idx) => (
                  <div
                    key={idx}
                    className="
                      flex flex-col items-center text-center
                      p-4 rounded-2xl
                      bg-black/70 border border-white/10
                      shadow-[0_0_18px_rgba(0,0,0,0.8)]
                      transition-transform duration-300
                      hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(236,72,153,0.7)]
                    "
                  >
                    <img
                      src={coord.image}
                      alt={coord.name}
                      className="
                        h-16 w-16 md:h-20 md:w-20
                        rounded-2xl object-cover mb-2 
                        border border-white/20
                      "
                    />
                    <p className="text-white text-sm font-semibold">
                      {coord.name}
                    </p>
                    <p className="text-xs text-slate-300">{coord.role}</p>
                    {coord.sportName && (
                      <p className="text-[0.65rem] mt-1 uppercase tracking-[0.18em] text-sky-300/90">
                        {coord.sportName}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
};

export default MemoryDetailPage;
