"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[408],{2104:(j,F,s)=>{s.d(F,{Gd:()=>S,lH:()=>G,mH:()=>L});var t=s(9508),_=s(3575),y=s(5482),D=s(8222),E=s(2819),g=s(5735),C=s(1986),M=s(6556);function O(p,f){1&p&&t.nrm(0,"tui-svg",2),2&p&&t.Y8G("src",f.polymorpheusOutlet)}function x(p,f){1&p&&t.eu8(0)}const S=(0,C.gc)({iconSmall:"tuiIconChevronDown",iconLarge:"tuiIconChevronDownLarge"}),A=new g.lS((()=>{class p{constructor(v,T,W){this.dropdown=v,this.textfieldSize=T,this.options=W}get rotated(){return this.dropdown.open}get arrowIcon(){return(0,y.Wu)(this.textfieldSize.size)?this.options.iconLarge:this.options.iconSmall}}return p.\u0275fac=function(v){return new(v||p)(t.rXU(D.o2),t.rXU(E.tI),t.rXU(S))},p.\u0275cmp=t.VBU({type:p,selectors:[["tui-arrow"]],hostVars:2,hostBindings:function(v,T){2&v&&t.AVh("_rotated",T.rotated)},decls:3,vars:4,consts:[[3,"src",4,"polymorpheusOutlet"],[4,"ngIf"],[3,"src"]],template:function(v,T){1&v&&(t.DNE(0,O,1,1,"tui-svg",0),t.DNE(1,x,1,0,"ng-container",1),t.nI1(2,"async")),2&v&&(t.Y8G("polymorpheusOutlet",T.arrowIcon),t.R7$(1),t.Y8G("ngIf",t.bMT(2,2,T.dropdown.openChange)))},dependencies:[_._Y,g.OA,M.bT,M.Jj],styles:["[_nghost-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;cursor:pointer;pointer-events:none}._rotated[_nghost-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),p})());let L=(()=>{class p{}return p.\u0275fac=function(v){return new(v||p)},p.\u0275mod=t.$C({type:p}),p.\u0275inj=t.G2t({imports:[[M.MD,_.vl,g.yJ]]}),p})();const G=(0,C.gc)({interactive:A,disabled:A})},3672:(j,F,s)=>{s.d(F,{df:()=>k,Km:()=>B});var t=s(9508),_=s(5338),y=s(390),D=s(2819),E=s(4646),g=s(2051);let C=(()=>{class o{constructor({nativeElement:r}){return new t.aKT(r)}}return o.\u0275fac=function(r){return new(r||o)(t.rXU(t.aKT))},o.\u0275dir=t.FsC({type:o,selectors:[["","tuiElement",""]],exportAs:["elementRef"]}),o})(),M=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({}),o})();var O=s(8303),x=s(4082),b=s(1986),S=s(6556),w=s(5735);function p(o,l){if(1&o&&(t.qex(0),t.EFF(1),t.bVm()),2&o){const r=l.polymorpheusOutlet;t.R7$(1),t.SpI(" ",r," ")}}function f(o,l){if(1&o){const r=t.RV6();t.j41(0,"button",4,5),t.bIt("click",function(){const U=t.eBV(r).$implicit,H=t.XpG(2);return t.Njj(H.itemClick.emit(U))}),t.j41(2,"span",6),t.DNE(3,p,2,1,"ng-container",7),t.k0s()()}if(2&o){const r=l.$implicit,c=t.sdS(1),d=t.XpG(2);t.Y8G("disabled",d.disabledItemHandler(r))("value",r),t.R7$(3),t.Y8G("polymorpheusOutlet",d.itemContent)("polymorpheusOutletContext",d.getContext(r,c))}}function v(o,l){if(1&o&&(t.j41(0,"tui-data-list",2),t.DNE(1,f,4,4,"button",3),t.k0s()),2&o){const r=t.XpG();t.Y8G("emptyContent",r.emptyContent)("size",r.size),t.R7$(1),t.Y8G("ngForOf",r.items)}}function T(o,l){1&o&&t.nrm(0,"tui-loader",8)}let V=(()=>{class o{constructor(r,c){this.itemsHandlers=r,this.defaultSize=c,this.optionsQuery=O.xQ,this.disabledItemHandler=this.itemsHandlers.disabledItemHandler,this.size=this.defaultSize,this.itemClick=new t.bkB,this.itemContent=({$implicit:d})=>this.itemsHandlers.stringify(d)}getContext(r,{nativeElement:c}){return{$implicit:r,active:(0,x.X)(c)}}getOptions(r=!1){return this.optionsQuery.filter(({disabled:c})=>r||!c).map(({value:c})=>c).filter(b.Aj)}}return o.\u0275fac=function(r){t.QTQ()},o.\u0275dir=t.FsC({type:o,viewQuery:function(r,c){if(1&r&&t.GBs(_.bc,5),2&r){let d;t.mGM(d=t.lsd())&&(c.optionsQuery=d)}},inputs:{disabledItemHandler:"disabledItemHandler",emptyContent:"emptyContent",size:"size",itemContent:"itemContent"},outputs:{itemClick:"itemClick"}}),o})(),k=(()=>{class o extends V{constructor(r,c){super(r,(null==c?void 0:c.size)||"m"),this.items=[]}}return o.\u0275fac=function(r){return new(r||o)(t.rXU(g.E4),t.rXU(D.xX,8))},o.\u0275cmp=t.VBU({type:o,selectors:[["tui-data-list-wrapper",3,"labels",""]],inputs:{items:"items"},features:[t.Jv_([(0,E.WD)(o),D.ZW]),t.Vt3],decls:3,vars:2,consts:[[3,"emptyContent","size",4,"ngIf","ngIfElse"],["loading",""],[3,"emptyContent","size"],["automation-id","tui-data-list-wrapper__option","tuiElement","","tuiOption","",3,"disabled","value","click",4,"ngFor","ngForOf"],["automation-id","tui-data-list-wrapper__option","tuiElement","","tuiOption","",3,"disabled","value","click"],["elementRef","elementRef"],[1,"t-content"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["automation-id","tui-data-list-wrapper__loader",1,"t-loader"]],template:function(r,c){if(1&r&&(t.DNE(0,v,2,3,"tui-data-list",0),t.DNE(1,T,1,0,"ng-template",null,1,t.C5r)),2&r){const d=t.sdS(2);t.Y8G("ngIf",c.items)("ngIfElse",d)}},dependencies:[_.uE,_.bc,y.jT,S.bT,S.Sq,C,w.OA],styles:["[_nghost-%COMP%]{display:block}.t-content[_ngcontent-%COMP%]{flex:1}.t-loader[_ngcontent-%COMP%]{margin:.75rem 0}"],changeDetection:0}),o})(),B=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[[S.MD,w.yJ,M,_.Jk,y.Yc]]}),o})()},5408:(j,F,s)=>{s.d(F,{ET:()=>ft,ww:()=>_t,pg:()=>gt});var t=s(9508),_=s(8222),y=s(1128),D=s(2819),E=s(8336),g=s(5338),C=s(4646),M=s(9542),O=s(6590),x=s(2470),b=s(2051);let S=(()=>{class i{constructor(e,n,u,m,P){this.host=e,this.control=n,this.el=u,this.idService=m,this.itemsHandlers=P,this.disabledItemHandler=null,this.datalist=null}get id(){return this.el.nativeElement.id||this.idService.generate()}}return i.\u0275fac=function(e){return new(e||i)(t.rXU(C.w2),t.rXU(O.Er),t.rXU(t.aKT),t.rXU(x.BF),t.rXU(b.E4))},i.\u0275dir=t.FsC({type:i,viewQuery:function(e,n){if(1&e&&t.GBs(g.WX,7,t.C4Q),2&e){let u;t.mGM(u=t.lsd())&&(n.datalist=u.first)}},hostVars:1,hostBindings:function(e,n){2&e&&t.Mr5("id",n.id)},inputs:{disabledItemHandler:"disabledItemHandler"}}),i})();var w=s(3672),h=s(6556);let L=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({}),i})();var I=s(5829),G=s(9556),N=s(1986),p=s(4082),f=s(4701),v=s(2104),T=s(392),W=s(8303),V=s(3575),z=s(519),k=s(5544),B=s(5760);let o=(()=>{class i{constructor(e,n){this.el=e,this.destroy$=n}set tuiScrollIntoView(e){e&&(0,k.O)(0).pipe((0,B.Q)(this.destroy$)).subscribe(()=>{this.el.nativeElement.dispatchEvent(new CustomEvent(z.Uk,{bubbles:!0,detail:this.el.nativeElement}))})}}return i.\u0275fac=function(e){return new(e||i)(t.rXU(t.aKT),t.rXU(x.ew,2))},i.\u0275dir=t.FsC({type:i,selectors:[["","tuiScrollIntoView",""]],inputs:{tuiScrollIntoView:"tuiScrollIntoView"},features:[t.Jv_([x.ew])]}),i})(),l=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({}),i})();var r=s(5735),c=s(3454),d=s(3253),U=s(8804),H=s(3809),Q=s(6779),J=s(4661);function Z(i,a){if(1&i&&t.nrm(0,"tui-svg",3),2&i){const e=t.XpG();t.Y8G("src",e.icons.check)("tuiScrollIntoView",!0)}}function q(i,a){1&i&&t.nrm(0,"span",4)}const et=new r.lS((()=>{class i{constructor(e,n,u,m,P,X,$,R){this.icons=e,this.context=n,this.host=u,this.el=m,this.option=P,this.dataList=X,this.control=$,this.abstractControl=R,this.changeDetection$=new c.B,this.selected$=(0,d.h)(this.changeDetection$,this.control.valueChanges||U.w,(0,T.xM)(this.el.nativeElement,"animationstart")).pipe((0,H.Z)(null),(0,Q.T)(()=>this.selected),(0,J.F)())}get matcher(){return this.host.identityMatcher||W.BJ}ngOnInit(){Promise.resolve().then(()=>{var e,n;(0,N.Aj)(this.option.value)&&!this.option.disabled&&(null===(n=(e=this.host).checkOption)||void 0===n||n.call(e,this.option.value))})}ngDoCheck(){this.changeDetection$.next()}get value(){var e,n;return null!==(n=null===(e=this.abstractControl)||void 0===e?void 0:e.value)&&void 0!==n?n:this.control.value}get selected(){return(0,N.Aj)(this.option.value)&&(0,N.Aj)(this.value)&&this.matcher(this.value,this.option.value)}}return i.\u0275fac=function(e){return new(e||i)(t.rXU(C._Z),t.rXU(r.su),t.rXU(C.KN),t.rXU(t.aKT),t.rXU(g.bc),t.rXU(g.uE,8),t.rXU(I.vO),t.rXU(O.Er,8))},i.\u0275cmp=t.VBU({type:i,selectors:[["tui-select-option"]],decls:5,vars:5,consts:[[3,"ngTemplateOutlet"],["automation-id","tui-select-option__checkmark","class","t-checkmark",3,"src","tuiScrollIntoView",4,"ngIf","ngIfElse"],["dummy",""],["automation-id","tui-select-option__checkmark",1,"t-checkmark",3,"src","tuiScrollIntoView"],[1,"t-dummy"]],template:function(e,n){if(1&e&&(t.eu8(0,0),t.DNE(1,Z,1,2,"tui-svg",1),t.nI1(2,"async"),t.DNE(3,q,1,0,"ng-template",null,2,t.C5r)),2&e){const u=t.sdS(4);t.Y8G("ngTemplateOutlet",n.context.$implicit),t.R7$(1),t.Y8G("ngIf",t.bMT(2,3,n.selected$))("ngIfElse",u)}},dependencies:[V._Y,h.T3,h.bT,o,h.Jj],styles:['@keyframes _ngcontent-%COMP%_retrigger{0%{left:1px}to{left:2px}}[_nghost-%COMP%]{display:flex;flex:1;align-items:center;max-width:100%;animation:_ngcontent-%COMP%_retrigger 1s}.t-checkmark[_ngcontent-%COMP%]{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-border-start:.25rem solid transparent;border-inline-start:.25rem solid transparent}tui-data-list[data-list-size="s"][_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%], tui-data-list[data-list-size="s"]   [_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%]{-webkit-margin-end:-.375rem;margin-inline-end:-.375rem}tui-data-list[data-list-size="m"][_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%], tui-data-list[data-list-size="m"]   [_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%]{-webkit-margin-end:-.125rem;margin-inline-end:-.125rem}.t-dummy[_ngcontent-%COMP%]{width:1.75rem}'],changeDetection:0}),i})());let it=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[[h.MD,V.vl,l]]}),i})();var nt=s(7481);function at(i,a){1&i&&t.SdG(0,2,["*ngIf","isMobile"])}function rt(i,a){if(1&i&&t.DNE(0,at,1,0,"ng-content",6),2&i){const e=t.XpG();t.Y8G("ngIf",e.isMobile)}}function st(i,a){1&i&&t.eu8(0,7)}function lt(i,a){1&i&&t.nrm(0,"div",10),2&i&&t.Y8G("textContent",a.polymorpheusOutlet)}const ut=function(i,a){return{$implicit:i,active:a}};function ct(i,a){if(1&i&&(t.j41(0,"div",8),t.DNE(1,lt,1,1,"div",9),t.k0s()),2&i){const e=t.XpG();t.R7$(1),t.Y8G("polymorpheusOutlet",e.computedContent)("polymorpheusOutletContext",t.l_i(2,ut,e.value,e.computedFocused))}}function pt(i,a){1&i&&t.eu8(0)}function dt(i,a){if(1&i&&(t.j41(0,"div",11),t.DNE(1,pt,1,0,"ng-container",12),t.k0s()),2&i){const e=t.XpG();t.R7$(1),t.Y8G("polymorpheusOutlet",e.arrow)}}const mt=["*",[["input"]],[["select"]]],vt=["*","input","select"],K=(0,N.gc)({valueContent:""});let ft=(()=>{class i extends O.jc{constructor(e,n,u,m,P,X,$,R){super(e,n),this.textfieldCleaner=u,this.textfieldSize=m,this.arrowMode=P,this.itemsHandlers=X,this.options=$,this.isMobile=R,this.stringify=this.itemsHandlers.stringify,this.identityMatcher=this.itemsHandlers.identityMatcher,this.valueContent=this.options.valueContent}get size(){return this.textfieldSize.size}get arrow(){return this.interactive?this.arrowMode.interactive:this.arrowMode.disabled}get nativeFocusableElement(){var e,n;return null!==(n=null===(e=this.textfield)||void 0===e?void 0:e.nativeFocusableElement)&&void 0!==n?n:null}get focused(){return(0,p.X)(this.nativeFocusableElement)||!!this.hostedDropdown&&this.hostedDropdown.focused}get nativeDropdownMode(){return!!this.nativeSelect&&this.isMobile}get computedValue(){return null===this.value?"":this.stringify(this.value)||" "}get computedContent(){return this.valueContent||this.computedValue}onValueChange(e){this.value=e||null}onActiveZone(e){this.updateFocused(e)}onKeyDownDelete(){this.textfieldCleaner.cleaner&&(this.value=null)}handleOption(e){var n;this.focusInput(),this.value=e,null===(n=this.hostedDropdown)||void 0===n||n.updateOpen(!1)}focusInput(e=!1){this.nativeFocusableElement&&this.nativeFocusableElement.focus({preventScroll:e})}}return i.\u0275fac=function(e){return new(e||i)(t.rXU(I.vO,10),t.rXU(t.gRc),t.rXU(D.u1),t.rXU(D.tI),t.rXU(v.lH),t.rXU(b.E4),t.rXU(K),t.rXU(f.Td))},i.\u0275cmp=t.VBU({type:i,selectors:[["tui-select"]],contentQueries:function(e,n,u){if(1&e&&(t.wni(u,S,7),t.wni(u,g.WX,5,t.C4Q)),2&e){let m;t.mGM(m=t.lsd())&&(n.nativeSelect=m.first),t.mGM(m=t.lsd())&&(n.datalist=m.first)}},viewQuery:function(e,n){if(1&e&&(t.GBs(y.eD,5),t.GBs(_.o2,5)),2&e){let u;t.mGM(u=t.lsd())&&(n.textfield=u.first),t.mGM(u=t.lsd())&&(n.hostedDropdown=u.first)}},hostVars:1,hostBindings:function(e,n){2&e&&t.BMQ("data-size",n.size)},inputs:{stringify:"stringify",identityMatcher:"identityMatcher",valueContent:"valueContent"},features:[t.Jv_([(0,f.Jr)(i),(0,O.SN)(i),(0,C.PU)(i),(0,C.NW)(et)],[nt.MJ]),t.Vt3],ngContentSelectors:vt,decls:10,vars:15,consts:[[1,"t-hosted",3,"canOpen","content","tuiActiveZoneChange"],["automation-id","tui-select__textfield",1,"t-textfield",3,"disabled","editable","focusable","invalid","nativeId","pseudoActive","pseudoFocus","pseudoHover","readOnly","tuiTextfieldIcon","value","keydown.backspace.prevent","keydown.delete.prevent","valueChange"],["select",""],["ngProjectAs","select",5,["select"],4,"ngTemplateOutlet"],["automation-id","tui-select__value","ngProjectAs","tuiContent","class","t-value",5,["tuiContent"],4,"ngIf"],["icon",""],[4,"ngIf"],["ngProjectAs","select",5,["select"]],["automation-id","tui-select__value","ngProjectAs","tuiContent",5,["tuiContent"],1,"t-value"],["class","t-primitive-value",3,"textContent",4,"polymorpheusOutlet","polymorpheusOutletContext"],[1,"t-primitive-value",3,"textContent"],["appearance","icon","tuiWrapper","",1,"t-icon"],[4,"polymorpheusOutlet"]],template:function(e,n){if(1&e&&(t.NAR(mt),t.j41(0,"tui-hosted-dropdown",0),t.bIt("tuiActiveZoneChange",function(m){return n.onActiveZone(m)}),t.j41(1,"tui-primitive-textfield",1),t.bIt("keydown.backspace.prevent",function(){return n.onKeyDownDelete()})("keydown.delete.prevent",function(){return n.onKeyDownDelete()})("valueChange",function(m){return n.onValueChange(m)}),t.SdG(2),t.SdG(3,1,["ngProjectAs","input",5,["input"]]),t.DNE(4,rt,1,1,"ng-template",null,2,t.C5r),t.DNE(6,st,1,0,"ng-container",3),t.DNE(7,ct,2,5,"div",4),t.k0s(),t.DNE(8,dt,2,1,"ng-template",null,5,t.C5r),t.k0s()),2&e){const u=t.sdS(5),m=t.sdS(9);t.Y8G("canOpen",n.interactive&&!n.nativeDropdownMode)("content",n.datalist||""),t.R7$(1),t.Y8G("disabled",n.computedDisabled)("editable",!1)("focusable",n.computedFocusable)("invalid",n.computedInvalid)("nativeId",n.nativeId)("pseudoActive",n.pseudoActive)("pseudoFocus",n.computedFocused)("pseudoHover",n.pseudoHover)("readOnly",n.readOnly)("tuiTextfieldIcon",n.arrow?m:"")("value",n.computedValue),t.R7$(5),t.Y8G("ngTemplateOutlet",u),t.R7$(1),t.Y8G("ngIf",null!==n.value)}},dependencies:[_.o2,y.eD,G.Y,y.gt,D.OC,h.bT,h.T3,r.OA,E.l],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}[_nghost-%COMP%]:not(._readonly)     input:not(:disabled){cursor:pointer}._readonly[_nghost-%COMP%]     input{cursor:default}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-value[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center}.t-primitive-value[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"],changeDetection:0}),i})(),_t=(()=>{class i extends M.aX{get readOnly(){return!0}get value(){return this.host.computedValue}get stringify(){return this.host.stringify}onValueChange(e){this.host.onValueChange(e)}}return i.\u0275fac=function(){let a;return function(n){return(a||(a=t.xGo(i)))(n||i)}}(),i.\u0275dir=t.FsC({type:i,selectors:[["tui-select"]],features:[t.Jv_([(0,C.Sc)(i)]),t.Vt3]}),i})(),gt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[[h.MD,r.yJ,G.L,y.Rp,_.NT,it,v.mH,E.E,D.CN,w.Km,g.Jk,L]]}),i})()}}]);