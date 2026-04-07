import { $ as formatAbiItem$1, rt as keccak_256 } from "./index-BepVC6gO.js";
import { t as require_dist } from "./dist-7ZlwWSYf.js";
const getSDKVersion = () => "9.1.0";
var dec2hex = (dec) => dec.toString(16).padStart(2, "0");
var generateId = (len) => {
	const arr = new Uint8Array((len || 40) / 2);
	window.crypto.getRandomValues(arr);
	return Array.from(arr, dec2hex).join("");
};
var generateRequestId = () => {
	if (typeof window !== "undefined") return generateId(10);
	return (/* @__PURE__ */ new Date()).getTime().toString(36);
};
var MessageFormatter = class {};
MessageFormatter.makeRequest = (method, params) => {
	return {
		id: generateRequestId(),
		method,
		params,
		env: { sdkVersion: getSDKVersion() }
	};
};
MessageFormatter.makeResponse = (id, data, version$1) => ({
	id,
	success: true,
	version: version$1,
	data
});
MessageFormatter.makeErrorResponse = (id, error, version$1) => ({
	id,
	success: false,
	error,
	version: version$1
});
var Methods;
(function(Methods$1) {
	Methods$1["sendTransactions"] = "sendTransactions";
	Methods$1["rpcCall"] = "rpcCall";
	Methods$1["getChainInfo"] = "getChainInfo";
	Methods$1["getSafeInfo"] = "getSafeInfo";
	Methods$1["getTxBySafeTxHash"] = "getTxBySafeTxHash";
	Methods$1["getSafeBalances"] = "getSafeBalances";
	Methods$1["signMessage"] = "signMessage";
	Methods$1["signTypedMessage"] = "signTypedMessage";
	Methods$1["getEnvironmentInfo"] = "getEnvironmentInfo";
	Methods$1["getOffChainSignature"] = "getOffChainSignature";
	Methods$1["requestAddressBook"] = "requestAddressBook";
	Methods$1["wallet_getPermissions"] = "wallet_getPermissions";
	Methods$1["wallet_requestPermissions"] = "wallet_requestPermissions";
})(Methods || (Methods = {}));
var RestrictedMethods;
(function(RestrictedMethods$1) {
	RestrictedMethods$1["requestAddressBook"] = "requestAddressBook";
})(RestrictedMethods || (RestrictedMethods = {}));
var PostMessageCommunicator = class {
	constructor(allowedOrigins = null, debugMode = false) {
		this.allowedOrigins = null;
		this.callbacks = /* @__PURE__ */ new Map();
		this.debugMode = false;
		this.isServer = typeof window === "undefined";
		this.isValidMessage = ({ origin, data, source }) => {
			const emptyOrMalformed = !data;
			const sentFromParentEl = !this.isServer && source === window.parent;
			const majorVersionNumber = typeof data.version !== "undefined" && parseInt(data.version.split(".")[0]);
			const allowedSDKVersion = typeof majorVersionNumber === "number" && majorVersionNumber >= 1;
			let validOrigin = true;
			if (Array.isArray(this.allowedOrigins)) validOrigin = this.allowedOrigins.find((regExp) => regExp.test(origin)) !== void 0;
			return !emptyOrMalformed && sentFromParentEl && allowedSDKVersion && validOrigin;
		};
		this.logIncomingMessage = (msg) => {
			console.info(`Safe Apps SDK v1: A message was received from origin ${msg.origin}. `, msg.data);
		};
		this.onParentMessage = (msg) => {
			if (this.isValidMessage(msg)) {
				this.debugMode && this.logIncomingMessage(msg);
				this.handleIncomingMessage(msg.data);
			}
		};
		this.handleIncomingMessage = (payload) => {
			const { id } = payload;
			const cb = this.callbacks.get(id);
			if (cb) {
				cb(payload);
				this.callbacks.delete(id);
			}
		};
		this.send = (method, params) => {
			const request = MessageFormatter.makeRequest(method, params);
			if (this.isServer) throw new Error("Window doesn't exist");
			window.parent.postMessage(request, "*");
			return new Promise((resolve, reject) => {
				this.callbacks.set(request.id, (response) => {
					if (!response.success) {
						reject(new Error(response.error));
						return;
					}
					resolve(response);
				});
			});
		};
		this.allowedOrigins = allowedOrigins;
		this.debugMode = debugMode;
		if (!this.isServer) window.addEventListener("message", this.onParentMessage);
	}
};
var communication_default = PostMessageCommunicator;
const isObjectEIP712TypedData = (obj) => {
	return typeof obj === "object" && obj != null && "domain" in obj && "types" in obj && "message" in obj;
};
var import_dist = require_dist();
var TXs = class {
	constructor(communicator) {
		this.communicator = communicator;
	}
	async getBySafeTxHash(safeTxHash) {
		if (!safeTxHash) throw new Error("Invalid safeTxHash");
		return (await this.communicator.send(Methods.getTxBySafeTxHash, { safeTxHash })).data;
	}
	async signMessage(message) {
		const messagePayload = { message };
		return (await this.communicator.send(Methods.signMessage, messagePayload)).data;
	}
	async signTypedMessage(typedData) {
		if (!isObjectEIP712TypedData(typedData)) throw new Error("Invalid typed data");
		return (await this.communicator.send(Methods.signTypedMessage, { typedData })).data;
	}
	async send({ txs, params }) {
		if (!txs || !txs.length) throw new Error("No transactions were passed");
		const messagePayload = {
			txs,
			params
		};
		return (await this.communicator.send(Methods.sendTransactions, messagePayload)).data;
	}
};
const RPC_CALLS = {
	eth_call: "eth_call",
	eth_gasPrice: "eth_gasPrice",
	eth_getLogs: "eth_getLogs",
	eth_getBalance: "eth_getBalance",
	eth_getCode: "eth_getCode",
	eth_getBlockByHash: "eth_getBlockByHash",
	eth_getBlockByNumber: "eth_getBlockByNumber",
	eth_getStorageAt: "eth_getStorageAt",
	eth_getTransactionByHash: "eth_getTransactionByHash",
	eth_getTransactionReceipt: "eth_getTransactionReceipt",
	eth_getTransactionCount: "eth_getTransactionCount",
	eth_estimateGas: "eth_estimateGas",
	safe_setSettings: "safe_setSettings"
};
var inputFormatters = {
	defaultBlockParam: (arg = "latest") => arg,
	returnFullTxObjectParam: (arg = false) => arg,
	blockNumberToHex: (arg) => Number.isInteger(arg) ? `0x${arg.toString(16)}` : arg
};
var Eth = class {
	constructor(communicator) {
		this.communicator = communicator;
		this.call = this.buildRequest({
			call: RPC_CALLS.eth_call,
			formatters: [null, inputFormatters.defaultBlockParam]
		});
		this.getBalance = this.buildRequest({
			call: RPC_CALLS.eth_getBalance,
			formatters: [null, inputFormatters.defaultBlockParam]
		});
		this.getCode = this.buildRequest({
			call: RPC_CALLS.eth_getCode,
			formatters: [null, inputFormatters.defaultBlockParam]
		});
		this.getStorageAt = this.buildRequest({
			call: RPC_CALLS.eth_getStorageAt,
			formatters: [
				null,
				inputFormatters.blockNumberToHex,
				inputFormatters.defaultBlockParam
			]
		});
		this.getPastLogs = this.buildRequest({ call: RPC_CALLS.eth_getLogs });
		this.getBlockByHash = this.buildRequest({
			call: RPC_CALLS.eth_getBlockByHash,
			formatters: [null, inputFormatters.returnFullTxObjectParam]
		});
		this.getBlockByNumber = this.buildRequest({
			call: RPC_CALLS.eth_getBlockByNumber,
			formatters: [inputFormatters.blockNumberToHex, inputFormatters.returnFullTxObjectParam]
		});
		this.getTransactionByHash = this.buildRequest({ call: RPC_CALLS.eth_getTransactionByHash });
		this.getTransactionReceipt = this.buildRequest({ call: RPC_CALLS.eth_getTransactionReceipt });
		this.getTransactionCount = this.buildRequest({
			call: RPC_CALLS.eth_getTransactionCount,
			formatters: [null, inputFormatters.defaultBlockParam]
		});
		this.getGasPrice = this.buildRequest({ call: RPC_CALLS.eth_gasPrice });
		this.getEstimateGas = (transaction) => this.buildRequest({ call: RPC_CALLS.eth_estimateGas })([transaction]);
		this.setSafeSettings = this.buildRequest({ call: RPC_CALLS.safe_setSettings });
	}
	buildRequest(args) {
		const { call, formatters } = args;
		return async (params) => {
			if (formatters && Array.isArray(params)) formatters.forEach((formatter, i) => {
				if (formatter) params[i] = formatter(params[i]);
			});
			const payload = {
				call,
				params: params || []
			};
			return (await this.communicator.send(Methods.rpcCall, payload)).data;
		};
	}
};
function formatAbiItem(abiItem, { includeName = false } = {}) {
	if (abiItem.type !== "function" && abiItem.type !== "event" && abiItem.type !== "error") throw new InvalidDefinitionTypeError(abiItem.type);
	return `${abiItem.name}(${formatAbiParams(abiItem.inputs, { includeName })})`;
}
function formatAbiParams(params, { includeName = false } = {}) {
	if (!params) return "";
	return params.map((param) => formatAbiParam(param, { includeName })).join(includeName ? ", " : ",");
}
function formatAbiParam(param, { includeName }) {
	if (param.type.startsWith("tuple")) return `(${formatAbiParams(param.components, { includeName })})${param.type.slice(5)}`;
	return param.type + (includeName && param.name ? ` ${param.name}` : "");
}
function isHex(value, { strict = true } = {}) {
	if (!value) return false;
	if (typeof value !== "string") return false;
	return strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith("0x");
}
function size(value) {
	if (isHex(value, { strict: false })) return Math.ceil((value.length - 2) / 2);
	return value.length;
}
const version = "2.44.4";
var errorConfig = {
	getDocsUrl: ({ docsBaseUrl, docsPath: docsPath$1 = "", docsSlug }) => docsPath$1 ? `${docsBaseUrl ?? "https://viem.sh"}${docsPath$1}${docsSlug ? `#${docsSlug}` : ""}` : void 0,
	version: `viem@${version}`
};
var BaseError = class BaseError extends Error {
	constructor(shortMessage, args = {}) {
		const details = (() => {
			if (args.cause instanceof BaseError) return args.cause.details;
			if (args.cause?.message) return args.cause.message;
			return args.details;
		})();
		const docsPath$1 = (() => {
			if (args.cause instanceof BaseError) return args.cause.docsPath || args.docsPath;
			return args.docsPath;
		})();
		const docsUrl = errorConfig.getDocsUrl?.({
			...args,
			docsPath: docsPath$1
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
		this.docsPath = docsPath$1;
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
var AbiEncodingArrayLengthMismatchError = class extends BaseError {
	constructor({ expectedLength, givenLength, type }) {
		super([
			`ABI encoding array length mismatch for type ${type}.`,
			`Expected length: ${expectedLength}`,
			`Given length: ${givenLength}`
		].join("\n"), { name: "AbiEncodingArrayLengthMismatchError" });
	}
};
var AbiEncodingBytesSizeMismatchError = class extends BaseError {
	constructor({ expectedSize, value }) {
		super(`Size of bytes "${value}" (bytes${size(value)}) does not match expected size (bytes${expectedSize}).`, { name: "AbiEncodingBytesSizeMismatchError" });
	}
};
var AbiEncodingLengthMismatchError = class extends BaseError {
	constructor({ expectedLength, givenLength }) {
		super([
			"ABI encoding params/values length mismatch.",
			`Expected length (params): ${expectedLength}`,
			`Given length (values): ${givenLength}`
		].join("\n"), { name: "AbiEncodingLengthMismatchError" });
	}
};
var AbiFunctionNotFoundError = class extends BaseError {
	constructor(functionName, { docsPath: docsPath$1 } = {}) {
		super([`Function ${functionName ? `"${functionName}" ` : ""}not found on ABI.`, "Make sure you are using the correct ABI and that the function exists on it."].join("\n"), {
			docsPath: docsPath$1,
			name: "AbiFunctionNotFoundError"
		});
	}
};
var AbiItemAmbiguityError = class extends BaseError {
	constructor(x, y) {
		super("Found ambiguous types in overloaded ABI items.", {
			metaMessages: [
				`\`${x.type}\` in \`${formatAbiItem(x.abiItem)}\`, and`,
				`\`${y.type}\` in \`${formatAbiItem(y.abiItem)}\``,
				"",
				"These types encode differently and cannot be distinguished at runtime.",
				"Remove one of the ambiguous items in the ABI."
			],
			name: "AbiItemAmbiguityError"
		});
	}
};
var BytesSizeMismatchError = class extends BaseError {
	constructor({ expectedSize, givenSize }) {
		super(`Expected bytes${expectedSize}, got bytes${givenSize}.`, { name: "BytesSizeMismatchError" });
	}
};
var InvalidAbiEncodingTypeError = class extends BaseError {
	constructor(type, { docsPath: docsPath$1 }) {
		super([`Type "${type}" is not a valid encoding type.`, "Please provide a valid ABI type."].join("\n"), {
			docsPath: docsPath$1,
			name: "InvalidAbiEncodingType"
		});
	}
};
var InvalidArrayError = class extends BaseError {
	constructor(value) {
		super([`Value "${value}" is not a valid array.`].join("\n"), { name: "InvalidArrayError" });
	}
};
var InvalidDefinitionTypeError = class extends BaseError {
	constructor(type) {
		super([`"${type}" is not a valid definition type.`, "Valid types: \"function\", \"event\", \"error\""].join("\n"), { name: "InvalidDefinitionTypeError" });
	}
};
var SliceOffsetOutOfBoundsError = class extends BaseError {
	constructor({ offset, position, size: size$1 }) {
		super(`Slice ${position === "start" ? "starting" : "ending"} at offset "${offset}" is out-of-bounds (size: ${size$1}).`, { name: "SliceOffsetOutOfBoundsError" });
	}
};
var SizeExceedsPaddingSizeError = class extends BaseError {
	constructor({ size: size$1, targetSize, type }) {
		super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (${size$1}) exceeds padding size (${targetSize}).`, { name: "SizeExceedsPaddingSizeError" });
	}
};
function pad(hexOrBytes, { dir, size: size$1 = 32 } = {}) {
	if (typeof hexOrBytes === "string") return padHex(hexOrBytes, {
		dir,
		size: size$1
	});
	return padBytes(hexOrBytes, {
		dir,
		size: size$1
	});
}
function padHex(hex_, { dir, size: size$1 = 32 } = {}) {
	if (size$1 === null) return hex_;
	const hex = hex_.replace("0x", "");
	if (hex.length > size$1 * 2) throw new SizeExceedsPaddingSizeError({
		size: Math.ceil(hex.length / 2),
		targetSize: size$1,
		type: "hex"
	});
	return `0x${hex[dir === "right" ? "padEnd" : "padStart"](size$1 * 2, "0")}`;
}
function padBytes(bytes, { dir, size: size$1 = 32 } = {}) {
	if (size$1 === null) return bytes;
	if (bytes.length > size$1) throw new SizeExceedsPaddingSizeError({
		size: bytes.length,
		targetSize: size$1,
		type: "bytes"
	});
	const paddedBytes = new Uint8Array(size$1);
	for (let i = 0; i < size$1; i++) {
		const padEnd = dir === "right";
		paddedBytes[padEnd ? i : size$1 - i - 1] = bytes[padEnd ? i : bytes.length - i - 1];
	}
	return paddedBytes;
}
var IntegerOutOfRangeError = class extends BaseError {
	constructor({ max, min, signed, size: size$1, value }) {
		super(`Number "${value}" is not in safe ${size$1 ? `${size$1 * 8}-bit ${signed ? "signed" : "unsigned"} ` : ""}integer range ${max ? `(${min} to ${max})` : `(above ${min})`}`, { name: "IntegerOutOfRangeError" });
	}
};
var SizeOverflowError = class extends BaseError {
	constructor({ givenSize, maxSize }) {
		super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`, { name: "SizeOverflowError" });
	}
};
function assertSize(hexOrBytes, { size: size$1 }) {
	if (size(hexOrBytes) > size$1) throw new SizeOverflowError({
		givenSize: size(hexOrBytes),
		maxSize: size$1
	});
}
var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, "0"));
function toHex(value, opts = {}) {
	if (typeof value === "number" || typeof value === "bigint") return numberToHex(value, opts);
	if (typeof value === "string") return stringToHex(value, opts);
	if (typeof value === "boolean") return boolToHex(value, opts);
	return bytesToHex(value, opts);
}
function boolToHex(value, opts = {}) {
	const hex = `0x${Number(value)}`;
	if (typeof opts.size === "number") {
		assertSize(hex, { size: opts.size });
		return pad(hex, { size: opts.size });
	}
	return hex;
}
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
function numberToHex(value_, opts = {}) {
	const { signed, size: size$1 } = opts;
	const value = BigInt(value_);
	let maxValue;
	if (size$1) if (signed) maxValue = (1n << BigInt(size$1) * 8n - 1n) - 1n;
	else maxValue = 2n ** (BigInt(size$1) * 8n) - 1n;
	else if (typeof value_ === "number") maxValue = BigInt(Number.MAX_SAFE_INTEGER);
	const minValue = typeof maxValue === "bigint" && signed ? -maxValue - 1n : 0;
	if (maxValue && value > maxValue || value < minValue) {
		const suffix = typeof value_ === "bigint" ? "n" : "";
		throw new IntegerOutOfRangeError({
			max: maxValue ? `${maxValue}${suffix}` : void 0,
			min: `${minValue}${suffix}`,
			signed,
			size: size$1,
			value: `${value_}${suffix}`
		});
	}
	const hex = `0x${(signed && value < 0 ? (1n << BigInt(size$1 * 8)) + BigInt(value) : value).toString(16)}`;
	if (size$1) return pad(hex, { size: size$1 });
	return hex;
}
var encoder$1 = /* @__PURE__ */ new TextEncoder();
function stringToHex(value_, opts = {}) {
	return bytesToHex(encoder$1.encode(value_), opts);
}
var encoder = /* @__PURE__ */ new TextEncoder();
function toBytes(value, opts = {}) {
	if (typeof value === "number" || typeof value === "bigint") return numberToBytes(value, opts);
	if (typeof value === "boolean") return boolToBytes(value, opts);
	if (isHex(value)) return hexToBytes(value, opts);
	return stringToBytes(value, opts);
}
function boolToBytes(value, opts = {}) {
	const bytes = new Uint8Array(1);
	bytes[0] = Number(value);
	if (typeof opts.size === "number") {
		assertSize(bytes, { size: opts.size });
		return pad(bytes, { size: opts.size });
	}
	return bytes;
}
var charCodeMap = {
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
function hexToBytes(hex_, opts = {}) {
	let hex = hex_;
	if (opts.size) {
		assertSize(hex, { size: opts.size });
		hex = pad(hex, {
			dir: "right",
			size: opts.size
		});
	}
	let hexString = hex.slice(2);
	if (hexString.length % 2) hexString = `0${hexString}`;
	const length = hexString.length / 2;
	const bytes = new Uint8Array(length);
	for (let index = 0, j = 0; index < length; index++) {
		const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
		const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
		if (nibbleLeft === void 0 || nibbleRight === void 0) throw new BaseError(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
		bytes[index] = nibbleLeft * 16 + nibbleRight;
	}
	return bytes;
}
function numberToBytes(value, opts) {
	return hexToBytes(numberToHex(value, opts));
}
function stringToBytes(value, opts = {}) {
	const bytes = encoder.encode(value);
	if (typeof opts.size === "number") {
		assertSize(bytes, { size: opts.size });
		return pad(bytes, {
			dir: "right",
			size: opts.size
		});
	}
	return bytes;
}
function keccak256(value, to_) {
	const to = to_ || "hex";
	const bytes = keccak_256(isHex(value, { strict: false }) ? toBytes(value) : value);
	if (to === "bytes") return bytes;
	return toHex(bytes);
}
var hash = (value) => keccak256(toBytes(value));
function hashSignature(sig) {
	return hash(sig);
}
function normalizeSignature(signature) {
	let active = true;
	let current = "";
	let level = 0;
	let result = "";
	let valid = false;
	for (let i = 0; i < signature.length; i++) {
		const char = signature[i];
		if ([
			"(",
			")",
			","
		].includes(char)) active = true;
		if (char === "(") level++;
		if (char === ")") level--;
		if (!active) continue;
		if (level === 0) {
			if (char === " " && [
				"event",
				"function",
				""
			].includes(result)) result = "";
			else {
				result += char;
				if (char === ")") {
					valid = true;
					break;
				}
			}
			continue;
		}
		if (char === " ") {
			if (signature[i - 1] !== "," && current !== "," && current !== ",(") {
				current = "";
				active = false;
			}
			continue;
		}
		result += char;
		current += char;
	}
	if (!valid) throw new BaseError("Unable to normalize signature.");
	return result;
}
const toSignature = (def) => {
	return normalizeSignature((() => {
		if (typeof def === "string") return def;
		return formatAbiItem$1(def);
	})());
};
function toSignatureHash(fn) {
	return hashSignature(toSignature(fn));
}
const toEventSelector = toSignatureHash;
var InvalidAddressError = class extends BaseError {
	constructor({ address }) {
		super(`Address "${address}" is invalid.`, {
			metaMessages: ["- Address must be a hex value of 20 bytes (40 hex characters).", "- Address must match its checksum counterpart."],
			name: "InvalidAddressError"
		});
	}
};
var LruMap = class extends Map {
	constructor(size$1) {
		super();
		Object.defineProperty(this, "maxSize", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		this.maxSize = size$1;
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
var checksumAddressCache = /* @__PURE__ */ new LruMap(8192);
function checksumAddress(address_, chainId) {
	if (checksumAddressCache.has(`${address_}.${chainId}`)) return checksumAddressCache.get(`${address_}.${chainId}`);
	const hexAddress = chainId ? `${chainId}${address_.toLowerCase()}` : address_.substring(2).toLowerCase();
	const hash$1 = keccak256(stringToBytes(hexAddress), "bytes");
	const address = (chainId ? hexAddress.substring(`${chainId}0x`.length) : hexAddress).split("");
	for (let i = 0; i < 40; i += 2) {
		if (hash$1[i >> 1] >> 4 >= 8 && address[i]) address[i] = address[i].toUpperCase();
		if ((hash$1[i >> 1] & 15) >= 8 && address[i + 1]) address[i + 1] = address[i + 1].toUpperCase();
	}
	const result = `0x${address.join("")}`;
	checksumAddressCache.set(`${address_}.${chainId}`, result);
	return result;
}
var addressRegex = /^0x[a-fA-F0-9]{40}$/;
const isAddressCache = /* @__PURE__ */ new LruMap(8192);
function isAddress(address, options) {
	const { strict = true } = options ?? {};
	const cacheKey = `${address}.${strict}`;
	if (isAddressCache.has(cacheKey)) return isAddressCache.get(cacheKey);
	const result = (() => {
		if (!addressRegex.test(address)) return false;
		if (address.toLowerCase() === address) return true;
		if (strict) return checksumAddress(address) === address;
		return true;
	})();
	isAddressCache.set(cacheKey, result);
	return result;
}
function concat(values) {
	if (typeof values[0] === "string") return concatHex(values);
	return concatBytes(values);
}
function concatBytes(values) {
	let length = 0;
	for (const arr of values) length += arr.length;
	const result = new Uint8Array(length);
	let offset = 0;
	for (const arr of values) {
		result.set(arr, offset);
		offset += arr.length;
	}
	return result;
}
function concatHex(values) {
	return `0x${values.reduce((acc, x) => acc + x.replace("0x", ""), "")}`;
}
function slice(value, start, end, { strict } = {}) {
	if (isHex(value, { strict: false })) return sliceHex(value, start, end, { strict });
	return sliceBytes(value, start, end, { strict });
}
function assertStartOffset(value, start) {
	if (typeof start === "number" && start > 0 && start > size(value) - 1) throw new SliceOffsetOutOfBoundsError({
		offset: start,
		position: "start",
		size: size(value)
	});
}
function assertEndOffset(value, start, end) {
	if (typeof start === "number" && typeof end === "number" && size(value) !== end - start) throw new SliceOffsetOutOfBoundsError({
		offset: end,
		position: "end",
		size: size(value)
	});
}
function sliceBytes(value_, start, end, { strict } = {}) {
	assertStartOffset(value_, start);
	const value = value_.slice(start, end);
	if (strict) assertEndOffset(value, start, end);
	return value;
}
function sliceHex(value_, start, end, { strict } = {}) {
	assertStartOffset(value_, start);
	const value = `0x${value_.replace("0x", "").slice((start ?? 0) * 2, (end ?? value_.length) * 2)}`;
	if (strict) assertEndOffset(value, start, end);
	return value;
}
const bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
const integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
function encodeAbiParameters(params, values) {
	if (params.length !== values.length) throw new AbiEncodingLengthMismatchError({
		expectedLength: params.length,
		givenLength: values.length
	});
	const data = encodeParams(prepareParams({
		params,
		values
	}));
	if (data.length === 0) return "0x";
	return data;
}
function prepareParams({ params, values }) {
	const preparedParams = [];
	for (let i = 0; i < params.length; i++) preparedParams.push(prepareParam({
		param: params[i],
		value: values[i]
	}));
	return preparedParams;
}
function prepareParam({ param, value }) {
	const arrayComponents = getArrayComponents(param.type);
	if (arrayComponents) {
		const [length, type] = arrayComponents;
		return encodeArray(value, {
			length,
			param: {
				...param,
				type
			}
		});
	}
	if (param.type === "tuple") return encodeTuple(value, { param });
	if (param.type === "address") return encodeAddress(value);
	if (param.type === "bool") return encodeBool(value);
	if (param.type.startsWith("uint") || param.type.startsWith("int")) {
		const signed = param.type.startsWith("int");
		const [, , size$1 = "256"] = integerRegex.exec(param.type) ?? [];
		return encodeNumber(value, {
			signed,
			size: Number(size$1)
		});
	}
	if (param.type.startsWith("bytes")) return encodeBytes(value, { param });
	if (param.type === "string") return encodeString(value);
	throw new InvalidAbiEncodingTypeError(param.type, { docsPath: "/docs/contract/encodeAbiParameters" });
}
function encodeParams(preparedParams) {
	let staticSize = 0;
	for (let i = 0; i < preparedParams.length; i++) {
		const { dynamic, encoded } = preparedParams[i];
		if (dynamic) staticSize += 32;
		else staticSize += size(encoded);
	}
	const staticParams = [];
	const dynamicParams = [];
	let dynamicSize = 0;
	for (let i = 0; i < preparedParams.length; i++) {
		const { dynamic, encoded } = preparedParams[i];
		if (dynamic) {
			staticParams.push(numberToHex(staticSize + dynamicSize, { size: 32 }));
			dynamicParams.push(encoded);
			dynamicSize += size(encoded);
		} else staticParams.push(encoded);
	}
	return concat([...staticParams, ...dynamicParams]);
}
function encodeAddress(value) {
	if (!isAddress(value)) throw new InvalidAddressError({ address: value });
	return {
		dynamic: false,
		encoded: padHex(value.toLowerCase())
	};
}
function encodeArray(value, { length, param }) {
	const dynamic = length === null;
	if (!Array.isArray(value)) throw new InvalidArrayError(value);
	if (!dynamic && value.length !== length) throw new AbiEncodingArrayLengthMismatchError({
		expectedLength: length,
		givenLength: value.length,
		type: `${param.type}[${length}]`
	});
	let dynamicChild = false;
	const preparedParams = [];
	for (let i = 0; i < value.length; i++) {
		const preparedParam = prepareParam({
			param,
			value: value[i]
		});
		if (preparedParam.dynamic) dynamicChild = true;
		preparedParams.push(preparedParam);
	}
	if (dynamic || dynamicChild) {
		const data = encodeParams(preparedParams);
		if (dynamic) {
			const length$1 = numberToHex(preparedParams.length, { size: 32 });
			return {
				dynamic: true,
				encoded: preparedParams.length > 0 ? concat([length$1, data]) : length$1
			};
		}
		if (dynamicChild) return {
			dynamic: true,
			encoded: data
		};
	}
	return {
		dynamic: false,
		encoded: concat(preparedParams.map(({ encoded }) => encoded))
	};
}
function encodeBytes(value, { param }) {
	const [, paramSize] = param.type.split("bytes");
	const bytesSize = size(value);
	if (!paramSize) {
		let value_ = value;
		if (bytesSize % 32 !== 0) value_ = padHex(value_, {
			dir: "right",
			size: Math.ceil((value.length - 2) / 2 / 32) * 32
		});
		return {
			dynamic: true,
			encoded: concat([padHex(numberToHex(bytesSize, { size: 32 })), value_])
		};
	}
	if (bytesSize !== Number.parseInt(paramSize, 10)) throw new AbiEncodingBytesSizeMismatchError({
		expectedSize: Number.parseInt(paramSize, 10),
		value
	});
	return {
		dynamic: false,
		encoded: padHex(value, { dir: "right" })
	};
}
function encodeBool(value) {
	if (typeof value !== "boolean") throw new BaseError(`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
	return {
		dynamic: false,
		encoded: padHex(boolToHex(value))
	};
}
function encodeNumber(value, { signed, size: size$1 = 256 }) {
	if (typeof size$1 === "number") {
		const max = 2n ** (BigInt(size$1) - (signed ? 1n : 0n)) - 1n;
		const min = signed ? -max - 1n : 0n;
		if (value > max || value < min) throw new IntegerOutOfRangeError({
			max: max.toString(),
			min: min.toString(),
			signed,
			size: size$1 / 8,
			value: value.toString()
		});
	}
	return {
		dynamic: false,
		encoded: numberToHex(value, {
			size: 32,
			signed
		})
	};
}
function encodeString(value) {
	const hexValue = stringToHex(value);
	const partsLength = Math.ceil(size(hexValue) / 32);
	const parts = [];
	for (let i = 0; i < partsLength; i++) parts.push(padHex(slice(hexValue, i * 32, (i + 1) * 32), { dir: "right" }));
	return {
		dynamic: true,
		encoded: concat([padHex(numberToHex(size(hexValue), { size: 32 })), ...parts])
	};
}
function encodeTuple(value, { param }) {
	let dynamic = false;
	const preparedParams = [];
	for (let i = 0; i < param.components.length; i++) {
		const param_ = param.components[i];
		const preparedParam = prepareParam({
			param: param_,
			value: value[Array.isArray(value) ? i : param_.name]
		});
		preparedParams.push(preparedParam);
		if (preparedParam.dynamic) dynamic = true;
	}
	return {
		dynamic,
		encoded: dynamic ? encodeParams(preparedParams) : concat(preparedParams.map(({ encoded }) => encoded))
	};
}
function getArrayComponents(type) {
	const matches = type.match(/^(.*)\[(\d+)?\]$/);
	return matches ? [matches[2] ? Number(matches[2]) : null, matches[1]] : void 0;
}
const toFunctionSelector = (fn) => slice(toSignatureHash(fn), 0, 4);
function getAbiItem(parameters) {
	const { abi, args = [], name } = parameters;
	const isSelector = isHex(name, { strict: false });
	const abiItems = abi.filter((abiItem) => {
		if (isSelector) {
			if (abiItem.type === "function") return toFunctionSelector(abiItem) === name;
			if (abiItem.type === "event") return toEventSelector(abiItem) === name;
			return false;
		}
		return "name" in abiItem && abiItem.name === name;
	});
	if (abiItems.length === 0) return void 0;
	if (abiItems.length === 1) return abiItems[0];
	let matchedAbiItem;
	for (const abiItem of abiItems) {
		if (!("inputs" in abiItem)) continue;
		if (!args || args.length === 0) {
			if (!abiItem.inputs || abiItem.inputs.length === 0) return abiItem;
			continue;
		}
		if (!abiItem.inputs) continue;
		if (abiItem.inputs.length === 0) continue;
		if (abiItem.inputs.length !== args.length) continue;
		if (args.every((arg, index) => {
			const abiParameter = "inputs" in abiItem && abiItem.inputs[index];
			if (!abiParameter) return false;
			return isArgOfType(arg, abiParameter);
		})) {
			if (matchedAbiItem && "inputs" in matchedAbiItem && matchedAbiItem.inputs) {
				const ambiguousTypes = getAmbiguousTypes(abiItem.inputs, matchedAbiItem.inputs, args);
				if (ambiguousTypes) throw new AbiItemAmbiguityError({
					abiItem,
					type: ambiguousTypes[0]
				}, {
					abiItem: matchedAbiItem,
					type: ambiguousTypes[1]
				});
			}
			matchedAbiItem = abiItem;
		}
	}
	if (matchedAbiItem) return matchedAbiItem;
	return abiItems[0];
}
function isArgOfType(arg, abiParameter) {
	const argType = typeof arg;
	const abiParameterType = abiParameter.type;
	switch (abiParameterType) {
		case "address": return isAddress(arg, { strict: false });
		case "bool": return argType === "boolean";
		case "function": return argType === "string";
		case "string": return argType === "string";
		default:
			if (abiParameterType === "tuple" && "components" in abiParameter) return Object.values(abiParameter.components).every((component, index) => {
				return argType === "object" && isArgOfType(Object.values(arg)[index], component);
			});
			if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType)) return argType === "number" || argType === "bigint";
			if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType)) return argType === "string" || arg instanceof Uint8Array;
			if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) return Array.isArray(arg) && arg.every((x) => isArgOfType(x, {
				...abiParameter,
				type: abiParameterType.replace(/(\[[0-9]{0,}\])$/, "")
			}));
			return false;
	}
}
function getAmbiguousTypes(sourceParameters, targetParameters, args) {
	for (const parameterIndex in sourceParameters) {
		const sourceParameter = sourceParameters[parameterIndex];
		const targetParameter = targetParameters[parameterIndex];
		if (sourceParameter.type === "tuple" && targetParameter.type === "tuple" && "components" in sourceParameter && "components" in targetParameter) return getAmbiguousTypes(sourceParameter.components, targetParameter.components, args[parameterIndex]);
		const types = [sourceParameter.type, targetParameter.type];
		if ((() => {
			if (types.includes("address") && types.includes("bytes20")) return true;
			if (types.includes("address") && types.includes("string")) return isAddress(args[parameterIndex], { strict: false });
			if (types.includes("address") && types.includes("bytes")) return isAddress(args[parameterIndex], { strict: false });
			return false;
		})()) return types;
	}
}
var docsPath = "/docs/contract/encodeFunctionData";
function prepareEncodeFunctionData(parameters) {
	const { abi, args, functionName } = parameters;
	let abiItem = abi[0];
	if (functionName) {
		const item = getAbiItem({
			abi,
			args,
			name: functionName
		});
		if (!item) throw new AbiFunctionNotFoundError(functionName, { docsPath });
		abiItem = item;
	}
	if (abiItem.type !== "function") throw new AbiFunctionNotFoundError(void 0, { docsPath });
	return {
		abi: [abiItem],
		functionName: toFunctionSelector(formatAbiItem(abiItem))
	};
}
function encodeFunctionData(parameters) {
	const { args } = parameters;
	const { abi, functionName } = (() => {
		if (parameters.abi.length === 1 && parameters.functionName?.startsWith("0x")) return parameters;
		return prepareEncodeFunctionData(parameters);
	})();
	const abiItem = abi[0];
	return concatHex([functionName, ("inputs" in abiItem && abiItem.inputs ? encodeAbiParameters(abiItem.inputs, args ?? []) : void 0) ?? "0x"]);
}
const stringify = (value, replacer, space) => JSON.stringify(value, (key, value_) => {
	const value$1 = typeof value_ === "bigint" ? value_.toString() : value_;
	return typeof replacer === "function" ? replacer(key, value$1) : value$1;
}, space);
const presignMessagePrefix = "Ethereum Signed Message:\n";
function toPrefixedMessage(message_) {
	const message = (() => {
		if (typeof message_ === "string") return stringToHex(message_);
		if (typeof message_.raw === "string") return message_.raw;
		return bytesToHex(message_.raw);
	})();
	return concat([stringToHex(`${presignMessagePrefix}${size(message)}`), message]);
}
function hashMessage(message, to_) {
	return keccak256(toPrefixedMessage(message), to_);
}
var InvalidDomainError = class extends BaseError {
	constructor({ domain }) {
		super(`Invalid domain "${stringify(domain)}".`, { metaMessages: ["Must be a valid EIP-712 domain."] });
	}
};
var InvalidPrimaryTypeError = class extends BaseError {
	constructor({ primaryType, types }) {
		super(`Invalid primary type \`${primaryType}\` must be one of \`${JSON.stringify(Object.keys(types))}\`.`, {
			docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
			metaMessages: ["Check that the primary type is a key in `types`."]
		});
	}
};
var InvalidStructTypeError = class extends BaseError {
	constructor({ type }) {
		super(`Struct type "${type}" is invalid.`, {
			metaMessages: ["Struct type must not be a Solidity type."],
			name: "InvalidStructTypeError"
		});
	}
};
function validateTypedData(parameters) {
	const { domain, message, primaryType, types } = parameters;
	const validateData = (struct, data) => {
		for (const param of struct) {
			const { name, type } = param;
			const value = data[name];
			const integerMatch = type.match(integerRegex);
			if (integerMatch && (typeof value === "number" || typeof value === "bigint")) {
				const [_type, base, size_] = integerMatch;
				numberToHex(value, {
					signed: base === "int",
					size: Number.parseInt(size_, 10) / 8
				});
			}
			if (type === "address" && typeof value === "string" && !isAddress(value)) throw new InvalidAddressError({ address: value });
			const bytesMatch = type.match(bytesRegex);
			if (bytesMatch) {
				const [_type, size_] = bytesMatch;
				if (size_ && size(value) !== Number.parseInt(size_, 10)) throw new BytesSizeMismatchError({
					expectedSize: Number.parseInt(size_, 10),
					givenSize: size(value)
				});
			}
			const struct$1 = types[type];
			if (struct$1) {
				validateReference(type);
				validateData(struct$1, value);
			}
		}
	};
	if (types.EIP712Domain && domain) {
		if (typeof domain !== "object") throw new InvalidDomainError({ domain });
		validateData(types.EIP712Domain, domain);
	}
	if (primaryType !== "EIP712Domain") if (types[primaryType]) validateData(types[primaryType], message);
	else throw new InvalidPrimaryTypeError({
		primaryType,
		types
	});
}
function getTypesForEIP712Domain({ domain }) {
	return [
		typeof domain?.name === "string" && {
			name: "name",
			type: "string"
		},
		domain?.version && {
			name: "version",
			type: "string"
		},
		(typeof domain?.chainId === "number" || typeof domain?.chainId === "bigint") && {
			name: "chainId",
			type: "uint256"
		},
		domain?.verifyingContract && {
			name: "verifyingContract",
			type: "address"
		},
		domain?.salt && {
			name: "salt",
			type: "bytes32"
		}
	].filter(Boolean);
}
function validateReference(type) {
	if (type === "address" || type === "bool" || type === "string" || type.startsWith("bytes") || type.startsWith("uint") || type.startsWith("int")) throw new InvalidStructTypeError({ type });
}
function hashTypedData(parameters) {
	const { domain = {}, message, primaryType } = parameters;
	const types = {
		EIP712Domain: getTypesForEIP712Domain({ domain }),
		...parameters.types
	};
	validateTypedData({
		domain,
		message,
		primaryType,
		types
	});
	const parts = ["0x1901"];
	if (domain) parts.push(hashDomain({
		domain,
		types
	}));
	if (primaryType !== "EIP712Domain") parts.push(hashStruct({
		data: message,
		primaryType,
		types
	}));
	return keccak256(concat(parts));
}
function hashDomain({ domain, types }) {
	return hashStruct({
		data: domain,
		primaryType: "EIP712Domain",
		types
	});
}
function hashStruct({ data, primaryType, types }) {
	return keccak256(encodeData({
		data,
		primaryType,
		types
	}));
}
function encodeData({ data, primaryType, types }) {
	const encodedTypes = [{ type: "bytes32" }];
	const encodedValues = [hashType({
		primaryType,
		types
	})];
	for (const field of types[primaryType]) {
		const [type, value] = encodeField({
			types,
			name: field.name,
			type: field.type,
			value: data[field.name]
		});
		encodedTypes.push(type);
		encodedValues.push(value);
	}
	return encodeAbiParameters(encodedTypes, encodedValues);
}
function hashType({ primaryType, types }) {
	return keccak256(toHex(encodeType({
		primaryType,
		types
	})));
}
function encodeType({ primaryType, types }) {
	let result = "";
	const unsortedDeps = findTypeDependencies({
		primaryType,
		types
	});
	unsortedDeps.delete(primaryType);
	const deps = [primaryType, ...Array.from(unsortedDeps).sort()];
	for (const type of deps) result += `${type}(${types[type].map(({ name, type: t }) => `${t} ${name}`).join(",")})`;
	return result;
}
function findTypeDependencies({ primaryType: primaryType_, types }, results = /* @__PURE__ */ new Set()) {
	const primaryType = primaryType_.match(/^\w*/u)?.[0];
	if (results.has(primaryType) || types[primaryType] === void 0) return results;
	results.add(primaryType);
	for (const field of types[primaryType]) findTypeDependencies({
		primaryType: field.type,
		types
	}, results);
	return results;
}
function encodeField({ types, name, type, value }) {
	if (types[type] !== void 0) return [{ type: "bytes32" }, keccak256(encodeData({
		data: value,
		primaryType: type,
		types
	}))];
	if (type === "bytes") return [{ type: "bytes32" }, keccak256(value)];
	if (type === "string") return [{ type: "bytes32" }, keccak256(toHex(value))];
	if (type.lastIndexOf("]") === type.length - 1) {
		const parsedType = type.slice(0, type.lastIndexOf("["));
		const typeValuePairs = value.map((item) => encodeField({
			name,
			type: parsedType,
			types,
			value: item
		}));
		return [{ type: "bytes32" }, keccak256(encodeAbiParameters(typeValuePairs.map(([t]) => t), typeValuePairs.map(([, v]) => v)))];
	}
	return [{ type }, value];
}
var MAGIC_VALUE = "0x1626ba7e";
var MAGIC_VALUE_BYTES = "0x20c13b0b";
const PERMISSIONS_REQUEST_REJECTED = 4001;
var PermissionsError = class PermissionsError extends Error {
	constructor(message, code, data) {
		super(message);
		this.code = code;
		this.data = data;
		Object.setPrototypeOf(this, PermissionsError.prototype);
	}
};
var Wallet = class {
	constructor(communicator) {
		this.communicator = communicator;
	}
	async getPermissions() {
		return (await this.communicator.send(Methods.wallet_getPermissions, void 0)).data;
	}
	async requestPermissions(permissions) {
		if (!this.isPermissionRequestValid(permissions)) throw new PermissionsError("Permissions request is invalid", PERMISSIONS_REQUEST_REJECTED);
		try {
			return (await this.communicator.send(Methods.wallet_requestPermissions, permissions)).data;
		} catch {
			throw new PermissionsError("Permissions rejected", PERMISSIONS_REQUEST_REJECTED);
		}
	}
	isPermissionRequestValid(permissions) {
		return permissions.every((pr) => {
			if (typeof pr === "object") return Object.keys(pr).every((method) => {
				if (Object.values(RestrictedMethods).includes(method)) return true;
				return false;
			});
			return false;
		});
	}
};
var hasPermission = (required, permissions) => permissions.some((permission) => permission.parentCapability === required);
var requirePermission = () => (_, propertyKey, descriptor) => {
	const originalMethod = descriptor.value;
	descriptor.value = async function() {
		const wallet = new Wallet(this.communicator);
		let currentPermissions = await wallet.getPermissions();
		if (!hasPermission(propertyKey, currentPermissions)) currentPermissions = await wallet.requestPermissions([{ [propertyKey]: {} }]);
		if (!hasPermission(propertyKey, currentPermissions)) throw new PermissionsError("Permissions rejected", PERMISSIONS_REQUEST_REJECTED);
		return originalMethod.apply(this);
	};
	return descriptor;
};
var requirePermissions_default = requirePermission;
var __decorate = function(decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Safe = class {
	constructor(communicator) {
		this.communicator = communicator;
	}
	async getChainInfo() {
		return (await this.communicator.send(Methods.getChainInfo, void 0)).data;
	}
	async getInfo() {
		return (await this.communicator.send(Methods.getSafeInfo, void 0)).data;
	}
	async experimental_getBalances({ currency = "usd" } = {}) {
		return (await this.communicator.send(Methods.getSafeBalances, { currency })).data;
	}
	async check1271Signature(messageHash, signature = "0x") {
		const safeInfo = await this.getInfo();
		const encodedIsValidSignatureCall = encodeFunctionData({
			abi: [{
				constant: false,
				inputs: [{
					name: "_dataHash",
					type: "bytes32"
				}, {
					name: "_signature",
					type: "bytes"
				}],
				name: "isValidSignature",
				outputs: [{
					name: "",
					type: "bytes4"
				}],
				payable: false,
				stateMutability: "nonpayable",
				type: "function"
			}],
			functionName: "isValidSignature",
			args: [messageHash, signature]
		});
		const payload = {
			call: RPC_CALLS.eth_call,
			params: [{
				to: safeInfo.safeAddress,
				data: encodedIsValidSignatureCall
			}, "latest"]
		};
		try {
			return (await this.communicator.send(Methods.rpcCall, payload)).data.slice(0, 10).toLowerCase() === MAGIC_VALUE;
		} catch (err) {
			return false;
		}
	}
	async check1271SignatureBytes(messageHash, signature = "0x") {
		const safeInfo = await this.getInfo();
		const encodedIsValidSignatureCall = encodeFunctionData({
			abi: [{
				constant: false,
				inputs: [{
					name: "_data",
					type: "bytes"
				}, {
					name: "_signature",
					type: "bytes"
				}],
				name: "isValidSignature",
				outputs: [{
					name: "",
					type: "bytes4"
				}],
				payable: false,
				stateMutability: "nonpayable",
				type: "function"
			}],
			functionName: "isValidSignature",
			args: [messageHash, signature]
		});
		const payload = {
			call: RPC_CALLS.eth_call,
			params: [{
				to: safeInfo.safeAddress,
				data: encodedIsValidSignatureCall
			}, "latest"]
		};
		try {
			return (await this.communicator.send(Methods.rpcCall, payload)).data.slice(0, 10).toLowerCase() === MAGIC_VALUE_BYTES;
		} catch (err) {
			return false;
		}
	}
	calculateMessageHash(message) {
		return hashMessage(message);
	}
	calculateTypedMessageHash(typedMessage) {
		const chainId = typeof typedMessage.domain.chainId === "object" ? typedMessage.domain.chainId.toNumber() : Number(typedMessage.domain.chainId);
		let primaryType = typedMessage.primaryType;
		if (!primaryType) {
			const fields = Object.values(typedMessage.types);
			const primaryTypes = Object.keys(typedMessage.types).filter((typeName) => fields.every((dataTypes) => dataTypes.every(({ type }) => type.replace("[", "").replace("]", "") !== typeName)));
			if (primaryTypes.length === 0 || primaryTypes.length > 1) throw new Error("Please specify primaryType");
			primaryType = primaryTypes[0];
		}
		return hashTypedData({
			message: typedMessage.message,
			domain: {
				...typedMessage.domain,
				chainId,
				verifyingContract: typedMessage.domain.verifyingContract,
				salt: typedMessage.domain.salt
			},
			types: typedMessage.types,
			primaryType
		});
	}
	async getOffChainSignature(messageHash) {
		return (await this.communicator.send(Methods.getOffChainSignature, messageHash)).data;
	}
	async isMessageSigned(message, signature = "0x") {
		let check;
		if (typeof message === "string") check = async () => {
			const messageHash = this.calculateMessageHash(message);
			return await this.isMessageHashSigned(messageHash, signature);
		};
		if (isObjectEIP712TypedData(message)) check = async () => {
			const messageHash = this.calculateTypedMessageHash(message);
			return await this.isMessageHashSigned(messageHash, signature);
		};
		if (check) return await check();
		throw new Error("Invalid message type");
	}
	async isMessageHashSigned(messageHash, signature = "0x") {
		const checks = [this.check1271Signature.bind(this), this.check1271SignatureBytes.bind(this)];
		for (const check of checks) if (await check(messageHash, signature)) return true;
		return false;
	}
	async getEnvironmentInfo() {
		return (await this.communicator.send(Methods.getEnvironmentInfo, void 0)).data;
	}
	async requestAddressBook() {
		return (await this.communicator.send(Methods.requestAddressBook, void 0)).data;
	}
};
__decorate([requirePermissions_default()], Safe.prototype, "requestAddressBook", null);
var SafeAppsSDK = class {
	constructor(opts = {}) {
		const { allowedDomains = null, debug = false } = opts;
		this.communicator = new communication_default(allowedDomains, debug);
		this.eth = new Eth(this.communicator);
		this.txs = new TXs(this.communicator);
		this.safe = new Safe(this.communicator);
		this.wallet = new Wallet(this.communicator);
	}
};
var esm_default = SafeAppsSDK;
var Operation = import_dist.Operation;
var TokenType = import_dist.TokenType;
var TransactionStatus = import_dist.TransactionStatus;
var TransferDirection = import_dist.TransferDirection;
export { MessageFormatter, Methods, Operation, RPC_CALLS, RestrictedMethods, TokenType, TransactionStatus, TransferDirection, esm_default as default, getSDKVersion, isObjectEIP712TypedData };
