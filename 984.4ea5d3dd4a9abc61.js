"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[984],{1984:(y,d,i)=>{i.r(d),i.d(d,{default:()=>k});var c=i(1423),e=i(6610),t=i(2978),h=i(6098),m=i(4421),g=i(4135),p=i(8598),_=i(9020);function P(s,o){if(1&s){const r=t.RV6();t.j41(0,"button",3),t.bIt("click",function(){t.eBV(r);const a=t.XpG();return t.Njj(a.watch=!0)}),t.EFF(1," Get my position!\n"),t.k0s()}}function E(s,o){if(1&s&&t.nrm(0,"iframe",6),2&s){const r=o.ngIf,n=t.XpG(2);t.Y8G("src",n.getUrl(r),t.f$h)}}function O(s,o){1&s&&t.nrm(0,"tui-loader")}function u(s,o){if(1&s&&(t.qex(0),t.DNE(1,E,1,1,"iframe",4),t.nI1(2,"async"),t.DNE(3,O,1,0,"ng-template",null,5,t.C5r),t.bVm()),2&s){const r=t.sdS(4),n=t.XpG();t.R7$(1),t.Y8G("ngIf",t.bMT(2,2,n.geolocation$))("ngIfElse",r)}}const k=(()=>{var s;class o{constructor(){(0,c.A)(this,"sanitizer",(0,t.WQX)(h.up)),(0,c.A)(this,"watch",!1),(0,c.A)(this,"sample","import {GeolocationService} from '@ng-web-apis/geolocation';\n\n// ...\n\nconstructor(private readonly geolocation$: GeolocationService) {}\n\ngetPosition() {\n  geolocation$.subscribe((position) => {\n     doSomethingWithPosition(position);\n  });\n}"),(0,c.A)(this,"sampleAsync",'<app-component-using-position\n  [position]="geolocation$ | async"\n></app-component-using-position>'),(0,c.A)(this,"geolocation$",(0,t.WQX)(m.Ou))}getUrl({coords:n}){const{longitude:a,latitude:l}=n;return this.sanitizer.sanitize(t.WPN.RESOURCE_URL,`//www.openstreetmap.org/export/embed.html?bbox=${a-.005},${l-.005},${a+.005},${l+.005}&marker=${l},${a}&layer=mapnik`)??""}}return s=o,(0,c.A)(o,"\u0275fac",function(n){return new(n||s)}),(0,c.A)(o,"\u0275cmp",t.VBU({type:s,selectors:[["geolocation-page"]],standalone:!0,features:[t.aNF],decls:42,vars:4,consts:[[3,"highlight"],["appearance","secondary","tuiButton","","type","button",3,"click",4,"ngIf"],[4,"ngIf"],["appearance","secondary","tuiButton","","type","button",3,"click"],["alt","url","title","geolocation",3,"src",4,"ngIf","ngIfElse"],["loading",""],["alt","url","title","geolocation",3,"src"]],template:function(n,a){1&n&&(t.j41(0,"strong"),t.EFF(1,"Angular"),t.k0s(),t.EFF(2,"\ndoes not have any built-in instruments to use\n"),t.j41(3,"strong"),t.EFF(4,"Geolocation API"),t.k0s(),t.EFF(5,"\n. This is an\n"),t.j41(6,"code"),t.EFF(7,"Observable"),t.k0s(),t.EFF(8,"\nbased abstraction over\n"),t.j41(9,"strong"),t.EFF(10,"Geolocation API"),t.k0s(),t.EFF(11,"\nto use with\n"),t.j41(12,"strong"),t.EFF(13,"Angular"),t.k0s(),t.j41(14,"h2"),t.EFF(15,"How to use"),t.k0s(),t.j41(16,"p"),t.EFF(17," Usage is pretty simple: just import service in your component and subscribe to it. Service extends "),t.j41(18,"code"),t.EFF(19,"Observable"),t.k0s(),t.EFF(20," and will emit the "),t.j41(21,"code"),t.EFF(22,"Position"),t.k0s(),t.EFF(23," object.\n"),t.k0s(),t.j41(24,"pre"),t.nrm(25,"code",0),t.k0s(),t.j41(26,"p"),t.EFF(27,"You also can use async pipe"),t.k0s(),t.j41(28,"pre"),t.nrm(29,"code",0),t.k0s(),t.j41(30,"h2"),t.EFF(31,"Single position"),t.k0s(),t.j41(32,"p"),t.EFF(33," If you need to get position just once and stop observing user location, you can subscribe to "),t.j41(34,"code"),t.EFF(35,"geolocation$"),t.k0s(),t.EFF(36," and use "),t.j41(37,"code"),t.EFF(38,"take(1)"),t.k0s(),t.EFF(39," RxJS operator. Service is cold, meaning if there are no Subscribers, it doesn't track position\n"),t.k0s(),t.DNE(40,P,2,0,"button",1),t.DNE(41,u,5,4,"ng-container",2)),2&n&&(t.R7$(25),t.Y8G("highlight",a.sample),t.R7$(4),t.Y8G("highlight",a.sampleAsync),t.R7$(11),t.Y8G("ngIf",!a.watch),t.R7$(1),t.Y8G("ngIf",a.watch))},dependencies:[e.MD,e.bT,e.Jj,_.fw,_.f4,g.p,p.ap],styles:["[_nghost-%COMP%]{display:block;max-inline-size:37.5rem;margin:0 auto;line-height:1.5;font-size:1.1em}button[_ngcontent-%COMP%]{display:block;margin:0 auto}iframe[_ngcontent-%COMP%]{inline-size:100%;block-size:20rem}"],changeDetection:0})),o})()},8598:(y,d,i)=>{i.d(d,{ap:()=>s});var c=i(6610),e=i(2978),t=i(811),h=i(4010),m=i(4822),g=i(7434),p=i(5950),_=i(5173),f=i(4314);function v(o,r){if(1&o&&(e.qex(0),e.EFF(1),e.bVm()),2&o){const n=r.polymorpheusOutlet;e.R7$(1),e.SpI(" ",n," ")}}function P(o,r){if(1&o&&(e.qSk(),e.joV(),e.j41(0,"div",6),e.DNE(1,v,2,1,"ng-container",7),e.k0s()),2&o){const n=e.XpG(2);e.AVh("t-text_horizontal",n.isHorizontal),e.R7$(1),e.Y8G("polymorpheusOutlet",n.textContent)}}function E(o,r){if(1&o&&(e.j41(0,"div",2),e.qSk(),e.j41(1,"svg",3),e.nrm(2,"circle",4),e.k0s(),e.DNE(3,P,2,3,"div",5),e.k0s()),2&o){const n=e.XpG();e.AVh("t-loader_horizontal",n.isHorizontal)("t-loader_inherit-color",n.inheritColor),e.R7$(3),e.Y8G("ngIf",n.hasText)}}const O=["*"],F=(0,f.gc)({size:"m",inheritColor:!1,overlay:!1});let s=(()=>{var o;class r{constructor(){this.doc=(0,e.WQX)(c.qQ),this.el=(0,m.qW)(),this.isIOS=(0,e.WQX)(t.mg),this.options=(0,e.WQX)(F),this.loading=!0,this.isApple=(0,h.Pr)(this.el)||this.isIOS,this.size=this.options.size,this.inheritColor=this.options.inheritColor,this.overlay=this.options.overlay}set showLoader(a){a&&this.focused&&(0,g.SI)(this.doc),this.loading=a}get hasOverlay(){return this.overlay&&this.loading}get hasText(){return!!this.textContent}get isHorizontal(){return!(0,p.Wu)(this.size)}get focused(){return(0,g.Ij)(this.el)}}return(o=r).\u0275fac=function(a){return new(a||o)},o.\u0275cmp=e.VBU({type:o,selectors:[["tui-loader"]],hostVars:3,hostBindings:function(a,l){2&a&&(e.BMQ("data-size",l.size),e.AVh("_loading",l.loading))},inputs:{size:"size",inheritColor:"inheritColor",overlay:"overlay",textContent:"textContent",showLoader:"showLoader"},standalone:!0,features:[e.aNF],ngContentSelectors:O,decls:3,vars:7,consts:[[1,"t-content",3,"disabled"],["class","t-loader",3,"t-loader_horizontal","t-loader_inherit-color",4,"ngIf"],[1,"t-loader"],["automation-id","tui-loader__loader","focusable","false","height","100%","width","100%",1,"t-icon"],["cx","50%","cy","50%",1,"t-circle"],["automation-id","tui-loader__text","class","t-text",3,"t-text_horizontal",4,"ngIf"],["automation-id","tui-loader__text",1,"t-text"],[4,"polymorpheusOutlet"]],template:function(a,l){1&a&&(e.NAR(),e.j41(0,"fieldset",0),e.SdG(1),e.k0s(),e.DNE(2,E,4,5,"div",1)),2&a&&(e.AVh("t-content_has-overlay",l.hasOverlay)("t-content_loading",l.loading),e.Y8G("disabled",l.loading&&!l.isApple),e.BMQ("inert",l.loading||null),e.R7$(2),e.Y8G("ngIf",l.loading))},dependencies:[c.bT,_.xr],styles:["[_nghost-%COMP%]{position:relative;display:flex;min-inline-size:1.5rem;--tui-thickness: calc(var(--t-diameter) / 12)}._loading[_nghost-%COMP%]{overflow:hidden}[data-size=xs][_nghost-%COMP%]{--t-diameter: .75em}[data-size=s][_nghost-%COMP%]{--t-diameter: 1em}[data-size=m][_nghost-%COMP%]{--t-diameter: 1.5em}[data-size=l][_nghost-%COMP%]{--t-diameter: 2.5em}[data-size=xl][_nghost-%COMP%]{--t-diameter: 3.5em}[data-size=xxl][_nghost-%COMP%]{--t-diameter: 5em}.t-content[_ngcontent-%COMP%]{z-index:0;min-inline-size:100%;block-size:100%;padding:0;margin:0;border:none}.t-content_has-overlay[_ngcontent-%COMP%]{opacity:.3}.t-content_loading[_ngcontent-%COMP%]{pointer-events:none}.t-loader[_ngcontent-%COMP%]{position:relative;left:-100%;display:flex;flex-direction:column;align-items:center;justify-content:center;min-inline-size:100%;min-block-size:var(--t-diameter);flex-shrink:0;align-self:center;color:var(--tui-text-primary);stroke:var(--tui-background-accent-1);animation:tuiFadeIn var(--tui-duration);font-size:1rem}.t-loader.t-loader_horizontal[_ngcontent-%COMP%]{flex-direction:row}.t-loader.t-loader_inherit-color[_ngcontent-%COMP%]{color:inherit;stroke:currentColor}.t-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:var(--tui-font-text-s);margin-top:1rem;color:inherit;max-inline-size:100%;text-align:center;stroke-width:0}.t-text_horizontal[_ngcontent-%COMP%]{margin:0 0 0 1rem}@keyframes _ngcontent-%COMP%_tuiLoaderRotate{0%{transform:rotate(-90deg)}50%{transform:rotate(-90deg) rotate(1turn)}to{transform:rotate(-90deg) rotate(3turn)}}.t-icon[_ngcontent-%COMP%]{display:block;inline-size:var(--t-diameter);block-size:var(--t-diameter);margin:.25rem calc(var(--t-diameter) / -2);border-radius:100%;overflow:hidden;animation:_ngcontent-%COMP%_tuiLoaderRotate 4s linear infinite}@supports (-webkit-hyphens: none){.t-icon[_ngcontent-%COMP%]{overflow:visible}}@keyframes _ngcontent-%COMP%_tuiLoaderDashOffset{0%{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}50%{stroke-dashoffset:calc(.05 * calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness))))}to{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}}.t-circle[_ngcontent-%COMP%]{r:calc(var(--t-diameter) / 2 - var(--tui-thickness));stroke-dasharray:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)));fill:none;stroke:inherit;stroke-width:max(var(--tui-thickness),1.5px);animation:_ngcontent-%COMP%_tuiLoaderDashOffset 4s linear infinite}"],changeDetection:0}),r})()}}]);