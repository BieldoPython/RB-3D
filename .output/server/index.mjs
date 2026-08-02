globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/hero-DkEoJT7r.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b405-hfhA8BY+mxmz0oMbMpAshFLLEzk\"",
		"mtime": "2026-08-01T16:05:12.491Z",
		"size": 111621,
		"path": "../public/assets/hero-DkEoJT7r.jpg"
	},
	"/assets/index-DcJjKgln.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54b96-6bSefEdrPzpcbBrlp/Uov4REo/o\"",
		"mtime": "2026-08-01T16:05:12.489Z",
		"size": 347030,
		"path": "../public/assets/index-DcJjKgln.js"
	},
	"/assets/p-bonecos-claro-DM-FDKLm.jpg": {
		"type": "image/jpeg",
		"etag": "\"81ac-FXObxEZIAOr9mCv62NGBnjGZP6A\"",
		"mtime": "2026-08-01T16:05:12.491Z",
		"size": 33196,
		"path": "../public/assets/p-bonecos-claro-DM-FDKLm.jpg"
	},
	"/assets/p-bonecos-_EXxppha.jpg": {
		"type": "image/jpeg",
		"etag": "\"b792-bL0bhclrHSczsDdjlPLgKy/r7bY\"",
		"mtime": "2026-08-01T16:05:12.491Z",
		"size": 46994,
		"path": "../public/assets/p-bonecos-_EXxppha.jpg"
	},
	"/assets/p-bonecos-azul-BAXMvvPV.jpg": {
		"type": "image/jpeg",
		"etag": "\"a303-t3C4/ZoVZ239mLr5D+1f1hrwh3c\"",
		"mtime": "2026-08-01T16:05:12.491Z",
		"size": 41731,
		"path": "../public/assets/p-bonecos-azul-BAXMvvPV.jpg"
	},
	"/assets/p-bonecos-escuro-mif4UZLI.jpg": {
		"type": "image/jpeg",
		"etag": "\"dd80-XQvNL5qUFelAN0qJpoGm8qYg4Tw\"",
		"mtime": "2026-08-01T16:05:12.491Z",
		"size": 56704,
		"path": "../public/assets/p-bonecos-escuro-mif4UZLI.jpg"
	},
	"/assets/p-chaveiros-BtleBjXy.jpg": {
		"type": "image/jpeg",
		"etag": "\"db4c-JeWfujaXAWL2xwGoONxzNqOLin8\"",
		"mtime": "2026-08-01T16:05:12.491Z",
		"size": 56140,
		"path": "../public/assets/p-chaveiros-BtleBjXy.jpg"
	},
	"/assets/p-chaveiros-claro-DPbJbp8-.jpg": {
		"type": "image/jpeg",
		"etag": "\"841e-NPCtHYdwsuUaPWOc8/P8S8kFyTk\"",
		"mtime": "2026-08-01T16:05:12.491Z",
		"size": 33822,
		"path": "../public/assets/p-chaveiros-claro-DPbJbp8-.jpg"
	},
	"/assets/p-chaveiros-azul-D-ry9zc5.jpg": {
		"type": "image/jpeg",
		"etag": "\"e0a0-rULXxZHwo3J2AdKjdFvHAmYLTvA\"",
		"mtime": "2026-08-01T16:05:12.491Z",
		"size": 57504,
		"path": "../public/assets/p-chaveiros-azul-D-ry9zc5.jpg"
	},
	"/assets/p-chaveiros-escuro-cljBH48v.jpg": {
		"type": "image/jpeg",
		"etag": "\"e2de-U0AS+8gV6zwyN1H6rQasMNV25J8\"",
		"mtime": "2026-08-01T16:05:12.491Z",
		"size": 58078,
		"path": "../public/assets/p-chaveiros-escuro-cljBH48v.jpg"
	},
	"/assets/p-decor-RQfnPWH_.jpg": {
		"type": "image/jpeg",
		"etag": "\"979f-poNy4aLhxhR99RwNABB13V4OGmU\"",
		"mtime": "2026-08-01T16:05:12.492Z",
		"size": 38815,
		"path": "../public/assets/p-decor-RQfnPWH_.jpg"
	},
	"/assets/p-decor-azul-CA1BLOEn.jpg": {
		"type": "image/jpeg",
		"etag": "\"ab4f-fE/uzedd34OKuiXL8DixQS76jwk\"",
		"mtime": "2026-08-01T16:05:12.492Z",
		"size": 43855,
		"path": "../public/assets/p-decor-azul-CA1BLOEn.jpg"
	},
	"/assets/p-decor-claro-Oq4C_4_Y.jpg": {
		"type": "image/jpeg",
		"etag": "\"8d15-eDg2YKh8fMrgEQeMjXJwrgofWac\"",
		"mtime": "2026-08-01T16:05:12.492Z",
		"size": 36117,
		"path": "../public/assets/p-decor-claro-Oq4C_4_Y.jpg"
	},
	"/assets/p-decor-escuro-BS1j5Xv5.jpg": {
		"type": "image/jpeg",
		"etag": "\"92ca-puqb9TYNyWKojhhLWndxW6R3sNo\"",
		"mtime": "2026-08-01T16:05:12.492Z",
		"size": 37578,
		"path": "../public/assets/p-decor-escuro-BS1j5Xv5.jpg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-08-01T16:05:13.447Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/p-suportes-ABWeIJU1.jpg": {
		"type": "image/jpeg",
		"etag": "\"7aae-LqK7IdhJhy2wmQaNVl889zc4NmQ\"",
		"mtime": "2026-08-01T16:05:12.492Z",
		"size": 31406,
		"path": "../public/assets/p-suportes-ABWeIJU1.jpg"
	},
	"/assets/p-suportes-azul-CpkPKkUA.jpg": {
		"type": "image/jpeg",
		"etag": "\"96bc-FapN+q1gkBK7OYPoGSMqhJ0NrsY\"",
		"mtime": "2026-08-01T16:05:12.492Z",
		"size": 38588,
		"path": "../public/assets/p-suportes-azul-CpkPKkUA.jpg"
	},
	"/assets/p-suportes-claro-BylfJv7k.jpg": {
		"type": "image/jpeg",
		"etag": "\"7b1d-6xNvaCyfiP5MQPSCQzb5/D4XSqk\"",
		"mtime": "2026-08-01T16:05:12.492Z",
		"size": 31517,
		"path": "../public/assets/p-suportes-claro-BylfJv7k.jpg"
	},
	"/assets/p-suportes-escuro-BNQ0ESNh.jpg": {
		"type": "image/jpeg",
		"etag": "\"a2e5-N6B139eI0Zxr+O3lhWIPquKiV88\"",
		"mtime": "2026-08-01T16:05:12.492Z",
		"size": 41701,
		"path": "../public/assets/p-suportes-escuro-BNQ0ESNh.jpg"
	},
	"/assets/routes-C9JuFkIe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6d38-++8p7YWzLCxe0x4DE+xhDDbdwdM\"",
		"mtime": "2026-08-01T16:05:12.491Z",
		"size": 27960,
		"path": "../public/assets/routes-C9JuFkIe.js"
	},
	"/assets/styles-CAlDW5nX.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15c21-hG7BoHO+KoKYrdq+MRRdmg/7+6o\"",
		"mtime": "2026-08-01T16:05:12.492Z",
		"size": 89121,
		"path": "../public/assets/styles-CAlDW5nX.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_dkFrKB = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_dkFrKB
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
