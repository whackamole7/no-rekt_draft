import { t as secp256k1 } from "./secp256k1-C0rbGAYv.js";
import { X as require_events, Xt as keccak_256, cn as __commonJSMin, dn as __reExport, fn as __toCommonJS, ln as __esmMin, pn as __toESM, un as __export } from "./index-DTDIO01R.js";
function isBytes(a$1) {
	return a$1 instanceof Uint8Array || ArrayBuffer.isView(a$1) && a$1.constructor.name === "Uint8Array";
}
function isArrayOf(isString, arr) {
	if (!Array.isArray(arr)) return false;
	if (arr.length === 0) return true;
	if (isString) return arr.every((item) => typeof item === "string");
	else return arr.every((item) => Number.isSafeInteger(item));
}
function afn(input) {
	if (typeof input !== "function") throw new Error("function expected");
	return true;
}
function astr(label, input) {
	if (typeof input !== "string") throw new Error(`${label}: string expected`);
	return true;
}
function anumber(n$2) {
	if (!Number.isSafeInteger(n$2)) throw new Error(`invalid integer: ${n$2}`);
}
function aArr(input) {
	if (!Array.isArray(input)) throw new Error("array expected");
}
function astrArr(label, input) {
	if (!isArrayOf(true, input)) throw new Error(`${label}: array of strings expected`);
}
function anumArr(label, input) {
	if (!isArrayOf(false, input)) throw new Error(`${label}: array of numbers expected`);
}
function chain(...args) {
	const id = (a$1) => a$1;
	const wrap = (a$1, b$2) => (c$3) => a$1(b$2(c$3));
	return {
		encode: args.map((x$3) => x$3.encode).reduceRight(wrap, id),
		decode: args.map((x$3) => x$3.decode).reduce(wrap, id)
	};
}
function alphabet$1(letters) {
	const lettersA = typeof letters === "string" ? letters.split("") : letters;
	const len = lettersA.length;
	astrArr("alphabet", lettersA);
	const indexes = new Map(lettersA.map((l$4, i$1) => [l$4, i$1]));
	return {
		encode: (digits) => {
			aArr(digits);
			return digits.map((i$1) => {
				if (!Number.isSafeInteger(i$1) || i$1 < 0 || i$1 >= len) throw new Error(`alphabet.encode: digit index outside alphabet "${i$1}". Allowed: ${letters}`);
				return lettersA[i$1];
			});
		},
		decode: (input) => {
			aArr(input);
			return input.map((letter) => {
				astr("alphabet.decode", letter);
				const i$1 = indexes.get(letter);
				if (i$1 === void 0) throw new Error(`Unknown letter: "${letter}". Allowed: ${letters}`);
				return i$1;
			});
		}
	};
}
function join(separator = "") {
	astr("join", separator);
	return {
		encode: (from$6) => {
			astrArr("join.decode", from$6);
			return from$6.join(separator);
		},
		decode: (to$1) => {
			astr("join.decode", to$1);
			return to$1.split(separator);
		}
	};
}
function padding(bits, chr = "=") {
	anumber(bits);
	astr("padding", chr);
	return {
		encode(data) {
			astrArr("padding.encode", data);
			while (data.length * bits % 8) data.push(chr);
			return data;
		},
		decode(input) {
			astrArr("padding.decode", input);
			let end = input.length;
			if (end * bits % 8) throw new Error("padding: invalid, string should have whole number of bytes");
			for (; end > 0 && input[end - 1] === chr; end--) if ((end - 1) * bits % 8 === 0) throw new Error("padding: invalid, string has too much padding");
			return input.slice(0, end);
		}
	};
}
function normalize(fn) {
	afn(fn);
	return {
		encode: (from$6) => from$6,
		decode: (to$1) => fn(to$1)
	};
}
var gcd = (a$1, b$2) => b$2 === 0 ? a$1 : gcd(b$2, a$1 % b$2);
var radix2carry = /* @__NO_SIDE_EFFECTS__ */ (from$6, to$1) => from$6 + (to$1 - gcd(from$6, to$1));
var powers = /* @__PURE__ */ (() => {
	let res = [];
	for (let i$1 = 0; i$1 < 40; i$1++) res.push(2 ** i$1);
	return res;
})();
function convertRadix2(data, from$6, to$1, padding$1) {
	aArr(data);
	if (from$6 <= 0 || from$6 > 32) throw new Error(`convertRadix2: wrong from=${from$6}`);
	if (to$1 <= 0 || to$1 > 32) throw new Error(`convertRadix2: wrong to=${to$1}`);
	if (/* @__PURE__ */ radix2carry(from$6, to$1) > 32) throw new Error(`convertRadix2: carry overflow from=${from$6} to=${to$1} carryBits=${/* @__PURE__ */ radix2carry(from$6, to$1)}`);
	let carry = 0;
	let pos = 0;
	const max = powers[from$6];
	const mask = powers[to$1] - 1;
	const res = [];
	for (const n$2 of data) {
		anumber(n$2);
		if (n$2 >= max) throw new Error(`convertRadix2: invalid data word=${n$2} from=${from$6}`);
		carry = carry << from$6 | n$2;
		if (pos + from$6 > 32) throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from$6}`);
		pos += from$6;
		for (; pos >= to$1; pos -= to$1) res.push((carry >> pos - to$1 & mask) >>> 0);
		const pow = powers[pos];
		if (pow === void 0) throw new Error("invalid carry");
		carry &= pow - 1;
	}
	carry = carry << to$1 - pos & mask;
	if (!padding$1 && pos >= from$6) throw new Error("Excess padding");
	if (!padding$1 && carry > 0) throw new Error(`Non-zero padding: ${carry}`);
	if (padding$1 && pos > 0) res.push(carry >>> 0);
	return res;
}
function radix2(bits, revPadding = false) {
	anumber(bits);
	if (bits <= 0 || bits > 32) throw new Error("radix2: bits should be in (0..32]");
	if (/* @__PURE__ */ radix2carry(8, bits) > 32 || /* @__PURE__ */ radix2carry(bits, 8) > 32) throw new Error("radix2: carry overflow");
	return {
		encode: (bytes) => {
			if (!isBytes(bytes)) throw new Error("radix2.encode input should be Uint8Array");
			return convertRadix2(Array.from(bytes), 8, bits, !revPadding);
		},
		decode: (digits) => {
			anumArr("radix2.decode", digits);
			return Uint8Array.from(convertRadix2(digits, bits, 8, revPadding));
		}
	};
}
function unsafeWrapper(fn) {
	afn(fn);
	return function(...args) {
		try {
			return fn.apply(null, args);
		} catch (e$1) {}
	};
}
chain(radix2(4), alphabet$1("0123456789ABCDEF"), join(""));
const base32$1 = chain(radix2(5), alphabet$1("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), padding(5), join(""));
chain(radix2(5), alphabet$1("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), join(""));
chain(radix2(5), alphabet$1("0123456789ABCDEFGHIJKLMNOPQRSTUV"), padding(5), join(""));
chain(radix2(5), alphabet$1("0123456789ABCDEFGHIJKLMNOPQRSTUV"), join(""));
chain(radix2(5), alphabet$1("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), join(""), normalize((s$1) => s$1.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1")));
var hasBase64Builtin = /* @__PURE__ */ (() => typeof Uint8Array.from([]).toBase64 === "function" && typeof Uint8Array.fromBase64 === "function")();
hasBase64Builtin || chain(radix2(6), alphabet$1("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), padding(6), join(""));
chain(radix2(6), alphabet$1("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), join(""));
hasBase64Builtin || chain(radix2(6), alphabet$1("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), padding(6), join(""));
chain(radix2(6), alphabet$1("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), join(""));
var BECH_ALPHABET = chain(alphabet$1("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), join(""));
var POLYMOD_GENERATORS = [
	996825010,
	642813549,
	513874426,
	1027748829,
	705979059
];
function bech32Polymod(pre) {
	const b$2 = pre >> 25;
	let chk = (pre & 33554431) << 5;
	for (let i$1 = 0; i$1 < POLYMOD_GENERATORS.length; i$1++) if ((b$2 >> i$1 & 1) === 1) chk ^= POLYMOD_GENERATORS[i$1];
	return chk;
}
function bechChecksum(prefix, words, encodingConst = 1) {
	const len = prefix.length;
	let chk = 1;
	for (let i$1 = 0; i$1 < len; i$1++) {
		const c$3 = prefix.charCodeAt(i$1);
		if (c$3 < 33 || c$3 > 126) throw new Error(`Invalid prefix (${prefix})`);
		chk = bech32Polymod(chk) ^ c$3 >> 5;
	}
	chk = bech32Polymod(chk);
	for (let i$1 = 0; i$1 < len; i$1++) chk = bech32Polymod(chk) ^ prefix.charCodeAt(i$1) & 31;
	for (let v$5 of words) chk = bech32Polymod(chk) ^ v$5;
	for (let i$1 = 0; i$1 < 6; i$1++) chk = bech32Polymod(chk);
	chk ^= encodingConst;
	return BECH_ALPHABET.encode(convertRadix2([chk % powers[30]], 30, 5, false));
}
function genBech32(encoding) {
	const ENCODING_CONST = encoding === "bech32" ? 1 : 734539939;
	const _words = radix2(5);
	const fromWords = _words.decode;
	const toWords = _words.encode;
	const fromWordsUnsafe = unsafeWrapper(fromWords);
	function encode$5(prefix, words, limit = 90) {
		astr("bech32.encode prefix", prefix);
		if (isBytes(words)) words = Array.from(words);
		anumArr("bech32.encode", words);
		const plen = prefix.length;
		if (plen === 0) throw new TypeError(`Invalid prefix length ${plen}`);
		const actualLength = plen + 7 + words.length;
		if (limit !== false && actualLength > limit) throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
		const lowered = prefix.toLowerCase();
		const sum = bechChecksum(lowered, words, ENCODING_CONST);
		return `${lowered}1${BECH_ALPHABET.encode(words)}${sum}`;
	}
	function decode$6(str, limit = 90) {
		astr("bech32.decode input", str);
		const slen = str.length;
		if (slen < 8 || limit !== false && slen > limit) throw new TypeError(`invalid string length: ${slen} (${str}). Expected (8..${limit})`);
		const lowered = str.toLowerCase();
		if (str !== lowered && str !== str.toUpperCase()) throw new Error(`String must be lowercase or uppercase`);
		const sepIndex = lowered.lastIndexOf("1");
		if (sepIndex === 0 || sepIndex === -1) throw new Error(`Letter "1" must be present between prefix and data only`);
		const prefix = lowered.slice(0, sepIndex);
		const data = lowered.slice(sepIndex + 1);
		if (data.length < 6) throw new Error("Data must be at least 6 characters long");
		const words = BECH_ALPHABET.decode(data).slice(0, -6);
		const sum = bechChecksum(prefix, words, ENCODING_CONST);
		if (!data.endsWith(sum)) throw new Error(`Invalid checksum in ${str}: expected "${sum}"`);
		return {
			prefix,
			words
		};
	}
	const decodeUnsafe = unsafeWrapper(decode$6);
	function decodeToBytes(str) {
		const { prefix, words } = decode$6(str, false);
		return {
			prefix,
			words,
			bytes: fromWords(words)
		};
	}
	function encodeFromBytes(prefix, bytes) {
		return encode$5(prefix, toWords(bytes));
	}
	return {
		encode: encode$5,
		decode: decode$6,
		encodeFromBytes,
		decodeToBytes,
		decodeUnsafe,
		fromWords,
		fromWordsUnsafe,
		toWords
	};
}
genBech32("bech32");
genBech32("bech32m");
/* @__PURE__ */ (() => typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function")() || chain(radix2(4), alphabet$1("0123456789abcdef"), join(""), normalize((s$1) => {
	if (typeof s$1 !== "string" || s$1.length % 2 !== 0) throw new TypeError(`hex.decode: expected string, got ${typeof s$1} with length ${s$1.length}`);
	return s$1.toLowerCase();
}));
var b$1 = { exports: {} };
function se(e$1) {
	try {
		return JSON.stringify(e$1);
	} catch {
		return "\"[Circular]\"";
	}
}
var ie = oe;
function oe(e$1, t, r$2) {
	var s$1 = r$2 && r$2.stringify || se, i$1 = 1;
	if (typeof e$1 == "object" && e$1 !== null) {
		var f$2 = t.length + i$1;
		if (f$2 === 1) return e$1;
		var h$2 = new Array(f$2);
		h$2[0] = s$1(e$1);
		for (var u = 1; u < f$2; u++) h$2[u] = s$1(t[u]);
		return h$2.join(" ");
	}
	if (typeof e$1 != "string") return e$1;
	var c$3 = t.length;
	if (c$3 === 0) return e$1;
	for (var n$2 = "", o$4 = 1 - i$1, l$4 = -1, L$1 = e$1 && e$1.length || 0, a$1 = 0; a$1 < L$1;) {
		if (e$1.charCodeAt(a$1) === 37 && a$1 + 1 < L$1) {
			switch (l$4 = l$4 > -1 ? l$4 : 0, e$1.charCodeAt(a$1 + 1)) {
				case 100:
				case 102:
					if (o$4 >= c$3 || t[o$4] == null) break;
					l$4 < a$1 && (n$2 += e$1.slice(l$4, a$1)), n$2 += Number(t[o$4]), l$4 = a$1 + 2, a$1++;
					break;
				case 105:
					if (o$4 >= c$3 || t[o$4] == null) break;
					l$4 < a$1 && (n$2 += e$1.slice(l$4, a$1)), n$2 += Math.floor(Number(t[o$4])), l$4 = a$1 + 2, a$1++;
					break;
				case 79:
				case 111:
				case 106:
					if (o$4 >= c$3 || t[o$4] === void 0) break;
					l$4 < a$1 && (n$2 += e$1.slice(l$4, a$1));
					var _$1 = typeof t[o$4];
					if (_$1 === "string") {
						n$2 += "'" + t[o$4] + "'", l$4 = a$1 + 2, a$1++;
						break;
					}
					if (_$1 === "function") {
						n$2 += t[o$4].name || "<anonymous>", l$4 = a$1 + 2, a$1++;
						break;
					}
					n$2 += s$1(t[o$4]), l$4 = a$1 + 2, a$1++;
					break;
				case 115:
					if (o$4 >= c$3) break;
					l$4 < a$1 && (n$2 += e$1.slice(l$4, a$1)), n$2 += String(t[o$4]), l$4 = a$1 + 2, a$1++;
					break;
				case 37:
					l$4 < a$1 && (n$2 += e$1.slice(l$4, a$1)), n$2 += "%", l$4 = a$1 + 2, a$1++, o$4--;
					break;
			}
			++o$4;
		}
		++a$1;
	}
	return l$4 === -1 ? e$1 : (l$4 < L$1 && (n$2 += e$1.slice(l$4)), n$2);
}
var G$1 = ie;
b$1.exports = v$4;
var E$2 = Le$1().console || {}, le$1 = {
	mapHttpRequest: T,
	mapHttpResponse: T,
	wrapRequestSerializer: $,
	wrapResponseSerializer: $,
	wrapErrorSerializer: $,
	req: T,
	res: T,
	err: U,
	errWithCause: U
};
function m$3(e$1, t) {
	return e$1 === "silent" ? Infinity : t.levels.values[e$1];
}
var A = Symbol("pino.logFuncs"), P$2 = Symbol("pino.hierarchy"), ae = {
	error: "log",
	fatal: "error",
	warn: "error",
	info: "log",
	debug: "log",
	trace: "log"
};
function R(e$1, t) {
	t[P$2] = {
		logger: t,
		parent: e$1[P$2]
	};
}
function ue(e$1, t, r$2) {
	const s$1 = {};
	t.forEach((i$1) => {
		s$1[i$1] = r$2[i$1] ? r$2[i$1] : E$2[i$1] || E$2[ae[i$1] || "log"] || z$1;
	}), e$1[A] = s$1;
}
function ce(e$1, t) {
	return Array.isArray(e$1) ? e$1.filter(function(s$1) {
		return s$1 !== "!stdSerializers.err";
	}) : e$1 === !0 ? Object.keys(t) : !1;
}
function v$4(e$1) {
	e$1 = e$1 || {}, e$1.browser = e$1.browser || {};
	const t = e$1.browser.transmit;
	if (t && typeof t.send != "function") throw Error("pino: transmit option must have a send function");
	const r$2 = e$1.browser.write || E$2;
	e$1.browser.write && (e$1.browser.asObject = !0);
	const s$1 = e$1.serializers || {}, i$1 = ce(e$1.browser.serialize, s$1);
	let f$2 = e$1.browser.serialize;
	Array.isArray(e$1.browser.serialize) && e$1.browser.serialize.indexOf("!stdSerializers.err") > -1 && (f$2 = !1);
	const h$2 = Object.keys(e$1.customLevels || {}), u = [
		"error",
		"fatal",
		"warn",
		"info",
		"debug",
		"trace"
	].concat(h$2);
	typeof r$2 == "function" && u.forEach(function(g$2) {
		r$2[g$2] = r$2;
	}), (e$1.enabled === !1 || e$1.browser.disabled) && (e$1.level = "silent");
	const c$3 = e$1.level || "info", n$2 = Object.create(r$2);
	n$2.log || (n$2.log = z$1), ue(n$2, u, r$2), R({}, n$2), Object.defineProperty(n$2, "levelVal", { get: l$4 }), Object.defineProperty(n$2, "level", {
		get: L$1,
		set: a$1
	});
	const o$4 = {
		transmit: t,
		serialize: i$1,
		asObject: e$1.browser.asObject,
		asObjectBindingsOnly: e$1.browser.asObjectBindingsOnly,
		formatters: e$1.browser.formatters,
		levels: u,
		timestamp: ye$1(e$1),
		messageKey: e$1.messageKey || "msg",
		onChild: e$1.onChild || z$1
	};
	n$2.levels = fe$1(e$1), n$2.level = c$3, n$2.isLevelEnabled = function(g$2) {
		return this.levels.values[g$2] ? this.levels.values[g$2] >= this.levels.values[this.level] : !1;
	}, n$2.setMaxListeners = n$2.getMaxListeners = n$2.emit = n$2.addListener = n$2.on = n$2.prependListener = n$2.once = n$2.prependOnceListener = n$2.removeListener = n$2.removeAllListeners = n$2.listeners = n$2.listenerCount = n$2.eventNames = n$2.write = n$2.flush = z$1, n$2.serializers = s$1, n$2._serialize = i$1, n$2._stdErrSerialize = f$2, n$2.child = function(...g$2) {
		return _$1.call(this, o$4, ...g$2);
	}, t && (n$2._logEvent = N$2());
	function l$4() {
		return m$3(this.level, this);
	}
	function L$1() {
		return this._level;
	}
	function a$1(g$2) {
		if (g$2 !== "silent" && !this.levels.values[g$2]) throw Error("unknown level " + g$2);
		this._level = g$2, O$2(this, o$4, n$2, "error"), O$2(this, o$4, n$2, "fatal"), O$2(this, o$4, n$2, "warn"), O$2(this, o$4, n$2, "info"), O$2(this, o$4, n$2, "debug"), O$2(this, o$4, n$2, "trace"), h$2.forEach((d$2) => {
			O$2(this, o$4, n$2, d$2);
		});
	}
	function _$1(g$2, d$2, j$2) {
		if (!d$2) throw new Error("missing bindings for child Pino");
		j$2 = j$2 || {}, i$1 && d$2.serializers && (j$2.serializers = d$2.serializers);
		const F = j$2.serializers;
		if (i$1 && F) {
			var C$1 = Object.assign({}, s$1, F), M$1 = e$1.browser.serialize === !0 ? Object.keys(C$1) : i$1;
			delete d$2.serializers, V([d$2], M$1, C$1, this._stdErrSerialize);
		}
		function D$1(I) {
			this._childLevel = (I._childLevel | 0) + 1, this.bindings = d$2, C$1 && (this.serializers = C$1, this._serialize = M$1), t && (this._logEvent = N$2([].concat(I._logEvent.bindings, d$2)));
		}
		D$1.prototype = this;
		const S = new D$1(this);
		return R(this, S), S.child = function(...I) {
			return _$1.call(this, g$2, ...I);
		}, S.level = j$2.level || this.level, g$2.onChild(S), S;
	}
	return n$2;
}
function fe$1(e$1) {
	const t = e$1.customLevels || {};
	return {
		values: Object.assign({}, v$4.levels.values, t),
		labels: Object.assign({}, v$4.levels.labels, he$1(t))
	};
}
function he$1(e$1) {
	const t = {};
	return Object.keys(e$1).forEach(function(r$2) {
		t[e$1[r$2]] = r$2;
	}), t;
}
v$4.levels = {
	values: {
		fatal: 60,
		error: 50,
		warn: 40,
		info: 30,
		debug: 20,
		trace: 10
	},
	labels: {
		10: "trace",
		20: "debug",
		30: "info",
		40: "warn",
		50: "error",
		60: "fatal"
	}
}, v$4.stdSerializers = le$1, v$4.stdTimeFunctions = Object.assign({}, {
	nullTime: X,
	epochTime: Y,
	unixTime: pe$1,
	isoTime: we$1
});
function ge$1(e$1) {
	const t = [];
	e$1.bindings && t.push(e$1.bindings);
	let r$2 = e$1[P$2];
	for (; r$2.parent;) r$2 = r$2.parent, r$2.logger.bindings && t.push(r$2.logger.bindings);
	return t.reverse();
}
function O$2(e$1, t, r$2, s$1) {
	if (Object.defineProperty(e$1, s$1, {
		value: m$3(e$1.level, r$2) > m$3(s$1, r$2) ? z$1 : r$2[A][s$1],
		writable: !0,
		enumerable: !0,
		configurable: !0
	}), e$1[s$1] === z$1) {
		if (!t.transmit) return;
		const h$2 = m$3(t.transmit.level || e$1.level, r$2);
		if (m$3(s$1, r$2) < h$2) return;
	}
	e$1[s$1] = de$1(e$1, t, r$2, s$1);
	const i$1 = ge$1(e$1);
	i$1.length !== 0 && (e$1[s$1] = be$1(i$1, e$1[s$1]));
}
function be$1(e$1, t) {
	return function() {
		return t.apply(this, [...e$1, ...arguments]);
	};
}
function de$1(e$1, t, r$2, s$1) {
	return function(i$1) {
		return function() {
			const h$2 = t.timestamp(), u = new Array(arguments.length), c$3 = Object.getPrototypeOf && Object.getPrototypeOf(this) === E$2 ? E$2 : this;
			for (var n$2 = 0; n$2 < u.length; n$2++) u[n$2] = arguments[n$2];
			var o$4 = !1;
			if (t.serialize && (V(u, this._serialize, this.serializers, this._stdErrSerialize), o$4 = !0), t.asObject || t.formatters ? i$1.call(c$3, ...ve$1(this, s$1, u, h$2, t)) : i$1.apply(c$3, u), t.transmit) {
				const l$4 = t.transmit.level || e$1._level, L$1 = m$3(l$4, r$2), a$1 = m$3(s$1, r$2);
				if (a$1 < L$1) return;
				me$1(this, {
					ts: h$2,
					methodLevel: s$1,
					methodValue: a$1,
					transmitLevel: l$4,
					transmitValue: r$2.levels.values[t.transmit.level || e$1._level],
					send: t.transmit.send,
					val: m$3(e$1._level, r$2)
				}, u, o$4);
			}
		};
	}(e$1[A][s$1]);
}
function ve$1(e$1, t, r$2, s$1, i$1) {
	const { level: f$2, log: h$2 = (l$4) => l$4 } = i$1.formatters || {}, u = r$2.slice();
	let c$3 = u[0];
	const n$2 = {};
	let o$4 = (e$1._childLevel | 0) + 1;
	if (o$4 < 1 && (o$4 = 1), s$1 && (n$2.time = s$1), f$2) {
		const l$4 = f$2(t, e$1.levels.values[t]);
		Object.assign(n$2, l$4);
	} else n$2.level = e$1.levels.values[t];
	if (i$1.asObjectBindingsOnly) {
		if (c$3 !== null && typeof c$3 == "object") for (; o$4-- && typeof u[0] == "object";) Object.assign(n$2, u.shift());
		return [h$2(n$2), ...u];
	} else {
		if (c$3 !== null && typeof c$3 == "object") {
			for (; o$4-- && typeof u[0] == "object";) Object.assign(n$2, u.shift());
			c$3 = u.length ? G$1(u.shift(), u) : void 0;
		} else typeof c$3 == "string" && (c$3 = G$1(u.shift(), u));
		return c$3 !== void 0 && (n$2[i$1.messageKey] = c$3), [h$2(n$2)];
	}
}
function V(e$1, t, r$2, s$1) {
	for (const i$1 in e$1) if (s$1 && e$1[i$1] instanceof Error) e$1[i$1] = v$4.stdSerializers.err(e$1[i$1]);
	else if (typeof e$1[i$1] == "object" && !Array.isArray(e$1[i$1]) && t) for (const f$2 in e$1[i$1]) t.indexOf(f$2) > -1 && f$2 in r$2 && (e$1[i$1][f$2] = r$2[f$2](e$1[i$1][f$2]));
}
function me$1(e$1, t, r$2, s$1 = !1) {
	const i$1 = t.send, f$2 = t.ts, h$2 = t.methodLevel, u = t.methodValue, c$3 = t.val, n$2 = e$1._logEvent.bindings;
	s$1 || V(r$2, e$1._serialize || Object.keys(e$1.serializers), e$1.serializers, e$1._stdErrSerialize === void 0 ? !0 : e$1._stdErrSerialize), e$1._logEvent.ts = f$2, e$1._logEvent.messages = r$2.filter(function(o$4) {
		return n$2.indexOf(o$4) === -1;
	}), e$1._logEvent.level.label = h$2, e$1._logEvent.level.value = u, i$1(h$2, e$1._logEvent, c$3), e$1._logEvent = N$2(n$2);
}
function N$2(e$1) {
	return {
		ts: 0,
		messages: [],
		bindings: e$1 || [],
		level: {
			label: "",
			value: 0
		}
	};
}
function U(e$1) {
	const t = {
		type: e$1.constructor.name,
		msg: e$1.message,
		stack: e$1.stack
	};
	for (const r$2 in e$1) t[r$2] === void 0 && (t[r$2] = e$1[r$2]);
	return t;
}
function ye$1(e$1) {
	return typeof e$1.timestamp == "function" ? e$1.timestamp : e$1.timestamp === !1 ? X : Y;
}
function T() {
	return {};
}
function $(e$1) {
	return e$1;
}
function z$1() {}
function X() {
	return !1;
}
function Y() {
	return Date.now();
}
function pe$1() {
	return Math.round(Date.now() / 1e3);
}
function we$1() {
	return new Date(Date.now()).toISOString();
}
function Le$1() {
	function e$1(t) {
		return typeof t < "u" && t;
	}
	try {
		return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
			get: function() {
				return delete Object.prototype.globalThis, this.globalThis = this;
			},
			configurable: !0
		}), globalThis;
	} catch {
		return e$1(self) || e$1(window) || e$1(this) || {};
	}
}
b$1.exports.default = v$4;
b$1.exports.pino = v$4;
var Z = { level: "info" }, k$2 = "custom_context", x$2 = 1e3 * 1024;
var ze$1 = Object.defineProperty, _e$1 = (e$1, t, r$2) => t in e$1 ? ze$1(e$1, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: r$2
}) : e$1[t] = r$2, y$1 = (e$1, t, r$2) => _e$1(e$1, typeof t != "symbol" ? t + "" : t, r$2);
var je$1 = class {
	constructor(t) {
		y$1(this, "nodeValue"), y$1(this, "sizeInBytes"), y$1(this, "next"), this.nodeValue = t, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
	}
	get value() {
		return this.nodeValue;
	}
	get size() {
		return this.sizeInBytes;
	}
};
var q = class {
	constructor(t) {
		y$1(this, "lengthInNodes"), y$1(this, "sizeInBytes"), y$1(this, "head"), y$1(this, "tail"), y$1(this, "maxSizeInBytes"), this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = t, this.sizeInBytes = 0;
	}
	append(t) {
		const r$2 = new je$1(t);
		if (r$2.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${t} with size ${r$2.size}`);
		for (; this.size + r$2.size > this.maxSizeInBytes;) this.shift();
		this.head ? (this.tail && (this.tail.next = r$2), this.tail = r$2) : (this.head = r$2, this.tail = r$2), this.lengthInNodes++, this.sizeInBytes += r$2.size;
	}
	shift() {
		if (!this.head) return;
		const t = this.head;
		this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= t.size;
	}
	toArray() {
		const t = [];
		let r$2 = this.head;
		for (; r$2 !== null;) t.push(r$2.value), r$2 = r$2.next;
		return t;
	}
	get length() {
		return this.lengthInNodes;
	}
	get size() {
		return this.sizeInBytes;
	}
	toOrderedArray() {
		return Array.from(this);
	}
	[Symbol.iterator]() {
		let t = this.head;
		return { next: () => {
			if (!t) return {
				done: !0,
				value: null
			};
			const r$2 = t.value;
			return t = t.next, {
				done: !1,
				value: r$2
			};
		} };
	}
};
var Se$1 = (e$1) => JSON.stringify(e$1, (t, r$2) => typeof r$2 == "bigint" ? r$2.toString() + "n" : r$2);
function K$2(e$1) {
	return typeof e$1 == "string" ? e$1 : Se$1(e$1) || "";
}
var Ee$1 = Object.defineProperty, ke$1 = (e$1, t, r$2) => t in e$1 ? Ee$1(e$1, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: r$2
}) : e$1[t] = r$2, B = (e$1, t, r$2) => ke$1(e$1, typeof t != "symbol" ? t + "" : t, r$2);
var J$1 = class {
	constructor(t, r$2 = x$2) {
		B(this, "logs"), B(this, "level"), B(this, "levelValue"), B(this, "MAX_LOG_SIZE_IN_BYTES"), this.level = t ?? "error", this.levelValue = b$1.exports.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = r$2, this.logs = new q(this.MAX_LOG_SIZE_IN_BYTES);
	}
	forwardToConsole(t, r$2) {
		r$2 === b$1.exports.levels.values.error ? console.error(t) : r$2 === b$1.exports.levels.values.warn ? console.warn(t) : r$2 === b$1.exports.levels.values.debug ? console.debug(t) : r$2 === b$1.exports.levels.values.trace ? console.trace(t) : console.log(t);
	}
	appendToLogs(t) {
		this.logs.append(K$2({
			timestamp: (/* @__PURE__ */ new Date()).toISOString(),
			log: t
		}));
		const r$2 = typeof t == "string" ? JSON.parse(t).level : t.level;
		r$2 >= this.levelValue && this.forwardToConsole(t, r$2);
	}
	getLogs() {
		return this.logs;
	}
	clearLogs() {
		this.logs = new q(this.MAX_LOG_SIZE_IN_BYTES);
	}
	getLogArray() {
		return Array.from(this.logs);
	}
	logsToBlob(t) {
		const r$2 = this.getLogArray();
		return r$2.push(K$2({ extraMetadata: t })), new Blob(r$2, { type: "application/json" });
	}
};
var Ce$1 = Object.defineProperty, Ie$1 = (e$1, t, r$2) => t in e$1 ? Ce$1(e$1, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: r$2
}) : e$1[t] = r$2, Te$1 = (e$1, t, r$2) => Ie$1(e$1, typeof t != "symbol" ? t + "" : t, r$2);
var xe$1 = class {
	constructor(t, r$2 = x$2) {
		Te$1(this, "baseChunkLogger"), this.baseChunkLogger = new J$1(t, r$2);
	}
	write(t) {
		this.baseChunkLogger.appendToLogs(t);
	}
	getLogs() {
		return this.baseChunkLogger.getLogs();
	}
	clearLogs() {
		this.baseChunkLogger.clearLogs();
	}
	getLogArray() {
		return this.baseChunkLogger.getLogArray();
	}
	logsToBlob(t) {
		return this.baseChunkLogger.logsToBlob(t);
	}
	downloadLogsBlobInBrowser(t) {
		const r$2 = URL.createObjectURL(this.logsToBlob(t)), s$1 = document.createElement("a");
		s$1.href = r$2, s$1.download = `walletconnect-logs-${(/* @__PURE__ */ new Date()).toISOString()}.txt`, document.body.appendChild(s$1), s$1.click(), document.body.removeChild(s$1), URL.revokeObjectURL(r$2);
	}
};
var Be$1 = Object.defineProperty, Ae$1 = (e$1, t, r$2) => t in e$1 ? Be$1(e$1, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: r$2
}) : e$1[t] = r$2, Pe$1 = (e$1, t, r$2) => Ae$1(e$1, typeof t != "symbol" ? t + "" : t, r$2);
var Ve$1 = class {
	constructor(t, r$2 = x$2) {
		Pe$1(this, "baseChunkLogger"), this.baseChunkLogger = new J$1(t, r$2);
	}
	write(t) {
		this.baseChunkLogger.appendToLogs(t);
	}
	getLogs() {
		return this.baseChunkLogger.getLogs();
	}
	clearLogs() {
		this.baseChunkLogger.clearLogs();
	}
	getLogArray() {
		return this.baseChunkLogger.getLogArray();
	}
	logsToBlob(t) {
		return this.baseChunkLogger.logsToBlob(t);
	}
};
var Ne$1 = Object.defineProperty, $e$1 = Object.defineProperties, Fe$1 = Object.getOwnPropertyDescriptors, H$1 = Object.getOwnPropertySymbols, Me$1 = Object.prototype.hasOwnProperty, De$1 = Object.prototype.propertyIsEnumerable, W$1 = (e$1, t, r$2) => t in e$1 ? Ne$1(e$1, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: r$2
}) : e$1[t] = r$2, p$1 = (e$1, t) => {
	for (var r$2 in t || (t = {})) Me$1.call(t, r$2) && W$1(e$1, r$2, t[r$2]);
	if (H$1) for (var r$2 of H$1(t)) De$1.call(t, r$2) && W$1(e$1, r$2, t[r$2]);
	return e$1;
}, w$2 = (e$1, t) => $e$1(e$1, Fe$1(t));
function Ge$1(e$1) {
	return w$2(p$1({}, e$1), { level: e$1?.level || Z.level });
}
function Q$1(e$1, t, r$2 = k$2) {
	return e$1[r$2] = t, e$1;
}
function ee(e$1, t = k$2) {
	return e$1[t] || "";
}
function te$1(e$1, t, r$2 = k$2) {
	const s$1 = ee(e$1, r$2);
	return s$1.trim() ? `${s$1}/${t}` : t;
}
function Re$1(e$1, t, r$2 = k$2) {
	const s$1 = te$1(e$1, t, r$2);
	return Q$1(e$1.child({ context: s$1 }), s$1, r$2);
}
function re(e$1) {
	var t, r$2;
	const s$1 = new xe$1((t = e$1.opts) == null ? void 0 : t.level, e$1.maxSizeInBytes);
	return {
		logger: b$1.exports(w$2(p$1({}, e$1.opts), {
			level: "trace",
			browser: w$2(p$1({}, (r$2 = e$1.opts) == null ? void 0 : r$2.browser), { write: (i$1) => s$1.write(i$1) })
		})),
		chunkLoggerController: s$1
	};
}
function ne(e$1) {
	var t, r$2;
	const s$1 = new Ve$1((t = e$1.opts) == null ? void 0 : t.level, e$1.maxSizeInBytes);
	return {
		logger: b$1.exports(w$2(p$1({}, e$1.opts), {
			level: "trace",
			browser: w$2(p$1({}, (r$2 = e$1.opts) == null ? void 0 : r$2.browser), { write: (i$1) => s$1.write(i$1) })
		}), s$1),
		chunkLoggerController: s$1
	};
}
function Ue$1(e$1) {
	var t;
	if (typeof e$1.loggerOverride < "u" && typeof e$1.loggerOverride != "string") return {
		logger: e$1.loggerOverride,
		chunkLoggerController: null
	};
	const r$2 = w$2(p$1({}, e$1.opts), { level: typeof e$1.loggerOverride == "string" ? e$1.loggerOverride : (t = e$1.opts) == null ? void 0 : t.level });
	return typeof window < "u" ? re(w$2(p$1({}, e$1), { opts: r$2 })) : ne(w$2(p$1({}, e$1), { opts: r$2 }));
}
var tslib_es6_exports$1 = /* @__PURE__ */ __export({
	__assign: () => __assign$1,
	__asyncDelegator: () => __asyncDelegator$1,
	__asyncGenerator: () => __asyncGenerator$1,
	__asyncValues: () => __asyncValues$1,
	__await: () => __await$1,
	__awaiter: () => __awaiter$1,
	__classPrivateFieldGet: () => __classPrivateFieldGet$1,
	__classPrivateFieldSet: () => __classPrivateFieldSet$1,
	__createBinding: () => __createBinding$1,
	__decorate: () => __decorate$1,
	__exportStar: () => __exportStar$1,
	__extends: () => __extends$1,
	__generator: () => __generator$1,
	__importDefault: () => __importDefault$1,
	__importStar: () => __importStar$1,
	__makeTemplateObject: () => __makeTemplateObject$1,
	__metadata: () => __metadata$1,
	__param: () => __param$1,
	__read: () => __read$1,
	__rest: () => __rest$1,
	__spread: () => __spread$1,
	__spreadArrays: () => __spreadArrays$1,
	__values: () => __values$1
});
function __extends$1(d$2, b$2) {
	extendStatics$1(d$2, b$2);
	function __() {
		this.constructor = d$2;
	}
	d$2.prototype = b$2 === null ? Object.create(b$2) : (__.prototype = b$2.prototype, new __());
}
function __rest$1(s$1, e$1) {
	var t = {};
	for (var p$2 in s$1) if (Object.prototype.hasOwnProperty.call(s$1, p$2) && e$1.indexOf(p$2) < 0) t[p$2] = s$1[p$2];
	if (s$1 != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i$1 = 0, p$2 = Object.getOwnPropertySymbols(s$1); i$1 < p$2.length; i$1++) if (e$1.indexOf(p$2[i$1]) < 0 && Object.prototype.propertyIsEnumerable.call(s$1, p$2[i$1])) t[p$2[i$1]] = s$1[p$2[i$1]];
	}
	return t;
}
function __decorate$1(decorators, target, key, desc) {
	var c$3 = arguments.length, r$2 = c$3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$2;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$2 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$1 = decorators.length - 1; i$1 >= 0; i$1--) if (d$2 = decorators[i$1]) r$2 = (c$3 < 3 ? d$2(r$2) : c$3 > 3 ? d$2(target, key, r$2) : d$2(target, key)) || r$2;
	return c$3 > 3 && r$2 && Object.defineProperty(target, key, r$2), r$2;
}
function __param$1(paramIndex, decorator) {
	return function(target, key) {
		decorator(target, key, paramIndex);
	};
}
function __metadata$1(metadataKey, metadataValue) {
	if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter$1(thisArg, _arguments, P$3, generator) {
	function adopt(value) {
		return value instanceof P$3 ? value : new P$3(function(resolve) {
			resolve(value);
		});
	}
	return new (P$3 || (P$3 = Promise))(function(resolve, reject) {
		function fulfilled(value) {
			try {
				step(generator.next(value));
			} catch (e$1) {
				reject(e$1);
			}
		}
		function rejected(value) {
			try {
				step(generator["throw"](value));
			} catch (e$1) {
				reject(e$1);
			}
		}
		function step(result) {
			result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
		}
		step((generator = generator.apply(thisArg, _arguments || [])).next());
	});
}
function __generator$1(thisArg, body) {
	var _$1 = {
		label: 0,
		sent: function() {
			if (t[0] & 1) throw t[1];
			return t[1];
		},
		trys: [],
		ops: []
	}, f$2, y$2, t, g$2;
	return g$2 = {
		next: verb(0),
		"throw": verb(1),
		"return": verb(2)
	}, typeof Symbol === "function" && (g$2[Symbol.iterator] = function() {
		return this;
	}), g$2;
	function verb(n$2) {
		return function(v$5) {
			return step([n$2, v$5]);
		};
	}
	function step(op) {
		if (f$2) throw new TypeError("Generator is already executing.");
		while (_$1) try {
			if (f$2 = 1, y$2 && (t = op[0] & 2 ? y$2["return"] : op[0] ? y$2["throw"] || ((t = y$2["return"]) && t.call(y$2), 0) : y$2.next) && !(t = t.call(y$2, op[1])).done) return t;
			if (y$2 = 0, t) op = [op[0] & 2, t.value];
			switch (op[0]) {
				case 0:
				case 1:
					t = op;
					break;
				case 4:
					_$1.label++;
					return {
						value: op[1],
						done: false
					};
				case 5:
					_$1.label++;
					y$2 = op[1];
					op = [0];
					continue;
				case 7:
					op = _$1.ops.pop();
					_$1.trys.pop();
					continue;
				default:
					if (!(t = _$1.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
						_$1 = 0;
						continue;
					}
					if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
						_$1.label = op[1];
						break;
					}
					if (op[0] === 6 && _$1.label < t[1]) {
						_$1.label = t[1];
						t = op;
						break;
					}
					if (t && _$1.label < t[2]) {
						_$1.label = t[2];
						_$1.ops.push(op);
						break;
					}
					if (t[2]) _$1.ops.pop();
					_$1.trys.pop();
					continue;
			}
			op = body.call(thisArg, _$1);
		} catch (e$1) {
			op = [6, e$1];
			y$2 = 0;
		} finally {
			f$2 = t = 0;
		}
		if (op[0] & 5) throw op[1];
		return {
			value: op[0] ? op[1] : void 0,
			done: true
		};
	}
}
function __createBinding$1(o$4, m$4, k$3, k2) {
	if (k2 === void 0) k2 = k$3;
	o$4[k2] = m$4[k$3];
}
function __exportStar$1(m$4, exports$1) {
	for (var p$2 in m$4) if (p$2 !== "default" && !exports$1.hasOwnProperty(p$2)) exports$1[p$2] = m$4[p$2];
}
function __values$1(o$4) {
	var s$1 = typeof Symbol === "function" && Symbol.iterator, m$4 = s$1 && o$4[s$1], i$1 = 0;
	if (m$4) return m$4.call(o$4);
	if (o$4 && typeof o$4.length === "number") return { next: function() {
		if (o$4 && i$1 >= o$4.length) o$4 = void 0;
		return {
			value: o$4 && o$4[i$1++],
			done: !o$4
		};
	} };
	throw new TypeError(s$1 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read$1(o$4, n$2) {
	var m$4 = typeof Symbol === "function" && o$4[Symbol.iterator];
	if (!m$4) return o$4;
	var i$1 = m$4.call(o$4), r$2, ar$1 = [], e$1;
	try {
		while ((n$2 === void 0 || n$2-- > 0) && !(r$2 = i$1.next()).done) ar$1.push(r$2.value);
	} catch (error) {
		e$1 = { error };
	} finally {
		try {
			if (r$2 && !r$2.done && (m$4 = i$1["return"])) m$4.call(i$1);
		} finally {
			if (e$1) throw e$1.error;
		}
	}
	return ar$1;
}
function __spread$1() {
	for (var ar$1 = [], i$1 = 0; i$1 < arguments.length; i$1++) ar$1 = ar$1.concat(__read$1(arguments[i$1]));
	return ar$1;
}
function __spreadArrays$1() {
	for (var s$1 = 0, i$1 = 0, il = arguments.length; i$1 < il; i$1++) s$1 += arguments[i$1].length;
	for (var r$2 = Array(s$1), k$3 = 0, i$1 = 0; i$1 < il; i$1++) for (var a$1 = arguments[i$1], j$2 = 0, jl = a$1.length; j$2 < jl; j$2++, k$3++) r$2[k$3] = a$1[j$2];
	return r$2;
}
function __await$1(v$5) {
	return this instanceof __await$1 ? (this.v = v$5, this) : new __await$1(v$5);
}
function __asyncGenerator$1(thisArg, _arguments, generator) {
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var g$2 = generator.apply(thisArg, _arguments || []), i$1, q$1 = [];
	return i$1 = {}, verb("next"), verb("throw"), verb("return"), i$1[Symbol.asyncIterator] = function() {
		return this;
	}, i$1;
	function verb(n$2) {
		if (g$2[n$2]) i$1[n$2] = function(v$5) {
			return new Promise(function(a$1, b$2) {
				q$1.push([
					n$2,
					v$5,
					a$1,
					b$2
				]) > 1 || resume(n$2, v$5);
			});
		};
	}
	function resume(n$2, v$5) {
		try {
			step(g$2[n$2](v$5));
		} catch (e$1) {
			settle(q$1[0][3], e$1);
		}
	}
	function step(r$2) {
		r$2.value instanceof __await$1 ? Promise.resolve(r$2.value.v).then(fulfill, reject) : settle(q$1[0][2], r$2);
	}
	function fulfill(value) {
		resume("next", value);
	}
	function reject(value) {
		resume("throw", value);
	}
	function settle(f$2, v$5) {
		if (f$2(v$5), q$1.shift(), q$1.length) resume(q$1[0][0], q$1[0][1]);
	}
}
function __asyncDelegator$1(o$4) {
	var i$1, p$2;
	return i$1 = {}, verb("next"), verb("throw", function(e$1) {
		throw e$1;
	}), verb("return"), i$1[Symbol.iterator] = function() {
		return this;
	}, i$1;
	function verb(n$2, f$2) {
		i$1[n$2] = o$4[n$2] ? function(v$5) {
			return (p$2 = !p$2) ? {
				value: __await$1(o$4[n$2](v$5)),
				done: n$2 === "return"
			} : f$2 ? f$2(v$5) : v$5;
		} : f$2;
	}
}
function __asyncValues$1(o$4) {
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var m$4 = o$4[Symbol.asyncIterator], i$1;
	return m$4 ? m$4.call(o$4) : (o$4 = typeof __values$1 === "function" ? __values$1(o$4) : o$4[Symbol.iterator](), i$1 = {}, verb("next"), verb("throw"), verb("return"), i$1[Symbol.asyncIterator] = function() {
		return this;
	}, i$1);
	function verb(n$2) {
		i$1[n$2] = o$4[n$2] && function(v$5) {
			return new Promise(function(resolve, reject) {
				v$5 = o$4[n$2](v$5), settle(resolve, reject, v$5.done, v$5.value);
			});
		};
	}
	function settle(resolve, reject, d$2, v$5) {
		Promise.resolve(v$5).then(function(v$6) {
			resolve({
				value: v$6,
				done: d$2
			});
		}, reject);
	}
}
function __makeTemplateObject$1(cooked, raw) {
	if (Object.defineProperty) Object.defineProperty(cooked, "raw", { value: raw });
	else cooked.raw = raw;
	return cooked;
}
function __importStar$1(mod) {
	if (mod && mod.__esModule) return mod;
	var result = {};
	if (mod != null) {
		for (var k$3 in mod) if (Object.hasOwnProperty.call(mod, k$3)) result[k$3] = mod[k$3];
	}
	result.default = mod;
	return result;
}
function __importDefault$1(mod) {
	return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet$1(receiver, privateMap) {
	if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
	return privateMap.get(receiver);
}
function __classPrivateFieldSet$1(receiver, privateMap, value) {
	if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
	privateMap.set(receiver, value);
	return value;
}
var extendStatics$1, __assign$1;
var init_tslib_es6$1 = __esmMin((() => {
	extendStatics$1 = function(d$2, b$2) {
		extendStatics$1 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d$3, b$3) {
			d$3.__proto__ = b$3;
		} || function(d$3, b$3) {
			for (var p$2 in b$3) if (b$3.hasOwnProperty(p$2)) d$3[p$2] = b$3[p$2];
		};
		return extendStatics$1(d$2, b$2);
	};
	__assign$1 = function() {
		__assign$1 = Object.assign || function __assign$2(t) {
			for (var s$1, i$1 = 1, n$2 = arguments.length; i$1 < n$2; i$1++) {
				s$1 = arguments[i$1];
				for (var p$2 in s$1) if (Object.prototype.hasOwnProperty.call(s$1, p$2)) t[p$2] = s$1[p$2];
			}
			return t;
		};
		return __assign$1.apply(this, arguments);
	};
}));
var require_delay = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.delay = void 0;
	function delay(timeout) {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(true);
			}, timeout);
		});
	}
	exports.delay = delay;
}));
var require_misc = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ONE_THOUSAND = exports.ONE_HUNDRED = void 0;
	exports.ONE_HUNDRED = 100;
	exports.ONE_THOUSAND = 1e3;
}));
var require_time = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ONE_YEAR = exports.FOUR_WEEKS = exports.THREE_WEEKS = exports.TWO_WEEKS = exports.ONE_WEEK = exports.THIRTY_DAYS = exports.SEVEN_DAYS = exports.FIVE_DAYS = exports.THREE_DAYS = exports.ONE_DAY = exports.TWENTY_FOUR_HOURS = exports.TWELVE_HOURS = exports.SIX_HOURS = exports.THREE_HOURS = exports.ONE_HOUR = exports.SIXTY_MINUTES = exports.THIRTY_MINUTES = exports.TEN_MINUTES = exports.FIVE_MINUTES = exports.ONE_MINUTE = exports.SIXTY_SECONDS = exports.THIRTY_SECONDS = exports.TEN_SECONDS = exports.FIVE_SECONDS = exports.ONE_SECOND = void 0;
	exports.ONE_SECOND = 1;
	exports.FIVE_SECONDS = 5;
	exports.TEN_SECONDS = 10;
	exports.THIRTY_SECONDS = 30;
	exports.SIXTY_SECONDS = 60;
	exports.ONE_MINUTE = exports.SIXTY_SECONDS;
	exports.FIVE_MINUTES = exports.ONE_MINUTE * 5;
	exports.TEN_MINUTES = exports.ONE_MINUTE * 10;
	exports.THIRTY_MINUTES = exports.ONE_MINUTE * 30;
	exports.SIXTY_MINUTES = exports.ONE_MINUTE * 60;
	exports.ONE_HOUR = exports.SIXTY_MINUTES;
	exports.THREE_HOURS = exports.ONE_HOUR * 3;
	exports.SIX_HOURS = exports.ONE_HOUR * 6;
	exports.TWELVE_HOURS = exports.ONE_HOUR * 12;
	exports.TWENTY_FOUR_HOURS = exports.ONE_HOUR * 24;
	exports.ONE_DAY = exports.TWENTY_FOUR_HOURS;
	exports.THREE_DAYS = exports.ONE_DAY * 3;
	exports.FIVE_DAYS = exports.ONE_DAY * 5;
	exports.SEVEN_DAYS = exports.ONE_DAY * 7;
	exports.THIRTY_DAYS = exports.ONE_DAY * 30;
	exports.ONE_WEEK = exports.SEVEN_DAYS;
	exports.TWO_WEEKS = exports.ONE_WEEK * 2;
	exports.THREE_WEEKS = exports.ONE_WEEK * 3;
	exports.FOUR_WEEKS = exports.ONE_WEEK * 4;
	exports.ONE_YEAR = exports.ONE_DAY * 365;
}));
var require_constants = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1$3 = (init_tslib_es6$1(), __toCommonJS(tslib_es6_exports$1));
	tslib_1$3.__exportStar(require_misc(), exports);
	tslib_1$3.__exportStar(require_time(), exports);
}));
var require_convert = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.fromMiliseconds = exports.toMiliseconds = void 0;
	var constants_1 = require_constants();
	function toMiliseconds(seconds) {
		return seconds * constants_1.ONE_THOUSAND;
	}
	exports.toMiliseconds = toMiliseconds;
	function fromMiliseconds(miliseconds) {
		return Math.floor(miliseconds / constants_1.ONE_THOUSAND);
	}
	exports.fromMiliseconds = fromMiliseconds;
}));
var require_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1$2 = (init_tslib_es6$1(), __toCommonJS(tslib_es6_exports$1));
	tslib_1$2.__exportStar(require_delay(), exports);
	tslib_1$2.__exportStar(require_convert(), exports);
}));
var require_watch$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Watch = void 0;
	var Watch = class {
		constructor() {
			this.timestamps = /* @__PURE__ */ new Map();
		}
		start(label) {
			if (this.timestamps.has(label)) throw new Error(`Watch already started for label: ${label}`);
			this.timestamps.set(label, { started: Date.now() });
		}
		stop(label) {
			const timestamp = this.get(label);
			if (typeof timestamp.elapsed !== "undefined") throw new Error(`Watch already stopped for label: ${label}`);
			const elapsed = Date.now() - timestamp.started;
			this.timestamps.set(label, {
				started: timestamp.started,
				elapsed
			});
		}
		get(label) {
			const timestamp = this.timestamps.get(label);
			if (typeof timestamp === "undefined") throw new Error(`No timestamp found for label: ${label}`);
			return timestamp;
		}
		elapsed(label) {
			const timestamp = this.get(label);
			return timestamp.elapsed || Date.now() - timestamp.started;
		}
	};
	exports.Watch = Watch;
	exports.default = Watch;
}));
var require_watch = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.IWatch = void 0;
	var IWatch = class {};
	exports.IWatch = IWatch;
}));
var require_types = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	(init_tslib_es6$1(), __toCommonJS(tslib_es6_exports$1)).__exportStar(require_watch(), exports);
}));
var require_cjs$3 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1$1 = (init_tslib_es6$1(), __toCommonJS(tslib_es6_exports$1));
	tslib_1$1.__exportStar(require_utils(), exports);
	tslib_1$1.__exportStar(require_watch$1(), exports);
	tslib_1$1.__exportStar(require_types(), exports);
	tslib_1$1.__exportStar(require_constants(), exports);
}));
var IEvents = class {};
var import_events$3 = require_events();
var import_cjs$2 = require_cjs$3();
var n$1 = class extends IEvents {
	constructor(e$1) {
		super();
	}
};
var s = import_cjs$2.FIVE_SECONDS, r$1 = { pulse: "heartbeat_pulse" };
var i = class i extends n$1 {
	constructor(e$1) {
		super(e$1), this.events = new import_events$3.EventEmitter(), this.interval = s, this.interval = e$1?.interval || s;
	}
	static async init(e$1) {
		const t = new i(e$1);
		return await t.init(), t;
	}
	async init() {
		await this.initialize();
	}
	stop() {
		clearInterval(this.intervalRef);
	}
	on(e$1, t) {
		this.events.on(e$1, t);
	}
	once(e$1, t) {
		this.events.once(e$1, t);
	}
	off(e$1, t) {
		this.events.off(e$1, t);
	}
	removeListener(e$1, t) {
		this.events.removeListener(e$1, t);
	}
	async initialize() {
		this.intervalRef = setInterval(() => this.pulse(), (0, import_cjs$2.toMiliseconds)(this.interval));
	}
	pulse() {
		this.events.emit(r$1.pulse);
	}
};
var suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
var JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
	if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
		warnKeyDropped(key);
		return;
	}
	return value;
}
function warnKeyDropped(key) {
	console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
	if (typeof value !== "string") return value;
	if (value[0] === "\"" && value[value.length - 1] === "\"" && value.indexOf("\\") === -1) return value.slice(1, -1);
	const _value = value.trim();
	if (_value.length <= 9) switch (_value.toLowerCase()) {
		case "true": return true;
		case "false": return false;
		case "undefined": return;
		case "null": return null;
		case "nan": return NaN;
		case "infinity": return Number.POSITIVE_INFINITY;
		case "-infinity": return Number.NEGATIVE_INFINITY;
	}
	if (!JsonSigRx.test(value)) {
		if (options.strict) throw new SyntaxError("[destr] Invalid JSON");
		return value;
	}
	try {
		if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
			if (options.strict) throw new Error("[destr] Possible prototype pollution");
			return JSON.parse(value, jsonParseTransform);
		}
		return JSON.parse(value);
	} catch (error) {
		if (options.strict) throw error;
		return value;
	}
}
function wrapToPromise(value) {
	if (!value || typeof value.then !== "function") return Promise.resolve(value);
	return value;
}
function asyncCall(function_, ...arguments_) {
	try {
		return wrapToPromise(function_(...arguments_));
	} catch (error) {
		return Promise.reject(error);
	}
}
function isPrimitive(value) {
	const type = typeof value;
	return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
	const proto = Object.getPrototypeOf(value);
	return !proto || proto.isPrototypeOf(Object);
}
function stringify$1(value) {
	if (isPrimitive(value)) return String(value);
	if (isPureObject(value) || Array.isArray(value)) return JSON.stringify(value);
	if (typeof value.toJSON === "function") return stringify$1(value.toJSON());
	throw new Error("[unstorage] Cannot stringify value!");
}
var BASE64_PREFIX = "base64:";
function serializeRaw(value) {
	if (typeof value === "string") return value;
	return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
	if (typeof value !== "string") return value;
	if (!value.startsWith(BASE64_PREFIX)) return value;
	return base64Decode(value.slice(7));
}
function base64Decode(input) {
	if (globalThis.Buffer) return Buffer.from(input, "base64");
	return Uint8Array.from(globalThis.atob(input), (c$3) => c$3.codePointAt(0));
}
function base64Encode(input) {
	if (globalThis.Buffer) return Buffer.from(input).toString("base64");
	return globalThis.btoa(String.fromCodePoint(...input));
}
function normalizeKey(key) {
	if (!key) return "";
	return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys$1) {
	return normalizeKey(keys$1.join(":"));
}
function normalizeBaseKey(base$2) {
	base$2 = normalizeKey(base$2);
	return base$2 ? base$2 + ":" : "";
}
function filterKeyByDepth(key, depth) {
	if (depth === void 0) return true;
	let substrCount = 0;
	let index = key.indexOf(":");
	while (index > -1) {
		substrCount++;
		index = key.indexOf(":", index + 1);
	}
	return substrCount <= depth;
}
function filterKeyByBase(key, base$2) {
	if (base$2) return key.startsWith(base$2) && key[key.length - 1] !== "$";
	return key[key.length - 1] !== "$";
}
function defineDriver(factory) {
	return factory;
}
var DRIVER_NAME = "memory";
var memory = defineDriver(() => {
	const data = /* @__PURE__ */ new Map();
	return {
		name: DRIVER_NAME,
		getInstance: () => data,
		hasItem(key) {
			return data.has(key);
		},
		getItem(key) {
			return data.get(key) ?? null;
		},
		getItemRaw(key) {
			return data.get(key) ?? null;
		},
		setItem(key, value) {
			data.set(key, value);
		},
		setItemRaw(key, value) {
			data.set(key, value);
		},
		removeItem(key) {
			data.delete(key);
		},
		getKeys() {
			return [...data.keys()];
		},
		clear() {
			data.clear();
		},
		dispose() {
			data.clear();
		}
	};
});
function createStorage(options = {}) {
	const context = {
		mounts: { "": options.driver || memory() },
		mountpoints: [""],
		watching: false,
		watchListeners: [],
		unwatch: {}
	};
	const getMount = (key) => {
		for (const base$2 of context.mountpoints) if (key.startsWith(base$2)) return {
			base: base$2,
			relativeKey: key.slice(base$2.length),
			driver: context.mounts[base$2]
		};
		return {
			base: "",
			relativeKey: key,
			driver: context.mounts[""]
		};
	};
	const getMounts = (base$2, includeParent) => {
		return context.mountpoints.filter((mountpoint) => mountpoint.startsWith(base$2) || includeParent && base$2.startsWith(mountpoint)).map((mountpoint) => ({
			relativeBase: base$2.length > mountpoint.length ? base$2.slice(mountpoint.length) : void 0,
			mountpoint,
			driver: context.mounts[mountpoint]
		}));
	};
	const onChange = (event, key) => {
		if (!context.watching) return;
		key = normalizeKey(key);
		for (const listener of context.watchListeners) listener(event, key);
	};
	const startWatch = async () => {
		if (context.watching) return;
		context.watching = true;
		for (const mountpoint in context.mounts) context.unwatch[mountpoint] = await watch(context.mounts[mountpoint], onChange, mountpoint);
	};
	const stopWatch = async () => {
		if (!context.watching) return;
		for (const mountpoint in context.unwatch) await context.unwatch[mountpoint]();
		context.unwatch = {};
		context.watching = false;
	};
	const runBatch = (items, commonOptions, cb) => {
		const batches = /* @__PURE__ */ new Map();
		const getBatch = (mount) => {
			let batch = batches.get(mount.base);
			if (!batch) {
				batch = {
					driver: mount.driver,
					base: mount.base,
					items: []
				};
				batches.set(mount.base, batch);
			}
			return batch;
		};
		for (const item of items) {
			const isStringItem = typeof item === "string";
			const key = normalizeKey(isStringItem ? item : item.key);
			const value = isStringItem ? void 0 : item.value;
			const options2 = isStringItem || !item.options ? commonOptions : {
				...commonOptions,
				...item.options
			};
			const mount = getMount(key);
			getBatch(mount).items.push({
				key,
				value,
				relativeKey: mount.relativeKey,
				options: options2
			});
		}
		return Promise.all([...batches.values()].map((batch) => cb(batch))).then((r$2) => r$2.flat());
	};
	const storage = {
		hasItem(key, opts = {}) {
			key = normalizeKey(key);
			const { relativeKey, driver } = getMount(key);
			return asyncCall(driver.hasItem, relativeKey, opts);
		},
		getItem(key, opts = {}) {
			key = normalizeKey(key);
			const { relativeKey, driver } = getMount(key);
			return asyncCall(driver.getItem, relativeKey, opts).then((value) => destr(value));
		},
		getItems(items, commonOptions = {}) {
			return runBatch(items, commonOptions, (batch) => {
				if (batch.driver.getItems) return asyncCall(batch.driver.getItems, batch.items.map((item) => ({
					key: item.relativeKey,
					options: item.options
				})), commonOptions).then((r$2) => r$2.map((item) => ({
					key: joinKeys(batch.base, item.key),
					value: destr(item.value)
				})));
				return Promise.all(batch.items.map((item) => {
					return asyncCall(batch.driver.getItem, item.relativeKey, item.options).then((value) => ({
						key: item.key,
						value: destr(value)
					}));
				}));
			});
		},
		getItemRaw(key, opts = {}) {
			key = normalizeKey(key);
			const { relativeKey, driver } = getMount(key);
			if (driver.getItemRaw) return asyncCall(driver.getItemRaw, relativeKey, opts);
			return asyncCall(driver.getItem, relativeKey, opts).then((value) => deserializeRaw(value));
		},
		async setItem(key, value, opts = {}) {
			if (value === void 0) return storage.removeItem(key);
			key = normalizeKey(key);
			const { relativeKey, driver } = getMount(key);
			if (!driver.setItem) return;
			await asyncCall(driver.setItem, relativeKey, stringify$1(value), opts);
			if (!driver.watch) onChange("update", key);
		},
		async setItems(items, commonOptions) {
			await runBatch(items, commonOptions, async (batch) => {
				if (batch.driver.setItems) return asyncCall(batch.driver.setItems, batch.items.map((item) => ({
					key: item.relativeKey,
					value: stringify$1(item.value),
					options: item.options
				})), commonOptions);
				if (!batch.driver.setItem) return;
				await Promise.all(batch.items.map((item) => {
					return asyncCall(batch.driver.setItem, item.relativeKey, stringify$1(item.value), item.options);
				}));
			});
		},
		async setItemRaw(key, value, opts = {}) {
			if (value === void 0) return storage.removeItem(key, opts);
			key = normalizeKey(key);
			const { relativeKey, driver } = getMount(key);
			if (driver.setItemRaw) await asyncCall(driver.setItemRaw, relativeKey, value, opts);
			else if (driver.setItem) await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
			else return;
			if (!driver.watch) onChange("update", key);
		},
		async removeItem(key, opts = {}) {
			if (typeof opts === "boolean") opts = { removeMeta: opts };
			key = normalizeKey(key);
			const { relativeKey, driver } = getMount(key);
			if (!driver.removeItem) return;
			await asyncCall(driver.removeItem, relativeKey, opts);
			if (opts.removeMeta || opts.removeMata) await asyncCall(driver.removeItem, relativeKey + "$", opts);
			if (!driver.watch) onChange("remove", key);
		},
		async getMeta(key, opts = {}) {
			if (typeof opts === "boolean") opts = { nativeOnly: opts };
			key = normalizeKey(key);
			const { relativeKey, driver } = getMount(key);
			const meta = /* @__PURE__ */ Object.create(null);
			if (driver.getMeta) Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
			if (!opts.nativeOnly) {
				const value = await asyncCall(driver.getItem, relativeKey + "$", opts).then((value_) => destr(value_));
				if (value && typeof value === "object") {
					if (typeof value.atime === "string") value.atime = new Date(value.atime);
					if (typeof value.mtime === "string") value.mtime = new Date(value.mtime);
					Object.assign(meta, value);
				}
			}
			return meta;
		},
		setMeta(key, value, opts = {}) {
			return this.setItem(key + "$", value, opts);
		},
		removeMeta(key, opts = {}) {
			return this.removeItem(key + "$", opts);
		},
		async getKeys(base$2, opts = {}) {
			base$2 = normalizeBaseKey(base$2);
			const mounts = getMounts(base$2, true);
			let maskedMounts = [];
			const allKeys = [];
			let allMountsSupportMaxDepth = true;
			for (const mount of mounts) {
				if (!mount.driver.flags?.maxDepth) allMountsSupportMaxDepth = false;
				const rawKeys = await asyncCall(mount.driver.getKeys, mount.relativeBase, opts);
				for (const key of rawKeys) {
					const fullKey = mount.mountpoint + normalizeKey(key);
					if (!maskedMounts.some((p$2) => fullKey.startsWith(p$2))) allKeys.push(fullKey);
				}
				maskedMounts = [mount.mountpoint, ...maskedMounts.filter((p$2) => !p$2.startsWith(mount.mountpoint))];
			}
			const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
			return allKeys.filter((key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base$2));
		},
		async clear(base$2, opts = {}) {
			base$2 = normalizeBaseKey(base$2);
			await Promise.all(getMounts(base$2, false).map(async (m$4) => {
				if (m$4.driver.clear) return asyncCall(m$4.driver.clear, m$4.relativeBase, opts);
				if (m$4.driver.removeItem) {
					const keys$1 = await m$4.driver.getKeys(m$4.relativeBase || "", opts);
					return Promise.all(keys$1.map((key) => m$4.driver.removeItem(key, opts)));
				}
			}));
		},
		async dispose() {
			await Promise.all(Object.values(context.mounts).map((driver) => dispose(driver)));
		},
		async watch(callback) {
			await startWatch();
			context.watchListeners.push(callback);
			return async () => {
				context.watchListeners = context.watchListeners.filter((listener) => listener !== callback);
				if (context.watchListeners.length === 0) await stopWatch();
			};
		},
		async unwatch() {
			context.watchListeners = [];
			await stopWatch();
		},
		mount(base$2, driver) {
			base$2 = normalizeBaseKey(base$2);
			if (base$2 && context.mounts[base$2]) throw new Error(`already mounted at ${base$2}`);
			if (base$2) {
				context.mountpoints.push(base$2);
				context.mountpoints.sort((a$1, b$2) => b$2.length - a$1.length);
			}
			context.mounts[base$2] = driver;
			if (context.watching) Promise.resolve(watch(driver, onChange, base$2)).then((unwatcher) => {
				context.unwatch[base$2] = unwatcher;
			}).catch(console.error);
			return storage;
		},
		async unmount(base$2, _dispose = true) {
			base$2 = normalizeBaseKey(base$2);
			if (!base$2 || !context.mounts[base$2]) return;
			if (context.watching && base$2 in context.unwatch) {
				context.unwatch[base$2]?.();
				delete context.unwatch[base$2];
			}
			if (_dispose) await dispose(context.mounts[base$2]);
			context.mountpoints = context.mountpoints.filter((key) => key !== base$2);
			delete context.mounts[base$2];
		},
		getMount(key = "") {
			key = normalizeKey(key) + ":";
			const m$4 = getMount(key);
			return {
				driver: m$4.driver,
				base: m$4.base
			};
		},
		getMounts(base$2 = "", opts = {}) {
			base$2 = normalizeKey(base$2);
			return getMounts(base$2, opts.parents).map((m$4) => ({
				driver: m$4.driver,
				base: m$4.mountpoint
			}));
		},
		keys: (base$2, opts = {}) => storage.getKeys(base$2, opts),
		get: (key, opts = {}) => storage.getItem(key, opts),
		set: (key, value, opts = {}) => storage.setItem(key, value, opts),
		has: (key, opts = {}) => storage.hasItem(key, opts),
		del: (key, opts = {}) => storage.removeItem(key, opts),
		remove: (key, opts = {}) => storage.removeItem(key, opts)
	};
	return storage;
}
function watch(driver, onChange, base$2) {
	return driver.watch ? driver.watch((event, key) => onChange(event, base$2 + key)) : () => {};
}
async function dispose(driver) {
	if (typeof driver.dispose === "function") await asyncCall(driver.dispose);
}
function promisifyRequest(request) {
	return new Promise((resolve, reject) => {
		request.oncomplete = request.onsuccess = () => resolve(request.result);
		request.onabort = request.onerror = () => reject(request.error);
	});
}
function createStore(dbName, storeName) {
	let dbp;
	const getDB = () => {
		if (dbp) return dbp;
		const request = indexedDB.open(dbName);
		request.onupgradeneeded = () => request.result.createObjectStore(storeName);
		dbp = promisifyRequest(request);
		dbp.then((db) => {
			db.onclose = () => dbp = void 0;
		}, () => {});
		return dbp;
	};
	return (txMode, callback) => getDB().then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
var defaultGetStoreFunc;
function defaultGetStore() {
	if (!defaultGetStoreFunc) defaultGetStoreFunc = createStore("keyval-store", "keyval");
	return defaultGetStoreFunc;
}
function get(key, customStore = defaultGetStore()) {
	return customStore("readonly", (store) => promisifyRequest(store.get(key)));
}
function set(key, value, customStore = defaultGetStore()) {
	return customStore("readwrite", (store) => {
		store.put(value, key);
		return promisifyRequest(store.transaction);
	});
}
function del(key, customStore = defaultGetStore()) {
	return customStore("readwrite", (store) => {
		store.delete(key);
		return promisifyRequest(store.transaction);
	});
}
function clear(customStore = defaultGetStore()) {
	return customStore("readwrite", (store) => {
		store.clear();
		return promisifyRequest(store.transaction);
	});
}
function eachCursor(store, callback) {
	store.openCursor().onsuccess = function() {
		if (!this.result) return;
		callback(this.result);
		this.result.continue();
	};
	return promisifyRequest(store.transaction);
}
function keys(customStore = defaultGetStore()) {
	return customStore("readonly", (store) => {
		if (store.getAllKeys) return promisifyRequest(store.getAllKeys());
		const items = [];
		return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
	});
}
var JSONStringify = (data) => JSON.stringify(data, (_$1, value) => typeof value === "bigint" ? value.toString() + "n" : value);
var JSONParse = (json) => {
	const serializedData = json.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, "$1\"$2n\"$3");
	return JSON.parse(serializedData, (_$1, value) => {
		if (typeof value === "string" && value.match(/^\d+n$/)) return BigInt(value.substring(0, value.length - 1));
		return value;
	});
};
function safeJsonParse(value) {
	if (typeof value !== "string") throw new Error(`Cannot safe json parse value of type ${typeof value}`);
	try {
		return JSONParse(value);
	} catch (_a) {
		return value;
	}
}
function safeJsonStringify(value) {
	return typeof value === "string" ? value : JSONStringify(value) || "";
}
var x$1 = "idb-keyval";
var z = (i$1 = {}) => {
	const t = i$1.base && i$1.base.length > 0 ? `${i$1.base}:` : "", e$1 = (s$1) => t + s$1;
	let n$2;
	return i$1.dbName && i$1.storeName && (n$2 = createStore(i$1.dbName, i$1.storeName)), {
		name: x$1,
		options: i$1,
		async hasItem(s$1) {
			return !(typeof await get(e$1(s$1), n$2) > "u");
		},
		async getItem(s$1) {
			return await get(e$1(s$1), n$2) ?? null;
		},
		setItem(s$1, a$1) {
			return set(e$1(s$1), a$1, n$2);
		},
		removeItem(s$1) {
			return del(e$1(s$1), n$2);
		},
		getKeys() {
			return keys(n$2);
		},
		clear() {
			return clear(n$2);
		}
	};
};
var D = "WALLET_CONNECT_V2_INDEXED_DB", E$1 = "keyvaluestorage";
var _ = class {
	constructor() {
		this.indexedDb = createStorage({ driver: z({
			dbName: D,
			storeName: E$1
		}) });
	}
	async getKeys() {
		return this.indexedDb.getKeys();
	}
	async getEntries() {
		return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t) => [t.key, t.value]);
	}
	async getItem(t) {
		const e$1 = await this.indexedDb.getItem(t);
		if (e$1 !== null) return e$1;
	}
	async setItem(t, e$1) {
		await this.indexedDb.setItem(t, safeJsonStringify(e$1));
	}
	async removeItem(t) {
		await this.indexedDb.removeItem(t);
	}
};
var l$2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, c$2 = { exports: {} };
(function() {
	let i$1;
	function t() {}
	i$1 = t, i$1.prototype.getItem = function(e$1) {
		return this.hasOwnProperty(e$1) ? String(this[e$1]) : null;
	}, i$1.prototype.setItem = function(e$1, n$2) {
		this[e$1] = String(n$2);
	}, i$1.prototype.removeItem = function(e$1) {
		delete this[e$1];
	}, i$1.prototype.clear = function() {
		const e$1 = this;
		Object.keys(e$1).forEach(function(n$2) {
			e$1[n$2] = void 0, delete e$1[n$2];
		});
	}, i$1.prototype.key = function(e$1) {
		return e$1 = e$1 || 0, Object.keys(this)[e$1];
	}, i$1.prototype.__defineGetter__("length", function() {
		return Object.keys(this).length;
	}), typeof l$2 < "u" && l$2.localStorage ? c$2.exports = l$2.localStorage : typeof window < "u" && window.localStorage ? c$2.exports = window.localStorage : c$2.exports = new t();
})();
function k$1(i$1) {
	var t;
	return [i$1[0], safeJsonParse((t = i$1[1]) != null ? t : "")];
}
var K$1 = class {
	constructor() {
		this.localStorage = c$2.exports;
	}
	async getKeys() {
		return Object.keys(this.localStorage);
	}
	async getEntries() {
		return Object.entries(this.localStorage).map(k$1);
	}
	async getItem(t) {
		const e$1 = this.localStorage.getItem(t);
		if (e$1 !== null) return safeJsonParse(e$1);
	}
	async setItem(t, e$1) {
		this.localStorage.setItem(t, safeJsonStringify(e$1));
	}
	async removeItem(t) {
		this.localStorage.removeItem(t);
	}
};
var N$1 = "wc_storage_version", y = 1, O$1 = async (i$1, t, e$1) => {
	const n$2 = N$1, s$1 = await t.getItem(n$2);
	if (s$1 && s$1 >= y) {
		e$1(t);
		return;
	}
	const a$1 = await i$1.getKeys();
	if (!a$1.length) {
		e$1(t);
		return;
	}
	const m$4 = [];
	for (; a$1.length;) {
		const r$2 = a$1.shift();
		if (!r$2) continue;
		const o$4 = r$2.toLowerCase();
		if (o$4.includes("wc@") || o$4.includes("walletconnect") || o$4.includes("wc_") || o$4.includes("wallet_connect")) {
			const f$2 = await i$1.getItem(r$2);
			await t.setItem(r$2, f$2), m$4.push(r$2);
		}
	}
	await t.setItem(n$2, y), e$1(t), j$1(i$1, m$4);
}, j$1 = async (i$1, t) => {
	t.length && t.forEach(async (e$1) => {
		await i$1.removeItem(e$1);
	});
};
var h$1 = class {
	constructor() {
		this.initialized = !1, this.setInitialized = (e$1) => {
			this.storage = e$1, this.initialized = !0;
		};
		const t = new K$1();
		this.storage = t;
		try {
			O$1(t, new _(), this.setInitialized);
		} catch {
			this.initialized = !0;
		}
	}
	async getKeys() {
		return await this.initialize(), this.storage.getKeys();
	}
	async getEntries() {
		return await this.initialize(), this.storage.getEntries();
	}
	async getItem(t) {
		return await this.initialize(), this.storage.getItem(t);
	}
	async setItem(t, e$1) {
		return await this.initialize(), this.storage.setItem(t, e$1);
	}
	async removeItem(t) {
		return await this.initialize(), this.storage.removeItem(t);
	}
	async initialize() {
		this.initialized || await new Promise((t) => {
			const e$1 = setInterval(() => {
				this.initialized && (clearInterval(e$1), t());
			}, 20);
		});
	}
};
var import_cjs$1 = require_cjs$3();
function En(t) {
	return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function fe(t, ...e$1) {
	if (!En(t)) throw new Error("Uint8Array expected");
	if (e$1.length > 0 && !e$1.includes(t.length)) throw new Error("Uint8Array expected of length " + e$1 + ", got length=" + t.length);
}
function De(t, e$1 = !0) {
	if (t.destroyed) throw new Error("Hash instance has been destroyed");
	if (e$1 && t.finished) throw new Error("Hash#digest() has already been called");
}
function gn(t, e$1) {
	fe(t);
	const n$2 = e$1.outputLen;
	if (t.length < n$2) throw new Error("digestInto() expects output buffer of length at least " + n$2);
}
var it = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
var _t = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength);
function yn(t) {
	if (typeof t != "string") throw new Error("utf8ToBytes expected string, got " + typeof t);
	return new Uint8Array(new TextEncoder().encode(t));
}
function de(t) {
	return typeof t == "string" && (t = yn(t)), fe(t), t;
}
var xn = class {
	clone() {
		return this._cloneInto();
	}
};
function Bn(t) {
	const e$1 = (r$2) => t().update(de(r$2)).digest(), n$2 = t();
	return e$1.outputLen = n$2.outputLen, e$1.blockLen = n$2.blockLen, e$1.create = () => t(), e$1;
}
function he(t = 32) {
	if (it && typeof it.getRandomValues == "function") return it.getRandomValues(new Uint8Array(t));
	if (it && typeof it.randomBytes == "function") return it.randomBytes(t);
	throw new Error("crypto.getRandomValues must be defined");
}
function Cn(t, e$1, n$2, r$2) {
	if (typeof t.setBigUint64 == "function") return t.setBigUint64(e$1, n$2, r$2);
	const o$4 = BigInt(32), s$1 = BigInt(4294967295), a$1 = Number(n$2 >> o$4 & s$1), u = Number(n$2 & s$1), i$1 = r$2 ? 4 : 0, D$1 = r$2 ? 0 : 4;
	t.setUint32(e$1 + i$1, a$1, r$2), t.setUint32(e$1 + D$1, u, r$2);
}
var An = class extends xn {
	constructor(e$1, n$2, r$2, o$4) {
		super(), this.blockLen = e$1, this.outputLen = n$2, this.padOffset = r$2, this.isLE = o$4, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e$1), this.view = _t(this.buffer);
	}
	update(e$1) {
		De(this);
		const { view: n$2, buffer: r$2, blockLen: o$4 } = this;
		e$1 = de(e$1);
		const s$1 = e$1.length;
		for (let a$1 = 0; a$1 < s$1;) {
			const u = Math.min(o$4 - this.pos, s$1 - a$1);
			if (u === o$4) {
				const i$1 = _t(e$1);
				for (; o$4 <= s$1 - a$1; a$1 += o$4) this.process(i$1, a$1);
				continue;
			}
			r$2.set(e$1.subarray(a$1, a$1 + u), this.pos), this.pos += u, a$1 += u, this.pos === o$4 && (this.process(n$2, 0), this.pos = 0);
		}
		return this.length += e$1.length, this.roundClean(), this;
	}
	digestInto(e$1) {
		De(this), gn(e$1, this), this.finished = !0;
		const { buffer: n$2, view: r$2, blockLen: o$4, isLE: s$1 } = this;
		let { pos: a$1 } = this;
		n$2[a$1++] = 128, this.buffer.subarray(a$1).fill(0), this.padOffset > o$4 - a$1 && (this.process(r$2, 0), a$1 = 0);
		for (let l$4 = a$1; l$4 < o$4; l$4++) n$2[l$4] = 0;
		Cn(r$2, o$4 - 8, BigInt(this.length * 8), s$1), this.process(r$2, 0);
		const u = _t(e$1), i$1 = this.outputLen;
		if (i$1 % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
		const D$1 = i$1 / 4, c$3 = this.get();
		if (D$1 > c$3.length) throw new Error("_sha2: outputLen bigger than state");
		for (let l$4 = 0; l$4 < D$1; l$4++) u.setUint32(4 * l$4, c$3[l$4], s$1);
	}
	digest() {
		const { buffer: e$1, outputLen: n$2 } = this;
		this.digestInto(e$1);
		const r$2 = e$1.slice(0, n$2);
		return this.destroy(), r$2;
	}
	_cloneInto(e$1) {
		e$1 || (e$1 = new this.constructor()), e$1.set(...this.get());
		const { blockLen: n$2, buffer: r$2, length: o$4, finished: s$1, destroyed: a$1, pos: u } = this;
		return e$1.length = o$4, e$1.pos = u, e$1.finished = s$1, e$1.destroyed = a$1, o$4 % n$2 && e$1.buffer.set(r$2), e$1;
	}
};
var wt = BigInt(2 ** 32 - 1), St = BigInt(32);
function le(t, e$1 = !1) {
	return e$1 ? {
		h: Number(t & wt),
		l: Number(t >> St & wt)
	} : {
		h: Number(t >> St & wt) | 0,
		l: Number(t & wt) | 0
	};
}
function mn(t, e$1 = !1) {
	let n$2 = new Uint32Array(t.length), r$2 = new Uint32Array(t.length);
	for (let o$4 = 0; o$4 < t.length; o$4++) {
		const { h: s$1, l: a$1 } = le(t[o$4], e$1);
		[n$2[o$4], r$2[o$4]] = [s$1, a$1];
	}
	return [n$2, r$2];
}
var _n = (t, e$1) => BigInt(t >>> 0) << St | BigInt(e$1 >>> 0), Sn = (t, e$1, n$2) => t >>> n$2, vn = (t, e$1, n$2) => t << 32 - n$2 | e$1 >>> n$2, In = (t, e$1, n$2) => t >>> n$2 | e$1 << 32 - n$2, Un = (t, e$1, n$2) => t << 32 - n$2 | e$1 >>> n$2, Tn = (t, e$1, n$2) => t << 64 - n$2 | e$1 >>> n$2 - 32, Fn = (t, e$1, n$2) => t >>> n$2 - 32 | e$1 << 64 - n$2, Nn = (t, e$1) => e$1, Ln = (t, e$1) => t, On = (t, e$1, n$2) => t << n$2 | e$1 >>> 32 - n$2, Hn = (t, e$1, n$2) => e$1 << n$2 | t >>> 32 - n$2, zn = (t, e$1, n$2) => e$1 << n$2 - 32 | t >>> 64 - n$2, Mn = (t, e$1, n$2) => t << n$2 - 32 | e$1 >>> 64 - n$2;
function qn(t, e$1, n$2, r$2) {
	const o$4 = (e$1 >>> 0) + (r$2 >>> 0);
	return {
		h: t + n$2 + (o$4 / 2 ** 32 | 0) | 0,
		l: o$4 | 0
	};
}
var $n = (t, e$1, n$2) => (t >>> 0) + (e$1 >>> 0) + (n$2 >>> 0), kn = (t, e$1, n$2, r$2) => e$1 + n$2 + r$2 + (t / 2 ** 32 | 0) | 0, Rn = (t, e$1, n$2, r$2) => (t >>> 0) + (e$1 >>> 0) + (n$2 >>> 0) + (r$2 >>> 0), jn = (t, e$1, n$2, r$2, o$4) => e$1 + n$2 + r$2 + o$4 + (t / 2 ** 32 | 0) | 0, Zn = (t, e$1, n$2, r$2, o$4) => (t >>> 0) + (e$1 >>> 0) + (n$2 >>> 0) + (r$2 >>> 0) + (o$4 >>> 0), Gn = (t, e$1, n$2, r$2, o$4, s$1) => e$1 + n$2 + r$2 + o$4 + s$1 + (t / 2 ** 32 | 0) | 0, x = {
	fromBig: le,
	split: mn,
	toBig: _n,
	shrSH: Sn,
	shrSL: vn,
	rotrSH: In,
	rotrSL: Un,
	rotrBH: Tn,
	rotrBL: Fn,
	rotr32H: Nn,
	rotr32L: Ln,
	rotlSH: On,
	rotlSL: Hn,
	rotlBH: zn,
	rotlBL: Mn,
	add: qn,
	add3L: $n,
	add3H: kn,
	add4L: Rn,
	add4H: jn,
	add5H: Gn,
	add5L: Zn
}, [Vn, Yn] = (() => x.split([
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
].map((t) => BigInt(t))))(), P$1 = new Uint32Array(80), Q = new Uint32Array(80);
var Jn = class extends An {
	constructor() {
		super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
	}
	get() {
		const { Ah: e$1, Al: n$2, Bh: r$2, Bl: o$4, Ch: s$1, Cl: a$1, Dh: u, Dl: i$1, Eh: D$1, El: c$3, Fh: l$4, Fl: p$2, Gh: w$3, Gl: h$2, Hh: g$2, Hl: S } = this;
		return [
			e$1,
			n$2,
			r$2,
			o$4,
			s$1,
			a$1,
			u,
			i$1,
			D$1,
			c$3,
			l$4,
			p$2,
			w$3,
			h$2,
			g$2,
			S
		];
	}
	set(e$1, n$2, r$2, o$4, s$1, a$1, u, i$1, D$1, c$3, l$4, p$2, w$3, h$2, g$2, S) {
		this.Ah = e$1 | 0, this.Al = n$2 | 0, this.Bh = r$2 | 0, this.Bl = o$4 | 0, this.Ch = s$1 | 0, this.Cl = a$1 | 0, this.Dh = u | 0, this.Dl = i$1 | 0, this.Eh = D$1 | 0, this.El = c$3 | 0, this.Fh = l$4 | 0, this.Fl = p$2 | 0, this.Gh = w$3 | 0, this.Gl = h$2 | 0, this.Hh = g$2 | 0, this.Hl = S | 0;
	}
	process(e$1, n$2) {
		for (let d$2 = 0; d$2 < 16; d$2++, n$2 += 4) P$1[d$2] = e$1.getUint32(n$2), Q[d$2] = e$1.getUint32(n$2 += 4);
		for (let d$2 = 16; d$2 < 80; d$2++) {
			const m$4 = P$1[d$2 - 15] | 0, F = Q[d$2 - 15] | 0, q$1 = x.rotrSH(m$4, F, 1) ^ x.rotrSH(m$4, F, 8) ^ x.shrSH(m$4, F, 7), z$2 = x.rotrSL(m$4, F, 1) ^ x.rotrSL(m$4, F, 8) ^ x.shrSL(m$4, F, 7), I = P$1[d$2 - 2] | 0, O$3 = Q[d$2 - 2] | 0, ot = x.rotrSH(I, O$3, 19) ^ x.rotrBH(I, O$3, 61) ^ x.shrSH(I, O$3, 6), tt = x.rotrSL(I, O$3, 19) ^ x.rotrBL(I, O$3, 61) ^ x.shrSL(I, O$3, 6), st = x.add4L(z$2, tt, Q[d$2 - 7], Q[d$2 - 16]);
			P$1[d$2] = x.add4H(st, q$1, ot, P$1[d$2 - 7], P$1[d$2 - 16]) | 0, Q[d$2] = st | 0;
		}
		let { Ah: r$2, Al: o$4, Bh: s$1, Bl: a$1, Ch: u, Cl: i$1, Dh: D$1, Dl: c$3, Eh: l$4, El: p$2, Fh: w$3, Fl: h$2, Gh: g$2, Gl: S, Hh: v$5, Hl: L$1 } = this;
		for (let d$2 = 0; d$2 < 80; d$2++) {
			const m$4 = x.rotrSH(l$4, p$2, 14) ^ x.rotrSH(l$4, p$2, 18) ^ x.rotrBH(l$4, p$2, 41), F = x.rotrSL(l$4, p$2, 14) ^ x.rotrSL(l$4, p$2, 18) ^ x.rotrBL(l$4, p$2, 41), q$1 = l$4 & w$3 ^ ~l$4 & g$2, z$2 = p$2 & h$2 ^ ~p$2 & S, I = x.add5L(L$1, F, z$2, Yn[d$2], Q[d$2]), O$3 = x.add5H(I, v$5, m$4, q$1, Vn[d$2], P$1[d$2]), ot = I | 0, tt = x.rotrSH(r$2, o$4, 28) ^ x.rotrBH(r$2, o$4, 34) ^ x.rotrBH(r$2, o$4, 39), st = x.rotrSL(r$2, o$4, 28) ^ x.rotrBL(r$2, o$4, 34) ^ x.rotrBL(r$2, o$4, 39), at = r$2 & s$1 ^ r$2 & u ^ s$1 & u, Ct = o$4 & a$1 ^ o$4 & i$1 ^ a$1 & i$1;
			v$5 = g$2 | 0, L$1 = S | 0, g$2 = w$3 | 0, S = h$2 | 0, w$3 = l$4 | 0, h$2 = p$2 | 0, {h: l$4, l: p$2} = x.add(D$1 | 0, c$3 | 0, O$3 | 0, ot | 0), D$1 = u | 0, c$3 = i$1 | 0, u = s$1 | 0, i$1 = a$1 | 0, s$1 = r$2 | 0, a$1 = o$4 | 0;
			const At = x.add3L(ot, st, Ct);
			r$2 = x.add3H(At, O$3, tt, at), o$4 = At | 0;
		}
		({h: r$2, l: o$4} = x.add(this.Ah | 0, this.Al | 0, r$2 | 0, o$4 | 0)), {h: s$1, l: a$1} = x.add(this.Bh | 0, this.Bl | 0, s$1 | 0, a$1 | 0), {h: u, l: i$1} = x.add(this.Ch | 0, this.Cl | 0, u | 0, i$1 | 0), {h: D$1, l: c$3} = x.add(this.Dh | 0, this.Dl | 0, D$1 | 0, c$3 | 0), {h: l$4, l: p$2} = x.add(this.Eh | 0, this.El | 0, l$4 | 0, p$2 | 0), {h: w$3, l: h$2} = x.add(this.Fh | 0, this.Fl | 0, w$3 | 0, h$2 | 0), {h: g$2, l: S} = x.add(this.Gh | 0, this.Gl | 0, g$2 | 0, S | 0), {h: v$5, l: L$1} = x.add(this.Hh | 0, this.Hl | 0, v$5 | 0, L$1 | 0), this.set(r$2, o$4, s$1, a$1, u, i$1, D$1, c$3, l$4, p$2, w$3, h$2, g$2, S, v$5, L$1);
	}
	roundClean() {
		P$1.fill(0), Q.fill(0);
	}
	destroy() {
		this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	}
};
var Kn = Bn(() => new Jn());
var vt = BigInt(0), be = BigInt(1), Wn = BigInt(2);
function It(t) {
	return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Ut(t) {
	if (!It(t)) throw new Error("Uint8Array expected");
}
function Tt(t, e$1) {
	if (typeof e$1 != "boolean") throw new Error(t + " boolean expected, got " + e$1);
}
var Xn = Array.from({ length: 256 }, (t, e$1) => e$1.toString(16).padStart(2, "0"));
function Ft(t) {
	Ut(t);
	let e$1 = "";
	for (let n$2 = 0; n$2 < t.length; n$2++) e$1 += Xn[t[n$2]];
	return e$1;
}
function pe(t) {
	if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
	return t === "" ? vt : BigInt("0x" + t);
}
var K = {
	_0: 48,
	_9: 57,
	A: 65,
	F: 70,
	a: 97,
	f: 102
};
function we(t) {
	if (t >= K._0 && t <= K._9) return t - K._0;
	if (t >= K.A && t <= K.F) return t - (K.A - 10);
	if (t >= K.a && t <= K.f) return t - (K.a - 10);
}
function Ee(t) {
	if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
	const e$1 = t.length, n$2 = e$1 / 2;
	if (e$1 % 2) throw new Error("hex string expected, got unpadded hex of length " + e$1);
	const r$2 = new Uint8Array(n$2);
	for (let o$4 = 0, s$1 = 0; o$4 < n$2; o$4++, s$1 += 2) {
		const a$1 = we(t.charCodeAt(s$1)), u = we(t.charCodeAt(s$1 + 1));
		if (a$1 === void 0 || u === void 0) {
			const i$1 = t[s$1] + t[s$1 + 1];
			throw new Error("hex string expected, got non-hex character \"" + i$1 + "\" at index " + s$1);
		}
		r$2[o$4] = a$1 * 16 + u;
	}
	return r$2;
}
function Pn(t) {
	return pe(Ft(t));
}
function Et(t) {
	return Ut(t), pe(Ft(Uint8Array.from(t).reverse()));
}
function ge(t, e$1) {
	return Ee(t.toString(16).padStart(e$1 * 2, "0"));
}
function Nt(t, e$1) {
	return ge(t, e$1).reverse();
}
function W(t, e$1, n$2) {
	let r$2;
	if (typeof e$1 == "string") try {
		r$2 = Ee(e$1);
	} catch (s$1) {
		throw new Error(t + " must be hex string or Uint8Array, cause: " + s$1);
	}
	else if (It(e$1)) r$2 = Uint8Array.from(e$1);
	else throw new Error(t + " must be hex string or Uint8Array");
	const o$4 = r$2.length;
	if (typeof n$2 == "number" && o$4 !== n$2) throw new Error(t + " of length " + n$2 + " expected, got " + o$4);
	return r$2;
}
function ye(...t) {
	let e$1 = 0;
	for (let r$2 = 0; r$2 < t.length; r$2++) {
		const o$4 = t[r$2];
		Ut(o$4), e$1 += o$4.length;
	}
	const n$2 = new Uint8Array(e$1);
	for (let r$2 = 0, o$4 = 0; r$2 < t.length; r$2++) {
		const s$1 = t[r$2];
		n$2.set(s$1, o$4), o$4 += s$1.length;
	}
	return n$2;
}
var Lt = (t) => typeof t == "bigint" && vt <= t;
function Qn(t, e$1, n$2) {
	return Lt(t) && Lt(e$1) && Lt(n$2) && e$1 <= t && t < n$2;
}
function ft(t, e$1, n$2, r$2) {
	if (!Qn(e$1, n$2, r$2)) throw new Error("expected valid " + t + ": " + n$2 + " <= n < " + r$2 + ", got " + e$1);
}
function tr(t) {
	let e$1;
	for (e$1 = 0; t > vt; t >>= be, e$1 += 1);
	return e$1;
}
var er = (t) => (Wn << BigInt(t - 1)) - be, nr = {
	bigint: (t) => typeof t == "bigint",
	function: (t) => typeof t == "function",
	boolean: (t) => typeof t == "boolean",
	string: (t) => typeof t == "string",
	stringOrUint8Array: (t) => typeof t == "string" || It(t),
	isSafeInteger: (t) => Number.isSafeInteger(t),
	array: (t) => Array.isArray(t),
	field: (t, e$1) => e$1.Fp.isValid(t),
	hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen)
};
function Ot(t, e$1, n$2 = {}) {
	const r$2 = (o$4, s$1, a$1) => {
		const u = nr[s$1];
		if (typeof u != "function") throw new Error("invalid validator function");
		const i$1 = t[o$4];
		if (!(a$1 && i$1 === void 0) && !u(i$1, t)) throw new Error("param " + String(o$4) + " is invalid. Expected " + s$1 + ", got " + i$1);
	};
	for (const [o$4, s$1] of Object.entries(e$1)) r$2(o$4, s$1, !1);
	for (const [o$4, s$1] of Object.entries(n$2)) r$2(o$4, s$1, !0);
	return t;
}
function xe(t) {
	const e$1 = /* @__PURE__ */ new WeakMap();
	return (n$2, ...r$2) => {
		const o$4 = e$1.get(n$2);
		if (o$4 !== void 0) return o$4;
		const s$1 = t(n$2, ...r$2);
		return e$1.set(n$2, s$1), s$1;
	};
}
var M = BigInt(0), N = BigInt(1), nt = BigInt(2), rr = BigInt(3), Ht = BigInt(4), Be = BigInt(5), Ce = BigInt(8);
function H(t, e$1) {
	const n$2 = t % e$1;
	return n$2 >= M ? n$2 : e$1 + n$2;
}
function or$1(t, e$1, n$2) {
	if (e$1 < M) throw new Error("invalid exponent, negatives unsupported");
	if (n$2 <= M) throw new Error("invalid modulus");
	if (n$2 === N) return M;
	let r$2 = N;
	for (; e$1 > M;) e$1 & N && (r$2 = r$2 * t % n$2), t = t * t % n$2, e$1 >>= N;
	return r$2;
}
function J(t, e$1, n$2) {
	let r$2 = t;
	for (; e$1-- > M;) r$2 *= r$2, r$2 %= n$2;
	return r$2;
}
function Ae(t, e$1) {
	if (t === M) throw new Error("invert: expected non-zero number");
	if (e$1 <= M) throw new Error("invert: expected positive modulus, got " + e$1);
	let n$2 = H(t, e$1), r$2 = e$1, o$4 = M, s$1 = N;
	for (; n$2 !== M;) {
		const u = r$2 / n$2, i$1 = r$2 % n$2, D$1 = o$4 - s$1 * u;
		r$2 = n$2, n$2 = i$1, o$4 = s$1, s$1 = D$1;
	}
	if (r$2 !== N) throw new Error("invert: does not exist");
	return H(o$4, e$1);
}
function sr(t) {
	const e$1 = (t - N) / nt;
	let n$2, r$2, o$4;
	for (n$2 = t - N, r$2 = 0; n$2 % nt === M; n$2 /= nt, r$2++);
	for (o$4 = nt; o$4 < t && or$1(o$4, e$1, t) !== t - N; o$4++) if (o$4 > 1e3) throw new Error("Cannot find square root: likely non-prime P");
	if (r$2 === 1) {
		const a$1 = (t + N) / Ht;
		return function(i$1, D$1) {
			const c$3 = i$1.pow(D$1, a$1);
			if (!i$1.eql(i$1.sqr(c$3), D$1)) throw new Error("Cannot find square root");
			return c$3;
		};
	}
	const s$1 = (n$2 + N) / nt;
	return function(u, i$1) {
		if (u.pow(i$1, e$1) === u.neg(u.ONE)) throw new Error("Cannot find square root");
		let D$1 = r$2, c$3 = u.pow(u.mul(u.ONE, o$4), n$2), l$4 = u.pow(i$1, s$1), p$2 = u.pow(i$1, n$2);
		for (; !u.eql(p$2, u.ONE);) {
			if (u.eql(p$2, u.ZERO)) return u.ZERO;
			let w$3 = 1;
			for (let g$2 = u.sqr(p$2); w$3 < D$1 && !u.eql(g$2, u.ONE); w$3++) g$2 = u.sqr(g$2);
			const h$2 = u.pow(c$3, N << BigInt(D$1 - w$3 - 1));
			c$3 = u.sqr(h$2), l$4 = u.mul(l$4, h$2), p$2 = u.mul(p$2, c$3), D$1 = w$3;
		}
		return l$4;
	};
}
function ir(t) {
	if (t % Ht === rr) {
		const e$1 = (t + N) / Ht;
		return function(r$2, o$4) {
			const s$1 = r$2.pow(o$4, e$1);
			if (!r$2.eql(r$2.sqr(s$1), o$4)) throw new Error("Cannot find square root");
			return s$1;
		};
	}
	if (t % Ce === Be) {
		const e$1 = (t - Be) / Ce;
		return function(r$2, o$4) {
			const s$1 = r$2.mul(o$4, nt), a$1 = r$2.pow(s$1, e$1), u = r$2.mul(o$4, a$1), i$1 = r$2.mul(r$2.mul(u, nt), a$1), D$1 = r$2.mul(u, r$2.sub(i$1, r$2.ONE));
			if (!r$2.eql(r$2.sqr(D$1), o$4)) throw new Error("Cannot find square root");
			return D$1;
		};
	}
	return sr(t);
}
var ur = (t, e$1) => (H(t, e$1) & N) === N, cr = [
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
function ar(t) {
	return Ot(t, cr.reduce((r$2, o$4) => (r$2[o$4] = "function", r$2), {
		ORDER: "bigint",
		MASK: "bigint",
		BYTES: "isSafeInteger",
		BITS: "isSafeInteger"
	}));
}
function fr(t, e$1, n$2) {
	if (n$2 < M) throw new Error("invalid exponent, negatives unsupported");
	if (n$2 === M) return t.ONE;
	if (n$2 === N) return e$1;
	let r$2 = t.ONE, o$4 = e$1;
	for (; n$2 > M;) n$2 & N && (r$2 = t.mul(r$2, o$4)), o$4 = t.sqr(o$4), n$2 >>= N;
	return r$2;
}
function Dr(t, e$1) {
	const n$2 = new Array(e$1.length), r$2 = e$1.reduce((s$1, a$1, u) => t.is0(a$1) ? s$1 : (n$2[u] = s$1, t.mul(s$1, a$1)), t.ONE), o$4 = t.inv(r$2);
	return e$1.reduceRight((s$1, a$1, u) => t.is0(a$1) ? s$1 : (n$2[u] = t.mul(s$1, n$2[u]), t.mul(s$1, a$1)), o$4), n$2;
}
function me(t, e$1) {
	const n$2 = e$1 !== void 0 ? e$1 : t.toString(2).length;
	return {
		nBitLength: n$2,
		nByteLength: Math.ceil(n$2 / 8)
	};
}
function _e(t, e$1, n$2 = !1, r$2 = {}) {
	if (t <= M) throw new Error("invalid field: expected ORDER > 0, got " + t);
	const { nBitLength: o$4, nByteLength: s$1 } = me(t, e$1);
	if (s$1 > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
	let a$1;
	const u = Object.freeze({
		ORDER: t,
		isLE: n$2,
		BITS: o$4,
		BYTES: s$1,
		MASK: er(o$4),
		ZERO: M,
		ONE: N,
		create: (i$1) => H(i$1, t),
		isValid: (i$1) => {
			if (typeof i$1 != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof i$1);
			return M <= i$1 && i$1 < t;
		},
		is0: (i$1) => i$1 === M,
		isOdd: (i$1) => (i$1 & N) === N,
		neg: (i$1) => H(-i$1, t),
		eql: (i$1, D$1) => i$1 === D$1,
		sqr: (i$1) => H(i$1 * i$1, t),
		add: (i$1, D$1) => H(i$1 + D$1, t),
		sub: (i$1, D$1) => H(i$1 - D$1, t),
		mul: (i$1, D$1) => H(i$1 * D$1, t),
		pow: (i$1, D$1) => fr(u, i$1, D$1),
		div: (i$1, D$1) => H(i$1 * Ae(D$1, t), t),
		sqrN: (i$1) => i$1 * i$1,
		addN: (i$1, D$1) => i$1 + D$1,
		subN: (i$1, D$1) => i$1 - D$1,
		mulN: (i$1, D$1) => i$1 * D$1,
		inv: (i$1) => Ae(i$1, t),
		sqrt: r$2.sqrt || ((i$1) => (a$1 || (a$1 = ir(t)), a$1(u, i$1))),
		invertBatch: (i$1) => Dr(u, i$1),
		cmov: (i$1, D$1, c$3) => c$3 ? D$1 : i$1,
		toBytes: (i$1) => n$2 ? Nt(i$1, s$1) : ge(i$1, s$1),
		fromBytes: (i$1) => {
			if (i$1.length !== s$1) throw new Error("Field.fromBytes: expected " + s$1 + " bytes, got " + i$1.length);
			return n$2 ? Et(i$1) : Pn(i$1);
		}
	});
	return Object.freeze(u);
}
var Se = BigInt(0), gt = BigInt(1);
function zt(t, e$1) {
	const n$2 = e$1.negate();
	return t ? n$2 : e$1;
}
function ve(t, e$1) {
	if (!Number.isSafeInteger(t) || t <= 0 || t > e$1) throw new Error("invalid window size, expected [1.." + e$1 + "], got W=" + t);
}
function Mt(t, e$1) {
	ve(t, e$1);
	return {
		windows: Math.ceil(e$1 / t) + 1,
		windowSize: 2 ** (t - 1)
	};
}
function dr(t, e$1) {
	if (!Array.isArray(t)) throw new Error("array expected");
	t.forEach((n$2, r$2) => {
		if (!(n$2 instanceof e$1)) throw new Error("invalid point at index " + r$2);
	});
}
function hr(t, e$1) {
	if (!Array.isArray(t)) throw new Error("array of scalars expected");
	t.forEach((n$2, r$2) => {
		if (!e$1.isValid(n$2)) throw new Error("invalid scalar at index " + r$2);
	});
}
var qt = /* @__PURE__ */ new WeakMap(), Ie = /* @__PURE__ */ new WeakMap();
function $t(t) {
	return Ie.get(t) || 1;
}
function lr(t, e$1) {
	return {
		constTimeNegate: zt,
		hasPrecomputes(n$2) {
			return $t(n$2) !== 1;
		},
		unsafeLadder(n$2, r$2, o$4 = t.ZERO) {
			let s$1 = n$2;
			for (; r$2 > Se;) r$2 & gt && (o$4 = o$4.add(s$1)), s$1 = s$1.double(), r$2 >>= gt;
			return o$4;
		},
		precomputeWindow(n$2, r$2) {
			const { windows: o$4, windowSize: s$1 } = Mt(r$2, e$1), a$1 = [];
			let u = n$2, i$1 = u;
			for (let D$1 = 0; D$1 < o$4; D$1++) {
				i$1 = u, a$1.push(i$1);
				for (let c$3 = 1; c$3 < s$1; c$3++) i$1 = i$1.add(u), a$1.push(i$1);
				u = i$1.double();
			}
			return a$1;
		},
		wNAF(n$2, r$2, o$4) {
			const { windows: s$1, windowSize: a$1 } = Mt(n$2, e$1);
			let u = t.ZERO, i$1 = t.BASE;
			const D$1 = BigInt(2 ** n$2 - 1), c$3 = 2 ** n$2, l$4 = BigInt(n$2);
			for (let p$2 = 0; p$2 < s$1; p$2++) {
				const w$3 = p$2 * a$1;
				let h$2 = Number(o$4 & D$1);
				o$4 >>= l$4, h$2 > a$1 && (h$2 -= c$3, o$4 += gt);
				const g$2 = w$3, S = w$3 + Math.abs(h$2) - 1, v$5 = p$2 % 2 !== 0, L$1 = h$2 < 0;
				h$2 === 0 ? i$1 = i$1.add(zt(v$5, r$2[g$2])) : u = u.add(zt(L$1, r$2[S]));
			}
			return {
				p: u,
				f: i$1
			};
		},
		wNAFUnsafe(n$2, r$2, o$4, s$1 = t.ZERO) {
			const { windows: a$1, windowSize: u } = Mt(n$2, e$1), i$1 = BigInt(2 ** n$2 - 1), D$1 = 2 ** n$2, c$3 = BigInt(n$2);
			for (let l$4 = 0; l$4 < a$1; l$4++) {
				const p$2 = l$4 * u;
				if (o$4 === Se) break;
				let w$3 = Number(o$4 & i$1);
				if (o$4 >>= c$3, w$3 > u && (w$3 -= D$1, o$4 += gt), w$3 === 0) continue;
				let h$2 = r$2[p$2 + Math.abs(w$3) - 1];
				w$3 < 0 && (h$2 = h$2.negate()), s$1 = s$1.add(h$2);
			}
			return s$1;
		},
		getPrecomputes(n$2, r$2, o$4) {
			let s$1 = qt.get(r$2);
			return s$1 || (s$1 = this.precomputeWindow(r$2, n$2), n$2 !== 1 && qt.set(r$2, o$4(s$1))), s$1;
		},
		wNAFCached(n$2, r$2, o$4) {
			const s$1 = $t(n$2);
			return this.wNAF(s$1, this.getPrecomputes(s$1, n$2, o$4), r$2);
		},
		wNAFCachedUnsafe(n$2, r$2, o$4, s$1) {
			const a$1 = $t(n$2);
			return a$1 === 1 ? this.unsafeLadder(n$2, r$2, s$1) : this.wNAFUnsafe(a$1, this.getPrecomputes(a$1, n$2, o$4), r$2, s$1);
		},
		setWindowSize(n$2, r$2) {
			ve(r$2, e$1), Ie.set(n$2, r$2), qt.delete(n$2);
		}
	};
}
function br(t, e$1, n$2, r$2) {
	if (dr(n$2, t), hr(r$2, e$1), n$2.length !== r$2.length) throw new Error("arrays of points and scalars must have equal length");
	const o$4 = t.ZERO, s$1 = tr(BigInt(n$2.length)), a$1 = s$1 > 12 ? s$1 - 3 : s$1 > 4 ? s$1 - 2 : s$1 ? 2 : 1, u = (1 << a$1) - 1, i$1 = new Array(u + 1).fill(o$4), D$1 = Math.floor((e$1.BITS - 1) / a$1) * a$1;
	let c$3 = o$4;
	for (let l$4 = D$1; l$4 >= 0; l$4 -= a$1) {
		i$1.fill(o$4);
		for (let w$3 = 0; w$3 < r$2.length; w$3++) {
			const h$2 = r$2[w$3], g$2 = Number(h$2 >> BigInt(l$4) & BigInt(u));
			i$1[g$2] = i$1[g$2].add(n$2[w$3]);
		}
		let p$2 = o$4;
		for (let w$3 = i$1.length - 1, h$2 = o$4; w$3 > 0; w$3--) h$2 = h$2.add(i$1[w$3]), p$2 = p$2.add(h$2);
		if (c$3 = c$3.add(p$2), l$4 !== 0) for (let w$3 = 0; w$3 < a$1; w$3++) c$3 = c$3.double();
	}
	return c$3;
}
function pr(t) {
	return ar(t.Fp), Ot(t, {
		n: "bigint",
		h: "bigint",
		Gx: "field",
		Gy: "field"
	}, {
		nBitLength: "isSafeInteger",
		nByteLength: "isSafeInteger"
	}), Object.freeze({
		...me(t.n, t.nBitLength),
		...t,
		p: t.Fp.ORDER
	});
}
var G = BigInt(0), j = BigInt(1), yt = BigInt(2), wr = BigInt(8), Er = { zip215: !0 };
function gr(t) {
	const e$1 = pr(t);
	return Ot(t, {
		hash: "function",
		a: "bigint",
		d: "bigint",
		randomBytes: "function"
	}, {
		adjustScalarBytes: "function",
		domain: "function",
		uvRatio: "function",
		mapToCurve: "function"
	}), Object.freeze({ ...e$1 });
}
function yr(t) {
	const e$1 = gr(t), { Fp: n$2, n: r$2, prehash: o$4, hash: s$1, randomBytes: a$1, nByteLength: u, h: i$1 } = e$1, D$1 = yt << BigInt(u * 8) - j, c$3 = n$2.create, l$4 = _e(e$1.n, e$1.nBitLength), p$2 = e$1.uvRatio || ((y$2, f$2) => {
		try {
			return {
				isValid: !0,
				value: n$2.sqrt(y$2 * n$2.inv(f$2))
			};
		} catch {
			return {
				isValid: !1,
				value: G
			};
		}
	}), w$3 = e$1.adjustScalarBytes || ((y$2) => y$2), h$2 = e$1.domain || ((y$2, f$2, b$2) => {
		if (Tt("phflag", b$2), f$2.length || b$2) throw new Error("Contexts/pre-hash are not supported");
		return y$2;
	});
	function g$2(y$2, f$2) {
		ft("coordinate " + y$2, f$2, G, D$1);
	}
	function S(y$2) {
		if (!(y$2 instanceof d$2)) throw new Error("ExtendedPoint expected");
	}
	const v$5 = xe((y$2, f$2) => {
		const { ex: b$2, ey: E$3, ez: B$1 } = y$2, C$1 = y$2.is0();
		f$2 ??= C$1 ? wr : n$2.inv(B$1);
		const A$1 = c$3(b$2 * f$2), U$1 = c$3(E$3 * f$2), _$1 = c$3(B$1 * f$2);
		if (C$1) return {
			x: G,
			y: j
		};
		if (_$1 !== j) throw new Error("invZ was invalid");
		return {
			x: A$1,
			y: U$1
		};
	}), L$1 = xe((y$2) => {
		const { a: f$2, d: b$2 } = e$1;
		if (y$2.is0()) throw new Error("bad point: ZERO");
		const { ex: E$3, ey: B$1, ez: C$1, et: A$1 } = y$2, U$1 = c$3(E$3 * E$3), _$1 = c$3(B$1 * B$1), T$1 = c$3(C$1 * C$1), $$1 = c$3(T$1 * T$1);
		if (c$3(T$1 * c$3(c$3(U$1 * f$2) + _$1)) !== c$3($$1 + c$3(b$2 * c$3(U$1 * _$1)))) throw new Error("bad point: equation left != right (1)");
		if (c$3(E$3 * B$1) !== c$3(C$1 * A$1)) throw new Error("bad point: equation left != right (2)");
		return !0;
	});
	class d$2 {
		constructor(f$2, b$2, E$3, B$1) {
			this.ex = f$2, this.ey = b$2, this.ez = E$3, this.et = B$1, g$2("x", f$2), g$2("y", b$2), g$2("z", E$3), g$2("t", B$1), Object.freeze(this);
		}
		get x() {
			return this.toAffine().x;
		}
		get y() {
			return this.toAffine().y;
		}
		static fromAffine(f$2) {
			if (f$2 instanceof d$2) throw new Error("extended point not allowed");
			const { x: b$2, y: E$3 } = f$2 || {};
			return g$2("x", b$2), g$2("y", E$3), new d$2(b$2, E$3, j, c$3(b$2 * E$3));
		}
		static normalizeZ(f$2) {
			const b$2 = n$2.invertBatch(f$2.map((E$3) => E$3.ez));
			return f$2.map((E$3, B$1) => E$3.toAffine(b$2[B$1])).map(d$2.fromAffine);
		}
		static msm(f$2, b$2) {
			return br(d$2, l$4, f$2, b$2);
		}
		_setWindowSize(f$2) {
			q$1.setWindowSize(this, f$2);
		}
		assertValidity() {
			L$1(this);
		}
		equals(f$2) {
			S(f$2);
			const { ex: b$2, ey: E$3, ez: B$1 } = this, { ex: C$1, ey: A$1, ez: U$1 } = f$2, _$1 = c$3(b$2 * U$1), T$1 = c$3(C$1 * B$1), $$1 = c$3(E$3 * U$1), R$1 = c$3(A$1 * B$1);
			return _$1 === T$1 && $$1 === R$1;
		}
		is0() {
			return this.equals(d$2.ZERO);
		}
		negate() {
			return new d$2(c$3(-this.ex), this.ey, this.ez, c$3(-this.et));
		}
		double() {
			const { a: f$2 } = e$1, { ex: b$2, ey: E$3, ez: B$1 } = this, C$1 = c$3(b$2 * b$2), A$1 = c$3(E$3 * E$3), U$1 = c$3(yt * c$3(B$1 * B$1)), _$1 = c$3(f$2 * C$1), T$1 = b$2 + E$3, $$1 = c$3(c$3(T$1 * T$1) - C$1 - A$1), R$1 = _$1 + A$1, V$1 = R$1 - U$1, Y$1 = _$1 - A$1, Z$1 = c$3($$1 * V$1), X$1 = c$3(R$1 * Y$1), et = c$3($$1 * Y$1);
			return new d$2(Z$1, X$1, c$3(V$1 * R$1), et);
		}
		add(f$2) {
			S(f$2);
			const { a: b$2, d: E$3 } = e$1, { ex: B$1, ey: C$1, ez: A$1, et: U$1 } = this, { ex: _$1, ey: T$1, ez: $$1, et: R$1 } = f$2;
			if (b$2 === BigInt(-1)) {
				const re$1 = c$3((C$1 - B$1) * (T$1 + _$1)), oe$1 = c$3((C$1 + B$1) * (T$1 - _$1)), mt = c$3(oe$1 - re$1);
				if (mt === G) return this.double();
				const se$1 = c$3(A$1 * yt * R$1), ie$1 = c$3(U$1 * yt * $$1), ue$1 = ie$1 + se$1, ce$1 = oe$1 + re$1, ae$1 = ie$1 - se$1, Dn = c$3(ue$1 * mt), dn = c$3(ce$1 * ae$1), hn = c$3(ue$1 * ae$1);
				return new d$2(Dn, dn, c$3(mt * ce$1), hn);
			}
			const V$1 = c$3(B$1 * _$1), Y$1 = c$3(C$1 * T$1), Z$1 = c$3(U$1 * E$3 * R$1), X$1 = c$3(A$1 * $$1), et = c$3((B$1 + C$1) * (_$1 + T$1) - V$1 - Y$1), pt = X$1 - Z$1, ee$1 = X$1 + Z$1, ne$1 = c$3(Y$1 - b$2 * V$1), un = c$3(et * pt), cn = c$3(ee$1 * ne$1), an = c$3(et * ne$1);
			return new d$2(un, cn, c$3(pt * ee$1), an);
		}
		subtract(f$2) {
			return this.add(f$2.negate());
		}
		wNAF(f$2) {
			return q$1.wNAFCached(this, f$2, d$2.normalizeZ);
		}
		multiply(f$2) {
			const b$2 = f$2;
			ft("scalar", b$2, j, r$2);
			const { p: E$3, f: B$1 } = this.wNAF(b$2);
			return d$2.normalizeZ([E$3, B$1])[0];
		}
		multiplyUnsafe(f$2, b$2 = d$2.ZERO) {
			const E$3 = f$2;
			return ft("scalar", E$3, G, r$2), E$3 === G ? F : this.is0() || E$3 === j ? this : q$1.wNAFCachedUnsafe(this, E$3, d$2.normalizeZ, b$2);
		}
		isSmallOrder() {
			return this.multiplyUnsafe(i$1).is0();
		}
		isTorsionFree() {
			return q$1.unsafeLadder(this, r$2).is0();
		}
		toAffine(f$2) {
			return v$5(this, f$2);
		}
		clearCofactor() {
			const { h: f$2 } = e$1;
			return f$2 === j ? this : this.multiplyUnsafe(f$2);
		}
		static fromHex(f$2, b$2 = !1) {
			const { d: E$3, a: B$1 } = e$1, C$1 = n$2.BYTES;
			f$2 = W("pointHex", f$2, C$1), Tt("zip215", b$2);
			const A$1 = f$2.slice(), U$1 = f$2[C$1 - 1];
			A$1[C$1 - 1] = U$1 & -129;
			const _$1 = Et(A$1);
			ft("pointHex.y", _$1, G, b$2 ? D$1 : n$2.ORDER);
			const $$1 = c$3(_$1 * _$1);
			let { isValid: Y$1, value: Z$1 } = p$2(c$3($$1 - j), c$3(E$3 * $$1 - B$1));
			if (!Y$1) throw new Error("Point.fromHex: invalid y coordinate");
			const X$1 = (Z$1 & j) === j, et = (U$1 & 128) !== 0;
			if (!b$2 && Z$1 === G && et) throw new Error("Point.fromHex: x=0 and x_0=1");
			return et !== X$1 && (Z$1 = c$3(-Z$1)), d$2.fromAffine({
				x: Z$1,
				y: _$1
			});
		}
		static fromPrivateKey(f$2) {
			return O$3(f$2).point;
		}
		toRawBytes() {
			const { x: f$2, y: b$2 } = this.toAffine(), E$3 = Nt(b$2, n$2.BYTES);
			return E$3[E$3.length - 1] |= f$2 & j ? 128 : 0, E$3;
		}
		toHex() {
			return Ft(this.toRawBytes());
		}
	}
	d$2.BASE = new d$2(e$1.Gx, e$1.Gy, j, c$3(e$1.Gx * e$1.Gy)), d$2.ZERO = new d$2(G, j, j, G);
	const { BASE: m$4, ZERO: F } = d$2, q$1 = lr(d$2, u * 8);
	function z$2(y$2) {
		return H(y$2, r$2);
	}
	function I(y$2) {
		return z$2(Et(y$2));
	}
	function O$3(y$2) {
		const f$2 = n$2.BYTES;
		y$2 = W("private key", y$2, f$2);
		const b$2 = W("hashed private key", s$1(y$2), 2 * f$2), E$3 = w$3(b$2.slice(0, f$2)), B$1 = b$2.slice(f$2, 2 * f$2), C$1 = I(E$3), A$1 = m$4.multiply(C$1);
		return {
			head: E$3,
			prefix: B$1,
			scalar: C$1,
			point: A$1,
			pointBytes: A$1.toRawBytes()
		};
	}
	function ot(y$2) {
		return O$3(y$2).pointBytes;
	}
	function tt(y$2 = new Uint8Array(), ...f$2) {
		return I(s$1(h$2(ye(...f$2), W("context", y$2), !!o$4)));
	}
	function st(y$2, f$2, b$2 = {}) {
		y$2 = W("message", y$2), o$4 && (y$2 = o$4(y$2));
		const { prefix: E$3, scalar: B$1, pointBytes: C$1 } = O$3(f$2), A$1 = tt(b$2.context, E$3, y$2), U$1 = m$4.multiply(A$1).toRawBytes(), T$1 = z$2(A$1 + tt(b$2.context, U$1, C$1, y$2) * B$1);
		ft("signature.s", T$1, G, r$2);
		return W("result", ye(U$1, Nt(T$1, n$2.BYTES)), n$2.BYTES * 2);
	}
	const at = Er;
	function Ct(y$2, f$2, b$2, E$3 = at) {
		const { context: B$1, zip215: C$1 } = E$3, A$1 = n$2.BYTES;
		y$2 = W("signature", y$2, 2 * A$1), f$2 = W("message", f$2), b$2 = W("publicKey", b$2, A$1), C$1 !== void 0 && Tt("zip215", C$1), o$4 && (f$2 = o$4(f$2));
		const U$1 = Et(y$2.slice(A$1, 2 * A$1));
		let _$1, T$1, $$1;
		try {
			_$1 = d$2.fromHex(b$2, C$1), T$1 = d$2.fromHex(y$2.slice(0, A$1), C$1), $$1 = m$4.multiplyUnsafe(U$1);
		} catch {
			return !1;
		}
		if (!C$1 && _$1.isSmallOrder()) return !1;
		const R$1 = tt(B$1, T$1.toRawBytes(), _$1.toRawBytes(), f$2);
		return T$1.add(_$1.multiplyUnsafe(R$1)).subtract($$1).clearCofactor().equals(d$2.ZERO);
	}
	return m$4._setWindowSize(8), {
		CURVE: e$1,
		getPublicKey: ot,
		sign: st,
		verify: Ct,
		ExtendedPoint: d$2,
		utils: {
			getExtendedPublicKey: O$3,
			randomPrivateKey: () => a$1(n$2.BYTES),
			precompute(y$2 = 8, f$2 = d$2.BASE) {
				return f$2._setWindowSize(y$2), f$2.multiply(BigInt(3)), f$2;
			}
		}
	};
}
var kt = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), Ue = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
var xr = BigInt(1), Te = BigInt(2);
var Br = BigInt(5), Cr = BigInt(8);
function Ar(t) {
	const e$1 = BigInt(10), n$2 = BigInt(20), r$2 = BigInt(40), o$4 = BigInt(80), s$1 = kt, u = t * t % s$1 * t % s$1, D$1 = J(J(u, Te, s$1) * u % s$1, xr, s$1) * t % s$1, c$3 = J(D$1, Br, s$1) * D$1 % s$1, l$4 = J(c$3, e$1, s$1) * c$3 % s$1, p$2 = J(l$4, n$2, s$1) * l$4 % s$1, w$3 = J(p$2, r$2, s$1) * p$2 % s$1;
	return {
		pow_p_5_8: J(J(J(J(w$3, o$4, s$1) * w$3 % s$1, o$4, s$1) * w$3 % s$1, e$1, s$1) * c$3 % s$1, Te, s$1) * t % s$1,
		b2: u
	};
}
function mr(t) {
	return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
function _r(t, e$1) {
	const n$2 = kt, r$2 = H(e$1 * e$1 * e$1, n$2), s$1 = Ar(t * H(r$2 * r$2 * e$1, n$2)).pow_p_5_8;
	let a$1 = H(t * r$2 * s$1, n$2);
	const u = H(e$1 * a$1 * a$1, n$2), i$1 = a$1, D$1 = H(a$1 * Ue, n$2), c$3 = u === t, l$4 = u === H(-t, n$2), p$2 = u === H(-t * Ue, n$2);
	return c$3 && (a$1 = i$1), (l$4 || p$2) && (a$1 = D$1), ur(a$1, n$2) && (a$1 = H(-a$1, n$2)), {
		isValid: c$3 || l$4,
		value: a$1
	};
}
var Sr = (() => _e(kt, void 0, !0))(), vr = (() => ({
	a: BigInt(-1),
	d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
	Fp: Sr,
	n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
	h: Cr,
	Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
	Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
	hash: Kn,
	randomBytes: he,
	adjustScalarBytes: mr,
	uvRatio: _r
}))(), Rt = (() => yr(vr))(), jt = "EdDSA", Dt = "base64url", Gt = "utf8", xt = "utf8", dt = "base58btc";
function Xt(t) {
	return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Le(t = 0) {
	return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Xt(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Oe(t, e$1) {
	e$1 || (e$1 = t.reduce((o$4, s$1) => o$4 + s$1.length, 0));
	const n$2 = Le(e$1);
	let r$2 = 0;
	for (const o$4 of t) n$2.set(o$4, r$2), r$2 += o$4.length;
	return Xt(n$2);
}
function Ir(t, e$1) {
	if (t.length >= 255) throw new TypeError("Alphabet too long");
	for (var n$2 = new Uint8Array(256), r$2 = 0; r$2 < n$2.length; r$2++) n$2[r$2] = 255;
	for (var o$4 = 0; o$4 < t.length; o$4++) {
		var s$1 = t.charAt(o$4), a$1 = s$1.charCodeAt(0);
		if (n$2[a$1] !== 255) throw new TypeError(s$1 + " is ambiguous");
		n$2[a$1] = o$4;
	}
	var u = t.length, i$1 = t.charAt(0), D$1 = Math.log(u) / Math.log(256), c$3 = Math.log(256) / Math.log(u);
	function l$4(h$2) {
		if (h$2 instanceof Uint8Array || (ArrayBuffer.isView(h$2) ? h$2 = new Uint8Array(h$2.buffer, h$2.byteOffset, h$2.byteLength) : Array.isArray(h$2) && (h$2 = Uint8Array.from(h$2))), !(h$2 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
		if (h$2.length === 0) return "";
		for (var g$2 = 0, S = 0, v$5 = 0, L$1 = h$2.length; v$5 !== L$1 && h$2[v$5] === 0;) v$5++, g$2++;
		for (var d$2 = (L$1 - v$5) * c$3 + 1 >>> 0, m$4 = new Uint8Array(d$2); v$5 !== L$1;) {
			for (var F = h$2[v$5], q$1 = 0, z$2 = d$2 - 1; (F !== 0 || q$1 < S) && z$2 !== -1; z$2--, q$1++) F += 256 * m$4[z$2] >>> 0, m$4[z$2] = F % u >>> 0, F = F / u >>> 0;
			if (F !== 0) throw new Error("Non-zero carry");
			S = q$1, v$5++;
		}
		for (var I = d$2 - S; I !== d$2 && m$4[I] === 0;) I++;
		for (var O$3 = i$1.repeat(g$2); I < d$2; ++I) O$3 += t.charAt(m$4[I]);
		return O$3;
	}
	function p$2(h$2) {
		if (typeof h$2 != "string") throw new TypeError("Expected String");
		if (h$2.length === 0) return new Uint8Array();
		var g$2 = 0;
		if (h$2[g$2] !== " ") {
			for (var S = 0, v$5 = 0; h$2[g$2] === i$1;) S++, g$2++;
			for (var L$1 = (h$2.length - g$2) * D$1 + 1 >>> 0, d$2 = new Uint8Array(L$1); h$2[g$2];) {
				var m$4 = n$2[h$2.charCodeAt(g$2)];
				if (m$4 === 255) return;
				for (var F = 0, q$1 = L$1 - 1; (m$4 !== 0 || F < v$5) && q$1 !== -1; q$1--, F++) m$4 += u * d$2[q$1] >>> 0, d$2[q$1] = m$4 % 256 >>> 0, m$4 = m$4 / 256 >>> 0;
				if (m$4 !== 0) throw new Error("Non-zero carry");
				v$5 = F, g$2++;
			}
			if (h$2[g$2] !== " ") {
				for (var z$2 = L$1 - v$5; z$2 !== L$1 && d$2[z$2] === 0;) z$2++;
				for (var I = new Uint8Array(S + (L$1 - z$2)), O$3 = S; z$2 !== L$1;) I[O$3++] = d$2[z$2++];
				return I;
			}
		}
	}
	function w$3(h$2) {
		var g$2 = p$2(h$2);
		if (g$2) return g$2;
		throw new Error(`Non-${e$1} character`);
	}
	return {
		encode: l$4,
		decodeUnsafe: p$2,
		decode: w$3
	};
}
var Tr = Ir;
var He = (t) => {
	if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
	if (t instanceof ArrayBuffer) return new Uint8Array(t);
	if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
	throw new Error("Unknown type, must be binary type");
}, Fr = (t) => new TextEncoder().encode(t), Nr = (t) => new TextDecoder().decode(t);
var Lr = class {
	constructor(e$1, n$2, r$2) {
		this.name = e$1, this.prefix = n$2, this.baseEncode = r$2;
	}
	encode(e$1) {
		if (e$1 instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e$1)}`;
		throw Error("Unknown type, must be binary type");
	}
};
var Or = class {
	constructor(e$1, n$2, r$2) {
		if (this.name = e$1, this.prefix = n$2, n$2.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
		this.prefixCodePoint = n$2.codePointAt(0), this.baseDecode = r$2;
	}
	decode(e$1) {
		if (typeof e$1 == "string") {
			if (e$1.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e$1)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
			return this.baseDecode(e$1.slice(this.prefix.length));
		} else throw Error("Can only multibase decode strings");
	}
	or(e$1) {
		return ze(this, e$1);
	}
};
var Hr = class {
	constructor(e$1) {
		this.decoders = e$1;
	}
	or(e$1) {
		return ze(this, e$1);
	}
	decode(e$1) {
		const n$2 = e$1[0], r$2 = this.decoders[n$2];
		if (r$2) return r$2.decode(e$1);
		throw RangeError(`Unable to decode multibase string ${JSON.stringify(e$1)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
	}
};
var ze = (t, e$1) => new Hr({
	...t.decoders || { [t.prefix]: t },
	...e$1.decoders || { [e$1.prefix]: e$1 }
});
var zr = class {
	constructor(e$1, n$2, r$2, o$4) {
		this.name = e$1, this.prefix = n$2, this.baseEncode = r$2, this.baseDecode = o$4, this.encoder = new Lr(e$1, n$2, r$2), this.decoder = new Or(e$1, n$2, o$4);
	}
	encode(e$1) {
		return this.encoder.encode(e$1);
	}
	decode(e$1) {
		return this.decoder.decode(e$1);
	}
};
var Bt = ({ name: t, prefix: e$1, encode: n$2, decode: r$2 }) => new zr(t, e$1, n$2, r$2), ht = ({ prefix: t, name: e$1, alphabet: n$2 }) => {
	const { encode: r$2, decode: o$4 } = Tr(n$2, e$1);
	return Bt({
		prefix: t,
		name: e$1,
		encode: r$2,
		decode: (s$1) => He(o$4(s$1))
	});
}, Mr = (t, e$1, n$2, r$2) => {
	const o$4 = {};
	for (let c$3 = 0; c$3 < e$1.length; ++c$3) o$4[e$1[c$3]] = c$3;
	let s$1 = t.length;
	for (; t[s$1 - 1] === "=";) --s$1;
	const a$1 = new Uint8Array(s$1 * n$2 / 8 | 0);
	let u = 0, i$1 = 0, D$1 = 0;
	for (let c$3 = 0; c$3 < s$1; ++c$3) {
		const l$4 = o$4[t[c$3]];
		if (l$4 === void 0) throw new SyntaxError(`Non-${r$2} character`);
		i$1 = i$1 << n$2 | l$4, u += n$2, u >= 8 && (u -= 8, a$1[D$1++] = 255 & i$1 >> u);
	}
	if (u >= n$2 || 255 & i$1 << 8 - u) throw new SyntaxError("Unexpected end of data");
	return a$1;
}, qr = (t, e$1, n$2) => {
	const r$2 = e$1[e$1.length - 1] === "=", o$4 = (1 << n$2) - 1;
	let s$1 = "", a$1 = 0, u = 0;
	for (let i$1 = 0; i$1 < t.length; ++i$1) for (u = u << 8 | t[i$1], a$1 += 8; a$1 > n$2;) a$1 -= n$2, s$1 += e$1[o$4 & u >> a$1];
	if (a$1 && (s$1 += e$1[o$4 & u << n$2 - a$1]), r$2) for (; s$1.length * n$2 & 7;) s$1 += "=";
	return s$1;
}, k = ({ name: t, prefix: e$1, bitsPerChar: n$2, alphabet: r$2 }) => Bt({
	prefix: e$1,
	name: t,
	encode(o$4) {
		return qr(o$4, r$2, n$2);
	},
	decode(o$4) {
		return Mr(o$4, r$2, n$2, t);
	}
}), $r = Bt({
	prefix: "\0",
	name: "identity",
	encode: (t) => Nr(t),
	decode: (t) => Fr(t)
});
var kr = Object.freeze({
	__proto__: null,
	identity: $r
});
var Rr = k({
	prefix: "0",
	name: "base2",
	alphabet: "01",
	bitsPerChar: 1
});
var jr = Object.freeze({
	__proto__: null,
	base2: Rr
});
var Zr = k({
	prefix: "7",
	name: "base8",
	alphabet: "01234567",
	bitsPerChar: 3
});
var Gr = Object.freeze({
	__proto__: null,
	base8: Zr
});
var Vr = ht({
	prefix: "9",
	name: "base10",
	alphabet: "0123456789"
});
var Yr = Object.freeze({
	__proto__: null,
	base10: Vr
});
var Jr = k({
	prefix: "f",
	name: "base16",
	alphabet: "0123456789abcdef",
	bitsPerChar: 4
}), Kr = k({
	prefix: "F",
	name: "base16upper",
	alphabet: "0123456789ABCDEF",
	bitsPerChar: 4
});
var Wr = Object.freeze({
	__proto__: null,
	base16: Jr,
	base16upper: Kr
});
var Xr = k({
	prefix: "b",
	name: "base32",
	alphabet: "abcdefghijklmnopqrstuvwxyz234567",
	bitsPerChar: 5
}), Pr = k({
	prefix: "B",
	name: "base32upper",
	alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
	bitsPerChar: 5
}), Qr = k({
	prefix: "c",
	name: "base32pad",
	alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
	bitsPerChar: 5
}), to = k({
	prefix: "C",
	name: "base32padupper",
	alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
	bitsPerChar: 5
}), eo = k({
	prefix: "v",
	name: "base32hex",
	alphabet: "0123456789abcdefghijklmnopqrstuv",
	bitsPerChar: 5
}), no = k({
	prefix: "V",
	name: "base32hexupper",
	alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
	bitsPerChar: 5
}), ro = k({
	prefix: "t",
	name: "base32hexpad",
	alphabet: "0123456789abcdefghijklmnopqrstuv=",
	bitsPerChar: 5
}), oo = k({
	prefix: "T",
	name: "base32hexpadupper",
	alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
	bitsPerChar: 5
}), so = k({
	prefix: "h",
	name: "base32z",
	alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
	bitsPerChar: 5
});
var io = Object.freeze({
	__proto__: null,
	base32: Xr,
	base32upper: Pr,
	base32pad: Qr,
	base32padupper: to,
	base32hex: eo,
	base32hexupper: no,
	base32hexpad: ro,
	base32hexpadupper: oo,
	base32z: so
});
var uo = ht({
	prefix: "k",
	name: "base36",
	alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), co = ht({
	prefix: "K",
	name: "base36upper",
	alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var ao = Object.freeze({
	__proto__: null,
	base36: uo,
	base36upper: co
});
var fo = ht({
	name: "base58btc",
	prefix: "z",
	alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), Do = ht({
	name: "base58flickr",
	prefix: "Z",
	alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var ho = Object.freeze({
	__proto__: null,
	base58btc: fo,
	base58flickr: Do
});
var lo = k({
	prefix: "m",
	name: "base64",
	alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
	bitsPerChar: 6
}), bo = k({
	prefix: "M",
	name: "base64pad",
	alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	bitsPerChar: 6
}), po = k({
	prefix: "u",
	name: "base64url",
	alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
	bitsPerChar: 6
}), wo = k({
	prefix: "U",
	name: "base64urlpad",
	alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
	bitsPerChar: 6
});
var Eo = Object.freeze({
	__proto__: null,
	base64: lo,
	base64pad: bo,
	base64url: po,
	base64urlpad: wo
});
var Me = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), go = Me.reduce((t, e$1, n$2) => (t[n$2] = e$1, t), []), yo = Me.reduce((t, e$1, n$2) => (t[e$1.codePointAt(0)] = n$2, t), []);
function xo(t) {
	return t.reduce((e$1, n$2) => (e$1 += go[n$2], e$1), "");
}
function Bo(t) {
	const e$1 = [];
	for (const n$2 of t) {
		const r$2 = yo[n$2.codePointAt(0)];
		if (r$2 === void 0) throw new Error(`Non-base256emoji character: ${n$2}`);
		e$1.push(r$2);
	}
	return new Uint8Array(e$1);
}
var Co = Bt({
	prefix: "🚀",
	name: "base256emoji",
	encode: xo,
	decode: Bo
});
var Ao = Object.freeze({
	__proto__: null,
	base256emoji: Co
}), mo = $e, qe = 128, So = -128, vo = Math.pow(2, 31);
function $e(t, e$1, n$2) {
	e$1 = e$1 || [], n$2 = n$2 || 0;
	for (var r$2 = n$2; t >= vo;) e$1[n$2++] = t & 255 | qe, t /= 128;
	for (; t & So;) e$1[n$2++] = t & 255 | qe, t >>>= 7;
	return e$1[n$2] = t | 0, $e.bytes = n$2 - r$2 + 1, e$1;
}
var Io = Pt, Uo = 128, ke = 127;
function Pt(t, r$2) {
	var n$2 = 0, r$2 = r$2 || 0, o$4 = 0, s$1 = r$2, a$1, u = t.length;
	do {
		if (s$1 >= u) throw Pt.bytes = 0, /* @__PURE__ */ new RangeError("Could not decode varint");
		a$1 = t[s$1++], n$2 += o$4 < 28 ? (a$1 & ke) << o$4 : (a$1 & ke) * Math.pow(2, o$4), o$4 += 7;
	} while (a$1 >= Uo);
	return Pt.bytes = s$1 - r$2, n$2;
}
var To = Math.pow(2, 7), Fo = Math.pow(2, 14), No = Math.pow(2, 21), Lo = Math.pow(2, 28), Oo = Math.pow(2, 35), Ho = Math.pow(2, 42), zo = Math.pow(2, 49), Mo = Math.pow(2, 56), qo = Math.pow(2, 63), $o = function(t) {
	return t < To ? 1 : t < Fo ? 2 : t < No ? 3 : t < Lo ? 4 : t < Oo ? 5 : t < Ho ? 6 : t < zo ? 7 : t < Mo ? 8 : t < qo ? 9 : 10;
}, Re = {
	encode: mo,
	decode: Io,
	encodingLength: $o
};
var je = (t, e$1, n$2 = 0) => (Re.encode(t, e$1, n$2), e$1), Ze = (t) => Re.encodingLength(t), Qt = (t, e$1) => {
	const n$2 = e$1.byteLength, r$2 = Ze(t), o$4 = r$2 + Ze(n$2), s$1 = new Uint8Array(o$4 + n$2);
	return je(t, s$1, 0), je(n$2, s$1, r$2), s$1.set(e$1, o$4), new Ro(t, n$2, e$1, s$1);
};
var Ro = class {
	constructor(e$1, n$2, r$2, o$4) {
		this.code = e$1, this.size = n$2, this.digest = r$2, this.bytes = o$4;
	}
};
var Ge = ({ name: t, code: e$1, encode: n$2 }) => new jo(t, e$1, n$2);
var jo = class {
	constructor(e$1, n$2, r$2) {
		this.name = e$1, this.code = n$2, this.encode = r$2;
	}
	digest(e$1) {
		if (e$1 instanceof Uint8Array) {
			const n$2 = this.encode(e$1);
			return n$2 instanceof Uint8Array ? Qt(this.code, n$2) : n$2.then((r$2) => Qt(this.code, r$2));
		} else throw Error("Unknown type, must be binary type");
	}
};
var Ve = (t) => async (e$1) => new Uint8Array(await crypto.subtle.digest(t, e$1)), Zo = Ge({
	name: "sha2-256",
	code: 18,
	encode: Ve("SHA-256")
}), Go = Ge({
	name: "sha2-512",
	code: 19,
	encode: Ve("SHA-512")
});
var Vo = Object.freeze({
	__proto__: null,
	sha256: Zo,
	sha512: Go
});
var Ye = 0, Yo = "identity", Je = He, Jo = (t) => Qt(Ye, Je(t)), Ko = {
	code: Ye,
	name: Yo,
	encode: Je,
	digest: Jo
};
var Wo = Object.freeze({
	__proto__: null,
	identity: Ko
});
new TextEncoder(), new TextDecoder();
var Ke = {
	...kr,
	...jr,
	...Gr,
	...Yr,
	...Wr,
	...io,
	...ao,
	...ho,
	...Eo,
	...Ao
};
({
	...Vo,
	...Wo
});
function We(t, e$1, n$2, r$2) {
	return {
		name: t,
		prefix: e$1,
		encoder: {
			name: t,
			prefix: e$1,
			encode: n$2
		},
		decoder: { decode: r$2 }
	};
}
var Xe = We("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), te = We("ascii", "a", (t) => {
	let e$1 = "a";
	for (let n$2 = 0; n$2 < t.length; n$2++) e$1 += String.fromCharCode(t[n$2]);
	return e$1;
}, (t) => {
	t = t.substring(1);
	const e$1 = Le(t.length);
	for (let n$2 = 0; n$2 < t.length; n$2++) e$1[n$2] = t.charCodeAt(n$2);
	return e$1;
}), Pe = {
	utf8: Xe,
	"utf-8": Xe,
	hex: Ke.base16,
	latin1: te,
	ascii: te,
	binary: te,
	...Ke
};
function ct(t, e$1 = "utf8") {
	const n$2 = Pe[e$1];
	if (!n$2) throw new Error(`Unsupported encoding "${e$1}"`);
	return (e$1 === "utf8" || e$1 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : n$2.encoder.encode(t).substring(1);
}
function rt(t, e$1 = "utf8") {
	const n$2 = Pe[e$1];
	if (!n$2) throw new Error(`Unsupported encoding "${e$1}"`);
	return (e$1 === "utf8" || e$1 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Xt(globalThis.Buffer.from(t, "utf-8")) : n$2.decoder.decode(`${n$2.prefix}${t}`);
}
function lt(t) {
	return safeJsonParse(ct(rt(t, Dt), Gt));
}
function bt(t) {
	return ct(rt(safeJsonStringify(t), Gt), Dt);
}
function Qe(t) {
	return [
		"did",
		"key",
		"z" + ct(Oe([rt("K36", dt), t]), dt)
	].join(":");
}
function en(t) {
	return ct(t, Dt);
}
function nn(t) {
	return rt(t, Dt);
}
function rn(t) {
	return rt([bt(t.header), bt(t.payload)].join("."), xt);
}
function on(t) {
	return [
		bt(t.header),
		bt(t.payload),
		en(t.signature)
	].join(".");
}
function sn(t) {
	const e$1 = t.split(".");
	return {
		header: lt(e$1[0]),
		payload: lt(e$1[1]),
		signature: nn(e$1[2]),
		data: rt(e$1.slice(0, 2).join("."), xt)
	};
}
function Po(t = he(32)) {
	const e$1 = Rt.getPublicKey(t);
	return {
		secretKey: Oe([t, e$1]),
		publicKey: e$1
	};
}
async function Qo(t, e$1, n$2, r$2, o$4 = (0, import_cjs$1.fromMiliseconds)(Date.now())) {
	const s$1 = {
		alg: jt,
		typ: "JWT"
	}, i$1 = {
		iss: Qe(r$2.publicKey),
		sub: t,
		aud: e$1,
		iat: o$4,
		exp: o$4 + n$2
	}, D$1 = rn({
		header: s$1,
		payload: i$1
	});
	return on({
		header: s$1,
		payload: i$1,
		signature: Rt.sign(D$1, r$2.secretKey.slice(0, 32))
	});
}
var require_cjs$2 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getLocalStorage = exports.getLocalStorageOrThrow = exports.getCrypto = exports.getCryptoOrThrow = exports.getLocation = exports.getLocationOrThrow = exports.getNavigator = exports.getNavigatorOrThrow = exports.getDocument = exports.getDocumentOrThrow = exports.getFromWindowOrThrow = exports.getFromWindow = void 0;
	function getFromWindow(name$1) {
		let res = void 0;
		if (typeof window !== "undefined" && typeof window[name$1] !== "undefined") res = window[name$1];
		return res;
	}
	exports.getFromWindow = getFromWindow;
	function getFromWindowOrThrow(name$1) {
		const res = getFromWindow(name$1);
		if (!res) throw new Error(`${name$1} is not defined in Window`);
		return res;
	}
	exports.getFromWindowOrThrow = getFromWindowOrThrow;
	function getDocumentOrThrow() {
		return getFromWindowOrThrow("document");
	}
	exports.getDocumentOrThrow = getDocumentOrThrow;
	function getDocument() {
		return getFromWindow("document");
	}
	exports.getDocument = getDocument;
	function getNavigatorOrThrow() {
		return getFromWindowOrThrow("navigator");
	}
	exports.getNavigatorOrThrow = getNavigatorOrThrow;
	function getNavigator() {
		return getFromWindow("navigator");
	}
	exports.getNavigator = getNavigator;
	function getLocationOrThrow() {
		return getFromWindowOrThrow("location");
	}
	exports.getLocationOrThrow = getLocationOrThrow;
	function getLocation() {
		return getFromWindow("location");
	}
	exports.getLocation = getLocation;
	function getCryptoOrThrow() {
		return getFromWindowOrThrow("crypto");
	}
	exports.getCryptoOrThrow = getCryptoOrThrow;
	function getCrypto() {
		return getFromWindow("crypto");
	}
	exports.getCrypto = getCrypto;
	function getLocalStorageOrThrow() {
		return getFromWindowOrThrow("localStorage");
	}
	exports.getLocalStorageOrThrow = getLocalStorageOrThrow;
	function getLocalStorage() {
		return getFromWindow("localStorage");
	}
	exports.getLocalStorage = getLocalStorage;
}));
var require_cjs$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getWindowMetadata = void 0;
	var window_getters_1 = require_cjs$2();
	function getWindowMetadata() {
		let doc;
		let loc;
		try {
			doc = window_getters_1.getDocumentOrThrow();
			loc = window_getters_1.getLocationOrThrow();
		} catch (e$1) {
			return null;
		}
		function getIcons() {
			const links = doc.getElementsByTagName("link");
			const icons = [];
			for (let i$1 = 0; i$1 < links.length; i$1++) {
				const link = links[i$1];
				const rel = link.getAttribute("rel");
				if (rel) {
					if (rel.toLowerCase().indexOf("icon") > -1) {
						const href = link.getAttribute("href");
						if (href) if (href.toLowerCase().indexOf("https:") === -1 && href.toLowerCase().indexOf("http:") === -1 && href.indexOf("//") !== 0) {
							let absoluteHref = loc.protocol + "//" + loc.host;
							if (href.indexOf("/") === 0) absoluteHref += href;
							else {
								const path = loc.pathname.split("/");
								path.pop();
								const finalPath = path.join("/");
								absoluteHref += finalPath + "/" + href;
							}
							icons.push(absoluteHref);
						} else if (href.indexOf("//") === 0) {
							const absoluteUrl = loc.protocol + href;
							icons.push(absoluteUrl);
						} else icons.push(href);
					}
				}
			}
			return icons;
		}
		function getWindowMetadataOfAny(...args) {
			const metaTags = doc.getElementsByTagName("meta");
			for (let i$1 = 0; i$1 < metaTags.length; i$1++) {
				const tag = metaTags[i$1];
				const attributes = [
					"itemprop",
					"property",
					"name"
				].map((target) => tag.getAttribute(target)).filter((attr) => {
					if (attr) return args.includes(attr);
					return false;
				});
				if (attributes.length && attributes) {
					const content = tag.getAttribute("content");
					if (content) return content;
				}
			}
			return "";
		}
		function getName() {
			let name$2 = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
			if (!name$2) name$2 = doc.title;
			return name$2;
		}
		function getDescription() {
			return getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
		}
		const name$1 = getName();
		return {
			description: getDescription(),
			url: loc.origin,
			icons: getIcons(),
			name: name$1
		};
	}
	exports.getWindowMetadata = getWindowMetadata;
}));
const version$1 = "0.1.1";
function getVersion() {
	return version$1;
}
var BaseError = class BaseError extends Error {
	constructor(shortMessage, options = {}) {
		const details = (() => {
			if (options.cause instanceof BaseError) {
				if (options.cause.details) return options.cause.details;
				if (options.cause.shortMessage) return options.cause.shortMessage;
			}
			if (options.cause && "details" in options.cause && typeof options.cause.details === "string") return options.cause.details;
			if (options.cause?.message) return options.cause.message;
			return options.details;
		})();
		const docsPath = (() => {
			if (options.cause instanceof BaseError) return options.cause.docsPath || options.docsPath;
			return options.docsPath;
		})();
		const docs = `https://oxlib.sh${docsPath ?? ""}`;
		const message = [
			shortMessage || "An error occurred.",
			...options.metaMessages ? ["", ...options.metaMessages] : [],
			...details || docsPath ? [
				"",
				details ? `Details: ${details}` : void 0,
				docsPath ? `See: ${docs}` : void 0
			] : []
		].filter((x$3) => typeof x$3 === "string").join("\n");
		super(message, options.cause ? { cause: options.cause } : void 0);
		Object.defineProperty(this, "details", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		Object.defineProperty(this, "docs", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		Object.defineProperty(this, "docsPath", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		Object.defineProperty(this, "shortMessage", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		Object.defineProperty(this, "cause", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "BaseError"
		});
		Object.defineProperty(this, "version", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: `ox@${getVersion()}`
		});
		this.cause = options.cause;
		this.details = details;
		this.docs = docs;
		this.docsPath = docsPath;
		this.shortMessage = shortMessage;
	}
	walk(fn) {
		return walk(this, fn);
	}
};
function walk(err, fn) {
	if (fn?.(err)) return err;
	if (err && typeof err === "object" && "cause" in err && err.cause) return walk(err.cause, fn);
	return fn ? null : err;
}
function assertSize$1(bytes, size_) {
	if (size(bytes) > size_) throw new SizeOverflowError({
		givenSize: size(bytes),
		maxSize: size_
	});
}
const charCodeMap = {
	zero: 48,
	nine: 57,
	A: 65,
	F: 70,
	a: 97,
	f: 102
};
function charCodeToBase16(char) {
	if (char >= charCodeMap.zero && char <= charCodeMap.nine) return char - charCodeMap.zero;
	if (char >= charCodeMap.A && char <= charCodeMap.F) return char - (charCodeMap.A - 10);
	if (char >= charCodeMap.a && char <= charCodeMap.f) return char - (charCodeMap.a - 10);
}
function pad$1(bytes, options = {}) {
	const { dir, size: size$2 = 32 } = options;
	if (size$2 === 0) return bytes;
	if (bytes.length > size$2) throw new SizeExceedsPaddingSizeError({
		size: bytes.length,
		targetSize: size$2,
		type: "Bytes"
	});
	const paddedBytes = new Uint8Array(size$2);
	for (let i$1 = 0; i$1 < size$2; i$1++) {
		const padEnd = dir === "right";
		paddedBytes[padEnd ? i$1 : size$2 - i$1 - 1] = bytes[padEnd ? i$1 : bytes.length - i$1 - 1];
	}
	return paddedBytes;
}
function assertSize(hex$1, size_) {
	if (size$1(hex$1) > size_) throw new SizeOverflowError$1({
		givenSize: size$1(hex$1),
		maxSize: size_
	});
}
function assertStartOffset(value, start) {
	if (typeof start === "number" && start > 0 && start > size$1(value) - 1) throw new SliceOffsetOutOfBoundsError({
		offset: start,
		position: "start",
		size: size$1(value)
	});
}
function assertEndOffset(value, start, end) {
	if (typeof start === "number" && typeof end === "number" && size$1(value) !== end - start) throw new SliceOffsetOutOfBoundsError({
		offset: end,
		position: "end",
		size: size$1(value)
	});
}
function pad(hex_, options = {}) {
	const { dir, size: size$2 = 32 } = options;
	if (size$2 === 0) return hex_;
	const hex$1 = hex_.replace("0x", "");
	if (hex$1.length > size$2 * 2) throw new SizeExceedsPaddingSizeError$1({
		size: Math.ceil(hex$1.length / 2),
		targetSize: size$2,
		type: "Hex"
	});
	return `0x${hex$1[dir === "right" ? "padEnd" : "padStart"](size$2 * 2, "0")}`;
}
var bigIntSuffix = "#__bigint";
function stringify(value, replacer, space) {
	return JSON.stringify(value, (key, value$1) => {
		if (typeof replacer === "function") return replacer(key, value$1);
		if (typeof value$1 === "bigint") return value$1.toString() + bigIntSuffix;
		return value$1;
	}, space);
}
var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_v, i$1) => i$1.toString(16).padStart(2, "0"));
function assert$3(value, options = {}) {
	const { strict = false } = options;
	if (!value) throw new InvalidHexTypeError(value);
	if (typeof value !== "string") throw new InvalidHexTypeError(value);
	if (strict) {
		if (!/^0x[0-9a-fA-F]*$/.test(value)) throw new InvalidHexValueError(value);
	}
	if (!value.startsWith("0x")) throw new InvalidHexValueError(value);
}
function concat$1(...values) {
	return `0x${values.reduce((acc, x$3) => acc + x$3.replace("0x", ""), "")}`;
}
function from$5(value) {
	if (value instanceof Uint8Array) return fromBytes$1(value);
	if (Array.isArray(value)) return fromBytes$1(new Uint8Array(value));
	return value;
}
function fromBytes$1(value, options = {}) {
	let string$1 = "";
	for (let i$1 = 0; i$1 < value.length; i$1++) string$1 += hexes[value[i$1]];
	const hex$1 = `0x${string$1}`;
	if (typeof options.size === "number") {
		assertSize(hex$1, options.size);
		return padRight$1(hex$1, options.size);
	}
	return hex$1;
}
function fromNumber(value, options = {}) {
	const { signed, size: size$2 } = options;
	const value_ = BigInt(value);
	let maxValue;
	if (size$2) if (signed) maxValue = (1n << BigInt(size$2) * 8n - 1n) - 1n;
	else maxValue = 2n ** (BigInt(size$2) * 8n) - 1n;
	else if (typeof value === "number") maxValue = BigInt(Number.MAX_SAFE_INTEGER);
	const minValue = typeof maxValue === "bigint" && signed ? -maxValue - 1n : 0;
	if (maxValue && value_ > maxValue || value_ < minValue) {
		const suffix = typeof value === "bigint" ? "n" : "";
		throw new IntegerOutOfRangeError({
			max: maxValue ? `${maxValue}${suffix}` : void 0,
			min: `${minValue}${suffix}`,
			signed,
			size: size$2,
			value: `${value}${suffix}`
		});
	}
	const hex$1 = `0x${(signed && value_ < 0 ? (1n << BigInt(size$2 * 8)) + BigInt(value_) : value_).toString(16)}`;
	if (size$2) return padLeft(hex$1, size$2);
	return hex$1;
}
function padLeft(value, size$2) {
	return pad(value, {
		dir: "left",
		size: size$2
	});
}
function padRight$1(value, size$2) {
	return pad(value, {
		dir: "right",
		size: size$2
	});
}
function slice(value, start, end, options = {}) {
	const { strict } = options;
	assertStartOffset(value, start);
	const value_ = `0x${value.replace("0x", "").slice((start ?? 0) * 2, (end ?? value.length) * 2)}`;
	if (strict) assertEndOffset(value_, start, end);
	return value_;
}
function size$1(value) {
	return Math.ceil((value.length - 2) / 2);
}
function validate$1(value, options = {}) {
	const { strict = false } = options;
	try {
		assert$3(value, { strict });
		return true;
	} catch {
		return false;
	}
}
var IntegerOutOfRangeError = class extends BaseError {
	constructor({ max, min, signed, size: size$2, value }) {
		super(`Number \`${value}\` is not in safe${size$2 ? ` ${size$2 * 8}-bit` : ""}${signed ? " signed" : " unsigned"} integer range ${max ? `(\`${min}\` to \`${max}\`)` : `(above \`${min}\`)`}`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Hex.IntegerOutOfRangeError"
		});
	}
};
var InvalidHexTypeError = class extends BaseError {
	constructor(value) {
		super(`Value \`${typeof value === "object" ? stringify(value) : value}\` of type \`${typeof value}\` is an invalid hex type.`, { metaMessages: ["Hex types must be represented as `\"0x${string}\"`."] });
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Hex.InvalidHexTypeError"
		});
	}
};
var InvalidHexValueError = class extends BaseError {
	constructor(value) {
		super(`Value \`${value}\` is an invalid hex value.`, { metaMessages: ["Hex values must start with `\"0x\"` and contain only hexadecimal characters (0-9, a-f, A-F)."] });
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Hex.InvalidHexValueError"
		});
	}
};
var SizeOverflowError$1 = class extends BaseError {
	constructor({ givenSize, maxSize }) {
		super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Hex.SizeOverflowError"
		});
	}
};
var SliceOffsetOutOfBoundsError = class extends BaseError {
	constructor({ offset, position, size: size$2 }) {
		super(`Slice ${position === "start" ? "starting" : "ending"} at offset \`${offset}\` is out-of-bounds (size: \`${size$2}\`).`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Hex.SliceOffsetOutOfBoundsError"
		});
	}
};
var SizeExceedsPaddingSizeError$1 = class extends BaseError {
	constructor({ size: size$2, targetSize, type }) {
		super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size$2}\`) exceeds padding size (\`${targetSize}\`).`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Hex.SizeExceedsPaddingSizeError"
		});
	}
};
var encoder = /* @__PURE__ */ new TextEncoder();
function assert$2(value) {
	if (value instanceof Uint8Array) return;
	if (!value) throw new InvalidBytesTypeError(value);
	if (typeof value !== "object") throw new InvalidBytesTypeError(value);
	if (!("BYTES_PER_ELEMENT" in value)) throw new InvalidBytesTypeError(value);
	if (value.BYTES_PER_ELEMENT !== 1 || value.constructor.name !== "Uint8Array") throw new InvalidBytesTypeError(value);
}
function from$4(value) {
	if (value instanceof Uint8Array) return value;
	if (typeof value === "string") return fromHex$2(value);
	return fromArray(value);
}
function fromArray(value) {
	return value instanceof Uint8Array ? value : new Uint8Array(value);
}
function fromHex$2(value, options = {}) {
	const { size: size$2 } = options;
	let hex$1 = value;
	if (size$2) {
		assertSize(value, size$2);
		hex$1 = padRight$1(value, size$2);
	}
	let hexString = hex$1.slice(2);
	if (hexString.length % 2) hexString = `0${hexString}`;
	const length$1 = hexString.length / 2;
	const bytes = new Uint8Array(length$1);
	for (let index = 0, j$2 = 0; index < length$1; index++) {
		const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j$2++));
		const nibbleRight = charCodeToBase16(hexString.charCodeAt(j$2++));
		if (nibbleLeft === void 0 || nibbleRight === void 0) throw new BaseError(`Invalid byte sequence ("${hexString[j$2 - 2]}${hexString[j$2 - 1]}" in "${hexString}").`);
		bytes[index] = nibbleLeft * 16 + nibbleRight;
	}
	return bytes;
}
function fromString$2(value, options = {}) {
	const { size: size$2 } = options;
	const bytes = encoder.encode(value);
	if (typeof size$2 === "number") {
		assertSize$1(bytes, size$2);
		return padRight(bytes, size$2);
	}
	return bytes;
}
function padRight(value, size$2) {
	return pad$1(value, {
		dir: "right",
		size: size$2
	});
}
function size(value) {
	return value.length;
}
function validate(value) {
	try {
		assert$2(value);
		return true;
	} catch {
		return false;
	}
}
var InvalidBytesTypeError = class extends BaseError {
	constructor(value) {
		super(`Value \`${typeof value === "object" ? stringify(value) : value}\` of type \`${typeof value}\` is an invalid Bytes value.`, { metaMessages: ["Bytes values must be of type `Bytes`."] });
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Bytes.InvalidBytesTypeError"
		});
	}
};
var SizeOverflowError = class extends BaseError {
	constructor({ givenSize, maxSize }) {
		super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Bytes.SizeOverflowError"
		});
	}
};
var SizeExceedsPaddingSizeError = class extends BaseError {
	constructor({ size: size$2, targetSize, type }) {
		super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size$2}\`) exceeds padding size (\`${targetSize}\`).`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Bytes.SizeExceedsPaddingSizeError"
		});
	}
};
function keccak256(value, options = {}) {
	const { as = typeof value === "string" ? "Hex" : "Bytes" } = options;
	const bytes = keccak_256(from$4(value));
	if (as === "Bytes") return bytes;
	return fromBytes$1(bytes);
}
var LruMap = class extends Map {
	constructor(size$2) {
		super();
		Object.defineProperty(this, "maxSize", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		this.maxSize = size$2;
	}
	get(key) {
		const value = super.get(key);
		if (super.has(key) && value !== void 0) {
			this.delete(key);
			super.set(key, value);
		}
		return value;
	}
	set(key, value) {
		super.set(key, value);
		if (this.maxSize && this.size > this.maxSize) {
			const firstKey = this.keys().next().value;
			if (firstKey) this.delete(firstKey);
		}
		return this;
	}
};
const checksum$1 = { checksum: /* @__PURE__ */ new LruMap(8192) }.checksum;
function assert$1(publicKey, options = {}) {
	const { compressed } = options;
	const { prefix, x: x$3, y: y$2 } = publicKey;
	if (compressed === false || typeof x$3 === "bigint" && typeof y$2 === "bigint") {
		if (prefix !== 4) throw new InvalidPrefixError({
			prefix,
			cause: new InvalidUncompressedPrefixError()
		});
		return;
	}
	if (compressed === true || typeof x$3 === "bigint" && typeof y$2 === "undefined") {
		if (prefix !== 3 && prefix !== 2) throw new InvalidPrefixError({
			prefix,
			cause: new InvalidCompressedPrefixError()
		});
		return;
	}
	throw new InvalidError({ publicKey });
}
function from$3(value) {
	const publicKey = (() => {
		if (validate$1(value)) return fromHex$1(value);
		if (validate(value)) return fromBytes(value);
		const { prefix, x: x$3, y: y$2 } = value;
		if (typeof x$3 === "bigint" && typeof y$2 === "bigint") return {
			prefix: prefix ?? 4,
			x: x$3,
			y: y$2
		};
		return {
			prefix,
			x: x$3
		};
	})();
	assert$1(publicKey);
	return publicKey;
}
function fromBytes(publicKey) {
	return fromHex$1(fromBytes$1(publicKey));
}
function fromHex$1(publicKey) {
	if (publicKey.length !== 132 && publicKey.length !== 130 && publicKey.length !== 68) throw new InvalidSerializedSizeError$1({ publicKey });
	if (publicKey.length === 130) return {
		prefix: 4,
		x: BigInt(slice(publicKey, 0, 32)),
		y: BigInt(slice(publicKey, 32, 64))
	};
	if (publicKey.length === 132) return {
		prefix: Number(slice(publicKey, 0, 1)),
		x: BigInt(slice(publicKey, 1, 33)),
		y: BigInt(slice(publicKey, 33, 65))
	};
	return {
		prefix: Number(slice(publicKey, 0, 1)),
		x: BigInt(slice(publicKey, 1, 33))
	};
}
function toHex$1(publicKey, options = {}) {
	assert$1(publicKey);
	const { prefix, x: x$3, y: y$2 } = publicKey;
	const { includePrefix = true } = options;
	return concat$1(includePrefix ? fromNumber(prefix, { size: 1 }) : "0x", fromNumber(x$3, { size: 32 }), typeof y$2 === "bigint" ? fromNumber(y$2, { size: 32 }) : "0x");
}
var InvalidError = class extends BaseError {
	constructor({ publicKey }) {
		super(`Value \`${stringify(publicKey)}\` is not a valid public key.`, { metaMessages: [
			"Public key must contain:",
			"- an `x` and `prefix` value (compressed)",
			"- an `x`, `y`, and `prefix` value (uncompressed)"
		] });
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "PublicKey.InvalidError"
		});
	}
};
var InvalidPrefixError = class extends BaseError {
	constructor({ prefix, cause }) {
		super(`Prefix "${prefix}" is invalid.`, { cause });
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "PublicKey.InvalidPrefixError"
		});
	}
};
var InvalidCompressedPrefixError = class extends BaseError {
	constructor() {
		super("Prefix must be 2 or 3 for compressed public keys.");
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "PublicKey.InvalidCompressedPrefixError"
		});
	}
};
var InvalidUncompressedPrefixError = class extends BaseError {
	constructor() {
		super("Prefix must be 4 for uncompressed public keys.");
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "PublicKey.InvalidUncompressedPrefixError"
		});
	}
};
var InvalidSerializedSizeError$1 = class extends BaseError {
	constructor({ publicKey }) {
		super(`Value \`${publicKey}\` is an invalid public key size.`, { metaMessages: ["Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).", `Received ${size$1(from$5(publicKey))} bytes.`] });
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "PublicKey.InvalidSerializedSizeError"
		});
	}
};
var addressRegex = /^0x[a-fA-F0-9]{40}$/;
function assert(value, options = {}) {
	const { strict = true } = options;
	if (!addressRegex.test(value)) throw new InvalidAddressError({
		address: value,
		cause: new InvalidInputError()
	});
	if (strict) {
		if (value.toLowerCase() === value) return;
		if (checksum(value) !== value) throw new InvalidAddressError({
			address: value,
			cause: new InvalidChecksumError()
		});
	}
}
function checksum(address) {
	if (checksum$1.has(address)) return checksum$1.get(address);
	assert(address, { strict: false });
	const hexAddress = address.substring(2).toLowerCase();
	const hash = keccak256(fromString$2(hexAddress), { as: "Bytes" });
	const characters = hexAddress.split("");
	for (let i$1 = 0; i$1 < 40; i$1 += 2) {
		if (hash[i$1 >> 1] >> 4 >= 8 && characters[i$1]) characters[i$1] = characters[i$1].toUpperCase();
		if ((hash[i$1 >> 1] & 15) >= 8 && characters[i$1 + 1]) characters[i$1 + 1] = characters[i$1 + 1].toUpperCase();
	}
	const result = `0x${characters.join("")}`;
	checksum$1.set(address, result);
	return result;
}
function from$2(address, options = {}) {
	const { checksum: checksumVal = false } = options;
	assert(address);
	if (checksumVal) return checksum(address);
	return address;
}
function fromPublicKey(publicKey, options = {}) {
	return from$2(`0x${keccak256(`0x${toHex$1(publicKey).slice(4)}`).substring(26)}`, options);
}
var InvalidAddressError = class extends BaseError {
	constructor({ address, cause }) {
		super(`Address "${address}" is invalid.`, { cause });
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Address.InvalidAddressError"
		});
	}
};
var InvalidInputError = class extends BaseError {
	constructor() {
		super("Address is not a 20 byte (40 hexadecimal character) value.");
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Address.InvalidInputError"
		});
	}
};
var InvalidChecksumError = class extends BaseError {
	constructor() {
		super("Address does not match its checksum counterpart.");
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Address.InvalidChecksumError"
		});
	}
};
function fromHex(signature) {
	if (signature.length !== 130 && signature.length !== 132) throw new InvalidSerializedSizeError({ signature });
	const r$2 = BigInt(slice(signature, 0, 32));
	const s$1 = BigInt(slice(signature, 32, 64));
	const yParity = (() => {
		const yParity$1 = Number(`0x${signature.slice(130)}`);
		if (Number.isNaN(yParity$1)) return void 0;
		try {
			return vToYParity(yParity$1);
		} catch {
			throw new InvalidYParityError({ value: yParity$1 });
		}
	})();
	if (typeof yParity === "undefined") return {
		r: r$2,
		s: s$1
	};
	return {
		r: r$2,
		s: s$1,
		yParity
	};
}
function vToYParity(v$5) {
	if (v$5 === 0 || v$5 === 27) return 0;
	if (v$5 === 1 || v$5 === 28) return 1;
	if (v$5 >= 35) return v$5 % 2 === 0 ? 1 : 0;
	throw new InvalidVError({ value: v$5 });
}
var InvalidSerializedSizeError = class extends BaseError {
	constructor({ signature }) {
		super(`Value \`${signature}\` is an invalid signature size.`, { metaMessages: ["Expected: 64 bytes or 65 bytes.", `Received ${size$1(from$5(signature))} bytes.`] });
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Signature.InvalidSerializedSizeError"
		});
	}
};
var InvalidYParityError = class extends BaseError {
	constructor({ value }) {
		super(`Value \`${value}\` is an invalid y-parity value. Y-parity must be 0 or 1.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Signature.InvalidYParityError"
		});
	}
};
var InvalidVError = class extends BaseError {
	constructor({ value }) {
		super(`Value \`${value}\` is an invalid v value. v must be 27, 28 or >=35.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Signature.InvalidVError"
		});
	}
};
function recoverAddress(options) {
	return fromPublicKey(recoverPublicKey(options));
}
function recoverPublicKey(options) {
	const { payload, signature } = options;
	const { r: r$2, s: s$1, yParity } = signature;
	return from$3(new secp256k1.Signature(BigInt(r$2), BigInt(s$1)).addRecoveryBit(yParity).recoverPublicKey(from$5(payload).substring(2)));
}
function base$1(ALPHABET$1) {
	if (ALPHABET$1.length >= 255) throw new TypeError("Alphabet too long");
	const BASE_MAP = new Uint8Array(256);
	for (let j$2 = 0; j$2 < BASE_MAP.length; j$2++) BASE_MAP[j$2] = 255;
	for (let i$1 = 0; i$1 < ALPHABET$1.length; i$1++) {
		const x$3 = ALPHABET$1.charAt(i$1);
		const xc = x$3.charCodeAt(0);
		if (BASE_MAP[xc] !== 255) throw new TypeError(x$3 + " is ambiguous");
		BASE_MAP[xc] = i$1;
	}
	const BASE = ALPHABET$1.length;
	const LEADER = ALPHABET$1.charAt(0);
	const FACTOR = Math.log(BASE) / Math.log(256);
	const iFACTOR = Math.log(256) / Math.log(BASE);
	function encode$5(source) {
		if (source instanceof Uint8Array) {} else if (ArrayBuffer.isView(source)) source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
		else if (Array.isArray(source)) source = Uint8Array.from(source);
		if (!(source instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
		if (source.length === 0) return "";
		let zeroes = 0;
		let length$1 = 0;
		let pbegin = 0;
		const pend = source.length;
		while (pbegin !== pend && source[pbegin] === 0) {
			pbegin++;
			zeroes++;
		}
		const size$2 = (pend - pbegin) * iFACTOR + 1 >>> 0;
		const b58 = new Uint8Array(size$2);
		while (pbegin !== pend) {
			let carry = source[pbegin];
			let i$1 = 0;
			for (let it1 = size$2 - 1; (carry !== 0 || i$1 < length$1) && it1 !== -1; it1--, i$1++) {
				carry += 256 * b58[it1] >>> 0;
				b58[it1] = carry % BASE >>> 0;
				carry = carry / BASE >>> 0;
			}
			if (carry !== 0) throw new Error("Non-zero carry");
			length$1 = i$1;
			pbegin++;
		}
		let it2 = size$2 - length$1;
		while (it2 !== size$2 && b58[it2] === 0) it2++;
		let str = LEADER.repeat(zeroes);
		for (; it2 < size$2; ++it2) str += ALPHABET$1.charAt(b58[it2]);
		return str;
	}
	function decodeUnsafe(source) {
		if (typeof source !== "string") throw new TypeError("Expected String");
		if (source.length === 0) return new Uint8Array();
		let psz = 0;
		let zeroes = 0;
		let length$1 = 0;
		while (source[psz] === LEADER) {
			zeroes++;
			psz++;
		}
		const size$2 = (source.length - psz) * FACTOR + 1 >>> 0;
		const b256 = new Uint8Array(size$2);
		while (psz < source.length) {
			const charCode = source.charCodeAt(psz);
			if (charCode > 255) return;
			let carry = BASE_MAP[charCode];
			if (carry === 255) return;
			let i$1 = 0;
			for (let it3 = size$2 - 1; (carry !== 0 || i$1 < length$1) && it3 !== -1; it3--, i$1++) {
				carry += BASE * b256[it3] >>> 0;
				b256[it3] = carry % 256 >>> 0;
				carry = carry / 256 >>> 0;
			}
			if (carry !== 0) throw new Error("Non-zero carry");
			length$1 = i$1;
			psz++;
		}
		let it4 = size$2 - length$1;
		while (it4 !== size$2 && b256[it4] === 0) it4++;
		const vch = new Uint8Array(zeroes + (size$2 - it4));
		let j$2 = zeroes;
		while (it4 !== size$2) vch[j$2++] = b256[it4++];
		return vch;
	}
	function decode$6(string$1) {
		const buffer = decodeUnsafe(string$1);
		if (buffer) return buffer;
		throw new Error("Non-base" + BASE + " character");
	}
	return {
		encode: encode$5,
		decodeUnsafe,
		decode: decode$6
	};
}
var esm_default$1 = base$1("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
function utf8Count(str) {
	const strLength = str.length;
	let byteLength = 0;
	let pos = 0;
	while (pos < strLength) {
		let value = str.charCodeAt(pos++);
		if ((value & 4294967168) === 0) {
			byteLength++;
			continue;
		} else if ((value & 4294965248) === 0) byteLength += 2;
		else {
			if (value >= 55296 && value <= 56319) {
				if (pos < strLength) {
					const extra = str.charCodeAt(pos);
					if ((extra & 64512) === 56320) {
						++pos;
						value = ((value & 1023) << 10) + (extra & 1023) + 65536;
					}
				}
			}
			if ((value & 4294901760) === 0) byteLength += 3;
			else byteLength += 4;
		}
	}
	return byteLength;
}
function utf8EncodeJs(str, output, outputOffset) {
	const strLength = str.length;
	let offset = outputOffset;
	let pos = 0;
	while (pos < strLength) {
		let value = str.charCodeAt(pos++);
		if ((value & 4294967168) === 0) {
			output[offset++] = value;
			continue;
		} else if ((value & 4294965248) === 0) output[offset++] = value >> 6 & 31 | 192;
		else {
			if (value >= 55296 && value <= 56319) {
				if (pos < strLength) {
					const extra = str.charCodeAt(pos);
					if ((extra & 64512) === 56320) {
						++pos;
						value = ((value & 1023) << 10) + (extra & 1023) + 65536;
					}
				}
			}
			if ((value & 4294901760) === 0) {
				output[offset++] = value >> 12 & 15 | 224;
				output[offset++] = value >> 6 & 63 | 128;
			} else {
				output[offset++] = value >> 18 & 7 | 240;
				output[offset++] = value >> 12 & 63 | 128;
				output[offset++] = value >> 6 & 63 | 128;
			}
		}
		output[offset++] = value & 63 | 128;
	}
}
var sharedTextEncoder = new TextEncoder();
var TEXT_ENCODER_THRESHOLD = 50;
function utf8EncodeTE(str, output, outputOffset) {
	sharedTextEncoder.encodeInto(str, output.subarray(outputOffset));
}
function utf8Encode(str, output, outputOffset) {
	if (str.length > TEXT_ENCODER_THRESHOLD) utf8EncodeTE(str, output, outputOffset);
	else utf8EncodeJs(str, output, outputOffset);
}
var CHUNK_SIZE = 4096;
function utf8DecodeJs(bytes, inputOffset, byteLength) {
	let offset = inputOffset;
	const end = offset + byteLength;
	const units = [];
	let result = "";
	while (offset < end) {
		const byte1 = bytes[offset++];
		if ((byte1 & 128) === 0) units.push(byte1);
		else if ((byte1 & 224) === 192) {
			const byte2 = bytes[offset++] & 63;
			units.push((byte1 & 31) << 6 | byte2);
		} else if ((byte1 & 240) === 224) {
			const byte2 = bytes[offset++] & 63;
			const byte3 = bytes[offset++] & 63;
			units.push((byte1 & 31) << 12 | byte2 << 6 | byte3);
		} else if ((byte1 & 248) === 240) {
			const byte2 = bytes[offset++] & 63;
			const byte3 = bytes[offset++] & 63;
			const byte4 = bytes[offset++] & 63;
			let unit = (byte1 & 7) << 18 | byte2 << 12 | byte3 << 6 | byte4;
			if (unit > 65535) {
				unit -= 65536;
				units.push(unit >>> 10 & 1023 | 55296);
				unit = 56320 | unit & 1023;
			}
			units.push(unit);
		} else units.push(byte1);
		if (units.length >= CHUNK_SIZE) {
			result += String.fromCharCode(...units);
			units.length = 0;
		}
	}
	if (units.length > 0) result += String.fromCharCode(...units);
	return result;
}
var sharedTextDecoder = new TextDecoder();
var TEXT_DECODER_THRESHOLD = 200;
function utf8DecodeTD(bytes, inputOffset, byteLength) {
	const stringBytes = bytes.subarray(inputOffset, inputOffset + byteLength);
	return sharedTextDecoder.decode(stringBytes);
}
function utf8Decode(bytes, inputOffset, byteLength) {
	if (byteLength > TEXT_DECODER_THRESHOLD) return utf8DecodeTD(bytes, inputOffset, byteLength);
	else return utf8DecodeJs(bytes, inputOffset, byteLength);
}
var ExtData = class {
	constructor(type, data) {
		this.type = type;
		this.data = data;
	}
};
var DecodeError = class DecodeError extends Error {
	constructor(message) {
		super(message);
		const proto = Object.create(DecodeError.prototype);
		Object.setPrototypeOf(this, proto);
		Object.defineProperty(this, "name", {
			configurable: true,
			enumerable: false,
			value: DecodeError.name
		});
	}
};
function setUint64(view, offset, value) {
	const high = value / 4294967296;
	const low = value;
	view.setUint32(offset, high);
	view.setUint32(offset + 4, low);
}
function setInt64(view, offset, value) {
	const high = Math.floor(value / 4294967296);
	const low = value;
	view.setUint32(offset, high);
	view.setUint32(offset + 4, low);
}
function getInt64(view, offset) {
	const high = view.getInt32(offset);
	const low = view.getUint32(offset + 4);
	return high * 4294967296 + low;
}
function getUint64(view, offset) {
	const high = view.getUint32(offset);
	const low = view.getUint32(offset + 4);
	return high * 4294967296 + low;
}
var TIMESTAMP32_MAX_SEC = 4294967295;
var TIMESTAMP64_MAX_SEC = 17179869183;
function encodeTimeSpecToTimestamp({ sec, nsec }) {
	if (sec >= 0 && nsec >= 0 && sec <= TIMESTAMP64_MAX_SEC) if (nsec === 0 && sec <= TIMESTAMP32_MAX_SEC) {
		const rv = new Uint8Array(4);
		new DataView(rv.buffer).setUint32(0, sec);
		return rv;
	} else {
		const secHigh = sec / 4294967296;
		const secLow = sec & 4294967295;
		const rv = new Uint8Array(8);
		const view = new DataView(rv.buffer);
		view.setUint32(0, nsec << 2 | secHigh & 3);
		view.setUint32(4, secLow);
		return rv;
	}
	else {
		const rv = new Uint8Array(12);
		const view = new DataView(rv.buffer);
		view.setUint32(0, nsec);
		setInt64(view, 4, sec);
		return rv;
	}
}
function encodeDateToTimeSpec(date) {
	const msec = date.getTime();
	const sec = Math.floor(msec / 1e3);
	const nsec = (msec - sec * 1e3) * 1e6;
	const nsecInSec = Math.floor(nsec / 1e9);
	return {
		sec: sec + nsecInSec,
		nsec: nsec - nsecInSec * 1e9
	};
}
function encodeTimestampExtension(object) {
	if (object instanceof Date) return encodeTimeSpecToTimestamp(encodeDateToTimeSpec(object));
	else return null;
}
function decodeTimestampToTimeSpec(data) {
	const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
	switch (data.byteLength) {
		case 4: return {
			sec: view.getUint32(0),
			nsec: 0
		};
		case 8: {
			const nsec30AndSecHigh2 = view.getUint32(0);
			const secLow32 = view.getUint32(4);
			return {
				sec: (nsec30AndSecHigh2 & 3) * 4294967296 + secLow32,
				nsec: nsec30AndSecHigh2 >>> 2
			};
		}
		case 12: return {
			sec: getInt64(view, 4),
			nsec: view.getUint32(0)
		};
		default: throw new DecodeError(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${data.length}`);
	}
}
function decodeTimestampExtension(data) {
	const timeSpec = decodeTimestampToTimeSpec(data);
	return /* @__PURE__ */ new Date(timeSpec.sec * 1e3 + timeSpec.nsec / 1e6);
}
const timestampExtension = {
	type: -1,
	encode: encodeTimestampExtension,
	decode: decodeTimestampExtension
};
var ExtensionCodec = class {
	constructor() {
		this.builtInEncoders = [];
		this.builtInDecoders = [];
		this.encoders = [];
		this.decoders = [];
		this.register(timestampExtension);
	}
	register({ type, encode: encode$5, decode: decode$6 }) {
		if (type >= 0) {
			this.encoders[type] = encode$5;
			this.decoders[type] = decode$6;
		} else {
			const index = -1 - type;
			this.builtInEncoders[index] = encode$5;
			this.builtInDecoders[index] = decode$6;
		}
	}
	tryToEncode(object, context) {
		for (let i$1 = 0; i$1 < this.builtInEncoders.length; i$1++) {
			const encodeExt = this.builtInEncoders[i$1];
			if (encodeExt != null) {
				const data = encodeExt(object, context);
				if (data != null) return new ExtData(-1 - i$1, data);
			}
		}
		for (let i$1 = 0; i$1 < this.encoders.length; i$1++) {
			const encodeExt = this.encoders[i$1];
			if (encodeExt != null) {
				const data = encodeExt(object, context);
				if (data != null) return new ExtData(i$1, data);
			}
		}
		if (object instanceof ExtData) return object;
		return null;
	}
	decode(data, type, context) {
		const decodeExt = type < 0 ? this.builtInDecoders[-1 - type] : this.decoders[type];
		if (decodeExt) return decodeExt(data, type, context);
		else return new ExtData(type, data);
	}
};
ExtensionCodec.defaultCodec = new ExtensionCodec();
function isArrayBufferLike(buffer) {
	return buffer instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && buffer instanceof SharedArrayBuffer;
}
function ensureUint8Array(buffer) {
	if (buffer instanceof Uint8Array) return buffer;
	else if (ArrayBuffer.isView(buffer)) return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
	else if (isArrayBufferLike(buffer)) return new Uint8Array(buffer);
	else return Uint8Array.from(buffer);
}
var Encoder$1 = class Encoder$1 {
	constructor(options) {
		this.entered = false;
		this.extensionCodec = options?.extensionCodec ?? ExtensionCodec.defaultCodec;
		this.context = options?.context;
		this.useBigInt64 = options?.useBigInt64 ?? false;
		this.maxDepth = options?.maxDepth ?? 100;
		this.initialBufferSize = options?.initialBufferSize ?? 2048;
		this.sortKeys = options?.sortKeys ?? false;
		this.forceFloat32 = options?.forceFloat32 ?? false;
		this.ignoreUndefined = options?.ignoreUndefined ?? false;
		this.forceIntegerToFloat = options?.forceIntegerToFloat ?? false;
		this.pos = 0;
		this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
		this.bytes = new Uint8Array(this.view.buffer);
	}
	clone() {
		return new Encoder$1({
			extensionCodec: this.extensionCodec,
			context: this.context,
			useBigInt64: this.useBigInt64,
			maxDepth: this.maxDepth,
			initialBufferSize: this.initialBufferSize,
			sortKeys: this.sortKeys,
			forceFloat32: this.forceFloat32,
			ignoreUndefined: this.ignoreUndefined,
			forceIntegerToFloat: this.forceIntegerToFloat
		});
	}
	reinitializeState() {
		this.pos = 0;
	}
	encodeSharedRef(object) {
		if (this.entered) return this.clone().encodeSharedRef(object);
		try {
			this.entered = true;
			this.reinitializeState();
			this.doEncode(object, 1);
			return this.bytes.subarray(0, this.pos);
		} finally {
			this.entered = false;
		}
	}
	encode(object) {
		if (this.entered) return this.clone().encode(object);
		try {
			this.entered = true;
			this.reinitializeState();
			this.doEncode(object, 1);
			return this.bytes.slice(0, this.pos);
		} finally {
			this.entered = false;
		}
	}
	doEncode(object, depth) {
		if (depth > this.maxDepth) throw new Error(`Too deep objects in depth ${depth}`);
		if (object == null) this.encodeNil();
		else if (typeof object === "boolean") this.encodeBoolean(object);
		else if (typeof object === "number") if (!this.forceIntegerToFloat) this.encodeNumber(object);
		else this.encodeNumberAsFloat(object);
		else if (typeof object === "string") this.encodeString(object);
		else if (this.useBigInt64 && typeof object === "bigint") this.encodeBigInt64(object);
		else this.encodeObject(object, depth);
	}
	ensureBufferSizeToWrite(sizeToWrite) {
		const requiredSize = this.pos + sizeToWrite;
		if (this.view.byteLength < requiredSize) this.resizeBuffer(requiredSize * 2);
	}
	resizeBuffer(newSize) {
		const newBuffer = new ArrayBuffer(newSize);
		const newBytes = new Uint8Array(newBuffer);
		const newView = new DataView(newBuffer);
		newBytes.set(this.bytes);
		this.view = newView;
		this.bytes = newBytes;
	}
	encodeNil() {
		this.writeU8(192);
	}
	encodeBoolean(object) {
		if (object === false) this.writeU8(194);
		else this.writeU8(195);
	}
	encodeNumber(object) {
		if (!this.forceIntegerToFloat && Number.isSafeInteger(object)) if (object >= 0) if (object < 128) this.writeU8(object);
		else if (object < 256) {
			this.writeU8(204);
			this.writeU8(object);
		} else if (object < 65536) {
			this.writeU8(205);
			this.writeU16(object);
		} else if (object < 4294967296) {
			this.writeU8(206);
			this.writeU32(object);
		} else if (!this.useBigInt64) {
			this.writeU8(207);
			this.writeU64(object);
		} else this.encodeNumberAsFloat(object);
		else if (object >= -32) this.writeU8(224 | object + 32);
		else if (object >= -128) {
			this.writeU8(208);
			this.writeI8(object);
		} else if (object >= -32768) {
			this.writeU8(209);
			this.writeI16(object);
		} else if (object >= -2147483648) {
			this.writeU8(210);
			this.writeI32(object);
		} else if (!this.useBigInt64) {
			this.writeU8(211);
			this.writeI64(object);
		} else this.encodeNumberAsFloat(object);
		else this.encodeNumberAsFloat(object);
	}
	encodeNumberAsFloat(object) {
		if (this.forceFloat32) {
			this.writeU8(202);
			this.writeF32(object);
		} else {
			this.writeU8(203);
			this.writeF64(object);
		}
	}
	encodeBigInt64(object) {
		if (object >= BigInt(0)) {
			this.writeU8(207);
			this.writeBigUint64(object);
		} else {
			this.writeU8(211);
			this.writeBigInt64(object);
		}
	}
	writeStringHeader(byteLength) {
		if (byteLength < 32) this.writeU8(160 + byteLength);
		else if (byteLength < 256) {
			this.writeU8(217);
			this.writeU8(byteLength);
		} else if (byteLength < 65536) {
			this.writeU8(218);
			this.writeU16(byteLength);
		} else if (byteLength < 4294967296) {
			this.writeU8(219);
			this.writeU32(byteLength);
		} else throw new Error(`Too long string: ${byteLength} bytes in UTF-8`);
	}
	encodeString(object) {
		const maxHeaderSize = 5;
		const byteLength = utf8Count(object);
		this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
		this.writeStringHeader(byteLength);
		utf8Encode(object, this.bytes, this.pos);
		this.pos += byteLength;
	}
	encodeObject(object, depth) {
		const ext = this.extensionCodec.tryToEncode(object, this.context);
		if (ext != null) this.encodeExtension(ext);
		else if (Array.isArray(object)) this.encodeArray(object, depth);
		else if (ArrayBuffer.isView(object)) this.encodeBinary(object);
		else if (typeof object === "object") this.encodeMap(object, depth);
		else throw new Error(`Unrecognized object: ${Object.prototype.toString.apply(object)}`);
	}
	encodeBinary(object) {
		const size$2 = object.byteLength;
		if (size$2 < 256) {
			this.writeU8(196);
			this.writeU8(size$2);
		} else if (size$2 < 65536) {
			this.writeU8(197);
			this.writeU16(size$2);
		} else if (size$2 < 4294967296) {
			this.writeU8(198);
			this.writeU32(size$2);
		} else throw new Error(`Too large binary: ${size$2}`);
		const bytes = ensureUint8Array(object);
		this.writeU8a(bytes);
	}
	encodeArray(object, depth) {
		const size$2 = object.length;
		if (size$2 < 16) this.writeU8(144 + size$2);
		else if (size$2 < 65536) {
			this.writeU8(220);
			this.writeU16(size$2);
		} else if (size$2 < 4294967296) {
			this.writeU8(221);
			this.writeU32(size$2);
		} else throw new Error(`Too large array: ${size$2}`);
		for (const item of object) this.doEncode(item, depth + 1);
	}
	countWithoutUndefined(object, keys$1) {
		let count = 0;
		for (const key of keys$1) if (object[key] !== void 0) count++;
		return count;
	}
	encodeMap(object, depth) {
		const keys$1 = Object.keys(object);
		if (this.sortKeys) keys$1.sort();
		const size$2 = this.ignoreUndefined ? this.countWithoutUndefined(object, keys$1) : keys$1.length;
		if (size$2 < 16) this.writeU8(128 + size$2);
		else if (size$2 < 65536) {
			this.writeU8(222);
			this.writeU16(size$2);
		} else if (size$2 < 4294967296) {
			this.writeU8(223);
			this.writeU32(size$2);
		} else throw new Error(`Too large map object: ${size$2}`);
		for (const key of keys$1) {
			const value = object[key];
			if (!(this.ignoreUndefined && value === void 0)) {
				this.encodeString(key);
				this.doEncode(value, depth + 1);
			}
		}
	}
	encodeExtension(ext) {
		if (typeof ext.data === "function") {
			const data = ext.data(this.pos + 6);
			const size$3 = data.length;
			if (size$3 >= 4294967296) throw new Error(`Too large extension object: ${size$3}`);
			this.writeU8(201);
			this.writeU32(size$3);
			this.writeI8(ext.type);
			this.writeU8a(data);
			return;
		}
		const size$2 = ext.data.length;
		if (size$2 === 1) this.writeU8(212);
		else if (size$2 === 2) this.writeU8(213);
		else if (size$2 === 4) this.writeU8(214);
		else if (size$2 === 8) this.writeU8(215);
		else if (size$2 === 16) this.writeU8(216);
		else if (size$2 < 256) {
			this.writeU8(199);
			this.writeU8(size$2);
		} else if (size$2 < 65536) {
			this.writeU8(200);
			this.writeU16(size$2);
		} else if (size$2 < 4294967296) {
			this.writeU8(201);
			this.writeU32(size$2);
		} else throw new Error(`Too large extension object: ${size$2}`);
		this.writeI8(ext.type);
		this.writeU8a(ext.data);
	}
	writeU8(value) {
		this.ensureBufferSizeToWrite(1);
		this.view.setUint8(this.pos, value);
		this.pos++;
	}
	writeU8a(values) {
		const size$2 = values.length;
		this.ensureBufferSizeToWrite(size$2);
		this.bytes.set(values, this.pos);
		this.pos += size$2;
	}
	writeI8(value) {
		this.ensureBufferSizeToWrite(1);
		this.view.setInt8(this.pos, value);
		this.pos++;
	}
	writeU16(value) {
		this.ensureBufferSizeToWrite(2);
		this.view.setUint16(this.pos, value);
		this.pos += 2;
	}
	writeI16(value) {
		this.ensureBufferSizeToWrite(2);
		this.view.setInt16(this.pos, value);
		this.pos += 2;
	}
	writeU32(value) {
		this.ensureBufferSizeToWrite(4);
		this.view.setUint32(this.pos, value);
		this.pos += 4;
	}
	writeI32(value) {
		this.ensureBufferSizeToWrite(4);
		this.view.setInt32(this.pos, value);
		this.pos += 4;
	}
	writeF32(value) {
		this.ensureBufferSizeToWrite(4);
		this.view.setFloat32(this.pos, value);
		this.pos += 4;
	}
	writeF64(value) {
		this.ensureBufferSizeToWrite(8);
		this.view.setFloat64(this.pos, value);
		this.pos += 8;
	}
	writeU64(value) {
		this.ensureBufferSizeToWrite(8);
		setUint64(this.view, this.pos, value);
		this.pos += 8;
	}
	writeI64(value) {
		this.ensureBufferSizeToWrite(8);
		setInt64(this.view, this.pos, value);
		this.pos += 8;
	}
	writeBigUint64(value) {
		this.ensureBufferSizeToWrite(8);
		this.view.setBigUint64(this.pos, value);
		this.pos += 8;
	}
	writeBigInt64(value) {
		this.ensureBufferSizeToWrite(8);
		this.view.setBigInt64(this.pos, value);
		this.pos += 8;
	}
};
function encode$4(value, options) {
	return new Encoder$1(options).encodeSharedRef(value);
}
function prettyByte(byte) {
	return `${byte < 0 ? "-" : ""}0x${Math.abs(byte).toString(16).padStart(2, "0")}`;
}
var DEFAULT_MAX_KEY_LENGTH = 16;
var DEFAULT_MAX_LENGTH_PER_KEY = 16;
var CachedKeyDecoder = class {
	constructor(maxKeyLength = DEFAULT_MAX_KEY_LENGTH, maxLengthPerKey = DEFAULT_MAX_LENGTH_PER_KEY) {
		this.hit = 0;
		this.miss = 0;
		this.maxKeyLength = maxKeyLength;
		this.maxLengthPerKey = maxLengthPerKey;
		this.caches = [];
		for (let i$1 = 0; i$1 < this.maxKeyLength; i$1++) this.caches.push([]);
	}
	canBeCached(byteLength) {
		return byteLength > 0 && byteLength <= this.maxKeyLength;
	}
	find(bytes, inputOffset, byteLength) {
		const records = this.caches[byteLength - 1];
		FIND_CHUNK: for (const record of records) {
			const recordBytes = record.bytes;
			for (let j$2 = 0; j$2 < byteLength; j$2++) if (recordBytes[j$2] !== bytes[inputOffset + j$2]) continue FIND_CHUNK;
			return record.str;
		}
		return null;
	}
	store(bytes, value) {
		const records = this.caches[bytes.length - 1];
		const record = {
			bytes,
			str: value
		};
		if (records.length >= this.maxLengthPerKey) records[Math.random() * records.length | 0] = record;
		else records.push(record);
	}
	decode(bytes, inputOffset, byteLength) {
		const cachedValue = this.find(bytes, inputOffset, byteLength);
		if (cachedValue != null) {
			this.hit++;
			return cachedValue;
		}
		this.miss++;
		const str = utf8DecodeJs(bytes, inputOffset, byteLength);
		const slicedCopyOfBytes = Uint8Array.prototype.slice.call(bytes, inputOffset, inputOffset + byteLength);
		this.store(slicedCopyOfBytes, str);
		return str;
	}
};
var STATE_ARRAY = "array";
var STATE_MAP_KEY = "map_key";
var STATE_MAP_VALUE = "map_value";
var mapKeyConverter = (key) => {
	if (typeof key === "string" || typeof key === "number") return key;
	throw new DecodeError("The type of key must be string or number but " + typeof key);
};
var StackPool = class {
	constructor() {
		this.stack = [];
		this.stackHeadPosition = -1;
	}
	get length() {
		return this.stackHeadPosition + 1;
	}
	top() {
		return this.stack[this.stackHeadPosition];
	}
	pushArrayState(size$2) {
		const state = this.getUninitializedStateFromPool();
		state.type = STATE_ARRAY;
		state.position = 0;
		state.size = size$2;
		state.array = new Array(size$2);
	}
	pushMapState(size$2) {
		const state = this.getUninitializedStateFromPool();
		state.type = STATE_MAP_KEY;
		state.readCount = 0;
		state.size = size$2;
		state.map = {};
	}
	getUninitializedStateFromPool() {
		this.stackHeadPosition++;
		if (this.stackHeadPosition === this.stack.length) this.stack.push({
			type: void 0,
			size: 0,
			array: void 0,
			position: 0,
			readCount: 0,
			map: void 0,
			key: null
		});
		return this.stack[this.stackHeadPosition];
	}
	release(state) {
		if (this.stack[this.stackHeadPosition] !== state) throw new Error("Invalid stack state. Released state is not on top of the stack.");
		if (state.type === STATE_ARRAY) {
			const partialState = state;
			partialState.size = 0;
			partialState.array = void 0;
			partialState.position = 0;
			partialState.type = void 0;
		}
		if (state.type === STATE_MAP_KEY || state.type === STATE_MAP_VALUE) {
			const partialState = state;
			partialState.size = 0;
			partialState.map = void 0;
			partialState.readCount = 0;
			partialState.type = void 0;
		}
		this.stackHeadPosition--;
	}
	reset() {
		this.stack.length = 0;
		this.stackHeadPosition = -1;
	}
};
var HEAD_BYTE_REQUIRED = -1;
var EMPTY_VIEW = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(0));
var EMPTY_BYTES = new Uint8Array(EMPTY_VIEW.buffer);
try {
	EMPTY_VIEW.getInt8(0);
} catch (e$1) {
	if (!(e$1 instanceof RangeError)) throw new Error("This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access");
}
var MORE_DATA = /* @__PURE__ */ new RangeError("Insufficient data");
var sharedCachedKeyDecoder = new CachedKeyDecoder();
var Decoder$1 = class Decoder$1 {
	constructor(options) {
		this.totalPos = 0;
		this.pos = 0;
		this.view = EMPTY_VIEW;
		this.bytes = EMPTY_BYTES;
		this.headByte = HEAD_BYTE_REQUIRED;
		this.stack = new StackPool();
		this.entered = false;
		this.extensionCodec = options?.extensionCodec ?? ExtensionCodec.defaultCodec;
		this.context = options?.context;
		this.useBigInt64 = options?.useBigInt64 ?? false;
		this.rawStrings = options?.rawStrings ?? false;
		this.maxStrLength = options?.maxStrLength ?? 4294967295;
		this.maxBinLength = options?.maxBinLength ?? 4294967295;
		this.maxArrayLength = options?.maxArrayLength ?? 4294967295;
		this.maxMapLength = options?.maxMapLength ?? 4294967295;
		this.maxExtLength = options?.maxExtLength ?? 4294967295;
		this.keyDecoder = options?.keyDecoder !== void 0 ? options.keyDecoder : sharedCachedKeyDecoder;
		this.mapKeyConverter = options?.mapKeyConverter ?? mapKeyConverter;
	}
	clone() {
		return new Decoder$1({
			extensionCodec: this.extensionCodec,
			context: this.context,
			useBigInt64: this.useBigInt64,
			rawStrings: this.rawStrings,
			maxStrLength: this.maxStrLength,
			maxBinLength: this.maxBinLength,
			maxArrayLength: this.maxArrayLength,
			maxMapLength: this.maxMapLength,
			maxExtLength: this.maxExtLength,
			keyDecoder: this.keyDecoder
		});
	}
	reinitializeState() {
		this.totalPos = 0;
		this.headByte = HEAD_BYTE_REQUIRED;
		this.stack.reset();
	}
	setBuffer(buffer) {
		const bytes = ensureUint8Array(buffer);
		this.bytes = bytes;
		this.view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
		this.pos = 0;
	}
	appendBuffer(buffer) {
		if (this.headByte === HEAD_BYTE_REQUIRED && !this.hasRemaining(1)) this.setBuffer(buffer);
		else {
			const remainingData = this.bytes.subarray(this.pos);
			const newData = ensureUint8Array(buffer);
			const newBuffer = new Uint8Array(remainingData.length + newData.length);
			newBuffer.set(remainingData);
			newBuffer.set(newData, remainingData.length);
			this.setBuffer(newBuffer);
		}
	}
	hasRemaining(size$2) {
		return this.view.byteLength - this.pos >= size$2;
	}
	createExtraByteError(posToShow) {
		const { view, pos } = this;
		return /* @__PURE__ */ new RangeError(`Extra ${view.byteLength - pos} of ${view.byteLength} byte(s) found at buffer[${posToShow}]`);
	}
	decode(buffer) {
		if (this.entered) return this.clone().decode(buffer);
		try {
			this.entered = true;
			this.reinitializeState();
			this.setBuffer(buffer);
			const object = this.doDecodeSync();
			if (this.hasRemaining(1)) throw this.createExtraByteError(this.pos);
			return object;
		} finally {
			this.entered = false;
		}
	}
	*decodeMulti(buffer) {
		if (this.entered) {
			yield* this.clone().decodeMulti(buffer);
			return;
		}
		try {
			this.entered = true;
			this.reinitializeState();
			this.setBuffer(buffer);
			while (this.hasRemaining(1)) yield this.doDecodeSync();
		} finally {
			this.entered = false;
		}
	}
	async decodeAsync(stream) {
		if (this.entered) return this.clone().decodeAsync(stream);
		try {
			this.entered = true;
			let decoded = false;
			let object;
			for await (const buffer of stream) {
				if (decoded) {
					this.entered = false;
					throw this.createExtraByteError(this.totalPos);
				}
				this.appendBuffer(buffer);
				try {
					object = this.doDecodeSync();
					decoded = true;
				} catch (e$1) {
					if (!(e$1 instanceof RangeError)) throw e$1;
				}
				this.totalPos += this.pos;
			}
			if (decoded) {
				if (this.hasRemaining(1)) throw this.createExtraByteError(this.totalPos);
				return object;
			}
			const { headByte, pos, totalPos } = this;
			throw new RangeError(`Insufficient data in parsing ${prettyByte(headByte)} at ${totalPos} (${pos} in the current buffer)`);
		} finally {
			this.entered = false;
		}
	}
	decodeArrayStream(stream) {
		return this.decodeMultiAsync(stream, true);
	}
	decodeStream(stream) {
		return this.decodeMultiAsync(stream, false);
	}
	async *decodeMultiAsync(stream, isArray) {
		if (this.entered) {
			yield* this.clone().decodeMultiAsync(stream, isArray);
			return;
		}
		try {
			this.entered = true;
			let isArrayHeaderRequired = isArray;
			let arrayItemsLeft = -1;
			for await (const buffer of stream) {
				if (isArray && arrayItemsLeft === 0) throw this.createExtraByteError(this.totalPos);
				this.appendBuffer(buffer);
				if (isArrayHeaderRequired) {
					arrayItemsLeft = this.readArraySize();
					isArrayHeaderRequired = false;
					this.complete();
				}
				try {
					while (true) {
						yield this.doDecodeSync();
						if (--arrayItemsLeft === 0) break;
					}
				} catch (e$1) {
					if (!(e$1 instanceof RangeError)) throw e$1;
				}
				this.totalPos += this.pos;
			}
		} finally {
			this.entered = false;
		}
	}
	doDecodeSync() {
		DECODE: while (true) {
			const headByte = this.readHeadByte();
			let object;
			if (headByte >= 224) object = headByte - 256;
			else if (headByte < 192) if (headByte < 128) object = headByte;
			else if (headByte < 144) {
				const size$2 = headByte - 128;
				if (size$2 !== 0) {
					this.pushMapState(size$2);
					this.complete();
					continue DECODE;
				} else object = {};
			} else if (headByte < 160) {
				const size$2 = headByte - 144;
				if (size$2 !== 0) {
					this.pushArrayState(size$2);
					this.complete();
					continue DECODE;
				} else object = [];
			} else {
				const byteLength = headByte - 160;
				object = this.decodeString(byteLength, 0);
			}
			else if (headByte === 192) object = null;
			else if (headByte === 194) object = false;
			else if (headByte === 195) object = true;
			else if (headByte === 202) object = this.readF32();
			else if (headByte === 203) object = this.readF64();
			else if (headByte === 204) object = this.readU8();
			else if (headByte === 205) object = this.readU16();
			else if (headByte === 206) object = this.readU32();
			else if (headByte === 207) if (this.useBigInt64) object = this.readU64AsBigInt();
			else object = this.readU64();
			else if (headByte === 208) object = this.readI8();
			else if (headByte === 209) object = this.readI16();
			else if (headByte === 210) object = this.readI32();
			else if (headByte === 211) if (this.useBigInt64) object = this.readI64AsBigInt();
			else object = this.readI64();
			else if (headByte === 217) {
				const byteLength = this.lookU8();
				object = this.decodeString(byteLength, 1);
			} else if (headByte === 218) {
				const byteLength = this.lookU16();
				object = this.decodeString(byteLength, 2);
			} else if (headByte === 219) {
				const byteLength = this.lookU32();
				object = this.decodeString(byteLength, 4);
			} else if (headByte === 220) {
				const size$2 = this.readU16();
				if (size$2 !== 0) {
					this.pushArrayState(size$2);
					this.complete();
					continue DECODE;
				} else object = [];
			} else if (headByte === 221) {
				const size$2 = this.readU32();
				if (size$2 !== 0) {
					this.pushArrayState(size$2);
					this.complete();
					continue DECODE;
				} else object = [];
			} else if (headByte === 222) {
				const size$2 = this.readU16();
				if (size$2 !== 0) {
					this.pushMapState(size$2);
					this.complete();
					continue DECODE;
				} else object = {};
			} else if (headByte === 223) {
				const size$2 = this.readU32();
				if (size$2 !== 0) {
					this.pushMapState(size$2);
					this.complete();
					continue DECODE;
				} else object = {};
			} else if (headByte === 196) {
				const size$2 = this.lookU8();
				object = this.decodeBinary(size$2, 1);
			} else if (headByte === 197) {
				const size$2 = this.lookU16();
				object = this.decodeBinary(size$2, 2);
			} else if (headByte === 198) {
				const size$2 = this.lookU32();
				object = this.decodeBinary(size$2, 4);
			} else if (headByte === 212) object = this.decodeExtension(1, 0);
			else if (headByte === 213) object = this.decodeExtension(2, 0);
			else if (headByte === 214) object = this.decodeExtension(4, 0);
			else if (headByte === 215) object = this.decodeExtension(8, 0);
			else if (headByte === 216) object = this.decodeExtension(16, 0);
			else if (headByte === 199) {
				const size$2 = this.lookU8();
				object = this.decodeExtension(size$2, 1);
			} else if (headByte === 200) {
				const size$2 = this.lookU16();
				object = this.decodeExtension(size$2, 2);
			} else if (headByte === 201) {
				const size$2 = this.lookU32();
				object = this.decodeExtension(size$2, 4);
			} else throw new DecodeError(`Unrecognized type byte: ${prettyByte(headByte)}`);
			this.complete();
			const stack = this.stack;
			while (stack.length > 0) {
				const state = stack.top();
				if (state.type === STATE_ARRAY) {
					state.array[state.position] = object;
					state.position++;
					if (state.position === state.size) {
						object = state.array;
						stack.release(state);
					} else continue DECODE;
				} else if (state.type === STATE_MAP_KEY) {
					if (object === "__proto__") throw new DecodeError("The key __proto__ is not allowed");
					state.key = this.mapKeyConverter(object);
					state.type = STATE_MAP_VALUE;
					continue DECODE;
				} else {
					state.map[state.key] = object;
					state.readCount++;
					if (state.readCount === state.size) {
						object = state.map;
						stack.release(state);
					} else {
						state.key = null;
						state.type = STATE_MAP_KEY;
						continue DECODE;
					}
				}
			}
			return object;
		}
	}
	readHeadByte() {
		if (this.headByte === HEAD_BYTE_REQUIRED) this.headByte = this.readU8();
		return this.headByte;
	}
	complete() {
		this.headByte = HEAD_BYTE_REQUIRED;
	}
	readArraySize() {
		const headByte = this.readHeadByte();
		switch (headByte) {
			case 220: return this.readU16();
			case 221: return this.readU32();
			default: if (headByte < 160) return headByte - 144;
			else throw new DecodeError(`Unrecognized array type byte: ${prettyByte(headByte)}`);
		}
	}
	pushMapState(size$2) {
		if (size$2 > this.maxMapLength) throw new DecodeError(`Max length exceeded: map length (${size$2}) > maxMapLengthLength (${this.maxMapLength})`);
		this.stack.pushMapState(size$2);
	}
	pushArrayState(size$2) {
		if (size$2 > this.maxArrayLength) throw new DecodeError(`Max length exceeded: array length (${size$2}) > maxArrayLength (${this.maxArrayLength})`);
		this.stack.pushArrayState(size$2);
	}
	decodeString(byteLength, headerOffset) {
		if (!this.rawStrings || this.stateIsMapKey()) return this.decodeUtf8String(byteLength, headerOffset);
		return this.decodeBinary(byteLength, headerOffset);
	}
	decodeUtf8String(byteLength, headerOffset) {
		if (byteLength > this.maxStrLength) throw new DecodeError(`Max length exceeded: UTF-8 byte length (${byteLength}) > maxStrLength (${this.maxStrLength})`);
		if (this.bytes.byteLength < this.pos + headerOffset + byteLength) throw MORE_DATA;
		const offset = this.pos + headerOffset;
		let object;
		if (this.stateIsMapKey() && this.keyDecoder?.canBeCached(byteLength)) object = this.keyDecoder.decode(this.bytes, offset, byteLength);
		else object = utf8Decode(this.bytes, offset, byteLength);
		this.pos += headerOffset + byteLength;
		return object;
	}
	stateIsMapKey() {
		if (this.stack.length > 0) return this.stack.top().type === STATE_MAP_KEY;
		return false;
	}
	decodeBinary(byteLength, headOffset) {
		if (byteLength > this.maxBinLength) throw new DecodeError(`Max length exceeded: bin length (${byteLength}) > maxBinLength (${this.maxBinLength})`);
		if (!this.hasRemaining(byteLength + headOffset)) throw MORE_DATA;
		const offset = this.pos + headOffset;
		const object = this.bytes.subarray(offset, offset + byteLength);
		this.pos += headOffset + byteLength;
		return object;
	}
	decodeExtension(size$2, headOffset) {
		if (size$2 > this.maxExtLength) throw new DecodeError(`Max length exceeded: ext length (${size$2}) > maxExtLength (${this.maxExtLength})`);
		const extType = this.view.getInt8(this.pos + headOffset);
		const data = this.decodeBinary(size$2, headOffset + 1);
		return this.extensionCodec.decode(data, extType, this.context);
	}
	lookU8() {
		return this.view.getUint8(this.pos);
	}
	lookU16() {
		return this.view.getUint16(this.pos);
	}
	lookU32() {
		return this.view.getUint32(this.pos);
	}
	readU8() {
		const value = this.view.getUint8(this.pos);
		this.pos++;
		return value;
	}
	readI8() {
		const value = this.view.getInt8(this.pos);
		this.pos++;
		return value;
	}
	readU16() {
		const value = this.view.getUint16(this.pos);
		this.pos += 2;
		return value;
	}
	readI16() {
		const value = this.view.getInt16(this.pos);
		this.pos += 2;
		return value;
	}
	readU32() {
		const value = this.view.getUint32(this.pos);
		this.pos += 4;
		return value;
	}
	readI32() {
		const value = this.view.getInt32(this.pos);
		this.pos += 4;
		return value;
	}
	readU64() {
		const value = getUint64(this.view, this.pos);
		this.pos += 8;
		return value;
	}
	readI64() {
		const value = getInt64(this.view, this.pos);
		this.pos += 8;
		return value;
	}
	readU64AsBigInt() {
		const value = this.view.getBigUint64(this.pos);
		this.pos += 8;
		return value;
	}
	readI64AsBigInt() {
		const value = this.view.getBigInt64(this.pos);
		this.pos += 8;
		return value;
	}
	readF32() {
		const value = this.view.getFloat32(this.pos);
		this.pos += 4;
		return value;
	}
	readF64() {
		const value = this.view.getFloat64(this.pos);
		this.pos += 8;
		return value;
	}
};
function decode$5(buffer, options) {
	return new Decoder$1(options).decode(buffer);
}
function asUint8Array(buf) {
	if (globalThis.Buffer != null) return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
	return buf;
}
function allocUnsafe(size$2 = 0) {
	if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) return asUint8Array(globalThis.Buffer.allocUnsafe(size$2));
	return new Uint8Array(size$2);
}
function concat(arrays, length$1) {
	if (!length$1) length$1 = arrays.reduce((acc, curr) => acc + curr.length, 0);
	const output = allocUnsafe(length$1);
	let offset = 0;
	for (const arr of arrays) {
		output.set(arr, offset);
		offset += arr.length;
	}
	return asUint8Array(output);
}
function base(ALPHABET$1, name$1) {
	if (ALPHABET$1.length >= 255) throw new TypeError("Alphabet too long");
	var BASE_MAP = new Uint8Array(256);
	for (var j$2 = 0; j$2 < BASE_MAP.length; j$2++) BASE_MAP[j$2] = 255;
	for (var i$1 = 0; i$1 < ALPHABET$1.length; i$1++) {
		var x$3 = ALPHABET$1.charAt(i$1);
		var xc = x$3.charCodeAt(0);
		if (BASE_MAP[xc] !== 255) throw new TypeError(x$3 + " is ambiguous");
		BASE_MAP[xc] = i$1;
	}
	var BASE = ALPHABET$1.length;
	var LEADER = ALPHABET$1.charAt(0);
	var FACTOR = Math.log(BASE) / Math.log(256);
	var iFACTOR = Math.log(256) / Math.log(BASE);
	function encode$5(source) {
		if (source instanceof Uint8Array);
		else if (ArrayBuffer.isView(source)) source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
		else if (Array.isArray(source)) source = Uint8Array.from(source);
		if (!(source instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
		if (source.length === 0) return "";
		var zeroes = 0;
		var length$1 = 0;
		var pbegin = 0;
		var pend = source.length;
		while (pbegin !== pend && source[pbegin] === 0) {
			pbegin++;
			zeroes++;
		}
		var size$2 = (pend - pbegin) * iFACTOR + 1 >>> 0;
		var b58 = new Uint8Array(size$2);
		while (pbegin !== pend) {
			var carry = source[pbegin];
			var i$2 = 0;
			for (var it1 = size$2 - 1; (carry !== 0 || i$2 < length$1) && it1 !== -1; it1--, i$2++) {
				carry += 256 * b58[it1] >>> 0;
				b58[it1] = carry % BASE >>> 0;
				carry = carry / BASE >>> 0;
			}
			if (carry !== 0) throw new Error("Non-zero carry");
			length$1 = i$2;
			pbegin++;
		}
		var it2 = size$2 - length$1;
		while (it2 !== size$2 && b58[it2] === 0) it2++;
		var str = LEADER.repeat(zeroes);
		for (; it2 < size$2; ++it2) str += ALPHABET$1.charAt(b58[it2]);
		return str;
	}
	function decodeUnsafe(source) {
		if (typeof source !== "string") throw new TypeError("Expected String");
		if (source.length === 0) return new Uint8Array();
		var psz = 0;
		if (source[psz] === " ") return;
		var zeroes = 0;
		var length$1 = 0;
		while (source[psz] === LEADER) {
			zeroes++;
			psz++;
		}
		var size$2 = (source.length - psz) * FACTOR + 1 >>> 0;
		var b256 = new Uint8Array(size$2);
		while (source[psz]) {
			var carry = BASE_MAP[source.charCodeAt(psz)];
			if (carry === 255) return;
			var i$2 = 0;
			for (var it3 = size$2 - 1; (carry !== 0 || i$2 < length$1) && it3 !== -1; it3--, i$2++) {
				carry += BASE * b256[it3] >>> 0;
				b256[it3] = carry % 256 >>> 0;
				carry = carry / 256 >>> 0;
			}
			if (carry !== 0) throw new Error("Non-zero carry");
			length$1 = i$2;
			psz++;
		}
		if (source[psz] === " ") return;
		var it4 = size$2 - length$1;
		while (it4 !== size$2 && b256[it4] === 0) it4++;
		var vch = new Uint8Array(zeroes + (size$2 - it4));
		var j$3 = zeroes;
		while (it4 !== size$2) vch[j$3++] = b256[it4++];
		return vch;
	}
	function decode$6(string$1) {
		var buffer = decodeUnsafe(string$1);
		if (buffer) return buffer;
		throw new Error(`Non-${name$1} character`);
	}
	return {
		encode: encode$5,
		decodeUnsafe,
		decode: decode$6
	};
}
var base_x_default = base;
new Uint8Array(0);
var coerce = (o$4) => {
	if (o$4 instanceof Uint8Array && o$4.constructor.name === "Uint8Array") return o$4;
	if (o$4 instanceof ArrayBuffer) return new Uint8Array(o$4);
	if (ArrayBuffer.isView(o$4)) return new Uint8Array(o$4.buffer, o$4.byteOffset, o$4.byteLength);
	throw new Error("Unknown type, must be binary type");
};
var fromString$1 = (str) => new TextEncoder().encode(str);
var toString$1 = (b$2) => new TextDecoder().decode(b$2);
var Encoder = class {
	constructor(name$1, prefix, baseEncode) {
		this.name = name$1;
		this.prefix = prefix;
		this.baseEncode = baseEncode;
	}
	encode(bytes) {
		if (bytes instanceof Uint8Array) return `${this.prefix}${this.baseEncode(bytes)}`;
		else throw Error("Unknown type, must be binary type");
	}
};
var Decoder = class {
	constructor(name$1, prefix, baseDecode) {
		this.name = name$1;
		this.prefix = prefix;
		if (prefix.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
		this.prefixCodePoint = prefix.codePointAt(0);
		this.baseDecode = baseDecode;
	}
	decode(text) {
		if (typeof text === "string") {
			if (text.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
			return this.baseDecode(text.slice(this.prefix.length));
		} else throw Error("Can only multibase decode strings");
	}
	or(decoder) {
		return or(this, decoder);
	}
};
var ComposedDecoder = class {
	constructor(decoders) {
		this.decoders = decoders;
	}
	or(decoder) {
		return or(this, decoder);
	}
	decode(input) {
		const prefix = input[0];
		const decoder = this.decoders[prefix];
		if (decoder) return decoder.decode(input);
		else throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
	}
};
const or = (left, right) => new ComposedDecoder({
	...left.decoders || { [left.prefix]: left },
	...right.decoders || { [right.prefix]: right }
});
var Codec = class {
	constructor(name$1, prefix, baseEncode, baseDecode) {
		this.name = name$1;
		this.prefix = prefix;
		this.baseEncode = baseEncode;
		this.baseDecode = baseDecode;
		this.encoder = new Encoder(name$1, prefix, baseEncode);
		this.decoder = new Decoder(name$1, prefix, baseDecode);
	}
	encode(input) {
		return this.encoder.encode(input);
	}
	decode(input) {
		return this.decoder.decode(input);
	}
};
const from$1 = ({ name: name$1, prefix, encode: encode$5, decode: decode$6 }) => new Codec(name$1, prefix, encode$5, decode$6);
const baseX = ({ prefix, name: name$1, alphabet: alphabet$2 }) => {
	const { encode: encode$5, decode: decode$6 } = base_x_default(alphabet$2, name$1);
	return from$1({
		prefix,
		name: name$1,
		encode: encode$5,
		decode: (text) => coerce(decode$6(text))
	});
};
var decode$4 = (string$1, alphabet$2, bitsPerChar, name$1) => {
	const codes = {};
	for (let i$1 = 0; i$1 < alphabet$2.length; ++i$1) codes[alphabet$2[i$1]] = i$1;
	let end = string$1.length;
	while (string$1[end - 1] === "=") --end;
	const out = new Uint8Array(end * bitsPerChar / 8 | 0);
	let bits = 0;
	let buffer = 0;
	let written = 0;
	for (let i$1 = 0; i$1 < end; ++i$1) {
		const value = codes[string$1[i$1]];
		if (value === void 0) throw new SyntaxError(`Non-${name$1} character`);
		buffer = buffer << bitsPerChar | value;
		bits += bitsPerChar;
		if (bits >= 8) {
			bits -= 8;
			out[written++] = 255 & buffer >> bits;
		}
	}
	if (bits >= bitsPerChar || 255 & buffer << 8 - bits) throw new SyntaxError("Unexpected end of data");
	return out;
};
var encode$3 = (data, alphabet$2, bitsPerChar) => {
	const pad$2 = alphabet$2[alphabet$2.length - 1] === "=";
	const mask = (1 << bitsPerChar) - 1;
	let out = "";
	let bits = 0;
	let buffer = 0;
	for (let i$1 = 0; i$1 < data.length; ++i$1) {
		buffer = buffer << 8 | data[i$1];
		bits += 8;
		while (bits > bitsPerChar) {
			bits -= bitsPerChar;
			out += alphabet$2[mask & buffer >> bits];
		}
	}
	if (bits) out += alphabet$2[mask & buffer << bitsPerChar - bits];
	if (pad$2) while (out.length * bitsPerChar & 7) out += "=";
	return out;
};
const rfc4648 = ({ name: name$1, prefix, bitsPerChar, alphabet: alphabet$2 }) => {
	return from$1({
		prefix,
		name: name$1,
		encode(input) {
			return encode$3(input, alphabet$2, bitsPerChar);
		},
		decode(input) {
			return decode$4(input, alphabet$2, bitsPerChar, name$1);
		}
	});
};
var identity_exports = /* @__PURE__ */ __export({ identity: () => identity$1 });
const identity$1 = from$1({
	prefix: "\0",
	name: "identity",
	encode: (buf) => toString$1(buf),
	decode: (str) => fromString$1(str)
});
var base2_exports = /* @__PURE__ */ __export({ base2: () => base2 });
const base2 = rfc4648({
	prefix: "0",
	name: "base2",
	alphabet: "01",
	bitsPerChar: 1
});
var base8_exports = /* @__PURE__ */ __export({ base8: () => base8 });
const base8 = rfc4648({
	prefix: "7",
	name: "base8",
	alphabet: "01234567",
	bitsPerChar: 3
});
var base10_exports = /* @__PURE__ */ __export({ base10: () => base10 });
const base10 = baseX({
	prefix: "9",
	name: "base10",
	alphabet: "0123456789"
});
var base16_exports = /* @__PURE__ */ __export({
	base16: () => base16,
	base16upper: () => base16upper
});
const base16 = rfc4648({
	prefix: "f",
	name: "base16",
	alphabet: "0123456789abcdef",
	bitsPerChar: 4
});
const base16upper = rfc4648({
	prefix: "F",
	name: "base16upper",
	alphabet: "0123456789ABCDEF",
	bitsPerChar: 4
});
var base32_exports = /* @__PURE__ */ __export({
	base32: () => base32,
	base32hex: () => base32hex,
	base32hexpad: () => base32hexpad,
	base32hexpadupper: () => base32hexpadupper,
	base32hexupper: () => base32hexupper,
	base32pad: () => base32pad,
	base32padupper: () => base32padupper,
	base32upper: () => base32upper,
	base32z: () => base32z
});
const base32 = rfc4648({
	prefix: "b",
	name: "base32",
	alphabet: "abcdefghijklmnopqrstuvwxyz234567",
	bitsPerChar: 5
});
const base32upper = rfc4648({
	prefix: "B",
	name: "base32upper",
	alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
	bitsPerChar: 5
});
const base32pad = rfc4648({
	prefix: "c",
	name: "base32pad",
	alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
	bitsPerChar: 5
});
const base32padupper = rfc4648({
	prefix: "C",
	name: "base32padupper",
	alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
	bitsPerChar: 5
});
const base32hex = rfc4648({
	prefix: "v",
	name: "base32hex",
	alphabet: "0123456789abcdefghijklmnopqrstuv",
	bitsPerChar: 5
});
const base32hexupper = rfc4648({
	prefix: "V",
	name: "base32hexupper",
	alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
	bitsPerChar: 5
});
const base32hexpad = rfc4648({
	prefix: "t",
	name: "base32hexpad",
	alphabet: "0123456789abcdefghijklmnopqrstuv=",
	bitsPerChar: 5
});
const base32hexpadupper = rfc4648({
	prefix: "T",
	name: "base32hexpadupper",
	alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
	bitsPerChar: 5
});
const base32z = rfc4648({
	prefix: "h",
	name: "base32z",
	alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
	bitsPerChar: 5
});
var base36_exports = /* @__PURE__ */ __export({
	base36: () => base36,
	base36upper: () => base36upper
});
const base36 = baseX({
	prefix: "k",
	name: "base36",
	alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
});
const base36upper = baseX({
	prefix: "K",
	name: "base36upper",
	alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var base58_exports = /* @__PURE__ */ __export({
	base58btc: () => base58btc,
	base58flickr: () => base58flickr
});
const base58btc = baseX({
	name: "base58btc",
	prefix: "z",
	alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
const base58flickr = baseX({
	name: "base58flickr",
	prefix: "Z",
	alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var base64_exports = /* @__PURE__ */ __export({
	base64: () => base64,
	base64pad: () => base64pad,
	base64url: () => base64url,
	base64urlpad: () => base64urlpad
});
const base64 = rfc4648({
	prefix: "m",
	name: "base64",
	alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
	bitsPerChar: 6
});
const base64pad = rfc4648({
	prefix: "M",
	name: "base64pad",
	alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	bitsPerChar: 6
});
const base64url = rfc4648({
	prefix: "u",
	name: "base64url",
	alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
	bitsPerChar: 6
});
const base64urlpad = rfc4648({
	prefix: "U",
	name: "base64urlpad",
	alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
	bitsPerChar: 6
});
var base256emoji_exports = /* @__PURE__ */ __export({ base256emoji: () => base256emoji });
var alphabet = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
var alphabetBytesToChars = alphabet.reduce((p$2, c$3, i$1) => {
	p$2[i$1] = c$3;
	return p$2;
}, []);
var alphabetCharsToBytes = alphabet.reduce((p$2, c$3, i$1) => {
	p$2[c$3.codePointAt(0)] = i$1;
	return p$2;
}, []);
function encode$2(data) {
	return data.reduce((p$2, c$3) => {
		p$2 += alphabetBytesToChars[c$3];
		return p$2;
	}, "");
}
function decode$3(str) {
	const byts = [];
	for (const char of str) {
		const byt = alphabetCharsToBytes[char.codePointAt(0)];
		if (byt === void 0) throw new Error(`Non-base256emoji character: ${char}`);
		byts.push(byt);
	}
	return new Uint8Array(byts);
}
const base256emoji = from$1({
	prefix: "🚀",
	name: "base256emoji",
	encode: encode$2,
	decode: decode$3
});
var encode_1 = encode$1;
var MSB = 128, MSBALL = -128, INT = Math.pow(2, 31);
function encode$1(num, out, offset) {
	out = out || [];
	offset = offset || 0;
	var oldOffset = offset;
	while (num >= INT) {
		out[offset++] = num & 255 | MSB;
		num /= 128;
	}
	while (num & MSBALL) {
		out[offset++] = num & 255 | MSB;
		num >>>= 7;
	}
	out[offset] = num | 0;
	encode$1.bytes = offset - oldOffset + 1;
	return out;
}
var decode$2 = read;
var MSB$1 = 128, REST$1 = 127;
function read(buf, offset) {
	var res = 0, offset = offset || 0, shift = 0, counter = offset, b$2, l$4 = buf.length;
	do {
		if (counter >= l$4) {
			read.bytes = 0;
			throw new RangeError("Could not decode varint");
		}
		b$2 = buf[counter++];
		res += shift < 28 ? (b$2 & REST$1) << shift : (b$2 & REST$1) * Math.pow(2, shift);
		shift += 7;
	} while (b$2 >= MSB$1);
	read.bytes = counter - offset;
	return res;
}
var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var length = function(value) {
	return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint_default = {
	encode: encode_1,
	decode: decode$2,
	encodingLength: length
};
const encodeTo = (int, target, offset = 0) => {
	varint_default.encode(int, target, offset);
	return target;
};
const encodingLength = (int) => {
	return varint_default.encodingLength(int);
};
const create = (code$1, digest$1) => {
	const size$2 = digest$1.byteLength;
	const sizeOffset = encodingLength(code$1);
	const digestOffset = sizeOffset + encodingLength(size$2);
	const bytes = new Uint8Array(digestOffset + size$2);
	encodeTo(code$1, bytes, 0);
	encodeTo(size$2, bytes, sizeOffset);
	bytes.set(digest$1, digestOffset);
	return new Digest(code$1, size$2, digest$1, bytes);
};
var Digest = class {
	constructor(code$1, size$2, digest$1, bytes) {
		this.code = code$1;
		this.size = size$2;
		this.digest = digest$1;
		this.bytes = bytes;
	}
};
const from = ({ name: name$1, code: code$1, encode: encode$5 }) => new Hasher(name$1, code$1, encode$5);
var Hasher = class {
	constructor(name$1, code$1, encode$5) {
		this.name = name$1;
		this.code = code$1;
		this.encode = encode$5;
	}
	digest(input) {
		if (input instanceof Uint8Array) {
			const result = this.encode(input);
			return result instanceof Uint8Array ? create(this.code, result) : result.then((digest$1) => create(this.code, digest$1));
		} else throw Error("Unknown type, must be binary type");
	}
};
var sha2_browser_exports = /* @__PURE__ */ __export({
	sha256: () => sha256,
	sha512: () => sha512
});
var sha = (name$1) => async (data) => new Uint8Array(await crypto.subtle.digest(name$1, data));
const sha256 = from({
	name: "sha2-256",
	code: 18,
	encode: sha("SHA-256")
});
const sha512 = from({
	name: "sha2-512",
	code: 19,
	encode: sha("SHA-512")
});
var identity_exports$1 = /* @__PURE__ */ __export({ identity: () => identity });
var code = 0;
var name = "identity";
var encode = coerce;
var digest = (input) => create(code, encode(input));
const identity = {
	code,
	name,
	encode,
	digest
};
new TextEncoder();
new TextDecoder();
Symbol.toStringTag;
var bases = {
	...identity_exports,
	...base2_exports,
	...base8_exports,
	...base10_exports,
	...base16_exports,
	...base32_exports,
	...base36_exports,
	...base58_exports,
	...base64_exports,
	...base256emoji_exports
};
({
	...sha2_browser_exports,
	...identity_exports$1
});
function createCodec(name$1, prefix, encode$5, decode$6) {
	return {
		name: name$1,
		prefix,
		encoder: {
			name: name$1,
			prefix,
			encode: encode$5
		},
		decoder: { decode: decode$6 }
	};
}
var string = createCodec("utf8", "u", (buf) => {
	return "u" + new TextDecoder("utf8").decode(buf);
}, (str) => {
	return new TextEncoder().encode(str.substring(1));
});
var ascii = createCodec("ascii", "a", (buf) => {
	let string$1 = "a";
	for (let i$1 = 0; i$1 < buf.length; i$1++) string$1 += String.fromCharCode(buf[i$1]);
	return string$1;
}, (str) => {
	str = str.substring(1);
	const buf = allocUnsafe(str.length);
	for (let i$1 = 0; i$1 < str.length; i$1++) buf[i$1] = str.charCodeAt(i$1);
	return buf;
});
var bases_default = {
	utf8: string,
	"utf-8": string,
	hex: bases.base16,
	latin1: ascii,
	ascii,
	binary: ascii,
	...bases
};
function fromString(string$1, encoding = "utf8") {
	const base$2 = bases_default[encoding];
	if (!base$2) throw new Error(`Unsupported encoding "${encoding}"`);
	if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) return asUint8Array(globalThis.Buffer.from(string$1, "utf-8"));
	return base$2.decoder.decode(`${base$2.prefix}${string$1}`);
}
function toString(array, encoding = "utf8") {
	const base$2 = bases_default[encoding];
	if (!base$2) throw new Error(`Unsupported encoding "${encoding}"`);
	if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
	return base$2.encoder.encode(array).substring(1);
}
var C = {
	waku: {
		publish: "waku_publish",
		batchPublish: "waku_batchPublish",
		subscribe: "waku_subscribe",
		batchSubscribe: "waku_batchSubscribe",
		subscription: "waku_subscription",
		unsubscribe: "waku_unsubscribe",
		batchUnsubscribe: "waku_batchUnsubscribe",
		batchFetchMessages: "waku_batchFetchMessages"
	},
	irn: {
		publish: "irn_publish",
		batchPublish: "irn_batchPublish",
		subscribe: "irn_subscribe",
		batchSubscribe: "irn_batchSubscribe",
		subscription: "irn_subscription",
		unsubscribe: "irn_unsubscribe",
		batchUnsubscribe: "irn_batchUnsubscribe",
		batchFetchMessages: "irn_batchFetchMessages"
	},
	iridium: {
		publish: "iridium_publish",
		batchPublish: "iridium_batchPublish",
		subscribe: "iridium_subscribe",
		batchSubscribe: "iridium_batchSubscribe",
		subscription: "iridium_subscription",
		unsubscribe: "iridium_unsubscribe",
		batchUnsubscribe: "iridium_batchUnsubscribe",
		batchFetchMessages: "iridium_batchFetchMessages"
	}
};
var require_util = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ERROR_MSG_INPUT = "Input must be an string, Buffer or Uint8Array";
	function normalizeInput(input) {
		let ret;
		if (input instanceof Uint8Array) ret = input;
		else if (typeof input === "string") ret = new TextEncoder().encode(input);
		else throw new Error(ERROR_MSG_INPUT);
		return ret;
	}
	function toHex(bytes) {
		return Array.prototype.map.call(bytes, function(n$2) {
			return (n$2 < 16 ? "0" : "") + n$2.toString(16);
		}).join("");
	}
	function uint32ToHex(val) {
		return (4294967296 + val).toString(16).substring(1);
	}
	function debugPrint(label, arr, size$2) {
		let msg = "\n" + label + " = ";
		for (let i$1 = 0; i$1 < arr.length; i$1 += 2) {
			if (size$2 === 32) {
				msg += uint32ToHex(arr[i$1]).toUpperCase();
				msg += " ";
				msg += uint32ToHex(arr[i$1 + 1]).toUpperCase();
			} else if (size$2 === 64) {
				msg += uint32ToHex(arr[i$1 + 1]).toUpperCase();
				msg += uint32ToHex(arr[i$1]).toUpperCase();
			} else throw new Error("Invalid size " + size$2);
			if (i$1 % 6 === 4) msg += "\n" + new Array(label.length + 4).join(" ");
			else if (i$1 < arr.length - 2) msg += " ";
		}
		console.log(msg);
	}
	function testSpeed(hashFn, N$3, M$1) {
		let startMs = (/* @__PURE__ */ new Date()).getTime();
		const input = new Uint8Array(N$3);
		for (let i$1 = 0; i$1 < N$3; i$1++) input[i$1] = i$1 % 256;
		const genMs = (/* @__PURE__ */ new Date()).getTime();
		console.log("Generated random input in " + (genMs - startMs) + "ms");
		startMs = genMs;
		for (let i$1 = 0; i$1 < M$1; i$1++) {
			const hashHex = hashFn(input);
			const hashMs = (/* @__PURE__ */ new Date()).getTime();
			const ms = hashMs - startMs;
			startMs = hashMs;
			console.log("Hashed in " + ms + "ms: " + hashHex.substring(0, 20) + "...");
			console.log(Math.round(N$3 / (1 << 20) / (ms / 1e3) * 100) / 100 + " MB PER SECOND");
		}
	}
	module.exports = {
		normalizeInput,
		toHex,
		debugPrint,
		testSpeed
	};
}));
var require_blake2b = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var util$1 = require_util();
	function ADD64AA(v$5, a$1, b$2) {
		const o0 = v$5[a$1] + v$5[b$2];
		let o1 = v$5[a$1 + 1] + v$5[b$2 + 1];
		if (o0 >= 4294967296) o1++;
		v$5[a$1] = o0;
		v$5[a$1 + 1] = o1;
	}
	function ADD64AC(v$5, a$1, b0, b1) {
		let o0 = v$5[a$1] + b0;
		if (b0 < 0) o0 += 4294967296;
		let o1 = v$5[a$1 + 1] + b1;
		if (o0 >= 4294967296) o1++;
		v$5[a$1] = o0;
		v$5[a$1 + 1] = o1;
	}
	function B2B_GET32(arr, i$1) {
		return arr[i$1] ^ arr[i$1 + 1] << 8 ^ arr[i$1 + 2] << 16 ^ arr[i$1 + 3] << 24;
	}
	function B2B_G(a$1, b$2, c$3, d$2, ix, iy) {
		const x0 = m$2[ix];
		const x1 = m$2[ix + 1];
		const y0 = m$2[iy];
		const y1 = m$2[iy + 1];
		ADD64AA(v$3, a$1, b$2);
		ADD64AC(v$3, a$1, x0, x1);
		let xor0 = v$3[d$2] ^ v$3[a$1];
		let xor1 = v$3[d$2 + 1] ^ v$3[a$1 + 1];
		v$3[d$2] = xor1;
		v$3[d$2 + 1] = xor0;
		ADD64AA(v$3, c$3, d$2);
		xor0 = v$3[b$2] ^ v$3[c$3];
		xor1 = v$3[b$2 + 1] ^ v$3[c$3 + 1];
		v$3[b$2] = xor0 >>> 24 ^ xor1 << 8;
		v$3[b$2 + 1] = xor1 >>> 24 ^ xor0 << 8;
		ADD64AA(v$3, a$1, b$2);
		ADD64AC(v$3, a$1, y0, y1);
		xor0 = v$3[d$2] ^ v$3[a$1];
		xor1 = v$3[d$2 + 1] ^ v$3[a$1 + 1];
		v$3[d$2] = xor0 >>> 16 ^ xor1 << 16;
		v$3[d$2 + 1] = xor1 >>> 16 ^ xor0 << 16;
		ADD64AA(v$3, c$3, d$2);
		xor0 = v$3[b$2] ^ v$3[c$3];
		xor1 = v$3[b$2 + 1] ^ v$3[c$3 + 1];
		v$3[b$2] = xor1 >>> 31 ^ xor0 << 1;
		v$3[b$2 + 1] = xor0 >>> 31 ^ xor1 << 1;
	}
	var BLAKE2B_IV32 = new Uint32Array([
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
	]);
	var SIGMA82 = new Uint8Array([
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
		3
	].map(function(x$3) {
		return x$3 * 2;
	}));
	var v$3 = new Uint32Array(32);
	var m$2 = new Uint32Array(32);
	function blake2bCompress(ctx$1, last) {
		let i$1 = 0;
		for (i$1 = 0; i$1 < 16; i$1++) {
			v$3[i$1] = ctx$1.h[i$1];
			v$3[i$1 + 16] = BLAKE2B_IV32[i$1];
		}
		v$3[24] = v$3[24] ^ ctx$1.t;
		v$3[25] = v$3[25] ^ ctx$1.t / 4294967296;
		if (last) {
			v$3[28] = ~v$3[28];
			v$3[29] = ~v$3[29];
		}
		for (i$1 = 0; i$1 < 32; i$1++) m$2[i$1] = B2B_GET32(ctx$1.b, 4 * i$1);
		for (i$1 = 0; i$1 < 12; i$1++) {
			B2B_G(0, 8, 16, 24, SIGMA82[i$1 * 16 + 0], SIGMA82[i$1 * 16 + 1]);
			B2B_G(2, 10, 18, 26, SIGMA82[i$1 * 16 + 2], SIGMA82[i$1 * 16 + 3]);
			B2B_G(4, 12, 20, 28, SIGMA82[i$1 * 16 + 4], SIGMA82[i$1 * 16 + 5]);
			B2B_G(6, 14, 22, 30, SIGMA82[i$1 * 16 + 6], SIGMA82[i$1 * 16 + 7]);
			B2B_G(0, 10, 20, 30, SIGMA82[i$1 * 16 + 8], SIGMA82[i$1 * 16 + 9]);
			B2B_G(2, 12, 22, 24, SIGMA82[i$1 * 16 + 10], SIGMA82[i$1 * 16 + 11]);
			B2B_G(4, 14, 16, 26, SIGMA82[i$1 * 16 + 12], SIGMA82[i$1 * 16 + 13]);
			B2B_G(6, 8, 18, 28, SIGMA82[i$1 * 16 + 14], SIGMA82[i$1 * 16 + 15]);
		}
		for (i$1 = 0; i$1 < 16; i$1++) ctx$1.h[i$1] = ctx$1.h[i$1] ^ v$3[i$1] ^ v$3[i$1 + 16];
	}
	var parameterBlock = new Uint8Array([
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	]);
	function blake2bInit(outlen, key, salt, personal) {
		if (outlen === 0 || outlen > 64) throw new Error("Illegal output length, expected 0 < length <= 64");
		if (key && key.length > 64) throw new Error("Illegal key, expected Uint8Array with 0 < length <= 64");
		if (salt && salt.length !== 16) throw new Error("Illegal salt, expected Uint8Array with length is 16");
		if (personal && personal.length !== 16) throw new Error("Illegal personal, expected Uint8Array with length is 16");
		const ctx$1 = {
			b: new Uint8Array(128),
			h: new Uint32Array(16),
			t: 0,
			c: 0,
			outlen
		};
		parameterBlock.fill(0);
		parameterBlock[0] = outlen;
		if (key) parameterBlock[1] = key.length;
		parameterBlock[2] = 1;
		parameterBlock[3] = 1;
		if (salt) parameterBlock.set(salt, 32);
		if (personal) parameterBlock.set(personal, 48);
		for (let i$1 = 0; i$1 < 16; i$1++) ctx$1.h[i$1] = BLAKE2B_IV32[i$1] ^ B2B_GET32(parameterBlock, i$1 * 4);
		if (key) {
			blake2bUpdate(ctx$1, key);
			ctx$1.c = 128;
		}
		return ctx$1;
	}
	function blake2bUpdate(ctx$1, input) {
		for (let i$1 = 0; i$1 < input.length; i$1++) {
			if (ctx$1.c === 128) {
				ctx$1.t += ctx$1.c;
				blake2bCompress(ctx$1, false);
				ctx$1.c = 0;
			}
			ctx$1.b[ctx$1.c++] = input[i$1];
		}
	}
	function blake2bFinal(ctx$1) {
		ctx$1.t += ctx$1.c;
		while (ctx$1.c < 128) ctx$1.b[ctx$1.c++] = 0;
		blake2bCompress(ctx$1, true);
		const out = new Uint8Array(ctx$1.outlen);
		for (let i$1 = 0; i$1 < ctx$1.outlen; i$1++) out[i$1] = ctx$1.h[i$1 >> 2] >> 8 * (i$1 & 3);
		return out;
	}
	function blake2b(input, key, outlen, salt, personal) {
		outlen = outlen || 64;
		input = util$1.normalizeInput(input);
		if (salt) salt = util$1.normalizeInput(salt);
		if (personal) personal = util$1.normalizeInput(personal);
		const ctx$1 = blake2bInit(outlen, key, salt, personal);
		blake2bUpdate(ctx$1, input);
		return blake2bFinal(ctx$1);
	}
	function blake2bHex(input, key, outlen, salt, personal) {
		const output = blake2b(input, key, outlen, salt, personal);
		return util$1.toHex(output);
	}
	module.exports = {
		blake2b,
		blake2bHex,
		blake2bInit,
		blake2bUpdate,
		blake2bFinal
	};
}));
var require_blake2s = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var util = require_util();
	function B2S_GET32(v$5, i$1) {
		return v$5[i$1] ^ v$5[i$1 + 1] << 8 ^ v$5[i$1 + 2] << 16 ^ v$5[i$1 + 3] << 24;
	}
	function B2S_G(a$1, b$2, c$3, d$2, x$3, y$2) {
		v$2[a$1] = v$2[a$1] + v$2[b$2] + x$3;
		v$2[d$2] = ROTR32(v$2[d$2] ^ v$2[a$1], 16);
		v$2[c$3] = v$2[c$3] + v$2[d$2];
		v$2[b$2] = ROTR32(v$2[b$2] ^ v$2[c$3], 12);
		v$2[a$1] = v$2[a$1] + v$2[b$2] + y$2;
		v$2[d$2] = ROTR32(v$2[d$2] ^ v$2[a$1], 8);
		v$2[c$3] = v$2[c$3] + v$2[d$2];
		v$2[b$2] = ROTR32(v$2[b$2] ^ v$2[c$3], 7);
	}
	function ROTR32(x$3, y$2) {
		return x$3 >>> y$2 ^ x$3 << 32 - y$2;
	}
	var BLAKE2S_IV = new Uint32Array([
		1779033703,
		3144134277,
		1013904242,
		2773480762,
		1359893119,
		2600822924,
		528734635,
		1541459225
	]);
	var SIGMA = new Uint8Array([
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
		0
	]);
	var v$2 = new Uint32Array(16);
	var m$1 = new Uint32Array(16);
	function blake2sCompress(ctx$1, last) {
		let i$1 = 0;
		for (i$1 = 0; i$1 < 8; i$1++) {
			v$2[i$1] = ctx$1.h[i$1];
			v$2[i$1 + 8] = BLAKE2S_IV[i$1];
		}
		v$2[12] ^= ctx$1.t;
		v$2[13] ^= ctx$1.t / 4294967296;
		if (last) v$2[14] = ~v$2[14];
		for (i$1 = 0; i$1 < 16; i$1++) m$1[i$1] = B2S_GET32(ctx$1.b, 4 * i$1);
		for (i$1 = 0; i$1 < 10; i$1++) {
			B2S_G(0, 4, 8, 12, m$1[SIGMA[i$1 * 16 + 0]], m$1[SIGMA[i$1 * 16 + 1]]);
			B2S_G(1, 5, 9, 13, m$1[SIGMA[i$1 * 16 + 2]], m$1[SIGMA[i$1 * 16 + 3]]);
			B2S_G(2, 6, 10, 14, m$1[SIGMA[i$1 * 16 + 4]], m$1[SIGMA[i$1 * 16 + 5]]);
			B2S_G(3, 7, 11, 15, m$1[SIGMA[i$1 * 16 + 6]], m$1[SIGMA[i$1 * 16 + 7]]);
			B2S_G(0, 5, 10, 15, m$1[SIGMA[i$1 * 16 + 8]], m$1[SIGMA[i$1 * 16 + 9]]);
			B2S_G(1, 6, 11, 12, m$1[SIGMA[i$1 * 16 + 10]], m$1[SIGMA[i$1 * 16 + 11]]);
			B2S_G(2, 7, 8, 13, m$1[SIGMA[i$1 * 16 + 12]], m$1[SIGMA[i$1 * 16 + 13]]);
			B2S_G(3, 4, 9, 14, m$1[SIGMA[i$1 * 16 + 14]], m$1[SIGMA[i$1 * 16 + 15]]);
		}
		for (i$1 = 0; i$1 < 8; i$1++) ctx$1.h[i$1] ^= v$2[i$1] ^ v$2[i$1 + 8];
	}
	function blake2sInit(outlen, key) {
		if (!(outlen > 0 && outlen <= 32)) throw new Error("Incorrect output length, should be in [1, 32]");
		const keylen = key ? key.length : 0;
		if (key && !(keylen > 0 && keylen <= 32)) throw new Error("Incorrect key length, should be in [1, 32]");
		const ctx$1 = {
			h: new Uint32Array(BLAKE2S_IV),
			b: new Uint8Array(64),
			c: 0,
			t: 0,
			outlen
		};
		ctx$1.h[0] ^= 16842752 ^ keylen << 8 ^ outlen;
		if (keylen > 0) {
			blake2sUpdate(ctx$1, key);
			ctx$1.c = 64;
		}
		return ctx$1;
	}
	function blake2sUpdate(ctx$1, input) {
		for (let i$1 = 0; i$1 < input.length; i$1++) {
			if (ctx$1.c === 64) {
				ctx$1.t += ctx$1.c;
				blake2sCompress(ctx$1, false);
				ctx$1.c = 0;
			}
			ctx$1.b[ctx$1.c++] = input[i$1];
		}
	}
	function blake2sFinal(ctx$1) {
		ctx$1.t += ctx$1.c;
		while (ctx$1.c < 64) ctx$1.b[ctx$1.c++] = 0;
		blake2sCompress(ctx$1, true);
		const out = new Uint8Array(ctx$1.outlen);
		for (let i$1 = 0; i$1 < ctx$1.outlen; i$1++) out[i$1] = ctx$1.h[i$1 >> 2] >> 8 * (i$1 & 3) & 255;
		return out;
	}
	function blake2s(input, key, outlen) {
		outlen = outlen || 32;
		input = util.normalizeInput(input);
		const ctx$1 = blake2sInit(outlen, key);
		blake2sUpdate(ctx$1, input);
		return blake2sFinal(ctx$1);
	}
	function blake2sHex(input, key, outlen) {
		const output = blake2s(input, key, outlen);
		return util.toHex(output);
	}
	module.exports = {
		blake2s,
		blake2sHex,
		blake2sInit,
		blake2sUpdate,
		blake2sFinal
	};
}));
var require_blakejs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var b2b = require_blake2b();
	var b2s = require_blake2s();
	module.exports = {
		blake2b: b2b.blake2b,
		blake2bHex: b2b.blake2bHex,
		blake2bInit: b2b.blake2bInit,
		blake2bUpdate: b2b.blake2bUpdate,
		blake2bFinal: b2b.blake2bFinal,
		blake2s: b2s.blake2s,
		blake2sHex: b2s.blake2sHex,
		blake2sInit: b2s.blake2sInit,
		blake2sUpdate: b2s.blake2sUpdate,
		blake2sFinal: b2s.blake2sFinal
	};
}));
const PARSE_ERROR = "PARSE_ERROR";
const INVALID_REQUEST = "INVALID_REQUEST";
const METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
const INVALID_PARAMS = "INVALID_PARAMS";
const INTERNAL_ERROR = "INTERNAL_ERROR";
const SERVER_ERROR = "SERVER_ERROR";
const RESERVED_ERROR_CODES = [
	-32700,
	-32600,
	-32601,
	-32602,
	-32603
];
const SERVER_ERROR_CODE_RANGE = [-32e3, -32099];
const STANDARD_ERROR_MAP = {
	[PARSE_ERROR]: {
		code: -32700,
		message: "Parse error"
	},
	[INVALID_REQUEST]: {
		code: -32600,
		message: "Invalid Request"
	},
	[METHOD_NOT_FOUND]: {
		code: -32601,
		message: "Method not found"
	},
	[INVALID_PARAMS]: {
		code: -32602,
		message: "Invalid params"
	},
	[INTERNAL_ERROR]: {
		code: -32603,
		message: "Internal error"
	},
	[SERVER_ERROR]: {
		code: -32e3,
		message: "Server error"
	}
};
const DEFAULT_ERROR = SERVER_ERROR;
function isServerErrorCode(code$1) {
	return code$1 <= SERVER_ERROR_CODE_RANGE[0] && code$1 >= SERVER_ERROR_CODE_RANGE[1];
}
function isReservedErrorCode(code$1) {
	return RESERVED_ERROR_CODES.includes(code$1);
}
function isValidErrorCode(code$1) {
	return typeof code$1 === "number";
}
function getError(type) {
	if (!Object.keys(STANDARD_ERROR_MAP).includes(type)) return STANDARD_ERROR_MAP[DEFAULT_ERROR];
	return STANDARD_ERROR_MAP[type];
}
function getErrorByCode(code$1) {
	const match = Object.values(STANDARD_ERROR_MAP).find((e$1) => e$1.code === code$1);
	if (!match) return STANDARD_ERROR_MAP[DEFAULT_ERROR];
	return match;
}
function validateJsonRpcError(response) {
	if (typeof response.error.code === "undefined") return {
		valid: false,
		error: "Missing code for JSON-RPC error"
	};
	if (typeof response.error.message === "undefined") return {
		valid: false,
		error: "Missing message for JSON-RPC error"
	};
	if (!isValidErrorCode(response.error.code)) return {
		valid: false,
		error: `Invalid error code type for JSON-RPC: ${response.error.code}`
	};
	if (isReservedErrorCode(response.error.code)) {
		const error = getErrorByCode(response.error.code);
		if (error.message !== STANDARD_ERROR_MAP["SERVER_ERROR"].message && response.error.message === error.message) return {
			valid: false,
			error: `Invalid error code message for JSON-RPC: ${response.error.code}`
		};
	}
	return { valid: true };
}
function parseConnectionError(e$1, url, type) {
	return e$1.message.includes("getaddrinfo ENOTFOUND") || e$1.message.includes("connect ECONNREFUSED") ? /* @__PURE__ */ new Error(`Unavailable ${type} RPC url at ${url}`) : e$1;
}
var tslib_es6_exports = /* @__PURE__ */ __export({
	__assign: () => __assign,
	__asyncDelegator: () => __asyncDelegator,
	__asyncGenerator: () => __asyncGenerator,
	__asyncValues: () => __asyncValues,
	__await: () => __await,
	__awaiter: () => __awaiter,
	__classPrivateFieldGet: () => __classPrivateFieldGet,
	__classPrivateFieldSet: () => __classPrivateFieldSet,
	__createBinding: () => __createBinding,
	__decorate: () => __decorate,
	__exportStar: () => __exportStar,
	__extends: () => __extends,
	__generator: () => __generator,
	__importDefault: () => __importDefault,
	__importStar: () => __importStar,
	__makeTemplateObject: () => __makeTemplateObject,
	__metadata: () => __metadata,
	__param: () => __param,
	__read: () => __read,
	__rest: () => __rest,
	__spread: () => __spread,
	__spreadArrays: () => __spreadArrays,
	__values: () => __values
});
function __extends(d$2, b$2) {
	extendStatics(d$2, b$2);
	function __() {
		this.constructor = d$2;
	}
	d$2.prototype = b$2 === null ? Object.create(b$2) : (__.prototype = b$2.prototype, new __());
}
function __rest(s$1, e$1) {
	var t = {};
	for (var p$2 in s$1) if (Object.prototype.hasOwnProperty.call(s$1, p$2) && e$1.indexOf(p$2) < 0) t[p$2] = s$1[p$2];
	if (s$1 != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i$1 = 0, p$2 = Object.getOwnPropertySymbols(s$1); i$1 < p$2.length; i$1++) if (e$1.indexOf(p$2[i$1]) < 0 && Object.prototype.propertyIsEnumerable.call(s$1, p$2[i$1])) t[p$2[i$1]] = s$1[p$2[i$1]];
	}
	return t;
}
function __decorate(decorators, target, key, desc) {
	var c$3 = arguments.length, r$2 = c$3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$2;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$2 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$1 = decorators.length - 1; i$1 >= 0; i$1--) if (d$2 = decorators[i$1]) r$2 = (c$3 < 3 ? d$2(r$2) : c$3 > 3 ? d$2(target, key, r$2) : d$2(target, key)) || r$2;
	return c$3 > 3 && r$2 && Object.defineProperty(target, key, r$2), r$2;
}
function __param(paramIndex, decorator) {
	return function(target, key) {
		decorator(target, key, paramIndex);
	};
}
function __metadata(metadataKey, metadataValue) {
	if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P$3, generator) {
	function adopt(value) {
		return value instanceof P$3 ? value : new P$3(function(resolve) {
			resolve(value);
		});
	}
	return new (P$3 || (P$3 = Promise))(function(resolve, reject) {
		function fulfilled(value) {
			try {
				step(generator.next(value));
			} catch (e$1) {
				reject(e$1);
			}
		}
		function rejected(value) {
			try {
				step(generator["throw"](value));
			} catch (e$1) {
				reject(e$1);
			}
		}
		function step(result) {
			result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
		}
		step((generator = generator.apply(thisArg, _arguments || [])).next());
	});
}
function __generator(thisArg, body) {
	var _$1 = {
		label: 0,
		sent: function() {
			if (t[0] & 1) throw t[1];
			return t[1];
		},
		trys: [],
		ops: []
	}, f$2, y$2, t, g$2;
	return g$2 = {
		next: verb(0),
		"throw": verb(1),
		"return": verb(2)
	}, typeof Symbol === "function" && (g$2[Symbol.iterator] = function() {
		return this;
	}), g$2;
	function verb(n$2) {
		return function(v$5) {
			return step([n$2, v$5]);
		};
	}
	function step(op) {
		if (f$2) throw new TypeError("Generator is already executing.");
		while (_$1) try {
			if (f$2 = 1, y$2 && (t = op[0] & 2 ? y$2["return"] : op[0] ? y$2["throw"] || ((t = y$2["return"]) && t.call(y$2), 0) : y$2.next) && !(t = t.call(y$2, op[1])).done) return t;
			if (y$2 = 0, t) op = [op[0] & 2, t.value];
			switch (op[0]) {
				case 0:
				case 1:
					t = op;
					break;
				case 4:
					_$1.label++;
					return {
						value: op[1],
						done: false
					};
				case 5:
					_$1.label++;
					y$2 = op[1];
					op = [0];
					continue;
				case 7:
					op = _$1.ops.pop();
					_$1.trys.pop();
					continue;
				default:
					if (!(t = _$1.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
						_$1 = 0;
						continue;
					}
					if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
						_$1.label = op[1];
						break;
					}
					if (op[0] === 6 && _$1.label < t[1]) {
						_$1.label = t[1];
						t = op;
						break;
					}
					if (t && _$1.label < t[2]) {
						_$1.label = t[2];
						_$1.ops.push(op);
						break;
					}
					if (t[2]) _$1.ops.pop();
					_$1.trys.pop();
					continue;
			}
			op = body.call(thisArg, _$1);
		} catch (e$1) {
			op = [6, e$1];
			y$2 = 0;
		} finally {
			f$2 = t = 0;
		}
		if (op[0] & 5) throw op[1];
		return {
			value: op[0] ? op[1] : void 0,
			done: true
		};
	}
}
function __createBinding(o$4, m$4, k$3, k2) {
	if (k2 === void 0) k2 = k$3;
	o$4[k2] = m$4[k$3];
}
function __exportStar(m$4, exports$1) {
	for (var p$2 in m$4) if (p$2 !== "default" && !exports$1.hasOwnProperty(p$2)) exports$1[p$2] = m$4[p$2];
}
function __values(o$4) {
	var s$1 = typeof Symbol === "function" && Symbol.iterator, m$4 = s$1 && o$4[s$1], i$1 = 0;
	if (m$4) return m$4.call(o$4);
	if (o$4 && typeof o$4.length === "number") return { next: function() {
		if (o$4 && i$1 >= o$4.length) o$4 = void 0;
		return {
			value: o$4 && o$4[i$1++],
			done: !o$4
		};
	} };
	throw new TypeError(s$1 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o$4, n$2) {
	var m$4 = typeof Symbol === "function" && o$4[Symbol.iterator];
	if (!m$4) return o$4;
	var i$1 = m$4.call(o$4), r$2, ar$1 = [], e$1;
	try {
		while ((n$2 === void 0 || n$2-- > 0) && !(r$2 = i$1.next()).done) ar$1.push(r$2.value);
	} catch (error) {
		e$1 = { error };
	} finally {
		try {
			if (r$2 && !r$2.done && (m$4 = i$1["return"])) m$4.call(i$1);
		} finally {
			if (e$1) throw e$1.error;
		}
	}
	return ar$1;
}
function __spread() {
	for (var ar$1 = [], i$1 = 0; i$1 < arguments.length; i$1++) ar$1 = ar$1.concat(__read(arguments[i$1]));
	return ar$1;
}
function __spreadArrays() {
	for (var s$1 = 0, i$1 = 0, il = arguments.length; i$1 < il; i$1++) s$1 += arguments[i$1].length;
	for (var r$2 = Array(s$1), k$3 = 0, i$1 = 0; i$1 < il; i$1++) for (var a$1 = arguments[i$1], j$2 = 0, jl = a$1.length; j$2 < jl; j$2++, k$3++) r$2[k$3] = a$1[j$2];
	return r$2;
}
function __await(v$5) {
	return this instanceof __await ? (this.v = v$5, this) : new __await(v$5);
}
function __asyncGenerator(thisArg, _arguments, generator) {
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var g$2 = generator.apply(thisArg, _arguments || []), i$1, q$1 = [];
	return i$1 = {}, verb("next"), verb("throw"), verb("return"), i$1[Symbol.asyncIterator] = function() {
		return this;
	}, i$1;
	function verb(n$2) {
		if (g$2[n$2]) i$1[n$2] = function(v$5) {
			return new Promise(function(a$1, b$2) {
				q$1.push([
					n$2,
					v$5,
					a$1,
					b$2
				]) > 1 || resume(n$2, v$5);
			});
		};
	}
	function resume(n$2, v$5) {
		try {
			step(g$2[n$2](v$5));
		} catch (e$1) {
			settle(q$1[0][3], e$1);
		}
	}
	function step(r$2) {
		r$2.value instanceof __await ? Promise.resolve(r$2.value.v).then(fulfill, reject) : settle(q$1[0][2], r$2);
	}
	function fulfill(value) {
		resume("next", value);
	}
	function reject(value) {
		resume("throw", value);
	}
	function settle(f$2, v$5) {
		if (f$2(v$5), q$1.shift(), q$1.length) resume(q$1[0][0], q$1[0][1]);
	}
}
function __asyncDelegator(o$4) {
	var i$1, p$2;
	return i$1 = {}, verb("next"), verb("throw", function(e$1) {
		throw e$1;
	}), verb("return"), i$1[Symbol.iterator] = function() {
		return this;
	}, i$1;
	function verb(n$2, f$2) {
		i$1[n$2] = o$4[n$2] ? function(v$5) {
			return (p$2 = !p$2) ? {
				value: __await(o$4[n$2](v$5)),
				done: n$2 === "return"
			} : f$2 ? f$2(v$5) : v$5;
		} : f$2;
	}
}
function __asyncValues(o$4) {
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var m$4 = o$4[Symbol.asyncIterator], i$1;
	return m$4 ? m$4.call(o$4) : (o$4 = typeof __values === "function" ? __values(o$4) : o$4[Symbol.iterator](), i$1 = {}, verb("next"), verb("throw"), verb("return"), i$1[Symbol.asyncIterator] = function() {
		return this;
	}, i$1);
	function verb(n$2) {
		i$1[n$2] = o$4[n$2] && function(v$5) {
			return new Promise(function(resolve, reject) {
				v$5 = o$4[n$2](v$5), settle(resolve, reject, v$5.done, v$5.value);
			});
		};
	}
	function settle(resolve, reject, d$2, v$5) {
		Promise.resolve(v$5).then(function(v$6) {
			resolve({
				value: v$6,
				done: d$2
			});
		}, reject);
	}
}
function __makeTemplateObject(cooked, raw) {
	if (Object.defineProperty) Object.defineProperty(cooked, "raw", { value: raw });
	else cooked.raw = raw;
	return cooked;
}
function __importStar(mod) {
	if (mod && mod.__esModule) return mod;
	var result = {};
	if (mod != null) {
		for (var k$3 in mod) if (Object.hasOwnProperty.call(mod, k$3)) result[k$3] = mod[k$3];
	}
	result.default = mod;
	return result;
}
function __importDefault(mod) {
	return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, privateMap) {
	if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
	return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
	if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
	privateMap.set(receiver, value);
	return value;
}
var extendStatics, __assign;
var init_tslib_es6 = __esmMin((() => {
	extendStatics = function(d$2, b$2) {
		extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d$3, b$3) {
			d$3.__proto__ = b$3;
		} || function(d$3, b$3) {
			for (var p$2 in b$3) if (b$3.hasOwnProperty(p$2)) d$3[p$2] = b$3[p$2];
		};
		return extendStatics(d$2, b$2);
	};
	__assign = function() {
		__assign = Object.assign || function __assign$2(t) {
			for (var s$1, i$1 = 1, n$2 = arguments.length; i$1 < n$2; i$1++) {
				s$1 = arguments[i$1];
				for (var p$2 in s$1) if (Object.prototype.hasOwnProperty.call(s$1, p$2)) t[p$2] = s$1[p$2];
			}
			return t;
		};
		return __assign.apply(this, arguments);
	};
}));
var require_crypto = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isBrowserCryptoAvailable = exports.getSubtleCrypto = exports.getBrowerCrypto = void 0;
	function getBrowerCrypto() {
		return (global === null || global === void 0 ? void 0 : global.crypto) || (global === null || global === void 0 ? void 0 : global.msCrypto) || {};
	}
	exports.getBrowerCrypto = getBrowerCrypto;
	function getSubtleCrypto() {
		const browserCrypto = getBrowerCrypto();
		return browserCrypto.subtle || browserCrypto.webkitSubtle;
	}
	exports.getSubtleCrypto = getSubtleCrypto;
	function isBrowserCryptoAvailable() {
		return !!getBrowerCrypto() && !!getSubtleCrypto();
	}
	exports.isBrowserCryptoAvailable = isBrowserCryptoAvailable;
}));
var require_env = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isBrowser = exports.isNode = exports.isReactNative = void 0;
	function isReactNative() {
		return typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative";
	}
	exports.isReactNative = isReactNative;
	function isNode$1() {
		return typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined";
	}
	exports.isNode = isNode$1;
	function isBrowser() {
		return !isReactNative() && !isNode$1();
	}
	exports.isBrowser = isBrowser;
}));
var require_cjs = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
	tslib_1.__exportStar(require_crypto(), exports);
	tslib_1.__exportStar(require_env(), exports);
}));
var env_exports = /* @__PURE__ */ __export({ isNodeJs: () => isNodeJs });
var import_cjs = require_cjs();
__reExport(env_exports, /* @__PURE__ */ __toESM(require_cjs()));
const isNodeJs = import_cjs.isNode;
function payloadId(entropy = 3) {
	return Date.now() * Math.pow(10, entropy) + Math.floor(Math.random() * Math.pow(10, entropy));
}
function getBigIntRpcId(entropy = 6) {
	return BigInt(payloadId(entropy));
}
function formatJsonRpcRequest(method, params, id) {
	return {
		id: id || payloadId(),
		jsonrpc: "2.0",
		method,
		params
	};
}
function formatJsonRpcResult(id, result) {
	return {
		id,
		jsonrpc: "2.0",
		result
	};
}
function formatJsonRpcError(id, error, data) {
	return {
		id,
		jsonrpc: "2.0",
		error: formatErrorMessage(error, data)
	};
}
function formatErrorMessage(error, data) {
	if (typeof error === "undefined") return getError(INTERNAL_ERROR);
	if (typeof error === "string") error = Object.assign(Object.assign({}, getError(SERVER_ERROR)), { message: error });
	if (typeof data !== "undefined") error.data = data;
	if (isReservedErrorCode(error.code)) error = getErrorByCode(error.code);
	return error;
}
function isValidRoute(route) {
	if (route.includes("*")) return isValidWildcardRoute(route);
	if (/\W/g.test(route)) return false;
	return true;
}
function isValidDefaultRoute(route) {
	return route === "*";
}
function isValidWildcardRoute(route) {
	if (isValidDefaultRoute(route)) return true;
	if (!route.includes("*")) return false;
	if (route.split("*").length !== 2) return false;
	if (route.split("*").filter((x$3) => x$3.trim() === "").length !== 1) return false;
	return true;
}
function isValidLeadingWildcardRoute(route) {
	return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[0].trim();
}
function isValidTrailingWildcardRoute(route) {
	return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[1].trim();
}
var e = class {};
var o$2 = class extends e {
	constructor(c$3) {
		super();
	}
};
var n = class extends e {
	constructor() {
		super();
	}
};
var r = class extends n {
	constructor(c$3) {
		super();
	}
};
var HTTP_REGEX = "^https?:";
var WS_REGEX = "^wss?:";
function getUrlProtocol(url) {
	const matches = url.match(new RegExp(/^\w+:/, "gi"));
	if (!matches || !matches.length) return;
	return matches[0];
}
function matchRegexProtocol(url, regex) {
	const protocol = getUrlProtocol(url);
	if (typeof protocol === "undefined") return false;
	return new RegExp(regex).test(protocol);
}
function isHttpUrl(url) {
	return matchRegexProtocol(url, HTTP_REGEX);
}
function isWsUrl(url) {
	return matchRegexProtocol(url, WS_REGEX);
}
function isLocalhostUrl(url) {
	return (/* @__PURE__ */ new RegExp("wss?://localhost(:d{2,5})?")).test(url);
}
function isJsonRpcPayload(payload) {
	return typeof payload === "object" && "id" in payload && "jsonrpc" in payload && payload.jsonrpc === "2.0";
}
function isJsonRpcRequest(payload) {
	return isJsonRpcPayload(payload) && "method" in payload;
}
function isJsonRpcResponse(payload) {
	return isJsonRpcPayload(payload) && (isJsonRpcResult(payload) || isJsonRpcError(payload));
}
function isJsonRpcResult(payload) {
	return "result" in payload;
}
function isJsonRpcError(payload) {
	return "error" in payload;
}
function isJsonRpcValidationInvalid(validation) {
	return "error" in validation && validation.valid === false;
}
var esm_exports = /* @__PURE__ */ __export({
	DEFAULT_ERROR: () => DEFAULT_ERROR,
	IBaseJsonRpcProvider: () => n,
	IEvents: () => e,
	IJsonRpcConnection: () => o$2,
	IJsonRpcProvider: () => r,
	INTERNAL_ERROR: () => INTERNAL_ERROR,
	INVALID_PARAMS: () => INVALID_PARAMS,
	INVALID_REQUEST: () => INVALID_REQUEST,
	METHOD_NOT_FOUND: () => METHOD_NOT_FOUND,
	PARSE_ERROR: () => PARSE_ERROR,
	RESERVED_ERROR_CODES: () => RESERVED_ERROR_CODES,
	SERVER_ERROR: () => SERVER_ERROR,
	SERVER_ERROR_CODE_RANGE: () => SERVER_ERROR_CODE_RANGE,
	STANDARD_ERROR_MAP: () => STANDARD_ERROR_MAP,
	formatErrorMessage: () => formatErrorMessage,
	formatJsonRpcError: () => formatJsonRpcError,
	formatJsonRpcRequest: () => formatJsonRpcRequest,
	formatJsonRpcResult: () => formatJsonRpcResult,
	getBigIntRpcId: () => getBigIntRpcId,
	getError: () => getError,
	getErrorByCode: () => getErrorByCode,
	isHttpUrl: () => isHttpUrl,
	isJsonRpcError: () => isJsonRpcError,
	isJsonRpcPayload: () => isJsonRpcPayload,
	isJsonRpcRequest: () => isJsonRpcRequest,
	isJsonRpcResponse: () => isJsonRpcResponse,
	isJsonRpcResult: () => isJsonRpcResult,
	isJsonRpcValidationInvalid: () => isJsonRpcValidationInvalid,
	isLocalhostUrl: () => isLocalhostUrl,
	isNodeJs: () => isNodeJs,
	isReservedErrorCode: () => isReservedErrorCode,
	isServerErrorCode: () => isServerErrorCode,
	isValidDefaultRoute: () => isValidDefaultRoute,
	isValidErrorCode: () => isValidErrorCode,
	isValidLeadingWildcardRoute: () => isValidLeadingWildcardRoute,
	isValidRoute: () => isValidRoute,
	isValidTrailingWildcardRoute: () => isValidTrailingWildcardRoute,
	isValidWildcardRoute: () => isValidWildcardRoute,
	isWsUrl: () => isWsUrl,
	parseConnectionError: () => parseConnectionError,
	payloadId: () => payloadId,
	validateJsonRpcError: () => validateJsonRpcError
});
__reExport(esm_exports, env_exports);
var import_events$2 = require_events();
var o$1 = class extends r {
	constructor(t) {
		super(t), this.events = new import_events$2.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners();
	}
	async connect(t = this.connection) {
		await this.open(t);
	}
	async disconnect() {
		await this.close();
	}
	on(t, e$1) {
		this.events.on(t, e$1);
	}
	once(t, e$1) {
		this.events.once(t, e$1);
	}
	off(t, e$1) {
		this.events.off(t, e$1);
	}
	removeListener(t, e$1) {
		this.events.removeListener(t, e$1);
	}
	async request(t, e$1) {
		return this.requestStrict(formatJsonRpcRequest(t.method, t.params || [], t.id || getBigIntRpcId().toString()), e$1);
	}
	async requestStrict(t, e$1) {
		return new Promise(async (i$1, s$1) => {
			if (!this.connection.connected) try {
				await this.open();
			} catch (n$2) {
				s$1(n$2);
			}
			this.events.on(`${t.id}`, (n$2) => {
				isJsonRpcError(n$2) ? s$1(n$2.error) : i$1(n$2.result);
			});
			try {
				await this.connection.send(t, e$1);
			} catch (n$2) {
				s$1(n$2);
			}
		});
	}
	setConnection(t = this.connection) {
		return t;
	}
	onPayload(t) {
		this.events.emit("payload", t), isJsonRpcResponse(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
			type: t.method,
			data: t.params
		});
	}
	onClose(t) {
		t && t.code === 3e3 && this.events.emit("error", /* @__PURE__ */ new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason ? `(${t.reason})` : ""}`)), this.events.emit("disconnect");
	}
	async open(t = this.connection) {
		this.connection === t && this.connection.connected || (this.connection.connected && this.close(), typeof t == "string" && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
	}
	async close() {
		await this.connection.close();
	}
	registerEventListeners() {
		this.hasRegisteredEventListeners || (this.connection.on("payload", (t) => this.onPayload(t)), this.connection.on("close", (t) => this.onClose(t)), this.connection.on("error", (t) => this.events.emit("error", t)), this.connection.on("register_error", (t) => this.onClose()), this.hasRegisteredEventListeners = !0);
	}
};
var require_browser = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function() {
		throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
	};
}));
var import_events$1 = require_events();
var v$1 = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require_browser(), w$1 = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", d$1 = (r$2) => r$2.split("?")[0], h = 10, b = v$1();
var f$1 = class {
	constructor(e$1) {
		if (this.url = e$1, this.events = new import_events$1.EventEmitter(), this.registering = !1, !isWsUrl(e$1)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e$1}`);
		this.url = e$1;
	}
	get connected() {
		return typeof this.socket < "u";
	}
	get connecting() {
		return this.registering;
	}
	on(e$1, t) {
		this.events.on(e$1, t);
	}
	once(e$1, t) {
		this.events.once(e$1, t);
	}
	off(e$1, t) {
		this.events.off(e$1, t);
	}
	removeListener(e$1, t) {
		this.events.removeListener(e$1, t);
	}
	async open(e$1 = this.url) {
		await this.register(e$1);
	}
	async close() {
		return new Promise((e$1, t) => {
			if (typeof this.socket > "u") {
				t(/* @__PURE__ */ new Error("Connection already closed"));
				return;
			}
			this.socket.onclose = (n$2) => {
				this.onClose(n$2), e$1();
			}, this.socket.close();
		});
	}
	async send(e$1) {
		typeof this.socket > "u" && (this.socket = await this.register());
		try {
			this.socket.send(safeJsonStringify(e$1));
		} catch (t) {
			this.onError(e$1.id, t);
		}
	}
	register(e$1 = this.url) {
		if (!isWsUrl(e$1)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e$1}`);
		if (this.registering) {
			const t = this.events.getMaxListeners();
			return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((n$2, s$1) => {
				this.events.once("register_error", (o$4) => {
					this.resetMaxListeners(), s$1(o$4);
				}), this.events.once("open", () => {
					if (this.resetMaxListeners(), typeof this.socket > "u") return s$1(/* @__PURE__ */ new Error("WebSocket connection is missing or invalid"));
					n$2(this.socket);
				});
			});
		}
		return this.url = e$1, this.registering = !0, new Promise((t, n$2) => {
			const o$4 = new b(e$1, [], (0, esm_exports.isReactNative)() ? void 0 : { rejectUnauthorized: !isLocalhostUrl(e$1) });
			w$1() ? o$4.onerror = (i$1) => {
				const a$1 = i$1;
				n$2(this.emitError(a$1.error));
			} : o$4.on("error", (i$1) => {
				n$2(this.emitError(i$1));
			}), o$4.onopen = () => {
				this.onOpen(o$4), t(o$4);
			};
		});
	}
	onOpen(e$1) {
		e$1.onmessage = (t) => this.onPayload(t), e$1.onclose = (t) => this.onClose(t), this.socket = e$1, this.registering = !1, this.events.emit("open");
	}
	onClose(e$1) {
		this.socket = void 0, this.registering = !1, this.events.emit("close", e$1);
	}
	onPayload(e$1) {
		if (typeof e$1.data > "u") return;
		const t = typeof e$1.data == "string" ? safeJsonParse(e$1.data) : e$1.data;
		this.events.emit("payload", t);
	}
	onError(e$1, t) {
		const n$2 = this.parseError(t), o$4 = formatJsonRpcError(e$1, n$2.message || n$2.toString());
		this.events.emit("payload", o$4);
	}
	parseError(e$1, t = this.url) {
		return parseConnectionError(e$1, d$1(t), "WS");
	}
	resetMaxListeners() {
		this.events.getMaxListeners() > h && this.events.setMaxListeners(h);
	}
	emitError(e$1) {
		const t = this.parseError(new Error(e$1?.message || `WebSocket connection failed for host: ${d$1(this.url)}`));
		return this.events.emit("register_error", t), t;
	}
};
var require_browser_ponyfill = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var __global__ = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof global !== "undefined" && global;
	var __globalThis__ = (function() {
		function F() {
			this.fetch = false;
			this.DOMException = __global__.DOMException;
		}
		F.prototype = __global__;
		return new F();
	})();
	(function(globalThis$1) {
		(function(exports$1) {
			var g$2 = typeof globalThis$1 !== "undefined" && globalThis$1 || typeof self !== "undefined" && self || typeof global !== "undefined" && global || {};
			var support = {
				searchParams: "URLSearchParams" in g$2,
				iterable: "Symbol" in g$2 && "iterator" in Symbol,
				blob: "FileReader" in g$2 && "Blob" in g$2 && (function() {
					try {
						new Blob();
						return true;
					} catch (e$1) {
						return false;
					}
				})(),
				formData: "FormData" in g$2,
				arrayBuffer: "ArrayBuffer" in g$2
			};
			function isDataView(obj) {
				return obj && DataView.prototype.isPrototypeOf(obj);
			}
			if (support.arrayBuffer) {
				var viewClasses = [
					"[object Int8Array]",
					"[object Uint8Array]",
					"[object Uint8ClampedArray]",
					"[object Int16Array]",
					"[object Uint16Array]",
					"[object Int32Array]",
					"[object Uint32Array]",
					"[object Float32Array]",
					"[object Float64Array]"
				];
				var isArrayBufferView = ArrayBuffer.isView || function(obj) {
					return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
				};
			}
			function normalizeName(name$1) {
				if (typeof name$1 !== "string") name$1 = String(name$1);
				if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name$1) || name$1 === "") throw new TypeError("Invalid character in header field name: \"" + name$1 + "\"");
				return name$1.toLowerCase();
			}
			function normalizeValue(value) {
				if (typeof value !== "string") value = String(value);
				return value;
			}
			function iteratorFor(items) {
				var iterator = { next: function() {
					var value = items.shift();
					return {
						done: value === void 0,
						value
					};
				} };
				if (support.iterable) iterator[Symbol.iterator] = function() {
					return iterator;
				};
				return iterator;
			}
			function Headers(headers) {
				this.map = {};
				if (headers instanceof Headers) headers.forEach(function(value, name$1) {
					this.append(name$1, value);
				}, this);
				else if (Array.isArray(headers)) headers.forEach(function(header) {
					if (header.length != 2) throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + header.length);
					this.append(header[0], header[1]);
				}, this);
				else if (headers) Object.getOwnPropertyNames(headers).forEach(function(name$1) {
					this.append(name$1, headers[name$1]);
				}, this);
			}
			Headers.prototype.append = function(name$1, value) {
				name$1 = normalizeName(name$1);
				value = normalizeValue(value);
				var oldValue = this.map[name$1];
				this.map[name$1] = oldValue ? oldValue + ", " + value : value;
			};
			Headers.prototype["delete"] = function(name$1) {
				delete this.map[normalizeName(name$1)];
			};
			Headers.prototype.get = function(name$1) {
				name$1 = normalizeName(name$1);
				return this.has(name$1) ? this.map[name$1] : null;
			};
			Headers.prototype.has = function(name$1) {
				return this.map.hasOwnProperty(normalizeName(name$1));
			};
			Headers.prototype.set = function(name$1, value) {
				this.map[normalizeName(name$1)] = normalizeValue(value);
			};
			Headers.prototype.forEach = function(callback, thisArg) {
				for (var name$1 in this.map) if (this.map.hasOwnProperty(name$1)) callback.call(thisArg, this.map[name$1], name$1, this);
			};
			Headers.prototype.keys = function() {
				var items = [];
				this.forEach(function(value, name$1) {
					items.push(name$1);
				});
				return iteratorFor(items);
			};
			Headers.prototype.values = function() {
				var items = [];
				this.forEach(function(value) {
					items.push(value);
				});
				return iteratorFor(items);
			};
			Headers.prototype.entries = function() {
				var items = [];
				this.forEach(function(value, name$1) {
					items.push([name$1, value]);
				});
				return iteratorFor(items);
			};
			if (support.iterable) Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
			function consumed(body) {
				if (body._noBody) return;
				if (body.bodyUsed) return Promise.reject(/* @__PURE__ */ new TypeError("Already read"));
				body.bodyUsed = true;
			}
			function fileReaderReady(reader) {
				return new Promise(function(resolve, reject) {
					reader.onload = function() {
						resolve(reader.result);
					};
					reader.onerror = function() {
						reject(reader.error);
					};
				});
			}
			function readBlobAsArrayBuffer(blob) {
				var reader = new FileReader();
				var promise = fileReaderReady(reader);
				reader.readAsArrayBuffer(blob);
				return promise;
			}
			function readBlobAsText(blob) {
				var reader = new FileReader();
				var promise = fileReaderReady(reader);
				var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
				var encoding = match ? match[1] : "utf-8";
				reader.readAsText(blob, encoding);
				return promise;
			}
			function readArrayBufferAsText(buf) {
				var view = new Uint8Array(buf);
				var chars = new Array(view.length);
				for (var i$1 = 0; i$1 < view.length; i$1++) chars[i$1] = String.fromCharCode(view[i$1]);
				return chars.join("");
			}
			function bufferClone(buf) {
				if (buf.slice) return buf.slice(0);
				else {
					var view = new Uint8Array(buf.byteLength);
					view.set(new Uint8Array(buf));
					return view.buffer;
				}
			}
			function Body() {
				this.bodyUsed = false;
				this._initBody = function(body) {
					this.bodyUsed = this.bodyUsed;
					this._bodyInit = body;
					if (!body) {
						this._noBody = true;
						this._bodyText = "";
					} else if (typeof body === "string") this._bodyText = body;
					else if (support.blob && Blob.prototype.isPrototypeOf(body)) this._bodyBlob = body;
					else if (support.formData && FormData.prototype.isPrototypeOf(body)) this._bodyFormData = body;
					else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this._bodyText = body.toString();
					else if (support.arrayBuffer && support.blob && isDataView(body)) {
						this._bodyArrayBuffer = bufferClone(body.buffer);
						this._bodyInit = new Blob([this._bodyArrayBuffer]);
					} else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) this._bodyArrayBuffer = bufferClone(body);
					else this._bodyText = body = Object.prototype.toString.call(body);
					if (!this.headers.get("content-type")) {
						if (typeof body === "string") this.headers.set("content-type", "text/plain;charset=UTF-8");
						else if (this._bodyBlob && this._bodyBlob.type) this.headers.set("content-type", this._bodyBlob.type);
						else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
					}
				};
				if (support.blob) this.blob = function() {
					var rejected = consumed(this);
					if (rejected) return rejected;
					if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
					else if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
					else if (this._bodyFormData) throw new Error("could not read FormData body as blob");
					else return Promise.resolve(new Blob([this._bodyText]));
				};
				this.arrayBuffer = function() {
					if (this._bodyArrayBuffer) {
						var isConsumed = consumed(this);
						if (isConsumed) return isConsumed;
						else if (ArrayBuffer.isView(this._bodyArrayBuffer)) return Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength));
						else return Promise.resolve(this._bodyArrayBuffer);
					} else if (support.blob) return this.blob().then(readBlobAsArrayBuffer);
					else throw new Error("could not read as ArrayBuffer");
				};
				this.text = function() {
					var rejected = consumed(this);
					if (rejected) return rejected;
					if (this._bodyBlob) return readBlobAsText(this._bodyBlob);
					else if (this._bodyArrayBuffer) return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
					else if (this._bodyFormData) throw new Error("could not read FormData body as text");
					else return Promise.resolve(this._bodyText);
				};
				if (support.formData) this.formData = function() {
					return this.text().then(decode$6);
				};
				this.json = function() {
					return this.text().then(JSON.parse);
				};
				return this;
			}
			var methods = [
				"CONNECT",
				"DELETE",
				"GET",
				"HEAD",
				"OPTIONS",
				"PATCH",
				"POST",
				"PUT",
				"TRACE"
			];
			function normalizeMethod(method) {
				var upcased = method.toUpperCase();
				return methods.indexOf(upcased) > -1 ? upcased : method;
			}
			function Request(input, options) {
				if (!(this instanceof Request)) throw new TypeError("Please use the \"new\" operator, this DOM object constructor cannot be called as a function.");
				options = options || {};
				var body = options.body;
				if (input instanceof Request) {
					if (input.bodyUsed) throw new TypeError("Already read");
					this.url = input.url;
					this.credentials = input.credentials;
					if (!options.headers) this.headers = new Headers(input.headers);
					this.method = input.method;
					this.mode = input.mode;
					this.signal = input.signal;
					if (!body && input._bodyInit != null) {
						body = input._bodyInit;
						input.bodyUsed = true;
					}
				} else this.url = String(input);
				this.credentials = options.credentials || this.credentials || "same-origin";
				if (options.headers || !this.headers) this.headers = new Headers(options.headers);
				this.method = normalizeMethod(options.method || this.method || "GET");
				this.mode = options.mode || this.mode || null;
				this.signal = options.signal || this.signal || function() {
					if ("AbortController" in g$2) return new AbortController().signal;
				}();
				this.referrer = null;
				if ((this.method === "GET" || this.method === "HEAD") && body) throw new TypeError("Body not allowed for GET or HEAD requests");
				this._initBody(body);
				if (this.method === "GET" || this.method === "HEAD") {
					if (options.cache === "no-store" || options.cache === "no-cache") {
						var reParamSearch = /([?&])_=[^&]*/;
						if (reParamSearch.test(this.url)) this.url = this.url.replace(reParamSearch, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
						else this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
					}
				}
			}
			Request.prototype.clone = function() {
				return new Request(this, { body: this._bodyInit });
			};
			function decode$6(body) {
				var form = new FormData();
				body.trim().split("&").forEach(function(bytes) {
					if (bytes) {
						var split = bytes.split("=");
						var name$1 = split.shift().replace(/\+/g, " ");
						var value = split.join("=").replace(/\+/g, " ");
						form.append(decodeURIComponent(name$1), decodeURIComponent(value));
					}
				});
				return form;
			}
			function parseHeaders(rawHeaders) {
				var headers = new Headers();
				rawHeaders.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function(header) {
					return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
				}).forEach(function(line) {
					var parts = line.split(":");
					var key = parts.shift().trim();
					if (key) {
						var value = parts.join(":").trim();
						try {
							headers.append(key, value);
						} catch (error) {
							console.warn("Response " + error.message);
						}
					}
				});
				return headers;
			}
			Body.call(Request.prototype);
			function Response(bodyInit, options) {
				if (!(this instanceof Response)) throw new TypeError("Please use the \"new\" operator, this DOM object constructor cannot be called as a function.");
				if (!options) options = {};
				this.type = "default";
				this.status = options.status === void 0 ? 200 : options.status;
				if (this.status < 200 || this.status > 599) throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
				this.ok = this.status >= 200 && this.status < 300;
				this.statusText = options.statusText === void 0 ? "" : "" + options.statusText;
				this.headers = new Headers(options.headers);
				this.url = options.url || "";
				this._initBody(bodyInit);
			}
			Body.call(Response.prototype);
			Response.prototype.clone = function() {
				return new Response(this._bodyInit, {
					status: this.status,
					statusText: this.statusText,
					headers: new Headers(this.headers),
					url: this.url
				});
			};
			Response.error = function() {
				var response = new Response(null, {
					status: 200,
					statusText: ""
				});
				response.ok = false;
				response.status = 0;
				response.type = "error";
				return response;
			};
			var redirectStatuses = [
				301,
				302,
				303,
				307,
				308
			];
			Response.redirect = function(url, status) {
				if (redirectStatuses.indexOf(status) === -1) throw new RangeError("Invalid status code");
				return new Response(null, {
					status,
					headers: { location: url }
				});
			};
			exports$1.DOMException = g$2.DOMException;
			try {
				new exports$1.DOMException();
			} catch (err) {
				exports$1.DOMException = function(message, name$1) {
					this.message = message;
					this.name = name$1;
					this.stack = Error(message).stack;
				};
				exports$1.DOMException.prototype = Object.create(Error.prototype);
				exports$1.DOMException.prototype.constructor = exports$1.DOMException;
			}
			function fetch(input, init) {
				return new Promise(function(resolve, reject) {
					var request = new Request(input, init);
					if (request.signal && request.signal.aborted) return reject(new exports$1.DOMException("Aborted", "AbortError"));
					var xhr = new XMLHttpRequest();
					function abortXhr() {
						xhr.abort();
					}
					xhr.onload = function() {
						var options = {
							statusText: xhr.statusText,
							headers: parseHeaders(xhr.getAllResponseHeaders() || "")
						};
						if (request.url.indexOf("file://") === 0 && (xhr.status < 200 || xhr.status > 599)) options.status = 200;
						else options.status = xhr.status;
						options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
						var body = "response" in xhr ? xhr.response : xhr.responseText;
						setTimeout(function() {
							resolve(new Response(body, options));
						}, 0);
					};
					xhr.onerror = function() {
						setTimeout(function() {
							reject(/* @__PURE__ */ new TypeError("Network request failed"));
						}, 0);
					};
					xhr.ontimeout = function() {
						setTimeout(function() {
							reject(/* @__PURE__ */ new TypeError("Network request timed out"));
						}, 0);
					};
					xhr.onabort = function() {
						setTimeout(function() {
							reject(new exports$1.DOMException("Aborted", "AbortError"));
						}, 0);
					};
					function fixUrl(url) {
						try {
							return url === "" && g$2.location.href ? g$2.location.href : url;
						} catch (e$1) {
							return url;
						}
					}
					xhr.open(request.method, fixUrl(request.url), true);
					if (request.credentials === "include") xhr.withCredentials = true;
					else if (request.credentials === "omit") xhr.withCredentials = false;
					if ("responseType" in xhr) {
						if (support.blob) xhr.responseType = "blob";
						else if (support.arrayBuffer) xhr.responseType = "arraybuffer";
					}
					if (init && typeof init.headers === "object" && !(init.headers instanceof Headers || g$2.Headers && init.headers instanceof g$2.Headers)) {
						var names = [];
						Object.getOwnPropertyNames(init.headers).forEach(function(name$1) {
							names.push(normalizeName(name$1));
							xhr.setRequestHeader(name$1, normalizeValue(init.headers[name$1]));
						});
						request.headers.forEach(function(value, name$1) {
							if (names.indexOf(name$1) === -1) xhr.setRequestHeader(name$1, value);
						});
					} else request.headers.forEach(function(value, name$1) {
						xhr.setRequestHeader(name$1, value);
					});
					if (request.signal) {
						request.signal.addEventListener("abort", abortXhr);
						xhr.onreadystatechange = function() {
							if (xhr.readyState === 4) request.signal.removeEventListener("abort", abortXhr);
						};
					}
					xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
				});
			}
			fetch.polyfill = true;
			if (!g$2.fetch) {
				g$2.fetch = fetch;
				g$2.Headers = Headers;
				g$2.Request = Request;
				g$2.Response = Response;
			}
			exports$1.Headers = Headers;
			exports$1.Request = Request;
			exports$1.Response = Response;
			exports$1.fetch = fetch;
			Object.defineProperty(exports$1, "__esModule", { value: true });
			return exports$1;
		})({});
	})(__globalThis__);
	__globalThis__.fetch.ponyfill = true;
	delete __globalThis__.fetch.polyfill;
	var ctx = __global__.fetch ? __global__ : __globalThis__;
	exports = ctx.fetch;
	exports.default = ctx.fetch;
	exports.fetch = ctx.fetch;
	exports.Headers = ctx.Headers;
	exports.Request = ctx.Request;
	exports.Response = ctx.Response;
	module.exports = exports;
}));
var import_events = require_events();
var import_browser_ponyfill = /* @__PURE__ */ __toESM(require_browser_ponyfill());
var P = Object.defineProperty, w = Object.defineProperties, E = Object.getOwnPropertyDescriptors, c = Object.getOwnPropertySymbols, L = Object.prototype.hasOwnProperty, O = Object.prototype.propertyIsEnumerable, l = (r$2, t, e$1) => t in r$2 ? P(r$2, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: e$1
}) : r$2[t] = e$1, p = (r$2, t) => {
	for (var e$1 in t || (t = {})) L.call(t, e$1) && l(r$2, e$1, t[e$1]);
	if (c) for (var e$1 of c(t)) O.call(t, e$1) && l(r$2, e$1, t[e$1]);
	return r$2;
}, v = (r$2, t) => w(r$2, E(t));
var d = {
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json"
	},
	method: "POST"
}, g = 10;
var f = class {
	constructor(t, e$1 = !1) {
		if (this.url = t, this.disableProviderPing = e$1, this.events = new import_events.EventEmitter(), this.isAvailable = !1, this.registering = !1, !isHttpUrl(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
		this.url = t, this.disableProviderPing = e$1;
	}
	get connected() {
		return this.isAvailable;
	}
	get connecting() {
		return this.registering;
	}
	on(t, e$1) {
		this.events.on(t, e$1);
	}
	once(t, e$1) {
		this.events.once(t, e$1);
	}
	off(t, e$1) {
		this.events.off(t, e$1);
	}
	removeListener(t, e$1) {
		this.events.removeListener(t, e$1);
	}
	async open(t = this.url) {
		await this.register(t);
	}
	async close() {
		if (!this.isAvailable) throw new Error("Connection already closed");
		this.onClose();
	}
	async send(t) {
		this.isAvailable || await this.register();
		try {
			const e$1 = safeJsonStringify(t), s$1 = await (await (0, import_browser_ponyfill.default)(this.url, v(p({}, d), { body: e$1 }))).json();
			this.onPayload({ data: s$1 });
		} catch (e$1) {
			this.onError(t.id, e$1);
		}
	}
	async register(t = this.url) {
		if (!isHttpUrl(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
		if (this.registering) {
			const e$1 = this.events.getMaxListeners();
			return (this.events.listenerCount("register_error") >= e$1 || this.events.listenerCount("open") >= e$1) && this.events.setMaxListeners(e$1 + 1), new Promise((s$1, i$1) => {
				this.events.once("register_error", (n$2) => {
					this.resetMaxListeners(), i$1(n$2);
				}), this.events.once("open", () => {
					if (this.resetMaxListeners(), typeof this.isAvailable > "u") return i$1(/* @__PURE__ */ new Error("HTTP connection is missing or invalid"));
					s$1();
				});
			});
		}
		this.url = t, this.registering = !0;
		try {
			if (!this.disableProviderPing) {
				const e$1 = safeJsonStringify({
					id: 1,
					jsonrpc: "2.0",
					method: "test",
					params: []
				});
				await (0, import_browser_ponyfill.default)(t, v(p({}, d), { body: e$1 }));
			}
			this.onOpen();
		} catch (e$1) {
			const s$1 = this.parseError(e$1);
			throw this.events.emit("register_error", s$1), this.onClose(), s$1;
		}
	}
	onOpen() {
		this.isAvailable = !0, this.registering = !1, this.events.emit("open");
	}
	onClose() {
		this.isAvailable = !1, this.registering = !1, this.events.emit("close");
	}
	onPayload(t) {
		if (typeof t.data > "u") return;
		const e$1 = typeof t.data == "string" ? safeJsonParse(t.data) : t.data;
		this.events.emit("payload", e$1);
	}
	onError(t, e$1) {
		const s$1 = this.parseError(e$1), n$2 = formatJsonRpcError(t, s$1.message || s$1.toString());
		this.events.emit("payload", n$2);
	}
	parseError(t, e$1 = this.url) {
		return parseConnectionError(t, e$1, "HTTP");
	}
	resetMaxListeners() {
		this.events.getMaxListeners() > g && this.events.setMaxListeners(g);
	}
};
export { safeJsonParse as A, base32$1 as B, require_cjs$1 as C, Qo as D, Qe as E, require_cjs$3 as F, Ge$1 as I, Re$1 as L, i as M, r$1 as N, sn as O, IEvents as P, Ue$1 as R, fromHex as S, Po as T, concat as _, isJsonRpcRequest as a, esm_default$1 as b, formatJsonRpcError as c, getBigIntRpcId as d, payloadId as f, fromString as g, toString as h, isJsonRpcError as i, safeJsonStringify as j, h$1 as k, formatJsonRpcRequest as l, C as m, f$1 as n, isJsonRpcResponse as o, require_blakejs as p, o$1 as r, isJsonRpcResult as s, f as t, formatJsonRpcResult as u, decode$5 as v, require_cjs$2 as w, recoverAddress as x, encode$4 as y, ee as z };
