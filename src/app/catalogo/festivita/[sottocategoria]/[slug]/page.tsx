import { notFound } from "next/navigation";
import catalogoData from "@/app/catalogo/catalogoData";
import ProdottoClient from "@/app/catalogo/[categoria]/[slug]/ProdottoClient";

// Normalizza (tolower + no accenti)
function norm(s: string) {
  return decodeURIComponent(s)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// ======================================================
// 🔥 generateStaticParams — obbligatorio per export 🔥
// ======================================================
export function generateStaticParams() {
  const dati = catalogoData["festivita"];
  const sottocategorie = dati?.sottocategorie || {};

  const paths: { sottocategoria: string; slug: string }[] = [];

  Object.entries(sottocategorie).forEach(([sub, prodotti]) => {
    (prodotti as any[]).forEach((p) => {
      paths.push({ sottocategoria: sub, slug: p.slug });
    });
  });

  return paths;
}

// Tipo corretto
interface PageProps {
  params: { sottocategoria: string; slug: string };
}

// ======================================================
// 🔥 Pagina prodotto festività — versione finale 🔥
// ======================================================
export default function Page({ params }: PageProps) {
  const sottoKey = norm(params.sottocategoria);
  const slugKey = norm(params.slug);

  const listaProdotti = (
    catalogoData["festivita"]?.sottocategorie as Record<string, any[]>
  )[sottoKey];

  if (!Array.isArray(listaProdotti)) return notFound();

  const prodotto = listaProdotti.find((p: any) => norm(p.slug) === slugKey);
  if (!prodotto) return notFound();

  return <ProdottoClient prodotto={prodotto} />;
}
