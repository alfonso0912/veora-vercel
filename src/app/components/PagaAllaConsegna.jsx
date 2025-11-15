"use client";

import { useState, useEffect } from "react";
import { auth, db } from "@/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  doc,
  getDoc,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

export default function PagaAllaConsegna({ nome, prezzo, immagine }) {
  const [user, loadingUser] = useAuthState(auth);
  const [dati, setDati] = useState(null);
  const [loadingOrdine, setLoadingOrdine] = useState(false);

  // 🔹 Recupera dati profilo utente
  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) setDati(snap.data());
    };
    fetchData();
  }, [user]);

  // 🔥 FIX — scegli l’immagine corretta
  const immagineFinale =
    immagine ||
    (typeof window !== "undefined" ? window.prodottoImmagine : null) ||
    "/images/logo-veora.jpg";

  // 🔥 Salva l’ordine in Firebase
  const mandaOrdine = async () => {
    if (loadingUser) return mostraPopup("Attendere, login in corso...", "info");
    if (!user)
      return mostraPopup("Devi accedere per completare l’ordine.", "error");
    if (!dati?.indirizzo || !dati?.telefono)
      return mostraPopup(
        "Completa prima il profilo (indirizzo + telefono).",
        "error"
      );

    try {
      setLoadingOrdine(true);

      await addDoc(collection(db, "ordini"), {
        uid: user.uid,
        nomeProdotto: nome,
        prezzo,
        immagine: immagineFinale, // 🔥 FIX DEFINITIVO
        cliente: dati,
        data: serverTimestamp(),
        stato: "in_attesa",
      });

      mostraPopup("Il tuo ordine è stato registrato con successo!", "success");
    } catch (err) {
      mostraPopup("Errore durante il salvataggio, riprova.", "error");
    } finally {
      setLoadingOrdine(false);
    }
  };

  // 🔥 Popup VEORA raffinato
  const mostraPopup = (msg, tipo = "info") => {
    const overlay = document.createElement("div");
    overlay.className =
      "fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]";
    overlay.style.backdropFilter = "blur(2px)";

    const box = document.createElement("div");
    box.className =
      "bg-[#f6efe7] p-8 rounded-3xl border border-[#c6a664] shadow-2xl text-center animate-fadeIn";
    box.style.maxWidth = "380px";

    const icona = document.createElement("div");
    icona.className =
      tipo === "success"
        ? "text-5xl text-green-600 mb-4"
        : tipo === "error"
        ? "text-5xl text-red-600 mb-4"
        : "text-5xl text-yellow-500 mb-4";
    icona.textContent =
      tipo === "success" ? "✔️" : tipo === "error" ? "❌" : "⚠️";

    const t = document.createElement("h2");
    t.className = "text-2xl text-[#b48a02] font-semibold mb-3";
    t.textContent =
      tipo === "success"
        ? "Ordine inviato!"
        : tipo === "error"
        ? "Errore!"
        : "Attenzione";

    const p = document.createElement("p");
    p.className = "text-gray-700 mb-6";
    p.textContent = msg;

    const btn = document.createElement("button");
    btn.className =
      "bg-[#d4af37] hover:bg-[#b48a02] text-black font-semibold py-2 px-6 rounded-full shadow-md transition";
    btn.textContent = "Chiudi";
    btn.onclick = () => overlay.remove();

    box.appendChild(icona);
    box.appendChild(t);
    box.appendChild(p);
    box.appendChild(btn);
    overlay.appendChild(box);

    document.body.appendChild(overlay);

    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.8); }
        to { opacity: 1; transform: scale(1); }
      }
      .animate-fadeIn {
        animation: fadeIn 0.3s ease forwards;
      }
    `;
    document.head.appendChild(style);
  };

  return (
    <div className="flex flex-col items-center mt-10 mb-6">
      <button
        onClick={mandaOrdine}
        disabled={loadingOrdine}
        className={`flex items-center justify-center gap-3 w-[310px] py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 shadow-lg
          ${
            loadingOrdine
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-[#0b1a2b] to-[#1b3355] text-white hover:brightness-110 hover:shadow-xl active:scale-95"
          }`}
        style={{
          border: "1px solid #c6a664",
          boxShadow: "0 5px 12px rgba(0,0,0,0.25)",
        }}
      >
        {loadingOrdine ? "⏳ Invio..." : "Acquista e paga alla consegna"}
      </button>
    </div>
  );
}
