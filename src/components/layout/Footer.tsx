import type { Page } from "../../types";

export function Footer({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <footer className="bg-noir border-t border-gold/20 text-neutral-400">

      {/* Mobile */}
      <div className="md:hidden px-6 pt-10 pb-6 flex flex-col items-center gap-7">

        {/* Logo */}
        <div className="flex flex-col items-center gap-2">
        <div className="h-10 flex items-center justify-center">
            <img src="/images/LogoVFbusinesS.png" alt="VF Business" className="h-full w-auto object-contain" />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-[11px] uppercase tracking-[0.15em]">
          {(["Accueil", "Services", "Véhicule", "À propos"] as const).map((label, i) => (
            <button
              key={label}
              onClick={() => onNav((["home", "services", "vehicule", "about"] as Page[])[i])}
              className="text-neutral-400 hover:text-gold transition-colors"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center gap-2 text-xs">
          <a href="tel:+33766393975" className="text-neutral-300 hover:text-gold transition-colors">
            +33 7 66 39 39 75
          </a>
          <a href="mailto:contact@vtc-vfbusiness.fr" className="text-neutral-300 hover:text-gold transition-colors">
            contact@vtc-vfbusiness.fr
          </a>
        </div>

        {/* Légal */}
        <div className="flex gap-6 text-[10px] uppercase tracking-[0.15em]">
          <button onClick={() => onNav("mentions-legales")} className="text-neutral-600 hover:text-gold transition-colors">
            Mentions légales
          </button>
          <button onClick={() => onNav("confidentialite")} className="text-neutral-600 hover:text-gold transition-colors">
            Confidentialité
          </button>
        </div>

        <div className="gold-divider w-full" />
        <p className="text-[11px] text-neutral-600">© 2026 VF Business — Tous droits réservés</p>

      </div>

      {/* Desktop / Tablette */}
      <div className="hidden md:block px-10 pt-16 pb-6">
        <div className="grid grid-cols-5 gap-10 mb-10">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 flex items-center justify-center">
              <img src="/images/LogoVFbusinesS.png" alt="VF Business" className="h-full w-auto object-contain" />
            </div>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed">
              L'excellence du transport privé sur la Côte d'Azur.
            </p>
          </div>

          <div>
            <div className="text-gold text-[11px] uppercase tracking-[0.25em] mb-4">Navigation</div>
            <ul className="space-y-3 text-xs">
              {([["Accueil", "home"], ["Services", "services"], ["Véhicule", "vehicule"], ["À propos", "about"]] as [string, Page][]).map(([label, id]) => (
                <li key={id}><button onClick={() => onNav(id)} className="hover:text-gold transition-colors">{label}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-gold text-[11px] uppercase tracking-[0.25em] mb-4">Services</div>
            <ul className="space-y-3 text-xs">
              {["Transferts aéroports", "Mise à disposition", "Événements & soirées", "Transport pro"].map((s) => (
                <li key={s}><span className="hover:text-gold transition-colors cursor-pointer">{s}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-gold text-[11px] uppercase tracking-[0.25em] mb-4">Contact</div>
            <ul className="space-y-3 text-xs">
              <li><a href="tel:+33766393975" className="hover:text-gold transition-colors">+33 7 66 39 39 75</a></li>
              <li><a href="mailto:contact@vtc-vfbusiness.fr" className="hover:text-gold transition-colors">contact@vtc-vfbusiness.fr</a></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">WhatsApp 24h/7j</span></li>
            </ul>
          </div>

          <div>
            <div className="text-gold text-[11px] uppercase tracking-[0.25em] mb-4">Légal</div>
            <ul className="space-y-3 text-xs">
              {([["Mentions légales", "mentions-legales"], ["Confidentialité", "confidentialite"], ["Cookies", "confidentialite"]] as [string, Page][]).map(([label, id]) => (
                <li key={label}><button onClick={() => onNav(id)} className="hover:text-gold transition-colors">{label}</button></li>
              ))}
            </ul>
          </div>

        </div>

        <div className="gold-divider mb-5" />
        <div className="flex justify-between text-[11px] text-neutral-600">
          <span>© 2026 VF Business — Tous droits réservés</span>
          <span className="text-gold/60 tracking-[0.2em] uppercase">Premium · Discret · Ponctuel</span>
        </div>
      </div>
    </footer>
  );
}
