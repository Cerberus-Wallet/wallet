import {setupAmbexBMLMessenger, sendMessage, addMessageHandler, makeRPCError, BROADCASTER} from "./ambexBookmarkletMessenger";

window.bmlInjected = true;

const iframe = document.createElement('iframe');
iframe.src= process.env.AMBIRE_URL + "/bookmarklet/frame.html";
iframe.style.width = "1px"
iframe.style.height = "1px"
iframe.style.backgroundColor = "transparent"
iframe.style.border = "none"
iframe.style.opacity = "0"
iframe.style.position = "absolute"
iframe.style.left = "-9999"
iframe.style.top = "-9999"
/*iframe.sandbox.add("allow-top-navigation");
iframe.sandbox.add("allow-top-navigation-by-user-activation");
iframe.sandbox.add("allow-scripts");
iframe.sandbox.add("allow-same-origin");*/

document.body.appendChild(iframe);

// This script runs in page context and registers a listener.
// Note that the page may override/hook things like addEventListener...
const VERBOSE = parseInt(process.env.VERBOSE);

const Web3 = require("web3");
const USER_INTERVENTION_METHODS = [
	"eth_sendTransaction",
	"personal_sign",
	"eth_sign",
	"personal_sign"
];

//wrapped promise for ethereum.request
const ethRequest = (requestPayload) => new Promise((res, rej) => {

	let replyTimeout = 5 * 1000;
	if (requestPayload && requestPayload.method && USER_INTERVENTION_METHODS.indexOf(requestPayload.method) !== -1) {
		replyTimeout = 5 * 60 * 1000;
		//NOTIFY?
	}

	sendMessage({
		to: "ambirePageContext",
		type: "web3Call",
		data: requestPayload
	}, reply => {
		const data = reply.data;
		if (data) {
			if (data.error) {
				rej(data.error)
			} else {
				const result = reply.data?reply.data.result:null;
				if (reply.error) {
					return rej(data.error)
				}
				return res(result)
			}
		} else {
			return rej("empty reply")
		}
	}, {replyTimeout}).catch(err => {
		console.error("error request", err);
		return rej(err)
	})
});

//wrapped promise for provider.send
const sendRequest = (requestPayload, callback) => new Promise((res, rej) => {

	let replyTimeout = 5 * 1000;
	if (requestPayload && requestPayload.method && USER_INTERVENTION_METHODS.indexOf(requestPayload.method) !== -1) {
		replyTimeout = 60 * 1000;
	}

	sendMessage({
		to: "ambirePageContext",
		type: "web3Call",
		data: requestPayload
	}, reply => {
		const data = reply.data;
		if (data) {
			if (data.error) {
				//avoid to break web3calls dapps with rej...
				console.error("err here");
				//rej({message:data.error})
				callback({code:-1,message:data.error, stack:""}, makeRPCError(requestPayload, data.error));
				res(new Error(data.error));
			} else {
				const result = reply.data?reply.data.result:null;
				if (callback) {
					callback(reply.error, reply.data);
				}
				res(result)
			}
		} else {
			callback("empty reply", makeRPCError(requestPayload, "empty reply"));
			res(new Error("empty reply"))//avoid to break web3calls dapps with rej...
		}
	}, {replyTimeout}).catch(err => {
		console.error("error send", err);
		callback({code:-1,message:data.error, stack:""}, makeRPCError(requestPayload, err));
		res(new Error(data.error))//avoid to break web3calls dapps with rej...
	})
});

function accountsChanged(account) {
	window.ethereum.emit("accountsChanged", account ? [account] : []);
	window.web3.currentProvider.emit("accountsChanged", account ? [account] : []);
}

function chainChanged(chainId) {
	window.ethereum.emit("chainChanged", chainId);
	window.web3.currentProvider.emit("chainChanged", chainId);
	window.ethereum.emit("networkChanged", chainId);
	window.web3.currentProvider.emit("networkChanged", chainId);
}

function ExtensionProvider() {

	this.eventHandlers = {
		"chainChanged": [],
		"networkChanged": [],
		"accountsChanged": [],
	};

	this.on = function (evt, handler) {
		if (VERBOSE) console.log("Setting event handler for " + evt);
		if (Object.keys(this.eventHandlers).indexOf(evt) !== -1) {
			this.eventHandlers[evt].push(handler);
		}
	};

	this.removeListener = function (evt, handler) {
		if (Object.keys(this.eventHandlers).indexOf(evt) !== -1) {
			const index = this.eventHandlers[evt].findIndex(handler);
			if (index !== -1) {
				delete this.eventHandlers[evt][index];
			}
		}
	};

	this.emit = function (evt, data) {
		if (this.eventHandlers[evt] && this.eventHandlers[evt].length) {
			for (let callback of this.eventHandlers[evt]) {
				callback(data);
			}
		}
	};

	this.send = async function (payload, web3Callback) {
		if (VERBOSE) console.log("Payload to send to background", payload);
		if (VERBOSE) console.log("callback:", web3Callback);

		let formattedPayload = {
			jsonrpc: '2.0',
			id: Math.random(),
		};
		if (typeof payload === "string") {
			formattedPayload.method = payload;
		} else {
			formattedPayload = {
				...formattedPayload,
				...payload
			};
		}

		if (VERBOSE) console.log("Formatted payload", formattedPayload);

		const res = await sendRequest(formattedPayload, web3Callback);

		if (VERBOSE) console.log("PC result : ", res);

		return res;
	};

	this.fetchNetworkId = async () => {
		const genId = "netId_" + Math.random();
		const callback = (error, payload) => {
			if (error) {
				console.log(`Could not get networkId`);
			} else {
				if (window.web3 && window.web3.currentProvider && payload.result > 0) {
					this.ambireNetworkId = payload.result;
					window.web3.currentProvider.networkVersion = payload.result;
				}
			}
		};

		await sendRequest({
			jsonrpc: "2.0",
			id: genId,
			method: "eth_chainId"
		}, callback);
	};

	this.supportsSubscriptions = () => false;
	this.disconnect = () => true;

	this.enable = async function () {
		await this.fetchNetworkId();
	};

	this.request = async function (arg, arg2) {

		const requestMethod = arg.method;
		const genId = "reqId_" + Math.random();
		const payload = {
			jsonrpc: "2.0",
			id: genId,
			method: requestMethod,
		};
		if (arg.params) {
			payload.params = arg.params;
		}

		if (VERBOSE) console.log(`RQ ${genId} ${payload.method}`, payload);
		const res = await ethRequest(payload);
		if (VERBOSE) console.log(`RES  ${genId} ${payload.method}`, res);
		return res;
	};

	this.isMetaMask = true;
	this.isAmbire = true;
}

const ethereum = new ExtensionProvider();

const el = document.currentScript;

let overridden = false;
let existing = window.ethereum && true || false;

if (existing) {
	if (window.ethereum.isAmbire) {
		//dont override
	} else {
		overridden = true;
	}
}

setupAmbexBMLMessenger("pageContext", iframe);
//TODO CHECK IN WHICH CASE WE NEED TO REPORT THIS A SECOND TIME (post load)

addMessageHandler({type:"ambireWalletConnected"}, (message) => {
	if (VERBOSE) console.log("PC: emitting MM event connect", message.data);
	accountsChanged(message.data.account);
	chainChanged(message.data.chainId);
})

addMessageHandler({type:"ambireWalletDisconnected"}, message => {
	if (VERBOSE) console.log("emitting event disconnect");
	window.ethereum.emit("disconnect");
	window.web3.currentProvider.emit("disconnect");
	accountsChanged(null);
	chainChanged(null);
})

addMessageHandler({type:"ambireWalletChainChanged"}, message => {
	if (VERBOSE) console.log("emitting event chainChanged", message);
	chainChanged(message.data.chainId);
})

addMessageHandler({type:"ambireWalletAccountChanged"}, message => {
	if (VERBOSE) console.log("emitting event accountChanged", message);
	accountsChanged(message.data.account);
})

window.ambexBMLMessengerSetup = true;

if (!existing || overridden) {
	window.ethereum = ethereum;
	window.web3 = new Web3(ethereum);
}

el.remove();

window.bridgeIframe = iframe;

iframe.onload = (e) => {
	console.log("IFRAME ONLNOAD", e)
	sendMessage({type: "ping", to: "ambirePageContext", data:{host:window.location.host}})
	sendMessage({type: "pageContextInjected", to: "ambirePageContext", data: {args: el.dataset.args, overridden, existing}})
}
