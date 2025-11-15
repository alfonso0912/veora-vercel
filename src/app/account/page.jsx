"use client";
import { useEffect, useState } from "react";
import { auth, db } from "@/firebaseConfig";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export default function AccountPage() {
  const [user, loadingUser] = useAuthState(auth);
  const [dati, setDati] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;
      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) setDati(snap.data());
    };
    fetchUserData();
  }, [user]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  if (loadingUser)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6EFE7]">
        <p className="text-[#b48a02] text-lg font-medium">
          Caricamento area personale...
        </p>
      </div>
    );

  if (!user)
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#F6EFE7] text-[#222] px-6 text-center">
        <h1 className="text-4xl font-serif text-[#b48a02] mb-4">
          Area Personale VEORA
        </h1>
        <p className="text-gray-700 mb-6">
          Effettua l’accesso per gestire i tuoi ordini, preferiti e profilo 🌿
        </p>
        <button
          onClick={() => router.push("/login")}
          className="px-6 py-2 bg-[#b48a02] text-black font-semibold rounded-md hover:bg-[#a07e02] transition duration-300"
        >
          Accedi o Registrati
        </button>
      </section>
    );

  return (
    <section className="min-h-screen flex flex-col items-center justify-start bg-[#F6EFE7] text-[#222] px-6 pt-20 pb-16">
      {/* 🌿 TITOLO */}
      <h1 className="text-center font-serif italic text-[clamp(1.8rem,4.5vw,2.6rem)] text-[#d0a84f] leading-snug mb-2">
        Benvenuto,
        <br />
        {(dati?.nome || "UTENTE").toUpperCase()} 🌿
      </h1>

      {/* 🌿 BOX DATI PERSONALI */}
      <div className="w-full max-w-md bg-white rounded-[22px] shadow-lg border border-[#e5dcc3] p-6 mb-6 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="/images/logo-veora.jpg"
            alt="VEORA"
            className="w-20 h-20 rounded-full border border-[#c5a76a] shadow"
          />
        </div>

        {/* Linea */}
        <div className="w-full h-px bg-[#e8ddc6] mb-4"></div>

        {/* BOX EMAIL */}
        <div className="border border-[#c6a664] bg-[#f6e7c9] rounded-xl px-3 py-2 text-center mb-3 shadow-sm">
          <p className="text-sm font-semibold text-[#3d2b1f]">
            Email: <span className="font-normal">{user.email}</span>
          </p>
        </div>

        {/* BOX TELEFONO */}
        {dati?.telefono && (
          <div className="border border-[#c6a664] bg-[#f6e7c9] rounded-xl px-3 py-2 text-center mb-3 shadow-sm">
            <p className="text-sm font-semibold text-[#3d2b1f]">
              Telefono: <span className="font-normal">{dati.telefono}</span>
            </p>
          </div>
        )}

        {/* BOX INDIRIZZO */}
        {dati?.indirizzo && (
          <div className="border border-[#c6a664] bg-[#f6e7c9] rounded-xl px-3 py-2 text-center shadow-sm">
            <p className="text-sm font-semibold text-[#3d2b1f]">
              Indirizzo: <span className="font-normal">{dati.indirizzo}</span>
            </p>
          </div>
        )}
      </div>

      {/* 🌿 BOTTONI */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 border border-[#e5dcc3] text-center">
        <div className="flex flex-col gap-3">
          <button
            onClick={() => router.push("/profilo")}
            className="w-full bg-[#b48a02] text-black font-semibold py-2 rounded-md hover:bg-[#a07e02] transition duration-300"
          >
            Modifica Profilo
          </button>

          <button
            onClick={() => router.push("/ordini")}
            className="w-full bg-[#0b1a2b] text-white font-semibold py-2 rounded-md hover:brightness-110 transition duration-300"
          >
            I miei Ordini
          </button>

          <button
            onClick={() => router.push("/preferiti")}
            className="w-full bg-[#1b3355] text-white font-semibold py-2 rounded-md hover:brightness-110 transition duration-300"
          >
            ❤️ Preferiti
          </button>

          <button
            onClick={handleLogout}
            className="w-full bg-gray-300 text-black font-semibold py-2 rounded-md hover:bg-gray-400 transition duration-300"
          >
            Esci dal tuo account
          </button>
        </div>
      </div>

      <button
        onClick={() => router.push("/")}
        className="mt-8 text-sm text-[#b48a02] underline hover:text-[#8f7002]"
      >
        ⬅️ Torna al catalogo
      </button>
    </section>
  );
}
