export function Breadcrumb({ items }: { items: string[] }) {
  return (
    <div className="px-4 md:px-10 py-3 text-[11px] uppercase tracking-[0.2em] bg-noir-soft border-b border-gold/10">
      {items.map((it, i) => (
        <span key={i}>
          {i > 0 && <span className="mx-3 text-gold">/</span>}
          <span className={i === items.length - 1 ? "text-gold" : "text-neutral-500"}>{it}</span>
        </span>
      ))}
    </div>
  );
}
