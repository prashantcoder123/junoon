
//<<-- Loader ------>>///

// src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import ColorBends from "./reactbits/ColorBends";
import AboutSection from "./components/AboutSection.jsx";
import Navbar from "./components/Navbar.jsx";
import EventsSection from "./components/EventsSection.jsx";
import FacultySection from "./components/FacultySection.jsx";
import MemorySection from "./components/MemorySection.jsx";
import TeamPage from "./pages/TeamPage";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import MemoriesPage from "./pages/MemoriesPage.jsx";
import MemoryDetailPage from "./pages/MemoryDetailPage.jsx";
import LocationSection from "./components/LocationSection";
import SchedulePage from "./pages/SchedulePage.jsx";
import ParticipantsPage from "./pages/ParticipantsPage.jsx";
import DeveloperPage from "./pages/DeveloperPage";

import Cricket from "./pages/sports/cricket";
import Volleyball from "./pages/sports/volleyball";
import Football from "./pages/sports/football";
import Badminton from "./pages/sports/badminton";
import Chess from "./pages/sports/chess";
import ESports from "./pages/sports/esports";
import Kabaddi from "./pages/sports/kabaddi";
import Athletics from "./pages/sports/athletics";
import TableTennis from "./pages/sports/tt";
import ArmWrestling from "./pages/sports/armwrestling";
import TugofWar from "./pages/sports/tugofwar";

import SportsLoader from "./components/SportsLoader";

import heroImg from "./assets/hero/junoon_hero.png";

const App = () => {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // ✅ Show loader ONLY when on homepage "/"
    if (location.pathname === "/") {
      setShowLoader(true);
      const timer = setTimeout(() => setShowLoader(false), 1500);
      return () => clearTimeout(timer);
    } else {
      setShowLoader(false);
    }
  }, [location.pathname]);

  if (showLoader) {
    return <SportsLoader />;
  }

  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        {/* Home / Landing page */}
        <Route
          path="/"
          element={
            <>
              <ColorBends
                colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
                rotation={-180}
                speed={1}
                scale={1}
                frequency={1}
                warpStrength={1}
                mouseInfluence={1}
                parallax={0.5}
                noise={0.1}
                transparent
                imageSrc={heroImg}
              />

              <AboutSection />
              <EventsSection />
              <FacultySection />
              <MemorySection />
              <LocationSection />
            </>
          }
        />

        {/* Events page route (if you want a separate /events) */}
        <Route
          path="/events"
          element={
            <>
              <EventsSection />
              <MemoriesPage />
              <LocationSection />
            </>
          }
        />

        <Route path="/team" element={<TeamPage />} />
        <Route path="/participants" element={<ParticipantsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/memories" element={<MemoriesPage />} />
        <Route path="/memories/:memoryId" element={<MemoryDetailPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/developer" element={<DeveloperPage />} />

        {/* ⭐ SPORTS ROUTES ⭐ */}
        <Route path="/sports/cricket" element={<Cricket />} />
        <Route path="/sports/volleyball" element={<Volleyball />} />
        <Route path="/sports/football" element={<Football />} />
        <Route path="/sports/badminton" element={<Badminton />} />
        <Route path="/sports/chess" element={<Chess />} />
        <Route path="/sports/esports" element={<ESports />} />
        <Route path="/sports/kabaddi" element={<Kabaddi />} />
        <Route path="/sports/athletics" element={<Athletics />} />
        <Route path="/sports/tt" element={<TableTennis />} />
        <Route path="/sports/armwrestling" element={<ArmWrestling />} />
        <Route path="/sports/tugofwar" element={<TugofWar />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
