(this["webpackJsonpambire-wallet"]=this["webpackJsonpambire-wallet"]||[]).push([[15],{1592:function(e,t,n){},1616:function(e,t,n){"use strict";n.r(t);var r=n(5),i=n(8),a=(n(1592),n(190)),c=n(154),s=n(37),o=n(33),l=n(789),u=n(80),d=n(60),f=n(155),h=n(642),b=n(3),p=n.n(b),j=n(387),m=n.n(j),g=n(45),x=n(254),y=n(627),O=n(791),v=n(608),w=n(13),k=n(694),S=n(157),N=n(4);var A=p.a.memo((function(e){var t=e.bundle,n=e.mined,r=void 0!==n&&n,i=e.feeAssets,a=Object(S.a)().constants,o=a.tokenList,h=a.humanizerInfo,b=d.a.find((function(e){return e.id===t.network}));if(!Array.isArray(t.txns))return Object(N.jsx)("h3",{className:"error",children:"Bundle has no transactions (should never happen)"});var p,j=t.txns[t.txns.length-1],m=Object(f.c)(h,o,j,t.network,t.identity),g=t.txns.length>1&&m.match(new RegExp("to Gas Tank","i")),x=g&&!t.gasTankFee?t.txns.slice(0,-1):t.txns,y=i?i.find((function(e){return e.symbol===t.feeToken})):null,O=y?Object(k.b)(y):null,A=m.split(" "),P=A.length?A[1]+" "+A[2]:[],T=t.gasTankFee&&t.gasTankFee.cashback&&y?Object(w.formatUnits)(t.gasTankFee.cashback.toString(),null===y||void 0===y?void 0:y.decimals).toString()*(null===y||void 0===y?void 0:y.price):0,R=O&&t.feeInUSDPerGas*O+T;return Object(N.jsxs)("div",{className:"bundlePreview bundle",children:[x.map((function(e,n){return Object(N.jsx)(l.a,{txn:e,network:t.network,account:t.identity,mined:r,addressLabel:!!t.meta&&t.meta.addressLabel},n)})),Object(N.jsxs)("ul",{className:"details",children:[g&&!t.gasTankFee?Object(N.jsxs)("li",{children:[Object(N.jsxs)("label",{children:[Object(N.jsx)(c.h,{}),"Fee"]}),Object(N.jsx)("p",{children:P.split(" ").map((function(e,t){return 0===t?Object(v.a)(e,!0,8):e})).join(" ")})]}):null,t.executed&&!t.executed.success&&Object(N.jsxs)("li",{children:[Object(N.jsx)("label",{children:"Error"}),Object(N.jsx)("p",{children:t.executed.errorMsg||"unknown error"})]}),t.gasTankFee&&null!==y&&r&&Object(N.jsxs)(N.Fragment,{children:[O&&Object(N.jsx)(u.y,{label:"\n              You saved $ ".concat(Object(v.a)(t.feeInUSDPerGas*O,!0,6),", ").concat(T>0?"and got back $ ".concat(Object(v.a)(T,!0,6)," as cashback,"):""," ended up paying only $ ").concat(Object(v.a)(t.feeInUSDPerGas*t.gasLimit-T,!0,6),"\n            "),children:Object(N.jsxs)("li",{children:[Object(N.jsxs)("label",{children:[Object(N.jsx)(c.h,{}),"Fee (Paid with Gas Tank)"]}),Object(N.jsxs)("p",{children:["$ ",Object(v.a)(t.feeInUSDPerGas*t.gasLimit-T,!0,6)]})]})}),O&&Object(N.jsx)(u.y,{label:"\n              Saved: $ ".concat(Object(v.a)(t.feeInUSDPerGas*O,!0,6),"\n              ").concat(T>0?"Cashback: $ ".concat(Object(v.a)(T,!0,6)):"","\n            "),children:Object(N.jsxs)("li",{children:[Object(N.jsxs)("label",{children:[Object(N.jsx)(s.V,{}),"Total Saved"]}),"$ ",Object(v.a)(R,!0,6)]})})]}),Object(N.jsxs)("li",{children:[Object(N.jsxs)("label",{children:[Object(N.jsx)(c.d,{}),"Submitted on"]}),Object(N.jsx)("p",{children:t.submittedAt&&(p=new Date(t.submittedAt),"".concat(p.toLocaleDateString()," ").concat(p.toLocaleTimeString())).toString()})]}),t.gasTankFee&&!r&&Object(N.jsxs)("li",{children:[Object(N.jsxs)("label",{children:[Object(N.jsx)(s.V,{}),"Saved by Gas Tank"]}),"$ ",Object(v.a)(t.feeInUSDPerGas*O,!0,6),Object(N.jsx)("span",{style:{color:"#ebaf40"},children:"+ cashback is pending"})]}),t.replacesTxId?Object(N.jsxs)("li",{children:[Object(N.jsxs)("label",{children:[Object(N.jsx)(s.bb,{}),"Replaces transaction"]}),Object(N.jsx)("p",{children:t.replacesTxId})]}):null,t.txId?Object(N.jsxs)("li",{children:[Object(N.jsxs)("label",{children:[Object(N.jsx)(c.l,{}),"Block Explorer"]}),Object(N.jsx)("p",{children:Object(N.jsx)("a",{href:b.explorerUrl+"/tx/"+t.txId,target:"_blank",rel:"noreferrer",children:b.explorerUrl.split("/")[2]})})]}):null]})]},t._id)}));t.default=function(e){var t=e.relayerURL,n=e.selectedAcc,d=e.selectedNetwork,f=e.showSendTxns,p=e.addRequest,j=e.eligibleRequests,v=e.setSendTxnState,w=Object(g.a)().addToast,k=Object(O.useHistory)(),S=Object(O.useParams)(),P=Object(b.useState)((function(){return Date.now()})),T=Object(i.a)(P,2),R=T[0],I=T[1];Object(b.useEffect)((function(){Date.now()-R>5e3&&I(Date.now());var e=setTimeout((function(){return I(Date.now())}),1e4);return function(){return clearTimeout(e)}}),[R]);var E=t?"".concat(t,"/identity/").concat(n,"/").concat(d.id,"/transactions?cacheBreak=").concat(R):null,_=Object(o.j)({url:E}),C=_.data,F=_.errMsg,U=_.isLoading,D=t?"".concat(t,"/gas-tank/assets?cacheBreak=").concat(R):null,L=Object(o.j)({url:D}).data,B=Object(b.useCallback)((function(e){e.txns.forEach((function(e,t){p({id:"replace_"+t,chainId:d.chainId,account:n,type:"eth_sendTransaction",txn:{to:e[0].toLowerCase(),value:"0x"===e[1]?"0x0":e[1],data:e[2]}})})),v({showing:!0,replaceByDefault:!0,mustReplaceNonce:e.nonce})}),[p,d,n,v]),M=C?C.txns.filter((function(e){return e.executed})):[],G=Math.ceil(M.length/10),H=Object(b.useMemo)((function(){return Math.min(Math.max(Number(S.page),1),G)||1}),[S.page,G]),$=Object(b.useState)(H),z=Object(i.a)($,2),q=z[0],W=z[1],K=M.slice(10*(q-1),10*q).map((function(e){return Object(N.jsx)(A,{bundle:e,mined:!0,feeAssets:L})}));if(Object(b.useEffect)((function(){return!U&&k.replace("/wallet/transactions/".concat(q))}),[q,k,U]),Object(b.useEffect)((function(){return W(H)}),[n,d,H]),!t)return Object(N.jsx)("section",{id:"transactions",children:Object(N.jsx)("h3",{className:"validation-error",children:"Unsupported: not currently connected to a relayer."})});var V=function(e){return e.gasTankFee?e:Object(r.a)(Object(r.a)({},e),{},{txns:e.txns.slice(0,-1)})},J=C&&C.txns.filter((function(e){return!e.executed&&!e.replaced})),X=J&&J[0],Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new h.Bundle(Object(r.a)(Object(r.a)({},e),{},{nonce:e.nonce.num,gasLimit:null,minFeeInUSDPerGas:1.14*e.feeInUSDPerGas},t))},Q=function(e){return v({showing:!0,replacementBundle:Y(e,{txns:[[n,"0x0","0x"]]}),mustReplaceNonce:e.nonce.num})},Z=Object(N.jsxs)("div",{className:"pagination-controls",children:[Object(N.jsx)("div",{className:"pagination-title",children:"Page"}),Object(N.jsx)(u.e,{clear:!0,mini:!0,onClick:function(){return q>1&&W((function(e){return e-1}))},children:Object(N.jsx)(y.a,{})}),Object(N.jsxs)("div",{className:"pagination-current",children:[q," ",Object(N.jsxs)("span",{children:["/ ",G]})]}),Object(N.jsx)(u.e,{clear:!0,mini:!0,onClick:function(){return q<G&&W((function(e){return e+1}))},children:Object(N.jsx)(y.b,{})})]});return Object(N.jsxs)("section",{id:"transactions",children:[!!j.length&&Object(N.jsxs)("div",{className:"panel",id:"waiting-transactions",children:[Object(N.jsx)("div",{className:"panel-heading",children:Object(N.jsxs)("div",{className:"title",children:[Object(N.jsx)(a.f,{size:25}),"Waiting to be signed (current batch)"]})}),Object(N.jsx)("div",{className:"content",children:Object(N.jsxs)("div",{className:"bundle",children:[Object(N.jsx)("div",{className:"bundle-list",onClick:function(){return f(null)},children:j.map((function(e){return Object(N.jsx)(l.a,{network:d.id,account:n,disableExpand:!0,txn:Object(x.a)(e.txn,n)},e.id)}))}),Object(N.jsx)("div",{className:"actions",children:Object(N.jsx)(u.e,{small:!0,icon:Object(N.jsx)(s.g,{}),onClick:function(){return f(null)},children:"Sign or reject"})})]})})]}),!!X&&Object(N.jsxs)("div",{className:"panel",id:"pending",children:[Object(N.jsx)("div",{className:"panel-heading",children:Object(N.jsxs)("div",{className:"title",children:[Object(N.jsx)(s.S,{}),"Pending transaction bundle"]})}),Object(N.jsx)("div",{className:"content",children:Object(N.jsxs)("div",{className:"bundle",children:[Object(N.jsx)(A,{bundle:X,feeAssets:L}),Object(N.jsxs)("div",{className:"actions",children:[Object(N.jsx)(u.e,{small:!0,onClick:function(){return B(Y(V(X)))},children:"Replace or modify"}),Object(N.jsx)(u.e,{small:!0,className:"cancel",onClick:function(){var e;Y(e=X).cancel({relayerURL:t,fetch:m.a}).then((function(t){var n=t.success,r=t.message;n?w("Transaction cancelled successfully"):(r.includes("not possible to cancel")?w("Transaction already picked up by the network, you will need to pay a fee to replace it with a cancellation transaction."):w("Not possible to cancel: ".concat(r,", you will need to pay a fee to replace it with a cancellation transaction.")),Q(e))})).catch((function(t){console.error(t),Q(e)}))},children:"Cancel"}),Object(N.jsx)(u.e,{small:!0,onClick:function(){return v({showing:!0,replacementBundle:Y(V(e=X)),mustReplaceNonce:e.nonce.num});var e},children:"Speed up"})]})]})})]}),J&&J.length>1&&Object(N.jsxs)("h4",{children:["NOTE: There are a total of ",J.length," pending transaction bundles."]}),Object(N.jsxs)("div",{id:"confirmed",className:"panel",children:[Object(N.jsxs)("div",{className:"panel-heading",children:[Object(N.jsxs)("div",{className:"title",children:[Object(N.jsx)(c.e,{}),C&&0===C.txns.length?"No transactions yet.":"Confirmed transactions"]}),K.length?Z:null]}),Object(N.jsxs)("div",{className:"content",children:[!t&&Object(N.jsx)("h3",{className:"validation-error",children:"Unsupported: not currently connected to a relayer."}),F&&Object(N.jsxs)("h3",{className:"validation-error",children:["Error getting list of transactions: ",F]}),U&&!C?Object(N.jsx)(u.m,{}):K.length?Object(N.jsxs)(N.Fragment,{children:[K,Z]}):null]})]})]})}},191:function(e,t,n){"use strict";n.r(t);t.default=function(e,t){}},598:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r={"0xb468a1e5596cfbcdf561f21a10490d99b4bb7b68":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jeff_Sessions_with_Elmo_and_Rosita_%28cropped%29.jpg/220px-Jeff_Sessions_with_Elmo_and_Rosita_%28cropped%29.jpg","0x88800092ff476844f74dc2fc427974bbee2794ae":"https://raw.githubusercontent.com/AmbireTech/ambire-brand/main/logos/ambire_logo_white_bg_250x250.png","0x47cd7e91c3cbaaf266369fe8518345fc4fc12935":"https://raw.githubusercontent.com/AmbireTech/ambire-brand/main/logos/xwallet_250x250.png","0xb6456b57f03352be48bf101b46c1752a0813491a":"https://raw.githubusercontent.com/AmbireTech/adex-brand/master/logos/vaporwave-adex-2.png","0xd9a4cb9dc9296e111c66dfacab8be034ee2e1c2c":"https://raw.githubusercontent.com/AmbireTech/adex-brand/master/logos/ADX-loyalty%40256x256.png","0xec3b10ce9cabab5dbf49f946a623e294963fbb4e":"https://raw.githubusercontent.com/AmbireTech/ambire-brand/main/logos/xwallet_250x250.png","0xe9415e904143e42007865e6864f7f632bd054a08":"https://raw.githubusercontent.com/AmbireTech/ambire-brand/main/logos/Ambire_logo_250x250.png","0xade00c28244d5ce17d72e40330b1c318cd12b7c3":"https://raw.githubusercontent.com/AmbireTech/ambire-brand/main/official-logos/Ambire-AdEx/Ambire_AdEx_Symbol_color_white_bg.png"},i="https://storage.googleapis.com/zapper-fi-assets/tokens";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t.toLowerCase(),a=e.toLowerCase();return r[n]||"".concat(i,"/").concat(a,"/").concat(n,".png")}},607:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},608:function(e,t,n){"use strict";function r(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:18;if(isNaN(e)||isNaN(parseFloat(e))||"number"!==typeof e&&"string"!==typeof e)return e;try{var r=Math.min(2,n||0);return("number"===typeof e?e:parseFloat(e)).toLocaleString(void 0,{useGrouping:t,maximumFractionDigits:Math.max(r,n),minimumFractionDigits:r})}catch(i){return console.error(i),e}}n.d(t,"a",(function(){return r}))},618:function(e,t,n){var r=n(607);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},626:function(e,t,n){"use strict";(function(t){var r=n(686),i=n(760);function a(e){var t=e;if("string"!==typeof t)throw new Error("[ethjs-util] while padding to even, value must be string, is currently "+typeof t+", while padToEven.");return t.length%2&&(t="0"+t),t}function c(e){return"0x"+e.toString(16)}e.exports={arrayContainsArray:function(e,t,n){if(!0!==Array.isArray(e))throw new Error("[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '"+typeof e+"'");if(!0!==Array.isArray(t))throw new Error("[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '"+typeof t+"'");return t[Boolean(n)?"some":"every"]((function(t){return e.indexOf(t)>=0}))},intToBuffer:function(e){var n=c(e);return new t(a(n.slice(2)),"hex")},getBinarySize:function(e){if("string"!==typeof e)throw new Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '"+typeof e+"'.");return t.byteLength(e,"utf8")},isHexPrefixed:r,stripHexPrefix:i,padToEven:a,intToHex:c,fromAscii:function(e){for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n).toString(16);t+=r.length<2?"0"+r:r}return"0x"+t},fromUtf8:function(e){return"0x"+a(new t(e,"utf8").toString("hex")).replace(/^0+|0+$/g,"")},toAscii:function(e){var t="",n=0,r=e.length;for("0x"===e.substring(0,2)&&(n=2);n<r;n+=2){var i=parseInt(e.substr(n,2),16);t+=String.fromCharCode(i)}return t},toUtf8:function(e){return new t(a(i(e).replace(/^0+|0+$/g,"")),"hex").toString("utf8")},getKeys:function(e,t,n){if(!Array.isArray(e))throw new Error("[ethjs-util] method getKeys expecting type Array as 'params' input, got '"+typeof e+"'");if("string"!==typeof t)throw new Error("[ethjs-util] method getKeys expecting type String for input 'key' got '"+typeof t+"'.");for(var r=[],i=0;i<e.length;i++){var a=e[i][t];if(n&&!a)a="";else if("string"!==typeof a)throw new Error("invalid abi");r.push(a)}return r},isHexString:function(e,t){return!("string"!==typeof e||!e.match(/^0x[0-9A-Fa-f]*$/))&&(!t||e.length===2+2*t)}}}).call(this,n(25).Buffer)},642:function(e,t,n){var r=n(618),i=n(643),a=n(644),c=n(645),s=n(646),o=n(647),l=n(648),u=n(630);e.exports=r(r(r(r(r(r({},i),a),o),l),u),{},{MerkleTree:c,splitSig:s})},643:function(e,t,n){(function(t){var r=n(623),i=n(88).keccak256,a=n(595);function c(e){return this.leader=a.Address(e.leader),this.follower=a.Address(e.follower),this.guardian=a.Address(e.guardian),this.tokenAddr=a.Address(e.tokenAddr),this.nonce=a.Bytes32(e.nonce),Object.freeze(this),this}c.prototype.hash=function(){return t.from(i.arrayBuffer(r.rawEncode(["address","address","address","address","bytes32"],[this.leader,this.follower,this.guardian,this.tokenAddr,this.nonce])))},c.prototype.hashHex=function(){return"0x".concat(this.hash().toString("hex"))},c.prototype.toSolidityTuple=function(){return[this.leader,this.follower,this.guardian,this.tokenAddr,this.nonce]},c.prototype.hashToSign=function(e,t){return c.getSignableStateRoot(e,this.hashHex(),t)},c.prototype.hashToSignHex=function(e,t){return"0x".concat(this.hashToSign(e,t).toString("hex"))},c.prototype.getResumeSignableMessage=function(e){return t.from(i.arrayBuffer(r.solidityPack(["string","bytes32","uint256"],["resume",this.hashHex(),e])))},c.prototype.getResumeSignableMessageHex=function(e){return"0x".concat(this.getResumeSignableMessage(e).toString("hex"))},c.getSignableStateRoot=function(e,n,a){return t.from(i.arrayBuffer(r.rawEncode(["address","bytes32","bytes32"],[e,n,a])))},c.getBalanceLeaf=function(e,n){return t.from(i.arrayBuffer(r.rawEncode(["address","uint256"],[e,n])))},c.getSpenderBalanceLeaf=function(e,n){return t.from(i.arrayBuffer(r.rawEncode(["address","string","uint256"],[e,"spender",n])))},e.exports={Channel:c,ChannelState:{Challenged:"115792089237316195423570985008687907853269984665640564039457584007913129639935",Active:"0"}}}).call(this,n(25).Buffer)},644:function(e,t,n){var r=n(595);function i(e){return this.channel=e.channel,this.balanceTreeAmount=r.Uint256(e.balanceTreeAmount),this.stateRoot=r.Bytes32(e.stateRoot),this.sigLeader=r.Bytes32Array(e.sigLeader,3),this.sigFollower=r.Bytes32Array(e.sigFollower,3),this.proof=r.Bytes32Array(e.proof,-1),Object.freeze(this),this}i.prototype.toSolidityTuple=function(){return[this.channel.toSolidityTuple(),"0x".concat(this.balanceTreeAmount.toString(16)),this.stateRoot,this.sigLeader,this.sigFollower,this.proof]},e.exports={Withdraw:i}},645:function(e,t,n){var r=n(79),i=n(136),a=n(25).Buffer,c=n(88).keccak256;function s(e,t){if(!t)return e;if(!e)return t;var n=a.concat([e,t].sort(a.compare));return a.from(c.arrayBuffer(n))}function o(e){if(0===e.length)return[[a.from("")]];var t=[];for(t.push(e);t[t.length-1].length>1;)t.push(l(t[t.length-1]));return t}function l(e){return e.reduce((function(e,t,n,r){return n%2===0&&e.push(s(t,r[n+1])),e}),[])}var u=function(){"use strict";function e(t){if(r(this,e),!t.every((function(e){return 32===e.length&&a.isBuffer(e)})))throw new Error("elements must be 32 byte buffers");var n,i={elements:(n=t,n.filter((function(e,t){return n.findIndex((function(t){return t.equals(e)}))===t})))};Object.assign(this,i),this.elements.sort(a.compare);var c={layers:o(this.elements)};Object.assign(this,c)}return i(e,[{key:"getRoot",value:function(){if(!this.root){var e={root:this.layers[this.layers.length-1][0]};Object.assign(this,e)}return this.root}},{key:"verify",value:function(e,t){return this.getRoot().equals(e.reduce((function(e,t){return s(e,t)}),t))}},{key:"proof",value:function(e){var t=this.elements.findIndex((function(t){return t.equals(e)}));if(-1===t)throw new Error("element not found in merkle tree");return this.layers.reduce((function(e,n){var r=function(e,t){var n=e%2?e-1:e+1;return n<t.length?t[n]:null}(t,n);return r&&e.push(r),t=Math.floor(t/2),e}),[])}}]),e}();e.exports=u},646:function(e,t){e.exports=function(e){var t=e.startsWith("0x")?e.slice(2):e,n="0x".concat(t.substring(0,64)),r="0x".concat(t.substring(64,128)),i=parseInt(t.substring(128,130),16);return i<27&&(i+=27),["0x02".concat(i.toString(16),"000000000000000000000000000000000000000000000000000000000000"),n,r]}},647:function(e,t,n){(function(t){var r=n(623),i=n(88).keccak256,a=n(595);function c(e){return this.owner=a.Address(e.owner),this.shares=a.Uint256(e.shares),this.unlocksAt=a.Uint256(e.unlocksAt),Object.freeze(this),this}c.prototype.hash=function(){var e=r.rawEncode(["address","uint256","uint256"],[this.owner,this.shares,this.unlocksAt]);return t.from(i.arrayBuffer(e))},c.prototype.hashHex=function(){return"0x".concat(this.hash().toString("hex"))},e.exports={UnbondCommitment:c}}).call(this,n(25).Buffer)},648:function(e,t,n){var r=n(49).utils,i=r.keccak256,a=r.defaultAbiCoder,c=r.toUtf8Bytes,s=r.solidityPack,o=i(c("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)"));function l(e,t,n){return i(a.encode(["bytes32","bytes32","bytes32","uint256","address"],[i(c("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)")),i(c(e)),i(c("1")),n,t]))}e.exports={getDomainSeparator:l,getApprovalDigest:function(e,t,n,r){var c=l(e.name,e.address,e.chainId);return i(s(["bytes1","bytes1","bytes32","bytes32"],["0x19","0x01",c,i(a.encode(["bytes32","address","address","uint256","uint256","uint256"],[o,t.owner,t.spender,t.value,n,r]))]))}}},666:function(e,t){},686:function(e,t){e.exports=function(e){if("string"!==typeof e)throw new Error("[is-hex-prefixed] value must be type 'string', is currently type "+typeof e+", while checking isHexPrefixed.");return"0x"===e.slice(0,2)}},694:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"g",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"h",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return d}));function r(e,t,n,r,i){if((null===n||void 0===n?void 0:n.relayerless)&&"0x0000000000000000000000000000000000000000"===(null===e||void 0===e?void 0:e.address))return!0;if(!e)return!1;var a=d(e,n,t,r,i).feeInFeeToken;return parseInt(e.balance)/Math.pow(10,e.decimals)>a}function i(e){return(null===e||void 0===e?void 0:e.address)&&"0x0000000000000000000000000000000000000000"!==(null===e||void 0===e?void 0:e.address)?3e4:12e3}var a=["caller is a contract","caller is another contract","contract not allowed","contract not supported","No contractz allowed","o contracts","contracts allowed","ontract is not allowed","aller must be user","aller must be a user","ontract call not allowed"];function c(e){if(e)return e.includes("Router: EXPIRED")?"Swap expired":e.includes("Router: INSUFFICIENT_OUTPUT_AMOUNT")?"Swap will suffer slippage higher than your requirements":e.includes("INSUFFICIENT_PRIVILEGE")?"Your signer address is not authorized.":a.find((function(t){return e.includes(t)}))?"This dApp does not support smart wallets.":e}function s(e){if(e)return e.includes("Router: EXPIRED")?"Try performing the swap again":e.includes("Router: INSUFFICIENT_OUTPUT_AMOUNT")?"Try performing the swap again or increase your slippage requirements":e.includes("INSUFFICIENT_PRIVILEGE")?"If you set a new signer for this account, try re-adding the account.":a.find((function(t){return e.includes(t)}))?"WARNING! We detected that this dApp intentionally blocks smart contract calls. This is a highly disruptive practice, as it breaks support for all smart wallets (Ambire, Gnosis Safe and others). We recommend you report this to the dApp ASAP and ask them to fix it.":"Sending this transaction batch would have resulted in an error, so we prevented it."}function o(e){return a.find((function(t){return e.includes(t)}))}function l(e,t){return"0x"+Math.round(e*Math.pow(10,t)).toString(16)}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t&&e?1===t?e:e/(1-t)*t:0}function d(e,t,n,r,a){var c=function(e,t,n){if(!(null===t||void 0===t?void 0:t.feeInUSD)||!e)return{multiplier:1,addedGas:0};var r=i(e);return n?{addedGas:0,multiplier:1}:{multiplier:parseFloat(((t.gasLimit+r)/t.gasLimit).toFixed(4)),addedGas:r}}(e,t,r),s=c.addedGas,o=c.multiplier,l=i(e),u=1-((null===e||void 0===e?void 0:e.discount)||0),d=o*u,f=(null===e||void 0===e?void 0:e.nativeRate)||1,h=r&&"0x0000000000000000000000000000000000000000"===e.address&&a.id!==e.network,b=t.customFee?t.customFee*u/f:h?t.feeInNative[n]*d/f*t.nativeAssetPriceInUSD/e.price:t.feeInNative[n]*d;return{feeInNative:b,feeInUSD:isNaN(t.nativeAssetPriceInUSD)?void 0:h?b*e.price:b*t.nativeAssetPriceInUSD,feeInFeeToken:b*f,addedGas:s,savedGas:l}}},760:function(e,t,n){var r=n(686);e.exports=function(e){return"string"!==typeof e?e:r(e)?e.slice(2):e}},789:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(8),i=(n(790),n(3)),a=n(155),c=n(60),s=n(13),o=n(80),l=n(627),u=n(37),d=n(154),f=n(598),h=n(608),b=n(157),p=n(4);function j(e){var t=c.a.find((function(t){return t.id===e}));return t?t.nativeAssetSymbol:"UNKNW"}function m(e){var t=this,n=e.txn,m=e.onDismiss,g=e.network,x=e.account,y=e.isFirstFailing,O=e.mined,v=e.disableExpand,w=e.disableDismiss,k=e.disableDismissLabel,S=e.addressLabel,N=void 0===S?null:S,A=Object(b.a)().constants,P=A.tokenList,T=A.humanizerInfo,R=Object(i.useState)(!1),I=Object(r.a)(R,2),E=I[0],_=I[1],C=Object(a.b)(T,n[0]),F=c.a.find((function(e){return e.id===g})),U=Object(a.c)(T,P,n,g,x,{mined:O,extended:!0}).map((function(e){return Array.isArray(e)?e.map((function(e,t){return function(e,t,n){if(1===e.length)return e;if(0===t)return Object(p.jsx)("div",{className:"action ".concat(e.toLowerCase()),children:e},"item-".concat(t));if(!e.type)return Object(p.jsx)("div",{className:"word",children:e},"item-".concat(t));if("token"===e.type)return Object(p.jsxs)("div",{className:"token",children:[e.amount>0&&Object(p.jsx)("span",{children:Object(h.a)(e.amount,!0,e.decimals)}),null!==e.decimals&&e.symbol?Object(p.jsxs)(i.Fragment,{children:[e.address&&Object(p.jsx)("div",{className:"icon",style:{backgroundImage:"url(".concat(Object(f.a)(n.id,e.address),")")}}),e.symbol]}):e.amount>0?"units of unknown token":null]},"item-".concat(t));if("address"===e.type)return Object(p.jsx)("a",{className:"address",href:e.address?"".concat(n.explorerUrl,"/address/").concat(e.address):null,target:"_blank",rel:"noreferrer",onClick:function(e){return e.stopPropagation()},children:Object(p.jsxs)(o.y,{disabled:!e.address,label:e.address,children:[e.name?e.name:e.address,e.address?Object(p.jsx)(l.c,{}):null]})},"item-".concat(t));if("network"===e.type)return Object(p.jsxs)("div",{className:"network",children:[e.icon?Object(p.jsx)("div",{className:"icon",style:{backgroundImage:"url(".concat(e.icon,")")}}):null,e.name]},"item-".concat(t));if("erc721"===e.type){var r=e.network&&e.address&&e.id;return Object(p.jsxs)("a",{className:"erc721",href:r?"#/wallet/nft/".concat(e.network,"/").concat(e.address,"/").concat(e.id):null,target:"_blank",rel:"noreferrer",onClick:function(e){return e.stopPropagation()},children:[e.name,r?Object(p.jsx)(l.c,{}):null]},"item-".concat(t))}return Object(p.jsx)(p.Fragment,{})}(e,t,F)})):e}));return Object(i.useEffect)((function(){return!!N&&Object(a.g)(N)}),[N]),Object(p.jsxs)("div",{className:y?"txnPreview firstFailing":"txnPreview",children:[Object(p.jsxs)("div",{className:"heading",children:[Object(p.jsxs)("div",{className:"info",onClick:function(){return!v&&_((function(e){return!e}))},children:[Object(p.jsxs)("div",{className:"summary-container",children:[!v&&Object(p.jsx)("div",{className:"expandTxn",children:E?Object(p.jsx)(d.g,{}):Object(p.jsx)(d.f,{})}),Object(p.jsx)("div",{className:"summary",children:U})]}),y&&Object(p.jsx)("div",{className:"firstFailingLabel",children:"This is the first failing transaction."}),!y&&!O&&!Object(a.d)(T,n,x)&&Object(p.jsx)("div",{className:"unknownWarning",children:"Warning: interacting with an unknown contract or address."})]}),Object(p.jsx)("div",{className:"actionIcons",children:m?Object(p.jsx)(o.y,{disabled:!w||!k,label:k,children:Object(p.jsx)("div",{className:"dismissTxn ".concat(w?"disabled":""),onClick:function(e){e.stopPropagation(),!w&&m.apply(t,e)},children:Object(p.jsx)(u.I,{})})}):Object(p.jsx)(p.Fragment,{})})]}),E?Object(p.jsxs)("div",{className:"advanced",children:[Object(p.jsxs)("div",{children:[Object(p.jsxs)("b",{children:["Interacting with (",Object(p.jsx)("i",{children:"to"}),"):"]})," ",n[0],C?" (".concat(C,")"):""]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("b",{children:["Value to be sent (",Object(p.jsx)("i",{children:"value"}),"):"]})," ",Object(s.formatUnits)(n[1]||"0x0",18)," ",j(g)]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Data:"})," ",n[2]]})]}):Object(p.jsx)(p.Fragment,{})]})}},790:function(e,t,n){},791:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var i=n(30),a=r(n(3)),c=n(51);n(50),n(191);var s=r(n(55));function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){e.prototype=Object.create(t.prototype),u(e.prototype.constructor=e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}var f=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).history=c.createBrowserHistory(t.props),t}return l(t,e),t.prototype.render=function(){return a.createElement(i.Router,{history:this.history,children:this.props.children})},t}(a.Component),h=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).history=c.createHashHistory(t.props),t}return l(t,e),t.prototype.render=function(){return a.createElement(i.Router,{history:this.history,children:this.props.children})},t}(a.Component),b=function(e,t){return"function"==typeof e?e(t):e},p=function(e,t){return"string"==typeof e?c.createLocation(e,null,null,t):e},j=function(e){return e},m=a.forwardRef;void 0===m&&(m=j);var g=m((function(e,t){var n=e.innerRef,r=e.navigate,i=e.onClick,c=d(e,["innerRef","navigate","onClick"]),s=c.target,l=o({},c,{onClick:function(t){try{i&&i(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||s&&"_self"!==s||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)||(t.preventDefault(),r())}});return l.ref=j!==m&&t||n,a.createElement("a",l)})),x=m((function(e,t){var n=e.component,r=void 0===n?g:n,l=e.replace,u=e.to,f=e.innerRef,h=d(e,["component","replace","to","innerRef"]);return a.createElement(i.__RouterContext.Consumer,null,(function(e){e||s(!1);var n=e.history,i=p(b(u,e.location),e.location),d=i?n.createHref(i):"",g=o({},h,{href:d,navigate:function(){var t=b(u,e.location),r=c.createPath(e.location)===c.createPath(p(t));(l||r?n.replace:n.push)(t)}});return j!==m?g.ref=t||f:g.innerRef=f,a.createElement(r,g)}))})),y=function(e){return e},O=a.forwardRef;void 0===O&&(O=y);var v=O((function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,c=e.activeClassName,l=void 0===c?"active":c,u=e.activeStyle,f=e.className,h=e.exact,j=e.isActive,m=e.location,g=e.sensitive,v=e.strict,w=e.style,k=e.to,S=e.innerRef,N=d(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a.createElement(i.__RouterContext.Consumer,null,(function(e){e||s(!1);var n=m||e.location,c=p(b(k,n),n),d=c.pathname,A=d&&d.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),P=A?i.matchPath(n.pathname,{path:A,exact:h,sensitive:g,strict:v}):null,T=!!(j?j(P,n):P),R="function"==typeof f?f(T):f,I="function"==typeof w?w(T):w;T&&(R=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(R,l),I=o({},I,u));var E=o({"aria-current":T&&r||null,className:R,style:I,to:c},N);return y!==O?E.ref=t||S:E.innerRef=S,a.createElement(x,E)}))}));Object.defineProperty(t,"MemoryRouter",{enumerable:!0,get:function(){return i.MemoryRouter}}),Object.defineProperty(t,"Prompt",{enumerable:!0,get:function(){return i.Prompt}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return i.Redirect}}),Object.defineProperty(t,"Route",{enumerable:!0,get:function(){return i.Route}}),Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return i.Router}}),Object.defineProperty(t,"StaticRouter",{enumerable:!0,get:function(){return i.StaticRouter}}),Object.defineProperty(t,"Switch",{enumerable:!0,get:function(){return i.Switch}}),Object.defineProperty(t,"generatePath",{enumerable:!0,get:function(){return i.generatePath}}),Object.defineProperty(t,"matchPath",{enumerable:!0,get:function(){return i.matchPath}}),Object.defineProperty(t,"useHistory",{enumerable:!0,get:function(){return i.useHistory}}),Object.defineProperty(t,"useLocation",{enumerable:!0,get:function(){return i.useLocation}}),Object.defineProperty(t,"useParams",{enumerable:!0,get:function(){return i.useParams}}),Object.defineProperty(t,"useRouteMatch",{enumerable:!0,get:function(){return i.useRouteMatch}}),Object.defineProperty(t,"withRouter",{enumerable:!0,get:function(){return i.withRouter}}),t.BrowserRouter=f,t.HashRouter=h,t.Link=x,t.NavLink=v}}]);
//# sourceMappingURL=15.34e7d2ff.chunk.js.map