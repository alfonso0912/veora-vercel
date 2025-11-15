import Link from "next/link";
import Image from "next/image";
import catalogoData from "@/app/catalogo/catalogoData";

export const metadata = { title: "Catalogo VEORA" };

export default function CatalogoPage() {
  const categorie = Object.keys(catalogoData);

  return (
    <div className="min-h-screen bg-[#f8f6f1] text-black px-4 pb-12 pt-6">
      <h1 className="text-2xl font-bold text-center text-[#c6a664] uppercase mb-6">
        Catalogo VEORA
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categorie.map((categoria) => {
          const prodotti = catalogoData[categoria];
          const primo = Array.isArray(prodotti)
            ? prodotti[0]
            : Object.values(prodotti)[0]?.[0];

          return (
            <Link
              key={categoria}
              href={`/catalogo/${categoria}`}
              className="card p-4 flex flex-col items-center text-center bg-white rounded-xl shadow-md hover:shadow-xl transition"
            >
              <div className="w-full h-64 relative mb-4">
                <Image
                  src={primo?.immagini?.[0] || "/images/logo-veora.jpg"}
                  alt={categoria}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <h2 className="text-lg font-semibold text-[#c6a664] mb-1 capitalize">
                {categoria.replace(/-/g, " ")}
              </h2>

              <p className="text-sm text-gray-600">
                {Array.isArray(prodotti)
                  ? prodotti.length
                  : Object.values(prodotti).reduce(
                      (tot, arr) => tot + arr.length,
                      0
                    )}{" "}
                prodotti
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
