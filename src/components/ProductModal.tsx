import { useEffect, useState } from "react";
import { Maximize2 } from "lucide-react";
import { ImageLightbox } from "@/components/ImageLightbox";
import { categories, formatPrice, getProductImage, type Product } from "@/data/products";

export function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const [colorIndex, setColorIndex] = useState(0);
  const [viewIndex, setViewIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const viewCount = product?.views.length ?? 0;

  const getViewTransformClass = (index: number) => {
    switch (index) {
      case 1:
        return "-scale-x-100"; // horizontal flip
      case 2:
        return "-scale-y-100 rotate-180"; // vertical flip / rotate
      case 3:
        return "-scale-x-100 rotate-6 scale-110"; // zoomed and rotated
      default:
        return ""; // normal
    }
  };

  useEffect(() => {
    setColorIndex(0);
    setViewIndex(0);
    setLightbox(false);
  }, [product]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox || !product) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setViewIndex((i) => (i + 1) % Math.max(viewCount, 1));
      if (e.key === "ArrowLeft")
        setViewIndex((i) => (i - 1 + Math.max(viewCount, 1)) % Math.max(viewCount, 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, viewCount, lightbox, product]);

  if (!product) return null;

  const category = categories.find((c) => c.id === product.category);
  const current = getProductImage(product, viewIndex, colorIndex);
  const hasMultipleViews = viewCount > 1;

  const goView = (dir: 1 | -1) =>
    setViewIndex((i) => (i + dir + viewCount) % viewCount);

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-foreground/25 p-3 backdrop-blur-sm sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
        onClick={onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="surface-card relative my-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-border bg-card"
        >
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/90 text-muted-foreground shadow-sm backdrop-blur transition-colors hover:border-primary hover:text-primary"
          >
            ✕
          </button>
          <div className="grid gap-0 md:grid-cols-2">
            <div>
              <div className="group relative aspect-square overflow-hidden bg-secondary">
                <img
                  key={`${viewIndex}-${colorIndex}`}
                  src={current}
                  alt={`${product.name} — ${product.colors[colorIndex]?.label ?? "cor"} · vista ${viewIndex + 1}`}
                  width={1024}
                  height={1024}
                  onClick={() => setLightbox(true)}
                  className={`h-full w-full cursor-zoom-in object-cover transition-all duration-300 ${getViewTransformClass(viewIndex)}`}
                />

                <button
                  type="button"
                  onClick={() => setLightbox(true)}
                  aria-label="Abrir em tela cheia"
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/90 text-muted-foreground opacity-100 shadow-sm backdrop-blur transition-colors hover:border-primary hover:text-primary sm:opacity-0 sm:group-hover:opacity-100"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>

                {hasMultipleViews ? (
                  <>
                    <button
                      onClick={() => goView(-1)}
                      aria-label="Vista anterior"
                      className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-sm backdrop-blur transition-colors hover:border-primary hover:text-primary"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => goView(1)}
                      aria-label="Próxima vista"
                      className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-sm backdrop-blur transition-colors hover:border-primary hover:text-primary"
                    >
                      ›
                    </button>
                  </>
                ) : null}

                <span className="absolute bottom-3 left-3 rounded-full bg-card/85 px-3 py-1 text-xs text-muted-foreground">
                  {hasMultipleViews ? `${viewIndex + 1}/${viewCount} · ` : ""}
                  {product.colors[colorIndex]?.label} · toque para ampliar
                </span>
              </div>

              {hasMultipleViews ? (
                <div className="flex gap-2 overflow-x-auto p-3">
                  {product.views.map((view, i) => (
                    <button
                      key={`view-${i}`}
                      onClick={() => setViewIndex(i)}
                      aria-label={`Ver vista ${i + 1}`}
                      className={`h-16 w-16 shrink-0 overflow-hidden rounded-xl border transition-colors ${
                        i === viewIndex ? "border-primary" : "border-border hover:border-primary/50"
                      }`}
                    >
                      <img
                        src={view[colorIndex] ?? view[0]}
                        alt=""
                        loading="lazy"
                        width={1024}
                        height={1024}
                        className={`h-full w-full object-cover transition-all ${getViewTransformClass(i)}`}
                      />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col gap-5 p-5 sm:p-6 md:p-8">
              <div className="order-2 md:order-1 flex items-start justify-between gap-4 pr-10">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    {category?.label}
                  </span>
                  <h2 className="mt-1 font-display text-2xl text-foreground">{product.name}</h2>
                </div>
              </div>

              <p className="order-3 md:order-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

              <div className="order-1 md:order-3">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground">
                  Cor do filamento
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c, i) => (
                    <button
                      key={c.id}
                      onClick={() => setColorIndex(i)}
                      className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                        colorIndex === i
                          ? "border-primary bg-primary/15 text-primary"
                          : "border-border text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              <dl className="order-4 md:order-4 grid grid-cols-2 gap-3 rounded-2xl border border-border bg-secondary/60 p-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Material</dt>
                  <dd className="text-foreground">{product.material}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Medidas</dt>
                  <dd className="text-foreground">{product.size}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Produção</dt>
                  <dd className="text-foreground">{product.time}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Camada</dt>
                  <dd className="text-foreground">0,12 mm</dd>
                </div>
              </dl>

              <div className="order-5 md:order-5 grid gap-3 border-t border-border pt-4 sm:flex sm:flex-wrap sm:items-center sm:justify-between">
                <span className="font-display text-2xl text-gradient sm:text-3xl">
                  {formatPrice(product.price)}
                </span>
                <a
                  href={`https://wa.me/5500000000000?text=${encodeURIComponent(
                    `Olá! Quero encomendar: ${product.name} (${product.colors[colorIndex]?.label ?? ""})`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  style={{ boxShadow: "var(--shadow-glow)" }}
                >
                  Encomendar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightbox ? (
        <ImageLightbox
          src={current}
          alt={`${product.name} — ${product.colors[colorIndex]?.label ?? "cor"}`}
          onClose={() => setLightbox(false)}
        />
      ) : null}
    </>
  );
}
