import React, { useEffect, useRef, useState } from "react";
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import heroImg from "../assets/hero/junoon_hero.png";

const Footer = () => {
  const [umangVisible, setUmangVisible] = useState(false);
  const umangRef = useRef(null);

  useEffect(() => {
    const el = umangRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setUmangVisible(true);
          observer.unobserve(entry.target); // run only once
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="w-full bg-black pt-16 pb-12 border-t border-white/10">
      {/* ⭐ UMANG INFO BLOCK WITH COLLEGE IMAGE + SCROLL REVEAL + 3D HOVER */}
      <div
        ref={umangRef}
        className={`
          group
          text-center mb-10 space-y-5
          transform transition-all duration-700
          ${
            umangVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }
        `}
        style={{ perspective: "1200px" }} // gives 3D feel on hover
      >
        {/* Glow background */}
        <div className="relative flex justify-center">
          <div className="absolute -inset-10 rounded-3xl bg-gradient-to-r from-sky-500/20 via-fuchsia-500/15 to-rose-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* College Image + Host Badge */}
          <div
            className="
              relative inline-block 
              transform-gpu 
              transition-transform duration-500
              group-hover:-translate-y-2 
              group-hover:rotate-[2deg] 
              group-hover:scale-[1.03]
            "
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src={heroImg} // replace with actual college image if you have one
              alt="GEC Aurangabad"
              className="
                w-32 h-32
                object-cover 
                rounded-2xl 
                border border-white/20 
                shadow-[0_0_25px_rgba(236,72,153,0.4)]
                group-hover:shadow-[0_0_45px_rgba(236,72,153,0.8)]
                transition-shadow duration-500
              "
            />

            {/* 🟡 Host College badge */}
            <span
              className="
                absolute -top-2 -right-2
                px-3 py-1 
                rounded-full 
                text-[0.65rem] font-semibold 
                bg-amber-400 text-black
                shadow-md
                transform-gpu
                group-hover:-translate-y-1 group-hover:translate-x-1
                group-hover:rotate-[3deg]
                transition-transform duration-500
              "
            >
              Host College
            </span>
          </div>
        </div>

        <h2 className="text-3xl font-extrabold tracking-wide text-white">
          UMANG - 25
        </h2>

        <p className="text-sm text-slate-300">Hosted by</p>

        <p className="text-slate-300 text-sm max-w-lg mx-auto leading-6">
          Government Engineering College Aurangabad
          <br />
          Arthua • Kasma • Rafiganj, Bihar – 824125
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 pt-3">
          <a
            href="#"
            className="
              text-slate-300 text-xl transition
              hover:text-rose-400 
              transform-gpu hover:-translate-y-1 hover:scale-110
            "
          >
            <FiInstagram />
          </a>
          <a
            href="#"
            className="
              text-slate-300 text-xl transition
              hover:text-sky-400 
              transform-gpu hover:-translate-y-1 hover:scale-110
            "
          >
            <FiFacebook />
          </a>
          <a
            href="#"
            className="
              text-slate-300 text-xl transition
              hover:text-sky-400 
              transform-gpu hover:-translate-y-1 hover:scale-110
            "
          >
            <FiTwitter />
          </a>
        </div>
      </div>

      {/* ===================== ORIGINAL FOOTER (ANIMATED) ===================== */}
      <div
        className="
          max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10
          opacity-0 translate-y-8
          animate-[fadeUp_0.8s_ease-out_forwards_0.2s]
        "
      >
        {/* LEFT – Logo + Social */}
        <div className="space-y-4">
          <h2
            className="
              text-3xl font-extrabold 
              bg-gradient-to-r 
              from-sky-400 via-fuchsia-400 to-rose-400 
              bg-clip-text text-transparent
            "
          >
            JUNOON 4.0
          </h2>

          <p className="text-slate-300 text-sm">A Sports Annual Meet</p>

          <div className="flex gap-5 pt-4">
            <a
              href="#"
              className="
                text-slate-300 text-xl transition
                hover:text-sky-400 
                transform-gpu hover:-translate-y-1 hover:scale-110
              "
            >
              <FiTwitter />
            </a>
            <a
              href="#"
              className="
                text-slate-300 text-xl transition
                hover:text-fuchsia-400 
                transform-gpu hover:-translate-y-1 hover:scale-110
              "
            >
              <FiFacebook />
            </a>
            <a
              href="#"
              className="
                text-slate-300 text-xl transition
                hover:text-rose-400 
                transform-gpu hover:-translate-y-1 hover:scale-110
              "
            >
              <FiInstagram />
            </a>
            <a
              href="#"
              className="
                text-slate-300 text-xl transition
                hover:text-sky-400 
                transform-gpu hover:-translate-y-1 hover:scale-110
              "
            >
              <FiLinkedin />
            </a>
          </div>
        </div>

        {/* CENTER – Useful Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Useful Links</h3>

          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/"
                className="text-slate-300 hover:text-white transition"
              >
                Home
              </a>
            </li>
            <li>
              {/* <a
                href="/#about"
                className="text-slate-300 hover:text-white transition"
              >
                About
              </a> */}
            </li>
            <li>
              <a
                href="/events"
                className="text-slate-300 hover:text-white transition"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="/schedule"
                className="text-slate-300 hover:text-white transition"
              >
                Schedule
              </a>
            </li>

            <li>
              <a
                href="/team"
                className="text-slate-300 hover:text-white transition"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="/developer"
                className="text-slate-300 hover:text-white transition"
              >
                Developer
              </a>
            </li>
            <li>
              <a
                href="/participants"
                className="text-slate-300 hover:text-white transition"
              >
                Participants
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-slate-300 hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT – College Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>

          <p className="text-sm text-slate-300 leading-6">
            Government Engineering College, Aurangabad
            <br />
            Arthua • Kasma • Rafiganj
            <br />
            Aurangabad Bihar – 824125
            <br />
            India
          </p>

          <p className="text-sm text-white font-semibold">
            Phone:
            <span className="font-normal text-slate-300"> +91 73670 55728</span>
          </p>

          <p className="text-sm text-white font-semibold">
            Email:
            <span className="font-normal text-slate-300">
              {" "}
              junoon@gmail.com
            </span>
          </p>
        </div>
      </div>

      {/* Divider with animated glow */}
      <div
        className="
          h-px bg-white/10 my-8 max-w-6xl mx-auto 
          relative overflow-hidden
          before:absolute before:inset-0 
          before:bg-gradient-to-r before:from-sky-500/0 before:via-fuchsia-500/40 before:to-rose-500/0
          before:animate-[pulseGlow_5s_linear_infinite]
        "
      />

      {/* Bottom line */}
      <div className="text-center text-xs text-slate-400 space-y-1">
        <p className="tracking-wider">
          © {new Date().getFullYear()} JUNOON 4.0 — All Rights Reserved
        </p>
        <p className="tracking-wide">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/prashant-kumar-16b010261/" // 🔗 put your real link here
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-white font-semibold
              transition 
              hover:text-rose-400 
              transform-gpu hover:scale-110 inline-block
              hover:-translate-y-[2px]
            "
          >
            Prashant (2k22)
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
