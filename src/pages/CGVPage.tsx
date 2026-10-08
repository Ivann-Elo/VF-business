import { W } from "../components/WireframeUI";
import { Breadcrumb } from "../components/layout/Breadcrumb";
import { SecondaryHero } from "../components/layout/SecondaryHero";

const articles = [
  {
    num: "Article 2",
    label: "Objet",
    title: "Objet et champ d'application",
    content: (
      <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
        <p>Les présentes CGV régissent les prestations de transport de personnes avec chauffeur proposées par VF BUSINESS, notamment :</p>
        <ul className="space-y-2 ml-4">
          {[
            "Transferts privés, professionnels, touristiques et événementiels ;",
            "Transferts vers les aéroports, gares, hôtels et ports ;",
            "Transports aller simple ou aller-retour ;",
            "Mises à disposition avec chauffeur ;",
            "Prestations réalisées pour des hôtels, conciergeries, entreprises et partenaires professionnels ;",
            "Missions de transport et d'assistance commandées par des compagnies d'assurance ou leurs prestataires.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-gold mt-1 shrink-0">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Elles s'appliquent aux clients particuliers et professionnels, sous réserve des dispositions légales impératives et des accords particuliers conclus par écrit.</p>
      </div>
    ),
  },
  {
    num: "Article 3",
    label: "Réservation",
    title: "Réservation et confirmation",
    content: (
      <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
        <p>Toute réservation doit comporter les informations nécessaires à la bonne exécution de la prestation : identité du client ou du donneur d'ordre, date, heure, lieux de départ et d'arrivée, nombre de passagers, bagages, présence d'enfants ou d'animaux et besoins particuliers.</p>
        <p>Une réservation est considérée comme confirmée après acceptation du devis ou de la proposition tarifaire par le client et confirmation de VF BUSINESS.</p>
        <p>Cette acceptation peut intervenir par écrit, notamment par e-mail, SMS, messagerie électronique ou validation d'un bon de commande.</p>
        <p>Les présentes CGV sont communiquées ou rendues accessibles au client avant la confirmation de la réservation.</p>
      </div>
    ),
  },
  {
    num: "Article 4",
    label: "Tarifs",
    title: "Tarifs et prestations incluses",
    content: (
      <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
        <p>Les tarifs sont communiqués en euros toutes taxes comprises (TTC), sauf mention contraire.</p>
        <p>Le prix convenu correspond à la prestation initialement réservée, selon les lieux, horaires, itinéraires et conditions communiqués.</p>
        <p>Les péages, parkings, attentes, détours, arrêts supplémentaires et autres frais éventuels sont inclus lorsqu'ils sont expressément prévus dans le devis.</p>
        <p>Toute modification substantielle de la prestation peut entraîner une facturation complémentaire, après information du client et acceptation du supplément applicable.</p>
      </div>
    ),
  },
  {
    num: "Article 5",
    label: "Paiement",
    title: "Modalités de paiement",
    content: (
      <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
        <p>VF BUSINESS accepte exclusivement les modes de règlement suivants :</p>
        <ul className="space-y-2 ml-4">
          {["Carte bancaire ;", "Espèces ;", "Virement bancaire."].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-gold mt-1 shrink-0">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Les paiements par chèque ne sont pas acceptés.</p>
        <p>Sauf accord contraire, le paiement est exigible au plus tard à l'issue de la prestation.</p>
        <p>Pour les clients professionnels, des conditions de paiement différé peuvent être convenues par écrit, dans les limites légales applicables, notamment jusqu'à 60 jours à compter de l'émission de la facture.</p>
        <p>Aucun escompte n'est accordé pour paiement anticipé.</p>
      </div>
    ),
  },
  {
    num: "Article 6",
    label: "Retard de paiement",
    title: "Retard de paiement des clients professionnels",
    content: (
      <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
        <p>En cas de retard de paiement d'une facture professionnelle, des pénalités sont exigibles de plein droit dès le lendemain de la date d'échéance, sans rappel préalable.</p>
        <p>Le taux des pénalités est fixé à trois fois le taux d'intérêt légal en vigueur, sans pouvoir être inférieur au minimum légal applicable.</p>
        <p>Une indemnité forfaitaire de 40 € pour frais de recouvrement est également due par le client professionnel en retard de paiement.</p>
        <p>Une indemnisation complémentaire peut être demandée sur justificatifs lorsque les frais de recouvrement réellement engagés dépassent ce montant, conformément à la réglementation.</p>
        <p className="text-gold/60 italic">Ces dispositions ne s'appliquent pas aux consommateurs particuliers.</p>
      </div>
    ),
  },
  {
    num: "Article 7",
    label: "Modification",
    title: "Modification de réservation",
    content: (
      <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
        <p>Toute demande de modification doit être communiquée au moins 2 heures avant l'heure prévue de prise en charge.</p>
        <p>Les modifications restent soumises à la disponibilité du chauffeur et du véhicule.</p>
        <p>Une modification concernant l'horaire, l'itinéraire, le nombre de passagers ou la durée de la prestation peut nécessiter une révision du tarif, soumise à l'acceptation du client.</p>
        <p>VF BUSINESS ne garantit pas la possibilité d'accepter une modification tardive.</p>
      </div>
    ),
  },
  {
    num: "Article 8",
    label: "Annulation",
    title: "Annulation de réservation",
    content: (
      <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
        <p>Sous réserve des dispositions impératives applicables aux consommateurs, les conditions d'annulation convenues sont les suivantes :</p>
        <div className="border border-gold/20 bg-noir-card mt-4">
          {[
            ["Plus de 24 heures avant la prise en charge", "Aucun frais"],
            ["Entre 24 heures et 2 heures avant", "50 % du montant convenu"],
            ["Moins de 2 heures avant", "100 % du montant convenu"],
          ].map(([delai, frais], i, arr) => (
            <div key={delai} className={`flex flex-col md:flex-row md:justify-between px-4 md:px-6 py-4 gap-1 ${i < arr.length - 1 ? "border-b border-neutral-800" : ""}`}>
              <span className="text-sm text-neutral-300">{delai}</span>
              <span className="text-sm text-gold font-medium shrink-0">{frais}</span>
            </div>
          ))}
        </div>
        <p>En cas de circonstances exceptionnelles dûment justifiées, VF BUSINESS peut examiner une demande de dérogation ou de report.</p>
        <p>Pour les réservations effectuées par un partenaire professionnel, des conditions spécifiques peuvent être convenues par contrat.</p>
      </div>
    ),
  },
  {
    num: "Article 9",
    label: "Attente",
    title: "Retard et temps d'attente",
    content: (
      <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
        <p>Une franchise de <span className="text-white">15 minutes d'attente gratuites</span> est accordée à compter de l'heure de prise en charge convenue.</p>
        <p>Au-delà, l'attente supplémentaire est facturée <span className="text-white">1 € HT par minute commencée</span>, sous réserve de l'information préalable du client.</p>
        <p className="text-white text-xs uppercase tracking-[0.15em] mt-2">Exception pour les transports publics :</p>
        <p>Lorsqu'un retard est directement imputable à un train, un avion ou un autre transport public, aucun supplément d'attente n'est appliqué, sous réserve que le client ait informé VF BUSINESS dès que possible et que le retard puisse être justifié.</p>
      </div>
    ),
  },
  {
    num: "Article 10",
    label: "Absence",
    title: "Absence du client",
    content: (
      <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
        <p>Le client doit se présenter au lieu et à l'heure convenus.</p>
        <p>En l'absence du client, sans information préalable ni motif valable, au-delà de 30 minutes, la prestation peut être considérée comme non honorée. VF BUSINESS se réserve la possibilité de facturer 100 % du montant de la prestation réservée, ainsi que le temps d'attente supplémentaire au tarif de 1 € HT par minute.</p>
      </div>
    ),
  },
  {
    num: "Article 11",
    label: "Chauffeur",
    title: "Obligations du chauffeur",
    content: (
      <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
        <p>VF BUSINESS s'engage à assurer les prestations confirmées dans des conditions professionnelles de confort, de discrétion, de sécurité et de ponctualité.</p>
        <p>Le véhicule utilisé est entretenu et assuré conformément aux obligations réglementaires applicables à l'activité VTC.</p>
        <p>Le chauffeur respecte la réglementation routière et peut adapter l'itinéraire aux conditions de circulation ou aux impératifs de sécurité.</p>
        <p>Les horaires d'arrivée constituent des estimations lorsqu'ils dépendent de circonstances extérieures telles que la circulation, les accidents, les intempéries ou les restrictions de circulation.</p>
      </div>
    ),
  },
  {
    num: "Article 12",
    label: "Passagers",
    title: "Obligations des passagers",
    content: (
      <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
        <p>Les passagers doivent respecter le chauffeur, le véhicule et les règles de sécurité. Il est notamment interdit :</p>
        <ul className="space-y-2 ml-4">
          {[
            "De fumer ou vapoter à bord ;",
            "De consommer des stupéfiants ;",
            "De consommer de l'alcool à bord sans autorisation expresse ;",
            "D'adopter un comportement agressif, dangereux ou susceptible de perturber la conduite ;",
            "De dégrader ou salir volontairement le véhicule.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-gold mt-1 shrink-0">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>VF BUSINESS peut refuser ou interrompre une prestation lorsqu'un comportement présente un risque sérieux pour la sécurité, sans préjudice des droits légaux du client.</p>
      </div>
    ),
  },
  {
    num: "Article 13",
    label: "Enfants",
    title: "Enfants et dispositifs de retenue",
    content: (
      <p className="text-sm text-neutral-400 leading-relaxed">La présence d'enfants doit être signalée lors de la réservation. Le client doit préciser leur âge et, si nécessaire, les informations permettant de prévoir un siège enfant ou un rehausseur adapté. La disponibilité de ces équipements doit être confirmée avant la prestation. Le transport des enfants est réalisé dans le respect de la réglementation applicable.</p>
    ),
  },
  {
    num: "Article 14",
    label: "Animaux",
    title: "Animaux",
    content: (
      <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
        <p>Les animaux de compagnie peuvent être acceptés à bord, sous réserve d'une information préalable lors de la réservation. Pour les animaux de grande taille, le client doit préciser les besoins de transport.</p>
        <p>Les animaux doivent être maintenus dans des conditions garantissant la sécurité et la propreté du véhicule. Les animaux d'assistance légalement admis bénéficient des dispositions réglementaires spécifiques.</p>
      </div>
    ),
  },
  {
    num: "Article 15",
    label: "Bagages",
    title: "Bagages et objets personnels",
    content: (
      <p className="text-sm text-neutral-400 leading-relaxed">Le client doit signaler les bagages volumineux, équipements particuliers ou objets nécessitant un espace de chargement important. Le nombre et le volume des bagages doivent rester compatibles avec les capacités du véhicule et les exigences de sécurité.</p>
    ),
  },
  {
    num: "Article 16",
    label: "Objets oubliés",
    title: "Objets oubliés",
    content: (
      <p className="text-sm text-neutral-400 leading-relaxed">En cas d'oubli d'un objet à bord, le client est invité à contacter VF BUSINESS dès que possible. VF BUSINESS s'efforce de faciliter sa restitution. Les frais raisonnables de réexpédition ou de déplacement spécialement nécessaires à la restitution peuvent être facturés au client après accord préalable.</p>
    ),
  },
  {
    num: "Article 17",
    label: "Dégradations",
    title: "Dégradations et nettoyage exceptionnel",
    content: (
      <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
        <p>Le client est responsable des dommages qui lui sont imputables. Les dégradations, salissures importantes ou nettoyages exceptionnels peuvent donner lieu à une facturation correspondant aux frais réels et justifiés.</p>
        <p>Une provision pouvant atteindre <span className="text-white">150 €</span> peut être demandée en cas de dommages ou de salissures nécessitant une intervention. Cette somme fait l'objet d'une régularisation sur présentation des justificatifs.</p>
      </div>
    ),
  },
  {
    num: "Article 18",
    label: "Entreprises",
    title: "Prestations pour les entreprises et donneurs d'ordre",
    content: (
      <p className="text-sm text-neutral-400 leading-relaxed">Lorsqu'une prestation est commandée par une entreprise, un hôtel, une conciergerie, un intermédiaire VTC ou un autre partenaire professionnel, le donneur d'ordre contractant est responsable du règlement dans les conditions convenues. Les modalités particulières prévues dans un contrat-cadre ou un accord commercial écrit prévalent sur les présentes CGV pour les points concernés.</p>
    ),
  },
  {
    num: "Article 19",
    label: "Assurance",
    title: "Missions d'assistance et d'assurance",
    content: (
      <p className="text-sm text-neutral-400 leading-relaxed">Dans le cadre de missions commandées par des compagnies d'assurance, des sociétés d'assistance ou leurs prestataires, VF BUSINESS réalise le transport conformément à l'ordre de mission reçu et accepté. Toute modification substantielle de la mission doit être validée par le donneur d'ordre lorsque celui-ci supporte le coût de la prestation.</p>
    ),
  },
  {
    num: "Article 20",
    label: "Responsabilité",
    title: "Responsabilité et circonstances exceptionnelles",
    content: (
      <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
        <p>VF BUSINESS répond de ses obligations conformément aux règles légales applicables.</p>
        <p>En cas d'événement imprévisible et irrésistible répondant aux conditions légales de la force majeure, les obligations des parties sont appréciées conformément au droit en vigueur.</p>
        <p>Aucune stipulation des présentes CGV ne saurait exclure ou limiter une responsabilité lorsque la loi l'interdit.</p>
      </div>
    ),
  },
  {
    num: "Article 21",
    label: "Réclamations",
    title: "Réclamations",
    content: (
      <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
        <p>Toute réclamation peut être adressée à :</p>
        <div className="border border-gold/20 bg-noir-card">
          {[
            ["Adresse", "1761 avenue de la Bouverie, 83520 Roquebrune-sur-Argens"],
            ["E-mail", "contact@vtc-vfbusiness.fr"],
            ["Téléphone", "07 66 39 39 75"],
          ].map(([k, v], i, arr) => (
            <div key={k} className={`flex flex-col md:flex-row md:justify-between px-4 md:px-6 py-4 gap-1 ${i < arr.length - 1 ? "border-b border-neutral-800" : ""}`}>
              <span className="text-[11px] uppercase tracking-[0.2em] text-gold/80 shrink-0">{k}</span>
              <span className="text-sm text-neutral-300">{v}</span>
            </div>
          ))}
        </div>
        <p>VF BUSINESS examine les réclamations et recherche une solution amiable dans les meilleurs délais.</p>
      </div>
    ),
  },
  {
    num: "Article 22",
    label: "Données personnelles",
    title: "Données personnelles",
    content: (
      <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
        <p>Les données communiquées lors d'une réservation sont utilisées pour traiter la demande, organiser la prestation, assurer le suivi client et respecter les obligations administratives, comptables et légales de VF BUSINESS.</p>
        <p>Elles ne sont communiquées qu'aux personnes ou partenaires dont l'intervention est nécessaire à la prestation, ou lorsque la loi l'exige.</p>
        <p>Toute demande relative aux données personnelles peut être adressée à <a href="mailto:contact@vtc-vfbusiness.fr" className="text-gold hover:text-gold-light transition-colors">contact@vtc-vfbusiness.fr</a>. Une politique de confidentialité distincte précise les modalités de traitement, de conservation et d'exercice des droits.</p>
      </div>
    ),
  },
  {
    num: "Article 23",
    label: "Droit applicable",
    title: "Droit applicable et règlement des litiges",
    content: (
      <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
        <p>Les présentes CGV sont soumises au droit français.</p>
        <p>En cas de différend, les parties recherchent prioritairement une solution amiable. À défaut, les juridictions compétentes sont déterminées conformément aux règles légales applicables, notamment celles protégeant les consommateurs.</p>
      </div>
    ),
  },
  {
    num: "Article 24",
    label: "Acceptation",
    title: "Acceptation et entrée en vigueur",
    content: (
      <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
        <p>Les présentes CGV prennent effet à compter de leur date de publication ou de communication, après validation définitive.</p>
        <p>La confirmation d'une réservation vaut acceptation des CGV préalablement portées à la connaissance du client.</p>
        <p>VF BUSINESS peut modifier ses CGV pour les réservations futures. Les prestations déjà confirmées restent soumises aux conditions acceptées au moment de la réservation, sauf accord ultérieur des parties.</p>
      </div>
    ),
  },
];

export function CGVPage() {
  return (
    <main className="bg-noir">
      <Breadcrumb items={["Accueil", "CGV"]} />
      <SecondaryHero title="Conditions Générales de Vente" subtitle="Conditions applicables aux prestations de transport avec chauffeur VF BUSINESS" />

      <section className="px-4 md:px-10 py-16 max-w-4xl mx-auto space-y-16">

        {/* Article 1 — Identification */}
        <div>
          <W.SectionLabel>Article 1</W.SectionLabel>
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-8">Identification du prestataire</h2>
          <div className="border border-gold/20 bg-noir-card">
            {[
              ["Raison sociale", "VF BUSINESS"],
              ["Forme juridique", "Société par actions simplifiée à associé unique (SASU)"],
              ["Capital social", "500 €"],
              ["Siège social", "1761 avenue de la Bouverie, Résidence Les Coteaux d'Argens, appt D007, 83520 Roquebrune-sur-Argens"],
              ["SIREN", "993 979 640"],
              ["SIRET", "993 979 640 00014"],
              ["RCS", "Fréjus"],
              ["TVA intracommunautaire", "FR46 993 979 640"],
              ["Président", "Frédéric Varin"],
              ["Téléphone", "07 66 39 39 75"],
              ["E-mail", "contact@vtc-vfbusiness.fr"],
              ["Site internet", "vtc-vfbusiness.fr"],
            ].map(([k, v], i, arr) => (
              <div key={k} className={`flex flex-col md:flex-row md:justify-between px-4 md:px-6 py-4 gap-1 ${i < arr.length - 1 ? "border-b border-neutral-800" : ""}`}>
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold/80 shrink-0">{k}</span>
                <span className="text-sm text-neutral-300 md:text-right md:max-w-xs">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Articles 2–24 */}
        {articles.map((a) => (
          <div key={a.num}>
            <W.SectionLabel>{a.num} — {a.label}</W.SectionLabel>
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-6">{a.title}</h2>
            {a.content}
          </div>
        ))}

        <div className="gold-divider" />
        <p className="text-[11px] text-neutral-600 text-center tracking-[0.2em] uppercase">
          Dernière mise à jour : octobre 2026
        </p>

      </section>
    </main>
  );
}
