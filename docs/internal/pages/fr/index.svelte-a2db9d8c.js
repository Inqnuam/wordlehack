import{_ as k}from"../../chunks/preload-helper-33318b22.js";import{S as te,i as re,s as se,e as P,k as g,l as z,Y as oe,c as v,d as w,m as I,b as J,F as R,g as W,o as O,p as ne,q as D,v as le,Z as ae,n as ie,_ as h,t as F,h as q,j as ue,E as Y,Q as K,R as X,a as S,G as Z,N as _e,w as j,x as C,f as fe,y as H,T as $,B as G}from"../../chunks/index-3bd5fae0.js";import{g as Q,f as x,T as de,W as ce,F as me}from"../../chunks/FilteredWords-19b5622d.js";import"../../chunks/index-9f709e4b.js";const{document:B}=ae;function pe(i){let l;return{c(){l=F(i[5])},l(e){l=q(e,i[5])},m(e,n){W(e,l,n)},p(e,n){n&32&&ue(l,e[5])},i:Y,o:Y,d(e){e&&w(l)}}}function we(i){let l,e,n,r,s,a,u,c,f,b,o,m,E,L,N;l=new de({props:{testedWords:i[4]}});function U(t){i[10](t)}let p={testedWords:i[4]};i[0]!==void 0&&(p.newWord=i[0]),n=new ce({props:p}),K.push(()=>X(n,"newWord",U));let _=i[4].length>0&&ee(i);function M(t){i[11](t)}let V={latestFilter:i[3]};return i[0]!==void 0&&(V.newWord=i[0]),o=new me({props:V}),K.push(()=>X(o,"newWord",M)),{c(){j(l.$$.fragment),e=g(),j(n.$$.fragment),s=g(),a=P("div"),u=P("button"),c=F("Trouver"),f=g(),_&&_.c(),b=g(),j(o.$$.fragment),this.h()},l(t){C(l.$$.fragment,t),e=I(t),C(n.$$.fragment,t),s=I(t),a=v(t,"DIV",{style:!0});var d=S(a);u=v(d,"BUTTON",{});var T=S(u);c=q(T,"Trouver"),T.forEach(w),f=I(d),_&&_.l(d),d.forEach(w),b=I(t),C(o.$$.fragment,t),this.h()},h(){u.disabled=i[6],fe(a,"margin","15px")},m(t,d){H(l,t,d),W(t,e,d),H(n,t,d),W(t,s,d),W(t,a,d),R(a,u),R(u,c),R(a,f),_&&_.m(a,null),W(t,b,d),H(o,t,d),E=!0,L||(N=Z(u,"click",i[9]),L=!0)},p(t,d){const T={};d&16&&(T.testedWords=t[4]),l.$set(T);const y={};d&16&&(y.testedWords=t[4]),!r&&d&1&&(r=!0,y.newWord=t[0],$(()=>r=!1)),n.$set(y),(!E||d&64)&&(u.disabled=t[6]),t[4].length>0?_?_.p(t,d):(_=ee(t),_.c(),_.m(a,null)):_&&(_.d(1),_=null);const A={};d&8&&(A.latestFilter=t[3]),!m&&d&1&&(m=!0,A.newWord=t[0],$(()=>m=!1)),o.$set(A)},i(t){E||(D(l.$$.fragment,t),D(n.$$.fragment,t),D(o.$$.fragment,t),E=!0)},o(t){O(l.$$.fragment,t),O(n.$$.fragment,t),O(o.$$.fragment,t),E=!1},d(t){G(l,t),t&&w(e),G(n,t),t&&w(s),t&&w(a),_&&_.d(),t&&w(b),G(o,t),L=!1,N()}}}function ee(i){let l,e,n,r,s,a,u;return{c(){l=P("button"),e=F("Annuler"),n=g(),r=P("button"),s=F("Recommencer")},l(c){l=v(c,"BUTTON",{});var f=S(l);e=q(f,"Annuler"),f.forEach(w),n=I(c),r=v(c,"BUTTON",{});var b=S(r);s=q(b,"Recommencer"),b.forEach(w)},m(c,f){W(c,l,f),R(l,e),W(c,n,f),W(c,r,f),R(r,s),a||(u=[Z(l,"click",i[8]),Z(r,"click",i[7])],a=!0)},p:Y,d(c){c&&w(l),c&&w(n),c&&w(r),a=!1,_e(u)}}}function be(i){let l,e,n,r,s,a,u;B.title=l=i[1]+" lettres - Fran\xE7ais - Wordle Hack";const c=[we,pe],f=[];function b(o,m){return o[2]?0:1}return r=b(i),s=f[r]=c[r](i),{c(){e=P("meta"),n=g(),s.c(),a=z(),this.h()},l(o){const m=oe('[data-svelte="svelte-8ku62q"]',B.head);e=v(m,"META",{name:!0,content:!0}),m.forEach(w),n=I(o),s.l(o),a=z(),this.h()},h(){J(e,"name","description"),J(e,"content","About this app")},m(o,m){R(B.head,e),W(o,n,m),f[r].m(o,m),W(o,a,m),u=!0},p(o,[m]){(!u||m&2)&&l!==(l=o[1]+" lettres - Fran\xE7ais - Wordle Hack")&&(B.title=l);let E=r;r=b(o),r===E?f[r].p(o,m):(ie(),O(f[E],1,1,()=>{f[E]=null}),ne(),s=f[r],s?s.p(o,m):(s=f[r]=c[r](o),s.c()),D(s,1),s.m(a.parentNode,a))},i(o){u||(D(s),u=!0)},o(o){O(s),u=!1},d(o){w(e),o&&w(n),f[r].d(o),o&&w(a)}}}const Ee="Enter",We="NumpadEnter";function ke(i,l,e){let n,r,s={},a=[],u=[],c="",f=!0;function b(){e(3,a=[]),e(4,u=[]),e(0,s=Q(n)),document.getElementById("letter0").focus()}function o(){if(u.splice(u.length-1,1),u.length>0){let p=r;for(const _ of u)p=x(p,_);e(3,a=p)}else e(3,a=[]);e(4,u),document.getElementById("letter0").focus()}function m(){const p=a.length>0?a:r;e(3,a=x(p,s)),u.push(s),e(4,u),e(0,s=Q(n)),document.getElementById("letter0").focus()}function E(){e(6,f=Object.keys(s).map(p=>s[p].value.trim()=="").includes(!0))}async function L(){switch(n){case 4:const{frWords4:p}=await k(()=>import("../../chunks/words4-3057d22b.js"),["chunks/words4-3057d22b.js","chunks/index-dcb5d3c4.js","chunks/index-3bd5fae0.js"]);e(2,r=h(p));break;case 5:const{frWords5:_}=await k(()=>import("../../chunks/words5-f234df1b.js"),["chunks/words5-f234df1b.js","chunks/index-dcb5d3c4.js","chunks/index-3bd5fae0.js"]);e(2,r=h(_));break;case 6:const{frWords6:M}=await k(()=>import("../../chunks/words6-da020d34.js"),["chunks/words6-da020d34.js","chunks/index-dcb5d3c4.js","chunks/index-3bd5fae0.js"]);e(2,r=h(M));break;case 7:const{frWords7:V}=await k(()=>import("../../chunks/words7-26a53dd2.js"),["chunks/words7-26a53dd2.js","chunks/index-dcb5d3c4.js","chunks/index-3bd5fae0.js"]);e(2,r=h(V));break;case 8:const{frWords8:t}=await k(()=>import("../../chunks/words8-1c6b8418.js"),["chunks/words8-1c6b8418.js","chunks/index-dcb5d3c4.js","chunks/index-3bd5fae0.js"]);e(2,r=h(t));break;case 9:const{frWords9:d}=await k(()=>import("../../chunks/words9-b54f0b79.js"),["chunks/words9-b54f0b79.js","chunks/index-dcb5d3c4.js","chunks/index-3bd5fae0.js"]);e(2,r=h(d));break;case 10:const{frWords10:T}=await k(()=>import("../../chunks/words10-f9d24e44.js"),["chunks/words10-f9d24e44.js","chunks/index-dcb5d3c4.js","chunks/index-3bd5fae0.js"]);e(2,r=h(T));break;case 11:const{frWords11:y}=await k(()=>import("../../chunks/words11-6c402b5e.js"),["chunks/words11-6c402b5e.js","chunks/index-dcb5d3c4.js","chunks/index-3bd5fae0.js"]);e(2,r=h(y));break;case 12:const{frWords12:A}=await k(()=>import("../../chunks/words12-b22501d1.js"),["chunks/words12-b22501d1.js","chunks/index-dcb5d3c4.js","chunks/index-3bd5fae0.js"]);e(2,r=h(A));break;default:throw new Error(`Wordle avec ${n} lettres n'est pas support\xE9`)}}le(async()=>{const p=new URLSearchParams(window.location.search);e(1,n=Number(p.get("letter"))),e(0,s=Q(n));try{await L(),document.getElementById("letter0").focus(),document.addEventListener("keyup",_=>{(_.code==Ee||_.code==We)&&!f&&(_.preventDefault(),m())})}catch(_){e(5,c=_.message)}});function N(p){s=p,e(0,s)}function U(p){s=p,e(0,s)}return i.$$.update=()=>{i.$$.dirty&1&&E()},[s,n,r,a,u,c,f,b,o,m,N,U]}class Re extends te{constructor(l){super(),re(this,l,ke,be,se,{})}}export{Re as default};
