import SottocategoriaClient from "./SottocategoriaClient";
import catalogoData from "@/app/catalogo/catalogoData";

interface PageProps {
  params: {
    sottocategoria: string;
  };
}

// ✅ Serve assolutamente per output: export
export function generateStaticParams() {
  const categoria = "arredo-casa";
  const dati = catalogoData[categoria];
  const sottocategorie = dati?.sottocategorie || {};

  return Object.keys(sottocategorie).map((sottocategoria) => ({
    sottocategoria,
  }));
}

export default function SottocategoriaPage({ params }: PageProps) {
  return <SottocategoriaClient sottocategoria={params.sottocategoria} />;
}
