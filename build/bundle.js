var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function r(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,t){e.appendChild(t)}function c(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function a(e){return document.createElement(e)}function s(e){return document.createTextNode(e)}function f(){return s(" ")}function d(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function p(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function $(e){return""===e?null:+e}function h(e,t){e.value=null==t?"":t}function m(e,t){for(let n=0;n<e.options.length;n+=1){const o=e.options[n];if(o.__value===t)return void(o.selected=!0)}e.selectedIndex=-1}let g;function _(e){g=e}function v(){const e=function(){if(!g)throw new Error("Function called outside component initialization");return g}();return(t,n)=>{const o=e.$$.callbacks[t];if(o){const r=function(e,t,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,!1,t),o}(t,n);o.slice().forEach((t=>{t.call(e,r)}))}}}const y=[],b=[],x=[],k=[],E=Promise.resolve();let w=!1;function C(e){x.push(e)}let O=!1;const j=new Set;function A(){if(!O){O=!0;do{for(let e=0;e<y.length;e+=1){const t=y[e];_(t),M(t.$$)}for(_(null),y.length=0;b.length;)b.pop()();for(let e=0;e<x.length;e+=1){const t=x[e];j.has(t)||(j.add(t),t())}x.length=0}while(y.length);for(;k.length;)k.pop()();w=!1,O=!1,j.clear()}}function M(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}const N=new Set;function L(e,t){e&&e.i&&(N.delete(e),e.i(t))}function P(e,t,n,o){if(e&&e.o){if(N.has(e))return;N.add(e),undefined.c.push((()=>{N.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}function S(e){e&&e.c()}function q(e,n,l,i){const{fragment:c,on_mount:u,on_destroy:a,after_update:s}=e.$$;c&&c.m(n,l),i||C((()=>{const n=u.map(t).filter(r);a?a.push(...n):o(n),e.$$.on_mount=[]})),s.forEach(C)}function z(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function T(e,t){-1===e.$$.dirty[0]&&(y.push(e),w||(w=!0,E.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(t,r,l,i,c,a,s,f=[-1]){const d=g;_(t);const p=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};s&&s(p.root);let $=!1;if(p.ctx=l?l(t,r.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&c(p.ctx[e],p.ctx[e]=r)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](r),$&&T(t,e)),n})):[],p.update(),$=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);p.fragment&&p.fragment.l(e),e.forEach(u)}else p.fragment&&p.fragment.c();r.intro&&L(t.$$.fragment),q(t,r.target,r.anchor,r.customElement),A()}_(d)}class F{$destroy(){z(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function G(e,t,n){const o=e.slice();return o[12]=t[n],o[14]=n,o}function H(t){let n,o,r,l,d=t[12].label+" "+t[4][t[14]].score;return{c(){n=a("option"),o=s(d),r=f(),n.__value=l=t[4][t[14]],n.value=n.__value},m(e,t){c(e,n,t),i(n,o),i(n,r)},p:e,d(e){e&&u(n)}}}function I(t){let n,r,l,s,g,_,v,y,b,x,k=t[4],E=[];for(let e=0;e<k.length;e+=1)E[e]=H(G(t,k,e));return{c(){n=a("div"),r=a("select");for(let e=0;e<E.length;e+=1)E[e].c();l=f(),s=a("input"),g=f(),_=a("div"),v=a("input"),p(r,"class","svelte-1dran9s"),void 0===t[0]&&C((()=>t[7].call(r))),p(s,"type","number"),p(s,"max",t[1]),p(s,"min",t[2]),p(s,"class","svelte-1dran9s"),p(v,"type","range"),p(v,"max",t[1]),p(v,"min",t[2]),p(v,"style",y=`--max: ${t[1]};`),p(v,"class","svelte-1dran9s"),p(_,"class","flex svelte-1dran9s"),p(n,"class","flex list-item svelte-1dran9s")},m(e,o){c(e,n,o),i(n,r);for(let e=0;e<E.length;e+=1)E[e].m(r,null);m(r,t[0]),i(n,l),i(n,s),h(s,t[3]),i(n,g),i(n,_),i(_,v),h(v,t[3]),b||(x=[d(r,"change",t[7]),d(s,"input",t[8]),d(v,"change",t[9]),d(v,"input",t[9])],b=!0)},p(e,[t]){if(16&t){let n;for(k=e[4],n=0;n<k.length;n+=1){const o=G(e,k,n);E[n]?E[n].p(o,t):(E[n]=H(o),E[n].c(),E[n].m(r,null))}for(;n<E.length;n+=1)E[n].d(1);E.length=k.length}17&t&&m(r,e[0]),2&t&&p(s,"max",e[1]),4&t&&p(s,"min",e[2]),8&t&&$(s.value)!==e[3]&&h(s,e[3]),2&t&&p(v,"max",e[1]),4&t&&p(v,"min",e[2]),2&t&&y!==(y=`--max: ${e[1]};`)&&p(v,"style",y),8&t&&h(v,e[3])},i:e,o:e,d(e){e&&u(n),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(E,e),b=!1,o(x)}}}function R(e,t,n){let{position:o="天"}=t,{order:r=0}=t;const l=v(),i={atk:{"天":[10,4],"地":[5,2],"荒":[7,3]},def:{"天":[5,2],"地":[10,4],"荒":[7,3]}},c=[{label:"--",score:0,type:"atk"},{label:"攻擊",score:11,type:"atk"},{label:"傷害",score:10,type:"atk"},{label:"穿透",score:6,type:"atk"},{label:"暴擊",score:3,type:"atk"},{label:"反擊",score:0,type:"atk"},{label:"氣血",score:7,type:"def"},{label:"免傷",score:5,type:"def"},{label:"防禦",score:1,type:"def"},{label:"抗暴",score:0,type:"def"}];let u,a,s,f=5;return e.$$set=e=>{"position"in e&&n(5,o=e.position),"order"in e&&n(6,r=e.order)},e.$$.update=()=>{47&e.$$.dirty&&u&&(n(1,a=i[u.type][o][0]),n(2,s=i[u.type][o][1]),n(3,f=function(e,t,n){return e<=t?t:e>=n?n:e}(f,s,a))),73&e.$$.dirty&&l("update",{targetProp:u,value:f,order:r})},[u,a,s,f,c,o,r,function(){u=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),n(0,u),n(4,c)},function(){f=$(this.value),n(3,f),n(0,u),n(5,o),n(2,s),n(1,a)},function(){f=$(this.value),n(3,f),n(0,u),n(5,o),n(2,s),n(1,a)}]}class D extends F{constructor(e){super(),B(this,e,R,I,l,{position:5,order:6})}}function J(e){let t,n,r,l,$,h,m,g,_,v,y,b,x,k,E,w,C,O,j,A,M,N,T,B,F,G,H,I,R,J,K,Q,U,V,W,X,Y,Z,ee,te,ne,oe,re;return T=new D({props:{position:e[0],order:0}}),T.$on("update",e[3]),F=new D({props:{position:e[0],order:1}}),F.$on("update",e[3]),H=new D({props:{position:e[0],order:2}}),H.$on("update",e[3]),R=new D({props:{position:e[0],order:3}}),R.$on("update",e[3]),{c(){t=a("h1"),t.textContent="天地劫M 絕品魂石 評估",n=f(),r=a("form"),l=a("fieldset"),$=a("legend"),$.textContent="絕‧魂石孔位",h=f(),m=a("div"),g=a("label"),_=a("input"),v=s("\n        天"),y=f(),b=a("label"),x=a("input"),k=s("\n        地"),E=f(),w=a("label"),C=a("input"),O=s("\n        荒"),j=f(),A=a("fieldset"),M=a("legend"),M.textContent="副屬",N=f(),S(T.$$.fragment),B=f(),S(F.$$.fragment),G=f(),S(H.$$.fragment),I=f(),S(R.$$.fragment),J=f(),K=a("fieldset"),Q=a("legend"),Q.textContent="計分",U=f(),V=a("input"),X=f(),Y=a("input"),ee=f(),te=a("footer"),te.innerHTML='<ul><li>Made by Rplus</li> \n    <li>計分標準參考來源：\n      <br/> \n      <a href="https://bbs.nga.cn/read.php?tid=26383169&amp;rand=456" target="_blank">魂石选择终极攻略 | NGA玩家社区</a></li></ul>',p(_,"type","radio"),p(_,"name","position"),_.__value="天",_.value=_.__value,_.checked=!0,e[6][0].push(_),p(x,"type","radio"),p(x,"name","position"),x.__value="地",x.value=x.__value,e[6][0].push(x),p(C,"type","radio"),p(C,"name","position"),C.__value="荒",C.value=C.__value,e[6][0].push(C),p(m,"class","flex jc-se"),p(V,"type","text"),V.readOnly=!0,p(V,"class","output svelte-14v5fiz"),V.value=e[1],p(V,"style",W=`--p: ${e[1]}`),p(Y,"type","reset"),p(K,"class","flex jc-sb"),p(r,"style",Z=`--break-point: ${e[2][e[0]]}`)},m(o,u){c(o,t,u),c(o,n,u),c(o,r,u),i(r,l),i(l,$),i(l,h),i(l,m),i(m,g),i(g,_),_.checked=_.__value===e[0],i(g,v),i(m,y),i(m,b),i(b,x),x.checked=x.__value===e[0],i(b,k),i(m,E),i(m,w),i(w,C),C.checked=C.__value===e[0],i(w,O),i(r,j),i(r,A),i(A,M),i(A,N),q(T,A,null),i(A,B),q(F,A,null),i(A,G),q(H,A,null),i(A,I),q(R,A,null),i(r,J),i(r,K),i(K,Q),i(K,U),i(K,V),i(K,X),i(K,Y),c(o,ee,u),c(o,te,u),ne=!0,oe||(re=[d(_,"change",e[5]),d(x,"change",e[7]),d(C,"change",e[8])],oe=!0)},p(e,[t]){1&t&&(_.checked=_.__value===e[0]),1&t&&(x.checked=x.__value===e[0]),1&t&&(C.checked=C.__value===e[0]);const n={};1&t&&(n.position=e[0]),T.$set(n);const o={};1&t&&(o.position=e[0]),F.$set(o);const l={};1&t&&(l.position=e[0]),H.$set(l);const i={};1&t&&(i.position=e[0]),R.$set(i),(!ne||2&t&&V.value!==e[1])&&(V.value=e[1]),(!ne||2&t&&W!==(W=`--p: ${e[1]}`))&&p(V,"style",W),(!ne||1&t&&Z!==(Z=`--break-point: ${e[2][e[0]]}`))&&p(r,"style",Z)},i(e){ne||(L(T.$$.fragment,e),L(F.$$.fragment,e),L(H.$$.fragment,e),L(R.$$.fragment,e),ne=!0)},o(e){P(T.$$.fragment,e),P(F.$$.fragment,e),P(H.$$.fragment,e),P(R.$$.fragment,e),ne=!1},d(l){l&&u(t),l&&u(n),l&&u(r),e[6][0].splice(e[6][0].indexOf(_),1),e[6][0].splice(e[6][0].indexOf(x),1),e[6][0].splice(e[6][0].indexOf(C),1),z(T),z(F),z(H),z(R),l&&u(ee),l&&u(te),oe=!1,o(re)}}}function K(e,t,n){let o="天";let r=[],l=0;return e.$$.update=()=>{16&e.$$.dirty&&n(1,l=r.reduce(((e,t)=>e+t),0))},[o,l,{"天":164,"地":143,"荒":145},function(e){n(4,r[e.detail.order]=e.detail.targetProp.score*e.detail.value,r)},r,function(){o=this.__value,n(0,o)},[[]],function(){o=this.__value,n(0,o)},function(){o=this.__value,n(0,o)}]}return new class extends F{constructor(e){super(),B(this,e,K,J,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
