"use client";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { useRouter } from "next/navigation";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export default function LoginPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Evita hydration error
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Se l'utente è già loggato → portalo subito su /account
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) router.push("/account");
    });
    return () => unsub();
  }, [router]);

  if (!mounted) return null;

  // 🔹 Login con email e password
  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/account"); // ✅ Redirect diretto
    } catch {
      setError("Credenziali non valide o account inesistente.");
    }
    setLoading(false);
  };

  // 🔹 Registrazione con salvataggio profilo base in Firestore
  const handleRegister = async () => {
    setLoading(true);
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // ✅ Salva il profilo base in Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email: userCredential.user.email,
        nome: "",
        telefono: "",
        indirizzo: "",
        createdAt: serverTimestamp(),
      });

      router.push("/account"); // ✅ Redirect diretto dopo registrazione
    } catch (err) {
      console.error("Errore durante la registrazione:", err);
      setError("Errore durante la registrazione.");
    }
    setLoading(false);
  };

  // 🔹 Login con Google
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/account");
    } catch {
      setError("Accesso con Google non riuscito.");
    }
  };

  // ✅ UI VEORA (invariata)
  return (
    <section className="min-h-screen flex flex-col justify-start items-center bg-[#F6EFE7] text-center px-6 pt-16 pb-20 text-[#222]">
      {/* ✨ Titolo con animazione */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-serif text-[#b48a02] mb-3 tracking-wide"
      >
        Area Personale
      </motion.h1>

      {/* 🌟 Logo */}
      <motion.img
        src="/images/logo-veora.jpg"
        alt="Logo VEORA"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-24 h-24 rounded-full mb-6 shadow-md"
      />

      {/* 🪴 Descrizione */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-[#333] max-w-md mb-10 leading-relaxed"
      >
        Accedi per gestire i tuoi ordini, preferiti e dati personali 🌿
      </motion.p>

      {/* 🔘 Bottone Google */}
      <motion.button
        onClick={handleGoogleLogin}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-[#D4AF37] hover:bg-[#b48a02] text-black font-semibold py-2 px-6 rounded-md mb-8 transition duration-300"
      >
        Accedi con Google
      </motion.button>

      {/* ✉️ Campi input */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full max-w-xs space-y-3"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D4AF37] focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D4AF37] focus:outline-none"
        />
      </motion.div>

      {/* ⚫ Bottoni */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex gap-4 mt-8"
      >
        <button
          onClick={handleLogin}
          disabled={loading}
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-[#333] transition duration-300"
        >
          Accedi
        </button>
        <button
          onClick={handleRegister}
          disabled={loading}
          className="bg-[#D4AF37] text-black px-6 py-2 rounded-md hover:bg-[#b48a02] transition duration-300"
        >
          Registrati
        </button>
      </motion.div>

      {/* ⚠️ Errore */}
      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-600 mt-4"
        >
          {error}
        </motion.p>
      )}
    </section>
  );
}
