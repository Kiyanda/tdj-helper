var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function r(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,t){e.appendChild(t)}function a(e,t,n){e.insertBefore(t,n||null)}function s(e){e.parentNode.removeChild(e)}function i(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function f(){return u(" ")}function d(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function p(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function $(e){return""===e?null:+e}function m(e,t){e.value=null==t?"":t}function h(e,t){for(let n=0;n<e.options.length;n+=1){const o=e.options[n];if(o.__value===t)return void(o.selected=!0)}e.selectedIndex=-1}let g;function _(e){g=e}function v(){const e=function(){if(!g)throw new Error("Function called outside component initialization");return g}();return(t,n)=>{const o=e.$$.callbacks[t];if(o){const r=function(e,t,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,!1,t),o}(t,n);o.slice().forEach((t=>{t.call(e,r)}))}}}const y=[],x=[],b=[],k=[],E=Promise.resolve();let w=!1;function C(e){b.push(e)}let O=!1;const j=new Set;function A(){if(!O){O=!0;do{for(let e=0;e<y.length;e+=1){const t=y[e];_(t),M(t.$$)}for(_(null),y.length=0;x.length;)x.pop()();for(let e=0;e<b.length;e+=1){const t=b[e];j.has(t)||(j.add(t),t())}b.length=0}while(y.length);for(;k.length;)k.pop()();w=!1,O=!1,j.clear()}}function M(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}const N=new Set;function P(e,t){e&&e.i&&(N.delete(e),e.i(t))}function L(e,t,n,o){if(e&&e.o){if(N.has(e))return;N.add(e),undefined.c.push((()=>{N.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}function S(e){e&&e.c()}function T(e,n,l,c){const{fragment:a,on_mount:s,on_destroy:i,after_update:u}=e.$$;a&&a.m(n,l),c||C((()=>{const n=s.map(t).filter(r);i?i.push(...n):o(n),e.$$.on_mount=[]})),u.forEach(C)}function q(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function z(e,t){-1===e.$$.dirty[0]&&(y.push(e),w||(w=!0,E.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(t,r,l,c,a,i,u,f=[-1]){const d=g;_(t);const p=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};u&&u(p.root);let $=!1;if(p.ctx=l?l(t,r.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&a(p.ctx[e],p.ctx[e]=r)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](r),$&&z(t,e)),n})):[],p.update(),$=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);p.fragment&&p.fragment.l(e),e.forEach(s)}else p.fragment&&p.fragment.c();r.intro&&P(t.$$.fragment),T(t,r.target,r.anchor,r.customElement),A()}_(d)}class F{$destroy(){q(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function G(e,t,n){const o=e.slice();return o[12]=t[n],o[14]=n,o}function H(t){let n,o,r,l,d=t[12].label+" "+t[4][t[14]].score;return{c(){n=i("option"),o=u(d),r=f(),n.__value=l=t[4][t[14]],n.value=n.__value},m(e,t){a(e,n,t),c(n,o),c(n,r)},p:e,d(e){e&&s(n)}}}function I(t){let n,r,l,u,g,_,v,y,x,b,k=t[4],E=[];for(let e=0;e<k.length;e+=1)E[e]=H(G(t,k,e));return{c(){n=i("div"),r=i("select");for(let e=0;e<E.length;e+=1)E[e].c();l=f(),u=i("input"),g=f(),_=i("div"),v=i("input"),p(r,"class","svelte-1dran9s"),void 0===t[0]&&C((()=>t[7].call(r))),p(u,"type","number"),p(u,"max",t[1]),p(u,"min",t[2]),p(u,"class","svelte-1dran9s"),p(v,"type","range"),p(v,"max",t[1]),p(v,"min",t[2]),p(v,"style",y=`--max: ${t[1]};`),p(v,"class","svelte-1dran9s"),p(_,"class","flex svelte-1dran9s"),p(n,"class","flex list-item svelte-1dran9s")},m(e,o){a(e,n,o),c(n,r);for(let e=0;e<E.length;e+=1)E[e].m(r,null);h(r,t[0]),c(n,l),c(n,u),m(u,t[3]),c(n,g),c(n,_),c(_,v),m(v,t[3]),x||(b=[d(r,"change",t[7]),d(u,"input",t[8]),d(v,"change",t[9]),d(v,"input",t[9])],x=!0)},p(e,[t]){if(16&t){let n;for(k=e[4],n=0;n<k.length;n+=1){const o=G(e,k,n);E[n]?E[n].p(o,t):(E[n]=H(o),E[n].c(),E[n].m(r,null))}for(;n<E.length;n+=1)E[n].d(1);E.length=k.length}17&t&&h(r,e[0]),2&t&&p(u,"max",e[1]),4&t&&p(u,"min",e[2]),8&t&&$(u.value)!==e[3]&&m(u,e[3]),2&t&&p(v,"max",e[1]),4&t&&p(v,"min",e[2]),2&t&&y!==(y=`--max: ${e[1]};`)&&p(v,"style",y),8&t&&m(v,e[3])},i:e,o:e,d(e){e&&s(n),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(E,e),x=!1,o(b)}}}function R(e,t,n){let{position:o="天"}=t,{order:r=0}=t;const l=v(),c={atk:{"天":[10,4],"地":[5,2],"荒":[7,3]},def:{"天":[5,2],"地":[10,4],"荒":[7,3]}},a=[{label:"--",score:0,type:"atk"},{label:"攻擊",score:11,type:"atk"},{label:"傷害",score:10,type:"atk"},{label:"穿透",score:6,type:"atk"},{label:"暴擊",score:3,type:"atk"},{label:"反擊",score:0,type:"atk"},{label:"氣血",score:7,type:"def"},{label:"免傷",score:5,type:"def"},{label:"防禦",score:1,type:"def"},{label:"抗暴",score:0,type:"def"}];let s,i,u,f=5;return e.$$set=e=>{"position"in e&&n(5,o=e.position),"order"in e&&n(6,r=e.order)},e.$$.update=()=>{47&e.$$.dirty&&s&&(n(1,i=c[s.type][o][0]),n(2,u=c[s.type][o][1]),n(3,f=function(e,t,n){return e<=t?t:e>=n?n:e}(f,u,i))),79&e.$$.dirty&&l("update",{targetProp:s,value:f,order:r,max:i,min:u})},[s,i,u,f,a,o,r,function(){s=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),n(0,s),n(4,a)},function(){f=$(this.value),n(3,f),n(0,s),n(5,o),n(2,u),n(1,i)},function(){f=$(this.value),n(3,f),n(0,s),n(5,o),n(2,u),n(1,i)}]}class D extends F{constructor(e){super(),B(this,e,R,I,l,{position:5,order:6})}}function J(e){let t,n,r,l,$,m,h,g,_,v,y,x,b,k,E,w,C,O,j,A,M,N,z,B,F,G,H,I,R,J,K,Q,U,V,W,X,Y,Z,ee,te,ne,oe,re,le,ce,ae,se,ie,ue=e[1].max+"";return z=new D({props:{position:e[0],order:0}}),z.$on("update",e[3]),F=new D({props:{position:e[0],order:1}}),F.$on("update",e[3]),H=new D({props:{position:e[0],order:2}}),H.$on("update",e[3]),R=new D({props:{position:e[0],order:3}}),R.$on("update",e[3]),{c(){t=i("h1"),t.textContent="天地劫M 絕品魂石 評估",n=f(),r=i("form"),l=i("fieldset"),$=i("legend"),$.textContent="絕‧魂石孔位",m=f(),h=i("div"),g=i("label"),_=i("input"),v=u("\n        天"),y=f(),x=i("label"),b=i("input"),k=u("\n        地"),E=f(),w=i("label"),C=i("input"),O=u("\n        荒"),j=f(),A=i("fieldset"),M=i("legend"),M.textContent="副屬",N=f(),S(z.$$.fragment),B=f(),S(F.$$.fragment),G=f(),S(H.$$.fragment),I=f(),S(R.$$.fragment),J=f(),K=i("fieldset"),Q=i("legend"),Q.textContent="計分",U=f(),V=i("input"),Y=f(),Z=i("sub"),ee=u("/ "),te=u(ue),ne=f(),oe=i("input"),le=f(),ce=i("footer"),ce.innerHTML='<ul><li>Made by Rplus</li> \n    <li>計分標準參考來源：\n      <br/> \n      <a href="https://bbs.nga.cn/read.php?tid=26383169&amp;rand=456" target="_blank">魂石选择终极攻略 | NGA玩家社区</a></li></ul>',p(_,"type","radio"),p(_,"name","position"),_.__value="天",_.value=_.__value,_.checked=!0,e[6][0].push(_),p(b,"type","radio"),p(b,"name","position"),b.__value="地",b.value=b.__value,e[6][0].push(b),p(C,"type","radio"),p(C,"name","position"),C.__value="荒",C.value=C.__value,e[6][0].push(C),p(h,"class","flex jc-se"),p(V,"type","text"),V.readOnly=!0,p(V,"class","output svelte-p4d149"),V.value=W=e[1].score,p(V,"style",X=`--score: ${e[1].score}; --max: ${e[1].max}`),p(Z,"class","max svelte-p4d149"),p(oe,"type","reset"),p(K,"class","flex jc-sb"),p(r,"style",re=`--break-point: ${e[2][e[0]]}`)},m(o,s){a(o,t,s),a(o,n,s),a(o,r,s),c(r,l),c(l,$),c(l,m),c(l,h),c(h,g),c(g,_),_.checked=_.__value===e[0],c(g,v),c(h,y),c(h,x),c(x,b),b.checked=b.__value===e[0],c(x,k),c(h,E),c(h,w),c(w,C),C.checked=C.__value===e[0],c(w,O),c(r,j),c(r,A),c(A,M),c(A,N),T(z,A,null),c(A,B),T(F,A,null),c(A,G),T(H,A,null),c(A,I),T(R,A,null),c(r,J),c(r,K),c(K,Q),c(K,U),c(K,V),c(K,Y),c(K,Z),c(Z,ee),c(Z,te),c(K,ne),c(K,oe),a(o,le,s),a(o,ce,s),ae=!0,se||(ie=[d(_,"change",e[5]),d(b,"change",e[7]),d(C,"change",e[8])],se=!0)},p(e,[t]){1&t&&(_.checked=_.__value===e[0]),1&t&&(b.checked=b.__value===e[0]),1&t&&(C.checked=C.__value===e[0]);const n={};1&t&&(n.position=e[0]),z.$set(n);const o={};1&t&&(o.position=e[0]),F.$set(o);const l={};1&t&&(l.position=e[0]),H.$set(l);const c={};1&t&&(c.position=e[0]),R.$set(c),(!ae||2&t&&W!==(W=e[1].score)&&V.value!==W)&&(V.value=W),(!ae||2&t&&X!==(X=`--score: ${e[1].score}; --max: ${e[1].max}`))&&p(V,"style",X),(!ae||2&t)&&ue!==(ue=e[1].max+"")&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(te,ue),(!ae||1&t&&re!==(re=`--break-point: ${e[2][e[0]]}`))&&p(r,"style",re)},i(e){ae||(P(z.$$.fragment,e),P(F.$$.fragment,e),P(H.$$.fragment,e),P(R.$$.fragment,e),ae=!0)},o(e){L(z.$$.fragment,e),L(F.$$.fragment,e),L(H.$$.fragment,e),L(R.$$.fragment,e),ae=!1},d(l){l&&s(t),l&&s(n),l&&s(r),e[6][0].splice(e[6][0].indexOf(_),1),e[6][0].splice(e[6][0].indexOf(b),1),e[6][0].splice(e[6][0].indexOf(C),1),q(z),q(F),q(H),q(R),l&&s(le),l&&s(ce),se=!1,o(ie)}}}function K(e,t,n){let o="天";let r={score:0,max:0},l=[];return e.$$.update=()=>{16&e.$$.dirty&&(console.log(111,l),n(1,r=function(e){return e.reduce(((e,t)=>(e.score+=t.targetProp.score*t.value,e.max+=t.targetProp.score*t.max,e)),{score:0,max:0})}(l)))},[o,r,{"天":164,"地":143,"荒":145},function(e){n(4,l[e.detail.order]=e.detail,l)},l,function(){o=this.__value,n(0,o)},[[]],function(){o=this.__value,n(0,o)},function(){o=this.__value,n(0,o)}]}return new class extends F{constructor(e){super(),B(this,e,K,J,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
