export const W = {
  images: {
    vehiculeMain:    "/images/black_1440.png",
    vehiculeExt:     "/images/black_1440.png",
    vehiculeInt:     "/images/interieur1.jpg",
    vehiculeCabine:  "/images/section06_1440.webp",

  },
  Img: ({ className = "", label = "Image", src }: any) => (
    <div className={`relative bg-gradient-to-br from-neutral-800 to-neutral-950 overflow-hidden ${className}`}>
      {src ? (
        <img src={src} alt={label} className="w-full h-full object-cover" />
      ) : (
        <>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "radial-gradient(circle at 30% 20%, rgba(201,169,97,0.3) 0%, transparent 50%)"
          }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold opacity-60">{label}</span>
          </div>
        </>
      )}
    </div>
  ),
  Tag: ({ children }: any) => (
    <span className="inline-block px-4 py-1.5 border border-gold/40 bg-noir-card text-xs text-gold tracking-wider uppercase">
      {children}
    </span>
  ),
  Input: ({ label, placeholder, full = true, textarea, type = "text", ...rest }: any) => (
    <div className={full ? "w-full" : "flex-1"}>
      {label && <div className="text-[11px] uppercase tracking-[0.15em] text-gold/80 mb-2">{label}</div>}
      {textarea ? (
        <textarea
          placeholder={placeholder}
          className="w-full h-24 bg-noir border border-neutral-800 hover:border-gold/40 focus:border-gold transition-colors px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none resize-none"
          {...rest}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full bg-noir border border-neutral-800 hover:border-gold/40 focus:border-gold transition-colors px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none ${
            type === "date" || type === "time" ? "[color-scheme:dark]" : ""
          }`}
          {...rest}
        />
      )}
    </div>
  ),
  GoldLine: ({ className = "" }: any) => <div className={`gold-divider ${className}`} />,
  SectionLabel: ({ children }: any) => (
    <div className="inline-flex items-center gap-3 mb-4">
      <div className="w-8 h-px bg-gold" />
      <span className="text-[11px] uppercase tracking-[0.3em] text-gold">{children}</span>
      <div className="w-8 h-px bg-gold" />
    </div>
  ),
};
