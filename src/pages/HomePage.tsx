import { W } from "../components/WireframeUI";
import { CtaBanner } from "../components/layout/CtaBanner";
import type { Page, Cols } from "../types";

const gridCls = (c: Cols) =>
  c === "3" ? "grid-cols-3" : c === "2" ? "grid-cols-2" : "grid-cols-1";

const Card = ({ children, className = "" }: any) => (
  <div className={`bg-noir-card border border-neutral-800 hover-gold-lift p-5 @lg:p-6 ${className}`}>{children}</div>
);

const reassur = [
  { icon: "⏱", t: "Ponctualité", d: "Arrivée garantie à l'heure" },
  { icon: "✦", t: "Confort", d: "Véhicule haut de gamme" },
  { icon: "◈", t: "Discrétion", d: "Chauffeur professionnel" },
  { icon: "○", t: "24h/7j", d: "Disponibilité permanente sur réservation" },
];

const services = [
  { icon: "✈", t: "Transferts aéroports", d: "Nice, Marseille, Toulon et toutes gares SNCF de la région." },
  { icon: "♦", t: "Mise à disposition", d: "À l'heure ou la journée pour vos rendez-vous d'affaires." },
  { icon: "☾", t: "Soirées & événements", d: "Service nocturne sécurisé pour vos galas et soirées privées." },
];

const equip = [ "Eau fraîche & Snack", "Ports USB", "Climatisation tri-zone", "Vitres teintées"];


const why = [
  { i: "♛", t: "Expérience premium", d: "Chauffeur d'exception au service d'une clientèle d'exception" },
  { i: "◆", t: "Sécurité totale", d: "Chauffeurs formés, véhicule récent et entièrement assuré" },
  { i: "🚗", t: "Le sud est à vous", d: "Parcourez le sud en toute sérénité" },
];

export function HomePage({ cols, onNav }: { cols: Cols; onNav: (p: Page) => void }) {
  return (
    <main className="bg-noir">
      {/* Hero */}
      <section className="relative">
        <div className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <img src="/images/coteAzurByNight.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: "linear-gradient(135deg, transparent 0%, rgba(201,169,97,0.1) 100%)"
          }} />
          <div className="absolute right-0 bottom-0 w-full @lg:w-2/3 h-2/3 opacity-20" style={{
            backgroundImage: "radial-gradient(ellipse at center, rgba(201,169,97,0.4) 0%, transparent 60%)"
          }} />
          <div className="absolute inset-0 flex items-center px-5 @lg:px-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-gold" />
                <span className="text-[11px] uppercase tracking-[0.4em] text-gold">Chauffeur Privé </span>
                <div className="w-12 h-px bg-gold" />
              </div>
              <h1 className="font-serif text-4xl @lg:text-6xl text-white mb-6 leading-tight">
                Votre chauffeur privé<br />
                <span className="gold-text-gradient italic">sur la Côte d'Azur</span>
              </h1>
              <p className="text-base @lg:text-lg text-neutral-300 mb-8 leading-relaxed max-w-xl">
                Transferts, mise à disposition et déplacements <strong>Bouches-du-Rhône, PACA et Alpes-Maritimes</strong>.
                Une prestation d'exception pour une clientèle exigeante.
              </p>
              <div className="flex flex-col @lg:flex-row gap-3">
                <button onClick={() => onNav("devis")} className="btn-gold px-8 py-4 text-xs uppercase">
                  Demander un devis
                </button>
                <button onClick={() => onNav("services")} className="btn-outline-gold px-8 py-4 text-xs uppercase">
                  Nos services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Réassurance */}
      <section className="px-4 @lg:px-10 py-16 bg-noir border-b border-gold/10">
        <div className={`grid ${cols === "1" ? "grid-cols-2" : cols === "2" ? "grid-cols-2" : "grid-cols-4"} gap-6`}>
          {reassur.map((r) => (
            <div key={r.t} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 border border-gold/40 group-hover:border-gold flex items-center justify-center transition-colors">
                <span className="text-2xl text-gold">{r.icon}</span>
              </div>
              <div className="text-sm text-white uppercase tracking-[0.2em] mb-2">{r.t}</div>
              <div className="text-xs text-neutral-500">{r.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Aperçu services */}
      <section className="px-4 @lg:px-10 py-20 bg-noir-soft">
        <div className="text-center mb-12">
          <W.SectionLabel>Nos prestations</W.SectionLabel>
          <h2 className="font-serif text-3xl @lg:text-4xl text-white">Services d'exception</h2>
          <p className="text-sm text-neutral-400 mt-3">Une réponse adaptée à chacun de vos besoins</p>
        </div>
        <div className={`grid ${gridCls(cols)} gap-6`}>
          {services.map((s) => (
            <Card key={s.t}>
              <div className="text-3xl text-gold mb-4">{s.icon}</div>
              <div className="gold-divider w-12 mb-4" />
              <h3 className="font-serif text-xl text-white mb-3">{s.t}</h3>
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed">{s.d}</p>
              <button onClick={() => onNav("services")} className="text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-light flex items-center gap-2">
                En savoir plus <span>→</span>
              </button>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <button onClick={() => onNav("services")} className="btn-outline-gold px-8 py-3 text-xs uppercase">
            Voir tous les services
          </button>
        </div>
      </section>

      {/* Véhicule */}
      <section className="px-4 @lg:px-10 py-20 bg-noir">
        <div className={`grid ${cols === "3" ? "grid-cols-2" : "grid-cols-1"} gap-12 items-center`}>
          <W.Img src="/images/interieur1.jpg" className="w-full aspect-[4/3]" label="BYD Seal U" />
          <div>
            <W.SectionLabel>Notre véhicule</W.SectionLabel>
            <h2 className="font-serif text-3xl @lg:text-4xl text-white mb-4">
              BYD <span className="gold-text-gradient italic">Seal U</span>
            </h2>
            <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
              Espace, élégance et confort absolu pour jusqu'à 4 passagers.
            </p>
            <ul className="grid grid-cols-2 gap-3 text-xs text-neutral-300 mb-8">
              {equip.map((e) => (
                <li key={e} className="flex items-center gap-3">
                  <span className="text-gold">✦</span>
                  {e}
                </li>
              ))}
            </ul>
            <button onClick={() => onNav("vehicule")} className="btn-outline-gold px-6 py-3 text-xs uppercase">
              Détails du véhicule
            </button>
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="px-4 @lg:px-10 py-20 bg-noir-soft">
        <div className="text-center mb-12">
          <W.SectionLabel>Pourquoi nous choisir</W.SectionLabel>
          <h2 className="font-serif text-3xl @lg:text-4xl text-white">L'excellence VF Business</h2>
        </div>
        <div className={`grid ${gridCls(cols)} gap-8`}>
          {why.map((w) => (
            <div key={w.t} className="text-center px-4">
              <div className="text-4xl text-gold mb-4">{w.i}</div>
              <h3 className="font-serif text-xl text-white mb-3">{w.t}</h3>
              <div className="gold-divider w-12 mx-auto mb-3" />
              <p className="text-sm text-neutral-400 leading-relaxed">{w.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Zones */}
      <section className="px-4 @lg:px-10 py-16 bg-noir border-y border-gold/20">
        <div className="text-center mb-8">
          <W.SectionLabel>Zone d'intervention</W.SectionLabel>
          <h3 className="font-serif text-2xl @lg:text-3xl text-white">Toute la Côte d'Azur & au-delà</h3>
        </div>
        <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
          {["Aéroport Nice Côte d'Azur", "Aéroport Marseille Provence", "Aéroport Toulon-Hyères", "Gares SNCF", "Monaco", "Cannes", "Saint-Tropez"].map((t) => (
            <W.Tag key={t}>{t}</W.Tag>
          ))}
        </div>
      </section>

      <CtaBanner onCta={() => onNav("devis")} />
    </main>
  );
}
