import { notFound } from "next/navigation";
import CATALOG from "@/app/catalogo/catalogoData";
import ProdottoClient from "@/app/catalogo/[categoria]/[slug]/ProdottoClient";

interface PageProps {
  params: {
    sottocategoria: string;
    slug: string;
  };
}

// ---------------------------
// 🔥 NECESSARIO PER EXPORT
// ---------------------------
export async function generateStaticParams() {
  const categoria = CATALOG.bomboniere;

  if (!categoria?.sottocategorie) return [];

  const result: { sottocategoria: string; slug: string }[] = [];

  Object.entries(categoria.sottocategorie).forEach(([sottoKey, prodotti]) => {
    if (Array.isArray(prodotti)) {
      prodotti.forEach((p) => {
        result.push({
          sottocategoria: sottoKey,
          slug: p.slug,
        });
      });
    }
  });

  return result;
}

// ---------------------------
// 🔥 PAGINA PRODOTTO
// ---------------------------
export default function Page({ params }: PageProps) {
  const { sottocategoria, slug } = params;

  // 👉 Risoluzione sicura senza errori TS
  const map = CATALOG.bomboniere.sottocategorie as Record<string, any[]>;

  const lista = map[sottocategoria];

  if (!lista || !Array.isArray(lista)) return notFound();

  const prodotto = lista.find((p) => p.slug === slug);

  if (!prodotto) return notFound();

  return <ProdottoClient prodotto={prodotto} />;
}
