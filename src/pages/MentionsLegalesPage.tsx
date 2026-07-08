import { W } from "../components/WireframeUI";
import { Breadcrumb } from "../components/layout/Breadcrumb";
import { SecondaryHero } from "../components/layout/SecondaryHero";
const sections = [
  {
    label: "Éditeur du site",
    title: "Informations légales",
    content: [
      ["Raison sociale", "VF Business"],
      ["Forme juridique", "Société par actions simplifiée (Société à associé unique)"],
      ["Adresse", "Côte d'Azur, France"],
      ["Téléphone", "+33 7 66 39 39 75"],
      ["Email", "contact@vtc-vfbusiness.fr"],
      ["Directeur de publication", "Signela digital"],
    ],
  },
  {
    label: "Hébergement",
    title: "Hébergeur du site",
    content: [
      ["Hébergeur", "IONOS"],
      ["Adresse", "7 Place de@ la Gare, 57200 Sarreguemines, France  "],
      ["Site web", "https://www.ionos.fr"],
    ],
  },
];

export function MentionsLegalesPage() {
  return (
    <main className="bg-noir">
      <Breadcrumb items={["Accueil", "Mentions légales"]} />
      <SecondaryHero title="Mentions légales" subtitle="Informations légales relatives au site VF Business" />

      <section className="px-4 @lg:px-10 py-16 max-w-4xl mx-auto space-y-16">

        {sections.map((s) => (
          <div key={s.label}>
            <W.SectionLabel>{s.label}</W.SectionLabel>
            <h2 className="font-serif text-2xl @lg:text-3xl text-white mb-8">{s.title}</h2>
            <div className="border border-gold/20 bg-noir-card">
              {s.content.map(([k, v], i) => (
                <div key={k} className={`flex flex-col @lg:flex-row @lg:justify-between px-4 @lg:px-6 py-4 gap-1 ${i < s.content.length - 1 ? "border-b border-neutral-800" : ""}`}>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-gold/80 shrink-0">{k}</span>
                  <span className="text-sm text-neutral-300">{v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div>
          <W.SectionLabel>Propriété intellectuelle</W.SectionLabel>
          <h2 className="font-serif text-2xl @lg:text-3xl text-white mb-6">Droits & contenus</h2>
          <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
            <p>
              L'ensemble des éléments constituant ce site (textes, images, graphismes, logo, icônes, sons, logiciels…)
              est la propriété exclusive de VF Business ou de ses partenaires. Toute reproduction, représentation,
              modification ou exploitation de ces éléments sans autorisation expresse est strictement interdite.
            </p>
            <p>
              Les marques et logos figurant sur le site sont des marques déposées. Toute utilisation non autorisée
              de ces marques constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
            </p>
          </div>
        </div>

        <div>
          <W.SectionLabel>Responsabilité</W.SectionLabel>
          <h2 className="font-serif text-2xl @lg:text-3xl text-white mb-6">Limitation de responsabilité</h2>
          <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
            <p>
              VF Business s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site.
              Cependant, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises
              à disposition.
            </p>
            <p>
              VF Business se réserve le droit de corriger, à tout moment et sans préavis, le contenu de ce site.
              La responsabilité de VF Business ne peut être engagée en raison d'informations inexactes ou incomplètes.
            </p>
          </div>
        </div>

        <div>
          <W.SectionLabel>Droit applicable</W.SectionLabel>
          <h2 className="font-serif text-2xl @lg:text-3xl text-white mb-6">Juridiction</h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français
            seront seuls compétents. Pour toute question relative à ces mentions légales, vous pouvez nous contacter
            à l'adresse{" "}
            <span className="text-gold">contact@vtc-vfbusiness.fr</span>.
          </p>
        </div>

        <div className="gold-divider" />
        <p className="text-[11px] text-neutral-600 text-center tracking-[0.2em] uppercase">
          Dernière mise à jour : juin 2026
        </p>

      </section>
    </main>
  );
}
