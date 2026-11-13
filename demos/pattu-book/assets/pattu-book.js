const Mf=(n,e)=>n===e,To=Symbol("solid-proxy"),Yu=typeof Proxy=="function",bf=Symbol("solid-track"),Eo={equals:Mf};let Ku=nd;const bi=1,Ao=2,Zu={owned:null,cleanups:null,context:null,owner:null};var xt=null;let Qo=null,wf=null,wt=null,on=null,gi=null,Oo=0;function ir(n,e){const t=wt,i=xt,s=n.length===0,r=e===void 0?i:e,o=s?Zu:{owned:null,cleanups:null,context:r?r.context:null,owner:r},a=s?n:()=>n(()=>an(()=>ur(o)));xt=o,wt=null;try{return Bi(a,!0)}finally{wt=t,xt=i}}function vt(n,e){e=e?Object.assign({},Eo,e):Eo;const t={value:n,observers:null,observerSlots:null,comparator:e.equals||void 0},i=s=>(typeof s=="function"&&(s=s(t.value)),td(t,s));return[ed.bind(t),i]}function jo(n,e,t){const i=zo(n,e,!0,bi);zs(i)}function qn(n,e,t){const i=zo(n,e,!1,bi);zs(i)}function dn(n,e,t){Ku=Cf;const i=zo(n,e,!1,bi);i.user=!0,gi?gi.push(i):zs(i)}function _t(n,e,t){t=t?Object.assign({},Eo,t):Eo;const i=zo(n,e,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=t.equals||void 0,zs(i),ed.bind(i)}function Qa(n){return Bi(n,!1)}function an(n){if(wt===null)return n();const e=wt;wt=null;try{return n()}finally{wt=e}}function Jt(n,e,t){const i=Array.isArray(n);let s,r=t&&t.defer;return o=>{let a;if(i){a=Array(n.length);for(let c=0;c<n.length;c++)a[c]=n[c]()}else a=n();if(r)return r=!1,o;const l=an(()=>e(a,s,o));return s=a,l}}function Tf(n){dn(()=>an(n))}function Dn(n){return xt===null||(xt.cleanups===null?xt.cleanups=[n]:xt.cleanups.push(n)),n}function Ju(){return xt}function Qu(n,e){const t=xt,i=wt;xt=n,wt=null;try{return Bi(e,!0)}catch(s){lc(s)}finally{xt=t,wt=i}}function Ef(n){const e=wt,t=xt;return Promise.resolve().then(()=>{wt=e,xt=t;let i;return Bi(n,!1),wt=xt=null,i?i.done:void 0})}const[kb,Ob]=vt(!1);function ju(n,e){const t=Symbol("context");return{id:t,Provider:Lf(t),defaultValue:n}}function ac(n){let e;return xt&&xt.context&&(e=xt.context[n.id])!==void 0?e:n.defaultValue}function Bo(n){const e=_t(n),t=_t(()=>ja(e()));return t.toArray=()=>{const i=t();return Array.isArray(i)?i:i!=null?[i]:[]},t}function ed(){if(this.sources&&this.state)if(this.state===bi)zs(this);else{const n=on;on=null,Bi(()=>Co(this),!1),on=n}if(wt){const n=this.observers;if(!n||n[n.length-1]!==wt){const e=n?n.length:0;wt.sources?(wt.sources.push(this),wt.sourceSlots.push(e)):(wt.sources=[this],wt.sourceSlots=[e]),n?(n.push(wt),this.observerSlots.push(wt.sources.length-1)):(this.observers=[wt],this.observerSlots=[wt.sources.length-1])}}return this.value}function td(n,e,t){let i=n.value;return(!n.comparator||!n.comparator(i,e))&&(n.value=e,n.observers&&n.observers.length&&Bi(()=>{for(let s=0;s<n.observers.length;s+=1){const r=n.observers[s],o=Qo&&Qo.running;o&&Qo.disposed.has(r),(o?!r.tState:!r.state)&&(r.pure?on.push(r):gi.push(r),r.observers&&id(r)),o||(r.state=bi)}if(on.length>1e6)throw on=[],new Error},!1)),e}function zs(n){if(!n.fn)return;ur(n);const e=Oo;Af(n,n.value,e)}function Af(n,e,t){let i;const s=xt,r=wt;wt=xt=n;try{i=n.fn(e)}catch(o){return n.pure&&(n.state=bi,n.owned&&n.owned.forEach(ur),n.owned=null),n.updatedAt=t+1,lc(o)}finally{wt=r,xt=s}(!n.updatedAt||n.updatedAt<=t)&&(n.updatedAt!=null&&"observers"in n?td(n,i):n.value=i,n.updatedAt=t)}function zo(n,e,t,i=bi,s){const r={fn:n,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:xt,context:xt?xt.context:null,pure:t};return xt===null||xt!==Zu&&(xt.owned?xt.owned.push(r):xt.owned=[r]),r}function Ro(n){if(n.state===0)return;if(n.state===Ao)return Co(n);if(n.suspense&&an(n.suspense.inFallback))return n.suspense.effects.push(n);const e=[n];for(;(n=n.owner)&&(!n.updatedAt||n.updatedAt<Oo);)n.state&&e.push(n);for(let t=e.length-1;t>=0;t--)if(n=e[t],n.state===bi)zs(n);else if(n.state===Ao){const i=on;on=null,Bi(()=>Co(n,e[0]),!1),on=i}}function Bi(n,e){if(on)return n();let t=!1;e||(on=[]),gi?t=!0:gi=[],Oo++;try{const i=n();return Rf(t),i}catch(i){t||(gi=null),on=null,lc(i)}}function Rf(n){if(on&&(nd(on),on=null),n)return;const e=gi;gi=null,e.length&&Bi(()=>Ku(e),!1)}function nd(n){for(let e=0;e<n.length;e++)Ro(n[e])}function Cf(n){let e,t=0;for(e=0;e<n.length;e++){const i=n[e];i.user?n[t++]=i:Ro(i)}for(e=0;e<t;e++)Ro(n[e])}function Co(n,e){n.state=0;for(let t=0;t<n.sources.length;t+=1){const i=n.sources[t];if(i.sources){const s=i.state;s===bi?i!==e&&(!i.updatedAt||i.updatedAt<Oo)&&Ro(i):s===Ao&&Co(i,e)}}}function id(n){for(let e=0;e<n.observers.length;e+=1){const t=n.observers[e];t.state||(t.state=Ao,t.pure?on.push(t):gi.push(t),t.observers&&id(t))}}function ur(n){let e;if(n.sources)for(;n.sources.length;){const t=n.sources.pop(),i=n.sourceSlots.pop(),s=t.observers;if(s&&s.length){const r=s.pop(),o=t.observerSlots.pop();i<s.length&&(r.sourceSlots[o]=i,s[i]=r,t.observerSlots[i]=o)}}if(n.tOwned){for(e=n.tOwned.length-1;e>=0;e--)ur(n.tOwned[e]);delete n.tOwned}if(n.owned){for(e=n.owned.length-1;e>=0;e--)ur(n.owned[e]);n.owned=null}if(n.cleanups){for(e=n.cleanups.length-1;e>=0;e--)n.cleanups[e]();n.cleanups=null}n.state=0}function Pf(n){return n instanceof Error?n:new Error(typeof n=="string"?n:"Unknown error",{cause:n})}function lc(n,e=xt){throw Pf(n)}function ja(n){if(typeof n=="function"&&!n.length)return ja(n());if(Array.isArray(n)){const e=[];for(let t=0;t<n.length;t++){const i=ja(n[t]);if(Array.isArray(i))if(i.length<32768)e.push.apply(e,i);else for(let s=0;s<i.length;s++)e.push(i[s]);else e.push(i)}return e}return n}function Lf(n,e){return function(i){let s;return qn(()=>s=an(()=>(xt.context={...xt.context,[n]:i.value},Bo(()=>i.children))),void 0),s}}const Df=Symbol("fallback");function Hc(n){for(let e=0;e<n.length;e++)n[e]()}function If(n,e,t={}){let i=[],s=[],r=[],o=0,a=e.length>1?[]:null;return Dn(()=>Hc(r)),()=>{let l=n()||[],c=l.length,h,u;return l[bf],an(()=>{let f,g,x,p,m,_,E,y,T;if(c===0)o!==0&&(Hc(r),r=[],i=[],s=[],o=0,a&&(a=[])),t.fallback&&(i=[Df],s[0]=ir(b=>(r[0]=b,t.fallback())),o=1);else if(o===0){for(s=new Array(c),u=0;u<c;u++)i[u]=l[u],s[u]=ir(d);o=c}else{for(x=new Array(c),p=new Array(c),a&&(m=new Array(c)),_=0,E=Math.min(o,c);_<E&&i[_]===l[_];_++);for(E=o-1,y=c-1;E>=_&&y>=_&&i[E]===l[y];E--,y--)x[y]=s[E],p[y]=r[E],a&&(m[y]=a[E]);for(f=new Map,g=new Array(y+1),u=y;u>=_;u--)T=l[u],h=f.get(T),g[u]=h===void 0?-1:h,f.set(T,u);for(h=_;h<=E;h++)T=i[h],u=f.get(T),u!==void 0&&u!==-1?(x[u]=s[h],p[u]=r[h],a&&(m[u]=a[h]),u=g[u],f.set(T,u)):r[h]();for(u=_;u<c;u++)u in x?(s[u]=x[u],r[u]=p[u],a&&(a[u]=m[u],a[u](u))):s[u]=ir(d);s=s.slice(0,o=c),i=l.slice(0)}return s});function d(f){if(r[u]=f,a){const[g,x]=vt(u);return a[u]=x,e(l[u],g)}return e(l[u])}}}function At(n,e){return an(()=>n(e||{}))}function Ur(){return!0}const el={get(n,e,t){return e===To?t:n.get(e)},has(n,e){return e===To?!0:n.has(e)},set:Ur,deleteProperty:Ur,getOwnPropertyDescriptor(n,e){return{configurable:!0,enumerable:!0,get(){return n.get(e)},set:Ur,deleteProperty:Ur}},ownKeys(n){return n.keys()}};function ea(n){return(n=typeof n=="function"?n():n)?n:{}}function Uf(){for(let n=0,e=this.length;n<e;++n){const t=this[n]();if(t!==void 0)return t}}function Nt(...n){let e=!1;for(let o=0;o<n.length;o++){const a=n[o];e=e||!!a&&To in a,n[o]=typeof a=="function"?(e=!0,_t(a)):a}if(Yu&&e)return new Proxy({get(o){for(let a=n.length-1;a>=0;a--){const l=ea(n[a])[o];if(l!==void 0)return l}},has(o){for(let a=n.length-1;a>=0;a--)if(o in ea(n[a]))return!0;return!1},keys(){const o=[];for(let a=0;a<n.length;a++)o.push(...Object.keys(ea(n[a])));return[...new Set(o)]}},el);const t={},i=Object.create(null);for(let o=n.length-1;o>=0;o--){const a=n[o];if(!a)continue;const l=Object.getOwnPropertyNames(a);for(let c=l.length-1;c>=0;c--){const h=l[c];if(h==="__proto__"||h==="constructor")continue;const u=Object.getOwnPropertyDescriptor(a,h);if(!i[h])i[h]=u.get?{enumerable:!0,configurable:!0,get:Uf.bind(t[h]=[u.get.bind(a)])}:u.value!==void 0?u:void 0;else{const d=t[h];d&&(u.get?d.push(u.get.bind(a)):u.value!==void 0&&d.push(()=>u.value))}}}const s={},r=Object.keys(i);for(let o=r.length-1;o>=0;o--){const a=r[o],l=i[a];l&&l.get?Object.defineProperty(s,a,l):s[a]=l?l.value:void 0}return s}function Ff(n,...e){const t=e.length;if(Yu&&To in n){const s=t>1?e.flat():e[0],r=e.map(o=>new Proxy({get(a){return o.includes(a)?n[a]:void 0},has(a){return o.includes(a)&&a in n},keys(){return o.filter(a=>a in n)}},el));return r.push(new Proxy({get(o){return s.includes(o)?void 0:n[o]},has(o){return s.includes(o)?!1:o in n},keys(){return Object.keys(n).filter(o=>!s.includes(o))}},el)),r}const i=[];for(let s=0;s<=t;s++)i[s]={};for(const s of Object.getOwnPropertyNames(n)){let r=t;for(let l=0;l<e.length;l++)if(e[l].includes(s)){r=l;break}const o=Object.getOwnPropertyDescriptor(n,s);!o.get&&!o.set&&o.enumerable&&o.writable&&o.configurable?i[r][s]=o.value:Object.defineProperty(i[r],s,o)}return i}const sd=n=>`Stale read from <${n}>.`;function Nf(n){const e="fallback"in n&&{fallback:()=>n.fallback};return _t(If(()=>n.each,n.children,e||void 0))}function Zi(n){const e=n.keyed,t=_t(()=>n.when,void 0,void 0),i=e?t:_t(t,void 0,{equals:(s,r)=>!s==!r});return _t(()=>{const s=i();if(s){const r=n.children;return typeof r=="function"&&r.length>0?an(()=>r(e?s:()=>{if(!an(i))throw sd("Show");return t()})):r}return n.fallback},void 0,void 0)}function kf(n){const e=Bo(()=>n.children),t=_t(()=>{const i=e(),s=Array.isArray(i)?i:[i];let r=()=>{};for(let o=0;o<s.length;o++){const a=o,l=s[o],c=r,h=_t(()=>c()?void 0:l.when,void 0,void 0),u=l.keyed?h:_t(h,void 0,{equals:(d,f)=>!d==!f});r=()=>c()||(u()?[a,h,l]:void 0)}return r});return _t(()=>{const i=t()();if(!i)return n.fallback;const[s,r,o]=i,a=o.children;return typeof a=="function"&&a.length>0?an(()=>a(o.keyed?r():()=>{if(an(t)()?.[0]!==s)throw sd("Match");return r()})):a},void 0,void 0)}function Gc(n){return n}const Of=["allowfullscreen","async","alpha","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected","adauctionheaders","browsingtopics","credentialless","defaultchecked","defaultmuted","defaultselected","defer","disablepictureinpicture","disableremoteplayback","preservespitch","shadowrootclonable","shadowrootcustomelementregistry","shadowrootdelegatesfocus","shadowrootserializable","sharedstoragewritable"],Bf=new Set(["className","value","readOnly","noValidate","formNoValidate","isMap","noModule","playsInline","adAuctionHeaders","allowFullscreen","browsingTopics","defaultChecked","defaultMuted","defaultSelected","disablePictureInPicture","disableRemotePlayback","preservesPitch","shadowRootClonable","shadowRootCustomElementRegistry","shadowRootDelegatesFocus","shadowRootSerializable","sharedStorageWritable",...Of]),zf=new Set(["innerHTML","textContent","innerText","children"]),Hf=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Gf=Object.assign(Object.create(null),{class:"className",novalidate:{$:"noValidate",FORM:1},formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1},adauctionheaders:{$:"adAuctionHeaders",IFRAME:1},allowfullscreen:{$:"allowFullscreen",IFRAME:1},browsingtopics:{$:"browsingTopics",IMG:1},defaultchecked:{$:"defaultChecked",INPUT:1},defaultmuted:{$:"defaultMuted",AUDIO:1,VIDEO:1},defaultselected:{$:"defaultSelected",OPTION:1},disablepictureinpicture:{$:"disablePictureInPicture",VIDEO:1},disableremoteplayback:{$:"disableRemotePlayback",AUDIO:1,VIDEO:1},preservespitch:{$:"preservesPitch",AUDIO:1,VIDEO:1},shadowrootclonable:{$:"shadowRootClonable",TEMPLATE:1},shadowrootdelegatesfocus:{$:"shadowRootDelegatesFocus",TEMPLATE:1},shadowrootserializable:{$:"shadowRootSerializable",TEMPLATE:1},sharedstoragewritable:{$:"sharedStorageWritable",IFRAME:1,IMG:1}});function Vf(n,e){const t=Gf[n];return typeof t=="object"?t[e]?t.$:void 0:t}const Wf=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Rs=n=>_t(()=>n());function Xf(n,e,t){let i=t.length,s=e.length,r=i,o=0,a=0,l=e[s-1].nextSibling,c=null;for(;o<s||a<r;){if(e[o]===t[a]){o++,a++;continue}for(;e[s-1]===t[r-1];)s--,r--;if(s===o){const h=r<i?a?t[a-1].nextSibling:t[r-a]:l;for(;a<r;)n.insertBefore(t[a++],h)}else if(r===a)for(;o<s;)(!c||!c.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[r-1]&&t[a]===e[s-1]){const h=e[--s].nextSibling;n.insertBefore(t[a++],e[o++].nextSibling),n.insertBefore(t[--r],h),e[s]=t[r]}else{if(!c){c=new Map;let u=a;for(;u<r;)c.set(t[u],u++)}const h=c.get(e[o]);if(h!=null)if(a<h&&h<r){let u=o,d=1,f;for(;++u<s&&u<r&&!((f=c.get(e[u]))==null||f!==h+d);)d++;if(d>h-a){const g=e[o];for(;a<h;)n.insertBefore(t[a++],g)}else n.replaceChild(t[a++],e[o++])}else o++;else e[o++].remove()}}}const Vc="_$DX_DELEGATE";function $f(n,e,t,i={}){let s;return ir(r=>{s=r,e===document?n():Ht(e,n(),e.firstChild?null:void 0,t)},i.owner),()=>{s(),e.textContent=""}}function $t(n,e,t,i){let s;const r=()=>{const a=i?document.createElementNS("http://www.w3.org/1998/Math/MathML","template"):document.createElement("template");return a.innerHTML=n,t?a.content.firstChild.firstChild:i?a.firstChild:a.content.firstChild},o=e?()=>an(()=>document.importNode(s||(s=r()),!0)):()=>(s||(s=r())).cloneNode(!0);return o.cloneNode=o,o}function cc(n,e=window.document){const t=e[Vc]||(e[Vc]=new Set);for(let i=0,s=n.length;i<s;i++){const r=n[i];t.has(r)||(t.add(r),e.addEventListener(r,ep))}}function tl(n,e,t){t==null?n.removeAttribute(e):n.setAttribute(e,t)}function qf(n,e,t){t?n.setAttribute(e,""):n.removeAttribute(e)}function Yf(n,e){e==null?n.removeAttribute("class"):n.className=e}function Kf(n,e,t,i){if(i)Array.isArray(t)?(n[`$$${e}`]=t[0],n[`$$${e}Data`]=t[1]):n[`$$${e}`]=t;else if(Array.isArray(t)){const s=t[0];n.addEventListener(e,t[0]=r=>s.call(n,t[1],r))}else n.addEventListener(e,t,typeof t!="function"&&t)}function Zf(n,e,t={}){const i=Object.keys(e||{}),s=Object.keys(t);let r,o;for(r=0,o=s.length;r<o;r++){const a=s[r];!a||a==="undefined"||e[a]||(Wc(n,a,!1),delete t[a])}for(r=0,o=i.length;r<o;r++){const a=i[r],l=!!e[a];!a||a==="undefined"||t[a]===l||!l||(Wc(n,a,!0),t[a]=l)}return t}function Jf(n,e,t){if(!e)return t?tl(n,"style"):e;const i=n.style;if(typeof e=="string")return i.cssText=e;typeof t=="string"&&(i.cssText=t=void 0),t||(t={}),e||(e={});let s,r;for(r in t)e[r]==null&&i.removeProperty(r),delete t[r];for(r in e)s=e[r],s!==t[r]&&(i.setProperty(r,s),t[r]=s);return t}function Qt(n,e={},t,i){const s={};return i||qn(()=>s.children=dr(n,e.children,s.children)),qn(()=>typeof e.ref=="function"&&_n(e.ref,n)),qn(()=>Qf(n,e,t,!0,s,!0)),s}function _n(n,e,t){return an(()=>n(e,t))}function Ht(n,e,t,i){if(t!==void 0&&!i&&(i=[]),typeof e!="function")return dr(n,e,i,t);qn(s=>dr(n,e(),s,t),i)}function Qf(n,e,t,i,s={},r=!1){e||(e={});for(const o in s)if(!(o in e)){if(o==="children")continue;s[o]=Xc(n,o,null,s[o],t,r,e)}for(const o in e){if(o==="children")continue;const a=e[o];s[o]=Xc(n,o,a,s[o],t,r,e)}}function jf(n){return n.toLowerCase().replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}function Wc(n,e,t){const i=e.trim().split(/\s+/);for(let s=0,r=i.length;s<r;s++)n.classList.toggle(i[s],t)}function Xc(n,e,t,i,s,r,o){let a,l,c,h,u;if(e==="style")return Jf(n,t,i);if(e==="classList")return Zf(n,t,i);if(t===i)return i;if(e==="ref")r||t(n);else if(e.slice(0,3)==="on:"){const d=e.slice(3);i&&n.removeEventListener(d,i,typeof i!="function"&&i),t&&n.addEventListener(d,t,typeof t!="function"&&t)}else if(e.slice(0,10)==="oncapture:"){const d=e.slice(10);i&&n.removeEventListener(d,i,!0),t&&n.addEventListener(d,t,!0)}else if(e.slice(0,2)==="on"){const d=e.slice(2).toLowerCase(),f=Wf.has(d);if(!f&&i){const g=Array.isArray(i)?i[0]:i;n.removeEventListener(d,g)}(f||t)&&(Kf(n,d,t,f),f&&cc([d]))}else e.slice(0,5)==="attr:"?tl(n,e.slice(5),t):e.slice(0,5)==="bool:"?qf(n,e.slice(5),t):(u=e.slice(0,5)==="prop:")||(c=zf.has(e))||(h=Vf(e,n.tagName))||(l=Bf.has(e))||(a=n.nodeName.includes("-")||"is"in o)?(u&&(e=e.slice(5),l=!0),e==="class"||e==="className"?Yf(n,t):a&&!l&&!c?n[jf(e)]=t:n[h||e]=t):tl(n,Hf[e]||e,t);return t}function ep(n){let e=n.target;const t=`$$${n.type}`,i=n.target,s=n.currentTarget,r=l=>Object.defineProperty(n,"target",{configurable:!0,value:l}),o=()=>{const l=e[t];if(l&&!e.disabled){const c=e[`${t}Data`];if(c!==void 0?l.call(e,c,n):l.call(e,n),n.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(n.target)&&r(e.host),!0},a=()=>{for(;o()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return e||document}}),n.composedPath){const l=n.composedPath();r(l[0]);for(let c=0;c<l.length-2&&(e=l[c],!!o());c++){if(e._$host){e=e._$host,a();break}if(e.parentNode===s)break}}else a();r(i)}function dr(n,e,t,i,s){for(;typeof t=="function";)t=t();if(e===t)return t;const r=typeof e,o=i!==void 0;if(n=o&&t[0]&&t[0].parentNode||n,r==="string"||r==="number"){if(r==="number"&&(e=e.toString(),e===t))return t;if(o){let a=t[0];a&&a.nodeType===3?a.data!==e&&(a.data=e):a=document.createTextNode(e),t=hs(n,t,i,a)}else t!==""&&typeof t=="string"?t=n.firstChild.data=e:t=n.textContent=e}else if(e==null||r==="boolean")t=hs(n,t,i);else{if(r==="function")return qn(()=>{let a=e();for(;typeof a=="function";)a=a();t=dr(n,a,t,i)}),()=>t;if(Array.isArray(e)){const a=[],l=t&&Array.isArray(t);if(nl(a,e,t,s))return qn(()=>t=dr(n,a,t,i,!0)),()=>t;if(a.length===0){if(t=hs(n,t,i),o)return t}else l?t.length===0?$c(n,a,i):Xf(n,t,a):(t&&hs(n),$c(n,a));t=a}else if(e.nodeType){if(Array.isArray(t)){if(o)return t=hs(n,t,i,e);hs(n,t,null,e)}else t==null||t===""||!n.firstChild?n.appendChild(e):n.replaceChild(e,n.firstChild);t=e}}return t}function nl(n,e,t,i){let s=!1;for(let r=0,o=e.length;r<o;r++){let a=e[r],l=t&&t[n.length],c;if(!(a==null||a===!0||a===!1))if((c=typeof a)=="object"&&a.nodeType)n.push(a);else if(Array.isArray(a))s=nl(n,a,l)||s;else if(c==="function")if(i){for(;typeof a=="function";)a=a();s=nl(n,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||s}else n.push(a),s=!0;else{const h=String(a);l&&l.nodeType===3&&l.data===h?n.push(l):n.push(document.createTextNode(h))}}return s}function $c(n,e,t=null){for(let i=0,s=e.length;i<s;i++)n.insertBefore(e[i],t)}function hs(n,e,t,i){if(t===void 0)return n.textContent="";const s=i||document.createTextNode("");if(e.length){let r=!1;for(let o=e.length-1;o>=0;o--){const a=e[o];if(s!==a){const l=a.parentNode===n;!r&&!o?l?n.replaceChild(s,a):n.insertBefore(s,t):l&&a.remove()}else r=!0}}else n.insertBefore(s,t);return[s]}const tp=!1;function rd(){let n=new Set;function e(s){return n.add(s),()=>n.delete(s)}let t=!1;function i(s,r){if(t)return!(t=!1);const o={defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const a of n)a.listener({to:s,options:r,get defaultPrevented(){return o.defaultPrevented},preventDefault:o.preventDefault,from:a.location,retry:l=>{l&&(t=!0),a.navigate(s,{...r,resolve:!1})}});return!o.defaultPrevented}return{subscribe:e,confirm:i}}let il;function hc(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),il=window.history.state._depth}hc();function np(n){return{...n,_depth:window.history.state&&window.history.state._depth}}function ip(n,e){let t=!1;return()=>{const i=il;hc();const s=i==null?null:il-i;if(t){t=!1;return}s&&e(s)?(t=!0,window.history.go(-s)):n()}}const sp=/^(?:[a-z0-9]+:)?\/\//i,rp=/^\/+|(\/)\/+$/g,sl="http://sr";function ji(n,e=!1){const t=n.replace(rp,"$1");return t?e||/^[?#]/.test(t)?t:"/"+t:""}function mo(n,e,t){if(sp.test(e))return;const i=ji(n),s=t&&ji(t);let r="";return!s||e.startsWith("/")?r=i:s.toLowerCase().indexOf(i.toLowerCase())!==0?r=i+s:r=s,(r||"/")+ji(e,!r)}function op(n,e){if(n==null)throw new Error(e);return n}function ap(n,e){return ji(n).replace(/\/*(\*.*)?$/g,"")+ji(e)}function od(n){const e={};return n.searchParams.forEach((t,i)=>{i in e?Array.isArray(e[i])?e[i].push(t):e[i]=[e[i],t]:e[i]=t}),e}function lp(n,e,t){const[i,s]=n.split("/*",2),r=i.split("/").filter(Boolean),o=r.length;return a=>{const l=a.split("/");if(l[0]===""&&l.shift(),l.length&&l[l.length-1]===""&&l.pop(),l.includes(""))return null;const c=l.length-o;if(c<0||c>0&&s===void 0&&!e)return null;const h={path:o?"":"/",params:{}},u=d=>t===void 0?void 0:t[d];for(let d=0;d<o;d++){const f=r[d],g=f[0]===":",x=g?l[d]:l[d].toLowerCase(),p=g?f.slice(1):f.toLowerCase();if(g&&ta(x,u(p)))h.params[p]=x;else if(g||!ta(x,p))return null;h.path+=`/${x}`}if(s){const d=c?l.slice(-c).join("/"):"";if(ta(d,u(s)))h.params[s]=d;else return null}return h}}function ta(n,e){const t=i=>i===n;return e===void 0?!0:typeof e=="string"?t(e):typeof e=="function"?e(n):Array.isArray(e)?e.some(t):e instanceof RegExp?e.test(n):!1}function cp(n){const[e,t]=n.pattern.split("/*",2),i=e.split("/").filter(Boolean);return i.reduce((s,r)=>s+(r.startsWith(":")?2:3),i.length-(t===void 0?0:1))}function ad(n){const e=new Map,t=Ju();return new Proxy({},{get(i,s){return e.has(s)||Qu(t,()=>e.set(s,_t(()=>n()[s]))),e.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(n())},has(i,s){return s in n()}})}function ld(n){let e=/(\/?\:[^\/]+)\?/.exec(n);if(!e)return[n];let t=n.slice(0,e.index),i=n.slice(e.index+e[0].length);const s=[t,t+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(i);)s.push(t+=e[1]),i=i.slice(e[0].length);return ld(i).reduce((r,o)=>[...r,...s.map(a=>a+o)],[])}const hp=100,cd=ju(),uc=ju(),Rr=()=>op(ac(cd),"<A> and 'use' router primitives can be only used inside a Route."),up=()=>ac(uc)||Rr().base,dp=n=>{const e=up();return _t(()=>e.resolvePath(n()))},fp=n=>{const e=Rr();return _t(()=>{const t=n();return t!==void 0?e.renderPath(t):t})},hd=()=>Rr().navigatorFactory(),dc=()=>Rr().location,pp=()=>Rr().params,mp=n=>encodeURIComponent(n).replace(/%(2B|40|3A|24|26|2C|3B|3D)/g,e=>decodeURIComponent(e));function gp(n,e=""){const{component:t,preload:i,load:s,children:r,info:o}=n,a=!r||Array.isArray(r)&&!r.length,l={key:n,component:t,preload:i||s,info:o};return ud(n.path).reduce((c,h)=>{for(const u of ld(h)){const d=ap(e,u);let f=a?d:d.split("/*",1)[0];f=f.split("/").map(g=>g.startsWith(":")||g.startsWith("*")?g:mp(g)).join("/"),c.push({...l,originalPath:h,pattern:f,matcher:lp(f,!a,n.matchFilters)})}return c},[])}function vp(n,e=0){return{routes:n,score:cp(n[n.length-1])*1e4-e,matcher(t){const i=[];for(let s=n.length-1;s>=0;s--){const r=n[s],o=r.matcher(t);if(!o)return null;i.unshift({...o,route:r})}return i}}}function ud(n){return Array.isArray(n)?n:[n]}function dd(n,e="",t=[],i=[]){const s=ud(n);for(let r=0,o=s.length;r<o;r++){const a=s[r];if(a&&typeof a=="object"){a.hasOwnProperty("path")||(a.path="");const l=gp(a,e);for(const c of l){t.push(c);const h=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!h)dd(a.children,c.pattern,t,i);else{const u=vp([...t],i.length);i.push(u)}t.pop()}}}return t.length?i:i.sort((r,o)=>o.score-r.score)}function na(n,e){for(let t=0,i=n.length;t<i;t++){const s=n[t].matcher(e);if(s)return s}return[]}function xp(n,e,t){const i=new URL(sl),s=_t(h=>{const u=n();try{return new URL(u[0]==="/"?sl+u:u,i)}catch{return console.error(`Invalid path ${u}`),h}},i,{equals:(h,u)=>h.href===u.href}),r=_t(()=>s().pathname),o=_t(()=>s().search,!0),a=_t(()=>s().hash),l=()=>"",c=Jt(o,()=>od(s()));return{get pathname(){return r()},get search(){return o()},get hash(){return a()},get state(){return e()},get key(){return l()},query:t?t(c):ad(c)}}let Ji;function _p(){return Ji}function yp(n,e,t,i={}){const{signal:[s,r],utils:o={}}=n,a=o.parsePath||(C=>C),l=o.renderPath||(C=>C),c=o.beforeLeave||rd(),h=mo("",i.base||"");if(h===void 0)throw new Error(`${h} is not a valid base path`);h&&!s().value&&r({value:h,replace:!0,scroll:!1});const[u,d]=vt(!1);let f;const g=(C,D)=>{D.value===x()&&D.state===m()||(f===void 0&&d(!0),Ji=C,f=D,Ef(()=>{f===D&&(p(f.value),_(f.state),T[1](B=>B.filter(z=>z.pending)))}).finally(()=>{f===D&&Qa(()=>{Ji=void 0,C==="navigate"&&F(f),d(!1),f=void 0})}))},[x,p]=vt(s().value),[m,_]=vt(s().state),E=xp(x,m,o.queryWrapper),y=[],T=vt([]),b=_t(()=>typeof i.transformUrl=="function"?na(e(),i.transformUrl(E.pathname)):na(e(),E.pathname)),R=()=>{const C=b(),D={};for(let B=0;B<C.length;B++)Object.assign(D,C[B].params);return D},S=o.paramsWrapper?o.paramsWrapper(R,e):ad(R),A={pattern:h,path:()=>h,outlet:()=>null,resolvePath(C){return mo(h,C)}};return qn(Jt(s,C=>g("native",C),{defer:!0})),{base:A,location:E,params:S,isRouting:u,get pendingTarget(){return f},renderPath:l,parsePath:a,navigatorFactory:U,matches:b,beforeLeave:c,preloadRoute:k,singleFlight:i.singleFlight===void 0?!0:i.singleFlight,submissions:T};function P(C,D,B){an(()=>{if(typeof D=="number"){D&&(o.go?o.go(D):console.warn("Router integration does not support relative routing"));return}const z=!D||D[0]==="?",{replace:$,resolve:V,scroll:X,state:W}={replace:!1,resolve:!z,scroll:!0,...B},ve=V?C.resolvePath(D):mo(z&&E.pathname||"",D);if(ve===void 0)throw new Error(`Path '${D}' is not a routable path`);if(y.length>=hp)throw new Error("Too many redirects");const ge=x();(ve!==ge||W!==m())&&(tp||c.confirm(ve,B)&&(y.push({value:ge,replace:$,scroll:X,state:m()}),g("navigate",{value:ve,state:W})))})}function U(C){return C=C||ac(uc)||A,(D,B)=>P(C,D,B)}function F(C){const D=y[0];D&&(r({...C,replace:D.replace,scroll:D.scroll}),y.length=0)}function k(C,D){const B=na(e(),C.pathname),z=Ji;Ji="preload";for(let $ in B){const{route:V,params:X}=B[$];V.component&&V.component.preload&&V.component.preload();const{preload:W}=V;D&&W&&Qu(t(),()=>W({params:X,location:{pathname:C.pathname,search:C.search,hash:C.hash,query:od(C),state:null,key:""},intent:"preload"}))}Ji=z}}function Sp(n,e,t,i){const{base:s,location:r,params:o}=n,{pattern:a,component:l,preload:c}=i().route,h=_t(()=>i().path);l&&l.preload&&l.preload();const u=c?c({params:o,location:r,intent:Ji||"initial"}):void 0;return{parent:e,pattern:a,path:h,outlet:()=>l?At(l,{params:o,location:r,data:u,get children(){return t()}}):t(),resolvePath(f){return mo(s.path(),f,h())}}}const Mp=n=>e=>{const{base:t}=e,i=Bo(()=>e.children),s=_t(()=>dd(i(),e.base||""));let r;const o=yp(n,s,()=>r,{base:t,singleFlight:e.singleFlight,transformUrl:e.transformUrl});return n.create&&n.create(o),At(cd.Provider,{value:o,get children(){return At(bp,{routerState:o,get root(){return e.root},get preload(){return e.rootPreload||e.rootLoad},get children(){return[Rs(()=>(r=Ju())&&null),At(wp,{routerState:o,get branches(){return s()}})]}})}})};function bp(n){const e=n.routerState.location,t=n.routerState.params,i=_t(()=>n.preload&&an(()=>{n.preload({params:t,location:e,intent:_p()||"initial"})}));return At(Zi,{get when(){return n.root},keyed:!0,get fallback(){return n.children},children:s=>At(s,{params:t,location:e,get data(){return i()},get children(){return n.children}})})}function wp(n){const e=[];let t;Dn(()=>e.forEach(s=>s()));const i=_t(Jt(n.routerState.matches,(s,r,o)=>{let a=r&&s.length===r.length;const l=[];for(let c=0,h=s.length;c<h;c++){const u=r&&r[c],d=s[c];o&&u&&d.route.key===u.route.key?l[c]=o[c]:(a=!1,e[c]&&e[c](),ir(f=>{e[c]=f,l[c]=Sp(n.routerState,l[c-1]||n.routerState.base,qc(()=>i()[c+1]),()=>{const g=n.routerState.matches();return g[c]??g[0]})}))}return e.splice(s.length).forEach(c=>c()),o&&a?o:(t=l[0],l)}));return qc(()=>i()&&t)()}const qc=n=>()=>At(Zi,{get when(){return n()},keyed:!0,children:e=>At(uc.Provider,{value:e,get children(){return e.outlet()}})}),Yc=n=>{const e=Bo(()=>n.children);return Nt(n,{get children(){return e()}})};function Tp([n,e],t,i){return[n,i?s=>e(i(s)):e]}function Ep(n){let e=!1;const t=s=>typeof s=="string"?{value:s}:s,i=Tp(vt(t(n.get()),{equals:(s,r)=>s.value===r.value&&s.state===r.state}),void 0,s=>(!e&&n.set(s),s));return n.init&&Dn(n.init((s=n.get())=>{e=!0,i[1](t(s)),e=!1})),Mp({signal:i,create:n.create,utils:n.utils})}function Ap(n,e,t){return n.addEventListener(e,t),()=>n.removeEventListener(e,t)}function Rp(n,e){const t=n&&document.getElementById(n);t?t.scrollIntoView():e&&window.scrollTo(0,0)}const Cp=new Map;function Pp({preload:n=!0,explicitLinks:e=!1,actionBase:t="/_server",transformUrl:i}={}){return s=>{const r=s.base.path(),o=s.navigatorFactory(s.base);let a,l;function c(x){return x.namespaceURI==="http://www.w3.org/2000/svg"}function h(x){if(x.defaultPrevented||x.button!==0||x.metaKey||x.altKey||x.ctrlKey||x.shiftKey)return;const p=x.composedPath().find(b=>b instanceof Node&&b.nodeName.toUpperCase()==="A");if(!p||e&&!p.hasAttribute("link"))return;const m=c(p),_=m?p.href.baseVal:p.href;if((m?p.target.baseVal:p.target)||!_&&!p.hasAttribute("state"))return;const y=(p.getAttribute("rel")||"").split(/\s+/);if(p.hasAttribute("download")||y&&y.includes("external"))return;const T=m?new URL(_,document.baseURI):new URL(_);if(!(T.origin!==window.location.origin||r&&T.pathname&&!T.pathname.toLowerCase().startsWith(r.toLowerCase())))return[p,T]}function u(x){const p=h(x);if(!p)return;const[m,_]=p,E=s.parsePath(_.pathname+_.search+_.hash),y=m.getAttribute("state");x.preventDefault(),o(E,{resolve:!1,replace:m.hasAttribute("replace"),scroll:!m.hasAttribute("noscroll"),state:y?JSON.parse(y):void 0})}function d(x){const p=h(x);if(!p)return;const[m,_]=p;i&&(_.pathname=i(_.pathname)),s.preloadRoute(_,m.getAttribute("preload")!=="false")}function f(x){clearTimeout(a);const p=h(x);if(!p)return l=null;const[m,_]=p;l!==m&&(i&&(_.pathname=i(_.pathname)),a=setTimeout(()=>{s.preloadRoute(_,m.getAttribute("preload")!=="false"),l=m},20))}function g(x){if(x.defaultPrevented)return;let p=x.submitter&&x.submitter.hasAttribute("formaction")?x.submitter.getAttribute("formaction"):x.target.getAttribute("action");if(!p)return;if(!p.startsWith("https://action/")){const _=new URL(p,sl);if(p=s.parsePath(_.pathname+_.search),!p.startsWith(t))return}if(x.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const m=Cp.get(p);if(m){x.preventDefault();const _=new FormData(x.target,x.submitter);m.call({r:s,f:x.target},x.target.enctype==="multipart/form-data"?_:new URLSearchParams(_))}}cc(["click","submit"]),document.addEventListener("click",u),n&&(document.addEventListener("mousemove",f,{passive:!0}),document.addEventListener("focusin",d,{passive:!0}),document.addEventListener("touchstart",d,{passive:!0})),document.addEventListener("submit",g),Dn(()=>{document.removeEventListener("click",u),n&&(document.removeEventListener("mousemove",f),document.removeEventListener("focusin",d),document.removeEventListener("touchstart",d)),document.removeEventListener("submit",g)})}}function Lp(n){const e=n.replace(/^.*?#/,"");if(!e.startsWith("/")){const[,t="/"]=window.location.hash.split("#",2);return`${t}#${e}`}return e}function Dp(n){const e=()=>window.location.hash.slice(1),t=rd();return Ep({get:e,set({value:i,replace:s,scroll:r,state:o}){s?window.history.replaceState(np(o),"","#"+i):window.history.pushState(o,"","#"+i);const a=i.indexOf("#"),l=a>=0?i.slice(a+1):"";Rp(l,r),hc()},init:i=>Ap(window,"hashchange",ip(i,s=>!t.confirm(s&&s<0?s:e()))),create:Pp({preload:n.preload,explicitLinks:n.explicitLinks,actionBase:n.actionBase}),utils:{go:i=>window.history.go(i),renderPath:i=>`#${i}`,parsePath:Lp,beforeLeave:t}})(n)}var Ip=$t("<a>");function Up(n){n=Nt({inactiveClass:"inactive",activeClass:"active"},n);const[,e]=Ff(n,["href","state","class","activeClass","inactiveClass","end"]),t=dp(()=>n.href),i=fp(t),s=dc(),r=_t(()=>{const o=t();if(o===void 0)return[!1,!1];const a=ji(o.split(/[?#]/,1)[0]).toLowerCase().replace(/\/$/,""),l=decodeURI(ji(s.pathname).toLowerCase().replace(/\/$/,""));return[n.end?a===l:l.startsWith(a+"/")||l===a,a===l]});return(()=>{var o=Ip();return Qt(o,Nt(e,{get href(){return i()||n.href},get state(){return JSON.stringify(n.state)},get classList(){return{...n.class&&{[n.class]:!0},[n.inactiveClass]:!r()[0],[n.activeClass]:r()[0],...e.classList}},link:"",get"aria-current"(){return r()[1]?"page":void 0}}),!1,!1),o})()}function Fp(n){const e=hd(),t=dc(),{href:i,state:s}=n,r=typeof i=="function"?i({navigate:e,location:t}):i;return e(r,{replace:!0,state:s}),null}const Np=(function(){const e=typeof document<"u"&&document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"})(),kp=function(n,e){return new URL(n,e).href},Kc={},Op=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=Promise.allSettled(t.map(c=>{if(c=kp(c,i),c in Kc)return;Kc[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!i)for(let g=o.length-1;g>=0;g--){const x=o[g];if(x.href===c&&(!h||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Np,h||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),h)return new Promise((g,x)=>{f.addEventListener("load",g),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fc="186",Bp=0,Zc=1,zp=2,Hp=0,sr=1,Gp=2,js=3,Zn=0,fn=1,Vt=2,vi=0,rr=1,Jc=2,Qc=3,jc=4,Vp=5,Cs=100,Wp=101,Xp=102,$p=103,qp=104,Yp=200,Kp=201,Zp=202,Jp=203,fd=204,pd=205,Qp=206,jp=207,em=208,tm=209,nm=210,im=211,sm=212,rm=213,om=214,rl=0,ol=1,al=2,fr=3,ll=4,cl=5,hl=6,ul=7,md=0,am=1,lm=2,Yn=0,gd=1,vd=2,xd=3,pc=4,_d=5,yd=6,Sd=7,Md=300,es=301,Fs=302,go=303,ia=304,Ho=306,Kn=1e3,pi=1001,dl=1002,jt=1003,cm=1004,Fr=1005,en=1006,sa=1007,ki=1008,yn=1009,bd=1010,wd=1011,pr=1012,mc=1013,Jn=1014,Un=1015,Qn=1016,gc=1017,vc=1018,mr=1020,Td=35902,Ed=35899,Ad=1021,Rd=1022,Fn=1023,_i=1026,Qi=1027,xc=1028,_c=1029,ts=1030,yc=1031,Sc=1033,vo=33776,xo=33777,_o=33778,yo=33779,fl=35840,pl=35841,ml=35842,gl=35843,vl=36196,xl=37492,_l=37496,yl=37488,Sl=37489,Po=37490,Ml=37491,bl=37808,wl=37809,Tl=37810,El=37811,Al=37812,Rl=37813,Cl=37814,Pl=37815,Ll=37816,Dl=37817,Il=37818,Ul=37819,Fl=37820,Nl=37821,kl=36492,Ol=36494,Bl=36495,zl=36283,Hl=36284,Lo=36285,Gl=36286,hm=3200,um=3201,Vl=0,dm=1,Ni="",Bt="srgb",Do="srgb-linear",Io="linear",yt="srgb",ra=7680,fm=519,pm=512,mm=513,gm=514,Mc=515,vm=516,xm=517,bc=518,_m=519,ym=35044,eh="300 es",$n=2e3,gr=2001;function Sm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Uo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mm(){const n=Uo("canvas");return n.style.display="block",n}const th={};function nh(...n){const e="THREE."+n.shift();console.log(e,...n)}function Cd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ze(...n){n=Cd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ft(...n){n=Cd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ds(...n){const e=n.join(" ");e in th||(th[e]=!0,Ze(...n))}function bm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const wm={[rl]:ol,[al]:hl,[ll]:ul,[fr]:cl,[ol]:rl,[hl]:al,[ul]:ll,[cl]:fr};class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ih=1234567;const or=Math.PI/180,vr=180/Math.PI;function ss(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function wc(n,e){return(n%e+e)%e}function Tm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Em(n,e,t){return n!==e?(t-n)/(e-n):0}function ar(n,e,t){return(1-t)*n+t*e}function Am(n,e,t,i){return ar(n,e,1-Math.exp(-t*i))}function Rm(n,e=1){return e-Math.abs(wc(n,e*2)-e)}function Cm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Pm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Lm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Dm(n,e){return n+Math.random()*(e-n)}function Im(n){return n*(.5-Math.random())}function Um(n){n!==void 0&&(ih=n);let e=ih+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fm(n){return n*or}function Nm(n){return n*vr}function km(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Om(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Bm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function zm(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ps(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const St={DEG2RAD:or,RAD2DEG:vr,generateUUID:ss,clamp:rt,euclideanModulo:wc,mapLinear:Tm,inverseLerp:Em,lerp:ar,damp:Am,pingpong:Rm,smoothstep:Cm,smootherstep:Pm,randInt:Lm,randFloat:Dm,randFloatSpread:Im,seededRandom:Um,degToRad:Fm,radToDeg:Nm,isPowerOfTwo:km,ceilPowerOfTwo:Om,floorPowerOfTwo:Bm,setQuaternionFromProperEuler:zm,normalize:hn,denormalize:Ps};class he{static{he.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==f||h!==g){let p=l*d+c*f+h*g+u*x;p<0&&(d=-d,f=-f,g=-g,x=-x,p=-p);let m=1-a;if(p<.9995){const _=Math.acos(p),E=Math.sin(_);m=Math.sin(m*_)/E,a=Math.sin(a*_)/E,l=l*m+d*a,c=c*m+f*a,h=h*m+g*a,u=u*m+x*a}else{l=l*m+d*a,c=c*m+f*a,h=h*m+g*a,u=u*m+x*a;const _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{static{I.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oa.copy(this).projectOnVector(e),this.sub(oa)}reflect(e){return this.sub(oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new I,sh=new Gt;class et{static{et.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=s[0],p=s[3],m=s[6],_=s[1],E=s[4],y=s[7],T=s[2],b=s[5],R=s[8];return r[0]=o*x+a*_+l*T,r[3]=o*p+a*E+l*b,r[6]=o*m+a*y+l*R,r[1]=c*x+h*_+u*T,r[4]=c*p+h*E+u*b,r[7]=c*m+h*y+u*R,r[2]=d*x+f*_+g*T,r[5]=d*p+f*E+g*b,r[8]=d*m+f*y+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(aa.makeScale(e,t)),this}rotate(e){return Ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return Ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new et,rh=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oh=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hm(){const n={enabled:!0,workingColorSpace:Do,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===yt&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?Io:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Do]:{primaries:e,whitePoint:i,transfer:Io,toXYZ:rh,fromXYZ:oh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:i,transfer:yt,toXYZ:rh,fromXYZ:oh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),n}const dt=Hm();function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let us;class Gm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{us===void 0&&(us=Uo("canvas")),us.width=e.width,us.height=e.height;const s=us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=us}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Uo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vm=0;class Tc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=ss(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(la(s[o].image)):r.push(la(s[o]))}else r=la(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function la(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Gm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}let Wm=0;const ca=new I;class Rt extends is{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,i=pi,s=pi,r=en,o=ki,a=Fn,l=yn,c=Rt.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=ss(),this.name="",this.source=new Tc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ca).x}get height(){return this.source.getSize(ca).y}get depth(){return this.source.getSize(ca).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Md)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kn:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kn:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Md;Rt.DEFAULT_ANISOTROPY=1;class Et{static{Et.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,y=(f+1)/2,T=(m+1)/2,b=(h+d)/4,R=(u+x)/4,S=(g+p)/4;return E>y&&E>T?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=b/i,r=R/i):y>T?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=b/s,r=S/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=R/r,s=S/r),this.set(i,s,r,t),this}let _=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xm extends is{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Rt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Tc(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends Xm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Pd extends Rt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $m extends Rt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class at{static{at.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,h,u,d,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,x,p)}set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,x,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ds.setFromMatrixColumn(e,0).length(),r=1/ds.setFromMatrixColumn(e,1).length(),o=1/ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qm,e,Ym)}lookAt(e,t,i){const s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Li.crossVectors(i,vn),Li.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Li.crossVectors(i,vn)),Li.normalize(),Nr.crossVectors(vn,Li),s[0]=Li.x,s[4]=Nr.x,s[8]=vn.x,s[1]=Li.y,s[5]=Nr.y,s[9]=vn.y,s[2]=Li.z,s[6]=Nr.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],_=i[3],E=i[7],y=i[11],T=i[15],b=s[0],R=s[4],S=s[8],A=s[12],P=s[1],U=s[5],F=s[9],k=s[13],C=s[2],D=s[6],B=s[10],z=s[14],$=s[3],V=s[7],X=s[11],W=s[15];return r[0]=o*b+a*P+l*C+c*$,r[4]=o*R+a*U+l*D+c*V,r[8]=o*S+a*F+l*B+c*X,r[12]=o*A+a*k+l*z+c*W,r[1]=h*b+u*P+d*C+f*$,r[5]=h*R+u*U+d*D+f*V,r[9]=h*S+u*F+d*B+f*X,r[13]=h*A+u*k+d*z+f*W,r[2]=g*b+x*P+p*C+m*$,r[6]=g*R+x*U+p*D+m*V,r[10]=g*S+x*F+p*B+m*X,r[14]=g*A+x*k+p*z+m*W,r[3]=_*b+E*P+y*C+T*$,r[7]=_*R+E*U+y*D+T*V,r[11]=_*S+E*F+y*B+T*X,r[15]=_*A+E*k+y*z+T*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15],_=l*f-c*d,E=a*f-c*u,y=a*d-l*u,T=o*f-c*h,b=o*d-l*h,R=o*u-a*h;return t*(x*_-p*E+m*y)-i*(g*_-p*T+m*b)+s*(g*E-x*T+m*R)-r*(g*y-x*b+p*R)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],_=t*a-i*o,E=t*l-s*o,y=t*c-r*o,T=i*l-s*a,b=i*c-r*a,R=s*c-r*l,S=h*x-u*g,A=h*p-d*g,P=h*m-f*g,U=u*p-d*x,F=u*m-f*x,k=d*m-f*p,C=_*k-E*F+y*U+T*P-b*A+R*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/C;return e[0]=(a*k-l*F+c*U)*D,e[1]=(s*F-i*k-r*U)*D,e[2]=(x*R-p*b+m*T)*D,e[3]=(d*b-u*R-f*T)*D,e[4]=(l*P-o*k-c*A)*D,e[5]=(t*k-s*P+r*A)*D,e[6]=(p*y-g*R-m*E)*D,e[7]=(h*R-d*y+f*E)*D,e[8]=(o*F-a*P+c*S)*D,e[9]=(i*P-t*F-r*S)*D,e[10]=(g*b-x*y+m*_)*D,e[11]=(u*y-h*b-f*_)*D,e[12]=(a*A-o*U-l*S)*D,e[13]=(t*U-i*A+s*S)*D,e[14]=(x*E-g*T-p*_)*D,e[15]=(h*T-u*E+d*_)*D,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,p=o*u,m=a*u,_=l*c,E=l*h,y=l*u,T=i.x,b=i.y,R=i.z;return s[0]=(1-(x+m))*T,s[1]=(f+y)*T,s[2]=(g-E)*T,s[3]=0,s[4]=(f-y)*b,s[5]=(1-(d+m))*b,s[6]=(p+_)*b,s[7]=0,s[8]=(g+E)*R,s[9]=(p-_)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=ds.set(s[0],s[1],s[2]).length();const a=ds.set(s[4],s[5],s[6]).length(),l=ds.set(s[8],s[9],s[10]).length();r<0&&(o=-o),En.copy(this);const c=1/o,h=1/a,u=1/l;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=$n,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===$n)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===gr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=$n,l=!1){const c=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===$n)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===gr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ds=new I,En=new at,qm=new I(0,0,0),Ym=new I(1,1,1),Li=new I,Nr=new I,vn=new I,ah=new at,lh=new Gt;class yi{constructor(e=0,t=0,i=0,s=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ah,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lh.setFromEuler(this),this.setFromQuaternion(lh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class Ec{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Km=0;const ch=new I,fs=new Gt,ai=new at,kr=new I,Ws=new I,Zm=new I,Jm=new Gt,hh=new I(1,0,0),uh=new I(0,1,0),dh=new I(0,0,1),fh={type:"added"},Qm={type:"removed"},ps={type:"childadded",child:null},ha={type:"childremoved",child:null};class tn extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new I,t=new yi,i=new Gt,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new et}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(hh,e)}rotateY(e){return this.rotateOnAxis(uh,e)}rotateZ(e){return this.rotateOnAxis(dh,e)}translateOnAxis(e,t){return ch.copy(e).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hh,e)}translateY(e){return this.translateOnAxis(uh,e)}translateZ(e){return this.translateOnAxis(dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?kr.copy(e):kr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Ws,kr,this.up):ai.lookAt(kr,Ws,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(ai),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fh),ps.child=e,this.dispatchEvent(ps),ps.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qm),ha.child=e,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fh),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,Zm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Jm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}tn.DEFAULT_UP=new I(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zt extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jm={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Or={h:0,s:0,l:0};function da(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=dt.workingColorSpace){if(e=wc(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=da(o,r,e+1/3),this.g=da(o,r,e),this.b=da(o,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=Bt){function i(r){r!==void 0&&parseFloat(r)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const i=Ld[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return dt.workingToColorSpace(sn.copy(this),e),Math.round(rt(sn.r*255,0,255))*65536+Math.round(rt(sn.g*255,0,255))*256+Math.round(rt(sn.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(sn.copy(this),t);const i=sn.r,s=sn.g,r=sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Bt){dt.workingToColorSpace(sn.copy(this),e);const t=sn.r,i=sn.g,s=sn.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Or);const i=ar(Di.h,Or.h,t),s=ar(Di.s,Or.s,t),r=ar(Di.l,Or.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new Je;Je.NAMES=Ld;class Ac{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=i}clone(){return new Ac(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class eg extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const An=new I,li=new I,fa=new I,ci=new I,ms=new I,gs=new I,ph=new I,pa=new I,ma=new I,ga=new I,va=new Et,xa=new Et,_a=new Et;class In{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),An.subVectors(e,t),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){An.subVectors(s,t),li.subVectors(i,t),fa.subVectors(e,t);const o=An.dot(An),a=An.dot(li),l=An.dot(fa),c=li.dot(li),h=li.dot(fa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return va.setScalar(0),xa.setScalar(0),_a.setScalar(0),va.fromBufferAttribute(e,t),xa.fromBufferAttribute(e,i),_a.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(va,r.x),o.addScaledVector(xa,r.y),o.addScaledVector(_a,r.z),o}static isFrontFacing(e,t,i,s){return An.subVectors(i,t),li.subVectors(e,t),An.cross(li).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),li.subVectors(this.a,this.b),An.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return In.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ms.subVectors(s,i),gs.subVectors(r,i),pa.subVectors(e,i);const l=ms.dot(pa),c=gs.dot(pa);if(l<=0&&c<=0)return t.copy(i);ma.subVectors(e,s);const h=ms.dot(ma),u=gs.dot(ma);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ms,o);ga.subVectors(e,r);const f=ms.dot(ga),g=gs.dot(ga);if(g>=0&&f<=g)return t.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(gs,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return ph.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(ph,a);const m=1/(p+x+d);return o=x*m,a=d*m,t.copy(i).addScaledVector(ms,o).addScaledVector(gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Si{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Br.copy(i.boundingBox)),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),zr.subVectors(this.max,Xs),vs.subVectors(e.a,Xs),xs.subVectors(e.b,Xs),_s.subVectors(e.c,Xs),Ii.subVectors(xs,vs),Ui.subVectors(_s,xs),Hi.subVectors(vs,_s);let t=[0,-Ii.z,Ii.y,0,-Ui.z,Ui.y,0,-Hi.z,Hi.y,Ii.z,0,-Ii.x,Ui.z,0,-Ui.x,Hi.z,0,-Hi.x,-Ii.y,Ii.x,0,-Ui.y,Ui.x,0,-Hi.y,Hi.x,0];return!ya(t,vs,xs,_s,zr)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,vs,xs,_s,zr))?!1:(Hr.crossVectors(Ii,Ui),t=[Hr.x,Hr.y,Hr.z],ya(t,vs,xs,_s,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hi=[new I,new I,new I,new I,new I,new I,new I,new I],Rn=new I,Br=new Si,vs=new I,xs=new I,_s=new I,Ii=new I,Ui=new I,Hi=new I,Xs=new I,zr=new I,Hr=new I,Gi=new I;function ya(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Gi.fromArray(n,r);const a=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),h=i.dot(Gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const fi=tg();function tg(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function ng(n){Math.abs(n)>65504&&Ze("DataUtils.toHalfFloat(): Value out of range."),n=rt(n,-65504,65504),fi.floatView[0]=n;const e=fi.uint32View[0],t=e>>23&511;return fi.baseTable[t]+((e&8388607)>>fi.shiftTable[t])}function ig(n){const e=n>>10;return fi.uint32View[0]=fi.mantissaTable[fi.offsetTable[e]+(n&1023)]+fi.exponentTable[e],fi.floatView[0]}class Bb{static toHalfFloat(e){return ng(e)}static fromHalfFloat(e){return ig(e)}}const Ft=new I,Gr=new he;let sg=0;class gn extends is{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ym,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix3(e),this.setXY(t,Gr.x,Gr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ps(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ps(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ps(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ps(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ps(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Dd extends gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Id extends gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pt extends gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const rg=new Si,$s=new I,Sa=new I;class Cr{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const t=$s.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector($s,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(Sa)),this.expandByPoint($s.copy(e.center).sub(Sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let og=0;const Sn=new at,Ma=new tn,ys=new I,xn=new Si,qs=new Si,Zt=new I;class qt extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sm(e)?Id:Dd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return Ma.lookAt(e),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(xn.min,qs.min),xn.expandByPoint(Zt),Zt.addVectors(xn.max,qs.max),xn.expandByPoint(Zt)):(xn.expandByPoint(qs.min),xn.expandByPoint(qs.max))}xn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Zt.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(e,c),Zt.add(ys)),s=Math.max(s,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new gn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new I,l[S]=new I;const c=new I,h=new I,u=new I,d=new he,f=new he,g=new he,x=new I,p=new I;function m(S,A,P){c.fromBufferAttribute(i,S),h.fromBufferAttribute(i,A),u.fromBufferAttribute(i,P),d.fromBufferAttribute(r,S),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,P),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(U),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(U),a[S].add(x),a[A].add(x),a[P].add(x),l[S].add(p),l[A].add(p),l[P].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let S=0,A=_.length;S<A;++S){const P=_[S],U=P.start,F=P.count;for(let k=U,C=U+F;k<C;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const E=new I,y=new I,T=new I,b=new I;function R(S){T.fromBufferAttribute(s,S),b.copy(T);const A=a[S];E.copy(A),E.sub(T.multiplyScalar(T.dot(A))).normalize(),y.crossVectors(b,A);const U=y.dot(l[S])<0?-1:1;o.setXYZW(S,E.x,E.y,E.z,U)}for(let S=0,A=_.length;S<A;++S){const P=_[S],U=P.start,F=P.count;for(let k=U,C=U+F;k<C;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new gn(d,h,u)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ba=new I,ag=new I,lg=new et;class di{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ba.subVectors(i,t).cross(ag.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(ba),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lg.getNormalMatrix(e),s=this.coplanarPoint(ba).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let cg=0;class Hs extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=rr,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fd,this.blendDst=pd,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ra,this.stencilZFail=ra,this.stencilZPass=ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new di().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new he().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ui=new I,wa=new I,Vr=new I,Wr=new I;class rs{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){wa.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),Wr.copy(this.origin).sub(wa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Vr),a=Wr.dot(this.direction),l=-Wr.dot(Vr),c=Wr.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(wa).addScaledVector(Vr,d),f}intersectSphere(e,t){if(e.radius<0)return null;ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),s=ui.dot(ui)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,g=t.x-o.x,x=t.y-o.y,p=t.z-o.z,m=i.x-o.x,_=i.y-o.y,E=i.z-o.z,y=Math.abs(l),T=Math.abs(c),b=Math.abs(h);let R,S,A,P,U,F,k,C,D,B,z,$;if(y>=T&&y>=b?(A=l,F=u,D=g,$=m,l>=0?(R=c,S=h,P=d,U=f,k=x,C=p,B=_,z=E):(R=h,S=c,P=f,U=d,k=p,C=x,B=E,z=_)):T>=b?(A=c,F=d,D=x,$=_,c>=0?(R=h,S=l,P=f,U=u,k=p,C=g,B=E,z=m):(R=l,S=h,P=u,U=f,k=g,C=p,B=m,z=E)):(A=h,F=f,D=p,$=E,h>=0?(R=l,S=c,P=u,U=d,k=g,C=x,B=m,z=_):(R=c,S=l,P=d,U=u,k=x,C=g,B=_,z=m)),A===0)return null;const V=R/A,X=S/A,W=1/A,ve=P-V*F,ge=U-X*F,ne=k-V*D,j=C-X*D,se=B-V*$,G=z-X*$,Y=se*j-G*ne,le=ve*G-ge*se,_e=ne*ge-j*ve;if(s){if(Y<0||le<0||_e<0)return null}else if((Y<0||le<0||_e<0)&&(Y>0||le>0||_e>0))return null;const ue=Y+le+_e;if(ue===0)return null;const Re=W*(Y*F+le*D+_e*$);return(ue>0?Re<0:Re>0)?null:this.at(Re/ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xr extends Hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mh=new at,Vi=new rs,Xr=new Cr,gh=new I,$r=new I,qr=new I,Yr=new I,Ta=new I,Kr=new I,vh=new I,Zr=new I;class nt extends tn{constructor(e=new qt,t=new xr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ta.fromBufferAttribute(u,e),o?Kr.addScaledVector(Ta,h):Kr.addScaledVector(Ta.sub(t),h))}t.add(Kr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(r),Vi.copy(e.ray).recast(e.near),!(Xr.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Xr,gh)===null||Vi.origin.distanceToSquared(gh)>(e.far-e.near)**2))&&(mh.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(mh),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],m=o[p.materialIndex],_=Math.max(p.start,f.start),E=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,T=E;y<T;y+=3){const b=a.getX(y),R=a.getX(y+1),S=a.getX(y+2);s=Jr(this,m,e,i,c,h,u,b,R,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const _=a.getX(p),E=a.getX(p+1),y=a.getX(p+2);s=Jr(this,o,e,i,c,h,u,_,E,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],m=o[p.materialIndex],_=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,T=E;y<T;y+=3){const b=y,R=y+1,S=y+2;s=Jr(this,m,e,i,c,h,u,b,R,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const _=p,E=p+1,y=p+2;s=Jr(this,o,e,i,c,h,u,_,E,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function hg(n,e,t,i,s,r,o,a){let l;if(e.side===fn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Zn,a),l===null)return null;Zr.copy(a),Zr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Zr);return c<t.near||c>t.far?null:{distance:c,point:Zr.clone(),object:n}}function Jr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,$r),n.getVertexPosition(l,qr),n.getVertexPosition(c,Yr);const h=hg(n,e,t,i,$r,qr,Yr,vh);if(h){const u=new I;In.getBarycoord(vh,$r,qr,Yr,u),s&&(h.uv=In.getInterpolatedAttribute(s,a,l,c,u,new he)),r&&(h.uv1=In.getInterpolatedAttribute(r,a,l,c,u,new he)),o&&(h.normal=In.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};In.getNormal($r,qr,Yr,d.normal),h.face=d,h.barycoord=u}return h}class Go extends Rt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=jt,h=jt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xh extends gn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ss=new at,_h=new at,Qr=[],yh=new Si,ug=new at,Ys=new nt,Ks=new Cr;class dg extends nt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ug)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ss),yh.copy(e.boundingBox).applyMatrix4(Ss),this.boundingBox.union(yh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ss),Ks.copy(e.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(Ks)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(i),e.ray.intersectsSphere(Ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ss),_h.multiplyMatrices(i,Ss),Ys.matrixWorld=_h,Ys.raycast(e,Qr);for(let o=0,a=Qr.length;o<a;o++){const l=Qr[o];l.instanceId=r,l.object=this,t.push(l)}Qr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Go(new Float32Array(s*this.count),s,this.count,xc,Un));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Wi=new Cr,fg=new he(.5,.5),jr=new I;class Rc{constructor(e=new di,t=new di,i=new di,s=new di,r=new di,o=new di){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$n,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],_=r[12],E=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-o,f-h,m-g,T-_).normalize(),s[1].setComponents(c+o,f+h,m+g,T+_).normalize(),s[2].setComponents(c+a,f+u,m+x,T+E).normalize(),s[3].setComponents(c-a,f-u,m-x,T-E).normalize(),i)s[4].setComponents(l,d,p,y).normalize(),s[5].setComponents(c-l,f-d,m-p,T-y).normalize();else if(s[4].setComponents(c-l,f-d,m-p,T-y).normalize(),t===$n)s[5].setComponents(c+l,f+d,m+p,T+y).normalize();else if(t===gr)s[5].setComponents(l,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){Wi.center.set(0,0,0);const t=fg.distanceTo(e.center);return Wi.radius=.7071067811865476+t,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(jr.x=s.normal.x>0?e.max.x:e.min.x,jr.y=s.normal.y>0?e.max.y:e.min.y,jr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ud extends Rt{constructor(e=[],t=es,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mn extends Rt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _r extends Rt{constructor(e,t,i=Jn,s,r,o,a=jt,l=jt,c,h=_i,u=1){if(h!==_i&&h!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class pg extends _r{constructor(e,t=Jn,i=es,s,r,o=jt,a=jt,l,c=_i){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Fd extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jn extends qt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(u,2));function g(x,p,m,_,E,y,T,b,R,S,A){const P=y/R,U=T/S,F=y/2,k=T/2,C=b/2,D=R+1,B=S+1;let z=0,$=0;const V=new I;for(let X=0;X<B;X++){const W=X*U-k;for(let ve=0;ve<D;ve++){const ge=ve*P-F;V[x]=ge*_,V[p]=W*E,V[m]=C,c.push(V.x,V.y,V.z),V[x]=0,V[p]=0,V[m]=b>0?1:-1,h.push(V.x,V.y,V.z),u.push(ve/R),u.push(1-X/S),z+=1}}for(let X=0;X<S;X++)for(let W=0;W<R;W++){const ve=d+W+D*X,ge=d+W+D*(X+1),ne=d+(W+1)+D*(X+1),j=d+(W+1)+D*X;l.push(ve,ge,j),l.push(ge,ne,j),$+=6}a.addGroup(f,$,A),f+=$,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class yr extends qt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new I,h=new he;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(a,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ns extends qt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const x=[],p=i/2;let m=0;_(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new pt(u,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(f,2));function _(){const y=new I,T=new I;let b=0;const R=(t-e)/i;for(let S=0;S<=r;S++){const A=[],P=S/r,U=P*(t-e)+e;for(let F=0;F<=s;F++){const k=F/s,C=k*l+a,D=Math.sin(C),B=Math.cos(C);T.x=U*D,T.y=-P*i+p,T.z=U*B,u.push(T.x,T.y,T.z),y.set(D,R,B).normalize(),d.push(y.x,y.y,y.z),f.push(k,1-P),A.push(g++)}x.push(A)}for(let S=0;S<s;S++)for(let A=0;A<r;A++){const P=x[A][S],U=x[A+1][S],F=x[A+1][S+1],k=x[A][S+1];(e>0||A!==0)&&(h.push(P,U,k),b+=3),(t>0||A!==r-1)&&(h.push(U,F,k),b+=3)}c.addGroup(m,b,0),m+=b}function E(y){const T=g,b=new he,R=new I;let S=0;const A=y===!0?e:t,P=y===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,p*P,0),d.push(0,P,0),f.push(.5,.5),g++;const U=g;for(let F=0;F<=s;F++){const C=F/s*l+a,D=Math.cos(C),B=Math.sin(C);R.x=A*B,R.y=p*P,R.z=A*D,u.push(R.x,R.y,R.z),d.push(0,P,0),b.x=D*.5+.5,b.y=B*.5*P+.5,f.push(b.x,b.y),g++}for(let F=0;F<s;F++){const k=T+F,C=U+F;y===!0?h.push(C,C+1,k):h.push(C+1,C,k),S+=3}c.addGroup(m,S,y===!0?1:2),m+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new he:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new I,s=[],r=[],o=[],a=new I,l=new at;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(rt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(rt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Cc extends ni{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class mg extends Cc{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Pc(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Sh=new I,Mh=new I,Ea=new Pc,Aa=new Pc,Ra=new Pc;class gg extends ni{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Mh.subVectors(s[0],s[1]).add(s[0]),c=Mh);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Sh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Sh),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Ea.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,p),Aa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,p),Ra.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Ea.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Aa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ra.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Ea.calc(l),Aa.calc(l),Ra.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function bh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function vg(n,e){const t=1-n;return t*t*e}function xg(n,e){return 2*(1-n)*n*e}function _g(n,e){return n*n*e}function lr(n,e,t,i){return vg(n,e)+xg(n,t)+_g(n,i)}function yg(n,e){const t=1-n;return t*t*t*e}function Sg(n,e){const t=1-n;return 3*t*t*n*e}function Mg(n,e){return 3*(1-n)*n*n*e}function bg(n,e){return n*n*n*e}function cr(n,e,t,i,s){return yg(n,e)+Sg(n,t)+Mg(n,i)+bg(n,s)}class Nd extends ni{constructor(e=new he,t=new he,i=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new he){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(cr(e,s.x,r.x,o.x,a.x),cr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wg extends ni{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(cr(e,s.x,r.x,o.x,a.x),cr(e,s.y,r.y,o.y,a.y),cr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class kd extends ni{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tg extends ni{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Od extends ni{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(lr(e,s.x,r.x,o.x),lr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Eg extends ni{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(lr(e,s.x,r.x,o.x),lr(e,s.y,r.y,o.y),lr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bd extends ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(bh(a,l.x,c.x,h.x,u.x),bh(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new he().fromArray(s))}return this}}var Wl=Object.freeze({__proto__:null,ArcCurve:mg,CatmullRomCurve3:gg,CubicBezierCurve:Nd,CubicBezierCurve3:wg,EllipseCurve:Cc,LineCurve:kd,LineCurve3:Tg,QuadraticBezierCurve:Od,QuadraticBezierCurve3:Eg,SplineCurve:Bd});class Ag extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Wl[s.type]().fromJSON(s))}return this}}class Sr extends Ag{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new kd(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Od(this.currentPoint.clone(),new he(e,t),new he(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Nd(this.currentPoint.clone(),new he(e,t),new he(i,s),new he(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Bd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new Cc(e,t,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Pr extends Sr{constructor(e){super(e),this.uuid=ss(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Sr().fromJSON(s))}return this}}function Rg(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=zd(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Ig(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,u=l;for(let d=t;d<s;d+=t){const f=n[d],g=n[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Mr(r,o,t,a,l,c,0),o}function zd(n,e,t,i,s){let r;if(s===Wg(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=wh(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=wh(o/i|0,n[o],n[o+1],r);return r&&ks(r,r.next)&&(wr(r),r=r.next),r}function ns(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ks(t,t.next)||Pt(t.prev,t,t.next)===0)){if(wr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Mr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Og(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?Pg(n,i,s,r):Cg(n)){e.push(l.i,n.i,c.i),wr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Lg(ns(n),e),Mr(n,e,t,i,s,r,2)):o===2&&Dg(n,e,t,i,s,r):Mr(ns(n),e,t,i,s,r,1);break}}}function Cg(n){const e=n.prev,t=n,i=n.next;if(Pt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&er(s,a,r,l,o,c,g.x,g.y)&&Pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Pg(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Pt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,u,d),x=Math.max(a,l,c),p=Math.max(h,u,d),m=Xl(f,g,e,t,i),_=Xl(x,p,e,t,i);let E=n.prevZ,y=n.nextZ;for(;E&&E.z>=m&&y&&y.z<=_;){if(E.x>=f&&E.x<=x&&E.y>=g&&E.y<=p&&E!==s&&E!==o&&er(a,h,l,u,c,d,E.x,E.y)&&Pt(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&er(a,h,l,u,c,d,y.x,y.y)&&Pt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=m;){if(E.x>=f&&E.x<=x&&E.y>=g&&E.y<=p&&E!==s&&E!==o&&er(a,h,l,u,c,d,E.x,E.y)&&Pt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&er(a,h,l,u,c,d,y.x,y.y)&&Pt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Lg(n,e){let t=n;do{const i=t.prev,s=t.next.next;!ks(i,s)&&Gd(i,t,t.next,s)&&br(i,s)&&br(s,i)&&(e.push(i.i,t.i,s.i),wr(t),wr(t.next),t=n=s),t=t.next}while(t!==n);return ns(t)}function Dg(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hg(o,a)){let l=Vd(o,a);o=ns(o,o.next),l=ns(l,l.next),Mr(o,e,t,i,s,r,0),Mr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ig(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=zd(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(zg(c))}s.sort(Ug);for(let r=0;r<s.length;r++)t=Fg(s[r],t);return t}function Ug(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Fg(n,e){const t=Ng(n,e);if(!t)return e;const i=Vd(t,n);return ns(i,i.next),ns(t,t.next)}function Ng(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(ks(n,t))return t;do{if(ks(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Hd(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const u=Math.abs(s-t.y)/(i-t.x);br(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&kg(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function kg(n,e){return Pt(n.prev,n,e.prev)<0&&Pt(e.next,n,n.next)<0}function Og(n,e,t,i){let s=n;do s.z===0&&(s.z=Xl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Bg(s)}function Bg(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Xl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function zg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Hd(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function er(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Hd(n,e,t,i,s,r,o,a)}function Hg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Gg(n,e)&&(br(n,e)&&br(e,n)&&Vg(n,e)&&(Pt(n.prev,n,e.prev)||Pt(n,e.prev,e))||ks(n,e)&&Pt(n.prev,n,n.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ks(n,e){return n.x===e.x&&n.y===e.y}function Gd(n,e,t,i){const s=to(Pt(n,e,t)),r=to(Pt(n,e,i)),o=to(Pt(t,i,n)),a=to(Pt(t,i,e));return!!(s!==r&&o!==a||s===0&&eo(n,t,e)||r===0&&eo(n,i,e)||o===0&&eo(t,n,i)||a===0&&eo(t,e,i))}function eo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function to(n){return n>0?1:n<0?-1:0}function Gg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Gd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function br(n,e){return Pt(n.prev,n,n.next)<0?Pt(n,e,n.next)>=0&&Pt(n,n.prev,e)>=0:Pt(n,e,n.prev)<0||Pt(n,n.next,e)<0}function Vg(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Vd(n,e){const t=$l(n.i,n.x,n.y),i=$l(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function wh(n,e,t,i){const s=$l(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function wr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function $l(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Wg(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Xg{static triangulate(e,t,i=2){return Rg(e,t,i)}}class mi{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return mi.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Th(e),Eh(i,e);let o=e.length;t.forEach(Th);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Eh(i,t[l]);const a=Xg.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Th(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Eh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Os extends qt{constructor(e=new Pr([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new pt(s,3)),this.setAttribute("uv",new pt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:$g;let E,y=!1,T,b,R,S;if(m){E=m.getSpacedPoints(h),y=!0,d=!1;const re=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(h,re),b=new I,R=new I,S=new I}d||(p=0,f=0,g=0,x=0);const A=a.extractPoints(c);let P=A.shape;const U=A.holes;if(!mi.isClockWise(P)){P=P.reverse();for(let re=0,ce=U.length;re<ce;re++){const fe=U[re];mi.isClockWise(fe)&&(U[re]=fe.reverse())}}function k(re){const fe=10000000000000001e-36;let pe=re[0];for(let xe=1;xe<=re.length;xe++){const $e=xe%re.length,Ve=re[$e],qe=Ve.x-pe.x,Ke=Ve.y-pe.y,N=qe*qe+Ke*Ke,lt=Math.max(Math.abs(Ve.x),Math.abs(Ve.y),Math.abs(pe.x),Math.abs(pe.y)),st=fe*lt*lt;if(N<=st){re.splice($e,1),xe--;continue}pe=Ve}}k(P),U.forEach(k);const C=U.length,D=P;for(let re=0;re<C;re++){const ce=U[re];P=P.concat(ce)}function B(re,ce,fe){return ce||ft("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(ce,fe)}const z=P.length;function $(re,ce,fe){let pe,xe,$e;const Ve=re.x-ce.x,qe=re.y-ce.y,Ke=fe.x-re.x,N=fe.y-re.y,lt=Ve*Ve+qe*qe,st=Ve*N-qe*Ke;if(Math.abs(st)>Number.EPSILON){const L=Math.sqrt(lt),M=Math.sqrt(Ke*Ke+N*N),q=ce.x-qe/L,J=ce.y+Ve/L,Q=fe.x-N/M,me=fe.y+Ke/M,ye=((Q-q)*N-(me-J)*Ke)/(Ve*N-qe*Ke);pe=q+Ve*ye-re.x,xe=J+qe*ye-re.y;const ie=pe*pe+xe*xe;if(ie<=2)return new he(pe,xe);$e=Math.sqrt(ie/2)}else{let L=!1;Ve>Number.EPSILON?Ke>Number.EPSILON&&(L=!0):Ve<-Number.EPSILON?Ke<-Number.EPSILON&&(L=!0):Math.sign(qe)===Math.sign(N)&&(L=!0),L?(pe=-qe,xe=Ve,$e=Math.sqrt(lt)):(pe=Ve,xe=qe,$e=Math.sqrt(lt/2))}return new he(pe/$e,xe/$e)}const V=[];for(let re=0,ce=D.length,fe=ce-1,pe=re+1;re<ce;re++,fe++,pe++)fe===ce&&(fe=0),pe===ce&&(pe=0),V[re]=$(D[re],D[fe],D[pe]);const X=[];let W,ve=V.concat();for(let re=0,ce=C;re<ce;re++){const fe=U[re];W=[];for(let pe=0,xe=fe.length,$e=xe-1,Ve=pe+1;pe<xe;pe++,$e++,Ve++)$e===xe&&($e=0),Ve===xe&&(Ve=0),W[pe]=$(fe[pe],fe[$e],fe[Ve]);X.push(W),ve=ve.concat(W)}let ge;if(p===0)ge=mi.triangulateShape(D,U);else{const re=[],ce=[];for(let fe=0;fe<p;fe++){const pe=fe/p,xe=f*Math.cos(pe*Math.PI/2),$e=g*Math.sin(pe*Math.PI/2)+x;for(let Ve=0,qe=D.length;Ve<qe;Ve++){const Ke=B(D[Ve],V[Ve],$e);le(Ke.x,Ke.y,-xe),pe===0&&re.push(Ke)}for(let Ve=0,qe=C;Ve<qe;Ve++){const Ke=U[Ve];W=X[Ve];const N=[];for(let lt=0,st=Ke.length;lt<st;lt++){const L=B(Ke[lt],W[lt],$e);le(L.x,L.y,-xe),pe===0&&N.push(L)}pe===0&&ce.push(N)}}ge=mi.triangulateShape(re,ce)}const ne=ge.length,j=g+x;for(let re=0;re<z;re++){const ce=d?B(P[re],ve[re],j):P[re];y?(R.copy(T.normals[0]).multiplyScalar(ce.x),b.copy(T.binormals[0]).multiplyScalar(ce.y),S.copy(E[0]).add(R).add(b),le(S.x,S.y,S.z)):le(ce.x,ce.y,0)}for(let re=1;re<=h;re++)for(let ce=0;ce<z;ce++){const fe=d?B(P[ce],ve[ce],j):P[ce];y?(R.copy(T.normals[re]).multiplyScalar(fe.x),b.copy(T.binormals[re]).multiplyScalar(fe.y),S.copy(E[re]).add(R).add(b),le(S.x,S.y,S.z)):le(fe.x,fe.y,u/h*re)}for(let re=p-1;re>=0;re--){const ce=re/p,fe=f*Math.cos(ce*Math.PI/2),pe=g*Math.sin(ce*Math.PI/2)+x;for(let xe=0,$e=D.length;xe<$e;xe++){const Ve=B(D[xe],V[xe],pe);le(Ve.x,Ve.y,u+fe)}for(let xe=0,$e=U.length;xe<$e;xe++){const Ve=U[xe];W=X[xe];for(let qe=0,Ke=Ve.length;qe<Ke;qe++){const N=B(Ve[qe],W[qe],pe);y?le(N.x,N.y+E[h-1].y,E[h-1].x+fe):le(N.x,N.y,u+fe)}}}se(),G();function se(){const re=s.length/3;if(d){let ce=0,fe=z*ce;for(let pe=0;pe<ne;pe++){const xe=ge[pe];_e(xe[2]+fe,xe[1]+fe,xe[0]+fe)}ce=h+p*2,fe=z*ce;for(let pe=0;pe<ne;pe++){const xe=ge[pe];_e(xe[0]+fe,xe[1]+fe,xe[2]+fe)}}else{for(let ce=0;ce<ne;ce++){const fe=ge[ce];_e(fe[2],fe[1],fe[0])}for(let ce=0;ce<ne;ce++){const fe=ge[ce];_e(fe[0]+z*h,fe[1]+z*h,fe[2]+z*h)}}i.addGroup(re,s.length/3-re,0)}function G(){const re=s.length/3;let ce=0;Y(D,ce),ce+=D.length;for(let fe=0,pe=U.length;fe<pe;fe++){const xe=U[fe];Y(xe,ce),ce+=xe.length}i.addGroup(re,s.length/3-re,1)}function Y(re,ce){let fe=re.length;for(;--fe>=0;){const pe=fe;let xe=fe-1;xe<0&&(xe=re.length-1);for(let $e=0,Ve=h+p*2;$e<Ve;$e++){const qe=z*$e,Ke=z*($e+1),N=ce+pe+qe,lt=ce+xe+qe,st=ce+xe+Ke,L=ce+pe+Ke;ue(N,lt,st,L)}}}function le(re,ce,fe){l.push(re),l.push(ce),l.push(fe)}function _e(re,ce,fe){Re(re),Re(ce),Re(fe);const pe=s.length/3,xe=_.generateTopUV(i,s,pe-3,pe-2,pe-1);Ye(xe[0]),Ye(xe[1]),Ye(xe[2])}function ue(re,ce,fe,pe){Re(re),Re(ce),Re(pe),Re(ce),Re(fe),Re(pe);const xe=s.length/3,$e=_.generateSideWallUV(i,s,xe-6,xe-3,xe-2,xe-1);Ye($e[0]),Ye($e[1]),Ye($e[3]),Ye($e[1]),Ye($e[2]),Ye($e[3])}function Re(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function Ye(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return qg(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Wl[s.type]().fromJSON(s)),new Os(i,e.options)}}const $g={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new he(r,o),new he(a,l),new he(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-u),new he(d,1-g),new he(x,1-m)]:[new he(a,1-l),new he(h,1-u),new he(f,1-g),new he(p,1-m)]}};function qg(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Mi extends qt{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=rt(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/t,u=new I,d=new he,f=new I,g=new I,x=new I;let p=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:p=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:p=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let _=0;_<=t;_++){const E=i+_*h*s,y=Math.sin(E),T=Math.cos(E);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*y,u.y=e[b].y,u.z=e[b].x*T,o.push(u.x,u.y,u.z),d.x=_/t,d.y=b/(e.length-1),a.push(d.x,d.y);const R=l[3*b+0]*y,S=l[3*b+1],A=l[3*b+0]*T;c.push(R,S,A)}}for(let _=0;_<t;_++)for(let E=0;E<e.length-1;E++){const y=E+_*e.length,T=y,b=y+e.length,R=y+e.length+1,S=y+1;r.push(T,b,S),r.push(R,S,b)}this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("uv",new pt(a,2)),this.setAttribute("normal",new pt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.points,e.segments,e.phiStart,e.phiLength)}}class ei extends qt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){const _=m*d-o;for(let E=0;E<c;E++){const y=E*u-r;g.push(y,-_,0),x.push(0,0,1),p.push(E/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){const E=_+c*m,y=_+c*(m+1),T=_+1+c*(m+1),b=_+1+c*m;f.push(E,y,b),f.push(y,T,b)}this.setIndex(f),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lc extends qt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/s,f=new I,g=new he;for(let x=0;x<=s;x++){for(let p=0;p<=i;p++){const m=r+p/i*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){const p=x*(i+1);for(let m=0;m<i;m++){const _=m+p,E=_,y=_+i+1,T=_+i+2,b=_+1;a.push(E,y,b),a.push(y,T,b)}}this.setIndex(a),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class hr extends qt{constructor(e=new Pr([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new pt(s,3)),this.setAttribute("normal",new pt(r,3)),this.setAttribute("uv",new pt(o,2));function c(h){const u=s.length/3,d=h.extractPoints(t);let f=d.shape;const g=d.holes;mi.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){const _=g[p];mi.isClockWise(_)===!0&&(g[p]=_.reverse())}const x=mi.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){const _=g[p];f=f.concat(_)}for(let p=0,m=f.length;p<m;p++){const _=f[p];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let p=0,m=x.length;p<m;p++){const _=x[p],E=_[0]+u,y=_[1]+u,T=_[2]+u;i.push(E,y,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Yg(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];i.push(o)}return new hr(i,e.curveSegments)}}function Yg(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class Fo extends qt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new I,d=new I,f=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){const _=[],E=m/i,y=o+E*a,T=e*Math.cos(y),b=Math.sqrt(e*e-T*T);let R=0;m===0&&o===0?R=.5/t:m===i&&l===Math.PI&&(R=-.5/t);for(let S=0;S<=t;S++){const A=S/t,P=s+A*r;u.x=-b*Math.cos(P),u.y=T,u.z=b*Math.sin(P),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(A+R,1-E),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){const E=h[m][_+1],y=h[m][_],T=h[m+1][_],b=h[m+1][_+1];(m!==0||o>0)&&f.push(E,y,b),(m!==i-1||l<Math.PI)&&f.push(y,T,b)}this.setIndex(f),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Dc extends qt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],h=[],u=[],d=new I,f=new I,g=new I;for(let x=0;x<=i;x++){const p=o+x/i*a;for(let m=0;m<=s;m++){const _=m/s*r;f.x=(e+t*Math.cos(p))*Math.cos(_),f.y=(e+t*Math.cos(p))*Math.sin(_),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(m/s),u.push(x/i)}}for(let x=1;x<=i;x++)for(let p=1;p<=s;p++){const m=(s+1)*x+p-1,_=(s+1)*(x-1)+p-1,E=(s+1)*(x-1)+p,y=(s+1)*x+p;l.push(m,_,y),l.push(_,E,y)}this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Kg extends Hs{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Je(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Bs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Ah(s))s.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Ah(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function un(n){const e={};for(let t=0;t<n.length;t++){const i=Bs(n[t]);for(const s in i)e[s]=i[s]}return e}function Ah(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Zg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const Jg={clone:Bs,merge:un};var Qg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends Hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qg,this.fragmentShader=jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=Zg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(s.value);break;case"v2":this.uniforms[i].value=new he().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(s.value);break;case"m3":this.uniforms[i].value=new et().fromArray(s.value);break;case"m4":this.uniforms[i].value=new at().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class e0 extends ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Pn extends Hs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vl,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mn extends Pn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Xd extends Hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $d extends Hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Vo extends tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class t0 extends Vo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ca=new at,Rh=new I,Ch=new I;class n0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rc,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Rh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rh),Ch.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ch),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Ca.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ca,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===gr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const no=new I,io=new Gt,Bn=new I;class qd extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(no,io,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,Bn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(no,io,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new I,Ph=new he,Lh=new he;class bn extends qd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,Ph,Lh),t.subVectors(Lh,Ph)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(or*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ic extends qd{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class i0 extends n0{constructor(){super(new Ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class so extends Vo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new i0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class s0 extends Vo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class r0 extends Vo{constructor(e,t,i=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}const Ms=-90,bs=1;class o0 extends tn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bn(Ms,bs,e,t);s.layers=this.layers,this.add(s);const r=new bn(Ms,bs,e,t);r.layers=this.layers,this.add(r);const o=new bn(Ms,bs,e,t);o.layers=this.layers,this.add(o);const a=new bn(Ms,bs,e,t);a.layers=this.layers,this.add(a);const l=new bn(Ms,bs,e,t);l.layers=this.layers,this.add(l);const c=new bn(Ms,bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===$n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class a0 extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Dh=new at;class Yd{constructor(e,t,i=0,s=1/0){this.ray=new rs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ec,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ft("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dh),this}intersectObject(e,t=!0,i=[]){return ql(e,this,i,t),i.sort(Ih),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ql(e[s],this,i,t);return i.sort(Ih),i}}function Ih(n,e){return n.distance-e.distance}function ql(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)ql(r[o],e,t,!0)}}class Kd{static{Kd.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}}function Uh(n,e,t,i){const s=l0(i);switch(t){case Ad:return n*e;case xc:return n*e/s.components*s.byteLength;case _c:return n*e/s.components*s.byteLength;case ts:return n*e*2/s.components*s.byteLength;case yc:return n*e*2/s.components*s.byteLength;case Rd:return n*e*3/s.components*s.byteLength;case Fn:return n*e*4/s.components*s.byteLength;case Sc:return n*e*4/s.components*s.byteLength;case vo:case xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _o:case yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pl:case gl:return Math.max(n,16)*Math.max(e,8)/4;case fl:case ml:return Math.max(n,8)*Math.max(e,8)/2;case vl:case xl:case yl:case Sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _l:case Po:case Ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Al:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Il:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Nl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case kl:case Ol:case Bl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case zl:case Hl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Lo:case Gl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function l0(n){switch(n){case yn:case bd:return{byteLength:1,components:1};case pr:case wd:case Qn:return{byteLength:2,components:1};case gc:case vc:return{byteLength:2,components:4};case Jn:case mc:case Un:return{byteLength:4,components:1};case Td:case Ed:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fc}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zd(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function c0(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var h0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,d0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,v0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,b0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,w0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,I0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,U0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,F0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",H0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ev=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,nv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,iv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ov=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,av=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,fv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_v=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ev=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Av=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Iv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ov=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$v=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Kv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ex=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ix=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ux=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_x=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ax=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ix=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:h0,alphahash_pars_fragment:u0,alphamap_fragment:d0,alphamap_pars_fragment:f0,alphatest_fragment:p0,alphatest_pars_fragment:m0,aomap_fragment:g0,aomap_pars_fragment:v0,batching_pars_vertex:x0,batching_vertex:_0,begin_vertex:y0,beginnormal_vertex:S0,bsdfs:M0,iridescence_fragment:b0,bumpmap_pars_fragment:w0,clipping_planes_fragment:T0,clipping_planes_pars_fragment:E0,clipping_planes_pars_vertex:A0,clipping_planes_vertex:R0,color_fragment:C0,color_pars_fragment:P0,color_pars_vertex:L0,color_vertex:D0,common:I0,cube_uv_reflection_fragment:U0,defaultnormal_vertex:F0,displacementmap_pars_vertex:N0,displacementmap_vertex:k0,emissivemap_fragment:O0,emissivemap_pars_fragment:B0,colorspace_fragment:z0,colorspace_pars_fragment:H0,envmap_fragment:G0,envmap_common_pars_fragment:V0,envmap_pars_fragment:W0,envmap_pars_vertex:X0,envmap_physical_pars_fragment:nv,envmap_vertex:$0,fog_vertex:q0,fog_pars_vertex:Y0,fog_fragment:K0,fog_pars_fragment:Z0,gradientmap_pars_fragment:J0,lightmap_pars_fragment:Q0,lights_lambert_fragment:j0,lights_lambert_pars_fragment:ev,lights_pars_begin:tv,lights_toon_fragment:iv,lights_toon_pars_fragment:sv,lights_phong_fragment:rv,lights_phong_pars_fragment:ov,lights_physical_fragment:av,lights_physical_pars_fragment:lv,lights_fragment_begin:cv,lights_fragment_maps:hv,lights_fragment_end:uv,lightprobes_pars_fragment:dv,logdepthbuf_fragment:fv,logdepthbuf_pars_fragment:pv,logdepthbuf_pars_vertex:mv,logdepthbuf_vertex:gv,map_fragment:vv,map_pars_fragment:xv,map_particle_fragment:_v,map_particle_pars_fragment:yv,metalnessmap_fragment:Sv,metalnessmap_pars_fragment:Mv,morphinstance_vertex:bv,morphcolor_vertex:wv,morphnormal_vertex:Tv,morphtarget_pars_vertex:Ev,morphtarget_vertex:Av,normal_fragment_begin:Rv,normal_fragment_maps:Cv,normal_pars_fragment:Pv,normal_pars_vertex:Lv,normal_vertex:Dv,normalmap_pars_fragment:Iv,clearcoat_normal_fragment_begin:Uv,clearcoat_normal_fragment_maps:Fv,clearcoat_pars_fragment:Nv,iridescence_pars_fragment:kv,opaque_fragment:Ov,packing:Bv,premultiplied_alpha_fragment:zv,project_vertex:Hv,dithering_fragment:Gv,dithering_pars_fragment:Vv,roughnessmap_fragment:Wv,roughnessmap_pars_fragment:Xv,shadowmap_pars_fragment:$v,shadowmap_pars_vertex:qv,shadowmap_vertex:Yv,shadowmask_pars_fragment:Kv,skinbase_vertex:Zv,skinning_pars_vertex:Jv,skinning_vertex:Qv,skinnormal_vertex:jv,specularmap_fragment:ex,specularmap_pars_fragment:tx,tonemapping_fragment:nx,tonemapping_pars_fragment:ix,transmission_fragment:sx,transmission_pars_fragment:rx,uv_pars_fragment:ox,uv_pars_vertex:ax,uv_vertex:lx,worldpos_vertex:cx,background_vert:hx,background_frag:ux,backgroundCube_vert:dx,backgroundCube_frag:fx,cube_vert:px,cube_frag:mx,depth_vert:gx,depth_frag:vx,distance_vert:xx,distance_frag:_x,equirect_vert:yx,equirect_frag:Sx,linedashed_vert:Mx,linedashed_frag:bx,meshbasic_vert:wx,meshbasic_frag:Tx,meshlambert_vert:Ex,meshlambert_frag:Ax,meshmatcap_vert:Rx,meshmatcap_frag:Cx,meshnormal_vert:Px,meshnormal_frag:Lx,meshphong_vert:Dx,meshphong_frag:Ix,meshphysical_vert:Ux,meshphysical_frag:Fx,meshtoon_vert:Nx,meshtoon_frag:kx,points_vert:Ox,points_frag:Bx,shadow_vert:zx,shadow_frag:Hx,sprite_vert:Gx,sprite_frag:Vx},De={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Wn={basic:{uniforms:un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:un([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:un([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Je(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:un([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:un([De.points,De.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:un([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:un([De.common,De.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:un([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:un([De.sprite,De.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:un([De.common,De.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:un([De.lights,De.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Wn.physical={uniforms:un([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const ro={r:0,b:0,g:0},Wx=new at,Jd=new et;Jd.set(-1,0,0,0,1,0,0,0,1);function Xx(n,e,t,i,s,r){const o=new Je(0);let a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let E=_.isScene===!0?_.background:null;if(E&&E.isTexture){const y=_.backgroundBlurriness>0;E=e.get(E,y)}return E}function g(_){let E=!1;const y=f(_);y===null?p(o,a):y&&y.isColor&&(p(y,1),E=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(_,E){const y=f(E);y&&(y.isCubeTexture||y.mapping===Ho)?(c===void 0&&(c=new nt(new jn(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:Bs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Wx.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jd),c.material.toneMapped=dt.getTransfer(y.colorSpace)!==yt,(h!==y||u!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new nt(new ei(2,2),new ti({name:"BackgroundMaterial",uniforms:Bs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=dt.getTransfer(y.colorSpace)!==yt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,E){_.getRGB(ro,Wd(n)),t.buffers.color.setClear(ro.r,ro.g,ro.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,E=1){o.set(_),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,p(o,a)},render:g,addToRenderList:x,dispose:m}}function $x(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(U,F,k,C,D){let B=!1;const z=u(U,C,k,F);r!==z&&(r=z,c(r.object)),B=f(U,C,k,D),B&&g(U,C,k,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,y(U,F,k,C),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function h(U){return n.deleteVertexArray(U)}function u(U,F,k,C){const D=C.wireframe===!0;let B=i[F.id];B===void 0&&(B={},i[F.id]=B);const z=U.isInstancedMesh===!0?U.id:0;let $=B[z];$===void 0&&($={},B[z]=$);let V=$[k.id];V===void 0&&(V={},$[k.id]=V);let X=V[D];return X===void 0&&(X=d(l()),V[D]=X),X}function d(U){const F=[],k=[],C=[];for(let D=0;D<t;D++)F[D]=0,k[D]=0,C[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:C,object:U,attributes:{},index:null}}function f(U,F,k,C){const D=r.attributes,B=F.attributes;let z=0;const $=k.getAttributes();for(const V in $)if($[V].location>=0){const W=D[V];let ve=B[V];if(ve===void 0&&(V==="instanceMatrix"&&U.instanceMatrix&&(ve=U.instanceMatrix),V==="instanceColor"&&U.instanceColor&&(ve=U.instanceColor)),W===void 0||W.attribute!==ve||ve&&W.data!==ve.data)return!0;z++}return r.attributesNum!==z||r.index!==C}function g(U,F,k,C){const D={},B=F.attributes;let z=0;const $=k.getAttributes();for(const V in $)if($[V].location>=0){let W=B[V];W===void 0&&(V==="instanceMatrix"&&U.instanceMatrix&&(W=U.instanceMatrix),V==="instanceColor"&&U.instanceColor&&(W=U.instanceColor));const ve={};ve.attribute=W,W&&W.data&&(ve.data=W.data),D[V]=ve,z++}r.attributes=D,r.attributesNum=z,r.index=C}function x(){const U=r.newAttributes;for(let F=0,k=U.length;F<k;F++)U[F]=0}function p(U){m(U,0)}function m(U,F){const k=r.newAttributes,C=r.enabledAttributes,D=r.attributeDivisors;k[U]=1,C[U]===0&&(n.enableVertexAttribArray(U),C[U]=1),D[U]!==F&&(n.vertexAttribDivisor(U,F),D[U]=F)}function _(){const U=r.newAttributes,F=r.enabledAttributes;for(let k=0,C=F.length;k<C;k++)F[k]!==U[k]&&(n.disableVertexAttribArray(k),F[k]=0)}function E(U,F,k,C,D,B,z){z===!0?n.vertexAttribIPointer(U,F,k,D,B):n.vertexAttribPointer(U,F,k,C,D,B)}function y(U,F,k,C){x();const D=C.attributes,B=k.getAttributes(),z=F.defaultAttributeValues;for(const $ in B){const V=B[$];if(V.location>=0){let X=D[$];if(X===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(X=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(X=U.instanceColor)),X!==void 0){const W=X.normalized,ve=X.itemSize,ge=e.get(X);if(ge===void 0)continue;const ne=ge.buffer,j=ge.type,se=ge.bytesPerElement,G=j===n.INT||j===n.UNSIGNED_INT||X.gpuType===mc;if(X.isInterleavedBufferAttribute){const Y=X.data,le=Y.stride,_e=X.offset;if(Y.isInstancedInterleavedBuffer){for(let ue=0;ue<V.locationSize;ue++)m(V.location+ue,Y.meshPerAttribute);U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ue=0;ue<V.locationSize;ue++)p(V.location+ue);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let ue=0;ue<V.locationSize;ue++)E(V.location+ue,ve/V.locationSize,j,W,le*se,(_e+ve/V.locationSize*ue)*se,G)}else{if(X.isInstancedBufferAttribute){for(let Y=0;Y<V.locationSize;Y++)m(V.location+Y,X.meshPerAttribute);U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Y=0;Y<V.locationSize;Y++)p(V.location+Y);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let Y=0;Y<V.locationSize;Y++)E(V.location+Y,ve/V.locationSize,j,W,ve*se,ve/V.locationSize*Y*se,G)}}else if(z!==void 0){const W=z[$];if(W!==void 0)switch(W.length){case 2:n.vertexAttrib2fv(V.location,W);break;case 3:n.vertexAttrib3fv(V.location,W);break;case 4:n.vertexAttrib4fv(V.location,W);break;default:n.vertexAttrib1fv(V.location,W)}}}}_()}function T(){A();for(const U in i){const F=i[U];for(const k in F){const C=F[k];for(const D in C){const B=C[D];for(const z in B)h(B[z].object),delete B[z];delete C[D]}}delete i[U]}}function b(U){if(i[U.id]===void 0)return;const F=i[U.id];for(const k in F){const C=F[k];for(const D in C){const B=C[D];for(const z in B)h(B[z].object),delete B[z];delete C[D]}}delete i[U.id]}function R(U){for(const F in i){const k=i[F];for(const C in k){const D=k[C];if(D[U.id]===void 0)continue;const B=D[U.id];for(const z in B)h(B[z].object),delete B[z];delete D[U.id]}}}function S(U){for(const F in i){const k=i[F],C=U.isInstancedMesh===!0?U.id:0,D=k[C];if(D!==void 0){for(const B in D){const z=D[B];for(const $ in z)h(z[$].object),delete z[$];delete D[B]}delete k[C],Object.keys(k).length===0&&delete i[F]}}}function A(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function qx(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Yx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Fn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const S=R===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==yn&&R!==Un&&!S&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:y,maxSamples:T,samples:b}}function Kx(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new di,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const _=r?0:i,E=_*4;let y=m.clippingState||null;l.value=y,y=h(g,d,E,f);for(let T=0;T!==E;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const m=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,y=f;E!==x;++E,y+=4)o.copy(u[E]).applyMatrix4(_,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}const Ls=4,Zx=6,Jx=20,Qx=256,Zs=new Ic,Fh=new Je;let Pa=null,La=0,Da=0,Ia=!1;const jx=new I,Xi=new I;class Yl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=jx}=r;Pa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Pa,La,Da),this._renderer.xr.enabled=Ia,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:Qn,format:Fn,colorSpace:Do,depthBuffer:!1},s=Nh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nh(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=e_(r)),this._blurMaterial=n_(r,e,t),this._ggxMaterial=t_(r,e,t)}return s}_compileMaterial(e){const t=new nt(new qt,e);this._renderer.compile(t,Zs)}_sceneToCubeUV(e,t,i,s,r){const l=new bn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Fh),u.toneMapping=Yn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nt(new jn,new xr({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,p=x.material;let m=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,m=!0):(p.color.copy(Fh),m=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const T=this._cubeSize;ws(s,y*T,E>2?T:0,T,T),u.setRenderTarget(s),m&&u.render(x,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===es||e.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ws(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Zs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:g}=this,x=this._sizeLods[i],p=3*x*(i>g-Ls?i-g+Ls:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ws(r,p,m,3*x,2*x),s.setRenderTarget(r),s.render(a,Zs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ws(e,p,m,3*x,2*x),s.setRenderTarget(e),s.render(a,Zs)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const h=this._sizeLods[s],u=3*h*(s>this._lodMax-Ls?s-this._lodMax+Ls:0),d=4*(this._cubeSize-h);ws(t,u,d,3*h,2*h),o.setRenderTarget(t),o.render(l,Zs)}}function e_(n){const e=[],t=[];let i=n;const s=n-Ls+1+Zx;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,g=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let m=0;m<u;m++){const _=m%3*2/3-1,E=m>2?0:-1,y=[_,E,0,_+2/3,E,0,_+2/3,E+1,0,_,E,0,_+2/3,E+1,0,_,E+1,0];g.set(y,f*d*m);for(let T=0;T<d;T++){const b=h[T*2]*2-1,R=h[T*2+1]*2-1;m===0?Xi.set(1,R,b):m===1?Xi.set(-b,1,-R):m===2?Xi.set(-b,R,1):m===3?Xi.set(-1,R,-b):m===4?Xi.set(-b,-1,R):Xi.set(b,R,-1),Xi.toArray(x,(m*d+T)*f)}}const p=new qt;p.setAttribute("position",new gn(g,f)),p.setAttribute("outputDirection",new gn(x,f)),t.push(new nt(p,null)),i>Ls&&i--}return{lodMeshes:t,sizeLods:e}}function Nh(n,e,t){const i=new kn(n,e,t);return i.texture.mapping=Ho,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function t_(n,e,t){return new ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function n_(n,e,t){return new ti({name:"SphericalGaussianBlur",defines:{SAMPLES:Jx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Wo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function kh(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Oh(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Wo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Qd extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ud(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new jn(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:vi});r.uniforms.tEquirect.value=t;const o=new nt(s,r),a=t.minFilter;return t.minFilter===ki&&(t.minFilter=en),new o0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function i_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===go||f===ia)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const x=new Qd(g.height);return x.fromEquirectangularTexture(n,d),e.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const f=d.mapping,g=f===go||f===ia,x=f===es||f===Fs;if(g||x){let p=t.get(d);const m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new Yl(n)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{const _=d.image;return g&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new Yl(n)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===go?d.mapping=es:f===ia&&(d.mapping=Fs),d}function l(d){let f=0;const g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function c(d){const f=d.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function s_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ds("WebGLRenderer: "+i+" extension not supported."),s}}}function r_(n,e,t,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(g===void 0)return;if(f!==null){const _=f.array;x=f.version;for(let E=0,y=_.length;E<y;E+=3){const T=_[E+0],b=_[E+1],R=_[E+2];d.push(T,b,b,R,R,T)}}else{const _=g.array;x=g.version;for(let E=0,y=_.length/3-1;E<y;E+=3){const T=E+0,b=E+1,R=E+2;d.push(T,b,b,R,R,T)}}const p=new(g.count>=65535?Id:Dd)(d,1);p.version=x;const m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function o_(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*o),t.update(d,i,1)}function c(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*o,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let x=0;for(let p=0;p<f;p++)x+=d[p];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function a_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:ft("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function l_(n,e,t){const i=new WeakMap,s=new Et;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let A=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let E=0;f===!0&&(E=1),g===!0&&(E=2),x===!0&&(E=3);let y=a.attributes.position.count*E,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const b=new Float32Array(y*T*4*u),R=new Pd(b,y,T,u);R.type=Un,R.needsUpdate=!0;const S=E*4;for(let P=0;P<u;P++){const U=p[P],F=m[P],k=_[P],C=y*T*4*P;for(let D=0;D<U.count;D++){const B=D*S;f===!0&&(s.fromBufferAttribute(U,D),b[C+B+0]=s.x,b[C+B+1]=s.y,b[C+B+2]=s.z,b[C+B+3]=0),g===!0&&(s.fromBufferAttribute(F,D),b[C+B+4]=s.x,b[C+B+5]=s.y,b[C+B+6]=s.z,b[C+B+7]=0),x===!0&&(s.fromBufferAttribute(k,D),b[C+B+8]=s.x,b[C+B+9]=s.y,b[C+B+10]=s.z,b[C+B+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new he(y,T)},i.set(a,d),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function c_(n,e,t,i,s){let r=new WeakMap;function o(c){const h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const h_={[gd]:"LINEAR_TONE_MAPPING",[vd]:"REINHARD_TONE_MAPPING",[xd]:"CINEON_TONE_MAPPING",[pc]:"ACES_FILMIC_TONE_MAPPING",[yd]:"AGX_TONE_MAPPING",[Sd]:"NEUTRAL_TONE_MAPPING",[_d]:"CUSTOM_TONE_MAPPING"};function u_(n,e,t,i,s,r){const o=new kn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new qt;c.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new pt([0,2,0,0,2,0],2));const h=new e0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new nt(c,h),d=new Ic(-1,1,1,-1,0,1);let f=null,g=null,x=!1,p,m=null,_=[],E=!1;this.setSize=function(y,T){o.setSize(y,T),a!==null&&a.setSize(y,T),l!==null&&l.setSize(y,T);for(let b=0;b<_.length;b++){const R=_[b];R.setSize&&R.setSize(y,T)}},this.setEffects=function(y){_=y,E=_.length>0&&_[0].isRenderPass===!0;const T=o.width,b=o.height;_.length>0&&a===null&&(a=new kn(T,b,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),l=new kn(T,b,{type:Qn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<_.length;R++){const S=_[R];S.setSize&&S.setSize(T,b)}},this.begin=function(y,T){if(x||y.toneMapping===Yn&&_.length===0)return!1;if(m=T,T!==null){const b=T.width,R=T.height;(o.width!==b||o.height!==R)&&this.setSize(b,R)}return E===!1&&y.setRenderTarget(o),p=y.toneMapping,y.toneMapping=Yn,!0},this.hasRenderPass=function(){return E},this.end=function(y,T){y.toneMapping=p,x=!0;let b=o,R=a;for(let S=0;S<_.length;S++){const A=_[S];A.enabled!==!1&&(A.render(y,R,b,T),A.needsSwap!==!1&&(b=R,R=R===a?l:a))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},dt.getTransfer(f)===yt&&(h.defines.SRGB_TRANSFER="");const S=h_[g];S&&(h.defines[S]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(m),y.render(u,d),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const jd=new Rt,Kl=new _r(1,1),ef=new Pd,tf=new $m,nf=new Ud,Bh=[],zh=[],Hh=new Float32Array(16),Gh=new Float32Array(9),Vh=new Float32Array(4);function Gs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Bh[s];if(r===void 0&&(r=new Float32Array(s),Bh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xo(n,e){let t=zh[e];t===void 0&&(t=new Int32Array(e),zh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function d_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function f_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function p_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function m_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function g_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Vh.set(i),n.uniformMatrix2fv(this.addr,!1,Vh),Xt(t,i)}}function v_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Gh.set(i),n.uniformMatrix3fv(this.addr,!1,Gh),Xt(t,i)}}function x_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Hh.set(i),n.uniformMatrix4fv(this.addr,!1,Hh),Xt(t,i)}}function __(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function y_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function S_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function M_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function b_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function w_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function T_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function E_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function A_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Kl.compareFunction=t.isReversedDepthBuffer()?bc:Mc,r=Kl):r=jd,t.setTexture2D(e||r,s)}function R_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||tf,s)}function C_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||nf,s)}function P_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ef,s)}function L_(n){switch(n){case 5126:return d_;case 35664:return f_;case 35665:return p_;case 35666:return m_;case 35674:return g_;case 35675:return v_;case 35676:return x_;case 5124:case 35670:return __;case 35667:case 35671:return y_;case 35668:case 35672:return S_;case 35669:case 35673:return M_;case 5125:return b_;case 36294:return w_;case 36295:return T_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return P_}}function D_(n,e){n.uniform1fv(this.addr,e)}function I_(n,e){const t=Gs(e,this.size,2);n.uniform2fv(this.addr,t)}function U_(n,e){const t=Gs(e,this.size,3);n.uniform3fv(this.addr,t)}function F_(n,e){const t=Gs(e,this.size,4);n.uniform4fv(this.addr,t)}function N_(n,e){const t=Gs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function k_(n,e){const t=Gs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function O_(n,e){const t=Gs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function B_(n,e){n.uniform1iv(this.addr,e)}function z_(n,e){n.uniform2iv(this.addr,e)}function H_(n,e){n.uniform3iv(this.addr,e)}function G_(n,e){n.uniform4iv(this.addr,e)}function V_(n,e){n.uniform1uiv(this.addr,e)}function W_(n,e){n.uniform2uiv(this.addr,e)}function X_(n,e){n.uniform3uiv(this.addr,e)}function $_(n,e){n.uniform4uiv(this.addr,e)}function q_(n,e,t){const i=this.cache,s=e.length,r=Xo(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Kl:o=jd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Y_(n,e,t){const i=this.cache,s=e.length,r=Xo(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||tf,r[o])}function K_(n,e,t){const i=this.cache,s=e.length,r=Xo(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||nf,r[o])}function Z_(n,e,t){const i=this.cache,s=e.length,r=Xo(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ef,r[o])}function J_(n){switch(n){case 5126:return D_;case 35664:return I_;case 35665:return U_;case 35666:return F_;case 35674:return N_;case 35675:return k_;case 35676:return O_;case 5124:case 35670:return B_;case 35667:case 35671:return z_;case 35668:case 35672:return H_;case 35669:case 35673:return G_;case 5125:return V_;case 36294:return W_;case 36295:return X_;case 36296:return $_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return Z_}}class Q_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=L_(t.type)}}class j_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J_(t.type)}}class ey{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function Wh(n,e){n.seq.push(e),n.map[e.id]=e}function ty(n,e,t){const i=n.name,s=i.length;for(Ua.lastIndex=0;;){const r=Ua.exec(i),o=Ua.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Wh(t,c===void 0?new Q_(a,n,e):new j_(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new ey(a),Wh(t,u)),t=u}}}class So{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);ty(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Xh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ny=37297;let iy=0;function sy(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const $h=new et;function ry(n){dt._getMatrix($h,dt.workingColorSpace,n);const e=`mat3( ${$h.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case Io:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function qh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+sy(n.getShaderSource(e),a)}else return r}function oy(n,e){const t=ry(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ay={[gd]:"Linear",[vd]:"Reinhard",[xd]:"Cineon",[pc]:"ACESFilmic",[yd]:"AgX",[Sd]:"Neutral",[_d]:"Custom"};function ly(n,e){const t=ay[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const oo=new I;function cy(){dt.getLuminanceCoefficients(oo);const n=oo.x.toFixed(4),e=oo.y.toFixed(4),t=oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function uy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function tr(n){return n!==""}function Yh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(n){return n.replace(fy,my)}const py=new Map;function my(n,e){let t=it[e];if(t===void 0){const i=py.get(e);if(i!==void 0)t=it[i],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Zl(t)}const gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zh(n){return n.replace(gy,vy)}function vy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const xy={[sr]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function _y(n){return xy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yy={[es]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[Ho]:"ENVMAP_TYPE_CUBE_UV"};function Sy(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":yy[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const My={[Fs]:"ENVMAP_MODE_REFRACTION"};function by(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":My[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wy={[md]:"ENVMAP_BLENDING_MULTIPLY",[am]:"ENVMAP_BLENDING_MIX",[lm]:"ENVMAP_BLENDING_ADD"};function Ty(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":wy[n.combine]||"ENVMAP_BLENDING_NONE"}function Ey(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ay(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=_y(t),c=Sy(t),h=by(t),u=Ty(t),d=Ey(t),f=hy(t),g=uy(r),x=s.createProgram();let p,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(tr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(tr).join(`
`),m.length>0&&(m+=`
`)):(p=[Jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),m=[Jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?it.tonemapping_pars_fragment:"",t.toneMapping!==Yn?ly("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,oy("linearToOutputTexel",t.outputColorSpace),cy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),o=Zl(o),o=Yh(o,t),o=Kh(o,t),a=Zl(a),a=Yh(a,t),a=Kh(a,t),o=Zh(o),a=Zh(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=_+p+o,y=_+m+a,T=Xh(s,s.VERTEX_SHADER,E),b=Xh(s,s.FRAGMENT_SHADER,y);s.attachShader(x,T),s.attachShader(x,b),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(U){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(T)||"",C=s.getShaderInfoLog(b)||"",D=F.trim(),B=k.trim(),z=C.trim();let $=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,T,b);else{const X=qh(s,T,"vertex"),W=qh(s,b,"fragment");ft("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+D+`
`+X+`
`+W)}else D!==""?Ze("WebGLProgram: Program Info Log:",D):(B===""||z==="")&&(V=!1);V&&(U.diagnostics={runnable:$,programLog:D,vertexShader:{log:B,prefix:p},fragmentShader:{log:z,prefix:m}})}s.deleteShader(T),s.deleteShader(b),S=new So(s,x),A=dy(s,x)}let S;this.getUniforms=function(){return S===void 0&&R(this),S};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(x,ny)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=b,this}let Ry=0;class Cy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Py(e),t.set(e,i)),i}}class Py{constructor(e){this.id=Ry++,this.code=e,this.usedTimes=0}}function Ly(n){return n===ts||n===Po||n===Lo}function Dy(n,e,t,i,s,r){const o=new Ec,a=new Cy,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function x(S,A,P,U,F,k){const C=U.fog,D=F.geometry,B=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,z=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,$=e.get(S.envMap||B,z),V=$&&$.mapping===Ho?$.image.height:null,X=f[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&Ze("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const W=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ve=W!==void 0?W.length:0;let ge=0;D.morphAttributes.position!==void 0&&(ge=1),D.morphAttributes.normal!==void 0&&(ge=2),D.morphAttributes.color!==void 0&&(ge=3);let ne,j,se,G;if(X){const te=Wn[X];ne=te.vertexShader,j=te.fragmentShader}else{ne=S.vertexShader,j=S.fragmentShader;const te=a.getVertexShaderStage(S),Se=a.getFragmentShaderStage(S);a.update(S,te,Se),se=te.id,G=Se.id}const Y=n.getRenderTarget(),le=n.state.buffers.depth.getReversed(),_e=F.isInstancedMesh===!0,ue=F.isBatchedMesh===!0,Re=!!S.map,Ye=!!S.matcap,re=!!$,ce=!!S.aoMap,fe=!!S.lightMap,pe=!!S.bumpMap&&S.wireframe===!1,xe=!!S.normalMap,$e=!!S.displacementMap,Ve=!!S.emissiveMap,qe=!!S.metalnessMap,Ke=!!S.roughnessMap,N=S.anisotropy>0,lt=S.clearcoat>0,st=S.dispersion>0,L=S.retroreflectivity>0,M=S.iridescence>0,q=S.sheen>0,J=S.transmission>0,Q=N&&!!S.anisotropyMap,me=lt&&!!S.clearcoatMap,ye=lt&&!!S.clearcoatNormalMap,ie=lt&&!!S.clearcoatRoughnessMap,ae=M&&!!S.iridescenceMap,we=M&&!!S.iridescenceThicknessMap,ke=q&&!!S.sheenColorMap,Ae=q&&!!S.sheenRoughnessMap,Te=!!S.specularMap,Me=!!S.specularColorMap,Fe=!!S.specularIntensityMap,We=J&&!!S.transmissionMap,O=J&&!!S.thicknessMap,be=!!S.gradientMap,oe=!!S.alphaMap,Ee=S.alphaTest>0,Ce=!!S.alphaHash,de=!!S.extensions;let Xe=Yn;S.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Xe=n.toneMapping);const He={shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:ne,fragmentShader:j,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:G,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:ue,batchingColor:ue&&F._colorsTexture!==null,instancing:_e,instancingColor:_e&&F.instanceColor!==null,instancingMorph:_e&&F.morphTexture!==null,outputColorSpace:Y===null?n.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Re,matcap:Ye,envMap:re,envMapMode:re&&$.mapping,envMapCubeUVHeight:V,aoMap:ce,lightMap:fe,bumpMap:pe,normalMap:xe,displacementMap:$e,emissiveMap:Ve,normalMapObjectSpace:xe&&S.normalMapType===dm,normalMapTangentSpace:xe&&S.normalMapType===Vl,packedNormalMap:xe&&S.normalMapType===Vl&&Ly(S.normalMap.format),metalnessMap:qe,roughnessMap:Ke,anisotropy:N,anisotropyMap:Q,clearcoat:lt,clearcoatMap:me,clearcoatNormalMap:ye,clearcoatRoughnessMap:ie,dispersion:st,retroreflection:L,iridescence:M,iridescenceMap:ae,iridescenceThicknessMap:we,sheen:q,sheenColorMap:ke,sheenRoughnessMap:Ae,specularMap:Te,specularColorMap:Me,specularIntensityMap:Fe,transmission:J,transmissionMap:We,thicknessMap:O,gradientMap:be,opaque:S.transparent===!1&&S.blending===rr&&S.alphaToCoverage===!1,alphaMap:oe,alphaTest:Ee,alphaHash:Ce,combine:S.combine,mapUv:Re&&g(S.map.channel),aoMapUv:ce&&g(S.aoMap.channel),lightMapUv:fe&&g(S.lightMap.channel),bumpMapUv:pe&&g(S.bumpMap.channel),normalMapUv:xe&&g(S.normalMap.channel),displacementMapUv:$e&&g(S.displacementMap.channel),emissiveMapUv:Ve&&g(S.emissiveMap.channel),metalnessMapUv:qe&&g(S.metalnessMap.channel),roughnessMapUv:Ke&&g(S.roughnessMap.channel),anisotropyMapUv:Q&&g(S.anisotropyMap.channel),clearcoatMapUv:me&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ye&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:we&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(S.sheenRoughnessMap.channel),specularMapUv:Te&&g(S.specularMap.channel),specularColorMapUv:Me&&g(S.specularColorMap.channel),specularIntensityMapUv:Fe&&g(S.specularIntensityMap.channel),transmissionMapUv:We&&g(S.transmissionMap.channel),thicknessMapUv:O&&g(S.thicknessMap.channel),alphaMapUv:oe&&g(S.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(xe||N),vertexNormals:!!D.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!D.attributes.uv&&(Re||oe),fog:!!C,useFog:S.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||D.attributes.normal===void 0&&xe===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:le,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:ge,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Re&&S.map.isVideoTexture===!0&&dt.getTransfer(S.map.colorSpace)===yt,decodeVideoTextureEmissive:Ve&&S.emissiveMap.isVideoTexture===!0&&dt.getTransfer(S.emissiveMap.colorSpace)===yt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Vt,flipSided:S.side===fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:de&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&S.extensions.multiDraw===!0||ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return He.vertexUv1s=l.has(1),He.vertexUv2s=l.has(2),He.vertexUv3s=l.has(3),l.clear(),He}function p(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)A.push(P),A.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(m(A,S),_(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function m(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numSunLights),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numSunLightShadows),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function _(S,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function E(S){const A=f[S.type];let P;if(A){const U=Wn[A];P=Jg.clone(U.uniforms)}else P=S.uniforms;return P}function y(S,A){let P=h.get(A);return P!==void 0?++P.usedTimes:(P=new Ay(n,A,S,s),c.push(P),h.set(A,P)),P}function T(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),h.delete(S.cacheKey),S.destroy()}}function b(S){a.remove(S)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:E,acquireProgram:y,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:R}}function Iy(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Uy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Qh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,x,p,m){let _=n[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:m},n[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=g,_.materialVariant=o(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=p,_.group=m),e++,_}function l(d,f,g,x,p,m,_){_.reversedDepth===!0&&(p=-p);const E=a(d,f,g,x,p,m);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):t.push(E)}function c(d,f,g,x,p,m){const _=a(d,f,g,x,p,m);g.transmission>0?i.unshift(_):g.transparent===!0?s.unshift(_):t.unshift(_)}function h(d,f){t.length>1&&t.sort(d||Uy),i.length>1&&i.sort(f||Qh),s.length>1&&s.sort(f||Qh)}function u(){for(let d=e,f=n.length;d<f;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Fy(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new jh,n.set(i,[o])):s>=r.length?(o=new jh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ny(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Je};break;case"SpotLight":t={position:new I,direction:new I,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function ky(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Oy=0;function By(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function zy(n){const e=new Ny,t=ky(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const s=new I,r=new at,o=new at;function a(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,_=0,E=0,y=0,T=0,b=0,R=0,S=0,A=0,P=0;c.sort(By);for(let F=0,k=c.length;F<k;F++){const C=c[F],D=C.color,B=C.intensity,z=C.distance;let $=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ts?$=C.shadow.map.texture:$=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=D.r*B,u+=D.g*B,d+=D.b*B;else if(C.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(C.sh.coefficients[V],B);P++}else if(C.isSunLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const X=C.shadow,W=t.get(C);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[g]=W,i.sunShadowMap[g]=$;const ve=X.getViewportCount();for(let ge=0;ge<ve;ge++)i.sunShadowMatrix[x+ge]=X.getMatrix(ge),i.sunShadowCascade[x+ge]=X._cascadeData[ge];x+=ve,g++}i.sun[f]=V,f++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const X=C.shadow,W=t.get(C);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=C.shadow.matrix,T++}i.directional[p]=V,p++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(D).multiplyScalar(B),V.distance=z,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,i.spot[_]=V;const X=C.shadow;if(C.map&&(i.spotLightMap[S]=C.map,S++,X.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[_]=X.matrix,C.castShadow){const W=t.get(C);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=$,R++}_++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(D).multiplyScalar(B),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),i.rectArea[E]=V,E++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const X=C.shadow,W=t.get(C);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,W.shadowCameraNear=X.camera.near,W.shadowCameraFar=X.camera.far,i.pointShadow[m]=W,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=C.shadow.matrix,b++}i.point[m]=V,m++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(B),V.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[y]=V,y++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const U=i.hash;(U.sunLength!==f||U.directionalLength!==p||U.pointLength!==m||U.spotLength!==_||U.rectAreaLength!==E||U.hemiLength!==y||U.numSunShadows!==g||U.numDirectionalShadows!==T||U.numPointShadows!==b||U.numSpotShadows!==R||U.numSpotMaps!==S||U.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=p,i.spot.length=_,i.rectArea.length=E,i.point.length=m,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+S-A,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,U.sunLength=f,U.directionalLength=p,U.pointLength=m,U.spotLength=_,U.rectAreaLength=E,U.hemiLength=y,U.numSunShadows=g,U.numDirectionalShadows=T,U.numPointShadows=b,U.numSpotShadows=R,U.numSpotMaps=S,U.numLightProbes=P,i.version=Oy++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,p=0;const m=h.matrixWorldInverse;for(let _=0,E=c.length;_<E;_++){const y=c[_];if(y.isSunLight){const T=i.sun[u];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),u++}else if(y.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(y.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const T=i.rectArea[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const T=i.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:i}}function eu(n){const e=new zy(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function o(d){t.push(d)}function a(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Hy(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new eu(n),e.set(s,[a])):r>=o.length?(a=new eu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Wy=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Xy=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],tu=new at,Js=new I,Fa=new I;function $y(n,e,t){let i=new Rc;const s=new he,r=new he,o=new Et,a=new Xd,l=new $d,c={},h=t.maxTextureSize,u={[Zn]:fn,[fn]:Zn,[Vt]:Vt},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Gy,fragmentShader:Vy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new qt;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new nt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sr;let m=this.type;this.render=function(b,R,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===Gp&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=sr);const A=n.getRenderTarget(),P=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),F=n.state;F.setBlending(vi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=m!==this.type;k&&R.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(D=>D.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,D=b.length;C<D;C++){const B=b[C],z=B.shadow;if(z===void 0){Ze("WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const $=z.getFrameExtents();s.multiply($),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,z.mapSize.y=r.y));const V=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=V,z.map===null||k===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===js){if(B.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new kn(s.x,s.y,{format:ts,type:Qn,minFilter:en,magFilter:en,generateMipmaps:!1}),z.map.texture.name=B.name+".shadowMap",z.map.depthTexture=new _r(s.x,s.y,Un),z.map.depthTexture.name=B.name+".shadowMapDepth",z.map.depthTexture.format=_i,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=jt,z.map.depthTexture.magFilter=jt}else B.isPointLight?(z.map=new Qd(s.x),z.map.depthTexture=new pg(s.x,Jn)):(z.map=new kn(s.x,s.y),z.map.depthTexture=new _r(s.x,s.y,Jn)),z.map.depthTexture.name=B.name+".shadowMap",z.map.depthTexture.format=_i,this.type===sr?(z.map.depthTexture.compareFunction=V?bc:Mc,z.map.depthTexture.minFilter=en,z.map.depthTexture.magFilter=en):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=jt,z.map.depthTexture.magFilter=jt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const X=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();B.isPointLight!==!0&&z.updateMatrices(B,S);for(let W=0;W<X;W++){const ve=z.getCamera(W);if(B.isPointLight){const ge=z.camera,ne=z.matrix,j=B.distance||ge.far;j!==ge.far&&(ge.far=j,ge.updateProjectionMatrix()),Js.setFromMatrixPosition(B.matrixWorld),ge.position.copy(Js),Fa.copy(ge.position),Fa.add(Wy[W]),ge.up.copy(Xy[W]),ge.lookAt(Fa),ge.updateMatrixWorld(),ne.makeTranslation(-Js.x,-Js.y,-Js.z),tu.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),z._frustum.setFromProjectionMatrix(tu,ge.coordinateSystem,ge.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,W),n.clear();else{W===0&&(n.setRenderTarget(z.map),n.clear());const ge=z.getViewport(W);o.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),F.viewport(o)}i=z.getFrustum(W),y(R,S,ve,B,this.type)}z.isPointLightShadow!==!0&&this.type===js&&_(z,S),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(A,P,U)};function _(b,R){const S=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new kn(s.x,s.y,{format:ts,type:Qn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(R,null,S,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(R,null,S,f,x,null)}function E(b,R,S,A){let P=null;const U=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)P=U;else if(P=S.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=P.uuid,k=R.uuid;let C=c[F];C===void 0&&(C={},c[F]=C);let D=C[k];D===void 0&&(D=P.clone(),C[k]=D,R.addEventListener("dispose",T)),P=D}if(P.visible=R.visible,P.wireframe=R.wireframe,A===js?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:u[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=n.properties.get(P);F.light=S}return P}function y(b,R,S,A,P){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===js)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const k=e.update(b),C=b.material;if(Array.isArray(C)){const D=k.groups;for(let B=0,z=D.length;B<z;B++){const $=D[B],V=C[$.materialIndex];if(V&&V.visible){const X=E(b,V,A,P);b.onBeforeShadow(n,b,R,S,k,X,$),n.renderBufferDirect(S,null,k,X,b,$),b.onAfterShadow(n,b,R,S,k,X,$)}}}else if(C.visible){const D=E(b,C,A,P);b.onBeforeShadow(n,b,R,S,k,D,null),n.renderBufferDirect(S,null,k,D,b,null),b.onAfterShadow(n,b,R,S,k,D,null)}}const F=b.children;for(let k=0,C=F.length;k<C;k++)y(F[k],R,S,A,P)}function T(b){b.target.removeEventListener("dispose",T);for(const S in c){const A=c[S],P=b.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function qy(n,e){function t(){let O=!1;const be=new Et;let oe=null;const Ee=new Et(0,0,0,0);return{setMask:function(Ce){oe!==Ce&&!O&&(n.colorMask(Ce,Ce,Ce,Ce),oe=Ce)},setLocked:function(Ce){O=Ce},setClear:function(Ce,de,Xe,He,te){te===!0&&(Ce*=He,de*=He,Xe*=He),be.set(Ce,de,Xe,He),Ee.equals(be)===!1&&(n.clearColor(Ce,de,Xe,He),Ee.copy(be))},reset:function(){O=!1,oe=null,Ee.set(-1,0,0,0)}}}function i(){let O=!1,be=!1,oe=null,Ee=null,Ce=null;return{setReversed:function(de){if(be!==de){const Xe=e.get("EXT_clip_control");de?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),be=de;const He=Ce;Ce=null,this.setClear(He)}},getReversed:function(){return be},setTest:function(de){de?Y(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(de){oe!==de&&!O&&(n.depthMask(de),oe=de)},setFunc:function(de){if(be&&(de=wm[de]),Ee!==de){switch(de){case rl:n.depthFunc(n.NEVER);break;case ol:n.depthFunc(n.ALWAYS);break;case al:n.depthFunc(n.LESS);break;case fr:n.depthFunc(n.LEQUAL);break;case ll:n.depthFunc(n.EQUAL);break;case cl:n.depthFunc(n.GEQUAL);break;case hl:n.depthFunc(n.GREATER);break;case ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=de}},setLocked:function(de){O=de},setClear:function(de){Ce!==de&&(Ce=de,be&&(de=1-de),n.clearDepth(de))},reset:function(){O=!1,oe=null,Ee=null,Ce=null,be=!1}}}function s(){let O=!1,be=null,oe=null,Ee=null,Ce=null,de=null,Xe=null,He=null,te=null;return{setTest:function(Se){O||(Se?Y(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(Se){be!==Se&&!O&&(n.stencilMask(Se),be=Se)},setFunc:function(Se,Qe,ut){(oe!==Se||Ee!==Qe||Ce!==ut)&&(n.stencilFunc(Se,Qe,ut),oe=Se,Ee=Qe,Ce=ut)},setOp:function(Se,Qe,ut){(de!==Se||Xe!==Qe||He!==ut)&&(n.stencilOp(Se,Qe,ut),de=Se,Xe=Qe,He=ut)},setLocked:function(Se){O=Se},setClear:function(Se){te!==Se&&(n.clearStencil(Se),te=Se)},reset:function(){O=!1,be=null,oe=null,Ee=null,Ce=null,de=null,Xe=null,He=null,te=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d={},f=new WeakMap,g=[],x=null,p=!1,m=null,_=null,E=null,y=null,T=null,b=null,R=null,S=new Je(0,0,0),A=0,P=!1,U=null,F=null,k=null,C=null,D=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,$=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=$>=2);let X=null,W={};const ve=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),ne=new Et().fromArray(ve),j=new Et().fromArray(ge);function se(O,be,oe,Ee){const Ce=new Uint8Array(4),de=n.createTexture();n.bindTexture(O,de),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<oe;Xe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(be+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return de}const G={};G[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),G[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),G[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(n.DEPTH_TEST),o.setFunc(fr),pe(!1),xe(Zc),Y(n.CULL_FACE),ce(vi);function Y(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function le(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function _e(O,be){return d[O]!==be?(n.bindFramebuffer(O,be),d[O]=be,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=be),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=be),!0):!1}function ue(O,be){let oe=g,Ee=!1;if(O){oe=f.get(be),oe===void 0&&(oe=[],f.set(be,oe));const Ce=O.textures;if(oe.length!==Ce.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Xe=Ce.length;de<Xe;de++)oe[de]=n.COLOR_ATTACHMENT0+de;oe.length=Ce.length,Ee=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,Ee=!0);Ee&&n.drawBuffers(oe)}function Re(O){return x!==O?(n.useProgram(O),x=O,!0):!1}const Ye={[Cs]:n.FUNC_ADD,[Wp]:n.FUNC_SUBTRACT,[Xp]:n.FUNC_REVERSE_SUBTRACT};Ye[$p]=n.MIN,Ye[qp]=n.MAX;const re={[Yp]:n.ZERO,[Kp]:n.ONE,[Zp]:n.SRC_COLOR,[fd]:n.SRC_ALPHA,[nm]:n.SRC_ALPHA_SATURATE,[em]:n.DST_COLOR,[Qp]:n.DST_ALPHA,[Jp]:n.ONE_MINUS_SRC_COLOR,[pd]:n.ONE_MINUS_SRC_ALPHA,[tm]:n.ONE_MINUS_DST_COLOR,[jp]:n.ONE_MINUS_DST_ALPHA,[im]:n.CONSTANT_COLOR,[sm]:n.ONE_MINUS_CONSTANT_COLOR,[rm]:n.CONSTANT_ALPHA,[om]:n.ONE_MINUS_CONSTANT_ALPHA};function ce(O,be,oe,Ee,Ce,de,Xe,He,te,Se){if(O===vi){p===!0&&(le(n.BLEND),p=!1);return}if(p===!1&&(Y(n.BLEND),p=!0),O!==Vp){if(O!==m||Se!==P){if((_!==Cs||T!==Cs)&&(n.blendEquation(n.FUNC_ADD),_=Cs,T=Cs),Se)switch(O){case rr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jc:n.blendFunc(n.ONE,n.ONE);break;case Qc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ft("WebGLState: Invalid blending: ",O);break}else switch(O){case rr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Qc:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jc:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",O);break}E=null,y=null,b=null,R=null,S.set(0,0,0),A=0,m=O,P=Se}return}Ce=Ce||be,de=de||oe,Xe=Xe||Ee,(be!==_||Ce!==T)&&(n.blendEquationSeparate(Ye[be],Ye[Ce]),_=be,T=Ce),(oe!==E||Ee!==y||de!==b||Xe!==R)&&(n.blendFuncSeparate(re[oe],re[Ee],re[de],re[Xe]),E=oe,y=Ee,b=de,R=Xe),(He.equals(S)===!1||te!==A)&&(n.blendColor(He.r,He.g,He.b,te),S.copy(He),A=te),m=O,P=!1}function fe(O,be){O.side===Vt?le(n.CULL_FACE):Y(n.CULL_FACE);let oe=O.side===fn;be&&(oe=!oe),pe(oe),O.blending===rr&&O.transparent===!1?ce(vi):ce(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Ee=O.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ve(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Y(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function pe(O){U!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),U=O)}function xe(O){O!==Bp?(Y(n.CULL_FACE),O!==F&&(O===Zc?n.cullFace(n.BACK):O===zp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),F=O}function $e(O){O!==k&&(z&&n.lineWidth(O),k=O)}function Ve(O,be,oe){O?(Y(n.POLYGON_OFFSET_FILL),(C!==be||D!==oe)&&(C=be,D=oe,o.getReversed()&&(be=-be),n.polygonOffset(be,oe))):le(n.POLYGON_OFFSET_FILL)}function qe(O){O?Y(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function Ke(O){O===void 0&&(O=n.TEXTURE0+B-1),X!==O&&(n.activeTexture(O),X=O)}function N(O,be,oe){oe===void 0&&(X===null?oe=n.TEXTURE0+B-1:oe=X);let Ee=W[oe];Ee===void 0&&(Ee={type:void 0,texture:void 0},W[oe]=Ee),(Ee.type!==O||Ee.texture!==be)&&(X!==oe&&(n.activeTexture(oe),X=oe),n.bindTexture(O,be||G[O]),Ee.type=O,Ee.texture=be)}function lt(){const O=W[X];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function st(){try{n.compressedTexImage2D(...arguments)}catch(O){ft("WebGLState:",O)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(O){ft("WebGLState:",O)}}function M(){try{n.texSubImage2D(...arguments)}catch(O){ft("WebGLState:",O)}}function q(){try{n.texSubImage3D(...arguments)}catch(O){ft("WebGLState:",O)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(O){ft("WebGLState:",O)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(O){ft("WebGLState:",O)}}function me(){try{n.texStorage2D(...arguments)}catch(O){ft("WebGLState:",O)}}function ye(){try{n.texStorage3D(...arguments)}catch(O){ft("WebGLState:",O)}}function ie(){try{n.texImage2D(...arguments)}catch(O){ft("WebGLState:",O)}}function ae(){try{n.texImage3D(...arguments)}catch(O){ft("WebGLState:",O)}}function we(O){return u[O]!==void 0?u[O]:n.getParameter(O)}function ke(O,be){u[O]!==be&&(n.pixelStorei(O,be),u[O]=be)}function Ae(O){ne.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),ne.copy(O))}function Te(O){j.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),j.copy(O))}function Me(O,be){let oe=c.get(be);oe===void 0&&(oe=new WeakMap,c.set(be,oe));let Ee=oe.get(O);Ee===void 0&&(Ee=n.getUniformBlockIndex(be,O.name),oe.set(O,Ee))}function Fe(O,be){const Ee=c.get(be).get(O);l.get(be)!==Ee&&(n.uniformBlockBinding(be,Ee,O.__bindingPointIndex),l.set(be,Ee))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},X=null,W={},d={},f=new WeakMap,g=[],x=null,p=!1,m=null,_=null,E=null,y=null,T=null,b=null,R=null,S=new Je(0,0,0),A=0,P=!1,U=null,F=null,k=null,C=null,D=null,ne.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Y,disable:le,bindFramebuffer:_e,drawBuffers:ue,useProgram:Re,setBlending:ce,setMaterial:fe,setFlipSided:pe,setCullFace:xe,setLineWidth:$e,setPolygonOffset:Ve,setScissorTest:qe,activeTexture:Ke,bindTexture:N,unbindTexture:lt,compressedTexImage2D:st,compressedTexImage3D:L,texImage2D:ie,texImage3D:ae,pixelStorei:ke,getParameter:we,updateUBOMapping:Me,uniformBlockBinding:Fe,texStorage2D:me,texStorage3D:ye,texSubImage2D:M,texSubImage3D:q,compressedTexSubImage2D:J,compressedTexSubImage3D:Q,scissor:Ae,viewport:Te,reset:We}}function Yy(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,u=new Set;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,M){return g?new OffscreenCanvas(L,M):Uo("canvas")}function p(L,M,q){let J=1;const Q=st(L);if((Q.width>q||Q.height>q)&&(J=q/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const me=Math.floor(J*Q.width),ye=Math.floor(J*Q.height);d===void 0&&(d=x(me,ye));const ie=M?x(me,ye):d;return ie.width=me,ie.height=ye,ie.getContext("2d").drawImage(L,0,0,me,ye),Ze("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+me+"x"+ye+")."),ie}else return"data"in L&&Ze("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),L;return L}function m(L){return L.generateMipmaps}function _(L){n.generateMipmap(L)}function E(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(L,M,q,J,Q,me=!1){if(L!==null){if(n[L]!==void 0)return n[L];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ye;J&&(ye=e.get("EXT_texture_norm16"),ye||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=M;if(M===n.RED&&(q===n.FLOAT&&(ie=n.R32F),q===n.HALF_FLOAT&&(ie=n.R16F),q===n.UNSIGNED_BYTE&&(ie=n.R8),q===n.UNSIGNED_SHORT&&ye&&(ie=ye.R16_EXT),q===n.SHORT&&ye&&(ie=ye.R16_SNORM_EXT)),M===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(ie=n.R8UI),q===n.UNSIGNED_SHORT&&(ie=n.R16UI),q===n.UNSIGNED_INT&&(ie=n.R32UI),q===n.BYTE&&(ie=n.R8I),q===n.SHORT&&(ie=n.R16I),q===n.INT&&(ie=n.R32I)),M===n.RG&&(q===n.FLOAT&&(ie=n.RG32F),q===n.HALF_FLOAT&&(ie=n.RG16F),q===n.UNSIGNED_BYTE&&(ie=n.RG8),q===n.UNSIGNED_SHORT&&ye&&(ie=ye.RG16_EXT),q===n.SHORT&&ye&&(ie=ye.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(ie=n.RG8UI),q===n.UNSIGNED_SHORT&&(ie=n.RG16UI),q===n.UNSIGNED_INT&&(ie=n.RG32UI),q===n.BYTE&&(ie=n.RG8I),q===n.SHORT&&(ie=n.RG16I),q===n.INT&&(ie=n.RG32I)),M===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),q===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),q===n.UNSIGNED_INT&&(ie=n.RGB32UI),q===n.BYTE&&(ie=n.RGB8I),q===n.SHORT&&(ie=n.RGB16I),q===n.INT&&(ie=n.RGB32I)),M===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),q===n.UNSIGNED_INT&&(ie=n.RGBA32UI),q===n.BYTE&&(ie=n.RGBA8I),q===n.SHORT&&(ie=n.RGBA16I),q===n.INT&&(ie=n.RGBA32I)),M===n.RGB&&(q===n.UNSIGNED_SHORT&&ye&&(ie=ye.RGB16_EXT),q===n.SHORT&&ye&&(ie=ye.RGB16_SNORM_EXT),q===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(ie=n.R11F_G11F_B10F)),M===n.RGBA){const ae=me?Io:dt.getTransfer(Q);q===n.FLOAT&&(ie=n.RGBA32F),q===n.HALF_FLOAT&&(ie=n.RGBA16F),q===n.UNSIGNED_BYTE&&(ie=ae===yt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT&&ye&&(ie=ye.RGBA16_EXT),q===n.SHORT&&ye&&(ie=ye.RGBA16_SNORM_EXT),q===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function T(L,M){let q;return L?M===null||M===Jn||M===mr?q=n.DEPTH24_STENCIL8:M===Un?q=n.DEPTH32F_STENCIL8:M===pr&&(q=n.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Jn||M===mr?q=n.DEPTH_COMPONENT24:M===Un?q=n.DEPTH_COMPONENT32F:M===pr&&(q=n.DEPTH_COMPONENT16),q}function b(L,M){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==jt&&L.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function R(L){const M=L.target;M.removeEventListener("dispose",R),A(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&u.delete(M)}function S(L){const M=L.target;M.removeEventListener("dispose",S),U(M)}function A(L){const M=i.get(L);if(M.__webglInit===void 0)return;const q=L.source,J=f.get(q);if(J){const Q=J[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(L),Object.keys(J).length===0&&f.delete(q)}i.remove(L)}function P(L){const M=i.get(L);n.deleteTexture(M.__webglTexture);const q=L.source,J=f.get(q);delete J[M.__cacheKey],o.memory.textures--}function U(L){const M=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let Q=0;Q<M.__webglFramebuffer[J].length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[J][Q]);else n.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)n.deleteFramebuffer(M.__webglFramebuffer[J]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const q=L.textures;for(let J=0,Q=q.length;J<Q;J++){const me=i.get(q[J]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(q[J])}i.remove(L)}let F=0;function k(){F=0}function C(){return F}function D(L){F=L}function B(){const L=F;return L>=s.maxTextures&&Ze("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,L}function z(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function $(L,M){const q=i.get(L);if(L.isVideoTexture&&N(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const J=L.image;if(J===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{le(q,L,M);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+M)}function V(L,M){const q=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){le(q,L,M);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+M)}function X(L,M){const q=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){le(q,L,M);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+M)}function W(L,M){const q=i.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&q.__version!==L.version){_e(q,L,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+M)}const ve={[Kn]:n.REPEAT,[pi]:n.CLAMP_TO_EDGE,[dl]:n.MIRRORED_REPEAT},ge={[jt]:n.NEAREST,[cm]:n.NEAREST_MIPMAP_NEAREST,[Fr]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[sa]:n.LINEAR_MIPMAP_NEAREST,[ki]:n.LINEAR_MIPMAP_LINEAR},ne={[pm]:n.NEVER,[_m]:n.ALWAYS,[mm]:n.LESS,[Mc]:n.LEQUAL,[gm]:n.EQUAL,[bc]:n.GEQUAL,[vm]:n.GREATER,[xm]:n.NOTEQUAL};function j(L,M){if(M.type===Un&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===en||M.magFilter===sa||M.magFilter===Fr||M.magFilter===ki||M.minFilter===en||M.minFilter===sa||M.minFilter===Fr||M.minFilter===ki)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,ve[M.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,ve[M.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,ve[M.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,ge[M.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,ge[M.minFilter]),M.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,ne[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===jt||M.minFilter!==Fr&&M.minFilter!==ki||M.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function se(L,M){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",R));const J=M.source;let Q=f.get(J);Q===void 0&&(Q={},f.set(J,Q));const me=z(M);if(me!==L.__cacheKey){Q[me]===void 0&&(Q[me]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),Q[me].usedTimes++;const ye=Q[L.__cacheKey];ye!==void 0&&(Q[L.__cacheKey].usedTimes--,ye.usedTimes===0&&P(M)),L.__cacheKey=me,L.__webglTexture=Q[me].texture}return q}function G(L,M,q){return Math.floor(Math.floor(L/q)/M)}function Y(L,M,q,J){const me=L.updateRanges;if(me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,q,J,M.data);else{me.sort((ke,Ae)=>ke.start-Ae.start);let ye=0;for(let ke=1;ke<me.length;ke++){const Ae=me[ye],Te=me[ke],Me=Ae.start+Ae.count,Fe=G(Te.start,M.width,4),We=G(Ae.start,M.width,4);Te.start<=Me+1&&Fe===We&&G(Te.start+Te.count-1,M.width,4)===Fe?Ae.count=Math.max(Ae.count,Te.start+Te.count-Ae.start):(++ye,me[ye]=Te)}me.length=ye+1;const ie=t.getParameter(n.UNPACK_ROW_LENGTH),ae=t.getParameter(n.UNPACK_SKIP_PIXELS),we=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let ke=0,Ae=me.length;ke<Ae;ke++){const Te=me[ke],Me=Math.floor(Te.start/4),Fe=Math.ceil(Te.count/4),We=Me%M.width,O=Math.floor(Me/M.width),be=Fe,oe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,We),t.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,We,O,be,oe,q,J,M.data)}L.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ie),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function le(L,M,q){let J=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=n.TEXTURE_3D);const Q=se(L,M),me=M.source;t.bindTexture(J,L.__webglTexture,n.TEXTURE0+q);const ye=i.get(me);if(me.version!==ye.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+q),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const oe=dt.getPrimaries(dt.workingColorSpace),Ee=M.colorSpace===Ni?null:dt.getPrimaries(M.colorSpace),Ce=M.colorSpace===Ni||oe===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let ae=p(M.image,!1,s.maxTextureSize);ae=lt(M,ae);const we=r.convert(M.format,M.colorSpace),ke=r.convert(M.type);let Ae=y(M.internalFormat,we,ke,M.normalized,M.colorSpace,M.isVideoTexture);j(J,M);let Te;const Me=M.mipmaps,Fe=M.isVideoTexture!==!0,We=ye.__version===void 0||Q===!0,O=me.dataReady,be=b(M,ae);if(M.isDepthTexture)Ae=T(M.format===Qi,M.type),We&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,Ae,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Ae,ae.width,ae.height,0,we,ke,null));else if(M.isDataTexture)if(Me.length>0){Fe&&We&&t.texStorage2D(n.TEXTURE_2D,be,Ae,Me[0].width,Me[0].height);for(let oe=0,Ee=Me.length;oe<Ee;oe++)Te=Me[oe],Fe?O&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Te.width,Te.height,we,ke,Te.data):t.texImage2D(n.TEXTURE_2D,oe,Ae,Te.width,Te.height,0,we,ke,Te.data);M.generateMipmaps=!1}else Fe?(We&&t.texStorage2D(n.TEXTURE_2D,be,Ae,ae.width,ae.height),O&&Y(M,ae,we,ke)):t.texImage2D(n.TEXTURE_2D,0,Ae,ae.width,ae.height,0,we,ke,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Fe&&We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Ae,Me[0].width,Me[0].height,ae.depth);for(let oe=0,Ee=Me.length;oe<Ee;oe++)if(Te=Me[oe],M.format!==Fn)if(we!==null)if(Fe){if(O)if(M.layerUpdates.size>0){const Ce=Uh(Te.width,Te.height,M.format,M.type);for(const de of M.layerUpdates){const Xe=Te.data.subarray(de*Ce/Te.data.BYTES_PER_ELEMENT,(de+1)*Ce/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,de,Te.width,Te.height,1,we,Xe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Te.width,Te.height,ae.depth,we,Te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Ae,Te.width,Te.height,ae.depth,0,Te.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Te.width,Te.height,ae.depth,we,ke,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Ae,Te.width,Te.height,ae.depth,0,we,ke,Te.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Fe&&We&&t.texStorage2D(n.TEXTURE_2D,be,Ae,Me[0].width,Me[0].height);for(let oe=0,Ee=Me.length;oe<Ee;oe++)Te=Me[oe],M.format!==Fn?we!==null?Fe?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,Te.width,Te.height,we,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Ae,Te.width,Te.height,0,Te.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?O&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Te.width,Te.height,we,ke,Te.data):t.texImage2D(n.TEXTURE_2D,oe,Ae,Te.width,Te.height,0,we,ke,Te.data)}else if(M.isDataArrayTexture)if(Fe){if(We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Ae,ae.width,ae.height,ae.depth),O)if(M.layerUpdates.size>0){const oe=Uh(ae.width,ae.height,M.format,M.type);for(const Ee of M.layerUpdates){const Ce=ae.data.subarray(Ee*oe/ae.data.BYTES_PER_ELEMENT,(Ee+1)*oe/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ee,ae.width,ae.height,1,we,ke,Ce)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,we,ke,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,ae.width,ae.height,ae.depth,0,we,ke,ae.data);else if(M.isData3DTexture)Fe?(We&&t.texStorage3D(n.TEXTURE_3D,be,Ae,ae.width,ae.height,ae.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,we,ke,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,ae.width,ae.height,ae.depth,0,we,ke,ae.data);else if(M.isFramebufferTexture){if(We)if(Fe)t.texStorage2D(n.TEXTURE_2D,be,Ae,ae.width,ae.height);else{let oe=ae.width,Ee=ae.height;for(let Ce=0;Ce<be;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,Ae,oe,Ee,0,we,ke,null),oe>>=1,Ee>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const oe=n.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),ae.parentNode!==oe){oe.appendChild(ae),u.add(M),oe.onpaint=Ee=>{const Ce=Ee.changedElements;for(const de of u)Ce.includes(de.image)&&(de.needsUpdate=!0)},oe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ae);else{const Ce=n.RGBA,de=n.RGBA,Xe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ce,de,Xe,ae)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Me.length>0){if(Fe&&We){const oe=st(Me[0]);t.texStorage2D(n.TEXTURE_2D,be,Ae,oe.width,oe.height)}for(let oe=0,Ee=Me.length;oe<Ee;oe++)Te=Me[oe],Fe?O&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,we,ke,Te):t.texImage2D(n.TEXTURE_2D,oe,Ae,we,ke,Te);M.generateMipmaps=!1}else if(Fe){if(We){const oe=st(ae);t.texStorage2D(n.TEXTURE_2D,be,Ae,oe.width,oe.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,ke,ae)}else t.texImage2D(n.TEXTURE_2D,0,Ae,we,ke,ae);m(M)&&_(J),ye.__version=me.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function _e(L,M,q){if(M.image.length!==6)return;const J=se(L,M),Q=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+q);const me=i.get(Q);if(Q.version!==me.__version||J===!0){t.activeTexture(n.TEXTURE0+q);const ye=dt.getPrimaries(dt.workingColorSpace),ie=M.colorSpace===Ni?null:dt.getPrimaries(M.colorSpace),ae=M.colorSpace===Ni||ye===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const we=M.isCompressedTexture||M.image[0].isCompressedTexture,ke=M.image[0]&&M.image[0].isDataTexture,Ae=[];for(let de=0;de<6;de++)!we&&!ke?Ae[de]=p(M.image[de],!0,s.maxCubemapSize):Ae[de]=ke?M.image[de].image:M.image[de],Ae[de]=lt(M,Ae[de]);const Te=Ae[0],Me=r.convert(M.format,M.colorSpace),Fe=r.convert(M.type),We=y(M.internalFormat,Me,Fe,M.normalized,M.colorSpace),O=M.isVideoTexture!==!0,be=me.__version===void 0||J===!0,oe=Q.dataReady;let Ee=b(M,Te);j(n.TEXTURE_CUBE_MAP,M);let Ce;if(we){O&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,We,Te.width,Te.height);for(let de=0;de<6;de++){Ce=Ae[de].mipmaps;for(let Xe=0;Xe<Ce.length;Xe++){const He=Ce[Xe];M.format!==Fn?Me!==null?O?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe,0,0,He.width,He.height,Me,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe,We,He.width,He.height,0,He.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe,0,0,He.width,He.height,Me,Fe,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe,We,He.width,He.height,0,Me,Fe,He.data)}}}else{if(Ce=M.mipmaps,O&&be){Ce.length>0&&Ee++;const de=st(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,We,de.width,de.height)}for(let de=0;de<6;de++)if(ke){O?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ae[de].width,Ae[de].height,Me,Fe,Ae[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,We,Ae[de].width,Ae[de].height,0,Me,Fe,Ae[de].data);for(let Xe=0;Xe<Ce.length;Xe++){const te=Ce[Xe].image[de].image;O?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe+1,0,0,te.width,te.height,Me,Fe,te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe+1,We,te.width,te.height,0,Me,Fe,te.data)}}else{O?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Me,Fe,Ae[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,We,Me,Fe,Ae[de]);for(let Xe=0;Xe<Ce.length;Xe++){const He=Ce[Xe];O?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe+1,0,0,Me,Fe,He.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe+1,We,Me,Fe,He.image[de])}}}m(M)&&_(n.TEXTURE_CUBE_MAP),me.__version=Q.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ue(L,M,q,J,Q,me){const ye=r.convert(q.format,q.colorSpace),ie=r.convert(q.type),ae=y(q.internalFormat,ye,ie,q.normalized,q.colorSpace),we=i.get(M),ke=i.get(q);if(ke.__renderTarget=M,!we.__hasExternalTextures){const Ae=Math.max(1,M.width>>me),Te=Math.max(1,M.height>>me);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,me,ae,Ae,Te,M.depth,0,ye,ie,null):t.texImage2D(Q,me,ae,Ae,Te,0,ye,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Ke(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,Q,ke.__webglTexture,0,qe(M)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,Q,ke.__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(L,M,q){if(n.bindRenderbuffer(n.RENDERBUFFER,L),M.depthBuffer){const J=M.depthTexture,Q=J&&J.isDepthTexture?J.type:null,me=T(M.stencilBuffer,Q),ye=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ke(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe(M),me,M.width,M.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe(M),me,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,me,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,L)}else{const J=M.textures;for(let Q=0;Q<J.length;Q++){const me=J[Q],ye=r.convert(me.format,me.colorSpace),ie=r.convert(me.type),ae=y(me.internalFormat,ye,ie,me.normalized,me.colorSpace);Ke(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe(M),ae,M.width,M.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe(M),ae,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ae,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(L,M,q){const J=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(M.depthTexture);if(Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,M.depthTexture.addEventListener("dispose",R)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),j(n.TEXTURE_CUBE_MAP,M.depthTexture);const we=r.convert(M.depthTexture.format),ke=r.convert(M.depthTexture.type);let Ae;M.depthTexture.format===_i?Ae=n.DEPTH_COMPONENT24:M.depthTexture.format===Qi&&(Ae=n.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ae,M.width,M.height,0,we,ke,null)}}else $(M.depthTexture,0);const me=Q.__webglTexture,ye=qe(M),ie=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+q:n.TEXTURE_2D,ae=M.depthTexture.format===Qi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===_i)Ke(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,ie,me,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,ae,ie,me,0);else if(M.depthTexture.format===Qi)Ke(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,ie,me,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,ae,ie,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(L){const M=i.get(L),q=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const J=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=J}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(q)for(let J=0;J<6;J++)Ye(M.__webglFramebuffer[J],L,J);else{const J=L.texture.mipmaps;J&&J.length>0?Ye(M.__webglFramebuffer[0],L,0):Ye(M.__webglFramebuffer,L,0)}else if(q){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=n.createRenderbuffer(),Re(M.__webglDepthbuffer[J],L,!1);else{const Q=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=M.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,me)}}else{const J=L.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Re(M.__webglDepthbuffer,L,!1);else{const Q=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(L,M,q){const J=i.get(L);M!==void 0&&ue(J.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&re(L)}function fe(L){const M=L.texture,q=i.get(L),J=i.get(M);L.addEventListener("dispose",S);const Q=L.textures,me=L.isWebGLCubeRenderTarget===!0,ye=Q.length>1;if(ye||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=M.version,o.memory.textures++),me){q.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[ie]=[];for(let ae=0;ae<M.mipmaps.length;ae++)q.__webglFramebuffer[ie][ae]=n.createFramebuffer()}else q.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let ie=0;ie<M.mipmaps.length;ie++)q.__webglFramebuffer[ie]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(ye)for(let ie=0,ae=Q.length;ie<ae;ie++){const we=i.get(Q[ie]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&Ke(L)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ie=0;ie<Q.length;ie++){const ae=Q[ie];q.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[ie]);const we=r.convert(ae.format,ae.colorSpace),ke=r.convert(ae.type),Ae=y(ae.internalFormat,we,ke,ae.normalized,ae.colorSpace,L.isXRRenderTarget===!0),Te=qe(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,Ae,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,q.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),Re(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(me){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),j(n.TEXTURE_CUBE_MAP,M);for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0)for(let ae=0;ae<M.mipmaps.length;ae++)ue(q.__webglFramebuffer[ie][ae],L,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae);else ue(q.__webglFramebuffer[ie],L,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(M)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ie=0,ae=Q.length;ie<ae;ie++){const we=Q[ie],ke=i.get(we);let Ae=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ke.__webglTexture),j(Ae,we),ue(q.__webglFramebuffer,L,we,n.COLOR_ATTACHMENT0+ie,Ae,0),m(we)&&_(Ae)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ie=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,J.__webglTexture),j(ie,M),M.mipmaps&&M.mipmaps.length>0)for(let ae=0;ae<M.mipmaps.length;ae++)ue(q.__webglFramebuffer[ae],L,M,n.COLOR_ATTACHMENT0,ie,ae);else ue(q.__webglFramebuffer,L,M,n.COLOR_ATTACHMENT0,ie,0);m(M)&&_(ie),t.unbindTexture()}L.depthBuffer&&re(L)}function pe(L){const M=L.textures;for(let q=0,J=M.length;q<J;q++){const Q=M[q];if(m(Q)){const me=E(L),ye=i.get(Q).__webglTexture;t.bindTexture(me,ye),_(me),t.unbindTexture()}}}const xe=[],$e=[];function Ve(L){if(L.samples>0){if(Ke(L)===!1){const M=L.textures,q=L.width,J=L.height;let Q=n.COLOR_BUFFER_BIT;const me=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(L),ie=M.length>1;if(ie)for(let we=0;we<M.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const ae=L.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let we=0;we<M.length;we++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const ke=i.get(M[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,q,J,0,0,q,J,Q,n.NEAREST),l===!0&&(xe.length=0,$e.length=0,xe.push(n.COLOR_ATTACHMENT0+we),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(xe.push(me),$e.push(me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$e)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let we=0;we<M.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const ke=i.get(M[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){const M=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function qe(L){return Math.min(s.maxSamples,L.samples)}function Ke(L){const M=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function N(L){const M=o.render.frame;h.get(L)!==M&&(h.set(L,M),L.update())}function lt(L,M){const q=L.colorSpace,J=L.format,Q=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Do&&q!==Ni&&(dt.getTransfer(q)===yt?(J!==Fn||Q!==yn)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",q)),M}function st(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.getTextureUnits=C,this.setTextureUnits=D,this.setTexture2D=$,this.setTexture2DArray=V,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=ce,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ky(n,e){function t(i,s=Ni){let r;const o=dt.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===gc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Td)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ed)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===bd)return n.BYTE;if(i===wd)return n.SHORT;if(i===pr)return n.UNSIGNED_SHORT;if(i===mc)return n.INT;if(i===Jn)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===Qn)return n.HALF_FLOAT;if(i===Ad)return n.ALPHA;if(i===Rd)return n.RGB;if(i===Fn)return n.RGBA;if(i===_i)return n.DEPTH_COMPONENT;if(i===Qi)return n.DEPTH_STENCIL;if(i===xc)return n.RED;if(i===_c)return n.RED_INTEGER;if(i===ts)return n.RG;if(i===yc)return n.RG_INTEGER;if(i===Sc)return n.RGBA_INTEGER;if(i===vo||i===xo||i===_o||i===yo)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fl||i===pl||i===ml||i===gl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vl||i===xl||i===_l||i===yl||i===Sl||i===Po||i===Ml)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===vl||i===xl)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===_l)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===yl)return r.COMPRESSED_R11_EAC;if(i===Sl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Po)return r.COMPRESSED_RG11_EAC;if(i===Ml)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bl||i===wl||i===Tl||i===El||i===Al||i===Rl||i===Cl||i===Pl||i===Ll||i===Dl||i===Il||i===Ul||i===Fl||i===Nl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===bl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===El)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Al)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ll)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Il)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ul)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kl||i===Ol||i===Bl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===kl)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zl||i===Hl||i===Lo||i===Gl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===zl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Zy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Qy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Fd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ti({vertexShader:Zy,fragmentShader:Jy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new ei(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jy extends is{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",p=new Qy,m={},_=t.getContextAttributes();let E=null,y=null;const T=[],b=[],R=new he;let S=null,A=null;const P=new bn;P.viewport=new Et;const U=new bn;U.viewport=new Et;const F=[P,U],k=new a0;let C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Y=T[G];return Y===void 0&&(Y=new ua,T[G]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(G){let Y=T[G];return Y===void 0&&(Y=new ua,T[G]=Y),Y.getGripSpace()},this.getHand=function(G){let Y=T[G];return Y===void 0&&(Y=new ua,T[G]=Y),Y.getHandSpace()};function B(G){const Y=b.indexOf(G.inputSource);if(Y===-1)return;const le=T[Y];le!==void 0&&(le.update(G.inputSource,G.frame,c||o),le.dispatchEvent({type:G.type,data:G.inputSource}))}function z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",$);for(let G=0;G<T.length;G++){const Y=b[G];Y!==null&&(b[G]=null,T[G].disconnect(Y))}C=null,D=null,p.reset();for(const G in m)delete m[G];if(e.setRenderTarget(E),f=null,d=null,u=null,s=null,y=null,se.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(R.width,R.height,!1),A!==null){const G=A.camera;G.fov=A.fov,G.zoom=A.zoom,G.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",z),s.addEventListener("inputsourceschange",$),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,_e=null,ue=null;_.depth&&(ue=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=_.stencil?Qi:_i,_e=_.stencil?mr:Jn);const Re={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Re),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new kn(d.textureWidth,d.textureHeight,{format:Fn,type:yn,depthTexture:new _r(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new kn(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),se.setContext(s),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function $(G){for(let Y=0;Y<G.removed.length;Y++){const le=G.removed[Y],_e=b.indexOf(le);_e>=0&&(b[_e]=null,T[_e].disconnect(le))}for(let Y=0;Y<G.added.length;Y++){const le=G.added[Y];let _e=b.indexOf(le);if(_e===-1){for(let Re=0;Re<T.length;Re++)if(Re>=b.length){b.push(le),_e=Re;break}else if(b[Re]===null){b[Re]=le,_e=Re;break}if(_e===-1)break}const ue=T[_e];ue&&ue.connect(le)}}const V=new I,X=new I;function W(G,Y,le){V.setFromMatrixPosition(Y.matrixWorld),X.setFromMatrixPosition(le.matrixWorld);const _e=V.distanceTo(X),ue=Y.projectionMatrix.elements,Re=le.projectionMatrix.elements,Ye=ue[14]/(ue[10]-1),re=ue[14]/(ue[10]+1),ce=(ue[9]+1)/ue[5],fe=(ue[9]-1)/ue[5],pe=(ue[8]-1)/ue[0],xe=(Re[8]+1)/Re[0],$e=Ye*pe,Ve=Ye*xe,qe=_e/(-pe+xe),Ke=qe*-pe;if(Y.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ke),G.translateZ(qe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ue[10]===-1)G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const N=Ye+qe,lt=re+qe,st=$e-Ke,L=Ve+(_e-Ke),M=ce*re/lt*N,q=fe*re/lt*N;G.projectionMatrix.makePerspective(st,L,M,q,N,lt),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function ve(G,Y){Y===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Y.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let Y=G.near,le=G.far;p.texture!==null&&(p.depthNear>0&&(Y=p.depthNear),p.depthFar>0&&(le=p.depthFar)),k.near=U.near=P.near=Y,k.far=U.far=P.far=le,(C!==k.near||D!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),C=k.near,D=k.far),k.layers.mask=G.layers.mask|6,P.layers.mask=k.layers.mask&-5,U.layers.mask=k.layers.mask&-3;const _e=G.parent,ue=k.cameras;ve(k,_e);for(let Re=0;Re<ue.length;Re++)ve(ue[Re],_e);ue.length===2?W(k,P,U):k.projectionMatrix.copy(P.projectionMatrix),A===null&&G.isPerspectiveCamera&&(A={camera:G,fov:G.fov,zoom:G.zoom}),ge(G,k,_e)};function ge(G,Y,le){le===null?G.matrix.copy(Y.matrixWorld):(G.matrix.copy(le.matrixWorld),G.matrix.invert(),G.matrix.multiply(Y.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=vr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(G){return m[G]};let ne=null;function j(G,Y){if(h=Y.getViewerPose(c||o),g=Y,h!==null){const le=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let _e=!1;le.length!==k.cameras.length&&(k.cameras.length=0,_e=!0);for(let re=0;re<le.length;re++){const ce=le[re];let fe=null;if(f!==null)fe=f.getViewport(ce);else{const xe=u.getViewSubImage(d,ce);fe=xe.viewport,re===0&&(e.setRenderTargetTextures(y,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(y))}let pe=F[re];pe===void 0&&(pe=new bn,pe.layers.enable(re),pe.viewport=new Et,F[re]=pe),pe.matrix.fromArray(ce.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(ce.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(fe.x,fe.y,fe.width,fe.height),re===0&&(k.matrix.copy(pe.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),_e===!0&&k.cameras.push(pe)}const ue=s.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();const re=u.getDepthInformation(le[0]);re&&re.isValid&&re.texture&&p.init(re,s.renderState)}if(ue&&ue.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let re=0;re<le.length;re++){const ce=le[re].camera;if(ce){let fe=m[ce];fe||(fe=new Fd,m[ce]=fe);const pe=u.getCameraImage(ce);fe.sourceTexture=pe}}}}for(let le=0;le<T.length;le++){const _e=b[le],ue=T[le];_e!==null&&ue!==void 0&&ue.update(_e,Y,c||o)}ne&&ne(G,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const se=new Zd;se.setAnimationLoop(j),this.setAnimationLoop=function(G){ne=G},this.dispose=function(){}}}const eS=new at,sf=new et;sf.set(-1,0,0,0,1,0,0,0,1);function tS(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Wd(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,_,E,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,_,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===fn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===fn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m),E=_.envMap,y=_.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(eS.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(sf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===fn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const _=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function nS(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){const b=T.program;i.uniformBlockBinding(y,b)}function c(y,T){let b=s[y.id];b===void 0&&(p(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",_));const R=T.program;i.updateUBOMapping(y,R);const S=e.render.frame;r[y.id]!==S&&(d(y),r[y.id]=S)}function h(y){const T=u();y.__bindingPointIndex=T;const b=n.createBuffer(),R=y.__size,S=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,b),b}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const T=s[y.id],b=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let S=0,A=b.length;S<A;S++){const P=b[S];if(Array.isArray(P))for(let U=0,F=P.length;U<F;U++)f(P[U],S,U,R);else f(P,S,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,T,b,R){if(x(y,T,b,R)===!0){const S=y.__offset,A=y.value;if(Array.isArray(A)){let P=0;for(let U=0;U<A.length;U++){const F=A[U],k=m(F);g(F,y.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,y.__data)}}function g(y,T,b){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,b)}function x(y,T,b,R){const S=y.value,A=T+"_"+b;if(R[A]===void 0)return typeof S=="number"||typeof S=="boolean"?R[A]=S:ArrayBuffer.isView(S)?R[A]=S.slice():R[A]=S.clone(),!0;{const P=R[A];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return R[A]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(P.equals(S)===!1)return P.copy(S),!0}}return!1}function p(y){const T=y.uniforms;let b=0;const R=16;for(let A=0,P=T.length;A<P;A++){const U=Array.isArray(T[A])?T[A]:[T[A]];for(let F=0,k=U.length;F<k;F++){const C=U[F],D=Array.isArray(C.value)?C.value:[C.value];for(let B=0,z=D.length;B<z;B++){const $=D[B],V=m($),X=b%R,W=X%V.boundary,ve=X+W;b+=W,ve!==0&&R-ve<V.storage&&(b+=R-ve),C.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=b,b+=V.storage}}}const S=b%R;return S>0&&(b+=R-S),y.__size=b,y.__cache={},this}function m(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",y),T}function _(y){const T=y.target;T.removeEventListener("dispose",_);const b=o.indexOf(T.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function E(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}const iS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zn=null;function sS(){return zn===null&&(zn=new Go(iS,16,16,ts,Qn),zn.name="DFG_LUT",zn.minFilter=en,zn.magFilter=en,zn.wrapS=pi,zn.wrapT=pi,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}class rS{constructor(e={}){const{canvas:t=Mm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=yn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const x=f,p=new Set([Sc,yc,_c]),m=new Set([yn,Jn,pr,mr,gc,vc]),_=new Uint32Array(4),E=new Int32Array(4),y=new I;let T=null,b=null;const R=[],S=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let U=!1,F=null,k=null,C=null,D=null;this._outputColorSpace=Bt;let B=0,z=0,$=null,V=-1,X=null;const W=new Et,ve=new Et;let ge=null;const ne=new Je(0);let j=0,se=t.width,G=t.height,Y=1,le=null,_e=null;const ue=new Et(0,0,se,G),Re=new Et(0,0,se,G);let Ye=!1;const re=new Rc;let ce=!1,fe=!1;const pe=new at,xe=new I,$e=new Et,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Ke(){return $===null?Y:1}let N=i;function lt(w,H){return t.getContext(w,H)}let st,L,M,q,J,Q,me,ye,ie,ae,we,ke,Ae,Te,Me,Fe,We,O,be,oe,Ee,Ce,de;try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fc}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Qe,!1),N===null){const H="webgl2";if(N=lt(H,w),N===null)throw lt(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(w){throw t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Qe,!1),ft("WebGLRenderer: "+w.message),w}function Xe(){st=new s_(N),st.init(),Ee=new Ky(N,st),L=new Yx(N,st,e,Ee),M=new qy(N,st),L.reversedDepthBuffer&&d&&M.buffers.depth.setReversed(!0),k=N.createFramebuffer(),C=N.createFramebuffer(),D=N.createFramebuffer(),q=new a_(N),J=new Iy,Q=new Yy(N,st,M,J,L,Ee,q),me=new i_(P),ye=new c0(N),Ce=new $x(N,ye),ie=new r_(N,ye,q,Ce),ae=new c_(N,ie,ye,Ce,q),O=new l_(N,L,Q),Me=new Kx(J),we=new Dy(P,me,st,L,Ce,Me),ke=new tS(P,J),Ae=new Fy,Te=new Hy(st),We=new Xx(P,me,M,ae,g,l),Fe=new $y(P,ae,L),de=new nS(N,q,L,M),be=new qx(N,st,q),oe=new o_(N,st,q),q.programs=we.programs,P.capabilities=L,P.extensions=st,P.properties=J,P.renderLists=Ae,P.shadowMap=Fe,P.state=M,P.info=q}x!==yn&&(A=new u_(x,t.width,t.height,a,s,r));const He=new jy(P,N);this.xr=He,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=st.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=st.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(se,G,!1))},this.getSize=function(w){return w.set(se,G)},this.setSize=function(w,H,ee=!0){if(He.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}se=w,G=H,t.width=Math.floor(w*Y),t.height=Math.floor(H*Y),ee===!0&&(t.style.width=w+"px",t.style.height=H+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(se*Y,G*Y).floor()},this.setDrawingBufferSize=function(w,H,ee){se=w,G=H,Y=ee,t.width=Math.floor(w*ee),t.height=Math.floor(H*ee),this.setViewport(0,0,w,H)},this.setEffects=function(w){if(x===yn){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let H=0;H<w.length;H++)if(w[H].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(W)},this.getViewport=function(w){return w.copy(ue)},this.setViewport=function(w,H,ee,K){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,H,ee,K),M.viewport(W.copy(ue).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(Re)},this.setScissor=function(w,H,ee,K){w.isVector4?Re.set(w.x,w.y,w.z,w.w):Re.set(w,H,ee,K),M.scissor(ve.copy(Re).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(w){M.setScissorTest(Ye=w)},this.setOpaqueSort=function(w){le=w},this.setTransparentSort=function(w){_e=w},this.getClearColor=function(w){return w.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,ee=!0){let K=0;if(w){let Z=!1;if($!==null){const Le=$.texture.format;Z=p.has(Le)}if(Z){const Le=$.texture.type,Ne=m.has(Le),Pe=We.getClearColor(),Oe=We.getClearAlpha(),Ge=Pe.r,tt=Pe.g,ot=Pe.b;Ne?(_[0]=Ge,_[1]=tt,_[2]=ot,_[3]=Oe,N.clearBufferuiv(N.COLOR,0,_)):(E[0]=Ge,E[1]=tt,E[2]=ot,E[3]=Oe,N.clearBufferiv(N.COLOR,0,E))}else K|=N.COLOR_BUFFER_BIT}H&&(K|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(K|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&N.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),F=w},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Qe,!1),We.dispose(),Ae.dispose(),Te.dispose(),J.dispose(),me.dispose(),ae.dispose(),Ce.dispose(),de.dispose(),we.dispose(),He.dispose(),He.removeEventListener("sessionstart",ii),He.removeEventListener("sessionend",Ti),Tn.stop()};function te(w){w.preventDefault(),nh("WebGLRenderer: Context Lost."),U=!0}function Se(){nh("WebGLRenderer: Context Restored."),U=!1;const w=q.autoReset,H=Fe.enabled,ee=Fe.autoUpdate,K=Fe.needsUpdate,Z=Fe.type;Xe(),q.autoReset=w,Fe.enabled=H,Fe.autoUpdate=ee,Fe.needsUpdate=K,Fe.type=Z}function Qe(w){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ut(w){const H=w.target;H.removeEventListener("dispose",ut),Yt(H)}function Yt(w){wn(w),J.remove(w)}function wn(w){const H=J.get(w).programs;H!==void 0&&(H.forEach(function(ee){we.releaseProgram(ee)}),w.isShaderMaterial&&we.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,ee,K,Z,Le){H===null&&(H=Ve);const Ne=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Pe=Vs(w,H,ee,K,Z);M.setMaterial(K,Ne);let Oe=ee.index,Ge=1;if(K.wireframe===!0){if(Oe=ie.getWireframeAttribute(ee),Oe===void 0)return;Ge=2}const tt=ee.drawRange,ot=ee.attributes.position;let Be=tt.start*Ge,mt=(tt.start+tt.count)*Ge;Le!==null&&(Be=Math.max(Be,Le.start*Ge),mt=Math.min(mt,(Le.start+Le.count)*Ge)),Oe!==null?(Be=Math.max(Be,0),mt=Math.min(mt,Oe.count)):ot!=null&&(Be=Math.max(Be,0),mt=Math.min(mt,ot.count));const Ct=mt-Be;if(Ct<0||Ct===1/0)return;Ce.setup(Z,K,Pe,ee,Oe);let ze,ct=be;if(Oe!==null&&(ze=ye.get(Oe),ct=oe,ct.setIndex(ze)),Z.isMesh)K.wireframe===!0?(M.setLineWidth(K.wireframeLinewidth*Ke()),ct.setMode(N.LINES)):ct.setMode(N.TRIANGLES);else if(Z.isLine){let Dt=K.linewidth;Dt===void 0&&(Dt=1),M.setLineWidth(Dt*Ke()),Z.isLineSegments?ct.setMode(N.LINES):Z.isLineLoop?ct.setMode(N.LINE_LOOP):ct.setMode(N.LINE_STRIP)}else Z.isPoints?ct.setMode(N.POINTS):Z.isSprite&&ct.setMode(N.TRIANGLES);if(Z.isBatchedMesh)if(st.get("WEBGL_multi_draw"))ct.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Dt=Z._multiDrawStarts,Ue=Z._multiDrawCounts,Kt=Z._multiDrawCount,ht=Oe?ye.get(Oe).bytesPerElement:1,cn=J.get(K).currentProgram.getUniforms();for(let On=0;On<Kt;On++)cn.setValue(N,"_gl_DrawID",On),ct.render(Dt[On]/ht,Ue[On])}else if(Z.isInstancedMesh)ct.renderInstances(Be,Ct,Z.count);else if(ee.isInstancedBufferGeometry){const Dt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ue=Math.min(ee.instanceCount,Dt);ct.renderInstances(Be,Ct,Ue)}else ct.render(Be,Ct)};function ln(w,H,ee,K){F!==null&&w.isNodeMaterial&&F.setObject(K,w),ce===!0&&Me.setState(w,ee,!1),w.transparent===!0&&w.side===Vt&&w.forceSinglePass===!1?(w.side=fn,w.needsUpdate=!0,as(w,H,K),w.side=Zn,w.needsUpdate=!0,as(w,H,K),w.side=Vt):as(w,H,K)}this.compile=function(w,H,ee=null){ee===null&&(ee=w),F!==null&&F.renderStart(w,H,ee),b=Te.get(ee),b.init(H),S.push(b),ee.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),w!==ee&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),b.setupLights(),F!==null&&F.updateLights(b.state.lightsArray),fe=this.localClippingEnabled,ce=Me.init(this.clippingPlanes,fe),ce===!0&&Me.setGlobalState(this.clippingPlanes,H),F!==null&&Fe.render(b.state.shadowsArray,ee,H);const K=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Le=Z.material;if(Le)if(Array.isArray(Le))for(let Ne=0;Ne<Le.length;Ne++){const Pe=Le[Ne];ln(Pe,ee,H,Z),K.add(Pe)}else ln(Le,ee,H,Z),K.add(Le)}),b=S.pop(),F!==null&&F.renderEnd(),K},this.compileAsync=function(w,H,ee=null){const K=this.compile(w,H,ee);return new Promise(Z=>{function Le(){if(K.forEach(function(Ne){const Oe=J.get(Ne).currentProgram;(Oe===void 0||Oe.isReady())&&K.delete(Ne)}),K.size===0){Z(w);return}setTimeout(Le,10)}st.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let wi=null;function zi(w){wi&&wi(w)}function ii(){Tn.stop()}function Ti(){Tn.start()}const Tn=new Zd;Tn.setAnimationLoop(zi),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(w){wi=w,He.setAnimationLoop(w),w===null?Tn.stop():Tn.start()},He.addEventListener("sessionstart",ii),He.addEventListener("sessionend",Ti),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(w,H);const ee=He.enabled===!0&&He.isPresenting===!0,K=A!==null&&($===null||ee)&&A.begin(P,$);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(H),H=He.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,H,$),b=Te.get(w,S.length),b.init(H),b.state.textureUnits=Q.getTextureUnits(),S.push(b),pe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),re.setFromProjectionMatrix(pe,$n,H.reversedDepth),fe=this.localClippingEnabled,ce=Me.init(this.clippingPlanes,fe),T=Ae.get(w,R.length),T.init(),R.push(T),He.enabled===!0&&He.isPresenting===!0){const Ne=P.xr.getDepthSensingMesh();Ne!==null&&si(Ne,H,-1/0,P.sortObjects)}si(w,H,0,P.sortObjects),T.finish(),F!==null&&F.updateLights(b.state.lightsArray),P.sortObjects===!0&&T.sort(le,_e),qe=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,qe&&We.addToRenderList(T,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ce===!0&&Me.beginShadows();const Z=b.state.shadowsArray;if(Fe.render(Z,w,H),ce===!0&&Me.endShadows(),(K&&A.hasRenderPass())===!1){const Ne=T.opaque,Pe=T.transmissive;if(b.setupLights(),H.isArrayCamera){const Oe=H.cameras;if(Pe.length>0)for(let Ge=0,tt=Oe.length;Ge<tt;Ge++){const ot=Oe[Ge];ri(Ne,Pe,w,ot)}qe&&We.render(w);for(let Ge=0,tt=Oe.length;Ge<tt;Ge++){const ot=Oe[Ge];os(T,w,ot,ot.viewport)}}else Pe.length>0&&ri(Ne,Pe,w,H),qe&&We.render(w),os(T,w,H)}$!==null&&z===0&&(Q.updateMultisampleRenderTarget($),Q.updateRenderTargetMipmap($)),K&&A.end(P),w.isScene===!0&&w.onAfterRender(P,w,H),Ce.resetDefaultState(),V=-1,X=null,S.pop(),S.length>0?(b=S[S.length-1],Q.setTextureUnits(b.state.textureUnits),ce===!0&&Me.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,F!==null&&F.renderEnd()};function si(w,H,ee,K){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)ee=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLightProbeGrid)b.pushLightProbeGrid(w);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(re)){K&&$e.setFromMatrixPosition(w.matrixWorld).applyMatrix4(pe);const Ne=ae.update(w),Pe=w.material;Pe.visible&&T.push(w,Ne,Pe,ee,$e.z,null,H)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(re))){const Ne=ae.update(w),Pe=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),$e.copy(w.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),$e.copy(Ne.boundingSphere.center)),$e.applyMatrix4(w.matrixWorld).applyMatrix4(pe)),Array.isArray(Pe)){const Oe=Ne.groups;for(let Ge=0,tt=Oe.length;Ge<tt;Ge++){const ot=Oe[Ge],Be=Pe[ot.materialIndex];Be&&Be.visible&&T.push(w,Ne,Be,ee,$e.z,ot,H)}}else Pe.visible&&T.push(w,Ne,Pe,ee,$e.z,null,H)}}const Le=w.children;for(let Ne=0,Pe=Le.length;Ne<Pe;Ne++)si(Le[Ne],H,ee,K)}function os(w,H,ee,K){const{opaque:Z,transmissive:Le,transparent:Ne}=w;b.setupLightsView(ee),ce===!0&&Me.setGlobalState(P.clippingPlanes,ee),K&&M.viewport(W.copy(K)),Z.length>0&&oi(Z,H,ee),Le.length>0&&oi(Le,H,ee),Ne.length>0&&oi(Ne,H,ee),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function ri(w,H,ee,K){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[K.id]===void 0){const Be=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[K.id]=new kn(1,1,{generateMipmaps:!0,type:Be?Qn:yn,minFilter:ki,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}const Le=b.state.transmissionRenderTarget[K.id],Ne=K.viewport||W;Le.setSize(Ne.z*P.transmissionResolutionScale,Ne.w*P.transmissionResolutionScale);const Pe=P.getRenderTarget(),Oe=P.getActiveCubeFace(),Ge=P.getActiveMipmapLevel();P.setRenderTarget(Le),P.getClearColor(ne),j=P.getClearAlpha(),j<1&&P.setClearColor(16777215,.5),P.clear(),qe&&We.render(ee);const tt=P.toneMapping;P.toneMapping=Yn;const ot=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),b.setupLightsView(K),ce===!0&&Me.setGlobalState(P.clippingPlanes,K),oi(w,ee,K),Q.updateMultisampleRenderTarget(Le),Q.updateRenderTargetMipmap(Le),st.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let mt=0,Ct=H.length;mt<Ct;mt++){const ze=H[mt],{object:ct,geometry:Dt,material:Ue,group:Kt}=ze;if(Ue.side===Vt&&ct.layers.test(K.layers)){const ht=Ue.side;Ue.side=fn,Ue.needsUpdate=!0,Lr(ct,ee,K,Dt,Ue,Kt),Ue.side=ht,Ue.needsUpdate=!0,Be=!0}}Be===!0&&(Q.updateMultisampleRenderTarget(Le),Q.updateRenderTargetMipmap(Le))}P.setRenderTarget(Pe,Oe,Ge),P.setClearColor(ne,j),ot!==void 0&&(K.viewport=ot),P.toneMapping=tt}function oi(w,H,ee){const K=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,Le=w.length;Z<Le;Z++){const Ne=w[Z],{object:Pe,geometry:Oe,group:Ge}=Ne;let tt=Ne.material;tt.allowOverride===!0&&K!==null&&(tt=K),Pe.layers.test(ee.layers)&&Lr(Pe,H,ee,Oe,tt,Ge)}}function Lr(w,H,ee,K,Z,Le){F!==null&&Z.isNodeMaterial&&F.setObject(w,Z),w.onBeforeRender(P,H,ee,K,Z,Le),w.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(P,H,ee,K,w,Le),Z.transparent===!0&&Z.side===Vt&&Z.forceSinglePass===!1?(Z.side=fn,Z.needsUpdate=!0,P.renderBufferDirect(ee,H,K,Z,w,Le),Z.side=Zn,Z.needsUpdate=!0,P.renderBufferDirect(ee,H,K,Z,w,Le),Z.side=Vt):P.renderBufferDirect(ee,H,K,Z,w,Le),w.onAfterRender(P,H,ee,K,Z,Le)}function as(w,H,ee){H.isScene!==!0&&(H=Ve);const K=J.get(w),Z=b.state.lights,Le=b.state.shadowsArray,Ne=Z.state.version,Pe=we.getParameters(w,Z.state,Le,H,ee,b.state.lightProbeGridArray),Oe=we.getProgramCacheKey(Pe);let Ge=K.programs;K.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,K.fog=H.fog;const tt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;K.envMap=me.get(w.envMap||K.environment,tt),K.envMapRotation=K.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,Ge===void 0&&(w.addEventListener("dispose",ut),Ge=new Map,K.programs=Ge);let ot=Ge.get(Oe);if(ot!==void 0){if(K.currentProgram===ot&&K.lightsStateVersion===Ne)return Ai(w,Pe),ot}else Pe.uniforms=we.getUniforms(w),F!==null&&w.isNodeMaterial&&F.build(w,ee,Pe),w.onBeforeCompile(Pe,P),ot=we.acquireProgram(Pe,Oe),Ge.set(Oe,ot),K.uniforms=Pe.uniforms;const Be=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=Me.uniform),Ai(w,Pe),K.needsLights=Jo(w),K.lightsStateVersion=Ne,K.needsLights&&(Be.ambientLightColor.value=Z.state.ambient,Be.lightProbe.value=Z.state.probe,Be.sunLights.value=Z.state.sun,Be.sunLightShadows.value=Z.state.sunShadow,Be.directionalLights.value=Z.state.directional,Be.directionalLightShadows.value=Z.state.directionalShadow,Be.spotLights.value=Z.state.spot,Be.spotLightShadows.value=Z.state.spotShadow,Be.rectAreaLights.value=Z.state.rectArea,Be.ltc_1.value=Z.state.rectAreaLTC1,Be.ltc_2.value=Z.state.rectAreaLTC2,Be.pointLights.value=Z.state.point,Be.pointLightShadows.value=Z.state.pointShadow,Be.hemisphereLights.value=Z.state.hemi,Be.sunShadowMatrix.value=Z.state.sunShadowMatrix,Be.sunShadowCascade.value=Z.state.sunShadowCascade,Be.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Be.spotLightMatrix.value=Z.state.spotLightMatrix,Be.spotLightMap.value=Z.state.spotLightMap,Be.pointShadowMatrix.value=Z.state.pointShadowMatrix),K.lightProbeGrid=b.state.lightProbeGridArray.length>0,K.currentProgram=ot,K.uniformsList=null,ot}function Ei(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=So.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function Ai(w,H){const ee=J.get(w);ee.outputColorSpace=H.outputColorSpace,ee.batching=H.batching,ee.batchingColor=H.batchingColor,ee.instancing=H.instancing,ee.instancingColor=H.instancingColor,ee.instancingMorph=H.instancingMorph,ee.skinning=H.skinning,ee.morphTargets=H.morphTargets,ee.morphNormals=H.morphNormals,ee.morphColors=H.morphColors,ee.morphTargetsCount=H.morphTargetsCount,ee.numClippingPlanes=H.numClippingPlanes,ee.numIntersection=H.numClipIntersection,ee.vertexAlphas=H.vertexAlphas,ee.vertexTangents=H.vertexTangents,ee.toneMapping=H.toneMapping}function Zo(w,H){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;y.setFromMatrixPosition(H.matrixWorld);for(let ee=0,K=w.length;ee<K;ee++){const Z=w[ee];if(Z.texture!==null&&Z.boundingBox.containsPoint(y))return Z}return null}function Vs(w,H,ee,K,Z){H.isScene!==!0&&(H=Ve),Q.resetTextureUnits();const Le=H.fog,Ne=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?H.environment:null,Pe=$===null?P.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:dt.workingColorSpace,Oe=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Ge=me.get(K.envMap||Ne,Oe),tt=K.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,ot=!!ee.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Be=!!ee.morphAttributes.position,mt=!!ee.morphAttributes.normal,Ct=!!ee.morphAttributes.color;let ze=Yn;K.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ze=P.toneMapping);const ct=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Dt=ct!==void 0?ct.length:0,Ue=J.get(K),Kt=b.state.lights;if(ce===!0&&(fe===!0||w!==X)){const Tt=w===X&&K.id===V;Me.setState(K,w,Tt)}let ht=!1;K.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Kt.state.version||Ue.outputColorSpace!==Pe||Z.isBatchedMesh&&Ue.batching===!1||!Z.isBatchedMesh&&Ue.batching===!0||Z.isBatchedMesh&&Ue.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Ue.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Ue.instancing===!1||!Z.isInstancedMesh&&Ue.instancing===!0||Z.isSkinnedMesh&&Ue.skinning===!1||!Z.isSkinnedMesh&&Ue.skinning===!0||Z.isInstancedMesh&&Ue.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ue.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ue.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ue.instancingMorph===!1&&Z.morphTexture!==null||Ue.envMap!==Ge||K.fog===!0&&Ue.fog!==Le||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Me.numPlanes||Ue.numIntersection!==Me.numIntersection)||Ue.vertexAlphas!==tt||Ue.vertexTangents!==ot||Ue.morphTargets!==Be||Ue.morphNormals!==mt||Ue.morphColors!==Ct||Ue.toneMapping!==ze||Ue.morphTargetsCount!==Dt||!!Ue.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,Ue.__version=K.version);let cn=Ue.currentProgram;ht===!0&&(cn=as(K,H,Z),F&&K.isNodeMaterial&&F.onUpdateProgram(K,cn,Ue));let On=!1,Ri=!1,ls=!1;const Mt=cn.getUniforms(),It=Ue.uniforms;if(M.useProgram(cn.program)&&(On=!0,Ri=!0,ls=!0),K.id!==V&&(V=K.id,Ri=!0),Ue.needsLights){const Tt=Zo(b.state.lightProbeGridArray,Z);Ue.lightProbeGrid!==Tt&&(Ue.lightProbeGrid=Tt,Ri=!0)}if(On||X!==w){M.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Mt.setValue(N,"projectionMatrix",w.projectionMatrix),Mt.setValue(N,"viewMatrix",w.matrixWorldInverse);const Pi=Mt.map.cameraPosition;Pi!==void 0&&Pi.setValue(N,xe.setFromMatrixPosition(w.matrixWorld)),L.logarithmicDepthBuffer&&Mt.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Mt.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),X!==w&&(X=w,Ri=!0,ls=!0)}if(Ue.needsLights&&(Kt.state.sunShadowMap.length>0&&Mt.setValue(N,"sunShadowMap",Kt.state.sunShadowMap,Q),Kt.state.directionalShadowMap.length>0&&Mt.setValue(N,"directionalShadowMap",Kt.state.directionalShadowMap,Q),Kt.state.spotShadowMap.length>0&&Mt.setValue(N,"spotShadowMap",Kt.state.spotShadowMap,Q),Kt.state.pointShadowMap.length>0&&Mt.setValue(N,"pointShadowMap",Kt.state.pointShadowMap,Q)),Z.isSkinnedMesh){Mt.setOptional(N,Z,"bindMatrix"),Mt.setOptional(N,Z,"bindMatrixInverse");const Tt=Z.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),Mt.setValue(N,"boneTexture",Tt.boneTexture,Q))}Z.isBatchedMesh&&(Mt.setOptional(N,Z,"batchingTexture"),Mt.setValue(N,"batchingTexture",Z._matricesTexture,Q),Mt.setOptional(N,Z,"batchingIdTexture"),Mt.setValue(N,"batchingIdTexture",Z._indirectTexture,Q),Mt.setOptional(N,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Mt.setValue(N,"batchingColorTexture",Z._colorsTexture,Q));const Ci=ee.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&O.update(Z,ee,cn),(Ri||Ue.receiveShadow!==Z.receiveShadow)&&(Ue.receiveShadow=Z.receiveShadow,Mt.setValue(N,"receiveShadow",Z.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&H.environment!==null&&(It.envMapIntensity.value=H.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=sS()),Ri){if(Mt.setValue(N,"toneMappingExposure",P.toneMappingExposure),Ue.needsLights&&Dr(It,ls),Le&&K.fog===!0&&ke.refreshFogUniforms(It,Le),ke.refreshMaterialUniforms(It,K,Y,G,b.state.transmissionRenderTarget[w.id]),Ue.needsLights&&Ue.lightProbeGrid){const Tt=Ue.lightProbeGrid;It.probesSH.value=Tt.texture,It.probesMin.value.copy(Tt.boundingBox.min),It.probesMax.value.copy(Tt.boundingBox.max),It.probesResolution.value.copy(Tt.resolution)}So.upload(N,Ei(Ue),It,Q)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(So.upload(N,Ei(Ue),It,Q),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Mt.setValue(N,"center",Z.center),Mt.setValue(N,"modelViewMatrix",Z.modelViewMatrix),Mt.setValue(N,"normalMatrix",Z.normalMatrix),Mt.setValue(N,"modelMatrix",Z.matrixWorld),K.uniformsGroups!==void 0){const Tt=K.uniformsGroups;for(let Pi=0,cs=Tt.length;Pi<cs;Pi++){const zc=Tt[Pi];de.update(zc,cn),de.bind(zc,cn)}}return cn}function Dr(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.sunLights.needsUpdate=H,w.sunLightShadows.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Jo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(w,H,ee){const K=J.get(w);K.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),J.get(w.texture).__webglTexture=H,J.get(w.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:ee,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){const ee=J.get(w);ee.__webglFramebuffer=H,ee.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(w,H=0,ee=0){$=w,B=H,z=ee;let K=null,Z=!1,Le=!1;if(w){const Pe=J.get(w);if(Pe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(N.FRAMEBUFFER,Pe.__webglFramebuffer),W.copy(w.viewport),ve.copy(w.scissor),ge=w.scissorTest,M.viewport(W),M.scissor(ve),M.setScissorTest(ge),V=-1;return}else if(Pe.__webglFramebuffer===void 0)Q.setupRenderTarget(w);else if(Pe.__hasExternalTextures)Q.rebindTextures(w,J.get(w.texture).__webglTexture,J.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const tt=w.depthTexture;if(Pe.__boundDepthTexture!==tt){if(tt!==null&&J.has(tt)&&(w.width!==tt.image.width||w.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(w)}}const Oe=w.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Le=!0);const Ge=J.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ge[H])?K=Ge[H][ee]:K=Ge[H],Z=!0):w.samples>0&&Q.useMultisampledRTT(w)===!1?K=J.get(w).__webglMultisampledFramebuffer:Array.isArray(Ge)?K=Ge[ee]:K=Ge,W.copy(w.viewport),ve.copy(w.scissor),ge=w.scissorTest}else W.copy(ue).multiplyScalar(Y).floor(),ve.copy(Re).multiplyScalar(Y).floor(),ge=Ye;if(ee!==0&&(K=k),M.bindFramebuffer(N.FRAMEBUFFER,K)&&M.drawBuffers(w,K),M.viewport(W),M.scissor(ve),M.setScissorTest(ge),Z){const Pe=J.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,Pe.__webglTexture,ee)}else if(Le){const Pe=H;for(let Oe=0;Oe<w.textures.length;Oe++){const Ge=J.get(w.textures[Oe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Oe,Ge.__webglTexture,ee,Pe)}}else if(w!==null&&ee!==0){const Pe=J.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Pe.__webglTexture,ee)}V=-1};function Ir(w){const H=J.get(w);return(H.__readFormat!==w.format||H.__readType!==w.type)&&(H.__readFormat=w.format,H.__readType=w.type,H.__formatReadable=L.textureFormatReadable(w.format),H.__typeReadable=L.textureTypeReadable(w.type)),H}this.readRenderTargetPixels=function(w,H,ee,K,Z,Le,Ne,Pe=0){if(!(w&&w.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=J.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe){M.bindFramebuffer(N.FRAMEBUFFER,Oe);try{const Ge=w.textures[Pe],tt=Ge.format,ot=Ge.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Pe);const Be=Ir(Ge);if(Be.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Be.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-K&&ee>=0&&ee<=w.height-Z&&N.readPixels(H,ee,K,Z,Ee.convert(tt),Ee.convert(ot),Le)}finally{const Ge=$!==null?J.get($).__webglFramebuffer:null;M.bindFramebuffer(N.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(w,H,ee,K,Z,Le,Ne,Pe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=J.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe)if(H>=0&&H<=w.width-K&&ee>=0&&ee<=w.height-Z){M.bindFramebuffer(N.FRAMEBUFFER,Oe);const Ge=w.textures[Pe],tt=Ge.format,ot=Ge.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Pe);const Be=Ir(Ge);if(Be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,mt),N.bufferData(N.PIXEL_PACK_BUFFER,Le.byteLength,N.STREAM_READ),N.readPixels(H,ee,K,Z,Ee.convert(tt),Ee.convert(ot),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Ct=$!==null?J.get($).__webglFramebuffer:null;M.bindFramebuffer(N.FRAMEBUFFER,Ct);const ze=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await bm(N,ze,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,mt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Le),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(mt),N.deleteSync(ze),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,ee=0){const K=Math.pow(2,-ee),Z=Math.floor(w.image.width*K),Le=Math.floor(w.image.height*K),Ne=H!==null?H.x:0,Pe=H!==null?H.y:0;Q.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,ee,0,0,Ne,Pe,Z,Le),M.unbindTexture()},this.copyTextureToTexture=function(w,H,ee=null,K=null,Z=0,Le=0){let Ne,Pe,Oe,Ge,tt,ot,Be,mt,Ct;const ze=w.isCompressedTexture?w.mipmaps[Le]:w.image;if(ee!==null)Ne=ee.max.x-ee.min.x,Pe=ee.max.y-ee.min.y,Oe=ee.isBox3?ee.max.z-ee.min.z:1,Ge=ee.min.x,tt=ee.min.y,ot=ee.isBox3?ee.min.z:0;else{const It=Math.pow(2,-Z);Ne=Math.floor(ze.width*It),Pe=Math.floor(ze.height*It),w.isDataArrayTexture?Oe=ze.depth:w.isData3DTexture?Oe=Math.floor(ze.depth*It):Oe=1,Ge=0,tt=0,ot=0}K!==null?(Be=K.x,mt=K.y,Ct=K.z):(Be=0,mt=0,Ct=0);const ct=Ee.convert(H.format),Dt=Ee.convert(H.type);let Ue;H.isData3DTexture?(Q.setTexture3D(H,0),Ue=N.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Q.setTexture2DArray(H,0),Ue=N.TEXTURE_2D_ARRAY):(Q.setTexture2D(H,0),Ue=N.TEXTURE_2D),M.activeTexture(N.TEXTURE0),M.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),M.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),M.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);const Kt=M.getParameter(N.UNPACK_ROW_LENGTH),ht=M.getParameter(N.UNPACK_IMAGE_HEIGHT),cn=M.getParameter(N.UNPACK_SKIP_PIXELS),On=M.getParameter(N.UNPACK_SKIP_ROWS),Ri=M.getParameter(N.UNPACK_SKIP_IMAGES);M.pixelStorei(N.UNPACK_ROW_LENGTH,ze.width),M.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ze.height),M.pixelStorei(N.UNPACK_SKIP_PIXELS,Ge),M.pixelStorei(N.UNPACK_SKIP_ROWS,tt),M.pixelStorei(N.UNPACK_SKIP_IMAGES,ot);const ls=w.isDataArrayTexture||w.isData3DTexture,Mt=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){const It=J.get(w),Ci=J.get(H),Tt=J.get(It.__renderTarget),Pi=J.get(Ci.__renderTarget);M.bindFramebuffer(N.READ_FRAMEBUFFER,Tt.__webglFramebuffer),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let cs=0;cs<Oe;cs++)ls&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,J.get(w).__webglTexture,Z,ot+cs),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,J.get(H).__webglTexture,Le,Ct+cs)),N.blitFramebuffer(Ge,tt,Ne,Pe,Be,mt,Ne,Pe,N.DEPTH_BUFFER_BIT,N.NEAREST);M.bindFramebuffer(N.READ_FRAMEBUFFER,null),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||J.has(w)){const It=J.get(w),Ci=J.get(H);M.bindFramebuffer(N.READ_FRAMEBUFFER,C),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,D);for(let Tt=0;Tt<Oe;Tt++)ls?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.__webglTexture,Z,ot+Tt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,It.__webglTexture,Z),Mt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ci.__webglTexture,Le,Ct+Tt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ci.__webglTexture,Le),Z!==0?N.blitFramebuffer(Ge,tt,Ne,Pe,Be,mt,Ne,Pe,N.COLOR_BUFFER_BIT,N.NEAREST):Mt?N.copyTexSubImage3D(Ue,Le,Be,mt,Ct+Tt,Ge,tt,Ne,Pe):N.copyTexSubImage2D(Ue,Le,Be,mt,Ge,tt,Ne,Pe);M.bindFramebuffer(N.READ_FRAMEBUFFER,null),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Mt?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Ue,Le,Be,mt,Ct,Ne,Pe,Oe,ct,Dt,ze.data):H.isCompressedArrayTexture?N.compressedTexSubImage3D(Ue,Le,Be,mt,Ct,Ne,Pe,Oe,ct,ze.data):N.texSubImage3D(Ue,Le,Be,mt,Ct,Ne,Pe,Oe,ct,Dt,ze):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Le,Be,mt,Ne,Pe,ct,Dt,ze.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Le,Be,mt,ze.width,ze.height,ct,ze.data):N.texSubImage2D(N.TEXTURE_2D,Le,Be,mt,Ne,Pe,ct,Dt,ze);M.pixelStorei(N.UNPACK_ROW_LENGTH,Kt),M.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ht),M.pixelStorei(N.UNPACK_SKIP_PIXELS,cn),M.pixelStorei(N.UNPACK_SKIP_ROWS,On),M.pixelStorei(N.UNPACK_SKIP_IMAGES,Ri),Le===0&&H.generateMipmaps&&N.generateMipmap(Ue),M.unbindTexture()},this.initRenderTarget=function(w){J.get(w).__webglFramebuffer===void 0&&Q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Q.setTextureCube(w,0):w.isData3DTexture?Q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Q.setTexture2DArray(w,0):Q.setTexture2D(w,0),M.unbindTexture()},this.resetState=function(){B=0,z=0,$=null,M.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}function rf(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new qt;let c=0;for(let h=0;h<n.length;++h){const u=n[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=nu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);const g=nu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function nu(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new gn(o,t,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){const x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var oS="(min-width: 768px) and (orientation: landscape)",aS=1.377;function lS(n){return typeof n=="object"&&n!==null&&Object.getPrototypeOf(n)===Object.prototype&&"src"in n}var ao=n=>lS(n)?n.src:n;function cS(n,e,t){const i=e==="spread",s=n.paper??{},r=n.lighting??{},o=n.motion??{},a=n.interaction??{},l=o.reducedMotion==="auto"||o.reducedMotion===void 0?t:o.reducedMotion;return{layout:e,pageAspect:n.pageAspect??aS,loop:n.loop??!0,bleed:n.bleed??!0,paper:{grain:s.grain??!0,grainScale:s.grainScale??1.46,grainStrength:s.grainStrength??.17,showThrough:s.showThrough??(i?.04:.3),inkGloss:s.inkGloss??.33,roughness:s.roughness??.5,metalness:s.metalness??.17,backColor:s.backColor??"#fcfcf9",wrinkles:s.wrinkles??1,bulge:s.bulge??1,cutout:s.cutout??!1,sheetGap:Math.max(0,s.sheetGap??0),depthBias:s.depthBias??!0},deform:null,lighting:{ambient:{sky:r.ambient?.sky??"#ffffff",ground:r.ambient?.ground??"#a1aeaf",intensity:r.ambient?.intensity??(i?1.5:1.7)},sun:{color:r.sun?.color??"#ffffff",intensity:r.sun?.intensity??2,position:r.sun?.position??(i?[-3.5,1.3,4.1]:[.689,-1.15,2.15])},shadows:r.shadows??!0,shadowMapSize:r.shadowMapSize??2048,floorShadow:r.floorShadow??.15},motion:{speed:Math.max(.05,o.speed??1),dragDistance:o.dragDistance??(i?.8:1.2),commitThreshold:o.commitThreshold??(i?.2:.1),curl:o.curl??1,maxTilt:o.maxTilt??(i?45:35),jitter:l?!1:o.jitter??!0,hoverLift:l?0:o.hoverLift??.03,reduced:l},interaction:{drag:a.drag??!0,click:a.click??!0,hold:a.hold??!0,hover:a.hover??!0,keyboard:a.keyboard??!0},maxPixelRatio:n.maxPixelRatio??3}}var hS=new Set(["onPageChange","onReady","onPageLoad","onError","formatPageLabel","label","startPage","preload","pages"]);function iu(n){const e=n??6;return Number.isNaN(e)?6:Math.max(0,e)}function Jl(n){return typeof n!="object"||n===null?n:Array.isArray(n)?n.map(Jl):Object.getPrototypeOf(n)!==Object.prototype?n:Object.fromEntries(Object.entries(n).map(([e,t])=>[e,Jl(t)]))}function Uc(n,e){if(Object.is(n,e))return!0;if(typeof n!="object"||typeof e!="object"||n===null||e===null||Array.isArray(n)!==Array.isArray(e))return!1;const t=Object.getPrototypeOf(n);if(t!==Object.prototype&&t!==Array.prototype||t!==Object.getPrototypeOf(e))return!1;const i=Object.keys(n),s=Object.keys(e);return i.length!==s.length?!1:i.every(r=>Uc(n[r],e[r]))}function uS(n,e){return[...new Set([...Object.keys(n),...Object.keys(e)])].filter(i=>!Uc(n[i],e[i]))}var Hn=n=>Number.isInteger(n)?`${n}.0`:`${n}`;function dS(n,e,t){const{paper:i,pageAspect:s}=t,r=new Je(i.backColor),o=`
    const float SHEET_ASPECT = ${Hn(s)};
    const float NORMAL_EPSILON = ${Hn(e.epsilon)};
    const float PATTERN_SIZE = ${Hn(i.grainScale)};
    const float PATTERN_DARKEN = ${Hn(i.grain===!1?0:i.grainStrength)};
    const float PATTERN_ROUGHNESS = 0.33;
    const float SHOW_THROUGH = ${Hn(i.showThrough)};
    const float INK_GLOSS = ${Hn(i.inkGloss)};
    const float SHADOW_OFFSET_X = ${Hn(e.shadowOffsetX)};
    const float CONTACT_REACH = 0.04;
    const vec3 BLANK_PAPER = vec3(${Hn(r.r)}, ${Hn(r.g)}, ${Hn(r.b)});
  `,a=p=>e.noise?`aNoise.${p}`:"0.0",l=t.deform,c=l?`#include <common>
      uniform vec3 uSheetOrigin;
      ${l.glsl}
      vec3 sheetDeformed(vec3 p, vec2 uv) {
        return deformSheet(p + uSheetOrigin, uv) - uSheetOrigin;
      }`:"#include <common>",h=(p,m)=>l?`sheetDeformed(${p}, ${m})`:p,u=l?{...l.uniforms,uSheetOrigin:n.uSheetOrigin}:{},d=new Pn({side:Vt,metalness:i.metalness,roughness:i.roughness});d.onBeforeCompile=p=>{Object.assign(p.uniforms,n,u),p.vertexShader=o+e.vertexChunk+`varying vec2 vSheetUv;
varying vec3 vSheetPosition;
`+p.vertexShader,p.vertexShader=p.vertexShader.replace("#include <common>",c).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        vec2 sheetStep = vec2(NORMAL_EPSILON, NORMAL_EPSILON / SHEET_ASPECT);
        vec3 sheetShaped = sheetPosition(uv, ${a("x")});
        vec3 sheetP = ${h("sheetShaped","uv")};
        vec3 sheetPx = ${h(`sheetPosition(uv + vec2(sheetStep.x, 0.0), ${a("y")})`,"uv + vec2(sheetStep.x, 0.0)")};
        vec3 sheetPy = ${h(`sheetPosition(uv + vec2(0.0, sheetStep.y), ${a("z")})`,"uv + vec2(0.0, sheetStep.y)")};
        objectNormal = normalize(cross(sheetPx - sheetP, sheetPy - sheetP));`).replace("#include <begin_vertex>",`vec3 transformed = sheetP;
        vSheetUv = uv;
        vSheetPosition = sheetShaped;`),p.fragmentShader=o+`uniform sampler2D uFront;
      uniform sampler2D uBack;
      uniform sampler2D uPattern;
      uniform vec3 uSpineContact;
      uniform vec3 uLightDirection;
      varying vec2 vSheetUv;
      varying vec3 vSheetPosition;
      ${e.fragmentChunk??""}

      // Right where a turning sheet leaves the spine it all but touches the pages under it, and
      // the shadow map's depth bias can't tell them apart: a thin strip next to the spine stays
      // lit, which reads as a light seam. There the sheet is a plane through the spine
      // (uSpineContact.xy is its direction across, z says whether a sheet is turning), so test
      // the way to the light against that plane directly.
      float sheetContactShadow(vec3 p, float intensity) {
        if (uSpineContact.z < 0.5) return 1.0;
        vec3 across = vec3(uSpineContact.x, 0.0, uSpineContact.y);
        vec3 normal = vec3(-uSpineContact.y, 0.0, uSpineContact.x);
        float facing = dot(normal, uLightDirection);
        if (abs(facing) < 1e-4) return 1.0;
        float t = -dot(normal, p) / facing;
        if (t <= 1e-4) return 1.0;
        vec3 hit = p + t * uLightDirection;
        float along = dot(hit, across);
        if (along <= 0.0 || along > CONTACT_REACH || abs(hit.y) > SHEET_ASPECT * 0.5) return 1.0;
        return 1.0 - intensity;
      }
      `+p.fragmentShader,p.fragmentShader=p.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        ${e.fragmentChunk?"if (sheetHidden(vSheetPosition)) discard;":""}`).replace("#include <normal_fragment_begin>",`vec3 normal = normalize(vNormal);
        float faceDirection = gl_FrontFacing ? 1.0 : -1.0;
        normal *= faceDirection;
        vec3 nonPerturbedNormal = normal;`).replace("#include <map_fragment>",`vec4 frontColor = texture2D(uFront, vSheetUv);
        vec4 backColor = texture2D(uBack, vec2(1.0 - vSheetUv.x, vSheetUv.y));
        ${i.cutout?`// Cut to the front page: no paper where it's transparent. The edge that's left
        // keeps its own colour (page images are premultiplied, so divide the alpha out) rather
        // than fading to paper, which would leave a pale fringe.
        if (frontColor.a < 0.5) discard;
        frontColor = vec4(frontColor.rgb / frontColor.a, 1.0);
        backColor = backColor.a > 0.01 ? vec4(backColor.rgb / backColor.a, 1.0) : vec4(BLANK_PAPER, 1.0);`:`// Transparent artwork is unprinted paper, not a hole in the sheet. Page images are
        // premultiplied, so this is "over" compositing onto the paper colour.
        frontColor = vec4(frontColor.rgb + BLANK_PAPER * (1.0 - frontColor.a), 1.0);
        backColor = vec4(backColor.rgb + BLANK_PAPER * (1.0 - backColor.a), 1.0);`}
        vec4 faceColor = gl_FrontFacing ? frontColor : backColor;
        vec4 otherColor = gl_FrontFacing ? backColor : frontColor;
        // thin paper lets some of the other side through
        vec4 sheetColor = faceColor;
        sheetColor.rgb *= mix(vec3(1.0), otherColor.rgb, SHOW_THROUGH);
        diffuseColor *= sheetColor;
        float inkAmount = 1.0 - dot(faceColor.rgb, vec3(0.299, 0.587, 0.114));`).replace("#include <lights_fragment_begin>",mS(it.lights_fragment_begin)).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        // ink sits glossier than bare paper; fibres are rougher
        roughnessFactor *= 1.0 - inkAmount * INK_GLOSS;
        float pattern = texture2D(uPattern, vSheetUv * PATTERN_SIZE * vec2(1.0, SHEET_ASPECT)).r;
        pattern = 2.0 * pow(pattern, 7.0);
        roughnessFactor = clamp(mix(roughnessFactor, 1.0, clamp(pattern * PATTERN_ROUGHNESS, 0.0, 1.0)), 0.0, 1.0);`).replace("#include <opaque_fragment>",`#include <opaque_fragment>
        gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.0), pattern * PATTERN_DARKEN);`),p.fragmentShader=Fc(p.fragmentShader)};const f=new Xd({depthPacking:um,side:Vt}),g=new $d({side:Vt});f.onBeforeCompile=g.onBeforeCompile=p=>{Object.assign(p.uniforms,n,u),p.vertexShader=o+e.vertexChunk+`varying vec2 vSheetUv;
varying vec3 vSheetPosition;
`+p.vertexShader,p.vertexShader=p.vertexShader.replace("#include <common>",c).replace("#include <begin_vertex>",`vSheetUv = uv;
      vSheetPosition = sheetPosition(uv, ${a("x")});
      vec3 transformed = ${h("vSheetPosition - vec3(SHADOW_OFFSET_X, 0.0, 0.0)","uv")};`),p.fragmentShader=o+`
      uniform sampler2D uFront;
      varying vec2 vSheetUv;
      varying vec3 vSheetPosition;
      ${e.fragmentChunk??""}
    `+p.fragmentShader,p.fragmentShader=p.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      ${i.cutout?"if (texture2D(uFront, vSheetUv).a < 0.5) discard;":""}
      ${e.fragmentChunk?"if (sheetHidden(vSheetPosition)) discard;":""}`)};const x=o+e.vertexChunk+(e.fragmentChunk??"")+(i.cutout?"cutout":"")+(l?.glsl??"");return d.customProgramCacheKey=()=>x,f.customProgramCacheKey=()=>x,g.customProgramCacheKey=()=>x,{material:d,depthMaterial:f,distanceMaterial:g}}function Fc(n){const e=fS();return e?n.replace("#include <shadowmap_pars_fragment>",e):n}function fS(){const n=it.shadowmap_pars_fragment;if(!n.includes("sampler2DShadow"))return null;const e=n.search(/#else\s+float\s+getShadow\(\s*sampler2D\s+shadowMap\b/),t=e<0?-1:pS(n,e);return t<0?null:n.slice(0,e)+`#else
    float interleavedGradientNoise( vec2 position ) {
      return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
    }
    vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
      const float goldenAngle = 2.399963229728653;
      float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
      float theta = float( sampleIndex ) * goldenAngle + phi;
      return vec2( cos( theta ), sin( theta ) ) * r;
    }
    float shadowTexelLit( sampler2D shadowMap, ivec2 texel, ivec2 last, float depth ) {
      float stored = texelFetch( shadowMap, clamp( texel, ivec2( 0 ), last ), 0 ).r;
      #ifdef USE_REVERSED_DEPTH_BUFFER
        return step( stored, depth );
      #else
        return step( depth, stored );
      #endif
    }
    float shadowBilinearLit( sampler2D shadowMap, vec2 shadowMapSize, vec2 uv, float depth ) {
      vec2 p = uv * shadowMapSize - 0.5;
      ivec2 texel = ivec2( floor( p ) );
      ivec2 last = ivec2( shadowMapSize ) - 1;
      vec2 f = fract( p );
      return mix(
        mix( shadowTexelLit( shadowMap, texel, last, depth ), shadowTexelLit( shadowMap, texel + ivec2( 1, 0 ), last, depth ), f.x ),
        mix( shadowTexelLit( shadowMap, texel + ivec2( 0, 1 ), last, depth ), shadowTexelLit( shadowMap, texel + ivec2( 1, 1 ), last, depth ), f.x ),
        f.y );
    }
    float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
      float shadow = 1.0;
      shadowCoord.xyz /= shadowCoord.w;
      #ifdef USE_REVERSED_DEPTH_BUFFER
        shadowCoord.z -= shadowBias;
      #else
        shadowCoord.z += shadowBias;
      #endif
      bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
      if ( inFrustum && shadowCoord.z <= 1.0 ) {
        vec2 radius = shadowRadius / shadowMapSize;
        float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
        shadow = 0.0;
        for ( int i = 0; i < 5; i ++ ) {
          shadow += shadowBilinearLit( shadowMap, shadowMapSize, shadowCoord.xy + vogelDiskSample( i, 5, phi ) * radius, shadowCoord.z );
        }
        shadow *= 0.2;
      }
      return mix( 1.0, shadow, shadowIntensity );
    }
  `+n.slice(t)}function pS(n,e){const t=/^[ \t]*#\s*(if|ifdef|ifndef|endif)\b/gm;t.lastIndex=e;let i=0;for(let s;s=t.exec(n);)if(s[1]!=="endif")i++;else if(i--===0)return s.index;return-1}var Na="getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] )";function mS(n){return n.includes(Na)?n.replace(Na,`min( ${Na}, sheetContactShadow( vSheetPosition, directionalLightShadow.shadowIntensity ) )`):n}function of(n,e,t,i){const{material:s,depthMaterial:r,distanceMaterial:o}=dS(e,t,i),a=new nt(n,s);return a.customDepthMaterial=r,a.customDistanceMaterial=o,a.castShadow=i.lighting.shadows,a.receiveShadow=i.lighting.shadows,a.frustumCulled=!1,a}function af(n,e,t,i,s){const r=n.material;r.polygonOffset=s,r.polygonOffsetFactor=0,r.polygonOffsetUnits=s?i?-(t+4):-(t-Math.min(e,t)):0,n.renderOrder=e}function lf(n){n.material.dispose(),n.customDepthMaterial?.dispose(),n.customDistanceMaterial?.dispose()}function lo(n){const t=new Je(n).clone().convertLinearToSRGB(),i=new Go(new Uint8Array([Math.round(t.r*255),Math.round(t.g*255),Math.round(t.b*255),255]),1,1);return i.colorSpace=Bt,i.needsUpdate=!0,i}var su=new WeakMap,gS=1;function Ki(n){if(typeof n=="string")return n;let e=su.get(n);return e||su.set(n,e=gS++),`#${e}`}var vS=new di(new I(0,0,1),0),xS=new at,ru=new rs;function Nc(n,e,t){return n.updateWorldMatrix(!0,!1),ru.copy(e).applyMatrix4(xS.copy(n.matrixWorld).invert()),ru.intersectPlane(vS,t)}var ou=new Yd,au=new he;function lu(n,e,t,i,s){const r=e.getBoundingClientRect();return!r.width||!r.height?!1:(au.set((t-r.left)/r.width*2-1,-((i-r.top)/r.height)*2+1),n.updateWorldMatrix(!0,!1),ou.setFromCamera(au,n),s.copy(ou.ray),!0)}var _S=1.377,co=.27975;function cu(n,e){const t=e/_S;if(n==="spread"){const r={x:-1,y:-e/2,width:2,height:e},o={x:r.x-co*r.width,y:r.y-co*r.height,width:r.width*(1+2*co),height:r.height*(1+2*co)},a=o.height/2/Math.tan(20*Math.PI/180);return{box:r,view:o,eye:{x:0,y:0},distance:a,dragWidth:o.width,shadow:{left:-.8,right:1,top:.85*t,bottom:-1.05*t}}}const i={x:-.34,y:-1.2*t,width:1.56,height:2.4*t},s={x:-1.15,y:i.y,width:i.x+i.width+1.15,height:i.height};return{box:i,view:s,eye:{x:i.x+i.width/2,y:0},distance:3.1*t,dragWidth:i.width,shadow:{left:-1.1,right:1.1,top:.8*t,bottom:-.8*t}}}function yS(n,e){const t=n==="spread"?{x:-1,y:-e/2,width:2,height:e}:{x:0,y:-e/2,width:1,height:e};return{box:t,view:t,eye:{x:t.x+t.width/2,y:0},distance:1,dragWidth:t.width,shadow:{left:0,right:0,top:0,bottom:0}}}function ka(n,e,t){const i=St.clamp(Math.round(n)||0,0,Math.max(t-1,0));return e==="spread"?Math.ceil(i/2):i}function SS(n,e){return e==="spread"?Math.max(0,2*n-1):n}function Ql(n,e,t){return(e==="spread"?[2*n-1,2*n]:[n]).filter(s=>s>=0&&s<t)}function MS(n,e,t){const i=Ql(n,e,t);return{page:i.length?i[0]:Math.max(0,Math.min(SS(n,e),t-1)),visiblePages:i,pageCount:t,layout:e}}var bS=class{state=null;get active(){return this.state!==null}start(n,e){this.state={target:n,interval:140/e,last:-1/0}}stop(){this.state=null}step(n,e){const t=this.state;if(!(!t||n-t.last<t.interval)){if(e.position===t.target){this.state=null;return}t.last=n,e.flip(e.position<t.target)||(this.state=null)}}};function wS(n,e,t,i){const s=r=>{const o=e();if(!o||r.defaultPrevented||r.altKey||r.ctrlKey||r.metaKey)return;if(o==="global"){if(r.target?.closest?.('input, textarea, select, [contenteditable=""], [contenteditable="true"]'))return}else if(r.currentTarget!==n)return;const l={ArrowRight:t.next,PageDown:t.next,ArrowLeft:t.prev,PageUp:t.prev,Home:t.first,End:t.last}[r.key];l&&(r.preventDefault(),l())};n.addEventListener("keydown",s,{signal:i}),window.addEventListener("keydown",r=>{e()==="global"&&!n.contains(r.target)&&s(r)},{signal:i})}var hu=4,uu=1,TS=1,ES=8,AS=100,RS=class{constructor(n,e,t,i){this.sources=n,this.renderer=e,this.radius=t,this.events=i,this.textures=new Array(n.length)}sources;renderer;radius;events;textures;owned=new Set;inFlight=new Map;failed=new Set;pending=new Map;cancelUploads=null;first=[];from=0;to=0;around=0;wrap=!1;waiting=new Set;settleFirst=()=>{};disposed=!1;start(n,e,t){this.from=n,this.to=e,this.first=t.filter(s=>s>=0&&s<this.sources.length&&this.distance(s)<=this.radius),this.waiting=new Set(this.first.filter(s=>!this.textures[s]));const i=new Promise(s=>this.settleFirst=s);return this.showReadyTextures(),this.focus(n,e),this.waiting.size||this.settleFirst(),i}setSources(n){if(this.disposed)return;const e=this.sources;if(e.length===n.length&&e.every((a,l)=>Ki(a)===Ki(n[l])))return;const t=a=>a<n.length&&Ki(e[a])===Ki(n[a]);for(const[a,l]of this.inFlight)t(a)||(l.abort(),this.inFlight.delete(a));for(const[a,l]of this.pending)t(a)||(this.pending.delete(a),this.owned.delete(l)&&l.dispose());this.pending.size||(this.cancelUploads?.(),this.cancelUploads=null);const i=new Map;e.forEach((a,l)=>{const c=this.textures[l];if(!c)return;const h=Ki(a),u=i.get(h)??[];u.push(c),i.set(h,u)});const s=n.map(a=>i.get(Ki(a))?.shift()),r=new Set([...s,...this.pending.values()]);for(const a of this.owned)r.has(a)||(this.owned.delete(a),a.dispose());const o=this.textures;this.sources=n,this.textures=s;for(const a of this.failed)t(a)||this.failed.delete(a);this.first=[],this.settleFirst(),this.settleFirst=()=>{},this.waiting.clear(),o.forEach((a,l)=>{a&&a!==s[l]&&this.events.onUnload(l)}),s.forEach((a,l)=>{a&&a!==o[l]&&this.events.onLoad(l,a)}),this.showReadyTextures(),this.focus(this.from,this.to,this.around),this.scheduleUploads()}showReadyTextures(){this.sources.forEach((n,e)=>{!(n instanceof Rt)||this.textures[e]===n||(this.show(e,n),this.waiting.delete(e)&&!this.waiting.size&&this.settleFirst())})}focus(n,e=n,t=n){if(this.disposed)return;this.from=n,this.to=e,this.around=t;const i=2*this.radius;for(const[s,r]of this.inFlight)this.distance(s)<=i||(r.abort(),this.inFlight.delete(s));this.textures.forEach((s,r)=>{!s||this.distance(r)<=i||!this.owned.has(s)||(this.textures[r]=void 0,this.events.onUnload(r),this.owned.delete(s),s.dispose())});for(const[s,r]of this.pending)this.distance(s)>i?(this.pending.delete(s),this.owned.delete(r)&&r.dispose()):this.distance(s)<=uu&&(this.pending.delete(s),this.show(s,r));this.pump()}setWrap(n){n!==this.wrap&&(this.wrap=n,this.focus(this.from,this.to,this.around))}setRadius(n){this.radius=n,this.focus(this.from,this.to,this.around)}retry(){this.failed.clear(),this.pump()}dispose(){this.disposed=!0,this.cancelUploads?.(),this.cancelUploads=null,this.pending.clear();for(const n of this.inFlight.values())n.abort();for(const n of this.owned)n.dispose();this.owned.clear()}distance(n){const e=n<this.from?this.from-n:n>this.to?n-this.to:0;if(!this.wrap)return e;const t=this.sources.length;return Math.min(e,n+t-this.to,this.from+t-n)}pump(){if(this.disposed||this.inFlight.size>=hu)return;const n=t=>!this.textures[t]&&!this.inFlight.has(t)&&!this.pending.has(t)&&!this.failed.has(t)&&this.distance(t)<=this.radius,e=[...this.first.filter(t=>this.waiting.has(t)),...this.sources.map((t,i)=>i).sort((t,i)=>this.distance(t)-this.distance(i)||Math.abs(t-this.around)-Math.abs(i-this.around))];for(const t of e){if(this.inFlight.size>=hu)return;n(t)&&this.load(t)}}load(n){const e=new AbortController;this.inFlight.set(n,e),this.createTexture(this.sources[n],e.signal).then(t=>{if(this.disposed||e.signal.aborted){this.owned.delete(t)&&t.dispose();return}this.owned.has(t)&&(t.colorSpace=Bt,t.premultiplyAlpha=!0,t.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),t.needsUpdate=!0),this.waiting.has(n)||this.distance(n)<=uu?this.show(n,t):(this.pending.set(n,t),this.scheduleUploads())}).catch(t=>{this.disposed||e.signal.aborted||(this.failed.add(n),this.events.onError(n,t))}).finally(()=>{this.inFlight.get(n)===e&&(this.inFlight.delete(n),this.waiting.delete(n)&&!this.waiting.size&&this.settleFirst(),this.pump())})}show(n,e){this.renderer.initTexture(e),this.textures[n]=e,this.events.onLoad(n,e)}scheduleUploads(){if(!(this.cancelUploads||!this.pending.size))if(typeof requestIdleCallback=="function"){const n=requestIdleCallback(e=>this.uploadSome(e),{timeout:AS});this.cancelUploads=()=>cancelIdleCallback(n)}else{const n=requestAnimationFrame(()=>this.uploadSome());this.cancelUploads=()=>cancelAnimationFrame(n)}}uploadSome(n){this.cancelUploads=null;const e=[...this.pending.keys()].sort((i,s)=>this.distance(i)-this.distance(s)||Math.abs(i-this.around)-Math.abs(s-this.around));let t=0;for(const i of e){if(t>=TS&&!(n&&n.timeRemaining()>ES))break;const s=this.pending.get(i);this.pending.delete(i),this.show(i,s),t++}this.scheduleUploads()}async createTexture(n,e){if(n instanceof Rt)return n;const t=s=>(this.owned.add(s),s);if(typeof n=="string")return t(new Rt(await cf(n,e)));if(typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement)return t(new mn(n));if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement)return(!n.complete||!n.naturalWidth)&&await n.decode(),t(new Rt(n));const i=document.createElement("canvas");return i.width=n.width,i.height=n.height,i.getContext("2d").drawImage(n,0,0),t(new mn(i))}};function cf(n,e){return new Promise((t,i)=>{const s=new Image;s.crossOrigin="anonymous",s.decoding="async";const r=()=>{o(),s.src="",i(new DOMException("Page no longer needed","AbortError"))},o=()=>{s.onload=s.onerror=null,e?.removeEventListener("abort",r)};e?.addEventListener("abort",r,{once:!0}),s.onload=()=>{o(),s.decode().then(()=>t(s),()=>t(s))},s.onerror=()=>{o(),i(new Error(`Failed to load page image: ${n}`))},s.src=n})}async function CS(n){let e;return typeof n=="string"?e=new Rt(await cf(n)):n instanceof HTMLCanvasElement?e=new mn(n):((!n.complete||!n.naturalWidth)&&await n.decode(),e=new Rt(n)),e.wrapS=e.wrapT=Kn,e.needsUpdate=!0,e}var PS=class{entries=new Map;acquire(n,e){let t=this.entries.get(n);return t||(t={value:e(),users:0},this.entries.set(n,t)),t.users++,t.value}release(n){const e=this.entries.get(n);!e||--e.users>0||(this.entries.delete(n),e.value.dispose())}},du=new WeakMap;function hf(n){let e=du.get(n);return e||(e=new PS,du.set(n,e)),e}var Lt=384,fu=[[1,.108,-.049,.022],[.131,.016,-.014,.008],[-.039,-.018,0,.009],[.021,.005,.004,.009]],LS=.07,Oa=32,Ba=[[0,.537],[.001,.624],[.01,.675],[.05,.714],[.1,.733],[.25,.761],[.5,.788],[.75,.816],[.9,.835],[.95,.847],[.99,.867],[.999,.89],[1,.914]];function DS(n,e){const t=new Float32Array(n*n);for(let s=0;s<t.length;s++)t[s]=e();const i=(s,r)=>t[(r%n+n)%n*n+(s%n+n)%n];return(s,r)=>{const o=Math.floor(s),a=Math.floor(r),l=s-o,c=r-a,h=l*l*(3-2*l),u=c*c*(3-2*c),d=i(o,a)+(i(o+1,a)-i(o,a))*h,f=i(o,a+1)+(i(o+1,a+1)-i(o,a+1))*h;return d+(f-d)*u}}function pu(n){let e=0;for(const i of n)e+=i;e/=n.length;let t=0;for(const i of n)t+=(i-e)**2;return Math.sqrt(t/n.length)||1}var $i=null;function IS(){if($i)return $i;let n=7;const e=()=>(n=n*1664525+1013904223>>>0)/4294967296,t=new Float32Array(Lt*Lt);for(let f=0;f<t.length;f++)t[f]=Math.sqrt(-2*Math.log(1-e()))*Math.cos(2*Math.PI*e());const i=(f,g)=>t[(g+Lt)%Lt*Lt+(f+Lt)%Lt],s=fu.length-1,r=new Float32Array(Lt*Lt);for(let f=0;f<Lt;f++)for(let g=0;g<Lt;g++){let x=0;for(let p=-s;p<=s;p++){const m=fu[Math.abs(p)];for(let _=-s;_<=s;_++)x+=m[Math.abs(_)]*i(g+_,f+p)}r[f*Lt+g]=x}const o=DS(Oa,e),a=new Float32Array(Lt*Lt);for(let f=0;f<Lt;f++)for(let g=0;g<Lt;g++)a[f*Lt+g]=o(g/Lt*Oa,f/Lt*Oa);const l=LS*pu(r)/pu(a);for(let f=0;f<r.length;f++)r[f]+=a[f]*l;const c=Array.from(r.keys()).sort((f,g)=>r[f]-r[g]);$i=document.createElement("canvas"),$i.width=$i.height=Lt;const h=$i.getContext("2d"),u=h.createImageData(Lt,Lt);let d=1;return c.forEach((f,g)=>{const x=g/(c.length-1);for(;Ba[d][0]<x;)d++;const[p,m]=Ba[d-1],[_,E]=Ba[d],y=Math.round(255*(m+(E-m)*(x-p)/(_-p))),T=f*4;u.data[T]=u.data[T+1]=u.data[T+2]=y,u.data[T+3]=255}),h.putImageData(u,0,0),$i}function US(n){const e=new mn(IS());return e.wrapS=e.wrapT=Kn,e.anisotropy=n.capabilities.getMaxAnisotropy(),e}var mu="paper-pattern",FS=class{constructor(n,e){this.events=e,this.backBlank={texture:lo(n),color:gu(n)}}events;blank=lo("#fcfcf9");backBlank;pattern=null;disposed=!1;back(n){const e=gu(n);return e!==this.backBlank.color&&(this.backBlank.texture.dispose(),this.backBlank={texture:lo(n),color:e}),this.backBlank.texture}grain(n,e){const t=n.paper.grain,i=t===!0||t===void 0?"builtin":t===!1?"none":t;if(this.pattern?.key===i)return this.pattern.texture;if(this.pattern?.release(),i==="builtin"){const r=hf(e),o=r.acquire(mu,()=>US(e));return this.pattern={texture:o,key:i,release:()=>r.release(mu)},o}const s={texture:lo("#000000"),key:i,release:()=>s.texture.dispose()};return this.pattern=s,i!=="none"&&CS(i).then(r=>{if(this.pattern!==s||this.disposed)return r.dispose();s.texture.dispose(),s.texture=r,this.events.onGrain()},r=>{this.pattern===s&&!this.disposed&&this.events.onError(r)}),s.texture}dispose(){this.disposed=!0,this.pattern?.release(),this.pattern=null,this.blank.dispose(),this.backBlank.texture.dispose()}};function gu(n){return new Je(n).getHexString()}var NS=.02,kS=`
  uniform vec3 uPileLift; // x: where the bulge peaks, y: its height, z: how much it drops at the edge
  uniform float uConeTaper; // bulge difference between top and bottom of the pile
  uniform vec2 uPileReach; // horizontal squeeze at the top/bottom so the bulged page keeps its length
  uniform vec4 uTailCurl; // fold direction (cos, sin), where the curl starts, curl length
  uniform float uTailBend; // how far the free end bows back
  uniform vec3 uCone; // radius change per unit of y, radius at the top, how far to wrap
  uniform vec2 uFlipRotation;
  uniform float uStackGap; // how far the sheet stands off the spine, along its own normal

  float sheetPileLift(float x) {
    float t = 1.0 - min(x / uPileLift.x, 1.0);
    float fall = uPileLift.z * smoothstep(uPileLift.x, 1.0, x);
    return uPileLift.y * sqrt(1.0 - t * t) * (1.0 - fall);
  }

  // Roll a flat point around a cone whose axis is the spine. The radius grows from the
  // top of the page to the bottom (spread), so pages roll up tighter at one end.
  vec3 sheetConeWrap(float x, float y, float spread, float topRadius, float maxWrap) {
    float apexY = SHEET_ASPECT * 0.5;
    float rowRadius = max(1e-5, topRadius + (apexY - y) * spread);
    float cosCone = sqrt(max(0.0, 1.0 - spread * spread));

    float slant = x * spread / rowRadius;
    float lean = abs(slant) < 1e-3 ? 1.0 - slant * slant / 3.0 : atan(slant) / slant;
    float wrap = (x / rowRadius) * lean;

    if (wrap <= maxWrap) {
      float reach = length(vec2(rowRadius, x * spread));
      return vec3(
        reach * sin(wrap),
        y + spread * (reach * (1.0 - cos(wrap)) - x * x / (rowRadius + reach)),
        reach * cosCone * (1.0 - cos(wrap))
      );
    }

    // past the wrap angle the sheet leaves the cone and carries on straight
    float fan = spread * maxWrap;
    float fanSin = abs(fan) < 1e-3 ? 1.0 - fan * fan / 6.0 : sin(fan) / fan;
    float fanVers = abs(fan) < 1e-3 ? fan * (0.5 - fan * fan / 24.0) : (1.0 - cos(fan)) / fan;

    float along = x * spread * sin(fan) + rowRadius * cos(fan);
    float past = x * cos(fan) - rowRadius * maxWrap * fanSin;
    float lift = along * (1.0 - cos(maxWrap)) + past * sin(maxWrap);

    return vec3(
      along * sin(maxWrap) + past * cos(maxWrap),
      y + rowRadius * maxWrap * fanVers - x * sin(fan) + spread * lift,
      cosCone * lift
    );
  }

  vec3 sheetShape(float x, float y) {
    return sheetConeWrap(x, y, uCone.x, uCone.y, uCone.z);
  }

  // the unread pile bulges up off the spine
  vec3 sheetPile(float u, float y) {
    float row = y / SHEET_ASPECT;
    float taper = 1.0 + uConeTaper * row;
    float x = u * mix(uPileReach.x, uPileReach.y, row + 0.5);
    return vec3(x, y, sheetPileLift(x) * taper);
  }

  // the free end of a turning page bows back past the roll
  vec3 sheetTailCurl(vec2 p) {
    float cosTilt = uTailCurl.x;
    float sinTilt = uTailCurl.y;
    float along = p.x * cosTilt + p.y * sinTilt;
    float across = -p.x * sinTilt + p.y * cosTilt;
    float beyond = max(0.0, along - uTailCurl.z);
    float angle = beyond / uTailCurl.w * uTailBend;
    float sinc = abs(angle) < 1e-4 ? 1.0 : sin(angle) / angle;
    float versine = abs(angle) < 1e-4 ? 0.0 : (1.0 - cos(angle)) / angle;
    float curledAlong = along - beyond + beyond * sinc;
    return vec3(
      curledAlong * cosTilt - across * sinTilt,
      curledAlong * sinTilt + across * cosTilt,
      beyond * versine
    );
  }

  vec3 sheetPosition(vec2 uv, float noise) {
    vec3 pile = sheetPile(uv.x, (uv.y - 0.5) * SHEET_ASPECT);
    vec3 curled = sheetTailCurl(pile.xy);
    vec3 shape = sheetShape(curled.x, curled.y);
    // the curl lifts off the cone surface, along its normal
    if (curled.z != 0.0) {
      vec3 alongX = sheetShape(curled.x + 1e-3, curled.y) - shape;
      vec3 alongY = sheetShape(curled.x, curled.y + 1e-3) - shape;
      shape += normalize(cross(alongX, alongY)) * curled.z;
    }

    // spin about the spine
    float z = shape.z + pile.z + uStackGap;
    return vec3(
      shape.x * uFlipRotation.x - z * uFlipRotation.y,
      shape.y,
      shape.x * uFlipRotation.y + z * uFlipRotation.x
    );
  }
`,OS=`
  uniform vec3 uTrim; // x: whether to trim, y/z: the top page's right edge at its bottom/top

  // Right of the spine, a page under the top one only shows where the top page is: whatever
  // reaches past its right or bottom edge is trimmed away.
  bool sheetHidden(vec3 p) {
    if (uTrim.x < 0.5 || p.x <= 0.0) return false;
    float row = clamp(p.y / SHEET_ASPECT + 0.5, 0.0, 1.0);
    return p.x > mix(uTrim.y, uTrim.z, row) || p.y < -0.5 * SHEET_ASPECT;
  }
`;function BS(n){return new ei(1,n,64,Math.round(64*n))}function zS(n,e){const t=`single-geometry:${e}`;return{geometry:n.acquire(t,()=>BS(e)),release:()=>n.release(t)}}function HS(n,e,t,i,s,r){const o={uPileLift:{value:new I(1,0,0)},uPileReach:{value:new he(1,1)},uConeTaper:{value:0},uTailCurl:{value:new Et(1,0,1,1)},uTailBend:{value:0},uCone:{value:new I(0,1,0)},uFlipRotation:{value:new he(1,0)},uTrim:{value:new I(0,1,1)},uStackGap:{value:0},uFront:{value:e},uBack:{value:t},uPattern:{value:i},uSpineContact:r.spineContact,uLightDirection:r.lightDirection,uSheetOrigin:r.origin};return{mesh:of(n,o,{vertexChunk:kS,fragmentChunk:OS,epsilon:NS,shadowOffsetX:-.004},s),uniforms:o}}var qi={startTime:.22,firstFlipTime:1.4,fastestFlipTime:1,speedUpSheets:7,firstGapShare:.16,fastestGapShare:.1,moveSlopPx:40},Ts={progressSmoothTime:.9,clickSlopPx:5,claimSteepness:1.6,claimAfterPx:4,fallTime:1.3,fallTimeExponent:.5},vu={flipTime:1.2,settlePower:.8},GS={smoothTime:.05},za={tiltDeg:8,flipTimeMin:.95,flipTimeMax:1.08},rn={spineOpenStartDeg:100,spineOpenEndDeg:190,spineOpenPower:4,coneEvenPower:6,lastPageEven:.98,coverTopRadius:.04,backTopRadius:.18,coverBottomRadius:.01,backBottomRadius:.05,radiusSpacingClump:7.5,radiusSpacingSeed:41.5,fallDelayPages:15,fallDurationPages:3},Es={midLeadPower:2,midBow:2,midBowFlatFrom:.3,midBowFlatTo:.8,midRollScale:2.5},Ut={liftHeight:.08,liftPeakX:.4,liftEdgeDrop:.5,liftShutShare:.67,liftDepthFalloff:.5,coneTaper:-.6,renderDepth:3},VS={pushRight:.02},xu={clump:1.6,seed:41},ho=Math.PI*2,pn=St.clamp,Gn=n=>{const e=pn(n,0,1);return e*e*(3-2*e)},_u=(n,e)=>{const t=43758.5453*Math.sin(12.9898*n+78.233*e);return t-Math.floor(t)},WS=class{group=new zt;maxPosition;settings;halfHeight;liftHeight;input;metrics;requestFrame;geometry;releaseGeometry;sheets;count;radiusSpacing;catchUp;fallDelay;fallDuration;abort=new AbortController;shading;current;turned=0;flights=[];drag=null;press=null;hold=null;touch=null;dirty=!0;last=0;ray=new rs;hit=new I;constructor(n){this.settings=n.settings,this.halfHeight=n.settings.pageAspect/2,this.liftHeight=Ut.liftHeight*n.settings.paper.bulge,this.input=n.input,this.metrics=n.metrics,this.requestFrame=n.requestFrame,this.shading=n.shading,this.count=n.textures.length,this.maxPosition=this.count,this.current=pn(Math.round(n.position),0,Math.max(this.count-1,0));const{geometry:e,release:t}=zS(n.shared,n.settings.pageAspect);this.geometry=e,this.releaseGeometry=t,this.sheets=n.textures.map((h,u)=>{const{mesh:d,uniforms:f}=HS(this.geometry,h,n.blank,n.pattern,n.settings,n.shading);return this.group.add(d),{index:u,mesh:d,uniforms:f,progress:u<this.current?1:0,grabX:1,grabXTarget:1,grabY:0,grabYTarget:0,wobble:{tiltDeg:0,flipTime:1}}});const i=this.count,s=[];for(let h=0;h<i-1;h++)s.push(Math.pow(_u(h+1,rn.radiusSpacingSeed),rn.radiusSpacingClump));const r=s.reduce((h,u)=>h+u,0);this.radiusSpacing=[0];let o=0;for(const h of s)o+=.1/s.length+.9*(r>0?h/r:1/s.length),this.radiusSpacing.push(o);const a=[];for(let h=0;h<i;h++)a.push(Math.pow(_u(h+1,xu.seed+.5),xu.clump));const l=a.reduce((h,u)=>h+u,0);this.catchUp=[0],o=0;for(const h of a)o+=l>0?h/l*i:1,this.catchUp.push(o);const c=i-2-Ut.renderDepth;this.fallDuration=pn(c/2,1,rn.fallDurationPages),this.fallDelay=pn(c-this.fallDuration,0,rn.fallDelayPages),this.bindInput()}get position(){return this.current}get turning(){return this.flights.length>0||this.drag!==null}activeSide="both";pagesInView(){const n=Math.floor(this.paced(this.turned)-1-this.fallDelay-this.fallDuration);let e=pn(n+1,0,Math.max(this.current-1,0)),t=Math.max(Math.min(this.current,this.count-1),this.pileTop()?.index??0);const i=this.flights.map(s=>s.sheet);this.drag&&i.push(this.drag.sheet);for(const s of i)e=Math.min(e,s.index),t=Math.max(t,s.index);return{from:e,to:Math.max(e,t)}}pileTop(){return this.sheets.find(n=>n.index>=this.current&&!this.busy(n))}setPageTexture(n,e){const t=this.sheets[n];t&&(t.uniforms.uFront.value=e,this.wake())}cancelInput(){this.cancelHold(),this.touch=null,this.press&&this.release(new PointerEvent("pointercancel",{pointerId:this.press.id})),this.wake()}setShadows(n){this.settings.lighting.shadows=n;for(const e of this.sheets)e.mesh.castShadow=e.mesh.receiveShadow=n;this.wake()}dispose(){this.cancelHold(),this.abort.abort();for(const n of this.sheets)lf(n.mesh);this.releaseGeometry()}randomWobble(){return this.settings.motion.jitter?{tiltDeg:St.lerp(-8,za.tiltDeg,Math.random()),flipTime:St.lerp(za.flipTimeMin,za.flipTimeMax,Math.random())}:{tiltDeg:0,flipTime:1}}seconds(n){return n/this.settings.motion.speed}wake(){this.dirty=!0,this.requestFrame()}pileHeight(n){return this.liftHeight/(1+n*Ut.liftDepthFalloff)*(1-.002*n)}pileReach(n){if(n<=1e-6)return 1;const e=i=>{const s=1-Math.min(i/Ut.liftPeakX,1);return n*Math.sqrt(1-s*s)*(1-Ut.liftEdgeDrop*Gn((i-Ut.liftPeakX)/(1-Ut.liftPeakX)))};let t=0;for(let i=0;i<6;i++){const s=(i/6)**2,r=((i+1)/6)**2;t+=Math.hypot(r-s,e(r)-e(s))}return Math.max(2-t,.5)}paced(n){const e=Math.min(Math.floor(n),this.count);return e>=this.count?this.count:this.catchUp[e]+(this.catchUp[e+1]-this.catchUp[e])*(n-e)}closing(n){return pn(n-(this.count-1),0,1)}shutting(n){return Gn((this.closing(n)-.6)/.4)}fallOf(n,e,t){return Math.max(Gn((e-(n.index+1)-this.fallDelay)/this.fallDuration),t)}inFlight(n){return this.flights.some(e=>e.sheet===n)}busy(n){return this.inFlight(n)||this.drag?.sheet===n}pointAt(n,e){return this.input.ray(n,e,this.ray)?Nc(this.group,this.ray,this.hit):null}grab(n,e,t){e&&(n.grabXTarget=Math.min(Math.abs(e.x),1),n.grabYTarget=pn(e.y/this.halfHeight,-1,1),t&&(n.grabX=n.grabXTarget,n.grabY=n.grabYTarget))}canTurn(n){return n?this.current<(this.settings.loop?this.count:this.count-1):this.current>0}sheetAt(n){if(!n)return null;const e=n.x>=0;return this.canTurn(e)?{sheet:this.sheets[e?this.current:this.current-1],forward:e}:null}commit(n,e){n&&e===1?this.current++:!n&&e===0&&this.current--,this.wake()}fly(n,e,t,i=vu.flipTime){this.commit(e,t);const s=n.progress;this.flights=this.flights.filter(r=>r.sheet!==n),this.flights.push({sheet:n,from:s,to:t,start:performance.now(),duration:1e3*this.seconds(i)*n.wobble.flipTime*Math.max(.2,Math.abs(t-s))})}flip(n){if(!this.canTurn(n))return!1;const e=this.sheets[n?this.current:this.current-1];return this.drag?.sheet===e?!1:(this.inFlight(e)||(e.wobble=this.randomWobble()),this.fly(e,n,n?1:0),!0)}jumpTo(n){this.cancelHold(),this.drag=null,this.flights=[],this.current=pn(Math.round(n),0,Math.max(this.count-1,0));for(const e of this.sheets)e.progress=e.index<this.current?1:0;this.wake()}bindInput(){const n=this.input.element,e=this.abort.signal,{interaction:t}=this.settings;n.addEventListener("pointermove",i=>{if(this.press&&i.pointerId!==this.press.id||(this.hold&&this.moved(i,this.hold.fired?qi.moveSlopPx:void 0)&&this.cancelHold(),!this.drag||!this.press||!t.drag))return;const s=this.metrics.dragDelta?.(i.clientX-this.press.x,i.clientY-this.press.y)??i.clientX-this.press.x;this.drag.progress=pn(this.drag.base-s/this.drag.rectWidth/this.settings.motion.dragDistance,0,1),this.grab(this.drag.sheet,this.pointAt(i.clientX,i.clientY),!1),this.wake()},{signal:e}),n.addEventListener("pointerdown",i=>{if(this.press&&!i.isPrimary||i.button!==0||!(t.drag||t.click||t.hold)||!this.input.covers(i.clientX,i.clientY))return;const s=this.pointAt(i.clientX,i.clientY),r=this.sheetAt(s);if(!r)return;const o=r.sheet;this.inFlight(o)||(o.wobble=this.randomWobble()),this.grab(o,s,!0),this.flights=this.flights.filter(a=>a.sheet!==o),this.press={id:i.pointerId,x:i.clientX,y:i.clientY},this.drag={sheet:o,forward:r.forward,base:o.progress,progress:o.progress,rectWidth:this.metrics.dragWidth,speed:0},this.cancelHold(),t.hold&&(this.hold={forward:r.forward,x:i.clientX,y:i.clientY,count:0,fired:!1,timer:setTimeout(()=>this.holdTick(),1e3*qi.startTime)});try{n.setPointerCapture(i.pointerId)}catch{}this.wake()},{signal:e}),n.addEventListener("pointerup",i=>this.release(i),{signal:e}),n.addEventListener("pointercancel",i=>this.release(i),{signal:e}),n.addEventListener("lostpointercapture",i=>this.release(i),{signal:e}),t.drag&&(n.addEventListener("touchstart",i=>{const s=i.touches[0],r=i.touches.length===1&&this.input.covers(s.clientX,s.clientY);this.touch=r?{x:s.clientX,y:s.clientY,claimed:!1}:null},{passive:!0,signal:e}),n.addEventListener("touchmove",i=>{if(!this.touch||i.touches.length!==1)return;if(this.touch.claimed){i.cancelable&&i.preventDefault();return}if(!i.cancelable){this.touch=null;return}const s=i.touches[0],r=Math.abs(s.clientX-this.touch.x),o=Math.abs(s.clientY-this.touch.y);r>=Ts.claimAfterPx&&o<r*Ts.claimSteepness&&(this.touch.claimed=!0,i.preventDefault())},{passive:!1,signal:e}))}moved(n,e=Ts.clickSlopPx){return this.press!==null&&(n.clientX-this.press.x)**2+(n.clientY-this.press.y)**2>e*e}cancelHold(){this.hold&&clearTimeout(this.hold.timer),this.hold=null}holdTick(){const n=this.hold;if(!n)return;if(n.fired||(n.fired=!0,this.drag=null),!this.canTurn(n.forward))return this.cancelHold();const e=this.sheets[n.forward?this.current:this.current-1],t=(s,r)=>s+(r-s)*Math.min(n.count/qi.speedUpSheets,1);this.inFlight(e)||(e.wobble=this.randomWobble()),this.grab(e,this.pointAt(n.x,n.y),!0);const i=t(qi.firstFlipTime,qi.fastestFlipTime);this.fly(e,n.forward,n.forward?1:0,i),n.count++,n.timer=setTimeout(()=>this.holdTick(),1e3*this.seconds(i)*t(qi.firstGapShare,qi.fastestGapShare))}release(n){if(!this.press||n.pointerId!==this.press.id)return;const e=n.type!=="pointerup",t=this.moved(n);this.cancelHold();const i=this.drag;this.drag=null,this.press=null;try{this.input.element.releasePointerCapture(n.pointerId)}catch{}if(this.wake(),!i)return;const{interaction:s}=this.settings;if(!t||!s.drag){!e&&s.click?this.fly(i.sheet,i.forward,i.forward?1:0):this.settleBack(i);return}let r;if(e)r=i.forward?0:1;else{const h=i.forward?i.progress-i.base:i.base-i.progress;r=i.forward===h>=this.settings.motion.commitThreshold?1:0}this.commit(i.forward,r);const o=i.sheet,a=r===1?i.speed:-i.speed,l=Math.max(Math.abs(r-o.progress),.001),c=this.seconds(Ts.fallTime)*o.wobble.flipTime*Math.pow(l,Ts.fallTimeExponent);this.flights=this.flights.filter(h=>h.sheet!==o),this.flights.push({sheet:o,from:o.progress,to:r,start:performance.now(),duration:1e3*c,launch:pn(a*c/l,0,2)})}settleBack(n){const e=n.forward?0:1;n.sheet.progress!==e&&(this.flights.push({sheet:n.sheet,from:n.sheet.progress,to:e,start:performance.now(),duration:300}),this.wake())}update(n){for(let d=this.flights.length-1;d>=0;d--){const f=this.flights[d],g=pn((n-f.start)/f.duration,0,1);let x;if(f.launch===void 0)x=.5*(1-Math.cos((1-Math.pow(1-g,vu.settlePower))*Math.PI));else{const p=g*g,m=p*g;x=(m-2*p+g)*f.launch+(3*p-2*m)}f.sheet.progress=f.from+(f.to-f.from)*x,n>=f.start+f.duration&&(this.flights.splice(d,1),this.dirty=!0)}if(this.count&&this.current>=this.count&&!this.flights.length&&!this.drag){this.current=0;for(const d of this.sheets)d.progress=0;this.dirty=!0}const e=this.last?pn((n-this.last)/1e3,0,.1):1/60;if(this.last=n,this.drag){const d=this.drag.sheet,f=(this.drag.progress-d.progress)*(1-Math.pow(.01,e/Ts.progressSmoothTime));d.progress+=f,this.drag.speed=e>0?f/e:0}let t=this.flights.length>0||this.drag!==null;const i=1-Math.pow(.001,e/GS.smoothTime);for(const d of this.sheets){for(const f of["grabX","grabY"]){const g=f==="grabX"?d.grabXTarget:d.grabYTarget,x=g-d[f];Math.abs(x)<1e-4?d[f]=g:(d[f]+=x*i,t=!0)}if(!this.busy(d)){const f=d.index<this.current?1:0;d.progress!==f&&(d.progress=f,this.dirty=!0)}}if(!t&&!this.dirty)return!1;let s=0;for(const d of this.sheets)s+=d.progress;this.turned=s;const r=this.pileEdge(s),o=this.pileTop();for(const d of this.sheets)this.applyUniforms(d,s,r),d.uniforms.uTrim.value.set(d===o||this.busy(d)?0:1,r.bottom,r.top);const a=this.closing(s)>0,l=this.paced(s),c=this.shutting(s),h=Math.max(this.current,o?.index??this.current);for(const d of this.sheets){const f=d.index;d.mesh.visible=a||f<=h+Ut.renderDepth||this.busy(d);const g=f>=this.current?f-this.current:this.fallOf(d,l,c)>=1?this.count-this.current+f:this.current-1-f;af(d.mesh,g,this.count,this.busy(d),this.settings.paper.depthBias)}const u=Gn(this.count>1?this.paced(s)/(this.count-1):0)*(1-this.shutting(s));return this.group.position.x=VS.pushRight*u,this.group.position.z=-.05*u,this.shading.origin.value.copy(this.group.position),this.dirty=!1,!0}pileEdge(n){const e=Ut.liftShutShare+(1-Ut.liftShutShare)*(this.count?this.paced(n)/this.count:0),t=e+(Ut.liftShutShare-e)*this.shutting(n),i=this.pileHeight(0)*Math.max(t,.001);return{bottom:this.pileReach(i*(1-.5*Ut.coneTaper)),top:this.pileReach(i*(1+.5*Ut.coneTaper))}}applyUniforms(n,e,t){const i=n.uniforms,s=this.count,r=n.progress,o=this.paced(e),a=this.catchUp[Math.max(s-1,0)],l=a>0?o/a:1,c=Math.min(l,1),h=(rn.spineOpenStartDeg+(rn.spineOpenEndDeg-rn.spineOpenStartDeg)*Math.pow(c,rn.spineOpenPower))*Math.PI/180,u=this.shutting(e),d=this.closing(e)>=1?1:0,f=this.fallOf(n,o,u),g=this.radiusSpacing[n.index]??0,x=rn.coverTopRadius+(rn.backTopRadius-rn.coverTopRadius)*g,p=rn.coverBottomRadius+(rn.backBottomRadius-rn.coverBottomRadius)*g,m=Math.pow(Math.min(l*rn.lastPageEven,1),rn.coneEvenPower),_=(x+p)/2,E={top:(x+(_-x)*m)*(1-f),bottom:(p+(_-p)*m)*(1-f)},y=f>=1,T=s?o/s:0,b=y?Math.max(0,s-e)+n.index:Math.max(0,n.index-e),R=y?Math.max(Gn(o-(n.index+1)-this.fallDelay-this.fallDuration),d):(1-r)*(1-u),S=Ut.liftShutShare+(1-Ut.liftShutShare)*T,A=this.pileHeight(b)*(y?Ut.liftShutShare:S),P=(A+(this.pileHeight(n.index)*Ut.liftShutShare-A)*u)*R;i.uPileLift.value.set(Ut.liftPeakX,P,Ut.liftEdgeDrop);const U=S+(Ut.liftShutShare-S)*u,F=Math.max(this.pileHeight(0)*Math.max(U,.001),1e-6);i.uConeTaper.value=Ut.coneTaper*P/F;const k=1-.5*Math.max(n.grabY,0)*n.grabX,C=n.grabY*(.5+.5*n.grabX)*this.settings.motion.maxTilt+n.wobble.tiltDeg;if(y){i.uCone.value.set(0,1,0),i.uTailBend.value=0;const ge=ho*r;i.uFlipRotation.value.set(Math.cos(ge),Math.sin(ge))}else this.shapeTurn(n,r,h,E,C*k*Math.PI/180);const D=i.uPileLift.value.y,B=i.uConeTaper.value;let z=this.pileReach(D*(1-.5*B)),$=this.pileReach(D*(1+.5*B));!this.busy(n)&&(y||n.index>=this.current)&&(z=Math.min(z,t.bottom),$=Math.min($,t.top)),i.uPileReach.value.set(z,$);const V=s-1-n.index,X=Math.max(0,e-1-n.index),W=Gn(r),ve=y?-(n.index+1):V+(X-V)*W;i.uStackGap.value=this.settings.paper.sheetGap*(ve+(V-ve)*u)}shapeTurn(n,e,t,i,s){const r=n.uniforms,o=this.halfHeight,a=this.settings.pageAspect,l=this.settings.motion.curl,c=ho*(1-Math.pow(1-e,Es.midLeadPower)),h=ho*e,u=Math.min(c,t),d=c-u,f=d/Math.max(ho-t,.001),g=1+(Es.midRollScale-1)*(1-Gn(f)),x=Math.max(i.top*g,1e-4),p=pn((i.bottom*g-x)/a,-.999,.999),m=A=>{const P=Math.max(1e-5,x+(o-A)*p),U=pn(p*d,-1.5,1.5);return Math.abs(p)<1e-4?P*d:P*Math.tan(U)/p},_=s+(Math.atan2(m(-o)-m(o),a)-s)*Gn(e),E=Math.cos(_),y=Math.sin(_),T=Math.max(m(o)*E+o*y,m(-o)*E-o*y),b=E+o*Math.abs(y)-T,R=1-Gn(c/t);r.uPileLift.value.y*=R,r.uConeTaper.value*=R,r.uCone.value.set(p,x,d),r.uTailCurl.value.set(E,y,T,Math.max(b,.001));const S=1-Gn((e-Es.midBowFlatFrom)/(Es.midBowFlatTo-Es.midBowFlatFrom));r.uTailBend.value=Math.max(Es.midBow*l*S*Math.min(h-c,0),-c),r.uFlipRotation.value.set(Math.cos(u),Math.sin(u))}},jl=.03,yu=1.2,Su=46,XS=n=>`
  // resting bulge across the page: up off the spine, a slight dip, up again, down at the edge
  const float LIFT_MAX_X = 0.14;
  const float LIFT_MAX_Z = 0.04;
  const float LIFT_DIP_X = 0.58;
  const float LIFT_DIP_Z = 0.035;
  const float LIFT_MID_X = 0.72;
  const float LIFT_MID_Z = 0.04;
  const float LIFT_EDGE_Z = 0.03;

  const float BULGE = ${n.paper.bulge.toFixed(4)};
  const float WRINKLE = ${(.13*n.paper.wrinkles).toFixed(4)};
  const bool NESTED = ${n.paper.depthBias?"false":"true"};

  uniform float uFlipProgress;
  uniform float uWrinkleSide;
  uniform float uBendAngle;
  uniform vec2 uFold;
  uniform vec2 uCurl;
  uniform vec2 uFlipRotation;
  uniform float uDirection;
  uniform float uStackLift;
  uniform float uStackGap;

  attribute vec3 aNoise;

  float sheetRestingLift(float x) {
    if (x <= LIFT_MAX_X) return LIFT_MAX_Z * sin(x / LIFT_MAX_X * 1.57079633);
    if (x <= LIFT_DIP_X) return mix(LIFT_MAX_Z, LIFT_DIP_Z, smoothstep(LIFT_MAX_X, LIFT_DIP_X, x));
    if (x <= LIFT_MID_X) return mix(LIFT_DIP_Z, LIFT_MID_Z, smoothstep(LIFT_DIP_X, LIFT_MID_X, x));
    float t = (x - LIFT_MID_X) / (1.0 - LIFT_MID_X);
    return mix(LIFT_MID_Z, LIFT_EDGE_Z, 1.0 - cos(t * 1.57079633));
  }

  vec3 sheetPosition(vec2 uv, float noise) {
    float x = uv.x;
    float y = (uv.y - 0.5) * SHEET_ASPECT;

    // Every sheet shares the same wrinkles and bulge, scaled by its place in the stack,
    // so stacked sheets nest inside each other instead of crossing. Where a wrinkle dips, a
    // bigger one dips below the sheets under it, which only the depth bias hides; without it
    // the dips are the same on every sheet.
    float wrinkle = uWrinkleSide * (mix(noise, 1.0 - noise, uFlipProgress) - 0.5) * smoothstep(0.0, 0.35, x) * WRINKLE;
    wrinkle *= NESTED && wrinkle < 0.0 ? 1.0 : uStackLift;
    float lift = sheetRestingLift(x) * BULGE * uStackLift;

    // bend with constant curvature past the fold line, trailing against the turn
    float u = x * uFold.x + y * uFold.y;
    float v = -x * uFold.y + y * uFold.x;
    float beyond = max(0.0, u - uCurl.x);
    float angle = beyond / uCurl.y * uBendAngle;
    float sinc = abs(angle) < 1e-4 ? 1.0 : sin(angle) / angle;
    float versine = abs(angle) < 1e-4 ? 0.0 : (1.0 - cos(angle)) / angle;
    float bentU = u - beyond + beyond * sinc;
    float bentZ = -uDirection * beyond * versine;

    vec3 p = vec3(bentU * uFold.x - v * uFold.y, bentU * uFold.y + v * uFold.x, bentZ);

    // turn about the spine
    p = vec3(p.x * uFlipRotation.x - p.z * uFlipRotation.y, p.y, p.x * uFlipRotation.y + p.z * uFlipRotation.x);

    p.z += lift + wrinkle + uStackGap;
    return p;
  }
`;function As(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function $S(n,e){const t=Math.floor(n),i=Math.floor(e),s=n-t,r=e-i,o=s*s*(3-2*s),a=r*r*(3-2*r),l=As(t,i)+(As(t+1,i)-As(t,i))*o,c=As(t,i+1)+(As(t+1,i+1)-As(t,i+1))*o;return l+(c-l)*a}function Ha(n,e,t){let i=n/yu+Su*13.37,s=(e-.5)*t/yu+Su*7.77,r=0,o=.5;for(let a=0;a<3;a++)r+=o*$S(i,s),o*=.5,i*=2,s*=2;return r}var Mu=new Map;function qS(n){const e=new ei(1,n,64,Math.round(64*n));let t=Mu.get(n);if(!t){const i=e.attributes.uv;t=new Float32Array(i.count*3);for(let s=0;s<i.count;s++){const r=i.getX(s),o=i.getY(s);t[s*3]=Ha(r,o,n),t[s*3+1]=Ha(r+jl,o,n),t[s*3+2]=Ha(r,o+jl/n,n)}Mu.set(n,t)}return e.setAttribute("aNoise",new gn(t,3)),e}function YS(n,e){const t=`spread-geometry:${e}`;return{geometry:n.acquire(t,()=>qS(e)),release:()=>n.release(t)}}function KS(n,e,t,i,s,r){const o={uFlipProgress:{value:0},uWrinkleSide:{value:-1},uBendAngle:{value:0},uFold:{value:new he(1,0)},uCurl:{value:new he(0,1)},uFlipRotation:{value:new he(1,0)},uDirection:{value:1},uStackLift:{value:1},uStackGap:{value:0},uFront:{value:e},uBack:{value:t},uPattern:{value:i},uSpineContact:r.spineContact,uLightDirection:r.lightDirection,uSheetOrigin:r.origin};return{mesh:of(n,o,{vertexChunk:XS(s),epsilon:jl,noise:!0,shadowOffsetX:.004},s),uniforms:o}}var Cn={arc:.88,arcJitter:.2,angleJitter:.3,tiltJitterDeg:6,cornerRollMax:2.3,directionSmoothTime:.4,smoothTime:.5,settleEpsilon:1e-4},Ga={smoothTime:2,gapToSheetAbove:.1},Yi={startTime:.22,firstFlipTime:1.2,fastestFlipTime:.5,speedUpSheets:20,firstGapShare:.15,fastestGapShare:.05,moveSlopPx:40},Qs={progressSmoothTime:.9,fallTime:1,fallTimeExponent:.5,landingSpeed:.5,clickSlopPx:5},Va={flipTime:.85,followArcGainMin:1,followArcGainMax:1.08},Vn=St.clamp,Wa=(n,e)=>1-Math.pow(.001,e/n);function Xa(n,e,t){return e<=1?1:.31+.69*(n+(e-1-2*n)*(1-t))/(e-1)}function ZS(n,e,t){const i=Vn((t-.25)/.5,0,1);return e-1-n+(2*n-e+1)*i*i*(3-2*i)}var JS=class{group=new zt;maxPosition;settings;halfHeight;input;metrics;requestFrame;geometry;releaseGeometry;sheets;abort=new AbortController;shading;current;flights=[];drag=null;press=null;hold=null;hover={active:!1,x:0,y:0};hovered=-1;leader=-1;dirty=!0;last=0;ray=new rs;hit=new I;constructor(n){this.settings=n.settings,this.halfHeight=n.settings.pageAspect/2,this.input=n.input,this.metrics=n.metrics,this.requestFrame=n.requestFrame,this.shading=n.shading;const e=Math.ceil(n.textures.length/2);this.maxPosition=e,this.current=Vn(Math.round(n.position),0,e);const{geometry:t,release:i}=YS(n.shared,n.settings.pageAspect);this.geometry=t,this.releaseGeometry=i,this.sheets=[];for(let s=0;s<e;s++){const r=n.textures[2*s],o=n.textures[2*s+1]??n.blank,{mesh:a,uniforms:l}=KS(this.geometry,r,o,n.pattern,n.settings,n.shading);this.sheets.push({index:s,mesh:a,uniforms:l,progress:s<this.current?1:0,direction:1,directionSmooth:1,curve:{arc:0,angleDeg:0},curveTarget:{arc:0,angleDeg:0},wobble:{arc:.5,angle:.5,tilt:0},liftBase:Xa(s,e,0),liftSpan:Xa(s,e,1)-Xa(s,e,0)}),this.group.add(a)}this.bindInput()}get position(){return this.current}get turning(){return this.flights.length>0||this.drag!==null}pagesInView(){let n=Math.max(2*this.current-1,0),e=2*this.current;for(const t of this.sheets)t.progress<=0||t.progress>=1||(n=Math.min(n,2*t.index),e=Math.max(e,2*t.index+1));return{from:n,to:e}}get activeSide(){return this.flights.length>0||this.drag!==null||this.hold!==null?"both":this.current===0?"right":this.current===this.sheets.length?"left":"both"}setPageTexture(n,e){const t=this.sheets[n>>1];t&&(n%2===0?t.uniforms.uFront.value=e:t.uniforms.uBack.value=e,this.wake())}cancelInput(){this.cancelHold(),this.hover.active=!1,this.press&&this.release(new PointerEvent("pointercancel",{pointerId:this.press.id})),this.wake()}setShadows(n){this.settings.lighting.shadows=n;for(const e of this.sheets)e.mesh.receiveShadow=n;this.wake()}dispose(){this.cancelHold(),this.abort.abort();for(const n of this.sheets)lf(n.mesh);this.releaseGeometry()}randomWobble(){return this.settings.motion.jitter?{arc:Math.random(),angle:Math.random(),tilt:2*Math.random()-1}:{arc:.5,angle:.5,tilt:0}}seconds(n){return n/this.settings.motion.speed}wake(){this.dirty=!0,this.requestFrame()}pointAt(n,e){return this.input.ray(n,e,this.ray)?Nc(this.group,this.ray,this.hit):null}arcLimit(n){const e=Math.abs(n)*Math.PI/180,t=Math.cos(e)/(1-this.halfHeight*Math.sin(e));return Cn.cornerRollMax/(Math.PI*t)}restingArc(n,e){return Math.min(Cn.arc*this.settings.motion.curl*(1-n.arc*Cn.arcJitter),this.arcLimit(e))}inFlight(n){return this.flights.some(e=>e.index===n)}sheetAt(n,e){const t=this.pointAt(n,e);if(!t)return null;const i=t.x>=0;return(i?this.current>=this.sheets.length:this.current<=0)?null:{index:i?this.current:this.current-1,forward:i}}curveFor(n,e,t){const i=this.sheets[t].wobble,s=this.settings.motion.maxTilt,r=this.pointAt(n,e);let o=0;if(r){let u=Math.atan2(r.y,r.x)*180/Math.PI;u>90&&(u=180-u),u<-90&&(u=-180-u);const d=1-i.angle*Cn.angleJitter;o=Vn(-(u/90)*s*Math.hypot(r.x,r.y)*d+i.tilt*Cn.tiltJitterDeg,-s,s)}const a=this.sheets[this.leader];if(!(a&&this.leader!==t&&this.inFlight(this.leader)&&!(a.direction>0?a.progress>.5:a.progress<.5)))return{arc:this.restingArc(i,o),angleDeg:o};const c=a.curveTarget;o=Vn(o,Math.min(0,c.angleDeg),Math.max(0,c.angleDeg));const h=St.lerp(Va.followArcGainMin,Va.followArcGainMax,i.arc);return{arc:Vn(c.arc*h,c.arc,this.arcLimit(o)),angleDeg:o}}setCurve(n,e,t){n.curveTarget.arc=e.arc,n.curveTarget.angleDeg=e.angleDeg,t&&(n.curve.arc=e.arc,n.curve.angleDeg=e.angleDeg)}commit(n,e){this.leader=n,this.sheets[n].wobble=this.randomWobble(),this.current=e===1?n+1:n,this.wake()}fly(n,e,t,i=Va.flipTime){this.commit(n,t);const s=this.sheets[n].progress;this.flights=this.flights.filter(r=>r.index!==n),this.flights.push({index:n,from:s,to:t,direction:e?1:-1,start:performance.now(),duration:1e3*this.seconds(i)*Math.max(.2,Math.abs(t-s))})}flip(n){if(n?this.current>=this.sheets.length:this.current<=0)return!1;const e=n?this.current:this.current-1;if(this.drag?.index===e)return!1;const t=this.sheets[e];if(!this.inFlight(e)){t.wobble=this.randomWobble();const i=t.wobble.tilt*Cn.tiltJitterDeg;this.setCurve(t,{arc:this.restingArc(t.wobble,i),angleDeg:i},!0)}return t.direction=n?1:-1,this.fly(e,n,n?1:0),!0}jumpTo(n){this.cancelHold(),this.drag=null,this.flights=[],this.current=Vn(Math.round(n),0,this.sheets.length);for(const e of this.sheets)e.progress=e.index<this.current?1:0,e.direction=e.directionSmooth=1;this.wake()}bindInput(){const n=this.input.element,e=this.abort.signal,{interaction:t}=this.settings;n.addEventListener("pointermove",i=>{if(!(this.press&&i.pointerId!==this.press.id)){if(this.hold&&this.moved(i,this.hold.fired?Yi.moveSlopPx:void 0)&&this.cancelHold(),this.drag&&this.press){if(!t.drag)return;const s=this.metrics.dragDelta?.(i.clientX-this.press.x,i.clientY-this.press.y)??i.clientX-this.press.x;this.drag.progress=Vn(this.drag.base-s/this.drag.rectWidth/this.settings.motion.dragDistance,0,1),this.drag.targetCurve=this.curveFor(i.clientX,i.clientY,this.drag.index)}else i.pointerType==="mouse"&&(this.hover={active:this.input.covers(i.clientX,i.clientY),x:i.clientX,y:i.clientY});this.wake()}},{signal:e}),n.addEventListener("pointerleave",()=>{this.hover.active=!1,this.wake()},{signal:e}),n.addEventListener("pointerdown",i=>{if(this.press&&!i.isPrimary||i.button!==0||!(t.drag||t.click||t.hold)||!this.input.covers(i.clientX,i.clientY))return;const s=this.sheetAt(i.clientX,i.clientY);if(!s)return;const r=this.sheets[s.index];this.inFlight(s.index)||this.setCurve(r,this.curveFor(i.clientX,i.clientY,s.index),!0),this.flights=this.flights.filter(o=>o.index!==s.index),this.press={id:i.pointerId,x:i.clientX,y:i.clientY},this.drag={index:s.index,forward:s.forward,base:r.progress,progress:r.progress,rectWidth:this.metrics.dragWidth,targetCurve:{...r.curveTarget},speed:0},r.direction=s.forward?1:-1,this.cancelHold(),t.hold&&(this.hold={forward:s.forward,x:i.clientX,y:i.clientY,count:0,fired:!1,timer:setTimeout(()=>this.holdTick(),1e3*Yi.startTime)});try{n.setPointerCapture(i.pointerId)}catch{}this.wake()},{signal:e}),n.addEventListener("pointerup",i=>this.release(i),{signal:e}),n.addEventListener("pointercancel",i=>this.release(i),{signal:e}),n.addEventListener("lostpointercapture",i=>this.release(i),{signal:e})}moved(n,e=Qs.clickSlopPx){return this.press!==null&&(n.clientX-this.press.x)**2+(n.clientY-this.press.y)**2>e*e}cancelHold(){this.hold&&clearTimeout(this.hold.timer),this.hold=null}holdTick(){const n=this.hold;if(!n)return;if(n.fired||(n.fired=!0,this.drag=null),n.forward?this.current>=this.sheets.length:this.current<=0)return this.cancelHold();const e=(r,o)=>r+(o-r)*Math.min(n.count/Yi.speedUpSheets,1),t=n.forward?this.current:this.current-1,i=this.sheets[t];this.setCurve(i,n.count===0?i.curveTarget:this.curveFor(n.x,n.y,t),!0),i.direction=n.forward?1:-1;const s=e(Yi.firstFlipTime,Yi.fastestFlipTime);this.fly(t,n.forward,n.forward?1:0,s),n.count++,n.timer=setTimeout(()=>this.holdTick(),1e3*this.seconds(s)*e(Yi.firstGapShare,Yi.fastestGapShare))}release(n){if(!this.press||n.pointerId!==this.press.id)return;const e=n.type!=="pointerup",t=this.moved(n);this.cancelHold();const i=this.drag;this.drag=null,this.press=null;try{this.input.element.releasePointerCapture(n.pointerId)}catch{}if(this.wake(),!i)return;const{interaction:s}=this.settings;if(!t||!s.drag){!e&&s.click&&this.fly(i.index,i.forward,i.forward?1:0);return}const r=i.forward?i.progress-i.base:i.base-i.progress,o=!e&&r>=this.settings.motion.commitThreshold,a=i.forward===o?1:0;this.commit(i.index,a);const l=this.sheets[i.index],c=a===1?i.speed:-i.speed,h=Math.max(Math.abs(a-l.progress),.001),u=this.seconds(Qs.fallTime)*Math.pow(h,Qs.fallTimeExponent);this.flights=this.flights.filter(d=>d.index!==i.index),this.flights.push({index:i.index,from:l.progress,to:a,direction:i.forward?1:-1,start:performance.now(),duration:1e3*u,launch:Vn(c*u/h,0,2)})}update(n){for(let f=this.flights.length-1;f>=0;f--){const g=this.flights[f],x=this.sheets[g.index],p=Vn((n-g.start)/g.duration,0,1);let m;if(g.launch===void 0)m=.5*(1-Math.cos(p*Math.PI));else{const _=p*p,E=_*p;m=(E-2*_+p)*g.launch+(3*_-2*E)+(E-_)*Qs.landingSpeed}x.progress=g.from+(g.to-g.from)*m,x.direction=g.direction,n>=g.start+g.duration&&(this.flights.splice(f,1),this.dirty=!0)}const e=this.last?Vn((n-this.last)/1e3,0,.1):1/60;this.last=n;let t=this.flights.length>0||this.drag!==null;if(this.drag){const f=this.sheets[this.drag.index],g=(this.drag.progress-f.progress)*(1-Math.pow(.01,e/Qs.progressSmoothTime));f.progress+=g,this.drag.speed=e>0?g/e:0,this.setCurve(f,this.drag.targetCurve,!1)}const{hoverLift:i}=this.settings.motion,s=this.hovered,o=this.settings.interaction.hover&&i>0&&this.hover.active&&!this.drag&&!this.hold?this.sheetAt(this.hover.x,this.hover.y):null;if(this.hovered=o&&!this.inFlight(o.index)?o.index:-1,this.hovered!==-1){const f=this.sheets[this.hovered];this.setCurve(f,this.curveFor(this.hover.x,this.hover.y,this.hovered),this.hovered!==s)}const a=Wa(Ga.smoothTime,e),l=Wa(Cn.directionSmoothTime,e),c=Wa(Cn.smoothTime,e);for(const f of this.sheets){const g=f.index;if(!this.inFlight(g)&&this.drag?.index!==g){const p=g>=this.current?0:1,m=g===this.hovered?Math.abs(p-i):p,_=m-f.progress;Math.abs(_)<Cn.settleEpsilon?f.progress!==m&&(f.progress=m,this.dirty=!0):(f.progress+=_*a,t=!0);const E=this.sheets[p===0?g-1:g+1];if(E){const y=p===0?Math.min(f.progress,Math.max(0,E.progress-Ga.gapToSheetAbove)):Math.max(f.progress,Math.min(1,E.progress+Ga.gapToSheetAbove));y!==f.progress&&(f.progress=y,t=!0)}f.direction=p===1&&f.progress!==p?-1:1,f.directionSmooth=f.direction}const x=f.direction-f.directionSmooth;Math.abs(x)<Cn.settleEpsilon?f.directionSmooth!==f.direction&&(f.directionSmooth=f.direction,this.dirty=!0):(f.directionSmooth+=x*l,t=!0);for(const p of["arc","angleDeg"]){const m=f.curveTarget[p]-f.curve[p];Math.abs(m)<Cn.settleEpsilon?f.curve[p]=f.curveTarget[p]:(f.curve[p]+=m*c,t=!0)}this.applyUniforms(f)}if(!t&&!this.dirty)return!1;let h=null,u=0;for(const f of this.sheets){const g=f.index,x=g>=this.current?g-this.current:this.current-1-g,p=this.inFlight(g)||this.drag?.index===g;f.mesh.castShadow=this.settings.lighting.shadows&&(x<3||p),af(f.mesh,x,this.sheets.length,p,this.settings.paper.depthBias);const m=Math.abs(f.uniforms.uFlipRotation.value.y);p&&m>u&&(u=m,h=f)}const d=h?.uniforms.uFlipRotation.value;return d?this.shading.spineContact.value.set(d.x,d.y,1):this.shading.spineContact.value.set(1,0,0),this.dirty=!1,!0}applyUniforms(n){const e=n.uniforms,t=this.halfHeight,i=n.progress*Math.PI,s=Math.sin(i)*Math.PI*n.curve.arc,r=n.curve.angleDeg*Math.PI/180,o=Math.cos(r),a=Math.sin(r),l=1-t*Math.sin(Math.abs(r)),c=1-l,h=Math.max(0,o+a*t*Math.sign(a)-c),u=h/l*s,d=h*(Math.abs(u)<1e-4?0:(1-Math.cos(u))/u),f=i+.5*n.directionSmooth*d;e.uFlipProgress.value=n.progress,e.uWrinkleSide.value=-Math.cos(i),e.uDirection.value=n.directionSmooth,e.uStackLift.value=n.liftBase+n.liftSpan*n.progress,e.uStackGap.value=this.settings.paper.sheetGap*ZS(n.index,this.sheets.length,n.progress),e.uBendAngle.value=s,e.uFold.value.set(o,a),e.uCurl.value.set(c,l),e.uFlipRotation.value.set(Math.cos(f),Math.sin(f))}},QS=5e-4,jS=typeof window<"u",eM=class extends zt{camera;domElement;inputEnabled=!0;get enabled(){return this.inputEnabled}set enabled(n){this.inputEnabled&&!n&&this.view?.engine.cancelInput?.(),this.inputEnabled=n}renderer;options;paper;loader=null;view=null;spreadMedia=null;motionMedia;abort=new AbortController;riffle=new bS;metrics;ray=new rs;point=new I;ends=[new I,new I];needsRender=!0;lastPagesKey="";loadVersion=0;lastDetailKey="";inView="";ready=!1;readyFired=!1;disposed=!1;constructor({renderer:n,camera:e,domElement:t=n.domElement},i){if(super(),!jS)throw new Error("LeafThrough needs a browser; create it on the client.");this.renderer=n,this.camera=e,this.domElement=t,this.options=wu(i);const s=this;this.metrics={get dragWidth(){return s.dragWidth()},dragDelta(o,a){const l=s.pageAxis();return(o*l.x+a*l.y)/(l.length()||1)}},this.paper=new FS(i.paper?.backColor??"#fcfcf9",{onGrain:()=>this.remount(),onError:o=>this.fail(o)});const r=this.abort.signal;this.watchSpreadQuery(),this.motionMedia=window.matchMedia("(prefers-reduced-motion: reduce)"),this.motionMedia.addEventListener("change",()=>this.remount(),{signal:r}),window.addEventListener("online",()=>this.retry(),{signal:r}),wS(t,()=>this.enabled&&this.shown()?this.view?.settings.interaction.keyboard:!1,{next:()=>this.next(),prev:()=>this.prev(),first:()=>this.goTo(0),last:()=>this.goTo(this.pageCount-1)},r),this.remount(i.startPage??0)}get page(){return this.detail().page}get pageCount(){return this.options.pages.length}get layout(){return this.view?.settings.layout??this.pickLayout()}get visiblePages(){return this.detail().visiblePages}get turning(){return this.view?.engine.turning??!1}get bounds(){const n=this.layout,e=this.view?.settings.pageAspect??this.resolve(n).pageAspect;return{pages:yS(n,e).box,reach:cu(n,e).view}}next(){return this.riffle.stop(),this.view?.engine.flip(!0)??!1}prev(){return this.riffle.stop(),this.view?.engine.flip(!1)??!1}goTo(n,{animate:e=!1}={}){if(!this.view||Number.isNaN(n))return;this.riffle.stop();const t=this.view.engine,i=ka(n,this.view.settings.layout,this.pageCount);if(!e){t.jumpTo(i);return}t.position!==i&&(this.riffle.start(i,this.view.settings.motion.speed),this.requestFrame())}retry(){this.loader?.retry()}update(n){this.applyOptions({...this.options,...n})}setOptions(n){this.applyOptions(n)}covers(n,e){const t=this.view;if(!t||!this.enabled||!this.shown()||!lu(this.camera,this.domElement,n,e,this.ray))return!1;const i=Nc(t.engine.group,this.ray,this.point);if(!i)return!1;const s=t.framing.box,r=t.engine.activeSide,o=r==="right"?s.x+s.width/2:s.x,a=r==="left"?s.x+s.width/2:s.x+s.width;return i.x>=o&&i.x<=a&&i.y>=s.y&&i.y<=s.y+s.height}tick(n=performance.now()){const e=this.view;if(!e)return!1;this.riffle.step(n,e.engine);const t=e.engine.update(n);this.followReader(e.engine,e.settings.layout);const i=t||this.needsRender;return this.needsRender=!1,this.ready&&!this.readyFired&&(this.readyFired=!0,this.options.onReady?.(),this.dispatchEvent({type:"ready"})),this.emitPageChange(),i||this.riffle.active}dispose(){this.disposed||(this.disposed=!0,this.riffle.stop(),this.abort.abort(),this.spreadMedia?.abort.abort(),this.view?.dispose(),this.view=null,this.loader?.dispose(),this.paper.dispose(),this.removeFromParent())}applyOptions(n){if(this.disposed)return;const e=this.options,t=this.options=wu(n),i=uS(e,t);if(!i.length)return;i.includes("spreadQuery")&&this.watchSpreadQuery();const{shadows:s,...r}=e.lighting??{},{shadows:o,...a}=t.lighting??{},l=i.includes("lighting")&&Uc(r,a);l&&(s??!0)!==(o??!0)&&this.view?.engine.setShadows?.(o??!0);const c=this.page;let h=i.some(d=>d==="deform"?bu(e)!==bu(t):d==="lighting"?!l:!hS.has(d));const u=i.includes("pages")&&this.pagesKey(t)!==this.lastPagesKey;u&&t.pages.length!==e.pages.length&&(h=!0),u&&!h&&(this.loader?.setSources(t.pages.map(ao)),this.lastPagesKey=this.pagesKey(t),this.loader&&!this.ready&&this.startPages(this.loader,c,this.pickLayout())),i.includes("preload")&&this.loader?.setRadius(iu(this.options.preload)),h&&this.remount(c)}pickLayout(){const n=this.options.layout??"auto";return n!=="auto"?n:this.spreadMedia?.list.matches?"spread":"single"}watchSpreadQuery(){this.spreadMedia?.abort.abort();const n=window.matchMedia(this.options.spreadQuery??oS),e=new AbortController;n.addEventListener("change",()=>this.remount(),{signal:e.signal}),this.spreadMedia={list:n,abort:e}}remount(n=this.page){if(this.disposed)return;this.riffle.stop(),this.view?.dispose(),this.view=null;const e=this.pickLayout(),t=this.resolve(e),i=this.lastPagesKey!==this.pagesKey(this.options);this.lastPagesKey=this.pagesKey(this.options),this.loader?.setSources(this.options.pages.map(ao)),i&&this.loader&&(this.ready=this.readyFired=!1,this.startPages(this.loader,n,e)),this.loader||this.loadPages(n,e),this.loader?.setWrap(e==="single"&&t.loop);const s=this.domElement,r=this.paper.blank,o={input:{element:s,ray:(l,c,h)=>lu(this.camera,s,l,c,h),covers:(l,c)=>this.covers(l,c)},settings:t,textures:this.options.pages.map((l,c)=>this.loader?.textures[c]??r),blank:e==="single"?this.paper.back(t.paper.backColor):r,pattern:this.paper.grain(t,this.renderer),shared:hf(this.renderer),position:ka(n,e,this.pageCount),metrics:this.metrics,shading:{spineContact:{value:new I(1,0,0)},lightDirection:{value:new I(...t.lighting.sun.position).normalize()},origin:{value:new I}},requestFrame:()=>this.requestFrame()},a=e==="spread"?new JS(o):new WS(o);this.add(a.group),this.view={engine:a,settings:t,framing:cu(e,t.pageAspect),dispose:()=>{this.remove(a.group),a.dispose()}},a.update(performance.now()),this.requestFrame()}resolve(n){const e=cS(this.options,n,this.motionMedia.matches),t=this.options.paper;e.paper.sheetGap=Math.max(0,t?.sheetGap??QS),e.paper.depthBias=t?.depthBias??!1;const i=this.options.deform;if(i){const s={};for(const r of Object.keys(i.uniforms??{})){const o=()=>this.options;s[r]={get value(){return o().deform?.uniforms?.[r]?.value}}}e.deform={glsl:i.glsl,uniforms:s}}return e}axis=new he;pageAxis(){const n=this.view?.engine.group??this;n.updateWorldMatrix(!0,!1),this.camera.updateWorldMatrix(!0,!1);const e=this.domElement.getBoundingClientRect(),[t,i]=this.ends.map((s,r)=>s.set(r,0,0).applyMatrix4(n.matrixWorld).project(this.camera));return this.axis.set((i.x-t.x)*e.width/2,-((i.y-t.y)*e.height)/2)}dragWidth(){return Math.max(1,(this.view?.framing.dragWidth??1)*this.pageAxis().length())}shown(){for(let n=this;n;n=n.parent)if(!n.visible)return!1;return!0}requestFrame(){this.needsRender=!0,this.dispatchEvent({type:"change"})}pagesKey(n){return n.pages.map(e=>Ki(ao(e))).join(`
`)}loadPages(n,e){this.loader?.dispose();const t=new RS(this.options.pages.map(ao),this.renderer,iu(this.options.preload),{onLoad:(i,s)=>{this.loader===t&&(this.view?.engine.setPageTexture(i,s),queueMicrotask(()=>{this.loader!==t||this.disposed||(this.options.onPageLoad?.(i),this.dispatchEvent({type:"pageload",detail:{page:i}}))}))},onUnload:i=>{this.loader===t&&this.view?.engine.setPageTexture(i,this.paper.blank)},onError:(i,s)=>this.fail(s,i)});this.loader=t,this.inView="",this.ready=this.readyFired=!1,this.startPages(t,n,e)}startPages(n,e,t){const i=++this.loadVersion,s=this.pageCount,r=[e-1,e,e+1,e+2],o=Ql(ka(e,t,s),t,s);n.start(o[0]??e,o[o.length-1]??e,r).then(()=>{this.loader!==n||this.disposed||i!==this.loadVersion||(this.ready=!0,this.requestFrame())})}followReader(n,e){if(!this.loader)return;const{from:t,to:i}=n.pagesInView(),s=Ql(n.position,e,this.pageCount)[0]??i,r=`${t}:${i}:${s}`;r!==this.inView&&(this.inView=r,this.loader.focus(t,i,s))}fail(n,e){this.options.onError?this.options.onError(n,e):console.warn("[leafthrough]",n),this.dispatchEvent({type:"error",detail:{error:n,page:e}})}detail(){return MS(this.view?.engine.position??0,this.layout,this.pageCount)}emitPageChange(){const n=this.detail(),e=`${n.layout}:${n.visiblePages.join(",")}/${n.pageCount}`;if(e===this.lastDetailKey)return;const t=!this.lastDetailKey;this.lastDetailKey=e,!t&&(this.options.onPageChange?.(n),this.dispatchEvent({type:"pagechange",detail:n}))}},bu=({deform:n})=>n?`${n.glsl}
${Object.keys(n.uniforms??{}).join(",")}`:"";function wu(n){const e=Jl(n),t=n.deform?.uniforms;return e.deform&&t&&(e.deform={...e.deform,uniforms:{...t}}),e}const uf=(n,e,t)=>Math.min(t,Math.max(e,n));function Oi(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function df(n,e){const t=new Uint8Array(e*e*4);for(let i=0;i<e;i++)for(let s=0;s<e;s++){const r=n[i*e+Math.max(0,s-1)]-n[i*e+Math.min(e-1,s+1)],o=n[Math.max(0,i-1)*e+s]-n[Math.min(e-1,i+1)*e+s],a=1/Math.sqrt(r*r+o*o+1),l=(i*e+s)*4;t[l]=(r*a*.5+.5)*255,t[l+1]=(o*a*.5+.5)*255,t[l+2]=(a*.5+.5)*255,t[l+3]=255}return t}function tM(n,{texPrint:e,texScratches:t}){const i=new Float32Array(n*n);for(let s=0;s<n;s++)for(let r=0;r<n;r++){const o=Math.hypot(r-n/2,s-n/2)+1e-4;i[s*n+r]=Math.sin(o*.6)*.02+(Oi(r*.4,s*.4)-.5)*.5*e}for(let s=0;s<Math.floor(30*t);s++){const r=Math.random()*Math.PI*2,o=30+Math.random()*220,a=Math.random()*n,l=Math.random()*n,c=(Math.random()*.7+.2)*t;for(let h=0;h<o;h++){const u=Math.round(a+Math.cos(r)*h),d=Math.round(l+Math.sin(r)*h);u>0&&d>0&&u<n-1&&d<n-1&&(i[d*n+u]-=c)}}for(let s=0;s<Math.floor(500*t);s++)i[Math.floor(Math.random()*n)*n+Math.floor(Math.random()*n)]+=(Math.random()-.5)*t*1.2;return df(i,n)}function nM(n,{frontRough:e,texGrain:t,texPrint:i,texGloss:s}){const r=new Uint8Array(n*n*4);for(let o=0;o<n;o++)for(let a=0;a<n;a++){const l=Math.hypot(a-n/2,o-n/2);let c=e+(Oi(a*2.3,o*2.3)-.5)*.35*t+(Oi(a*.5,o*.5)-.5)*.3*i;c-=(Math.sin(l/(n*.5)*14)*.5+.5)*.5*s;const h=(o*n+a)*4;r[h]=r[h+1]=r[h+2]=uf(c,.02,1)*255,r[h+3]=255}return r}function iM(n,{trayStipple:e,trayRough:t}){const i=new Float32Array(n*n);for(let r=0;r<i.length;r++)i[r]=Oi(r%n,Math.floor(r/n))*e;const s=new Uint8Array(n*n*4);for(let r=0;r<i.length;r++)s[r*4]=s[r*4+1]=s[r*4+2]=uf(t+(i[r]/e-.5)*.3,.05,1)*255,s[r*4+3]=255;return{normal:df(i,n),roughness:s}}const No=384,Tu=[[1,.108,-.049,.022],[.131,.016,-.014,.008],[-.039,-.018,0,.009],[.021,.005,.004,.009]],sM=.07,rM=32,$a=[[0,.537],[.001,.624],[.01,.675],[.05,.714],[.1,.733],[.25,.761],[.5,.788],[.75,.816],[.9,.835],[.95,.847],[.99,.867],[.999,.89],[1,.914]];function oM(){const n=No;let e=7;const t=()=>(e=e*1664525+1013904223>>>0)/4294967296,i=new Float32Array(n*n);for(let m=0;m<i.length;m++)i[m]=Math.sqrt(-2*Math.log(1-t()))*Math.cos(2*Math.PI*t());const s=(m,_)=>i[(_+n)%n*n+(m+n)%n],r=Tu.length-1,o=new Float32Array(n*n);for(let m=0;m<n;m++)for(let _=0;_<n;_++){let E=0;for(let y=-r;y<=r;y++){const T=Tu[Math.abs(y)];for(let b=-r;b<=r;b++)E+=T[Math.abs(b)]*s(_+b,m+y)}o[m*n+_]=E}const a=rM,l=new Float32Array(a*a);for(let m=0;m<l.length;m++)l[m]=t();const c=(m,_)=>l[(_%a+a)%a*a+(m%a+a)%a],h=(m,_)=>{const E=Math.floor(m),y=Math.floor(_),T=m-E,b=_-y,R=T*T*(3-2*T),S=b*b*(3-2*b),A=c(E,y)+(c(E+1,y)-c(E,y))*R,P=c(E,y+1)+(c(E+1,y+1)-c(E,y+1))*R;return A+(P-A)*S},u=new Float32Array(n*n);for(let m=0;m<n;m++)for(let _=0;_<n;_++)u[m*n+_]=h(_/n*a,m/n*a);const d=m=>{let _=0;for(const y of m)_+=y;_/=m.length;let E=0;for(const y of m)E+=(y-_)**2;return Math.sqrt(E/m.length)||1},f=sM*d(o)/d(u);for(let m=0;m<o.length;m++)o[m]+=u[m]*f;const g=Array.from(o.keys()).sort((m,_)=>o[m]-o[_]),x=new Uint8ClampedArray(n*n*4);let p=1;return g.forEach((m,_)=>{const E=_/(g.length-1);for(;$a[p][0]<E;)p++;const[y,T]=$a[p-1],[b,R]=$a[p],S=Math.round(255*(T+(R-T)*(E-y)/(b-y))),A=m*4;x[A]=x[A+1]=x[A+2]=S,x[A+3]=255}),x}function Eu(n){const e=iM(n.traySize,n);return{frontNormal:tM(n.mapResolution,n),frontRough:nM(n.mapResolution,n),trayNormal:e.normal,trayRough:e.roughness,grain:oM()}}const Au=n=>typeof n=="object"&&n!==null&&"src"in n,aM=Op(async()=>{const{RectAreaLightUniformsLib:n}=await import("./pattu-book-lights.js?v=paper-turn");return{RectAreaLightUniformsLib:n}},[],import.meta.url).then(({RectAreaLightUniformsLib:n})=>n.init()).catch(n=>console.warn("The strip light's lookup tables failed to load",n)),v={discThickness:.01,edgeBleed:.005,seamOverlap:.008,discPrintEdge:.978,discFallback:"#0c0c0e",holeSize:.127,hubSize:.31,labelInner:.345,mirrorBandShade:.2,discScanInset:.012,plasticTint:"#b9bcc0",plasticOpacity:.08,plasticEdge:.45,plasticRings:[[.2,.0035,.1],[.14,.004,.12]],frontRough:.42,frontMetal:.48,frontClearcoat:.8,texGrain:.59,texPrint:.35,texScratches:0,texGloss:1,backColor:"#83888f",backRough:.2,backMetal:1,backClearcoat:.5,backBand:.035,backBandOpacity:.88,backReflect:.75,backSilver:.3,backSheen:.45,trackLines:.025,scratchAmount:0,scratchCount:22,scratchArcs:5,diffractionStrength:1.1,diffractionSaturation:.8,diffractionFocus:1.5,diffractionSpacing:1600,diffractionLights:[[-.3,.75,.6,1],[.7,-.2,.7,.6]],caseWidth:142,caseHeight:125,caseDepth:10.4,lidPlate:1.5,lidFlange:8,basePlate:1,caseWall:1,hingeInset:1,bookletSize:120,bookletThickness:1.2,bookletInset:5,insertWidth:138,insertHeight:118,spineWidth:6.5,trayWidth:136,trayHeight:121,trayDepth:5,discOffsetX:6,discTurn:25,hingeStrip:14,hingeRibs:18,lidTabInset:16,lidTabRadius:5,lidStopY:[16,40],trayClipSpread:37,trayClipRadius:4.5,caseSheen:.12,caseSheenWidth:.1,caseSheenDir:[0,.75,.66],discSheen:.18,discClosedShade:.1,caseEdgeAlpha:.15,caseScratches:.32,caseSmudges:.8,casePlasticOpacity:.04,trayColor:"#151518",trayRough:.5,trayStipple:.35,printRough:.5,caseScale:.78,openDuration:1.3,lidOpenAngle:180,lidOpenAngleNarrow:110,narrowWidth:650,openFitPadding:32,shortHeight:500,openFitShortMargin:100,openTilt:24,openScale:.62,openForward:.3,openSpread:5,openRecede:1.6,rowRaiseShort:10,openRaiseShort:17,galleryScale:1.08,hGap:2.8,hGapNarrow:.9,depthGap:1,activeDiscY:.06,galleryRotX:-22,galleryRotY:-22,inactiveScale:.8,cameraDistance:4.4,cameraFOV:40,cameraNear:1,exposure:.86,environmentIntensity:1,fogColor:"#ebe3d4",ambientIntensity:.25,keyIntensity:.75,keyColor:"#fff9e8",keyX:3.5,keyY:-8,fillIntensity:.3,rimIntensity:.75,rimColor:"#499ff5",topStripIntensity:1.9,shadowSoft:3,shadowBias:[-7e-4,.002],hoverTiltStrength:.21,dragSensitivity:.95,dragVelocitySmoothing:.32,dragMaxVelocity:.5,friction:.89,maxSpinAngle:180,resetDuration:1.2,dragStartDistance:5,snapDuration:.46,flipFlickVelocity:.07,flipDuration:.9,flipHoldTime:.45,openHoverTilt:.4,playerHoverTilt:.35,flowLean:.055,flowLeanMax:.3,flowBank:.32,flowDip:.014,flowDipMax:.09,followTight:15,followBase:11,followFalloff:1.15,followMin:6.5,snapFreq:9.5,wipePush:.012,wipePushMax:.5,wipeSpin:.009,wipeSpinMax:.4,wipeMinSpeed:9,pushReturn:3.4,pressDepth:.55,pressTilt:1.5,flightRecede:2.2,flightStaggerIn:.28,flightStaggerMax:4,flightPopScaleIn:.02,introDuration:1.15,touchDragSpan:1.8,touchFlickVelocity:.035,wheelNoiseFloor:.3,wheelStepThreshold:6,wheelEventCap:24,wheelEnvelopeTau:550,wheelRiseFactor:1.2,wheelTickGap:34,wheelTickRatio:1,wheelPauseGap:130,wheelIdleReset:150,wheelMinStepTick:90,wheelMinStepFlick:190,wheelSustainDelay:480,wheelSustainRatio:.8,renderRadius:5,revealRadius:1,loadTimeout:12e3,artResolution:1024,mapResolution:1024,maxPixels:8e6,pixelRatioNarrow:1.5,pixelRatioWide:2,slowFrame:.022,verySlowFrame:.04,playerSize:146,playerHeight:18,playerCorner:7,playerBevel:1,playerFrame:1.4,playerRing:2.2,wellRadius:62,wellDepth:10,wellZ:0,playerDiscDrop:4,playerEnvLift:1.4,playerAmbient:.9,playerColor:"#3a3c41",playerRough:.38,playerTop:"#2c2e32",playerTopBack:"#5a5d64",playerTopSheen:.12,playerChrome:"#e2e4e8",playerTrim:"#141517",playerWell:"#18191c",playerHoles:"#101113",playerMetal:"#1c1d20",playerRingRough:.32,playerRingCoat:.5,playerRingEnv:.6,playerWear:2.5,playerWearScale:90,playerTurntableGrain:14,playerTurntableBump:1.5,playerTurntableSpeckle:.22,playerTurntableTone:1.15,playerScreenColor:"#ebe3d4",playerScreenDot:.3,playerScreenUnlit:.06,playerScreenMargin:3,playerScreenResolution:14,playerScreenScroll:9,playerScreenHold:1.5,playerGrilleRows:4,playerGrillePitch:2.4,playerGrilleHole:.7,playerJackAt:-61,playerGrilleFrom:-50,playerGrilleTo:62,playerScreenGap:5,playerButtonWidth:9,playerButtonHeight:7,playerButtonGap:2.6,playerButtonPress:.4,playerPrintOpacity:.5,playerButtonHover:.08,playerButtonColor:"#45474d",playerPrint:"#ebe3d4",playerYaw:45,playerView:26,playerScale:.7,playerFOV:18,playerShadow:.3,playerRaise:.1,playerScaleShort:1.08,playerRaiseShort:.3,insertDuration:2.4,ejectDuration:1.9,viewPanFrom:.2,viewPanUntil:.7,insertLift:.6,insertPan:4.4,insertHover:.3,insertClearance:3,leaveDuration:.6,leaveDrop:4.4,readDuration:2.4,unreadDuration:1.9,bookletCylinder:100,bookletCylinderNarrow:150,bookletEntrySpan:25,bookletEntryAngle:28,bookletLiftRun:69,bookletLiftRadius:400,bookletEntrySpanNarrow:14,bookletEntryAngleNarrow:40,bookletLiftRunNarrow:110,bookletLiftRadiusNarrow:200,bookletFrameSpan:140,bookletLipSteep:10,bookletLevelUntil:.7,bookletRollUntil:1,bookletEase:1,bookletPanFrom:.4,bookletFlightMargin:64,bookletFlightMarginShort:44,bookletFlightDepth:6,bookletClearance:1,bookletClearanceApron:10,bookletTilt:0,bookletRaise:.03,bookletFitWidth:.84,bookletFitHeight:.64,bookletFitNarrow:.82,bookletCentreFollow:7,bookletWrinkles:.055,bookletBulge:.22,bookletSheetGap:.007,bookletStackOut:1.2,bookletTuck:1.5,bookletTuckUntil:.12,bookletSun:2,bookletTravelSun:1.6,bookletSunIn:[0,.35],bookletLightIn:[.6,.86],bookletSunAt:[-3.5,1.3,4.1],bookletAmbient:1.5,bookletAmbientSingle:1.7,bookletAmbientSky:"#ffffff",bookletAmbientGround:"#a1aeaf",bookletSingleShadow:.4,bookletFloorShadow:.15,bookletShadowIn:.6,bookletShadowOut:.25,bookletShadowReach:[1.3,.9],bookletShadowMap:2048,spinRpm:120,spinUp:.4,spinDown:1,spinDownEject:.25,spinBlur:.025,spinBlurSamples:24},je=(n,e,t)=>Math.min(t,Math.max(e,n)),Ie=1/60,bt=(()=>{const e=-5.2+v.basePlate+.05,t=e+.05+v.trayDepth,i=v.caseDepth/2-v.lidPlate;return{back:-5.2,insert:e,trayFront:t,lidInner:i,disc:t+.8+v.discThickness/Ie/2,booklet:i-v.bookletThickness/2-.1,hingeX:-142/2+v.hingeInset,bookletX:v.caseWidth/2-v.bookletInset-v.bookletSize/2}})(),Ru=n=>v.cameraDistance*Math.tan(St.degToRad(v.cameraFOV/2))/Math.tan(St.degToRad(n/2));function Cu(n,e,t,i,s){const r=Math.tan(St.degToRad(v.cameraFOV/2)),o=r*v.cameraDistance*v.bookletRaise,a=St.degToRad(v.bookletTilt),l=n/2,c=l*Math.sin(a),h=2*l*(v.cameraDistance*Math.cos(a)-o*Math.sin(a))/((v.cameraDistance**2-c**2)*r),d=t/(v.cameraDistance*r)*(t*Math.cos(i)+(e-(s??o))*Math.sin(i)),f=h*Math.sin(i)*t;return 2*h*t**2/(d+Math.sqrt(d*d+f*f))}const lM={trayPosition:new I,trayQuaternion:new Gt,trayScale:new I,seatPosition:new I,seatQuaternion:new Gt,seatScale:new I,matrix:new at,inverse:new at,axis:new I,forward:new I,point:new I},cM={group:new Gt,turn:new Gt,axis:new I(0,1,0)},uo=.05,hM=10,uM={point:new I,matrix:new at},qa={paper:new I,restPosition:new I,restQuaternion:new Gt,restScale:new I,readPosition:new I,readQuaternion:new Gt,backUp:new Gt,turn:new Gt,matrix:new at,axis:new I,tilt:new I(1,0,0),centre:new I,normal:new I,heading:new I,shift:new I,untilt:new Gt,still:new Gt,point:new I,caseMatrix:new at,lidMatrix:new at,bounds:new Float64Array(306*3),roll:new Et,ray:new rs},Pu=[.35,.7,1].flatMap(n=>Array.from({length:36},(e,t)=>new I(Math.cos(t/36*Math.PI*2)*n,Math.sin(t/36*Math.PI*2)*n,0))),Ya=[1,.85,.7,.55];function dM(n,e,t,i){const s=3*n-3*t+1,r=3*t-6*n,o=3*n,a=3*e-3*i+1,l=3*i-6*e,c=3*e;return h=>{if(h<=0||h>=1)return h<=0?0:1;let u=h;for(let d=0;d<8;d++){const f=((s*u+r)*u+o)*u-h,g=(3*s*u+2*r)*u+o;if(Math.abs(f)<1e-6||Math.abs(g)<1e-6)break;u=je(u-f/g,0,1)}return((a*u+l)*u+c)*u}}const gt={glide:dM(.32,.72,0,1),linear:n=>n,power3In:n=>n**3,power3Out:n=>1-(1-n)**3,power3InOut:n=>n<.5?4*n**3:1-(-2*n+2)**3/2};function fM(n,e){const t=v.snapDuration;return n==="wheel"?{duration:t+.05,ease:gt.glide,kick:2.5}:n==="key"?{duration:Math.min(.6,t-.04+e*.05),ease:gt.glide,kick:4}:n==="click"?{duration:je(.45+e*.11,t,1.05),ease:gt.glide,kick:Math.min(5,e*1.4)}:n==="flick"?{duration:t+.1,ease:gt.glide,kick:0}:{duration:t,ease:gt.power3Out,kick:0}}function Lu(n,e){const t=St.degToRad(v.maxSpinAngle),i=Math.max(0,Math.abs(n)-t*.8)/t,s=1/(1+i*i*14);return n+e*(Math.sign(e)===Math.sign(n)||n===0?s:1)}function fo(n,e,t){const i=new Go(n,e,e);return i.generateMipmaps=!0,i.minFilter=ki,i.magFilter=en,i.anisotropy=t,i.needsUpdate=!0,i}function pM(){const n=document.createElement("canvas");n.width=1024,n.height=512;const e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,512);return t.addColorStop(0,"#25282f"),t.addColorStop(.5,"#0e0f13"),t.addColorStop(1,"#020203"),e.fillStyle=t,e.fillRect(0,0,1024,512),[[.14,.07,1],[.4,.049,.6],[.26,.077,.85],[.62,.035,.35]].forEach(([i,s,r])=>{const o=e.createLinearGradient(0,512*(i-s),0,512*(i+s));o.addColorStop(0,"rgba(255,255,255,0)"),o.addColorStop(.5,`rgba(255,255,255,${Math.max(.1,.85*r)})`),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,512*(i-s),1024,512*s*2)}),n}function Du(n,e){const t=new Lc(n,e,220,1),i=t.attributes.position,s=t.attributes.uv;for(let r=0;r<i.count;r++)s.setXY(r,i.getX(r)*.5+.5,i.getY(r)*.5+.5);return s.needsUpdate=!0,t}function mM(n,e){const t=n.map(s=>new Mi(s.map(([r,o])=>new he(r,o)),e)),i=rf(t);return t.forEach(s=>s.dispose()),i}function gM(){const n=v.discThickness*.51,e=v.holeSize,t=v.hubSize+v.seamOverlap;return mM([[[e,-n],[t,-n]],[[t,-n],[t,n]],[[t,n],[e,n]],[[e,n],[e,-n]]],160)}function $o(n){const e=rf(n);return n.forEach(t=>t.dispose()),e.scale(Ie,Ie,Ie)}const Nn=(n,e,t,i,s,r)=>new jn(n,e,t).translate(i,s,r);function Xn(n,e=-1){const t=n.attributes.normal,i=new Float32Array(t.count);if(e>=0)for(let s=0;s<t.count;s++)i[s]=Math.abs(t.getComponent(s,e))<.5?1:0;return n.setAttribute("plasticEdge",new gn(i,1)),n}function Ka(n,e){const t=new qt;return t.setAttribute("position",new pt(n.flat(),3)),t.setAttribute("uv",new pt(e.flat(),2)),t.setIndex([0,1,2,0,2,3]),t.computeVertexNormals(),t}function vM(){const n=v.insertWidth/2,e=v.insertHeight/2,t=bt.insert,i=t+v.spineWidth,s=v.spineWidth/(v.insertWidth+v.spineWidth*2);return $o([Ka([[n,-e,t],[-n,-e,t],[-n,e,t],[n,e,t]],[[s,0],[1-s,0],[1-s,1],[s,1]]),Ka([[n,-e,i],[n,-e,t],[n,e,t],[n,e,i]],[[0,0],[s,0],[s,1],[0,1]]),Ka([[-n,-e,t],[-n,-e,i],[-n,e,i],[-n,e,t]],[[1-s,0],[1,0],[1,1],[1-s,1]])])}function xM(){const n=bt.trayFront+1.5-bt.back,e=v.caseWidth/2-1,t=v.caseHeight/2-v.trayHeight/2-v.caseWall,i=v.trayHeight/2+t/2,s=[-1,1].flatMap(r=>[Xn(Nn(4,t,n,bt.hingeX+2,r*i,bt.back+n/2),1),Xn(new Ns(1.6,1.6,t+v.caseWall,16).translate(bt.hingeX,r*(i+v.caseWall/2),0))]);return $o([Xn(Nn(v.caseWidth-2,v.caseHeight-2,v.basePlate,0,0,bt.back+v.basePlate/2),2),Xn(Nn(v.caseWall,v.trayHeight,n,-e,0,bt.back+n/2),0),Xn(Nn(v.caseWall,v.trayHeight,n,e,0,bt.back+n/2),0),...s])}function _M(n,e,t){const i=new Ns(n,n,e,24,1,!1,-Math.PI/2,Math.PI).rotateX(Math.PI/2);return t>0?i.rotateZ(Math.PI):i}function yM(){const n=v.caseDepth/2,e=v.caseHeight/2-v.caseWall/2,t=v.caseHeight/2-v.caseWall,i=bt.booklet-v.bookletThickness/2,r=[-1,1].map(h=>bt.bookletX+h*(v.bookletSize/2-v.lidTabInset)).flatMap(h=>[-1,1].map(u=>Xn(_M(v.lidTabRadius,.6,-u).translate(h,u*t,i-.35),2))),[o,a]=v.lidStopY,l=(bt.bookletX+v.bookletSize/2+v.caseWidth/2)/2,c=[-1,1].map(h=>Xn(Nn(.8,a-o,1.6,l,h*(o+a)/2,bt.lidInner-.8),0));return $o([Xn(Nn(v.caseWidth,v.caseHeight,v.lidPlate,0,0,n-v.lidPlate/2),2),Xn(Nn(v.caseWidth,v.caseWall,v.lidFlange,0,e,n-v.lidFlange/2),1),Xn(Nn(v.caseWidth,v.caseWall,v.lidFlange,0,-e,n-v.lidFlange/2),1),...r,...c].map(h=>h.translate(70,0,0)))}function SM(){const n=bt.trayFront,e=p=>p.rotateX(Math.PI/2),t=Array.from({length:12},(p,m)=>new jn(4.2,1.1,1).translate(5.2,0,0).rotateZ(m/12*Math.PI*2).translate(v.discOffsetX,0,n+1.3)),i=-142/2+1.5,s=v.trayHeight,r=bt.insert+.05,o=bt.lidInner-.4,a=(v.hingeStrip-2)/v.hingeRibs,l=Array.from({length:v.hingeRibs},(p,m)=>Nn(a*.45,s-2,.2,i+1+a*(m+.5),0,o+.1)),c=62.4,h=Math.acos((v.trayHeight/2-1)/c),u=[[60.8,0],[c,0],[c,.5],[60.8,.5],[60.8,0]].map(([p,m])=>new he(p,m)),d=[h,Math.PI+h].map(p=>e(new Mi(u,48,p,Math.PI-h*2)).translate(v.discOffsetX,0,n)),f=[[v.trayClipRadius-.7,0],[v.trayClipRadius,0],[v.trayClipRadius,1.2],[v.trayClipRadius-.7,1.2],[v.trayClipRadius-.7,0]].map(([p,m])=>new he(p,m)),x=[-1,1].map(p=>v.discOffsetX+p*v.trayClipSpread).flatMap(p=>[-1,1].map(m=>e(new Mi(f,24,m>0?-Math.PI/2:Math.PI/2,Math.PI)).translate(p,m*v.trayHeight/2,n)));return $o([Nn(v.trayWidth,v.trayHeight,v.trayDepth,0,0,n-v.trayDepth/2),Nn(v.hingeStrip,s,o-r,i+v.hingeStrip/2,0,(o+r)/2),...l,...d,...x,e(new Ns(17,17,.8,64)).translate(v.discOffsetX,0,n+.4),e(new Ns(2.6,2.6,1,24)).translate(v.discOffsetX,0,n+1.3),...t])}const Iu="#include <shadowmap_pars_fragment>",MM=Fc(Iu)!==Iu;function Tr(n){const e=n.onBeforeCompile,t=n.customProgramCacheKey;return n.customProgramCacheKey=()=>`${t.call(n)}-soft-shadows`,n.onBeforeCompile=(i,s)=>{e.call(n,i,s),i.fragmentShader=Fc(i.fragmentShader)},n}function qo(){const n=t=>t.toFixed(4);return`#ifdef USE_CLEARCOAT
outgoingLight -= reflectedLight.directSpecular * (1.0 - material.clearcoat * Fcc) + clearcoatSpecularDirect * material.clearcoat;
#else
outgoingLight -= reflectedLight.directSpecular;
#endif
vec3 softPlane = normalize((viewMatrix * vec4(${new I(1,0,0).cross(new I(...v.caseSheenDir)).normalize().toArray().map(n).join(", ")}, 0.0)).xyz);
float softBand = exp(-pow(asin(clamp(dot(reflect(-geometryViewDir, normal), softPlane), -1.0, 1.0)) / ${n(v.caseSheenWidth)}, 2.0));
// Taking the direct highlight out can go below zero at grazing angles, which showed as black specks.
outgoingLight = max(outgoingLight, vec3(0.0));`}function bM(n,e,t){return n.customProgramCacheKey=()=>e,n.onBeforeCompile=i=>{i.fragmentShader=i.fragmentShader.replace("#include <opaque_fragment>",`${qo()}
outgoingLight += mix(vec3(1.0), diffuseColor.rgb, metalnessFactor) * softBand * ${t.toFixed(4)};
#include <opaque_fragment>`)},n}function Uu(n,e,t,i=0){const s=r=>r.toFixed(4);return n.customProgramCacheKey=()=>e,n.onBeforeCompile=r=>{r.uniforms.playerWearMap={value:t},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWearPosition;
varying vec3 vWearNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWearPosition = position;
vWearNormal = normal;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D playerWearMap;
varying vec3 vWearPosition;
varying vec3 vWearNormal;`).replace("#include <opaque_fragment>",`${i?qo():"float softBand = 0.0;"}
outgoingLight += vec3(softBand * ${s(i)});
vec3 wearFacing = abs(vWearNormal);
vec2 wearUv = wearFacing.y > 0.5 ? vWearPosition.xz : wearFacing.x > wearFacing.z ? vWearPosition.zy : vWearPosition.xy;
float wearMark = texture2D(playerWearMap, wearUv / ${s(v.playerWearScale)}).r;
float wearLight = dot(reflectedLight.indirectSpecular, vec3(0.3333)) + softBand;
outgoingLight += vec3(wearMark * ${s(v.playerWear)} * (0.04 + wearLight));
#include <opaque_fragment>`)},n}function wM({roughness:n,opacity:e,rings:t=[],side:i=Vt}){const s=new Mn({color:v.plasticTint,roughness:n,metalness:0,transparent:!0,opacity:e,depthWrite:!1,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1,side:i,forceSinglePass:!0}),r=t.map(([o,a,l])=>`plasticAlpha += ${l.toFixed(3)} * exp(-pow((plasticRadius - ${o.toFixed(4)}) / ${a.toFixed(4)}, 2.0));`).join(`
`);return s.customProgramCacheKey=()=>"plastic",s.onBeforeCompile=o=>{o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec2 plasticPlane;`).replace("#include <begin_vertex>",`#include <begin_vertex>
plasticPlane = position.xz;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 plasticPlane;`).replace("#include <opaque_fragment>",`${qo()}
float plasticRadius = length(plasticPlane);
outgoingLight += vec3(softBand * ${v.caseSheen.toFixed(4)});
float plasticFresnel = pow(1.0 - abs(dot(normal, geometryViewDir)), 3.0);
float plasticGlint = dot(reflectedLight.indirectSpecular, vec3(0.3333)) + softBand * ${v.caseSheen.toFixed(4)};
float plasticAlpha = diffuseColor.a + plasticFresnel * ${v.plasticEdge.toFixed(3)} + plasticGlint;
${r}
diffuseColor.a = clamp(plasticAlpha, 0.0, 1.0);
#include <opaque_fragment>`)},s}function TM(n,e){const t=new Mn({color:v.plasticTint,roughness:.04,metalness:0,transparent:!0,opacity:v.casePlasticOpacity,depthWrite:!1,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1,side:Vt,forceSinglePass:!0}),i=s=>s.toFixed(4);return t.customProgramCacheKey=()=>"case-plastic",t.onBeforeCompile=s=>{s.uniforms.caseWearMap={value:n.textures.caseWear},s.uniforms.caseSeed={value:new he(e,e*7.13%1)},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float plasticEdge;
varying float vCaseEdge;
varying vec2 vCaseUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCaseEdge = plasticEdge;
vCaseUv = uv;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D caseWearMap;
uniform vec2 caseSeed;
varying float vCaseEdge;
varying vec2 vCaseUv;`).replace("#include <opaque_fragment>",`${qo()}
vec2 caseWear = texture2D(caseWearMap, vCaseUv + caseSeed).rg;
float caseBand = softBand;
float caseSheen = caseBand * ${i(v.caseSheen)} * (1.0 + (caseWear.g - 0.5) * ${i(v.caseSmudges)});
float caseScratch = caseWear.r * ${i(v.caseScratches)} * (0.01 + caseBand) * (1.0 - vCaseEdge);
outgoingLight += vec3(caseSheen + caseScratch);
float caseFresnel = pow(1.0 - abs(dot(normal, geometryViewDir)), 3.0);
float caseGlint = dot(reflectedLight.indirectSpecular, vec3(0.3333));
diffuseColor.a = clamp(diffuseColor.a + caseFresnel * ${i(v.plasticEdge)} + caseGlint + caseSheen + caseScratch + vCaseEdge * ${i(v.caseEdgeAlpha)}, 0.0, 1.0);
#include <opaque_fragment>`)},t}function EM(n,e){const t=new Mn({color:v.backColor,roughness:v.backRough,metalness:v.backMetal,clearcoat:v.backClearcoat,clearcoatRoughness:.05,envMapIntensity:1.2,transparent:!0}),[i,s]=v.diffractionLights,r=o=>o.toFixed(4);return t.customProgramCacheKey=()=>"cd-back",t.onBeforeCompile=o=>{o.uniforms.cdLightA={value:new I(...i.slice(0,3)).normalize()},o.uniforms.cdLightB={value:new I(...s.slice(0,3)).normalize()},o.uniforms.cdSeed={value:e},o.uniforms.cdScratches={value:n.textures.scratches},o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vDiscLocal;
varying vec3 vDiscWorld;
varying vec3 vDiscTangent;
varying vec3 vDiscRadial;
varying vec3 vDiscAxisX;
varying vec3 vDiscAxisY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vDiscLocal = position;
vDiscWorld = (modelMatrix * vec4(position, 1.0)).xyz;
vDiscTangent = (modelMatrix * vec4(-position.y, position.x, 0.0, 0.0)).xyz;
vDiscRadial = (modelMatrix * vec4(position.x, position.y, 0.0, 0.0)).xyz;
vDiscAxisX = (modelMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz;
vDiscAxisY = (modelMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 cdLightA;
uniform vec3 cdLightB;
uniform float cdSeed;
uniform sampler2D cdScratches;
varying vec3 vDiscLocal;
varying vec3 vDiscWorld;
varying vec3 vDiscTangent;
varying vec3 vDiscRadial;
varying vec3 vDiscAxisX;
varying vec3 vDiscAxisY;
vec3 cdBump(vec3 x, vec3 offset) {
  return clamp(vec3(1.0) - x * x - offset, 0.0, 1.0);
}
vec3 cdSpectrum(float wavelength) {
  if (wavelength < 400.0 || wavelength > 700.0) return vec3(0.0);
  float x = (wavelength - 400.0) / 300.0;
  return cdBump(vec3(3.54585104, 2.93225262, 2.41593945) * (x - vec3(0.69549072, 0.49228336, 0.27699880)), vec3(0.02312639, 0.15225084, 0.52607955))
    + cdBump(vec3(3.90307140, 3.21182957, 3.96587128) * (x - vec3(0.11748627, 0.86755042, 0.66077860)), vec3(0.84897130, 0.88445281, 0.73949448));
}
// Grating equation: order n shows wavelength |(light + view) . tangent| * spacing / n. Only the
// first two orders, each blurred over a small range as a soft light would. The radial term keeps
// colour where the reflection also works across the tracks, which lines the wedges up through
// the centre. sheen is the white zero-order streak.
vec3 cdDiffract(vec3 light, vec3 view, vec3 tangent, vec3 radial, out float sheen) {
  vec3 h = light + view;
  float u = abs(dot(h, tangent));
  float across = dot(h, radial);
  float focus = exp(-across * across * ${r(v.diffractionFocus)});
  vec3 colour = vec3(0.0);
  for (int n = 1; n <= 2; n++) {
    for (int k = -1; k <= 1; k++) {
      colour += cdSpectrum((u + float(k) * 0.03) * ${r(v.diffractionSpacing)} / float(n)) / (3.0 * float(n));
    }
  }
  sheen = exp(-u * u * 14.0) * focus;
  return colour * focus;
}`).replace("#include <opaque_fragment>",`vec3 cdTangent = normalize(vDiscTangent);
vec3 cdRadialDir = normalize(vDiscRadial);
vec3 cdView = normalize(cameraPosition - vDiscWorld);
float cdSheenA;
float cdSheenB;
vec3 cdRainbow = cdDiffract(cdLightA, cdView, cdTangent, cdRadialDir, cdSheenA) * ${r(i[3])}
  + cdDiffract(cdLightB, cdView, cdTangent, cdRadialDir, cdSheenB) * ${r(s[3])};
float cdSheen = cdSheenA * ${r(i[3])} + cdSheenB * ${r(s[3])};
// Real discs wash the colours out with the silver around them.
cdRainbow = mix(vec3(dot(cdRainbow, vec3(0.3333))), cdRainbow, ${r(v.diffractionSaturation)});
float cdRadius = length(vDiscLocal.xy);
float cdInBand = smoothstep(${r(v.hubSize)}, ${r(v.hubSize+.004)}, cdRadius) * (1.0 - smoothstep(${r(v.hubSize+v.backBand-.004)}, ${r(v.hubSize+v.backBand)}, cdRadius));
// Fine rings fade out where they would be smaller than a pixel and shimmer.
float cdTrackPhase = cdRadius * 520.0;
float cdTrack = sin(cdTrackPhase) * clamp(1.0 - fwidth(cdTrackPhase) * 1.5, 0.0, 1.0);
float cdMouldPhase = cdRadius * 1100.0;
float cdMould = sin(cdMouldPhase) * clamp(1.0 - fwidth(cdMouldPhase) * 1.5, 0.0, 1.0);
// Bright silver base with faint tonal bands and track lines.
float cdTone = 1.0 + ${r(v.trackLines)} * (0.6 * sin(cdRadius * 91.0 + cdSeed * 11.0) + cdTrack);
vec3 cdSilver = (outgoingLight * ${r(v.backReflect)} + vec3(${r(v.backSilver)})) * cdTone;
vec3 cdData = cdSilver + cdSheen * ${r(v.backSheen)} + cdRainbow * ${r(v.diffractionStrength)};
// The band around the hub is bare mirror under clear plastic: silver, no rainbow, finely ringed.
vec3 cdBandLight = (cdSilver * 0.92 + cdSheen * 0.15) * (1.0 + 0.06 * cdMould);
outgoingLight = mix(cdData, cdBandLight, cdInBand);
// Scratches: the map stores each scratch's strength and direction. A scratch is a tiny groove, so
// it only glints where its angle reflects the light toward the viewer; elsewhere it is barely
// there and the disc shows through. Each disc turns the shared map by its seed.
float cdAngle = cdSeed * 6.2832;
vec2 cdTurn = vec2(cos(cdAngle), sin(cdAngle));
vec2 cdScratchUV = mat2(cdTurn.x, cdTurn.y, -cdTurn.y, cdTurn.x) * vDiscLocal.xy * 0.5 + 0.5;
vec3 cdScratchMap = texture2D(cdScratches, cdScratchUV).rgb;
float cdScratch = cdScratchMap.r;
vec2 cdDouble = cdScratchMap.gb / max(cdScratch, 0.004) * 2.0 - 1.0;
float cdTheta = 0.5 * atan(cdDouble.y, cdDouble.x);
vec2 cdMapDir = vec2(cos(cdTheta), sin(cdTheta));
vec2 cdLocalDir = vec2(dot(cdMapDir, cdTurn), dot(cdMapDir, vec2(-cdTurn.y, cdTurn.x)));
vec3 cdScratchDir = normalize(vDiscAxisX * cdLocalDir.x + vDiscAxisY * cdLocalDir.y);
float cdScratchU = dot(cdLightA + cdView, cdScratchDir);
float cdGlint = exp(-cdScratchU * cdScratchU * 30.0);
outgoingLight += vec3(0.9) * cdScratch * (0.06 + 0.6 * cdGlint) * ${r(v.scratchAmount)} * (1.0 - cdInBand);
diffuseColor.a = mix(1.0, ${r(v.backBandOpacity)}, cdInBand);
#include <opaque_fragment>`)},t}function AM(n){const e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,n,n),t.globalCompositeOperation="lighter",t.lineCap="round";const i=(s,r,o,a,l,c)=>{const h=-2*o,u=Math.round(255*l);t.strokeStyle=`rgb(${u}, ${Math.round(u*(.5+.5*Math.cos(h)))}, ${Math.round(u*(.5+.5*Math.sin(h)))})`,t.lineWidth=c,t.beginPath(),t.moveTo(s,r),t.lineTo(s+Math.cos(o)*a,r+Math.sin(o)*a),t.stroke()};for(let s=0;s<v.scratchCount;s++)i(Math.random()*n,Math.random()*n,Math.random()*Math.PI,n*(.015+Math.random()*.06),.35+Math.random()*.5,.5+Math.random()*.5);for(let s=0;s<v.scratchArcs;s++){const r=n*(.25+Math.random()*.2);let o=Math.random()*Math.PI*2;const a=o+.08+Math.random()*.15,l=.2+Math.random()*.25;for(;o<a;o+=.01){const c=n/2+Math.cos(o)*r,h=n/2+Math.sin(o)*r;i(c,h,o+Math.PI/2,r*.0105,l,.5)}}return e}function ff(n){const e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d");t.fillStyle="rgb(0, 110, 0)",t.fillRect(0,0,n,n),t.globalCompositeOperation="lighter",t.lineCap="round";const i=(s,r,o,a,l,c)=>{t.strokeStyle=`rgba(255, 0, 0, ${l})`,t.lineWidth=c,t.beginPath(),t.moveTo(s,r),t.lineTo(s+Math.cos(o)*a,r+Math.sin(o)*a),t.stroke()};for(let s=0;s<70;s++)i(Math.random()*n,Math.random()*n,Math.random()*Math.PI,n*(.008+Math.random()*.035),.2+Math.random()*.4,.5+Math.random()*.4);for(let s=0;s<4;s++)i(Math.random()*n,Math.random()*n,Math.random()*Math.PI,n*(.15+Math.random()*.25),.15+Math.random()*.2,.7);for(let s=0;s<4;s++){const r=Math.random()*n,o=Math.random()*n;for(let a=0;a<14;a++){const l=n*(.05+Math.random()*.12),c=Math.random()*Math.PI*2;t.strokeStyle=`rgba(255, 0, 0, ${.1+Math.random()*.15})`,t.lineWidth=.6,t.beginPath(),t.arc(r,o,l,c,c+.3+Math.random()*.6),t.stroke()}}for(let s=0;s<26;s++){const r=Math.random()*n,o=Math.random()*n,a=n*(.03+Math.random()*.08),l=t.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,`rgba(0, 255, 0, ${.15+Math.random()*.2})`),l.addColorStop(1,"rgba(0, 255, 0, 0)"),t.fillStyle=l,t.fillRect(r-a,o-a,a*2,a*2)}return e}function ec(n){let e=2166136261;for(const t of String(n))e=Math.imul(e^t.charCodeAt(0),16777619);return(e>>>0)/4294967295}const nr=512;function RM(n){const e=n.capabilities.getMaxAnisotropy(),t=v.mapResolution,i=l=>new Uint8Array(l*l*4),s={frontNormal:fo(i(t),t,e),frontRough:fo(i(t),t,e),scratches:new mn(AM(t)),caseWear:new mn(ff(t))};s.caseWear.wrapS=s.caseWear.wrapT=Kn,s.caseWear.anisotropy=e,s.trayNormal=fo(i(nr),nr,e),s.trayRough=fo(i(nr),nr,e);for(const l of[s.trayNormal,s.trayRough])l.wrapS=l.wrapT=Kn,l.repeat.set(3,3);const r={front:Du(v.hubSize,1-v.edgeBleed),back:Du(v.hubSize,1-v.edgeBleed),hub:gM(),pick:new yr(1,24),baseShell:xM(),lidShell:yM(),tray:SM(),insert:vM(),booklet:new jn(v.bookletSize*Ie,v.bookletSize*Ie,v.bookletThickness*Ie),casePick:new ei(v.caseWidth*Ie,v.caseHeight*Ie)},o={tray:Tr(new Mn({color:v.trayColor,roughness:1,roughnessMap:s.trayRough,normalMap:s.trayNormal,normalScale:new he(1,1),metalness:0,envMapIntensity:1.8,clearcoat:.15,clearcoatRoughness:.35})),pick:new xr({visible:!1,side:Vt,depthWrite:!1})},a=document.createElement("canvas");return a.width=a.height=No,{textures:s,geometries:r,materials:o,anisotropy:e,grain:a}}function CM(){return{mapResolution:v.mapResolution,traySize:nr,frontRough:v.frontRough,texGrain:v.texGrain,texPrint:v.texPrint,texScratches:v.texScratches,texGloss:v.texGloss,trayStipple:v.trayStipple,trayRough:v.trayRough}}function PM(n){return new Promise(e=>{let t=null;try{t=new Worker(new URL(""+new URL("procedural.worker-CR0jROGy.js",import.meta.url).href,import.meta.url),{type:"module"})}catch{t=null}if(!t)return e(Eu(n));const i=()=>{t.terminate(),e(Eu(n))};t.onmessage=s=>{t.terminate(),e(s.data)},t.onerror=i,t.onmessageerror=i,t.postMessage(n)})}function LM(n,e,t){const i=(s,r)=>{s.image.data=r,s.needsUpdate=!0,t.initTexture(s)};i(n.textures.frontNormal,e.frontNormal),i(n.textures.frontRough,e.frontRough),i(n.textures.trayNormal,e.trayNormal),i(n.textures.trayRough,e.trayRough),n.grain.getContext("2d").putImageData(new ImageData(e.grain,No,No),0,0)}const tc=256;async function DM(n){let e=null;try{e=await createImageBitmap(n,{resizeWidth:tc,resizeHeight:tc})}catch{}const t=IM(n,e??n);return e?.close(),t}function IM(n,e=n){const t=n.naturalWidth||n.width,i=n.naturalHeight||n.height,s={x:(t-Math.max(t,i))/2,y:(i-Math.max(t,i))/2,size:Math.max(t,i)},r=tc,o=document.createElement("canvas");o.width=o.height=r;const a=o.getContext("2d",{willReadFrequently:!0});a.drawImage(e,0,0,r,r);const{data:l}=a.getImageData(0,0,r,r),c=[[2,2],[r-3,2],[2,r-3],[r-3,r-3]].map(([b,R])=>(R*r+b)*4),h=[0,1,2].map(b=>c.reduce((R,S)=>R+l[S+b],0)/c.length);if(Math.max(...c.map(b=>Math.abs(l[b]-h[0])+Math.abs(l[b+1]-h[1])+Math.abs(l[b+2]-h[2])))>60)return s;const d=new Uint16Array(r),f=new Uint16Array(r);for(let b=0;b<r;b++)for(let R=0;R<r;R++){const S=(b*r+R)*4;Math.abs(l[S]-h[0])+Math.abs(l[S+1]-h[1])+Math.abs(l[S+2]-h[2])>40&&(d[b]+=1,f[R]+=1)}const g=b=>{const R=b.findIndex(A=>A>=6),S=r-1-[...b].reverse().findIndex(A=>A>=6);return R<0?[0,r-1]:[R,S+1]},[x,p]=g(f),[m,_]=g(d),E=t/r,y=i/r,T=Math.max((p-x)*E,(_-m)*y);return{x:(x+p)/2*E-T/2,y:(m+_)/2*y-T/2,size:T}}function UM(n){const e=Object.assign(document.createElement("canvas"),{width:2,height:2}),t=e.getContext("2d");return t.fillStyle=n,t.fillRect(0,0,2,2),e}function FM(n,e,t=null){const i=v.artResolution,s=document.createElement("canvas");s.width=s.height=i;const r=s.getContext("2d");if(r.beginPath(),r.arc(i/2,i/2,i/2,0,Math.PI*2),r.arc(i/2,i/2,i/2*Math.max(v.holeSize,v.hubSize),0,Math.PI*2,!0),r.clip("evenodd"),r.fillStyle=v.discFallback,r.fillRect(0,0,i,i),t){const a=t.size*v.discScanInset;r.drawImage(n,t.x+a,t.y+a,t.size-a*2,t.size-a*2,0,0,i,i)}else{const a=(n.naturalWidth||n.width)/(n.naturalHeight||n.height),l=a>1?i*a:i,c=a>1?i:i/a;r.drawImage(n,(i-l)/2,(i-c)/2,l,c);const h=i/2;r.beginPath(),r.arc(h,h,h*v.labelInner,0,Math.PI*2),r.arc(h,h,h*v.hubSize,0,Math.PI*2,!0),r.fillStyle=`rgba(6, 6, 10, ${v.mirrorBandShade})`,r.fill("evenodd")}r.beginPath(),r.arc(i/2,i/2,i/2,0,Math.PI*2),r.arc(i/2,i/2,i/2*v.discPrintEdge,0,Math.PI*2,!0),r.fillStyle=v.discFallback,r.fill("evenodd");const o=new mn(s);return o.colorSpace=Bt,o.anisotropy=e,o}function pf(n,e,t,i,s=42){let r=i;do{if(n.font=`500 ${r}px Georgia, serif`,n.measureText(e).width<=t)break;r-=4}while(r>s);return r}function Fu(n,e){const t=document.createElement("canvas");t.width=t.height=1024;const i=t.getContext("2d"),s=i.createLinearGradient(0,0,1024,1024);s.addColorStop(0,n.accent||"#dcc5a2"),s.addColorStop(1,n.color||"#3b3a36"),i.fillStyle=s,i.fillRect(0,0,1024,1024);const r=n.motif||"rings";if(i.save(),r==="sun"){const c=i.createRadialGradient(575,420,0,575,420,490);c.addColorStop(0,"rgba(255,247,209,.9)"),c.addColorStop(.38,"rgba(255,217,154,.46)"),c.addColorStop(1,"rgba(255,217,154,0)"),i.fillStyle=c,i.fillRect(0,0,1024,1024),i.fillStyle="rgba(255,242,208,.72)",i.beginPath(),i.arc(580,405,235,0,Math.PI*2),i.fill(),i.fillStyle=n.color||"#3b3a36",i.beginPath(),i.moveTo(0,755),i.bezierCurveTo(280,550,550,920,1024,645),i.lineTo(1024,1024),i.lineTo(0,1024),i.fill()}else if(r==="waves"){for(let c=0;c<14;c++)i.beginPath(),i.moveTo(-100,235+c*58),i.bezierCurveTo(240,35+c*55,655,530+c*25,1125,170+c*61),i.lineWidth=c%3===0?8:3,i.strokeStyle=`rgba(227,239,235,${.08+c*.02})`,i.stroke();i.fillStyle="rgba(1,16,29,.34)",i.fillRect(0,645,1024,379)}else if(r==="arches")for(let c=0;c<7;c++)i.beginPath(),i.arc(520,905,115+c*108,Math.PI,0),i.lineWidth=68,i.strokeStyle=c%2?"rgba(255,225,184,.28)":"rgba(74,37,32,.26)",i.stroke();else if(r==="rings")for(let c=0;c<18;c++)i.beginPath(),i.ellipse(525,445,90+c*43,28+c*32,-.36,0,Math.PI*2),i.lineWidth=c%4===0?10:3,i.strokeStyle=`rgba(238,229,193,${.2+c*.019})`,i.stroke();else if(r==="lines")for(let c=-8;c<24;c++)i.beginPath(),i.moveTo(c*86-220,-100),i.lineTo(c*86+270,1124),i.lineWidth=c%4===0?28:7,i.strokeStyle=c%4===0?"rgba(55,48,42,.38)":"rgba(55,48,42,.13)",i.stroke();else{for(let c=0;c<72;c++){const h=c*319%1024,u=c*557%1024,d=c%9===0?5:2;i.beginPath(),i.arc(h,u,d,0,Math.PI*2),i.fillStyle=`rgba(255,234,187,${.22+c%5*.11})`,i.fill()}i.strokeStyle="rgba(239,206,151,.42)",i.lineWidth=4,i.beginPath(),i.ellipse(500,440,380,195,-.55,0,Math.PI*2),i.stroke()}i.restore();const o=i.createLinearGradient(0,580,0,1024);o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,.42)"),i.fillStyle=o,i.fillRect(0,570,1024,454),i.fillStyle="rgba(255,255,255,.88)",i.font="500 22px Arial, sans-serif",i.letterSpacing="8px",i.fillText((n.artist||"").toUpperCase(),105,120),i.letterSpacing="0px",pf(i,n.title.toUpperCase(),720,88);const a=n.title.toUpperCase().split(" ");let l=[""];for(const c of a){const h=`${l.at(-1)} ${c}`.trim();i.measureText(h).width>715&&l.at(-1)?l.push(c):l[l.length-1]=h}l=l.slice(0,3),l.forEach((c,h)=>i.fillText(c,105,795+h*93)),i.font="500 22px Arial, sans-serif",i.fillText(`${n.year||""}     /     ${String(e+1).padStart(2,"0")}`,108,968);for(let c=0;c<2300;c++){const h=c*73.71%1024,u=c*129.43%1024;i.fillStyle=c%2?"rgba(255,255,255,.07)":"rgba(0,0,0,.045)",i.fillRect(h,u,1.5,1.5)}return t}function Nu(n,e){const t=v.artResolution,i=document.createElement("canvas");i.width=i.height=t;const s=n.naturalWidth||n.width,r=n.naturalHeight||n.height,o=Math.min(s,r),a=e==="left"?0:e==="right"?s-o:(s-o)/2;return i.getContext("2d").drawImage(n,a,(r-o)/2,o,o,0,0,t,t),i}function mf(n){const e=v.artResolution,t=document.createElement("canvas");t.width=t.height=e;const i=t.getContext("2d");i.fillStyle=n.color||"#3b3a36",i.fillRect(0,0,e,e);const s=i.createLinearGradient(0,0,e,e);return s.addColorStop(0,"rgba(255,255,255,.08)"),s.addColorStop(1,"rgba(0,0,0,.3)"),i.fillStyle=s,i.fillRect(0,0,e,e),i.fillStyle=n.accent||"#dcc5a2",i.font="500 20px Arial, sans-serif",i.letterSpacing="8px",i.textAlign="center",i.fillText((n.artist||"").toUpperCase(),e/2,e-90),t}function NM(n,e){const t=v.insertWidth+v.spineWidth*2,i=v.artResolution,s=Math.round(i*t/v.insertHeight),r=Math.round(s*v.spineWidth/t),o=document.createElement("canvas");o.width=s,o.height=i;const a=o.getContext("2d"),l=e?(e.naturalWidth||e.width)/(e.naturalHeight||e.height):0;if(e&&l>(v.insertWidth+t)/2/v.insertHeight)return a.drawImage(e,0,0,s,i),o;const c=(n.artist||"").toUpperCase(),h=n.accent||"#dcc5a2";a.fillStyle=n.color||"#3b3a36",a.fillRect(0,0,s,i);const u=a.createLinearGradient(0,0,s,i);if(u.addColorStop(0,"rgba(255,255,255,.06)"),u.addColorStop(1,"rgba(0,0,0,.32)"),a.fillStyle=u,a.fillRect(0,0,s,i),e)a.drawImage(e,r,0,s-r*2,i);else{const d=r+72;a.fillStyle=h,a.font="500 18px Arial, sans-serif",a.letterSpacing="6px",a.fillText(c,d,104),a.letterSpacing="0px",pf(a,n.title,s-r*2-144,60,30),a.fillText(n.title,d,178);const f=n.tracks?.length?n.tracks.map((g,x)=>`${x+1}   ${g.title}`):[n.kind,n.year].filter(Boolean);a.font="400 24px Georgia, serif",f.slice(0,18).forEach((g,x)=>a.fillText(g,d,270+x*36)),a.fillStyle="#f2efe8",a.fillRect(d,i-196,236,118),a.fillStyle="#16161a";for(let g=0,x=0;g<200;x++){const p=2+Math.floor(ec(`${n.id}${x}`)*4)%3;x%2===0&&a.fillRect(d+18+g,i-180,p,70),g+=p+1}a.fillStyle=h,a.font="400 15px Arial, sans-serif",a.fillText(`℗ © ${n.year||""} ${c}`,d+270,i-94)}a.fillStyle=h,a.font="500 22px Arial, sans-serif",a.textAlign="center",a.textBaseline="middle",a.letterSpacing="3px";for(const d of[r/2,s-r/2])a.save(),a.translate(d,i/2),a.rotate(Math.PI/2),a.fillText(`${c}   ${n.title.toUpperCase()}`,0,0),a.restore();return o}function Za(n,e){const t=n.onBeforeCompile,i=n.customProgramCacheKey;return n.customProgramCacheKey=()=>`${i.call(n)}-shaded`,n.onBeforeCompile=(s,r)=>{t.call(n,s,r),s.uniforms.discShade=e,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float discShade;`).replace("#include <opaque_fragment>",`outgoingLight *= discShade;
#include <opaque_fragment>`)},n}function ku(n){return gt.power3InOut(je((n-v.viewPanFrom)/(v.viewPanUntil-v.viewPanFrom),0,1))}function Ou(n){return gt.power3InOut(je((n-.35)/.45,0,1))}function nc(n,e,t){const i=ko(n,e)+v.bookletSize*Ie;let s=0,r=1;for(let o=0;o<20;o++){const a=(s+r)/2;bo(a)<t/i?s=a:r=a}return r*v.bookletRollUntil}function kM(n,e){return Math.max(v.bookletPanFrom,nc(n,e,Mo(e)))}function Yo(n){return n>0?v.bookletEntrySpan:v.bookletEntrySpanNarrow}function Er(n){return n>0?v.bookletLiftRun:v.bookletLiftRunNarrow}function gf(n){return(n>0?v.bookletCylinder:v.bookletCylinderNarrow)*Ie}function kc(n){return 1/((n>0?v.bookletLiftRadius:v.bookletLiftRadiusNarrow)*Ie)}function ko(n,e,t=gf(e)){const i=vf(n,e)+Er(e)*Ie*kc(e);return(Yo(e)+Er(e))*Ie+(Math.PI-i)*t}function Mo(n){return(Yo(n)+Er(n)+v.bookletSize/2-(v.lidTabInset-v.lidTabRadius-1))*Ie}function Bu(n,e,t){const i=(v.lidTabInset-v.lidTabRadius-1)*Ie,s=ko(e,t)+v.bookletSize*Ie,r=(v.bookletSize*Ie-i)/s,o=(ko(e,t)+v.bookletSize*Ie/2-i)/s;if(n<=r)return n;const a=(n-r)/(1-r);return r+(1-r)*a*(1-a)*(1-a)+(o-r)*a*a*(3-2*a)}function bo(n){const e=n*n*n*(n*(n*6-15)+10);return n+(e-n)*v.bookletEase}function vf(n,e){return St.degToRad(e>0?v.bookletEntryAngle+180-n:v.bookletEntryAngleNarrow)}function zu(n,e,t,i,s=gf(t)){const r=vf(e,t),a=(ko(e,t,s)+v.bookletSize*Ie)*n,l=(v.lidTabInset-v.lidTabRadius-1)*Ie,c=-120*Ie/2+l*gt.power3Out(je(a/l,0,1));return i.set(c,a,t*s,r),Math.max(0,a+c-v.bookletSize*Ie/2)}function ic(n,e){const t=Math.sign(e.z),i=e.w>1e-4?Yo(t)*Ie:0,s=i+Er(t)*Ie,r=kc(t);return n<=0?0:n<i?e.w*n/i:n<s?e.w+(n-i)*r:Math.min(Math.PI,e.w+(s-i)*r+(n-s)/Math.abs(e.z))}function sc(n,e,t,i,s){if(n<=0)return s.set(Math.cos(-t*i),Math.sin(-t*i)).multiplyScalar(n);const r=Math.abs(e.z),o=Math.sign(e.z),a=e.w>1e-4?Yo(o)*Ie:0,l=a+Er(o)*Ie,c=kc(o),h=e.w+(l-a)*c,u=l+(Math.PI-h)*r;s.set(0,0);const d=(f,g,x,p)=>{if(g<=f)return;const m=t*(x-i),_=t*(x+p*(g-f)-i);Math.abs(_-m)<1e-4?(s.x+=(g-f)*Math.cos((m+_)/2),s.y+=(g-f)*Math.sin((m+_)/2)):(s.x+=(g-f)/(_-m)*(Math.sin(_)-Math.sin(m)),s.y+=(g-f)/(_-m)*(Math.cos(m)-Math.cos(_)))};return a>0&&d(0,Math.min(n,a),0,e.w/a),d(a,Math.min(n,l),e.w,c),d(l,Math.min(n,u),h,1/r),d(u,n,Math.PI,0),s}function Hu(n,e,t){if(e.z===0)return t.set(n,0,0);const i=Math.sign(e.z),s=e.x+e.y-i*n,r=sc(s,e,1,0,xf.along);return t.set(i*(e.x-r.x),-r.y,-i*ic(s,e))}function OM(n,e,t){return{uniforms:{bookletBend:n,bookletFlatten:e,bookletTuck:t},glsl:`
uniform vec4 bookletBend;
uniform float bookletFlatten;
uniform float bookletTuck;
float bookletAngleAt(float feed, float entrySpan, float run, float turn, float radius) {
  if (feed <= 0.0) return 0.0;
  if (feed < entrySpan) return bookletBend.w * feed / entrySpan;
  if (feed < run) return bookletBend.w + (feed - entrySpan) * turn;
  return min(PI, bookletBend.w + (run - entrySpan) * turn + (feed - run) / radius);
}
vec2 bookletPiece(float start, float end, float angle, float rate, float k, float centre) {
  if (end <= start) return vec2(0.0);
  float a = k * (angle - centre), b = k * (angle + rate * (end - start) - centre);
  if (abs(b - a) < 1e-4) return (end - start) * vec2(cos((a + b) / 2.0), sin((a + b) / 2.0));
  return (end - start) / (b - a) * vec2(sin(b) - sin(a), cos(a) - cos(b));
}
vec2 bookletAlong(float feed, float entrySpan, float run, float turn, float radius, float k, float centre) {
  if (feed <= 0.0) return feed * vec2(cos(-k * centre), sin(-k * centre));
  float lifted = bookletBend.w + (run - entrySpan) * turn, rounded = run + (PI - lifted) * radius;
  vec2 sum = vec2(0.0);
  if (entrySpan > 0.0) sum += bookletPiece(0.0, min(feed, entrySpan), 0.0, bookletBend.w / entrySpan, k, centre);
  sum += bookletPiece(entrySpan, min(feed, run), bookletBend.w, turn, k, centre);
  sum += bookletPiece(run, min(feed, rounded), lifted, 1.0 / radius, k, centre);
  return sum + bookletPiece(rounded, feed, PI, 0.0, k, centre);
}
// As bookletBent on the CPU.
vec3 bookletBent(float x) {
  if (bookletBend.z == 0.0) return vec3(x, 0.0, 0.0);
  float side = sign(bookletBend.z), radius = abs(bookletBend.z), k = 1.0 - bookletFlatten;
  float entrySpan = bookletBend.w > 1e-4 ? (side > 0.0 ? ${v.bookletEntrySpan*Ie} : ${v.bookletEntrySpanNarrow*Ie}) : 0.0;
  float run = entrySpan + (side > 0.0 ? ${v.bookletLiftRun*Ie} : ${v.bookletLiftRunNarrow*Ie});
  float turn = side > 0.0 ? ${1/(v.bookletLiftRadius*Ie)} : ${1/(v.bookletLiftRadiusNarrow*Ie)};
  float centreFeed = bookletBend.x + bookletBend.y, feed = centreFeed - side * x;
  float centre = bookletAngleAt(centreFeed, entrySpan, run, turn, radius);
  vec2 delta = bookletAlong(feed, entrySpan, run, turn, radius, k, centre) - bookletAlong(centreFeed, entrySpan, run, turn, radius, k, centre);
  return vec3(-side * delta.x, -delta.y, -side * k * (bookletAngleAt(feed, entrySpan, run, turn, radius) - centre));
}
// From page units to the closed booklet's millimetre frame, bent, and back.
vec3 deformSheet(vec3 p, vec2 uv) {
  // A tucked sheet draws in from its outer edges; the spine stays where it is.
  p.xy *= 1.0 - bookletTuck * vec2(${v.bookletTuck/v.bookletSize}, ${2*v.bookletTuck/v.bookletSize});
  float size = ${(v.bookletSize*Ie).toFixed(6)};
  float halfDepth = ${v.bookletThickness*Ie/2};
  vec3 paper = vec3((p.x - 0.5) * size, p.y * size, p.z * size - halfDepth);
  vec3 bent = bookletBent(paper.x);
  paper = vec3(bent.x + sin(bent.z) * paper.z, paper.y, bent.y + cos(bent.z) * paper.z);
  return vec3(paper.x / size + 0.5, paper.y / size, (paper.z + halfDepth) / size);
}`}}function BM(n,e,t,i){if(e.z===0)return i.set(n,0,0);const s=Math.sign(e.z),r=1-t,o=e.x+e.y,a=o-s*n,l=ic(o,e),{along:c,alongCentre:h}=xf;return sc(a,e,r,l,c).sub(sc(o,e,r,l,h)),i.set(-s*c.x,-c.y,-s*r*(ic(a,e)-l))}const xf={along:new he,alongCentre:new he};function zM(n,e){const t=n.onBeforeCompile,i=n.customProgramCacheKey;return n.customProgramCacheKey=()=>`${i.call(n)}-spin-blur`,n.onBeforeCompile=(s,r)=>{t.call(n,s,r),s.uniforms.discBlur=e,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float discBlur;`).replace("#include <map_fragment>",`#ifdef USE_MAP
vec4 sampledDiffuseColor;
if (discBlur < 0.002) {
  sampledDiffuseColor = texture2D(map, vMapUv);
} else {
  vec2 spinUv = vMapUv - 0.5;
  float jitter = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
  sampledDiffuseColor = vec4(0.0);
  for (int n = 0; n < ${v.spinBlurSamples}; n++) {
    float angle = discBlur * ((float(n) + jitter) / ${v.spinBlurSamples}.0 - 0.5);
    float c = cos(angle), s = sin(angle);
    sampledDiffuseColor += texture2D(map, 0.5 + mat2(c, s, -s, c) * spinUv);
  }
  sampledDiffuseColor /= ${v.spinBlurSamples}.0;
}
diffuseColor *= sampledDiffuseColor;
#endif`)},n}function HM(n,e){const{geometries:t,materials:i}=n,s={value:1},r={value:0},o=new zt,a=new zt;o.add(a);const l=Tr(zM(Za(bM(new Mn({roughness:v.frontRough,metalness:v.frontMetal,roughnessMap:n.textures.frontRough,clearcoat:v.frontClearcoat,clearcoatRoughness:.18*(1-v.texGloss),normalMap:n.textures.frontNormal,normalScale:new he(.3,.3),envMapIntensity:.85}),"cd-front",v.discSheen),s),r)),c=new nt(t.front,l),h=Tr(Za(EM(n,e),s)),u=Za(wM({roughness:.05,opacity:v.plasticOpacity,rings:v.plasticRings,side:Zn}),s),d=new nt(t.back,h),f=new nt(t.hub,u);c.position.z=v.discThickness/2+6e-4,d.position.z=-.01/2-6e-4,c.receiveShadow=d.receiveShadow=!0,d.rotation.y=Math.PI,f.rotation.x=Math.PI/2,a.add(c,d,f);const g=new nt(t.pick,i.pick);return o.add(g),{group:o,spin:a,pick:g,shade:s,blur:r,materials:[l,h,u],frontMaterial:l,art:null,disposed:!1}}function wo(n){n.position.set(-120*Ie/2,0,-1.2*Ie/2),n.quaternion.identity(),n.scale.setScalar(v.bookletSize*Ie)}function po(n){return{layout:n,loop:n==="single"}}function rc(n){return{sun:{position:[...v.bookletSunAt]},shadows:n}}// Fit a paper block and its printed first page inside the hinged cover.
const pattuPaperEdges = new Pn({color: "#d4c6aa", roughness: .96});
function createInsidePages(pageGeometry, pickMaterial, prints) {
  const pages = new nt(pageGeometry, pickMaterial);
  const halfWidth = v.bookletSize * Ie / 2;
  const thickness = v.bookletThickness * Ie;
  pages.position.set(bt.bookletX * Ie, 0, bt.trayFront * Ie);

  const edges = new nt(pageGeometry, pattuPaperEdges);
  edges.scale.set(1.01, 1.01, 1);
  const nextPage = new nt(pageGeometry, prints.nextInsidePage);
  nextPage.position.z = thickness;
  nextPage.receiveShadow = true;

  const hinge = new zt();
  hinge.position.set(-halfWidth, 0, 1.7 * thickness);
  const leaf = new nt(pageGeometry, [
    pattuPaperEdges, pattuPaperEdges, pattuPaperEdges, pattuPaperEdges,
    prints.insidePage, pattuPaperEdges,
  ]);
  leaf.position.x = halfWidth;
  leaf.scale.z = .22;
  leaf.receiveShadow = true;
  hinge.add(leaf);
  pages.add(edges, nextPage, hinge);
  pages.userData.pageTurn = { hinge, leaf, hasNext: false, turned: false, animating: false };
  return pages;
}
function GM(n,e,t,i,s,r){const{geometries:o,materials:a}=n,l=z=>new Pn({color:e.color||"#3b3a36",roughness:v.printRough,side:z}),c={value:new Et},h={value:1},u={value:0},d={value:0},f={cover:l(Zn),bookletBack:l(Zn),insert:Tr(l(Vt)),insidePage:new Pn({color:"#f1e6d0",roughness:.95}),nextInsidePage:new Pn({color:"#f1e6d0",roughness:.95})},g=Object.assign(document.createElement("canvas"),{width:2,height:2}),x=Math.max(4,e.bookletPageCount??((e.bookletScans?.length??1)+1)*2),p=v.bookletSheetGap,m={value:1},_=Array.from({length:x},()=>g);_[0]=UM(e.color||"#3b3a36"),_[x-1]=mf(e);const E=new eM({renderer:i,camera:s},{pages:_,preload:x,layout:"spread",pageAspect:1,loop:!1,paper:{grain:n.grain,wrinkles:v.bookletWrinkles,bulge:v.bookletBulge,sheetGap:p/v.bookletSize},lighting:rc(!1),deform:OM(c,d,u),interaction:{keyboard:!1}});E.enabled=!1;const y=()=>E.traverse(z=>{if(!(z instanceof nt)||z.userData.bookletTuck)return;z.userData.bookletTuck=!0;const $=z.material,V=$.onBeforeCompile;$.onBeforeCompile=(W,ve)=>{V.call($,W,ve),z.userData.stackGap=W.uniforms.uStackGap};const X={base:0,lofted:NaN};z.onBeforeRender=(W,ve,ge)=>{const ne=z.userData.stackGap??W.properties.get($).uniforms?.uStackGap;if(ne&&(ne.value!==X.lofted&&(X.base=ne.value),ne.value=X.lofted=X.base*m.value),h.value===0){u.value=0;return}const{point:j,matrix:se}=uM,Y=j.setFromMatrixPosition(ge.matrixWorld).applyMatrix4(se.copy(z.matrixWorld).invert()).z>0?0:Math.ceil(E.pageCount/2)-1;u.value=z.renderOrder===Y?0:h.value}});y(),E.addEventListener("change",()=>{y(),r()});const T=TM(n,t),b=new zt,R=new zt,S=new zt,A=new zt;b.add(R),R.add(S);const P=HM(n,t);P.group.position.set(v.discOffsetX*Ie,0,bt.disc*Ie),P.group.rotation.z=St.degToRad((t*2-1)*v.discTurn),P.shade.value=v.discClosedShade,P.group.updateMatrix();const U=P.group.matrix.clone(),F=new nt(o.insert,f.insert);
const insidePages = createInsidePages(o.booklet, a.pick, f);
F.receiveShadow=!0,S.add(new nt(o.baseShell,T),F,insidePages,A),A.position.x=bt.hingeX*Ie;const C=new nt(o.booklet,a.pick);C.add(E),wo(E),C.position.set((bt.bookletX-bt.hingeX)*Ie,0,bt.booklet*Ie),C.updateMatrix();const D=C.matrix.clone();A.add(C,new nt(o.lidShell,T));const B=new nt(o.casePick,a.pick);return b.add(B),{group:b,spin:R,body:S,lid:A,booklet:C,insidePages,bookletModel:E,bookletSources:_,bookletTextures:[],bookletTuck:h,bookletFlatten:d,sheetGap:p,stackLoft:m,bookletReady:!1,bookletLoaded:!1,artLoaded:!1,artSmall:!1,insertLoaded:!1,pick:B,disc:P,prints:f,bend:c,plastic:T,disposed:!1,open:0,openTween:null,hover:0,spinX:0,spinY:0,spinRest:0,resetTween:null,placed:!1,envTurn:0,discRest:U,bookletRest:D,pushX:0,pushY:0,pushZ:0,pushVX:0,pushVY:0,pushVZ:0,pushRotX:0,pushRotY:0,pushRotVX:0,pushRotVY:0}}const Ot=(()=>{const n=v.playerSize/2,e=v.playerHeight/2,t=e-v.playerDiscDrop;return{half:n,top:e,seat:t,floor:e-v.wellDepth,flat:n-v.playerCorner}})();function oc(n,e,t,i=0,s=0,r=new Pr){const[o,a,l,c]=[i-n/2,i+n/2,s-e/2,s+e/2];return r.moveTo(o+t,l),r.lineTo(a-t,l),r.quadraticCurveTo(a,l,a,l+t),r.lineTo(a,c-t),r.quadraticCurveTo(a,c,a-t,c),r.lineTo(o+t,c),r.quadraticCurveTo(o,c,o,c-t),r.lineTo(o,l+t),r.quadraticCurveTo(o,l,o+t,l),r}const Us=(n,e,t,i=0,s=0)=>oc(n,e,t,i,s),Oc=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches&&window.innerWidth>v.narrowWidth,Ar=["previous","play","pause","next"];function VM(n){const e=(...i)=>new Pr(i.map(([s,r])=>new he(s,r))),t=(i,s=.55)=>Us(s,2.3,.12,i,0);switch(n){case"play":return[e([-.85,-1.2],[1.2,0],[-.85,1.2])];case"pause":return[t(-.6,.65),t(.6,.65)];case"next":return[e([-1.2,-1.1],[.55,0],[-1.2,1.1]),t(.95)];case"previous":return[e([1.2,-1.1],[-.55,0],[1.2,1.1]),t(-.95)]}}function _f(n=0){const e=new Sr;return e.absarc(0,-0,v.wellRadius+n,0,Math.PI*2,!0),e}function WM(){const n=v.playerBevel,e=Us(v.playerSize-n*2,v.playerSize-n*2,v.playerCorner-n);e.holes.push(_f(n));const t=new Os(e,{depth:v.playerHeight-n*2,bevelEnabled:!0,bevelThickness:n,bevelSize:n,bevelSegments:3,curveSegments:96});return t.rotateX(-Math.PI/2),t.translate(0,-9+n,0),t}function XM(){const n=v.playerFrame,e=Us(v.playerSize-n*2,v.playerSize-n*2,Math.max(1,v.playerCorner-n));e.holes.push(_f(v.playerRing));const t=new Os(e,{depth:1.15,bevelEnabled:!1,curveSegments:96});t.rotateX(-Math.PI/2),t.translate(0,Ot.top-.4,0);const i=t.attributes.position,s=new Float32Array(i.count*3),r=new Je(v.playerTopBack),o=new Je(v.playerTop),a=new Je;for(let l=0;l<i.count;l++){const c=je((i.getZ(l)+Ot.half)/v.playerSize,0,1);a.copy(r).lerp(o,c*c*(3-2*c)).toArray(s,l*3)}return t.setAttribute("color",new gn(s,3)),t}function $M(){const n=v.wellRadius,e=Ot.top,t=v.playerRing,i=[[n+t+.8,e+.76],[n+t,e+1.05],[n+t-1,e+.95],[n+.9,e-.4],[n-.1,e-2.2],[n-.5,e-3.4]];return new Mi(i.map(([s,r])=>new he(s,r)),128)}function qM(){const n=Ot.seat-v.discThickness/Ie/2,e=v.holeSize*60-.2,t=[[8,Ot.floor],[8,n-2.4],[16,n-2.2],[16.4,n-1.6],[16.4,n-.4],[16,n],[e+1.2,n],[e,n+.2],[e,n+1.4],[e*.8,n+2.4],[e*.4,n+2.9],[0,n+3]];return new Mi(t.map(([i,s])=>new he(i,s)),64)}function YM(n){const e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d"),i=t.createImageData(n,n),s=new Float32Array(n).map((r,o)=>(Oi(0,o*3.7)-.5)*.08);for(let r=0;r<n;r++)for(let o=0;o<n;o++){const a=(Oi(Math.floor(o/16),Math.floor(r/16))+Oi(Math.floor(o/16)+1,Math.floor(r/16)+7))/2,l=.86+(Oi(o,r)-.5)*v.playerTurntableSpeckle+(a-.5)*.06+s[r],c=(r*n+o)*4;i.data[c]=i.data[c+1]=i.data[c+2]=je(l,0,1)*255,i.data[c+3]=255}return t.putImageData(i,0,0),e}function KM(n,e,t){const i=document.createElement("canvas");i.width=Math.round(n*t),i.height=Math.round(e*t);const s=i.getContext("2d");return s.setTransform(t,0,0,-t,i.width/2,i.height/2),{canvas:i,ctx:s}}function ZM(n,e){const t=[],i=Me=>(t.push(Me),Me),s=new zt,r=i(new mn(ff(512)));r.wrapS=r.wrapT=Kn,r.anisotropy=n;const o=i(Uu(new Mn({color:v.playerColor,roughness:v.playerRough,metalness:0,clearcoat:.5,clearcoatRoughness:.3,envMapIntensity:v.playerEnvLift}),"player-body",r)),a=i(new Mn({color:v.playerChrome,roughness:.12,metalness:1,side:Vt}));s.add(new nt(i(WM()),o));const l=i(Uu(new Mn({vertexColors:!0,roughness:.08,metalness:0,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:v.playerEnvLift}),"player-top",r,v.playerTopSheen)),c=i(new Pn({color:v.playerTrim,roughness:.8,metalness:0,envMapIntensity:v.playerEnvLift}));s.add(new nt(i(XM()),[l,c]));const h=i(new Mn({color:v.playerMetal,roughness:v.playerRingRough,metalness:1,clearcoat:v.playerRingCoat,clearcoatRoughness:.25,envMapIntensity:v.playerEnvLift*v.playerRingEnv,side:Vt}));s.add(new nt(i($M()),h));const[u,d,f]=[13,21,50],g=new Pr;g.absarc(0,-0,v.wellRadius+v.playerBevel,0,Math.PI*2,!1),g.holes.push(oc(u,f-d,2,0,(d+f)/2-v.wellZ,new Sr));const x=i(new Pn({color:v.playerWell,roughness:.85,envMapIntensity:v.playerEnvLift})),p=new nt(i(new hr(g,96)),x);p.rotation.x=-Math.PI/2,p.position.y=Ot.floor;const m=i(new Mi([new he(v.wellRadius-.4,Ot.top-3.2),new he(v.wellRadius-.4,Ot.floor)],192)),_=new nt(m,i(new Pn({color:v.playerWell,roughness:.85,envMapIntensity:v.playerEnvLift,side:Vt})));_.position.z=v.wellZ;const E=f-d,y=v.wellZ-(d+f)/2,T=new nt(i(new jn(u,4,E)),i(new Pn({color:v.playerHoles,roughness:.9,side:fn})));T.position.set(0,Ot.floor-2,y);const b=v.wellZ-33,R=new nt(i(new jn(10,1.6,8)),i(new Pn({color:v.playerWell,roughness:.7})));R.position.set(0,Ot.floor-1.4,b);const S=new nt(i(new Dc(2,.35,8,32).rotateX(Math.PI/2)),h);S.position.set(0,Ot.floor-.5,b);const A=new nt(i(new Fo(1.6,24,12,0,Math.PI*2,0,Math.PI/2).scale(1,.5,1)),i(new Mn({color:"#191530",roughness:.05,clearcoat:1,iridescence:1,iridescenceIOR:1.8,iridescenceThicknessRange:[250,500]})));A.position.set(0,Ot.floor-.6,b);const P=new zt;P.position.z=v.wellZ;const U=i(e.clone());U.wrapS=U.wrapT=Kn,U.repeat.set(v.playerTurntableGrain,v.playerTurntableGrain/3);const F=i(new mn(YM(256)));F.colorSpace=Bt,F.wrapS=F.wrapT=Kn,F.repeat.set(4,1),F.anisotropy=n;const k=i(new Pn({color:new Je(v.playerColor).multiplyScalar(v.playerTurntableTone),map:F,roughness:.8,metalness:0,envMapIntensity:v.playerEnvLift,normalMap:U,normalScale:new he(v.playerTurntableBump,v.playerTurntableBump)}));P.add(new nt(i(qM()),k));const C=i(new Fo(.8,16,8)),D=v.holeSize*60-.2;for(let Me=0;Me<3;Me++){const Fe=new nt(C,a),We=Me/3*Math.PI*2;Fe.position.set(Math.cos(We)*(D-.3),Ot.seat+1.1,Math.sin(We)*(D-.3)),P.add(Fe)}s.add(p,_,T,R,S,A,P);const B=v.playerSize*1.8,z=3,{canvas:$,ctx:V}=KM(B,B,z),X=(Me,Fe,We)=>{const O=B*2;V.shadowColor="#000",V.shadowBlur=Fe*z*2,V.shadowOffsetX=-O*z,V.shadowOffsetY=0,V.globalAlpha=We,V.fillStyle="#000",V.beginPath(),V.roundRect(O-v.playerSize/2-Me,-146/2-Me,v.playerSize+Me*2,v.playerSize+Me*2,v.playerCorner+Me),V.fill()};X(v.playerSize*.06,v.playerSize*.09,.55),X(0,v.playerSize*.015,1);const W=i(new mn($));W.anisotropy=n;const ve=new nt(i(new ei(B,B)),i(new xr({map:W,transparent:!0,opacity:v.playerShadow,depthWrite:!1,fog:!1})));ve.rotation.x=-Math.PI/2,ve.position.y=-18/2-.3,ve.renderOrder=-1,s.add(ve);const ge={polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2},ne=i(new Pn({color:v.playerHoles,roughness:.8,...ge})),j=i(new Pn({color:v.playerPrint,emissive:v.playerPrint,emissiveIntensity:.45,roughness:.55,transparent:!0,opacity:v.playerPrintOpacity,depthWrite:!1,...ge})),se=new zt;se.position.z=Ot.half,s.add(se);const[G,Y,le]=JM(),_e=v.playerScreenDot,[ue,Re]=[Math.floor((G-1.6)/_e),Math.floor((Y-1.6)/_e)],Ye=Math.max(2,Math.round(_e*v.playerScreenResolution)),re=document.createElement("canvas");[re.width,re.height]=[ue*Ye,Re*Ye];const ce=re.getContext("2d"),fe=Me=>{const Fe=document.createElement("canvas");Fe.width=Fe.height=Ye;const We=Fe.getContext("2d");return We.fillStyle=Me,We.beginPath(),We.arc(Ye/2,Ye/2,Ye*.48,0,Math.PI*2),We.fill(),ce.createPattern(Fe,"repeat")},pe=new Je(v.playerScreenColor),xe=i(new mn(re));xe.colorSpace=Bt,xe.anisotropy=n;const $e=new nt(i(new Os(Us(G,Y,1.2),{depth:.2,bevelEnabled:!0,bevelThickness:.15,bevelSize:.15,bevelSegments:2,curveSegments:6})),i(new Mn({color:"#050506",roughness:.05,metalness:0,clearcoat:1,clearcoatRoughness:.02})));$e.position.x=le;const Ve=new nt(i(new ei(ue*_e,Re*_e)),i(new xr({map:xe,transparent:!0,toneMapped:!1,depthWrite:!1})));Ve.position.set(le,0,.4),se.add($e,Ve);const[qe,Ke,N]=[v.playerButtonWidth,v.playerButtonHeight,v.playerButtonGap],lt=Us(qe+1.2,Ke+1.2,2);lt.holes.push(oc(qe,Ke,1.5,0,0,new Sr));const st=i(new hr(lt,6)),L=i(new Os(Us(qe-.6,Ke-.6,1.3),{depth:.5,bevelEnabled:!0,bevelThickness:.3,bevelSize:.3,bevelSegments:3,curveSegments:8})),M=i(new Mn({color:v.playerButtonColor,roughness:.42,metalness:0,clearcoat:.4,clearcoatRoughness:.35,envMapIntensity:v.playerEnvLift})),q=Ot.flat-v.playerScreenMargin,J=Ar.map((Me,Fe)=>{const We=q-qe/2-(Ar.length-1-Fe)*(qe+N),O=new nt(st,ne);O.position.set(We,0,.02);const be=new zt;be.position.x=We;const oe=new nt(L,M),Ee=i(j.clone()),Ce=new nt(i(new hr(VM(Me),4)),Ee);return Ce.position.z=.82,be.add(oe,Ce),se.add(O,be),{kind:Me,cap:oe,mark:Ee,group:be,hover:0,press:0,tween:null}}),Q=new zt;Q.position.x=-73,Q.rotation.y=-Math.PI/2,s.add(Q);const me=Math.floor((v.playerGrilleTo-v.playerGrilleFrom)/v.playerGrillePitch)+1,ye=v.playerGrilleRows,ie=new dg(i(new yr(v.playerGrilleHole,16)),ne,me*ye),ae=new at;for(let Me=0;Me<me*ye;Me++){const Fe=(v.playerGrilleFrom+v.playerGrilleTo)/2+(Me%me-(me-1)/2)*v.playerGrillePitch,We=(Math.floor(Me/me)-(ye-1)/2)*v.playerGrillePitch;ie.setMatrixAt(Me,ae.makeTranslation(Fe,We,.2))}Q.add(ie);const we=new nt(i(new Mi([[3.1,0],[3,.25],[2.7,.4],[2.15,.4],[1.9,.2],[1.75,0]].map(([Me,Fe])=>new he(Me,Fe)),48).rotateX(Math.PI/2)),h),ke=new nt(i(new yr(1.75,32)),ne);ke.position.z=.02,we.position.x=ke.position.x=v.playerJackAt,Q.add(we,ke);const Ae=new at().compose(new I(0,Ot.seat,v.wellZ),new Gt().setFromAxisAngle(new I(1,0,0),-Math.PI/2),new I(1,1,1).multiplyScalar(1/Ie));s.rotation.y=St.degToRad(v.playerYaw);const Te={ctx:ce,dots:fe("#fff"),unlit:fe(`rgba(${pe.toArray().map(Me=>Math.round(Me*255)).join(", ")}, ${v.playerScreenUnlit})`),texture:xe,scrolls:!1,title:"",since:0};return{group:s,seat:Ae,spindle:P,screen:Te,buttons:J,resources:t}}function JM(){const n=Ar.length*v.playerButtonWidth+(Ar.length-1)*v.playerButtonGap,[e,t]=[-66+v.playerScreenMargin,Ot.flat-v.playerScreenMargin-n-v.playerScreenGap];return[t-e,v.playerHeight-v.playerBevel*2-v.playerScreenMargin*2,(e+t)/2]}function Gu(n,e,t=0){const{ctx:i,dots:s,unlit:r,texture:o}=n.screen,{width:a,height:l}=i.canvas,c=l/10;i.globalCompositeOperation="source-over",i.clearRect(0,0,a,l),i.fillStyle=v.playerScreenColor,i.textBaseline="middle";const h=l*.52,u=`500 ${c*4.2}px "DM Mono", monospace`,d=`500 ${c*4.6}px "DM Sans", sans-serif`,f=c*4,g=e.album?.tracks??[];let x,p,m;e.track===null?(x="",p=e.album?`${e.album.title}  ·  ${e.album.artist}`:"",m=g.length?`${g.length} TRACKS`:""):(x=String(e.track).padStart(2,"0"),p=g[e.track-1]?.title??"",m=`${Math.floor(e.seconds/60)}:${String(Math.floor(e.seconds%60)).padStart(2,"0")}`),p!==n.screen.title&&(n.screen.title=p,n.screen.since=t);let _=f;if(e.track!==null){const R=c*3.2;i.beginPath(),e.playing?(i.moveTo(_,h-R/2),i.lineTo(_+R*.85,h),i.lineTo(_,h+R/2),i.closePath()):(i.rect(_,h-R/2,R*.28,R),i.rect(_+R*.55,h-R/2,R*.28,R)),i.fill(),_+=R+c*2.4,i.font=u,i.fillText(x,_,h),_+=i.measureText("00").width+c*4}i.font=d;const E=i.measureText(p).width;i.font=u;const y=c*5;e.track===null&&E>a-f*2-_-i.measureText(m).width-y&&(m="");const T=m?i.measureText(m).width+y:0;i.textAlign="right",i.fillText(m,a-f,h),i.textAlign="left";const b=a-f-T-_;if(i.font=d,n.screen.scrolls=E>b,i.save(),i.beginPath(),i.rect(_,0,b,l),i.clip(),n.screen.scrolls){const R=c*14,S=v.playerScreenScroll*c,A=v.playerScreenHold+(E+R)/S,P=(t-n.screen.since)%A,U=Math.max(0,P-v.playerScreenHold)*S;i.fillText(p,_-U,h),i.fillText(p,_-U+E+R,h);const F=(C,D,B)=>{if(B<=0)return;const z=i.createLinearGradient(C,0,D,0);z.addColorStop(0,`rgba(0,0,0,${B})`),z.addColorStop(1,"rgba(0,0,0,0)"),i.globalCompositeOperation="destination-out",i.fillStyle=z,i.fillRect(Math.min(C,D),0,Math.abs(D-C),l),i.globalCompositeOperation="source-over"},k=c*3;F(_,_+k,Math.min(1,U/k,(E+R-U)/k)),F(_+b,_+b-k,1)}else i.fillText(p,_,h);i.restore(),i.globalCompositeOperation="destination-in",i.fillStyle=s,i.fillRect(0,0,a,l),i.globalCompositeOperation="destination-over",i.fillStyle=r,i.fillRect(0,0,a,l),i.globalCompositeOperation="source-over",o.needsUpdate=!0}class QM{element;onIndexChange;onProgress;onReady;onPointer;onPlayerButton;bookletPages;onPage;pointerState;ready;albums;cases;tweens;raf;renderingFrame=!1;lastTime;wasHidden=!1;forceFrames;quality;qualityRecoveryTimer=0;frameStats;reducedMotion;canHover;position;lastPosition;inertia;settle;flow;target;indexTween;active;intro;pointer;hitUV;hovered;pointerMoved;pointerInside;press;dragging;spinning;suppressClickUntil;move;wheel;environment;loadTimer;loaded;raycaster;renderer;scene;camera;gallery;facing;screenRight;toCamera;opened;shared;resizeObserver;prepared;destroyed;startIndex;openOnReveal;listenOnReveal;readOnReveal;leaveTween=null;introTween=null;leave=0;onShown=null;playerBuilt=null;playerScale=1;touch=!1;frameInterval=1/60;screenScrollAt=0;screenScrollTimer=0;scratchBox=new Si;scratchBox2=new Si;scratchPoint=new I;playerRest;lidAngle=v.lidOpenAngle;bookletSide=1;openFit=1;rowGap=v.hGap;playerLean=0;listen;listenTween;listening;inPlayer;seated;playing;spinRate;overDisc;overBooklet;overButton;focusedButton;screenState;lens;lensRise=0;short=!1;openRoom=0;rimLight;ambientLight;keyLight;fillLight;stripLight;bookletAmbient;read=0;timeScale=1;bookletDurations={open:v.readDuration,close:v.unreadDuration};readTween=null;reading=-1;inBooklet=!1;magazine=null;magazineReady=!1;bookletShown=!1;floorShade=0;floorShadeTween=null;bookletShift=.5;bookletTarget=.5;closingBooklet=!1;closingFrom=0;bookletRequest=0;pendingPages=null;frameJobs=[];jobTimer=0;bookletPage=1;bookletSingle=!1;overPage=null;bookletRig;bookletSun;bookletFloor;constructor(e,t,i,{onProgress:s,onReady:r,onPointer:o,onPlayerButton:a,bookletPages:l,onPage:c,fogColor:h=v.fogColor,startIndex:u=0,openOnReveal:d=!1,listenOnReveal:f=!1,readOnReveal:g=!1}={}){this.element=e,this.startIndex=u,this.openOnReveal=d,this.listenOnReveal=f,this.readOnReveal=g,this.listen=0,this.listenTween=null,this.listening=-1,this.inPlayer=!1,this.seated=!1,this.playing=!1,this.spinRate=0,this.overDisc=!1,this.overBooklet=!1,this.overButton=null,this.focusedButton=null,this.screenState={track:null,seconds:0,playing:!1},this.lens=0,this.onIndexChange=i,this.onProgress=s,this.onReady=r,this.onPointer=o,this.onPlayerButton=a,this.bookletPages=l,this.onPage=c,this.pointerState="",this.ready=!1,this.albums=[],this.cases=[],this.tweens=new Set,this.raf=0,this.lastTime=0,this.forceFrames=0,this.quality=0,this.frameStats={awake:0,total:0,count:0,area:0,dpr:0},this.reducedMotion=Oc(),this.canHover=window.matchMedia("(hover: hover)").matches,this.position=0,this.lastPosition=0,this.inertia=0,this.settle=0,this.flow=0,this.target=-1,this.indexTween=null,this.active=-1,this.intro={active:0,others:0},this.pointer=new he,this.hitUV={x:0,y:0},this.hovered=-1,this.pointerMoved=!1,this.pointerInside=!1,this.press=null,this.dragging=!1,this.spinning=-1,this.suppressClickUntil=0,this.move={x:0,y:0,time:0,speedX:0,speedY:0},this.resetWheel(),this.raycaster=new Yd;const x=this.touch=window.matchMedia("(pointer: coarse)").matches;this.renderer=new rS({antialias:(window.devicePixelRatio||1)<2||x,alpha:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=Bt,this.renderer.toneMapping=pc,this.renderer.toneMappingExposure=v.exposure,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=MM?Hp:sr,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.renderer.domElement.setAttribute("aria-hidden","true"),e.appendChild(this.renderer.domElement),this.scene=new eg,this.scene.fog=new Ac(h,7,14),this.camera=new bn(v.cameraFOV,1,v.cameraNear,100),this.camera.position.set(0,0,v.cameraDistance),this.camera.lookAt(0,0,0),this.gallery=new zt,this.gallery.rotation.set(St.degToRad(v.galleryRotX),St.degToRad(v.galleryRotY),0);const p=this.gallery.quaternion.clone().invert(),m=new Gt().setFromAxisAngle(new I(1,0,0),-St.degToRad(v.openTilt));this.facing=new yi().setFromQuaternion(p.clone().multiply(m)),this.screenRight=new I(1,0,0).applyQuaternion(p),this.toCamera=new I(0,0,1).applyQuaternion(p),this.opened=-1,this.gallery.visible=!1,this.scene.add(this.gallery),this.addLights(),this.shared=RM(this.renderer),this.renderer.initTexture(this.shared.textures.scratches),this.renderer.initTexture(this.shared.textures.caseWear),this.playerRest=new I,this.frame=this.frame.bind(this),this.onPointerDown=this.onPointerDown.bind(this),this.onPointerDrag=this.onPointerDrag.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onPointerCancel=this.onPointerCancel.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerLeave=this.onPointerLeave.bind(this),this.onClick=this.onClick.bind(this),this.onContextMenu=this.onContextMenu.bind(this),this.onWheel=this.onWheel.bind(this),this.onVisibility=this.onVisibility.bind(this),document.addEventListener("visibilitychange",this.onVisibility),e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointermove",this.onPointerMove),e.addEventListener("pointerleave",this.onPointerLeave),e.addEventListener("click",this.onClick),e.addEventListener("contextmenu",this.onContextMenu),e.addEventListener("wheel",this.onWheel,{passive:!1}),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.albums=t,this.resize();const _=PM(CM()).then(y=>{if(!this.destroyed)return LM(this.shared,y,this.renderer),this.setAlbums(t),this.loaded}),E=new Promise(y=>{this.loadTimer=window.setTimeout(()=>y(!0),v.loadTimeout)});Promise.race([Promise.allSettled([_,aM]).then(y=>y.some(T=>T.status==="rejected")),E]).then(y=>this.prepare(y))}prepare(e=!1){if(this.prepared||this.destroyed)return;clearTimeout(this.loadTimer),this.prepared=!0,this.touch&&this.buildPlayer(),e&&this.cases.forEach((i,s)=>{if(i.artLoaded)return;const r=Fu(this.albums[s],ec(this.albums[s].id??s));this.upload(this.setArt(i.disc,r)),this.setPrint(i,"cover",r),this.syncBooklet(i)}),this.gallery.visible=!0;const t=this.renderer.compileAsync(this.scene,this.camera);this.gallery.visible=!1,Promise.all([document.fonts?.load('500 10px "DM Mono"'),document.fonts?.load('500 10px "DM Sans"')]).then(()=>{this.destroyed||this.drawScreen()}).catch(()=>{}),t.catch(()=>{}),this.destroyed||this.onReady?.()}reveal(){!this.prepared||this.ready||this.destroyed||(this.ready=!0,this.gallery.visible=!0,this.playIntro(),this.updateCursor(),this.request(3))}show(e,t=!1,i=!1,s=!1,r){if(this.startIndex=je(Math.round(e),0,Math.max(0,this.cases.length,this.albums.length)-1),this.openOnReveal=t||i||s,this.listenOnReveal=i,this.readOnReveal=s&&!i,this.destroyed)return;if(!this.ready&&!this.leaveTween){this.position=this.lastPosition=this.startIndex;return}if(this.onShown=r??null,this.leaveTween)return;this.ready=!1,this.press=null,this.dragging=!1,this.spinning=-1,this.inPlayer=this.seated=this.playing=!1,this.inBooklet=this.closingBooklet=!1,this.overPage=null,this.magazine&&(this.magazine.enabled=!1),this.hovered=-1,this.overDisc=this.overBooklet=!1,this.overButton=null,this.tweens.clear(),this.indexTween=this.listenTween=this.introTween=this.readTween=null,this.cases.forEach(a=>{a.openTween=a.resetTween=null}),this.inertia=this.flow=0,this.target=-1,this.updateCursor();const o=()=>{this.leaveTween=null,this.restart()};if(this.reducedMotion)return o();this.leaveTween=this.tween(this,{leave:1},v.leaveDuration,gt.linear,o)}restart(){this.listening>=0&&this.returnDisc(),this.reading>=0&&this.returnBooklet(),this.listen=this.spinRate=this.leave=this.read=0,this.gallery.position.y=0,this.playerBuilt&&(this.playerBuilt.group.visible=!1),this.cases.forEach(t=>{t.open=t.hover=0,t.spinX=t.spinY=t.spinRest=0,Object.assign(t,{pushX:0,pushY:0,pushZ:0,pushVX:0,pushVY:0,pushVZ:0,pushRotX:0,pushRotY:0,pushRotVX:0,pushRotVY:0}),t.placed=!1}),this.position=this.lastPosition=this.startIndex,this.inertia=this.settle=this.flow=0,this.active=-1,this.opened=-1,this.resetWheel(),this.intro.active=this.intro.others=0,this.ready=!0,this.gallery.visible=!0,this.playIntro(),this.updateCursor(),this.request(3);const e=this.onShown;this.onShown=null,e?.()}addLights(){this.ambientLight=new s0("#ffffff",v.ambientIntensity),this.scene.add(this.ambientLight);const e=new so(v.keyColor,v.keyIntensity);this.keyLight=e,e.position.set(v.keyX,v.keyY,6);const t=new so("#ffffff",v.fillIntensity);this.fillLight=t,t.position.set(-5,-2,4);const i=new so(v.rimColor,v.rimIntensity);this.rimLight=i,i.position.set(0,3,-6);const s=new r0("#ffffff",v.topStripIntensity,6,.4);this.stripLight=s,s.position.set(0,3.2,3),s.lookAt(0,0,0),this.scene.add(e,t,i,s);const r=new so("#ffffff",0);r.position.set(...v.bookletSunAt),r.castShadow=!0,r.shadow.mapSize.set(v.bookletShadowMap,v.bookletShadowMap),[r.shadow.bias,r.shadow.normalBias]=v.shadowBias,r.shadow.radius=v.shadowSoft;const o=new nt(new ei(8,8),Tr(new Kg({opacity:0})));o.position.z=-.24/v.bookletSize,o.receiveShadow=!0,o.visible=!1,this.bookletRig=new zt,this.bookletAmbient=new t0(v.bookletAmbientSky,v.bookletAmbientGround,0),this.bookletRig.add(r,r.target,o,this.bookletAmbient),this.bookletSun=r,this.bookletFloor=o,this.scene.add(this.bookletRig);const a=new Yl(this.renderer),l=new mn(pM());l.mapping=go,this.environment=a.fromEquirectangular(l),l.dispose(),a.dispose(),this.scene.environment=this.environment.texture,this.scene.environmentIntensity=v.environmentIntensity}setAlbums(e){this.cases[this.listening]?.disc.group.removeFromParent(),this.cases[this.reading]?.booklet.removeFromParent(),this.disposeMagazine(),this.reading=-1,this.inBooklet=!1,this.read=0,this.readTween=null,this.listening=-1,this.inPlayer=this.seated=this.playing=!1,this.listen=this.spinRate=0,this.listenTween=null,this.gallery.position.y=0,this.playerBuilt&&(this.playerBuilt.group.visible=!1),this.dropFrameJobs(),this.cases.forEach(r=>{r.disposed=!0,r.disc.materials.forEach(o=>o.dispose()),r.disc.art?.dispose(),r.plastic.dispose(),Object.values(r.prints).forEach(o=>{o.map?.dispose(),o.dispose()}),r.bookletModel.dispose(),r.bookletTextures.forEach(o=>o.dispose()),this.gallery.remove(r.group)}),this.albums=e,this.tweens.clear(),this.indexTween=null,this.position=this.lastPosition=je(Math.round(this.startIndex),0,Math.max(0,e.length-1)),this.inertia=this.settle=this.flow=0,this.target=-1,this.active=-1,this.hovered=-1,this.opened=-1;let t=0;this.onProgress?.(0,e.length);const i=[],s=this.element.clientWidth<=v.narrowWidth;this.cases=e.map((r,o)=>{const a=ec(r.id??o),l=GM(this.shared,r,a,this.renderer,this.camera,()=>this.request());l.bookletModel.addEventListener("pagechange",()=>{this.magazine===l.bookletModel&&this.reportPage()}),l.bookletModel.addEventListener("ready",()=>this.bookletPagesIn(l)),l.pick.userData.index=o;for(const f of l.disc.materials)f.envMap=this.environment.texture,f.envMapIntensity=v.environmentIntensity;const c=l.bookletSources[0];this.setArt(l.disc,c),this.setPrint(l,"cover",c);const h=s&&!!(r.discSmall||r.coverSmall),u=h?[r.discSmall??r.disc,r.coverSmall??r.cover]:[r.disc,r.cover],d=Math.abs(o-this.position)<=v.revealRadius?"high":"auto";return i.push(Promise.all([this.loadImage(u[0],d),this.loadImage(u[1],d)]).then(async([f,g])=>{if(l.disposed)return;const x=f&&g?null:Fu(r,a);await this.applyArt(l,f,g,x)&&(l.artLoaded=!0,l.artSmall=h,this.onProgress?.(t+=1,e.length),this.openOnReveal&&o===this.position&&this.loadInsert(l,r))})),this.gallery.add(l.group),l}),this.loaded=Promise.all(i.filter((r,o)=>Math.abs(o-this.position)<=v.revealRadius)),this.request(3)}loadImage(e,t="auto"){return new Promise(i=>{if(!e)return i(null);const s=new Image;s.decoding="async",s.fetchPriority=t,s.onload=()=>s.decode().then(()=>i(s),()=>i(s)),s.onerror=()=>i(null),s.src=e})}async applyArt(e,t,i,s){const r=t?await DM(t):null;return e.disposed||(await this.upload(this.setArt(e.disc,t||i||s,r)),e.disposed)?!1:(this.setPrint(e,"cover",i?Nu(i):s),this.syncBooklet(e),!0)}sharpenArt(){return Promise.all(this.cases.map(async(e,t)=>{if(!e.artSmall)return;const i=this.albums[t],[s,r]=await Promise.all([this.loadImage(i.disc,"high"),this.loadImage(i.cover,"high")]);e.disposed||!e.artSmall||!(s||r)||await this.applyArt(e,s,r,null)&&(e.artSmall=!1)}))}loadInsert(e,t){e.insertLoaded||(e.insertLoaded=!0,Promise.all([this.loadImage(t.back),this.loadImage(t.bookletBack),this.loadImage(t.bookletScans?.[0]),this.loadImage(t.bookletScans?.[1])]).then(([i,s,page,nextPage])=>this.inFrame(()=>{e.disposed||(this.setPrint(e,"insert",NM(t,i)),page&&this.setPrint(e,"insidePage",Nu(page)),nextPage&&(this.setPrint(e,"nextInsidePage",Nu(nextPage)),e.insidePages.userData.pageTurn.hasNext=!0),this.setPrint(e,"bookletBack",s?Nu(s,t.bookletBackCrop):mf(t)),this.syncBooklet(e))})))}setArt(e,t,i=null){const s=FM(t,this.shared.anisotropy,i);return e.art?.dispose(),e.art=s,e.frontMaterial.map=s,e.frontMaterial.needsUpdate=!0,this.request(),s}setPrint(e,t,i){const s=e.prints[t],r=new mn(i);r.colorSpace=Bt,r.anisotropy=this.shared.anisotropy,s.map?.dispose(),s.map=r,s.color.set("#ffffff"),t==="insert"&&this.upload(r),s.needsUpdate=!0,(t==="cover"||t==="bookletBack")&&(e.bookletSources[t==="cover"?0:e.bookletSources.length-1]=r),this.request()}syncBooklet(e){e.bookletModel.update({pages:e.bookletSources})}playIntro(){if(this.openOnReveal&&this.openAtOnce(),this.listenOnReveal&&this.openOnReveal&&this.insert(!0),this.readOnReveal&&this.openOnReveal&&this.openBooklet(!0),this.reducedMotion){this.intro.active=this.intro.others=1,this.afterIntro();return}this.introTween=this.tween(this.intro,{active:1},v.introDuration,gt.glide,()=>{this.introTween=null,this.updateCursor(),this.afterIntro()}),this.tween(this.intro,{others:1},v.introDuration*.85,gt.linear,null,v.introDuration*.1)}tween(e,t,i,s,r,o=0){const a={target:e,to:t,from:null,duration:Math.max(.001,i),easing:s,onComplete:r,time:-o};return this.tweens.add(a),this.request(),a}killTween(e){e&&this.tweens.delete(e)}updateTweens(e){for(const t of this.tweens){if(t.time+=e,t.time<0)continue;if(!t.from){t.from={};for(const r in t.to)t.from[r]=t.target[r]}const i=Math.min(1,t.time/t.duration),s=t.easing(i);for(const r in t.to)t.target[r]=t.from[r]+(t.to[r]-t.from[r])*s;i>=1&&(this.tweens.delete(t),t.onComplete?.())}}get lastIndex(){return Math.max(0,this.cases.length-1)}activeIndex(){return Math.round(je(this.position,0,this.lastIndex))}targetIndex(){return this.target>=0?this.target:this.activeIndex()}goTo(e,t="snap"){if(!this.ready||!this.cases.length||this.listening>=0||this.reading>=0)return;const i=je(Math.round(e),0,this.lastIndex),s=fM(t,Math.abs(i-this.position));if(i!==this.opened&&this.close(),i!==this.activeIndex()&&this.resetSpin(this.activeIndex()),this.target=i,this.inertia=0,this.settle=0,this.killTween(this.indexTween),this.indexTween=null,this.reducedMotion){this.position=this.lastPosition=i,this.flow=0,this.target=-1,this.request(3);return}const r=Math.sign(i-this.position);s.kick&&r&&(this.flow=je(this.flow+r*s.kick,-12,12)),this.indexTween=this.tween(this,{position:i},s.duration,s.ease,()=>{this.indexTween=null,this.target=-1})}step(e){this.resetWheel(),this.goTo(this.targetIndex()+e,"key")}toggle(e=this.activeIndex()){e===this.opened?this.close():this.open(e)}open(e=this.activeIndex()){!this.ready||!this.cases[e]||e!==this.activeIndex()||this.listening>=0||this.reading>=0||(this.close(),this.opened=e,this.resetSpin(e),this.animateOpen(e,1),this.updateCursor())}openAtOnce(e=this.activeIndex()){const t=this.cases[e];t&&(this.opened=e,t.open=1,this.updateCursor())}close(){this.opened<0||this.listening>=0||this.reading>=0||(this.animateOpen(this.opened,0),this.opened=-1,this.updateCursor())}animateOpen(e,t){const i=this.cases[e];this.killTween(i.openTween);const s=this.reducedMotion?.15:v.openDuration*(t?1:.85)*Math.max(.2,Math.abs(t-i.open));i.openTween=this.tween(i,{open:t},s,gt.linear,()=>{i.openTween=null,this.updateCursor()})}insert(e=!1){const t=this.cases[this.opened];!this.ready||!t||this.inPlayer||this.reading>=0||this.listening>=0&&this.listening!==this.opened||!e&&!this.fullyOpen(t)||(this.buildPlayer(),this.inPlayer=!0,this.listening<0&&(this.listening=this.opened,this.scene.add(t.disc.group),t.disc.group.renderOrder=1e3),this.screenState={album:this.albums[this.listening],track:null,seconds:0,playing:!1},this.drawScreen(),this.hovered=-1,this.overDisc=!1,this.overBooklet=!1,this.animateListen(1,e),this.updateCursor())}eject(){this.inPlayer&&(clearTimeout(this.screenScrollTimer),this.screenScrollTimer=0,this.inPlayer=this.seated=!1,this.playing=!1,this.overButton=null,this.overDisc=!1,this.drawScreen(),this.animateListen(0),this.updateCursor())}setPlaying(e){this.playing=e&&this.seated,this.screenState.playing=this.playing,this.seated&&this.drawScreen()}setDisplay(e,t=0){Object.assign(this.screenState,{track:e,seconds:t}),this.seated&&this.drawScreen()}drawScreen(){this.playerBuilt&&(Gu(this.playerBuilt,this.seated?this.screenState:{track:null,seconds:0,playing:!1},performance.now()/1e3),this.request())}buildPlayer(){if(this.playerBuilt)return this.playerBuilt;const e=this.playerBuilt=ZM(this.shared.anisotropy,this.shared.textures.trayNormal);e.group.scale.setScalar(this.playerScale),this.scene.add(e.group),this.drawScreen();for(const t of e.resources)t instanceof Rt&&this.renderer.initTexture(t);return e.group.visible=!0,this.renderer.compileAsync(e.group,this.camera,this.scene).catch(()=>{}),e.group.visible=!1,e}get player(){return this.buildPlayer()}afterIntro(){this.sharpenArt().then(()=>{this.destroyed||this.cases.forEach((e,t)=>this.loadInsert(e,this.albums[t]))}),this.buildPlayerWhenIdle()}buildPlayerWhenIdle(){if(this.playerBuilt)return;const e=()=>{this.destroyed||this.buildPlayer()};typeof window.requestIdleCallback=="function"?window.requestIdleCallback(e,{timeout:2e3}):window.setTimeout(e,300)}inFrame(e){return new Promise(t=>{this.frameJobs.push({run:e,done:t}),this.request()})}upload(e){return this.inFrame(()=>this.renderer.initTexture(e))}dropFrameJobs(){const e=this.frameJobs;this.frameJobs=[],e.forEach(t=>t.done())}animateListen(e,t=!1){this.killTween(this.listenTween),this.listenTween=null;const i=()=>{this.listenTween=null,e===0?this.returnDisc():this.inPlayer&&(this.seated=!0,this.drawScreen(),this.updateCursor())};if(t||this.reducedMotion){this.listen=e,i(),this.request(3);return}const s=(e?v.insertDuration:v.ejectDuration)*Math.max(.2,Math.abs(e-this.listen));this.listenTween=this.tween(this,{listen:e},s,gt.linear,i)}returnDisc(){const e=this.cases[this.listening];if(this.listening=-1,!e){this.updateCursor();return}const t=e.disc.group;e.body.add(t),e.discRest.decompose(t.position,t.quaternion,t.scale),t.renderOrder=0,e.disc.blur.value=0,this.updateCursor()}openBooklet(e=!1){const t=this.cases[this.opened];!this.ready||!t||this.inBooklet||this.listening>=0||this.reading>=0&&this.reading!==this.opened||!e&&!this.fullyOpen(t)||(this.inBooklet=!0,this.closingBooklet=!1,this.reading<0&&(this.reading=this.opened,this.magazine=t.bookletModel,this.magazineReady=t.bookletLoaded&&t.bookletReady,t.bookletModel.update({lighting:rc(!0)}),this.scene.add(t.booklet),t.booklet.renderOrder=1e3,t.booklet.castShadow=!0,this.loadBooklet(this.reading)),this.hovered=-1,this.overDisc=this.overBooklet=!1,this.bookletShown&&this.magazine?this.magazine.enabled=!0:this.animateRead(1,e),this.updateCursor())}closeBooklet(){if(!this.inBooklet)return;this.inBooklet=!1,this.overPage=null;const e=this.magazine;e&&(e.enabled=!1),this.bookletShown&&e&&e.page!==0?(this.closingBooklet=!0,this.closingFrom=e.page,e.goTo(0,{animate:!this.reducedMotion}),this.request()):this.putBookletBack(),this.updateCursor()}pageSide(){const e=this.magazine;if(!e?.covers(this.move.x,this.move.y))return null;const{ray:t,matrix:i}=qa;this.raycaster.setFromCamera(this.pointer,this.camera),t.copy(this.raycaster.ray).applyMatrix4(i.copy(e.matrixWorld).invert());const s=-t.origin.z/t.direction.z;return t.origin.x+t.direction.x*s<0?"prev":"next"}turnPage(e){!this.inBooklet||!this.bookletShown||!this.magazine||(e>0?this.magazine.next():this.magazine.prev())}turnTo(e){!this.inBooklet||!this.bookletShown||!this.magazine||this.magazine.goTo(e,{animate:!this.reducedMotion})}animateRead(e,t=!1){this.killTween(this.readTween),this.readTween=null;const i=()=>{if(this.readTween=null,e===0)this.returnBooklet();else{const r=this.pendingPages;this.pendingPages=null,r&&this.inFrame(r),this.showPages()}this.updateCursor()};if(t||this.reducedMotion){this.read=e,i(),this.request(3);return}const s=(e?v.readDuration:v.unreadDuration)*Math.max(.2,Math.abs(e-this.read));this.readTween=this.tween(this,{read:e},s,gt.linear,i)}loadBooklet(e){const t=this.cases[e];if(t.bookletLoaded)return;const i=++this.bookletRequest;(this.bookletPages?.(e)??Promise.resolve([])).catch(()=>[]).then(async s=>{if(i!==this.bookletRequest||this.destroyed||this.reading!==e)return;const r=()=>i!==this.bookletRequest||this.destroyed||this.reading!==e,o=s.map(d=>{const f=Au(d)?d.src:d;if(f instanceof Rt||typeof f=="string")return{page:d,texture:null};const g=new mn(f);return g.colorSpace=Bt,g.anisotropy=this.shared.anisotropy,{page:d,texture:g}});for(const{texture:d}of o)if(!(!d||this.touch)&&(await this.upload(d),r())){o.forEach(f=>f.texture?.dispose());return}t.bookletTextures.forEach(d=>d.dispose()),t.bookletTextures=o.flatMap(({texture:d})=>d?[d]:[]);const a=o.map(({page:d,texture:f})=>f?Au(d)?{...d,src:f}:f:d),l=t.prints.cover.map??t.bookletSources[0],c=t.prints.bookletBack.map??t.bookletSources[t.bookletSources.length-1],h=[l,...a];h.length%2===0&&h.push(Object.assign(document.createElement("canvas"),{width:2,height:2})),h.push(c);const u=()=>{i!==this.bookletRequest||this.destroyed||this.reading!==e||(t.bookletLoaded=!0,h.length!==t.bookletModel.pageCount&&(t.bookletReady=!1),t.bookletSources=h,t.bookletModel.update({pages:h,preload:h.length}),t.bookletReady&&this.bookletPagesIn(t),this.request())};this.read>=1?this.inFrame(u):this.pendingPages=u})}bookletPagesIn(e){e.bookletReady=!0,this.magazine===e.bookletModel&&(this.renderer.compile(e.bookletModel,this.camera,this.scene),this.magazineReady=!0,this.read>=1&&this.showPages())}showPages(){const e=this.cases[this.reading],t=this.magazine;!e||!t||!this.magazineReady||!this.inBooklet||this.bookletShown||(this.bookletShown=!0,this.bookletShift=this.bookletTarget=.5,this.scene.add(t),this.bookletSingle&&t.update(po("single")),this.fadeFloorShadow(1,v.bookletShadowIn),e.booklet.visible=!1,t.visible=!0,t.enabled=!0,this.reportPage(),this.updateCursor(),this.request(3))}fadeFloorShadow(e,t){if(this.killTween(this.floorShadeTween),this.floorShadeTween=null,this.bookletSingle&&e>0&&(e=0),this.reducedMotion||this.floorShade===e){this.floorShade=e,this.request();return}this.floorShadeTween=this.tween(this,{floorShade:e},t,gt.power3InOut,()=>{this.floorShadeTween=null})}putBookletBack(){this.closingBooklet=!1,this.fadeFloorShadow(0,v.bookletShadowOut);const e=this.cases[this.reading];e&&(e.booklet.visible=!0,e.booklet.add(e.bookletModel),wo(e.bookletModel),e.bookletModel.update(po("spread"))),this.bookletShown=!1,this.animateRead(0)}returnBooklet(){const e=this.cases[this.reading];if(this.reading=-1,this.disposeMagazine(),e){const{booklet:t}=e;e.lid.add(t),e.bookletRest.decompose(t.position,t.quaternion,t.scale),t.renderOrder=0,t.castShadow=!1,t.visible=!0,e.bend.value.set(0,0,0,0),e.bookletFlatten.value=0,e.bookletTuck.value=1,e.stackLoft.value=1,t.add(e.bookletModel),e.bookletModel.goTo(0),e.bookletModel.layout!=="spread"&&e.bookletModel.update(po("spread")),wo(e.bookletModel),e.bookletModel.update({lighting:rc(!1)})}this.fadeFloorShadow(0,0),this.renderer.shadowMap.needsUpdate=!0,this.onPage?.(0,0,0,!1),this.updateCursor()}disposeMagazine(){this.bookletRequest+=1,this.magazine&&(this.magazine.enabled=!1),this.magazine=null,this.pendingPages=null,this.magazineReady=this.bookletShown=this.closingBooklet=!1}reportPage(){const e=this.magazine;if(!e)return;const t=e.visiblePages;this.onPage?.(t[0]??0,t[t.length-1]??0,e.pageCount,e.layout==="single")}fullyOpen(e){return!!(e&&e.open>=.999)}pickDisc(){const e=this.cases[this.opened];return!!(e&&this.fullyOpen(e)&&this.listening<0&&this.raycaster.intersectObject(e.disc.pick,!1).length)}pickSeatedDisc(){const e=this.cases[this.listening];return!this.seated||!e?!1:(this.raycaster.setFromCamera(this.pointer,this.camera),this.raycaster.intersectObject(e.disc.pick,!1).length>0)}turnInsidePage() {
  const book = this.cases[this.opened];
  if (!book || !this.fullyOpen(book)) return;
  const turn = book.insidePages.userData.pageTurn;
  if (!turn.hasNext || turn.animating) return;
  this.raycaster.setFromCamera(this.pointer, this.camera);
  const page = turn.turned ? turn.leaf : book.insidePages;
  if (!this.raycaster.intersectObject(page, false).length) return;
  turn.turned = !turn.turned;
  const angle = turn.turned ? -Math.PI : 0;
  if (this.reducedMotion) {
    turn.hinge.rotation.y = angle;
    this.request();
    return;
  }
  turn.animating = true;
  this.tween(turn.hinge.rotation, {y: angle}, .62,
    progress => progress * progress * (3 - 2 * progress),
    () => { turn.animating = false; });
}
pickBooklet(){const e=this.cases[this.opened];return!!(e&&this.fullyOpen(e)&&this.listening<0&&this.raycaster.intersectObjects([e.booklet,e.insidePages],!1).length)}pickButton(){if(!this.seated)return null;this.raycaster.setFromCamera(this.pointer,this.camera);const e=this.raycaster.intersectObjects(this.player.buttons.map(t=>t.cap),!1)[0];return this.player.buttons.find(t=>t.cap===e?.object)?.kind??null}focusButton(e){this.focusedButton=e,this.request()}playerBottom(){const{group:e}=this.player,t=this.lens,i=this.lensRise,s=e.position.clone(),r=e.rotation.clone();this.setLens(1),this.camera.updateMatrixWorld(),e.position.copy(this.playerRest),e.rotation.set(0,St.degToRad(v.playerYaw),0),e.updateWorldMatrix(!0,!0);const o=e.children[0];o.geometry.boundingBox||o.geometry.computeBoundingBox();const a=o.geometry.boundingBox,l=new I;let c=-1;for(let u=0;u<8;u++)l.set(u&1?a.max.x:a.min.x,u&2?a.max.y:a.min.y,u&4?a.max.z:a.min.z).applyMatrix4(o.matrixWorld).project(this.camera),c=Math.max(c,(1-l.y)/2);e.position.copy(s),e.rotation.copy(r),e.updateWorldMatrix(!0,!0),this.setLens(t,i);const h=this.renderer.domElement.getBoundingClientRect();return h.top+c*h.height}openCaseSize(){const e=this.lens,t=this.lensRise,i=this.gallery.position.y;this.setLens(0),this.camera.updateMatrixWorld(),this.gallery.position.y=0,this.gallery.updateMatrixWorld(!0);const s=new I(0,v.activeDiscY,0).addScaledVector(this.toCamera,v.openForward),r=new at().compose(s,new Gt().setFromEuler(this.facing),new I().setScalar(v.openScale));r.premultiply(this.gallery.matrixWorld);const o=(Math.PI-St.degToRad(this.lidAngle))/2,a=(v.caseWidth-v.hingeInset)*Ie,[l,c]=[v.caseHeight*Ie/2,v.caseDepth*Ie/2];let[h,u,d,f]=[1/0,-1/0,1/0,-1/0];const g=new I;for(const x of[-1,1])for(const p of[-1,1])for(const m of[-l,l]){g.set(x*a*Math.cos(o)-x*p*c*Math.sin(o),m,a*Math.sin(o)+p*c*Math.cos(o));const{x:_,y:E}=g.applyMatrix4(r).project(this.camera);[h,u,d,f]=[Math.min(h,_),Math.max(u,_),Math.min(d,-E),Math.max(f,-E)]}return this.gallery.position.y=i,this.gallery.updateMatrixWorld(!0),this.setLens(e,t),[Math.max(1,(u-h)/2*Math.max(1,this.element.clientWidth)),Math.max(1,(f-d)/2*Math.max(1,this.element.clientHeight))]}pressButton(e){const t=this.player.buttons.find(i=>i.kind===e);!t||!this.seated||(this.killTween(t.tween),this.reducedMotion||(t.tween=this.tween(t,{press:1},.07,gt.power3Out,()=>{t.tween=this.tween(t,{press:0},.22,gt.power3Out,()=>{t.tween=null})})),this.onPlayerButton?.(e))}resetSpin(e){this.settleSpin(e,0)}holdFlip(){const e=this.press;if(!e||this.dragging||e.grabbed<0||this.opened>=0)return;const t=this.cases[e.grabbed];t&&(e.held=!0,this.settleSpin(e.grabbed,t.spinRest+Math.PI,v.flipDuration))}settleSpin(e,t,i=v.resetDuration){const s=this.cases[e];if(!s)return;const r=()=>{s.resetTween=null,s.spinRest=t-Math.PI*2*Math.round(t/(Math.PI*2)),s.spinY+=s.spinRest-t};if(this.killTween(s.resetTween),s.resetTween=null,Math.abs(s.spinX)<.001&&Math.abs(s.spinY-t)<.001){r();return}s.resetTween=this.tween(s,{spinX:0,spinY:t},this.reducedMotion?.15:i,gt.power3Out,r)}swipe(e){const t=this.cases[e];if(!t||this.reducedMotion||Math.hypot(this.move.speedX,this.move.speedY)<v.wipeMinSpeed)return;const i=v.wipePushMax,s=v.wipeSpinMax;t.pushVX+=je(this.move.speedX*v.wipePush,-i,i),t.pushVY-=je(this.move.speedY*v.wipePush,-i,i),t.pushRotVY+=je(this.move.speedX*v.wipeSpin,-s,s),t.pushRotVX+=je(this.move.speedY*v.wipeSpin,-s,s),this.request()}pressCase(e){const t=this.cases[e];!t||this.reducedMotion||(t.pushVZ-=v.pressDepth,t.pushRotVY+=this.hitUV.x*v.pressTilt,t.pushRotVX-=this.hitUV.y*v.pressTilt,this.request())}updatePointer(e){const t=this.renderer.domElement.getBoundingClientRect(),i=e.clientX-t.left,s=e.clientY-t.top;return this.pointer.x=i/t.width*2-1,this.pointer.y=-(s/t.height)*2+1,{x:i,y:s,rect:t}}pick(){const e=this.cases.filter(i=>i.group.visible).map(i=>i.pick);if(!e.length)return-1;this.raycaster.setFromCamera(this.pointer,this.camera);const t=this.raycaster.intersectObjects(e,!1)[0];return t?(this.hitUV.x=t.uv?t.uv.x*2-1:0,this.hitUV.y=t.uv?t.uv.y*2-1:0,t.object.userData.index):-1}viewBusy(){return!!(this.introTween||this.leaveTween||this.listenTween||this.readTween||this.closingBooklet||this.cases.some(e=>e.openTween))}updateCursor(){this.press||(this.element.style.cursor=this.inPlayer?this.overButton||this.overDisc?"pointer":"default":this.reading>=0?this.overPage?"pointer":"default":this.hovered>=0?"pointer":"grab");const e={hovered:this.hovered,active:this.activeIndex(),opened:this.opened,dragging:this.dragging,overDisc:this.overDisc,overBooklet:this.overBooklet,listening:this.inPlayer,seated:this.seated,discOut:this.listening>=0,overButton:this.overButton,busy:this.viewBusy(),reading:this.inBooklet,bookletOut:this.reading>=0,overPage:this.overPage},t=Object.values(e).join();t!==this.pointerState&&(this.pointerState=t,this.onPointer?.(e))}onPointerMove(e){if(!this.ready||this.press||!this.canHover||e.pointerType!=="mouse")return;this.updatePointer(e);const t=performance.now(),i=t-this.move.time;if(this.move.time=t,i<120){const s=16.7/Math.max(8,i);this.move.speedX=(e.clientX-this.move.x)*s,this.move.speedY=(e.clientY-this.move.y)*s}else this.move.speedX=this.move.speedY=0;this.move.x=e.clientX,this.move.y=e.clientY,this.pointerMoved=!0,this.pointerInside=!0,this.request()}onPointerLeave(){this.pointerInside=!1,!this.press&&(this.pointerMoved=!1,this.hovered=-1,this.overButton=null,this.overPage=null,this.updateCursor(),this.request())}onPointerDown(e){if(this.reading>=0||!this.ready||e.button!==0||!e.isPrimary||!this.cases.length||this.listening>=0||this.viewBusy())return;const t=this.updatePointer(e),i=this.pick(),s=this.opened>=0;this.press={id:e.pointerId,touch:e.pointerType!=="mouse",startX:t.x,startY:t.y,lastX:t.x,lastY:t.y,lastTime:performance.now(),locked:s,spinVelocity:0,grabbed:!s&&i>=0&&Math.abs(i-this.position)<.6?i:-1,hold:0,held:!1},this.press.touch&&this.press.grabbed>=0&&(this.press.hold=window.setTimeout(()=>this.holdFlip(),v.flipHoldTime*1e3)),this.hovered=i,window.addEventListener("pointermove",this.onPointerDrag,{passive:!1}),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("pointercancel",this.onPointerCancel),this.request()}startDrag(e){if(!this.press)return;this.dragging=!0,this.killTween(this.indexTween),this.indexTween=null,this.target=-1,this.resetWheel(),this.inertia=0,this.settle=0,this.spinning=this.press.grabbed,this.spinning<0&&!this.press.locked&&(this.close(),this.resetSpin(this.activeIndex())),this.element.style.cursor="grabbing",this.element.style.userSelect="none",this.updateCursor();const t=this.cases[this.spinning];t&&(this.killTween(t.resetTween),t.resetTween=null);try{this.element.setPointerCapture(e.pointerId)}catch{}}onPointerDrag(e){const t=this.press;if(!t||e.pointerId!==t.id)return;const i=this.updatePointer(e);if(!this.dragging){const d=i.x-t.startX,f=i.y-t.startY;if(Math.hypot(d,f)<v.dragStartDistance)return;clearTimeout(t.hold),t.touch&&Math.abs(d)>=Math.abs(f)&&(t.grabbed=-1),this.startDrag(e)}e.cancelable&&e.preventDefault();const s=performance.now(),r=i.x-t.lastX,o=i.y-t.lastY,a=Math.max(8,s-t.lastTime);if(t.lastX=i.x,t.lastY=i.y,t.lastTime=s,this.request(),t.locked)return;const l=this.cases[this.spinning];if(l){const d=v.dragSensitivity*.0045;l.spinY=l.spinRest+Lu(l.spinY-l.spinRest,r*d),l.spinX=Lu(l.spinX,o*d),t.spinVelocity+=(16.667/a*r*d-t.spinVelocity)*.5;return}const c=t.touch?v.touchDragSpan:6*v.dragSensitivity,h=-(r/i.rect.width)*c;this.position=je(this.position+h,0,this.lastIndex);const u=je(16.667/a*h,-.5,v.dragMaxVelocity);this.inertia+=(u-this.inertia)*v.dragVelocitySmoothing}onPointerUp(e){this.endPress(e,!1)}onPointerCancel(e){this.endPress(e,!0)}endPress(e,t){const i=this.press;if(!i||e.pointerId!==i.id)return;clearTimeout(i.hold);const s=this.dragging,r=this.spinning;this.press=null,this.dragging=!1,this.spinning=-1,window.removeEventListener("pointermove",this.onPointerDrag,{passive:!1}),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("pointercancel",this.onPointerCancel),this.element.style.userSelect="",this.updateCursor();try{this.element.hasPointerCapture(i.id)&&this.element.releasePointerCapture(i.id)}catch{}if(this.request(),i.held&&!s){this.suppressClickUntil=performance.now()+140;return}if(!s)return;if(this.suppressClickUntil=performance.now()+140,i.locked){this.inertia=0;return}const o=this.cases[r];if(o){const a=o.spinY-o.spinRest,l=performance.now()-i.lastTime<80&&Math.abs(i.spinVelocity)>v.flipFlickVelocity;Math.abs(a)>Math.PI/2?this.settleSpin(r,o.spinRest+Math.sign(a)*Math.PI,v.flipDuration):l?this.settleSpin(r,o.spinRest+Math.sign(i.spinVelocity)*Math.PI,v.flipDuration):this.settleSpin(r,o.spinRest),this.inertia=0;return}if(t){this.inertia=0,this.goTo(Math.round(this.position));return}if(i.touch){const a=Math.abs(this.inertia)>=v.touchFlickVelocity?Math.sign(this.inertia):0,l=a>0?Math.floor(this.position)+1:a<0?Math.ceil(this.position)-1:Math.round(this.position);this.inertia=0,this.goTo(l,"flick");return}this.reducedMotion&&this.goTo(Math.round(this.position))}onContextMenu(e){e.preventDefault()}onClick(e){if(this.reading>=0)return;if(this.ready&&this.inPlayer){this.updatePointer(e);const i=this.pickButton();i?this.pressButton(i):this.pickSeatedDisc()&&this.eject();return}if(!this.ready||this.listening>=0||this.viewBusy())return;if(performance.now()<this.suppressClickUntil){e.preventDefault();return}this.updatePointer(e);if(this.opened>=0){this.turnInsidePage();return}const t=this.pick();if(t>=0){if(this.resetWheel(),t!==this.activeIndex()){this.pressCase(t),this.goTo(t,"click");return}this.open(t)}}resetWheel(){clearTimeout(this.wheel?.timer),this.wheel={timer:0,armed:!0,rising:!1,total:0,direction:0,envelope:0,peak:0,count:0,stepTime:0,lastTime:0,hasLast:!1}}onWheel(e){if(e.ctrlKey||(e.preventDefault(),!this.ready||this.cases.some(g=>g.openTween)))return;let t=e.deltaX,i=e.deltaY;e.deltaMode===1?(t*=16,i*=16):e.deltaMode===2&&(t*=window.innerWidth,i*=window.innerHeight);const s=Math.abs(t)>Math.abs(i)*1.25?t:i,r=Math.abs(s),o=this.wheel,a=performance.now(),l=o.hasLast?a-o.lastTime:1/0;o.lastTime=a,o.hasLast=!0,clearTimeout(o.timer),o.timer=window.setTimeout(()=>this.resetWheel(),v.wheelIdleReset);const c=l===1/0?0:o.envelope*Math.exp(-l/v.wheelEnvelopeTau);if(this.opened>=0){Object.assign(o,{armed:!1,rising:!1,total:0,count:0,stepTime:a,envelope:Math.max(r,c),peak:Math.max(o.peak,r)});return}if(r<v.wheelNoiseFloor){o.envelope=c;return}const h=r>c*v.wheelRiseFactor;if(o.envelope=Math.max(r,c),!o.armed){o.count+=1,o.peak=Math.max(o.peak,r);const g=a-o.stepTime,x=l>=v.wheelPauseGap,p=l>=v.wheelTickGap&&o.count<=2&&g>=v.wheelMinStepTick&&r>=o.peak*v.wheelTickRatio,m=h&&g>=v.wheelMinStepFlick,_=g>=v.wheelSustainDelay&&o.envelope>=o.peak*v.wheelSustainRatio;if(!(x||p||m||_))return;o.armed=!0,o.total=0,o.direction=0,o.rising=!(x||p||_)}const u=s>0?1:-1;if(u!==o.direction&&(o.total=0,o.direction=u),o.total+=Math.min(o.rising?Math.max(0,r-c):r,v.wheelEventCap),o.total<v.wheelStepThreshold)return;Object.assign(o,{armed:!1,rising:!1,total:0,count:0,stepTime:a,peak:r});const d=this.targetIndex(),f=je(d+u,0,this.lastIndex);f!==d&&this.goTo(f,"wheel")}resize(){const e=Math.max(1,this.element.clientWidth),t=Math.max(1,this.element.clientHeight),i=e/t,s=e<=v.narrowWidth,r=!s&&t<=v.shortHeight&&e>t;if(this.short=r,this.lidAngle=s?v.lidOpenAngleNarrow:v.lidOpenAngle,this.bookletSide=s?-1:1,this.rowGap=v.hGap*(s?v.hGapNarrow:1),this.camera.aspect=i,this.camera.updateProjectionMatrix(),this.gallery.scale.setScalar(v.galleryScale*je(i/1.5,.45,1)),s||r){const[x,p]=this.openCaseSize(),m=(e-v.openFitPadding*2)/x;this.openFit=r?Math.min(m,(t-v.openFitShortMargin*2)/p):m}else this.openFit=1;const o=Math.tan(St.degToRad(v.cameraFOV/2))*v.cameraDistance,a=o*i;this.playerRest.set(0,o*(r?v.playerRaiseShort:v.playerRaise),0),this.setLens(this.lens,this.lensRise),this.playerScale=Ie*v.playerScale*je(a/1.4,.4,1)*(r?v.playerScaleShort:1),this.playerBuilt?.group.scale.setScalar(this.playerScale),this.bookletSingle=s,this.bookletPage=Math.min(s?a*2*v.bookletFitNarrow:a*v.bookletFitWidth,o*2*v.bookletFitHeight);const l=s?"single":"spread";this.bookletShown&&this.magazine&&this.magazine.layout!==l&&this.magazine.update(po(l));const[c,h]=v.bookletShadowReach,u=this.bookletPage,d=this.bookletSun.shadow.camera;Object.assign(d,{left:-c*u,right:c*u,top:h*u,bottom:-h*u,near:.5*u,far:12*u}),d.updateProjectionMatrix();const f=this.frameStats,g=window.devicePixelRatio||1;(g!==f.dpr||Math.abs(e*t-f.area)>f.area*.2)&&(this.quality=0,f.total=f.count=0),f.dpr=g,f.area=e*t,this.applyPixelRatio()}applyPixelRatio(){const e=Math.max(1,this.element.clientWidth),t=Math.max(1,this.element.clientHeight);let i=Math.min(window.devicePixelRatio||1,e<=767?v.pixelRatioNarrow:v.pixelRatioWide);e*t*i*i>v.maxPixels&&(i=Math.sqrt(v.maxPixels/(e*t))),this.renderer.setPixelRatio(i*Ya[this.quality]),this.renderer.setSize(e,t),this.request(3)}trackFrameTime(e){const t=this.frameStats;if(t.awake+=1,t.awake>=3&&e<=.08&&(this.frameInterval+=(e-this.frameInterval)*.2),t.awake<3||e>.08||this.quality>=Ya.length-1||(t.total+=e,t.count+=1,t.count<20))return;const i=t.total/t.count;t.total=t.count=0,!(i<=v.slowFrame)&&(this.quality=Math.min(Ya.length-1,this.quality+(i>v.verySlowFrame?2:1)),this.applyPixelRatio())}request(e=2){this.forceFrames=Math.max(this.forceFrames,e),!(this.raf||this.renderingFrame||this.destroyed)&&(this.lastTime=performance.now(),this.frameStats.awake=0,this.raf=requestAnimationFrame(this.frame))}onVisibility(){document.hidden&&(this.wasHidden=!0)}frame(e){this.raf=0,this.renderingFrame=!0;try{this.renderFrame(e)}finally{this.renderingFrame=!1}}renderFrame(e){const t=Math.max(0,e-this.lastTime)/1e3,i=Math.min(uo,t)*this.timeScale;if(this.trackFrameTime(t),this.lastTime=e,this.wasHidden&&!document.hidden){this.wasHidden=!1;for(let o=Math.min(hM,t-uo)*this.timeScale;o>0;o-=uo){const a=Math.min(uo,o);this.updateTweens(a),this.advance(a,e)}}if(this.updateTweens(i),this.pointerMoved||this.pointerInside&&!this.press){const o=this.pointerMoved;this.pointerMoved=!1;const a=this.listening>=0||this.reading>=0?-1:this.pick(),l=this.pickButton(),c=this.seated?!l&&this.pickSeatedDisc():a>=0&&a===this.opened&&this.pickDisc(),h=a>=0&&a===this.opened&&!c&&this.pickBooklet(),u=this.pageSide();(a!==this.hovered||c!==this.overDisc||h!==this.overBooklet||l!==this.overButton||u!==this.overPage)&&(a>=0&&a!==this.hovered&&!this.press&&o&&this.swipe(a),this.hovered=a,this.overDisc=c,this.overBooklet=h,this.overButton=l,this.overPage=u,this.updateCursor(),this.forceFrames=Math.max(this.forceFrames,2))}const s=this.advance(i,e);this.frameJobs.length&&!this.jobTimer&&(this.jobTimer=window.setTimeout(()=>{this.jobTimer=0;const o=this.frameJobs.shift();o&&!this.destroyed&&(o.run(),o.done()),this.request()})),this.renderer.render(this.scene,this.camera),this.forceFrames>0&&(this.forceFrames-=1),this.press||this.inertia!==0||this.settle!==0||this.flow!==0||this.tweens.size||s>.001||this.forceFrames>0||this.spinRate>0||this.frameJobs.length>0?this.raf=requestAnimationFrame(this.frame):this.quality>0&&!this.qualityRecoveryTimer&&(this.qualityRecoveryTimer=window.setTimeout(()=>{this.qualityRecoveryTimer=0,!(this.destroyed||this.raf||this.quality===0)&&(this.quality=0,this.frameStats.total=this.frameStats.count=0,this.applyPixelRatio())},250))}advance(e,t){const i=Math.min(3,e*60);if(this.cases.length&&!this.dragging&&(Math.abs(this.inertia)>1e-5&&(this.position+=this.inertia*i,this.inertia*=this.reducedMotion?0:v.friction**i,Math.abs(this.inertia)<4e-4&&(this.inertia=0)),this.inertia===0&&!this.indexTween)){const o=Math.round(je(this.position,0,this.lastIndex)),a=o-this.position;(a!==0||Math.abs(this.settle)>1e-5)&&(this.settle+=a*v.snapFreq*v.snapFreq*e,this.settle*=Math.exp(-12*e),this.position+=this.settle*e,Math.abs(o-this.position)<8e-4&&Math.abs(this.settle)<.004&&(this.position=o,this.settle=0))}if(this.position=je(this.position,-.05,this.lastIndex+.05),this.reducedMotion)this.flow=0;else if(e>0){const o=je((this.position-this.lastPosition)/e,-40,40);this.flow+=(o-this.flow)*Math.min(1,e*(Math.abs(o)>Math.abs(this.flow)?14:6)),Math.abs(this.flow)<.01&&(this.flow=0)}this.lastPosition=this.position;const s=this.activeIndex();this.cases.length&&s!==this.active&&(this.active=s,this.onIndexChange(s),this.updateCursor());const r=this.layout(e);this.updatePlayer(e);for(const o of this.cases)o.bookletModel.tick(t)&&(this.forceFrames=Math.max(this.forceFrames,2));return this.updateBooklet(e),r}offscreen(...e){const t=this.scratchBox.makeEmpty();for(const s of e)s.updateWorldMatrix(!0,!0),t.union(this.scratchBox2.setFromObject(s));if(t.isEmpty())return!1;this.camera.updateMatrixWorld();const i=this.scratchPoint;for(let s=0;s<8;s++)if(i.set(s&1?t.max.x:t.min.x,s&2?t.max.y:t.min.y,s&4?t.max.z:t.min.z).project(this.camera),i.y>-1.05)return!1;return!0}updatePlayer(e){const t=this.listen,i=ku(t),s=kM(this.lidAngle,this.bookletSide),r=ku(this.read-s+v.viewPanFrom),o=Math.max(i,r);this.gallery.position.x=0,this.gallery.position.y=o*v.insertPan,this.gallery.position.z=0,this.setLens(o,i);const a=this.listen>0&&i>.001&&i<.999;if(this.ready){const C=this.listening>=0?this.listening:this.opened,D=C>=0?this.cases[C]:void 0;this.gallery.visible=o<.999&&!(a&&D&&this.offscreen(D.body,D.lid))}if(!this.playerBuilt)return;const l=this.playerBuilt.group;l.position.set(this.playerRest.x,this.playerRest.y-(1-i)*v.insertPan-gt.power3In(this.leave)*v.leaveDrop,this.playerRest.z);const c=this.seated&&this.pointerInside&&!this.reducedMotion?1:0;this.playerLean+=(c-this.playerLean)*Math.min(1,e*10),Math.abs(c-this.playerLean)<.001?this.playerLean=c:this.forceFrames=Math.max(this.forceFrames,2);const h=this.playerLean*v.hoverTiltStrength*v.openHoverTilt*v.playerHoverTilt;l.rotation.set(h*this.pointer.y,St.degToRad(v.playerYaw)+h*this.pointer.x,0),l.visible=i>.001&&!(a&&this.offscreen(l));const u=v.spinRpm/60*Math.PI*2,d=this.playing&&!this.reducedMotion?u:0,f=this.inPlayer?v.spinDown:v.spinDownEject;d>this.spinRate?this.spinRate+=(d-this.spinRate)*(1-Math.exp(-e/v.spinUp)):this.spinRate=Math.max(d,this.spinRate-u/f*e),d===0&&this.spinRate<.02&&(this.spinRate=0);for(const C of this.player.buttons){const D=C.kind===this.overButton||C.kind===this.focusedButton?1:0;C.hover=this.reducedMotion?D:C.hover+(D-C.hover)*(1-Math.exp(-e/v.playerButtonHover)),Math.abs(D-C.hover)<.002?C.hover=D:this.forceFrames=Math.max(this.forceFrames,2),C.group.position.z=-C.press*v.playerButtonPress,C.mark.opacity=v.playerPrintOpacity+(1-v.playerPrintOpacity)*C.hover}const g=this.cases[this.listening];if(!g)return;if(g.disc.spin.rotation.z-=this.spinRate*e,this.player.spindle.rotation.y-=this.spinRate*e,this.player.screen.scrolls&&this.seated){const C=performance.now();C-this.screenScrollAt>=33&&(Gu(this.player,this.screenState,C/1e3),this.screenScrollAt=C),this.spinRate===0&&!this.tweens.size?this.screenScrollTimer||(this.screenScrollTimer=window.setTimeout(()=>{this.screenScrollTimer=0,!this.destroyed&&this.seated&&this.request(1)},33)):this.forceFrames=Math.max(this.forceFrames,2)}g.disc.blur.value=this.spinRate*Math.max(v.spinBlur,this.frameInterval);const{trayPosition:x,trayQuaternion:p,trayScale:m,seatPosition:_,seatQuaternion:E,seatScale:y,matrix:T,inverse:b,axis:R,forward:S,point:A}=lM;g.body.updateWorldMatrix(!0,!1),T.multiplyMatrices(g.body.matrixWorld,g.discRest).decompose(x,p,m),x.y-=this.gallery.position.y,R.set(0,0,1).applyQuaternion(p),x.addScaledVector(R,gt.power3Out(je(t/.3,0,1))*v.insertLift),l.updateWorldMatrix(!0,!1),T.multiplyMatrices(l.matrixWorld,this.player.seat).decompose(_,E,y);const P=Ou(t),U=gt.power3InOut(je((t-.78)/.22,0,1));R.set(0,1,0).applyQuaternion(l.quaternion),_.addScaledVector(R,v.insertHover*(1-U));const F=g.disc.group;if(F.position.lerpVectors(x,_,P),F.quaternion.slerpQuaternions(p,E,P),F.scale.setScalar(m.x+(y.x-m.x)*P),i>0&&(F.updateWorldMatrix(!0,!1),b.copy(g.body.matrixWorld).invert(),T.copy(b).multiply(F.matrixWorld),S.setFromMatrixColumn(b,2),S.z>.2)){const C=v.caseWidth/2*Ie,D=v.caseHeight/2*Ie,B=bt.trayFront*Ie+v.insertClearance*Ie,z=B-bt.back*Ie;let $=0;for(const V of Pu){A.copy(V).applyMatrix4(T);const X=Math.max(0,Math.abs(A.x)-C,Math.abs(A.y)-D),W=Math.max(0,X-z);$=Math.max($,B-X-W*W/(2*z)-A.z)}$>0&&(F.position.z+=$/S.z)}F.updateWorldMatrix(!0,!1),T.copy(l.matrixWorld).invert().multiply(F.matrixWorld);let k=0;for(const C of Pu){A.copy(C).applyMatrix4(T);const D=Math.max(Math.abs(A.x),Math.abs(A.z))-Ot.half,B=D<0&&Math.hypot(A.x,A.z-v.wellZ)<v.wellRadius?Ot.floor:Ot.top+v.insertClearance-Math.max(0,D);k=Math.max(k,B-A.y)}k>0&&F.position.addScaledVector(R,k*l.scale.x)}updateBooklet(e){const t=this.cases[this.reading];if(this.renderer.shadowMap.autoUpdate=!!t,!t){this.bookletSun.intensity=0,this.bookletAmbient.intensity=0,this.bookletFloor.visible=!1;return}const i=this.read,s=Math.max(1,v.bookletStackOut/(t.sheetGap*Math.max(1,Math.ceil(t.bookletModel.pageCount/2)-1)));t.bookletTuck.value=1-gt.power3InOut(je(i/v.bookletTuckUntil,0,1));const{restPosition:r,restQuaternion:o,restScale:a,readPosition:l,readQuaternion:c,backUp:h,turn:u,matrix:d,axis:f,tilt:g,centre:x,roll:p,shift:m,untilt:_,still:E,heading:y}=qa,T=Math.tan(St.degToRad(this.camera.fov/2))*this.camera.position.z,b=gt.power3In(this.leave)*v.leaveDrop;l.set(0,this.camera.position.y+(v.bookletRaise+this.camera.projectionMatrix.elements[9])*T,0);const R=St.degToRad(v.bookletTilt);c.setFromAxisAngle(g,-R);const S=Cu(this.bookletPage,this.camera.position.y,this.camera.position.z,R,l.y),{booklet:A}=t;if(A.visible){t.lid.updateWorldMatrix(!0,!1),d.multiplyMatrices(t.lid.matrixWorld,t.bookletRest).decompose(r,o,a),r.sub(this.gallery.position);const z=(ne,j)=>je((i-ne)/(j-ne),0,1),$=Bu(bo(je(i/v.bookletRollUntil,0,1)),this.lidAngle,this.bookletSide);zu($,this.lidAngle,this.bookletSide,t.bend.value),Hu(0,t.bend.value,x);const V=bo(z(nc(this.lidAngle,this.bookletSide,Mo(this.bookletSide)),1));t.bookletFlatten.value=V*V;const X=(ne,j)=>{const se=Bu(bo(je(ne/v.bookletRollUntil,0,1)),this.lidAngle,this.bookletSide);return zu(se,this.lidAngle,this.bookletSide,p),Hu(0,p,j),j.set(j.x,0,j.y).applyQuaternion(o).multiplyScalar(a.x).add(r)};X(1,m).sub(l).negate();const W=x;f.set(W.x,0,W.y).applyQuaternion(o).multiplyScalar(a.x);const ve=gt.power3InOut(je((t.bend.value.y-Mo(this.bookletSide))/(v.bookletFrameSpan*Ie),0,1));t.stackLoft.value=1+(s-1)*ve,A.position.copy(r).add(f),A.position.x+=m.x*V,A.position.z+=m.z*V;const ge=nc(this.lidAngle,this.bookletSide,Mo(this.bookletSide));if(i>ge){const ne=this.lens,j=this.lensRise;this.setLens(0),this.camera.updateMatrixWorld();const se=.005,G=X(ge,y).project(this.camera).y,Y=X(ge-se,y).project(this.camera).y;this.setLens(ne,j),this.camera.updateMatrixWorld();const le=v.bookletLevelUntil-ge,_e=je((i-ge)/le,0,1),ue=y.copy(l).project(this.camera).y,Re=(2*_e**3-3*_e**2+1)*G+(_e**3-2*_e**2+_e)*(G-Y)/se*le+(3*_e**2-2*_e**3)*ue,Ye=y.copy(A.position).project(this.camera).y;A.position.y+=(Re-Ye)*(this.camera.position.z-A.position.z)/this.camera.projectionMatrix.elements[5]}A.position.y-=b,f.set(0,1,0),h.setFromAxisAngle(f,Math.PI).premultiply(c),_.copy(o).invert().premultiply(h),E.identity().slerp(_,V),A.quaternion.copy(o).multiply(u.setFromAxisAngle(f,x.z)).premultiply(E),A.scale.setScalar(a.x+(S/(v.bookletSize*Ie)-a.x)*V),this.frameFlyingBooklet(t,ve),wo(t.bookletModel)}const[P,U]=v.bookletLightIn,F=gt.power3InOut(je((i-P)/(U-P),0,1)),[k,C]=v.bookletSunIn;this.bookletSun.intensity=(v.bookletTravelSun+(v.bookletSun-v.bookletTravelSun)*F)*gt.power3InOut(je((i-k)/(C-k),0,1)),this.bookletSun.shadow.intensity=this.bookletSingle&&this.bookletShown?v.bookletSingleShadow:1,this.bookletAmbient.intensity=(this.bookletSingle?v.bookletAmbientSingle:v.bookletAmbient)*F,this.bookletFloor.material.opacity=v.bookletFloorShadow*this.floorShade,this.bookletFloor.visible=this.bookletFloor.material.opacity>0;const D=this.magazine;D&&this.updateShift(D,e);const B=this.bookletRig;B.quaternion.copy(c),B.scale.setScalar(S),f.set(-this.bookletShift*S,0,-.01*S/2).applyQuaternion(c),B.position.copy(l).add(f),B.position.y-=b,D&&(this.bookletShown&&(t.stackLoft.value=s,D.position.copy(B.position),D.quaternion.copy(B.quaternion),D.scale.copy(B.scale)),this.closingBooklet&&D.page===0&&!D.turning&&Math.abs(this.bookletShift-.5)<.03&&this.putBookletBack())}frameFlyingBooklet(e,t){if(t===0)return;const{booklet:i,bend:{value:s}}=e,{point:r,paper:o,matrix:a,caseMatrix:l,lidMatrix:c,bounds:h,normal:u}=qa;let d=0;for(let B=0;B<=16;B++){BM((B/16-.5)*v.bookletSize*Ie,s,e.bookletFlatten.value,r);const z=r.x,$=r.y,V=r.z;for(let X=0;X<=8;X++)for(const W of[-1,1]){const ve=W*v.bookletFlightDepth*Ie*t;h[d++]=z+Math.sin(V)*ve,h[d++]=(X/8-.5)*v.bookletSize*Ie,h[d++]=$+Math.cos(V)*ve}}const f=this.element.clientHeight,g=this.short?v.bookletFlightMarginShort:v.bookletFlightMargin,x=Math.max(.1,1-g*2/f),p=this.camera.projectionMatrix.elements,m=1/p[5],_=x+p[9],E=-x+p[9],y=Math.tan(St.degToRad(v.cameraFOV/2))*v.cameraDistance*v.bookletRaise,T=Ru(v.playerFOV),b=0,R=St.degToRad(v.bookletTilt),S=Cu(this.bookletPage,b,T,R),A=Math.tan(St.degToRad(v.playerFOV/2));let P=1/0,U=-1/0;for(const B of[-S/2,S/2]){const z=y+Math.cos(R)*B,$=-Math.sin(R)*B,V=(z-b)/((T-$)*A);P=Math.min(P,V),U=Math.max(U,V)}const F=U-P;e.body.updateWorldMatrix(!0,!1),l.copy(e.body.matrixWorld).invert(),e.lid.updateWorldMatrix(!0,!1),c.copy(e.lid.matrixWorld).invert();const k=v.bookletClearanceApron*Ie,C=v.bookletClearance*Ie*t,D=Math.max(bt.trayFront+2.5,bt.disc+v.discThickness/Ie/2)*Ie+C;for(let B=0;B<8;B++){a.compose(i.position,i.quaternion,i.scale);let z=-1/0,$=1/0,V=1/0,X=-1/0;for(let j=0;j<d;j+=3){r.fromArray(h,j).applyMatrix4(a);const se=this.camera.position.z-r.z;if(j%6===3){o.set((h[j-3]+h[j])/2,(h[j-2]+h[j+1])/2,(h[j-1]+h[j+2])/2).applyMatrix4(a);const G=(o.y-this.camera.position.y)/((this.camera.position.z-o.z)*m);V=Math.min(V,G),X=Math.max(X,G)}$=Math.min($,_*se*m-(r.y-this.camera.position.y)),z=Math.max(z,E*se*m-(r.y-this.camera.position.y))}const W=this.camera.position.z-i.position.z,ve=Math.max(0,(z-$)/((_-E)*m)),ge=1+(Math.min(W/(W+ve),F/(X-V),1)-1)*t;i.scale.multiplyScalar(ge);let ne=0;if(this.gallery.visible){let j=0,se=0;a.compose(i.position,i.quaternion,i.scale),a.premultiply(l);for(let G=0;G<d;G+=3){r.fromArray(h,G).applyMatrix4(a);const Y=Math.max(0,Math.abs(r.x)-v.caseWidth*Ie/2-k,Math.abs(r.y)-v.caseHeight*Ie/2-k);j=Math.max(j,D-Y-r.z)}a.compose(i.position,i.quaternion,i.scale).premultiply(c);for(let G=0;G<d;G+=3){r.fromArray(h,G).applyMatrix4(a);const Y=Math.max(0,Math.abs(r.x+bt.hingeX*Ie)-v.caseWidth*Ie/2-k),le=Math.max(Y,Math.abs(r.y)-v.caseHeight*Ie/2-k,0);let _e=bt.lidInner*Ie+le;const ue=Math.max(0,(v.caseHeight/2-v.caseWall)*Ie-Math.abs(r.y)),Re=Math.max(Y,ue*v.bookletLipSteep,Math.abs(r.y)-v.caseHeight*Ie/2-k,0);_e=Math.min(_e,(v.caseDepth/2-v.lidFlange)*Ie+Re),se=Math.max(se,r.z-_e+C)}j>0&&(i.position.z+=j*t/l.elements[10]),se>0&&i.position.addScaledVector(u.setFromMatrixColumn(e.lid.matrixWorld,2),-se),ne=Math.max(j*t,se)}if(ge>.99999&&ne<1e-5)break}}updateShift(e,t){const i=e.visiblePages;if(!this.bookletShown||e.layout==="single")this.bookletTarget=.5;else if(this.closingBooklet){const r=Math.max(0,e.page-2);this.bookletTarget=.5*(1-(this.closingFrom>0?r/this.closingFrom:0))}else i.length>1?this.bookletTarget=0:e.turning||(this.bookletTarget=i[0]===0?.5:-.5);const s=this.bookletTarget;this.bookletShift+=(s-this.bookletShift)*(this.reducedMotion?1:Math.min(1,t*v.bookletCentreFollow)),Math.abs(s-this.bookletShift)<.001?this.bookletShift=s:this.forceFrames=Math.max(this.forceFrames,2)}setLens(e,t=e){this.lens=e,this.lensRise=t;const i=v.cameraFOV+(v.playerFOV-v.cameraFOV)*e,s=Ru(i),r=s*Math.tan(St.degToRad(i/2)),o=this.playerRest.x*t,a=(this.playerRest.y+s*Math.tan(St.degToRad(v.playerView)))*t;this.camera.fov=i,this.camera.position.set(o,a,s);const l=Math.max(1,this.element.clientWidth)/Math.max(1,this.element.clientHeight),c=this.short?(v.rowRaiseShort+(v.openRaiseShort-v.rowRaiseShort)*this.openRoom)/Math.max(1,this.element.clientHeight)*(1-e):0;e>0||c?this.camera.setViewOffset(l,1,-o/(2*r),a/(2*r)+c,l,1):(this.camera.clearViewOffset(),this.camera.aspect=l),this.camera.updateProjectionMatrix();const[h,u]=v.bookletLightIn,d=1-gt.power3InOut(je((this.read-h)/(u-h),0,1));this.keyLight.intensity=v.keyIntensity*d,this.fillLight.intensity=v.fillIntensity*d,this.stripLight.intensity=v.topStripIntensity*d,this.rimLight.intensity=v.rimIntensity*je(1-e*2.5,0,1)*d,this.ambientLight.intensity=(v.ambientIntensity+v.playerAmbient*e)*d,this.scene.environmentIntensity=v.environmentIntensity*d;const f=this.scene.fog;f.near=7+s-v.cameraDistance,f.far=14+s-v.cameraDistance}layout(e){const t=this.activeIndex(),i=!this.reducedMotion,s=i?je(Math.sign(this.flow)*Math.sqrt(Math.abs(this.flow))*v.flowLean,-.3,v.flowLeanMax):0,r=i?Math.min(v.flowDipMax,Math.abs(this.flow)*v.flowDip):0,o=this.dragging?v.followTight:v.followBase,a=Math.max(v.discThickness*3,.12,v.depthGap)*2.4;let l=-1,c=0;this.cases.forEach((u,d)=>{u.open>c&&(c=u.open,l=d)}),c=gt.power3InOut(je(c/.6,0,1)),this.openRoom=c;let h=0;return this.cases.forEach((u,d)=>{const f=d-this.position,g=Math.abs(f),x=d===t,p=f*.35;let m=Math.sin(p)*this.rowGap*2.4,_=(x?v.activeDiscY:0)-r*(x?.7:1),E=a-Math.cos(p)*a,y=0,T=-p+s*(x?1:1.12),b=-s*v.flowBank*(x?.7:1);const R=(x?1:Math.max(v.inactiveScale,1-g*(1-v.inactiveScale)*.6))*v.caseScale;let S=R*this.intro.active;if(l>=0&&d!==l){const X=Math.sign(d-l)*c*v.openSpread,W=c*v.openRecede;m+=this.screenRight.x*X-this.toCamera.x*W,_+=this.screenRight.y*X-this.toCamera.y*W,E+=this.screenRight.z*X-this.toCamera.z*W}let A=g<=v.renderRadius+.5;if(!x){const X=je(this.intro.others,0,2),W=Math.min(g,v.flightStaggerMax)/v.flightStaggerMax*v.flightStaggerIn,ve=je((Math.min(1,X)-W)/Math.max(.1,1-v.flightStaggerIn),0,1),ge=gt.glide(ve)+Math.max(0,X-1);A=A&&ge>v.flightPopScaleIn,S=R*ge,E-=(1-Math.min(1,ge))*v.flightRecede}u.group.visible=A;const P=gt.power3InOut(je(u.open/.6,0,1)),U=gt.power3InOut(je((u.open-.3)/.7,0,1));P>0&&(y+=(this.facing.x-y)*P,T+=(this.facing.y-T)*P,b+=(this.facing.z-b)*P,S+=(v.openScale*this.openFit*this.intro.active-S)*P,m+=this.toCamera.x*v.openForward*P,_+=this.toCamera.y*v.openForward*P,E+=this.toCamera.z*v.openForward*P);const F=St.degToRad(this.lidAngle),k=(Math.PI-F)/2*U,C=bt.hingeX*Ie;u.body.rotation.y=-k,u.body.position.set(C*(1-U)-C*Math.cos(k),0,-C*Math.sin(k)),u.lid.rotation.y=-U*F;const D=k*(d===this.listening?1-Ou(this.listen):1);if(D!==u.envTurn){u.envTurn=D;const{group:X,turn:W,axis:ve}=cM;X.setFromEuler(u.group.rotation).premultiply(this.gallery.quaternion),W.setFromAxisAngle(ve,-D).premultiply(X).multiply(X.invert());for(const ge of u.disc.materials)ge.envMapRotation.setFromQuaternion(W)}u.pick.scale.x=1+U*(2*Math.cos(k)-1),u.disc.shade.value=v.discClosedShade+(1-v.discClosedShade)*gt.power3InOut(je(U/.5,0,1));const B=this.hovered===d&&this.spinning<0?1:0;if(u.hover+=(B-u.hover)*Math.min(1,e*10),u.hover>.001){const X=u.hover*v.hoverTiltStrength*(1-P*(1-v.openHoverTilt));y+=X*this.pointer.y,T+=X*this.pointer.x}const z=Math.abs(u.pushX)+Math.abs(u.pushY)+Math.abs(u.pushZ)+Math.abs(u.pushVX)+Math.abs(u.pushVY)+Math.abs(u.pushVZ)+Math.abs(u.pushRotX)+Math.abs(u.pushRotY)+Math.abs(u.pushRotVX)+Math.abs(u.pushRotVY);if(z>8e-4){const X=Math.exp(-4.5*e),W=Math.min(1,e*v.pushReturn);u.pushX+=u.pushVX*e,u.pushVX*=X,u.pushX-=u.pushX*W,u.pushY+=u.pushVY*e,u.pushVY*=X,u.pushY-=u.pushY*W,u.pushZ+=u.pushVZ*e,u.pushVZ*=X,u.pushZ-=u.pushZ*W,u.pushRotX+=u.pushRotVX*e,u.pushRotVX*=X,u.pushRotX-=u.pushRotX*W,u.pushRotY+=u.pushRotVY*e,u.pushRotVY*=X,u.pushRotY-=u.pushRotY*W,m+=u.pushX,_+=u.pushY,E+=u.pushZ,h+=z}else z>0&&Object.assign(u,{pushX:0,pushY:0,pushZ:0,pushVX:0,pushVY:0,pushVZ:0,pushRotX:0,pushRotY:0,pushRotVX:0,pushRotVY:0});const{position:$,rotation:V}=u.group;if(!u.placed)$.set(m,_,E),V.set(y,T,b),u.group.scale.setScalar(S),u.placed=!0;else{const X=je(o-g*v.followFalloff,v.followMin,v.followTight),W=this.reducedMotion?1:Math.min(1,e*X);h+=Math.abs(m-$.x)+Math.abs(_-$.y)+Math.abs(E-$.z)+Math.abs(S-u.group.scale.x)+Math.abs(y-V.x)+Math.abs(T-V.y)+Math.abs(b-V.z)+Math.abs(B-u.hover),$.x+=(m-$.x)*W,$.y+=(_-$.y)*W,$.z+=(E-$.z)*W,u.group.scale.setScalar(u.group.scale.x+(S-u.group.scale.x)*W),V.x+=(y-V.x)*W,V.y+=(T-V.y)*W,V.z+=(b-V.z)*W}this.spinning!==d&&!u.resetTween&&(u.spinX+=(0-u.spinX)*Math.min(1,e*2.5),Math.abs(u.spinX)<1e-4&&(u.spinX=0),h+=Math.abs(u.spinX)),u.spin.rotation.x=u.spinX+u.pushRotX,u.spin.rotation.y=u.spinY+u.pushRotY,u.group.renderOrder=Math.round(500+$.z*10-d*.01)}),h}destroy(){this.destroyed=!0,clearTimeout(this.screenScrollTimer),clearTimeout(this.qualityRecoveryTimer),clearTimeout(this.loadTimer),cancelAnimationFrame(this.raf),clearTimeout(this.wheel.timer),clearTimeout(this.jobTimer),this.resizeObserver.disconnect(),this.element.removeEventListener("pointerdown",this.onPointerDown),this.element.removeEventListener("pointermove",this.onPointerMove),this.element.removeEventListener("pointerleave",this.onPointerLeave),this.element.removeEventListener("click",this.onClick),this.element.removeEventListener("contextmenu",this.onContextMenu),this.element.removeEventListener("wheel",this.onWheel),document.removeEventListener("visibilitychange",this.onVisibility),window.removeEventListener("pointermove",this.onPointerDrag,{passive:!1}),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("pointercancel",this.onPointerCancel),this.onProgress=void 0,this.setAlbums([]),this.playerBuilt?.resources.forEach(s=>s.dispose());const{textures:e,geometries:t,materials:i}=this.shared;[...Object.values(e),...Object.values(t),...Object.values(i)].forEach(s=>s.dispose()),this.bookletFloor.geometry.dispose(),this.bookletFloor.material.dispose(),this.bookletSun.shadow.dispose(),this.environment.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove()}}const jM={background:"#ebe3d4",backgroundCenter:"#f6f0e5",backgroundEdge:"#e1d7c5",ink:"#252521"},Vu=n=>new URL(`./albums/${n}`,window.location.href),eb="data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAANZtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAACJpbG9jAAAAAERAAAEAAQAAAAAA+gABAAAAAAAAABsAAAAjaWluZgAAAAAAAQAAABVpbmZlAgAAAAABAABhdjAxAAAAAA5waXRtAAAAAAABAAAAVmlwcnAAAAA4aXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAABZpcG1hAAAAAAAAAAEAAQOBAgMAAAAjbWRhdBIACgc4ADbQENBpMg4ZQmMEwAA0AAAQkEDNQA==",tb=new Promise(n=>{const e=new Image;e.onload=()=>n(e.width>0),e.onerror=()=>n(!1),e.src=eb}),nb=["open","listen","booklet"],Ko="/about";function Wu(n,e){return{album:n.album??null,mode:n.mode??null,about:e===Ko}}function yf(n,e=null){return`/${encodeURIComponent(n)}${e?`/${e}`:""}`}function ib(){if(!window.location.search)return;const n=new URLSearchParams(window.location.search),e=n.get("album"),t=n.has("listen")?"listen":n.has("open")?"open":null,i=e&&!window.location.hash?`#${yf(e,t)}`:window.location.hash;window.history.replaceState(window.history.state,"",`${window.location.pathname}${i}`)}async function sb(){const n=Vu("collection.json?v=purchase-history"),[e,t]=await Promise.all([fetch(n),tb]),i=e.ok?await e.json().catch(()=>null):null;if(!i?.albums?.length)throw new Error(`No collection with albums at ${n.pathname}`);return{...i,theme:{...jM,...i.theme},albums:i.albums.map(s=>{const r=Vu(`${s.id}/`),o=a=>a?new URL(t?a:a.replace(/\.avif$/i,".webp"),r).href:void 0;return{...s,artist:s.artist||i.name,cover:o(s.cover),disc:o(s.disc),discSmall:o(s.discSmall),coverSmall:o(s.coverSmall),back:o(s.back),bookletBack:o(s.bookletBack),bookletScans:s.bookletScans?.map(a=>o(a))}})}}var rb=$t("<div class=bubble aria-hidden=true><span class=bubble-body><span class=bubble-label></span></span><span class=bubble-tag>"),ob=$t("<div class=bubble-copy aria-hidden=true>"),ab=$t('<svg><path d="M1.2-1.1-.55 0 1.2 1.1z"></svg>',!1,!0,!1),lb=$t("<svg><rect x=-1.225 y=-1.15 width=.55 height=2.3 rx=.12></svg>",!1,!0,!1),cb=$t('<svg><path d="M-.85-1.2 1.2 0-.85 1.2z"></svg>',!1,!0,!1),hb=$t("<svg><rect x=-.925 y=-1.15 width=.65 height=2.3 rx=.12></svg>",!1,!0,!1),ub=$t("<svg><rect x=.275 y=-1.15 width=.65 height=2.3 rx=.12></svg>",!1,!0,!1),db=$t('<svg><path d="M-1.2-1.1.55 0-1.2 1.1z"></svg>',!1,!0,!1),fb=$t("<svg><rect x=.675 y=-1.15 width=.55 height=2.3 rx=.12></svg>",!1,!0,!1),pb=$t("<span class=transport-track-number>"),mb=$t("<span class=transport-track-title>"),gb=$t("<p class=transport-note role=status>Song previews couldn't be loaded. Try again in a moment."),vb=$t('<a class="case-action store-link"target=_blank rel=noopener>Apple'),xb=$t('<a class="case-action store-link"target=_blank rel=noopener>Spotify'),_b=$t('<main class=app-shell><div class=stage role=region aria-label="Interactive album gallery"></div><header class=masthead></header><a hidden class="corner-button about-link"href=#/about tabindex=-1 aria-hidden=true>About</a><button class="corner-button back-button"type=button><span class=back-label></span></button><div class=transport role=group aria-label=Player><div class=transport-buttons data-bubble-group></div><p class=transport-track aria-hidden=true></p></div><footer class=bottom-bar><button class="case-action is-left"type=button>Booklet</button><span class="store-links is-left"></span><button class="album-arrow is-prev"type=button>←</button><div class=album-caption aria-live=polite><button class=album-name type=button><span class=eyebrow><span class=eyebrow-separator>/</span></span><span class=album-title></span></button></div><button class="album-arrow is-next"type=button>→</button><button class="case-action is-right"type=button>Listen</button><a class="case-action store-link is-right"target=_blank rel=noopener>Buy the CD</a></footer><section class=about aria-label="About Discography"><div class=about-body><p>Discography is an experiment in browsing music as physical CDs: each album in its plastic jewel case, with the booklet folded inside.</p><p>Flick through the row of albums, turn a case over to read its back and spines, open it, leaf through the booklet, and put the disc on the player to hear 30-second song previews.</p><p>Everything is drawn in the browser with three.js from the real artwork: official covers, scans of the printed discs, back inserts and booklets. The plastic, its scratches and the sheen of the discs were tuned against photos of real CDs rather than made to look stylised. The booklets turn with <a href=https://github.com/dmtrbrl/leafthrough target=_blank rel=noopener>LeafThrough</a>, a library I made for flipping through pages on the web.</p><p>Covers, booklet scans and disc designs belong to their rights holders. Song previews come from Apple Music.</p></div><p class=about-credit>Made by <a href=https://dmytrobarylo.com target=_blank rel=noopener>Dmytro Barylo</a></p></section><p class=sr-only aria-live=polite>'),yb=$t("<span class=wordmark>Pattu Book"),Sb=$t('<button class=transport-button type=button><svg viewBox="-1.5 -1.5 3 3"aria-hidden=true>'),Mb=$t("<p class=load-error>");const Sf=new URLSearchParams(window.location.search),Bc=Sf.has("diag"),Xu=Bc?Sf.get("log"):null,Ln=(()=>{if(!Bc)return{log:p=>{},live:p=>{},trace:p=>{},spinOf:()=>0};const n=document.createElement("pre");n.style.cssText="position:fixed;left:0;top:env(safe-area-inset-top,0px);z-index:99;margin:0;padding:4px 6px;max-width:100vw;max-height:16vh;overflow:hidden;font:9px/1.25 ui-monospace,monospace;color:#fff;background:rgba(0,0,0,.6);white-space:pre;pointer-events:none",document.body.appendChild(n);const e=[];let t="";const i=performance.now(),s=()=>{n.textContent=`${t}
${e.slice(-4).map(p=>p.split(`
`)[0].slice(0,70)).join(`
`)}`},r=p=>{Xu&&fetch(Xu,{method:"POST",mode:"cors",keepalive:!0,body:p}).catch(()=>{})},o=p=>{const m=`${((performance.now()-i)/1e3).toFixed(2)} ${p}`;e.push(m),s(),r(m)},a={log:o,live:p=>{t=p,s()},trace:p=>{},spinOf:()=>0},l=[];let c=performance.now(),h=0,u=0,d=c;const f=p=>{p-c>80&&(h++,u=Math.max(u,p-c)),h&&p-d>=3e3&&(o(`${h} frame gaps >80 ms, max ${Math.round(u)} ms in 3 s`),h=u=0,d=p),l.push({t:p,dt:p-c,spin:a.spinOf()}),l.length>600&&l.shift(),c=p,requestAnimationFrame(f)};requestAnimationFrame(f);const g=p=>{const m=[];let _=0;return p.forEach((E,y)=>{_+=1,E!==p[y+1]&&(m.push(_>1?`${E}×${_}`:E),_=0)}),m.join(" ")};let x=0;return a.trace=p=>{window.clearTimeout(x);const m=performance.now();x=window.setTimeout(()=>{const _=l.filter(E=>E.t>=m-500);o(`trace ${p}: ${_.length} frames from -0.5 s to +2.5 s
  dt ms: ${g(_.map(E=>String(Math.round(E.dt))))}
  spin: ${g(_.map(E=>E.spin.toFixed(1)))}`)},2500)},document.addEventListener("visibilitychange",()=>o(`visibility ${document.visibilityState}`)),window.__diag={lines:e},a})(),bb=3e3,wb=3,kt=window.matchMedia("(hover: hover) and (pointer: fine)").matches,Tb=["font","letterSpacing","textTransform","textDecoration","textUnderlineOffset","display","alignItems","justifyContent","justifyItems","gap","padding","whiteSpace"],$u=n=>{const e=document.createRange();return e.selectNodeContents(n),e.getBoundingClientRect()};function Eb(n){const e=Oc();let t,i,s;const[r,o]=vt(!1),[a,l]=vt(!1),[c,h]=vt(!1),[u,d]=vt(!1),[f,g]=vt({text:"",shown:!1});let x=0;const p={x:0,y:0},m=_t(n.label),_=()=>!!n.quiet?.(),E=()=>!!document.querySelector(":focus-visible");function y(){clearTimeout(x),g(j=>({...j,shown:!1})),m()&&(x=window.setTimeout(()=>g({text:m(),shown:!!m()&&!E()}),bb))}dn(Jt(m,y));const T=()=>requestAnimationFrame(()=>{E()&&g(j=>({...j,shown:!1}))}),b={x:0,y:0,clip:0,raf:0,left:0,top:0};function R(){t.style.transform=`translate3d(${b.x}px, ${b.y}px, 0)`;let j;if(r()){const se=s.offsetWidth/2*new DOMMatrixReadOnly(getComputedStyle(s).transform).a;j=s.getAnimations().length===0&&Math.abs(se-b.clip)<.05,b.clip=se}else b.clip=e||b.clip<.1?0:b.clip*.75,j=b.clip===0;i.style.clipPath=`circle(${b.clip}px at ${b.x-b.left}px ${b.y-b.top}px)`,b.raf=j?0:requestAnimationFrame(R)}function S(j){!kt||j.pointerType!=="mouse"||(b.x=j.clientX,b.y=j.clientY,Math.hypot(b.x-p.x,b.y-p.y)>wb&&(p.x=b.x,p.y=b.y,y()),a()||l(!0),b.raf||(b.raf=requestAnimationFrame(R)))}let A=null,P=null,U="",F="";const k=j=>j.closest("[data-bubble-group]")??j,C=j=>{const se=j.getBoundingClientRect();return[se.left,se.top,se.width,se.height].join("|")},D=j=>{const se=j.getBoundingClientRect();return[j.className,j.textContent,j.getAttribute("aria-current"),j.getAttribute("aria-label"),se.left,se.top,se.width,se.height].join("|")};function B(j){A=j,U=D(j),F=C(j);const se=k(j);if(se!==j&&se===P&&i.firstElementChild&&C(se)===i.dataset.box){o(!0),l(!0),b.raf||(b.raf=requestAnimationFrame(R));return}P=se;const G=P.getBoundingClientRect(),Y=getComputedStyle(P),le=P.cloneNode(!0);for(const Re of[le,...le.querySelectorAll("[id], [data-bubble]")])Re.removeAttribute("id"),Re.removeAttribute("data-bubble");for(const Re of Tb)le.style[Re]=Y[Re];Y.display==="inline"&&(le.style.display="block"),Object.assign(le.style,{position:"static",inset:"auto",translate:"none",transform:"none",transition:"none",opacity:"1",visibility:"visible",margin:"0",width:"100%",height:"100%",boxSizing:"border-box",color:"var(--bg)",textDecorationColor:"var(--bg)",pointerEvents:"none"}),i.replaceChildren(le),i.dataset.box=C(P),Object.assign(i.style,{left:`${G.left}px`,top:`${G.top}px`,width:`${G.width}px`,height:`${G.height}px`});const _e=$u(le),ue=$u(P);le.style.translate=`${ue.left-_e.left}px ${ue.top-_e.top}px`,b.left=G.left,b.top=G.top,o(!0),l(!0),b.raf||(b.raf=requestAnimationFrame(R))}function z(j){const se=j.currentTarget,G=se.disabled;d(G),kt&&j.pointerType==="mouse"&&!G&&B(se)}function $(j=!0){A=null,o(!1),d(!1),j&&l(!1),b.raf||(b.raf=requestAnimationFrame(R))}const V=j=>!!j?.isConnected&&!j.disabled&&!j.closest('[inert], [aria-hidden="true"]')&&Number(getComputedStyle(j).opacity)>.5;let X=0,W=0;function ve(){if(W=0,A||a()){const j=document.elementFromPoint(b.x,b.y)?.closest("[data-bubble]"),se=V(j)?j:null;se!==A?(se?B(se):$(!1),d(!se&&!!j?.disabled)):A&&D(A)!==U&&(C(A)===F&&ge(A)?U=D(A):B(A))}performance.now()<X&&(W=requestAnimationFrame(ve))}function ge(j){const se=i.firstElementChild,G=k(j);if(!se||G!==P||se.textContent!==G.textContent)return!1;const Y=G.querySelectorAll("*"),le=se.querySelectorAll("*");return Y.length!==le.length?!1:(Y.forEach((_e,ue)=>{const Re=_e.getAttribute("class")??"";le[ue].getAttribute("class")!==Re&&le[ue].setAttribute("class",Re)}),!0)}function ne(){kt&&(y(),X=performance.now()+1e3,W||(W=requestAnimationFrame(ve)))}return window.addEventListener("click",ne,!0),window.addEventListener("keydown",ne,!0),window.addEventListener("keydown",T,!0),document.addEventListener("focusin",T),Dn(()=>{clearTimeout(x),cancelAnimationFrame(b.raf),cancelAnimationFrame(W),window.removeEventListener("click",ne,!0),window.removeEventListener("keydown",ne,!0),window.removeEventListener("keydown",T,!0),document.removeEventListener("focusin",T)}),{over:r,move:S,hide:()=>l(!1),surface:{onPointerMove:S,onPointerEnter:S,onPointerLeave:()=>l(!1),onPointerDown:()=>h(!0),onPointerUp:()=>h(!1)},button:{"data-bubble":"","on:pointermove":S,onPointerEnter:z,onPointerLeave:()=>$()},view:()=>[(()=>{var j=rb(),se=j.firstChild,G=se.firstChild,Y=se.nextSibling,le=t;typeof le=="function"?_n(le,j):t=j;var _e=s;return typeof _e=="function"?_n(_e,se):s=se,Ht(G,()=>f().text),Ht(Y,()=>f().text),qn(ue=>{var Re=!!(a()&&n.revealed()),Ye=!!(m()&&!r()&&!u()),re=!!(f().shown&&!r()&&!_()&&!u()),ce=!!r(),fe=!!c(),pe=!!_(),xe=!!(a()&&n.revealed()&&_()&&f().shown);return Re!==ue.e&&se.classList.toggle("is-shown",ue.e=Re),Ye!==ue.t&&se.classList.toggle("is-active",ue.t=Ye),re!==ue.a&&se.classList.toggle("has-label",ue.a=re),ce!==ue.o&&se.classList.toggle("is-button",ue.o=ce),fe!==ue.i&&se.classList.toggle("is-pressed",ue.i=fe),pe!==ue.n&&se.classList.toggle("is-ring",ue.n=pe),xe!==ue.s&&Y.classList.toggle("is-shown",ue.s=xe),ue},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),j})(),(()=>{var j=ob(),se=i;return typeof se=="function"?_n(se,j):i=j,j})()]}}function Ab(n,e){const t=document.documentElement.style;t.setProperty("--bg",n.background),t.setProperty("--bg-center",n.backgroundCenter),t.setProperty("--bg-edge",n.backgroundEdge),t.setProperty("--ink",n.ink),document.querySelector('meta[name="theme-color"]')?.setAttribute("content",n.background),document.title=e}const Ja=new Map;function Rb(n,e="us"){const t=`${e}:${n}`;let i=Ja.get(t);return i||(i=fetch(`https://itunes.apple.com/lookup?id=${n}&entity=song&limit=200&country=${encodeURIComponent(e)}`).then(s=>s.ok?s.json():Promise.reject(new Error(`${s.status}`))).then(({results:s})=>new Map(s.filter(r=>r.trackId&&r.previewUrl).map(r=>[r.trackId,r.previewUrl]))),i.catch(()=>Ja.delete(t)),Ja.set(t,i)),i}const Cb={previous:"Prev",play:"Play",pause:"Pause",next:"Next"},Pb={previous:"Previous track",play:"Play",pause:"Pause",next:"Next track"},Lb=n=>({previous:[ab(),lb()],play:cb(),pause:[hb(),ub()],next:[db(),fb()]})[n];function Db(n){let e=null,t=null;const i=()=>{if(!e){const ne=navigator.audioSession;if(ne)try{ne.type="playback"}catch(se){Ln.log(`audio session: ${se?.name??se}`)}e=new AudioContext;const j=e;j.addEventListener("statechange",()=>{Ln.log(`audio context ${j.state}`),j.state!=="running"&&B()})}return e.state!=="running"&&!t&&(t=e.resume().catch(ne=>{Ln.log(`audio context resume failed: ${ne?.name??ne}`)}).finally(()=>{t=null})),e},[s,r]=vt(-1),[o,a]=vt("stopped"),[l,c]=vt(0),[h,u]=vt(!1),d=()=>n.album().tracks??[];let f=0,g=-1/0,x=!1;const p=ne=>{x!==ne&&(x=ne,n.onPlaying(ne))},m=new Map,_=new Map;let E=0;const y=ne=>{const j=new Set([ne,ve(ne),W(ne)]);for(const se of m.keys())j.has(se)||m.delete(se);for(const[se,G]of _)se!==ne&&(G.abort.abort(),_.delete(se))},T=()=>{window.clearTimeout(E);for(const ne of _.values())ne.abort.abort();_.clear()};function b(ne){const j=m.get(ne);if(j)return Promise.resolve(j);const se=_.get(ne);if(se)return se.promise;const G=n.album(),Y=d()[ne]?.apple,le=G.appleMusic;if(!Y||!le)return Promise.resolve(null);const _e=new AbortController,ue={abort:_e,promise:Promise.resolve(null)};return ue.promise=(async()=>{const Re=await Rb(le,G.appleMusicCountry).catch(()=>null);if(_e.signal.aborted)return null;const Ye=Re?.get(Y);if(!Ye)return null;const re=performance.now(),ce=await fetch(Ye,{signal:_e.signal});if(!ce.ok)return null;const fe=await ce.arrayBuffer();if(_e.signal.aborted||(await new Promise(xe=>requestAnimationFrame(()=>xe())),_e.signal.aborted))return null;const pe=await(e??i()).decodeAudioData(fe);return _e.signal.aborted||_.get(ne)!==ue?null:(m.set(ne,pe),Ln.log(`decoded ${ne} in ${(performance.now()-re).toFixed(0)} ms`),pe)})().catch(()=>null).finally(()=>{_.get(ne)===ue&&_.delete(ne)}),_.set(ne,ue),ue.promise}const R=(ne,j,se)=>{window.clearTimeout(E),!(ne<0)&&(E=window.setTimeout(()=>{s()===j&&o()===se&&b(ne)},200))};let S=null,A=0,P=0,U=0;const F=()=>S&&e?P+e.currentTime-A:P,k=()=>{if(window.clearInterval(U),!S)return;const ne=S;S=null,ne.onended=null,ne.stop(),ne.disconnect()},C=()=>{const ne=Math.floor(F());ne!==l()&&(c(ne),n.onDisplay(s()+1,ne))},D=(ne,j,se)=>{k();const G=e,Y=G.createBufferSource();Y.buffer=j,Y.connect(G.destination),Y.onended=()=>{if(Y!==S)return;S=null,window.clearInterval(U);const le=W(ne);le>=0?$(le,!0,!1):z()},Y.start(0,se),S=Y,A=G.currentTime,P=se,a("playing"),p(!0),U=window.setInterval(C,250),C(),Ln.log(`started ${ne} at ${se.toFixed(1)} s`),y(ne),R(W(ne),ne,"playing")},B=()=>{o()!=="playing"&&o()!=="loading"||(P=F(),k(),a("paused"),p(!1))};function z(){f++,g=-1/0,k(),T(),m.clear(),P=0,r(-1),a("stopped"),c(0),p(!1),n.onDisplay(null,0)}async function $(ne,j=!0,se=!0){const G=n.album();if(!d()[ne]?.apple||!G.appleMusic)return;Ln.log(`play(${ne}) autoplay=${j} ready=${m.has(ne)} state=${o()}`);const le=ne===s()&&o()!=="stopped";if(j&&le&&o()==="playing")return B();if(j&&le&&o()==="loading")return;const _e=performance.now(),ue=se&&!le&&_e-g<500;se&&!le&&(g=_e);const Re=++f;if(k(),window.clearTimeout(E),le||(P=0,r(ne),c(0),n.onDisplay(ne+1,0)),y(ne),a(j?"loading":"paused"),!j){p(!1),R(ne,ne,"paused");return}if(ue&&!m.has(ne)&&(await new Promise(fe=>window.setTimeout(fe,320)),Re!==f||o()!=="loading"))return;const Ye=await b(ne);if(Re!==f)return;if(!Ye){u(!0),z();return}if(u(!1),o()!=="loading")return;const re=i(),ce=()=>re.state==="running";if(!ce()){if(await t,Re!==f||o()!=="loading")return;if(!ce()){B();return}}D(ne,Ye,P)}const V=()=>{const ne=s(),j=m.get(ne);P=0,o()==="playing"&&j&&D(ne,j,0),c(0),n.onDisplay(ne+1,0)},X=()=>{document.hidden&&B()};document.addEventListener("visibilitychange",X);const W=ne=>d().findIndex((j,se)=>se>ne&&j.apple),ve=ne=>d().reduce((j,se,G)=>G<ne&&se.apple?G:j,-1);function ge(ne){Ln.log(`button ${ne} state=${o()}`),Ln.trace(ne),i();const j=o()==="stopped",se=j?-1:s(),G=o()==="playing"||o()==="loading";if(ne==="play")se<0?$(W(-1)):o()==="paused"&&$(se);else if(ne==="pause")B();else if(ne==="next"){const Y=W(j?W(-1):se);Y>=0&&$(Y,G)}else if(j){const Y=W(-1);Y>=0&&$(Y,!1)}else{const Y=ve(se);F()>3||Y<0?V():$(Y,G)}}return dn(Jt(n.shown,ne=>{ne||z()},{defer:!0})),Dn(()=>{document.removeEventListener("visibilitychange",X),f++,k(),T(),e?.close()}),{current:()=>o()==="stopped"?-1:s(),failed:h,playable:()=>!!n.album().appleMusic&&W(-1)>=0,toggle:()=>(i(),s()>=0&&o()!=="stopped"?$(s()):$(W(-1))),button:ge}}const qu=new Map;function Ib(n){const e=qu.get(n.id);if(e)return e;const t=async r=>{const o=new Image;return o.decoding="async",o.src=r,await o.decode(),o},i=(r,o,a)=>{const l=document.createElement("canvas");l.width=l.height=1024;const c=r.naturalWidth/a,h=l.getContext("2d");if(n.bookletFit==="contain"){const d=1024/Math.max(c,r.naturalHeight),f=c*d,g=r.naturalHeight*d,x=(1024-f)/2,p=(1024-g)/2;return h.drawImage(r,o*c,0,c,r.naturalHeight,x,p,f,g),p>0&&(h.drawImage(r,o*c,0,c,1,x,0,f,p),h.drawImage(r,o*c,r.naturalHeight-1,c,1,x,p+g,f,p)),x>0&&(h.drawImage(r,o*c,0,1,r.naturalHeight,0,p,x,g),h.drawImage(r,(o+1)*c-1,0,1,r.naturalHeight,x+f,p,x,g)),l}const u=Math.min(c,r.naturalHeight);return h.drawImage(r,o*c+(c-u)/2,(r.naturalHeight-u)/2,u,u,0,0,1024,1024),l},s=Promise.all((n.bookletScans??[]).map(r=>t(r).catch(()=>null))).then(r=>{const o=[];for(const a of r){if(!a)continue;const l=a.naturalWidth/a.naturalHeight,c=l>3.4?4:l>1.45?2:1;for(let h=0;h<c;h++)o.push(i(a,h,c))}return o});return qu.set(n.id,s),s}function Ub(n){const{albums:e,theme:t}=n.collection;let i,s,r=0,o=0;const a=te=>Math.max(0,e.findIndex(Se=>Se.id===te));let l=n.link;const c=a(l.album),[h,u]=vt(c),[d,f]=vt(!1),[g,x]=vt(c),[p,m]=vt(!1),_=()=>e[g()],E=Oc();let y=0,T,b=!1,R,S,A,P,U;const[F,k]=vt(!1);let C;const[D,B]=vt(!1),z=()=>$().busy||D(),[$,V]=vt({hovered:-1,active:0,opened:-1,dragging:!1,overDisc:!1,overBooklet:!1,listening:!1,seated:!1,discOut:!1,overButton:null,busy:!1,reading:!1,bookletOut:!1,overPage:null}),X=_t(()=>$().reading),[W,ve]=vt({first:0,last:0,count:0,loops:!1}),ge=()=>W().loops||W().last<W().count-1,ne=()=>X()&&W().count>0,j=()=>`${W().first+1}${W().last>W().first?`–${W().last+1}`:""}`,se=()=>$().opened<0,G=_t(()=>$().listening),Y=_t(()=>$().seated),le=_t(()=>$().opened>=0&&!$().discOut&&!$().bookletOut),_e=Db({album:_,shown:G,onPlaying:te=>{Ln.log(`onPlaying(${te})`),s?.setPlaying(te)},onDisplay:(te,Se)=>s?.setDisplay(te,Se)});let ue;const[Re,Ye]=vt(-1),[re,ce]=vt(!1);let fe=0;dn(Jt(_e.current,te=>{if(clearTimeout(fe),E||Re()===te){Ye(te),ce(!1);return}ce(!0),fe=window.setTimeout(()=>{Ye(te),ce(!1)},200)},{defer:!0})),Dn(()=>clearTimeout(fe));const[pe,xe]=vt(null);let $e=0;const Ve=te=>{clearTimeout($e),xe(te),$e=window.setTimeout(()=>xe(null),90)},[qe,Ke]=vt(null),N=()=>{G()&&s&&Ke(s.playerBottom())};dn(Jt(G,N));const lt=()=>requestAnimationFrame(()=>requestAnimationFrame(N));window.addEventListener("resize",lt),Dn(()=>window.removeEventListener("resize",lt));const st=te=>({onFocus:Se=>s?.focusButton(Se.currentTarget.matches(":focus-visible")?te:null),onBlur:()=>s?.focusButton(null)}),L=()=>`https://open.spotify.com/album/${_().spotify}`,M=()=>`https://music.apple.com/${_().appleMusicCountry??"us"}/album/${_().appleMusic}`,q=()=>_().buy??`https://www.amazon.com/s?k=${encodeURIComponent(`${_().artist} ${_().title} CD`)}&i=popular`,Q=Eb({label:()=>{if(F())return"";const{hovered:te,active:Se,opened:Qe,dragging:ut,overDisc:Yt,overBooklet:wn,overButton:ln,bookletOut:wi,overPage:zi}=$();if(wi){if(!X())return"";const{first:ii}=W();return zi==="next"?ge()?"Next":"":zi==="prev"&&ii>0?"Prev":""}return G()?ln?Cb[ln]:Yt?"Eject":"":Qe>=0?te===Qe?Yt||wn?"Booklet":"":"":ut?"Drag":te<0?"":te===Se?"Open":te<Se?"Prev":"Next"},revealed:d,quiet:()=>G()&&!!$().overButton});dn(Jt(h,te=>{if(clearTimeout(y),E||!d()){x(te);return}m(!0),y=window.setTimeout(()=>{x(te),m(!1)},220)},{defer:!0})),dn(()=>{const te=X()?"booklet":G()?"listen":$().opened>=0?"open":null,Se=F()?Ko:yf(e[h()].id,te);d()&&!D()&&n.onPath(Se)});let me;function ye(te,Se){if(me?.cancel(),E)return;const Qe=te?0:Number(getComputedStyle(i).opacity);me=i.animate([{opacity:Qe},{opacity:te}],{duration:Se,easing:"ease",fill:"forwards"}),te&&(me.onfinish=()=>me?.cancel())}Dn(()=>me?.cancel()),dn(Jt(n.jump,te=>{if(!te)return;l=te;const Se=te.about?h():a(te.album),Qe=!te.about&&te.mode!==null,ut=!te.about&&te.mode==="listen",Yt=!te.about&&te.mode==="booklet";if(!d()||!s){s?.show(Se,Qe,ut,Yt);return}if(!D()&&Se===h()&&Qe===$().opened>=0&&ut===G()){Yt&&!X()?s.openBooklet():!Yt&&X()&&s.closeBooklet(),k(te.about);return}if(!z()&&!$().bookletOut&&!F()&&!Yt&&!te.about){const wn=$().opened>=0,ln=G();if(Se===h()){if(!wn&&Qe&&!ut){s.open();return}if(wn&&!ln&&!Qe){s.close();return}if(wn&&!ln&&ut){s.insert();return}if(ln&&Qe&&!ut){s.eject();return}}else if(!wn&&!Qe){s.goTo(Se,"click");return}}document.activeElement?.blur(),F()?ye(0,0):!G()&&!$().bookletOut&&ye(0,600),B(!0),k(te.about),s.show(Se,Qe,ut,Yt,()=>{te.about?me?.cancel():ye(1,700),Qa(()=>{u(Se),B(!1)})})},{defer:!0}));const ie=_t(()=>$().opened>=0);jo(Jt(ie,te=>{const Se=document.activeElement,Qe=!!Se?.matches(":focus-visible");if(te){const ut=Qe?Se===C?T:Se===R?P:Se===A||Se===S?U:null:null;ut&&requestAnimationFrame(()=>ut.focus({preventScroll:!0}));return}requestAnimationFrame(()=>{Se===T?b?C.focus({preventScroll:!0}):T.blur():(Se===P||Se===U)&&Qe&&(Se===P?R.disabled?A:R:A.disabled?R:A).focus({preventScroll:!0})})},{defer:!0}));let ae=!1,we=null;jo(Jt(G,te=>{const Se=document.activeElement,Qe=!!Se?.matches(":focus-visible");te?ae=Se===U&&Qe:Qe&&Se?.closest(".transport, .case-action")&&(we=Se.closest(".is-left")?P:U)},{defer:!0})),dn(Jt(Y,te=>{!te||!ae||(ae=!1,requestAnimationFrame(()=>ue.focus({preventScroll:!0})))},{defer:!0}));const ke=te=>{const Se=performance.now(),Qe=()=>{getComputedStyle(te).visibility==="visible"?te.focus({preventScroll:!0}):performance.now()-Se<1500&&requestAnimationFrame(Qe)};requestAnimationFrame(Qe)};dn(Jt(()=>$().discOut,te=>{const Se=we;te||!Se||(we=null,ke(Se))},{defer:!0}));let Ae=!1,Te=!1;jo(Jt(X,te=>{const Se=document.activeElement,Qe=!!Se?.matches(":focus-visible");te?Ae=Se===P&&Qe:Te=Qe&&(Se===R||Se===A)},{defer:!0})),dn(Jt(ne,te=>{!te||!Ae||(Ae=!1,ke(A))},{defer:!0})),dn(Jt(()=>$().bookletOut,te=>{te||!Te||(Te=!1,ke(P))},{defer:!0}));const[Me,Fe]=vt(n.link.mode==="listen"?"Eject":"Close"),[We,O]=vt(!1);let be=0;dn(Jt(G,te=>{const Se=te?"Eject":"Close";if(clearTimeout(be),E||$().opened<0||Se===Me()){Fe(Se),O(!1);return}O(!0),be=window.setTimeout(()=>{Fe(Se),O(!1)},200)},{defer:!0})),Dn(()=>clearTimeout(be));function oe(){z()||(F()?Ce():X()?s?.closeBooklet():G()?s?.eject():s?.close())}function Ee(){if(z())return;const te=C.matches(":focus-visible");k(!0),te&&requestAnimationFrame(()=>T.focus({preventScroll:!0}))}function Ce(){const te=document.activeElement===T&&b;k(!1),te&&requestAnimationFrame(()=>C.focus({preventScroll:!0}))}function de(te){if(X()){if(te.altKey||te.metaKey||te.ctrlKey||!s)return;const ut={ArrowRight:1,ArrowLeft:-1}[te.key];ut&&(te.preventDefault(),s.turnPage(ut)),te.key==="Home"&&(te.preventDefault(),s.turnTo(0)),te.key==="End"&&(te.preventDefault(),s.turnTo(W().count-1)),te.key==="Escape"&&(te.preventDefault(),oe());return}if($().bookletOut)return;if(F()){te.key==="Escape"&&(te.preventDefault(),Ce());return}if(te.altKey||te.metaKey||te.ctrlKey||!s)return;const Se=$().opened<0;if(["ArrowRight","ArrowLeft","Home","End"].includes(te.key)&&!Se){te.preventDefault();return}te.key==="ArrowRight"&&(te.preventDefault(),s.step(1)),te.key==="ArrowLeft"&&(te.preventDefault(),s.step(-1)),te.key==="Home"&&(te.preventDefault(),s.goTo(0,"key")),te.key==="End"&&(te.preventDefault(),s.goTo(e.length-1,"key"));const Qe=!!te.target?.closest?.("button, a, input, textarea, select");if(te.key===" "&&!Qe&&(te.preventDefault(),G()?Y()&&_e.toggle():z()||s.toggle()),te.key==="Enter"&&!Qe&&!G()){if(te.preventDefault(),z())return;Se?s.open():s.openBooklet()}te.key==="Escape"&&oe()}function Xe(){d()||(Qa(()=>{f(!0),document.documentElement.classList.add("gallery-ready"),l.about&&k(!0)}),s?.reveal())}Tf(()=>{Ln.spinOf=()=>s?.spinRate??0,Bc&&window.setInterval(()=>{const te=+(s?.spinRate??0).toFixed(1);window.__diag.spin=te,Ln.live(`spin ${te} rad/s  playing ${String(s?.playing)}`)},100),r=requestAnimationFrame(()=>{r=0,o=window.setTimeout(He)}),window.addEventListener("keydown",de)});function He(){o=0,s=new QM(i,e,te=>u(te),{fogColor:t.background,startIndex:c,openOnReveal:l.mode!==null&&e[c]?.id===l.album,listenOnReveal:l.mode==="listen",readOnReveal:l.mode==="booklet",bookletPages:te=>Ib(e[te]),onPage:(te,Se,Qe,ut)=>ve({first:te,last:Se,count:Qe,loops:ut}),onPointer:V,onPlayerButton:te=>{Ve(te),_e.button(te)},onReady:()=>{queueMicrotask(Xe)}})}return Dn(()=>{cancelAnimationFrame(r),clearTimeout(o),clearTimeout(y),window.removeEventListener("keydown",de),s?.destroy()}),(()=>{var te=_b(),Se=te.firstChild,Qe=Se.nextSibling,ut=Qe.nextSibling,Yt=ut.nextSibling,wn=Yt.firstChild,ln=Yt.nextSibling,wi=ln.firstChild,zi=wi.nextSibling,ii=ln.nextSibling,Ti=ii.firstChild,Tn=Ti.nextSibling,si=Tn.nextSibling,os=si.nextSibling,ri=os.firstChild,oi=ri.firstChild,Lr=oi.firstChild,as=oi.nextSibling,Ei=os.nextSibling,Ai=Ei.nextSibling,Zo=Ai.nextSibling,Vs=ii.nextSibling,Dr=Vs.firstChild,Jo=Dr.firstChild,Ir=Jo.nextSibling,w=Ir.nextSibling,H=w.firstChild,ee=H.nextSibling,K=Dr.nextSibling,Z=K.firstChild,Le=Z.nextSibling,Ne=Vs.nextSibling,Pe=i;typeof Pe=="function"?_n(Pe,Se):i=Se,Qt(Se,Nt({get classList(){return{"is-hidden":!d()||F(),"has-bubble":kt}}},()=>Q.surface),!1,!1),Ht(Qe,At(Zi,{get when(){return $().opened>=0||X()||F()},get fallback(){return yb()},get children(){return At(Up,Nt({class:"wordmark",classList:{"has-bubble":kt},href:"/"},()=>Q.button,{onClick:ze=>{if(z())return ze.preventDefault();G()||X()||(ze.preventDefault(),F()?Ce():s?.close())},children:"Pattu Book"}))}})),ut.$$click=ze=>{ze.preventDefault(),Ee()};var Oe=C;typeof Oe=="function"?_n(Oe,ut):C=ut,ut.classList.toggle("has-bubble",!!kt),Qt(ut,Nt(()=>Q.button),!1,!0),Yt.$$click=oe,Yt.addEventListener("focus",()=>{b=T.matches(":focus-visible")});var Ge=T;typeof Ge=="function"?_n(Ge,Yt):T=Yt,Qt(Yt,Nt({get classList(){return{"is-shown":($().opened>=0||F())&&!D(),"has-bubble":kt}},get tabIndex(){return $().opened>=0||F()?0:-1},get"aria-hidden"(){return Rs(()=>$().opened<0)()&&!F()}},()=>Q.button),!1,!0),Ht(wn,Me),Ht(te,()=>Q.view(),ln),Qt(ln,Nt({get classList(){return{"is-shown":Y(),"has-bubble":kt}},get style(){return{top:qe()===null?void 0:`${qe()}px`}},get inert(){return Y()?void 0:!0}},()=>Q.surface),!1,!0),Ht(wi,At(Nf,{each:Ar,children:ze=>(()=>{var ct=Sb(),Dt=ct.firstChild;return ct.$$click=()=>s?.pressButton(ze),_n(Ue=>{ze==="play"&&(ue=Ue)},ct),Qt(ct,Nt({get classList(){return{"is-pressed":pe()===ze,"has-bubble":kt}},get"aria-label"(){return Pb[ze]},get disabled(){return!_e.playable()}},()=>st(ze),()=>Q.button),!1,!0),Ht(Dt,()=>Lb(ze)),ct})()})),Ht(zi,At(Zi,{get when(){return Re()>=0},get children(){return[(()=>{var ze=pb();return Ht(ze,()=>String(Re()+1).padStart(2,"0")),ze})(),(()=>{var ze=mb();return Ht(ze,()=>_().tracks?.[Re()]?.title),ze})()]}})),Ht(ln,At(Zi,{get when(){return _e.failed()},get children(){return gb()}}),null),Ti.$$click=()=>{z()||s?.openBooklet()};var tt=P;typeof tt=="function"?_n(tt,Ti):P=Ti,Qt(Ti,Nt({get classList(){return{"is-shown":le(),"has-bubble":kt}},get inert(){return le()?void 0:!0}},()=>Q.button),!1,!0),Ht(Tn,At(Zi,{get when(){return _().appleMusic},get children(){var ze=vb();return Qt(ze,Nt({get classList(){return{"is-shown":Y(),"has-bubble":kt}},get href(){return M()},get inert(){return Y()?void 0:!0}},()=>Q.button),!1,!0),ze}}),null),Ht(Tn,At(Zi,{get when(){return _().spotify},get children(){var ze=xb();return Qt(ze,Nt({get classList(){return{"is-shown":Y(),"has-bubble":kt}},get href(){return L()},get inert(){return Y()?void 0:!0}},()=>Q.button),!1,!0),ze}}),null),si.$$click=()=>X()?s?.turnPage(-1):s?.step(-1);var ot=R;typeof ot=="function"?_n(ot,si):R=si,Qt(si,Nt({get classList(){return{"is-shown":se()||ne(),"has-bubble":kt}},get"aria-label"(){return X()?"Previous booklet pages":"Previous album"},get disabled(){return Rs(()=>!!X())()?W().first<=0:h()===0},get inert(){return se()||ne()?void 0:!0}},()=>Q.button),!1,!0),ri.$$click=()=>{z()||s?.open()};var Be=S;typeof Be=="function"?_n(Be,ri):S=ri,ri.classList.toggle("has-bubble",!!kt),Qt(ri,Nt({get disabled(){return $().opened>=0},get"aria-label"(){return Rs(()=>$().opened<0)()?`Open ${_().title} by ${_().artist} (${_().year})`:void 0}},()=>Q.button),!1,!0),Ht(oi,()=>_().artist,Lr),Ht(oi,()=>_().year,null),Ht(as,()=>_().title),Ei.$$click=()=>X()?s?.turnPage(1):s?.step(1);var mt=A;typeof mt=="function"?_n(mt,Ei):A=Ei,Qt(Ei,Nt({get classList(){return{"is-shown":se()||ne(),"has-bubble":kt}},get"aria-label"(){return X()?"Next booklet pages":"Next album"},get disabled(){return Rs(()=>!!X())()?!ge():h()===e.length-1},get inert(){return se()||ne()?void 0:!0}},()=>Q.button),!1,!0),Ai.$$click=()=>{z()||s?.insert()};var Ct=U;return typeof Ct=="function"?_n(Ct,Ai):U=Ai,Qt(Ai,Nt({get classList(){return{"is-shown":le(),"has-bubble":kt}},get inert(){return le()?void 0:!0}},()=>Q.button),!1,!0),Qt(Zo,Nt({get classList(){return{"is-shown":Y(),"has-bubble":kt}},get href(){return q()},get inert(){return Y()?void 0:!0}},()=>Q.button),!1,!0),Qt(Vs,Nt({get classList(){return{"is-shown":F(),"has-bubble":kt}},get inert(){return F()?void 0:!0}},()=>Q.surface),!1,!0),ee.classList.toggle("has-bubble",!!kt),Qt(ee,Nt(()=>Q.button),!1,!0),Le.classList.toggle("has-bubble",!!kt),Qt(Le,Nt(()=>Q.button),!1,!0),Ht(Ne,(()=>{var ze=Rs(()=>!!ne());return()=>ze()?`Booklet pages ${j()} of ${W().count}`:""})()),qn(ze=>{var ct=!d(),Dt=!!We(),Ue=!!re(),Kt=!d(),ht=!!(D()||F()),cn=!!p();return ct!==ze.e&&Qe.classList.toggle("is-hidden",ze.e=ct),Dt!==ze.t&&wn.classList.toggle("is-switching",ze.t=Dt),Ue!==ze.a&&zi.classList.toggle("is-switching",ze.a=Ue),Kt!==ze.o&&ii.classList.toggle("is-hidden",ze.o=Kt),ht!==ze.i&&ii.classList.toggle("is-leaving",ze.i=ht),cn!==ze.n&&os.classList.toggle("is-switching",ze.n=cn),ze},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),te})()}function Fb(n){const e=dc(),t=hd(),i=pp(),s=an(()=>Wu(i,e.pathname));let r=e.pathname,o=!1,a=null;const l=()=>window.history.state?._depth??window.history.length-1,c=l(),h=g=>{if(g===Ko)return 1;const x=g.split("/")[2];return x?x==="open"?1:2:0},[u,d]=vt(null,{equals:!1});dn(()=>{const[,g,x]=e.pathname.split("/"),p=x?n.collection.albums.find(m=>m.id===g):void 0;document.title=p?`Pattu Book · ${p.title} · ${p.artist}`:"Pattu Book"});function f(g){if(o){a=g;return}if(g===r)return;const x=r;r=g,h(g)<h(x)&&l()>c&&window.history.state?.parent===g?(o=!0,t(-1)):h(g)>h(x)?t(g,{scroll:!1,state:{parent:x}}):t(g,{replace:!0,scroll:!1,state:{parent:window.history.state?.parent}})}return dn(Jt(()=>e.pathname,g=>{if(g!==r)r=g,o=!1,a=null,d(Wu(i,g));else if(o){o=!1;const x=a;a=null,x&&f(x)}},{defer:!0})),At(Ub,{get collection(){return n.collection},link:s,jump:u,onPath:f})}function Nb(){const[n,e]=vt(null);return ib(),sb().then(t=>{Ab(t.theme,"Pattu Book"),e({collection:t})},t=>e({error:t.message})),At(kf,{get children(){return[At(Gc,{get when(){return n()?.collection},keyed:!0,children:t=>At(Dp,{get children(){return[At(Yc,{path:[Ko,"/:album?/:mode?"],get matchFilters(){return{album:t.albums.map(i=>i.id),mode:nb}},component:()=>At(Fb,{collection:t})}),At(Yc,{path:"*",component:()=>At(Fp,{href:"/"})})]}})}),At(Gc,{get when(){return n()?.error},keyed:!0,children:t=>(()=>{var i=Mb();return Ht(i,t),i})()})]}})}$f(()=>At(Nb,{}),document.getElementById("root"));cc(["click"]);export{pi as C,Go as D,Un as F,Qn as H,en as L,jt as N,Fn as R,Md as U,Bb as a,De as b};
