import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as RulerDimensionLine, c as Mail, d as CreditCard, f as ArrowRight, i as Store, l as Instagram, n as ZoomIn, o as MessageCircle, r as X, s as Maximize2, t as ZoomOut, u as Facebook } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DwIMI_gv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var banner1_default = "/assets/banner1-Do5YobwQ.png";
var banner2_default = "/assets/banner2-CIHZdtpe.png";
var banner3_default = "/assets/banner3-BqDgPR0N.jpg";
var INTERVAL_MS = 5e3;
function HeroCarousel({ images }) {
	const [index, setIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (images.length <= 1) return;
		const timer = window.setInterval(() => setIndex((i) => (i + 1) % images.length), INTERVAL_MS);
		return () => window.clearInterval(timer);
	}, [images.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0",
		"aria-hidden": "true",
		children: [images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt: "",
			width: 1600,
			height: 1008,
			className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out ${i === index ? "opacity-100" : "opacity-0"}`
		}, src)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/15 via-background/55 to-background" })]
	});
}
var img1_default$6 = "/assets/img1-B6Xrndbp.jpg";
var img2_default$6 = "/assets/img2-CHE80fQq.jpg";
var img3_default$4 = "/assets/img3-B6_XpS6H.jpg";
var img4_default$3 = "/assets/img4-CJLpRMks.jpg";
var img5_default = "/assets/img5-BWg_GFkp.jpg";
var img6_default = "/assets/img6-DNVwx4zA.jpg";
var img7_default = "/assets/img7-BcLJKgXR.jpg";
var img8_default = "/assets/img8-BKhuqFtn.jpg";
var img1_default$5 = "/assets/img1-BzCNZEvJ.jpg";
var img2_default$5 = "/assets/img2-CG2uKKiK.jpg";
var img3_default$3 = "/assets/img3-CGs2ok2f.jpg";
var img4_default$2 = "/assets/img4-BhlX907G.jpg";
var img1_default$4 = "/assets/img1-DCcPcOTs.jpeg";
var img2_default$4 = "/assets/img2-Lvh_lVPz.jpeg";
var img3_default$2 = "/assets/img3-DfCEEpst.jpg";
var img4_default$1 = "/assets/img4-D8lAnbcr.jpg";
var img1_default$3 = "/assets/img1-aCEkJkwx.jpg";
var img2_default$3 = "/assets/img2-zAcXWbG9.jpg";
var img3_default$1 = "/assets/img3-CvBOxfFG.jpg";
var img4_default = "/assets/img4-D60wL8ir.jpg";
var img1_default$2 = "/assets/img1-D-LT_OGF.jpg";
var img2_default$2 = "/assets/img2-BtHIZP3K.jpg";
var img1_default$1 = "/assets/img1-CfYAN1Rd.jpg";
var img2_default$1 = "/assets/img2-D_Ge-e53.jpg";
var img1_default = "/assets/img1-CFjon9Eo.jpeg";
var img2_default = "/assets/img2-C50Btdzg.jpg";
var img3_default = "/assets/img3-CIesKr0Y.jpg";
var categories = [
	{
		id: "chaveiros",
		label: "Chaveiros"
	},
	{
		id: "suportes",
		label: "Suportes"
	},
	{
		id: "decor",
		label: "Decoração"
	},
	{
		id: "futebol",
		label: "Futebol"
	},
	{
		id: "comercio",
		label: "Comércio"
	}
];
var getProductCategories = (product) => Array.isArray(product.category) ? product.category : [product.category];
var hasCategory = (product, categoryId) => Array.isArray(product.category) ? product.category.includes(categoryId) : product.category === categoryId;
var getProductCategoryLabels = (product) => {
	return getProductCategories(product).map((id) => categories.find((c) => c.id === id)?.label).filter(Boolean).join(" • ");
};
var getProductImage = (product, viewIndex = 0) => product.views[viewIndex] ?? product.image;
var products = [
	{
		id: "sup-caranguejo",
		name: "Suporte Caranguejo",
		category: "suportes",
		price: 19.99,
		image: img1_default$6,
		colors: [
			{
				id: "vermelho",
				label: "Vermelho"
			},
			{
				id: "amarelo",
				label: "Amarelo"
			},
			{
				id: "verde",
				label: "Verde"
			},
			{
				id: "azul",
				label: "azul"
			},
			{
				id: "cinza",
				label: "Cinza"
			},
			{
				id: "preto",
				label: "Preto"
			},
			{
				id: "branco",
				label: "Branco"
			}
		],
		views: [
			img1_default$6,
			img2_default$6,
			img3_default$4,
			img4_default$3,
			img5_default,
			img6_default,
			img7_default,
			img8_default
		],
		tagline: "Suporte de caranguejo 🦀",
		description: "Deixe sua mesa mais organizada e divertida!",
		material: "PLA+ premium",
		size: "10 × 8 × 7 cm",
		time: "2 a 3 dias úteis",
		badge: "Mais vendido"
	},
	{
		id: "sup-gato",
		name: "Suporte Gato",
		category: "suportes",
		price: 19.99,
		image: img1_default$5,
		colors: [
			{
				id: "vermelho",
				label: "Vermelho"
			},
			{
				id: "amarelo",
				label: "Amarelo"
			},
			{
				id: "verde",
				label: "Verde"
			},
			{
				id: "azul",
				label: "azul"
			},
			{
				id: "cinza",
				label: "Cinza"
			},
			{
				id: "preto",
				label: "Preto"
			},
			{
				id: "branco",
				label: "Branco"
			}
		],
		views: [
			img1_default$5,
			img2_default$5,
			img3_default$3,
			img4_default$2
		],
		tagline: "Suporte de gato",
		description: "Deixe sua mesa mais organizada e divertida!",
		material: "PLA+ premium",
		size: "10 × 8 × 7 cm",
		time: "2 a 3 dias úteis",
		badge: "Mais vendido"
	},
	{
		id: "sup-headset",
		name: "Suporte para Headset",
		category: "suportes",
		price: 11.99,
		image: img1_default$4,
		colors: [
			{
				id: "vermelho",
				label: "Vermelho"
			},
			{
				id: "amarelo",
				label: "Amarelo"
			},
			{
				id: "verde",
				label: "Verde"
			},
			{
				id: "azul",
				label: "azul"
			},
			{
				id: "cinza",
				label: "Cinza"
			},
			{
				id: "preto",
				label: "Preto"
			},
			{
				id: "branco",
				label: "Branco"
			}
		],
		views: [
			img1_default$4,
			img2_default$4,
			img3_default$2,
			img4_default$1
		],
		tagline: "Suporte de gato",
		description: "Deixe sua mesa mais organizada e divertida!",
		material: "PLA+ premium",
		size: "10 × 8 × 7 cm",
		time: "2 a 3 dias úteis"
	},
	{
		id: "sup-chaveiro",
		name: "Chaveiro suporte de celular",
		category: [
			"suportes",
			"chaveiros",
			"futebol"
		],
		price: 11.99,
		image: img1_default$3,
		colors: [
			{
				id: "vermelho",
				label: "Vermelho"
			},
			{
				id: "amarelo",
				label: "Amarelo"
			},
			{
				id: "verde",
				label: "Verde"
			},
			{
				id: "azul",
				label: "azul"
			},
			{
				id: "cinza",
				label: "Cinza"
			},
			{
				id: "preto",
				label: "Preto"
			},
			{
				id: "branco",
				label: "Branco"
			}
		],
		views: [
			img1_default$3,
			img2_default$3,
			img3_default$1,
			img4_default
		],
		tagline: "Suporte de gato",
		description: "Deixe sua mesa mais organizada e divertida!",
		material: "PLA+ premium",
		size: "10 × 8 × 7 cm",
		time: "2 a 3 dias úteis"
	},
	{
		id: "chav-flamengo",
		name: "Chaveiro Flamengo",
		category: ["chaveiros", "futebol"],
		price: 9.99,
		image: img1_default$2,
		colors: [{
			id: "multicores",
			label: "preto, branco,vermelho"
		}],
		views: [img1_default$2, img2_default$2],
		tagline: "Suporte de gato",
		description: "Deixe sua mesa mais organizada e divertida! \n teste",
		material: "PLA+ premium",
		size: "10 × 8 × 7 cm",
		time: "2 a 3 dias úteis"
	},
	{
		id: "chav-corinthians",
		name: "Chaveiro Corinthians",
		category: [
			"chaveiros",
			"futebol",
			"comercio"
		],
		price: 9.99,
		image: img1_default$1,
		colors: [{
			id: "multicores",
			label: "preto, branco, vermelho"
		}],
		views: [img1_default$1, img2_default$1],
		tagline: "Suporte de gato",
		description: "Deixe sua mesa mais organizada e divertida!",
		material: "PLA+ premium",
		size: "10 × 8 × 7 cm",
		time: "2 a 3 dias úteis"
	},
	{
		id: "sup-livro-gato",
		name: "Suporte de livro de gato",
		category: ["suportes", "decor"],
		price: 9.99,
		image: img1_default,
		colors: [
			{
				id: "vermelho",
				label: "Vermelho"
			},
			{
				id: "amarelo",
				label: "Amarelo"
			},
			{
				id: "verde",
				label: "Verde"
			},
			{
				id: "azul",
				label: "azul"
			},
			{
				id: "cinza",
				label: "Cinza"
			},
			{
				id: "preto",
				label: "Preto"
			},
			{
				id: "branco",
				label: "Branco"
			},
			{
				id: "rosa",
				label: "Rosa"
			}
		],
		views: [
			img1_default,
			img2_default,
			img3_default
		],
		tagline: "Suporte de gato",
		description: "Deixe sua mesa mais organizada e divertida!",
		material: "PLA+ premium",
		size: "10 × 8 × 7 cm",
		time: "2 a 3 dias úteis"
	},
	{
		id: "sup-maquininha",
		name: "Suporte para Maquininha de Cartão",
		category: ["suportes", "comercio"],
		price: 34.9,
		image: img3_default$2,
		colors: [
			{
				id: "preto",
				label: "Preto"
			},
			{
				id: "cinza",
				label: "Cinza"
			},
			{
				id: "branco",
				label: "Branco"
			},
			{
				id: "azul",
				label: "Azul"
			}
		],
		views: [img3_default$2, img4_default$1],
		tagline: "Organização e praticidade no caixa",
		description: "Suporte universal robusto e ergonômico para maquininhas de cartão de crédito e débito. Evita queda de aparelhos, esconde cabos de alimentação e melhora a postura na hora de operar o terminal de vendas.",
		material: "PLA+ premium reforçado",
		size: "12 × 10 × 8 cm",
		time: "2 a 4 dias úteis",
		badge: "Novo"
	},
	{
		id: "display-pix",
		name: "Display de Mesa QR Code PIX",
		category: ["comercio", "decor"],
		price: 24.9,
		image: img7_default,
		colors: [
			{
				id: "preto",
				label: "Preto"
			},
			{
				id: "branco",
				label: "Branco"
			},
			{
				id: "azul",
				label: "Azul"
			}
		],
		views: [img7_default, img8_default],
		tagline: "Seu QR Code sempre visível",
		description: "Display de mesa moderno para expor seu QR Code de PIX, redes sociais ou menu digital. Facilite o pagamento via PIX e torne seu balcão muito mais elegante e tecnológico.",
		material: "PLA+ premium de alta resolução",
		size: "15 × 10 × 5 cm",
		time: "2 a 3 dias úteis",
		badge: "Destaque"
	},
	{
		id: "porta-cartao",
		name: "Porta-Cartões de Visita Executivo",
		category: ["comercio", "decor"],
		price: 19.9,
		image: img3_default$3,
		colors: [
			{
				id: "preto",
				label: "Preto"
			},
			{
				id: "cinza",
				label: "Cinza"
			},
			{
				id: "ouro",
				label: "Ouro/Dourado"
			},
			{
				id: "branco",
				label: "Branco"
			}
		],
		views: [img3_default$3, img4_default$2],
		tagline: "Exponha seus contatos com elegância",
		description: "Porta-cartões de visita com design geométrico moderno e minimalista. Ideal para balcões de recepção, consultórios, lojas ou escritórios que querem passar uma imagem de sofisticação.",
		material: "PLA+ premium texturizado",
		size: "9.5 × 6 × 5 cm",
		time: "2 a 3 dias úteis"
	}
];
var formatPrice = (value) => value.toLocaleString("pt-BR", {
	style: "currency",
	currency: "BRL"
});
function ProductCard({ product, onSelect }) {
	const categoryLabels = getProductCategoryLabels(product);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => onSelect(product),
		className: "group surface-card relative flex flex-col w-full p-0 overflow-hidden rounded-xl border border-border text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:rounded-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full aspect-square overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: product.name,
				loading: "lazy",
				className: "absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
			}), product.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-2 top-2 rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary-foreground sm:left-3 sm:top-3 sm:px-3 sm:py-1 sm:text-[11px]",
				children: product.badge
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-y-1.5 p-2.5 sm:gap-y-2 sm:p-4 md:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "line-clamp-2 min-h-[2.5em] text-[9px] font-semibold uppercase tracking-[0.14em] text-primary/80 sm:text-[11px] sm:tracking-[0.18em]",
					children: categoryLabels
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "line-clamp-2 min-h-[2.5em] font-display text-sm leading-tight text-foreground sm:text-base md:text-lg",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "line-clamp-2 min-h-[2.8em] text-xs text-muted-foreground sm:text-sm",
					children: product.tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex items-center justify-between pt-1 sm:pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-base text-primary sm:text-lg md:text-xl",
						children: formatPrice(product.price)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden text-[11px] font-semibold uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-primary sm:inline sm:text-xs",
						children: "Visualizar →"
					})]
				})
			]
		})]
	});
}
function ImageLightbox({ src, alt, onClose }) {
	const [zoom, setZoom] = (0, import_react.useState)(1);
	const [pan, setPan] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const dragging = (0, import_react.useRef)(false);
	const last = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const reset = (0, import_react.useCallback)(() => {
		setZoom(1);
		setPan({
			x: 0,
			y: 0
		});
	}, []);
	(0, import_react.useEffect)(() => {
		reset();
	}, [src, reset]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [onClose]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, []);
	const toggleZoom = () => {
		if (zoom > 1) reset();
		else setZoom(2.5);
	};
	const onWheel = (e) => {
		e.preventDefault();
		setZoom((z) => Math.min(4, Math.max(1, z + (e.deltaY < 0 ? .25 : -.25))));
	};
	const onPointerDown = (e) => {
		if (zoom <= 1) return;
		dragging.current = true;
		last.current = {
			x: e.clientX,
			y: e.clientY
		};
		e.target.setPointerCapture(e.pointerId);
	};
	const onPointerMove = (e) => {
		if (!dragging.current || zoom <= 1) return;
		setPan((p) => ({
			x: p.x + e.clientX - last.current.x,
			y: p.y + e.clientY - last.current.y
		}));
		last.current = {
			x: e.clientX,
			y: e.clientY
		};
	};
	const onPointerUp = () => {
		dragging.current = false;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[60] flex flex-col bg-foreground/95",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": alt,
		onClick: onClose,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center justify-between px-4 py-3 text-background",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-sm font-medium opacity-80",
					children: alt
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setZoom((z) => Math.max(1, z - .5)),
							"aria-label": "Reduzir zoom",
							className: "flex h-10 w-10 items-center justify-center rounded-full bg-background/15 transition-colors hover:bg-background/25",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomOut, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setZoom((z) => Math.min(4, z + .5)),
							"aria-label": "Aumentar zoom",
							className: "flex h-10 w-10 items-center justify-center rounded-full bg-background/15 transition-colors hover:bg-background/25",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomIn, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							"aria-label": "Fechar",
							className: "flex h-10 w-10 items-center justify-center rounded-full bg-background/15 transition-colors hover:bg-background/25",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex flex-1 items-center justify-center overflow-hidden p-4",
				onClick: (e) => e.stopPropagation(),
				onWheel,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt,
					width: 1024,
					height: 1024,
					draggable: false,
					onClick: toggleZoom,
					onPointerDown,
					onPointerMove,
					onPointerUp,
					onPointerCancel: onPointerUp,
					className: `max-h-full max-w-full select-none object-contain transition-transform duration-200 ${zoom > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"}`,
					style: { transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "shrink-0 pb-4 text-center text-xs text-background/60",
				children: "Clique para ampliar · role para zoom · arraste quando ampliado"
			})
		]
	});
}
function ProductModal({ product, onClose }) {
	const [colorIndex, setColorIndex] = (0, import_react.useState)(0);
	const [viewIndex, setViewIndex] = (0, import_react.useState)(0);
	const [lightbox, setLightbox] = (0, import_react.useState)(false);
	const viewCount = product?.views.length ?? 0;
	(0, import_react.useEffect)(() => {
		setColorIndex(0);
		setViewIndex(0);
		setLightbox(false);
	}, [product]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (lightbox || !product) return;
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowRight") setViewIndex((i) => (i + 1) % Math.max(viewCount, 1));
			if (e.key === "ArrowLeft") setViewIndex((i) => (i - 1 + Math.max(viewCount, 1)) % Math.max(viewCount, 1));
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		onClose,
		viewCount,
		lightbox,
		product
	]);
	if (!product) return null;
	const category = categories.find((c) => c.id === product.category);
	const current = getProductImage(product, viewIndex);
	const hasMultipleViews = viewCount > 1;
	const colorMap = {
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
		"cinza": "#9CA3AF",
		"off-white": "#F9FAF1",
		"original": "#E5E7EB"
	};
	const goView = (dir) => setViewIndex((i) => (i + dir + viewCount) % viewCount);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-foreground/25 p-3 backdrop-blur-sm sm:p-6",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": product.name,
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onClick: (e) => e.stopPropagation(),
			className: "surface-card relative my-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-border bg-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				"aria-label": "Fechar",
				className: "absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/90 text-muted-foreground shadow-sm backdrop-blur transition-colors hover:border-primary hover:text-primary",
				children: "✕"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-0 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative aspect-square overflow-hidden bg-secondary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: current,
								alt: `${product.name} — ${product.colors[colorIndex]?.label ?? "cor"} · vista ${viewIndex + 1}`,
								width: 1024,
								height: 1024,
								onClick: () => setLightbox(true),
								className: "h-full w-full cursor-zoom-in object-cover transition-all duration-300"
							}, `${viewIndex}-${colorIndex}`),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setLightbox(true),
								"aria-label": "Abrir em tela cheia",
								className: "absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/90 text-muted-foreground opacity-100 shadow-sm backdrop-blur transition-colors hover:border-primary hover:text-primary sm:opacity-0 sm:group-hover:opacity-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "h-4 w-4" })
							}),
							hasMultipleViews ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => goView(-1),
								"aria-label": "Vista anterior",
								className: "absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-sm backdrop-blur transition-colors hover:border-primary hover:text-primary",
								children: "‹"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => goView(1),
								"aria-label": "Próxima vista",
								className: "absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-sm backdrop-blur transition-colors hover:border-primary hover:text-primary",
								children: "›"
							})] }) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "absolute bottom-3 left-3 rounded-full bg-card/85 px-3 py-1 text-xs text-muted-foreground",
								children: [
									hasMultipleViews ? `${viewIndex + 1}/${viewCount} · ` : "",
									product.colors[colorIndex]?.label,
									" · toque para ampliar"
								]
							})
						]
					}), hasMultipleViews ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 overflow-x-auto p-3",
						children: product.views.map((view, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setViewIndex(i),
							"aria-label": `Ver vista ${i + 1}`,
							className: `h-16 w-16 shrink-0 overflow-hidden rounded-xl border transition-colors ${i === viewIndex ? "border-primary" : "border-border hover:border-primary/50"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: view,
								alt: "",
								loading: "lazy",
								width: 1024,
								height: 1024,
								className: "h-full w-full object-cover"
							})
						}, `view-${i}`))
					}) : null]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-5 p-5 sm:p-6 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "order-2 md:order-1 flex items-start justify-between gap-4 pr-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-accent",
								children: category?.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-2xl text-foreground",
								children: product.name
							})] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "order-3 md:order-2 space-y-3",
							children: product.description.split(/\\n|\n/).map((paragraph, idx) => {
								const trimmed = paragraph.trim();
								if (!trimmed) return null;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-muted-foreground",
									children: trimmed
								}, idx);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "order-1 md:order-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold uppercase tracking-wider text-foreground",
									children: "Cores disponíveis"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold text-primary",
									children: product.colors[colorIndex]?.label
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-3",
								children: product.colors.map((c, i) => {
									const labelLower = c.label.toLowerCase();
									const isMultiColor = labelLower.includes("várias") || labelLower.includes("multi") || labelLower.includes("mesclado") || labelLower.includes("colorido") || labelLower.includes("predefinidas");
									const isThreeColors = labelLower.includes("preto") && labelLower.includes("branco") && labelLower.includes("vermelho");
									let style = {};
									if (isThreeColors) style = { background: "linear-gradient( #111827 33%, #ffffff 33%, #ffffff 66%, #dc2626 66%)" };
									else if (isMultiColor) style = { background: "repeating-linear-gradient( #ef4444, #ef4444 4px, #3b82f6 4px, #3b82f6 8px, #eab308 8px, #eab308 12px, #10b981 12px, #10b981 16px)" };
									else style = { backgroundColor: colorMap[labelLower] || "#ccc" };
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setColorIndex(i),
										title: c.label,
										className: `group flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${colorIndex === i ? "border-primary scale-110 shadow-md" : "border-transparent hover:border-border"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "h-7 w-7 rounded-full shadow-inner border border-border/60 transition-transform group-hover:scale-110",
											style
										})
									}, c.id);
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "order-4 md:order-4 grid grid-cols-2 gap-3 rounded-2xl border border-border bg-secondary/60 p-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs uppercase tracking-wider text-muted-foreground",
									children: "Material"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-foreground",
									children: product.material
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs uppercase tracking-wider text-muted-foreground",
									children: "Medidas"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-foreground",
									children: product.size
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs uppercase tracking-wider text-muted-foreground",
									children: "Produção"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-foreground",
									children: product.time
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs uppercase tracking-wider text-muted-foreground",
									children: "Camada"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-foreground",
									children: "0,4 mm"
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "order-5 md:order-5 grid gap-3 border-t border-border pt-4 sm:flex sm:flex-wrap sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl text-gradient sm:text-3xl",
								children: formatPrice(product.price)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `https://wa.me/5500000000000?text=${encodeURIComponent(`Olá! Quero encomendar: ${product.name} (${product.colors[colorIndex]?.label ?? ""})`)}`,
								target: "_blank",
								rel: "noreferrer",
								className: "rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90",
								style: { boxShadow: "var(--shadow-glow)" },
								children: "Encomendar no WhatsApp"
							})]
						})
					]
				})]
			})]
		})
	}), lightbox ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageLightbox, {
		src: current,
		alt: `${product.name} — ${product.colors[colorIndex]?.label ?? "cor"}`,
		onClose: () => setLightbox(false)
	}) : null] });
}
var contacts = [
	{
		label: "Instagram",
		href: "https://instagram.com/reb_impressoes_3d/",
		icon: Instagram,
		iconClass: "text-[#E4405F]",
		labelClass: "group-hover:text-[#E4405F]"
	},
	{
		label: "WhatsApp",
		href: "https://wa.me/5500000000000",
		icon: MessageCircle,
		iconClass: "text-[#25D366]",
		labelClass: "group-hover:text-[#25D366]"
	},
	{
		label: "Facebook",
		href: "https://www.facebook.com/marketplace/item/1051561104090443/",
		icon: Facebook,
		iconClass: "text-[#1877F2]",
		labelClass: "group-hover:text-[#1877F2]"
	},
	{
		label: "E-mail",
		href: "mailto:rbimpressoes92@gmail.com ",
		icon: Mail,
		iconClass: "text-[#EA4335]",
		labelClass: "group-hover:text-[#EA4335]"
	}
];
var columns = [
	{
		title: "Categorias",
		links: [
			{
				label: "Chaveiros",
				href: "#catalogo"
			},
			{
				label: "Suportes",
				href: "#catalogo"
			},
			{
				label: "Bonecos",
				href: "#catalogo"
			},
			{
				label: "Decoração",
				href: "#catalogo"
			}
		]
	},
	{
		title: "Atendimento",
		links: [
			{
				label: "Como encomendar",
				href: "#como-funciona"
			},
			{
				label: "Prazos e envio",
				href: "#como-funciona"
			},
			{
				label: "Peças sob medida",
				href: "#catalogo"
			}
		]
	},
	{
		title: "Referências",
		links: [
			{
				label: "Printables",
				href: "https://www.printables.com"
			},
			{
				label: "Thingiverse",
				href: "https://www.thingiverse.com"
			},
			{
				label: "MakerWorld",
				href: "https://makerworld.com"
			},
			{
				label: "Cults3D",
				href: "https://cults3d.com"
			}
		]
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-secondary/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 sm:gap-10 sm:px-6 sm:py-14 md:grid-cols-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-xl text-foreground",
						children: ["R&B ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "3D"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Peças impressas em 3D sob encomenda: chaveiros, suportes, bonecos e decoração. Feito camada por camada, aqui no ateliê."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary",
							children: "Contato"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2.5",
							children: contacts.map(({ label, href, icon: Icon, iconClass, labelClass }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href,
								target: href.startsWith("http") ? "_blank" : void 0,
								rel: href.startsWith("http") ? "noreferrer" : void 0,
								className: `group inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors ${labelClass}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: `h-4 w-4 shrink-0 ${iconClass}`,
									"aria-hidden": "true"
								}), label]
							}) }, label))
						})]
					})
				]
			}), columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary",
				children: col.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2 text-sm",
				children: col.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					target: link.href.startsWith("http") ? "_blank" : void 0,
					rel: link.href.startsWith("http") ? "noreferrer" : void 0,
					className: "text-muted-foreground transition-colors hover:text-foreground",
					children: link.label
				}) }, link.label))
			})] }, col.title))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border px-4 py-6 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto max-w-6xl text-xs text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" R&B 3D · Modelos autorais e licenciados para uso comercial. Créditos dos criadores originais indicados em cada peça."
				]
			})
		})]
	});
}
var PixLogo = ({ className }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	fill: "#1289e7",
	width: "800px",
	height: "800px",
	viewBox: "-4 -4 24 24",
	xmlns: "http://www.w3.org/2000/svg",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11.917 11.71a2.046 2.046 0 0 1-1.454-.602l-2.1-2.1a.4.4 0 0 0-.551 0l-2.108 2.108a2.044 2.044 0 0 1-1.454.602h-.414l2.66 2.66c.83.83 2.177.83 3.007 0l2.667-2.668h-.253zM4.25 4.282c.55 0 1.066.214 1.454.602l2.108 2.108a.39.39 0 0 0 .552 0l2.1-2.1a2.044 2.044 0 0 1 1.453-.602h.253L9.503 1.623a2.127 2.127 0 0 0-3.007 0l-2.66 2.66h.414z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m14.377 6.496-1.612-1.612a.307.307 0 0 1-.114.023h-.733c-.379 0-.75.154-1.017.422l-2.1 2.1a1.005 1.005 0 0 1-1.425 0L5.268 5.32a1.448 1.448 0 0 0-1.018-.422h-.9a.306.306 0 0 1-.109-.021L1.623 6.496c-.83.83-.83 2.177 0 3.008l1.618 1.618a.305.305 0 0 1 .108-.022h.901c.38 0 .75-.153 1.018-.421L7.375 8.57a1.034 1.034 0 0 1 1.426 0l2.1 2.1c.267.268.638.421 1.017.421h.733c.04 0 .079.01.114.024l1.612-1.612c.83-.83.83-2.178 0-3.008z" })]
});
var heroImages = [
	banner1_default,
	banner2_default,
	banner3_default
];
var steps = [
	{
		n: "01",
		t: "Escolha a peça 🔍",
		d: "Navegue pelo catálogo por tipo e visualize os detalhes."
	},
	{
		n: "02",
		t: "Personalize 🖌️",
		d: "Defina cor do filamento, texto ou logo da sua peça."
	},
	{
		n: "03",
		t: "Imprimimos 🖨️",
		d: "Produção em 2 a 5 dias úteis, camada por camada."
	},
	{
		n: "04",
		t: "Receba em casa 🚚",
		d: "Envio para toda a cidade."
	}
];
function Index() {
	const [filter, setFilter] = (0, import_react.useState)("todos");
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [emailForm, setEmailForm] = (0, import_react.useState)({
		name: "",
		email: "",
		subject: "",
		message: ""
	});
	const [isSending, setIsSending] = (0, import_react.useState)(false);
	const [sentStatus, setSentStatus] = (0, import_react.useState)("idle");
	const visible = (0, import_react.useMemo)(() => filter === "todos" ? products : products.filter((p) => hasCategory(p, filter)), [filter]);
	const handleSendEmail = (e) => {
		e.preventDefault();
		setIsSending(true);
		try {
			const mailtoUrl = `mailto:rbimpressoes92@gmail.com?subject=${encodeURIComponent(emailForm.subject || "Contato do Site R&B 3D")}&body=${encodeURIComponent(`Nome: ${emailForm.name}\nE-mail: ${emailForm.email}\n\nMensagem:\n${emailForm.message}`)}`;
			window.location.href = mailtoUrl;
			setSentStatus("success");
			setEmailForm({
				name: "",
				email: "",
				subject: "",
				message: ""
			});
		} catch (err) {
			setSentStatus("error");
		} finally {
			setIsSending(false);
			setTimeout(() => setSentStatus("idle"), 5e3);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 sm:py-4 md:flex md:justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex items-center gap-2.5 truncate font-display text-lg tracking-tight text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-8 w-8 shrink-0 overflow-hidden rounded-lg bg-primary/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/logo.png",
									alt: "R&B 3D Logo",
									className: "h-full w-full object-contain"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["R&B ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "3D"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden gap-7 text-sm text-muted-foreground md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#catalogo",
									className: "transition-colors hover:text-foreground",
									children: "Catálogo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#como-funciona",
									className: "transition-colors hover:text-foreground",
									children: "Como funciona"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contato",
									className: "transition-colors hover:text-foreground",
									children: "Contato"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#catalogo",
							className: "shrink-0 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90",
							children: "Ver peças"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "relative flex min-h-[70vh] flex-col justify-center overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCarousel, { images: heroImages }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 bg-grid opacity-60",
								style: {
									maskImage: "linear-gradient(to bottom, transparent 0%, rgb(0 0 0 / 35%) 35%, black 85%)",
									WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgb(0 0 0 / 35%) 35%, black 85%)"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mx-auto grid max-w-2xl gap-5 text-center lg:max-w-3xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mx-auto w-fit rounded-full border border-primary/30 bg-background/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur-sm sm:px-4 sm:text-xs",
											children: "Impressão 3D sob encomenda"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
											className: "font-display text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl",
											children: [
												"Ideias que saem da tela e viram",
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-gradient",
													children: "peça na sua mão"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mx-auto max-w-xl text-sm text-foreground sm:text-base",
											children: "Chaveiros personalizados, suportes que organizam seu setup, bonecos articulados e decoração — tudo impresso camada por camada, com acabamento caprichado."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-3 sm:flex sm:flex-wrap sm:justify-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#catalogo",
												className: "rounded-full bg-primary px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5",
												style: { boxShadow: "var(--shadow-glow)" },
												children: "Explorar catálogo"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#como-funciona",
												className: "rounded-full border border-border bg-background/80 px-6 py-3.5 text-center text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-primary hover:text-primary",
												children: "Como funciona"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
											className: "mt-2 grid grid-cols-3 gap-3",
											children: [
												["+1.200", "peças impressas"],
												["+ 40", "produtos"],
												["4,9/5", "avaliação"]
											].map(([v, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
													className: "font-display text-xl text-foreground sm:text-2xl",
													children: v
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
													className: "text-[11px] uppercase tracking-wider text-muted-foreground",
													children: l
												})]
											}, l))
										})
									]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "relative overflow-hidden py-16 sm:py-24 border-y border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-secondary/30" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 bg-cover bg-right bg-no-repeat",
								style: { backgroundImage: "url('/src/assets/comercio-bg.jpg')" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-secondary/30 via-secondary/20 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mx-auto max-w-6xl px-4 sm:px-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-8 lg:grid-cols-2 lg:items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-center lg:text-left",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mx-auto lg:mx-0 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary",
												children: "Soluções para o seu Negócio"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
												className: "mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl",
												children: ["Temos itens pensados para o ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-gradient font-bold",
													children: "seu comércio!"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-4 text-sm text-muted-foreground sm:text-base leading-relaxed mx-auto lg:mx-0 max-w-xl",
												children: "Sua loja merece praticidade, organização e estilo. Desenvolvemos peças em impressão 3D premium feitas sob medida para facilitar o seu dia a dia e encantar seus clientes no ponto de venda."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-8 flex justify-center lg:justify-start",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													onClick: () => {
														setFilter("comercio");
														document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
													},
													className: "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 pointer-events-auto cursor-pointer",
													style: { boxShadow: "var(--shadow-glow)" },
													children: ["Ver itens para Comércio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
												})
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-4 sm:grid-cols-2 relative z-10",
										children: [
											{
												icon: CreditCard,
												title: "Suportes de Maquininha",
												desc: "Organização e ergonomia no balcão de vendas, mantendo a maquininha firme e protegida."
											},
											{
												icon: PixLogo,
												title: "Displays de PIX",
												desc: "Facilite o pagamento via PIX exibindo o QR Code da sua conta de forma clara e profissional."
											},
											{
												icon: Store,
												title: "Organização do Balcão",
												desc: "Porta-cartões de visita, displays de recados e organizadores personalizados para o seu espaço."
											},
											{
												icon: RulerDimensionLine,
												title: "Peças Sob Medida",
												desc: "Precisa de algo único com o logo ou nas cores da sua marca? Nós projetamos e imprimimos para você."
											}
										].map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "surface-card rounded-2xl border border-border bg-card/80 p-5 backdrop-blur-sm transition-colors hover:border-primary/40",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.title === "Displays de PIX" ? "bg-blue-100 text-blue-600" : "bg-primary/10 text-primary"}`,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
														className: `h-6 w-6 ${item.title === "Displays de PIX" ? "-ml-0.5" : ""}`,
														strokeWidth: item.title === "Displays de PIX" ? 2.5 : 2
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-3 text-sm font-semibold text-foreground sm:text-base",
													children: item.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs text-muted-foreground sm:text-sm",
													children: item.desc
												})
											]
										}, idx))
									})]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "catalogo",
						className: "mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 md:flex md:flex-wrap md:items-end md:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl text-foreground sm:text-3xl md:text-4xl",
								children: "Catálogo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Filtre por tipo de peça e clique para ver os detalhes de cada item."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: [{
									id: "todos",
									label: "Todos"
								}, ...categories].map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setFilter(cat.id),
									className: `rounded-full border px-3 py-1.5 text-xs font-medium transition-all sm:px-4 sm:py-2 sm:text-sm ${filter === cat.id ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"}`,
									children: cat.label
								}, cat.id))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4",
							children: visible.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
								product,
								onSelect: setSelected
							}, product.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "como-funciona",
						className: "border-y border-border bg-secondary/50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl text-foreground sm:text-3xl md:text-4xl",
								children: "Como funciona"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4",
								children: steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "surface-card rounded-2xl border border-border p-5 transition-colors hover:border-primary/50 sm:p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-2xl text-primary sm:text-3xl",
											children: s.n
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 text-base text-foreground",
											children: s.t
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-muted-foreground",
											children: s.d
										})
									]
								}, s.n))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "contato",
						className: "mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-10 shadow-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary",
										children: "Fale Conosco"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-4 font-display text-2xl text-foreground sm:text-3xl",
										children: "Envie um E-mail"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: "Dúvidas, sugestões ou orçamentos personalizados? Preencha os campos abaixo e envie diretamente para nós!"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSendEmail,
								className: "mt-8 space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "name",
												className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
												children: "Nome"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "name",
												type: "text",
												required: true,
												value: emailForm.name,
												onChange: (e) => setEmailForm({
													...emailForm,
													name: e.target.value
												}),
												placeholder: "Seu nome",
												className: "w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "email",
												className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
												children: "Seu E-mail"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "email",
												type: "email",
												required: true,
												value: emailForm.email,
												onChange: (e) => setEmailForm({
													...emailForm,
													email: e.target.value
												}),
												placeholder: "seu.email@exemplo.com",
												className: "w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "subject",
											className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
											children: "Assunto"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "subject",
											type: "text",
											required: true,
											value: emailForm.subject,
											onChange: (e) => setEmailForm({
												...emailForm,
												subject: e.target.value
											}),
											placeholder: "Ex: Orçamento de peça personalizada",
											className: "w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "message",
											className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
											children: "Mensagem"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											id: "message",
											required: true,
											rows: 4,
											value: emailForm.message,
											onChange: (e) => setEmailForm({
												...emailForm,
												message: e.target.value
											}),
											placeholder: "Escreva sua mensagem detalhadamente...",
											className: "w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										disabled: isSending,
										className: "w-full rounded-full bg-primary py-3.5 text-center text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2",
										style: { boxShadow: "var(--shadow-glow)" },
										children: isSending ? "Preparando..." : "Enviar por E-mail"
									}),
									sentStatus === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-center text-xs text-green-500 font-medium animate-pulse",
										children: "Abrindo seu cliente de e-mail... Obrigado pelo contato!"
									}),
									sentStatus === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-center text-xs text-red-500 font-medium",
										children: "Ocorreu um erro ao tentar enviar. Por favor, tente novamente."
									})
								]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductModal, {
				product: selected,
				onClose: () => setSelected(null)
			})
		]
	});
}
//#endregion
export { Index as component };
