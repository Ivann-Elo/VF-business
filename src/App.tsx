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
import type { Page } from "./types";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const handleNav = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0 });
  };

  const renderPage = () => {
    switch (page) {
      case "home":              return <HomePage onNav={handleNav} />;
      case "services":          return <ServicesPage onNav={handleNav} />;
      case "vehicule":          return <VehiculePage onNav={handleNav} />;
      case "devis":             return <DevisPage />;
      case "about":             return <AboutPage onNav={handleNav} />;
      case "mentions-legales":  return <MentionsLegalesPage />;
      case "confidentialite":   return <ConfidentialitePage />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-noir flex flex-col">
      <Header current={page} onNav={handleNav} />
      {renderPage()}
      <Footer onNav={handleNav} />
      <CookieBanner onNav={handleNav} />

      {page !== "devis" && (
        <div className="md:hidden sticky bottom-0 left-0 right-0 z-10">
          <button
            onClick={() => handleNav("devis")}
            className="w-full gold-gradient text-noir py-4 text-xs uppercase tracking-[0.2em] border-t border-gold"
          >
            Demander un devis
          </button>
        </div>
      )}
    </div>
  );
}
