import SottocategoriaClient from "./SottocategoriaClient";
import catalogoData from "@/app/catalogo/catalogoData";

// ---------------------------------------------------------
// ✅ Next 15 — generateStaticParams (FORMATO CORRETTO)
// ---------------------------------------------------------
export async function generateStaticParams() {
  const sottocategorie = Object.keys(
    catalogoData["arredo-ufficio"]?.sottocategorie || {}
  );

  return sottocategorie.map((sottocategoria) => ({
    sottocategoria,
  }));
}

// ---------------------------------------------------------
// ✅ Page — params DEVONO essere sincronI (mai Promise)
// ---------------------------------------------------------
export default function SottocategoriaPage({
  params,
}: {
  params: { sottocategoria: string };
}) {
  const { sottocategoria } = params;

  return <SottocategoriaClient sottocategoria={sottocategoria} />;
}
