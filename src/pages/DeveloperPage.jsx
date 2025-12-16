// src/pages/DeveloperPage.jsx




/**
 * ⚠️ Developer Note — PLEASE READ BEFORE EDITING ⚠️
 *
 * Do NOT modify this section of the code.
 * If you want to contribute or make changes,
 * DO NOT rewrite or remove existing profiles.
 *
 * 👉 Instead:
 *     - Create a NEW profile entry BELOW the current ones,
 *     - Follow the same data format and structure exactly,
 *     - Keep the styling and keys consistent (name, role, tag, links, image, etc.)
 *
 * This helps maintain code integrity and prevents broken UI.
 *
 * — Original Developer: Prashant Kumar
 */

import React, { useState } from "react";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import {
  SiSpring,
  SiMysql,
  SiHibernate,
  SiJsonwebtokens,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import Prashant from "../assets/team/technical/prashant.jpg";

const DeveloperPage = () => {
  const [tilt, setTilt] = useState(false);

  // 🔹 Tech badges with icons (Java + MERN)
  const techBadges = [
    {
      label: "Spring Boot",
      icon: <SiSpring className="text-emerald-300 text-base" />,
    },
    {
      label: "Node.js",
      icon: <SiNodedotjs className="text-emerald-400 text-base" />,
    },
    {
      label: "Express",
      icon: <SiExpress className="text-slate-200 text-base" />,
    },
    {
      label: "MongoDB",
      icon: <SiMongodb className="text-green-400 text-base" />,
    },
    {
      label: "MySQL",
      icon: <SiMysql className="text-sky-300 text-base" />,
    },
    {
      label: "Hibernate",
      icon: <SiHibernate className="text-yellow-300 text-base" />,
    },
    {
      label: "JWT",
      icon: <SiJsonwebtokens className="text-fuchsia-300 text-base" />,
    },
    {
      label: "REST API",
      icon: <TbApi className="text-rose-300 text-base" />,
    },
  ];

  const dockLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/prashant-kumar-16b010261/",
      icon: <FiLinkedin />,
      hover: "hover:text-sky-400",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/coder_prashantt_1718/",
      icon: <FiInstagram />,
      hover: "hover:text-rose-400",
    },
    {
      label: "GitHub",
      href: "https://github.com/prashantcoder123?tab=repositories",
      icon: <FiGithub />,
      hover: "hover:text-white",
    },
    {
      label: "Mail",
      href: "mailto:prashantkum7676@gmail.com",
      icon: <FiMail />,
      hover: "hover:text-fuchsia-400",
    },
  ];

  return (
    <main className="relative bg-black min-h-screen pt-28 pb-20 px-6 md:px-10 overflow-hidden">
      {/* 🌌 Background gradient blobs */}
      <div className="pointer-events-none absolute -top-40 -left-32 w-80 h-80 rounded-full bg-fuchsia-500/25 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 w-96 h-96 rounded-full bg-sky-500/25 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(244,63,94,0.16),transparent_60%)]" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        {/* ========= Developer 3D Card ========= */}
        <div className="flex justify-center">
          <div className="[perspective:1400px] w-full max-w-md">
            <div
              onMouseEnter={() => setTilt(true)}
              onMouseLeave={() => setTilt(false)}
              style={{
                transformStyle: "preserve-3d",
                transform: tilt
                  ? "rotateY(8deg) translateY(-8px)"
                  : "rotateY(0deg) translateY(0px)",
              }}
              className="
                group relative rounded-3xl 
                bg-white/10 backdrop-blur-xl 
                border border-white/20 
                shadow-[0_0_45px_rgba(0,0,0,0.7)]
                p-8 w-full text-center
                transform-gpu transition-transform duration-500 ease-out
              "
            >
              {/* 🔮 Soft moving glow behind card */}
              <div
                className="
                  pointer-events-none
                  absolute -inset-16 -z-10
                  bg-gradient-to-br from-sky-500/25 via-fuchsia-500/30 to-rose-500/25 
                  blur-3xl opacity-60
                  group-hover:opacity-90
                  animate-pulse
                "
              />

              {/* Avatar */}
              <div className="relative inline-block">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-sky-400/40 via-fuchsia-400/40 to-rose-400/40 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                <img
                  src={Prashant}
                  alt="Prashant Kumar"
                  className="
                    relative
                    w-32 h-32 mx-auto rounded-2xl object-cover 
                    border border-white/30 
                    shadow-[0_0_25px_rgba(255,255,255,0.35)]
                  "
                />
              </div>

              {/* Name */}
              <h2 className="mt-5 text-2xl md:text-3xl font-extrabold text-white">
                Prashant Kumar
              </h2>

              {/* Gradient underline */}
              <div className="mt-2 flex justify-center">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-sky-400/80 to-transparent animate-pulse" />
              </div>

              {/* Tagline */}
              <p className="text-sm text-slate-300 mt-3">
                Java Backend • Spring Boot • MERN Stack
              </p>

              <p className="text-xs text-sky-300 uppercase tracking-[0.25em] mt-3">
                GEC AURANGABAD (2K22)
              </p>

              {/* Motivated Bio */}
              <p className="text-slate-200/80 text-sm mt-6 leading-6">
                Backend-focused developer who loves turning complex problems
                into simple, reliable systems. Strong in Java & Spring Boot,
                comfortable with databases and APIs, and always pushing to
                write cleaner, smarter code than yesterday.
              </p>

              {/* Tech badges with icons */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {techBadges.map((tech) => (
                  <span
                    key={tech.label}
                    className="
                      inline-flex items-center gap-2
                      text-xs px-3 py-1 rounded-full 
                      bg-white/10 border border-white/20 
                      text-sky-100
                      shadow-[0_0_18px_rgba(15,23,42,0.8)]
                    "
                  >
                    {tech.icon}
                    <span>{tech.label}</span>
                  </span>
                ))}
              </div>

              {/* Dock social links */}
              <div className="mt-10 flex justify-center">
                <div
                  className="
                    flex items-end gap-3 
                    rounded-full px-4 py-3 
                    bg-black/70 border border-white/15 
                    shadow-[0_18px_45px_rgba(0,0,0,0.9)]
                    backdrop-blur-xl
                  "
                >
                  {dockLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={
                        item.href.startsWith("mailto:") ? undefined : "_blank"
                      }
                      rel={
                        item.href.startsWith("mailto:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className={`
                        group relative
                        flex flex-col items-center justify-center
                        w-12 h-12
                        rounded-2xl
                        bg-white/5
                        border border-white/15
                        text-slate-200 text-lg
                        transform-gpu
                        transition-all duration-300
                        hover:-translate-y-2 hover:scale-110
                        ${item.hover}
                      `}
                    >
                      {item.icon}
                      <span
                        className="
                          pointer-events-none
                          absolute -bottom-6 
                          text-[0.65rem] tracking-wide
                          text-slate-300 opacity-0
                          group-hover:opacity-100
                          transition-opacity duration-200
                        "
                      >
                        {item.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DeveloperPage;
