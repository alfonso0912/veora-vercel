"use client";

import { useState, useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation"; // ✅ AGGIUNTO useRouter QUI
import Image from "next/image";
import Link from "next/link";
import { Heart, Sparkles } from "lucide-react";
import catalogoData from "@/app/catalogo/catalogoData";
import PagaAllaConsegna from "@/app/components/PagaAllaConsegna"; // 🛒 AGGIUNTO

// ✅ LIGHTBOX + ZOOM
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

// ✅ Formattazione prezzi
function formatEuro(raw) {
  if (raw === undefined || raw === null) return null;
  const s = String(raw).trim();
  if (s.includes("€")) return s; // se è già formattato, non tocco
  const num = parseFloat(s.replace(/[^\d.,-]/g, "").replace(",", "."));
  if (isNaN(num)) return s;
  const fixed = num.toFixed(2);
  const [intPart, dec] = fixed.split(".");
  const withThousands = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${withThousands},${dec} €`;
}

// 🎨 Palette VEORA
const COLORI_VEORA = [
  { nome: "Beige", colore: "#F7E6DE" },
  { nome: "Bianco Giada", colore: "#FFFFFF" },
  { nome: "Giallo", colore: "#F4EE2A" },
  { nome: "Giallo Girasole", colore: "#FEC600" },
  { nome: "Oro", colore: "#E4BD68" },
  { nome: "Bronzo", colore: "#847D48" },
  { nome: "Arancione", colore: "#FF6A13" },
  { nome: "Arancione Zucca", colore: "#FF9016" },
  { nome: "Rosa", colore: "#F55A74" },
  { nome: "Fucsia", colore: "#F5547C" },
  { nome: "Magenta", colore: "#EC008C" },
  { nome: "Rosso", colore: "#C12E1F" },
  { nome: "Rosso Bordeaux", colore: "#9D2235" },
  { nome: "Viola", colore: "#5E43B7" },
  { nome: "Indaco Viola", colore: "#482960" },
  { nome: "Blu Cobalto", colore: "#0056B8" },
  { nome: "Blu", colore: "#0A2989" },
  { nome: "Ciano", colore: "#0086D6" },
  { nome: "Turchese", colore: "#00B1B7" },
  { nome: "Verde Brillante", colore: "#BECF00" },
  { nome: "Verde Bambu", colore: "#00AE42" },
  { nome: "Verde Vischio", colore: "#3F8E43" },
  { nome: "Marrone", colore: "#9D432C" },
  { nome: "Marrone Cacao", colore: "#6F5034" },
  { nome: "Grigio Chiaro", colore: "#D1D3D5" },
  { nome: "Grigio", colore: "#8E9089" },
  { nome: "Grigio Blu", colore: "#5B6579" },
  { nome: "Grigio Scuro", colore: "#545454" },
  { nome: "Argento", colore: "#A6A9AA" },
  { nome: "Nero", colore: "#000000" },
];

// ✅ Parole da rimuovere dal titolo (no Vasi)
const STOP_WORDS = [
  "lampada",
  "lampade",
  "quadro",
  "quadri",
  "orologio",
  "orologi",
  "portachiavi",
  "portachiave",
  "scritta",
  "scritte",
  "ferma capelli",
  "fermacapelli",
  "bomboniera",
  "bomboniere",
  "giocattolo",
  "giocattoli",
  "accessori",
  "arredo",
  "casa",
  "ufficio",
  "festività",
];

// ✅ Trova categoria e sottocategoria dato lo slug (lookup canonico)
function trovaCategoriaESottocategoriaDaSlug(slug) {
  for (const categoria in catalogoData) {
    const subs = catalogoData[categoria]?.sottocategorie || {};
    for (const sottocategoria in subs) {
      const prodotti = subs[sottocategoria];
      if (Array.isArray(prodotti) && prodotti.some((p) => p.slug === slug)) {
        return { categoria, sottocategoria };
      }
    }
  }
  return { categoria: null, sottocategoria: null };
}

// ✅ Pulizia nome prodotto (solo non-vasi)
function pulisciNome(nome) {
  let n = String(nome || "").toLowerCase();
  STOP_WORDS.forEach((w) => {
    n = n.replace(new RegExp(`\\b${w}\\b`, "gi"), "");
  });
  return n
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

// ✅ Ottieni il prodotto CANONICO da catalogoData per slug
function getProdottoCanonico(slug) {
  for (const categoria in catalogoData) {
    const subs = catalogoData[categoria]?.sottocategorie || {};
    for (const sottocategoria in subs) {
      const prodotti = subs[sottocategoria];
      if (!Array.isArray(prodotti)) continue;
      const match = prodotti.find((p) => p.slug === slug);
      if (match) return { prodotto: match, categoria, sottocategoria };
    }
  }
  return { prodotto: null, categoria: null, sottocategoria: null };
}

// ✅ FIX DEFINITIVO: deduzione affidabile anche se arrivi dalla Home
export default function ProdottoClient({ prodotto }) {
  // 🧩 Stati principali (devono stare all'inizio del componente)
  const [indice, setIndice] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [coloreSelezionato, setColoreSelezionato] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // 🧭 Rileva percorso corrente per dedurre categoria e sottocategoria
  const pathname = usePathname();
  const pathParts = pathname?.split("/").filter(Boolean) || [];

  const categoriaFromUrl = pathParts[1] || null;
  const sottocategoriaFromUrl = pathParts[2] || null;

  // 🔍 Trova dati canonici dal catalogo
  const lookup = trovaCategoriaESottocategoriaDaSlug(prodotto.slug);

  // 🧩 Determina categoria e sottocategoria correnti
  const categoriaCorrente =
    prodotto?.categoria || categoriaFromUrl || lookup.categoria || null;
  const sottocategoriaCorrente =
    prodotto?.sottocategoria ||
    sottocategoriaFromUrl ||
    lookup.sottocategoria ||
    null;

  // 🏷️ Flag logici per categorie principali
  const isVasi = categoriaCorrente === "vasi";
  const isArredoCasa = categoriaCorrente === "arredo-casa";
  const isArredoUfficio = categoriaCorrente === "arredo-ufficio";
  const isBomboniere = categoriaCorrente === "bomboniere";

  // ✨ Titolo pulito del prodotto
  const titoloPulito = isVasi ? prodotto.nome : pulisciNome(prodotto.nome);

  // ✅ Salva immagine principale in window per PagaAllaConsegna
  useEffect(() => {
    if (typeof window !== "undefined" && prodotto?.immagini?.[0]) {
      window.prodottoImmagine = prodotto.immagini[0];
    }
  }, [prodotto]);

  // (duplicato, come nel tuo file originale — NON rimosso)
  useEffect(() => {
    if (typeof window !== "undefined" && prodotto?.immagini?.[0]) {
      window.prodottoImmagine = prodotto.immagini[0];
    }
  }, [prodotto]);

  // (duplicato, come nel tuo file originale — NON rimosso)
  useEffect(() => {
    if (typeof window !== "undefined" && prodotto?.immagini?.[0]) {
      window.prodottoImmagine = prodotto.immagini[0];
    }
  }, [prodotto]);

  // ✅ Prodotto CANONICO (fonte unica per PREZZO)
  const canon = useMemo(
    () => getProdottoCanonico(prodotto.slug),
    [prodotto.slug]
  );
  const prodottoCanonico = canon.prodotto || {};
  const prezzoCanonico = prodottoCanonico?.prezzo
    ? formatEuro(prodottoCanonico.prezzo)
    : null;

  // ✅ Gestione Preferiti
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("veora_favorites") || "[]"
    );
    setIsFavorite(favorites.some((f) => f.nome === prodotto.nome));
  }, [prodotto.nome]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(
      localStorage.getItem("veora_favorites") || "[]"
    );
    const updated = isFavorite
      ? favorites.filter((f) => f.nome !== prodotto.nome)
      : [
          ...favorites,
          {
            nome: prodotto.nome,
            prezzo: prezzoCanonico,
            immagine: prodotto.immagini?.[0] || "",
            descrizione: prodotto.descrizione || "",
            categoria: categoriaCorrente || canon.categoria || null,
          },
        ];
    localStorage.setItem("veora_favorites", JSON.stringify(updated));
    setIsFavorite(!isFavorite);
  };

  // ✅ Slider immagini
  const handleScroll = (e) => {
    const newIndex = Math.round(e.target.scrollLeft / e.target.clientWidth);
    setIndice(newIndex);
  };

  // ✅ Router
  const router = useRouter();

  // ✅ URL della collezione corrente (fallback alla home)
  const collectionUrl = useMemo(() => {
    if (categoriaCorrente && sottocategoriaCorrente) {
      return `/catalogo/${categoriaCorrente}/${sottocategoriaCorrente}`;
    }
    return "/";
  }, [categoriaCorrente, sottocategoriaCorrente]);

  // ✅ Lightbox (apertura) — push stato "lightbox"
  const openLightbox = (i) => {
    setLightboxIndex(i || 0);
    setIsLightboxOpen(true);
    window.history.pushState({ veora: "lightbox" }, "", window.location.href);
  };

  // ✅ FIX UNIFICATO — gestione Back + stato "product" (Lightbox + Home → Collezione → Home)
  useEffect(() => {
    const handlePopState = (event) => {
      const state = event.state;

      // 1️⃣ Se la Lightbox è aperta → chiudi e rimani nella pagina prodotto
      if (isLightboxOpen) {
        setIsLightboxOpen(false);
        window.history.replaceState(
          { veora: "product", backTo: collectionUrl },
          "",
          window.location.href
        );
        return;
      }

      // 2️⃣ Se torni dallo stato Lightbox → chiudi e resta qui
      if (state?.veora === "lightbox") {
        setIsLightboxOpen(false);
        return;
      }

      // 3️⃣ Se lo stato è "product" con destinazione definita → torna lì
      if (state?.veora === "product" && state?.backTo) {
        router.replace(state.backTo);
        return;
      }

      // 4️⃣ Se la pagina è stata aperta dalla Home → ricostruisci la collezione
      if (
        collectionUrl === "/" &&
        categoriaCorrente &&
        sottocategoriaCorrente
      ) {
        const collezioneUrl = `/catalogo/${categoriaCorrente}/${sottocategoriaCorrente}`;
        router.replace(collezioneUrl);
        return;
      }

      // 5️⃣ Fallback finale → Home
      router.replace("/");
    };

    // 🔧 Definisci la destinazione di ritorno (collezione o home)
    let backTarget = collectionUrl;
    if (backTarget === "/" && categoriaCorrente && sottocategoriaCorrente) {
      backTarget = `/catalogo/${categoriaCorrente}/${sottocategoriaCorrente}`;
    }

    // 📌 Registra lo stato del prodotto
    window.history.replaceState(
      { veora: "product", backTo: backTarget },
      "",
      window.location.href
    );

    // 🎯 Quando si apre la Lightbox, aggiunge stato temporaneo
    const handleLightboxState = () => {
      if (isLightboxOpen) {
        window.history.pushState(
          { veora: "lightbox" },
          "",
          window.location.href
        );
      }
    };

    if (isLightboxOpen) handleLightboxState();

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [
    isLightboxOpen,
    collectionUrl,
    router,
    categoriaCorrente,
    sottocategoriaCorrente,
  ]);

  return (
    <div className="min-h-screen bg-[#f8f6f1] flex flex-col items-center pb-16 px-4">
      {/* Titolo + Cuore */}
      <div className="w-full flex flex-col items-center justify-center mt-6 mb-2 px-4 text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <h1
              className="text-2xl font-semibold text-[#c6a664] uppercase leading-tight tracking-wide"
              style={{ lineHeight: "1.1", transform: "translateX(10px)" }}
            >
              {titoloPulito}
            </h1>
            <button
              onClick={toggleFavorite}
              className="text-[#c6a664] hover:scale-110 transition-transform"
              style={{ transform: "translateY(1px) translateX(14px)" }}
              title={
                isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"
              }
              aria-label="Preferito"
            >
              <Heart
                size={26}
                fill={isFavorite ? "#c6a664" : "transparent"}
                strokeWidth={1.5}
              />
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Galleria Immagini */}
      <div
        className="w-full max-w-md flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide mb-6 rounded-xl"
        onScroll={handleScroll}
      >
        {prodotto.immagini.map((src, i) => (
          <div
            key={i}
            className="relative min-w-full h-96 snap-center flex-shrink-0 cursor-zoom-in"
            onClick={() => openLightbox(i)}
            title="Clicca per ingrandire"
          >
            <Image
              src={src}
              alt={`${prodotto.nome} ${i + 1}`}
              fill
              className="object-contain rounded-xl"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        ))}
      </div>

      {/* Indicatori */}
      <div className="flex justify-center mb-6 gap-2">
        {prodotto.immagini.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === indice ? "bg-[#c6a664]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* ✅ BOX ORO – Vasi → Spiralia / Armonia */}
      {categoriaCorrente === "vasi" &&
        ["spiralia", "armonia"].includes(
          (sottocategoriaCorrente || "").toLowerCase()
        ) &&
        prezzoCanonico && (
          <div
            className="mt-0 mb-4 border border-[#c6a664] rounded px-3 py-1 text-black font-semibold text-base inline-block"
            style={{ background: "linear-gradient(90deg, #d9b165, #e5c97b)" }}
          >
            Prezzo {prezzoCanonico}
          </div>
        )}

      {/* ✅ BOX ORO – Bomboniere → Vasi d’Autore */}
      {categoriaCorrente?.toLowerCase() === "bomboniere" &&
        (sottocategoriaCorrente || "").toLowerCase() === "vasi-d-autore" && (
          <div
            className="mt-0 mb-4 border border-[#c6a664] rounded px-3 py-1 text-[#111] font-semibold text-base inline-block shadow-sm"
            style={{ background: "#f6d8b1" }}
          >
            Prezzo {prezzoCanonico || "2,00 €"}
          </div>
        )}

      {/* ✅ BOX ORO GENERICO – Tutte le altre categorie */}
      {categoriaCorrente !== "vasi" &&
        categoriaCorrente?.toLowerCase() !== "bomboniere" &&
        prezzoCanonico && (
          <div
            className="mt-0 mb-4 border border-[#c6a664] rounded px-3 py-1 text-black font-semibold text-base inline-block"
            style={{ background: "linear-gradient(90deg, #d9b165, #e5c97b)" }}
          >
            Prezzo {prezzoCanonico}
          </div>
        )}

      {/* ✅ Descrizione */}
      <p className="max-w-md text-center text-gray-700 leading-relaxed mb-6">
        {prodotto.descrizione}
      </p>

      {/* ✅ ARREDO CASA → barra colori tranne (lampade, forme-creative, sculture-d-autore, sculture) */}
      {isArredoCasa &&
        ![
          "lampade",
          "forme-creative",
          "sculture-d-autore",
          "sculture",
        ].includes((sottocategoriaCorrente || "").toLowerCase()) && (
          <div className="bg-white rounded-xl shadow-md border border-[#e0e0e0] p-7 pt-8 max-w-md w-full mb-8 text-center overflow-visible">
            <h3 className="text-lg font-semibold text-[#c6a664] mb-6 relative inline-block">
              Colori disponibili
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-24 h-[2px] rounded-full bg-gradient-to-r from-[#b9935a] via-[#e5c97b] to-[#b9935a] animate-shimmerGold"></span>
            </h3>
            <div className="mt-4 flex overflow-x-auto overflow-y-visible scrollbar-hide gap-6 px-3 py-8 justify-start items-center">
              {COLORI_VEORA.map((c, index) => (
                <div
                  key={index}
                  className="relative group flex-shrink-0"
                  onClick={() => setColoreSelezionato(c.nome)}
                >
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 -top-8 text-white text-[12px] font-semibold py-1 px-3 rounded-lg pointer-events-none whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                      coloreSelezionato === c.nome ? "opacity-100" : ""
                    }`}
                    style={{
                      background:
                        "linear-gradient(120deg, #b9935a 0%, #e5c97b 50%, #b9935a 100%)",
                      backgroundSize: "200% 100%",
                      animation: "shimmerGold 3s infinite linear",
                      zIndex: 999,
                    }}
                  >
                    {c.nome}
                  </div>
                  <div
                    className={`w-9 h-9 rounded-full cursor-pointer transition-transform duration-300 group-hover:scale-110 shadow-md ${
                      coloreSelezionato === c.nome
                        ? "border-[4px] border-[#c6a664] shadow-lg shadow-[#e5c97b]/50"
                        : "border border-[#c6a664]"
                    }`}
                    style={{ backgroundColor: c.colore }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        )}

      {/* ✅ ARREDO UFFICIO → sempre barra colori */}
      {isArredoUfficio && (
        <div className="bg-white rounded-xl shadow-md border border-[#e0e0e0] p-7 pt-8 max-w-md w-full mb-8 text-center overflow-visible">
          <h3 className="text-lg font-semibold text-[#c6a664] mb-6 relative inline-block">
            Colori disponibili
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-24 h-[2px] rounded-full bg-gradient-to-r from-[#b9935a] via-[#e5c97b] to-[#b9935a] animate-shimmerGold"></span>
          </h3>
          <div className="mt-4 flex overflow-x-auto overflow-y-visible scrollbar-hide gap-6 px-3 py-8 justify-start items-center">
            {COLORI_VEORA.map((c, index) => (
              <div
                key={index}
                className="relative group flex-shrink-0"
                onClick={() => setColoreSelezionato(c.nome)}
              >
                <div
                  className={`absolute left-1/2 -translate-x-1/2 -top-8 text-white text-[12px] font-semibold py-1 px-3 rounded-lg pointer-events-none whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    coloreSelezionato === c.nome ? "opacity-100" : ""
                  }`}
                  style={{
                    background:
                      "linear-gradient(120deg, #b9935a 0%, #e5c97b 50%, #b9935a 100%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmerGold 3s infinite linear",
                    zIndex: 999,
                  }}
                >
                  {c.nome}
                </div>
                <div
                  className={`w-9 h-9 rounded-full cursor-pointer transition-transform duration-300 group-hover:scale-110 shadow-md ${
                    coloreSelezionato === c.nome
                      ? "border-[4px] border-[#c6a664] shadow-lg shadow-[#e5c97b]/50"
                      : "border border-[#c6a664]"
                  }`}
                  style={{ backgroundColor: c.colore }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ✅ BOMBONIERE – gestione Ricordi Preziosi e altre sottocategorie */}
      {isBomboniere && (
        <>
          {/* 💛 BOX PREZZO – solo per Ricordi Preziosi */}
          {(sottocategoriaCorrente || "").toLowerCase() ===
            "ricordi-preziosi" &&
            prezzoCanonico && (
              <div
                className="mt-0 mb-6 border border-[#c6a664] rounded px-3 py-1 text:black font-semibold text-base inline-block"
                style={{
                  background: "linear-gradient(90deg, #d9b165, #e5c97b)",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                Prezzo {prezzoCanonico}
              </div>
            )}

          {/* 🎨 BARRA COLORI – tutte le bomboniere tranne Ricordi Preziosi */}
          {(sottocategoriaCorrente || "").toLowerCase() !==
            "ricordi-preziosi" && (
            <div className="bg:white rounded-xl shadow-md border border-[#e0e0e0] p-7 pt-8 max-w-md w-full mb-8 text-center overflow-visible">
              <h3 className="text-lg font-semibold text-[#c6a664] mb-6 relative inline-block">
                Colori disponibili
                <span className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-24 h-[2px] rounded-full bg-gradient-to-r from-[#b9935a] via-[#e5c97b] to-[#b9935a] animate-shimmerGold"></span>
              </h3>
              <div className="mt-4 flex overflow-x-auto overflow-y-visible scrollbar-hide gap-6 px-3 py-8 justify-start items-center">
                {COLORI_VEORA.map((c, index) => (
                  <div
                    key={index}
                    className="relative group flex-shrink-0"
                    onClick={() => setColoreSelezionato(c.nome)}
                  >
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 -top-8 text-white text-[12px] font-semibold py-1 px-3 rounded-lg pointer-events-none whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                        coloreSelezionato === c.nome ? "opacity-100" : ""
                      }`}
                      style={{
                        background:
                          "linear-gradient(120deg, #b9935a 0%, #e5c97b 50%, #b9935a 100%)",
                        backgroundSize: "200% 100%",
                        animation: "shimmerGold 3s infinite linear",
                        zIndex: 999,
                      }}
                    >
                      {c.nome}
                    </div>
                    <div
                      className={`w-9 h-9 rounded-full cursor-pointer transition-transform duration-300 group-hover:scale-110 shadow-md ${
                        coloreSelezionato === c.nome
                          ? "border-[4px] border-[#c6a664] shadow-lg shadow-[#e5c97b]/50"
                          : "border border-[#c6a664]"
                      }`}
                      style={{ backgroundColor: c.colore }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* ✅ VASI → barra colori + tabelle (versione corretta per ATELIER) */}
      {isVasi && (
        <>
          <div className="bg:white rounded-xl shadow-md border border-[#e0e0e0] p-7 pt-8 max-w-md w-full mb-8 text-center overflow-visible">
            <h3 className="text-lg font-semibold text-[#c6a664] mb-6 relative inline-block">
              Colori disponibili
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-24 h-[2px] rounded-full bg-gradient-to-r from-[#b9935a] via-[#e5c97b] to-[#b9935a] animate-shimmerGold"></span>
            </h3>
            <div className="mt-4 flex overflow-x-auto overflow-y-visible scrollbar-hide gap-6 px-3 py-8 justify-start items-center">
              {COLORI_VEORA.map((c, index) => (
                <div
                  key={index}
                  className="relative group flex-shrink-0"
                  onClick={() => setColoreSelezionato(c.nome)}
                >
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 -top-8 text-white text-[12px] font-semibold py-1 px-3 rounded-lg pointer-events-none whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                      coloreSelezionato === c.nome ? "opacity-100" : ""
                    }`}
                    style={{
                      background:
                        "linear-gradient(120deg, #b9935a 0%, #e5c97b 50%, #b9935a 100%)",
                      backgroundSize: "200% 100%",
                      animation: "shimmerGold 3s infinite linear",
                      zIndex: 999,
                    }}
                  >
                    {c.nome}
                  </div>
                  <div
                    className={`w-9 h-9 rounded-full cursor-pointer transition-transform duration-300 group-hover:scale-110 shadow-md ${
                      coloreSelezionato === c.nome
                        ? "border-[4px] border-[#c6a664] shadow-lg shadow-[#e5c97b]/50"
                        : "border border-[#c6a664]"
                    }`}
                    style={{ backgroundColor: c.colore }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ SPIRALIA / ARMONIA → tabella ALP */}
          {["spiralia", "armonia"].includes(
            (sottocategoriaCorrente || "").toLowerCase()
          ) ? (
            <div className="bg:white shadow-md rounded-xl p-5 max-w-md w-full mb-6 border border-[#e0e0e0]">
              <h3 className="text-lg font-semibold text-[#c6a664] text-center mb-3">
                DIMENSIONI
              </h3>
              <table className="w-full text-sm text-gray-700 border-collapse text-center">
                <thead>
                  <tr className="border-b border-gray-200 font-semibold text-[#c6a664]">
                    <th className="py-2">A</th>
                    <th className="py-2">L</th>
                    <th className="py-2">P</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">{prodotto.altezza || "--"}</td>
                    <td className="py-2">{prodotto.larghezza || "--"}</td>
                    <td className="py-2">{prodotto.profondita || "--"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            // ✅ Altri vasi → tabella dinamica per Atelier o statica per gli altri
            <div className="bg:white shadow-md rounded-xl p-5 max-w-md w-full mb-6 border border-[#e0e0e0]">
              <h3 className="text-lg font-semibold text-[#c6a664] text-center mb-3">
                Dimensioni e Prezzi
              </h3>
              <table className="w-full text-sm text-gray-700 border-collapse">
                <tbody>
                  {sottocategoriaCorrente === "atelier" ? (
                    // ✅ ATELIER → valori da catalogoData.dimensioni (es. 80 / 100 / 120)
                    (prodotto.dimensioni || []).map((item, index) => (
                      <tr
                        key={index}
                        className={
                          index < (prodotto.dimensioni || []).length - 1
                            ? "border-b border-gray-200"
                            : ""
                        }
                      >
                        <td className="py-2">
                          Vaso {item.misura.replace(/x/gi, "×")}
                        </td>
                        <td className="py-2 text-right">{item.prezzo}</td>
                      </tr>
                    ))
                  ) : (
                    <>
                      <tr className="border-b border-gray-200">
                        <td className="py-2">Vaso 60 × 60 × 60</td>
                        <td className="py-2 text-right">2,00 €</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2">Vaso 80 × 80 × 80</td>
                        <td className="py-2 text-right">4,00 €</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2">Vaso 100 × 100 × 100</td>
                        <td className="py-2 text-right">6,00 €</td>
                      </tr>
                      <tr>
                        <td className="py-2">Vaso 120 × 120 × 120</td>
                        <td className="py-2 text-right">8,00 €</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
              <p className="text-center text-sm text-gray-600 mt-3">
                Vaso personalizzabile per <b>dimensione</b> e <b>colore</b>.
                <br />
                <span className="text-[#c6a664] font-semibold">
                  Prezzo su richiesta!
                </span>
              </p>
            </div>
          )}
        </>
      )}

      {/* ✅ RICORDI PREZIOSI → tabella stile lampade */}
      {(sottocategoriaCorrente || "").toLowerCase() === "ricordi-preziosi" && (
        <div className="bg:white shadow-md rounded-xl p-5 max-w-md w-full mb-6 border border-[#e0e0e0]">
          <h3 className="text-lg font-semibold text-[#c6a664] text-center mb-3">
            DIMENSIONI
          </h3>
          <table className="w-full text-sm text-gray-700 border-collapse text-center">
            <thead>
              <tr className="border-b border-gray-200 font-semibold text-[#c6a664]">
                <th className="py-2">A</th>
                <th className="py-2">L</th>
                <th className="py-2">P</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">{prodotto.altezza || "--"}</td>
                <td className="py-2">{prodotto.larghezza || "--"}</td>
                <td className="py-2">{prodotto.profondita || "--"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* ✅ Tabella dimensioni generica (tutte tranne Vasi e Ricordi Preziosi) */}
      {!isVasi &&
        (sottocategoriaCorrente || "").toLowerCase() !== "ricordi-preziosi" && (
          <div className="bg:white shadow-md rounded-xl p-5 max-w-md w-full mb-6 border border-[#e0e0e0]">
            <h3 className="text-lg font-semibold text-[#c6a664] text-center mb-3">
              DIMENSIONI
            </h3>
            <table className="w-full text-sm text-gray-700 border-collapse text-center">
              <thead>
                <tr className="border-b border-gray-200 font-semibold text-[#c6a664]">
                  <th className="py-2">A</th>
                  <th className="py-2">L</th>
                  <th className="py-2">P</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">{prodotto.altezza || "--"}</td>
                  <td className="py-2">{prodotto.larghezza || "--"}</td>
                  <td className="py-2">{prodotto.profondita || "--"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

      {/* 🛒 Bottone Acquista e paga alla consegna */}
      <PagaAllaConsegna
        nome={titoloPulito}
        prezzo={prezzoCanonico}
        immagine={prodotto.immagini?.[0]}
      />

      {/* ✅ WhatsApp – con numero reale e messaggio automatico */}
      <a
        href={`https://wa.me/393481081601?text=${encodeURIComponent(
          `Ciao! Vorrei avere maggiori informazioni sul prodotto "${titoloPulito}" di VEORA.`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#c6a664] text-white font-semibold py-3 px-8 rounded-full shadow hover:bg-[#b8944e] transition"
      >
        Contatta su WhatsApp
      </a>

      {/* ✅ LIGHTBOX (popup zoom) */}
      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        index={lightboxIndex}
        slides={(prodotto.immagini || []).map((src) => ({ src }))}
        plugins={[Zoom]}
      />
    </div>
  );
}
