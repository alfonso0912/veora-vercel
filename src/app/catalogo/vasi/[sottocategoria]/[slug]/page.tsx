import { notFound } from "next/navigation";
import CATALOG from "@/app/catalogo/catalogoData";
import ProdottoClient from "@/app/catalogo/[categoria]/[slug]/ProdottoClient";

interface PageProps {
  params: {
    sottocategoria: string;
    slug: string;
  };
}

// --------------------------------------
// 🔥 NECESSARIO PER NEXT + EXPORT
// --------------------------------------
export async function generateStaticParams() {
  const categoria = CATALOG.vasi;

  if (!categoria?.sottocategorie) return [];

  const paths: { sottocategoria: string; slug: string }[] = [];

  Object.entries(categoria.sottocategorie).forEach(([sottoKey, prodotti]) => {
    if (Array.isArray(prodotti)) {
      prodotti.forEach((p) => {
        paths.push({
          sottocategoria: sottoKey,
          slug: p.slug,
        });
      });
    }
  });

  return paths;
}

// --------------------------------------
// 🔥 PAGINA PRODOTTO PER VASI
// --------------------------------------
export default function Page({ params }: PageProps) {
  const { sottocategoria, slug } = params;

  // 👉 Risolve l’errore TS “no index signature”
  const map = CATALOG.vasi.sottocategorie as Record<string, any[]>;

  const sotto = map[sottocategoria];

  if (!sotto || !Array.isArray(sotto)) {
    return notFound();
  }

  const prodotto = sotto.find((p) => p.slug === slug);

  if (!prodotto) {
    return notFound();
  }

  return <ProdottoClient prodotto={prodotto} />;
}
