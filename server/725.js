"use strict";exports.id=725,exports.ids=[725],exports.modules={1725:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(16727),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(75407),_angular_forms__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(87742),_ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10346);function ResizeObserverPage_section_0_Template(rf,ctx){if(1&rf){const _r4=_angular_core__WEBPACK_IMPORTED_MODULE_1__.RV6();_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(0,"section",2)(1,"h1",3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.bIt("waResizeObserver",function($event){_angular_core__WEBPACK_IMPORTED_MODULE_1__.eBV(_r4);const ctx_r3=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG();return _angular_core__WEBPACK_IMPORTED_MODULE_1__.Njj(ctx_r3.onResize($event))}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(2," Resizable box "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(3,"label",4),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(4," Adjust width: "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(5,"input",5),_angular_core__WEBPACK_IMPORTED_MODULE_1__.bIt("ngModelChange",function($event){_angular_core__WEBPACK_IMPORTED_MODULE_1__.eBV(_r4);const ctx_r5=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG();return _angular_core__WEBPACK_IMPORTED_MODULE_1__.Njj(ctx_r5.widthPercent=$event)}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s()()()}if(2&rf){const ctx_r0=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG();_angular_core__WEBPACK_IMPORTED_MODULE_1__.R7$(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xc7("width",ctx_r0.widthPercent,"%"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.BMQ("data-ratio",ctx_r0.ratio),_angular_core__WEBPACK_IMPORTED_MODULE_1__.R7$(4),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y8G("ngModel",ctx_r0.widthPercent)}}function ResizeObserverPage_ng_template_1_Template(rf,ctx){1&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(0,"Your browser does not support Resize Observer API")}const __WEBPACK_DEFAULT_EXPORT__=(()=>{var _ResizeObserverPage;class ResizeObserverPage2{constructor(){this.support=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.WQX)(_ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_0__.Kq),this.ratio=0,this.widthPercent=50}onResize(entry){var _a;this.ratio=Math.round(((null==(_a=entry[0])?void 0:_a.contentRect.width)??0)/110)}}return(_ResizeObserverPage=ResizeObserverPage2).\u0275fac=function(t){return new(t||_ResizeObserverPage)},_ResizeObserverPage.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_1__.VBU({type:_ResizeObserverPage,selectors:[["resize-observer-page"]],standalone:!0,features:[_angular_core__WEBPACK_IMPORTED_MODULE_1__.aNF],decls:3,vars:2,consts:[["class","wrapper",4,"ngIf","ngIfElse"],["not",""],[1,"wrapper"],["waResizeBox","content-box",1,"element",3,"waResizeObserver"],[1,"width-slider"],["max","100","min","5","type","range","value","50",1,"slider",3,"ngModel","ngModelChange"]],template:function(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DNE(0,ResizeObserverPage_section_0_Template,6,4,"section",0),_angular_core__WEBPACK_IMPORTED_MODULE_1__.DNE(1,ResizeObserverPage_ng_template_1_Template,1,0,"ng-template",null,1,_angular_core__WEBPACK_IMPORTED_MODULE_1__.C5r)),2&rf){const _r1=_angular_core__WEBPACK_IMPORTED_MODULE_1__.sdS(2);_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y8G("ngIf",ctx.support)("ngIfElse",_r1)}},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.MD,_angular_common__WEBPACK_IMPORTED_MODULE_2__.bT,_angular_forms__WEBPACK_IMPORTED_MODULE_3__.YN,_angular_forms__WEBPACK_IMPORTED_MODULE_3__.me,_angular_forms__WEBPACK_IMPORTED_MODULE_3__.MR,_angular_forms__WEBPACK_IMPORTED_MODULE_3__.BC,_angular_forms__WEBPACK_IMPORTED_MODULE_3__.vS,_ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_0__.DQ],styles:['[_nghost-%COMP%]{perspective:150vw;-webkit-user-select:none;user-select:none;flex-direction:column;align-items:center}.width-slider[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.slider[_ngcontent-%COMP%]{margin:10px}.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;position:relative;width:100%;overflow:hidden}.element[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;text-align:center;padding:10px;width:80%;min-width:124px;height:200px;transition:background .1s}.element[data-ratio="1"][_ngcontent-%COMP%]{background:#e885eb}.element[data-ratio="2"][_ngcontent-%COMP%]{background:#c685eb}.element[data-ratio="3"][_ngcontent-%COMP%]{background:#ac85eb}.element[data-ratio="4"][_ngcontent-%COMP%]{background:#9885eb}.element[data-ratio="5"][_ngcontent-%COMP%]{background:#8591eb}.element[data-ratio="6"][_ngcontent-%COMP%]{background:#85a0eb}.element[data-ratio="7"][_ngcontent-%COMP%]{background:#84aeeb}.element[data-ratio="8"][_ngcontent-%COMP%]{background:#83beeb}.element[data-ratio="9"][_ngcontent-%COMP%]{background:#86d2eb}.element[data-ratio="10"][_ngcontent-%COMP%]{background:#87ddeb}.element[data-ratio="11"][_ngcontent-%COMP%]{background:#8ae5eb}.element[data-ratio="12"][_ngcontent-%COMP%]{background:#8bebdf}.element[data-ratio="13"][_ngcontent-%COMP%]{background:#83ebc8}.element[data-ratio="14"][_ngcontent-%COMP%]{background:#6beb99}.element[data-ratio="15"][_ngcontent-%COMP%]{background:#4ceb60}'],changeDetection:0}),ResizeObserverPage2})()},10346:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Kq:()=>RESIZE_OBSERVER_SUPPORT,ke:()=>ResizeObserverService,DQ:()=>WaResizeObserver});var core=__webpack_require__(75407),Observable=__webpack_require__(38041);const SafeObserver=typeof ResizeObserver<"u"?ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},RESIZE_OPTION_BOX=new core.nKC("[WA_RESIZE_OPTION_BOX]",{providedIn:"root",factory:()=>"content-box"});let ResizeObserverService=(()=>{var _ResizeObserverService;class ResizeObserverService2 extends Observable.c{constructor(){const nativeElement=(0,core.WQX)(core.aKT).nativeElement,box=(0,core.WQX)(RESIZE_OPTION_BOX);super(subscriber=>{const observer=new SafeObserver(entries=>subscriber.next(entries));return observer.observe(nativeElement,{box}),()=>{observer.disconnect()}})}}return(_ResizeObserverService=ResizeObserverService2).\u0275fac=function(t){return new(t||_ResizeObserverService)},_ResizeObserverService.\u0275prov=core.jDH({token:_ResizeObserverService,factory:_ResizeObserverService.\u0275fac}),ResizeObserverService2})(),WaResizeObserver=(()=>{var _WaResizeObserver;class WaResizeObserver2{constructor(){this.waResizeObserver=(0,core.WQX)(ResizeObserverService),this.box="content-box"}}return(_WaResizeObserver=WaResizeObserver2).\u0275fac=function(t){return new(t||_WaResizeObserver)},_WaResizeObserver.\u0275dir=core.FsC({type:_WaResizeObserver,selectors:[["","waResizeObserver",""]],inputs:{waResizeBox:["box","waResizeBox"]},outputs:{waResizeObserver:"waResizeObserver"},standalone:!0,features:[core.Jv_([ResizeObserverService,{provide:RESIZE_OPTION_BOX,useFactory:()=>(0,core.WQX)(core.aKT).nativeElement.getAttribute("waResizeBox")||"content-box"}])]}),WaResizeObserver2})();var src=__webpack_require__(13270);const RESIZE_OBSERVER_SUPPORT=new core.nKC("[WA_RESIZE_OBSERVER_SUPPORT]",{providedIn:"root",factory:()=>!!(0,core.WQX)(src.Qc).ResizeObserver})}};