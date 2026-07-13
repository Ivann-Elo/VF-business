import { useState } from "react";
import type { Page } from "../../types";

export function Header({
  current,
  onNav,
}: {
  current: Page;
  onNav: (p: Page) => void;
}) {
  const links: { id: Page; label: string }[] = [
    { id: "home", label: "Accueil" },
    { id: "services", label: "Services" },
    { id: "vehicule", label: "Véhicule" },
    { id: "about", label: "À propos" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 bg-noir/95 backdrop-blur-md border-b border-gold/20">
      <div className="flex items-center justify-between px-4 md:px-10 py-4">
        <button onClick={() => onNav("home")} className="flex items-center gap-3">
          <div className="h-10 flex items-center justify-center">
            <img src="/images/LogoVFbusinesS.png" alt="VF Business" className="h-full w-auto object-contain" />
          </div>
        </button>

        <nav className="hidden md:flex gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => onNav(l.id)}
              className={`text-xs uppercase tracking-[0.2em] transition-colors relative py-2 ${
                current === l.id ? "text-gold" : "text-neutral-300 hover:text-gold"
              }`}
            >
              {l.label}
              {current === l.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold" />
              )}
            </button>
          ))}
        </nav>

        <button
          onClick={() => onNav("devis")}
          className="hidden md:inline-flex btn-gold px-5 py-2.5 text-xs uppercase"
        >
          Demander un devis
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 border border-gold/40 flex flex-col justify-center items-center gap-1.5"
        >
          <span className="w-5 h-px bg-gold" />
          <span className="w-5 h-px bg-gold" />
          <span className="w-5 h-px bg-gold" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gold/20 bg-noir-soft">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => {
                onNav(l.id);
                setOpen(false);
              }}
              className="block w-full text-left px-5 py-4 text-xs uppercase tracking-[0.2em] text-neutral-300 border-b border-neutral-800 hover:text-gold"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => {
              onNav("devis");
              setOpen(false);
            }}
            className="block w-full text-left px-5 py-4 text-xs uppercase tracking-[0.2em] gold-gradient text-noir"
          >
            Demander un devis
          </button>
        </div>
      )}
    </header>
  );
}
