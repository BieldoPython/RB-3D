import { categories, formatPrice, type Product } from "@/data/products";

export function ProductCard({
  product,
  onSelect,
}: {
  product: Product;
  onSelect: (product: Product) => void;
}) {
  const category = categories.find((c) => c.id === product.category);

  return (
    <button
      type="button"
      onClick={() => onSelect(product)}
      className="group surface-card relative overflow-hidden rounded-xl border border-border text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:rounded-2xl"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.badge ? (
          <span className="absolute left-2 top-2 rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary-foreground sm:left-3 sm:top-3 sm:px-3 sm:py-1 sm:text-[11px]">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="space-y-1.5 p-2.5 sm:space-y-2 sm:p-4 md:p-5">
        <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-primary/80 sm:text-[11px] sm:tracking-[0.18em]">
          {category?.label}
        </span>
        <h3 className="font-display text-sm leading-tight text-foreground sm:text-base md:text-lg">
          {product.name}
        </h3>
        <p className="line-clamp-2 text-xs text-muted-foreground sm:text-sm">{product.tagline}</p>
        <div className="flex items-center justify-between pt-1 sm:pt-2">
          <span className="font-display text-base text-primary sm:text-lg md:text-xl">
            {formatPrice(product.price)}
          </span>
          <span className="hidden text-[11px] font-semibold uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-primary sm:inline sm:text-xs">
            Visualizar →
          </span>
        </div>
      </div>
    </button>
  );
}