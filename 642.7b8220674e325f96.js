"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[642],{8642:(I,C,e)=>{e.r(C),e.d(C,{default:()=>E});var i=e(1423),a=e(6556),h=e(5829),c=e(2846),g=e(5245),T=e(3774),u=e(2819),_=e(8285),t=e(9508);function o(p,m){1&p&&(t.j41(0,"div"),t.EFF(1,"I am dynamically added DOM element"),t.k0s())}function l(p,m){1&p&&(t.j41(0,"div"),t.EFF(1,"See console for logged mutations"),t.k0s())}let E=(()=>{var p;class m{constructor(){(0,i.A)(this,"toggled",!1),(0,i.A)(this,"disabled",null),(0,i.A)(this,"title","title"),(0,i.A)(this,"text","text"),(0,i.A)(this,"ignored","Ignored aria-label attribute")}toggleDOM(){this.toggled=!this.toggled}toggleAttr(){this.disabled=!this.disabled||null}log(v){console.info(v)}}return p=m,(0,i.A)(m,"\u0275fac",function(v){return new(v||p)}),(0,i.A)(m,"\u0275cmp",t.VBU({type:p,selectors:[["mutation-observer-page"]],standalone:!0,features:[t.aNF],decls:14,vars:10,consts:[["tuiGroup",""],["appearance","secondary","size","m","tuiButton","",3,"click"],["tuiGroup","","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["aria-label","title",3,"ngModel","ngModelChange"],["aria-label","text",3,"ngModel","ngModelChange"],["aria-label","ignored",3,"ngModel","ngModelChange"],["attributeFilter","title, disabled","characterData","","childList","","subtree","",1,"observer",3,"title","waMutationObserver"],[4,"ngIf","ngIfElse"],["default",""]],template:function(v,s){if(1&v&&(t.j41(0,"p",0)(1,"button",1),t.bIt("click",function(){return s.toggleDOM()}),t.EFF(2," Toggle DOM change "),t.k0s(),t.j41(3,"button",1),t.bIt("click",function(){return s.toggleAttr()}),t.EFF(4," Toggle attribute "),t.k0s()(),t.j41(5,"p",2)(6,"tui-input",3),t.bIt("ngModelChange",function(O){return s.title=O}),t.k0s(),t.j41(7,"tui-input",4),t.bIt("ngModelChange",function(O){return s.text=O}),t.k0s(),t.j41(8,"tui-input",5),t.bIt("ngModelChange",function(O){return s.ignored=O}),t.k0s()(),t.j41(9,"div",6),t.bIt("waMutationObserver",function(O){return s.log(O)}),t.EFF(10),t.DNE(11,o,2,0,"div",7),t.DNE(12,l,2,0,"ng-template",null,8,t.C5r),t.k0s()),2&v){const M=t.sdS(13);t.R7$(5),t.Y8G("tuiTextfieldLabelOutside",!0),t.R7$(1),t.Y8G("ngModel",s.title),t.R7$(1),t.Y8G("ngModel",s.text),t.R7$(1),t.Y8G("ngModel",s.ignored),t.R7$(1),t.Y8G("title",s.title),t.BMQ("aria-label",s.ignored)("disabled",s.disabled),t.R7$(1),t.SpI(' I am being observed for text changes, DOM changes and "title" and "disabled" attributes: ',s.text," "),t.R7$(1),t.Y8G("ngIf",s.toggled)("ngIfElse",M)}},dependencies:[a.MD,a.bT,h.YN,h.BC,h.vS,g.Pv,g.SM,T.s9,T.JA,_.zi,_.mp,_.Ws,c.d,u.CN,u.kf,u.G6],styles:["[_nghost-%COMP%]{display:block;max-width:600px;margin:0 auto}.observer[_ngcontent-%COMP%]{background:skyblue;border-radius:16px;padding:40px}"],changeDetection:0})),m})()},2846:(I,C,e)=>{e.d(C,{YH:()=>c,d:()=>u,xf:()=>t});var i=e(1423),a=e(9508);const h=typeof MutationObserver<"u"?MutationObserver:class{observe(){}disconnect(){}takeRecords(){return[]}},c=new a.nKC("[MUTATION_OBSERVER_INIT]: MutationObserver config");function g(o,l){return null!==o.getAttribute(l)||void 0}function T({nativeElement:o}){const l=o.getAttribute("attributeFilter");return{attributeFilter:null==l?void 0:l.split(",").map(E=>E.trim()),attributeOldValue:g(o,"attributeOldValue"),attributes:g(o,"attributes"),characterData:g(o,"characterData"),characterDataOldValue:g(o,"characterDataOldValue"),childList:g(o,"childList"),subtree:g(o,"subtree")}}let u=(()=>{var o;class l extends h{constructor(p,m,P,v,s,M,O){super(n=>{this.waMutationObserver.emit(n)}),(0,i.A)(this,"nativeElement",(0,a.WQX)(a.aKT).nativeElement),(0,i.A)(this,"config",(0,a.WQX)(c)),(0,i.A)(this,"waMutationObserver",new a.bkB),this.observe(this.nativeElement,this.config)}ngOnDestroy(){this.disconnect()}}return o=l,(0,i.A)(l,"\u0275fac",function(p){return new(p||o)(a.kS0("attributeFilter"),a.kS0("attributeOldValue"),a.kS0("attributes"),a.kS0("characterData"),a.kS0("characterDataOldValue"),a.kS0("childList"),a.kS0("subtree"))}),(0,i.A)(l,"\u0275dir",a.FsC({type:o,selectors:[["","waMutationObserver",""]],outputs:{waMutationObserver:"waMutationObserver"},exportAs:["MutationObserver"],standalone:!0,features:[a.Jv_([{provide:c,deps:[a.aKT],useFactory:T}]),a.Vt3]})),l})();var _=e(4722);let t=(()=>{var o;class l extends _.c{constructor(){const p=(0,a.WQX)(a.aKT).nativeElement,m=(0,a.WQX)(c);super(P=>{const v=new h(s=>{P.next(s)});return v.observe(p,m),()=>{v.disconnect()}})}}return o=l,(0,i.A)(l,"\u0275fac",function(p){return new(p||o)}),(0,i.A)(l,"\u0275prov",a.jDH({token:o,factory:o.\u0275fac})),l})()},3774:(I,C,e)=>{e.d(C,{JA:()=>g,s9:()=>T});var i=e(9508),a=e(2470),h=e(6556);let c=(()=>{class u{}return u.\u0275fac=function(t){return new(t||u)},u.\u0275cmp=i.VBU({type:u,selectors:[["ng-component"]],hostAttrs:[1,"tui-group-styles"],decls:0,vars:0,template:function(t,o){},styles:[".tui-group{position:relative;display:flex;isolation:isolate}.tui-group>*{flex:1 1 0;min-width:0}.tui-group>*:not(:last-child){margin-right:.125rem}.tui-group.tui-group>*:nth-child(n){border-radius:0}.tui-group_collapsed>*{z-index:1}.tui-group_collapsed>*:not(:last-child){margin-right:-1px}.tui-group_collapsed>*._readonly,.tui-group_collapsed>*._disabled,.tui-group_collapsed>*._readonly:hover,.tui-group_collapsed>*._disabled:hover{z-index:0}.tui-group_collapsed>*:hover,.tui-group_collapsed>*._hovered,.tui-group_collapsed>*._pressed{z-index:3}.tui-group_collapsed>*._invalid{z-index:2}.tui-group_collapsed>*._invalid:hover,.tui-group_collapsed>*._invalid._hovered,.tui-group_collapsed>*._invalid._pressed{z-index:4}.tui-group_collapsed>*._hosted_dropdown_focused,.tui-group_collapsed>*._focus-visible,.tui-group_collapsed>*._focused.ng-touched,.tui-group_collapsed>*._focused.ng-untouched{z-index:5}.tui-group_collapsed>*._active,.tui-group_collapsed>*[data-appearance=whiteblock-active]{z-index:6}.tui-group_collapsed>*._focus-visible._focused,.tui-group_collapsed>*._focus-visible._active,.tui-group_collapsed>*._focus-visible[data-appearance=whiteblock-active]{z-index:7}.tui-group_orientation_vertical{display:inline-flex;flex-direction:column}.tui-group_orientation_vertical>*{min-height:auto;flex:0 0 auto}.tui-group_orientation_vertical>*:not(:last-child){margin-right:0;margin-bottom:.125rem}.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin-right:0;margin-bottom:-1px}.tui-group_rounded.tui-group_orientation_horizontal>*:first-child{border-top-left-radius:var(--tui-radius-m);border-bottom-left-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_horizontal>*:last-child{border-top-right-radius:var(--tui-radius-m);border-bottom-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_horizontal.tui-group_radius_large>*:first-child{border-top-left-radius:var(--tui-radius-l);border-bottom-left-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_horizontal.tui-group_radius_large>*:last-child{border-top-right-radius:var(--tui-radius-l);border-bottom-right-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_vertical>*:first-child{border-top-left-radius:var(--tui-radius-m);border-top-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_vertical>*:last-child{border-bottom-left-radius:var(--tui-radius-m);border-bottom-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_vertical.tui-group_radius_large>*:first-child{border-top-left-radius:var(--tui-radius-l);border-top-right-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_vertical.tui-group_radius_large>*:last-child{border-bottom-left-radius:var(--tui-radius-l);border-bottom-right-radius:var(--tui-radius-l)}@media screen and (max-width: 47.9625em){.tui-group_rounded.tui-group_adaptive.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_horizontal>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:last-child:not(:first-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_horizontal>*:last-child:not(:first-child){border-radius:var(--tui-radius-m)}}@media screen and (max-width: 47.9625em){.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:last-child:not(:first-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:last-child:not(:first-child){border-radius:var(--tui-radius-l)}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_orientation_vertical{width:100%}.tui-group_adaptive.tui-group_orientation_vertical>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_vertical>*:not(:last-child){margin-bottom:1rem}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin-bottom:-1px}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_orientation_horizontal{flex-direction:column;width:100%}.tui-group_adaptive.tui-group_orientation_horizontal>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_horizontal>*:not(:last-child){margin-right:0;margin-bottom:1rem}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:not(:last-child){margin-right:0;margin-bottom:-1px}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-l)}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-l) var(--tui-radius-l) 0 0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-l) var(--tui-radius-l)}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-l)}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-l) var(--tui-radius-l) 0 0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-l) var(--tui-radius-l)}}.tui-group__auto-width-item{min-width:auto;flex:0 0 auto}.tui-group .tui-group__inherit-item{border-radius:inherit}\n"],encapsulation:2,changeDetection:0}),u})(),g=(()=>{class u{constructor(t){this.orientation="horizontal",this.adaptive=!1,this.collapsed=!1,this.rounded=!0,this.size="m",t.addComponent(c)}get orientationHorizontal(){return"horizontal"===this.orientation}get orientationVertical(){return"vertical"===this.orientation}get sizeLarge(){return"l"===this.size}}return u.\u0275fac=function(t){return new(t||u)(i.rXU(a.vA))},u.\u0275dir=i.FsC({type:u,selectors:[["","tuiGroup","",5,"ng-container"]],hostAttrs:["role","group",1,"tui-group"],hostVars:12,hostBindings:function(t,o){2&t&&i.AVh("tui-group_adaptive",o.adaptive)("tui-group_collapsed",o.collapsed)("tui-group_rounded",o.rounded)("tui-group_orientation_horizontal",o.orientationHorizontal)("tui-group_orientation_vertical",o.orientationVertical)("tui-group_radius_large",o.sizeLarge)},inputs:{orientation:"orientation",adaptive:"adaptive",collapsed:"collapsed",rounded:"rounded",size:"size"}}),u})(),T=(()=>{class u{}return u.\u0275fac=function(t){return new(t||u)},u.\u0275mod=i.$C({type:u}),u.\u0275inj=i.G2t({imports:[[h.MD]]}),u})()},8285:(I,C,e)=>{e.d(C,{Ws:()=>M,mp:()=>s,zi:()=>O});var i=e(9508),a=e(5829),h=e(9556),c=e(6590),g=e(4082),T=e(4701),u=e(8222),_=e(1128),t=e(2819),o=e(5338),l=e(4646),E=e(9542),p=e(7481),m=e(6556);const P=["*",[["input"]]],v=["*","input"];let s=(()=>{class n extends c.Er{constructor(r,d,b,D){super(r,d,D),this.textfieldSize=b,this.open=!1}get size(){return this.textfieldSize.size}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){return(0,g.X)(this.nativeFocusableElement)||!!this.hostedDropdown&&this.hostedDropdown.focused}get canOpen(){return this.interactive&&!!this.datalist}onValueChange(r){this.value=r,this.open=!0}onActiveZone(r){this.updateFocused(r)}handleOption(r){this.setNativeValue(String(r)),this.focusInput(),this.value=String(r),this.open=!1}getFallbackValue(){return""}focusInput(r=!1){this.nativeFocusableElement&&this.nativeFocusableElement.focus({preventScroll:r})}setNativeValue(r){this.nativeFocusableElement&&(this.nativeFocusableElement.value=r)}}return n.\u0275fac=function(r){return new(r||n)(i.rXU(a.vO,10),i.rXU(i.gRc),i.rXU(t.tI),i.rXU(c.bu,8))},n.\u0275cmp=i.VBU({type:n,selectors:[["tui-input"]],contentQueries:function(r,d,b){if(1&r&&i.wni(b,o.WX,5,i.C4Q),2&r){let D;i.mGM(D=i.lsd())&&(d.datalist=D.first)}},viewQuery:function(r,d){if(1&r&&(i.GBs(u.o2,5),i.GBs(_.eD,5)),2&r){let b;i.mGM(b=i.lsd())&&(d.hostedDropdown=b.first),i.mGM(b=i.lsd())&&(d.textfield=b.first)}},hostVars:1,hostBindings:function(r,d){2&r&&i.BMQ("data-size",d.size)},features:[i.Jv_([p.PN,(0,T.Jr)(n),(0,l.PU)(n),(0,c.SN)(n)],[p.MJ]),i.Vt3],ngContentSelectors:v,decls:4,vars:11,consts:[[1,"t-hosted",3,"canOpen","content","open","openChange","tuiActiveZoneChange"],["automation-id","tui-input__textfield",1,"t-textfield",3,"disabled","focusable","invalid","nativeId","pseudoFocus","pseudoHover","readOnly","value","valueChange"]],template:function(r,d){1&r&&(i.NAR(P),i.j41(0,"tui-hosted-dropdown",0),i.bIt("openChange",function(D){return d.open=D})("tuiActiveZoneChange",function(D){return d.onActiveZone(D)}),i.j41(1,"tui-primitive-textfield",1),i.bIt("valueChange",function(D){return d.onValueChange(D)}),i.SdG(2),i.SdG(3,1,["ngProjectAs","input",5,["input"]]),i.k0s()()),2&r&&(i.Y8G("canOpen",d.canOpen)("content",d.datalist||"")("open",d.open),i.R7$(1),i.Y8G("disabled",d.computedDisabled)("focusable",d.computedFocusable)("invalid",d.computedInvalid)("nativeId",d.nativeId)("pseudoFocus",d.computedFocused)("pseudoHover",d.pseudoHover)("readOnly",d.readOnly)("value",d.value))},dependencies:[u.o2,_.eD,h.Y,_.gt],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}._disabled[_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],changeDetection:0}),n})(),M=(()=>{class n extends E.aX{onValueChange(r){this.host.onValueChange(r)}}return n.\u0275fac=function(){let f;return function(d){return(f||(f=i.xGo(n)))(d||n)}}(),n.\u0275dir=i.FsC({type:n,selectors:[["tui-input"]],features:[i.Jv_([(0,l.Sc)(n)]),i.Vt3]}),n})(),O=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=i.$C({type:n}),n.\u0275inj=i.G2t({imports:[[m.MD,h.L,_.Rp,u.NT]]}),n})()}}]);