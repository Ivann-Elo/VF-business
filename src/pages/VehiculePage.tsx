import { W } from "../components/WireframeUI";
import { Breadcrumb } from "../components/layout/Breadcrumb";
import { SecondaryHero } from "../components/layout/SecondaryHero";
import { CtaBanner } from "../components/layout/CtaBanner";
import type { Page, Cols } from "../types";

const equip = [
  { i: "💧", l: "Eau fraîche et snacks" },
  { i: "🔌", l: "Ports USB" },
  { i: "❄", l: "Climatisation" },
  { i: "✦", l: "Propreté irréprochable" },
  { i: "▮", l: "Vitres teintées" },
];

const specs = [
  ["Marque / Modèle", "BYD Seal U"],
  ["Places passagers", "Jusqu'à 4"],
  ["Bagages", "4 valises moyennes"],
  ["Classe", "Premium / VIP"],
];

export function VehiculePage({ cols, onNav }: { cols: Cols; onNav: (p: Page) => void }) {
  return (
    <main className="bg-noir">
      <Breadcrumb items={["Accueil", "Véhicule"]} />
      <SecondaryHero title="BYD Seal U" subtitle="Le véhicule premium pensé pour le voyage confortable, courte et longue distance" />

      {/* Galerie */}
      <section className="px-4 @lg:px-10 py-16">
        <W.Img src={W.images.vehiculeMain} className="w-full aspect-[16/9] mb-4" label="Vue principale" />
        <div className="grid grid-cols-2 @lg:grid-cols-4 gap-4">
          <W.Img src={W.images.vehiculeExt}    className="w-full aspect-[4/3]" label="Extérieur" />
          <W.Img src={W.images.vehiculeInt}    className="w-full aspect-[4/3]" label="Intérieur" />
          <W.Img src={W.images.vehiculeCabine} className="w-full aspect-[4/3]" label="Cabine" />
        </div>
      </section>

      {/* Spécifications */}
      <section className="px-4 @lg:px-10 py-16 bg-noir-soft border-y border-gold/10">
        <div className="text-center mb-10">
          <W.SectionLabel>Caractéristiques</W.SectionLabel>
          <h2 className="font-serif text-3xl text-white">Spécifications</h2>
        </div>
        <div className="max-w-3xl mx-auto border border-gold/20 bg-noir-card">
          {specs.map(([k, v], i) => (
            <div key={k} className={`flex flex-col gap-1 @lg:flex-row @lg:justify-between px-4 @lg:px-6 py-4 @lg:py-5 ${i < specs.length - 1 ? "border-b border-neutral-800" : ""}`}>
              <span className="text-xs uppercase tracking-[0.2em] text-gold/80">{k}</span>
              <span className="text-sm text-white font-serif">{v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Équipements */}
      <section className="px-4 @lg:px-10 py-16">
        <div className="text-center mb-12">
          <W.SectionLabel>Équipements à bord</W.SectionLabel>
          <h2 className="font-serif text-3xl text-white">Le confort absolu</h2>
        </div>
        <div className={`grid ${cols === "3" ? "grid-cols-4" : "grid-cols-2"} gap-3 @lg:gap-4`}>
          {equip.map((e) => (
            <div key={e.l} className="border border-neutral-800 hover:border-gold/50 transition-colors bg-noir-card p-4 @lg:p-6 text-center">
              <div className="text-3xl text-gold mb-3">{e.i}</div>
              <div className="text-xs text-neutral-300 uppercase tracking-[0.15em]">{e.l}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button onClick={() => onNav("devis")} className="btn-gold px-10 py-4 text-xs uppercase">
            Réserver ce véhicule
          </button>
        </div>
      </section>

      <CtaBanner onCta={() => onNav("devis")} />
    </main>
  );
}
