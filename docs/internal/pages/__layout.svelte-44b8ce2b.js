import{S as x,i as ee,s as te,e as p,t as q,k as V,c as k,a as E,h as A,d as u,m as N,b as _,f as J,g as y,F as h,G as W,j as K,H as be,I as pe,J as ke,q as R,K as ye,L as Te,o as G,M as oe,N as Ve,l as ce,n as Ne,p as He,O as Be,P as ge,Q as Le,R as Me,w as Ee,x as we,y as Ie,T as Se,B as De,U as qe,v as Ae,V as $,W as z,X as Oe,E as Ce}from"../chunks/index-3bd5fae0.js";import{f as Z}from"../chunks/index-9f709e4b.js";import{r as Fe}from"../chunks/index-dcb5d3c4.js";function fe(a){let e,s,t,n,i,l,r,c,d,m,w,b,o,f,T,H,D,O,U,C,v,I,B,M,F,j;const Y=a[6].default,L=ge(Y,a,a[5],null);return{c(){e=p("div"),s=p("div"),t=p("div"),n=p("div"),i=p("b"),l=q(a[1]),r=V(),c=p("button"),d=V(),m=p("div"),L&&L.c(),w=V(),b=p("div"),o=p("div"),f=p("button"),T=q("Fermer"),H=V(),D=p("button"),O=q(a[2]),v=V(),I=p("div"),this.h()},l(g){e=k(g,"DIV",{class:!0,style:!0,tabindex:!0});var S=E(e);s=k(S,"DIV",{class:!0});var le=E(s);t=k(le,"DIV",{class:!0});var P=E(t);n=k(P,"DIV",{class:!0});var Q=E(n);i=k(Q,"B",{class:!0});var se=E(i);l=A(se,a[1]),se.forEach(u),r=N(Q),c=k(Q,"BUTTON",{type:!0,class:!0}),E(c).forEach(u),Q.forEach(u),d=N(P),m=k(P,"DIV",{class:!0});var ae=E(m);L&&L.l(ae),ae.forEach(u),w=N(P),b=k(P,"DIV",{class:!0});var ie=E(b);o=k(ie,"DIV",{});var X=E(o);f=k(X,"BUTTON",{type:!0});var ne=E(f);T=A(ne,"Fermer"),ne.forEach(u),H=N(X),D=k(X,"BUTTON",{type:!0});var re=E(D);O=A(re,a[2]),re.forEach(u),X.forEach(u),ie.forEach(u),P.forEach(u),le.forEach(u),S.forEach(u),v=N(g),I=k(g,"DIV",{class:!0,style:!0}),E(I).forEach(u),this.h()},h(){_(i,"class","modal-title svelte-634buc"),_(c,"type","button"),_(c,"class","btn-close svelte-634buc"),_(n,"class","modal-header svelte-634buc"),_(m,"class","modal-body svelte-634buc"),_(f,"type","button"),_(D,"type","submit"),D.disabled=a[3],_(b,"class","customFooter svelte-634buc"),_(t,"class","modal-content svelte-634buc"),_(s,"class","modal-dialog modal-dialog-centered svelte-634buc"),_(e,"class","modal svelte-634buc"),J(e,"display","block"),_(e,"tabindex","-1"),_(I,"class","modal-backdrop svelte-634buc"),J(I,"display","block")},m(g,S){y(g,e,S),h(e,s),h(s,t),h(t,n),h(n,i),h(i,l),h(n,r),h(n,c),h(t,d),h(t,m),L&&L.m(m,null),h(t,w),h(t,b),h(b,o),h(o,f),h(f,T),h(o,H),h(o,D),h(D,O),y(g,v,S),y(g,I,S),M=!0,F||(j=[W(c,"click",a[7]),W(f,"click",a[8]),W(D,"click",a[9])],F=!0)},p(g,S){(!M||S&2)&&K(l,g[1]),L&&L.p&&(!M||S&32)&&be(L,Y,g,g[5],M?ke(Y,g[5],S,null):pe(g[5]),null),(!M||S&4)&&K(O,g[2]),(!M||S&8)&&(D.disabled=g[3])},i(g){M||(R(L,g),g&&ye(()=>{C&&C.end(1),U=Te(e,Z,{y:-500,duration:500}),U.start()}),B&&B.end(1),M=!0)},o(g){G(L,g),U&&U.invalidate(),g&&(C=oe(e,Z,{y:100,duration:100})),g&&(B=oe(I,Z,{duration:500})),M=!1},d(g){g&&u(e),L&&L.d(g),g&&C&&C.end(),g&&u(v),g&&u(I),g&&B&&B.end(),F=!1,Ve(j)}}}function Re(a){let e,s,t=a[0]&&fe(a);return{c(){t&&t.c(),e=ce()},l(n){t&&t.l(n),e=ce()},m(n,i){t&&t.m(n,i),y(n,e,i),s=!0},p(n,[i]){n[0]?t?(t.p(n,i),i&1&&R(t,1)):(t=fe(n),t.c(),R(t,1),t.m(e.parentNode,e)):t&&(Ne(),G(t,1,1,()=>{t=null}),He())},i(n){s||(R(t),s=!0)},o(n){G(t),s=!1},d(n){t&&t.d(n),n&&u(e)}}}function Ue(a,e,s){let{$$slots:t={},$$scope:n}=e,{isOpen:i=!1}=e,{title:l="Modal"}=e,{btnTitle:r="Print"}=e,{submitIsDisabled:c=!1}=e;const d=Be(),m=()=>s(0,i=!1),w=()=>s(0,i=!1),b=()=>{d("submit")};return a.$$set=o=>{"isOpen"in o&&s(0,i=o.isOpen),"title"in o&&s(1,l=o.title),"btnTitle"in o&&s(2,r=o.btnTitle),"submitIsDisabled"in o&&s(3,c=o.submitIsDisabled),"$$scope"in o&&s(5,n=o.$$scope)},a.$$.update=()=>{a.$$.dirty&1&&d(i?"open":"close")},[i,l,r,c,d,n,t,m,w,b]}class Pe extends x{constructor(e){super(),ee(this,e,Ue,Re,te,{isOpen:0,title:1,btnTitle:2,submitIsDisabled:3})}}const ue="/wordlehack/",We=Fe([{name:"Fran\xE7ais",code:"fr",flag:ue+"flags/fr.svg",letters:[4,5,6,7,8,9,10,11],selected:5},{name:"English",code:"en",flag:ue+"flags/en.svg",letters:[5],selected:5}]);function de(a,e,s){const t=a.slice();return t[11]=e[s],t}function _e(a,e,s){const t=a.slice();return t[14]=e[s],t}function Ge(a){let e,s,t,n,i;return{c(){e=p("img"),n=V(),i=q(a[2]),this.h()},l(l){e=k(l,"IMG",{width:!0,src:!0,alt:!0,class:!0,style:!0}),n=N(l),i=A(l,a[2]),this.h()},h(){_(e,"width","40"),$(e.src,s=a[0].flag)||_(e,"src",s),_(e,"alt",t=a[0].name),_(e,"class","image svelte-104kiew"),J(e,"margin-right","5px")},m(l,r){y(l,e,r),y(l,n,r),y(l,i,r)},p(l,r){r&1&&!$(e.src,s=l[0].flag)&&_(e,"src",s),r&1&&t!==(t=l[0].name)&&_(e,"alt",t),r&4&&K(i,l[2])},d(l){l&&u(e),l&&u(n),l&&u(i)}}}function je(a){let e;return{c(){e=q("Start")},l(s){e=A(s,"Start")},m(s,t){y(s,e,t)},p:Ce,d(s){s&&u(e)}}}function he(a){let e,s,t,n,i,l,r=a[14].name+"",c,d,m,w;function b(){return a[7](a[14])}return{c(){e=p("div"),s=p("img"),i=V(),l=p("div"),c=q(r),d=V(),this.h()},l(o){e=k(o,"DIV",{class:!0});var f=E(e);s=k(f,"IMG",{width:!0,src:!0,alt:!0,class:!0}),i=N(f),l=k(f,"DIV",{class:!0});var T=E(l);c=A(T,r),T.forEach(u),d=N(f),f.forEach(u),this.h()},h(){var o;_(s,"width","100"),$(s.src,t=a[14].flag)||_(s,"src",t),_(s,"alt",n=a[14].name),_(s,"class","image svelte-104kiew"),_(l,"class","overlay svelte-104kiew"),z(l,"active",((o=a[0])==null?void 0:o.code)==a[14].code),_(e,"class","container svelte-104kiew")},m(o,f){y(o,e,f),h(e,s),h(e,i),h(e,l),h(l,c),h(e,d),m||(w=W(e,"click",b),m=!0)},p(o,f){var T;a=o,f&8&&!$(s.src,t=a[14].flag)&&_(s,"src",t),f&8&&n!==(n=a[14].name)&&_(s,"alt",n),f&8&&r!==(r=a[14].name+"")&&K(c,r),f&9&&z(l,"active",((T=a[0])==null?void 0:T.code)==a[14].code)},d(o){o&&u(e),m=!1,w()}}}function me(a){let e,s=a[0].letters,t=[];for(let n=0;n<s.length;n+=1)t[n]=ve(de(a,s,n));return{c(){e=p("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=k(n,"DIV",{style:!0,class:!0});var i=E(e);for(let l=0;l<t.length;l+=1)t[l].l(i);i.forEach(u),this.h()},h(){J(e,"margin-top","1rem"),_(e,"class","svelte-104kiew")},m(n,i){y(n,e,i);for(let l=0;l<t.length;l+=1)t[l].m(e,null)},p(n,i){if(i&1){s=n[0].letters;let l;for(l=0;l<s.length;l+=1){const r=de(n,s,l);t[l]?t[l].p(r,i):(t[l]=ve(r),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=s.length}},d(n){n&&u(e),Oe(t,n)}}}function ve(a){let e,s=a[11]+"",t,n,i;function l(){return a[8](a[11])}return{c(){e=p("span"),t=q(s),this.h()},l(r){e=k(r,"SPAN",{class:!0});var c=E(e);t=A(c,s),c.forEach(u),this.h()},h(){_(e,"class","letters svelte-104kiew"),z(e,"selectedLetter",a[0].selected==a[11])},m(r,c){y(r,e,c),h(e,t),n||(i=W(e,"click",l),n=!0)},p(r,c){a=r,c&1&&s!==(s=a[11]+"")&&K(t,s),c&1&&z(e,"selectedLetter",a[0].selected==a[11])},d(r){r&&u(e),n=!1,i()}}}function Je(a){let e,s,t,n=a[3],i=[];for(let r=0;r<n.length;r+=1)i[r]=he(_e(a,n,r));let l=a[0]&&me(a);return{c(){e=p("div"),s=p("div");for(let r=0;r<i.length;r+=1)i[r].c();t=V(),l&&l.c(),this.h()},l(r){e=k(r,"DIV",{class:!0});var c=E(e);s=k(c,"DIV",{class:!0});var d=E(s);for(let m=0;m<i.length;m+=1)i[m].l(d);d.forEach(u),t=N(c),l&&l.l(c),c.forEach(u),this.h()},h(){_(s,"class","flags svelte-104kiew"),_(e,"class","modalContent svelte-104kiew")},m(r,c){y(r,e,c),h(e,s);for(let d=0;d<i.length;d+=1)i[d].m(s,null);h(e,t),l&&l.m(e,null)},p(r,c){if(c&9){n=r[3];let d;for(d=0;d<n.length;d+=1){const m=_e(r,n,d);i[d]?i[d].p(m,c):(i[d]=he(m),i[d].c(),i[d].m(s,null))}for(;d<i.length;d+=1)i[d].d(1);i.length=n.length}r[0]?l?l.p(r,c):(l=me(r),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(r){r&&u(e),Oe(i,r),l&&l.d()}}}function Ke(a){let e,s,t,n,i,l,r,c,d,m,w,b,o,f,T;function H(v,I){return v[2]==""?je:Ge}let D=H(a),O=D(a);function U(v){a[9](v)}let C={btnTitle:"Commencer",submitIsDisabled:!a[0],title:"Choisir la langue et le nombre de lettres",$$slots:{default:[Je]},$$scope:{ctx:a}};return a[1]!==void 0&&(C.isOpen=a[1]),w=new Pe({props:C}),Le.push(()=>Me(w,"isOpen",U)),w.$on("submit",a[5]),{c(){e=p("header"),s=p("a"),t=p("h1"),n=q("WordleHack!"),i=V(),l=p("div"),r=p("button"),O.c(),c=V(),d=p("hr"),m=V(),Ee(w.$$.fragment),this.h()},l(v){e=k(v,"HEADER",{class:!0});var I=E(e);s=k(I,"A",{href:!0,class:!0});var B=E(s);t=k(B,"H1",{class:!0});var M=E(t);n=A(M,"WordleHack!"),M.forEach(u),B.forEach(u),i=N(I),l=k(I,"DIV",{class:!0});var F=E(l);r=k(F,"BUTTON",{class:!0});var j=E(r);O.l(j),j.forEach(u),c=N(F),d=k(F,"HR",{style:!0,class:!0}),F.forEach(u),I.forEach(u),m=N(v),we(w.$$.fragment,v),this.h()},h(){_(t,"class","svelte-104kiew"),_(s,"href",a[4]),_(s,"class","svelte-104kiew"),_(r,"class","startBtn svelte-104kiew"),J(d,"opacity","0.4"),_(d,"class","svelte-104kiew"),_(l,"class","svelte-104kiew"),_(e,"class","svelte-104kiew")},m(v,I){y(v,e,I),h(e,s),h(s,t),h(t,n),h(e,i),h(e,l),h(l,r),O.m(r,null),h(l,c),h(l,d),y(v,m,I),Ie(w,v,I),o=!0,f||(T=W(r,"click",a[6]),f=!0)},p(v,[I]){D===(D=H(v))&&O?O.p(v,I):(O.d(1),O=D(v),O&&(O.c(),O.m(r,null)));const B={};I&1&&(B.submitIsDisabled=!v[0]),I&131081&&(B.$$scope={dirty:I,ctx:v}),!b&&I&2&&(b=!0,B.isOpen=v[1],Se(()=>b=!1)),w.$set(B)},i(v){o||(R(w.$$.fragment,v),o=!0)},o(v){G(w.$$.fragment,v),o=!1},d(v){v&&u(e),O.d(),v&&u(m),De(w,v),f=!1,T()}}}function Qe(a,e,s){let t;qe(a,We,f=>s(3,t=f));const n="wordlehack";let i,l=!1,r="";const c=`/${n}/`;function d(){window.location.href=c+`${i.code}?letter=${i.selected}`}Ae(()=>{let f=window.location.pathname.replace(n,"");f=f.replaceAll("/","");const T=new URLSearchParams(window.location.search),H=Number(T.get("letter")),D=t.find(O=>O.code==f);D&&(s(0,i=D),isNaN(H)||(s(0,i.selected=H,i),s(2,r=i.selected)))});const m=()=>s(1,l=!0),w=f=>s(0,i=f),b=f=>s(0,i.selected=f,i);function o(f){l=f,s(1,l)}return[i,l,r,t,c,d,m,w,b,o]}class Xe extends x{constructor(e){super(),ee(this,e,Qe,Ke,te,{})}}function $e(a){let e,s,t,n,i,l,r,c,d,m;e=new Xe({});const w=a[1].default,b=ge(w,a,a[0],null);return{c(){Ee(e.$$.fragment),s=V(),t=p("main"),b&&b.c(),n=V(),i=p("footer"),l=p("p"),r=q("WordleHack "),c=p("a"),d=q("Source Code"),this.h()},l(o){we(e.$$.fragment,o),s=N(o),t=k(o,"MAIN",{});var f=E(t);b&&b.l(f),f.forEach(u),n=N(o),i=k(o,"FOOTER",{});var T=E(i);l=k(T,"P",{});var H=E(l);r=A(H,"WordleHack "),c=k(H,"A",{href:!0});var D=E(c);d=A(D,"Source Code"),D.forEach(u),H.forEach(u),T.forEach(u),this.h()},h(){_(c,"href","https://github.com/Inqnuam/wordlehack")},m(o,f){Ie(e,o,f),y(o,s,f),y(o,t,f),b&&b.m(t,null),y(o,n,f),y(o,i,f),h(i,l),h(l,r),h(l,c),h(c,d),m=!0},p(o,[f]){b&&b.p&&(!m||f&1)&&be(b,w,o,o[0],m?ke(w,o[0],f,null):pe(o[0]),null)},i(o){m||(R(e.$$.fragment,o),R(b,o),m=!0)},o(o){G(e.$$.fragment,o),G(b,o),m=!1},d(o){De(e,o),o&&u(s),o&&u(t),b&&b.d(o),o&&u(n),o&&u(i)}}}function ze(a,e,s){let{$$slots:t={},$$scope:n}=e;return a.$$set=i=>{"$$scope"in i&&s(0,n=i.$$scope)},[n,t]}class et extends x{constructor(e){super(),ee(this,e,ze,$e,te,{})}}export{et as default};