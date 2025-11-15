"use client"; // ✅ forza la pagina come Client Component

import Image from "next/image";

export default function MiPresento() {
  return (
    <section className="min-h-screen bg-[#F6EFE7] px-6 pt-8 md:pt-10 pb-[10vh] flex flex-col items-center justify-start">
      {/* Titolo principale */}
      <h1 className="text-4xl md:text-5xl font-serif text-[#bfa76f] text-center mb-8 tracking-wide animate-fade-in">
        Mi Presento
      </h1>

      {/* Contenuto centrale */}
      <div className="max-w-3xl text-center text-[#1a1a1a] leading-relaxed space-y-6 font-[500]">
        <p>
          Ciao, sono <strong>Floriana</strong>, fondatrice di{" "}
          <strong>VEORA</strong>. Amo dare forma alle emozioni attraverso il
          design, unendo creatività, artigianalità e cura per i dettagli.
        </p>

        <p>
          <strong>VEORA</strong> è il mio spazio creativo, dove le idee prendono
          vita grazie alla <strong>stampa 3D</strong> e alla passione per la
          bellezza essenziale. Ogni progetto nasce da un equilibrio tra forme
          pulite, materiali naturali e armonia visiva.
        </p>

        <p>
          Creo oggetti che raccontano qualcosa:{" "}
          <strong>orecchini, vasi, lampade</strong> e complementi d’arredo che
          portano con sé una parte di me, del mio gusto e della mia visione del
          mondo. Tutto è realizzato con attenzione ai materiali, rispetto per
          l’ambiente e amore per le piccole imperfezioni che rendono unico ogni
          pezzo.
        </p>

        <p>
          <strong>VEORA</strong> rappresenta il mio modo di esprimermi: unione
          tra design, semplicità e passione per ciò che è autentico. Ogni
          creazione è un frammento di me, un dettaglio che parla di equilibrio,
          calma e luce.
        </p>

        {/* Citazione finale */}
        <div className="mt-10 mb-24">
          <p className="italic text-[#bfa76f] text-lg font-medium mb-4">
            “La perfezione è nei dettagli.”
          </p>

          {/* 🔸 Logo VEORA con shimmer dorato */}
          <div className="relative flex justify-center">
            <div className="relative w-[120px] h-[120px] shimmer-border rounded-full overflow-hidden">
              <Image
                src="/images/logo-veora.jpg"
                alt="Logo VEORA"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* ✨ Effetto shimmer dorato */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: 200px 0;
          }
        }
        .shimmer-border {
          position: relative;
          border: 3px solid transparent;
          background-image: linear-gradient(#bfa76f, #bfa76f),
            linear-gradient(90deg, #bfa76f 0%, #fff4d1 50%, #bfa76f 100%);
          background-origin: border-box;
          background-clip: content-box, border-box;
          animation: shimmer 4s linear infinite;
          box-shadow: 0 0 15px rgba(191, 167, 111, 0.4);
        }
      `}</style>
    </section>
  );
}
