import { notFound } from "next/navigation";
import catalogoData from "@/app/catalogo/catalogoData";
import ProdottoClient from "@/app/catalogo/[categoria]/[slug]/ProdottoClient";

// Normalizza stringhe
function norm(s: string) {
  return decodeURIComponent(s)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// ======================================================
// 🔥 generateStaticParams — NECESSARIO PER NEXT EXPORT 🔥
// ======================================================
export function generateStaticParams() {
  const dati = catalogoData["arredo-ufficio"];
  const sottocategorie = dati?.sottocategorie || {};

  const paths: { sottocategoria: string; slug: string }[] = [];

  Object.entries(sottocategorie).forEach(([sub, prodotti]) => {
    (prodotti as any[]).forEach((p) => {
      paths.push({ sottocategoria: sub, slug: p.slug });
    });
  });

  return paths;
}

interface PageProps {
  params: { sottocategoria: string; slug: string };
}

// ======================================================
// 🔥 Pagina prodotto — senza errori TS 🔥
// ======================================================
export default function Page({ params }: PageProps) {
  const sottoKey = norm(params.sottocategoria);
  const slugKey = norm(params.slug);

  // TS vuole un cast — glielo diamo e non rompe più
  const listaProdotti = (
    catalogoData["arredo-ufficio"]?.sottocategorie as Record<string, any[]>
  )[sottoKey];

  if (!Array.isArray(listaProdotti)) return notFound();

  const prodotto = listaProdotti.find((p: any) => norm(p.slug) === slugKey);
  if (!prodotto) return notFound();

  return <ProdottoClient prodotto={prodotto} />;
}
