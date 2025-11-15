"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function IntroPage() {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);

  const handleStart = () => {
    setStarted(true);

    // 🔊 Avvia suono
    if (!audioPlayed) {
      const audio = new Audio(
        "/sounds/mixkit-happy-bells-notification-937.wav"
      );
      audio.volume = 0.8;
      audio.play().catch(() => {});
      setAudioPlayed(true);
    }

    // ⏳ Dopo 2.5s vai alla home (o catalogo)
    setTimeout(() => router.replace("/catalogo"), 2500);
  };

  // 🔧 Evita scroll o barra
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <section className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#e6ddcf] text-center overflow-hidden">
      {!started ? (
        // 🟡 Schermata iniziale (tap)
        <div
          className="flex flex-col items-center justify-center gap-5"
          onClick={handleStart}
        >
          <img
            src="/images/logo.jpg"
            alt="Logo VEORA"
            className="w-40 h-40 rounded-full shadow-lg border-4 border-[#bfa76f] object-cover animate-pulse"
          />
          <p className="text-[#bfa76f] text-xl font-medium tracking-wide">
            Tocca per iniziare ✨
          </p>
        </div>
      ) : (
        // ✨ Animazione elegante logo + testo luccicante
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          <motion.img
            src="/images/logo.jpg"
            alt="Logo VEORA"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-40 h-40 rounded-full shadow-2xl border-4 border-[#d4af37] mb-8 object-cover"
          />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0.9, 1],
              textShadow: [
                "0 0 10px #d4af37",
                "0 0 25px #b48a02",
                "0 0 40px #d4af37",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
            className="text-4xl md:text-5xl font-serif text-[#d4af37]"
          >
            Benvenuto in VEORA
          </motion.h1>
        </motion.div>
      )}
    </section>
  );
}
