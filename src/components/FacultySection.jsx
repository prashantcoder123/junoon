// src/components/FacultySection.jsx
import React from "react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import Prashant from "../assets/team/technical/prashant.jpg";
import Rakesh from "../assets/faculty/rakesh_sir.jpg";
import Om from "../assets/faculty/om_sir.jpg";
const facultyData = [
  {
    title: "Principal",
    people: [
      {
        name: "Dr. Prashant Mani",
        role: "Principal, GEC Aurangabad",
        img: Prashant,          // add principal photo here
        insta: "#",
        linkedin: "#",
        facebook: "#",
      },
    ],
  },
  {
    title: "Faculty Coordinators",
    people: [
      {
        name: "Prof. Rakesh Kumar",
        role: "Sports Head",
        img: Rakesh,          // add photo
        insta: "#",
        linkedin: "#",
        facebook: "#",
      },
      {
        name: "Prof. Om Vats",
        role: "Event Organizer",
        img: Om,          // add photo
        insta: "#",
        linkedin: "#",
        facebook: "#",
      },
    ],
  },
];

const FacultySection = () => {
  return (
    <section id="team" className="relative bg-black py-20 px-6 md:px-10">
      <div className="mx-auto max-w-6xl space-y-16">
        {facultyData.map((section, index) => (
          <div key={index}>
            {/* SECTION TITLE */}
            <h2
              className="
                text-3xl md:text-4xl font-extrabold 
                bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400 
                bg-clip-text text-transparent
                mb-10 text-center
              "
            >
              {section.title}
            </h2>

            {/* GRID OF CARDS */}
            <div
              className={`
                grid gap-10
                ${
                  section.people.length === 1
                    ? "grid-cols-1 place-items-center"
                    : "grid-cols-1 sm:grid-cols-2"
                }
              `}
            >
              {section.people.map((person, i) => (
                <div
                  key={i}
                  className="
                    relative group
                    rounded-3xl
                  "
                >
                  {/* 🔥 Electric gradient border layer */}
                  <div
                    className="
                      pointer-events-none
                      absolute -inset-[3px]
                      rounded-[1.7rem]
                      bg-gradient-to-r
                      from-cyan-400 via-fuchsia-500 to-amber-400
                      opacity-70
                      blur-md
                      group-hover:blur-lg
                      group-hover:opacity-100
                      transition-all duration-300
                      animate-electric-glow
                    "
                  />

                  {/* Actual card */}
                  <div
                    className="
                      relative
                      bg-black/70 backdrop-blur-xl 
                      rounded-3xl p-6
                      border border-white/10
                      flex flex-col items-center text-center
                      transition-transform duration-300
                      group-hover:-translate-y-2
                      group-hover:shadow-[0_0_40px_rgba(34,211,238,0.8)]
                    "
                  >
                    <img
                      src={person.img}
                      alt={person.name}
                      className="
                        w-32 h-32 rounded-full object-cover 
                        border-4 border-white/20 mb-4
                        bg-slate-900
                      "
                    />

                    <h3 className="text-xl font-semibold text-white">
                      {person.name}
                    </h3>

                    <p className="text-sm text-slate-300 mb-4">
                      {person.role}
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 text-xl">
                      {person.insta && (
                        <a
                          href={person.insta}
                          className="text-pink-400 hover:text-pink-300 transition transform hover:scale-110"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram />
                        </a>
                      )}
                      {person.linkedin && (
                        <a
                          href={person.linkedin}
                          className="text-blue-400 hover:text-blue-300 transition transform hover:scale-110"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedinIn />
                        </a>
                      )}
                      {person.facebook && (
                        <a
                          href={person.facebook}
                          className="text-sky-400 hover:text-sky-300 transition transform hover:scale-110"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebookF />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacultySection;
