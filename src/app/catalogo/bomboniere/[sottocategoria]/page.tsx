import SottocategoriaClient from "./SottocategoriaClient";
import catalogoData from "@/app/catalogo/catalogoData";

// ✅ Genera percorsi statici per ogni sottocategoria di Bomboniere
export function generateStaticParams() {
  const categoria = "bomboniere";
  const dati = catalogoData[categoria];
  const sottocategorie = dati?.sottocategorie || {};

  return Object.keys(sottocategorie).map((sottocategoria) => ({
    sottocategoria, // <-- ora genera ricordi-preziosi, vasi-dautore
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
