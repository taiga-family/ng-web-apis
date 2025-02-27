"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[179],{8179:(U,C,r)=>{r.r(C),r.d(C,{default:()=>ae});var s=r(1423),f=r(7270),u=r(6610),t=r(2978),p=r(8832),h=r(7675);let v=(()=>{var e;class i{constructor(){(0,s.A)(this,"speechSynthesisRef",(0,t.WQX)(h.o4)),(0,s.A)(this,"paused",!1),(0,s.A)(this,"onerror",new t.bkB),(0,s.A)(this,"onend",new t.bkB),(0,s.A)(this,"onmark",new t.bkB),(0,s.A)(this,"onboundary",new t.bkB)}set waTextToSpeech(a){this.speechSynthesisRef.cancel(),this.speechSynthesisRef.pause(),a.onerror=n=>this.onerror.emit(n),a.onend=n=>this.onend.emit(n),a.onmark=n=>this.onmark.emit(n),a.onboundary=n=>this.onboundary.emit(n),this.speechSynthesisRef.speak(a)}ngOnChanges(){this.paused?this.speechSynthesisRef.pause():this.speechSynthesisRef.resume()}}return e=i,(0,s.A)(i,"\u0275fac",function(a){return new(a||e)}),(0,s.A)(i,"\u0275dir",t.FsC({type:e,selectors:[["","waTextToSpeech",""]],inputs:{paused:["waTextToSpeechPaused","paused"],waTextToSpeech:"waTextToSpeech"},outputs:{onerror:"waTextToSpeechError",onend:"waTextToSpeechEnd",onmark:"waTextToSpeechMark",onboundary:"waTextToSpeechBoundary"},standalone:!0,features:[t.OA$]})),i})(),b=(()=>{var e;class i{transform(a,{lang:n="",pitch:l=1,rate:c=1,volume:m=1,voice:_=null}={}){const d=new SpeechSynthesisUtterance(a);return d.lang=n,d.pitch=l,d.rate=c,d.volume=m,d.voice=_,d}}return e=i,(0,s.A)(i,"\u0275fac",function(a){return new(a||e)}),(0,s.A)(i,"\u0275pipe",t.EJ8({name:"waUtterance",type:e,pure:!0,standalone:!0})),i})();var L=r(5045),K=r(6106),J=r(1753),x=r(3527);function O(e){const i=e.toLowerCase().trim();return o=>!!o.find(a=>{var n;return a.isFinal&&(null==(n=a[0])?void 0:n.transcript.toLowerCase().trim())===i})}var q=r(7049),et=r(9406);const nt=new t.nKC("[WA_SPEECH_RECOGNITION_MAX_ALTERNATIVES]",{factory:()=>1});let ot=(()=>{var e;class i extends et.c{constructor(){super(a=>{if(!this.classRef)return a.error(new Error("SpeechRecognition is not supported")),()=>{};const n=new this.classRef;return n.maxAlternatives=this.maxAlternatives,n.lang=this.lang??"",n.interimResults=!0,n.onerror=l=>a.error(l),n.onend=()=>a.complete(),n.onresult=({results:l})=>this.ngZone.run(()=>a.next(Array.from({length:l.length},(c,m)=>l[m]))),n.start(),()=>n.abort()}),(0,s.A)(this,"classRef",(0,t.WQX)(h.sl)),(0,s.A)(this,"lang",(0,t.WQX)(t.xe9,{optional:!0})),(0,s.A)(this,"maxAlternatives",(0,t.WQX)(nt)),(0,s.A)(this,"ngZone",(0,t.WQX)(t.SKi))}}return e=i,(0,s.A)(i,"\u0275fac",function(a){return new(a||e)}),(0,s.A)(i,"\u0275prov",t.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})),i})();new t.nKC("[WA_SPEECH_RECOGNITION_SUPPORT]",{factory:()=>!!(0,t.WQX)(h.PI)}),new t.nKC("[WA_SPEECH_SYNTHESIS_SUPPORT]",{factory:()=>!!(0,t.WQX)(h.o4)});var it=r(8129),at=r(965);const rt=new t.nKC("[WA_SPEECH_SYNTHESIS_VOICES]",{factory:()=>{const e=(0,t.WQX)(h.o4);return(0,it.R)(e,"voiceschanged").pipe((0,at.Z)(null),(0,x.T)(()=>e.getVoices()))}});var T=r(4314),st=r(4135),lt=r(5639),y=r(8419),ct=r(811),ut=r(7434),dt=r(2734),pt=r(9131),E=r(9702),I=r(5014),F=r(4198),N=r(4225),D=r(1623),ht=r(453),G=r(599),P=r(6550),M=r(5173),W=r(4712),gt=r(8395);const _t=["focusableElement"];function mt(e,i){1&e&&t.eu8(0)}function ft(e,i){if(1&e&&(t.j41(0,"div",19),t.EFF(1),t.k0s()),2&e){const o=t.XpG();t.R7$(1),t.Lme(" ",o.value.length,"/",o.maxLength," ")}}function Ct(e,i){if(1&e&&(t.j41(0,"div",20),t.SdG(1,1),t.k0s()),2&e){const o=t.XpG();t.AVh("t-placeholder_raised",o.placeholderRaised)}}function vt(e,i){1&e&&t.nrm(0,"tui-icon",23),2&e&&t.Y8G("icon",i.polymorpheusOutlet.toString())}const z=function(e){return{$implicit:e}};function bt(e,i){if(1&e&&(t.j41(0,"div",21),t.DNE(1,vt,1,1,"tui-icon",22),t.k0s()),2&e){const o=t.XpG();t.R7$(1),t.Y8G("polymorpheusOutlet",o.iconLeftContent)("polymorpheusOutletContext",t.eq3(2,z,o.size))}}function xt(e,i){1&e&&t.nrm(0,"tui-icon",25),2&e&&t.Y8G("icon",i.polymorpheusOutlet)}function Ot(e,i){if(1&e&&(t.qex(0),t.DNE(1,xt,1,1,"tui-icon",24),t.bVm()),2&e){const o=t.XpG();t.R7$(1),t.Y8G("polymorpheusOutlet",o.controller.customContent)}}function Tt(e,i){if(1&e){const o=t.RV6();t.j41(0,"tui-icon",27),t.bIt("click.stop",function(){t.eBV(o);const n=t.XpG(2);return t.Njj(n.onValueChange(""))}),t.k0s()}2&e&&t.Y8G("icon",i.polymorpheusOutlet.toString())}function Pt(e,i){if(1&e&&(t.qex(0),t.DNE(1,Tt,1,1,"tui-icon",26),t.bVm()),2&e){const o=t.XpG();t.R7$(1),t.Y8G("polymorpheusOutlet",o.iconCleaner)("polymorpheusOutletContext",t.eq3(2,z,o.size))}}function Mt(e,i){if(1&e&&t.nrm(0,"tui-tooltip",28),2&e){const o=t.XpG();t.Y8G("content",null==o.hintOptions?null:o.hintOptions.content)("describeId",o.id)}}function St(e,i){1&e&&t.nrm(0,"tui-icon",23),2&e&&t.Y8G("icon",i.polymorpheusOutlet.toString())}function yt(e,i){if(1&e&&(t.j41(0,"div",29),t.DNE(1,St,1,1,"tui-icon",22),t.k0s()),2&e){const o=t.XpG();t.R7$(1),t.Y8G("polymorpheusOutlet",o.iconContent)("polymorpheusOutletContext",t.eq3(2,z,o.size))}}const Et=[[["textarea"]],"*"],It=function(){return{standalone:!0}},zt=["textarea","*"];let Rt=(()=>{var e;class i extends E.Er{constructor(){super(...arguments),this.options=(0,t.WQX)(dt.KB),this.isIOS=(0,t.WQX)(ct.mg),this.controller=(0,t.WQX)(N.xX),this.hintOptions=(0,t.WQX)(pt.bk,{optional:!0}),this.rows=20,this.maxLength=null,this.expandable=!1}get nativeFocusableElement(){var a,n;return this.computedDisabled?null:(null==(a=this.textfield)?void 0:a.nativeElement)||(null==(n=this.focusableElement)?void 0:n.nativeElement)||null}get focused(){return(0,ut.X)(this.nativeFocusableElement)}get computeMaxHeight(){return this.expandable?this.rows*this.lineHeight:null}onValueChange(a){this.value=a}get labelOutside(){return"table"===this.options.appearance()||this.controller.labelOutside}get size(){return this.controller.size}get borderStart(){return this.iconLeftContent?I.HW[this.size]:0}get borderEnd(){return(0,ht.f3)(!!this.iconContent,this.hasCleaner,this.hasTooltip,this.hasCustomContent,this.size)}get hasTooltip(){var a;return!(null==(a=this.hintOptions)||!a.content)&&(this.controller.options.hintOnDisabled||!this.computedDisabled)}get hasValue(){return""!==this.value}get hasCounter(){return!!this.maxLength&&this.interactive}get appearance(){return"table"===this.options.appearance()?"table":this.controller.appearance}get hasCleaner(){return this.controller.cleaner&&this.hasValue&&this.interactive}get hasPlaceholder(){return this.placeholderRaisable||!this.hasValue&&!this.hasExampleText}get hasCustomContent(){return!!this.controller.customContent}get iconLeftContent(){return this.controller.iconStart}get iconContent(){return this.controller.icon}get iconCleaner(){return this.controller.options.iconCleaner}get hasExampleText(){var a;return!(null==(a=this.textfield)||!a.nativeElement.placeholder)&&this.focused&&!this.hasValue&&!this.readOnly}get placeholderRaised(){return this.placeholderRaisable&&(this.computedFocused&&!this.readOnly||this.hasValue)}get fittedContent(){return this.value.slice(0,this.maxLength||1/0)}get extraContent(){return this.value.slice(this.maxLength||1/0)}onFocused(a){this.updateFocused(a)}onMouseDown(a){a.target!==this.nativeFocusableElement&&(a.preventDefault(),this.nativeFocusableElement&&this.nativeFocusableElement.focus())}getFallbackValue(){return""}get lineHeight(){return"m"===this.controller.size?20:24}get placeholderRaisable(){return"s"!==this.size&&!this.controller.labelOutside}}return(e=i).\u0275fac=function(){let o;return function(n){return(o||(o=t.xGo(e)))(n||e)}}(),e.\u0275cmp=t.VBU({type:e,selectors:[["tui-textarea"]],contentQueries:function(a,n,l){if(1&a&&t.wni(l,I.Bw,5,t.aKT),2&a){let c;t.mGM(c=t.lsd())&&(n.textfield=c.first)}},viewQuery:function(a,n){if(1&a&&t.GBs(_t,5),2&a){let l;t.mGM(l=t.lsd())&&(n.focusableElement=l.first)}},hostVars:17,hostBindings:function(a,n){1&a&&t.bIt("focusin",function(){return n.onFocused(!0)})("focusout",function(){return n.onFocused(!1)}),2&a&&(t.BMQ("data-size",n.size),t.xc7("--t-border-end",n.borderEnd,"rem")("--t-border-start",n.borderStart,"rem"),t.AVh("_ios",n.isIOS)("_expandable",n.expandable)("_has-counter",n.hasCounter)("_label-outside",n.labelOutside)("_has-tooltip",n.hasTooltip)("_has-value",n.hasValue))},inputs:{rows:"rows",maxLength:"maxLength",expandable:"expandable"},features:[t.Jv_([(0,D.Jr)(e),(0,E.SN)(e),N.ZW]),t.Vt3],ngContentSelectors:zt,decls:23,vars:27,consts:[[4,"ngIf"],["automation-id","tui-text-area__wrapper","tuiWrapper","",1,"t-outline",3,"appearance","disabled","focus","hover","invalid","readOnly"],["automation-id","tui-text-area__counter","class","t-counter",4,"ngIf"],[1,"t-content",3,"mousedown"],[1,"t-wrapper"],["automation-id","tui-text-area__placeholder","class","t-placeholder",3,"t-placeholder_raised",4,"ngIf"],["automation-id","tui-text-area__scrollbar",1,"t-box"],[1,"t-input-wrapper"],[1,"t-relative"],["aria-hidden","true",1,"t-pseudo-content"],[3,"textContent"],[1,"t-pseudo-content__extra",3,"textContent"],[1,"t-caret"],["automation-id","tui-text-area__native",1,"t-input",3,"disabled","id","ngModelOptions","readOnly","tabIndex","ngModel","ngModelChange"],["focusableElement",""],[1,"t-icons"],["class","t-icon t-icon_left t-textfield-icon",4,"ngIf"],["automation-id","tui-text-area__tooltip",3,"content","describeId",4,"ngIf"],["class","t-icon t-textfield-icon",4,"ngIf"],["automation-id","tui-text-area__counter",1,"t-counter"],["automation-id","tui-text-area__placeholder",1,"t-placeholder"],[1,"t-icon","t-icon_left","t-textfield-icon"],["tuiAppearance","icon",3,"icon",4,"polymorpheusOutlet","polymorpheusOutletContext"],["tuiAppearance","icon",3,"icon"],[3,"icon",4,"polymorpheusOutlet"],[3,"icon"],["tuiAppearance","icon","class","t-cleaner",3,"icon","click.stop",4,"polymorpheusOutlet","polymorpheusOutletContext"],["tuiAppearance","icon",1,"t-cleaner",3,"icon","click.stop"],["automation-id","tui-text-area__tooltip",3,"content","describeId"],[1,"t-icon","t-textfield-icon"]],template:function(a,n){1&a&&(t.NAR(Et),t.DNE(0,mt,1,0,"ng-container",0),t.nI1(1,"async"),t.j41(2,"div",1),t.DNE(3,ft,2,2,"div",2),t.j41(4,"label",3),t.bIt("mousedown",function(c){return n.onMouseDown(c)}),t.j41(5,"div",4),t.DNE(6,Ct,2,2,"div",5),t.j41(7,"tui-scrollbar",6)(8,"div",7)(9,"div",8)(10,"div",9),t.nrm(11,"span",10)(12,"span",11)(13,"span",12),t.k0s(),t.j41(14,"textarea",13,14),t.bIt("ngModelChange",function(c){return n.value=c}),t.k0s(),t.SdG(16),t.k0s()()()(),t.j41(17,"div",15),t.DNE(18,bt,2,4,"div",16),t.DNE(19,Ot,2,1,"ng-container",0),t.DNE(20,Pt,2,4,"ng-container",0),t.DNE(21,Mt,1,2,"tui-tooltip",17),t.DNE(22,yt,2,4,"div",18),t.k0s()()()),2&a&&(t.Y8G("ngIf",t.bMT(1,24,null==n.hintOptions?null:n.hintOptions.change$)),t.R7$(2),t.Y8G("appearance",n.appearance)("disabled",n.disabled)("focus",n.computedFocused)("hover",n.pseudoHover)("invalid",n.computedInvalid)("readOnly",n.readOnly),t.R7$(1),t.Y8G("ngIf",n.hasCounter),t.R7$(3),t.Y8G("ngIf",n.hasPlaceholder),t.R7$(1),t.xc7("max-height",n.computeMaxHeight,"px"),t.R7$(4),t.Y8G("textContent",n.fittedContent||(null==n.nativeFocusableElement?null:n.nativeFocusableElement.placeholder)),t.R7$(1),t.Y8G("textContent",n.extraContent),t.R7$(2),t.Y8G("disabled",n.computedDisabled)("id",n.id)("ngModelOptions",t.lJ4(26,It))("readOnly",n.readOnly)("tabIndex",n.computedFocusable?0:-1)("ngModel",n.value),t.R7$(4),t.Y8G("ngIf",n.iconLeftContent),t.R7$(1),t.Y8G("ngIf",n.hasCustomContent),t.R7$(1),t.Y8G("ngIf",n.hasCleaner),t.R7$(1),t.Y8G("ngIf",n.hasTooltip),t.R7$(1),t.Y8G("ngIf",n.iconContent))},dependencies:[u.bT,p.me,p.BC,p.vS,G.N0,P.x,F.l,M.xr,W.q,gt.bC,u.Jj],styles:["[_nghost-%COMP%]{position:relative;z-index:0;display:flex;flex-direction:column;min-block-size:var(--tui-textarea-height);border-radius:var(--tui-radius-m);color:var(--tui-text-primary)}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}[data-size=s][_nghost-%COMP%]{--tui-height: var(--tui-height-s);--tui-textarea-height: 4.5625rem;font:var(--tui-font-text-s)}[data-size=m][_nghost-%COMP%]{--tui-height: var(--tui-height-m);--tui-textarea-height: 5.5rem;font:var(--tui-font-text-s)}[data-size=l][_nghost-%COMP%]{--tui-height: var(--tui-height-l);--tui-textarea-height: 6.75rem;font:var(--tui-font-text-m)}[data-size=m]._has-counter[_nghost-%COMP%]{--tui-textarea-height: 6.625rem}[data-size=l]._has-counter[_nghost-%COMP%]{--tui-textarea-height: 7.875rem}@supports (-webkit-hyphens: none){[_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%], [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{text-wrap:balance}}.t-outline[_ngcontent-%COMP%]{min-block-size:inherit}.t-content[_ngcontent-%COMP%]{display:block;margin-top:0;margin-bottom:0;min-block-size:inherit;box-sizing:border-box;overflow:hidden;cursor:text}._disabled[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{cursor:auto;opacity:var(--tui-disabled-opacity)}[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:1px;right:0;min-block-size:auto}._has-counter[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{bottom:1.6875rem}._label-outside._has-counter[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{bottom:1rem}.t-wrapper[_ngcontent-%COMP%]{position:relative;inline-size:100%;block-size:100%;min-block-size:inherit;box-sizing:border-box;padding:calc((var(--tui-height) - 1.25rem) / 2) 0}[data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 1.5rem) / 2) 0}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 2.25rem) / 2) 0}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 2.625rem) / 2) 0}table[data-size=m]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%], table   [data-size=m]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding-bottom:.75rem}table[data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%], table   [data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding-bottom:1rem}.t-input-wrapper[_ngcontent-%COMP%]{min-block-size:inherit;inline-size:100%;flex:1}.t-relative[_ngcontent-%COMP%]{position:relative;min-block-size:inherit}.t-box[_ngcontent-%COMP%]{display:flex;min-block-size:calc(100% - 1rem);inline-size:100%;box-sizing:content-box}[_nghost-%COMP%]:not(._expandable)   .t-box[_ngcontent-%COMP%]{block-size:calc(100% - 1rem)}[_nghost-%COMP%]:not(._expandable)._label-outside   .t-box[_ngcontent-%COMP%]{block-size:100%}._has-counter._expandable[_nghost-%COMP%]   .t-box[_ngcontent-%COMP%]{margin-bottom:1.25rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-box[_ngcontent-%COMP%]{border-block-start:1rem solid transparent}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-box[_ngcontent-%COMP%]{border-block-start:1.25rem solid transparent}.t-pseudo-content[_ngcontent-%COMP%]{white-space:pre-wrap;overflow-wrap:break-word;word-break:keep-all;pointer-events:none;color:transparent;overflow:hidden;border:0 solid transparent;border-inline-start-width:var(--t-border-start, 0);border-inline-end-width:var(--t-border-end, 0)}[data-size=s][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%], [data-size=m][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=l][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%]{padding:0 1rem}.t-pseudo-content__extra[_ngcontent-%COMP%]{background-color:var(--tui-status-negative-pale)}.t-input[_ngcontent-%COMP%]{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;-webkit-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;inline-size:100%;block-size:100%;box-sizing:border-box;resize:none;overflow:hidden;outline:none;border-style:solid;border-color:transparent;border-inline-start-width:var(--t-border-start, 0);border-inline-end-width:var(--t-border-end, 0)}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus{-webkit-text-fill-color:var(--tui-text-primary)!important;border-color:var(--tui-service-autofill-background);box-shadow:0 0 0 100rem var(--tui-service-autofill-background) inset!important}.t-input[_ngcontent-%COMP%]:not(:last-of-type){display:none}.t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-tertiary);opacity:0}._focused[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]:not(:read-only)::placeholder{opacity:1}[data-size=s][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], [data-size=m][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding:0 .75rem;font:var(--tui-font-text-s)}[data-size=l][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding:0 1rem;font:var(--tui-font-text-m)}@supports (-webkit-marquee-repetition: infinite) and (object-fit: fill){._ios[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding-left:.8125rem}}.t-placeholder[_ngcontent-%COMP%]{transition-property:transform,font-size,color,letter-spacing;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;inline-size:100%;-webkit-user-select:none;user-select:none;font:var(--tui-font-text-s);color:var(--tui-text-secondary);pointer-events:none;will-change:transform;transform:translateY(0);position:absolute;top:calc(var(--tui-height) / 2 - .625rem);left:0;max-inline-size:100%;border:0 solid transparent;border-inline-start-width:var(--t-border-start, 0);border-inline-end-width:var(--t-border-end, 0);box-sizing:border-box}@supports (-webkit-hyphens: none){.t-placeholder[_ngcontent-%COMP%]{will-change:unset;transition-property:transform,color,letter-spacing}}.t-placeholder_raised[_ngcontent-%COMP%]{transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font:var(--tui-font-text-xs);line-height:1.25rem;transform:translateY(-.5rem);letter-spacing:.025rem}._invalid[_nghost-%COMP%]:not(._focused)   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-text-negative)}._focused[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-tertiary)}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font:var(--tui-font-text-m);line-height:1.25rem}[data-size=l][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font-size:.8156rem}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-primary)}[data-size=s][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=m][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 1rem}._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{overflow:initial;block-size:auto;white-space:initial}.t-icons[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0;display:flex;justify-content:flex-end;pointer-events:none;padding:calc((var(--tui-height) - 1.5rem) / 2) 1rem}[data-size=m][_nghost-%COMP%]   .t-icons[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 1.5rem) / 2) .625rem}.t-icons[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){margin-inline-start:.25rem}.t-icon[_ngcontent-%COMP%]{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none}.t-icon_left[_ngcontent-%COMP%]{margin-inline-end:auto}.t-cleaner[_ngcontent-%COMP%]{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none;pointer-events:auto;border-width:.25rem}._readonly[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%], ._disabled[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%]{pointer-events:none}.t-caret[_ngcontent-%COMP%]{display:inline-block;block-size:1rem;inline-size:0}.t-counter[_ngcontent-%COMP%]{position:absolute;right:.75rem;bottom:.5rem;font:var(--tui-font-text-s);pointer-events:none;margin-top:auto;text-align:end;color:var(--tui-text-tertiary)}._readonly[_nghost-%COMP%]   .t-textfield-icon[_ngcontent-%COMP%]     [tuiAppearance][data-appearance=icon]{pointer-events:none}@media (hover: hover) and (pointer: fine){[_nghost-%COMP%]:not(._readonly):not(._disabled):hover   .t-textfield-icon[_ngcontent-%COMP%]     [tuiAppearance][data-appearance=icon]:after{color:var(--tui-text-secondary)}}"],changeDetection:0}),i})(),Ft=(()=>{var e;class i extends E.aX{onValueChange(a){this.host.onValueChange(a)}}return(e=i).\u0275fac=function(){let o;return function(n){return(o||(o=t.xGo(e)))(n||e)}}(),e.\u0275dir=t.FsC({type:e,selectors:[["tui-textarea"]],features:[t.Jv_([(0,D.Sc)(e)]),t.Vt3]}),i})(),Nt=(()=>{var e;class i{}return(e=i).\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[u.MD,p.YN,G.N0,P.q,F.E,I.Rp,W.q]}),i})();var B=r(9922),Dt=r(2489),j=r(8503),Gt=r(9867),$=r(6111),Wt=r(9656),Bt=r(3229),jt=r(8621),Ht=r(7782),k=r(5180),Vt=r(6242),Xt=r(7187),Yt=r(656),Ut=r(5950),Lt=r(6425);const Qt=["tuiSidebar",""];function Kt(e,i){if(1&e&&(t.qex(0),t.EFF(1),t.bVm()),2&e){const o=i.polymorpheusOutlet;t.R7$(1),t.SpI(" ",o," ")}}let w=(()=>{var e;class i extends M.A7{constructor(){super(...arguments),this.injector=(0,t.WQX)(t.duS),this.service=(0,t.WQX)(Lt.I),this.component=new M.lS(H,this.injector),this.sidebarRef=null,this.direction="left",this.autoWidth=!1,this.content=(0,t.WQX)(t.C4Q)}set tuiSidebar(a){a?this.show():this.hide()}ngOnDestroy(){this.hide()}show(){null===this.sidebarRef&&(this.sidebarRef=this.service.add(this.component),this.sidebarRef.changeDetectorRef.detectChanges())}hide(){null!==this.sidebarRef&&(this.service.remove(this.sidebarRef),this.sidebarRef=null)}}return(e=i).\u0275fac=function(){let o;return function(n){return(o||(o=t.xGo(e)))(n||e)}}(),e.\u0275dir=t.FsC({type:e,selectors:[["","tuiSidebar",""]],inputs:{direction:["tuiSidebarDirection","direction"],autoWidth:["tuiSidebarAutoWidth","autoWidth"],tuiSidebar:"tuiSidebar"},standalone:!0,features:[t.Vt3]}),i})(),H=(()=>{var e;class i{constructor(){this.directive=(0,t.WQX)(w),this.options=(0,Ut.mo)((0,t.WQX)(Yt.nV)),this.left={...this.options,value:"left"},this.right={...this.options,value:"right"}}ngDoCheck(){this.directive.check()}get animation(){return"left"===this.direction?this.left:this.right}get direction(){return this.directive.direction}get content(){return this.directive.content}get autoWidth(){return this.directive.autoWidth}}return(e=i).\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.VBU({type:e,selectors:[["aside","tuiSidebar",""]],hostVars:3,hostBindings:function(a,n){2&a&&(t.zvX("@tuiSlideIn",n.animation),t.HbH("t-"+n.direction))},standalone:!0,features:[t.aNF],attrs:Qt,decls:2,vars:3,consts:[["tuiActiveZone","",1,"t-wrapper"],[4,"polymorpheusOutlet"]],template:function(a,n){1&a&&(t.j41(0,"div",0),t.DNE(1,Kt,2,1,"ng-container",1),t.k0s()),2&a&&(t.AVh("t-wrapper_auto-width",n.autoWidth),t.R7$(1),t.Y8G("polymorpheusOutlet",n.content))},dependencies:[M.xr,Vt.N],styles:['[_nghost-%COMP%]{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;display:flex}[_nghost-%COMP%]:before, [_nghost-%COMP%]:after{position:absolute;top:0;left:0;inline-size:100%;content:"";block-size:100%;background:#00000061;animation:tuiFadeIn var(--tui-duration)}[_nghost-%COMP%]:before{left:-100%;inline-size:200%}[_nghost-%COMP%]:after{left:100%}.ng-animating[_nghost-%COMP%]:before, .ng-animating[_nghost-%COMP%]:after{opacity:0;transition:opacity var(--tui-duration)}.t-right[_nghost-%COMP%]{justify-content:flex-end}.t-left[_nghost-%COMP%]{justify-content:flex-start}.t-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;background:var(--tui-background-base);box-shadow:0 10rem var(--tui-background-base);inline-size:17.25rem}.t-wrapper_auto-width[_ngcontent-%COMP%]{inline-size:auto}'],data:{animation:[Xt.ZM]},changeDetection:0}),i})();var A;function Jt(e,i){1&e&&(t.EFF(0," Speech recognition "),t.nrm(1,"tui-tooltip",11))}function Zt(e,i){if(1&e&&(t.j41(0,"span",13),t.EFF(1),t.k0s()),2&e){const o=i.$implicit;t.AVh("transcript_final",o.isFinal),t.R7$(1),t.SpI(" ",null==o[0]?null:o[0].transcript," ")}}function qt(e,i){if(1&e&&(t.qex(0),t.DNE(1,Zt,2,3,"span",12),t.EFF(2," \xa0 "),t.bVm()),2&e){const o=i.ngIf;t.R7$(1),t.Y8G("ngForOf",o)}}function te(e,i){1&e&&t.EFF(0,"Say \xabOk, Angular\xbb...")}function ee(e,i){if(1&e&&(t.j41(0,"button",15),t.EFF(1),t.k0s()),2&e){const o=i.$implicit;t.Y8G("value",o),t.R7$(1),t.SpI(" ",o.name," ")}}function ne(e,i){if(1&e&&(t.j41(0,"tui-data-list"),t.DNE(1,ee,2,2,"button",14),t.nI1(2,"async"),t.k0s()),2&e){const o=t.XpG(2);t.R7$(1),t.Y8G("ngForOf",t.bMT(2,2,o.voices$))("ngForTrackBy",o.voiceByName)}}function oe(e,i){1&e&&(t.j41(0,"div")(1,"div",16)(2,"h2"),t.EFF(3,"More from @ng-web-apis"),t.k0s(),t.j41(4,"a",17)(5,"h3"),t.EFF(6,"Workers"),t.k0s(),t.nrm(7,"img",18),t.k0s(),t.j41(8,"a",19)(9,"h3"),t.EFF(10,"Canvas"),t.k0s(),t.nrm(11,"img",20),t.k0s(),t.j41(12,"a",21)(13,"h3"),t.EFF(14,"Audio"),t.k0s(),t.nrm(15,"img",22),t.k0s(),t.j41(16,"a",23),t.EFF(17," See all "),t.k0s(),t.EFF(18," Tip: say \xabHide sidebar\xbb when you're done "),t.k0s()())}function ie(e,i){if(1&e){const o=t.RV6();t.qex(0),t.j41(1,"label",1),t.EFF(2),t.DNE(3,Jt,2,0,"ng-template",null,2,t.C5r),t.DNE(5,qt,3,1,"ng-container",3),t.nI1(6,"async"),t.DNE(7,te,1,0,"ng-template",null,4,t.C5r),t.k0s(),t.j41(9,"tui-select",5),t.bIt("ngModelChange",function(n){t.eBV(o);const l=t.XpG();return t.Njj(l.voice=n)}),t.EFF(10," Voice "),t.DNE(11,ne,3,4,"tui-data-list",6),t.k0s(),t.j41(12,"tui-textarea",7),t.bIt("ngModelChange",function(n){t.eBV(o);const l=t.XpG();return t.Njj(l.text=n)})("waTextToSpeechEnd",function(){t.eBV(o);const n=t.XpG();return t.Njj(n.onEnd())}),t.nI1(13,"waUtterance"),t.EFF(14," Text "),t.k0s(),t.j41(15,"div",8)(16,"button",9),t.bIt("click",function(){t.eBV(o);const n=t.XpG();return t.Njj(n.onClick())}),t.EFF(17),t.k0s(),t.EFF(18," Tip: say \xabShow sidebar\xbb "),t.k0s(),t.DNE(19,oe,19,0,"div",10),t.nI1(20,"async"),t.bVm()}if(2&e){const o=t.sdS(4),a=t.sdS(8),n=t.XpG();t.R7$(2),t.SpI(" ",o," "),t.R7$(3),t.Y8G("ngIf",t.bMT(6,10,n.record$))("ngIfElse",a),t.R7$(4),t.Y8G("valueContent",n.nameExtractor)("ngModel",n.voice),t.R7$(3),t.Y8G("waTextToSpeech",t.i5U(13,12,n.text,n.options))("waTextToSpeechPaused",n.paused)("ngModel",n.text),t.R7$(5),t.SpI(" ",n.paused?"Play":"Pause"," "),t.R7$(2),t.Y8G("tuiSidebar",t.bMT(20,15,n.open$)||!1)}}class g{constructor(){(0,s.A)(this,"recognition$",(0,t.WQX)(ot)),(0,s.A)(this,"platformId",(0,t.WQX)(t.Agw)),(0,s.A)(this,"voices$",(0,t.WQX)(rt)),(0,s.A)(this,"isBrowser",(0,u.UE)(this.platformId)),(0,s.A)(this,"paused",!0),(0,s.A)(this,"voice",null),(0,s.A)(this,"text","Hit play/pause to speak this text"),(0,s.A)(this,"nameExtractor",({$implicit:i})=>i.name)}get record$(){return this.result$.pipe(function Z(e){const i=O(e);return(0,K.F)((0,J.j)(o=>!i(o)),(0,x.T)((o,a)=>a?o:[]))}("Okay Angular"),function tt(e){const i=O(e);return(0,q.v)(o=>!i(o))}("Thank you Angular"),(0,B.u)(),function Q(){return(0,L.S)((e,i)=>[...e.filter(({isFinal:o})=>o),...i],[])}())}get open$(){return(0,Dt.h)(this.result$.pipe((0,j.p)(O("Show sidebar")),(0,x.T)(()=>!0)),this.result$.pipe((0,j.p)(O("Hide sidebar")),(0,x.T)(()=>!1)))}get options(){return this.getOptions(this.voice)}voiceByName(i,{name:o}){return o}onClick(){this.paused=!this.paused,this.text=this.paused?`${this.text} `:this.text}onEnd(){console.info("Speech synthesis ended")}get result$(){return this.recognition$.pipe(function $t(e=1/0){let i;i=e&&"object"==typeof e?e:{count:e};const{count:o=1/0,delay:a,resetOnSuccess:n=!1}=i;return o<=0?Wt.D:(0,Gt.N)((l,c)=>{let _,m=0;const d=()=>{let V=!1;_=l.subscribe((0,$._)(c,S=>{n&&(m=0),c.next(S)},void 0,S=>{if(m++<o){const X=()=>{_?(_.unsubscribe(),_=null,d()):V=!0};if(null!=a){const re="number"==typeof a?(0,Bt.O)(a):(0,jt.Tg)(a(S,m)),Y=(0,$._)(c,()=>{Y.unsubscribe(),X()},()=>{c.complete()});re.subscribe(Y)}else X()}else c.error(S)})),V&&(_.unsubscribe(),_=null,d())};d()})}(),(0,B.u)(),(0,Ht.u)())}getOptions(i){return{lang:"en-US",voice:i}}}A=g,(0,s.A)(g,"\u0275fac",function(i){return new(i||A)}),(0,s.A)(g,"\u0275cmp",t.VBU({type:A,selectors:[["speech-page"]],standalone:!0,features:[t.aNF],decls:1,vars:1,consts:[[4,"ngIf"],["tuiLabel","",1,"recognition"],["label",""],[4,"ngIf","ngIfElse"],["placeholder",""],[3,"valueContent","ngModel","ngModelChange"],[4,"tuiDataList"],[1,"textarea",3,"waTextToSpeech","waTextToSpeechPaused","ngModel","ngModelChange","waTextToSpeechEnd"],[1,"buttons"],["tuiButton","","type","button",3,"click"],[4,"tuiSidebar"],["content","Say \xabOk, Angular\xbb to start recording and \xabThank you, Angular\xbb to end"],["class","transcript",3,"transcript_final",4,"ngFor","ngForOf"],[1,"transcript"],["tuiOption","","type","button",3,"value",4,"ngFor","ngForOf","ngForTrackBy"],["tuiOption","","type","button",3,"value"],[1,"sidebar"],["href","https://github.com/taiga-family/ng-web-apis/tree/main/libs/workers","rel","noreferrer","target","_blank",1,"link"],["alt","Worker API logo","height","64","src","assets/logos/workers/logo.svg","width","64",1,"icon"],["href","https://github.com/taiga-family/ng-web-apis/tree/main/libs/canvas","rel","noreferrer","target","_blank",1,"link"],["alt","Worker API logo","height","64","src","assets/logos/canvas/logo.svg","width","64",1,"icon"],["href","https://github.com/taiga-family/ng-web-apis/tree/main/libs/audio","rel","noreferrer","target","_blank",1,"link"],["alt","Worker API logo","height","64","src","assets/logos/audio/logo.svg","width","64",1,"icon"],["href","https://ng-web-apis.github.io/","rel","noreferrer","target","_blank",1,"link"]],template:function(i,o){1&i&&t.DNE(0,ie,21,17,"ng-container",0),2&i&&t.Y8G("ngIf",o.isBrowser)},dependencies:[u.MD,u.Sq,u.bT,u.Jj,p.YN,p.BC,p.vS,st.p,k.uE,k.WX,k.aO,lt.z,y.pg,y.ET,y.ww,w,Nt,Rt,Ft,P.q,P.x,b,v],styles:["[_nghost-%COMP%]{display:block;max-inline-size:37.5rem;margin:0 auto}.transcript[_ngcontent-%COMP%]{opacity:.5;color:var(--tui-text-primary)}.transcript_final[_ngcontent-%COMP%]{opacity:1}.form[_ngcontent-%COMP%]{inline-size:20rem;margin:0 auto}.textarea[_ngcontent-%COMP%]{margin:16px 0;overflow:visible}.recognition[_ngcontent-%COMP%]{margin:16px 0;box-shadow:inset 0 0 0 1px #dcdcdc;border-radius:var(--tui-radius);padding:.5rem 1rem;color:var(--tui-text-secondary)}.buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.sidebar[_ngcontent-%COMP%]{padding:.75rem 1rem}.link[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;color:#444;border-radius:4px;border:1px solid #dcdcdc;font-size:.875rem;padding:16px;margin:1rem .625rem;box-sizing:border-box;transition:box-shadow .3s}.link[_ngcontent-%COMP%]:hover{box-shadow:0 .75rem 2.25rem #0003}"],changeDetection:0})),(0,f.Cg)([T.PE],g.prototype,"record$",null),(0,f.Cg)([T.PE],g.prototype,"open$",null),(0,f.Cg)([T.PE],g.prototype,"result$",null),(0,f.Cg)([T.PE],g.prototype,"getOptions",null);const ae=g},1753:(U,C,r)=>{r.d(C,{j:()=>u});var s=r(9867),f=r(6111);function u(t){return(0,s.N)((p,h)=>{let v=!1,R=0;p.subscribe((0,f._)(h,b=>(v||(v=!t(b,R++)))&&h.next(b)))})}}}]);