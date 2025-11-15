import { notFound } from "next/navigation";
import catalogoData from "@/app/catalogo/catalogoData";
import ProdottoClient from "@/app/catalogo/[categoria]/[slug]/ProdottoClient.jsx";

function norm(s: string) {
  return decodeURIComponent(s)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// -----------------------------------------------------
//  STATIC EXPORT → Generiamo TUTTI I PRODOTTI
// -----------------------------------------------------
export function generateStaticParams() {
  const categoria = "arredo-casa";
  const dati = catalogoData[categoria];
  const sottocategorie = dati?.sottocategorie || {};

  const paths: { sottocategoria: string; slug: string }[] = [];

  Object.entries(sottocategorie).forEach(([sub, prodotti]) => {
    (prodotti as any[]).forEach((p) => {
      paths.push({
        sottocategoria: sub,
        slug: p.slug,
      });
    });
  });

  return paths;
}

// -----------------------------------------------------
//  PAGINA PRODOTTO
// -----------------------------------------------------
export default function Page({
  params,
}: {
  params: { sottocategoria: string; slug: string };
}) {
  const sottoKey = norm(params.sottocategoria);
  const slugKey = norm(params.slug);

  const categoriaData = catalogoData["arredo-casa"];
  const lista = (categoriaData?.sottocategorie as Record<string, any[]>)?.[
    sottoKey
  ];

  if (!lista) return notFound();

  const prodotto = lista.find((p: any) => norm(p.slug) === slugKey);
  if (!prodotto) return notFound();

  return <ProdottoClient prodotto={prodotto} />;
}
