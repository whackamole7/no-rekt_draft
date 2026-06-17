const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/secp256k1-C-MeyGRh.js","assets/secp256k1-BHLaEaGk.js","assets/index-oIpsyGKS.js","assets/index-B9KaC-oQ.css"])))=>i.map(i=>d[i]);
import { t as secp256k1 } from "./secp256k1-BHLaEaGk.js";
import { At as splitParameters, Dt as parseStructs, Gt as modifiers, Ht as InvalidAbiItemError, It as InvalidAbiParametersError, Kt as formatAbiItem$1, Ot as parseAbiParameter, Q as sha256$1, Wt as isStructSignature, Xt as keccak_256, kt as parseSignature, qt as formatAbiParameters, tt as __vitePreload } from "./index-oIpsyGKS.js";
import { $ as stringify$1, $t as CallExecutionError, A as IntegerOutOfRangeError, An as parseAccount, Ar as AbiEventNotFoundError, At as InvalidRequestRpcError, B as slice$1, Cr as AbiDecodingZeroDataError, Ct as AtomicityNotSupportedError, D as universalResolverResolveAbi, Dn as PositionOutOfBoundsError$1, Dt as InternalRpcError, E as textResolverAbi, En as createCursor, Et as DuplicateIdError, F as fromNumber, Fn as integerRegex$1, Ft as ParseRpcError, G as fromString, Gn as LruMap$1, Gr as isHex, Gt as UnknownRpcError, H as validate$3, Hn as isAddress, Ht as TransactionRejectedRpcError, I as fromString$1, Ir as BytesSizeMismatchError$1, It as ProviderDisconnectedError, J as toBigInt, Jt as UnsupportedProviderMethodError, K as size$3, Kn as InvalidAddressError$1, Kr as formatAbiItem, Kt as UnsupportedChainIdError, L as padLeft, Lr as DecodeLogDataMismatch, M as from$7, Mr as AbiEventSignatureNotFoundError, Mt as LimitExceededRpcError, N as fromBoolean, Nn as encodeAbiParameters, Nt as MethodNotFoundRpcError, O as universalResolverReverseAbi, On as encodeFunctionData, Ot as InvalidInputRpcError, P as fromBytes$1, Pn as bytesRegex$1, Pt as MethodNotSupportedRpcError, Q as trimLeft, Qn as hexToBytes, Qt as TimeoutError, R as padRight, Rr as DecodeLogTopicsMismatch, Rt as ResourceNotFoundRpcError, S as erc1271Abi, Sr as AbiDecodingDataSizeTooSmallError, St as AtomicReadyWalletRejectedUpgradeError, T as multicall3Abi, Tt as ChainDisconnectedError, U as from$6, Un as checksumAddress, Ur as BaseError, Ut as UnauthorizedProviderError, V as toNumber$1, Vn as concatHex, Vt as SwitchChainError, W as fromHex$1, Wn as getAddress, Wr as size, Wt as UnknownBundleIdError, X as toNumber, Xn as keccak256$1, Xt as HttpRequestError, Y as toBoolean, Yt as UserRejectedRequestError, Z as toString, Zt as RpcRequestError, _ as deploylessCallViaBytecodeBytecode, a as localBatchGatewayUrl, an as InvalidSerializableTransactionError, ar as stringToHex, at as serializeStateOverride, b as multicall3Bytecode, cn as TransactionReceiptNotFoundError, cr as hexToBool, ct as extract$1, d as withResolvers, dn as prettyPrint, en as ContractFunctionExecutionError, er as stringToBytes, et as BaseError$1, f as getCallError, hn as formatEther, in as RawContractError, ir as numberToHex, j as concat$1, jn as getAbiItem, jr as AbiEventSignatureEmptyTopicsError, jt as JsonRpcVersionUnsupportedError, k as toRpc, kt as InvalidParamsRpcError, l as call, ln as TransactionReceiptRevertedError, lr as hexToNumber, lt as getNodeError, m as encodeDeployData, mn as formatGwei, nn as ContractFunctionZeroDataError, nt as isAddressEqual, on as TransactionExecutionError, or as toHex, ot as formatTransactionRequest, p as getChainContractAddress, q as slice, qn as toEventSelector, qt as UnsupportedNonOptionalCapabilityError, rr as bytesToHex, rt as assertRequest, sn as TransactionNotFoundError, sr as hexToBigInt, tn as ContractFunctionRevertedError, tr as toBytes, tt as decodeFunctionResult, u as createBatchScheduler, un as WaitForTransactionReceiptTimeoutError, ur as trim, w as erc6492SignatureValidatorAbi, wt as BundleTooLargeError, x as addressResolverAbi, xn as decodeAbiParameters, xt as UnknownNodeError, y as erc6492SignatureValidatorByteCode, yn as stringify, z as size$2, zn as concat, zt as ResourceUnavailableRpcError } from "./ccip-CpUB_7Y_.js";
function parseAbiItem(signature) {
	let abiItem;
	if (typeof signature === "string") abiItem = parseSignature(signature);
	else {
		const structs = parseStructs(signature);
		const length = signature.length;
		for (let i = 0; i < length; i++) {
			const signature_ = signature[i];
			if (isStructSignature(signature_)) continue;
			abiItem = parseSignature(signature_, structs);
			break;
		}
	}
	if (!abiItem) throw new InvalidAbiItemError({ signature });
	return abiItem;
}
function parseAbiParameters(params) {
	const abiParameters = [];
	if (typeof params === "string") {
		const parameters = splitParameters(params);
		const length = parameters.length;
		for (let i = 0; i < length; i++) abiParameters.push(parseAbiParameter(parameters[i], { modifiers }));
	} else {
		const structs = parseStructs(params);
		const length = params.length;
		for (let i = 0; i < length; i++) {
			const signature = params[i];
			if (isStructSignature(signature)) continue;
			const parameters = splitParameters(signature);
			const length$1 = parameters.length;
			for (let k = 0; k < length$1; k++) abiParameters.push(parseAbiParameter(parameters[k], {
				modifiers,
				structs
			}));
		}
	}
	if (abiParameters.length === 0) throw new InvalidAbiParametersError({ params });
	return abiParameters;
}
function getAction(client, actionFn, name) {
	const action_implicit = client[actionFn.name];
	if (typeof action_implicit === "function") return action_implicit;
	const action_explicit = client[name];
	if (typeof action_explicit === "function") return action_explicit;
	return (params) => actionFn(client, params);
}
var FilterTypeNotSupportedError = class extends BaseError {
	constructor(type) {
		super(`Filter type "${type}" is not supported.`, { name: "FilterTypeNotSupportedError" });
	}
};
var docsPath$1 = "/docs/contract/encodeEventTopics";
function encodeEventTopics(parameters) {
	const { abi: abi$1, eventName, args } = parameters;
	let abiItem = abi$1[0];
	if (eventName) {
		const item = getAbiItem({
			abi: abi$1,
			name: eventName
		});
		if (!item) throw new AbiEventNotFoundError(eventName, { docsPath: docsPath$1 });
		abiItem = item;
	}
	if (abiItem.type !== "event") throw new AbiEventNotFoundError(void 0, { docsPath: docsPath$1 });
	const signature = toEventSelector(formatAbiItem(abiItem));
	let topics = [];
	if (args && "inputs" in abiItem) {
		const indexedInputs = abiItem.inputs?.filter((param) => "indexed" in param && param.indexed);
		const args_ = Array.isArray(args) ? args : Object.values(args).length > 0 ? indexedInputs?.map((x) => args[x.name]) ?? [] : [];
		if (args_.length > 0) topics = indexedInputs?.map((param, i) => {
			if (Array.isArray(args_[i])) return args_[i].map((_, j) => encodeArg({
				param,
				value: args_[i][j]
			}));
			return typeof args_[i] !== "undefined" && args_[i] !== null ? encodeArg({
				param,
				value: args_[i]
			}) : null;
		}) ?? [];
	}
	return [signature, ...topics];
}
function encodeArg({ param, value }) {
	if (param.type === "string" || param.type === "bytes") return keccak256$1(toBytes(value));
	if (param.type === "tuple" || param.type.match(/^(.*)\[(\d+)?\]$/)) throw new FilterTypeNotSupportedError(param.type);
	return encodeAbiParameters([param], [value]);
}
function createFilterRequestScope(client, { method }) {
	const requestMap = {};
	if (client.transport.type === "fallback") client.transport.onResponse?.(({ method: method_, response: id, status, transport }) => {
		if (status === "success" && method === method_) requestMap[id] = transport.request;
	});
	return ((id) => requestMap[id] || client.request);
}
async function createContractEventFilter(client, parameters) {
	const { address, abi: abi$1, args, eventName, fromBlock, strict, toBlock } = parameters;
	const getRequest = createFilterRequestScope(client, { method: "eth_newFilter" });
	const topics = eventName ? encodeEventTopics({
		abi: abi$1,
		args,
		eventName
	}) : void 0;
	const id = await client.request({
		method: "eth_newFilter",
		params: [{
			address,
			fromBlock: typeof fromBlock === "bigint" ? numberToHex(fromBlock) : fromBlock,
			toBlock: typeof toBlock === "bigint" ? numberToHex(toBlock) : toBlock,
			topics
		}]
	});
	return {
		abi: abi$1,
		args,
		eventName,
		id,
		request: getRequest(id),
		strict: Boolean(strict),
		type: "event"
	};
}
var EXECUTION_REVERTED_ERROR_CODE = 3;
function getContractError(err, { abi: abi$1, address, args, docsPath: docsPath$2, functionName, sender }) {
	const error = err instanceof RawContractError ? err : err instanceof BaseError ? err.walk((err$1) => "data" in err$1) || err.walk() : {};
	const { code, data, details, message, shortMessage } = error;
	return new ContractFunctionExecutionError((() => {
		if (err instanceof AbiDecodingZeroDataError) return new ContractFunctionZeroDataError({ functionName });
		if ([EXECUTION_REVERTED_ERROR_CODE, InternalRpcError.code].includes(code) && (data || details || message || shortMessage) || code === InvalidInputRpcError.code && details === "execution reverted" && data) return new ContractFunctionRevertedError({
			abi: abi$1,
			data: typeof data === "object" ? data.data : data,
			functionName,
			message: error instanceof RpcRequestError ? details : shortMessage ?? message
		});
		return err;
	})(), {
		abi: abi$1,
		args,
		contractAddress: address,
		docsPath: docsPath$2,
		functionName,
		sender
	});
}
function publicKeyToAddress(publicKey) {
	return checksumAddress(`0x${keccak256$1(`0x${publicKey.substring(4)}`).substring(26)}`);
}
async function recoverPublicKey({ hash, signature }) {
	const hashHex = isHex(hash) ? hash : toHex(hash);
	const { secp256k1: secp256k1$1 } = await __vitePreload(async () => {
		const { secp256k1: secp256k1$2 } = await import("./secp256k1-C-MeyGRh.js");
		return { secp256k1: secp256k1$2 };
	}, __vite__mapDeps([0,1,2,3]));
	return `0x${(() => {
		if (typeof signature === "object" && "r" in signature && "s" in signature) {
			const { r, s, v, yParity } = signature;
			const recoveryBit$1 = toRecoveryBit(Number(yParity ?? v));
			return new secp256k1$1.Signature(hexToBigInt(r), hexToBigInt(s)).addRecoveryBit(recoveryBit$1);
		}
		const signatureHex = isHex(signature) ? signature : toHex(signature);
		if (size(signatureHex) !== 65) throw new Error("invalid signature length");
		const recoveryBit = toRecoveryBit(hexToNumber(`0x${signatureHex.slice(130)}`));
		return secp256k1$1.Signature.fromCompact(signatureHex.substring(2, 130)).addRecoveryBit(recoveryBit);
	})().recoverPublicKey(hashHex.substring(2)).toHex(false)}`;
}
function toRecoveryBit(yParityOrV) {
	if (yParityOrV === 0 || yParityOrV === 1) return yParityOrV;
	if (yParityOrV === 27) return 0;
	if (yParityOrV === 28) return 1;
	throw new Error("Invalid yParityOrV value");
}
async function recoverAddress({ hash, signature }) {
	return publicKeyToAddress(await recoverPublicKey({
		hash,
		signature
	}));
}
function toRlp(bytes, to = "hex") {
	const encodable = getEncodable(bytes);
	const cursor = createCursor(new Uint8Array(encodable.length));
	encodable.encode(cursor);
	if (to === "hex") return bytesToHex(cursor.bytes);
	return cursor.bytes;
}
function getEncodable(bytes) {
	if (Array.isArray(bytes)) return getEncodableList(bytes.map((x) => getEncodable(x)));
	return getEncodableBytes(bytes);
}
function getEncodableList(list) {
	const bodyLength = list.reduce((acc, x) => acc + x.length, 0);
	const sizeOfBodyLength = getSizeOfLength(bodyLength);
	return {
		length: (() => {
			if (bodyLength <= 55) return 1 + bodyLength;
			return 1 + sizeOfBodyLength + bodyLength;
		})(),
		encode(cursor) {
			if (bodyLength <= 55) cursor.pushByte(192 + bodyLength);
			else {
				cursor.pushByte(247 + sizeOfBodyLength);
				if (sizeOfBodyLength === 1) cursor.pushUint8(bodyLength);
				else if (sizeOfBodyLength === 2) cursor.pushUint16(bodyLength);
				else if (sizeOfBodyLength === 3) cursor.pushUint24(bodyLength);
				else cursor.pushUint32(bodyLength);
			}
			for (const { encode: encode$3 } of list) encode$3(cursor);
		}
	};
}
function getEncodableBytes(bytesOrHex) {
	const bytes = typeof bytesOrHex === "string" ? hexToBytes(bytesOrHex) : bytesOrHex;
	const sizeOfBytesLength = getSizeOfLength(bytes.length);
	return {
		length: (() => {
			if (bytes.length === 1 && bytes[0] < 128) return 1;
			if (bytes.length <= 55) return 1 + bytes.length;
			return 1 + sizeOfBytesLength + bytes.length;
		})(),
		encode(cursor) {
			if (bytes.length === 1 && bytes[0] < 128) cursor.pushBytes(bytes);
			else if (bytes.length <= 55) {
				cursor.pushByte(128 + bytes.length);
				cursor.pushBytes(bytes);
			} else {
				cursor.pushByte(183 + sizeOfBytesLength);
				if (sizeOfBytesLength === 1) cursor.pushUint8(bytes.length);
				else if (sizeOfBytesLength === 2) cursor.pushUint16(bytes.length);
				else if (sizeOfBytesLength === 3) cursor.pushUint24(bytes.length);
				else cursor.pushUint32(bytes.length);
				cursor.pushBytes(bytes);
			}
		}
	};
}
function getSizeOfLength(length) {
	if (length < 2 ** 8) return 1;
	if (length < 2 ** 16) return 2;
	if (length < 2 ** 24) return 3;
	if (length < 2 ** 32) return 4;
	throw new BaseError("Length is too large.");
}
function hashAuthorization(parameters) {
	const { chainId, nonce, to } = parameters;
	const address = parameters.contractAddress ?? parameters.address;
	const hash = keccak256$1(concatHex(["0x05", toRlp([
		chainId ? numberToHex(chainId) : "0x",
		address,
		nonce ? numberToHex(nonce) : "0x"
	])]));
	if (to === "bytes") return hexToBytes(hash);
	return hash;
}
async function recoverAuthorizationAddress(parameters) {
	const { authorization, signature } = parameters;
	return recoverAddress({
		hash: hashAuthorization(authorization),
		signature: signature ?? authorization
	});
}
var EstimateGasExecutionError = class extends BaseError {
	constructor(cause, { account, docsPath: docsPath$2, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }) {
		const prettyArgs = prettyPrint({
			from: account?.address,
			to,
			value: typeof value !== "undefined" && `${formatEther(value)} ${chain?.nativeCurrency?.symbol || "ETH"}`,
			data,
			gas,
			gasPrice: typeof gasPrice !== "undefined" && `${formatGwei(gasPrice)} gwei`,
			maxFeePerGas: typeof maxFeePerGas !== "undefined" && `${formatGwei(maxFeePerGas)} gwei`,
			maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== "undefined" && `${formatGwei(maxPriorityFeePerGas)} gwei`,
			nonce
		});
		super(cause.shortMessage, {
			cause,
			docsPath: docsPath$2,
			metaMessages: [
				...cause.metaMessages ? [...cause.metaMessages, " "] : [],
				"Estimate Gas Arguments:",
				prettyArgs
			].filter(Boolean),
			name: "EstimateGasExecutionError"
		});
		Object.defineProperty(this, "cause", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		this.cause = cause;
	}
};
function getEstimateGasError(err, { docsPath: docsPath$2, ...args }) {
	return new EstimateGasExecutionError((() => {
		const cause = getNodeError(err, args);
		if (cause instanceof UnknownNodeError) return err;
		return cause;
	})(), {
		docsPath: docsPath$2,
		...args
	});
}
var BaseFeeScalarError = class extends BaseError {
	constructor() {
		super("`baseFeeMultiplier` must be greater than 1.", { name: "BaseFeeScalarError" });
	}
};
var Eip1559FeesNotSupportedError = class extends BaseError {
	constructor() {
		super("Chain does not support EIP-1559 fees.", { name: "Eip1559FeesNotSupportedError" });
	}
};
var MaxFeePerGasTooLowError = class extends BaseError {
	constructor({ maxPriorityFeePerGas }) {
		super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${formatGwei(maxPriorityFeePerGas)} gwei).`, { name: "MaxFeePerGasTooLowError" });
	}
};
var BlockNotFoundError = class extends BaseError {
	constructor({ blockHash, blockNumber }) {
		let identifier = "Block";
		if (blockHash) identifier = `Block at hash "${blockHash}"`;
		if (blockNumber) identifier = `Block at number "${blockNumber}"`;
		super(`${identifier} could not be found.`, { name: "BlockNotFoundError" });
	}
};
const transactionType = {
	"0x0": "legacy",
	"0x1": "eip2930",
	"0x2": "eip1559",
	"0x3": "eip4844",
	"0x4": "eip7702"
};
function formatTransaction(transaction, _) {
	const transaction_ = {
		...transaction,
		blockHash: transaction.blockHash ? transaction.blockHash : null,
		blockNumber: transaction.blockNumber ? BigInt(transaction.blockNumber) : null,
		chainId: transaction.chainId ? hexToNumber(transaction.chainId) : void 0,
		gas: transaction.gas ? BigInt(transaction.gas) : void 0,
		gasPrice: transaction.gasPrice ? BigInt(transaction.gasPrice) : void 0,
		maxFeePerBlobGas: transaction.maxFeePerBlobGas ? BigInt(transaction.maxFeePerBlobGas) : void 0,
		maxFeePerGas: transaction.maxFeePerGas ? BigInt(transaction.maxFeePerGas) : void 0,
		maxPriorityFeePerGas: transaction.maxPriorityFeePerGas ? BigInt(transaction.maxPriorityFeePerGas) : void 0,
		nonce: transaction.nonce ? hexToNumber(transaction.nonce) : void 0,
		to: transaction.to ? transaction.to : null,
		transactionIndex: transaction.transactionIndex ? Number(transaction.transactionIndex) : null,
		type: transaction.type ? transactionType[transaction.type] : void 0,
		typeHex: transaction.type ? transaction.type : void 0,
		value: transaction.value ? BigInt(transaction.value) : void 0,
		v: transaction.v ? BigInt(transaction.v) : void 0
	};
	if (transaction.authorizationList) transaction_.authorizationList = formatAuthorizationList(transaction.authorizationList);
	transaction_.yParity = (() => {
		if (transaction.yParity) return Number(transaction.yParity);
		if (typeof transaction_.v === "bigint") {
			if (transaction_.v === 0n || transaction_.v === 27n) return 0;
			if (transaction_.v === 1n || transaction_.v === 28n) return 1;
			if (transaction_.v >= 35n) return transaction_.v % 2n === 0n ? 1 : 0;
		}
	})();
	if (transaction_.type === "legacy") {
		delete transaction_.accessList;
		delete transaction_.maxFeePerBlobGas;
		delete transaction_.maxFeePerGas;
		delete transaction_.maxPriorityFeePerGas;
		delete transaction_.yParity;
	}
	if (transaction_.type === "eip2930") {
		delete transaction_.maxFeePerBlobGas;
		delete transaction_.maxFeePerGas;
		delete transaction_.maxPriorityFeePerGas;
	}
	if (transaction_.type === "eip1559") delete transaction_.maxFeePerBlobGas;
	return transaction_;
}
function formatAuthorizationList(authorizationList) {
	return authorizationList.map((authorization) => ({
		address: authorization.address,
		chainId: Number(authorization.chainId),
		nonce: Number(authorization.nonce),
		r: authorization.r,
		s: authorization.s,
		yParity: Number(authorization.yParity)
	}));
}
function formatBlock(block, _) {
	const transactions = (block.transactions ?? []).map((transaction) => {
		if (typeof transaction === "string") return transaction;
		return formatTransaction(transaction);
	});
	return {
		...block,
		baseFeePerGas: block.baseFeePerGas ? BigInt(block.baseFeePerGas) : null,
		blobGasUsed: block.blobGasUsed ? BigInt(block.blobGasUsed) : void 0,
		difficulty: block.difficulty ? BigInt(block.difficulty) : void 0,
		excessBlobGas: block.excessBlobGas ? BigInt(block.excessBlobGas) : void 0,
		gasLimit: block.gasLimit ? BigInt(block.gasLimit) : void 0,
		gasUsed: block.gasUsed ? BigInt(block.gasUsed) : void 0,
		hash: block.hash ? block.hash : null,
		logsBloom: block.logsBloom ? block.logsBloom : null,
		nonce: block.nonce ? block.nonce : null,
		number: block.number ? BigInt(block.number) : null,
		size: block.size ? BigInt(block.size) : void 0,
		timestamp: block.timestamp ? BigInt(block.timestamp) : void 0,
		transactions,
		totalDifficulty: block.totalDifficulty ? BigInt(block.totalDifficulty) : null
	};
}
async function getBlock(client, { blockHash, blockNumber, blockTag = client.experimental_blockTag ?? "latest", includeTransactions: includeTransactions_ } = {}) {
	const includeTransactions = includeTransactions_ ?? false;
	const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
	let block = null;
	if (blockHash) block = await client.request({
		method: "eth_getBlockByHash",
		params: [blockHash, includeTransactions]
	}, { dedupe: true });
	else block = await client.request({
		method: "eth_getBlockByNumber",
		params: [blockNumberHex || blockTag, includeTransactions]
	}, { dedupe: Boolean(blockNumberHex) });
	if (!block) throw new BlockNotFoundError({
		blockHash,
		blockNumber
	});
	return (client.chain?.formatters?.block?.format || formatBlock)(block, "getBlock");
}
async function getGasPrice(client) {
	const gasPrice = await client.request({ method: "eth_gasPrice" });
	return BigInt(gasPrice);
}
async function estimateMaxPriorityFeePerGas(client, args) {
	return internal_estimateMaxPriorityFeePerGas(client, args);
}
async function internal_estimateMaxPriorityFeePerGas(client, args) {
	const { block: block_, chain = client.chain, request } = args || {};
	try {
		const maxPriorityFeePerGas = chain?.fees?.maxPriorityFeePerGas ?? chain?.fees?.defaultPriorityFee;
		if (typeof maxPriorityFeePerGas === "function") {
			const maxPriorityFeePerGas_ = await maxPriorityFeePerGas({
				block: block_ || await getAction(client, getBlock, "getBlock")({}),
				client,
				request
			});
			if (maxPriorityFeePerGas_ === null) throw new Error();
			return maxPriorityFeePerGas_;
		}
		if (typeof maxPriorityFeePerGas !== "undefined") return maxPriorityFeePerGas;
		return hexToBigInt(await client.request({ method: "eth_maxPriorityFeePerGas" }));
	} catch {
		const [block, gasPrice] = await Promise.all([block_ ? Promise.resolve(block_) : getAction(client, getBlock, "getBlock")({}), getAction(client, getGasPrice, "getGasPrice")({})]);
		if (typeof block.baseFeePerGas !== "bigint") throw new Eip1559FeesNotSupportedError();
		const maxPriorityFeePerGas = gasPrice - block.baseFeePerGas;
		if (maxPriorityFeePerGas < 0n) return 0n;
		return maxPriorityFeePerGas;
	}
}
async function estimateFeesPerGas(client, args) {
	return internal_estimateFeesPerGas(client, args);
}
async function internal_estimateFeesPerGas(client, args) {
	const { block: block_, chain = client.chain, request, type = "eip1559" } = args || {};
	const baseFeeMultiplier = await (async () => {
		if (typeof chain?.fees?.baseFeeMultiplier === "function") return chain.fees.baseFeeMultiplier({
			block: block_,
			client,
			request
		});
		return chain?.fees?.baseFeeMultiplier ?? 1.2;
	})();
	if (baseFeeMultiplier < 1) throw new BaseFeeScalarError();
	const denominator = 10 ** (baseFeeMultiplier.toString().split(".")[1]?.length ?? 0);
	const multiply = (base) => base * BigInt(Math.ceil(baseFeeMultiplier * denominator)) / BigInt(denominator);
	const block = block_ ? block_ : await getAction(client, getBlock, "getBlock")({});
	if (typeof chain?.fees?.estimateFeesPerGas === "function") {
		const fees = await chain.fees.estimateFeesPerGas({
			block: block_,
			client,
			multiply,
			request,
			type
		});
		if (fees !== null) return fees;
	}
	if (type === "eip1559") {
		if (typeof block.baseFeePerGas !== "bigint") throw new Eip1559FeesNotSupportedError();
		const maxPriorityFeePerGas = typeof request?.maxPriorityFeePerGas === "bigint" ? request.maxPriorityFeePerGas : await internal_estimateMaxPriorityFeePerGas(client, {
			block,
			chain,
			request
		});
		const baseFeePerGas = multiply(block.baseFeePerGas);
		return {
			maxFeePerGas: request?.maxFeePerGas ?? baseFeePerGas + maxPriorityFeePerGas,
			maxPriorityFeePerGas
		};
	}
	return { gasPrice: request?.gasPrice ?? multiply(await getAction(client, getGasPrice, "getGasPrice")({})) };
}
async function getTransactionCount(client, { address, blockTag = "latest", blockNumber }) {
	return hexToNumber(await client.request({
		method: "eth_getTransactionCount",
		params: [address, typeof blockNumber === "bigint" ? numberToHex(blockNumber) : blockTag]
	}, { dedupe: Boolean(blockNumber) }));
}
function blobsToCommitments(parameters) {
	const { kzg } = parameters;
	const to = parameters.to ?? (typeof parameters.blobs[0] === "string" ? "hex" : "bytes");
	const blobs = typeof parameters.blobs[0] === "string" ? parameters.blobs.map((x) => hexToBytes(x)) : parameters.blobs;
	const commitments = [];
	for (const blob of blobs) commitments.push(Uint8Array.from(kzg.blobToKzgCommitment(blob)));
	return to === "bytes" ? commitments : commitments.map((x) => bytesToHex(x));
}
function blobsToProofs(parameters) {
	const { kzg } = parameters;
	const to = parameters.to ?? (typeof parameters.blobs[0] === "string" ? "hex" : "bytes");
	const blobs = typeof parameters.blobs[0] === "string" ? parameters.blobs.map((x) => hexToBytes(x)) : parameters.blobs;
	const commitments = typeof parameters.commitments[0] === "string" ? parameters.commitments.map((x) => hexToBytes(x)) : parameters.commitments;
	const proofs = [];
	for (let i = 0; i < blobs.length; i++) {
		const blob = blobs[i];
		const commitment = commitments[i];
		proofs.push(Uint8Array.from(kzg.computeBlobKzgProof(blob, commitment)));
	}
	return to === "bytes" ? proofs : proofs.map((x) => bytesToHex(x));
}
function sha256(value, to_) {
	const to = to_ || "hex";
	const bytes = sha256$1(isHex(value, { strict: false }) ? toBytes(value) : value);
	if (to === "bytes") return bytes;
	return toHex(bytes);
}
function commitmentToVersionedHash(parameters) {
	const { commitment, version = 1 } = parameters;
	const to = parameters.to ?? (typeof commitment === "string" ? "hex" : "bytes");
	const versionedHash = sha256(commitment, "bytes");
	versionedHash.set([version], 0);
	return to === "bytes" ? versionedHash : bytesToHex(versionedHash);
}
function commitmentsToVersionedHashes(parameters) {
	const { commitments, version } = parameters;
	const to = parameters.to ?? (typeof commitments[0] === "string" ? "hex" : "bytes");
	const hashes = [];
	for (const commitment of commitments) hashes.push(commitmentToVersionedHash({
		commitment,
		to,
		version
	}));
	return hashes;
}
var blobsPerTransaction = 6;
const fieldElementsPerBlob = 4096;
const bytesPerBlob = 32 * fieldElementsPerBlob;
const maxBytesPerTransaction = bytesPerBlob * blobsPerTransaction - 1 - 1 * fieldElementsPerBlob * blobsPerTransaction;
var BlobSizeTooLargeError = class extends BaseError {
	constructor({ maxSize, size: size$4 }) {
		super("Blob size is too large.", {
			metaMessages: [`Max: ${maxSize} bytes`, `Given: ${size$4} bytes`],
			name: "BlobSizeTooLargeError"
		});
	}
};
var EmptyBlobError = class extends BaseError {
	constructor() {
		super("Blob data must not be empty.", { name: "EmptyBlobError" });
	}
};
function toBlobs(parameters) {
	const to = parameters.to ?? (typeof parameters.data === "string" ? "hex" : "bytes");
	const data = typeof parameters.data === "string" ? hexToBytes(parameters.data) : parameters.data;
	const size_ = size(data);
	if (!size_) throw new EmptyBlobError();
	if (size_ > 761855) throw new BlobSizeTooLargeError({
		maxSize: maxBytesPerTransaction,
		size: size_
	});
	const blobs = [];
	let active = true;
	let position = 0;
	while (active) {
		const blob = createCursor(new Uint8Array(bytesPerBlob));
		let size$4 = 0;
		while (size$4 < fieldElementsPerBlob) {
			const bytes = data.slice(position, position + 31);
			blob.pushByte(0);
			blob.pushBytes(bytes);
			if (bytes.length < 31) {
				blob.pushByte(128);
				active = false;
				break;
			}
			size$4++;
			position += 31;
		}
		blobs.push(blob);
	}
	return to === "bytes" ? blobs.map((x) => x.bytes) : blobs.map((x) => bytesToHex(x.bytes));
}
function toBlobSidecars(parameters) {
	const { data, kzg, to } = parameters;
	const blobs = parameters.blobs ?? toBlobs({
		data,
		to
	});
	const commitments = parameters.commitments ?? blobsToCommitments({
		blobs,
		kzg,
		to
	});
	const proofs = parameters.proofs ?? blobsToProofs({
		blobs,
		commitments,
		kzg,
		to
	});
	const sidecars = [];
	for (let i = 0; i < blobs.length; i++) sidecars.push({
		blob: blobs[i],
		commitment: commitments[i],
		proof: proofs[i]
	});
	return sidecars;
}
function getTransactionType(transaction) {
	if (transaction.type) return transaction.type;
	if (typeof transaction.authorizationList !== "undefined") return "eip7702";
	if (typeof transaction.blobs !== "undefined" || typeof transaction.blobVersionedHashes !== "undefined" || typeof transaction.maxFeePerBlobGas !== "undefined" || typeof transaction.sidecars !== "undefined") return "eip4844";
	if (typeof transaction.maxFeePerGas !== "undefined" || typeof transaction.maxPriorityFeePerGas !== "undefined") return "eip1559";
	if (typeof transaction.gasPrice !== "undefined") {
		if (typeof transaction.accessList !== "undefined") return "eip2930";
		return "legacy";
	}
	throw new InvalidSerializableTransactionError({ transaction });
}
function getTransactionError(err, { docsPath: docsPath$2, ...args }) {
	return new TransactionExecutionError((() => {
		const cause = getNodeError(err, args);
		if (cause instanceof UnknownNodeError) return err;
		return cause;
	})(), {
		docsPath: docsPath$2,
		...args
	});
}
async function getChainId(client) {
	return hexToNumber(await client.request({ method: "eth_chainId" }, { dedupe: true }));
}
async function fillTransaction(client, parameters) {
	const { account = client.account, accessList, authorizationList, chain = client.chain, blobVersionedHashes, blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce: nonce_, nonceManager, to, type, value, ...rest } = parameters;
	const nonce = await (async () => {
		if (!account) return nonce_;
		if (!nonceManager) return nonce_;
		if (typeof nonce_ !== "undefined") return nonce_;
		const account_ = parseAccount(account);
		const chainId = chain ? chain.id : await getAction(client, getChainId, "getChainId")({});
		return await nonceManager.consume({
			address: account_.address,
			chainId,
			client
		});
	})();
	assertRequest(parameters);
	const chainFormat = chain?.formatters?.transactionRequest?.format;
	const request = (chainFormat || formatTransactionRequest)({
		...extract$1(rest, { format: chainFormat }),
		account: account ? parseAccount(account) : void 0,
		accessList,
		authorizationList,
		blobs,
		blobVersionedHashes,
		data,
		gas,
		gasPrice,
		maxFeePerBlobGas,
		maxFeePerGas,
		maxPriorityFeePerGas,
		nonce,
		to,
		type,
		value
	}, "fillTransaction");
	try {
		const response = await client.request({
			method: "eth_fillTransaction",
			params: [request]
		});
		const transaction = (chain?.formatters?.transaction?.format || formatTransaction)(response.tx);
		delete transaction.blockHash;
		delete transaction.blockNumber;
		delete transaction.r;
		delete transaction.s;
		delete transaction.transactionIndex;
		delete transaction.v;
		delete transaction.yParity;
		transaction.data = transaction.input;
		if (transaction.gas) transaction.gas = parameters.gas ?? transaction.gas;
		if (transaction.gasPrice) transaction.gasPrice = parameters.gasPrice ?? transaction.gasPrice;
		if (transaction.maxFeePerBlobGas) transaction.maxFeePerBlobGas = parameters.maxFeePerBlobGas ?? transaction.maxFeePerBlobGas;
		if (transaction.maxFeePerGas) transaction.maxFeePerGas = parameters.maxFeePerGas ?? transaction.maxFeePerGas;
		if (transaction.maxPriorityFeePerGas) transaction.maxPriorityFeePerGas = parameters.maxPriorityFeePerGas ?? transaction.maxPriorityFeePerGas;
		if (transaction.nonce) transaction.nonce = parameters.nonce ?? transaction.nonce;
		const feeMultiplier = await (async () => {
			if (typeof chain?.fees?.baseFeeMultiplier === "function") {
				const block = await getAction(client, getBlock, "getBlock")({});
				return chain.fees.baseFeeMultiplier({
					block,
					client,
					request: parameters
				});
			}
			return chain?.fees?.baseFeeMultiplier ?? 1.2;
		})();
		if (feeMultiplier < 1) throw new BaseFeeScalarError();
		const denominator = 10 ** (feeMultiplier.toString().split(".")[1]?.length ?? 0);
		const multiplyFee = (base) => base * BigInt(Math.ceil(feeMultiplier * denominator)) / BigInt(denominator);
		if (transaction.maxFeePerGas && !parameters.maxFeePerGas) transaction.maxFeePerGas = multiplyFee(transaction.maxFeePerGas);
		if (transaction.gasPrice && !parameters.gasPrice) transaction.gasPrice = multiplyFee(transaction.gasPrice);
		return {
			raw: response.raw,
			transaction: {
				from: request.from,
				...transaction
			}
		};
	} catch (err) {
		throw getTransactionError(err, {
			...parameters,
			chain: client.chain
		});
	}
}
const defaultParameters = [
	"blobVersionedHashes",
	"chainId",
	"fees",
	"gas",
	"nonce",
	"type"
];
const eip1559NetworkCache = /* @__PURE__ */ new Map();
const supportsFillTransaction = /* @__PURE__ */ new LruMap$1(128);
async function prepareTransactionRequest(client, args) {
	let request = args;
	request.account ??= client.account;
	request.parameters ??= defaultParameters;
	const { account: account_, chain = client.chain, nonceManager, parameters } = request;
	const prepareTransactionRequest$1 = (() => {
		if (typeof chain?.prepareTransactionRequest === "function") return {
			fn: chain.prepareTransactionRequest,
			runAt: ["beforeFillTransaction"]
		};
		if (Array.isArray(chain?.prepareTransactionRequest)) return {
			fn: chain.prepareTransactionRequest[0],
			runAt: chain.prepareTransactionRequest[1].runAt
		};
	})();
	let chainId;
	async function getChainId$1() {
		if (chainId) return chainId;
		if (typeof request.chainId !== "undefined") return request.chainId;
		if (chain) return chain.id;
		chainId = await getAction(client, getChainId, "getChainId")({});
		return chainId;
	}
	const account = account_ ? parseAccount(account_) : account_;
	let nonce = request.nonce;
	if (parameters.includes("nonce") && typeof nonce === "undefined" && account && nonceManager) {
		const chainId$1 = await getChainId$1();
		nonce = await nonceManager.consume({
			address: account.address,
			chainId: chainId$1,
			client
		});
	}
	if (prepareTransactionRequest$1?.fn && prepareTransactionRequest$1.runAt?.includes("beforeFillTransaction")) {
		request = await prepareTransactionRequest$1.fn({
			...request,
			chain
		}, { phase: "beforeFillTransaction" });
		nonce ??= request.nonce;
	}
	const fillResult = (() => {
		if ((parameters.includes("blobVersionedHashes") || parameters.includes("sidecars")) && request.kzg && request.blobs) return false;
		if (supportsFillTransaction.get(client.uid) === false) return false;
		if (!["fees", "gas"].some((parameter) => parameters.includes(parameter))) return false;
		if (parameters.includes("chainId") && typeof request.chainId !== "number") return true;
		if (parameters.includes("nonce") && typeof nonce !== "number") return true;
		if (parameters.includes("fees") && typeof request.gasPrice !== "bigint" && (typeof request.maxFeePerGas !== "bigint" || typeof request.maxPriorityFeePerGas !== "bigint")) return true;
		if (parameters.includes("gas") && typeof request.gas !== "bigint") return true;
		return false;
	})() ? await getAction(client, fillTransaction, "fillTransaction")({
		...request,
		nonce
	}).then((result) => {
		const { chainId: chainId$1, from: from$8, gas: gas$1, gasPrice, nonce: nonce$1, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, type: type$1, ...rest } = result.transaction;
		supportsFillTransaction.set(client.uid, true);
		return {
			...request,
			...from$8 ? { from: from$8 } : {},
			...type$1 ? { type: type$1 } : {},
			...typeof chainId$1 !== "undefined" ? { chainId: chainId$1 } : {},
			...typeof gas$1 !== "undefined" ? { gas: gas$1 } : {},
			...typeof gasPrice !== "undefined" ? { gasPrice } : {},
			...typeof nonce$1 !== "undefined" ? { nonce: nonce$1 } : {},
			...typeof maxFeePerBlobGas !== "undefined" ? { maxFeePerBlobGas } : {},
			...typeof maxFeePerGas !== "undefined" ? { maxFeePerGas } : {},
			...typeof maxPriorityFeePerGas !== "undefined" ? { maxPriorityFeePerGas } : {},
			..."nonceKey" in rest && typeof rest.nonceKey !== "undefined" ? { nonceKey: rest.nonceKey } : {}
		};
	}).catch((e) => {
		const error = e;
		if (error.name !== "TransactionExecutionError") return request;
		if (error.walk?.((e$1) => {
			const error$1 = e$1;
			return error$1.name === "MethodNotFoundRpcError" || error$1.name === "MethodNotSupportedRpcError";
		})) supportsFillTransaction.set(client.uid, false);
		return request;
	}) : request;
	nonce ??= fillResult.nonce;
	request = {
		...fillResult,
		...account ? { from: account?.address } : {},
		...nonce ? { nonce } : {}
	};
	const { blobs, gas, kzg, type } = request;
	if (prepareTransactionRequest$1?.fn && prepareTransactionRequest$1.runAt?.includes("beforeFillParameters")) request = await prepareTransactionRequest$1.fn({
		...request,
		chain
	}, { phase: "beforeFillParameters" });
	let block;
	async function getBlock$1() {
		if (block) return block;
		block = await getAction(client, getBlock, "getBlock")({ blockTag: "latest" });
		return block;
	}
	if (parameters.includes("nonce") && typeof nonce === "undefined" && account && !nonceManager) request.nonce = await getAction(client, getTransactionCount, "getTransactionCount")({
		address: account.address,
		blockTag: "pending"
	});
	if ((parameters.includes("blobVersionedHashes") || parameters.includes("sidecars")) && blobs && kzg) {
		const commitments = blobsToCommitments({
			blobs,
			kzg
		});
		if (parameters.includes("blobVersionedHashes")) request.blobVersionedHashes = commitmentsToVersionedHashes({
			commitments,
			to: "hex"
		});
		if (parameters.includes("sidecars")) request.sidecars = toBlobSidecars({
			blobs,
			commitments,
			proofs: blobsToProofs({
				blobs,
				commitments,
				kzg
			}),
			to: "hex"
		});
	}
	if (parameters.includes("chainId")) request.chainId = await getChainId$1();
	if ((parameters.includes("fees") || parameters.includes("type")) && typeof type === "undefined") try {
		request.type = getTransactionType(request);
	} catch {
		let isEip1559Network = eip1559NetworkCache.get(client.uid);
		if (typeof isEip1559Network === "undefined") {
			isEip1559Network = typeof (await getBlock$1())?.baseFeePerGas === "bigint";
			eip1559NetworkCache.set(client.uid, isEip1559Network);
		}
		request.type = isEip1559Network ? "eip1559" : "legacy";
	}
	if (parameters.includes("fees")) if (request.type !== "legacy" && request.type !== "eip2930") {
		if (typeof request.maxFeePerGas === "undefined" || typeof request.maxPriorityFeePerGas === "undefined") {
			const { maxFeePerGas, maxPriorityFeePerGas } = await internal_estimateFeesPerGas(client, {
				block: await getBlock$1(),
				chain,
				request
			});
			if (typeof request.maxPriorityFeePerGas === "undefined" && request.maxFeePerGas && request.maxFeePerGas < maxPriorityFeePerGas) throw new MaxFeePerGasTooLowError({ maxPriorityFeePerGas });
			request.maxPriorityFeePerGas = maxPriorityFeePerGas;
			request.maxFeePerGas = maxFeePerGas;
		}
	} else {
		if (typeof request.maxFeePerGas !== "undefined" || typeof request.maxPriorityFeePerGas !== "undefined") throw new Eip1559FeesNotSupportedError();
		if (typeof request.gasPrice === "undefined") {
			const { gasPrice: gasPrice_ } = await internal_estimateFeesPerGas(client, {
				block: await getBlock$1(),
				chain,
				request,
				type: "legacy"
			});
			request.gasPrice = gasPrice_;
		}
	}
	if (parameters.includes("gas") && typeof gas === "undefined") request.gas = await getAction(client, estimateGas, "estimateGas")({
		...request,
		account,
		prepare: account?.type === "local" ? [] : ["blobVersionedHashes"]
	});
	if (prepareTransactionRequest$1?.fn && prepareTransactionRequest$1.runAt?.includes("afterFillParameters")) request = await prepareTransactionRequest$1.fn({
		...request,
		chain
	}, { phase: "afterFillParameters" });
	assertRequest(request);
	delete request.parameters;
	return request;
}
async function estimateGas(client, args) {
	const { account: account_ = client.account, prepare = true } = args;
	const account = account_ ? parseAccount(account_) : void 0;
	const parameters = (() => {
		if (Array.isArray(prepare)) return prepare;
		if (account?.type !== "local") return ["blobVersionedHashes"];
	})();
	try {
		const to = await (async () => {
			if (args.to) return args.to;
			if (args.authorizationList && args.authorizationList.length > 0) return await recoverAuthorizationAddress({ authorization: args.authorizationList[0] }).catch(() => {
				throw new BaseError("`to` is required. Could not infer from `authorizationList`");
			});
		})();
		const { accessList, authorizationList, blobs, blobVersionedHashes, blockNumber, blockTag, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, value, stateOverride, ...rest } = prepare ? await prepareTransactionRequest(client, {
			...args,
			parameters,
			to
		}) : args;
		if (gas && args.gas !== gas) return gas;
		const block = (typeof blockNumber === "bigint" ? numberToHex(blockNumber) : void 0) || blockTag;
		const rpcStateOverride = serializeStateOverride(stateOverride);
		assertRequest(args);
		const chainFormat = client.chain?.formatters?.transactionRequest?.format;
		const request = (chainFormat || formatTransactionRequest)({
			...extract$1(rest, { format: chainFormat }),
			account,
			accessList,
			authorizationList,
			blobs,
			blobVersionedHashes,
			data,
			gasPrice,
			maxFeePerBlobGas,
			maxFeePerGas,
			maxPriorityFeePerGas,
			nonce,
			to,
			value
		}, "estimateGas");
		return BigInt(await client.request({
			method: "eth_estimateGas",
			params: rpcStateOverride ? [
				request,
				block ?? client.experimental_blockTag ?? "latest",
				rpcStateOverride
			] : block ? [request, block] : [request]
		}));
	} catch (err) {
		throw getEstimateGasError(err, {
			...args,
			account,
			chain: client.chain
		});
	}
}
async function estimateContractGas(client, parameters) {
	const { abi: abi$1, address, args, functionName, dataSuffix, ...request } = parameters;
	const data = encodeFunctionData({
		abi: abi$1,
		args,
		functionName
	});
	try {
		return await getAction(client, estimateGas, "estimateGas")({
			data: `${data}${dataSuffix ? dataSuffix.replace("0x", "") : ""}`,
			to: address,
			...request
		});
	} catch (error) {
		throw getContractError(error, {
			abi: abi$1,
			address,
			args,
			docsPath: "/docs/contract/estimateContractGas",
			functionName,
			sender: (request.account ? parseAccount(request.account) : void 0)?.address
		});
	}
}
var docsPath = "/docs/contract/decodeEventLog";
function decodeEventLog(parameters) {
	const { abi: abi$1, data, strict: strict_, topics } = parameters;
	const strict = strict_ ?? true;
	const [signature, ...argTopics] = topics;
	if (!signature) throw new AbiEventSignatureEmptyTopicsError({ docsPath });
	const abiItem = abi$1.find((x) => x.type === "event" && signature === toEventSelector(formatAbiItem(x)));
	if (!(abiItem && "name" in abiItem) || abiItem.type !== "event") throw new AbiEventSignatureNotFoundError(signature, { docsPath });
	const { name, inputs } = abiItem;
	const isUnnamed = inputs?.some((x) => !("name" in x && x.name));
	const args = isUnnamed ? [] : {};
	const indexedInputs = inputs.map((x, i) => [x, i]).filter(([x]) => "indexed" in x && x.indexed);
	const missingIndexedInputs = [];
	for (let i = 0; i < indexedInputs.length; i++) {
		const [param, argIndex] = indexedInputs[i];
		const topic = argTopics[i];
		if (!topic) {
			if (strict) throw new DecodeLogTopicsMismatch({
				abiItem,
				param
			});
			missingIndexedInputs.push([param, argIndex]);
			continue;
		}
		args[isUnnamed ? argIndex : param.name || argIndex] = decodeTopic({
			param,
			value: topic
		});
	}
	const nonIndexedInputs = inputs.filter((x) => !("indexed" in x && x.indexed));
	const inputsToDecode = strict ? nonIndexedInputs : [...missingIndexedInputs.map(([param]) => param), ...nonIndexedInputs];
	if (inputsToDecode.length > 0) {
		if (data && data !== "0x") try {
			const decodedData = decodeAbiParameters(inputsToDecode, data);
			if (decodedData) {
				let dataIndex = 0;
				if (!strict) for (const [param, argIndex] of missingIndexedInputs) args[isUnnamed ? argIndex : param.name || argIndex] = decodedData[dataIndex++];
				if (isUnnamed) {
					for (let i = 0; i < inputs.length; i++) if (args[i] === void 0 && dataIndex < decodedData.length) args[i] = decodedData[dataIndex++];
				} else for (let i = 0; i < nonIndexedInputs.length; i++) args[nonIndexedInputs[i].name] = decodedData[dataIndex++];
			}
		} catch (err) {
			if (strict) {
				if (err instanceof AbiDecodingDataSizeTooSmallError || err instanceof PositionOutOfBoundsError$1) throw new DecodeLogDataMismatch({
					abiItem,
					data,
					params: inputsToDecode,
					size: size(data)
				});
				throw err;
			}
		}
		else if (strict) throw new DecodeLogDataMismatch({
			abiItem,
			data: "0x",
			params: inputsToDecode,
			size: 0
		});
	}
	return {
		eventName: name,
		args: Object.values(args).length > 0 ? args : void 0
	};
}
function decodeTopic({ param, value }) {
	if (param.type === "string" || param.type === "bytes" || param.type === "tuple" || param.type.match(/^(.*)\[(\d+)?\]$/)) return value;
	return (decodeAbiParameters([param], value) || [])[0];
}
function parseEventLogs(parameters) {
	const { abi: abi$1, args, logs, strict = true } = parameters;
	const eventName = (() => {
		if (!parameters.eventName) return void 0;
		if (Array.isArray(parameters.eventName)) return parameters.eventName;
		return [parameters.eventName];
	})();
	return logs.map((log) => {
		const abiItems = abi$1.filter((abiItem$1) => abiItem$1.type === "event" && log.topics[0] === toEventSelector(abiItem$1));
		if (abiItems.length === 0) return null;
		let event;
		let abiItem;
		for (const item of abiItems) try {
			event = decodeEventLog({
				...log,
				abi: [item],
				strict: true
			});
			abiItem = item;
			break;
		} catch {}
		if (!event && !strict) {
			abiItem = abiItems[0];
			try {
				event = decodeEventLog({
					...log,
					abi: [abiItem],
					strict: false
				});
			} catch {
				const isUnnamed = abiItem.inputs?.some((x) => !("name" in x && x.name));
				return {
					...log,
					args: isUnnamed ? [] : {},
					eventName: abiItem.name
				};
			}
		}
		if (!event || !abiItem) return null;
		if (eventName && !eventName.includes(event.eventName)) return null;
		if (!includesArgs({
			args: event.args,
			inputs: abiItem.inputs,
			matchArgs: args
		})) return null;
		return {
			...event,
			...log
		};
	}).filter(Boolean);
}
function includesArgs(parameters) {
	const { args, inputs, matchArgs } = parameters;
	if (!matchArgs) return true;
	if (!args) return false;
	function isEqual(input, value, arg) {
		try {
			if (input.type === "address") return isAddressEqual(value, arg);
			if (input.type === "string" || input.type === "bytes") return keccak256$1(toBytes(value)) === arg;
			return value === arg;
		} catch {
			return false;
		}
	}
	if (Array.isArray(args) && Array.isArray(matchArgs)) return matchArgs.every((value, index$1) => {
		if (value === null || value === void 0) return true;
		const input = inputs[index$1];
		if (!input) return false;
		return (Array.isArray(value) ? value : [value]).some((value$1) => isEqual(input, value$1, args[index$1]));
	});
	if (typeof args === "object" && !Array.isArray(args) && typeof matchArgs === "object" && !Array.isArray(matchArgs)) return Object.entries(matchArgs).every(([key, value]) => {
		if (value === null || value === void 0) return true;
		const input = inputs.find((input$1) => input$1.name === key);
		if (!input) return false;
		return (Array.isArray(value) ? value : [value]).some((value$1) => isEqual(input, value$1, args[key]));
	});
	return false;
}
function formatLog(log, { args, eventName } = {}) {
	return {
		...log,
		blockHash: log.blockHash ? log.blockHash : null,
		blockNumber: log.blockNumber ? BigInt(log.blockNumber) : null,
		blockTimestamp: log.blockTimestamp ? BigInt(log.blockTimestamp) : log.blockTimestamp === null ? null : void 0,
		logIndex: log.logIndex ? Number(log.logIndex) : null,
		transactionHash: log.transactionHash ? log.transactionHash : null,
		transactionIndex: log.transactionIndex ? Number(log.transactionIndex) : null,
		...eventName ? {
			args,
			eventName
		} : {}
	};
}
async function getLogs(client, { address, blockHash, fromBlock, toBlock, event, events: events_, args, strict: strict_ } = {}) {
	const strict = strict_ ?? false;
	const events = events_ ?? (event ? [event] : void 0);
	let topics = [];
	if (events) {
		topics = [events.flatMap((event$1) => encodeEventTopics({
			abi: [event$1],
			eventName: event$1.name,
			args: events_ ? void 0 : args
		}))];
		if (event) topics = topics[0];
	}
	let logs;
	if (blockHash) logs = await client.request({
		method: "eth_getLogs",
		params: [{
			address,
			topics,
			blockHash
		}]
	});
	else logs = await client.request({
		method: "eth_getLogs",
		params: [{
			address,
			topics,
			fromBlock: typeof fromBlock === "bigint" ? numberToHex(fromBlock) : fromBlock,
			toBlock: typeof toBlock === "bigint" ? numberToHex(toBlock) : toBlock
		}]
	});
	const formattedLogs = logs.map((log) => formatLog(log));
	if (!events) return formattedLogs;
	return parseEventLogs({
		abi: events,
		args,
		logs: formattedLogs,
		strict
	});
}
async function getContractEvents(client, parameters) {
	const { abi: abi$1, address, args, blockHash, eventName, fromBlock, toBlock, strict } = parameters;
	const event = eventName ? getAbiItem({
		abi: abi$1,
		name: eventName
	}) : void 0;
	const events = !event ? abi$1.filter((x) => x.type === "event") : void 0;
	return getAction(client, getLogs, "getLogs")({
		address,
		args,
		blockHash,
		event,
		events,
		fromBlock,
		toBlock,
		strict
	});
}
async function readContract(client, parameters) {
	const { abi: abi$1, address, args, functionName, ...rest } = parameters;
	const calldata = encodeFunctionData({
		abi: abi$1,
		args,
		functionName
	});
	try {
		const { data } = await getAction(client, call, "call")({
			...rest,
			data: calldata,
			to: address
		});
		return decodeFunctionResult({
			abi: abi$1,
			args,
			functionName,
			data: data || "0x"
		});
	} catch (error) {
		throw getContractError(error, {
			abi: abi$1,
			address,
			args,
			docsPath: "/docs/contract/readContract",
			functionName
		});
	}
}
async function simulateContract(client, parameters) {
	const { abi: abi$1, address, args, dataSuffix, functionName, ...callRequest } = parameters;
	const account = callRequest.account ? parseAccount(callRequest.account) : client.account;
	const calldata = encodeFunctionData({
		abi: abi$1,
		args,
		functionName
	});
	try {
		const { data } = await getAction(client, call, "call")({
			batch: false,
			data: `${calldata}${dataSuffix ? dataSuffix.replace("0x", "") : ""}`,
			to: address,
			...callRequest,
			account
		});
		return {
			result: decodeFunctionResult({
				abi: abi$1,
				args,
				functionName,
				data: data || "0x"
			}),
			request: {
				abi: abi$1.filter((abiItem) => "name" in abiItem && abiItem.name === parameters.functionName),
				address,
				args,
				dataSuffix,
				functionName,
				...callRequest,
				account
			}
		};
	} catch (error) {
		throw getContractError(error, {
			abi: abi$1,
			address,
			args,
			docsPath: "/docs/contract/simulateContract",
			functionName,
			sender: account?.address
		});
	}
}
const listenersCache = /* @__PURE__ */ new Map();
const cleanupCache = /* @__PURE__ */ new Map();
var callbackCount = 0;
function observe(observerId, callbacks, fn) {
	const callbackId = ++callbackCount;
	const getListeners = () => listenersCache.get(observerId) || [];
	const unsubscribe = () => {
		const listeners$1 = getListeners();
		listenersCache.set(observerId, listeners$1.filter((cb) => cb.id !== callbackId));
	};
	const unwatch = () => {
		const listeners$1 = getListeners();
		if (!listeners$1.some((cb) => cb.id === callbackId)) return;
		const cleanup$1 = cleanupCache.get(observerId);
		if (listeners$1.length === 1 && cleanup$1) {
			const p = cleanup$1();
			if (p instanceof Promise) p.catch(() => {});
		}
		unsubscribe();
	};
	const listeners = getListeners();
	listenersCache.set(observerId, [...listeners, {
		id: callbackId,
		fns: callbacks
	}]);
	if (listeners && listeners.length > 0) return unwatch;
	const emit = {};
	for (const key in callbacks) emit[key] = ((...args) => {
		const listeners$1 = getListeners();
		if (listeners$1.length === 0) return;
		for (const listener of listeners$1) listener.fns[key]?.(...args);
	});
	const cleanup = fn(emit);
	if (typeof cleanup === "function") cleanupCache.set(observerId, cleanup);
	return unwatch;
}
async function wait(time) {
	return new Promise((res) => setTimeout(res, time));
}
function poll(fn, { emitOnBegin, initialWaitTime, interval }) {
	let active = true;
	const unwatch = () => active = false;
	const watch = async () => {
		let data;
		if (emitOnBegin) data = await fn({ unpoll: unwatch });
		await wait(await initialWaitTime?.(data) ?? interval);
		const poll$1 = async () => {
			if (!active) return;
			await fn({ unpoll: unwatch });
			await wait(interval);
			poll$1();
		};
		poll$1();
	};
	watch();
	return unwatch;
}
const promiseCache$1 = /* @__PURE__ */ new Map();
const responseCache = /* @__PURE__ */ new Map();
function getCache(cacheKey$1) {
	const buildCache = (cacheKey$2, cache) => ({
		clear: () => cache.delete(cacheKey$2),
		get: () => cache.get(cacheKey$2),
		set: (data) => cache.set(cacheKey$2, data)
	});
	const promise = buildCache(cacheKey$1, promiseCache$1);
	const response = buildCache(cacheKey$1, responseCache);
	return {
		clear: () => {
			promise.clear();
			response.clear();
		},
		promise,
		response
	};
}
async function withCache(fn, { cacheKey: cacheKey$1, cacheTime = Number.POSITIVE_INFINITY }) {
	const cache = getCache(cacheKey$1);
	const response = cache.response.get();
	if (response && cacheTime > 0) {
		if (Date.now() - response.created.getTime() < cacheTime) return response.data;
	}
	let promise = cache.promise.get();
	if (!promise) {
		promise = fn();
		cache.promise.set(promise);
	}
	try {
		const data = await promise;
		cache.response.set({
			created: /* @__PURE__ */ new Date(),
			data
		});
		return data;
	} finally {
		cache.promise.clear();
	}
}
var cacheKey = (id) => `blockNumber.${id}`;
async function getBlockNumber(client, { cacheTime = client.cacheTime } = {}) {
	const blockNumberHex = await withCache(() => client.request({ method: "eth_blockNumber" }), {
		cacheKey: cacheKey(client.uid),
		cacheTime
	});
	return BigInt(blockNumberHex);
}
async function getFilterChanges(_client, { filter }) {
	const strict = "strict" in filter && filter.strict;
	const logs = await filter.request({
		method: "eth_getFilterChanges",
		params: [filter.id]
	});
	if (typeof logs[0] === "string") return logs;
	const formattedLogs = logs.map((log) => formatLog(log));
	if (!("abi" in filter) || !filter.abi) return formattedLogs;
	return parseEventLogs({
		abi: filter.abi,
		logs: formattedLogs,
		strict
	});
}
async function uninstallFilter(_client, { filter }) {
	return filter.request({
		method: "eth_uninstallFilter",
		params: [filter.id]
	});
}
function watchContractEvent(client, parameters) {
	const { abi: abi$1, address, args, batch = true, eventName, fromBlock, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ } = parameters;
	const enablePolling = (() => {
		if (typeof poll_ !== "undefined") return poll_;
		if (typeof fromBlock === "bigint") return true;
		if (client.transport.type === "webSocket" || client.transport.type === "ipc") return false;
		if (client.transport.type === "fallback" && (client.transport.transports[0].config.type === "webSocket" || client.transport.transports[0].config.type === "ipc")) return false;
		return true;
	})();
	const pollContractEvent = () => {
		const strict = strict_ ?? false;
		return observe(stringify([
			"watchContractEvent",
			address,
			args,
			batch,
			client.uid,
			eventName,
			pollingInterval,
			strict,
			fromBlock
		]), {
			onLogs,
			onError
		}, (emit) => {
			let previousBlockNumber;
			if (fromBlock !== void 0) previousBlockNumber = fromBlock - 1n;
			let filter;
			let initialized = false;
			const unwatch = poll(async () => {
				if (!initialized) {
					try {
						filter = await getAction(client, createContractEventFilter, "createContractEventFilter")({
							abi: abi$1,
							address,
							args,
							eventName,
							strict,
							fromBlock
						});
					} catch {}
					initialized = true;
					return;
				}
				try {
					let logs;
					if (filter) logs = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
					else {
						const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({});
						if (previousBlockNumber && previousBlockNumber < blockNumber) logs = await getAction(client, getContractEvents, "getContractEvents")({
							abi: abi$1,
							address,
							args,
							eventName,
							fromBlock: previousBlockNumber + 1n,
							toBlock: blockNumber,
							strict
						});
						else logs = [];
						previousBlockNumber = blockNumber;
					}
					if (logs.length === 0) return;
					if (batch) emit.onLogs(logs);
					else for (const log of logs) emit.onLogs([log]);
				} catch (err) {
					if (filter && err instanceof InvalidInputRpcError) initialized = false;
					emit.onError?.(err);
				}
			}, {
				emitOnBegin: true,
				interval: pollingInterval
			});
			return async () => {
				if (filter) await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
				unwatch();
			};
		});
	};
	const subscribeContractEvent = () => {
		const strict = strict_ ?? false;
		const observerId = stringify([
			"watchContractEvent",
			address,
			args,
			batch,
			client.uid,
			eventName,
			pollingInterval,
			strict
		]);
		let active = true;
		let unsubscribe = () => active = false;
		return observe(observerId, {
			onLogs,
			onError
		}, (emit) => {
			(async () => {
				try {
					const transport = (() => {
						if (client.transport.type === "fallback") {
							const transport$1 = client.transport.transports.find((transport$2) => transport$2.config.type === "webSocket" || transport$2.config.type === "ipc");
							if (!transport$1) return client.transport;
							return transport$1.value;
						}
						return client.transport;
					})();
					const topics = eventName ? encodeEventTopics({
						abi: abi$1,
						eventName,
						args
					}) : [];
					const { unsubscribe: unsubscribe_ } = await transport.subscribe({
						params: ["logs", {
							address,
							topics
						}],
						onData(data) {
							if (!active) return;
							const log = data.result;
							try {
								const { eventName: eventName$1, args: args$1 } = decodeEventLog({
									abi: abi$1,
									data: log.data,
									topics: log.topics,
									strict: strict_
								});
								const formatted = formatLog(log, {
									args: args$1,
									eventName: eventName$1
								});
								emit.onLogs([formatted]);
							} catch (err) {
								let eventName$1;
								let isUnnamed;
								if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
									if (strict_) return;
									eventName$1 = err.abiItem.name;
									isUnnamed = err.abiItem.inputs?.some((x) => !("name" in x && x.name));
								}
								const formatted = formatLog(log, {
									args: isUnnamed ? [] : {},
									eventName: eventName$1
								});
								emit.onLogs([formatted]);
							}
						},
						onError(error) {
							emit.onError?.(error);
						}
					});
					unsubscribe = unsubscribe_;
					if (!active) unsubscribe();
				} catch (err) {
					onError?.(err);
				}
			})();
			return () => unsubscribe();
		});
	};
	return enablePolling ? pollContractEvent() : subscribeContractEvent();
}
async function sendRawTransaction(client, { serializedTransaction }) {
	return client.request({
		method: "eth_sendRawTransaction",
		params: [serializedTransaction]
	}, { retryCount: 0 });
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
const receiptStatuses = {
	"0x0": "reverted",
	"0x1": "success"
};
function formatTransactionReceipt(transactionReceipt, _) {
	const receipt = {
		...transactionReceipt,
		blockNumber: transactionReceipt.blockNumber ? BigInt(transactionReceipt.blockNumber) : null,
		contractAddress: transactionReceipt.contractAddress ? transactionReceipt.contractAddress : null,
		cumulativeGasUsed: transactionReceipt.cumulativeGasUsed ? BigInt(transactionReceipt.cumulativeGasUsed) : null,
		effectiveGasPrice: transactionReceipt.effectiveGasPrice ? BigInt(transactionReceipt.effectiveGasPrice) : null,
		gasUsed: transactionReceipt.gasUsed ? BigInt(transactionReceipt.gasUsed) : null,
		logs: transactionReceipt.logs ? transactionReceipt.logs.map((log) => formatLog(log)) : null,
		to: transactionReceipt.to ? transactionReceipt.to : null,
		transactionIndex: transactionReceipt.transactionIndex ? hexToNumber(transactionReceipt.transactionIndex) : null,
		status: transactionReceipt.status ? receiptStatuses[transactionReceipt.status] : null,
		type: transactionReceipt.type ? transactionType[transactionReceipt.type] || transactionReceipt.type : null
	};
	if (transactionReceipt.blobGasPrice) receipt.blobGasPrice = BigInt(transactionReceipt.blobGasPrice);
	if (transactionReceipt.blobGasUsed) receipt.blobGasUsed = BigInt(transactionReceipt.blobGasUsed);
	return receipt;
}
var size$1 = 256;
var index = size$1;
var buffer;
function uid(length = 11) {
	if (!buffer || index + length > size$1 * 2) {
		buffer = "";
		index = 0;
		for (let i = 0; i < size$1; i++) buffer += (256 + Math.random() * 256 | 0).toString(16).substring(1);
	}
	return buffer.substring(index, index++ + length);
}
function createClient(parameters) {
	const { batch, chain, ccipRead, key = "base", name = "Base Client", type = "base" } = parameters;
	const experimental_blockTag = parameters.experimental_blockTag ?? (typeof chain?.experimental_preconfirmationTime === "number" ? "pending" : void 0);
	const blockTime = chain?.blockTime ?? 12e3;
	const defaultPollingInterval = Math.min(Math.max(Math.floor(blockTime / 2), 500), 4e3);
	const pollingInterval = parameters.pollingInterval ?? defaultPollingInterval;
	const cacheTime = parameters.cacheTime ?? pollingInterval;
	const account = parameters.account ? parseAccount(parameters.account) : void 0;
	const { config, request, value } = parameters.transport({
		account,
		chain,
		pollingInterval
	});
	const client = {
		account,
		batch,
		cacheTime,
		ccipRead,
		chain,
		key,
		name,
		pollingInterval,
		request,
		transport: {
			...config,
			...value
		},
		type,
		uid: uid(),
		...experimental_blockTag ? { experimental_blockTag } : {}
	};
	function extend(base) {
		return (extendFn) => {
			const extended = extendFn(base);
			for (const key$1 in client) delete extended[key$1];
			const combined = {
				...base,
				...extended
			};
			return Object.assign(combined, { extend: extend(combined) });
		};
	}
	return Object.assign(client, { extend: extend(client) });
}
function isNullUniversalResolverError(err) {
	if (!(err instanceof BaseError)) return false;
	const cause = err.walk((e) => e instanceof ContractFunctionRevertedError);
	if (!(cause instanceof ContractFunctionRevertedError)) return false;
	if (cause.data?.errorName === "HttpError") return true;
	if (cause.data?.errorName === "ResolverError") return true;
	if (cause.data?.errorName === "ResolverNotContract") return true;
	if (cause.data?.errorName === "ResolverNotFound") return true;
	if (cause.data?.errorName === "ReverseAddressMismatch") return true;
	if (cause.data?.errorName === "UnsupportedResolverProfile") return true;
	return false;
}
function encodedLabelToLabelhash(label) {
	if (label.length !== 66) return null;
	if (label.indexOf("[") !== 0) return null;
	if (label.indexOf("]") !== 65) return null;
	const hash = `0x${label.slice(1, 65)}`;
	if (!isHex(hash)) return null;
	return hash;
}
function namehash(name) {
	let result = new Uint8Array(32).fill(0);
	if (!name) return bytesToHex(result);
	const labels = name.split(".");
	for (let i = labels.length - 1; i >= 0; i -= 1) {
		const hashFromEncodedLabel = encodedLabelToLabelhash(labels[i]);
		const hashed = hashFromEncodedLabel ? toBytes(hashFromEncodedLabel) : keccak256$1(stringToBytes(labels[i]), "bytes");
		result = keccak256$1(concat([result, hashed]), "bytes");
	}
	return bytesToHex(result);
}
function encodeLabelhash(hash) {
	return `[${hash.slice(2)}]`;
}
function labelhash(label) {
	const result = new Uint8Array(32).fill(0);
	if (!label) return bytesToHex(result);
	return encodedLabelToLabelhash(label) || keccak256$1(stringToBytes(label));
}
function packetToBytes(packet) {
	const value = packet.replace(/^\.|\.$/gm, "");
	if (value.length === 0) return new Uint8Array(1);
	const bytes = new Uint8Array(stringToBytes(value).byteLength + 2);
	let offset = 0;
	const list = value.split(".");
	for (let i = 0; i < list.length; i++) {
		let encoded = stringToBytes(list[i]);
		if (encoded.byteLength > 255) encoded = stringToBytes(encodeLabelhash(labelhash(list[i])));
		bytes[offset] = encoded.length;
		bytes.set(encoded, offset + 1);
		offset += encoded.length + 1;
	}
	if (bytes.byteLength !== offset + 1) return bytes.slice(0, offset + 1);
	return bytes;
}
async function getEnsAddress(client, parameters) {
	const { blockNumber, blockTag, coinType, name, gatewayUrls, strict } = parameters;
	const { chain } = client;
	const universalResolverAddress = (() => {
		if (parameters.universalResolverAddress) return parameters.universalResolverAddress;
		if (!chain) throw new Error("client chain not configured. universalResolverAddress is required.");
		return getChainContractAddress({
			blockNumber,
			chain,
			contract: "ensUniversalResolver"
		});
	})();
	const tlds = chain?.ensTlds;
	if (tlds && !tlds.some((tld) => name.endsWith(tld))) return null;
	const args = (() => {
		if (coinType != null) return [namehash(name), BigInt(coinType)];
		return [namehash(name)];
	})();
	try {
		const functionData = encodeFunctionData({
			abi: addressResolverAbi,
			functionName: "addr",
			args
		});
		const readContractParameters = {
			address: universalResolverAddress,
			abi: universalResolverResolveAbi,
			functionName: "resolveWithGateways",
			args: [
				toHex(packetToBytes(name)),
				functionData,
				gatewayUrls ?? ["x-batch-gateway:true"]
			],
			blockNumber,
			blockTag
		};
		const res = await getAction(client, readContract, "readContract")(readContractParameters);
		if (res[0] === "0x") return null;
		const address = decodeFunctionResult({
			abi: addressResolverAbi,
			args,
			functionName: "addr",
			data: res[0]
		});
		if (address === "0x") return null;
		if (trim(address) === "0x00") return null;
		return address;
	} catch (err) {
		if (strict) throw err;
		if (isNullUniversalResolverError(err)) return null;
		throw err;
	}
}
var EnsAvatarInvalidMetadataError = class extends BaseError {
	constructor({ data }) {
		super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
			metaMessages: [
				"- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
				"",
				`Provided data: ${JSON.stringify(data)}`
			],
			name: "EnsAvatarInvalidMetadataError"
		});
	}
};
var EnsAvatarInvalidNftUriError = class extends BaseError {
	constructor({ reason }) {
		super(`ENS NFT avatar URI is invalid. ${reason}`, { name: "EnsAvatarInvalidNftUriError" });
	}
};
var EnsAvatarUriResolutionError = class extends BaseError {
	constructor({ uri }) {
		super(`Unable to resolve ENS avatar URI "${uri}". The URI may be malformed, invalid, or does not respond with a valid image.`, { name: "EnsAvatarUriResolutionError" });
	}
};
var EnsAvatarUnsupportedNamespaceError = class extends BaseError {
	constructor({ namespace }) {
		super(`ENS NFT avatar namespace "${namespace}" is not supported. Must be "erc721" or "erc1155".`, { name: "EnsAvatarUnsupportedNamespaceError" });
	}
};
var networkRegex = /(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/;
var ipfsHashRegex = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/;
var base64Regex = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/;
var dataURIRegex = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function isImageUri(uri) {
	try {
		const res = await fetch(uri, { method: "HEAD" });
		if (res.status === 200) return res.headers.get("content-type")?.startsWith("image/");
		return false;
	} catch (error) {
		if (typeof error === "object" && typeof error.response !== "undefined") return false;
		if (!Object.hasOwn(globalThis, "Image")) return false;
		return new Promise((resolve) => {
			const img = new Image();
			img.onload = () => {
				resolve(true);
			};
			img.onerror = () => {
				resolve(false);
			};
			img.src = uri;
		});
	}
}
function getGateway(custom, defaultGateway) {
	if (!custom) return defaultGateway;
	if (custom.endsWith("/")) return custom.slice(0, -1);
	return custom;
}
function resolveAvatarUri({ uri, gatewayUrls }) {
	const isEncoded = base64Regex.test(uri);
	if (isEncoded) return {
		uri,
		isOnChain: true,
		isEncoded
	};
	const ipfsGateway = getGateway(gatewayUrls?.ipfs, "https://ipfs.io");
	const arweaveGateway = getGateway(gatewayUrls?.arweave, "https://arweave.net");
	const { protocol, subpath, target, subtarget = "" } = uri.match(networkRegex)?.groups || {};
	const isIPNS = protocol === "ipns:/" || subpath === "ipns/";
	const isIPFS = protocol === "ipfs:/" || subpath === "ipfs/" || ipfsHashRegex.test(uri);
	if (uri.startsWith("http") && !isIPNS && !isIPFS) {
		let replacedUri = uri;
		if (gatewayUrls?.arweave) replacedUri = uri.replace(/https:\/\/arweave.net/g, gatewayUrls?.arweave);
		return {
			uri: replacedUri,
			isOnChain: false,
			isEncoded: false
		};
	}
	if ((isIPNS || isIPFS) && target) return {
		uri: `${ipfsGateway}/${isIPNS ? "ipns" : "ipfs"}/${target}${subtarget}`,
		isOnChain: false,
		isEncoded: false
	};
	if (protocol === "ar:/" && target) return {
		uri: `${arweaveGateway}/${target}${subtarget || ""}`,
		isOnChain: false,
		isEncoded: false
	};
	let parsedUri = uri.replace(dataURIRegex, "");
	if (parsedUri.startsWith("<svg")) parsedUri = `data:image/svg+xml;base64,${btoa(parsedUri)}`;
	if (parsedUri.startsWith("data:") || parsedUri.startsWith("{")) return {
		uri: parsedUri,
		isOnChain: true,
		isEncoded: false
	};
	throw new EnsAvatarUriResolutionError({ uri });
}
function getJsonImage(data) {
	if (typeof data !== "object" || !("image" in data) && !("image_url" in data) && !("image_data" in data)) throw new EnsAvatarInvalidMetadataError({ data });
	return data.image || data.image_url || data.image_data;
}
async function getMetadataAvatarUri({ gatewayUrls, uri }) {
	try {
		return await parseAvatarUri({
			gatewayUrls,
			uri: getJsonImage(await fetch(uri).then((res) => res.json()))
		});
	} catch {
		throw new EnsAvatarUriResolutionError({ uri });
	}
}
async function parseAvatarUri({ gatewayUrls, uri }) {
	const { uri: resolvedURI, isOnChain } = resolveAvatarUri({
		uri,
		gatewayUrls
	});
	if (isOnChain) return resolvedURI;
	if (await isImageUri(resolvedURI)) return resolvedURI;
	throw new EnsAvatarUriResolutionError({ uri });
}
function parseNftUri(uri_) {
	let uri = uri_;
	if (uri.startsWith("did:nft:")) uri = uri.replace("did:nft:", "").replace(/_/g, "/");
	const [reference, asset_namespace, tokenID] = uri.split("/");
	const [eip_namespace, chainID] = reference.split(":");
	const [erc_namespace, contractAddress] = asset_namespace.split(":");
	if (!eip_namespace || eip_namespace.toLowerCase() !== "eip155") throw new EnsAvatarInvalidNftUriError({ reason: "Only EIP-155 supported" });
	if (!chainID) throw new EnsAvatarInvalidNftUriError({ reason: "Chain ID not found" });
	if (!contractAddress) throw new EnsAvatarInvalidNftUriError({ reason: "Contract address not found" });
	if (!tokenID) throw new EnsAvatarInvalidNftUriError({ reason: "Token ID not found" });
	if (!erc_namespace) throw new EnsAvatarInvalidNftUriError({ reason: "ERC namespace not found" });
	return {
		chainID: Number.parseInt(chainID, 10),
		namespace: erc_namespace.toLowerCase(),
		contractAddress,
		tokenID
	};
}
async function getNftTokenUri(client, { nft }) {
	if (nft.namespace === "erc721") return readContract(client, {
		address: nft.contractAddress,
		abi: [{
			name: "tokenURI",
			type: "function",
			stateMutability: "view",
			inputs: [{
				name: "tokenId",
				type: "uint256"
			}],
			outputs: [{
				name: "",
				type: "string"
			}]
		}],
		functionName: "tokenURI",
		args: [BigInt(nft.tokenID)]
	});
	if (nft.namespace === "erc1155") return readContract(client, {
		address: nft.contractAddress,
		abi: [{
			name: "uri",
			type: "function",
			stateMutability: "view",
			inputs: [{
				name: "_id",
				type: "uint256"
			}],
			outputs: [{
				name: "",
				type: "string"
			}]
		}],
		functionName: "uri",
		args: [BigInt(nft.tokenID)]
	});
	throw new EnsAvatarUnsupportedNamespaceError({ namespace: nft.namespace });
}
async function parseAvatarRecord(client, { gatewayUrls, record }) {
	if (/eip155:/i.test(record)) return parseNftAvatarUri(client, {
		gatewayUrls,
		record
	});
	return parseAvatarUri({
		uri: record,
		gatewayUrls
	});
}
async function parseNftAvatarUri(client, { gatewayUrls, record }) {
	const nft = parseNftUri(record);
	const { uri: resolvedNftUri, isOnChain, isEncoded } = resolveAvatarUri({
		uri: await getNftTokenUri(client, { nft }),
		gatewayUrls
	});
	if (isOnChain && (resolvedNftUri.includes("data:application/json;base64,") || resolvedNftUri.startsWith("{"))) {
		const encodedJson = isEncoded ? atob(resolvedNftUri.replace("data:application/json;base64,", "")) : resolvedNftUri;
		return parseAvatarUri({
			uri: getJsonImage(JSON.parse(encodedJson)),
			gatewayUrls
		});
	}
	let uriTokenId = nft.tokenID;
	if (nft.namespace === "erc1155") uriTokenId = uriTokenId.replace("0x", "").padStart(64, "0");
	return getMetadataAvatarUri({
		gatewayUrls,
		uri: resolvedNftUri.replace(/(?:0x)?{id}/, uriTokenId)
	});
}
async function getEnsText(client, parameters) {
	const { blockNumber, blockTag, key, name, gatewayUrls, strict } = parameters;
	const { chain } = client;
	const universalResolverAddress = (() => {
		if (parameters.universalResolverAddress) return parameters.universalResolverAddress;
		if (!chain) throw new Error("client chain not configured. universalResolverAddress is required.");
		return getChainContractAddress({
			blockNumber,
			chain,
			contract: "ensUniversalResolver"
		});
	})();
	const tlds = chain?.ensTlds;
	if (tlds && !tlds.some((tld) => name.endsWith(tld))) return null;
	try {
		const readContractParameters = {
			address: universalResolverAddress,
			abi: universalResolverResolveAbi,
			args: [
				toHex(packetToBytes(name)),
				encodeFunctionData({
					abi: textResolverAbi,
					functionName: "text",
					args: [namehash(name), key]
				}),
				gatewayUrls ?? ["x-batch-gateway:true"]
			],
			functionName: "resolveWithGateways",
			blockNumber,
			blockTag
		};
		const res = await getAction(client, readContract, "readContract")(readContractParameters);
		if (res[0] === "0x") return null;
		const record = decodeFunctionResult({
			abi: textResolverAbi,
			functionName: "text",
			data: res[0]
		});
		return record === "" ? null : record;
	} catch (err) {
		if (strict) throw err;
		if (isNullUniversalResolverError(err)) return null;
		throw err;
	}
}
async function getEnsAvatar(client, { blockNumber, blockTag, assetGatewayUrls, name, gatewayUrls, strict, universalResolverAddress }) {
	const record = await getAction(client, getEnsText, "getEnsText")({
		blockNumber,
		blockTag,
		key: "avatar",
		name,
		universalResolverAddress,
		gatewayUrls,
		strict
	});
	if (!record) return null;
	try {
		return await parseAvatarRecord(client, {
			record,
			gatewayUrls: assetGatewayUrls
		});
	} catch {
		return null;
	}
}
async function getEnsName(client, parameters) {
	const { address, blockNumber, blockTag, coinType = 60n, gatewayUrls, strict } = parameters;
	const { chain } = client;
	const universalResolverAddress = (() => {
		if (parameters.universalResolverAddress) return parameters.universalResolverAddress;
		if (!chain) throw new Error("client chain not configured. universalResolverAddress is required.");
		return getChainContractAddress({
			blockNumber,
			chain,
			contract: "ensUniversalResolver"
		});
	})();
	try {
		const readContractParameters = {
			address: universalResolverAddress,
			abi: universalResolverReverseAbi,
			args: [
				address,
				coinType,
				gatewayUrls ?? ["x-batch-gateway:true"]
			],
			functionName: "reverseWithGateways",
			blockNumber,
			blockTag
		};
		const [name] = await getAction(client, readContract, "readContract")(readContractParameters);
		return name || null;
	} catch (err) {
		if (strict) throw err;
		if (isNullUniversalResolverError(err)) return null;
		throw err;
	}
}
async function getEnsResolver(client, parameters) {
	const { blockNumber, blockTag, name } = parameters;
	const { chain } = client;
	const universalResolverAddress = (() => {
		if (parameters.universalResolverAddress) return parameters.universalResolverAddress;
		if (!chain) throw new Error("client chain not configured. universalResolverAddress is required.");
		return getChainContractAddress({
			blockNumber,
			chain,
			contract: "ensUniversalResolver"
		});
	})();
	const tlds = chain?.ensTlds;
	if (tlds && !tlds.some((tld) => name.endsWith(tld))) throw new Error(`${name} is not a valid ENS TLD (${tlds?.join(", ")}) for chain "${chain.name}" (id: ${chain.id}).`);
	const [resolverAddress] = await getAction(client, readContract, "readContract")({
		address: universalResolverAddress,
		abi: [{
			inputs: [{ type: "bytes" }],
			name: "findResolver",
			outputs: [
				{ type: "address" },
				{ type: "bytes32" },
				{ type: "uint256" }
			],
			stateMutability: "view",
			type: "function"
		}],
		functionName: "findResolver",
		args: [toHex(packetToBytes(name))],
		blockNumber,
		blockTag
	});
	return resolverAddress;
}
async function createAccessList(client, args) {
	const { account: account_ = client.account, blockNumber, blockTag = "latest", blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, to, value, ...rest } = args;
	const account = account_ ? parseAccount(account_) : void 0;
	try {
		assertRequest(args);
		const block = (typeof blockNumber === "bigint" ? numberToHex(blockNumber) : void 0) || blockTag;
		const chainFormat = client.chain?.formatters?.transactionRequest?.format;
		const request = (chainFormat || formatTransactionRequest)({
			...extract$1(rest, { format: chainFormat }),
			account,
			blobs,
			data,
			gas,
			gasPrice,
			maxFeePerBlobGas,
			maxFeePerGas,
			maxPriorityFeePerGas,
			to,
			value
		}, "createAccessList");
		const response = await client.request({
			method: "eth_createAccessList",
			params: [request, block]
		});
		return {
			accessList: response.accessList,
			gasUsed: BigInt(response.gasUsed)
		};
	} catch (err) {
		throw getCallError(err, {
			...args,
			account,
			chain: client.chain
		});
	}
}
async function createBlockFilter(client) {
	const getRequest = createFilterRequestScope(client, { method: "eth_newBlockFilter" });
	const id = await client.request({ method: "eth_newBlockFilter" });
	return {
		id,
		request: getRequest(id),
		type: "block"
	};
}
async function createEventFilter(client, { address, args, event, events: events_, fromBlock, strict, toBlock } = {}) {
	const events = events_ ?? (event ? [event] : void 0);
	const getRequest = createFilterRequestScope(client, { method: "eth_newFilter" });
	let topics = [];
	if (events) {
		topics = [events.flatMap((event$1) => encodeEventTopics({
			abi: [event$1],
			eventName: event$1.name,
			args
		}))];
		if (event) topics = topics[0];
	}
	const id = await client.request({
		method: "eth_newFilter",
		params: [{
			address,
			fromBlock: typeof fromBlock === "bigint" ? numberToHex(fromBlock) : fromBlock,
			toBlock: typeof toBlock === "bigint" ? numberToHex(toBlock) : toBlock,
			...topics.length ? { topics } : {}
		}]
	});
	return {
		abi: events,
		args,
		eventName: event ? event.name : void 0,
		fromBlock,
		id,
		request: getRequest(id),
		strict: Boolean(strict),
		toBlock,
		type: "event"
	};
}
async function createPendingTransactionFilter(client) {
	const getRequest = createFilterRequestScope(client, { method: "eth_newPendingTransactionFilter" });
	const id = await client.request({ method: "eth_newPendingTransactionFilter" });
	return {
		id,
		request: getRequest(id),
		type: "transaction"
	};
}
async function getBalance(client, { address, blockNumber, blockTag = client.experimental_blockTag ?? "latest" }) {
	const blockNumberHex = typeof blockNumber === "bigint" ? numberToHex(blockNumber) : void 0;
	const balance = await client.request({
		method: "eth_getBalance",
		params: [address, blockNumberHex || blockTag]
	});
	return BigInt(balance);
}
async function getBlobBaseFee(client) {
	const baseFee = await client.request({ method: "eth_blobBaseFee" });
	return BigInt(baseFee);
}
async function getBlockTransactionCount(client, { blockHash, blockNumber, blockTag = "latest" } = {}) {
	const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
	let count;
	if (blockHash) count = await client.request({
		method: "eth_getBlockTransactionCountByHash",
		params: [blockHash]
	}, { dedupe: true });
	else count = await client.request({
		method: "eth_getBlockTransactionCountByNumber",
		params: [blockNumberHex || blockTag]
	}, { dedupe: Boolean(blockNumberHex) });
	return hexToNumber(count);
}
async function getCode(client, { address, blockNumber, blockTag = "latest" }) {
	const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
	const hex = await client.request({
		method: "eth_getCode",
		params: [address, blockNumberHex || blockTag]
	}, { dedupe: Boolean(blockNumberHex) });
	if (hex === "0x") return void 0;
	return hex;
}
var Eip712DomainNotFoundError = class extends BaseError {
	constructor({ address }) {
		super(`No EIP-712 domain found on contract "${address}".`, {
			metaMessages: [
				"Ensure that:",
				`- The contract is deployed at the address "${address}".`,
				"- `eip712Domain()` function exists on the contract.",
				"- `eip712Domain()` function matches signature to ERC-5267 specification."
			],
			name: "Eip712DomainNotFoundError"
		});
	}
};
async function getEip712Domain(client, parameters) {
	const { address, factory, factoryData } = parameters;
	try {
		const [fields, name, version, chainId, verifyingContract, salt, extensions] = await getAction(client, readContract, "readContract")({
			abi,
			address,
			functionName: "eip712Domain",
			factory,
			factoryData
		});
		return {
			domain: {
				name,
				version,
				chainId: Number(chainId),
				verifyingContract,
				salt
			},
			extensions,
			fields
		};
	} catch (e) {
		const error = e;
		if (error.name === "ContractFunctionExecutionError" && error.cause.name === "ContractFunctionZeroDataError") throw new Eip712DomainNotFoundError({ address });
		throw error;
	}
}
var abi = [{
	inputs: [],
	name: "eip712Domain",
	outputs: [
		{
			name: "fields",
			type: "bytes1"
		},
		{
			name: "name",
			type: "string"
		},
		{
			name: "version",
			type: "string"
		},
		{
			name: "chainId",
			type: "uint256"
		},
		{
			name: "verifyingContract",
			type: "address"
		},
		{
			name: "salt",
			type: "bytes32"
		},
		{
			name: "extensions",
			type: "uint256[]"
		}
	],
	stateMutability: "view",
	type: "function"
}];
function formatFeeHistory(feeHistory) {
	return {
		baseFeePerGas: feeHistory.baseFeePerGas.map((value) => BigInt(value)),
		gasUsedRatio: feeHistory.gasUsedRatio,
		oldestBlock: BigInt(feeHistory.oldestBlock),
		reward: feeHistory.reward?.map((reward) => reward.map((value) => BigInt(value)))
	};
}
async function getFeeHistory(client, { blockCount, blockNumber, blockTag = "latest", rewardPercentiles }) {
	const blockNumberHex = typeof blockNumber === "bigint" ? numberToHex(blockNumber) : void 0;
	return formatFeeHistory(await client.request({
		method: "eth_feeHistory",
		params: [
			numberToHex(blockCount),
			blockNumberHex || blockTag,
			rewardPercentiles
		]
	}, { dedupe: Boolean(blockNumberHex) }));
}
async function getFilterLogs(_client, { filter }) {
	const strict = filter.strict ?? false;
	const formattedLogs = (await filter.request({
		method: "eth_getFilterLogs",
		params: [filter.id]
	})).map((log) => formatLog(log));
	if (!filter.abi) return formattedLogs;
	return parseEventLogs({
		abi: filter.abi,
		logs: formattedLogs,
		strict
	});
}
async function verifyAuthorization({ address, authorization, signature }) {
	return isAddressEqual(getAddress(address), await recoverAuthorizationAddress({
		authorization,
		signature
	}));
}
const promiseCache = /* @__PURE__ */ new LruMap$1(8192);
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
function defineChain(chain) {
	const chainInstance = {
		formatters: void 0,
		fees: void 0,
		serializers: void 0,
		...chain
	};
	function extend(base) {
		return (fnOrExtended) => {
			const properties = typeof fnOrExtended === "function" ? fnOrExtended(base) : fnOrExtended;
			const combined = {
				...base,
				...properties
			};
			return Object.assign(combined, { extend: extend(combined) });
		};
	}
	return Object.assign(chainInstance, { extend: extend(chainInstance) });
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
	return keccak256$1(toPrefixedMessage(message), to_);
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
			const integerMatch = type.match(integerRegex$1);
			if (integerMatch && (typeof value === "number" || typeof value === "bigint")) {
				const [_type, base, size_] = integerMatch;
				numberToHex(value, {
					signed: base === "int",
					size: Number.parseInt(size_, 10) / 8
				});
			}
			if (type === "address" && typeof value === "string" && !isAddress(value)) throw new InvalidAddressError$1({ address: value });
			const bytesMatch = type.match(bytesRegex$1);
			if (bytesMatch) {
				const [_type, size_] = bytesMatch;
				if (size_ && size(value) !== Number.parseInt(size_, 10)) throw new BytesSizeMismatchError$1({
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
	return keccak256$1(concat(parts));
}
function hashDomain({ domain, types }) {
	return hashStruct({
		data: domain,
		primaryType: "EIP712Domain",
		types
	});
}
function hashStruct({ data, primaryType, types }) {
	return keccak256$1(encodeData$1({
		data,
		primaryType,
		types
	}));
}
function encodeData$1({ data, primaryType, types }) {
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
	return keccak256$1(toHex(encodeType({
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
	if (types[type] !== void 0) return [{ type: "bytes32" }, keccak256$1(encodeData$1({
		data: value,
		primaryType: type,
		types
	}))];
	if (type === "bytes") return [{ type: "bytes32" }, keccak256$1(value)];
	if (type === "string") return [{ type: "bytes32" }, keccak256$1(toHex(value))];
	if (type.lastIndexOf("]") === type.length - 1) {
		const parsedType = type.slice(0, type.lastIndexOf("["));
		const typeValuePairs = value.map((item) => encodeField({
			name,
			type: parsedType,
			types,
			value: item
		}));
		return [{ type: "bytes32" }, keccak256$1(encodeAbiParameters(typeValuePairs.map(([t]) => t), typeValuePairs.map(([, v]) => v)))];
	}
	return [{ type }, value];
}
var LruMap = class extends Map {
	constructor(size$4) {
		super();
		Object.defineProperty(this, "maxSize", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		this.maxSize = size$4;
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
function keccak256(value, options = {}) {
	const { as = typeof value === "string" ? "Hex" : "Bytes" } = options;
	const bytes = keccak_256(from$6(value));
	if (as === "Bytes") return bytes;
	return fromBytes$1(bytes);
}
var addressRegex = /^0x[a-fA-F0-9]{40}$/;
function assert$3(value, options = {}) {
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
	assert$3(address, { strict: false });
	const hexAddress = address.substring(2).toLowerCase();
	const hash = keccak256(fromString(hexAddress), { as: "Bytes" });
	const characters = hexAddress.split("");
	for (let i = 0; i < 40; i += 2) {
		if (hash[i >> 1] >> 4 >= 8 && characters[i]) characters[i] = characters[i].toUpperCase();
		if ((hash[i >> 1] & 15) >= 8 && characters[i + 1]) characters[i + 1] = characters[i + 1].toUpperCase();
	}
	const result = `0x${characters.join("")}`;
	checksum$1.set(address, result);
	return result;
}
function validate$2(address, options = {}) {
	const { strict = true } = options ?? {};
	try {
		assert$3(address, { strict });
		return true;
	} catch {
		return false;
	}
}
var InvalidAddressError = class extends BaseError$1 {
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
var InvalidInputError = class extends BaseError$1 {
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
var InvalidChecksumError = class extends BaseError$1 {
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
const arrayRegex = /^(.*)\[([0-9]*)\]$/;
const bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
const integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
2n ** (8n - 1n) - 1n;
2n ** (16n - 1n) - 1n;
2n ** (24n - 1n) - 1n;
2n ** (32n - 1n) - 1n;
2n ** (40n - 1n) - 1n;
2n ** (48n - 1n) - 1n;
2n ** (56n - 1n) - 1n;
2n ** (64n - 1n) - 1n;
2n ** (72n - 1n) - 1n;
2n ** (80n - 1n) - 1n;
2n ** (88n - 1n) - 1n;
2n ** (96n - 1n) - 1n;
2n ** (104n - 1n) - 1n;
2n ** (112n - 1n) - 1n;
2n ** (120n - 1n) - 1n;
2n ** (128n - 1n) - 1n;
2n ** (136n - 1n) - 1n;
2n ** (144n - 1n) - 1n;
2n ** (152n - 1n) - 1n;
2n ** (160n - 1n) - 1n;
2n ** (168n - 1n) - 1n;
2n ** (176n - 1n) - 1n;
2n ** (184n - 1n) - 1n;
2n ** (192n - 1n) - 1n;
2n ** (200n - 1n) - 1n;
2n ** (208n - 1n) - 1n;
2n ** (216n - 1n) - 1n;
2n ** (224n - 1n) - 1n;
2n ** (232n - 1n) - 1n;
2n ** (240n - 1n) - 1n;
2n ** (248n - 1n) - 1n;
2n ** (256n - 1n) - 1n;
-(2n ** (8n - 1n));
-(2n ** (16n - 1n));
-(2n ** (24n - 1n));
-(2n ** (32n - 1n));
-(2n ** (40n - 1n));
-(2n ** (48n - 1n));
-(2n ** (56n - 1n));
-(2n ** (64n - 1n));
-(2n ** (72n - 1n));
-(2n ** (80n - 1n));
-(2n ** (88n - 1n));
-(2n ** (96n - 1n));
-(2n ** (104n - 1n));
-(2n ** (112n - 1n));
-(2n ** (120n - 1n));
-(2n ** (128n - 1n));
-(2n ** (136n - 1n));
-(2n ** (144n - 1n));
-(2n ** (152n - 1n));
-(2n ** (160n - 1n));
-(2n ** (168n - 1n));
-(2n ** (176n - 1n));
-(2n ** (184n - 1n));
-(2n ** (192n - 1n));
-(2n ** (200n - 1n));
-(2n ** (208n - 1n));
-(2n ** (216n - 1n));
-(2n ** (224n - 1n));
-(2n ** (232n - 1n));
-(2n ** (240n - 1n));
-(2n ** (248n - 1n));
-(2n ** (256n - 1n));
const maxUint256 = 2n ** 256n - 1n;
function decodeParameter(cursor, param, options) {
	const { checksumAddress: checksumAddress$1, staticPosition } = options;
	const arrayComponents = getArrayComponents(param.type);
	if (arrayComponents) {
		const [length, type] = arrayComponents;
		return decodeArray(cursor, {
			...param,
			type
		}, {
			checksumAddress: checksumAddress$1,
			length,
			staticPosition
		});
	}
	if (param.type === "tuple") return decodeTuple(cursor, param, {
		checksumAddress: checksumAddress$1,
		staticPosition
	});
	if (param.type === "address") return decodeAddress(cursor, { checksum: checksumAddress$1 });
	if (param.type === "bool") return decodeBool(cursor);
	if (param.type.startsWith("bytes")) return decodeBytes(cursor, param, { staticPosition });
	if (param.type.startsWith("uint") || param.type.startsWith("int")) return decodeNumber(cursor, param);
	if (param.type === "string") return decodeString(cursor, { staticPosition });
	throw new InvalidTypeError(param.type);
}
var sizeOfLength = 32;
var sizeOfOffset = 32;
function decodeAddress(cursor, options = {}) {
	const { checksum: checksum$2 = false } = options;
	const value = cursor.readBytes(32);
	const wrap$1 = (address) => checksum$2 ? checksum(address) : address;
	return [wrap$1(fromBytes$1(slice(value, -20))), 32];
}
function decodeArray(cursor, param, options) {
	const { checksumAddress: checksumAddress$1, length, staticPosition } = options;
	if (!length) {
		const start = staticPosition + toNumber(cursor.readBytes(sizeOfOffset));
		const startOfData = start + sizeOfLength;
		cursor.setPosition(start);
		const length$1 = toNumber(cursor.readBytes(sizeOfLength));
		const dynamicChild = hasDynamicChild(param);
		let consumed$1 = 0;
		const value$1 = [];
		for (let i = 0; i < length$1; ++i) {
			cursor.setPosition(startOfData + (dynamicChild ? i * 32 : consumed$1));
			const [data, consumed_] = decodeParameter(cursor, param, {
				checksumAddress: checksumAddress$1,
				staticPosition: startOfData
			});
			consumed$1 += consumed_;
			value$1.push(data);
		}
		cursor.setPosition(staticPosition + 32);
		return [value$1, 32];
	}
	if (hasDynamicChild(param)) {
		const start = staticPosition + toNumber(cursor.readBytes(sizeOfOffset));
		const value$1 = [];
		for (let i = 0; i < length; ++i) {
			cursor.setPosition(start + i * 32);
			const [data] = decodeParameter(cursor, param, {
				checksumAddress: checksumAddress$1,
				staticPosition: start
			});
			value$1.push(data);
		}
		cursor.setPosition(staticPosition + 32);
		return [value$1, 32];
	}
	let consumed = 0;
	const value = [];
	for (let i = 0; i < length; ++i) {
		const [data, consumed_] = decodeParameter(cursor, param, {
			checksumAddress: checksumAddress$1,
			staticPosition: staticPosition + consumed
		});
		consumed += consumed_;
		value.push(data);
	}
	return [value, consumed];
}
function decodeBool(cursor) {
	return [toBoolean(cursor.readBytes(32), { size: 32 }), 32];
}
function decodeBytes(cursor, param, { staticPosition }) {
	const [_, size$4] = param.type.split("bytes");
	if (!size$4) {
		const offset = toNumber(cursor.readBytes(32));
		cursor.setPosition(staticPosition + offset);
		const length = toNumber(cursor.readBytes(32));
		if (length === 0) {
			cursor.setPosition(staticPosition + 32);
			return ["0x", 32];
		}
		const data = cursor.readBytes(length);
		cursor.setPosition(staticPosition + 32);
		return [fromBytes$1(data), 32];
	}
	return [fromBytes$1(cursor.readBytes(Number.parseInt(size$4, 10), 32)), 32];
}
function decodeNumber(cursor, param) {
	const signed = param.type.startsWith("int");
	const size$4 = Number.parseInt(param.type.split("int")[1] || "256", 10);
	const value = cursor.readBytes(32);
	return [size$4 > 48 ? toBigInt(value, { signed }) : toNumber(value, { signed }), 32];
}
function decodeTuple(cursor, param, options) {
	const { checksumAddress: checksumAddress$1, staticPosition } = options;
	const hasUnnamedChild = param.components.length === 0 || param.components.some(({ name }) => !name);
	const value = hasUnnamedChild ? [] : {};
	let consumed = 0;
	if (hasDynamicChild(param)) {
		const start = staticPosition + toNumber(cursor.readBytes(sizeOfOffset));
		for (let i = 0; i < param.components.length; ++i) {
			const component = param.components[i];
			cursor.setPosition(start + consumed);
			const [data, consumed_] = decodeParameter(cursor, component, {
				checksumAddress: checksumAddress$1,
				staticPosition: start
			});
			consumed += consumed_;
			value[hasUnnamedChild ? i : component?.name] = data;
		}
		cursor.setPosition(staticPosition + 32);
		return [value, 32];
	}
	for (let i = 0; i < param.components.length; ++i) {
		const component = param.components[i];
		const [data, consumed_] = decodeParameter(cursor, component, {
			checksumAddress: checksumAddress$1,
			staticPosition
		});
		value[hasUnnamedChild ? i : component?.name] = data;
		consumed += consumed_;
	}
	return [value, consumed];
}
function decodeString(cursor, { staticPosition }) {
	const start = staticPosition + toNumber(cursor.readBytes(32));
	cursor.setPosition(start);
	const length = toNumber(cursor.readBytes(32));
	if (length === 0) {
		cursor.setPosition(staticPosition + 32);
		return ["", 32];
	}
	const value = toString(trimLeft(cursor.readBytes(length, 32)));
	cursor.setPosition(staticPosition + 32);
	return [value, 32];
}
function prepareParameters({ checksumAddress: checksumAddress$1, parameters, values }) {
	const preparedParameters = [];
	for (let i = 0; i < parameters.length; i++) preparedParameters.push(prepareParameter({
		checksumAddress: checksumAddress$1,
		parameter: parameters[i],
		value: values[i]
	}));
	return preparedParameters;
}
function prepareParameter({ checksumAddress: checksumAddress$1 = false, parameter: parameter_, value }) {
	const parameter = parameter_;
	const arrayComponents = getArrayComponents(parameter.type);
	if (arrayComponents) {
		const [length, type] = arrayComponents;
		return encodeArray(value, {
			checksumAddress: checksumAddress$1,
			length,
			parameter: {
				...parameter,
				type
			}
		});
	}
	if (parameter.type === "tuple") return encodeTuple(value, {
		checksumAddress: checksumAddress$1,
		parameter
	});
	if (parameter.type === "address") return encodeAddress(value, { checksum: checksumAddress$1 });
	if (parameter.type === "bool") return encodeBoolean(value);
	if (parameter.type.startsWith("uint") || parameter.type.startsWith("int")) {
		const signed = parameter.type.startsWith("int");
		const [, , size$4 = "256"] = integerRegex.exec(parameter.type) ?? [];
		return encodeNumber(value, {
			signed,
			size: Number(size$4)
		});
	}
	if (parameter.type.startsWith("bytes")) return encodeBytes(value, { type: parameter.type });
	if (parameter.type === "string") return encodeString(value);
	throw new InvalidTypeError(parameter.type);
}
function encode$2(preparedParameters) {
	let staticSize = 0;
	for (let i = 0; i < preparedParameters.length; i++) {
		const { dynamic, encoded } = preparedParameters[i];
		if (dynamic) staticSize += 32;
		else staticSize += size$2(encoded);
	}
	const staticParameters = [];
	const dynamicParameters = [];
	let dynamicSize = 0;
	for (let i = 0; i < preparedParameters.length; i++) {
		const { dynamic, encoded } = preparedParameters[i];
		if (dynamic) {
			staticParameters.push(fromNumber(staticSize + dynamicSize, { size: 32 }));
			dynamicParameters.push(encoded);
			dynamicSize += size$2(encoded);
		} else staticParameters.push(encoded);
	}
	return concat$1(...staticParameters, ...dynamicParameters);
}
function encodeAddress(value, options) {
	const { checksum: checksum$2 = false } = options;
	assert$3(value, { strict: checksum$2 });
	return {
		dynamic: false,
		encoded: padLeft(value.toLowerCase())
	};
}
function encodeArray(value, options) {
	const { checksumAddress: checksumAddress$1, length, parameter } = options;
	const dynamic = length === null;
	if (!Array.isArray(value)) throw new InvalidArrayError(value);
	if (!dynamic && value.length !== length) throw new ArrayLengthMismatchError({
		expectedLength: length,
		givenLength: value.length,
		type: `${parameter.type}[${length}]`
	});
	let dynamicChild = false;
	const preparedParameters = [];
	for (let i = 0; i < value.length; i++) {
		const preparedParam = prepareParameter({
			checksumAddress: checksumAddress$1,
			parameter,
			value: value[i]
		});
		if (preparedParam.dynamic) dynamicChild = true;
		preparedParameters.push(preparedParam);
	}
	if (dynamic || dynamicChild) {
		const data = encode$2(preparedParameters);
		if (dynamic) {
			const length$1 = fromNumber(preparedParameters.length, { size: 32 });
			return {
				dynamic: true,
				encoded: preparedParameters.length > 0 ? concat$1(length$1, data) : length$1
			};
		}
		if (dynamicChild) return {
			dynamic: true,
			encoded: data
		};
	}
	return {
		dynamic: false,
		encoded: concat$1(...preparedParameters.map(({ encoded }) => encoded))
	};
}
function encodeBytes(value, { type }) {
	const [, parametersize] = type.split("bytes");
	const bytesSize = size$2(value);
	if (!parametersize) {
		let value_ = value;
		if (bytesSize % 32 !== 0) value_ = padRight(value_, Math.ceil((value.length - 2) / 2 / 32) * 32);
		return {
			dynamic: true,
			encoded: concat$1(padLeft(fromNumber(bytesSize, { size: 32 })), value_)
		};
	}
	if (bytesSize !== Number.parseInt(parametersize, 10)) throw new BytesSizeMismatchError({
		expectedSize: Number.parseInt(parametersize, 10),
		value
	});
	return {
		dynamic: false,
		encoded: padRight(value)
	};
}
function encodeBoolean(value) {
	if (typeof value !== "boolean") throw new BaseError$1(`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
	return {
		dynamic: false,
		encoded: padLeft(fromBoolean(value))
	};
}
function encodeNumber(value, { signed, size: size$4 }) {
	if (typeof size$4 === "number") {
		const max = 2n ** (BigInt(size$4) - (signed ? 1n : 0n)) - 1n;
		const min = signed ? -max - 1n : 0n;
		if (value > max || value < min) throw new IntegerOutOfRangeError({
			max: max.toString(),
			min: min.toString(),
			signed,
			size: size$4 / 8,
			value: value.toString()
		});
	}
	return {
		dynamic: false,
		encoded: fromNumber(value, {
			size: 32,
			signed
		})
	};
}
function encodeString(value) {
	const hexValue = fromString$1(value);
	const partsLength = Math.ceil(size$2(hexValue) / 32);
	const parts = [];
	for (let i = 0; i < partsLength; i++) parts.push(padRight(slice$1(hexValue, i * 32, (i + 1) * 32)));
	return {
		dynamic: true,
		encoded: concat$1(padRight(fromNumber(size$2(hexValue), { size: 32 })), ...parts)
	};
}
function encodeTuple(value, options) {
	const { checksumAddress: checksumAddress$1, parameter } = options;
	let dynamic = false;
	const preparedParameters = [];
	for (let i = 0; i < parameter.components.length; i++) {
		const param_ = parameter.components[i];
		const preparedParam = prepareParameter({
			checksumAddress: checksumAddress$1,
			parameter: param_,
			value: value[Array.isArray(value) ? i : param_.name]
		});
		preparedParameters.push(preparedParam);
		if (preparedParam.dynamic) dynamic = true;
	}
	return {
		dynamic,
		encoded: dynamic ? encode$2(preparedParameters) : concat$1(...preparedParameters.map(({ encoded }) => encoded))
	};
}
function getArrayComponents(type) {
	const matches = type.match(/^(.*)\[(\d+)?\]$/);
	return matches ? [matches[2] ? Number(matches[2]) : null, matches[1]] : void 0;
}
function hasDynamicChild(param) {
	const { type } = param;
	if (type === "string") return true;
	if (type === "bytes") return true;
	if (type.endsWith("[]")) return true;
	if (type === "tuple") return param.components?.some(hasDynamicChild);
	const arrayComponents = getArrayComponents(param.type);
	if (arrayComponents && hasDynamicChild({
		...param,
		type: arrayComponents[1]
	})) return true;
	return false;
}
var staticCursor = {
	bytes: new Uint8Array(),
	dataView: /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(0)),
	position: 0,
	positionReadCount: /* @__PURE__ */ new Map(),
	recursiveReadCount: 0,
	recursiveReadLimit: Number.POSITIVE_INFINITY,
	assertReadLimit() {
		if (this.recursiveReadCount >= this.recursiveReadLimit) throw new RecursiveReadLimitExceededError({
			count: this.recursiveReadCount + 1,
			limit: this.recursiveReadLimit
		});
	},
	assertPosition(position) {
		if (position < 0 || position > this.bytes.length - 1) throw new PositionOutOfBoundsError({
			length: this.bytes.length,
			position
		});
	},
	decrementPosition(offset) {
		if (offset < 0) throw new NegativeOffsetError({ offset });
		const position = this.position - offset;
		this.assertPosition(position);
		this.position = position;
	},
	getReadCount(position) {
		return this.positionReadCount.get(position || this.position) || 0;
	},
	incrementPosition(offset) {
		if (offset < 0) throw new NegativeOffsetError({ offset });
		const position = this.position + offset;
		this.assertPosition(position);
		this.position = position;
	},
	inspectByte(position_) {
		const position = position_ ?? this.position;
		this.assertPosition(position);
		return this.bytes[position];
	},
	inspectBytes(length, position_) {
		const position = position_ ?? this.position;
		this.assertPosition(position + length - 1);
		return this.bytes.subarray(position, position + length);
	},
	inspectUint8(position_) {
		const position = position_ ?? this.position;
		this.assertPosition(position);
		return this.bytes[position];
	},
	inspectUint16(position_) {
		const position = position_ ?? this.position;
		this.assertPosition(position + 1);
		return this.dataView.getUint16(position);
	},
	inspectUint24(position_) {
		const position = position_ ?? this.position;
		this.assertPosition(position + 2);
		return (this.dataView.getUint16(position) << 8) + this.dataView.getUint8(position + 2);
	},
	inspectUint32(position_) {
		const position = position_ ?? this.position;
		this.assertPosition(position + 3);
		return this.dataView.getUint32(position);
	},
	pushByte(byte) {
		this.assertPosition(this.position);
		this.bytes[this.position] = byte;
		this.position++;
	},
	pushBytes(bytes) {
		this.assertPosition(this.position + bytes.length - 1);
		this.bytes.set(bytes, this.position);
		this.position += bytes.length;
	},
	pushUint8(value) {
		this.assertPosition(this.position);
		this.bytes[this.position] = value;
		this.position++;
	},
	pushUint16(value) {
		this.assertPosition(this.position + 1);
		this.dataView.setUint16(this.position, value);
		this.position += 2;
	},
	pushUint24(value) {
		this.assertPosition(this.position + 2);
		this.dataView.setUint16(this.position, value >> 8);
		this.dataView.setUint8(this.position + 2, value & 255);
		this.position += 3;
	},
	pushUint32(value) {
		this.assertPosition(this.position + 3);
		this.dataView.setUint32(this.position, value);
		this.position += 4;
	},
	readByte() {
		this.assertReadLimit();
		this._touch();
		const value = this.inspectByte();
		this.position++;
		return value;
	},
	readBytes(length, size$4) {
		this.assertReadLimit();
		this._touch();
		const value = this.inspectBytes(length);
		this.position += size$4 ?? length;
		return value;
	},
	readUint8() {
		this.assertReadLimit();
		this._touch();
		const value = this.inspectUint8();
		this.position += 1;
		return value;
	},
	readUint16() {
		this.assertReadLimit();
		this._touch();
		const value = this.inspectUint16();
		this.position += 2;
		return value;
	},
	readUint24() {
		this.assertReadLimit();
		this._touch();
		const value = this.inspectUint24();
		this.position += 3;
		return value;
	},
	readUint32() {
		this.assertReadLimit();
		this._touch();
		const value = this.inspectUint32();
		this.position += 4;
		return value;
	},
	get remaining() {
		return this.bytes.length - this.position;
	},
	setPosition(position) {
		const oldPosition = this.position;
		this.assertPosition(position);
		this.position = position;
		return () => this.position = oldPosition;
	},
	_touch() {
		if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
		const count = this.getReadCount();
		this.positionReadCount.set(this.position, count + 1);
		if (count > 0) this.recursiveReadCount++;
	}
};
function create(bytes, { recursiveReadLimit = 8192 } = {}) {
	const cursor = Object.create(staticCursor);
	cursor.bytes = bytes;
	cursor.dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
	cursor.positionReadCount = /* @__PURE__ */ new Map();
	cursor.recursiveReadLimit = recursiveReadLimit;
	return cursor;
}
var NegativeOffsetError = class extends BaseError$1 {
	constructor({ offset }) {
		super(`Offset \`${offset}\` cannot be negative.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Cursor.NegativeOffsetError"
		});
	}
};
var PositionOutOfBoundsError = class extends BaseError$1 {
	constructor({ length, position }) {
		super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Cursor.PositionOutOfBoundsError"
		});
	}
};
var RecursiveReadLimitExceededError = class extends BaseError$1 {
	constructor({ count, limit }) {
		super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Cursor.RecursiveReadLimitExceededError"
		});
	}
};
function decode(parameters, data, options = {}) {
	const { as = "Array", checksumAddress: checksumAddress$1 = false } = options;
	const bytes = typeof data === "string" ? fromHex$1(data) : data;
	const cursor = create(bytes);
	if (size$3(bytes) === 0 && parameters.length > 0) throw new ZeroDataError();
	if (size$3(bytes) && size$3(bytes) < 32) throw new DataSizeTooSmallError({
		data: typeof data === "string" ? data : fromBytes$1(data),
		parameters,
		size: size$3(bytes)
	});
	let consumed = 0;
	const values = as === "Array" ? [] : {};
	for (let i = 0; i < parameters.length; ++i) {
		const param = parameters[i];
		cursor.setPosition(consumed);
		const [data$1, consumed_] = decodeParameter(cursor, param, {
			checksumAddress: checksumAddress$1,
			staticPosition: 0
		});
		consumed += consumed_;
		if (as === "Array") values.push(data$1);
		else values[param.name ?? i] = data$1;
	}
	return values;
}
function encode$1(parameters, values, options) {
	const { checksumAddress: checksumAddress$1 = false } = options ?? {};
	if (parameters.length !== values.length) throw new LengthMismatchError({
		expectedLength: parameters.length,
		givenLength: values.length
	});
	const data = encode$2(prepareParameters({
		checksumAddress: checksumAddress$1,
		parameters,
		values
	}));
	if (data.length === 0) return "0x";
	return data;
}
function encodePacked(types, values) {
	if (types.length !== values.length) throw new LengthMismatchError({
		expectedLength: types.length,
		givenLength: values.length
	});
	const data = [];
	for (let i = 0; i < types.length; i++) {
		const type = types[i];
		const value = values[i];
		data.push(encodePacked.encode(type, value));
	}
	return concat$1(...data);
}
(function(encodePacked$1) {
	function encode$3(type, value, isArray = false) {
		if (type === "address") {
			const address = value;
			assert$3(address);
			return padLeft(address.toLowerCase(), isArray ? 32 : 0);
		}
		if (type === "string") return fromString$1(value);
		if (type === "bytes") return value;
		if (type === "bool") return padLeft(fromBoolean(value), isArray ? 32 : 1);
		const intMatch = type.match(integerRegex);
		if (intMatch) {
			const [_type, baseType, bits = "256"] = intMatch;
			const size$4 = Number.parseInt(bits, 10) / 8;
			return fromNumber(value, {
				size: isArray ? 32 : size$4,
				signed: baseType === "int"
			});
		}
		const bytesMatch = type.match(bytesRegex);
		if (bytesMatch) {
			const [_type, size$4] = bytesMatch;
			if (Number.parseInt(size$4, 10) !== (value.length - 2) / 2) throw new BytesSizeMismatchError({
				expectedSize: Number.parseInt(size$4, 10),
				value
			});
			return padRight(value, isArray ? 32 : 0);
		}
		const arrayMatch = type.match(arrayRegex);
		if (arrayMatch && Array.isArray(value)) {
			const [_type, childType] = arrayMatch;
			const data = [];
			for (let i = 0; i < value.length; i++) data.push(encode$3(childType, value[i], true));
			if (data.length === 0) return "0x";
			return concat$1(...data);
		}
		throw new InvalidTypeError(type);
	}
	encodePacked$1.encode = encode$3;
})(encodePacked || (encodePacked = {}));
function from$5(parameters) {
	if (Array.isArray(parameters) && typeof parameters[0] === "string") return parseAbiParameters(parameters);
	if (typeof parameters === "string") return parseAbiParameters(parameters);
	return parameters;
}
var DataSizeTooSmallError = class extends BaseError$1 {
	constructor({ data, parameters, size: size$4 }) {
		super(`Data size of ${size$4} bytes is too small for given parameters.`, { metaMessages: [`Params: (${formatAbiParameters(parameters)})`, `Data:   ${data} (${size$4} bytes)`] });
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "AbiParameters.DataSizeTooSmallError"
		});
	}
};
var ZeroDataError = class extends BaseError$1 {
	constructor() {
		super("Cannot decode zero data (\"0x\") with ABI parameters.");
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "AbiParameters.ZeroDataError"
		});
	}
};
var ArrayLengthMismatchError = class extends BaseError$1 {
	constructor({ expectedLength, givenLength, type }) {
		super(`Array length mismatch for type \`${type}\`. Expected: \`${expectedLength}\`. Given: \`${givenLength}\`.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "AbiParameters.ArrayLengthMismatchError"
		});
	}
};
var BytesSizeMismatchError = class extends BaseError$1 {
	constructor({ expectedSize, value }) {
		super(`Size of bytes "${value}" (bytes${size$2(value)}) does not match expected size (bytes${expectedSize}).`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "AbiParameters.BytesSizeMismatchError"
		});
	}
};
var LengthMismatchError = class extends BaseError$1 {
	constructor({ expectedLength, givenLength }) {
		super([
			"ABI encoding parameters/values length mismatch.",
			`Expected length (parameters): ${expectedLength}`,
			`Given length (values): ${givenLength}`
		].join("\n"));
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "AbiParameters.LengthMismatchError"
		});
	}
};
var InvalidArrayError = class extends BaseError$1 {
	constructor(value) {
		super(`Value \`${value}\` is not a valid array.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "AbiParameters.InvalidArrayError"
		});
	}
};
var InvalidTypeError = class extends BaseError$1 {
	constructor(type) {
		super(`Type \`${type}\` is not a valid ABI Type.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "AbiParameters.InvalidTypeError"
		});
	}
};
function assert$2(signature, options = {}) {
	const { recovered } = options;
	if (typeof signature.r === "undefined") throw new MissingPropertiesError({ signature });
	if (typeof signature.s === "undefined") throw new MissingPropertiesError({ signature });
	if (recovered && typeof signature.yParity === "undefined") throw new MissingPropertiesError({ signature });
	if (signature.r < 0n || signature.r > maxUint256) throw new InvalidRError({ value: signature.r });
	if (signature.s < 0n || signature.s > maxUint256) throw new InvalidSError({ value: signature.s });
	if (typeof signature.yParity === "number" && signature.yParity !== 0 && signature.yParity !== 1) throw new InvalidYParityError({ value: signature.yParity });
}
function fromBytes(signature) {
	return fromHex(fromBytes$1(signature));
}
function fromHex(signature) {
	if (signature.length !== 130 && signature.length !== 132) throw new InvalidSerializedSizeError({ signature });
	const r = BigInt(slice$1(signature, 0, 32));
	const s = BigInt(slice$1(signature, 32, 64));
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
		r,
		s
	};
	return {
		r,
		s,
		yParity
	};
}
function extract(value) {
	if (typeof value.r === "undefined") return void 0;
	if (typeof value.s === "undefined") return void 0;
	return from$4(value);
}
function from$4(signature) {
	const signature_ = (() => {
		if (typeof signature === "string") return fromHex(signature);
		if (signature instanceof Uint8Array) return fromBytes(signature);
		if (typeof signature.r === "string") return fromRpc$1(signature);
		if (signature.v) return fromLegacy(signature);
		return {
			r: signature.r,
			s: signature.s,
			...typeof signature.yParity !== "undefined" ? { yParity: signature.yParity } : {}
		};
	})();
	assert$2(signature_);
	return signature_;
}
function fromLegacy(signature) {
	return {
		r: signature.r,
		s: signature.s,
		yParity: vToYParity(signature.v)
	};
}
function fromRpc$1(signature) {
	const yParity = (() => {
		const v = signature.v ? Number(signature.v) : void 0;
		let yParity$1 = signature.yParity ? Number(signature.yParity) : void 0;
		if (typeof v === "number" && typeof yParity$1 !== "number") yParity$1 = vToYParity(v);
		if (typeof yParity$1 !== "number") throw new InvalidYParityError({ value: signature.yParity });
		return yParity$1;
	})();
	return {
		r: BigInt(signature.r),
		s: BigInt(signature.s),
		yParity
	};
}
function vToYParity(v) {
	if (v === 0 || v === 27) return 0;
	if (v === 1 || v === 28) return 1;
	if (v >= 35) return v % 2 === 0 ? 1 : 0;
	throw new InvalidVError({ value: v });
}
var InvalidSerializedSizeError = class extends BaseError$1 {
	constructor({ signature }) {
		super(`Value \`${signature}\` is an invalid signature size.`, { metaMessages: ["Expected: 64 bytes or 65 bytes.", `Received ${size$2(from$7(signature))} bytes.`] });
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Signature.InvalidSerializedSizeError"
		});
	}
};
var MissingPropertiesError = class extends BaseError$1 {
	constructor({ signature }) {
		super(`Signature \`${stringify$1(signature)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Signature.MissingPropertiesError"
		});
	}
};
var InvalidRError = class extends BaseError$1 {
	constructor({ value }) {
		super(`Value \`${value}\` is an invalid r value. r must be a positive integer less than 2^256.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Signature.InvalidRError"
		});
	}
};
var InvalidSError = class extends BaseError$1 {
	constructor({ value }) {
		super(`Value \`${value}\` is an invalid s value. s must be a positive integer less than 2^256.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "Signature.InvalidSError"
		});
	}
};
var InvalidYParityError = class extends BaseError$1 {
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
var InvalidVError = class extends BaseError$1 {
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
function from$3(authorization, options = {}) {
	if (typeof authorization.chainId === "string") return fromRpc(authorization);
	return {
		...authorization,
		...options.signature
	};
}
function fromRpc(authorization) {
	const { address, chainId, nonce } = authorization;
	const signature = extract(authorization);
	return {
		address,
		chainId: Number(chainId),
		nonce: BigInt(nonce),
		...signature
	};
}
const suffixParameters = from$5("(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data");
function assert$1(value) {
	if (typeof value === "string") {
		if (slice$1(value, -32) !== "0x8010801080108010801080108010801080108010801080108010801080108010") throw new InvalidWrappedSignatureError$1(value);
	} else assert$2(value.authorization);
}
function unwrap(wrapped) {
	assert$1(wrapped);
	const suffixLength = toNumber$1(slice$1(wrapped, -64, -32));
	const suffix = slice$1(wrapped, -suffixLength - 64, -64);
	const signature = slice$1(wrapped, 0, -suffixLength - 64);
	const [auth, to, data] = decode(suffixParameters, suffix);
	return {
		authorization: from$3({
			address: auth.delegation,
			chainId: Number(auth.chainId),
			nonce: auth.nonce,
			yParity: auth.yParity,
			r: auth.r,
			s: auth.s
		}),
		signature,
		...data && data !== "0x" ? {
			data,
			to
		} : {}
	};
}
function validate$1(value) {
	try {
		assert$1(value);
		return true;
	} catch {
		return false;
	}
}
var InvalidWrappedSignatureError$1 = class extends BaseError$1 {
	constructor(wrapped) {
		super(`Value \`${wrapped}\` is an invalid ERC-8010 wrapped signature.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "SignatureErc8010.InvalidWrappedSignatureError"
		});
	}
};
function formatStorageProof(storageProof) {
	return storageProof.map((proof) => ({
		...proof,
		value: BigInt(proof.value)
	}));
}
function formatProof(proof) {
	return {
		...proof,
		balance: proof.balance ? BigInt(proof.balance) : void 0,
		nonce: proof.nonce ? hexToNumber(proof.nonce) : void 0,
		storageProof: proof.storageProof ? formatStorageProof(proof.storageProof) : void 0
	};
}
async function getProof(client, { address, blockNumber, blockTag: blockTag_, storageKeys }) {
	const blockTag = blockTag_ ?? "latest";
	const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
	return formatProof(await client.request({
		method: "eth_getProof",
		params: [
			address,
			storageKeys,
			blockNumberHex || blockTag
		]
	}));
}
async function getStorageAt(client, { address, blockNumber, blockTag = "latest", slot }) {
	const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
	return await client.request({
		method: "eth_getStorageAt",
		params: [
			address,
			slot,
			blockNumberHex || blockTag
		]
	});
}
async function getTransaction(client, { blockHash, blockNumber, blockTag: blockTag_, hash, index: index$1, sender, nonce }) {
	const blockTag = blockTag_ || "latest";
	const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
	let transaction = null;
	if (hash) transaction = await client.request({
		method: "eth_getTransactionByHash",
		params: [hash]
	}, { dedupe: true });
	else if (blockHash) transaction = await client.request({
		method: "eth_getTransactionByBlockHashAndIndex",
		params: [blockHash, numberToHex(index$1)]
	}, { dedupe: true });
	else if ((blockNumberHex || blockTag) && typeof index$1 === "number") transaction = await client.request({
		method: "eth_getTransactionByBlockNumberAndIndex",
		params: [blockNumberHex || blockTag, numberToHex(index$1)]
	}, { dedupe: Boolean(blockNumberHex) });
	else if (sender && typeof nonce === "number") transaction = await client.request({
		method: "eth_getTransactionBySenderAndNonce",
		params: [sender, numberToHex(nonce)]
	}, { dedupe: true });
	if (!transaction) throw new TransactionNotFoundError({
		blockHash,
		blockNumber,
		blockTag,
		hash,
		index: index$1
	});
	return (client.chain?.formatters?.transaction?.format || formatTransaction)(transaction, "getTransaction");
}
async function getTransactionConfirmations(client, { hash, transactionReceipt }) {
	const [blockNumber, transaction] = await Promise.all([getAction(client, getBlockNumber, "getBlockNumber")({}), hash ? getAction(client, getTransaction, "getTransaction")({ hash }) : void 0]);
	const transactionBlockNumber = transactionReceipt?.blockNumber || transaction?.blockNumber;
	if (!transactionBlockNumber) return 0n;
	return blockNumber - transactionBlockNumber + 1n;
}
async function getTransactionReceipt(client, { hash }) {
	const receipt = await client.request({
		method: "eth_getTransactionReceipt",
		params: [hash]
	}, { dedupe: true });
	if (!receipt) throw new TransactionReceiptNotFoundError({ hash });
	return (client.chain?.formatters?.transactionReceipt?.format || formatTransactionReceipt)(receipt, "getTransactionReceipt");
}
async function multicall(client, parameters) {
	const { account, authorizationList, allowFailure = true, blockNumber, blockOverrides, blockTag, stateOverride } = parameters;
	const contracts = parameters.contracts;
	const { batchSize = parameters.batchSize ?? 1024, deployless = parameters.deployless ?? false } = typeof client.batch?.multicall === "object" ? client.batch.multicall : {};
	const multicallAddress = (() => {
		if (parameters.multicallAddress) return parameters.multicallAddress;
		if (deployless) return null;
		if (client.chain) return getChainContractAddress({
			blockNumber,
			chain: client.chain,
			contract: "multicall3"
		});
		throw new Error("client chain not configured. multicallAddress is required.");
	})();
	const chunkedCalls = [[]];
	let currentChunk = 0;
	let currentChunkSize = 0;
	for (let i = 0; i < contracts.length; i++) {
		const { abi: abi$1, address, args, functionName } = contracts[i];
		try {
			const callData = encodeFunctionData({
				abi: abi$1,
				args,
				functionName
			});
			currentChunkSize += (callData.length - 2) / 2;
			if (batchSize > 0 && currentChunkSize > batchSize && chunkedCalls[currentChunk].length > 0) {
				currentChunk++;
				currentChunkSize = (callData.length - 2) / 2;
				chunkedCalls[currentChunk] = [];
			}
			chunkedCalls[currentChunk] = [...chunkedCalls[currentChunk], {
				allowFailure: true,
				callData,
				target: address
			}];
		} catch (err) {
			const error = getContractError(err, {
				abi: abi$1,
				address,
				args,
				docsPath: "/docs/contract/multicall",
				functionName,
				sender: account
			});
			if (!allowFailure) throw error;
			chunkedCalls[currentChunk] = [...chunkedCalls[currentChunk], {
				allowFailure: true,
				callData: "0x",
				target: address
			}];
		}
	}
	const aggregate3Results = await Promise.allSettled(chunkedCalls.map((calls) => getAction(client, readContract, "readContract")({
		...multicallAddress === null ? { code: multicall3Bytecode } : { address: multicallAddress },
		abi: multicall3Abi,
		account,
		args: [calls],
		authorizationList,
		blockNumber,
		blockOverrides,
		blockTag,
		functionName: "aggregate3",
		stateOverride
	})));
	const results = [];
	for (let i = 0; i < aggregate3Results.length; i++) {
		const result = aggregate3Results[i];
		if (result.status === "rejected") {
			if (!allowFailure) throw result.reason;
			for (let j = 0; j < chunkedCalls[i].length; j++) results.push({
				status: "failure",
				error: result.reason,
				result: void 0
			});
			continue;
		}
		const aggregate3Result = result.value;
		for (let j = 0; j < aggregate3Result.length; j++) {
			const { returnData, success } = aggregate3Result[j];
			const { callData } = chunkedCalls[i][j];
			const { abi: abi$1, address, functionName, args } = contracts[results.length];
			try {
				if (callData === "0x") throw new AbiDecodingZeroDataError();
				if (!success) throw new RawContractError({ data: returnData });
				const result$1 = decodeFunctionResult({
					abi: abi$1,
					args,
					data: returnData,
					functionName
				});
				results.push(allowFailure ? {
					result: result$1,
					status: "success"
				} : result$1);
			} catch (err) {
				const error = getContractError(err, {
					abi: abi$1,
					address,
					args,
					docsPath: "/docs/contract/multicall",
					functionName
				});
				if (!allowFailure) throw error;
				results.push({
					error,
					result: void 0,
					status: "failure"
				});
			}
		}
	}
	if (results.length !== contracts.length) throw new BaseError("multicall results mismatch");
	return results;
}
async function simulateBlocks(client, parameters) {
	const { blockNumber, blockTag = client.experimental_blockTag ?? "latest", blocks, returnFullTransactions, traceTransfers, validation } = parameters;
	try {
		const blockStateCalls = [];
		for (const block$1 of blocks) {
			const blockOverrides = block$1.blockOverrides ? toRpc(block$1.blockOverrides) : void 0;
			const calls = block$1.calls.map((call_) => {
				const call$1 = call_;
				const account = call$1.account ? parseAccount(call$1.account) : void 0;
				const data = call$1.abi ? encodeFunctionData(call$1) : call$1.data;
				const request = {
					...call$1,
					account,
					data: call$1.dataSuffix ? concat([data || "0x", call$1.dataSuffix]) : data,
					from: call$1.from ?? account?.address
				};
				assertRequest(request);
				return formatTransactionRequest(request);
			});
			const stateOverrides = block$1.stateOverrides ? serializeStateOverride(block$1.stateOverrides) : void 0;
			blockStateCalls.push({
				blockOverrides,
				calls,
				stateOverrides
			});
		}
		const block = (typeof blockNumber === "bigint" ? numberToHex(blockNumber) : void 0) || blockTag;
		return (await client.request({
			method: "eth_simulateV1",
			params: [{
				blockStateCalls,
				returnFullTransactions,
				traceTransfers,
				validation
			}, block]
		})).map((block$1, i) => ({
			...formatBlock(block$1),
			calls: block$1.calls.map((call$1, j) => {
				const { abi: abi$1, args, functionName, to } = blocks[i].calls[j];
				const data = call$1.error?.data ?? call$1.returnData;
				const gasUsed = BigInt(call$1.gasUsed);
				const logs = call$1.logs?.map((log) => formatLog(log));
				const status = call$1.status === "0x1" ? "success" : "failure";
				const result = abi$1 && status === "success" && data !== "0x" ? decodeFunctionResult({
					abi: abi$1,
					data,
					functionName
				}) : null;
				const error = (() => {
					if (status === "success") return void 0;
					let error$1;
					if (call$1.error?.data === "0x") error$1 = new AbiDecodingZeroDataError();
					else if (call$1.error) error$1 = new RawContractError(call$1.error);
					if (!error$1) return void 0;
					return getContractError(error$1, {
						abi: abi$1 ?? [],
						address: to ?? "0x",
						args,
						functionName: functionName ?? "<unknown>"
					});
				})();
				return {
					data,
					gasUsed,
					logs,
					status,
					...status === "success" ? { result } : { error }
				};
			})
		}));
	} catch (e) {
		const cause = e;
		const error = getNodeError(cause, {});
		if (error instanceof UnknownNodeError) throw cause;
		throw error;
	}
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
				"error",
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
	if (!valid) throw new BaseError$1("Unable to normalize signature.");
	return result;
}
function isArgOfType(arg, abiParameter) {
	const argType = typeof arg;
	const abiParameterType = abiParameter.type;
	switch (abiParameterType) {
		case "address": return validate$2(arg, { strict: false });
		case "bool": return argType === "boolean";
		case "function": return argType === "string";
		case "string": return argType === "string";
		default:
			if (abiParameterType === "tuple" && "components" in abiParameter) return Object.values(abiParameter.components).every((component, index$1) => {
				return isArgOfType(Object.values(arg)[index$1], component);
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
			if (types.includes("address") && types.includes("string")) return validate$2(args[parameterIndex], { strict: false });
			if (types.includes("address") && types.includes("bytes")) return validate$2(args[parameterIndex], { strict: false });
			return false;
		})()) return types;
	}
}
function from$2(abiItem, options = {}) {
	const { prepare = true } = options;
	const item = (() => {
		if (Array.isArray(abiItem)) return parseAbiItem(abiItem);
		if (typeof abiItem === "string") return parseAbiItem(abiItem);
		return abiItem;
	})();
	return {
		...item,
		...prepare ? { hash: getSignatureHash(item) } : {}
	};
}
function fromAbi$2(abi$1, name, options) {
	const { args = [], prepare = true } = options ?? {};
	const isSelector = validate$3(name, { strict: false });
	const abiItems = abi$1.filter((abiItem$1) => {
		if (isSelector) {
			if (abiItem$1.type === "function" || abiItem$1.type === "error") return getSelector$1(abiItem$1) === slice$1(name, 0, 4);
			if (abiItem$1.type === "event") return getSignatureHash(abiItem$1) === name;
			return false;
		}
		return "name" in abiItem$1 && abiItem$1.name === name;
	});
	if (abiItems.length === 0) throw new NotFoundError({ name });
	if (abiItems.length === 1) return {
		...abiItems[0],
		...prepare ? { hash: getSignatureHash(abiItems[0]) } : {}
	};
	let matchedAbiItem;
	for (const abiItem$1 of abiItems) {
		if (!("inputs" in abiItem$1)) continue;
		if (!args || args.length === 0) {
			if (!abiItem$1.inputs || abiItem$1.inputs.length === 0) return {
				...abiItem$1,
				...prepare ? { hash: getSignatureHash(abiItem$1) } : {}
			};
			continue;
		}
		if (!abiItem$1.inputs) continue;
		if (abiItem$1.inputs.length === 0) continue;
		if (abiItem$1.inputs.length !== args.length) continue;
		if (args.every((arg, index$1) => {
			const abiParameter = "inputs" in abiItem$1 && abiItem$1.inputs[index$1];
			if (!abiParameter) return false;
			return isArgOfType(arg, abiParameter);
		})) {
			if (matchedAbiItem && "inputs" in matchedAbiItem && matchedAbiItem.inputs) {
				const ambiguousTypes = getAmbiguousTypes(abiItem$1.inputs, matchedAbiItem.inputs, args);
				if (ambiguousTypes) throw new AmbiguityError({
					abiItem: abiItem$1,
					type: ambiguousTypes[0]
				}, {
					abiItem: matchedAbiItem,
					type: ambiguousTypes[1]
				});
			}
			matchedAbiItem = abiItem$1;
		}
	}
	const abiItem = (() => {
		if (matchedAbiItem) return matchedAbiItem;
		const [abiItem$1, ...overloads] = abiItems;
		return {
			...abiItem$1,
			overloads
		};
	})();
	if (!abiItem) throw new NotFoundError({ name });
	return {
		...abiItem,
		...prepare ? { hash: getSignatureHash(abiItem) } : {}
	};
}
function getSelector$1(...parameters) {
	return slice$1(getSignatureHash((() => {
		if (Array.isArray(parameters[0])) {
			const [abi$1, name] = parameters;
			return fromAbi$2(abi$1, name);
		}
		return parameters[0];
	})()), 0, 4);
}
function getSignature(...parameters) {
	const abiItem = (() => {
		if (Array.isArray(parameters[0])) {
			const [abi$1, name] = parameters;
			return fromAbi$2(abi$1, name);
		}
		return parameters[0];
	})();
	return normalizeSignature((() => {
		if (typeof abiItem === "string") return abiItem;
		return formatAbiItem$1(abiItem);
	})());
}
function getSignatureHash(...parameters) {
	const abiItem = (() => {
		if (Array.isArray(parameters[0])) {
			const [abi$1, name] = parameters;
			return fromAbi$2(abi$1, name);
		}
		return parameters[0];
	})();
	if (typeof abiItem !== "string" && "hash" in abiItem && abiItem.hash) return abiItem.hash;
	return keccak256(fromString$1(getSignature(abiItem)));
}
var AmbiguityError = class extends BaseError$1 {
	constructor(x, y) {
		super("Found ambiguous types in overloaded ABI Items.", { metaMessages: [
			`\`${x.type}\` in \`${normalizeSignature(formatAbiItem$1(x.abiItem))}\`, and`,
			`\`${y.type}\` in \`${normalizeSignature(formatAbiItem$1(y.abiItem))}\``,
			"",
			"These types encode differently and cannot be distinguished at runtime.",
			"Remove one of the ambiguous items in the ABI."
		] });
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "AbiItem.AmbiguityError"
		});
	}
};
var NotFoundError = class extends BaseError$1 {
	constructor({ name, data, type = "item" }) {
		const selector = (() => {
			if (name) return ` with name "${name}"`;
			if (data) return ` with data "${data}"`;
			return "";
		})();
		super(`ABI ${type}${selector} not found.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "AbiItem.NotFoundError"
		});
	}
};
function encode(...parameters) {
	const [abiConstructor, options] = (() => {
		if (Array.isArray(parameters[0])) {
			const [abi$1, options$1] = parameters;
			return [fromAbi$1(abi$1), options$1];
		}
		return parameters;
	})();
	const { bytecode, args } = options;
	return concat$1(bytecode, abiConstructor.inputs?.length && args?.length ? encode$1(abiConstructor.inputs, args) : "0x");
}
function from$1(abiConstructor) {
	return from$2(abiConstructor);
}
function fromAbi$1(abi$1) {
	const item = abi$1.find((item$1) => item$1.type === "constructor");
	if (!item) throw new NotFoundError({ name: "constructor" });
	return item;
}
function encodeData(...parameters) {
	const [abiFunction, args = []] = (() => {
		if (Array.isArray(parameters[0])) {
			const [abi$1, name, args$2] = parameters;
			return [fromAbi(abi$1, name, { args: args$2 }), args$2];
		}
		const [abiFunction$1, args$1] = parameters;
		return [abiFunction$1, args$1];
	})();
	const { overloads } = abiFunction;
	const item = overloads ? fromAbi([abiFunction, ...overloads], abiFunction.name, { args }) : abiFunction;
	const selector = getSelector(item);
	const data = args.length > 0 ? encode$1(item.inputs, args) : void 0;
	return data ? concat$1(selector, data) : selector;
}
function from(abiFunction, options = {}) {
	return from$2(abiFunction, options);
}
function fromAbi(abi$1, name, options) {
	const item = fromAbi$2(abi$1, name, options);
	if (item.type !== "function") throw new NotFoundError({
		name,
		type: "function"
	});
	return item;
}
function getSelector(abiItem) {
	return getSelector$1(abiItem);
}
const ethAddress = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
const zeroAddress = "0x0000000000000000000000000000000000000000";
var getBalanceCode = "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033";
async function simulateCalls(client, parameters) {
	const { blockNumber, blockTag, calls, stateOverrides, traceAssetChanges, traceTransfers, validation } = parameters;
	const account = parameters.account ? parseAccount(parameters.account) : void 0;
	if (traceAssetChanges && !account) throw new BaseError("`account` is required when `traceAssetChanges` is true");
	const getBalanceData = account ? encode(from$1("constructor(bytes, bytes)"), {
		bytecode: deploylessCallViaBytecodeBytecode,
		args: [getBalanceCode, encodeData(from("function getBalance(address)"), [account.address])]
	}) : void 0;
	const assetAddresses = traceAssetChanges ? await Promise.all(parameters.calls.map(async (call$1) => {
		if (!call$1.data && !call$1.abi) return;
		const { accessList } = await createAccessList(client, {
			account: account.address,
			...call$1,
			data: call$1.abi ? encodeFunctionData(call$1) : call$1.data
		});
		return accessList.map(({ address, storageKeys }) => storageKeys.length > 0 ? address : null);
	})).then((x) => x.flat().filter(Boolean)) : [];
	const blocks = await simulateBlocks(client, {
		blockNumber,
		blockTag,
		blocks: [
			...traceAssetChanges ? [{
				calls: [{ data: getBalanceData }],
				stateOverrides
			}, {
				calls: assetAddresses.map((address, i) => ({
					abi: [from("function balanceOf(address) returns (uint256)")],
					functionName: "balanceOf",
					args: [account.address],
					to: address,
					from: zeroAddress,
					nonce: i
				})),
				stateOverrides: [{
					address: zeroAddress,
					nonce: 0
				}]
			}] : [],
			{
				calls: [...calls, {}].map((call$1) => ({
					...call$1,
					from: account?.address
				})),
				stateOverrides
			},
			...traceAssetChanges ? [
				{ calls: [{ data: getBalanceData }] },
				{
					calls: assetAddresses.map((address, i) => ({
						abi: [from("function balanceOf(address) returns (uint256)")],
						functionName: "balanceOf",
						args: [account.address],
						to: address,
						from: zeroAddress,
						nonce: i
					})),
					stateOverrides: [{
						address: zeroAddress,
						nonce: 0
					}]
				},
				{
					calls: assetAddresses.map((address, i) => ({
						to: address,
						abi: [from("function decimals() returns (uint256)")],
						functionName: "decimals",
						from: zeroAddress,
						nonce: i
					})),
					stateOverrides: [{
						address: zeroAddress,
						nonce: 0
					}]
				},
				{
					calls: assetAddresses.map((address, i) => ({
						to: address,
						abi: [from("function tokenURI(uint256) returns (string)")],
						functionName: "tokenURI",
						args: [0n],
						from: zeroAddress,
						nonce: i
					})),
					stateOverrides: [{
						address: zeroAddress,
						nonce: 0
					}]
				},
				{
					calls: assetAddresses.map((address, i) => ({
						to: address,
						abi: [from("function symbol() returns (string)")],
						functionName: "symbol",
						from: zeroAddress,
						nonce: i
					})),
					stateOverrides: [{
						address: zeroAddress,
						nonce: 0
					}]
				}
			] : []
		],
		traceTransfers,
		validation
	});
	const block_results = traceAssetChanges ? blocks[2] : blocks[0];
	const [block_ethPre, block_assetsPre, , block_ethPost, block_assetsPost, block_decimals, block_tokenURI, block_symbols] = traceAssetChanges ? blocks : [];
	const { calls: block_calls, ...block } = block_results;
	const results = block_calls.slice(0, -1) ?? [];
	const ethPre = block_ethPre?.calls ?? [];
	const assetsPre = block_assetsPre?.calls ?? [];
	const balancesPre = [...ethPre, ...assetsPre].map((call$1) => call$1.status === "success" ? hexToBigInt(call$1.data) : null);
	const ethPost = block_ethPost?.calls ?? [];
	const assetsPost = block_assetsPost?.calls ?? [];
	const balancesPost = [...ethPost, ...assetsPost].map((call$1) => call$1.status === "success" ? hexToBigInt(call$1.data) : null);
	const decimals = (block_decimals?.calls ?? []).map((x) => x.status === "success" ? x.result : null);
	const symbols = (block_symbols?.calls ?? []).map((x) => x.status === "success" ? x.result : null);
	const tokenURI = (block_tokenURI?.calls ?? []).map((x) => x.status === "success" ? x.result : null);
	const changes = [];
	for (const [i, balancePost] of balancesPost.entries()) {
		const balancePre = balancesPre[i];
		if (typeof balancePost !== "bigint") continue;
		if (typeof balancePre !== "bigint") continue;
		const decimals_ = decimals[i - 1];
		const symbol_ = symbols[i - 1];
		const tokenURI_ = tokenURI[i - 1];
		const token = (() => {
			if (i === 0) return {
				address: ethAddress,
				decimals: 18,
				symbol: "ETH"
			};
			return {
				address: assetAddresses[i - 1],
				decimals: tokenURI_ || decimals_ ? Number(decimals_ ?? 1) : void 0,
				symbol: symbol_ ?? void 0
			};
		})();
		if (changes.some((change) => change.token.address === token.address)) continue;
		changes.push({
			token,
			value: {
				pre: balancePre,
				post: balancePost,
				diff: balancePost - balancePre
			}
		});
	}
	return {
		assetChanges: changes,
		block,
		results
	};
}
const magicBytes = "0x6492649264926492649264926492649264926492649264926492649264926492";
function assert(wrapped) {
	if (slice$1(wrapped, -32) !== "0x6492649264926492649264926492649264926492649264926492649264926492") throw new InvalidWrappedSignatureError(wrapped);
}
function wrap(value) {
	const { data, signature, to } = value;
	return concat$1(encode$1(from$5("address, bytes, bytes"), [
		to,
		data,
		signature
	]), magicBytes);
}
function validate(wrapped) {
	try {
		assert(wrapped);
		return true;
	} catch {
		return false;
	}
}
var InvalidWrappedSignatureError = class extends BaseError$1 {
	constructor(wrapped) {
		super(`Value \`${wrapped}\` is an invalid ERC-6492 wrapped signature.`);
		Object.defineProperty(this, "name", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: "SignatureErc6492.InvalidWrappedSignatureError"
		});
	}
};
function serializeSignature({ r, s, to = "hex", v, yParity }) {
	const yParity_ = (() => {
		if (yParity === 0 || yParity === 1) return yParity;
		if (v && (v === 27n || v === 28n || v >= 35n)) return v % 2n === 0n ? 1 : 0;
		throw new Error("Invalid `v` or `yParity` value");
	})();
	const signature = `0x${new secp256k1.Signature(hexToBigInt(r), hexToBigInt(s)).toCompactHex()}${yParity_ === 0 ? "1b" : "1c"}`;
	if (to === "hex") return signature;
	return hexToBytes(signature);
}
async function verifyHash(client, parameters) {
	const { address, chain = client.chain, hash, erc6492VerifierAddress: verifierAddress = parameters.universalSignatureVerifierAddress ?? chain?.contracts?.erc6492Verifier?.address, multicallAddress = parameters.multicallAddress ?? chain?.contracts?.multicall3?.address } = parameters;
	if (chain?.verifyHash) return await chain.verifyHash(client, parameters);
	const signature = (() => {
		const signature$1 = parameters.signature;
		if (isHex(signature$1)) return signature$1;
		if (typeof signature$1 === "object" && "r" in signature$1 && "s" in signature$1) return serializeSignature(signature$1);
		return bytesToHex(signature$1);
	})();
	try {
		if (validate$1(signature)) return await verifyErc8010(client, {
			...parameters,
			multicallAddress,
			signature
		});
		return await verifyErc6492(client, {
			...parameters,
			verifierAddress,
			signature
		});
	} catch (error) {
		try {
			if (isAddressEqual(getAddress(address), await recoverAddress({
				hash,
				signature
			}))) return true;
		} catch {}
		if (error instanceof VerificationError) return false;
		throw error;
	}
}
async function verifyErc8010(client, parameters) {
	const { address, blockNumber, blockTag, hash, multicallAddress } = parameters;
	const { authorization: authorization_ox, data: initData, signature, to } = unwrap(parameters.signature);
	if (await getCode(client, {
		address,
		blockNumber,
		blockTag
	}) === concatHex(["0xef0100", authorization_ox.address])) return await verifyErc1271(client, {
		address,
		blockNumber,
		blockTag,
		hash,
		signature
	});
	const authorization = {
		address: authorization_ox.address,
		chainId: Number(authorization_ox.chainId),
		nonce: Number(authorization_ox.nonce),
		r: numberToHex(authorization_ox.r, { size: 32 }),
		s: numberToHex(authorization_ox.s, { size: 32 }),
		yParity: authorization_ox.yParity
	};
	if (!await verifyAuthorization({
		address,
		authorization
	})) throw new VerificationError();
	const results = await getAction(client, readContract, "readContract")({
		...multicallAddress ? { address: multicallAddress } : { code: multicall3Bytecode },
		authorizationList: [authorization],
		abi: multicall3Abi,
		blockNumber,
		blockTag: "pending",
		functionName: "aggregate3",
		args: [[...initData ? [{
			allowFailure: true,
			target: to ?? address,
			callData: initData
		}] : [], {
			allowFailure: true,
			target: address,
			callData: encodeFunctionData({
				abi: erc1271Abi,
				functionName: "isValidSignature",
				args: [hash, signature]
			})
		}]]
	});
	if ((results[results.length - 1]?.returnData)?.startsWith("0x1626ba7e")) return true;
	throw new VerificationError();
}
async function verifyErc6492(client, parameters) {
	const { address, factory, factoryData, hash, signature, verifierAddress, ...rest } = parameters;
	const wrappedSignature = await (async () => {
		if (!factory && !factoryData) return signature;
		if (validate(signature)) return signature;
		return wrap({
			data: factoryData,
			signature,
			to: factory
		});
	})();
	const args = verifierAddress ? {
		to: verifierAddress,
		data: encodeFunctionData({
			abi: erc6492SignatureValidatorAbi,
			functionName: "isValidSig",
			args: [
				address,
				hash,
				wrappedSignature
			]
		}),
		...rest
	} : {
		data: encodeDeployData({
			abi: erc6492SignatureValidatorAbi,
			args: [
				address,
				hash,
				wrappedSignature
			],
			bytecode: erc6492SignatureValidatorByteCode
		}),
		...rest
	};
	const { data } = await getAction(client, call, "call")(args).catch((error) => {
		if (error instanceof CallExecutionError) throw new VerificationError();
		throw error;
	});
	if (hexToBool(data ?? "0x0")) return true;
	throw new VerificationError();
}
async function verifyErc1271(client, parameters) {
	const { address, blockNumber, blockTag, hash, signature } = parameters;
	if ((await getAction(client, readContract, "readContract")({
		address,
		abi: erc1271Abi,
		args: [hash, signature],
		blockNumber,
		blockTag,
		functionName: "isValidSignature"
	}).catch((error) => {
		if (error instanceof ContractFunctionExecutionError) throw new VerificationError();
		throw error;
	})).startsWith("0x1626ba7e")) return true;
	throw new VerificationError();
}
var VerificationError = class extends Error {};
async function verifyMessage(client, { address, message, factory, factoryData, signature, ...callRequest }) {
	const hash = hashMessage(message);
	return getAction(client, verifyHash, "verifyHash")({
		address,
		factory,
		factoryData,
		hash,
		signature,
		...callRequest
	});
}
async function verifyTypedData(client, parameters) {
	const { address, factory, factoryData, signature, message, primaryType, types, domain, ...callRequest } = parameters;
	const hash = hashTypedData({
		message,
		primaryType,
		types,
		domain
	});
	return getAction(client, verifyHash, "verifyHash")({
		address,
		factory,
		factoryData,
		hash,
		signature,
		...callRequest
	});
}
function watchBlockNumber(client, { emitOnBegin = false, emitMissed = false, onBlockNumber, onError, poll: poll_, pollingInterval = client.pollingInterval }) {
	const enablePolling = (() => {
		if (typeof poll_ !== "undefined") return poll_;
		if (client.transport.type === "webSocket" || client.transport.type === "ipc") return false;
		if (client.transport.type === "fallback" && (client.transport.transports[0].config.type === "webSocket" || client.transport.transports[0].config.type === "ipc")) return false;
		return true;
	})();
	let prevBlockNumber;
	const pollBlockNumber = () => {
		return observe(stringify([
			"watchBlockNumber",
			client.uid,
			emitOnBegin,
			emitMissed,
			pollingInterval
		]), {
			onBlockNumber,
			onError
		}, (emit) => poll(async () => {
			try {
				const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({ cacheTime: 0 });
				if (prevBlockNumber !== void 0) {
					if (blockNumber === prevBlockNumber) return;
					if (blockNumber - prevBlockNumber > 1 && emitMissed) for (let i = prevBlockNumber + 1n; i < blockNumber; i++) {
						emit.onBlockNumber(i, prevBlockNumber);
						prevBlockNumber = i;
					}
				}
				if (prevBlockNumber === void 0 || blockNumber > prevBlockNumber) {
					emit.onBlockNumber(blockNumber, prevBlockNumber);
					prevBlockNumber = blockNumber;
				}
			} catch (err) {
				emit.onError?.(err);
			}
		}, {
			emitOnBegin,
			interval: pollingInterval
		}));
	};
	const subscribeBlockNumber = () => {
		return observe(stringify([
			"watchBlockNumber",
			client.uid,
			emitOnBegin,
			emitMissed
		]), {
			onBlockNumber,
			onError
		}, (emit) => {
			let active = true;
			let unsubscribe = () => active = false;
			(async () => {
				try {
					const { unsubscribe: unsubscribe_ } = await (() => {
						if (client.transport.type === "fallback") {
							const transport = client.transport.transports.find((transport$1) => transport$1.config.type === "webSocket" || transport$1.config.type === "ipc");
							if (!transport) return client.transport;
							return transport.value;
						}
						return client.transport;
					})().subscribe({
						params: ["newHeads"],
						onData(data) {
							if (!active) return;
							const blockNumber = hexToBigInt(data.result?.number);
							emit.onBlockNumber(blockNumber, prevBlockNumber);
							prevBlockNumber = blockNumber;
						},
						onError(error) {
							emit.onError?.(error);
						}
					});
					unsubscribe = unsubscribe_;
					if (!active) unsubscribe();
				} catch (err) {
					onError?.(err);
				}
			})();
			return () => unsubscribe();
		});
	};
	return enablePolling ? pollBlockNumber() : subscribeBlockNumber();
}
async function waitForTransactionReceipt(client, parameters) {
	const { checkReplacement = true, confirmations = 1, hash, onReplaced, retryCount = 6, retryDelay = ({ count }) => ~~(1 << count) * 200, timeout = 18e4 } = parameters;
	const observerId = stringify([
		"waitForTransactionReceipt",
		client.uid,
		hash
	]);
	const pollingInterval = (() => {
		if (parameters.pollingInterval) return parameters.pollingInterval;
		if (client.chain?.experimental_preconfirmationTime) return client.chain.experimental_preconfirmationTime;
		return client.pollingInterval;
	})();
	let transaction;
	let replacedTransaction;
	let receipt;
	let retrying = false;
	let _unobserve;
	let _unwatch;
	const { promise, resolve, reject } = withResolvers();
	const timer = timeout ? setTimeout(() => {
		_unwatch?.();
		_unobserve?.();
		reject(new WaitForTransactionReceiptTimeoutError({ hash }));
	}, timeout) : void 0;
	_unobserve = observe(observerId, {
		onReplaced,
		resolve,
		reject
	}, async (emit) => {
		receipt = await getAction(client, getTransactionReceipt, "getTransactionReceipt")({ hash }).catch(() => void 0);
		if (receipt && confirmations <= 1) {
			clearTimeout(timer);
			emit.resolve(receipt);
			_unobserve?.();
			return;
		}
		_unwatch = getAction(client, watchBlockNumber, "watchBlockNumber")({
			emitMissed: true,
			emitOnBegin: true,
			poll: true,
			pollingInterval,
			async onBlockNumber(blockNumber_) {
				const done = (fn) => {
					clearTimeout(timer);
					_unwatch?.();
					fn();
					_unobserve?.();
				};
				let blockNumber = blockNumber_;
				if (retrying) return;
				try {
					if (receipt) {
						if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations)) return;
						done(() => emit.resolve(receipt));
						return;
					}
					if (checkReplacement && !transaction) {
						retrying = true;
						await withRetry(async () => {
							transaction = await getAction(client, getTransaction, "getTransaction")({ hash });
							if (transaction.blockNumber) blockNumber = transaction.blockNumber;
						}, {
							delay: retryDelay,
							retryCount
						});
						retrying = false;
					}
					receipt = await getAction(client, getTransactionReceipt, "getTransactionReceipt")({ hash });
					if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations)) return;
					done(() => emit.resolve(receipt));
				} catch (err) {
					if (err instanceof TransactionNotFoundError || err instanceof TransactionReceiptNotFoundError) {
						if (!transaction) {
							retrying = false;
							return;
						}
						try {
							replacedTransaction = transaction;
							retrying = true;
							const block = await withRetry(() => getAction(client, getBlock, "getBlock")({
								blockNumber,
								includeTransactions: true
							}), {
								delay: retryDelay,
								retryCount,
								shouldRetry: ({ error }) => error instanceof BlockNotFoundError
							});
							retrying = false;
							const replacementTransaction = block.transactions.find(({ from: from$8, nonce }) => from$8 === replacedTransaction.from && nonce === replacedTransaction.nonce);
							if (!replacementTransaction) return;
							receipt = await getAction(client, getTransactionReceipt, "getTransactionReceipt")({ hash: replacementTransaction.hash });
							if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations)) return;
							let reason = "replaced";
							if (replacementTransaction.to === replacedTransaction.to && replacementTransaction.value === replacedTransaction.value && replacementTransaction.input === replacedTransaction.input) reason = "repriced";
							else if (replacementTransaction.from === replacementTransaction.to && replacementTransaction.value === 0n) reason = "cancelled";
							done(() => {
								emit.onReplaced?.({
									reason,
									replacedTransaction,
									transaction: replacementTransaction,
									transactionReceipt: receipt
								});
								emit.resolve(receipt);
							});
						} catch (err_) {
							done(() => emit.reject(err_));
						}
					} else done(() => emit.reject(err));
				}
			}
		});
	});
	return promise;
}
function watchBlocks(client, { blockTag = client.experimental_blockTag ?? "latest", emitMissed = false, emitOnBegin = false, onBlock, onError, includeTransactions: includeTransactions_, poll: poll_, pollingInterval = client.pollingInterval }) {
	const enablePolling = (() => {
		if (typeof poll_ !== "undefined") return poll_;
		if (client.transport.type === "webSocket" || client.transport.type === "ipc") return false;
		if (client.transport.type === "fallback" && (client.transport.transports[0].config.type === "webSocket" || client.transport.transports[0].config.type === "ipc")) return false;
		return true;
	})();
	const includeTransactions = includeTransactions_ ?? false;
	let prevBlock;
	const pollBlocks = () => {
		return observe(stringify([
			"watchBlocks",
			client.uid,
			blockTag,
			emitMissed,
			emitOnBegin,
			includeTransactions,
			pollingInterval
		]), {
			onBlock,
			onError
		}, (emit) => poll(async () => {
			try {
				const block = await getAction(client, getBlock, "getBlock")({
					blockTag,
					includeTransactions
				});
				if (block.number !== null && prevBlock?.number != null) {
					if (block.number === prevBlock.number) return;
					if (block.number - prevBlock.number > 1 && emitMissed) for (let i = prevBlock?.number + 1n; i < block.number; i++) {
						const block$1 = await getAction(client, getBlock, "getBlock")({
							blockNumber: i,
							includeTransactions
						});
						emit.onBlock(block$1, prevBlock);
						prevBlock = block$1;
					}
				}
				if (prevBlock?.number == null || blockTag === "pending" && block?.number == null || block.number !== null && block.number > prevBlock.number) {
					emit.onBlock(block, prevBlock);
					prevBlock = block;
				}
			} catch (err) {
				emit.onError?.(err);
			}
		}, {
			emitOnBegin,
			interval: pollingInterval
		}));
	};
	const subscribeBlocks = () => {
		let active = true;
		let emitFetched = true;
		let unsubscribe = () => active = false;
		(async () => {
			try {
				if (emitOnBegin) getAction(client, getBlock, "getBlock")({
					blockTag,
					includeTransactions
				}).then((block) => {
					if (!active) return;
					if (!emitFetched) return;
					onBlock(block, void 0);
					emitFetched = false;
				}).catch(onError);
				const { unsubscribe: unsubscribe_ } = await (() => {
					if (client.transport.type === "fallback") {
						const transport = client.transport.transports.find((transport$1) => transport$1.config.type === "webSocket" || transport$1.config.type === "ipc");
						if (!transport) return client.transport;
						return transport.value;
					}
					return client.transport;
				})().subscribe({
					params: ["newHeads"],
					async onData(data) {
						if (!active) return;
						const block = await getAction(client, getBlock, "getBlock")({
							blockNumber: data.result?.number,
							includeTransactions
						}).catch(() => {});
						if (!active) return;
						onBlock(block, prevBlock);
						emitFetched = false;
						prevBlock = block;
					},
					onError(error) {
						onError?.(error);
					}
				});
				unsubscribe = unsubscribe_;
				if (!active) unsubscribe();
			} catch (err) {
				onError?.(err);
			}
		})();
		return () => unsubscribe();
	};
	return enablePolling ? pollBlocks() : subscribeBlocks();
}
function watchEvent(client, { address, args, batch = true, event, events, fromBlock, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ }) {
	const enablePolling = (() => {
		if (typeof poll_ !== "undefined") return poll_;
		if (typeof fromBlock === "bigint") return true;
		if (client.transport.type === "webSocket" || client.transport.type === "ipc") return false;
		if (client.transport.type === "fallback" && (client.transport.transports[0].config.type === "webSocket" || client.transport.transports[0].config.type === "ipc")) return false;
		return true;
	})();
	const strict = strict_ ?? false;
	const pollEvent = () => {
		return observe(stringify([
			"watchEvent",
			address,
			args,
			batch,
			client.uid,
			event,
			pollingInterval,
			fromBlock
		]), {
			onLogs,
			onError
		}, (emit) => {
			let previousBlockNumber;
			if (fromBlock !== void 0) previousBlockNumber = fromBlock - 1n;
			let filter;
			let initialized = false;
			const unwatch = poll(async () => {
				if (!initialized) {
					try {
						filter = await getAction(client, createEventFilter, "createEventFilter")({
							address,
							args,
							event,
							events,
							strict,
							fromBlock
						});
					} catch {}
					initialized = true;
					return;
				}
				try {
					let logs;
					if (filter) logs = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
					else {
						const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({});
						if (previousBlockNumber && previousBlockNumber !== blockNumber) logs = await getAction(client, getLogs, "getLogs")({
							address,
							args,
							event,
							events,
							fromBlock: previousBlockNumber + 1n,
							toBlock: blockNumber
						});
						else logs = [];
						previousBlockNumber = blockNumber;
					}
					if (logs.length === 0) return;
					if (batch) emit.onLogs(logs);
					else for (const log of logs) emit.onLogs([log]);
				} catch (err) {
					if (filter && err instanceof InvalidInputRpcError) initialized = false;
					emit.onError?.(err);
				}
			}, {
				emitOnBegin: true,
				interval: pollingInterval
			});
			return async () => {
				if (filter) await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
				unwatch();
			};
		});
	};
	const subscribeEvent = () => {
		let active = true;
		let unsubscribe = () => active = false;
		(async () => {
			try {
				const transport = (() => {
					if (client.transport.type === "fallback") {
						const transport$1 = client.transport.transports.find((transport$2) => transport$2.config.type === "webSocket" || transport$2.config.type === "ipc");
						if (!transport$1) return client.transport;
						return transport$1.value;
					}
					return client.transport;
				})();
				const events_ = events ?? (event ? [event] : void 0);
				let topics = [];
				if (events_) {
					topics = [events_.flatMap((event$1) => encodeEventTopics({
						abi: [event$1],
						eventName: event$1.name,
						args
					}))];
					if (event) topics = topics[0];
				}
				const { unsubscribe: unsubscribe_ } = await transport.subscribe({
					params: ["logs", {
						address,
						topics
					}],
					onData(data) {
						if (!active) return;
						const log = data.result;
						try {
							const { eventName, args: args$1 } = decodeEventLog({
								abi: events_ ?? [],
								data: log.data,
								topics: log.topics,
								strict
							});
							onLogs([formatLog(log, {
								args: args$1,
								eventName
							})]);
						} catch (err) {
							let eventName;
							let isUnnamed;
							if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
								if (strict_) return;
								eventName = err.abiItem.name;
								isUnnamed = err.abiItem.inputs?.some((x) => !("name" in x && x.name));
							}
							onLogs([formatLog(log, {
								args: isUnnamed ? [] : {},
								eventName
							})]);
						}
					},
					onError(error) {
						onError?.(error);
					}
				});
				unsubscribe = unsubscribe_;
				if (!active) unsubscribe();
			} catch (err) {
				onError?.(err);
			}
		})();
		return () => unsubscribe();
	};
	return enablePolling ? pollEvent() : subscribeEvent();
}
function watchPendingTransactions(client, { batch = true, onError, onTransactions, poll: poll_, pollingInterval = client.pollingInterval }) {
	const enablePolling = typeof poll_ !== "undefined" ? poll_ : client.transport.type !== "webSocket" && client.transport.type !== "ipc";
	const pollPendingTransactions = () => {
		return observe(stringify([
			"watchPendingTransactions",
			client.uid,
			batch,
			pollingInterval
		]), {
			onTransactions,
			onError
		}, (emit) => {
			let filter;
			const unwatch = poll(async () => {
				try {
					if (!filter) try {
						filter = await getAction(client, createPendingTransactionFilter, "createPendingTransactionFilter")({});
						return;
					} catch (err) {
						unwatch();
						throw err;
					}
					const hashes = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
					if (hashes.length === 0) return;
					if (batch) emit.onTransactions(hashes);
					else for (const hash of hashes) emit.onTransactions([hash]);
				} catch (err) {
					emit.onError?.(err);
				}
			}, {
				emitOnBegin: true,
				interval: pollingInterval
			});
			return async () => {
				if (filter) await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
				unwatch();
			};
		});
	};
	const subscribePendingTransactions = () => {
		let active = true;
		let unsubscribe = () => active = false;
		(async () => {
			try {
				const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
					params: ["newPendingTransactions"],
					onData(data) {
						if (!active) return;
						const transaction = data.result;
						onTransactions([transaction]);
					},
					onError(error) {
						onError?.(error);
					}
				});
				unsubscribe = unsubscribe_;
				if (!active) unsubscribe();
			} catch (err) {
				onError?.(err);
			}
		})();
		return () => unsubscribe();
	};
	return enablePolling ? pollPendingTransactions() : subscribePendingTransactions();
}
function parseSiweMessage(message) {
	const { scheme, statement, ...prefix } = message.match(prefixRegex)?.groups ?? {};
	const { chainId, expirationTime, issuedAt, notBefore, requestId, ...suffix } = message.match(suffixRegex)?.groups ?? {};
	const resources = message.split("Resources:")[1]?.split("\n- ").slice(1);
	return {
		...prefix,
		...suffix,
		...chainId ? { chainId: Number(chainId) } : {},
		...expirationTime ? { expirationTime: new Date(expirationTime) } : {},
		...issuedAt ? { issuedAt: new Date(issuedAt) } : {},
		...notBefore ? { notBefore: new Date(notBefore) } : {},
		...requestId ? { requestId } : {},
		...resources ? { resources } : {},
		...scheme ? { scheme } : {},
		...statement ? { statement } : {}
	};
}
var prefixRegex = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/;
var suffixRegex = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
function validateSiweMessage(parameters) {
	const { address, domain, message, nonce, scheme, time = /* @__PURE__ */ new Date() } = parameters;
	if (domain && message.domain !== domain) return false;
	if (nonce && message.nonce !== nonce) return false;
	if (scheme && message.scheme !== scheme) return false;
	if (message.expirationTime && time >= message.expirationTime) return false;
	if (message.notBefore && time < message.notBefore) return false;
	try {
		if (!message.address) return false;
		if (!isAddress(message.address, { strict: false })) return false;
		if (address && !isAddressEqual(message.address, address)) return false;
	} catch {
		return false;
	}
	return true;
}
async function verifySiweMessage(client, parameters) {
	const { address, domain, message, nonce, scheme, signature, time = /* @__PURE__ */ new Date(), ...callRequest } = parameters;
	const parsed = parseSiweMessage(message);
	if (!parsed.address) return false;
	if (!validateSiweMessage({
		address,
		domain,
		message: parsed,
		nonce,
		scheme,
		time
	})) return false;
	const hash = hashMessage(message);
	return verifyHash(client, {
		address: parsed.address,
		hash,
		signature,
		...callRequest
	});
}
async function sendRawTransactionSync(client, { serializedTransaction, throwOnReceiptRevert, timeout }) {
	const receipt = await client.request({
		method: "eth_sendRawTransactionSync",
		params: timeout ? [serializedTransaction, numberToHex(timeout)] : [serializedTransaction]
	}, { retryCount: 0 });
	const formatted = (client.chain?.formatters?.transactionReceipt?.format || formatTransactionReceipt)(receipt);
	if (formatted.status === "reverted" && throwOnReceiptRevert) throw new TransactionReceiptRevertedError({ receipt: formatted });
	return formatted;
}
function publicActions(client) {
	return {
		call: (args) => call(client, args),
		createAccessList: (args) => createAccessList(client, args),
		createBlockFilter: () => createBlockFilter(client),
		createContractEventFilter: (args) => createContractEventFilter(client, args),
		createEventFilter: (args) => createEventFilter(client, args),
		createPendingTransactionFilter: () => createPendingTransactionFilter(client),
		estimateContractGas: (args) => estimateContractGas(client, args),
		estimateGas: (args) => estimateGas(client, args),
		getBalance: (args) => getBalance(client, args),
		getBlobBaseFee: () => getBlobBaseFee(client),
		getBlock: (args) => getBlock(client, args),
		getBlockNumber: (args) => getBlockNumber(client, args),
		getBlockTransactionCount: (args) => getBlockTransactionCount(client, args),
		getBytecode: (args) => getCode(client, args),
		getChainId: () => getChainId(client),
		getCode: (args) => getCode(client, args),
		getContractEvents: (args) => getContractEvents(client, args),
		getEip712Domain: (args) => getEip712Domain(client, args),
		getEnsAddress: (args) => getEnsAddress(client, args),
		getEnsAvatar: (args) => getEnsAvatar(client, args),
		getEnsName: (args) => getEnsName(client, args),
		getEnsResolver: (args) => getEnsResolver(client, args),
		getEnsText: (args) => getEnsText(client, args),
		getFeeHistory: (args) => getFeeHistory(client, args),
		estimateFeesPerGas: (args) => estimateFeesPerGas(client, args),
		getFilterChanges: (args) => getFilterChanges(client, args),
		getFilterLogs: (args) => getFilterLogs(client, args),
		getGasPrice: () => getGasPrice(client),
		getLogs: (args) => getLogs(client, args),
		getProof: (args) => getProof(client, args),
		estimateMaxPriorityFeePerGas: (args) => estimateMaxPriorityFeePerGas(client, args),
		fillTransaction: (args) => fillTransaction(client, args),
		getStorageAt: (args) => getStorageAt(client, args),
		getTransaction: (args) => getTransaction(client, args),
		getTransactionConfirmations: (args) => getTransactionConfirmations(client, args),
		getTransactionCount: (args) => getTransactionCount(client, args),
		getTransactionReceipt: (args) => getTransactionReceipt(client, args),
		multicall: (args) => multicall(client, args),
		prepareTransactionRequest: (args) => prepareTransactionRequest(client, args),
		readContract: (args) => readContract(client, args),
		sendRawTransaction: (args) => sendRawTransaction(client, args),
		sendRawTransactionSync: (args) => sendRawTransactionSync(client, args),
		simulate: (args) => simulateBlocks(client, args),
		simulateBlocks: (args) => simulateBlocks(client, args),
		simulateCalls: (args) => simulateCalls(client, args),
		simulateContract: (args) => simulateContract(client, args),
		verifyHash: (args) => verifyHash(client, args),
		verifyMessage: (args) => verifyMessage(client, args),
		verifySiweMessage: (args) => verifySiweMessage(client, args),
		verifyTypedData: (args) => verifyTypedData(client, args),
		uninstallFilter: (args) => uninstallFilter(client, args),
		waitForTransactionReceipt: (args) => waitForTransactionReceipt(client, args),
		watchBlocks: (args) => watchBlocks(client, args),
		watchBlockNumber: (args) => watchBlockNumber(client, args),
		watchContractEvent: (args) => watchContractEvent(client, args),
		watchEvent: (args) => watchEvent(client, args),
		watchPendingTransactions: (args) => watchPendingTransactions(client, args)
	};
}
function createPublicClient(parameters) {
	const { key = "public", name = "Public Client" } = parameters;
	return createClient({
		...parameters,
		key,
		name,
		type: "publicClient"
	}).extend(publicActions);
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
export { getContractError as $, withCache as A, blobsToProofs as B, EnsAvatarUnsupportedNamespaceError as C, createClient as D, namehash as E, toBlobSidecars as F, BlockNotFoundError as G, formatBlock as H, toBlobs as I, MaxFeePerGasTooLowError as J, BaseFeeScalarError as K, commitmentsToVersionedHashes as L, parseEventLogs as M, decodeEventLog as N, formatTransactionReceipt as O, getTransactionType as P, recoverPublicKey as Q, commitmentToVersionedHash as R, EnsAvatarInvalidNftUriError as S, labelhash as T, formatTransaction as U, blobsToCommitments as V, transactionType as W, toRlp as X, EstimateGasExecutionError as Y, recoverAddress as Z, hashMessage as _, publicActions as a, withTimeout as b, zeroAddress as c, hashTypedData as d, encodeEventTopics as et, getTypesForEIP712Domain as f, InvalidStructTypeError as g, InvalidPrimaryTypeError as h, createPublicClient as i, formatLog as j, withRetry as k, hashDomain as l, InvalidDomainError as m, UrlRequiredError as n, parseAbiParameters as nt, serializeSignature as o, validateTypedData as p, Eip1559FeesNotSupportedError as q, createTransport as r, parseAbiItem as rt, ethAddress as s, http as t, FilterTypeNotSupportedError as tt, hashStruct as u, toPrefixedMessage as v, EnsAvatarUriResolutionError as w, defineChain as x, presignMessagePrefix as y, sha256 as z };
