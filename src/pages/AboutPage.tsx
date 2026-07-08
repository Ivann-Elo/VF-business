import { W } from "../components/WireframeUI";
import { Breadcrumb } from "../components/layout/Breadcrumb";
import { SecondaryHero } from "../components/layout/SecondaryHero";
import { CtaBanner } from "../components/layout/CtaBanner";
import type { Page } from "../types";

const values = [
  { i: "◈", t: "Discrétion", d: "Confidentialité absolue de vos déplacements et de vos informations" },
  { i: "⏱", t: "Ponctualité", d: "Anticipation et suivi du trafic en temps réel pour ne jamais manquer un rendez-vous" },
  { i: "✦", t: "Confort", d: "Véhicule récent, soigné et parfaitement équipé pour votre bien-être" },
];

const contacts = [
  { i: "📞", t: "Téléphone", d: "+33 7 66 39 39 75" },
  { i: "💬", t: "WhatsApp", d: "Réponse rapide 24h/7j" },
  { i: "✉", t: "Email", d: "contact@vtc-vfbusiness.fr" },
];

export function AboutPage({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <main className="bg-noir">
      <Breadcrumb items={["Accueil", "À propos"]} />
      <SecondaryHero title="À propos de VF Business" subtitle="Une exigence — faire de chaque trajet une expérience inoubliable" />

      {/* Histoire */}
      <section className="px-4 md:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-[3/4] overflow-hidden">
            <img src="/images/chauffeurPrive.jpeg" alt="Notre fondateur" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
          <div>
            <W.SectionLabel>Notre histoire</W.SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              L'excellence <span className="gold-text-gradient italic">au service</span> de l'exigence
            </h2>
            <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
              VF Business est né d'une conviction : les déplacements professionnels et privés méritent
              un service réellement haut de gamme, sans compromis.
            </p>
            <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
              Basés sur la Côte d'Azur, nous accompagnons clients d'affaires, hôteliers et particuliers
              exigeants pour tous leurs trajets dans le sud de la France, avec la même attention au détail
              et au confort, quel que soit le voyage.
            </p>
            <div className="gold-divider w-24 mb-6" />
            <button onClick={() => onNav("services")} className="btn-outline-gold px-6 py-3 text-xs uppercase">
              Découvrir nos services
            </button>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="px-4 md:px-10 py-16 bg-noir-soft border-y border-gold/10">
        <div className="text-center mb-12">
          <W.SectionLabel>Nos valeurs</W.SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl text-white">Les piliers de notre service</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.t} className="bg-noir-card border border-neutral-800 hover-gold-lift p-6 md:p-10 text-center">
              <div className="text-4xl text-gold mb-4">{v.i}</div>
              <h3 className="font-serif text-2xl text-white mb-3">{v.t}</h3>
              <div className="gold-divider w-12 mx-auto mb-4" />
              <p className="text-sm text-neutral-400 leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Zone */}
      <section className="px-4 md:px-10 py-16">
        <div className="text-center mb-10">
          <W.SectionLabel>Zone d'intervention</W.SectionLabel>
          <h2 className="font-serif text-3xl text-white mb-3">Côte d'Azur & au-delà</h2>
          <p className="text-sm text-neutral-400">Toutes distances dans le sud de la France</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
          {["Nice", "Cannes", "Monaco", "Marseille", "Toulon", "Antibes", "Saint-Tropez", "Toutes distances"].map((t) => (
            <W.Tag key={t}>{t}</W.Tag>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="px-4 md:px-10 py-16 bg-noir-soft border-t border-gold/10">
        <div className="text-center mb-12">
          <W.SectionLabel>Nous contacter</W.SectionLabel>
          <h2 className="font-serif text-3xl text-white">Restons en contact</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contacts.map((c) => (
            <div key={c.t} className="bg-noir-card border border-neutral-800 hover-gold-lift p-5 md:p-8 text-center">
              <div className="text-3xl text-gold mb-4">{c.i}</div>
              <div className="text-xs uppercase tracking-[0.25em] text-white mb-2">{c.t}</div>
              <div className="text-sm text-neutral-400">{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner onCta={() => onNav("devis")} />
    </main>
  );
}
