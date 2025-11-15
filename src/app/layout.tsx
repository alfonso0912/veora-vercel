import "./globals.css";
import NavWrapper from "./components/NavWrapper.jsx";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "VEORA – Creazioni Artigianali",
  description:
    "Scopri le collezioni VEORA: gioielli, vasi e design artigianale dal fascino naturale.",
  icons: { icon: "/images/logo-veora.jpg" },
  openGraph: {
    title: "VEORA – Creazioni Artigianali",
    description:
      "Design elegante e artigianato contemporaneo. Scopri la collezione completa VEORA.",
    url: "https://veora-fe008.web.app",
    siteName: "VEORA",
    images: [
      {
        url: "/images/logo-veora.jpg",
        width: 600,
        height: 600,
        alt: "Logo VEORA",
      },
    ],
    type: "website",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "VEORA – Creazioni Artigianali",
    description: "Gioielli, vasi e design artigianale made in Italy.",
    images: ["/images/logo-veora.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <head>
        {/* ✅ Manifest + tema nero per barra superiore */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />

        {/* 🚫 Disattivo completamente cache HTML/CSS */}
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>

      <body className="bg-[#F6EFE7] text-black relative min-h-screen">
        <NavWrapper />
        <main className="pt-20">{children}</main>

        {/* ✅ Service Worker registrato senza cache */}
        <Script id="sw-register" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.getRegistrations().then(regs => {
                for (const reg of regs) reg.unregister();
              });
              caches.keys().then(names => names.forEach(n => caches.delete(n)));
              console.log('🚫 PWA cache disattivata – ricarica completa ad ogni visita');
            }
          `}
        </Script>

        {/* 🔄 Forza il refresh completo se la pagina resta in memoria */}
        <Script id="force-refresh" strategy="afterInteractive">
          {`
            window.addEventListener("pageshow", (event) => {
              if (event.persisted) {
                console.log("🔁 Forzo reload da cache: VEORA aggiornata");
                window.location.reload(true);
              }
            });
          `}
        </Script>

        <div
          style={{
            opacity: 0,
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        >
          VEORA v4.7 – stabile, ricarica completa ogni volta
        </div>
      </body>
    </html>
  );
}
