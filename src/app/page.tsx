"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import catalogoData from "@/app/catalogo/catalogoData";

type ProdottoBase = {
  categoria: string;
  sottocategoria: string;
  nome: string;
  slug: string;
  immagini?: string[];
  prezzo?: string | null;
  prezzoMinimo?: boolean;
  isVaso?: boolean;
};

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [hydrated, setHydrated] = useState(false);

  const [tuttiProdotti, setTuttiProdotti] = useState<ProdottoBase[]>([]);
  const [vetrina, setVetrina] = useState<ProdottoBase[]>([]);

  // -----------------------
  // Utils normalizzazione
  // -----------------------
  const norm = (s?: string) =>
    (s ?? "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/['’]/g, ""); // rimuovo apostrofi per gestire d'autore/d autore

  // Varianti singolare/plurale basilari + dizionario
  const expandVariants = (raw: string) => {
    const q = norm(raw.trim());
    if (!q) return [];

    const variants = new Set<string>([q]);

    // dizionario esplicito (bidirezionale)
    const dictPairs: Array<[string, string]> = [
      ["vaso", "vasi"],
      ["bomboniera", "bomboniere"],
      ["lampada", "lampade"],
      ["quadro", "quadri"],
      ["orologio", "orologi"],
      ["scritta", "scritte"],
      ["portachiave", "portachiavi"],
      ["scultura", "sculture"],
      ["forma", "forme"],
      ["vaso d autore", "vasi d autore"], // gestiamo anche senza apostrofo
    ];
    dictPairs.forEach(([sing, plur]) => {
      if (q === sing) variants.add(plur);
      if (q === plur) variants.add(sing);
    });

    // regole semplici italiane (maschile/femminile standard)
    if (q.endsWith("i")) variants.add(q.slice(0, -1) + "o"); // vasi -> vaso
    if (q.endsWith("o")) variants.add(q.slice(0, -1) + "i"); // vaso -> vasi
    if (q.endsWith("e")) variants.add(q.slice(0, -1) + "a"); // bomboniere -> bomboniera
    if (q.endsWith("a")) variants.add(q.slice(0, -1) + "e"); // lampada -> lampade

    return Array.from(variants);
  };

  useEffect(() => {
    setHydrated(true);

    const all: any[] = [];
    const catalogo = catalogoData as Record<string, any>;

    Object.entries(catalogo).forEach(([categoria, items]) => {
      if (items && typeof items === "object" && "sottocategorie" in items) {
        Object.entries(items.sottocategorie).forEach(([subCat, prodotti]) => {
          if (Array.isArray(prodotti)) {
            prodotti.forEach((p: any) => {
              all.push({ ...p, categoria, sottocategoria: subCat });
            });
          }
        });
      }
    });

    const processed: ProdottoBase[] = all.map((p: any) => {
      const isVaso = p.categoria?.toLowerCase() === "vasi";

      let prezzoEffettivo = p.dimensioni?.prezzo || p.prezzo || null;
      let prezzoMinimo = false;

      if (isVaso && Array.isArray(p.dimensioni) && p.dimensioni.length > 0) {
        const primoPrezzo = parseFloat(
          String(p.dimensioni[0].prezzo)
            .replace(/[^\d.,]/g, "")
            .replace(",", ".")
        );
        if (!isNaN(primoPrezzo)) {
          prezzoEffettivo = primoPrezzo.toFixed(2).replace(".", ",") + " €";
          prezzoMinimo = true;
        }
      } else if (prezzoEffettivo != null) {
        const numeroPrezzo = parseFloat(
          String(prezzoEffettivo).replace(",", ".")
        );
        if (!isNaN(numeroPrezzo)) {
          prezzoEffettivo = numeroPrezzo.toFixed(2).replace(".", ",") + " €";
        }
      }

      return {
        categoria: p.categoria,
        sottocategoria: p.sottocategoria,
        nome: p.nome,
        slug: p.slug,
        immagini: p.immagini,
        prezzo: prezzoEffettivo,
        prezzoMinimo,
        isVaso,
      };
    });

    setTuttiProdotti(processed);
    const shuffled = [...processed].sort(() => Math.random() - 0.5);
    setVetrina(shuffled.slice(0, 12));
  }, []);

  if (!hydrated) return null;

  const qRaw = query;
  const q = norm(qRaw);
  const variants = expandVariants(qRaw);

  const source = q ? tuttiProdotti : vetrina;

  // Campo di ricerca: cerco nelle stringhe accorpate + nelle varianti
  const prodottiVisibili = q
    ? tuttiProdotti.filter((p) => {
        const haystack = norm(
          `${p.nome} ${p.categoria} ${p.sottocategoria} ${p.slug}`
        );
        return variants.some((v) => haystack.includes(norm(v)));
      })
    : source;

  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#111] flex flex-col items-center">
      {/* 🔍 BARRA DI RICERCA */}
      <div className="w-full max-w-md px-4 mt-5 mb-3 relative flex items-center">
        <Search
          size={20}
          className="absolute left-6 text-[#b9935a]"
          strokeWidth={2}
        />
        <input
          type="text"
          placeholder="Cerca per nome (es. SoftCube) o per categoria (vaso/vasi, lampada/lampade)…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-full border border-[#b9935a] bg-white text-[#333] placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e5c97b] transition-all duration-200"
        />
      </div>

      {/* ✨ TITOLO PRINCIPALE */}
      <section className="w-full max-w-6xl mx-auto text-center mt-8 mb-10 px-4">
        <h1
          className={`italic font-[Cormorant_Garamond] font-semibold
                      bg-gradient-to-r from-[#b9935a] via-[#e5c97b] to-[#b9935a]
                      bg-[length:300%_100%] text-transparent bg-clip-text
                      animate-[fadeInUp_1.2s_ease-out_forwards,shimmer_8s_infinite_linear]
                      tracking-wide leading-tight`}
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
            lineHeight: "1.1",
            whiteSpace: "normal",
            overflowWrap: "break-word",
          }}
        >
          Le nostre produzioni
        </h1>
      </section>

      {/* 🛍️ GRID PRODOTTI */}
      <section className="px-4 pb-14 w-full">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {prodottiVisibili.map((p, i) => (
            <Link
              key={`${p.slug}-${i}`}
              href={`/catalogo/${p.categoria}/${p.sottocategoria}/${p.slug}`}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition block overflow-hidden flex flex-col justify-start"
            >
              {/* 🖼️ Immagine quadrata */}
              <div className="relative w-[92%] mx-auto aspect-square mt-2 rounded-xl overflow-hidden flex items-center justify-center bg-white">
                <Image
                  src={p.immagini?.[0] || "/images/logo-veora.jpg"}
                  alt={p.nome}
                  fill
                  className="object-contain"
                  sizes="(max-width:768px)45vw,25vw"
                  priority={i < 8}
                />
              </div>

              {/* 📄 Titolo + Prezzo */}
              <div className="p-3 text-center">
                <h3
                  className={`text-[15px] font-semibold mb-1 truncate
                              bg-gradient-to-r from-[#b9935a] via-[#e5c97b] to-[#b9935a]
                              bg-clip-text text-transparent`}
                  style={{
                    lineHeight: "1.2",
                    height: "22px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  {p.nome}
                </h3>

                {p.sottocategoria === "vasi-d-autore" ? (
                  <p className="inline-block px-2 py-1 text-[#111] font-bold text-[14px] border border-[#b9935a] rounded-md bg-[#f6d8b1] shadow-sm whitespace-nowrap">
                    Bomboniera {p.prezzo}
                  </p>
                ) : p.isVaso ? (
                  ["armonia", "spiralia"].includes(
                    (p.sottocategoria || "")
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                  ) ? (
                    <p className="inline-block px-2 py-1 text-[#111] font-bold text-[14px] border border-[#b9935a] rounded-md bg-[#fff7ea] whitespace-nowrap">
                      Prezzo {p.prezzo}
                    </p>
                  ) : (
                    <p className="inline-block px-2 py-1 text-[#111] font-bold text-[14px] border border-[#b9935a] rounded-md bg-[#fff7ea] whitespace-nowrap">
                      a partire da {p.prezzo}
                    </p>
                  )
                ) : p.prezzo ? (
                  <p className="inline-block px-2 py-1 text-[#111] font-bold text-[14px] border border-[#b9935a] rounded-md bg-[#fff7ea] whitespace-nowrap">
                    Prezzo {p.prezzo}
                  </p>
                ) : (
                  <p className="inline-block px-2 py-1 text-[#111] font-bold text-[14px] opacity-70 border border-[#b9935a] rounded-md bg-[#fff7ea] whitespace-nowrap">
                    Prezzo su richiesta
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {q && prodottiVisibili.length === 0 && (
          <div className="text-center text-sm text-[#6b6b6b] mt-6">
            Nessun risultato per “{query}”.
          </div>
        )}
      </section>

      {/* ✨ ANIMAZIONI GLOBALI */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 300% center;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
