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

//pack8
import pack8img1 from "@/assets/pack8/img1.jpeg"
import pack8img2 from "@/assets/pack8/img2.jpeg"
import pack8img3 from "@/assets/pack8/img3.jpeg"


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
    price: 20.00,
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
    tagline: "Apoie seu celular com um toque divertido em formato de caranguejo.",
    description:
      "Suporte funcional e divertido para manter o celular em vista, com estilo e praticidade em qualquer mesa ou bancada.",
    material: "PLA",
    size: "10 × 8 × 7 cm",
    time: "2 a 3 dias úteis",
    badge: "Mais vendido", //tag do produto 
  },

  //pack2
  {
    id: "sup-gato",
    name: "Suporte Gato",
    category: "suportes",
    price: 20.00,
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
    tagline: "Um apoio de celular simpático para deixar sua mesa mais organizada.",
    description:
      "Acompanha seu dia a dia com um design charmoso, oferecendo suporte firme e um toque de personalidade para o ambiente.",
    material: "PLA",
    size: "10 × 8 × 7 cm",
    time: "2 a 3 dias úteis",
    badge: "Mais vendido",
  },

  //pack3
  {
    id: "sup-headset",
    name: "Suporte para Headset",
    category: "suportes",
    price: 10.00,
    image: pack3img3,
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
    tagline: "Mantenha seu headset apoiado e sempre à mão.",
    description:
      "Organiza seu headset com praticidade e mantém o espaço mais limpo, funcional e com visual moderno.",
    material: "PLA",
    size: "10 × 8 × 7 cm",
    time: "2 a 3 dias úteis",
  },

  //pack4
  {
    id: "sup-chaveiro",
    name: "Chaveiro suporte de celular",
    category: ["suportes", "chaveiros", "futebol"],
    price: 12.00,
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
    tagline: "Um chaveiro prático que também serve de suporte para celular.",
    description:
      "Uma peça versátil que combina suporte para celular com o charme de um chaveiro útil para uso diário.",
    material: "PLA",
    size: "10 × 8 × 7 cm",
    time: "2 a 3 dias úteis",
  },

  //pack5
  {
    id: "chav-flamengo",
    name: "Chaveiro Flamengo",
    category: ["chaveiros", "futebol"],
    price: 10.00,
    image: pack5img1,
    colors: [
      { id: "multicores", label: "preto, branco,vermelho" },
    ],
    views: [pack5img1,pack5img2],
    tagline: "Leve as cores do Flamengo com você em um chaveiro compacto.",
    description:
      "Chaveiro esportivo com visual marcante, perfeito para mostrar seu time com identidade e estilo no dia a dia.",
    material: "PLA",
    size: "10 × 8 × 7 cm",
    time: "2 a 3 dias úteis",
  },

  //pack 6
  {
    id: "chav-corinthians",
    name: "Chaveiro Corinthians",
    category: ["chaveiros", "futebol", "comercio"],
    price: 10.00,
    image: pack6img1,
    colors: [
      { id: "multicores", label: "preto, branco, vermelho" },
    ],
    views: [pack6img1,pack6img2],
    tagline: "Um chaveiro do Corinthians para levar seu time com você.",
    description:
      "Peça prática e estilizada para torcedores que querem levar a marca do Corinthians com leveza e personalidade.",
    material: "PLA",
    size: "10 × 8 × 7 cm",
    time: "2 a 3 dias úteis",
  },

  {
    id: "sup-livro-gato",
    name: "Suporte de livro de gato",
    category: ["suportes","decor"],
    price: 10.00,
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
    tagline: "Organize seus livros com um suporte decorativo em formato de gato.",
    description:
      "Decoração funcional para prateleiras e mesa, com design de gato que traz charme, organização e um toque lúdico ao ambiente.",
    material: "PLA",
    size: "10 × 8 × 7 cm",
    time: "2 a 3 dias úteis",
  },
  {
    id: "sup-porta-cartao-odontologico",
    name: "Porta Cartão Odontológico",
    category: ["comercio", "decor", "suportes"],
    price: 20.00,
    image: pack8img1,
    colors: [
    { id: "vermelho", label: "Vermelho" },
      { id: "amarelo", label: "Amarelo" },
      { id: "verde", label: "Verde" },
      { id: "azul", label: "Azul" },
      { id: "cinza", label: "Cinza" },
      { id: "preto", label: "Preto" },
      { id: "branco", label: "Branco" },
      { id: "rosa", label: "Rosa"},
      { id: "laranja", label: "Laranja"},
    ],
    views: [pack8img1, pack8img2, pack8img3],
    tagline: "Organização e praticidade no caixa",
    description:
      "Organize e destaque seus cartões de visita com este porta-cartões criativo e diferenciado, produzido em impressão 3D, é ideal para consultórios odontológicos, recepções e balcões de atendimento.",
    material: "PLA",
    size: "13 × 5 × 5,5 cm",
    time: "1 a 2 dias úteis",
    badge: "Novo",
  }

];

export const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });