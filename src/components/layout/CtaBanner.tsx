export function CtaBanner({ onCta }: { onCta: () => void }) {
  return (
    <section className="relative bg-noir px-4 @lg:px-10 py-16 text-center overflow-hidden border-y border-gold/20">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(201,169,97,0.3) 0%, transparent 60%)"
      }} />
      <div className="relative max-w-2xl mx-auto">
        <div className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">Réservation</div>
        <h2 className="font-serif text-2xl @lg:text-4xl text-white mb-3">Prêt à réserver votre chauffeur ?</h2>
        <p className="text-sm text-neutral-400 mb-8">
          Devis personnalisé en moins de 12 heures · Disponible 24h/24, 7j/7
        </p>
        <div className="flex flex-col @lg:flex-row gap-3 justify-center">
          <button onClick={onCta} className="btn-gold px-8 py-3.5 text-xs uppercase">
            Demander un devis
          </button>
          <button className="btn-outline-gold px-8 py-3.5 text-xs uppercase">
            Appeler maintenant
          </button>
        </div>
      </div>
    </section>
  );
}
