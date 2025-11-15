"use client";

import { useState } from "react";
import { Send, Instagram, Phone } from "lucide-react";

export default function ContattiPage() {
  const [form, setForm] = useState({ nome: "", email: "", messaggio: "" });
  const [inviato, setInviato] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInviato(true);
    setTimeout(() => setInviato(false), 4000);
    setForm({ nome: "", email: "", messaggio: "" });
  };

  return (
    <section className="min-h-screen bg-[#F6EFE7] px-6 pt-8 md:pt-10 pb-24 flex flex-col items-center justify-start">
      {/* Titolo */}
      <h1 className="text-4xl md:text-5xl font-serif text-[#bfa76f] text-center mb-8 tracking-wide animate-fade-in">
        Contatti
      </h1>

      {/* Descrizione */}
      <p className="text-center text-[#1a1a1a] max-w-2xl mb-10 leading-relaxed font-[500]">
        Hai domande, richieste personalizzate o desideri collaborare con{" "}
        <strong>VEORA</strong>? Compila il modulo o scrivimi direttamente sui
        miei canali social.
      </p>

      {/* Modulo contatti */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-8 w-full max-w-md border border-[#d9c7a3]"
      >
        <div className="mb-4">
          <label className="block text-[#8a753a] mb-2 font-semibold">
            Nome
          </label>
          <input
            type="text"
            required
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            className="w-full p-3 border border-[#d4af37] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
          />
        </div>

        <div className="mb-4">
          <label className="block text-[#8a753a] mb-2 font-semibold">
            Email
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 border border-[#d4af37] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
          />
        </div>

        <div className="mb-6">
          <label className="block text-[#8a753a] mb-2 font-semibold">
            Messaggio
          </label>
          <textarea
            required
            rows={4}
            value={form.messaggio}
            onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
            className="w-full p-3 border border-[#d4af37] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#d4af37] text-black py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-[#c19c2d] transition"
        >
          <Send size={18} /> Invia
        </button>

        {inviato && (
          <p className="text-center text-[#bfa76f] mt-4 font-medium animate-fade-in">
            ✅ Messaggio inviato con successo!
          </p>
        )}
      </form>

      {/* Social links */}
      <div className="flex gap-8 mt-12 mb-4">
        <a
          href="https://wa.me/393471234567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#bfa76f] hover:text-[#d4af37] transition"
        >
          <Phone size={22} /> WhatsApp
        </a>
        <a
          href="https://www.instagram.com/veora_design"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#bfa76f] hover:text-[#d4af37] transition"
        >
          <Instagram size={22} /> Instagram
        </a>
      </div>
    </section>
  );
}
