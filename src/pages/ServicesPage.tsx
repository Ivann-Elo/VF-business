import { Breadcrumb } from "../components/layout/Breadcrumb";
import { SecondaryHero } from "../components/layout/SecondaryHero";
import { CtaBanner } from "../components/layout/CtaBanner";
import type { Page } from "../types";

const Card = ({ children, className = "" }: any) => (
  <div className={`bg-noir-card border border-neutral-800 hover-gold-lift p-5 md:p-6 ${className}`}>{children}</div>
);

const services = [
  { i: "✈", t: "Transferts Aéroports & Gares", d: "Prise en charge à Nice, Marseille, Toulon et toutes gares SNCF de la région avec suivi de vol en temps réel." },
  { i: "🌍", t: "Déplacements toutes distances", d: "Trajets longue distance avec confort optimal. (Siège enfant sur demande)." },
  { i: "♦", t: "Mise à disposition", d: "À l'heure ou à la journée pour vos rendez-vous professionnels (minimum 4h)." },
  { i: "☾", t: "Transport soirées, mariages, Galas & événements", d: "Service nocturne sécurisé pour vos soirées, galas et événements privés." },
  { i: "♛", t: "Service hôtel & conciergerie", d: "Partenariats hôteliers, navettes et services sur mesure pour vos clients VIP." },
  { i: "▣", t: "Transport professionnel", d: "Roadshows, rendez-vous d'affaires, accompagnement multi-sites en discrétion." },
  { i: "❀", t: "Transport d'animaux", d: "Véhicule adapté et propre pour le transport sécurisé de vos compagnons." },
  { i: "◈", t: "Livraison & récupération colis/effets personnels", d: "Coursier privé pour vos plis urgents, confidentiels et précieux. Acheminement de bagages et effets personnels à votre destination." },
];

export function ServicesPage({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <main className="bg-noir">
      <Breadcrumb items={["Accueil", "Services"]} />
      <SecondaryHero title="Nos services" subtitle="Des prestations d'exception pour répondre à toutes vos exigences de mobilité" />
      <section className="px-4 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.t} className="flex flex-col">
              <div className="text-3xl text-gold mb-4">{s.i}</div>
              <div className="gold-divider w-12 mb-4" />
              <h3 className="font-serif text-lg text-white mb-3">{s.t}</h3>
              <p className="text-xs text-neutral-400 mb-6 flex-1 leading-relaxed">{s.d}</p>
              <button onClick={() => onNav("devis")} className="btn-gold px-5 py-2.5 text-[11px] uppercase self-start">
                Demander un devis
              </button>
            </Card>
          ))}
        </div>
      </section>
      <CtaBanner onCta={() => onNav("devis")} />
    </main>
  );
}
