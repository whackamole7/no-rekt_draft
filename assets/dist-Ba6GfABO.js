const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/core-Bir29sln.js","assets/index-cWPXYV96.js","assets/index-DWeiJWyd.css","assets/HelpersUtil-ejIDGNLw.js","assets/ApiController-CMpbb_GJ.js","assets/ccip-CwzlVp0-.js","assets/index.es-74jGlhJO.js","assets/secp256k1-BClhGzQl.js","assets/AlertController-BzARNxW8.js","assets/_esm-BMuO7IcQ.js","assets/CaipNetworkUtil-BDyx8GX3.js"])))=>i.map(i=>d[i]);
import "./secp256k1-BClhGzQl.js";
import { A as safeJsonParse, B as base32, C as require_cjs$2, D as Qo$2, E as Qe$2, F as require_cjs, I as Ge$3, L as Re$1, M as i, N as r, O as sn, P as IEvents, R as Ue$2, S as fromHex, T as Po$2, _ as concat, a as isJsonRpcRequest, b as esm_default, c as formatJsonRpcError, d as getBigIntRpcId, f as payloadId, g as fromString, h as toString, i as isJsonRpcError, j as safeJsonStringify, k as h, l as formatJsonRpcRequest, m as C$3, n as f$3, o as isJsonRpcResponse, p as require_blakejs, r as o, s as isJsonRpcResult, t as f$1, u as formatJsonRpcResult, v as decode, w as require_cjs$1, x as recoverAddress, y as encode, z as ee$2 } from "./index.es-74jGlhJO.js";
import { X as require_events, Y as detect, pn as __toESM, tt as __vitePreload } from "./index-cWPXYV96.js";
require_events();
var import_cjs$3 = require_cjs();
var import_cjs$4 = require_cjs$1();
var import_cjs$5 = require_cjs$2();
var import_blakejs = require_blakejs();
var Ae$2 = ":";
function Je(t) {
	const [e, n$1] = t.split(Ae$2);
	return {
		namespace: e,
		reference: n$1
	};
}
function ti(t, e = []) {
	const n$1 = [];
	return Object.keys(t).forEach((r$1) => {
		if (e.length && !e.includes(r$1)) return;
		const o$1 = t[r$1];
		n$1.push(...o$1.accounts);
	}), n$1;
}
function Se$2(t, e) {
	return t.includes(":") ? [t] : e.chains || [];
}
var ri$1 = Object.defineProperty, oi$1 = Object.defineProperties, si$1 = Object.getOwnPropertyDescriptors, ar$1 = Object.getOwnPropertySymbols, ii$1 = Object.prototype.hasOwnProperty, ci$1 = Object.prototype.propertyIsEnumerable, en$1 = (t, e, n$1) => e in t ? ri$1(t, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n$1
}) : t[e] = n$1, ur$1 = (t, e) => {
	for (var n$1 in e || (e = {})) ii$1.call(e, n$1) && en$1(t, n$1, e[n$1]);
	if (ar$1) for (var n$1 of ar$1(e)) ci$1.call(e, n$1) && en$1(t, n$1, e[n$1]);
	return t;
}, fi$1 = (t, e) => oi$1(t, si$1(e)), lr$1 = (t, e, n$1) => en$1(t, typeof e != "symbol" ? e + "" : e, n$1), et$3 = {
	reactNative: "react-native",
	node: "node",
	browser: "browser",
	unknown: "unknown"
};
function rn() {
	return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function It$1() {
	return !(0, import_cjs$4.getDocument)() && !!(0, import_cjs$4.getNavigator)() && navigator.product === "ReactNative";
}
function li() {
	return It$1() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "android";
}
function di() {
	return It$1() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "ios";
}
function Wt$1() {
	return !rn() && !!(0, import_cjs$4.getNavigator)() && !!(0, import_cjs$4.getDocument)();
}
function Vt$2() {
	return It$1() ? et$3.reactNative : rn() ? et$3.node : Wt$1() ? et$3.browser : et$3.unknown;
}
function hi() {
	var t;
	try {
		return It$1() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
	} catch {
		return;
	}
}
function gr$1(t, e) {
	const n$1 = new URLSearchParams(t);
	return Object.entries(e).sort(([r$1], [o$1]) => r$1.localeCompare(o$1)).forEach(([r$1, o$1]) => {
		o$1 != null && n$1.set(r$1, String(o$1));
	}), n$1.toString();
}
function pi(t) {
	var e, n$1;
	const r$1 = br();
	try {
		return t != null && t.url && r$1.url && new URL(t.url).host !== new URL(r$1.url).host && (console.warn(`The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${r$1.url}. This is probably unintended and can lead to issues.`), t.url = r$1.url), (e = t?.icons) != null && e.length && t.icons.length > 0 && (t.icons = t.icons.filter((o$1) => o$1 !== "")), fi$1(ur$1(ur$1({}, r$1), t), {
			url: t?.url || r$1.url,
			name: t?.name || r$1.name,
			description: t?.description || r$1.description,
			icons: (n$1 = t?.icons) != null && n$1.length && t.icons.length > 0 ? t.icons : r$1.icons
		});
	} catch (o$1) {
		return console.warn("Error populating app metadata", o$1), t || r$1;
	}
}
function br() {
	return (0, import_cjs$5.getWindowMetadata)() || {
		name: "",
		description: "",
		url: "",
		icons: [""]
	};
}
function yr$1() {
	if (Vt$2() === et$3.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
		const { OS: n$1, Version: r$1 } = global.Platform;
		return [n$1, r$1].join("-");
	}
	const t = detect();
	if (t === null) return "unknown";
	const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
	return t.type === "browser" ? [
		e,
		t.name,
		t.version
	].join("-") : [e, t.version].join("-");
}
function mr$1() {
	var t;
	const e = Vt$2();
	return e === et$3.browser ? [e, ((t = (0, import_cjs$4.getLocation)()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function wr(t, e, n$1) {
	const r$1 = yr$1(), o$1 = mr$1();
	return [
		[t, e].join("-"),
		["js", n$1].join("-"),
		r$1,
		o$1
	].join("/");
}
function bi({ protocol: t, version: e, relayUrl: n$1, sdkVersion: r$1, auth: o$1, projectId: s, useOnCloseEvent: i$2, bundleId: c$2, packageName: f$5 }) {
	const u$1 = n$1.split("?"), l$1 = {
		auth: o$1,
		ua: wr(t, e, r$1),
		projectId: s,
		useOnCloseEvent: i$2 || void 0,
		packageName: f$5 || void 0,
		bundleId: c$2 || void 0
	}, d$3 = gr$1(u$1[1] || "", l$1);
	return u$1[0] + "?" + d$3;
}
function At$2(t, e) {
	return t.filter((n$1) => e.includes(n$1)).length === t.length;
}
function vi(t) {
	return Object.fromEntries(t.entries());
}
function xi(t) {
	return new Map(Object.entries(t));
}
function Ai(t = import_cjs$3.FIVE_MINUTES, e) {
	const n$1 = (0, import_cjs$3.toMiliseconds)(t || import_cjs$3.FIVE_MINUTES);
	let r$1, o$1, s, i$2;
	return {
		resolve: (c$2) => {
			s && r$1 && (clearTimeout(s), r$1(c$2), i$2 = Promise.resolve(c$2));
		},
		reject: (c$2) => {
			s && o$1 && (clearTimeout(s), o$1(c$2));
		},
		done: () => new Promise((c$2, f$5) => {
			if (i$2) return c$2(i$2);
			s = setTimeout(() => {
				const u$1 = new Error(e);
				i$2 = Promise.reject(u$1), f$5(u$1);
			}, n$1), r$1 = c$2, o$1 = f$5;
		})
	};
}
function Si(t, e, n$1) {
	return new Promise(async (r$1, o$1) => {
		const s = setTimeout(() => o$1(new Error(n$1)), e);
		try {
			r$1(await t);
		} catch (i$2) {
			o$1(i$2);
		}
		clearTimeout(s);
	});
}
function on$1(t, e) {
	if (typeof e == "string" && e.startsWith(`${t}:`)) return e;
	if (t.toLowerCase() === "topic") {
		if (typeof e != "string") throw new Error("Value must be \"string\" for expirer target type: topic");
		return `topic:${e}`;
	} else if (t.toLowerCase() === "id") {
		if (typeof e != "number") throw new Error("Value must be \"number\" for expirer target type: id");
		return `id:${e}`;
	}
	throw new Error(`Unknown expirer target type: ${t}`);
}
function Oi(t) {
	return on$1("topic", t);
}
function Ni(t) {
	return on$1("id", t);
}
function Ui(t) {
	const [e, n$1] = t.split(":"), r$1 = {
		id: void 0,
		topic: void 0
	};
	if (e === "topic" && typeof n$1 == "string") r$1.topic = n$1;
	else if (e === "id" && Number.isInteger(Number(n$1))) r$1.id = Number(n$1);
	else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${n$1}`);
	return r$1;
}
function _i(t, e) {
	return (0, import_cjs$3.fromMiliseconds)((e || Date.now()) + (0, import_cjs$3.toMiliseconds)(t));
}
function Ri(t) {
	return Date.now() >= (0, import_cjs$3.toMiliseconds)(t);
}
function $i(t, e) {
	return `${t}${e ? `:${e}` : ""}`;
}
function ut(t = [], e = []) {
	return [...new Set([...t, ...e])];
}
async function Ti({ id: t, topic: e, wcDeepLink: n$1 }) {
	var r$1;
	try {
		if (!n$1) return;
		const s = (typeof n$1 == "string" ? JSON.parse(n$1) : n$1)?.href;
		if (typeof s != "string") return;
		const i$2 = Br$1(s, t, e), c$2 = Vt$2();
		if (c$2 === et$3.browser) {
			if (!((r$1 = (0, import_cjs$4.getDocument)()) != null && r$1.hasFocus())) {
				console.warn("Document does not have focus, skipping deeplink.");
				return;
			}
			Ir$1(i$2);
		} else c$2 === et$3.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(i$2);
	} catch (o$1) {
		console.error(o$1);
	}
}
function Br$1(t, e, n$1) {
	const r$1 = `requestId=${e}&sessionTopic=${n$1}`;
	t.endsWith("/") && (t = t.slice(0, -1));
	let o$1 = `${t}`;
	if (t.startsWith("https://t.me")) {
		const s = t.includes("?") ? "&startapp=" : "?startapp=";
		o$1 = `${o$1}${s}${Or$1(r$1, !0)}`;
	} else o$1 = `${o$1}/wc?${r$1}`;
	return o$1;
}
function Ir$1(t) {
	let e = "_self";
	Sr$1() ? e = "_top" : (Ar$1() || t.startsWith("https://") || t.startsWith("http://")) && (e = "_blank"), window.open(t, e, "noreferrer noopener");
}
async function Ci(t, e) {
	let n$1 = "";
	try {
		if (Wt$1() && (n$1 = localStorage.getItem(e), n$1)) return n$1;
		n$1 = await t.getItem(e);
	} catch (r$1) {
		console.error(r$1);
	}
	return n$1;
}
function ji$1(t, e) {
	if (!t.includes(e)) return null;
	const n$1 = t.split(/([&,?,=])/);
	return n$1[n$1.indexOf(e) + 2];
}
function Li() {
	return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
		const e = Math.random() * 16 | 0;
		return (t === "x" ? e : e & 3 | 8).toString(16);
	});
}
function ki() {
	return typeof process < "u" && {}.IS_VITEST === "true";
}
function Ar$1() {
	return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
}
function Sr$1() {
	try {
		return window.self !== window.top;
	} catch {
		return !1;
	}
}
function Or$1(t, e = !1) {
	const n$1 = Buffer.from(t).toString("base64");
	return e ? n$1.replace(/[=]/g, "") : n$1;
}
function cn$1(t) {
	return Buffer.from(t, "base64").toString("utf-8");
}
function Pi(t) {
	return new Promise((e) => setTimeout(e, t));
}
var Hi = class {
	constructor({ limit: e }) {
		lr$1(this, "limit"), lr$1(this, "set"), this.limit = e, this.set = /* @__PURE__ */ new Set();
	}
	add(e) {
		if (!this.set.has(e)) {
			if (this.set.size >= this.limit) {
				const n$1 = this.set.values().next().value;
				n$1 && this.set.delete(n$1);
			}
			this.set.add(e);
		}
	}
	has(e) {
		return this.set.has(e);
	}
};
var Ne = BigInt(2 ** 32 - 1), Nr$1 = BigInt(32);
function Ur$1(t, e = !1) {
	return e ? {
		h: Number(t & Ne),
		l: Number(t >> Nr$1 & Ne)
	} : {
		h: Number(t >> Nr$1 & Ne) | 0,
		l: Number(t & Ne) | 0
	};
}
function _r$1(t, e = !1) {
	const n$1 = t.length;
	let r$1 = new Uint32Array(n$1), o$1 = new Uint32Array(n$1);
	for (let s = 0; s < n$1; s++) {
		const { h: i$2, l: c$2 } = Ur$1(t[s], e);
		[r$1[s], o$1[s]] = [i$2, c$2];
	}
	return [r$1, o$1];
}
var Rr$1 = (t, e, n$1) => t >>> n$1, $r$1 = (t, e, n$1) => t << 32 - n$1 | e >>> n$1, St$3 = (t, e, n$1) => t >>> n$1 | e << 32 - n$1, Ot$2 = (t, e, n$1) => t << 32 - n$1 | e >>> n$1, de$1 = (t, e, n$1) => t << 64 - n$1 | e >>> n$1 - 32, he$2 = (t, e, n$1) => t >>> n$1 - 32 | e << 64 - n$1, Di$1 = (t, e) => e, Vi$1 = (t, e) => t, Mi$1 = (t, e, n$1) => t << n$1 | e >>> 32 - n$1, Ki$1 = (t, e, n$1) => e << n$1 | t >>> 32 - n$1, qi$1 = (t, e, n$1) => e << n$1 - 32 | t >>> 64 - n$1, Fi$1 = (t, e, n$1) => t << n$1 - 32 | e >>> 64 - n$1;
function dt$2(t, e, n$1, r$1) {
	const o$1 = (e >>> 0) + (r$1 >>> 0);
	return {
		h: t + n$1 + (o$1 / 2 ** 32 | 0) | 0,
		l: o$1 | 0
	};
}
var fn$1 = (t, e, n$1) => (t >>> 0) + (e >>> 0) + (n$1 >>> 0), an$1 = (t, e, n$1, r$1) => e + n$1 + r$1 + (t / 2 ** 32 | 0) | 0, Zi = (t, e, n$1, r$1) => (t >>> 0) + (e >>> 0) + (n$1 >>> 0) + (r$1 >>> 0), Gi$1 = (t, e, n$1, r$1, o$1) => e + n$1 + r$1 + o$1 + (t / 2 ** 32 | 0) | 0, zi$1 = (t, e, n$1, r$1, o$1) => (t >>> 0) + (e >>> 0) + (n$1 >>> 0) + (r$1 >>> 0) + (o$1 >>> 0), Yi$1 = (t, e, n$1, r$1, o$1, s) => e + n$1 + r$1 + o$1 + s + (t / 2 ** 32 | 0) | 0, Xt$2 = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
function Ue$4(t) {
	return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function mt$2(t) {
	if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function ht$1(t, ...e) {
	if (!Ue$4(t)) throw new Error("Uint8Array expected");
	if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function _e$2(t) {
	if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
	mt$2(t.outputLen), mt$2(t.blockLen);
}
function Nt$3(t, e = !0) {
	if (t.destroyed) throw new Error("Hash instance has been destroyed");
	if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function un$1(t, e) {
	ht$1(t);
	const n$1 = e.outputLen;
	if (t.length < n$1) throw new Error("digestInto() expects output buffer of length at least " + n$1);
}
function pe$1(t) {
	return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function lt$2(...t) {
	for (let e = 0; e < t.length; e++) t[e].fill(0);
}
function ln$1(t) {
	return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
function bt$1(t, e) {
	return t << 32 - e | t >>> e;
}
var Tr$1 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function Cr$1(t) {
	return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
}
var wt$2 = Tr$1 ? (t) => t : (t) => Cr$1(t);
function Wi$1(t) {
	for (let e = 0; e < t.length; e++) t[e] = Cr$1(t[e]);
	return t;
}
var Ut$2 = Tr$1 ? (t) => t : Wi$1, jr$1 = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", Xi = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Jt$2(t) {
	if (ht$1(t), jr$1) return t.toHex();
	let e = "";
	for (let n$1 = 0; n$1 < t.length; n$1++) e += Xi[t[n$1]];
	return e;
}
var vt$2 = {
	_0: 48,
	_9: 57,
	A: 65,
	F: 70,
	a: 97,
	f: 102
};
function Lr$1(t) {
	if (t >= vt$2._0 && t <= vt$2._9) return t - vt$2._0;
	if (t >= vt$2.A && t <= vt$2.F) return t - (vt$2.A - 10);
	if (t >= vt$2.a && t <= vt$2.f) return t - (vt$2.a - 10);
}
function Re$3(t) {
	if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
	if (jr$1) return Uint8Array.fromHex(t);
	const e = t.length, n$1 = e / 2;
	if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
	const r$1 = new Uint8Array(n$1);
	for (let o$1 = 0, s = 0; o$1 < n$1; o$1++, s += 2) {
		const i$2 = Lr$1(t.charCodeAt(s)), c$2 = Lr$1(t.charCodeAt(s + 1));
		if (i$2 === void 0 || c$2 === void 0) {
			const f$5 = t[s] + t[s + 1];
			throw new Error("hex string expected, got non-hex character \"" + f$5 + "\" at index " + s);
		}
		r$1[o$1] = i$2 * 16 + c$2;
	}
	return r$1;
}
function kr$1(t) {
	if (typeof t != "string") throw new Error("string expected");
	return new Uint8Array(new TextEncoder().encode(t));
}
function pt$2(t) {
	return typeof t == "string" && (t = kr$1(t)), ht$1(t), t;
}
function _t$2(...t) {
	let e = 0;
	for (let r$1 = 0; r$1 < t.length; r$1++) {
		const o$1 = t[r$1];
		ht$1(o$1), e += o$1.length;
	}
	const n$1 = new Uint8Array(e);
	for (let r$1 = 0, o$1 = 0; r$1 < t.length; r$1++) {
		const s = t[r$1];
		n$1.set(s, o$1), o$1 += s.length;
	}
	return n$1;
}
var $e$2 = class {};
function ge$2(t) {
	const e = (r$1) => t().update(pt$2(r$1)).digest(), n$1 = t();
	return e.outputLen = n$1.outputLen, e.blockLen = n$1.blockLen, e.create = () => t(), e;
}
function Ji(t) {
	const e = (r$1, o$1) => t(o$1).update(pt$2(r$1)).digest(), n$1 = t({});
	return e.outputLen = n$1.outputLen, e.blockLen = n$1.blockLen, e.create = (r$1) => t(r$1), e;
}
function Mt$2(t = 32) {
	if (Xt$2 && typeof Xt$2.getRandomValues == "function") return Xt$2.getRandomValues(new Uint8Array(t));
	if (Xt$2 && typeof Xt$2.randomBytes == "function") return Uint8Array.from(Xt$2.randomBytes(t));
	throw new Error("crypto.getRandomValues must be defined");
}
var Qi = BigInt(0), be$2 = BigInt(1), tc = BigInt(2), ec = BigInt(7), nc = BigInt(256), rc = BigInt(113), Pr$1 = [], Hr$1 = [], Dr$1 = [];
for (let t = 0, e = be$2, n$1 = 1, r$1 = 0; t < 24; t++) {
	[n$1, r$1] = [r$1, (2 * n$1 + 3 * r$1) % 5], Pr$1.push(2 * (5 * r$1 + n$1)), Hr$1.push((t + 1) * (t + 2) / 2 % 64);
	let o$1 = Qi;
	for (let s = 0; s < 7; s++) e = (e << be$2 ^ (e >> ec) * rc) % nc, e & tc && (o$1 ^= be$2 << (be$2 << BigInt(s)) - be$2);
	Dr$1.push(o$1);
}
var Vr$1 = _r$1(Dr$1, !0), oc = Vr$1[0], sc = Vr$1[1], Mr$1 = (t, e, n$1) => n$1 > 32 ? qi$1(t, e, n$1) : Mi$1(t, e, n$1), Kr$1 = (t, e, n$1) => n$1 > 32 ? Fi$1(t, e, n$1) : Ki$1(t, e, n$1);
function ic(t, e = 24) {
	const n$1 = new Uint32Array(10);
	for (let r$1 = 24 - e; r$1 < 24; r$1++) {
		for (let i$2 = 0; i$2 < 10; i$2++) n$1[i$2] = t[i$2] ^ t[i$2 + 10] ^ t[i$2 + 20] ^ t[i$2 + 30] ^ t[i$2 + 40];
		for (let i$2 = 0; i$2 < 10; i$2 += 2) {
			const c$2 = (i$2 + 8) % 10, f$5 = (i$2 + 2) % 10, u$1 = n$1[f$5], a$1 = n$1[f$5 + 1], l$1 = Mr$1(u$1, a$1, 1) ^ n$1[c$2], d$3 = Kr$1(u$1, a$1, 1) ^ n$1[c$2 + 1];
			for (let h$2 = 0; h$2 < 50; h$2 += 10) t[i$2 + h$2] ^= l$1, t[i$2 + h$2 + 1] ^= d$3;
		}
		let o$1 = t[2], s = t[3];
		for (let i$2 = 0; i$2 < 24; i$2++) {
			const c$2 = Hr$1[i$2], f$5 = Mr$1(o$1, s, c$2), u$1 = Kr$1(o$1, s, c$2), a$1 = Pr$1[i$2];
			o$1 = t[a$1], s = t[a$1 + 1], t[a$1] = f$5, t[a$1 + 1] = u$1;
		}
		for (let i$2 = 0; i$2 < 50; i$2 += 10) {
			for (let c$2 = 0; c$2 < 10; c$2++) n$1[c$2] = t[i$2 + c$2];
			for (let c$2 = 0; c$2 < 10; c$2++) t[i$2 + c$2] ^= ~n$1[(c$2 + 2) % 10] & n$1[(c$2 + 4) % 10];
		}
		t[0] ^= oc[r$1], t[1] ^= sc[r$1];
	}
	lt$2(n$1);
}
var Jn$1 = class Jn$1 extends $e$2 {
	constructor(e, n$1, r$1, o$1 = !1, s = 24) {
		if (super(), this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, this.enableXOF = !1, this.blockLen = e, this.suffix = n$1, this.outputLen = r$1, this.enableXOF = o$1, this.rounds = s, mt$2(r$1), !(0 < e && e < 200)) throw new Error("only keccak-f1600 function is supported");
		this.state = new Uint8Array(200), this.state32 = pe$1(this.state);
	}
	clone() {
		return this._cloneInto();
	}
	keccak() {
		Ut$2(this.state32), ic(this.state32, this.rounds), Ut$2(this.state32), this.posOut = 0, this.pos = 0;
	}
	update(e) {
		Nt$3(this), e = pt$2(e), ht$1(e);
		const { blockLen: n$1, state: r$1 } = this, o$1 = e.length;
		for (let s = 0; s < o$1;) {
			const i$2 = Math.min(n$1 - this.pos, o$1 - s);
			for (let c$2 = 0; c$2 < i$2; c$2++) r$1[this.pos++] ^= e[s++];
			this.pos === n$1 && this.keccak();
		}
		return this;
	}
	finish() {
		if (this.finished) return;
		this.finished = !0;
		const { state: e, suffix: n$1, pos: r$1, blockLen: o$1 } = this;
		e[r$1] ^= n$1, n$1 & 128 && r$1 === o$1 - 1 && this.keccak(), e[o$1 - 1] ^= 128, this.keccak();
	}
	writeInto(e) {
		Nt$3(this, !1), ht$1(e), this.finish();
		const n$1 = this.state, { blockLen: r$1 } = this;
		for (let o$1 = 0, s = e.length; o$1 < s;) {
			this.posOut >= r$1 && this.keccak();
			const i$2 = Math.min(r$1 - this.posOut, s - o$1);
			e.set(n$1.subarray(this.posOut, this.posOut + i$2), o$1), this.posOut += i$2, o$1 += i$2;
		}
		return e;
	}
	xofInto(e) {
		if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
		return this.writeInto(e);
	}
	xof(e) {
		return mt$2(e), this.xofInto(new Uint8Array(e));
	}
	digestInto(e) {
		if (un$1(e, this), this.finished) throw new Error("digest() was already called");
		return this.writeInto(e), this.destroy(), e;
	}
	digest() {
		return this.digestInto(new Uint8Array(this.outputLen));
	}
	destroy() {
		this.destroyed = !0, lt$2(this.state);
	}
	_cloneInto(e) {
		const { blockLen: n$1, suffix: r$1, outputLen: o$1, rounds: s, enableXOF: i$2 } = this;
		return e || (e = new Jn$1(n$1, r$1, o$1, i$2, s)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = s, e.suffix = r$1, e.outputLen = o$1, e.enableXOF = i$2, e.destroyed = this.destroyed, e;
	}
};
var cc = (t, e, n$1) => ge$2(() => new Jn$1(e, t, n$1)), fc = cc(1, 136, 256 / 8);
function ac(t, e, n$1, r$1) {
	if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, n$1, r$1);
	const o$1 = BigInt(32), s = BigInt(4294967295), i$2 = Number(n$1 >> o$1 & s), c$2 = Number(n$1 & s), f$5 = r$1 ? 4 : 0, u$1 = r$1 ? 0 : 4;
	t.setUint32(e + f$5, i$2, r$1), t.setUint32(e + u$1, c$2, r$1);
}
function uc(t, e, n$1) {
	return t & e ^ ~t & n$1;
}
function lc(t, e, n$1) {
	return t & e ^ t & n$1 ^ e & n$1;
}
var qr$1 = class extends $e$2 {
	constructor(e, n$1, r$1, o$1) {
		super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = e, this.outputLen = n$1, this.padOffset = r$1, this.isLE = o$1, this.buffer = new Uint8Array(e), this.view = ln$1(this.buffer);
	}
	update(e) {
		Nt$3(this), e = pt$2(e), ht$1(e);
		const { view: n$1, buffer: r$1, blockLen: o$1 } = this, s = e.length;
		for (let i$2 = 0; i$2 < s;) {
			const c$2 = Math.min(o$1 - this.pos, s - i$2);
			if (c$2 === o$1) {
				const f$5 = ln$1(e);
				for (; o$1 <= s - i$2; i$2 += o$1) this.process(f$5, i$2);
				continue;
			}
			r$1.set(e.subarray(i$2, i$2 + c$2), this.pos), this.pos += c$2, i$2 += c$2, this.pos === o$1 && (this.process(n$1, 0), this.pos = 0);
		}
		return this.length += e.length, this.roundClean(), this;
	}
	digestInto(e) {
		Nt$3(this), un$1(e, this), this.finished = !0;
		const { buffer: n$1, view: r$1, blockLen: o$1, isLE: s } = this;
		let { pos: i$2 } = this;
		n$1[i$2++] = 128, lt$2(this.buffer.subarray(i$2)), this.padOffset > o$1 - i$2 && (this.process(r$1, 0), i$2 = 0);
		for (let l$1 = i$2; l$1 < o$1; l$1++) n$1[l$1] = 0;
		ac(r$1, o$1 - 8, BigInt(this.length * 8), s), this.process(r$1, 0);
		const c$2 = ln$1(e), f$5 = this.outputLen;
		if (f$5 % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
		const u$1 = f$5 / 4, a$1 = this.get();
		if (u$1 > a$1.length) throw new Error("_sha2: outputLen bigger than state");
		for (let l$1 = 0; l$1 < u$1; l$1++) c$2.setUint32(4 * l$1, a$1[l$1], s);
	}
	digest() {
		const { buffer: e, outputLen: n$1 } = this;
		this.digestInto(e);
		const r$1 = e.slice(0, n$1);
		return this.destroy(), r$1;
	}
	_cloneInto(e) {
		e || (e = new this.constructor()), e.set(...this.get());
		const { blockLen: n$1, buffer: r$1, length: o$1, finished: s, destroyed: i$2, pos: c$2 } = this;
		return e.destroyed = i$2, e.finished = s, e.length = o$1, e.pos = c$2, o$1 % n$1 && e.buffer.set(r$1), e;
	}
	clone() {
		return this._cloneInto();
	}
};
var Rt$3 = Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), X$2 = Uint32Array.from([
	3418070365,
	3238371032,
	1654270250,
	914150663,
	2438529370,
	812702999,
	355462360,
	4144912697,
	1731405415,
	4290775857,
	2394180231,
	1750603025,
	3675008525,
	1694076839,
	1203062813,
	3204075428
]), J$4 = Uint32Array.from([
	1779033703,
	4089235720,
	3144134277,
	2227873595,
	1013904242,
	4271175723,
	2773480762,
	1595750129,
	1359893119,
	2917565137,
	2600822924,
	725511199,
	528734635,
	4215389547,
	1541459225,
	327033209
]), dc = Uint32Array.from([
	1116352408,
	1899447441,
	3049323471,
	3921009573,
	961987163,
	1508970993,
	2453635748,
	2870763221,
	3624381080,
	310598401,
	607225278,
	1426881987,
	1925078388,
	2162078206,
	2614888103,
	3248222580,
	3835390401,
	4022224774,
	264347078,
	604807628,
	770255983,
	1249150122,
	1555081692,
	1996064986,
	2554220882,
	2821834349,
	2952996808,
	3210313671,
	3336571891,
	3584528711,
	113926993,
	338241895,
	666307205,
	773529912,
	1294757372,
	1396182291,
	1695183700,
	1986661051,
	2177026350,
	2456956037,
	2730485921,
	2820302411,
	3259730800,
	3345764771,
	3516065817,
	3600352804,
	4094571909,
	275423344,
	430227734,
	506948616,
	659060556,
	883997877,
	958139571,
	1322822218,
	1537002063,
	1747873779,
	1955562222,
	2024104815,
	2227730452,
	2361852424,
	2428436474,
	2756734187,
	3204031479,
	3329325298
]), $t$2 = new Uint32Array(64);
var hc = class extends qr$1 {
	constructor(e = 32) {
		super(64, e, 8, !1), this.A = Rt$3[0] | 0, this.B = Rt$3[1] | 0, this.C = Rt$3[2] | 0, this.D = Rt$3[3] | 0, this.E = Rt$3[4] | 0, this.F = Rt$3[5] | 0, this.G = Rt$3[6] | 0, this.H = Rt$3[7] | 0;
	}
	get() {
		const { A: e, B: n$1, C: r$1, D: o$1, E: s, F: i$2, G: c$2, H: f$5 } = this;
		return [
			e,
			n$1,
			r$1,
			o$1,
			s,
			i$2,
			c$2,
			f$5
		];
	}
	set(e, n$1, r$1, o$1, s, i$2, c$2, f$5) {
		this.A = e | 0, this.B = n$1 | 0, this.C = r$1 | 0, this.D = o$1 | 0, this.E = s | 0, this.F = i$2 | 0, this.G = c$2 | 0, this.H = f$5 | 0;
	}
	process(e, n$1) {
		for (let l$1 = 0; l$1 < 16; l$1++, n$1 += 4) $t$2[l$1] = e.getUint32(n$1, !1);
		for (let l$1 = 16; l$1 < 64; l$1++) {
			const d$3 = $t$2[l$1 - 15], h$2 = $t$2[l$1 - 2], y$2 = bt$1(d$3, 7) ^ bt$1(d$3, 18) ^ d$3 >>> 3;
			$t$2[l$1] = (bt$1(h$2, 17) ^ bt$1(h$2, 19) ^ h$2 >>> 10) + $t$2[l$1 - 7] + y$2 + $t$2[l$1 - 16] | 0;
		}
		let { A: r$1, B: o$1, C: s, D: i$2, E: c$2, F: f$5, G: u$1, H: a$1 } = this;
		for (let l$1 = 0; l$1 < 64; l$1++) {
			const d$3 = bt$1(c$2, 6) ^ bt$1(c$2, 11) ^ bt$1(c$2, 25), h$2 = a$1 + d$3 + uc(c$2, f$5, u$1) + dc[l$1] + $t$2[l$1] | 0, m$2 = (bt$1(r$1, 2) ^ bt$1(r$1, 13) ^ bt$1(r$1, 22)) + lc(r$1, o$1, s) | 0;
			a$1 = u$1, u$1 = f$5, f$5 = c$2, c$2 = i$2 + h$2 | 0, i$2 = s, s = o$1, o$1 = r$1, r$1 = h$2 + m$2 | 0;
		}
		r$1 = r$1 + this.A | 0, o$1 = o$1 + this.B | 0, s = s + this.C | 0, i$2 = i$2 + this.D | 0, c$2 = c$2 + this.E | 0, f$5 = f$5 + this.F | 0, u$1 = u$1 + this.G | 0, a$1 = a$1 + this.H | 0, this.set(r$1, o$1, s, i$2, c$2, f$5, u$1, a$1);
	}
	roundClean() {
		lt$2($t$2);
	}
	destroy() {
		this.set(0, 0, 0, 0, 0, 0, 0, 0), lt$2(this.buffer);
	}
};
var Fr$1 = _r$1([
	"0x428a2f98d728ae22",
	"0x7137449123ef65cd",
	"0xb5c0fbcfec4d3b2f",
	"0xe9b5dba58189dbbc",
	"0x3956c25bf348b538",
	"0x59f111f1b605d019",
	"0x923f82a4af194f9b",
	"0xab1c5ed5da6d8118",
	"0xd807aa98a3030242",
	"0x12835b0145706fbe",
	"0x243185be4ee4b28c",
	"0x550c7dc3d5ffb4e2",
	"0x72be5d74f27b896f",
	"0x80deb1fe3b1696b1",
	"0x9bdc06a725c71235",
	"0xc19bf174cf692694",
	"0xe49b69c19ef14ad2",
	"0xefbe4786384f25e3",
	"0x0fc19dc68b8cd5b5",
	"0x240ca1cc77ac9c65",
	"0x2de92c6f592b0275",
	"0x4a7484aa6ea6e483",
	"0x5cb0a9dcbd41fbd4",
	"0x76f988da831153b5",
	"0x983e5152ee66dfab",
	"0xa831c66d2db43210",
	"0xb00327c898fb213f",
	"0xbf597fc7beef0ee4",
	"0xc6e00bf33da88fc2",
	"0xd5a79147930aa725",
	"0x06ca6351e003826f",
	"0x142929670a0e6e70",
	"0x27b70a8546d22ffc",
	"0x2e1b21385c26c926",
	"0x4d2c6dfc5ac42aed",
	"0x53380d139d95b3df",
	"0x650a73548baf63de",
	"0x766a0abb3c77b2a8",
	"0x81c2c92e47edaee6",
	"0x92722c851482353b",
	"0xa2bfe8a14cf10364",
	"0xa81a664bbc423001",
	"0xc24b8b70d0f89791",
	"0xc76c51a30654be30",
	"0xd192e819d6ef5218",
	"0xd69906245565a910",
	"0xf40e35855771202a",
	"0x106aa07032bbd1b8",
	"0x19a4c116b8d2d0c8",
	"0x1e376c085141ab53",
	"0x2748774cdf8eeb99",
	"0x34b0bcb5e19b48a8",
	"0x391c0cb3c5c95a63",
	"0x4ed8aa4ae3418acb",
	"0x5b9cca4f7763e373",
	"0x682e6ff3d6b2b8a3",
	"0x748f82ee5defb2fc",
	"0x78a5636f43172f60",
	"0x84c87814a1f0ab72",
	"0x8cc702081a6439ec",
	"0x90befffa23631e28",
	"0xa4506cebde82bde9",
	"0xbef9a3f7b2c67915",
	"0xc67178f2e372532b",
	"0xca273eceea26619c",
	"0xd186b8c721c0c207",
	"0xeada7dd6cde0eb1e",
	"0xf57d4f7fee6ed178",
	"0x06f067aa72176fba",
	"0x0a637dc5a2c898a6",
	"0x113f9804bef90dae",
	"0x1b710b35131c471b",
	"0x28db77f523047d84",
	"0x32caab7b40c72493",
	"0x3c9ebe0a15c9bebc",
	"0x431d67c49c100d4c",
	"0x4cc5d4becb3e42b6",
	"0x597f299cfc657e2a",
	"0x5fcb6fab3ad6faec",
	"0x6c44198c4a475817"
].map((t) => BigInt(t))), pc = Fr$1[0], gc = Fr$1[1], Tt$2 = new Uint32Array(80), Ct$2 = new Uint32Array(80);
var dn$1 = class extends qr$1 {
	constructor(e = 64) {
		super(128, e, 16, !1), this.Ah = J$4[0] | 0, this.Al = J$4[1] | 0, this.Bh = J$4[2] | 0, this.Bl = J$4[3] | 0, this.Ch = J$4[4] | 0, this.Cl = J$4[5] | 0, this.Dh = J$4[6] | 0, this.Dl = J$4[7] | 0, this.Eh = J$4[8] | 0, this.El = J$4[9] | 0, this.Fh = J$4[10] | 0, this.Fl = J$4[11] | 0, this.Gh = J$4[12] | 0, this.Gl = J$4[13] | 0, this.Hh = J$4[14] | 0, this.Hl = J$4[15] | 0;
	}
	get() {
		const { Ah: e, Al: n$1, Bh: r$1, Bl: o$1, Ch: s, Cl: i$2, Dh: c$2, Dl: f$5, Eh: u$1, El: a$1, Fh: l$1, Fl: d$3, Gh: h$2, Gl: y$2, Hh: m$2, Hl: w$2 } = this;
		return [
			e,
			n$1,
			r$1,
			o$1,
			s,
			i$2,
			c$2,
			f$5,
			u$1,
			a$1,
			l$1,
			d$3,
			h$2,
			y$2,
			m$2,
			w$2
		];
	}
	set(e, n$1, r$1, o$1, s, i$2, c$2, f$5, u$1, a$1, l$1, d$3, h$2, y$2, m$2, w$2) {
		this.Ah = e | 0, this.Al = n$1 | 0, this.Bh = r$1 | 0, this.Bl = o$1 | 0, this.Ch = s | 0, this.Cl = i$2 | 0, this.Dh = c$2 | 0, this.Dl = f$5 | 0, this.Eh = u$1 | 0, this.El = a$1 | 0, this.Fh = l$1 | 0, this.Fl = d$3 | 0, this.Gh = h$2 | 0, this.Gl = y$2 | 0, this.Hh = m$2 | 0, this.Hl = w$2 | 0;
	}
	process(e, n$1) {
		for (let R$3 = 0; R$3 < 16; R$3++, n$1 += 4) Tt$2[R$3] = e.getUint32(n$1), Ct$2[R$3] = e.getUint32(n$1 += 4);
		for (let R$3 = 16; R$3 < 80; R$3++) {
			const Z$1 = Tt$2[R$3 - 15] | 0, H$2 = Ct$2[R$3 - 15] | 0, j$4 = St$3(Z$1, H$2, 1) ^ St$3(Z$1, H$2, 8) ^ Rr$1(Z$1, H$2, 7), L$2 = Ot$2(Z$1, H$2, 1) ^ Ot$2(Z$1, H$2, 8) ^ $r$1(Z$1, H$2, 7), k$1 = Tt$2[R$3 - 2] | 0, O$2 = Ct$2[R$3 - 2] | 0, T$3 = St$3(k$1, O$2, 19) ^ de$1(k$1, O$2, 61) ^ Rr$1(k$1, O$2, 6), _$2 = Zi(L$2, Ot$2(k$1, O$2, 19) ^ he$2(k$1, O$2, 61) ^ $r$1(k$1, O$2, 6), Ct$2[R$3 - 7], Ct$2[R$3 - 16]);
			Tt$2[R$3] = Gi$1(_$2, j$4, T$3, Tt$2[R$3 - 7], Tt$2[R$3 - 16]) | 0, Ct$2[R$3] = _$2 | 0;
		}
		let { Ah: r$1, Al: o$1, Bh: s, Bl: i$2, Ch: c$2, Cl: f$5, Dh: u$1, Dl: a$1, Eh: l$1, El: d$3, Fh: h$2, Fl: y$2, Gh: m$2, Gl: w$2, Hh: U$3, Hl: F$2 } = this;
		for (let R$3 = 0; R$3 < 80; R$3++) {
			const Z$1 = St$3(l$1, d$3, 14) ^ St$3(l$1, d$3, 18) ^ de$1(l$1, d$3, 41), H$2 = Ot$2(l$1, d$3, 14) ^ Ot$2(l$1, d$3, 18) ^ he$2(l$1, d$3, 41), j$4 = l$1 & h$2 ^ ~l$1 & m$2, L$2 = d$3 & y$2 ^ ~d$3 & w$2, k$1 = zi$1(F$2, H$2, L$2, gc[R$3], Ct$2[R$3]), O$2 = Yi$1(k$1, U$3, Z$1, j$4, pc[R$3], Tt$2[R$3]), T$3 = k$1 | 0, C$4 = St$3(r$1, o$1, 28) ^ de$1(r$1, o$1, 34) ^ de$1(r$1, o$1, 39), _$2 = Ot$2(r$1, o$1, 28) ^ he$2(r$1, o$1, 34) ^ he$2(r$1, o$1, 39), p$3 = r$1 & s ^ r$1 & c$2 ^ s & c$2, b$4 = o$1 & i$2 ^ o$1 & f$5 ^ i$2 & f$5;
			U$3 = m$2 | 0, F$2 = w$2 | 0, m$2 = h$2 | 0, w$2 = y$2 | 0, h$2 = l$1 | 0, y$2 = d$3 | 0, {h: l$1, l: d$3} = dt$2(u$1 | 0, a$1 | 0, O$2 | 0, T$3 | 0), u$1 = c$2 | 0, a$1 = f$5 | 0, c$2 = s | 0, f$5 = i$2 | 0, s = r$1 | 0, i$2 = o$1 | 0;
			const g$1 = fn$1(T$3, _$2, b$4);
			r$1 = an$1(g$1, O$2, C$4, p$3), o$1 = g$1 | 0;
		}
		({h: r$1, l: o$1} = dt$2(this.Ah | 0, this.Al | 0, r$1 | 0, o$1 | 0)), {h: s, l: i$2} = dt$2(this.Bh | 0, this.Bl | 0, s | 0, i$2 | 0), {h: c$2, l: f$5} = dt$2(this.Ch | 0, this.Cl | 0, c$2 | 0, f$5 | 0), {h: u$1, l: a$1} = dt$2(this.Dh | 0, this.Dl | 0, u$1 | 0, a$1 | 0), {h: l$1, l: d$3} = dt$2(this.Eh | 0, this.El | 0, l$1 | 0, d$3 | 0), {h: h$2, l: y$2} = dt$2(this.Fh | 0, this.Fl | 0, h$2 | 0, y$2 | 0), {h: m$2, l: w$2} = dt$2(this.Gh | 0, this.Gl | 0, m$2 | 0, w$2 | 0), {h: U$3, l: F$2} = dt$2(this.Hh | 0, this.Hl | 0, U$3 | 0, F$2 | 0), this.set(r$1, o$1, s, i$2, c$2, f$5, u$1, a$1, l$1, d$3, h$2, y$2, m$2, w$2, U$3, F$2);
	}
	roundClean() {
		lt$2(Tt$2, Ct$2);
	}
	destroy() {
		lt$2(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	}
};
var bc = class extends dn$1 {
	constructor() {
		super(48), this.Ah = X$2[0] | 0, this.Al = X$2[1] | 0, this.Bh = X$2[2] | 0, this.Bl = X$2[3] | 0, this.Ch = X$2[4] | 0, this.Cl = X$2[5] | 0, this.Dh = X$2[6] | 0, this.Dl = X$2[7] | 0, this.Eh = X$2[8] | 0, this.El = X$2[9] | 0, this.Fh = X$2[10] | 0, this.Fl = X$2[11] | 0, this.Gh = X$2[12] | 0, this.Gl = X$2[13] | 0, this.Hh = X$2[14] | 0, this.Hl = X$2[15] | 0;
	}
};
var Q$2 = Uint32Array.from([
	573645204,
	4230739756,
	2673172387,
	3360449730,
	596883563,
	1867755857,
	2520282905,
	1497426621,
	2519219938,
	2827943907,
	3193839141,
	1401305490,
	721525244,
	746961066,
	246885852,
	2177182882
]);
var yc = class extends dn$1 {
	constructor() {
		super(32), this.Ah = Q$2[0] | 0, this.Al = Q$2[1] | 0, this.Bh = Q$2[2] | 0, this.Bl = Q$2[3] | 0, this.Ch = Q$2[4] | 0, this.Cl = Q$2[5] | 0, this.Dh = Q$2[6] | 0, this.Dl = Q$2[7] | 0, this.Eh = Q$2[8] | 0, this.El = Q$2[9] | 0, this.Fh = Q$2[10] | 0, this.Fl = Q$2[11] | 0, this.Gh = Q$2[12] | 0, this.Gl = Q$2[13] | 0, this.Hh = Q$2[14] | 0, this.Hl = Q$2[15] | 0;
	}
};
var Te$2 = ge$2(() => new hc()), mc = ge$2(() => new dn$1()), wc = ge$2(() => new bc()), vc = ge$2(() => new yc()), xc = Uint8Array.from([
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	14,
	10,
	4,
	8,
	9,
	15,
	13,
	6,
	1,
	12,
	0,
	2,
	11,
	7,
	5,
	3,
	11,
	8,
	12,
	0,
	5,
	2,
	15,
	13,
	10,
	14,
	3,
	6,
	7,
	1,
	9,
	4,
	7,
	9,
	3,
	1,
	13,
	12,
	11,
	14,
	2,
	6,
	5,
	10,
	4,
	0,
	15,
	8,
	9,
	0,
	5,
	7,
	2,
	4,
	10,
	15,
	14,
	1,
	11,
	12,
	6,
	8,
	3,
	13,
	2,
	12,
	6,
	10,
	0,
	11,
	8,
	3,
	4,
	13,
	7,
	5,
	15,
	14,
	1,
	9,
	12,
	5,
	1,
	15,
	14,
	13,
	4,
	10,
	0,
	7,
	6,
	3,
	9,
	2,
	8,
	11,
	13,
	11,
	7,
	14,
	12,
	1,
	3,
	9,
	5,
	0,
	15,
	4,
	8,
	6,
	2,
	10,
	6,
	15,
	14,
	9,
	11,
	3,
	0,
	8,
	12,
	2,
	13,
	7,
	1,
	4,
	10,
	5,
	10,
	2,
	8,
	4,
	7,
	6,
	1,
	5,
	15,
	11,
	9,
	14,
	3,
	12,
	13,
	0,
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	14,
	10,
	4,
	8,
	9,
	15,
	13,
	6,
	1,
	12,
	0,
	2,
	11,
	7,
	5,
	3,
	11,
	8,
	12,
	0,
	5,
	2,
	15,
	13,
	10,
	14,
	3,
	6,
	7,
	1,
	9,
	4,
	7,
	9,
	3,
	1,
	13,
	12,
	11,
	14,
	2,
	6,
	5,
	10,
	4,
	0,
	15,
	8,
	9,
	0,
	5,
	7,
	2,
	4,
	10,
	15,
	14,
	1,
	11,
	12,
	6,
	8,
	3,
	13,
	2,
	12,
	6,
	10,
	0,
	11,
	8,
	3,
	4,
	13,
	7,
	5,
	15,
	14,
	1,
	9
]), z$3 = Uint32Array.from([
	4089235720,
	1779033703,
	2227873595,
	3144134277,
	4271175723,
	1013904242,
	1595750129,
	2773480762,
	2917565137,
	1359893119,
	725511199,
	2600822924,
	4215389547,
	528734635,
	327033209,
	1541459225
]), S$3 = new Uint32Array(32);
function jt$2(t, e, n$1, r$1, o$1, s) {
	const i$2 = o$1[s], c$2 = o$1[s + 1];
	let f$5 = S$3[2 * t], u$1 = S$3[2 * t + 1], a$1 = S$3[2 * e], l$1 = S$3[2 * e + 1], d$3 = S$3[2 * n$1], h$2 = S$3[2 * n$1 + 1], y$2 = S$3[2 * r$1], m$2 = S$3[2 * r$1 + 1], w$2 = fn$1(f$5, a$1, i$2);
	u$1 = an$1(w$2, u$1, l$1, c$2), f$5 = w$2 | 0, {Dh: m$2, Dl: y$2} = {
		Dh: m$2 ^ u$1,
		Dl: y$2 ^ f$5
	}, {Dh: m$2, Dl: y$2} = {
		Dh: Di$1(m$2, y$2),
		Dl: Vi$1(m$2)
	}, {h: h$2, l: d$3} = dt$2(h$2, d$3, m$2, y$2), {Bh: l$1, Bl: a$1} = {
		Bh: l$1 ^ h$2,
		Bl: a$1 ^ d$3
	}, {Bh: l$1, Bl: a$1} = {
		Bh: St$3(l$1, a$1, 24),
		Bl: Ot$2(l$1, a$1, 24)
	}, S$3[2 * t] = f$5, S$3[2 * t + 1] = u$1, S$3[2 * e] = a$1, S$3[2 * e + 1] = l$1, S$3[2 * n$1] = d$3, S$3[2 * n$1 + 1] = h$2, S$3[2 * r$1] = y$2, S$3[2 * r$1 + 1] = m$2;
}
function Lt$2(t, e, n$1, r$1, o$1, s) {
	const i$2 = o$1[s], c$2 = o$1[s + 1];
	let f$5 = S$3[2 * t], u$1 = S$3[2 * t + 1], a$1 = S$3[2 * e], l$1 = S$3[2 * e + 1], d$3 = S$3[2 * n$1], h$2 = S$3[2 * n$1 + 1], y$2 = S$3[2 * r$1], m$2 = S$3[2 * r$1 + 1], w$2 = fn$1(f$5, a$1, i$2);
	u$1 = an$1(w$2, u$1, l$1, c$2), f$5 = w$2 | 0, {Dh: m$2, Dl: y$2} = {
		Dh: m$2 ^ u$1,
		Dl: y$2 ^ f$5
	}, {Dh: m$2, Dl: y$2} = {
		Dh: St$3(m$2, y$2, 16),
		Dl: Ot$2(m$2, y$2, 16)
	}, {h: h$2, l: d$3} = dt$2(h$2, d$3, m$2, y$2), {Bh: l$1, Bl: a$1} = {
		Bh: l$1 ^ h$2,
		Bl: a$1 ^ d$3
	}, {Bh: l$1, Bl: a$1} = {
		Bh: de$1(l$1, a$1, 63),
		Bl: he$2(l$1, a$1, 63)
	}, S$3[2 * t] = f$5, S$3[2 * t + 1] = u$1, S$3[2 * e] = a$1, S$3[2 * e + 1] = l$1, S$3[2 * n$1] = d$3, S$3[2 * n$1 + 1] = h$2, S$3[2 * r$1] = y$2, S$3[2 * r$1 + 1] = m$2;
}
function Ec(t, e = {}, n$1, r$1, o$1) {
	if (mt$2(n$1), t < 0 || t > n$1) throw new Error("outputLen bigger than keyLen");
	const { key: s, salt: i$2, personalization: c$2 } = e;
	if (s !== void 0 && (s.length < 1 || s.length > n$1)) throw new Error("key length must be undefined or 1.." + n$1);
	if (i$2 !== void 0 && i$2.length !== r$1) throw new Error("salt must be undefined or " + r$1);
	if (c$2 !== void 0 && c$2.length !== o$1) throw new Error("personalization must be undefined or " + o$1);
}
var Bc = class extends $e$2 {
	constructor(e, n$1) {
		super(), this.finished = !1, this.destroyed = !1, this.length = 0, this.pos = 0, mt$2(e), mt$2(n$1), this.blockLen = e, this.outputLen = n$1, this.buffer = new Uint8Array(e), this.buffer32 = pe$1(this.buffer);
	}
	update(e) {
		Nt$3(this), e = pt$2(e), ht$1(e);
		const { blockLen: n$1, buffer: r$1, buffer32: o$1 } = this, s = e.length, i$2 = e.byteOffset, c$2 = e.buffer;
		for (let f$5 = 0; f$5 < s;) {
			this.pos === n$1 && (Ut$2(o$1), this.compress(o$1, 0, !1), Ut$2(o$1), this.pos = 0);
			const u$1 = Math.min(n$1 - this.pos, s - f$5), a$1 = i$2 + f$5;
			if (u$1 === n$1 && !(a$1 % 4) && f$5 + u$1 < s) {
				const l$1 = new Uint32Array(c$2, a$1, Math.floor((s - f$5) / 4));
				Ut$2(l$1);
				for (let d$3 = 0; f$5 + n$1 < s; d$3 += o$1.length, f$5 += n$1) this.length += n$1, this.compress(l$1, d$3, !1);
				Ut$2(l$1);
				continue;
			}
			r$1.set(e.subarray(f$5, f$5 + u$1), this.pos), this.pos += u$1, this.length += u$1, f$5 += u$1;
		}
		return this;
	}
	digestInto(e) {
		Nt$3(this), un$1(e, this);
		const { pos: n$1, buffer32: r$1 } = this;
		this.finished = !0, lt$2(this.buffer.subarray(n$1)), Ut$2(r$1), this.compress(r$1, 0, !0), Ut$2(r$1);
		const o$1 = pe$1(e);
		this.get().forEach((s, i$2) => o$1[i$2] = wt$2(s));
	}
	digest() {
		const { buffer: e, outputLen: n$1 } = this;
		this.digestInto(e);
		const r$1 = e.slice(0, n$1);
		return this.destroy(), r$1;
	}
	_cloneInto(e) {
		const { buffer: n$1, length: r$1, finished: o$1, destroyed: s, outputLen: i$2, pos: c$2 } = this;
		return e || (e = new this.constructor({ dkLen: i$2 })), e.set(...this.get()), e.buffer.set(n$1), e.destroyed = s, e.finished = o$1, e.length = r$1, e.pos = c$2, e.outputLen = i$2, e;
	}
	clone() {
		return this._cloneInto();
	}
};
var Ic = class extends Bc {
	constructor(e = {}) {
		const n$1 = e.dkLen === void 0 ? 64 : e.dkLen;
		super(128, n$1), this.v0l = z$3[0] | 0, this.v0h = z$3[1] | 0, this.v1l = z$3[2] | 0, this.v1h = z$3[3] | 0, this.v2l = z$3[4] | 0, this.v2h = z$3[5] | 0, this.v3l = z$3[6] | 0, this.v3h = z$3[7] | 0, this.v4l = z$3[8] | 0, this.v4h = z$3[9] | 0, this.v5l = z$3[10] | 0, this.v5h = z$3[11] | 0, this.v6l = z$3[12] | 0, this.v6h = z$3[13] | 0, this.v7l = z$3[14] | 0, this.v7h = z$3[15] | 0, Ec(n$1, e, 64, 16, 16);
		let { key: r$1, personalization: o$1, salt: s } = e, i$2 = 0;
		if (r$1 !== void 0 && (r$1 = pt$2(r$1), i$2 = r$1.length), this.v0l ^= this.outputLen | i$2 << 8 | 16842752, s !== void 0) {
			s = pt$2(s);
			const c$2 = pe$1(s);
			this.v4l ^= wt$2(c$2[0]), this.v4h ^= wt$2(c$2[1]), this.v5l ^= wt$2(c$2[2]), this.v5h ^= wt$2(c$2[3]);
		}
		if (o$1 !== void 0) {
			o$1 = pt$2(o$1);
			const c$2 = pe$1(o$1);
			this.v6l ^= wt$2(c$2[0]), this.v6h ^= wt$2(c$2[1]), this.v7l ^= wt$2(c$2[2]), this.v7h ^= wt$2(c$2[3]);
		}
		if (r$1 !== void 0) {
			const c$2 = new Uint8Array(this.blockLen);
			c$2.set(r$1), this.update(c$2);
		}
	}
	get() {
		let { v0l: e, v0h: n$1, v1l: r$1, v1h: o$1, v2l: s, v2h: i$2, v3l: c$2, v3h: f$5, v4l: u$1, v4h: a$1, v5l: l$1, v5h: d$3, v6l: h$2, v6h: y$2, v7l: m$2, v7h: w$2 } = this;
		return [
			e,
			n$1,
			r$1,
			o$1,
			s,
			i$2,
			c$2,
			f$5,
			u$1,
			a$1,
			l$1,
			d$3,
			h$2,
			y$2,
			m$2,
			w$2
		];
	}
	set(e, n$1, r$1, o$1, s, i$2, c$2, f$5, u$1, a$1, l$1, d$3, h$2, y$2, m$2, w$2) {
		this.v0l = e | 0, this.v0h = n$1 | 0, this.v1l = r$1 | 0, this.v1h = o$1 | 0, this.v2l = s | 0, this.v2h = i$2 | 0, this.v3l = c$2 | 0, this.v3h = f$5 | 0, this.v4l = u$1 | 0, this.v4h = a$1 | 0, this.v5l = l$1 | 0, this.v5h = d$3 | 0, this.v6l = h$2 | 0, this.v6h = y$2 | 0, this.v7l = m$2 | 0, this.v7h = w$2 | 0;
	}
	compress(e, n$1, r$1) {
		this.get().forEach((f$5, u$1) => S$3[u$1] = f$5), S$3.set(z$3, 16);
		let { h: o$1, l: s } = Ur$1(BigInt(this.length));
		S$3[24] = z$3[8] ^ s, S$3[25] = z$3[9] ^ o$1, r$1 && (S$3[28] = ~S$3[28], S$3[29] = ~S$3[29]);
		let i$2 = 0;
		const c$2 = xc;
		for (let f$5 = 0; f$5 < 12; f$5++) jt$2(0, 4, 8, 12, e, n$1 + 2 * c$2[i$2++]), Lt$2(0, 4, 8, 12, e, n$1 + 2 * c$2[i$2++]), jt$2(1, 5, 9, 13, e, n$1 + 2 * c$2[i$2++]), Lt$2(1, 5, 9, 13, e, n$1 + 2 * c$2[i$2++]), jt$2(2, 6, 10, 14, e, n$1 + 2 * c$2[i$2++]), Lt$2(2, 6, 10, 14, e, n$1 + 2 * c$2[i$2++]), jt$2(3, 7, 11, 15, e, n$1 + 2 * c$2[i$2++]), Lt$2(3, 7, 11, 15, e, n$1 + 2 * c$2[i$2++]), jt$2(0, 5, 10, 15, e, n$1 + 2 * c$2[i$2++]), Lt$2(0, 5, 10, 15, e, n$1 + 2 * c$2[i$2++]), jt$2(1, 6, 11, 12, e, n$1 + 2 * c$2[i$2++]), Lt$2(1, 6, 11, 12, e, n$1 + 2 * c$2[i$2++]), jt$2(2, 7, 8, 13, e, n$1 + 2 * c$2[i$2++]), Lt$2(2, 7, 8, 13, e, n$1 + 2 * c$2[i$2++]), jt$2(3, 4, 9, 14, e, n$1 + 2 * c$2[i$2++]), Lt$2(3, 4, 9, 14, e, n$1 + 2 * c$2[i$2++]);
		this.v0l ^= S$3[0] ^ S$3[16], this.v0h ^= S$3[1] ^ S$3[17], this.v1l ^= S$3[2] ^ S$3[18], this.v1h ^= S$3[3] ^ S$3[19], this.v2l ^= S$3[4] ^ S$3[20], this.v2h ^= S$3[5] ^ S$3[21], this.v3l ^= S$3[6] ^ S$3[22], this.v3h ^= S$3[7] ^ S$3[23], this.v4l ^= S$3[8] ^ S$3[24], this.v4h ^= S$3[9] ^ S$3[25], this.v5l ^= S$3[10] ^ S$3[26], this.v5h ^= S$3[11] ^ S$3[27], this.v6l ^= S$3[12] ^ S$3[28], this.v6h ^= S$3[13] ^ S$3[29], this.v7l ^= S$3[14] ^ S$3[30], this.v7h ^= S$3[15] ^ S$3[31], lt$2(S$3);
	}
	destroy() {
		this.destroyed = !0, lt$2(this.buffer32), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	}
};
var Ac = Ji((t) => new Ic(t)), Sc = "https://rpc.walletconnect.org/v1";
function hn$1(t) {
	const e = `Ethereum Signed Message:
${t.length}`, n$1 = new TextEncoder().encode(e + t);
	return "0x" + Buffer.from(fc(n$1)).toString("hex");
}
async function Zr$1(t, e, n$1, r$1, o$1, s) {
	switch (n$1.t) {
		case "eip191": return await Gr$1(t, e, n$1.s);
		case "eip1271": return await zr$1(t, e, n$1.s, r$1, o$1, s);
		default: throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${n$1.t}`);
	}
}
function Gr$1(t, e, n$1) {
	const r$1 = fromHex(n$1);
	return recoverAddress({
		payload: hn$1(e),
		signature: r$1
	}).toLowerCase() === t.toLowerCase();
}
async function zr$1(t, e, n$1, r$1, o$1, s) {
	const i$2 = Je(r$1);
	if (!i$2.namespace || !i$2.reference) throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r$1}`);
	try {
		const c$2 = "0x1626ba7e", f$5 = "0000000000000000000000000000000000000000000000000000000000000040", u$1 = n$1.substring(2), a$1 = (u$1.length / 2).toString(16).padStart(64, "0"), d$3 = c$2 + (e.startsWith("0x") ? e : hn$1(e)).substring(2) + f$5 + a$1 + u$1, { result: y$2 } = await (await fetch(`${s || Sc}/?chainId=${r$1}&projectId=${o$1}`, {
			headers: { "Content-Type": "application/json" },
			method: "POST",
			body: JSON.stringify({
				id: Oc(),
				jsonrpc: "2.0",
				method: "eth_call",
				params: [{
					to: t,
					data: d$3
				}, "latest"]
			})
		})).json();
		return y$2 ? y$2.slice(0, 10).toLowerCase() === c$2.toLowerCase() : !1;
	} catch (c$2) {
		return console.error("isValidEip1271Signature: ", c$2), !1;
	}
}
function Oc() {
	return Date.now() + Math.floor(Math.random() * 1e3);
}
function Nc(t) {
	const e = atob(t), n$1 = new Uint8Array(e.length);
	for (let i$2 = 0; i$2 < e.length; i$2++) n$1[i$2] = e.charCodeAt(i$2);
	const r$1 = n$1[0];
	if (r$1 === 0) throw new Error("No signatures found");
	const o$1 = 1 + r$1 * 64;
	if (n$1.length < o$1) throw new Error("Transaction data too short for claimed signature count");
	if (n$1.length < 100) throw new Error("Transaction too short");
	const s = Buffer.from(t, "base64").slice(1, 65);
	return esm_default.encode(s);
}
function Uc(t) {
	const e = new Uint8Array(Buffer.from(t, "base64")), n$1 = Array.from("TransactionData::").map((s) => s.charCodeAt(0)), r$1 = new Uint8Array(n$1.length + e.length);
	r$1.set(n$1), r$1.set(e, n$1.length);
	const o$1 = Ac(r$1, { dkLen: 32 });
	return esm_default.encode(o$1);
}
function _c(t) {
	const e = new Uint8Array(Te$2(Yr$1(t)));
	return esm_default.encode(e);
}
function Yr$1(t) {
	if (t instanceof Uint8Array) return t;
	if (Array.isArray(t)) return new Uint8Array(t);
	if (typeof t == "object" && t != null && t.data) return new Uint8Array(Object.values(t.data));
	if (typeof t == "object" && t) return new Uint8Array(Object.values(t));
	throw new Error("getNearUint8ArrayFromBytes: Unexpected result type from bytes array");
}
function Rc(t) {
	const n$1 = decode(Buffer.from(t, "base64")).txn;
	if (!n$1) throw new Error("Invalid signed transaction: missing 'txn' field");
	const r$1 = encode(n$1), o$1 = Buffer.from("TX"), i$2 = vc(Buffer.concat([o$1, Buffer.from(r$1)]));
	return base32.encode(i$2).replace(/=+$/, "");
}
function pn$1(t) {
	const e = [];
	let n$1 = BigInt(t);
	for (; n$1 >= BigInt(128);) e.push(Number(n$1 & BigInt(127) | BigInt(128))), n$1 >>= BigInt(7);
	return e.push(Number(n$1)), Buffer.from(e);
}
function $c(t) {
	const e = Buffer.from(t.signed.bodyBytes, "base64"), n$1 = Buffer.from(t.signed.authInfoBytes, "base64"), r$1 = Buffer.from(t.signature.signature, "base64"), o$1 = [];
	o$1.push(Buffer.from([10])), o$1.push(pn$1(e.length)), o$1.push(e), o$1.push(Buffer.from([18])), o$1.push(pn$1(n$1.length)), o$1.push(n$1), o$1.push(Buffer.from([26])), o$1.push(pn$1(r$1.length)), o$1.push(r$1);
	const i$2 = Te$2(Buffer.concat(o$1));
	return Buffer.from(i$2).toString("hex").toUpperCase();
}
function Tc(t) {
	var e, n$1;
	const r$1 = [];
	try {
		if (typeof t == "string") return r$1.push(t), r$1;
		if (typeof t != "object") return r$1;
		t != null && t.id && r$1.push(t.id);
		const o$1 = (n$1 = (e = t?.capabilities) == null ? void 0 : e.caip345) == null ? void 0 : n$1.transactionHashes;
		o$1 && r$1.push(...o$1);
	} catch (o$1) {
		console.warn("getWalletSendCallsHashes failed: ", o$1);
	}
	return r$1;
}
var Cc = Object.defineProperty, jc = Object.defineProperties, Lc = Object.getOwnPropertyDescriptors, Wr$1 = Object.getOwnPropertySymbols, kc = Object.prototype.hasOwnProperty, Pc = Object.prototype.propertyIsEnumerable, Xr$1 = (t, e, n$1) => e in t ? Cc(t, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n$1
}) : t[e] = n$1, gn$1 = (t, e) => {
	for (var n$1 in e || (e = {})) kc.call(e, n$1) && Xr$1(t, n$1, e[n$1]);
	if (Wr$1) for (var n$1 of Wr$1(e)) Pc.call(e, n$1) && Xr$1(t, n$1, e[n$1]);
	return t;
}, Jr$1 = (t, e) => jc(t, Lc(e));
var Qr$1 = "did:pkh:", Hc = {
	eip155: "Ethereum",
	solana: "Solana",
	bip122: "Bitcoin"
}, Dc = (t) => t ? Hc[t] || t : "", ye$2 = (t) => t?.split(":"), to$1 = (t) => {
	const e = t && ye$2(t);
	if (e) return t.includes(Qr$1) ? e[3] : e[1];
}, eo$1 = (t) => {
	const e = t && ye$2(t);
	if (e) return t.includes(Qr$1) ? e[2] : e[0];
}, no = (t) => {
	const e = t && ye$2(t);
	if (e) return e[2] + ":" + e[3];
}, bn = (t) => {
	const e = t && ye$2(t);
	if (e) return e.pop();
};
async function Vc(t) {
	const { cacao: e, projectId: n$1 } = t, { s: r$1, p: o$1 } = e, s = ro(o$1, o$1.iss);
	return await Zr$1(bn(o$1.iss), s, r$1, no(o$1.iss), n$1);
}
var ro = (t, e) => {
	const n$1 = eo$1(e);
	if (!n$1) throw new Error("Invalid issuer: " + e);
	const r$1 = `${t.domain} wants you to sign in with your ${Dc(n$1)} account:`, o$1 = bn(e);
	if (!t.aud && !t.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
	let s = t.statement || void 0;
	const i$2 = `URI: ${t.aud || t.uri}`, c$2 = `Version: ${t.version}`, f$5 = `Chain ID: ${to$1(e)}`, u$1 = `Nonce: ${t.nonce}`, a$1 = `Issued At: ${t.iat}`, l$1 = t.exp ? `Expiration Time: ${t.exp}` : void 0, d$3 = t.nbf ? `Not Before: ${t.nbf}` : void 0, h$2 = t.requestId ? `Request ID: ${t.requestId}` : void 0, y$2 = t.resources ? `Resources:${t.resources.map((w$2) => `
- ${w$2}`).join("")}` : void 0, m$2 = je$1(t.resources);
	if (m$2) {
		const w$2 = kt$2(m$2);
		s = wn$1(s, w$2);
	}
	return [
		r$1,
		o$1,
		"",
		s,
		"",
		i$2,
		c$2,
		f$5,
		u$1,
		a$1,
		l$1,
		d$3,
		h$2,
		y$2
	].filter((w$2) => w$2 != null).join(`
`);
};
function co$1(t) {
	return Buffer.from(JSON.stringify(t)).toString("base64");
}
function fo$1(t) {
	return JSON.parse(Buffer.from(t, "base64").toString("utf-8"));
}
function yt$2(t) {
	if (!t) throw new Error("No recap provided, value is undefined");
	if (!t.att) throw new Error("No `att` property found");
	const e = Object.keys(t.att);
	if (!(e != null && e.length)) throw new Error("No resources found in `att` property");
	e.forEach((n$1) => {
		const r$1 = t.att[n$1];
		if (Array.isArray(r$1)) throw new Error(`Resource must be an object: ${n$1}`);
		if (typeof r$1 != "object") throw new Error(`Resource must be an object: ${n$1}`);
		if (!Object.keys(r$1).length) throw new Error(`Resource object is empty: ${n$1}`);
		Object.keys(r$1).forEach((o$1) => {
			const s = r$1[o$1];
			if (!Array.isArray(s)) throw new Error(`Ability limits ${o$1} must be an array of objects, found: ${s}`);
			if (!s.length) throw new Error(`Value of ${o$1} is empty array, must be an array with objects`);
			s.forEach((i$2) => {
				if (typeof i$2 != "object") throw new Error(`Ability limits (${o$1}) must be an array of objects, found: ${i$2}`);
			});
		});
	});
}
function ao$1(t, e, n$1, r$1 = {}) {
	return n$1?.sort((o$1, s) => o$1.localeCompare(s)), { att: { [t]: yn$1(e, n$1, r$1) } };
}
function yn$1(t, e, n$1 = {}) {
	e = e?.sort((o$1, s) => o$1.localeCompare(s));
	const r$1 = e.map((o$1) => ({ [`${t}/${o$1}`]: [n$1] }));
	return Object.assign({}, ...r$1);
}
function Ce$1(t) {
	return yt$2(t), `urn:recap:${co$1(t).replace(/=/g, "")}`;
}
function kt$2(t) {
	const e = fo$1(t.replace("urn:recap:", ""));
	return yt$2(e), e;
}
function Zc(t, e, n$1) {
	return Ce$1(ao$1(t, e, n$1));
}
function mn$1(t) {
	return t && t.includes("urn:recap:");
}
function Gc(t, e) {
	return Ce$1(lo$1(kt$2(t), kt$2(e)));
}
function lo$1(t, e) {
	yt$2(t), yt$2(e);
	const n$1 = Object.keys(t.att).concat(Object.keys(e.att)).sort((o$1, s) => o$1.localeCompare(s)), r$1 = { att: {} };
	return n$1.forEach((o$1) => {
		var s, i$2;
		Object.keys(((s = t.att) == null ? void 0 : s[o$1]) || {}).concat(Object.keys(((i$2 = e.att) == null ? void 0 : i$2[o$1]) || {})).sort((c$2, f$5) => c$2.localeCompare(f$5)).forEach((c$2) => {
			var f$5, u$1;
			r$1.att[o$1] = Jr$1(gn$1({}, r$1.att[o$1]), { [c$2]: ((f$5 = t.att[o$1]) == null ? void 0 : f$5[c$2]) || ((u$1 = e.att[o$1]) == null ? void 0 : u$1[c$2]) });
		});
	}), r$1;
}
function wn$1(t = "", e) {
	yt$2(e);
	const n$1 = "I further authorize the stated URI to perform the following actions on my behalf: ";
	if (t.includes(n$1)) return t;
	const r$1 = [];
	let o$1 = 0;
	Object.keys(e.att).forEach((c$2) => {
		const f$5 = Object.keys(e.att[c$2]).map((l$1) => ({
			ability: l$1.split("/")[0],
			action: l$1.split("/")[1]
		}));
		f$5.sort((l$1, d$3) => l$1.action.localeCompare(d$3.action));
		const u$1 = {};
		f$5.forEach((l$1) => {
			u$1[l$1.ability] || (u$1[l$1.ability] = []), u$1[l$1.ability].push(l$1.action);
		});
		const a$1 = Object.keys(u$1).map((l$1) => (o$1++, `(${o$1}) '${l$1}': '${u$1[l$1].join("', '")}' for '${c$2}'.`));
		r$1.push(a$1.join(", ").replace(".,", "."));
	});
	const i$2 = `${n$1}${r$1.join(" ")}`;
	return `${t ? t + " " : ""}${i$2}`;
}
function zc(t) {
	var e;
	const n$1 = kt$2(t);
	yt$2(n$1);
	const r$1 = (e = n$1.att) == null ? void 0 : e.eip155;
	return r$1 ? Object.keys(r$1).map((o$1) => o$1.split("/")[1]) : [];
}
function Yc(t) {
	const e = kt$2(t);
	yt$2(e);
	const n$1 = [];
	return Object.values(e.att).forEach((r$1) => {
		Object.values(r$1).forEach((o$1) => {
			var s;
			(s = o$1?.[0]) != null && s.chains && n$1.push(o$1[0].chains);
		});
	}), [...new Set(n$1.flat())];
}
function je$1(t) {
	if (!t) return;
	const e = t?.[t.length - 1];
	return mn$1(e) ? e : void 0;
}
function po$1(t) {
	return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function vn(t) {
	if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
}
function xn$1(t) {
	if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function ot$1(t, ...e) {
	if (!po$1(t)) throw new Error("Uint8Array expected");
	if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function go$1(t, e = !0) {
	if (t.destroyed) throw new Error("Hash instance has been destroyed");
	if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function Wc(t, e) {
	ot$1(t);
	const n$1 = e.outputLen;
	if (t.length < n$1) throw new Error("digestInto() expects output buffer of length at least " + n$1);
}
function Pt$3(t) {
	return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function Qt$2(...t) {
	for (let e = 0; e < t.length; e++) t[e].fill(0);
}
function Xc(t) {
	return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
var Jc = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function Qc(t) {
	if (typeof t != "string") throw new Error("string expected");
	return new Uint8Array(new TextEncoder().encode(t));
}
function En$1(t) {
	if (typeof t == "string") t = Qc(t);
	else if (po$1(t)) t = Bn$1(t);
	else throw new Error("Uint8Array expected, got " + typeof t);
	return t;
}
function tf(t, e) {
	if (e == null || typeof e != "object") throw new Error("options must be defined");
	return Object.assign(t, e);
}
function ef(t, e) {
	if (t.length !== e.length) return !1;
	let n$1 = 0;
	for (let r$1 = 0; r$1 < t.length; r$1++) n$1 |= t[r$1] ^ e[r$1];
	return n$1 === 0;
}
var nf = (t, e) => {
	function n$1(r$1, ...o$1) {
		if (ot$1(r$1), !Jc) throw new Error("Non little-endian hardware is not yet supported");
		if (t.nonceLength !== void 0) {
			const a$1 = o$1[0];
			if (!a$1) throw new Error("nonce / iv required");
			t.varSizeNonce ? ot$1(a$1) : ot$1(a$1, t.nonceLength);
		}
		const s = t.tagLength;
		s && o$1[1] !== void 0 && ot$1(o$1[1]);
		const i$2 = e(r$1, ...o$1), c$2 = (a$1, l$1) => {
			if (l$1 !== void 0) {
				if (a$1 !== 2) throw new Error("cipher output not supported");
				ot$1(l$1);
			}
		};
		let f$5 = !1;
		return {
			encrypt(a$1, l$1) {
				if (f$5) throw new Error("cannot encrypt() twice with same key + nonce");
				return f$5 = !0, ot$1(a$1), c$2(i$2.encrypt.length, l$1), i$2.encrypt(a$1, l$1);
			},
			decrypt(a$1, l$1) {
				if (ot$1(a$1), s && a$1.length < s) throw new Error("invalid ciphertext length: smaller than tagLength=" + s);
				return c$2(i$2.decrypt.length, l$1), i$2.decrypt(a$1, l$1);
			}
		};
	}
	return Object.assign(n$1, t), n$1;
};
function bo$1(t, e, n$1 = !0) {
	if (e === void 0) return new Uint8Array(t);
	if (e.length !== t) throw new Error("invalid output length, expected " + t + ", got: " + e.length);
	if (n$1 && !of(e)) throw new Error("invalid output, must be aligned");
	return e;
}
function yo$1(t, e, n$1, r$1) {
	if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, n$1, r$1);
	const o$1 = BigInt(32), s = BigInt(4294967295), i$2 = Number(n$1 >> o$1 & s), c$2 = Number(n$1 & s), f$5 = r$1 ? 4 : 0, u$1 = r$1 ? 0 : 4;
	t.setUint32(e + f$5, i$2, r$1), t.setUint32(e + u$1, c$2, r$1);
}
function rf(t, e, n$1) {
	vn(n$1);
	const r$1 = new Uint8Array(16), o$1 = Xc(r$1);
	return yo$1(o$1, 0, BigInt(e), n$1), yo$1(o$1, 8, BigInt(t), n$1), r$1;
}
function of(t) {
	return t.byteOffset % 4 === 0;
}
function Bn$1(t) {
	return Uint8Array.from(t);
}
var mo$1 = (t) => Uint8Array.from(t.split("").map((e) => e.charCodeAt(0))), sf = mo$1("expand 16-byte k"), cf = mo$1("expand 32-byte k"), ff = Pt$3(sf), af = Pt$3(cf);
function K$4(t, e) {
	return t << e | t >>> 32 - e;
}
function In$1(t) {
	return t.byteOffset % 4 === 0;
}
var Le$2 = 64, uf = 16, wo$1 = 2 ** 32 - 1, vo$1 = new Uint32Array();
function lf(t, e, n$1, r$1, o$1, s, i$2, c$2) {
	const f$5 = o$1.length, u$1 = new Uint8Array(Le$2), a$1 = Pt$3(u$1), l$1 = In$1(o$1) && In$1(s), d$3 = l$1 ? Pt$3(o$1) : vo$1, h$2 = l$1 ? Pt$3(s) : vo$1;
	for (let y$2 = 0; y$2 < f$5; i$2++) {
		if (t(e, n$1, r$1, a$1, i$2, c$2), i$2 >= wo$1) throw new Error("arx: counter overflow");
		const m$2 = Math.min(Le$2, f$5 - y$2);
		if (l$1 && m$2 === Le$2) {
			const w$2 = y$2 / 4;
			if (y$2 % 4 !== 0) throw new Error("arx: invalid block position");
			for (let U$3 = 0, F$2; U$3 < uf; U$3++) F$2 = w$2 + U$3, h$2[F$2] = d$3[F$2] ^ a$1[U$3];
			y$2 += Le$2;
			continue;
		}
		for (let w$2 = 0, U$3; w$2 < m$2; w$2++) U$3 = y$2 + w$2, s[U$3] = o$1[U$3] ^ u$1[w$2];
		y$2 += m$2;
	}
}
function df(t, e) {
	const { allowShortKeys: n$1, extendNonceFn: r$1, counterLength: o$1, counterRight: s, rounds: i$2 } = tf({
		allowShortKeys: !1,
		counterLength: 8,
		counterRight: !1,
		rounds: 20
	}, e);
	if (typeof t != "function") throw new Error("core must be a function");
	return xn$1(o$1), xn$1(i$2), vn(s), vn(n$1), (c$2, f$5, u$1, a$1, l$1 = 0) => {
		ot$1(c$2), ot$1(f$5), ot$1(u$1);
		const d$3 = u$1.length;
		if (a$1 === void 0 && (a$1 = new Uint8Array(d$3)), ot$1(a$1), xn$1(l$1), l$1 < 0 || l$1 >= wo$1) throw new Error("arx: counter overflow");
		if (a$1.length < d$3) throw new Error(`arx: output (${a$1.length}) is shorter than data (${d$3})`);
		const h$2 = [];
		let y$2 = c$2.length, m$2, w$2;
		if (y$2 === 32) h$2.push(m$2 = Bn$1(c$2)), w$2 = af;
		else if (y$2 === 16 && n$1) m$2 = new Uint8Array(32), m$2.set(c$2), m$2.set(c$2, 16), w$2 = ff, h$2.push(m$2);
		else throw new Error(`arx: invalid 32-byte key, got length=${y$2}`);
		In$1(f$5) || h$2.push(f$5 = Bn$1(f$5));
		const U$3 = Pt$3(m$2);
		if (r$1) {
			if (f$5.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
			r$1(w$2, U$3, Pt$3(f$5.subarray(0, 16)), U$3), f$5 = f$5.subarray(16);
		}
		const F$2 = 16 - o$1;
		if (F$2 !== f$5.length) throw new Error(`arx: nonce must be ${F$2} or 16 bytes`);
		if (F$2 !== 12) {
			const Z$1 = new Uint8Array(12);
			Z$1.set(f$5, s ? 0 : 12 - f$5.length), f$5 = Z$1, h$2.push(f$5);
		}
		const R$3 = Pt$3(f$5);
		return lf(t, w$2, U$3, R$3, u$1, a$1, l$1, i$2), Qt$2(...h$2), a$1;
	};
}
var W$3 = (t, e) => t[e++] & 255 | (t[e++] & 255) << 8;
var hf = class {
	constructor(e) {
		this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = !1, e = En$1(e), ot$1(e, 32);
		const n$1 = W$3(e, 0), r$1 = W$3(e, 2), o$1 = W$3(e, 4), s = W$3(e, 6), i$2 = W$3(e, 8), c$2 = W$3(e, 10), f$5 = W$3(e, 12), u$1 = W$3(e, 14);
		this.r[0] = n$1 & 8191, this.r[1] = (n$1 >>> 13 | r$1 << 3) & 8191, this.r[2] = (r$1 >>> 10 | o$1 << 6) & 7939, this.r[3] = (o$1 >>> 7 | s << 9) & 8191, this.r[4] = (s >>> 4 | i$2 << 12) & 255, this.r[5] = i$2 >>> 1 & 8190, this.r[6] = (i$2 >>> 14 | c$2 << 2) & 8191, this.r[7] = (c$2 >>> 11 | f$5 << 5) & 8065, this.r[8] = (f$5 >>> 8 | u$1 << 8) & 8191, this.r[9] = u$1 >>> 5 & 127;
		for (let a$1 = 0; a$1 < 8; a$1++) this.pad[a$1] = W$3(e, 16 + 2 * a$1);
	}
	process(e, n$1, r$1 = !1) {
		const o$1 = r$1 ? 0 : 2048, { h: s, r: i$2 } = this, c$2 = i$2[0], f$5 = i$2[1], u$1 = i$2[2], a$1 = i$2[3], l$1 = i$2[4], d$3 = i$2[5], h$2 = i$2[6], y$2 = i$2[7], m$2 = i$2[8], w$2 = i$2[9], U$3 = W$3(e, n$1 + 0), F$2 = W$3(e, n$1 + 2), R$3 = W$3(e, n$1 + 4), Z$1 = W$3(e, n$1 + 6), H$2 = W$3(e, n$1 + 8), j$4 = W$3(e, n$1 + 10), L$2 = W$3(e, n$1 + 12), k$1 = W$3(e, n$1 + 14);
		let O$2 = s[0] + (U$3 & 8191), T$3 = s[1] + ((U$3 >>> 13 | F$2 << 3) & 8191), C$4 = s[2] + ((F$2 >>> 10 | R$3 << 6) & 8191), _$2 = s[3] + ((R$3 >>> 7 | Z$1 << 9) & 8191), p$3 = s[4] + ((Z$1 >>> 4 | H$2 << 12) & 8191), b$4 = s[5] + (H$2 >>> 1 & 8191), g$1 = s[6] + ((H$2 >>> 14 | j$4 << 2) & 8191), x$2 = s[7] + ((j$4 >>> 11 | L$2 << 5) & 8191), E$3 = s[8] + ((L$2 >>> 8 | k$1 << 8) & 8191), I$2 = s[9] + (k$1 >>> 5 | o$1), v$4 = 0, B$2 = v$4 + O$2 * c$2 + T$3 * (5 * w$2) + C$4 * (5 * m$2) + _$2 * (5 * y$2) + p$3 * (5 * h$2);
		v$4 = B$2 >>> 13, B$2 &= 8191, B$2 += b$4 * (5 * d$3) + g$1 * (5 * l$1) + x$2 * (5 * a$1) + E$3 * (5 * u$1) + I$2 * (5 * f$5), v$4 += B$2 >>> 13, B$2 &= 8191;
		let A$3 = v$4 + O$2 * f$5 + T$3 * c$2 + C$4 * (5 * w$2) + _$2 * (5 * m$2) + p$3 * (5 * y$2);
		v$4 = A$3 >>> 13, A$3 &= 8191, A$3 += b$4 * (5 * h$2) + g$1 * (5 * d$3) + x$2 * (5 * l$1) + E$3 * (5 * a$1) + I$2 * (5 * u$1), v$4 += A$3 >>> 13, A$3 &= 8191;
		let N$3 = v$4 + O$2 * u$1 + T$3 * f$5 + C$4 * c$2 + _$2 * (5 * w$2) + p$3 * (5 * m$2);
		v$4 = N$3 >>> 13, N$3 &= 8191, N$3 += b$4 * (5 * y$2) + g$1 * (5 * h$2) + x$2 * (5 * d$3) + E$3 * (5 * l$1) + I$2 * (5 * a$1), v$4 += N$3 >>> 13, N$3 &= 8191;
		let D$1 = v$4 + O$2 * a$1 + T$3 * u$1 + C$4 * f$5 + _$2 * c$2 + p$3 * (5 * w$2);
		v$4 = D$1 >>> 13, D$1 &= 8191, D$1 += b$4 * (5 * m$2) + g$1 * (5 * y$2) + x$2 * (5 * h$2) + E$3 * (5 * d$3) + I$2 * (5 * l$1), v$4 += D$1 >>> 13, D$1 &= 8191;
		let P$3 = v$4 + O$2 * l$1 + T$3 * a$1 + C$4 * u$1 + _$2 * f$5 + p$3 * c$2;
		v$4 = P$3 >>> 13, P$3 &= 8191, P$3 += b$4 * (5 * w$2) + g$1 * (5 * m$2) + x$2 * (5 * y$2) + E$3 * (5 * h$2) + I$2 * (5 * d$3), v$4 += P$3 >>> 13, P$3 &= 8191;
		let $$2 = v$4 + O$2 * d$3 + T$3 * l$1 + C$4 * a$1 + _$2 * u$1 + p$3 * f$5;
		v$4 = $$2 >>> 13, $$2 &= 8191, $$2 += b$4 * c$2 + g$1 * (5 * w$2) + x$2 * (5 * m$2) + E$3 * (5 * y$2) + I$2 * (5 * h$2), v$4 += $$2 >>> 13, $$2 &= 8191;
		let V$3 = v$4 + O$2 * h$2 + T$3 * d$3 + C$4 * l$1 + _$2 * a$1 + p$3 * u$1;
		v$4 = V$3 >>> 13, V$3 &= 8191, V$3 += b$4 * f$5 + g$1 * c$2 + x$2 * (5 * w$2) + E$3 * (5 * m$2) + I$2 * (5 * y$2), v$4 += V$3 >>> 13, V$3 &= 8191;
		let q$2 = v$4 + O$2 * y$2 + T$3 * h$2 + C$4 * d$3 + _$2 * l$1 + p$3 * a$1;
		v$4 = q$2 >>> 13, q$2 &= 8191, q$2 += b$4 * u$1 + g$1 * f$5 + x$2 * c$2 + E$3 * (5 * w$2) + I$2 * (5 * m$2), v$4 += q$2 >>> 13, q$2 &= 8191;
		let G$3 = v$4 + O$2 * m$2 + T$3 * y$2 + C$4 * h$2 + _$2 * d$3 + p$3 * l$1;
		v$4 = G$3 >>> 13, G$3 &= 8191, G$3 += b$4 * a$1 + g$1 * u$1 + x$2 * f$5 + E$3 * c$2 + I$2 * (5 * w$2), v$4 += G$3 >>> 13, G$3 &= 8191;
		let M$4 = v$4 + O$2 * w$2 + T$3 * m$2 + C$4 * y$2 + _$2 * h$2 + p$3 * d$3;
		v$4 = M$4 >>> 13, M$4 &= 8191, M$4 += b$4 * l$1 + g$1 * a$1 + x$2 * u$1 + E$3 * f$5 + I$2 * c$2, v$4 += M$4 >>> 13, M$4 &= 8191, v$4 = (v$4 << 2) + v$4 | 0, v$4 = v$4 + B$2 | 0, B$2 = v$4 & 8191, v$4 = v$4 >>> 13, A$3 += v$4, s[0] = B$2, s[1] = A$3, s[2] = N$3, s[3] = D$1, s[4] = P$3, s[5] = $$2, s[6] = V$3, s[7] = q$2, s[8] = G$3, s[9] = M$4;
	}
	finalize() {
		const { h: e, pad: n$1 } = this, r$1 = new Uint16Array(10);
		let o$1 = e[1] >>> 13;
		e[1] &= 8191;
		for (let c$2 = 2; c$2 < 10; c$2++) e[c$2] += o$1, o$1 = e[c$2] >>> 13, e[c$2] &= 8191;
		e[0] += o$1 * 5, o$1 = e[0] >>> 13, e[0] &= 8191, e[1] += o$1, o$1 = e[1] >>> 13, e[1] &= 8191, e[2] += o$1, r$1[0] = e[0] + 5, o$1 = r$1[0] >>> 13, r$1[0] &= 8191;
		for (let c$2 = 1; c$2 < 10; c$2++) r$1[c$2] = e[c$2] + o$1, o$1 = r$1[c$2] >>> 13, r$1[c$2] &= 8191;
		r$1[9] -= 8192;
		let s = (o$1 ^ 1) - 1;
		for (let c$2 = 0; c$2 < 10; c$2++) r$1[c$2] &= s;
		s = ~s;
		for (let c$2 = 0; c$2 < 10; c$2++) e[c$2] = e[c$2] & s | r$1[c$2];
		e[0] = (e[0] | e[1] << 13) & 65535, e[1] = (e[1] >>> 3 | e[2] << 10) & 65535, e[2] = (e[2] >>> 6 | e[3] << 7) & 65535, e[3] = (e[3] >>> 9 | e[4] << 4) & 65535, e[4] = (e[4] >>> 12 | e[5] << 1 | e[6] << 14) & 65535, e[5] = (e[6] >>> 2 | e[7] << 11) & 65535, e[6] = (e[7] >>> 5 | e[8] << 8) & 65535, e[7] = (e[8] >>> 8 | e[9] << 5) & 65535;
		let i$2 = e[0] + n$1[0];
		e[0] = i$2 & 65535;
		for (let c$2 = 1; c$2 < 8; c$2++) i$2 = (e[c$2] + n$1[c$2] | 0) + (i$2 >>> 16) | 0, e[c$2] = i$2 & 65535;
		Qt$2(r$1);
	}
	update(e) {
		go$1(this), e = En$1(e), ot$1(e);
		const { buffer: n$1, blockLen: r$1 } = this, o$1 = e.length;
		for (let s = 0; s < o$1;) {
			const i$2 = Math.min(r$1 - this.pos, o$1 - s);
			if (i$2 === r$1) {
				for (; r$1 <= o$1 - s; s += r$1) this.process(e, s);
				continue;
			}
			n$1.set(e.subarray(s, s + i$2), this.pos), this.pos += i$2, s += i$2, this.pos === r$1 && (this.process(n$1, 0, !1), this.pos = 0);
		}
		return this;
	}
	destroy() {
		Qt$2(this.h, this.r, this.buffer, this.pad);
	}
	digestInto(e) {
		go$1(this), Wc(e, this), this.finished = !0;
		const { buffer: n$1, h: r$1 } = this;
		let { pos: o$1 } = this;
		if (o$1) {
			for (n$1[o$1++] = 1; o$1 < 16; o$1++) n$1[o$1] = 0;
			this.process(n$1, 0, !0);
		}
		this.finalize();
		let s = 0;
		for (let i$2 = 0; i$2 < 8; i$2++) e[s++] = r$1[i$2] >>> 0, e[s++] = r$1[i$2] >>> 8;
		return e;
	}
	digest() {
		const { buffer: e, outputLen: n$1 } = this;
		this.digestInto(e);
		const r$1 = e.slice(0, n$1);
		return this.destroy(), r$1;
	}
};
function pf(t) {
	const e = (r$1, o$1) => t(o$1).update(En$1(r$1)).digest(), n$1 = t(new Uint8Array(32));
	return e.outputLen = n$1.outputLen, e.blockLen = n$1.blockLen, e.create = (r$1) => t(r$1), e;
}
var gf = pf((t) => new hf(t));
function bf(t, e, n$1, r$1, o$1, s = 20) {
	let i$2 = t[0], c$2 = t[1], f$5 = t[2], u$1 = t[3], a$1 = e[0], l$1 = e[1], d$3 = e[2], h$2 = e[3], y$2 = e[4], m$2 = e[5], w$2 = e[6], U$3 = e[7], F$2 = o$1, R$3 = n$1[0], Z$1 = n$1[1], H$2 = n$1[2], j$4 = i$2, L$2 = c$2, k$1 = f$5, O$2 = u$1, T$3 = a$1, C$4 = l$1, _$2 = d$3, p$3 = h$2, b$4 = y$2, g$1 = m$2, x$2 = w$2, E$3 = U$3, I$2 = F$2, v$4 = R$3, B$2 = Z$1, A$3 = H$2;
	for (let D$1 = 0; D$1 < s; D$1 += 2) j$4 = j$4 + T$3 | 0, I$2 = K$4(I$2 ^ j$4, 16), b$4 = b$4 + I$2 | 0, T$3 = K$4(T$3 ^ b$4, 12), j$4 = j$4 + T$3 | 0, I$2 = K$4(I$2 ^ j$4, 8), b$4 = b$4 + I$2 | 0, T$3 = K$4(T$3 ^ b$4, 7), L$2 = L$2 + C$4 | 0, v$4 = K$4(v$4 ^ L$2, 16), g$1 = g$1 + v$4 | 0, C$4 = K$4(C$4 ^ g$1, 12), L$2 = L$2 + C$4 | 0, v$4 = K$4(v$4 ^ L$2, 8), g$1 = g$1 + v$4 | 0, C$4 = K$4(C$4 ^ g$1, 7), k$1 = k$1 + _$2 | 0, B$2 = K$4(B$2 ^ k$1, 16), x$2 = x$2 + B$2 | 0, _$2 = K$4(_$2 ^ x$2, 12), k$1 = k$1 + _$2 | 0, B$2 = K$4(B$2 ^ k$1, 8), x$2 = x$2 + B$2 | 0, _$2 = K$4(_$2 ^ x$2, 7), O$2 = O$2 + p$3 | 0, A$3 = K$4(A$3 ^ O$2, 16), E$3 = E$3 + A$3 | 0, p$3 = K$4(p$3 ^ E$3, 12), O$2 = O$2 + p$3 | 0, A$3 = K$4(A$3 ^ O$2, 8), E$3 = E$3 + A$3 | 0, p$3 = K$4(p$3 ^ E$3, 7), j$4 = j$4 + C$4 | 0, A$3 = K$4(A$3 ^ j$4, 16), x$2 = x$2 + A$3 | 0, C$4 = K$4(C$4 ^ x$2, 12), j$4 = j$4 + C$4 | 0, A$3 = K$4(A$3 ^ j$4, 8), x$2 = x$2 + A$3 | 0, C$4 = K$4(C$4 ^ x$2, 7), L$2 = L$2 + _$2 | 0, I$2 = K$4(I$2 ^ L$2, 16), E$3 = E$3 + I$2 | 0, _$2 = K$4(_$2 ^ E$3, 12), L$2 = L$2 + _$2 | 0, I$2 = K$4(I$2 ^ L$2, 8), E$3 = E$3 + I$2 | 0, _$2 = K$4(_$2 ^ E$3, 7), k$1 = k$1 + p$3 | 0, v$4 = K$4(v$4 ^ k$1, 16), b$4 = b$4 + v$4 | 0, p$3 = K$4(p$3 ^ b$4, 12), k$1 = k$1 + p$3 | 0, v$4 = K$4(v$4 ^ k$1, 8), b$4 = b$4 + v$4 | 0, p$3 = K$4(p$3 ^ b$4, 7), O$2 = O$2 + T$3 | 0, B$2 = K$4(B$2 ^ O$2, 16), g$1 = g$1 + B$2 | 0, T$3 = K$4(T$3 ^ g$1, 12), O$2 = O$2 + T$3 | 0, B$2 = K$4(B$2 ^ O$2, 8), g$1 = g$1 + B$2 | 0, T$3 = K$4(T$3 ^ g$1, 7);
	let N$3 = 0;
	r$1[N$3++] = i$2 + j$4 | 0, r$1[N$3++] = c$2 + L$2 | 0, r$1[N$3++] = f$5 + k$1 | 0, r$1[N$3++] = u$1 + O$2 | 0, r$1[N$3++] = a$1 + T$3 | 0, r$1[N$3++] = l$1 + C$4 | 0, r$1[N$3++] = d$3 + _$2 | 0, r$1[N$3++] = h$2 + p$3 | 0, r$1[N$3++] = y$2 + b$4 | 0, r$1[N$3++] = m$2 + g$1 | 0, r$1[N$3++] = w$2 + x$2 | 0, r$1[N$3++] = U$3 + E$3 | 0, r$1[N$3++] = F$2 + I$2 | 0, r$1[N$3++] = R$3 + v$4 | 0, r$1[N$3++] = Z$1 + B$2 | 0, r$1[N$3++] = H$2 + A$3 | 0;
}
var yf = df(bf, {
	counterRight: !1,
	counterLength: 4,
	allowShortKeys: !1
}), mf = new Uint8Array(16), xo$1 = (t, e) => {
	t.update(e);
	const n$1 = e.length % 16;
	n$1 && t.update(mf.subarray(n$1));
}, wf = new Uint8Array(32);
function Eo$1(t, e, n$1, r$1, o$1) {
	const s = t(e, n$1, wf), i$2 = gf.create(s);
	o$1 && xo$1(i$2, o$1), xo$1(i$2, r$1);
	const c$2 = rf(r$1.length, o$1 ? o$1.length : 0, !0);
	i$2.update(c$2);
	const f$5 = i$2.digest();
	return Qt$2(s, c$2), f$5;
}
var vf = (t) => (e, n$1, r$1) => ({
	encrypt(s, i$2) {
		const c$2 = s.length;
		i$2 = bo$1(c$2 + 16, i$2, !1), i$2.set(s);
		const f$5 = i$2.subarray(0, -16);
		t(e, n$1, f$5, f$5, 1);
		const u$1 = Eo$1(t, e, n$1, f$5, r$1);
		return i$2.set(u$1, c$2), Qt$2(u$1), i$2;
	},
	decrypt(s, i$2) {
		i$2 = bo$1(s.length - 16, i$2, !1);
		const c$2 = s.subarray(0, -16), f$5 = s.subarray(-16), u$1 = Eo$1(t, e, n$1, c$2, r$1);
		if (!ef(f$5, u$1)) throw new Error("invalid tag");
		return i$2.set(s.subarray(0, -16)), t(e, n$1, i$2, i$2, 1), Qt$2(u$1), i$2;
	}
}), Bo$1 = nf({
	blockSize: 64,
	nonceLength: 12,
	tagLength: 16
}, vf(yf));
var Io$1 = class extends $e$2 {
	constructor(e, n$1) {
		super(), this.finished = !1, this.destroyed = !1, _e$2(e);
		const r$1 = pt$2(n$1);
		if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
		this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
		const o$1 = this.blockLen, s = new Uint8Array(o$1);
		s.set(r$1.length > o$1 ? e.create().update(r$1).digest() : r$1);
		for (let i$2 = 0; i$2 < s.length; i$2++) s[i$2] ^= 54;
		this.iHash.update(s), this.oHash = e.create();
		for (let i$2 = 0; i$2 < s.length; i$2++) s[i$2] ^= 106;
		this.oHash.update(s), lt$2(s);
	}
	update(e) {
		return Nt$3(this), this.iHash.update(e), this;
	}
	digestInto(e) {
		Nt$3(this), ht$1(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
	}
	digest() {
		const e = new Uint8Array(this.oHash.outputLen);
		return this.digestInto(e), e;
	}
	_cloneInto(e) {
		e || (e = Object.create(Object.getPrototypeOf(this), {}));
		const { oHash: n$1, iHash: r$1, finished: o$1, destroyed: s, blockLen: i$2, outputLen: c$2 } = this;
		return e = e, e.finished = o$1, e.destroyed = s, e.blockLen = i$2, e.outputLen = c$2, e.oHash = n$1._cloneInto(e.oHash), e.iHash = r$1._cloneInto(e.iHash), e;
	}
	clone() {
		return this._cloneInto();
	}
	destroy() {
		this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
	}
};
var ke$1 = (t, e, n$1) => new Io$1(t, e).update(n$1).digest();
ke$1.create = (t, e) => new Io$1(t, e);
function xf(t, e, n$1) {
	return _e$2(t), n$1 === void 0 && (n$1 = new Uint8Array(t.outputLen)), ke$1(t, pt$2(n$1), pt$2(e));
}
var An$1 = Uint8Array.from([0]), Ao$1 = Uint8Array.of();
function Ef(t, e, n$1, r$1 = 32) {
	_e$2(t), mt$2(r$1);
	const o$1 = t.outputLen;
	if (r$1 > 255 * o$1) throw new Error("Length should be <= 255*HashLen");
	const s = Math.ceil(r$1 / o$1);
	n$1 === void 0 && (n$1 = Ao$1);
	const i$2 = new Uint8Array(s * o$1), c$2 = ke$1.create(t, e), f$5 = c$2._cloneInto(), u$1 = new Uint8Array(c$2.outputLen);
	for (let a$1 = 0; a$1 < s; a$1++) An$1[0] = a$1 + 1, f$5.update(a$1 === 0 ? Ao$1 : u$1).update(n$1).update(An$1).digestInto(u$1), i$2.set(u$1, o$1 * a$1), c$2._cloneInto(f$5);
	return c$2.destroy(), f$5.destroy(), lt$2(u$1, An$1), i$2.slice(0, r$1);
}
var Bf = (t, e, n$1, r$1, o$1) => Ef(t, xf(t, e, n$1), r$1, o$1), Pe$2 = Te$2, Sn$1 = BigInt(0), On$1 = BigInt(1);
function He$2(t, e = "") {
	if (typeof t != "boolean") {
		const n$1 = e && `"${e}"`;
		throw new Error(n$1 + "expected boolean, got type=" + typeof t);
	}
	return t;
}
function Kt$2(t, e, n$1 = "") {
	const r$1 = Ue$4(t), o$1 = t?.length, s = e !== void 0;
	if (!r$1 || s && o$1 !== e) {
		const i$2 = n$1 && `"${n$1}" `, c$2 = s ? ` of length ${e}` : "", f$5 = r$1 ? `length=${o$1}` : `type=${typeof t}`;
		throw new Error(i$2 + "expected Uint8Array" + c$2 + ", got " + f$5);
	}
	return t;
}
function De$2(t) {
	const e = t.toString(16);
	return e.length & 1 ? "0" + e : e;
}
function So$1(t) {
	if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
	return t === "" ? Sn$1 : BigInt("0x" + t);
}
function Ve$2(t) {
	return So$1(Jt$2(t));
}
function Me$3(t) {
	return ht$1(t), So$1(Jt$2(Uint8Array.from(t).reverse()));
}
function Nn$1(t, e) {
	return Re$3(t.toString(16).padStart(e * 2, "0"));
}
function Un$1(t, e) {
	return Nn$1(t, e).reverse();
}
function tt$3(t, e, n$1) {
	let r$1;
	if (typeof e == "string") try {
		r$1 = Re$3(e);
	} catch (s) {
		throw new Error(t + " must be hex string or Uint8Array, cause: " + s);
	}
	else if (Ue$4(e)) r$1 = Uint8Array.from(e);
	else throw new Error(t + " must be hex string or Uint8Array");
	const o$1 = r$1.length;
	if (typeof n$1 == "number" && o$1 !== n$1) throw new Error(t + " of length " + n$1 + " expected, got " + o$1);
	return r$1;
}
var _n$1 = (t) => typeof t == "bigint" && Sn$1 <= t;
function If(t, e, n$1) {
	return _n$1(t) && _n$1(e) && _n$1(n$1) && e <= t && t < n$1;
}
function Rn$1(t, e, n$1, r$1) {
	if (!If(e, n$1, r$1)) throw new Error("expected valid " + t + ": " + n$1 + " <= n < " + r$1 + ", got " + e);
}
function Oo$1(t) {
	let e;
	for (e = 0; t > Sn$1; t >>= On$1, e += 1);
	return e;
}
var me$2 = (t) => (On$1 << BigInt(t)) - On$1;
function Af(t, e, n$1) {
	if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
	if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
	if (typeof n$1 != "function") throw new Error("hmacFn must be a function");
	const r$1 = (h$2) => new Uint8Array(h$2), o$1 = (h$2) => Uint8Array.of(h$2);
	let s = r$1(t), i$2 = r$1(t), c$2 = 0;
	const f$5 = () => {
		s.fill(1), i$2.fill(0), c$2 = 0;
	}, u$1 = (...h$2) => n$1(i$2, s, ...h$2), a$1 = (h$2 = r$1(0)) => {
		i$2 = u$1(o$1(0), h$2), s = u$1(), h$2.length !== 0 && (i$2 = u$1(o$1(1), h$2), s = u$1());
	}, l$1 = () => {
		if (c$2++ >= 1e3) throw new Error("drbg: tried 1000 values");
		let h$2 = 0;
		const y$2 = [];
		for (; h$2 < e;) {
			s = u$1();
			const m$2 = s.slice();
			y$2.push(m$2), h$2 += s.length;
		}
		return _t$2(...y$2);
	};
	return (h$2, y$2) => {
		f$5(), a$1(h$2);
		let m$2;
		for (; !(m$2 = y$2(l$1()));) a$1();
		return f$5(), m$2;
	};
}
function Ke$3(t, e, n$1 = {}) {
	if (!t || typeof t != "object") throw new Error("expected valid options object");
	function r$1(o$1, s, i$2) {
		const c$2 = t[o$1];
		if (i$2 && c$2 === void 0) return;
		const f$5 = typeof c$2;
		if (f$5 !== s || c$2 === null) throw new Error(`param "${o$1}" is invalid: expected ${s}, got ${f$5}`);
	}
	Object.entries(e).forEach(([o$1, s]) => r$1(o$1, s, !1)), Object.entries(n$1).forEach(([o$1, s]) => r$1(o$1, s, !0));
}
function No$1(t) {
	const e = /* @__PURE__ */ new WeakMap();
	return (n$1, ...r$1) => {
		const o$1 = e.get(n$1);
		if (o$1 !== void 0) return o$1;
		const s = t(n$1, ...r$1);
		return e.set(n$1, s), s;
	};
}
var st$3 = BigInt(0), nt$2 = BigInt(1), qt$2 = BigInt(2), Uo$1 = BigInt(3), _o$1 = BigInt(4), Ro$1 = BigInt(5), Sf = BigInt(7), $o$1 = BigInt(8), Of = BigInt(9), To$1 = BigInt(16);
function ct$2(t, e) {
	const n$1 = t % e;
	return n$1 >= st$3 ? n$1 : e + n$1;
}
function gt$2(t, e, n$1) {
	let r$1 = t;
	for (; e-- > st$3;) r$1 *= r$1, r$1 %= n$1;
	return r$1;
}
function Co$1(t, e) {
	if (t === st$3) throw new Error("invert: expected non-zero number");
	if (e <= st$3) throw new Error("invert: expected positive modulus, got " + e);
	let n$1 = ct$2(t, e), r$1 = e, o$1 = st$3, s = nt$2;
	for (; n$1 !== st$3;) {
		const c$2 = r$1 / n$1, f$5 = r$1 % n$1, u$1 = o$1 - s * c$2;
		r$1 = n$1, n$1 = f$5, o$1 = s, s = u$1;
	}
	if (r$1 !== nt$2) throw new Error("invert: does not exist");
	return ct$2(o$1, e);
}
function $n$1(t, e, n$1) {
	if (!t.eql(t.sqr(e), n$1)) throw new Error("Cannot find square root");
}
function jo$1(t, e) {
	const n$1 = (t.ORDER + nt$2) / _o$1, r$1 = t.pow(e, n$1);
	return $n$1(t, r$1, e), r$1;
}
function Nf(t, e) {
	const n$1 = (t.ORDER - Ro$1) / $o$1, r$1 = t.mul(e, qt$2), o$1 = t.pow(r$1, n$1), s = t.mul(e, o$1), i$2 = t.mul(t.mul(s, qt$2), o$1), c$2 = t.mul(s, t.sub(i$2, t.ONE));
	return $n$1(t, c$2, e), c$2;
}
function Uf(t) {
	const e = Ht$2(t), n$1 = Lo$1(t), r$1 = n$1(e, e.neg(e.ONE)), o$1 = n$1(e, r$1), s = n$1(e, e.neg(r$1)), i$2 = (t + Sf) / To$1;
	return (c$2, f$5) => {
		let u$1 = c$2.pow(f$5, i$2), a$1 = c$2.mul(u$1, r$1);
		const l$1 = c$2.mul(u$1, o$1), d$3 = c$2.mul(u$1, s), h$2 = c$2.eql(c$2.sqr(a$1), f$5), y$2 = c$2.eql(c$2.sqr(l$1), f$5);
		u$1 = c$2.cmov(u$1, a$1, h$2), a$1 = c$2.cmov(d$3, l$1, y$2);
		const m$2 = c$2.eql(c$2.sqr(a$1), f$5), w$2 = c$2.cmov(u$1, a$1, m$2);
		return $n$1(c$2, w$2, f$5), w$2;
	};
}
function Lo$1(t) {
	if (t < Uo$1) throw new Error("sqrt is not defined for small field");
	let e = t - nt$2, n$1 = 0;
	for (; e % qt$2 === st$3;) e /= qt$2, n$1++;
	let r$1 = qt$2;
	const o$1 = Ht$2(t);
	for (; Po$1(o$1, r$1) === 1;) if (r$1++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
	if (n$1 === 1) return jo$1;
	let s = o$1.pow(r$1, e);
	const i$2 = (e + nt$2) / qt$2;
	return function(f$5, u$1) {
		if (f$5.is0(u$1)) return u$1;
		if (Po$1(f$5, u$1) !== 1) throw new Error("Cannot find square root");
		let a$1 = n$1, l$1 = f$5.mul(f$5.ONE, s), d$3 = f$5.pow(u$1, e), h$2 = f$5.pow(u$1, i$2);
		for (; !f$5.eql(d$3, f$5.ONE);) {
			if (f$5.is0(d$3)) return f$5.ZERO;
			let y$2 = 1, m$2 = f$5.sqr(d$3);
			for (; !f$5.eql(m$2, f$5.ONE);) if (y$2++, m$2 = f$5.sqr(m$2), y$2 === a$1) throw new Error("Cannot find square root");
			const w$2 = nt$2 << BigInt(a$1 - y$2 - 1), U$3 = f$5.pow(l$1, w$2);
			a$1 = y$2, l$1 = f$5.sqr(U$3), d$3 = f$5.mul(d$3, l$1), h$2 = f$5.mul(h$2, U$3);
		}
		return h$2;
	};
}
function _f(t) {
	return t % _o$1 === Uo$1 ? jo$1 : t % $o$1 === Ro$1 ? Nf : t % To$1 === Of ? Uf(t) : Lo$1(t);
}
var Rf = [
	"create",
	"isValid",
	"is0",
	"neg",
	"inv",
	"sqrt",
	"sqr",
	"eql",
	"add",
	"sub",
	"mul",
	"pow",
	"div",
	"addN",
	"subN",
	"mulN",
	"sqrN"
];
function $f(t) {
	return Ke$3(t, Rf.reduce((r$1, o$1) => (r$1[o$1] = "function", r$1), {
		ORDER: "bigint",
		MASK: "bigint",
		BYTES: "number",
		BITS: "number"
	})), t;
}
function Tf(t, e, n$1) {
	if (n$1 < st$3) throw new Error("invalid exponent, negatives unsupported");
	if (n$1 === st$3) return t.ONE;
	if (n$1 === nt$2) return e;
	let r$1 = t.ONE, o$1 = e;
	for (; n$1 > st$3;) n$1 & nt$2 && (r$1 = t.mul(r$1, o$1)), o$1 = t.sqr(o$1), n$1 >>= nt$2;
	return r$1;
}
function ko$1(t, e, n$1 = !1) {
	const r$1 = new Array(e.length).fill(n$1 ? t.ZERO : void 0), o$1 = e.reduce((i$2, c$2, f$5) => t.is0(c$2) ? i$2 : (r$1[f$5] = i$2, t.mul(i$2, c$2)), t.ONE), s = t.inv(o$1);
	return e.reduceRight((i$2, c$2, f$5) => t.is0(c$2) ? i$2 : (r$1[f$5] = t.mul(i$2, r$1[f$5]), t.mul(i$2, c$2)), s), r$1;
}
function Po$1(t, e) {
	const n$1 = (t.ORDER - nt$2) / qt$2, r$1 = t.pow(e, n$1), o$1 = t.eql(r$1, t.ONE), s = t.eql(r$1, t.ZERO), i$2 = t.eql(r$1, t.neg(t.ONE));
	if (!o$1 && !s && !i$2) throw new Error("invalid Legendre symbol result");
	return o$1 ? 1 : s ? 0 : -1;
}
function Ho$1(t, e) {
	e !== void 0 && mt$2(e);
	const n$1 = e !== void 0 ? e : t.toString(2).length;
	return {
		nBitLength: n$1,
		nByteLength: Math.ceil(n$1 / 8)
	};
}
function Ht$2(t, e, n$1 = !1, r$1 = {}) {
	if (t <= st$3) throw new Error("invalid field: expected ORDER > 0, got " + t);
	let o$1, s, i$2 = !1, c$2;
	if (typeof e == "object" && e != null) {
		if (r$1.sqrt || n$1) throw new Error("cannot specify opts in two arguments");
		const d$3 = e;
		d$3.BITS && (o$1 = d$3.BITS), d$3.sqrt && (s = d$3.sqrt), typeof d$3.isLE == "boolean" && (n$1 = d$3.isLE), typeof d$3.modFromBytes == "boolean" && (i$2 = d$3.modFromBytes), c$2 = d$3.allowedLengths;
	} else typeof e == "number" && (o$1 = e), r$1.sqrt && (s = r$1.sqrt);
	const { nBitLength: f$5, nByteLength: u$1 } = Ho$1(t, o$1);
	if (u$1 > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
	let a$1;
	const l$1 = Object.freeze({
		ORDER: t,
		isLE: n$1,
		BITS: f$5,
		BYTES: u$1,
		MASK: me$2(f$5),
		ZERO: st$3,
		ONE: nt$2,
		allowedLengths: c$2,
		create: (d$3) => ct$2(d$3, t),
		isValid: (d$3) => {
			if (typeof d$3 != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof d$3);
			return st$3 <= d$3 && d$3 < t;
		},
		is0: (d$3) => d$3 === st$3,
		isValidNot0: (d$3) => !l$1.is0(d$3) && l$1.isValid(d$3),
		isOdd: (d$3) => (d$3 & nt$2) === nt$2,
		neg: (d$3) => ct$2(-d$3, t),
		eql: (d$3, h$2) => d$3 === h$2,
		sqr: (d$3) => ct$2(d$3 * d$3, t),
		add: (d$3, h$2) => ct$2(d$3 + h$2, t),
		sub: (d$3, h$2) => ct$2(d$3 - h$2, t),
		mul: (d$3, h$2) => ct$2(d$3 * h$2, t),
		pow: (d$3, h$2) => Tf(l$1, d$3, h$2),
		div: (d$3, h$2) => ct$2(d$3 * Co$1(h$2, t), t),
		sqrN: (d$3) => d$3 * d$3,
		addN: (d$3, h$2) => d$3 + h$2,
		subN: (d$3, h$2) => d$3 - h$2,
		mulN: (d$3, h$2) => d$3 * h$2,
		inv: (d$3) => Co$1(d$3, t),
		sqrt: s || ((d$3) => (a$1 || (a$1 = _f(t)), a$1(l$1, d$3))),
		toBytes: (d$3) => n$1 ? Un$1(d$3, u$1) : Nn$1(d$3, u$1),
		fromBytes: (d$3, h$2 = !0) => {
			if (c$2) {
				if (!c$2.includes(d$3.length) || d$3.length > u$1) throw new Error("Field.fromBytes: expected " + c$2 + " bytes, got " + d$3.length);
				const m$2 = new Uint8Array(u$1);
				m$2.set(d$3, n$1 ? 0 : m$2.length - d$3.length), d$3 = m$2;
			}
			if (d$3.length !== u$1) throw new Error("Field.fromBytes: expected " + u$1 + " bytes, got " + d$3.length);
			let y$2 = n$1 ? Me$3(d$3) : Ve$2(d$3);
			if (i$2 && (y$2 = ct$2(y$2, t)), !h$2 && !l$1.isValid(y$2)) throw new Error("invalid field element: outside of range 0..ORDER");
			return y$2;
		},
		invertBatch: (d$3) => ko$1(l$1, d$3),
		cmov: (d$3, h$2, y$2) => y$2 ? h$2 : d$3
	});
	return Object.freeze(l$1);
}
function Do$1(t) {
	if (typeof t != "bigint") throw new Error("field order must be bigint");
	const e = t.toString(2).length;
	return Math.ceil(e / 8);
}
function Vo$1(t) {
	const e = Do$1(t);
	return e + Math.ceil(e / 2);
}
function Cf(t, e, n$1 = !1) {
	const r$1 = t.length, o$1 = Do$1(e), s = Vo$1(e);
	if (r$1 < 16 || r$1 < s || r$1 > 1024) throw new Error("expected " + s + "-1024 bytes of input, got " + r$1);
	const c$2 = ct$2(n$1 ? Me$3(t) : Ve$2(t), e - nt$2) + nt$2;
	return n$1 ? Un$1(c$2, o$1) : Nn$1(c$2, o$1);
}
var te$1 = BigInt(0), Ft$2 = BigInt(1);
function qe$2(t, e) {
	const n$1 = e.negate();
	return t ? n$1 : e;
}
function Tn$1(t, e) {
	const n$1 = ko$1(t.Fp, e.map((r$1) => r$1.Z));
	return e.map((r$1, o$1) => t.fromAffine(r$1.toAffine(n$1[o$1])));
}
function Mo$1(t, e) {
	if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
}
function Cn$1(t, e) {
	Mo$1(t, e);
	const n$1 = Math.ceil(e / t) + 1, r$1 = 2 ** (t - 1), o$1 = 2 ** t;
	return {
		windows: n$1,
		windowSize: r$1,
		mask: me$2(t),
		maxNumber: o$1,
		shiftBy: BigInt(t)
	};
}
function Ko$1(t, e, n$1) {
	const { windowSize: r$1, mask: o$1, maxNumber: s, shiftBy: i$2 } = n$1;
	let c$2 = Number(t & o$1), f$5 = t >> i$2;
	c$2 > r$1 && (c$2 -= s, f$5 += Ft$2);
	const u$1 = e * r$1, a$1 = u$1 + Math.abs(c$2) - 1, l$1 = c$2 === 0, d$3 = c$2 < 0, h$2 = e % 2 !== 0;
	return {
		nextN: f$5,
		offset: a$1,
		isZero: l$1,
		isNeg: d$3,
		isNegF: h$2,
		offsetF: u$1
	};
}
function jf(t, e) {
	if (!Array.isArray(t)) throw new Error("array expected");
	t.forEach((n$1, r$1) => {
		if (!(n$1 instanceof e)) throw new Error("invalid point at index " + r$1);
	});
}
function Lf(t, e) {
	if (!Array.isArray(t)) throw new Error("array of scalars expected");
	t.forEach((n$1, r$1) => {
		if (!e.isValid(n$1)) throw new Error("invalid scalar at index " + r$1);
	});
}
var jn$1 = /* @__PURE__ */ new WeakMap(), qo$1 = /* @__PURE__ */ new WeakMap();
function Ln$1(t) {
	return qo$1.get(t) || 1;
}
function Fo$1(t) {
	if (t !== te$1) throw new Error("invalid wNAF");
}
var kf = class {
	constructor(e, n$1) {
		this.BASE = e.BASE, this.ZERO = e.ZERO, this.Fn = e.Fn, this.bits = n$1;
	}
	_unsafeLadder(e, n$1, r$1 = this.ZERO) {
		let o$1 = e;
		for (; n$1 > te$1;) n$1 & Ft$2 && (r$1 = r$1.add(o$1)), o$1 = o$1.double(), n$1 >>= Ft$2;
		return r$1;
	}
	precomputeWindow(e, n$1) {
		const { windows: r$1, windowSize: o$1 } = Cn$1(n$1, this.bits), s = [];
		let i$2 = e, c$2 = i$2;
		for (let f$5 = 0; f$5 < r$1; f$5++) {
			c$2 = i$2, s.push(c$2);
			for (let u$1 = 1; u$1 < o$1; u$1++) c$2 = c$2.add(i$2), s.push(c$2);
			i$2 = c$2.double();
		}
		return s;
	}
	wNAF(e, n$1, r$1) {
		if (!this.Fn.isValid(r$1)) throw new Error("invalid scalar");
		let o$1 = this.ZERO, s = this.BASE;
		const i$2 = Cn$1(e, this.bits);
		for (let c$2 = 0; c$2 < i$2.windows; c$2++) {
			const { nextN: f$5, offset: u$1, isZero: a$1, isNeg: l$1, isNegF: d$3, offsetF: h$2 } = Ko$1(r$1, c$2, i$2);
			r$1 = f$5, a$1 ? s = s.add(qe$2(d$3, n$1[h$2])) : o$1 = o$1.add(qe$2(l$1, n$1[u$1]));
		}
		return Fo$1(r$1), {
			p: o$1,
			f: s
		};
	}
	wNAFUnsafe(e, n$1, r$1, o$1 = this.ZERO) {
		const s = Cn$1(e, this.bits);
		for (let i$2 = 0; i$2 < s.windows && r$1 !== te$1; i$2++) {
			const { nextN: c$2, offset: f$5, isZero: u$1, isNeg: a$1 } = Ko$1(r$1, i$2, s);
			if (r$1 = c$2, !u$1) {
				const l$1 = n$1[f$5];
				o$1 = o$1.add(a$1 ? l$1.negate() : l$1);
			}
		}
		return Fo$1(r$1), o$1;
	}
	getPrecomputes(e, n$1, r$1) {
		let o$1 = jn$1.get(n$1);
		return o$1 || (o$1 = this.precomputeWindow(n$1, e), e !== 1 && (typeof r$1 == "function" && (o$1 = r$1(o$1)), jn$1.set(n$1, o$1))), o$1;
	}
	cached(e, n$1, r$1) {
		const o$1 = Ln$1(e);
		return this.wNAF(o$1, this.getPrecomputes(o$1, e, r$1), n$1);
	}
	unsafe(e, n$1, r$1, o$1) {
		const s = Ln$1(e);
		return s === 1 ? this._unsafeLadder(e, n$1, o$1) : this.wNAFUnsafe(s, this.getPrecomputes(s, e, r$1), n$1, o$1);
	}
	createCache(e, n$1) {
		Mo$1(n$1, this.bits), qo$1.set(e, n$1), jn$1.delete(e);
	}
	hasCache(e) {
		return Ln$1(e) !== 1;
	}
};
function Pf(t, e, n$1, r$1) {
	let o$1 = e, s = t.ZERO, i$2 = t.ZERO;
	for (; n$1 > te$1 || r$1 > te$1;) n$1 & Ft$2 && (s = s.add(o$1)), r$1 & Ft$2 && (i$2 = i$2.add(o$1)), o$1 = o$1.double(), n$1 >>= Ft$2, r$1 >>= Ft$2;
	return {
		p1: s,
		p2: i$2
	};
}
function Hf(t, e, n$1, r$1) {
	jf(n$1, t), Lf(r$1, e);
	const o$1 = n$1.length, s = r$1.length;
	if (o$1 !== s) throw new Error("arrays of points and scalars must have equal length");
	const i$2 = t.ZERO, c$2 = Oo$1(BigInt(o$1));
	let f$5 = 1;
	c$2 > 12 ? f$5 = c$2 - 3 : c$2 > 4 ? f$5 = c$2 - 2 : c$2 > 0 && (f$5 = 2);
	const u$1 = me$2(f$5), a$1 = new Array(Number(u$1) + 1).fill(i$2), l$1 = Math.floor((e.BITS - 1) / f$5) * f$5;
	let d$3 = i$2;
	for (let h$2 = l$1; h$2 >= 0; h$2 -= f$5) {
		a$1.fill(i$2);
		for (let m$2 = 0; m$2 < s; m$2++) {
			const w$2 = r$1[m$2], U$3 = Number(w$2 >> BigInt(h$2) & u$1);
			a$1[U$3] = a$1[U$3].add(n$1[m$2]);
		}
		let y$2 = i$2;
		for (let m$2 = a$1.length - 1, w$2 = i$2; m$2 > 0; m$2--) w$2 = w$2.add(a$1[m$2]), y$2 = y$2.add(w$2);
		if (d$3 = d$3.add(y$2), h$2 !== 0) for (let m$2 = 0; m$2 < f$5; m$2++) d$3 = d$3.double();
	}
	return d$3;
}
function Zo$1(t, e, n$1) {
	if (e) {
		if (e.ORDER !== t) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
		return $f(e), e;
	} else return Ht$2(t, { isLE: n$1 });
}
function Df(t, e, n$1 = {}, r$1) {
	if (r$1 === void 0 && (r$1 = t === "edwards"), !e || typeof e != "object") throw new Error(`expected valid ${t} CURVE object`);
	for (const f$5 of [
		"p",
		"n",
		"h"
	]) {
		const u$1 = e[f$5];
		if (!(typeof u$1 == "bigint" && u$1 > te$1)) throw new Error(`CURVE.${f$5} must be positive bigint`);
	}
	const o$1 = Zo$1(e.p, n$1.Fp, r$1), s = Zo$1(e.n, n$1.Fn, r$1), c$2 = [
		"Gx",
		"Gy",
		"a",
		t === "weierstrass" ? "b" : "d"
	];
	for (const f$5 of c$2) if (!o$1.isValid(e[f$5])) throw new Error(`CURVE.${f$5} must be valid field element of CURVE.Fp`);
	return e = Object.freeze(Object.assign({}, e)), {
		CURVE: e,
		Fp: o$1,
		Fn: s
	};
}
BigInt(0), BigInt(1), BigInt(2), BigInt(8), kr$1("HashToScalar-");
var we$2 = BigInt(0), ee$3 = BigInt(1), Fe$2 = BigInt(2);
function Vf(t) {
	return Ke$3(t, {
		adjustScalarBytes: "function",
		powPminus2: "function"
	}), Object.freeze({ ...t });
}
function Mf(t) {
	const { P: n$1, type: r$1, adjustScalarBytes: o$1, powPminus2: s, randomBytes: i$2 } = Vf(t), c$2 = r$1 === "x25519";
	if (!c$2 && r$1 !== "x448") throw new Error("invalid type");
	const f$5 = i$2 || Mt$2, u$1 = c$2 ? 255 : 448, a$1 = c$2 ? 32 : 56, l$1 = BigInt(c$2 ? 9 : 5), d$3 = BigInt(c$2 ? 121665 : 39081), h$2 = c$2 ? Fe$2 ** BigInt(254) : Fe$2 ** BigInt(447), m$2 = h$2 + (c$2 ? BigInt(8) * Fe$2 ** BigInt(251) - ee$3 : BigInt(4) * Fe$2 ** BigInt(445) - ee$3) + ee$3, w$2 = (p$3) => ct$2(p$3, n$1), U$3 = F$2(l$1);
	function F$2(p$3) {
		return Un$1(w$2(p$3), a$1);
	}
	function R$3(p$3) {
		const b$4 = tt$3("u coordinate", p$3, a$1);
		return c$2 && (b$4[31] &= 127), w$2(Me$3(b$4));
	}
	function Z$1(p$3) {
		return Me$3(o$1(tt$3("scalar", p$3, a$1)));
	}
	function H$2(p$3, b$4) {
		const g$1 = k$1(R$3(b$4), Z$1(p$3));
		if (g$1 === we$2) throw new Error("invalid private or public key received");
		return F$2(g$1);
	}
	function j$4(p$3) {
		return H$2(p$3, U$3);
	}
	function L$2(p$3, b$4, g$1) {
		const x$2 = w$2(p$3 * (b$4 - g$1));
		return b$4 = w$2(b$4 - x$2), g$1 = w$2(g$1 + x$2), {
			x_2: b$4,
			x_3: g$1
		};
	}
	function k$1(p$3, b$4) {
		Rn$1("u", p$3, we$2, n$1), Rn$1("scalar", b$4, h$2, m$2);
		const g$1 = b$4, x$2 = p$3;
		let E$3 = ee$3, I$2 = we$2, v$4 = p$3, B$2 = ee$3, A$3 = we$2;
		for (let D$1 = BigInt(u$1 - 1); D$1 >= we$2; D$1--) {
			const P$3 = g$1 >> D$1 & ee$3;
			A$3 ^= P$3, {x_2: E$3, x_3: v$4} = L$2(A$3, E$3, v$4), {x_2: I$2, x_3: B$2} = L$2(A$3, I$2, B$2), A$3 = P$3;
			const $$2 = E$3 + I$2, V$3 = w$2($$2 * $$2), q$2 = E$3 - I$2, G$3 = w$2(q$2 * q$2), M$4 = V$3 - G$3, Y$2 = v$4 + B$2, ce$2 = w$2((v$4 - B$2) * $$2), fe$2 = w$2(Y$2 * q$2), Qn$1 = ce$2 + fe$2, tr$1 = ce$2 - fe$2;
			v$4 = w$2(Qn$1 * Qn$1), B$2 = w$2(x$2 * w$2(tr$1 * tr$1)), E$3 = w$2(V$3 * G$3), I$2 = w$2(M$4 * (V$3 + w$2(d$3 * M$4)));
		}
		({x_2: E$3, x_3: v$4} = L$2(A$3, E$3, v$4)), {x_2: I$2, x_3: B$2} = L$2(A$3, I$2, B$2);
		const N$3 = s(I$2);
		return w$2(E$3 * N$3);
	}
	const O$2 = {
		secretKey: a$1,
		publicKey: a$1,
		seed: a$1
	}, T$3 = (p$3 = f$5(a$1)) => (ht$1(p$3, O$2.seed), p$3);
	function C$4(p$3) {
		const b$4 = T$3(p$3);
		return {
			secretKey: b$4,
			publicKey: j$4(b$4)
		};
	}
	return {
		keygen: C$4,
		getSharedSecret: (p$3, b$4) => H$2(p$3, b$4),
		getPublicKey: (p$3) => j$4(p$3),
		scalarMult: H$2,
		scalarMultBase: j$4,
		utils: {
			randomSecretKey: T$3,
			randomPrivateKey: T$3
		},
		GuBytes: U$3.slice(),
		lengths: O$2
	};
}
var Kf = BigInt(1), Go$1 = BigInt(2), qf = BigInt(3), Ff = BigInt(5), Zf = BigInt(8), zo$1 = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"), Gf = {
	p: zo$1,
	n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),
	h: Zf,
	a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),
	d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),
	Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),
	Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")
};
function zf(t) {
	const e = BigInt(10), n$1 = BigInt(20), r$1 = BigInt(40), o$1 = BigInt(80), s = zo$1, c$2 = t * t % s * t % s, u$1 = gt$2(gt$2(c$2, Go$1, s) * c$2 % s, Kf, s) * t % s, a$1 = gt$2(u$1, Ff, s) * u$1 % s, l$1 = gt$2(a$1, e, s) * a$1 % s, d$3 = gt$2(l$1, n$1, s) * l$1 % s, h$2 = gt$2(d$3, r$1, s) * d$3 % s;
	return {
		pow_p_5_8: gt$2(gt$2(gt$2(gt$2(h$2, o$1, s) * h$2 % s, o$1, s) * h$2 % s, e, s) * a$1 % s, Go$1, s) * t % s,
		b2: c$2
	};
}
function Yf(t) {
	return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
var Wf = Ht$2(Gf.p, { isLE: !0 }), kn$1 = (() => {
	const t = Wf.ORDER;
	return Mf({
		P: t,
		type: "x25519",
		powPminus2: (e) => {
			const { pow_p_5_8: n$1, b2: r$1 } = zf(e);
			return ct$2(gt$2(n$1, qf, t) * r$1, t);
		},
		adjustScalarBytes: Yf
	});
})(), Yo$1 = (t, e) => (t + (t >= 0 ? e : -e) / Wo$1) / e;
function Xf(t, e, n$1) {
	const [[r$1, o$1], [s, i$2]] = e, c$2 = Yo$1(i$2 * t, n$1), f$5 = Yo$1(-o$1 * t, n$1);
	let u$1 = t - c$2 * r$1 - f$5 * s, a$1 = -c$2 * o$1 - f$5 * i$2;
	const l$1 = u$1 < Et$3, d$3 = a$1 < Et$3;
	l$1 && (u$1 = -u$1), d$3 && (a$1 = -a$1);
	const h$2 = me$2(Math.ceil(Oo$1(n$1) / 2)) + ne$1;
	if (u$1 < Et$3 || u$1 >= h$2 || a$1 < Et$3 || a$1 >= h$2) throw new Error("splitScalar (endomorphism): failed, k=" + t);
	return {
		k1neg: l$1,
		k1: u$1,
		k2neg: d$3,
		k2: a$1
	};
}
function Pn$1(t) {
	if (![
		"compact",
		"recovered",
		"der"
	].includes(t)) throw new Error("Signature format must be \"compact\", \"recovered\", or \"der\"");
	return t;
}
function Hn$1(t, e) {
	const n$1 = {};
	for (let r$1 of Object.keys(e)) n$1[r$1] = t[r$1] === void 0 ? e[r$1] : t[r$1];
	return He$2(n$1.lowS, "lowS"), He$2(n$1.prehash, "prehash"), n$1.format !== void 0 && Pn$1(n$1.format), n$1;
}
var Jf = class extends Error {
	constructor(e = "") {
		super(e);
	}
};
var xt$2 = {
	Err: Jf,
	_tlv: {
		encode: (t, e) => {
			const { Err: n$1 } = xt$2;
			if (t < 0 || t > 256) throw new n$1("tlv.encode: wrong tag");
			if (e.length & 1) throw new n$1("tlv.encode: unpadded data");
			const r$1 = e.length / 2, o$1 = De$2(r$1);
			if (o$1.length / 2 & 128) throw new n$1("tlv.encode: long form length too big");
			const s = r$1 > 127 ? De$2(o$1.length / 2 | 128) : "";
			return De$2(t) + s + o$1 + e;
		},
		decode(t, e) {
			const { Err: n$1 } = xt$2;
			let r$1 = 0;
			if (t < 0 || t > 256) throw new n$1("tlv.encode: wrong tag");
			if (e.length < 2 || e[r$1++] !== t) throw new n$1("tlv.decode: wrong tlv");
			const o$1 = e[r$1++], s = !!(o$1 & 128);
			let i$2 = 0;
			if (!s) i$2 = o$1;
			else {
				const f$5 = o$1 & 127;
				if (!f$5) throw new n$1("tlv.decode(long): indefinite length not supported");
				if (f$5 > 4) throw new n$1("tlv.decode(long): byte length is too big");
				const u$1 = e.subarray(r$1, r$1 + f$5);
				if (u$1.length !== f$5) throw new n$1("tlv.decode: length bytes not complete");
				if (u$1[0] === 0) throw new n$1("tlv.decode(long): zero leftmost byte");
				for (const a$1 of u$1) i$2 = i$2 << 8 | a$1;
				if (r$1 += f$5, i$2 < 128) throw new n$1("tlv.decode(long): not minimal encoding");
			}
			const c$2 = e.subarray(r$1, r$1 + i$2);
			if (c$2.length !== i$2) throw new n$1("tlv.decode: wrong value length");
			return {
				v: c$2,
				l: e.subarray(r$1 + i$2)
			};
		}
	},
	_int: {
		encode(t) {
			const { Err: e } = xt$2;
			if (t < Et$3) throw new e("integer: negative integers are not allowed");
			let n$1 = De$2(t);
			if (Number.parseInt(n$1[0], 16) & 8 && (n$1 = "00" + n$1), n$1.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
			return n$1;
		},
		decode(t) {
			const { Err: e } = xt$2;
			if (t[0] & 128) throw new e("invalid signature integer: negative");
			if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
			return Ve$2(t);
		}
	},
	toSig(t) {
		const { Err: e, _int: n$1, _tlv: r$1 } = xt$2, o$1 = tt$3("signature", t), { v: s, l: i$2 } = r$1.decode(48, o$1);
		if (i$2.length) throw new e("invalid signature: left bytes after parsing");
		const { v: c$2, l: f$5 } = r$1.decode(2, s), { v: u$1, l: a$1 } = r$1.decode(2, f$5);
		if (a$1.length) throw new e("invalid signature: left bytes after parsing");
		return {
			r: n$1.decode(c$2),
			s: n$1.decode(u$1)
		};
	},
	hexFromSig(t) {
		const { _tlv: e, _int: n$1 } = xt$2, s = e.encode(2, n$1.encode(t.r)) + e.encode(2, n$1.encode(t.s));
		return e.encode(48, s);
	}
}, Et$3 = BigInt(0), ne$1 = BigInt(1), Wo$1 = BigInt(2), Ze$2 = BigInt(3), Qf = BigInt(4);
function re$2(t, e) {
	const { BYTES: n$1 } = t;
	let r$1;
	if (typeof e == "bigint") r$1 = e;
	else {
		let o$1 = tt$3("private key", e);
		try {
			r$1 = t.fromBytes(o$1);
		} catch {
			throw new Error(`invalid private key: expected ui8a of size ${n$1}, got ${typeof e}`);
		}
	}
	if (!t.isValidNot0(r$1)) throw new Error("invalid private key: out of range [1..N-1]");
	return r$1;
}
function ta$1(t, e = {}) {
	const n$1 = Df("weierstrass", t, e), { Fp: r$1, Fn: o$1 } = n$1;
	let s = n$1.CURVE;
	const { h: i$2, n: c$2 } = s;
	Ke$3(e, {}, {
		allowInfinityPoint: "boolean",
		clearCofactor: "function",
		isTorsionFree: "function",
		fromBytes: "function",
		toBytes: "function",
		endo: "object",
		wrapPrivateKey: "boolean"
	});
	const { endo: f$5 } = e;
	if (f$5 && (!r$1.is0(s.a) || typeof f$5.beta != "bigint" || !Array.isArray(f$5.basises))) throw new Error("invalid endo: expected \"beta\": bigint and \"basises\": array");
	const u$1 = Jo$1(r$1, o$1);
	function a$1() {
		if (!r$1.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
	}
	function l$1(_$2, p$3, b$4) {
		const { x: g$1, y: x$2 } = p$3.toAffine(), E$3 = r$1.toBytes(g$1);
		if (He$2(b$4, "isCompressed"), b$4) {
			a$1();
			return _t$2(Xo$1(!r$1.isOdd(x$2)), E$3);
		} else return _t$2(Uint8Array.of(4), E$3, r$1.toBytes(x$2));
	}
	function d$3(_$2) {
		Kt$2(_$2, void 0, "Point");
		const { publicKey: p$3, publicKeyUncompressed: b$4 } = u$1, g$1 = _$2.length, x$2 = _$2[0], E$3 = _$2.subarray(1);
		if (g$1 === p$3 && (x$2 === 2 || x$2 === 3)) {
			const I$2 = r$1.fromBytes(E$3);
			if (!r$1.isValid(I$2)) throw new Error("bad point: is not on curve, wrong x");
			const v$4 = m$2(I$2);
			let B$2;
			try {
				B$2 = r$1.sqrt(v$4);
			} catch (D$1) {
				const P$3 = D$1 instanceof Error ? ": " + D$1.message : "";
				throw new Error("bad point: is not on curve, sqrt error" + P$3);
			}
			a$1();
			const A$3 = r$1.isOdd(B$2);
			return (x$2 & 1) === 1 !== A$3 && (B$2 = r$1.neg(B$2)), {
				x: I$2,
				y: B$2
			};
		} else if (g$1 === b$4 && x$2 === 4) {
			const I$2 = r$1.BYTES, v$4 = r$1.fromBytes(E$3.subarray(0, I$2)), B$2 = r$1.fromBytes(E$3.subarray(I$2, I$2 * 2));
			if (!w$2(v$4, B$2)) throw new Error("bad point: is not on curve");
			return {
				x: v$4,
				y: B$2
			};
		} else throw new Error(`bad point: got length ${g$1}, expected compressed=${p$3} or uncompressed=${b$4}`);
	}
	const h$2 = e.toBytes || l$1, y$2 = e.fromBytes || d$3;
	function m$2(_$2) {
		const p$3 = r$1.sqr(_$2), b$4 = r$1.mul(p$3, _$2);
		return r$1.add(r$1.add(b$4, r$1.mul(_$2, s.a)), s.b);
	}
	function w$2(_$2, p$3) {
		const b$4 = r$1.sqr(p$3), g$1 = m$2(_$2);
		return r$1.eql(b$4, g$1);
	}
	if (!w$2(s.Gx, s.Gy)) throw new Error("bad curve params: generator point");
	const U$3 = r$1.mul(r$1.pow(s.a, Ze$2), Qf), F$2 = r$1.mul(r$1.sqr(s.b), BigInt(27));
	if (r$1.is0(r$1.add(U$3, F$2))) throw new Error("bad curve params: a or b");
	function R$3(_$2, p$3, b$4 = !1) {
		if (!r$1.isValid(p$3) || b$4 && r$1.is0(p$3)) throw new Error(`bad point coordinate ${_$2}`);
		return p$3;
	}
	function Z$1(_$2) {
		if (!(_$2 instanceof O$2)) throw new Error("ProjectivePoint expected");
	}
	function H$2(_$2) {
		if (!f$5 || !f$5.basises) throw new Error("no endo");
		return Xf(_$2, f$5.basises, o$1.ORDER);
	}
	const j$4 = No$1((_$2, p$3) => {
		const { X: b$4, Y: g$1, Z: x$2 } = _$2;
		if (r$1.eql(x$2, r$1.ONE)) return {
			x: b$4,
			y: g$1
		};
		const E$3 = _$2.is0();
		p$3 ??= E$3 ? r$1.ONE : r$1.inv(x$2);
		const I$2 = r$1.mul(b$4, p$3), v$4 = r$1.mul(g$1, p$3), B$2 = r$1.mul(x$2, p$3);
		if (E$3) return {
			x: r$1.ZERO,
			y: r$1.ZERO
		};
		if (!r$1.eql(B$2, r$1.ONE)) throw new Error("invZ was invalid");
		return {
			x: I$2,
			y: v$4
		};
	}), L$2 = No$1((_$2) => {
		if (_$2.is0()) {
			if (e.allowInfinityPoint && !r$1.is0(_$2.Y)) return;
			throw new Error("bad point: ZERO");
		}
		const { x: p$3, y: b$4 } = _$2.toAffine();
		if (!r$1.isValid(p$3) || !r$1.isValid(b$4)) throw new Error("bad point: x or y not field elements");
		if (!w$2(p$3, b$4)) throw new Error("bad point: equation left != right");
		if (!_$2.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
		return !0;
	});
	function k$1(_$2, p$3, b$4, g$1, x$2) {
		return b$4 = new O$2(r$1.mul(b$4.X, _$2), b$4.Y, b$4.Z), p$3 = qe$2(g$1, p$3), b$4 = qe$2(x$2, b$4), p$3.add(b$4);
	}
	class O$2 {
		constructor(p$3, b$4, g$1) {
			this.X = R$3("x", p$3), this.Y = R$3("y", b$4, !0), this.Z = R$3("z", g$1), Object.freeze(this);
		}
		static CURVE() {
			return s;
		}
		static fromAffine(p$3) {
			const { x: b$4, y: g$1 } = p$3 || {};
			if (!p$3 || !r$1.isValid(b$4) || !r$1.isValid(g$1)) throw new Error("invalid affine point");
			if (p$3 instanceof O$2) throw new Error("projective point not allowed");
			return r$1.is0(b$4) && r$1.is0(g$1) ? O$2.ZERO : new O$2(b$4, g$1, r$1.ONE);
		}
		static fromBytes(p$3) {
			const b$4 = O$2.fromAffine(y$2(Kt$2(p$3, void 0, "point")));
			return b$4.assertValidity(), b$4;
		}
		static fromHex(p$3) {
			return O$2.fromBytes(tt$3("pointHex", p$3));
		}
		get x() {
			return this.toAffine().x;
		}
		get y() {
			return this.toAffine().y;
		}
		precompute(p$3 = 8, b$4 = !0) {
			return C$4.createCache(this, p$3), b$4 || this.multiply(Ze$2), this;
		}
		assertValidity() {
			L$2(this);
		}
		hasEvenY() {
			const { y: p$3 } = this.toAffine();
			if (!r$1.isOdd) throw new Error("Field doesn't support isOdd");
			return !r$1.isOdd(p$3);
		}
		equals(p$3) {
			Z$1(p$3);
			const { X: b$4, Y: g$1, Z: x$2 } = this, { X: E$3, Y: I$2, Z: v$4 } = p$3, B$2 = r$1.eql(r$1.mul(b$4, v$4), r$1.mul(E$3, x$2)), A$3 = r$1.eql(r$1.mul(g$1, v$4), r$1.mul(I$2, x$2));
			return B$2 && A$3;
		}
		negate() {
			return new O$2(this.X, r$1.neg(this.Y), this.Z);
		}
		double() {
			const { a: p$3, b: b$4 } = s, g$1 = r$1.mul(b$4, Ze$2), { X: x$2, Y: E$3, Z: I$2 } = this;
			let v$4 = r$1.ZERO, B$2 = r$1.ZERO, A$3 = r$1.ZERO, N$3 = r$1.mul(x$2, x$2), D$1 = r$1.mul(E$3, E$3), P$3 = r$1.mul(I$2, I$2), $$2 = r$1.mul(x$2, E$3);
			return $$2 = r$1.add($$2, $$2), A$3 = r$1.mul(x$2, I$2), A$3 = r$1.add(A$3, A$3), v$4 = r$1.mul(p$3, A$3), B$2 = r$1.mul(g$1, P$3), B$2 = r$1.add(v$4, B$2), v$4 = r$1.sub(D$1, B$2), B$2 = r$1.add(D$1, B$2), B$2 = r$1.mul(v$4, B$2), v$4 = r$1.mul($$2, v$4), A$3 = r$1.mul(g$1, A$3), P$3 = r$1.mul(p$3, P$3), $$2 = r$1.sub(N$3, P$3), $$2 = r$1.mul(p$3, $$2), $$2 = r$1.add($$2, A$3), A$3 = r$1.add(N$3, N$3), N$3 = r$1.add(A$3, N$3), N$3 = r$1.add(N$3, P$3), N$3 = r$1.mul(N$3, $$2), B$2 = r$1.add(B$2, N$3), P$3 = r$1.mul(E$3, I$2), P$3 = r$1.add(P$3, P$3), N$3 = r$1.mul(P$3, $$2), v$4 = r$1.sub(v$4, N$3), A$3 = r$1.mul(P$3, D$1), A$3 = r$1.add(A$3, A$3), A$3 = r$1.add(A$3, A$3), new O$2(v$4, B$2, A$3);
		}
		add(p$3) {
			Z$1(p$3);
			const { X: b$4, Y: g$1, Z: x$2 } = this, { X: E$3, Y: I$2, Z: v$4 } = p$3;
			let B$2 = r$1.ZERO, A$3 = r$1.ZERO, N$3 = r$1.ZERO;
			const D$1 = s.a, P$3 = r$1.mul(s.b, Ze$2);
			let $$2 = r$1.mul(b$4, E$3), V$3 = r$1.mul(g$1, I$2), q$2 = r$1.mul(x$2, v$4), G$3 = r$1.add(b$4, g$1), M$4 = r$1.add(E$3, I$2);
			G$3 = r$1.mul(G$3, M$4), M$4 = r$1.add($$2, V$3), G$3 = r$1.sub(G$3, M$4), M$4 = r$1.add(b$4, x$2);
			let Y$2 = r$1.add(E$3, v$4);
			return M$4 = r$1.mul(M$4, Y$2), Y$2 = r$1.add($$2, q$2), M$4 = r$1.sub(M$4, Y$2), Y$2 = r$1.add(g$1, x$2), B$2 = r$1.add(I$2, v$4), Y$2 = r$1.mul(Y$2, B$2), B$2 = r$1.add(V$3, q$2), Y$2 = r$1.sub(Y$2, B$2), N$3 = r$1.mul(D$1, M$4), B$2 = r$1.mul(P$3, q$2), N$3 = r$1.add(B$2, N$3), B$2 = r$1.sub(V$3, N$3), N$3 = r$1.add(V$3, N$3), A$3 = r$1.mul(B$2, N$3), V$3 = r$1.add($$2, $$2), V$3 = r$1.add(V$3, $$2), q$2 = r$1.mul(D$1, q$2), M$4 = r$1.mul(P$3, M$4), V$3 = r$1.add(V$3, q$2), q$2 = r$1.sub($$2, q$2), q$2 = r$1.mul(D$1, q$2), M$4 = r$1.add(M$4, q$2), $$2 = r$1.mul(V$3, M$4), A$3 = r$1.add(A$3, $$2), $$2 = r$1.mul(Y$2, M$4), B$2 = r$1.mul(G$3, B$2), B$2 = r$1.sub(B$2, $$2), $$2 = r$1.mul(G$3, V$3), N$3 = r$1.mul(Y$2, N$3), N$3 = r$1.add(N$3, $$2), new O$2(B$2, A$3, N$3);
		}
		subtract(p$3) {
			return this.add(p$3.negate());
		}
		is0() {
			return this.equals(O$2.ZERO);
		}
		multiply(p$3) {
			const { endo: b$4 } = e;
			if (!o$1.isValidNot0(p$3)) throw new Error("invalid scalar: out of range");
			let g$1, x$2;
			const E$3 = (I$2) => C$4.cached(this, I$2, (v$4) => Tn$1(O$2, v$4));
			if (b$4) {
				const { k1neg: I$2, k1: v$4, k2neg: B$2, k2: A$3 } = H$2(p$3), { p: N$3, f: D$1 } = E$3(v$4), { p: P$3, f: $$2 } = E$3(A$3);
				x$2 = D$1.add($$2), g$1 = k$1(b$4.beta, N$3, P$3, I$2, B$2);
			} else {
				const { p: I$2, f: v$4 } = E$3(p$3);
				g$1 = I$2, x$2 = v$4;
			}
			return Tn$1(O$2, [g$1, x$2])[0];
		}
		multiplyUnsafe(p$3) {
			const { endo: b$4 } = e, g$1 = this;
			if (!o$1.isValid(p$3)) throw new Error("invalid scalar: out of range");
			if (p$3 === Et$3 || g$1.is0()) return O$2.ZERO;
			if (p$3 === ne$1) return g$1;
			if (C$4.hasCache(this)) return this.multiply(p$3);
			if (b$4) {
				const { k1neg: x$2, k1: E$3, k2neg: I$2, k2: v$4 } = H$2(p$3), { p1: B$2, p2: A$3 } = Pf(O$2, g$1, E$3, v$4);
				return k$1(b$4.beta, B$2, A$3, x$2, I$2);
			} else return C$4.unsafe(g$1, p$3);
		}
		multiplyAndAddUnsafe(p$3, b$4, g$1) {
			const x$2 = this.multiplyUnsafe(b$4).add(p$3.multiplyUnsafe(g$1));
			return x$2.is0() ? void 0 : x$2;
		}
		toAffine(p$3) {
			return j$4(this, p$3);
		}
		isTorsionFree() {
			const { isTorsionFree: p$3 } = e;
			return i$2 === ne$1 ? !0 : p$3 ? p$3(O$2, this) : C$4.unsafe(this, c$2).is0();
		}
		clearCofactor() {
			const { clearCofactor: p$3 } = e;
			return i$2 === ne$1 ? this : p$3 ? p$3(O$2, this) : this.multiplyUnsafe(i$2);
		}
		isSmallOrder() {
			return this.multiplyUnsafe(i$2).is0();
		}
		toBytes(p$3 = !0) {
			return He$2(p$3, "isCompressed"), this.assertValidity(), h$2(O$2, this, p$3);
		}
		toHex(p$3 = !0) {
			return Jt$2(this.toBytes(p$3));
		}
		toString() {
			return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
		}
		get px() {
			return this.X;
		}
		get py() {
			return this.X;
		}
		get pz() {
			return this.Z;
		}
		toRawBytes(p$3 = !0) {
			return this.toBytes(p$3);
		}
		_setWindowSize(p$3) {
			this.precompute(p$3);
		}
		static normalizeZ(p$3) {
			return Tn$1(O$2, p$3);
		}
		static msm(p$3, b$4) {
			return Hf(O$2, o$1, p$3, b$4);
		}
		static fromPrivateKey(p$3) {
			return O$2.BASE.multiply(re$2(o$1, p$3));
		}
	}
	O$2.BASE = new O$2(s.Gx, s.Gy, r$1.ONE), O$2.ZERO = new O$2(r$1.ZERO, r$1.ONE, r$1.ZERO), O$2.Fp = r$1, O$2.Fn = o$1;
	const T$3 = o$1.BITS, C$4 = new kf(O$2, e.endo ? Math.ceil(T$3 / 2) : T$3);
	return O$2.BASE.precompute(8), O$2;
}
function Xo$1(t) {
	return Uint8Array.of(t ? 2 : 3);
}
function Jo$1(t, e) {
	return {
		secretKey: e.BYTES,
		publicKey: 1 + t.BYTES,
		publicKeyUncompressed: 1 + 2 * t.BYTES,
		publicKeyHasPrefix: !0,
		signature: 2 * e.BYTES
	};
}
function ea$1(t, e = {}) {
	const { Fn: n$1 } = t, r$1 = e.randomBytes || Mt$2, o$1 = Object.assign(Jo$1(t.Fp, n$1), { seed: Vo$1(n$1.ORDER) });
	function s(h$2) {
		try {
			return !!re$2(n$1, h$2);
		} catch {
			return !1;
		}
	}
	function i$2(h$2, y$2) {
		const { publicKey: m$2, publicKeyUncompressed: w$2 } = o$1;
		try {
			const U$3 = h$2.length;
			return y$2 === !0 && U$3 !== m$2 || y$2 === !1 && U$3 !== w$2 ? !1 : !!t.fromBytes(h$2);
		} catch {
			return !1;
		}
	}
	function c$2(h$2 = r$1(o$1.seed)) {
		return Cf(Kt$2(h$2, o$1.seed, "seed"), n$1.ORDER);
	}
	function f$5(h$2, y$2 = !0) {
		return t.BASE.multiply(re$2(n$1, h$2)).toBytes(y$2);
	}
	function u$1(h$2) {
		const y$2 = c$2(h$2);
		return {
			secretKey: y$2,
			publicKey: f$5(y$2)
		};
	}
	function a$1(h$2) {
		if (typeof h$2 == "bigint") return !1;
		if (h$2 instanceof t) return !0;
		const { secretKey: y$2, publicKey: m$2, publicKeyUncompressed: w$2 } = o$1;
		if (n$1.allowedLengths || y$2 === m$2) return;
		const U$3 = tt$3("key", h$2).length;
		return U$3 === m$2 || U$3 === w$2;
	}
	function l$1(h$2, y$2, m$2 = !0) {
		if (a$1(h$2) === !0) throw new Error("first arg must be private key");
		if (a$1(y$2) === !1) throw new Error("second arg must be public key");
		const w$2 = re$2(n$1, h$2);
		return t.fromHex(y$2).multiply(w$2).toBytes(m$2);
	}
	return Object.freeze({
		getPublicKey: f$5,
		getSharedSecret: l$1,
		keygen: u$1,
		Point: t,
		utils: {
			isValidSecretKey: s,
			isValidPublicKey: i$2,
			randomSecretKey: c$2,
			isValidPrivateKey: s,
			randomPrivateKey: c$2,
			normPrivateKeyToScalar: (h$2) => re$2(n$1, h$2),
			precompute(h$2 = 8, y$2 = t.BASE) {
				return y$2.precompute(h$2, !1);
			}
		},
		lengths: o$1
	});
}
function na(t, e, n$1 = {}) {
	_e$2(e), Ke$3(n$1, {}, {
		hmac: "function",
		lowS: "boolean",
		randomBytes: "function",
		bits2int: "function",
		bits2int_modN: "function"
	});
	const r$1 = n$1.randomBytes || Mt$2, o$1 = n$1.hmac || ((b$4, ...g$1) => ke$1(e, b$4, _t$2(...g$1))), { Fp: s, Fn: i$2 } = t, { ORDER: c$2, BITS: f$5 } = i$2, { keygen: u$1, getPublicKey: a$1, getSharedSecret: l$1, utils: d$3, lengths: h$2 } = ea$1(t, n$1), y$2 = {
		prehash: !1,
		lowS: typeof n$1.lowS == "boolean" ? n$1.lowS : !1,
		format: void 0,
		extraEntropy: !1
	}, m$2 = "compact";
	function w$2(b$4) {
		return b$4 > c$2 >> ne$1;
	}
	function U$3(b$4, g$1) {
		if (!i$2.isValidNot0(g$1)) throw new Error(`invalid signature ${b$4}: out of range 1..Point.Fn.ORDER`);
		return g$1;
	}
	function F$2(b$4, g$1) {
		Pn$1(g$1);
		const x$2 = h$2.signature;
		return Kt$2(b$4, g$1 === "compact" ? x$2 : g$1 === "recovered" ? x$2 + 1 : void 0, `${g$1} signature`);
	}
	class R$3 {
		constructor(g$1, x$2, E$3) {
			this.r = U$3("r", g$1), this.s = U$3("s", x$2), E$3 != null && (this.recovery = E$3), Object.freeze(this);
		}
		static fromBytes(g$1, x$2 = m$2) {
			F$2(g$1, x$2);
			let E$3;
			if (x$2 === "der") {
				const { r: A$3, s: N$3 } = xt$2.toSig(Kt$2(g$1));
				return new R$3(A$3, N$3);
			}
			x$2 === "recovered" && (E$3 = g$1[0], x$2 = "compact", g$1 = g$1.subarray(1));
			const I$2 = i$2.BYTES, v$4 = g$1.subarray(0, I$2), B$2 = g$1.subarray(I$2, I$2 * 2);
			return new R$3(i$2.fromBytes(v$4), i$2.fromBytes(B$2), E$3);
		}
		static fromHex(g$1, x$2) {
			return this.fromBytes(Re$3(g$1), x$2);
		}
		addRecoveryBit(g$1) {
			return new R$3(this.r, this.s, g$1);
		}
		recoverPublicKey(g$1) {
			const x$2 = s.ORDER, { r: E$3, s: I$2, recovery: v$4 } = this;
			if (v$4 == null || ![
				0,
				1,
				2,
				3
			].includes(v$4)) throw new Error("recovery id invalid");
			if (c$2 * Wo$1 < x$2 && v$4 > 1) throw new Error("recovery id is ambiguous for h>1 curve");
			const A$3 = v$4 === 2 || v$4 === 3 ? E$3 + c$2 : E$3;
			if (!s.isValid(A$3)) throw new Error("recovery id 2 or 3 invalid");
			const N$3 = s.toBytes(A$3), D$1 = t.fromBytes(_t$2(Xo$1((v$4 & 1) === 0), N$3)), P$3 = i$2.inv(A$3), $$2 = H$2(tt$3("msgHash", g$1)), V$3 = i$2.create(-$$2 * P$3), q$2 = i$2.create(I$2 * P$3), G$3 = t.BASE.multiplyUnsafe(V$3).add(D$1.multiplyUnsafe(q$2));
			if (G$3.is0()) throw new Error("point at infinify");
			return G$3.assertValidity(), G$3;
		}
		hasHighS() {
			return w$2(this.s);
		}
		toBytes(g$1 = m$2) {
			if (Pn$1(g$1), g$1 === "der") return Re$3(xt$2.hexFromSig(this));
			const x$2 = i$2.toBytes(this.r), E$3 = i$2.toBytes(this.s);
			if (g$1 === "recovered") {
				if (this.recovery == null) throw new Error("recovery bit must be present");
				return _t$2(Uint8Array.of(this.recovery), x$2, E$3);
			}
			return _t$2(x$2, E$3);
		}
		toHex(g$1) {
			return Jt$2(this.toBytes(g$1));
		}
		assertValidity() {}
		static fromCompact(g$1) {
			return R$3.fromBytes(tt$3("sig", g$1), "compact");
		}
		static fromDER(g$1) {
			return R$3.fromBytes(tt$3("sig", g$1), "der");
		}
		normalizeS() {
			return this.hasHighS() ? new R$3(this.r, i$2.neg(this.s), this.recovery) : this;
		}
		toDERRawBytes() {
			return this.toBytes("der");
		}
		toDERHex() {
			return Jt$2(this.toBytes("der"));
		}
		toCompactRawBytes() {
			return this.toBytes("compact");
		}
		toCompactHex() {
			return Jt$2(this.toBytes("compact"));
		}
	}
	const Z$1 = n$1.bits2int || function(g$1) {
		if (g$1.length > 8192) throw new Error("input is too large");
		const x$2 = Ve$2(g$1), E$3 = g$1.length * 8 - f$5;
		return E$3 > 0 ? x$2 >> BigInt(E$3) : x$2;
	}, H$2 = n$1.bits2int_modN || function(g$1) {
		return i$2.create(Z$1(g$1));
	}, j$4 = me$2(f$5);
	function L$2(b$4) {
		return Rn$1("num < 2^" + f$5, b$4, Et$3, j$4), i$2.toBytes(b$4);
	}
	function k$1(b$4, g$1) {
		return Kt$2(b$4, void 0, "message"), g$1 ? Kt$2(e(b$4), void 0, "prehashed message") : b$4;
	}
	function O$2(b$4, g$1, x$2) {
		if (["recovered", "canonical"].some((V$3) => V$3 in x$2)) throw new Error("sign() legacy options not supported");
		const { lowS: E$3, prehash: I$2, extraEntropy: v$4 } = Hn$1(x$2, y$2);
		b$4 = k$1(b$4, I$2);
		const B$2 = H$2(b$4), A$3 = re$2(i$2, g$1), N$3 = [L$2(A$3), L$2(B$2)];
		if (v$4 != null && v$4 !== !1) {
			const V$3 = v$4 === !0 ? r$1(h$2.secretKey) : v$4;
			N$3.push(tt$3("extraEntropy", V$3));
		}
		const D$1 = _t$2(...N$3), P$3 = B$2;
		function $$2(V$3) {
			const q$2 = Z$1(V$3);
			if (!i$2.isValidNot0(q$2)) return;
			const G$3 = i$2.inv(q$2), M$4 = t.BASE.multiply(q$2).toAffine(), Y$2 = i$2.create(M$4.x);
			if (Y$2 === Et$3) return;
			const Yt$2 = i$2.create(G$3 * i$2.create(P$3 + Y$2 * A$3));
			if (Yt$2 === Et$3) return;
			let ce$2 = (M$4.x === Y$2 ? 0 : 2) | Number(M$4.y & ne$1), fe$2 = Yt$2;
			return E$3 && w$2(Yt$2) && (fe$2 = i$2.neg(Yt$2), ce$2 ^= 1), new R$3(Y$2, fe$2, ce$2);
		}
		return {
			seed: D$1,
			k2sig: $$2
		};
	}
	function T$3(b$4, g$1, x$2 = {}) {
		b$4 = tt$3("message", b$4);
		const { seed: E$3, k2sig: I$2 } = O$2(b$4, g$1, x$2);
		return Af(e.outputLen, i$2.BYTES, o$1)(E$3, I$2);
	}
	function C$4(b$4) {
		let g$1;
		const x$2 = typeof b$4 == "string" || Ue$4(b$4), E$3 = !x$2 && b$4 !== null && typeof b$4 == "object" && typeof b$4.r == "bigint" && typeof b$4.s == "bigint";
		if (!x$2 && !E$3) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
		if (E$3) g$1 = new R$3(b$4.r, b$4.s);
		else if (x$2) {
			try {
				g$1 = R$3.fromBytes(tt$3("sig", b$4), "der");
			} catch (I$2) {
				if (!(I$2 instanceof xt$2.Err)) throw I$2;
			}
			if (!g$1) try {
				g$1 = R$3.fromBytes(tt$3("sig", b$4), "compact");
			} catch {
				return !1;
			}
		}
		return g$1 || !1;
	}
	function _$2(b$4, g$1, x$2, E$3 = {}) {
		const { lowS: I$2, prehash: v$4, format: B$2 } = Hn$1(E$3, y$2);
		if (x$2 = tt$3("publicKey", x$2), g$1 = k$1(tt$3("message", g$1), v$4), "strict" in E$3) throw new Error("options.strict was renamed to lowS");
		const A$3 = B$2 === void 0 ? C$4(b$4) : R$3.fromBytes(tt$3("sig", b$4), B$2);
		if (A$3 === !1) return !1;
		try {
			const N$3 = t.fromBytes(x$2);
			if (I$2 && A$3.hasHighS()) return !1;
			const { r: D$1, s: P$3 } = A$3, $$2 = H$2(g$1), V$3 = i$2.inv(P$3), q$2 = i$2.create($$2 * V$3), G$3 = i$2.create(D$1 * V$3), M$4 = t.BASE.multiplyUnsafe(q$2).add(N$3.multiplyUnsafe(G$3));
			return M$4.is0() ? !1 : i$2.create(M$4.x) === D$1;
		} catch {
			return !1;
		}
	}
	function p$3(b$4, g$1, x$2 = {}) {
		const { prehash: E$3 } = Hn$1(x$2, y$2);
		return g$1 = k$1(g$1, E$3), R$3.fromBytes(b$4, "recovered").recoverPublicKey(g$1).toBytes();
	}
	return Object.freeze({
		keygen: u$1,
		getPublicKey: a$1,
		getSharedSecret: l$1,
		utils: d$3,
		lengths: h$2,
		Point: t,
		sign: T$3,
		verify: _$2,
		recoverPublicKey: p$3,
		Signature: R$3,
		hash: e
	});
}
function ra(t) {
	const e = {
		a: t.a,
		b: t.b,
		p: t.Fp.ORDER,
		n: t.n,
		h: t.h,
		Gx: t.Gx,
		Gy: t.Gy
	}, n$1 = t.Fp;
	let r$1 = t.allowedPrivateKeyLengths ? Array.from(new Set(t.allowedPrivateKeyLengths.map((i$2) => Math.ceil(i$2 / 2)))) : void 0;
	return {
		CURVE: e,
		curveOpts: {
			Fp: n$1,
			Fn: Ht$2(e.n, {
				BITS: t.nBitLength,
				allowedLengths: r$1,
				modFromBytes: t.wrapPrivateKey
			}),
			allowInfinityPoint: t.allowInfinityPoint,
			endo: t.endo,
			isTorsionFree: t.isTorsionFree,
			clearCofactor: t.clearCofactor,
			fromBytes: t.fromBytes,
			toBytes: t.toBytes
		}
	};
}
function oa(t) {
	const { CURVE: e, curveOpts: n$1 } = ra(t), r$1 = {
		hmac: t.hmac,
		randomBytes: t.randomBytes,
		lowS: t.lowS,
		bits2int: t.bits2int,
		bits2int_modN: t.bits2int_modN
	};
	return {
		CURVE: e,
		curveOpts: n$1,
		hash: t.hash,
		ecdsaOpts: r$1
	};
}
function sa(t, e) {
	const n$1 = e.Point;
	return Object.assign({}, e, {
		ProjectivePoint: n$1,
		CURVE: Object.assign({}, t, Ho$1(n$1.Fn.ORDER, n$1.Fn.BITS))
	});
}
function ia(t) {
	const { CURVE: e, curveOpts: n$1, hash: r$1, ecdsaOpts: o$1 } = oa(t);
	return sa(t, na(ta$1(e, n$1), r$1, o$1));
}
function Dn$1(t, e) {
	const n$1 = (r$1) => ia({
		...t,
		hash: r$1
	});
	return {
		...n$1(e),
		create: n$1
	};
}
var Qo$1 = {
	p: BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"),
	n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
	h: BigInt(1),
	a: BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"),
	b: BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),
	Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
	Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5")
}, ts$1 = {
	p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"),
	n: BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"),
	h: BigInt(1),
	a: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"),
	b: BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"),
	Gx: BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"),
	Gy: BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f")
}, es$1 = {
	p: BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
	n: BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"),
	h: BigInt(1),
	a: BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"),
	b: BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"),
	Gx: BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"),
	Gy: BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650")
}, ca = Ht$2(Qo$1.p), fa = Ht$2(ts$1.p), aa = Ht$2(es$1.p), ua = Dn$1({
	...Qo$1,
	Fp: ca,
	lowS: !1
}, Te$2);
Dn$1({
	...ts$1,
	Fp: fa,
	lowS: !1
}, wc), Dn$1({
	...es$1,
	Fp: aa,
	lowS: !1,
	allowedPrivateKeyLengths: [
		130,
		131,
		132
	]
}, mc);
var la = ua, Vn$1 = "base10", rt$1 = "base16", oe$1 = "base64pad", Ge$1 = "base64url", se$2 = "utf8", da = 0, ns$1 = 1, xe$1 = 12, Kn$1 = 32;
function ha() {
	const t = kn$1.utils.randomPrivateKey(), e = kn$1.getPublicKey(t);
	return {
		privateKey: toString(t, rt$1),
		publicKey: toString(e, rt$1)
	};
}
function pa() {
	return toString(Mt$2(Kn$1), rt$1);
}
function ga(t, e) {
	return toString(Bf(Pe$2, kn$1.getSharedSecret(fromString(t, rt$1), fromString(e, rt$1)), void 0, void 0, Kn$1), rt$1);
}
function ba(t) {
	return toString(Pe$2(fromString(t, rt$1)), rt$1);
}
function ya(t) {
	return toString(Pe$2(fromString(t, se$2)), rt$1);
}
function qn$1(t) {
	return fromString(`${t}`, Vn$1);
}
function Zt$1(t) {
	return Number(toString(t, Vn$1));
}
function rs$1(t) {
	return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function os(t) {
	const e = t.replace(/-/g, "+").replace(/_/g, "/"), n$1 = (4 - e.length % 4) % 4;
	return e + "=".repeat(n$1);
}
function ma(t) {
	const e = qn$1(typeof t.type < "u" ? t.type : 0);
	if (Zt$1(e) === 1 && typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
	const n$1 = typeof t.senderPublicKey < "u" ? fromString(t.senderPublicKey, rt$1) : void 0, r$1 = typeof t.iv < "u" ? fromString(t.iv, rt$1) : Mt$2(xe$1), i$2 = Fn$1({
		type: e,
		sealed: Bo$1(fromString(t.symKey, rt$1), r$1).encrypt(fromString(t.message, se$2)),
		iv: r$1,
		senderPublicKey: n$1
	});
	return t.encoding === "base64url" ? rs$1(i$2) : i$2;
}
function wa(t) {
	const e = fromString(t.symKey, rt$1), { sealed: n$1, iv: r$1 } = ze$1({
		encoded: t.encoded,
		encoding: t.encoding
	}), o$1 = Bo$1(e, r$1).decrypt(n$1);
	if (o$1 === null) throw new Error("Failed to decrypt");
	return toString(o$1, se$2);
}
function va(t, e) {
	const n$1 = qn$1(2), r$1 = Mt$2(xe$1), s = Fn$1({
		type: n$1,
		sealed: fromString(t, se$2),
		iv: r$1
	});
	return e === "base64url" ? rs$1(s) : s;
}
function xa(t, e) {
	const { sealed: n$1 } = ze$1({
		encoded: t,
		encoding: e
	});
	return toString(n$1, se$2);
}
function Fn$1(t) {
	if (Zt$1(t.type) === 2) return toString(concat([t.type, t.sealed]), oe$1);
	if (Zt$1(t.type) === 1) {
		if (typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
		return toString(concat([
			t.type,
			t.senderPublicKey,
			t.iv,
			t.sealed
		]), oe$1);
	}
	return toString(concat([
		t.type,
		t.iv,
		t.sealed
	]), oe$1);
}
function ze$1(t) {
	const n$1 = fromString((t.encoding || "base64pad") === "base64url" ? os(t.encoded) : t.encoded, oe$1), r$1 = n$1.slice(da, ns$1), o$1 = ns$1;
	if (Zt$1(r$1) === 1) {
		const f$5 = o$1 + Kn$1, u$1 = f$5 + xe$1, a$1 = n$1.slice(o$1, f$5), l$1 = n$1.slice(f$5, u$1);
		return {
			type: r$1,
			sealed: n$1.slice(u$1),
			iv: l$1,
			senderPublicKey: a$1
		};
	}
	if (Zt$1(r$1) === 2) return {
		type: r$1,
		sealed: n$1.slice(o$1),
		iv: Mt$2(xe$1)
	};
	const s = o$1 + xe$1, i$2 = n$1.slice(o$1, s);
	return {
		type: r$1,
		sealed: n$1.slice(s),
		iv: i$2
	};
}
function Ea(t, e) {
	const n$1 = ze$1({
		encoded: t,
		encoding: e?.encoding
	});
	return ss$1({
		type: Zt$1(n$1.type),
		senderPublicKey: typeof n$1.senderPublicKey < "u" ? toString(n$1.senderPublicKey, rt$1) : void 0,
		receiverPublicKey: e?.receiverPublicKey
	});
}
function ss$1(t) {
	const e = t?.type || 0;
	if (e === 1) {
		if (typeof t?.senderPublicKey > "u") throw new Error("missing sender public key");
		if (typeof t?.receiverPublicKey > "u") throw new Error("missing receiver public key");
	}
	return {
		type: e,
		senderPublicKey: t?.senderPublicKey,
		receiverPublicKey: t?.receiverPublicKey
	};
}
function Ba(t) {
	return t.type === 1 && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
function Ia(t) {
	return t.type === 2;
}
function is$1(t) {
	const e = Buffer.from(t.x, "base64"), n$1 = Buffer.from(t.y, "base64");
	return concat([
		new Uint8Array([4]),
		e,
		n$1
	]);
}
function Aa(t, e) {
	const [n$1, r$1, o$1] = t.split("."), s = Buffer.from(os(o$1), "base64");
	if (s.length !== 64) throw new Error("Invalid signature length");
	const i$2 = s.slice(0, 32), c$2 = s.slice(32, 64), u$1 = Pe$2(`${n$1}.${r$1}`), a$1 = is$1(e);
	if (!la.verify(concat([i$2, c$2]), u$1, a$1)) throw new Error("Invalid signature");
	return sn(t).payload;
}
function Sa(t) {
	return t?.relay || { protocol: "irn" };
}
function Oa(t) {
	const e = C$3[t];
	if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${t}`);
	return e;
}
var Na = Object.defineProperty, Ua = Object.defineProperties, _a = Object.getOwnPropertyDescriptors, fs = Object.getOwnPropertySymbols, Ra = Object.prototype.hasOwnProperty, $a = Object.prototype.propertyIsEnumerable, as = (t, e, n$1) => e in t ? Na(t, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n$1
}) : t[e] = n$1, Zn$1 = (t, e) => {
	for (var n$1 in e || (e = {})) Ra.call(e, n$1) && as(t, n$1, e[n$1]);
	if (fs) for (var n$1 of fs(e)) $a.call(e, n$1) && as(t, n$1, e[n$1]);
	return t;
}, Ta = (t, e) => Ua(t, _a(e));
function us$1(t, e = "-") {
	const n$1 = {}, r$1 = "relay" + e;
	return Object.keys(t).forEach((o$1) => {
		if (o$1.startsWith(r$1)) {
			const s = o$1.replace(r$1, "");
			n$1[s] = t[o$1];
		}
	}), n$1;
}
function Ca(t) {
	if (!t.includes("wc:")) {
		const u$1 = cn$1(t);
		u$1 != null && u$1.includes("wc:") && (t = u$1);
	}
	t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
	const e = t.indexOf(":"), n$1 = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, r$1 = t.substring(0, e), o$1 = t.substring(e + 1, n$1).split("@"), s = typeof n$1 < "u" ? t.substring(n$1) : "", i$2 = new URLSearchParams(s), c$2 = Object.fromEntries(i$2.entries()), f$5 = typeof c$2.methods == "string" ? c$2.methods.split(",") : void 0;
	return {
		protocol: r$1,
		topic: ls(o$1[0]),
		version: parseInt(o$1[1], 10),
		symKey: c$2.symKey,
		relay: us$1(c$2),
		methods: f$5,
		expiryTimestamp: c$2.expiryTimestamp ? parseInt(c$2.expiryTimestamp, 10) : void 0
	};
}
function ls(t) {
	return t.startsWith("//") ? t.substring(2) : t;
}
function ds(t, e = "-") {
	const n$1 = "relay", r$1 = {};
	return Object.keys(t).forEach((o$1) => {
		const s = o$1, i$2 = n$1 + e + s;
		t[s] && (r$1[i$2] = t[s]);
	}), r$1;
}
function ja(t) {
	const e = new URLSearchParams(), n$1 = Zn$1(Zn$1(Ta(Zn$1({}, ds(t.relay)), { symKey: t.symKey }), t.expiryTimestamp && { expiryTimestamp: t.expiryTimestamp.toString() }), t.methods && { methods: t.methods.join(",") });
	return Object.entries(n$1).sort(([r$1], [o$1]) => r$1.localeCompare(o$1)).forEach(([r$1, o$1]) => {
		o$1 !== void 0 && e.append(r$1, String(o$1));
	}), `${t.protocol}:${t.topic}@${t.version}?${e}`;
}
function La(t, e, n$1) {
	return `${t}?wc_ev=${n$1}&topic=${e}`;
}
var ka = Object.defineProperty, Pa = Object.defineProperties, Ha = Object.getOwnPropertyDescriptors, hs = Object.getOwnPropertySymbols, Da = Object.prototype.hasOwnProperty, Va = Object.prototype.propertyIsEnumerable, ps = (t, e, n$1) => e in t ? ka(t, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n$1
}) : t[e] = n$1, Ma = (t, e) => {
	for (var n$1 in e || (e = {})) Da.call(e, n$1) && ps(t, n$1, e[n$1]);
	if (hs) for (var n$1 of hs(e)) Va.call(e, n$1) && ps(t, n$1, e[n$1]);
	return t;
}, Ka = (t, e) => Pa(t, Ha(e));
function Gt$2(t) {
	const e = [];
	return t.forEach((n$1) => {
		const [r$1, o$1] = n$1.split(":");
		e.push(`${r$1}:${o$1}`);
	}), e;
}
function gs(t) {
	const e = [];
	return Object.values(t).forEach((n$1) => {
		e.push(...Gt$2(n$1.accounts));
	}), [...new Set(e)];
}
function qa(t) {
	const e = [];
	return Object.values(t).forEach((n$1) => {
		e.push(...n$1.methods);
	}), [...new Set(e)];
}
function Fa(t) {
	const e = [];
	return Object.values(t).forEach((n$1) => {
		e.push(...n$1.events);
	}), [...new Set(e)];
}
function bs$1(t, e) {
	const n$1 = [];
	return Object.values(t).forEach((r$1) => {
		Gt$2(r$1.accounts).includes(e) && n$1.push(...r$1.methods);
	}), n$1;
}
function ys(t, e) {
	const n$1 = [];
	return Object.values(t).forEach((r$1) => {
		Gt$2(r$1.accounts).includes(e) && n$1.push(...r$1.events);
	}), n$1;
}
function Gn(t) {
	return t.includes(":");
}
function ms(t) {
	return Gn(t) ? t.split(":")[0] : t;
}
function Ee$1(t) {
	var e, n$1, r$1;
	const o$1 = {};
	if (!Ye(t)) return o$1;
	for (const [s, i$2] of Object.entries(t)) {
		const c$2 = Gn(s) ? [s] : i$2.chains, f$5 = i$2.methods || [], u$1 = i$2.events || [], a$1 = ms(s);
		o$1[a$1] = Ka(Ma({}, o$1[a$1]), {
			chains: ut(c$2, (e = o$1[a$1]) == null ? void 0 : e.chains),
			methods: ut(f$5, (n$1 = o$1[a$1]) == null ? void 0 : n$1.methods),
			events: ut(u$1, (r$1 = o$1[a$1]) == null ? void 0 : r$1.events)
		});
	}
	return o$1;
}
function ws(t) {
	const e = {};
	return t?.forEach((n$1) => {
		var r$1;
		const [o$1, s] = n$1.split(":");
		e[o$1] || (e[o$1] = {
			accounts: [],
			chains: [],
			events: [],
			methods: []
		}), e[o$1].accounts.push(n$1), (r$1 = e[o$1].chains) == null || r$1.push(`${o$1}:${s}`);
	}), e;
}
function za(t, e) {
	e = e.map((r$1) => r$1.replace("did:pkh:", ""));
	const n$1 = ws(e);
	for (const [r$1, o$1] of Object.entries(n$1)) o$1.methods ? o$1.methods = ut(o$1.methods, t) : o$1.methods = t, o$1.events = ["chainChanged", "accountsChanged"];
	return n$1;
}
function Ya(t, e) {
	var n$1, r$1, o$1, s, i$2, c$2;
	const f$5 = Ee$1(t), u$1 = Ee$1(e), a$1 = {}, l$1 = Object.keys(f$5).concat(Object.keys(u$1));
	for (const d$3 of l$1) a$1[d$3] = {
		chains: ut((n$1 = f$5[d$3]) == null ? void 0 : n$1.chains, (r$1 = u$1[d$3]) == null ? void 0 : r$1.chains),
		methods: ut((o$1 = f$5[d$3]) == null ? void 0 : o$1.methods, (s = u$1[d$3]) == null ? void 0 : s.methods),
		events: ut((i$2 = f$5[d$3]) == null ? void 0 : i$2.events, (c$2 = u$1[d$3]) == null ? void 0 : c$2.events)
	};
	return a$1;
}
var vs$1 = {
	INVALID_METHOD: {
		message: "Invalid method.",
		code: 1001
	},
	INVALID_EVENT: {
		message: "Invalid event.",
		code: 1002
	},
	INVALID_UPDATE_REQUEST: {
		message: "Invalid update request.",
		code: 1003
	},
	INVALID_EXTEND_REQUEST: {
		message: "Invalid extend request.",
		code: 1004
	},
	INVALID_SESSION_SETTLE_REQUEST: {
		message: "Invalid session settle request.",
		code: 1005
	},
	UNAUTHORIZED_METHOD: {
		message: "Unauthorized method.",
		code: 3001
	},
	UNAUTHORIZED_EVENT: {
		message: "Unauthorized event.",
		code: 3002
	},
	UNAUTHORIZED_UPDATE_REQUEST: {
		message: "Unauthorized update request.",
		code: 3003
	},
	UNAUTHORIZED_EXTEND_REQUEST: {
		message: "Unauthorized extend request.",
		code: 3004
	},
	USER_REJECTED: {
		message: "User rejected.",
		code: 5e3
	},
	USER_REJECTED_CHAINS: {
		message: "User rejected chains.",
		code: 5001
	},
	USER_REJECTED_METHODS: {
		message: "User rejected methods.",
		code: 5002
	},
	USER_REJECTED_EVENTS: {
		message: "User rejected events.",
		code: 5003
	},
	UNSUPPORTED_CHAINS: {
		message: "Unsupported chains.",
		code: 5100
	},
	UNSUPPORTED_METHODS: {
		message: "Unsupported methods.",
		code: 5101
	},
	UNSUPPORTED_EVENTS: {
		message: "Unsupported events.",
		code: 5102
	},
	UNSUPPORTED_ACCOUNTS: {
		message: "Unsupported accounts.",
		code: 5103
	},
	UNSUPPORTED_NAMESPACE_KEY: {
		message: "Unsupported namespace key.",
		code: 5104
	},
	USER_DISCONNECTED: {
		message: "User disconnected.",
		code: 6e3
	},
	SESSION_SETTLEMENT_FAILED: {
		message: "Session settlement failed.",
		code: 7e3
	},
	WC_METHOD_UNSUPPORTED: {
		message: "Unsupported wc_ method.",
		code: 10001
	}
}, xs$1 = {
	NOT_INITIALIZED: {
		message: "Not initialized.",
		code: 1
	},
	NO_MATCHING_KEY: {
		message: "No matching key.",
		code: 2
	},
	RESTORE_WILL_OVERRIDE: {
		message: "Restore will override.",
		code: 3
	},
	RESUBSCRIBED: {
		message: "Resubscribed.",
		code: 4
	},
	MISSING_OR_INVALID: {
		message: "Missing or invalid.",
		code: 5
	},
	EXPIRED: {
		message: "Expired.",
		code: 6
	},
	UNKNOWN_TYPE: {
		message: "Unknown type.",
		code: 7
	},
	MISMATCHED_TOPIC: {
		message: "Mismatched topic.",
		code: 8
	},
	NON_CONFORMING_NAMESPACES: {
		message: "Non conforming namespaces.",
		code: 9
	}
};
function Bt$1(t, e) {
	const { message: n$1, code: r$1 } = xs$1[t];
	return {
		message: e ? `${n$1} ${e}` : n$1,
		code: r$1
	};
}
function zt(t, e) {
	const { message: n$1, code: r$1 } = vs$1[t];
	return {
		message: e ? `${n$1} ${e}` : n$1,
		code: r$1
	};
}
function Be(t, e) {
	return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function Ye(t) {
	return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function Dt$1(t) {
	return typeof t > "u";
}
function ft$1(t, e) {
	return e && Dt$1(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function We$2(t, e) {
	return e && Dt$1(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function Wa(t, e) {
	const { requiredNamespaces: n$1 } = e, r$1 = Object.keys(t.namespaces), o$1 = Object.keys(n$1);
	let s = !0;
	return At$2(o$1, r$1) ? (r$1.forEach((i$2) => {
		const { accounts: c$2, methods: f$5, events: u$1 } = t.namespaces[i$2], a$1 = Gt$2(c$2), l$1 = n$1[i$2];
		(!At$2(Se$2(i$2, l$1), a$1) || !At$2(l$1.methods, f$5) || !At$2(l$1.events, u$1)) && (s = !1);
	}), s) : !1;
}
function Ie$2(t) {
	return ft$1(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function Es(t) {
	if (ft$1(t, !1) && t.includes(":")) {
		const e = t.split(":");
		if (e.length === 3) {
			const n$1 = e[0] + ":" + e[1];
			return !!e[2] && Ie$2(n$1);
		}
	}
	return !1;
}
function Xa(t) {
	function e(n$1) {
		try {
			return typeof new URL(n$1) < "u";
		} catch {
			return !1;
		}
	}
	try {
		if (ft$1(t, !1)) {
			if (e(t)) return !0;
			return e(cn$1(t));
		}
	} catch {}
	return !1;
}
function Ja(t) {
	var e;
	return (e = t?.proposer) == null ? void 0 : e.publicKey;
}
function Qa(t) {
	return t?.topic;
}
function tu(t, e) {
	let n$1 = null;
	return ft$1(t?.publicKey, !1) || (n$1 = Bt$1("MISSING_OR_INVALID", `${e} controller public key should be a string`)), n$1;
}
function zn$1(t) {
	let e = !0;
	return Be(t) ? t.length && (e = t.every((n$1) => ft$1(n$1, !1))) : e = !1, e;
}
function Bs(t, e, n$1) {
	let r$1 = null;
	return Be(e) && e.length ? e.forEach((o$1) => {
		r$1 || Ie$2(o$1) || (r$1 = zt("UNSUPPORTED_CHAINS", `${n$1}, chain ${o$1} should be a string and conform to "namespace:chainId" format`));
	}) : Ie$2(t) || (r$1 = zt("UNSUPPORTED_CHAINS", `${n$1}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), r$1;
}
function Is$1(t, e, n$1) {
	let r$1 = null;
	return Object.entries(t).forEach(([o$1, s]) => {
		if (r$1) return;
		const i$2 = Bs(o$1, Se$2(o$1, s), `${e} ${n$1}`);
		i$2 && (r$1 = i$2);
	}), r$1;
}
function As$1(t, e) {
	let n$1 = null;
	return Be(t) ? t.forEach((r$1) => {
		n$1 || Es(r$1) || (n$1 = zt("UNSUPPORTED_ACCOUNTS", `${e}, account ${r$1} should be a string and conform to "namespace:chainId:address" format`));
	}) : n$1 = zt("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), n$1;
}
function Ss$1(t, e) {
	let n$1 = null;
	return Object.values(t).forEach((r$1) => {
		if (n$1) return;
		const o$1 = As$1(r$1?.accounts, `${e} namespace`);
		o$1 && (n$1 = o$1);
	}), n$1;
}
function Os$1(t, e) {
	let n$1 = null;
	return zn$1(t?.methods) ? zn$1(t?.events) || (n$1 = zt("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : n$1 = zt("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), n$1;
}
function Yn$1(t, e) {
	let n$1 = null;
	return Object.values(t).forEach((r$1) => {
		if (n$1) return;
		const o$1 = Os$1(r$1, `${e}, namespace`);
		o$1 && (n$1 = o$1);
	}), n$1;
}
function eu(t, e, n$1) {
	let r$1 = null;
	if (t && Ye(t)) {
		const o$1 = Yn$1(t, e);
		o$1 && (r$1 = o$1);
		const s = Is$1(t, e, n$1);
		s && (r$1 = s);
	} else r$1 = Bt$1("MISSING_OR_INVALID", `${e}, ${n$1} should be an object with data`);
	return r$1;
}
function Ns(t, e) {
	let n$1 = null;
	if (t && Ye(t)) {
		const r$1 = Yn$1(t, e);
		r$1 && (n$1 = r$1);
		const o$1 = Ss$1(t, e);
		o$1 && (n$1 = o$1);
	} else n$1 = Bt$1("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
	return n$1;
}
function Us(t) {
	return ft$1(t.protocol, !0);
}
function nu(t, e) {
	let n$1 = !1;
	return e && !t ? n$1 = !0 : t && Be(t) && t.length && t.forEach((r$1) => {
		n$1 = Us(r$1);
	}), n$1;
}
function ru(t) {
	return typeof t == "number";
}
function ou(t) {
	return typeof t < "u" && true;
}
function su(t) {
	return !(!t || typeof t != "object" || !t.code || !We$2(t.code, !1) || !t.message || !ft$1(t.message, !1));
}
function iu(t) {
	return !(Dt$1(t) || !ft$1(t.method, !1));
}
function cu(t) {
	return !(Dt$1(t) || Dt$1(t.result) && Dt$1(t.error) || !We$2(t.id, !1) || !ft$1(t.jsonrpc, !1));
}
function fu(t) {
	return !(Dt$1(t) || !ft$1(t.name, !1));
}
function au(t, e) {
	return !(!Ie$2(e) || !gs(t).includes(e));
}
function uu(t, e, n$1) {
	return ft$1(n$1, !1) ? bs$1(t, e).includes(n$1) : !1;
}
function lu(t, e, n$1) {
	return ft$1(n$1, !1) ? ys(t, e).includes(n$1) : !1;
}
function _s(t, e, n$1) {
	let r$1 = null;
	const o$1 = du(t), s = hu(e), i$2 = Object.keys(o$1), c$2 = Object.keys(s), f$5 = Rs(Object.keys(t)), u$1 = Rs(Object.keys(e)), a$1 = f$5.filter((l$1) => !u$1.includes(l$1));
	return a$1.length && (r$1 = Bt$1("NON_CONFORMING_NAMESPACES", `${n$1} namespaces keys don't satisfy requiredNamespaces.
      Required: ${a$1.toString()}
      Received: ${Object.keys(e).toString()}`)), At$2(i$2, c$2) || (r$1 = Bt$1("NON_CONFORMING_NAMESPACES", `${n$1} namespaces chains don't satisfy required namespaces.
      Required: ${i$2.toString()}
      Approved: ${c$2.toString()}`)), Object.keys(e).forEach((l$1) => {
		if (!l$1.includes(":") || r$1) return;
		const d$3 = Gt$2(e[l$1].accounts);
		d$3.includes(l$1) || (r$1 = Bt$1("NON_CONFORMING_NAMESPACES", `${n$1} namespaces accounts don't satisfy namespace accounts for ${l$1}
        Required: ${l$1}
        Approved: ${d$3.toString()}`));
	}), i$2.forEach((l$1) => {
		r$1 || (At$2(o$1[l$1].methods, s[l$1].methods) ? At$2(o$1[l$1].events, s[l$1].events) || (r$1 = Bt$1("NON_CONFORMING_NAMESPACES", `${n$1} namespaces events don't satisfy namespace events for ${l$1}`)) : r$1 = Bt$1("NON_CONFORMING_NAMESPACES", `${n$1} namespaces methods don't satisfy namespace methods for ${l$1}`));
	}), r$1;
}
function du(t) {
	const e = {};
	return Object.keys(t).forEach((n$1) => {
		var r$1;
		n$1.includes(":") ? e[n$1] = t[n$1] : (r$1 = t[n$1].chains) == null || r$1.forEach((o$1) => {
			e[o$1] = {
				methods: t[n$1].methods,
				events: t[n$1].events
			};
		});
	}), e;
}
function Rs(t) {
	return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function hu(t) {
	const e = {};
	return Object.keys(t).forEach((n$1) => {
		if (n$1.includes(":")) e[n$1] = t[n$1];
		else Gt$2(t[n$1].accounts)?.forEach((o$1) => {
			e[o$1] = {
				accounts: t[n$1].accounts.filter((s) => s.includes(`${o$1}:`)),
				methods: t[n$1].methods,
				events: t[n$1].events
			};
		});
	}), e;
}
function pu(t, e) {
	return We$2(t, !1) && t <= e.max && t >= e.min;
}
function gu() {
	const t = Vt$2();
	return new Promise((e) => {
		switch (t) {
			case et$3.browser:
				e($s$1());
				break;
			case et$3.reactNative:
				e(Ts$1());
				break;
			case et$3.node:
				e(Cs$1());
				break;
			default: e(!0);
		}
	});
}
function $s$1() {
	return Wt$1() && navigator?.onLine;
}
async function Ts$1() {
	if (It$1() && typeof global < "u" && global != null && global.NetInfo) return (await (global == null ? void 0 : global.NetInfo.fetch()))?.isConnected;
	return !0;
}
function Cs$1() {
	return !0;
}
function bu(t) {
	switch (Vt$2()) {
		case et$3.browser:
			js$1(t);
			break;
		case et$3.reactNative:
			Ls$1(t);
			break;
		case et$3.node: break;
	}
}
function js$1(t) {
	!It$1() && Wt$1() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function Ls$1(t) {
	It$1() && typeof global < "u" && global != null && global.NetInfo && global?.NetInfo.addEventListener((e) => t(e?.isConnected));
}
function yu() {
	var t;
	return Wt$1() && (0, import_cjs$4.getDocument)() ? ((t = (0, import_cjs$4.getDocument)()) == null ? void 0 : t.visibilityState) === "visible" : !0;
}
var Wn$1 = {};
var mu = class {
	static get(e) {
		return Wn$1[e];
	}
	static set(e, n$1) {
		Wn$1[e] = n$1;
	}
	static delete(e) {
		delete Wn$1[e];
	}
};
function ks$1(t) {
	const e = esm_default.decode(t);
	if (e.length < 33) throw new Error("Too short to contain a public key");
	return e.slice(1, 33);
}
function Ps$1({ publicKey: t, signature: e, payload: n$1 }) {
	var r$1;
	const o$1 = Xn$1(n$1.method), s = 128 | parseInt(((r$1 = n$1.version) == null ? void 0 : r$1.toString()) || "4"), i$2 = vu(n$1.address), c$2 = n$1.era === "00" ? new Uint8Array([0]) : Xn$1(n$1.era);
	if (c$2.length !== 1 && c$2.length !== 2) throw new Error("Invalid era length");
	const f$5 = parseInt(n$1.nonce, 16), u$1 = new Uint8Array([f$5 & 255, f$5 >> 8 & 255]), l$1 = Eu(BigInt(`0x${wu(n$1.tip)}`)), d$3 = new Uint8Array([
		0,
		...t,
		i$2,
		...e,
		...c$2,
		...u$1,
		...l$1,
		...o$1
	]), h$2 = xu(d$3.length + 1);
	return new Uint8Array([
		...h$2,
		s,
		...d$3
	]);
}
function Hs$1(t) {
	const n$1 = (0, import_blakejs.blake2b)(Xn$1(t), void 0, 32);
	return "0x" + Buffer.from(n$1).toString("hex");
}
function Xn$1(t) {
	return new Uint8Array(t.replace(/^0x/, "").match(/.{1,2}/g).map((e) => parseInt(e, 16)));
}
function wu(t) {
	return t.startsWith("0x") ? t.slice(2) : t;
}
function vu(t) {
	const e = esm_default.decode(t)[0];
	return e === 42 ? 0 : e === 60 ? 2 : 1;
}
function xu(t) {
	if (t < 64) return new Uint8Array([t << 2]);
	if (t < 16384) {
		const e = t << 2 | 1;
		return new Uint8Array([e & 255, e >> 8 & 255]);
	} else if (t < 1 << 30) {
		const e = t << 2 | 2;
		return new Uint8Array([
			e & 255,
			e >> 8 & 255,
			e >> 16 & 255,
			e >> 24 & 255
		]);
	} else throw new Error("Compact encoding > 2^30 not supported");
}
function Eu(t) {
	if (t < BigInt(1) << BigInt(6)) return new Uint8Array([Number(t << BigInt(2))]);
	if (t < BigInt(1) << BigInt(14)) {
		const e = t << BigInt(2) | BigInt(1);
		return new Uint8Array([Number(e & BigInt(255)), Number(e >> BigInt(8) & BigInt(255))]);
	} else if (t < BigInt(1) << BigInt(30)) {
		const e = t << BigInt(2) | BigInt(2);
		return new Uint8Array([
			Number(e & BigInt(255)),
			Number(e >> BigInt(8) & BigInt(255)),
			Number(e >> BigInt(16) & BigInt(255)),
			Number(e >> BigInt(24) & BigInt(255))
		]);
	} else throw new Error("BigInt compact encoding not supported > 2^30");
}
function Bu(t) {
	const e = Uint8Array.from(Buffer.from(t.signature, "hex")), r$1 = Ps$1({
		publicKey: ks$1(t.transaction.address),
		signature: e,
		payload: t.transaction
	});
	return Hs$1(Buffer.from(r$1).toString("hex"));
}
function Iu({ logger: t, name: e }) {
	const n$1 = typeof t == "string" ? Ue$2({ opts: {
		level: t,
		name: e
	} }).logger : t;
	return n$1.level = typeof t == "string" ? t : t.level, n$1;
}
var a = Object.defineProperty, u = (e, s, r$1) => s in e ? a(e, s, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: r$1
}) : e[s] = r$1, c$1 = (e, s, r$1) => u(e, typeof s != "symbol" ? s + "" : s, r$1);
var h$1 = class extends IEvents {
	constructor(s) {
		super(), this.opts = s, c$1(this, "protocol", "wc"), c$1(this, "version", 2);
	}
};
var p$2 = Object.defineProperty, b$3 = (e, s, r$1) => s in e ? p$2(e, s, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: r$1
}) : e[s] = r$1, v$3 = (e, s, r$1) => b$3(e, typeof s != "symbol" ? s + "" : s, r$1);
var I$1 = class extends IEvents {
	constructor(s, r$1) {
		super(), this.core = s, this.logger = r$1, v$3(this, "records", /* @__PURE__ */ new Map());
	}
};
var y$1 = class {
	constructor(s, r$1) {
		this.logger = s, this.core = r$1;
	}
};
var m$1 = class extends IEvents {
	constructor(s, r$1) {
		super(), this.relayer = s, this.logger = r$1;
	}
};
var d$1 = class extends IEvents {
	constructor(s) {
		super();
	}
};
var f$2 = class {
	constructor(s, r$1, t, q$2) {
		this.core = s, this.logger = r$1, this.name = t;
	}
};
var P$1 = class extends IEvents {
	constructor(s, r$1) {
		super(), this.relayer = s, this.logger = r$1;
	}
};
var S$2 = class extends IEvents {
	constructor(s, r$1) {
		super(), this.core = s, this.logger = r$1;
	}
};
var M$2 = class {
	constructor(s, r$1, t) {
		this.core = s, this.logger = r$1, this.store = t;
	}
};
var O$1 = class {
	constructor(s, r$1) {
		this.projectId = s, this.logger = r$1;
	}
};
var R$1 = class {
	constructor(s, r$1, t) {
		this.core = s, this.logger = r$1, this.telemetryEnabled = t;
	}
};
var T$2 = Object.defineProperty, k = (e, s, r$1) => s in e ? T$2(e, s, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: r$1
}) : e[s] = r$1, i$1 = (e, s, r$1) => k(e, typeof s != "symbol" ? s + "" : s, r$1);
var J$2 = class {
	constructor(s) {
		this.opts = s, i$1(this, "protocol", "wc"), i$1(this, "version", 2);
	}
};
var V$1 = class {
	constructor(s) {
		this.client = s;
	}
};
var import_events$3 = /* @__PURE__ */ __toESM(require_events(), 1);
var import_cjs$1 = require_cjs();
var import_cjs$2 = require_cjs$1(), ge$1 = "core", W$2 = `wc@2:${ge$1}:`, Et$2 = {
	name: ge$1,
	logger: "error"
}, It$3 = { database: ":memory:" }, Tt$1 = "crypto", Me$2 = "client_ed25519_seed", Ct$1 = import_cjs$1.ONE_DAY, Pt$2 = "keychain", Ot$1 = "messages", At$1 = import_cjs$1.SIX_HOURS, xt$1 = "publisher", $t$1 = "error", zt$2 = "relayer", C$2 = {
	message: "relayer_message",
	message_ack: "relayer_message_ack",
	connect: "relayer_connect",
	disconnect: "relayer_disconnect",
	error: "relayer_error",
	connection_stalled: "relayer_connection_stalled",
	transport_closed: "relayer_transport_closed",
	publish: "relayer_publish"
}, M$3 = {
	payload: "payload",
	connect: "connect",
	disconnect: "disconnect",
	error: "error"
}, Pe$1 = "2.23.3", ee$1 = {
	link_mode: "link_mode",
	relay: "relay"
}, ye$1 = {
	inbound: "inbound",
	outbound: "outbound"
}, Ut$1 = "WALLETCONNECT_CLIENT_ID", j$3 = {
	created: "subscription_created",
	deleted: "subscription_deleted",
	expired: "subscription_expired",
	disabled: "subscription_disabled",
	sync: "subscription_sync",
	resubscribed: "subscription_resubscribed"
};
import_cjs$1.THIRTY_DAYS;
var Ft$1 = "subscription";
import_cjs$1.FIVE_SECONDS * 1e3;
var Kt$1 = "pairing";
import_cjs$1.THIRTY_DAYS;
var oe$2 = {
	wc_pairingDelete: {
		req: {
			ttl: import_cjs$1.ONE_DAY,
			prompt: !1,
			tag: 1e3
		},
		res: {
			ttl: import_cjs$1.ONE_DAY,
			prompt: !1,
			tag: 1001
		}
	},
	wc_pairingPing: {
		req: {
			ttl: import_cjs$1.THIRTY_SECONDS,
			prompt: !1,
			tag: 1002
		},
		res: {
			ttl: import_cjs$1.THIRTY_SECONDS,
			prompt: !1,
			tag: 1003
		}
	},
	unregistered_method: {
		req: {
			ttl: import_cjs$1.ONE_DAY,
			prompt: !1,
			tag: 0
		},
		res: {
			ttl: import_cjs$1.ONE_DAY,
			prompt: !1,
			tag: 0
		}
	}
}, ae$1 = {
	create: "pairing_create",
	expire: "pairing_expire",
	delete: "pairing_delete",
	ping: "pairing_ping"
}, V$2 = {
	created: "history_created",
	updated: "history_updated",
	deleted: "history_deleted",
	sync: "history_sync"
}, Vt$1 = "history", Gt$1 = "expirer", q$1 = {
	created: "expirer_created",
	deleted: "expirer_deleted",
	expired: "expirer_expired",
	sync: "expirer_sync"
};
import_cjs$1.ONE_DAY;
var Ht$1 = "verify-api", ir = "https://verify.walletconnect.com", Yt$1 = "https://verify.walletconnect.org", Jt$1 = `${Yt$1}/v3`, Xt$1 = [ir, Yt$1], Zt$2 = "echo", Qt$1 = "https://echo.walletconnect.com", Y$1 = {
	pairing_started: "pairing_started",
	pairing_uri_validation_success: "pairing_uri_validation_success",
	pairing_uri_not_expired: "pairing_uri_not_expired",
	store_new_pairing: "store_new_pairing",
	subscribing_pairing_topic: "subscribing_pairing_topic",
	subscribe_pairing_topic_success: "subscribe_pairing_topic_success",
	existing_pairing: "existing_pairing",
	pairing_not_expired: "pairing_not_expired",
	emit_inactive_pairing: "emit_inactive_pairing",
	emit_session_proposal: "emit_session_proposal",
	subscribing_to_pairing_topic: "subscribing_to_pairing_topic"
}, X$1 = {
	no_wss_connection: "no_wss_connection",
	no_internet_connection: "no_internet_connection",
	malformed_pairing_uri: "malformed_pairing_uri",
	active_pairing_already_exists: "active_pairing_already_exists",
	subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
	pairing_expired: "pairing_expired",
	proposal_expired: "proposal_expired",
	proposal_listener_not_found: "proposal_listener_not_found"
}, rr = {
	session_approve_started: "session_approve_started",
	proposal_not_expired: "proposal_not_expired",
	session_namespaces_validation_success: "session_namespaces_validation_success",
	create_session_topic: "create_session_topic",
	subscribing_session_topic: "subscribing_session_topic",
	subscribe_session_topic_success: "subscribe_session_topic_success",
	publishing_session_approve: "publishing_session_approve",
	session_approve_publish_success: "session_approve_publish_success",
	store_session: "store_session",
	publishing_session_settle: "publishing_session_settle",
	session_settle_publish_success: "session_settle_publish_success",
	session_request_response_started: "session_request_response_started",
	session_request_response_validation_success: "session_request_response_validation_success",
	session_request_response_publish_started: "session_request_response_publish_started"
}, nr = {
	no_internet_connection: "no_internet_connection",
	no_wss_connection: "no_wss_connection",
	proposal_expired: "proposal_expired",
	subscribe_session_topic_failure: "subscribe_session_topic_failure",
	session_approve_publish_failure: "session_approve_publish_failure",
	session_settle_publish_failure: "session_settle_publish_failure",
	session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure",
	proposal_not_found: "proposal_not_found",
	session_request_response_validation_failure: "session_request_response_validation_failure",
	session_request_response_publish_failure: "session_request_response_publish_failure"
}, or = {
	authenticated_session_approve_started: "authenticated_session_approve_started",
	authenticated_session_not_expired: "authenticated_session_not_expired",
	chains_caip2_compliant: "chains_caip2_compliant",
	chains_evm_compliant: "chains_evm_compliant",
	create_authenticated_session_topic: "create_authenticated_session_topic",
	cacaos_verified: "cacaos_verified",
	store_authenticated_session: "store_authenticated_session",
	subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic",
	subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success",
	publishing_authenticated_session_approve: "publishing_authenticated_session_approve",
	authenticated_session_approve_publish_success: "authenticated_session_approve_publish_success"
}, ar = {
	no_internet_connection: "no_internet_connection",
	no_wss_connection: "no_wss_connection",
	missing_session_authenticate_request: "missing_session_authenticate_request",
	session_authenticate_request_expired: "session_authenticate_request_expired",
	chains_caip2_compliant_failure: "chains_caip2_compliant_failure",
	chains_evm_compliant_failure: "chains_evm_compliant_failure",
	invalid_cacao: "invalid_cacao",
	subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure",
	authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure",
	authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found"
}, ei = .1, ti$1 = "event-client", si = "https://pulse.walletconnect.org/batch";
function cr(r$1, e) {
	if (r$1.length >= 255) throw new TypeError("Alphabet too long");
	for (var t = new Uint8Array(256), i$2 = 0; i$2 < t.length; i$2++) t[i$2] = 255;
	for (var s = 0; s < r$1.length; s++) {
		var n$1 = r$1.charAt(s), o$1 = n$1.charCodeAt(0);
		if (t[o$1] !== 255) throw new TypeError(n$1 + " is ambiguous");
		t[o$1] = s;
	}
	var a$1 = r$1.length, c$2 = r$1.charAt(0), h$2 = Math.log(a$1) / Math.log(256), l$1 = Math.log(256) / Math.log(a$1);
	function g$1(u$1) {
		if (u$1 instanceof Uint8Array || (ArrayBuffer.isView(u$1) ? u$1 = new Uint8Array(u$1.buffer, u$1.byteOffset, u$1.byteLength) : Array.isArray(u$1) && (u$1 = Uint8Array.from(u$1))), !(u$1 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
		if (u$1.length === 0) return "";
		for (var m$2 = 0, D$1 = 0, w$2 = 0, E$3 = u$1.length; w$2 !== E$3 && u$1[w$2] === 0;) w$2++, m$2++;
		for (var L$2 = (E$3 - w$2) * l$1 + 1 >>> 0, I$2 = new Uint8Array(L$2); w$2 !== E$3;) {
			for (var k$1 = u$1[w$2], T$3 = 0, S$4 = L$2 - 1; (k$1 !== 0 || T$3 < D$1) && S$4 !== -1; S$4--, T$3++) k$1 += 256 * I$2[S$4] >>> 0, I$2[S$4] = k$1 % a$1 >>> 0, k$1 = k$1 / a$1 >>> 0;
			if (k$1 !== 0) throw new Error("Non-zero carry");
			D$1 = T$3, w$2++;
		}
		for (var O$2 = L$2 - D$1; O$2 !== L$2 && I$2[O$2] === 0;) O$2++;
		for (var te$2 = c$2.repeat(m$2); O$2 < L$2; ++O$2) te$2 += r$1.charAt(I$2[O$2]);
		return te$2;
	}
	function y$2(u$1) {
		if (typeof u$1 != "string") throw new TypeError("Expected String");
		if (u$1.length === 0) return new Uint8Array();
		var m$2 = 0;
		if (u$1[m$2] !== " ") {
			for (var D$1 = 0, w$2 = 0; u$1[m$2] === c$2;) D$1++, m$2++;
			for (var E$3 = (u$1.length - m$2) * h$2 + 1 >>> 0, L$2 = new Uint8Array(E$3); u$1[m$2];) {
				var I$2 = t[u$1.charCodeAt(m$2)];
				if (I$2 === 255) return;
				for (var k$1 = 0, T$3 = E$3 - 1; (I$2 !== 0 || k$1 < w$2) && T$3 !== -1; T$3--, k$1++) I$2 += a$1 * L$2[T$3] >>> 0, L$2[T$3] = I$2 % 256 >>> 0, I$2 = I$2 / 256 >>> 0;
				if (I$2 !== 0) throw new Error("Non-zero carry");
				w$2 = k$1, m$2++;
			}
			if (u$1[m$2] !== " ") {
				for (var S$4 = E$3 - w$2; S$4 !== E$3 && L$2[S$4] === 0;) S$4++;
				for (var O$2 = new Uint8Array(D$1 + (E$3 - S$4)), te$2 = D$1; S$4 !== E$3;) O$2[te$2++] = L$2[S$4++];
				return O$2;
			}
		}
	}
	function _$2(u$1) {
		var m$2 = y$2(u$1);
		if (m$2) return m$2;
		throw new Error(`Non-${e} character`);
	}
	return {
		encode: g$1,
		decodeUnsafe: y$2,
		decode: _$2
	};
}
var lr = cr;
var ri = (r$1) => {
	if (r$1 instanceof Uint8Array && r$1.constructor.name === "Uint8Array") return r$1;
	if (r$1 instanceof ArrayBuffer) return new Uint8Array(r$1);
	if (ArrayBuffer.isView(r$1)) return new Uint8Array(r$1.buffer, r$1.byteOffset, r$1.byteLength);
	throw new Error("Unknown type, must be binary type");
}, ur = (r$1) => new TextEncoder().encode(r$1), dr = (r$1) => new TextDecoder().decode(r$1);
var pr = class {
	constructor(e, t, i$2) {
		this.name = e, this.prefix = t, this.baseEncode = i$2;
	}
	encode(e) {
		if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
		throw Error("Unknown type, must be binary type");
	}
};
var gr = class {
	constructor(e, t, i$2) {
		if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
		this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i$2;
	}
	decode(e) {
		if (typeof e == "string") {
			if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
			return this.baseDecode(e.slice(this.prefix.length));
		} else throw Error("Can only multibase decode strings");
	}
	or(e) {
		return ni(this, e);
	}
};
var yr = class {
	constructor(e) {
		this.decoders = e;
	}
	or(e) {
		return ni(this, e);
	}
	decode(e) {
		const t = e[0], i$2 = this.decoders[t];
		if (i$2) return i$2.decode(e);
		throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
	}
};
var ni = (r$1, e) => new yr({
	...r$1.decoders || { [r$1.prefix]: r$1 },
	...e.decoders || { [e.prefix]: e }
});
var br$1 = class {
	constructor(e, t, i$2, s) {
		this.name = e, this.prefix = t, this.baseEncode = i$2, this.baseDecode = s, this.encoder = new pr(e, t, i$2), this.decoder = new gr(e, t, s);
	}
	encode(e) {
		return this.encoder.encode(e);
	}
	decode(e) {
		return this.decoder.decode(e);
	}
};
var Se$1 = ({ name: r$1, prefix: e, encode: t, decode: i$2 }) => new br$1(r$1, e, t, i$2), me$1 = ({ prefix: r$1, name: e, alphabet: t }) => {
	const { encode: i$2, decode: s } = lr(t, e);
	return Se$1({
		prefix: r$1,
		name: e,
		encode: i$2,
		decode: (n$1) => ri(s(n$1))
	});
}, mr = (r$1, e, t, i$2) => {
	const s = {};
	for (let l$1 = 0; l$1 < e.length; ++l$1) s[e[l$1]] = l$1;
	let n$1 = r$1.length;
	for (; r$1[n$1 - 1] === "=";) --n$1;
	const o$1 = new Uint8Array(n$1 * t / 8 | 0);
	let a$1 = 0, c$2 = 0, h$2 = 0;
	for (let l$1 = 0; l$1 < n$1; ++l$1) {
		const g$1 = s[r$1[l$1]];
		if (g$1 === void 0) throw new SyntaxError(`Non-${i$2} character`);
		c$2 = c$2 << t | g$1, a$1 += t, a$1 >= 8 && (a$1 -= 8, o$1[h$2++] = 255 & c$2 >> a$1);
	}
	if (a$1 >= t || 255 & c$2 << 8 - a$1) throw new SyntaxError("Unexpected end of data");
	return o$1;
}, fr = (r$1, e, t) => {
	const i$2 = e[e.length - 1] === "=", s = (1 << t) - 1;
	let n$1 = "", o$1 = 0, a$1 = 0;
	for (let c$2 = 0; c$2 < r$1.length; ++c$2) for (a$1 = a$1 << 8 | r$1[c$2], o$1 += 8; o$1 > t;) o$1 -= t, n$1 += e[s & a$1 >> o$1];
	if (o$1 && (n$1 += e[s & a$1 << t - o$1]), i$2) for (; n$1.length * t & 7;) n$1 += "=";
	return n$1;
}, x$1 = ({ name: r$1, prefix: e, bitsPerChar: t, alphabet: i$2 }) => Se$1({
	prefix: e,
	name: r$1,
	encode(s) {
		return fr(s, i$2, t);
	},
	decode(s) {
		return mr(s, i$2, t, r$1);
	}
}), Dr = Se$1({
	prefix: "\0",
	name: "identity",
	encode: (r$1) => dr(r$1),
	decode: (r$1) => ur(r$1)
});
var vr = Object.freeze({
	__proto__: null,
	identity: Dr
});
var _r = x$1({
	prefix: "0",
	name: "base2",
	alphabet: "01",
	bitsPerChar: 1
});
var wr$1 = Object.freeze({
	__proto__: null,
	base2: _r
});
var Er = x$1({
	prefix: "7",
	name: "base8",
	alphabet: "01234567",
	bitsPerChar: 3
});
var Ir = Object.freeze({
	__proto__: null,
	base8: Er
});
var Tr = me$1({
	prefix: "9",
	name: "base10",
	alphabet: "0123456789"
});
var Cr = Object.freeze({
	__proto__: null,
	base10: Tr
});
var Pr = x$1({
	prefix: "f",
	name: "base16",
	alphabet: "0123456789abcdef",
	bitsPerChar: 4
}), Sr = x$1({
	prefix: "F",
	name: "base16upper",
	alphabet: "0123456789ABCDEF",
	bitsPerChar: 4
});
var Or = Object.freeze({
	__proto__: null,
	base16: Pr,
	base16upper: Sr
});
var Rr = x$1({
	prefix: "b",
	name: "base32",
	alphabet: "abcdefghijklmnopqrstuvwxyz234567",
	bitsPerChar: 5
}), Ar = x$1({
	prefix: "B",
	name: "base32upper",
	alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
	bitsPerChar: 5
}), xr = x$1({
	prefix: "c",
	name: "base32pad",
	alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
	bitsPerChar: 5
}), Nr = x$1({
	prefix: "C",
	name: "base32padupper",
	alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
	bitsPerChar: 5
}), $r = x$1({
	prefix: "v",
	name: "base32hex",
	alphabet: "0123456789abcdefghijklmnopqrstuv",
	bitsPerChar: 5
}), zr = x$1({
	prefix: "V",
	name: "base32hexupper",
	alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
	bitsPerChar: 5
}), Lr = x$1({
	prefix: "t",
	name: "base32hexpad",
	alphabet: "0123456789abcdefghijklmnopqrstuv=",
	bitsPerChar: 5
}), kr = x$1({
	prefix: "T",
	name: "base32hexpadupper",
	alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
	bitsPerChar: 5
}), jr = x$1({
	prefix: "h",
	name: "base32z",
	alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
	bitsPerChar: 5
});
var Ur = Object.freeze({
	__proto__: null,
	base32: Rr,
	base32upper: Ar,
	base32pad: xr,
	base32padupper: Nr,
	base32hex: $r,
	base32hexupper: zr,
	base32hexpad: Lr,
	base32hexpadupper: kr,
	base32z: jr
});
var Fr = me$1({
	prefix: "k",
	name: "base36",
	alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), Mr = me$1({
	prefix: "K",
	name: "base36upper",
	alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var Kr = Object.freeze({
	__proto__: null,
	base36: Fr,
	base36upper: Mr
});
var Br = me$1({
	name: "base58btc",
	prefix: "z",
	alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), Vr = me$1({
	name: "base58flickr",
	prefix: "Z",
	alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var qr = Object.freeze({
	__proto__: null,
	base58btc: Br,
	base58flickr: Vr
});
var Gr = x$1({
	prefix: "m",
	name: "base64",
	alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
	bitsPerChar: 6
}), Wr = x$1({
	prefix: "M",
	name: "base64pad",
	alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	bitsPerChar: 6
}), Hr = x$1({
	prefix: "u",
	name: "base64url",
	alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
	bitsPerChar: 6
}), Yr = x$1({
	prefix: "U",
	name: "base64urlpad",
	alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
	bitsPerChar: 6
});
var Jr = Object.freeze({
	__proto__: null,
	base64: Gr,
	base64pad: Wr,
	base64url: Hr,
	base64urlpad: Yr
});
var oi = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Xr = oi.reduce((r$1, e, t) => (r$1[t] = e, r$1), []), Zr = oi.reduce((r$1, e, t) => (r$1[e.codePointAt(0)] = t, r$1), []);
function Qr(r$1) {
	return r$1.reduce((e, t) => (e += Xr[t], e), "");
}
function en(r$1) {
	const e = [];
	for (const t of r$1) {
		const i$2 = Zr[t.codePointAt(0)];
		if (i$2 === void 0) throw new Error(`Non-base256emoji character: ${t}`);
		e.push(i$2);
	}
	return new Uint8Array(e);
}
var tn = Se$1({
	prefix: "🚀",
	name: "base256emoji",
	encode: Qr,
	decode: en
});
var sn$1 = Object.freeze({
	__proto__: null,
	base256emoji: tn
}), rn$1 = ci, ai = 128, on = -128, an = Math.pow(2, 31);
function ci(r$1, e, t) {
	e = e || [], t = t || 0;
	for (var i$2 = t; r$1 >= an;) e[t++] = r$1 & 255 | ai, r$1 /= 128;
	for (; r$1 & on;) e[t++] = r$1 & 255 | ai, r$1 >>>= 7;
	return e[t] = r$1 | 0, ci.bytes = t - i$2 + 1, e;
}
var cn = Ve$1, hn = 128, hi$1 = 127;
function Ve$1(r$1, i$2) {
	var t = 0, i$2 = i$2 || 0, s = 0, n$1 = i$2, o$1, a$1 = r$1.length;
	do {
		if (n$1 >= a$1) throw Ve$1.bytes = 0, /* @__PURE__ */ new RangeError("Could not decode varint");
		o$1 = r$1[n$1++], t += s < 28 ? (o$1 & hi$1) << s : (o$1 & hi$1) * Math.pow(2, s), s += 7;
	} while (o$1 >= hn);
	return Ve$1.bytes = n$1 - i$2, t;
}
var ln = Math.pow(2, 7), un = Math.pow(2, 14), dn = Math.pow(2, 21), pn = Math.pow(2, 28), gn = Math.pow(2, 35), yn = Math.pow(2, 42), bn$1 = Math.pow(2, 49), mn = Math.pow(2, 56), fn = Math.pow(2, 63), Dn = function(r$1) {
	return r$1 < ln ? 1 : r$1 < un ? 2 : r$1 < dn ? 3 : r$1 < pn ? 4 : r$1 < gn ? 5 : r$1 < yn ? 6 : r$1 < bn$1 ? 7 : r$1 < mn ? 8 : r$1 < fn ? 9 : 10;
}, li$1 = {
	encode: rn$1,
	decode: cn,
	encodingLength: Dn
};
var ui = (r$1, e, t = 0) => (li$1.encode(r$1, e, t), e), di$1 = (r$1) => li$1.encodingLength(r$1), qe$1 = (r$1, e) => {
	const t = e.byteLength, i$2 = di$1(r$1), s = i$2 + di$1(t), n$1 = new Uint8Array(s + t);
	return ui(r$1, n$1, 0), ui(t, n$1, i$2), n$1.set(e, s), new _n(r$1, t, e, n$1);
};
var _n = class {
	constructor(e, t, i$2, s) {
		this.code = e, this.size = t, this.digest = i$2, this.bytes = s;
	}
};
var pi$1 = ({ name: r$1, code: e, encode: t }) => new wn(r$1, e, t);
var wn = class {
	constructor(e, t, i$2) {
		this.name = e, this.code = t, this.encode = i$2;
	}
	digest(e) {
		if (e instanceof Uint8Array) {
			const t = this.encode(e);
			return t instanceof Uint8Array ? qe$1(this.code, t) : t.then((i$2) => qe$1(this.code, i$2));
		} else throw Error("Unknown type, must be binary type");
	}
};
var gi = (r$1) => async (e) => new Uint8Array(await crypto.subtle.digest(r$1, e)), En = pi$1({
	name: "sha2-256",
	code: 18,
	encode: gi("SHA-256")
}), In = pi$1({
	name: "sha2-512",
	code: 19,
	encode: gi("SHA-512")
});
var Tn = Object.freeze({
	__proto__: null,
	sha256: En,
	sha512: In
});
var yi = 0, Cn = "identity", bi$1 = ri, Pn = (r$1) => qe$1(yi, bi$1(r$1)), Sn = {
	code: yi,
	name: Cn,
	encode: bi$1,
	digest: Pn
};
var On = Object.freeze({
	__proto__: null,
	identity: Sn
});
new TextEncoder(), new TextDecoder();
var mi = {
	...vr,
	...wr$1,
	...Ir,
	...Cr,
	...Or,
	...Ur,
	...Kr,
	...qr,
	...Jr,
	...sn$1
};
({
	...Tn,
	...On
});
function fi(r$1) {
	return globalThis.Buffer != null ? new Uint8Array(r$1.buffer, r$1.byteOffset, r$1.byteLength) : r$1;
}
function Rn(r$1 = 0) {
	return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? fi(globalThis.Buffer.allocUnsafe(r$1)) : new Uint8Array(r$1);
}
function Di(r$1, e, t, i$2) {
	return {
		name: r$1,
		prefix: e,
		encoder: {
			name: r$1,
			prefix: e,
			encode: t
		},
		decoder: { decode: i$2 }
	};
}
var vi$1 = Di("utf8", "u", (r$1) => "u" + new TextDecoder("utf8").decode(r$1), (r$1) => new TextEncoder().encode(r$1.substring(1))), Ge$4 = Di("ascii", "a", (r$1) => {
	let e = "a";
	for (let t = 0; t < r$1.length; t++) e += String.fromCharCode(r$1[t]);
	return e;
}, (r$1) => {
	r$1 = r$1.substring(1);
	const e = Rn(r$1.length);
	for (let t = 0; t < r$1.length; t++) e[t] = r$1.charCodeAt(t);
	return e;
}), An = {
	utf8: vi$1,
	"utf-8": vi$1,
	hex: mi.base16,
	latin1: Ge$4,
	ascii: Ge$4,
	binary: Ge$4,
	...mi
};
function xn(r$1, e = "utf8") {
	const t = An[e];
	if (!t) throw new Error(`Unsupported encoding "${e}"`);
	return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? fi(globalThis.Buffer.from(r$1, "utf-8")) : t.decoder.decode(`${t.prefix}${r$1}`);
}
var Nn = Object.defineProperty, $n = (r$1, e, t) => e in r$1 ? Nn(r$1, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: t
}) : r$1[e] = t, J$3 = (r$1, e, t) => $n(r$1, typeof e != "symbol" ? e + "" : e, t);
var _i$1 = class {
	constructor(e, t) {
		this.core = e, this.logger = t, J$3(this, "keychain", /* @__PURE__ */ new Map()), J$3(this, "name", Pt$2), J$3(this, "version", "0.3"), J$3(this, "initialized", !1), J$3(this, "storagePrefix", W$2), J$3(this, "init", async () => {
			if (!this.initialized) {
				const i$2 = await this.getKeyChain();
				typeof i$2 < "u" && (this.keychain = i$2), this.initialized = !0;
			}
		}), J$3(this, "has", (i$2) => (this.isInitialized(), this.keychain.has(i$2))), J$3(this, "set", async (i$2, s) => {
			this.isInitialized(), this.keychain.set(i$2, s), await this.persist();
		}), J$3(this, "get", (i$2) => {
			this.isInitialized();
			const s = this.keychain.get(i$2);
			if (typeof s > "u") {
				const { message: n$1 } = Bt$1("NO_MATCHING_KEY", `${this.name}: ${i$2}`);
				throw new Error(n$1);
			}
			return s;
		}), J$3(this, "del", async (i$2) => {
			this.isInitialized(), this.keychain.delete(i$2), await this.persist();
		}), this.core = e, this.logger = Re$1(t, this.name);
	}
	get context() {
		return ee$2(this.logger);
	}
	get storageKey() {
		return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
	}
	async setKeyChain(e) {
		await this.core.storage.setItem(this.storageKey, vi(e));
	}
	async getKeyChain() {
		const e = await this.core.storage.getItem(this.storageKey);
		return typeof e < "u" ? xi(e) : void 0;
	}
	async persist() {
		await this.setKeyChain(this.keychain);
	}
	isInitialized() {
		if (!this.initialized) {
			const { message: e } = Bt$1("NOT_INITIALIZED", this.name);
			throw new Error(e);
		}
	}
};
var zn = Object.defineProperty, Ln = (r$1, e, t) => e in r$1 ? zn(r$1, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: t
}) : r$1[e] = t, R$2 = (r$1, e, t) => Ln(r$1, typeof e != "symbol" ? e + "" : e, t);
var wi = class {
	constructor(e, t, i$2) {
		this.core = e, this.logger = t, R$2(this, "name", Tt$1), R$2(this, "keychain"), R$2(this, "randomSessionIdentifier", pa()), R$2(this, "initialized", !1), R$2(this, "clientId"), R$2(this, "init", async () => {
			this.initialized || (await this.keychain.init(), this.initialized = !0);
		}), R$2(this, "hasKeys", (s) => (this.isInitialized(), this.keychain.has(s))), R$2(this, "getClientId", async () => {
			if (this.isInitialized(), this.clientId) return this.clientId;
			const o$1 = Qe$2(Po$2(await this.getClientSeed()).publicKey);
			return this.clientId = o$1, o$1;
		}), R$2(this, "generateKeyPair", () => {
			this.isInitialized();
			const s = ha();
			return this.setPrivateKey(s.publicKey, s.privateKey);
		}), R$2(this, "signJWT", async (s) => {
			this.isInitialized();
			const o$1 = Po$2(await this.getClientSeed()), a$1 = this.randomSessionIdentifier;
			return await Qo$2(a$1, s, Ct$1, o$1);
		}), R$2(this, "generateSharedKey", (s, n$1, o$1) => {
			this.isInitialized();
			const c$2 = ga(this.getPrivateKey(s), n$1);
			return this.setSymKey(c$2, o$1);
		}), R$2(this, "setSymKey", async (s, n$1) => {
			this.isInitialized();
			const o$1 = n$1 || ba(s);
			return await this.keychain.set(o$1, s), o$1;
		}), R$2(this, "deleteKeyPair", async (s) => {
			this.isInitialized(), await this.keychain.del(s);
		}), R$2(this, "deleteSymKey", async (s) => {
			this.isInitialized(), await this.keychain.del(s);
		}), R$2(this, "encode", async (s, n$1, o$1) => {
			this.isInitialized();
			const a$1 = ss$1(o$1), c$2 = safeJsonStringify(n$1);
			if (Ia(a$1)) return va(c$2, o$1?.encoding);
			if (Ba(a$1)) {
				const y$2 = a$1.senderPublicKey, _$2 = a$1.receiverPublicKey;
				s = await this.generateSharedKey(y$2, _$2);
			}
			const h$2 = this.getSymKey(s), { type: l$1, senderPublicKey: g$1 } = a$1;
			return ma({
				type: l$1,
				symKey: h$2,
				message: c$2,
				senderPublicKey: g$1,
				encoding: o$1?.encoding
			});
		}), R$2(this, "decode", async (s, n$1, o$1) => {
			this.isInitialized();
			const a$1 = Ea(n$1, o$1);
			if (Ia(a$1)) return safeJsonParse(xa(n$1, o$1?.encoding));
			if (Ba(a$1)) {
				const c$2 = a$1.receiverPublicKey, h$2 = a$1.senderPublicKey;
				s = await this.generateSharedKey(c$2, h$2);
			}
			try {
				return safeJsonParse(wa({
					symKey: this.getSymKey(s),
					encoded: n$1,
					encoding: o$1?.encoding
				}));
			} catch (c$2) {
				this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(c$2);
			}
		}), R$2(this, "getPayloadType", (s, n$1 = oe$1) => {
			return Zt$1(ze$1({
				encoded: s,
				encoding: n$1
			}).type);
		}), R$2(this, "getPayloadSenderPublicKey", (s, n$1 = oe$1) => {
			const o$1 = ze$1({
				encoded: s,
				encoding: n$1
			});
			return o$1.senderPublicKey ? toString(o$1.senderPublicKey, rt$1) : void 0;
		}), this.core = e, this.logger = Re$1(t, this.name), this.keychain = i$2 || new _i$1(this.core, this.logger);
	}
	get context() {
		return ee$2(this.logger);
	}
	async setPrivateKey(e, t) {
		return await this.keychain.set(e, t), e;
	}
	getPrivateKey(e) {
		return this.keychain.get(e);
	}
	async getClientSeed() {
		let e = "";
		try {
			e = this.keychain.get(Me$2);
		} catch {
			e = pa(), await this.keychain.set(Me$2, e);
		}
		return xn(e, "base16");
	}
	getSymKey(e) {
		return this.keychain.get(e);
	}
	isInitialized() {
		if (!this.initialized) {
			const { message: e } = Bt$1("NOT_INITIALIZED", this.name);
			throw new Error(e);
		}
	}
};
var kn = Object.defineProperty, jn = Object.defineProperties, Un = Object.getOwnPropertyDescriptors, Ei = Object.getOwnPropertySymbols, Fn = Object.prototype.hasOwnProperty, Mn = Object.prototype.propertyIsEnumerable, We$1 = (r$1, e, t) => e in r$1 ? kn(r$1, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: t
}) : r$1[e] = t, Kn = (r$1, e) => {
	for (var t in e || (e = {})) Fn.call(e, t) && We$1(r$1, t, e[t]);
	if (Ei) for (var t of Ei(e)) Mn.call(e, t) && We$1(r$1, t, e[t]);
	return r$1;
}, Bn = (r$1, e) => jn(r$1, Un(e)), K$3 = (r$1, e, t) => We$1(r$1, typeof e != "symbol" ? e + "" : e, t);
var Ii = class extends y$1 {
	constructor(e, t) {
		super(e, t), this.logger = e, this.core = t, K$3(this, "messages", /* @__PURE__ */ new Map()), K$3(this, "messagesWithoutClientAck", /* @__PURE__ */ new Map()), K$3(this, "name", Ot$1), K$3(this, "version", "0.3"), K$3(this, "initialized", !1), K$3(this, "storagePrefix", W$2), K$3(this, "init", async () => {
			if (!this.initialized) {
				this.logger.trace("Initialized");
				try {
					const i$2 = await this.getRelayerMessages();
					typeof i$2 < "u" && (this.messages = i$2);
					const s = await this.getRelayerMessagesWithoutClientAck();
					typeof s < "u" && (this.messagesWithoutClientAck = s), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
						type: "method",
						method: "restore",
						size: this.messages.size
					});
				} catch (i$2) {
					this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i$2);
				} finally {
					this.initialized = !0;
				}
			}
		}), K$3(this, "set", async (i$2, s, n$1) => {
			this.isInitialized();
			const o$1 = ya(s);
			let a$1 = this.messages.get(i$2);
			if (typeof a$1 > "u" && (a$1 = {}), typeof a$1[o$1] < "u") return o$1;
			if (a$1[o$1] = s, this.messages.set(i$2, a$1), n$1 === ye$1.inbound) {
				const c$2 = this.messagesWithoutClientAck.get(i$2) || {};
				this.messagesWithoutClientAck.set(i$2, Bn(Kn({}, c$2), { [o$1]: s }));
			}
			return await this.persist(), o$1;
		}), K$3(this, "get", (i$2) => {
			this.isInitialized();
			let s = this.messages.get(i$2);
			return typeof s > "u" && (s = {}), s;
		}), K$3(this, "getWithoutAck", (i$2) => {
			this.isInitialized();
			const s = {};
			for (const n$1 of i$2) {
				const o$1 = this.messagesWithoutClientAck.get(n$1) || {};
				s[n$1] = Object.values(o$1);
			}
			return s;
		}), K$3(this, "has", (i$2, s) => {
			this.isInitialized();
			return typeof this.get(i$2)[ya(s)] < "u";
		}), K$3(this, "ack", async (i$2, s) => {
			this.isInitialized();
			const n$1 = this.messagesWithoutClientAck.get(i$2);
			if (typeof n$1 > "u") return;
			const o$1 = ya(s);
			delete n$1[o$1], Object.keys(n$1).length === 0 ? this.messagesWithoutClientAck.delete(i$2) : this.messagesWithoutClientAck.set(i$2, n$1), await this.persist();
		}), K$3(this, "del", async (i$2) => {
			this.isInitialized(), this.messages.delete(i$2), this.messagesWithoutClientAck.delete(i$2), await this.persist();
		}), this.logger = Re$1(e, this.name), this.core = t;
	}
	get context() {
		return ee$2(this.logger);
	}
	get storageKey() {
		return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
	}
	get storageKeyWithoutClientAck() {
		return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck";
	}
	async setRelayerMessages(e) {
		await this.core.storage.setItem(this.storageKey, vi(e));
	}
	async setRelayerMessagesWithoutClientAck(e) {
		await this.core.storage.setItem(this.storageKeyWithoutClientAck, vi(e));
	}
	async getRelayerMessages() {
		const e = await this.core.storage.getItem(this.storageKey);
		return typeof e < "u" ? xi(e) : void 0;
	}
	async getRelayerMessagesWithoutClientAck() {
		const e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
		return typeof e < "u" ? xi(e) : void 0;
	}
	async persist() {
		await this.setRelayerMessages(this.messages), await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
	}
	isInitialized() {
		if (!this.initialized) {
			const { message: e } = Bt$1("NOT_INITIALIZED", this.name);
			throw new Error(e);
		}
	}
};
var Vn = Object.defineProperty, qn = Object.defineProperties, Gn$1 = Object.getOwnPropertyDescriptors, Ti$1 = Object.getOwnPropertySymbols, Wn = Object.prototype.hasOwnProperty, Hn = Object.prototype.propertyIsEnumerable, He$1 = (r$1, e, t) => e in r$1 ? Vn(r$1, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: t
}) : r$1[e] = t, ce$1 = (r$1, e) => {
	for (var t in e || (e = {})) Wn.call(e, t) && He$1(r$1, t, e[t]);
	if (Ti$1) for (var t of Ti$1(e)) Hn.call(e, t) && He$1(r$1, t, e[t]);
	return r$1;
}, Ci$1 = (r$1, e) => qn(r$1, Gn$1(e)), G$2 = (r$1, e, t) => He$1(r$1, typeof e != "symbol" ? e + "" : e, t);
var Yn = class extends m$1 {
	constructor(e, t) {
		super(e, t), this.relayer = e, this.logger = t, G$2(this, "events", new import_events$3.EventEmitter()), G$2(this, "name", xt$1), G$2(this, "queue", /* @__PURE__ */ new Map()), G$2(this, "publishTimeout", (0, import_cjs$1.toMiliseconds)(import_cjs$1.ONE_MINUTE)), G$2(this, "initialPublishTimeout", (0, import_cjs$1.toMiliseconds)(import_cjs$1.ONE_SECOND * 15)), G$2(this, "needsTransportRestart", !1), G$2(this, "publish", async (i$2, s, n$1) => {
			var o$1, a$1, c$2, h$2, l$1;
			this.logger.debug("Publishing Payload"), this.logger.trace({
				type: "method",
				method: "publish",
				params: {
					topic: i$2,
					message: s,
					opts: n$1
				}
			});
			const g$1 = n$1?.ttl || At$1, y$2 = n$1?.prompt || !1, _$2 = n$1?.tag || 0, u$1 = n$1?.id || getBigIntRpcId().toString(), m$2 = Oa(Sa().protocol), D$1 = {
				id: u$1,
				method: n$1?.publishMethod || m$2.publish,
				params: ce$1({
					topic: i$2,
					message: s,
					ttl: g$1,
					prompt: y$2,
					tag: _$2,
					attestation: n$1?.attestation
				}, n$1?.tvf)
			}, w$2 = `Failed to publish payload, please try again. id:${u$1} tag:${_$2}`;
			try {
				Dt$1((o$1 = D$1.params) == null ? void 0 : o$1.prompt) && ((a$1 = D$1.params) == null || delete a$1.prompt), Dt$1((c$2 = D$1.params) == null ? void 0 : c$2.tag) && ((h$2 = D$1.params) == null || delete h$2.tag);
				const E$3 = new Promise(async (L$2) => {
					const I$2 = ({ id: T$3 }) => {
						var S$4;
						((S$4 = D$1.id) == null ? void 0 : S$4.toString()) === T$3.toString() && (this.removeRequestFromQueue(T$3), this.relayer.events.removeListener(C$2.publish, I$2), L$2());
					};
					this.relayer.events.on(C$2.publish, I$2);
					const k$1 = Si(new Promise((T$3, S$4) => {
						this.rpcPublish(D$1, n$1).then(T$3).catch((O$2) => {
							this.logger.warn(O$2, O$2?.message), S$4(O$2);
						});
					}), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${u$1} tag:${_$2}`);
					try {
						await k$1, this.events.removeListener(C$2.publish, I$2);
					} catch (T$3) {
						this.queue.set(u$1, {
							request: D$1,
							opts: n$1,
							attempt: 1
						}), this.logger.warn(T$3, T$3?.message);
					}
				});
				this.logger.trace({
					type: "method",
					method: "publish",
					params: {
						id: u$1,
						topic: i$2,
						message: s,
						opts: n$1
					}
				}), await Si(E$3, this.publishTimeout, w$2);
			} catch (E$3) {
				if (this.logger.debug("Failed to Publish Payload"), this.logger.error(E$3), (l$1 = n$1?.internal) != null && l$1.throwOnFailedPublish) throw E$3;
			} finally {
				this.queue.delete(u$1);
			}
		}), G$2(this, "publishCustom", async (i$2) => {
			var s, n$1, o$1, a$1, c$2;
			this.logger.debug("Publishing custom payload"), this.logger.trace({
				type: "method",
				method: "publishCustom",
				params: i$2
			});
			const { payload: h$2, opts: l$1 = {} } = i$2, { attestation: g$1, tvf: y$2, publishMethod: _$2, prompt: u$1, tag: m$2, ttl: D$1 = import_cjs$1.FIVE_MINUTES } = l$1, w$2 = l$1.id || getBigIntRpcId().toString(), E$3 = Oa(Sa().protocol), L$2 = _$2 || E$3.publish, I$2 = {
				id: w$2,
				method: L$2,
				params: ce$1(Ci$1(ce$1({}, h$2), {
					ttl: D$1,
					prompt: u$1,
					tag: m$2,
					attestation: g$1
				}), y$2)
			}, k$1 = `Failed to publish custom payload, please try again. id:${w$2} tag:${m$2}`;
			try {
				Dt$1((s = I$2.params) == null ? void 0 : s.prompt) && ((n$1 = I$2.params) == null || delete n$1.prompt), Dt$1((o$1 = I$2.params) == null ? void 0 : o$1.tag) && ((a$1 = I$2.params) == null || delete a$1.tag);
				const T$3 = new Promise(async (S$4) => {
					const O$2 = ({ id: Z$1 }) => {
						var we$3;
						((we$3 = I$2.id) == null ? void 0 : we$3.toString()) === Z$1.toString() && (this.removeRequestFromQueue(Z$1), this.relayer.events.removeListener(C$2.publish, O$2), S$4());
					};
					this.relayer.events.on(C$2.publish, O$2);
					const te$2 = Si(new Promise((Z$1, we$3) => {
						this.rpcPublish(I$2, l$1).then(Z$1).catch((Ee$2) => {
							this.logger.warn(Ee$2, Ee$2?.message), we$3(Ee$2);
						});
					}), this.initialPublishTimeout, `Failed initial custom payload publish, retrying.... method:${L$2} id:${w$2} tag:${m$2}`);
					try {
						await te$2, this.events.removeListener(C$2.publish, O$2);
					} catch (Z$1) {
						this.queue.set(w$2, {
							request: I$2,
							opts: l$1,
							attempt: 1
						}), this.logger.warn(Z$1, Z$1?.message);
					}
				});
				this.logger.trace({
					type: "method",
					method: "publish",
					params: {
						id: w$2,
						payload: h$2,
						opts: l$1
					}
				}), await Si(T$3, this.publishTimeout, k$1);
			} catch (T$3) {
				if (this.logger.debug("Failed to Publish Payload"), this.logger.error(T$3), (c$2 = l$1?.internal) != null && c$2.throwOnFailedPublish) throw T$3;
			} finally {
				this.queue.delete(w$2);
			}
		}), G$2(this, "on", (i$2, s) => {
			this.events.on(i$2, s);
		}), G$2(this, "once", (i$2, s) => {
			this.events.once(i$2, s);
		}), G$2(this, "off", (i$2, s) => {
			this.events.off(i$2, s);
		}), G$2(this, "removeListener", (i$2, s) => {
			this.events.removeListener(i$2, s);
		}), this.relayer = e, this.logger = Re$1(t, this.name), this.registerEventListeners();
	}
	get context() {
		return ee$2(this.logger);
	}
	async rpcPublish(e, t) {
		this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
			type: "message",
			direction: "outgoing",
			request: e
		});
		const i$2 = await this.relayer.request(e);
		return this.relayer.events.emit(C$2.publish, ce$1(ce$1({}, e), t)), this.logger.debug("Successfully Published Payload"), i$2;
	}
	removeRequestFromQueue(e) {
		this.queue.delete(e);
	}
	checkQueue() {
		this.queue.forEach(async (e, t) => {
			var i$2;
			const s = e.attempt + 1;
			this.queue.set(t, Ci$1(ce$1({}, e), { attempt: s })), this.logger.warn({}, `Publisher: queue->publishing: ${e.request.id}, tag: ${(i$2 = e.request.params) == null ? void 0 : i$2.tag}, attempt: ${s}`), await this.rpcPublish(e.request, e.opts), this.logger.warn({}, `Publisher: queue->published: ${e.request.id}`);
		});
	}
	registerEventListeners() {
		this.relayer.core.heartbeat.on(r.pulse, () => {
			if (this.needsTransportRestart) {
				this.needsTransportRestart = !1, this.relayer.events.emit(C$2.connection_stalled);
				return;
			}
			this.checkQueue();
		}), this.relayer.on(C$2.message_ack, (e) => {
			this.removeRequestFromQueue(e.id.toString());
		});
	}
};
var Jn = Object.defineProperty, Xn = (r$1, e, t) => e in r$1 ? Jn(r$1, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: t
}) : r$1[e] = t, he$1 = (r$1, e, t) => Xn(r$1, typeof e != "symbol" ? e + "" : e, t);
var Zn = class {
	constructor() {
		he$1(this, "map", /* @__PURE__ */ new Map()), he$1(this, "set", (e, t) => {
			const i$2 = this.get(e);
			this.exists(e, t) || this.map.set(e, [...i$2, t]);
		}), he$1(this, "get", (e) => this.map.get(e) || []), he$1(this, "exists", (e, t) => this.get(e).includes(t)), he$1(this, "delete", (e, t) => {
			if (typeof t > "u") {
				this.map.delete(e);
				return;
			}
			if (!this.map.has(e)) return;
			const i$2 = this.get(e);
			if (!this.exists(e, t)) return;
			const s = i$2.filter((n$1) => n$1 !== t);
			if (!s.length) {
				this.map.delete(e);
				return;
			}
			this.map.set(e, s);
		}), he$1(this, "clear", () => {
			this.map.clear();
		});
	}
	get topics() {
		return Array.from(this.map.keys());
	}
};
var Qn = Object.defineProperty, eo = Object.defineProperties, to = Object.getOwnPropertyDescriptors, Pi$1 = Object.getOwnPropertySymbols, io = Object.prototype.hasOwnProperty, so = Object.prototype.propertyIsEnumerable, Ye$2 = (r$1, e, t) => e in r$1 ? Qn(r$1, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: t
}) : r$1[e] = t, fe$1 = (r$1, e) => {
	for (var t in e || (e = {})) io.call(e, t) && Ye$2(r$1, t, e[t]);
	if (Pi$1) for (var t of Pi$1(e)) so.call(e, t) && Ye$2(r$1, t, e[t]);
	return r$1;
}, Je$2 = (r$1, e) => eo(r$1, to(e)), f$4 = (r$1, e, t) => Ye$2(r$1, typeof e != "symbol" ? e + "" : e, t);
var Si$1 = class extends P$1 {
	constructor(e, t) {
		super(e, t), this.relayer = e, this.logger = t, f$4(this, "subscriptions", /* @__PURE__ */ new Map()), f$4(this, "topicMap", new Zn()), f$4(this, "events", new import_events$3.EventEmitter()), f$4(this, "name", Ft$1), f$4(this, "version", "0.3"), f$4(this, "pending", /* @__PURE__ */ new Map()), f$4(this, "cached", []), f$4(this, "initialized", !1), f$4(this, "storagePrefix", W$2), f$4(this, "subscribeTimeout", (0, import_cjs$1.toMiliseconds)(import_cjs$1.ONE_MINUTE)), f$4(this, "initialSubscribeTimeout", (0, import_cjs$1.toMiliseconds)(import_cjs$1.ONE_SECOND * 15)), f$4(this, "clientId"), f$4(this, "batchSubscribeTopicsLimit", 500), f$4(this, "init", async () => {
			this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), await this.restore()), this.initialized = !0;
		}), f$4(this, "subscribe", async (i$2, s) => {
			var n$1;
			this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
				type: "method",
				method: "subscribe",
				params: {
					topic: i$2,
					opts: s
				}
			});
			try {
				const o$1 = Sa(s), a$1 = {
					topic: i$2,
					relay: o$1,
					transportType: s?.transportType
				};
				(n$1 = s?.internal) != null && n$1.skipSubscribe || this.pending.set(i$2, a$1);
				const c$2 = await this.rpcSubscribe(i$2, o$1, s);
				return typeof c$2 == "string" && (this.onSubscribe(c$2, a$1), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
					type: "method",
					method: "subscribe",
					params: {
						topic: i$2,
						opts: s
					}
				})), c$2;
			} catch (o$1) {
				throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(o$1), o$1;
			}
		}), f$4(this, "unsubscribe", async (i$2, s) => {
			this.isInitialized(), typeof s?.id < "u" ? await this.unsubscribeById(i$2, s.id, s) : await this.unsubscribeByTopic(i$2, s);
		}), f$4(this, "isSubscribed", (i$2) => new Promise((s) => {
			s(this.topicMap.topics.includes(i$2));
		})), f$4(this, "isKnownTopic", (i$2) => new Promise((s) => {
			s(this.topicMap.topics.includes(i$2) || this.pending.has(i$2) || this.cached.some((n$1) => n$1.topic === i$2));
		})), f$4(this, "on", (i$2, s) => {
			this.events.on(i$2, s);
		}), f$4(this, "once", (i$2, s) => {
			this.events.once(i$2, s);
		}), f$4(this, "off", (i$2, s) => {
			this.events.off(i$2, s);
		}), f$4(this, "removeListener", (i$2, s) => {
			this.events.removeListener(i$2, s);
		}), f$4(this, "start", async () => {
			await this.onConnect();
		}), f$4(this, "stop", async () => {
			await this.onDisconnect();
		}), f$4(this, "restart", async () => {
			await this.restore(), await this.onRestart();
		}), f$4(this, "checkPending", async () => {
			if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected)) return;
			const i$2 = [];
			this.pending.forEach((s) => {
				i$2.push(s);
			}), await this.batchSubscribe(i$2);
		}), f$4(this, "registerEventListeners", () => {
			this.relayer.core.heartbeat.on(r.pulse, async () => {
				await this.checkPending();
			}), this.events.on(j$3.created, async (i$2) => {
				const s = j$3.created;
				this.logger.info(`Emitting ${s}`), this.logger.debug({
					type: "event",
					event: s,
					data: i$2
				}), await this.persist();
			}), this.events.on(j$3.deleted, async (i$2) => {
				const s = j$3.deleted;
				this.logger.info(`Emitting ${s}`), this.logger.debug({
					type: "event",
					event: s,
					data: i$2
				}), await this.persist();
			});
		}), this.relayer = e, this.logger = Re$1(t, this.name), this.clientId = "";
	}
	get context() {
		return ee$2(this.logger);
	}
	get storageKey() {
		return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
	}
	get length() {
		return this.subscriptions.size;
	}
	get ids() {
		return Array.from(this.subscriptions.keys());
	}
	get values() {
		return Array.from(this.subscriptions.values());
	}
	get topics() {
		return this.topicMap.topics;
	}
	get hasAnyTopics() {
		return this.topicMap.topics.length > 0 || this.pending.size > 0 || this.cached.length > 0 || this.subscriptions.size > 0;
	}
	hasSubscription(e, t) {
		let i$2 = !1;
		try {
			i$2 = this.getSubscription(e).topic === t;
		} catch {}
		return i$2;
	}
	reset() {
		this.cached = [], this.initialized = !0;
	}
	onDisable() {
		this.values.length > 0 && (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
	}
	async unsubscribeByTopic(e, t) {
		const i$2 = this.topicMap.get(e);
		await Promise.all(i$2.map(async (s) => await this.unsubscribeById(e, s, t)));
	}
	async unsubscribeById(e, t, i$2) {
		this.logger.debug("Unsubscribing Topic"), this.logger.trace({
			type: "method",
			method: "unsubscribe",
			params: {
				topic: e,
				id: t,
				opts: i$2
			}
		});
		try {
			const s = Sa(i$2);
			await this.restartToComplete({
				topic: e,
				id: t,
				relay: s
			}), await this.rpcUnsubscribe(e, t, s);
			const n$1 = zt("USER_DISCONNECTED", `${this.name}, ${e}`);
			await this.onUnsubscribe(e, t, n$1), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
				type: "method",
				method: "unsubscribe",
				params: {
					topic: e,
					id: t,
					opts: i$2
				}
			});
		} catch (s) {
			throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
		}
	}
	async rpcSubscribe(e, t, i$2) {
		var s, n$1;
		const o$1 = await this.getSubscriptionId(e);
		if ((s = i$2?.internal) != null && s.skipSubscribe) return o$1;
		(!i$2 || i$2?.transportType === ee$1.relay) && await this.restartToComplete({
			topic: e,
			id: e,
			relay: t
		});
		const a$1 = {
			method: Oa(t.protocol).subscribe,
			params: { topic: e }
		};
		this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
			type: "payload",
			direction: "outgoing",
			request: a$1
		});
		const c$2 = (n$1 = i$2?.internal) == null ? void 0 : n$1.throwOnFailedPublish;
		try {
			if (i$2?.transportType === ee$1.link_mode) return setTimeout(() => {
				(this.relayer.connected || this.relayer.connecting) && this.relayer.request(a$1).catch((g$1) => this.logger.warn(g$1));
			}, (0, import_cjs$1.toMiliseconds)(import_cjs$1.ONE_SECOND)), o$1;
			const l$1 = await Si(new Promise(async (g$1) => {
				const y$2 = (_$2) => {
					_$2.topic === e && (this.events.removeListener(j$3.created, y$2), g$1(_$2.id));
				};
				this.events.on(j$3.created, y$2);
				try {
					const _$2 = await Si(new Promise((u$1, m$2) => {
						this.relayer.request(a$1).catch((D$1) => {
							this.logger.warn(D$1, D$1?.message), m$2(D$1);
						}).then(u$1);
					}), this.initialSubscribeTimeout, `Subscribing to ${e} failed, please try again`);
					this.events.removeListener(j$3.created, y$2), g$1(_$2);
				} catch {}
			}), this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
			if (!l$1 && c$2) throw new Error(`Subscribing to ${e} failed, please try again`);
			return l$1 ? o$1 : null;
		} catch (h$2) {
			if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(C$2.connection_stalled), c$2) throw h$2;
		}
		return null;
	}
	async rpcBatchSubscribe(e) {
		if (!e.length) return;
		const t = e[0].relay, i$2 = {
			method: Oa(t.protocol).batchSubscribe,
			params: { topics: e.map((s) => s.topic) }
		};
		this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
			type: "payload",
			direction: "outgoing",
			request: i$2
		});
		try {
			await await Si(new Promise((s) => {
				this.relayer.request(i$2).catch((n$1) => this.logger.warn(n$1)).then(s);
			}), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again");
		} catch {
			this.relayer.events.emit(C$2.connection_stalled);
		}
	}
	async rpcBatchFetchMessages(e) {
		if (!e.length) return;
		const t = e[0].relay, i$2 = {
			method: Oa(t.protocol).batchFetchMessages,
			params: { topics: e.map((n$1) => n$1.topic) }
		};
		this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
			type: "payload",
			direction: "outgoing",
			request: i$2
		});
		let s;
		try {
			s = await await Si(new Promise((n$1, o$1) => {
				this.relayer.request(i$2).catch((a$1) => {
					this.logger.warn(a$1), o$1(a$1);
				}).then(n$1);
			}), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again");
		} catch {
			this.relayer.events.emit(C$2.connection_stalled);
		}
		return s;
	}
	rpcUnsubscribe(e, t, i$2) {
		const s = {
			method: Oa(i$2.protocol).unsubscribe,
			params: {
				topic: e,
				id: t
			}
		};
		return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
			type: "payload",
			direction: "outgoing",
			request: s
		}), this.relayer.request(s);
	}
	onSubscribe(e, t) {
		this.setSubscription(e, Je$2(fe$1({}, t), { id: e })), this.pending.delete(t.topic);
	}
	onBatchSubscribe(e) {
		e.length && e.forEach((t) => {
			this.setSubscription(t.id, fe$1({}, t)), this.pending.delete(t.topic);
		});
	}
	async onUnsubscribe(e, t, i$2) {
		this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, i$2), await this.relayer.messages.del(e);
	}
	async setRelayerSubscriptions(e) {
		await this.relayer.core.storage.setItem(this.storageKey, e);
	}
	async getRelayerSubscriptions() {
		return await this.relayer.core.storage.getItem(this.storageKey);
	}
	setSubscription(e, t) {
		this.logger.debug("Setting subscription"), this.logger.trace({
			type: "method",
			method: "setSubscription",
			id: e,
			subscription: t
		}), this.addSubscription(e, t);
	}
	addSubscription(e, t) {
		this.subscriptions.set(e, fe$1({}, t)), this.topicMap.set(t.topic, e), this.events.emit(j$3.created, t);
	}
	getSubscription(e) {
		this.logger.debug("Getting subscription"), this.logger.trace({
			type: "method",
			method: "getSubscription",
			id: e
		});
		const t = this.subscriptions.get(e);
		if (!t) {
			const { message: i$2 } = Bt$1("NO_MATCHING_KEY", `${this.name}: ${e}`);
			throw new Error(i$2);
		}
		return t;
	}
	deleteSubscription(e, t) {
		this.logger.debug("Deleting subscription"), this.logger.trace({
			type: "method",
			method: "deleteSubscription",
			id: e,
			reason: t
		});
		const i$2 = this.getSubscription(e);
		this.subscriptions.delete(e), this.topicMap.delete(i$2.topic, e), this.events.emit(j$3.deleted, Je$2(fe$1({}, i$2), { reason: t }));
	}
	async persist() {
		await this.setRelayerSubscriptions(this.values), this.events.emit(j$3.sync);
	}
	async onRestart() {
		if (this.cached.length) {
			const e = [...this.cached], t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
			for (let i$2 = 0; i$2 < t; i$2++) {
				const s = e.splice(0, this.batchSubscribeTopicsLimit);
				await this.batchSubscribe(s);
			}
		}
		this.events.emit(j$3.resubscribed);
	}
	async restore() {
		try {
			const e = await this.getRelayerSubscriptions();
			if (typeof e > "u" || !e.length) return;
			if (this.subscriptions.size && !e.every((t) => {
				var i$2;
				return t.topic === ((i$2 = this.subscriptions.get(t.id)) == null ? void 0 : i$2.topic);
			})) {
				const { message: t } = Bt$1("RESTORE_WILL_OVERRIDE", this.name);
				throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
			}
			this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
				type: "method",
				method: "restore",
				subscriptions: this.values
			});
		} catch (e) {
			this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
		}
	}
	async batchSubscribe(e) {
		e.length && (await this.rpcBatchSubscribe(e), this.onBatchSubscribe(await Promise.all(e.map(async (t) => Je$2(fe$1({}, t), { id: await this.getSubscriptionId(t.topic) })))));
	}
	async batchFetchMessages(e) {
		if (!e.length) return;
		this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
		const t = await this.rpcBatchFetchMessages(e);
		t && t.messages && (await Pi((0, import_cjs$1.toMiliseconds)(import_cjs$1.ONE_SECOND)), await this.relayer.handleBatchMessageEvents(t.messages));
	}
	async onConnect() {
		await this.restart(), this.reset();
	}
	onDisconnect() {
		this.onDisable();
	}
	isInitialized() {
		if (!this.initialized) {
			const { message: e } = Bt$1("NOT_INITIALIZED", this.name);
			throw new Error(e);
		}
	}
	async restartToComplete(e) {
		!this.relayer.connected && !this.relayer.connecting && (this.cached.push(e), await this.relayer.transportOpen());
	}
	async getClientId() {
		return this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()), this.clientId;
	}
	async getSubscriptionId(e) {
		return ya(e + await this.getClientId());
	}
};
var ro$1 = Object.defineProperty, Oi$1 = Object.getOwnPropertySymbols, no$1 = Object.prototype.hasOwnProperty, oo = Object.prototype.propertyIsEnumerable, Xe$1 = (r$1, e, t) => e in r$1 ? ro$1(r$1, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: t
}) : r$1[e] = t, Ri$1 = (r$1, e) => {
	for (var t in e || (e = {})) no$1.call(e, t) && Xe$1(r$1, t, e[t]);
	if (Oi$1) for (var t of Oi$1(e)) oo.call(e, t) && Xe$1(r$1, t, e[t]);
	return r$1;
}, p$1 = (r$1, e, t) => Xe$1(r$1, typeof e != "symbol" ? e + "" : e, t);
var Ai$1 = class extends d$1 {
	constructor(e) {
		var t;
		super(e), p$1(this, "protocol", "wc"), p$1(this, "version", 2), p$1(this, "core"), p$1(this, "logger"), p$1(this, "events", new import_events$3.EventEmitter()), p$1(this, "provider"), p$1(this, "messages"), p$1(this, "subscriber"), p$1(this, "publisher"), p$1(this, "name", zt$2), p$1(this, "transportExplicitlyClosed", !1), p$1(this, "initialized", !1), p$1(this, "connectionAttemptInProgress", !1), p$1(this, "relayUrl"), p$1(this, "projectId"), p$1(this, "packageName"), p$1(this, "bundleId"), p$1(this, "hasExperiencedNetworkDisruption", !1), p$1(this, "pingTimeout"), p$1(this, "heartBeatTimeout", (0, import_cjs$1.toMiliseconds)(import_cjs$1.THIRTY_SECONDS + import_cjs$1.FIVE_SECONDS)), p$1(this, "reconnectTimeout"), p$1(this, "connectPromise"), p$1(this, "reconnectInProgress", !1), p$1(this, "requestsInFlight", []), p$1(this, "connectTimeout", (0, import_cjs$1.toMiliseconds)(import_cjs$1.ONE_SECOND * 15)), p$1(this, "request", async (i$2) => {
			var s, n$1;
			this.logger.debug("Publishing Request Payload");
			const o$1 = i$2.id || getBigIntRpcId().toString();
			await this.toEstablishConnection();
			try {
				this.logger.trace({
					id: o$1,
					method: i$2.method,
					topic: (s = i$2.params) == null ? void 0 : s.topic
				}, "relayer.request - publishing...");
				const a$1 = `${o$1}:${((n$1 = i$2.params) == null ? void 0 : n$1.tag) || ""}`;
				this.requestsInFlight.push(a$1);
				const c$2 = await this.provider.request(i$2);
				return this.requestsInFlight = this.requestsInFlight.filter((h$2) => h$2 !== a$1), c$2;
			} catch (a$1) {
				throw this.logger.debug(`Failed to Publish Request: ${o$1}`), a$1;
			}
		}), p$1(this, "resetPingTimeout", () => {
			rn() && (clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
				var i$2, s, n$1, o$1;
				try {
					this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), (o$1 = (n$1 = (s = (i$2 = this.provider) == null ? void 0 : i$2.connection) == null ? void 0 : s.socket) == null ? void 0 : n$1.terminate) == null || o$1.call(n$1);
				} catch (a$1) {
					this.logger.warn(a$1, a$1?.message);
				}
			}, this.heartBeatTimeout));
		}), p$1(this, "onPayloadHandler", (i$2) => {
			this.onProviderPayload(i$2), this.resetPingTimeout();
		}), p$1(this, "onConnectHandler", () => {
			this.logger.warn({}, "Relayer connected 🛜"), this.startPingTimeout(), this.events.emit(C$2.connect);
		}), p$1(this, "onDisconnectHandler", () => {
			this.logger.warn({}, "Relayer disconnected 🛑"), this.requestsInFlight = [], this.onProviderDisconnect();
		}), p$1(this, "onProviderErrorHandler", (i$2) => {
			this.logger.fatal(`Fatal socket error: ${i$2.message}`), this.events.emit(C$2.error, i$2), this.logger.fatal("Fatal socket error received, closing transport"), this.transportExplicitlyClosed = !0, clearTimeout(this.reconnectTimeout), this.reconnectTimeout = void 0, this.reconnectInProgress = !1, this.transportClose().catch((s) => this.logger.warn(s));
		}), p$1(this, "registerProviderListeners", () => {
			this.provider.on(M$3.payload, this.onPayloadHandler), this.provider.on(M$3.connect, this.onConnectHandler), this.provider.on(M$3.disconnect, this.onDisconnectHandler), this.provider.on(M$3.error, this.onProviderErrorHandler);
		}), this.core = e.core, this.logger = Iu({
			logger: (t = e.logger) != null ? t : $t$1,
			name: this.name
		}), this.messages = new Ii(this.logger, e.core), this.subscriber = new Si$1(this, this.logger), this.publisher = new Yn(this, this.logger), this.projectId = e?.projectId, this.relayUrl = e?.relayUrl || "wss://relay.walletconnect.org", li() ? this.packageName = hi() : di() && (this.bundleId = hi()), this.provider = {};
	}
	async init() {
		this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), this.initialized = !0, this.transportOpen().catch((e) => this.logger.warn(e, e?.message));
	}
	get context() {
		return ee$2(this.logger);
	}
	get connected() {
		var e, t, i$2;
		return ((i$2 = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : i$2.readyState) === 1 || !1;
	}
	get connecting() {
		var e, t, i$2;
		return ((i$2 = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : i$2.readyState) === 0 || this.connectPromise !== void 0 || !1;
	}
	async publish(e, t, i$2) {
		this.isInitialized(), await this.publisher.publish(e, t, i$2), await this.recordMessageEvent({
			topic: e,
			message: t,
			publishedAt: Date.now(),
			transportType: ee$1.relay
		}, ye$1.outbound);
	}
	async publishCustom(e) {
		this.isInitialized(), await this.publisher.publishCustom(e);
	}
	async subscribe(e, t) {
		var i$2, s, n$1;
		this.isInitialized(), (!(t != null && t.transportType) || t?.transportType === "relay") && await this.toEstablishConnection();
		const o$1 = typeof ((i$2 = t?.internal) == null ? void 0 : i$2.throwOnFailedPublish) > "u" ? !0 : (s = t?.internal) == null ? void 0 : s.throwOnFailedPublish;
		let a$1 = ((n$1 = this.subscriber.topicMap.get(e)) == null ? void 0 : n$1[0]) || "", c$2;
		const h$2 = (l$1) => {
			l$1.topic === e && (this.subscriber.off(j$3.created, h$2), c$2());
		};
		return await Promise.all([new Promise((l$1) => {
			c$2 = l$1, this.subscriber.on(j$3.created, h$2);
		}), new Promise(async (l$1, g$1) => {
			a$1 = await this.subscriber.subscribe(e, Ri$1({ internal: { throwOnFailedPublish: o$1 } }, t)).catch((y$2) => {
				o$1 && g$1(y$2);
			}) || a$1, l$1();
		})]), a$1;
	}
	async unsubscribe(e, t) {
		this.isInitialized(), await this.subscriber.unsubscribe(e, t);
	}
	on(e, t) {
		this.events.on(e, t);
	}
	once(e, t) {
		this.events.once(e, t);
	}
	off(e, t) {
		this.events.off(e, t);
	}
	removeListener(e, t) {
		this.events.removeListener(e, t);
	}
	async transportDisconnect() {
		this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await Si(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
	}
	async transportClose() {
		this.transportExplicitlyClosed = !0, clearTimeout(this.reconnectTimeout), this.reconnectTimeout = void 0, this.reconnectInProgress = !1, await this.transportDisconnect();
	}
	async transportOpen(e) {
		if (!this.subscriber.hasAnyTopics) {
			this.logger.info("Starting WS connection skipped because the client has no topics to work with.");
			return;
		}
		if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."), await this.connectPromise, this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (t, i$2) => {
			await this.connect(e).then(t).catch(i$2).finally(() => {
				this.connectPromise = void 0;
			});
		}), await this.connectPromise), !this.connected) throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`);
	}
	async restartTransport(e) {
		this.logger.debug({}, "Restarting transport..."), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
	}
	async confirmOnlineStateOrThrow() {
		if (!await gu()) throw new Error("No internet connection detected. Please restart your network and try again.");
	}
	async handleBatchMessageEvents(e) {
		if (e?.length === 0) {
			this.logger.trace("Batch message events is empty. Ignoring...");
			return;
		}
		const t = e.sort((i$2, s) => i$2.publishedAt - s.publishedAt);
		this.logger.debug(`Batch of ${t.length} message events sorted`);
		for (const i$2 of t) try {
			await this.onMessageEvent(i$2);
		} catch (s) {
			this.logger.warn(s, "Error while processing batch message event: " + s?.message);
		}
		this.logger.trace(`Batch of ${t.length} message events processed`);
	}
	async onLinkMessageEvent(e, t) {
		const { topic: i$2 } = e;
		if (!t.sessionExists) {
			const n$1 = {
				topic: i$2,
				expiry: _i(import_cjs$1.FIVE_MINUTES),
				relay: { protocol: "irn" },
				active: !1
			};
			await this.core.pairing.pairings.set(i$2, n$1);
		}
		this.events.emit(C$2.message, e), await this.recordMessageEvent(e, ye$1.inbound);
	}
	async connect(e) {
		await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect()), this.connectionAttemptInProgress = !0, this.transportExplicitlyClosed = !1;
		let t = 1;
		for (; t < 6;) {
			try {
				if (this.transportExplicitlyClosed) break;
				this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${t}...`), await this.createProvider(), await new Promise(async (i$2, s) => {
					const n$1 = () => {
						s(/* @__PURE__ */ new Error("Connection interrupted while trying to connect"));
					};
					this.provider.once(M$3.disconnect, n$1), await Si(new Promise((o$1, a$1) => {
						this.provider.connect().then(o$1).catch(a$1);
					}), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((o$1) => {
						s(o$1);
					}).finally(() => {
						this.provider.off(M$3.disconnect, n$1), clearTimeout(this.reconnectTimeout);
					}), await new Promise(async (o$1, a$1) => {
						const c$2 = () => {
							s(/* @__PURE__ */ new Error("Connection interrupted while trying to subscribe"));
						};
						this.provider.once(M$3.disconnect, c$2), await this.subscriber.start().then(o$1).catch(a$1).finally(() => {
							this.provider.off(M$3.disconnect, c$2);
						});
					}), this.hasExperiencedNetworkDisruption = !1, i$2();
				});
			} catch (i$2) {
				await this.subscriber.stop();
				const s = i$2;
				this.logger.warn({}, s.message), this.hasExperiencedNetworkDisruption = !0;
			} finally {
				this.connectionAttemptInProgress = !1;
			}
			if (this.connected) {
				this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${t}`);
				break;
			}
			await new Promise((i$2) => setTimeout(i$2, (0, import_cjs$1.toMiliseconds)(t * 1))), t++;
		}
	}
	startPingTimeout() {
		var e, t, i$2, s, n$1;
		if (rn()) try {
			(t = (e = this.provider) == null ? void 0 : e.connection) != null && t.socket && ((n$1 = (s = (i$2 = this.provider) == null ? void 0 : i$2.connection) == null ? void 0 : s.socket) == null || n$1.on("ping", () => {
				this.resetPingTimeout();
			})), this.resetPingTimeout();
		} catch (o$1) {
			this.logger.warn(o$1, o$1?.message);
		}
	}
	async createProvider() {
		this.provider.connection && this.unregisterProviderListeners();
		const e = await this.core.crypto.signJWT(this.relayUrl);
		this.provider = new o(new f$3(bi({
			sdkVersion: Pe$1,
			protocol: this.protocol,
			version: this.version,
			relayUrl: this.relayUrl,
			projectId: this.projectId,
			auth: e,
			useOnCloseEvent: !0,
			bundleId: this.bundleId,
			packageName: this.packageName
		}))), this.registerProviderListeners();
	}
	async recordMessageEvent(e, t) {
		const { topic: i$2, message: s } = e;
		await this.messages.set(i$2, s, t);
	}
	async shouldIgnoreMessageEvent(e) {
		const { topic: t, message: i$2 } = e;
		if (!i$2 || i$2.length === 0) return this.logger.warn(`Ignoring invalid/empty message: ${i$2}`), !0;
		if (!await this.subscriber.isKnownTopic(t)) return this.logger.warn(`Ignoring message for unknown topic ${t}`), !0;
		const s = this.messages.has(t, i$2);
		return s && this.logger.warn(`Ignoring duplicate message: ${i$2}`), s;
	}
	async onProviderPayload(e) {
		if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
			type: "payload",
			direction: "incoming",
			payload: e
		}), isJsonRpcRequest(e)) {
			if (!e.method.endsWith("_subscription")) return;
			const t = e.params, { topic: i$2, message: s, publishedAt: n$1, attestation: o$1 } = t.data, a$1 = {
				topic: i$2,
				message: s,
				publishedAt: n$1,
				transportType: ee$1.relay,
				attestation: o$1
			};
			this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Ri$1({
				type: "event",
				event: t.id
			}, a$1)), this.events.emit(t.id, a$1), await this.acknowledgePayload(e), await this.onMessageEvent(a$1);
		} else isJsonRpcResponse(e) && this.events.emit(C$2.message_ack, e);
	}
	async onMessageEvent(e) {
		await this.shouldIgnoreMessageEvent(e) || (await this.recordMessageEvent(e, ye$1.inbound), this.events.emit(C$2.message, e));
	}
	async acknowledgePayload(e) {
		const t = formatJsonRpcResult(e.id, !0);
		await this.provider.connection.send(t);
	}
	unregisterProviderListeners() {
		this.provider.off(M$3.payload, this.onPayloadHandler), this.provider.off(M$3.connect, this.onConnectHandler), this.provider.off(M$3.disconnect, this.onDisconnectHandler), this.provider.off(M$3.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
	}
	async registerEventListeners() {
		let e = await gu();
		bu(async (t) => {
			e !== t && (e = t, t ? await this.transportOpen().catch((i$2) => this.logger.error(i$2, i$2?.message)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportDisconnect(), this.transportExplicitlyClosed = !1));
		}), this.core.heartbeat.on(r.pulse, async () => {
			if (!this.transportExplicitlyClosed && !this.connected && yu()) try {
				await this.confirmOnlineStateOrThrow(), await this.transportOpen();
			} catch (t) {
				this.logger.warn(t, t?.message);
			}
		});
	}
	async onProviderDisconnect() {
		clearTimeout(this.pingTimeout), this.events.emit(C$2.disconnect), this.connectionAttemptInProgress = !1, !this.reconnectInProgress && (this.reconnectInProgress = !0, await this.subscriber.stop(), this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
			await this.transportOpen().catch((e) => this.logger.error(e, e?.message)), this.reconnectTimeout = void 0, this.reconnectInProgress = !1;
		}, (0, import_cjs$1.toMiliseconds)(.1)))));
	}
	isInitialized() {
		if (!this.initialized) {
			const { message: e } = Bt$1("NOT_INITIALIZED", this.name);
			throw new Error(e);
		}
	}
	async toEstablishConnection() {
		if (await this.confirmOnlineStateOrThrow(), !this.connected) {
			if (this.connectPromise) {
				await this.connectPromise;
				return;
			}
			await this.connect();
		}
	}
};
function ao(r$1, e) {
	return r$1 === e || Number.isNaN(r$1) && Number.isNaN(e);
}
function xi$1(r$1) {
	return Object.getOwnPropertySymbols(r$1).filter((e) => Object.prototype.propertyIsEnumerable.call(r$1, e));
}
function Ni$1(r$1) {
	return r$1 == null ? r$1 === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r$1);
}
var co = "[object RegExp]", ho = "[object String]", lo = "[object Number]", uo = "[object Boolean]", $i$1 = "[object Arguments]", po = "[object Symbol]", go = "[object Date]", yo = "[object Map]", bo = "[object Set]", mo = "[object Array]", fo = "[object Function]", Do = "[object ArrayBuffer]", Ze$1 = "[object Object]", vo = "[object Error]", _o = "[object DataView]", wo = "[object Uint8Array]", Eo = "[object Uint8ClampedArray]", Io = "[object Uint16Array]", To = "[object Uint32Array]", Co = "[object BigUint64Array]", Po = "[object Int8Array]", So = "[object Int16Array]", Oo = "[object Int32Array]", Ro = "[object BigInt64Array]", Ao = "[object Float32Array]", xo = "[object Float64Array]";
function No() {}
function zi(r$1) {
	if (!r$1 || typeof r$1 != "object") return !1;
	const e = Object.getPrototypeOf(r$1);
	return e === null || e === Object.prototype || Object.getPrototypeOf(e) === null ? Object.prototype.toString.call(r$1) === "[object Object]" : !1;
}
function $o(r$1, e, t) {
	return De$1(r$1, e, void 0, void 0, void 0, void 0, t);
}
function De$1(r$1, e, t, i$2, s, n$1, o$1) {
	const a$1 = o$1(r$1, e, t, i$2, s, n$1);
	if (a$1 !== void 0) return a$1;
	if (typeof r$1 == typeof e) switch (typeof r$1) {
		case "bigint":
		case "string":
		case "boolean":
		case "symbol":
		case "undefined": return r$1 === e;
		case "number": return r$1 === e || Object.is(r$1, e);
		case "function": return r$1 === e;
		case "object": return ve$2(r$1, e, n$1, o$1);
	}
	return ve$2(r$1, e, n$1, o$1);
}
function ve$2(r$1, e, t, i$2) {
	if (Object.is(r$1, e)) return !0;
	let s = Ni$1(r$1), n$1 = Ni$1(e);
	if (s === $i$1 && (s = Ze$1), n$1 === $i$1 && (n$1 = Ze$1), s !== n$1) return !1;
	switch (s) {
		case ho: return r$1.toString() === e.toString();
		case lo: return ao(r$1.valueOf(), e.valueOf());
		case uo:
		case go:
		case po: return Object.is(r$1.valueOf(), e.valueOf());
		case co: return r$1.source === e.source && r$1.flags === e.flags;
		case fo: return r$1 === e;
	}
	t = t ?? /* @__PURE__ */ new Map();
	const o$1 = t.get(r$1), a$1 = t.get(e);
	if (o$1 != null && a$1 != null) return o$1 === e;
	t.set(r$1, e), t.set(e, r$1);
	try {
		switch (s) {
			case yo:
				if (r$1.size !== e.size) return !1;
				for (const [c$2, h$2] of r$1.entries()) if (!e.has(c$2) || !De$1(h$2, e.get(c$2), c$2, r$1, e, t, i$2)) return !1;
				return !0;
			case bo: {
				if (r$1.size !== e.size) return !1;
				const c$2 = Array.from(r$1.values()), h$2 = Array.from(e.values());
				for (let l$1 = 0; l$1 < c$2.length; l$1++) {
					const g$1 = c$2[l$1], y$2 = h$2.findIndex((_$2) => De$1(g$1, _$2, void 0, r$1, e, t, i$2));
					if (y$2 === -1) return !1;
					h$2.splice(y$2, 1);
				}
				return !0;
			}
			case mo:
			case wo:
			case Eo:
			case Io:
			case To:
			case Co:
			case Po:
			case So:
			case Oo:
			case Ro:
			case Ao:
			case xo:
				if (typeof Buffer < "u" && Buffer.isBuffer(r$1) !== Buffer.isBuffer(e) || r$1.length !== e.length) return !1;
				for (let c$2 = 0; c$2 < r$1.length; c$2++) if (!De$1(r$1[c$2], e[c$2], c$2, r$1, e, t, i$2)) return !1;
				return !0;
			case Do: return r$1.byteLength !== e.byteLength ? !1 : ve$2(new Uint8Array(r$1), new Uint8Array(e), t, i$2);
			case _o: return r$1.byteLength !== e.byteLength || r$1.byteOffset !== e.byteOffset ? !1 : ve$2(new Uint8Array(r$1), new Uint8Array(e), t, i$2);
			case vo: return r$1.name === e.name && r$1.message === e.message;
			case Ze$1: {
				if (!(ve$2(r$1.constructor, e.constructor, t, i$2) || zi(r$1) && zi(e))) return !1;
				const h$2 = [...Object.keys(r$1), ...xi$1(r$1)], l$1 = [...Object.keys(e), ...xi$1(e)];
				if (h$2.length !== l$1.length) return !1;
				for (let g$1 = 0; g$1 < h$2.length; g$1++) {
					const y$2 = h$2[g$1], _$2 = r$1[y$2];
					if (!Object.hasOwn(e, y$2)) return !1;
					const u$1 = e[y$2];
					if (!De$1(_$2, u$1, y$2, r$1, e, t, i$2)) return !1;
				}
				return !0;
			}
			default: return !1;
		}
	} finally {
		t.delete(r$1), t.delete(e);
	}
}
function zo(r$1, e) {
	return $o(r$1, e, No);
}
var Lo = Object.defineProperty, Li$1 = Object.getOwnPropertySymbols, ko = Object.prototype.hasOwnProperty, jo = Object.prototype.propertyIsEnumerable, Qe$1 = (r$1, e, t) => e in r$1 ? Lo(r$1, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: t
}) : r$1[e] = t, ki$1 = (r$1, e) => {
	for (var t in e || (e = {})) ko.call(e, t) && Qe$1(r$1, t, e[t]);
	if (Li$1) for (var t of Li$1(e)) jo.call(e, t) && Qe$1(r$1, t, e[t]);
	return r$1;
}, U$2 = (r$1, e, t) => Qe$1(r$1, typeof e != "symbol" ? e + "" : e, t);
var ji = class extends f$2 {
	constructor(e, t, i$2, s = W$2, n$1 = void 0) {
		super(e, t, i$2, s), this.core = e, this.logger = t, this.name = i$2, U$2(this, "map", /* @__PURE__ */ new Map()), U$2(this, "version", "0.3"), U$2(this, "cached", []), U$2(this, "initialized", !1), U$2(this, "getKey"), U$2(this, "storagePrefix", W$2), U$2(this, "recentlyDeleted", []), U$2(this, "recentlyDeletedLimit", 200), U$2(this, "init", async () => {
			this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o$1) => {
				this.getKey && o$1 !== null && !Dt$1(o$1) ? this.map.set(this.getKey(o$1), o$1) : Ja(o$1) ? this.map.set(o$1.id, o$1) : Qa(o$1) && this.map.set(o$1.topic, o$1);
			}), this.cached = [], this.initialized = !0);
		}), U$2(this, "set", async (o$1, a$1) => {
			this.isInitialized(), this.map.has(o$1) ? await this.update(o$1, a$1) : (this.logger.debug("Setting value"), this.logger.trace({
				type: "method",
				method: "set",
				key: o$1,
				value: a$1
			}), this.map.set(o$1, a$1), await this.persist());
		}), U$2(this, "get", (o$1) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
			type: "method",
			method: "get",
			key: o$1
		}), this.getData(o$1))), U$2(this, "getAll", (o$1) => (this.isInitialized(), o$1 ? this.values.filter((a$1) => Object.keys(o$1).every((c$2) => zo(a$1[c$2], o$1[c$2]))) : this.values)), U$2(this, "update", async (o$1, a$1) => {
			this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
				type: "method",
				method: "update",
				key: o$1,
				update: a$1
			});
			const c$2 = ki$1(ki$1({}, this.getData(o$1)), a$1);
			this.map.set(o$1, c$2), await this.persist();
		}), U$2(this, "delete", async (o$1, a$1) => {
			this.isInitialized(), this.map.has(o$1) && (this.logger.debug("Deleting value"), this.logger.trace({
				type: "method",
				method: "delete",
				key: o$1,
				reason: a$1
			}), this.map.delete(o$1), this.addToRecentlyDeleted(o$1), await this.persist());
		}), this.logger = Re$1(t, this.name), this.storagePrefix = s, this.getKey = n$1;
	}
	get context() {
		return ee$2(this.logger);
	}
	get storageKey() {
		return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
	}
	get length() {
		return this.map.size;
	}
	get keys() {
		return Array.from(this.map.keys());
	}
	get values() {
		return Array.from(this.map.values());
	}
	addToRecentlyDeleted(e) {
		this.recentlyDeleted.push(e), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
	}
	async setDataStore(e) {
		await this.core.storage.setItem(this.storageKey, e);
	}
	async getDataStore() {
		return await this.core.storage.getItem(this.storageKey);
	}
	getData(e) {
		const t = this.map.get(e);
		if (!t) {
			if (this.recentlyDeleted.includes(e)) {
				const { message: s } = Bt$1("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
				throw this.logger.error(s), new Error(s);
			}
			const { message: i$2 } = Bt$1("NO_MATCHING_KEY", `${this.name}: ${e}`);
			throw this.logger.error(i$2), new Error(i$2);
		}
		return t;
	}
	async persist() {
		await this.setDataStore(this.values);
	}
	async restore() {
		try {
			const e = await this.getDataStore();
			if (typeof e > "u" || !e.length) return;
			if (this.map.size) {
				const { message: t } = Bt$1("RESTORE_WILL_OVERRIDE", this.name);
				throw this.logger.error(t), new Error(t);
			}
			this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
				type: "method",
				method: "restore",
				value: this.values
			});
		} catch (e) {
			this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
		}
	}
	isInitialized() {
		if (!this.initialized) {
			const { message: e } = Bt$1("NOT_INITIALIZED", this.name);
			throw new Error(e);
		}
	}
};
var Uo = Object.defineProperty, Fo = (r$1, e, t) => e in r$1 ? Uo(r$1, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: t
}) : r$1[e] = t, d$2 = (r$1, e, t) => Fo(r$1, typeof e != "symbol" ? e + "" : e, t);
var Ui$1 = class {
	constructor(e, t) {
		this.core = e, this.logger = t, d$2(this, "name", Kt$1), d$2(this, "version", "0.3"), d$2(this, "events", new import_events$3.default()), d$2(this, "pairings"), d$2(this, "initialized", !1), d$2(this, "storagePrefix", W$2), d$2(this, "ignoredPayloadTypes", [1]), d$2(this, "registeredMethods", []), d$2(this, "init", async () => {
			this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
		}), d$2(this, "register", ({ methods: i$2 }) => {
			this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...i$2])];
		}), d$2(this, "create", async (i$2) => {
			this.isInitialized();
			const s = pa(), n$1 = await this.core.crypto.setSymKey(s), o$1 = _i(import_cjs$1.FIVE_MINUTES), a$1 = { protocol: "irn" }, c$2 = {
				topic: n$1,
				expiry: o$1,
				relay: a$1,
				active: !1,
				methods: i$2?.methods
			}, h$2 = ja({
				protocol: this.core.protocol,
				version: this.core.version,
				topic: n$1,
				symKey: s,
				relay: a$1,
				expiryTimestamp: o$1,
				methods: i$2?.methods
			});
			return this.events.emit(ae$1.create, c$2), this.core.expirer.set(n$1, o$1), await this.pairings.set(n$1, c$2), await this.core.relayer.subscribe(n$1, {
				transportType: i$2?.transportType,
				internal: i$2?.internal
			}), {
				topic: n$1,
				uri: h$2
			};
		}), d$2(this, "pair", async (i$2) => {
			this.isInitialized();
			const s = this.core.eventClient.createEvent({ properties: {
				topic: i$2?.uri,
				trace: [Y$1.pairing_started]
			} });
			this.isValidPair(i$2, s);
			const { topic: n$1, symKey: o$1, relay: a$1, expiryTimestamp: c$2, methods: h$2 } = Ca(i$2.uri);
			s.props.properties.topic = n$1, s.addTrace(Y$1.pairing_uri_validation_success), s.addTrace(Y$1.pairing_uri_not_expired);
			let l$1;
			if (this.pairings.keys.includes(n$1)) {
				if (l$1 = this.pairings.get(n$1), s.addTrace(Y$1.existing_pairing), l$1.active) throw s.setError(X$1.active_pairing_already_exists), /* @__PURE__ */ new Error(`Pairing already exists: ${n$1}. Please try again with a new connection URI.`);
				s.addTrace(Y$1.pairing_not_expired);
			}
			const g$1 = c$2 || _i(import_cjs$1.FIVE_MINUTES), y$2 = {
				topic: n$1,
				relay: a$1,
				expiry: g$1,
				active: !1,
				methods: h$2
			};
			this.core.expirer.set(n$1, g$1), await this.pairings.set(n$1, y$2), s.addTrace(Y$1.store_new_pairing), i$2.activatePairing && await this.activate({ topic: n$1 }), this.events.emit(ae$1.create, y$2), s.addTrace(Y$1.emit_inactive_pairing), this.core.crypto.keychain.has(n$1) || await this.core.crypto.setSymKey(o$1, n$1), s.addTrace(Y$1.subscribing_pairing_topic);
			try {
				await this.core.relayer.confirmOnlineStateOrThrow();
			} catch {
				s.setError(X$1.no_internet_connection);
			}
			try {
				await this.core.relayer.subscribe(n$1, { relay: a$1 });
			} catch (_$2) {
				throw s.setError(X$1.subscribe_pairing_topic_failure), _$2;
			}
			return s.addTrace(Y$1.subscribe_pairing_topic_success), y$2;
		}), d$2(this, "activate", async ({ topic: i$2 }) => {
			this.isInitialized();
			const s = _i(import_cjs$1.FIVE_MINUTES);
			this.core.expirer.set(i$2, s), await this.pairings.update(i$2, {
				active: !0,
				expiry: s
			});
		}), d$2(this, "ping", async (i$2) => {
			this.isInitialized(), await this.isValidPing(i$2), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
			const { topic: s } = i$2;
			if (this.pairings.keys.includes(s)) {
				const n$1 = await this.sendRequest(s, "wc_pairingPing", {}), { done: o$1, resolve: a$1, reject: c$2 } = Ai();
				this.events.once($i("pairing_ping", n$1), ({ error: h$2 }) => {
					h$2 ? c$2(h$2) : a$1();
				}), await o$1();
			}
		}), d$2(this, "updateExpiry", async ({ topic: i$2, expiry: s }) => {
			this.isInitialized(), await this.pairings.update(i$2, { expiry: s });
		}), d$2(this, "updateMetadata", async ({ topic: i$2, metadata: s }) => {
			this.isInitialized(), await this.pairings.update(i$2, { peerMetadata: s });
		}), d$2(this, "getPairings", () => (this.isInitialized(), this.pairings.values)), d$2(this, "disconnect", async (i$2) => {
			this.isInitialized(), await this.isValidDisconnect(i$2);
			const { topic: s } = i$2;
			this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", zt("USER_DISCONNECTED")), await this.deletePairing(s));
		}), d$2(this, "formatUriFromPairing", (i$2) => {
			this.isInitialized();
			const { topic: s, relay: n$1, expiry: o$1, methods: a$1 } = i$2, c$2 = this.core.crypto.keychain.get(s);
			return ja({
				protocol: this.core.protocol,
				version: this.core.version,
				topic: s,
				symKey: c$2,
				relay: n$1,
				expiryTimestamp: o$1,
				methods: a$1
			});
		}), d$2(this, "sendRequest", async (i$2, s, n$1) => {
			const o$1 = formatJsonRpcRequest(s, n$1), a$1 = await this.core.crypto.encode(i$2, o$1), c$2 = oe$2[s].req;
			return this.core.history.set(i$2, o$1), this.core.relayer.publish(i$2, a$1, c$2), o$1.id;
		}), d$2(this, "sendResult", async (i$2, s, n$1) => {
			const o$1 = formatJsonRpcResult(i$2, n$1), a$1 = await this.core.crypto.encode(s, o$1), h$2 = oe$2[(await this.core.history.get(s, i$2)).request.method].res;
			await this.core.relayer.publish(s, a$1, h$2), await this.core.history.resolve(o$1);
		}), d$2(this, "sendError", async (i$2, s, n$1) => {
			const o$1 = formatJsonRpcError(i$2, n$1), a$1 = await this.core.crypto.encode(s, o$1), c$2 = (await this.core.history.get(s, i$2)).request.method, h$2 = oe$2[c$2] ? oe$2[c$2].res : oe$2.unregistered_method.res;
			await this.core.relayer.publish(s, a$1, h$2), await this.core.history.resolve(o$1);
		}), d$2(this, "deletePairing", async (i$2, s) => {
			await this.core.relayer.unsubscribe(i$2), await Promise.all([
				this.pairings.delete(i$2, zt("USER_DISCONNECTED")),
				this.core.crypto.deleteSymKey(i$2),
				s ? Promise.resolve() : this.core.expirer.del(i$2)
			]);
		}), d$2(this, "cleanup", async () => {
			const i$2 = this.pairings.getAll().filter((s) => Ri(s.expiry));
			await Promise.all(i$2.map((s) => this.deletePairing(s.topic)));
		}), d$2(this, "onRelayEventRequest", async (i$2) => {
			const { topic: s, payload: n$1 } = i$2;
			switch (n$1.method) {
				case "wc_pairingPing": return await this.onPairingPingRequest(s, n$1);
				case "wc_pairingDelete": return await this.onPairingDeleteRequest(s, n$1);
				default: return await this.onUnknownRpcMethodRequest(s, n$1);
			}
		}), d$2(this, "onRelayEventResponse", async (i$2) => {
			const { topic: s, payload: n$1 } = i$2, o$1 = (await this.core.history.get(s, n$1.id)).request.method;
			switch (o$1) {
				case "wc_pairingPing": return this.onPairingPingResponse(s, n$1);
				default: return this.onUnknownRpcMethodResponse(o$1);
			}
		}), d$2(this, "onPairingPingRequest", async (i$2, s) => {
			const { id: n$1 } = s;
			try {
				this.isValidPing({ topic: i$2 }), await this.sendResult(n$1, i$2, !0), this.events.emit(ae$1.ping, {
					id: n$1,
					topic: i$2
				});
			} catch (o$1) {
				await this.sendError(n$1, i$2, o$1), this.logger.error(o$1);
			}
		}), d$2(this, "onPairingPingResponse", (i$2, s) => {
			const { id: n$1 } = s;
			setTimeout(() => {
				isJsonRpcResult(s) ? this.events.emit($i("pairing_ping", n$1), {}) : isJsonRpcError(s) && this.events.emit($i("pairing_ping", n$1), { error: s.error });
			}, 500);
		}), d$2(this, "onPairingDeleteRequest", async (i$2, s) => {
			const { id: n$1 } = s;
			try {
				this.isValidDisconnect({ topic: i$2 }), await this.deletePairing(i$2), this.events.emit(ae$1.delete, {
					id: n$1,
					topic: i$2
				});
			} catch (o$1) {
				await this.sendError(n$1, i$2, o$1), this.logger.error(o$1);
			}
		}), d$2(this, "onUnknownRpcMethodRequest", async (i$2, s) => {
			const { id: n$1, method: o$1 } = s;
			try {
				if (this.registeredMethods.includes(o$1)) return;
				const a$1 = zt("WC_METHOD_UNSUPPORTED", o$1);
				await this.sendError(n$1, i$2, a$1), this.logger.error(a$1);
			} catch (a$1) {
				await this.sendError(n$1, i$2, a$1), this.logger.error(a$1);
			}
		}), d$2(this, "onUnknownRpcMethodResponse", (i$2) => {
			this.registeredMethods.includes(i$2) || this.logger.error(zt("WC_METHOD_UNSUPPORTED", i$2));
		}), d$2(this, "isValidPair", (i$2, s) => {
			var n$1;
			if (!ou(i$2)) {
				const { message: a$1 } = Bt$1("MISSING_OR_INVALID", `pair() params: ${i$2}`);
				throw s.setError(X$1.malformed_pairing_uri), new Error(a$1);
			}
			if (!Xa(i$2.uri)) {
				const { message: a$1 } = Bt$1("MISSING_OR_INVALID", `pair() uri: ${i$2.uri}`);
				throw s.setError(X$1.malformed_pairing_uri), new Error(a$1);
			}
			const o$1 = Ca(i$2?.uri);
			if (!((n$1 = o$1?.relay) != null && n$1.protocol)) {
				const { message: a$1 } = Bt$1("MISSING_OR_INVALID", "pair() uri#relay-protocol");
				throw s.setError(X$1.malformed_pairing_uri), new Error(a$1);
			}
			if (!(o$1 != null && o$1.symKey)) {
				const { message: a$1 } = Bt$1("MISSING_OR_INVALID", "pair() uri#symKey");
				throw s.setError(X$1.malformed_pairing_uri), new Error(a$1);
			}
			if (o$1 != null && o$1.expiryTimestamp && (0, import_cjs$1.toMiliseconds)(o$1?.expiryTimestamp) < Date.now()) {
				s.setError(X$1.pairing_expired);
				const { message: a$1 } = Bt$1("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
				throw new Error(a$1);
			}
		}), d$2(this, "isValidPing", async (i$2) => {
			if (!ou(i$2)) {
				const { message: n$1 } = Bt$1("MISSING_OR_INVALID", `ping() params: ${i$2}`);
				throw new Error(n$1);
			}
			const { topic: s } = i$2;
			await this.isValidPairingTopic(s);
		}), d$2(this, "isValidDisconnect", async (i$2) => {
			if (!ou(i$2)) {
				const { message: n$1 } = Bt$1("MISSING_OR_INVALID", `disconnect() params: ${i$2}`);
				throw new Error(n$1);
			}
			const { topic: s } = i$2;
			await this.isValidPairingTopic(s);
		}), d$2(this, "isValidPairingTopic", async (i$2) => {
			if (!ft$1(i$2, !1)) {
				const { message: s } = Bt$1("MISSING_OR_INVALID", `pairing topic should be a string: ${i$2}`);
				throw new Error(s);
			}
			if (!this.pairings.keys.includes(i$2)) {
				const { message: s } = Bt$1("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i$2}`);
				throw new Error(s);
			}
			if (Ri(this.pairings.get(i$2).expiry)) {
				await this.deletePairing(i$2);
				const { message: s } = Bt$1("EXPIRED", `pairing topic: ${i$2}`);
				throw new Error(s);
			}
		}), this.core = e, this.logger = Re$1(t, this.name), this.pairings = new ji(this.core, this.logger, this.name, this.storagePrefix);
	}
	get context() {
		return ee$2(this.logger);
	}
	isInitialized() {
		if (!this.initialized) {
			const { message: e } = Bt$1("NOT_INITIALIZED", this.name);
			throw new Error(e);
		}
	}
	registerRelayerEvents() {
		this.core.relayer.on(C$2.message, async (e) => {
			const { topic: t, message: i$2, transportType: s } = e;
			if (this.pairings.keys.includes(t) && s !== ee$1.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i$2))) try {
				const n$1 = await this.core.crypto.decode(t, i$2);
				isJsonRpcRequest(n$1) ? (this.core.history.set(t, n$1), await this.onRelayEventRequest({
					topic: t,
					payload: n$1
				})) : isJsonRpcResponse(n$1) && (await this.core.history.resolve(n$1), await this.onRelayEventResponse({
					topic: t,
					payload: n$1
				}), this.core.history.delete(t, n$1.id)), await this.core.relayer.messages.ack(t, i$2);
			} catch (n$1) {
				this.logger.error(n$1);
			}
		});
	}
	registerExpirerEvents() {
		this.core.expirer.on(q$1.expired, async (e) => {
			const { topic: t } = Ui(e.target);
			t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit(ae$1.expire, { topic: t }));
		});
	}
};
var Mo = Object.defineProperty, Ko = (r$1, e, t) => e in r$1 ? Mo(r$1, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: t
}) : r$1[e] = t, N$2 = (r$1, e, t) => Ko(r$1, typeof e != "symbol" ? e + "" : e, t);
var Fi = class extends I$1 {
	constructor(e, t) {
		super(e, t), this.core = e, this.logger = t, N$2(this, "records", /* @__PURE__ */ new Map()), N$2(this, "events", new import_events$3.EventEmitter()), N$2(this, "name", Vt$1), N$2(this, "version", "0.3"), N$2(this, "cached", []), N$2(this, "initialized", !1), N$2(this, "storagePrefix", W$2), N$2(this, "init", async () => {
			this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i$2) => this.records.set(i$2.id, i$2)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
		}), N$2(this, "set", (i$2, s, n$1) => {
			if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
				type: "method",
				method: "set",
				topic: i$2,
				request: s,
				chainId: n$1
			}), this.records.has(s.id)) return;
			const o$1 = {
				id: s.id,
				topic: i$2,
				request: {
					method: s.method,
					params: s.params || null
				},
				chainId: n$1,
				expiry: _i(import_cjs$1.THIRTY_DAYS)
			};
			this.records.set(o$1.id, o$1), this.persist(), this.events.emit(V$2.created, o$1);
		}), N$2(this, "resolve", async (i$2) => {
			if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
				type: "method",
				method: "update",
				response: i$2
			}), !this.records.has(i$2.id)) return;
			const s = await this.getRecord(i$2.id);
			typeof s.response > "u" && (s.response = isJsonRpcError(i$2) ? { error: i$2.error } : { result: i$2.result }, this.records.set(s.id, s), this.persist(), this.events.emit(V$2.updated, s));
		}), N$2(this, "get", async (i$2, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
			type: "method",
			method: "get",
			topic: i$2,
			id: s
		}), await this.getRecord(s))), N$2(this, "delete", (i$2, s) => {
			this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
				type: "method",
				method: "delete",
				id: s
			}), this.values.forEach((n$1) => {
				if (n$1.topic === i$2) {
					if (typeof s < "u" && n$1.id !== s) return;
					this.records.delete(n$1.id), this.events.emit(V$2.deleted, n$1);
				}
			}), this.persist();
		}), N$2(this, "exists", async (i$2, s) => (this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === i$2 : !1)), N$2(this, "on", (i$2, s) => {
			this.events.on(i$2, s);
		}), N$2(this, "once", (i$2, s) => {
			this.events.once(i$2, s);
		}), N$2(this, "off", (i$2, s) => {
			this.events.off(i$2, s);
		}), N$2(this, "removeListener", (i$2, s) => {
			this.events.removeListener(i$2, s);
		}), this.logger = Re$1(t, this.name);
	}
	get context() {
		return ee$2(this.logger);
	}
	get storageKey() {
		return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
	}
	get size() {
		return this.records.size;
	}
	get keys() {
		return Array.from(this.records.keys());
	}
	get values() {
		return Array.from(this.records.values());
	}
	get pending() {
		const e = [];
		return this.values.forEach((t) => {
			if (typeof t.response < "u") return;
			const i$2 = {
				topic: t.topic,
				request: formatJsonRpcRequest(t.request.method, t.request.params, t.id),
				chainId: t.chainId
			};
			return e.push(i$2);
		}), e;
	}
	async setJsonRpcRecords(e) {
		await this.core.storage.setItem(this.storageKey, e);
	}
	async getJsonRpcRecords() {
		return await this.core.storage.getItem(this.storageKey);
	}
	getRecord(e) {
		this.isInitialized();
		const t = this.records.get(e);
		if (!t) {
			const { message: i$2 } = Bt$1("NO_MATCHING_KEY", `${this.name}: ${e}`);
			throw new Error(i$2);
		}
		return t;
	}
	async persist() {
		await this.setJsonRpcRecords(this.values), this.events.emit(V$2.sync);
	}
	async restore() {
		try {
			const e = await this.getJsonRpcRecords();
			if (typeof e > "u" || !e.length) return;
			if (this.records.size) {
				const { message: t } = Bt$1("RESTORE_WILL_OVERRIDE", this.name);
				throw this.logger.error(t), new Error(t);
			}
			this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
				type: "method",
				method: "restore",
				records: this.values
			});
		} catch (e) {
			this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
		}
	}
	registerEventListeners() {
		this.events.on(V$2.created, (e) => {
			const t = V$2.created;
			this.logger.info(`Emitting ${t}`), this.logger.debug({
				type: "event",
				event: t,
				record: e
			});
		}), this.events.on(V$2.updated, (e) => {
			const t = V$2.updated;
			this.logger.info(`Emitting ${t}`), this.logger.debug({
				type: "event",
				event: t,
				record: e
			});
		}), this.events.on(V$2.deleted, (e) => {
			const t = V$2.deleted;
			this.logger.info(`Emitting ${t}`), this.logger.debug({
				type: "event",
				event: t,
				record: e
			});
		}), this.core.heartbeat.on(r.pulse, () => {
			this.cleanup();
		});
	}
	cleanup() {
		try {
			this.isInitialized();
			let e = !1;
			this.records.forEach((t) => {
				(0, import_cjs$1.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.records.delete(t.id), this.events.emit(V$2.deleted, t, !1), e = !0);
			}), e && this.persist();
		} catch (e) {
			this.logger.warn(e);
		}
	}
	isInitialized() {
		if (!this.initialized) {
			const { message: e } = Bt$1("NOT_INITIALIZED", this.name);
			throw new Error(e);
		}
	}
};
var Bo = Object.defineProperty, Vo = (r$1, e, t) => e in r$1 ? Bo(r$1, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: t
}) : r$1[e] = t, z$2 = (r$1, e, t) => Vo(r$1, typeof e != "symbol" ? e + "" : e, t);
var Mi = class extends S$2 {
	constructor(e, t) {
		super(e, t), this.core = e, this.logger = t, z$2(this, "expirations", /* @__PURE__ */ new Map()), z$2(this, "events", new import_events$3.EventEmitter()), z$2(this, "name", Gt$1), z$2(this, "version", "0.3"), z$2(this, "cached", []), z$2(this, "initialized", !1), z$2(this, "storagePrefix", W$2), z$2(this, "init", async () => {
			this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i$2) => this.expirations.set(i$2.target, i$2)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
		}), z$2(this, "has", (i$2) => {
			try {
				const s = this.formatTarget(i$2);
				return typeof this.getExpiration(s) < "u";
			} catch {
				return !1;
			}
		}), z$2(this, "set", (i$2, s) => {
			this.isInitialized();
			const n$1 = this.formatTarget(i$2), o$1 = {
				target: n$1,
				expiry: s
			};
			this.expirations.set(n$1, o$1), this.checkExpiry(n$1, o$1), this.events.emit(q$1.created, {
				target: n$1,
				expiration: o$1
			});
		}), z$2(this, "get", (i$2) => {
			this.isInitialized();
			const s = this.formatTarget(i$2);
			return this.getExpiration(s);
		}), z$2(this, "del", (i$2) => {
			if (this.isInitialized(), this.has(i$2)) {
				const s = this.formatTarget(i$2), n$1 = this.getExpiration(s);
				this.expirations.delete(s), this.events.emit(q$1.deleted, {
					target: s,
					expiration: n$1
				});
			}
		}), z$2(this, "on", (i$2, s) => {
			this.events.on(i$2, s);
		}), z$2(this, "once", (i$2, s) => {
			this.events.once(i$2, s);
		}), z$2(this, "off", (i$2, s) => {
			this.events.off(i$2, s);
		}), z$2(this, "removeListener", (i$2, s) => {
			this.events.removeListener(i$2, s);
		}), this.logger = Re$1(t, this.name);
	}
	get context() {
		return ee$2(this.logger);
	}
	get storageKey() {
		return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
	}
	get length() {
		return this.expirations.size;
	}
	get keys() {
		return Array.from(this.expirations.keys());
	}
	get values() {
		return Array.from(this.expirations.values());
	}
	formatTarget(e) {
		if (typeof e == "string") return Oi(e);
		if (typeof e == "number") return Ni(e);
		const { message: t } = Bt$1("UNKNOWN_TYPE", `Target type: ${typeof e}`);
		throw new Error(t);
	}
	async setExpirations(e) {
		await this.core.storage.setItem(this.storageKey, e);
	}
	async getExpirations() {
		return await this.core.storage.getItem(this.storageKey);
	}
	async persist() {
		await this.setExpirations(this.values), this.events.emit(q$1.sync);
	}
	async restore() {
		try {
			const e = await this.getExpirations();
			if (typeof e > "u" || !e.length) return;
			if (this.expirations.size) {
				const { message: t } = Bt$1("RESTORE_WILL_OVERRIDE", this.name);
				throw this.logger.error(t), new Error(t);
			}
			this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
				type: "method",
				method: "restore",
				expirations: this.values
			});
		} catch (e) {
			this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
		}
	}
	getExpiration(e) {
		const t = this.expirations.get(e);
		if (!t) {
			const { message: i$2 } = Bt$1("NO_MATCHING_KEY", `${this.name}: ${e}`);
			throw this.logger.warn(i$2), new Error(i$2);
		}
		return t;
	}
	checkExpiry(e, t) {
		const { expiry: i$2 } = t;
		(0, import_cjs$1.toMiliseconds)(i$2) - Date.now() <= 0 && this.expire(e, t);
	}
	expire(e, t) {
		this.expirations.delete(e), this.events.emit(q$1.expired, {
			target: e,
			expiration: t
		});
	}
	checkExpirations() {
		this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
	}
	registerEventListeners() {
		this.core.heartbeat.on(r.pulse, () => this.checkExpirations()), this.events.on(q$1.created, (e) => {
			const t = q$1.created;
			this.logger.info(`Emitting ${t}`), this.logger.debug({
				type: "event",
				event: t,
				data: e
			}), this.persist();
		}), this.events.on(q$1.expired, (e) => {
			const t = q$1.expired;
			this.logger.info(`Emitting ${t}`), this.logger.debug({
				type: "event",
				event: t,
				data: e
			}), this.persist();
		}), this.events.on(q$1.deleted, (e) => {
			const t = q$1.deleted;
			this.logger.info(`Emitting ${t}`), this.logger.debug({
				type: "event",
				event: t,
				data: e
			}), this.persist();
		});
	}
	isInitialized() {
		if (!this.initialized) {
			const { message: e } = Bt$1("NOT_INITIALIZED", this.name);
			throw new Error(e);
		}
	}
};
var qo = Object.defineProperty, Go = (r$1, e, t) => e in r$1 ? qo(r$1, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: t
}) : r$1[e] = t, P$2 = (r$1, e, t) => Go(r$1, typeof e != "symbol" ? e + "" : e, t);
var Ki = class extends M$2 {
	constructor(e, t, i$2) {
		super(e, t, i$2), this.core = e, this.logger = t, this.store = i$2, P$2(this, "name", Ht$1), P$2(this, "abortController"), P$2(this, "isDevEnv"), P$2(this, "verifyUrlV3", Jt$1), P$2(this, "storagePrefix", W$2), P$2(this, "version", 2), P$2(this, "publicKey"), P$2(this, "fetchPromise"), P$2(this, "init", async () => {
			var s;
			this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && (0, import_cjs$1.toMiliseconds)((s = this.publicKey) == null ? void 0 : s.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
		}), P$2(this, "register", async (s) => {
			if (!Wt$1() || this.isDevEnv) return;
			const n$1 = window.location.origin, { id: o$1, decryptedId: a$1 } = s, c$2 = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${n$1}&id=${o$1}&decryptedId=${a$1}`;
			try {
				const h$2 = (0, import_cjs$2.getDocument)(), l$1 = this.startAbortTimer(import_cjs$1.ONE_SECOND * 5), g$1 = await new Promise((y$2, _$2) => {
					const u$1 = () => {
						window.removeEventListener("message", D$1), h$2.body.removeChild(m$2), _$2("attestation aborted");
					};
					this.abortController.signal.addEventListener("abort", u$1);
					const m$2 = h$2.createElement("iframe");
					m$2.src = c$2, m$2.style.display = "none", m$2.addEventListener("error", u$1, { signal: this.abortController.signal });
					const D$1 = (w$2) => {
						if (w$2.data && typeof w$2.data == "string") try {
							const E$3 = JSON.parse(w$2.data);
							if (E$3.type === "verify_attestation") {
								if (sn(E$3.attestation).payload.id !== o$1) return;
								clearInterval(l$1), h$2.body.removeChild(m$2), this.abortController.signal.removeEventListener("abort", u$1), window.removeEventListener("message", D$1), y$2(E$3.attestation === null ? "" : E$3.attestation);
							}
						} catch (E$3) {
							this.logger.warn(E$3);
						}
					};
					h$2.body.appendChild(m$2), window.addEventListener("message", D$1, { signal: this.abortController.signal });
				});
				return this.logger.debug(g$1, "jwt attestation"), g$1;
			} catch (h$2) {
				this.logger.warn(h$2);
			}
			return "";
		}), P$2(this, "resolve", async (s) => {
			if (this.isDevEnv) return "";
			const { attestationId: n$1, hash: o$1, encryptedId: a$1 } = s;
			if (n$1 === "") {
				this.logger.debug("resolve: attestationId is empty, skipping");
				return;
			}
			if (n$1) {
				if (sn(n$1).payload.id !== a$1) return;
				const h$2 = await this.isValidJwtAttestation(n$1);
				if (h$2) {
					if (!h$2.isVerified) {
						this.logger.warn("resolve: jwt attestation: origin url not verified");
						return;
					}
					return h$2;
				}
			}
			if (!o$1) return;
			const c$2 = this.getVerifyUrl(s?.verifyUrl);
			return this.fetchAttestation(o$1, c$2);
		}), P$2(this, "fetchAttestation", async (s, n$1) => {
			this.logger.debug(`resolving attestation: ${s} from url: ${n$1}`);
			const o$1 = this.startAbortTimer(import_cjs$1.ONE_SECOND * 5), a$1 = await fetch(`${n$1}/attestation/${s}?v2Supported=true`, { signal: this.abortController.signal });
			return clearTimeout(o$1), a$1.status === 200 ? await a$1.json() : void 0;
		}), P$2(this, "getVerifyUrl", (s) => {
			let n$1 = s || "https://verify.walletconnect.org";
			return Xt$1.includes(n$1) || (this.logger.info(`verify url: ${n$1}, not included in trusted list, assigning default: https://verify.walletconnect.org`), n$1 = "https://verify.walletconnect.org"), n$1;
		}), P$2(this, "fetchPublicKey", async () => {
			try {
				this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
				const s = this.startAbortTimer(import_cjs$1.FIVE_SECONDS), n$1 = await fetch(`${this.verifyUrlV3}/public-key`, { signal: this.abortController.signal });
				return clearTimeout(s), await n$1.json();
			} catch (s) {
				this.logger.warn(s);
			}
		}), P$2(this, "persistPublicKey", async (s) => {
			this.logger.debug(s, "persisting public key to local storage"), await this.store.setItem(this.storeKey, s), this.publicKey = s;
		}), P$2(this, "removePublicKey", async () => {
			this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
		}), P$2(this, "isValidJwtAttestation", async (s) => {
			const n$1 = await this.getPublicKey();
			try {
				if (n$1) return this.validateAttestation(s, n$1);
			} catch (a$1) {
				this.logger.error(a$1), this.logger.warn("error validating attestation");
			}
			const o$1 = await this.fetchAndPersistPublicKey();
			try {
				if (o$1) return this.validateAttestation(s, o$1);
			} catch (a$1) {
				this.logger.error(a$1), this.logger.warn("error validating attestation");
			}
		}), P$2(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()), P$2(this, "fetchAndPersistPublicKey", async () => {
			if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
			this.fetchPromise = new Promise(async (n$1) => {
				const o$1 = await this.fetchPublicKey();
				o$1 && (await this.persistPublicKey(o$1), n$1(o$1));
			});
			const s = await this.fetchPromise;
			return this.fetchPromise = void 0, s;
		}), P$2(this, "validateAttestation", (s, n$1) => {
			const o$1 = Aa(s, n$1.publicKey), a$1 = {
				hasExpired: (0, import_cjs$1.toMiliseconds)(o$1.exp) < Date.now(),
				payload: o$1
			};
			if (a$1.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), /* @__PURE__ */ new Error("JWT attestation expired");
			return {
				origin: a$1.payload.origin,
				isScam: a$1.payload.isScam,
				isVerified: a$1.payload.isVerified
			};
		}), this.logger = Re$1(t, this.name), this.abortController = new AbortController(), this.isDevEnv = ki(), this.init();
	}
	get storeKey() {
		return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
	}
	get context() {
		return ee$2(this.logger);
	}
	startAbortTimer(e) {
		return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), (0, import_cjs$1.toMiliseconds)(e));
	}
};
var Wo = Object.defineProperty, Ho = (r$1, e, t) => e in r$1 ? Wo(r$1, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: t
}) : r$1[e] = t, Bi = (r$1, e, t) => Ho(r$1, typeof e != "symbol" ? e + "" : e, t);
var Vi = class extends O$1 {
	constructor(e, t) {
		super(e, t), this.projectId = e, this.logger = t, Bi(this, "context", Zt$2), Bi(this, "registerDeviceToken", async (i$2) => {
			const { clientId: s, token: n$1, notificationType: o$1, enableEncrypted: a$1 = !1 } = i$2, c$2 = `${Qt$1}/${this.projectId}/clients`;
			await fetch(c$2, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					client_id: s,
					type: o$1,
					token: n$1,
					always_raw: a$1
				})
			});
		}), this.logger = Re$1(t, this.context);
	}
};
var Yo = Object.defineProperty, qi = Object.getOwnPropertySymbols, Jo = Object.prototype.hasOwnProperty, Xo = Object.prototype.propertyIsEnumerable, et$2 = (r$1, e, t) => e in r$1 ? Yo(r$1, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: t
}) : r$1[e] = t, _e$1 = (r$1, e) => {
	for (var t in e || (e = {})) Jo.call(e, t) && et$2(r$1, t, e[t]);
	if (qi) for (var t of qi(e)) Xo.call(e, t) && et$2(r$1, t, e[t]);
	return r$1;
}, A$2 = (r$1, e, t) => et$2(r$1, typeof e != "symbol" ? e + "" : e, t);
var Gi = class extends R$1 {
	constructor(e, t, i$2 = !0) {
		super(e, t, i$2), this.core = e, this.logger = t, A$2(this, "context", ti$1), A$2(this, "storagePrefix", W$2), A$2(this, "storageVersion", ei), A$2(this, "events", /* @__PURE__ */ new Map()), A$2(this, "shouldPersist", !1), A$2(this, "init", async () => {
			if (!ki()) try {
				const s = {
					eventId: Li(),
					timestamp: Date.now(),
					domain: this.getAppDomain(),
					props: {
						event: "INIT",
						type: "",
						properties: {
							client_id: await this.core.crypto.getClientId(),
							user_agent: wr(this.core.relayer.protocol, this.core.relayer.version, Pe$1)
						}
					}
				};
				await this.sendEvent([s]);
			} catch (s) {
				this.logger.warn(s);
			}
		}), A$2(this, "createEvent", (s) => {
			const { event: n$1 = "ERROR", type: o$1 = "", properties: { topic: a$1, trace: c$2 } } = s, h$2 = Li(), l$1 = this.core.projectId || "", y$2 = _e$1({
				eventId: h$2,
				timestamp: Date.now(),
				props: {
					event: n$1,
					type: o$1,
					properties: {
						topic: a$1,
						trace: c$2
					}
				},
				bundleId: l$1,
				domain: this.getAppDomain()
			}, this.setMethods(h$2));
			return this.telemetryEnabled && (this.events.set(h$2, y$2), this.shouldPersist = !0), y$2;
		}), A$2(this, "getEvent", (s) => {
			const { eventId: n$1, topic: o$1 } = s;
			if (n$1) return this.events.get(n$1);
			const a$1 = Array.from(this.events.values()).find((c$2) => c$2.props.properties.topic === o$1);
			if (a$1) return _e$1(_e$1({}, a$1), this.setMethods(a$1.eventId));
		}), A$2(this, "deleteEvent", (s) => {
			const { eventId: n$1 } = s;
			this.events.delete(n$1), this.shouldPersist = !0;
		}), A$2(this, "setEventListeners", () => {
			this.core.heartbeat.on(r.pulse, async () => {
				this.shouldPersist && await this.persist(), this.events.forEach((s) => {
					(0, import_cjs$1.fromMiliseconds)(Date.now()) - (0, import_cjs$1.fromMiliseconds)(s.timestamp) > 86400 && (this.events.delete(s.eventId), this.shouldPersist = !0);
				});
			});
		}), A$2(this, "setMethods", (s) => ({
			addTrace: (n$1) => this.addTrace(s, n$1),
			setError: (n$1) => this.setError(s, n$1)
		})), A$2(this, "addTrace", (s, n$1) => {
			const o$1 = this.events.get(s);
			o$1 && (o$1.props.properties.trace.push(n$1), this.events.set(s, o$1), this.shouldPersist = !0);
		}), A$2(this, "setError", (s, n$1) => {
			const o$1 = this.events.get(s);
			o$1 && (o$1.props.type = n$1, o$1.timestamp = Date.now(), this.events.set(s, o$1), this.shouldPersist = !0);
		}), A$2(this, "persist", async () => {
			await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = !1;
		}), A$2(this, "restore", async () => {
			try {
				const s = await this.core.storage.getItem(this.storageKey) || [];
				if (!s.length) return;
				s.forEach((n$1) => {
					this.events.set(n$1.eventId, _e$1(_e$1({}, n$1), this.setMethods(n$1.eventId)));
				});
			} catch (s) {
				this.logger.warn(s);
			}
		}), A$2(this, "submit", async () => {
			if (!this.telemetryEnabled || this.events.size === 0) return;
			const s = [];
			for (const [n$1, o$1] of this.events) o$1.props.type && s.push(o$1);
			if (s.length !== 0) try {
				if ((await this.sendEvent(s)).ok) for (const n$1 of s) this.events.delete(n$1.eventId), this.shouldPersist = !0;
			} catch (n$1) {
				this.logger.warn(n$1);
			}
		}), A$2(this, "sendEvent", async (s) => {
			const n$1 = this.getAppDomain() ? "" : "&sp=desktop";
			return await fetch(`${si}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${Pe$1}${n$1}`, {
				method: "POST",
				body: JSON.stringify(s)
			});
		}), A$2(this, "getAppDomain", () => br().url), this.logger = Re$1(t, this.context), this.telemetryEnabled = i$2, i$2 ? this.restore().then(async () => {
			await this.submit(), this.setEventListeners();
		}) : this.persist();
	}
	get storageKey() {
		return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
	}
};
var Zo = Object.defineProperty, Wi = Object.getOwnPropertySymbols, Qo = Object.prototype.hasOwnProperty, ea = Object.prototype.propertyIsEnumerable, tt$2 = (r$1, e, t) => e in r$1 ? Zo(r$1, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: t
}) : r$1[e] = t, Hi$1 = (r$1, e) => {
	for (var t in e || (e = {})) Qo.call(e, t) && tt$2(r$1, t, e[t]);
	if (Wi) for (var t of Wi(e)) ea.call(e, t) && tt$2(r$1, t, e[t]);
	return r$1;
}, v$2 = (r$1, e, t) => tt$2(r$1, typeof e != "symbol" ? e + "" : e, t);
var ta = class Oe$1 extends h$1 {
	constructor(e) {
		var t;
		super(e), v$2(this, "protocol", "wc"), v$2(this, "version", 2), v$2(this, "name", ge$1), v$2(this, "relayUrl"), v$2(this, "projectId"), v$2(this, "customStoragePrefix"), v$2(this, "events", new import_events$3.EventEmitter()), v$2(this, "logger"), v$2(this, "heartbeat"), v$2(this, "relayer"), v$2(this, "crypto"), v$2(this, "storage"), v$2(this, "history"), v$2(this, "expirer"), v$2(this, "pairing"), v$2(this, "verify"), v$2(this, "echoClient"), v$2(this, "linkModeSupportedApps"), v$2(this, "eventClient"), v$2(this, "initialized", !1), v$2(this, "logChunkController"), v$2(this, "on", (a$1, c$2) => this.events.on(a$1, c$2)), v$2(this, "once", (a$1, c$2) => this.events.once(a$1, c$2)), v$2(this, "off", (a$1, c$2) => this.events.off(a$1, c$2)), v$2(this, "removeListener", (a$1, c$2) => this.events.removeListener(a$1, c$2)), v$2(this, "dispatchEnvelope", ({ topic: a$1, message: c$2, sessionExists: h$2 }) => {
			if (!a$1 || !c$2) return;
			const l$1 = {
				topic: a$1,
				message: c$2,
				publishedAt: Date.now(),
				transportType: ee$1.link_mode
			};
			this.relayer.onLinkMessageEvent(l$1, { sessionExists: h$2 });
		});
		const i$2 = this.getGlobalCore(e?.customStoragePrefix);
		if (i$2) try {
			return this.customStoragePrefix = i$2.customStoragePrefix, this.logger = i$2.logger, this.heartbeat = i$2.heartbeat, this.crypto = i$2.crypto, this.history = i$2.history, this.expirer = i$2.expirer, this.storage = i$2.storage, this.relayer = i$2.relayer, this.pairing = i$2.pairing, this.verify = i$2.verify, this.echoClient = i$2.echoClient, this.linkModeSupportedApps = i$2.linkModeSupportedApps, this.eventClient = i$2.eventClient, this.initialized = i$2.initialized, this.logChunkController = i$2.logChunkController, i$2;
		} catch (a$1) {
			console.warn("Failed to copy global core", a$1);
		}
		this.projectId = e?.projectId, this.relayUrl = e?.relayUrl || "wss://relay.walletconnect.org", this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
		const { logger: n$1, chunkLoggerController: o$1 } = Ue$2({
			opts: Ge$3({
				level: typeof e?.logger == "string" && e.logger ? e.logger : Et$2.logger,
				name: ge$1
			}),
			maxSizeInBytes: e?.maxLogBlobSizeInBytes,
			loggerOverride: e?.logger
		});
		this.logChunkController = o$1, (t = this.logChunkController) != null && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
			var a$1, c$2;
			(a$1 = this.logChunkController) != null && a$1.downloadLogsBlobInBrowser && ((c$2 = this.logChunkController) == null || c$2.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
		}), this.logger = Re$1(n$1, this.name), this.heartbeat = new i(), this.crypto = new wi(this, this.logger, e?.keychain), this.history = new Fi(this, this.logger), this.expirer = new Mi(this, this.logger), this.storage = e != null && e.storage ? e.storage : new h(Hi$1(Hi$1({}, It$3), e?.storageOptions)), this.relayer = new Ai$1({
			core: this,
			logger: this.logger,
			relayUrl: this.relayUrl,
			projectId: this.projectId
		}), this.pairing = new Ui$1(this, this.logger), this.verify = new Ki(this, this.logger, this.storage), this.echoClient = new Vi(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new Gi(this, this.logger, e?.telemetryEnabled), this.setGlobalCore(this);
	}
	static async init(e) {
		const t = new Oe$1(e);
		await t.initialize();
		const i$2 = await t.crypto.getClientId();
		return await t.storage.setItem(Ut$1, i$2), t;
	}
	get context() {
		return ee$2(this.logger);
	}
	async start() {
		this.initialized || await this.initialize();
	}
	async getLogsBlob() {
		var e;
		return (e = this.logChunkController) == null ? void 0 : e.logsToBlob({ clientId: await this.crypto.getClientId() });
	}
	async addLinkModeSupportedApp(e) {
		this.linkModeSupportedApps.includes(e) || (this.linkModeSupportedApps.push(e), await this.storage.setItem("WALLETCONNECT_LINK_MODE_APPS", this.linkModeSupportedApps));
	}
	async initialize() {
		this.logger.trace("Initialized");
		try {
			await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem("WALLETCONNECT_LINK_MODE_APPS") || [], this.initialized = !0, this.logger.info("Core Initialization Success");
		} catch (e) {
			throw this.logger.warn(e, `Core Initialization Failure at epoch ${Date.now()}`), this.logger.error(e.message), e;
		}
	}
	getGlobalCore(e = "") {
		try {
			if (this.isGlobalCoreDisabled()) return;
			const t = `_walletConnectCore_${e}`, i$2 = `${t}_count`;
			return globalThis[i$2] = (globalThis[i$2] || 0) + 1, globalThis[i$2] > 1 && console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[i$2]} times.`), globalThis[t];
		} catch (t) {
			console.warn("Failed to get global WalletConnect core", t);
			return;
		}
	}
	setGlobalCore(e) {
		var t;
		try {
			if (this.isGlobalCoreDisabled()) return;
			const i$2 = `_walletConnectCore_${((t = e.opts) == null ? void 0 : t.customStoragePrefix) || ""}`;
			globalThis[i$2] = e;
		} catch (i$2) {
			console.warn("Failed to set global WalletConnect core", i$2);
		}
	}
	isGlobalCoreDisabled() {
		try {
			return typeof process < "u" && {}.DISABLE_GLOBAL_CORE === "true";
		} catch {
			return !0;
		}
	}
};
var import_events$2 = /* @__PURE__ */ __toESM(require_events(), 1);
var import_cjs = require_cjs(), Me$1 = "client", Re = `wc@2:${Me$1}:`, Ie$1 = {
	name: Me$1,
	logger: "error",
	controller: !1,
	relayUrl: "wss://relay.walletconnect.org"
}, $e$1 = "WALLETCONNECT_DEEPLINK_CHOICE", dt$1 = "proposal";
import_cjs.THIRTY_DAYS;
var Ke$1 = "Proposal expired", ut$2 = "session", se$1 = import_cjs.SEVEN_DAYS, gt$1 = "engine", N$1 = {
	wc_sessionPropose: {
		req: {
			ttl: import_cjs.FIVE_MINUTES,
			prompt: !0,
			tag: 1100
		},
		res: {
			ttl: import_cjs.FIVE_MINUTES,
			prompt: !1,
			tag: 1101
		},
		reject: {
			ttl: import_cjs.FIVE_MINUTES,
			prompt: !1,
			tag: 1120
		},
		autoReject: {
			ttl: import_cjs.FIVE_MINUTES,
			prompt: !1,
			tag: 1121
		}
	},
	wc_sessionSettle: {
		req: {
			ttl: import_cjs.FIVE_MINUTES,
			prompt: !1,
			tag: 1102
		},
		res: {
			ttl: import_cjs.FIVE_MINUTES,
			prompt: !1,
			tag: 1103
		}
	},
	wc_sessionUpdate: {
		req: {
			ttl: import_cjs.ONE_DAY,
			prompt: !1,
			tag: 1104
		},
		res: {
			ttl: import_cjs.ONE_DAY,
			prompt: !1,
			tag: 1105
		}
	},
	wc_sessionExtend: {
		req: {
			ttl: import_cjs.ONE_DAY,
			prompt: !1,
			tag: 1106
		},
		res: {
			ttl: import_cjs.ONE_DAY,
			prompt: !1,
			tag: 1107
		}
	},
	wc_sessionRequest: {
		req: {
			ttl: import_cjs.FIVE_MINUTES,
			prompt: !0,
			tag: 1108
		},
		res: {
			ttl: import_cjs.FIVE_MINUTES,
			prompt: !1,
			tag: 1109
		}
	},
	wc_sessionEvent: {
		req: {
			ttl: import_cjs.FIVE_MINUTES,
			prompt: !0,
			tag: 1110
		},
		res: {
			ttl: import_cjs.FIVE_MINUTES,
			prompt: !1,
			tag: 1111
		}
	},
	wc_sessionDelete: {
		req: {
			ttl: import_cjs.ONE_DAY,
			prompt: !1,
			tag: 1112
		},
		res: {
			ttl: import_cjs.ONE_DAY,
			prompt: !1,
			tag: 1113
		}
	},
	wc_sessionPing: {
		req: {
			ttl: import_cjs.ONE_DAY,
			prompt: !1,
			tag: 1114
		},
		res: {
			ttl: import_cjs.ONE_DAY,
			prompt: !1,
			tag: 1115
		}
	},
	wc_sessionAuthenticate: {
		req: {
			ttl: import_cjs.ONE_HOUR,
			prompt: !0,
			tag: 1116
		},
		res: {
			ttl: import_cjs.ONE_HOUR,
			prompt: !1,
			tag: 1117
		},
		reject: {
			ttl: import_cjs.FIVE_MINUTES,
			prompt: !1,
			tag: 1118
		},
		autoReject: {
			ttl: import_cjs.FIVE_MINUTES,
			prompt: !1,
			tag: 1119
		}
	}
}, Te$1 = {
	min: import_cjs.FIVE_MINUTES,
	max: import_cjs.SEVEN_DAYS
}, K$2 = {
	idle: "IDLE",
	active: "ACTIVE"
}, yt$1 = {
	eth_sendTransaction: { key: "" },
	eth_sendRawTransaction: { key: "" },
	wallet_sendCalls: { key: "" },
	solana_signTransaction: { key: "signature" },
	solana_signAllTransactions: { key: "transactions" },
	solana_signAndSendTransaction: { key: "signature" },
	sui_signAndExecuteTransaction: { key: "digest" },
	sui_signTransaction: { key: "" },
	hedera_signAndExecuteTransaction: { key: "transactionId" },
	hedera_executeTransaction: { key: "transactionId" },
	near_signTransaction: { key: "" },
	near_signTransactions: { key: "" },
	tron_signTransaction: { key: "txID" },
	xrpl_signTransaction: { key: "" },
	xrpl_signTransactionFor: { key: "" },
	algo_signTxn: { key: "" },
	sendTransfer: { key: "txid" },
	stacks_stxTransfer: { key: "txId" },
	polkadot_signTransaction: { key: "" },
	cosmos_signDirect: { key: "" }
}, mt$1 = "request", wt$1 = [
	"wc_sessionPropose",
	"wc_sessionRequest",
	"wc_authRequest",
	"wc_sessionAuthenticate"
], vt$1 = "auth", St$1 = "authKeys", Et$1 = "pairingTopics", ft$2 = "requests", we$1 = `wc@1.5:${vt$1}:`, _e = `${we$1}:PUB_KEY`;
var As = Object.defineProperty, xs = Object.defineProperties, Cs = Object.getOwnPropertyDescriptors, Rt$1 = Object.getOwnPropertySymbols, Vs = Object.prototype.hasOwnProperty, ks = Object.prototype.propertyIsEnumerable, Ue$1 = (S$4, o$1, e) => o$1 in S$4 ? As(S$4, o$1, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: e
}) : S$4[o$1] = e, E$2 = (S$4, o$1) => {
	for (var e in o$1 || (o$1 = {})) Vs.call(o$1, e) && Ue$1(S$4, e, o$1[e]);
	if (Rt$1) for (var e of Rt$1(o$1)) ks.call(o$1, e) && Ue$1(S$4, e, o$1[e]);
	return S$4;
}, b$2 = (S$4, o$1) => xs(S$4, Cs(o$1)), c = (S$4, o$1, e) => Ue$1(S$4, typeof o$1 != "symbol" ? o$1 + "" : o$1, e);
var Ds = class extends V$1 {
	constructor(o$1) {
		super(o$1), c(this, "name", gt$1), c(this, "events", new import_events$2.default()), c(this, "initialized", !1), c(this, "requestQueue", {
			state: K$2.idle,
			queue: []
		}), c(this, "sessionRequestQueue", {
			state: K$2.idle,
			queue: []
		}), c(this, "emittedSessionRequests", new Hi({ limit: 500 })), c(this, "requestQueueDelay", import_cjs.ONE_SECOND), c(this, "expectedPairingMethodMap", /* @__PURE__ */ new Map()), c(this, "recentlyDeletedMap", /* @__PURE__ */ new Map()), c(this, "recentlyDeletedLimit", 200), c(this, "relayMessageCache", []), c(this, "pendingSessions", /* @__PURE__ */ new Map()), c(this, "init", async () => {
			this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({ methods: Object.keys(N$1) }), this.initialized = !0, setTimeout(async () => {
				await this.processPendingMessageEvents(), this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
			}, (0, import_cjs.toMiliseconds)(this.requestQueueDelay)));
		}), c(this, "connect", async (e) => {
			var t;
			this.isInitialized(), await this.confirmOnlineStateOrThrow();
			const s = b$2(E$2({}, e), {
				requiredNamespaces: e.requiredNamespaces || {},
				optionalNamespaces: e.optionalNamespaces || {}
			});
			await this.isValidConnect(s), s.optionalNamespaces = Ya(s.requiredNamespaces, s.optionalNamespaces), s.requiredNamespaces = {};
			const { pairingTopic: i$2, requiredNamespaces: r$1, optionalNamespaces: n$1, sessionProperties: a$1, scopedProperties: l$1, relays: h$2, authentication: p$3, walletPay: y$2 } = s, d$3 = ((t = p$3?.[0]) == null ? void 0 : t.ttl) || N$1.wc_sessionPropose.req.ttl || import_cjs.FIVE_MINUTES;
			this.validateRequestExpiry(d$3);
			let u$1 = i$2, w$2, g$1 = !1;
			try {
				if (u$1) {
					const R$3 = this.client.core.pairing.pairings.get(u$1);
					this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."), g$1 = R$3.active;
				}
			} catch (R$3) {
				throw this.client.logger.error(`connect() -> pairing.get(${u$1}) failed`), R$3;
			}
			if (!u$1 || !g$1) {
				const { topic: R$3, uri: q$2 } = await this.client.core.pairing.create({ internal: { skipSubscribe: !0 } });
				u$1 = R$3, w$2 = q$2;
			}
			if (!u$1) {
				const { message: R$3 } = Bt$1("NO_MATCHING_KEY", `connect() pairing topic: ${u$1}`);
				throw new Error(R$3);
			}
			const f$5 = await this.client.core.crypto.generateKeyPair(), v$4 = _i(d$3), T$3 = E$2(b$2(E$2(E$2({
				requiredNamespaces: r$1,
				optionalNamespaces: n$1,
				relays: h$2 ?? [{ protocol: "irn" }],
				proposer: {
					publicKey: f$5,
					metadata: this.client.metadata
				},
				expiryTimestamp: v$4,
				pairingTopic: u$1
			}, a$1 && { sessionProperties: a$1 }), l$1 && { scopedProperties: l$1 }), { id: payloadId() }), (p$3 || y$2) && { requests: {
				authentication: p$3?.map((R$3) => {
					const { domain: q$2, chains: ve$3, nonce: ce$2, uri: Y$2, exp: ie$3, nbf: le$2, type: J$5, statement: pe$2, requestId: he$3, resources: C$4, signatureTypes: D$1 } = R$3;
					return {
						domain: q$2,
						chains: ve$3,
						nonce: ce$2,
						type: J$5 ?? "caip122",
						aud: Y$2,
						version: "1",
						iat: (/* @__PURE__ */ new Date()).toISOString(),
						exp: ie$3,
						nbf: le$2,
						statement: pe$2,
						requestId: he$3,
						resources: C$4,
						signatureTypes: D$1
					};
				}),
				walletPay: y$2
			} }), A$3 = $i("session_connect", T$3.id), { reject: V$3, resolve: x$2, done: U$3 } = Ai(d$3, Ke$1), z$4 = ({ id: R$3 }) => {
				R$3 === T$3.id && (this.client.events.off("proposal_expire", z$4), this.pendingSessions.delete(T$3.id), this.events.emit(A$3, { error: {
					message: "Proposal expired",
					code: 0
				} }));
			};
			return this.client.events.on("proposal_expire", z$4), this.events.once(A$3, ({ error: R$3, session: q$2 }) => {
				this.client.events.off("proposal_expire", z$4), R$3 ? V$3(R$3) : q$2 && x$2(q$2);
			}), await this.setProposal(T$3.id, T$3), await this.sendProposeSession({
				proposal: T$3,
				publishOpts: {
					internal: { throwOnFailedPublish: !0 },
					tvf: { correlationId: T$3.id }
				}
			}).catch((R$3) => {
				throw this.deleteProposal(T$3.id), R$3;
			}), {
				uri: w$2,
				approval: U$3
			};
		}), c(this, "pair", async (e) => {
			this.isInitialized(), await this.confirmOnlineStateOrThrow();
			try {
				return await this.client.core.pairing.pair(e);
			} catch (t) {
				throw this.client.logger.error("pair() failed"), t;
			}
		}), c(this, "approve", async (e) => {
			var t, s, i$2;
			const r$1 = this.client.core.eventClient.createEvent({ properties: {
				topic: (t = e?.id) == null ? void 0 : t.toString(),
				trace: [rr.session_approve_started]
			} });
			try {
				this.isInitialized(), await this.confirmOnlineStateOrThrow();
			} catch (q$2) {
				throw r$1.setError(nr.no_internet_connection), q$2;
			}
			try {
				await this.isValidProposalId(e?.id);
			} catch (q$2) {
				throw this.client.logger.error(`approve() -> proposal.get(${e?.id}) failed`), r$1.setError(nr.proposal_not_found), q$2;
			}
			try {
				await this.isValidApprove(e);
			} catch (q$2) {
				throw this.client.logger.error("approve() -> isValidApprove() failed"), r$1.setError(nr.session_approve_namespace_validation_failure), q$2;
			}
			const { id: n$1, relayProtocol: a$1, namespaces: l$1, sessionProperties: h$2, scopedProperties: p$3, sessionConfig: y$2, proposalRequestsResponses: d$3 } = e, u$1 = this.client.proposal.get(n$1);
			this.client.core.eventClient.deleteEvent({ eventId: r$1.eventId });
			const { pairingTopic: w$2, proposer: g$1, requiredNamespaces: f$5, optionalNamespaces: v$4 } = u$1;
			let T$3 = (s = this.client.core.eventClient) == null ? void 0 : s.getEvent({ topic: w$2 });
			T$3 || (T$3 = (i$2 = this.client.core.eventClient) == null ? void 0 : i$2.createEvent({
				type: rr.session_approve_started,
				properties: {
					topic: w$2,
					trace: [rr.session_approve_started, rr.session_namespaces_validation_success]
				}
			}));
			const A$3 = await this.client.core.crypto.generateKeyPair(), V$3 = g$1.publicKey, x$2 = await this.client.core.crypto.generateSharedKey(A$3, V$3), U$3 = b$2(E$2(E$2(E$2({
				relay: { protocol: a$1 ?? "irn" },
				namespaces: l$1,
				controller: {
					publicKey: A$3,
					metadata: this.client.metadata
				},
				expiry: _i(se$1)
			}, h$2 && { sessionProperties: h$2 }), p$3 && { scopedProperties: p$3 }), y$2 && { sessionConfig: y$2 }), { proposalRequestsResponses: d$3 }), z$4 = ee$1.relay;
			T$3.addTrace(rr.subscribing_session_topic);
			try {
				await this.client.core.relayer.subscribe(x$2, {
					transportType: z$4,
					internal: { skipSubscribe: !0 }
				});
			} catch (q$2) {
				throw T$3.setError(nr.subscribe_session_topic_failure), q$2;
			}
			T$3.addTrace(rr.subscribe_session_topic_success);
			const R$3 = b$2(E$2({}, U$3), {
				topic: x$2,
				requiredNamespaces: f$5,
				optionalNamespaces: v$4,
				pairingTopic: w$2,
				acknowledged: !1,
				self: U$3.controller,
				peer: {
					publicKey: g$1.publicKey,
					metadata: g$1.metadata
				},
				controller: A$3,
				transportType: ee$1.relay,
				authentication: d$3?.authentication,
				walletPayResult: d$3?.walletPay
			});
			await this.client.session.set(x$2, R$3), T$3.addTrace(rr.store_session);
			try {
				await this.sendApproveSession({
					sessionTopic: x$2,
					proposal: u$1,
					pairingProposalResponse: {
						relay: { protocol: a$1 ?? "irn" },
						responderPublicKey: A$3
					},
					sessionSettleRequest: U$3,
					publishOpts: {
						internal: { throwOnFailedPublish: !0 },
						tvf: E$2({ correlationId: n$1 }, this.getTVFApproveParams(R$3))
					}
				}), T$3.addTrace(rr.session_approve_publish_success);
			} catch (q$2) {
				throw this.client.logger.error(q$2), this.client.session.delete(x$2, zt("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(x$2), q$2;
			}
			return this.client.core.eventClient.deleteEvent({ eventId: T$3.eventId }), await this.client.core.pairing.updateMetadata({
				topic: w$2,
				metadata: g$1.metadata
			}), await this.deleteProposal(n$1), await this.client.core.pairing.activate({ topic: w$2 }), await this.setExpiry(x$2, _i(se$1)), {
				topic: x$2,
				acknowledged: () => Promise.resolve(this.client.session.get(x$2))
			};
		}), c(this, "reject", async (e) => {
			this.isInitialized(), await this.confirmOnlineStateOrThrow();
			try {
				await this.isValidReject(e);
			} catch (r$1) {
				throw this.client.logger.error("reject() -> isValidReject() failed"), r$1;
			}
			const { id: t, reason: s } = e;
			let i$2;
			try {
				i$2 = this.client.proposal.get(t).pairingTopic;
			} catch (r$1) {
				throw this.client.logger.error(`reject() -> proposal.get(${t}) failed`), r$1;
			}
			i$2 && await this.sendError({
				id: t,
				topic: i$2,
				error: s,
				rpcOpts: N$1.wc_sessionPropose.reject
			}), await this.deleteProposal(t);
		}), c(this, "update", async (e) => {
			this.isInitialized(), await this.confirmOnlineStateOrThrow();
			try {
				await this.isValidUpdate(e);
			} catch (p$3) {
				throw this.client.logger.error("update() -> isValidUpdate() failed"), p$3;
			}
			const { topic: t, namespaces: s } = e, { done: i$2, resolve: r$1, reject: n$1 } = Ai(import_cjs.FIVE_MINUTES, "Session update request expired without receiving any acknowledgement"), a$1 = payloadId(), l$1 = getBigIntRpcId().toString(), h$2 = this.client.session.get(t).namespaces;
			return this.events.once($i("session_update", a$1), ({ error: p$3 }) => {
				p$3 ? n$1(p$3) : r$1();
			}), await this.client.session.update(t, { namespaces: s }), await this.sendRequest({
				topic: t,
				method: "wc_sessionUpdate",
				params: { namespaces: s },
				throwOnFailedPublish: !0,
				clientRpcId: a$1,
				relayRpcId: l$1
			}).catch((p$3) => {
				this.client.logger.error(p$3), this.client.session.update(t, { namespaces: h$2 }), n$1(p$3);
			}), { acknowledged: i$2 };
		}), c(this, "extend", async (e) => {
			this.isInitialized(), await this.confirmOnlineStateOrThrow();
			try {
				await this.isValidExtend(e);
			} catch (a$1) {
				throw this.client.logger.error("extend() -> isValidExtend() failed"), a$1;
			}
			const { topic: t } = e, s = payloadId(), { done: i$2, resolve: r$1, reject: n$1 } = Ai(import_cjs.FIVE_MINUTES, "Session extend request expired without receiving any acknowledgement");
			return this.events.once($i("session_extend", s), ({ error: a$1 }) => {
				a$1 ? n$1(a$1) : r$1();
			}), await this.setExpiry(t, _i(se$1)), this.sendRequest({
				topic: t,
				method: "wc_sessionExtend",
				params: {},
				clientRpcId: s,
				throwOnFailedPublish: !0
			}).catch((a$1) => {
				n$1(a$1);
			}), { acknowledged: i$2 };
		}), c(this, "request", async (e) => {
			this.isInitialized();
			try {
				await this.isValidRequest(e);
			} catch (g$1) {
				throw this.client.logger.error("request() -> isValidRequest() failed"), g$1;
			}
			const { chainId: t, request: s, topic: i$2, expiry: r$1 = N$1.wc_sessionRequest.req.ttl } = e, n$1 = this.client.session.get(i$2);
			n$1?.transportType === ee$1.relay && await this.confirmOnlineStateOrThrow();
			const a$1 = payloadId(), l$1 = getBigIntRpcId().toString(), { done: h$2, resolve: p$3, reject: y$2 } = Ai(r$1, "Request expired. Please try again.");
			this.events.once($i("session_request", a$1), ({ error: g$1, result: f$5 }) => {
				g$1 ? y$2(g$1) : p$3(f$5);
			});
			const d$3 = "wc_sessionRequest", u$1 = this.getAppLinkIfEnabled(n$1.peer.metadata, n$1.transportType);
			if (u$1) return await this.sendRequest({
				clientRpcId: a$1,
				relayRpcId: l$1,
				topic: i$2,
				method: d$3,
				params: {
					request: b$2(E$2({}, s), { expiryTimestamp: _i(r$1) }),
					chainId: t
				},
				expiry: r$1,
				throwOnFailedPublish: !0,
				appLink: u$1
			}).catch((g$1) => y$2(g$1)), this.client.events.emit("session_request_sent", {
				topic: i$2,
				request: s,
				chainId: t,
				id: a$1
			}), await h$2();
			const w$2 = {
				request: b$2(E$2({}, s), { expiryTimestamp: _i(r$1) }),
				chainId: t
			};
			return await Promise.all([
				new Promise(async (g$1) => {
					await this.sendRequest({
						clientRpcId: a$1,
						relayRpcId: l$1,
						topic: i$2,
						method: d$3,
						params: w$2,
						expiry: r$1,
						throwOnFailedPublish: !0,
						tvf: this.getTVFParams(a$1, w$2)
					}).catch((f$5) => y$2(f$5)), this.client.events.emit("session_request_sent", {
						topic: i$2,
						request: s,
						chainId: t,
						id: a$1
					}), g$1();
				}),
				new Promise(async (g$1) => {
					var f$5;
					if (!((f$5 = n$1.sessionConfig) != null && f$5.disableDeepLink)) await Ti({
						id: a$1,
						topic: i$2,
						wcDeepLink: await Ci(this.client.core.storage, $e$1)
					});
					g$1();
				}),
				h$2()
			]).then((g$1) => g$1[2]);
		}), c(this, "respond", async (e) => {
			var t, s;
			this.isInitialized();
			const i$2 = this.client.core.eventClient.createEvent({ properties: {
				topic: e?.topic || ((s = (t = e?.response) == null ? void 0 : t.id) == null ? void 0 : s.toString()),
				trace: [rr.session_request_response_started]
			} });
			try {
				await this.isValidRespond(e);
			} catch (p$3) {
				throw i$2.addTrace(p$3?.message), i$2.setError(nr.session_request_response_validation_failure), p$3;
			}
			i$2.addTrace(rr.session_request_response_validation_success);
			const { topic: r$1, response: n$1 } = e, { id: a$1 } = n$1, l$1 = this.client.session.get(r$1);
			l$1.transportType === ee$1.relay && await this.confirmOnlineStateOrThrow();
			const h$2 = this.getAppLinkIfEnabled(l$1.peer.metadata, l$1.transportType);
			try {
				i$2.addTrace(rr.session_request_response_publish_started), isJsonRpcResult(n$1) ? await this.sendResult({
					id: a$1,
					topic: r$1,
					result: n$1.result,
					throwOnFailedPublish: !0,
					appLink: h$2
				}) : isJsonRpcError(n$1) && await this.sendError({
					id: a$1,
					topic: r$1,
					error: n$1.error,
					appLink: h$2
				}), this.cleanupAfterResponse(e);
			} catch (p$3) {
				throw i$2.addTrace(p$3?.message), i$2.setError(nr.session_request_response_publish_failure), p$3;
			}
		}), c(this, "ping", async (e) => {
			this.isInitialized(), await this.confirmOnlineStateOrThrow();
			try {
				await this.isValidPing(e);
			} catch (s) {
				throw this.client.logger.error("ping() -> isValidPing() failed"), s;
			}
			const { topic: t } = e;
			if (this.client.session.keys.includes(t)) {
				const s = payloadId(), i$2 = getBigIntRpcId().toString(), { done: r$1, resolve: n$1, reject: a$1 } = Ai(import_cjs.FIVE_MINUTES, "Ping request expired without receiving any acknowledgement");
				this.events.once($i("session_ping", s), ({ error: l$1 }) => {
					l$1 ? a$1(l$1) : n$1();
				}), await Promise.all([this.sendRequest({
					topic: t,
					method: "wc_sessionPing",
					params: {},
					throwOnFailedPublish: !0,
					clientRpcId: s,
					relayRpcId: i$2
				}), r$1()]);
			} else this.client.core.pairing.pairings.keys.includes(t) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."), await this.client.core.pairing.ping({ topic: t }));
		}), c(this, "emit", async (e) => {
			this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(e);
			const { topic: t, event: s, chainId: i$2 } = e, r$1 = getBigIntRpcId().toString(), n$1 = payloadId();
			await this.sendRequest({
				topic: t,
				method: "wc_sessionEvent",
				params: {
					event: s,
					chainId: i$2
				},
				throwOnFailedPublish: !0,
				relayRpcId: r$1,
				clientRpcId: n$1
			});
		}), c(this, "disconnect", async (e) => {
			this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(e);
			const { topic: t } = e;
			if (this.client.session.keys.includes(t)) await this.sendRequest({
				topic: t,
				method: "wc_sessionDelete",
				params: zt("USER_DISCONNECTED"),
				throwOnFailedPublish: !0
			}), await this.deleteSession({
				topic: t,
				emitEvent: !1
			});
			else if (this.client.core.pairing.pairings.keys.includes(t)) await this.client.core.pairing.disconnect({ topic: t });
			else {
				const { message: s } = Bt$1("MISMATCHED_TOPIC", `Session or pairing topic not found: ${t}`);
				throw new Error(s);
			}
		}), c(this, "find", (e) => (this.isInitialized(), this.client.session.getAll().filter((t) => Wa(t, e)))), c(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()), c(this, "authenticate", async (e, t) => {
			var s;
			this.isInitialized(), this.isValidAuthenticate(e);
			const i$2 = t && this.client.core.linkModeSupportedApps.includes(t) && ((s = this.client.metadata.redirect) == null ? void 0 : s.linkMode), r$1 = i$2 ? ee$1.link_mode : ee$1.relay;
			r$1 === ee$1.relay && await this.confirmOnlineStateOrThrow();
			const { chains: n$1, statement: a$1 = "", uri: l$1, domain: h$2, nonce: p$3, type: y$2, exp: d$3, nbf: u$1, methods: w$2 = [], expiry: g$1 } = e, f$5 = [...e.resources || []], { topic: v$4, uri: T$3 } = await this.client.core.pairing.create({
				methods: ["wc_sessionAuthenticate"],
				transportType: r$1
			});
			this.client.logger.info({
				message: "Generated new pairing",
				pairing: {
					topic: v$4,
					uri: T$3
				}
			});
			const A$3 = await this.client.core.crypto.generateKeyPair(), V$3 = ba(A$3);
			if (await Promise.all([this.client.auth.authKeys.set(_e, {
				responseTopic: V$3,
				publicKey: A$3
			}), this.client.auth.pairingTopics.set(V$3, {
				topic: V$3,
				pairingTopic: v$4
			})]), await this.client.core.relayer.subscribe(V$3, { transportType: r$1 }), this.client.logger.info(`sending request to new pairing topic: ${v$4}`), w$2.length > 0) {
				const { namespace: C$4 } = Je(n$1[0]);
				let D$1 = Zc(C$4, "request", w$2);
				je$1(f$5) && (D$1 = Gc(D$1, f$5.pop())), f$5.push(D$1);
			}
			const x$2 = g$1 && g$1 > N$1.wc_sessionAuthenticate.req.ttl ? g$1 : N$1.wc_sessionAuthenticate.req.ttl, U$3 = {
				authPayload: {
					type: y$2 ?? "caip122",
					chains: n$1,
					statement: a$1,
					aud: l$1,
					domain: h$2,
					version: "1",
					nonce: p$3,
					iat: (/* @__PURE__ */ new Date()).toISOString(),
					exp: d$3,
					nbf: u$1,
					resources: f$5
				},
				requester: {
					publicKey: A$3,
					metadata: this.client.metadata
				},
				expiryTimestamp: _i(x$2)
			}, R$3 = {
				requiredNamespaces: {},
				optionalNamespaces: { eip155: {
					chains: n$1,
					methods: [...new Set(["personal_sign", ...w$2])],
					events: ["chainChanged", "accountsChanged"]
				} },
				relays: [{ protocol: "irn" }],
				pairingTopic: v$4,
				proposer: {
					publicKey: A$3,
					metadata: this.client.metadata
				},
				expiryTimestamp: _i(N$1.wc_sessionPropose.req.ttl),
				id: payloadId()
			}, { done: q$2, resolve: ve$3, reject: ce$2 } = Ai(x$2, "Request expired"), Y$2 = payloadId(), ie$3 = $i("session_connect", R$3.id), le$2 = $i("session_request", Y$2), J$5 = async ({ error: C$4, session: D$1 }) => {
				this.events.off(le$2, pe$2), C$4 ? ce$2(C$4) : D$1 && ve$3({ session: D$1 });
			}, pe$2 = async (C$4) => {
				var D$1, je$2, Fe$3;
				if (await this.deletePendingAuthRequest(Y$2, {
					message: "fulfilled",
					code: 0
				}), C$4.error) {
					const ue$1 = zt("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
					return C$4.error.code === ue$1.code ? void 0 : (this.events.off(ie$3, J$5), ce$2(C$4.error.message));
				}
				await this.deleteProposal(R$3.id), this.events.off(ie$3, J$5);
				const { cacaos: He$3, responder: X$3 } = C$4.result, Pe$3 = [], Qe$3 = [];
				for (const ue$1 of He$3) {
					await Vc({
						cacao: ue$1,
						projectId: this.client.core.projectId
					}) || (this.client.logger.error(ue$1, "Signature verification failed"), ce$2(zt("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
					const { p: Ne$1 } = ue$1, Oe$3 = je$1(Ne$1.resources), ze$2 = [no(Ne$1.iss)], Tt$3 = bn(Ne$1.iss);
					if (Oe$3) {
						const be$3 = zc(Oe$3), qt$3 = Yc(Oe$3);
						Pe$3.push(...be$3), ze$2.push(...qt$3);
					}
					for (const be$3 of ze$2) Qe$3.push(`${be$3}:${Tt$3}`);
				}
				const de$2 = await this.client.core.crypto.generateSharedKey(A$3, X$3.publicKey);
				let Se$3;
				Pe$3.length > 0 && (Se$3 = {
					topic: de$2,
					acknowledged: !0,
					self: {
						publicKey: A$3,
						metadata: this.client.metadata
					},
					peer: X$3,
					controller: X$3.publicKey,
					expiry: _i(se$1),
					requiredNamespaces: {},
					optionalNamespaces: {},
					relay: { protocol: "irn" },
					pairingTopic: v$4,
					namespaces: za([...new Set(Pe$3)], [...new Set(Qe$3)]),
					transportType: r$1
				}, await this.client.core.relayer.subscribe(de$2, { transportType: r$1 }), await this.client.session.set(de$2, Se$3), v$4 && await this.client.core.pairing.updateMetadata({
					topic: v$4,
					metadata: X$3.metadata
				}), Se$3 = this.client.session.get(de$2)), (D$1 = this.client.metadata.redirect) != null && D$1.linkMode && (je$2 = X$3.metadata.redirect) != null && je$2.linkMode && (Fe$3 = X$3.metadata.redirect) != null && Fe$3.universal && t && (this.client.core.addLinkModeSupportedApp(X$3.metadata.redirect.universal), this.client.session.update(de$2, { transportType: ee$1.link_mode })), ve$3({
					auths: He$3,
					session: Se$3
				});
			};
			this.events.once(ie$3, J$5), this.events.once(le$2, pe$2);
			let he$3;
			try {
				if (i$2) {
					const C$4 = formatJsonRpcRequest("wc_sessionAuthenticate", U$3, Y$2);
					this.client.core.history.set(v$4, C$4);
					he$3 = La(t, v$4, await this.client.core.crypto.encode("", C$4, {
						type: 2,
						encoding: Ge$1
					}));
				} else await Promise.all([this.sendRequest({
					topic: v$4,
					method: "wc_sessionAuthenticate",
					params: U$3,
					expiry: e.expiry,
					throwOnFailedPublish: !0,
					clientRpcId: Y$2
				}), this.sendRequest({
					topic: v$4,
					method: "wc_sessionPropose",
					params: R$3,
					expiry: N$1.wc_sessionPropose.req.ttl,
					throwOnFailedPublish: !0,
					clientRpcId: R$3.id
				})]);
			} catch (C$4) {
				throw this.events.off(ie$3, J$5), this.events.off(le$2, pe$2), C$4;
			}
			return await this.setProposal(R$3.id, R$3), await this.setAuthRequest(Y$2, {
				request: b$2(E$2({}, U$3), { verifyContext: {} }),
				pairingTopic: v$4,
				transportType: r$1
			}), {
				uri: he$3 ?? T$3,
				response: q$2
			};
		}), c(this, "approveSessionAuthenticate", async (e) => {
			const { id: t, auths: s } = e, i$2 = this.client.core.eventClient.createEvent({ properties: {
				topic: t.toString(),
				trace: [or.authenticated_session_approve_started]
			} });
			try {
				this.isInitialized();
			} catch (g$1) {
				throw i$2.setError(ar.no_internet_connection), g$1;
			}
			const r$1 = this.getPendingAuthRequest(t);
			if (!r$1) throw i$2.setError(ar.authenticated_session_pending_request_not_found), /* @__PURE__ */ new Error(`Could not find pending auth request with id ${t}`);
			const n$1 = r$1.transportType || ee$1.relay;
			n$1 === ee$1.relay && await this.confirmOnlineStateOrThrow();
			const a$1 = r$1.requester.publicKey, l$1 = await this.client.core.crypto.generateKeyPair(), h$2 = ba(a$1), p$3 = {
				type: 1,
				receiverPublicKey: a$1,
				senderPublicKey: l$1
			}, y$2 = [], d$3 = [];
			for (const g$1 of s) {
				if (!await Vc({
					cacao: g$1,
					projectId: this.client.core.projectId
				})) {
					i$2.setError(ar.invalid_cacao);
					const V$3 = zt("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
					throw await this.sendError({
						id: t,
						topic: h$2,
						error: V$3,
						encodeOpts: p$3
					}), new Error(V$3.message);
				}
				i$2.addTrace(or.cacaos_verified);
				const { p: f$5 } = g$1, v$4 = je$1(f$5.resources), T$3 = [no(f$5.iss)], A$3 = bn(f$5.iss);
				if (v$4) {
					const V$3 = zc(v$4), x$2 = Yc(v$4);
					y$2.push(...V$3), T$3.push(...x$2);
				}
				for (const V$3 of T$3) d$3.push(`${V$3}:${A$3}`);
			}
			const u$1 = await this.client.core.crypto.generateSharedKey(l$1, a$1);
			i$2.addTrace(or.create_authenticated_session_topic);
			let w$2;
			if (y$2?.length > 0) {
				w$2 = {
					topic: u$1,
					acknowledged: !0,
					self: {
						publicKey: l$1,
						metadata: this.client.metadata
					},
					peer: {
						publicKey: a$1,
						metadata: r$1.requester.metadata
					},
					controller: a$1,
					expiry: _i(se$1),
					authentication: s,
					requiredNamespaces: {},
					optionalNamespaces: {},
					relay: { protocol: "irn" },
					pairingTopic: r$1.pairingTopic,
					namespaces: za([...new Set(y$2)], [...new Set(d$3)]),
					transportType: n$1
				}, i$2.addTrace(or.subscribing_authenticated_session_topic);
				try {
					await this.client.core.relayer.subscribe(u$1, { transportType: n$1 });
				} catch (g$1) {
					throw i$2.setError(ar.subscribe_authenticated_session_topic_failure), g$1;
				}
				i$2.addTrace(or.subscribe_authenticated_session_topic_success), await this.client.session.set(u$1, w$2), i$2.addTrace(or.store_authenticated_session), await this.client.core.pairing.updateMetadata({
					topic: r$1.pairingTopic,
					metadata: r$1.requester.metadata
				});
			}
			i$2.addTrace(or.publishing_authenticated_session_approve);
			try {
				await this.sendResult({
					topic: h$2,
					id: t,
					result: {
						cacaos: s,
						responder: {
							publicKey: l$1,
							metadata: this.client.metadata
						}
					},
					encodeOpts: p$3,
					throwOnFailedPublish: !0,
					appLink: this.getAppLinkIfEnabled(r$1.requester.metadata, n$1)
				});
			} catch (g$1) {
				throw i$2.setError(ar.authenticated_session_approve_publish_failure), g$1;
			}
			return await this.client.auth.requests.delete(t, {
				message: "fulfilled",
				code: 0
			}), await this.client.core.pairing.activate({ topic: r$1.pairingTopic }), this.client.core.eventClient.deleteEvent({ eventId: i$2.eventId }), { session: w$2 };
		}), c(this, "rejectSessionAuthenticate", async (e) => {
			this.isInitialized();
			const { id: t, reason: s } = e, i$2 = this.getPendingAuthRequest(t);
			if (!i$2) throw new Error(`Could not find pending auth request with id ${t}`);
			i$2.transportType === ee$1.relay && await this.confirmOnlineStateOrThrow();
			const r$1 = i$2.requester.publicKey, n$1 = await this.client.core.crypto.generateKeyPair(), a$1 = ba(r$1), l$1 = {
				type: 1,
				receiverPublicKey: r$1,
				senderPublicKey: n$1
			};
			await this.sendError({
				id: t,
				topic: a$1,
				error: s,
				encodeOpts: l$1,
				rpcOpts: N$1.wc_sessionAuthenticate.reject,
				appLink: this.getAppLinkIfEnabled(i$2.requester.metadata, i$2.transportType)
			}), await this.client.auth.requests.delete(t, {
				message: "rejected",
				code: 0
			}), await this.deleteProposal(t);
		}), c(this, "formatAuthMessage", (e) => {
			this.isInitialized();
			const { request: t, iss: s } = e;
			return ro(t, s);
		}), c(this, "processRelayMessageCache", () => {
			setTimeout(async () => {
				if (this.relayMessageCache.length !== 0) for (; this.relayMessageCache.length > 0;) try {
					const e = this.relayMessageCache.shift();
					e && await this.onRelayMessage(e);
				} catch (e) {
					this.client.logger.error(e);
				}
			}, 50);
		}), c(this, "cleanupDuplicatePairings", async (e) => {
			if (e.pairingTopic) try {
				const t = this.client.core.pairing.pairings.get(e.pairingTopic), s = this.client.core.pairing.pairings.getAll().filter((i$2) => {
					var r$1, n$1;
					return ((r$1 = i$2.peerMetadata) == null ? void 0 : r$1.url) && ((n$1 = i$2.peerMetadata) == null ? void 0 : n$1.url) === e.peer.metadata.url && i$2.topic && i$2.topic !== t.topic;
				});
				if (s.length === 0) return;
				this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`), await Promise.all(s.map((i$2) => this.client.core.pairing.disconnect({ topic: i$2.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
			} catch (t) {
				this.client.logger.error(t);
			}
		}), c(this, "deleteSession", async (e) => {
			var t;
			const { topic: s, expirerHasDeleted: i$2 = !1, emitEvent: r$1 = !0, id: n$1 = 0 } = e, { self: a$1 } = this.client.session.get(s);
			await this.client.core.relayer.unsubscribe(s), await this.client.session.delete(s, zt("USER_DISCONNECTED")), this.addToRecentlyDeleted(s, "session"), this.client.core.crypto.keychain.has(a$1.publicKey) && await this.client.core.crypto.deleteKeyPair(a$1.publicKey), this.client.core.crypto.keychain.has(s) && await this.client.core.crypto.deleteSymKey(s), i$2 || this.client.core.expirer.del(s), this.client.core.storage.removeItem($e$1).catch((l$1) => this.client.logger.warn(l$1)), s === ((t = this.sessionRequestQueue.queue[0]) == null ? void 0 : t.topic) && (this.sessionRequestQueue.state = K$2.idle), await Promise.all(this.getPendingSessionRequests().filter((l$1) => l$1.topic === s).map((l$1) => this.deletePendingSessionRequest(l$1.id, zt("USER_DISCONNECTED")))), r$1 && this.client.events.emit("session_delete", {
				id: n$1,
				topic: s
			});
		}), c(this, "deleteProposal", async (e, t) => {
			if (t) try {
				const s = this.client.proposal.get(e);
				this.client.core.eventClient.getEvent({ topic: s.pairingTopic })?.setError(nr.proposal_expired);
			} catch {}
			await Promise.all([this.client.proposal.delete(e, zt("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)]), this.addToRecentlyDeleted(e, "proposal");
		}), c(this, "deletePendingSessionRequest", async (e, t, s = !1) => {
			await Promise.all([this.client.pendingRequest.delete(e, t), s ? Promise.resolve() : this.client.core.expirer.del(e)]), this.addToRecentlyDeleted(e, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i$2) => i$2.id !== e), s && (this.sessionRequestQueue.state = K$2.idle, this.client.events.emit("session_request_expire", { id: e }));
		}), c(this, "deletePendingAuthRequest", async (e, t, s = !1) => {
			await Promise.all([this.client.auth.requests.delete(e, t), s ? Promise.resolve() : this.client.core.expirer.del(e)]);
		}), c(this, "setExpiry", async (e, t) => {
			this.client.session.keys.includes(e) && (this.client.core.expirer.set(e, t), await this.client.session.update(e, { expiry: t }));
		}), c(this, "setProposal", async (e, t) => {
			this.client.core.expirer.set(e, _i(N$1.wc_sessionPropose.req.ttl)), await this.client.proposal.set(e, t);
		}), c(this, "setAuthRequest", async (e, t) => {
			const { request: s, pairingTopic: i$2, transportType: r$1 = ee$1.relay } = t;
			this.client.core.expirer.set(e, s.expiryTimestamp), await this.client.auth.requests.set(e, {
				authPayload: s.authPayload,
				requester: s.requester,
				expiryTimestamp: s.expiryTimestamp,
				id: e,
				pairingTopic: i$2,
				verifyContext: s.verifyContext,
				transportType: r$1
			});
		}), c(this, "setPendingSessionRequest", async (e) => {
			const { id: t, topic: s, params: i$2, verifyContext: r$1 } = e, n$1 = i$2.request.expiryTimestamp || _i(N$1.wc_sessionRequest.req.ttl);
			this.client.core.expirer.set(t, n$1), await this.client.pendingRequest.set(t, {
				id: t,
				topic: s,
				params: i$2,
				verifyContext: r$1
			});
		}), c(this, "sendRequest", async (e) => {
			const { topic: t, method: s, params: i$2, expiry: r$1, relayRpcId: n$1, clientRpcId: a$1, throwOnFailedPublish: l$1, appLink: h$2, tvf: p$3, publishOpts: y$2 = {} } = e, d$3 = formatJsonRpcRequest(s, i$2, a$1);
			let u$1;
			const w$2 = !!h$2;
			try {
				const v$4 = w$2 ? Ge$1 : oe$1;
				u$1 = await this.client.core.crypto.encode(t, d$3, { encoding: v$4 });
			} catch (v$4) {
				throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${t} failed`), v$4;
			}
			let g$1;
			if (wt$1.includes(s)) {
				const v$4 = ya(JSON.stringify(d$3)), T$3 = ya(u$1);
				g$1 = await this.client.core.verify.register({
					id: T$3,
					decryptedId: v$4
				});
			}
			const f$5 = E$2(E$2({}, N$1[s].req), y$2);
			if (f$5.attestation = g$1, r$1 && (f$5.ttl = r$1), n$1 && (f$5.id = n$1), this.client.core.history.set(t, d$3), w$2) {
				const v$4 = La(h$2, t, u$1);
				await global.Linking.openURL(v$4, this.client.name);
			} else f$5.tvf = b$2(E$2({}, p$3), { correlationId: d$3.id }), l$1 ? (f$5.internal = b$2(E$2({}, f$5.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(t, u$1, f$5)) : this.client.core.relayer.publish(t, u$1, f$5).catch((v$4) => this.client.logger.error(v$4));
			return d$3.id;
		}), c(this, "sendProposeSession", async (e) => {
			const { proposal: t, publishOpts: s } = e, i$2 = formatJsonRpcRequest("wc_sessionPropose", t, t.id);
			this.client.core.history.set(t.pairingTopic, i$2);
			const r$1 = await this.client.core.crypto.encode(t.pairingTopic, i$2, { encoding: oe$1 }), n$1 = ya(JSON.stringify(i$2)), a$1 = ya(r$1), l$1 = await this.client.core.verify.register({
				id: a$1,
				decryptedId: n$1
			});
			await this.client.core.relayer.publishCustom({
				payload: {
					pairingTopic: t.pairingTopic,
					sessionProposal: r$1
				},
				opts: b$2(E$2({}, s), {
					publishMethod: "wc_proposeSession",
					attestation: l$1
				})
			});
		}), c(this, "sendApproveSession", async (e) => {
			const { sessionTopic: t, pairingProposalResponse: s, proposal: i$2, sessionSettleRequest: r$1, publishOpts: n$1 } = e, a$1 = formatJsonRpcResult(i$2.id, s), l$1 = await this.client.core.crypto.encode(i$2.pairingTopic, a$1, { encoding: oe$1 }), h$2 = formatJsonRpcRequest("wc_sessionSettle", r$1, n$1?.id), p$3 = await this.client.core.crypto.encode(t, h$2, { encoding: oe$1 });
			this.client.core.history.set(t, h$2), await this.client.core.relayer.publishCustom({
				payload: {
					sessionTopic: t,
					pairingTopic: i$2.pairingTopic,
					sessionProposalResponse: l$1,
					sessionSettlementRequest: p$3
				},
				opts: b$2(E$2({}, n$1), { publishMethod: "wc_approveSession" })
			});
		}), c(this, "sendResult", async (e) => {
			const { id: t, topic: s, result: i$2, throwOnFailedPublish: r$1, encodeOpts: n$1, appLink: a$1 } = e, l$1 = formatJsonRpcResult(t, i$2);
			let h$2;
			const p$3 = a$1 && typeof (global == null ? void 0 : global.Linking) < "u";
			try {
				const u$1 = p$3 ? Ge$1 : oe$1;
				h$2 = await this.client.core.crypto.encode(s, l$1, b$2(E$2({}, n$1 || {}), { encoding: u$1 }));
			} catch (u$1) {
				throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s} failed`), u$1;
			}
			let y$2, d$3;
			try {
				y$2 = await this.client.core.history.get(s, t);
				const u$1 = y$2.request;
				try {
					d$3 = this.getTVFParams(t, u$1.params, i$2);
				} catch (w$2) {
					this.client.logger.warn(`sendResult() -> getTVFParams() failed: ${w$2?.message}`);
				}
			} catch (u$1) {
				throw this.client.logger.error(`sendResult() -> history.get(${s}, ${t}) failed`), u$1;
			}
			if (p$3) {
				const u$1 = La(a$1, s, h$2);
				await global.Linking.openURL(u$1, this.client.name);
			} else {
				const w$2 = N$1[y$2.request.method].res;
				w$2.tvf = b$2(E$2({}, d$3), { correlationId: t }), r$1 ? (w$2.internal = b$2(E$2({}, w$2.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, h$2, w$2)) : this.client.core.relayer.publish(s, h$2, w$2).catch((g$1) => this.client.logger.error(g$1));
			}
			await this.client.core.history.resolve(l$1);
		}), c(this, "sendError", async (e) => {
			const { id: t, topic: s, error: i$2, encodeOpts: r$1, rpcOpts: n$1, appLink: a$1 } = e, l$1 = formatJsonRpcError(t, i$2);
			let h$2;
			const p$3 = a$1 && typeof (global == null ? void 0 : global.Linking) < "u";
			try {
				const d$3 = p$3 ? Ge$1 : oe$1;
				h$2 = await this.client.core.crypto.encode(s, l$1, b$2(E$2({}, r$1 || {}), { encoding: d$3 }));
			} catch (d$3) {
				throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s} failed`), d$3;
			}
			let y$2;
			try {
				y$2 = await this.client.core.history.get(s, t);
			} catch (d$3) {
				throw this.client.logger.error(`sendError() -> history.get(${s}, ${t}) failed`), d$3;
			}
			if (p$3) {
				const d$3 = La(a$1, s, h$2);
				await global.Linking.openURL(d$3, this.client.name);
			} else {
				const d$3 = y$2.request.method, u$1 = n$1 || N$1[d$3].res;
				this.client.core.relayer.publish(s, h$2, u$1);
			}
			await this.client.core.history.resolve(l$1);
		}), c(this, "cleanup", async () => {
			const e = [], t = [];
			this.client.session.getAll().forEach((s) => {
				let i$2 = !1;
				Ri(s.expiry) && (i$2 = !0), this.client.core.crypto.keychain.has(s.topic) || (i$2 = !0), i$2 && e.push(s.topic);
			}), this.client.proposal.getAll().forEach((s) => {
				Ri(s.expiryTimestamp) && t.push(s.id);
			}), await Promise.all([...e.map((s) => this.deleteSession({ topic: s })), ...t.map((s) => this.deleteProposal(s))]);
		}), c(this, "onProviderMessageEvent", async (e) => {
			!this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(e) : await this.onRelayMessage(e);
		}), c(this, "onRelayEventRequest", async (e) => {
			this.requestQueue.queue.push(e), await this.processRequestsQueue();
		}), c(this, "processRequestsQueue", async () => {
			if (this.requestQueue.state === K$2.active) {
				this.client.logger.info("Request queue already active, skipping...");
				return;
			}
			for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;) {
				this.requestQueue.state = K$2.active;
				const e = this.requestQueue.queue.shift();
				if (e) try {
					await this.processRequest(e);
				} catch (t) {
					this.client.logger.warn(t);
				}
			}
			this.requestQueue.state = K$2.idle;
		}), c(this, "processRequest", async (e) => {
			const { topic: t, payload: s, attestation: i$2, transportType: r$1, encryptedId: n$1 } = e, a$1 = s.method;
			if (!this.shouldIgnorePairingRequest({
				topic: t,
				requestMethod: a$1
			})) switch (a$1) {
				case "wc_sessionPropose": return await this.onSessionProposeRequest({
					topic: t,
					payload: s,
					attestation: i$2,
					encryptedId: n$1
				});
				case "wc_sessionSettle": return await this.onSessionSettleRequest(t, s);
				case "wc_sessionUpdate": return await this.onSessionUpdateRequest(t, s);
				case "wc_sessionExtend": return await this.onSessionExtendRequest(t, s);
				case "wc_sessionPing": return await this.onSessionPingRequest(t, s);
				case "wc_sessionDelete": return await this.onSessionDeleteRequest(t, s);
				case "wc_sessionRequest": return await this.onSessionRequest({
					topic: t,
					payload: s,
					attestation: i$2,
					encryptedId: n$1,
					transportType: r$1
				});
				case "wc_sessionEvent": return await this.onSessionEventRequest(t, s);
				case "wc_sessionAuthenticate": return await this.onSessionAuthenticateRequest({
					topic: t,
					payload: s,
					attestation: i$2,
					encryptedId: n$1,
					transportType: r$1
				});
				default: return this.client.logger.info(`Unsupported request method ${a$1}`);
			}
		}), c(this, "onRelayEventResponse", async (e) => {
			const { topic: t, payload: s, transportType: i$2 } = e, r$1 = (await this.client.core.history.get(t, s.id)).request.method;
			switch (r$1) {
				case "wc_sessionPropose": return this.onSessionProposeResponse(t, s, i$2);
				case "wc_sessionSettle": return this.onSessionSettleResponse(t, s);
				case "wc_sessionUpdate": return this.onSessionUpdateResponse(t, s);
				case "wc_sessionExtend": return this.onSessionExtendResponse(t, s);
				case "wc_sessionPing": return this.onSessionPingResponse(t, s);
				case "wc_sessionRequest": return this.onSessionRequestResponse(t, s);
				case "wc_sessionAuthenticate": return this.onSessionAuthenticateResponse(t, s);
				default: return this.client.logger.info(`Unsupported response method ${r$1}`);
			}
		}), c(this, "onRelayEventUnknownPayload", (e) => {
			const { topic: t } = e, { message: s } = Bt$1("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
			throw new Error(s);
		}), c(this, "shouldIgnorePairingRequest", (e) => {
			const { topic: t, requestMethod: s } = e, i$2 = this.expectedPairingMethodMap.get(t);
			return !i$2 || i$2.includes(s) ? !1 : !!(i$2.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
		}), c(this, "onSessionProposeRequest", async (e) => {
			const { topic: t, payload: s, attestation: i$2, encryptedId: r$1 } = e, { params: n$1, id: a$1 } = s;
			try {
				const l$1 = this.client.core.eventClient.getEvent({ topic: t });
				this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), l$1?.setError(X$1.proposal_listener_not_found)), this.isValidConnect(E$2({}, s.params));
				const p$3 = E$2({
					id: a$1,
					pairingTopic: t,
					expiryTimestamp: n$1.expiryTimestamp || _i(N$1.wc_sessionPropose.req.ttl),
					attestation: i$2,
					encryptedId: r$1
				}, n$1);
				await this.setProposal(a$1, p$3);
				const y$2 = await this.getVerifyContext({
					attestationId: i$2,
					hash: ya(JSON.stringify(s)),
					encryptedId: r$1,
					metadata: p$3.proposer.metadata
				});
				l$1?.addTrace(Y$1.emit_session_proposal), this.client.events.emit("session_proposal", {
					id: a$1,
					params: p$3,
					verifyContext: y$2
				});
			} catch (l$1) {
				await this.sendError({
					id: a$1,
					topic: t,
					error: l$1,
					rpcOpts: N$1.wc_sessionPropose.autoReject
				}), this.client.logger.error(l$1);
			}
		}), c(this, "onSessionProposeResponse", async (e, t, s) => {
			const { id: i$2 } = t;
			if (isJsonRpcResult(t)) {
				const { result: r$1 } = t;
				this.client.logger.trace({
					type: "method",
					method: "onSessionProposeResponse",
					result: r$1
				});
				const n$1 = this.client.proposal.get(i$2);
				this.client.logger.trace({
					type: "method",
					method: "onSessionProposeResponse",
					proposal: n$1
				});
				const a$1 = n$1.proposer.publicKey;
				this.client.logger.trace({
					type: "method",
					method: "onSessionProposeResponse",
					selfPublicKey: a$1
				});
				const l$1 = r$1.responderPublicKey;
				this.client.logger.trace({
					type: "method",
					method: "onSessionProposeResponse",
					peerPublicKey: l$1
				});
				const h$2 = await this.client.core.crypto.generateSharedKey(a$1, l$1);
				this.pendingSessions.set(i$2, {
					sessionTopic: h$2,
					pairingTopic: e,
					proposalId: i$2,
					publicKey: a$1
				});
				const p$3 = await this.client.core.relayer.subscribe(h$2, { transportType: s });
				this.client.logger.trace({
					type: "method",
					method: "onSessionProposeResponse",
					subscriptionId: p$3
				}), await this.client.core.pairing.activate({ topic: e });
			} else if (isJsonRpcError(t)) {
				await this.deleteProposal(i$2);
				const r$1 = $i("session_connect", i$2);
				if (this.events.listenerCount(r$1) === 0) throw new Error(`emitting ${r$1} without any listeners, 954`);
				this.events.emit(r$1, { error: t.error });
			}
		}), c(this, "onSessionSettleRequest", async (e, t) => {
			const { id: s, params: i$2 } = t;
			try {
				this.isValidSessionSettleRequest(i$2);
				const { relay: r$1, controller: n$1, expiry: a$1, namespaces: l$1, sessionProperties: h$2, scopedProperties: p$3, sessionConfig: y$2, proposalRequestsResponses: d$3 } = t.params, u$1 = [...this.pendingSessions.values()].find((f$5) => f$5.sessionTopic === e);
				if (!u$1) return this.client.logger.error(`Pending session not found for topic ${e}`);
				const w$2 = this.client.proposal.get(u$1.proposalId), g$1 = b$2(E$2(E$2(E$2({
					topic: e,
					relay: r$1,
					expiry: a$1,
					namespaces: l$1,
					acknowledged: !0,
					pairingTopic: u$1.pairingTopic,
					requiredNamespaces: w$2.requiredNamespaces,
					optionalNamespaces: w$2.optionalNamespaces,
					controller: n$1.publicKey,
					self: {
						publicKey: u$1.publicKey,
						metadata: this.client.metadata
					},
					peer: {
						publicKey: n$1.publicKey,
						metadata: n$1.metadata
					}
				}, h$2 && { sessionProperties: h$2 }), p$3 && { scopedProperties: p$3 }), y$2 && { sessionConfig: y$2 }), {
					transportType: ee$1.relay,
					authentication: d$3?.authentication,
					walletPayResult: d$3?.walletPay
				});
				await this.client.session.set(g$1.topic, g$1), await this.setExpiry(g$1.topic, g$1.expiry), await this.client.core.pairing.updateMetadata({
					topic: u$1.pairingTopic,
					metadata: g$1.peer.metadata
				}), this.pendingSessions.delete(u$1.proposalId), this.deleteProposal(u$1.proposalId, !1), this.cleanupDuplicatePairings(g$1), await this.sendResult({
					id: t.id,
					topic: e,
					throwOnFailedPublish: !0,
					result: !0
				}), this.client.events.emit("session_connect", { session: g$1 }), this.events.emit($i("session_connect", u$1.proposalId), { session: g$1 });
			} catch (r$1) {
				await this.sendError({
					id: s,
					topic: e,
					error: r$1
				}), this.client.logger.error(r$1);
			}
		}), c(this, "onSessionSettleResponse", async (e, t) => {
			const { id: s } = t;
			isJsonRpcResult(t) ? (await this.client.session.update(e, { acknowledged: !0 }), this.events.emit($i("session_approve", s), {})) : isJsonRpcError(t) && (await this.client.session.delete(e, zt("USER_DISCONNECTED")), this.events.emit($i("session_approve", s), { error: t.error }));
		}), c(this, "onSessionUpdateRequest", async (e, t) => {
			const { params: s, id: i$2 } = t;
			try {
				const r$1 = `${e}_session_update`, n$1 = mu.get(r$1);
				if (n$1 && this.isRequestOutOfSync(n$1, i$2)) {
					this.client.logger.warn(`Discarding out of sync request - ${i$2}`), this.sendError({
						id: i$2,
						topic: e,
						error: zt("INVALID_UPDATE_REQUEST")
					});
					return;
				}
				this.isValidUpdate(E$2({ topic: e }, s));
				try {
					mu.set(r$1, i$2), await this.client.session.update(e, { namespaces: s.namespaces }), await this.sendResult({
						id: i$2,
						topic: e,
						result: !0
					});
				} catch (a$1) {
					throw mu.delete(r$1), a$1;
				}
				this.client.events.emit("session_update", {
					id: i$2,
					topic: e,
					params: s
				});
			} catch (r$1) {
				await this.sendError({
					id: i$2,
					topic: e,
					error: r$1
				}), this.client.logger.error(r$1);
			}
		}), c(this, "isRequestOutOfSync", (e, t) => t.toString().slice(0, -3) < e.toString().slice(0, -3)), c(this, "onSessionUpdateResponse", (e, t) => {
			const { id: s } = t, i$2 = $i("session_update", s);
			if (this.events.listenerCount(i$2) === 0) throw new Error(`emitting ${i$2} without any listeners`);
			isJsonRpcResult(t) ? this.events.emit($i("session_update", s), {}) : isJsonRpcError(t) && this.events.emit($i("session_update", s), { error: t.error });
		}), c(this, "onSessionExtendRequest", async (e, t) => {
			const { id: s } = t;
			try {
				this.isValidExtend({ topic: e }), await this.setExpiry(e, _i(se$1)), await this.sendResult({
					id: s,
					topic: e,
					result: !0
				}), this.client.events.emit("session_extend", {
					id: s,
					topic: e
				});
			} catch (i$2) {
				await this.sendError({
					id: s,
					topic: e,
					error: i$2
				}), this.client.logger.error(i$2);
			}
		}), c(this, "onSessionExtendResponse", (e, t) => {
			const { id: s } = t, i$2 = $i("session_extend", s);
			if (this.events.listenerCount(i$2) === 0) throw new Error(`emitting ${i$2} without any listeners`);
			isJsonRpcResult(t) ? this.events.emit($i("session_extend", s), {}) : isJsonRpcError(t) && this.events.emit($i("session_extend", s), { error: t.error });
		}), c(this, "onSessionPingRequest", async (e, t) => {
			const { id: s } = t;
			try {
				this.isValidPing({ topic: e }), await this.sendResult({
					id: s,
					topic: e,
					result: !0,
					throwOnFailedPublish: !0
				}), this.client.events.emit("session_ping", {
					id: s,
					topic: e
				});
			} catch (i$2) {
				await this.sendError({
					id: s,
					topic: e,
					error: i$2
				}), this.client.logger.error(i$2);
			}
		}), c(this, "onSessionPingResponse", (e, t) => {
			const { id: s } = t, i$2 = $i("session_ping", s);
			setTimeout(() => {
				if (this.events.listenerCount(i$2) === 0) throw new Error(`emitting ${i$2} without any listeners 2176`);
				isJsonRpcResult(t) ? this.events.emit($i("session_ping", s), {}) : isJsonRpcError(t) && this.events.emit($i("session_ping", s), { error: t.error });
			}, 500);
		}), c(this, "onSessionDeleteRequest", async (e, t) => {
			const { id: s } = t;
			try {
				await this.isValidDisconnect({
					topic: e,
					reason: t.params
				}), this.cleanupPendingSentRequestsForTopic({
					topic: e,
					error: zt("USER_DISCONNECTED")
				}), await this.deleteSession({
					topic: e,
					id: s
				});
			} catch (i$2) {
				this.client.logger.error(i$2);
			}
		}), c(this, "onSessionRequest", async (e) => {
			var t, s, i$2;
			const { topic: r$1, payload: n$1, attestation: a$1, encryptedId: l$1, transportType: h$2 } = e, { id: p$3, params: y$2 } = n$1;
			try {
				await this.isValidRequest(E$2({ topic: r$1 }, y$2));
				const d$3 = this.client.session.get(r$1), w$2 = {
					id: p$3,
					topic: r$1,
					params: y$2,
					verifyContext: await this.getVerifyContext({
						attestationId: a$1,
						hash: ya(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest", y$2, p$3))),
						encryptedId: l$1,
						metadata: d$3.peer.metadata,
						transportType: h$2
					})
				};
				await this.setPendingSessionRequest(w$2), h$2 === ee$1.link_mode && (t = d$3.peer.metadata.redirect) != null && t.universal && this.client.core.addLinkModeSupportedApp((s = d$3.peer.metadata.redirect) == null ? void 0 : s.universal), (i$2 = this.client.signConfig) != null && i$2.disableRequestQueue ? this.emitSessionRequest(w$2) : (this.addSessionRequestToSessionRequestQueue(w$2), this.processSessionRequestQueue());
			} catch (d$3) {
				await this.sendError({
					id: p$3,
					topic: r$1,
					error: d$3
				}), this.client.logger.error(d$3);
			}
		}), c(this, "onSessionRequestResponse", (e, t) => {
			const { id: s } = t, i$2 = $i("session_request", s);
			if (this.events.listenerCount(i$2) === 0) throw new Error(`emitting ${i$2} without any listeners`);
			isJsonRpcResult(t) ? this.events.emit($i("session_request", s), { result: t.result }) : isJsonRpcError(t) && this.events.emit($i("session_request", s), { error: t.error });
		}), c(this, "onSessionEventRequest", async (e, t) => {
			const { id: s, params: i$2 } = t;
			try {
				const r$1 = `${e}_session_event_${i$2.event.name}`, n$1 = mu.get(r$1);
				if (n$1 && this.isRequestOutOfSync(n$1, s)) {
					this.client.logger.info(`Discarding out of sync request - ${s}`);
					return;
				}
				this.isValidEmit(E$2({ topic: e }, i$2)), this.client.events.emit("session_event", {
					id: s,
					topic: e,
					params: i$2
				}), mu.set(r$1, s);
			} catch (r$1) {
				await this.sendError({
					id: s,
					topic: e,
					error: r$1
				}), this.client.logger.error(r$1);
			}
		}), c(this, "onSessionAuthenticateResponse", (e, t) => {
			const { id: s } = t;
			this.client.logger.trace({
				type: "method",
				method: "onSessionAuthenticateResponse",
				topic: e,
				payload: t
			}), isJsonRpcResult(t) ? this.events.emit($i("session_request", s), { result: t.result }) : isJsonRpcError(t) && this.events.emit($i("session_request", s), { error: t.error });
		}), c(this, "onSessionAuthenticateRequest", async (e) => {
			var t;
			const { topic: s, payload: i$2, attestation: r$1, encryptedId: n$1, transportType: a$1 } = e;
			try {
				const { requester: l$1, authPayload: h$2, expiryTimestamp: p$3 } = i$2.params, y$2 = await this.getVerifyContext({
					attestationId: r$1,
					hash: ya(JSON.stringify(i$2)),
					encryptedId: n$1,
					metadata: l$1.metadata,
					transportType: a$1
				}), d$3 = {
					requester: l$1,
					pairingTopic: s,
					id: i$2.id,
					authPayload: h$2,
					verifyContext: y$2,
					expiryTimestamp: p$3
				};
				await this.setAuthRequest(i$2.id, {
					request: d$3,
					pairingTopic: s,
					transportType: a$1
				}), a$1 === ee$1.link_mode && (t = l$1.metadata.redirect) != null && t.universal && this.client.core.addLinkModeSupportedApp(l$1.metadata.redirect.universal), this.client.events.emit("session_authenticate", {
					topic: s,
					params: i$2.params,
					id: i$2.id,
					verifyContext: y$2
				});
			} catch (l$1) {
				this.client.logger.error(l$1);
				const h$2 = i$2.params.requester.publicKey, p$3 = await this.client.core.crypto.generateKeyPair(), y$2 = this.getAppLinkIfEnabled(i$2.params.requester.metadata, a$1), d$3 = {
					type: 1,
					receiverPublicKey: h$2,
					senderPublicKey: p$3
				};
				await this.sendError({
					id: i$2.id,
					topic: s,
					error: l$1,
					encodeOpts: d$3,
					rpcOpts: N$1.wc_sessionAuthenticate.autoReject,
					appLink: y$2
				});
			}
		}), c(this, "addSessionRequestToSessionRequestQueue", (e) => {
			this.sessionRequestQueue.queue.push(e);
		}), c(this, "cleanupAfterResponse", (e) => {
			this.deletePendingSessionRequest(e.response.id, {
				message: "fulfilled",
				code: 0
			}), setTimeout(() => {
				this.sessionRequestQueue.state = K$2.idle, this.processSessionRequestQueue();
			}, (0, import_cjs.toMiliseconds)(this.requestQueueDelay));
		}), c(this, "cleanupPendingSentRequestsForTopic", ({ topic: e, error: t }) => {
			const s = this.client.core.history.pending;
			s.length > 0 && s.filter((i$2) => i$2.topic === e && i$2.request.method === "wc_sessionRequest").forEach((i$2) => {
				this.events.emit($i("session_request", i$2.request.id), { error: t });
			});
		}), c(this, "processSessionRequestQueue", () => {
			if (this.sessionRequestQueue.state === K$2.active) {
				this.client.logger.info("session request queue is already active.");
				return;
			}
			const e = this.sessionRequestQueue.queue[0];
			if (!e) {
				this.client.logger.info("session request queue is empty.");
				return;
			}
			try {
				this.emitSessionRequest(e);
			} catch (t) {
				this.client.logger.error(t);
			}
		}), c(this, "emitSessionRequest", (e) => {
			if (this.emittedSessionRequests.has(e.id)) {
				this.client.logger.warn({ id: e.id }, `Skipping emitting \`session_request\` event for duplicate request. id: ${e.id}`);
				return;
			}
			this.sessionRequestQueue.state = K$2.active, this.emittedSessionRequests.add(e.id), this.client.events.emit("session_request", e);
		}), c(this, "onPairingCreated", (e) => {
			if (e.methods && this.expectedPairingMethodMap.set(e.topic, e.methods), e.active) return;
			const t = this.client.proposal.getAll().find((s) => s.pairingTopic === e.topic);
			t && this.onSessionProposeRequest({
				topic: e.topic,
				payload: formatJsonRpcRequest("wc_sessionPropose", b$2(E$2({}, t), {
					requiredNamespaces: t.requiredNamespaces,
					optionalNamespaces: t.optionalNamespaces,
					relays: t.relays,
					proposer: t.proposer,
					sessionProperties: t.sessionProperties,
					scopedProperties: t.scopedProperties
				}), t.id),
				attestation: t.attestation,
				encryptedId: t.encryptedId
			});
		}), c(this, "isValidConnect", async (e) => {
			if (!ou(e)) {
				const { message: l$1 } = Bt$1("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
				throw new Error(l$1);
			}
			const { pairingTopic: t, requiredNamespaces: s, optionalNamespaces: i$2, sessionProperties: r$1, scopedProperties: n$1, relays: a$1 } = e;
			if (Dt$1(t) || await this.isValidPairingTopic(t), !nu(a$1, !0)) {
				const { message: l$1 } = Bt$1("MISSING_OR_INVALID", `connect() relays: ${a$1}`);
				throw new Error(l$1);
			}
			if (s && !Dt$1(s) && Ye(s) !== 0) {
				const l$1 = "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
				[
					"fatal",
					"error",
					"silent"
				].includes(this.client.logger.level) ? console.warn(l$1) : this.client.logger.warn(l$1), this.validateNamespaces(s, "requiredNamespaces");
			}
			if (i$2 && !Dt$1(i$2) && Ye(i$2) !== 0 && this.validateNamespaces(i$2, "optionalNamespaces"), r$1 && !Dt$1(r$1) && this.validateSessionProps(r$1, "sessionProperties"), n$1 && !Dt$1(n$1)) {
				this.validateSessionProps(n$1, "scopedProperties");
				const l$1 = Object.keys(s || {}).concat(Object.keys(i$2 || {}));
				if (!Object.keys(n$1).every((h$2) => l$1.includes(h$2.split(":")[0]))) throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(n$1)}, required/optional namespaces: ${JSON.stringify(l$1)}`);
			}
		}), c(this, "validateNamespaces", (e, t) => {
			const s = eu(e, "connect()", t);
			if (s) throw new Error(s.message);
		}), c(this, "isValidApprove", async (e) => {
			if (!ou(e)) throw new Error(Bt$1("MISSING_OR_INVALID", `approve() params: ${e}`).message);
			const { id: t, namespaces: s, relayProtocol: i$2, sessionProperties: r$1, scopedProperties: n$1 } = e;
			this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
			const a$1 = this.client.proposal.get(t), l$1 = Ns(s, "approve()");
			if (l$1) throw new Error(l$1.message);
			const h$2 = _s(a$1.requiredNamespaces, s, "approve()");
			if (h$2) throw new Error(h$2.message);
			if (!ft$1(i$2, !0)) {
				const { message: p$3 } = Bt$1("MISSING_OR_INVALID", `approve() relayProtocol: ${i$2}`);
				throw new Error(p$3);
			}
			if (r$1 && !Dt$1(r$1) && this.validateSessionProps(r$1, "sessionProperties"), n$1 && !Dt$1(n$1)) {
				this.validateSessionProps(n$1, "scopedProperties");
				const p$3 = new Set(Object.keys(s));
				if (!Object.keys(n$1).every((y$2) => p$3.has(y$2.split(":")[0]))) throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(n$1)}, approved namespaces: ${Array.from(p$3).join(", ")}`);
			}
		}), c(this, "isValidReject", async (e) => {
			if (!ou(e)) {
				const { message: i$2 } = Bt$1("MISSING_OR_INVALID", `reject() params: ${e}`);
				throw new Error(i$2);
			}
			const { id: t, reason: s } = e;
			if (this.checkRecentlyDeleted(t), await this.isValidProposalId(t), !su(s)) {
				const { message: i$2 } = Bt$1("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
				throw new Error(i$2);
			}
		}), c(this, "isValidSessionSettleRequest", (e) => {
			if (!ou(e)) {
				const { message: l$1 } = Bt$1("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
				throw new Error(l$1);
			}
			const { relay: t, controller: s, namespaces: i$2, expiry: r$1 } = e;
			if (!Us(t)) {
				const { message: l$1 } = Bt$1("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
				throw new Error(l$1);
			}
			const n$1 = tu(s, "onSessionSettleRequest()");
			if (n$1) throw new Error(n$1.message);
			const a$1 = Ns(i$2, "onSessionSettleRequest()");
			if (a$1) throw new Error(a$1.message);
			if (Ri(r$1)) {
				const { message: l$1 } = Bt$1("EXPIRED", "onSessionSettleRequest()");
				throw new Error(l$1);
			}
		}), c(this, "isValidUpdate", async (e) => {
			if (!ou(e)) {
				const { message: a$1 } = Bt$1("MISSING_OR_INVALID", `update() params: ${e}`);
				throw new Error(a$1);
			}
			const { topic: t, namespaces: s } = e;
			this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
			const i$2 = this.client.session.get(t), r$1 = Ns(s, "update()");
			if (r$1) throw new Error(r$1.message);
			const n$1 = _s(i$2.requiredNamespaces, s, "update()");
			if (n$1) throw new Error(n$1.message);
		}), c(this, "isValidExtend", async (e) => {
			if (!ou(e)) {
				const { message: s } = Bt$1("MISSING_OR_INVALID", `extend() params: ${e}`);
				throw new Error(s);
			}
			const { topic: t } = e;
			this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
		}), c(this, "isValidRequest", async (e) => {
			if (!ou(e)) {
				const { message: a$1 } = Bt$1("MISSING_OR_INVALID", `request() params: ${e}`);
				throw new Error(a$1);
			}
			const { topic: t, request: s, chainId: i$2, expiry: r$1 } = e;
			this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
			const { namespaces: n$1 } = this.client.session.get(t);
			if (!au(n$1, i$2)) {
				const { message: a$1 } = Bt$1("MISSING_OR_INVALID", `request() chainId: ${i$2}`);
				throw new Error(a$1);
			}
			if (!iu(s)) {
				const { message: a$1 } = Bt$1("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
				throw new Error(a$1);
			}
			if (!uu(n$1, i$2, s.method)) {
				const { message: a$1 } = Bt$1("MISSING_OR_INVALID", `request() method: ${s.method}`);
				throw new Error(a$1);
			}
			this.validateRequestExpiry(r$1);
		}), c(this, "isValidRespond", async (e) => {
			var t;
			if (!ou(e)) {
				const { message: n$1 } = Bt$1("MISSING_OR_INVALID", `respond() params: ${e}`);
				throw new Error(n$1);
			}
			const { topic: s, response: i$2 } = e;
			try {
				await this.isValidSessionTopic(s);
			} catch (n$1) {
				throw (t = e?.response) != null && t.id && this.cleanupAfterResponse(e), n$1;
			}
			if (!cu(i$2)) {
				const { message: n$1 } = Bt$1("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i$2)}`);
				throw new Error(n$1);
			}
			const r$1 = this.client.pendingRequest.get(i$2.id);
			if (r$1.topic !== s) {
				const { message: n$1 } = Bt$1("MISMATCHED_TOPIC", `Request response topic mismatch. reqId: ${i$2.id}, expected topic: ${r$1.topic}, received topic: ${s}`);
				throw new Error(n$1);
			}
		}), c(this, "isValidPing", async (e) => {
			if (!ou(e)) {
				const { message: s } = Bt$1("MISSING_OR_INVALID", `ping() params: ${e}`);
				throw new Error(s);
			}
			const { topic: t } = e;
			await this.isValidSessionOrPairingTopic(t);
		}), c(this, "isValidEmit", async (e) => {
			if (!ou(e)) {
				const { message: n$1 } = Bt$1("MISSING_OR_INVALID", `emit() params: ${e}`);
				throw new Error(n$1);
			}
			const { topic: t, event: s, chainId: i$2 } = e;
			await this.isValidSessionTopic(t);
			const { namespaces: r$1 } = this.client.session.get(t);
			if (!au(r$1, i$2)) {
				const { message: n$1 } = Bt$1("MISSING_OR_INVALID", `emit() chainId: ${i$2}`);
				throw new Error(n$1);
			}
			if (!fu(s)) {
				const { message: n$1 } = Bt$1("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
				throw new Error(n$1);
			}
			if (!lu(r$1, i$2, s.name)) {
				const { message: n$1 } = Bt$1("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
				throw new Error(n$1);
			}
		}), c(this, "isValidDisconnect", async (e) => {
			if (!ou(e)) {
				const { message: s } = Bt$1("MISSING_OR_INVALID", `disconnect() params: ${e}`);
				throw new Error(s);
			}
			const { topic: t } = e;
			await this.isValidSessionOrPairingTopic(t);
		}), c(this, "isValidAuthenticate", (e) => {
			const { chains: t, uri: s, domain: i$2, nonce: r$1 } = e;
			if (!Array.isArray(t) || t.length === 0) throw new Error("chains is required and must be a non-empty array");
			if (!ft$1(s, !1)) throw new Error("uri is required parameter");
			if (!ft$1(i$2, !1)) throw new Error("domain is required parameter");
			if (!ft$1(r$1, !1)) throw new Error("nonce is required parameter");
			if ([...new Set(t.map((a$1) => Je(a$1).namespace))].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
			const { namespace: n$1 } = Je(t[0]);
			if (n$1 !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
		}), c(this, "getVerifyContext", async (e) => {
			const { attestationId: t, hash: s, encryptedId: i$2, metadata: r$1, transportType: n$1 } = e, a$1 = { verified: {
				verifyUrl: r$1.verifyUrl || "https://verify.walletconnect.org",
				validation: "UNKNOWN",
				origin: r$1.url || ""
			} };
			try {
				if (n$1 === ee$1.link_mode) {
					const h$2 = this.getAppLinkIfEnabled(r$1, n$1);
					return a$1.verified.validation = h$2 && new URL(h$2).origin === new URL(r$1.url).origin ? "VALID" : "INVALID", a$1;
				}
				const l$1 = await this.client.core.verify.resolve({
					attestationId: t,
					hash: s,
					encryptedId: i$2,
					verifyUrl: r$1.verifyUrl
				});
				l$1 && (a$1.verified.origin = l$1.origin, a$1.verified.isScam = l$1.isScam, a$1.verified.validation = l$1.origin === new URL(r$1.url).origin ? "VALID" : "INVALID");
			} catch (l$1) {
				this.client.logger.warn(l$1);
			}
			return this.client.logger.debug(`Verify context: ${JSON.stringify(a$1)}`), a$1;
		}), c(this, "validateSessionProps", (e, t) => {
			Object.values(e).forEach((s, i$2) => {
				if (s == null) {
					const { message: r$1 } = Bt$1("MISSING_OR_INVALID", `${t} must contain an existing value for each key. Received: ${s} for key ${Object.keys(e)[i$2]}`);
					throw new Error(r$1);
				}
			});
		}), c(this, "getPendingAuthRequest", (e) => {
			const t = this.client.auth.requests.get(e);
			return typeof t == "object" ? t : void 0;
		}), c(this, "addToRecentlyDeleted", (e, t) => {
			if (this.recentlyDeletedMap.set(e, t), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
				let s = 0;
				const i$2 = this.recentlyDeletedLimit / 2;
				for (const r$1 of this.recentlyDeletedMap.keys()) {
					if (s++ >= i$2) break;
					this.recentlyDeletedMap.delete(r$1);
				}
			}
		}), c(this, "checkRecentlyDeleted", (e) => {
			const t = this.recentlyDeletedMap.get(e);
			if (t) {
				const { message: s } = Bt$1("MISSING_OR_INVALID", `Record was recently deleted - ${t}: ${e}`);
				throw new Error(s);
			}
		}), c(this, "isLinkModeEnabled", (e, t) => {
			var s, i$2, r$1, n$1, a$1, l$1, h$2, p$3, y$2;
			return !e || t !== ee$1.link_mode ? !1 : ((i$2 = (s = this.client.metadata) == null ? void 0 : s.redirect) == null ? void 0 : i$2.linkMode) === !0 && ((n$1 = (r$1 = this.client.metadata) == null ? void 0 : r$1.redirect) == null ? void 0 : n$1.universal) !== void 0 && ((l$1 = (a$1 = this.client.metadata) == null ? void 0 : a$1.redirect) == null ? void 0 : l$1.universal) !== "" && ((h$2 = e?.redirect) == null ? void 0 : h$2.universal) !== void 0 && ((p$3 = e?.redirect) == null ? void 0 : p$3.universal) !== "" && ((y$2 = e?.redirect) == null ? void 0 : y$2.linkMode) === !0 && this.client.core.linkModeSupportedApps.includes(e.redirect.universal) && typeof (global == null ? void 0 : global.Linking) < "u";
		}), c(this, "getAppLinkIfEnabled", (e, t) => {
			var s;
			return this.isLinkModeEnabled(e, t) ? (s = e?.redirect) == null ? void 0 : s.universal : void 0;
		}), c(this, "handleLinkModeMessage", ({ url: e }) => {
			if (!e || !e.includes("wc_ev") || !e.includes("topic")) return;
			const t = ji$1(e, "topic") || "", s = decodeURIComponent(ji$1(e, "wc_ev") || ""), i$2 = this.client.session.keys.includes(t);
			i$2 && this.client.session.update(t, { transportType: ee$1.link_mode }), this.client.core.dispatchEnvelope({
				topic: t,
				message: s,
				sessionExists: i$2
			});
		}), c(this, "registerLinkModeListeners", async () => {
			var e;
			if (ki() || It$1() && (e = this.client.metadata.redirect) != null && e.linkMode) {
				const t = global == null ? void 0 : global.Linking;
				if (typeof t < "u") {
					t.addEventListener("url", this.handleLinkModeMessage, this.client.name);
					const s = await t.getInitialURL();
					s && setTimeout(() => {
						this.handleLinkModeMessage({ url: s });
					}, 50);
				}
			}
		}), c(this, "getTVFApproveParams", (e) => {
			try {
				return {
					approvedChains: gs(e.namespaces),
					approvedMethods: qa(e.namespaces),
					approvedEvents: Fa(e.namespaces),
					sessionProperties: e.sessionProperties,
					scopedProperties: e.scopedProperties
				};
			} catch (t) {
				return this.client.logger.warn(t, "Error getting TVF approve params"), {};
			}
		}), c(this, "getTVFParams", (e, t, s) => {
			var i$2, r$1, n$1;
			if (!((i$2 = t.request) != null && i$2.method)) return {};
			const a$1 = {
				correlationId: e,
				rpcMethods: [t.request.method],
				chainId: t.chainId
			};
			try {
				a$1.txHashes = this.extractTxHashesFromResult(t.request, s), a$1.contractAddresses = this.isValidContractData(t.request.params) ? [(n$1 = (r$1 = t.request.params) == null ? void 0 : r$1[0]) == null ? void 0 : n$1.to] : [];
			} catch (l$1) {
				this.client.logger.warn(l$1, "Error getting TVF params");
			}
			return a$1;
		}), c(this, "isValidContractData", (e) => {
			var t;
			if (!e) return !1;
			try {
				const s = e?.data || ((t = e?.[0]) == null ? void 0 : t.data);
				if (!s.startsWith("0x")) return !1;
				const i$2 = s.slice(2);
				return /^[0-9a-fA-F]*$/.test(i$2) ? i$2.length % 2 === 0 : !1;
			} catch {}
			return !1;
		}), c(this, "extractTxHashesFromResult", (e, t) => {
			var s;
			try {
				if (!t) return [];
				const i$2 = e.method, r$1 = yt$1[i$2];
				if (i$2 === "sui_signTransaction") return [Uc(t.transactionBytes)];
				if (i$2 === "near_signTransaction") return [_c(t)];
				if (i$2 === "near_signTransactions") return t.map((a$1) => _c(a$1));
				if (i$2 === "xrpl_signTransactionFor" || i$2 === "xrpl_signTransaction") return [(s = t.tx_json) == null ? void 0 : s.hash];
				if (i$2 === "polkadot_signTransaction") return [Bu({
					transaction: e.params.transactionPayload,
					signature: t.signature
				})];
				if (i$2 === "algo_signTxn") return Be(t) ? t.map((a$1) => Rc(a$1)) : [Rc(t)];
				if (i$2 === "cosmos_signDirect") return [$c(t)];
				if (i$2 === "wallet_sendCalls") return Tc(t);
				if (typeof t == "string") return [t];
				const n$1 = t[r$1.key];
				if (Be(n$1)) return i$2 === "solana_signAllTransactions" ? n$1.map((a$1) => Nc(a$1)) : n$1;
				if (typeof n$1 == "string") return [n$1];
			} catch (i$2) {
				this.client.logger.warn(i$2, "Error extracting tx hashes from result");
			}
			return [];
		});
	}
	async processPendingMessageEvents() {
		try {
			const o$1 = this.client.session.keys, e = this.client.core.relayer.messages.getWithoutAck(o$1);
			for (const [t, s] of Object.entries(e)) for (const i$2 of s) try {
				await this.onProviderMessageEvent({
					topic: t,
					message: i$2,
					publishedAt: Date.now()
				});
			} catch {
				this.client.logger.warn(`Error processing pending message event for topic: ${t}, message: ${i$2}`);
			}
		} catch (o$1) {
			this.client.logger.warn(o$1, "processPendingMessageEvents failed");
		}
	}
	isInitialized() {
		if (!this.initialized) {
			const { message: o$1 } = Bt$1("NOT_INITIALIZED", this.name);
			throw new Error(o$1);
		}
	}
	async confirmOnlineStateOrThrow() {
		await this.client.core.relayer.confirmOnlineStateOrThrow();
	}
	registerRelayerEvents() {
		this.client.core.relayer.on(C$2.message, (o$1) => {
			this.onProviderMessageEvent(o$1);
		});
	}
	async onRelayMessage(o$1) {
		const { topic: e, message: t, attestation: s, transportType: i$2 } = o$1, { publicKey: r$1 } = this.client.auth.authKeys.keys.includes(_e) ? this.client.auth.authKeys.get(_e) : {
			responseTopic: void 0,
			publicKey: void 0
		};
		try {
			const n$1 = await this.client.core.crypto.decode(e, t, {
				receiverPublicKey: r$1,
				encoding: i$2 === ee$1.link_mode ? Ge$1 : oe$1
			});
			isJsonRpcRequest(n$1) ? (this.client.core.history.set(e, n$1), await this.onRelayEventRequest({
				topic: e,
				payload: n$1,
				attestation: s,
				transportType: i$2,
				encryptedId: ya(t)
			})) : isJsonRpcResponse(n$1) ? (await this.client.core.history.resolve(n$1), await this.onRelayEventResponse({
				topic: e,
				payload: n$1,
				transportType: i$2
			}), this.client.core.history.delete(e, n$1.id)) : (this.client.logger.error(`onRelayMessage() -> unknown payload: ${JSON.stringify(n$1)}`), await this.onRelayEventUnknownPayload({
				topic: e,
				payload: n$1,
				transportType: i$2
			})), await this.client.core.relayer.messages.ack(e, t);
		} catch (n$1) {
			this.client.logger.error(`onRelayMessage() -> failed to process an inbound message: ${t}`), this.client.logger.error(n$1);
		}
	}
	registerExpirerEvents() {
		this.client.core.expirer.on(q$1.expired, async (o$1) => {
			const { topic: e, id: t } = Ui(o$1.target);
			if (t && this.client.pendingRequest.keys.includes(t)) return await this.deletePendingSessionRequest(t, Bt$1("EXPIRED"), !0);
			if (t && this.client.auth.requests.keys.includes(t)) return await this.deletePendingAuthRequest(t, Bt$1("EXPIRED"), !0);
			e ? this.client.session.keys.includes(e) && (await this.deleteSession({
				topic: e,
				expirerHasDeleted: !0
			}), this.client.events.emit("session_expire", { topic: e })) : t && (await this.deleteProposal(t, !0), this.client.events.emit("proposal_expire", { id: t }));
		});
	}
	registerPairingEvents() {
		this.client.core.pairing.events.on(ae$1.create, (o$1) => this.onPairingCreated(o$1)), this.client.core.pairing.events.on(ae$1.delete, (o$1) => {
			this.addToRecentlyDeleted(o$1.topic, "pairing");
		});
	}
	isValidPairingTopic(o$1) {
		if (!ft$1(o$1, !1)) {
			const { message: e } = Bt$1("MISSING_OR_INVALID", `pairing topic should be a string: ${o$1}`);
			throw new Error(e);
		}
		if (!this.client.core.pairing.pairings.keys.includes(o$1)) {
			const { message: e } = Bt$1("NO_MATCHING_KEY", `pairing topic doesn't exist: ${o$1}`);
			throw new Error(e);
		}
		if (Ri(this.client.core.pairing.pairings.get(o$1).expiry)) {
			const { message: e } = Bt$1("EXPIRED", `pairing topic: ${o$1}`);
			throw new Error(e);
		}
	}
	async isValidSessionTopic(o$1) {
		if (!ft$1(o$1, !1)) {
			const { message: e } = Bt$1("MISSING_OR_INVALID", `session topic should be a string: ${o$1}`);
			throw new Error(e);
		}
		if (this.checkRecentlyDeleted(o$1), !this.client.session.keys.includes(o$1)) {
			const { message: e } = Bt$1("NO_MATCHING_KEY", `session topic doesn't exist: ${o$1}`);
			throw new Error(e);
		}
		if (Ri(this.client.session.get(o$1).expiry)) {
			await this.deleteSession({ topic: o$1 });
			const { message: e } = Bt$1("EXPIRED", `session topic: ${o$1}`);
			throw new Error(e);
		}
		if (!this.client.core.crypto.keychain.has(o$1)) {
			const { message: e } = Bt$1("MISSING_OR_INVALID", `session topic does not exist in keychain: ${o$1}`);
			throw await this.deleteSession({ topic: o$1 }), new Error(e);
		}
	}
	async isValidSessionOrPairingTopic(o$1) {
		if (this.checkRecentlyDeleted(o$1), this.client.session.keys.includes(o$1)) await this.isValidSessionTopic(o$1);
		else if (this.client.core.pairing.pairings.keys.includes(o$1)) this.isValidPairingTopic(o$1);
		else if (ft$1(o$1, !1)) {
			const { message: e } = Bt$1("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${o$1}`);
			throw new Error(e);
		} else {
			const { message: e } = Bt$1("MISSING_OR_INVALID", `session or pairing topic should be a string: ${o$1}`);
			throw new Error(e);
		}
	}
	async isValidProposalId(o$1) {
		if (!ru(o$1)) {
			const { message: e } = Bt$1("MISSING_OR_INVALID", `proposal id should be a number: ${o$1}`);
			throw new Error(e);
		}
		if (!this.client.proposal.keys.includes(o$1)) {
			const { message: e } = Bt$1("NO_MATCHING_KEY", `proposal id doesn't exist: ${o$1}`);
			throw new Error(e);
		}
		if (Ri(this.client.proposal.get(o$1).expiryTimestamp)) {
			await this.deleteProposal(o$1);
			const { message: e } = Bt$1("EXPIRED", `proposal id: ${o$1}`);
			throw new Error(e);
		}
	}
	validateRequestExpiry(o$1) {
		if (o$1 && !pu(o$1, Te$1)) {
			const { message: e } = Bt$1("MISSING_OR_INVALID", `request() expiry: ${o$1}. Expiry must be a number (in seconds) between ${Te$1.min} and ${Te$1.max}`);
			throw new Error(e);
		}
	}
};
var Ls = class extends ji {
	constructor(o$1, e) {
		super(o$1, e, dt$1, Re), this.core = o$1, this.logger = e;
	}
};
var It$2 = class extends ji {
	constructor(o$1, e) {
		super(o$1, e, ut$2, Re), this.core = o$1, this.logger = e;
	}
};
var Ms = class extends ji {
	constructor(o$1, e) {
		super(o$1, e, mt$1, Re, (t) => t.id), this.core = o$1, this.logger = e;
	}
};
var $s = class extends ji {
	constructor(o$1, e) {
		super(o$1, e, St$1, we$1, () => _e), this.core = o$1, this.logger = e;
	}
};
var Ks = class extends ji {
	constructor(o$1, e) {
		super(o$1, e, Et$1, we$1), this.core = o$1, this.logger = e;
	}
};
var Us$1 = class extends ji {
	constructor(o$1, e) {
		super(o$1, e, ft$2, we$1, (t) => t.id), this.core = o$1, this.logger = e;
	}
};
var Gs = Object.defineProperty, js = (S$4, o$1, e) => o$1 in S$4 ? Gs(S$4, o$1, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: e
}) : S$4[o$1] = e, Ge$2 = (S$4, o$1, e) => js(S$4, typeof o$1 != "symbol" ? o$1 + "" : o$1, e);
var Fs = class {
	constructor(o$1, e) {
		this.core = o$1, this.logger = e, Ge$2(this, "authKeys"), Ge$2(this, "pairingTopics"), Ge$2(this, "requests"), this.authKeys = new $s(this.core, this.logger), this.pairingTopics = new Ks(this.core, this.logger), this.requests = new Us$1(this.core, this.logger);
	}
	async init() {
		await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
	}
};
var Hs = Object.defineProperty, Qs = (S$4, o$1, e) => o$1 in S$4 ? Hs(S$4, o$1, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: e
}) : S$4[o$1] = e, _$1 = (S$4, o$1, e) => Qs(S$4, typeof o$1 != "symbol" ? o$1 + "" : o$1, e);
var Ys = class qe extends J$2 {
	constructor(o$1) {
		super(o$1), _$1(this, "protocol", "wc"), _$1(this, "version", 2), _$1(this, "name", Ie$1.name), _$1(this, "metadata"), _$1(this, "core"), _$1(this, "logger"), _$1(this, "events", new import_events$2.EventEmitter()), _$1(this, "engine"), _$1(this, "session"), _$1(this, "proposal"), _$1(this, "pendingRequest"), _$1(this, "auth"), _$1(this, "signConfig"), _$1(this, "on", (t, s) => this.events.on(t, s)), _$1(this, "once", (t, s) => this.events.once(t, s)), _$1(this, "off", (t, s) => this.events.off(t, s)), _$1(this, "removeListener", (t, s) => this.events.removeListener(t, s)), _$1(this, "removeAllListeners", (t) => this.events.removeAllListeners(t)), _$1(this, "connect", async (t) => {
			try {
				return await this.engine.connect(t);
			} catch (s) {
				throw this.logger.error(s.message), s;
			}
		}), _$1(this, "pair", async (t) => {
			try {
				return await this.engine.pair(t);
			} catch (s) {
				throw this.logger.error(s.message), s;
			}
		}), _$1(this, "approve", async (t) => {
			try {
				return await this.engine.approve(t);
			} catch (s) {
				throw this.logger.error(s.message), s;
			}
		}), _$1(this, "reject", async (t) => {
			try {
				return await this.engine.reject(t);
			} catch (s) {
				throw this.logger.error(s.message), s;
			}
		}), _$1(this, "update", async (t) => {
			try {
				return await this.engine.update(t);
			} catch (s) {
				throw this.logger.error(s.message), s;
			}
		}), _$1(this, "extend", async (t) => {
			try {
				return await this.engine.extend(t);
			} catch (s) {
				throw this.logger.error(s.message), s;
			}
		}), _$1(this, "request", async (t) => {
			try {
				return await this.engine.request(t);
			} catch (s) {
				throw this.logger.error(s.message), s;
			}
		}), _$1(this, "respond", async (t) => {
			try {
				return await this.engine.respond(t);
			} catch (s) {
				throw this.logger.error(s.message), s;
			}
		}), _$1(this, "ping", async (t) => {
			try {
				return await this.engine.ping(t);
			} catch (s) {
				throw this.logger.error(s.message), s;
			}
		}), _$1(this, "emit", async (t) => {
			try {
				return await this.engine.emit(t);
			} catch (s) {
				throw this.logger.error(s.message), s;
			}
		}), _$1(this, "disconnect", async (t) => {
			try {
				return await this.engine.disconnect(t);
			} catch (s) {
				throw this.logger.error(s.message), s;
			}
		}), _$1(this, "find", (t) => {
			try {
				return this.engine.find(t);
			} catch (s) {
				throw this.logger.error(s.message), s;
			}
		}), _$1(this, "getPendingSessionRequests", () => {
			try {
				return this.engine.getPendingSessionRequests();
			} catch (t) {
				throw this.logger.error(t.message), t;
			}
		}), _$1(this, "authenticate", async (t, s) => {
			try {
				return await this.engine.authenticate(t, s);
			} catch (i$2) {
				throw this.logger.error(i$2.message), i$2;
			}
		}), _$1(this, "formatAuthMessage", (t) => {
			try {
				return this.engine.formatAuthMessage(t);
			} catch (s) {
				throw this.logger.error(s.message), s;
			}
		}), _$1(this, "approveSessionAuthenticate", async (t) => {
			try {
				return await this.engine.approveSessionAuthenticate(t);
			} catch (s) {
				throw this.logger.error(s.message), s;
			}
		}), _$1(this, "rejectSessionAuthenticate", async (t) => {
			try {
				return await this.engine.rejectSessionAuthenticate(t);
			} catch (s) {
				throw this.logger.error(s.message), s;
			}
		}), this.name = o$1?.name || Ie$1.name, this.metadata = pi(o$1?.metadata), this.signConfig = o$1?.signConfig;
		this.logger = Iu({
			logger: o$1?.logger || Ie$1.logger,
			name: this.name
		}), this.core = o$1?.core || new ta(o$1), this.session = new It$2(this.core, this.logger), this.proposal = new Ls(this.core, this.logger), this.pendingRequest = new Ms(this.core, this.logger), this.engine = new Ds(this), this.auth = new Fs(this.core, this.logger);
	}
	static async init(o$1) {
		const e = new qe(o$1);
		return await e.initialize(), e;
	}
	get context() {
		return ee$2(this.logger);
	}
	get pairing() {
		return this.core.pairing.pairings;
	}
	async initialize() {
		this.logger.trace("Initialized");
		try {
			await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.auth.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success");
		} catch (o$1) {
			throw this.logger.info("SignClient Initialization Failure"), this.logger.error(o$1.message), o$1;
		}
	}
};
var import_events$1 = /* @__PURE__ */ __toESM(require_events(), 1);
function x(t) {
	return t == null || typeof t != "object" && typeof t != "function";
}
function T$1(t) {
	return Object.getOwnPropertySymbols(t).filter((e) => Object.prototype.propertyIsEnumerable.call(t, e));
}
function ee(t) {
	return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
var He = "[object RegExp]", te = "[object String]", se = "[object Number]", ie = "[object Boolean]", ne = "[object Arguments]", Ue = "[object Symbol]", Be$1 = "[object Date]", Le = "[object Map]", Me = "[object Set]", ze = "[object Array]", Ge = "[object ArrayBuffer]", We = "[object Object]", Je$1 = "[object DataView]", Ke = "[object Uint8Array]", Ve = "[object Uint8ClampedArray]", Ye$1 = "[object Uint16Array]", Xe = "[object Uint32Array]", ke = "[object Int8Array]", Qe = "[object Int16Array]", Ze = "[object Int32Array]", Te = "[object Float32Array]", et$1 = "[object Float64Array]";
function F$1(t) {
	return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function tt$1(t, e) {
	return y(t, void 0, t, /* @__PURE__ */ new Map(), e);
}
function y(t, e, s, i$2 = /* @__PURE__ */ new Map(), r$1 = void 0) {
	const a$1 = r$1?.(t, e, s, i$2);
	if (a$1 != null) return a$1;
	if (x(t)) return t;
	if (i$2.has(t)) return i$2.get(t);
	if (Array.isArray(t)) {
		const n$1 = new Array(t.length);
		i$2.set(t, n$1);
		for (let c$2 = 0; c$2 < t.length; c$2++) n$1[c$2] = y(t[c$2], c$2, s, i$2, r$1);
		return Object.hasOwn(t, "index") && (n$1.index = t.index), Object.hasOwn(t, "input") && (n$1.input = t.input), n$1;
	}
	if (t instanceof Date) return new Date(t.getTime());
	if (t instanceof RegExp) {
		const n$1 = new RegExp(t.source, t.flags);
		return n$1.lastIndex = t.lastIndex, n$1;
	}
	if (t instanceof Map) {
		const n$1 = /* @__PURE__ */ new Map();
		i$2.set(t, n$1);
		for (const [c$2, o$1] of t) n$1.set(c$2, y(o$1, c$2, s, i$2, r$1));
		return n$1;
	}
	if (t instanceof Set) {
		const n$1 = /* @__PURE__ */ new Set();
		i$2.set(t, n$1);
		for (const c$2 of t) n$1.add(y(c$2, void 0, s, i$2, r$1));
		return n$1;
	}
	if (typeof Buffer < "u" && Buffer.isBuffer(t)) return t.subarray();
	if (F$1(t)) {
		const n$1 = new (Object.getPrototypeOf(t)).constructor(t.length);
		i$2.set(t, n$1);
		for (let c$2 = 0; c$2 < t.length; c$2++) n$1[c$2] = y(t[c$2], c$2, s, i$2, r$1);
		return n$1;
	}
	if (t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
	if (t instanceof DataView) {
		const n$1 = new DataView(t.buffer.slice(0), t.byteOffset, t.byteLength);
		return i$2.set(t, n$1), m(n$1, t, s, i$2, r$1), n$1;
	}
	if (typeof File < "u" && t instanceof File) {
		const n$1 = new File([t], t.name, { type: t.type });
		return i$2.set(t, n$1), m(n$1, t, s, i$2, r$1), n$1;
	}
	if (t instanceof Blob) {
		const n$1 = new Blob([t], { type: t.type });
		return i$2.set(t, n$1), m(n$1, t, s, i$2, r$1), n$1;
	}
	if (t instanceof Error) {
		const n$1 = new t.constructor();
		return i$2.set(t, n$1), n$1.message = t.message, n$1.name = t.name, n$1.stack = t.stack, n$1.cause = t.cause, m(n$1, t, s, i$2, r$1), n$1;
	}
	if (typeof t == "object" && st$1(t)) {
		const n$1 = Object.create(Object.getPrototypeOf(t));
		return i$2.set(t, n$1), m(n$1, t, s, i$2, r$1), n$1;
	}
	return t;
}
function m(t, e, s = t, i$2, r$1) {
	const a$1 = [...Object.keys(e), ...T$1(e)];
	for (let n$1 = 0; n$1 < a$1.length; n$1++) {
		const c$2 = a$1[n$1], o$1 = Object.getOwnPropertyDescriptor(t, c$2);
		(o$1 == null || o$1.writable) && (t[c$2] = y(e[c$2], c$2, s, i$2, r$1));
	}
}
function st$1(t) {
	switch (ee(t)) {
		case ne:
		case ze:
		case Ge:
		case Je$1:
		case ie:
		case Be$1:
		case Te:
		case et$1:
		case ke:
		case Qe:
		case Ze:
		case Le:
		case se:
		case We:
		case He:
		case Me:
		case te:
		case Ue:
		case Ke:
		case Ve:
		case Ye$1:
		case Xe: return !0;
		default: return !1;
	}
}
function it(t, e) {
	return tt$1(t, (s, i$2, r$1, a$1) => {
		const n$1 = e?.(s, i$2, r$1, a$1);
		if (n$1 != null) return n$1;
		if (typeof t == "object") switch (Object.prototype.toString.call(t)) {
			case se:
			case te:
			case ie: {
				const c$2 = new t.constructor(t?.valueOf());
				return m(c$2, t), c$2;
			}
			case ne: {
				const c$2 = {};
				return m(c$2, t), c$2.length = t.length, c$2[Symbol.iterator] = t[Symbol.iterator], c$2;
			}
			default: return;
		}
	});
}
function re(t) {
	return it(t);
}
function ae(t) {
	return t !== null && typeof t == "object" && ee(t) === "[object Arguments]";
}
function ce(t) {
	return typeof t == "object" && t !== null;
}
function nt$1() {}
function rt(t) {
	return F$1(t);
}
function at(t) {
	if (typeof t != "object" || t == null) return !1;
	if (Object.getPrototypeOf(t) === null) return !0;
	if (Object.prototype.toString.call(t) !== "[object Object]") {
		const s = t[Symbol.toStringTag];
		return s == null || !Object.getOwnPropertyDescriptor(t, Symbol.toStringTag)?.writable ? !1 : t.toString() === `[object ${s}]`;
	}
	let e = t;
	for (; Object.getPrototypeOf(e) !== null;) e = Object.getPrototypeOf(e);
	return Object.getPrototypeOf(t) === e;
}
function ct(t) {
	if (x(t)) return t;
	if (Array.isArray(t) || F$1(t) || t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
	const e = Object.getPrototypeOf(t), s = e.constructor;
	if (t instanceof Date || t instanceof Map || t instanceof Set) return new s(t);
	if (t instanceof RegExp) {
		const i$2 = new s(t);
		return i$2.lastIndex = t.lastIndex, i$2;
	}
	if (t instanceof DataView) return new s(t.buffer.slice(0));
	if (t instanceof Error) {
		const i$2 = new s(t.message);
		return i$2.stack = t.stack, i$2.name = t.name, i$2.cause = t.cause, i$2;
	}
	if (typeof File < "u" && t instanceof File) return new s([t], t.name, {
		type: t.type,
		lastModified: t.lastModified
	});
	if (typeof t == "object") {
		const i$2 = Object.create(e);
		return Object.assign(i$2, t);
	}
	return t;
}
function ot(t, ...e) {
	const s = e.slice(0, -1), i$2 = e[e.length - 1];
	let r$1 = t;
	for (let a$1 = 0; a$1 < s.length; a$1++) {
		const n$1 = s[a$1];
		r$1 = $(r$1, n$1, i$2, /* @__PURE__ */ new Map());
	}
	return r$1;
}
function $(t, e, s, i$2) {
	if (x(t) && (t = Object(t)), e == null || typeof e != "object") return t;
	if (i$2.has(e)) return ct(i$2.get(e));
	if (i$2.set(e, t), Array.isArray(e)) {
		e = e.slice();
		for (let a$1 = 0; a$1 < e.length; a$1++) e[a$1] = e[a$1] ?? void 0;
	}
	const r$1 = [...Object.keys(e), ...T$1(e)];
	for (let a$1 = 0; a$1 < r$1.length; a$1++) {
		const n$1 = r$1[a$1];
		let c$2 = e[n$1], o$1 = t[n$1];
		if (ae(c$2) && (c$2 = { ...c$2 }), ae(o$1) && (o$1 = { ...o$1 }), typeof Buffer < "u" && Buffer.isBuffer(c$2) && (c$2 = re(c$2)), Array.isArray(c$2)) if (typeof o$1 == "object" && o$1 != null) {
			const l$1 = [], h$2 = Reflect.ownKeys(o$1);
			for (let f$5 = 0; f$5 < h$2.length; f$5++) {
				const u$1 = h$2[f$5];
				l$1[u$1] = o$1[u$1];
			}
			o$1 = l$1;
		} else o$1 = [];
		const p$3 = s(o$1, c$2, n$1, t, e, i$2);
		p$3 != null ? t[n$1] = p$3 : Array.isArray(c$2) || ce(o$1) && ce(c$2) ? t[n$1] = $(o$1, c$2, s, i$2) : o$1 == null && at(c$2) ? t[n$1] = $({}, c$2, s, i$2) : o$1 == null && rt(c$2) ? t[n$1] = re(c$2) : (o$1 === void 0 || c$2 !== void 0) && (t[n$1] = c$2);
	}
	return t;
}
function ht(t, ...e) {
	return ot(t, ...e, nt$1);
}
var oe = "error", pt = "wss://relay.walletconnect.org", lt = "wc", he = "universal_provider", A$1 = `${lt}@2:${he}:`, pe = "https://rpc.walletconnect.org/v1/", le = "generic", ut$1 = `${pe}bundler`, v$1 = "call_status", dt = 86400, H$1 = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var ft = Object.defineProperty, mt = Object.defineProperties, gt = Object.getOwnPropertyDescriptors, ue = Object.getOwnPropertySymbols, yt = Object.prototype.hasOwnProperty, vt = Object.prototype.propertyIsEnumerable, de = (t, e, s) => e in t ? ft(t, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: s
}) : t[e] = s, E$1 = (t, e) => {
	for (var s in e || (e = {})) yt.call(e, s) && de(t, s, e[s]);
	if (ue) for (var s of ue(e)) vt.call(e, s) && de(t, s, e[s]);
	return t;
}, wt = (t, e) => mt(t, gt(e));
function fe(t, e, s) {
	var i$2;
	const r$1 = Je(t);
	return ((i$2 = e.rpcMap) == null ? void 0 : i$2[r$1.reference]) || `${pe}?chainId=${r$1.namespace}:${r$1.reference}&projectId=${s}`;
}
function bt(t) {
	return t.includes(":") ? t.split(":")[1] : t;
}
function me(t) {
	return t.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
}
function Pt(t, e) {
	const s = Object.keys(e.namespaces).filter((r$1) => r$1.includes(t));
	if (!s.length) return [];
	const i$2 = [];
	return s.forEach((r$1) => {
		const a$1 = e.namespaces[r$1].accounts;
		i$2.push(...a$1);
	}), i$2;
}
function ge(t) {
	return Object.fromEntries(Object.entries(t).filter(([e, s]) => {
		var i$2, r$1;
		return ((i$2 = s?.chains) == null ? void 0 : i$2.length) && ((r$1 = s?.chains) == null ? void 0 : r$1.length) > 0;
	}));
}
function C$1(t = {}, e = {}) {
	return ht(ge(ye(t)), ge(ye(e)));
}
function ye(t) {
	var e, s, i$2, r$1, a$1;
	const n$1 = {};
	if (!Ye(t)) return n$1;
	for (const [c$2, o$1] of Object.entries(t)) {
		const p$3 = Gn(c$2) ? [c$2] : o$1.chains, l$1 = o$1.methods || [], h$2 = o$1.events || [], f$5 = o$1.rpcMap || {}, u$1 = ms(c$2);
		n$1[u$1] = wt(E$1(E$1({}, n$1[u$1]), o$1), {
			chains: ut(p$3, (e = n$1[u$1]) == null ? void 0 : e.chains),
			methods: ut(l$1, (s = n$1[u$1]) == null ? void 0 : s.methods),
			events: ut(h$2, (i$2 = n$1[u$1]) == null ? void 0 : i$2.events)
		}), (Ye(f$5) || Ye(((r$1 = n$1[u$1]) == null ? void 0 : r$1.rpcMap) || {})) && (n$1[u$1].rpcMap = E$1(E$1({}, f$5), (a$1 = n$1[u$1]) == null ? void 0 : a$1.rpcMap));
	}
	return n$1;
}
function ve(t) {
	return t.includes(":") ? t.split(":")[2] : t;
}
function we(t) {
	const e = {};
	for (const [s, i$2] of Object.entries(t)) {
		const r$1 = i$2.methods || [], a$1 = i$2.events || [], n$1 = i$2.accounts || [];
		e[s] = {
			chains: Gn(s) ? [s] : i$2.chains ? i$2.chains : me(i$2.accounts),
			methods: r$1,
			events: a$1,
			accounts: n$1
		};
	}
	return e;
}
function U$1(t) {
	return typeof t == "number" ? t : t.includes("0x") ? parseInt(t, 16) : (t = t.includes(":") ? t.split(":")[1] : t, isNaN(Number(t)) ? t : Number(t));
}
function Ot(t) {
	try {
		const e = JSON.parse(t);
		return typeof e == "object" && e !== null && !Array.isArray(e);
	} catch {
		return !1;
	}
}
var be = {}, w$1 = (t) => be[t], B$1 = (t, e) => {
	be[t] = e;
};
var It = Object.defineProperty, Pe = Object.getOwnPropertySymbols, St = Object.prototype.hasOwnProperty, $t = Object.prototype.propertyIsEnumerable, Oe = (t, e, s) => e in t ? It(t, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: s
}) : t[e] = s, Ie = (t, e) => {
	for (var s in e || (e = {})) St.call(e, s) && Oe(t, s, e[s]);
	if (Pe) for (var s of Pe(e)) $t.call(e, s) && Oe(t, s, e[s]);
	return t;
};
var Se = "eip155", At = [
	"atomic",
	"flow-control",
	"paymasterService",
	"sessionKeys",
	"auxiliaryFunds"
], Et = (t) => t && t.startsWith("0x") ? BigInt(t).toString(10) : t, L$1 = (t) => t && t.startsWith("0x") ? t : `0x${BigInt(t).toString(16)}`, $e = (t) => Object.keys(t).filter((e) => At.includes(e)).reduce((e, s) => (e[s] = Ct(t[s]), e), {}), Ct = (t) => typeof t == "string" && Ot(t) ? JSON.parse(t) : t, jt = (t, e, s) => {
	const { sessionProperties: i$2 = {}, scopedProperties: r$1 = {} } = t, a$1 = {};
	if (!Ye(r$1) && !Ye(i$2)) return;
	const n$1 = $e(i$2);
	for (const c$2 of s) {
		const o$1 = Et(c$2);
		if (!o$1) continue;
		a$1[L$1(o$1)] = n$1;
		const p$3 = r$1?.[`${Se}:${o$1}`];
		if (p$3) {
			const l$1 = p$3?.[`${Se}:${o$1}:${e}`];
			a$1[L$1(o$1)] = Ie(Ie({}, a$1[L$1(o$1)]), $e(l$1 || p$3));
		}
	}
	for (const [c$2, o$1] of Object.entries(a$1)) Object.keys(o$1).length === 0 && delete a$1[c$2];
	return Object.keys(a$1).length > 0 ? a$1 : void 0;
};
var Nt = Object.defineProperty, qt = (t, e, s) => e in t ? Nt(t, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: s
}) : t[e] = s, Dt = (t, e, s) => qt(t, typeof e != "symbol" ? e + "" : e, s);
var M$1;
var K$1 = class K$1 {
	constructor(e) {
		Dt(this, "storage"), this.storage = e;
	}
	async getItem(e) {
		return await this.storage.getItem(e);
	}
	async setItem(e, s) {
		return await this.storage.setItem(e, s);
	}
	async removeItem(e) {
		return await this.storage.removeItem(e);
	}
	static getStorage(e) {
		return M$1 || (M$1 = new K$1(e)), M$1;
	}
};
var Rt = Object.defineProperty, _t = Object.defineProperties, xt = Object.getOwnPropertyDescriptors, Ae = Object.getOwnPropertySymbols, Ft = Object.prototype.hasOwnProperty, Ht = Object.prototype.propertyIsEnumerable, Ee = (t, e, s) => e in t ? Rt(t, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: s
}) : t[e] = s, Ut = (t, e) => {
	for (var s in e || (e = {})) Ft.call(e, s) && Ee(t, s, e[s]);
	if (Ae) for (var s of Ae(e)) Ht.call(e, s) && Ee(t, s, e[s]);
	return t;
}, Bt = (t, e) => _t(t, xt(e));
async function Lt(t, e) {
	const s = Je(t.result.capabilities.caip345.caip2), i$2 = t.result.capabilities.caip345.transactionHashes, r$1 = await Promise.allSettled(i$2.map((h$2) => Mt(s.reference, h$2, e))), a$1 = r$1.filter((h$2) => h$2.status === "fulfilled").map((h$2) => h$2.value).filter((h$2) => h$2);
	r$1.filter((h$2) => h$2.status === "rejected").forEach((h$2) => console.warn("Failed to fetch transaction receipt:", h$2.reason));
	const n$1 = !a$1.length || a$1.some((h$2) => !h$2), c$2 = a$1.every((h$2) => h$2?.status === "0x1"), o$1 = a$1.every((h$2) => h$2?.status === "0x0"), p$3 = a$1.some((h$2) => h$2?.status === "0x0");
	let l$1;
	return n$1 ? l$1 = 100 : c$2 ? l$1 = 200 : o$1 ? l$1 = 500 : p$3 && (l$1 = 600), {
		id: t.result.id,
		version: t.request.version,
		atomic: t.request.atomicRequired,
		chainId: t.request.chainId,
		capabilities: t.result.capabilities,
		receipts: a$1,
		status: l$1
	};
}
async function Mt(t, e, s) {
	return await s(parseInt(t)).request(formatJsonRpcRequest("eth_getTransactionReceipt", [e]));
}
async function zt$1({ sendCalls: t, storage: e }) {
	const s = await e.getItem(v$1);
	await e.setItem(v$1, Bt(Ut({}, s), { [t.result.id]: {
		request: t.request,
		result: t.result,
		expiry: _i(dt)
	} }));
}
async function Gt({ resultId: t, storage: e }) {
	const s = await e.getItem(v$1);
	if (s) {
		delete s[t], await e.setItem(v$1, s);
		for (const i$2 in s) Ri(s[i$2].expiry) && delete s[i$2];
		await e.setItem(v$1, s);
	}
}
async function Wt({ resultId: t, storage: e }) {
	const i$2 = (await e.getItem(v$1))?.[t];
	if (i$2 && !Ri(i$2.expiry)) return i$2;
	await Gt({
		resultId: t,
		storage: e
	});
}
var Jt = Object.defineProperty, Kt = Object.defineProperties, Vt = Object.getOwnPropertyDescriptors, Ce = Object.getOwnPropertySymbols, Yt = Object.prototype.hasOwnProperty, Xt = Object.prototype.propertyIsEnumerable, z$1 = (t, e, s) => e in t ? Jt(t, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: s
}) : t[e] = s, G$1 = (t, e) => {
	for (var s in e || (e = {})) Yt.call(e, s) && z$1(t, s, e[s]);
	if (Ce) for (var s of Ce(e)) Xt.call(e, s) && z$1(t, s, e[s]);
	return t;
}, W$1 = (t, e) => Kt(t, Vt(e)), g = (t, e, s) => z$1(t, typeof e != "symbol" ? e + "" : e, s);
var kt = class {
	constructor(e) {
		g(this, "name", "eip155"), g(this, "client"), g(this, "chainId"), g(this, "namespace"), g(this, "httpProviders"), g(this, "events"), g(this, "storage"), this.namespace = e.namespace, this.events = w$1("events"), this.client = w$1("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain()), this.storage = K$1.getStorage(this.client.core.storage);
	}
	async request(e) {
		switch (e.request.method) {
			case "eth_requestAccounts": return this.getAccounts();
			case "eth_accounts": return this.getAccounts();
			case "wallet_switchEthereumChain": return await this.handleSwitchChain(e);
			case "eth_chainId": return parseInt(this.getDefaultChain());
			case "wallet_getCapabilities": return await this.getCapabilities(e);
			case "wallet_getCallsStatus": return await this.getCallStatus(e);
			case "wallet_sendCalls": return await this.sendCalls(e);
		}
		return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request);
	}
	updateNamespace(e) {
		this.namespace = Object.assign(this.namespace, e);
	}
	setDefaultChain(e, s) {
		this.httpProviders[e] || this.setHttpProvider(parseInt(e), s);
		const i$2 = this.chainId;
		this.chainId = parseInt(e), this.events.emit(H$1.DEFAULT_CHAIN_CHANGED, {
			currentCaipChainId: `${this.name}:${e}`,
			previousCaipChainId: `${this.name}:${i$2}`
		});
	}
	requestAccounts() {
		return this.getAccounts();
	}
	getDefaultChain() {
		if (this.chainId) return this.chainId.toString();
		if (this.namespace.defaultChain) return this.namespace.defaultChain;
		const e = this.namespace.chains[0];
		if (!e) throw new Error("ChainId not found");
		return e.split(":")[1];
	}
	createHttpProvider(e, s) {
		const i$2 = s || fe(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
		if (!i$2) throw new Error(`No RPC url provided for chainId: ${e}`);
		return new o(new f$1(i$2, w$1("disableProviderPing")));
	}
	setHttpProvider(e, s) {
		const i$2 = this.createHttpProvider(e, s);
		i$2 && (this.httpProviders[e] = i$2);
	}
	createHttpProviders() {
		const e = {};
		return this.namespace.chains.forEach((s) => {
			var i$2;
			const r$1 = parseInt(bt(s));
			e[r$1] = this.createHttpProvider(r$1, (i$2 = this.namespace.rpcMap) == null ? void 0 : i$2[s]);
		}), e;
	}
	getAccounts() {
		const e = this.namespace.accounts;
		return e ? [...new Set(e.filter((s) => s.split(":")[1] === this.chainId.toString()).map((s) => s.split(":")[2]))] : [];
	}
	getHttpProvider(e) {
		const s = e || this.chainId;
		return this.httpProviders[s] || (this.httpProviders = W$1(G$1({}, this.httpProviders), { [s]: this.createHttpProvider(s) }), this.httpProviders[s]);
	}
	async handleSwitchChain(e) {
		var s, i$2;
		let r$1 = e.request.params ? (s = e.request.params[0]) == null ? void 0 : s.chainId : "0x0";
		r$1 = r$1.startsWith("0x") ? r$1 : `0x${r$1}`;
		const a$1 = parseInt(r$1, 16);
		if (this.isChainApproved(a$1)) this.setDefaultChain(`${a$1}`);
		else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({
			topic: e.topic,
			request: {
				method: e.request.method,
				params: [{ chainId: r$1 }]
			},
			chainId: (i$2 = this.namespace.chains) == null ? void 0 : i$2[0]
		}), this.setDefaultChain(`${a$1}`);
		else throw new Error(`Failed to switch to chain 'eip155:${a$1}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
		return null;
	}
	isChainApproved(e) {
		return this.namespace.chains.includes(`${this.name}:${e}`);
	}
	async getCapabilities(e) {
		var s, i$2, r$1, a$1, n$1;
		const c$2 = (i$2 = (s = e.request) == null ? void 0 : s.params) == null ? void 0 : i$2[0], o$1 = ((a$1 = (r$1 = e.request) == null ? void 0 : r$1.params) == null ? void 0 : a$1[1]) || [];
		if (!c$2) throw new Error("Missing address parameter in `wallet_getCapabilities` request");
		const p$3 = this.client.session.get(e.topic), l$1 = ((n$1 = p$3?.sessionProperties) == null ? void 0 : n$1.capabilities) || {}, f$5 = `${c$2}${o$1.length > 0 ? o$1.join(",") : `0x${this.chainId.toString(16)}`}`, u$1 = l$1?.[f$5];
		if (u$1) return u$1;
		let q$2;
		try {
			q$2 = jt(p$3, c$2, o$1);
		} catch (D$1) {
			console.warn("Failed to extract capabilities from session", D$1);
		}
		if (q$2) return q$2;
		const V$3 = await this.client.request(e);
		try {
			await this.client.session.update(e.topic, { sessionProperties: W$1(G$1({}, p$3.sessionProperties || {}), { capabilities: W$1(G$1({}, l$1 || {}), { [f$5]: V$3 }) }) });
		} catch (D$1) {
			console.warn("Failed to update session with capabilities", D$1);
		}
		return V$3;
	}
	async getCallStatus(e) {
		var s, i$2, r$1;
		const a$1 = this.client.session.get(e.topic), n$1 = (s = a$1.sessionProperties) == null ? void 0 : s.bundler_name;
		if (n$1) {
			const p$3 = this.getBundlerUrl(e.chainId, n$1);
			try {
				return await this.getUserOperationReceipt(p$3, e);
			} catch (l$1) {
				console.warn("Failed to fetch call status from bundler", l$1, p$3);
			}
		}
		const c$2 = (i$2 = a$1.sessionProperties) == null ? void 0 : i$2.bundler_url;
		if (c$2) try {
			return await this.getUserOperationReceipt(c$2, e);
		} catch (p$3) {
			console.warn("Failed to fetch call status from custom bundler", p$3, c$2);
		}
		const o$1 = await Wt({
			resultId: (r$1 = e.request.params) == null ? void 0 : r$1[0],
			storage: this.storage
		});
		if (o$1) try {
			return await Lt(o$1, this.getHttpProvider.bind(this));
		} catch (p$3) {
			console.warn("Failed to fetch call status from stored send calls", p$3, o$1);
		}
		if (this.namespace.methods.includes(e.request.method)) return await this.client.request(e);
		throw new Error("Fetching call status not approved by the wallet.");
	}
	async getUserOperationReceipt(e, s) {
		var i$2;
		const r$1 = new URL(e), a$1 = await fetch(r$1, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formatJsonRpcRequest("eth_getUserOperationReceipt", [(i$2 = s.request.params) == null ? void 0 : i$2[0]]))
		});
		if (!a$1.ok) throw new Error(`Failed to fetch user operation receipt - ${a$1.status}`);
		return await a$1.json();
	}
	getBundlerUrl(e, s) {
		return `${ut$1}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${s}`;
	}
	async sendCalls(e) {
		var s, i$2, r$1;
		const a$1 = await this.client.request(e), n$1 = (s = e.request.params) == null ? void 0 : s[0], c$2 = a$1?.id, o$1 = a$1?.capabilities || {}, p$3 = (i$2 = o$1?.caip345) == null ? void 0 : i$2.caip2, l$1 = (r$1 = o$1?.caip345) == null ? void 0 : r$1.transactionHashes;
		return !c$2 || !p$3 || !(l$1 != null && l$1.length) || await zt$1({
			sendCalls: {
				request: n$1,
				result: a$1
			},
			storage: this.storage
		}), a$1;
	}
};
var Qt = Object.defineProperty, Zt = (t, e, s) => e in t ? Qt(t, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: s
}) : t[e] = s, b$1 = (t, e, s) => Zt(t, typeof e != "symbol" ? e + "" : e, s);
var Tt = class {
	constructor(e) {
		b$1(this, "name", le), b$1(this, "client"), b$1(this, "httpProviders"), b$1(this, "events"), b$1(this, "namespace"), b$1(this, "chainId"), this.namespace = e.namespace, this.events = w$1("events"), this.client = w$1("client"), this.chainId = this.getDefaultChain(), this.name = this.getNamespaceName(), this.httpProviders = this.createHttpProviders();
	}
	updateNamespace(e) {
		this.namespace.chains = [...new Set((this.namespace.chains || []).concat(e.chains || []))], this.namespace.accounts = [...new Set((this.namespace.accounts || []).concat(e.accounts || []))], this.namespace.methods = [...new Set((this.namespace.methods || []).concat(e.methods || []))], this.namespace.events = [...new Set((this.namespace.events || []).concat(e.events || []))], this.httpProviders = this.createHttpProviders();
	}
	requestAccounts() {
		return this.getAccounts();
	}
	request(e) {
		return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider(e.chainId).request(e.request);
	}
	setDefaultChain(e, s) {
		this.httpProviders[e] || this.setHttpProvider(e, s);
		const i$2 = this.chainId;
		this.chainId = e, this.events.emit(H$1.DEFAULT_CHAIN_CHANGED, {
			currentCaipChainId: `${this.name}:${e}`,
			previousCaipChainId: `${this.name}:${i$2}`
		});
	}
	getDefaultChain() {
		if (this.chainId) return this.chainId;
		if (this.namespace.defaultChain) return this.namespace.defaultChain;
		const e = this.namespace.chains[0];
		if (!e) throw new Error("ChainId not found");
		return e.split(":")[1];
	}
	getNamespaceName() {
		const e = this.namespace.chains[0];
		if (!e) throw new Error("ChainId not found");
		return Je(e).namespace;
	}
	getAccounts() {
		const e = this.namespace.accounts;
		return e ? [...new Set(e.filter((s) => s.split(":")[1] === this.chainId.toString()).map((s) => s.split(":")[2]))] : [];
	}
	createHttpProviders() {
		var e, s;
		const i$2 = {};
		return (s = (e = this.namespace) == null ? void 0 : e.accounts) == null || s.forEach((r$1) => {
			var a$1, n$1;
			const c$2 = Je(r$1), o$1 = (n$1 = (a$1 = this.namespace) == null ? void 0 : a$1.rpcMap) == null ? void 0 : n$1[`${c$2.namespace}:${c$2.reference}`];
			i$2[c$2.reference] = this.createHttpProvider(r$1, o$1);
		}), i$2;
	}
	getHttpProvider(e) {
		const s = Je(e).reference, i$2 = this.httpProviders[s];
		if (typeof i$2 > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
		return i$2;
	}
	setHttpProvider(e, s) {
		const i$2 = this.createHttpProvider(e, s);
		i$2 && (this.httpProviders[e] = i$2);
	}
	createHttpProvider(e, s) {
		const i$2 = s || fe(e, this.namespace, this.client.core.projectId);
		if (!i$2) throw new Error(`No RPC url provided for chainId: ${e}`);
		return new o(new f$1(i$2, w$1("disableProviderPing")));
	}
};
var es = Object.defineProperty, ts = Object.defineProperties, ss = Object.getOwnPropertyDescriptors, je = Object.getOwnPropertySymbols, is = Object.prototype.hasOwnProperty, ns = Object.prototype.propertyIsEnumerable, J$1 = (t, e, s) => e in t ? es(t, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: s
}) : t[e] = s, S$1 = (t, e) => {
	for (var s in e || (e = {})) is.call(e, s) && J$1(t, s, e[s]);
	if (je) for (var s of je(e)) ns.call(e, s) && J$1(t, s, e[s]);
	return t;
}, j$1 = (t, e) => ts(t, ss(e)), d = (t, e, s) => J$1(t, typeof e != "symbol" ? e + "" : e, s);
var rs = class N {
	constructor(e) {
		d(this, "client"), d(this, "namespaces"), d(this, "optionalNamespaces"), d(this, "sessionProperties"), d(this, "scopedProperties"), d(this, "events", new import_events$1.default()), d(this, "rpcProviders", {}), d(this, "session"), d(this, "providerOpts"), d(this, "logger"), d(this, "uri"), d(this, "disableProviderPing", !1), d(this, "connectParams");
		var s, i$2;
		this.providerOpts = e, this.logger = Iu({
			logger: (s = e.logger) != null ? s : oe,
			name: (i$2 = this.providerOpts.name) != null ? i$2 : he
		}), this.disableProviderPing = e?.disableProviderPing || !1;
	}
	static async init(e) {
		const s = new N(e);
		return await s.initialize(), s;
	}
	async request(e, s, i$2) {
		const [r$1, a$1] = this.validateChain(s);
		if (!this.session) throw new Error("Please call connect() before request()");
		return await this.getProvider(r$1).request({
			request: S$1({}, e),
			chainId: `${r$1}:${a$1}`,
			topic: this.session.topic,
			expiry: i$2
		});
	}
	sendAsync(e, s, i$2, r$1) {
		const a$1 = (/* @__PURE__ */ new Date()).getTime();
		this.request(e, i$2, r$1).then((n$1) => s(null, formatJsonRpcResult(a$1, n$1))).catch((n$1) => s(n$1, void 0));
	}
	async enable() {
		if (!this.client) throw new Error("Sign Client not initialized");
		return this.session || await this.connect({
			namespaces: this.namespaces,
			optionalNamespaces: this.optionalNamespaces,
			sessionProperties: this.sessionProperties,
			scopedProperties: this.scopedProperties
		}), await this.requestAccounts();
	}
	async disconnect() {
		var e;
		if (!this.session) throw new Error("Please call connect() before enable()");
		await this.client.disconnect({
			topic: (e = this.session) == null ? void 0 : e.topic,
			reason: zt("USER_DISCONNECTED")
		}), await this.cleanup();
	}
	async connect(e) {
		if (!this.client) throw new Error("Sign Client not initialized");
		if (this.connectParams = e, this.setNamespaces(e), this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic);
	}
	async authenticate(e, s) {
		if (!this.client) throw new Error("Sign Client not initialized");
		this.setNamespaces(e), await this.cleanupPendingPairings();
		const { uri: i$2, response: r$1 } = await this.client.authenticate(e, s);
		i$2 && (this.uri = i$2, this.events.emit("display_uri", i$2));
		const a$1 = await r$1();
		if (this.session = a$1.session, this.session) {
			const n$1 = we(this.session.namespaces);
			this.namespaces = C$1(this.namespaces, n$1), await this.persist("namespaces", this.namespaces), this.onConnect();
		}
		return a$1;
	}
	on(e, s) {
		this.events.on(e, s);
	}
	once(e, s) {
		this.events.once(e, s);
	}
	removeListener(e, s) {
		this.events.removeListener(e, s);
	}
	off(e, s) {
		this.events.off(e, s);
	}
	get isWalletConnect() {
		return !0;
	}
	async pair(e) {
		var s, i$2;
		const { uri: r$1, approval: a$1 } = await this.client.connect({
			pairingTopic: e,
			requiredNamespaces: this.namespaces,
			optionalNamespaces: this.optionalNamespaces,
			sessionProperties: this.sessionProperties,
			scopedProperties: this.scopedProperties,
			authentication: (s = this.connectParams) == null ? void 0 : s.authentication,
			walletPay: (i$2 = this.connectParams) == null ? void 0 : i$2.walletPay
		});
		r$1 && (this.uri = r$1, this.events.emit("display_uri", r$1));
		const n$1 = await a$1();
		this.session = n$1;
		const c$2 = we(n$1.namespaces);
		return this.namespaces = C$1(this.namespaces, c$2), await this.persist("namespaces", this.namespaces), await this.persist("optionalNamespaces", this.optionalNamespaces), this.onConnect(), this.session;
	}
	setDefaultChain(e, s) {
		try {
			if (!this.session) return;
			const [i$2, r$1] = this.validateChain(e);
			this.getProvider(i$2).setDefaultChain(r$1, s);
		} catch (i$2) {
			if (!/Please call connect/.test(i$2.message)) throw i$2;
		}
	}
	async cleanupPendingPairings(e = {}) {
		try {
			this.logger.info("Cleaning up inactive pairings...");
			const s = this.client.pairing.getAll();
			if (!Be(s)) return;
			for (const i$2 of s) e.deletePairings ? this.client.core.expirer.set(i$2.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(i$2.topic);
			this.logger.info(`Inactive pairings cleared: ${s.length}`);
		} catch (s) {
			this.logger.warn(s, "Failed to cleanup pending pairings");
		}
	}
	abortPairingAttempt() {
		this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.");
	}
	async checkStorage() {
		this.namespaces = await this.getFromStore("namespaces") || {}, this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.session && this.createProviders();
	}
	async initialize() {
		this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
	}
	async createClient() {
		var e, s;
		if (this.client = this.providerOpts.client || await Ys.init({
			core: this.providerOpts.core,
			logger: this.providerOpts.logger || oe,
			relayUrl: this.providerOpts.relayUrl || pt,
			projectId: this.providerOpts.projectId,
			metadata: this.providerOpts.metadata,
			storageOptions: this.providerOpts.storageOptions,
			storage: this.providerOpts.storage,
			name: this.providerOpts.name,
			customStoragePrefix: this.providerOpts.customStoragePrefix,
			telemetryEnabled: this.providerOpts.telemetryEnabled
		}), this.providerOpts.session) try {
			this.session = this.client.session.get(this.providerOpts.session.topic);
		} catch (i$2) {
			throw this.logger.error(i$2, "Failed to get session"), /* @__PURE__ */ new Error(`The provided session: ${(s = (e = this.providerOpts) == null ? void 0 : e.session) == null ? void 0 : s.topic} doesn't exist in the Sign client`);
		}
		else this.session = this.client.session.getAll()[0];
		this.logger.trace("SignClient Initialized");
	}
	createProviders() {
		if (!this.client) throw new Error("Sign Client not initialized");
		if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
		const e = [...new Set(Object.keys(this.session.namespaces).map((s) => ms(s)))];
		B$1("client", this.client), B$1("events", this.events), B$1("disableProviderPing", this.disableProviderPing), e.forEach((s) => {
			if (!this.session) return;
			const i$2 = Pt(s, this.session);
			if (i$2?.length === 0) return;
			const r$1 = me(i$2), n$1 = j$1(S$1({}, C$1(this.namespaces, this.optionalNamespaces)[s]), {
				accounts: i$2,
				chains: r$1
			});
			switch (s) {
				case "eip155":
					this.rpcProviders[s] = new kt({ namespace: n$1 });
					break;
				default: this.rpcProviders[s] = new Tt({ namespace: n$1 });
			}
		});
	}
	registerEventListeners() {
		if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
		this.client.on("session_ping", (e) => {
			var s;
			const { topic: i$2 } = e;
			i$2 === ((s = this.session) == null ? void 0 : s.topic) && this.events.emit("session_ping", e);
		}), this.client.on("session_event", (e) => {
			var s;
			const { params: i$2, topic: r$1 } = e;
			if (r$1 !== ((s = this.session) == null ? void 0 : s.topic)) return;
			const { event: a$1 } = i$2;
			if (a$1.name === "accountsChanged") {
				const n$1 = a$1.data;
				n$1 && Be(n$1) && this.events.emit("accountsChanged", n$1.map(ve));
			} else if (a$1.name === "chainChanged") {
				const n$1 = i$2.chainId, c$2 = i$2.event.data, o$1 = ms(n$1), p$3 = U$1(n$1) !== U$1(c$2) ? `${o$1}:${U$1(c$2)}` : n$1;
				this.onChainChanged({ currentCaipChainId: p$3 });
			} else this.events.emit(a$1.name, a$1.data);
			this.events.emit("session_event", e);
		}), this.client.on("session_update", ({ topic: e, params: s }) => {
			var i$2, r$1;
			if (e !== ((i$2 = this.session) == null ? void 0 : i$2.topic)) return;
			const { namespaces: a$1 } = s;
			this.session = j$1(S$1({}, (r$1 = this.client) == null ? void 0 : r$1.session.get(e)), { namespaces: a$1 }), this.onSessionUpdate(), this.events.emit("session_update", {
				topic: e,
				params: s
			});
		}), this.client.on("session_delete", async (e) => {
			var s;
			e.topic === ((s = this.session) == null ? void 0 : s.topic) && (await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", j$1(S$1({}, zt("USER_DISCONNECTED")), { data: e.topic })));
		}), this.on(H$1.DEFAULT_CHAIN_CHANGED, (e) => {
			this.onChainChanged(j$1(S$1({}, e), { internal: !0 }));
		});
	}
	getProvider(e) {
		return this.rpcProviders[e] || this.rpcProviders[le];
	}
	onSessionUpdate() {
		Object.keys(this.rpcProviders).forEach((e) => {
			var s;
			this.getProvider(e).updateNamespace((s = this.session) == null ? void 0 : s.namespaces[e]);
		});
	}
	setNamespaces(e) {
		const { namespaces: s = {}, optionalNamespaces: i$2 = {}, sessionProperties: r$1, scopedProperties: a$1 } = e;
		this.optionalNamespaces = C$1(s, i$2), this.sessionProperties = r$1, this.scopedProperties = a$1;
	}
	validateChain(e) {
		const [s, i$2] = e?.split(":") || ["", ""];
		if (!this.namespaces || !Object.keys(this.namespaces).length) return [s, i$2];
		if (s && !Object.keys(this.namespaces || {}).map((n$1) => ms(n$1)).includes(s)) throw new Error(`Namespace '${s}' is not configured. Please call connect() first with namespace config.`);
		if (s && i$2) return [s, i$2];
		const r$1 = ms(Object.keys(this.namespaces)[0]);
		return [r$1, this.rpcProviders[r$1].getDefaultChain()];
	}
	async requestAccounts() {
		const [e] = this.validateChain();
		return await this.getProvider(e).requestAccounts();
	}
	async onChainChanged({ currentCaipChainId: e, previousCaipChainId: s, internal: i$2 = !1 }) {
		if (!this.namespaces) return;
		const [r$1, a$1] = this.validateChain(e);
		a$1 && (this.updateNamespaceChain(r$1, a$1), i$2 ? (this.events.emit("chainChanged", a$1), this.emitAccountsChangedOnChainChange({
			namespace: r$1,
			currentCaipChainId: e,
			previousCaipChainId: s
		})) : this.getProvider(r$1).setDefaultChain(a$1), await this.persist("namespaces", this.namespaces));
	}
	emitAccountsChangedOnChainChange({ namespace: e, currentCaipChainId: s, previousCaipChainId: i$2 }) {
		var r$1, a$1;
		try {
			if (i$2 === s) return;
			const n$1 = (a$1 = (r$1 = this.session) == null ? void 0 : r$1.namespaces[e]) == null ? void 0 : a$1.accounts;
			if (!n$1) return;
			const c$2 = n$1.filter((o$1) => o$1.includes(`${s}:`)).map(ve);
			if (!Be(c$2)) return;
			this.events.emit("accountsChanged", c$2);
		} catch (n$1) {
			this.logger.warn(n$1, "Failed to emit accountsChanged on chain change");
		}
	}
	updateNamespaceChain(e, s) {
		if (!this.namespaces) return;
		const i$2 = this.namespaces[e] ? e : `${e}:${s}`, r$1 = {
			chains: [],
			methods: [],
			events: [],
			defaultChain: s
		};
		this.namespaces[i$2] ? this.namespaces[i$2] && (this.namespaces[i$2].defaultChain = s) : this.namespaces[i$2] = r$1;
	}
	onConnect() {
		this.createProviders(), this.events.emit("connect", { session: this.session });
	}
	async cleanup() {
		this.connectParams = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, await this.deleteFromStore("namespaces"), await this.deleteFromStore("optionalNamespaces"), await this.deleteFromStore("sessionProperties"), this.session = void 0, this.cleanupPendingPairings({ deletePairings: !0 }), await this.cleanupStorage();
	}
	async persist(e, s) {
		var i$2;
		const r$1 = ((i$2 = this.session) == null ? void 0 : i$2.topic) || "";
		await this.client.core.storage.setItem(`${A$1}/${e}${r$1}`, s);
	}
	async getFromStore(e) {
		var s;
		const i$2 = ((s = this.session) == null ? void 0 : s.topic) || "";
		return await this.client.core.storage.getItem(`${A$1}/${e}${i$2}`);
	}
	async deleteFromStore(e) {
		var s;
		const i$2 = ((s = this.session) == null ? void 0 : s.topic) || "";
		await this.client.core.storage.removeItem(`${A$1}/${e}${i$2}`);
	}
	async cleanupStorage() {
		var e;
		try {
			if (((e = this.client) == null ? void 0 : e.session.length) > 0) return;
			const s = await this.client.core.storage.getKeys();
			for (const i$2 of s) i$2.startsWith(A$1) && await this.client.core.storage.removeItem(i$2);
		} catch (s) {
			this.logger.warn(s, "Failed to cleanup storage");
		}
	}
};
var import_events = require_events();
var q = `wc@2:ethereum_provider:`, U = "https://rpc.walletconnect.org/v1/", f = ["eth_sendTransaction", "personal_sign"], A = [
	"eth_accounts",
	"eth_requestAccounts",
	"eth_sendRawTransaction",
	"eth_sign",
	"eth_signTransaction",
	"eth_signTypedData",
	"eth_signTypedData_v3",
	"eth_signTypedData_v4",
	"eth_sendTransaction",
	"personal_sign",
	"wallet_switchEthereumChain",
	"wallet_addEthereumChain",
	"wallet_getPermissions",
	"wallet_requestPermissions",
	"wallet_registerOnboarding",
	"wallet_watchAsset",
	"wallet_scanQRCode",
	"wallet_sendCalls",
	"wallet_getCapabilities",
	"wallet_getCallsStatus",
	"wallet_showCallsStatus"
], C = ["chainChanged", "accountsChanged"], P = [
	"chainChanged",
	"accountsChanged",
	"message",
	"disconnect",
	"connect"
], D = async () => {
	const { createAppKit: s } = await __vitePreload(async () => {
		const { createAppKit: s$1 } = await import("./core-Bir29sln.js");
		return { createAppKit: s$1 };
	}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]));
	return s;
};
var z = Object.defineProperty, L = Object.defineProperties, K = Object.getOwnPropertyDescriptors, M = Object.getOwnPropertySymbols, Q = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable, _ = (s, t, e) => t in s ? z(s, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: e
}) : s[t] = e, v = (s, t) => {
	for (var e in t || (t = {})) Q.call(t, e) && _(s, e, t[e]);
	if (M) for (var e of M(t)) V.call(t, e) && _(s, e, t[e]);
	return s;
}, w = (s, t) => L(s, K(t)), p = (s, t, e) => _(s, typeof t != "symbol" ? t + "" : t, e);
function I(s) {
	return Number(s[0].split(":")[1]);
}
function b(s) {
	return `0x${s.toString(16)}`;
}
function F(s) {
	const { chains: t, optionalChains: e, methods: n$1, optionalMethods: i$2, events: a$1, optionalEvents: r$1, rpcMap: u$1 } = s;
	if (!Be(t)) throw new Error("Invalid chains");
	const c$2 = {
		chains: t,
		methods: n$1 || f,
		events: a$1 || C,
		rpcMap: v({}, t.length ? { [I(t)]: u$1[I(t)] } : {})
	}, l$1 = a$1?.filter((d$3) => !C.includes(d$3)), o$1 = n$1?.filter((d$3) => !f.includes(d$3));
	if (!e && !r$1 && !i$2 && !(l$1 != null && l$1.length) && !(o$1 != null && o$1.length)) return { required: t.length ? c$2 : void 0 };
	const m$2 = l$1?.length && o$1?.length || !e, h$2 = {
		chains: [...new Set(m$2 ? c$2.chains.concat(e || []) : e)],
		methods: [...new Set(c$2.methods.concat(i$2 != null && i$2.length ? i$2 : A))],
		events: [...new Set(c$2.events.concat(r$1 != null && r$1.length ? r$1 : P))],
		rpcMap: u$1
	};
	return {
		required: t.length ? c$2 : void 0,
		optional: e.length ? h$2 : void 0
	};
}
var E = class E {
	constructor() {
		p(this, "events", new import_events.EventEmitter()), p(this, "namespace", "eip155"), p(this, "accounts", []), p(this, "signer"), p(this, "chainId", 1), p(this, "modal"), p(this, "rpc"), p(this, "STORAGE_KEY", q), p(this, "on", (t, e) => (this.events.on(t, e), this)), p(this, "once", (t, e) => (this.events.once(t, e), this)), p(this, "removeListener", (t, e) => (this.events.removeListener(t, e), this)), p(this, "off", (t, e) => (this.events.off(t, e), this)), p(this, "parseAccount", (t) => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t), this.signer = {}, this.rpc = {};
	}
	static async init(t) {
		const e = new E();
		return await e.initialize(t), e;
	}
	async request(t, e) {
		return await this.signer.request(t, this.formatChainId(this.chainId), e);
	}
	sendAsync(t, e, n$1) {
		this.signer.sendAsync(t, e, this.formatChainId(this.chainId), n$1);
	}
	get connected() {
		return this.signer.client ? this.signer.client.core.relayer.connected : !1;
	}
	get connecting() {
		return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
	}
	async enable() {
		return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
	}
	async connect(t) {
		var e;
		if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
		this.loadConnectOpts(t);
		const { required: n$1, optional: i$2 } = F(this.rpc);
		try {
			const a$1 = await new Promise(async (u$1, c$2) => {
				var l$1, o$1;
				this.rpc.showQrModal && ((l$1 = this.modal) == null || l$1.open(), (o$1 = this.modal) == null || o$1.subscribeState((h$2) => {
					!h$2.open && !this.signer.session && (this.signer.abortPairingAttempt(), c$2(/* @__PURE__ */ new Error("Connection request reset. Please try again.")));
				}));
				const m$2 = t != null && t.scopedProperties ? { [this.namespace]: t.scopedProperties } : void 0;
				await this.signer.connect(w(v({ namespaces: v({}, n$1 && { [this.namespace]: n$1 }) }, i$2 && { optionalNamespaces: { [this.namespace]: i$2 } }), {
					pairingTopic: t?.pairingTopic,
					scopedProperties: m$2
				})).then((h$2) => {
					u$1(h$2);
				}).catch((h$2) => {
					var d$3;
					(d$3 = this.modal) == null || d$3.showErrorMessage("Unable to connect"), c$2(new Error(h$2.message));
				});
			});
			if (!a$1) return;
			const r$1 = ti(a$1.namespaces, [this.namespace]);
			this.setChainIds(this.rpc.chains.length ? this.rpc.chains : r$1), this.setAccounts(r$1), this.events.emit("connect", { chainId: b(this.chainId) });
		} catch (a$1) {
			throw this.signer.logger.error(a$1), a$1;
		} finally {
			(e = this.modal) == null || e.close();
		}
	}
	async authenticate(t, e) {
		var n$1;
		if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
		this.loadConnectOpts({ chains: t?.chains });
		try {
			const i$2 = await new Promise(async (r$1, u$1) => {
				var c$2, l$1;
				this.rpc.showQrModal && ((c$2 = this.modal) == null || c$2.open(), (l$1 = this.modal) == null || l$1.subscribeState((o$1) => {
					!o$1.open && !this.signer.session && (this.signer.abortPairingAttempt(), u$1(/* @__PURE__ */ new Error("Connection request reset. Please try again.")));
				})), await this.signer.authenticate(w(v({}, t), { chains: this.rpc.chains }), e).then((o$1) => {
					r$1(o$1);
				}).catch((o$1) => {
					var m$2;
					(m$2 = this.modal) == null || m$2.showErrorMessage("Unable to connect"), u$1(new Error(o$1.message));
				});
			}), a$1 = i$2.session;
			if (a$1) {
				const r$1 = ti(a$1.namespaces, [this.namespace]);
				this.setChainIds(this.rpc.chains.length ? this.rpc.chains : r$1), this.setAccounts(r$1), this.events.emit("connect", { chainId: b(this.chainId) });
			}
			return i$2;
		} catch (i$2) {
			throw this.signer.logger.error(i$2), i$2;
		} finally {
			(n$1 = this.modal) == null || n$1.close();
		}
	}
	async disconnect() {
		this.session && await this.signer.disconnect(), this.reset();
	}
	get isWalletConnect() {
		return !0;
	}
	get session() {
		return this.signer.session;
	}
	registerEventListeners() {
		this.signer.on("session_event", (t) => {
			const { params: e } = t, { event: n$1 } = e;
			n$1.name === "accountsChanged" ? (this.accounts = this.parseAccounts(n$1.data), this.events.emit("accountsChanged", this.accounts)) : n$1.name === "chainChanged" ? this.setChainId(this.formatChainId(n$1.data)) : this.events.emit(n$1.name, n$1.data), this.events.emit("session_event", t);
		}), this.signer.on("accountsChanged", (t) => {
			this.accounts = this.parseAccounts(t), this.events.emit("accountsChanged", this.accounts);
		}), this.signer.on("chainChanged", (t) => {
			this.chainId = parseInt(t), this.events.emit("chainChanged", b(this.chainId)), this.persist();
		}), this.signer.on("session_update", (t) => {
			this.events.emit("session_update", t);
		}), this.signer.on("session_delete", (t) => {
			this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", w(v({}, zt("USER_DISCONNECTED")), {
				data: t.topic,
				name: "USER_DISCONNECTED"
			}));
		}), this.signer.on("display_uri", (t) => {
			this.events.emit("display_uri", t);
		});
	}
	switchEthereumChain(t) {
		this.request({
			method: "wallet_switchEthereumChain",
			params: [{ chainId: t.toString(16) }]
		});
	}
	isCompatibleChainId(t) {
		return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : !1;
	}
	formatChainId(t) {
		return `${this.namespace}:${t}`;
	}
	parseChainId(t) {
		return Number(t.split(":")[1]);
	}
	setChainIds(t) {
		const e = t.filter((n$1) => this.isCompatibleChainId(n$1)).map((n$1) => this.parseChainId(n$1));
		e.length && (this.chainId = e[0], this.events.emit("chainChanged", b(this.chainId)), this.persist());
	}
	setChainId(t) {
		if (this.isCompatibleChainId(t)) {
			const e = this.parseChainId(t);
			this.chainId = e, this.switchEthereumChain(e);
		}
	}
	parseAccountId(t) {
		const [e, n$1, i$2] = t.split(":");
		return {
			chainId: `${e}:${n$1}`,
			address: i$2
		};
	}
	setAccounts(t) {
		this.accounts = t.filter((e) => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId).map((e) => this.parseAccountId(e).address), this.events.emit("accountsChanged", this.accounts);
	}
	getRpcConfig(t) {
		var e, n$1;
		const i$2 = (e = t?.chains) != null ? e : [], a$1 = (n$1 = t?.optionalChains) != null ? n$1 : [], r$1 = i$2.concat(a$1);
		if (!r$1.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
		const u$1 = i$2.length ? t?.methods || f : [], c$2 = i$2.length ? t?.events || C : [], l$1 = t?.optionalMethods || [], o$1 = t?.optionalEvents || [], m$2 = t?.rpcMap || this.buildRpcMap(r$1, t.projectId), h$2 = t?.qrModalOptions || void 0;
		return {
			chains: i$2?.map((d$3) => this.formatChainId(d$3)),
			optionalChains: a$1.map((d$3) => this.formatChainId(d$3)),
			methods: u$1,
			events: c$2,
			optionalMethods: l$1,
			optionalEvents: o$1,
			rpcMap: m$2,
			showQrModal: !!(t != null && t.showQrModal),
			qrModalOptions: h$2,
			projectId: t.projectId,
			metadata: t.metadata
		};
	}
	buildRpcMap(t, e) {
		const n$1 = {};
		return t.forEach((i$2) => {
			n$1[i$2] = this.getRpcUrl(i$2, e);
		}), n$1;
	}
	async initialize(t) {
		var e;
		if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? I(this.rpc.chains) : I(this.rpc.optionalChains), this.signer = await rs.init({
			projectId: this.rpc.projectId,
			metadata: this.rpc.metadata,
			disableProviderPing: t.disableProviderPing,
			relayUrl: t.relayUrl,
			storage: t.storage,
			storageOptions: t.storageOptions,
			customStoragePrefix: t.customStoragePrefix,
			telemetryEnabled: t.telemetryEnabled,
			logger: t.logger
		}), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
			let n$1;
			try {
				const i$2 = await D(), { convertWCMToAppKitOptions: a$1 } = await Promise.resolve().then(function() {
					return nt;
				}), r$1 = a$1(w(v({}, this.rpc.qrModalOptions), {
					chains: [...new Set([...this.rpc.chains, ...this.rpc.optionalChains])],
					metadata: this.rpc.metadata,
					projectId: this.rpc.projectId
				}));
				if (!r$1.networks.length) throw new Error("No networks found for WalletConnect");
				n$1 = i$2(w(v({}, r$1), {
					universalProvider: this.signer,
					manualWCControl: !0,
					enableMobileFullScreen: ((e = this.rpc.qrModalOptions) == null ? void 0 : e.enableMobileFullScreen) === !0
				}));
			} catch (i$2) {
				throw console.warn(i$2), /* @__PURE__ */ new Error("To use QR modal, please install @reown/appkit package");
			}
			if (n$1) try {
				this.modal = n$1;
			} catch (i$2) {
				throw this.signer.logger.error(i$2), /* @__PURE__ */ new Error("Could not generate WalletConnectModal Instance");
			}
		}
	}
	loadConnectOpts(t) {
		if (!t) return;
		const { chains: e, optionalChains: n$1, rpcMap: i$2 } = t;
		e && Be(e) && (this.rpc.chains = e.map((a$1) => this.formatChainId(a$1)), e.forEach((a$1) => {
			this.rpc.rpcMap[a$1] = i$2?.[a$1] || this.getRpcUrl(a$1);
		})), n$1 && Be(n$1) && (this.rpc.optionalChains = [], this.rpc.optionalChains = n$1?.map((a$1) => this.formatChainId(a$1)), n$1.forEach((a$1) => {
			this.rpc.rpcMap[a$1] = i$2?.[a$1] || this.getRpcUrl(a$1);
		}));
	}
	getRpcUrl(t, e) {
		var n$1;
		return ((n$1 = this.rpc.rpcMap) == null ? void 0 : n$1[t]) || `${U}?chainId=eip155:${t}&projectId=${e || this.rpc.projectId}`;
	}
	async loadPersistedSession() {
		if (this.session) try {
			const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), e = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
			this.setChainIds(t ? [this.formatChainId(t)] : e?.accounts), this.setAccounts(e?.accounts);
		} catch (t) {
			this.signer.logger.error("Failed to load persisted session, clearing state..."), this.signer.logger.error(t), await this.disconnect().catch((e) => this.signer.logger.warn(e));
		}
	}
	reset() {
		this.chainId = 1, this.accounts = [];
	}
	persist() {
		this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
	}
	parseAccounts(t) {
		return typeof t == "string" || t instanceof String ? [this.parseAccount(t)] : t.map((e) => this.parseAccount(e));
	}
};
var G = E;
var Y = Object.defineProperty, H = Object.defineProperties, B = Object.getOwnPropertyDescriptors, S = Object.getOwnPropertySymbols, X = Object.prototype.hasOwnProperty, J = Object.prototype.propertyIsEnumerable, T = (s, t, e) => t in s ? Y(s, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: e
}) : s[t] = e, R = (s, t) => {
	for (var e in t || (t = {})) X.call(t, e) && T(s, e, t[e]);
	if (S) for (var e of S(t)) J.call(t, e) && T(s, e, t[e]);
	return s;
}, Z = (s, t) => H(s, B(t));
function tt(s) {
	if (s) return {
		"--w3m-font-family": s["--wcm-font-family"],
		"--w3m-accent": s["--wcm-accent-color"],
		"--w3m-color-mix": s["--wcm-background-color"],
		"--w3m-z-index": s["--wcm-z-index"] ? Number(s["--wcm-z-index"]) : void 0,
		"--w3m-qr-color": s["--wcm-accent-color"],
		"--w3m-font-size-master": s["--wcm-text-medium-regular-size"],
		"--w3m-border-radius-master": s["--wcm-container-border-radius"],
		"--w3m-color-mix-strength": 0
	};
}
var et = (s) => {
	const [t, e] = s.split(":");
	return W({
		id: e,
		caipNetworkId: s,
		chainNamespace: t,
		name: "",
		nativeCurrency: {
			name: "",
			symbol: "",
			decimals: 8
		},
		rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } }
	});
};
function st(s) {
	var t, e, n$1, i$2, a$1, r$1, u$1;
	const c$2 = (t = s.chains) == null ? void 0 : t.map(et).filter(Boolean);
	if (c$2.length === 0) throw new Error("At least one chain must be specified");
	const l$1 = c$2.find((m$2) => {
		var h$2;
		return m$2.id === ((h$2 = s.defaultChain) == null ? void 0 : h$2.id);
	}), o$1 = {
		projectId: s.projectId,
		networks: c$2,
		themeMode: s.themeMode,
		themeVariables: tt(s.themeVariables),
		chainImages: s.chainImages,
		connectorImages: s.walletImages,
		defaultNetwork: l$1,
		metadata: Z(R({}, s.metadata), {
			name: ((e = s.metadata) == null ? void 0 : e.name) || "WalletConnect",
			description: ((n$1 = s.metadata) == null ? void 0 : n$1.description) || "Connect to WalletConnect-compatible wallets",
			url: ((i$2 = s.metadata) == null ? void 0 : i$2.url) || "https://walletconnect.org",
			icons: ((a$1 = s.metadata) == null ? void 0 : a$1.icons) || ["https://walletconnect.org/walletconnect-logo.png"]
		}),
		showWallets: !0,
		featuredWalletIds: s.explorerRecommendedWalletIds === "NONE" ? [] : Array.isArray(s.explorerRecommendedWalletIds) ? s.explorerRecommendedWalletIds : [],
		excludeWalletIds: s.explorerExcludedWalletIds === "ALL" ? [] : Array.isArray(s.explorerExcludedWalletIds) ? s.explorerExcludedWalletIds : [],
		enableEIP6963: !1,
		enableInjected: !1,
		enableCoinbase: !0,
		enableWalletConnect: !0,
		features: {
			email: !1,
			socials: !1
		}
	};
	if ((r$1 = s.mobileWallets) != null && r$1.length || (u$1 = s.desktopWallets) != null && u$1.length) {
		const m$2 = [...(s.mobileWallets || []).map((g$1) => ({
			id: g$1.id,
			name: g$1.name,
			links: g$1.links
		})), ...(s.desktopWallets || []).map((g$1) => ({
			id: g$1.id,
			name: g$1.name,
			links: {
				native: g$1.links.native,
				universal: g$1.links.universal
			}
		}))], h$2 = [...o$1.featuredWalletIds || [], ...o$1.excludeWalletIds || []], d$3 = m$2.filter((g$1) => !h$2.includes(g$1.id));
		d$3.length && (o$1.customWallets = d$3);
	}
	return o$1;
}
function W(s) {
	return R({
		formatters: void 0,
		fees: void 0,
		serializers: void 0
	}, s);
}
var nt = Object.freeze({
	__proto__: null,
	convertWCMToAppKitOptions: st,
	defineChain: W
});
export { G as EthereumProvider, P as OPTIONAL_EVENTS, A as OPTIONAL_METHODS, C as REQUIRED_EVENTS, f as REQUIRED_METHODS, E as default };
