(()=>{"use strict";var e,g={},_={};function t(e){var f=_[e];if(void 0!==f)return f.exports;var a=_[e]={exports:{}};return g[e](a,a.exports,t),a.exports}t.m=g,e=[],t.O=(f,a,d,c)=>{if(!a){var r=1/0;for(n=0;n<e.length;n++){for(var[a,d,c]=e[n],s=!0,b=0;b<a.length;b++)(!1&c||r>=c)&&Object.keys(t.O).every(p=>t.O[p](a[b]))?a.splice(b--,1):(s=!1,c<r&&(r=c));if(s){e.splice(n--,1);var i=d();void 0!==i&&(f=i)}}return f}c=c||0;for(var n=e.length;n>0&&e[n-1][2]>c;n--)e[n]=e[n-1];e[n]=[a,d,c]},t.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return t.d(f,{a:f}),f},(()=>{var f,e=Object.getPrototypeOf?a=>Object.getPrototypeOf(a):a=>a.__proto__;t.t=function(a,d){if(1&d&&(a=this(a)),8&d||"object"==typeof a&&a&&(4&d&&a.__esModule||16&d&&"function"==typeof a.then))return a;var c=Object.create(null);t.r(c);var n={};f=f||[null,e({}),e([]),e(e)];for(var r=2&d&&a;"object"==typeof r&&!~f.indexOf(r);r=e(r))Object.getOwnPropertyNames(r).forEach(s=>n[s]=()=>a[s]);return n.default=()=>a,t.d(c,n),c}})(),t.d=(e,f)=>{for(var a in f)t.o(f,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:f[a]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce((f,a)=>(t.f[a](e,f),f),[])),t.u=e=>(592===e?"common":e)+"."+{30:"6741a1b37a55517ad7f5",82:"7d99820c8ae76f216c96",88:"9a3d361ed7a08983f78b",118:"ab8e76b4123c6c4b06a3",146:"c23182ca2ff4395b049d",220:"41e733f702ab0630aadc",224:"181a84236c12014c94a4",258:"3a76445d99544979879d",265:"c27bdf31111c7863176e",266:"bb681fe0292bf3208ee7",322:"f5f63d8503b02a4a575e",380:"903620e5d3368b7717f7",409:"0d1e5fb03beb3de12691",420:"7798c7f3261275296b7e",423:"5c5e57383ee778e817c1",443:"587e23db7fd03370f4b2",504:"063dbd32c4bad323534b",521:"6a90e2e01c0a1caa7cf2",524:"8ab2fa02e35bdf6db0c7",536:"219dce8d35c73659a313",571:"8c79bd82509f226c7f1d",579:"a0a4ee85891f4976490d",592:"85fe3e8de776998b3f9d",628:"760afa254bf3c781b668",648:"3aa7adf7160fcd70d72c",728:"abf0205e56c0c76c7e16",739:"b09d70a7fdc38ca32c62",742:"125c17d017f3e060a56a",785:"853d4d9ef8d313080274",808:"0a2495103b388a5969d1",812:"a080b7637db865686e6d",820:"6de63480ec9d13b6e755",821:"b2bbd7bbed97c49c457a",892:"fa7166e73d2ad4eeeb8f",948:"4e9d3043d15a78ba22fe",954:"7e74e3039c86a5c6e54e",994:"506bf7a29cf93d662bab"}[e]+".js",t.miniCssF=e=>"styles.a3946dfe2ebcbf352f2a.css",t.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="ng-web-apis:";t.l=(a,d,c,n)=>{if(e[a])e[a].push(d);else{var r,s;if(void 0!==c)for(var b=document.getElementsByTagName("script"),i=0;i<b.length;i++){var o=b[i];if(o.getAttribute("src")==a||o.getAttribute("data-webpack")==f+c){r=o;break}}r||(s=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",f+c),r.src=t.tu(a)),e[a]=[d];var u=(v,p)=>{r.onerror=r.onload=null,clearTimeout(l);var m=e[a];if(delete e[a],r.parentNode&&r.parentNode.removeChild(r),m&&m.forEach(y=>y(p)),v)return v(p)},l=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),s&&document.head.appendChild(r)}}})(),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.tt=()=>(void 0===e&&(e={createScriptURL:f=>f},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),t.tu=e=>t.tt().createScriptURL(e),t.p="",(()=>{var e={666:0};t.f.j=(d,c)=>{var n=t.o(e,d)?e[d]:void 0;if(0!==n)if(n)c.push(n[2]);else if(666!=d){var r=new Promise((o,u)=>n=e[d]=[o,u]);c.push(n[2]=r);var s=t.p+t.u(d),b=new Error;t.l(s,o=>{if(t.o(e,d)&&(0!==(n=e[d])&&(e[d]=void 0),n)){var u=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;b.message="Loading chunk "+d+" failed.\n("+u+": "+l+")",b.name="ChunkLoadError",b.type=u,b.request=l,n[1](b)}},"chunk-"+d,d)}else e[d]=0},t.O.j=d=>0===e[d];var f=(d,c)=>{var b,i,[n,r,s]=c,o=0;if(n.some(l=>0!==e[l])){for(b in r)t.o(r,b)&&(t.m[b]=r[b]);if(s)var u=s(t)}for(d&&d(c);o<n.length;o++)t.o(e,i=n[o])&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},a=self.webpackChunkng_web_apis=self.webpackChunkng_web_apis||[];a.forEach(f.bind(null,0)),a.push=f.bind(null,a.push.bind(a))})()})();