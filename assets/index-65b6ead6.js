import{ar as le,ao as ce}from"./index-0e18a6f0.js";const de=Symbol(),Q=Object.getPrototypeOf,Y=new WeakMap,ue=e=>e&&(Y.has(e)?Y.get(e):Q(e)===Object.prototype||Q(e)===Array.prototype),fe=e=>ue(e)&&e[de]||null,X=(e,t=!0)=>{Y.set(e,t)},J=e=>typeof e=="object"&&e!==null,O=new WeakMap,x=new WeakSet,pe=(e=Object.is,t=(o,m)=>new Proxy(o,m),s=o=>J(o)&&!x.has(o)&&(Array.isArray(o)||!(Symbol.iterator in o))&&!(o instanceof WeakMap)&&!(o instanceof WeakSet)&&!(o instanceof Error)&&!(o instanceof Number)&&!(o instanceof Date)&&!(o instanceof String)&&!(o instanceof RegExp)&&!(o instanceof ArrayBuffer),r=o=>{switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:throw o}},l=new WeakMap,c=(o,m,A=r)=>{const E=l.get(o);if((E==null?void 0:E[0])===m)return E[1];const h=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o));return X(h,!0),l.set(o,[m,h]),Reflect.ownKeys(o).forEach(M=>{if(Object.getOwnPropertyDescriptor(h,M))return;const v=Reflect.get(o,M),R={value:v,enumerable:!0,configurable:!0};if(x.has(v))X(v,!1);else if(v instanceof Promise)delete R.value,R.get=()=>A(v);else if(O.has(v)){const[I,F]=O.get(v);R.value=c(I,F(),A)}Object.defineProperty(h,M,R)}),h},b=new WeakMap,f=[1,1],_=o=>{if(!J(o))throw new Error("object required");const m=b.get(o);if(m)return m;let A=f[0];const E=new Set,h=(i,a=++f[0])=>{A!==a&&(A=a,E.forEach(n=>n(i,a)))};let M=f[1];const v=(i=++f[1])=>(M!==i&&!E.size&&(M=i,I.forEach(([a])=>{const n=a[1](i);n>A&&(A=n)})),A),R=i=>(a,n)=>{const g=[...a];g[1]=[i,...g[1]],h(g,n)},I=new Map,F=(i,a)=>{if(E.size){const n=a[3](R(i));I.set(i,[a,n])}else I.set(i,[a])},G=i=>{var a;const n=I.get(i);n&&(I.delete(i),(a=n[1])==null||a.call(n))},ae=i=>(E.add(i),E.size===1&&I.forEach(([n,g],P)=>{const j=n[3](R(P));I.set(P,[n,j])}),()=>{E.delete(i),E.size===0&&I.forEach(([n,g],P)=>{g&&(g(),I.set(P,[n]))})}),z=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),B=t(z,{deleteProperty(i,a){const n=Reflect.get(i,a);G(a);const g=Reflect.deleteProperty(i,a);return g&&h(["delete",[a],n]),g},set(i,a,n,g){const P=Reflect.has(i,a),j=Reflect.get(i,a,g);if(P&&(e(j,n)||b.has(n)&&e(j,b.get(n))))return!0;G(a),J(n)&&(n=fe(n)||n);let k=n;if(n instanceof Promise)n.then(D=>{n.status="fulfilled",n.value=D,h(["resolve",[a],D])}).catch(D=>{n.status="rejected",n.reason=D,h(["reject",[a],D])});else{!O.has(n)&&s(n)&&(k=_(n));const D=!x.has(k)&&O.get(k);D&&F(a,D)}return Reflect.set(i,a,k,g),h(["set",[a],n,j]),!0}});b.set(o,B);const ie=[z,v,c,ae];return O.set(B,ie),Reflect.ownKeys(o).forEach(i=>{const a=Object.getOwnPropertyDescriptor(o,i);"value"in a&&(B[i]=o[i],delete a.value,delete a.writable),Object.defineProperty(z,i,a)}),B})=>[_,O,x,e,t,s,r,l,c,b,f],[be]=pe();function L(e={}){return be(e)}function S(e,t,s){const r=O.get(e);let l;const c=[],b=r[3];let f=!1;const o=b(m=>{if(c.push(m),s){t(c.splice(0));return}l||(l=Promise.resolve().then(()=>{l=void 0,f&&t(c.splice(0))}))});return f=!0,()=>{f=!1,o()}}function ge(e,t){const s=O.get(e),[r,l,c]=s;return c(r,l(),t)}const d=L({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),re={state:d,subscribe(e){return S(d,()=>e(d))},push(e,t){e!==d.view&&(d.view=e,t&&(d.data=t),d.history.push(e))},reset(e){d.view=e,d.history=[e]},replace(e){d.history.length>1&&(d.history[d.history.length-1]=e,d.view=e)},goBack(){if(d.history.length>1){d.history.pop();const[e]=d.history.slice(-1);d.view=e}},setData(e){d.data=e}},p={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return p.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return p.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(p.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!p.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let r=e;r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(p.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(p.WCM_VERSION,"2.5.9")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=re.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},me=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),u=L({enabled:me,userSessionId:"",events:[],connectedWalletId:void 0}),Ee={state:u,subscribe(e){return S(u.events,()=>e(ge(u.events[u.events.length-1])))},initialize(){u.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(u.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){u.connectedWalletId=e},click(e){if(u.enabled){const t={type:"CLICK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},track(e){if(u.enabled){const t={type:"TRACK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},view(e){if(u.enabled){const t={type:"VIEW",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}}},y=L({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),w={state:y,subscribe(e){return S(y,()=>e(y))},setChains(e){y.chains=e},setWalletConnectUri(e){y.walletConnectUri=e},setIsCustomDesktop(e){y.isCustomDesktop=e},setIsCustomMobile(e){y.isCustomMobile=e},setIsDataLoaded(e){y.isDataLoaded=e},setIsUiLoaded(e){y.isUiLoaded=e},setIsAuth(e){y.isAuth=e}},$=L({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),N={state:$,subscribe(e){return S($,()=>e($))},setConfig(e){var t,s;Ee.initialize(),w.setChains(e.chains),w.setIsAuth(!!e.enableAuthMode),w.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),w.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),p.setModalVersionInStorage(),Object.assign($,e)}},q="https://explorer-api.walletconnect.com";async function K(e,t){const s=new URL(e,q);return s.searchParams.append("projectId",N.state.projectId),Object.entries(t).forEach(([r,l])=>{l&&s.searchParams.append(r,String(l))}),(await fetch(s)).json()}const W={async getDesktopListings(e){return K("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return K("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return K("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return K("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${q}/w3m/v1/getWalletImage/${e}?projectId=${N.state.projectId}`},getAssetImageUrl(e){return`${q}/w3m/v1/getAssetImage/${e}?projectId=${N.state.projectId}`}};var he=Object.defineProperty,Z=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,ee=(e,t,s)=>t in e?he(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ae=(e,t)=>{for(var s in t||(t={}))Ie.call(t,s)&&ee(e,s,t[s]);if(Z)for(var s of Z(t))we.call(t,s)&&ee(e,s,t[s]);return e};const te=p.isMobile(),C=L({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),We={state:C,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=N.state;if(e==="NONE"||t==="ALL"&&!e)return C.recomendedWallets;if(p.isArray(e)){const s={recommendedIds:e.join(",")},{listings:r}=await W.getAllListings(s),l=Object.values(r);l.sort((c,b)=>{const f=e.indexOf(c.id),_=e.indexOf(b.id);return f-_}),C.recomendedWallets=l}else{const{chains:s,isAuth:r}=w.state,l=s==null?void 0:s.join(","),c=p.isArray(t),b={page:1,sdks:r?"auth_v1":void 0,entries:p.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:f}=te?await W.getMobileListings(b):await W.getDesktopListings(b);C.recomendedWallets=Object.values(f)}return C.recomendedWallets},async getWallets(e){const t=Ae({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:r}=N.state,{recomendedWallets:l}=C;if(r==="ALL")return C.wallets;l.length?t.excludedIds=l.map(A=>A.id).join(","):p.isArray(s)&&(t.excludedIds=s.join(",")),p.isArray(r)&&(t.excludedIds=[t.excludedIds,r].filter(Boolean).join(",")),w.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:b}=e,{listings:f,total:_}=te?await W.getMobileListings(t):await W.getDesktopListings(t),o=Object.values(f),m=b?"search":"wallets";return C[m]={listings:[...C[m].listings,...o],total:_,page:c??1},{listings:o,total:_}},getWalletImageUrl(e){return W.getWalletImageUrl(e)},getAssetImageUrl(e){return W.getAssetImageUrl(e)},resetSearch(){C.search={listings:[],total:0,page:1}}},U=L({open:!1}),H={state:U,subscribe(e){return S(U,()=>e(U))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:r}=w.state;if(w.setWalletConnectUri(e==null?void 0:e.uri),w.setChains(e==null?void 0:e.chains),re.reset("ConnectWallet"),s&&r)U.open=!0,t();else{const l=setInterval(()=>{const c=w.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),U.open=!0,t())},200)}})},close(){U.open=!1}};var ye=Object.defineProperty,se=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,oe=(e,t,s)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,_e=(e,t)=>{for(var s in t||(t={}))Ce.call(t,s)&&oe(e,s,t[s]);if(se)for(var s of se(t))ve.call(t,s)&&oe(e,s,t[s]);return e};function De(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const V=L({themeMode:De()?"dark":"light"}),ne={state:V,subscribe(e){return S(V,()=>e(V))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(V.themeMode=t),s&&(V.themeVariables=_e({},s))}},T=L({open:!1,message:"",variant:"success"}),Te={state:T,subscribe(e){return S(T,()=>e(T))},openToast(e,t){T.open=!0,T.message=e,T.variant=t},closeToast(){T.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=le.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}),window.global||(window.global=window));class Oe{constructor(t){this.openModal=H.open,this.closeModal=H.close,this.subscribeModal=H.subscribe,this.setTheme=ne.setThemeConfig,ne.setThemeConfig(t),N.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await ce(()=>import("./index-3dd31bfd.js"),["assets/index-3dd31bfd.js","assets/browser-ab4d4eff.js","assets/index-0e18a6f0.js","assets/index-8bcad974.css"]);const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),w.setIsUiLoaded(!0)}}}const Se=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:Oe},Symbol.toStringTag,{value:"Module"}));export{Ee as $,N as C,We as G,re as N,H as Q,ne as X,Te as Y,Se as a,w as c,p as i};
