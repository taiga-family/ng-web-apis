import{a as k}from"./chunk-O65QNQZ4.js";import{b as M}from"./chunk-QSSXS7I5.js";import"./chunk-B7SWJE6F.js";import"./chunk-IJNEEHWP.js";import"./chunk-JCUVDHPE.js";import{d as L,e as T}from"./chunk-54T6DL7Q.js";import{c as z}from"./chunk-EGOUBJ4M.js";import"./chunk-YFOQTUOC.js";import"./chunk-OT2XN56X.js";import"./chunk-3XYJW6UC.js";import{h as $}from"./chunk-IZGRAHGS.js";import{i as G,l as w}from"./chunk-BPV7KSE5.js";import{$b as i,Bb as _,Bc as e,Jc as C,Kc as E,Lc as P,Qc as v,Rc as A,Sb as d,Ub as u,Zb as m,_b as t,ac as c,db as S,gb as y,hc as h,jb as l,lc as b,nc as s,pa as p,wa as x,xa as f}from"./chunk-CHYCBTTF.js";import"./chunk-GAL4ENT6.js";var U=`import {WaGeolocationService} from '@ng-web-apis/geolocation';

// ...

constructor(private readonly geolocation$: WaGeolocationService) {}

getPosition() {
  geolocation$.subscribe((position) => {
     doSomethingWithPosition(position);
  });
}`;var R=`<app-component-using-position
  [position]="geolocation$ | async"
></app-component-using-position>`;function O(n,r){if(n&1&&c(0,"iframe",2),n&2){s();let o=P(0),a=s();m("src",a.getUrl(o),y)}}function j(n,r){n&1&&c(0,"tui-loader")}function B(n,r){if(n&1&&(C(0),v(1,"async"),d(2,O,1,1,"iframe",2)(3,j,1,0,"tui-loader")),n&2){let o=E(A(1,1,s().geolocation$));l(2),u(o?2:3)}}function I(n,r){if(n&1){let o=h();t(0,"button",3),b("click",function(){x(o);let D=s();return f(D.watch=!0)}),e(1," Get my position! "),i()}}var g=class n{sanitizer=p($);watch=!1;sample=U;sampleAsync=R;geolocation$=p(z);getUrl({coords:r}){let{longitude:o,latitude:a}=r;return this.sanitizer.sanitize(S.RESOURCE_URL,`//www.openstreetmap.org/export/embed.html?bbox=${o-.005},${a-.005},${o+.005},${a+.005}&marker=${a},${o}&layer=mapnik`)??""}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=_({type:n,selectors:[["geolocation-page"]],decls:42,vars:3,consts:[[3,"highlightAuto"],["appearance","secondary","tuiButton","","type","button"],["alt","url","title","geolocation",3,"src"],["appearance","secondary","tuiButton","","type","button",3,"click"]],template:function(o,a){o&1&&(t(0,"strong"),e(1,"Angular"),i(),e(2,`
does not have any built-in instruments to use
`),t(3,"strong"),e(4,"Geolocation API"),i(),e(5,`
. This is an
`),t(6,"code"),e(7,"Observable"),i(),e(8,`
based abstraction over
`),t(9,"strong"),e(10,"Geolocation API"),i(),e(11,`
to use with
`),t(12,"strong"),e(13,"Angular"),i(),t(14,"h2"),e(15,"How to use"),i(),t(16,"p"),e(17," Usage is pretty simple: just import service in your component and subscribe to it. Service extends "),t(18,"code"),e(19,"Observable"),i(),e(20," and will emit the "),t(21,"code"),e(22,"Position"),i(),e(23,` object.
`),i(),t(24,"pre"),c(25,"code",0),i(),t(26,"p"),e(27,"You also can use async pipe"),i(),t(28,"pre"),c(29,"code",0),i(),t(30,"h2"),e(31,"Single position"),i(),t(32,"p"),e(33," If you need to get position just once and stop observing user location, you can subscribe to "),t(34,"code"),e(35,"geolocation$"),i(),e(36," and use "),t(37,"code"),e(38,"take(1)"),i(),e(39,` RxJS operator. Service is cold, meaning if there are no Subscribers, it doesn't track position
`),i(),d(40,B,4,4)(41,I,2,0,"button",1)),o&2&&(l(25),m("highlightAuto",a.sample),l(4),m("highlightAuto",a.sampleAsync),l(11),u(a.watch?40:41))},dependencies:[w,T,L,M,k,G],styles:["[_nghost-%COMP%]{display:block;max-inline-size:37.5rem;margin:0 auto;line-height:1.5;font-size:1.1em}button[_ngcontent-%COMP%]{display:block;margin:0 auto}iframe[_ngcontent-%COMP%]{inline-size:100%;block-size:20rem}"],changeDetection:0})};export{g as default};
