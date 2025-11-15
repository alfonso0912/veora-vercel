import SottocategoriaClient from "./SottocategoriaClient";
import catalogoData from "@/app/catalogo/catalogoData";

// ✅ Genera percorsi statici per tutte le sottocategorie dei Vasi
export function generateStaticParams() {
  const categoria = "vasi";
  const dati = catalogoData[categoria];
  const sottocategorie = dati?.sottocategorie || {};

  return Object.keys(sottocategorie).map((sottocategoria) => ({
    sottocategoria,
  }));
}

// ✅ Pagina server che passa i parametri al client
export default function SottocategoriaPage({
  params,
}: {
  params: { sottocategoria: string };
}) {
  return <SottocategoriaClient sottocategoria={params.sottocategoria} />;
}
