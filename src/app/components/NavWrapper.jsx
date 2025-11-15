"use client";

import { useState } from "react";
import MobileNav from "./MobileNav.jsx";
import { User } from "lucide-react";

export default function NavWrapper() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ✅ Barra superiore VEORA chiara con pulsante nero e linee oro */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between bg-[#f6efe7]/80 backdrop-blur-md px-4 py-3 shadow-md">
        {/* ✅ Icona menu nera con linee oro */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center justify-center w-10 h-10 rounded-md bg-black text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        {/* ✅ Logo VEORA dorato animato */}
        <h1 className="veora-logo-gold text-[1.6rem] tracking-[6px]">VEORA</h1>

        {/* ✅ Icona account — forza reload completo per evitare bug campi spariti */}
        <a
          href="/login"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/login"; // 🔁 ricarica completa per montare React e Firebase
          }}
          className="flex items-center justify-center w-10 h-10 rounded-md text-[#0a0a14] hover:text-[#1a2a4d] transition duration-300"
          style={{
            textShadow: "0 0 5px rgba(10,10,20,0.3)",
          }}
        >
          <User size={25} strokeWidth={1.7} />
        </a>
      </header>

      {/* ✅ Menu laterale mobile */}
      <MobileNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
