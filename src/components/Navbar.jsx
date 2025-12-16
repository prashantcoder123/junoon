import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },          // route
    { label: "About", href: "/#about" },   // section
    { label: "Events", href: "/#events" }, // section
    { label: "Schedule", href: "/schedule" },
    { label: "Team", href: "/team" },
    { label: "Developer", href: "/developer" },
    { label: "Participants", href: "/participants" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-2 left-0 z-50 w-full bg-black/40 backdrop-blur-md border-b border-white/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo -> go to "/" route */}
        <Link
          to="/"
          className="relative inline-block uppercase tracking-[0.25em]"
        >
          <span className="absolute inset-0 translate-x-[2px] translate-y-[2px] text-sky-500/40 blur-[1px]">
            JUNOON 4.0
          </span>

          <span className="relative bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent font-extrabold text-lg drop-shadow-[0_0_12px_rgba(56,189,248,0.9)]">
            JUNOON 4.0
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((link) =>
            link.label === "Home" ? (
              <Link
                key={link.label}
                to="/"
                className="
                  relative 
                  uppercase 
                  font-semibold 
                  tracking-wide 
                  text-transparent
                  bg-gradient-to-r 
                  from-sky-300 
                  via-fuchsia-300 
                  to-rose-300
                  bg-clip-text
                  transition 
                  duration-300
                  hover:scale-110
                  hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]
                "
              >
                {link.label}
              </Link>
            ) : ["Schedule", "Team", "Participants", "Contact"].includes(
                link.label
              ) ? (
              <Link
                key={link.label}
                to={link.href}
                className="
                  relative 
                  uppercase 
                  font-semibold 
                  tracking-wide 
                  text-transparent
                  bg-gradient-to-r 
                  from-sky-300 
                  via-fuchsia-300 
                  to-rose-300
                  bg-clip-text
                  transition 
                  duration-300
                  hover:scale-110
                  hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]
                "
              >
                {link.label}
              </Link>
            ) : (
              // About & Events -> scroll to section on home
              <a
                key={link.label}
                href={link.href}
                className="
                  relative 
                  uppercase 
                  font-semibold 
                  tracking-wide 
                  text-transparent
                  bg-gradient-to-r 
                  from-sky-300 
                  via-fuchsia-300 
                  to-rose-300
                  bg-clip-text
                  transition 
                  duration-300
                  hover:scale-110
                  hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]
                "
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="relative block h-4 w-4">
            <span
              className={`absolute left-0 top-0 h-[2px] w-full bg-white transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[2px] w-full bg-white transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full bg-white transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`
          md:hidden 
          bg-black/90 
          backdrop-blur-xl 
          border-t border-white/10 
          transition-[max-height] duration-300 
          overflow-hidden overflow-y-auto
          ${open ? "max-h-80" : "max-h-0"}
        `}
      >
        <nav className="flex flex-col gap-3 px-6 py-4 text-slate-200">
          {links.map((link) =>
            link.label === "Home" ? (
              <Link
                key={link.label}
                to="/"
                onClick={() => setOpen(false)}
                className="
                  py-2 
                  transition 
                  hover:text-white 
                  hover:pl-2
                  bg-gradient-to-r 
                  from-blue-400/0 
                  via-violet-400/0 
                  to-red-400/0 
                  hover:from-blue-600/40 
                  hover:via-violet-600/40 
                  hover:to-red-600/40 
                  rounded-md
                "
              >
                {link.label}
              </Link>
            ) : ["Schedule", "Team", "Participants", "Contact"].includes(
                link.label
              ) ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setOpen(false)}
                className="
                  py-2 
                  transition 
                  hover:text-white 
                  hover:pl-2
                  bg-gradient-to-r 
                  from-blue-400/0 
                  via-violet-400/0 
                  to-red-400/0 
                  hover:from-blue-600/40 
                  hover:via-violet-600/40 
                  hover:to-red-600/40 
                  rounded-md
                "
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  py-2 
                  transition 
                  hover:text-white 
                  hover:pl-2
                  bg-gradient-to-r 
                  from-blue-400/0 
                  via-violet-400/0 
                  to-red-400/0 
                  hover:from-blue-600/40 
                  hover:via-violet-600/40 
                  hover:to-red-600/40 
                  rounded-md
                "
              >
                {link.label}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
