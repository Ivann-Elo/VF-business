import { useState, useEffect } from "react";
import type { Page } from "../../types";

export function CookieBanner({ onNav, isMobile }: { onNav: (p: Page) => void; isMobile: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("vf_cookie_consent")) setVisible(true);
  }, []);

  const accept = () => { localStorage.setItem("vf_cookie_consent", "accepted"); setVisible(false); };
  const refuse = () => { localStorage.setItem("vf_cookie_consent", "refused");  setVisible(false); };

  if (!visible) return null;

  return (
    /* Overlay fixe — reste centré au scroll */
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

      {/* Carte popup */}
      <div
        className="relative bg-noir-card border border-gold/30 overflow-hidden"
        style={{
          width: isMobile ? "calc(100% - 2.5rem)" : 520,
        }}
      >
        {/* Lueur dorée décorative */}
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{
          backgroundImage: "radial-gradient(ellipse at top left, rgba(201,169,97,0.35) 0%, transparent 60%)"
        }} />

        <div className="relative p-6" style={{ padding: isMobile ? "1.25rem 1.25rem 1.5rem" : "2rem" }}>

          {/* En-tête */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-gold text-xl">◈</span>
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Cookies & confidentialité</div>
              <div className="text-[10px] text-neutral-500 tracking-wider mt-0.5">RGPD — VF Business</div>
            </div>
          </div>

          <div className="gold-divider mb-4" />

          {/* Texte */}
          <p className="text-xs text-neutral-400 leading-relaxed mb-6">
            Nous utilisons des cookies techniques pour assurer le bon fonctionnement du site.
            Aucun cookie publicitaire n'est utilisé.{" "}
            <button
              onClick={() => { onNav("confidentialite"); setVisible(false); }}
              className="text-gold underline hover:text-gold-light transition-colors"
            >
              Politique de confidentialité
            </button>
          </p>

          {/* Boutons */}
          <div className="flex gap-3" style={{ flexDirection: isMobile ? "column" : "row" }}>
            <button
              onClick={refuse}
              className="btn-outline-gold py-3 text-[11px] uppercase tracking-[0.15em]"
              style={{ flex: 1 }}
            >
              Refuser
            </button>
            <button
              onClick={accept}
              className="btn-gold py-3 text-[11px] uppercase tracking-[0.15em]"
              style={{ flex: isMobile ? undefined : 1 }}
            >
              ✦ Accepter
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
