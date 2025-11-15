// 🔹 Database centrale dei prodotti VEORA
const CATALOG = {
  // 🏠 ARREDO CASA
  "arredo-casa": {
    nome: "Arredo Casa",
    sottocategorie: {
      // ✅ LAMPADE (MODELLO BASE)
      lampade: [
        {
          nome: "Lumea",
          slug: "lumea",
          descrizione:
            "Lampada Lumea dal design elegante e illuminazione soffusa, perfetta per ambienti moderni e raffinati.",
          immagini: [
            "/images/Lumea1.webp",
            "/images/Lumea2.webp",
            "/images/Lumea3.webp",
          ],
          prezzo: "19,90 €",
          altezza: "60",
          larghezza: "40",
          profondita: "50",

          // 🆕 CAMPI PER IL TEST (visibili SOLO a Firebase)
          pesoGrammi: 120,
          tempoProduzioneMin: 45,
        },

        {
          nome: "Velumia",
          slug: "velumia",
          descrizione:
            "Lampada Velumia con forma sinuosa e diffusione luminosa uniforme, ideale per zone living e studio.",
          immagini: [
            "/images/Velumia1.webp",
            "/images/Velumia2.webp",
            "/images/Velumia3.webp",
          ],
          prezzo: "34,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],

      // ✅ NUOVA SOTTOCATEGORIA 1 – IDENTICA A LAMPADE
      "forme-creative": [
        {
          nome: "Mushrooms",
          slug: "mushrooms",
          descrizione:
            "Decorazione artistica Mushrooms in stile organico, perfetta per ambienti creativi e moderni.",
          immagini: [
            "/images/Mushrooms1.webp",
            "/images/Mushrooms2.webp",
            "/images/Mushrooms3.webp",
          ],
          prezzo: "29,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],

      // ✅ NUOVA SOTTOCATEGORIA 2 – IDENTICA A LAMPADE
      sculture: [
        {
          nome: "Gatto",
          slug: "gatto",
          descrizione:
            "Scultura Gatto in stile elegante e minimale, ideale per librerie, salotti e studi d’arte.",
          immagini: [
            "/images/Gatto1.webp",
            "/images/Gatto2.webp",
            "/images/Gatto3.webp",
          ],
          prezzo: "29,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],

      // ✅ RESTO DELLE SOTTOCATEGORIE ORIGINALI
      orologi: [
        {
          nome: "Rilay",
          slug: "rilay",
          descrizione:
            "Orologio da parete Rilay dal design moderno e minimal in PLA satinato.",
          immagini: [
            "/images/Rilay1.webp",
            "/images/Rilay2.webp",
            "/images/Rilay3.webp",
          ],
          prezzo: "39,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],

      "porta-bottiglie": [
        {
          nome: "Porta Bottiglie Wave",
          slug: "porta-bottiglie-wave",
          descrizione:
            "Porta Bottiglie Wave dal design sinuoso in stampa 3D, elegante e funzionale per la tua cucina.",
          immagini: [
            "/images/porta-bottiglie.jpg",
            "/images/porta-bottiglie2.jpg",
            "/images/porta-bottiglie3.jpg",
          ],
          prezzo: "27,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],

      "porta-candele": [
        {
          nome: "Candelabro Halo",
          slug: "candelabro-halo",
          descrizione:
            "Candelabro Halo moderno e raffinato, con design circolare in finitura satinata.",
          immagini: [
            "/images/porta-candele.jpg",
            "/images/porta-candele2.jpg",
            "/images/porta-candele3.jpg",
          ],
          prezzo: "22,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],

      "porta-capsule": [
        {
          nome: "Porta Capsule Barista",
          slug: "porta-capsule-barista",
          descrizione:
            "Porta Capsule Barista, ideale per organizzare con stile le capsule del caffè preferito.",
          immagini: [
            "/images/porta-capsule.jpg",
            "/images/porta-capsule2.jpg",
            "/images/porta-capsule3.jpg",
          ],
          prezzo: "19,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
        {
          nome: "Porta Capsule Deluxe",
          slug: "porta-capsule-deluxe",
          descrizione:
            "Versione Deluxe del Porta Capsule, con design compatto e finitura lucida per ambienti moderni.",
          immagini: [
            "/images/porta-capsule-deluxe.jpg",
            "/images/porta-capsule-deluxe2.jpg",
            "/images/porta-capsule-deluxe3.jpg",
          ],
          prezzo: "24,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],

      "porta-cellulare": [
        {
          nome: "Supporto Smartphone Dock",
          slug: "supporto-smartphone-dock",
          descrizione:
            "Supporto Dock per smartphone dal design elegante, stabile e compatibile con ogni modello.",
          immagini: [
            "/images/porta-cellulare.jpg",
            "/images/porta-cellulare2.jpg",
            "/images/porta-cellulare3.jpg",
          ],
          prezzo: "14,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],

      "porta-gioie": [
        {
          nome: "Porta Gioie Bloom",
          slug: "porta-gioie-bloom",
          descrizione:
            "Porta Gioie Bloom in stile floreale, con scomparti multipli per anelli e collane.",
          immagini: [
            "/images/porta-gioie.jpg",
            "/images/porta-gioie2.jpg",
            "/images/porta-gioie3.jpg",
          ],
          prezzo: "29,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],

      scritte: [
        {
          nome: "Scritta Home Sweet Home",
          slug: "scritta-home-sweet-home",
          descrizione:
            "Scritta decorativa Home Sweet Home, realizzata in stampa 3D con effetto dorato lucido.",
          immagini: [
            "/images/scritta-home.jpg",
            "/images/scritta-home2.jpg",
            "/images/scritta-home3.jpg",
          ],
          prezzo: "19,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],

      "supporti-cuffie": [
        {
          nome: "Supporto Headset Stand",
          slug: "supporto-headset-stand",
          descrizione:
            "Supporto per cuffie Headset Stand in stile minimal con base antiscivolo e struttura 3D.",
          immagini: [
            "/images/supporto-cuffie.jpg",
            "/images/supporto-cuffie2.jpg",
            "/images/supporto-cuffie3.jpg",
          ],
          prezzo: "17,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],

      "svuota-tasche": [
        {
          nome: "Svuota Tasche Orbit",
          slug: "svuota-tasche-orbit",
          descrizione:
            "Svuota Tasche Orbit elegante e pratico, ideale per l’ingresso o il comodino.",
          immagini: [
            "/images/svuota-tasche.jpg",
            "/images/svuota-tasche2.jpg",
            "/images/svuota-tasche3.jpg",
          ],
          prezzo: "15,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],
    },
  },
  // 🏢 ARREDO UFFICIO
  "arredo-ufficio": {
    nome: "Arredo Ufficio",
    sottocategorie: {
      "porta-penne": [
        {
          nome: "Porta Penne Minimal",
          slug: "porta-penne-minimal",
          descrizione:
            "Porta Penne Minimal dal design elegante e funzionale, perfetto per organizzare la scrivania.",
          immagini: [
            "/images/porta-penne-minimal.jpg",
            "/images/porta-penne-minimal2.jpg",
            "/images/porta-penne-minimal3.jpg",
          ],
          prezzo: "19,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
        {
          nome: "Porta Penne Elegance",
          slug: "porta-penne-elegance",
          descrizione:
            "Porta Penne Elegance, design raffinato in materiali di qualità, ideale per uffici moderni.",
          immagini: [
            "/images/porta-penne-elegance.jpg",
            "/images/porta-penne-elegance2.jpg",
            "/images/porta-penne-elegance3.jpg",
          ],
          prezzo: "24,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],

      "studio-creativo": [
        {
          nome: "Cestino Design Nero",
          slug: "cestino-design-nero",
          descrizione:
            "Cestino Design Nero elegante e resistente, perfetto per mantenere l’ufficio ordinato.",
          immagini: [
            "/images/cestino-design-nero.jpg",
            "/images/cestino-design-nero2.jpg",
            "/images/cestino-design-nero3.jpg",
          ],
          prezzo: "29,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
        {
          nome: "Cestino Bianco Lucido",
          slug: "cestino-bianco-lucido",
          descrizione:
            "Cestino Bianco Lucido, design minimal e moderno, ideale per scrivanie eleganti.",
          immagini: [
            "/images/cestino-bianco-lucido.jpg",
            "/images/cestino-bianco-lucido2.jpg",
            "/images/cestino-bianco-lucido3.jpg",
          ],
          prezzo: "27,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],

      organizer: [
        {
          nome: "Organizer da Ufficio in Legno",
          slug: "organizer-legno",
          descrizione:
            "Organizer da Ufficio in Legno, pratico e raffinato, con scomparti multipli per documenti e cancelleria.",
          immagini: [
            "/images/organizer-legno.jpg",
            "/images/organizer-legno2.jpg",
            "/images/organizer-legno3.jpg",
          ],
          prezzo: "34,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
        {
          nome: "Organizer Metal Pro",
          slug: "organizer-metal-pro",
          descrizione:
            "Organizer Metal Pro in metallo resistente, design moderno, ideale per scrivanie professionali.",
          immagini: [
            "/images/organizer-metal-pro.jpg",
            "/images/organizer-metal-pro2.jpg",
            "/images/organizer-metal-pro3.jpg",
          ],
          prezzo: "39,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],
    },
  },

  // 💎 ACCESSORI
  accessori: {
    nome: "Accessori",
    sottocategorie: {
      orecchini: [
        {
          nome: "Duality",
          slug: "duality",
          descrizione:
            "Orecchini Duality in design 3D minimal ed elegante, stampati in PLA satinato.",
          immagini: [
            "/images/Duality1.webp",
            "/images/Duality2.webp",
            "/images/Duality3.webp",
          ],
          prezzo: "24,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
        {
          nome: "Orecchini Fiore di Notte",
          slug: "orecchini-fiore-di-notte",
          descrizione:
            "Modello floreale elegante stampato in resina lucida nera.",
          immagini: [
            "/images/orecchini-fiore-notte.webp",
            "/images/orecchini-fiore-notte2.webp",
            "/images/orecchini-fiore-notte3.webp",
          ],
          prezzo: "27,50 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],

      fermacapelli: [
        {
          nome: "Ferma Capelli Elegance",
          slug: "ferma-capelli-elegance",
          descrizione:
            "Accessorio 3D stampato in PLA avorio effetto seta con clip in acciaio.",
          immagini: [
            "/images/ferma-capelli-elegance.webp",
            "/images/ferma-capelli-elegance2.webp",
            "/images/ferma-capelli-elegance3.webp",
          ],
          prezzo: "19,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
        {
          nome: "Ferma Capelli Fiocco Oro",
          slug: "ferma-capelli-fiocco-oro",
          descrizione:
            "Design minimal con texture lucida color oro, ultraleggero e resistente.",
          immagini: [
            "/images/ferma-capelli-fiocco-oro.webp",
            "/images/ferma-capelli-fiocco-oro2.webp",
            "/images/ferma-capelli-fiocco-oro3.webp",
          ],
          prezzo: "22,50 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],
    },
  },

  // 🎄 FESTIVITÀ
  festivita: {
    nome: "Festività",
    sottocategorie: {
      natale: [
        {
          nome: "Decorazione Stella Dorata",
          slug: "decorazione-stella-dorata",
          descrizione:
            "Decorazione natalizia a forma di stella dorata in 3D, elegante e luminosa.",
          immagini: [
            "/images/decorazione-stella-dorata.jpg",
            "/images/decorazione-stella-dorata2.jpg",
            "/images/decorazione-stella-dorata3.jpg",
          ],
          prezzo: "14,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
        {
          nome: "Albero Mini 3D",
          slug: "albero-mini-3d",
          descrizione:
            "Piccolo albero 3D decorativo, perfetto per tavoli e ambienti domestici.",
          immagini: [
            "/images/albero-mini-3d.jpg",
            "/images/albero-mini-3d2.jpg",
            "/images/albero-mini-3d3.jpg",
          ],
          prezzo: "19,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],

      pasqua: [
        {
          nome: "Uovo Luminoso",
          slug: "uovo-luminoso",
          descrizione:
            "Uovo decorativo luminoso in 3D, ideale per decorazioni pasquali.",
          immagini: [
            "/images/uovo-luminoso.jpg",
            "/images/uovo-luminoso2.jpg",
            "/images/uovo-luminoso3.jpg",
          ],
          prezzo: "24,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],

      "san-valentino": [
        {
          nome: "Cuore Intrecciato",
          slug: "cuore-intrecciato",
          descrizione:
            "Cuore decorativo intrecciato, elegante e romantico per San Valentino.",
          immagini: [
            "/images/cuore-intrecciato.jpg",
            "/images/cuore-intrecciato2.jpg",
            "/images/cuore-intrecciato3.jpg",
          ],
          prezzo: "21,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],
    },
  },
  // 🪴 VASI
  vasi: {
    nome: "Vasi",
    sottocategorie: {
      // ✅ ATELIER — NON TOCCATO
      atelier: [
        {
          nome: "SoftCube",
          categoria: "vasi",
          slug: "softcube",
          descrizione:
            "Il vaso SoftCube unisce geometrie morbide e superfici vellutate, ideale per ambienti moderni e minimal. Realizzato in PLA bioplastica derivata dal mais, materiale atossico e sicuro per la casa.",
          immagini: [
            "/images/SoftCube1.webp",
            "/images/SoftCube2.webp",
            "/images/SoftCube3.webp",
          ],
          dimensioni: [
            { misura: "80 x 80 x 80", prezzo: "4,00 €" },
            { misura: "100 x 100 x 100", prezzo: "6,00 €" },
            { misura: "120 x 120 x 120", prezzo: "9,00 €" },
          ],
          note: "PLA ecologico – finitura opaca liscia.",
        },
        {
          nome: "Lithora",
          categoria: "vasi",
          slug: "lithora",
          descrizione:
            "La struttura elegante del vaso Lithora richiama le sfaccettature della pietra levigata, creando un effetto scultoreo raffinato. Stampato in PLA atossico, sicuro anche per piante da interno.",
          immagini: [
            "/images/Lithora1.webp",
            "/images/Lithora2.webp",
            "/images/Lithora3.webp",
          ],
          dimensioni: [
            { misura: "80 x 80 x 80", prezzo: "4,00 €" },
            { misura: "100 x 100 x 100", prezzo: "7,00 €" },
            { misura: "120 x 120 x 120", prezzo: "10,00 €" },
          ],
          note: "Superficie satinata – ispirazione naturale.",
        },
        {
          nome: "Cushar",
          categoria: "vasi",
          slug: "cushar",
          descrizione:
            "Cushar presenta un profilo morbido e scavato, pensato per dare equilibrio tra luce e ombra. Realizzato in PLA biodegradabile, resistente e privo di sostanze nocive.",
          immagini: [
            "/images/Cushar1.webp",
            "/images/Cushar2.webp",
            "/images/Cushar3.webp",
          ],
          dimensioni: [
            { misura: "80 x 80 x 80", prezzo: "4,00 €" },
            { misura: "100 x 100 x 100", prezzo: "6,00 €" },
            { misura: "120 x 120 x 120", prezzo: "10,00 €" },
          ],
          note: "Texture morbida – perfetto per piccoli fiori o piante grasse.",
        },
        {
          nome: "Aquilys",
          categoria: "vasi",
          slug: "aquilys",
          descrizione:
            "Aquilys si ispira al movimento fluido dell’acqua: forme ascendenti e leggere per un vaso che arreda senza ingombrare. Stampato in PLA atossico, ideale per spazi abitati da bambini e animali.",
          immagini: [
            "/images/Aquilys1.webp",
            "/images/Aquilys2.webp",
            "/images/Aquilys3.webp",
          ],
          dimensioni: [
            { misura: "80 x 80 x 80", prezzo: "9,00 €" },
            { misura: "100 x 100 x 100", prezzo: "15,00 €" },
            { misura: "120 x 120 x 120", prezzo: "22,00 €" },
          ],
          note: "Linee fluide – design ispirato alla natura.",
        },
        {
          nome: "Celora",
          categoria: "vasi",
          slug: "celora",
          descrizione:
            "Celora combina eleganza e leggerezza: una silhouette slanciata e un gioco di superfici che riflettono delicatamente la luce. In PLA ecologico, privo di solventi e sicuro per ambienti interni.",
          immagini: [
            "/images/Celora1.webp",
            "/images/Celora2.webp",
            "/images/Celora3.webp",
          ],
          dimensioni: [
            { misura: "80 x 80 x 80", prezzo: "4,00 €" },
            { misura: "100 x 100 x 100", prezzo: "7,00 €" },
            { misura: "120 x 120 x 120", prezzo: "9,00 €" },
          ],
          note: "Stile elegante – perfetto per arredi moderni o classici.",
        },
        {
          nome: "Velora",
          categoria: "vasi",
          slug: "velora",
          descrizione:
            "Velora esprime continuità e movimento attraverso una spirale leggera che avvolge tutta la superficie. Stampato in PLA naturale, materiale atossico e inodore, ideale per spazi chiusi.",
          immagini: [
            "/images/Velora1.webp",
            "/images/Velora2.webp",
            "/images/Velora3.webp",
          ],
          dimensioni: [
            { misura: "80 x 80 x 80", prezzo: "4,00 €" },
            { misura: "100 x 100 x 100", prezzo: "6,00 €" },
            { misura: "120 x 120 x 120", prezzo: "8,00 €" },
          ],
          note: "Effetto dinamico – perfetto come vaso decorativo.",
        },
        {
          nome: "Spirora",
          categoria: "vasi",
          slug: "spirora",
          descrizione:
            "Spirora nasce da una spirale continua che conferisce equilibrio tra movimento e stabilità. Bioplastica PLA, sicura, priva di BPA e adatta a qualsiasi ambiente domestico.",
          immagini: [
            "/images/Spirora1.webp",
            "/images/Spirora2.webp",
            "/images/Spirora3.webp",
          ],
          dimensioni: [
            { misura: "80 x 80 x 80", prezzo: "7,00 €" },
            { misura: "100 x 100 x 100", prezzo: "11,00 €" },
            { misura: "120 x 120 x 120", prezzo: "17,00 €" },
          ],
          note: "Design a spirale – elegante su mensole o tavolini.",
        },
        {
          nome: "Rosyn",
          categoria: "vasi",
          slug: "rosyn",
          descrizione:
            "Rosyn porta con sé un delicato gioco di curvature che ricordano un bocciolo di rosa. Realizzato in PLA biodegradabile, sicuro, leggero e piacevole al tatto.",
          immagini: [
            "/images/Rosyn1.webp",
            "/images/Rosyn2.webp",
            "/images/Rosyn3.webp",
          ],
          dimensioni: [
            { misura: "80 x 80 x 80", prezzo: "4,00 €" },
            { misura: "100 x 100 x 100", prezzo: "6,00 €" },
            { misura: "120 x 120 x 120", prezzo: "8,00 €" },
          ],
          note: "Ideale per fiori secchi o piante piccole.",
        },
        {
          nome: "Puffra",
          categoria: "vasi",
          slug: "puffra",
          descrizione:
            "Puffra ha una forma soffice e gonfia, pensata per trasmettere morbidezza anche nella materia solida. Stampato in PLA atossico, perfetto per arredi contemporanei e ambienti rilassanti.",
          immagini: [
            "/images/Puffra1.webp",
            "/images/Puffra2.webp",
            "/images/Puffra3.webp",
          ],
          dimensioni: [
            { misura: "80 x 80 x 80", prezzo: "4,00 €" },
            { misura: "100 x 100 x 100", prezzo: "6,00 €" },
            { misura: "120 x 120 x 120", prezzo: "8,00 €" },
          ],
          note: "Forma morbida – complemento d’arredo leggero e stabile.",
        },
        {
          nome: "Prismal",
          categoria: "vasi",
          slug: "prismal",
          descrizione:
            "Prismal gioca con piani geometrici e linee nette, creando un vaso contemporaneo e luminoso. PLA bioplastico, sicuro, privo di sostanze tossiche, adatto a camere, uffici e soggiorni.",
          immagini: [
            "/images/Prismal1.webp",
            "/images/Prismal2.webp",
            "/images/Prismal3.webp",
          ],
          dimensioni: [
            { misura: "80 x 80 x 80", prezzo: "3,00 €" },
            { misura: "100 x 100 x 100", prezzo: "4,00 €" },
            { misura: "120 x 120 x 120", prezzo: "6,00 €" },
          ],
          note: "Linee geometriche – ideale per piante dal portamento verticale.",
        },
        {
          nome: "Plysum",
          categoria: "vasi",
          slug: "plysum",
          descrizione:
            "Plysum presenta una forma avvolgente che ricorda un tessuto piegato, con superfici morbide e continue. Realizzato in PLA bioplastico derivato dal mais, completamente atossico e sicuro per gli ambienti interni.",
          immagini: [
            "/images/Plysum1.webp",
            "/images/Plysum2.webp",
            "/images/Plysum3.webp",
          ],
          dimensioni: [
            { misura: "80 x 80 x 80", prezzo: "6,00 €" },
            { misura: "100 x 100 x 100", prezzo: "4,00 €" },
            { misura: "120 x 120 x 120", prezzo: "7,00 €" },
          ],
          note: "Superficie morbida – adatto a piante pendenti o da appoggio.",
        },
        {
          nome: "Plyra",
          categoria: "vasi",
          slug: "plyra",
          descrizione:
            "Plyra si distingue per i tagli lineari che si intrecciano in una struttura sofisticata e leggera. Stampato in PLA ecologico, privo di solventi e indicato per camere, studi e salotti.",
          immagini: [
            "/images/Plyra1.webp",
            "/images/Plyra2.webp",
            "/images/Plyra3.webp",
          ],
          dimensioni: [
            { misura: "80 x 80 x 80", prezzo: "3,00 €" },
            { misura: "100 x 100 x 100", prezzo: "5,00 €" },
            { misura: "120 x 120 x 120", prezzo: "6,00 €" },
          ],
          note: "Design pulito – perfetto per arredi moderni.",
        },
        {
          nome: "Klyra",
          categoria: "vasi",
          slug: "klyra",
          descrizione:
            "Klyra è caratterizzato da una base solida che si sviluppa in una struttura slanciata, creando un’elegante armonia visiva. Realizzato in PLA biodegradabile, materiale sicuro e inodore.",
          immagini: [
            "/images/Klyra1.webp",
            "/images/Klyra2.webp",
            "/images/Klyra3.webp",
          ],
          dimensioni: [
            { misura: "80 x 80 x 80", prezzo: "4,00 €" },
            { misura: "100 x 100 x 100", prezzo: "7,00 €" },
            { misura: "120 x 120 x 120", prezzo: "12,00 €" },
          ],
          note: "Ottimo come complemento decorativo su scaffali o mensole.",
        },
        {
          nome: "Nuvra",
          categoria: "vasi",
          slug: "nuvra",
          descrizione:
            "Nuvra presenta un profilo morbido con volumi arrotondati che evocano leggerezza e calma visiva. Stampato in PLA naturale, atossico e adatto a qualsiasi ambiente domestico.",
          immagini: [
            "/images/Nuvra1.webp",
            "/images/Nuvra2.webp",
            "/images/Nuvra3.webp",
          ],
          dimensioni: [
            { misura: "80 x 80 x 80", prezzo: "5,00 €" },
            { misura: "100 x 100 x 100", prezzo: "8,00 €" },
            { misura: "120 x 120 x 120", prezzo: "12,00 €" },
          ],
          note: "Design morbido – perfetto per ambienti rilassanti e luminosi.",
        },
        {
          nome: "Mellora",
          categoria: "vasi",
          slug: "mellora",
          descrizione:
            "Mellora unisce un’architettura fluida a una geometria silenziosa, rendendolo un vaso essenziale ma raffinato. Bioplastica PLA atossica, sicura per bambini, animali e piante.",
          immagini: [
            "/images/Mellora1.webp",
            "/images/Mellora2.webp",
            "/images/Mellora3.webp",
          ],
          dimensioni: [
            { misura: "80 x 80 x 80", prezzo: "5,00 €" },
            { misura: "100 x 100 x 100", prezzo: "9,00 €" },
            { misura: "120 x 120 x 120", prezzo: "12,00 €" },
          ],
          note: "Forma equilibrata – ideale per composizioni floreali discrete.",
        },
        {
          nome: "Intreccio",
          categoria: "vasi",
          slug: "intreccio",
          descrizione:
            "Intreccio si ispira a trame tessili sovrapposte, trasformando un gioco di linee in un volume elegante e decorativo. Realizzato in PLA bioplastico atossico, perfetto per interni moderni e naturali.",
          immagini: [
            "/images/Intreccio1.webp",
            "/images/Intreccio2.webp",
            "/images/Intreccio3.webp",
          ],
          dimensioni: [
            { misura: "80 x 80 x 80", prezzo: "8,00 €" },
            { misura: "100 x 100 x 100", prezzo: "13,00 €" },
            { misura: "120 x 120 x 120", prezzo: "18,00 €" },
          ],
          note: "Texture intrecciata – ideale come vaso o portaoggetti.",
        },
        {
          nome: "Lynea",
          categoria: "vasi",
          slug: "lynea",
          descrizione:
            "Lynea si distingue per le sue superfici lineari che si sviluppano in altezza, creando un effetto scultoreo sobrio ma autorevole. Prodotto in PLA biodegradabile, sicuro e leggero.",
          immagini: [
            "/images/Lynea1.webp",
            "/images/Lynea2.webp",
            "/images/Lynea3.webp",
          ],
          dimensioni: [
            { misura: "80 x 80 x 80", prezzo: "8,00 €" },
            { misura: "100 x 100 x 100", prezzo: "13,00 €" },
            { misura: "120 x 120 x 120", prezzo: "20,00 €" },
          ],
          note: "Linea pulita – perfetto per piante a stelo lungo.",
        },
        {
          nome: "Helora",
          categoria: "vasi",
          slug: "helora",
          descrizione:
            "Helora interpreta il concetto di equilibrio tra pieni e vuoti, dando vita a un vaso scenografico e armonioso. Stampato in PLA ecologico atossico, adatto anche per camere da letto e studi.",
          immagini: [
            "/images/Helora1.webp",
            "/images/Helora2.webp",
            "/images/Helora3.webp",
          ],
          dimensioni: [
            { misura: "80 x 80 x 80", prezzo: "8,00 €" },
            { misura: "100 x 100 x 100", prezzo: "12,00 €" },
            { misura: "120 x 120 x 120", prezzo: "18,00 €" },
          ],
          note: "Design bilanciato – ideale come complemento estetico.",
        },
        {
          nome: "Kraen",
          categoria: "vasi",
          slug: "kraen",
          descrizione:
            "Kraen presenta un carattere più deciso: superfici sfaccettate e una struttura stabile che lo rende protagonista in ogni ambiente. Materiale PLA biobased, privo di sostanze nocive.",
          immagini: [
            "/images/Kraen1.webp",
            "/images/Kraen2.webp",
            "/images/Kraen3.webp",
          ],
          dimensioni: [
            { misura: "80 x 80 x 80", prezzo: "5,00 €" },
            { misura: "100 x 100 x 100", prezzo: "7,00 €" },
            { misura: "120 x 120 x 120", prezzo: "12,00 €" },
          ],
          note: "Stile deciso – ottimo per spazi moderni.",
        },
        {
          nome: "Etere",
          categoria: "vasi",
          slug: "etere",
          descrizione:
            "Etere è un vaso leggero e sospeso nelle forme, pensato per integrarsi con eleganza in qualsiasi spazio. Bioplastica PLA atossica, completamente sicura per la casa.",
          immagini: [
            "/images/Etere1.webp",
            "/images/Etere2.webp",
            "/images/Etere3.webp",
          ],
          dimensioni: [
            { misura: "80 x 80 x 80", prezzo: "8,00 €" },
            { misura: "100 x 100 x 100", prezzo: "11,00 €" },
            { misura: "120 x 120 x 120", prezzo: "14,00 €" },
          ],
          note: "Forma eterea – ideale per ambienti luminosi e silenziosi.",
        },
      ],

      // ✅ ARMONIA — 1 prezzo (BOX ORO) + tabella ALP
      armonia: [
        {
          nome: "Alenya",
          categoria: "vasi",
          slug: "alenya",
          descrizione:
            "Il vaso Alenya unisce forma compatta e linee equilibrate, ideale per ambienti moderni. Realizzato in PLA ecologico, materiale atossico e biodegradabile.",
          immagini: [
            "/images/alenya1.webp",
            "/images/alenya2.webp",
            "/images/alenya3.webp",
          ],
          prezzo: "8,00 €",
          altezza: "18",
          larghezza: "11",
          profondita: "11",
          note: "Serie Armonia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Aralya",
          categoria: "vasi",
          slug: "aralya",
          descrizione:
            "Aralya presenta un profilo morbido e naturale, ideale per piccoli spazi eleganti. Stampato in PLA atossico e privo di solventi.",
          immagini: [
            "/images/aralya1.webp",
            "/images/aralya2.webp",
            "/images/aralya3.webp",
          ],
          prezzo: "3,00 €",
          altezza: "18",
          larghezza: "9.5",
          profondita: "9.5",
          note: "Serie Armonia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Aurelya",
          categoria: "vasi",
          slug: "aurelya",
          descrizione:
            "Aurelya si distingue per le sue linee delicate e pulite, perfetto come accessorio decorativo in ambienti raffinati. Realizzato in PLA ecologico e sicuro.",
          immagini: [
            "/images/aurelya1.webp",
            "/images/aurelya2.webp",
            "/images/aurelya3.webp",
          ],
          prezzo: "11,00 €",
          altezza: "18",
          larghezza: "7",
          profondita: "7",
          note: "Serie Armonia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Avelyn",
          categoria: "vasi",
          slug: "avelyn",
          descrizione:
            "Avelyn presenta un design più slanciato e leggero, ideale per arredamenti minimal e luminosi. Stampato in PLA biodegradabile.",
          immagini: [
            "/images/avelyn1.webp",
            "/images/avelyn2.webp",
            "/images/avelyn3.webp",
          ],
          prezzo: "4,00 €",
          altezza: "22",
          larghezza: "10",
          profondita: "8",
          note: "Serie Armonia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Celinya",
          categoria: "vasi",
          slug: "celinya",
          descrizione:
            "Celinya mantiene proporzioni morbide e bilanciate, donando armonia agli spazi interni. Prodotto in PLA eco-friendly e riciclabile.",
          immagini: [
            "/images/celinya1.webp",
            "/images/celinya2.webp",
            "/images/celinya3.webp",
          ],
          prezzo: "8,00 €",
          altezza: "18",
          larghezza: "11",
          profondita: "11",
          note: "Serie Armonia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Elisya",
          categoria: "vasi",
          slug: "elisya",
          descrizione:
            "Elisya è un vaso più ampio e scenografico, ideale come centrotavola o complemento d’arredo. Realizzato in PLA ecologico e inodore.",
          immagini: [
            "/images/elisya1.webp",
            "/images/elisya2.webp",
            "/images/elisya3.webp",
          ],
          prezzo: "15,00 €",
          altezza: "20",
          larghezza: "14",
          profondita: "14",
          note: "Serie Armonia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Elyana",
          categoria: "vasi",
          slug: "elyana",
          descrizione:
            "Elyana unisce delicatezza visiva e compattezza, perfetto per piccoli fiori secchi o piante grasse. PLA atossico e sicuro per la casa.",
          immagini: [
            "/images/elyana1.webp",
            "/images/elyana2.webp",
            "/images/elyana3.webp",
          ],
          prezzo: "1,00 €",
          altezza: "18",
          larghezza: "12",
          profondita: "9.5",
          note: "Serie Armonia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Elyndra",
          categoria: "vasi",
          slug: "elyndra",
          descrizione:
            "Elyndra offre una forma essenziale con accenti sottili, ideale per ambienti moderni e ordinati. PLA biodegradabile e privo di BPA.",
          immagini: [
            "/images/elyndra1.webp",
            "/images/elyndra2.webp",
            "/images/elyndra3.webp",
          ],
          prezzo: "3,00 €",
          altezza: "18",
          larghezza: "5",
          profondita: "6.5",
          note: "Serie Armonia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Harmira",
          categoria: "vasi",
          slug: "harmira",
          descrizione:
            "Harmira esprime solidità ed equilibrio grazie alla sua struttura stabile e proporzionata. Stampato in PLA ecologico, sicuro per piante e ambienti interni.",
          immagini: [
            "/images/harmira1.webp",
            "/images/harmira2.webp",
            "/images/harmira3.webp",
          ],
          prezzo: "16,00 €",
          altezza: "18",
          larghezza: "10",
          profondita: "10",
          note: "Serie Armonia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Lariva",
          categoria: "vasi",
          slug: "lariva",
          descrizione:
            "Lariva è caratterizzato da linee semplici e morbide che lo rendono versatile in ogni contesto. Materiale PLA atossico e riciclabile.",
          immagini: [
            "/images/lariva1.webp",
            "/images/lariva2.webp",
            "/images/lariva3.webp",
          ],
          prezzo: "7,00 €",
          altezza: "18",
          larghezza: "8",
          profondita: "8.5",
          note: "Serie Armonia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Levira",
          categoria: "vasi",
          slug: "levira",
          descrizione:
            "Levira ha una forma equilibrata e discreta, perfetta per scrivanie, mensole e comodini. Stampato in PLA naturale e leggero.",
          immagini: [
            "/images/levira1.webp",
            "/images/levira2.webp",
            "/images/levira3.webp",
          ],
          prezzo: "6,00 €",
          altezza: "18",
          larghezza: "8.5",
          profondita: "8.5",
          note: "Serie Armonia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Liora",
          categoria: "vasi",
          slug: "liora",
          descrizione:
            "Liora presenta una forma pulita e luminosa, perfetta per ambienti moderni ed essenziali. Realizzato in PLA biodegradabile.",
          immagini: [
            "/images/liora1.webp",
            "/images/liora2.webp",
            "/images/liora3.webp",
          ],
          prezzo: "3,00 €",
          altezza: "18",
          larghezza: "9",
          profondita: "9",
          note: "Serie Armonia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Melys",
          categoria: "vasi",
          slug: "melys",
          descrizione:
            "Melys combina dimensioni contenute e linee dolci, ideale per aggiungere un tocco elegante su tavoli o scaffali. PLA atossico e sicuro.",
          immagini: [
            "/images/melys1.webp",
            "/images/melys2.webp",
            "/images/melys3.webp",
          ],
          prezzo: "4,00 €",
          altezza: "18",
          larghezza: "7.5",
          profondita: "7.5",
          note: "Serie Armonia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Miralya",
          categoria: "vasi",
          slug: "miralya",
          descrizione:
            "Miralya offre un volume più generoso e raffinato, ideale come pezzo decorativo da esposizione. Prodotto in PLA ecologico.",
          immagini: [
            "/images/miralya1.webp",
            "/images/miralya2.webp",
            "/images/miralya3.webp",
          ],
          prezzo: "7,00 €",
          altezza: "18",
          larghezza: "12",
          profondita: "12",
          note: "Serie Armonia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Nelyra",
          categoria: "vasi",
          slug: "nelyra",
          descrizione:
            "Nelyra è più compatto nelle dimensioni, perfetto per spazi ristretti e dettagli d’arredo. PLA biodegradabile e leggero.",
          immagini: [
            "/images/nelyra1.webp",
            "/images/nelyra2.webp",
            "/images/nelyra3.webp",
          ],
          prezzo: "7,00 €",
          altezza: "16",
          larghezza: "8.5",
          profondita: "8.5",
          note: "Serie Armonia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Orilys",
          categoria: "vasi",
          slug: "orilys",
          descrizione:
            "Orilys abbina proporzioni morbide e struttura stabile, ideale per piccoli fiori o piante da interno. PLA atossico e inodore.",
          immagini: [
            "/images/orilys1.webp",
            "/images/orilys2.webp",
            "/images/orilys3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "18",
          larghezza: "9",
          profondita: "9",
          note: "Serie Armonia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Selyra",
          categoria: "vasi",
          slug: "selyra",
          descrizione:
            "Selyra è un vaso morbido e compatto, pensato per completare arredi con uno stile sobrio. Stampato in PLA sostenibile.",
          immagini: [
            "/images/selyra1.webp",
            "/images/selyra2.webp",
            "/images/selyra3.webp",
          ],
          prezzo: "5,00 €",
          altezza: "18",
          larghezza: "8.5",
          profondita: "8.5",
          note: "Serie Armonia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Serelys",
          categoria: "vasi",
          slug: "serelys",
          descrizione:
            "Serelys offre una forma semplice e pulita, perfetta per spazi ordinati e dallo stile essenziale. Prodotto in PLA ecologico.",
          immagini: [
            "/images/serelys1.webp",
            "/images/serelys2.webp",
            "/images/serelys3.webp",
          ],
          prezzo: "6,00 €",
          altezza: "16",
          larghezza: "8",
          profondita: "8",
          note: "Serie Armonia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Silvya",
          categoria: "vasi",
          slug: "silvya",
          descrizione:
            "Silvya si distingue per la sua struttura equilibrata e moderna, perfetta come complemento d’arredo elegante. PLA atossico e riciclabile.",
          immagini: [
            "/images/silvya1.webp",
            "/images/silvya2.webp",
            "/images/silvya3.webp",
          ],
          prezzo: "10,00 €",
          altezza: "16",
          larghezza: "10",
          profondita: "10",
          note: "Serie Armonia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Velina",
          categoria: "vasi",
          slug: "velina",
          descrizione:
            "Velina unisce armonia visiva e proporzioni dolci, ideale per interni curati e di gusto. Realizzato in PLA biodegradabile e sicuro.",
          immagini: [
            "/images/velina1.webp",
            "/images/velina2.webp",
            "/images/velina3.webp",
          ],
          prezzo: "7,00 €",
          altezza: "18",
          larghezza: "9.5",
          profondita: "9.5",
          note: "Serie Armonia – realizzato in PLA atossico e biodegradabile.",
        },
      ],

      // ✅ SPIRALIA — 1 prezzo (BOX ORO) + tabella ALP
      spiralia: [
        {
          nome: "Aelys",
          categoria: "vasi",
          slug: "aelys",
          descrizione:
            "Il vaso Aelys presenta proporzioni delicate e bilanciate, ideale per interni moderni e raffinati.",
          immagini: [
            "/images/aelys1.webp",
            "/images/aelys2.webp",
            "/images/aelys3.webp",
          ],
          prezzo: "6,00 €",
          altezza: "17",
          larghezza: "9.5",
          profondita: "9.5",
          note: "Serie Spiralia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Auren",
          categoria: "vasi",
          slug: "auren",
          descrizione:
            "Auren unisce un profilo compatto a linee morbide e armoniose, perfetto per ogni ambiente domestico.",
          immagini: [
            "/images/auren1.webp",
            "/images/auren2.webp",
            "/images/auren3.webp",
          ],
          prezzo: "6,00 €",
          altezza: "19",
          larghezza: "15",
          profondita: "15",
          note: "Serie Spiralia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Auvra",
          categoria: "vasi",
          slug: "auvra",
          descrizione:
            "Auvra si distingue per le sue curve morbide e linee fluide, pensato per spazi eleganti e ordinati.",
          immagini: [
            "/images/auvra1.webp",
            "/images/auvra2.webp",
            "/images/auvra3.webp",
          ],
          prezzo: "6,00 €",
          altezza: "18",
          larghezza: "9.5",
          profondita: "9.5",
          note: "Serie Spiralia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Averia",
          categoria: "vasi",
          slug: "averia",
          descrizione:
            "Averia combina superfici levigate e struttura solida, ideale come centrotavola o vaso decorativo.",
          immagini: [
            "/images/averia1.webp",
            "/images/averia2.webp",
            "/images/averia3.webp",
          ],
          prezzo: "9,00 €",
          altezza: "15.5",
          larghezza: "16",
          profondita: "16",
          note: "Serie Spiralia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Coralyn",
          categoria: "vasi",
          slug: "coralyn",
          descrizione:
            "Coralyn offre un design compatto e luminoso, perfetto per piccoli fiori o spazi contenuti.",
          immagini: [
            "/images/coralyn1.webp",
            "/images/coralyn2.webp",
            "/images/coralyn3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "15",
          larghezza: "10",
          profondita: "10",
          note: "Serie Spiralia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Elaris",
          categoria: "vasi",
          slug: "elaris",
          descrizione:
            "Elaris si distingue per la sua struttura ampia e proporzionata, adatta a composizioni più generose.",
          immagini: [
            "/images/elaris1.webp",
            "/images/elaris2.webp",
            "/images/elaris3.webp",
          ],
          prezzo: "5,00 €",
          altezza: "25",
          larghezza: "22",
          profondita: "22",
          note: "Serie Spiralia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Ephyra",
          categoria: "vasi",
          slug: "ephyra",
          descrizione:
            "Ephyra unisce semplicità e armonia, perfetto per ambienti minimal e naturali.",
          immagini: [
            "/images/ephyra1.webp",
            "/images/ephyra2.webp",
            "/images/ephyra3.webp",
          ],
          prezzo: "4,00 €",
          altezza: "15",
          larghezza: "11",
          profondita: "11",
          note: "Serie Spiralia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Ilyss",
          categoria: "vasi",
          slug: "ilyss",
          descrizione:
            "Ilyss presenta un design elegante con curvature bilanciate, adatto a decorazioni sobrie e moderne.",
          immagini: [
            "/images/ilyss1.webp",
            "/images/ilyss2.webp",
            "/images/ilyss3.webp",
          ],
          prezzo: "4,00 €",
          altezza: "15",
          larghezza: "14.5",
          profondita: "14.5",
          note: "Serie Spiralia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Lyssra",
          categoria: "vasi",
          slug: "lyssra",
          descrizione:
            "Lyssra ha una forma slanciata e luminosa, perfetta come vaso da appoggio o elemento d’accento.",
          immagini: [
            "/images/lyssra1.webp",
            "/images/lyssra2.webp",
            "/images/lyssra3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "23",
          larghezza: "14",
          profondita: "14",
          note: "Serie Spiralia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Malora",
          categoria: "vasi",
          slug: "malora",
          descrizione:
            "Malora si caratterizza per la sua solidità e compattezza, ideale per piante piccole e grasse.",
          immagini: [
            "/images/malora1.webp",
            "/images/malora2.webp",
            "/images/malora3.webp",
          ],
          prezzo: "4,00 €",
          altezza: "15",
          larghezza: "16",
          profondita: "16",
          note: "Serie Spiralia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Norya",
          categoria: "vasi",
          slug: "norya",
          descrizione:
            "Norya unisce eleganza e presenza scenica, con proporzioni generose e stile raffinato.",
          immagini: [
            "/images/norya1.webp",
            "/images/norya2.webp",
            "/images/norya3.webp",
          ],
          prezzo: "9,00 €",
          altezza: "25",
          larghezza: "13.5",
          profondita: "13.5",
          note: "Serie Spiralia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Orren",
          categoria: "vasi",
          slug: "orren",
          descrizione:
            "Orren propone una forma essenziale e moderna, ideale per piccoli ambienti e decorazioni sobrie.",
          immagini: [
            "/images/orren1.webp",
            "/images/orren2.webp",
            "/images/orren3.webp",
          ],
          prezzo: "6,00 €",
          altezza: "15",
          larghezza: "10",
          profondita: "10",
          note: "Serie Spiralia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Orvya",
          categoria: "vasi",
          slug: "orvya",
          descrizione:
            "Orvya presenta linee pulite e proporzioni armoniche, adatto per composizioni eleganti e minimali.",
          immagini: [
            "/images/orvya1.webp",
            "/images/orvya2.webp",
            "/images/orvya3.webp",
          ],
          prezzo: "7,00 €",
          altezza: "15",
          larghezza: "12",
          profondita: "12",
          note: "Serie Spiralia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Seralys",
          categoria: "vasi",
          slug: "seralys",
          descrizione:
            "Seralys è caratterizzato da un design simmetrico e geometrico, elegante e compatto.",
          immagini: [
            "/images/seralys1.webp",
            "/images/seralys2.webp",
            "/images/seralys3.webp",
          ],
          prezzo: "3,00 €",
          altezza: "15",
          larghezza: "15",
          profondita: "15",
          note: "Serie Spiralia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Solyn",
          categoria: "vasi",
          slug: "solyn",
          descrizione:
            "Solyn coniuga semplicità e grazia, perfetto per interni moderni e luminosi.",
          immagini: [
            "/images/solyn1.webp",
            "/images/solyn2.webp",
            "/images/solyn3.webp",
          ],
          prezzo: "5,00 €",
          altezza: "16",
          larghezza: "13",
          profondita: "13",
          note: "Serie Spiralia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Soriel",
          categoria: "vasi",
          slug: "soriel",
          descrizione:
            "Soriel è un vaso dal profilo fluido e armonioso, adatto per ambienti contemporanei.",
          immagini: [
            "/images/soriel1.webp",
            "/images/soriel2.webp",
            "/images/soriel3.webp",
          ],
          prezzo: "4,00 €",
          altezza: "17.5",
          larghezza: "16.5",
          profondita: "16.5",
          note: "Serie Spiralia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Synera",
          categoria: "vasi",
          slug: "synera",
          descrizione:
            "Synera combina compattezza e linee pulite, ideale per spazi ridotti o arredi minimali.",
          immagini: [
            "/images/synera1.webp",
            "/images/synera2.webp",
            "/images/synera3.webp",
          ],
          prezzo: "3,00 €",
          altezza: "18",
          larghezza: "8",
          profondita: "8",
          note: "Serie Spiralia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Valorae",
          categoria: "vasi",
          slug: "valorae",
          descrizione:
            "Valorae esprime eleganza e simmetria, con proporzioni bilanciate e stile essenziale.",
          immagini: [
            "/images/valorae1.webp",
            "/images/valorae2.webp",
            "/images/valorae3.webp",
          ],
          prezzo: "7,00 €",
          altezza: "18",
          larghezza: "11",
          profondita: "11",
          note: "Serie Spiralia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Valyn",
          categoria: "vasi",
          slug: "valyn",
          descrizione:
            "Valyn è compatto e lineare, perfetto per piccoli spazi o composizioni discrete.",
          immagini: [
            "/images/valyn1.webp",
            "/images/valyn2.webp",
            "/images/valyn3.webp",
          ],
          prezzo: "3,00 €",
          altezza: "15",
          larghezza: "8",
          profondita: "8",
          note: "Serie Spiralia – realizzato in PLA atossico e biodegradabile.",
        },
        {
          nome: "Vynora",
          categoria: "vasi",
          slug: "vynora",
          descrizione:
            "Vynora unisce forme morbide e proporzioni perfette, ideale per decorazioni sobrie ed eleganti.",
          immagini: [
            "/images/vynora1.webp",
            "/images/vynora2.webp",
            "/images/vynora3.webp",
          ],
          prezzo: "8,00 €",
          altezza: "17.5",
          larghezza: "10",
          profondita: "10",
          note: "Serie Spiralia – realizzato in PLA atossico e biodegradabile.",
        },
      ],
    },
  },

  // 💍 BOMBONIERE
  bomboniere: {
    nome: "Bomboniere",
    sottocategorie: {
      "ricordi-preziosi": [
        {
          nome: "Cuore Reale",
          categoria: "bomboniere",
          slug: "cuore-reale",
          descrizione:
            "Elegante bomboniera in stile classico con finitura dorata. Perfetta per matrimoni, anniversari ed eventi formali.",
          immagini: [
            "/images/bomboniera1.jpg",
            "/images/bomboniera2.jpg",
            "/images/bomboniera3.jpg",
          ],
          prezzo: "9,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],
      // ✅ VASI D’AUTORE — derivati dalla collezione Atelier (Bomboniere)
      "vasi-d-autore": [
        {
          nome: "SoftCube",
          categoria: "bomboniere",
          slug: "softcube",
          descrizione:
            "Mini vaso SoftCube derivato dalla collezione Atelier, versione bomboniera compatta e raffinata.",
          immagini: [
            "/images/SoftCube1.webp",
            "/images/SoftCube2.webp",
            "/images/SoftCube3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "5.5",
          larghezza: "5.5",
          profondita: "5.5",
        },
        {
          nome: "Lithora",
          categoria: "bomboniere",
          slug: "lithora",
          descrizione:
            "Mini Lithora in formato bomboniera, ispirato alle linee eleganti dell’originale Atelier.",
          immagini: [
            "/images/Lithora1.webp",
            "/images/Lithora2.webp",
            "/images/Lithora3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "5.5",
          larghezza: "5.5",
          profondita: "5.5",
        },
        {
          nome: "Cushar",
          categoria: "bomboniere",
          slug: "cushar",
          descrizione:
            "Versione mini del vaso Cushar, dal profilo morbido e decorativo, ideale come bomboniera moderna.",
          immagini: [
            "/images/Cushar1.webp",
            "/images/Cushar2.webp",
            "/images/Cushar3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "5.5",
          larghezza: "5.5",
          profondita: "5.5",
        },
        {
          nome: "Aquilys",
          categoria: "bomboniere",
          slug: "aquilys",
          descrizione:
            "Aquilys in miniatura, elegante bomboniera ispirata alle forme fluide dell’acqua.",
          immagini: [
            "/images/Aquilys1.webp",
            "/images/Aquilys2.webp",
            "/images/Aquilys3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "5.5",
          larghezza: "5.5",
          profondita: "5.5",
        },
        {
          nome: "Celora",
          categoria: "bomboniere",
          slug: "celora",
          descrizione:
            "Piccolo vaso Celora, bomboniera delicata e luminosa con la stessa raffinatezza dell’originale.",
          immagini: [
            "/images/Celora1.webp",
            "/images/Celora2.webp",
            "/images/Celora3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "5.5",
          larghezza: "5.5",
          profondita: "5.5",
        },
        {
          nome: "Velora",
          categoria: "bomboniere",
          slug: "velora",
          descrizione:
            "Vaso Velora mini, con la sua spirale leggera e armoniosa, perfetta come bomboniera elegante.",
          immagini: [
            "/images/Velora1.webp",
            "/images/Velora2.webp",
            "/images/Velora3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "5.5",
          larghezza: "5.5",
          profondita: "5.5",
        },
        {
          nome: "Spirora",
          categoria: "bomboniere",
          slug: "spirora",
          descrizione:
            "Spirora in formato ridotto, bomboniera raffinata con spirale decorativa ispirata alla collezione Atelier.",
          immagini: [
            "/images/Spirora1.webp",
            "/images/Spirora2.webp",
            "/images/Spirora3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "5.5",
          larghezza: "5.5",
          profondita: "5.5",
        },
        {
          nome: "Rosyn",
          categoria: "bomboniere",
          slug: "rosyn",
          descrizione:
            "Mini Rosyn, dal design floreale ispirato al bocciolo di rosa, bomboniera dolce e moderna.",
          immagini: [
            "/images/Rosyn1.webp",
            "/images/Rosyn2.webp",
            "/images/Rosyn3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "5.5",
          larghezza: "5.5",
          profondita: "5.5",
        },
        {
          nome: "Puffra",
          categoria: "bomboniere",
          slug: "puffra",
          descrizione:
            "Versione mini del vaso Puffra, dalle linee morbide e voluminose, ideale come bomboniera simpatica e moderna.",
          immagini: [
            "/images/Puffra1.webp",
            "/images/Puffra2.webp",
            "/images/Puffra3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "5.5",
          larghezza: "5.5",
          profondita: "5.5",
        },
        {
          nome: "Prismal",
          categoria: "bomboniere",
          slug: "prismal",
          descrizione:
            "Piccolo Prismal, reinterpretato come bomboniera geometrica e luminosa per eventi eleganti.",
          immagini: [
            "/images/Prismal1.webp",
            "/images/Prismal2.webp",
            "/images/Prismal3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "5.5",
          larghezza: "5.5",
          profondita: "5.5",
        },
        {
          nome: "Plysum",
          categoria: "bomboniere",
          slug: "plysum",
          descrizione:
            "Vaso Plysum in formato bomboniera, miniatura con la stessa morbidezza delle linee originali.",
          immagini: [
            "/images/Plysum1.webp",
            "/images/Plysum2.webp",
            "/images/Plysum3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "5.5",
          larghezza: "5.5",
          profondita: "5.5",
        },
        {
          nome: "Plyra",
          categoria: "bomboniere",
          slug: "plyra",
          descrizione:
            "Plyra mini, bomboniera geometrica e sofisticata, con le stesse linee del vaso Atelier originale.",
          immagini: [
            "/images/Plyra1.webp",
            "/images/Plyra2.webp",
            "/images/Plyra3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "5.5",
          larghezza: "5.5",
          profondita: "5.5",
        },
        {
          nome: "Klyra",
          categoria: "bomboniere",
          slug: "klyra",
          descrizione:
            "Klyra in versione bomboniera, dalle linee eleganti e proporzioni compatte, perfetta come segnaposto.",
          immagini: [
            "/images/Klyra1.webp",
            "/images/Klyra2.webp",
            "/images/Klyra3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "5.5",
          larghezza: "5.5",
          profondita: "5.5",
        },
        {
          nome: "Nuvra",
          categoria: "bomboniere",
          slug: "nuvra",
          descrizione:
            "Mini Nuvra, versione bomboniera morbida e armoniosa, ideale per eventi raffinati.",
          immagini: [
            "/images/Nuvra1.webp",
            "/images/Nuvra2.webp",
            "/images/Nuvra3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "5.5",
          larghezza: "5.5",
          profondita: "5.5",
        },
        {
          nome: "Mellora",
          categoria: "bomboniere",
          slug: "mellora",
          descrizione:
            "Vaso Mellora in formato bomboniera, compatto e bilanciato, perfetto come ricordo elegante.",
          immagini: [
            "/images/Mellora1.webp",
            "/images/Mellora2.webp",
            "/images/Mellora3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "5.5",
          larghezza: "5.5",
          profondita: "5.5",
        },
        {
          nome: "Intreccio",
          categoria: "bomboniere",
          slug: "intreccio",
          descrizione:
            "Intreccio mini, bomboniera con texture tessile elegante, ideale per matrimoni e cerimonie.",
          immagini: [
            "/images/Intreccio1.webp",
            "/images/Intreccio2.webp",
            "/images/Intreccio3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "5.5",
          larghezza: "5.5",
          profondita: "5.5",
        },
        {
          nome: "Lynea",
          categoria: "bomboniere",
          slug: "lynea",
          descrizione:
            "Lynea bomboniera, mini vaso scultoreo con linee sobrie e verticali, per un tocco moderno.",
          immagini: [
            "/images/Lynea1.webp",
            "/images/Lynea2.webp",
            "/images/Lynea3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "5.5",
          larghezza: "5.5",
          profondita: "5.5",
        },
        {
          nome: "Helora",
          categoria: "bomboniere",
          slug: "helora",
          descrizione:
            "Helora mini, bomboniera armoniosa con pieni e vuoti bilanciati, per doni eleganti e moderni.",
          immagini: [
            "/images/Helora1.webp",
            "/images/Helora2.webp",
            "/images/Helora3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "5.5",
          larghezza: "5.5",
          profondita: "5.5",
        },
        {
          nome: "Kraen",
          categoria: "bomboniere",
          slug: "kraen",
          descrizione:
            "Kraen in miniatura, versione bomboniera dal carattere deciso e linee sfaccettate.",
          immagini: [
            "/images/Kraen1.webp",
            "/images/Kraen2.webp",
            "/images/Kraen3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "5.5",
          larghezza: "5.5",
          profondita: "5.5",
        },
        {
          nome: "Etere",
          categoria: "bomboniere",
          slug: "etere",
          descrizione:
            "Etere mini, bomboniera eterea e leggera, reinterpretazione elegante del vaso originale.",
          immagini: [
            "/images/Etere1.webp",
            "/images/Etere2.webp",
            "/images/Etere3.webp",
          ],
          prezzo: "2,00 €",
          altezza: "5.5",
          larghezza: "5.5",
          profondita: "5.5",
        },
      ],
    },
  },

  // 🧸 GIOCATTOLI
  giocattoli: {
    nome: "Giocattoli",
    sottocategorie: {
      personaggi: [
        {
          nome: "VEORA Classic",
          slug: "veora-classic",
          descrizione:
            "Mini personaggio 3D stampato in PLA con finitura opaca, ideale per collezione o decorazione.",
          immagini: [
            "/images/personaggio-veora-classic.jpg",
            "/images/personaggio-veora-classic2.jpg",
            "/images/personaggio-veora-classic3.jpg",
          ],
          prezzo: "12,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],

      miniature: [
        {
          nome: "Fantasy Mini",
          slug: "fantasy-mini",
          descrizione:
            "Miniatura in resina ad alta definizione, perfetta per modellismo e collezione.",
          immagini: [
            "/images/miniatura-fantasy.jpg",
            "/images/miniatura-fantasy2.jpg",
            "/images/miniatura-fantasy3.jpg",
          ],
          prezzo: "14,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],

      marvel: [
        {
          nome: "Iron Man Limited",
          slug: "iron-man-limited",
          descrizione:
            "Riproduzione in scala 1:20 di Iron Man, dettagliata e verniciata a mano.",
          immagini: [
            "/images/ironman.jpg",
            "/images/ironman2.jpg",
            "/images/ironman3.jpg",
          ],
          prezzo: "24,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],

      "dc-comics": [
        {
          nome: "Batman Dark",
          slug: "batman-dark",
          descrizione:
            "Statua Batman Dark Edition in PLA nero satinato, stile fumetto classico.",
          immagini: [
            "/images/batman-dark-edition.jpg",
            "/images/batman-dark-edition2.jpg",
            "/images/batman-dark-edition3.jpg",
          ],
          prezzo: "22,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],

      "one-piece": [
        {
          nome: "Logo One Piece",
          slug: "logo-one-piece-1",
          descrizione:
            "Logo One Piece in stampa 3D, versione compatta con finitura a rilievo, ideale per collezionisti e amanti della saga.",
          immagini: [
            "/images/LogoOnePiece1.webp",
            "/images/LogoOnePiece2.webp",
            "/images/LogoOnePiece3.webp",
          ],
          prezzo: "26,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],

      "looney-tunes": [
        {
          nome: "Gatto Silvestro",
          slug: "gatto-silvestro",
          descrizione:
            "Iconico personaggio Looney Tunes in stampa 3D lucida, perfetto per collezione o scrivania.",
          immagini: [
            "/images/GattoSilvestro1.webp",
            "/images/GattoSilvestro2.webp",
            "/images/GattoSilvestro3.webp",
          ],
          prezzo: "19,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],

      disney: [
        {
          nome: "Topolino Classic",
          slug: "topolino-classic",
          descrizione:
            "Mini statua di Topolino in PLA colorato, perfetta per bambini e collezionisti.",
          immagini: [
            "/images/topolino.jpg",
            "/images/topolino2.jpg",
            "/images/topolino3.jpg",
          ],
          prezzo: "19,90 €",
          altezza: "50",
          larghezza: "50",
          profondita: "50",
        },
      ],
    },
  },
};

// ✅ ESPORTAZIONE
export default CATALOG;
