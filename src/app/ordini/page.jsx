"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { useRouter } from "next/navigation";
import CATALOG from "@/app/catalogo/catalogoData";

export default function IMieiOrdiniPage() {
  const [user, loadingUser] = useAuthState(auth);
  const [ordini, setOrdini] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // 🔍 Cerca prodotto nel catalogo (VERSIONE CORRETTA)
  const getProductFromCatalog = (nomeProdotto) => {
    if (!nomeProdotto) return null;
    const normalized = nomeProdotto.trim().toLowerCase();

    for (const categoriaKey in CATALOG) {
      const categoria = CATALOG[categoriaKey];
      if (!categoria?.sottocategorie) continue;

      for (const sottoKey in categoria.sottocategorie) {
        const lista = categoria.sottocategorie[sottoKey];
        if (!Array.isArray(lista)) continue;

        for (const item of lista) {
          const nomeCat = item.nome.trim().toLowerCase();

          // 🔥 Match intelligente: perfetto, parziale, ordine invertito
          if (
            nomeCat === normalized ||
            nomeCat.includes(normalized) ||
            normalized.includes(nomeCat)
          ) {
            return {
              img: item.immagini?.[0] || "/images/logo-veora.jpg",
              categoria: categoriaKey,
              sottocategoria: sottoKey,
              slug: item.slug,
            };
          }
        }
      }
    }
    return null;
  };

  // 📦 Carica ordini utente
  useEffect(() => {
    const fetchOrdini = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const q = query(
          collection(db, "ordini"),
          where("uid", "==", user.uid),
          orderBy("data", "desc")
        );

        const snap = await getDocs(q);

        const risultati = snap.docs.map((docSnap) => {
          const data = docSnap.data() || {};
          const prodotto = data.prodotto || {};

          const nomeProdotto = prodotto.nome || data.nomeProdotto || "Prodotto";

          let categoria = prodotto.categoria || null;
          let sottocategoria = prodotto.sottocategoria || null;
          let slug = prodotto.slug || null;
          let img =
            prodotto.immagine || data.immagine || "/images/logo-veora.jpg";

          // Fallback al catalogo (ATELIER, FERMA CAPELLI, ECC.)
          if (!categoria || !sottocategoria || !slug) {
            const info = getProductFromCatalog(nomeProdotto);

            if (info) {
              categoria = categoria || info.categoria;
              sottocategoria = sottocategoria || info.sottocategoria;
              slug = slug || info.slug;

              if (!prodotto.immagine && !data.immagine) {
                img = info.img;
              }
            }
          }

          return {
            id: docSnap.id,
            nomeProdotto,
            img,
            categoria,
            sottocategoria,
            slug,
            prezzo: data.prezzo || "—",
            stato: data.stato || "in_attesa",
            dataOrdine: data.data || null,
          };
        });

        setOrdini(risultati);
      } catch (err) {
        console.error("Errore caricamento ordini:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrdini();
  }, [user]);

  // 🔗 Apri pagina prodotto
  const handleClickOrdine = (ordine) => {
    if (ordine.categoria && ordine.sottocategoria && ordine.slug) {
      router.push(
        `/catalogo/${ordine.categoria}/${ordine.sottocategoria}/${ordine.slug}`
      );
      return;
    }

    const info = getProductFromCatalog(ordine.nomeProdotto);
    if (info) {
      router.push(
        `/catalogo/${info.categoria}/${info.sottocategoria}/${info.slug}`
      );
      return;
    }

    console.warn("Impossibile aprire pagina prodotto:", ordine);
  };

  // ⛔ Non loggato
  if (!loadingUser && !user) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#F6EFE7] text-[#222] px-6 text-center">
        <h1 className="text-3xl font-serif text-[#b48a02] mb-4">
          I miei ordini
        </h1>
        <p className="text-gray-700 mb-6">
          Effettua l’accesso per visualizzare i tuoi ordini 🌿
        </p>
        <button
          onClick={() => router.push("/login")}
          className="px-6 py-2 bg-[#b48a02] text-black font-semibold rounded-md hover:bg-[#a07e02] transition"
        >
          Accedi o Registrati
        </button>
      </section>
    );
  }

  // ⏳ Caricamento
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6EFE7]">
        <p className="text-[#b48a02] text-lg">Caricamento ordini...</p>
      </div>
    );
  }

  // 📭 Nessun ordine
  if (ordini.length === 0) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#F6EFE7] text-[#222] px-6 text-center">
        <h1 className="text-3xl font-serif text-[#b48a02] mb-4">
          I miei ordini
        </h1>
        <p className="text-gray-700 mb-6">
          Non hai ancora effettuato alcun ordine 💛
        </p>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 bg-[#d4af37] text-black font-semibold rounded-md hover:bg-[#b48a02] transition"
        >
          Torna al catalogo
        </button>
      </section>
    );
  }

  // 🎁 Lista ordini
  return (
    <section className="min-h-screen bg-[#F6EFE7] text-[#222] px-6 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-serif text-[#b48a02] mb-10 text-center">
        I miei ordini
      </h1>

      <div className="w-full max-w-3xl space-y-6">
        {ordini.map((ordine) => (
          <div
            key={ordine.id}
            onClick={() => handleClickOrdine(ordine)}
            className="bg-white rounded-2xl shadow-md border border-[#e5dcc3] p-4 cursor-pointer transition hover:shadow-lg"
          >
            <div className="w-full aspect-square rounded-xl overflow-hidden shadow mx-auto mb-4">
              <img
                src={ordine.img}
                alt={ordine.nomeProdotto}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-2xl text-center font-semibold text-[#0b1a2b] mb-2">
              {ordine.nomeProdotto}
            </h2>

            <p className="text-gray-700 text-center">
              <span className="font-semibold">Prezzo:</span> {ordine.prezzo}
            </p>

            <p className="text-gray-700 text-center">
              <span className="font-semibold">Stato:</span>{" "}
              <span className="text-[#b48a02]">
                {ordine.stato.replace("_", " ")}
              </span>
            </p>

            <p className="text-gray-600 text-sm mt-3 text-center">
              <span className="font-semibold">Ordinato:</span>{" "}
              {ordine.dataOrdine?.toDate
                ? ordine.dataOrdine.toDate().toLocaleString("it-IT")
                : "Data non disponibile"}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={() => router.push("/account")}
        className="mt-10 text-sm text-[#b48a02] underline hover:text-[#8f7002]"
      >
        ⬅️ Torna al profilo
      </button>
    </section>
  );
}
