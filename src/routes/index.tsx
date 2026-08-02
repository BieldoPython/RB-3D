import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import banner from "@/assets/banner1.png"
import heroImage from "@/assets/hero.jpg";
import bonecos from "@/assets/p-bonecos.jpg";
import chaveiros from "@/assets/p-chaveiros.jpg";
import decor from "@/assets/p-decor.jpg";
import suportes from "@/assets/p-suportes.jpg";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { SiteFooter } from "@/components/SiteFooter";
import { categories, products, type CategoryId, type Product } from "@/data/products";

const heroImages = [banner,heroImage, chaveiros, suportes, bonecos, decor];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "R&B 3D · Chaveiros, Suportes e Bonecos em Impressão 3D" },
      {
        name: "description",
        content:
          "Loja de peças impressas em 3D sob encomenda: chaveiros personalizados, suportes de mesa, bonecos articulados e decoração. Visualize cada item e encomende.",
      },
      { property: "og:title", content: "R&B 3D · Peças em Impressão 3D sob Encomenda" },
      {
        property: "og:description",
        content:
          "Chaveiros, suportes, bonecos articulados e decoração impressos em 3D com acabamento premium.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  { n: "01", t: "Escolha a peça", d: "Navegue pelo catálogo por tipo e visualize os detalhes." },
  { n: "02", t: "Personalize", d: "Defina cor do filamento, texto ou logo da sua peça." },
  { n: "03", t: "Imprimimos", d: "Produção em 2 a 5 dias úteis, camada por camada." },
  { n: "04", t: "Receba em casa", d: "Envio para todo o Brasil com código de rastreio." },
];

function Index() {
  const [filter, setFilter] = useState<CategoryId | "todos">("todos");
  const [selected, setSelected] = useState<Product | null>(null);

  const visible = useMemo(
    () => (filter === "todos" ? products : products.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 sm:py-4 md:flex md:justify-between">
          <a href="#top" className="truncate font-display text-lg tracking-tight text-foreground">
            R&B <span className="text-primary">3D</span>
          </a>
          <div className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <a href="#catalogo" className="transition-colors hover:text-foreground">
              Catálogo
            </a>
            <a href="#como-funciona" className="transition-colors hover:text-foreground">
              Como funciona
            </a>
          </div>
          <a
            href="#catalogo"
            className="shrink-0 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ver peças
          </a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative flex min-h-[70vh] flex-col justify-center overflow-hidden">
          <HeroCarousel images={heroImages} />
          <div
            className="absolute inset-0 bg-grid opacity-60"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, rgb(0 0 0 / 35%) 35%, black 85%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, rgb(0 0 0 / 35%) 35%, black 85%)",
            }}
          />
          <div className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
            <div className="mx-auto grid max-w-2xl gap-5 text-center lg:max-w-3xl">
              <span className="mx-auto w-fit rounded-full border border-primary/30 bg-background/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur-sm sm:px-4 sm:text-xs">
                Impressão 3D sob encomenda
              </span>
              <h1 className="font-display text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
                Ideias que saem da tela e viram{" "}
                <span className="text-gradient">peça na sua mão</span>
              </h1>
              <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base">
                Chaveiros personalizados, suportes que organizam seu setup, bonecos articulados e
                decoração — tudo impresso camada por camada, com acabamento caprichado.
              </p>
              <div className="grid gap-3 sm:flex sm:flex-wrap sm:justify-center">
                <a
                  href="#catalogo"
                  className="rounded-full bg-primary px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  style={{ boxShadow: "var(--shadow-glow)" }}
                >
                  Explorar catálogo
                </a>
                <a
                  href="#como-funciona"
                  className="rounded-full border border-border bg-background/80 px-6 py-3.5 text-center text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
                >
                  Como funciona
                </a>
              </div>
              <dl className="mt-2 grid grid-cols-3 gap-3">
                {[
                  ["+1.200", "peças impressas"],
                  ["+ 40", "produtos"],
                  ["4,9/5", "avaliação"],
                ].map(([v, l]) => (
                  <div key={l} className="min-w-0">
                    <dt className="font-display text-xl text-foreground sm:text-2xl">{v}</dt>
                    <dd className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      {l}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Catálogo */}
        <section id="catalogo" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-5 md:flex md:flex-wrap md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-2xl text-foreground sm:text-3xl md:text-4xl">
                Catálogo
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Filtre por tipo de peça e clique para ver os detalhes de cada item.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[{ id: "todos" as const, label: "Todos" }, ...categories].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all sm:px-4 sm:py-2 sm:text-sm ${
                    filter === cat.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {visible.map((product) => (
              <ProductCard key={product.id} product={product} onSelect={setSelected} />
            ))}
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="border-y border-border bg-secondary/50">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <h2 className="font-display text-2xl text-foreground sm:text-3xl md:text-4xl">
              Como funciona
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="surface-card rounded-2xl border border-border p-5 transition-colors hover:border-primary/50 sm:p-6"
                >
                  <span className="font-display text-2xl text-primary sm:text-3xl">{s.n}</span>
                  <h3 className="mt-3 text-base text-foreground">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
