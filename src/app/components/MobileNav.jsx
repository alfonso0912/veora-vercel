"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Heart } from "lucide-react";

export default function MobileNav({ isOpen, onClose }) {
  const [catalogoOpen, setCatalogoOpen] = useState(false);
  const [arredoCasaOpen, setArredoCasaOpen] = useState(false);
  const [arredoUfficioOpen, setArredoUfficioOpen] = useState(false);
  const [accessoriOpen, setAccessoriOpen] = useState(false);
  const [festivitaOpen, setFestivitaOpen] = useState(false);
  const [giocattoliOpen, setGiocattoliOpen] = useState(false);
  const [vasiOpen, setVasiOpen] = useState(false);
  const [bomboniereOpen, setBomboniereOpen] = useState(false);

  // ✅ Categorie principali (ordine corretto)
  const categorie = [
    "ACCESSORI",
    "ARREDO",
    "ARREDO UFFICIO",
    "BOMBONIERE",
    "FESTIVITÀ",
    "GIOCATTOLI",
    "VASI",
  ];

  // ✅ Sottocategorie ARREDO CASA (ORDINE ALFABETICO CORRETTO)
  const sottocategorieArredoCasa = [
    "Forme Creative",
    "Lampade",
    "Orologi",
    "Porta Bottiglie",
    "Porta Candele",
    "Porta Capsule",
    "Porta Cellulare",
    "Porta Gioie",
    "Sculture",
    "Scritte",
    "Supporti Cuffie",
    "Svuota Tasche",
  ];

  // ✅ Sottocategorie ARREDO UFFICIO
  const sottocategorieArredoUfficio = [
    "Organizer",
    "Porta Penne",
    "Studio Creativo",
  ];

  // ✅ Sottocategorie ACCESSORI
  const sottocategorieAccessori = ["Ferma Capelli", "Orecchini"];

  // ✅ Sottocategorie FESTIVITÀ
  const sottocategorieFestivita = ["Natale", "Pasqua", "San Valentino"];

  // ✅ Sottocategorie GIOCATTOLI
  const sottocategorieGiocattoli = [
    "DC Comics",
    "Disney",
    "Looney Tunes",
    "Marvel",
    "Miniature",
    "One Piece",
    "Personaggi",
  ];

  // ✅ Sottocategorie VASI
  const sottocategorieVasi = ["Armonia", "Atelier", "Spiralia"];

  // ✅ Sottocategorie BOMBONIERE
  const sottocategorieBomboniere = ["Ricordi Preziosi", "Vasi d’Autore"];

  // ✅ Slugify FIX (gestisce apostrofi e d’autore)
  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/’/g, "")
      .replace(/'/g, "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ /g, "-")
      .replace(/dautore/g, "d-autore");
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.nav
            className="fixed top-0 left-0 h-full w-72 bg-black text-[#c1a45c] z-50 shadow-2xl p-6 overflow-y-auto"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-3xl font-bold tracking-widest">VEORA</h1>
              <X className="cursor-pointer" size={28} onClick={onClose} />
            </div>

            <ul className="space-y-5 text-lg">
              <li>
                <Link
                  href="/"
                  onClick={onClose}
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>

              {/* CATALOGO */}
              <li>
                <button
                  onClick={() => setCatalogoOpen(!catalogoOpen)}
                  className="flex items-center justify-between w-full hover:text-white transition-colors focus:outline-none"
                >
                  <span>Catalogo</span>
                  <ChevronDown
                    className={`transition-transform ${
                      catalogoOpen ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>

                <AnimatePresence>
                  {catalogoOpen && (
                    <motion.ul
                      className="pl-4 mt-3 space-y-3 text-base text-[#d6c188]"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {categorie.map((cat) => {
                        // 🔹 ACCESSORI
                        if (cat === "ACCESSORI") {
                          return (
                            <li key={cat}>
                              <button
                                onClick={() => setAccessoriOpen(!accessoriOpen)}
                                className="flex items-center justify-between w-full hover:text-white transition-colors focus:outline-none"
                              >
                                <span>{cat}</span>
                                <ChevronDown
                                  className={`transition-transform ${
                                    accessoriOpen ? "rotate-180" : ""
                                  }`}
                                  size={18}
                                />
                              </button>

                              <AnimatePresence>
                                {accessoriOpen && (
                                  <motion.ul
                                    className="pl-4 mt-2 space-y-2 text-sm text-[#d6c188]"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.25 }}
                                  >
                                    {sottocategorieAccessori.map((sub) => (
                                      <li key={sub}>
                                        <Link
                                          href={`/catalogo/accessori/${slugify(
                                            sub
                                          )}`}
                                          onClick={onClose}
                                          className="block hover:text-white transition-colors"
                                        >
                                          {sub}
                                        </Link>
                                      </li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </li>
                          );
                        }
                        // 🔹 ARREDO CASA
                        if (cat === "ARREDO") {
                          return (
                            <li key={cat}>
                              <button
                                onClick={() =>
                                  setArredoCasaOpen(!arredoCasaOpen)
                                }
                                className="flex items-center justify-between w-full hover:text-white transition-colors focus:outline-none"
                              >
                                <span>ARREDO CASA</span>
                                <ChevronDown
                                  className={`transition-transform ${
                                    arredoCasaOpen ? "rotate-180" : ""
                                  }`}
                                  size={18}
                                />
                              </button>

                              <AnimatePresence>
                                {arredoCasaOpen && (
                                  <motion.ul
                                    className="pl-4 mt-2 space-y-2 text-sm text-[#d6c188]"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.25 }}
                                  >
                                    {sottocategorieArredoCasa.map((sub) => (
                                      <li key={sub}>
                                        <Link
                                          href={`/catalogo/arredo-casa/${slugify(
                                            sub
                                          )}`}
                                          onClick={onClose}
                                          className="block hover:text-white transition-colors"
                                        >
                                          {sub}
                                        </Link>
                                      </li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </li>
                          );
                        }

                        // 🔹 ARREDO UFFICIO
                        if (cat === "ARREDO UFFICIO") {
                          return (
                            <li key={cat}>
                              <button
                                onClick={() =>
                                  setArredoUfficioOpen(!arredoUfficioOpen)
                                }
                                className="flex items-center justify-between w-full hover:text-white transition-colors focus:outline-none"
                              >
                                <span>{cat}</span>
                                <ChevronDown
                                  className={`transition-transform ${
                                    arredoUfficioOpen ? "rotate-180" : ""
                                  }`}
                                  size={18}
                                />
                              </button>

                              <AnimatePresence>
                                {arredoUfficioOpen && (
                                  <motion.ul
                                    className="pl-4 mt-2 space-y-2 text-sm text-[#d6c188]"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.25 }}
                                  >
                                    {sottocategorieArredoUfficio.map((sub) => (
                                      <li key={sub}>
                                        <Link
                                          href={`/catalogo/arredo-ufficio/${slugify(
                                            sub
                                          )}`}
                                          onClick={onClose}
                                          className="block hover:text-white transition-colors"
                                        >
                                          {sub}
                                        </Link>
                                      </li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </li>
                          );
                        }

                        // 🔹 BOMBONIERE
                        if (cat === "BOMBONIERE") {
                          return (
                            <li key={cat}>
                              <button
                                onClick={() =>
                                  setBomboniereOpen(!bomboniereOpen)
                                }
                                className="flex items-center justify-between w-full hover:text-white transition-colors focus:outline-none"
                              >
                                <span>{cat}</span>
                                <ChevronDown
                                  className={`transition-transform ${
                                    bomboniereOpen ? "rotate-180" : ""
                                  }`}
                                  size={18}
                                />
                              </button>

                              <AnimatePresence>
                                {bomboniereOpen && (
                                  <motion.ul
                                    className="pl-4 mt-2 space-y-2 text-sm text-[#d6c188]"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.25 }}
                                  >
                                    {sottocategorieBomboniere.map((sub) => (
                                      <li key={sub}>
                                        <Link
                                          href={`/catalogo/bomboniere/${slugify(
                                            sub
                                          )}`}
                                          onClick={onClose}
                                          className="block hover:text-white transition-colors"
                                        >
                                          {sub}
                                        </Link>
                                      </li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </li>
                          );
                        }

                        // 🔹 FESTIVITÀ
                        if (cat === "FESTIVITÀ") {
                          return (
                            <li key={cat}>
                              <button
                                onClick={() => setFestivitaOpen(!festivitaOpen)}
                                className="flex items-center justify-between w-full hover:text-white transition-colors focus:outline-none"
                              >
                                <span>{cat}</span>
                                <ChevronDown
                                  className={`transition-transform ${
                                    festivitaOpen ? "rotate-180" : ""
                                  }`}
                                  size={18}
                                />
                              </button>

                              <AnimatePresence>
                                {festivitaOpen && (
                                  <motion.ul
                                    className="pl-4 mt-2 space-y-2 text-sm text-[#d6c188]"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.25 }}
                                  >
                                    {sottocategorieFestivita.map((sub) => (
                                      <li key={sub}>
                                        <Link
                                          href={`/catalogo/festivita/${slugify(
                                            sub
                                          )}`}
                                          onClick={onClose}
                                          className="block hover:text-white transition-colors"
                                        >
                                          {sub}
                                        </Link>
                                      </li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </li>
                          );
                        }

                        // 🔹 GIOCATTOLI
                        if (cat === "GIOCATTOLI") {
                          return (
                            <li key={cat}>
                              <button
                                onClick={() =>
                                  setGiocattoliOpen(!giocattoliOpen)
                                }
                                className="flex items-center justify-between w-full hover:text-white transition-colors focus:outline-none"
                              >
                                <span>{cat}</span>
                                <ChevronDown
                                  className={`transition-transform ${
                                    giocattoliOpen ? "rotate-180" : ""
                                  }`}
                                  size={18}
                                />
                              </button>

                              <AnimatePresence>
                                {giocattoliOpen && (
                                  <motion.ul
                                    className="pl-4 mt-2 space-y-2 text-sm text-[#d6c188]"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.25 }}
                                  >
                                    {sottocategorieGiocattoli.map((sub) => (
                                      <li key={sub}>
                                        <Link
                                          href={`/catalogo/giocattoli/${slugify(
                                            sub
                                          )}`}
                                          onClick={onClose}
                                          className="block hover:text-white transition-colors"
                                        >
                                          {sub}
                                        </Link>
                                      </li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </li>
                          );
                        }

                        // 🔹 VASI
                        if (cat === "VASI") {
                          return (
                            <li key={cat}>
                              <button
                                onClick={() => setVasiOpen(!vasiOpen)}
                                className="flex items-center justify-between w-full hover:text-white transition-colors focus:outline-none"
                              >
                                <span>{cat}</span>
                                <ChevronDown
                                  className={`transition-transform ${
                                    vasiOpen ? "rotate-180" : ""
                                  }`}
                                  size={18}
                                />
                              </button>

                              <AnimatePresence>
                                {vasiOpen && (
                                  <motion.ul
                                    className="pl-4 mt-2 space-y-2 text-sm text-[#d6c188]"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.25 }}
                                  >
                                    {sottocategorieVasi.map((sub) => (
                                      <li key={sub}>
                                        <Link
                                          href={`/catalogo/vasi/${slugify(
                                            sub
                                          )}`}
                                          onClick={onClose}
                                          className="block hover:text-white transition-colors"
                                        >
                                          {sub}
                                        </Link>
                                      </li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </li>
                          );
                        }

                        return null;
                      })}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Contatti */}
              <li>
                <Link
                  href="/contatti"
                  onClick={onClose}
                  className="hover:text-white transition-colors"
                >
                  Contatti
                </Link>
              </li>

              {/* Mi Presento */}
              <li>
                <Link
                  href="/mi-presento"
                  onClick={onClose}
                  className="hover:text-white transition-colors"
                >
                  Mi Presento
                </Link>
              </li>

              {/* Preferiti */}
              <li>
                <Link
                  href="/preferiti"
                  onClick={onClose}
                  className="flex items-center gap-2 hover:text-white transition-colors font-semibold"
                >
                  <Heart size={20} strokeWidth={1.7} />
                  Preferiti
                </Link>
              </li>
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
