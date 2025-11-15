"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* 🔘 Pulsante menu fisso in alto a sinistra */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-5 left-5 z-[100] bg-black text-white p-2 rounded-md shadow-md hover:bg-gray-800 transition"
        aria-label="Apri menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* 🧭 Sidebar scorrevole */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white z-[90] p-6 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-[110%]"
        }`}
      >
        <h2 className="text-2xl font-bold mb-8 text-yellow-400 text-center">
          VEORA
        </h2>

        <nav className="flex flex-col space-y-5 text-lg text-center">
          <Link href="/" onClick={closeMenu} className="hover:text-yellow-400">
            Home
          </Link>
          <Link
            href="/catalogo"
            onClick={closeMenu}
            className="hover:text-yellow-400"
          >
            Catalogo
          </Link>
          <Link
            href="/preferiti"
            onClick={closeMenu}
            className="hover:text-yellow-400"
          >
            Preferiti
          </Link>
          <Link
            href="/contatti"
            onClick={closeMenu}
            className="hover:text-yellow-400"
          >
            Contatti
          </Link>

          {/* 💎 Nuova voce “Mi Presento” */}
          <Link
            href="/mi-presento"
            onClick={closeMenu}
            className="hover:text-yellow-400"
          >
            Mi Presento
          </Link>

          <Link
            href="/profilo"
            onClick={closeMenu}
            className="hover:text-yellow-400"
          >
            Profilo
          </Link>
        </nav>
      </aside>

      {/* 🌫️ Sfondo opaco chiudibile */}
      {open && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[80]"
        ></div>
      )}
    </>
  );
}
