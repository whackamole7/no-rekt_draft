import { cn as __commonJSMin } from "./index-CG4FYDEk.js";
var require_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P ? value : new P(function(resolve) {
				resolve(value);
			});
		}
		return new (P || (P = Promise))(function(resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator["throw"](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.insertParams = insertParams;
	exports.stringifyQuery = stringifyQuery;
	exports.fetchData = fetchData;
	exports.getData = getData;
	var isErrorResponse = (data) => {
		return typeof data === "object" && data !== null && ("code" in data || "statusCode" in data) && "message" in data;
	};
	function replaceParam(str, key, value) {
		return str.replace(new RegExp(`\\{${key}\\}`, "g"), value);
	}
	function insertParams(template, params) {
		return params ? Object.keys(params).reduce((result, key) => {
			return replaceParam(result, key, String(params[key]));
		}, template) : template;
	}
	function stringifyQuery(query) {
		if (!query) return "";
		const searchParams = new URLSearchParams();
		Object.keys(query).forEach((key) => {
			if (query[key] != null) searchParams.append(key, String(query[key]));
		});
		const searchString = searchParams.toString();
		return searchString ? `?${searchString}` : "";
	}
	function parseResponse(resp) {
		return __awaiter(this, void 0, void 0, function* () {
			var _a;
			let json;
			try {
				json = yield resp.json();
			} catch (_b) {
				json = {};
			}
			if (!resp.ok) {
				const errTxt = isErrorResponse(json) ? `CGW error - ${(_a = json.code) !== null && _a !== void 0 ? _a : json.statusCode}: ${json.message}` : `CGW error - status ${resp.statusText}`;
				throw new Error(errTxt);
			}
			return json;
		});
	}
	function fetchData(url, method, body, headers, credentials) {
		return __awaiter(this, void 0, void 0, function* () {
			const requestHeaders = Object.assign({ "Content-Type": "application/json" }, headers);
			const options = {
				method: method !== null && method !== void 0 ? method : "POST",
				headers: requestHeaders
			};
			if (credentials) options["credentials"] = credentials;
			if (body != null) options.body = typeof body === "string" ? body : JSON.stringify(body);
			return parseResponse(yield fetch(url, options));
		});
	}
	function getData(url, headers, credentials) {
		return __awaiter(this, void 0, void 0, function* () {
			const options = { method: "GET" };
			if (headers) options["headers"] = Object.assign(Object.assign({}, headers), { "Content-Type": "application/json" });
			if (credentials) options["credentials"] = credentials;
			return parseResponse(yield fetch(url, options));
		});
	}
}));
var require_endpoint = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.postEndpoint = postEndpoint;
	exports.putEndpoint = putEndpoint;
	exports.deleteEndpoint = deleteEndpoint;
	exports.getEndpoint = getEndpoint;
	var utils_1 = require_utils();
	function makeUrl(baseUrl$1, path, pathParams, query) {
		return `${baseUrl$1}${(0, utils_1.insertParams)(path, pathParams)}${(0, utils_1.stringifyQuery)(query)}`;
	}
	function postEndpoint(baseUrl$1, path, params) {
		const url = makeUrl(baseUrl$1, path, params === null || params === void 0 ? void 0 : params.path, params === null || params === void 0 ? void 0 : params.query);
		return (0, utils_1.fetchData)(url, "POST", params === null || params === void 0 ? void 0 : params.body, params === null || params === void 0 ? void 0 : params.headers, params === null || params === void 0 ? void 0 : params.credentials);
	}
	function putEndpoint(baseUrl$1, path, params) {
		const url = makeUrl(baseUrl$1, path, params === null || params === void 0 ? void 0 : params.path, params === null || params === void 0 ? void 0 : params.query);
		return (0, utils_1.fetchData)(url, "PUT", params === null || params === void 0 ? void 0 : params.body, params === null || params === void 0 ? void 0 : params.headers, params === null || params === void 0 ? void 0 : params.credentials);
	}
	function deleteEndpoint(baseUrl$1, path, params) {
		const url = makeUrl(baseUrl$1, path, params === null || params === void 0 ? void 0 : params.path, params === null || params === void 0 ? void 0 : params.query);
		return (0, utils_1.fetchData)(url, "DELETE", params === null || params === void 0 ? void 0 : params.body, params === null || params === void 0 ? void 0 : params.headers, params === null || params === void 0 ? void 0 : params.credentials);
	}
	function getEndpoint(baseUrl$1, path, params, rawUrl) {
		if (rawUrl) return (0, utils_1.getData)(rawUrl, void 0, params === null || params === void 0 ? void 0 : params.credentials);
		const url = makeUrl(baseUrl$1, path, params === null || params === void 0 ? void 0 : params.path, params === null || params === void 0 ? void 0 : params.query);
		return (0, utils_1.getData)(url, params === null || params === void 0 ? void 0 : params.headers, params === null || params === void 0 ? void 0 : params.credentials);
	}
}));
var require_config = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DEFAULT_BASE_URL = void 0;
	exports.DEFAULT_BASE_URL = "https://safe-client.safe.global";
}));
var require_safe_info = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ImplementationVersionState = void 0;
	var ImplementationVersionState;
	(function(ImplementationVersionState$1) {
		ImplementationVersionState$1["UP_TO_DATE"] = "UP_TO_DATE";
		ImplementationVersionState$1["OUTDATED"] = "OUTDATED";
		ImplementationVersionState$1["UNKNOWN"] = "UNKNOWN";
	})(ImplementationVersionState || (exports.ImplementationVersionState = ImplementationVersionState = {}));
}));
var require_safe_apps = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SafeAppSocialPlatforms = exports.SafeAppFeatures = exports.SafeAppAccessPolicyTypes = void 0;
	var SafeAppAccessPolicyTypes;
	(function(SafeAppAccessPolicyTypes$1) {
		SafeAppAccessPolicyTypes$1["NoRestrictions"] = "NO_RESTRICTIONS";
		SafeAppAccessPolicyTypes$1["DomainAllowlist"] = "DOMAIN_ALLOWLIST";
	})(SafeAppAccessPolicyTypes || (exports.SafeAppAccessPolicyTypes = SafeAppAccessPolicyTypes = {}));
	var SafeAppFeatures;
	(function(SafeAppFeatures$1) {
		SafeAppFeatures$1["BATCHED_TRANSACTIONS"] = "BATCHED_TRANSACTIONS";
	})(SafeAppFeatures || (exports.SafeAppFeatures = SafeAppFeatures = {}));
	var SafeAppSocialPlatforms;
	(function(SafeAppSocialPlatforms$1) {
		SafeAppSocialPlatforms$1["TWITTER"] = "TWITTER";
		SafeAppSocialPlatforms$1["GITHUB"] = "GITHUB";
		SafeAppSocialPlatforms$1["DISCORD"] = "DISCORD";
		SafeAppSocialPlatforms$1["TELEGRAM"] = "TELEGRAM";
	})(SafeAppSocialPlatforms || (exports.SafeAppSocialPlatforms = SafeAppSocialPlatforms = {}));
}));
var require_transactions = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LabelValue = exports.StartTimeValue = exports.DurationType = exports.DetailedExecutionInfoType = exports.TransactionListItemType = exports.ConflictType = exports.TransactionInfoType = exports.SettingsInfoType = exports.TransactionTokenType = exports.TransferDirection = exports.TransactionStatus = exports.Operation = void 0;
	var Operation;
	(function(Operation$1) {
		Operation$1[Operation$1["CALL"] = 0] = "CALL";
		Operation$1[Operation$1["DELEGATE"] = 1] = "DELEGATE";
	})(Operation || (exports.Operation = Operation = {}));
	var TransactionStatus;
	(function(TransactionStatus$1) {
		TransactionStatus$1["AWAITING_CONFIRMATIONS"] = "AWAITING_CONFIRMATIONS";
		TransactionStatus$1["AWAITING_EXECUTION"] = "AWAITING_EXECUTION";
		TransactionStatus$1["CANCELLED"] = "CANCELLED";
		TransactionStatus$1["FAILED"] = "FAILED";
		TransactionStatus$1["SUCCESS"] = "SUCCESS";
	})(TransactionStatus || (exports.TransactionStatus = TransactionStatus = {}));
	var TransferDirection;
	(function(TransferDirection$1) {
		TransferDirection$1["INCOMING"] = "INCOMING";
		TransferDirection$1["OUTGOING"] = "OUTGOING";
		TransferDirection$1["UNKNOWN"] = "UNKNOWN";
	})(TransferDirection || (exports.TransferDirection = TransferDirection = {}));
	var TransactionTokenType;
	(function(TransactionTokenType$1) {
		TransactionTokenType$1["ERC20"] = "ERC20";
		TransactionTokenType$1["ERC721"] = "ERC721";
		TransactionTokenType$1["NATIVE_COIN"] = "NATIVE_COIN";
	})(TransactionTokenType || (exports.TransactionTokenType = TransactionTokenType = {}));
	var SettingsInfoType;
	(function(SettingsInfoType$1) {
		SettingsInfoType$1["SET_FALLBACK_HANDLER"] = "SET_FALLBACK_HANDLER";
		SettingsInfoType$1["ADD_OWNER"] = "ADD_OWNER";
		SettingsInfoType$1["REMOVE_OWNER"] = "REMOVE_OWNER";
		SettingsInfoType$1["SWAP_OWNER"] = "SWAP_OWNER";
		SettingsInfoType$1["CHANGE_THRESHOLD"] = "CHANGE_THRESHOLD";
		SettingsInfoType$1["CHANGE_IMPLEMENTATION"] = "CHANGE_IMPLEMENTATION";
		SettingsInfoType$1["ENABLE_MODULE"] = "ENABLE_MODULE";
		SettingsInfoType$1["DISABLE_MODULE"] = "DISABLE_MODULE";
		SettingsInfoType$1["SET_GUARD"] = "SET_GUARD";
		SettingsInfoType$1["DELETE_GUARD"] = "DELETE_GUARD";
	})(SettingsInfoType || (exports.SettingsInfoType = SettingsInfoType = {}));
	var TransactionInfoType;
	(function(TransactionInfoType$1) {
		TransactionInfoType$1["TRANSFER"] = "Transfer";
		TransactionInfoType$1["SETTINGS_CHANGE"] = "SettingsChange";
		TransactionInfoType$1["CUSTOM"] = "Custom";
		TransactionInfoType$1["CREATION"] = "Creation";
		TransactionInfoType$1["SWAP_ORDER"] = "SwapOrder";
		TransactionInfoType$1["TWAP_ORDER"] = "TwapOrder";
		TransactionInfoType$1["SWAP_TRANSFER"] = "SwapTransfer";
		TransactionInfoType$1["NATIVE_STAKING_DEPOSIT"] = "NativeStakingDeposit";
		TransactionInfoType$1["NATIVE_STAKING_VALIDATORS_EXIT"] = "NativeStakingValidatorsExit";
		TransactionInfoType$1["NATIVE_STAKING_WITHDRAW"] = "NativeStakingWithdraw";
	})(TransactionInfoType || (exports.TransactionInfoType = TransactionInfoType = {}));
	var ConflictType;
	(function(ConflictType$1) {
		ConflictType$1["NONE"] = "None";
		ConflictType$1["HAS_NEXT"] = "HasNext";
		ConflictType$1["END"] = "End";
	})(ConflictType || (exports.ConflictType = ConflictType = {}));
	var TransactionListItemType;
	(function(TransactionListItemType$1) {
		TransactionListItemType$1["TRANSACTION"] = "TRANSACTION";
		TransactionListItemType$1["LABEL"] = "LABEL";
		TransactionListItemType$1["CONFLICT_HEADER"] = "CONFLICT_HEADER";
		TransactionListItemType$1["DATE_LABEL"] = "DATE_LABEL";
	})(TransactionListItemType || (exports.TransactionListItemType = TransactionListItemType = {}));
	var DetailedExecutionInfoType;
	(function(DetailedExecutionInfoType$1) {
		DetailedExecutionInfoType$1["MULTISIG"] = "MULTISIG";
		DetailedExecutionInfoType$1["MODULE"] = "MODULE";
	})(DetailedExecutionInfoType || (exports.DetailedExecutionInfoType = DetailedExecutionInfoType = {}));
	var DurationType;
	(function(DurationType$1) {
		DurationType$1["AUTO"] = "AUTO";
		DurationType$1["LIMIT_DURATION"] = "LIMIT_DURATION";
	})(DurationType || (exports.DurationType = DurationType = {}));
	var StartTimeValue;
	(function(StartTimeValue$1) {
		StartTimeValue$1["AT_MINING_TIME"] = "AT_MINING_TIME";
		StartTimeValue$1["AT_EPOCH"] = "AT_EPOCH";
	})(StartTimeValue || (exports.StartTimeValue = StartTimeValue = {}));
	var LabelValue;
	(function(LabelValue$1) {
		LabelValue$1["Queued"] = "Queued";
		LabelValue$1["Next"] = "Next";
	})(LabelValue || (exports.LabelValue = LabelValue = {}));
}));
var require_chains = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.FEATURES = exports.GAS_PRICE_TYPE = exports.RPC_AUTHENTICATION = void 0;
	var RPC_AUTHENTICATION;
	(function(RPC_AUTHENTICATION$1) {
		RPC_AUTHENTICATION$1["API_KEY_PATH"] = "API_KEY_PATH";
		RPC_AUTHENTICATION$1["NO_AUTHENTICATION"] = "NO_AUTHENTICATION";
		RPC_AUTHENTICATION$1["UNKNOWN"] = "UNKNOWN";
	})(RPC_AUTHENTICATION || (exports.RPC_AUTHENTICATION = RPC_AUTHENTICATION = {}));
	var GAS_PRICE_TYPE;
	(function(GAS_PRICE_TYPE$1) {
		GAS_PRICE_TYPE$1["ORACLE"] = "ORACLE";
		GAS_PRICE_TYPE$1["FIXED"] = "FIXED";
		GAS_PRICE_TYPE$1["FIXED_1559"] = "FIXED1559";
		GAS_PRICE_TYPE$1["UNKNOWN"] = "UNKNOWN";
	})(GAS_PRICE_TYPE || (exports.GAS_PRICE_TYPE = GAS_PRICE_TYPE = {}));
	var FEATURES;
	(function(FEATURES$1) {
		FEATURES$1["ERC721"] = "ERC721";
		FEATURES$1["SAFE_APPS"] = "SAFE_APPS";
		FEATURES$1["CONTRACT_INTERACTION"] = "CONTRACT_INTERACTION";
		FEATURES$1["DOMAIN_LOOKUP"] = "DOMAIN_LOOKUP";
		FEATURES$1["SPENDING_LIMIT"] = "SPENDING_LIMIT";
		FEATURES$1["EIP1559"] = "EIP1559";
		FEATURES$1["SAFE_TX_GAS_OPTIONAL"] = "SAFE_TX_GAS_OPTIONAL";
		FEATURES$1["TX_SIMULATION"] = "TX_SIMULATION";
		FEATURES$1["EIP1271"] = "EIP1271";
	})(FEATURES || (exports.FEATURES = FEATURES = {}));
}));
var require_common = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TokenType = void 0;
	var TokenType;
	(function(TokenType$1) {
		TokenType$1["ERC20"] = "ERC20";
		TokenType$1["ERC721"] = "ERC721";
		TokenType$1["NATIVE_TOKEN"] = "NATIVE_TOKEN";
		TokenType$1["UNKNOWN"] = "UNKNOWN";
	})(TokenType || (exports.TokenType = TokenType = {}));
}));
var require_master_copies = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
}));
var require_decoded_data = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NativeStakingStatus = exports.ConfirmationViewTypes = void 0;
	var ConfirmationViewTypes;
	(function(ConfirmationViewTypes$1) {
		ConfirmationViewTypes$1["GENERIC"] = "GENERIC";
		ConfirmationViewTypes$1["COW_SWAP_ORDER"] = "COW_SWAP_ORDER";
		ConfirmationViewTypes$1["COW_SWAP_TWAP_ORDER"] = "COW_SWAP_TWAP_ORDER";
		ConfirmationViewTypes$1["KILN_NATIVE_STAKING_DEPOSIT"] = "KILN_NATIVE_STAKING_DEPOSIT";
		ConfirmationViewTypes$1["KILN_NATIVE_STAKING_VALIDATORS_EXIT"] = "KILN_NATIVE_STAKING_VALIDATORS_EXIT";
		ConfirmationViewTypes$1["KILN_NATIVE_STAKING_WITHDRAW"] = "KILN_NATIVE_STAKING_WITHDRAW";
	})(ConfirmationViewTypes || (exports.ConfirmationViewTypes = ConfirmationViewTypes = {}));
	var NativeStakingStatus;
	(function(NativeStakingStatus$1) {
		NativeStakingStatus$1["NOT_STAKED"] = "NOT_STAKED";
		NativeStakingStatus$1["ACTIVATING"] = "ACTIVATING";
		NativeStakingStatus$1["DEPOSIT_IN_PROGRESS"] = "DEPOSIT_IN_PROGRESS";
		NativeStakingStatus$1["ACTIVE"] = "ACTIVE";
		NativeStakingStatus$1["EXIT_REQUESTED"] = "EXIT_REQUESTED";
		NativeStakingStatus$1["EXITING"] = "EXITING";
		NativeStakingStatus$1["EXITED"] = "EXITED";
		NativeStakingStatus$1["SLASHED"] = "SLASHED";
	})(NativeStakingStatus || (exports.NativeStakingStatus = NativeStakingStatus = {}));
}));
var require_safe_messages = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SafeMessageStatus = exports.SafeMessageListItemType = void 0;
	var SafeMessageListItemType;
	(function(SafeMessageListItemType$1) {
		SafeMessageListItemType$1["DATE_LABEL"] = "DATE_LABEL";
		SafeMessageListItemType$1["MESSAGE"] = "MESSAGE";
	})(SafeMessageListItemType || (exports.SafeMessageListItemType = SafeMessageListItemType = {}));
	var SafeMessageStatus;
	(function(SafeMessageStatus$1) {
		SafeMessageStatus$1["NEEDS_CONFIRMATION"] = "NEEDS_CONFIRMATION";
		SafeMessageStatus$1["CONFIRMED"] = "CONFIRMED";
	})(SafeMessageStatus || (exports.SafeMessageStatus = SafeMessageStatus = {}));
}));
var require_notifications = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DeviceType = void 0;
	var DeviceType;
	(function(DeviceType$1) {
		DeviceType$1["ANDROID"] = "ANDROID";
		DeviceType$1["IOS"] = "IOS";
		DeviceType$1["WEB"] = "WEB";
	})(DeviceType || (exports.DeviceType = DeviceType = {}));
}));
var require_relay = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
}));
var require_dist = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __exportStar = exports && exports.__exportStar || function(m, exports$1) {
		for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports$1, p)) __createBinding(exports$1, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.setBaseUrl = void 0;
	exports.relayTransaction = relayTransaction;
	exports.getRelayCount = getRelayCount;
	exports.getSafeInfo = getSafeInfo;
	exports.getIncomingTransfers = getIncomingTransfers;
	exports.getModuleTransactions = getModuleTransactions;
	exports.getMultisigTransactions = getMultisigTransactions;
	exports.getBalances = getBalances;
	exports.getFiatCurrencies = getFiatCurrencies;
	exports.getOwnedSafes = getOwnedSafes;
	exports.getAllOwnedSafes = getAllOwnedSafes;
	exports.getCollectibles = getCollectibles;
	exports.getCollectiblesPage = getCollectiblesPage;
	exports.getTransactionHistory = getTransactionHistory;
	exports.getTransactionQueue = getTransactionQueue;
	exports.getTransactionDetails = getTransactionDetails;
	exports.deleteTransaction = deleteTransaction;
	exports.postSafeGasEstimation = postSafeGasEstimation;
	exports.getNonces = getNonces;
	exports.proposeTransaction = proposeTransaction;
	exports.getConfirmationView = getConfirmationView;
	exports.getTxPreview = getTxPreview;
	exports.getChainsConfig = getChainsConfig;
	exports.getChainConfig = getChainConfig;
	exports.getSafeApps = getSafeApps;
	exports.getMasterCopies = getMasterCopies;
	exports.getDecodedData = getDecodedData;
	exports.getSafeMessages = getSafeMessages;
	exports.getSafeMessage = getSafeMessage;
	exports.proposeSafeMessage = proposeSafeMessage;
	exports.confirmSafeMessage = confirmSafeMessage;
	exports.getDelegates = getDelegates;
	exports.registerDevice = registerDevice;
	exports.unregisterSafe = unregisterSafe;
	exports.unregisterDevice = unregisterDevice;
	exports.registerEmail = registerEmail;
	exports.changeEmail = changeEmail;
	exports.resendEmailVerificationCode = resendEmailVerificationCode;
	exports.verifyEmail = verifyEmail;
	exports.getRegisteredEmail = getRegisteredEmail;
	exports.deleteRegisteredEmail = deleteRegisteredEmail;
	exports.registerRecoveryModule = registerRecoveryModule;
	exports.unsubscribeSingle = unsubscribeSingle;
	exports.unsubscribeAll = unsubscribeAll;
	exports.getSafeOverviews = getSafeOverviews;
	exports.getContract = getContract;
	exports.getAuthNonce = getAuthNonce;
	exports.verifyAuth = verifyAuth;
	exports.createAccount = createAccount;
	exports.getAccount = getAccount;
	exports.deleteAccount = deleteAccount;
	exports.getAccountDataTypes = getAccountDataTypes;
	exports.getAccountDataSettings = getAccountDataSettings;
	exports.putAccountDataSettings = putAccountDataSettings;
	exports.getIndexingStatus = getIndexingStatus;
	var endpoint_1 = require_endpoint();
	var config_1 = require_config();
	__exportStar(require_safe_info(), exports);
	__exportStar(require_safe_apps(), exports);
	__exportStar(require_transactions(), exports);
	__exportStar(require_chains(), exports);
	__exportStar(require_common(), exports);
	__exportStar(require_master_copies(), exports);
	__exportStar(require_decoded_data(), exports);
	__exportStar(require_safe_messages(), exports);
	__exportStar(require_notifications(), exports);
	__exportStar(require_relay(), exports);
	var baseUrl = config_1.DEFAULT_BASE_URL;
	var setBaseUrl = (url) => {
		baseUrl = url;
	};
	exports.setBaseUrl = setBaseUrl;
	function relayTransaction(chainId, body) {
		return (0, endpoint_1.postEndpoint)(baseUrl, "/v1/chains/{chainId}/relay", {
			path: { chainId },
			body
		});
	}
	function getRelayCount(chainId, address) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/chains/{chainId}/relay/{address}", { path: {
			chainId,
			address
		} });
	}
	function getSafeInfo(chainId, address) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/chains/{chainId}/safes/{address}", { path: {
			chainId,
			address
		} });
	}
	function getIncomingTransfers(chainId, address, query, pageUrl) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/chains/{chainId}/safes/{address}/incoming-transfers/", {
			path: {
				chainId,
				address
			},
			query
		}, pageUrl);
	}
	function getModuleTransactions(chainId, address, query, pageUrl) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/chains/{chainId}/safes/{address}/module-transactions/", {
			path: {
				chainId,
				address
			},
			query
		}, pageUrl);
	}
	function getMultisigTransactions(chainId, address, query, pageUrl) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/chains/{chainId}/safes/{address}/multisig-transactions/", {
			path: {
				chainId,
				address
			},
			query
		}, pageUrl);
	}
	function getBalances(chainId, address, currency = "usd", query = {}) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/chains/{chainId}/safes/{address}/balances/{currency}", {
			path: {
				chainId,
				address,
				currency
			},
			query
		});
	}
	function getFiatCurrencies() {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/balances/supported-fiat-codes");
	}
	function getOwnedSafes(chainId, address) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/chains/{chainId}/owners/{address}/safes", { path: {
			chainId,
			address
		} });
	}
	function getAllOwnedSafes(address) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/owners/{address}/safes", { path: { address } });
	}
	function getCollectibles(chainId, address, query = {}) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/chains/{chainId}/safes/{address}/collectibles", {
			path: {
				chainId,
				address
			},
			query
		});
	}
	function getCollectiblesPage(chainId, address, query = {}, pageUrl) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v2/chains/{chainId}/safes/{address}/collectibles", {
			path: {
				chainId,
				address
			},
			query
		}, pageUrl);
	}
	function getTransactionHistory(chainId, address, query = {}, pageUrl) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/chains/{chainId}/safes/{safe_address}/transactions/history", {
			path: {
				chainId,
				safe_address: address
			},
			query
		}, pageUrl);
	}
	function getTransactionQueue(chainId, address, query = {}, pageUrl) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/chains/{chainId}/safes/{safe_address}/transactions/queued", {
			path: {
				chainId,
				safe_address: address
			},
			query
		}, pageUrl);
	}
	function getTransactionDetails(chainId, transactionId) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/chains/{chainId}/transactions/{transactionId}", { path: {
			chainId,
			transactionId
		} });
	}
	function deleteTransaction(chainId, safeTxHash, signature) {
		return (0, endpoint_1.deleteEndpoint)(baseUrl, "/v1/chains/{chainId}/transactions/{safeTxHash}", {
			path: {
				chainId,
				safeTxHash
			},
			body: { signature }
		});
	}
	function postSafeGasEstimation(chainId, address, body) {
		return (0, endpoint_1.postEndpoint)(baseUrl, "/v2/chains/{chainId}/safes/{safe_address}/multisig-transactions/estimations", {
			path: {
				chainId,
				safe_address: address
			},
			body
		});
	}
	function getNonces(chainId, address) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/chains/{chainId}/safes/{safe_address}/nonces", { path: {
			chainId,
			safe_address: address
		} });
	}
	function proposeTransaction(chainId, address, body) {
		return (0, endpoint_1.postEndpoint)(baseUrl, "/v1/chains/{chainId}/transactions/{safe_address}/propose", {
			path: {
				chainId,
				safe_address: address
			},
			body
		});
	}
	function getConfirmationView(chainId, safeAddress, operation, data, to, value) {
		return (0, endpoint_1.postEndpoint)(baseUrl, "/v1/chains/{chainId}/safes/{safe_address}/views/transaction-confirmation", {
			path: {
				chainId,
				safe_address: safeAddress
			},
			body: {
				operation,
				data,
				to,
				value
			}
		});
	}
	function getTxPreview(chainId, safeAddress, operation, data, to, value) {
		return (0, endpoint_1.postEndpoint)(baseUrl, "/v1/chains/{chainId}/transactions/{safe_address}/preview", {
			path: {
				chainId,
				safe_address: safeAddress
			},
			body: {
				operation,
				data,
				to,
				value
			}
		});
	}
	function getChainsConfig(query) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/chains", { query });
	}
	function getChainConfig(chainId) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/chains/{chainId}", { path: { chainId } });
	}
	function getSafeApps(chainId, query = {}) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/chains/{chainId}/safe-apps", {
			path: { chainId },
			query
		});
	}
	function getMasterCopies(chainId) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/chains/{chainId}/about/master-copies", { path: { chainId } });
	}
	function getDecodedData(chainId, operation, encodedData, to) {
		return (0, endpoint_1.postEndpoint)(baseUrl, "/v1/chains/{chainId}/data-decoder", {
			path: { chainId },
			body: {
				operation,
				data: encodedData,
				to
			}
		});
	}
	function getSafeMessages(chainId, address, pageUrl) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/chains/{chainId}/safes/{safe_address}/messages", {
			path: {
				chainId,
				safe_address: address
			},
			query: {}
		}, pageUrl);
	}
	function getSafeMessage(chainId, messageHash) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/chains/{chainId}/messages/{message_hash}", { path: {
			chainId,
			message_hash: messageHash
		} });
	}
	function proposeSafeMessage(chainId, address, body) {
		return (0, endpoint_1.postEndpoint)(baseUrl, "/v1/chains/{chainId}/safes/{safe_address}/messages", {
			path: {
				chainId,
				safe_address: address
			},
			body
		});
	}
	function confirmSafeMessage(chainId, messageHash, body) {
		return (0, endpoint_1.postEndpoint)(baseUrl, "/v1/chains/{chainId}/messages/{message_hash}/signatures", {
			path: {
				chainId,
				message_hash: messageHash
			},
			body
		});
	}
	function getDelegates(chainId, query = {}) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v2/chains/{chainId}/delegates", {
			path: { chainId },
			query
		});
	}
	function registerDevice(body) {
		return (0, endpoint_1.postEndpoint)(baseUrl, "/v1/register/notifications", { body });
	}
	function unregisterSafe(chainId, address, uuid) {
		return (0, endpoint_1.deleteEndpoint)(baseUrl, "/v1/chains/{chainId}/notifications/devices/{uuid}/safes/{safe_address}", { path: {
			chainId,
			safe_address: address,
			uuid
		} });
	}
	function unregisterDevice(chainId, uuid) {
		return (0, endpoint_1.deleteEndpoint)(baseUrl, "/v1/chains/{chainId}/notifications/devices/{uuid}", { path: {
			chainId,
			uuid
		} });
	}
	function registerEmail(chainId, safeAddress, body, headers) {
		return (0, endpoint_1.postEndpoint)(baseUrl, "/v1/chains/{chainId}/safes/{safe_address}/emails", {
			path: {
				chainId,
				safe_address: safeAddress
			},
			body,
			headers
		});
	}
	function changeEmail(chainId, safeAddress, signerAddress, body, headers) {
		return (0, endpoint_1.putEndpoint)(baseUrl, "/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}", {
			path: {
				chainId,
				safe_address: safeAddress,
				signer: signerAddress
			},
			body,
			headers
		});
	}
	function resendEmailVerificationCode(chainId, safeAddress, signerAddress) {
		return (0, endpoint_1.postEndpoint)(baseUrl, "/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}/verify-resend", {
			path: {
				chainId,
				safe_address: safeAddress,
				signer: signerAddress
			},
			body: ""
		});
	}
	function verifyEmail(chainId, safeAddress, signerAddress, body) {
		return (0, endpoint_1.putEndpoint)(baseUrl, "/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}/verify", {
			path: {
				chainId,
				safe_address: safeAddress,
				signer: signerAddress
			},
			body
		});
	}
	function getRegisteredEmail(chainId, safeAddress, signerAddress, headers) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}", {
			path: {
				chainId,
				safe_address: safeAddress,
				signer: signerAddress
			},
			headers
		});
	}
	function deleteRegisteredEmail(chainId, safeAddress, signerAddress, headers) {
		return (0, endpoint_1.deleteEndpoint)(baseUrl, "/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}", {
			path: {
				chainId,
				safe_address: safeAddress,
				signer: signerAddress
			},
			headers
		});
	}
	function registerRecoveryModule(chainId, safeAddress, body) {
		return (0, endpoint_1.postEndpoint)(baseUrl, "/v1/chains/{chainId}/safes/{safe_address}/recovery", {
			path: {
				chainId,
				safe_address: safeAddress
			},
			body
		});
	}
	function unsubscribeSingle(query) {
		return (0, endpoint_1.deleteEndpoint)(baseUrl, "/v1/subscriptions", { query });
	}
	function unsubscribeAll(query) {
		return (0, endpoint_1.deleteEndpoint)(baseUrl, "/v1/subscriptions/all", { query });
	}
	function getSafeOverviews(safes, query) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/safes", { query: Object.assign(Object.assign({}, query), { safes: safes.join(",") }) });
	}
	function getContract(chainId, contractAddress) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/chains/{chainId}/contracts/{contractAddress}", { path: {
			chainId,
			contractAddress
		} });
	}
	function getAuthNonce() {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/auth/nonce", { credentials: "include" });
	}
	function verifyAuth(body) {
		return (0, endpoint_1.postEndpoint)(baseUrl, "/v1/auth/verify", {
			body,
			credentials: "include"
		});
	}
	function createAccount(body) {
		return (0, endpoint_1.postEndpoint)(baseUrl, "/v1/accounts", {
			body,
			credentials: "include"
		});
	}
	function getAccount(address) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/accounts/{address}", {
			path: { address },
			credentials: "include"
		});
	}
	function deleteAccount(address) {
		return (0, endpoint_1.deleteEndpoint)(baseUrl, "/v1/accounts/{address}", {
			path: { address },
			credentials: "include"
		});
	}
	function getAccountDataTypes() {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/accounts/data-types");
	}
	function getAccountDataSettings(address) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/accounts/{address}/data-settings", {
			path: { address },
			credentials: "include"
		});
	}
	function putAccountDataSettings(address, body) {
		return (0, endpoint_1.putEndpoint)(baseUrl, "/v1/accounts/{address}/data-settings", {
			path: { address },
			body,
			credentials: "include"
		});
	}
	function getIndexingStatus(chainId) {
		return (0, endpoint_1.getEndpoint)(baseUrl, "/v1/chains/{chainId}/about/indexing", { path: { chainId } });
	}
}));
export { require_dist as t };
