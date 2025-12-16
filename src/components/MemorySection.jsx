// src/components/MemorySection.jsx
import React from "react";
import { Link } from "react-router-dom";

const MemorySection = () => {
  return (
    <section className="bg-black py-24 px-6 md:px-10 text-center">
      <div className="flex justify-center">
        <Link
          to="/memories"   // 👈 new route
          className="
            relative group
            inline-flex items-center justify-center
            px-8 py-3
            rounded-full
            font-extrabold
            tracking-wide
            text-black text-sm sm:text-base
            cursor-pointer
            bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400
            shadow-[0_12px_30px_rgba(0,0,0,0.6)]
            transition-all duration-300
            active:translate-y-[3px]
            active:shadow-[0_6px_20px_rgba(0,0,0,0.7)]
          "
        >
          <span
            className="
              absolute inset-0 
              rounded-full
              bg-gradient-to-r from-sky-300/40 via-transparent to-rose-400/60
              blur-xl
              opacity-70
              group-hover:opacity-100
              transition-all duration-300
              -z-10
            "
          />

          <span
            className="
              relative
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]
              group-hover:drop-shadow-[0_0_8px_rgba(255,0,150,0.9)]
              transition-all duration-300
            "
          >
            JUNOON MEMORIES
          </span>
        </Link>
      </div>
    </section>
  );
};

export default MemorySection;
