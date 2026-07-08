import { W } from "../components/WireframeUI";
import { Breadcrumb } from "../components/layout/Breadcrumb";
import { SecondaryHero } from "../components/layout/SecondaryHero";
const resetConsent = () => {
  localStorage.removeItem("vf_cookie_consent");
  window.location.reload();
};

export function ConfidentialitePage() {
  return (
    <main className="bg-noir">
      <Breadcrumb items={["Accueil", "Confidentialité"]} />
      <SecondaryHero title="Politique de confidentialité" subtitle="Protection de vos données personnelles — RGPD" />

      <section className="px-4 @lg:px-10 py-16 max-w-4xl mx-auto space-y-16">

        <div>
          <W.SectionLabel>Responsable du traitement</W.SectionLabel>
          <h2 className="font-serif text-2xl @lg:text-3xl text-white mb-6">Qui traite vos données ?</h2>
          <div className="border border-gold/20 bg-noir-card">
            {[
              ["Responsable", "VF Business"],
              ["Email", "contact@vtc-vfbusiness.fr"],
              ["Téléphone", "+33 7 66 39 39 75"],
              ["Adresse", "Côte d'Azur, France"],
            ].map(([k, v], i, arr) => (
              <div key={k} className={`flex flex-col @lg:flex-row @lg:justify-between px-4 @lg:px-6 py-4 gap-1 ${i < arr.length - 1 ? "border-b border-neutral-800" : ""}`}>
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold/80 shrink-0">{k}</span>
                <span className="text-sm text-neutral-300">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <W.SectionLabel>Données collectées</W.SectionLabel>
          <h2 className="font-serif text-2xl @lg:text-3xl text-white mb-6">Quelles données collectons-nous ?</h2>
          <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
            <p>Dans le cadre de nos services, nous collectons uniquement les données nécessaires :</p>
            <ul className="space-y-3 mt-4">
              {[
                ["✦", "Formulaire de devis", "Nom, prénom, téléphone, email, détails du trajet souhaité"],
                ["✦", "Navigation", "Données de navigation anonymisées (cookies techniques uniquement)"],
                ["✦", "Contact direct", "Informations transmises lors d'un appel ou message WhatsApp"],
              ].map(([icon, title, desc]) => (
                <li key={title as string} className="flex items-start gap-4 border border-neutral-800 bg-noir-card px-4 @lg:px-5 py-4">
                  <span className="text-gold mt-0.5 shrink-0">{icon}</span>
                  <div>
                    <div className="text-white text-xs uppercase tracking-[0.15em] mb-1">{title}</div>
                    <div className="text-neutral-500 text-xs">{desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <W.SectionLabel>Finalités</W.SectionLabel>
          <h2 className="font-serif text-2xl @lg:text-3xl text-white mb-6">Pourquoi ces données ?</h2>
          <div className="space-y-3 text-sm text-neutral-400 leading-relaxed">
            <p>Vos données sont utilisées exclusivement pour :</p>
            <ul className="mt-4 space-y-2">
              {[
                "Répondre à vos demandes de devis et réservations",
                "Assurer la prestation de transport commandée",
                "Vous contacter pour confirmer les détails de votre trajet",
                "Améliorer la qualité de notre service",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-gold shrink-0">◆</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-neutral-500 text-xs italic">
              Vos données ne sont jamais revendues, ni partagées avec des tiers à des fins commerciales.
            </p>
          </div>
        </div>

        <div>
          <W.SectionLabel>Conservation</W.SectionLabel>
          <h2 className="font-serif text-2xl @lg:text-3xl text-white mb-6">Durée de conservation</h2>
          <div className="border border-gold/20 bg-noir-card">
            {[
              ["Données de devis", "3 ans à compter du dernier contact"],
              ["Données de réservation", "5 ans (obligation comptable)"],
              ["Cookies techniques", "13 mois maximum"],
            ].map(([k, v], i, arr) => (
              <div key={k} className={`flex flex-col @lg:flex-row @lg:justify-between px-4 @lg:px-6 py-4 gap-1 ${i < arr.length - 1 ? "border-b border-neutral-800" : ""}`}>
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold/80 shrink-0">{k}</span>
                <span className="text-sm text-neutral-300">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <W.SectionLabel>Vos droits</W.SectionLabel>
          <h2 className="font-serif text-2xl @lg:text-3xl text-white mb-6">Droits RGPD</h2>
          <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
            <div className="grid grid-cols-1 @lg:grid-cols-2 gap-3 mt-4">
              {[
                ["Droit d'accès", "Obtenir une copie de vos données"],
                ["Droit de rectification", "Corriger des données inexactes"],
                ["Droit à l'effacement", "Demander la suppression de vos données"],
                ["Droit d'opposition", "Vous opposer au traitement de vos données"],
                ["Droit à la portabilité", "Recevoir vos données dans un format lisible"],
                ["Droit de limitation", "Limiter le traitement de vos données"],
              ].map(([title, desc]) => (
                <div key={title as string} className="border border-neutral-800 hover-gold-lift bg-noir-card px-4 @lg:px-5 py-4">
                  <div className="text-gold text-xs uppercase tracking-[0.15em] mb-1">{title}</div>
                  <div className="text-neutral-500 text-xs">{desc}</div>
                </div>
              ))}
            </div>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à{" "}
              <span className="text-gold">contact@vtc-vfbusiness.fr</span>.
              Vous pouvez également adresser une réclamation à la{" "}
              <span className="text-gold">CNIL (www.cnil.fr)</span>.
            </p>
          </div>
        </div>

        <div>
          <W.SectionLabel>Cookies</W.SectionLabel>
          <h2 className="font-serif text-2xl @lg:text-3xl text-white mb-6">Gestion des cookies</h2>
          <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
            <p>
              Ce site utilise uniquement des cookies techniques indispensables au bon fonctionnement du site.
              Aucun cookie publicitaire ou de traçage tiers n'est utilisé.
            </p>
            <div className="border border-gold/20 bg-noir-card mt-6">
              {[
                ["Cookie de session", "Navigation et fonctionnement du site", "Session"],
                ["Préférence cookies", "Mémorisation de votre choix de consentement", "13 mois"],
              ].map(([name, purpose, duration], i, arr) => (
                <div key={name as string} className={`flex flex-col @lg:flex-row gap-2 px-4 @lg:px-6 py-4 ${i < arr.length - 1 ? "border-b border-neutral-800" : ""}`}>
                  <span className="text-[11px] uppercase tracking-[0.15em] text-gold/80 @lg:w-48 shrink-0">{name}</span>
                  <span className="text-xs text-neutral-400 flex-1">{purpose}</span>
                  <span className="text-[11px] text-neutral-500 shrink-0">{duration}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 border border-gold/20 bg-noir-card p-4 @lg:p-6 text-center">
              <p className="text-xs text-neutral-400 mb-4">Vous souhaitez modifier votre consentement aux cookies ?</p>
              <button onClick={resetConsent} className="btn-outline-gold px-6 py-3 text-xs uppercase tracking-[0.15em]">
                ◈ Gérer mes préférences
              </button>
            </div>
          </div>
        </div>

        <div className="gold-divider" />
        <p className="text-[11px] text-neutral-600 text-center tracking-[0.2em] uppercase">
          Dernière mise à jour : juin 2026
        </p>

      </section>
    </main>
  );
}
