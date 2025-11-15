"use client";

import { useEffect, useState } from "react";
import { auth, db, listenAuthState } from "../../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function ProfiloPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    nome: "",
    telefono: "",
    indirizzo: "",
  });
  const [loading, setLoading] = useState(true);
  const [salvato, setSalvato] = useState(false);

  // 🔹 Listener autenticazione persistente
  useEffect(() => {
    const unsub = listenAuthState(async (currentUser) => {
      if (!currentUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      setUser(currentUser);
      const ref = doc(db, "users", currentUser.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        setFormData({
          nome: data.nome || "",
          telefono: data.telefono || "",
          indirizzo: data.indirizzo || "",
        });
      }
      setLoading(false);
    });

    return () => unsub();
  }, []);

  // 🔹 Gestione input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Salvataggio profilo
  const handleSave = async () => {
    if (!user) {
      router.push("/login");
      return;
    }
    try {
      const ref = doc(db, "users", user.uid);
      await updateDoc(ref, formData);
      setSalvato(true);
      setTimeout(() => setSalvato(false), 3000);
    } catch (err) {
      console.error("Errore salvataggio profilo:", err);
    }
  };

  // 🔹 Logout
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    router.push("/");
  };

  // 🔹 Stato caricamento
  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6EFE7]">
        <p className="text-[#b48a02] text-lg">Caricamento profilo...</p>
      </div>
    );

  // 🔹 Non loggato
  if (!user)
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#F6EFE7] text-[#222] px-6 text-center">
        <h1 className="text-4xl font-serif text-[#b48a02] mb-4">
          Area Personale VEORA
        </h1>
        <p className="text-gray-700 mb-6">
          Effettua l'accesso per visualizzare o modificare i tuoi dati 🌿
        </p>
        <button
          onClick={() => router.push("/login")}
          className="px-6 py-2 bg-[#b48a02] text-black font-semibold rounded-md hover:bg-[#a07e02] transition duration-300"
        >
          Accedi o Registrati
        </button>
      </section>
    );

  // 🔹 Profilo completo
  return (
    <section className="min-h-screen flex flex-col items-center justify-start bg-[#F6EFE7] text-[#222] px-6 pt-20 pb-16">
      <h1 className="text-4xl font-serif text-[#b48a02] mb-6 text-center">
        Profilo Utente VEORA
      </h1>

      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 border border-[#e5dcc3]">
        <p className="text-sm text-gray-600 mb-4 text-center">
          Email: <span className="font-semibold">{user?.email}</span>
        </p>

        <label className="block text-left text-sm text-gray-600 mb-1">
          Nome
        </label>
        <input
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Inserisci il tuo nome"
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:ring-2 focus:ring-[#b48a02]"
        />

        <label className="block text-left text-sm text-gray-600 mb-1">
          Telefono
        </label>
        <input
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="Es. +39 333 1234567"
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:ring-2 focus:ring-[#b48a02]"
        />

        <label className="block text-left text-sm text-gray-600 mb-1">
          Indirizzo
        </label>
        <textarea
          name="indirizzo"
          value={formData.indirizzo}
          onChange={handleChange}
          placeholder="Via Roma 123, Foggia (FG)"
          rows={2}
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:ring-2 focus:ring-[#b48a02]"
        />

        <button
          onClick={handleSave}
          className="w-full bg-[#b48a02] text-black font-semibold py-2 rounded-md hover:bg-[#a07e02] transition duration-300"
        >
          Salva modifiche
        </button>

        {salvato && (
          <p className="text-green-600 text-center mt-4">
            ✅ Profilo aggiornato con successo!
          </p>
        )}
      </div>

      <button
        onClick={handleLogout}
        className="mt-6 text-sm text-[#b48a02] underline hover:text-[#8f7002]"
      >
        ⎋ Esci dal tuo account
      </button>

      <button
        onClick={() => router.push("/")}
        className="mt-2 text-sm text-[#b48a02] underline hover:text-[#8f7002]"
      >
        ⬅️ Torna al catalogo
      </button>
    </section>
  );
}
