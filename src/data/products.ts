import chaveiros from "@/assets/p-chaveiros.jpg";
import suportes from "@/assets/p-suportes.jpg";
import bonecos from "@/assets/p-bonecos.jpg";
import decor from "@/assets/p-decor.jpg";
import chaveirosAzul from "@/assets/p-chaveiros-azul.jpg";
import chaveirosClaro from "@/assets/p-chaveiros-claro.jpg";
import chaveirosEscuro from "@/assets/p-chaveiros-escuro.jpg";
import suportesAzul from "@/assets/p-suportes-azul.jpg";
import suportesClaro from "@/assets/p-suportes-claro.jpg";
import suportesEscuro from "@/assets/p-suportes-escuro.jpg";
import bonecosAzul from "@/assets/p-bonecos-azul.jpg";
import bonecosClaro from "@/assets/p-bonecos-claro.jpg";
import bonecosEscuro from "@/assets/p-bonecos-escuro.jpg";
import decorAzul from "@/assets/p-decor-azul.jpg";
import decorClaro from "@/assets/p-decor-claro.jpg";
import decorEscuro from "@/assets/p-decor-escuro.jpg";

export type CategoryId = "chaveiros" | "suportes" | "bonecos" | "decor";

export const categories: { id: CategoryId; label: string }[] = [
  { id: "chaveiros", label: "Chaveiros" },
  { id: "suportes", label: "Suportes" },
  { id: "bonecos", label: "Bonecos" },
  { id: "decor", label: "Decoração" },
];

export type ProductColor = {
  id: string;
  label: string;
};

export type Product = {
  id: string;
  name: string;
  category: CategoryId;
  price: number;
  /** Miniatura do catálogo — primeira vista, primeira cor. */
  image: string;
  /** Mesma peça em ângulos diferentes; cada linha é uma vista, cada coluna uma cor. */
  views: string[][];
  colors: ProductColor[];
  tagline: string;
  description: string;
  material: string;
  size: string;
  time: string;
  badge?: string;
};

export const getProductImage = (product: Product, viewIndex = 0, colorIndex = 0) =>
  product.views[viewIndex]?.[colorIndex] ?? product.image;

export const products: Product[] = [
  {
    id: "chav-personalizado",
    name: "Chaveiro Personalizado",
    category: "chaveiros",
    price: 18,
    image: chaveiros,
    colors: [
      { id: "original", label: "Original" },
      { id: "azul-royal", label: "Azul royal" },
      { id: "azul-claro", label: "Azul claro" },
      { id: "preto", label: "Preto" },
    ],
    views: [
      [chaveiros, chaveirosAzul, chaveirosClaro, chaveirosEscuro],
      [chaveiros, chaveirosAzul, chaveirosClaro, chaveirosEscuro],
      [chaveiros, chaveirosAzul, chaveirosClaro, chaveirosEscuro],
      [chaveiros, chaveirosAzul, chaveirosClaro, chaveirosEscuro],
    ],
    tagline: "Seu nome, logo ou desenho impresso em 3D",
    description:
      "Chaveiro feito sob encomenda com o texto ou símbolo que você quiser. Acabamento liso, argola metálica reforçada e camadas de 0,12 mm para um relevo bem definido.",
    material: "PLA+ premium",
    size: "55 × 25 × 4 mm",
    time: "2 a 3 dias úteis",
    badge: "Mais vendido",
  },
  {
    id: "chav-pet",
    name: "Tag para Coleira Pet",
    category: "chaveiros",
    price: 22,
    image: chaveiros,
    colors: [
      { id: "original", label: "Original" },
      { id: "azul-royal", label: "Azul royal" },
      { id: "rosa", label: "Rosa" },
      { id: "preto", label: "Preto" },
    ],
    views: [
      [chaveiros, chaveirosAzul, chaveirosClaro, chaveirosEscuro],
      [chaveiros, chaveirosAzul, chaveirosClaro, chaveirosEscuro],
      [chaveiros, chaveirosAzul, chaveirosClaro, chaveirosEscuro],
      [chaveiros, chaveirosAzul, chaveirosClaro, chaveirosEscuro],
    ],
    tagline: "Identificação leve e resistente para o seu pet",
    description:
      "Plaquinha com nome do pet e telefone gravados em relevo. Leve, à prova d'água e com acabamento arredondado para não machucar.",
    material: "PETG resistente a UV",
    size: "40 × 28 × 3 mm",
    time: "2 dias úteis",
  },
  {
    id: "sup-celular",
    name: "Suporte de Celular Dobrável",
    category: "suportes",
    price: 39,
    image: suportes,
    colors: [
      { id: "original", label: "Original" },
      { id: "azul-royal", label: "Azul royal" },
      { id: "branco", label: "Branco" },
      { id: "grafite", label: "Grafite" },
    ],
    views: [
      [suportes, suportesAzul, suportesClaro, suportesEscuro],
      [suportes, suportesAzul, suportesClaro, suportesEscuro],
      [suportes, suportesAzul, suportesClaro, suportesEscuro],
      [suportes, suportesAzul, suportesClaro, suportesEscuro],
    ],
    tagline: "Ângulo ajustável, cabe no bolso",
    description:
      "Suporte com dobradiça impressa em uma única peça, base antiderrapante e passagem de cabo para carregar enquanto usa. Suporta celulares e tablets pequenos.",
    material: "PLA+ com base emborrachada",
    size: "90 × 70 × 12 mm (fechado)",
    time: "3 dias úteis",
    badge: "Novo",
  },
  {
    id: "sup-headset",
    name: "Suporte de Headset de Mesa",
    category: "suportes",
    price: 59,
    image: suportes,
    colors: [
      { id: "original", label: "Original" },
      { id: "grafite", label: "Grafite" },
      { id: "azul-royal", label: "Azul royal" },
      { id: "branco", label: "Branco" },
    ],
    views: [
      [suportes, suportesEscuro, suportesAzul, suportesClaro],
      [suportes, suportesEscuro, suportesAzul, suportesClaro],
      [suportes, suportesEscuro, suportesAzul, suportesClaro],
      [suportes, suportesEscuro, suportesAzul, suportesClaro],
    ],
    tagline: "Setup organizado e com cara de profissional",
    description:
      "Base pesada com apoio anatômico que não marca a espuma do headset. Opção de gravação de logo na lateral, ideal para gamers e streamers.",
    material: "PLA+ 100% infill na base",
    size: "150 × 110 × 240 mm",
    time: "4 dias úteis",
  },
  {
    id: "bon-articulado",
    name: "Boneco Articulado Flexi",
    category: "bonecos",
    price: 45,
    image: bonecos,
    colors: [
      { id: "original", label: "Original" },
      { id: "azul-metalico", label: "Azul metálico" },
      { id: "vermelho", label: "Vermelho" },
      { id: "claro", label: "Tons claros" },
    ],
    views: [
      [bonecos, bonecosAzul, bonecosEscuro, bonecosClaro],
      [bonecos, bonecosAzul, bonecosEscuro, bonecosClaro],
      [bonecos, bonecosAzul, bonecosEscuro, bonecosClaro],
      [bonecos, bonecosAzul, bonecosEscuro, bonecosClaro],
    ],
    tagline: "Sai da impressora já se mexendo",
    description:
      "Impresso em peça única com articulações funcionais — dobra, torce e fica em pé. Perfeito como fidget de mesa ou presente colecionável.",
    material: "PLA silk",
    size: "18 cm de altura",
    time: "4 a 5 dias úteis",
    badge: "Favorito",
  },
  {
    id: "bon-mini",
    name: "Mini Colecionáveis (kit 3)",
    category: "bonecos",
    price: 69,
    image: bonecos,
    colors: [
      { id: "original", label: "Original" },
      { id: "cinza", label: "Cinza primer" },
      { id: "azul-metalico", label: "Azul metálico" },
      { id: "grafite", label: "Grafite" },
    ],
    views: [
      [bonecos, bonecosClaro, bonecosAzul, bonecosEscuro],
      [bonecos, bonecosClaro, bonecosAzul, bonecosEscuro],
      [bonecos, bonecosClaro, bonecosAzul, bonecosEscuro],
      [bonecos, bonecosClaro, bonecosAzul, bonecosEscuro],
    ],
    tagline: "Trio de miniaturas com alto nível de detalhe",
    description:
      "Kit com três miniaturas impressas em camadas de 0,08 mm, prontas para pintar ou já coloridas. Escolha os personagens no pedido.",
    material: "Resina / PLA detalhado",
    size: "6 a 8 cm cada",
    time: "5 dias úteis",
  },
  {
    id: "dec-organizador",
    name: "Organizador de Mesa Modular",
    category: "decor",
    price: 54,
    image: decor,
    colors: [
      { id: "original", label: "Original" },
      { id: "off-white", label: "Off-white" },
      { id: "azul-royal", label: "Azul royal" },
      { id: "grafite", label: "Grafite" },
    ],
    views: [
      [decor, decorClaro, decorAzul, decorEscuro],
      [decor, decorClaro, decorAzul, decorEscuro],
      [decor, decorClaro, decorAzul, decorEscuro],
      [decor, decorClaro, decorAzul, decorEscuro],
    ],
    tagline: "Encaixe os módulos do jeito que você usa",
    description:
      "Módulos que se conectam entre si para canetas, cartões e fones. Design geométrico minimalista que combina com qualquer setup.",
    material: "PLA fosco",
    size: "100 × 80 × 95 mm por módulo",
    time: "3 dias úteis",
  },
  {
    id: "dec-vaso",
    name: "Vaso Geométrico",
    category: "decor",
    price: 49,
    image: decor,
    colors: [
      { id: "original", label: "Original" },
      { id: "azul-royal", label: "Azul royal" },
      { id: "grafite", label: "Grafite" },
      { id: "off-white", label: "Off-white" },
    ],
    views: [
      [decor, decorAzul, decorEscuro, decorClaro],
      [decor, decorAzul, decorEscuro, decorClaro],
      [decor, decorAzul, decorEscuro, decorClaro],
      [decor, decorAzul, decorEscuro, decorClaro],
    ],
    tagline: "Facetas que brincam com a luz",
    description:
      "Vaso impresso em espiral com paredes lisas e furo de drenagem opcional. Vai bem com suculentas ou como porta-objetos.",
    material: "PLA fosco / PETG",
    size: "110 × 110 × 120 mm",
    time: "3 dias úteis",
  },
];

export const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
