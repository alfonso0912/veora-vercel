"use client";
import Image from "next/image";
import { useState } from "react";

export default function GalleriaImmagini({ immagini }) {
  const [index, setIndex] = useState(0);

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.clientWidth;
    const newIndex = Math.round(scrollLeft / width);
    setIndex(newIndex);
  };

  return (
    <div className="w-full">
      {/* 🔹 Galleria scorrevole con il dito */}
      <div
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
        onScroll={handleScroll}
      >
        {immagini.map((src, i) => (
          <div
            key={i}
            className="relative min-w-full h-96 snap-center flex-shrink-0"
          >
            <Image
              src={src}
              alt={`Immagine ${i + 1}`}
              fill
              className="object-contain rounded-xl"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        ))}
      </div>

      {/* 🔘 Indicatori sotto la galleria */}
      <div className="flex justify-center mt-3 gap-2">
        {immagini.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "bg-[#c6a664]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
