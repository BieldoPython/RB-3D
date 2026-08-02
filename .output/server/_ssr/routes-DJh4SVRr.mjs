import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Maximize2, c as Facebook, i as MessageCircle, n as ZoomIn, o as Mail, r as X, s as Instagram, t as ZoomOut } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DJh4SVRr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-DkEoJT7r.jpg";
var p_bonecos_default = "/assets/p-bonecos-_EXxppha.jpg";
var p_chaveiros_default = "/assets/p-chaveiros-BtleBjXy.jpg";
var p_decor_default = "/assets/p-decor-RQfnPWH_.jpg";
var p_suportes_default = "/assets/p-suportes-ABWeIJU1.jpg";
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
var p_chaveiros_azul_default = "/assets/p-chaveiros-azul-D-ry9zc5.jpg";
var p_chaveiros_claro_default = "/assets/p-chaveiros-claro-DPbJbp8-.jpg";
var p_chaveiros_escuro_default = "/assets/p-chaveiros-escuro-cljBH48v.jpg";
var p_suportes_azul_default = "/assets/p-suportes-azul-CpkPKkUA.jpg";
var p_suportes_claro_default = "/assets/p-suportes-claro-BylfJv7k.jpg";
var p_suportes_escuro_default = "/assets/p-suportes-escuro-BNQ0ESNh.jpg";
var p_bonecos_azul_default = "/assets/p-bonecos-azul-BAXMvvPV.jpg";
var p_bonecos_claro_default = "/assets/p-bonecos-claro-DM-FDKLm.jpg";
var p_bonecos_escuro_default = "/assets/p-bonecos-escuro-mif4UZLI.jpg";
var p_decor_azul_default = "/assets/p-decor-azul-CA1BLOEn.jpg";
var p_decor_claro_default = "/assets/p-decor-claro-Oq4C_4_Y.jpg";
var p_decor_escuro_default = "/assets/p-decor-escuro-BS1j5Xv5.jpg";
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
		id: "bonecos",
		label: "Bonecos"
	},
	{
		id: "decor",
		label: "Decoração"
	}
];
var getProductImage = (product, viewIndex = 0, colorIndex = 0) => product.views[viewIndex]?.[colorIndex] ?? product.image;
var products = [
	{
		id: "chav-personalizado",
		name: "Chaveiro Personalizado",
		category: "chaveiros",
		price: 18,
		image: p_chaveiros_default,
		colors: [
			{
				id: "original",
				label: "Original"
			},
			{
				id: "azul-royal",
				label: "Azul royal"
			},
			{
				id: "azul-claro",
				label: "Azul claro"
			},
			{
				id: "preto",
				label: "Preto"
			}
		],
		views: [[
			p_chaveiros_default,
			p_chaveiros_azul_default,
			p_chaveiros_claro_default,
			p_chaveiros_escuro_default
		]],
		tagline: "Seu nome, logo ou desenho impresso em 3D",
		description: "Chaveiro feito sob encomenda com o texto ou símbolo que você quiser. Acabamento liso, argola metálica reforçada e camadas de 0,12 mm para um relevo bem definido.",
		material: "PLA+ premium",
		size: "55 × 25 × 4 mm",
		time: "2 a 3 dias úteis",
		badge: "Mais vendido"
	},
	{
		id: "chav-pet",
		name: "Tag para Coleira Pet",
		category: "chaveiros",
		price: 22,
		image: p_chaveiros_default,
		colors: [
			{
				id: "original",
				label: "Original"
			},
			{
				id: "azul-royal",
				label: "Azul royal"
			},
			{
				id: "rosa",
				label: "Rosa"
			},
			{
				id: "preto",
				label: "Preto"
			}
		],
		views: [[
			p_chaveiros_default,
			p_chaveiros_azul_default,
			p_chaveiros_claro_default,
			p_chaveiros_escuro_default
		]],
		tagline: "Identificação leve e resistente para o seu pet",
		description: "Plaquinha com nome do pet e telefone gravados em relevo. Leve, à prova d'água e com acabamento arredondado para não machucar.",
		material: "PETG resistente a UV",
		size: "40 × 28 × 3 mm",
		time: "2 dias úteis"
	},
	{
		id: "sup-celular",
		name: "Suporte de Celular Dobrável",
		category: "suportes",
		price: 39,
		image: p_suportes_default,
		colors: [
			{
				id: "original",
				label: "Original"
			},
			{
				id: "azul-royal",
				label: "Azul royal"
			},
			{
				id: "branco",
				label: "Branco"
			},
			{
				id: "grafite",
				label: "Grafite"
			}
		],
		views: [[
			p_suportes_default,
			p_suportes_azul_default,
			p_suportes_claro_default,
			p_suportes_escuro_default
		]],
		tagline: "Ângulo ajustável, cabe no bolso",
		description: "Suporte com dobradiça impressa em uma única peça, base antiderrapante e passagem de cabo para carregar enquanto usa. Suporta celulares e tablets pequenos.",
		material: "PLA+ com base emborrachada",
		size: "90 × 70 × 12 mm (fechado)",
		time: "3 dias úteis",
		badge: "Novo"
	},
	{
		id: "sup-headset",
		name: "Suporte de Headset de Mesa",
		category: "suportes",
		price: 59,
		image: p_suportes_default,
		colors: [
			{
				id: "original",
				label: "Original"
			},
			{
				id: "grafite",
				label: "Grafite"
			},
			{
				id: "azul-royal",
				label: "Azul royal"
			},
			{
				id: "branco",
				label: "Branco"
			}
		],
		views: [[
			p_suportes_default,
			p_suportes_escuro_default,
			p_suportes_azul_default,
			p_suportes_claro_default
		]],
		tagline: "Setup organizado e com cara de profissional",
		description: "Base pesada com apoio anatômico que não marca a espuma do headset. Opção de gravação de logo na lateral, ideal para gamers e streamers.",
		material: "PLA+ 100% infill na base",
		size: "150 × 110 × 240 mm",
		time: "4 dias úteis"
	},
	{
		id: "bon-articulado",
		name: "Boneco Articulado Flexi",
		category: "bonecos",
		price: 45,
		image: p_bonecos_default,
		colors: [
			{
				id: "original",
				label: "Original"
			},
			{
				id: "azul-metalico",
				label: "Azul metálico"
			},
			{
				id: "vermelho",
				label: "Vermelho"
			},
			{
				id: "claro",
				label: "Tons claros"
			}
		],
		views: [[
			p_bonecos_default,
			p_bonecos_azul_default,
			p_bonecos_escuro_default,
			p_bonecos_claro_default
		]],
		tagline: "Sai da impressora já se mexendo",
		description: "Impresso em peça única com articulações funcionais — dobra, torce e fica em pé. Perfeito como fidget de mesa ou presente colecionável.",
		material: "PLA silk",
		size: "18 cm de altura",
		time: "4 a 5 dias úteis",
		badge: "Favorito"
	},
	{
		id: "bon-mini",
		name: "Mini Colecionáveis (kit 3)",
		category: "bonecos",
		price: 69,
		image: p_bonecos_default,
		colors: [
			{
				id: "original",
				label: "Original"
			},
			{
				id: "cinza",
				label: "Cinza primer"
			},
			{
				id: "azul-metalico",
				label: "Azul metálico"
			},
			{
				id: "grafite",
				label: "Grafite"
			}
		],
		views: [[
			p_bonecos_default,
			p_bonecos_claro_default,
			p_bonecos_azul_default,
			p_bonecos_escuro_default
		]],
		tagline: "Trio de miniaturas com alto nível de detalhe",
		description: "Kit com três miniaturas impressas em camadas de 0,08 mm, prontas para pintar ou já coloridas. Escolha os personagens no pedido.",
		material: "Resina / PLA detalhado",
		size: "6 a 8 cm cada",
		time: "5 dias úteis"
	},
	{
		id: "dec-organizador",
		name: "Organizador de Mesa Modular",
		category: "decor",
		price: 54,
		image: p_decor_default,
		colors: [
			{
				id: "original",
				label: "Original"
			},
			{
				id: "off-white",
				label: "Off-white"
			},
			{
				id: "azul-royal",
				label: "Azul royal"
			},
			{
				id: "grafite",
				label: "Grafite"
			}
		],
		views: [[
			p_decor_default,
			p_decor_claro_default,
			p_decor_azul_default,
			p_decor_escuro_default
		]],
		tagline: "Encaixe os módulos do jeito que você usa",
		description: "Módulos que se conectam entre si para canetas, cartões e fones. Design geométrico minimalista que combina com qualquer setup.",
		material: "PLA fosco",
		size: "100 × 80 × 95 mm por módulo",
		time: "3 dias úteis"
	},
	{
		id: "dec-vaso",
		name: "Vaso Geométrico",
		category: "decor",
		price: 49,
		image: p_decor_default,
		colors: [
			{
				id: "original",
				label: "Original"
			},
			{
				id: "azul-royal",
				label: "Azul royal"
			},
			{
				id: "grafite",
				label: "Grafite"
			},
			{
				id: "off-white",
				label: "Off-white"
			}
		],
		views: [[
			p_decor_default,
			p_decor_azul_default,
			p_decor_escuro_default,
			p_decor_claro_default
		]],
		tagline: "Facetas que brincam com a luz",
		description: "Vaso impresso em espiral com paredes lisas e furo de drenagem opcional. Vai bem com suculentas ou como porta-objetos.",
		material: "PLA fosco / PETG",
		size: "110 × 110 × 120 mm",
		time: "3 dias úteis"
	}
];
var formatPrice = (value) => value.toLocaleString("pt-BR", {
	style: "currency",
	currency: "BRL"
});
function ProductCard({ product, onSelect }) {
	const category = categories.find((c) => c.id === product.category);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => onSelect(product),
		className: "group surface-card relative overflow-hidden rounded-xl border border-border text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:rounded-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-square overflow-hidden bg-secondary",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: product.name,
				loading: "lazy",
				width: 1024,
				height: 1024,
				className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
			}), product.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-2 top-2 rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary-foreground sm:left-3 sm:top-3 sm:px-3 sm:py-1 sm:text-[11px]",
				children: product.badge
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-1.5 p-2.5 sm:space-y-2 sm:p-4 md:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[9px] font-semibold uppercase tracking-[0.14em] text-primary/80 sm:text-[11px] sm:tracking-[0.18em]",
					children: category?.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-sm leading-tight text-foreground sm:text-base md:text-lg",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "line-clamp-2 text-xs text-muted-foreground sm:text-sm",
					children: product.tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between pt-1 sm:pt-2",
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
	const current = getProductImage(product, viewIndex, colorIndex);
	const hasMultipleViews = viewCount > 1;
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative aspect-square overflow-hidden bg-secondary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: current,
							alt: `${product.name} — ${product.colors[colorIndex]?.label ?? "cor"} · vista ${viewIndex + 1}`,
							width: 1024,
							height: 1024,
							onClick: () => setLightbox(true),
							className: "h-full w-full cursor-zoom-in object-cover transition-opacity duration-300"
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
							src: view[colorIndex] ?? view[0],
							alt: "",
							loading: "lazy",
							width: 1024,
							height: 1024,
							className: "h-full w-full object-cover"
						})
					}, `view-${i}`))
				}) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5 p-5 sm:p-6 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-start justify-between gap-4 pr-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-accent",
								children: category?.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-2xl text-foreground",
								children: product.name
							})] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted-foreground",
							children: product.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-xs font-semibold uppercase tracking-wider text-foreground",
							children: "Cor do filamento"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: product.colors.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setColorIndex(i),
								className: `rounded-full border px-3 py-1.5 text-xs transition-colors ${colorIndex === i ? "border-primary bg-primary/15 text-primary" : "border-border text-muted-foreground hover:border-primary/50"}`,
								children: c.label
							}, c.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "grid grid-cols-2 gap-3 rounded-2xl border border-border bg-secondary/60 p-4 text-sm",
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
									children: "0,12 mm"
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 border-t border-border pt-4 sm:flex sm:flex-wrap sm:items-center sm:justify-between",
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
		href: "https://instagram.com/rb3d",
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
		href: "https://facebook.com/rb3d",
		icon: Facebook,
		iconClass: "text-[#1877F2]",
		labelClass: "group-hover:text-[#1877F2]"
	},
	{
		label: "E-mail",
		href: "mailto:contato@rb3d.com.br",
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
var heroImages = [
	hero_default,
	p_chaveiros_default,
	p_suportes_default,
	p_bonecos_default,
	p_decor_default
];
var steps = [
	{
		n: "01",
		t: "Escolha a peça",
		d: "Navegue pelo catálogo por tipo e visualize os detalhes."
	},
	{
		n: "02",
		t: "Personalize",
		d: "Defina cor do filamento, texto ou logo da sua peça."
	},
	{
		n: "03",
		t: "Imprimimos",
		d: "Produção em 2 a 5 dias úteis, camada por camada."
	},
	{
		n: "04",
		t: "Receba em casa",
		d: "Envio para todo o Brasil com código de rastreio."
	}
];
function Index() {
	const [filter, setFilter] = (0, import_react.useState)("todos");
	const [selected, setSelected] = (0, import_react.useState)(null);
	const visible = (0, import_react.useMemo)(() => filter === "todos" ? products : products.filter((p) => p.category === filter), [filter]);
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
							className: "truncate font-display text-lg tracking-tight text-foreground",
							children: ["R&B ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "3D"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden gap-7 text-sm text-muted-foreground md:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#catalogo",
								className: "transition-colors hover:text-foreground",
								children: "Catálogo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#como-funciona",
								className: "transition-colors hover:text-foreground",
								children: "Como funciona"
							})]
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
						className: "relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCarousel, { images: heroImages }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 bg-grid opacity-80",
								style: {
									maskImage: "linear-gradient(to bottom, transparent 0%, rgb(0 0 0 / 35%) 35%, black 75%)",
									WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgb(0 0 0 / 35%) 35%, black 75%)"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28",
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
											className: "mx-auto max-w-xl text-sm text-muted-foreground sm:text-base",
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
