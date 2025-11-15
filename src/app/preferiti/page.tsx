"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FavoriteItem = {
  nome: string;
  prezzo: string;
  immagine: string;
  descrizione?: string;
  categoria: string;
};

const STORAGE_KEY = "veora_favorites";
const norm = (s?: string) => (s ?? "").trim().toLowerCase();

export default function PreferitiPage() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  // ✅ Carica i preferiti
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      setFavorites(Array.isArray(stored) ? stored : []);
    } catch {
      setFavorites([]);
    }
  }, []);

  // ✅ Salva preferiti
  const persist = (arr: FavoriteItem[]) => {
    setFavorites(arr);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  };

  // ✅ Rimuove un preferito + mostra notifica
  const removeFavorite = (nome: string, index: number) => {
    const byIndex = favorites.filter((_, i) => i !== index);
    if (byIndex.length !== favorites.length) {
      persist(byIndex);
    } else {
      const target = norm(nome);
      const byName = favorites.filter((f) => norm(f.nome) !== target);
      persist(byName);
    }

    // Mostra toast per 1.8s
    setToast("💔 Rimosso dai preferiti");
    setTimeout(() => setToast(null), 1800);
  };

  return (
    <section className="min-h-screen bg-[#f6efe7] px-6 pt-24 pb-16 flex flex-col items-center relative overflow-hidden">
      {/* 🌟 Toast stabile e centrato in alto */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-1/2 -translate-x-1/2 bg-[#bfa76f] text-white px-6 py-2 rounded-full shadow-lg text-sm font-medium z-50 whitespace-nowrap"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔹 Titolo pagina */}
      <h1 className="text-4xl md:text-5xl font-serif text-[#bfa76f] text-center mb-10 tracking-wide">
        I tuoi Preferiti
      </h1>

      {/* 🔹 Nessun preferito */}
      {favorites.length === 0 ? (
        <p className="text-center text-gray-700 text-lg">
          Non hai ancora aggiunto prodotti ai preferiti 💛
        </p>
      ) : (
        /* 🔹 Lista preferiti */
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
          <AnimatePresence>
            {favorites.map((item, index) => (
              <motion.div
                key={`${item.categoria}-${item.nome}-${index}`}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-xl shadow-md p-4 relative transition hover:shadow-lg"
              >
                {/* 🗑️ Pulsante elimina */}
                <button
                  type="button"
                  onClick={() => removeFavorite(item.nome, index)}
                  className="absolute -top-3 -right-3 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:bg-[#ffecec] active:scale-95 transition-all border border-[#e6d6d6] cursor-pointer select-none"
                  title="Rimuovi dai preferiti"
                  style={{
                    touchAction: "manipulation",
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  <Trash2
                    size={26}
                    strokeWidth={2.4}
                    className="text-[#b52e2e] pointer-events-none"
                  />
                </button>

                {/* 🖼️ Immagine prodotto */}
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={item.immagine}
                    alt={item.nome}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>

                {/* 🏷️ Nome e prezzo */}
                <h3 className="text-lg font-semibold text-center text-[#1a1a1a]">
                  {item.nome}
                </h3>
                <p className="text-[#bfa76f] font-semibold text-center">
                  {item.prezzo}
                </p>

                {/* 🔗 Vai al prodotto */}
                <Link
                  href={`/catalogo/${item.categoria}/${norm(item.nome).replace(
                    /\s+/g,
                    "-"
                  )}`}
                  className="block mt-4 text-center bg-[#c6a664] text-white py-2 rounded-lg hover:bg-[#b8944e] transition"
                >
                  Vai al prodotto
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
}
