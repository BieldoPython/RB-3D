import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, CreditCard, Sparkles, Store, RulerDimensionLine } from "lucide-react";
import banner from "@/assets/banner1.png"
import banner2 from "@/assets/banner2.png"
import banner3 from "@/assets/banner3.jpg"
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { SiteFooter } from "@/components/SiteFooter";

// Componente para o Logo do PIX oficial
const PixLogo = ({ className }: { className?: string }) => (
  <svg
    fill="#1289e7"
    width="800px"
    height="800px"
    viewBox="-4 -4 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.917 11.71a2.046 2.046 0 0 1-1.454-.602l-2.1-2.1a.4.4 0 0 0-.551 0l-2.108 2.108a2.044 2.044 0 0 1-1.454.602h-.414l2.66 2.66c.83.83 2.177.83 3.007 0l2.667-2.668h-.253zM4.25 4.282c.55 0 1.066.214 1.454.602l2.108 2.108a.39.39 0 0 0 .552 0l2.1-2.1a2.044 2.044 0 0 1 1.453-.602h.253L9.503 1.623a2.127 2.127 0 0 0-3.007 0l-2.66 2.66h.414z" />
    <path d="m14.377 6.496-1.612-1.612a.307.307 0 0 1-.114.023h-.733c-.379 0-.75.154-1.017.422l-2.1 2.1a1.005 1.005 0 0 1-1.425 0L5.268 5.32a1.448 1.448 0 0 0-1.018-.422h-.9a.306.306 0 0 1-.109-.021L1.623 6.496c-.83.83-.83 2.177 0 3.008l1.618 1.618a.305.305 0 0 1 .108-.022h.901c.38 0 .75-.153 1.018-.421L7.375 8.57a1.034 1.034 0 0 1 1.426 0l2.1 2.1c.267.268.638.421 1.017.421h.733c.04 0 .079.01.114.024l1.612-1.612c.83-.83.83-2.178 0-3.008z" />
  </svg>);

import { categories, products, hasCategory, type CategoryId, type Product } from "@/data/products";
import { bg } from "date-fns/locale";


const heroImages = [banner, banner2,banner3];

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
  { n: "01", t: "Escolha a peça 🔍" , d: "Navegue pelo catálogo por tipo e visualize os detalhes." },
  { n: "02", t: "Personalize 🖌️", d: "Defina cor do filamento, texto ou logo da sua peça." },
  { n: "03", t: "Imprimimos 🖨️", d: "Produção em 2 a 5 dias úteis, camada por camada." },
  { n: "04", t: "Receba em casa 🚚", d: "Envio para toda a cidade." },
];

function Index() {
  const [filter, setFilter] = useState<CategoryId | "todos">("todos");
  const [selected, setSelected] = useState<Product | null>(null);
  const [emailForm, setEmailForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [sentStatus, setSentStatus] = useState<"idle" | "success" | "error">("idle");

  const visible = useMemo(
    () => (filter === "todos" ? products : products.filter((p) => hasCategory(p, filter))),
    [filter],
  );

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const subjectEncoded = encodeURIComponent(emailForm.subject || "Contato do Site R&B 3D");
      const bodyEncoded = encodeURIComponent(
        `Nome: ${emailForm.name}\nE-mail: ${emailForm.email}\n\nMensagem:\n${emailForm.message}`
      );
      const mailtoUrl = `mailto:rbimpressoes92@gmail.com?subject=${subjectEncoded}&body=${bodyEncoded}`;
      window.location.href = mailtoUrl;
      setSentStatus("success");
      setEmailForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setSentStatus("error");
    } finally {
      setIsSending(false);
      setTimeout(() => setSentStatus("idle"), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 sm:py-4 md:flex md:justify-between">
          <a href="#top" className="flex items-center gap-2.5 truncate font-display text-lg tracking-tight text-foreground">
            <div className="flex h-8 w-8 shrink-0 overflow-hidden rounded-lg bg-primary/10">
              <img src="/logo.png" alt="R&B 3D Logo" className="h-full w-full object-contain" />
            </div>
            <span>
              R&B <span className="text-primary">3D</span>
            </span>
          </a>
          <div className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <a href="#catalogo" className="transition-colors hover:text-foreground">
              Catálogo
            </a>
            <a href="#como-funciona" className="transition-colors hover:text-foreground">
              Como funciona
            </a>
            <a href="#contato" className="transition-colors hover:text-foreground">
              Contato
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
              <p className="mx-auto max-w-xl text-sm text-foreground sm:text-base">
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

        {/* Seção Comércio (B2B) */}
        <section className="relative overflow-hidden py-16 sm:py-24 border-y border-border">
          {/* Fundo da seção com um tom suave */}
          <div className="absolute inset-0 bg-secondary/30" />
          
          {/* Imagem de fundo (Substitua 'comercio-bg.jpg' pelo seu arquivo em src/assets/) */}
          <div 
            className="absolute inset-0 bg-cover bg-right bg-no-repeat"
            style={{
              backgroundImage: "url('/src/assets/comercio-bg.jpg')", // Coloque sua imagem aqui
            }}
          />

          {/* Gradiente ajustado para combinar com o novo fundo 'secondary/30' */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 via-secondary/20 to-transparent" />
          
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="text-center lg:text-left">
                <span className="mx-auto lg:mx-0 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Soluções para o seu Negócio
                </span>
                <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl">
                  Temos itens pensados para o <span className="text-gradient font-bold">seu comércio!</span>
                </h2>
                <p className="mt-4 text-sm text-muted-foreground sm:text-base leading-relaxed mx-auto lg:mx-0 max-w-xl">
                  Sua loja merece praticidade, organização e estilo. Desenvolvemos peças em impressão 3D premium feitas sob medida para facilitar o seu dia a dia e encantar seus clientes no ponto de venda.
                </p>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <button
                    onClick={() => {
                      setFilter("comercio");
                      document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 pointer-events-auto cursor-pointer"
                    style={{ boxShadow: "var(--shadow-glow)" }}
                  >
                    Ver itens para Comércio
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
              
              {/* O grid de cards fica do lado direito, sobre o gradiente */}
              <div className="grid gap-4 sm:grid-cols-2 relative z-10">
                {[
                  {
                    icon: CreditCard,
                    title: "Suportes de Maquininha",
                    desc: "Organização e ergonomia no balcão de vendas, mantendo a maquininha firme e protegida.",
                  },
                  {
                    icon: PixLogo,
                    title: "Displays de PIX",
                    desc: "Facilite o pagamento via PIX exibindo o QR Code da sua conta de forma clara e profissional.",
                  },
                  {
                    icon: Store,
                    title: "Organização do Balcão",
                    desc: "Porta-cartões de visita, displays de recados e organizadores personalizados para o seu espaço.",
                  },
                  {
                    icon: RulerDimensionLine,
                    title: "Peças Sob Medida",
                    desc: "Precisa de algo único com o logo ou nas cores da sua marca? Nós projetamos e imprimimos para você.",
                  }
                ].map((item, idx) => (
                  <div key={idx} className="surface-card rounded-2xl border border-border bg-card/80 p-5 backdrop-blur-sm transition-colors hover:border-primary/40">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.title === "Displays de PIX" ? "bg-blue-100 text-blue-600" : "bg-primary/10 text-primary"}`}>
                      <item.icon className={`h-6 w-6 ${item.title === "Displays de PIX" ? "-ml-0.5" : ""}`} strokeWidth={item.title === "Displays de PIX" ? 2.5 : 2} />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-foreground sm:text-base">{item.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
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

        {/* Enviar E-mail / Fale Conosco */}
        <section id="contato" className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="surface-card rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-10 shadow-lg">
            <div className="text-center">
              <span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Fale Conosco
              </span>
              <h2 className="mt-4 font-display text-2xl text-foreground sm:text-3xl">
                Envie um E-mail
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Dúvidas, sugestões ou orçamentos personalizados? Preencha os campos abaixo e envie diretamente para nós!
              </p>
            </div>

            <form onSubmit={handleSendEmail} className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={emailForm.name}
                    onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                    placeholder="Seu nome"
                    className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Seu E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={emailForm.email}
                    onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                    placeholder="seu.email@exemplo.com"
                    className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Assunto
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={emailForm.subject}
                  onChange={(e) => setEmailForm({ ...emailForm, subject: e.target.value })}
                  placeholder="Ex: Orçamento de peça personalizada"
                  className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={emailForm.message}
                  onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                  placeholder="Escreva sua mensagem detalhadamente..."
                  className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full rounded-full bg-primary py-3.5 text-center text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                {isSending ? "Preparando..." : "Enviar por E-mail"}
              </button>

              {sentStatus === "success" && (
                <p className="text-center text-xs text-green-500 font-medium animate-pulse">
                  Abrindo seu cliente de e-mail... Obrigado pelo contato!
                </p>
              )}
              {sentStatus === "error" && (
                <p className="text-center text-xs text-red-500 font-medium">
                  Ocorreu um erro ao tentar enviar. Por favor, tente novamente.
                </p>
              )}
            </form>
          </div>
        </section>

      </main>

      <SiteFooter />
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
