"use client";

import Link from "next/link";
import Image from "next/image";
import catalogoData from "@/app/catalogo/catalogoData";

type Prodotto = {
  nome: string;
  slug: string;
  immagini?: string[];
  prezzo?: string;
};

export default function SottocategoriaClient({
  sottocategoria,
}: {
  sottocategoria: string;
}) {
  const normalized = decodeURIComponent(sottocategoria)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  const prodotti: Prodotto[] =
    (catalogoData["giocattoli"]?.sottocategorie as Record<string, Prodotto[]>)[
      normalized
    ] || [];

  const titolo = decodeURIComponent(sottocategoria)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  if (!prodotti.length) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center bg-[#f8f6f1] px-6">
        <div>
          <h1 className="text-2xl font-bold text-[#c6a664] mb-3 uppercase">
            Sottocategoria non trovata
          </h1>
          <Link
            href="/catalogo/giocattoli"
            className="text-[#c6a664] font-semibold underline"
          >
            Torna ai Giocattoli
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f6f1] pb-20 px-4 flex flex-col items-center">
      {/* ✨ Titolo oro animato con fade-in + shimmer */}
      <h1
        className={`italic font-[Cormorant_Garamond] font-semibold
                    bg-gradient-to-r from-[#b9935a] via-[#e5c97b] to-[#b9935a]
                    bg-[length:300%_100%] text-transparent bg-clip-text
                    animate-[fadeInUp_1.2s_ease-out_forwards,shimmer_8s_infinite_linear]
                    tracking-wide leading-tight text-center mt-8 mb-10`}
        style={{
          fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
          lineHeight: "1.1",
          whiteSpace: "normal",
          overflowWrap: "break-word",
          maxWidth: "92vw",
          paddingRight: "6px",
        }}
      >
        Collezione {titolo}
      </h1>

      {/* 🔹 Grid prodotti con box prezzo identico alla Home */}
      <section className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4">
        {prodotti.map((p, i) => (
          <Link
            key={i}
            href={`/catalogo/giocattoli/${sottocategoria}/${p.slug}`}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition block overflow-hidden"
          >
            <div className="relative w-[92%] mx-auto aspect-square mt-2 rounded-xl overflow-hidden flex items-center justify-center bg-white">
              <Image
                src={p.immagini?.[0] || "/images/logo-veora.jpg"}
                alt={p.nome}
                fill
                className="object-contain"
                sizes="(max-width:768px)45vw,25vw"
                priority={i < 4}
              />
            </div>

            <div className="p-3 text-center">
              <h3
                className={`text-[15px] font-semibold leading-snug mb-2
                            bg-gradient-to-r from-[#b9935a] via-[#e5c97b] to-[#b9935a]
                            bg-clip-text text-transparent`}
              >
                {p.nome}
              </h3>

              {/* ✅ BOX PREZZO IDENTICO ALLA HOME */}
              {p.prezzo ? (
                <div
                  className="inline-block mt-1 mb-2 border border-[#c6a664] rounded-lg px-3 py-1 text-black font-semibold text-[14px] bg-[#fff8e7] shadow-sm"
                  style={{ minWidth: "fit-content" }}
                >
                  Prezzo {p.prezzo}
                </div>
              ) : (
                <div
                  className="inline-block mt-1 mb-2 border border-[#c6a664] rounded-lg px-3 py-1 text-[#555] font-semibold text-[14px] bg-[#fff8e7] opacity-80"
                  style={{ minWidth: "fit-content" }}
                >
                  Prezzo su richiesta
                </div>
              )}
            </div>
          </Link>
        ))}
      </section>

      {/* ✅ Animazioni globali */}
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
