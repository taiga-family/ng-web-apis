"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[266],{8598:(B,G,s)=>{s.d(G,{ap:()=>W});var e=s(6610),t=s(2978),C=s(811),y=s(4010),m=s(4822),b=s(5950),N=s(5173),E=s(4314);function O(v,x){if(1&v&&(t.qex(0),t.EFF(1),t.bVm()),2&v){const g=x.polymorpheusOutlet;t.R7$(1),t.SpI(" ",g," ")}}function F(v,x){if(1&v&&(t.qSk(),t.joV(),t.j41(0,"div",6),t.DNE(1,O,2,1,"ng-container",7),t.k0s()),2&v){const g=t.XpG(2);t.AVh("t-text_horizontal",g.isHorizontal),t.R7$(1),t.Y8G("polymorpheusOutlet",g.textContent)}}function I(v,x){if(1&v&&(t.j41(0,"div",2),t.qSk(),t.j41(1,"svg",3),t.nrm(2,"circle",4),t.k0s(),t.DNE(3,F,2,3,"div",5),t.k0s()),2&v){const g=t.XpG();t.AVh("t-loader_horizontal",g.isHorizontal)("t-loader_inherit-color",g.inheritColor),t.R7$(3),t.Y8G("ngIf",g.textContent)}}const k=["*"],M=(0,E.gc)({size:"m",inheritColor:!1,overlay:!1});let W=(()=>{var v;class x{constructor(){this.isIOS=(0,t.WQX)(C.mg),this.options=(0,t.WQX)(M),this.isApple=(0,y.Pr)((0,m.qW)())||this.isIOS,this.size=this.options.size,this.inheritColor=this.options.inheritColor,this.overlay=this.options.overlay,this.loading=!0}get isHorizontal(){return!(0,b.Wu)(this.size)}}return(v=x).\u0275fac=function(S){return new(S||v)},v.\u0275cmp=t.VBU({type:v,selectors:[["tui-loader"]],hostVars:3,hostBindings:function(S,f){2&S&&(t.BMQ("data-size",f.size),t.AVh("_loading",f.loading))},inputs:{size:"size",inheritColor:"inheritColor",overlay:"overlay",textContent:"textContent",loading:["showLoader","loading"]},standalone:!0,features:[t.aNF],ngContentSelectors:k,decls:3,vars:7,consts:[[1,"t-content",3,"disabled"],["class","t-loader",3,"t-loader_horizontal","t-loader_inherit-color",4,"ngIf"],[1,"t-loader"],["automation-id","tui-loader__loader","focusable","false","height","100%","width","100%",1,"t-icon"],["cx","50%","cy","50%",1,"t-circle"],["automation-id","tui-loader__text","class","t-text",3,"t-text_horizontal",4,"ngIf"],["automation-id","tui-loader__text",1,"t-text"],[4,"polymorpheusOutlet"]],template:function(S,f){1&S&&(t.NAR(),t.j41(0,"fieldset",0),t.SdG(1),t.k0s(),t.DNE(2,I,4,5,"div",1)),2&S&&(t.AVh("t-content_has-overlay",f.overlay&&f.loading)("t-content_loading",f.loading),t.Y8G("disabled",f.loading&&!f.isApple),t.BMQ("inert",f.loading||null),t.R7$(2),t.Y8G("ngIf",f.loading))},dependencies:[e.bT,N.xr],styles:["[_nghost-%COMP%]{position:relative;display:flex;min-inline-size:1.5rem;--tui-thickness: calc(var(--t-diameter) / 12)}._loading[_nghost-%COMP%]{overflow:hidden}[data-size=xs][_nghost-%COMP%]{--t-diameter: .75em}[data-size=s][_nghost-%COMP%]{--t-diameter: 1em}[data-size=m][_nghost-%COMP%]{--t-diameter: 1.5em}[data-size=l][_nghost-%COMP%]{--t-diameter: 2.5em}[data-size=xl][_nghost-%COMP%]{--t-diameter: 3.5em}[data-size=xxl][_nghost-%COMP%]{--t-diameter: 5em}.t-content[_ngcontent-%COMP%]{z-index:0;min-inline-size:100%;block-size:100%;padding:0;margin:0;border:none}.t-content_has-overlay[_ngcontent-%COMP%]{opacity:.3}.t-content_loading[_ngcontent-%COMP%]{pointer-events:none}.t-loader[_ngcontent-%COMP%]{position:relative;left:-100%;display:flex;flex-direction:column;align-items:center;justify-content:center;min-inline-size:100%;min-block-size:var(--t-diameter);flex-shrink:0;align-self:center;color:var(--tui-text-primary);stroke:var(--tui-background-accent-1);animation:tuiFadeIn var(--tui-duration);font-size:1rem}.t-loader.t-loader_horizontal[_ngcontent-%COMP%]{flex-direction:row}.t-loader.t-loader_inherit-color[_ngcontent-%COMP%]{color:inherit;stroke:currentColor}.t-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:var(--tui-font-text-s);margin-top:1rem;color:inherit;max-inline-size:100%;text-align:center;stroke-width:0}.t-text_horizontal[_ngcontent-%COMP%]{margin:0 0 0 1rem}@keyframes _ngcontent-%COMP%_tuiLoaderRotate{0%{transform:rotate(-90deg)}50%{transform:rotate(-90deg) rotate(1turn)}to{transform:rotate(-90deg) rotate(3turn)}}.t-icon[_ngcontent-%COMP%]{display:block;inline-size:var(--t-diameter);block-size:var(--t-diameter);margin:.25rem calc(var(--t-diameter) / -2);border-radius:100%;overflow:hidden;animation:_ngcontent-%COMP%_tuiLoaderRotate 4s linear infinite}@supports (-webkit-hyphens: none){.t-icon[_ngcontent-%COMP%]{overflow:visible}}@keyframes _ngcontent-%COMP%_tuiLoaderDashOffset{0%{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}50%{stroke-dashoffset:calc(.05 * calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness))))}to{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}}.t-circle[_ngcontent-%COMP%]{r:calc(var(--t-diameter) / 2 - var(--tui-thickness));stroke-dasharray:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)));fill:none;stroke:inherit;stroke-width:max(var(--tui-thickness),1.5px);animation:_ngcontent-%COMP%_tuiLoaderDashOffset 4s linear infinite}"],changeDetection:0}),x})()},6230:(B,G,s)=>{s.d(G,{W5:()=>H,df:()=>P});var e=s(6610),t=s(2978),C=s(4822);let y=(()=>{var l;class d{constructor(){return this.nativeElement=(0,C.qW)(),new t.aKT(this.nativeElement)}}return(l=d).\u0275fac=function(c){return new(c||l)},l.\u0275dir=t.FsC({type:l,selectors:[["","tuiElement",""]],exportAs:["elementRef"],standalone:!0}),d})();var m=s(5180),b=s(8598),N=s(5173),E=s(9141),O=s(7434),F=s(4314),I=s(1028);function k(l,d){if(1&l&&(t.qex(0),t.EFF(1),t.bVm()),2&l){const u=d.polymorpheusOutlet;t.R7$(1),t.SpI(" ",u," ")}}function D(l,d){if(1&l){const u=t.RV6();t.j41(0,"button",4,5),t.bIt("click",function(){const T=t.eBV(u).$implicit,L=t.XpG(2);return t.Njj(L.itemClick.emit(T))}),t.j41(2,"span",6),t.DNE(3,k,2,1,"ng-container",7),t.k0s()()}if(2&l){const u=d.$implicit,c=t.sdS(1),p=t.XpG(2);t.Y8G("disabled",p.disabledItemHandler(u))("value",u),t.R7$(3),t.Y8G("polymorpheusOutlet",p.itemContent)("polymorpheusOutletContext",p.getContext(u,c))}}function M(l,d){if(1&l&&(t.j41(0,"tui-data-list",2),t.DNE(1,D,4,4,"button",3),t.k0s()),2&l){const u=t.XpG();t.Y8G("emptyContent",u.emptyContent)("size",u.size),t.R7$(1),t.Y8G("ngForOf",u.$cast(u.items))}}function A(l,d){1&l&&t.nrm(0,"tui-loader",8)}const W=["labels",""];function v(l,d){if(1&l&&(t.qex(0),t.EFF(1),t.bVm()),2&l){const u=d.polymorpheusOutlet;t.R7$(1),t.SpI(" ",u," ")}}function x(l,d){if(1&l){const u=t.RV6();t.j41(0,"button",6,7),t.bIt("click",function(){const T=t.eBV(u).$implicit,L=t.XpG(3);return t.Njj(L.itemClick.emit(T))}),t.DNE(2,v,2,1,"ng-container",8),t.k0s()}if(2&l){const u=d.$implicit,c=t.sdS(1),p=t.XpG(3);t.Y8G("disabled",p.disabledItemHandler(u))("value",u),t.R7$(2),t.Y8G("polymorpheusOutlet",p.itemContent)("polymorpheusOutletContext",p.getContext(u,c))}}function g(l,d){if(1&l&&(t.j41(0,"tui-opt-group",4),t.DNE(1,x,3,4,"button",5),t.k0s()),2&l){const u=d.$implicit,c=d.index,p=t.XpG(2);t.Y8G("label",p.labels[c]),t.R7$(1),t.Y8G("ngForOf",u)}}function S(l,d){if(1&l&&(t.j41(0,"tui-data-list",2),t.DNE(1,g,2,2,"tui-opt-group",3),t.k0s()),2&l){const u=t.XpG();t.Y8G("emptyContent",u.emptyContent)("size",u.size),t.R7$(1),t.Y8G("ngForOf",u.items)}}function f(l,d){1&l&&t.nrm(0,"tui-loader",9)}let P=(()=>{var l;class d{constructor(){this.itemsHandlers=(0,t.WQX)(I.E4),this.optionsQuery=E.xQ,this.items=[],this.disabledItemHandler=this.itemsHandlers.disabledItemHandler,this.size=(0,m.pQ)(),this.itemClick=new t.bkB,this.itemContent=({$implicit:c})=>this.itemsHandlers.stringify(c)}getContext(c,{nativeElement:p}){return{$implicit:c,active:(0,O.X)(p)}}getOptions(c=!1){return this.optionsQuery.filter(({disabled:p})=>c||!p).map(({value:p})=>p).filter(F.Aj)}$cast(c){return c}}return(l=d).\u0275fac=function(c){return new(c||l)},l.\u0275cmp=t.VBU({type:l,selectors:[["tui-data-list-wrapper",3,"labels",""]],viewQuery:function(c,p){if(1&c&&t.GBs(m.aO,5),2&c){let T;t.mGM(T=t.lsd())&&(p.optionsQuery=T)}},inputs:{items:"items",disabledItemHandler:"disabledItemHandler",emptyContent:"emptyContent",size:"size",itemContent:"itemContent"},outputs:{itemClick:"itemClick"},standalone:!0,features:[t.Jv_([(0,m.WD)(l)]),t.aNF],decls:3,vars:2,consts:[[3,"emptyContent","size",4,"ngIf","ngIfElse"],["loading",""],[3,"emptyContent","size"],["automation-id","tui-data-list-wrapper__option","tuiElement","","tuiOption","","type","button",3,"disabled","value","click",4,"ngFor","ngForOf"],["automation-id","tui-data-list-wrapper__option","tuiElement","","tuiOption","","type","button",3,"disabled","value","click"],["elementRef","elementRef"],[1,"t-content"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["automation-id","tui-data-list-wrapper__loader",1,"t-loader"]],template:function(c,p){if(1&c&&(t.DNE(0,M,2,3,"tui-data-list",0),t.DNE(1,A,1,0,"ng-template",null,1,t.C5r)),2&c){const T=t.sdS(2);t.Y8G("ngIf",p.items)("ngIfElse",T)}},dependencies:[e.Sq,e.bT,N.xr,m.uE,m.aO,y,b.ap],styles:["[_nghost-%COMP%]{display:block}.t-content[_ngcontent-%COMP%]{flex:1;min-inline-size:0}.t-loader[_ngcontent-%COMP%]{margin:.75rem 0}"],changeDetection:0}),d})(),H=(()=>{var l;class d extends P{constructor(){super(...arguments),this.labels=[]}}return(l=d).\u0275fac=function(){let u;return function(p){return(u||(u=t.xGo(l)))(p||l)}}(),l.\u0275cmp=t.VBU({type:l,selectors:[["tui-data-list-wrapper","labels",""]],inputs:{labels:"labels"},standalone:!0,features:[t.Jv_([(0,m.WD)(l)]),t.Vt3,t.aNF],attrs:W,decls:3,vars:2,consts:[[3,"emptyContent","size",4,"ngIf","ngIfElse"],["loading",""],[3,"emptyContent","size"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],["automation-id","tui-data-list-wrapper__option","tuiElement","","tuiOption","","type","button",3,"disabled","value","click",4,"ngFor","ngForOf"],["automation-id","tui-data-list-wrapper__option","tuiElement","","tuiOption","","type","button",3,"disabled","value","click"],["elementRef","elementRef"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],[1,"t-loader"]],template:function(c,p){if(1&c&&(t.DNE(0,S,2,3,"tui-data-list",0),t.DNE(1,f,1,0,"ng-template",null,1,t.C5r)),2&c){const T=t.sdS(2);t.Y8G("ngIf",p.items)("ngIfElse",T)}},dependencies:[e.Sq,e.bT,N.xr,m.uE,m.aO,m.Ji,y,b.ap],styles:["[_nghost-%COMP%]{display:block}.t-content[_ngcontent-%COMP%]{flex:1;min-inline-size:0}.t-loader[_ngcontent-%COMP%]{margin:.75rem 0}"],changeDetection:0}),d})()},5266:(B,G,s)=>{s.d(G,{ET:()=>gt,ww:()=>ft,pg:()=>ht});var e=s(2978),t=s(4314),C=s(5180),y=s(9702),m=s(6610),b=s(6230),N=s(811),E=s(7434),O=s(3279),F=s(1028),I=s(4712),k=s(5950),D=s(4225),M=s(5173);function A(n,r){1&n&&e.nrm(0,"tui-icon",2),2&n&&e.Y8G("icon",r.polymorpheusOutlet)}function W(n,r){1&n&&e.eu8(0)}const x=(0,t.gc)({iconSmall:"@tui.chevron-down",iconLarge:"@tui.chevron-down"});let S=(()=>{var n;class r{constructor(){this.control=(0,e.WQX)(y.Er,{optional:!0}),this.textfieldSize=(0,e.WQX)(D.tI),this.options=(0,e.WQX)(x),this.directive=(0,e.WQX)(O.iE,{optional:!0})}get rotated(){var i;return(null==(i=this.directive)?void 0:i.tuiDropdownOpen)||!!this.control.pseudoOpen||!1}get small(){return!(0,k.Wu)(this.textfieldSize.size)}get arrowIcon(){return this.small?this.options.iconSmall:this.options.iconLarge}}return(n=r).\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.VBU({type:n,selectors:[["tui-arrow"]],hostAttrs:["ngSkipHydration","true"],hostVars:4,hostBindings:function(i,a){2&i&&e.AVh("_rotated",a.rotated)("_small",a.small)},standalone:!0,features:[e.aNF],decls:3,vars:4,consts:[[3,"icon",4,"polymorpheusOutlet"],[4,"ngIf"],[3,"icon"]],template:function(i,a){1&i&&(e.DNE(0,A,1,1,"tui-icon",0),e.DNE(1,W,1,0,"ng-container",1),e.nI1(2,"async")),2&i&&(e.Y8G("polymorpheusOutlet",a.arrowIcon),e.R7$(1),e.Y8G("ngIf",e.bMT(2,2,null==a.directive?null:a.directive.tuiDropdownOpenChange)))},dependencies:[m.Jj,m.bT,M.xr,I.q],styles:["[_nghost-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;cursor:pointer;pointer-events:none}._rotated[_nghost-%COMP%]{transform:rotate(180deg)}tui-icon[_ngcontent-%COMP%]{border:.25rem solid transparent}"],changeDetection:0}),r})();const f=new M.lS(S),P=(0,t.gc)({interactive:f,disabled:f});var w=s(5014),l=s(8832),d=s(9141),u=s(4976),c=s(4822),p=s(656),T=s(6104),L=s(2489),U=s(8448),Y=s(965),K=s(3527),R=s(3793),J=s(599);function Z(n,r){if(1&n&&e.nrm(0,"tui-icon",3),2&n){const o=e.XpG();e.Y8G("icon",o.icons.check)("tuiScrollIntoView",!0)}}function q(n,r){1&n&&e.nrm(0,"span",4)}const et=new M.lS((()=>{var n;class r{constructor(){this.host=(0,e.WQX)(C.KN),this.el=(0,c.qW)(),this.changeDetection$=new T.B,this.abstractControl=(0,e.WQX)(y.Er,{optional:!0}),this.control=(0,e.WQX)(l.vO),this.option=(0,e.WQX)(C.aO),this.dataList=(0,e.WQX)(C.uE,{optional:!0}),this.icons=(0,e.WQX)(p._Z),this.context=(0,M.Dm)(),this.selected$=(0,L.h)(this.changeDetection$,this.control.valueChanges||U.w,(0,u.xM)(this.el,"animationstart")).pipe((0,Y.Z)(null),(0,K.T)(()=>this.selected),(0,R.F)())}ngOnInit(){Promise.resolve().then(()=>{var i,a;(0,t.Aj)(this.option.value)&&!this.option.disabled&&(null==(a=(i=this.host).checkOption)||a.call(i,this.option.value))})}ngDoCheck(){this.changeDetection$.next()}get value(){var i;return(null==(i=this.abstractControl)?void 0:i.value)??this.control.value}get matcher(){return this.host.identityMatcher||d.BJ}get selected(){return(0,t.Aj)(this.option.value)&&(0,t.Aj)(this.value)&&this.matcher(this.value,this.option.value)}}return(n=r).\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.VBU({type:n,selectors:[["tui-select-option"]],hostAttrs:["ngSkipHydration","true"],decls:5,vars:5,consts:[[3,"ngTemplateOutlet"],["automation-id","tui-select-option__checkmark","class","t-checkmark",3,"icon","tuiScrollIntoView",4,"ngIf","ngIfElse"],["dummy",""],["automation-id","tui-select-option__checkmark",1,"t-checkmark",3,"icon","tuiScrollIntoView"],[1,"t-dummy"]],template:function(i,a){if(1&i&&(e.eu8(0,0),e.DNE(1,Z,1,2,"tui-icon",1),e.nI1(2,"async"),e.DNE(3,q,1,0,"ng-template",null,2,e.C5r)),2&i){const _=e.sdS(4);e.Y8G("ngTemplateOutlet",a.context.$implicit),e.R7$(1),e.Y8G("ngIf",e.bMT(2,3,a.selected$))("ngIfElse",_)}},dependencies:[m.bT,m.T3,J.pF,I.q,m.Jj],styles:['@keyframes _ngcontent-%COMP%_retrigger{0%{left:1px}to{left:2px}}[_nghost-%COMP%]{display:flex;flex:1;align-items:center;max-inline-size:100%;animation:_ngcontent-%COMP%_retrigger 1s}.t-checkmark[_ngcontent-%COMP%]{margin-inline-start:auto;inline-size:1.75rem;border:.25rem solid transparent;border-inline-start-width:.5rem}tui-data-list[data-size="s"][_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%], tui-data-list[data-size="s"]   [_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%]{margin-inline-end:-.375rem}tui-data-list[data-size="m"][_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%], tui-data-list[data-size="m"]   [_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%]{margin-inline-end:-.125rem}.t-dummy[_ngcontent-%COMP%]{inline-size:1.75rem}'],changeDetection:0}),r})());let nt=(()=>{var n;class r{}return(n=r).\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[m.MD,I.q]}),r})();var V=s(4198),$=s(7212);let it=(()=>{var n;class r{constructor(){var i;this.el=(0,c.qW)(),this.host=(0,e.WQX)(O.iE,{self:!0}),this.external=(0,e.WQX)(O.P0,{optional:!0}),this.$=this.host.driver.pipe((0,R.F)(),(0,$.pQ)()).subscribe(a=>{var _;return null==(_=this.external)?void 0:_.tuiDropdownOpenChange.next(a)}),this.$1=null==(i=this.external)?void 0:i.tuiDropdownOpenChange.pipe((0,R.F)(),(0,$.pQ)()).subscribe(a=>{var _;a&&(null==(_=(0,E.km)({initial:this.el,root:this.el}))||_.focus()),this.host.toggle(a)})}}return(n=r).\u0275fac=function(i){return new(i||n)},n.\u0275dir=e.FsC({type:n,selectors:[["","tuiDropdownOpenMonitor",""]],standalone:!0}),r})();var X=s(1623),ot=s(453);function st(n,r){1&n&&e.SdG(0,2,["*ngIf","isMobile"])}function rt(n,r){if(1&n&&e.DNE(0,st,1,0,"ng-content",6),2&n){const o=e.XpG();e.Y8G("ngIf",o.isMobile)}}function lt(n,r){1&n&&e.eu8(0,7)}function ut(n,r){1&n&&e.nrm(0,"div",10),2&n&&e.Y8G("textContent",r.polymorpheusOutlet)}const ct=function(n,r){return{$implicit:n,active:r}};function pt(n,r){if(1&n&&(e.j41(0,"div",8),e.DNE(1,ut,1,1,"div",9),e.k0s()),2&n){const o=e.XpG();e.R7$(1),e.Y8G("polymorpheusOutlet",o.computedContent)("polymorpheusOutletContext",e.l_i(2,ct,o.value,o.computedFocused))}}function dt(n,r){1&n&&e.eu8(0)}function _t(n,r){if(1&n&&(e.j41(0,"div",11),e.DNE(1,dt,1,0,"ng-container",12),e.k0s()),2&n){const o=e.XpG();e.R7$(1),e.Y8G("polymorpheusOutlet",o.arrow)}}const mt=["*",[["input"]],[["select"]]],vt=["*","input","select"],j=(0,t.gc)({valueContent:""});let gt=(()=>{var n;class r extends y.jc{constructor(){super(...arguments),this.itemsHandlers=(0,e.WQX)(F.E4),this.textfieldCleaner=(0,e.WQX)(D.u1),this.textfieldSize=(0,e.WQX)(D.tI),this.arrowMode=(0,e.WQX)(P),this.options=(0,e.WQX)(j),this.isMobile=(0,e.WQX)(N.Td),this.open=!1,this.stringify=this.itemsHandlers.stringify,this.identityMatcher=this.itemsHandlers.identityMatcher,this.valueContent=this.options.valueContent}get size(){return this.textfieldSize.size}get nativeFocusableElement(){var i;return(null==(i=this.textfield)?void 0:i.nativeFocusableElement)??null}get focused(){var i;return(0,E.X)(this.nativeFocusableElement)||!(null==(i=this.dropdown)||!i.tuiDropdownOpen)}get computedValue(){return null===this.value?"":this.stringify(this.value)||" "}onValueChange(i){this.value=i||null}handleOption(i){this.focusInput(),this.value=i,this.open=!1}get arrow(){return this.interactive?this.arrowMode.interactive:this.arrowMode.disabled}get nativeDropdownMode(){return!!this.nativeSelect&&this.isMobile}get computedContent(){return this.valueContent||this.computedValue}onActiveZone(i){this.updateFocused(i)}onKeyDownDelete(){this.textfieldCleaner.cleaner&&(this.value=null)}focusInput(i=!1){this.nativeFocusableElement&&this.nativeFocusableElement.focus({preventScroll:i})}}return(n=r).\u0275fac=function(){let o;return function(a){return(o||(o=e.xGo(n)))(a||n)}}(),n.\u0275cmp=e.VBU({type:n,selectors:[["tui-select"]],contentQueries:function(i,a,_){if(1&i&&(e.wni(_,y.oB,7),e.wni(_,C.WX,5,e.C4Q)),2&i){let h;e.mGM(h=e.lsd())&&(a.nativeSelect=h.first),e.mGM(h=e.lsd())&&(a.datalist=h.first)}},viewQuery:function(i,a){if(1&i&&(e.GBs(w.eD,5),e.GBs(O.iE,5)),2&i){let _;e.mGM(_=e.lsd())&&(a.textfield=_.first),e.mGM(_=e.lsd())&&(a.dropdown=_.first)}},hostAttrs:["ngSkipHydration","true"],hostVars:1,hostBindings:function(i,a){2&i&&e.BMQ("data-size",a.size)},inputs:{stringify:"stringify",identityMatcher:"identityMatcher",valueContent:"valueContent"},features:[e.Jv_([(0,X.Jr)(n),(0,y.SN)(n),(0,C.PU)(n),(0,C.NW)(et)],[ot.MJ]),e.Vt3],ngContentSelectors:vt,decls:10,vars:16,consts:[["tuiDropdownOpenMonitor","",1,"t-hosted",3,"tuiDropdown","tuiDropdownEnabled","tuiDropdownOpen","tuiDropdownOpenChange","tuiActiveZoneChange"],["automation-id","tui-select__textfield",1,"t-textfield",3,"disabled","editable","focusable","invalid","nativeId","pseudoActive","pseudoFocus","pseudoHover","readOnly","tuiTextfieldIcon","value","keydown.backspace.prevent","keydown.delete.prevent","valueChange"],["select",""],["ngProjectAs","select",5,["select"],4,"ngTemplateOutlet"],["automation-id","tui-select__value","ngProjectAs","tuiContent","class","t-value",5,["tuiContent"],4,"ngIf"],["icon",""],[4,"ngIf"],["ngProjectAs","select",5,["select"]],["automation-id","tui-select__value","ngProjectAs","tuiContent",5,["tuiContent"],1,"t-value"],["class","t-primitive-value",3,"textContent",4,"polymorpheusOutlet","polymorpheusOutletContext"],[1,"t-primitive-value",3,"textContent"],["appearance","icon","tuiWrapper","",1,"t-icon"],[4,"polymorpheusOutlet"]],template:function(i,a){if(1&i&&(e.NAR(mt),e.j41(0,"div",0),e.bIt("tuiDropdownOpenChange",function(h){return a.open=h})("tuiActiveZoneChange",function(h){return a.onActiveZone(h)}),e.j41(1,"tui-primitive-textfield",1),e.bIt("keydown.backspace.prevent",function(){return a.onKeyDownDelete()})("keydown.delete.prevent",function(){return a.onKeyDownDelete()})("valueChange",function(h){return a.onValueChange(h)}),e.SdG(2),e.SdG(3,1,["ngProjectAs","input",5,["input"]]),e.DNE(4,rt,1,1,"ng-template",null,2,e.C5r),e.DNE(6,lt,1,0,"ng-container",3),e.DNE(7,pt,2,5,"div",4),e.k0s(),e.DNE(8,_t,2,1,"ng-template",null,5,e.C5r),e.k0s()),2&i){const _=e.sdS(5),h=e.sdS(9);e.Y8G("tuiDropdown",a.datalist||"")("tuiDropdownEnabled",a.interactive&&!a.nativeDropdownMode)("tuiDropdownOpen",a.open),e.R7$(1),e.Y8G("disabled",a.computedDisabled)("editable",!1)("focusable",a.computedFocusable)("invalid",a.computedInvalid)("nativeId",a.nativeId)("pseudoActive",a.pseudoActive)("pseudoFocus",a.computedFocused)("pseudoHover",a.pseudoHover)("readOnly",a.readOnly)("tuiTextfieldIcon",a.arrow?h:"")("value",a.computedValue),e.R7$(5),e.Y8G("ngTemplateOutlet",_),e.R7$(1),e.Y8G("ngIf",null!==a.value)}},dependencies:[m.bT,m.T3,M.xr,w.eD,w.gt,V.l,D.OC,it,O.pU,O.iE],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:start}[_nghost-%COMP%]:not(._readonly)     input:not(:disabled){cursor:pointer}._readonly[_nghost-%COMP%]     input{cursor:default}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-value[_ngcontent-%COMP%]{display:flex;inline-size:100%;align-items:center}.t-primitive-value[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"],changeDetection:0}),r})(),ft=(()=>{var n;class r extends y.aX{get readOnly(){return!0}get value(){return this.host.computedValue}get stringify(){return this.host.stringify}onValueChange(i){this.host.onValueChange(i)}}return(n=r).\u0275fac=function(){let o;return function(a){return(o||(o=e.xGo(n)))(a||n)}}(),n.\u0275dir=e.FsC({type:n,selectors:[["tui-select"]],features:[e.Jv_([(0,X.Sc)(n)]),e.Vt3]}),r})(),ht=(()=>{var n;class r{}return(n=r).\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[m.MD,w.Rp,nt,S,V.E,D.CN,O.Vh,C.uE,C.aO,b.df,b.W5]}),r})()}}]);