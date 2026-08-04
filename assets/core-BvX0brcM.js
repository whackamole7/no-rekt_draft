const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/features-CFQUxUCS.js","assets/secp256k1-DFs3JTvx.js","assets/index-CG4FYDEk.js","assets/index-B97sVj0V.css","assets/ApiController-Bp4PxPyL.js","assets/ccip-BH0XkIyn.js","assets/_esm-Cn7Kteso.js","assets/basic-CnXGgm4k.js","assets/HelpersUtil-DuHpmydh.js","assets/wui-list-item-CGXQEX_T.js","assets/CaipNetworkUtil-CP2Gc1AB.js","assets/w3m-modal-O10vnVdg.js","assets/index.es-DO1AWufR.js","assets/AlertController-BPKaXBY6.js"])))=>i.map(i=>d[i]);
import "./_esm-Cn7Kteso.js";
import "./secp256k1-DFs3JTvx.js";
import { I as Ge, R as Ue, b as esm_default } from "./index.es-DO1AWufR.js";
import { tt as __vitePreload } from "./index-CG4FYDEk.js";
import { C as SnackController, F as ONRAMP_PROVIDERS, I as subscribeKey, J as ConstantsUtil, L as proxy, M as StorageUtil, N as ConstantsUtil$1, O as withErrorBoundary, P as MELD_PUBLIC_KEY, R as subscribe, S as BlockchainApiController, T as AssetUtil, U as UserRejectedRequestError, V as isSafe, W as ParseUtil, _ as PublicStateController, a as ProviderController, b as ConnectorUtil, c as ConnectionController, g as ModalController, h as ThemeController, j as CoreHelperUtil, k as OptionsController, l as ConnectionControllerUtil, m as ConnectorController, n as ChainController, o as AdapterController, p as getPreferredAccountType, q as NetworkUtil, r as SendController, t as ApiController, v as EventsController, x as WalletUtil, y as RouterController } from "./ApiController-Bp4PxPyL.js";
import "./ccip-BH0XkIyn.js";
import { c as setColorTheme, l as setThemeVariables, n as ConstantsUtil$2, t as HelpersUtil } from "./HelpersUtil-DuHpmydh.js";
import { n as SIWXUtil, r as N, t as AlertController } from "./AlertController-BPKaXBY6.js";
import { t as CaipNetworksUtil } from "./CaipNetworkUtil-CP2Gc1AB.js";
const USDC_CURRENCY_DEFAULT = {
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
};
const USD_CURRENCY_DEFAULT = {
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
};
var state$1 = proxy({
	providers: ONRAMP_PROVIDERS,
	selectedProvider: null,
	error: null,
	purchaseCurrency: USDC_CURRENCY_DEFAULT,
	paymentCurrency: USD_CURRENCY_DEFAULT,
	purchaseCurrencies: [USDC_CURRENCY_DEFAULT],
	paymentCurrencies: [],
	quotesLoading: false
});
const OnRampController = withErrorBoundary({
	state: state$1,
	subscribe(callback) {
		return subscribe(state$1, () => callback(state$1));
	},
	subscribeKey(key, callback) {
		return subscribeKey(state$1, key, callback);
	},
	setSelectedProvider(provider) {
		if (provider && provider.name === "meld") {
			const activeChain = ChainController.state.activeChain;
			const currency = activeChain === ConstantsUtil.CHAIN.SOLANA ? "SOL" : "USDC";
			const address = activeChain ? ChainController.state.chains.get(activeChain)?.accountState?.address ?? "" : "";
			const url = new URL(provider.url);
			url.searchParams.append("publicKey", MELD_PUBLIC_KEY);
			url.searchParams.append("destinationCurrencyCode", currency);
			url.searchParams.append("walletAddress", address);
			url.searchParams.append("externalCustomerId", OptionsController.state.projectId);
			state$1.selectedProvider = {
				...provider,
				url: url.toString()
			};
		} else state$1.selectedProvider = provider;
	},
	setOnrampProviders(providers) {
		if (Array.isArray(providers) && providers.every((item) => typeof item === "string")) {
			const validOnramp = providers;
			state$1.providers = ONRAMP_PROVIDERS.filter((provider) => validOnramp.includes(provider.name));
		} else state$1.providers = [];
	},
	setPurchaseCurrency(currency) {
		state$1.purchaseCurrency = currency;
	},
	setPaymentCurrency(currency) {
		state$1.paymentCurrency = currency;
	},
	setPurchaseAmount(amount) {
		OnRampController.state.purchaseAmount = amount;
	},
	setPaymentAmount(amount) {
		OnRampController.state.paymentAmount = amount;
	},
	async getAvailableCurrencies() {
		const options = await BlockchainApiController.getOnrampOptions();
		state$1.purchaseCurrencies = options.purchaseCurrencies;
		state$1.paymentCurrencies = options.paymentCurrencies;
		state$1.paymentCurrency = options.paymentCurrencies[0] || USD_CURRENCY_DEFAULT;
		state$1.purchaseCurrency = options.purchaseCurrencies[0] || USDC_CURRENCY_DEFAULT;
		await ApiController.fetchCurrencyImages(options.paymentCurrencies.map((currency) => currency.id));
		await ApiController.fetchTokenImages(options.purchaseCurrencies.map((currency) => currency.symbol));
	},
	async getQuote() {
		state$1.quotesLoading = true;
		try {
			const quote = await BlockchainApiController.getOnrampQuote({
				purchaseCurrency: state$1.purchaseCurrency,
				paymentCurrency: state$1.paymentCurrency,
				amount: state$1.paymentAmount?.toString() || "0",
				network: state$1.purchaseCurrency?.symbol
			});
			state$1.quotesLoading = false;
			state$1.purchaseAmount = Number(quote?.purchaseAmount.amount);
			return quote;
		} catch (error) {
			state$1.error = error.message;
			state$1.quotesLoading = false;
			return null;
		} finally {
			state$1.quotesLoading = false;
		}
	},
	resetState() {
		state$1.selectedProvider = null;
		state$1.error = null;
		state$1.purchaseCurrency = USDC_CURRENCY_DEFAULT;
		state$1.paymentCurrency = USD_CURRENCY_DEFAULT;
		state$1.purchaseCurrencies = [USDC_CURRENCY_DEFAULT];
		state$1.paymentCurrencies = [];
		state$1.paymentAmount = void 0;
		state$1.purchaseAmount = void 0;
		state$1.quotesLoading = false;
	}
});
var SLIP44_MSB = 2147483648;
const EnsUtil = { convertEVMChainIdToCoinType(chainId) {
	if (chainId >= SLIP44_MSB) throw new Error("Invalid chainId");
	return (SLIP44_MSB | chainId) >>> 0;
} };
var state = proxy({
	suggestions: [],
	loading: false
});
const EnsController = withErrorBoundary({
	state,
	subscribe(callback) {
		return subscribe(state, () => callback(state));
	},
	subscribeKey(key, callback) {
		return subscribeKey(state, key, callback);
	},
	async resolveName(name) {
		try {
			return await BlockchainApiController.lookupEnsName(name);
		} catch (e) {
			const error = e;
			throw new Error(error?.reasons?.[0]?.description || "Error resolving name");
		}
	},
	async isNameRegistered(name) {
		try {
			await BlockchainApiController.lookupEnsName(name);
			return true;
		} catch {
			return false;
		}
	},
	async getSuggestions(value) {
		try {
			state.loading = true;
			state.suggestions = [];
			state.suggestions = (await BlockchainApiController.getEnsNameSuggestions(value)).suggestions || [];
			return state.suggestions;
		} catch (e) {
			const errorMessage = EnsController.parseEnsApiError(e, "Error fetching name suggestions");
			throw new Error(errorMessage);
		} finally {
			state.loading = false;
		}
	},
	async getNamesForAddress(address) {
		try {
			if (!ChainController.state.activeCaipNetwork) return [];
			const cachedEns = StorageUtil.getEnsFromCacheForAddress(address);
			if (cachedEns) return cachedEns;
			const response = await BlockchainApiController.reverseLookupEnsName({ address });
			StorageUtil.updateEnsCache({
				address,
				ens: response,
				timestamp: Date.now()
			});
			return response;
		} catch (e) {
			const errorMessage = EnsController.parseEnsApiError(e, "Error fetching names for address");
			throw new Error(errorMessage);
		}
	},
	async registerName(name) {
		const network = ChainController.state.activeCaipNetwork;
		const address = ChainController.getAccountData(network?.chainNamespace)?.address;
		const emailConnector = ConnectorController.getAuthConnector();
		if (!network) throw new Error("Network not found");
		if (!address || !emailConnector) throw new Error("Address or auth connector not found");
		state.loading = true;
		try {
			const message = JSON.stringify({
				name,
				attributes: {},
				timestamp: Math.floor(Date.now() / 1e3)
			});
			RouterController.pushTransactionStack({ onCancel() {
				RouterController.replace("RegisterAccountName");
			} });
			const signature = await ConnectionController.signMessage(message);
			state.loading = false;
			const networkId = network.id;
			if (!networkId) throw new Error("Network not found");
			const coinType = EnsUtil.convertEVMChainIdToCoinType(Number(networkId));
			await BlockchainApiController.registerEnsName({
				coinType,
				address,
				signature,
				message
			});
			ChainController.setAccountProp("profileName", name, network.chainNamespace);
			StorageUtil.updateEnsCache({
				address,
				ens: [{
					name,
					registered_at: (/* @__PURE__ */ new Date()).toISOString(),
					updated_at: void 0,
					addresses: {},
					attributes: []
				}],
				timestamp: Date.now()
			});
			RouterController.replace("RegisterAccountNameSuccess");
		} catch (e) {
			const errorMessage = EnsController.parseEnsApiError(e, `Error registering name ${name}`);
			RouterController.replace("RegisterAccountName");
			throw new Error(errorMessage);
		} finally {
			state.loading = false;
		}
	},
	validateName(name) {
		return /^[a-zA-Z0-9-]{4,}$/u.test(name);
	},
	parseEnsApiError(error, defaultError) {
		return error?.reasons?.[0]?.description || defaultError;
	}
});
function parseUrl(value) {
	try {
		return new URL(value);
	} catch {
		return null;
	}
}
function parseSchemelessHostPort(pattern) {
	const parts = pattern.split("/");
	const withoutPath = parts.length > 0 && parts[0] !== void 0 ? parts[0] : "";
	const lastColon = withoutPath.lastIndexOf(":");
	if (lastColon === -1) return { host: withoutPath };
	return {
		host: withoutPath.slice(0, lastColon),
		port: withoutPath.slice(lastColon + 1)
	};
}
function parseOriginRaw(origin) {
	const schemeIdx = origin.indexOf("://");
	if (schemeIdx === -1) return null;
	const scheme = origin.slice(0, schemeIdx);
	const start = schemeIdx + 3;
	let end = origin.indexOf("/", start);
	if (end === -1) end = origin.length;
	const hostPort = origin.slice(start, end);
	const lastColon = hostPort.lastIndexOf(":");
	if (lastColon === -1) return {
		scheme,
		host: hostPort
	};
	return {
		scheme,
		host: hostPort.slice(0, lastColon),
		port: hostPort.slice(lastColon + 1)
	};
}
function matchNonWildcardPattern(currentOrigin, pattern) {
	if (pattern.includes("://")) {
		const url = parseUrl(pattern);
		return url ? url.origin === currentOrigin : false;
	}
	const { host, port } = parseSchemelessHostPort(pattern);
	const schemeIdx = currentOrigin.indexOf("://");
	if (schemeIdx !== -1) {
		const start = schemeIdx + 3;
		let end = currentOrigin.indexOf("/", start);
		if (end === -1) end = currentOrigin.length;
		const rawHostPort = currentOrigin.slice(start, end);
		if (port !== void 0) return `${host}:${port}` === rawHostPort;
		return host === rawHostPort.split(":")[0];
	}
	const current = parseUrl(currentOrigin);
	if (!current) return false;
	if (port !== void 0) return host === current.hostname && port === (current.port || void 0);
	return host === current.hostname;
}
function matchWildcardPattern(current, currentOrigin, pattern) {
	let working = pattern;
	let scheme = void 0;
	const schemeIdx = working.indexOf("://");
	if (schemeIdx !== -1) {
		scheme = working.slice(0, schemeIdx);
		working = working.slice(schemeIdx + 3);
	}
	const slashIdx = working.indexOf("/");
	if (slashIdx !== -1) working = working.slice(0, slashIdx);
	let hostPart = working;
	let portPart = void 0;
	const lastColon = hostPart.lastIndexOf(":");
	if (lastColon !== -1) {
		portPart = hostPart.slice(lastColon + 1);
		hostPart = hostPart.slice(0, lastColon);
	}
	const patternLabels = hostPart.split(".");
	for (const label of patternLabels) if (label.includes("*") && label !== "*") return false;
	const currentScheme = current.protocol.replace(/:$/u, "");
	if (scheme && scheme !== currentScheme) return false;
	if (portPart !== void 0) {
		if (portPart !== "*" && portPart !== current.port) return false;
	}
	const raw = parseOriginRaw(currentOrigin);
	const currentLabels = (raw ? raw.host : current.hostname).split(".");
	if (patternLabels.length !== currentLabels.length) return false;
	for (let i = patternLabels.length - 1; i >= 0; i -= 1) {
		const p = patternLabels[i];
		const c = currentLabels[i];
		if (p !== "*" && p !== c) return false;
	}
	return true;
}
const DEFAULT_METHODS = {
	ton: ["ton_sendMessage", "ton_signData"],
	solana: [
		"solana_signMessage",
		"solana_signTransaction",
		"solana_requestAccounts",
		"solana_getAccounts",
		"solana_signAllTransactions",
		"solana_signAndSendTransaction"
	],
	eip155: [
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
		"wallet_getCallsStatus",
		"wallet_showCallsStatus",
		"wallet_sendCalls",
		"wallet_getCapabilities",
		"wallet_grantPermissions",
		"wallet_revokePermissions",
		"wallet_getAssets"
	],
	bip122: [
		"sendTransfer",
		"signMessage",
		"signPsbt",
		"getAccountAddresses"
	]
};
const WcHelpersUtil = {
	RPC_ERROR_CODE: {
		USER_REJECTED: 5e3,
		USER_REJECTED_METHODS: 5002
	},
	getMethodsByChainNamespace(chainNamespace) {
		return DEFAULT_METHODS[chainNamespace] || [];
	},
	createDefaultNamespace(chainNamespace) {
		return {
			methods: this.getMethodsByChainNamespace(chainNamespace),
			events: ["accountsChanged", "chainChanged"],
			chains: [],
			rpcMap: {}
		};
	},
	applyNamespaceOverrides(baseNamespaces, overrides) {
		if (!overrides) return { ...baseNamespaces };
		const result = { ...baseNamespaces };
		const namespacesToOverride = /* @__PURE__ */ new Set();
		if (overrides.methods) Object.keys(overrides.methods).forEach((ns) => namespacesToOverride.add(ns));
		if (overrides.chains) Object.keys(overrides.chains).forEach((ns) => namespacesToOverride.add(ns));
		if (overrides.events) Object.keys(overrides.events).forEach((ns) => namespacesToOverride.add(ns));
		if (overrides.rpcMap) Object.keys(overrides.rpcMap).forEach((chainId) => {
			const [ns] = chainId.split(":");
			if (ns) namespacesToOverride.add(ns);
		});
		namespacesToOverride.forEach((ns) => {
			if (!result[ns]) result[ns] = this.createDefaultNamespace(ns);
		});
		if (overrides.methods) Object.entries(overrides.methods).forEach(([ns, methods]) => {
			if (result[ns]) result[ns].methods = methods;
		});
		if (overrides.chains) Object.entries(overrides.chains).forEach(([ns, chains]) => {
			if (result[ns]) result[ns].chains = chains;
		});
		if (overrides.events) Object.entries(overrides.events).forEach(([ns, events]) => {
			if (result[ns]) result[ns].events = events;
		});
		if (overrides.rpcMap) {
			const processedNamespaces = /* @__PURE__ */ new Set();
			Object.entries(overrides.rpcMap).forEach(([chainId, rpcUrl]) => {
				const [ns, id] = chainId.split(":");
				if (!ns || !id || !result[ns]) return;
				if (!result[ns].rpcMap) result[ns].rpcMap = {};
				if (!processedNamespaces.has(ns)) {
					result[ns].rpcMap = {};
					processedNamespaces.add(ns);
				}
				result[ns].rpcMap[id] = rpcUrl;
			});
		}
		return result;
	},
	createNamespaces(caipNetworks, configOverride) {
		const defaultNamespaces = caipNetworks.reduce((acc, chain) => {
			const { id, chainNamespace, rpcUrls } = chain;
			const rpcUrl = rpcUrls.default.http[0];
			if (!acc[chainNamespace]) acc[chainNamespace] = this.createDefaultNamespace(chainNamespace);
			const caipNetworkId = `${chainNamespace}:${id}`;
			const namespace = acc[chainNamespace];
			namespace.chains.push(caipNetworkId);
			switch (caipNetworkId) {
				case "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":
					namespace.chains.push("solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ");
					break;
				case "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1":
					namespace.chains.push("solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K");
					break;
				default:
			}
			if (namespace?.rpcMap && rpcUrl) namespace.rpcMap[id] = rpcUrl;
			return acc;
		}, {});
		return this.applyNamespaceOverrides(defaultNamespaces, configOverride);
	},
	resolveReownName: async (name) => {
		const wcNameAddress = await EnsController.resolveName(name);
		return (wcNameAddress?.addresses ? Object.values(wcNameAddress.addresses) : [])[0]?.address || false;
	},
	getChainsFromNamespaces(namespaces = {}) {
		return Object.values(namespaces).flatMap((namespace) => {
			const chains = namespace.chains || [];
			const accountsChains = namespace.accounts.map((account) => {
				const [chainNamespace, chainId] = account.split(":");
				return `${chainNamespace}:${chainId}`;
			});
			return Array.from(new Set([...chains, ...accountsChains]));
		});
	},
	isSessionEventData(data) {
		return typeof data === "object" && data !== null && "id" in data && "topic" in data && "params" in data && typeof data.params === "object" && data.params !== null && "chainId" in data.params && "event" in data.params && typeof data.params.event === "object" && data.params.event !== null;
	},
	isUserRejectedRequestError(error) {
		try {
			if (typeof error === "object" && error !== null) {
				const objErr = error;
				const hasCode = typeof objErr["code"] === "number";
				const hasUserRejectedMethods = hasCode && objErr["code"] === WcHelpersUtil.RPC_ERROR_CODE.USER_REJECTED_METHODS;
				const hasUserRejected = hasCode && objErr["code"] === WcHelpersUtil.RPC_ERROR_CODE.USER_REJECTED;
				return hasUserRejectedMethods || hasUserRejected;
			}
			return false;
		} catch {
			return false;
		}
	},
	isOriginAllowed(currentOrigin, allowedPatterns, defaultAllowedOrigins) {
		const patterns = [...allowedPatterns, ...defaultAllowedOrigins];
		if (allowedPatterns.length === 0) return true;
		const current = parseUrl(currentOrigin);
		if (!current) return patterns.some((pattern) => !pattern.includes("*") && pattern === currentOrigin);
		if (current.hostname === "localhost" || current.hostname === "127.0.0.1") return true;
		for (const pattern of patterns) if (pattern.includes("*")) {
			if (matchWildcardPattern(current, currentOrigin, pattern)) return true;
		} else if (matchNonWildcardPattern(currentOrigin, pattern)) return true;
		return false;
	},
	listenWcProvider({ universalProvider, namespace, onConnect, onDisconnect, onAccountsChanged, onChainChanged, onDisplayUri }) {
		if (onConnect) universalProvider.on("connect", () => {
			onConnect(WcHelpersUtil.getWalletConnectAccounts(universalProvider, namespace));
		});
		if (onDisconnect) universalProvider.on("disconnect", () => {
			onDisconnect();
		});
		if (onAccountsChanged) universalProvider.on("accountsChanged", (accounts) => {
			try {
				const allAccounts = universalProvider.session?.namespaces?.[namespace]?.accounts || [];
				const defaultChain = universalProvider.rpcProviders?.[namespace]?.getDefaultChain();
				const parsedAccounts = accounts.map((account) => {
					const caipAccount = allAccounts.find((acc) => acc.includes(`${namespace}:${defaultChain}:${account}`));
					if (!caipAccount) return;
					const { chainId, chainNamespace } = ParseUtil.parseCaipAddress(caipAccount);
					return {
						address: account,
						chainId,
						chainNamespace
					};
				}).filter((account) => account !== void 0);
				if (parsedAccounts.length > 0) onAccountsChanged(parsedAccounts);
			} catch (error) {
				console.warn("Failed to parse accounts for namespace on accountsChanged event", namespace, accounts, error);
			}
		});
		if (onChainChanged) universalProvider.on("chainChanged", (chainId) => {
			onChainChanged(chainId);
		});
		if (onDisplayUri) universalProvider.on("display_uri", (uri) => {
			onDisplayUri(uri);
		});
	},
	getWalletConnectAccounts(universalProvider, namespace) {
		const accountsAdded = /* @__PURE__ */ new Set();
		const accounts = universalProvider?.session?.namespaces?.[namespace]?.accounts?.map((account) => ParseUtil.parseCaipAddress(account)).filter(({ address }) => {
			if (accountsAdded.has(address.toLowerCase())) return false;
			accountsAdded.add(address.toLowerCase());
			return true;
		});
		if (accounts && accounts.length > 0) return accounts;
		return [];
	}
};
var IGNORED_CONNECTOR_IDS_FOR_LISTENER = [ConstantsUtil.CONNECTOR_ID.AUTH, ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT];
var AdapterBlueprint = class {
	constructor(params) {
		this.availableConnectors = [];
		this.availableConnections = [];
		this.providerHandlers = {};
		this.eventListeners = /* @__PURE__ */ new Map();
		this.getCaipNetworks = (namespace) => ChainController.getCaipNetworks(namespace);
		this.getConnectorId = (namespace) => ConnectorController.getConnectorId(namespace);
		if (params) this.construct(params);
	}
	construct(params) {
		this.projectId = params.projectId;
		this.namespace = params.namespace;
		this.adapterType = params.adapterType;
	}
	get connectors() {
		return this.availableConnectors;
	}
	get connections() {
		return this.availableConnections;
	}
	get networks() {
		return this.getCaipNetworks(this.namespace);
	}
	onAuthConnected({ accounts, chainId }) {
		const caipNetwork = this.getCaipNetworks().filter((n) => n.chainNamespace === this.namespace).find((n) => n.id.toString() === chainId?.toString());
		if (accounts && caipNetwork) this.addConnection({
			connectorId: ConstantsUtil.CONNECTOR_ID.AUTH,
			accounts,
			caipNetwork
		});
	}
	setAuthProvider(authProvider) {
		authProvider.onConnect(this.onAuthConnected.bind(this));
		authProvider.onSocialConnected(this.onAuthConnected.bind(this));
		this.addConnector({
			id: ConstantsUtil.CONNECTOR_ID.AUTH,
			type: "AUTH",
			name: ConstantsUtil.CONNECTOR_NAMES.AUTH,
			provider: authProvider,
			imageId: void 0,
			chain: this.namespace,
			chains: []
		});
	}
	addConnector(...connectors) {
		const connectorsAdded = /* @__PURE__ */ new Set();
		this.availableConnectors = [...connectors, ...this.availableConnectors].filter((connector) => {
			if (connectorsAdded.has(connector.id)) return false;
			connectorsAdded.add(connector.id);
			return true;
		});
		this.emit("connectors", this.availableConnectors);
	}
	addConnection(...connections) {
		const connectionsAdded = /* @__PURE__ */ new Set();
		this.availableConnections = [...connections, ...this.availableConnections].filter((connection) => {
			if (connectionsAdded.has(connection.connectorId.toLowerCase())) return false;
			connectionsAdded.add(connection.connectorId.toLowerCase());
			return true;
		});
		this.emit("connections", this.availableConnections);
	}
	deleteConnection(connectorId) {
		this.availableConnections = this.availableConnections.filter((c) => c.connectorId.toLowerCase() !== connectorId.toLowerCase());
		this.emit("connections", this.availableConnections);
	}
	clearConnections(emit = false) {
		this.availableConnections = [];
		if (emit) this.emit("connections", this.availableConnections);
	}
	setStatus(status, chainNamespace) {
		ChainController.setAccountProp("status", status, chainNamespace);
	}
	on(eventName, callback) {
		if (!this.eventListeners.has(eventName)) this.eventListeners.set(eventName, /* @__PURE__ */ new Set());
		this.eventListeners.get(eventName)?.add(callback);
	}
	off(eventName, callback) {
		const listeners = this.eventListeners.get(eventName);
		if (listeners) listeners.delete(callback);
	}
	removeAllEventListeners() {
		this.eventListeners.forEach((listeners) => {
			listeners.clear();
		});
	}
	emit(eventName, data) {
		const listeners = this.eventListeners.get(eventName);
		if (listeners) listeners.forEach((callback) => callback(data));
	}
	async connectWalletConnect(_chainId) {
		try {
			return { clientId: (await this.getWalletConnectConnector().connectWalletConnect()).clientId };
		} catch (err) {
			if (WcHelpersUtil.isUserRejectedRequestError(err)) throw new UserRejectedRequestError(err);
			throw err;
		}
	}
	async switchNetwork(params) {
		const { caipNetwork } = params;
		const providerType = ProviderController.getProviderId(caipNetwork.chainNamespace);
		const provider = ProviderController.getProvider(caipNetwork.chainNamespace);
		if (!provider) throw new Error("Provider not found");
		if (providerType === "WALLET_CONNECT") {
			provider.setDefaultChain(caipNetwork.caipNetworkId);
			return;
		}
		if (providerType === "AUTH") {
			const authProvider = ConnectorController.getAuthConnector()?.provider;
			if (!authProvider) throw new Error("Auth provider not found");
			const preferredAccountType = getPreferredAccountType(caipNetwork.chainNamespace);
			await authProvider.switchNetwork({ chainId: caipNetwork.caipNetworkId });
			const user = await authProvider.getUser({
				chainId: caipNetwork.caipNetworkId,
				preferredAccountType
			});
			this.emit("switchNetwork", user);
		}
	}
	getWalletConnectConnector() {
		const connector = this.connectors.find((c) => c.id === "walletConnect");
		if (!connector) throw new Error("WalletConnectConnector not found");
		return connector;
	}
	onConnect(accounts, connectorId) {
		if (accounts.length > 0) {
			const { address, chainId } = CoreHelperUtil.getAccount(accounts[0]);
			const caipNetwork = this.getCaipNetworks().filter((n) => n.chainNamespace === this.namespace).find((n) => n.id.toString() === chainId?.toString());
			const connector = this.connectors.find((c) => c.id === connectorId);
			if (address) {
				this.emit("accountChanged", {
					address,
					chainId,
					connector
				});
				this.addConnection({
					connectorId,
					accounts: accounts.map((_account) => {
						const { address: address$1 } = CoreHelperUtil.getAccount(_account);
						return { address: address$1 };
					}),
					caipNetwork
				});
			}
		}
	}
	onAccountsChanged(accounts, connectorId, disconnectIfNoAccounts = true) {
		if (accounts.length > 0) {
			const { address } = CoreHelperUtil.getAccount(accounts[0]);
			const connection = this.getConnection({
				connectorId,
				connections: this.connections,
				connectors: this.connectors
			});
			if (address && this.getConnectorId(ConstantsUtil.CHAIN.EVM)?.toLowerCase() === connectorId.toLowerCase()) this.emit("accountChanged", {
				address,
				chainId: connection?.caipNetwork?.id,
				connector: connection?.connector
			});
			this.addConnection({
				connectorId,
				accounts: accounts.map((_account) => {
					const { address: address$1 } = CoreHelperUtil.getAccount(_account);
					return { address: address$1 };
				}),
				caipNetwork: connection?.caipNetwork
			});
		} else if (disconnectIfNoAccounts) this.onDisconnect(connectorId);
	}
	onDisconnect(connectorId) {
		this.removeProviderListeners(connectorId);
		this.deleteConnection(connectorId);
		if (this.getConnectorId(ConstantsUtil.CHAIN.EVM)?.toLowerCase() === connectorId.toLowerCase()) this.emitFirstAvailableConnection();
		if (this.connections.length === 0) this.emit("disconnect");
	}
	onChainChanged(chainId, connectorId) {
		const formattedChainId = typeof chainId === "string" && chainId.startsWith("0x") ? parseInt(chainId, 16).toString() : chainId.toString();
		const connection = this.getConnection({
			connectorId,
			connections: this.connections,
			connectors: this.connectors
		});
		const caipNetwork = this.getCaipNetworks().filter((n) => n.chainNamespace === this.namespace).find((n) => n.id.toString() === formattedChainId);
		if (connection) this.addConnection({
			connectorId,
			accounts: connection.accounts,
			caipNetwork
		});
		if (this.getConnectorId(ConstantsUtil.CHAIN.EVM)?.toLowerCase() === connectorId.toLowerCase()) this.emit("switchNetwork", { chainId: formattedChainId });
	}
	listenProviderEvents(connectorId, provider) {
		if (IGNORED_CONNECTOR_IDS_FOR_LISTENER.includes(connectorId)) return;
		const accountsChangedHandler = (accounts) => this.onAccountsChanged(accounts, connectorId);
		const chainChangedHandler = (chainId) => this.onChainChanged(chainId, connectorId);
		const disconnectHandler = () => this.onDisconnect(connectorId);
		if (!this.providerHandlers[connectorId]) {
			provider.on("disconnect", disconnectHandler);
			provider.on("accountsChanged", accountsChangedHandler);
			provider.on("chainChanged", chainChangedHandler);
			this.providerHandlers[connectorId] = {
				provider,
				disconnect: disconnectHandler,
				accountsChanged: accountsChangedHandler,
				chainChanged: chainChangedHandler
			};
		}
	}
	removeProviderListeners(connectorId) {
		if (this.providerHandlers[connectorId]) {
			const { provider, disconnect, accountsChanged, chainChanged } = this.providerHandlers[connectorId];
			provider.removeListener("disconnect", disconnect);
			provider.removeListener("accountsChanged", accountsChanged);
			provider.removeListener("chainChanged", chainChanged);
			this.providerHandlers[connectorId] = null;
		}
	}
	emitFirstAvailableConnection() {
		const connection = this.getConnection({
			connections: this.connections,
			connectors: this.connectors
		});
		if (connection) {
			const [account] = connection.accounts;
			this.emit("accountChanged", {
				address: account?.address,
				chainId: connection.caipNetwork?.id,
				connector: connection.connector
			});
		}
	}
	getConnection({ address, connectorId, connections, connectors }) {
		if (connectorId) {
			const connection = connections.find((c) => c.connectorId.toLowerCase() === connectorId.toLowerCase());
			if (!connection) return null;
			const connector = connectors.find((c) => c.id.toLowerCase() === connection.connectorId.toLowerCase());
			const account = address ? connection.accounts.find((a) => a.address.toLowerCase() === address.toLowerCase()) : connection.accounts[0];
			return {
				...connection,
				account,
				connector
			};
		}
		const validConnection = connections.find((c) => c.accounts.length > 0 && connectors.some((conn) => conn.id.toLowerCase() === c.connectorId.toLowerCase()));
		if (validConnection) {
			const [account] = validConnection.accounts;
			const connector = connectors.find((c) => c.id.toLowerCase() === validConnection.connectorId.toLowerCase());
			return {
				...validConnection,
				account,
				connector
			};
		}
		return null;
	}
};
var WalletConnectConnector = class {
	constructor({ provider, namespace }) {
		this.id = ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT;
		this.name = "WalletConnect";
		this.type = "WALLET_CONNECT";
		this.imageId = "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400";
		this.getCaipNetworks = ChainController.getCaipNetworks.bind(ChainController);
		this.caipNetworks = this.getCaipNetworks();
		this.provider = provider;
		this.chain = namespace;
	}
	get chains() {
		return this.getCaipNetworks();
	}
	async connectWalletConnect() {
		if (!await this.authenticate()) {
			const caipNetworks = this.getCaipNetworks();
			const universalProviderConfigOverride = OptionsController.state.universalProviderConfigOverride;
			const namespaces = WcHelpersUtil.createNamespaces(caipNetworks, universalProviderConfigOverride);
			await this.provider.connect({ optionalNamespaces: namespaces });
		}
		return {
			clientId: await this.provider.client.core.crypto.getClientId(),
			session: this.provider.session
		};
	}
	async disconnect() {
		await this.provider.disconnect();
	}
	async authenticate() {
		const chains = this.chains.map((network) => network.caipNetworkId);
		return SIWXUtil.universalProviderAuthenticate({
			universalProvider: this.provider,
			chains,
			methods: OPTIONAL_METHODS
		});
	}
};
var OPTIONAL_METHODS = [
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
	"wallet_getCallsStatus",
	"wallet_sendCalls",
	"wallet_getCapabilities",
	"wallet_grantPermissions",
	"wallet_revokePermissions",
	"wallet_getAssets"
];
const baseUSDC = {
	network: "eip155:8453",
	asset: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
	metadata: {
		name: "USD Coin",
		symbol: "USDC",
		decimals: 6
	}
};
const baseSepoliaUSDC = {
	network: "eip155:84532",
	asset: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
	metadata: {
		name: "USD Coin",
		symbol: "USDC",
		decimals: 6
	}
};
const ErrorUtil = {
	EmbeddedWalletAbortController: new AbortController(),
	UniversalProviderErrors: {
		UNAUTHORIZED_DOMAIN_NOT_ALLOWED: {
			message: "Unauthorized: origin not allowed",
			alertErrorKey: "ORIGIN_NOT_ALLOWED"
		},
		JWT_VALIDATION_ERROR: {
			message: "JWT validation error: JWT Token is not yet valid",
			alertErrorKey: "JWT_TOKEN_NOT_VALID"
		},
		INVALID_KEY: {
			message: "Unauthorized: invalid key",
			alertErrorKey: "INVALID_PROJECT_ID"
		}
	},
	ALERT_ERRORS: {
		SWITCH_NETWORK_NOT_FOUND: {
			code: "APKT001",
			displayMessage: "Network Not Found",
			debugMessage: "The specified network is not recognized. Please ensure it is included in the `networks` array of your `createAppKit` configuration."
		},
		ORIGIN_NOT_ALLOWED: {
			code: "APKT002",
			displayMessage: "Invalid App Configuration",
			debugMessage: () => `The origin ${isSafe() ? window.origin : "unknown"} is not in your allow list. Please update your allowed domains at https://dashboard.reown.com. [PID: ${OptionsController.state.projectId}]`
		},
		IFRAME_LOAD_FAILED: {
			code: "APKT003",
			displayMessage: "Network Error: Wallet Load Failed",
			debugMessage: () => "Failed to load the embedded wallet. This may be due to network issues or server downtime. Please check your network connection and try again shortly. Contact support if the issue persists."
		},
		IFRAME_REQUEST_TIMEOUT: {
			code: "APKT004",
			displayMessage: "Wallet Request Timeout",
			debugMessage: () => "The request to the embedded wallet timed out. Please check your network connection and try again shortly. Contact support if the issue persists."
		},
		UNVERIFIED_DOMAIN: {
			code: "APKT005",
			displayMessage: "Unverified Domain",
			debugMessage: () => "Embedded wallet load failed. Ensure your domain is verified in https://dashboard.reown.com."
		},
		JWT_TOKEN_NOT_VALID: {
			code: "APKT006",
			displayMessage: "Session Expired",
			debugMessage: "Your session is invalid or expired. Please check your system’s date and time settings, then reconnect."
		},
		INVALID_PROJECT_ID: {
			code: "APKT007",
			displayMessage: "Invalid Project ID",
			debugMessage: "The specified project ID is invalid. Please visit https://dashboard.reown.com to obtain a valid project ID."
		},
		PROJECT_ID_NOT_CONFIGURED: {
			code: "APKT008",
			displayMessage: "Project ID Missing",
			debugMessage: "No project ID is configured. You can create and configure a project ID at https://dashboard.reown.com."
		},
		SERVER_ERROR_APP_CONFIGURATION: {
			code: "APKT009",
			displayMessage: "Server Error",
			debugMessage: (errorMessage) => `Unable to fetch App Configuration. ${errorMessage}. Please check your network connection and try again shortly. Contact support if the issue persists.`
		},
		RATE_LIMITED_APP_CONFIGURATION: {
			code: "APKT010",
			displayMessage: "Rate Limited",
			debugMessage: "You have been rate limited while retrieving App Configuration. Please wait a few minutes and try again. Contact support if the issue persists."
		}
	},
	ALERT_WARNINGS: {
		LOCAL_CONFIGURATION_IGNORED: { debugMessage: (warningMessage) => `[Reown Config Notice] ${warningMessage}` },
		INACTIVE_NAMESPACE_NOT_CONNECTED: {
			code: "APKTW001",
			displayMessage: "Inactive Namespace Not Connected",
			debugMessage: (namespace, errorMessage) => `An error occurred while connecting an inactive namespace ${namespace}: "${errorMessage}"`
		},
		INVALID_EMAIL: {
			code: "APKTW002",
			displayMessage: "Invalid Email Address",
			debugMessage: "Please enter a valid email address"
		}
	}
};
const TokenUtil = {
	TOKEN_ADDRESSES_BY_SYMBOL: { USDC: {
		8453: baseUSDC.asset,
		84532: baseSepoliaUSDC.asset
	} },
	getTokenSymbolByAddress(tokenAddress) {
		if (!tokenAddress) return;
		const [symbol] = Object.entries(TokenUtil.TOKEN_ADDRESSES_BY_SYMBOL).find(([_, addressesByChain]) => Object.values(addressesByChain).includes(tokenAddress)) ?? [];
		return symbol;
	}
};
const LoggerUtil = { createLogger(onError, level = "error") {
	const { logger } = Ue({ opts: Ge({ level }) });
	logger.error = (...args) => {
		for (const arg of args) if (arg instanceof Error) {
			onError(arg, ...args);
			return;
		}
		onError(void 0, ...args);
	};
	return logger;
} };
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
var encoder = /* @__PURE__ */ new TextEncoder();
function stringToHex(value_, opts = {}) {
	return bytesToHex(encoder.encode(value_), opts);
}
const WcConstantsUtil = {
	ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
	ERROR_CODE_DEFAULT: 5e3,
	ERROR_INVALID_CHAIN_ID: 32603
};
var UniversalAdapter = class extends AdapterBlueprint {
	async setUniversalProvider(universalProvider) {
		if (!this.namespace) throw new Error("UniversalAdapter:setUniversalProvider - namespace is required");
		this.addConnector(new WalletConnectConnector({
			provider: universalProvider,
			caipNetworks: this.getCaipNetworks(),
			namespace: this.namespace
		}));
		return Promise.resolve();
	}
	async connect(params) {
		return Promise.resolve({
			id: "WALLET_CONNECT",
			type: "WALLET_CONNECT",
			chainId: Number(params.chainId),
			provider: this.provider,
			address: ""
		});
	}
	async disconnect() {
		try {
			await this.getWalletConnectConnector().disconnect();
			this.emit("disconnect");
		} catch (error) {
			console.warn("UniversalAdapter:disconnect - error", error);
		}
		return { connections: [] };
	}
	syncConnections() {
		return Promise.resolve();
	}
	async writeSolanaTransaction() {
		return Promise.resolve({ hash: "" });
	}
	async getAccounts({ namespace }) {
		const addresses = this.provider?.session?.namespaces?.[namespace]?.accounts?.map((account) => {
			const [, , address] = account.split(":");
			return address;
		}).filter((address, index, self) => self.indexOf(address) === index) || [];
		return Promise.resolve({ accounts: addresses.map((address) => CoreHelperUtil.createAccount(namespace, address, namespace === "bip122" ? "payment" : "eoa")) });
	}
	async syncConnectors() {
		return Promise.resolve();
	}
	async getBalance(params) {
		if (!(params.caipNetwork && ConstantsUtil$1.BALANCE_SUPPORTED_CHAINS.includes(params.caipNetwork?.chainNamespace)) || params.caipNetwork?.testnet) return {
			balance: "0.00",
			symbol: params.caipNetwork?.nativeCurrency.symbol || ""
		};
		const accountData = ChainController.getAccountData();
		if (accountData?.balanceLoading && params.chainId === ChainController.state.activeCaipNetwork?.id) return {
			balance: accountData?.balance || "0.00",
			symbol: accountData?.balanceSymbol || ""
		};
		const balance = (await ChainController.fetchTokenBalance()).find((b) => b.chainId === `${params.caipNetwork?.chainNamespace}:${params.chainId}` && b.symbol === params.caipNetwork?.nativeCurrency.symbol);
		return {
			balance: balance?.quantity.numeric || "0.00",
			symbol: balance?.symbol || params.caipNetwork?.nativeCurrency.symbol || ""
		};
	}
	async signMessage(params) {
		const { provider, message, address } = params;
		if (!provider) throw new Error("UniversalAdapter:signMessage - provider is undefined");
		let signature = "";
		if (ChainController.state.activeCaipNetwork?.chainNamespace === ConstantsUtil.CHAIN.SOLANA) signature = (await provider.request({
			method: "solana_signMessage",
			params: {
				message: esm_default.encode(new TextEncoder().encode(message)),
				pubkey: address
			}
		}, ChainController.state.activeCaipNetwork?.caipNetworkId)).signature;
		else signature = await provider.request({
			method: "personal_sign",
			params: [message, address]
		}, ChainController.state.activeCaipNetwork?.caipNetworkId);
		return { signature };
	}
	async estimateGas() {
		return Promise.resolve({ gas: BigInt(0) });
	}
	async sendTransaction() {
		return Promise.resolve({ hash: "" });
	}
	walletGetAssets(_params) {
		return Promise.resolve({});
	}
	async writeContract() {
		return Promise.resolve({ hash: "" });
	}
	emitFirstAvailableConnection() {}
	parseUnits() {
		return 0n;
	}
	formatUnits() {
		return "0";
	}
	async getCapabilities() {
		return Promise.resolve({});
	}
	async grantPermissions() {
		return Promise.resolve({});
	}
	async revokePermissions() {
		return Promise.resolve("0x");
	}
	async syncConnection() {
		return Promise.resolve({
			id: "WALLET_CONNECT",
			type: "WALLET_CONNECT",
			chainId: 1,
			provider: this.provider,
			address: ""
		});
	}
	async switchNetwork(params) {
		const { caipNetwork } = params;
		const connector = this.getWalletConnectConnector();
		if (caipNetwork.chainNamespace === ConstantsUtil.CHAIN.EVM) try {
			await connector.provider?.request({
				method: "wallet_switchEthereumChain",
				params: [{ chainId: toHex(caipNetwork.id) }]
			});
		} catch (switchError) {
			if (switchError.code === WcConstantsUtil.ERROR_CODE_UNRECOGNIZED_CHAIN_ID || switchError.code === WcConstantsUtil.ERROR_INVALID_CHAIN_ID || switchError.code === WcConstantsUtil.ERROR_CODE_DEFAULT || switchError?.data?.originalError?.code === WcConstantsUtil.ERROR_CODE_UNRECOGNIZED_CHAIN_ID) try {
				await connector.provider?.request({
					method: "wallet_addEthereumChain",
					params: [{
						chainId: toHex(caipNetwork.id),
						rpcUrls: [caipNetwork?.rpcUrls["chainDefault"]?.http],
						chainName: caipNetwork.name,
						nativeCurrency: caipNetwork.nativeCurrency,
						blockExplorerUrls: [caipNetwork.blockExplorers?.default.url]
					}]
				});
			} catch (error) {
				throw new Error("Chain is not supported");
			}
		}
		connector.provider.setDefaultChain(caipNetwork.caipNetworkId);
	}
	getWalletConnectProvider() {
		return this.connectors.find((c) => c.type === "WALLET_CONNECT")?.provider;
	}
};
var FEATURE_KEYS = [
	"email",
	"socials",
	"swaps",
	"onramp",
	"activity",
	"reownBranding",
	"multiWallet",
	"emailCapture",
	"payWithExchange",
	"payments",
	"reownAuthentication",
	"headless"
];
var featureConfig = {
	email: {
		apiFeatureName: "social_login",
		localFeatureName: "email",
		returnType: false,
		isLegacy: false,
		isAvailableOnBasic: false,
		processApi: (apiConfig) => {
			if (!apiConfig?.config) return false;
			const config = apiConfig.config;
			return Boolean(apiConfig.isEnabled) && config.includes("email");
		},
		processFallback: (localValue) => {
			if (localValue === void 0) return ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.email;
			return Boolean(localValue);
		}
	},
	socials: {
		apiFeatureName: "social_login",
		localFeatureName: "socials",
		returnType: false,
		isLegacy: false,
		isAvailableOnBasic: false,
		processApi: (apiConfig) => {
			if (!apiConfig?.config) return false;
			const config = apiConfig.config;
			return Boolean(apiConfig.isEnabled) && config.length > 0 ? config.filter((s) => s !== "email") : false;
		},
		processFallback: (localValue) => {
			if (localValue === void 0) return ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.socials;
			if (typeof localValue === "boolean") return localValue ? ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.socials : false;
			return localValue;
		}
	},
	swaps: {
		apiFeatureName: "swap",
		localFeatureName: "swaps",
		returnType: false,
		isLegacy: false,
		isAvailableOnBasic: false,
		processApi: (apiConfig) => {
			if (!apiConfig?.config) return false;
			const config = apiConfig.config;
			return Boolean(apiConfig.isEnabled) && config.length > 0 ? config : false;
		},
		processFallback: (localValue) => {
			if (localValue === void 0) return ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.swaps;
			if (typeof localValue === "boolean") return localValue ? ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.swaps : false;
			return localValue;
		}
	},
	onramp: {
		apiFeatureName: "onramp",
		localFeatureName: "onramp",
		returnType: false,
		isLegacy: false,
		isAvailableOnBasic: false,
		processApi: (apiConfig) => {
			if (!apiConfig?.config) return false;
			const config = apiConfig.config;
			return Boolean(apiConfig.isEnabled) && config.length > 0 ? config : false;
		},
		processFallback: (localValue) => {
			if (localValue === void 0) return ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.onramp;
			if (typeof localValue === "boolean") return localValue ? ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.onramp : false;
			return localValue;
		}
	},
	activity: {
		apiFeatureName: "activity",
		localFeatureName: "history",
		returnType: false,
		isLegacy: true,
		isAvailableOnBasic: false,
		processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
		processFallback: (localValue) => {
			if (localValue === void 0) return ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.activity;
			return Boolean(localValue);
		}
	},
	reownBranding: {
		apiFeatureName: "reown_branding",
		localFeatureName: "reownBranding",
		returnType: false,
		isLegacy: false,
		isAvailableOnBasic: false,
		processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
		processFallback: (localValue) => {
			if (localValue === void 0) return ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.reownBranding;
			return Boolean(localValue);
		}
	},
	emailCapture: {
		apiFeatureName: "email_capture",
		localFeatureName: "emailCapture",
		returnType: false,
		isLegacy: false,
		isAvailableOnBasic: false,
		processApi: (apiConfig) => apiConfig.isEnabled && (apiConfig.config ?? []),
		processFallback: (_localValue) => false
	},
	multiWallet: {
		apiFeatureName: "multi_wallet",
		localFeatureName: "multiWallet",
		returnType: false,
		isLegacy: false,
		isAvailableOnBasic: false,
		processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
		processFallback: () => ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.multiWallet
	},
	payWithExchange: {
		apiFeatureName: "fund_from_exchange",
		localFeatureName: "payWithExchange",
		returnType: false,
		isLegacy: false,
		isAvailableOnBasic: false,
		processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
		processFallback: () => ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.payWithExchange
	},
	payments: {
		apiFeatureName: "payments",
		localFeatureName: "payments",
		returnType: false,
		isLegacy: false,
		isAvailableOnBasic: false,
		processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
		processFallback: () => ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.payments
	},
	reownAuthentication: {
		apiFeatureName: "reown_authentication",
		localFeatureName: "reownAuthentication",
		returnType: false,
		isLegacy: false,
		isAvailableOnBasic: false,
		processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
		processFallback: (localValue) => {
			if (typeof localValue === "undefined") return ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.reownAuthentication;
			return Boolean(localValue);
		}
	},
	headless: {
		apiFeatureName: "headless",
		localFeatureName: "headless",
		returnType: false,
		isLegacy: false,
		isAvailableOnBasic: false,
		processApi: (apiConfig) => Boolean(apiConfig.isEnabled),
		processFallback: () => ConstantsUtil$1.DEFAULT_REMOTE_FEATURES.headless
	}
};
const ConfigUtil = {
	localSettingsOverridden: /* @__PURE__ */ new Set(),
	getApiConfig(id, apiProjectConfig) {
		return apiProjectConfig?.find((f) => f.id === id);
	},
	addWarning(localFeatureValue, featureKey) {
		if (localFeatureValue !== void 0) {
			const config = featureConfig[featureKey];
			const warningName = config.isLegacy ? `"features.${config.localFeatureName}" (now "${featureKey}")` : `"features.${featureKey}"`;
			this.localSettingsOverridden.add(warningName);
		}
	},
	processFeature(featureKey, localFeatures, apiProjectConfig, useApi, isBasic) {
		const config = featureConfig[featureKey];
		const localValue = localFeatures[config.localFeatureName];
		if (isBasic && !config.isAvailableOnBasic) return false;
		if (useApi) {
			const apiConfig = this.getApiConfig(config.apiFeatureName, apiProjectConfig);
			if (apiConfig?.config === null) return this.processFallbackFeature(featureKey, localValue);
			if (!apiConfig?.config) return false;
			if (localValue !== void 0) this.addWarning(localValue, featureKey);
			return this.processApiFeature(featureKey, apiConfig);
		}
		return this.processFallbackFeature(featureKey, localValue);
	},
	processApiFeature(featureKey, apiConfig) {
		return featureConfig[featureKey].processApi(apiConfig);
	},
	processFallbackFeature(featureKey, localValue) {
		return featureConfig[featureKey].processFallback(localValue);
	},
	async fetchRemoteFeatures(config) {
		const isBasic = config.basic ?? false;
		const localFeatures = config.features || {};
		this.localSettingsOverridden.clear();
		let apiProjectConfig = null;
		let shouldUseApiConfig = false;
		try {
			apiProjectConfig = await ApiController.fetchProjectConfig();
			shouldUseApiConfig = apiProjectConfig !== null && apiProjectConfig !== void 0;
		} catch (e) {
			console.warn("[Reown Config] Failed to fetch remote project configuration. Using local/default values.", e);
		}
		const remoteFeaturesConfig = shouldUseApiConfig && !isBasic ? ConstantsUtil$1.DEFAULT_REMOTE_FEATURES : ConstantsUtil$1.DEFAULT_REMOTE_FEATURES_DISABLED;
		try {
			for (const featureKey of FEATURE_KEYS) {
				const result = this.processFeature(featureKey, localFeatures, apiProjectConfig, shouldUseApiConfig, isBasic);
				Object.assign(remoteFeaturesConfig, { [featureKey]: result });
			}
		} catch (e) {
			console.warn("[Reown Config] Failed to process the configuration from Cloud. Using default values.", e);
			return ConstantsUtil$1.DEFAULT_REMOTE_FEATURES;
		}
		if (shouldUseApiConfig && this.localSettingsOverridden.size > 0) {
			const warningMessage = `Your local configuration for ${Array.from(this.localSettingsOverridden).join(", ")} was ignored because a remote configuration was successfully fetched. Please manage these features via your project dashboard on dashboard.reown.com.`;
			AlertController.open({ debugMessage: ErrorUtil.ALERT_WARNINGS.LOCAL_CONFIGURATION_IGNORED.debugMessage(warningMessage) }, "warning");
		}
		return remoteFeaturesConfig;
	}
};
var AppKitBaseClient = class {
	constructor(options) {
		this.chainNamespaces = [];
		this.features = {};
		this.remoteFeatures = {};
		this.reportedAlertErrors = {};
		this.getCaipNetwork = (chainNamespace, id) => {
			if (chainNamespace) {
				const caipNetworkWithId = ChainController.getCaipNetworks(chainNamespace)?.find((c) => c.id === id);
				if (caipNetworkWithId) return caipNetworkWithId;
				const namespaceCaipNetwork = ChainController.getNetworkData(chainNamespace)?.caipNetwork;
				if (namespaceCaipNetwork) return namespaceCaipNetwork;
				return ChainController.getRequestedCaipNetworks(chainNamespace).filter((c) => c.chainNamespace === chainNamespace)?.[0];
			}
			return ChainController.state.activeCaipNetwork || this.defaultCaipNetwork;
		};
		this.getCaipNetworkId = () => {
			const network = this.getCaipNetwork();
			if (network) return network.id;
		};
		this.getCaipNetworks = (namespace) => ChainController.getCaipNetworks(namespace);
		this.getActiveChainNamespace = () => ChainController.state.activeChain;
		this.setRequestedCaipNetworks = (requestedCaipNetworks, chain) => {
			ChainController.setRequestedCaipNetworks(requestedCaipNetworks, chain);
		};
		this.getApprovedCaipNetworkIds = () => ChainController.getAllApprovedCaipNetworkIds();
		this.getCaipAddress = (chainNamespace) => {
			if (ChainController.state.activeChain === chainNamespace || !chainNamespace) return ChainController.state.activeCaipAddress;
			return ChainController.state.chains.get(chainNamespace)?.accountState?.caipAddress;
		};
		this.setClientId = (clientId) => {
			BlockchainApiController.setClientId(clientId);
		};
		this.getProvider = (namespace) => ProviderController.getProvider(namespace);
		this.getProviderType = (namespace) => ProviderController.getProviderId(namespace);
		this.getPreferredAccountType = (namespace) => getPreferredAccountType(namespace);
		this.setCaipAddress = (caipAddress, chain, shouldRefresh = false) => {
			ChainController.setAccountProp("caipAddress", caipAddress, chain, shouldRefresh);
			ChainController.setAccountProp("address", CoreHelperUtil.getPlainAddress(caipAddress), chain, shouldRefresh);
		};
		this.setBalance = (balance, balanceSymbol, chain) => {
			ChainController.setAccountProp("balance", balance, chain);
			ChainController.setAccountProp("balanceSymbol", balanceSymbol, chain);
		};
		this.setProfileName = (profileName, chain) => {
			ChainController.setAccountProp("profileName", profileName, chain);
		};
		this.setProfileImage = (profileImage, chain) => {
			ChainController.setAccountProp("profileImage", profileImage, chain);
		};
		this.setUser = (user, chain) => {
			ChainController.setAccountProp("user", user, chain);
		};
		this.resetAccount = (chain) => {
			ChainController.resetAccount(chain);
		};
		this.setCaipNetwork = (caipNetwork) => {
			ChainController.setActiveCaipNetwork(caipNetwork);
		};
		this.setCaipNetworkOfNamespace = (caipNetwork, chainNamespace) => {
			ChainController.setChainNetworkData(chainNamespace, { caipNetwork });
		};
		this.setStatus = (status, chain) => {
			ChainController.setAccountProp("status", status, chain);
			if (ConnectorController.isConnected()) StorageUtil.setConnectionStatus("connected");
			else StorageUtil.setConnectionStatus("disconnected");
		};
		this.getAddressByChainNamespace = (chainNamespace) => ChainController.getAccountData(chainNamespace)?.address;
		this.setConnectors = (connectors) => {
			const allConnectors = [...ConnectorController.state.allConnectors, ...connectors];
			ConnectorController.setConnectors(allConnectors);
		};
		this.setConnections = (connections, chainNamespace) => {
			StorageUtil.setConnections(connections, chainNamespace);
			ConnectionController.setConnections(connections, chainNamespace);
		};
		this.fetchIdentity = (request) => BlockchainApiController.fetchIdentity(request);
		this.getReownName = (address) => EnsController.getNamesForAddress(address);
		this.getConnectors = () => ConnectorController.getConnectors();
		this.getConnectorImage = (connector) => AssetUtil.getConnectorImage(connector);
		this.getConnections = (namespace) => {
			if (!this.remoteFeatures.multiWallet) {
				AlertController.open(ConstantsUtil.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
				return [];
			}
			return ConnectionControllerUtil.getConnectionsData(namespace).connections;
		};
		this.getRecentConnections = (namespace) => {
			if (!this.remoteFeatures.multiWallet) {
				AlertController.open(ConstantsUtil.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
				return [];
			}
			return ConnectionControllerUtil.getConnectionsData(namespace).recentConnections;
		};
		this.switchConnection = async (params) => {
			if (!this.remoteFeatures.multiWallet) {
				AlertController.open(ConstantsUtil.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
				return;
			}
			await ConnectionController.switchConnection(params);
		};
		this.deleteConnection = (params) => {
			if (!this.remoteFeatures.multiWallet) {
				AlertController.open(ConstantsUtil.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
				return;
			}
			StorageUtil.deleteAddressFromConnection(params);
			ConnectionController.syncStorageConnections();
		};
		this.setConnectedWalletInfo = (connectedWalletInfo, chain) => {
			const type = ProviderController.getProviderId(chain);
			const walletInfo = connectedWalletInfo ? {
				...connectedWalletInfo,
				type
			} : void 0;
			ChainController.setAccountProp("connectedWalletInfo", walletInfo, chain);
		};
		this.getIsConnectedState = () => Boolean(ChainController.state.activeCaipAddress);
		this.addAddressLabel = (address, label, chain) => {
			const addressLabels = ChainController.getAccountData(chain)?.addressLabels || {};
			ChainController.setAccountProp("addressLabels", {
				...addressLabels,
				[address]: label
			}, chain);
		};
		this.removeAddressLabel = (address, chain) => {
			const addressLabels = ChainController.getAccountData(chain)?.addressLabels || {};
			ChainController.setAccountProp("addressLabels", {
				...addressLabels,
				[address]: void 0
			}, chain);
		};
		this.getAddress = (chainNamespace) => {
			const namespace = chainNamespace || ChainController.state.activeChain;
			return ChainController.getAccountData(namespace)?.address;
		};
		this.resetNetwork = (namespace) => {
			ChainController.resetNetwork(namespace);
		};
		this.addConnector = (connector) => {
			ConnectorController.addConnector(connector);
		};
		this.resetWcConnection = () => {
			ConnectionController.resetWcConnection();
		};
		this.setAddressExplorerUrl = (addressExplorerUrl, chain) => {
			ChainController.setAccountProp("addressExplorerUrl", addressExplorerUrl, chain);
		};
		this.setSmartAccountDeployed = (isDeployed, chain) => {
			ChainController.setAccountProp("smartAccountDeployed", isDeployed, chain);
		};
		this.setPreferredAccountType = (preferredAccountType, chain) => {
			ChainController.setAccountProp("preferredAccountType", preferredAccountType, chain);
		};
		this.setEIP6963Enabled = (enabled) => {
			OptionsController.setEIP6963Enabled(enabled);
		};
		this.handleUnsafeRPCRequest = () => {
			if (this.isOpen()) {
				if (this.isTransactionStackEmpty()) return;
				this.redirect("ApproveTransaction");
			} else this.open({ view: "ApproveTransaction" });
		};
		this.options = options;
		this.version = options.sdkVersion;
		this.caipNetworks = this.extendCaipNetworks(options);
		this.chainNamespaces = this.getChainNamespacesSet(options.adapters, this.caipNetworks);
		this.defaultCaipNetwork = this.extendDefaultCaipNetwork(options);
		this.chainAdapters = this.createAdapters(options.adapters);
		this.readyPromise = this.initialize(options);
	}
	getChainNamespacesSet(adapters, caipNetworks) {
		const adapterNamespaces = adapters?.map((adapter) => adapter.namespace).filter((namespace) => Boolean(namespace));
		if (adapterNamespaces?.length) return [...new Set(adapterNamespaces)];
		const networkNamespaces = caipNetworks?.map((network) => network.chainNamespace);
		return [...new Set(networkNamespaces)];
	}
	async initialize(options) {
		this.initializeProjectSettings(options);
		this.initControllers(options);
		await this.initChainAdapters();
		this.sendInitializeEvent(options);
		if (options.features?.headless && !ConnectorUtil.hasInjectedConnectors()) ApiController.prefetch({
			fetchNetworkImages: false,
			fetchConnectorImages: false,
			fetchWalletRanks: false,
			fetchRecommendedWallets: true
		});
		if (OptionsController.state.enableReconnect) {
			await this.syncExistingConnection();
			await this.syncAdapterConnections();
		} else await this.unSyncExistingConnection();
		if (!options.basic && !options.manualWCControl) this.remoteFeatures = await ConfigUtil.fetchRemoteFeatures(options);
		await ApiController.fetchUsage();
		OptionsController.setRemoteFeatures(this.remoteFeatures);
		if (this.remoteFeatures.onramp) OnRampController.setOnrampProviders(this.remoteFeatures.onramp);
		if (OptionsController.state.remoteFeatures?.email || Array.isArray(OptionsController.state.remoteFeatures?.socials) && OptionsController.state.remoteFeatures?.socials.length > 0) await this.checkAllowedOrigins();
		if (OptionsController.state.features?.reownAuthentication || OptionsController.state.remoteFeatures?.reownAuthentication) {
			const { ReownAuthentication } = await __vitePreload(async () => {
				const { ReownAuthentication: ReownAuthentication$1 } = await import("./features-CFQUxUCS.js");
				return { ReownAuthentication: ReownAuthentication$1 };
			}, __vite__mapDeps([0,1,2,3,4,5,6]));
			const currentSIWX = OptionsController.state.siwx;
			if (!(currentSIWX instanceof ReownAuthentication)) {
				if (currentSIWX) console.warn("ReownAuthentication option is enabled, SIWX configuration will be overridden.");
				OptionsController.setSIWX(new ReownAuthentication());
			}
		}
	}
	async openSend(args) {
		const namespaceToUse = args.namespace || ChainController.state.activeChain;
		const caipAddress = this.getCaipAddress(namespaceToUse);
		const chainId = this.getCaipNetwork(namespaceToUse)?.id;
		if (!caipAddress) throw new Error("openSend: caipAddress not found");
		if (chainId?.toString() !== args.chainId.toString()) {
			const caipNetwork = ChainController.getCaipNetworkById(args.chainId, namespaceToUse);
			if (!caipNetwork) throw new Error(`openSend: caipNetwork with chainId ${args.chainId} not found`);
			await this.switchNetwork(caipNetwork, { throwOnFailure: true });
		}
		try {
			const symbol = TokenUtil.getTokenSymbolByAddress(args.assetAddress);
			if (symbol) await ApiController.fetchTokenImages([symbol]);
		} catch {}
		await ModalController.open({
			view: "WalletSend",
			data: { send: args }
		});
		return new Promise((resolve, reject) => {
			const unsubscribe = SendController.subscribeKey("hash", (hash) => {
				if (hash) {
					cleanup();
					resolve({ hash });
				}
			});
			const unsubscribeModal = ModalController.subscribe((modal) => {
				if (!modal.open) {
					cleanup();
					reject(/* @__PURE__ */ new Error("Modal closed"));
				}
			});
			const cleanup = this.createCleanupHandler([unsubscribe, unsubscribeModal]);
		});
	}
	toModalOptions() {
		function isSwap(options) {
			return options?.view === "Swap";
		}
		function isSend(options) {
			return options?.view === "WalletSend";
		}
		return {
			isSwap,
			isSend
		};
	}
	async checkAllowedOrigins() {
		try {
			const allowedOrigins = await ApiController.fetchAllowedOrigins();
			if (!CoreHelperUtil.isClient()) return;
			const currentOrigin = window.location.origin;
			if (!WcHelpersUtil.isOriginAllowed(currentOrigin, allowedOrigins, ConstantsUtil.DEFAULT_ALLOWED_ANCESTORS)) AlertController.open(ErrorUtil.ALERT_ERRORS.ORIGIN_NOT_ALLOWED, "error");
		} catch (error) {
			if (!(error instanceof Error)) return;
			switch (error.message) {
				case "RATE_LIMITED":
					AlertController.open(ErrorUtil.ALERT_ERRORS.RATE_LIMITED_APP_CONFIGURATION, "error");
					break;
				case "SERVER_ERROR": {
					const originalError = error.cause instanceof Error ? error.cause : error;
					AlertController.open({
						displayMessage: ErrorUtil.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.displayMessage,
						debugMessage: ErrorUtil.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.debugMessage(originalError.message)
					}, "error");
					break;
				}
				default: break;
			}
		}
	}
	createCleanupHandler(unsubscribeFunctions) {
		return () => {
			unsubscribeFunctions.forEach((unsubscribe) => {
				try {
					unsubscribe();
				} catch {}
			});
		};
	}
	sendInitializeEvent(options) {
		const { ...optionsCopy } = options;
		delete optionsCopy.adapters;
		delete optionsCopy.universalProvider;
		EventsController.sendEvent({
			type: "track",
			event: "INITIALIZE",
			properties: {
				...optionsCopy,
				networks: options.networks.map((n) => n.id),
				siweConfig: { options: options.siweConfig?.options || {} }
			}
		});
	}
	initControllers(options) {
		this.initializeOptionsController(options);
		this.initializeChainController(options);
		this.initializeThemeController(options);
		this.initializeConnectionController(options);
		this.initializeConnectorController();
	}
	initAdapterController() {
		AdapterController.initialize(this.chainAdapters);
	}
	initializeThemeController(options) {
		if (options.themeMode) ThemeController.setThemeMode(options.themeMode);
		if (options.themeVariables) ThemeController.setThemeVariables(options.themeVariables);
	}
	initializeChainController(options) {
		if (!this.connectionControllerClient) throw new Error("ConnectionControllerClient must be set");
		ChainController.initialize(options.adapters ?? [], this.caipNetworks, { connectionControllerClient: this.connectionControllerClient });
		const network = this.getDefaultNetwork();
		if (network) ChainController.setActiveCaipNetwork(network);
	}
	initializeConnectionController(options) {
		ConnectionController.initialize(options.adapters ?? []);
		ConnectionController.setWcBasic(options.basic ?? false);
	}
	initializeConnectorController() {
		ConnectorController.initialize(this.chainNamespaces);
	}
	initializeProjectSettings(options) {
		OptionsController.setProjectId(options.projectId);
		OptionsController.setSdkVersion(options.sdkVersion);
	}
	initializeOptionsController(options) {
		OptionsController.setDebug(options.debug !== false);
		OptionsController.setEnableWalletGuide(options.enableWalletGuide !== false);
		OptionsController.setEnableWallets(options.enableWallets !== false);
		OptionsController.setEIP6963Enabled(options.enableEIP6963 !== false);
		OptionsController.setEnableNetworkSwitch(options.enableNetworkSwitch !== false);
		OptionsController.setEnableReconnect(options.enableReconnect !== false);
		OptionsController.setEnableMobileFullScreen(options.enableMobileFullScreen === true);
		OptionsController.setCoinbasePreference(options.coinbasePreference);
		OptionsController.setEnableAuthLogger(options.enableAuthLogger !== false);
		OptionsController.setCustomRpcUrls(options.customRpcUrls);
		OptionsController.setEnableEmbedded(options.enableEmbedded);
		OptionsController.setAllWallets(options.allWallets);
		OptionsController.setIncludeWalletIds(options.includeWalletIds);
		OptionsController.setExcludeWalletIds(options.excludeWalletIds);
		OptionsController.setFeaturedWalletIds(options.featuredWalletIds);
		OptionsController.setTokens(options.tokens);
		OptionsController.setTermsConditionsUrl(options.termsConditionsUrl);
		OptionsController.setPrivacyPolicyUrl(options.privacyPolicyUrl);
		OptionsController.setCustomWallets(options.customWallets);
		OptionsController.setFeatures(options.features);
		OptionsController.setAllowUnsupportedChain(options.allowUnsupportedChain);
		OptionsController.setUniversalProviderConfigOverride(options.universalProviderConfigOverride);
		OptionsController.setPreferUniversalLinks(options.experimental_preferUniversalLinks);
		OptionsController.setDefaultAccountTypes(options.defaultAccountTypes);
		const defaultMetaData = this.getDefaultMetaData();
		if (!options.metadata && defaultMetaData) options.metadata = defaultMetaData;
		OptionsController.setMetadata(options.metadata);
		OptionsController.setDisableAppend(options.disableAppend);
		OptionsController.setEnableEmbedded(options.enableEmbedded);
		OptionsController.setSIWX(options.siwx);
		this.features = OptionsController.state.features ?? {};
		if (!options.projectId) {
			AlertController.open(ErrorUtil.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
			return;
		}
		if (options.adapters?.find((adapter) => adapter.namespace === ConstantsUtil.CHAIN.EVM)) {
			if (options.siweConfig) {
				if (options.siwx) throw new Error("Cannot set both `siweConfig` and `siwx` options");
				OptionsController.setSIWX(options.siweConfig.mapToSIWX());
			}
		}
	}
	getDefaultMetaData() {
		if (CoreHelperUtil.isClient()) return {
			name: document.getElementsByTagName("title")?.[0]?.textContent || "",
			description: document.querySelector("meta[property=\"og:description\"]")?.content || "",
			url: window.location.origin,
			icons: [document.querySelector("link[rel~=\"icon\"]")?.href || ""]
		};
		return null;
	}
	setUnsupportedNetwork(chainId) {
		const namespace = this.getActiveChainNamespace();
		if (namespace) {
			const unsupportedNetwork = CaipNetworksUtil.getUnsupportedNetwork(`${namespace}:${chainId}`);
			ChainController.setActiveCaipNetwork(unsupportedNetwork);
		}
	}
	getDefaultNetwork() {
		return CaipNetworksUtil.getCaipNetworkFromStorage(this.defaultCaipNetwork);
	}
	extendCaipNetwork(network, options) {
		return CaipNetworksUtil.extendCaipNetwork(network, {
			customNetworkImageUrls: options.chainImages,
			projectId: options.projectId
		});
	}
	extendCaipNetworks(options) {
		return CaipNetworksUtil.extendCaipNetworks(options.networks, {
			customNetworkImageUrls: options.chainImages,
			customRpcUrls: options.customRpcUrls,
			projectId: options.projectId
		});
	}
	extendDefaultCaipNetwork(options) {
		const defaultNetwork = options.networks.find((n) => n.id === options.defaultNetwork?.id);
		return defaultNetwork ? CaipNetworksUtil.extendCaipNetwork(defaultNetwork, {
			customNetworkImageUrls: options.chainImages,
			customRpcUrls: options.customRpcUrls,
			projectId: options.projectId
		}) : void 0;
	}
	async disconnectConnector(namespace, id) {
		try {
			this.setLoading(true, namespace);
			let disconnectResult = { connections: [] };
			const adapter = this.getAdapter(namespace);
			if ((ChainController.state.chains.get(namespace)?.accountState?.caipAddress || !OptionsController.state.enableReconnect) && adapter?.disconnect) disconnectResult = await adapter.disconnect({ id });
			this.setLoading(false, namespace);
			return disconnectResult;
		} catch (error) {
			this.setLoading(false, namespace);
			throw new Error(`Failed to disconnect chains: ${error.message}`);
		}
	}
	createClients() {
		this.connectionControllerClient = {
			connectWalletConnect: async () => {
				const activeChain = ChainController.state.activeChain;
				const adapter = this.getAdapter(activeChain);
				const chainId = this.getCaipNetwork(activeChain)?.id;
				const connections = ConnectionController.getConnections(activeChain);
				const isMultiWallet = this.remoteFeatures.multiWallet;
				const hasConnections = connections.length > 0;
				if (!adapter) throw new Error("Adapter not found");
				const result = await adapter.connectWalletConnect(chainId);
				if (!hasConnections || !isMultiWallet) this.close();
				this.setClientId(result?.clientId || null);
				StorageUtil.setConnectedNamespaces([...ChainController.state.chains.keys()]);
				await this.syncWalletConnectAccount();
				await SIWXUtil.initializeIfEnabled();
			},
			connectExternal: async (params) => {
				const connectResult = await this.onConnectExternal(params);
				await this.connectInactiveNamespaces(params, connectResult);
				return connectResult ? { address: connectResult.address } : void 0;
			},
			reconnectExternal: async ({ id, info, type, provider }) => {
				const namespace = ChainController.state.activeChain;
				const adapter = this.getAdapter(namespace);
				if (!namespace) throw new Error("reconnectExternal: namespace not found");
				if (!adapter) throw new Error("reconnectExternal: adapter not found");
				if (adapter?.reconnect) {
					await adapter?.reconnect({
						id,
						info,
						type,
						provider,
						chainId: this.getCaipNetwork()?.id
					});
					StorageUtil.addConnectedNamespace(namespace);
					this.syncConnectedWalletInfo(namespace);
				}
			},
			disconnectConnector: async (params) => {
				await this.disconnectConnector(params.namespace, params.id);
			},
			disconnect: async (params) => {
				const { id: connectorIdParam, chainNamespace, initialDisconnect } = params || {};
				const namespace = chainNamespace || ChainController.state.activeChain;
				const namespaceConnectorId = ConnectorController.getConnectorId(namespace);
				const isAuth = connectorIdParam === ConstantsUtil.CONNECTOR_ID.AUTH || namespaceConnectorId === ConstantsUtil.CONNECTOR_ID.AUTH;
				const isWalletConnect = connectorIdParam === ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT || namespaceConnectorId === ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT;
				try {
					const namespaces = Array.from(ChainController.state.chains.keys());
					let namespacesToDisconnect = chainNamespace ? [chainNamespace] : namespaces;
					if (isWalletConnect || isAuth) namespacesToDisconnect = namespaces;
					const disconnectPromises = namespacesToDisconnect.map(async (ns) => {
						const currentConnectorId = ConnectorController.getConnectorId(ns);
						const connectorIdToDisconnect = connectorIdParam || currentConnectorId;
						const disconnectData = await this.disconnectConnector(ns, connectorIdToDisconnect);
						if (disconnectData) {
							if (isAuth) StorageUtil.deleteConnectedSocialProvider();
							disconnectData.connections.forEach((connection) => {
								StorageUtil.addDisconnectedConnectorId(connection.connectorId, ns);
							});
						}
						if (initialDisconnect) this.onDisconnectNamespace({
							chainNamespace: ns,
							closeModal: false
						});
					});
					const disconnectResults = await Promise.allSettled(disconnectPromises);
					SendController.resetSend();
					ConnectionController.resetWcConnection();
					if (SIWXUtil.getSIWX()?.signOutOnDisconnect) await SIWXUtil.clearSessions();
					ConnectorController.setFilterByNamespace(void 0);
					ConnectionController.syncStorageConnections();
					const failures = disconnectResults.filter((result) => result.status === "rejected");
					if (failures.length > 0) throw new Error(failures.map((f) => f.reason.message).join(", "));
					EventsController.sendEvent({
						type: "track",
						event: "DISCONNECT_SUCCESS",
						properties: { namespace: chainNamespace || "all" }
					});
				} catch (error) {
					throw new Error(`Failed to disconnect chains: ${error.message}`);
				}
			},
			checkInstalled: (ids) => {
				if (!ids) return Boolean(window.ethereum);
				return ids.some((id) => Boolean(window.ethereum?.[String(id)]));
			},
			signMessage: async (message) => {
				const namespace = ChainController.state.activeChain;
				const adapter = this.getAdapter(ChainController.state.activeChain);
				if (!namespace) throw new Error("signMessage: namespace not found");
				if (!adapter) throw new Error("signMessage: adapter not found");
				const address = this.getAddress(namespace);
				if (!address) throw new Error("signMessage: address not found");
				return (await adapter?.signMessage({
					message,
					address,
					provider: ProviderController.getProvider(namespace)
				}))?.signature || "";
			},
			sendTransaction: async (args) => {
				const namespace = args.chainNamespace;
				if (!namespace) throw new Error("sendTransaction: namespace not found");
				if (ConstantsUtil$1.SEND_SUPPORTED_NAMESPACES.includes(namespace)) {
					const adapter = this.getAdapter(namespace);
					if (!adapter) throw new Error("sendTransaction: adapter not found");
					const provider = ProviderController.getProvider(namespace);
					return (await adapter?.sendTransaction({
						...args,
						caipNetwork: this.getCaipNetwork(),
						provider
					}))?.hash || "";
				}
				return "";
			},
			estimateGas: async (args) => {
				const namespace = args.chainNamespace;
				if (namespace === ConstantsUtil.CHAIN.EVM) {
					const adapter = this.getAdapter(namespace);
					if (!adapter) throw new Error("estimateGas: adapter is required but got undefined");
					const provider = ProviderController.getProvider(namespace);
					const caipNetwork = this.getCaipNetwork();
					if (!caipNetwork) throw new Error("estimateGas: caipNetwork is required but got undefined");
					return (await adapter?.estimateGas({
						...args,
						provider,
						caipNetwork
					}))?.gas || 0n;
				}
				return 0n;
			},
			getEnsAvatar: async () => {
				const namespace = ChainController.state.activeChain;
				if (!namespace) throw new Error("getEnsAvatar: namespace is required but got undefined");
				const address = this.getAddress(namespace);
				if (!address) throw new Error("getEnsAvatar: address not found");
				await this.syncIdentity({
					address,
					chainId: Number(this.getCaipNetwork()?.id),
					chainNamespace: namespace
				});
				return ChainController.getAccountData()?.profileImage || false;
			},
			getEnsAddress: async (name) => await WcHelpersUtil.resolveReownName(name),
			writeContract: async (args) => {
				const namespace = ChainController.state.activeChain;
				const adapter = this.getAdapter(namespace);
				if (!namespace) throw new Error("writeContract: namespace is required but got undefined");
				if (!adapter) throw new Error("writeContract: adapter is required but got undefined");
				const caipNetwork = this.getCaipNetwork();
				const caipAddress = this.getCaipAddress();
				const provider = ProviderController.getProvider(namespace);
				if (!caipNetwork || !caipAddress) throw new Error("writeContract: caipNetwork or caipAddress is required but got undefined");
				return (await adapter?.writeContract({
					...args,
					caipNetwork,
					provider,
					caipAddress
				}))?.hash;
			},
			writeSolanaTransaction: async (args) => {
				const namespace = ChainController.state.activeChain;
				const adapter = this.getAdapter(namespace);
				if (!namespace) throw new Error("writeContract: namespace is required but got undefined");
				if (!adapter) throw new Error("writeContract: adapter is required but got undefined");
				const caipNetwork = this.getCaipNetwork();
				const caipAddress = this.getCaipAddress();
				const provider = ProviderController.getProvider(namespace);
				if (!caipNetwork || !caipAddress) throw new Error("writeContract: caipNetwork or caipAddress is required but got undefined");
				return (await adapter?.writeSolanaTransaction({
					...args,
					caipNetwork,
					provider,
					caipAddress
				}))?.hash;
			},
			parseUnits: (value, decimals) => {
				const adapter = this.getAdapter(ChainController.state.activeChain);
				if (!adapter) throw new Error("parseUnits: adapter is required but got undefined");
				return adapter?.parseUnits({
					value,
					decimals
				}) ?? 0n;
			},
			formatUnits: (value, decimals) => {
				const adapter = this.getAdapter(ChainController.state.activeChain);
				if (!adapter) throw new Error("formatUnits: adapter is required but got undefined");
				return adapter?.formatUnits({
					value,
					decimals
				}) ?? "0";
			},
			getCapabilities: async (params) => {
				const adapter = this.getAdapter(ChainController.state.activeChain);
				if (!adapter) throw new Error("getCapabilities: adapter is required but got undefined");
				return await adapter?.getCapabilities(params);
			},
			grantPermissions: async (params) => {
				const adapter = this.getAdapter(ChainController.state.activeChain);
				if (!adapter) throw new Error("grantPermissions: adapter is required but got undefined");
				return await adapter?.grantPermissions(params);
			},
			revokePermissions: async (params) => {
				const adapter = this.getAdapter(ChainController.state.activeChain);
				if (!adapter) throw new Error("revokePermissions: adapter is required but got undefined");
				if (adapter?.revokePermissions) return await adapter.revokePermissions(params);
				return "0x";
			},
			walletGetAssets: async (params) => {
				const adapter = this.getAdapter(ChainController.state.activeChain);
				if (!adapter) throw new Error("walletGetAssets: adapter is required but got undefined");
				return await adapter?.walletGetAssets(params) ?? {};
			},
			updateBalance: (namespace) => {
				const address = this.getAddress(namespace);
				const caipNetwork = this.getCaipNetwork(namespace);
				if (!caipNetwork || !address) return;
				this.updateNativeBalance(address, caipNetwork?.id, namespace);
			}
		};
		ConnectionController.setClient(this.connectionControllerClient);
	}
	async onConnectExternal(params) {
		const activeChain = ChainController.state.activeChain;
		const namespace = params.chain || activeChain;
		const adapter = this.getAdapter(namespace);
		let shouldUpdateNetwork = true;
		if (params.type === ConstantsUtil$2.CONNECTOR_TYPE_AUTH) {
			if (ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.some((namespace$1) => ConnectorController.getConnectorId(namespace$1) === ConstantsUtil.CONNECTOR_ID.AUTH) && params.chain !== activeChain) shouldUpdateNetwork = false;
		}
		if (params.chain && params.chain !== activeChain && !params.caipNetwork) {
			const toConnectNetwork = this.getCaipNetworks().find((network) => network.chainNamespace === params.chain);
			if (toConnectNetwork && shouldUpdateNetwork) this.setCaipNetwork(toConnectNetwork);
		}
		if (!namespace) throw new Error("connectExternal: namespace not found");
		if (!adapter) throw new Error("connectExternal: adapter not found");
		const fallbackCaipNetwork = this.getCaipNetwork(namespace);
		const caipNetworkToUse = params.caipNetwork || fallbackCaipNetwork;
		const res = await adapter.connect({
			id: params.id,
			address: params.address,
			info: params.info,
			type: params.type,
			provider: params.provider,
			socialUri: params.socialUri,
			chainId: params.caipNetwork?.id || fallbackCaipNetwork?.id,
			rpcUrl: params.caipNetwork?.rpcUrls?.default?.http?.[0] || fallbackCaipNetwork?.rpcUrls?.default?.http?.[0]
		});
		if (!res) return;
		StorageUtil.addConnectedNamespace(namespace);
		this.syncProvider({
			...res,
			chainNamespace: namespace
		});
		this.setStatus("connected", namespace);
		this.syncConnectedWalletInfo(namespace);
		StorageUtil.removeDisconnectedConnectorId(params.id, namespace);
		return {
			address: res.address,
			connectedCaipNetwork: caipNetworkToUse
		};
	}
	async connectInactiveNamespaces(params, connectResult) {
		const isConnectingToAuth = params.type === ConstantsUtil$2.CONNECTOR_TYPE_AUTH;
		const otherAuthNamespaces = HelpersUtil.getOtherAuthNamespaces(connectResult?.connectedCaipNetwork?.chainNamespace);
		const activeCaipNetwork = ChainController.state.activeCaipNetwork;
		const activeAdapter = this.getAdapter(activeCaipNetwork?.chainNamespace);
		if (isConnectingToAuth) {
			await Promise.all(otherAuthNamespaces.map(async (ns) => {
				try {
					const provider = ProviderController.getProvider(ns);
					const caipNetworkToUse = this.getCaipNetwork(ns);
					if (await this.getAdapter(ns)?.connect({
						...params,
						provider,
						socialUri: void 0,
						chainId: caipNetworkToUse?.id,
						rpcUrl: caipNetworkToUse?.rpcUrls?.default?.http?.[0]
					})) {
						StorageUtil.addConnectedNamespace(ns);
						StorageUtil.removeDisconnectedConnectorId(params.id, ns);
						this.setStatus("connected", ns);
						this.syncConnectedWalletInfo(ns);
					}
				} catch (error) {
					AlertController.warn(ErrorUtil.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.displayMessage, ErrorUtil.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.debugMessage(ns, error instanceof Error ? error.message : void 0), ErrorUtil.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.code);
				}
			}));
			if (activeCaipNetwork) await activeAdapter?.switchNetwork({ caipNetwork: activeCaipNetwork });
		}
	}
	getApprovedCaipNetworksData() {
		if (ProviderController.getProviderId(ChainController.state.activeChain) === ConstantsUtil$2.CONNECTOR_TYPE_WALLET_CONNECT) {
			const namespaces = this.universalProvider?.session?.namespaces;
			return {
				supportsAllNetworks: this.universalProvider?.session?.peer?.metadata.name === "MetaMask Wallet",
				approvedCaipNetworkIds: this.getChainsFromNamespaces(namespaces)
			};
		}
		return {
			supportsAllNetworks: true,
			approvedCaipNetworkIds: []
		};
	}
	async switchCaipNetwork(caipNetwork) {
		const networkNamespace = caipNetwork.chainNamespace;
		if (this.getAddressByChainNamespace(caipNetwork.chainNamespace)) {
			const providerType = ProviderController.getProviderId(networkNamespace);
			if (caipNetwork.chainNamespace === ChainController.state.activeChain) await this.getAdapter(networkNamespace)?.switchNetwork({ caipNetwork });
			else {
				this.setCaipNetwork(caipNetwork);
				if (providerType === ConstantsUtil$2.CONNECTOR_TYPE_WALLET_CONNECT) this.syncWalletConnectAccount();
				else {
					const address = this.getAddressByChainNamespace(networkNamespace);
					if (address) this.syncAccount({
						address,
						chainId: caipNetwork.id,
						chainNamespace: networkNamespace
					});
				}
			}
		} else this.setCaipNetwork(caipNetwork);
	}
	getChainsFromNamespaces(namespaces = {}) {
		return Object.values(namespaces).flatMap((namespace) => {
			const chains = namespace.chains || [];
			const accountsChains = namespace.accounts.map((account) => {
				const { chainId, chainNamespace } = ParseUtil.parseCaipAddress(account);
				return `${chainNamespace}:${chainId}`;
			});
			return Array.from(new Set([...chains, ...accountsChains]));
		});
	}
	createAdapters(blueprints) {
		this.createClients();
		return this.chainNamespaces.reduce((adapters, namespace) => {
			const blueprint = blueprints?.find((b) => b.namespace === namespace);
			if (blueprint) {
				blueprint.construct({
					namespace,
					projectId: this.options?.projectId,
					networks: this.caipNetworks?.filter(({ chainNamespace }) => chainNamespace === namespace)
				});
				adapters[namespace] = blueprint;
			} else adapters[namespace] = new UniversalAdapter({
				namespace,
				networks: this.getCaipNetworks()
			});
			return adapters;
		}, {});
	}
	async initChainAdapter(namespace) {
		this.onConnectors(namespace);
		this.listenAdapter(namespace);
		const adapter = this.getAdapter(namespace);
		if (!adapter) throw new Error("adapter not found");
		await adapter.syncConnectors();
		await this.createUniversalProviderForAdapter(namespace);
	}
	async initChainAdapters() {
		await Promise.all(this.chainNamespaces.map(async (namespace) => {
			await this.initChainAdapter(namespace);
		}));
		this.initAdapterController();
	}
	onConnectors(chainNamespace) {
		this.getAdapter(chainNamespace)?.on("connectors", this.setConnectors.bind(this));
	}
	listenAdapter(chainNamespace) {
		const adapter = this.getAdapter(chainNamespace);
		if (!adapter) return;
		const connectionStatus = StorageUtil.getConnectionStatus();
		if (OptionsController.state.enableReconnect === false) this.setStatus("disconnected", chainNamespace);
		else if (connectionStatus === "connected") this.setStatus("connecting", chainNamespace);
		else if (connectionStatus === "disconnected") {
			StorageUtil.clearAddressCache();
			this.setStatus(connectionStatus, chainNamespace);
		} else this.setStatus(connectionStatus, chainNamespace);
		adapter.on("switchNetwork", ({ address, chainId }) => {
			const caipNetwork = this.getCaipNetworks().find((n) => n.id.toString() === chainId.toString() || n.caipNetworkId.toString() === chainId.toString());
			const isSameNamespace = ChainController.state.activeChain === chainNamespace;
			const accountAddress = ChainController.state.chains.get(chainNamespace)?.accountState?.address;
			if (caipNetwork) {
				const account = isSameNamespace && address ? address : accountAddress;
				if (account) this.syncAccount({
					address: account,
					chainId: caipNetwork.id,
					chainNamespace
				});
			} else this.setUnsupportedNetwork(chainId);
		});
		adapter.on("disconnect", () => {
			const isMultiWallet = this.remoteFeatures.multiWallet;
			const allConnections = Array.from(ConnectionController.state.connections.values()).flat();
			this.onDisconnectNamespace({
				chainNamespace,
				closeModal: !isMultiWallet || allConnections.length === 0
			});
		});
		adapter.on("connections", (connections) => {
			this.setConnections(connections, chainNamespace);
		});
		adapter.on("pendingTransactions", () => {
			const address = this.getAddress(chainNamespace);
			const activeCaipNetwork = ChainController.state.activeCaipNetwork;
			if (!address || !activeCaipNetwork?.id) return;
			this.updateNativeBalance(address, activeCaipNetwork.id, activeCaipNetwork.chainNamespace);
		});
		adapter.on("accountChanged", ({ address, chainId, connector }) => {
			this.handlePreviousConnectorConnection(connector);
			const isActiveChain = ChainController.state.activeChain === chainNamespace;
			if (connector?.provider) {
				this.syncProvider({
					id: connector.id,
					type: connector.type,
					provider: connector?.provider,
					chainNamespace
				});
				this.syncConnectedWalletInfo(chainNamespace);
			}
			const namespaceNetworkId = ChainController.getNetworkData(chainNamespace)?.caipNetwork?.id;
			const syncAccountChainId = chainId || namespaceNetworkId;
			if (isActiveChain && syncAccountChainId) this.syncAccount({
				address,
				chainId: syncAccountChainId,
				chainNamespace
			});
			else if (!isActiveChain && syncAccountChainId) {
				this.syncAccountInfo(address, syncAccountChainId, chainNamespace);
				this.syncBalance({
					address,
					chainId: syncAccountChainId,
					chainNamespace
				});
			} else this.syncAccountInfo(address, chainId, chainNamespace);
			StorageUtil.addConnectedNamespace(chainNamespace);
		});
	}
	async handlePreviousConnectorConnection(connector) {
		const namespace = connector?.chain;
		const newConnectorId = connector?.id;
		const currentConnectorId = ConnectorController.getConnectorId(namespace);
		const isMultiWalletEnabled = OptionsController.state.remoteFeatures?.multiWallet;
		const shouldDisconnectPreviousConnector = namespace && newConnectorId && currentConnectorId && currentConnectorId !== newConnectorId && !isMultiWalletEnabled;
		try {
			if (shouldDisconnectPreviousConnector) await ConnectionController.disconnect({
				id: currentConnectorId,
				namespace
			});
		} catch (error) {
			console.warn("Error disconnecting previous connector", error);
		}
	}
	async createUniversalProviderForAdapter(chainNamespace) {
		await this.getUniversalProvider();
		if (this.universalProvider) await this.chainAdapters?.[chainNamespace]?.setUniversalProvider?.(this.universalProvider);
	}
	async syncExistingConnection() {
		await Promise.allSettled(this.chainNamespaces.map((namespace) => this.syncNamespaceConnection(namespace)));
	}
	async unSyncExistingConnection() {
		try {
			await Promise.allSettled(this.chainNamespaces.map((namespace) => ConnectionController.disconnect({
				namespace,
				initialDisconnect: true
			})));
		} catch (error) {
			console.error("Error disconnecting existing connections:", error);
		}
	}
	async reconnectWalletConnect() {
		await this.syncWalletConnectAccount();
		const address = this.getAddress();
		if (!this.getCaipAddress()) StorageUtil.deleteRecentWallet();
		const recentWallet = StorageUtil.getRecentWallet();
		EventsController.sendEvent({
			type: "track",
			event: "CONNECT_SUCCESS",
			address,
			properties: {
				method: CoreHelperUtil.isMobile() ? "mobile" : "qrcode",
				name: recentWallet?.name || "Unknown",
				reconnect: true,
				view: RouterController.state.view,
				walletRank: recentWallet?.order
			}
		});
	}
	async syncNamespaceConnection(namespace) {
		try {
			if (namespace === ConstantsUtil.CHAIN.EVM && CoreHelperUtil.isSafeApp()) ConnectorController.setConnectorId(ConstantsUtil.CONNECTOR_ID.SAFE, namespace);
			const connectorId = ConnectorController.getConnectorId(namespace);
			this.setStatus("connecting", namespace);
			switch (connectorId) {
				case ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT:
					await this.reconnectWalletConnect();
					break;
				case ConstantsUtil.CONNECTOR_ID.AUTH: break;
				default: await this.syncAdapterConnection(namespace);
			}
		} catch (err) {
			console.warn("AppKit couldn't sync existing connection", err);
			this.setStatus("disconnected", namespace);
		}
	}
	onDisconnectNamespace(options) {
		const { chainNamespace, closeModal } = options || {};
		ChainController.resetAccount(chainNamespace);
		ChainController.resetNetwork(chainNamespace);
		StorageUtil.removeConnectedNamespace(chainNamespace);
		const namespaces = Array.from(ChainController.state.chains.keys());
		(chainNamespace ? [chainNamespace] : namespaces).forEach((ns) => StorageUtil.addDisconnectedConnectorId(ConnectorController.getConnectorId(ns) || "", ns));
		ConnectorController.removeConnectorId(chainNamespace);
		ProviderController.resetChain(chainNamespace);
		this.setUser(null, chainNamespace);
		this.setStatus("disconnected", chainNamespace);
		this.setConnectedWalletInfo(null, chainNamespace);
		if (closeModal !== false) ModalController.close();
	}
	async syncAdapterConnections() {
		await Promise.allSettled(this.chainNamespaces.map((namespace) => {
			const adapter = this.getAdapter(namespace);
			const caipAddress = this.getCaipAddress(namespace);
			const caipNetwork = this.getCaipNetwork(namespace);
			return adapter?.syncConnections({
				connectToFirstConnector: !caipAddress,
				caipNetwork
			});
		}));
	}
	async syncAdapterConnection(namespace) {
		const adapter = this.getAdapter(namespace);
		const caipNetwork = this.getCaipNetwork(namespace);
		const connectorId = ConnectorController.getConnectorId(namespace);
		const connector = ConnectorController.getConnectors(namespace).find((c) => c.id === connectorId);
		try {
			if (!adapter || !connector) throw new Error(`Adapter or connector not found for namespace ${namespace}`);
			if (!caipNetwork?.id) throw new Error("CaipNetwork not found");
			const connection = await adapter?.syncConnection({
				namespace,
				id: connector.id,
				chainId: caipNetwork.id,
				rpcUrl: caipNetwork?.rpcUrls?.default?.http?.[0]
			});
			if (connection) {
				this.syncProvider({
					...connection,
					chainNamespace: namespace
				});
				await this.syncAccount({
					...connection,
					chainNamespace: namespace
				});
				this.setStatus("connected", namespace);
				EventsController.sendEvent({
					type: "track",
					event: "CONNECT_SUCCESS",
					address: connection.address,
					properties: {
						method: "browser",
						name: connector.info?.name || connector.name || "Unknown",
						reconnect: true,
						view: RouterController.state.view,
						walletRank: connector?.explorerWallet?.order
					}
				});
			} else this.setStatus("disconnected", namespace);
		} catch (e) {
			this.onDisconnectNamespace({
				chainNamespace: namespace,
				closeModal: false
			});
		}
	}
	async syncWalletConnectAccount() {
		const sessionNamespaces = Object.keys(this.universalProvider?.session?.namespaces || {});
		const syncTasks = this.chainNamespaces.map(async (chainNamespace) => {
			const adapter = this.getAdapter(chainNamespace);
			if (!adapter) return;
			const namespaceAccounts = this.universalProvider?.session?.namespaces?.[chainNamespace]?.accounts || [];
			const activeChainId = ChainController.state.activeCaipNetwork?.id;
			const sessionAddress = namespaceAccounts.find((account) => {
				const { chainId } = ParseUtil.parseCaipAddress(account);
				return chainId === activeChainId?.toString();
			}) || namespaceAccounts[0];
			if (sessionAddress) {
				const caipAddress = ParseUtil.validateCaipAddress(sessionAddress);
				const { chainId, address } = ParseUtil.parseCaipAddress(caipAddress);
				ProviderController.setProviderId(chainNamespace, ConstantsUtil$2.CONNECTOR_TYPE_WALLET_CONNECT);
				if (this.caipNetworks && ChainController.state.activeCaipNetwork && adapter.namespace !== ConstantsUtil.CHAIN.EVM) {
					const provider = adapter.getWalletConnectProvider({
						caipNetworks: this.getCaipNetworks(),
						provider: this.universalProvider,
						activeCaipNetwork: ChainController.state.activeCaipNetwork
					});
					ProviderController.setProvider(chainNamespace, provider);
				} else ProviderController.setProvider(chainNamespace, this.universalProvider);
				ConnectorController.setConnectorId(ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT, chainNamespace);
				StorageUtil.addConnectedNamespace(chainNamespace);
				await this.syncAccount({
					address,
					chainId,
					chainNamespace
				});
			} else if (sessionNamespaces.includes(chainNamespace)) this.setStatus("disconnected", chainNamespace);
			const data = this.getApprovedCaipNetworksData();
			this.syncConnectedWalletInfo(chainNamespace);
			ChainController.setApprovedCaipNetworksData(chainNamespace, {
				approvedCaipNetworkIds: data.approvedCaipNetworkIds,
				supportsAllNetworks: data.supportsAllNetworks
			});
		});
		await Promise.all(syncTasks);
	}
	syncProvider({ type, provider, id, chainNamespace }) {
		ProviderController.setProviderId(chainNamespace, type);
		ProviderController.setProvider(chainNamespace, provider);
		ConnectorController.setConnectorId(id, chainNamespace);
	}
	async syncAccount(params) {
		const isActiveNamespace = params.chainNamespace === ChainController.state.activeChain;
		const networkOfChain = ChainController.getCaipNetworkByNamespace(params.chainNamespace, params.chainId);
		const { address, chainId, chainNamespace } = params;
		const { chainId: activeChainId } = StorageUtil.getActiveNetworkProps();
		const chainIdToUse = networkOfChain?.id || activeChainId;
		const isUnsupportedNetwork = ChainController.state.activeCaipNetwork?.name === ConstantsUtil.UNSUPPORTED_NETWORK_NAME;
		const shouldSupportAllNetworks = ChainController.getNetworkProp("supportsAllNetworks", chainNamespace);
		this.setStatus("connected", chainNamespace);
		if (isUnsupportedNetwork && !shouldSupportAllNetworks) return;
		if (chainIdToUse) {
			let caipNetwork = this.getCaipNetworks().find((n) => n.id.toString() === chainIdToUse.toString());
			let fallbackCaipNetwork = this.getCaipNetworks().find((n) => n.chainNamespace === chainNamespace);
			if (!shouldSupportAllNetworks && !caipNetwork && !fallbackCaipNetwork) {
				const caipNetworkIds = this.getApprovedCaipNetworkIds() || [];
				const caipNetworkId = caipNetworkIds.find((id) => ParseUtil.parseCaipNetworkId(id)?.chainId === chainIdToUse.toString());
				const fallBackCaipNetworkId = caipNetworkIds.find((id) => ParseUtil.parseCaipNetworkId(id)?.chainNamespace === chainNamespace);
				caipNetwork = this.getCaipNetworks().find((n) => n.caipNetworkId === caipNetworkId);
				fallbackCaipNetwork = this.getCaipNetworks().find((n) => n.caipNetworkId === fallBackCaipNetworkId || "deprecatedCaipNetworkId" in n && n.deprecatedCaipNetworkId === fallBackCaipNetworkId);
			}
			const network = caipNetwork || fallbackCaipNetwork;
			if (network?.chainNamespace === ChainController.state.activeChain) if (OptionsController.state.enableNetworkSwitch && !OptionsController.state.allowUnsupportedChain && ChainController.state.activeCaipNetwork?.name === ConstantsUtil.UNSUPPORTED_NETWORK_NAME) ChainController.showUnsupportedChainUI();
			else this.setCaipNetwork(network);
			else if (!isActiveNamespace) {
				if (networkOfChain) this.setCaipNetworkOfNamespace(networkOfChain, chainNamespace);
			}
			this.syncConnectedWalletInfo(chainNamespace);
			const currentAddress = this.getAddress(chainNamespace);
			if (!HelpersUtil.isLowerCaseMatch(address, currentAddress)) this.syncAccountInfo(address, network?.id, chainNamespace);
			if (isActiveNamespace) await this.syncBalance({
				address,
				chainId: network?.id,
				chainNamespace
			});
			else await this.syncBalance({
				address,
				chainId: networkOfChain?.id,
				chainNamespace
			});
			this.syncIdentity({
				address,
				chainId,
				chainNamespace
			});
		}
	}
	async syncAccountInfo(address, chainId, chainNamespace) {
		const caipAddress = this.getCaipAddress(chainNamespace);
		const newChainId = chainId || caipAddress?.split(":")[1];
		if (!newChainId) return;
		const newCaipAddress = `${chainNamespace}:${newChainId}:${address}`;
		this.setCaipAddress(newCaipAddress, chainNamespace, true);
		await this.syncIdentity({
			address,
			chainId: newChainId,
			chainNamespace
		});
	}
	async syncReownName(address, chainNamespace) {
		try {
			const registeredWcNames = await this.getReownName(address);
			if (registeredWcNames[0]) {
				const wcName = registeredWcNames[0];
				this.setProfileName(wcName.name, chainNamespace);
			} else this.setProfileName(null, chainNamespace);
		} catch {
			this.setProfileName(null, chainNamespace);
		}
	}
	syncConnectedWalletInfo(chainNamespace) {
		const connectorId = ConnectorController.getConnectorId(chainNamespace);
		const providerType = ProviderController.getProviderId(chainNamespace);
		if (providerType === ConstantsUtil$2.CONNECTOR_TYPE_ANNOUNCED || providerType === ConstantsUtil$2.CONNECTOR_TYPE_INJECTED) {
			if (connectorId) {
				const connector = this.getConnectors().find((c) => {
					const isConnectorId = c.id === connectorId;
					const isRdns = c.info?.rdns === connectorId;
					const hasMultiChainConnector = c.connectors?.some((_c) => _c.id === connectorId || _c.info?.rdns === connectorId);
					return isConnectorId || isRdns || Boolean(hasMultiChainConnector);
				});
				if (connector) {
					const { info, name, imageUrl } = connector;
					const icon = imageUrl || this.getConnectorImage(connector);
					this.setConnectedWalletInfo({
						name,
						icon,
						...info
					}, chainNamespace);
				}
			}
		} else if (providerType === ConstantsUtil$2.CONNECTOR_TYPE_WALLET_CONNECT) {
			const provider = ProviderController.getProvider(chainNamespace);
			if (provider?.session) this.setConnectedWalletInfo({
				...provider.session.peer.metadata,
				name: provider.session.peer.metadata.name,
				icon: provider.session.peer.metadata.icons?.[0]
			}, chainNamespace);
		} else if (connectorId) {
			if (connectorId === ConstantsUtil.CONNECTOR_ID.COINBASE_SDK || connectorId === ConstantsUtil.CONNECTOR_ID.COINBASE) {
				const connector = this.getConnectors().find((c) => c.id === connectorId);
				const name = connector?.name || "Coinbase Wallet";
				const icon = connector?.imageUrl || this.getConnectorImage(connector);
				const info = connector?.info;
				this.setConnectedWalletInfo({
					...info,
					name,
					icon
				}, chainNamespace);
			}
		}
	}
	async syncBalance(params) {
		if (!NetworkUtil.getNetworksByNamespace(this.getCaipNetworks(), params.chainNamespace).find((n) => n.id.toString() === params.chainId?.toString()) || !params.chainId) return;
		await this.updateNativeBalance(params.address, params.chainId, params.chainNamespace);
	}
	async ready() {
		await this.readyPromise;
	}
	async updateNativeBalance(address, chainId, namespace) {
		const adapter = this.getAdapter(namespace);
		const caipNetwork = ChainController.getCaipNetworkByNamespace(namespace, chainId);
		if (adapter) {
			const balance = await adapter.getBalance({
				address,
				chainId,
				caipNetwork,
				tokens: this.options.tokens
			});
			this.setBalance(balance.balance, balance.symbol, namespace);
			return balance;
		}
	}
	async initializeUniversalAdapter() {
		const logger = LoggerUtil.createLogger((error, ...args) => {
			if (error) this.handleAlertError(error);
			console.error(...args);
		});
		const universalProviderOptions = {
			projectId: this.options?.projectId,
			metadata: {
				name: this.options?.metadata ? this.options?.metadata.name : "",
				description: this.options?.metadata ? this.options?.metadata.description : "",
				url: this.options?.metadata ? this.options?.metadata.url : "",
				icons: this.options?.metadata ? this.options?.metadata.icons : [""]
			},
			logger
		};
		OptionsController.setManualWCControl(Boolean(this.options?.manualWCControl));
		this.universalProvider = this.options.universalProvider ?? await N.init(universalProviderOptions);
		const originalDisconnect = this.universalProvider.disconnect.bind(this.universalProvider);
		this.universalProvider.disconnect = async () => {
			try {
				return await originalDisconnect();
			} catch (error) {
				if (error instanceof Error) {
					if (error.message.includes("Missing or invalid. Record was recently deleted")) return;
				}
				throw error;
			}
		};
		if (OptionsController.state.enableReconnect === false && this.universalProvider.session) await this.universalProvider.disconnect();
		this.listenWalletConnect();
	}
	listenWalletConnect() {
		if (this.universalProvider) this.chainNamespaces.forEach((namespace) => {
			WcHelpersUtil.listenWcProvider({
				universalProvider: this.universalProvider,
				namespace,
				onDisplayUri: (uri) => {
					ConnectionController.setUri(uri);
				},
				onConnect: (accounts) => {
					const { address } = CoreHelperUtil.getAccount(accounts[0]);
					for (const namespace$1 of this.chainNamespaces) StorageUtil.removeDisconnectedConnectorId(ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT, namespace$1);
					ConnectionController.finalizeWcConnection(address);
				},
				onDisconnect: () => {
					if (ChainController.state.noAdapters) this.resetAccount(namespace);
					ConnectionController.resetWcConnection();
				},
				onChainChanged: (chainId) => {
					const activeNamespace = ChainController.state.activeChain;
					const isCurrentConnectorWalletConnect = activeNamespace && ConnectorController.state.activeConnectorIds[activeNamespace] === ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT;
					if (activeNamespace === namespace && (ChainController.state.noAdapters || isCurrentConnectorWalletConnect)) {
						const caipNetwork = this.getCaipNetworks().find((n) => n.id.toString() === chainId.toString() || n.caipNetworkId.toString() === chainId.toString());
						const currentCaipNetwork = this.getCaipNetwork();
						if (!caipNetwork) {
							this.setUnsupportedNetwork(chainId);
							return;
						}
						if (currentCaipNetwork?.id.toString() !== caipNetwork?.id.toString() && currentCaipNetwork?.chainNamespace === caipNetwork?.chainNamespace) this.setCaipNetwork(caipNetwork);
					}
				},
				onAccountsChanged: (accounts) => {
					const activeNamespace = ChainController.state.activeChain;
					const isCurrentConnectorWalletConnect = activeNamespace && ConnectorController.state.activeConnectorIds[activeNamespace] === ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT;
					if (activeNamespace === namespace && (ChainController.state.noAdapters || isCurrentConnectorWalletConnect)) {
						const account = accounts?.[0];
						if (account) this.syncAccount({
							address: account.address,
							chainId: account.chainId,
							chainNamespace: account.chainNamespace
						});
					}
				}
			});
		});
	}
	createUniversalProvider() {
		if (!this.universalProviderInitPromise && CoreHelperUtil.isClient() && this.options?.projectId) this.universalProviderInitPromise = this.initializeUniversalAdapter();
		return this.universalProviderInitPromise;
	}
	async getUniversalProvider() {
		if (!this.universalProvider) try {
			await this.createUniversalProvider();
		} catch (err) {
			EventsController.sendEvent({
				type: "error",
				event: "INTERNAL_SDK_ERROR",
				properties: {
					errorType: "UniversalProviderInitError",
					errorMessage: err instanceof Error ? err.message : "Unknown",
					uncaught: false
				}
			});
			console.error("AppKit:getUniversalProvider - Cannot create provider", err);
		}
		return this.universalProvider;
	}
	getDisabledCaipNetworks() {
		const approvedCaipNetworkIds = ChainController.getAllApprovedCaipNetworkIds();
		const requestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
		return CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks).filter((network) => ChainController.isCaipNetworkDisabled(network));
	}
	handleAlertError(error) {
		const [errorKey, errorValue] = Object.entries(ErrorUtil.UniversalProviderErrors).find(([, { message: message$1 }]) => error.message.includes(message$1)) ?? [];
		const { message, alertErrorKey } = errorValue ?? {};
		if (errorKey && message && !this.reportedAlertErrors[errorKey]) {
			const alertError = ErrorUtil.ALERT_ERRORS[alertErrorKey];
			if (alertError) {
				AlertController.open(alertError, "error");
				this.reportedAlertErrors[errorKey] = true;
			}
		}
	}
	getAdapter(namespace) {
		if (!namespace) return;
		return this.chainAdapters?.[namespace];
	}
	createAdapter(blueprint) {
		if (!blueprint) return;
		const namespace = blueprint.namespace;
		if (!namespace) return;
		this.createClients();
		const adapterBlueprint = blueprint;
		adapterBlueprint.namespace = namespace;
		adapterBlueprint.construct({
			namespace,
			projectId: this.options?.projectId,
			networks: this.caipNetworks?.filter(({ chainNamespace }) => chainNamespace === namespace)
		});
		if (!this.chainNamespaces.includes(namespace)) this.chainNamespaces.push(namespace);
		if (this.chainAdapters) this.chainAdapters[namespace] = adapterBlueprint;
	}
	async open(options) {
		await this.injectModalUi();
		if (options?.uri) ConnectionController.setUri(options.uri);
		const { isSwap, isSend } = this.toModalOptions();
		if (isSwap(options)) return ModalController.open({
			...options,
			data: { swap: options.arguments }
		});
		else if (isSend(options)) {
			if (options.arguments) return this.openSend(options.arguments);
		}
		return ModalController.open(options);
	}
	async close() {
		await this.injectModalUi();
		ModalController.close();
	}
	setLoading(loading, namespace) {
		ModalController.setLoading(loading, namespace);
	}
	async disconnect(chainNamespace) {
		await ConnectionController.disconnect({ namespace: chainNamespace });
	}
	getSIWX() {
		return OptionsController.state.siwx;
	}
	getError() {
		return "";
	}
	getChainId() {
		return ChainController.state.activeCaipNetwork?.id;
	}
	async switchNetwork(appKitNetwork, { throwOnFailure = false } = {}) {
		const network = this.getCaipNetworks().find((n) => n.id === appKitNetwork.id);
		if (!network) {
			AlertController.open(ErrorUtil.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND, "error");
			return;
		}
		await ChainController.switchActiveNetwork(network, { throwOnFailure });
	}
	getWalletProvider() {
		return ChainController.state.activeChain ? ProviderController.state.providers[ChainController.state.activeChain] : null;
	}
	getWalletProviderType() {
		return ProviderController.getProviderId(ChainController.state.activeChain);
	}
	subscribeProviders(callback) {
		return ProviderController.subscribeProviders(callback);
	}
	getThemeMode() {
		return ThemeController.state.themeMode;
	}
	getThemeVariables() {
		return ThemeController.state.themeVariables;
	}
	setThemeMode(themeMode) {
		ThemeController.setThemeMode(themeMode);
		setColorTheme(ThemeController.state.themeMode);
	}
	setTermsConditionsUrl(termsConditionsUrl) {
		OptionsController.setTermsConditionsUrl(termsConditionsUrl);
	}
	setPrivacyPolicyUrl(privacyPolicyUrl) {
		OptionsController.setPrivacyPolicyUrl(privacyPolicyUrl);
	}
	setThemeVariables(themeVariables) {
		ThemeController.setThemeVariables(themeVariables);
		setThemeVariables(ThemeController.state.themeVariables);
	}
	subscribeTheme(callback) {
		return ThemeController.subscribe(callback);
	}
	subscribeConnections(callback) {
		if (!this.remoteFeatures.multiWallet) {
			AlertController.open(ConstantsUtil.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
			return () => void 0;
		}
		return ConnectionController.subscribe(callback);
	}
	getWalletInfo(namespace) {
		if (namespace) return ChainController.state.chains.get(namespace)?.accountState?.connectedWalletInfo;
		return ChainController.getAccountData()?.connectedWalletInfo;
	}
	getAccount(_namespace) {
		const namespace = _namespace || ChainController.state.activeChain;
		const authConnector = ConnectorController.getAuthConnector(namespace);
		const accountState = ChainController.getAccountData(namespace);
		const activeConnectorId = StorageUtil.getConnectedConnectorId(ChainController.state.activeChain);
		const connections = ConnectionController.getConnections(namespace);
		if (!namespace) throw new Error("AppKit:getAccount - namespace is required");
		const allAccounts = connections.flatMap((connection) => connection.accounts.map(({ address, type, publicKey }) => CoreHelperUtil.createAccount(namespace, address, type || "eoa", publicKey)));
		if (!accountState) return;
		return {
			allAccounts,
			caipAddress: accountState.caipAddress,
			address: CoreHelperUtil.getPlainAddress(accountState.caipAddress),
			isConnected: Boolean(accountState.caipAddress),
			status: accountState.status,
			embeddedWalletInfo: authConnector && activeConnectorId === ConstantsUtil.CONNECTOR_ID.AUTH ? {
				user: accountState.user ? {
					...accountState.user,
					username: StorageUtil.getConnectedSocialUsername()
				} : void 0,
				authProvider: accountState.socialProvider || "email",
				accountType: getPreferredAccountType(namespace),
				isSmartAccountDeployed: Boolean(accountState.smartAccountDeployed)
			} : void 0
		};
	}
	subscribeAccount(callback, namespace) {
		const unsubArr = [];
		const updateVal = () => {
			const account = this.getAccount(namespace);
			if (!account) return;
			callback(account);
		};
		if (namespace) {
			const unsub$1 = ChainController.subscribeChainProp("accountState", updateVal, namespace);
			unsubArr.push(unsub$1);
		} else {
			const unsub$1 = ChainController.subscribe(updateVal);
			unsubArr.push(unsub$1);
		}
		const unsub = ConnectorController.subscribe(updateVal);
		unsubArr.push(unsub);
		return () => {
			unsubArr.forEach((fn) => fn());
		};
	}
	subscribeNetwork(callback) {
		return ChainController.subscribe(({ activeCaipNetwork }) => {
			callback({
				caipNetwork: activeCaipNetwork,
				chainId: activeCaipNetwork?.id,
				caipNetworkId: activeCaipNetwork?.caipNetworkId
			});
		});
	}
	subscribeWalletInfo(callback, namespace) {
		if (namespace) return ChainController.subscribeChainProp("accountState", (accountState) => callback(accountState?.connectedWalletInfo), namespace);
		return ChainController.subscribeChainProp("accountState", (accountState) => callback(accountState?.connectedWalletInfo));
	}
	subscribeShouldUpdateToAddress(callback) {
		return ChainController.subscribeChainProp("accountState", (accountState) => callback(accountState?.shouldUpdateToAddress));
	}
	subscribeCaipNetworkChange(callback) {
		return ChainController.subscribeKey("activeCaipNetwork", callback);
	}
	getState() {
		return PublicStateController.state;
	}
	getRemoteFeatures() {
		return OptionsController.state.remoteFeatures;
	}
	subscribeState(callback) {
		return PublicStateController.subscribe(callback);
	}
	subscribeRemoteFeatures(callback) {
		return OptionsController.subscribeKey("remoteFeatures", callback);
	}
	showErrorMessage(message) {
		SnackController.showError(message);
	}
	showSuccessMessage(message) {
		SnackController.showSuccess(message);
	}
	getEvent() {
		return { ...EventsController.state };
	}
	subscribeEvents(callback) {
		return EventsController.subscribe(callback);
	}
	replace(route) {
		RouterController.replace(route);
	}
	redirect(route) {
		RouterController.push(route);
	}
	popTransactionStack(status) {
		RouterController.popTransactionStack(status);
	}
	isOpen() {
		return ModalController.state.open;
	}
	isTransactionStackEmpty() {
		return RouterController.state.transactionStack.length === 0;
	}
	static getInstance() {
		return this.instance;
	}
	updateFeatures(newFeatures) {
		OptionsController.setFeatures(newFeatures);
	}
	updateRemoteFeatures(newRemoteFeatures) {
		OptionsController.setRemoteFeatures(newRemoteFeatures);
	}
	updateOptions(newOptions) {
		const updatedOptions = {
			...OptionsController.state || {},
			...newOptions
		};
		OptionsController.setOptions(updatedOptions);
	}
	setConnectMethodsOrder(connectMethodsOrder) {
		OptionsController.setConnectMethodsOrder(connectMethodsOrder);
	}
	setWalletFeaturesOrder(walletFeaturesOrder) {
		OptionsController.setWalletFeaturesOrder(walletFeaturesOrder);
	}
	setCollapseWallets(collapseWallets) {
		OptionsController.setCollapseWallets(collapseWallets);
	}
	setSocialsOrder(socialsOrder) {
		OptionsController.setSocialsOrder(socialsOrder);
	}
	getConnectMethodsOrder() {
		return WalletUtil.getConnectOrderMethod(OptionsController.state.features, ConnectorController.getConnectors());
	}
	addNetwork(namespace, network) {
		if (this.chainAdapters && !this.chainAdapters[namespace]) throw new Error(`Adapter for namespace ${namespace} doesn't exist`);
		const extendedNetwork = this.extendCaipNetwork(network, this.options);
		if (!this.getCaipNetworks().find((n) => n.id === extendedNetwork.id)) ChainController.addNetwork(extendedNetwork);
	}
	removeNetwork(namespace, networkId) {
		if (this.chainAdapters && !this.chainAdapters[namespace]) throw new Error(`Adapter for namespace ${namespace} doesn't exist`);
		if (!this.getCaipNetworks().find((n) => n.id === networkId)) return;
		ChainController.removeNetwork(namespace, networkId);
	}
};
var isInitialized = false;
var AppKit = class extends AppKitBaseClient {
	async open(options) {
		if (!ConnectorController.isConnected()) await super.open(options);
	}
	async close() {
		await super.close();
		if (this.options.manualWCControl) {
			const address = ChainController.getAccountData(this.activeChainNamespace)?.address;
			ConnectionController.finalizeWcConnection(address);
		}
	}
	async syncIdentity(_request) {
		return Promise.resolve();
	}
	async syncBalance(_params) {
		return Promise.resolve();
	}
	async injectModalUi() {
		if (!isInitialized && CoreHelperUtil.isClient()) {
			await __vitePreload(() => import("./basic-CnXGgm4k.js"), __vite__mapDeps([7,2,3,8,4,5,9,1,6,10]));
			await __vitePreload(() => import("./w3m-modal-O10vnVdg.js"), __vite__mapDeps([11,8,4,2,3,5,9,12,1,13,6]));
			if (!document.querySelector("w3m-modal")) {
				const modal = document.createElement("w3m-modal");
				if (!OptionsController.state.disableAppend && !OptionsController.state.enableEmbedded) document.body.insertAdjacentElement("beforeend", modal);
			}
			isInitialized = true;
		}
	}
};
const PACKAGE_VERSION = "1.8.17-wc-circular-dependencies-fix.0";
function createAppKit(options) {
	return new AppKit({
		...options,
		basic: true,
		sdkVersion: `html-core-${PACKAGE_VERSION}`
	});
}
export { createAppKit };
