import { J as ConstantsUtil, M as StorageUtil, n as ChainController } from "./ApiController-uIQMCRNl.js";
import { n as ConstantsUtil$1 } from "./HelpersUtil-oYDVCyJR.js";
const PresetsUtil = {
	ConnectorExplorerIds: {
		[ConstantsUtil.CONNECTOR_ID.COINBASE]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
		[ConstantsUtil.CONNECTOR_ID.COINBASE_SDK]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
		[ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
		[ConstantsUtil.CONNECTOR_ID.SAFE]: "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
		[ConstantsUtil.CONNECTOR_ID.LEDGER]: "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",
		[ConstantsUtil.CONNECTOR_ID.OKX]: "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
		[ConstantsUtil$1.METMASK_CONNECTOR_NAME]: "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
		[ConstantsUtil$1.TRUST_CONNECTOR_NAME]: "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
		[ConstantsUtil$1.SOLFLARE_CONNECTOR_NAME]: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
		[ConstantsUtil$1.PHANTOM_CONNECTOR_NAME]: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
		[ConstantsUtil$1.COIN98_CONNECTOR_NAME]: "2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",
		[ConstantsUtil$1.MAGIC_EDEN_CONNECTOR_NAME]: "8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",
		[ConstantsUtil$1.BACKPACK_CONNECTOR_NAME]: "2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",
		[ConstantsUtil$1.BITGET_CONNECTOR_NAME]: "38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",
		[ConstantsUtil$1.FRONTIER_CONNECTOR_NAME]: "85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",
		[ConstantsUtil$1.XVERSE_CONNECTOR_NAME]: "2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",
		[ConstantsUtil$1.LEATHER_CONNECTOR_NAME]: "483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13",
		[ConstantsUtil$1.OKX_CONNECTOR_NAME]: "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
		[ConstantsUtil$1.BINANCE_CONNECTOR_NAME]: "2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25"
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
		[ConstantsUtil.CONNECTOR_ID.AUTH]: "AUTH",
		[ConstantsUtil$1.CONNECTOR_TYPE_AUTH]: "AUTH"
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
function isHex(value, { strict = true } = {}) {
	if (!value) return false;
	if (typeof value !== "string") return false;
	return strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith("0x");
}
function size$1(value) {
	if (isHex(value, { strict: false })) return Math.ceil((value.length - 2) / 2);
	return value.length;
}
const version = "2.44.4";
var errorConfig = {
	getDocsUrl: ({ docsBaseUrl, docsPath = "", docsSlug }) => docsPath ? `${docsBaseUrl ?? "https://viem.sh"}${docsPath}${docsSlug ? `#${docsSlug}` : ""}` : void 0,
	version: `viem@${version}`
};
var BaseError = class BaseError extends Error {
	constructor(shortMessage, args = {}) {
		const details = (() => {
			if (args.cause instanceof BaseError) return args.cause.details;
			if (args.cause?.message) return args.cause.message;
			return args.details;
		})();
		const docsPath = (() => {
			if (args.cause instanceof BaseError) return args.cause.docsPath || args.docsPath;
			return args.docsPath;
		})();
		const docsUrl = errorConfig.getDocsUrl?.({
			...args,
			docsPath
		});
		const message = [
			shortMessage || "An error occurred.",
			"",
			...args.metaMessages ? [...args.metaMessages, ""] : [],
			...docsUrl ? [`Docs: ${docsUrl}`] : [],
			...details ? [`Details: ${details}`] : [],
			...errorConfig.version ? [`Version: ${errorConfig.version}`] : []
		].join("\n");
		super(message, args.cause ? { cause: args.cause } : void 0);
		Object.defineProperty(this, "details", {
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
		Object.defineProperty(this, "metaMessages", {
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
		Object.defineProperty(this, "version", {
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
		this.details = details;
		this.docsPath = docsPath;
		this.metaMessages = args.metaMessages;
		this.name = args.name ?? this.name;
		this.shortMessage = shortMessage;
		this.version = version;
	}
	walk(fn) {
		return walk(this, fn);
	}
};
function walk(err, fn) {
	if (fn?.(err)) return err;
	if (err && typeof err === "object" && "cause" in err && err.cause !== void 0) return walk(err.cause, fn);
	return fn ? null : err;
}
var SizeExceedsPaddingSizeError = class extends BaseError {
	constructor({ size: size$2, targetSize, type }) {
		super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (${size$2}) exceeds padding size (${targetSize}).`, { name: "SizeExceedsPaddingSizeError" });
	}
};
function pad(hexOrBytes, { dir, size: size$2 = 32 } = {}) {
	if (typeof hexOrBytes === "string") return padHex(hexOrBytes, {
		dir,
		size: size$2
	});
	return padBytes(hexOrBytes, {
		dir,
		size: size$2
	});
}
function padHex(hex_, { dir, size: size$2 = 32 } = {}) {
	if (size$2 === null) return hex_;
	const hex = hex_.replace("0x", "");
	if (hex.length > size$2 * 2) throw new SizeExceedsPaddingSizeError({
		size: Math.ceil(hex.length / 2),
		targetSize: size$2,
		type: "hex"
	});
	return `0x${hex[dir === "right" ? "padEnd" : "padStart"](size$2 * 2, "0")}`;
}
function padBytes(bytes, { dir, size: size$2 = 32 } = {}) {
	if (size$2 === null) return bytes;
	if (bytes.length > size$2) throw new SizeExceedsPaddingSizeError({
		size: bytes.length,
		targetSize: size$2,
		type: "bytes"
	});
	const paddedBytes = new Uint8Array(size$2);
	for (let i = 0; i < size$2; i++) {
		const padEnd = dir === "right";
		paddedBytes[padEnd ? i : size$2 - i - 1] = bytes[padEnd ? i : bytes.length - i - 1];
	}
	return paddedBytes;
}
var SizeOverflowError = class extends BaseError {
	constructor({ givenSize, maxSize }) {
		super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`, { name: "SizeOverflowError" });
	}
};
function assertSize(hexOrBytes, { size: size$2 }) {
	if (size$1(hexOrBytes) > size$2) throw new SizeOverflowError({
		givenSize: size$1(hexOrBytes),
		maxSize: size$2
	});
}
var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, "0"));
function bytesToHex(value, opts = {}) {
	let string = "";
	for (let i = 0; i < value.length; i++) string += hexes[value[i]];
	const hex = `0x${string}`;
	if (typeof opts.size === "number") {
		assertSize(hex, { size: opts.size });
		return pad(hex, {
			dir: "right",
			size: opts.size
		});
	}
	return hex;
}
var encoder = /* @__PURE__ */ new TextEncoder();
function stringToHex(value_, opts = {}) {
	return bytesToHex(encoder.encode(value_), opts);
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
const stringify = (value, replacer, space) => JSON.stringify(value, (key, value_) => {
	const value$1 = typeof value_ === "bigint" ? value_.toString() : value_;
	return typeof replacer === "function" ? replacer(key, value$1) : value$1;
}, space);
const gweiUnits = {
	ether: -9,
	wei: 9
};
function formatUnits(value, decimals) {
	let display = value.toString();
	const negative = display.startsWith("-");
	if (negative) display = display.slice(1);
	display = display.padStart(decimals, "0");
	let [integer, fraction] = [display.slice(0, display.length - decimals), display.slice(display.length - decimals)];
	fraction = fraction.replace(/(0+)$/, "");
	return `${negative ? "-" : ""}${integer || "0"}${fraction ? `.${fraction}` : ""}`;
}
function formatGwei(wei, unit = "wei") {
	return formatUnits(wei, gweiUnits[unit]);
}
const getUrl = (url) => url;
var HttpRequestError = class extends BaseError {
	constructor({ body, cause, details, headers, status, url }) {
		super("HTTP request failed.", {
			cause,
			details,
			metaMessages: [
				status && `Status: ${status}`,
				`URL: ${getUrl(url)}`,
				body && `Request body: ${stringify(body)}`
			].filter(Boolean),
			name: "HttpRequestError"
		});
		Object.defineProperty(this, "body", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		Object.defineProperty(this, "headers", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		Object.defineProperty(this, "status", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		Object.defineProperty(this, "url", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		this.body = body;
		this.headers = headers;
		this.status = status;
		this.url = url;
	}
};
var RpcRequestError = class extends BaseError {
	constructor({ body, error, url }) {
		super("RPC Request failed.", {
			cause: error,
			details: error.message,
			metaMessages: [`URL: ${getUrl(url)}`, `Request body: ${stringify(body)}`],
			name: "RpcRequestError"
		});
		Object.defineProperty(this, "code", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		Object.defineProperty(this, "data", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		Object.defineProperty(this, "url", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		this.code = error.code;
		this.data = error.data;
		this.url = url;
	}
};
var TimeoutError = class extends BaseError {
	constructor({ body, url }) {
		super("The request took too long to respond.", {
			details: "The request timed out.",
			metaMessages: [`URL: ${getUrl(url)}`, `Request body: ${stringify(body)}`],
			name: "TimeoutError"
		});
		Object.defineProperty(this, "url", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		this.url = url;
	}
};
var unknownErrorCode = -1;
var RpcError = class extends BaseError {
	constructor(cause, { code, docsPath, metaMessages, name, shortMessage }) {
		super(shortMessage, {
			cause,
			docsPath,
			metaMessages: metaMessages || cause?.metaMessages,
			name: name || "RpcError"
		});
		Object.defineProperty(this, "code", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		this.name = name || cause.name;
		this.code = cause instanceof RpcRequestError ? cause.code : code ?? unknownErrorCode;
	}
};
var ProviderRpcError = class extends RpcError {
	constructor(cause, options) {
		super(cause, options);
		Object.defineProperty(this, "data", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		this.data = options.data;
	}
};
var ParseRpcError = class ParseRpcError extends RpcError {
	constructor(cause) {
		super(cause, {
			code: ParseRpcError.code,
			name: "ParseRpcError",
			shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
		});
	}
};
Object.defineProperty(ParseRpcError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32700
});
var InvalidRequestRpcError = class InvalidRequestRpcError extends RpcError {
	constructor(cause) {
		super(cause, {
			code: InvalidRequestRpcError.code,
			name: "InvalidRequestRpcError",
			shortMessage: "JSON is not a valid request object."
		});
	}
};
Object.defineProperty(InvalidRequestRpcError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32600
});
var MethodNotFoundRpcError = class MethodNotFoundRpcError extends RpcError {
	constructor(cause, { method } = {}) {
		super(cause, {
			code: MethodNotFoundRpcError.code,
			name: "MethodNotFoundRpcError",
			shortMessage: `The method${method ? ` "${method}"` : ""} does not exist / is not available.`
		});
	}
};
Object.defineProperty(MethodNotFoundRpcError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32601
});
var InvalidParamsRpcError = class InvalidParamsRpcError extends RpcError {
	constructor(cause) {
		super(cause, {
			code: InvalidParamsRpcError.code,
			name: "InvalidParamsRpcError",
			shortMessage: ["Invalid parameters were provided to the RPC method.", "Double check you have provided the correct parameters."].join("\n")
		});
	}
};
Object.defineProperty(InvalidParamsRpcError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32602
});
var InternalRpcError = class InternalRpcError extends RpcError {
	constructor(cause) {
		super(cause, {
			code: InternalRpcError.code,
			name: "InternalRpcError",
			shortMessage: "An internal error was received."
		});
	}
};
Object.defineProperty(InternalRpcError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32603
});
var InvalidInputRpcError = class InvalidInputRpcError extends RpcError {
	constructor(cause) {
		super(cause, {
			code: InvalidInputRpcError.code,
			name: "InvalidInputRpcError",
			shortMessage: ["Missing or invalid parameters.", "Double check you have provided the correct parameters."].join("\n")
		});
	}
};
Object.defineProperty(InvalidInputRpcError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32e3
});
var ResourceNotFoundRpcError = class ResourceNotFoundRpcError extends RpcError {
	constructor(cause) {
		super(cause, {
			code: ResourceNotFoundRpcError.code,
			name: "ResourceNotFoundRpcError",
			shortMessage: "Requested resource not found."
		});
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "ResourceNotFoundRpcError"
		});
	}
};
Object.defineProperty(ResourceNotFoundRpcError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32001
});
var ResourceUnavailableRpcError = class ResourceUnavailableRpcError extends RpcError {
	constructor(cause) {
		super(cause, {
			code: ResourceUnavailableRpcError.code,
			name: "ResourceUnavailableRpcError",
			shortMessage: "Requested resource not available."
		});
	}
};
Object.defineProperty(ResourceUnavailableRpcError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32002
});
var TransactionRejectedRpcError = class TransactionRejectedRpcError extends RpcError {
	constructor(cause) {
		super(cause, {
			code: TransactionRejectedRpcError.code,
			name: "TransactionRejectedRpcError",
			shortMessage: "Transaction creation failed."
		});
	}
};
Object.defineProperty(TransactionRejectedRpcError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32003
});
var MethodNotSupportedRpcError = class MethodNotSupportedRpcError extends RpcError {
	constructor(cause, { method } = {}) {
		super(cause, {
			code: MethodNotSupportedRpcError.code,
			name: "MethodNotSupportedRpcError",
			shortMessage: `Method${method ? ` "${method}"` : ""} is not supported.`
		});
	}
};
Object.defineProperty(MethodNotSupportedRpcError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32004
});
var LimitExceededRpcError = class LimitExceededRpcError extends RpcError {
	constructor(cause) {
		super(cause, {
			code: LimitExceededRpcError.code,
			name: "LimitExceededRpcError",
			shortMessage: "Request exceeds defined limit."
		});
	}
};
Object.defineProperty(LimitExceededRpcError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32005
});
var JsonRpcVersionUnsupportedError = class JsonRpcVersionUnsupportedError extends RpcError {
	constructor(cause) {
		super(cause, {
			code: JsonRpcVersionUnsupportedError.code,
			name: "JsonRpcVersionUnsupportedError",
			shortMessage: "Version of JSON-RPC protocol is not supported."
		});
	}
};
Object.defineProperty(JsonRpcVersionUnsupportedError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: -32006
});
var UserRejectedRequestError = class UserRejectedRequestError extends ProviderRpcError {
	constructor(cause) {
		super(cause, {
			code: UserRejectedRequestError.code,
			name: "UserRejectedRequestError",
			shortMessage: "User rejected the request."
		});
	}
};
Object.defineProperty(UserRejectedRequestError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: 4001
});
var UnauthorizedProviderError = class UnauthorizedProviderError extends ProviderRpcError {
	constructor(cause) {
		super(cause, {
			code: UnauthorizedProviderError.code,
			name: "UnauthorizedProviderError",
			shortMessage: "The requested method and/or account has not been authorized by the user."
		});
	}
};
Object.defineProperty(UnauthorizedProviderError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: 4100
});
var UnsupportedProviderMethodError = class UnsupportedProviderMethodError extends ProviderRpcError {
	constructor(cause, { method } = {}) {
		super(cause, {
			code: UnsupportedProviderMethodError.code,
			name: "UnsupportedProviderMethodError",
			shortMessage: `The Provider does not support the requested method${method ? ` " ${method}"` : ""}.`
		});
	}
};
Object.defineProperty(UnsupportedProviderMethodError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: 4200
});
var ProviderDisconnectedError = class ProviderDisconnectedError extends ProviderRpcError {
	constructor(cause) {
		super(cause, {
			code: ProviderDisconnectedError.code,
			name: "ProviderDisconnectedError",
			shortMessage: "The Provider is disconnected from all chains."
		});
	}
};
Object.defineProperty(ProviderDisconnectedError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: 4900
});
var ChainDisconnectedError = class ChainDisconnectedError extends ProviderRpcError {
	constructor(cause) {
		super(cause, {
			code: ChainDisconnectedError.code,
			name: "ChainDisconnectedError",
			shortMessage: "The Provider is not connected to the requested chain."
		});
	}
};
Object.defineProperty(ChainDisconnectedError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: 4901
});
var SwitchChainError = class SwitchChainError extends ProviderRpcError {
	constructor(cause) {
		super(cause, {
			code: SwitchChainError.code,
			name: "SwitchChainError",
			shortMessage: "An error occurred when attempting to switch chain."
		});
	}
};
Object.defineProperty(SwitchChainError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: 4902
});
var UnsupportedNonOptionalCapabilityError = class UnsupportedNonOptionalCapabilityError extends ProviderRpcError {
	constructor(cause) {
		super(cause, {
			code: UnsupportedNonOptionalCapabilityError.code,
			name: "UnsupportedNonOptionalCapabilityError",
			shortMessage: "This Wallet does not support a capability that was not marked as optional."
		});
	}
};
Object.defineProperty(UnsupportedNonOptionalCapabilityError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: 5700
});
var UnsupportedChainIdError = class UnsupportedChainIdError extends ProviderRpcError {
	constructor(cause) {
		super(cause, {
			code: UnsupportedChainIdError.code,
			name: "UnsupportedChainIdError",
			shortMessage: "This Wallet does not support the requested chain ID."
		});
	}
};
Object.defineProperty(UnsupportedChainIdError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: 5710
});
var DuplicateIdError = class DuplicateIdError extends ProviderRpcError {
	constructor(cause) {
		super(cause, {
			code: DuplicateIdError.code,
			name: "DuplicateIdError",
			shortMessage: "There is already a bundle submitted with this ID."
		});
	}
};
Object.defineProperty(DuplicateIdError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: 5720
});
var UnknownBundleIdError = class UnknownBundleIdError extends ProviderRpcError {
	constructor(cause) {
		super(cause, {
			code: UnknownBundleIdError.code,
			name: "UnknownBundleIdError",
			shortMessage: "This bundle id is unknown / has not been submitted"
		});
	}
};
Object.defineProperty(UnknownBundleIdError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: 5730
});
var BundleTooLargeError = class BundleTooLargeError extends ProviderRpcError {
	constructor(cause) {
		super(cause, {
			code: BundleTooLargeError.code,
			name: "BundleTooLargeError",
			shortMessage: "The call bundle is too large for the Wallet to process."
		});
	}
};
Object.defineProperty(BundleTooLargeError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: 5740
});
var AtomicReadyWalletRejectedUpgradeError = class AtomicReadyWalletRejectedUpgradeError extends ProviderRpcError {
	constructor(cause) {
		super(cause, {
			code: AtomicReadyWalletRejectedUpgradeError.code,
			name: "AtomicReadyWalletRejectedUpgradeError",
			shortMessage: "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade."
		});
	}
};
Object.defineProperty(AtomicReadyWalletRejectedUpgradeError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: 5750
});
var AtomicityNotSupportedError = class AtomicityNotSupportedError extends ProviderRpcError {
	constructor(cause) {
		super(cause, {
			code: AtomicityNotSupportedError.code,
			name: "AtomicityNotSupportedError",
			shortMessage: "The wallet does not support atomic execution but the request requires it."
		});
	}
};
Object.defineProperty(AtomicityNotSupportedError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: 5760
});
var UnknownRpcError = class extends RpcError {
	constructor(cause) {
		super(cause, {
			name: "UnknownRpcError",
			shortMessage: "An unknown RPC error occurred."
		});
	}
};
var ExecutionRevertedError = class extends BaseError {
	constructor({ cause, message } = {}) {
		const reason = message?.replace("execution reverted: ", "")?.replace("execution reverted", "");
		super(`Execution reverted ${reason ? `with reason: ${reason}` : "for an unknown reason"}.`, {
			cause,
			name: "ExecutionRevertedError"
		});
	}
};
Object.defineProperty(ExecutionRevertedError, "code", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: 3
});
Object.defineProperty(ExecutionRevertedError, "nodeMessage", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /execution reverted|gas required exceeds allowance/
});
var FeeCapTooHighError = class extends BaseError {
	constructor({ cause, maxFeePerGas } = {}) {
		super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei(maxFeePerGas)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
			cause,
			name: "FeeCapTooHighError"
		});
	}
};
Object.defineProperty(FeeCapTooHighError, "nodeMessage", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
var FeeCapTooLowError = class extends BaseError {
	constructor({ cause, maxFeePerGas } = {}) {
		super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei(maxFeePerGas)}` : ""} gwei) cannot be lower than the block base fee.`, {
			cause,
			name: "FeeCapTooLowError"
		});
	}
};
Object.defineProperty(FeeCapTooLowError, "nodeMessage", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
var NonceTooHighError = class extends BaseError {
	constructor({ cause, nonce } = {}) {
		super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ""}is higher than the next one expected.`, {
			cause,
			name: "NonceTooHighError"
		});
	}
};
Object.defineProperty(NonceTooHighError, "nodeMessage", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /nonce too high/
});
var NonceTooLowError = class extends BaseError {
	constructor({ cause, nonce } = {}) {
		super([`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ""}is lower than the current nonce of the account.`, "Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join("\n"), {
			cause,
			name: "NonceTooLowError"
		});
	}
};
Object.defineProperty(NonceTooLowError, "nodeMessage", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /nonce too low|transaction already imported|already known/
});
var NonceMaxValueError = class extends BaseError {
	constructor({ cause, nonce } = {}) {
		super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ""}exceeds the maximum allowed nonce.`, {
			cause,
			name: "NonceMaxValueError"
		});
	}
};
Object.defineProperty(NonceMaxValueError, "nodeMessage", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /nonce has max value/
});
var InsufficientFundsError = class extends BaseError {
	constructor({ cause } = {}) {
		super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join("\n"), {
			cause,
			metaMessages: [
				"This error could arise when the account does not have enough funds to:",
				" - pay for the total gas fee,",
				" - pay for the value to send.",
				" ",
				"The cost of the transaction is calculated as `gas * gas fee + value`, where:",
				" - `gas` is the amount of gas needed for transaction to execute,",
				" - `gas fee` is the gas fee,",
				" - `value` is the amount of ether to send to the recipient."
			],
			name: "InsufficientFundsError"
		});
	}
};
Object.defineProperty(InsufficientFundsError, "nodeMessage", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /insufficient funds|exceeds transaction sender account balance/
});
var IntrinsicGasTooHighError = class extends BaseError {
	constructor({ cause, gas } = {}) {
		super(`The amount of gas ${gas ? `(${gas}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`, {
			cause,
			name: "IntrinsicGasTooHighError"
		});
	}
};
Object.defineProperty(IntrinsicGasTooHighError, "nodeMessage", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /intrinsic gas too high|gas limit reached/
});
var IntrinsicGasTooLowError = class extends BaseError {
	constructor({ cause, gas } = {}) {
		super(`The amount of gas ${gas ? `(${gas}) ` : ""}provided for the transaction is too low.`, {
			cause,
			name: "IntrinsicGasTooLowError"
		});
	}
};
Object.defineProperty(IntrinsicGasTooLowError, "nodeMessage", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /intrinsic gas too low/
});
var TransactionTypeNotSupportedError = class extends BaseError {
	constructor({ cause }) {
		super("The transaction type is not supported for this chain.", {
			cause,
			name: "TransactionTypeNotSupportedError"
		});
	}
};
Object.defineProperty(TransactionTypeNotSupportedError, "nodeMessage", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /transaction type not valid/
});
var TipAboveFeeCapError = class extends BaseError {
	constructor({ cause, maxPriorityFeePerGas, maxFeePerGas } = {}) {
		super([`The provided tip (\`maxPriorityFeePerGas\`${maxPriorityFeePerGas ? ` = ${formatGwei(maxPriorityFeePerGas)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei(maxFeePerGas)} gwei` : ""}).`].join("\n"), {
			cause,
			name: "TipAboveFeeCapError"
		});
	}
};
Object.defineProperty(TipAboveFeeCapError, "nodeMessage", {
	enumerable: true,
	configurable: true,
	writable: true,
	value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
function withResolvers() {
	let resolve = () => void 0;
	let reject = () => void 0;
	return {
		promise: new Promise((resolve_, reject_) => {
			resolve = resolve_;
			reject = reject_;
		}),
		resolve,
		reject
	};
}
var schedulerCache = /* @__PURE__ */ new Map();
function createBatchScheduler({ fn, id, shouldSplitBatch, wait: wait$1 = 0, sort }) {
	const exec = async () => {
		const scheduler = getScheduler();
		flush();
		const args = scheduler.map(({ args: args$1 }) => args$1);
		if (args.length === 0) return;
		fn(args).then((data) => {
			if (sort && Array.isArray(data)) data.sort(sort);
			for (let i = 0; i < scheduler.length; i++) {
				const { resolve } = scheduler[i];
				resolve?.([data[i], data]);
			}
		}).catch((err) => {
			for (let i = 0; i < scheduler.length; i++) {
				const { reject } = scheduler[i];
				reject?.(err);
			}
		});
	};
	const flush = () => schedulerCache.delete(id);
	const getBatchedArgs = () => getScheduler().map(({ args }) => args);
	const getScheduler = () => schedulerCache.get(id) || [];
	const setScheduler = (item) => schedulerCache.set(id, [...getScheduler(), item]);
	return {
		flush,
		async schedule(args) {
			const { promise, resolve, reject } = withResolvers();
			if (shouldSplitBatch?.([...getBatchedArgs(), args])) exec();
			if (getScheduler().length > 0) {
				setScheduler({
					args,
					resolve,
					reject
				});
				return promise;
			}
			setScheduler({
				args,
				resolve,
				reject
			});
			setTimeout(exec, wait$1);
			return promise;
		}
	};
}
async function wait(time) {
	return new Promise((res) => setTimeout(res, time));
}
function withRetry(fn, { delay: delay_ = 100, retryCount = 2, shouldRetry: shouldRetry$1 = () => true } = {}) {
	return new Promise((resolve, reject) => {
		const attemptRetry = async ({ count = 0 } = {}) => {
			const retry = async ({ error }) => {
				const delay = typeof delay_ === "function" ? delay_({
					count,
					error
				}) : delay_;
				if (delay) await wait(delay);
				attemptRetry({ count: count + 1 });
			};
			try {
				resolve(await fn());
			} catch (err) {
				if (count < retryCount && await shouldRetry$1({
					count,
					error: err
				})) return retry({ error: err });
				reject(err);
			}
		};
		attemptRetry();
	});
}
var size = 256;
var index = size;
var buffer;
function uid(length = 11) {
	if (!buffer || index + length > size * 2) {
		buffer = "";
		index = 0;
		for (let i = 0; i < size; i++) buffer += (256 + Math.random() * 256 | 0).toString(16).substring(1);
	}
	return buffer.substring(index, index++ + length);
}
const promiseCache = /* @__PURE__ */ new LruMap(8192);
function withDedupe(fn, { enabled = true, id }) {
	if (!enabled || !id) return fn();
	if (promiseCache.get(id)) return promiseCache.get(id);
	const promise = fn().finally(() => promiseCache.delete(id));
	promiseCache.set(id, promise);
	return promise;
}
function buildRequest(request, options = {}) {
	return async (args, overrideOptions = {}) => {
		const { dedupe = false, methods, retryDelay = 150, retryCount = 3, uid: uid$1 } = {
			...options,
			...overrideOptions
		};
		const { method } = args;
		if (methods?.exclude?.includes(method)) throw new MethodNotSupportedRpcError(/* @__PURE__ */ new Error("method not supported"), { method });
		if (methods?.include && !methods.include.includes(method)) throw new MethodNotSupportedRpcError(/* @__PURE__ */ new Error("method not supported"), { method });
		return withDedupe(() => withRetry(async () => {
			try {
				return await request(args);
			} catch (err_) {
				const err = err_;
				switch (err.code) {
					case ParseRpcError.code: throw new ParseRpcError(err);
					case InvalidRequestRpcError.code: throw new InvalidRequestRpcError(err);
					case MethodNotFoundRpcError.code: throw new MethodNotFoundRpcError(err, { method: args.method });
					case InvalidParamsRpcError.code: throw new InvalidParamsRpcError(err);
					case InternalRpcError.code: throw new InternalRpcError(err);
					case InvalidInputRpcError.code: throw new InvalidInputRpcError(err);
					case ResourceNotFoundRpcError.code: throw new ResourceNotFoundRpcError(err);
					case ResourceUnavailableRpcError.code: throw new ResourceUnavailableRpcError(err);
					case TransactionRejectedRpcError.code: throw new TransactionRejectedRpcError(err);
					case MethodNotSupportedRpcError.code: throw new MethodNotSupportedRpcError(err, { method: args.method });
					case LimitExceededRpcError.code: throw new LimitExceededRpcError(err);
					case JsonRpcVersionUnsupportedError.code: throw new JsonRpcVersionUnsupportedError(err);
					case UserRejectedRequestError.code: throw new UserRejectedRequestError(err);
					case UnauthorizedProviderError.code: throw new UnauthorizedProviderError(err);
					case UnsupportedProviderMethodError.code: throw new UnsupportedProviderMethodError(err);
					case ProviderDisconnectedError.code: throw new ProviderDisconnectedError(err);
					case ChainDisconnectedError.code: throw new ChainDisconnectedError(err);
					case SwitchChainError.code: throw new SwitchChainError(err);
					case UnsupportedNonOptionalCapabilityError.code: throw new UnsupportedNonOptionalCapabilityError(err);
					case UnsupportedChainIdError.code: throw new UnsupportedChainIdError(err);
					case DuplicateIdError.code: throw new DuplicateIdError(err);
					case UnknownBundleIdError.code: throw new UnknownBundleIdError(err);
					case BundleTooLargeError.code: throw new BundleTooLargeError(err);
					case AtomicReadyWalletRejectedUpgradeError.code: throw new AtomicReadyWalletRejectedUpgradeError(err);
					case AtomicityNotSupportedError.code: throw new AtomicityNotSupportedError(err);
					case 5e3: throw new UserRejectedRequestError(err);
					default:
						if (err_ instanceof BaseError) throw err_;
						throw new UnknownRpcError(err);
				}
			}
		}, {
			delay: ({ count, error }) => {
				if (error && error instanceof HttpRequestError) {
					const retryAfter = error?.headers?.get("Retry-After");
					if (retryAfter?.match(/\d/)) return Number.parseInt(retryAfter, 10) * 1e3;
				}
				return ~~(1 << count) * retryDelay;
			},
			retryCount,
			shouldRetry: ({ error }) => shouldRetry(error)
		}), {
			enabled: dedupe,
			id: dedupe ? stringToHex(`${uid$1}.${stringify(args)}`) : void 0
		});
	};
}
function shouldRetry(error) {
	if ("code" in error && typeof error.code === "number") {
		if (error.code === -1) return true;
		if (error.code === LimitExceededRpcError.code) return true;
		if (error.code === InternalRpcError.code) return true;
		return false;
	}
	if (error instanceof HttpRequestError && error.status) {
		if (error.status === 403) return true;
		if (error.status === 408) return true;
		if (error.status === 413) return true;
		if (error.status === 429) return true;
		if (error.status === 500) return true;
		if (error.status === 502) return true;
		if (error.status === 503) return true;
		if (error.status === 504) return true;
		return false;
	}
	return true;
}
function withTimeout(fn, { errorInstance = /* @__PURE__ */ new Error("timed out"), timeout, signal }) {
	return new Promise((resolve, reject) => {
		(async () => {
			let timeoutId;
			try {
				const controller = new AbortController();
				if (timeout > 0) timeoutId = setTimeout(() => {
					if (signal) controller.abort();
					else reject(errorInstance);
				}, timeout);
				resolve(await fn({ signal: controller?.signal || null }));
			} catch (err) {
				if (err?.name === "AbortError") reject(errorInstance);
				reject(err);
			} finally {
				clearTimeout(timeoutId);
			}
		})();
	});
}
function createIdStore() {
	return {
		current: 0,
		take() {
			return this.current++;
		},
		reset() {
			this.current = 0;
		}
	};
}
const idCache = /* @__PURE__ */ createIdStore();
function getHttpRpcClient(url_, options = {}) {
	const { url, headers: headers_url } = parseUrl(url_);
	return { async request(params) {
		const { body, fetchFn = options.fetchFn ?? fetch, onRequest = options.onRequest, onResponse = options.onResponse, timeout = options.timeout ?? 1e4 } = params;
		const fetchOptions = {
			...options.fetchOptions ?? {},
			...params.fetchOptions ?? {}
		};
		const { headers, method, signal: signal_ } = fetchOptions;
		try {
			const response = await withTimeout(async ({ signal }) => {
				const init = {
					...fetchOptions,
					body: Array.isArray(body) ? stringify(body.map((body$1) => ({
						jsonrpc: "2.0",
						id: body$1.id ?? idCache.take(),
						...body$1
					}))) : stringify({
						jsonrpc: "2.0",
						id: body.id ?? idCache.take(),
						...body
					}),
					headers: {
						...headers_url,
						"Content-Type": "application/json",
						...headers
					},
					method: method || "POST",
					signal: signal_ || (timeout > 0 ? signal : null)
				};
				const request = new Request(url, init);
				const args = await onRequest?.(request, init) ?? {
					...init,
					url
				};
				return await fetchFn(args.url ?? url, args);
			}, {
				errorInstance: new TimeoutError({
					body,
					url
				}),
				timeout,
				signal: true
			});
			if (onResponse) await onResponse(response);
			let data;
			if (response.headers.get("Content-Type")?.startsWith("application/json")) data = await response.json();
			else {
				data = await response.text();
				try {
					data = JSON.parse(data || "{}");
				} catch (err) {
					if (response.ok) throw err;
					data = { error: data };
				}
			}
			if (!response.ok) throw new HttpRequestError({
				body,
				details: stringify(data.error) || response.statusText,
				headers: response.headers,
				status: response.status,
				url
			});
			return data;
		} catch (err) {
			if (err instanceof HttpRequestError) throw err;
			if (err instanceof TimeoutError) throw err;
			throw new HttpRequestError({
				body,
				cause: err,
				url
			});
		}
	} };
}
function parseUrl(url_) {
	try {
		const url = new URL(url_);
		const result = (() => {
			if (url.username) {
				const credentials = `${decodeURIComponent(url.username)}:${decodeURIComponent(url.password)}`;
				url.username = "";
				url.password = "";
				return {
					url: url.toString(),
					headers: { Authorization: `Basic ${btoa(credentials)}` }
				};
			}
		})();
		return {
			url: url.toString(),
			...result
		};
	} catch {
		return { url: url_ };
	}
}
function createTransport({ key, methods, name, request, retryCount = 3, retryDelay = 150, timeout, type }, value) {
	const uid$1 = uid();
	return {
		config: {
			key,
			methods,
			name,
			request,
			retryCount,
			retryDelay,
			timeout,
			type
		},
		request: buildRequest(request, {
			methods,
			retryCount,
			retryDelay,
			uid: uid$1
		}),
		value
	};
}
function fallback(transports_, config = {}) {
	const { key = "fallback", name = "Fallback", rank = false, shouldThrow: shouldThrow_ = shouldThrow, retryCount, retryDelay } = config;
	return (({ chain, pollingInterval = 4e3, timeout, ...rest }) => {
		let transports = transports_;
		let onResponse = () => {};
		const transport = createTransport({
			key,
			name,
			async request({ method, params }) {
				let includes;
				const fetch$1 = async (i = 0) => {
					const transport$1 = transports[i]({
						...rest,
						chain,
						retryCount: 0,
						timeout
					});
					try {
						const response = await transport$1.request({
							method,
							params
						});
						onResponse({
							method,
							params,
							response,
							transport: transport$1,
							status: "success"
						});
						return response;
					} catch (err) {
						onResponse({
							error: err,
							method,
							params,
							transport: transport$1,
							status: "error"
						});
						if (shouldThrow_(err)) throw err;
						if (i === transports.length - 1) throw err;
						includes ??= transports.slice(i + 1).some((transport$2) => {
							const { include, exclude } = transport$2({ chain }).config.methods || {};
							if (include) return include.includes(method);
							if (exclude) return !exclude.includes(method);
							return true;
						});
						if (!includes) throw err;
						return fetch$1(i + 1);
					}
				};
				return fetch$1();
			},
			retryCount,
			retryDelay,
			type: "fallback"
		}, {
			onResponse: (fn) => onResponse = fn,
			transports: transports.map((fn) => fn({
				chain,
				retryCount: 0
			}))
		});
		if (rank) {
			const rankOptions = typeof rank === "object" ? rank : {};
			rankTransports({
				chain,
				interval: rankOptions.interval ?? pollingInterval,
				onTransports: (transports_$1) => transports = transports_$1,
				ping: rankOptions.ping,
				sampleCount: rankOptions.sampleCount,
				timeout: rankOptions.timeout,
				transports,
				weights: rankOptions.weights
			});
		}
		return transport;
	});
}
function shouldThrow(error) {
	if ("code" in error && typeof error.code === "number") {
		if (error.code === TransactionRejectedRpcError.code || error.code === UserRejectedRequestError.code || ExecutionRevertedError.nodeMessage.test(error.message) || error.code === 5e3) return true;
	}
	return false;
}
function rankTransports({ chain, interval = 4e3, onTransports, ping, sampleCount = 10, timeout = 1e3, transports, weights = {} }) {
	const { stability: stabilityWeight = .7, latency: latencyWeight = .3 } = weights;
	const samples = [];
	const rankTransports_ = async () => {
		const sample = await Promise.all(transports.map(async (transport) => {
			const transport_ = transport({
				chain,
				retryCount: 0,
				timeout
			});
			const start = Date.now();
			let end;
			let success;
			try {
				await (ping ? ping({ transport: transport_ }) : transport_.request({ method: "net_listening" }));
				success = 1;
			} catch {
				success = 0;
			} finally {
				end = Date.now();
			}
			return {
				latency: end - start,
				success
			};
		}));
		samples.push(sample);
		if (samples.length > sampleCount) samples.shift();
		const maxLatency = Math.max(...samples.map((sample$1) => Math.max(...sample$1.map(({ latency }) => latency))));
		onTransports(transports.map((_, i) => {
			const latencies = samples.map((sample$1) => sample$1[i].latency);
			const latencyScore = 1 - latencies.reduce((acc, latency) => acc + latency, 0) / latencies.length / maxLatency;
			const successes = samples.map((sample$1) => sample$1[i].success);
			const stabilityScore = successes.reduce((acc, success) => acc + success, 0) / successes.length;
			if (stabilityScore === 0) return [0, i];
			return [latencyWeight * latencyScore + stabilityWeight * stabilityScore, i];
		}).sort((a, b) => b[0] - a[0]).map(([, i]) => transports[i]));
		await wait(interval);
		rankTransports_();
	};
	rankTransports_();
}
var UrlRequiredError = class extends BaseError {
	constructor() {
		super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
			docsPath: "/docs/clients/intro",
			name: "UrlRequiredError"
		});
	}
};
function http(url, config = {}) {
	const { batch, fetchFn, fetchOptions, key = "http", methods, name = "HTTP JSON-RPC", onFetchRequest, onFetchResponse, retryDelay, raw } = config;
	return ({ chain, retryCount: retryCount_, timeout: timeout_ }) => {
		const { batchSize = 1e3, wait: wait$1 = 0 } = typeof batch === "object" ? batch : {};
		const retryCount = config.retryCount ?? retryCount_;
		const timeout = timeout_ ?? config.timeout ?? 1e4;
		const url_ = url || chain?.rpcUrls.default.http[0];
		if (!url_) throw new UrlRequiredError();
		const rpcClient = getHttpRpcClient(url_, {
			fetchFn,
			fetchOptions,
			onRequest: onFetchRequest,
			onResponse: onFetchResponse,
			timeout
		});
		return createTransport({
			key,
			methods,
			name,
			async request({ method, params }) {
				const body = {
					method,
					params
				};
				const { schedule } = createBatchScheduler({
					id: url_,
					wait: wait$1,
					shouldSplitBatch(requests) {
						return requests.length > batchSize;
					},
					fn: (body$1) => rpcClient.request({ body: body$1 }),
					sort: (a, b) => a.id - b.id
				});
				const fn = async (body$1) => batch ? schedule(body$1) : [await rpcClient.request({ body: body$1 })];
				const [{ error, result }] = await fn(body);
				if (raw) return {
					error,
					result
				};
				if (error) throw new RpcRequestError({
					body,
					error,
					url: url_
				});
				return result;
			},
			retryCount,
			retryDelay,
			timeout,
			type: "http"
		}, {
			fetchOptions,
			url: url_
		});
	};
}
var RPC_URL_HOST = "rpc.walletconnect.org";
function getBlockchainApiRpcUrl(caipNetworkId, projectId) {
	const url = new URL("https://rpc.walletconnect.org/v1/");
	url.searchParams.set("chainId", caipNetworkId);
	url.searchParams.set("projectId", projectId);
	return url.toString();
}
var WC_HTTP_RPC_SUPPORTED_CHAINS = [
	"near:mainnet",
	"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
	"eip155:1101",
	"eip155:56",
	"eip155:42161",
	"eip155:7777777",
	"eip155:59144",
	"eip155:324",
	"solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
	"eip155:5000",
	"solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz",
	"eip155:80084",
	"eip155:5003",
	"eip155:100",
	"eip155:8453",
	"eip155:42220",
	"eip155:1313161555",
	"eip155:17000",
	"eip155:1",
	"eip155:300",
	"eip155:1313161554",
	"eip155:1329",
	"eip155:84532",
	"eip155:421614",
	"eip155:11155111",
	"eip155:8217",
	"eip155:43114",
	"solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
	"eip155:999999999",
	"eip155:11155420",
	"eip155:80002",
	"eip155:97",
	"eip155:43113",
	"eip155:137",
	"eip155:10",
	"eip155:1301",
	"eip155:80094",
	"eip155:80069",
	"eip155:560048",
	"eip155:31",
	"eip155:2818",
	"eip155:57054",
	"eip155:911867",
	"eip155:534351",
	"eip155:1112",
	"eip155:534352",
	"eip155:1111",
	"eip155:146",
	"eip155:130",
	"eip155:1284",
	"eip155:30",
	"eip155:2810",
	"bip122:000000000019d6689c085ae165831e93",
	"bip122:000000000933ea01ad0ee984209779ba"
];
const CaipNetworksUtil = {
	extendRpcUrlWithProjectId(rpcUrl, projectId) {
		let isReownUrl = false;
		try {
			isReownUrl = new URL(rpcUrl).host === RPC_URL_HOST;
		} catch (e) {
			isReownUrl = false;
		}
		if (isReownUrl) {
			const url = new URL(rpcUrl);
			if (!url.searchParams.has("projectId")) url.searchParams.set("projectId", projectId);
			return url.toString();
		}
		return rpcUrl;
	},
	isCaipNetwork(network) {
		return "chainNamespace" in network && "caipNetworkId" in network;
	},
	getChainNamespace(network) {
		if (this.isCaipNetwork(network)) return network.chainNamespace;
		return ConstantsUtil.CHAIN.EVM;
	},
	getCaipNetworkId(network) {
		if (this.isCaipNetwork(network)) return network.caipNetworkId;
		return `${ConstantsUtil.CHAIN.EVM}:${network.id}`;
	},
	getDefaultRpcUrl(caipNetwork, caipNetworkId, projectId) {
		const defaultRpcUrl = caipNetwork.rpcUrls?.default?.http?.[0];
		if (WC_HTTP_RPC_SUPPORTED_CHAINS.includes(caipNetworkId)) return getBlockchainApiRpcUrl(caipNetworkId, projectId);
		return defaultRpcUrl || "";
	},
	extendCaipNetwork(caipNetwork, { customNetworkImageUrls, projectId, customRpcUrls }) {
		const chainNamespace = this.getChainNamespace(caipNetwork);
		const caipNetworkId = this.getCaipNetworkId(caipNetwork);
		const networkDefaultRpcUrl = caipNetwork.rpcUrls?.default?.http?.[0];
		const reownRpcUrl = this.getDefaultRpcUrl(caipNetwork, caipNetworkId, projectId);
		const chainDefaultRpcUrl = caipNetwork?.rpcUrls?.["chainDefault"]?.http?.[0] || networkDefaultRpcUrl;
		const customRpcUrlsOfNetwork = customRpcUrls?.[caipNetworkId]?.map((i) => i.url) || [];
		const rpcUrls = [...customRpcUrlsOfNetwork, ...reownRpcUrl ? [reownRpcUrl] : []];
		const rpcUrlsWithoutReown = [...customRpcUrlsOfNetwork];
		if (chainDefaultRpcUrl && !rpcUrlsWithoutReown.includes(chainDefaultRpcUrl)) rpcUrlsWithoutReown.push(chainDefaultRpcUrl);
		return {
			...caipNetwork,
			chainNamespace,
			caipNetworkId,
			assets: {
				imageId: PresetsUtil.NetworkImageIds[caipNetwork.id],
				imageUrl: customNetworkImageUrls?.[caipNetwork.id]
			},
			rpcUrls: {
				...caipNetwork.rpcUrls,
				default: { http: rpcUrls },
				chainDefault: { http: rpcUrlsWithoutReown }
			}
		};
	},
	extendCaipNetworks(caipNetworks, { customNetworkImageUrls, projectId, customRpcUrls }) {
		return caipNetworks.map((caipNetwork) => CaipNetworksUtil.extendCaipNetwork(caipNetwork, {
			customNetworkImageUrls,
			customRpcUrls,
			projectId
		}));
	},
	getViemTransport(caipNetwork, projectId, customRpcUrls) {
		const transports = [];
		customRpcUrls?.forEach((rpcUrl) => {
			transports.push(http(rpcUrl.url, rpcUrl.config));
		});
		if (WC_HTTP_RPC_SUPPORTED_CHAINS.includes(caipNetwork.caipNetworkId)) transports.push(http(getBlockchainApiRpcUrl(caipNetwork.caipNetworkId, projectId), { fetchOptions: { headers: { "Content-Type": "text/plain" } } }));
		caipNetwork?.rpcUrls?.default?.http?.forEach((rpcUrl) => {
			transports.push(http(rpcUrl));
		});
		return fallback(transports);
	},
	extendWagmiTransports(caipNetwork, projectId, transport) {
		if (WC_HTTP_RPC_SUPPORTED_CHAINS.includes(caipNetwork.caipNetworkId)) return fallback([transport, http(this.getDefaultRpcUrl(caipNetwork, caipNetwork.caipNetworkId, projectId))]);
		return transport;
	},
	getUnsupportedNetwork(caipNetworkId) {
		return {
			id: caipNetworkId.split(":")[1],
			caipNetworkId,
			name: ConstantsUtil.UNSUPPORTED_NETWORK_NAME,
			chainNamespace: caipNetworkId.split(":")[0],
			nativeCurrency: {
				name: "",
				decimals: 0,
				symbol: ""
			},
			rpcUrls: { default: { http: [] } }
		};
	},
	getCaipNetworkFromStorage(defaultCaipNetwork) {
		const caipNetworkIdFromStorage = StorageUtil.getActiveCaipNetworkId();
		const caipNetworks = ChainController.getAllRequestedCaipNetworks();
		const availableNamespaces = Array.from(ChainController.state.chains?.keys() || []);
		const namespace = caipNetworkIdFromStorage?.split(":")[0];
		const isNamespaceAvailable = namespace ? availableNamespaces.includes(namespace) : false;
		const caipNetwork = caipNetworks?.find((cn) => cn.caipNetworkId === caipNetworkIdFromStorage);
		if (isNamespaceAvailable && !caipNetwork && caipNetworkIdFromStorage) return this.getUnsupportedNetwork(caipNetworkIdFromStorage);
		if (caipNetwork) return caipNetwork;
		if (defaultCaipNetwork) return defaultCaipNetwork;
		return caipNetworks?.[0];
	}
};
export { CaipNetworksUtil as t };
