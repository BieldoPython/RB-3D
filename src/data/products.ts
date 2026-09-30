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

//pack1
import pack1img1 from "@/assets/pack1/img1.jpg";
import pack1img2 from "@/assets/pack1/img2.jpg";
import pack1img3 from "@/assets/pack1/img3.jpg";
import pack1img4 from "@/assets/pack1/img4.jpg";
import pack1img5 from "@/assets/pack1/img5.jpg";
import pack1img6 from "@/assets/pack1/img6.jpg";
import pack1img7 from "@/assets/pack1/img7.jpg";
import pack1img8 from "@/assets/pack1/img8.jpg";

//pack2
import pack2img1 from "@/assets/pack2/img1.jpg";
import pack2img2 from "@/assets/pack2/img2.jpg";
import pack2img3 from "@/assets/pack2/img3.jpg";
import pack2img4 from "@/assets/pack2/img4.jpg";

//pack3
import pack3img1 from "@/assets/pack3/img1.jpeg";
import pack3img2 from "@/assets/pack3/img2.jpeg";
import pack3img3 from "@/assets/pack3/img3.jpg";
import pack3img4 from "@/assets/pack3/img4.jpg";

//pack4
import pack4img1 from "@/assets/pack4/img1.jpg";
import pack4img2 from "@/assets/pack4/img2.jpg";
import pack4img3 from "@/assets/pack4/img3.jpg";
import pack4img4 from "@/assets/pack4/img4.jpg";

//pack5
import pack5img1 from "@/assets/pack5/img1.jpg"
import pack5img2 from "@/assets/pack5/img2.jpg"

//pack6
import pack6img1 from "@/assets/pack6/img1.jpg"
import pack6img2 from "@/assets/pack6/img2.jpg"

//pack7
import pack7img1 from "@/assets/pack7/img1.jpeg"
import pack7img2 from "@/assets/pack7/img2.jpg"
import pack7img3 from "@/assets/pack7/img3.jpg"


export type CategoryId = "chaveiros" | "suportes" | "decor" | "futebol" | "comercio"; 

export const categories: { id: CategoryId; label: string }[] = [
  { id: "chaveiros", label: "Chaveiros" },
  { id: "suportes", label: "Suportes" },
  { id: "decor", label: "Decoração" },
  { id: "futebol", label: "Futebol" },
  { id: "comercio", label: "Comércio" },
];

export type ProductColor = {
  id: string;
  label: string;
};

export type Product = {
  id: string;
  name: string;
  category: CategoryId | CategoryId[];
  price: number;
  /** Miniatura do catálogo. */
  image: string;
  /** Mesma peça em ângulos diferentes. */
  views: string[];
  colors: ProductColor[];
  tagline: string;
  description: string;
  material: string;
  size: string;
  time: string;
  badge?: string;
};

export const getProductCategories = (product: Product): CategoryId[] =>
  Array.isArray(product.category) ? product.category : [product.category];

export const hasCategory = (product: Product, categoryId: CategoryId): boolean =>
  Array.isArray(product.category)
    ? product.category.includes(categoryId)
    : product.category === categoryId;

export const getProductCategoryLabels = (product: Product): string => {
  const catIds = getProductCategories(product);
  return catIds
    .map((id) => categories.find((c) => c.id === id)?.label)
    .filter(Boolean)
    .join(" • ");
};

export const getProductImage = (product: Product, viewIndex = 0) =>
  product.views[viewIndex] ?? product.image;

export const products: Product[] = [
  //pack1
  {
    id: "sup-caranguejo",
    name: "Suporte Caranguejo",
    category: "suportes",
    price: 19.99,
    image: pack1img1,
    colors: [
      { id: "vermelho", label: "Vermelho" },
      { id: "amarelo", label: "Amarelo" },
      { id: "verde", label: "Verde" },
      { id: "azul", label: "azul" },
      { id: "cinza", label: "Cinza" },
      { id: "preto", label: "Preto" },
      { id: "branco", label: "Branco" },
    ],
    views: [pack1img1,pack1img2,pack1img3,pack1img4,pack1img5,pack1img6,pack1img7,pack1img8],
    tagline: "Suporte de caranguejo 🦀",
    description:
      "Deixe sua mesa mais organizada e divertida!",
    material: "PLA+ premium",
    size: "10 × 8 × 7 cm",
    time: "2 a 3 dias úteis",
    badge: "Mais vendido", //tag do produto 
  },

  //pack2
  {
    id: "sup-gato",
    name: "Suporte Gato",
    category: "suportes",
    price: 19.99,
    image: pack2img1,
    colors: [
      { id: "vermelho", label: "Vermelho" },
      { id: "amarelo", label: "Amarelo" },
      { id: "verde", label: "Verde" },
      { id: "azul", label: "azul" },
      { id: "cinza", label: "Cinza" },
      { id: "preto", label: "Preto" },
      { id: "branco", label: "Branco" },
    ],
    views: [pack2img1,pack2img2,pack2img3,pack2img4],
    tagline: "Suporte de gato",
    description:
      "Deixe sua mesa mais organizada e divertida!",
    material: "PLA+ premium",
    size: "10 × 8 × 7 cm",
    time: "2 a 3 dias úteis",
    badge: "Mais vendido",
  },

  //pack3
  {
    id: "sup-headset",
    name: "Suporte para Headset",
    category: "suportes",
    price: 11.99,
    image: pack3img1,
    colors: [
      { id: "vermelho", label: "Vermelho" },
      { id: "amarelo", label: "Amarelo" },
      { id: "verde", label: "Verde" },
      { id: "azul", label: "azul" },
      { id: "cinza", label: "Cinza" },
      { id: "preto", label: "Preto" },
      { id: "branco", label: "Branco" },
    ],
    views: [pack3img1,pack3img2,pack3img3,pack3img4],
    tagline: "Suporte de gato",
    description:
      "Deixe sua mesa mais organizada e divertida!",
    material: "PLA+ premium",
    size: "10 × 8 × 7 cm",
    time: "2 a 3 dias úteis",
  },

  //pack4
  {
    id: "sup-chaveiro",
    name: "Chaveiro suporte de celular",
    category: ["suportes", "chaveiros", "futebol"],
    price: 11.99,
    image: pack4img1,
    colors: [
      { id: "vermelho", label: "Vermelho" },
      { id: "amarelo", label: "Amarelo" },
      { id: "verde", label: "Verde" },
      { id: "azul", label: "azul" },
      { id: "cinza", label: "Cinza" },
      { id: "preto", label: "Preto" },
      { id: "branco", label: "Branco" },
    ],
    views: [pack4img1,pack4img2,pack4img3,pack4img4],
    tagline: "Suporte de gato",
    description:
      "Deixe sua mesa mais organizada e divertida!",
    material: "PLA+ premium",
    size: "10 × 8 × 7 cm",
    time: "2 a 3 dias úteis",
  },

  //pack5
  {
    id: "chav-flamengo",
    name: "Chaveiro Flamengo",
    category: ["chaveiros", "futebol"],
    price: 9.99,
    image: pack5img1,
    colors: [
      { id: "multicores", label: "preto, branco,vermelho" },
    ],
    views: [pack5img1,pack5img2],
    tagline: "Suporte de gato",
    description:
      "Deixe sua mesa mais organizada e divertida! \n teste",
    material: "PLA+ premium",
    size: "10 × 8 × 7 cm",
    time: "2 a 3 dias úteis",
  },

  //pack 6
  {
    id: "chav-corinthians",
    name: "Chaveiro Corinthians",
    category: ["chaveiros", "futebol", "comercio"],
    price: 9.99,
    image: pack6img1,
    colors: [
      { id: "multicores", label: "preto, branco, vermelho" },
    ],
    views: [pack6img1,pack6img2],
    tagline: "Suporte de gato",
    description:
      "Deixe sua mesa mais organizada e divertida!",
    material: "PLA+ premium",
    size: "10 × 8 × 7 cm",
    time: "2 a 3 dias úteis",
  },

  {
    id: "sup-livro-gato",
    name: "Suporte de livro de gato",
    category: ["suportes","decor"],
    price: 9.99,
    image: pack7img1,
    colors: [
      { id: "vermelho", label: "Vermelho" },
      { id: "amarelo", label: "Amarelo" },
      { id: "verde", label: "Verde" },
      { id: "azul", label: "azul" },
      { id: "cinza", label: "Cinza" },
      { id: "preto", label: "Preto" },
      { id: "branco", label: "Branco" },
      { id: "rosa", label: "Rosa"},
    ],
    views: [pack7img1,pack7img2,pack7img3],
    tagline: "Suporte de gato",
    description:
      "Deixe sua mesa mais organizada e divertida!",
    material: "PLA+ premium",
    size: "10 × 8 × 7 cm",
    time: "2 a 3 dias úteis",
  },
  {
    id: "sup-maquininha",
    name: "Suporte para Maquininha de Cartão",
    category: ["suportes", "comercio"],
    price: 34.90,
    image: pack3img3,
    colors: [
      { id: "preto", label: "Preto" },
      { id: "cinza", label: "Cinza" },
      { id: "branco", label: "Branco" },
      { id: "azul", label: "Azul" },
    ],
    views: [pack3img3, pack3img4],
    tagline: "Organização e praticidade no caixa",
    description:
      "Suporte universal robusto e ergonômico para maquininhas de cartão de crédito e débito. Evita queda de aparelhos, esconde cabos de alimentação e melhora a postura na hora de operar o terminal de vendas.",
    material: "PLA+ premium reforçado",
    size: "12 × 10 × 8 cm",
    time: "2 a 4 dias úteis",
    badge: "Novo",
  },
  {
    id: "display-pix",
    name: "Display de Mesa QR Code PIX",
    category: ["comercio", "decor"],
    price: 24.90,
    image: pack1img7,
    colors: [
      { id: "preto", label: "Preto" },
      { id: "branco", label: "Branco" },
      { id: "azul", label: "Azul" },
    ],
    views: [pack1img7, pack1img8],
    tagline: "Seu QR Code sempre visível",
    description:
      "Display de mesa moderno para expor seu QR Code de PIX, redes sociais ou menu digital. Facilite o pagamento via PIX e torne seu balcão muito mais elegante e tecnológico.",
    material: "PLA+ premium de alta resolução",
    size: "15 × 10 × 5 cm",
    time: "2 a 3 dias úteis",
    badge: "Destaque",
  },
  {
    id: "porta-cartao",
    name: "Porta-Cartões de Visita Executivo",
    category: ["comercio", "decor"],
    price: 19.90,
    image: pack2img3,
    colors: [
      { id: "preto", label: "Preto" },
      { id: "cinza", label: "Cinza" },
      { id: "ouro", label: "Ouro/Dourado" },
      { id: "branco", label: "Branco" },
    ],
    views: [pack2img3, pack2img4],
    tagline: "Exponha seus contatos com elegância",
    description:
      "Porta-cartões de visita com design geométrico moderno e minimalista. Ideal para balcões de recepção, consultórios, lojas ou escritórios que querem passar uma imagem de sofisticação.",
    material: "PLA+ premium texturizado",
    size: "9.5 × 6 × 5 cm",
    time: "2 a 3 dias úteis",
  },

];

export const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });