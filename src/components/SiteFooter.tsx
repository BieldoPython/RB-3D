import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";

const contacts = [
  {
    label: "Instagram",
    href: "https://instagram.com/rb3d",
    icon: Instagram,
    iconClass: "text-[#E4405F]",
    labelClass: "group-hover:text-[#E4405F]",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5500000000000",
    icon: MessageCircle,
    iconClass: "text-[#25D366]",
    labelClass: "group-hover:text-[#25D366]",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/rb3d",
    icon: Facebook,
    iconClass: "text-[#1877F2]",
    labelClass: "group-hover:text-[#1877F2]",
  },
  {
    label: "E-mail",
    href: "mailto:contato@rb3d.com.br",
    icon: Mail,
    iconClass: "text-[#EA4335]",
    labelClass: "group-hover:text-[#EA4335]",
  },
];

const columns = [
  {
    title: "Categorias",
    links: [
      { label: "Chaveiros", href: "#catalogo" },
      { label: "Suportes", href: "#catalogo" },
      { label: "Bonecos", href: "#catalogo" },
      { label: "Decoração", href: "#catalogo" },
    ],
  },
  {
    title: "Atendimento",
    links: [
      { label: "Como encomendar", href: "#como-funciona" },
      { label: "Prazos e envio", href: "#como-funciona" },
      { label: "Peças sob medida", href: "#catalogo" },
    ],
  },
  {
    title: "Referências",
    links: [
      { label: "Printables", href: "https://www.printables.com" },
      { label: "Thingiverse", href: "https://www.thingiverse.com" },
      { label: "MakerWorld", href: "https://makerworld.com" },
      { label: "Cults3D", href: "https://cults3d.com" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 sm:gap-10 sm:px-6 sm:py-14 md:grid-cols-4">
        <div className="space-y-4">
          <p className="font-display text-xl text-foreground">
            R&B <span className="text-primary">3D</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Peças impressas em 3D sob encomenda: chaveiros, suportes, bonecos e decoração. Feito
            camada por camada, aqui no ateliê.
          </p>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Contato
            </p>
            <ul className="space-y-2.5">
              {contacts.map(({ label, href, icon: Icon, iconClass, labelClass }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className={`group inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors ${labelClass}`}
                  >
                    <Icon className={`h-4 w-4 shrink-0 ${iconClass}`} aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {col.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border px-4 py-6 sm:px-6">
        <p className="mx-auto max-w-6xl text-xs text-muted-foreground">
          © {new Date().getFullYear()} R&B 3D · Modelos autorais e licenciados para uso comercial.
          Créditos dos criadores originais indicados em cada peça.
        </p>
      </div>
    </footer>
  );
}
