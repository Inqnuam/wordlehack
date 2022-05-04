import{_ as X}from"../../chunks/preload-helper-33318b22.js";import{S as x,i as ee,s as te,k as E,l as G,Y as se,d as w,m as h,g,o as T,p as re,q as v,v as ne,Z as oe,n as le,_ as ie,t as I,h as R,j as fe,E as V,Q,R as Y,e as F,c as L,a as O,F as N,G as $,N as ue,w as q,x as P,f as ae,y as j,T as Z,B as C}from"../../chunks/index-3bd5fae0.js";import{g as H,f as z,T as de,W as _e,F as ce}from"../../chunks/FilteredWords-19b5622d.js";import"../../chunks/index-9f709e4b.js";const{document:M}=oe;function pe(f){let n;return{c(){n=I(f[5])},l(s){n=R(s,f[5])},m(s,t){g(s,n,t)},p(s,t){t&32&&fe(n,s[5])},i:V,o:V,d(s){s&&w(n)}}}function me(f){let n,s,t,o,l,i,a,u,p,b,r,m,W,k,B;n=new de({props:{testedWords:f[4]}});function D(e){f[10](e)}let c={testedWords:f[4]};f[0]!==void 0&&(c.newWord=f[0]),t=new _e({props:c}),Q.push(()=>Y(t,"newWord",D));let d=f[4].length>0&&J(f);function K(e){f[11](e)}let A={latestFilter:f[3]};return f[0]!==void 0&&(A.newWord=f[0]),r=new ce({props:A}),Q.push(()=>Y(r,"newWord",K)),{c(){q(n.$$.fragment),s=E(),q(t.$$.fragment),l=E(),i=F("div"),a=F("button"),u=I("Find"),p=E(),d&&d.c(),b=E(),q(r.$$.fragment),this.h()},l(e){P(n.$$.fragment,e),s=h(e),P(t.$$.fragment,e),l=h(e),i=L(e,"DIV",{style:!0});var _=O(i);a=L(_,"BUTTON",{});var y=O(a);u=R(y,"Find"),y.forEach(w),p=h(_),d&&d.l(_),_.forEach(w),b=h(e),P(r.$$.fragment,e),this.h()},h(){a.disabled=f[6],ae(i,"margin","15px")},m(e,_){j(n,e,_),g(e,s,_),j(t,e,_),g(e,l,_),g(e,i,_),N(i,a),N(a,u),N(i,p),d&&d.m(i,null),g(e,b,_),j(r,e,_),W=!0,k||(B=$(a,"click",f[9]),k=!0)},p(e,_){const y={};_&16&&(y.testedWords=e[4]),n.$set(y);const S={};_&16&&(S.testedWords=e[4]),!o&&_&1&&(o=!0,S.newWord=e[0],Z(()=>o=!1)),t.$set(S),(!W||_&64)&&(a.disabled=e[6]),e[4].length>0?d?d.p(e,_):(d=J(e),d.c(),d.m(i,null)):d&&(d.d(1),d=null);const U={};_&8&&(U.latestFilter=e[3]),!m&&_&1&&(m=!0,U.newWord=e[0],Z(()=>m=!1)),r.$set(U)},i(e){W||(v(n.$$.fragment,e),v(t.$$.fragment,e),v(r.$$.fragment,e),W=!0)},o(e){T(n.$$.fragment,e),T(t.$$.fragment,e),T(r.$$.fragment,e),W=!1},d(e){C(n,e),e&&w(s),C(t,e),e&&w(l),e&&w(i),d&&d.d(),e&&w(b),C(r,e),k=!1,B()}}}function J(f){let n,s,t,o,l,i,a;return{c(){n=F("button"),s=I("Revert"),t=E(),o=F("button"),l=I("Restart")},l(u){n=L(u,"BUTTON",{});var p=O(n);s=R(p,"Revert"),p.forEach(w),t=h(u),o=L(u,"BUTTON",{});var b=O(o);l=R(b,"Restart"),b.forEach(w)},m(u,p){g(u,n,p),N(n,s),g(u,t,p),g(u,o,p),N(o,l),i||(a=[$(n,"click",f[8]),$(o,"click",f[7])],i=!0)},p:V,d(u){u&&w(n),u&&w(t),u&&w(o),i=!1,ue(a)}}}function we(f){var b;let n,s,t,o,l,i;M.title=n=((b=f[1])!=null?b:5)+" letters - English - Wordle Hack";const a=[me,pe],u=[];function p(r,m){return r[2]?0:1}return t=p(f),o=u[t]=a[t](f),{c(){s=E(),o.c(),l=G()},l(r){se('[data-svelte="svelte-12n0wn5"]',M.head).forEach(w),s=h(r),o.l(r),l=G()},m(r,m){g(r,s,m),u[t].m(r,m),g(r,l,m),i=!0},p(r,[m]){var k;(!i||m&2)&&n!==(n=((k=r[1])!=null?k:5)+" letters - English - Wordle Hack")&&(M.title=n);let W=t;t=p(r),t===W?u[t].p(r,m):(le(),T(u[W],1,1,()=>{u[W]=null}),re(),o=u[t],o?o.p(r,m):(o=u[t]=a[t](r),o.c()),v(o,1),o.m(l.parentNode,l))},i(r){i||(v(o),i=!0)},o(r){T(o),i=!1},d(r){r&&w(s),u[t].d(r),r&&w(l)}}}const be="Enter",We="NumpadEnter";function ge(f,n,s){let t,o,l={},i=[],a=[],u="",p=!0;function b(){s(3,i=[]),s(4,a=[]),s(0,l=H(t)),document.getElementById("letter0").focus()}function r(){if(a.splice(a.length-1,1),a.length>0){let c=o;for(const d of a)c=z(c,d);s(3,i=c)}else s(3,i=[]);s(4,a),document.getElementById("letter0").focus()}function m(){const c=i.length>0?i:o;s(3,i=z(c,l)),a.push(l),s(4,a),s(0,l=H(t)),document.getElementById("letter0").focus()}function W(){s(6,p=Object.keys(l).map(c=>l[c].value.trim()=="").includes(!0))}async function k(){switch(t){case 5:const{enWords5:c}=await X(()=>import("../../chunks/words5-122caa18.js"),["chunks/words5-122caa18.js","chunks/index-dcb5d3c4.js","chunks/index-3bd5fae0.js"]);s(2,o=ie(c));break;default:throw new Error(`Wordle avec ${t} lettres n'est pas support\xE9`)}}ne(async()=>{const c=new URLSearchParams(window.location.search);s(1,t=Number(c.get("letter"))),s(0,l=H(t));try{await k(),document.getElementById("letter0").focus(),document.addEventListener("keyup",d=>{(d.code==be||d.code==We)&&!p&&(d.preventDefault(),m())})}catch(d){s(5,u=d.message)}});function B(c){l=c,s(0,l)}function D(c){l=c,s(0,l)}return f.$$.update=()=>{f.$$.dirty&1&&W()},[l,t,o,i,a,u,p,b,r,m,B,D]}class Te extends x{constructor(n){super(),ee(this,n,ge,we,te,{})}}export{Te as default};
