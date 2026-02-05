import "./_esm-HNYTU_9C.js";
import "./secp256k1-BIzL0Wcw.js";
import { bt as __toESM, ht as __commonJSMin, t as require_dijkstra } from "./index-DyWZJLu5.js";
import { C as SnackController, D as AppKitError, E as AssetController, H as ErrorUtil, J as ConstantsUtil$1, M as StorageUtil, N as ConstantsUtil, T as AssetUtil, b as ConnectorUtil, c as ConnectionController, g as ModalController, h as ThemeController, j as CoreHelperUtil, k as OptionsController, l as ConnectionControllerUtil, m as ConnectorController, n as ChainController, t as ApiController, v as EventsController, x as WalletUtil, y as RouterController } from "./ApiController-CiOqeP8H.js";
import "./ccip-DF0yNisM.js";
import { S as i$1, _ as b, a as elementStyles, i as UiHelperUtil, m as A, p as i, r as customElement, s as resetStyles, t as HelpersUtil, u as css, v as j, y as w } from "./HelpersUtil-Cjy5EJXT.js";
import { a as t, c as n, i as i$2, o, r as e$1, s as r, t as networkSvgMd } from "./wui-list-item-BhoVffgt.js";
import { t as CaipNetworksUtil } from "./CaipNetworkUtil-COs_Mo6A.js";
var __decorate$28 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var W3mAllWalletsWidget = class W3mAllWalletsWidget$1 extends i {
	constructor() {
		super();
		this.unsubscribe = [];
		this.tabIdx = void 0;
		this.connectors = ConnectorController.state.connectors;
		this.count = ApiController.state.count;
		this.filteredCount = ApiController.state.filteredWallets.length;
		this.isFetchingRecommendedWallets = ApiController.state.isFetchingRecommendedWallets;
		this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val), ApiController.subscribeKey("count", (val) => this.count = val), ApiController.subscribeKey("filteredWallets", (val) => this.filteredCount = val.length), ApiController.subscribeKey("isFetchingRecommendedWallets", (val) => this.isFetchingRecommendedWallets = val));
	}
	disconnectedCallback() {
		this.unsubscribe.forEach((unsubscribe) => unsubscribe());
	}
	render() {
		const wcConnector = this.connectors.find((c$2) => c$2.id === "walletConnect");
		const { allWallets } = OptionsController.state;
		if (!wcConnector || allWallets === "HIDE") return null;
		if (allWallets === "ONLY_MOBILE" && !CoreHelperUtil.isMobile()) return null;
		const featuredCount = ApiController.state.featured.length;
		const rawCount = this.count + featuredCount;
		const roundedCount = rawCount < 10 ? rawCount : Math.floor(rawCount / 10) * 10;
		const count = this.filteredCount > 0 ? this.filteredCount : roundedCount;
		let tagLabel = `${count}`;
		if (this.filteredCount > 0) tagLabel = `${this.filteredCount}`;
		else if (count < rawCount) tagLabel = `${count}+`;
		const hasWcConnection = ConnectionController.hasAnyConnection(ConstantsUtil$1.CONNECTOR_ID.WALLET_CONNECT);
		return b`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${tagLabel}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${o(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${hasWcConnection}
        size="sm"
      ></wui-list-wallet>
    `;
	}
	onAllWallets() {
		EventsController.sendEvent({
			type: "track",
			event: "CLICK_ALL_WALLETS"
		});
		RouterController.push("AllWallets", { redirectView: RouterController.state.data?.redirectView });
	}
};
__decorate$28([n()], W3mAllWalletsWidget.prototype, "tabIdx", void 0);
__decorate$28([r()], W3mAllWalletsWidget.prototype, "connectors", void 0);
__decorate$28([r()], W3mAllWalletsWidget.prototype, "count", void 0);
__decorate$28([r()], W3mAllWalletsWidget.prototype, "filteredCount", void 0);
__decorate$28([r()], W3mAllWalletsWidget.prototype, "isFetchingRecommendedWallets", void 0);
W3mAllWalletsWidget = __decorate$28([customElement("w3m-all-wallets-widget")], W3mAllWalletsWidget);
var styles_default$18 = css`
  :host {
    margin-top: ${({ spacing }) => spacing["1"]};
  }
  wui-separator {
    margin: ${({ spacing }) => spacing["3"]} calc(${({ spacing }) => spacing["3"]} * -1)
      ${({ spacing }) => spacing["2"]} calc(${({ spacing }) => spacing["3"]} * -1);
    width: calc(100% + ${({ spacing }) => spacing["3"]} * 2);
  }
`;
var __decorate$27 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var W3mConnectorList = class W3mConnectorList$1 extends i {
	constructor() {
		super();
		this.unsubscribe = [];
		this.explorerWallets = ApiController.state.explorerWallets;
		this.connections = ConnectionController.state.connections;
		this.connectorImages = AssetController.state.connectorImages;
		this.loadingTelegram = false;
		this.unsubscribe.push(ConnectionController.subscribeKey("connections", (val) => this.connections = val), AssetController.subscribeKey("connectorImages", (val) => this.connectorImages = val), ApiController.subscribeKey("explorerFilteredWallets", (val) => {
			this.explorerWallets = val?.length ? val : ApiController.state.explorerWallets;
		}), ApiController.subscribeKey("explorerWallets", (val) => {
			if (!this.explorerWallets?.length) this.explorerWallets = val;
		}));
		if (CoreHelperUtil.isTelegram() && CoreHelperUtil.isIos()) {
			this.loadingTelegram = !ConnectionController.state.wcUri;
			this.unsubscribe.push(ConnectionController.subscribeKey("wcUri", (val) => this.loadingTelegram = !val));
		}
	}
	disconnectedCallback() {
		this.unsubscribe.forEach((unsubscribe) => unsubscribe());
	}
	render() {
		return b`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `;
	}
	connectorListTemplate() {
		return ConnectorUtil.connectorList().map((item, displayIndex) => {
			if (item.kind === "connector") return this.renderConnector(item, displayIndex);
			return this.renderWallet(item, displayIndex);
		});
	}
	getConnectorNamespaces(item) {
		if (item.subtype === "walletConnect") return [];
		if (item.subtype === "multiChain") return item.connector.connectors?.map((c$2) => c$2.chain) || [];
		return [item.connector.chain];
	}
	renderConnector(item, index) {
		const connector = item.connector;
		const imageSrc = AssetUtil.getConnectorImage(connector) || this.connectorImages[connector?.imageId ?? ""];
		const isAlreadyConnected = (this.connections.get(connector.chain) ?? []).some((c$2) => HelpersUtil.isLowerCaseMatch(c$2.connectorId, connector.id));
		let tagLabel = void 0;
		let tagVariant = void 0;
		if (item.subtype === "walletConnect") {
			tagLabel = "qr code";
			tagVariant = "accent";
		} else if (item.subtype === "injected" || item.subtype === "announced") {
			tagLabel = isAlreadyConnected ? "connected" : "installed";
			tagVariant = isAlreadyConnected ? "info" : "success";
		} else {
			tagLabel = void 0;
			tagVariant = void 0;
		}
		const hasWcConnection = ConnectionController.hasAnyConnection(ConstantsUtil$1.CONNECTOR_ID.WALLET_CONNECT);
		const disabled = item.subtype === "walletConnect" || item.subtype === "external" ? hasWcConnection : false;
		return b`
      <w3m-list-wallet
        displayIndex=${index}
        imageSrc=${o(imageSrc)}
        .installed=${true}
        name=${connector.name ?? "Unknown"}
        .tagVariant=${tagVariant}
        tagLabel=${o(tagLabel)}
        data-testid=${`wallet-selector-${connector.id.toLowerCase()}`}
        size="sm"
        @click=${() => this.onClickConnector(item)}
        tabIdx=${o(this.tabIdx)}
        ?disabled=${disabled}
        rdnsId=${o(connector.explorerWallet?.rdns || void 0)}
        walletRank=${o(connector.explorerWallet?.order)}
        .namespaces=${this.getConnectorNamespaces(item)}
      >
      </w3m-list-wallet>
    `;
	}
	onClickConnector(item) {
		const redirectView = RouterController.state.data?.redirectView;
		if (item.subtype === "walletConnect") {
			ConnectorController.setActiveConnector(item.connector);
			if (CoreHelperUtil.isMobile()) RouterController.push("AllWallets");
			else RouterController.push("ConnectingWalletConnect", { redirectView });
			return;
		}
		if (item.subtype === "multiChain") {
			ConnectorController.setActiveConnector(item.connector);
			RouterController.push("ConnectingMultiChain", { redirectView });
			return;
		}
		if (item.subtype === "injected") {
			ConnectorController.setActiveConnector(item.connector);
			RouterController.push("ConnectingExternal", {
				connector: item.connector,
				redirectView,
				wallet: item.connector.explorerWallet
			});
			return;
		}
		if (item.subtype === "announced") {
			if (item.connector.id === "walletConnect") {
				if (CoreHelperUtil.isMobile()) RouterController.push("AllWallets");
				else RouterController.push("ConnectingWalletConnect", { redirectView });
				return;
			}
			RouterController.push("ConnectingExternal", {
				connector: item.connector,
				redirectView,
				wallet: item.connector.explorerWallet
			});
			return;
		}
		RouterController.push("ConnectingExternal", {
			connector: item.connector,
			redirectView
		});
	}
	renderWallet(item, index) {
		const wallet = item.wallet;
		const imageSrc = AssetUtil.getWalletImage(wallet);
		const disabled = ConnectionController.hasAnyConnection(ConstantsUtil$1.CONNECTOR_ID.WALLET_CONNECT);
		const loading = this.loadingTelegram;
		const tagLabel = item.subtype === "recent" ? "recent" : void 0;
		const tagVariant = item.subtype === "recent" ? "info" : void 0;
		return b`
      <w3m-list-wallet
        displayIndex=${index}
        imageSrc=${o(imageSrc)}
        name=${wallet.name ?? "Unknown"}
        @click=${() => this.onClickWallet(item)}
        size="sm"
        data-testid=${`wallet-selector-${wallet.id}`}
        tabIdx=${o(this.tabIdx)}
        ?loading=${loading}
        ?disabled=${disabled}
        rdnsId=${o(wallet.rdns || void 0)}
        walletRank=${o(wallet.order)}
        tagLabel=${o(tagLabel)}
        .tagVariant=${tagVariant}
      >
      </w3m-list-wallet>
    `;
	}
	onClickWallet(item) {
		const redirectView = RouterController.state.data?.redirectView;
		const namespace = ChainController.state.activeChain;
		if (item.subtype === "featured") {
			ConnectorController.selectWalletConnector(item.wallet);
			return;
		}
		if (item.subtype === "recent") {
			if (this.loadingTelegram) return;
			ConnectorController.selectWalletConnector(item.wallet);
			return;
		}
		if (item.subtype === "custom") {
			if (this.loadingTelegram) return;
			RouterController.push("ConnectingWalletConnect", {
				wallet: item.wallet,
				redirectView
			});
			return;
		}
		if (this.loadingTelegram) return;
		const connector = namespace ? ConnectorController.getConnector({
			id: item.wallet.id,
			namespace
		}) : void 0;
		if (connector) RouterController.push("ConnectingExternal", {
			connector,
			redirectView
		});
		else RouterController.push("ConnectingWalletConnect", {
			wallet: item.wallet,
			redirectView
		});
	}
};
W3mConnectorList.styles = styles_default$18;
__decorate$27([n({ type: Number })], W3mConnectorList.prototype, "tabIdx", void 0);
__decorate$27([r()], W3mConnectorList.prototype, "explorerWallets", void 0);
__decorate$27([r()], W3mConnectorList.prototype, "connections", void 0);
__decorate$27([r()], W3mConnectorList.prototype, "connectorImages", void 0);
__decorate$27([r()], W3mConnectorList.prototype, "loadingTelegram", void 0);
W3mConnectorList = __decorate$27([customElement("w3m-connector-list")], W3mConnectorList);
var styles_default$17 = css`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({ spacing }) => spacing[1]} ${({ spacing }) => spacing[2]};
    column-gap: ${({ spacing }) => spacing[1]};
    color: ${({ tokens }) => tokens.theme.textSecondary};
    border-radius: ${({ borderRadius }) => borderRadius[20]};
    background-color: transparent;
    transition: background-color ${({ durations }) => durations["lg"]}
      ${({ easings }) => easings["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({ tokens }) => tokens.theme.textPrimary};
    background-color: ${({ tokens }) => tokens.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({ tokens }) => tokens.theme.textPrimary};
    }
  }
`;
var __decorate$26 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var TEXT_VARIANT_BY_SIZE = {
	lg: "lg-regular",
	md: "md-regular",
	sm: "sm-regular"
};
var ICON_SIZE = {
	lg: "md",
	md: "sm",
	sm: "sm"
};
var WuiTab = class WuiTab$1 extends i {
	constructor() {
		super(...arguments);
		this.icon = "mobile";
		this.size = "md";
		this.label = "";
		this.active = false;
	}
	render() {
		return b`
      <button data-active=${this.active}>
        ${this.icon ? b`<wui-icon size=${ICON_SIZE[this.size]} name=${this.icon}></wui-icon>` : ""}
        <wui-text variant=${TEXT_VARIANT_BY_SIZE[this.size]}> ${this.label} </wui-text>
      </button>
    `;
	}
};
WuiTab.styles = [
	resetStyles,
	elementStyles,
	styles_default$17
];
__decorate$26([n()], WuiTab.prototype, "icon", void 0);
__decorate$26([n()], WuiTab.prototype, "size", void 0);
__decorate$26([n()], WuiTab.prototype, "label", void 0);
__decorate$26([n({ type: Boolean })], WuiTab.prototype, "active", void 0);
WuiTab = __decorate$26([customElement("wui-tab-item")], WuiTab);
var styles_default$16 = css`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    border-radius: ${({ borderRadius }) => borderRadius[32]};
    padding: ${({ spacing }) => spacing["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;
var __decorate$25 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var WuiTabs = class WuiTabs$1 extends i {
	constructor() {
		super(...arguments);
		this.tabs = [];
		this.onTabChange = () => null;
		this.size = "md";
		this.activeTab = 0;
	}
	render() {
		this.dataset["size"] = this.size;
		return this.tabs.map((tab, index) => {
			const isActive = index === this.activeTab;
			return b`
        <wui-tab-item
          @click=${() => this.onTabClick(index)}
          icon=${tab.icon}
          size=${this.size}
          label=${tab.label}
          ?active=${isActive}
          data-active=${isActive}
          data-testid="tab-${tab.label?.toLowerCase()}"
        ></wui-tab-item>
      `;
		});
	}
	onTabClick(index) {
		this.activeTab = index;
		this.onTabChange(index);
	}
};
WuiTabs.styles = [
	resetStyles,
	elementStyles,
	styles_default$16
];
__decorate$25([n({ type: Array })], WuiTabs.prototype, "tabs", void 0);
__decorate$25([n()], WuiTabs.prototype, "onTabChange", void 0);
__decorate$25([n()], WuiTabs.prototype, "size", void 0);
__decorate$25([r()], WuiTabs.prototype, "activeTab", void 0);
WuiTabs = __decorate$25([customElement("wui-tabs")], WuiTabs);
var __decorate$24 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var W3mConnectingHeader = class W3mConnectingHeader$1 extends i {
	constructor() {
		super(...arguments);
		this.platformTabs = [];
		this.unsubscribe = [];
		this.platforms = [];
		this.onSelectPlatfrom = void 0;
	}
	disconnectCallback() {
		this.unsubscribe.forEach((unsubscribe) => unsubscribe());
	}
	render() {
		return b`
      <wui-flex justifyContent="center" .padding=${[
			"0",
			"0",
			"4",
			"0"
		]}>
        <wui-tabs .tabs=${this.generateTabs()} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `;
	}
	generateTabs() {
		const tabs = this.platforms.map((platform) => {
			if (platform === "browser") return {
				label: "Browser",
				icon: "extension",
				platform: "browser"
			};
			else if (platform === "mobile") return {
				label: "Mobile",
				icon: "mobile",
				platform: "mobile"
			};
			else if (platform === "qrcode") return {
				label: "Mobile",
				icon: "mobile",
				platform: "qrcode"
			};
			else if (platform === "web") return {
				label: "Webapp",
				icon: "browser",
				platform: "web"
			};
			else if (platform === "desktop") return {
				label: "Desktop",
				icon: "desktop",
				platform: "desktop"
			};
			return {
				label: "Browser",
				icon: "extension",
				platform: "unsupported"
			};
		});
		this.platformTabs = tabs.map(({ platform }) => platform);
		return tabs;
	}
	onTabChange(index) {
		const tab = this.platformTabs[index];
		if (tab) this.onSelectPlatfrom?.(tab);
	}
};
__decorate$24([n({ type: Array })], W3mConnectingHeader.prototype, "platforms", void 0);
__decorate$24([n()], W3mConnectingHeader.prototype, "onSelectPlatfrom", void 0);
W3mConnectingHeader = __decorate$24([customElement("w3m-connecting-header")], W3mConnectingHeader);
var styles_default$15 = css`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${(tokens) => tokens.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;
var __decorate$23 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var WuiLoadingThumbnail = class WuiLoadingThumbnail$1 extends i {
	constructor() {
		super(...arguments);
		this.radius = 36;
	}
	render() {
		return this.svgLoaderTemplate();
	}
	svgLoaderTemplate() {
		const radius = this.radius > 50 ? 50 : this.radius;
		const radiusFactor = 36 - radius;
		return b`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${radius}
          stroke-dasharray="${116 + radiusFactor} ${245 + radiusFactor}"
          stroke-dashoffset=${360 + radiusFactor * 1.75}
        />
      </svg>
    `;
	}
};
WuiLoadingThumbnail.styles = [resetStyles, styles_default$15];
__decorate$23([n({ type: Number })], WuiLoadingThumbnail.prototype, "radius", void 0);
WuiLoadingThumbnail = __decorate$23([customElement("wui-loading-thumbnail")], WuiLoadingThumbnail);
var styles_default$14 = css`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[5]};
    padding-left: ${({ spacing }) => spacing[3]};
    padding-right: ${({ spacing }) => spacing[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ spacing }) => spacing[6]};
  }

  wui-text {
    color: ${({ tokens }) => tokens.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;
var __decorate$22 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var WuiCtaButton = class WuiCtaButton$1 extends i {
	constructor() {
		super(...arguments);
		this.disabled = false;
		this.label = "";
		this.buttonLabel = "";
	}
	render() {
		return b`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `;
	}
};
WuiCtaButton.styles = [
	resetStyles,
	elementStyles,
	styles_default$14
];
__decorate$22([n({ type: Boolean })], WuiCtaButton.prototype, "disabled", void 0);
__decorate$22([n()], WuiCtaButton.prototype, "label", void 0);
__decorate$22([n()], WuiCtaButton.prototype, "buttonLabel", void 0);
WuiCtaButton = __decorate$22([customElement("wui-cta-button")], WuiCtaButton);
var styles_default$13 = css`
  :host {
    display: block;
    padding: 0 ${({ spacing }) => spacing["5"]} ${({ spacing }) => spacing["5"]};
  }
`;
var __decorate$21 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var W3mMobileDownloadLinks = class W3mMobileDownloadLinks$1 extends i {
	constructor() {
		super(...arguments);
		this.wallet = void 0;
	}
	render() {
		if (!this.wallet) {
			this.style.display = "none";
			return null;
		}
		const { name, app_store, play_store, chrome_store, homepage } = this.wallet;
		const isMobile = CoreHelperUtil.isMobile();
		const isIos = CoreHelperUtil.isIos();
		const isAndroid = CoreHelperUtil.isAndroid();
		const isMultiple = [
			app_store,
			play_store,
			homepage,
			chrome_store
		].filter(Boolean).length > 1;
		const shortName = UiHelperUtil.getTruncateString({
			string: name,
			charsStart: 12,
			charsEnd: 0,
			truncate: "end"
		});
		if (isMultiple && !isMobile) return b`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${() => RouterController.push("Downloads", { wallet: this.wallet })}
        ></wui-cta-button>
      `;
		if (!isMultiple && homepage) return b`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `;
		if (app_store && isIos) return b`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `;
		if (play_store && isAndroid) return b`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `;
		this.style.display = "none";
		return null;
	}
	onAppStore() {
		if (this.wallet?.app_store) CoreHelperUtil.openHref(this.wallet.app_store, "_blank");
	}
	onPlayStore() {
		if (this.wallet?.play_store) CoreHelperUtil.openHref(this.wallet.play_store, "_blank");
	}
	onHomePage() {
		if (this.wallet?.homepage) CoreHelperUtil.openHref(this.wallet.homepage, "_blank");
	}
};
W3mMobileDownloadLinks.styles = [styles_default$13];
__decorate$21([n({ type: Object })], W3mMobileDownloadLinks.prototype, "wallet", void 0);
W3mMobileDownloadLinks = __decorate$21([customElement("w3m-mobile-download-links")], W3mMobileDownloadLinks);
var styles_default$12 = css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({ spacing }) => spacing["1"]} * -1);
    bottom: calc(${({ spacing }) => spacing["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({ durations }) => durations["lg"]};
    transition-timing-function: ${({ easings }) => easings["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({ spacing }) => spacing["4"]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({ easings }) => easings["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;
var __decorate$20 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var W3mConnectingWidget = class extends i {
	constructor() {
		super();
		this.wallet = RouterController.state.data?.wallet;
		this.connector = RouterController.state.data?.connector;
		this.timeout = void 0;
		this.secondaryBtnIcon = "refresh";
		this.onConnect = void 0;
		this.onRender = void 0;
		this.onAutoConnect = void 0;
		this.isWalletConnect = true;
		this.unsubscribe = [];
		this.imageSrc = AssetUtil.getConnectorImage(this.connector) ?? AssetUtil.getWalletImage(this.wallet);
		this.name = this.wallet?.name ?? this.connector?.name ?? "Wallet";
		this.isRetrying = false;
		this.uri = ConnectionController.state.wcUri;
		this.error = ConnectionController.state.wcError;
		this.ready = false;
		this.showRetry = false;
		this.label = void 0;
		this.secondaryBtnLabel = "Try again";
		this.secondaryLabel = "Accept connection request in the wallet";
		this.isLoading = false;
		this.isMobile = false;
		this.onRetry = void 0;
		this.unsubscribe.push(...[ConnectionController.subscribeKey("wcUri", (val) => {
			this.uri = val;
			if (this.isRetrying && this.onRetry) {
				this.isRetrying = false;
				this.onConnect?.();
			}
		}), ConnectionController.subscribeKey("wcError", (val) => this.error = val)]);
		if ((CoreHelperUtil.isTelegram() || CoreHelperUtil.isSafari()) && CoreHelperUtil.isIos() && ConnectionController.state.wcUri) this.onConnect?.();
	}
	firstUpdated() {
		this.onAutoConnect?.();
		this.showRetry = !this.onAutoConnect;
	}
	disconnectedCallback() {
		this.unsubscribe.forEach((unsubscribe) => unsubscribe());
		ConnectionController.setWcError(false);
		clearTimeout(this.timeout);
	}
	render() {
		this.onRender?.();
		this.onShowRetry();
		const subLabel = this.error ? "Connection can be declined if a previous request is still active" : this.secondaryLabel;
		let label = "";
		if (this.label) label = this.label;
		else {
			label = `Continue in ${this.name}`;
			if (this.error) label = "Connection declined";
		}
		return b`
      <wui-flex
        data-error=${o(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${[
			"10",
			"5",
			"5",
			"5"
		]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${o(this.imageSrc)}></wui-wallet-image>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${[
			"2",
			"0",
			"0",
			"0"
		]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error ? "error" : "primary"}>
            ${label}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${subLabel}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel ? b`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying || this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              ` : null}
      </wui-flex>

      ${this.isWalletConnect ? b`
              <wui-flex .padding=${[
			"0",
			"5",
			"5",
			"5"
		]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            ` : null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `;
	}
	onShowRetry() {
		if (this.error && !this.showRetry) {
			this.showRetry = true;
			(this.shadowRoot?.querySelector("wui-button"))?.animate([{ opacity: 0 }, { opacity: 1 }], {
				fill: "forwards",
				easing: "ease"
			});
		}
	}
	onTryAgain() {
		ConnectionController.setWcError(false);
		if (this.onRetry) {
			this.isRetrying = true;
			this.onRetry?.();
		} else this.onConnect?.();
	}
	loaderTemplate() {
		const borderRadiusMaster = ThemeController.state.themeVariables["--w3m-border-radius-master"];
		return b`<wui-loading-thumbnail radius=${(borderRadiusMaster ? parseInt(borderRadiusMaster.replace("px", ""), 10) : 4) * 9}></wui-loading-thumbnail>`;
	}
	onCopyUri() {
		try {
			if (this.uri) {
				CoreHelperUtil.copyToClopboard(this.uri);
				SnackController.showSuccess("Link copied");
			}
		} catch {
			SnackController.showError("Failed to copy");
		}
	}
};
W3mConnectingWidget.styles = styles_default$12;
__decorate$20([r()], W3mConnectingWidget.prototype, "isRetrying", void 0);
__decorate$20([r()], W3mConnectingWidget.prototype, "uri", void 0);
__decorate$20([r()], W3mConnectingWidget.prototype, "error", void 0);
__decorate$20([r()], W3mConnectingWidget.prototype, "ready", void 0);
__decorate$20([r()], W3mConnectingWidget.prototype, "showRetry", void 0);
__decorate$20([r()], W3mConnectingWidget.prototype, "label", void 0);
__decorate$20([r()], W3mConnectingWidget.prototype, "secondaryBtnLabel", void 0);
__decorate$20([r()], W3mConnectingWidget.prototype, "secondaryLabel", void 0);
__decorate$20([r()], W3mConnectingWidget.prototype, "isLoading", void 0);
__decorate$20([n({ type: Boolean })], W3mConnectingWidget.prototype, "isMobile", void 0);
__decorate$20([n()], W3mConnectingWidget.prototype, "onRetry", void 0);
var __decorate$19 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var W3mConnectingWcBrowser = class W3mConnectingWcBrowser$1 extends W3mConnectingWidget {
	constructor() {
		super();
		if (!this.wallet) throw new Error("w3m-connecting-wc-browser: No wallet provided");
		this.onConnect = this.onConnectProxy.bind(this);
		this.onAutoConnect = this.onConnectProxy.bind(this);
		EventsController.sendEvent({
			type: "track",
			event: "SELECT_WALLET",
			properties: {
				name: this.wallet.name,
				platform: "browser",
				displayIndex: this.wallet?.display_index,
				walletRank: this.wallet.order,
				view: RouterController.state.view
			}
		});
	}
	async onConnectProxy() {
		try {
			this.error = false;
			const { connectors } = ConnectorController.state;
			const connector = connectors.find((c$2) => c$2.type === "ANNOUNCED" && c$2.info?.rdns === this.wallet?.rdns || c$2.type === "INJECTED" || c$2.name === this.wallet?.name);
			if (connector) await ConnectionController.connectExternal(connector, connector.chain);
			else throw new Error("w3m-connecting-wc-browser: No connector found");
			ModalController.close();
		} catch (error) {
			if (error instanceof AppKitError && error.originalName === ErrorUtil.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST) EventsController.sendEvent({
				type: "track",
				event: "USER_REJECTED",
				properties: { message: error.message }
			});
			else EventsController.sendEvent({
				type: "track",
				event: "CONNECT_ERROR",
				properties: { message: error?.message ?? "Unknown" }
			});
			this.error = true;
		}
	}
};
W3mConnectingWcBrowser = __decorate$19([customElement("w3m-connecting-wc-browser")], W3mConnectingWcBrowser);
var __decorate$18 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var W3mConnectingWcDesktop = class W3mConnectingWcDesktop$1 extends W3mConnectingWidget {
	constructor() {
		super();
		if (!this.wallet) throw new Error("w3m-connecting-wc-desktop: No wallet provided");
		this.onConnect = this.onConnectProxy.bind(this);
		this.onRender = this.onRenderProxy.bind(this);
		EventsController.sendEvent({
			type: "track",
			event: "SELECT_WALLET",
			properties: {
				name: this.wallet.name,
				platform: "desktop",
				displayIndex: this.wallet?.display_index,
				walletRank: this.wallet.order,
				view: RouterController.state.view
			}
		});
	}
	onRenderProxy() {
		if (!this.ready && this.uri) {
			this.ready = true;
			this.onConnect?.();
		}
	}
	onConnectProxy() {
		if (this.wallet?.desktop_link && this.uri) try {
			this.error = false;
			const { desktop_link, name } = this.wallet;
			const { redirect, href } = CoreHelperUtil.formatNativeUrl(desktop_link, this.uri);
			ConnectionController.setWcLinking({
				name,
				href
			});
			ConnectionController.setRecentWallet(this.wallet);
			CoreHelperUtil.openHref(redirect, "_blank");
		} catch {
			this.error = true;
		}
	}
};
W3mConnectingWcDesktop = __decorate$18([customElement("w3m-connecting-wc-desktop")], W3mConnectingWcDesktop);
var __decorate$17 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var W3mConnectingWcMobile = class W3mConnectingWcMobile$1 extends W3mConnectingWidget {
	constructor() {
		super();
		this.btnLabelTimeout = void 0;
		this.redirectDeeplink = void 0;
		this.redirectUniversalLink = void 0;
		this.target = void 0;
		this.preferUniversalLinks = OptionsController.state.experimental_preferUniversalLinks;
		this.isLoading = true;
		this.onConnect = () => {
			ConnectionControllerUtil.onConnectMobile(this.wallet);
		};
		if (!this.wallet) throw new Error("w3m-connecting-wc-mobile: No wallet provided");
		this.secondaryBtnLabel = "Open";
		this.secondaryLabel = ConstantsUtil.CONNECT_LABELS.MOBILE;
		this.secondaryBtnIcon = "externalLink";
		this.onHandleURI();
		this.unsubscribe.push(ConnectionController.subscribeKey("wcUri", () => {
			this.onHandleURI();
		}));
		EventsController.sendEvent({
			type: "track",
			event: "SELECT_WALLET",
			properties: {
				name: this.wallet.name,
				platform: "mobile",
				displayIndex: this.wallet?.display_index,
				walletRank: this.wallet.order,
				view: RouterController.state.view
			}
		});
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		clearTimeout(this.btnLabelTimeout);
	}
	onHandleURI() {
		this.isLoading = !this.uri;
		if (!this.ready && this.uri) {
			this.ready = true;
			this.onConnect?.();
		}
	}
	onTryAgain() {
		ConnectionController.setWcError(false);
		this.onConnect?.();
	}
};
__decorate$17([r()], W3mConnectingWcMobile.prototype, "redirectDeeplink", void 0);
__decorate$17([r()], W3mConnectingWcMobile.prototype, "redirectUniversalLink", void 0);
__decorate$17([r()], W3mConnectingWcMobile.prototype, "target", void 0);
__decorate$17([r()], W3mConnectingWcMobile.prototype, "preferUniversalLinks", void 0);
__decorate$17([r()], W3mConnectingWcMobile.prototype, "isLoading", void 0);
W3mConnectingWcMobile = __decorate$17([customElement("w3m-connecting-wc-mobile")], W3mConnectingWcMobile);
var require_can_promise = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function() {
		return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
	};
}));
var require_utils$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var toSJISFunction;
	var CODEWORDS_COUNT = [
		0,
		26,
		44,
		70,
		100,
		134,
		172,
		196,
		242,
		292,
		346,
		404,
		466,
		532,
		581,
		655,
		733,
		815,
		901,
		991,
		1085,
		1156,
		1258,
		1364,
		1474,
		1588,
		1706,
		1828,
		1921,
		2051,
		2185,
		2323,
		2465,
		2611,
		2761,
		2876,
		3034,
		3196,
		3362,
		3532,
		3706
	];
	exports.getSymbolSize = function getSymbolSize$2(version) {
		if (!version) throw new Error("\"version\" cannot be null or undefined");
		if (version < 1 || version > 40) throw new Error("\"version\" should be in range from 1 to 40");
		return version * 4 + 17;
	};
	exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
		return CODEWORDS_COUNT[version];
	};
	exports.getBCHDigit = function(data) {
		let digit = 0;
		while (data !== 0) {
			digit++;
			data >>>= 1;
		}
		return digit;
	};
	exports.setToSJISFunction = function setToSJISFunction(f$2) {
		if (typeof f$2 !== "function") throw new Error("\"toSJISFunc\" is not a valid function.");
		toSJISFunction = f$2;
	};
	exports.isKanjiModeEnabled = function() {
		return typeof toSJISFunction !== "undefined";
	};
	exports.toSJIS = function toSJIS(kanji$1) {
		return toSJISFunction(kanji$1);
	};
}));
var require_error_correction_level = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.L = { bit: 1 };
	exports.M = { bit: 0 };
	exports.Q = { bit: 3 };
	exports.H = { bit: 2 };
	function fromString$1(string) {
		if (typeof string !== "string") throw new Error("Param is not a string");
		switch (string.toLowerCase()) {
			case "l":
			case "low": return exports.L;
			case "m":
			case "medium": return exports.M;
			case "q":
			case "quartile": return exports.Q;
			case "h":
			case "high": return exports.H;
			default: throw new Error("Unknown EC Level: " + string);
		}
	}
	exports.isValid = function isValid(level) {
		return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
	};
	exports.from = function from(value, defaultValue) {
		if (exports.isValid(value)) return value;
		try {
			return fromString$1(value);
		} catch (e$3) {
			return defaultValue;
		}
	};
}));
var require_bit_buffer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function BitBuffer$1() {
		this.buffer = [];
		this.length = 0;
	}
	BitBuffer$1.prototype = {
		get: function(index) {
			const bufIndex = Math.floor(index / 8);
			return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
		},
		put: function(num, length) {
			for (let i$4 = 0; i$4 < length; i$4++) this.putBit((num >>> length - i$4 - 1 & 1) === 1);
		},
		getLengthInBits: function() {
			return this.length;
		},
		putBit: function(bit) {
			const bufIndex = Math.floor(this.length / 8);
			if (this.buffer.length <= bufIndex) this.buffer.push(0);
			if (bit) this.buffer[bufIndex] |= 128 >>> this.length % 8;
			this.length++;
		}
	};
	module.exports = BitBuffer$1;
}));
var require_bit_matrix = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function BitMatrix$1(size) {
		if (!size || size < 1) throw new Error("BitMatrix size must be defined and greater than 0");
		this.size = size;
		this.data = new Uint8Array(size * size);
		this.reservedBit = new Uint8Array(size * size);
	}
	BitMatrix$1.prototype.set = function(row, col, value, reserved) {
		const index = row * this.size + col;
		this.data[index] = value;
		if (reserved) this.reservedBit[index] = true;
	};
	BitMatrix$1.prototype.get = function(row, col) {
		return this.data[row * this.size + col];
	};
	BitMatrix$1.prototype.xor = function(row, col, value) {
		this.data[row * this.size + col] ^= value;
	};
	BitMatrix$1.prototype.isReserved = function(row, col) {
		return this.reservedBit[row * this.size + col];
	};
	module.exports = BitMatrix$1;
}));
var require_alignment_pattern = /* @__PURE__ */ __commonJSMin(((exports) => {
	var getSymbolSize$1 = require_utils$1().getSymbolSize;
	exports.getRowColCoords = function getRowColCoords(version) {
		if (version === 1) return [];
		const posCount = Math.floor(version / 7) + 2;
		const size = getSymbolSize$1(version);
		const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
		const positions = [size - 7];
		for (let i$4 = 1; i$4 < posCount - 1; i$4++) positions[i$4] = positions[i$4 - 1] - intervals;
		positions.push(6);
		return positions.reverse();
	};
	exports.getPositions = function getPositions(version) {
		const coords = [];
		const pos = exports.getRowColCoords(version);
		const posLength = pos.length;
		for (let i$4 = 0; i$4 < posLength; i$4++) for (let j$2 = 0; j$2 < posLength; j$2++) {
			if (i$4 === 0 && j$2 === 0 || i$4 === 0 && j$2 === posLength - 1 || i$4 === posLength - 1 && j$2 === 0) continue;
			coords.push([pos[i$4], pos[j$2]]);
		}
		return coords;
	};
}));
var require_finder_pattern = /* @__PURE__ */ __commonJSMin(((exports) => {
	var getSymbolSize = require_utils$1().getSymbolSize;
	var FINDER_PATTERN_SIZE = 7;
	exports.getPositions = function getPositions(version) {
		const size = getSymbolSize(version);
		return [
			[0, 0],
			[size - FINDER_PATTERN_SIZE, 0],
			[0, size - FINDER_PATTERN_SIZE]
		];
	};
}));
var require_mask_pattern = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.Patterns = {
		PATTERN000: 0,
		PATTERN001: 1,
		PATTERN010: 2,
		PATTERN011: 3,
		PATTERN100: 4,
		PATTERN101: 5,
		PATTERN110: 6,
		PATTERN111: 7
	};
	var PenaltyScores = {
		N1: 3,
		N2: 3,
		N3: 40,
		N4: 10
	};
	exports.isValid = function isValid(mask) {
		return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
	};
	exports.from = function from(value) {
		return exports.isValid(value) ? parseInt(value, 10) : void 0;
	};
	exports.getPenaltyN1 = function getPenaltyN1(data) {
		const size = data.size;
		let points = 0;
		let sameCountCol = 0;
		let sameCountRow = 0;
		let lastCol = null;
		let lastRow = null;
		for (let row = 0; row < size; row++) {
			sameCountCol = sameCountRow = 0;
			lastCol = lastRow = null;
			for (let col = 0; col < size; col++) {
				let module$1 = data.get(row, col);
				if (module$1 === lastCol) sameCountCol++;
				else {
					if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
					lastCol = module$1;
					sameCountCol = 1;
				}
				module$1 = data.get(col, row);
				if (module$1 === lastRow) sameCountRow++;
				else {
					if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
					lastRow = module$1;
					sameCountRow = 1;
				}
			}
			if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
			if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
		}
		return points;
	};
	exports.getPenaltyN2 = function getPenaltyN2(data) {
		const size = data.size;
		let points = 0;
		for (let row = 0; row < size - 1; row++) for (let col = 0; col < size - 1; col++) {
			const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
			if (last === 4 || last === 0) points++;
		}
		return points * PenaltyScores.N2;
	};
	exports.getPenaltyN3 = function getPenaltyN3(data) {
		const size = data.size;
		let points = 0;
		let bitsCol = 0;
		let bitsRow = 0;
		for (let row = 0; row < size; row++) {
			bitsCol = bitsRow = 0;
			for (let col = 0; col < size; col++) {
				bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
				if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
				bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
				if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
			}
		}
		return points * PenaltyScores.N3;
	};
	exports.getPenaltyN4 = function getPenaltyN4(data) {
		let darkCount = 0;
		const modulesCount = data.data.length;
		for (let i$4 = 0; i$4 < modulesCount; i$4++) darkCount += data.data[i$4];
		return Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10) * PenaltyScores.N4;
	};
	function getMaskAt(maskPattern, i$4, j$2) {
		switch (maskPattern) {
			case exports.Patterns.PATTERN000: return (i$4 + j$2) % 2 === 0;
			case exports.Patterns.PATTERN001: return i$4 % 2 === 0;
			case exports.Patterns.PATTERN010: return j$2 % 3 === 0;
			case exports.Patterns.PATTERN011: return (i$4 + j$2) % 3 === 0;
			case exports.Patterns.PATTERN100: return (Math.floor(i$4 / 2) + Math.floor(j$2 / 3)) % 2 === 0;
			case exports.Patterns.PATTERN101: return i$4 * j$2 % 2 + i$4 * j$2 % 3 === 0;
			case exports.Patterns.PATTERN110: return (i$4 * j$2 % 2 + i$4 * j$2 % 3) % 2 === 0;
			case exports.Patterns.PATTERN111: return (i$4 * j$2 % 3 + (i$4 + j$2) % 2) % 2 === 0;
			default: throw new Error("bad maskPattern:" + maskPattern);
		}
	}
	exports.applyMask = function applyMask(pattern, data) {
		const size = data.size;
		for (let col = 0; col < size; col++) for (let row = 0; row < size; row++) {
			if (data.isReserved(row, col)) continue;
			data.xor(row, col, getMaskAt(pattern, row, col));
		}
	};
	exports.getBestMask = function getBestMask(data, setupFormatFunc) {
		const numPatterns = Object.keys(exports.Patterns).length;
		let bestPattern = 0;
		let lowerPenalty = Infinity;
		for (let p$1 = 0; p$1 < numPatterns; p$1++) {
			setupFormatFunc(p$1);
			exports.applyMask(p$1, data);
			const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
			exports.applyMask(p$1, data);
			if (penalty < lowerPenalty) {
				lowerPenalty = penalty;
				bestPattern = p$1;
			}
		}
		return bestPattern;
	};
}));
var require_error_correction_code = /* @__PURE__ */ __commonJSMin(((exports) => {
	var ECLevel$2 = require_error_correction_level();
	var EC_BLOCKS_TABLE = [
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		2,
		2,
		1,
		2,
		2,
		4,
		1,
		2,
		4,
		4,
		2,
		4,
		4,
		4,
		2,
		4,
		6,
		5,
		2,
		4,
		6,
		6,
		2,
		5,
		8,
		8,
		4,
		5,
		8,
		8,
		4,
		5,
		8,
		11,
		4,
		8,
		10,
		11,
		4,
		9,
		12,
		16,
		4,
		9,
		16,
		16,
		6,
		10,
		12,
		18,
		6,
		10,
		17,
		16,
		6,
		11,
		16,
		19,
		6,
		13,
		18,
		21,
		7,
		14,
		21,
		25,
		8,
		16,
		20,
		25,
		8,
		17,
		23,
		25,
		9,
		17,
		23,
		34,
		9,
		18,
		25,
		30,
		10,
		20,
		27,
		32,
		12,
		21,
		29,
		35,
		12,
		23,
		34,
		37,
		12,
		25,
		34,
		40,
		13,
		26,
		35,
		42,
		14,
		28,
		38,
		45,
		15,
		29,
		40,
		48,
		16,
		31,
		43,
		51,
		17,
		33,
		45,
		54,
		18,
		35,
		48,
		57,
		19,
		37,
		51,
		60,
		19,
		38,
		53,
		63,
		20,
		40,
		56,
		66,
		21,
		43,
		59,
		70,
		22,
		45,
		62,
		74,
		24,
		47,
		65,
		77,
		25,
		49,
		68,
		81
	];
	var EC_CODEWORDS_TABLE = [
		7,
		10,
		13,
		17,
		10,
		16,
		22,
		28,
		15,
		26,
		36,
		44,
		20,
		36,
		52,
		64,
		26,
		48,
		72,
		88,
		36,
		64,
		96,
		112,
		40,
		72,
		108,
		130,
		48,
		88,
		132,
		156,
		60,
		110,
		160,
		192,
		72,
		130,
		192,
		224,
		80,
		150,
		224,
		264,
		96,
		176,
		260,
		308,
		104,
		198,
		288,
		352,
		120,
		216,
		320,
		384,
		132,
		240,
		360,
		432,
		144,
		280,
		408,
		480,
		168,
		308,
		448,
		532,
		180,
		338,
		504,
		588,
		196,
		364,
		546,
		650,
		224,
		416,
		600,
		700,
		224,
		442,
		644,
		750,
		252,
		476,
		690,
		816,
		270,
		504,
		750,
		900,
		300,
		560,
		810,
		960,
		312,
		588,
		870,
		1050,
		336,
		644,
		952,
		1110,
		360,
		700,
		1020,
		1200,
		390,
		728,
		1050,
		1260,
		420,
		784,
		1140,
		1350,
		450,
		812,
		1200,
		1440,
		480,
		868,
		1290,
		1530,
		510,
		924,
		1350,
		1620,
		540,
		980,
		1440,
		1710,
		570,
		1036,
		1530,
		1800,
		570,
		1064,
		1590,
		1890,
		600,
		1120,
		1680,
		1980,
		630,
		1204,
		1770,
		2100,
		660,
		1260,
		1860,
		2220,
		720,
		1316,
		1950,
		2310,
		750,
		1372,
		2040,
		2430
	];
	exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
		switch (errorCorrectionLevel) {
			case ECLevel$2.L: return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
			case ECLevel$2.M: return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
			case ECLevel$2.Q: return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
			case ECLevel$2.H: return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
			default: return;
		}
	};
	exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
		switch (errorCorrectionLevel) {
			case ECLevel$2.L: return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
			case ECLevel$2.M: return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
			case ECLevel$2.Q: return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
			case ECLevel$2.H: return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
			default: return;
		}
	};
}));
var require_galois_field = /* @__PURE__ */ __commonJSMin(((exports) => {
	var EXP_TABLE = new Uint8Array(512);
	var LOG_TABLE = new Uint8Array(256);
	(function initTables() {
		let x = 1;
		for (let i$4 = 0; i$4 < 255; i$4++) {
			EXP_TABLE[i$4] = x;
			LOG_TABLE[x] = i$4;
			x <<= 1;
			if (x & 256) x ^= 285;
		}
		for (let i$4 = 255; i$4 < 512; i$4++) EXP_TABLE[i$4] = EXP_TABLE[i$4 - 255];
	})();
	exports.log = function log(n$4) {
		if (n$4 < 1) throw new Error("log(" + n$4 + ")");
		return LOG_TABLE[n$4];
	};
	exports.exp = function exp(n$4) {
		return EXP_TABLE[n$4];
	};
	exports.mul = function mul(x, y) {
		if (x === 0 || y === 0) return 0;
		return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
	};
}));
var require_polynomial = /* @__PURE__ */ __commonJSMin(((exports) => {
	var GF = require_galois_field();
	exports.mul = function mul(p1, p2) {
		const coeff = new Uint8Array(p1.length + p2.length - 1);
		for (let i$4 = 0; i$4 < p1.length; i$4++) for (let j$2 = 0; j$2 < p2.length; j$2++) coeff[i$4 + j$2] ^= GF.mul(p1[i$4], p2[j$2]);
		return coeff;
	};
	exports.mod = function mod(divident, divisor) {
		let result = new Uint8Array(divident);
		while (result.length - divisor.length >= 0) {
			const coeff = result[0];
			for (let i$4 = 0; i$4 < divisor.length; i$4++) result[i$4] ^= GF.mul(divisor[i$4], coeff);
			let offset = 0;
			while (offset < result.length && result[offset] === 0) offset++;
			result = result.slice(offset);
		}
		return result;
	};
	exports.generateECPolynomial = function generateECPolynomial(degree) {
		let poly = new Uint8Array([1]);
		for (let i$4 = 0; i$4 < degree; i$4++) poly = exports.mul(poly, new Uint8Array([1, GF.exp(i$4)]));
		return poly;
	};
}));
var require_reed_solomon_encoder = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Polynomial = require_polynomial();
	function ReedSolomonEncoder$1(degree) {
		this.genPoly = void 0;
		this.degree = degree;
		if (this.degree) this.initialize(this.degree);
	}
	ReedSolomonEncoder$1.prototype.initialize = function initialize(degree) {
		this.degree = degree;
		this.genPoly = Polynomial.generateECPolynomial(this.degree);
	};
	ReedSolomonEncoder$1.prototype.encode = function encode(data) {
		if (!this.genPoly) throw new Error("Encoder not initialized");
		const paddedData = new Uint8Array(data.length + this.degree);
		paddedData.set(data);
		const remainder = Polynomial.mod(paddedData, this.genPoly);
		const start = this.degree - remainder.length;
		if (start > 0) {
			const buff = new Uint8Array(this.degree);
			buff.set(remainder, start);
			return buff;
		}
		return remainder;
	};
	module.exports = ReedSolomonEncoder$1;
}));
var require_version_check = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.isValid = function isValid(version) {
		return !isNaN(version) && version >= 1 && version <= 40;
	};
}));
var require_regex = /* @__PURE__ */ __commonJSMin(((exports) => {
	var numeric = "[0-9]+";
	var alphanumeric = "[A-Z $%*+\\-./:]+";
	var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
	kanji = kanji.replace(/u/g, "\\u");
	var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
	exports.KANJI = new RegExp(kanji, "g");
	exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
	exports.BYTE = new RegExp(byte, "g");
	exports.NUMERIC = new RegExp(numeric, "g");
	exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
	var TEST_KANJI = /* @__PURE__ */ new RegExp("^" + kanji + "$");
	var TEST_NUMERIC = /* @__PURE__ */ new RegExp("^" + numeric + "$");
	var TEST_ALPHANUMERIC = /* @__PURE__ */ new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
	exports.testKanji = function testKanji(str) {
		return TEST_KANJI.test(str);
	};
	exports.testNumeric = function testNumeric(str) {
		return TEST_NUMERIC.test(str);
	};
	exports.testAlphanumeric = function testAlphanumeric(str) {
		return TEST_ALPHANUMERIC.test(str);
	};
}));
var require_mode = /* @__PURE__ */ __commonJSMin(((exports) => {
	var VersionCheck$1 = require_version_check();
	var Regex$1 = require_regex();
	exports.NUMERIC = {
		id: "Numeric",
		bit: 1,
		ccBits: [
			10,
			12,
			14
		]
	};
	exports.ALPHANUMERIC = {
		id: "Alphanumeric",
		bit: 2,
		ccBits: [
			9,
			11,
			13
		]
	};
	exports.BYTE = {
		id: "Byte",
		bit: 4,
		ccBits: [
			8,
			16,
			16
		]
	};
	exports.KANJI = {
		id: "Kanji",
		bit: 8,
		ccBits: [
			8,
			10,
			12
		]
	};
	exports.MIXED = { bit: -1 };
	exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
		if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
		if (!VersionCheck$1.isValid(version)) throw new Error("Invalid version: " + version);
		if (version >= 1 && version < 10) return mode.ccBits[0];
		else if (version < 27) return mode.ccBits[1];
		return mode.ccBits[2];
	};
	exports.getBestModeForData = function getBestModeForData(dataStr) {
		if (Regex$1.testNumeric(dataStr)) return exports.NUMERIC;
		else if (Regex$1.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
		else if (Regex$1.testKanji(dataStr)) return exports.KANJI;
		else return exports.BYTE;
	};
	exports.toString = function toString(mode) {
		if (mode && mode.id) return mode.id;
		throw new Error("Invalid mode");
	};
	exports.isValid = function isValid(mode) {
		return mode && mode.bit && mode.ccBits;
	};
	function fromString(string) {
		if (typeof string !== "string") throw new Error("Param is not a string");
		switch (string.toLowerCase()) {
			case "numeric": return exports.NUMERIC;
			case "alphanumeric": return exports.ALPHANUMERIC;
			case "kanji": return exports.KANJI;
			case "byte": return exports.BYTE;
			default: throw new Error("Unknown mode: " + string);
		}
	}
	exports.from = function from(value, defaultValue) {
		if (exports.isValid(value)) return value;
		try {
			return fromString(value);
		} catch (e$3) {
			return defaultValue;
		}
	};
}));
var require_version = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Utils$6 = require_utils$1();
	var ECCode$1 = require_error_correction_code();
	var ECLevel$1 = require_error_correction_level();
	var Mode$6 = require_mode();
	var VersionCheck = require_version_check();
	var G18 = 7973;
	var G18_BCH = Utils$6.getBCHDigit(G18);
	function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
		for (let currentVersion = 1; currentVersion <= 40; currentVersion++) if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) return currentVersion;
	}
	function getReservedBitsCount(mode, version) {
		return Mode$6.getCharCountIndicator(mode, version) + 4;
	}
	function getTotalBitsFromDataArray(segments, version) {
		let totalBits = 0;
		segments.forEach(function(data) {
			const reservedBits = getReservedBitsCount(data.mode, version);
			totalBits += reservedBits + data.getBitsLength();
		});
		return totalBits;
	}
	function getBestVersionForMixedData(segments, errorCorrectionLevel) {
		for (let currentVersion = 1; currentVersion <= 40; currentVersion++) if (getTotalBitsFromDataArray(segments, currentVersion) <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode$6.MIXED)) return currentVersion;
	}
	exports.from = function from(value, defaultValue) {
		if (VersionCheck.isValid(value)) return parseInt(value, 10);
		return defaultValue;
	};
	exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
		if (!VersionCheck.isValid(version)) throw new Error("Invalid QR Code version");
		if (typeof mode === "undefined") mode = Mode$6.BYTE;
		const dataTotalCodewordsBits = (Utils$6.getSymbolTotalCodewords(version) - ECCode$1.getTotalCodewordsCount(version, errorCorrectionLevel)) * 8;
		if (mode === Mode$6.MIXED) return dataTotalCodewordsBits;
		const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
		switch (mode) {
			case Mode$6.NUMERIC: return Math.floor(usableBits / 10 * 3);
			case Mode$6.ALPHANUMERIC: return Math.floor(usableBits / 11 * 2);
			case Mode$6.KANJI: return Math.floor(usableBits / 13);
			case Mode$6.BYTE:
			default: return Math.floor(usableBits / 8);
		}
	};
	exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
		let seg;
		const ecl = ECLevel$1.from(errorCorrectionLevel, ECLevel$1.M);
		if (Array.isArray(data)) {
			if (data.length > 1) return getBestVersionForMixedData(data, ecl);
			if (data.length === 0) return 1;
			seg = data[0];
		} else seg = data;
		return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
	};
	exports.getEncodedBits = function getEncodedBits(version) {
		if (!VersionCheck.isValid(version) || version < 7) throw new Error("Invalid QR Code version");
		let d$1 = version << 12;
		while (Utils$6.getBCHDigit(d$1) - G18_BCH >= 0) d$1 ^= G18 << Utils$6.getBCHDigit(d$1) - G18_BCH;
		return version << 12 | d$1;
	};
}));
var require_format_info = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Utils$5 = require_utils$1();
	var G15 = 1335;
	var G15_MASK = 21522;
	var G15_BCH = Utils$5.getBCHDigit(G15);
	exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
		const data = errorCorrectionLevel.bit << 3 | mask;
		let d$1 = data << 10;
		while (Utils$5.getBCHDigit(d$1) - G15_BCH >= 0) d$1 ^= G15 << Utils$5.getBCHDigit(d$1) - G15_BCH;
		return (data << 10 | d$1) ^ G15_MASK;
	};
}));
var require_numeric_data = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Mode$5 = require_mode();
	function NumericData$1(data) {
		this.mode = Mode$5.NUMERIC;
		this.data = data.toString();
	}
	NumericData$1.getBitsLength = function getBitsLength(length) {
		return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
	};
	NumericData$1.prototype.getLength = function getLength() {
		return this.data.length;
	};
	NumericData$1.prototype.getBitsLength = function getBitsLength() {
		return NumericData$1.getBitsLength(this.data.length);
	};
	NumericData$1.prototype.write = function write(bitBuffer) {
		let i$4, group, value;
		for (i$4 = 0; i$4 + 3 <= this.data.length; i$4 += 3) {
			group = this.data.substr(i$4, 3);
			value = parseInt(group, 10);
			bitBuffer.put(value, 10);
		}
		const remainingNum = this.data.length - i$4;
		if (remainingNum > 0) {
			group = this.data.substr(i$4);
			value = parseInt(group, 10);
			bitBuffer.put(value, remainingNum * 3 + 1);
		}
	};
	module.exports = NumericData$1;
}));
var require_alphanumeric_data = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Mode$4 = require_mode();
	var ALPHA_NUM_CHARS = [
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
		" ",
		"$",
		"%",
		"*",
		"+",
		"-",
		".",
		"/",
		":"
	];
	function AlphanumericData$1(data) {
		this.mode = Mode$4.ALPHANUMERIC;
		this.data = data;
	}
	AlphanumericData$1.getBitsLength = function getBitsLength(length) {
		return 11 * Math.floor(length / 2) + 6 * (length % 2);
	};
	AlphanumericData$1.prototype.getLength = function getLength() {
		return this.data.length;
	};
	AlphanumericData$1.prototype.getBitsLength = function getBitsLength() {
		return AlphanumericData$1.getBitsLength(this.data.length);
	};
	AlphanumericData$1.prototype.write = function write(bitBuffer) {
		let i$4;
		for (i$4 = 0; i$4 + 2 <= this.data.length; i$4 += 2) {
			let value = ALPHA_NUM_CHARS.indexOf(this.data[i$4]) * 45;
			value += ALPHA_NUM_CHARS.indexOf(this.data[i$4 + 1]);
			bitBuffer.put(value, 11);
		}
		if (this.data.length % 2) bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i$4]), 6);
	};
	module.exports = AlphanumericData$1;
}));
var require_encode_utf8 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function encodeUtf8$1(input) {
		var result = [];
		var size = input.length;
		for (var index = 0; index < size; index++) {
			var point = input.charCodeAt(index);
			if (point >= 55296 && point <= 56319 && size > index + 1) {
				var second = input.charCodeAt(index + 1);
				if (second >= 56320 && second <= 57343) {
					point = (point - 55296) * 1024 + second - 56320 + 65536;
					index += 1;
				}
			}
			if (point < 128) {
				result.push(point);
				continue;
			}
			if (point < 2048) {
				result.push(point >> 6 | 192);
				result.push(point & 63 | 128);
				continue;
			}
			if (point < 55296 || point >= 57344 && point < 65536) {
				result.push(point >> 12 | 224);
				result.push(point >> 6 & 63 | 128);
				result.push(point & 63 | 128);
				continue;
			}
			if (point >= 65536 && point <= 1114111) {
				result.push(point >> 18 | 240);
				result.push(point >> 12 & 63 | 128);
				result.push(point >> 6 & 63 | 128);
				result.push(point & 63 | 128);
				continue;
			}
			result.push(239, 191, 189);
		}
		return new Uint8Array(result).buffer;
	};
}));
var require_byte_data = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var encodeUtf8 = require_encode_utf8();
	var Mode$3 = require_mode();
	function ByteData$1(data) {
		this.mode = Mode$3.BYTE;
		if (typeof data === "string") data = encodeUtf8(data);
		this.data = new Uint8Array(data);
	}
	ByteData$1.getBitsLength = function getBitsLength(length) {
		return length * 8;
	};
	ByteData$1.prototype.getLength = function getLength() {
		return this.data.length;
	};
	ByteData$1.prototype.getBitsLength = function getBitsLength() {
		return ByteData$1.getBitsLength(this.data.length);
	};
	ByteData$1.prototype.write = function(bitBuffer) {
		for (let i$4 = 0, l$1 = this.data.length; i$4 < l$1; i$4++) bitBuffer.put(this.data[i$4], 8);
	};
	module.exports = ByteData$1;
}));
var require_kanji_data = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Mode$2 = require_mode();
	var Utils$4 = require_utils$1();
	function KanjiData$1(data) {
		this.mode = Mode$2.KANJI;
		this.data = data;
	}
	KanjiData$1.getBitsLength = function getBitsLength(length) {
		return length * 13;
	};
	KanjiData$1.prototype.getLength = function getLength() {
		return this.data.length;
	};
	KanjiData$1.prototype.getBitsLength = function getBitsLength() {
		return KanjiData$1.getBitsLength(this.data.length);
	};
	KanjiData$1.prototype.write = function(bitBuffer) {
		let i$4;
		for (i$4 = 0; i$4 < this.data.length; i$4++) {
			let value = Utils$4.toSJIS(this.data[i$4]);
			if (value >= 33088 && value <= 40956) value -= 33088;
			else if (value >= 57408 && value <= 60351) value -= 49472;
			else throw new Error("Invalid SJIS character: " + this.data[i$4] + "\nMake sure your charset is UTF-8");
			value = (value >>> 8 & 255) * 192 + (value & 255);
			bitBuffer.put(value, 13);
		}
	};
	module.exports = KanjiData$1;
}));
var require_segments = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Mode$1 = require_mode();
	var NumericData = require_numeric_data();
	var AlphanumericData = require_alphanumeric_data();
	var ByteData = require_byte_data();
	var KanjiData = require_kanji_data();
	var Regex = require_regex();
	var Utils$3 = require_utils$1();
	var dijkstra = require_dijkstra();
	function getStringByteLength(str) {
		return unescape(encodeURIComponent(str)).length;
	}
	function getSegments(regex, mode, str) {
		const segments = [];
		let result;
		while ((result = regex.exec(str)) !== null) segments.push({
			data: result[0],
			index: result.index,
			mode,
			length: result[0].length
		});
		return segments;
	}
	function getSegmentsFromString(dataStr) {
		const numSegs = getSegments(Regex.NUMERIC, Mode$1.NUMERIC, dataStr);
		const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode$1.ALPHANUMERIC, dataStr);
		let byteSegs;
		let kanjiSegs;
		if (Utils$3.isKanjiModeEnabled()) {
			byteSegs = getSegments(Regex.BYTE, Mode$1.BYTE, dataStr);
			kanjiSegs = getSegments(Regex.KANJI, Mode$1.KANJI, dataStr);
		} else {
			byteSegs = getSegments(Regex.BYTE_KANJI, Mode$1.BYTE, dataStr);
			kanjiSegs = [];
		}
		return numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs).sort(function(s1, s2) {
			return s1.index - s2.index;
		}).map(function(obj) {
			return {
				data: obj.data,
				mode: obj.mode,
				length: obj.length
			};
		});
	}
	function getSegmentBitsLength(length, mode) {
		switch (mode) {
			case Mode$1.NUMERIC: return NumericData.getBitsLength(length);
			case Mode$1.ALPHANUMERIC: return AlphanumericData.getBitsLength(length);
			case Mode$1.KANJI: return KanjiData.getBitsLength(length);
			case Mode$1.BYTE: return ByteData.getBitsLength(length);
		}
	}
	function mergeSegments(segs) {
		return segs.reduce(function(acc, curr) {
			const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
			if (prevSeg && prevSeg.mode === curr.mode) {
				acc[acc.length - 1].data += curr.data;
				return acc;
			}
			acc.push(curr);
			return acc;
		}, []);
	}
	function buildNodes(segs) {
		const nodes = [];
		for (let i$4 = 0; i$4 < segs.length; i$4++) {
			const seg = segs[i$4];
			switch (seg.mode) {
				case Mode$1.NUMERIC:
					nodes.push([
						seg,
						{
							data: seg.data,
							mode: Mode$1.ALPHANUMERIC,
							length: seg.length
						},
						{
							data: seg.data,
							mode: Mode$1.BYTE,
							length: seg.length
						}
					]);
					break;
				case Mode$1.ALPHANUMERIC:
					nodes.push([seg, {
						data: seg.data,
						mode: Mode$1.BYTE,
						length: seg.length
					}]);
					break;
				case Mode$1.KANJI:
					nodes.push([seg, {
						data: seg.data,
						mode: Mode$1.BYTE,
						length: getStringByteLength(seg.data)
					}]);
					break;
				case Mode$1.BYTE: nodes.push([{
					data: seg.data,
					mode: Mode$1.BYTE,
					length: getStringByteLength(seg.data)
				}]);
			}
		}
		return nodes;
	}
	function buildGraph(nodes, version) {
		const table = {};
		const graph = { start: {} };
		let prevNodeIds = ["start"];
		for (let i$4 = 0; i$4 < nodes.length; i$4++) {
			const nodeGroup = nodes[i$4];
			const currentNodeIds = [];
			for (let j$2 = 0; j$2 < nodeGroup.length; j$2++) {
				const node = nodeGroup[j$2];
				const key = "" + i$4 + j$2;
				currentNodeIds.push(key);
				table[key] = {
					node,
					lastCount: 0
				};
				graph[key] = {};
				for (let n$4 = 0; n$4 < prevNodeIds.length; n$4++) {
					const prevNodeId = prevNodeIds[n$4];
					if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
						graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
						table[prevNodeId].lastCount += node.length;
					} else {
						if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
						graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode$1.getCharCountIndicator(node.mode, version);
					}
				}
			}
			prevNodeIds = currentNodeIds;
		}
		for (let n$4 = 0; n$4 < prevNodeIds.length; n$4++) graph[prevNodeIds[n$4]].end = 0;
		return {
			map: graph,
			table
		};
	}
	function buildSingleSegment(data, modesHint) {
		let mode;
		const bestMode = Mode$1.getBestModeForData(data);
		mode = Mode$1.from(modesHint, bestMode);
		if (mode !== Mode$1.BYTE && mode.bit < bestMode.bit) throw new Error("\"" + data + "\" cannot be encoded with mode " + Mode$1.toString(mode) + ".\n Suggested mode is: " + Mode$1.toString(bestMode));
		if (mode === Mode$1.KANJI && !Utils$3.isKanjiModeEnabled()) mode = Mode$1.BYTE;
		switch (mode) {
			case Mode$1.NUMERIC: return new NumericData(data);
			case Mode$1.ALPHANUMERIC: return new AlphanumericData(data);
			case Mode$1.KANJI: return new KanjiData(data);
			case Mode$1.BYTE: return new ByteData(data);
		}
	}
	exports.fromArray = function fromArray(array) {
		return array.reduce(function(acc, seg) {
			if (typeof seg === "string") acc.push(buildSingleSegment(seg, null));
			else if (seg.data) acc.push(buildSingleSegment(seg.data, seg.mode));
			return acc;
		}, []);
	};
	exports.fromString = function fromString$2(data, version) {
		const graph = buildGraph(buildNodes(getSegmentsFromString(data, Utils$3.isKanjiModeEnabled())), version);
		const path = dijkstra.find_path(graph.map, "start", "end");
		const optimizedSegs = [];
		for (let i$4 = 1; i$4 < path.length - 1; i$4++) optimizedSegs.push(graph.table[path[i$4]].node);
		return exports.fromArray(mergeSegments(optimizedSegs));
	};
	exports.rawSplit = function rawSplit(data) {
		return exports.fromArray(getSegmentsFromString(data, Utils$3.isKanjiModeEnabled()));
	};
}));
var require_qrcode = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Utils$2 = require_utils$1();
	var ECLevel = require_error_correction_level();
	var BitBuffer = require_bit_buffer();
	var BitMatrix = require_bit_matrix();
	var AlignmentPattern = require_alignment_pattern();
	var FinderPattern = require_finder_pattern();
	var MaskPattern = require_mask_pattern();
	var ECCode = require_error_correction_code();
	var ReedSolomonEncoder = require_reed_solomon_encoder();
	var Version = require_version();
	var FormatInfo = require_format_info();
	var Mode = require_mode();
	var Segments = require_segments();
	function setupFinderPattern(matrix, version) {
		const size = matrix.size;
		const pos = FinderPattern.getPositions(version);
		for (let i$4 = 0; i$4 < pos.length; i$4++) {
			const row = pos[i$4][0];
			const col = pos[i$4][1];
			for (let r$3 = -1; r$3 <= 7; r$3++) {
				if (row + r$3 <= -1 || size <= row + r$3) continue;
				for (let c$2 = -1; c$2 <= 7; c$2++) {
					if (col + c$2 <= -1 || size <= col + c$2) continue;
					if (r$3 >= 0 && r$3 <= 6 && (c$2 === 0 || c$2 === 6) || c$2 >= 0 && c$2 <= 6 && (r$3 === 0 || r$3 === 6) || r$3 >= 2 && r$3 <= 4 && c$2 >= 2 && c$2 <= 4) matrix.set(row + r$3, col + c$2, true, true);
					else matrix.set(row + r$3, col + c$2, false, true);
				}
			}
		}
	}
	function setupTimingPattern(matrix) {
		const size = matrix.size;
		for (let r$3 = 8; r$3 < size - 8; r$3++) {
			const value = r$3 % 2 === 0;
			matrix.set(r$3, 6, value, true);
			matrix.set(6, r$3, value, true);
		}
	}
	function setupAlignmentPattern(matrix, version) {
		const pos = AlignmentPattern.getPositions(version);
		for (let i$4 = 0; i$4 < pos.length; i$4++) {
			const row = pos[i$4][0];
			const col = pos[i$4][1];
			for (let r$3 = -2; r$3 <= 2; r$3++) for (let c$2 = -2; c$2 <= 2; c$2++) if (r$3 === -2 || r$3 === 2 || c$2 === -2 || c$2 === 2 || r$3 === 0 && c$2 === 0) matrix.set(row + r$3, col + c$2, true, true);
			else matrix.set(row + r$3, col + c$2, false, true);
		}
	}
	function setupVersionInfo(matrix, version) {
		const size = matrix.size;
		const bits = Version.getEncodedBits(version);
		let row, col, mod;
		for (let i$4 = 0; i$4 < 18; i$4++) {
			row = Math.floor(i$4 / 3);
			col = i$4 % 3 + size - 8 - 3;
			mod = (bits >> i$4 & 1) === 1;
			matrix.set(row, col, mod, true);
			matrix.set(col, row, mod, true);
		}
	}
	function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
		const size = matrix.size;
		const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
		let i$4, mod;
		for (i$4 = 0; i$4 < 15; i$4++) {
			mod = (bits >> i$4 & 1) === 1;
			if (i$4 < 6) matrix.set(i$4, 8, mod, true);
			else if (i$4 < 8) matrix.set(i$4 + 1, 8, mod, true);
			else matrix.set(size - 15 + i$4, 8, mod, true);
			if (i$4 < 8) matrix.set(8, size - i$4 - 1, mod, true);
			else if (i$4 < 9) matrix.set(8, 15 - i$4 - 1 + 1, mod, true);
			else matrix.set(8, 15 - i$4 - 1, mod, true);
		}
		matrix.set(size - 8, 8, 1, true);
	}
	function setupData(matrix, data) {
		const size = matrix.size;
		let inc = -1;
		let row = size - 1;
		let bitIndex = 7;
		let byteIndex = 0;
		for (let col = size - 1; col > 0; col -= 2) {
			if (col === 6) col--;
			while (true) {
				for (let c$2 = 0; c$2 < 2; c$2++) if (!matrix.isReserved(row, col - c$2)) {
					let dark = false;
					if (byteIndex < data.length) dark = (data[byteIndex] >>> bitIndex & 1) === 1;
					matrix.set(row, col - c$2, dark);
					bitIndex--;
					if (bitIndex === -1) {
						byteIndex++;
						bitIndex = 7;
					}
				}
				row += inc;
				if (row < 0 || size <= row) {
					row -= inc;
					inc = -inc;
					break;
				}
			}
		}
	}
	function createData(version, errorCorrectionLevel, segments) {
		const buffer = new BitBuffer();
		segments.forEach(function(data) {
			buffer.put(data.mode.bit, 4);
			buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
			data.write(buffer);
		});
		const dataTotalCodewordsBits = (Utils$2.getSymbolTotalCodewords(version) - ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)) * 8;
		if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) buffer.put(0, 4);
		while (buffer.getLengthInBits() % 8 !== 0) buffer.putBit(0);
		const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
		for (let i$4 = 0; i$4 < remainingByte; i$4++) buffer.put(i$4 % 2 ? 17 : 236, 8);
		return createCodewords(buffer, version, errorCorrectionLevel);
	}
	function createCodewords(bitBuffer, version, errorCorrectionLevel) {
		const totalCodewords = Utils$2.getSymbolTotalCodewords(version);
		const dataTotalCodewords = totalCodewords - ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
		const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
		const blocksInGroup1 = ecTotalBlocks - totalCodewords % ecTotalBlocks;
		const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
		const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
		const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
		const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
		const rs = new ReedSolomonEncoder(ecCount);
		let offset = 0;
		const dcData = new Array(ecTotalBlocks);
		const ecData = new Array(ecTotalBlocks);
		let maxDataSize = 0;
		const buffer = new Uint8Array(bitBuffer.buffer);
		for (let b$1 = 0; b$1 < ecTotalBlocks; b$1++) {
			const dataSize = b$1 < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
			dcData[b$1] = buffer.slice(offset, offset + dataSize);
			ecData[b$1] = rs.encode(dcData[b$1]);
			offset += dataSize;
			maxDataSize = Math.max(maxDataSize, dataSize);
		}
		const data = new Uint8Array(totalCodewords);
		let index = 0;
		let i$4, r$3;
		for (i$4 = 0; i$4 < maxDataSize; i$4++) for (r$3 = 0; r$3 < ecTotalBlocks; r$3++) if (i$4 < dcData[r$3].length) data[index++] = dcData[r$3][i$4];
		for (i$4 = 0; i$4 < ecCount; i$4++) for (r$3 = 0; r$3 < ecTotalBlocks; r$3++) data[index++] = ecData[r$3][i$4];
		return data;
	}
	function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
		let segments;
		if (Array.isArray(data)) segments = Segments.fromArray(data);
		else if (typeof data === "string") {
			let estimatedVersion = version;
			if (!estimatedVersion) {
				const rawSegments = Segments.rawSplit(data);
				estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
			}
			segments = Segments.fromString(data, estimatedVersion || 40);
		} else throw new Error("Invalid data");
		const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
		if (!bestVersion) throw new Error("The amount of data is too big to be stored in a QR Code");
		if (!version) version = bestVersion;
		else if (version < bestVersion) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n");
		const dataBits = createData(version, errorCorrectionLevel, segments);
		const modules = new BitMatrix(Utils$2.getSymbolSize(version));
		setupFinderPattern(modules, version);
		setupTimingPattern(modules);
		setupAlignmentPattern(modules, version);
		setupFormatInfo(modules, errorCorrectionLevel, 0);
		if (version >= 7) setupVersionInfo(modules, version);
		setupData(modules, dataBits);
		if (isNaN(maskPattern)) maskPattern = MaskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
		MaskPattern.applyMask(maskPattern, modules);
		setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
		return {
			modules,
			version,
			errorCorrectionLevel,
			maskPattern,
			segments
		};
	}
	exports.create = function create(data, options) {
		if (typeof data === "undefined" || data === "") throw new Error("No input text");
		let errorCorrectionLevel = ECLevel.M;
		let version;
		let mask;
		if (typeof options !== "undefined") {
			errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
			version = Version.from(options.version);
			mask = MaskPattern.from(options.maskPattern);
			if (options.toSJISFunc) Utils$2.setToSJISFunction(options.toSJISFunc);
		}
		return createSymbol(data, version, errorCorrectionLevel, mask);
	};
}));
var require_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
	function hex2rgba(hex) {
		if (typeof hex === "number") hex = hex.toString();
		if (typeof hex !== "string") throw new Error("Color should be defined as hex string");
		let hexCode = hex.slice().replace("#", "").split("");
		if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) throw new Error("Invalid hex color: " + hex);
		if (hexCode.length === 3 || hexCode.length === 4) hexCode = Array.prototype.concat.apply([], hexCode.map(function(c$2) {
			return [c$2, c$2];
		}));
		if (hexCode.length === 6) hexCode.push("F", "F");
		const hexValue = parseInt(hexCode.join(""), 16);
		return {
			r: hexValue >> 24 & 255,
			g: hexValue >> 16 & 255,
			b: hexValue >> 8 & 255,
			a: hexValue & 255,
			hex: "#" + hexCode.slice(0, 6).join("")
		};
	}
	exports.getOptions = function getOptions(options) {
		if (!options) options = {};
		if (!options.color) options.color = {};
		const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
		const width = options.width && options.width >= 21 ? options.width : void 0;
		const scale = options.scale || 4;
		return {
			width,
			scale: width ? 4 : scale,
			margin,
			color: {
				dark: hex2rgba(options.color.dark || "#000000ff"),
				light: hex2rgba(options.color.light || "#ffffffff")
			},
			type: options.type,
			rendererOpts: options.rendererOpts || {}
		};
	};
	exports.getScale = function getScale(qrSize, opts) {
		return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
	};
	exports.getImageWidth = function getImageWidth(qrSize, opts) {
		const scale = exports.getScale(qrSize, opts);
		return Math.floor((qrSize + opts.margin * 2) * scale);
	};
	exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
		const size = qr.modules.size;
		const data = qr.modules.data;
		const scale = exports.getScale(size, opts);
		const symbolSize = Math.floor((size + opts.margin * 2) * scale);
		const scaledMargin = opts.margin * scale;
		const palette = [opts.color.light, opts.color.dark];
		for (let i$4 = 0; i$4 < symbolSize; i$4++) for (let j$2 = 0; j$2 < symbolSize; j$2++) {
			let posDst = (i$4 * symbolSize + j$2) * 4;
			let pxColor = opts.color.light;
			if (i$4 >= scaledMargin && j$2 >= scaledMargin && i$4 < symbolSize - scaledMargin && j$2 < symbolSize - scaledMargin) {
				const iSrc = Math.floor((i$4 - scaledMargin) / scale);
				const jSrc = Math.floor((j$2 - scaledMargin) / scale);
				pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
			}
			imgData[posDst++] = pxColor.r;
			imgData[posDst++] = pxColor.g;
			imgData[posDst++] = pxColor.b;
			imgData[posDst] = pxColor.a;
		}
	};
}));
var require_canvas = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Utils$1 = require_utils();
	function clearCanvas(ctx, canvas, size) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		if (!canvas.style) canvas.style = {};
		canvas.height = size;
		canvas.width = size;
		canvas.style.height = size + "px";
		canvas.style.width = size + "px";
	}
	function getCanvasElement() {
		try {
			return document.createElement("canvas");
		} catch (e$3) {
			throw new Error("You need to specify a canvas element");
		}
	}
	exports.render = function render(qrData, canvas, options) {
		let opts = options;
		let canvasEl = canvas;
		if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
			opts = canvas;
			canvas = void 0;
		}
		if (!canvas) canvasEl = getCanvasElement();
		opts = Utils$1.getOptions(opts);
		const size = Utils$1.getImageWidth(qrData.modules.size, opts);
		const ctx = canvasEl.getContext("2d");
		const image = ctx.createImageData(size, size);
		Utils$1.qrToImageData(image.data, qrData, opts);
		clearCanvas(ctx, canvasEl, size);
		ctx.putImageData(image, 0, 0);
		return canvasEl;
	};
	exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
		let opts = options;
		if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
			opts = canvas;
			canvas = void 0;
		}
		if (!opts) opts = {};
		const canvasEl = exports.render(qrData, canvas, opts);
		const type = opts.type || "image/png";
		const rendererOpts = opts.rendererOpts || {};
		return canvasEl.toDataURL(type, rendererOpts.quality);
	};
}));
var require_svg_tag = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Utils = require_utils();
	function getColorAttrib(color, attrib) {
		const alpha = color.a / 255;
		const str = attrib + "=\"" + color.hex + "\"";
		return alpha < 1 ? str + " " + attrib + "-opacity=\"" + alpha.toFixed(2).slice(1) + "\"" : str;
	}
	function svgCmd(cmd, x, y) {
		let str = cmd + x;
		if (typeof y !== "undefined") str += " " + y;
		return str;
	}
	function qrToPath(data, size, margin) {
		let path = "";
		let moveBy = 0;
		let newRow = false;
		let lineLength = 0;
		for (let i$4 = 0; i$4 < data.length; i$4++) {
			const col = Math.floor(i$4 % size);
			const row = Math.floor(i$4 / size);
			if (!col && !newRow) newRow = true;
			if (data[i$4]) {
				lineLength++;
				if (!(i$4 > 0 && col > 0 && data[i$4 - 1])) {
					path += newRow ? svgCmd("M", col + margin, .5 + row + margin) : svgCmd("m", moveBy, 0);
					moveBy = 0;
					newRow = false;
				}
				if (!(col + 1 < size && data[i$4 + 1])) {
					path += svgCmd("h", lineLength);
					lineLength = 0;
				}
			} else moveBy++;
		}
		return path;
	}
	exports.render = function render(qrData, options, cb) {
		const opts = Utils.getOptions(options);
		const size = qrData.modules.size;
		const data = qrData.modules.data;
		const qrcodesize = size + opts.margin * 2;
		const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + " d=\"M0 0h" + qrcodesize + "v" + qrcodesize + "H0z\"/>";
		const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + " d=\"" + qrToPath(data, size, opts.margin) + "\"/>";
		const viewBox = "viewBox=\"0 0 " + qrcodesize + " " + qrcodesize + "\"";
		const svgTag = "<svg xmlns=\"http://www.w3.org/2000/svg\" " + (!opts.width ? "" : "width=\"" + opts.width + "\" height=\"" + opts.width + "\" ") + viewBox + " shape-rendering=\"crispEdges\">" + bg + path + "</svg>\n";
		if (typeof cb === "function") cb(null, svgTag);
		return svgTag;
	};
}));
var import_browser = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports) => {
	var canPromise = require_can_promise();
	var QRCode = require_qrcode();
	var CanvasRenderer = require_canvas();
	var SvgRenderer = require_svg_tag();
	function renderCanvas(renderFunc, canvas, text, opts, cb) {
		const args = [].slice.call(arguments, 1);
		const argsNum = args.length;
		const isLastArgCb = typeof args[argsNum - 1] === "function";
		if (!isLastArgCb && !canPromise()) throw new Error("Callback required as last argument");
		if (isLastArgCb) {
			if (argsNum < 2) throw new Error("Too few arguments provided");
			if (argsNum === 2) {
				cb = text;
				text = canvas;
				canvas = opts = void 0;
			} else if (argsNum === 3) if (canvas.getContext && typeof cb === "undefined") {
				cb = opts;
				opts = void 0;
			} else {
				cb = opts;
				opts = text;
				text = canvas;
				canvas = void 0;
			}
		} else {
			if (argsNum < 1) throw new Error("Too few arguments provided");
			if (argsNum === 1) {
				text = canvas;
				canvas = opts = void 0;
			} else if (argsNum === 2 && !canvas.getContext) {
				opts = text;
				text = canvas;
				canvas = void 0;
			}
			return new Promise(function(resolve, reject) {
				try {
					resolve(renderFunc(QRCode.create(text, opts), canvas, opts));
				} catch (e$3) {
					reject(e$3);
				}
			});
		}
		try {
			const data = QRCode.create(text, opts);
			cb(null, renderFunc(data, canvas, opts));
		} catch (e$3) {
			cb(e$3);
		}
	}
	exports.create = QRCode.create;
	exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
	exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
	exports.toString = renderCanvas.bind(null, function(data, _, opts) {
		return SvgRenderer.render(data, opts);
	});
})))(), 1);
var CONNECTING_ERROR_MARGIN = .1;
var CIRCLE_SIZE_MODIFIER = 2.5;
var QRCODE_MATRIX_MARGIN = 7;
function isAdjecentDots(cy, otherCy, cellSize) {
	if (cy === otherCy) return false;
	return (cy - otherCy < 0 ? otherCy - cy : cy - otherCy) <= cellSize + CONNECTING_ERROR_MARGIN;
}
function getMatrix(value, errorCorrectionLevel) {
	const arr = Array.prototype.slice.call(import_browser.create(value, { errorCorrectionLevel }).modules.data, 0);
	const sqrt = Math.sqrt(arr.length);
	return arr.reduce((rows, key, index) => (index % sqrt === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []);
}
const QrCodeUtil = { generate({ uri, size, logoSize, padding = 8, dotColor = "var(--apkt-colors-black)" }) {
	const strokeWidth = 10;
	const dots = [];
	const matrix = getMatrix(uri, "Q");
	const cellSize = (size - 2 * padding) / matrix.length;
	const qrList = [
		{
			x: 0,
			y: 0
		},
		{
			x: 1,
			y: 0
		},
		{
			x: 0,
			y: 1
		}
	];
	qrList.forEach(({ x, y }) => {
		const x1 = (matrix.length - QRCODE_MATRIX_MARGIN) * cellSize * x + padding;
		const y1 = (matrix.length - QRCODE_MATRIX_MARGIN) * cellSize * y + padding;
		const borderRadius = .45;
		for (let i$4 = 0; i$4 < qrList.length; i$4 += 1) {
			const dotSize = cellSize * (QRCODE_MATRIX_MARGIN - i$4 * 2);
			dots.push(w`
            <rect
              fill=${i$4 === 2 ? "var(--apkt-colors-black)" : "var(--apkt-colors-white)"}
              width=${i$4 === 0 ? dotSize - strokeWidth : dotSize}
              rx= ${i$4 === 0 ? (dotSize - strokeWidth) * borderRadius : dotSize * borderRadius}
              ry= ${i$4 === 0 ? (dotSize - strokeWidth) * borderRadius : dotSize * borderRadius}
              stroke=${dotColor}
              stroke-width=${i$4 === 0 ? strokeWidth : 0}
              height=${i$4 === 0 ? dotSize - strokeWidth : dotSize}
              x= ${i$4 === 0 ? y1 + cellSize * i$4 + strokeWidth / 2 : y1 + cellSize * i$4}
              y= ${i$4 === 0 ? x1 + cellSize * i$4 + strokeWidth / 2 : x1 + cellSize * i$4}
            />
          `);
		}
	});
	const clearArenaSize = Math.floor((logoSize + 25) / cellSize);
	const matrixMiddleStart = matrix.length / 2 - clearArenaSize / 2;
	const matrixMiddleEnd = matrix.length / 2 + clearArenaSize / 2 - 1;
	const circles = [];
	matrix.forEach((row, i$4) => {
		row.forEach((_, j$2) => {
			if (matrix[i$4][j$2]) {
				if (!(i$4 < QRCODE_MATRIX_MARGIN && j$2 < QRCODE_MATRIX_MARGIN || i$4 > matrix.length - (QRCODE_MATRIX_MARGIN + 1) && j$2 < QRCODE_MATRIX_MARGIN || i$4 < QRCODE_MATRIX_MARGIN && j$2 > matrix.length - (QRCODE_MATRIX_MARGIN + 1))) {
					if (!(i$4 > matrixMiddleStart && i$4 < matrixMiddleEnd && j$2 > matrixMiddleStart && j$2 < matrixMiddleEnd)) {
						const cx = i$4 * cellSize + cellSize / 2 + padding;
						const cy = j$2 * cellSize + cellSize / 2 + padding;
						circles.push([cx, cy]);
					}
				}
			}
		});
	});
	const circlesToConnect = {};
	circles.forEach(([cx, cy]) => {
		if (circlesToConnect[cx]) circlesToConnect[cx]?.push(cy);
		else circlesToConnect[cx] = [cy];
	});
	Object.entries(circlesToConnect).map(([cx, cys]) => {
		const newCys = cys.filter((cy) => cys.every((otherCy) => !isAdjecentDots(cy, otherCy, cellSize)));
		return [Number(cx), newCys];
	}).forEach(([cx, cys]) => {
		cys.forEach((cy) => {
			dots.push(w`<circle cx=${cx} cy=${cy} fill=${dotColor} r=${cellSize / CIRCLE_SIZE_MODIFIER} />`);
		});
	});
	Object.entries(circlesToConnect).filter(([_, cys]) => cys.length > 1).map(([cx, cys]) => {
		const newCys = cys.filter((cy) => cys.some((otherCy) => isAdjecentDots(cy, otherCy, cellSize)));
		return [Number(cx), newCys];
	}).map(([cx, cys]) => {
		cys.sort((a, b$1) => a < b$1 ? -1 : 1);
		const groups = [];
		for (const cy of cys) {
			const group = groups.find((item) => item.some((otherCy) => isAdjecentDots(cy, otherCy, cellSize)));
			if (group) group.push(cy);
			else groups.push([cy]);
		}
		return [cx, groups.map((item) => [item[0], item[item.length - 1]])];
	}).forEach(([cx, groups]) => {
		groups.forEach(([y1, y2]) => {
			dots.push(w`
              <line
                x1=${cx}
                x2=${cx}
                y1=${y1}
                y2=${y2}
                stroke=${dotColor}
                stroke-width=${cellSize / (CIRCLE_SIZE_MODIFIER / 2)}
                stroke-linecap="round"
              />
            `);
		});
	});
	return dots;
} };
var styles_default$11 = css`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({ colors }) => colors.white};
    border: 1px solid ${({ tokens }) => tokens.theme.borderPrimary};
  }

  :host {
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({ tokens }) => tokens.theme.backgroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;
var __decorate$16 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var WuiQrCode = class WuiQrCode$1 extends i {
	constructor() {
		super(...arguments);
		this.uri = "";
		this.size = 500;
		this.theme = "dark";
		this.imageSrc = void 0;
		this.alt = void 0;
		this.arenaClear = void 0;
		this.farcaster = void 0;
	}
	render() {
		this.dataset["theme"] = this.theme;
		this.dataset["clear"] = String(this.arenaClear);
		return b`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`;
	}
	templateSvg() {
		return w`
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${QrCodeUtil.generate({
			uri: this.uri,
			size: this.size,
			logoSize: this.arenaClear ? 0 : this.size / 4
		})}
      </svg>
    `;
	}
	templateVisual() {
		if (this.imageSrc) return b`<wui-image src=${this.imageSrc} alt=${this.alt ?? "logo"}></wui-image>`;
		if (this.farcaster) return b`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`;
		return b`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`;
	}
};
WuiQrCode.styles = [resetStyles, styles_default$11];
__decorate$16([n()], WuiQrCode.prototype, "uri", void 0);
__decorate$16([n({ type: Number })], WuiQrCode.prototype, "size", void 0);
__decorate$16([n()], WuiQrCode.prototype, "theme", void 0);
__decorate$16([n()], WuiQrCode.prototype, "imageSrc", void 0);
__decorate$16([n()], WuiQrCode.prototype, "alt", void 0);
__decorate$16([n({ type: Boolean })], WuiQrCode.prototype, "arenaClear", void 0);
__decorate$16([n({ type: Boolean })], WuiQrCode.prototype, "farcaster", void 0);
WuiQrCode = __decorate$16([customElement("wui-qr-code")], WuiQrCode);
var styles_default$10 = css`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({ borderRadius }) => borderRadius[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({ durations }) => durations["xl"]};
    animation-timing-function: ${({ easings }) => easings["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
var __decorate$15 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var W3mConnectingWcQrcode = class W3mConnectingWcQrcode$1 extends W3mConnectingWidget {
	constructor() {
		super();
		this.basic = false;
	}
	firstUpdated() {
		if (!this.basic) EventsController.sendEvent({
			type: "track",
			event: "SELECT_WALLET",
			properties: {
				name: this.wallet?.name ?? "WalletConnect",
				platform: "qrcode",
				displayIndex: this.wallet?.display_index,
				walletRank: this.wallet?.order,
				view: RouterController.state.view
			}
		});
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.unsubscribe?.forEach((unsub) => unsub());
	}
	render() {
		this.onRenderProxy();
		return b`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[
			"0",
			"5",
			"5",
			"5"
		]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
	}
	onRenderProxy() {
		if (!this.ready && this.uri) this.ready = true;
	}
	qrCodeTemplate() {
		if (!this.uri || !this.ready) return null;
		const alt = this.wallet ? this.wallet.name : void 0;
		ConnectionController.setWcLinking(void 0);
		ConnectionController.setRecentWallet(this.wallet);
		const qrColor = ThemeController.state.themeVariables["--apkt-qr-color"] ?? ThemeController.state.themeVariables["--w3m-qr-color"];
		return b` <wui-qr-code
      theme=${ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${o(AssetUtil.getWalletImage(this.wallet))}
      color=${o(qrColor)}
      alt=${o(alt)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`;
	}
	copyTemplate() {
		return b`<wui-button
      .disabled=${!this.uri || !this.ready}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`;
	}
};
W3mConnectingWcQrcode.styles = styles_default$10;
__decorate$15([n({ type: Boolean })], W3mConnectingWcQrcode.prototype, "basic", void 0);
W3mConnectingWcQrcode = __decorate$15([customElement("w3m-connecting-wc-qrcode")], W3mConnectingWcQrcode);
var __decorate$14 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var W3mConnectingWcUnsupported = class W3mConnectingWcUnsupported$1 extends i {
	constructor() {
		super();
		this.wallet = RouterController.state.data?.wallet;
		if (!this.wallet) throw new Error("w3m-connecting-wc-unsupported: No wallet provided");
		EventsController.sendEvent({
			type: "track",
			event: "SELECT_WALLET",
			properties: {
				name: this.wallet.name,
				platform: "browser",
				displayIndex: this.wallet?.display_index,
				walletRank: this.wallet?.order,
				view: RouterController.state.view
			}
		});
	}
	render() {
		return b`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[
			"10",
			"5",
			"5",
			"5"
		]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${o(AssetUtil.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
	}
};
W3mConnectingWcUnsupported = __decorate$14([customElement("w3m-connecting-wc-unsupported")], W3mConnectingWcUnsupported);
var __decorate$13 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var W3mConnectingWcWeb = class W3mConnectingWcWeb$1 extends W3mConnectingWidget {
	constructor() {
		super();
		this.isLoading = true;
		if (!this.wallet) throw new Error("w3m-connecting-wc-web: No wallet provided");
		this.onConnect = this.onConnectProxy.bind(this);
		this.secondaryBtnLabel = "Open";
		this.secondaryLabel = ConstantsUtil.CONNECT_LABELS.MOBILE;
		this.secondaryBtnIcon = "externalLink";
		this.updateLoadingState();
		this.unsubscribe.push(ConnectionController.subscribeKey("wcUri", () => {
			this.updateLoadingState();
		}));
		EventsController.sendEvent({
			type: "track",
			event: "SELECT_WALLET",
			properties: {
				name: this.wallet.name,
				platform: "web",
				displayIndex: this.wallet?.display_index,
				walletRank: this.wallet?.order,
				view: RouterController.state.view
			}
		});
	}
	updateLoadingState() {
		this.isLoading = !this.uri;
	}
	onConnectProxy() {
		if (this.wallet?.webapp_link && this.uri) try {
			this.error = false;
			const { webapp_link, name } = this.wallet;
			const { redirect, href } = CoreHelperUtil.formatUniversalUrl(webapp_link, this.uri);
			ConnectionController.setWcLinking({
				name,
				href
			});
			ConnectionController.setRecentWallet(this.wallet);
			CoreHelperUtil.openHref(redirect, "_blank");
		} catch {
			this.error = true;
		}
	}
};
__decorate$13([r()], W3mConnectingWcWeb.prototype, "isLoading", void 0);
W3mConnectingWcWeb = __decorate$13([customElement("w3m-connecting-wc-web")], W3mConnectingWcWeb);
var styles_default$9 = css`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;
var __decorate$12 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var W3mConnectingWcView = class W3mConnectingWcView$1 extends i {
	constructor() {
		super();
		this.wallet = RouterController.state.data?.wallet;
		this.unsubscribe = [];
		this.platform = void 0;
		this.platforms = [];
		this.isSiwxEnabled = Boolean(OptionsController.state.siwx);
		this.remoteFeatures = OptionsController.state.remoteFeatures;
		this.displayBranding = true;
		this.basic = false;
		this.determinePlatforms();
		this.initializeConnection();
		this.unsubscribe.push(OptionsController.subscribeKey("remoteFeatures", (val) => this.remoteFeatures = val));
	}
	disconnectedCallback() {
		this.unsubscribe.forEach((unsubscribe) => unsubscribe());
	}
	render() {
		if (OptionsController.state.enableMobileFullScreen) this.setAttribute("data-mobile-fullscreen", "true");
		return b`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `;
	}
	reownBrandingTemplate() {
		if (!this.remoteFeatures?.reownBranding || !this.displayBranding) return null;
		return b`<wui-ux-by-reown></wui-ux-by-reown>`;
	}
	async initializeConnection(retry = false) {
		if (this.platform === "browser" || OptionsController.state.manualWCControl && !retry) return;
		try {
			const { wcPairingExpiry, status } = ConnectionController.state;
			const { redirectView } = RouterController.state.data ?? {};
			if (retry || OptionsController.state.enableEmbedded || CoreHelperUtil.isPairingExpired(wcPairingExpiry) || status === "connecting") {
				const connectionsByNamespace = ConnectionController.getConnections(ChainController.state.activeChain);
				const isMultiWalletEnabled = this.remoteFeatures?.multiWallet;
				const hasConnections = connectionsByNamespace.length > 0;
				await ConnectionController.connectWalletConnect({ cache: "never" });
				if (!this.isSiwxEnabled) if (hasConnections && isMultiWalletEnabled) {
					RouterController.replace("ProfileWallets");
					SnackController.showSuccess("New Wallet Added");
				} else if (redirectView) RouterController.replace(redirectView);
				else ModalController.close();
			}
		} catch (error) {
			if (error instanceof Error && error.message.includes("An error occurred when attempting to switch chain") && !OptionsController.state.enableNetworkSwitch) {
				if (ChainController.state.activeChain) {
					ChainController.setActiveCaipNetwork(CaipNetworksUtil.getUnsupportedNetwork(`${ChainController.state.activeChain}:${ChainController.state.activeCaipNetwork?.id}`));
					ChainController.showUnsupportedChainUI();
					return;
				}
			}
			if (error instanceof AppKitError && error.originalName === ErrorUtil.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST) EventsController.sendEvent({
				type: "track",
				event: "USER_REJECTED",
				properties: { message: error.message }
			});
			else EventsController.sendEvent({
				type: "track",
				event: "CONNECT_ERROR",
				properties: { message: error?.message ?? "Unknown" }
			});
			ConnectionController.setWcError(true);
			SnackController.showError(error.message ?? "Connection error");
			ConnectionController.resetWcConnection();
			RouterController.goBack();
		}
	}
	determinePlatforms() {
		if (!this.wallet) {
			this.platforms.push("qrcode");
			this.platform = "qrcode";
			return;
		}
		if (this.platform) return;
		const { mobile_link, desktop_link, webapp_link, injected, rdns } = this.wallet;
		const injectedIds = injected?.map(({ injected_id }) => injected_id).filter(Boolean);
		const browserIds = [...rdns ? [rdns] : injectedIds ?? []];
		const isBrowser = OptionsController.state.isUniversalProvider ? false : browserIds.length;
		const hasMobileWCLink = mobile_link;
		const isWebWc = webapp_link;
		const isBrowserInstalled = ConnectionController.checkInstalled(browserIds);
		const isBrowserWc = isBrowser && isBrowserInstalled;
		const isDesktopWc = desktop_link && !CoreHelperUtil.isMobile();
		if (isBrowserWc && !ChainController.state.noAdapters) this.platforms.push("browser");
		if (hasMobileWCLink) this.platforms.push(CoreHelperUtil.isMobile() ? "mobile" : "qrcode");
		if (isWebWc) this.platforms.push("web");
		if (isDesktopWc) this.platforms.push("desktop");
		if (!isBrowserWc && isBrowser && !ChainController.state.noAdapters) this.platforms.push("unsupported");
		this.platform = this.platforms[0];
	}
	platformTemplate() {
		switch (this.platform) {
			case "browser": return b`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;
			case "web": return b`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;
			case "desktop": return b`
          <w3m-connecting-wc-desktop .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-desktop>
        `;
			case "mobile": return b`
          <w3m-connecting-wc-mobile isMobile .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-mobile>
        `;
			case "qrcode": return b`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;
			default: return b`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`;
		}
	}
	headerTemplate() {
		if (!(this.platforms.length > 1)) return null;
		return b`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `;
	}
	async onSelectPlatform(platform) {
		const container = this.shadowRoot?.querySelector("div");
		if (container) {
			await container.animate([{ opacity: 1 }, { opacity: 0 }], {
				duration: 200,
				fill: "forwards",
				easing: "ease"
			}).finished;
			this.platform = platform;
			container.animate([{ opacity: 0 }, { opacity: 1 }], {
				duration: 200,
				fill: "forwards",
				easing: "ease"
			});
		}
	}
};
W3mConnectingWcView.styles = styles_default$9;
__decorate$12([r()], W3mConnectingWcView.prototype, "platform", void 0);
__decorate$12([r()], W3mConnectingWcView.prototype, "platforms", void 0);
__decorate$12([r()], W3mConnectingWcView.prototype, "isSiwxEnabled", void 0);
__decorate$12([r()], W3mConnectingWcView.prototype, "remoteFeatures", void 0);
__decorate$12([n({ type: Boolean })], W3mConnectingWcView.prototype, "displayBranding", void 0);
__decorate$12([n({ type: Boolean })], W3mConnectingWcView.prototype, "basic", void 0);
W3mConnectingWcView = __decorate$12([customElement("w3m-connecting-wc-view")], W3mConnectingWcView);
var __decorate$11 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var W3mConnectingWcBasicView = class W3mConnectingWcBasicView$1 extends i {
	constructor() {
		super();
		this.unsubscribe = [];
		this.isMobile = CoreHelperUtil.isMobile();
		this.remoteFeatures = OptionsController.state.remoteFeatures;
		this.unsubscribe.push(OptionsController.subscribeKey("remoteFeatures", (val) => this.remoteFeatures = val));
	}
	disconnectedCallback() {
		this.unsubscribe.forEach((unsubscribe) => unsubscribe());
	}
	render() {
		if (this.isMobile) {
			const { featured, recommended } = ApiController.state;
			const { customWallets } = OptionsController.state;
			const recent = StorageUtil.getRecentWallets();
			return b`<wui-flex flexDirection="column" gap="2" .margin=${[
				"1",
				"3",
				"3",
				"3"
			]}>
        ${featured.length || recommended.length || customWallets?.length || recent.length ? b`<w3m-connector-list></w3m-connector-list>` : null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`;
		}
		return b`<wui-flex flexDirection="column" .padding=${[
			"0",
			"0",
			"4",
			"0"
		]}>
        <w3m-connecting-wc-view ?basic=${true} .displayBranding=${false}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${[
			"0",
			"3",
			"0",
			"3"
		]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `;
	}
	reownBrandingTemplate() {
		if (!this.remoteFeatures?.reownBranding) return null;
		return b` <wui-flex flexDirection="column" .padding=${[
			"1",
			"0",
			"1",
			"0"
		]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`;
	}
};
__decorate$11([r()], W3mConnectingWcBasicView.prototype, "isMobile", void 0);
__decorate$11([r()], W3mConnectingWcBasicView.prototype, "remoteFeatures", void 0);
W3mConnectingWcBasicView = __decorate$11([customElement("w3m-connecting-wc-basic-view")], W3mConnectingWcBasicView);
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ var { I: t$1 } = j, r$1 = (o$3) => void 0 === o$3.strings;
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ var s = (i$4, t$2) => {
	const e$3 = i$4._$AN;
	if (void 0 === e$3) return !1;
	for (const i$5 of e$3) i$5._$AO?.(t$2, !1), s(i$5, t$2);
	return !0;
}, o$2 = (i$4) => {
	let t$2, e$3;
	do {
		if (void 0 === (t$2 = i$4._$AM)) break;
		e$3 = t$2._$AN, e$3.delete(i$4), i$4 = t$2;
	} while (0 === e$3?.size);
}, r$2 = (i$4) => {
	for (let t$2; t$2 = i$4._$AM; i$4 = t$2) {
		let e$3 = t$2._$AN;
		if (void 0 === e$3) t$2._$AN = e$3 = /* @__PURE__ */ new Set();
		else if (e$3.has(i$4)) break;
		e$3.add(i$4), c(t$2);
	}
};
function h$1(i$4) {
	void 0 !== this._$AN ? (o$2(this), this._$AM = i$4, r$2(this)) : this._$AM = i$4;
}
function n$2(i$4, t$2 = !1, e$3 = 0) {
	const r$3 = this._$AH, h$3 = this._$AN;
	if (void 0 !== h$3 && 0 !== h$3.size) if (t$2) if (Array.isArray(r$3)) for (let i$5 = e$3; i$5 < r$3.length; i$5++) s(r$3[i$5], !1), o$2(r$3[i$5]);
	else null != r$3 && (s(r$3, !1), o$2(r$3));
	else s(this, i$4);
}
var c = (i$4) => {
	i$4.type == t.CHILD && (i$4._$AP ??= n$2, i$4._$AQ ??= h$1);
};
var f = class extends i$2 {
	constructor() {
		super(...arguments), this._$AN = void 0;
	}
	_$AT(i$4, t$2, e$3) {
		super._$AT(i$4, t$2, e$3), r$2(this), this.isConnected = i$4._$AU;
	}
	_$AO(i$4, t$2 = !0) {
		i$4 !== this.isConnected && (this.isConnected = i$4, i$4 ? this.reconnected?.() : this.disconnected?.()), t$2 && (s(this, i$4), o$2(this));
	}
	setValue(t$2) {
		if (r$1(this._$Ct)) this._$Ct._$AI(t$2, this);
		else {
			const i$4 = [...this._$Ct._$AH];
			i$4[this._$Ci] = t$2, this._$Ct._$AI(i$4, this, 0);
		}
	}
	disconnected() {}
	reconnected() {}
};
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ var e = () => new h();
var h = class {};
var o$1 = /* @__PURE__ */ new WeakMap(), n$1 = e$1(class extends f {
	render(i$4) {
		return A;
	}
	update(i$4, [s$2]) {
		const e$3 = s$2 !== this.G;
		return e$3 && void 0 !== this.G && this.rt(void 0), (e$3 || this.lt !== this.ct) && (this.G = s$2, this.ht = i$4.options?.host, this.rt(this.ct = i$4.element)), A;
	}
	rt(t$2) {
		if (this.isConnected || (t$2 = void 0), "function" == typeof this.G) {
			const i$4 = this.ht ?? globalThis;
			let s$2 = o$1.get(i$4);
			void 0 === s$2 && (s$2 = /* @__PURE__ */ new WeakMap(), o$1.set(i$4, s$2)), void 0 !== s$2.get(this.G) && this.G.call(this.ht, void 0), s$2.set(this.G, t$2), void 0 !== t$2 && this.G.call(this.ht, t$2);
		} else this.G.value = t$2;
	}
	get lt() {
		return "function" == typeof this.G ? o$1.get(this.ht ?? globalThis)?.get(this.G) : this.G?.value;
	}
	disconnected() {
		this.lt === this.ct && this.rt(void 0);
	}
	reconnected() {
		this.rt(this.ct);
	}
});
var styles_default$8 = css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-2"]},
      color ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      border ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      box-shadow ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-2"]},
      width ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      height ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      transform ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-2"]},
      opacity ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ colors }) => colors.neutrals300};
    border-radius: ${({ borderRadius }) => borderRadius.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-2"]},
      color ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      border ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      box-shadow ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-2"]},
      width ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      height ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      transform ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-2"]},
      opacity ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({ colors }) => colors.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({ tokens }) => tokens.core.iconAccentPrimary};
    background-color: ${({ tokens }) => tokens.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({ tokens }) => tokens.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({ tokens }) => tokens.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({ colors }) => colors.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({ colors }) => colors.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({ colors }) => colors.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({ colors }) => colors.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({ colors }) => colors.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({ tokens }) => tokens.theme.textTertiary};
  }
`;
var __decorate$10 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var WuiToggle = class WuiToggle$1 extends i {
	constructor() {
		super(...arguments);
		this.inputElementRef = e();
		this.checked = false;
		this.disabled = false;
		this.size = "md";
	}
	render() {
		return b`
      <label data-size=${this.size}>
        <input
          ${n$1(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `;
	}
	dispatchChangeEvent() {
		this.dispatchEvent(new CustomEvent("switchChange", {
			detail: this.inputElementRef.value?.checked,
			bubbles: true,
			composed: true
		}));
	}
};
WuiToggle.styles = [
	resetStyles,
	elementStyles,
	styles_default$8
];
__decorate$10([n({ type: Boolean })], WuiToggle.prototype, "checked", void 0);
__decorate$10([n({ type: Boolean })], WuiToggle.prototype, "disabled", void 0);
__decorate$10([n()], WuiToggle.prototype, "size", void 0);
WuiToggle = __decorate$10([customElement("wui-toggle")], WuiToggle);
var styles_default$7 = css`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({ spacing }) => spacing["2"]};
    padding: ${({ spacing }) => spacing["2"]} ${({ spacing }) => spacing["3"]};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius["4"]};
    box-shadow: inset 0 0 0 1px ${({ tokens }) => tokens.theme.foregroundPrimary};
    transition: background-color ${({ durations }) => durations["lg"]}
      ${({ easings }) => easings["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;
var __decorate$9 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var WuiCertifiedSwitch = class WuiCertifiedSwitch$1 extends i {
	constructor() {
		super(...arguments);
		this.checked = false;
	}
	render() {
		return b`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `;
	}
	handleToggleChange(event) {
		event.stopPropagation();
		this.checked = event.detail;
		this.dispatchSwitchEvent();
	}
	dispatchSwitchEvent() {
		this.dispatchEvent(new CustomEvent("certifiedSwitchChange", {
			detail: this.checked,
			bubbles: true,
			composed: true
		}));
	}
};
WuiCertifiedSwitch.styles = [
	resetStyles,
	elementStyles,
	styles_default$7
];
__decorate$9([n({ type: Boolean })], WuiCertifiedSwitch.prototype, "checked", void 0);
WuiCertifiedSwitch = __decorate$9([customElement("wui-certified-switch")], WuiCertifiedSwitch);
var styles_default$6 = css`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({ spacing }) => spacing[3]};
    color: ${({ tokens }) => tokens.theme.textPrimary};
    caret-color: ${({ tokens }) => tokens.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({ tokens }) => tokens.theme.borderPrimary};
    caret-color: ${({ tokens }) => tokens.core.textAccentPrimary};
    padding: ${({ spacing }) => spacing[3]} ${({ spacing }) => spacing[3]}
      ${({ spacing }) => spacing[3]} ${({ spacing }) => spacing[10]};
    font-size: ${({ textSize }) => textSize.large};
    line-height: ${({ typography }) => typography["lg-regular"].lineHeight};
    letter-spacing: ${({ typography }) => typography["lg-regular"].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    font-family: ${({ fontFamily }) => fontFamily.regular};
  }

  input[data-size='lg'] {
    padding: ${({ spacing }) => spacing[4]} ${({ spacing }) => spacing[3]}
      ${({ spacing }) => spacing[4]} ${({ spacing }) => spacing[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({ tokens }) => tokens.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({ tokens }) => tokens.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({ tokens }) => tokens.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({ tokens }) => tokens.theme.borderSecondary};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({ tokens }) => tokens.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({ tokens }) => tokens.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({ tokens }) => tokens.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({ spacing }) => spacing[4]};
    color: ${({ tokens }) => tokens.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({ spacing }) => spacing[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({ borderRadius }) => borderRadius[2]};
    color: ${({ tokens }) => tokens.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({ tokens }) => tokens.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({ spacing }) => spacing[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
var __decorate$8 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var WuiInputText = class WuiInputText$1 extends i {
	constructor() {
		super(...arguments);
		this.inputElementRef = e();
		this.disabled = false;
		this.loading = false;
		this.placeholder = "";
		this.type = "text";
		this.value = "";
		this.size = "md";
	}
	render() {
		return b` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${n$1(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${o(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value || ""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`;
	}
	templateLeftIcon() {
		if (this.icon) return b`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`;
		return null;
	}
	templateSubmitButton() {
		if (this.onSubmit) return b`<button
        class="wui-input-text-submit-button ${this.loading ? "loading" : ""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled || this.loading}
      >
        ${this.loading ? b`<wui-icon name="spinner" size="md"></wui-icon>` : b`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`;
		return null;
	}
	templateError() {
		if (this.errorText) return b`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`;
		return null;
	}
	templateWarning() {
		if (this.warningText) return b`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`;
		return null;
	}
	dispatchInputChangeEvent() {
		this.dispatchEvent(new CustomEvent("inputChange", {
			detail: this.inputElementRef.value?.value,
			bubbles: true,
			composed: true
		}));
	}
};
WuiInputText.styles = [
	resetStyles,
	elementStyles,
	styles_default$6
];
__decorate$8([n()], WuiInputText.prototype, "icon", void 0);
__decorate$8([n({ type: Boolean })], WuiInputText.prototype, "disabled", void 0);
__decorate$8([n({ type: Boolean })], WuiInputText.prototype, "loading", void 0);
__decorate$8([n()], WuiInputText.prototype, "placeholder", void 0);
__decorate$8([n()], WuiInputText.prototype, "type", void 0);
__decorate$8([n()], WuiInputText.prototype, "value", void 0);
__decorate$8([n()], WuiInputText.prototype, "errorText", void 0);
__decorate$8([n()], WuiInputText.prototype, "warningText", void 0);
__decorate$8([n()], WuiInputText.prototype, "onSubmit", void 0);
__decorate$8([n()], WuiInputText.prototype, "size", void 0);
__decorate$8([n({ attribute: false })], WuiInputText.prototype, "onKeyDown", void 0);
WuiInputText = __decorate$8([customElement("wui-input-text")], WuiInputText);
var styles_default$5 = css`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({ spacing }) => spacing[3]};
    color: ${({ tokens }) => tokens.theme.iconDefault};
    cursor: pointer;
    padding: ${({ spacing }) => spacing[2]};
    background-color: transparent;
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    transition: background-color ${({ durations }) => durations["lg"]}
      ${({ easings }) => easings["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }
  }
`;
var __decorate$7 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var WuiSearchBar = class WuiSearchBar$1 extends i {
	constructor() {
		super(...arguments);
		this.inputComponentRef = e();
		this.inputValue = "";
	}
	render() {
		return b`
      <wui-input-text
        ${n$1(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue ? b`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>` : null}
      </wui-input-text>
    `;
	}
	onInputChange(event) {
		this.inputValue = event.detail || "";
	}
	clearValue() {
		const inputElement = this.inputComponentRef.value?.inputElementRef.value;
		if (inputElement) {
			inputElement.value = "";
			this.inputValue = "";
			inputElement.focus();
			inputElement.dispatchEvent(new Event("input"));
		}
	}
};
WuiSearchBar.styles = [resetStyles, styles_default$5];
__decorate$7([n()], WuiSearchBar.prototype, "inputValue", void 0);
WuiSearchBar = __decorate$7([customElement("wui-search-bar")], WuiSearchBar);
var styles_default$4 = css`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({ spacing }) => spacing[2]};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({ tokens }) => tokens.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;
var __decorate$6 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var WuiCardSelectLoader = class WuiCardSelectLoader$1 extends i {
	constructor() {
		super(...arguments);
		this.type = "wallet";
	}
	render() {
		return b`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `;
	}
	shimmerTemplate() {
		if (this.type === "network") return b` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${networkSvgMd}`;
		return b`<wui-shimmer width="56px" height="56px"></wui-shimmer>`;
	}
};
WuiCardSelectLoader.styles = [
	resetStyles,
	elementStyles,
	styles_default$4
];
__decorate$6([n()], WuiCardSelectLoader.prototype, "type", void 0);
WuiCardSelectLoader = __decorate$6([customElement("wui-card-select-loader")], WuiCardSelectLoader);
var styles_default$3 = i$1`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;
var __decorate$5 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var WuiGrid = class WuiGrid$1 extends i {
	render() {
		this.style.cssText = `
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap && `var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 3)};
    `;
		return b`<slot></slot>`;
	}
};
WuiGrid.styles = [resetStyles, styles_default$3];
__decorate$5([n()], WuiGrid.prototype, "gridTemplateRows", void 0);
__decorate$5([n()], WuiGrid.prototype, "gridTemplateColumns", void 0);
__decorate$5([n()], WuiGrid.prototype, "justifyItems", void 0);
__decorate$5([n()], WuiGrid.prototype, "alignItems", void 0);
__decorate$5([n()], WuiGrid.prototype, "justifyContent", void 0);
__decorate$5([n()], WuiGrid.prototype, "alignContent", void 0);
__decorate$5([n()], WuiGrid.prototype, "columnGap", void 0);
__decorate$5([n()], WuiGrid.prototype, "rowGap", void 0);
__decorate$5([n()], WuiGrid.prototype, "gap", void 0);
__decorate$5([n()], WuiGrid.prototype, "padding", void 0);
__decorate$5([n()], WuiGrid.prototype, "margin", void 0);
WuiGrid = __decorate$5([customElement("wui-grid")], WuiGrid);
var styles_default$2 = css`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({ spacing }) => spacing["2"]};
    padding: ${({ spacing }) => spacing["3"]} ${({ spacing }) => spacing["0"]};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({ borderRadius }) => borderRadius["4"]}, 20px);
    transition:
      color ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-1"]},
      background-color ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-1"]},
      border-radius ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({ tokens }) => tokens.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({ tokens }) => tokens.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({ colors }) => colors.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({ colors }) => colors.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({ colors }) => colors.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;
var __decorate$4 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var W3mAllWalletsListItem = class W3mAllWalletsListItem$1 extends i {
	constructor() {
		super();
		this.observer = new IntersectionObserver(() => void 0);
		this.visible = false;
		this.imageSrc = void 0;
		this.imageLoading = false;
		this.isImpressed = false;
		this.explorerId = "";
		this.walletQuery = "";
		this.certified = false;
		this.displayIndex = 0;
		this.wallet = void 0;
		this.observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					this.visible = true;
					this.fetchImageSrc();
					this.sendImpressionEvent();
				} else this.visible = false;
			});
		}, { threshold: .01 });
	}
	firstUpdated() {
		this.observer.observe(this);
	}
	disconnectedCallback() {
		this.observer.disconnect();
	}
	render() {
		const certified = this.wallet?.badge_type === "certified";
		return b`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${o(certified ? "certified" : void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${certified ? b`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>` : null}
        </wui-flex>
      </button>
    `;
	}
	imageTemplate() {
		if (!this.visible && !this.imageSrc || this.imageLoading) return this.shimmerTemplate();
		return b`
      <wui-wallet-image
        size="lg"
        imageSrc=${o(this.imageSrc)}
        name=${o(this.wallet?.name)}
        .installed=${this.wallet?.installed ?? false}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `;
	}
	shimmerTemplate() {
		return b`<wui-shimmer width="56px" height="56px"></wui-shimmer>`;
	}
	async fetchImageSrc() {
		if (!this.wallet) return;
		this.imageSrc = AssetUtil.getWalletImage(this.wallet);
		if (this.imageSrc) return;
		this.imageLoading = true;
		this.imageSrc = await AssetUtil.fetchWalletImage(this.wallet.image_id);
		this.imageLoading = false;
	}
	sendImpressionEvent() {
		if (!this.wallet || this.isImpressed) return;
		this.isImpressed = true;
		EventsController.sendWalletImpressionEvent({
			name: this.wallet.name,
			walletRank: this.wallet.order,
			explorerId: this.explorerId,
			view: RouterController.state.view,
			query: this.walletQuery,
			certified: this.certified,
			displayIndex: this.displayIndex
		});
	}
};
W3mAllWalletsListItem.styles = styles_default$2;
__decorate$4([r()], W3mAllWalletsListItem.prototype, "visible", void 0);
__decorate$4([r()], W3mAllWalletsListItem.prototype, "imageSrc", void 0);
__decorate$4([r()], W3mAllWalletsListItem.prototype, "imageLoading", void 0);
__decorate$4([r()], W3mAllWalletsListItem.prototype, "isImpressed", void 0);
__decorate$4([n()], W3mAllWalletsListItem.prototype, "explorerId", void 0);
__decorate$4([n()], W3mAllWalletsListItem.prototype, "walletQuery", void 0);
__decorate$4([n()], W3mAllWalletsListItem.prototype, "certified", void 0);
__decorate$4([n()], W3mAllWalletsListItem.prototype, "displayIndex", void 0);
__decorate$4([n({ type: Object })], W3mAllWalletsListItem.prototype, "wallet", void 0);
W3mAllWalletsListItem = __decorate$4([customElement("w3m-all-wallets-list-item")], W3mAllWalletsListItem);
var styles_default$1 = css`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({ durations }) => durations["xl"]};
    animation-timing-function: ${({ easings }) => easings["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({ spacing }) => spacing["4"]};
    padding-bottom: ${({ spacing }) => spacing["4"]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;
var __decorate$3 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var PAGINATOR_ID = "local-paginator";
var W3mAllWalletsList = class W3mAllWalletsList$1 extends i {
	constructor() {
		super();
		this.unsubscribe = [];
		this.paginationObserver = void 0;
		this.loading = !ApiController.state.wallets.length;
		this.wallets = ApiController.state.wallets;
		this.mobileFullScreen = OptionsController.state.enableMobileFullScreen;
		this.unsubscribe.push(...[ApiController.subscribeKey("wallets", (val) => this.wallets = val)]);
	}
	firstUpdated() {
		this.initialFetch();
		this.createPaginationObserver();
	}
	disconnectedCallback() {
		this.unsubscribe.forEach((unsubscribe) => unsubscribe());
		this.paginationObserver?.disconnect();
	}
	render() {
		if (this.mobileFullScreen) this.setAttribute("data-mobile-fullscreen", "true");
		return b`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${[
			"0",
			"3",
			"3",
			"3"
		]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading ? this.shimmerTemplate(16) : this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `;
	}
	async initialFetch() {
		this.loading = true;
		const gridEl = this.shadowRoot?.querySelector("wui-grid");
		if (gridEl) {
			await ApiController.fetchWalletsByPage({ page: 1 });
			await gridEl.animate([{ opacity: 1 }, { opacity: 0 }], {
				duration: 200,
				fill: "forwards",
				easing: "ease"
			}).finished;
			this.loading = false;
			gridEl.animate([{ opacity: 0 }, { opacity: 1 }], {
				duration: 200,
				fill: "forwards",
				easing: "ease"
			});
		}
	}
	shimmerTemplate(items, id) {
		return [...Array(items)].map(() => b`
        <wui-card-select-loader type="wallet" id=${o(id)}></wui-card-select-loader>
      `);
	}
	walletsTemplate() {
		return WalletUtil.getWalletConnectWallets(this.wallets).map((wallet, index) => b`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${wallet.id}"
          @click=${() => this.onConnectWallet(wallet)}
          .wallet=${wallet}
          explorerId=${wallet.id}
          certified=${this.badge === "certified"}
          displayIndex=${index}
        ></w3m-all-wallets-list-item>
      `);
	}
	paginationLoaderTemplate() {
		const { wallets, recommended, featured, count, mobileFilteredOutWalletsLength } = ApiController.state;
		const columns = window.innerWidth < 352 ? 3 : 4;
		const currentWallets = wallets.length + recommended.length;
		let shimmerCount = Math.ceil(currentWallets / columns) * columns - currentWallets + columns;
		shimmerCount -= wallets.length ? featured.length % columns : 0;
		if (count === 0 && featured.length > 0) return null;
		if (count === 0 || [
			...featured,
			...wallets,
			...recommended
		].length < count - (mobileFilteredOutWalletsLength ?? 0)) return this.shimmerTemplate(shimmerCount, PAGINATOR_ID);
		return null;
	}
	createPaginationObserver() {
		const loaderEl = this.shadowRoot?.querySelector(`#${PAGINATOR_ID}`);
		if (loaderEl) {
			this.paginationObserver = new IntersectionObserver(([element]) => {
				if (element?.isIntersecting && !this.loading) {
					const { page, count, wallets } = ApiController.state;
					if (wallets.length < count) ApiController.fetchWalletsByPage({ page: page + 1 });
				}
			});
			this.paginationObserver.observe(loaderEl);
		}
	}
	onConnectWallet(wallet) {
		ConnectorController.selectWalletConnector(wallet);
	}
};
W3mAllWalletsList.styles = styles_default$1;
__decorate$3([r()], W3mAllWalletsList.prototype, "loading", void 0);
__decorate$3([r()], W3mAllWalletsList.prototype, "wallets", void 0);
__decorate$3([r()], W3mAllWalletsList.prototype, "badge", void 0);
__decorate$3([r()], W3mAllWalletsList.prototype, "mobileFullScreen", void 0);
W3mAllWalletsList = __decorate$3([customElement("w3m-all-wallets-list")], W3mAllWalletsList);
var styles_default = i$1`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
var __decorate$2 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var W3mAllWalletsSearch = class W3mAllWalletsSearch$1 extends i {
	constructor() {
		super(...arguments);
		this.prevQuery = "";
		this.prevBadge = void 0;
		this.loading = true;
		this.mobileFullScreen = OptionsController.state.enableMobileFullScreen;
		this.query = "";
	}
	render() {
		if (this.mobileFullScreen) this.setAttribute("data-mobile-fullscreen", "true");
		this.onSearch();
		return this.loading ? b`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>` : this.walletsTemplate();
	}
	async onSearch() {
		if (this.query.trim() !== this.prevQuery.trim() || this.badge !== this.prevBadge) {
			this.prevQuery = this.query;
			this.prevBadge = this.badge;
			this.loading = true;
			await ApiController.searchWallet({
				search: this.query,
				badge: this.badge
			});
			this.loading = false;
		}
	}
	walletsTemplate() {
		const { search } = ApiController.state;
		const markedInstalledWallets = WalletUtil.markWalletsAsInstalled(search);
		const walletsByWcSupport = WalletUtil.filterWalletsByWcSupport(markedInstalledWallets);
		if (!walletsByWcSupport.length) return b`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `;
		return b`
      <wui-grid
        data-testid="wallet-list"
        .padding=${[
			"0",
			"3",
			"3",
			"3"
		]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${walletsByWcSupport.map((wallet, index) => b`
            <w3m-all-wallets-list-item
              @click=${() => this.onConnectWallet(wallet)}
              .wallet=${wallet}
              data-testid="wallet-search-item-${wallet.id}"
              explorerId=${wallet.id}
              certified=${this.badge === "certified"}
              walletQuery=${this.query}
              displayIndex=${index}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `;
	}
	onConnectWallet(wallet) {
		ConnectorController.selectWalletConnector(wallet);
	}
};
W3mAllWalletsSearch.styles = styles_default;
__decorate$2([r()], W3mAllWalletsSearch.prototype, "loading", void 0);
__decorate$2([r()], W3mAllWalletsSearch.prototype, "mobileFullScreen", void 0);
__decorate$2([n()], W3mAllWalletsSearch.prototype, "query", void 0);
__decorate$2([n()], W3mAllWalletsSearch.prototype, "badge", void 0);
W3mAllWalletsSearch = __decorate$2([customElement("w3m-all-wallets-search")], W3mAllWalletsSearch);
var __decorate$1 = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var W3mAllWalletsView = class W3mAllWalletsView$1 extends i {
	constructor() {
		super(...arguments);
		this.search = "";
		this.badge = void 0;
		this.onDebouncedSearch = CoreHelperUtil.debounce((value) => {
			this.search = value;
		});
	}
	render() {
		const isSearch = this.search.length >= 2;
		return b`
      <wui-flex .padding=${[
			"1",
			"3",
			"3",
			"3"
		]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge === "certified"}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${isSearch || this.badge ? b`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>` : b`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `;
	}
	onInputChange(event) {
		this.onDebouncedSearch(event.detail);
	}
	onCertifiedSwitchChange(event) {
		if (event.detail) {
			this.badge = "certified";
			SnackController.showSvg("Only WalletConnect certified", {
				icon: "walletConnectBrown",
				iconColor: "accent-100"
			});
		} else this.badge = void 0;
	}
	qrButtonTemplate() {
		if (CoreHelperUtil.isMobile()) return b`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `;
		return null;
	}
	onWalletConnectQr() {
		RouterController.push("ConnectingWalletConnect");
	}
};
__decorate$1([r()], W3mAllWalletsView.prototype, "search", void 0);
__decorate$1([r()], W3mAllWalletsView.prototype, "badge", void 0);
W3mAllWalletsView = __decorate$1([customElement("w3m-all-wallets-view")], W3mAllWalletsView);
var __decorate = function(decorators, target, key, desc) {
	var c$2 = arguments.length, r$3 = c$2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d$1;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r$3 = Reflect.decorate(decorators, target, key, desc);
	else for (var i$4 = decorators.length - 1; i$4 >= 0; i$4--) if (d$1 = decorators[i$4]) r$3 = (c$2 < 3 ? d$1(r$3) : c$2 > 3 ? d$1(target, key, r$3) : d$1(target, key)) || r$3;
	return c$2 > 3 && r$3 && Object.defineProperty(target, key, r$3), r$3;
};
var W3mDownloadsView = class W3mDownloadsView$1 extends i {
	constructor() {
		super(...arguments);
		this.wallet = RouterController.state.data?.wallet;
	}
	render() {
		if (!this.wallet) throw new Error("w3m-downloads-view");
		return b`
      <wui-flex gap="2" flexDirection="column" .padding=${[
			"3",
			"3",
			"4",
			"3"
		]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `;
	}
	chromeTemplate() {
		if (!this.wallet?.chrome_store) return null;
		return b`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`;
	}
	iosTemplate() {
		if (!this.wallet?.app_store) return null;
		return b`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`;
	}
	androidTemplate() {
		if (!this.wallet?.play_store) return null;
		return b`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`;
	}
	homepageTemplate() {
		if (!this.wallet?.homepage) return null;
		return b`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `;
	}
	openStore(params) {
		if (params.href && this.wallet) {
			EventsController.sendEvent({
				type: "track",
				event: "GET_WALLET",
				properties: {
					name: this.wallet.name,
					walletRank: this.wallet.order,
					explorerId: this.wallet.id,
					type: params.type
				}
			});
			CoreHelperUtil.openHref(params.href, "_blank");
		}
	}
	onChromeStore() {
		if (this.wallet?.chrome_store) this.openStore({
			href: this.wallet.chrome_store,
			type: "chrome_store"
		});
	}
	onAppStore() {
		if (this.wallet?.app_store) this.openStore({
			href: this.wallet.app_store,
			type: "app_store"
		});
	}
	onPlayStore() {
		if (this.wallet?.play_store) this.openStore({
			href: this.wallet.play_store,
			type: "play_store"
		});
	}
	onHomePage() {
		if (this.wallet?.homepage) this.openStore({
			href: this.wallet.homepage,
			type: "homepage"
		});
	}
};
W3mDownloadsView = __decorate([customElement("w3m-downloads-view")], W3mDownloadsView);
export { W3mAllWalletsView, W3mConnectingWcBasicView, W3mDownloadsView };
