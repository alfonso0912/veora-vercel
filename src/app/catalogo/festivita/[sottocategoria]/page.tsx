import SottocategoriaClient from "./SottocategoriaClient";
import catalogoData from "@/app/catalogo/catalogoData";

// ✅ Funzione obbligatoria per Next.js con output: "export"
export async function generateStaticParams() {
  const sottocategorie =
    (catalogoData["festivita"]?.sottocategorie as Record<string, any[]>) || {};

  return Object.keys(sottocategorie).map((nome) => ({
    sottocategoria: nome,
  }));
}

export default function SottocategoriaPage({ params }: { params: any }) {
  const { sottocategoria } = params;
  return <SottocategoriaClient sottocategoria={sottocategoria} />;
}
