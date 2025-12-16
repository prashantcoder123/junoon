// src/pages/TeamPage.jsx
import React, { useState } from "react";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail, FiX } from "react-icons/fi";
import heroImg from "../assets/hero/junoon_hero.png";
import Prashant from "../assets/team/technical/prashant.jpg";

// 🔹 Team data with categories + contact
// 🔹 Team data with categories + contact
const teamData = [
  {
    section: "Technical Team",
    sectionId: "tech",
    people: [
      {
        name: "Prashant Kumar",
        role: "Full-Stack Developer",
        tag: "Java • Spring Boot • MERN",
        insta: "https://www.instagram.com/prashantt_1718/",
        linkedin: "https://www.linkedin.com/in/prashantcoder/",
        whatsapp: "7367055728",
        email: "prashantkumarcse15@gmail.com",
        img: Prashant,
      },
      {
        name: "Prashant",
        role: "API & Deployment",
        tag: "DevOps • Cloud",
        insta: "#",
        linkedin: "#",
        whatsapp: "9999999999",
        email: "",
        img: heroImg,
      },
    ],
  },

  /* ==============================
     🏅 SPORTS COMMITTEES (10)
  =============================== */

  {
    section: "Cricket Committee",
    sectionId: "cricket",
    people: [
      {
        name: "Shiv Prakash",
        role: "Coordinator",
        tag: "Fixtures • Umpire",
        whatsapp: "9876543210",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
      {
        name: "Ankit Kumar",
        role: "Sub-Coordinator",
        tag: "Scoring Desk",
        whatsapp: "9876543211",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
      {
        name: "Rohit Singh",
        role: "Member",
        tag: "Ground Setup",
        whatsapp: "9876543212",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
    ],
  },

  {
    section: "Football Committee",
    sectionId: "football",
    people: [
      {
        name: "Om Vats",
        role: "Coordinator",
        tag: "Tournament Control",
        whatsapp: "9876543213",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
      {
        name: "Amit Kumar",
        role: "Sub-Coordinator",
        tag: "Referee",
        whatsapp: "9876543214",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
      {
        name: "Deepak",
        role: "Member",
        tag: "Linesman",
        whatsapp: "9876543215",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
    ],
  },

  {
    section: "Volleyball Committee",
    sectionId: "volleyball",
    people: [
      {
        name: "Prashant Kumar",
        role: "Coordinator",
        tag: "Net & Court",
        whatsapp: "9876543216",
        insta: "#",
        linkedin: "#",
        img: Prashant,
      },
      {
        name: "Aman Raj",
        role: "Sub-Coordinator",
        tag: "Score Table",
        whatsapp: "9876543217",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
      {
        name: "Vikash",
        role: "Member",
        tag: "Ball Control",
        whatsapp: "9876543218",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
    ],
  },

  {
    section: "Badminton Committee",
    sectionId: "badminton",
    people: [
      {
        name: "Rahul Singh",
        role: "Coordinator",
        tag: "Indoor Hall Manager",
        whatsapp: "9876543219",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
      {
        name: "Vishal Kumar",
        role: "Sub-Coordinator",
        tag: "Match Sheets",
        whatsapp: "9876543220",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
    ],
  },

  {
    section: "Chess Committee",
    sectionId: "chess",
    people: [
      {
        name: "Ayush Raj",
        role: "Coordinator",
        tag: "Chief Arbiter",
        whatsapp: "9876543221",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
      {
        name: "Anand Kumar",
        role: "Sub-Coordinator",
        tag: "Board Setup",
        whatsapp: "9876543222",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
    ],
  },

  {
    section: "E-Sports Committee",
    sectionId: "e-sports",
    people: [
      {
        name: "Rohan",
        role: "Coordinator",
        tag: "Lobby Manager",
        whatsapp: "9876543223",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
      {
        name: "Sagar",
        role: "Sub-Coordinator",
        tag: "PC & Console Desk",
        whatsapp: "9876543224",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
    ],
  },

  {
    section: "Kabaddi Committee",
    sectionId: "kabaddi",
    people: [
      {
        name: "Manish Kumar",
        role: "Coordinator",
        tag: "Mat Setup",
        whatsapp: "9876543225",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
      {
        name: "Rajeev",
        role: "Sub-Coordinator",
        tag: "Raid Line Judge",
        whatsapp: "9876543226",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
    ],
  },

  {
    section: "Athletics Committee",
    sectionId: "athletics",
    people: [
      {
        name: "Sachin",
        role: "Coordinator",
        tag: "Track Events",
        whatsapp: "9876543227",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
    ],
  },

  {
    section: "Table Tennis Committee",
    sectionId: "tt",
    people: [
      {
        name: "Kapil",
        role: "Coordinator",
        tag: "Court Judge",
        whatsapp: "9876543228",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
    ],
  },

  {
    section: "Carrom Committee",
    sectionId: "carrom",
    people: [
      {
        name: "Nitin",
        role: "Coordinator",
        tag: "Indoor Desk",
        whatsapp: "9876543229",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
    ],
  },
  {
    section: "Arm Wrestling",
    sectionId: "armwrestling",
    people: [
      {
        name: "Shiv Prakash",
        role: "Coordinator",
        tag: "Fixtures • Umpire",
        whatsapp: "9876543210",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
      {
        name: "Ankit Kumar",
        role: "Sub-Coordinator",
        tag: "Scoring Desk",
        whatsapp: "9876543211",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
      {
        name: "Rohit Singh",
        role: "Member",
        tag: "Ground Setup",
        whatsapp: "9876543212",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
    ],
  },
  {
    section: " Tug of War",
    sectionId: "tugofwar",
    people: [
      {
        name: "Shiv Prakash",
        role: "Coordinator",
        tag: "Fixtures • Umpire",
        whatsapp: "9876543210",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
      {
        name: "Ankit Kumar",
        role: "Sub-Coordinator",
        tag: "Scoring Desk",
        whatsapp: "9876543211",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
      {
        name: "Rohit Singh",
        role: "Member",
        tag: "Ground Setup",
        whatsapp: "9876543212",
        insta: "#",
        linkedin: "#",
        img: heroImg,
      },
    ],
  },
];


const TeamPage = () => {
  const [activeFilter, setActiveFilter] = useState("all"); // all | tech | sports | media
  const [selectedMember, setSelectedMember] = useState(null);

  const filters = [
    { id: "all", label: "All" },
    { id: "tech", label: "Technical" },
    { id: "cricket", label: "Cricket" },
    { id: "football", label: "Football" },
    { id: "volleyball", label: "Volleyball" },
    { id: "badminton", label: "Badminton" },
    { id: "chess", label: "Chess" },
    { id: "e-sports", label: "E-Sports" },
    { id: "kabaddi", label: "Kabaddi" },
    { id: "athletics", label: "Athletics" },
    { id: "tt", label: "Table Tennis" },
    { id: "armwrestling", label: "Arm Wrestling" },
    { id: "tugofwar", label: "Tug of War" },
  ];

  // Filter sections based on active filter
  const filteredSections =
    activeFilter === "all"
      ? teamData
      : teamData.filter((sec) => sec.sectionId === activeFilter);

  return (
    <main className="bg-black min-h-screen pt-28 pb-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Header */}
        <header className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/90">
            JUNOON 4.0 • CREW
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            <span className="block text-white">Meet the</span>
            <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent">
              Organizing Team
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-200/80">
            From fixtures to website, every detail of JUNOON 4.0 is powered by this
            dedicated core crew.
          </p>
        </header>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`
                px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold 
                border 
                transition-all duration-200 
                ${
                  activeFilter === f.id
                    ? "bg-gradient-to-r from-sky-500 via-fuchsia-500 to-rose-500 text-black border-transparent shadow-[0_0_20px_rgba(236,72,153,0.7)]"
                    : "bg-white/5 border-white/20 text-slate-200 hover:bg-white/10"
                }
              `}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* SECTION BLOCKS */}
        {filteredSections.map((section, i) => (
          <section key={i} className="space-y-8">
            {/* Section Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent">
              {section.section}
            </h2>

            {/* Cards Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {section.people.map((person, idx) => (
                <article
                  key={idx}
                  onClick={() =>
                    setSelectedMember({ ...person, section: section.section })
                  }
                  className="
                    group relative overflow-hidden cursor-pointer
                    rounded-3xl border border-white/10
                    bg-white/5 backdrop-blur-xl
                    p-6 space-y-4
                    shadow-[0_0_35px_rgba(0,0,0,0.5)]
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:shadow-[0_0_55px_rgba(236,72,153,0.6)]
                  "
                >
                  {/* Glow */}
                  <div
                    className="
                      pointer-events-none absolute -inset-20 -z-10
                      bg-gradient-to-br from-sky-500/25 via-fuchsia-500/20 to-rose-500/25 
                      opacity-0 blur-3xl
                      group-hover:opacity-100
                      transition-opacity duration-300
                    "
                  />

                  {/* Avatar */}
                  <div className="flex justify-center">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="h-50 w-40 rounded-2xl object-cover border border-white/20"
                    />
                  </div>

                  {/* Text */}
                  <div className="text-center space-y-1">
                    <h3 className="text-lg font-bold text-white">
                      {person.name}
                    </h3>
                    <p className="text-sm text-slate-100/80">{person.role}</p>
                    <p className="text-[0.7rem] tracking-[0.25em] uppercase text-sky-300/90">
                      {person.tag}
                    </p>
                  </div>

                  {/* Social Icons (just preview in card) */}
                  <div className="flex justify-center gap-4 text-lg mt-3">
                    {person.insta && (
                      <span className="text-pink-400/80 group-hover:text-pink-300 transition">
                        <FaInstagram />
                      </span>
                    )}
                    {person.linkedin && (
                      <span className="text-blue-400/80 group-hover:text-blue-300 transition">
                        <FaLinkedinIn />
                      </span>
                    )}
                    {person.facebook && (
                      <span className="text-sky-400/80 group-hover:text-sky-300 transition">
                        <FaFacebookF />
                      </span>
                    )}
                  </div>

                  <p className="text-[0.65rem] text-slate-400 text-center mt-1">
                    Tap to view full profile
                  </p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* ========= MODAL POPUP ========= */}
      {selectedMember && (
        <div
          className="
            fixed inset-0 z-50 flex items-center justify-center 
            bg-black/70 backdrop-blur-md
          "
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="
              relative w-full max-w-md mx-4
              rounded-3xl bg-black/90 border border-white/15 
              p-6 space-y-5
              shadow-[0_0_45px_rgba(236,72,153,0.7)]
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="
                absolute top-3 right-3 
                h-8 w-8 flex items-center justify-center
                rounded-full border border-white/20
                text-slate-200 text-sm
                hover:bg-white/10 transition
              "
            >
              <FiX />
            </button>

            {/* Section Label */}
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-sky-300/90 text-center">
              {selectedMember.section}
            </p>

            {/* Avatar */}
            <div className="flex justify-center">
              <img
                src={selectedMember.img}
                alt={selectedMember.name}
                className="h-28 w-28 rounded-3xl object-cover border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              />
            </div>

            {/* Info */}
            <div className="text-center space-y-1">
              <h2 className="text-xl font-bold text-white">
                {selectedMember.name}
              </h2>
              <p className="text-sm text-slate-200">
                {selectedMember.role}
              </p>
              <p className="text-[0.7rem] tracking-[0.25em] uppercase text-sky-300/90">
                {selectedMember.tag}
              </p>
            </div>

            {/* Contacts */}
            <div className="space-y-3 text-sm text-slate-200">
              {selectedMember.whatsapp && (
                <a
                  href={`https://wa.me/${selectedMember.whatsapp.replace(
                    /[^0-9]/g,
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded-2xl bg-white/5 border border-white/15 hover:bg-white/10 transition"
                >
                  <FaWhatsapp className="text-green-400 text-lg" />
                  <div>
                    <p className="text-xs text-slate-300">WhatsApp</p>
                    <p className="text-sm text-white">
                      {selectedMember.whatsapp}
                    </p>
                  </div>
                </a>
              )}

              {selectedMember.email && (
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="flex items-center gap-3 px-3 py-2 rounded-2xl bg-white/5 border border-white/15 hover:bg-white/10 transition"
                >
                  <FiMail className="text-fuchsia-300 text-lg" />
                  <div>
                    <p className="text-xs text-slate-300">Email</p>
                    <p className="text-sm text-white">
                      {selectedMember.email}
                    </p>
                  </div>
                </a>
              )}

              {selectedMember.whatsapp && (
                <div className="flex items-center gap-3 px-3 py-2 text-slate-200">
                  <FiPhone className="text-sky-300" />
                  <span className="text-sm">{selectedMember.whatsapp}</span>
                </div>
              )}
            </div>

            {/* Social links full */}
            <div className="flex justify-center gap-5 pt-3 text-xl">
              {selectedMember.insta && selectedMember.insta !== "#" && (
                <a
                  href={selectedMember.insta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition transform hover:scale-110"
                >
                  <FaInstagram />
                </a>
              )}
              {selectedMember.linkedin && selectedMember.linkedin !== "#" && (
                <a
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 transition transform hover:scale-110"
                >
                  <FaLinkedinIn />
                </a>
              )}
              {selectedMember.facebook && selectedMember.facebook !== "#" && (
                <a
                  href={selectedMember.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 transition transform hover:scale-110"
                >
                  <FaFacebookF />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default TeamPage;
