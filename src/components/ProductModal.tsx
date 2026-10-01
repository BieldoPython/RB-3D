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
  // Sempre mostra a cor original (índice 0) nas fotos, independente da cor selecionada
  const current = getProductImage(product, viewIndex);
  const hasMultipleViews = viewCount > 1;

  const colorMap: Record<string, string> = {
    "azul": "#224bd3",
    "azul claro": "#60A5FA",
    "amarelo": "#FFFF00",
    "preto": "#111827",
    "rosa": "#f42783",
    "branco": "#FFFFFF",
    "grafite": "#4B5563",
    "azul metálico": "#3B82F6",
    "verde": "#00FF00",
    "vermelho": "#DC2626",
    "tons claros": "#F3F4F6",
    "claro": "#F3F4F6",
    "cinza primer": "#9CA3AF",
    "laranja": "#F97316",
    "cinza": "#9CA3AF",
    "off-white": "#F9FAF1",
    "original": "#E5E7EB",
  };

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
            <div className="min-w-0 overflow-hidden">
              <div className="group relative aspect-square overflow-hidden bg-secondary">
                <img
                  key={`${viewIndex}-${colorIndex}`}
                  src={current}
                  alt={`${product.name} — ${product.colors[colorIndex]?.label ?? "cor"} · vista ${viewIndex + 1}`}
                  width={1024}
                  height={1024}
                  onClick={() => setLightbox(true)}
                  className="h-full w-full cursor-zoom-in object-cover transition-all duration-300"
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
                        src={view}
                        alt=""
                        loading="lazy"
                        width={1024}
                        height={1024}
                        className="h-full w-full object-cover"
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

              <div className="order-3 md:order-2 space-y-3">
                {product.description.split(/\\n|\n/).map((paragraph, idx) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;
                  return (
                    <p key={idx} className="text-sm leading-relaxed text-muted-foreground">
                      {trimmed}
                    </p>
                  );
                })}
              </div>

              <div className="order-1 md:order-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Cores disponíveis
                  </span>
                  <span className="text-xs font-bold text-primary">
                    {product.colors[colorIndex]?.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((c, i) => {
                    const labelLower = c.label.toLowerCase();
                    const isMultiColor =
                      labelLower.includes("várias") ||
                      labelLower.includes("multi") ||
                      labelLower.includes("mesclado") ||
                      labelLower.includes("colorido") ||
                      labelLower.includes("predefinidas");

                    const isThreeColors =
                      labelLower.includes("preto") &&
                      labelLower.includes("branco") &&
                      labelLower.includes("vermelho");

                    let style = {};
                    if (isThreeColors) {
                      style = {
                        background:
                          "linear-gradient( #111827 33%, #ffffff 33%, #ffffff 66%, #dc2626 66%)",
                      };
                    } else if (isMultiColor) {
                      style = {
                        background:
                          "repeating-linear-gradient( #ef4444, #ef4444 4px, #3b82f6 4px, #3b82f6 8px, #eab308 8px, #eab308 12px, #10b981 12px, #10b981 16px)",
                      };
                    } else {
                      style = { backgroundColor: colorMap[labelLower] || "#ccc" };
                    }

                    return (
                      <button
                        key={c.id}
                        onClick={() => setColorIndex(i)}
                        title={c.label}
                        className={`group flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${
                          colorIndex === i
                            ? "border-primary scale-110 shadow-md"
                            : "border-transparent hover:border-border"
                        }`}
                      >
                        <span
                          className="h-7 w-7 rounded-full shadow-inner border border-border/60 transition-transform group-hover:scale-110"
                          style={style}
                        />
                      </button>
                    );
                  })}
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
                  <dd className="text-foreground">0,4 mm</dd>
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
