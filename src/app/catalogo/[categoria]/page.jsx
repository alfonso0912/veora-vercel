import Link from "next/link";
import Image from "next/image";
import CATALOG from "@/app/catalogo/catalogoData";

// ⬅️ GENERATE STATIC PARAMS (OBBLIGATORIO PER EXPORT)
export async function generateStaticParams() {
  return Object.keys(CATALOG).map((cat) => ({
    categoria: cat,
  }));
}

export default function CategoriaPage({ params }) {
  const { categoria } = params;
  const cat = CATALOG[categoria];

  if (!cat) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        Categoria non trovata
      </div>
    );
  }

  const sottocategorie = Object.keys(cat.sottocategorie);
  const hasSub = sottocategorie.length > 0;

  return (
    <div className="min-h-screen bg-[#f8f6f1] text-black px-4 pb-12 pt-6">
      <h1 className="text-2xl font-bold text-center text-[#c6a664] uppercase mb-6">
        Collezione {categoria.replace("-", " ")}
      </h1>

      {hasSub ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sottocategorie.map((sub) => (
            <Link
              key={sub}
              href={`/catalogo/${categoria}/${sub}`}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition text-center"
            >
              <h2 className="text-xl font-semibold text-[#c6a664] uppercase">
                {sub.replace(/-/g, " ")}
              </h2>
            </Link>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cat.lista?.map((p) => (
            <Link
              key={p.slug}
              href={`/catalogo/${categoria}/${p.slug}`}
              className="p-4 flex flex-col items-center text-center bg-white rounded-xl shadow-md hover:shadow-xl transition"
            >
              <div
                className="relative w-full mb-4 overflow-hidden bg-[#f8f6f1] rounded-lg"
                style={{ aspectRatio: "1 / 1" }}
              >
                <Image
                  src={p.immagini?.[0] || "/images/logo-veora.jpg"}
                  alt={p.nome}
                  fill
                  className="object-contain"
                />
              </div>

              <h2 className="text-lg font-semibold text-[#c6a664] mb-1">
                {p.nome}
              </h2>

              {p.prezzo && (
                <p className="text-sm text-gray-800 font-bold">{p.prezzo}€</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
