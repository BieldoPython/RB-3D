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
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"987-6SXEjZvBj7FzWVkYWYyDm+eVfU0\"",
		"mtime": "2026-09-30T00:45:28.476Z",
		"size": 2439,
		"path": "../public/favicon.png"
	},
	"/logo.png": {
		"type": "image/png",
		"etag": "\"987-6SXEjZvBj7FzWVkYWYyDm+eVfU0\"",
		"mtime": "2026-09-30T00:45:28.476Z",
		"size": 2439,
		"path": "../public/logo.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-30T00:45:28.476Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/img1-B6Xrndbp.jpg": {
		"type": "image/jpeg",
		"etag": "\"10110-gBMO8Ac1tjhZjU8mUhVnH/jipW4\"",
		"mtime": "2026-09-30T00:45:27.309Z",
		"size": 65808,
		"path": "../public/assets/img1-B6Xrndbp.jpg"
	},
	"/assets/img1-BzCNZEvJ.jpg": {
		"type": "image/jpeg",
		"etag": "\"f39f-jzoRCXDH4l+TUSX2RyYvnPnd2M8\"",
		"mtime": "2026-09-30T00:45:27.310Z",
		"size": 62367,
		"path": "../public/assets/img1-BzCNZEvJ.jpg"
	},
	"/assets/img1-CfYAN1Rd.jpg": {
		"type": "image/jpeg",
		"etag": "\"146d2-n0er0+yxqVQujngOzP/eKsCSO14\"",
		"mtime": "2026-09-30T00:45:27.310Z",
		"size": 83666,
		"path": "../public/assets/img1-CfYAN1Rd.jpg"
	},
	"/assets/img1-D-LT_OGF.jpg": {
		"type": "image/jpeg",
		"etag": "\"108e2-aGzKTToLtNn+RzDy/M3jyyCQ50s\"",
		"mtime": "2026-09-30T00:45:27.310Z",
		"size": 67810,
		"path": "../public/assets/img1-D-LT_OGF.jpg"
	},
	"/assets/img1-DCcPcOTs.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1accd-49GJFebmx8Z8EuMwnW7sFFMBJmY\"",
		"mtime": "2026-09-30T00:45:27.310Z",
		"size": 109773,
		"path": "../public/assets/img1-DCcPcOTs.jpeg"
	},
	"/assets/img1-CFjon9Eo.jpeg": {
		"type": "image/jpeg",
		"etag": "\"13bbc-SQKOPUmyNSnMQpQ5PMigbT83Zag\"",
		"mtime": "2026-09-30T00:45:27.310Z",
		"size": 80828,
		"path": "../public/assets/img1-CFjon9Eo.jpeg"
	},
	"/assets/img2-BtHIZP3K.jpg": {
		"type": "image/jpeg",
		"etag": "\"e2fb-PMvzQFrOw/3Cu8mcGKQTEV6UJmE\"",
		"mtime": "2026-09-30T00:45:27.311Z",
		"size": 58107,
		"path": "../public/assets/img2-BtHIZP3K.jpg"
	},
	"/assets/img1-aCEkJkwx.jpg": {
		"type": "image/jpeg",
		"etag": "\"12194-2k6RZzDxte0mvwqkLQyzYK+Si/U\"",
		"mtime": "2026-09-30T00:45:27.311Z",
		"size": 74132,
		"path": "../public/assets/img1-aCEkJkwx.jpg"
	},
	"/assets/img2-CG2uKKiK.jpg": {
		"type": "image/jpeg",
		"etag": "\"eb4c-V61LhkLWe2RW9/na/TjrML9n+0Q\"",
		"mtime": "2026-09-30T00:45:27.311Z",
		"size": 60236,
		"path": "../public/assets/img2-CG2uKKiK.jpg"
	},
	"/assets/img2-CHE80fQq.jpg": {
		"type": "image/jpeg",
		"etag": "\"1569b-aXTem/hyjLI9xPssScJ/j+QC5JE\"",
		"mtime": "2026-09-30T00:45:27.311Z",
		"size": 87707,
		"path": "../public/assets/img2-CHE80fQq.jpg"
	},
	"/assets/img2-Lvh_lVPz.jpeg": {
		"type": "image/jpeg",
		"etag": "\"175a5-DqRwlk/JM1xOTtcLqDCNYqzN/gQ\"",
		"mtime": "2026-09-30T00:45:27.311Z",
		"size": 95653,
		"path": "../public/assets/img2-Lvh_lVPz.jpeg"
	},
	"/assets/img3-B6_XpS6H.jpg": {
		"type": "image/jpeg",
		"etag": "\"104f6-9XMV2k+dztAWP3U1TqWuA1JoToY\"",
		"mtime": "2026-09-30T00:45:27.312Z",
		"size": 66806,
		"path": "../public/assets/img3-B6_XpS6H.jpg"
	},
	"/assets/img2-zAcXWbG9.jpg": {
		"type": "image/jpeg",
		"etag": "\"311f6-RJWofpfx5EppKB9hAur44LV6HkM\"",
		"mtime": "2026-09-30T00:45:27.312Z",
		"size": 201206,
		"path": "../public/assets/img2-zAcXWbG9.jpg"
	},
	"/assets/img2-D_Ge-e53.jpg": {
		"type": "image/jpeg",
		"etag": "\"38f25-GYIsz+CeZrnpv6fWTMPgy80JryI\"",
		"mtime": "2026-09-30T00:45:27.311Z",
		"size": 233253,
		"path": "../public/assets/img2-D_Ge-e53.jpg"
	},
	"/assets/img3-CGs2ok2f.jpg": {
		"type": "image/jpeg",
		"etag": "\"d2c4-Be2tsNa4UiITcrc4apLfAgC4y64\"",
		"mtime": "2026-09-30T00:45:27.312Z",
		"size": 53956,
		"path": "../public/assets/img3-CGs2ok2f.jpg"
	},
	"/assets/img3-CvBOxfFG.jpg": {
		"type": "image/jpeg",
		"etag": "\"50b6c-iNBk+lnbCCOLTZXN3KGJXyit+Tg\"",
		"mtime": "2026-09-30T00:45:27.312Z",
		"size": 330604,
		"path": "../public/assets/img3-CvBOxfFG.jpg"
	},
	"/assets/img3-CIesKr0Y.jpg": {
		"type": "image/jpeg",
		"etag": "\"10982-AzBJMvzq2ZromK0aeEWHH7QC7/Y\"",
		"mtime": "2026-09-30T00:45:27.312Z",
		"size": 67970,
		"path": "../public/assets/img3-CIesKr0Y.jpg"
	},
	"/assets/img2-C50Btdzg.jpg": {
		"type": "image/jpeg",
		"etag": "\"d830-pZXwsX3lTyJDUWfAaRoVCkL+FxI\"",
		"mtime": "2026-09-30T00:45:27.311Z",
		"size": 55344,
		"path": "../public/assets/img2-C50Btdzg.jpg"
	},
	"/assets/banner2-CIHZdtpe.png": {
		"type": "image/png",
		"etag": "\"15ec9f-KB/gq8Gt4SujJUmcyWwFstWzn8M\"",
		"mtime": "2026-09-30T00:45:27.236Z",
		"size": 1436831,
		"path": "../public/assets/banner2-CIHZdtpe.png"
	},
	"/assets/banner1-Do5YobwQ.png": {
		"type": "image/png",
		"etag": "\"1329e3-59IG5h1VY5fxl7gFDfUspNay6oQ\"",
		"mtime": "2026-09-30T00:45:27.235Z",
		"size": 1255907,
		"path": "../public/assets/banner1-Do5YobwQ.png"
	},
	"/assets/img3-DfCEEpst.jpg": {
		"type": "image/jpeg",
		"etag": "\"163ebc-bUlPVJnN0Fj9OrofwWLdswCw43g\"",
		"mtime": "2026-09-30T00:45:27.312Z",
		"size": 1457852,
		"path": "../public/assets/img3-DfCEEpst.jpg"
	},
	"/assets/img4-BhlX907G.jpg": {
		"type": "image/jpeg",
		"etag": "\"d56e-U+pVkF+CG9vn4MqcHk5oKLPguIs\"",
		"mtime": "2026-09-30T00:45:27.313Z",
		"size": 54638,
		"path": "../public/assets/img4-BhlX907G.jpg"
	},
	"/assets/img4-CJLpRMks.jpg": {
		"type": "image/jpeg",
		"etag": "\"14919-GsVNenK8TUYV82yJydb7EyjiX/s\"",
		"mtime": "2026-09-30T00:45:27.314Z",
		"size": 84249,
		"path": "../public/assets/img4-CJLpRMks.jpg"
	},
	"/assets/img5-BWg_GFkp.jpg": {
		"type": "image/jpeg",
		"etag": "\"f241-hkWgSZoWrg5+B8uWWFNDxXzTMR0\"",
		"mtime": "2026-09-30T00:45:27.317Z",
		"size": 62017,
		"path": "../public/assets/img5-BWg_GFkp.jpg"
	},
	"/assets/img4-D60wL8ir.jpg": {
		"type": "image/jpeg",
		"etag": "\"15fe4-MmNFAprq/19vf9xSC0aSSNoz6Zk\"",
		"mtime": "2026-09-30T00:45:27.314Z",
		"size": 90084,
		"path": "../public/assets/img4-D60wL8ir.jpg"
	},
	"/assets/img6-DNVwx4zA.jpg": {
		"type": "image/jpeg",
		"etag": "\"10b46-1YNr/1HnsL9wxMcpcYW2dAiEjaw\"",
		"mtime": "2026-09-30T00:45:27.318Z",
		"size": 68422,
		"path": "../public/assets/img6-DNVwx4zA.jpg"
	},
	"/assets/img7-BcLJKgXR.jpg": {
		"type": "image/jpeg",
		"etag": "\"e058-LpItMKW3GPs7yBWi6U9BdZ1viRA\"",
		"mtime": "2026-09-30T00:45:27.319Z",
		"size": 57432,
		"path": "../public/assets/img7-BcLJKgXR.jpg"
	},
	"/assets/index-CFbwlS34.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54b93-WNrH9Ob1dbcdQxLNnlQikFz5UKI\"",
		"mtime": "2026-09-30T00:45:27.233Z",
		"size": 347027,
		"path": "../public/assets/index-CFbwlS34.js"
	},
	"/assets/styles-CyJvz5b0.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"16a99-8YhoR0xC3BFvvSA1f6eTXkmbcsc\"",
		"mtime": "2026-09-30T00:45:27.319Z",
		"size": 92825,
		"path": "../public/assets/styles-CyJvz5b0.css"
	},
	"/assets/routes-DkKweYvc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e69-3tMWp+bL6vG7t9AQ7nsmJI8kIgk\"",
		"mtime": "2026-09-30T00:45:27.234Z",
		"size": 40553,
		"path": "../public/assets/routes-DkKweYvc.js"
	},
	"/assets/img8-BKhuqFtn.jpg": {
		"type": "image/jpeg",
		"etag": "\"18512-xA7Q3YAQjcqgZ8JFn+qP2wt9f7I\"",
		"mtime": "2026-09-30T00:45:27.319Z",
		"size": 99602,
		"path": "../public/assets/img8-BKhuqFtn.jpg"
	},
	"/assets/img4-D8lAnbcr.jpg": {
		"type": "image/jpeg",
		"etag": "\"129b39-htjPvqthwc3eQDnBAcvHtZ0HUDM\"",
		"mtime": "2026-09-30T00:45:27.314Z",
		"size": 1219385,
		"path": "../public/assets/img4-D8lAnbcr.jpg"
	},
	"/assets/banner3-BqDgPR0N.jpg": {
		"type": "image/jpeg",
		"etag": "\"195f299-RaP2EjRJOtkjuOIQ6FstZJ/2/VA\"",
		"mtime": "2026-09-30T00:45:27.237Z",
		"size": 26604185,
		"path": "../public/assets/banner3-BqDgPR0N.jpg"
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
