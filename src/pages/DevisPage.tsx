import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { W } from "../components/WireframeUI";
import { Breadcrumb } from "../components/layout/Breadcrumb";
import { SecondaryHero } from "../components/layout/SecondaryHero";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

const expects = [
  "✈ Lieu de prise en charge",
  "◉ Destination",
  "▦ Date et heure",
  "♦ Nombre de passagers",
  "⬢ Nombre de bagages",
  "⇄ Trajet simple / aller-retour",
  "◈ Enfants à bord (âges)",
  "❖ Animaux de compagnie (taille)",
  "✎ Demandes particulières",
];

const PET_SIZES = ["Petit", "Moyen", "Grand"] as const;

type Fields = {
  pickup: string; destination: string;
  date: string;   time: string;
  passengers: string; luggage: string; duration: string;
  childrenAges: string; specialRequest: string;
  firstName: string; lastName: string;
  phone: string; email: string; message: string;
};

const EMPTY: Fields = {
  pickup: "", destination: "", date: "", time: "",
  passengers: "", luggage: "", duration: "",
  childrenAges: "", specialRequest: "",
  firstName: "", lastName: "", phone: "", email: "", message: "",
};

function ConfirmModal({ name, onClose }: { name: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-5">
      <div className="relative bg-noir-card border border-gold/30 overflow-hidden w-full max-w-md">

        {/* Lueur dorée */}
        <div className="absolute inset-0 pointer-events-none opacity-25" style={{
          backgroundImage: "radial-gradient(ellipse at top, rgba(201,169,97,0.4) 0%, transparent 65%)"
        }} />

        <div className="relative p-6 md:p-8 flex flex-col items-center text-center gap-5">

          {/* Icône succès */}
          <div className="w-16 h-16 border border-gold flex items-center justify-center">
            <span className="text-gold text-2xl">✦</span>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-2">Confirmation</div>
            <h2 className="font-serif text-2xl text-white mb-3">
              {name ? `Merci ${name},` : "Demande envoyée !"}
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Votre demande de devis a bien été transmise.<br />
              Vous recevrez une réponse personnalisée <strong className="text-white">dans les 2 heures</strong>.
            </p>
          </div>

          <div className="gold-divider w-full" />

          {/* Contact de secours */}
          <div className="text-xs text-neutral-500 space-y-1">
            <p>Besoin d'une réponse immédiate ?</p>
            <a href="tel:+33766393975" className="text-gold hover:text-gold-light transition-colors block">
              +33 7 66 39 39 75
            </a>
          </div>

          <button
            onClick={onClose}
            className="btn-gold w-full py-3.5 text-xs uppercase tracking-[0.2em] mt-2"
          >
            Fermer
          </button>

        </div>
      </div>
    </div>
  );
}

const todayISO = new Date().toISOString().slice(0, 10);

export function DevisPage() {
  const [trajet, setTrajet]     = useState(0);
  const [fields, setFields]     = useState<Fields>(EMPTY);
  const [hasChildren, setHasChildren] = useState(false);
  const [hasPets, setHasPets]         = useState(false);
  const [petSizes, setPetSizes]       = useState<string[]>([]);
  const [loading, setLoading]   = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [sentName, setSentName]   = useState("");

  const set = (k: keyof Fields) =>
    (e: { target: { value: string } }) =>
      setFields((f) => ({ ...f, [k]: e.target.value }));

  const togglePetSize = (size: string) =>
    setPetSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size],
    );

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    if (!fields.pickup || !fields.destination || !fields.phone) {
      toast.error("Merci de renseigner la prise en charge, la destination et le téléphone.");
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID, TEMPLATE_ID,
        {
          pickup:      fields.pickup,
          destination: fields.destination,
          date:        fields.date,
          time:        fields.time,
          passengers:  fields.passengers,
          luggage:     fields.luggage,
          trip_type:   trajet === 0 ? "Trajet simple" : "Aller-retour",
          duration:    fields.duration,
          children:    hasChildren ? (fields.childrenAges || "Oui (âge non précisé)") : "Non",
          pets:        hasPets ? (petSizes.length ? petSizes.join(", ") : "Oui (taille non précisée)") : "Non",
          special_request: fields.specialRequest,
          first_name:  fields.firstName,
          last_name:   fields.lastName,
          phone:       fields.phone,
          email:       fields.email,
          message:     fields.message,
        },
        PUBLIC_KEY,
      );
      setSentName(fields.firstName);
      setFields(EMPTY);
      setTrajet(0);
      setHasChildren(false);
      setHasPets(false);
      setPetSizes([]);
      setConfirmed(true);
    } catch {
      toast.error("Échec de l'envoi. Veuillez nous appeler directement.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-noir">
      <Breadcrumb items={["Accueil", "Demande de devis"]} />
      <SecondaryHero
        logo
        title="Demandez votre devis"
        subtitle="Réponse personnalisée en moins de 12 heures · Sans engagement"
      />

      <section className="px-4 md:px-10 py-16">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Formulaire */}
            <div className="lg:col-span-3">
              <div className="border border-gold/20 bg-noir-card p-4 md:p-10">

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-gold">01</span>
                  <div className="gold-divider w-12" />
                  <h3 className="text-xs uppercase tracking-[0.3em] text-gold">Informations du trajet</h3>
                </div>

                <div className="space-y-5 mb-10">
                  <W.Input label="Lieu de prise en charge *" placeholder="Ex : Aéroport Nice Côte d'Azur Terminal 2"
                    value={fields.pickup} onChange={set("pickup")} />
                  <W.Input label="Destination *" placeholder="Ex : Hôtel Negresco, Nice"
                    value={fields.destination} onChange={set("destination")} />
                  <div className="flex gap-3 md:gap-4">
                    <W.Input label="Date" type="date" min={todayISO} full={false}
                      value={fields.date} onChange={set("date")} />
                    <W.Input label="Heure" type="time" full={false}
                      value={fields.time} onChange={set("time")} />
                  </div>
                  <div className="flex gap-3 md:gap-4">
                    <W.Input label="Passagers" placeholder="1 — 4" full={false}
                      value={fields.passengers} onChange={set("passengers")} />
                    <W.Input label="Bagages" placeholder="0 — 4" full={false}
                      value={fields.luggage} onChange={set("luggage")} />
                  </div>

                  <div>
                    <div className="text-[11px] uppercase tracking-[0.15em] text-gold/80 mb-3">Type de trajet</div>
                    <div className="flex gap-3">
                      {["Trajet simple", "Aller-retour"].map((o, i) => (
                        <label
                          key={o}
                          onClick={() => setTrajet(i)}
                          className={`flex-1 cursor-pointer border px-3 md:px-5 py-3.5 md:py-4 text-xs uppercase tracking-[0.15em] flex items-center gap-2 md:gap-3 transition-all ${
                            i === trajet
                              ? "border-gold bg-gold/10 text-gold"
                              : "border-neutral-800 text-neutral-400 hover:border-gold/40"
                          }`}
                        >
                          <span className={`w-3 h-3 rounded-full border shrink-0 ${i === trajet ? "bg-gold border-gold" : "border-neutral-600"}`} />
                          {o}
                        </label>
                      ))}
                    </div>
                  </div>

                  <W.Input label="Mise à disposition* | Temps d'attente"
                    placeholder="Saisissez le nombre d'heures souhaité (minimum 4h)"
                    value={fields.duration} onChange={set("duration")} />
                  <p className="text-[11px] text-neutral-500 italic">* Champs obligatoires · Mise à disposition minimum 4h.</p>

                  <div>
                    <div className="text-[11px] uppercase tracking-[0.15em] text-gold/80 mb-3">Enfants à bord ?</div>
                    <div className="flex gap-3">
                      {["Non", "Oui"].map((o, i) => (
                        <label
                          key={o}
                          onClick={() => setHasChildren(i === 1)}
                          className={`flex-1 cursor-pointer border px-3 md:px-5 py-3.5 md:py-4 text-xs uppercase tracking-[0.15em] flex items-center gap-2 md:gap-3 transition-all ${
                            (i === 1) === hasChildren
                              ? "border-gold bg-gold/10 text-gold"
                              : "border-neutral-800 text-neutral-400 hover:border-gold/40"
                          }`}
                        >
                          <span className={`w-3 h-3 rounded-full border shrink-0 ${(i === 1) === hasChildren ? "bg-gold border-gold" : "border-neutral-600"}`} />
                          {o}
                        </label>
                      ))}
                    </div>
                    {hasChildren && (
                      <div className="mt-3">
                        <W.Input label="Âge(s) des enfants" placeholder="Ex : 3 ans, 7 ans"
                          value={fields.childrenAges} onChange={set("childrenAges")} />
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="text-[11px] uppercase tracking-[0.15em] text-gold/80 mb-3">Animaux de compagnie ?</div>
                    <div className="flex gap-3">
                      {["Non", "Oui"].map((o, i) => (
                        <label
                          key={o}
                          onClick={() => setHasPets(i === 1)}
                          className={`flex-1 cursor-pointer border px-3 md:px-5 py-3.5 md:py-4 text-xs uppercase tracking-[0.15em] flex items-center gap-2 md:gap-3 transition-all ${
                            (i === 1) === hasPets
                              ? "border-gold bg-gold/10 text-gold"
                              : "border-neutral-800 text-neutral-400 hover:border-gold/40"
                          }`}
                        >
                          <span className={`w-3 h-3 rounded-full border shrink-0 ${(i === 1) === hasPets ? "bg-gold border-gold" : "border-neutral-600"}`} />
                          {o}
                        </label>
                      ))}
                    </div>
                    {hasPets && (
                      <div className="mt-3">
                        <div className="text-[11px] uppercase tracking-[0.15em] text-gold/80 mb-2">Taille du/des animal(aux)</div>
                        <div className="flex gap-3">
                          {PET_SIZES.map((size) => (
                            <label
                              key={size}
                              onClick={() => togglePetSize(size)}
                              className={`flex-1 cursor-pointer border px-2 md:px-4 py-2.5 md:py-3 text-[11px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.15em] flex items-center justify-center gap-1.5 md:gap-2 transition-all ${
                                petSizes.includes(size)
                                  ? "border-gold bg-gold/10 text-gold"
                                  : "border-neutral-800 text-neutral-400 hover:border-gold/40"
                              }`}
                            >
                              <span className={`w-3 h-3 border shrink-0 ${petSizes.includes(size) ? "bg-gold border-gold" : "border-neutral-600"}`} />
                              {size}
                            </label>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <W.Input label="Demande particulière"
                    placeholder="Siège auto, personne à mobilité réduite, caisse animal, autre besoin spécifique…"
                    textarea value={fields.specialRequest} onChange={set("specialRequest")} />
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-gold">02</span>
                  <div className="gold-divider w-12" />
                  <h3 className="text-xs uppercase tracking-[0.3em] text-gold">Vos coordonnées</h3>
                </div>

                <div className="space-y-5">
                  <div className="flex gap-3 md:gap-4">
                    <W.Input label="Prénom" placeholder="Jean" full={false}
                      value={fields.firstName} onChange={set("firstName")} />
                    <W.Input label="Nom" placeholder="Dupont" full={false}
                      value={fields.lastName} onChange={set("lastName")} />
                  </div>
                  <W.Input label="Téléphone *" placeholder="+33 6 XX XX XX XX"
                    value={fields.phone} onChange={set("phone")} />
                  <W.Input label="Email" placeholder="vous@exemple.com"
                    value={fields.email} onChange={set("email")} />
                  <W.Input label="Message complémentaire"
                    placeholder="Précisions, demandes particulières…"
                    textarea value={fields.message} onChange={set("message")} />

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-4 text-xs uppercase mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Envoi en cours…" : "✦ Envoyer ma demande ✦"}
                  </button>
                  <p className="text-[11px] text-neutral-500 text-center">
                    🔒 Vos données restent strictement confidentielles
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-2 space-y-5">
              <div className="border border-gold/20 bg-noir-card p-4 md:p-6">
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Contact direct</div>
                <div className="space-y-3">
                  <a href="tel:+33766393975"
                    className="btn-outline-gold w-full py-3.5 text-xs uppercase flex items-center justify-center gap-2">
                    📞 Appeler
                  </a>
                  <a href="https://wa.me/33766393975" target="_blank" rel="noreferrer"
                    className="btn-outline-gold w-full py-3.5 text-xs uppercase flex items-center justify-center gap-2">
                    💬 WhatsApp
                  </a>
                  <a href="mailto:contact@vtc-vfbusiness.fr"
                    className="btn-outline-gold w-full py-3.5 text-xs uppercase flex items-center justify-center gap-2">
                    ✉ Email
                  </a>
                </div>
              </div>

              <div className="border border-gold/20 bg-noir-card p-4 md:p-6">
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Informations attendues</div>
                <ul className="space-y-3">
                  {expects.map((e) => (
                    <li key={e} className="text-xs text-neutral-400 flex items-start gap-3">
                      <span className="text-gold mt-0.5 shrink-0">{e.split(" ")[0]}</span>
                      <span>{e.split(" ").slice(1).join(" ")}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative border border-gold/30 p-5 md:p-8 text-center overflow-hidden bg-gradient-to-br from-noir-card to-noir">
                <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                  backgroundImage: "radial-gradient(circle at center, rgba(201,169,97,0.3) 0%, transparent 70%)"
                }} />
                <div className="relative">
                  <div className="font-serif text-4xl gold-text-gradient mb-1">24h / 7j</div>
                  <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-400 mt-2">Disponible à toute heure, sur réservation</div>
                </div>
              </div>
            </aside>

          </div>
        </form>
      </section>

      {confirmed && <ConfirmModal name={sentName} onClose={() => setConfirmed(false)} />}
    </main>
  );
}
