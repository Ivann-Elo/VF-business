export function SecondaryHero({ title, subtitle, logo, image }: { title: string; subtitle?: string; logo?: boolean; image?: string }) {
  return (
    <section className="relative bg-noir border-b border-gold/20 px-4 md:px-10 py-16 md:py-24 text-center overflow-hidden">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-black/85" />
        </>
      )}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(ellipse at center top, rgba(201,169,97,0.25) 0%, transparent 60%)"
      }} />
      <div className="relative">
        {logo && (
          <img
            src="/images/LogoVFbusinesS.png"
            alt="VF Business"
            className="h-20 md:h-28 w-auto object-contain mx-auto mb-8"
          />
        )}
        <div className="gold-divider w-24 mx-auto mb-6" />
        <h1 className="font-serif text-3xl md:text-5xl text-white mb-4 tracking-wide">{title}</h1>
        {subtitle && <p className={`text-sm md:text-base max-w-2xl mx-auto ${image ? "text-neutral-200" : "text-neutral-400"}`}>{subtitle}</p>}
        <div className="gold-divider w-24 mx-auto mt-6" />
      </div>
    </section>
  );
}
