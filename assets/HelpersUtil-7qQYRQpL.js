import { J as ConstantsUtil, M as StorageUtil, m as ConnectorController, n as ChainController } from "./ApiController-Cio-7y5K.js";
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var t$1 = globalThis, e$1 = t$1.ShadowRoot && (void 0 === t$1.ShadyCSS || t$1.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$2 = Symbol(), o$3 = /* @__PURE__ */ new WeakMap();
var n$1 = class {
	constructor(t$2, e$3, o$4) {
		if (this._$cssResult$ = !0, o$4 !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = t$2, this.t = e$3;
	}
	get styleSheet() {
		let t$2 = this.o;
		const s$3 = this.t;
		if (e$1 && void 0 === t$2) {
			const e$3 = void 0 !== s$3 && 1 === s$3.length;
			e$3 && (t$2 = o$3.get(s$3)), void 0 === t$2 && ((this.o = t$2 = new CSSStyleSheet()).replaceSync(this.cssText), e$3 && o$3.set(s$3, t$2));
		}
		return t$2;
	}
	toString() {
		return this.cssText;
	}
};
var r = (t$2) => new n$1("string" == typeof t$2 ? t$2 : t$2 + "", void 0, s$2), i = (t$2, ...e$3) => {
	return new n$1(1 === t$2.length ? t$2[0] : e$3.reduce((e$4, s$3, o$4) => e$4 + ((t$3) => {
		if (!0 === t$3._$cssResult$) return t$3.cssText;
		if ("number" == typeof t$3) return t$3;
		throw Error("Value passed to 'css' function must be a 'css' function result: " + t$3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
	})(s$3) + t$2[o$4 + 1], t$2[0]), t$2, s$2);
}, S$1 = (s$3, o$4) => {
	if (e$1) s$3.adoptedStyleSheets = o$4.map((t$2) => t$2 instanceof CSSStyleSheet ? t$2 : t$2.styleSheet);
	else for (const e$3 of o$4) {
		const o$5 = document.createElement("style"), n$3 = t$1.litNonce;
		void 0 !== n$3 && o$5.setAttribute("nonce", n$3), o$5.textContent = e$3.cssText, s$3.appendChild(o$5);
	}
}, c$1 = e$1 ? (t$2) => t$2 : (t$2) => t$2 instanceof CSSStyleSheet ? ((t$3) => {
	let e$3 = "";
	for (const s$3 of t$3.cssRules) e$3 += s$3.cssText;
	return r(e$3);
})(t$2) : t$2;
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ var { is: i$3, defineProperty: e$2, getOwnPropertyDescriptor: h$1, getOwnPropertyNames: r$2, getOwnPropertySymbols: o$2, getPrototypeOf: n$2 } = Object, a$1 = globalThis, c$2 = a$1.trustedTypes, l$1 = c$2 ? c$2.emptyScript : "", p$1 = a$1.reactiveElementPolyfillSupport, d$1 = (t$2, s$3) => t$2, u$1 = {
	toAttribute(t$2, s$3) {
		switch (s$3) {
			case Boolean:
				t$2 = t$2 ? l$1 : null;
				break;
			case Object:
			case Array: t$2 = null == t$2 ? t$2 : JSON.stringify(t$2);
		}
		return t$2;
	},
	fromAttribute(t$2, s$3) {
		let i$4 = t$2;
		switch (s$3) {
			case Boolean:
				i$4 = null !== t$2;
				break;
			case Number:
				i$4 = null === t$2 ? null : Number(t$2);
				break;
			case Object:
			case Array: try {
				i$4 = JSON.parse(t$2);
			} catch (t$3) {
				i$4 = null;
			}
		}
		return i$4;
	}
}, f$1 = (t$2, s$3) => !i$3(t$2, s$3), b$1 = {
	attribute: !0,
	type: String,
	converter: u$1,
	reflect: !1,
	useDefault: !1,
	hasChanged: f$1
};
Symbol.metadata ??= Symbol("metadata"), a$1.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var y = class extends HTMLElement {
	static addInitializer(t$2) {
		this._$Ei(), (this.l ??= []).push(t$2);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(t$2, s$3 = b$1) {
		if (s$3.state && (s$3.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t$2) && ((s$3 = Object.create(s$3)).wrapped = !0), this.elementProperties.set(t$2, s$3), !s$3.noAccessor) {
			const i$4 = Symbol(), h$2 = this.getPropertyDescriptor(t$2, i$4, s$3);
			void 0 !== h$2 && e$2(this.prototype, t$2, h$2);
		}
	}
	static getPropertyDescriptor(t$2, s$3, i$4) {
		const { get: e$3, set: r$3 } = h$1(this.prototype, t$2) ?? {
			get() {
				return this[s$3];
			},
			set(t$3) {
				this[s$3] = t$3;
			}
		};
		return {
			get: e$3,
			set(s$4) {
				const h$2 = e$3?.call(this);
				r$3?.call(this, s$4), this.requestUpdate(t$2, h$2, i$4);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(t$2) {
		return this.elementProperties.get(t$2) ?? b$1;
	}
	static _$Ei() {
		if (this.hasOwnProperty(d$1("elementProperties"))) return;
		const t$2 = n$2(this);
		t$2.finalize(), void 0 !== t$2.l && (this.l = [...t$2.l]), this.elementProperties = new Map(t$2.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(d$1("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
			const t$3 = this.properties, s$3 = [...r$2(t$3), ...o$2(t$3)];
			for (const i$4 of s$3) this.createProperty(i$4, t$3[i$4]);
		}
		const t$2 = this[Symbol.metadata];
		if (null !== t$2) {
			const s$3 = litPropertyMetadata.get(t$2);
			if (void 0 !== s$3) for (const [t$3, i$4] of s$3) this.elementProperties.set(t$3, i$4);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (const [t$3, s$3] of this.elementProperties) {
			const i$4 = this._$Eu(t$3, s$3);
			void 0 !== i$4 && this._$Eh.set(i$4, t$3);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(s$3) {
		const i$4 = [];
		if (Array.isArray(s$3)) {
			const e$3 = new Set(s$3.flat(Infinity).reverse());
			for (const s$4 of e$3) i$4.unshift(c$1(s$4));
		} else void 0 !== s$3 && i$4.push(c$1(s$3));
		return i$4;
	}
	static _$Eu(t$2, s$3) {
		const i$4 = s$3.attribute;
		return !1 === i$4 ? void 0 : "string" == typeof i$4 ? i$4 : "string" == typeof t$2 ? t$2.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((t$2) => this.enableUpdating = t$2), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t$2) => t$2(this));
	}
	addController(t$2) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(t$2), void 0 !== this.renderRoot && this.isConnected && t$2.hostConnected?.();
	}
	removeController(t$2) {
		this._$EO?.delete(t$2);
	}
	_$E_() {
		const t$2 = /* @__PURE__ */ new Map(), s$3 = this.constructor.elementProperties;
		for (const i$4 of s$3.keys()) this.hasOwnProperty(i$4) && (t$2.set(i$4, this[i$4]), delete this[i$4]);
		t$2.size > 0 && (this._$Ep = t$2);
	}
	createRenderRoot() {
		const t$2 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return S$1(t$2, this.constructor.elementStyles), t$2;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t$2) => t$2.hostConnected?.());
	}
	enableUpdating(t$2) {}
	disconnectedCallback() {
		this._$EO?.forEach((t$2) => t$2.hostDisconnected?.());
	}
	attributeChangedCallback(t$2, s$3, i$4) {
		this._$AK(t$2, i$4);
	}
	_$ET(t$2, s$3) {
		const i$4 = this.constructor.elementProperties.get(t$2), e$3 = this.constructor._$Eu(t$2, i$4);
		if (void 0 !== e$3 && !0 === i$4.reflect) {
			const h$2 = (void 0 !== i$4.converter?.toAttribute ? i$4.converter : u$1).toAttribute(s$3, i$4.type);
			this._$Em = t$2, null == h$2 ? this.removeAttribute(e$3) : this.setAttribute(e$3, h$2), this._$Em = null;
		}
	}
	_$AK(t$2, s$3) {
		const i$4 = this.constructor, e$3 = i$4._$Eh.get(t$2);
		if (void 0 !== e$3 && this._$Em !== e$3) {
			const t$3 = i$4.getPropertyOptions(e$3), h$2 = "function" == typeof t$3.converter ? { fromAttribute: t$3.converter } : void 0 !== t$3.converter?.fromAttribute ? t$3.converter : u$1;
			this._$Em = e$3;
			const r$3 = h$2.fromAttribute(s$3, t$3.type);
			this[e$3] = r$3 ?? this._$Ej?.get(e$3) ?? r$3, this._$Em = null;
		}
	}
	requestUpdate(t$2, s$3, i$4, e$3 = !1, h$2) {
		if (void 0 !== t$2) {
			const r$3 = this.constructor;
			if (!1 === e$3 && (h$2 = this[t$2]), i$4 ??= r$3.getPropertyOptions(t$2), !((i$4.hasChanged ?? f$1)(h$2, s$3) || i$4.useDefault && i$4.reflect && h$2 === this._$Ej?.get(t$2) && !this.hasAttribute(r$3._$Eu(t$2, i$4)))) return;
			this.C(t$2, s$3, i$4);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(t$2, s$3, { useDefault: i$4, reflect: e$3, wrapped: h$2 }, r$3) {
		i$4 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t$2) && (this._$Ej.set(t$2, r$3 ?? s$3 ?? this[t$2]), !0 !== h$2 || void 0 !== r$3) || (this._$AL.has(t$2) || (this.hasUpdated || i$4 || (s$3 = void 0), this._$AL.set(t$2, s$3)), !0 === e$3 && this._$Em !== t$2 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t$2));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (t$3) {
			Promise.reject(t$3);
		}
		const t$2 = this.scheduleUpdate();
		return null != t$2 && await t$2, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (const [t$4, s$4] of this._$Ep) this[t$4] = s$4;
				this._$Ep = void 0;
			}
			const t$3 = this.constructor.elementProperties;
			if (t$3.size > 0) for (const [s$4, i$4] of t$3) {
				const { wrapped: t$4 } = i$4, e$3 = this[s$4];
				!0 !== t$4 || this._$AL.has(s$4) || void 0 === e$3 || this.C(s$4, void 0, i$4, e$3);
			}
		}
		let t$2 = !1;
		const s$3 = this._$AL;
		try {
			t$2 = this.shouldUpdate(s$3), t$2 ? (this.willUpdate(s$3), this._$EO?.forEach((t$3) => t$3.hostUpdate?.()), this.update(s$3)) : this._$EM();
		} catch (s$4) {
			throw t$2 = !1, this._$EM(), s$4;
		}
		t$2 && this._$AE(s$3);
	}
	willUpdate(t$2) {}
	_$AE(t$2) {
		this._$EO?.forEach((t$3) => t$3.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t$2)), this.updated(t$2);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(t$2) {
		return !0;
	}
	update(t$2) {
		this._$Eq &&= this._$Eq.forEach((t$3) => this._$ET(t$3, this[t$3])), this._$EM();
	}
	updated(t$2) {}
	firstUpdated(t$2) {}
};
y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d$1("elementProperties")] = /* @__PURE__ */ new Map(), y[d$1("finalized")] = /* @__PURE__ */ new Map(), p$1?.({ ReactiveElement: y }), (a$1.reactiveElementVersions ??= []).push("2.1.2");
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var t = globalThis, i$2 = (t$2) => t$2, s$1 = t.trustedTypes, e = s$1 ? s$1.createPolicy("lit-html", { createHTML: (t$2) => t$2 }) : void 0, h = "$lit$", o$1 = `lit$${Math.random().toFixed(9).slice(2)}$`, n = "?" + o$1, r$1 = `<${n}>`, l = document, c = () => l.createComment(""), a = (t$2) => null === t$2 || "object" != typeof t$2 && "function" != typeof t$2, u = Array.isArray, d = (t$2) => u(t$2) || "function" == typeof t$2?.[Symbol.iterator], f = "[ 	\n\f\r]", v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _ = /-->/g, m = />/g, p = RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), g = /'/g, $ = /"/g, y$1 = /^(?:script|style|textarea|title)$/i, x = (t$2) => (i$4, ...s$3) => ({
	_$litType$: t$2,
	strings: i$4,
	values: s$3
}), b = x(1), w = x(2), T = x(3), E = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), C = /* @__PURE__ */ new WeakMap(), P = l.createTreeWalker(l, 129);
function V(t$2, i$4) {
	if (!u(t$2) || !t$2.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return void 0 !== e ? e.createHTML(i$4) : i$4;
}
var N = (t$2, i$4) => {
	const s$3 = t$2.length - 1, e$3 = [];
	let n$3, l$2 = 2 === i$4 ? "<svg>" : 3 === i$4 ? "<math>" : "", c$3 = v;
	for (let i$5 = 0; i$5 < s$3; i$5++) {
		const s$4 = t$2[i$5];
		let a$2, u$2, d$2 = -1, f$2 = 0;
		for (; f$2 < s$4.length && (c$3.lastIndex = f$2, u$2 = c$3.exec(s$4), null !== u$2);) f$2 = c$3.lastIndex, c$3 === v ? "!--" === u$2[1] ? c$3 = _ : void 0 !== u$2[1] ? c$3 = m : void 0 !== u$2[2] ? (y$1.test(u$2[2]) && (n$3 = RegExp("</" + u$2[2], "g")), c$3 = p) : void 0 !== u$2[3] && (c$3 = p) : c$3 === p ? ">" === u$2[0] ? (c$3 = n$3 ?? v, d$2 = -1) : void 0 === u$2[1] ? d$2 = -2 : (d$2 = c$3.lastIndex - u$2[2].length, a$2 = u$2[1], c$3 = void 0 === u$2[3] ? p : "\"" === u$2[3] ? $ : g) : c$3 === $ || c$3 === g ? c$3 = p : c$3 === _ || c$3 === m ? c$3 = v : (c$3 = p, n$3 = void 0);
		const x$1 = c$3 === p && t$2[i$5 + 1].startsWith("/>") ? " " : "";
		l$2 += c$3 === v ? s$4 + r$1 : d$2 >= 0 ? (e$3.push(a$2), s$4.slice(0, d$2) + h + s$4.slice(d$2) + o$1 + x$1) : s$4 + o$1 + (-2 === d$2 ? i$5 : x$1);
	}
	return [V(t$2, l$2 + (t$2[s$3] || "<?>") + (2 === i$4 ? "</svg>" : 3 === i$4 ? "</math>" : "")), e$3];
};
var S = class S {
	constructor({ strings: t$2, _$litType$: i$4 }, e$3) {
		let r$3;
		this.parts = [];
		let l$2 = 0, a$2 = 0;
		const u$2 = t$2.length - 1, d$2 = this.parts, [f$2, v$1] = N(t$2, i$4);
		if (this.el = S.createElement(f$2, e$3), P.currentNode = this.el.content, 2 === i$4 || 3 === i$4) {
			const t$3 = this.el.content.firstChild;
			t$3.replaceWith(...t$3.childNodes);
		}
		for (; null !== (r$3 = P.nextNode()) && d$2.length < u$2;) {
			if (1 === r$3.nodeType) {
				if (r$3.hasAttributes()) for (const t$3 of r$3.getAttributeNames()) if (t$3.endsWith(h)) {
					const i$5 = v$1[a$2++], s$3 = r$3.getAttribute(t$3).split(o$1), e$4 = /([.?@])?(.*)/.exec(i$5);
					d$2.push({
						type: 1,
						index: l$2,
						name: e$4[2],
						strings: s$3,
						ctor: "." === e$4[1] ? I : "?" === e$4[1] ? L : "@" === e$4[1] ? z : H
					}), r$3.removeAttribute(t$3);
				} else t$3.startsWith(o$1) && (d$2.push({
					type: 6,
					index: l$2
				}), r$3.removeAttribute(t$3));
				if (y$1.test(r$3.tagName)) {
					const t$3 = r$3.textContent.split(o$1), i$5 = t$3.length - 1;
					if (i$5 > 0) {
						r$3.textContent = s$1 ? s$1.emptyScript : "";
						for (let s$3 = 0; s$3 < i$5; s$3++) r$3.append(t$3[s$3], c()), P.nextNode(), d$2.push({
							type: 2,
							index: ++l$2
						});
						r$3.append(t$3[i$5], c());
					}
				}
			} else if (8 === r$3.nodeType) if (r$3.data === n) d$2.push({
				type: 2,
				index: l$2
			});
			else {
				let t$3 = -1;
				for (; -1 !== (t$3 = r$3.data.indexOf(o$1, t$3 + 1));) d$2.push({
					type: 7,
					index: l$2
				}), t$3 += o$1.length - 1;
			}
			l$2++;
		}
	}
	static createElement(t$2, i$4) {
		const s$3 = l.createElement("template");
		return s$3.innerHTML = t$2, s$3;
	}
};
function M(t$2, i$4, s$3 = t$2, e$3) {
	if (i$4 === E) return i$4;
	let h$2 = void 0 !== e$3 ? s$3._$Co?.[e$3] : s$3._$Cl;
	const o$4 = a(i$4) ? void 0 : i$4._$litDirective$;
	return h$2?.constructor !== o$4 && (h$2?._$AO?.(!1), void 0 === o$4 ? h$2 = void 0 : (h$2 = new o$4(t$2), h$2._$AT(t$2, s$3, e$3)), void 0 !== e$3 ? (s$3._$Co ??= [])[e$3] = h$2 : s$3._$Cl = h$2), void 0 !== h$2 && (i$4 = M(t$2, h$2._$AS(t$2, i$4.values), h$2, e$3)), i$4;
}
var R = class {
	constructor(t$2, i$4) {
		this._$AV = [], this._$AN = void 0, this._$AD = t$2, this._$AM = i$4;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(t$2) {
		const { el: { content: i$4 }, parts: s$3 } = this._$AD, e$3 = (t$2?.creationScope ?? l).importNode(i$4, !0);
		P.currentNode = e$3;
		let h$2 = P.nextNode(), o$4 = 0, n$3 = 0, r$3 = s$3[0];
		for (; void 0 !== r$3;) {
			if (o$4 === r$3.index) {
				let i$5;
				2 === r$3.type ? i$5 = new k(h$2, h$2.nextSibling, this, t$2) : 1 === r$3.type ? i$5 = new r$3.ctor(h$2, r$3.name, r$3.strings, this, t$2) : 6 === r$3.type && (i$5 = new Z(h$2, this, t$2)), this._$AV.push(i$5), r$3 = s$3[++n$3];
			}
			o$4 !== r$3?.index && (h$2 = P.nextNode(), o$4++);
		}
		return P.currentNode = l, e$3;
	}
	p(t$2) {
		let i$4 = 0;
		for (const s$3 of this._$AV) void 0 !== s$3 && (void 0 !== s$3.strings ? (s$3._$AI(t$2, s$3, i$4), i$4 += s$3.strings.length - 2) : s$3._$AI(t$2[i$4])), i$4++;
	}
};
var k = class k {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(t$2, i$4, s$3, e$3) {
		this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t$2, this._$AB = i$4, this._$AM = s$3, this.options = e$3, this._$Cv = e$3?.isConnected ?? !0;
	}
	get parentNode() {
		let t$2 = this._$AA.parentNode;
		const i$4 = this._$AM;
		return void 0 !== i$4 && 11 === t$2?.nodeType && (t$2 = i$4.parentNode), t$2;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(t$2, i$4 = this) {
		t$2 = M(this, t$2, i$4), a(t$2) ? t$2 === A || null == t$2 || "" === t$2 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t$2 !== this._$AH && t$2 !== E && this._(t$2) : void 0 !== t$2._$litType$ ? this.$(t$2) : void 0 !== t$2.nodeType ? this.T(t$2) : d(t$2) ? this.k(t$2) : this._(t$2);
	}
	O(t$2) {
		return this._$AA.parentNode.insertBefore(t$2, this._$AB);
	}
	T(t$2) {
		this._$AH !== t$2 && (this._$AR(), this._$AH = this.O(t$2));
	}
	_(t$2) {
		this._$AH !== A && a(this._$AH) ? this._$AA.nextSibling.data = t$2 : this.T(l.createTextNode(t$2)), this._$AH = t$2;
	}
	$(t$2) {
		const { values: i$4, _$litType$: s$3 } = t$2, e$3 = "number" == typeof s$3 ? this._$AC(t$2) : (void 0 === s$3.el && (s$3.el = S.createElement(V(s$3.h, s$3.h[0]), this.options)), s$3);
		if (this._$AH?._$AD === e$3) this._$AH.p(i$4);
		else {
			const t$3 = new R(e$3, this), s$4 = t$3.u(this.options);
			t$3.p(i$4), this.T(s$4), this._$AH = t$3;
		}
	}
	_$AC(t$2) {
		let i$4 = C.get(t$2.strings);
		return void 0 === i$4 && C.set(t$2.strings, i$4 = new S(t$2)), i$4;
	}
	k(t$2) {
		u(this._$AH) || (this._$AH = [], this._$AR());
		const i$4 = this._$AH;
		let s$3, e$3 = 0;
		for (const h$2 of t$2) e$3 === i$4.length ? i$4.push(s$3 = new k(this.O(c()), this.O(c()), this, this.options)) : s$3 = i$4[e$3], s$3._$AI(h$2), e$3++;
		e$3 < i$4.length && (this._$AR(s$3 && s$3._$AB.nextSibling, e$3), i$4.length = e$3);
	}
	_$AR(t$2 = this._$AA.nextSibling, s$3) {
		for (this._$AP?.(!1, !0, s$3); t$2 !== this._$AB;) {
			const s$4 = i$2(t$2).nextSibling;
			i$2(t$2).remove(), t$2 = s$4;
		}
	}
	setConnected(t$2) {
		void 0 === this._$AM && (this._$Cv = t$2, this._$AP?.(t$2));
	}
};
var H = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(t$2, i$4, s$3, e$3, h$2) {
		this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t$2, this.name = i$4, this._$AM = e$3, this.options = h$2, s$3.length > 2 || "" !== s$3[0] || "" !== s$3[1] ? (this._$AH = Array(s$3.length - 1).fill(/* @__PURE__ */ new String()), this.strings = s$3) : this._$AH = A;
	}
	_$AI(t$2, i$4 = this, s$3, e$3) {
		const h$2 = this.strings;
		let o$4 = !1;
		if (void 0 === h$2) t$2 = M(this, t$2, i$4, 0), o$4 = !a(t$2) || t$2 !== this._$AH && t$2 !== E, o$4 && (this._$AH = t$2);
		else {
			const e$4 = t$2;
			let n$3, r$3;
			for (t$2 = h$2[0], n$3 = 0; n$3 < h$2.length - 1; n$3++) r$3 = M(this, e$4[s$3 + n$3], i$4, n$3), r$3 === E && (r$3 = this._$AH[n$3]), o$4 ||= !a(r$3) || r$3 !== this._$AH[n$3], r$3 === A ? t$2 = A : t$2 !== A && (t$2 += (r$3 ?? "") + h$2[n$3 + 1]), this._$AH[n$3] = r$3;
		}
		o$4 && !e$3 && this.j(t$2);
	}
	j(t$2) {
		t$2 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t$2 ?? "");
	}
};
var I = class extends H {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(t$2) {
		this.element[this.name] = t$2 === A ? void 0 : t$2;
	}
};
var L = class extends H {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(t$2) {
		this.element.toggleAttribute(this.name, !!t$2 && t$2 !== A);
	}
};
var z = class extends H {
	constructor(t$2, i$4, s$3, e$3, h$2) {
		super(t$2, i$4, s$3, e$3, h$2), this.type = 5;
	}
	_$AI(t$2, i$4 = this) {
		if ((t$2 = M(this, t$2, i$4, 0) ?? A) === E) return;
		const s$3 = this._$AH, e$3 = t$2 === A && s$3 !== A || t$2.capture !== s$3.capture || t$2.once !== s$3.once || t$2.passive !== s$3.passive, h$2 = t$2 !== A && (s$3 === A || e$3);
		e$3 && this.element.removeEventListener(this.name, this, s$3), h$2 && this.element.addEventListener(this.name, this, t$2), this._$AH = t$2;
	}
	handleEvent(t$2) {
		"function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t$2) : this._$AH.handleEvent(t$2);
	}
};
var Z = class {
	constructor(t$2, i$4, s$3) {
		this.element = t$2, this.type = 6, this._$AN = void 0, this._$AM = i$4, this.options = s$3;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(t$2) {
		M(this, t$2);
	}
};
var j = {
	M: h,
	P: o$1,
	A: n,
	C: 1,
	L: N,
	R,
	D: d,
	V: M,
	I: k,
	H,
	N: L,
	U: z,
	B: I,
	F: Z
}, B = t.litHtmlPolyfillSupport;
B?.(S, k), (t.litHtmlVersions ??= []).push("3.3.2");
var D = (t$2, i$4, s$3) => {
	const e$3 = s$3?.renderBefore ?? i$4;
	let h$2 = e$3._$litPart$;
	if (void 0 === h$2) {
		const t$3 = s$3?.renderBefore ?? null;
		e$3._$litPart$ = h$2 = new k(i$4.insertBefore(c(), t$3), t$3, void 0, s$3 ?? {});
	}
	return h$2._$AI(t$2), h$2;
};
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ var s = globalThis;
var i$1 = class extends y {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		const t$2 = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= t$2.firstChild, t$2;
	}
	update(t$2) {
		const r$3 = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t$2), this._$Do = D(r$3, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return E;
	}
};
i$1._$litElement$ = !0, i$1["finalized"] = !0, s.litElementHydrateSupport?.({ LitElement: i$1 });
var o = s.litElementPolyfillSupport;
o?.({ LitElement: i$1 });
(s.litElementVersions ??= []).push("4.2.2");
const MathUtil = { interpolate(inputRange, outputRange, value) {
	if (inputRange.length !== 2 || outputRange.length !== 2) throw new Error("inputRange and outputRange must be an array of length 2");
	const originalRangeMin = inputRange[0] || 0;
	const originalRangeMax = inputRange[1] || 0;
	const newRangeMin = outputRange[0] || 0;
	const newRangeMax = outputRange[1] || 0;
	if (value < originalRangeMin) return newRangeMin;
	if (value > originalRangeMax) return newRangeMax;
	return (newRangeMax - newRangeMin) / (originalRangeMax - originalRangeMin) * (value - originalRangeMin) + newRangeMin;
} };
const colors = {
	black: "#202020",
	white: "#FFFFFF",
	white010: "rgba(255, 255, 255, 0.1)",
	accent010: "rgba(9, 136, 240, 0.1)",
	accent020: "rgba(9, 136, 240, 0.2)",
	accent030: "rgba(9, 136, 240, 0.3)",
	accent040: "rgba(9, 136, 240, 0.4)",
	accent050: "rgba(9, 136, 240, 0.5)",
	accent060: "rgba(9, 136, 240, 0.6)",
	accent070: "rgba(9, 136, 240, 0.7)",
	accent080: "rgba(9, 136, 240, 0.8)",
	accent090: "rgba(9, 136, 240, 0.9)",
	accent100: "rgba(9, 136, 240, 1.0)",
	accentSecondary010: "rgba(199, 185, 148, 0.1)",
	accentSecondary020: "rgba(199, 185, 148, 0.2)",
	accentSecondary030: "rgba(199, 185, 148, 0.3)",
	accentSecondary040: "rgba(199, 185, 148, 0.4)",
	accentSecondary050: "rgba(199, 185, 148, 0.5)",
	accentSecondary060: "rgba(199, 185, 148, 0.6)",
	accentSecondary070: "rgba(199, 185, 148, 0.7)",
	accentSecondary080: "rgba(199, 185, 148, 0.8)",
	accentSecondary090: "rgba(199, 185, 148, 0.9)",
	accentSecondary100: "rgba(199, 185, 148, 1.0)",
	productWalletKit: "#FFB800",
	productAppKit: "#FF573B",
	productCloud: "#0988F0",
	productDocumentation: "#008847",
	neutrals050: "#F6F6F6",
	neutrals100: "#F3F3F3",
	neutrals200: "#E9E9E9",
	neutrals300: "#D0D0D0",
	neutrals400: "#BBB",
	neutrals500: "#9A9A9A",
	neutrals600: "#6C6C6C",
	neutrals700: "#4F4F4F",
	neutrals800: "#363636",
	neutrals900: "#2A2A2A",
	neutrals1000: "#252525",
	semanticSuccess010: "rgba(48, 164, 107, 0.1)",
	semanticSuccess020: "rgba(48, 164, 107, 0.2)",
	semanticSuccess030: "rgba(48, 164, 107, 0.3)",
	semanticSuccess040: "rgba(48, 164, 107, 0.4)",
	semanticSuccess050: "rgba(48, 164, 107, 0.5)",
	semanticSuccess060: "rgba(48, 164, 107, 0.6)",
	semanticSuccess070: "rgba(48, 164, 107, 0.7)",
	semanticSuccess080: "rgba(48, 164, 107, 0.8)",
	semanticSuccess090: "rgba(48, 164, 107, 0.9)",
	semanticSuccess100: "rgba(48, 164, 107, 1.0)",
	semanticError010: "rgba(223, 74, 52, 0.1)",
	semanticError020: "rgba(223, 74, 52, 0.2)",
	semanticError030: "rgba(223, 74, 52, 0.3)",
	semanticError040: "rgba(223, 74, 52, 0.4)",
	semanticError050: "rgba(223, 74, 52, 0.5)",
	semanticError060: "rgba(223, 74, 52, 0.6)",
	semanticError070: "rgba(223, 74, 52, 0.7)",
	semanticError080: "rgba(223, 74, 52, 0.8)",
	semanticError090: "rgba(223, 74, 52, 0.9)",
	semanticError100: "rgba(223, 74, 52, 1.0)",
	semanticWarning010: "rgba(243, 161, 63, 0.1)",
	semanticWarning020: "rgba(243, 161, 63, 0.2)",
	semanticWarning030: "rgba(243, 161, 63, 0.3)",
	semanticWarning040: "rgba(243, 161, 63, 0.4)",
	semanticWarning050: "rgba(243, 161, 63, 0.5)",
	semanticWarning060: "rgba(243, 161, 63, 0.6)",
	semanticWarning070: "rgba(243, 161, 63, 0.7)",
	semanticWarning080: "rgba(243, 161, 63, 0.8)",
	semanticWarning090: "rgba(243, 161, 63, 0.9)",
	semanticWarning100: "rgba(243, 161, 63, 1.0)"
};
const tokens = {
	core: {
		backgroundAccentPrimary: "#0988F0",
		backgroundAccentCertified: "#C7B994",
		backgroundWalletKit: "#FFB800",
		backgroundAppKit: "#FF573B",
		backgroundCloud: "#0988F0",
		backgroundDocumentation: "#008847",
		backgroundSuccess: "rgba(48, 164, 107, 0.20)",
		backgroundError: "rgba(223, 74, 52, 0.20)",
		backgroundWarning: "rgba(243, 161, 63, 0.20)",
		textAccentPrimary: "#0988F0",
		textAccentCertified: "#C7B994",
		textWalletKit: "#FFB800",
		textAppKit: "#FF573B",
		textCloud: "#0988F0",
		textDocumentation: "#008847",
		textSuccess: "#30A46B",
		textError: "#DF4A34",
		textWarning: "#F3A13F",
		borderAccentPrimary: "#0988F0",
		borderSecondary: "#C7B994",
		borderSuccess: "#30A46B",
		borderError: "#DF4A34",
		borderWarning: "#F3A13F",
		foregroundAccent010: "rgba(9, 136, 240, 0.1)",
		foregroundAccent020: "rgba(9, 136, 240, 0.2)",
		foregroundAccent040: "rgba(9, 136, 240, 0.4)",
		foregroundAccent060: "rgba(9, 136, 240, 0.6)",
		foregroundSecondary020: "rgba(199, 185, 148, 0.2)",
		foregroundSecondary040: "rgba(199, 185, 148, 0.4)",
		foregroundSecondary060: "rgba(199, 185, 148, 0.6)",
		iconAccentPrimary: "#0988F0",
		iconAccentCertified: "#C7B994",
		iconSuccess: "#30A46B",
		iconError: "#DF4A34",
		iconWarning: "#F3A13F",
		glass010: "rgba(255, 255, 255, 0.1)",
		zIndex: "9999"
	},
	dark: {
		overlay: "rgba(0, 0, 0, 0.50)",
		backgroundPrimary: "#202020",
		backgroundInvert: "#FFFFFF",
		textPrimary: "#FFFFFF",
		textSecondary: "#9A9A9A",
		textTertiary: "#BBBBBB",
		textInvert: "#202020",
		borderPrimary: "#2A2A2A",
		borderPrimaryDark: "#363636",
		borderSecondary: "#4F4F4F",
		foregroundPrimary: "#252525",
		foregroundSecondary: "#2A2A2A",
		foregroundTertiary: "#363636",
		iconDefault: "#9A9A9A",
		iconInverse: "#FFFFFF"
	},
	light: {
		overlay: "rgba(230 , 230, 230, 0.5)",
		backgroundPrimary: "#FFFFFF",
		borderPrimaryDark: "#E9E9E9",
		backgroundInvert: "#202020",
		textPrimary: "#202020",
		textSecondary: "#9A9A9A",
		textTertiary: "#6C6C6C",
		textInvert: "#FFFFFF",
		borderPrimary: "#E9E9E9",
		borderSecondary: "#D0D0D0",
		foregroundPrimary: "#F3F3F3",
		foregroundSecondary: "#E9E9E9",
		foregroundTertiary: "#D0D0D0",
		iconDefault: "#9A9A9A",
		iconInverse: "#202020"
	}
};
const borderRadius = {
	"1": "4px",
	"2": "8px",
	"10": "10px",
	"3": "12px",
	"4": "16px",
	"6": "24px",
	"5": "20px",
	"8": "32px",
	"16": "64px",
	"20": "80px",
	"32": "128px",
	"64": "256px",
	"128": "512px",
	round: "9999px"
};
const spacing = {
	"0": "0px",
	"01": "2px",
	"1": "4px",
	"2": "8px",
	"3": "12px",
	"4": "16px",
	"5": "20px",
	"6": "24px",
	"7": "28px",
	"8": "32px",
	"9": "36px",
	"10": "40px",
	"12": "48px",
	"14": "56px",
	"16": "64px",
	"20": "80px",
	"32": "128px",
	"64": "256px"
};
const styles = {
	colors,
	fontFamily: {
		regular: "KHTeka",
		mono: "KHTekaMono"
	},
	fontWeight: {
		regular: "400",
		medium: "500"
	},
	textSize: {
		h1: "50px",
		h2: "44px",
		h3: "38px",
		h4: "32px",
		h5: "26px",
		h6: "20px",
		large: "16px",
		medium: "14px",
		small: "12px"
	},
	typography: {
		"h1-regular-mono": {
			lineHeight: "50px",
			letterSpacing: "-3px"
		},
		"h1-regular": {
			lineHeight: "50px",
			letterSpacing: "-1px"
		},
		"h1-medium": {
			lineHeight: "50px",
			letterSpacing: "-0.84px"
		},
		"h2-regular-mono": {
			lineHeight: "44px",
			letterSpacing: "-2.64px"
		},
		"h2-regular": {
			lineHeight: "44px",
			letterSpacing: "-0.88px"
		},
		"h2-medium": {
			lineHeight: "44px",
			letterSpacing: "-0.88px"
		},
		"h3-regular-mono": {
			lineHeight: "38px",
			letterSpacing: "-2.28px"
		},
		"h3-regular": {
			lineHeight: "38px",
			letterSpacing: "-0.76px"
		},
		"h3-medium": {
			lineHeight: "38px",
			letterSpacing: "-0.76px"
		},
		"h4-regular-mono": {
			lineHeight: "32px",
			letterSpacing: "-1.92px"
		},
		"h4-regular": {
			lineHeight: "32px",
			letterSpacing: "-0.32px"
		},
		"h4-medium": {
			lineHeight: "32px",
			letterSpacing: "-0.32px"
		},
		"h5-regular-mono": {
			lineHeight: "26px",
			letterSpacing: "-1.56px"
		},
		"h5-regular": {
			lineHeight: "26px",
			letterSpacing: "-0.26px"
		},
		"h5-medium": {
			lineHeight: "26px",
			letterSpacing: "-0.26px"
		},
		"h6-regular-mono": {
			lineHeight: "20px",
			letterSpacing: "-1.2px"
		},
		"h6-regular": {
			lineHeight: "20px",
			letterSpacing: "-0.6px"
		},
		"h6-medium": {
			lineHeight: "20px",
			letterSpacing: "-0.6px"
		},
		"lg-regular-mono": {
			lineHeight: "16px",
			letterSpacing: "-0.96px"
		},
		"lg-regular": {
			lineHeight: "18px",
			letterSpacing: "-0.16px"
		},
		"lg-medium": {
			lineHeight: "18px",
			letterSpacing: "-0.16px"
		},
		"md-regular-mono": {
			lineHeight: "14px",
			letterSpacing: "-0.84px"
		},
		"md-regular": {
			lineHeight: "16px",
			letterSpacing: "-0.14px"
		},
		"md-medium": {
			lineHeight: "16px",
			letterSpacing: "-0.14px"
		},
		"sm-regular-mono": {
			lineHeight: "12px",
			letterSpacing: "-0.72px"
		},
		"sm-regular": {
			lineHeight: "14px",
			letterSpacing: "-0.12px"
		},
		"sm-medium": {
			lineHeight: "14px",
			letterSpacing: "-0.12px"
		}
	},
	tokens: {
		core: tokens.core,
		theme: tokens.dark
	},
	borderRadius,
	spacing,
	durations: {
		xl: "400ms",
		lg: "200ms",
		md: "125ms",
		sm: "75ms"
	},
	easings: {
		"ease-out-power-2": "cubic-bezier(0.23, 0.09, 0.08, 1.13)",
		"ease-out-power-1": "cubic-bezier(0.12, 0.04, 0.2, 1.06)",
		"ease-in-power-2": "cubic-bezier(0.92, -0.13, 0.77, 0.91)",
		"ease-in-power-1": "cubic-bezier(0.88, -0.06, 0.8, 0.96)",
		"ease-inout-power-2": "cubic-bezier(0.77, 0.09, 0.23, 1.13)",
		"ease-inout-power-1": "cubic-bezier(0.88, 0.04, 0.12, 1.06)"
	}
};
var PREFIX_VAR = "--apkt";
function normalizeThemeVariables(themeVariables) {
	if (!themeVariables) return {};
	const normalized = {};
	normalized["font-family"] = themeVariables["--apkt-font-family"] ?? themeVariables["--w3m-font-family"] ?? "KHTeka";
	normalized["accent"] = themeVariables["--apkt-accent"] ?? themeVariables["--w3m-accent"] ?? "#0988F0";
	normalized["color-mix"] = themeVariables["--apkt-color-mix"] ?? themeVariables["--w3m-color-mix"] ?? "#000";
	normalized["color-mix-strength"] = themeVariables["--apkt-color-mix-strength"] ?? themeVariables["--w3m-color-mix-strength"] ?? 0;
	normalized["font-size-master"] = themeVariables["--apkt-font-size-master"] ?? themeVariables["--w3m-font-size-master"] ?? "10px";
	normalized["border-radius-master"] = themeVariables["--apkt-border-radius-master"] ?? themeVariables["--w3m-border-radius-master"] ?? "4px";
	if (themeVariables["--apkt-z-index"] !== void 0) normalized["z-index"] = themeVariables["--apkt-z-index"];
	else if (themeVariables["--w3m-z-index"] !== void 0) normalized["z-index"] = themeVariables["--w3m-z-index"];
	return normalized;
}
const ThemeHelperUtil = {
	createCSSVariables(styles$1) {
		const cssVariables = {};
		const cssVariablesVarPrefix = {};
		function createVars(_styles, parent, currentVar = "") {
			for (const [styleKey, styleValue] of Object.entries(_styles)) {
				const variable = currentVar ? `${currentVar}-${styleKey}` : styleKey;
				if (styleValue && typeof styleValue === "object" && Object.keys(styleValue).length) {
					parent[styleKey] = {};
					createVars(styleValue, parent[styleKey], variable);
				} else if (typeof styleValue === "string") parent[styleKey] = `${PREFIX_VAR}-${variable}`;
			}
		}
		function addVarsPrefix(_styles, parent) {
			for (const [key, value] of Object.entries(_styles)) if (value && typeof value === "object") {
				parent[key] = {};
				addVarsPrefix(value, parent[key]);
			} else if (typeof value === "string") parent[key] = `var(${value})`;
		}
		createVars(styles$1, cssVariables);
		addVarsPrefix(cssVariables, cssVariablesVarPrefix);
		return {
			cssVariables,
			cssVariablesVarPrefix
		};
	},
	assignCSSVariables(vars$1, styles$1) {
		const assignedCSSVariables = {};
		function assignVars(_vars, _styles, variable) {
			for (const [varKey, varValue] of Object.entries(_vars)) {
				const nextVariable = variable ? `${variable}-${varKey}` : varKey;
				const styleValues = _styles[varKey];
				if (varValue && typeof varValue === "object") assignVars(varValue, styleValues, nextVariable);
				else if (typeof styleValues === "string") assignedCSSVariables[`${PREFIX_VAR}-${nextVariable}`] = styleValues;
			}
		}
		assignVars(vars$1, styles$1);
		return assignedCSSVariables;
	},
	createRootStyles(theme, themeVariables) {
		const styles$1 = {
			...styles,
			tokens: {
				...styles.tokens,
				theme: theme === "light" ? tokens.light : tokens.dark
			}
		};
		const { cssVariables } = ThemeHelperUtil.createCSSVariables(styles$1);
		const assignedCSSVariables = ThemeHelperUtil.assignCSSVariables(cssVariables, styles$1);
		const w3mVariables = ThemeHelperUtil.generateW3MVariables(themeVariables);
		const w3mOverrides = ThemeHelperUtil.generateW3MOverrides(themeVariables);
		const scaledVariables = ThemeHelperUtil.generateScaledVariables(themeVariables);
		const baseVariables = ThemeHelperUtil.generateBaseVariables(assignedCSSVariables);
		const allVariables = {
			...assignedCSSVariables,
			...baseVariables,
			...w3mVariables,
			...w3mOverrides,
			...scaledVariables
		};
		const colorMixVariables = ThemeHelperUtil.applyColorMixToVariables(themeVariables, allVariables);
		const finalVariables = {
			...allVariables,
			...colorMixVariables
		};
		return `:root {${Object.entries(finalVariables).map(([key, style]) => `${key}:${style.replace("/[:;{}</>]/g", "")};`).join("")}}`;
	},
	generateW3MVariables(themeVariables) {
		if (!themeVariables) return {};
		const normalized = normalizeThemeVariables(themeVariables);
		const variables = {};
		variables["--w3m-font-family"] = normalized["font-family"];
		variables["--w3m-accent"] = normalized["accent"];
		variables["--w3m-color-mix"] = normalized["color-mix"];
		variables["--w3m-color-mix-strength"] = `${normalized["color-mix-strength"]}%`;
		variables["--w3m-font-size-master"] = normalized["font-size-master"];
		variables["--w3m-border-radius-master"] = normalized["border-radius-master"];
		return variables;
	},
	generateW3MOverrides(themeVariables) {
		if (!themeVariables) return {};
		const normalized = normalizeThemeVariables(themeVariables);
		const overrides = {};
		if (themeVariables["--apkt-accent"] || themeVariables["--w3m-accent"]) {
			const accentColor = normalized["accent"];
			overrides["--apkt-tokens-core-iconAccentPrimary"] = accentColor;
			overrides["--apkt-tokens-core-borderAccentPrimary"] = accentColor;
			overrides["--apkt-tokens-core-textAccentPrimary"] = accentColor;
			overrides["--apkt-tokens-core-backgroundAccentPrimary"] = accentColor;
		}
		if (themeVariables["--apkt-font-family"] || themeVariables["--w3m-font-family"]) overrides["--apkt-fontFamily-regular"] = normalized["font-family"];
		if (normalized["z-index"] !== void 0) overrides["--apkt-tokens-core-zIndex"] = `${normalized["z-index"]}`;
		return overrides;
	},
	generateScaledVariables(themeVariables) {
		if (!themeVariables) return {};
		const normalized = normalizeThemeVariables(themeVariables);
		const scaledVars = {};
		if (themeVariables["--apkt-font-size-master"] || themeVariables["--w3m-font-size-master"]) {
			const masterSize = parseFloat(normalized["font-size-master"].replace("px", ""));
			scaledVars["--apkt-textSize-h1"] = `${Number(masterSize) * 5}px`;
			scaledVars["--apkt-textSize-h2"] = `${Number(masterSize) * 4.4}px`;
			scaledVars["--apkt-textSize-h3"] = `${Number(masterSize) * 3.8}px`;
			scaledVars["--apkt-textSize-h4"] = `${Number(masterSize) * 3.2}px`;
			scaledVars["--apkt-textSize-h5"] = `${Number(masterSize) * 2.6}px`;
			scaledVars["--apkt-textSize-h6"] = `${Number(masterSize) * 2}px`;
			scaledVars["--apkt-textSize-large"] = `${Number(masterSize) * 1.6}px`;
			scaledVars["--apkt-textSize-medium"] = `${Number(masterSize) * 1.4}px`;
			scaledVars["--apkt-textSize-small"] = `${Number(masterSize) * 1.2}px`;
		}
		if (themeVariables["--apkt-border-radius-master"] || themeVariables["--w3m-border-radius-master"]) {
			const masterRadius = parseFloat(normalized["border-radius-master"].replace("px", ""));
			scaledVars["--apkt-borderRadius-1"] = `${Number(masterRadius)}px`;
			scaledVars["--apkt-borderRadius-2"] = `${Number(masterRadius) * 2}px`;
			scaledVars["--apkt-borderRadius-3"] = `${Number(masterRadius) * 3}px`;
			scaledVars["--apkt-borderRadius-4"] = `${Number(masterRadius) * 4}px`;
			scaledVars["--apkt-borderRadius-5"] = `${Number(masterRadius) * 5}px`;
			scaledVars["--apkt-borderRadius-6"] = `${Number(masterRadius) * 6}px`;
			scaledVars["--apkt-borderRadius-8"] = `${Number(masterRadius) * 8}px`;
			scaledVars["--apkt-borderRadius-16"] = `${Number(masterRadius) * 16}px`;
			scaledVars["--apkt-borderRadius-20"] = `${Number(masterRadius) * 20}px`;
			scaledVars["--apkt-borderRadius-32"] = `${Number(masterRadius) * 32}px`;
			scaledVars["--apkt-borderRadius-64"] = `${Number(masterRadius) * 64}px`;
			scaledVars["--apkt-borderRadius-128"] = `${Number(masterRadius) * 128}px`;
		}
		return scaledVars;
	},
	generateColorMixCSS(themeVariables, allVariables) {
		if (!themeVariables?.["--w3m-color-mix"] || !themeVariables["--w3m-color-mix-strength"]) return "";
		const colorMix = themeVariables["--w3m-color-mix"];
		const strength = themeVariables["--w3m-color-mix-strength"];
		if (!strength || strength === 0) return "";
		const colorVariables = Object.keys(allVariables || {}).filter((key) => {
			const isColorToken = key.includes("-tokens-core-background") || key.includes("-tokens-core-text") || key.includes("-tokens-core-border") || key.includes("-tokens-core-foreground") || key.includes("-tokens-core-icon") || key.includes("-tokens-theme-background") || key.includes("-tokens-theme-text") || key.includes("-tokens-theme-border") || key.includes("-tokens-theme-foreground") || key.includes("-tokens-theme-icon");
			const isDimensional = key.includes("-borderRadius-") || key.includes("-spacing-") || key.includes("-textSize-") || key.includes("-fontFamily-") || key.includes("-fontWeight-") || key.includes("-typography-") || key.includes("-duration-") || key.includes("-ease-") || key.includes("-path-") || key.includes("-width-") || key.includes("-height-") || key.includes("-visual-size-") || key.includes("-modal-width") || key.includes("-cover");
			return isColorToken && !isDimensional;
		});
		if (colorVariables.length === 0) return "";
		return ` @supports (background: color-mix(in srgb, white 50%, black)) {
      :root {
        ${colorVariables.map((key) => {
			const originalValue = allVariables?.[key] || "";
			if (originalValue.includes("color-mix") || originalValue.startsWith("#") || originalValue.startsWith("rgb")) return `${key}: color-mix(in srgb, ${colorMix} ${strength}%, ${originalValue});`;
			return `${key}: color-mix(in srgb, ${colorMix} ${strength}%, var(${key}-base, ${originalValue}));`;
		}).join("")}
      }
    }`;
	},
	generateBaseVariables(assignedCSSVariables) {
		const baseVariables = {};
		const themeBackgroundPrimary = assignedCSSVariables["--apkt-tokens-theme-backgroundPrimary"];
		if (themeBackgroundPrimary) baseVariables["--apkt-tokens-theme-backgroundPrimary-base"] = themeBackgroundPrimary;
		const coreBackgroundAccentPrimary = assignedCSSVariables["--apkt-tokens-core-backgroundAccentPrimary"];
		if (coreBackgroundAccentPrimary) baseVariables["--apkt-tokens-core-backgroundAccentPrimary-base"] = coreBackgroundAccentPrimary;
		return baseVariables;
	},
	applyColorMixToVariables(themeVariables, allVariables) {
		const colorMixVariables = {};
		if (allVariables?.["--apkt-tokens-theme-backgroundPrimary"]) colorMixVariables["--apkt-tokens-theme-backgroundPrimary"] = "var(--apkt-tokens-theme-backgroundPrimary-base)";
		if (allVariables?.["--apkt-tokens-core-backgroundAccentPrimary"]) colorMixVariables["--apkt-tokens-core-backgroundAccentPrimary"] = "var(--apkt-tokens-core-backgroundAccentPrimary-base)";
		const normalized = normalizeThemeVariables(themeVariables);
		const colorMix = normalized["color-mix"];
		const strength = normalized["color-mix-strength"];
		if (!strength || strength === 0) return colorMixVariables;
		const colorVariables = Object.keys(allVariables || {}).filter((key) => {
			const isColorToken = key.includes("-tokens-core-background") || key.includes("-tokens-core-text") || key.includes("-tokens-core-border") || key.includes("-tokens-core-foreground") || key.includes("-tokens-core-icon") || key.includes("-tokens-theme-background") || key.includes("-tokens-theme-text") || key.includes("-tokens-theme-border") || key.includes("-tokens-theme-foreground") || key.includes("-tokens-theme-icon") || key.includes("-tokens-theme-overlay");
			const isDimensional = key.includes("-borderRadius-") || key.includes("-spacing-") || key.includes("-textSize-") || key.includes("-fontFamily-") || key.includes("-fontWeight-") || key.includes("-typography-") || key.includes("-duration-") || key.includes("-ease-") || key.includes("-path-") || key.includes("-width-") || key.includes("-height-") || key.includes("-visual-size-") || key.includes("-modal-width") || key.includes("-cover");
			return isColorToken && !isDimensional;
		});
		if (colorVariables.length === 0) return colorMixVariables;
		colorVariables.forEach((key) => {
			const originalValue = allVariables?.[key] || "";
			if (key.endsWith("-base")) return;
			if (key === "--apkt-tokens-theme-backgroundPrimary" || key === "--apkt-tokens-core-backgroundAccentPrimary") colorMixVariables[key] = `color-mix(in srgb, ${colorMix} ${strength}%, var(${key}-base))`;
			else if (originalValue.includes("color-mix") || originalValue.startsWith("#") || originalValue.startsWith("rgb")) colorMixVariables[key] = `color-mix(in srgb, ${colorMix} ${strength}%, ${originalValue})`;
			else colorMixVariables[key] = `color-mix(in srgb, ${colorMix} ${strength}%, var(${key}-base, ${originalValue}))`;
		});
		return colorMixVariables;
	}
};
var { cssVariablesVarPrefix: vars } = ThemeHelperUtil.createCSSVariables(styles);
function css(strings, ...values) {
	return i(strings, ...values.map((value) => typeof value === "function" ? r(value(vars)) : r(value)));
}
var apktTag = void 0;
var themeTag = void 0;
var darkModeTag = void 0;
var lightModeTag = void 0;
var currentThemeVariables = void 0;
var fonts = {
	"KHTeka-500-woff2": "https://fonts.reown.com/KHTeka-Medium.woff2",
	"KHTeka-400-woff2": "https://fonts.reown.com/KHTeka-Regular.woff2",
	"KHTeka-300-woff2": "https://fonts.reown.com/KHTeka-Light.woff2",
	"KHTekaMono-400-woff2": "https://fonts.reown.com/KHTekaMono-Regular.woff2",
	"KHTeka-500-woff": "https://fonts.reown.com/KHTeka-Light.woff",
	"KHTeka-400-woff": "https://fonts.reown.com/KHTeka-Regular.woff",
	"KHTeka-300-woff": "https://fonts.reown.com/KHTeka-Light.woff",
	"KHTekaMono-400-woff": "https://fonts.reown.com/KHTekaMono-Regular.woff"
};
function createAppKitTheme(themeVariables, theme = "dark") {
	if (apktTag) document.head.removeChild(apktTag);
	apktTag = document.createElement("style");
	apktTag.textContent = ThemeHelperUtil.createRootStyles(theme, themeVariables);
	document.head.appendChild(apktTag);
}
function initializeTheming(themeVariables, themeMode = "dark") {
	currentThemeVariables = themeVariables;
	themeTag = document.createElement("style");
	darkModeTag = document.createElement("style");
	lightModeTag = document.createElement("style");
	themeTag.textContent = createRootStyles(themeVariables).core.cssText;
	darkModeTag.textContent = createRootStyles(themeVariables).dark.cssText;
	lightModeTag.textContent = createRootStyles(themeVariables).light.cssText;
	document.head.appendChild(themeTag);
	document.head.appendChild(darkModeTag);
	document.head.appendChild(lightModeTag);
	createAppKitTheme(themeVariables, themeMode);
	setColorTheme(themeMode);
	if (!(themeVariables?.["--apkt-font-family"] || themeVariables?.["--w3m-font-family"])) for (const [key, url] of Object.entries(fonts)) {
		const link = document.createElement("link");
		link.rel = "preload";
		link.href = url;
		link.as = "font";
		link.type = key.includes("woff2") ? "font/woff2" : "font/woff";
		link.crossOrigin = "anonymous";
		document.head.appendChild(link);
	}
	setColorTheme(themeMode);
}
function setColorTheme(themeMode = "dark") {
	if (darkModeTag && lightModeTag && apktTag) if (themeMode === "light") {
		createAppKitTheme(currentThemeVariables, themeMode);
		darkModeTag.removeAttribute("media");
		lightModeTag.media = "enabled";
	} else {
		createAppKitTheme(currentThemeVariables, themeMode);
		lightModeTag.removeAttribute("media");
		darkModeTag.media = "enabled";
	}
}
function setThemeVariables(_themeVariables) {
	currentThemeVariables = _themeVariables;
	if (themeTag && darkModeTag && lightModeTag) {
		themeTag.textContent = createRootStyles(_themeVariables).core.cssText;
		darkModeTag.textContent = createRootStyles(_themeVariables).dark.cssText;
		lightModeTag.textContent = createRootStyles(_themeVariables).light.cssText;
		const fontFamily$1 = _themeVariables?.["--apkt-font-family"] || _themeVariables?.["--w3m-font-family"];
		if (fontFamily$1) {
			themeTag.textContent = themeTag.textContent?.replace("font-family: KHTeka", `font-family: ${fontFamily$1}`);
			darkModeTag.textContent = darkModeTag.textContent?.replace("font-family: KHTeka", `font-family: ${fontFamily$1}`);
			lightModeTag.textContent = lightModeTag.textContent?.replace("font-family: KHTeka", `font-family: ${fontFamily$1}`);
		}
	}
	if (apktTag) createAppKitTheme(_themeVariables, lightModeTag?.media === "enabled" ? "light" : "dark");
}
function createRootStyles(_themeVariables) {
	return {
		core: i`
      ${Boolean(_themeVariables?.["--apkt-font-family"] || _themeVariables?.["--w3m-font-family"]) ? i`` : i`
            @font-face {
              font-family: 'KHTeka';
              src:
                url(${r(fonts["KHTeka-400-woff2"])}) format('woff2'),
                url(${r(fonts["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${r(fonts["KHTeka-300-woff2"])}) format('woff2'),
                url(${r(fonts["KHTeka-300-woff"])}) format('woff');
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTekaMono';
              src:
                url(${r(fonts["KHTekaMono-400-woff2"])}) format('woff2'),
                url(${r(fonts["KHTekaMono-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${r(fonts["KHTeka-400-woff2"])}) format('woff2'),
                url(${r(fonts["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }
          `}

      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --apkt-modal-width: 370px;

        --apkt-visual-size-inherit: inherit;
        --apkt-visual-size-sm: 40px;
        --apkt-visual-size-md: 55px;
        --apkt-visual-size-lg: 80px;

        --apkt-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --apkt-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --apkt-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --apkt-width-network-sm: 36px;
        --apkt-width-network-md: 48px;
        --apkt-width-network-lg: 86px;

        --apkt-duration-dynamic: 0ms;
        --apkt-height-network-sm: 40px;
        --apkt-height-network-md: 54px;
        --apkt-height-network-lg: 96px;
      }
    `,
		dark: i`
      :root {
      }
    `,
		light: i`
      :root {
      }
    `
	};
}
const resetStyles = i`
  div,
  span,
  iframe,
  a,
  img,
  form,
  button,
  label,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    backface-visibility: hidden;
  }

  :host {
    font-family: var(--apkt-fontFamily-regular);
  }
`;
const elementStyles = i`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
    outline: none;
    border: none;
    text-decoration: none;
    transition:
      background-color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      width var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      height var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      transform var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      opacity var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      scale var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border-radius var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
    will-change:
      background-color, color, border, box-shadow, width, height, transform, opacity, scale,
      border-radius;
  }

  a:active:not([disabled]),
  button:active:not([disabled]) {
    scale: 0.975;
    transform-origin: center;
  }

  button:disabled {
    cursor: default;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`;
var DECIMAL_POINT = ".";
const UiHelperUtil = {
	getSpacingStyles(spacing$1, index) {
		if (Array.isArray(spacing$1)) return spacing$1[index] ? `var(--apkt-spacing-${spacing$1[index]})` : void 0;
		else if (typeof spacing$1 === "string") return `var(--apkt-spacing-${spacing$1})`;
	},
	getFormattedDate(date) {
		return new Intl.DateTimeFormat("en-US", {
			month: "short",
			day: "numeric"
		}).format(date);
	},
	formatCurrency(amount = 0, options = {}) {
		const numericAmount = Number(amount);
		if (isNaN(numericAmount)) return "$0.00";
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
			...options
		}).format(numericAmount);
	},
	getHostName(url) {
		try {
			return new URL(url).hostname;
		} catch (error) {
			return "";
		}
	},
	getTruncateString({ string, charsStart, charsEnd, truncate }) {
		if (string.length <= charsStart + charsEnd) return string;
		if (truncate === "end") return `${string.substring(0, charsStart)}...`;
		else if (truncate === "start") return `...${string.substring(string.length - charsEnd)}`;
		return `${string.substring(0, Math.floor(charsStart))}...${string.substring(string.length - Math.floor(charsEnd))}`;
	},
	generateAvatarColors(address) {
		const baseColor = address.toLowerCase().replace(/^0x/iu, "").replace(/[^a-f0-9]/gu, "").substring(0, 6).padEnd(6, "0");
		const rgbColor = this.hexToRgb(baseColor);
		const masterBorderRadius = getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master");
		const edge = 100 - 3 * Number(masterBorderRadius?.replace("px", ""));
		const gradientCircle = `${edge}% ${edge}% at 65% 40%`;
		const colors$1 = [];
		for (let i$4 = 0; i$4 < 5; i$4 += 1) {
			const tintedColor = this.tintColor(rgbColor, .15 * i$4);
			colors$1.push(`rgb(${tintedColor[0]}, ${tintedColor[1]}, ${tintedColor[2]})`);
		}
		return `
    --local-color-1: ${colors$1[0]};
    --local-color-2: ${colors$1[1]};
    --local-color-3: ${colors$1[2]};
    --local-color-4: ${colors$1[3]};
    --local-color-5: ${colors$1[4]};
    --local-radial-circle: ${gradientCircle}
   `;
	},
	hexToRgb(hex) {
		const bigint = parseInt(hex, 16);
		return [
			bigint >> 16 & 255,
			bigint >> 8 & 255,
			bigint & 255
		];
	},
	tintColor(rgb, tint) {
		const [r$3, g$1, b$2] = rgb;
		return [
			Math.round(r$3 + (255 - r$3) * tint),
			Math.round(g$1 + (255 - g$1) * tint),
			Math.round(b$2 + (255 - b$2) * tint)
		];
	},
	isNumber(character) {
		return { number: /^[0-9]+$/u }.number.test(character);
	},
	getColorTheme(theme) {
		if (theme) return theme;
		else if (typeof window !== "undefined" && window.matchMedia && typeof window.matchMedia === "function") {
			if (window.matchMedia("(prefers-color-scheme: dark)")?.matches) return "dark";
			return "light";
		}
		return "dark";
	},
	splitBalance(input) {
		const parts = input.split(".");
		if (parts.length === 2) return [parts[0], parts[1]];
		return ["0", "00"];
	},
	roundNumber(number, threshold, fixed) {
		return number.toString().length >= threshold ? Number(number).toFixed(fixed) : number;
	},
	cssDurationToNumber(duration) {
		if (duration.endsWith("s")) return Number(duration.replace("s", "")) * 1e3;
		else if (duration.endsWith("ms")) return Number(duration.replace("ms", ""));
		return 0;
	},
	maskInput({ value, decimals, integers }) {
		value = value.replace(",", ".");
		if (value === DECIMAL_POINT) return `0${DECIMAL_POINT}`;
		const [integerPart = "", decimalsPart] = value.split(DECIMAL_POINT).map((p$2) => p$2.replace(/[^0-9]/gu, ""));
		const limitedInteger = integers ? integerPart.substring(0, integers) : integerPart;
		const cleanIntegerPart = limitedInteger.length === 2 ? String(Number(limitedInteger)) : limitedInteger;
		const cleanDecimalsPart = typeof decimals === "number" ? decimalsPart?.substring(0, decimals) : decimalsPart;
		return (typeof cleanDecimalsPart === "string" && (typeof decimals !== "number" || decimals > 0) ? [cleanIntegerPart, cleanDecimalsPart].join(DECIMAL_POINT) : cleanIntegerPart) ?? "";
	},
	capitalize(value) {
		if (!value) return "";
		return value.charAt(0).toUpperCase() + value.slice(1);
	}
};
function standardCustomElement(tagName, descriptor) {
	const { kind, elements } = descriptor;
	return {
		kind,
		elements,
		finisher(clazz) {
			if (!customElements.get(tagName)) customElements.define(tagName, clazz);
		}
	};
}
function legacyCustomElement(tagName, clazz) {
	if (!customElements.get(tagName)) customElements.define(tagName, clazz);
	return clazz;
}
function customElement(tagName) {
	return function create(classOrDescriptor) {
		return typeof classOrDescriptor === "function" ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);
	};
}
const ConstantsUtil$1 = {
	METMASK_CONNECTOR_NAME: "MetaMask",
	TRUST_CONNECTOR_NAME: "Trust Wallet",
	SOLFLARE_CONNECTOR_NAME: "Solflare",
	PHANTOM_CONNECTOR_NAME: "Phantom",
	COIN98_CONNECTOR_NAME: "Coin98",
	MAGIC_EDEN_CONNECTOR_NAME: "Magic Eden",
	BACKPACK_CONNECTOR_NAME: "Backpack",
	BITGET_CONNECTOR_NAME: "Bitget Wallet",
	FRONTIER_CONNECTOR_NAME: "Frontier",
	XVERSE_CONNECTOR_NAME: "Xverse Wallet",
	LEATHER_CONNECTOR_NAME: "Leather",
	OKX_CONNECTOR_NAME: "OKX Wallet",
	BINANCE_CONNECTOR_NAME: "Binance Wallet",
	EIP155: ConstantsUtil.CHAIN.EVM,
	ADD_CHAIN_METHOD: "wallet_addEthereumChain",
	EIP6963_ANNOUNCE_EVENT: "eip6963:announceProvider",
	EIP6963_REQUEST_EVENT: "eip6963:requestProvider",
	CONNECTOR_RDNS_MAP: {
		coinbaseWallet: "com.coinbase.wallet",
		coinbaseWalletSDK: "com.coinbase.wallet"
	},
	CONNECTOR_TYPE_EXTERNAL: "EXTERNAL",
	CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
	CONNECTOR_TYPE_INJECTED: "INJECTED",
	CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
	CONNECTOR_TYPE_AUTH: "AUTH",
	CONNECTOR_TYPE_MULTI_CHAIN: "MULTI_CHAIN",
	CONNECTOR_TYPE_W3M_AUTH: "AUTH",
	getSDKVersionWarningMessage(currentVersion, latestVersion) {
		return `
     @@@@@@@           @@@@@@@@@@@@@@@@@@      
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@   @@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@   @@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@  @@@@@@@@@@@@@
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@   @@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@   @@@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@  @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@   @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
      @@@@@            @@@@@@@@@@@@@@@@@@  
      
AppKit SDK version ${currentVersion} is outdated. Latest version is ${latestVersion}. Please update to the latest version for bug fixes and new features.
            
Changelog: https://github.com/reown-com/appkit/releases
NPM Registry: https://www.npmjs.com/package/@reown/appkit`;
	}
};
const HelpersUtil = {
	getCaipTokens(tokens$1) {
		if (!tokens$1) return;
		const caipTokens = {};
		Object.entries(tokens$1).forEach(([id, token]) => {
			caipTokens[`${ConstantsUtil$1.EIP155}:${id}`] = token;
		});
		return caipTokens;
	},
	isLowerCaseMatch(str1, str2) {
		return str1?.toLowerCase() === str2?.toLowerCase();
	},
	getActiveNamespaceConnectedToAuth() {
		const activeChain = ChainController.state.activeChain;
		return ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((chain) => ConnectorController.getConnectorId(chain) === ConstantsUtil.CONNECTOR_ID.AUTH && chain === activeChain);
	},
	withRetry({ conditionFn, intervalMs, maxRetries }) {
		let attempts = 0;
		return new Promise((resolve) => {
			async function tryCheck() {
				attempts += 1;
				if (await conditionFn()) return resolve(true);
				if (attempts >= maxRetries) return resolve(false);
				setTimeout(tryCheck, intervalMs);
				return null;
			}
			tryCheck();
		});
	},
	userChainIdToChainNamespace(chainId) {
		if (typeof chainId === "number") return ConstantsUtil.CHAIN.EVM;
		const [namespace] = chainId.split(":");
		return namespace;
	},
	getOtherAuthNamespaces(activeNamespace) {
		if (!activeNamespace) return [];
		return ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.filter((ns) => ns !== activeNamespace);
	},
	getConnectorStorageInfo(connectorId, namespace) {
		const storageConnections = StorageUtil.getConnections()[namespace] ?? [];
		return {
			hasDisconnected: StorageUtil.isConnectorDisconnected(connectorId, namespace),
			hasConnected: storageConnections.some((c$3) => HelpersUtil.isLowerCaseMatch(c$3.connectorId, connectorId))
		};
	}
};
export { i as S, b as _, elementStyles as a, f$1 as b, setColorTheme as c, vars as d, MathUtil as f, T as g, E as h, UiHelperUtil as i, setThemeVariables as l, A as m, ConstantsUtil$1 as n, initializeTheming as o, i$1 as p, customElement as r, resetStyles as s, HelpersUtil as t, css as u, j as v, u$1 as x, w as y };
