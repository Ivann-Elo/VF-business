import { useState } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { VehiculePage } from "./pages/VehiculePage";
import { DevisPage } from "./pages/DevisPage";
import { AboutPage } from "./pages/AboutPage";
import { MentionsLegalesPage } from "./pages/MentionsLegalesPage";
import { ConfidentialitePage } from "./pages/ConfidentialitePage";
import { CookieBanner } from "./components/layout/CookieBanner";
import type { Page, Cols } from "./types";

type Viewport = "desktop" | "tablet" | "mobile";

const VIEWPORTS: Record<Viewport, { w: number; label: string }> = {
  desktop: { w: 1280, label: "Desktop" },
  tablet: { w: 840, label: "Tablette" },
  mobile: { w: 390, label: "Mobile" },
};

export default function App() {
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [page, setPage] = useState<Page>("home");

  const isMobile = viewport === "mobile";
  const cols: Cols = viewport === "desktop" ? "3" : viewport === "tablet" ? "2" : "1";

  const handleNav = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0 });
  };

  const renderPage = () => {
    switch (page) {
      case "home":     return <HomePage cols={cols} onNav={handleNav} />;
      case "services": return <ServicesPage cols={cols} onNav={handleNav} />;
      case "vehicule": return <VehiculePage cols={cols} onNav={handleNav} />;
      case "devis":    return <DevisPage cols={cols} />;
      case "about":             return <AboutPage cols={cols} onNav={handleNav} />;
      case "mentions-legales":  return <MentionsLegalesPage />;
      case "confidentialite":   return <ConfidentialitePage />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col">
      {/* Barre de contrôle du prototype */}
      <div className="sticky top-0 z-30 bg-noir border-b border-gold/30 text-white px-5 py-3 flex items-center justify-between flex-wrap gap-3">

        {/* Sélecteur viewport */}
        <div className="flex items-center gap-1 border border-gold/30 p-1">
          {(Object.keys(VIEWPORTS) as Viewport[]).map((v) => (
            <button
              key={v}
              onClick={() => setViewport(v)}
              className={`px-3 py-2 text-[10px] uppercase tracking-[0.15em] transition-all ${
                viewport === v ? "gold-gradient text-noir" : "text-neutral-400 hover:text-gold"
              }`}
            >
              {VIEWPORTS[v].label} · {VIEWPORTS[v].w}px
            </button>
          ))}
        </div>

        {/* Sélecteur page */}
        <div className="flex gap-1 flex-wrap">
          {([
            ["home",             "Accueil"],
            ["services",         "Services"],
            ["vehicule",         "Véhicule"],
            ["devis",            "Devis"],
            ["about",            "À propos"],
            ["mentions-legales", "Mentions légales"],
            ["confidentialite",  "Confidentialité"],
          ] as [Page, string][]).map(([id, label], i) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={`px-3 py-2 text-[10px] uppercase tracking-[0.15em] border transition-all ${
                page === id
                  ? "border-gold text-gold bg-gold/10"
                  : "border-neutral-800 text-neutral-500 hover:text-gold hover:border-gold/40"
              }`}
            >
              0{i + 1} · {label}
            </button>
          ))}
        </div>
      </div>

      {/* Zone de prévisualisation */}
      <div className="flex-1 flex justify-center p-4 md:p-8 overflow-auto bg-gradient-to-br from-black via-neutral-950 to-black">
        <div
          className="@container bg-noir shadow-2xl border border-gold/20 transition-all duration-300 relative"
          style={{ width: VIEWPORTS[viewport].w, maxWidth: "100%", boxShadow: "0 25px 80px rgba(201,169,97,0.1)" }}
        >
          <Header current={page} onNav={handleNav} isMobile={isMobile} />
          {renderPage()}
          <Footer onNav={handleNav} isMobile={isMobile} />
          <CookieBanner onNav={handleNav} isMobile={isMobile} />

          {isMobile && page !== "devis" && (
            <div className="sticky bottom-0 left-0 right-0 z-10">
              <button
                onClick={() => handleNav("devis")}
                className="w-full gold-gradient text-noir py-4 text-xs uppercase tracking-[0.2em] border-t border-gold"
              >
                Demander un devis
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
