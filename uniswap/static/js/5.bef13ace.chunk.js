(this["webpackJsonpambire-wallet"]=this["webpackJsonpambire-wallet"]||[]).push([[5],{526:function(e,r,n){"use strict";n.d(r,"c",(function(){return h})),n.d(r,"a",(function(){return w})),n.d(r,"d",(function(){return l})),n.d(r,"b",(function(){return b})),n.d(r,"e",(function(){return g})),n.d(r,"f",(function(){return v})),n.d(r,"g",(function(){return x}));var t=n(7),a=n(2),s=n.n(a),c=n(12),o=n(543),i=n(56),u=n(530),f=n(524),d=2147483648,p={startPath:[2147483692,2147483708,d,0,0],n:10},h=function(e){var r={name:"Ambire Wallet",crypto:f,privKey:e};return new o.Client(r)},w=function(){var e=Object(c.a)(s.a.mark((function e(r,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){r.connect(n,(function(r,n){r?t("Lattice connect: ".concat(r," Or check if the DeviceID is correct.")):e({isPaired:!!n,errConnect:!1})}))})).catch((function(e){return console.error(e),{isPaired:!1,errConnect:e}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(s.a.mark((function e(r,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){r.pair(n,(function(r,n){r?t("Lattice connect: ".concat(r)):e({hasActiveWallet:n,errPair:!1})}))})).catch((function(e){return console.error(e),{hasActiveWallet:!1,errPair:e}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(s.a.mark((function e(r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,n){r.getAddresses(p,(function(r,t){if(r)n("Lattice get addresses: ".concat(r));else{if(!t)throw new Error("Lattice could not get the addresses.");e({res:t,errGetAddresses:!1})}}))})).catch((function(e){return console.error(e),{res:null,errGetAddresses:e}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),g=function(){var e=Object(c.a)(s.a.mark((function e(r,n){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={protocol:"signPersonal",payload:i.ethers.utils.hexlify(n),signerPath:[2147483692,2147483708,d,0,0]},a={currency:"ETH_MSG",data:t},e.next=4,new Promise((function(e,n){r.sign(a,(function(r,t){if(r)n(r);else{if(!t)throw new Error("Lattice could not sign the message.");e({signedMsg:"0x"+t.sig.r+t.sig.s+t.sig.v[0].toString(16),errSignMessage:!1})}}))})).catch((function(e){return console.error(e),{signedMsg:null,errSignMessage:e}}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(s.a.mark((function e(r,n){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={currency:"ETH_MSG",data:{signerPath:[2147483692,2147483708,d,0,0],protocol:"eip712",payload:n}},e.next=3,new Promise((function(e,n){r.sign(t,(function(r,t){if(r)n(r);else{if(!t)throw new Error("Lattice could not sign the message.");e({signedMsg:"0x"+t.sig.r+t.sig.s+t.sig.v[0].toString(16),errSignMessage:!1})}}))})).catch((function(e){return console.error(e),{signedMsg:null,errSignMessage:e}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(c.a)(s.a.mark((function e(r,n,a){var c,o,i,f,p,h,w,l,b,g;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.to,o=n.data,i=n.gas,f=n.gasPrice,p=n.nonce,h=n.value,w=void 0===h?0:h,delete(l=Object(t.a)(Object(t.a)({},n),{},{gasLimit:n.gasLimit||n.gas,chainId:a})).from,delete l.gas,b={nonce:p,gasLimit:i||n.gasLimit,gasPrice:f,to:c,value:w,data:o||"",signerPath:[2147483692,2147483708,d,0,0],chainId:a,useEIP155:!0},g={currency:"ETH",data:b},e.next=8,new Promise((function(e,n){r.sign(g,(function(r,t){if(r)n(r);else{if(!t)throw new Error("Lattice could not sign the message.");delete l.v;var a=Object(u.a)(l,{r:"0x"+t.sig.r,s:"0x"+t.sig.s,v:t.sig.v[0].toString(16)});e({serializedSigned:a,errSignTxn:!1})}}))})).catch((function(e){return console.error(e),{serializedSigned:null,errSignTxn:e}}));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(r,n,t){return e.apply(this,arguments)}}()},528:function(e,r,n){"use strict";n.d(r,"a",(function(){return m}));var t=n(2),a=n.n(t),s=n(12),c=n(7),o=n(568),i=n(620),u=n.n(i),f=n(56),d=n(516),p=n.n(d),h=n(579),w=n(600),l=n(535),b=n(526),g=n(21),v=n(76),x=n(58),y={};function m(e){var r=e.signer,n=e.signerExtra,t=e.chainId,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s="".concat(r.address||r.one).concat(t);return y[s]?y[s]:y[s]=k({signer:r,signerExtra:n,chainId:t},a)}function k(e,r){var n=e.chainId,t=e.signer,i=e.signerExtra;if(i&&"trezor"===i.type){u.a.manifest({email:"contactus@ambire.com",appUrl:"https://wallet.ambire.com"});var d=new o.TrezorSubprovider({trezorConnectClientApi:u.a,networkId:n});return d._initialDerivedKeyInfo=function(e){return{hdKey:p.a.fromExtendedKey(e.info.hdKey.xpub),derivationPath:e.info.derivationPath,baseDerivationPath:e.info.baseDerivationPath}}(i),{signMessage:function(e){return d.signPersonalMessageAsync(f.ethers.utils.hexlify(e),t.address)},signTransaction:function(e){return d.signTransactionAsync(Object(c.a)(Object(c.a)({},e),{},{from:t.address}))},sendTransaction:function(){var e=Object(s.a)(a.a.mark((function e(r){var n,t,s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=x.a.find((function(e){return e.chainId===r.chainId}))){e.next=3;break}throw Error("no network found for chainId : "+r.chainId);case 3:return e.next=5,Object(v.a)(n.id);case 5:if(t=e.sent){e.next=8;break}throw Error("no provider found for network : "+n.id);case 8:return e.t0=f.ethers.utils,e.next=11,t.getTransactionCount(r.from);case 11:return e.t1=e.sent,r.nonce=e.t0.hexlify.call(e.t0,e.t1),s=f.ethers.utils.hexlify(r.gas||r.gasLimit),r.gasPrice=f.ethers.utils.hexlify(r.gasPrice),r=Object(c.a)(Object(c.a)({},r),{},{gas:s}),e.next=18,d.signTransactionAsync(r);case 18:return o=e.sent,e.abrupt("return",t.sendTransaction(o));case 20:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),isConnected:function(){var e=Object(s.a)(a.a.mark((function e(r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.getAccountsAsync(100);case 2:return n=e.sent,e.abrupt("return",n.map((function(e){return e.toLowerCase()})).includes(r.toLowerCase()));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),_signTypedData:function(){var e=Object(s.a)(a.a.mark((function e(r,n,s){var c,o,i,u,f,p,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=g._TypedDataEncoder.hashDomain(r),o=g._TypedDataEncoder.hashStruct(g._TypedDataEncoder.getPrimaryType(n),n,s),i=g._TypedDataEncoder.getPayload(r,n,s),e.next=5,d._initialDerivedKeyInfoAsync();case 5:return u=e.sent,f=d._findDerivedKeyInfoForAddress(u,t.address),p=f.derivationPath,e.next=10,d._trezorConnectClientApi.ethereumSignTypedData({path:p,data:i,metamask_v4_compat:!0,domain_separator_hash:c,message_hash:o});case 10:if(!(h=e.sent).success){e.next=15;break}return e.abrupt("return","".concat(h.payload.signature));case 15:throw new Error(h.payload.error);case 16:case"end":return e.stop()}}),e)})));return function(r,n,t){return e.apply(this,arguments)}}()}}if(i&&"ledger"===i.type){if("webHID"===i.transportProtocol)return{signMessage:function(e){return Object(l.c)(f.ethers.utils.hexlify(e),t.address)},signTransaction:function(e){return Object(l.e)(e,n)},sendTransaction:function(){var e=Object(s.a)(a.a.mark((function e(r){var n,t,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=x.a.find((function(e){return e.chainId===r.chainId}))){e.next=3;break}throw Error("no network found for chainId : "+r.chainId);case 3:return e.next=5,Object(v.a)(n.id);case 5:if(t=e.sent){e.next=8;break}throw Error("no provider found for network : "+n.id);case 8:return e.t0=f.ethers.utils,e.next=11,t.getTransactionCount(r.from);case 11:return e.t1=e.sent,r.nonce=e.t0.hexlify.call(e.t0,e.t1),e.next=15,Object(l.e)(r,r.chainId);case 15:return s=e.sent,e.abrupt("return",t.sendTransaction(s));case 17:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),isConnected:function(){var e=Object(s.a)(a.a.mark((function e(r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.b)();case 2:if(!(n=e.sent)||!n[0]){e.next=7;break}if(!r){e.next=6;break}return e.abrupt("return",!!n.find((function(e){return e.toLowerCase()===r.toLowerCase()})));case 6:return e.abrupt("return",!0);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),_signTypedData:function(e,r,n){var a=g._TypedDataEncoder.hashDomain(e),s=g._TypedDataEncoder.hashStruct(g._TypedDataEncoder.getPrimaryType(r),r,n);return Object(l.d)(a,s,t.address)}};var y=new h.LedgerSubprovider({networkId:n,ledgerEthereumClientFactoryAsync:w.ledgerEthereumBrowserClientFactoryAsync,baseDerivationPath:i.info.baseDerivationPath});return{signMessage:function(e){return y.signPersonalMessageAsync(f.ethers.utils.hexlify(e),t.address)},signTransaction:function(e){return y.signTransactionAsync(Object(c.a)(Object(c.a)({},e),{},{from:t.address}))},sendTransaction:function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw Error("Please use a chrome based browser to use Ledger");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),isConnected:function(){var e=Object(s.a)(a.a.mark((function e(r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getAccountsAsync(1);case 2:return n=e.sent,e.abrupt("return",n.map((function(e){return e.toLowerCase()})).includes(r.toLowerCase()));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),_signTypedData:function(e,r,n){throw Error("Please, use a chrome based browser to use 721 Typed signatures")}}}if(i&&"Lattice"===i.type)return{signMessage:function(){var e=Object(s.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(function(){var e=Object(s.a)(a.a.mark((function e(r){var n,t,s,c,o,u,f,d,p;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.commKey,t=i.deviceId,s=Object(b.c)(n),e.next=4,Object(b.a)(s,t);case 4:if(c=e.sent,o=c.isPaired,!(u=c.errConnect)){e.next=9;break}throw new Error(u.message||u);case 9:if(o){e.next=12;break}throw s.pair(""),new Error("The Lattice device is not paired! Please re-add your account!");case 12:return e.next=14,Object(b.e)(s,r);case 14:if(f=e.sent,d=f.signedMsg,!(p=f.errSignMessage)){e.next=19;break}throw new Error(p);case 19:return e.abrupt("return",d);case 20:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[r]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),signTransaction:function(){var e=Object(s.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(function(){var e=Object(s.a)(a.a.mark((function e(r){var t,s,c,o,u,f,d,p,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.commKey,s=i.deviceId,c=Object(b.c)(t),e.next=4,Object(b.a)(c,s);case 4:if(o=e.sent,u=o.isPaired,!(f=o.errConnect)){e.next=9;break}throw new Error(f.message||f);case 9:if(u){e.next=12;break}throw c.pair(""),new Error("The Lattice device is not paired! Please re-add your account!");case 12:return e.next=14,Object(b.g)(c,r,n);case 14:if(d=e.sent,p=d.serializedSigned,!(h=d.errSignTxn)){e.next=19;break}throw new Error(h);case 19:return e.abrupt("return",p);case 20:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[r]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),sendTransaction:function(){var e=Object(s.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(function(){var e=Object(s.a)(a.a.mark((function e(r){var t,s,c,o,u,d,p,h,w,l,g;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=x.a.find((function(e){return e.chainId===r.chainId}))){e.next=3;break}throw Error("no network found for chainId : "+r.chainId);case 3:return e.next=5,Object(v.a)(t.id);case 5:if(s=e.sent){e.next=8;break}throw Error("no provider found for network : "+t.id);case 8:return e.t0=f.ethers.utils,e.next=11,s.getTransactionCount(r.from);case 11:return e.t1=e.sent,r.nonce=e.t0.hexlify.call(e.t0,e.t1),c=i.commKey,o=i.deviceId,u=Object(b.c)(c),e.next=17,Object(b.a)(u,o);case 17:if(d=e.sent,p=d.isPaired,!(h=d.errConnect)){e.next=22;break}throw new Error(h.message||h);case 22:if(p){e.next=25;break}throw u.pair(""),new Error("The Lattice device is not paired! Please re-add your account!");case 25:return e.next=27,Object(b.g)(u,r,n);case 27:if(w=e.sent,l=w.serializedSigned,!(g=w.errSignTxn)){e.next=32;break}throw new Error(g);case 32:return e.abrupt("return",s.sendTransaction(l));case 33:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[r]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),isConnected:function(){var e=Object(s.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(function(){var e=Object(s.a)(a.a.mark((function e(r){var n,t,s,c,o,u,f,d,p,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,t=i.commKey,s=i.deviceId,c=Object(b.c)(t),e.next=5,Object(b.a)(c,s);case 5:if(o=e.sent,u=o.isPaired,!(f=o.errConnect)){e.next=10;break}throw new Error(f.message||f);case 10:if(u){e.next=13;break}throw c.pair(""),new Error("The Lattice device is not paired! Please re-add your account!");case 13:return e.next=15,Object(b.b)(c);case 15:if(d=e.sent,p=d.res,!(h=d.errGetAddresses)){e.next=20;break}throw new Error("Lattice: ".concat(h),{error:!0});case 20:return n=p,e.abrupt("return",n.map((function(e){return e.toLowerCase()})).includes(r.toLowerCase()));case 22:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[r]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),_signTypedData:function(){var e=Object(s.a)(a.a.mark((function e(r,n,t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(function(){var e=Object(s.a)(a.a.mark((function e(r,n,t){var s,c,o,u,f,d,p,h,w,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=g._TypedDataEncoder.getPayload(r,n,t),c=i.commKey,o=i.deviceId,u=Object(b.c)(c),e.next=5,Object(b.a)(u,o);case 5:if(f=e.sent,d=f.isPaired,!(p=f.errConnect)){e.next=10;break}throw new Error(p.message||p);case 10:if(d){e.next=13;break}throw u.pair(""),new Error("The Lattice device is not paired! Please re-add your account!");case 13:return e.next=15,Object(b.f)(u,s);case 15:if(h=e.sent,w=h.signedMsg,!(l=h.errSignMessage)){e.next=20;break}throw new Error(l);case 20:return e.abrupt("return",w);case 21:case"end":return e.stop()}}),e)})));return function(r,n,t){return e.apply(this,arguments)}}(),[r,n,t]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r,n,t){return e.apply(this,arguments)}}()};if(t.address){if(!window.ethereum)throw new Error("No web3 support detected in your browser: if you created this account through MetaMask, please install it.");var m=new f.ethers.providers.Web3Provider(window.ethereum,"any"),k=m.getSigner(t.address);return k.isConnected=function(){var e=Object(s.a)(a.a.mark((function e(r,n){var t,s,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.listAccounts();case 2:if(t=e.sent,s=!0,!t.length){e.next=14;break}if(r&&(s=!!t.find((function(e){return e.toLowerCase()===r.toLowerCase()}))),!n){e.next=12;break}return e.next=9,m.getNetwork();case 9:c=e.sent,o=c.chainId,s=s&&o===n;case 12:e.next=15;break;case 14:s=!1;case 15:return e.abrupt("return",s);case 16:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),k}throw t.one?new Error("getWallet not applicable for QuickAccounts: use primaryKeyBackup with the passphrase and /second-sig"):new Error("unknown signer type")}function O(e,r){return j.apply(this,arguments)}function j(){return(j=Object(s.a)(a.a.mark((function e(r,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.apply(this,n).catch((function(e){throw new Error("Lattice: ".concat(e.message))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},535:function(e,r,n){"use strict";(function(e){n.d(r,"a",(function(){return h})),n.d(r,"b",(function(){return b})),n.d(r,"e",(function(){return k})),n.d(r,"c",(function(){return j})),n.d(r,"d",(function(){return P}));var t=n(7),a=n(2),s=n.n(a),c=n(12),o=n(618),i=n(619),u=n(530),f=n(211),d=n(516),p=null,h="44'/60'/0'/0";function w(){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.list();case 2:if(!(p=e.sent).length){e.next=11;break}if(!p[0].opened){e.next=8;break}return e.abrupt("return",new o.a(p[0]));case 8:return e.abrupt("return",o.a.open(p[0]));case 9:e.next=22;break;case 11:return e.prev=11,e.next=14,o.a.request();case 14:return e.abrupt("return",e.sent);case 17:if(e.prev=17,e.t0=e.catch(11),!e.t0.message.includes("reading 'open'")){e.next=21;break}throw new Error("ledger WebHID request denied");case 21:throw new Error("Could not request WebHID ledger: "+e.t0.message);case 22:case"end":return e.stop()}}),e,null,[[11,17]])})))).apply(this,arguments)}function b(){return g.apply(this,arguments)}function g(){return(g=Object(c.a)(s.a.mark((function e(){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:return r=e.sent,e.next=5,v(r);case 5:return n=e.sent,r.close(),e.abrupt("return",n.map((function(e){return e.address})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=Object(c.a)(s.a.mark((function r(n){var t,a,c,o,i;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t="m/".concat(h),r.next=3,y(n,t).then((function(e){return e})).catch((function(e){throw 25871===e.statusCode||27404===e.statusCode?Error("Please make sure your ledger is unlocked and running the Ethereum app. "+e.message):Error("Could not get address from ledger : "+e)}));case 3:return a=r.sent,(c=new d).publicKey=e.from(a.publicKey,"hex"),c.chainCode=e.from(a.chainCode,"hex"),o=I(c),i={hdKey:c,address:o,derivationPath:t,baseDerivationPath:h},r.abrupt("return",C(i,1));case 10:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function y(e,r){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(s.a.mark((function e(r,n){var t,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.a(r),c=new Promise((function(e,r){t=setTimeout((function(){return r(new Error("Device took too long to respond..."))}),1e4)})),e.abrupt("return",Promise.race([a.getAddress(n,!1,!0),c]).then((function(e){return clearTimeout(t),e})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,r){return O.apply(this,arguments)}function O(){return(O=Object(c.a)(s.a.mark((function e(r,n){var a,c,o,f,d,p,h,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:return a=e.sent,c=r.from,delete(o=Object(t.a)(Object(t.a)({},r),{},{gasLimit:r.gasLimit||r.gas,chainId:n})).from,delete o.gas,f=Object(u.a)(o),e.next=10,v(a);case 10:if(d=e.sent,d[0].address.toLowerCase()!==c.toLowerCase()){e.next=30;break}return e.prev=13,e.next=16,new i.a(a).signTransaction(d[0].derivationPath,f.substr(2));case 16:h=e.sent,e.next=22;break;case 19:throw e.prev=19,e.t0=e.catch(13),new Error("Could not sign transaction "+e.t0);case 22:if(l=parseInt(h.v,16),Math.floor((l-35)/2)===n){e.next=26;break}throw new Error("Invalid returned V 0x"+h.v);case 26:delete o.v,p=Object(u.a)(o,{r:"0x"+h.r,s:"0x"+h.s,v:l}),e.next=31;break;case 30:throw new Error("Incorrect address. Are you using the correct account/ledger?");case 31:return a.close(),e.abrupt("return",p);case 33:case"end":return e.stop()}}),e,null,[[13,19]])})))).apply(this,arguments)}function j(e,r){return E.apply(this,arguments)}function E(){return(E=Object(c.a)(s.a.mark((function e(r,n){var t,a,c,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:return t=e.sent,e.next=5,v(t);case 5:if(a=e.sent,(c=a[0]).address.toLowerCase()!==n.toLowerCase()){e.next=20;break}return e.prev=8,e.next=11,new i.a(t).signPersonalMessage(c.derivationPath,r.substr(2));case 11:u=e.sent,o="0x"+u.r+u.s+u.v.toString(16),e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(8),new Error("Signature denied "+e.t0.message);case 18:e.next=21;break;case 20:throw new Error("Incorrect address. Are you using the correct account/ledger?");case 21:return t.close(),e.abrupt("return",o);case 23:case"end":return e.stop()}}),e,null,[[8,15]])})))).apply(this,arguments)}function P(e,r,n){return T.apply(this,arguments)}function T(){return(T=Object(c.a)(s.a.mark((function e(r,n,t){var a,c,o,u,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:return a=e.sent,e.next=5,v(a);case 5:if(c=e.sent,(o=c[0]).address.toLowerCase()!==t.toLowerCase()){e.next=20;break}return e.prev=8,e.next=11,new i.a(a).signEIP712HashedMessage(o.derivationPath,r,n);case 11:f=e.sent,u="0x"+f.r+f.s+f.v.toString(16),e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(8),new Error("Signature denied "+e.t0.message);case 18:e.next=21;break;case 20:throw new Error("Incorrect address. Are you using the correct account/ledger?");case 21:return a.close(),e.abrupt("return",u);case 23:case"end":return e.stop()}}),e,null,[[8,15]])})))).apply(this,arguments)}function C(e,r){for(var n=[],t=0;t<r;t++){var a="m/".concat(e.baseDerivationPath,"/").concat(t),s="m/".concat(t),c=e.hdKey.derive(s),o={address:I(c),hdKey:c,baseDerivationPath:e.baseDerivationPath,derivationPath:a};n.push(o)}return n}function I(e){var r=e.publicKey,n=f.publicToAddress(r,!0).toString("hex");return f.addHexPrefix(n).toLowerCase()}}).call(this,n(28).Buffer)},589:function(e,r){},590:function(e,r){},591:function(e,r){},592:function(e,r){},593:function(e,r){},595:function(e,r){},596:function(e,r){},597:function(e,r){},599:function(e,r){},606:function(e,r){},609:function(e,r){}}]);
//# sourceMappingURL=5.bef13ace.chunk.js.map