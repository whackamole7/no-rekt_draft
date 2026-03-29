const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/_esm-BHH26OCr.js","assets/index-QoJjSzDS.js","assets/index-DzV49fML.css","assets/secp256k1-iIBnEwIT.js","assets/_esm-DqiOIH5k.js","assets/ccip-vxpsZhZj.js"])))=>i.map(i=>d[i]);
import { c as __vitePreload } from "./index-QoJjSzDS.js";
import { C as erc20Abi, gn as formatUnits } from "./ccip-vxpsZhZj.js";
const HelpersUtil = { isLowerCaseMatch(str1, str2) {
	return str1?.toLowerCase() === str2?.toLowerCase();
} };
const ConstantsUtil = {
	WC_NAME_SUFFIX: ".reown.id",
	WC_NAME_SUFFIX_LEGACY: ".wcn.id",
	BLOCKCHAIN_API_RPC_URL: "https://rpc.walletconnect.org",
	PULSE_API_URL: "https://pulse.walletconnect.org",
	W3M_API_URL: "https://api.web3modal.org",
	CONNECTOR_ID: {
		WALLET_CONNECT: "walletConnect",
		INJECTED: "injected",
		WALLET_STANDARD: "announced",
		COINBASE: "coinbaseWallet",
		COINBASE_SDK: "coinbaseWalletSDK",
		BASE_ACCOUNT: "baseAccount",
		SAFE: "safe",
		LEDGER: "ledger",
		OKX: "okx",
		EIP6963: "eip6963",
		AUTH: "AUTH"
	},
	CONNECTOR_NAMES: { AUTH: "Auth" },
	AUTH_CONNECTOR_SUPPORTED_CHAINS: ["eip155", "solana"],
	LIMITS: { PENDING_TRANSACTIONS: 99 },
	CHAIN: {
		EVM: "eip155",
		SOLANA: "solana",
		POLKADOT: "polkadot",
		BITCOIN: "bip122",
		TON: "ton"
	},
	CHAIN_NAME_MAP: {
		eip155: "EVM Networks",
		solana: "Solana",
		polkadot: "Polkadot",
		bip122: "Bitcoin",
		cosmos: "Cosmos",
		sui: "Sui",
		stacks: "Stacks",
		ton: "TON"
	},
	ADAPTER_TYPES: {
		BITCOIN: "bitcoin",
		SOLANA: "solana",
		WAGMI: "wagmi",
		ETHERS: "ethers",
		ETHERS5: "ethers5",
		TON: "ton"
	},
	USDT_CONTRACT_ADDRESSES: [
		"0xdac17f958d2ee523a2206206994597c13d831ec7",
		"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
		"0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
		"0x919C1c267BC06a7039e03fcc2eF738525769109c",
		"0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e",
		"0x55d398326f99059fF775485246999027B3197955",
		"0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"
	],
	SOLANA_SPL_TOKEN_ADDRESSES: { SOL: "So11111111111111111111111111111111111111112" },
	NATIVE_IMAGE_IDS_BY_NAMESPACE: {
		eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
		solana: "3e8119e5-2a6f-4818-c50c-1937011d5900",
		bip122: "0b4838db-0161-4ffe-022d-532bf03dba00"
	},
	TOKEN_SYMBOLS_BY_ADDRESS: {
		"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": "USDC",
		"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913": "USDC",
		"0x0b2c639c533813f4aa9d7837caf62653d097ff85": "USDC",
		"0xaf88d065e77c8cc2239327c5edb3a432268e5831": "USDC",
		"0x3c499c542cef5e3811e1192ce70d8cc03d5c3359": "USDC",
		"0x2791bca1f2de4661ed88a30c99a7a9449aa84174": "USDC",
		EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: "USDC",
		"0xdac17f958d2ee523a2206206994597c13d831ec7": "USDT",
		"0x94b008aa00579c1307b0ef2c499ad98a8ce58e58": "USDT",
		"0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9": "USDT",
		"0xc2132d05d31c914a87c6611c10748aeb04b58e8f": "USDT",
		Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: "USDT"
	},
	HTTP_STATUS_CODES: {
		SERVER_ERROR: 500,
		TOO_MANY_REQUESTS: 429,
		SERVICE_UNAVAILABLE: 503,
		FORBIDDEN: 403
	},
	UNSUPPORTED_NETWORK_NAME: "Unknown Network",
	SECURE_SITE_SDK_ORIGIN: (typeof process !== "undefined" && true ? {}["NEXT_PUBLIC_SECURE_SITE_ORIGIN"] : void 0) || "https://secure.walletconnect.org",
	REMOTE_FEATURES_ALERTS: {
		MULTI_WALLET_NOT_ENABLED: {
			DEFAULT: {
				displayMessage: "Multi-Wallet Not Enabled",
				debugMessage: "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com."
			},
			CONNECTIONS_HOOK: {
				displayMessage: "Multi-Wallet Not Enabled",
				debugMessage: "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnections hook."
			},
			CONNECTION_HOOK: {
				displayMessage: "Multi-Wallet Not Enabled",
				debugMessage: "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnection hook."
			}
		},
		HEADLESS_NOT_ENABLED: { DEFAULT: {
			displayMessage: "",
			debugMessage: "Headless support is not enabled. Please enable it with the features.headless option in the AppKit configuration and make sure your current plan supports it."
		} }
	},
	IS_DEVELOPMENT: typeof process !== "undefined" && false,
	DEFAULT_ALLOWED_ANCESTORS: [
		"http://localhost:*",
		"https://localhost:*",
		"http://127.0.0.1:*",
		"https://127.0.0.1:*",
		"https://*.pages.dev",
		"https://*.vercel.app",
		"https://*.ngrok-free.app",
		"https://secure-mobile.walletconnect.com",
		"https://secure-mobile.walletconnect.org"
	],
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
	EIP155: "eip155",
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
	CONNECTOR_TYPE_W3M_AUTH: "AUTH"
};
const NetworkUtil = {
	caipNetworkIdToNumber(caipnetworkId) {
		return caipnetworkId ? Number(caipnetworkId.split(":")[1]) : void 0;
	},
	parseEvmChainId(chainId) {
		return typeof chainId === "string" ? this.caipNetworkIdToNumber(chainId) : chainId;
	},
	getNetworksByNamespace(networks, namespace) {
		return networks?.filter((network) => network.chainNamespace === namespace) || [];
	},
	getFirstNetworkByNamespace(networks, namespace) {
		return this.getNetworksByNamespace(networks, namespace)[0];
	},
	getNetworkNameByCaipNetworkId(caipNetworks, caipNetworkId) {
		if (!caipNetworkId) return;
		const caipNetwork = caipNetworks.find((network) => network.caipNetworkId === caipNetworkId);
		if (caipNetwork) return caipNetwork.name;
		const [namespace] = caipNetworkId.split(":");
		return ConstantsUtil.CHAIN_NAME_MAP?.[namespace] || void 0;
	}
};
const AVAILABLE_NAMESPACES = [
	"eip155",
	"solana",
	"polkadot",
	"bip122",
	"cosmos",
	"sui",
	"stacks"
];
var DP = 20, RM = 1, MAX_DP = 1e6, MAX_POWER = 1e6, NE = -7, PE = 21, STRICT = false, NAME = "[big.js] ", INVALID = NAME + "Invalid ", INVALID_DP = INVALID + "decimal places", INVALID_RM = INVALID + "rounding mode", DIV_BY_ZERO = NAME + "Division by zero", P = {}, UNDEFINED = void 0, NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
function _Big_() {
	function Big$1(n) {
		var x = this;
		if (!(x instanceof Big$1)) return n === UNDEFINED ? _Big_() : new Big$1(n);
		if (n instanceof Big$1) {
			x.s = n.s;
			x.e = n.e;
			x.c = n.c.slice();
		} else {
			if (typeof n !== "string") {
				if (Big$1.strict === true && typeof n !== "bigint") throw TypeError(INVALID + "value");
				n = n === 0 && 1 / n < 0 ? "-0" : String(n);
			}
			parse(x, n);
		}
		x.constructor = Big$1;
	}
	Big$1.prototype = P;
	Big$1.DP = DP;
	Big$1.RM = RM;
	Big$1.NE = NE;
	Big$1.PE = PE;
	Big$1.strict = STRICT;
	Big$1.roundDown = 0;
	Big$1.roundHalfUp = 1;
	Big$1.roundHalfEven = 2;
	Big$1.roundUp = 3;
	return Big$1;
}
function parse(x, n) {
	var e, i, nl;
	if (!NUMERIC.test(n)) throw Error(INVALID + "number");
	x.s = n.charAt(0) == "-" ? (n = n.slice(1), -1) : 1;
	if ((e = n.indexOf(".")) > -1) n = n.replace(".", "");
	if ((i = n.search(/e/i)) > 0) {
		if (e < 0) e = i;
		e += +n.slice(i + 1);
		n = n.substring(0, i);
	} else if (e < 0) e = n.length;
	nl = n.length;
	for (i = 0; i < nl && n.charAt(i) == "0";) ++i;
	if (i == nl) x.c = [x.e = 0];
	else {
		for (; nl > 0 && n.charAt(--nl) == "0";);
		x.e = e - i - 1;
		x.c = [];
		for (e = 0; i <= nl;) x.c[e++] = +n.charAt(i++);
	}
	return x;
}
function round(x, sd, rm, more) {
	var xc = x.c;
	if (rm === UNDEFINED) rm = x.constructor.RM;
	if (rm !== 0 && rm !== 1 && rm !== 2 && rm !== 3) throw Error(INVALID_RM);
	if (sd < 1) {
		more = rm === 3 && (more || !!xc[0]) || sd === 0 && (rm === 1 && xc[0] >= 5 || rm === 2 && (xc[0] > 5 || xc[0] === 5 && (more || xc[1] !== UNDEFINED)));
		xc.length = 1;
		if (more) {
			x.e = x.e - sd + 1;
			xc[0] = 1;
		} else xc[0] = x.e = 0;
	} else if (sd < xc.length) {
		more = rm === 1 && xc[sd] >= 5 || rm === 2 && (xc[sd] > 5 || xc[sd] === 5 && (more || xc[sd + 1] !== UNDEFINED || xc[sd - 1] & 1)) || rm === 3 && (more || !!xc[0]);
		xc.length = sd;
		if (more) for (; ++xc[--sd] > 9;) {
			xc[sd] = 0;
			if (sd === 0) {
				++x.e;
				xc.unshift(1);
				break;
			}
		}
		for (sd = xc.length; !xc[--sd];) xc.pop();
	}
	return x;
}
function stringify(x, doExponential, isNonzero) {
	var e = x.e, s = x.c.join(""), n = s.length;
	if (doExponential) s = s.charAt(0) + (n > 1 ? "." + s.slice(1) : "") + (e < 0 ? "e" : "e+") + e;
	else if (e < 0) {
		for (; ++e;) s = "0" + s;
		s = "0." + s;
	} else if (e > 0) {
		if (++e > n) for (e -= n; e--;) s += "0";
		else if (e < n) s = s.slice(0, e) + "." + s.slice(e);
	} else if (n > 1) s = s.charAt(0) + "." + s.slice(1);
	return x.s < 0 && isNonzero ? "-" + s : s;
}
P.abs = function() {
	var x = new this.constructor(this);
	x.s = 1;
	return x;
};
P.cmp = function(y) {
	var isneg, x = this, xc = x.c, yc = (y = new x.constructor(y)).c, i = x.s, j = y.s, k = x.e, l = y.e;
	if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i;
	if (i != j) return i;
	isneg = i < 0;
	if (k != l) return k > l ^ isneg ? 1 : -1;
	j = (k = xc.length) < (l = yc.length) ? k : l;
	for (i = -1; ++i < j;) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
	return k == l ? 0 : k > l ^ isneg ? 1 : -1;
};
P.div = function(y) {
	var x = this, Big$1 = x.constructor, a = x.c, b = (y = new Big$1(y)).c, k = x.s == y.s ? 1 : -1, dp = Big$1.DP;
	if (dp !== ~~dp || dp < 0 || dp > MAX_DP) throw Error(INVALID_DP);
	if (!b[0]) throw Error(DIV_BY_ZERO);
	if (!a[0]) {
		y.s = k;
		y.c = [y.e = 0];
		return y;
	}
	var bl, bt, n, cmp, ri, bz = b.slice(), ai = bl = b.length, al = a.length, r = a.slice(0, bl), rl = r.length, q = y, qc = q.c = [], qi = 0, p = dp + (q.e = x.e - y.e) + 1;
	q.s = k;
	k = p < 0 ? 0 : p;
	bz.unshift(0);
	for (; rl++ < bl;) r.push(0);
	do {
		for (n = 0; n < 10; n++) {
			if (bl != (rl = r.length)) cmp = bl > rl ? 1 : -1;
			else for (ri = -1, cmp = 0; ++ri < bl;) if (b[ri] != r[ri]) {
				cmp = b[ri] > r[ri] ? 1 : -1;
				break;
			}
			if (cmp < 0) {
				for (bt = rl == bl ? b : bz; rl;) {
					if (r[--rl] < bt[rl]) {
						ri = rl;
						for (; ri && !r[--ri];) r[ri] = 9;
						--r[ri];
						r[rl] += 10;
					}
					r[rl] -= bt[rl];
				}
				for (; !r[0];) r.shift();
			} else break;
		}
		qc[qi++] = cmp ? n : ++n;
		if (r[0] && cmp) r[rl] = a[ai] || 0;
		else r = [a[ai]];
	} while ((ai++ < al || r[0] !== UNDEFINED) && k--);
	if (!qc[0] && qi != 1) {
		qc.shift();
		q.e--;
		p--;
	}
	if (qi > p) round(q, p, Big$1.RM, r[0] !== UNDEFINED);
	return q;
};
P.eq = function(y) {
	return this.cmp(y) === 0;
};
P.gt = function(y) {
	return this.cmp(y) > 0;
};
P.gte = function(y) {
	return this.cmp(y) > -1;
};
P.lt = function(y) {
	return this.cmp(y) < 0;
};
P.lte = function(y) {
	return this.cmp(y) < 1;
};
P.minus = P.sub = function(y) {
	var i, j, t, xlty, x = this, Big$1 = x.constructor, a = x.s, b = (y = new Big$1(y)).s;
	if (a != b) {
		y.s = -b;
		return x.plus(y);
	}
	var xc = x.c.slice(), xe = x.e, yc = y.c, ye = y.e;
	if (!xc[0] || !yc[0]) {
		if (yc[0]) y.s = -b;
		else if (xc[0]) y = new Big$1(x);
		else y.s = 1;
		return y;
	}
	if (a = xe - ye) {
		if (xlty = a < 0) {
			a = -a;
			t = xc;
		} else {
			ye = xe;
			t = yc;
		}
		t.reverse();
		for (b = a; b--;) t.push(0);
		t.reverse();
	} else {
		j = ((xlty = xc.length < yc.length) ? xc : yc).length;
		for (a = b = 0; b < j; b++) if (xc[b] != yc[b]) {
			xlty = xc[b] < yc[b];
			break;
		}
	}
	if (xlty) {
		t = xc;
		xc = yc;
		yc = t;
		y.s = -y.s;
	}
	if ((b = (j = yc.length) - (i = xc.length)) > 0) for (; b--;) xc[i++] = 0;
	for (b = i; j > a;) {
		if (xc[--j] < yc[j]) {
			for (i = j; i && !xc[--i];) xc[i] = 9;
			--xc[i];
			xc[j] += 10;
		}
		xc[j] -= yc[j];
	}
	for (; xc[--b] === 0;) xc.pop();
	for (; xc[0] === 0;) {
		xc.shift();
		--ye;
	}
	if (!xc[0]) {
		y.s = 1;
		xc = [ye = 0];
	}
	y.c = xc;
	y.e = ye;
	return y;
};
P.mod = function(y) {
	var ygtx, x = this, Big$1 = x.constructor, a = x.s, b = (y = new Big$1(y)).s;
	if (!y.c[0]) throw Error(DIV_BY_ZERO);
	x.s = y.s = 1;
	ygtx = y.cmp(x) == 1;
	x.s = a;
	y.s = b;
	if (ygtx) return new Big$1(x);
	a = Big$1.DP;
	b = Big$1.RM;
	Big$1.DP = Big$1.RM = 0;
	x = x.div(y);
	Big$1.DP = a;
	Big$1.RM = b;
	return this.minus(x.times(y));
};
P.neg = function() {
	var x = new this.constructor(this);
	x.s = -x.s;
	return x;
};
P.plus = P.add = function(y) {
	var e, k, t, x = this, Big$1 = x.constructor;
	y = new Big$1(y);
	if (x.s != y.s) {
		y.s = -y.s;
		return x.minus(y);
	}
	var xe = x.e, xc = x.c, ye = y.e, yc = y.c;
	if (!xc[0] || !yc[0]) {
		if (!yc[0]) if (xc[0]) y = new Big$1(x);
		else y.s = x.s;
		return y;
	}
	xc = xc.slice();
	if (e = xe - ye) {
		if (e > 0) {
			ye = xe;
			t = yc;
		} else {
			e = -e;
			t = xc;
		}
		t.reverse();
		for (; e--;) t.push(0);
		t.reverse();
	}
	if (xc.length - yc.length < 0) {
		t = yc;
		yc = xc;
		xc = t;
	}
	e = yc.length;
	for (k = 0; e; xc[e] %= 10) k = (xc[--e] = xc[e] + yc[e] + k) / 10 | 0;
	if (k) {
		xc.unshift(k);
		++ye;
	}
	for (e = xc.length; xc[--e] === 0;) xc.pop();
	y.c = xc;
	y.e = ye;
	return y;
};
P.pow = function(n) {
	var x = this, one = new x.constructor("1"), y = one, isneg = n < 0;
	if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) throw Error(INVALID + "exponent");
	if (isneg) n = -n;
	for (;;) {
		if (n & 1) y = y.times(x);
		n >>= 1;
		if (!n) break;
		x = x.times(x);
	}
	return isneg ? one.div(y) : y;
};
P.prec = function(sd, rm) {
	if (sd !== ~~sd || sd < 1 || sd > MAX_DP) throw Error(INVALID + "precision");
	return round(new this.constructor(this), sd, rm);
};
P.round = function(dp, rm) {
	if (dp === UNDEFINED) dp = 0;
	else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) throw Error(INVALID_DP);
	return round(new this.constructor(this), dp + this.e + 1, rm);
};
P.sqrt = function() {
	var r, c, t, x = this, Big$1 = x.constructor, s = x.s, e = x.e, half = new Big$1("0.5");
	if (!x.c[0]) return new Big$1(x);
	if (s < 0) throw Error(NAME + "No square root");
	s = Math.sqrt(+stringify(x, true, true));
	if (s === 0 || s === Infinity) {
		c = x.c.join("");
		if (!(c.length + e & 1)) c += "0";
		s = Math.sqrt(c);
		e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
		r = new Big$1((s == Infinity ? "5e" : (s = s.toExponential()).slice(0, s.indexOf("e") + 1)) + e);
	} else r = new Big$1(s + "");
	e = r.e + (Big$1.DP += 4);
	do {
		t = r;
		r = half.times(t.plus(x.div(t)));
	} while (t.c.slice(0, e).join("") !== r.c.slice(0, e).join(""));
	return round(r, (Big$1.DP -= 4) + r.e + 1, Big$1.RM);
};
P.times = P.mul = function(y) {
	var c, x = this, Big$1 = x.constructor, xc = x.c, yc = (y = new Big$1(y)).c, a = xc.length, b = yc.length, i = x.e, j = y.e;
	y.s = x.s == y.s ? 1 : -1;
	if (!xc[0] || !yc[0]) {
		y.c = [y.e = 0];
		return y;
	}
	y.e = i + j;
	if (a < b) {
		c = xc;
		xc = yc;
		yc = c;
		j = a;
		a = b;
		b = j;
	}
	for (c = new Array(j = a + b); j--;) c[j] = 0;
	for (i = b; i--;) {
		b = 0;
		for (j = a + i; j > i;) {
			b = c[j] + yc[i] * xc[j - i - 1] + b;
			c[j--] = b % 10;
			b = b / 10 | 0;
		}
		c[j] = b;
	}
	if (b) ++y.e;
	else c.shift();
	for (i = c.length; !c[--i];) c.pop();
	y.c = c;
	return y;
};
P.toExponential = function(dp, rm) {
	var x = this, n = x.c[0];
	if (dp !== UNDEFINED) {
		if (dp !== ~~dp || dp < 0 || dp > MAX_DP) throw Error(INVALID_DP);
		x = round(new x.constructor(x), ++dp, rm);
		for (; x.c.length < dp;) x.c.push(0);
	}
	return stringify(x, true, !!n);
};
P.toFixed = function(dp, rm) {
	var x = this, n = x.c[0];
	if (dp !== UNDEFINED) {
		if (dp !== ~~dp || dp < 0 || dp > MAX_DP) throw Error(INVALID_DP);
		x = round(new x.constructor(x), dp + x.e + 1, rm);
		for (dp = dp + x.e + 1; x.c.length < dp;) x.c.push(0);
	}
	return stringify(x, false, !!n);
};
P[Symbol.for("nodejs.util.inspect.custom")] = P.toJSON = P.toString = function() {
	var x = this, Big$1 = x.constructor;
	return stringify(x, x.e <= Big$1.NE || x.e >= Big$1.PE, !!x.c[0]);
};
P.toNumber = function() {
	var n = +stringify(this, true, true);
	if (this.constructor.strict === true && !this.eq(n.toString())) throw Error(NAME + "Imprecise conversion");
	return n;
};
P.toPrecision = function(sd, rm) {
	var x = this, Big$1 = x.constructor, n = x.c[0];
	if (sd !== UNDEFINED) {
		if (sd !== ~~sd || sd < 1 || sd > MAX_DP) throw Error(INVALID + "precision");
		x = round(new Big$1(x), sd, rm);
		for (; x.c.length < sd;) x.c.push(0);
	}
	return stringify(x, sd <= x.e || x.e <= Big$1.NE || x.e >= Big$1.PE, !!n);
};
P.valueOf = function() {
	var x = this, Big$1 = x.constructor;
	if (Big$1.strict === true) throw Error(NAME + "valueOf disallowed");
	return stringify(x, x.e <= Big$1.NE || x.e >= Big$1.PE, true);
};
var big_default = _Big_();
const NumberUtil = {
	bigNumber(value, params = { safe: false }) {
		try {
			if (!value) return new big_default(0);
			return new big_default(value);
		} catch (err) {
			if (params.safe) return new big_default(0);
			throw err;
		}
	},
	formatNumber(value, params) {
		const { decimals, round: round$1 = 8, safe = true } = params;
		return NumberUtil.bigNumber(value, { safe }).div(new big_default(10).pow(decimals)).round(round$1);
	},
	multiply(a, b) {
		if (a === void 0 || b === void 0) return new big_default(0);
		const aBigNumber = new big_default(a);
		const bBigNumber = new big_default(b);
		return aBigNumber.times(bBigNumber);
	},
	toFixed(value, decimals = 2) {
		if (value === void 0 || value === "") return new big_default(0).toFixed(decimals);
		return new big_default(value).toFixed(decimals);
	},
	formatNumberToLocalString(value, decimals = 2) {
		if (value === void 0 || value === "") return "0.00";
		if (typeof value === "number") return value.toLocaleString("en-US", {
			maximumFractionDigits: decimals,
			minimumFractionDigits: decimals,
			roundingMode: "floor"
		});
		return parseFloat(value).toLocaleString("en-US", {
			maximumFractionDigits: decimals,
			minimumFractionDigits: decimals,
			roundingMode: "floor"
		});
	},
	parseLocalStringToNumber(value) {
		if (value === void 0 || value === "") return 0;
		return new big_default(value.replace(/,/gu, "")).toNumber();
	}
};
const erc20ABI = [{
	type: "function",
	name: "transfer",
	stateMutability: "nonpayable",
	inputs: [{
		name: "_to",
		type: "address"
	}, {
		name: "_value",
		type: "uint256"
	}],
	outputs: [{
		name: "",
		type: "bool"
	}]
}, {
	type: "function",
	name: "transferFrom",
	stateMutability: "nonpayable",
	inputs: [
		{
			name: "_from",
			type: "address"
		},
		{
			name: "_to",
			type: "address"
		},
		{
			name: "_value",
			type: "uint256"
		}
	],
	outputs: [{
		name: "",
		type: "bool"
	}]
}];
const swapABI = [{
	type: "function",
	name: "approve",
	stateMutability: "nonpayable",
	inputs: [{
		name: "spender",
		type: "address"
	}, {
		name: "amount",
		type: "uint256"
	}],
	outputs: [{ type: "bool" }]
}];
const usdtABI = [{
	type: "function",
	name: "transfer",
	stateMutability: "nonpayable",
	inputs: [{
		name: "recipient",
		type: "address"
	}, {
		name: "amount",
		type: "uint256"
	}],
	outputs: []
}, {
	type: "function",
	name: "transferFrom",
	stateMutability: "nonpayable",
	inputs: [
		{
			name: "sender",
			type: "address"
		},
		{
			name: "recipient",
			type: "address"
		},
		{
			name: "amount",
			type: "uint256"
		}
	],
	outputs: [{
		name: "",
		type: "bool"
	}]
}];
const ContractUtil = {
	getERC20Abi: (tokenAddress) => {
		if (ConstantsUtil.USDT_CONTRACT_ADDRESSES.includes(tokenAddress)) return usdtABI;
		return erc20ABI;
	},
	getSwapAbi: () => swapABI
};
const PresetsUtil = {
	ConnectorExplorerIds: {
		[ConstantsUtil.CONNECTOR_ID.COINBASE]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
		[ConstantsUtil.CONNECTOR_ID.COINBASE_SDK]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
		[ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
		[ConstantsUtil.CONNECTOR_ID.SAFE]: "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
		[ConstantsUtil.CONNECTOR_ID.LEDGER]: "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",
		[ConstantsUtil.CONNECTOR_ID.OKX]: "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
		[ConstantsUtil.METMASK_CONNECTOR_NAME]: "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
		[ConstantsUtil.TRUST_CONNECTOR_NAME]: "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
		[ConstantsUtil.SOLFLARE_CONNECTOR_NAME]: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
		[ConstantsUtil.PHANTOM_CONNECTOR_NAME]: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
		[ConstantsUtil.COIN98_CONNECTOR_NAME]: "2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",
		[ConstantsUtil.MAGIC_EDEN_CONNECTOR_NAME]: "8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",
		[ConstantsUtil.BACKPACK_CONNECTOR_NAME]: "2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",
		[ConstantsUtil.BITGET_CONNECTOR_NAME]: "38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",
		[ConstantsUtil.FRONTIER_CONNECTOR_NAME]: "85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",
		[ConstantsUtil.XVERSE_CONNECTOR_NAME]: "2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",
		[ConstantsUtil.LEATHER_CONNECTOR_NAME]: "483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13",
		[ConstantsUtil.OKX_CONNECTOR_NAME]: "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
		[ConstantsUtil.BINANCE_CONNECTOR_NAME]: "2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25"
	},
	NetworkImageIds: {
		1: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
		42161: "3bff954d-5cb0-47a0-9a23-d20192e74600",
		43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
		56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
		250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
		10: "ab9c186a-c52f-464b-2906-ca59d760a400",
		137: "41d04d42-da3b-4453-8506-668cc0727900",
		5e3: "e86fae9b-b770-4eea-e520-150e12c81100",
		295: "6a97d510-cac8-4e58-c7ce-e8681b044c00",
		11155111: "e909ea0a-f92a-4512-c8fc-748044ea6800",
		84532: "a18a7ecd-e307-4360-4746-283182228e00",
		1301: "4eeea7ef-0014-4649-5d1d-07271a80f600",
		130: "2257980a-3463-48c6-cbac-a42d2a956e00",
		10143: "0a728e83-bacb-46db-7844-948f05434900",
		100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
		9001: "f926ff41-260d-4028-635e-91913fc28e00",
		324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
		314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
		4689: "34e68754-e536-40da-c153-6ef2e7188a00",
		1088: "3897a66d-40b9-4833-162f-a2c90531c900",
		1284: "161038da-44ae-4ec7-1208-0ea569454b00",
		1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
		7777777: "845c60df-d429-4991-e687-91ae45791600",
		42220: "ab781bbc-ccc6-418d-d32d-789b15da1f00",
		8453: "7289c336-3981-4081-c5f4-efc26ac64a00",
		1313161554: "3ff73439-a619-4894-9262-4470c773a100",
		2020: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
		2021: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
		80094: "e329c2c9-59b0-4a02-83e4-212ff3779900",
		2741: "fc2427d1-5af9-4a9c-8da5-6f94627cd900",
		"5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp": "a1b58899-f671-4276-6a5e-56ca5bd59700",
		"4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z": "a1b58899-f671-4276-6a5e-56ca5bd59700",
		EtWTRABZaYq6iMfeYKouRu166VU2xqa1: "a1b58899-f671-4276-6a5e-56ca5bd59700",
		"000000000019d6689c085ae165831e93": "0b4838db-0161-4ffe-022d-532bf03dba00",
		"000000000933ea01ad0ee984209779ba": "39354064-d79b-420b-065d-f980c4b78200",
		"00000008819873e925422c1ff0f99f7c": "b3406e4a-bbfc-44fb-e3a6-89673c78b700",
		"-239": "20f673c0-095e-49b2-07cf-eb5049dcf600",
		"-3": "20f673c0-095e-49b2-07cf-eb5049dcf600"
	},
	ConnectorImageIds: {
		[ConstantsUtil.CONNECTOR_ID.COINBASE]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
		[ConstantsUtil.CONNECTOR_ID.COINBASE_SDK]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
		[ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT]: "bba2c8be-7fd1-463e-42b1-796ecb0ad200",
		[ConstantsUtil.CONNECTOR_ID.SAFE]: "461db637-8616-43ce-035a-d89b8a1d5800",
		[ConstantsUtil.CONNECTOR_ID.LEDGER]: "54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",
		[ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT]: "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",
		[ConstantsUtil.CONNECTOR_ID.INJECTED]: "07ba87ed-43aa-4adf-4540-9e6a2b9cae00"
	},
	ConnectorNamesMap: {
		[ConstantsUtil.CONNECTOR_ID.INJECTED]: "Browser Wallet",
		[ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT]: "WalletConnect",
		[ConstantsUtil.CONNECTOR_ID.COINBASE]: "Coinbase",
		[ConstantsUtil.CONNECTOR_ID.COINBASE_SDK]: "Coinbase",
		[ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT]: "Base Account",
		[ConstantsUtil.CONNECTOR_ID.LEDGER]: "Ledger",
		[ConstantsUtil.CONNECTOR_ID.SAFE]: "Safe"
	},
	ConnectorTypesMap: {
		[ConstantsUtil.CONNECTOR_ID.INJECTED]: "INJECTED",
		[ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT]: "WALLET_CONNECT",
		[ConstantsUtil.CONNECTOR_ID.EIP6963]: "ANNOUNCED",
		[ConstantsUtil.CONNECTOR_ID.AUTH]: "AUTH"
	},
	WalletConnectRpcChainIds: [
		1,
		5,
		11155111,
		10,
		420,
		42161,
		421613,
		137,
		80001,
		42220,
		1313161554,
		1313161555,
		56,
		97,
		43114,
		43113,
		100,
		8453,
		84531,
		7777777,
		999,
		324,
		280
	]
};
const ParseUtil = {
	validateCaipAddress(address) {
		if (address.split(":")?.length !== 3) throw new Error("Invalid CAIP Address");
		return address;
	},
	parseCaipAddress(caipAddress) {
		const parts = caipAddress.split(":");
		if (parts.length !== 3) throw new Error(`Invalid CAIP-10 address: ${caipAddress}`);
		const [chainNamespace, chainId, address] = parts;
		if (!chainNamespace || !chainId || !address) throw new Error(`Invalid CAIP-10 address: ${caipAddress}`);
		return {
			chainNamespace,
			chainId,
			address
		};
	},
	parseCaipNetworkId(caipNetworkId) {
		const parts = caipNetworkId.split(":");
		if (parts.length !== 2) throw new Error(`Invalid CAIP-2 network id: ${caipNetworkId}`);
		const [chainNamespace, chainId] = parts;
		if (!chainNamespace || !chainId) throw new Error(`Invalid CAIP-2 network id: ${caipNetworkId}`);
		return {
			chainNamespace,
			chainId
		};
	}
};
const ErrorUtil = {
	RPC_ERROR_CODE: {
		USER_REJECTED_REQUEST: 4001,
		USER_REJECTED_METHODS: 5002,
		USER_REJECTED: 5e3,
		SEND_TRANSACTION_ERROR: 5001
	},
	PROVIDER_RPC_ERROR_NAME: {
		PROVIDER_RPC: "ProviderRpcError",
		USER_REJECTED_REQUEST: "UserRejectedRequestError",
		SEND_TRANSACTION_ERROR: "SendTransactionError"
	},
	isRpcProviderError(error) {
		try {
			if (typeof error === "object" && error !== null) {
				const objErr = error;
				const hasMessage = typeof objErr["message"] === "string";
				const hasCode = typeof objErr["code"] === "number";
				return hasMessage && hasCode;
			}
			return false;
		} catch {
			return false;
		}
	},
	isUserRejectedMessage(message) {
		return message.toLowerCase().includes("user rejected") || message.toLowerCase().includes("user cancelled") || message.toLowerCase().includes("user canceled");
	},
	isUserRejectedRequestError(error) {
		if (ErrorUtil.isRpcProviderError(error)) {
			const isUserRejectedCode = error.code === ErrorUtil.RPC_ERROR_CODE.USER_REJECTED_REQUEST;
			const isUserRejectedMethodsCode = error.code === ErrorUtil.RPC_ERROR_CODE.USER_REJECTED_METHODS;
			return isUserRejectedCode || isUserRejectedMethodsCode || ErrorUtil.isUserRejectedMessage(error.message);
		}
		if (error instanceof Error) return ErrorUtil.isUserRejectedMessage(error.message);
		return false;
	}
};
var ProviderRpcError = class extends Error {
	constructor(cause, options) {
		super(options.message, { cause });
		this.name = ErrorUtil.PROVIDER_RPC_ERROR_NAME.PROVIDER_RPC;
		this.code = options.code;
	}
};
var UserRejectedRequestError = class extends ProviderRpcError {
	constructor(cause) {
		super(cause, {
			code: ErrorUtil.RPC_ERROR_CODE.USER_REJECTED_REQUEST,
			message: "User rejected the request"
		});
		this.name = ErrorUtil.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
	}
};
const SafeLocalStorageKeys = {
	WALLET_ID: "@appkit/wallet_id",
	WALLET_NAME: "@appkit/wallet_name",
	SOLANA_WALLET: "@appkit/solana_wallet",
	SOLANA_CAIP_CHAIN: "@appkit/solana_caip_chain",
	ACTIVE_CAIP_NETWORK_ID: "@appkit/active_caip_network_id",
	CONNECTED_SOCIAL: "@appkit/connected_social",
	CONNECTED_SOCIAL_USERNAME: "@appkit-wallet/SOCIAL_USERNAME",
	RECENT_WALLETS: "@appkit/recent_wallets",
	RECENT_WALLET: "@appkit/recent_wallet",
	DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
	ACTIVE_NAMESPACE: "@appkit/active_namespace",
	CONNECTED_NAMESPACES: "@appkit/connected_namespaces",
	CONNECTION_STATUS: "@appkit/connection_status",
	SIWX_AUTH_TOKEN: "@appkit/siwx-auth-token",
	SIWX_NONCE_TOKEN: "@appkit/siwx-nonce-token",
	TELEGRAM_SOCIAL_PROVIDER: "@appkit/social_provider",
	NATIVE_BALANCE_CACHE: "@appkit/native_balance_cache",
	PORTFOLIO_CACHE: "@appkit/portfolio_cache",
	ENS_CACHE: "@appkit/ens_cache",
	IDENTITY_CACHE: "@appkit/identity_cache",
	PREFERRED_ACCOUNT_TYPES: "@appkit/preferred_account_types",
	CONNECTIONS: "@appkit/connections",
	DISCONNECTED_CONNECTOR_IDS: "@appkit/disconnected_connector_ids",
	HISTORY_TRANSACTIONS_CACHE: "@appkit/history_transactions_cache",
	TOKEN_PRICE_CACHE: "@appkit/token_price_cache",
	RECENT_EMAILS: "@appkit/recent_emails",
	LATEST_APPKIT_VERSION: "@appkit/latest_version",
	TON_WALLETS_CACHE: "@appkit/ton_wallets_cache"
};
function getSafeConnectorIdKey(namespace) {
	if (!namespace) throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");
	return `@appkit/${namespace}:connected_connector_id`;
}
const SafeLocalStorage = {
	setItem(key, value) {
		if (isSafe() && value !== void 0) localStorage.setItem(key, value);
	},
	getItem(key) {
		if (isSafe()) return localStorage.getItem(key) || void 0;
	},
	removeItem(key) {
		if (isSafe()) localStorage.removeItem(key);
	},
	clear() {
		if (isSafe()) localStorage.clear();
	}
};
function isSafe() {
	return typeof window !== "undefined" && typeof localStorage !== "undefined";
}
function getW3mThemeVariables(themeVariables, themeType) {
	const accent = themeVariables?.["--apkt-accent"] ?? themeVariables?.["--w3m-accent"];
	if (themeType === "light") return {
		"--w3m-accent": accent || "hsla(231, 100%, 70%, 1)",
		"--w3m-background": "#fff"
	};
	return {
		"--w3m-accent": accent || "hsla(230, 100%, 67%, 1)",
		"--w3m-background": "#202020"
	};
}
var GET_ORIGINAL_SYMBOL = Symbol();
var getProto = Object.getPrototypeOf;
var objectsToTrack = /* @__PURE__ */ new WeakMap();
var isObjectToTrack = (obj) => obj && (objectsToTrack.has(obj) ? objectsToTrack.get(obj) : getProto(obj) === Object.prototype || getProto(obj) === Array.prototype);
const getUntracked = (obj) => {
	if (isObjectToTrack(obj)) return obj[GET_ORIGINAL_SYMBOL] || null;
	return null;
};
const markToTrack = (obj, mark = true) => {
	objectsToTrack.set(obj, mark);
};
var isObject = (x) => typeof x === "object" && x !== null;
var canProxyDefault = (x) => isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer) && !(x instanceof Promise);
var createSnapshotDefault = (target, version) => {
	const cache = snapCache$2.get(target);
	if ((cache == null ? void 0 : cache[0]) === version) return cache[1];
	const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
	markToTrack(snap, true);
	snapCache$2.set(target, [version, snap]);
	Reflect.ownKeys(target).forEach((key) => {
		if (Object.getOwnPropertyDescriptor(snap, key)) return;
		const value = Reflect.get(target, key);
		const { enumerable } = Reflect.getOwnPropertyDescriptor(target, key);
		const desc = {
			value,
			enumerable,
			configurable: true
		};
		if (refSet.has(value)) markToTrack(value, false);
		else if (proxyStateMap$2.has(value)) {
			const [target2, ensureVersion] = proxyStateMap$2.get(value);
			desc.value = createSnapshotDefault(target2, ensureVersion());
		}
		Object.defineProperty(snap, key, desc);
	});
	return Object.preventExtensions(snap);
};
var createHandlerDefault = (isInitializing, addPropListener, removePropListener, notifyUpdate) => ({
	deleteProperty(target, prop) {
		const prevValue = Reflect.get(target, prop);
		removePropListener(prop);
		const deleted = Reflect.deleteProperty(target, prop);
		if (deleted) notifyUpdate([
			"delete",
			[prop],
			prevValue
		]);
		return deleted;
	},
	set(target, prop, value, receiver) {
		const hasPrevValue = !isInitializing() && Reflect.has(target, prop);
		const prevValue = Reflect.get(target, prop, receiver);
		if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) return true;
		removePropListener(prop);
		if (isObject(value)) value = getUntracked(value) || value;
		const nextValue = !proxyStateMap$2.has(value) && canProxy(value) ? proxy(value) : value;
		addPropListener(prop, nextValue);
		Reflect.set(target, prop, nextValue, receiver);
		notifyUpdate([
			"set",
			[prop],
			value,
			prevValue
		]);
		return true;
	}
});
var proxyStateMap$2 = /* @__PURE__ */ new WeakMap();
var refSet = /* @__PURE__ */ new WeakSet();
var snapCache$2 = /* @__PURE__ */ new WeakMap();
var versionHolder = [1];
var proxyCache = /* @__PURE__ */ new WeakMap();
var objectIs = Object.is;
var newProxy = (target, handler) => new Proxy(target, handler);
var canProxy = canProxyDefault;
var createSnapshot = createSnapshotDefault;
var createHandler = createHandlerDefault;
function proxy(baseObject = {}) {
	if (!isObject(baseObject)) throw new Error("object required");
	const found = proxyCache.get(baseObject);
	if (found) return found;
	let version = versionHolder[0];
	const listeners = /* @__PURE__ */ new Set();
	const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {
		if (version !== nextVersion) {
			checkVersion = version = nextVersion;
			listeners.forEach((listener) => listener(op, nextVersion));
		}
	};
	let checkVersion = version;
	const ensureVersion = (nextCheckVersion = versionHolder[0]) => {
		if (checkVersion !== nextCheckVersion) {
			checkVersion = nextCheckVersion;
			propProxyStates.forEach(([propProxyState]) => {
				const propVersion = propProxyState[1](nextCheckVersion);
				if (propVersion > version) version = propVersion;
			});
		}
		return version;
	};
	const createPropListener = (prop) => (op, nextVersion) => {
		const newOp = [...op];
		newOp[1] = [prop, ...newOp[1]];
		notifyUpdate(newOp, nextVersion);
	};
	const propProxyStates = /* @__PURE__ */ new Map();
	const addPropListener = (prop, propValue) => {
		const propProxyState = !refSet.has(propValue) && proxyStateMap$2.get(propValue);
		if (propProxyState) if (listeners.size) {
			const remove = propProxyState[2](createPropListener(prop));
			propProxyStates.set(prop, [propProxyState, remove]);
		} else propProxyStates.set(prop, [propProxyState]);
	};
	const removePropListener = (prop) => {
		var _a;
		const entry = propProxyStates.get(prop);
		if (entry) {
			propProxyStates.delete(prop);
			(_a = entry[1]) == null || _a.call(entry);
		}
	};
	const addListener = (listener) => {
		listeners.add(listener);
		if (listeners.size === 1) propProxyStates.forEach(([propProxyState, prevRemove], prop) => {
			const remove = propProxyState[2](createPropListener(prop));
			propProxyStates.set(prop, [propProxyState, remove]);
		});
		const removeListener = () => {
			listeners.delete(listener);
			if (listeners.size === 0) propProxyStates.forEach(([propProxyState, remove], prop) => {
				if (remove) {
					remove();
					propProxyStates.set(prop, [propProxyState]);
				}
			});
		};
		return removeListener;
	};
	let initializing = true;
	const proxyObject = newProxy(baseObject, createHandler(() => initializing, addPropListener, removePropListener, notifyUpdate));
	proxyCache.set(baseObject, proxyObject);
	const proxyState = [
		baseObject,
		ensureVersion,
		addListener
	];
	proxyStateMap$2.set(proxyObject, proxyState);
	Reflect.ownKeys(baseObject).forEach((key) => {
		const desc = Object.getOwnPropertyDescriptor(baseObject, key);
		if ("value" in desc && desc.writable) proxyObject[key] = baseObject[key];
	});
	initializing = false;
	return proxyObject;
}
function subscribe(proxyObject, callback, notifyInSync) {
	const proxyState = proxyStateMap$2.get(proxyObject);
	let promise;
	const ops = [];
	const addListener = proxyState[2];
	let isListenerActive = false;
	const listener = (op) => {
		ops.push(op);
		if (notifyInSync) {
			callback(ops.splice(0));
			return;
		}
		if (!promise) promise = Promise.resolve().then(() => {
			promise = void 0;
			if (isListenerActive) callback(ops.splice(0));
		});
	};
	const removeListener = addListener(listener);
	isListenerActive = true;
	return () => {
		isListenerActive = false;
		removeListener();
	};
}
function snapshot(proxyObject) {
	const [target, ensureVersion] = proxyStateMap$2.get(proxyObject);
	return createSnapshot(target, ensureVersion());
}
function ref(obj) {
	refSet.add(obj);
	return obj;
}
function unstable_getInternalStates() {
	return {
		proxyStateMap: proxyStateMap$2,
		refSet,
		snapCache: snapCache$2,
		versionHolder,
		proxyCache
	};
}
function subscribeKey(proxyObject, key, callback, notifyInSync) {
	let prevValue = proxyObject[key];
	return subscribe(proxyObject, () => {
		const nextValue = proxyObject[key];
		if (!Object.is(prevValue, nextValue)) callback(prevValue = nextValue);
	}, notifyInSync);
}
var { proxyStateMap: proxyStateMap$1, snapCache: snapCache$1 } = unstable_getInternalStates();
var isProxy$1 = (x) => proxyStateMap$1.has(x);
function proxyMap(entries$1) {
	const initialData = [];
	let initialIndex = 0;
	const indexMap = /* @__PURE__ */ new Map();
	const snapMapCache = /* @__PURE__ */ new WeakMap();
	const registerSnapMap = () => {
		const cache = snapCache$1.get(vObject);
		const latestSnap = cache == null ? void 0 : cache[1];
		if (latestSnap && !snapMapCache.has(latestSnap)) {
			const clonedMap = new Map(indexMap);
			snapMapCache.set(latestSnap, clonedMap);
		}
	};
	const getMapForThis = (x) => snapMapCache.get(x) || indexMap;
	if (entries$1) {
		if (typeof entries$1[Symbol.iterator] !== "function") throw new TypeError("proxyMap:\n	initial state must be iterable\n		tip: structure should be [[key, value]]");
		for (const [key, value] of entries$1) {
			indexMap.set(key, initialIndex);
			initialData[initialIndex++] = value;
		}
	}
	const vObject = {
		data: initialData,
		index: initialIndex,
		epoch: 0,
		get size() {
			if (!isProxy$1(this)) registerSnapMap();
			return getMapForThis(this).size;
		},
		get(key) {
			const index = getMapForThis(this).get(key);
			if (index === void 0) {
				this.epoch;
				return;
			}
			return this.data[index];
		},
		has(key) {
			const map = getMapForThis(this);
			this.epoch;
			return map.has(key);
		},
		set(key, value) {
			if (!isProxy$1(this)) throw new Error("Cannot perform mutations on a snapshot");
			const index = indexMap.get(key);
			if (index === void 0) {
				indexMap.set(key, this.index);
				this.data[this.index++] = value;
			} else this.data[index] = value;
			this.epoch++;
			return this;
		},
		delete(key) {
			if (!isProxy$1(this)) throw new Error("Cannot perform mutations on a snapshot");
			const index = indexMap.get(key);
			if (index === void 0) return false;
			delete this.data[index];
			indexMap.delete(key);
			this.epoch++;
			return true;
		},
		clear() {
			if (!isProxy$1(this)) throw new Error("Cannot perform mutations on a snapshot");
			this.data.length = 0;
			this.index = 0;
			this.epoch++;
			indexMap.clear();
		},
		forEach(cb) {
			this.epoch;
			getMapForThis(this).forEach((index, key) => {
				cb(this.data[index], key, this);
			});
		},
		*entries() {
			this.epoch;
			const map = getMapForThis(this);
			for (const [key, index] of map) yield [key, this.data[index]];
		},
		*keys() {
			this.epoch;
			const map = getMapForThis(this);
			for (const key of map.keys()) yield key;
		},
		*values() {
			this.epoch;
			const map = getMapForThis(this);
			for (const index of map.values()) yield this.data[index];
		},
		[Symbol.iterator]() {
			return this.entries();
		},
		get [Symbol.toStringTag]() {
			return "Map";
		},
		toJSON() {
			return new Map(this.entries());
		}
	};
	const proxiedObject = proxy(vObject);
	Object.defineProperties(proxiedObject, {
		size: { enumerable: false },
		index: { enumerable: false },
		epoch: { enumerable: false },
		data: { enumerable: false },
		toJSON: { enumerable: false }
	});
	Object.seal(proxiedObject);
	return proxiedObject;
}
var { proxyStateMap, snapCache } = unstable_getInternalStates();
var SECURE_SITE = (typeof process !== "undefined" && true ? {}["NEXT_PUBLIC_SECURE_SITE_ORIGIN"] : void 0) || "https://secure.walletconnect.org";
const ONRAMP_PROVIDERS = [{
	label: "Meld.io",
	name: "meld",
	feeRange: "1-2%",
	url: "https://meldcrypto.com",
	supportedChains: ["eip155", "solana"]
}];
const MELD_PUBLIC_KEY = "WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU";
const ConstantsUtil$1 = {
	FOUR_MINUTES_MS: 24e4,
	TEN_SEC_MS: 1e4,
	FIVE_SEC_MS: 5e3,
	THREE_SEC_MS: 3e3,
	ONE_SEC_MS: 1e3,
	SECURE_SITE,
	SECURE_SITE_DASHBOARD: `${SECURE_SITE}/dashboard`,
	SECURE_SITE_FAVICON: `${SECURE_SITE}/images/favicon.png`,
	SOLANA_NATIVE_TOKEN_ADDRESS: "So11111111111111111111111111111111111111111",
	RESTRICTED_TIMEZONES: [
		"ASIA/SHANGHAI",
		"ASIA/URUMQI",
		"ASIA/CHONGQING",
		"ASIA/HARBIN",
		"ASIA/KASHGAR",
		"ASIA/MACAU",
		"ASIA/HONG_KONG",
		"ASIA/MACAO",
		"ASIA/BEIJING",
		"ASIA/HARBIN"
	],
	SWAP_SUGGESTED_TOKENS: [
		"ETH",
		"UNI",
		"1INCH",
		"AAVE",
		"SOL",
		"ADA",
		"AVAX",
		"DOT",
		"LINK",
		"NITRO",
		"GAIA",
		"MILK",
		"TRX",
		"NEAR",
		"GNO",
		"WBTC",
		"DAI",
		"WETH",
		"USDC",
		"USDT",
		"ARB",
		"BAL",
		"BICO",
		"CRV",
		"ENS",
		"MATIC",
		"OP"
	],
	SWAP_POPULAR_TOKENS: [
		"ETH",
		"UNI",
		"1INCH",
		"AAVE",
		"SOL",
		"ADA",
		"AVAX",
		"DOT",
		"LINK",
		"NITRO",
		"GAIA",
		"MILK",
		"TRX",
		"NEAR",
		"GNO",
		"WBTC",
		"DAI",
		"WETH",
		"USDC",
		"USDT",
		"ARB",
		"BAL",
		"BICO",
		"CRV",
		"ENS",
		"MATIC",
		"OP",
		"METAL",
		"DAI",
		"CHAMP",
		"WOLF",
		"SALE",
		"BAL",
		"BUSD",
		"MUST",
		"BTCpx",
		"ROUTE",
		"HEX",
		"WELT",
		"amDAI",
		"VSQ",
		"VISION",
		"AURUM",
		"pSP",
		"SNX",
		"VC",
		"LINK",
		"CHP",
		"amUSDT",
		"SPHERE",
		"FOX",
		"GIDDY",
		"GFC",
		"OMEN",
		"OX_OLD",
		"DE",
		"WNT"
	],
	SUGGESTED_TOKENS_BY_CHAIN: { "eip155:42161": ["USD₮0"] },
	BALANCE_SUPPORTED_CHAINS: [ConstantsUtil.CHAIN.EVM, ConstantsUtil.CHAIN.SOLANA],
	SEND_PARAMS_SUPPORTED_CHAINS: [ConstantsUtil.CHAIN.EVM],
	SWAP_SUPPORTED_NETWORKS: [
		"eip155:1",
		"eip155:42161",
		"eip155:10",
		"eip155:324",
		"eip155:8453",
		"eip155:56",
		"eip155:137",
		"eip155:100",
		"eip155:43114",
		"eip155:250",
		"eip155:8217",
		"eip155:1313161554"
	],
	NAMES_SUPPORTED_CHAIN_NAMESPACES: [ConstantsUtil.CHAIN.EVM],
	ONRAMP_SUPPORTED_CHAIN_NAMESPACES: [ConstantsUtil.CHAIN.EVM, ConstantsUtil.CHAIN.SOLANA],
	PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES: [ConstantsUtil.CHAIN.EVM, ConstantsUtil.CHAIN.SOLANA],
	ACTIVITY_ENABLED_CHAIN_NAMESPACES: [ConstantsUtil.CHAIN.EVM, ConstantsUtil.CHAIN.TON],
	NATIVE_TOKEN_ADDRESS: {
		eip155: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
		solana: "So11111111111111111111111111111111111111111",
		polkadot: "0x",
		bip122: "0x",
		cosmos: "0x",
		sui: "0x",
		stacks: "0x",
		ton: "0x"
	},
	CONVERT_SLIPPAGE_TOLERANCE: 1,
	CONNECT_LABELS: {
		MOBILE: "Open and continue in the wallet app",
		WEB: "Open and continue in the wallet app"
	},
	SEND_SUPPORTED_NAMESPACES: [ConstantsUtil.CHAIN.EVM, ConstantsUtil.CHAIN.SOLANA],
	DEFAULT_REMOTE_FEATURES: {
		swaps: ["1inch"],
		onramp: ["meld"],
		email: true,
		socials: [
			"google",
			"x",
			"discord",
			"farcaster",
			"github",
			"apple",
			"facebook"
		],
		activity: true,
		reownBranding: true,
		multiWallet: false,
		emailCapture: false,
		payWithExchange: false,
		payments: false,
		reownAuthentication: false,
		headless: false
	},
	DEFAULT_REMOTE_FEATURES_DISABLED: {
		email: false,
		socials: false,
		swaps: false,
		onramp: false,
		activity: false,
		reownBranding: false,
		emailCapture: false,
		reownAuthentication: false,
		headless: false
	},
	DEFAULT_FEATURES: {
		receive: true,
		send: true,
		emailShowWallets: true,
		connectorTypeOrder: [
			"walletConnect",
			"recent",
			"injected",
			"featured",
			"custom",
			"external",
			"recommended"
		],
		analytics: true,
		allWallets: true,
		legalCheckbox: false,
		smartSessions: false,
		collapseWallets: false,
		walletFeaturesOrder: [
			"onramp",
			"swaps",
			"receive",
			"send"
		],
		connectMethodsOrder: void 0,
		pay: false,
		reownAuthentication: false,
		headless: false
	},
	DEFAULT_SOCIALS: [
		"google",
		"x",
		"farcaster",
		"discord",
		"apple",
		"github",
		"facebook"
	],
	DEFAULT_ACCOUNT_TYPES: {
		bip122: "payment",
		eip155: "smartAccount",
		polkadot: "eoa",
		solana: "eoa",
		ton: "eoa"
	},
	ADAPTER_TYPES: {
		UNIVERSAL: "universal",
		SOLANA: "solana",
		WAGMI: "wagmi",
		ETHERS: "ethers",
		ETHERS5: "ethers5",
		BITCOIN: "bitcoin"
	},
	SIWX_DEFAULTS: { signOutOnDisconnect: true },
	MANDATORY_WALLET_IDS_ON_MOBILE: [
		PresetsUtil.ConnectorExplorerIds[ConstantsUtil.CONNECTOR_ID.COINBASE],
		PresetsUtil.ConnectorExplorerIds[ConstantsUtil.CONNECTOR_ID.COINBASE_SDK],
		PresetsUtil.ConnectorExplorerIds[ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT],
		PresetsUtil.ConnectorExplorerIds[ConstantsUtil.SOLFLARE_CONNECTOR_NAME],
		PresetsUtil.ConnectorExplorerIds[ConstantsUtil.PHANTOM_CONNECTOR_NAME],
		PresetsUtil.ConnectorExplorerIds[ConstantsUtil.BINANCE_CONNECTOR_NAME]
	],
	DEFAULT_CONNECT_METHOD_ORDER: [
		"email",
		"social",
		"wallet"
	]
};
const StorageUtil = {
	cacheExpiry: {
		portfolio: 3e4,
		nativeBalance: 3e4,
		ens: 3e5,
		identity: 3e5,
		transactionsHistory: 15e3,
		tokenPrice: 15e3,
		latestAppKitVersion: 6048e5,
		tonWallets: 864e5
	},
	isCacheExpired(timestamp, cacheExpiry) {
		return Date.now() - timestamp > cacheExpiry;
	},
	getActiveNetworkProps() {
		const namespace = StorageUtil.getActiveNamespace();
		const caipNetworkId = StorageUtil.getActiveCaipNetworkId();
		const stringChainId = caipNetworkId ? caipNetworkId.split(":")[1] : void 0;
		return {
			namespace,
			caipNetworkId,
			chainId: stringChainId ? isNaN(Number(stringChainId)) ? stringChainId : Number(stringChainId) : void 0
		};
	},
	setWalletConnectDeepLink({ name, href }) {
		try {
			SafeLocalStorage.setItem(SafeLocalStorageKeys.DEEPLINK_CHOICE, JSON.stringify({
				href,
				name
			}));
		} catch {
			console.info("Unable to set WalletConnect deep link");
		}
	},
	getWalletConnectDeepLink() {
		try {
			const deepLink = SafeLocalStorage.getItem(SafeLocalStorageKeys.DEEPLINK_CHOICE);
			if (deepLink) return JSON.parse(deepLink);
		} catch {
			console.info("Unable to get WalletConnect deep link");
		}
	},
	deleteWalletConnectDeepLink() {
		try {
			SafeLocalStorage.removeItem(SafeLocalStorageKeys.DEEPLINK_CHOICE);
		} catch {
			console.info("Unable to delete WalletConnect deep link");
		}
	},
	setActiveNamespace(namespace) {
		try {
			SafeLocalStorage.setItem(SafeLocalStorageKeys.ACTIVE_NAMESPACE, namespace);
		} catch {
			console.info("Unable to set active namespace");
		}
	},
	setActiveCaipNetworkId(caipNetworkId) {
		try {
			SafeLocalStorage.setItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID, caipNetworkId);
			StorageUtil.setActiveNamespace(caipNetworkId.split(":")[0]);
		} catch {
			console.info("Unable to set active caip network id");
		}
	},
	getActiveCaipNetworkId() {
		try {
			return SafeLocalStorage.getItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);
		} catch {
			console.info("Unable to get active caip network id");
			return;
		}
	},
	deleteActiveCaipNetworkId() {
		try {
			SafeLocalStorage.removeItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);
		} catch {
			console.info("Unable to delete active caip network id");
		}
	},
	deleteConnectedConnectorId(namespace) {
		try {
			const key = getSafeConnectorIdKey(namespace);
			SafeLocalStorage.removeItem(key);
		} catch {
			console.info("Unable to delete connected connector id");
		}
	},
	setAppKitRecent(wallet) {
		try {
			const recentWallets = StorageUtil.getRecentWallets();
			if (!recentWallets.find((w) => w.id === wallet.id)) {
				recentWallets.unshift(wallet);
				if (recentWallets.length > 2) recentWallets.pop();
				SafeLocalStorage.setItem(SafeLocalStorageKeys.RECENT_WALLETS, JSON.stringify(recentWallets));
				SafeLocalStorage.setItem(SafeLocalStorageKeys.RECENT_WALLET, JSON.stringify(wallet));
			}
		} catch {
			console.info("Unable to set AppKit recent");
		}
	},
	getRecentWallets() {
		try {
			const recent = SafeLocalStorage.getItem(SafeLocalStorageKeys.RECENT_WALLETS);
			return recent ? JSON.parse(recent) : [];
		} catch {
			console.info("Unable to get AppKit recent");
		}
		return [];
	},
	getRecentWallet() {
		try {
			const recent = SafeLocalStorage.getItem(SafeLocalStorageKeys.RECENT_WALLET);
			return recent ? JSON.parse(recent) : null;
		} catch {
			console.info("Unable to get AppKit recent");
		}
		return null;
	},
	deleteRecentWallet() {
		try {
			SafeLocalStorage.removeItem(SafeLocalStorageKeys.RECENT_WALLET);
		} catch {
			console.info("Unable to delete AppKit recent");
		}
	},
	setConnectedConnectorId(namespace, connectorId) {
		try {
			const key = getSafeConnectorIdKey(namespace);
			SafeLocalStorage.setItem(key, connectorId);
		} catch {
			console.info("Unable to set Connected Connector Id");
		}
	},
	getActiveNamespace() {
		try {
			return SafeLocalStorage.getItem(SafeLocalStorageKeys.ACTIVE_NAMESPACE);
		} catch {
			console.info("Unable to get active namespace");
		}
	},
	getConnectedConnectorId(namespace) {
		if (!namespace) return;
		try {
			const key = getSafeConnectorIdKey(namespace);
			return SafeLocalStorage.getItem(key);
		} catch (e) {
			console.info("Unable to get connected connector id in namespace", namespace);
		}
	},
	setConnectedSocialProvider(socialProvider) {
		try {
			SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTED_SOCIAL, socialProvider);
		} catch {
			console.info("Unable to set connected social provider");
		}
	},
	getConnectedSocialProvider() {
		try {
			return SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTED_SOCIAL);
		} catch {
			console.info("Unable to get connected social provider");
		}
	},
	deleteConnectedSocialProvider() {
		try {
			SafeLocalStorage.removeItem(SafeLocalStorageKeys.CONNECTED_SOCIAL);
		} catch {
			console.info("Unable to delete connected social provider");
		}
	},
	getConnectedSocialUsername() {
		try {
			return SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTED_SOCIAL_USERNAME);
		} catch {
			console.info("Unable to get connected social username");
		}
	},
	getStoredActiveCaipNetworkId() {
		return SafeLocalStorage.getItem(SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID)?.split(":")?.[1];
	},
	setConnectionStatus(status) {
		try {
			SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTION_STATUS, status);
		} catch {
			console.info("Unable to set connection status");
		}
	},
	getConnectionStatus() {
		try {
			return SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTION_STATUS);
		} catch {
			return;
		}
	},
	getConnectedNamespaces() {
		try {
			const namespaces = SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTED_NAMESPACES);
			if (!namespaces?.length) return [];
			return namespaces.split(",");
		} catch {
			return [];
		}
	},
	setConnectedNamespaces(namespaces) {
		try {
			const uniqueNamespaces = Array.from(new Set(namespaces));
			SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTED_NAMESPACES, uniqueNamespaces.join(","));
		} catch {
			console.info("Unable to set namespaces in storage");
		}
	},
	addConnectedNamespace(namespace) {
		try {
			const namespaces = StorageUtil.getConnectedNamespaces();
			if (!namespaces.includes(namespace)) {
				namespaces.push(namespace);
				StorageUtil.setConnectedNamespaces(namespaces);
			}
		} catch {
			console.info("Unable to add connected namespace");
		}
	},
	removeConnectedNamespace(namespace) {
		try {
			const namespaces = StorageUtil.getConnectedNamespaces();
			const index = namespaces.indexOf(namespace);
			if (index > -1) {
				namespaces.splice(index, 1);
				StorageUtil.setConnectedNamespaces(namespaces);
			}
		} catch {
			console.info("Unable to remove connected namespace");
		}
	},
	getTelegramSocialProvider() {
		try {
			return SafeLocalStorage.getItem(SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER);
		} catch {
			console.info("Unable to get telegram social provider");
			return null;
		}
	},
	setTelegramSocialProvider(socialProvider) {
		try {
			SafeLocalStorage.setItem(SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER, socialProvider);
		} catch {
			console.info("Unable to set telegram social provider");
		}
	},
	removeTelegramSocialProvider() {
		try {
			SafeLocalStorage.removeItem(SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER);
		} catch {
			console.info("Unable to remove telegram social provider");
		}
	},
	getBalanceCache() {
		let cache = {};
		try {
			const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.PORTFOLIO_CACHE);
			cache = result ? JSON.parse(result) : {};
		} catch {
			console.info("Unable to get balance cache");
		}
		return cache;
	},
	removeAddressFromBalanceCache(caipAddress) {
		try {
			const cache = StorageUtil.getBalanceCache();
			SafeLocalStorage.setItem(SafeLocalStorageKeys.PORTFOLIO_CACHE, JSON.stringify({
				...cache,
				[caipAddress]: void 0
			}));
		} catch {
			console.info("Unable to remove address from balance cache", caipAddress);
		}
	},
	getBalanceCacheForCaipAddress(caipAddress) {
		try {
			const balanceCache = StorageUtil.getBalanceCache()[caipAddress];
			if (balanceCache && !this.isCacheExpired(balanceCache.timestamp, this.cacheExpiry.portfolio)) return balanceCache.balance;
			StorageUtil.removeAddressFromBalanceCache(caipAddress);
		} catch {
			console.info("Unable to get balance cache for address", caipAddress);
		}
	},
	updateBalanceCache(params) {
		try {
			const cache = StorageUtil.getBalanceCache();
			cache[params.caipAddress] = params;
			SafeLocalStorage.setItem(SafeLocalStorageKeys.PORTFOLIO_CACHE, JSON.stringify(cache));
		} catch {
			console.info("Unable to update balance cache", params);
		}
	},
	getNativeBalanceCache() {
		let cache = {};
		try {
			const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE);
			cache = result ? JSON.parse(result) : {};
		} catch {
			console.info("Unable to get balance cache");
		}
		return cache;
	},
	removeAddressFromNativeBalanceCache(caipAddress) {
		try {
			const cache = StorageUtil.getBalanceCache();
			SafeLocalStorage.setItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE, JSON.stringify({
				...cache,
				[caipAddress]: void 0
			}));
		} catch {
			console.info("Unable to remove address from balance cache", caipAddress);
		}
	},
	getNativeBalanceCacheForCaipAddress(caipAddress) {
		try {
			const nativeBalanceCache = StorageUtil.getNativeBalanceCache()[caipAddress];
			if (nativeBalanceCache && !this.isCacheExpired(nativeBalanceCache.timestamp, this.cacheExpiry.nativeBalance)) return nativeBalanceCache;
			console.info("Discarding cache for address", caipAddress);
			StorageUtil.removeAddressFromBalanceCache(caipAddress);
		} catch {
			console.info("Unable to get balance cache for address", caipAddress);
		}
	},
	updateNativeBalanceCache(params) {
		try {
			const cache = StorageUtil.getNativeBalanceCache();
			cache[params.caipAddress] = params;
			SafeLocalStorage.setItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE, JSON.stringify(cache));
		} catch {
			console.info("Unable to update balance cache", params);
		}
	},
	getEnsCache() {
		let cache = {};
		try {
			const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.ENS_CACHE);
			cache = result ? JSON.parse(result) : {};
		} catch {
			console.info("Unable to get ens name cache");
		}
		return cache;
	},
	getEnsFromCacheForAddress(address) {
		try {
			const ensCache = StorageUtil.getEnsCache()[address];
			if (ensCache && !this.isCacheExpired(ensCache.timestamp, this.cacheExpiry.ens)) return ensCache.ens;
			StorageUtil.removeEnsFromCache(address);
		} catch {
			console.info("Unable to get ens name from cache", address);
		}
	},
	updateEnsCache(params) {
		try {
			const cache = StorageUtil.getEnsCache();
			cache[params.address] = params;
			SafeLocalStorage.setItem(SafeLocalStorageKeys.ENS_CACHE, JSON.stringify(cache));
		} catch {
			console.info("Unable to update ens name cache", params);
		}
	},
	removeEnsFromCache(address) {
		try {
			const cache = StorageUtil.getEnsCache();
			SafeLocalStorage.setItem(SafeLocalStorageKeys.ENS_CACHE, JSON.stringify({
				...cache,
				[address]: void 0
			}));
		} catch {
			console.info("Unable to remove ens name from cache", address);
		}
	},
	getIdentityCache() {
		let cache = {};
		try {
			const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.IDENTITY_CACHE);
			cache = result ? JSON.parse(result) : {};
		} catch {
			console.info("Unable to get identity cache");
		}
		return cache;
	},
	getIdentityFromCacheForAddress(address) {
		try {
			const identityCache = StorageUtil.getIdentityCache()[address];
			if (identityCache && !this.isCacheExpired(identityCache.timestamp, this.cacheExpiry.identity)) return identityCache.identity;
			StorageUtil.removeIdentityFromCache(address);
		} catch {
			console.info("Unable to get identity from cache", address);
		}
	},
	updateIdentityCache(params) {
		try {
			const cache = StorageUtil.getIdentityCache();
			cache[params.address] = {
				identity: params.identity,
				timestamp: params.timestamp
			};
			SafeLocalStorage.setItem(SafeLocalStorageKeys.IDENTITY_CACHE, JSON.stringify(cache));
		} catch {
			console.info("Unable to update identity cache", params);
		}
	},
	removeIdentityFromCache(address) {
		try {
			const cache = StorageUtil.getIdentityCache();
			SafeLocalStorage.setItem(SafeLocalStorageKeys.IDENTITY_CACHE, JSON.stringify({
				...cache,
				[address]: void 0
			}));
		} catch {
			console.info("Unable to remove identity from cache", address);
		}
	},
	getTonWalletsCache() {
		try {
			const cache = SafeLocalStorage.getItem(SafeLocalStorageKeys.TON_WALLETS_CACHE);
			const parsedCache = cache ? JSON.parse(cache) : void 0;
			if (parsedCache && !this.isCacheExpired(parsedCache.timestamp, this.cacheExpiry.tonWallets)) return parsedCache;
			StorageUtil.removeTonWalletsCache();
		} catch {
			console.info("Unable to get ton wallets cache");
		}
	},
	updateTonWalletsCache(wallets) {
		try {
			const cache = StorageUtil.getTonWalletsCache() || {
				timestamp: 0,
				wallets: []
			};
			cache.timestamp = (/* @__PURE__ */ new Date()).getTime();
			cache.wallets = wallets;
			SafeLocalStorage.setItem(SafeLocalStorageKeys.TON_WALLETS_CACHE, JSON.stringify(cache));
		} catch {
			console.info("Unable to update ton wallets cache", wallets);
		}
	},
	removeTonWalletsCache() {
		try {
			SafeLocalStorage.removeItem(SafeLocalStorageKeys.TON_WALLETS_CACHE);
		} catch {
			console.info("Unable to remove ton wallets cache");
		}
	},
	clearAddressCache() {
		try {
			SafeLocalStorage.removeItem(SafeLocalStorageKeys.PORTFOLIO_CACHE);
			SafeLocalStorage.removeItem(SafeLocalStorageKeys.NATIVE_BALANCE_CACHE);
			SafeLocalStorage.removeItem(SafeLocalStorageKeys.ENS_CACHE);
			SafeLocalStorage.removeItem(SafeLocalStorageKeys.IDENTITY_CACHE);
			SafeLocalStorage.removeItem(SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE);
		} catch {
			console.info("Unable to clear address cache");
		}
	},
	setPreferredAccountTypes(accountTypes) {
		try {
			SafeLocalStorage.setItem(SafeLocalStorageKeys.PREFERRED_ACCOUNT_TYPES, JSON.stringify(accountTypes));
		} catch {
			console.info("Unable to set preferred account types", accountTypes);
		}
	},
	getPreferredAccountTypes() {
		try {
			const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.PREFERRED_ACCOUNT_TYPES);
			if (!result) return {};
			return JSON.parse(result);
		} catch {
			console.info("Unable to get preferred account types");
		}
		return {};
	},
	setConnections(connections, chainNamespace) {
		try {
			const existingConnections = StorageUtil.getConnections();
			const existing = existingConnections[chainNamespace] ?? [];
			const connectorConnectionMap = /* @__PURE__ */ new Map();
			for (const conn of existing) connectorConnectionMap.set(conn.connectorId, { ...conn });
			for (const conn of connections) {
				const existingConn = connectorConnectionMap.get(conn.connectorId);
				const isAuth = conn.connectorId === ConstantsUtil.CONNECTOR_ID.AUTH;
				if (existingConn && !isAuth) {
					const existingAddrs = new Set(existingConn.accounts.map((a) => a.address.toLowerCase()));
					const newAccounts = conn.accounts.filter((a) => !existingAddrs.has(a.address.toLowerCase()));
					existingConn.accounts.push(...newAccounts);
				} else connectorConnectionMap.set(conn.connectorId, { ...conn });
			}
			const dedupedConnections = {
				...existingConnections,
				[chainNamespace]: Array.from(connectorConnectionMap.values())
			};
			SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTIONS, JSON.stringify(dedupedConnections));
		} catch (error) {
			console.error("Unable to sync connections to storage", error);
		}
	},
	getConnections() {
		try {
			const connectionsStorage = SafeLocalStorage.getItem(SafeLocalStorageKeys.CONNECTIONS);
			if (!connectionsStorage) return {};
			return JSON.parse(connectionsStorage);
		} catch (error) {
			console.error("Unable to get connections from storage", error);
			return {};
		}
	},
	deleteAddressFromConnection({ connectorId, address, namespace }) {
		try {
			const connections = StorageUtil.getConnections();
			const namespaceConnections = connections[namespace] ?? [];
			const connectionMap = new Map(namespaceConnections.map((conn) => [conn.connectorId, conn]));
			const connector = connectionMap.get(connectorId);
			if (connector) if (connector.accounts.filter((acc) => acc.address.toLowerCase() !== address.toLowerCase()).length === 0) connectionMap.delete(connectorId);
			else connectionMap.set(connectorId, {
				...connector,
				accounts: connector.accounts.filter((acc) => acc.address.toLowerCase() !== address.toLowerCase())
			});
			SafeLocalStorage.setItem(SafeLocalStorageKeys.CONNECTIONS, JSON.stringify({
				...connections,
				[namespace]: Array.from(connectionMap.values())
			}));
		} catch {
			console.error(`Unable to remove address "${address}" from connector "${connectorId}" in namespace "${namespace}"`);
		}
	},
	getDisconnectedConnectorIds() {
		try {
			const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.DISCONNECTED_CONNECTOR_IDS);
			if (!result) return {};
			return JSON.parse(result);
		} catch {
			console.info("Unable to get disconnected connector ids");
		}
		return {};
	},
	addDisconnectedConnectorId(connectorId, chainNamespace) {
		try {
			const currentDisconnectedConnectorIds = StorageUtil.getDisconnectedConnectorIds();
			const disconnectedConnectorIdsByNamespace = currentDisconnectedConnectorIds[chainNamespace] ?? [];
			disconnectedConnectorIdsByNamespace.push(connectorId);
			SafeLocalStorage.setItem(SafeLocalStorageKeys.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
				...currentDisconnectedConnectorIds,
				[chainNamespace]: Array.from(new Set(disconnectedConnectorIdsByNamespace))
			}));
		} catch {
			console.error(`Unable to set disconnected connector id "${connectorId}" for namespace "${chainNamespace}"`);
		}
	},
	removeDisconnectedConnectorId(connectorId, chainNamespace) {
		try {
			const currentDisconnectedConnectorIds = StorageUtil.getDisconnectedConnectorIds();
			let disconnectedConnectorIdsByNamespace = currentDisconnectedConnectorIds[chainNamespace] ?? [];
			disconnectedConnectorIdsByNamespace = disconnectedConnectorIdsByNamespace.filter((id) => id.toLowerCase() !== connectorId.toLowerCase());
			SafeLocalStorage.setItem(SafeLocalStorageKeys.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
				...currentDisconnectedConnectorIds,
				[chainNamespace]: Array.from(new Set(disconnectedConnectorIdsByNamespace))
			}));
		} catch {
			console.error(`Unable to remove disconnected connector id "${connectorId}" for namespace "${chainNamespace}"`);
		}
	},
	isConnectorDisconnected(connectorId, chainNamespace) {
		try {
			return (StorageUtil.getDisconnectedConnectorIds()[chainNamespace] ?? []).some((id) => id.toLowerCase() === connectorId.toLowerCase());
		} catch {
			console.info(`Unable to get disconnected connector id "${connectorId}" for namespace "${chainNamespace}"`);
		}
		return false;
	},
	getTransactionsCache() {
		try {
			const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE);
			return result ? JSON.parse(result) : {};
		} catch {
			console.info("Unable to get transactions cache");
		}
		return {};
	},
	getTransactionsCacheForAddress({ address, chainId = "" }) {
		try {
			const transactionsCache = StorageUtil.getTransactionsCache()[address]?.[chainId];
			if (transactionsCache && !this.isCacheExpired(transactionsCache.timestamp, this.cacheExpiry.transactionsHistory)) return transactionsCache.transactions;
			StorageUtil.removeTransactionsCache({
				address,
				chainId
			});
		} catch {
			console.info("Unable to get transactions cache");
		}
	},
	updateTransactionsCache({ address, chainId = "", timestamp, transactions }) {
		try {
			const cache = StorageUtil.getTransactionsCache();
			cache[address] = {
				...cache[address],
				[chainId]: {
					timestamp,
					transactions
				}
			};
			SafeLocalStorage.setItem(SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE, JSON.stringify(cache));
		} catch {
			console.info("Unable to update transactions cache", {
				address,
				chainId,
				timestamp,
				transactions
			});
		}
	},
	removeTransactionsCache({ address, chainId }) {
		try {
			const cache = StorageUtil.getTransactionsCache();
			const { [chainId]: _removed, ...updatedChainData } = cache?.[address] || {};
			SafeLocalStorage.setItem(SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE, JSON.stringify({
				...cache,
				[address]: updatedChainData
			}));
		} catch {
			console.info("Unable to remove transactions cache", {
				address,
				chainId
			});
		}
	},
	getTokenPriceCache() {
		try {
			const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.TOKEN_PRICE_CACHE);
			return result ? JSON.parse(result) : {};
		} catch {
			console.info("Unable to get token price cache");
		}
		return {};
	},
	getTokenPriceCacheForAddresses(addresses) {
		try {
			const tokenPriceCache = StorageUtil.getTokenPriceCache()[addresses.join(",")];
			if (tokenPriceCache && !this.isCacheExpired(tokenPriceCache.timestamp, this.cacheExpiry.tokenPrice)) return tokenPriceCache.tokenPrice;
			StorageUtil.removeTokenPriceCache(addresses);
		} catch {
			console.info("Unable to get token price cache for addresses", addresses);
		}
	},
	updateTokenPriceCache(params) {
		try {
			const cache = StorageUtil.getTokenPriceCache();
			cache[params.addresses.join(",")] = {
				timestamp: params.timestamp,
				tokenPrice: params.tokenPrice
			};
			SafeLocalStorage.setItem(SafeLocalStorageKeys.TOKEN_PRICE_CACHE, JSON.stringify(cache));
		} catch {
			console.info("Unable to update token price cache", params);
		}
	},
	removeTokenPriceCache(addresses) {
		try {
			const cache = StorageUtil.getTokenPriceCache();
			SafeLocalStorage.setItem(SafeLocalStorageKeys.TOKEN_PRICE_CACHE, JSON.stringify({
				...cache,
				[addresses.join(",")]: void 0
			}));
		} catch {
			console.info("Unable to remove token price cache", addresses);
		}
	},
	getLatestAppKitVersion() {
		try {
			const result = this.getLatestAppKitVersionCache();
			const version = result?.version;
			if (version && !this.isCacheExpired(result.timestamp, this.cacheExpiry.latestAppKitVersion)) return version;
			return;
		} catch {
			console.info("Unable to get latest AppKit version");
		}
	},
	getLatestAppKitVersionCache() {
		try {
			const result = SafeLocalStorage.getItem(SafeLocalStorageKeys.LATEST_APPKIT_VERSION);
			return result ? JSON.parse(result) : {};
		} catch {
			console.info("Unable to get latest AppKit version cache");
		}
		return {};
	},
	updateLatestAppKitVersion(params) {
		try {
			const cache = StorageUtil.getLatestAppKitVersionCache();
			cache.timestamp = params.timestamp;
			cache.version = params.version;
			SafeLocalStorage.setItem(SafeLocalStorageKeys.LATEST_APPKIT_VERSION, JSON.stringify(cache));
		} catch {
			console.info("Unable to update latest AppKit version on local storage", params);
		}
	}
};
const CoreHelperUtil = {
	getWindow() {
		if (typeof window === "undefined") return;
		return window;
	},
	isMobile() {
		if (this.isClient()) return Boolean(window?.matchMedia && typeof window.matchMedia === "function" && window.matchMedia("(pointer:coarse)")?.matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent));
		return false;
	},
	checkCaipNetwork(network, networkName = "") {
		return network?.caipNetworkId.toLocaleLowerCase().includes(networkName.toLowerCase());
	},
	isAndroid() {
		if (!this.isMobile()) return false;
		const ua = window?.navigator.userAgent.toLowerCase();
		return CoreHelperUtil.isMobile() && ua.includes("android");
	},
	isIos() {
		if (!this.isMobile()) return false;
		const ua = window?.navigator.userAgent.toLowerCase();
		return ua.includes("iphone") || ua.includes("ipad");
	},
	isSafari() {
		if (!this.isClient()) return false;
		return (window?.navigator.userAgent.toLowerCase()).includes("safari");
	},
	isClient() {
		return typeof window !== "undefined";
	},
	isPairingExpired(expiry) {
		return expiry ? expiry - Date.now() <= ConstantsUtil$1.TEN_SEC_MS : true;
	},
	isAllowedRetry(lastRetry, differenceMs = ConstantsUtil$1.ONE_SEC_MS) {
		return Date.now() - lastRetry >= differenceMs;
	},
	copyToClopboard(text) {
		navigator.clipboard.writeText(text);
	},
	isIframe() {
		try {
			return window?.self !== window?.top;
		} catch (e) {
			return false;
		}
	},
	isSafeApp() {
		if (CoreHelperUtil.isClient() && window.self !== window.top) try {
			const ancestor = window?.location?.ancestorOrigins?.[0];
			const safeAppUrl = "https://app.safe.global";
			if (ancestor) {
				const ancestorUrl = new URL(ancestor);
				const safeUrl = new URL(safeAppUrl);
				return ancestorUrl.hostname === safeUrl.hostname;
			}
		} catch {
			return false;
		}
		return false;
	},
	getPairingExpiry() {
		return Date.now() + ConstantsUtil$1.FOUR_MINUTES_MS;
	},
	getNetworkId(caipAddress) {
		return caipAddress?.split(":")[1];
	},
	getPlainAddress(caipAddress) {
		return caipAddress?.split(":")[2];
	},
	async wait(milliseconds) {
		return new Promise((resolve) => {
			setTimeout(resolve, milliseconds);
		});
	},
	debounce(func, timeout = 500) {
		let timer = void 0;
		return (...args) => {
			function next() {
				func(...args);
			}
			if (timer) clearTimeout(timer);
			timer = setTimeout(next, timeout);
		};
	},
	isHttpUrl(url) {
		return url.startsWith("http://") || url.startsWith("https://");
	},
	formatNativeUrl(appUrl, wcUri, universalLink = null) {
		if (CoreHelperUtil.isHttpUrl(appUrl)) return this.formatUniversalUrl(appUrl, wcUri);
		let safeAppUrl = appUrl;
		let safeUniversalLink = universalLink;
		if (!safeAppUrl.includes("://")) {
			safeAppUrl = appUrl.replaceAll("/", "").replaceAll(":", "");
			safeAppUrl = `${safeAppUrl}://`;
		}
		if (!safeAppUrl.endsWith("/")) safeAppUrl = `${safeAppUrl}/`;
		if (safeUniversalLink && !safeUniversalLink?.endsWith("/")) safeUniversalLink = `${safeUniversalLink}/`;
		if (this.isTelegram() && this.isAndroid()) wcUri = encodeURIComponent(wcUri);
		const encodedWcUrl = encodeURIComponent(wcUri);
		return {
			redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
			redirectUniversalLink: safeUniversalLink ? `${safeUniversalLink}wc?uri=${encodedWcUrl}` : void 0,
			href: safeAppUrl
		};
	},
	formatUniversalUrl(appUrl, wcUri) {
		if (!CoreHelperUtil.isHttpUrl(appUrl)) return this.formatNativeUrl(appUrl, wcUri);
		let safeAppUrl = appUrl;
		if (!safeAppUrl.endsWith("/")) safeAppUrl = `${safeAppUrl}/`;
		return {
			redirect: `${safeAppUrl}wc?uri=${encodeURIComponent(wcUri)}`,
			href: safeAppUrl
		};
	},
	getOpenTargetForPlatform(target) {
		if (target === "popupWindow") return target;
		if (this.isTelegram()) {
			if (StorageUtil.getTelegramSocialProvider()) return "_top";
			return "_blank";
		}
		return target;
	},
	openHref(href, target, features) {
		window?.open(href, this.getOpenTargetForPlatform(target), features || "noreferrer noopener");
	},
	returnOpenHref(href, target, features) {
		return window?.open(href, this.getOpenTargetForPlatform(target), features || "noreferrer noopener");
	},
	isTelegram() {
		return typeof window !== "undefined" && (Boolean(window.TelegramWebviewProxy) || Boolean(window.Telegram) || Boolean(window.TelegramWebviewProxyProto));
	},
	isPWA() {
		if (typeof window === "undefined") return false;
		const isStandaloneDisplayMode = window?.matchMedia && typeof window.matchMedia === "function" ? window.matchMedia("(display-mode: standalone)")?.matches : false;
		const isIOSStandalone = window?.navigator?.standalone;
		return Boolean(isStandaloneDisplayMode || isIOSStandalone);
	},
	async preloadImage(src) {
		const imagePromise = new Promise((resolve, reject) => {
			const image = new Image();
			image.onload = resolve;
			image.onerror = reject;
			image.crossOrigin = "anonymous";
			image.src = src;
		});
		return Promise.race([imagePromise, CoreHelperUtil.wait(2e3)]);
	},
	parseBalance(balance, symbol) {
		let formattedBalance = "0.000";
		if (typeof balance === "string") {
			const number = Number(balance);
			if (!isNaN(number)) {
				const formattedValue = (Math.floor(number * 1e3) / 1e3).toFixed(3);
				if (formattedValue) formattedBalance = formattedValue;
			}
		}
		const [valueString, decimalsString] = formattedBalance.split(".");
		const value = valueString || "0";
		const decimals = decimalsString || "000";
		return {
			formattedText: `${value}.${decimals}${symbol ? ` ${symbol}` : ""}`,
			value,
			decimals,
			symbol
		};
	},
	getApiUrl() {
		return ConstantsUtil.W3M_API_URL;
	},
	getBlockchainApiUrl() {
		return ConstantsUtil.BLOCKCHAIN_API_RPC_URL;
	},
	getAnalyticsUrl() {
		return ConstantsUtil.PULSE_API_URL;
	},
	getUUID() {
		if (crypto?.randomUUID) return crypto.randomUUID();
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (c) => {
			const r = Math.random() * 16 | 0;
			return (c === "x" ? r : r & 3 | 8).toString(16);
		});
	},
	parseError(error) {
		if (typeof error === "string") return error;
		else if (typeof error?.issues?.[0]?.message === "string") return error.issues[0].message;
		else if (error instanceof Error) return error.message;
		return "Unknown error";
	},
	sortRequestedNetworks(approvedIds, requestedNetworks = []) {
		const approvedIndexMap = {};
		if (requestedNetworks && approvedIds) {
			approvedIds.forEach((id, index) => {
				approvedIndexMap[id] = index;
			});
			requestedNetworks.sort((a, b) => {
				const indexA = approvedIndexMap[a.id];
				const indexB = approvedIndexMap[b.id];
				if (indexA !== void 0 && indexB !== void 0) return indexA - indexB;
				else if (indexA !== void 0) return -1;
				else if (indexB !== void 0) return 1;
				return 0;
			});
		}
		return requestedNetworks;
	},
	calculateBalance(array) {
		let sum = 0;
		for (const item of array) sum += item.value ?? 0;
		return sum;
	},
	formatTokenBalance(number) {
		const [dollars, pennies] = number.toFixed(2).split(".");
		return {
			dollars,
			pennies
		};
	},
	isAddress(address, chain = "eip155") {
		switch (chain) {
			case "eip155":
				if (!/^(?:0x)?[0-9a-f]{40}$/iu.test(address)) return false;
				else if (/^(?:0x)?[0-9a-f]{40}$/iu.test(address) || /^(?:0x)?[0-9A-F]{40}$/iu.test(address)) return true;
				return false;
			case "solana": return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(address);
			case "bip122": {
				const isP2PKH = /^[1][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(address);
				const isP2SH = /^[3][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(address);
				const isBech32 = /^bc1[a-z0-9]{39,87}$/u.test(address);
				const isBech32m = /^bc1p[a-z0-9]{58}$/u.test(address);
				return isP2PKH || isP2SH || isBech32 || isBech32m;
			}
			default: return false;
		}
	},
	uniqueBy(arr, key) {
		const set = /* @__PURE__ */ new Set();
		return arr.filter((item) => {
			const keyValue = item[key];
			if (set.has(keyValue)) return false;
			set.add(keyValue);
			return true;
		});
	},
	generateSdkVersion(adapters, platform, version) {
		return `${platform}-${adapters.length === 0 ? ConstantsUtil$1.ADAPTER_TYPES.UNIVERSAL : adapters.map((adapter) => adapter.adapterType).join(",")}-${version}`;
	},
	createAccount(namespace, address, type, publicKey, path) {
		return {
			namespace,
			address,
			type,
			publicKey,
			path
		};
	},
	isCaipAddress(address) {
		if (typeof address !== "string") return false;
		const sections = address.split(":");
		const namespace = sections[0];
		return sections.filter(Boolean).length === 3 && namespace in ConstantsUtil.CHAIN_NAME_MAP;
	},
	getAccount(account) {
		if (!account) return {
			address: void 0,
			chainId: void 0
		};
		if (typeof account === "string") return {
			address: account,
			chainId: void 0
		};
		return {
			address: account.address,
			chainId: account.chainId
		};
	},
	isMac() {
		const ua = window?.navigator.userAgent.toLowerCase();
		return ua.includes("macintosh") && !ua.includes("safari");
	},
	formatTelegramSocialLoginUrl(url) {
		const valueToInject = `--${encodeURIComponent(window?.location.href)}`;
		const paramToInject = "state=";
		if (new URL(url).host === "auth.magic.link") {
			const providerUrl = url.substring(url.indexOf("provider_authorization_url=") + 27);
			const resultUrl = this.injectIntoUrl(decodeURIComponent(providerUrl), paramToInject, valueToInject);
			return url.replace(providerUrl, encodeURIComponent(resultUrl));
		}
		return this.injectIntoUrl(url, paramToInject, valueToInject);
	},
	injectIntoUrl(url, key, appendString) {
		const keyIndex = url.indexOf(key);
		if (keyIndex === -1) throw new Error(`${key} parameter not found in the URL: ${url}`);
		const keyEndIndex = url.indexOf("&", keyIndex);
		const keyLength = key.length;
		const keyParamEnd = keyEndIndex !== -1 ? keyEndIndex : url.length;
		const beforeKeyValue = url.substring(0, keyIndex + keyLength);
		const currentKeyValue = url.substring(keyIndex + keyLength, keyParamEnd);
		const afterKeyValue = url.substring(keyEndIndex);
		return beforeKeyValue + (currentKeyValue + appendString) + afterKeyValue;
	},
	isNumber(value) {
		if (typeof value !== "number" && typeof value !== "string") return false;
		return !isNaN(Number(value));
	}
};
async function fetchData(...args) {
	const response = await fetch(...args);
	if (!response.ok) throw new Error(`HTTP status code: ${response.status}`, { cause: response });
	return response;
}
var FetchUtil = class {
	constructor({ baseUrl: baseUrl$2, clientId }) {
		this.baseUrl = baseUrl$2;
		this.clientId = clientId;
	}
	async get({ headers, signal, cache, ...args }) {
		return (await fetchData(this.createUrl(args), {
			method: "GET",
			headers,
			signal,
			cache
		})).json();
	}
	async getBlob({ headers, signal, ...args }) {
		return (await fetchData(this.createUrl(args), {
			method: "GET",
			headers,
			signal
		})).blob();
	}
	async post({ body, headers, signal, ...args }) {
		return (await fetchData(this.createUrl(args), {
			method: "POST",
			headers,
			body: body ? JSON.stringify(body) : void 0,
			signal
		})).json();
	}
	async put({ body, headers, signal, ...args }) {
		return (await fetchData(this.createUrl(args), {
			method: "PUT",
			headers,
			body: body ? JSON.stringify(body) : void 0,
			signal
		})).json();
	}
	async delete({ body, headers, signal, ...args }) {
		return (await fetchData(this.createUrl(args), {
			method: "DELETE",
			headers,
			body: body ? JSON.stringify(body) : void 0,
			signal
		})).json();
	}
	createUrl({ path, params }) {
		const url = new URL(path, this.baseUrl);
		if (params) Object.entries(params).forEach(([key, value]) => {
			if (value) url.searchParams.append(key, value);
		});
		if (this.clientId) url.searchParams.append("clientId", this.clientId);
		return url;
	}
	sendBeacon({ body, ...args }) {
		const url = this.createUrl(args);
		return navigator.sendBeacon(url.toString(), body ? JSON.stringify(body) : void 0);
	}
};
const OptionsUtil = {
	getFeatureValue(key, features) {
		const optionValue = features?.[key];
		if (optionValue === void 0) return ConstantsUtil$1.DEFAULT_FEATURES[key];
		return optionValue;
	},
	filterSocialsByPlatform(socials) {
		if (!socials || !socials.length) return socials;
		let filteredSocials = socials;
		if (CoreHelperUtil.isTelegram()) {
			if (CoreHelperUtil.isIos()) filteredSocials = filteredSocials.filter((s) => s !== "google");
			if (CoreHelperUtil.isMac()) filteredSocials = filteredSocials.filter((s) => s !== "x");
			if (CoreHelperUtil.isAndroid()) filteredSocials = filteredSocials.filter((s) => !["facebook", "x"].includes(s));
		}
		if (CoreHelperUtil.isMobile()) filteredSocials = filteredSocials.filter((s) => s !== "facebook");
		return filteredSocials;
	},
	isSocialsEnabled() {
		return Array.isArray(OptionsController.state.features?.socials) && OptionsController.state.features?.socials.length > 0 || Array.isArray(OptionsController.state.remoteFeatures?.socials) && OptionsController.state.remoteFeatures?.socials.length > 0;
	},
	isEmailEnabled() {
		return Boolean(OptionsController.state.features?.email || OptionsController.state.remoteFeatures?.email);
	}
};
var state$18 = proxy({
	features: ConstantsUtil$1.DEFAULT_FEATURES,
	projectId: "",
	sdkType: "appkit",
	sdkVersion: "html-wagmi-undefined",
	defaultAccountTypes: ConstantsUtil$1.DEFAULT_ACCOUNT_TYPES,
	enableNetworkSwitch: true,
	experimental_preferUniversalLinks: false,
	remoteFeatures: {},
	enableMobileFullScreen: false,
	coinbasePreference: "all"
});
const OptionsController = {
	state: state$18,
	subscribeKey(key, callback) {
		return subscribeKey(state$18, key, callback);
	},
	setOptions(options) {
		Object.assign(state$18, options);
	},
	setRemoteFeatures(remoteFeatures) {
		if (!remoteFeatures) return;
		state$18.remoteFeatures = {
			...state$18.remoteFeatures,
			...remoteFeatures
		};
		if (state$18.remoteFeatures?.socials) state$18.remoteFeatures.socials = OptionsUtil.filterSocialsByPlatform(state$18.remoteFeatures.socials);
		if (state$18.features?.pay) {
			state$18.remoteFeatures.email = false;
			state$18.remoteFeatures.socials = false;
		}
	},
	setFeatures(features) {
		if (!features) return;
		if (!state$18.features) state$18.features = ConstantsUtil$1.DEFAULT_FEATURES;
		state$18.features = {
			...state$18.features,
			...features
		};
		if (state$18.features?.pay && state$18.remoteFeatures) {
			state$18.remoteFeatures.email = false;
			state$18.remoteFeatures.socials = false;
		}
	},
	setProjectId(projectId) {
		state$18.projectId = projectId;
	},
	setCustomRpcUrls(customRpcUrls) {
		state$18.customRpcUrls = customRpcUrls;
	},
	setAllWallets(allWallets) {
		state$18.allWallets = allWallets;
	},
	setIncludeWalletIds(includeWalletIds) {
		state$18.includeWalletIds = includeWalletIds;
	},
	setExcludeWalletIds(excludeWalletIds) {
		state$18.excludeWalletIds = excludeWalletIds;
	},
	setFeaturedWalletIds(featuredWalletIds) {
		state$18.featuredWalletIds = featuredWalletIds;
	},
	setTokens(tokens) {
		state$18.tokens = tokens;
	},
	setTermsConditionsUrl(termsConditionsUrl) {
		state$18.termsConditionsUrl = termsConditionsUrl;
	},
	setPrivacyPolicyUrl(privacyPolicyUrl) {
		state$18.privacyPolicyUrl = privacyPolicyUrl;
	},
	setCustomWallets(customWallets) {
		state$18.customWallets = customWallets;
	},
	setIsSiweEnabled(isSiweEnabled) {
		state$18.isSiweEnabled = isSiweEnabled;
	},
	setIsUniversalProvider(isUniversalProvider) {
		state$18.isUniversalProvider = isUniversalProvider;
	},
	setSdkVersion(sdkVersion) {
		state$18.sdkVersion = sdkVersion;
	},
	setMetadata(metadata) {
		state$18.metadata = metadata;
	},
	setDisableAppend(disableAppend) {
		state$18.disableAppend = disableAppend;
	},
	setEIP6963Enabled(enableEIP6963) {
		state$18.enableEIP6963 = enableEIP6963;
	},
	setDebug(debug) {
		state$18.debug = debug;
	},
	setEnableWalletGuide(enableWalletGuide) {
		state$18.enableWalletGuide = enableWalletGuide;
	},
	setEnableAuthLogger(enableAuthLogger) {
		state$18.enableAuthLogger = enableAuthLogger;
	},
	setEnableWallets(enableWallets) {
		state$18.enableWallets = enableWallets;
	},
	setPreferUniversalLinks(preferUniversalLinks) {
		state$18.experimental_preferUniversalLinks = preferUniversalLinks;
	},
	setSIWX(siwx) {
		if (siwx) for (const [key, isVal] of Object.entries(ConstantsUtil$1.SIWX_DEFAULTS)) siwx[key] ??= isVal;
		state$18.siwx = siwx;
	},
	setConnectMethodsOrder(connectMethodsOrder) {
		state$18.features = {
			...state$18.features,
			connectMethodsOrder
		};
	},
	setWalletFeaturesOrder(walletFeaturesOrder) {
		state$18.features = {
			...state$18.features,
			walletFeaturesOrder
		};
	},
	setSocialsOrder(socialsOrder) {
		state$18.remoteFeatures = {
			...state$18.remoteFeatures,
			socials: socialsOrder
		};
	},
	setCollapseWallets(collapseWallets) {
		state$18.features = {
			...state$18.features,
			collapseWallets
		};
	},
	setEnableEmbedded(enableEmbedded) {
		state$18.enableEmbedded = enableEmbedded;
	},
	setAllowUnsupportedChain(allowUnsupportedChain) {
		state$18.allowUnsupportedChain = allowUnsupportedChain;
	},
	setManualWCControl(manualWCControl) {
		state$18.manualWCControl = manualWCControl;
	},
	setEnableNetworkSwitch(enableNetworkSwitch) {
		state$18.enableNetworkSwitch = enableNetworkSwitch;
	},
	setEnableMobileFullScreen(enableMobileFullScreen) {
		state$18.enableMobileFullScreen = CoreHelperUtil.isMobile() && enableMobileFullScreen;
	},
	setEnableReconnect(enableReconnect) {
		state$18.enableReconnect = enableReconnect;
	},
	setCoinbasePreference(coinbasePreference) {
		state$18.coinbasePreference = coinbasePreference;
	},
	setDefaultAccountTypes(defaultAccountType = {}) {
		Object.entries(defaultAccountType).forEach(([namespace, accountType]) => {
			if (accountType) state$18.defaultAccountTypes[namespace] = accountType;
		});
	},
	setUniversalProviderConfigOverride(universalProviderConfigOverride) {
		state$18.universalProviderConfigOverride = universalProviderConfigOverride;
	},
	getUniversalProviderConfigOverride() {
		return state$18.universalProviderConfigOverride;
	},
	getSnapshot() {
		return snapshot(state$18);
	}
};
var DEFAULT_STATE$1 = Object.freeze({
	enabled: true,
	events: []
});
var api$2 = new FetchUtil({
	baseUrl: CoreHelperUtil.getAnalyticsUrl(),
	clientId: null
});
var MAX_ERRORS_PER_MINUTE = 5;
var ONE_MINUTE_MS = 60 * 1e3;
var state$17 = proxy({ ...DEFAULT_STATE$1 });
const TelemetryController = {
	state: state$17,
	subscribeKey(key, callback) {
		return subscribeKey(state$17, key, callback);
	},
	async sendError(error, category) {
		if (!state$17.enabled) return;
		const now = Date.now();
		if (state$17.events.filter((event) => {
			return now - new Date(event.properties.timestamp || "").getTime() < ONE_MINUTE_MS;
		}).length >= MAX_ERRORS_PER_MINUTE) return;
		const errorEvent = {
			type: "error",
			event: category,
			properties: {
				errorType: error.name,
				errorMessage: error.message,
				stackTrace: error.stack,
				timestamp: (/* @__PURE__ */ new Date()).toISOString()
			}
		};
		state$17.events.push(errorEvent);
		try {
			if (typeof window === "undefined") return;
			const { projectId, sdkType, sdkVersion } = OptionsController.state;
			await api$2.post({
				path: "/e",
				params: {
					projectId,
					st: sdkType,
					sv: sdkVersion || "html-wagmi-4.2.2"
				},
				body: {
					eventId: CoreHelperUtil.getUUID(),
					url: window.location.href,
					domain: window.location.hostname,
					timestamp: (/* @__PURE__ */ new Date()).toISOString(),
					props: {
						type: "error",
						event: category,
						errorType: error.name,
						errorMessage: error.message,
						stackTrace: error.stack
					}
				}
			});
		} catch {}
	},
	enable() {
		state$17.enabled = true;
	},
	disable() {
		state$17.enabled = false;
	},
	clearEvents() {
		state$17.events = [];
	}
};
var AppKitError = class AppKitError extends Error {
	constructor(message, category, originalError) {
		super(message);
		this.originalName = "AppKitError";
		this.name = "AppKitError";
		this.category = category;
		this.originalError = originalError;
		if (originalError && originalError instanceof Error) this.originalName = originalError.name;
		Object.setPrototypeOf(this, AppKitError.prototype);
		let isStackConstructedFromOriginal = false;
		if (originalError instanceof Error && typeof originalError.stack === "string" && originalError.stack) {
			const originalErrorStack = originalError.stack;
			const firstNewlineIndex = originalErrorStack.indexOf("\n");
			if (firstNewlineIndex > -1) {
				const originalFrames = originalErrorStack.substring(firstNewlineIndex + 1);
				this.stack = `${this.name}: ${this.message}\n${originalFrames}`;
				isStackConstructedFromOriginal = true;
			}
		}
		if (!isStackConstructedFromOriginal) {
			if (Error.captureStackTrace) Error.captureStackTrace(this, AppKitError);
			else if (!this.stack) this.stack = `${this.name}: ${this.message}`;
		}
	}
};
function errorHandler(err, defaultCategory) {
	let errMessage = "";
	try {
		if (err instanceof Error) errMessage = err.message;
		else if (typeof err === "string") errMessage = err;
		else if (typeof err === "object" && err !== null) if (Object.keys(err).length === 0) errMessage = "Unknown error";
		else errMessage = err?.message || JSON.stringify(err);
		else errMessage = String(err);
	} catch (_error) {
		errMessage = "Unknown error";
		console.error("Error parsing error message", _error);
	}
	const error = err instanceof AppKitError ? err : new AppKitError(errMessage, defaultCategory, err);
	TelemetryController.sendError(error, error.category);
	throw error;
}
function withErrorBoundary(controller$10, defaultCategory = "INTERNAL_SDK_ERROR") {
	const newController = {};
	Object.keys(controller$10).forEach((key) => {
		const original = controller$10[key];
		if (typeof original === "function") {
			let wrapped = original;
			if (original.constructor.name === "AsyncFunction") wrapped = async (...args) => {
				try {
					return await original(...args);
				} catch (err) {
					return errorHandler(err, defaultCategory);
				}
			};
			else wrapped = (...args) => {
				try {
					return original(...args);
				} catch (err) {
					return errorHandler(err, defaultCategory);
				}
			};
			newController[key] = wrapped;
		} else newController[key] = original;
	});
	return newController;
}
var state$16 = proxy({
	walletImages: {},
	networkImages: {},
	chainImages: {},
	connectorImages: {},
	tokenImages: {},
	currencyImages: {}
});
const AssetController = withErrorBoundary({
	state: state$16,
	subscribeNetworkImages(callback) {
		return subscribe(state$16.networkImages, () => callback(state$16.networkImages));
	},
	subscribeKey(key, callback) {
		return subscribeKey(state$16, key, callback);
	},
	subscribe(callback) {
		return subscribe(state$16, () => callback(state$16));
	},
	setWalletImage(key, value) {
		state$16.walletImages[key] = value;
	},
	setNetworkImage(key, value) {
		state$16.networkImages[key] = value;
	},
	setChainImage(key, value) {
		state$16.chainImages[key] = value;
	},
	setConnectorImage(key, value) {
		state$16.connectorImages = {
			...state$16.connectorImages,
			[key]: value
		};
	},
	setTokenImage(key, value) {
		state$16.tokenImages[key] = value;
	},
	setCurrencyImage(key, value) {
		state$16.currencyImages[key] = value;
	}
});
var namespaceImageIds = {
	eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
	solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
	polkadot: "",
	bip122: "0b4838db-0161-4ffe-022d-532bf03dba00",
	cosmos: "",
	sui: "",
	stacks: "",
	ton: "20f673c0-095e-49b2-07cf-eb5049dcf600"
};
var state$15 = proxy({
	networkImagePromises: {},
	tokenImagePromises: {}
});
const AssetUtil = {
	async fetchWalletImage(imageId) {
		if (!imageId) return;
		await ApiController._fetchWalletImage(imageId);
		return this.getWalletImageById(imageId);
	},
	async fetchNetworkImage(imageId) {
		if (!imageId) return;
		const existingImage = this.getNetworkImageById(imageId);
		if (existingImage) return existingImage;
		if (!state$15.networkImagePromises[imageId]) state$15.networkImagePromises[imageId] = ApiController._fetchNetworkImage(imageId);
		await state$15.networkImagePromises[imageId];
		return this.getNetworkImageById(imageId);
	},
	async fetchTokenImage(imageId) {
		if (!imageId) return;
		if (!state$15.tokenImagePromises[imageId]) state$15.tokenImagePromises[imageId] = ApiController._fetchTokenImage(imageId);
		await state$15.tokenImagePromises[imageId];
		return this.getTokenImage(imageId);
	},
	getWalletImageById(imageId) {
		if (!imageId) return;
		return AssetController.state.walletImages[imageId];
	},
	getWalletImage(wallet) {
		if (wallet?.image_url) return wallet?.image_url;
		if (wallet?.image_id) return AssetController.state.walletImages[wallet.image_id];
	},
	getNetworkImage(network) {
		if (network?.assets?.imageUrl) return network?.assets?.imageUrl;
		if (network?.assets?.imageId) return AssetController.state.networkImages[network.assets.imageId];
	},
	getNetworkImageById(imageId) {
		if (!imageId) return;
		return AssetController.state.networkImages[imageId];
	},
	getConnectorImage(connector) {
		if (connector?.imageUrl) return connector.imageUrl;
		if (connector?.info?.icon) return connector.info.icon;
		if (connector?.imageId) return AssetController.state.connectorImages[connector.imageId];
	},
	getChainImage(chain) {
		return AssetController.state.networkImages[namespaceImageIds[chain]];
	},
	getTokenImage(symbol) {
		if (!symbol) return;
		return AssetController.state.tokenImages[symbol];
	},
	getWalletImageUrl(imageId) {
		if (!imageId) return "";
		const { projectId, sdkType, sdkVersion } = OptionsController.state;
		const url = new URL(`${ConstantsUtil.W3M_API_URL}/getWalletImage/${imageId}`);
		url.searchParams.set("projectId", projectId);
		url.searchParams.set("st", sdkType);
		url.searchParams.set("sv", sdkVersion);
		return url.toString();
	},
	getAssetImageUrl(imageId) {
		if (!imageId) return "";
		const { projectId, sdkType, sdkVersion } = OptionsController.state;
		const url = new URL(`${ConstantsUtil.W3M_API_URL}/public/getAssetImage/${imageId}`);
		url.searchParams.set("projectId", projectId);
		url.searchParams.set("st", sdkType);
		url.searchParams.set("sv", sdkVersion);
		return url.toString();
	},
	getChainNamespaceImageUrl(chainNamespace) {
		return this.getAssetImageUrl(namespaceImageIds[chainNamespace]);
	},
	async getImageByToken(token, namespace) {
		if (token === "native") {
			const imageId = ConstantsUtil.NATIVE_IMAGE_IDS_BY_NAMESPACE[namespace] ?? null;
			if (!imageId) return;
			return AssetUtil.fetchNetworkImage(imageId);
		}
		const [, symbol] = Object.entries(ConstantsUtil.TOKEN_SYMBOLS_BY_ADDRESS).find(([address]) => address.toLowerCase() === token.toLowerCase()) ?? [];
		if (!symbol) return;
		return AssetUtil.fetchTokenImage(symbol);
	}
};
typeof process !== "undefined" && {}["NEXT_PUBLIC_SECURE_SITE_SDK_URL"];
typeof process !== "undefined" && {}["NEXT_PUBLIC_DEFAULT_LOG_LEVEL"];
typeof process !== "undefined" && {}["NEXT_PUBLIC_SECURE_SITE_SDK_VERSION"];
const W3mFrameConstants = {
	APP_EVENT_KEY: "@w3m-app/",
	FRAME_EVENT_KEY: "@w3m-frame/",
	RPC_METHOD_KEY: "RPC_",
	STORAGE_KEY: "@appkit-wallet/",
	SESSION_TOKEN_KEY: "SESSION_TOKEN_KEY",
	EMAIL_LOGIN_USED_KEY: "EMAIL_LOGIN_USED_KEY",
	LAST_USED_CHAIN_KEY: "LAST_USED_CHAIN_KEY",
	LAST_EMAIL_LOGIN_TIME: "LAST_EMAIL_LOGIN_TIME",
	EMAIL: "EMAIL",
	PREFERRED_ACCOUNT_TYPE: "PREFERRED_ACCOUNT_TYPE",
	SMART_ACCOUNT_ENABLED: "SMART_ACCOUNT_ENABLED",
	SMART_ACCOUNT_ENABLED_NETWORKS: "SMART_ACCOUNT_ENABLED_NETWORKS",
	SOCIAL_USERNAME: "SOCIAL_USERNAME",
	APP_SWITCH_NETWORK: "@w3m-app/SWITCH_NETWORK",
	APP_CONNECT_EMAIL: "@w3m-app/CONNECT_EMAIL",
	APP_CONNECT_DEVICE: "@w3m-app/CONNECT_DEVICE",
	APP_CONNECT_OTP: "@w3m-app/CONNECT_OTP",
	APP_CONNECT_SOCIAL: "@w3m-app/CONNECT_SOCIAL",
	APP_GET_SOCIAL_REDIRECT_URI: "@w3m-app/GET_SOCIAL_REDIRECT_URI",
	APP_GET_USER: "@w3m-app/GET_USER",
	APP_SIGN_OUT: "@w3m-app/SIGN_OUT",
	APP_IS_CONNECTED: "@w3m-app/IS_CONNECTED",
	APP_GET_CHAIN_ID: "@w3m-app/GET_CHAIN_ID",
	APP_RPC_REQUEST: "@w3m-app/RPC_REQUEST",
	APP_UPDATE_EMAIL: "@w3m-app/UPDATE_EMAIL",
	APP_UPDATE_EMAIL_PRIMARY_OTP: "@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",
	APP_UPDATE_EMAIL_SECONDARY_OTP: "@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",
	APP_AWAIT_UPDATE_EMAIL: "@w3m-app/AWAIT_UPDATE_EMAIL",
	APP_SYNC_THEME: "@w3m-app/SYNC_THEME",
	APP_SYNC_DAPP_DATA: "@w3m-app/SYNC_DAPP_DATA",
	APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS: "@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",
	APP_INIT_SMART_ACCOUNT: "@w3m-app/INIT_SMART_ACCOUNT",
	APP_SET_PREFERRED_ACCOUNT: "@w3m-app/SET_PREFERRED_ACCOUNT",
	APP_CONNECT_FARCASTER: "@w3m-app/CONNECT_FARCASTER",
	APP_GET_FARCASTER_URI: "@w3m-app/GET_FARCASTER_URI",
	APP_RELOAD: "@w3m-app/RELOAD",
	APP_RPC_ABORT: "@w3m-app/RPC_ABORT",
	FRAME_SWITCH_NETWORK_ERROR: "@w3m-frame/SWITCH_NETWORK_ERROR",
	FRAME_SWITCH_NETWORK_SUCCESS: "@w3m-frame/SWITCH_NETWORK_SUCCESS",
	FRAME_CONNECT_EMAIL_ERROR: "@w3m-frame/CONNECT_EMAIL_ERROR",
	FRAME_CONNECT_EMAIL_SUCCESS: "@w3m-frame/CONNECT_EMAIL_SUCCESS",
	FRAME_CONNECT_DEVICE_ERROR: "@w3m-frame/CONNECT_DEVICE_ERROR",
	FRAME_CONNECT_DEVICE_SUCCESS: "@w3m-frame/CONNECT_DEVICE_SUCCESS",
	FRAME_CONNECT_OTP_SUCCESS: "@w3m-frame/CONNECT_OTP_SUCCESS",
	FRAME_CONNECT_OTP_ERROR: "@w3m-frame/CONNECT_OTP_ERROR",
	FRAME_CONNECT_SOCIAL_SUCCESS: "@w3m-frame/CONNECT_SOCIAL_SUCCESS",
	FRAME_CONNECT_SOCIAL_ERROR: "@w3m-frame/CONNECT_SOCIAL_ERROR",
	FRAME_CONNECT_FARCASTER_SUCCESS: "@w3m-frame/CONNECT_FARCASTER_SUCCESS",
	FRAME_CONNECT_FARCASTER_ERROR: "@w3m-frame/CONNECT_FARCASTER_ERROR",
	FRAME_GET_FARCASTER_URI_SUCCESS: "@w3m-frame/GET_FARCASTER_URI_SUCCESS",
	FRAME_GET_FARCASTER_URI_ERROR: "@w3m-frame/GET_FARCASTER_URI_ERROR",
	FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS: "@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",
	FRAME_GET_SOCIAL_REDIRECT_URI_ERROR: "@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",
	FRAME_GET_USER_SUCCESS: "@w3m-frame/GET_USER_SUCCESS",
	FRAME_GET_USER_ERROR: "@w3m-frame/GET_USER_ERROR",
	FRAME_SIGN_OUT_SUCCESS: "@w3m-frame/SIGN_OUT_SUCCESS",
	FRAME_SIGN_OUT_ERROR: "@w3m-frame/SIGN_OUT_ERROR",
	FRAME_IS_CONNECTED_SUCCESS: "@w3m-frame/IS_CONNECTED_SUCCESS",
	FRAME_IS_CONNECTED_ERROR: "@w3m-frame/IS_CONNECTED_ERROR",
	FRAME_GET_CHAIN_ID_SUCCESS: "@w3m-frame/GET_CHAIN_ID_SUCCESS",
	FRAME_GET_CHAIN_ID_ERROR: "@w3m-frame/GET_CHAIN_ID_ERROR",
	FRAME_RPC_REQUEST_SUCCESS: "@w3m-frame/RPC_REQUEST_SUCCESS",
	FRAME_RPC_REQUEST_ERROR: "@w3m-frame/RPC_REQUEST_ERROR",
	FRAME_SESSION_UPDATE: "@w3m-frame/SESSION_UPDATE",
	FRAME_UPDATE_EMAIL_SUCCESS: "@w3m-frame/UPDATE_EMAIL_SUCCESS",
	FRAME_UPDATE_EMAIL_ERROR: "@w3m-frame/UPDATE_EMAIL_ERROR",
	FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS: "@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",
	FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR: "@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",
	FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS: "@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",
	FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR: "@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",
	FRAME_SYNC_THEME_SUCCESS: "@w3m-frame/SYNC_THEME_SUCCESS",
	FRAME_SYNC_THEME_ERROR: "@w3m-frame/SYNC_THEME_ERROR",
	FRAME_SYNC_DAPP_DATA_SUCCESS: "@w3m-frame/SYNC_DAPP_DATA_SUCCESS",
	FRAME_SYNC_DAPP_DATA_ERROR: "@w3m-frame/SYNC_DAPP_DATA_ERROR",
	FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS: "@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",
	FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR: "@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",
	FRAME_INIT_SMART_ACCOUNT_SUCCESS: "@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",
	FRAME_INIT_SMART_ACCOUNT_ERROR: "@w3m-frame/INIT_SMART_ACCOUNT_ERROR",
	FRAME_SET_PREFERRED_ACCOUNT_SUCCESS: "@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",
	FRAME_SET_PREFERRED_ACCOUNT_ERROR: "@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",
	FRAME_READY: "@w3m-frame/READY",
	FRAME_RELOAD_SUCCESS: "@w3m-frame/RELOAD_SUCCESS",
	FRAME_RELOAD_ERROR: "@w3m-frame/RELOAD_ERROR",
	FRAME_RPC_ABORT_SUCCESS: "@w3m-frame/RPC_ABORT_SUCCESS",
	FRAME_RPC_ABORT_ERROR: "@w3m-frame/RPC_ABORT_ERROR",
	RPC_RESPONSE_TYPE_ERROR: "RPC_RESPONSE_ERROR",
	RPC_RESPONSE_TYPE_TX: "RPC_RESPONSE_TRANSACTION_HASH",
	RPC_RESPONSE_TYPE_OBJECT: "RPC_RESPONSE_OBJECT"
};
const W3mFrameRpcConstants = {
	SAFE_RPC_METHODS: [
		"eth_accounts",
		"eth_blockNumber",
		"eth_call",
		"eth_chainId",
		"eth_estimateGas",
		"eth_feeHistory",
		"eth_gasPrice",
		"eth_getAccount",
		"eth_getBalance",
		"eth_getBlockByHash",
		"eth_getBlockByNumber",
		"eth_getBlockReceipts",
		"eth_getBlockTransactionCountByHash",
		"eth_getBlockTransactionCountByNumber",
		"eth_getCode",
		"eth_getFilterChanges",
		"eth_getFilterLogs",
		"eth_getLogs",
		"eth_getProof",
		"eth_getStorageAt",
		"eth_getTransactionByBlockHashAndIndex",
		"eth_getTransactionByBlockNumberAndIndex",
		"eth_getTransactionByHash",
		"eth_getTransactionCount",
		"eth_getTransactionReceipt",
		"eth_getUncleCountByBlockHash",
		"eth_getUncleCountByBlockNumber",
		"eth_maxPriorityFeePerGas",
		"eth_newBlockFilter",
		"eth_newFilter",
		"eth_newPendingTransactionFilter",
		"eth_sendRawTransaction",
		"eth_syncing",
		"eth_uninstallFilter",
		"wallet_getCapabilities",
		"wallet_getCallsStatus",
		"eth_getUserOperationReceipt",
		"eth_estimateUserOperationGas",
		"eth_getUserOperationByHash",
		"eth_supportedEntryPoints",
		"wallet_getAssets"
	],
	NOT_SAFE_RPC_METHODS: [
		"personal_sign",
		"eth_signTypedData_v4",
		"eth_sendTransaction",
		"solana_signMessage",
		"solana_signTransaction",
		"solana_signAllTransactions",
		"solana_signAndSendTransaction",
		"wallet_sendCalls",
		"wallet_grantPermissions",
		"wallet_revokePermissions",
		"eth_sendUserOperation"
	],
	GET_CHAIN_ID: "eth_chainId",
	RPC_METHOD_NOT_ALLOWED_MESSAGE: "Requested RPC call is not allowed",
	RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: "Action not allowed",
	ACCOUNT_TYPES: {
		EOA: "eoa",
		SMART_ACCOUNT: "smartAccount"
	}
};
const RegexUtil = {
	address: /^0x(?:[A-Fa-f0-9]{40})$/u,
	transactionHash: /^0x(?:[A-Fa-f0-9]{64})$/u,
	signedMessage: /^0x(?:[a-fA-F0-9]{62,})$/u
};
const W3mFrameStorage = {
	set(key, value) {
		if (W3mFrameHelpers.isClient) localStorage.setItem(`${W3mFrameConstants.STORAGE_KEY}${key}`, value);
	},
	get(key) {
		if (W3mFrameHelpers.isClient) return localStorage.getItem(`${W3mFrameConstants.STORAGE_KEY}${key}`);
		return null;
	},
	delete(key, social) {
		if (W3mFrameHelpers.isClient) if (social) localStorage.removeItem(key);
		else localStorage.removeItem(`${W3mFrameConstants.STORAGE_KEY}${key}`);
	}
};
var EMAIL_MINIMUM_TIMEOUT = 30 * 1e3;
const W3mFrameHelpers = {
	checkIfAllowedToTriggerEmail() {
		const lastEmailLoginTime = W3mFrameStorage.get(W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);
		if (lastEmailLoginTime) {
			const difference = Date.now() - Number(lastEmailLoginTime);
			if (difference < EMAIL_MINIMUM_TIMEOUT) {
				const cooldownSec = Math.ceil((EMAIL_MINIMUM_TIMEOUT - difference) / 1e3);
				throw new Error(`Please try again after ${cooldownSec} seconds`);
			}
		}
	},
	getTimeToNextEmailLogin() {
		const lastEmailLoginTime = W3mFrameStorage.get(W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);
		if (lastEmailLoginTime) {
			const difference = Date.now() - Number(lastEmailLoginTime);
			if (difference < EMAIL_MINIMUM_TIMEOUT) return Math.ceil((EMAIL_MINIMUM_TIMEOUT - difference) / 1e3);
		}
		return 0;
	},
	checkIfRequestExists(request) {
		return W3mFrameRpcConstants.NOT_SAFE_RPC_METHODS.includes(request.method) || W3mFrameRpcConstants.SAFE_RPC_METHODS.includes(request.method);
	},
	getResponseType(response) {
		if (typeof response === "string" && (response?.match(RegexUtil.transactionHash) || response?.match(RegexUtil.signedMessage))) return W3mFrameConstants.RPC_RESPONSE_TYPE_TX;
		return W3mFrameConstants.RPC_RESPONSE_TYPE_OBJECT;
	},
	checkIfRequestIsSafe(request) {
		return W3mFrameRpcConstants.SAFE_RPC_METHODS.includes(request.method);
	},
	isClient: typeof window !== "undefined"
};
var DEFAULT_STATE = Object.freeze({
	message: "",
	variant: "success",
	svg: void 0,
	open: false,
	autoClose: true
});
var state$14 = proxy({ ...DEFAULT_STATE });
const SnackController = {
	state: state$14,
	subscribeKey(key, callback) {
		return subscribeKey(state$14, key, callback);
	},
	showLoading(message, options = {}) {
		this._showMessage({
			message,
			variant: "loading",
			...options
		});
	},
	showSuccess(message) {
		this._showMessage({
			message,
			variant: "success"
		});
	},
	showSvg(message, svg) {
		this._showMessage({
			message,
			svg
		});
	},
	showError(message) {
		const errorMessage = CoreHelperUtil.parseError(message);
		this._showMessage({
			message: errorMessage,
			variant: "error"
		});
	},
	hide() {
		state$14.message = DEFAULT_STATE.message;
		state$14.variant = DEFAULT_STATE.variant;
		state$14.svg = DEFAULT_STATE.svg;
		state$14.open = DEFAULT_STATE.open;
		state$14.autoClose = DEFAULT_STATE.autoClose;
	},
	_showMessage({ message, svg, variant = "success", autoClose = DEFAULT_STATE.autoClose }) {
		if (state$14.open) {
			state$14.open = false;
			setTimeout(() => {
				state$14.message = message;
				state$14.variant = variant;
				state$14.svg = svg;
				state$14.open = true;
				state$14.autoClose = autoClose;
			}, 150);
		} else {
			state$14.message = message;
			state$14.variant = variant;
			state$14.svg = svg;
			state$14.open = true;
			state$14.autoClose = autoClose;
		}
	}
};
var DEFAULT_OPTIONS = {
	purchaseCurrencies: [{
		id: "2b92315d-eab7-5bef-84fa-089a131333f5",
		name: "USD Coin",
		symbol: "USDC",
		networks: [{
			name: "ethereum-mainnet",
			display_name: "Ethereum",
			chain_id: "1",
			contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
		}, {
			name: "polygon-mainnet",
			display_name: "Polygon",
			chain_id: "137",
			contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
		}]
	}, {
		id: "2b92315d-eab7-5bef-84fa-089a131333f5",
		name: "Ether",
		symbol: "ETH",
		networks: [{
			name: "ethereum-mainnet",
			display_name: "Ethereum",
			chain_id: "1",
			contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
		}, {
			name: "polygon-mainnet",
			display_name: "Polygon",
			chain_id: "137",
			contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
		}]
	}],
	paymentCurrencies: [{
		id: "USD",
		payment_method_limits: [{
			id: "card",
			min: "10.00",
			max: "7500.00"
		}, {
			id: "ach_bank_account",
			min: "10.00",
			max: "25000.00"
		}]
	}, {
		id: "EUR",
		payment_method_limits: [{
			id: "card",
			min: "10.00",
			max: "7500.00"
		}, {
			id: "ach_bank_account",
			min: "10.00",
			max: "25000.00"
		}]
	}]
};
var baseUrl$1 = CoreHelperUtil.getBlockchainApiUrl();
var state$13 = proxy({
	clientId: null,
	api: new FetchUtil({
		baseUrl: baseUrl$1,
		clientId: null
	}),
	supportedChains: {
		http: [],
		ws: []
	}
});
const BlockchainApiController = {
	state: state$13,
	async get(request) {
		const { st, sv } = BlockchainApiController.getSdkProperties();
		const projectId = OptionsController.state.projectId;
		const params = {
			...request.params || {},
			st,
			sv,
			projectId
		};
		return state$13.api.get({
			...request,
			params
		});
	},
	getSdkProperties() {
		const { sdkType, sdkVersion } = OptionsController.state;
		return {
			st: sdkType || "unknown",
			sv: sdkVersion || "unknown"
		};
	},
	async isNetworkSupported(networkId) {
		if (!networkId) return false;
		try {
			if (!state$13.supportedChains.http.length) await BlockchainApiController.getSupportedNetworks();
		} catch (e) {
			return false;
		}
		return state$13.supportedChains.http.includes(networkId);
	},
	async getSupportedNetworks() {
		try {
			const supportedChains = await BlockchainApiController.get({ path: "v1/supported-chains" });
			state$13.supportedChains = supportedChains;
			return supportedChains;
		} catch {
			return state$13.supportedChains;
		}
	},
	async fetchIdentity({ address }) {
		const identityCache = StorageUtil.getIdentityFromCacheForAddress(address);
		if (identityCache) return identityCache;
		const result = await BlockchainApiController.get({
			path: `/v1/identity/${address}`,
			params: { sender: ChainController.state.activeCaipAddress ? CoreHelperUtil.getPlainAddress(ChainController.state.activeCaipAddress) : void 0 }
		});
		StorageUtil.updateIdentityCache({
			address,
			identity: result,
			timestamp: Date.now()
		});
		return result;
	},
	async fetchTransactions({ account, cursor, signal, cache, chainId }) {
		if (!await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId)) return {
			data: [],
			next: void 0
		};
		const transactionsCache = StorageUtil.getTransactionsCacheForAddress({
			address: account,
			chainId
		});
		if (transactionsCache) return transactionsCache;
		const result = await BlockchainApiController.get({
			path: `/v1/account/${account}/history`,
			params: {
				cursor,
				chainId
			},
			signal,
			cache
		});
		StorageUtil.updateTransactionsCache({
			address: account,
			chainId,
			timestamp: Date.now(),
			transactions: result
		});
		return result;
	},
	async fetchSwapQuote({ amount, userAddress, from, to, gasPrice }) {
		if (!await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId)) return { quotes: [] };
		return BlockchainApiController.get({
			path: `/v1/convert/quotes`,
			headers: { "Content-Type": "application/json" },
			params: {
				amount,
				userAddress,
				from,
				to,
				gasPrice
			}
		});
	},
	async fetchSwapTokens({ chainId }) {
		if (!await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId)) return { tokens: [] };
		return BlockchainApiController.get({
			path: `/v1/convert/tokens`,
			params: { chainId }
		});
	},
	async getAddressBalance({ caipNetworkId, address }) {
		return state$13.api.post({
			path: `/v1?chainId=${caipNetworkId}&projectId=${OptionsController.state.projectId}`,
			body: {
				id: "1",
				jsonrpc: "2.0",
				method: "getAddressBalance",
				params: { address }
			}
		}).then((result) => result.result);
	},
	async fetchTokenPrice({ addresses, caipNetworkId = ChainController.state.activeCaipNetwork?.caipNetworkId }) {
		if (!await BlockchainApiController.isNetworkSupported(caipNetworkId)) return { fungibles: [] };
		const tokenPriceCache = StorageUtil.getTokenPriceCacheForAddresses(addresses);
		if (tokenPriceCache) return tokenPriceCache;
		const result = await state$13.api.post({
			path: "/v1/fungible/price",
			body: {
				currency: "usd",
				addresses,
				projectId: OptionsController.state.projectId
			},
			headers: { "Content-Type": "application/json" }
		});
		StorageUtil.updateTokenPriceCache({
			addresses,
			timestamp: Date.now(),
			tokenPrice: result
		});
		return result;
	},
	async fetchSwapAllowance({ tokenAddress, userAddress }) {
		if (!await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId)) return { allowance: "0" };
		return BlockchainApiController.get({
			path: `/v1/convert/allowance`,
			params: {
				tokenAddress,
				userAddress
			},
			headers: { "Content-Type": "application/json" }
		});
	},
	async fetchGasPrice({ chainId }) {
		const { st, sv } = BlockchainApiController.getSdkProperties();
		if (!await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId)) throw new Error("Network not supported for Gas Price");
		return BlockchainApiController.get({
			path: `/v1/convert/gas-price`,
			headers: { "Content-Type": "application/json" },
			params: {
				chainId,
				st,
				sv
			}
		});
	},
	async generateSwapCalldata({ amount, from, to, userAddress, disableEstimate }) {
		if (!await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId)) throw new Error("Network not supported for Swaps");
		return state$13.api.post({
			path: "/v1/convert/build-transaction",
			headers: { "Content-Type": "application/json" },
			body: {
				amount,
				eip155: { slippage: ConstantsUtil$1.CONVERT_SLIPPAGE_TOLERANCE },
				projectId: OptionsController.state.projectId,
				from,
				to,
				userAddress,
				disableEstimate
			}
		});
	},
	async generateApproveCalldata({ from, to, userAddress }) {
		const { st, sv } = BlockchainApiController.getSdkProperties();
		if (!await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId)) throw new Error("Network not supported for Swaps");
		return BlockchainApiController.get({
			path: `/v1/convert/build-approve`,
			headers: { "Content-Type": "application/json" },
			params: {
				userAddress,
				from,
				to,
				st,
				sv
			}
		});
	},
	async getBalance(address, chainId, forceUpdate) {
		const { st, sv } = BlockchainApiController.getSdkProperties();
		if (!await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId)) {
			SnackController.showError("Token Balance Unavailable");
			return { balances: [] };
		}
		const caipAddress = `${chainId}:${address}`;
		const cachedBalance = StorageUtil.getBalanceCacheForCaipAddress(caipAddress);
		if (cachedBalance) return cachedBalance;
		const balance = await BlockchainApiController.get({
			path: `/v1/account/${address}/balance`,
			params: {
				currency: "usd",
				chainId,
				forceUpdate,
				st,
				sv
			}
		});
		StorageUtil.updateBalanceCache({
			caipAddress,
			balance,
			timestamp: Date.now()
		});
		return balance;
	},
	async lookupEnsName(name) {
		if (!await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId)) return {
			addresses: {},
			attributes: []
		};
		return BlockchainApiController.get({
			path: `/v1/profile/account/${name}`,
			params: { apiVersion: "2" }
		});
	},
	async reverseLookupEnsName({ address }) {
		if (!await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId)) return [];
		const sender = ChainController.getAccountData()?.address;
		return BlockchainApiController.get({
			path: `/v1/profile/reverse/${address}`,
			params: {
				sender,
				apiVersion: "2"
			}
		});
	},
	async getEnsNameSuggestions(name) {
		if (!await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId)) return { suggestions: [] };
		return BlockchainApiController.get({
			path: `/v1/profile/suggestions/${name}`,
			params: { zone: "reown.id" }
		});
	},
	async registerEnsName({ coinType, address, message, signature }) {
		if (!await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId)) return { success: false };
		return state$13.api.post({
			path: `/v1/profile/account`,
			body: {
				coin_type: coinType,
				address,
				message,
				signature
			},
			headers: { "Content-Type": "application/json" }
		});
	},
	async generateOnRampURL({ destinationWallets, partnerUserId, defaultNetwork, purchaseAmount, paymentAmount }) {
		if (!await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId)) return "";
		return (await state$13.api.post({
			path: `/v1/generators/onrampurl`,
			params: { projectId: OptionsController.state.projectId },
			body: {
				destinationWallets,
				defaultNetwork,
				partnerUserId,
				defaultExperience: "buy",
				presetCryptoAmount: purchaseAmount,
				presetFiatAmount: paymentAmount
			}
		})).url;
	},
	async getOnrampOptions() {
		if (!await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId)) return {
			paymentCurrencies: [],
			purchaseCurrencies: []
		};
		try {
			return await BlockchainApiController.get({ path: `/v1/onramp/options` });
		} catch (e) {
			return DEFAULT_OPTIONS;
		}
	},
	async getOnrampQuote({ purchaseCurrency, paymentCurrency, amount, network }) {
		try {
			if (!await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId)) return null;
			return await state$13.api.post({
				path: `/v1/onramp/quote`,
				params: { projectId: OptionsController.state.projectId },
				body: {
					purchaseCurrency,
					paymentCurrency,
					amount,
					network
				}
			});
		} catch (e) {
			return {
				networkFee: {
					amount,
					currency: paymentCurrency.id
				},
				paymentSubtotal: {
					amount,
					currency: paymentCurrency.id
				},
				paymentTotal: {
					amount,
					currency: paymentCurrency.id
				},
				purchaseAmount: {
					amount,
					currency: paymentCurrency.id
				},
				quoteId: "mocked-quote-id"
			};
		}
	},
	async getSmartSessions(caipAddress) {
		if (!await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId)) return [];
		return BlockchainApiController.get({ path: `/v1/sessions/${caipAddress}` });
	},
	async revokeSmartSession(address, pci, signature) {
		if (!await BlockchainApiController.isNetworkSupported(ChainController.state.activeCaipNetwork?.caipNetworkId)) return { success: false };
		return state$13.api.post({
			path: `/v1/sessions/${address}/revoke`,
			params: { projectId: OptionsController.state.projectId },
			body: {
				pci,
				signature
			}
		});
	},
	setClientId(clientId) {
		state$13.clientId = clientId;
		state$13.api = new FetchUtil({
			baseUrl: baseUrl$1,
			clientId
		});
	}
};
const WalletUtil = {
	filterOutDuplicatesByRDNS(wallets) {
		const connectors = OptionsController.state.enableEIP6963 ? ConnectorController.state.connectors : [];
		const recent = StorageUtil.getRecentWallets();
		const connectorRDNSs = connectors.map((connector) => connector.info?.rdns).filter(Boolean);
		const recentRDNSs = recent.map((wallet) => wallet.rdns).filter(Boolean);
		const allRDNSs = connectorRDNSs.concat(recentRDNSs);
		if (allRDNSs.includes("io.metamask.mobile") && CoreHelperUtil.isMobile()) {
			const index = allRDNSs.indexOf("io.metamask.mobile");
			allRDNSs[index] = "io.metamask";
		}
		return wallets.filter((wallet) => {
			if (wallet?.rdns && allRDNSs.includes(String(wallet.rdns))) return false;
			if (!wallet?.rdns) {
				if (connectors.some((connector) => connector.name === wallet.name)) return false;
			}
			return true;
		});
	},
	filterOutDuplicatesByIds(wallets) {
		const connectors = ConnectorController.state.connectors.filter((connector) => connector.type === "ANNOUNCED" || connector.type === "INJECTED" || connector.type === "MULTI_CHAIN");
		const recent = StorageUtil.getRecentWallets();
		const connectorIds = connectors.map((connector) => connector.explorerId || connector.explorerWallet?.id || connector.id);
		const recentIds = recent.map((wallet) => wallet.id);
		const allIds = connectorIds.concat(recentIds);
		return wallets.filter((wallet) => !allIds.includes(wallet?.id));
	},
	filterOutDuplicateWallets(wallets) {
		const uniqueByRDNS = this.filterOutDuplicatesByRDNS(wallets);
		return this.filterOutDuplicatesByIds(uniqueByRDNS);
	},
	markWalletsAsInstalled(wallets) {
		const { connectors } = ConnectorController.state;
		const { featuredWalletIds } = OptionsController.state;
		const installedWalletRdnsMap = connectors.filter((connector) => connector.type === "ANNOUNCED").reduce((rdnsMap, connector) => {
			if (!connector.info?.rdns) return rdnsMap;
			rdnsMap[connector.info.rdns] = true;
			return rdnsMap;
		}, {});
		return wallets.map((wallet) => ({
			...wallet,
			installed: Boolean(wallet.rdns) && Boolean(installedWalletRdnsMap[wallet.rdns ?? ""])
		})).sort((walletA, walletB) => {
			const installationComparison = Number(walletB.installed) - Number(walletA.installed);
			if (installationComparison !== 0) return installationComparison;
			if (featuredWalletIds?.length) {
				const walletAFeaturedIndex = featuredWalletIds.indexOf(walletA.id);
				const walletBFeaturedIndex = featuredWalletIds.indexOf(walletB.id);
				if (walletAFeaturedIndex !== -1 && walletBFeaturedIndex !== -1) return walletAFeaturedIndex - walletBFeaturedIndex;
				if (walletAFeaturedIndex !== -1) return -1;
				if (walletBFeaturedIndex !== -1) return 1;
			}
			return 0;
		});
	},
	getConnectOrderMethod(_features, _connectors) {
		const connectMethodOrder = _features?.connectMethodsOrder || OptionsController.state.features?.connectMethodsOrder;
		const connectors = _connectors || ConnectorController.state.connectors;
		if (connectMethodOrder) return connectMethodOrder;
		const { injected, announced } = ConnectorUtil.getConnectorsByType(connectors, ApiController.state.recommended, ApiController.state.featured);
		const shownInjected = injected.filter(ConnectorUtil.showConnector);
		const shownAnnounced = announced.filter(ConnectorUtil.showConnector);
		if (shownInjected.length || shownAnnounced.length) return [
			"wallet",
			"email",
			"social"
		];
		return ConstantsUtil$1.DEFAULT_CONNECT_METHOD_ORDER;
	},
	isExcluded(wallet) {
		const isRDNSExcluded = Boolean(wallet.rdns) && ApiController.state.excludedWallets.some((w) => w.rdns === wallet.rdns);
		const isNameExcluded = Boolean(wallet.name) && ApiController.state.excludedWallets.some((w) => HelpersUtil.isLowerCaseMatch(w.name, wallet.name));
		return isRDNSExcluded || isNameExcluded;
	},
	markWalletsWithDisplayIndex(wallets) {
		return wallets.map((w, index) => ({
			...w,
			display_index: index
		}));
	},
	filterWalletsByWcSupport(wallets) {
		if (ConnectionController.state.wcBasic) return wallets.filter((wallet) => wallet.supports_wc);
		if (CoreHelperUtil.isMobile()) return wallets.filter((wallet) => wallet.supports_wc || ConstantsUtil$1.MANDATORY_WALLET_IDS_ON_MOBILE.includes(wallet.id));
		return wallets;
	},
	getWalletConnectWallets(allWallets) {
		const wallets = [...ApiController.state.featured, ...ApiController.state.recommended];
		if (ApiController.state.filteredWallets?.length > 0) wallets.push(...ApiController.state.filteredWallets);
		else wallets.push(...allWallets);
		const uniqueWallets = CoreHelperUtil.uniqueBy(wallets, "id");
		const walletsWithInstalled = WalletUtil.markWalletsAsInstalled(uniqueWallets);
		const walletsByWcSupport = WalletUtil.filterWalletsByWcSupport(walletsWithInstalled);
		return WalletUtil.markWalletsWithDisplayIndex(walletsByWcSupport);
	}
};
const ConnectorUtil = {
	getConnectorsByType(connectors, recommended, featured) {
		const { customWallets } = OptionsController.state;
		const recent = StorageUtil.getRecentWallets();
		const filteredRecommended = WalletUtil.filterOutDuplicateWallets(recommended);
		const filteredFeatured = WalletUtil.filterOutDuplicateWallets(featured);
		const multiChain = connectors.filter((connector) => connector.type === "MULTI_CHAIN");
		const announced = connectors.filter((connector) => connector.type === "ANNOUNCED");
		const injected = connectors.filter((connector) => connector.type === "INJECTED");
		return {
			custom: customWallets,
			recent,
			external: connectors.filter((connector) => connector.type === "EXTERNAL"),
			multiChain,
			announced,
			injected,
			recommended: filteredRecommended,
			featured: filteredFeatured
		};
	},
	showConnector(connector) {
		const rdns = connector.info?.rdns;
		const isRDNSExcluded = Boolean(rdns) && ApiController.state.excludedWallets.some((wallet) => Boolean(wallet.rdns) && wallet.rdns === rdns);
		const isNameExcluded = Boolean(connector.name) && ApiController.state.excludedWallets.some((wallet) => HelpersUtil.isLowerCaseMatch(wallet.name, connector.name));
		if (connector.type === "INJECTED") {
			if (connector.name === "Browser Wallet") {
				if (!CoreHelperUtil.isMobile()) return false;
				if (CoreHelperUtil.isMobile() && !rdns && !ConnectionController.checkInstalled()) return false;
			}
			if (isRDNSExcluded || isNameExcluded) return false;
		}
		if ((connector.type === "ANNOUNCED" || connector.type === "EXTERNAL") && (isRDNSExcluded || isNameExcluded)) return false;
		return true;
	},
	getIsConnectedWithWC() {
		return Array.from(ChainController.state.chains.values()).some((chain) => {
			return ConnectorController.getConnectorId(chain.namespace) === ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT;
		});
	},
	getConnectorTypeOrder({ recommended, featured, custom, recent, announced, injected, multiChain, external, overriddenConnectors = OptionsController.state.features?.connectorTypeOrder ?? [] }) {
		const enabledConnectors = [
			{
				type: "walletConnect",
				isEnabled: true
			},
			{
				type: "recent",
				isEnabled: recent.length > 0
			},
			{
				type: "injected",
				isEnabled: [
					...injected,
					...announced,
					...multiChain
				].length > 0
			},
			{
				type: "featured",
				isEnabled: featured.length > 0
			},
			{
				type: "custom",
				isEnabled: custom && custom.length > 0
			},
			{
				type: "external",
				isEnabled: external.length > 0
			},
			{
				type: "recommended",
				isEnabled: recommended.length > 0
			}
		].filter((option) => option.isEnabled);
		const enabledConnectorTypes = new Set(enabledConnectors.map((option) => option.type));
		const prioritizedConnectors = overriddenConnectors.filter((type) => enabledConnectorTypes.has(type)).map((type) => ({
			type,
			isEnabled: true
		}));
		const remainingConnectors = enabledConnectors.filter(({ type: enabledConnectorType }) => {
			return !prioritizedConnectors.some(({ type: prioritizedConnectorType }) => prioritizedConnectorType === enabledConnectorType);
		});
		return Array.from(new Set([...prioritizedConnectors, ...remainingConnectors].map(({ type }) => type)));
	},
	sortConnectorsByExplorerWallet(connectors) {
		return [...connectors].sort((a, b) => {
			if (a.explorerWallet && b.explorerWallet) return (a.explorerWallet.order ?? 0) - (b.explorerWallet.order ?? 0);
			if (a.explorerWallet) return -1;
			if (b.explorerWallet) return 1;
			return 0;
		});
	},
	getPriority(connector) {
		if (connector.id === ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT) return 0;
		if (connector.id === ConstantsUtil.CONNECTOR_ID.COINBASE || connector.id === ConstantsUtil.CONNECTOR_ID.COINBASE_SDK) return 1;
		return 2;
	},
	sortConnectorsByPriority(connectors) {
		return [...connectors].sort((a, b) => ConnectorUtil.getPriority(a) - ConnectorUtil.getPriority(b));
	},
	getAuthName({ email, socialUsername, socialProvider }) {
		if (socialUsername) {
			if (socialProvider && socialProvider === "discord" && socialUsername.endsWith("0")) return socialUsername.slice(0, -1);
			return socialUsername;
		}
		return email.length > 30 ? `${email.slice(0, -3)}...` : email;
	},
	async fetchProviderData(connector) {
		try {
			if (connector.name === "Browser Wallet" && !CoreHelperUtil.isMobile()) return {
				accounts: [],
				chainId: void 0
			};
			if (connector.id === ConstantsUtil.CONNECTOR_ID.AUTH) return {
				accounts: [],
				chainId: void 0
			};
			const [accounts, chainId] = await Promise.all([connector.provider?.request({ method: "eth_accounts" }), connector.provider?.request({ method: "eth_chainId" }).then((hexChainId) => Number(hexChainId))]);
			return {
				accounts,
				chainId
			};
		} catch (err) {
			console.warn(`Failed to fetch provider data for ${connector.name}`, err);
			return {
				accounts: [],
				chainId: void 0
			};
		}
	},
	getFilteredCustomWallets(wallets) {
		const recent = StorageUtil.getRecentWallets();
		const connectorRDNSs = ConnectorController.state.connectors.map((connector) => connector.info?.rdns).filter(Boolean);
		const recentRDNSs = recent.map((wallet) => wallet.rdns).filter(Boolean);
		const allRDNSs = connectorRDNSs.concat(recentRDNSs);
		if (allRDNSs.includes("io.metamask.mobile") && CoreHelperUtil.isMobile()) {
			const index = allRDNSs.indexOf("io.metamask.mobile");
			allRDNSs[index] = "io.metamask";
		}
		return wallets.filter((wallet) => !allRDNSs.includes(String(wallet?.rdns)));
	},
	hasWalletConnector(wallet) {
		return ConnectorController.state.connectors.some((connector) => connector.id === wallet.id || connector.name === wallet.name);
	},
	isWalletCompatibleWithCurrentChain(wallet) {
		const currentNamespace = ChainController.state.activeChain;
		if (currentNamespace && wallet.chains) return wallet.chains.some((c) => {
			return currentNamespace === c.split(":")[0];
		});
		return true;
	},
	getFilteredRecentWallets() {
		return StorageUtil.getRecentWallets().filter((wallet) => !WalletUtil.isExcluded(wallet)).filter((wallet) => !this.hasWalletConnector(wallet)).filter((wallet) => this.isWalletCompatibleWithCurrentChain(wallet));
	},
	getCappedRecommendedWallets(wallets) {
		const { connectors } = ConnectorController.state;
		const { customWallets, featuredWalletIds } = OptionsController.state;
		const wcConnector = connectors.find((c) => c.id === "walletConnect");
		const injectedConnectors = connectors.filter((c) => c.type === "INJECTED" || c.type === "ANNOUNCED" || c.type === "MULTI_CHAIN");
		if (!wcConnector && !injectedConnectors.length && !customWallets?.length) return [];
		const isEmailEnabled = OptionsUtil.isEmailEnabled();
		const isSocialsEnabled = OptionsUtil.isSocialsEnabled();
		const injectedWallets = injectedConnectors.filter((i) => i.name !== "Browser Wallet" && i.name !== "WalletConnect");
		const featuredWalletAmount = featuredWalletIds?.length || 0;
		const customWalletAmount = customWallets?.length || 0;
		const injectedWalletAmount = injectedWallets.length || 0;
		const emailWalletAmount = isEmailEnabled ? 1 : 0;
		const socialWalletAmount = isSocialsEnabled ? 1 : 0;
		const walletsDisplayed = featuredWalletAmount + customWalletAmount + injectedWalletAmount + emailWalletAmount + socialWalletAmount;
		const sliceAmount = Math.max(0, 4 - walletsDisplayed);
		if (sliceAmount <= 0) return [];
		return WalletUtil.filterOutDuplicateWallets(wallets).slice(0, sliceAmount);
	},
	processConnectorsByType(connectors, shouldFilter = true) {
		const sorted = ConnectorUtil.sortConnectorsByExplorerWallet([...connectors]);
		return shouldFilter ? sorted.filter(ConnectorUtil.showConnector) : sorted;
	},
	connectorList() {
		const byType = ConnectorUtil.getConnectorsByType(ConnectorController.state.connectors, ApiController.state.recommended, ApiController.state.featured);
		const announced = this.processConnectorsByType(byType.announced.filter((c) => c.id !== "walletConnect"));
		const injected = this.processConnectorsByType(byType.injected);
		const multiChain = this.processConnectorsByType(byType.multiChain.filter((c) => c.name !== "WalletConnect"), false);
		const custom = byType.custom;
		const recent = byType.recent;
		const external = this.processConnectorsByType(byType.external.filter((c) => c.id !== ConstantsUtil.CONNECTOR_ID.COINBASE_SDK && c.id !== ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT));
		const recommended = byType.recommended;
		const featured = byType.featured;
		const connectorTypeOrder = ConnectorUtil.getConnectorTypeOrder({
			custom,
			recent,
			announced,
			injected,
			multiChain,
			recommended,
			featured,
			external
		});
		const wcConnector = ConnectorController.state.connectors.find((c) => c.id === "walletConnect");
		const isMobile = CoreHelperUtil.isMobile();
		const items = [];
		for (const type of connectorTypeOrder) switch (type) {
			case "walletConnect":
				if (!isMobile && wcConnector) items.push({
					kind: "connector",
					subtype: "walletConnect",
					connector: wcConnector
				});
				break;
			case "recent":
				ConnectorUtil.getFilteredRecentWallets().forEach((w) => items.push({
					kind: "wallet",
					subtype: "recent",
					wallet: w
				}));
				break;
			case "injected":
				multiChain.forEach((c) => items.push({
					kind: "connector",
					subtype: "multiChain",
					connector: c
				}));
				announced.forEach((c) => items.push({
					kind: "connector",
					subtype: "announced",
					connector: c
				}));
				injected.forEach((c) => items.push({
					kind: "connector",
					subtype: "injected",
					connector: c
				}));
				break;
			case "featured":
				featured.forEach((w) => items.push({
					kind: "wallet",
					subtype: "featured",
					wallet: w
				}));
				break;
			case "custom":
				ConnectorUtil.getFilteredCustomWallets(custom ?? []).forEach((w) => items.push({
					kind: "wallet",
					subtype: "custom",
					wallet: w
				}));
				break;
			case "external":
				external.forEach((c) => items.push({
					kind: "connector",
					subtype: "external",
					connector: c
				}));
				break;
			case "recommended":
				ConnectorUtil.getCappedRecommendedWallets(recommended).forEach((w) => items.push({
					kind: "wallet",
					subtype: "recommended",
					wallet: w
				}));
				break;
			default: console.warn(`Unknown connector type: ${type}`);
		}
		return items;
	},
	hasInjectedConnectors() {
		return ConnectorController.state.connectors.filter((c) => (c.type === "INJECTED" || c.type === "ANNOUNCED" || c.type === "MULTI_CHAIN") && c.name !== "Browser Wallet" && c.name !== "WalletConnect").length;
	}
};
var RESTRICTED_VIEWS_BASED_ON_USAGE = [
	"ConnectingExternal",
	"ConnectingMultiChain",
	"ConnectingSocial",
	"ConnectingFarcaster"
];
var state$12 = proxy({
	view: "Connect",
	history: ["Connect"],
	transactionStack: []
});
const RouterController = withErrorBoundary({
	state: state$12,
	subscribeKey(key, callback) {
		return subscribeKey(state$12, key, callback);
	},
	pushTransactionStack(action) {
		state$12.transactionStack.push(action);
	},
	popTransactionStack(status) {
		const action = state$12.transactionStack.pop();
		if (!action) return;
		const { onSuccess, onError, onCancel } = action;
		switch (status) {
			case "success":
				onSuccess?.();
				break;
			case "error":
				onError?.();
				RouterController.goBack();
				break;
			case "cancel":
				onCancel?.();
				RouterController.goBack();
				break;
			default:
		}
	},
	push(view, data) {
		let finalView = view;
		let finalData = data;
		if (ApiController.state.plan.hasExceededUsageLimit && RESTRICTED_VIEWS_BASED_ON_USAGE.includes(view)) {
			finalView = "UsageExceeded";
			finalData = void 0;
		}
		if (finalView !== state$12.view) {
			state$12.view = finalView;
			state$12.history.push(finalView);
			state$12.data = finalData;
		}
	},
	reset(view, data) {
		state$12.view = view;
		state$12.history = [view];
		state$12.data = data;
	},
	replace(view, data) {
		if (!(state$12.history.at(-1) === view)) {
			state$12.view = view;
			state$12.history[state$12.history.length - 1] = view;
			state$12.data = data;
		}
	},
	goBack() {
		const isConnected = ChainController.state.activeCaipAddress;
		const isFarcasterView = RouterController.state.view === "ConnectingFarcaster";
		const shouldReload = !isConnected && isFarcasterView;
		if (state$12.history.length > 1) {
			state$12.history.pop();
			const [last] = state$12.history.slice(-1);
			if (last) if (isConnected && last === "Connect") state$12.view = "Account";
			else state$12.view = last;
		} else ModalController.close();
		if (state$12.data?.wallet) state$12.data.wallet = void 0;
		if (state$12.data?.redirectView) state$12.data.redirectView = void 0;
		setTimeout(() => {
			if (shouldReload) {
				ChainController.setAccountProp("farcasterUrl", void 0, ChainController.state.activeChain);
				const authConnector = ConnectorController.getAuthConnector();
				authConnector?.provider?.reload();
				const optionsState = snapshot(OptionsController.state);
				authConnector?.provider?.syncDappData?.({
					metadata: optionsState.metadata,
					sdkVersion: optionsState.sdkVersion,
					projectId: optionsState.projectId,
					sdkType: optionsState.sdkType
				});
			}
		}, 100);
	},
	goBackToIndex(historyIndex) {
		if (state$12.history.length > 1) {
			state$12.history = state$12.history.slice(0, historyIndex + 1);
			const [last] = state$12.history.slice(-1);
			if (last) state$12.view = last;
		}
	},
	goBackOrCloseModal() {
		if (RouterController.state.history.length > 1) RouterController.goBack();
		else ModalController.close();
	}
});
const NetworkUtil$1 = { onSwitchNetwork({ network, ignoreSwitchConfirmation = false }) {
	const currentNetwork = ChainController.state.activeCaipNetwork;
	const currentNamespace = ChainController.state.activeChain;
	const routerData = RouterController.state.data;
	if (network.id === currentNetwork?.id) return;
	const isCurrentNamespaceConnected = Boolean(ChainController.getAccountData(currentNamespace)?.address);
	const isNextNamespaceConnected = Boolean(ChainController.getAccountData(network.chainNamespace)?.address);
	const isDifferentNamespace = network.chainNamespace !== currentNamespace;
	const isConnectedWithAuth = ConnectorController.getConnectorId(currentNamespace) === ConstantsUtil.CONNECTOR_ID.AUTH;
	const isSupportedForAuthConnector = ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((c) => c === network.chainNamespace);
	if (ignoreSwitchConfirmation || isConnectedWithAuth && isSupportedForAuthConnector) RouterController.push("SwitchNetwork", {
		...routerData,
		network
	});
	else if (isCurrentNamespaceConnected && isDifferentNamespace && !isNextNamespaceConnected) RouterController.push("SwitchActiveChain", {
		switchToChain: network.chainNamespace,
		navigateTo: "Connect",
		navigateWithReplace: true,
		network
	});
	else RouterController.push("SwitchNetwork", {
		...routerData,
		network
	});
} };
var api$1 = new FetchUtil({
	baseUrl: CoreHelperUtil.getAnalyticsUrl(),
	clientId: null
});
var excluded = ["MODAL_CREATED"];
var MAX_PENDING_EVENTS_KB = 45;
var FLUSH_EVENTS_INTERVAL_MS = 1e3 * 10;
var state$11 = proxy({
	timestamp: Date.now(),
	lastFlush: Date.now(),
	reportedErrors: {},
	data: {
		type: "track",
		event: "MODAL_CREATED"
	},
	pendingEvents: [],
	subscribedToVisibilityChange: false,
	walletImpressions: []
});
const EventsController = {
	state: state$11,
	subscribe(callback) {
		return subscribe(state$11, () => callback(state$11));
	},
	getSdkProperties() {
		const { projectId, sdkType, sdkVersion } = OptionsController.state;
		return {
			projectId,
			st: sdkType,
			sv: sdkVersion || "html-wagmi-4.2.2"
		};
	},
	shouldFlushEvents() {
		const isOverMaxSize = JSON.stringify(state$11.pendingEvents).length / 1024 > MAX_PENDING_EVENTS_KB;
		const isExpired = state$11.lastFlush + FLUSH_EVENTS_INTERVAL_MS < Date.now();
		return isOverMaxSize || isExpired;
	},
	_setPendingEvent(payload) {
		try {
			let address = ChainController.getAccountData()?.address;
			if ("address" in payload.data && payload.data.address) address = payload.data.address;
			if (excluded.includes(payload.data.event) || typeof window === "undefined") return;
			const caipNetworkId = ChainController.getActiveCaipNetwork()?.caipNetworkId;
			this.state.pendingEvents.push({
				eventId: CoreHelperUtil.getUUID(),
				url: window.location.href,
				domain: window.location.hostname,
				timestamp: payload.timestamp,
				props: {
					...payload.data,
					address,
					properties: {
						..."properties" in payload.data ? payload.data.properties : {},
						caipNetworkId
					}
				}
			});
			state$11.reportedErrors["FORBIDDEN"] = false;
			if (EventsController.shouldFlushEvents()) EventsController._submitPendingEvents();
		} catch (err) {
			console.warn("_setPendingEvent", err);
		}
	},
	sendEvent(data) {
		state$11.timestamp = Date.now();
		state$11.data = data;
		if (OptionsController.state.features?.analytics || [
			"INITIALIZE",
			"CONNECT_SUCCESS",
			"SOCIAL_LOGIN_SUCCESS"
		].includes(data.event)) EventsController._setPendingEvent(state$11);
		this.subscribeToFlushTriggers();
	},
	sendWalletImpressionEvent(item) {
		state$11.walletImpressions.push(item);
	},
	_transformPendingEventsForBatch(events) {
		try {
			return events.filter((evt) => {
				return evt.props.event !== "WALLET_IMPRESSION_V2";
			});
		} catch {
			return events;
		}
	},
	_submitPendingEvents() {
		state$11.lastFlush = Date.now();
		if (state$11.pendingEvents.length === 0 && state$11.walletImpressions.length === 0) return;
		try {
			const batch = EventsController._transformPendingEventsForBatch(state$11.pendingEvents);
			if (state$11.walletImpressions.length) batch.push({
				eventId: CoreHelperUtil.getUUID(),
				url: window.location.href,
				domain: window.location.hostname,
				timestamp: Date.now(),
				props: {
					type: "track",
					event: "WALLET_IMPRESSION_V2",
					items: [...state$11.walletImpressions]
				}
			});
			api$1.sendBeacon({
				path: "/batch",
				params: EventsController.getSdkProperties(),
				body: batch
			});
			state$11.reportedErrors["FORBIDDEN"] = false;
			state$11.pendingEvents = [];
			state$11.walletImpressions = [];
		} catch (err) {
			state$11.reportedErrors["FORBIDDEN"] = true;
		}
	},
	subscribeToFlushTriggers() {
		if (state$11.subscribedToVisibilityChange) return;
		if (typeof document === "undefined") return;
		state$11.subscribedToVisibilityChange = true;
		document?.addEventListener?.("visibilitychange", () => {
			if (document.visibilityState === "hidden") EventsController._submitPendingEvents();
		});
		document?.addEventListener?.("freeze", () => {
			EventsController._submitPendingEvents();
		});
		window?.addEventListener?.("pagehide", () => {
			EventsController._submitPendingEvents();
		});
		setInterval(() => {
			EventsController._submitPendingEvents();
		}, FLUSH_EVENTS_INTERVAL_MS);
	}
};
var state$10 = proxy({
	loading: false,
	open: false,
	selectedNetworkId: void 0,
	activeChain: void 0,
	initialized: false,
	connectingWallet: void 0
});
const PublicStateController = {
	state: state$10,
	subscribe(callback) {
		return subscribe(state$10, () => callback(state$10));
	},
	subscribeOpen(callback) {
		return subscribeKey(state$10, "open", callback);
	},
	set(newState) {
		Object.assign(state$10, {
			...state$10,
			...newState
		});
	}
};
var state$9 = proxy({
	loading: false,
	loadingNamespaceMap: /* @__PURE__ */ new Map(),
	open: false,
	shake: false,
	namespace: void 0
});
const ModalController = withErrorBoundary({
	state: state$9,
	subscribe(callback) {
		return subscribe(state$9, () => callback(state$9));
	},
	subscribeKey(key, callback) {
		return subscribeKey(state$9, key, callback);
	},
	async open(options) {
		const namespace = options?.namespace;
		const currentNamespace = ChainController.state.activeChain;
		const isSwitchingNamespace = namespace && namespace !== currentNamespace;
		const caipAddress = ChainController.getAccountData(options?.namespace)?.caipAddress;
		const hasNoAdapters = ChainController.state.noAdapters;
		if (ConnectionController.state.wcBasic) ApiController.prefetch({
			fetchNetworkImages: false,
			fetchConnectorImages: false,
			fetchWalletRanks: false
		});
		else await ApiController.prefetch();
		ConnectorController.setFilterByNamespace(options?.namespace);
		ModalController.setLoading(true, namespace);
		if (namespace && isSwitchingNamespace) {
			const namespaceNetwork = ChainController.getNetworkData(namespace)?.caipNetwork || ChainController.getRequestedCaipNetworks(namespace)[0];
			if (namespaceNetwork) if (hasNoAdapters) {
				await ChainController.switchActiveNetwork(namespaceNetwork);
				RouterController.push("ConnectingWalletConnectBasic");
			} else NetworkUtil$1.onSwitchNetwork({
				network: namespaceNetwork,
				ignoreSwitchConfirmation: true
			});
		} else if (OptionsController.state.manualWCControl || hasNoAdapters && !caipAddress) if (CoreHelperUtil.isMobile()) RouterController.reset("AllWallets");
		else RouterController.reset("ConnectingWalletConnectBasic");
		else if (options?.view) RouterController.reset(options.view, options.data);
		else if (caipAddress) RouterController.reset("Account");
		else RouterController.reset("Connect");
		state$9.open = true;
		PublicStateController.set({ open: true });
		EventsController.sendEvent({
			type: "track",
			event: "MODAL_OPEN",
			properties: { connected: Boolean(caipAddress) }
		});
	},
	close() {
		const isEmbeddedEnabled = OptionsController.state.enableEmbedded;
		const isConnected = Boolean(ChainController.state.activeCaipAddress);
		if (state$9.open) EventsController.sendEvent({
			type: "track",
			event: "MODAL_CLOSE",
			properties: { connected: isConnected }
		});
		state$9.open = false;
		RouterController.reset("Connect");
		ModalController.clearLoading();
		if (isEmbeddedEnabled) if (isConnected) RouterController.replace("Account");
		else RouterController.push("Connect");
		else PublicStateController.set({ open: false });
		ConnectionController.resetUri();
	},
	setLoading(loading, namespace) {
		if (namespace) state$9.loadingNamespaceMap.set(namespace, loading);
		state$9.loading = loading;
		PublicStateController.set({ loading });
	},
	clearLoading() {
		state$9.loadingNamespaceMap.clear();
		state$9.loading = false;
		PublicStateController.set({ loading: false });
	},
	shake() {
		if (state$9.shake) return;
		state$9.shake = true;
		setTimeout(() => {
			state$9.shake = false;
		}, 500);
	}
});
var state$8 = proxy({
	themeMode: "dark",
	themeVariables: {},
	w3mThemeVariables: void 0
});
var controller$5 = {
	state: state$8,
	subscribe(callback) {
		return subscribe(state$8, () => callback(state$8));
	},
	setThemeMode(themeMode) {
		state$8.themeMode = themeMode;
		try {
			const authConnector = ConnectorController.getAuthConnector();
			if (authConnector) {
				const themeVariables = controller$5.getSnapshot().themeVariables;
				authConnector.provider.syncTheme({
					themeMode,
					themeVariables,
					w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
				});
			}
		} catch {
			console.info("Unable to sync theme to auth connector");
		}
	},
	setThemeVariables(themeVariables) {
		state$8.themeVariables = {
			...state$8.themeVariables,
			...themeVariables
		};
		try {
			const authConnector = ConnectorController.getAuthConnector();
			if (authConnector) {
				const themeVariablesSnapshot = controller$5.getSnapshot().themeVariables;
				authConnector.provider.syncTheme({
					themeVariables: themeVariablesSnapshot,
					w3mThemeVariables: getW3mThemeVariables(state$8.themeVariables, state$8.themeMode)
				});
			}
		} catch {
			console.info("Unable to sync theme to auth connector");
		}
	},
	getSnapshot() {
		return snapshot(state$8);
	}
};
const ThemeController = withErrorBoundary(controller$5);
var defaultActiveConnectors = Object.fromEntries(AVAILABLE_NAMESPACES.map((namespace) => [namespace, void 0]));
var state$7 = proxy({
	allConnectors: [],
	connectors: [],
	activeConnector: void 0,
	filterByNamespace: void 0,
	activeConnectorIds: defaultActiveConnectors,
	filterByNamespaceMap: Object.fromEntries(AVAILABLE_NAMESPACES.map((namespace) => [namespace, true]))
});
const ConnectorController = withErrorBoundary({
	state: state$7,
	subscribe(callback) {
		return subscribe(state$7, () => {
			callback(state$7);
		});
	},
	subscribeKey(key, callback) {
		return subscribeKey(state$7, key, callback);
	},
	initialize(namespaces) {
		namespaces.forEach((namespace) => {
			const connectorId = StorageUtil.getConnectedConnectorId(namespace);
			if (connectorId) ConnectorController.setConnectorId(connectorId, namespace);
		});
	},
	setActiveConnector(connector) {
		if (connector) state$7.activeConnector = ref(connector);
	},
	setConnectors(connectors) {
		connectors.filter((newConnector) => !state$7.allConnectors.some((existingConnector) => existingConnector.id === newConnector.id && ConnectorController.getConnectorName(existingConnector.name) === ConnectorController.getConnectorName(newConnector.name) && existingConnector.chain === newConnector.chain)).forEach((connector) => {
			if (connector.type !== "MULTI_CHAIN") state$7.allConnectors.push(ref(connector));
		});
		const enabledNamespaces = ConnectorController.getEnabledNamespaces();
		const connectorsFilteredByNamespaces = ConnectorController.getEnabledConnectors(enabledNamespaces);
		state$7.connectors = ConnectorController.mergeMultiChainConnectors(connectorsFilteredByNamespaces);
	},
	filterByNamespaces(enabledNamespaces) {
		Object.keys(state$7.filterByNamespaceMap).forEach((namespace) => {
			state$7.filterByNamespaceMap[namespace] = false;
		});
		enabledNamespaces.forEach((namespace) => {
			state$7.filterByNamespaceMap[namespace] = true;
		});
		ConnectorController.updateConnectorsForEnabledNamespaces();
	},
	filterByNamespace(namespace, enabled) {
		state$7.filterByNamespaceMap[namespace] = enabled;
		ConnectorController.updateConnectorsForEnabledNamespaces();
	},
	updateConnectorsForEnabledNamespaces() {
		const enabledNamespaces = ConnectorController.getEnabledNamespaces();
		const enabledConnectors = ConnectorController.getEnabledConnectors(enabledNamespaces);
		const areAllNamespacesEnabled = ConnectorController.areAllNamespacesEnabled();
		state$7.connectors = ConnectorController.mergeMultiChainConnectors(enabledConnectors);
		if (areAllNamespacesEnabled) ApiController.clearFilterByNamespaces();
		else ApiController.filterByNamespaces(enabledNamespaces);
	},
	getEnabledNamespaces() {
		return Object.entries(state$7.filterByNamespaceMap).filter(([_, enabled]) => enabled).map(([namespace]) => namespace);
	},
	getEnabledConnectors(enabledNamespaces) {
		return state$7.allConnectors.filter((connector) => enabledNamespaces.includes(connector.chain));
	},
	areAllNamespacesEnabled() {
		return Object.values(state$7.filterByNamespaceMap).every((enabled) => enabled);
	},
	mergeMultiChainConnectors(connectors) {
		const connectorsByNameMap = ConnectorController.generateConnectorMapByName(connectors);
		const mergedConnectors = [];
		connectorsByNameMap.forEach((keyConnectors) => {
			const firstItem = keyConnectors[0];
			const isAuthConnector = firstItem?.id === ConstantsUtil.CONNECTOR_ID.AUTH;
			if (keyConnectors.length > 1 && firstItem) mergedConnectors.push({
				name: firstItem.name,
				imageUrl: firstItem.imageUrl,
				imageId: firstItem.imageId,
				connectors: [...keyConnectors],
				type: isAuthConnector ? "AUTH" : "MULTI_CHAIN",
				chain: "eip155",
				id: firstItem?.id || ""
			});
			else if (firstItem) mergedConnectors.push(firstItem);
		});
		return mergedConnectors;
	},
	generateConnectorMapByName(connectors) {
		const connectorsByNameMap = /* @__PURE__ */ new Map();
		connectors.forEach((connector) => {
			const { name } = connector;
			const connectorName = ConnectorController.getConnectorName(name);
			if (!connectorName) return;
			const connectorsByName = connectorsByNameMap.get(connectorName) || [];
			if (!connectorsByName.find((c) => c.chain === connector.chain)) connectorsByName.push(connector);
			connectorsByNameMap.set(connectorName, connectorsByName);
		});
		return connectorsByNameMap;
	},
	getConnectorName(name) {
		if (!name) return name;
		return { "Trust Wallet": "Trust" }[name] || name;
	},
	getUniqueConnectorsByName(connectors) {
		const uniqueConnectors = [];
		connectors.forEach((c) => {
			if (!uniqueConnectors.find((uc) => uc.chain === c.chain)) uniqueConnectors.push(c);
		});
		return uniqueConnectors;
	},
	addConnector(connector) {
		if (connector.id === ConstantsUtil.CONNECTOR_ID.AUTH) {
			const authConnector = connector;
			const optionsState = snapshot(OptionsController.state);
			const themeMode = ThemeController.getSnapshot().themeMode;
			const themeVariables = ThemeController.getSnapshot().themeVariables;
			authConnector?.provider?.syncDappData?.({
				metadata: optionsState.metadata,
				sdkVersion: optionsState.sdkVersion,
				projectId: optionsState.projectId,
				sdkType: optionsState.sdkType
			});
			authConnector?.provider?.syncTheme({
				themeMode,
				themeVariables,
				w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
			});
			ConnectorController.setConnectors([connector]);
		} else ConnectorController.setConnectors([connector]);
	},
	getAuthConnector(chainNamespace) {
		const activeNamespace = chainNamespace || ChainController.state.activeChain;
		const authConnector = state$7.connectors.find((c) => c.id === ConstantsUtil.CONNECTOR_ID.AUTH);
		if (!authConnector) return;
		if (authConnector?.connectors?.length) return authConnector.connectors.find((c) => c.chain === activeNamespace);
		return authConnector;
	},
	getAnnouncedConnectorRdns() {
		return state$7.connectors.filter((c) => c.type === "ANNOUNCED").map((c) => c.info?.rdns);
	},
	getConnectorById(id) {
		return ConnectorUtil.sortConnectorsByPriority(state$7.allConnectors).find((c) => c.id === id);
	},
	getConnector({ id, namespace }) {
		const namespaceToUse = namespace || ChainController.state.activeChain;
		const connectorsByNamespace = state$7.allConnectors.filter((c) => c.chain === namespaceToUse);
		return ConnectorUtil.sortConnectorsByPriority(connectorsByNamespace).find((c) => c.id === id || c.explorerId === id);
	},
	syncIfAuthConnector(connector) {
		if (connector.id !== "AUTH") return;
		const authConnector = connector;
		const optionsState = snapshot(OptionsController.state);
		const themeMode = ThemeController.getSnapshot().themeMode;
		const themeVariables = ThemeController.getSnapshot().themeVariables;
		authConnector?.provider?.syncDappData?.({
			metadata: optionsState.metadata,
			sdkVersion: optionsState.sdkVersion,
			sdkType: optionsState.sdkType,
			projectId: optionsState.projectId
		});
		authConnector.provider.syncTheme({
			themeMode,
			themeVariables,
			w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
		});
	},
	getConnectorsByNamespace(namespace) {
		const namespaceConnectors = state$7.allConnectors.filter((connector) => connector.chain === namespace);
		return ConnectorController.mergeMultiChainConnectors(namespaceConnectors);
	},
	canSwitchToSmartAccount(namespace) {
		return ChainController.checkIfSmartAccountEnabled() && getPreferredAccountType(namespace) === W3mFrameRpcConstants.ACCOUNT_TYPES.EOA;
	},
	selectWalletConnector(wallet) {
		const redirectView = RouterController.state.data?.redirectView;
		const namespace = ChainController.state.activeChain;
		const connector = namespace ? ConnectorController.getConnector({
			id: wallet.id,
			namespace
		}) : void 0;
		MobileWalletUtil.handleMobileDeeplinkRedirect(connector?.explorerId || wallet.id, ChainController.state.activeChain);
		if (connector) RouterController.push("ConnectingExternal", {
			connector,
			wallet,
			redirectView
		});
		else RouterController.push("ConnectingWalletConnect", {
			wallet,
			redirectView
		});
	},
	getConnectors(namespace) {
		if (namespace) return ConnectorController.getConnectorsByNamespace(namespace);
		return ConnectorController.mergeMultiChainConnectors(state$7.allConnectors);
	},
	setFilterByNamespace(namespace) {
		state$7.filterByNamespace = namespace;
		state$7.connectors = ConnectorController.getConnectors(namespace);
		ApiController.setFilterByNamespace(namespace);
	},
	setConnectorId(connectorId, namespace) {
		if (connectorId) {
			state$7.activeConnectorIds = {
				...state$7.activeConnectorIds,
				[namespace]: connectorId
			};
			StorageUtil.setConnectedConnectorId(namespace, connectorId);
		}
	},
	removeConnectorId(namespace) {
		state$7.activeConnectorIds = {
			...state$7.activeConnectorIds,
			[namespace]: void 0
		};
		StorageUtil.deleteConnectedConnectorId(namespace);
	},
	getConnectorId(namespace) {
		if (!namespace) return;
		return state$7.activeConnectorIds[namespace];
	},
	isConnected(namespace) {
		if (!namespace) return Object.values(state$7.activeConnectorIds).some((id) => Boolean(id));
		return Boolean(state$7.activeConnectorIds[namespace]);
	},
	resetConnectorIds() {
		state$7.activeConnectorIds = { ...defaultActiveConnectors };
	},
	extendConnectorsWithExplorerWallets(explorerWallets) {
		state$7.allConnectors.forEach((connector) => {
			const explorerWallet = explorerWallets.find((wallet) => wallet.id === connector.id || wallet.rdns && wallet.rdns === connector.info?.rdns);
			if (explorerWallet) connector.explorerWallet = explorerWallet;
		});
		const enabledNamespaces = ConnectorController.getEnabledNamespaces();
		const enabledConnectors = ConnectorController.getEnabledConnectors(enabledNamespaces);
		state$7.connectors = ConnectorController.mergeMultiChainConnectors(enabledConnectors);
	},
	async connect(params = {}) {
		const { namespace } = params;
		ConnectorController.setFilterByNamespace(namespace);
		RouterController.push("Connect", { addWalletForNamespace: namespace });
		return new Promise((resolve, reject) => {
			if (namespace) {
				const unsubscribeChainController = ChainController.subscribeChainProp("accountState", (val) => {
					if (val?.caipAddress) {
						resolve({ caipAddress: val?.caipAddress });
						unsubscribeChainController();
					}
				}, namespace);
				const unsubscribeModalController = ModalController.subscribeKey("open", (val) => {
					if (!val) {
						reject(/* @__PURE__ */ new Error("Modal closed"));
						unsubscribeModalController();
					}
				});
			} else {
				const unsubscribeChainController = ChainController.subscribeKey("activeCaipAddress", (val) => {
					if (val) {
						resolve({ caipAddress: val });
						unsubscribeChainController();
					}
				});
				const unsubscribeModalController = ModalController.subscribeKey("open", (val) => {
					if (!val) {
						reject(/* @__PURE__ */ new Error("Modal closed"));
						unsubscribeModalController();
					}
				});
			}
		});
	}
});
var UPDATE_EMAIL_INTERVAL_MS = 1e3;
const ConnectorControllerUtil = {
	checkNamespaceConnectorId(namespace, connectorId) {
		return ConnectorController.getConnectorId(namespace) === connectorId;
	},
	isSocialProvider(socialProvider) {
		return ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.socials.includes(socialProvider);
	},
	connectWalletConnect({ walletConnect, connector, closeModalOnConnect = true, redirectViewOnModalClose = "Connect", onOpen, onConnect }) {
		return new Promise((resolve, reject) => {
			if (walletConnect) ConnectorController.setActiveConnector(connector);
			onOpen?.(CoreHelperUtil.isMobile() && walletConnect);
			if (redirectViewOnModalClose) {
				const unsubscribeModalController = ModalController.subscribeKey("open", (val) => {
					if (!val) {
						if (RouterController.state.view !== redirectViewOnModalClose) RouterController.replace(redirectViewOnModalClose);
						unsubscribeModalController();
						reject(/* @__PURE__ */ new Error("Modal closed"));
					}
				});
			}
			const unsubscribeChainController = ChainController.subscribeKey("activeCaipAddress", (val) => {
				if (val) {
					onConnect?.();
					if (closeModalOnConnect) ModalController.close();
					unsubscribeChainController();
					resolve(ParseUtil.parseCaipAddress(val));
				}
			});
		});
	},
	connectExternal(connector) {
		return new Promise((resolve, reject) => {
			const unsubscribeChainController = ChainController.subscribeKey("activeCaipAddress", (val) => {
				if (val) {
					ModalController.close();
					unsubscribeChainController();
					resolve(ParseUtil.parseCaipAddress(val));
				}
			});
			ConnectionController.connectExternal(connector, connector.chain).catch(() => {
				unsubscribeChainController();
				reject(/* @__PURE__ */ new Error("Connection rejected"));
			});
		});
	},
	connectSocial({ social: socialProvider, namespace, closeModalOnConnect = true, onOpenFarcaster, onConnect }) {
		let socialWindow = void 0;
		let isConnectingSocial = false;
		let popupWindow = null;
		const namespaceToUse = namespace || ChainController.state.activeChain;
		const unsubscribeChainController = ChainController.subscribeKey("activeCaipAddress", (val) => {
			if (val) {
				if (closeModalOnConnect) ModalController.close();
				unsubscribeChainController();
			}
		});
		return new Promise((resolve, reject) => {
			async function handleSocialConnection(event) {
				if (event.data?.resultUri) if (event.origin === ConstantsUtil.SECURE_SITE_SDK_ORIGIN) {
					window.removeEventListener("message", handleSocialConnection, false);
					try {
						const authConnector = ConnectorController.getAuthConnector(namespaceToUse);
						if (authConnector && !isConnectingSocial) {
							if (socialWindow) socialWindow.close();
							isConnectingSocial = true;
							const uri = event.data.resultUri;
							EventsController.sendEvent({
								type: "track",
								event: "SOCIAL_LOGIN_REQUEST_USER_DATA",
								properties: { provider: socialProvider }
							});
							StorageUtil.setConnectedSocialProvider(socialProvider);
							await ConnectionController.connectExternal({
								id: authConnector.id,
								type: authConnector.type,
								socialUri: uri
							}, authConnector.chain);
							const caipAddress = ChainController.state.activeCaipAddress;
							if (!caipAddress) {
								reject(/* @__PURE__ */ new Error("Failed to connect"));
								return;
							}
							resolve(ParseUtil.parseCaipAddress(caipAddress));
							EventsController.sendEvent({
								type: "track",
								event: "SOCIAL_LOGIN_SUCCESS",
								properties: { provider: socialProvider }
							});
						}
					} catch (err) {
						EventsController.sendEvent({
							type: "track",
							event: "SOCIAL_LOGIN_ERROR",
							properties: {
								provider: socialProvider,
								message: CoreHelperUtil.parseError(err)
							}
						});
						reject(/* @__PURE__ */ new Error("Failed to connect"));
					}
				} else EventsController.sendEvent({
					type: "track",
					event: "SOCIAL_LOGIN_ERROR",
					properties: {
						provider: socialProvider,
						message: "Untrusted Origin"
					}
				});
			}
			async function connectSocial() {
				EventsController.sendEvent({
					type: "track",
					event: "SOCIAL_LOGIN_STARTED",
					properties: { provider: socialProvider }
				});
				if (socialProvider === "farcaster") {
					onOpenFarcaster?.();
					const unsubscribeModalController = ModalController.subscribeKey("open", (val) => {
						if (!val && socialProvider === "farcaster") {
							reject(/* @__PURE__ */ new Error("Popup closed"));
							onConnect?.();
							unsubscribeModalController();
						}
					});
					const authConnector = ConnectorController.getAuthConnector();
					if (authConnector) {
						if (!ChainController.getAccountData(namespaceToUse)?.farcasterUrl) try {
							const { url } = await authConnector.provider.getFarcasterUri();
							ChainController.setAccountProp("farcasterUrl", url, namespaceToUse);
						} catch {
							reject(/* @__PURE__ */ new Error("Failed to connect to farcaster"));
						}
					}
				} else {
					const authConnector = ConnectorController.getAuthConnector();
					popupWindow = CoreHelperUtil.returnOpenHref(`${ConstantsUtil.SECURE_SITE_SDK_ORIGIN}/loading`, "popupWindow", "width=600,height=800,scrollbars=yes");
					try {
						if (authConnector) {
							const { uri } = await authConnector.provider.getSocialRedirectUri({ provider: socialProvider });
							if (popupWindow && uri) {
								popupWindow.location.href = uri;
								socialWindow = popupWindow;
								const interval = setInterval(() => {
									if (socialWindow?.closed && !isConnectingSocial) {
										reject(/* @__PURE__ */ new Error("Popup closed"));
										clearInterval(interval);
									}
								}, 1e3);
								window.addEventListener("message", handleSocialConnection, false);
							} else {
								popupWindow?.close();
								reject(/* @__PURE__ */ new Error("Failed to initiate social connection"));
							}
						}
					} catch {
						reject(/* @__PURE__ */ new Error("Failed to initiate social connection"));
						popupWindow?.close();
					}
				}
			}
			connectSocial();
		});
	},
	connectEmail({ closeModalOnConnect = true, redirectViewOnModalClose = "Connect", onOpen, onConnect }) {
		return new Promise((resolve, reject) => {
			onOpen?.();
			if (redirectViewOnModalClose) {
				const unsubscribeModalController = ModalController.subscribeKey("open", (val) => {
					if (!val) {
						if (RouterController.state.view !== redirectViewOnModalClose) RouterController.replace(redirectViewOnModalClose);
						unsubscribeModalController();
						reject(/* @__PURE__ */ new Error("Modal closed"));
					}
				});
			}
			const unsubscribeChainController = ChainController.subscribeKey("activeCaipAddress", (val) => {
				if (val) {
					onConnect?.();
					if (closeModalOnConnect) ModalController.close();
					unsubscribeChainController();
					resolve(ParseUtil.parseCaipAddress(val));
				}
			});
		});
	},
	async updateEmail() {
		const connectorId = StorageUtil.getConnectedConnectorId(ChainController.state.activeChain);
		const authConnector = ConnectorController.getAuthConnector();
		if (!authConnector) throw new Error("No auth connector found");
		if (connectorId !== ConstantsUtil.CONNECTOR_ID.AUTH) throw new Error("Not connected to email or social");
		const initialEmail = authConnector.provider.getEmail() ?? "";
		await ModalController.open({
			view: "UpdateEmailWallet",
			data: {
				email: initialEmail,
				redirectView: void 0
			}
		});
		return new Promise((resolve, reject) => {
			const interval = setInterval(() => {
				const newEmail = authConnector.provider.getEmail() ?? "";
				if (newEmail !== initialEmail) {
					ModalController.close();
					clearInterval(interval);
					unsubscribeModalController();
					resolve({ email: newEmail });
				}
			}, UPDATE_EMAIL_INTERVAL_MS);
			const unsubscribeModalController = ModalController.subscribeKey("open", (val) => {
				if (!val) {
					if (RouterController.state.view !== "Connect") RouterController.push("Connect");
					clearInterval(interval);
					unsubscribeModalController();
					reject(/* @__PURE__ */ new Error("Modal closed"));
				}
			});
		});
	},
	canSwitchToSmartAccount(namespace) {
		return ChainController.checkIfSmartAccountEnabled() && getPreferredAccountType(namespace) === W3mFrameRpcConstants.ACCOUNT_TYPES.EOA;
	}
};
function getActiveNetworkTokenAddress() {
	const namespace = ChainController.state.activeCaipNetwork?.chainNamespace || "eip155";
	return `${namespace}:${ChainController.state.activeCaipNetwork?.id || 1}:${ConstantsUtil$1.NATIVE_TOKEN_ADDRESS[namespace]}`;
}
function getNativeTokenAddress(namespace) {
	return ConstantsUtil$1.NATIVE_TOKEN_ADDRESS[namespace];
}
function getPreferredAccountType(namespace) {
	return ChainController.getAccountData(namespace)?.preferredAccountType;
}
function getActiveCaipNetwork(chainNamespace) {
	if (chainNamespace) return ChainController.state.chains.get(chainNamespace)?.networkState?.caipNetwork;
	return ChainController.state.activeCaipNetwork;
}
const ConnectionControllerUtil = {
	getConnectionStatus(connection, namespace) {
		const connectedConnectorId = ConnectorController.state.activeConnectorIds[namespace];
		const connections = ConnectionController.getConnections(namespace);
		if (Boolean(connectedConnectorId) && connection.connectorId === connectedConnectorId) return "connected";
		if (connections.some((c) => c.connectorId.toLowerCase() === connection.connectorId.toLowerCase())) return "active";
		return "disconnected";
	},
	excludeConnectorAddressFromConnections({ connections, connectorId, addresses }) {
		return connections.map((connection) => {
			if ((connectorId ? connection.connectorId.toLowerCase() === connectorId.toLowerCase() : false) && addresses) {
				const filteredAccounts = connection.accounts.filter((account) => {
					return !addresses.some((address) => address.toLowerCase() === account.address.toLowerCase());
				});
				return {
					...connection,
					accounts: filteredAccounts
				};
			}
			return connection;
		});
	},
	excludeExistingConnections(connectorIds, newConnections) {
		const existingConnectorIds = new Set(connectorIds);
		return newConnections.filter((c) => !existingConnectorIds.has(c.connectorId));
	},
	getConnectionsByConnectorId(connections, connectorId) {
		return connections.filter((c) => c.connectorId.toLowerCase() === connectorId.toLowerCase());
	},
	getConnectionsData(namespace) {
		const isMultiWalletEnabled = Boolean(OptionsController.state.remoteFeatures?.multiWallet);
		const activeConnectorId = ConnectorController.state.activeConnectorIds[namespace];
		const connections = ConnectionController.getConnections(namespace);
		const recentConnectionsWithCurrentActiveConnectors = (ConnectionController.state.recentConnections.get(namespace) ?? []).filter((connection) => ConnectorController.getConnectorById(connection.connectorId));
		const dedupedRecentConnections = ConnectionControllerUtil.excludeExistingConnections([...connections.map((c) => c.connectorId), ...activeConnectorId ? [activeConnectorId] : []], recentConnectionsWithCurrentActiveConnectors);
		if (!isMultiWalletEnabled) return {
			connections: connections.filter((c) => c.connectorId.toLowerCase() === activeConnectorId?.toLowerCase()),
			recentConnections: []
		};
		return {
			connections,
			recentConnections: dedupedRecentConnections
		};
	},
	onConnectMobile(wallet) {
		const wcUri = ConnectionController.state.wcUri;
		if (wallet?.mobile_link && wcUri) try {
			ConnectionController.setWcError(false);
			const { mobile_link, link_mode, name } = wallet;
			const { redirect, redirectUniversalLink, href } = CoreHelperUtil.formatNativeUrl(mobile_link, wcUri, link_mode);
			const deepLink = redirect;
			const universalLink = redirectUniversalLink;
			const target = CoreHelperUtil.isIframe() ? "_top" : "_self";
			ConnectionController.setWcLinking({
				name,
				href
			});
			ConnectionController.setRecentWallet(wallet);
			if (OptionsController.state.experimental_preferUniversalLinks && universalLink) CoreHelperUtil.openHref(universalLink, target);
			else CoreHelperUtil.openHref(deepLink, target);
		} catch (e) {
			EventsController.sendEvent({
				type: "track",
				event: "CONNECT_PROXY_ERROR",
				properties: {
					message: e instanceof Error ? e.message : "Error parsing the deep link",
					uri: wcUri,
					mobile_link: wallet.mobile_link,
					name: wallet.name
				}
			});
			ConnectionController.setWcError(true);
		}
	}
};
var state$6 = proxy({
	transactions: [],
	transactionsByYear: {},
	lastNetworkInView: void 0,
	loading: false,
	empty: false,
	next: void 0
});
const TransactionsController = withErrorBoundary({
	state: state$6,
	subscribe(callback) {
		return subscribe(state$6, () => callback(state$6));
	},
	setLastNetworkInView(lastNetworkInView) {
		state$6.lastNetworkInView = lastNetworkInView;
	},
	async fetchTransactions(accountAddress) {
		if (!accountAddress) throw new Error("Transactions can't be fetched without an accountAddress");
		state$6.loading = true;
		try {
			const response = await BlockchainApiController.fetchTransactions({
				account: accountAddress,
				cursor: state$6.next,
				chainId: ChainController.state.activeCaipNetwork?.caipNetworkId
			});
			const nonSpamTransactions = TransactionsController.filterSpamTransactions(response.data);
			const sameChainTransactions = TransactionsController.filterByConnectedChain(nonSpamTransactions);
			const filteredTransactions = [...state$6.transactions, ...sameChainTransactions];
			state$6.loading = false;
			state$6.transactions = filteredTransactions;
			state$6.transactionsByYear = TransactionsController.groupTransactionsByYearAndMonth(state$6.transactionsByYear, sameChainTransactions);
			state$6.empty = filteredTransactions.length === 0;
			state$6.next = response.next ? response.next : void 0;
		} catch (error) {
			const activeChainNamespace = ChainController.state.activeChain;
			EventsController.sendEvent({
				type: "track",
				event: "ERROR_FETCH_TRANSACTIONS",
				properties: {
					address: accountAddress,
					projectId: OptionsController.state.projectId,
					cursor: state$6.next,
					isSmartAccount: getPreferredAccountType(activeChainNamespace) === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
				}
			});
			SnackController.showError("Failed to fetch transactions");
			state$6.loading = false;
			state$6.empty = true;
			state$6.next = void 0;
		}
	},
	groupTransactionsByYearAndMonth(transactionsMap = {}, transactions = []) {
		const grouped = transactionsMap;
		transactions.forEach((transaction) => {
			const year = new Date(transaction.metadata.minedAt).getFullYear();
			const month = new Date(transaction.metadata.minedAt).getMonth();
			const yearTransactions = grouped[year] ?? {};
			const newMonthTransactions = (yearTransactions[month] ?? []).filter((tx) => tx.id !== transaction.id);
			grouped[year] = {
				...yearTransactions,
				[month]: [...newMonthTransactions, transaction].sort((a, b) => new Date(b.metadata.minedAt).getTime() - new Date(a.metadata.minedAt).getTime())
			};
		});
		return grouped;
	},
	filterSpamTransactions(transactions) {
		return transactions.filter((transaction) => {
			return !transaction.transfers?.every((transfer) => transfer.nft_info?.flags.is_spam === true);
		});
	},
	filterByConnectedChain(transactions) {
		const chainId = ChainController.state.activeCaipNetwork?.caipNetworkId;
		return transactions.filter((transaction) => transaction.metadata.chain === chainId);
	},
	clearCursor() {
		state$6.next = void 0;
	},
	resetTransactions() {
		state$6.transactions = [];
		state$6.transactionsByYear = {};
		state$6.lastNetworkInView = void 0;
		state$6.loading = false;
		state$6.empty = false;
		state$6.next = void 0;
	}
}, "API_ERROR");
var state$5 = proxy({
	connections: /* @__PURE__ */ new Map(),
	recentConnections: /* @__PURE__ */ new Map(),
	isSwitchingConnection: false,
	wcError: false,
	wcFetchingUri: false,
	buffering: false,
	status: "disconnected"
});
var wcConnectionPromise;
const ConnectionController = withErrorBoundary({
	state: state$5,
	subscribe(callback) {
		return subscribe(state$5, () => callback(state$5));
	},
	subscribeKey(key, callback) {
		return subscribeKey(state$5, key, callback);
	},
	_getClient() {
		return state$5._client;
	},
	setClient(client) {
		state$5._client = ref(client);
	},
	initialize(adapters) {
		const namespaces = adapters.filter((a) => Boolean(a.namespace)).map((a) => a.namespace);
		ConnectionController.syncStorageConnections(namespaces);
	},
	syncStorageConnections(namespaces) {
		const storageConnections = StorageUtil.getConnections();
		const namespacesToSync = namespaces ?? Array.from(ChainController.state.chains.keys());
		for (const namespace of namespacesToSync) {
			const storageConnectionsByNamespace = storageConnections[namespace] ?? [];
			const recentConnectionsMap = new Map(state$5.recentConnections);
			recentConnectionsMap.set(namespace, storageConnectionsByNamespace);
			state$5.recentConnections = recentConnectionsMap;
		}
	},
	getConnections(namespace) {
		return namespace ? state$5.connections.get(namespace) ?? [] : [];
	},
	hasAnyConnection(connectorId) {
		const connections = ConnectionController.state.connections;
		return Array.from(connections.values()).flatMap((_connections) => _connections).some(({ connectorId: _connectorId }) => _connectorId === connectorId);
	},
	async connectWalletConnect({ cache = "auto" } = {}) {
		state$5.wcFetchingUri = true;
		const isInTelegramOrSafariIos = CoreHelperUtil.isTelegram() || CoreHelperUtil.isSafari() && CoreHelperUtil.isIos();
		if (cache === "always" || cache === "auto" && isInTelegramOrSafariIos) {
			if (wcConnectionPromise) {
				await wcConnectionPromise;
				wcConnectionPromise = void 0;
				return;
			}
			if (!CoreHelperUtil.isPairingExpired(state$5?.wcPairingExpiry)) {
				state$5.wcUri = state$5.wcUri;
				return;
			}
			wcConnectionPromise = ConnectionController._getClient()?.connectWalletConnect?.().catch(() => void 0);
			ConnectionController.state.status = "connecting";
			await wcConnectionPromise;
			wcConnectionPromise = void 0;
			state$5.wcPairingExpiry = void 0;
			ConnectionController.state.status = "connected";
		} else await ConnectionController._getClient()?.connectWalletConnect?.();
	},
	async connectExternal(options, chain, setChain = true) {
		const connectData = await ConnectionController._getClient()?.connectExternal?.(options);
		if (setChain) ChainController.setActiveNamespace(chain);
		const connector = ConnectorController.state.allConnectors.find((c) => c.id === options?.id);
		const connectSuccessEventMethod = options.type === "AUTH" ? "email" : "browser";
		EventsController.sendEvent({
			type: "track",
			event: "CONNECT_SUCCESS",
			properties: {
				method: connectSuccessEventMethod,
				name: connector?.name || "Unknown",
				view: RouterController.state.view,
				walletRank: connector?.explorerWallet?.order
			}
		});
		return connectData;
	},
	async reconnectExternal(options) {
		await ConnectionController._getClient()?.reconnectExternal?.(options);
		const namespace = options.chain || ChainController.state.activeChain;
		if (namespace) ConnectorController.setConnectorId(options.id, namespace);
	},
	async setPreferredAccountType(accountType, namespace) {
		if (!namespace) return;
		ModalController.setLoading(true, ChainController.state.activeChain);
		const authConnector = ConnectorController.getAuthConnector();
		if (!authConnector) return;
		ChainController.setAccountProp("preferredAccountType", accountType, namespace);
		await authConnector.provider.setPreferredAccount(accountType);
		StorageUtil.setPreferredAccountTypes(Object.entries(ChainController.state.chains).reduce((acc, [key, _]) => {
			const namespace$1 = key;
			const accountType$1 = getPreferredAccountType(namespace$1);
			if (accountType$1 !== void 0) acc[namespace$1] = accountType$1;
			return acc;
		}, {}));
		await ConnectionController.reconnectExternal(authConnector);
		ModalController.setLoading(false, ChainController.state.activeChain);
		EventsController.sendEvent({
			type: "track",
			event: "SET_PREFERRED_ACCOUNT_TYPE",
			properties: {
				accountType,
				network: ChainController.state.activeCaipNetwork?.caipNetworkId || ""
			}
		});
	},
	async signMessage(message) {
		return ConnectionController._getClient()?.signMessage(message);
	},
	parseUnits(value, decimals) {
		return ConnectionController._getClient()?.parseUnits(value, decimals);
	},
	formatUnits(value, decimals) {
		return ConnectionController._getClient()?.formatUnits(value, decimals);
	},
	updateBalance(namespace) {
		return ConnectionController._getClient()?.updateBalance(namespace);
	},
	async sendTransaction(args) {
		return ConnectionController._getClient()?.sendTransaction(args);
	},
	async getCapabilities(params) {
		return ConnectionController._getClient()?.getCapabilities(params);
	},
	async grantPermissions(params) {
		return ConnectionController._getClient()?.grantPermissions(params);
	},
	async walletGetAssets(params) {
		return ConnectionController._getClient()?.walletGetAssets(params) ?? {};
	},
	async estimateGas(args) {
		return ConnectionController._getClient()?.estimateGas(args);
	},
	async writeContract(args) {
		return ConnectionController._getClient()?.writeContract(args);
	},
	async writeSolanaTransaction(args) {
		return ConnectionController._getClient()?.writeSolanaTransaction(args);
	},
	async getEnsAddress(value) {
		return ConnectionController._getClient()?.getEnsAddress(value);
	},
	async getEnsAvatar(value) {
		return ConnectionController._getClient()?.getEnsAvatar(value);
	},
	checkInstalled(ids) {
		return ConnectionController._getClient()?.checkInstalled?.(ids) || false;
	},
	resetWcConnection() {
		state$5.wcUri = void 0;
		state$5.wcPairingExpiry = void 0;
		state$5.wcLinking = void 0;
		state$5.recentWallet = void 0;
		state$5.wcFetchingUri = false;
		state$5.status = "disconnected";
		TransactionsController.resetTransactions();
		StorageUtil.deleteWalletConnectDeepLink();
		StorageUtil.deleteRecentWallet();
		PublicStateController.set({ connectingWallet: void 0 });
	},
	resetUri() {
		state$5.wcUri = void 0;
		state$5.wcPairingExpiry = void 0;
		wcConnectionPromise = void 0;
		state$5.wcFetchingUri = false;
		PublicStateController.set({ connectingWallet: void 0 });
	},
	finalizeWcConnection(address) {
		const { wcLinking, recentWallet } = ConnectionController.state;
		if (wcLinking) StorageUtil.setWalletConnectDeepLink(wcLinking);
		if (recentWallet) StorageUtil.setAppKitRecent(recentWallet);
		if (address) EventsController.sendEvent({
			type: "track",
			event: "CONNECT_SUCCESS",
			address,
			properties: {
				method: wcLinking ? "mobile" : "qrcode",
				name: RouterController.state.data?.wallet?.name || "Unknown",
				view: RouterController.state.view,
				walletRank: recentWallet?.order
			}
		});
	},
	setWcBasic(wcBasic) {
		state$5.wcBasic = wcBasic;
	},
	setUri(uri) {
		state$5.wcUri = uri;
		state$5.wcFetchingUri = false;
		state$5.wcPairingExpiry = CoreHelperUtil.getPairingExpiry();
	},
	setWcLinking(wcLinking) {
		state$5.wcLinking = wcLinking;
	},
	setWcError(wcError) {
		state$5.wcError = wcError;
		state$5.wcFetchingUri = false;
		state$5.buffering = false;
	},
	setRecentWallet(wallet) {
		state$5.recentWallet = wallet;
	},
	setBuffering(buffering) {
		state$5.buffering = buffering;
	},
	setStatus(status) {
		state$5.status = status;
	},
	setIsSwitchingConnection(isSwitchingConnection) {
		state$5.isSwitchingConnection = isSwitchingConnection;
	},
	async disconnect({ id, namespace, initialDisconnect } = {}) {
		try {
			await ConnectionController._getClient()?.disconnect({
				id,
				chainNamespace: namespace,
				initialDisconnect
			});
		} catch (error) {
			throw new AppKitError("Failed to disconnect", "INTERNAL_SDK_ERROR", error);
		}
	},
	async disconnectConnector({ id, namespace }) {
		try {
			await ConnectionController._getClient()?.disconnectConnector({
				id,
				namespace
			});
		} catch (error) {
			throw new AppKitError("Failed to disconnect connector", "INTERNAL_SDK_ERROR", error);
		}
	},
	setConnections(connections, chainNamespace) {
		const connectionsMap = new Map(state$5.connections);
		connectionsMap.set(chainNamespace, connections);
		state$5.connections = connectionsMap;
	},
	async handleAuthAccountSwitch({ address, namespace }) {
		const smartAccount = ChainController.getAccountData(namespace)?.user?.accounts?.find((c) => c.type === "smartAccount");
		const accountType = smartAccount && smartAccount.address.toLowerCase() === address.toLowerCase() && ConnectorControllerUtil.canSwitchToSmartAccount(namespace) ? "smartAccount" : "eoa";
		await ConnectionController.setPreferredAccountType(accountType, namespace);
	},
	async handleActiveConnection({ connection, namespace, address }) {
		const connector = ConnectorController.getConnectorById(connection.connectorId);
		const isAuthConnector = connection.connectorId === ConstantsUtil.CONNECTOR_ID.AUTH;
		if (!connector) throw new Error(`No connector found for connection: ${connection.connectorId}`);
		if (!isAuthConnector) return (await ConnectionController.connectExternal({
			id: connector.id,
			type: connector.type,
			provider: connector.provider,
			address,
			chain: namespace
		}, namespace))?.address;
		else if (address) await ConnectionController.handleAuthAccountSwitch({
			address,
			namespace
		});
		return address;
	},
	async handleDisconnectedConnection({ connection, namespace, address, closeModalOnConnect }) {
		const connector = ConnectorController.getConnectorById(connection.connectorId);
		const authName = connection.auth?.name?.toLowerCase();
		const isAuthConnector = connection.connectorId === ConstantsUtil.CONNECTOR_ID.AUTH;
		const isWCConnector = connection.connectorId === ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT;
		if (!connector) throw new Error(`No connector found for connection: ${connection.connectorId}`);
		let newAddress = void 0;
		if (isAuthConnector) if (authName && ConnectorControllerUtil.isSocialProvider(authName)) {
			const { address: socialAddress } = await ConnectorControllerUtil.connectSocial({
				social: authName,
				closeModalOnConnect,
				onOpenFarcaster() {
					ModalController.open({ view: "ConnectingFarcaster" });
				},
				onConnect() {
					RouterController.replace("ProfileWallets");
				}
			});
			newAddress = socialAddress;
		} else {
			const { address: emailAddress } = await ConnectorControllerUtil.connectEmail({
				closeModalOnConnect,
				onOpen() {
					ModalController.open({ view: "EmailLogin" });
				},
				onConnect() {
					RouterController.replace("ProfileWallets");
				}
			});
			newAddress = emailAddress;
		}
		else if (isWCConnector) {
			const { address: wcAddress } = await ConnectorControllerUtil.connectWalletConnect({
				walletConnect: true,
				connector,
				closeModalOnConnect,
				onOpen(isMobile) {
					const view = isMobile ? "AllWallets" : "ConnectingWalletConnect";
					if (ModalController.state.open) RouterController.push(view);
					else ModalController.open({ view });
				},
				onConnect() {
					RouterController.replace("ProfileWallets");
				}
			});
			newAddress = wcAddress;
		} else {
			const connectData = await ConnectionController.connectExternal({
				id: connector.id,
				type: connector.type,
				provider: connector.provider,
				chain: namespace
			}, namespace);
			if (connectData) newAddress = connectData.address;
		}
		if (isAuthConnector && address) await ConnectionController.handleAuthAccountSwitch({
			address,
			namespace
		});
		return newAddress;
	},
	async switchConnection({ connection, address, namespace, closeModalOnConnect, onChange }) {
		let currentAddress = void 0;
		const caipAddress = ChainController.getAccountData(namespace)?.caipAddress;
		if (caipAddress) {
			const { address: currentAddressParsed } = ParseUtil.parseCaipAddress(caipAddress);
			currentAddress = currentAddressParsed;
		}
		const status = ConnectionControllerUtil.getConnectionStatus(connection, namespace);
		switch (status) {
			case "connected":
			case "active": {
				const newAddress = await ConnectionController.handleActiveConnection({
					connection,
					namespace,
					address
				});
				if (currentAddress && newAddress) {
					const hasSwitchedAccount = newAddress.toLowerCase() !== currentAddress.toLowerCase();
					onChange?.({
						address: newAddress,
						namespace,
						hasSwitchedAccount,
						hasSwitchedWallet: status === "active"
					});
				}
				break;
			}
			case "disconnected": {
				const newAddress = await ConnectionController.handleDisconnectedConnection({
					connection,
					namespace,
					address,
					closeModalOnConnect
				});
				if (newAddress) onChange?.({
					address: newAddress,
					namespace,
					hasSwitchedAccount: true,
					hasSwitchedWallet: true
				});
				break;
			}
			default: throw new Error(`Invalid connection status: ${status}`);
		}
	}
});
const ERC7811Utils = {
	createBalance(asset, chainId) {
		const metadata = {
			name: asset.metadata["name"] || "",
			symbol: asset.metadata["symbol"] || "",
			decimals: asset.metadata["decimals"] || 0,
			value: asset.metadata["value"] || 0,
			price: asset.metadata["price"] || 0,
			iconUrl: asset.metadata["iconUrl"] || ""
		};
		return {
			name: metadata.name,
			symbol: metadata.symbol,
			chainId,
			address: asset.address === "native" ? void 0 : this.convertAddressToCAIP10Address(asset.address, chainId),
			value: metadata.value,
			price: metadata.price,
			quantity: {
				decimals: metadata.decimals.toString(),
				numeric: this.convertHexToBalance({
					hex: asset.balance,
					decimals: metadata.decimals
				})
			},
			iconUrl: metadata.iconUrl
		};
	},
	convertHexToBalance({ hex, decimals }) {
		return formatUnits(BigInt(hex), decimals);
	},
	convertAddressToCAIP10Address(address, chainId) {
		return `${chainId}:${address}`;
	},
	createCAIP2ChainId(chainId, namespace) {
		return `${namespace}:${parseInt(chainId, 16)}`;
	},
	getChainIdHexFromCAIP2ChainId(caip2ChainId) {
		const parts = caip2ChainId.split(":");
		if (parts.length < 2 || !parts[1]) return "0x0";
		const chainPart = parts[1];
		const parsed = parseInt(chainPart, 10);
		return isNaN(parsed) ? "0x0" : `0x${parsed.toString(16)}`;
	},
	isWalletGetAssetsResponse(response) {
		if (typeof response !== "object" || response === null) return false;
		return Object.values(response).every((value) => Array.isArray(value) && value.every((asset) => this.isValidAsset(asset)));
	},
	isValidAsset(asset) {
		return typeof asset === "object" && asset !== null && typeof asset.address === "string" && typeof asset.balance === "string" && (asset.type === "ERC20" || asset.type === "NATIVE") && typeof asset.metadata === "object" && asset.metadata !== null && typeof asset.metadata["name"] === "string" && typeof asset.metadata["symbol"] === "string" && typeof asset.metadata["decimals"] === "number" && typeof asset.metadata["price"] === "number" && typeof asset.metadata["iconUrl"] === "string";
	}
};
var cachedViemUtils = void 0;
async function loadViemUtils() {
	if (!cachedViemUtils) {
		const { createPublicClient, http, defineChain } = await __vitePreload(async () => {
			const { createPublicClient: createPublicClient$1, http: http$1, defineChain: defineChain$1 } = await import("./_esm-BHH26OCr.js");
			return {
				createPublicClient: createPublicClient$1,
				http: http$1,
				defineChain: defineChain$1
			};
		}, __vite__mapDeps([0,1,2,3,4,5]));
		cachedViemUtils = {
			createPublicClient,
			http,
			defineChain
		};
	}
	return cachedViemUtils;
}
const ViemUtil = {
	getBlockchainApiRpcUrl(caipNetworkId, projectId) {
		const url = new URL("https://rpc.walletconnect.org/v1/");
		url.searchParams.set("chainId", caipNetworkId);
		url.searchParams.set("projectId", projectId);
		return url.toString();
	},
	async getViemChain(caipNetwork) {
		const { defineChain } = await loadViemUtils();
		const { chainId } = ParseUtil.parseCaipNetworkId(caipNetwork.caipNetworkId);
		return defineChain({
			...caipNetwork,
			id: Number(chainId)
		});
	},
	async createViemPublicClient(caipNetwork) {
		const { createPublicClient, http } = await loadViemUtils();
		const projectId = OptionsController.state.projectId;
		const viemChain = await ViemUtil.getViemChain(caipNetwork);
		if (!viemChain) throw new Error(`Chain ${caipNetwork.caipNetworkId} not found in viem/chains`);
		return createPublicClient({
			chain: viemChain,
			transport: http(ViemUtil.getBlockchainApiRpcUrl(caipNetwork.caipNetworkId, projectId))
		});
	}
};
const BalanceUtil = {
	async getMyTokensWithBalance(params = {
		forceUpdate: void 0,
		caipNetwork: ChainController.state.activeCaipNetwork,
		address: ChainController.getAccountData()?.address
	}) {
		const { forceUpdate, caipNetwork, address } = params;
		const isAuthConnector = ConnectorController.getConnectorId("eip155") === ConstantsUtil.CONNECTOR_ID.AUTH;
		if (!address) return [];
		const caipAddress = caipNetwork ? `${caipNetwork.caipNetworkId}:${address}` : address;
		const cachedBalance = StorageUtil.getBalanceCacheForCaipAddress(caipAddress);
		if (cachedBalance) return cachedBalance.balances;
		if (caipNetwork && caipNetwork.chainNamespace === ConstantsUtil.CHAIN.EVM && isAuthConnector) {
			const eip155Balances = await this.getEIP155Balances(address, caipNetwork);
			if (eip155Balances) return this.filterLowQualityTokens(eip155Balances);
		}
		const response = await BlockchainApiController.getBalance(address, caipNetwork?.caipNetworkId, forceUpdate);
		return this.filterLowQualityTokens(response.balances);
	},
	async getEIP155Balances(address, caipNetwork) {
		try {
			const chainIdHex = ERC7811Utils.getChainIdHexFromCAIP2ChainId(caipNetwork.caipNetworkId);
			if (!(await ConnectionController.getCapabilities(address))?.[chainIdHex]?.["assetDiscovery"]?.supported) return null;
			const walletGetAssetsResponse = await ConnectionController.walletGetAssets({
				account: address,
				chainFilter: [chainIdHex]
			});
			if (!ERC7811Utils.isWalletGetAssetsResponse(walletGetAssetsResponse)) return null;
			const filteredAssets = (walletGetAssetsResponse[chainIdHex] || []).map((asset) => ERC7811Utils.createBalance(asset, caipNetwork.caipNetworkId));
			StorageUtil.updateBalanceCache({
				caipAddress: `${caipNetwork.caipNetworkId}:${address}`,
				balance: { balances: filteredAssets },
				timestamp: Date.now()
			});
			return filteredAssets;
		} catch (error) {
			return null;
		}
	},
	filterLowQualityTokens(balances) {
		return balances.filter((balance) => balance.quantity.decimals !== "0");
	},
	async fetchERC20Balance({ caipAddress, assetAddress, caipNetwork }) {
		const publicClient = await ViemUtil.createViemPublicClient(caipNetwork);
		const { address } = ParseUtil.parseCaipAddress(caipAddress);
		const [{ result: name }, { result: symbol }, { result: balance }, { result: decimals }] = await publicClient.multicall({ contracts: [
			{
				address: assetAddress,
				functionName: "name",
				args: [],
				abi: erc20Abi
			},
			{
				address: assetAddress,
				functionName: "symbol",
				args: [],
				abi: erc20Abi
			},
			{
				address: assetAddress,
				functionName: "balanceOf",
				args: [address],
				abi: erc20Abi
			},
			{
				address: assetAddress,
				functionName: "decimals",
				args: [],
				abi: erc20Abi
			}
		] });
		return {
			name,
			symbol,
			decimals,
			balance: balance && decimals ? formatUnits(balance, decimals) : "0"
		};
	}
};
var state$4 = { adapters: {} };
const AdapterController = {
	state: state$4,
	initialize(adapters) {
		state$4.adapters = { ...adapters };
	},
	get(namespace) {
		return state$4.adapters[namespace];
	}
};
var CLEAN_PROVIDERS_STATE = {
	eip155: void 0,
	solana: void 0,
	polkadot: void 0,
	bip122: void 0,
	cosmos: void 0,
	sui: void 0,
	stacks: void 0,
	ton: void 0
};
var state$3 = proxy({
	providers: { ...CLEAN_PROVIDERS_STATE },
	providerIds: { ...CLEAN_PROVIDERS_STATE }
});
const ProviderController = {
	state: state$3,
	subscribeKey(key, callback) {
		return subscribeKey(state$3, key, callback);
	},
	subscribe(callback) {
		return subscribe(state$3, () => {
			callback(state$3);
		});
	},
	subscribeProviders(callback) {
		return subscribe(state$3.providers, () => callback(state$3.providers));
	},
	setProvider(chainNamespace, provider) {
		if (chainNamespace && provider) state$3.providers[chainNamespace] = ref(provider);
	},
	getProvider(chainNamespace) {
		if (!chainNamespace) return;
		return state$3.providers[chainNamespace];
	},
	setProviderId(chainNamespace, providerId) {
		if (providerId) state$3.providerIds[chainNamespace] = providerId;
	},
	getProviderId(chainNamespace) {
		if (!chainNamespace) return;
		return state$3.providerIds[chainNamespace];
	},
	reset() {
		state$3.providers = { ...CLEAN_PROVIDERS_STATE };
		state$3.providerIds = { ...CLEAN_PROVIDERS_STATE };
	},
	resetChain(chainNamespace) {
		state$3.providers[chainNamespace] = void 0;
		state$3.providerIds[chainNamespace] = void 0;
	}
};
const SwapApiUtil = {
	async getTokenList(caipNetworkId) {
		return (await BlockchainApiController.fetchSwapTokens({ chainId: caipNetworkId }))?.tokens?.map((token) => ({
			...token,
			eip2612: false,
			quantity: {
				decimals: "0",
				numeric: "0"
			},
			price: 0,
			value: 0
		})) || [];
	},
	async fetchGasPrice() {
		const caipNetwork = ChainController.state.activeCaipNetwork;
		if (!caipNetwork) return null;
		try {
			switch (caipNetwork.chainNamespace) {
				case "solana":
					const lamportsPerSignature = (await ConnectionController?.estimateGas({ chainNamespace: "solana" }))?.toString();
					return {
						standard: lamportsPerSignature,
						fast: lamportsPerSignature,
						instant: lamportsPerSignature
					};
				case "eip155":
				default: return await BlockchainApiController.fetchGasPrice({ chainId: caipNetwork.caipNetworkId });
			}
		} catch {
			return null;
		}
	},
	async fetchSwapAllowance({ tokenAddress, userAddress, sourceTokenAmount, sourceTokenDecimals }) {
		const response = await BlockchainApiController.fetchSwapAllowance({
			tokenAddress,
			userAddress
		});
		if (response?.allowance && sourceTokenAmount && sourceTokenDecimals) {
			const parsedValue = ConnectionController.parseUnits(sourceTokenAmount, sourceTokenDecimals) || 0;
			return BigInt(response.allowance) >= parsedValue;
		}
		return false;
	},
	async getMyTokensWithBalance(forceUpdate) {
		const balances = await BalanceUtil.getMyTokensWithBalance({
			forceUpdate,
			caipNetwork: ChainController.state.activeCaipNetwork,
			address: ChainController.getAccountData()?.address
		});
		ChainController.setAccountProp("tokenBalance", balances, ChainController.state.activeChain);
		return this.mapBalancesToSwapTokens(balances);
	},
	mapBalancesToSwapTokens(balances) {
		return balances?.map((token) => ({
			...token,
			address: token?.address ? token.address : getActiveNetworkTokenAddress(),
			decimals: parseInt(token.quantity.decimals, 10),
			logoUri: token.iconUrl,
			eip2612: false
		})) || [];
	},
	async handleSwapError(error) {
		try {
			const cause = error?.cause;
			if (!cause?.json) return;
			if (((await cause.json())?.reasons?.[0]?.description)?.includes("insufficient liquidity")) return "Insufficient liquidity";
			return;
		} catch {
			return;
		}
	}
};
var state$2 = proxy({
	tokenBalances: [],
	loading: false
});
const SendController = withErrorBoundary({
	state: state$2,
	subscribe(callback) {
		return subscribe(state$2, () => callback(state$2));
	},
	subscribeKey(key, callback) {
		return subscribeKey(state$2, key, callback);
	},
	setToken(token) {
		if (token) state$2.token = ref(token);
	},
	setTokenAmount(sendTokenAmount) {
		state$2.sendTokenAmount = sendTokenAmount;
	},
	setReceiverAddress(receiverAddress) {
		state$2.receiverAddress = receiverAddress;
	},
	setReceiverProfileImageUrl(receiverProfileImageUrl) {
		state$2.receiverProfileImageUrl = receiverProfileImageUrl;
	},
	setReceiverProfileName(receiverProfileName) {
		state$2.receiverProfileName = receiverProfileName;
	},
	setNetworkBalanceInUsd(networkBalanceInUSD) {
		state$2.networkBalanceInUSD = networkBalanceInUSD;
	},
	setLoading(loading) {
		state$2.loading = loading;
	},
	getSdkEventProperties(error) {
		return {
			message: CoreHelperUtil.parseError(error),
			isSmartAccount: getPreferredAccountType(ChainController.state.activeChain) === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
			token: state$2.token?.symbol || "",
			amount: state$2.sendTokenAmount ?? 0,
			network: ChainController.state.activeCaipNetwork?.caipNetworkId || ""
		};
	},
	async sendToken() {
		try {
			SendController.setLoading(true);
			switch (ChainController.state.activeCaipNetwork?.chainNamespace) {
				case "eip155":
					await SendController.sendEvmToken();
					return;
				case "solana":
					await SendController.sendSolanaToken();
					return;
				default: throw new Error("Unsupported chain");
			}
		} catch (err) {
			if (ErrorUtil.isUserRejectedRequestError(err)) throw new UserRejectedRequestError(err);
			throw err;
		} finally {
			SendController.setLoading(false);
		}
	},
	async sendEvmToken() {
		const activeChainNamespace = ChainController.state.activeChain;
		if (!activeChainNamespace) throw new Error("SendController:sendEvmToken - activeChainNamespace is required");
		const activeAccountType = getPreferredAccountType(activeChainNamespace);
		if (!SendController.state.sendTokenAmount || !SendController.state.receiverAddress) throw new Error("An amount and receiver address are required");
		if (!SendController.state.token) throw new Error("A token is required");
		if (SendController.state.token?.address) {
			EventsController.sendEvent({
				type: "track",
				event: "SEND_INITIATED",
				properties: {
					isSmartAccount: activeAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
					token: SendController.state.token.address,
					amount: SendController.state.sendTokenAmount,
					network: ChainController.state.activeCaipNetwork?.caipNetworkId || ""
				}
			});
			const { hash } = await SendController.sendERC20Token({
				receiverAddress: SendController.state.receiverAddress,
				tokenAddress: SendController.state.token.address,
				sendTokenAmount: SendController.state.sendTokenAmount,
				decimals: SendController.state.token.quantity.decimals
			});
			if (hash) state$2.hash = hash;
		} else {
			EventsController.sendEvent({
				type: "track",
				event: "SEND_INITIATED",
				properties: {
					isSmartAccount: activeAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
					token: SendController.state.token.symbol || "",
					amount: SendController.state.sendTokenAmount,
					network: ChainController.state.activeCaipNetwork?.caipNetworkId || ""
				}
			});
			const { hash } = await SendController.sendNativeToken({
				receiverAddress: SendController.state.receiverAddress,
				sendTokenAmount: SendController.state.sendTokenAmount,
				decimals: SendController.state.token.quantity.decimals
			});
			if (hash) state$2.hash = hash;
		}
	},
	async fetchTokenBalance(onError) {
		state$2.loading = true;
		const namespace = ChainController.state.activeChain;
		const chainId = ChainController.state.activeCaipNetwork?.caipNetworkId;
		const chain = ChainController.state.activeCaipNetwork?.chainNamespace;
		const caipAddress = ChainController.getAccountData(namespace)?.caipAddress ?? ChainController.state.activeCaipAddress;
		const address = caipAddress ? CoreHelperUtil.getPlainAddress(caipAddress) : void 0;
		if (state$2.lastRetry && !CoreHelperUtil.isAllowedRetry(state$2.lastRetry, 30 * ConstantsUtil$1.ONE_SEC_MS)) {
			state$2.loading = false;
			return [];
		}
		try {
			if (address && chainId && chain) {
				const balances = await BalanceUtil.getMyTokensWithBalance();
				state$2.tokenBalances = balances;
				state$2.lastRetry = void 0;
				return balances;
			}
		} catch (error) {
			state$2.lastRetry = Date.now();
			onError?.(error);
			SnackController.showError("Token Balance Unavailable");
		} finally {
			state$2.loading = false;
		}
		return [];
	},
	fetchNetworkBalance() {
		if (state$2.tokenBalances.length === 0) return;
		const networkTokenBalances = SwapApiUtil.mapBalancesToSwapTokens(state$2.tokenBalances);
		if (!networkTokenBalances) return;
		const networkToken = networkTokenBalances.find((token) => token.address === getActiveNetworkTokenAddress());
		if (!networkToken) return;
		state$2.networkBalanceInUSD = networkToken ? NumberUtil.multiply(networkToken.quantity.numeric, networkToken.price).toString() : "0";
	},
	async sendNativeToken(params) {
		RouterController.pushTransactionStack({});
		const to = params.receiverAddress;
		const address = ChainController.getAccountData()?.address;
		const value = ConnectionController.parseUnits(params.sendTokenAmount.toString(), Number(params.decimals));
		const hash = await ConnectionController.sendTransaction({
			chainNamespace: ConstantsUtil.CHAIN.EVM,
			to,
			address,
			data: "0x",
			value: value ?? BigInt(0)
		});
		EventsController.sendEvent({
			type: "track",
			event: "SEND_SUCCESS",
			properties: {
				isSmartAccount: getPreferredAccountType("eip155") === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
				token: SendController.state.token?.symbol || "",
				amount: params.sendTokenAmount,
				network: ChainController.state.activeCaipNetwork?.caipNetworkId || "",
				hash: hash || ""
			}
		});
		ConnectionController._getClient()?.updateBalance("eip155");
		SendController.resetSend();
		return { hash };
	},
	async sendERC20Token(params) {
		RouterController.pushTransactionStack({ onSuccess() {
			RouterController.replace("Account");
		} });
		const amount = ConnectionController.parseUnits(params.sendTokenAmount.toString(), Number(params.decimals));
		const address = ChainController.getAccountData()?.address;
		if (address && params.sendTokenAmount && params.receiverAddress && params.tokenAddress) {
			const tokenAddress = CoreHelperUtil.getPlainAddress(params.tokenAddress);
			if (!tokenAddress) throw new Error("SendController:sendERC20Token - tokenAddress is required");
			const hash = await ConnectionController.writeContract({
				fromAddress: address,
				tokenAddress,
				args: [params.receiverAddress, amount ?? BigInt(0)],
				method: "transfer",
				abi: ContractUtil.getERC20Abi(tokenAddress),
				chainNamespace: ConstantsUtil.CHAIN.EVM
			});
			EventsController.sendEvent({
				type: "track",
				event: "SEND_SUCCESS",
				properties: {
					isSmartAccount: getPreferredAccountType("eip155") === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
					token: SendController.state.token?.symbol || "",
					amount: params.sendTokenAmount,
					network: ChainController.state.activeCaipNetwork?.caipNetworkId || "",
					hash: hash || ""
				}
			});
			SendController.resetSend();
			return { hash };
		}
		return { hash: void 0 };
	},
	async sendSolanaToken() {
		if (!SendController.state.sendTokenAmount || !SendController.state.receiverAddress) throw new Error("An amount and receiver address are required");
		RouterController.pushTransactionStack({ onSuccess() {
			RouterController.replace("Account");
		} });
		let tokenMint = void 0;
		if (SendController.state.token && SendController.state.token.address !== ConstantsUtil$1.SOLANA_NATIVE_TOKEN_ADDRESS) if (CoreHelperUtil.isCaipAddress(SendController.state.token.address)) tokenMint = CoreHelperUtil.getPlainAddress(SendController.state.token.address);
		else tokenMint = SendController.state.token.address;
		const hash = await ConnectionController.sendTransaction({
			chainNamespace: "solana",
			tokenMint,
			to: SendController.state.receiverAddress,
			value: SendController.state.sendTokenAmount
		});
		if (hash) state$2.hash = hash;
		ConnectionController._getClient()?.updateBalance("solana");
		EventsController.sendEvent({
			type: "track",
			event: "SEND_SUCCESS",
			properties: {
				isSmartAccount: false,
				token: SendController.state.token?.symbol || "",
				amount: SendController.state.sendTokenAmount,
				network: ChainController.state.activeCaipNetwork?.caipNetworkId || "",
				hash: hash || ""
			}
		});
		SendController.resetSend();
	},
	resetSend() {
		state$2.token = void 0;
		state$2.sendTokenAmount = void 0;
		state$2.receiverAddress = void 0;
		state$2.receiverProfileImageUrl = void 0;
		state$2.receiverProfileName = void 0;
		state$2.loading = false;
		state$2.tokenBalances = [];
	}
});
var defaultAccountState = {
	currentTab: 0,
	tokenBalance: [],
	smartAccountDeployed: false,
	addressLabels: /* @__PURE__ */ new Map(),
	user: void 0,
	preferredAccountType: void 0
};
var networkState = {
	caipNetwork: void 0,
	supportsAllNetworks: true,
	smartAccountEnabledNetworks: []
};
var state$1 = proxy({
	chains: proxyMap(),
	activeCaipAddress: void 0,
	activeChain: void 0,
	activeCaipNetwork: void 0,
	noAdapters: false,
	universalAdapter: { connectionControllerClient: void 0 },
	isSwitchingNamespace: false
});
var controller = {
	state: state$1,
	subscribe(callback) {
		return subscribe(state$1, () => {
			callback(state$1);
		});
	},
	subscribeKey(key, callback) {
		return subscribeKey(state$1, key, callback);
	},
	subscribeAccountStateProp(property, callback, chain) {
		const activeChain = chain || state$1.activeChain;
		if (!activeChain) return () => void 0;
		return subscribeKey(state$1.chains.get(activeChain)?.accountState || {}, property, callback);
	},
	subscribeChainProp(property, callback, chain) {
		let prev = void 0;
		return subscribe(state$1.chains, () => {
			const activeChain = chain || state$1.activeChain;
			if (activeChain) {
				const nextValue = state$1.chains.get(activeChain)?.[property];
				if (prev !== nextValue) {
					prev = nextValue;
					callback(nextValue);
				}
			}
		});
	},
	initialize(adapters, caipNetworks, clients) {
		const { chainId: activeChainId, namespace: activeNamespace } = StorageUtil.getActiveNetworkProps();
		const activeCaipNetwork = caipNetworks?.find((network) => network.id.toString() === activeChainId?.toString());
		const adapterToActivate = adapters.find((adapter) => adapter?.namespace === activeNamespace) || adapters?.[0];
		const namespacesFromAdapters = adapters.map((a) => a.namespace).filter((n) => n !== void 0);
		const namespaces = OptionsController.state.enableEmbedded ? new Set([...namespacesFromAdapters]) : new Set([...caipNetworks?.map((network) => network.chainNamespace) ?? []]);
		if (adapters?.length === 0 || !adapterToActivate) state$1.noAdapters = true;
		if (!state$1.noAdapters) {
			state$1.activeChain = adapterToActivate?.namespace;
			state$1.activeCaipNetwork = activeCaipNetwork;
			ChainController.setChainNetworkData(adapterToActivate?.namespace, { caipNetwork: activeCaipNetwork });
			if (state$1.activeChain) PublicStateController.set({ activeChain: adapterToActivate?.namespace });
		}
		namespaces.forEach((namespace) => {
			const namespaceNetworks = caipNetworks?.filter((network) => network.chainNamespace === namespace);
			const storedAccountTypes = StorageUtil.getPreferredAccountTypes() || {};
			const defaultTypes = {
				...OptionsController.state.defaultAccountTypes,
				...storedAccountTypes
			};
			ChainController.state.chains.set(namespace, {
				namespace,
				networkState: proxy({
					...networkState,
					caipNetwork: namespaceNetworks?.[0]
				}),
				accountState: proxy({
					...defaultAccountState,
					preferredAccountType: defaultTypes[namespace]
				}),
				caipNetworks: namespaceNetworks ?? [],
				...clients
			});
			ChainController.setRequestedCaipNetworks(namespaceNetworks ?? [], namespace);
		});
	},
	removeAdapter(namespace) {
		if (state$1.activeChain === namespace) {
			const nextAdapter = Array.from(state$1.chains.entries()).find(([chainNamespace]) => chainNamespace !== namespace);
			if (nextAdapter) {
				const caipNetwork = nextAdapter[1]?.caipNetworks?.[0];
				if (caipNetwork) ChainController.setActiveCaipNetwork(caipNetwork);
			}
		}
		state$1.chains.delete(namespace);
	},
	addAdapter(adapter, { connectionControllerClient }, caipNetworks) {
		if (!adapter.namespace) throw new Error("ChainController:addAdapter - adapter must have a namespace");
		state$1.chains.set(adapter.namespace, {
			namespace: adapter.namespace,
			networkState: {
				...networkState,
				caipNetwork: caipNetworks[0]
			},
			accountState: { ...defaultAccountState },
			caipNetworks,
			connectionControllerClient
		});
		ChainController.setRequestedCaipNetworks(caipNetworks?.filter((caipNetwork) => caipNetwork.chainNamespace === adapter.namespace) ?? [], adapter.namespace);
	},
	addNetwork(network) {
		const chainAdapter = state$1.chains.get(network.chainNamespace);
		if (chainAdapter) {
			const newNetworks = [...chainAdapter.caipNetworks || []];
			if (!chainAdapter.caipNetworks?.find((caipNetwork) => caipNetwork.id === network.id)) newNetworks.push(network);
			state$1.chains.set(network.chainNamespace, {
				...chainAdapter,
				caipNetworks: newNetworks
			});
			ChainController.setRequestedCaipNetworks(newNetworks, network.chainNamespace);
			ConnectorController.filterByNamespace(network.chainNamespace, true);
		}
	},
	removeNetwork(namespace, networkId) {
		const chainAdapter = state$1.chains.get(namespace);
		if (chainAdapter) {
			const isActiveNetwork = state$1.activeCaipNetwork?.id === networkId;
			const newCaipNetworksOfAdapter = [...chainAdapter.caipNetworks?.filter((network) => network.id !== networkId) || []];
			if (isActiveNetwork && chainAdapter?.caipNetworks?.[0]) ChainController.setActiveCaipNetwork(chainAdapter.caipNetworks[0]);
			state$1.chains.set(namespace, {
				...chainAdapter,
				caipNetworks: newCaipNetworksOfAdapter
			});
			ChainController.setRequestedCaipNetworks(newCaipNetworksOfAdapter || [], namespace);
			if (newCaipNetworksOfAdapter.length === 0) ConnectorController.filterByNamespace(namespace, false);
		}
	},
	setAdapterNetworkState(chain, props) {
		const chainAdapter = state$1.chains.get(chain);
		if (chainAdapter) {
			chainAdapter.networkState = {
				...chainAdapter.networkState || networkState,
				...props
			};
			state$1.chains.set(chain, chainAdapter);
		}
	},
	setChainAccountData(chain, accountProps, _unknown = true) {
		if (!chain) throw new Error("Chain is required to update chain account data");
		const chainAdapter = state$1.chains.get(chain);
		if (chainAdapter) {
			const newAccountState = {
				...chainAdapter.accountState || defaultAccountState,
				...accountProps
			};
			state$1.chains.set(chain, {
				...chainAdapter,
				accountState: newAccountState
			});
			if (state$1.chains.size === 1 || state$1.activeChain === chain) {
				if (accountProps.caipAddress) state$1.activeCaipAddress = accountProps.caipAddress;
			}
		}
	},
	setChainNetworkData(chain, networkProps) {
		if (!chain) return;
		const chainAdapter = state$1.chains.get(chain);
		if (chainAdapter) {
			const newNetworkState = {
				...chainAdapter.networkState || networkState,
				...networkProps
			};
			state$1.chains.set(chain, {
				...chainAdapter,
				networkState: newNetworkState
			});
		}
	},
	setAccountProp(prop, value, chain, replaceState = true) {
		ChainController.setChainAccountData(chain, { [prop]: value }, replaceState);
	},
	setActiveNamespace(chain) {
		state$1.activeChain = chain;
		const newAdapter = chain ? state$1.chains.get(chain) : void 0;
		const caipNetwork = newAdapter?.networkState?.caipNetwork;
		if (caipNetwork?.id && chain) {
			state$1.activeCaipAddress = newAdapter?.accountState?.caipAddress;
			state$1.activeCaipNetwork = caipNetwork;
			ChainController.setChainNetworkData(chain, { caipNetwork });
			StorageUtil.setActiveCaipNetworkId(caipNetwork?.caipNetworkId);
			PublicStateController.set({
				activeChain: chain,
				selectedNetworkId: caipNetwork?.caipNetworkId
			});
		}
	},
	setActiveCaipNetwork(caipNetwork) {
		if (!caipNetwork) return;
		const isSameNamespace = state$1.activeChain === caipNetwork.chainNamespace;
		if (!isSameNamespace) ChainController.setIsSwitchingNamespace(true);
		const newAdapter = state$1.chains.get(caipNetwork.chainNamespace);
		state$1.activeChain = caipNetwork.chainNamespace;
		state$1.activeCaipNetwork = caipNetwork;
		ChainController.setChainNetworkData(caipNetwork.chainNamespace, { caipNetwork });
		let address = newAdapter?.accountState?.address;
		if (address) state$1.activeCaipAddress = `${caipNetwork.chainNamespace}:${caipNetwork.id}:${address}`;
		else if (isSameNamespace && state$1.activeCaipAddress) {
			const { address: parsedAddress } = ParseUtil.parseCaipAddress(state$1.activeCaipAddress);
			address = parsedAddress;
			state$1.activeCaipAddress = `${caipNetwork.caipNetworkId}:${address}`;
		} else state$1.activeCaipAddress = void 0;
		ChainController.setChainAccountData(caipNetwork.chainNamespace, {
			address,
			caipAddress: state$1.activeCaipAddress
		});
		SendController.resetSend();
		PublicStateController.set({
			activeChain: state$1.activeChain,
			selectedNetworkId: state$1.activeCaipNetwork?.caipNetworkId
		});
		StorageUtil.setActiveCaipNetworkId(caipNetwork.caipNetworkId);
		if (!ChainController.checkIfSupportedNetwork(caipNetwork.chainNamespace) && OptionsController.state.enableNetworkSwitch && !OptionsController.state.allowUnsupportedChain && !ConnectionController.state.wcBasic) ChainController.showUnsupportedChainUI();
	},
	addCaipNetwork(caipNetwork) {
		if (!caipNetwork) return;
		const chain = state$1.chains.get(caipNetwork.chainNamespace);
		if (chain) chain?.caipNetworks?.push(caipNetwork);
	},
	async switchActiveNamespace(namespace) {
		if (!namespace) return;
		const isDifferentChain = namespace !== ChainController.state.activeChain;
		const caipNetworkOfNamespace = ChainController.getNetworkData(namespace)?.caipNetwork;
		const firstNetworkWithChain = ChainController.getCaipNetworkByNamespace(namespace, caipNetworkOfNamespace?.id);
		if (isDifferentChain && firstNetworkWithChain) await ChainController.switchActiveNetwork(firstNetworkWithChain);
	},
	async switchActiveNetwork(network, { throwOnFailure = false } = {}) {
		const namespace = ChainController.state.activeChain;
		if (!namespace) throw new Error("ChainController:switchActiveNetwork - namespace is required");
		const isAuthProvider = ProviderController.getProviderId(state$1.activeChain) === "AUTH";
		const namespaceAddress = ChainController.getAccountData(namespace)?.address;
		const isAuthSupported = ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(network.chainNamespace);
		try {
			if (namespaceAddress && network.chainNamespace === namespace || isAuthProvider && isAuthSupported) {
				const adapter = AdapterController.get(network.chainNamespace);
				if (!adapter) throw new Error("Adapter not found");
				await adapter.switchNetwork({ caipNetwork: network });
			}
			ChainController.setActiveCaipNetwork(network);
		} catch (error) {
			if (throwOnFailure) throw error;
		}
		EventsController.sendEvent({
			type: "track",
			event: "SWITCH_NETWORK",
			properties: { network: network.caipNetworkId }
		});
	},
	getConnectionControllerClient(_chain) {
		const chain = _chain || state$1.activeChain;
		if (!chain) throw new Error("Chain is required to get connection controller client");
		const chainAdapter = state$1.chains.get(chain);
		if (!chainAdapter?.connectionControllerClient) throw new Error("ConnectionController client not set");
		return chainAdapter.connectionControllerClient;
	},
	getNetworkProp(key, namespace) {
		const chainNetworkState = state$1.chains.get(namespace)?.networkState;
		if (!chainNetworkState) return;
		return chainNetworkState[key];
	},
	getRequestedCaipNetworks(chainToFilter) {
		const { approvedCaipNetworkIds = [], requestedCaipNetworks = [] } = state$1.chains.get(chainToFilter)?.networkState || {};
		return CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks).filter((network) => network?.id);
	},
	getAllRequestedCaipNetworks() {
		const requestedCaipNetworks = [];
		state$1.chains.forEach((chainAdapter) => {
			if (!chainAdapter.namespace) throw new Error("ChainController:getAllRequestedCaipNetworks - chainAdapter must have a namespace");
			const caipNetworks = ChainController.getRequestedCaipNetworks(chainAdapter.namespace);
			requestedCaipNetworks.push(...caipNetworks);
		});
		return requestedCaipNetworks;
	},
	setRequestedCaipNetworks(caipNetworks, chain) {
		ChainController.setAdapterNetworkState(chain, { requestedCaipNetworks: caipNetworks });
		const namespaces = ChainController.getAllRequestedCaipNetworks().map((network) => network.chainNamespace);
		const uniqueNamespaces = Array.from(new Set(namespaces));
		ConnectorController.filterByNamespaces(uniqueNamespaces);
	},
	getAllApprovedCaipNetworkIds() {
		const approvedCaipNetworkIds = [];
		state$1.chains.forEach((chainAdapter) => {
			if (!chainAdapter.namespace) throw new Error("ChainController:getAllApprovedCaipNetworkIds - chainAdapter must have a namespace");
			const approvedIds = ChainController.getApprovedCaipNetworkIds(chainAdapter.namespace);
			approvedCaipNetworkIds.push(...approvedIds);
		});
		return approvedCaipNetworkIds;
	},
	getActiveCaipNetwork(chainNamespace) {
		if (chainNamespace) return state$1.chains.get(chainNamespace)?.networkState?.caipNetwork;
		return state$1.activeCaipNetwork;
	},
	getActiveCaipAddress() {
		return state$1.activeCaipAddress;
	},
	getApprovedCaipNetworkIds(namespace) {
		return state$1.chains.get(namespace)?.networkState?.approvedCaipNetworkIds || [];
	},
	setApprovedCaipNetworksData(namespace, params) {
		ChainController.setAdapterNetworkState(namespace, params);
	},
	checkIfSupportedNetwork(namespace, caipNetworkId) {
		const activeCaipNetworkId = caipNetworkId || state$1.activeCaipNetwork?.caipNetworkId;
		const requestedCaipNetworks = ChainController.getRequestedCaipNetworks(namespace);
		if (!requestedCaipNetworks.length) return true;
		return requestedCaipNetworks?.some((network) => network.caipNetworkId === activeCaipNetworkId);
	},
	checkIfSupportedChainId(chainId) {
		if (!state$1.activeChain) return true;
		return ChainController.getRequestedCaipNetworks(state$1.activeChain)?.some((network) => network.id === chainId);
	},
	checkIfSmartAccountEnabled() {
		const networkId = NetworkUtil.caipNetworkIdToNumber(state$1.activeCaipNetwork?.caipNetworkId);
		if (!state$1.activeChain || !networkId) return false;
		const smartAccountEnabledNetworks = W3mFrameStorage.get(W3mFrameConstants.SMART_ACCOUNT_ENABLED_NETWORKS)?.split(",") || [];
		return Boolean(smartAccountEnabledNetworks?.includes(networkId.toString()));
	},
	showUnsupportedChainUI() {
		ModalController.open({ view: "UnsupportedChain" });
	},
	checkIfNamesSupported() {
		const activeCaipNetwork = state$1.activeCaipNetwork;
		return Boolean(activeCaipNetwork?.chainNamespace && ConstantsUtil$1.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(activeCaipNetwork.chainNamespace));
	},
	resetNetwork(namespace) {
		ChainController.setAdapterNetworkState(namespace, {
			approvedCaipNetworkIds: void 0,
			supportsAllNetworks: true
		});
	},
	resetAccount(chain) {
		const chainToWrite = chain;
		if (!chainToWrite) throw new Error("Chain is required to set account prop");
		const currentAccountType = ChainController.state.chains.get(chainToWrite)?.accountState?.preferredAccountType;
		const optionsAccountType = OptionsController.state.defaultAccountTypes[chainToWrite];
		state$1.activeCaipAddress = void 0;
		ChainController.setChainAccountData(chainToWrite, {
			smartAccountDeployed: false,
			currentTab: 0,
			caipAddress: void 0,
			address: void 0,
			balance: void 0,
			balanceSymbol: void 0,
			profileName: void 0,
			profileImage: void 0,
			addressExplorerUrl: void 0,
			tokenBalance: [],
			connectedWalletInfo: void 0,
			preferredAccountType: optionsAccountType || currentAccountType,
			socialProvider: void 0,
			socialWindow: void 0,
			farcasterUrl: void 0,
			user: void 0,
			status: "disconnected"
		});
		ConnectorController.removeConnectorId(chainToWrite);
	},
	setIsSwitchingNamespace(isSwitchingNamespace) {
		state$1.isSwitchingNamespace = isSwitchingNamespace;
	},
	getFirstCaipNetworkSupportsAuthConnector() {
		const availableChains = [];
		let firstCaipNetwork = void 0;
		state$1.chains.forEach((chain) => {
			if (ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((ns) => ns === chain.namespace)) {
				if (chain.namespace) availableChains.push(chain.namespace);
			}
		});
		if (availableChains.length > 0) {
			const firstAvailableChain = availableChains[0];
			firstCaipNetwork = firstAvailableChain ? state$1.chains.get(firstAvailableChain)?.caipNetworks?.[0] : void 0;
			return firstCaipNetwork;
		}
	},
	getAccountData(chainNamespace) {
		const namespace = chainNamespace || state$1.activeChain;
		if (!namespace) return;
		return ChainController.state.chains.get(namespace)?.accountState;
	},
	getNetworkData(chainNamespace) {
		const namespace = chainNamespace || state$1.activeChain;
		if (!namespace) return;
		return ChainController.state.chains.get(namespace)?.networkState;
	},
	getCaipNetworkByNamespace(chainNamespace, chainId) {
		if (!chainNamespace) return;
		const chain = ChainController.state.chains.get(chainNamespace);
		const byChainId = chain?.caipNetworks?.find((network) => network.id.toString() === chainId?.toString());
		if (byChainId) return byChainId;
		return chain?.networkState?.caipNetwork || chain?.caipNetworks?.[0];
	},
	getRequestedCaipNetworkIds() {
		const namespace = ConnectorController.state.filterByNamespace;
		return (namespace ? [state$1.chains.get(namespace)] : Array.from(state$1.chains.values())).flatMap((chain) => chain?.caipNetworks || []).map((caipNetwork) => caipNetwork.caipNetworkId);
	},
	getCaipNetworks(namespace) {
		if (namespace) return ChainController.getRequestedCaipNetworks(namespace);
		return ChainController.getAllRequestedCaipNetworks();
	},
	getCaipNetworkById(id, namespace) {
		return controller.getCaipNetworks(namespace).find((n) => n.id.toString() === id.toString() || n.caipNetworkId.toString() === id.toString());
	},
	setLastConnectedSIWECaipNetwork(network) {
		state$1.lastConnectedSIWECaipNetwork = network;
	},
	getLastConnectedSIWECaipNetwork() {
		return state$1.lastConnectedSIWECaipNetwork;
	},
	async fetchTokenBalance(onError) {
		const accountState = ChainController.getAccountData();
		if (!accountState) return [];
		const chainId = ChainController.state.activeCaipNetwork?.caipNetworkId;
		const chain = ChainController.state.activeCaipNetwork?.chainNamespace;
		const caipAddress = ChainController.state.activeCaipAddress;
		const address = caipAddress ? CoreHelperUtil.getPlainAddress(caipAddress) : void 0;
		ChainController.setAccountProp("balanceLoading", true, chain);
		if (accountState.lastRetry && !CoreHelperUtil.isAllowedRetry(accountState.lastRetry, 30 * ConstantsUtil$1.ONE_SEC_MS)) {
			ChainController.setAccountProp("balanceLoading", false, chain);
			return [];
		}
		try {
			if (address && chainId && chain) {
				const balance = await BalanceUtil.getMyTokensWithBalance();
				ChainController.setAccountProp("tokenBalance", balance, chain);
				ChainController.setAccountProp("lastRetry", void 0, chain);
				ChainController.setAccountProp("balanceLoading", false, chain);
				return balance;
			}
		} catch (error) {
			ChainController.setAccountProp("lastRetry", Date.now(), chain);
			onError?.(error);
			SnackController.showError("Token Balance Unavailable");
		} finally {
			ChainController.setAccountProp("balanceLoading", false, chain);
		}
		return [];
	},
	isCaipNetworkDisabled(network) {
		const networkNamespace = network.chainNamespace;
		const isNextNamespaceConnected = Boolean(ChainController.getAccountData(networkNamespace)?.caipAddress);
		const approvedCaipNetworkIds = ChainController.getAllApprovedCaipNetworkIds();
		const shouldSupportAllNetworks = ChainController.getNetworkProp("supportsAllNetworks", networkNamespace) !== false;
		const connectorId = ConnectorController.getConnectorId(networkNamespace);
		const authConnector = ConnectorController.getAuthConnector();
		const isConnectedWithAuth = connectorId === ConstantsUtil.CONNECTOR_ID.AUTH && authConnector;
		if (!isNextNamespaceConnected || shouldSupportAllNetworks || isConnectedWithAuth) return false;
		return !approvedCaipNetworkIds?.includes(network.caipNetworkId);
	}
};
const ChainController = withErrorBoundary(controller);
const CUSTOM_DEEPLINK_WALLETS = {
	PHANTOM: {
		id: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
		url: "https://phantom.app"
	},
	SOLFLARE: {
		id: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
		url: "https://solflare.com"
	},
	COINBASE: {
		id: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
		url: "https://go.cb-w.com"
	},
	BINANCE: {
		id: "2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25",
		appId: "yFK5FCqYprrXDiVFbhyRx7",
		deeplink: "bnc://app.binance.com/mp/app",
		url: "https://app.binance.com/en/download"
	}
};
const MobileWalletUtil = { handleMobileDeeplinkRedirect(id, namespace) {
	const href = window.location.href;
	const encodedHref = encodeURIComponent(href);
	if (id === CUSTOM_DEEPLINK_WALLETS.PHANTOM.id && !("phantom" in window)) {
		const protocol = href.startsWith("https") ? "https" : "http";
		const host = href.split("/")[2];
		const encodedRef = encodeURIComponent(`${protocol}://${host}`);
		window.location.href = `${CUSTOM_DEEPLINK_WALLETS.PHANTOM.url}/ul/browse/${encodedHref}?ref=${encodedRef}`;
	}
	if (id === CUSTOM_DEEPLINK_WALLETS.SOLFLARE.id && !("solflare" in window)) window.location.href = `${CUSTOM_DEEPLINK_WALLETS.SOLFLARE.url}/ul/v1/browse/${encodedHref}?ref=${encodedHref}`;
	if (namespace === ConstantsUtil.CHAIN.SOLANA) {
		if (id === CUSTOM_DEEPLINK_WALLETS.COINBASE.id && !("coinbaseSolana" in window)) window.location.href = `${CUSTOM_DEEPLINK_WALLETS.COINBASE.url}/dapp?cb_url=${encodedHref}`;
	}
	if (namespace === ConstantsUtil.CHAIN.BITCOIN) {
		if (id === CUSTOM_DEEPLINK_WALLETS.BINANCE.id && !("binancew3w" in window)) {
			const activeCaipNetwork = ChainController.state.activeCaipNetwork;
			const startPagePath = window.btoa("/pages/browser/index");
			const startPageQuery = window.btoa(`url=${encodedHref}&defaultChainId=${activeCaipNetwork?.id ?? 1}`);
			const deeplink = new URL(CUSTOM_DEEPLINK_WALLETS.BINANCE.deeplink);
			deeplink.searchParams.set("appId", CUSTOM_DEEPLINK_WALLETS.BINANCE.appId);
			deeplink.searchParams.set("startPagePath", startPagePath);
			deeplink.searchParams.set("startPageQuery", startPageQuery);
			const universalLink = new URL(CUSTOM_DEEPLINK_WALLETS.BINANCE.url);
			universalLink.searchParams.set("_dp", window.btoa(deeplink.toString()));
			window.location.href = universalLink.toString();
		}
	}
} };
const api = new FetchUtil({
	baseUrl: CoreHelperUtil.getApiUrl(),
	clientId: null
});
var entries = 40;
var recommendedEntries = 4;
var imageCountToFetch = 20;
var state = proxy({
	promises: {},
	page: 1,
	count: 0,
	featured: [],
	allFeatured: [],
	recommended: [],
	allRecommended: [],
	wallets: [],
	filteredWallets: [],
	search: [],
	isAnalyticsEnabled: false,
	excludedWallets: [],
	isFetchingRecommendedWallets: false,
	explorerWallets: [],
	explorerFilteredWallets: [],
	plan: {
		tier: "none",
		hasExceededUsageLimit: false,
		limits: {
			isAboveRpcLimit: false,
			isAboveMauLimit: false
		}
	}
});
const ApiController = {
	state,
	subscribeKey(key, callback) {
		return subscribeKey(state, key, callback);
	},
	_getSdkProperties() {
		const { projectId, sdkType, sdkVersion } = OptionsController.state;
		return {
			projectId,
			st: sdkType || "appkit",
			sv: sdkVersion || "html-wagmi-4.2.2"
		};
	},
	_filterOutExtensions(wallets) {
		if (OptionsController.state.isUniversalProvider) return wallets.filter((w) => Boolean(w.mobile_link || w.desktop_link || w.webapp_link));
		return wallets;
	},
	async _fetchWalletImage(imageId) {
		const imageUrl = `${api.baseUrl}/getWalletImage/${imageId}`;
		const blob = await api.getBlob({
			path: imageUrl,
			params: ApiController._getSdkProperties()
		});
		AssetController.setWalletImage(imageId, URL.createObjectURL(blob));
	},
	async _fetchNetworkImage(imageId) {
		const imageUrl = `${api.baseUrl}/public/getAssetImage/${imageId}`;
		const blob = await api.getBlob({
			path: imageUrl,
			params: ApiController._getSdkProperties()
		});
		AssetController.setNetworkImage(imageId, URL.createObjectURL(blob));
	},
	async _fetchConnectorImage(imageId) {
		const imageUrl = `${api.baseUrl}/public/getAssetImage/${imageId}`;
		const blob = await api.getBlob({
			path: imageUrl,
			params: ApiController._getSdkProperties()
		});
		AssetController.setConnectorImage(imageId, URL.createObjectURL(blob));
	},
	async _fetchCurrencyImage(countryCode) {
		const imageUrl = `${api.baseUrl}/public/getCurrencyImage/${countryCode}`;
		const blob = await api.getBlob({
			path: imageUrl,
			params: ApiController._getSdkProperties()
		});
		AssetController.setCurrencyImage(countryCode, URL.createObjectURL(blob));
	},
	async _fetchTokenImage(symbol) {
		const imageUrl = `${api.baseUrl}/public/getTokenImage/${symbol}`;
		const blob = await api.getBlob({
			path: imageUrl,
			params: ApiController._getSdkProperties()
		});
		AssetController.setTokenImage(symbol, URL.createObjectURL(blob));
	},
	_filterWalletsByPlatform(wallets) {
		const walletsLength = wallets.length;
		const filteredWallets = CoreHelperUtil.isMobile() ? wallets?.filter((w) => {
			if (w.mobile_link || w.webapp_link) return true;
			return Object.values(CUSTOM_DEEPLINK_WALLETS).map((wallet) => wallet.id).includes(w.id);
		}) : wallets;
		return {
			filteredWallets,
			mobileFilteredOutWalletsLength: walletsLength - filteredWallets.length
		};
	},
	async fetchProjectConfig() {
		return (await api.get({
			path: "/appkit/v1/config",
			params: ApiController._getSdkProperties()
		})).features;
	},
	async fetchUsage() {
		try {
			const { tier, isAboveMauLimit, isAboveRpcLimit } = (await api.get({
				path: "/appkit/v1/project-limits",
				params: ApiController._getSdkProperties()
			})).planLimits;
			const isStarterPlan = tier === "starter";
			const isAboveUsageLimit = isAboveMauLimit || isAboveRpcLimit;
			ApiController.state.plan = {
				tier,
				hasExceededUsageLimit: isStarterPlan && isAboveUsageLimit,
				limits: {
					isAboveRpcLimit,
					isAboveMauLimit
				}
			};
		} catch (e) {
			console.warn("Failed to fetch usage", e);
		}
	},
	async fetchAllowedOrigins() {
		try {
			const { allowedOrigins } = await api.get({
				path: "/projects/v1/origins",
				params: ApiController._getSdkProperties()
			});
			return allowedOrigins;
		} catch (error) {
			if (error instanceof Error && error.cause instanceof Response) {
				const status = error.cause.status;
				if (status === ConstantsUtil.HTTP_STATUS_CODES.TOO_MANY_REQUESTS) throw new Error("RATE_LIMITED", { cause: error });
				if (status >= ConstantsUtil.HTTP_STATUS_CODES.SERVER_ERROR && status < 600) throw new Error("SERVER_ERROR", { cause: error });
				return [];
			}
			return [];
		}
	},
	async fetchNetworkImages() {
		const ids = ChainController.getAllRequestedCaipNetworks()?.map(({ assets }) => assets?.imageId).filter(Boolean).filter((imageId) => !AssetUtil.getNetworkImageById(imageId));
		if (ids) await Promise.allSettled(ids.map((id) => ApiController._fetchNetworkImage(id)));
	},
	async fetchConnectorImages() {
		const { connectors } = ConnectorController.state;
		const ids = connectors.map(({ imageId }) => imageId).filter(Boolean);
		await Promise.allSettled(ids.map((id) => ApiController._fetchConnectorImage(id)));
	},
	async fetchCurrencyImages(currencies = []) {
		await Promise.allSettled(currencies.map((currency) => ApiController._fetchCurrencyImage(currency)));
	},
	async fetchTokenImages(tokens = []) {
		await Promise.allSettled(tokens.map((token) => ApiController._fetchTokenImage(token)));
	},
	async fetchWallets(params) {
		const exclude = params.exclude ?? [];
		if (ApiController._getSdkProperties().sv.startsWith("html-core-")) exclude.push(...Object.values(CUSTOM_DEEPLINK_WALLETS).map((w) => w.id));
		const wallets = await api.get({
			path: "/getWallets",
			params: {
				...ApiController._getSdkProperties(),
				...params,
				page: String(params.page),
				entries: String(params.entries),
				include: params.include?.join(","),
				exclude: exclude.join(",")
			}
		});
		const { filteredWallets, mobileFilteredOutWalletsLength } = ApiController._filterWalletsByPlatform(wallets?.data);
		return {
			data: filteredWallets || [],
			count: wallets?.count,
			mobileFilteredOutWalletsLength
		};
	},
	async prefetchWalletRanks() {
		const connectors = ConnectorController.state.connectors;
		if (!connectors?.length) return;
		const params = {
			page: 1,
			entries: 20,
			badge: "certified"
		};
		params.names = connectors.map((c) => c.name).join(",");
		if (ChainController.state.activeChain === ConstantsUtil.CHAIN.EVM) {
			const rdnsCandidates = [...connectors.flatMap((c) => c.connectors?.map((sc) => sc.info?.rdns) || []), ...connectors.map((c) => c.info?.rdns)].filter((val) => typeof val === "string" && val.length > 0);
			if (rdnsCandidates.length) params.rdns = rdnsCandidates.join(",");
		}
		const { data } = await ApiController.fetchWallets(params);
		state.explorerWallets = data;
		ConnectorController.extendConnectorsWithExplorerWallets(data);
		const caipNetworkIds = ChainController.getRequestedCaipNetworkIds().join(",");
		state.explorerFilteredWallets = data.filter((wallet) => wallet.chains?.some((chain) => caipNetworkIds.includes(chain)));
	},
	async fetchFeaturedWallets() {
		const { featuredWalletIds } = OptionsController.state;
		if (featuredWalletIds?.length) {
			const params = {
				...ApiController._getSdkProperties(),
				page: 1,
				entries: featuredWalletIds?.length ?? recommendedEntries,
				include: featuredWalletIds
			};
			const { data } = await ApiController.fetchWallets(params);
			const sortedData = [...data].sort((a, b) => featuredWalletIds.indexOf(a.id) - featuredWalletIds.indexOf(b.id));
			const images = sortedData.map((d) => d.image_id).filter(Boolean);
			await Promise.allSettled(images.map((id) => ApiController._fetchWalletImage(id)));
			state.featured = sortedData;
			state.allFeatured = sortedData;
		}
	},
	async fetchRecommendedWallets() {
		try {
			state.isFetchingRecommendedWallets = true;
			const { includeWalletIds, excludeWalletIds, featuredWalletIds } = OptionsController.state;
			const params = {
				page: 1,
				entries: recommendedEntries,
				include: includeWalletIds,
				exclude: [...excludeWalletIds ?? [], ...featuredWalletIds ?? []].filter(Boolean),
				chains: ChainController.getRequestedCaipNetworkIds().join(",")
			};
			const { data, count } = await ApiController.fetchWallets(params);
			const recent = StorageUtil.getRecentWallets();
			const recommendedImages = data.map((d) => d.image_id).filter(Boolean);
			const recentImages = recent.map((r) => r.image_id).filter(Boolean);
			await Promise.allSettled([...recommendedImages, ...recentImages].map((id) => ApiController._fetchWalletImage(id)));
			state.recommended = data;
			state.allRecommended = data;
			state.count = count ?? 0;
		} catch {} finally {
			state.isFetchingRecommendedWallets = false;
		}
	},
	async fetchWalletsByPage({ page }) {
		const { includeWalletIds, excludeWalletIds, featuredWalletIds } = OptionsController.state;
		const chains = ChainController.getRequestedCaipNetworkIds().join(",");
		const params = {
			page,
			entries,
			include: includeWalletIds,
			exclude: [
				...state.recommended.map(({ id }) => id),
				...excludeWalletIds ?? [],
				...featuredWalletIds ?? []
			].filter(Boolean),
			chains
		};
		const { data, count, mobileFilteredOutWalletsLength } = await ApiController.fetchWallets(params);
		state.mobileFilteredOutWalletsLength = mobileFilteredOutWalletsLength + (state.mobileFilteredOutWalletsLength ?? 0);
		const images = data.slice(0, imageCountToFetch).map((w) => w.image_id).filter(Boolean);
		await Promise.allSettled(images.map((id) => ApiController._fetchWalletImage(id)));
		state.wallets = CoreHelperUtil.uniqueBy([...state.wallets, ...ApiController._filterOutExtensions(data)], "id").filter((w) => w.chains?.some((chain) => chains.includes(chain)));
		state.count = count > state.count ? count : state.count;
		state.page = page;
	},
	async initializeExcludedWallets({ ids }) {
		const params = {
			page: 1,
			entries: ids.length,
			include: ids
		};
		const { data } = await ApiController.fetchWallets(params);
		if (data) data.forEach((wallet) => {
			state.excludedWallets.push({
				rdns: wallet.rdns,
				name: wallet.name
			});
		});
	},
	async searchWallet({ search, badge }) {
		const { includeWalletIds, excludeWalletIds } = OptionsController.state;
		const chains = ChainController.getRequestedCaipNetworkIds().join(",");
		state.search = [];
		const params = {
			page: 1,
			entries: 100,
			search: search?.trim(),
			badge_type: badge,
			include: includeWalletIds,
			exclude: excludeWalletIds,
			chains
		};
		const { data } = await ApiController.fetchWallets(params);
		EventsController.sendEvent({
			type: "track",
			event: "SEARCH_WALLET",
			properties: {
				badge: badge ?? "",
				search: search ?? ""
			}
		});
		const images = data.map((w) => w.image_id).filter(Boolean);
		await Promise.allSettled([...images.map((id) => ApiController._fetchWalletImage(id)), CoreHelperUtil.wait(300)]);
		state.search = ApiController._filterOutExtensions(data);
	},
	initPromise(key, fetchFn) {
		const existingPromise = state.promises[key];
		if (existingPromise) return existingPromise;
		return state.promises[key] = fetchFn();
	},
	prefetch({ fetchConnectorImages = true, fetchFeaturedWallets = true, fetchRecommendedWallets = true, fetchNetworkImages = true, fetchWalletRanks = true } = {}) {
		const promises = [
			fetchConnectorImages && ApiController.initPromise("connectorImages", ApiController.fetchConnectorImages),
			fetchFeaturedWallets && ApiController.initPromise("featuredWallets", ApiController.fetchFeaturedWallets),
			fetchRecommendedWallets && ApiController.initPromise("recommendedWallets", ApiController.fetchRecommendedWallets),
			fetchNetworkImages && ApiController.initPromise("networkImages", ApiController.fetchNetworkImages),
			fetchWalletRanks && ApiController.initPromise("walletRanks", ApiController.prefetchWalletRanks)
		].filter(Boolean);
		return Promise.allSettled(promises);
	},
	prefetchAnalyticsConfig() {
		if (OptionsController.state.features?.analytics) ApiController.fetchAnalyticsConfig();
	},
	async fetchAnalyticsConfig() {
		try {
			const { isAnalyticsEnabled } = await api.get({
				path: "/getAnalyticsConfig",
				params: ApiController._getSdkProperties()
			});
			OptionsController.setFeatures({ analytics: isAnalyticsEnabled });
		} catch (error) {
			OptionsController.setFeatures({ analytics: false });
		}
	},
	filterByNamespaces(namespaces) {
		if (!namespaces?.length) {
			state.featured = state.allFeatured;
			state.recommended = state.allRecommended;
			return;
		}
		const caipNetworkIds = ChainController.getRequestedCaipNetworkIds().join(",");
		state.featured = state.allFeatured.filter((wallet) => wallet.chains?.some((chain) => caipNetworkIds.includes(chain)));
		state.recommended = state.allRecommended.filter((wallet) => wallet.chains?.some((chain) => caipNetworkIds.includes(chain)));
		state.filteredWallets = state.wallets.filter((wallet) => wallet.chains?.some((chain) => caipNetworkIds.includes(chain)));
	},
	clearFilterByNamespaces() {
		state.filteredWallets = [];
	},
	setFilterByNamespace(namespace) {
		if (!namespace) {
			state.featured = state.allFeatured;
			state.recommended = state.allRecommended;
			return;
		}
		const caipNetworkIds = ChainController.getRequestedCaipNetworkIds().join(",");
		state.featured = state.allFeatured.filter((wallet) => wallet.chains?.some((chain) => caipNetworkIds.includes(chain)));
		state.recommended = state.allRecommended.filter((wallet) => wallet.chains?.some((chain) => caipNetworkIds.includes(chain)));
		state.filteredWallets = state.wallets.filter((wallet) => wallet.chains?.some((chain) => caipNetworkIds.includes(chain)));
	}
};
export { FetchUtil as A, SafeLocalStorageKeys as B, SnackController as C, AppKitError as D, AssetController as E, ONRAMP_PROVIDERS as F, ContractUtil as G, ErrorUtil as H, subscribeKey as I, ConstantsUtil as J, NumberUtil as K, proxy as L, StorageUtil as M, ConstantsUtil$1 as N, withErrorBoundary as O, MELD_PUBLIC_KEY as P, subscribe as R, BlockchainApiController as S, AssetUtil as T, UserRejectedRequestError as U, isSafe as V, ParseUtil as W, PublicStateController as _, ProviderController as a, ConnectorUtil as b, ConnectionController as c, getActiveNetworkTokenAddress as d, getNativeTokenAddress as f, ModalController as g, ThemeController as h, SwapApiUtil as i, CoreHelperUtil as j, OptionsController as k, ConnectionControllerUtil as l, ConnectorController as m, ChainController as n, AdapterController as o, getPreferredAccountType as p, NetworkUtil as q, SendController as r, BalanceUtil as s, ApiController as t, getActiveCaipNetwork as u, EventsController as v, W3mFrameRpcConstants as w, WalletUtil as x, RouterController as y, SafeLocalStorage as z };
