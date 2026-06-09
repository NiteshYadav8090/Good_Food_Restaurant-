import { useEffect } from "react";
import { Router, Routes, Route, useLocation } from "./components/Router";
import { NavShell, FooterShell, useCustomCursor } from "./components/ClientShell";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Visit from "./pages/Visit";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  useCustomCursor();

  return (
    <Router>
      <ScrollToTop />
      {/* Ambient Background Orbs */}
      <div className="ambient-orbs" aria-hidden="true">
        <div className="orb"></div>
        <div className="orb"></div>
        <div className="orb"></div>
      </div>
      <div className="grain-overlay" aria-hidden="true"></div>

      <NavShell />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/visit" element={<Visit />} />
        </Routes>
      </main>
      <FooterShell />
    </Router>
  );
}
