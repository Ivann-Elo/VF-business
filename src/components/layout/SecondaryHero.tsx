export function SecondaryHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative bg-noir border-b border-gold/20 px-4 @lg:px-10 py-16 @lg:py-24 text-center overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(ellipse at center top, rgba(201,169,97,0.25) 0%, transparent 60%)"
      }} />
      <div className="relative">
        <div className="gold-divider w-24 mx-auto mb-6" />
        <h1 className="font-serif text-3xl @lg:text-5xl text-white mb-4 tracking-wide">{title}</h1>
        {subtitle && <p className="text-sm @lg:text-base text-neutral-400 max-w-2xl mx-auto">{subtitle}</p>}
        <div className="gold-divider w-24 mx-auto mt-6" />
      </div>
    </section>
  );
}
